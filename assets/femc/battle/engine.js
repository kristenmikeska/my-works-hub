/* FEMC battle rules, with no DOM. Every call returns a list of events for battle.js to play back,
   so the rules can be tested on their own (tests/battle.test.cjs).
   Flow: create() → next() starts each turn → the party acts with act() (plus shift()/allOut() after a One More),
   enemies act with enemyTurn() → next() again, until b.phase is won, lost or fled. */
window.FemcBattleEngine = (() => {
  const D = () => window.FEMC_BATTLE_DATA;
  const MULT = { weak: 1.5, resist: .5, crit: 1.5, guard: .5, shift: 1.25 };

  function unit(src, side, extra = {}) {
    return { side, down: false, guard: false, bind: 0, dead: false, boost: 1, ...src, ...extra,
      aff: { ...(src.aff || {}) }, skills: [...(src.skills || [])] };
  }

  // party: units built by battle.js from the save (with hp/sp/lv filled in). enemies: SHADOWS keys.
  function create({ party, enemies, level = 1, items = {}, flags = {}, rng = Math.random }) {
    const counts = {};
    const foes = enemies.map(key => {
      const s = D().SHADOWS[key];
      counts[key] = (counts[key] || 0) + 1;
      const hp = Math.round(s.hp * (1 + (level - 1) * .12));
      return unit(s, 'enemy', { key, id: `${key}-${counts[key]}`, lv: level, hp, maxHp: hp, sp: 999, maxSp: 999 });
    });
    // Letter duplicates: Cowardly Maya A, Cowardly Maya B.
    foes.forEach(f => { if (counts[f.key] > 1) f.name += ' ' + 'ABCDE'[+f.id.split('-').pop() - 1]; });
    return { party: party.map(p => unit(p, 'party')), enemies: foes, items: { ...items }, flags, rng,
      round: 0, queue: [], turn: null, phase: 'start', oneMore: false, shifted: [], boss: foes.some(f => f.boss) };
  }

  const all = b => [...b.party, ...b.enemies];
  const find = (b, id) => all(b).find(u => u.id === id);
  const alive = list => list.filter(u => !u.dead);
  const foesOf = (b, u) => (u.side === 'party' ? b.enemies : b.party);
  const friendsOf = (b, u) => (u.side === 'party' ? b.party : b.enemies);
  const leader = b => b.party[0];

  // Turn order for a round: fastest first, ties broken at random. A boss with acts: 2 is queued twice.
  function order(b) {
    return alive(all(b)).map(u => ({ u, k: u.agi + b.rng() * 3 })).sort((x, y) => y.k - x.k)
      .flatMap(({ u }) => Array(u.acts || 1).fill(u.id));
  }
  // The next few turns, for the turn-order strip.
  function upcoming(b, n = 8) {
    const ids = [...(b.turn ? [b.turn] : []), ...b.queue].filter(id => !find(b, id).dead);
    const extra = alive(all(b)).sort((x, y) => y.agi - x.agi).flatMap(u => Array(u.acts || 1).fill(u.id));
    while (ids.length < n && extra.length) ids.push(...extra);
    return ids.slice(0, n).map(id => find(b, id));
  }

  function check(b, ev) {
    if (!alive(b.enemies).length) { b.phase = 'won'; b.turn = null; ev.push({ t: 'won', exp: b.enemies.reduce((s, e) => s + e.exp, 0) }); return true; }
    if (leader(b).dead || !alive(b.party).length) { b.phase = 'lost'; b.turn = null; ev.push({ t: 'lost' }); return true; }
    return false;
  }

  // Start the next turn. Downed units spend their turn getting up; bound units lose theirs.
  function next(b) {
    const ev = [];
    if (b.phase === 'won' || b.phase === 'lost' || b.phase === 'fled') return ev;
    b.oneMore = false; b.shifted = [];
    b.party.forEach(p => { p.boost = 1; });
    for (let guard = 0; guard < 50; guard++) {
      if (!b.queue.length) { b.round++; b.queue = order(b); ev.push({ t: 'round', n: b.round }); }
      const u = find(b, b.queue.shift());
      if (!u || u.dead) continue;
      u.guard = false;
      if (u.bind > 0) { u.bind--; ev.push({ t: 'skip', who: u.id, why: 'bound' }); continue; }
      if (u.down) { u.down = false; ev.push({ t: 'stand', who: u.id }); continue; }
      if (u.side === 'party' && u.id === 'solar' && b.flags.sunrise && u.hp < u.maxHp) {
        const amt = Math.min(u.maxHp - u.hp, Math.ceil(u.maxHp * .05));
        u.hp += amt; ev.push({ t: 'heal', target: u.id, amt, quiet: true });
      }
      b.turn = u.id; b.phase = u.side === 'party' ? 'party' : 'enemy';
      ev.push({ t: 'turn', who: u.id });
      return ev;
    }
    return ev;
  }

  function cost(u, s) {
    if (s.hp) return { hp: Math.max(1, Math.ceil(u.maxHp * s.hp)) };
    if (s.cost) return { sp: s.cost };
    return {};
  }
  function canUse(u, key) {
    const s = D().SKILLS[key];
    if (!s) return false;
    const c = cost(u, s);
    if (c.hp) return u.hp > c.hp;
    if (c.sp) return u.side === 'enemy' || u.sp >= c.sp;
    return true;
  }

  function damage(b, user, target, s, ev) {
    const phys = D().ELEMENTS[s.el]?.phys;
    const atk = phys ? user.str : user.mag;
    let dmg = s.power * (.35 + atk * .035) * (1 + ((user.lv || 1) - 1) * .04) / (1 + target.end * .03);
    dmg *= .9 + b.rng() * .2;
    dmg *= user.boost || 1;
    if (s.el === 'light' && user.id === 'solar' && b.flags.morningStar) dmg *= 1.25;
    let aff = target.aff[s.el];
    if (aff === 'weak' && target.guard) aff = null;
    const out = { t: 'hit', target: target.id, el: s.el, kind: 'normal', down: false };
    if (aff) ev.push({ t: 'reveal', target: target.id, key: target.key, el: s.el, aff });
    // A small miss chance, a little higher against fast targets. Weaknesses always land.
    if (aff !== 'weak' && b.rng() < .04 + Math.max(0, target.agi - user.agi) * .006) {
      ev.push({ t: 'miss', target: target.id }); return null;
    }
    if (aff === 'null') { out.kind = 'block'; out.dmg = 0; ev.push(out); return out; }
    if (aff === 'repel') {
      ev.push({ ...out, kind: 'repel', dmg: 0 });
      return damage(b, target, user, s, ev);
    }
    if (aff === 'drain') {
      const amt = Math.min(target.maxHp - target.hp, Math.round(dmg));
      target.hp += amt; ev.push({ ...out, kind: 'drain', dmg: 0, amt }); return out;
    }
    if (aff === 'weak') { dmg *= MULT.weak; out.kind = 'weak'; }
    else if (aff === 'resist') { dmg *= MULT.resist; out.kind = 'resist'; }
    else if (phys && !target.guard && b.rng() < (s.crit || 0) + Math.max(0, user.agi - target.agi) * .004) { dmg *= MULT.crit; out.kind = 'crit'; }
    if (target.guard) dmg *= MULT.guard;
    out.dmg = Math.max(1, Math.round(dmg));
    target.hp = Math.max(0, target.hp - out.dmg);
    if ((out.kind === 'weak' || out.kind === 'crit') && !target.down && target.hp > 0) { target.down = true; out.down = true; }
    ev.push(out);
    if (target.hp <= 0) { target.dead = true; target.down = false; ev.push({ t: 'dead', target: target.id }); }
    return out;
  }

  function bindRoll(b, user, target, s, ev) {
    const chance = s === D().SKILLS.goldenRope && b.flags.rope ? .5 : s.bind;
    if (!chance || target.dead || target.bind) return;
    if (target.boss ? b.rng() < chance / 3 : b.rng() < chance) { target.bind = 1; ev.push({ t: 'bind', target: target.id }); }
  }

  function targets(b, u, s, targetId) {
    if (s.target === 'all') return alive(foesOf(b, u));
    if (s.target === 'allies') return alive(friendsOf(b, u));
    if (s.target === 'self') return [u];
    const t = find(b, targetId);
    return t ? [t] : [];
  }

  // The acting unit uses a skill (or 'attack'). Returns events; ends the turn unless it earned a One More.
  function useSkill(b, u, key, targetId, ev) {
    const s = D().SKILLS[key];
    const c = cost(u, s);
    if (c.hp) { u.hp -= c.hp; ev.push({ t: 'cost', who: u.id, hp: c.hp }); }
    if (c.sp && u.side === 'party') { u.sp -= c.sp; ev.push({ t: 'cost', who: u.id, sp: c.sp }); }
    ev.push({ t: 'cast', who: u.id, skill: key, name: s.name, el: s.el, persona: key !== 'attack' && u.persona, target: targetId, all: s.target === 'all' || s.target === 'allies' });
    let knocked = false;
    for (const t of targets(b, u, s, targetId)) {
      if (s.heal) {
        if (t.dead) continue;
        const amt = Math.min(t.maxHp - t.hp, Math.round(s.heal * (1 + u.mag * .03)));
        t.hp += amt; ev.push({ t: 'heal', target: t.id, amt });
        continue;
      }
      if (t.dead) continue;
      const hit = s.power ? damage(b, u, t, s, ev) : { kind: 'normal' };
      if (hit && hit.down) knocked = true;
      if (hit && hit.kind !== 'block' && hit.kind !== 'drain' && hit.kind !== 'repel') bindRoll(b, u, t, s, ev);
    }
    return knocked;
  }

  function endOrOneMore(b, u, knocked, ev) {
    if (check(b, ev)) return ev;
    if (knocked && !u.dead) {
      b.oneMore = u.side === 'party';
      ev.push({ t: 'onemore', who: u.id, allDown: u.side === 'party' && alive(b.enemies).every(e => e.down) });
      return ev; // b.turn stays with the same unit
    }
    b.turn = null; b.oneMore = false;
    return ev;
  }

  // action: { type: 'attack' | 'skill' | 'guard' | 'item' | 'escape', skill, item, target }
  function act(b, action) {
    const ev = [];
    const u = find(b, b.turn);
    if (!u || b.phase !== 'party' && b.phase !== 'enemy') return ev;
    if (action.type === 'guard') {
      u.guard = true; ev.push({ t: 'guard', who: u.id }); b.turn = null; b.oneMore = false; return ev;
    }
    if (action.type === 'escape') {
      if (b.boss) { ev.push({ t: 'msg', text: 'There’s no escape!' }); return ev; }
      const fast = alive(b.party).reduce((s, p) => s + p.agi, 0) / alive(b.party).length;
      const slow = alive(b.enemies).reduce((s, e) => s + e.agi, 0) / alive(b.enemies).length;
      if (b.rng() < .55 + (fast - slow) * .03) { b.phase = 'fled'; b.turn = null; ev.push({ t: 'fled' }); return ev; }
      ev.push({ t: 'msg', text: 'Couldn’t get away!' }); b.turn = null; b.oneMore = false; return ev;
    }
    if (action.type === 'item') {
      const it = D().ITEMS[action.item], t = find(b, action.target);
      if (!it || !(b.items[action.item] > 0) || !t) return ev;
      b.items[action.item]--;
      ev.push({ t: 'item', who: u.id, item: action.item, name: it.name, target: t.id });
      if (it.revive) { if (t.dead) { t.dead = false; t.down = false; t.hp = Math.round(t.maxHp * it.revive); ev.push({ t: 'revive', target: t.id, hp: t.hp }); } }
      else if (!t.dead) {
        if (it.heal) { const amt = Math.min(t.maxHp - t.hp, it.heal); t.hp += amt; ev.push({ t: 'heal', target: t.id, amt }); }
        if (it.sp) { const amt = Math.min(t.maxSp - t.sp, it.sp); t.sp += amt; ev.push({ t: 'sp', target: t.id, amt }); }
      }
      b.turn = null; b.oneMore = false; return ev;
    }
    const key = action.type === 'attack' ? 'attack' : action.skill;
    if (!canUse(u, key)) return ev;
    const knocked = useSkill(b, u, key, action.target, ev);
    return endOrOneMore(b, u, knocked, ev);
  }

  // After a One More: hand the turn to another member, who hits 25% harder. Each member once per chain.
  function canShift(b, id) {
    const t = find(b, id), u = find(b, b.turn);
    return !!(b.oneMore && u && t && t.side === 'party' && t !== u && !t.dead && !t.down && !b.shifted.includes(id) && id !== b.shifted[0]);
  }
  function shift(b, id) {
    const ev = [];
    if (!canShift(b, id)) return ev;
    const from = b.turn;
    if (!b.shifted.length) b.shifted.push(from);
    b.shifted.push(id);
    const t = find(b, id);
    t.boost = (t.boost || 1) * MULT.shift;
    b.turn = id; b.oneMore = false;
    ev.push({ t: 'shift', from, to: id });
    return ev;
  }

  function allOut(b) {
    const ev = [];
    if (!b.oneMore || !alive(b.enemies).every(e => e.down)) return ev;
    ev.push({ t: 'allout' });
    const crew = alive(b.party).filter(p => !p.down);
    const power = crew.reduce((s, p) => s + p.str * 1.6 + p.lv * 2, 0);
    for (const e of alive(b.enemies)) {
      const dmg = Math.max(1, Math.round(power * (.9 + b.rng() * .2) * (1 + crew.length * .15) / (1 + e.end * .03)));
      e.hp = Math.max(0, e.hp - dmg); e.down = false;
      ev.push({ t: 'hit', target: e.id, dmg, kind: 'allout' });
      if (e.hp <= 0) { e.dead = true; ev.push({ t: 'dead', target: e.id }); }
    }
    if (!check(b, ev)) { b.turn = null; b.oneMore = false; }
    return ev;
  }

  // Enemy AI: hits known party weaknesses more often than not, otherwise picks at random.
  function enemyTurn(b) {
    const u = find(b, b.turn);
    if (!u || u.side !== 'enemy') return [];
    const usable = u.skills.filter(k => canUse(u, k));
    const targetsAlive = alive(b.party);
    let pick = null;
    if (b.rng() < .6) {
      const options = [];
      usable.forEach(k => {
        const s = D().SKILLS[k];
        if (s.target === 'all') { if (targetsAlive.some(p => p.aff[s.el] === 'weak' && !p.down)) options.push([k, null]); }
        else targetsAlive.forEach(p => { if (p.aff[s.el] === 'weak' && !p.down) options.push([k, p.id]); });
      });
      if (options.length) pick = options[Math.floor(b.rng() * options.length)];
    }
    if (!pick) {
      const k = usable[Math.floor(b.rng() * usable.length)] || 'attack';
      pick = [k, targetsAlive[Math.floor(b.rng() * targetsAlive.length)].id];
    }
    return act(b, { type: pick[0] === 'attack' ? 'attack' : 'skill', skill: pick[0], target: pick[1] || targetsAlive[0].id });
  }

  // What the battle left behind: HP/SP for each member, item counts.
  function outcome(b) {
    return { party: b.party.map(p => ({ id: p.id, hp: p.dead ? 0 : p.hp, sp: p.sp, dead: p.dead })), items: { ...b.items } };
  }

  return { create, next, act, shift, canShift, allOut, enemyTurn, canUse, cost, upcoming, find, alive, outcome, MULT };
})();
if (typeof module !== 'undefined') module.exports = window.FemcBattleEngine;
