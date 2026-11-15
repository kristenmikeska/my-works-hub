/* Persona 3: Equinox · Import from Solstice, light test (jsc, no browser).
   Run from the repo root:
     /System/Library/Frameworks/JavaScriptCore.framework/Versions/A/Helpers/jsc tests/equinox_import_jsc.js
   Builds fake Solstice saves in core.js's real shapes (fresh(), slot records, an epilogue layer with S.year1, the clears list)
   in a stub localStorage, runs FemcEquinoxImport.slots / read / apply, and checks: only looks, plumes, the album and the
   finished epilogues come over; nothing is written to storage; the source saves are byte-identical afterwards. */
var window = globalThis;
var writes = 0, data = {};
globalThis.localStorage = {
  getItem: function (k) { return Object.prototype.hasOwnProperty.call(data, k) ? data[k] : null; },
  setItem: function () { writes++; }, removeItem: function () { writes++; }, clear: function () { writes++; }
};
var fails = 0, passes = 0;
function ok(c, msg) { if (c) passes++; else { fails++; print('FAIL ' + msg); } }
function eq(a, b, msg) { ok(JSON.stringify(a) === JSON.stringify(b), msg + ' (got ' + JSON.stringify(a) + ', want ' + JSON.stringify(b) + ')'); }

// A Solstice year state in core.js fresh()'s shape, with progress that must NOT come over.
function year(run, extra) {
  var s = {
    v: 1, started: true, day: 335, slot: 'late', phase: 'play',
    stats: { knowledge: 120, courage: 99, proficiency: 80, charm: 77, kindness: 66 }, yen: 987654, condition: 'good', tonight: null,
    links: { haechan: { rank: 15, xp: 0, route: 'romance', seen: [1, 2, 3] }, akihiko: { rank: 10 } }, met: ['haechan', 'akihiko'], registered: ['orpheus', 'pixie'],
    flags: { 'route-R': true, 'true-path': false }, unlocked: {}, joined: ['solar', 'haechan'],
    route: { tally: {}, choices: { solstice: 'R', xmas: 'haechan' }, frags: { R: 5, S: 0, H: 0 }, doorsDue: [], doorsSeen: ['d1'] },
    fragments: ['frag-a'], inventory: { medicine: 9, soma: 2 }, gear: ['nag_rose'], books: { owned: ['b1'], reading: null, progress: {}, done: ['b1'] },
    events: ['a1', 'end-ending'], tartarus: { nights: 40, maxFloor: 254, bosses: ['magician'], lastParty: null }, battle: { exp: { solar: 99999 }, levels: { solar: 80 } },
    runId: run, playMinutes: 3000, savedAt: 1700000000000,
    battleSave: { lvl: 80, mem: { haechan: { lvl: 78 } }, personas: ['orpheus'], skills: ['agi'], echoes: { e1: 1 }, gear: { owned: { nag_rose: 1 } } },
    battleCarry: null, mv: 2, sv: 2, yv: 2,
    gacha: { v: 1, plumes: 37, stars: 12, pulls: 50, draws: 9, pity: { cap: { sr: 3, ur: 20 }, vel: { sr: 1, ur: 5 } }, keys: { 'key-haechan': 2 }, cases: ['case-gold'], caseOn: 'case-gold', credited: ['orpheus'], last: null,
      cos: { own: ['sk-date', 'sk-haechan-runners', 'wpn-runners', 'evk-midnight', 'bui-moonlight', 'ui-sakura', 'tt-darkhour', 'wp-rooftop'], on: { 'skin:solar': 'sk-date', 'skin:haechan': 'sk-haechan-runners', weapon: 'wpn-runners', uitheme: 'ui-sakura', 'skin:yukari': 'sk-not-owned' },
        portraits: true, pOff: ['haechan'], pulls: 40, pity: { sr: 4, ur: 30 }, guar: true, last: { id: 'sk-date' }, got: { 'sk-date': 120 }, bsel: 'runners' },
      trials: { best: { t1: 3 } } },
    album: { v: 1, cg: ['story-1', 'romance-haechan-5'], posts: ['post-r-2-cups'], booth: [{ date: '8/1', day: 117, run: run, who: 'haechan', frame: 2, shots: [[0, 1], [2, 2], [3, 4]], stamps: [] }],
      frags: ['frag-a'], events: ['a1'], doors: ['d1'], ranks: { haechan: [1, 2] }, prologue: true },
    epilogues: { runners: { done: true, route: 'haechan', at: 1700000000001, seen: { events: ['epi-r-1'], hangouts: { hanni: ['epi-r-hanni-4'], minji: ['epi-r-minji-1'] }, routines: [] }, flags: { 'epi-r-x': true }, bonds: { hanni: 7 }, open: ['haechan'], stage: 4 } },
    ngp: 1, ngFrom: 'r-old'
  };
  for (var k in extra) s[k] = extra[k];
  return s;
}
// 1. The autosave: a year still in progress (not finished).
var auto = year('r-auto', { events: ['a1'], epilogues: {}, savedAt: 1700000005000 });
auto.album = { v: 1, cg: ['story-1'] };
data['kg-femc-revamp'] = JSON.stringify(auto);
// 2. Slot 1: a finished year back from the Runners epilogue, New Game+ 1, with an earlier run's HOAX record in album.epi.
var y1 = year('r-one', {});
y1.album.epi = { hoax: { done: true, route: 'jungwon', seen: { hangouts: { cherry: ['epi-h-cherry-2'] } } } };
data['kg-femc-revamp-slot1'] = JSON.stringify({ at: 1700000002000, label: '3/7 Sun · Late Night', state: y1 });
// 3. Slot 4: inside the strangers epilogue (S.epi, S.year1), its own Wardrobe copy and CGs.
var y4 = year('r-four', { flags: { 'route-S': true }, epilogues: {} });
var e4 = { v: 1, started: true, day: 10, slot: 'evening', phase: 'play', stats: y4.stats, yen: 50000, flags: { 'y-route-S': true }, events: ['epi-s-1'],
  links: {}, inventory: { kimbap: 3 }, battleSave: y4.battleSave, savedAt: 1700000009000,
  gacha: { v: 1, plumes: 0, keys: {}, cases: [], cos: { own: ['sk-date', 'sk-haechan-runners', 'sk-hanbok'], on: { 'skin:solar': 'sk-hanbok' }, portraits: false, pOff: [] } },
  album: { cg: ['epi-s-step'], posts: [] },
  epi: { v: 1, world: 'strangers', place: 'Incheon', year: 2010, start: '2/18', route: 'haechan', lean: 'haechan', locked: true, done: false,
    bonds: { yunjin: { c: 4, seen: ['epi-s-yunjin-2'] } } },
  year1: y4 };
y4.battleSave = null;
data['kg-femc-revamp-slot4'] = JSON.stringify({ at: 1700000009000, label: 'Epilogue · Incheon · Feb 28', state: e4 });
// 4. Slot 7: garbage, and an unrelated key that must never be read as a save.
data['kg-femc-revamp-slot7'] = '{not json';
data['kg-femc-equinox'] = JSON.stringify(year('r-x', {}));
data['kg-femc-revamp-clears'] = JSON.stringify([{ run: 'r-one', ending: 'where it begins', at: 1, ngp: 1, epi: ['runners'] }]);
var before = JSON.stringify(data);

load('assets/femc/equinox/import.js');
var I = window.FemcEquinoxImport;
ok(!!I, 'FemcEquinoxImport loads');

// slots()
var list = I.slots();
eq(list.map(function (x) { return x.slot; }), ['kg-femc-revamp-slot4', 'kg-femc-revamp', 'kg-femc-revamp-slot1'], 'slots: the three good saves, newest first');
var s1 = list.filter(function (x) { return x.n === 1; })[0], s4 = list.filter(function (x) { return x.n === 4; })[0], s0 = list.filter(function (x) { return x.n === 0; })[0];
ok(s1.finished && s4.finished && !s0.finished, 'slots: clear status (slot 1 and 4 finished, autosave not)');
eq(s1.epilogues, [{ world: 'runners', route: 'haechan' }, { world: 'hoax', route: 'jungwon' }], 'slots: slot 1 epilogues (this run + an earlier run)');
eq(s1.ending, 'where it begins', 'slots: slot 1 ending');
eq(s4.playthrough, { run: 'r-four', ngp: 1, inEpilogue: 'strangers' }, 'slots: slot 4 playthrough');
eq(s4.epilogues, [], 'slots: an epilogue in progress is not a finished one');
eq(s0.date, '3/7', 'slots: autosave in-game date (day 335 from 4/6/2009 is the last night)');
eq(s4.date, '2/28', 'slots: epilogue date from its own start');

// read()
ok(I.read('kg-femc-revamp') === null, 'read: an unfinished year is refused');
ok(I.read('kg-femc-revamp-slot7') === null, 'read: a broken slot is null');
ok(I.read('kg-femc-equinox') === null, 'read: never reads a key that is not a Solstice save');
var r1 = I.read('kg-femc-revamp-slot1');
eq(Object.keys(r1).sort(), ['album', 'cosmetics', 'epilogues', 'from', 'plumes'], 'read: only the five allowed fields');
eq(Object.keys(r1.cosmetics).sort(), ['on', 'own', 'pOff', 'portraits'], 'read: cosmetics has only ownership, equipped and portrait toggles');
eq(Object.keys(r1.album).sort(), ['booth', 'cg', 'polaroids', 'posts'], 'read: album has only CGs, posts, booth strips, polaroids');
eq(r1.cosmetics.own, y1.gacha.cos.own, 'read: every owned look');
eq(r1.cosmetics.on, { 'skin:solar': 'sk-date', 'skin:haechan': 'sk-haechan-runners', weapon: 'wpn-runners', uitheme: 'ui-sakura' }, 'read: equipped looks (an unowned one dropped)');
eq(r1.plumes, 37, 'read: plumes');
eq(r1.album.cg, ['story-1', 'romance-haechan-5'], 'read: CGs');
eq(r1.album.posts, ['post-r-2-cups'], 'read: posts');
eq(r1.album.booth, y1.album.booth, 'read: booth strips');
eq(r1.album.polaroids.sort(), ['hoax-backwards', 'runners-snow-day-at-the-valley'], 'read: polaroids from finished epilogues');
eq(r1.epilogues, [{ world: 'runners', route: 'haechan' }, { world: 'hoax', route: 'jungwon' }], 'read: epilogues');
eq(r1.from, { slot: 'kg-femc-revamp-slot1', savedAt: 1700000002000 }, 'read: from');
var r4 = I.read('kg-femc-revamp-slot4');
eq(r4.cosmetics.own, ['sk-date', 'sk-haechan-runners', 'wpn-runners', 'evk-midnight', 'bui-moonlight', 'ui-sakura', 'tt-darkhour', 'wp-rooftop', 'sk-hanbok'], 'read (epilogue): looks from both layers');
eq(r4.cosmetics.on, { 'skin:solar': 'sk-hanbok' }, 'read (epilogue): what she wears in the epilogue');
ok(r4.cosmetics.portraits === false, 'read (epilogue): the live portrait toggle');
eq(r4.plumes, 37, 'read (epilogue): the year\'s plumes');
eq(r4.album.cg, ['story-1', 'romance-haechan-5', 'epi-s-step'], 'read (epilogue): year and epilogue CGs');
eq(r4.album.polaroids, ['strangers-the-chair-by-the-window'], 'read (epilogue): a polaroid from the live layer');
// Nothing forbidden anywhere in the result.
var flat = JSON.stringify([r1, r4]);
['987654', '"rank"', 'battleSave', 'personas', 'echoes', 'inventory', 'medicine', 'stats', 'knowledge', '"links"', 'pity', 'keys', 'case-gold', '"got"', 'bsel', 'guar', 'frags', 'doors', 'ranks', 'trials', 'flags', 'seen'].forEach(function (w) {
  ok(flat.indexOf(w) < 0, 'read: nothing of ' + w + ' comes over');
});

// apply() onto a fresh Equinox state (core.js fresh() shape, abridged).
var fresh = { v: 1, started: true, day: 0, slot: 'early', phase: 'prologue', stats: { knowledge: 10 }, yen: 5000, links: {}, flags: {}, inventory: {}, events: [],
  battleSave: null, gacha: { v: 1, plumes: 3, stars: 0, pulls: 0, draws: 0, pity: { cap: { sr: 0, ur: 0 }, vel: { sr: 0, ur: 0 } }, keys: {}, cases: [], caseOn: null, credited: [], last: null } };
var keep = JSON.parse(JSON.stringify(fresh));
var out = I.apply(fresh, r1);
ok(out === fresh, 'apply: returns the same state');
eq(out.gacha.cos.own, r1.cosmetics.own, 'apply: Wardrobe ownership under S.gacha.cos.own');
eq(out.gacha.cos.on, r1.cosmetics.on, 'apply: equipped under S.gacha.cos.on');
eq(out.gacha.cos.pOff, ['haechan'], 'apply: portrait toggles');
eq(out.gacha.plumes, 40, 'apply: plumes added to the fresh 3');
eq(out.album.cg, r1.album.cg, 'apply: album CGs');
eq(out.album.polaroids.length, 2, 'apply: album polaroids');
eq(out.solstice.epilogues, r1.epilogues, 'apply: S.solstice.epilogues');
// Everything else is untouched.
Object.keys(keep).forEach(function (k) {
  if (k === 'gacha') return;
  eq(out[k], keep[k], 'apply: ' + k + ' untouched');
});
['v', 'stars', 'pulls', 'draws', 'pity', 'keys', 'cases', 'caseOn', 'credited', 'last'].forEach(function (k) { eq(out.gacha[k], keep.gacha[k], 'apply: gacha.' + k + ' untouched'); });
eq(Object.keys(out).filter(function (k) { return !(k in keep); }).sort(), ['album', 'solstice'], 'apply: only album and solstice are new top-level fields');
I.apply(out, r1);
eq(out.gacha.plumes, 40, 'apply: a second apply of the same import adds no plumes');
eq(out.gacha.cos.own.length, r1.cosmetics.own.length, 'apply: a second apply adds no duplicates');
eq(out.album.booth.length, 1, 'apply: no duplicate booth strips');
// The imported object stays independent of the state.
out.gacha.cos.own.push('x'); ok(r1.cosmetics.own.indexOf('x') < 0, 'apply: state does not share arrays with the import');

// The source saves are unchanged and nothing was written.
ok(writes === 0, 'storage: no writes (' + writes + ')');
ok(JSON.stringify(data) === before, 'storage: every Solstice save byte-identical');

print((fails ? 'FAILED ' : 'OK ') + passes + ' passed, ' + fails + ' failed');
if (fails) throw new Error(fails + ' failed');
