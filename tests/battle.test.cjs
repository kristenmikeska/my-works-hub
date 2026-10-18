const { test } = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
function loadBattle() {
  const context = vm.createContext({ Math, window: {} });
  for (const f of ['data.js', 'engine.js']) vm.runInContext(fs.readFileSync(path.join(root, 'assets/femc/battle', f), 'utf8'), context);
  return { D: context.window.FEMC_BATTLE_DATA, E: context.window.FemcBattleEngine };
}
// Seeded random numbers, so a failing run can be repeated.
const seeded = seed => () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 2 ** 32);
function makeParty(D, lv = 5) {
  return D.PARTY.map(p => ({ ...p, lv, maxHp: p.hp + lv * 12, hp: p.hp + lv * 12, maxSp: p.sp + lv * 6, sp: p.sp + lv * 6, str: p.str + lv, mag: p.mag + lv, end: p.end + lv, agi: p.agi + lv }));
}
// A simple bot: heal when low, hit known weaknesses, take every All-Out.
function play(D, E, b) {
  let steps = 0;
  E.next(b);
  while (!['won', 'lost', 'fled'].includes(b.phase) && steps++ < 2000) {
    if (b.turn == null) { E.next(b); continue; }
    if (b.phase === 'enemy') { E.enemyTurn(b); continue; }
    if (b.oneMore && E.alive(b.enemies).every(e => e.down)) { E.allOut(b); continue; }
    const u = E.find(b, b.turn);
    const hurt = E.alive(b.party).find(p => p.hp < p.maxHp * .35);
    const heal = u.skills.find(k => D.SKILLS[k].heal && E.canUse(u, k));
    if (hurt && heal) { E.act(b, { type: 'skill', skill: heal, target: hurt.id }); continue; }
    const foes = E.alive(b.enemies);
    let move = null;
    for (const k of u.skills) for (const f of foes) {
      const s = D.SKILLS[k];
      if (s.power && E.canUse(u, k) && f.aff[s.el] === 'weak' && !f.down) move = { type: 'skill', skill: k, target: f.id };
    }
    E.act(b, move || { type: 'attack', target: foes[0].id });
  }
  return steps;
}
test('every floor can be fought to an end, many times over, without getting stuck', () => {
  const { D, E } = loadBattle();
  const results = { won: 0, lost: 0 };
  for (let seed = 1; seed <= 200; seed++) {
    const floor = D.FLOORS[seed % D.FLOORS.length];
    const fight = floor.fights[seed % floor.fights.length];
    const b = E.create({ party: makeParty(D, floor.boss ? 8 : 4), enemies: fight, level: (seed % 5) + 1, items: D.START_ITEMS, rng: seeded(seed) });
    const steps = play(D, E, b);
    assert.ok(steps < 2000, `seed ${seed} got stuck`);
    assert.ok(['won', 'lost'].includes(b.phase), `seed ${seed} ended in ${b.phase}`);
    results[b.phase]++;
    for (const u of [...b.party, ...b.enemies]) assert.ok(u.hp >= 0 && u.hp <= u.maxHp, `${u.id} hp out of range`);
  }
  assert.ok(results.won > results.lost, `bot won ${results.won}, lost ${results.lost}`);
});
test('a weakness knocks down and gives One More; All-Out needs everyone down', () => {
  const { D, E } = loadBattle();
  const b = E.create({ party: makeParty(D), enemies: ['maya'], level: 5, rng: () => .5 });
  b.turn = 'solar'; b.phase = 'party';
  const ev = E.act(b, { type: 'skill', skill: 'agi', target: 'maya-1' });
  assert.ok(ev.some(e => e.t === 'hit' && e.kind === 'weak' && e.down));
  assert.equal(b.turn, 'solar');
  assert.equal(b.oneMore, true);
  assert.ok(E.allOut(b).some(e => e.t === 'allout'));
});
test('Shift hands the turn over with a damage boost, and not back to the giver', () => {
  const { D, E } = loadBattle();
  const b = E.create({ party: makeParty(D), enemies: ['maya', 'tiara'], level: 5, rng: () => .5 });
  b.turn = 'solar'; b.phase = 'party';
  E.act(b, { type: 'skill', skill: 'agi', target: 'maya-1' });
  assert.equal(E.canShift(b, 'solar'), false);
  E.shift(b, 'akihiko');
  assert.equal(b.turn, 'akihiko');
  assert.equal(E.find(b, 'akihiko').boost, E.MULT.shift);
  E.act(b, { type: 'skill', skill: 'sonicPunch', target: 'tiara-1' });
  assert.equal(E.canShift(b, 'solar'), false);
});
test('drain heals, null blocks, and the boss cannot be escaped', () => {
  const { D, E } = loadBattle();
  const b = E.create({ party: makeParty(D), enemies: ['priestess'], rng: () => .5 });
  const boss = b.enemies[0];
  boss.hp -= 100;
  b.turn = 'solar'; b.phase = 'party';
  E.act(b, { type: 'escape' });
  assert.equal(b.phase, 'party');
  const before = boss.hp;
  b.turn = 'akihiko';
  E.act(b, { type: 'skill', skill: 'garu', target: boss.id }); // not Akihiko's, but fine for the rule
  b.turn = 'yukari';
  const ev = E.act(b, { type: 'skill', skill: 'dia', target: 'yukari' });
  assert.ok(ev.some(e => e.t === 'heal'));
  b.enemies[0].aff.ice = 'drain';
  b.turn = 'solar';
  const drained = E.act(b, { type: 'skill', skill: 'bufu', target: boss.id });
  assert.ok(drained.some(e => e.kind === 'drain'));
  assert.ok(boss.hp >= before - 200);
});
