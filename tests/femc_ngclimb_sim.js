/* The New Game+ climb's balance sim (tests/femc_ngclimb.py, section `sim`): a strong party built the way a New Game+ year
   ends up (every member at a level, every link at rank 10 / 15, Solar's sun and every orbit bought greedily with the points
   their levels give, the best weapon and armor each member can wear, six ★5 cards each at max level, a strong Echo on Solar),
   then whole fights played by the engine alone: the party on Rush's brain (engine.js autoAction 'rush', All-Outs taken,
   One More shifts followed), the Shadows on their own AI. Evaluated in femc-battle.html (practice). window.NGSIM. */
window.NGSIM = (() => {
  const E = FemcBattleEngine, D = FEMC_BATTLE_DATA, BLD = FemcBuild, EC = FemcEchoes, BS = FemcBattleSave;
  function strong(party, lvl = 99, seed = 7) {
    const s = BS.normalize(BS.fresh()), R = E.rng(seed);
    s.lvl = lvl; s.exp = 0; s.party = party.slice(); s.awakened = true; s.ngp = 1;
    D.party.forEach(m => { if (m.id !== 'solar') s.mem[m.id] = { lvl, exp: 0 }; s.evo[m.id] = true; s.ranks[m.id] = 10; });
    s.bonds = Object.fromEntries(D.party.map(m => [m.id, 15]));
    s.memories = D.memories.map(m => m.id);
    s.ops.cleared = D.ops.map(o => o.id);
    // Solar's sun: the points a level-99 year gives (2 a level, a fragment each, the full moons' bonus), bought greedily.
    s.pts = (lvl - D.progression.startLevel) * D.progression.pointsPerLevel + s.memories.length + D.ops.length * D.progression.bossBonusPoints;
    s.nodes = [];
    for (let k = 0; k < 400; k++) { const avail = E.treeNodes().filter(n => E.treeState(s, n.id) === 'avail' && n.cost <= s.pts); if (!avail.length) break; avail.sort((a, b) => a.cost - b.cost); E.treeBuy(s, avail[0].id); }
    // The orbits, in their own order (core, then the builds), as far as each member's points go.
    s.ptree = {};
    party.forEach(mid => { for (let k = 0; k < 200; k++) { const n = E.ptreeNodes(mid).find(x => E.ptreeState(s, mid, x.id) === 'avail' && x.cost <= E.ptreePts(s, mid)); if (!n) break; E.ptreeBuy(s, mid, n.id); } });
    // Gear: the strongest weapon and armor each one can wear.
    ['solar'].concat(party).forEach(mid => {
      const m = D.party.find(x => x.id === mid), G = D.gear;
      const best = (slot, key) => Object.keys(G).filter(id => G[id].slot === slot && (slot !== 'weapon' || (G[id].wtype === m.wtype && (!G[id].owner || G[id].owner === mid)))).sort((a, b) => (G[b][key] || 0) - (G[a][key] || 0))[0];
      const w = best('weapon', 'atk'), a = best('armor', 'def');
      [w, a].forEach(id => { if (id) s.gear.owned[id] = (s.gear.owned[id] || 0) + 1; });
      s.gear.eq[mid] = Object.assign({}, D.startGear[mid], { weapon: w, armor: a });
    });
    // Cards: six ★5 of one set each, at max level.
    ['solar'].concat(party).forEach((mid, i) => {
      const set = Object.keys(BLD.SETS)[i % Object.keys(BLD.SETS).length];
      BLD.SLOTS.forEach(sl => { const c = BLD.rollCard(R, { set, slot: sl.id, r: 5, tier: 7 }); c.lvl = BLD.CARD.maxLvl[5]; const r = BLD.addCard(s, c); if (r.card) BLD.equipCard(s, mid, r.card.u); });
    });
    // An Echo: the secret one, at her level.
    if (EC) { const r = EC.add(s, EC.SECRET, { lvl: Math.min(lvl, 99) }); if (r.inst) EC.equip(s, r.inst.u); }
    return BS.normalize(s);
  }
  /* One whole fight, engine only. Returns { out, rounds, phase / acts (the furthest a phased boss got), foes (incl. summoned), hp (party HP share left), dead }. */
  function fight(save, group, seed = 1, o = {}) {
    const fx = E.treeFx(save.nodes);
    const units = ['solar'].concat(save.party).map(id => E.buildUnit(id, save, { fx }));
    const b = E.create({ party: units, enemies: group, rand: E.rng(seed), mods: fx.mods, known: {}, perks: BLD.battlePerks ? (() => { try { return BLD.battlePerks(save, BLD.ctxOf(save, ['solar'].concat(save.party))); } catch (e) { return {}; } })() : {} });
    if (fx.openBuff && b.openBuff) b.openBuff(fx.openBuff);
    if (b.start) b.start();
    let g = 0;
    while (!b.outcome() && g++ < (o.max || 4000)) {
      const t = b.nextTurn();
      if (b.outcome()) break;
      if (!t.canAct) continue;
      let u = b.U(t.actor);
      if (u.side === 'enemy') { let n = 0; do { if (t.forced && !n) b.forcedAct(); else b.enemyAct(); n++; } while (b.S.oneMore && !b.outcome() && !u.dead && n < 4); continue; }
      if (t.forced === 'charm') { b.forcedAct(); continue; }
      for (let n = 0; n < 12; n++) {
        let a = null; try { a = b.autoAction(u, 'rush'); } catch (e) { a = null; }
        if (!a) { const f = b.alive(b.foes())[0]; a = f ? { type: 'attack', target: f.id } : { type: 'guard' }; }
        b.act(a);
        if (b.outcome()) break;
        if (b.S.alloutReady) { b.allOut(); break; }
        if (b.S.shifted) { b.S.shifted = false; u = b.S.cur; continue; }
        if (b.S.oneMore && b.S.cur === u && !u.dead) continue;
        break;
      }
    }
    const P = b.party(), F = b.foes();
    return { out: b.outcome() || 'timeout', rounds: b.S.round, phase: Math.max(0, ...F.map(f => f.phase || 0)), foes: F.length, acts: Math.max(0, ...F.map(f => f.acts || 0)), hp: +(P.reduce((x, p) => x + Math.max(0, p.hp), 0) / P.reduce((x, p) => x + p.maxHp, 0)).toFixed(2), dead: P.filter(p => p.dead).length };
  }
  function many(save, group, n = 10, seed0 = 1) {
    const r = []; for (let i = 0; i < n; i++) r.push(fight(save, group, seed0 + i));
    return { wins: r.filter(x => x.out === 'win').length, n, rounds: Math.round(r.reduce((a, x) => a + x.rounds, 0) / n), hp: +(r.filter(x => x.out === 'win').reduce((a, x) => a + x.hp, 0) / Math.max(1, r.filter(x => x.out === 'win').length)).toFixed(2), outs: r.map(x => x.out[0]).join('') };
  }
  return { strong, fight, many };
})();
