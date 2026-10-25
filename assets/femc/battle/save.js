/* FEMC battle save: the shape of the battle game's progress (levels, EXP, Haenim's tree, Personas, equipment, materials, the
   access point), shared by battle.js (the battle itself) and the life sim's field menu (assets/femc/game/menu.js), so both
   read and write the same object. Needs data.js and engine.js. No DOM, no storage: callers decide where a save lives.
     Practice mode (femc-battle.html on its own) keeps one in localStorage 'kg-femc-battle-proto'.
     The story (femc-game.html) keeps one per save slot inside the life sim's own state, S.battleSave (core.js).
   FemcBattleSave.fresh() / normalize(s) / fromRaw(any) → a clean v4 save. forRun({ save, carry, day, prefs }) → the battle
   save for a story playthrough: its own, or New Game+'s carried one, or a new one seeded from the game's date. */
window.FemcBattleSave = (() => {
  const D = window.FEMC_BATTLE_DATA, E = window.FemcBattleEngine;
  const member = mid => D.party.find(m => m.id === mid);
  // v2 added: party (up to 3 ids beside Solar), mem (each member's own level and EXP), tactics, cutins, awakened.
  // v3 adds: yen, items (now kept between runs), gear { owned, eq }, mats, memories, evo (evolved Personas), form + forms (Haenim),
  //          ops { cleared } (Full Moon Operations), cycle (full climbs to the top; makes Tartarus harder), th (Theurgy gauges), perf.
  // v4 adds: settings (see SETTINGS), tipsSeen (Fuuka's one-time tips), cursor (each member's last command, skill and item).
  //          speed may now be 3. The device settings now live in the game's one settings store (battle.js pulls them in).
  // treeV 2 (the skill system, 2026-10-20): nodes are the new Haenim tree's (data.js tree / treeCenter); ptree { mid: [ids] }
  //          (party trees), ranks { mid: link rank } (from the life sim), forgot / order { mid: [chain roots] } (8 skill slots).
  //          An older save's tree is refunded as skill points into the new tree; forms it had already unlocked stay.
  // The building systems (build.js, 2026-10-20; every field defaults, so older saves load as they were):
  //          cards { list: [card], eq: { mid: { slot: uid } }, uid } (Revelation cards), wref { gearId: 0-5 } (weapon refines),
  //          pboost { mid: { stat: n } } (Persona boosts), skillCards { skillId: n }, taught { mid: [skillIds] },
  //          bonds { linkId: rank } and bondsRev [linkIds] (the life sim's link ranks, for perks), bondGifts [perk ids],
  //          floorsMapped [floor ids] (Rohan's Sketch the Floor), shuffles (Shuffle Times played).
// Bond skills (bonds.js, 2026-10-20; defaults, so older saves load as they were): bondsLove [link ids on their romance route],
//          bondDate (the life sim's "m/d" at the last sync: a bond's last day).
  const SETTINGS = { textSpeed: 'normal', musicVol: 100, sfxVol: 100, remember: true, rushWhere: 'normal', rushStop: 30, difficulty: 'normal', shake: true, calm: false, numbers: true, pad: 'auto', tips: true, showtimes: 'on' };
  const SETTING_OK = { textSpeed: ['slow', 'normal', 'fast', 'instant'], rushWhere: ['normal', 'strong', 'all'], rushStop: [30, 50], difficulty: ['story', 'normal', 'hard'], pad: ['auto', 'xbox', 'ps'], showtimes: ['on', 'still'] };
  const PREFS = ['settings', 'tipsSeen', 'cursor', 'music', 'sfx', 'speed', 'cutins', 'perf']; // device preferences: kept when a slot or backup is loaded
  const fresh = () => ({ v: 4, settings: Object.assign({}, SETTINGS), tipsSeen: [], cursor: {}, lvl: D.progression.startLevel, exp: 0, pts: 0, nodes: [], known: {}, clears: 0, cycle: 0, runs: 0, reached: null, music: null, sfx: true, speed: 1,
    party: D.defaultParty.slice(), mem: {}, tactics: {}, cutins: 'first', awakened: false,
    yen: D.startYen, items: Object.assign({}, D.startItems), gear: { owned: {}, eq: {} }, mats: {}, memories: [], evo: {}, form: 'haenim', forms: [], ops: { cleared: [] }, th: {}, perf: false,
    ptree: {}, ranks: {}, forgot: {}, order: {},
    cards: { list: [], eq: {}, uid: 0 }, wref: {}, pboost: {}, skillCards: {}, taught: {}, bonds: {}, bondsRev: [], bondGifts: [], floorsMapped: [], shuffles: 0, bondsLove: [], bondDate: null });
  /* The first Haenim tree (three branches of five, before the skill system): its node costs, and the form each branch gave. */
  const OLD_TREE = { bell: { form: 'haenim-sunna', cost: [1, 1, 2, 2, 3] }, jade: { form: 'haenim-mazu', cost: [1, 1, 2, 2, 3] }, star: { form: 'haenim-nike', cost: [1, 1, 2, 2, 3] } };
  function migrateTree(s) {
    const old = Array.isArray(s.nodes) ? s.nodes : [];
    let back = 0;
    if (!Array.isArray(s.forms)) s.forms = [];
    Object.entries(OLD_TREE).forEach(([b, t]) => {
      const ids = t.cost.map((_, i) => `${b}${i + 1}`);
      ids.forEach((id, i) => { if (old.includes(id)) back += t.cost[i]; });
      if (ids.every(id => old.includes(id)) && !s.forms.includes(t.form)) s.forms.push(t.form); // a mastered branch keeps its form
    });
    if (old.length && (s.forms.length >= 3 || old.length === 15) && ((s.ops || {}).cleared || []).length && !s.forms.includes('haenim-unveiled')) s.forms.push('haenim-unveiled');
    s.pts = Math.max(0, (+s.pts || 0) + back);
    s.nodes = [];
    s.treeRefund = back;
    s.treeV = 2;
  }
  /* The building systems' fields (build.js): cards, refines, boosts, skill cards, bonds. Unknown ids are dropped. */
  const STATKEYS = ['st', 'ma', 'en', 'ag', 'lu'];
  const obj = v => v && typeof v === 'object' && !Array.isArray(v);
  function normalizeBuild(s) {
    const B = window.FemcBuild;
    if (!obj(s.cards)) s.cards = { list: [], eq: {}, uid: 0 };
    if (!Array.isArray(s.cards.list)) s.cards.list = [];
    s.cards.list = s.cards.list.filter(c => obj(c) && c.u > 0 && (!B || (B.SETS[c.set] && B.SLOTS.some(x => x.id === c.slot) && B.STATS[c.main] && [3, 4, 5].includes(c.r))));
    s.cards.list.forEach(c => { c.lvl = Math.max(1, Math.floor(+c.lvl || 1)); c.ref = Math.max(0, Math.min(3, Math.floor(+c.ref || 0))); if (!Array.isArray(c.subs)) c.subs = []; c.subs = c.subs.filter(x => Array.isArray(x) && (!B || B.STATS[x[0]])).slice(0, 4); c.lock = !!c.lock; });
    s.cards.uid = Math.max(+s.cards.uid || 0, ...s.cards.list.map(c => c.u), 0);
    if (!obj(s.cards.eq)) s.cards.eq = {};
    const ids = new Set(s.cards.list.map(c => c.u)), used = new Set();
    Object.keys(s.cards.eq).forEach(mid => {
      if (!member(mid) || !obj(s.cards.eq[mid])) { delete s.cards.eq[mid]; return; }
      Object.keys(s.cards.eq[mid]).forEach(slot => { const u = s.cards.eq[mid][slot], c = s.cards.list.find(x => x.u === u); if (!ids.has(u) || used.has(u) || !c || c.slot !== slot) delete s.cards.eq[mid][slot]; else used.add(u); });
    });
    if (!obj(s.wref)) s.wref = {};
    Object.keys(s.wref).forEach(k => { const v = Math.floor(+s.wref[k]); if (!D.gear[k] || !(v > 0)) delete s.wref[k]; else s.wref[k] = Math.min(5, v); });
    if (!obj(s.pboost)) s.pboost = {};
    Object.keys(s.pboost).forEach(mid => { if (!member(mid) || !obj(s.pboost[mid])) { delete s.pboost[mid]; return; } Object.keys(s.pboost[mid]).forEach(k => { const v = Math.floor(+s.pboost[mid][k]); if (!STATKEYS.includes(k) || !(v > 0)) delete s.pboost[mid][k]; else s.pboost[mid][k] = Math.min(10, v); }); });
    if (!obj(s.skillCards)) s.skillCards = {};
    Object.keys(s.skillCards).forEach(k => { if (!D.skills[k] || !(s.skillCards[k] > 0)) delete s.skillCards[k]; });
    if (!obj(s.taught)) s.taught = {};
    Object.keys(s.taught).forEach(mid => { if (!member(mid) || !Array.isArray(s.taught[mid])) delete s.taught[mid]; else s.taught[mid] = [...new Set(s.taught[mid].filter(k => D.skills[k]))]; });
    // Every fighter but Solar and Ken starts with their own weapon now (build.js OWNED: the searchers since batch 22, S.E.E.S.
    // since batch 23); a save still holding the plain tier-0 one (Combat Knife, Rapier, Leather Gloves, Practice Bow, Practice
    // Sword, Finger Rounds, Lead Pipe) swaps.
    Object.entries((B && B.STARTER_SWAP) || {}).forEach(([mid, [plain, own]]) => { if (s.gear && obj(s.gear.eq) && obj(s.gear.eq[mid]) && s.gear.eq[mid].weapon === plain && D.gear[own]) s.gear.eq[mid].weapon = own; });
    // Batch 22 added boss drops for full moons a save may already have cleared (the Empress, the Hierophant, Fortune), and
    // batch 23 one for each of S.E.E.S. (every full moon): once per batch (ownBoss 1, then 2), a save that cleared one gets
    // the owner weapons it never got (a first clear from now on drops it in battle.js).
    if ((+s.ownBoss || 0) < 2 && B && s.gear && obj(s.gear.owned) && s.ops && Array.isArray(s.ops.cleared)) {
      s.ops.cleared.forEach(op => B.bossWeapons(op).forEach(id => { const g = D.gear[id]; if (g && g.owner && !(s.gear.owned[id] > 0)) s.gear.owned[id] = 1; }));
      s.ownBoss = 2;
    }
    if (!obj(s.bonds)) s.bonds = {};
    Object.keys(s.bonds).forEach(k => { const r = Math.floor(+s.bonds[k]); if (!(r > 0)) delete s.bonds[k]; else s.bonds[k] = Math.min(15, r); }); // links go to 15 (bond tier 3, rank-15 perks)
    if (typeof s.bondDate !== 'string' || !/^\d{1,2}\/\d{1,2}$/.test(s.bondDate)) s.bondDate = null;
    ['bondsRev', 'bondGifts', 'floorsMapped', 'bondsLove'].forEach(k => { if (!Array.isArray(s[k])) s[k] = []; s[k] = [...new Set(s[k].filter(x => typeof x === 'string'))]; });
    if (!(s.shuffles >= 0)) s.shuffles = 0;
  }
  /* Fills in anything missing, so v1/v2 saves (and hand-edited ones) load cleanly. Members who were already fighting
     keep Solar's level; new recruits join one level behind her. */
  const OLD_FLOORS = ['f2', 'f4', 'f6']; // batch-1 floors 2F/5F/9F → the first three floors of Thebel
  function normalize(s) {
    const was = s.v || 1;
    if (!Array.isArray(s.party)) s.party = D.defaultParty.slice();
    s.party = [...new Set(s.party)].filter(id => id !== 'solar' && member(id)).slice(0, 3);
    if (!s.mem || typeof s.mem !== 'object') s.mem = {};
    D.party.forEach(m => {
      if (m.id === 'solar') return;
      const e = s.mem[m.id];
      if (!e || !(e.lvl >= 1)) s.mem[m.id] = { lvl: D.defaultParty.includes(m.id) ? s.lvl : Math.max(D.progression.startLevel, s.lvl - 1), exp: 0 };
      else if (!(e.exp >= 0)) e.exp = 0;
    });
    if (!s.tactics || typeof s.tactics !== 'object') s.tactics = {};
    Object.keys(s.tactics).forEach(k => { if (!D.tactics[s.tactics[k]]) delete s.tactics[k]; });
    if (!['always', 'first', 'off'].includes(s.cutins)) s.cutins = 'first';
    // v3: the old run (2F → 5F → 9F → Priestess) becomes Thebel plus the Priestess operation.
    if (!s.ops || typeof s.ops !== 'object' || !Array.isArray(s.ops.cleared)) s.ops = { cleared: [] };
    if (was < 3) {
      if (s.clears > 0 && !s.ops.cleared.includes('priestess')) s.ops.cleared.push('priestess');
      const r = typeof s.reached === 'number' ? s.reached : 0;
      s.reached = s.clears > 0 ? 'f9' : (r > 0 ? OLD_FLOORS[Math.min(r, OLD_FLOORS.length - 1)] : null);
      if (!s.items || typeof s.items !== 'object') s.items = Object.assign({}, D.startItems);
    }
    if (typeof s.reached !== 'string' || !D.floors.some(f => f.id === s.reached)) s.reached = null;
    s.ops.cleared = s.ops.cleared.filter(id => D.ops.some(o => o.id === id));
    if (!(s.cycle >= 0)) s.cycle = 0;
    if (!(s.yen >= 0)) s.yen = D.startYen;
    if (!s.items || typeof s.items !== 'object') s.items = {};
    Object.keys(s.items).forEach(k => { if (!D.items[k] || !(s.items[k] > 0)) delete s.items[k]; });
    if (!s.gear || typeof s.gear !== 'object') s.gear = {};
    if (!s.gear.owned || typeof s.gear.owned !== 'object') s.gear.owned = {};
    if (!s.gear.eq || typeof s.gear.eq !== 'object') s.gear.eq = {};
    Object.keys(s.gear.owned).forEach(k => { if (!D.gear[k] || !(s.gear.owned[k] > 0)) delete s.gear.owned[k]; });
    if (!s.mats || typeof s.mats !== 'object') s.mats = {};
    // The skill system: an older tree is refunded once (migrateTree), then the new tree's fields are cleaned.
    if (s.treeV !== 2) migrateTree(s);
    const nodeIds = new Set(E.treeNodes().map(n => n.id));
    s.nodes = [...new Set((Array.isArray(s.nodes) ? s.nodes : []).filter(id => nodeIds.has(id)))];
    if (!(s.pts >= 0)) s.pts = 0;
    ['ptree', 'ranks', 'forgot', 'order'].forEach(k => { if (!s[k] || typeof s[k] !== 'object' || Array.isArray(s[k])) s[k] = {}; });
    Object.keys(s.ptree).forEach(mid => { const ok = new Set(E.ptreeNodes(mid).map(n => n.id)); s.ptree[mid] = Array.isArray(s.ptree[mid]) ? [...new Set(s.ptree[mid].filter(id => ok.has(id)))] : []; if (!s.ptree[mid].length) delete s.ptree[mid]; });
    Object.keys(s.ranks).forEach(mid => { const r = +s.ranks[mid]; if (!member(mid) || !(r >= 0)) delete s.ranks[mid]; else s.ranks[mid] = Math.min(10, Math.floor(r)); });
    ['forgot', 'order'].forEach(k => Object.keys(s[k]).forEach(mid => { if (!member(mid) || !Array.isArray(s[k][mid])) delete s[k][mid]; else s[k][mid] = [...new Set(s[k][mid].filter(x => typeof x === 'string'))]; }));
    normalizeBuild(s);
    if (!Array.isArray(s.memories)) s.memories = [];
    s.memories = s.memories.filter(id => D.memories.some(m => m.id === id));
    if (!s.evo || typeof s.evo !== 'object') s.evo = {};
    if (!Array.isArray(s.forms)) s.forms = [];
    E.formsList().forEach(f => { if (!s.forms.includes(f) && E.formUnlocked(Object.assign({}, s, { forms: [] }), f)) s.forms.push(f); });
    if (!s.form || !E.formUnlocked(s, s.form)) s.form = 'haenim';
    if (!s.th || typeof s.th !== 'object') s.th = {};
    s.perf = !!s.perf;
    // v4: settings, tips, remembered cursors.
    const st = s.settings && typeof s.settings === 'object' ? s.settings : {};
    s.settings = Object.assign({}, SETTINGS);
    Object.keys(SETTINGS).forEach(k => {
      const v = st[k];
      if (SETTING_OK[k]) { if (SETTING_OK[k].includes(v)) s.settings[k] = v; }
      else if (typeof SETTINGS[k] === 'boolean') { if (typeof v === 'boolean') s.settings[k] = v; }
      else if (typeof v === 'number' && v >= 0 && v <= 100) s.settings[k] = Math.round(v);
    });
    if (![1, 2, 3].includes(s.speed)) s.speed = 1;
    if (!Array.isArray(s.tipsSeen)) s.tipsSeen = [];
    s.tipsSeen = s.tipsSeen.filter(k => D.tips[k]);
    if (!s.cursor || typeof s.cursor !== 'object') s.cursor = {};
    Object.keys(s.cursor).forEach(k => { if (!member(k) || !s.cursor[k] || typeof s.cursor[k] !== 'object') delete s.cursor[k]; });
    s.v = 4;
    return s;
  }
  /* Any object that looks like a save (from storage, a slot or a pasted backup) → a clean v4 save, or null. */
  function fromRaw(s) {
    if (!s || typeof s !== 'object' || Array.isArray(s) || !(s.lvl >= 1)) return null;
    const v = [1, 2, 3, 4].includes(s.v) ? s.v : 1;
    return normalize(Object.assign(fresh(), JSON.parse(JSON.stringify(s)), { v }));
  }
  // Solar's level by the game's day (0 = 4/6): a little under each full moon's recommended level (data.js ops: Priestess 10
  // on 5/9, Empress 15 on 6/8 … Hanged Man 43 on 11/3), so a playthrough that starts using the battle game late isn't stuck at 5.
  const SEED_CURVE = [[0, 5], [33, 9], [63, 14], [92, 21], [122, 28], [152, 33], [181, 37], [211, 41], [240, 46], [270, 50], [300, 54]];
  function seedLevel(day) {
    let i = 0; while (i < SEED_CURVE.length - 2 && day > SEED_CURVE[i + 1][0]) i++;
    const [d0, l0] = SEED_CURVE[i], [d1, l1] = SEED_CURVE[i + 1];
    return Math.max(D.progression.startLevel, Math.round(l0 + (l1 - l0) * Math.min(1, Math.max(0, (day - d0) / (d1 - d0)))));
  }
  /* A story playthrough's first battle save, from the game's date. prefs: a practice save to copy Fuuka's seen tips from. */
  function seed(day = 0, prefs = null) {
    const s = fresh(), L = seedLevel(day);
    if (prefs && typeof prefs === 'object') ['tipsSeen', 'cursor'].forEach(k => { if (prefs[k] !== undefined) s[k] = JSON.parse(JSON.stringify(prefs[k])); });
    s.lvl = L; s.pts = (L - D.progression.startLevel) * D.progression.pointsPerLevel; s.awakened = day > 3;
    s.party = []; s.items = {}; s.yen = 0; s.mem = {};
    s.seeded = { day, lvl: L };
    return normalize(s);
  }
  /* New Game+: the previous playthrough's levels, tree, Personas and gear come along; the climb, operations and fragments reset. */
  function carry(old) {
    const s = fromRaw(old);
    if (!s) return null;
    s.reached = null; s.ops = { cleared: [] }; s.memories = []; s.ngp = (s.ngp || 0) + 1;
    return s;
  }
  /* The battle save for a story playthrough: { save, made } (made: true when it was carried over or seeded just now). */
  function forRun({ save = null, carry: from = null, day = 0, prefs = null } = {}) {
    const own = fromRaw(save);
    if (own) return { save: own, made: false };
    const c = from && carry(from);
    if (c) return { save: c, made: true };
    return { save: seed(day, prefs), made: true };
  }

  /* Equipment helpers (the battle's Equip screen and the field menu's Equip tab share these rules). */
  const eqOf = (s, mid) => Object.assign({}, D.startGear[mid], (s.gear.eq || {})[mid] || {});
  const equippedCount = (s, id) => D.party.reduce((n, m) => n + Object.values(eqOf(s, m.id)).filter(x => x === id).length, 0);
  // Spare copies of a piece of gear (tier-0 starter gear is always there for its owner).
  const spare = (s, id) => (D.gear[id] && D.gear[id].tier === 0 ? 99 : (s.gear.owned[id] || 0) - equippedCount(s, id));
  // What a member could put in a slot: their starter piece, anything spare that fits, and what they're wearing (acc: null = remove).
  function candidates(s, mid, slot) {
    const m = member(mid), cur = eqOf(s, mid)[slot];
    const ids = Object.keys(D.gear).filter(x => { const g = D.gear[x]; if (g.slot !== slot) return false; if (slot === 'weapon' && (g.wtype !== m.wtype || (g.owner && g.owner !== mid))) return false; if (g.tier === 0) return x === D.startGear[mid][slot]; return spare(s, x) > 0 || x === cur; });
    ids.sort((a, b) => (D.gear[b].atk || D.gear[b].def || D.gear[b].price || 0) - (D.gear[a].atk || D.gear[a].def || D.gear[a].price || 0));
    return slot === 'acc' ? [null].concat(ids) : ids;
  }
  function equip(s, mid, slot, id) {
    const eq = s.gear.eq[mid] || (s.gear.eq[mid] = Object.assign({}, D.startGear[mid]));
    eq[slot] = id || null;
    return s;
  }
  // Gear bought in the life sim (S.gear: ids) is owned here too (one copy each), the same rule the battle's handoff uses.
  function syncGear(s, ids) { (ids || []).forEach(g => { if (D.gear[g] && !(s.gear.owned[g] > 0)) s.gear.owned[g] = 1; }); return s; }
  /* One line describing a piece of gear. */
  function gearLine(id, s = null) {
    const g = D.gear[id]; if (!g) return '';
    const out = [];
    const B = window.FemcBuild, r = s && B ? B.wrefOf(s, id) : 0;
    if (g.slot === 'weapon') out.push(r ? `ATK ${B.weaponAtk(s, id)} (+${r})` : `ATK ${g.atk}`); if (g.slot === 'armor') out.push(`DEF ${g.def}`);
    if (g.el) out.push(`${D.elements[g.el].name} attacks`);
    if (g.hits) out.push(`${g.hits[0]} hits`);
    if (g.crit) out.push(`Crit +${g.crit}%`);
    if (g.acc) out.push(`Accuracy ${g.acc > 0 ? '+' : ''}${g.acc}`);
    if (g.ail) out.push(`May inflict ${D.ailments[g.ail.id].name}`);
    if (g.stats) out.push(Object.entries(g.stats).map(([k, v]) => `${k.toUpperCase()} +${v}`).join(' '));
    if (g.aff) out.push(Object.entries(g.aff).map(([k, v]) => `${v === 'null' ? 'Nulls' : 'Resists'} ${D.elements[k].name}`).join(', '));
    if (g.nullAil && !g.named) out.push(`Prevents ${g.nullAil.map(a => D.ailments[a].name).join(' & ')}`);
    if (g.desc) out.push(g.desc);
    return out.join(' · ');
  }

  return { SETTINGS, SETTING_OK, PREFS, fresh, normalize, fromRaw, seedLevel, seed, carry, forRun, eqOf, equippedCount, spare, candidates, equip, syncGear, gearLine, member };
})();
