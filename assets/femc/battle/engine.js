/* FEMC battle engine: rules only, no DOM. battle.js builds the units, calls these functions, and plays the events they return.
   Events are plain objects { t: 'hit' | 'heal' | ... } so a future renderer (or a test) can consume the same stream. */
window.FemcBattleEngine = (() => {
  const DATA = () => window.FEMC_BATTLE_DATA;
  const PHYS = new Set(['slash', 'strike', 'pierce']);
  const BUFF_TURNS = 3;

  /* Seedable RNG (mulberry32) so tests can replay a fight. */
  function rng(seed) {
    let a = seed >>> 0;
    return () => { a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  }

  function makeEnemy(kind, id, heat = 0) {
    const d = DATA().enemies[kind];
    const k = 1 + heat;
    return {
      id, side: 'enemy', kind, name: d.name, lvl: d.lvl + Math.round(heat * 10), boss: !!d.boss,
      hp: Math.round(d.hp * k), maxHp: Math.round(d.hp * k), sp: 999, maxSp: 999,
      st: d.st * (1 + heat * 0.6), ma: d.ma * (1 + heat * 0.6), en: d.en, ag: d.ag, lu: d.lu,
      aff: { ...d.aff }, baseAff: { ...d.aff }, skills: d.skills.slice(), ai: d.ai, exp: Math.round(d.exp * (1 + heat * 1.3)),
      down: false, guard: false, bound: 0, dead: false, buffs: { atk: 0, def: 0, agi: 0 }, buffT: { atk: 0, def: 0, agi: 0 }, boost: 1, turns: 0
    };
  }

  /* setup: { party: [unit], enemies: [kind], mods, known, rand, items, heat } */
  function create(setup) {
    const R = setup.rand || Math.random;
    const D = DATA();
    const mods = Object.assign({ crit: 0, critMult: 1.6, weakMult: 1, healMult: 1, bind: 0, ropeCrit: 0, shiftMult: 1.25, shiftSp: 0, alloutMult: 1, regen: 0 }, setup.mods || {});
    const S = {
      units: [], round: 0, queue: [], cur: null, oneMore: false, chain: new Set(), alloutReady: false, outcome: null,
      mods, known: setup.known || {}, items: setup.items || {}, heat: setup.heat || 0, extraUsed: false, uid: 0, boss: false, log: []
    };
    setup.party.forEach((p, i) => S.units.push(Object.assign({ id: 'p' + i, side: 'party', down: false, guard: false, bound: 0, dead: p.hp <= 0, buffs: { atk: 0, def: 0, agi: 0 }, buffT: { atk: 0, def: 0, agi: 0 }, boost: 1, turns: 0 }, p)));
    setup.enemies.forEach(kind => { const e = makeEnemy(kind, 'e' + S.uid++, S.heat); S.units.push(e); if (e.boss) S.boss = true; });

    const U = id => S.units.find(u => u.id === id);
    const party = () => S.units.filter(u => u.side === 'party');
    const foes = () => S.units.filter(u => u.side === 'enemy');
    const alive = list => list.filter(u => !u.dead);
    const sideOf = (u, same) => (u.side === 'party') === same ? party() : foes();
    const pick = list => list[Math.floor(R() * list.length)];
    const leader = () => party()[0];
    const skillOf = id => D.skills[id];
    const learn = (u, el) => {
      if (u.side !== 'enemy') return false;
      const k = S.known[u.kind] || (S.known[u.kind] = {});
      if (k[el]) return false;
      k[el] = true;
      return true;
    };

    /* ── Formulas ─────────────────────────────────────── */
    function power(src, sk) {
      const phys = PHYS.has(sk.el);
      const stat = phys ? src.st : src.ma;
      return sk.power * (stat + src.lvl * 0.5 + 4) / 16;
    }
    function rawDamage(src, tgt, sk) {
      let d = power(src, sk);
      d *= 1 + 0.25 * src.buffs.atk;
      d *= 1 - 0.2 * tgt.buffs.def;
      d /= 1 + tgt.en / 20;
      d *= 0.92 + R() * 0.16;
      d *= src.boost || 1;
      if (src.side === 'enemy') d *= 1.18; // Shadows hit a little harder than the formula alone
      if (tgt.guard) d *= 0.5;
      return d;
    }
    function hits(src, tgt, sk) {
      if (sk.sure || tgt.down || tgt.bound) return true;
      const base = sk.acc || (PHYS.has(sk.el) ? 93 : 97);
      const chance = base + (src.ag - tgt.ag) * 0.8 + 8 * (src.buffs.agi - tgt.buffs.agi);
      return R() * 100 < Math.max(60, chance);
    }
    function critChance(src, tgt, sk) {
      if (!PHYS.has(sk.el) || tgt.guard) return 0;
      let c = 3 + src.lu * 0.6 + (sk.crit || 0);
      if (src.side === 'party') c += mods.crit + (sk === skillOf('golden_rope') ? mods.ropeCrit : 0);
      else c *= 0.5;
      return c;
    }

    /* Resolve one damaging hit. Returns the event and whether it newly knocked the target down. */
    function strike(src, tgt, sk, ev) {
      if (!hits(src, tgt, sk)) { ev.push({ t: 'miss', src: src.id, tgt: tgt.id }); return false; }
      let aff = sk.el === 'almighty' ? 'normal' : (tgt.aff[sk.el] || 'normal');
      if (tgt.guard && aff === 'weak') aff = 'normal';
      if (src.side === 'party' && sk.el !== 'almighty' && learn(tgt, sk.el)) ev.push({ t: 'reveal', tgt: tgt.id, kind: tgt.kind, el: sk.el, aff: tgt.aff[sk.el] || 'normal' });
      if (aff === 'repel') {
        const d = Math.max(1, Math.round(rawDamage(src, src, sk) * (src.aff[sk.el] === 'resist' ? 0.5 : 1)));
        const back = (src.aff[sk.el] === 'null' || src.aff[sk.el] === 'repel') ? 0 : d;
        src.hp = Math.max(0, src.hp - back);
        if (src.hp <= 0) kill(src);
        ev.push({ t: 'hit', src: src.id, tgt: tgt.id, el: sk.el, aff: 'repel', amount: 0 });
        ev.push({ t: 'hit', src: tgt.id, tgt: src.id, el: sk.el, aff: back ? 'normal' : 'null', amount: back, hp: src.hp, maxHp: src.maxHp, killed: src.dead, reflected: true });
        return false;
      }
      if (aff === 'null') { ev.push({ t: 'hit', src: src.id, tgt: tgt.id, el: sk.el, aff, amount: 0, hp: tgt.hp, maxHp: tgt.maxHp }); return false; }
      let d = rawDamage(src, tgt, sk);
      if (aff === 'drain') {
        const amt = Math.max(1, Math.round(d));
        tgt.hp = Math.min(tgt.maxHp, tgt.hp + amt);
        ev.push({ t: 'hit', src: src.id, tgt: tgt.id, el: sk.el, aff, amount: amt, hp: tgt.hp, maxHp: tgt.maxHp });
        return false;
      }
      const crit = R() * 100 < critChance(src, tgt, sk);
      if (aff === 'weak') d *= 1.5 * (src.side === 'party' ? mods.weakMult : 1);
      if (aff === 'resist') d *= 0.5;
      if (crit) d *= mods.critMult;
      const amount = Math.max(1, Math.round(d));
      tgt.hp = Math.max(0, tgt.hp - amount);
      let downed = false, killed = false;
      if (tgt.hp <= 0) { kill(tgt); killed = true; }
      else if ((aff === 'weak' || crit) && !tgt.down && !tgt.guard) { tgt.down = true; downed = true; }
      let bound = false;
      if (!killed && sk.bind && tgt.side === 'enemy' && !DATA().enemies[tgt.kind].bindImmune && R() < sk.bind + (src.side === 'party' ? mods.bind : 0)) { tgt.bound = 1; bound = true; }
      ev.push({ t: 'hit', src: src.id, tgt: tgt.id, el: sk.el, aff, crit, amount, hp: tgt.hp, maxHp: tgt.maxHp, killed, downed, bound });
      return downed;
    }
    function kill(u) {
      u.dead = true; u.hp = 0; u.down = false; u.bound = 0; u.guard = false;
      u.buffs = { atk: 0, def: 0, agi: 0 }; u.buffT = { atk: 0, def: 0, agi: 0 };
    }
    function heal(src, tgt, amount, ev, sp = 0) {
      const before = tgt.hp;
      tgt.hp = Math.min(tgt.maxHp, tgt.hp + Math.round(amount));
      if (sp) tgt.sp = Math.min(tgt.maxSp, tgt.sp + sp);
      ev.push({ t: 'heal', src: src && src.id, tgt: tgt.id, amount: tgt.hp - before, sp, hp: tgt.hp, maxHp: tgt.maxHp, spNow: tgt.sp });
    }
    function buff(tgt, stat, dir, ev) {
      const v = Math.max(-1, Math.min(1, tgt.buffs[stat] + dir));
      tgt.buffs[stat] = v;
      tgt.buffT[stat] = v ? BUFF_TURNS : 0;
      ev.push({ t: 'buff', tgt: tgt.id, stat, dir, v });
    }

    /* ── Using a skill (party or enemy) ───────────────── */
    function targetsFor(src, sk, target) {
      const same = ['ally', 'allies', 'dead', 'self'].includes(sk.target);
      const pool = sideOf(src, same);
      if (sk.target === 'self') return [src];
      if (sk.target === 'all' || sk.target === 'allies') return alive(pool);
      if (sk.target === 'dead') { const t = U(target); return t && t.dead ? [t] : []; }
      let t = U(target);
      if (!t || t.dead) t = alive(pool)[0];
      return t ? [t] : [];
    }
    function payCost(u, sk) {
      if (u.side !== 'party' || !sk.cost) return;
      if (sk.cost.sp) u.sp -= sk.cost.sp;
      if (sk.cost.hp) u.hp = Math.max(1, u.hp - Math.round(u.maxHp * sk.cost.hp / 100));
    }
    function canPay(u, sk) {
      if (!sk.cost) return true;
      if (sk.cost.sp) return u.sp >= sk.cost.sp;
      if (sk.cost.hp) return u.hp > Math.round(u.maxHp * sk.cost.hp / 100);
      return true;
    }
    function useSkill(src, skId, target, ev) {
      const sk = skId === 'attack' ? Object.assign({}, D.attack, { el: src.weapon || 'strike' }) : skillOf(skId);
      payCost(src, sk);
      const tgts = targetsFor(src, sk, target);
      ev.push({ t: 'use', src: src.id, skill: skId, name: sk.name, el: sk.el, tgts: tgts.map(u => u.id), summon: skId !== 'attack' && src.side === 'party', cost: sk.cost || null, hp: src.hp, sp: src.sp });
      let downs = 0;
      if (sk.type === 'dmg') tgts.forEach(t => { if (!t.dead && strike(src, t, sk, ev)) downs++; });
      else if (sk.type === 'heal') tgts.forEach(t => heal(src, t, power(src, sk) * (src.side === 'party' ? (src.healMult || 1) : 1), ev));
      else if (sk.type === 'revive') tgts.forEach(t => { t.dead = false; t.hp = 0; ev.push({ t: 'revive', tgt: t.id }); heal(src, t, t.maxHp * sk.power / 100, ev); });
      else if (sk.type === 'buff') tgts.forEach(t => { [].concat(sk.stat).forEach(s => buff(t, s, 1, ev)); if (sk.sp) heal(null, t, 0, ev, sk.sp); });
      else if (sk.type === 'debuff') tgts.forEach(t => buff(t, sk.stat, -1, ev));
      src.boost = 1;
      return downs;
    }

    /* ── Turn flow ────────────────────────────────────── */
    function order() {
      return alive(S.units).map(u => ({ u, k: u.ag * (1 + 0.25 * u.buffs.agi) + R() * 2.5 })).sort((a, b) => b.k - a.k).map(x => x.u.id);
    }
    /* Upcoming actors for the HUD: the rest of this round, then next round's rough order. */
    function upcoming(n = 8) {
      const rest = S.queue.map(U).filter(u => u && !u.dead);
      const next = alive(S.units).slice().sort((a, b) => b.ag - a.ag);
      return rest.concat(next).slice(0, n).map(u => u.id);
    }

    function nextTurn() {
      const ev = [];
      S.oneMore = false; S.alloutReady = false; S.chain.clear(); S.extraUsed = false;
      let u = null;
      while (!u) {
        if (!S.queue.length) { S.round++; S.queue = order(); ev.push({ t: 'round', n: S.round }); }
        const c = U(S.queue.shift());
        if (c && !c.dead) u = c;
      }
      S.cur = u;
      u.turns++;
      u.guard = false;
      ['atk', 'def', 'agi'].forEach(s => { if (u.buffT[s] > 0 && --u.buffT[s] === 0) { u.buffs[s] = 0; ev.push({ t: 'buffEnd', tgt: u.id, stat: s }); } });
      let canAct = true;
      if (u.ai === 'priestess') {
        const veils = D.enemies[u.kind].veil;
        u.veil = veils[(u.turns - 1) % veils.length];
        u.aff = Object.assign({}, u.baseAff, { [u.veil]: 'weak' });
        ev.push({ t: 'veil', tgt: u.id, el: u.veil });
      }
      if (u.down) { u.down = false; ev.push({ t: 'standup', tgt: u.id }); if (u.side === 'enemy') canAct = false; }
      if (canAct && u.bound > 0) { u.bound--; ev.push({ t: 'bound', tgt: u.id }); canAct = false; }
      return { actor: u.id, canAct, events: ev };
    }
    function endTurn(u, ev) {
      if (u.side === 'party' && u === leader() && mods.regen && !u.dead) alive(party()).forEach(p => { if (p.hp < p.maxHp) heal(null, p, p.maxHp * mods.regen, ev); });
      u.boost = 1;
      S.oneMore = false; S.alloutReady = false;
    }
    function afterAction(u, downs, ev) {
      check();
      if (S.outcome) return;
      if (u.dead) { endTurn(u, ev); return; }
      if (u.side === 'party') {
        if (downs > 0) {
          S.chain.add(u.id);
          if (alive(foes()).every(f => f.down)) { S.alloutReady = true; S.oneMore = true; ev.push({ t: 'alloutReady', src: u.id }); }
          else { S.oneMore = true; ev.push({ t: 'onemore', src: u.id }); }
        } else endTurn(u, ev);
      } else if (downs > 0 && !S.extraUsed) {
        S.extraUsed = true; S.oneMore = true; ev.push({ t: 'onemore', src: u.id });
      } else S.oneMore = false;
    }
    function check() {
      if (!alive(foes()).length) S.outcome = 'win';
      else if (leader().dead || !alive(party()).length) S.outcome = 'lose';
      return S.outcome;
    }

    /* Commands available to a party member right now. */
    function canShiftTo(u) {
      const a = U(S.cur && S.cur.id);
      return !!(a && a.side === 'party' && S.oneMore && u && u.side === 'party' && !u.dead && u !== a && !S.chain.has(u.id));
    }
    function act(action) {
      const u = S.cur, ev = [];
      if (!u || S.outcome) return ev;
      S.alloutReady = false;
      const wasOneMore = S.oneMore;
      S.oneMore = false;
      if (action.type === 'attack') afterAction(u, useSkill(u, 'attack', action.target, ev), ev);
      else if (action.type === 'skill') {
        const sk = skillOf(action.skill);
        if (!sk || !u.skills.includes(action.skill) || !canPay(u, sk)) { S.oneMore = wasOneMore; return [{ t: 'msg', text: 'Not enough ' + (sk && sk.cost && sk.cost.hp ? 'HP' : 'SP') + '.' }]; }
        afterAction(u, useSkill(u, action.skill, action.target, ev), ev);
      } else if (action.type === 'guard') { u.guard = true; ev.push({ t: 'guard', src: u.id }); endTurn(u, ev); }
      else if (action.type === 'item') {
        const it = D.items[action.item];
        if (!it || !(S.items[action.item] > 0)) return [{ t: 'msg', text: 'None left.' }];
        S.items[action.item]--;
        const t = U(action.target);
        ev.push({ t: 'item', src: u.id, item: action.item, name: it.name, tgt: t && t.id });
        if (it.type === 'heal' && t && !t.dead) heal(u, t, it.hp, ev);
        else if (it.type === 'sp' && t && !t.dead) heal(u, t, 0, ev, it.sp);
        else if (it.type === 'revive' && t && t.dead) { t.dead = false; t.hp = 0; ev.push({ t: 'revive', tgt: t.id }); heal(u, t, t.maxHp * it.hp, ev); }
        endTurn(u, ev);
      } else if (action.type === 'escape') {
        if (S.boss) { S.oneMore = wasOneMore; return [{ t: 'msg', text: 'There’s no escape from the full moon!' }]; }
        const avg = l => l.reduce((s, x) => s + x.ag, 0) / Math.max(1, l.length);
        const chance = Math.max(25, Math.min(90, 55 + (avg(alive(party())) - avg(alive(foes()))) * 4 + (alive(foes()).some(f => f.down) ? 20 : 0)));
        const ok = R() * 100 < chance;
        ev.push({ t: 'escape', ok });
        if (ok) S.outcome = 'escaped'; else endTurn(u, ev);
      } else if (action.type === 'shift') {
        const t = U(action.to);
        S.oneMore = wasOneMore;
        const ok = wasOneMore && canShiftTo(t);
        S.oneMore = false;
        if (!ok) { S.oneMore = wasOneMore; return [{ t: 'msg', text: 'Can’t shift now.' }]; }
        S.chain.add(u.id);
        t.boost = mods.shiftMult;
        if (mods.shiftSp) t.sp = Math.min(t.maxSp, t.sp + mods.shiftSp);
        S.cur = t;
        if (t.down) t.down = false;
        ev.push({ t: 'shift', src: u.id, tgt: t.id, boost: mods.shiftMult, sp: mods.shiftSp, spNow: t.sp });
        S.oneMore = false;
        S.shifted = true;
      }
      return ev;
    }
    /* A free action: reveals every affinity of one foe (Fuuka's scan). */
    function analyze(target) {
      const t = U(target), ev = [];
      if (!t || t.side !== 'enemy') return ev;
      const k = S.known[t.kind] || (S.known[t.kind] = {});
      D.affinityOrder.forEach(el => { k[el] = true; });
      ev.push({ t: 'analyze', tgt: t.id, kind: t.kind });
      return ev;
    }
    function allOut() {
      const ev = [], u = S.cur;
      const parts = alive(party());
      const hitsOut = [];
      alive(foes()).forEach(f => {
        let d = parts.reduce((s, p) => s + (p.st + p.lvl * 0.5 + 6) * 2.3 * (1 + 0.25 * p.buffs.atk), 0);
        d *= (0.9 + R() * 0.2) * mods.alloutMult * (D.enemies[f.kind].alloutResist || 1);
        d /= 1 + f.en / 40;
        const amount = Math.round(d);
        f.hp = Math.max(0, f.hp - amount);
        if (f.hp <= 0) kill(f);
        hitsOut.push({ tgt: f.id, amount, hp: f.hp, maxHp: f.maxHp, killed: f.dead });
      });
      foes().forEach(f => { f.down = false; });
      ev.push({ t: 'allout', src: u.id, parts: parts.map(p => p.id), hits: hitsOut });
      check();
      endTurn(u, ev);
      return ev;
    }
    /* Start-of-battle party buff (Star tree capstone). */
    function openBuff(stat) { const ev = []; alive(party()).forEach(p => buff(p, stat, 1, ev)); return ev; }
    function declineAllOut() { S.alloutReady = false; S.oneMore = true; return [{ t: 'onemore', src: S.cur.id }]; }

    /* ── Shadow AI ────────────────────────────────────── */
    const lowest = list => list.slice().sort((a, b) => a.hp / a.maxHp - b.hp / b.maxHp)[0];
    const dmgMoves = u => u.skills.filter(id => skillOf(id).type === 'dmg' && id !== 'lunar_tide');
    const AI = {
      random(u) { const s = pick(dmgMoves(u)); return { skill: s, target: pick(alive(party())).id }; },
      coward(u) {
        if (R() < 0.22) return { skill: 'tremble' };
        return AI.random(u);
      },
      weakest(u) {
        const deb = u.skills.find(id => skillOf(id).type === 'debuff');
        const strongest = alive(party()).filter(p => p.buffs.atk >= 0).sort((a, b) => b.st - a.st)[0];
        if (deb && strongest && R() < 0.25) return { skill: deb, target: strongest.id };
        return { skill: pick(dmgMoves(u)), target: lowest(alive(party())).id };
      },
      buffer(u) {
        const b = u.skills.find(id => skillOf(id).type === 'buff');
        const sk = b && skillOf(b);
        const allies = sk ? alive(foes()).filter(f => f.buffs[sk.stat] < 1) : [];
        const boss = allies.find(f => f.boss);
        if (b && allies.length && R() < 0.6) return { skill: b, target: (boss || pick(allies)).id };
        return AI.random(u);
      },
      exploit(u) {
        const opts = [];
        dmgMoves(u).forEach(id => alive(party()).forEach(p => { if (p.aff[skillOf(id).el] === 'weak' && !p.guard) opts.push({ skill: id, target: p.id }); }));
        if (opts.length && R() < 0.75) return pick(opts);
        return AI.random(u);
      },
      healer(u) {
        const hurt = alive(foes()).filter(f => f.hp / f.maxHp < 0.6);
        if (hurt.length > 1 && u.skills.includes('e_media') && R() < 0.8) return { skill: 'e_media' };
        if (hurt.length && R() < 0.8) return { skill: 'e_dia', target: lowest(hurt).id };
        return AI.random(u);
      },
      priestess(u) {
        if (u.charge) { u.charge = false; return { skill: 'lunar_tide' }; }
        if (!u.summoned && u.hp / u.maxHp <= 0.5) { u.summoned = true; return { skill: 'call_mirrors' }; }
        if (u.turns % 3 === 2) { u.charge = true; return { skill: 'gather' }; }
        const r = R();
        if (r < 0.35) return { skill: 'e_mabufu' };
        if (r < 0.5) { const t = alive(party()).filter(p => p.buffs.atk >= 0).sort((a, b) => b.st - a.st)[0]; if (t) return { skill: 'e_tarunda', target: t.id }; }
        return { skill: 'e_bufula', target: lowest(alive(party())).id };
      }
    };
    function enemyAct() {
      const u = S.cur, ev = [];
      if (!u || u.dead || S.outcome) return ev;
      S.oneMore = false;
      const move = (AI[u.ai] || AI.random)(u);
      const sk = skillOf(move.skill);
      if (sk.type === 'special') {
        ev.push({ t: 'use', src: u.id, skill: move.skill, name: sk.name, el: 'none', tgts: [] });
        if (move.skill === 'tremble') ev.push({ t: 'msg', text: u.name + ' is trembling…', src: u.id });
        if (move.skill === 'gather') ev.push({ t: 'telegraph', src: u.id });
        if (move.skill === 'call_mirrors') {
          const added = D.enemies[u.kind].summon.map(k => { const e = makeEnemy(k, 'e' + S.uid++, S.heat); S.units.push(e); return e.id; });
          ev.push({ t: 'summon', src: u.id, ids: added });
        }
        return ev;
      }
      const downs = useSkill(u, move.skill, move.target, ev);
      afterAction(u, downs, ev);
      return ev;
    }

    return {
      S, U, party, foes, alive, leader, act, openBuff, analyze, allOut, declineAllOut, enemyAct, nextTurn, upcoming, canPay, canShiftTo,
      outcome: () => S.outcome || check(), skillOf, known: kind => S.known[kind] || {}
    };
  }

  return { create, rng, PHYS };
})();
