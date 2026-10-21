/* FEMC battle engine: rules only, no DOM. battle.js builds the units, calls these functions, and plays the events they return.
   Events are plain objects { t: 'hit' | 'heal' | ... } so a future renderer (or a test, or the balance sim) can consume the same stream.
   Also here: how a party member is built from the save (levels, Haenim's tree, Persona evolutions and forms, equipment, fatigue),
   and battle rewards. Boss gimmicks live in GIMMICKS below.
   Story fights (the life sim's handoff, battle.js) add: setup.protect (Solar can't drop below 1 HP), units with
   `unreachable` (every hit on them is nulled: the finale's locked lanterns), the gimmicks train / lantern / wren, and the AIs
   wren_ask / still / lantern. None of these appear in the prototype's own Tartarus or operations. */
window.FemcBattleEngine = (() => {
  const DATA = () => window.FEMC_BATTLE_DATA;
  const PHYS = new Set(['slash', 'strike', 'pierce']);
  const MAGIC = ['fire', 'ice', 'elec', 'wind'];

  /* Seedable RNG (mulberry32) so tests can replay a fight. */
  function rng(seed) {
    let a = seed >>> 0;
    return () => { a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  }

  /* ══════════════════════════════════════════════════
     GROWTH: building a party member from the save
     ══════════════════════════════════════════════════ */
  const member = id => DATA().party.find(m => m.id === id);

  /* ── The skill system (data.js tree / treeCenter / ptrees / chains / skillSlots). Rules only; the menu's Skills tab
     (menu.js) and practice mode's tree screen (battle.js) draw it.
     Save fields (save.js): nodes (Haenim's owned node ids), pts (her skill points), ptree { mid: [node ids] } (party trees),
     ranks { mid: link rank } (synced from the life sim), forgot { mid: [chain roots] }, order { mid: [chain roots] }
     (the order skills were learned in: the ninth and later wait for a "forget which?" choice), forms (permanent). ── */
  let chainIdx = null;
  function chainInfo(id) {
    if (!chainIdx) {
      chainIdx = {};
      DATA().chains.forEach(c => c.forEach((s, i) => { chainIdx[s] = { i, root: c[0] }; }));
      // A link's MAX evolution is the last step of its signature's chain (one member's own ending).
      Object.values(DATA().ptrees || {}).forEach(t => { const m = t.max; if (m && !chainIdx[m.to]) chainIdx[m.to] = { i: 99, root: (chainIdx[m.from] || { root: m.from }).root }; });
    }
    return chainIdx[id] || null;
  }
  const rootOf = id => (chainInfo(id) || { root: id }).root;
  const tierOf = id => (chainInfo(id) || { i: 0 }).i;
  /* Learn into a list in place: a later tier replaces an earlier one in its slot; an earlier tier never replaces a later one. */
  function learnInto(list, id) {
    if (!id || !DATA().skills[id]) return list;
    const r = rootOf(id), j = list.findIndex(x => rootOf(x) === r);
    if (j < 0) list.push(id); else if (tierOf(list[j]) < tierOf(id)) list[j] = id;
    return list;
  }

  /* Haenim's tree */
  let nodeCache = null;
  const treeNodes = () => nodeCache || (nodeCache = DATA().tree.flatMap(b => b.nodes.map(n => Object.assign({ branch: b.id }, n))).concat(DATA().treeCenter ? [Object.assign({ branch: 'center' }, DATA().treeCenter)] : []));
  const treeNode = id => treeNodes().find(n => n.id === id) || null;
  function treeFx(nodes = []) {
    const fx = { st: 0, ma: 0, en: 0, ag: 0, lu: 0, hp: 0, sp: 0, mods: {}, learn: [], healMult: 1, openBuff: null, autoAnalyze: false,
      unit: { counter: 0, spRegen: 0, resist: [], quick: false, firstFree: false, endure: false } };
    treeNodes().forEach(n => {
      if (!nodes.includes(n.id)) return;
      const e = n.fx || {};
      ['st', 'ma', 'en', 'ag', 'lu', 'hp', 'sp'].forEach(k => { if (e[k]) fx[k] += e[k]; });
      if (e.healMult) fx.healMult *= e.healMult;
      if (e.learn) fx.learn.push(e.learn);
      ['crit', 'bind', 'ropeCrit'].forEach(k => { if (e[k]) fx.mods[k] = (fx.mods[k] || 0) + e[k]; });
      ['weakMult', 'critMult', 'shiftMult', 'alloutMult', 'regen', 'shiftSp', 'shiftTh', 'bindTurns'].forEach(k => { if (e[k]) fx.mods[k] = e[k]; });
      if (e.flank) fx.mods.flank = true;
      if (e.autoAnalyze) fx.autoAnalyze = true;
      if (e.openBuff) fx.openBuff = e.openBuff;
      if (e.counter) fx.unit.counter += e.counter;
      if (e.spRegen) fx.unit.spRegen += e.spRegen;
      if (e.resist) fx.unit.resist.push(e.resist);
      ['quick', 'firstFree', 'endure'].forEach(k => { if (e[k]) fx.unit[k] = true; });
    });
    return fx;
  }
  /* A keystone counts as owned once its form has awakened (forms are permanent, and survive a respec or an old save). */
  function treeOwned(save, id) {
    const n = treeNode(id);
    if (!n) return false;
    return (save.nodes || []).includes(id) || !!(n.keystone && n.form && (save.forms || []).includes(n.form));
  }
  /* Fragments found (the battle save's, plus any the life sim knows about: extra). */
  const fragSet = (save, extra = []) => new Set((save.memories || []).concat(extra || []));
  /* own | avail | lock (a node before it) | lvl (Solar's level) | story (a full moon not cleared yet) | hidden (a memory not found) | taken (the other choice) */
  function treeState(save, id, frags = fragSet(save)) {
    const n = treeNode(id);
    if (!n) return 'lock';
    if (treeOwned(save, id)) return 'own';
    if (n.memory && !frags.has(n.memory)) return 'hidden';
    if (n.choice && treeNodes().some(x => x.choice === n.choice && x.id !== id && treeOwned(save, x.id))) return 'taken';
    if ((n.needs || []).some(x => !treeOwned(save, x)) || (n.any && !n.any.some(x => treeOwned(save, x)))) return 'lock';
    if (n.lvl && (save.lvl || 0) < n.lvl) return 'lvl';
    if (n.op && !((save.ops || {}).cleared || []).length) return 'story';
    return 'avail';
  }
  const nodeName = id => (treeNode(id) || {}).name || id;
  function treeWhy(save, id, frags = fragSet(save)) {
    const n = treeNode(id), st = treeState(save, id, frags);
    if (!n) return '';
    if (st === 'hidden') { const m = DATA().memories.find(x => x.id === n.memory); return `Opens when a memory from ${m ? m.world : 'another life'} surfaces.`; }
    if (st === 'taken') return `You chose ${nodeName(treeNodes().find(x => x.choice === n.choice && x.id !== id && treeOwned(save, x.id)).id)} here.`;
    if (st === 'lock') {
      const miss = (n.needs || []).filter(x => !treeOwned(save, x)).map(nodeName);
      if (n.any && !n.any.some(x => treeOwned(save, x))) miss.push(n.any.map(nodeName).join(' or '));
      return `Needs ${miss.join(' and ')}.`;
    }
    if (st === 'lvl') return `Needs Solar at Lv ${n.lvl}.`;
    if (st === 'story') return 'Needs a full moon cleared.';
    if (st === 'avail' && (save.pts || 0) < n.cost) return `Needs ${n.cost} skill points.`;
    return '';
  }
  function treeBuy(save, id, frags = fragSet(save)) {
    const n = treeNode(id);
    if (!n || treeState(save, id, frags) !== 'avail') return { ok: false, why: treeWhy(save, id, frags) || 'Not yet.' };
    if ((save.pts || 0) < n.cost) return { ok: false, why: `Needs ${n.cost} skill points.` };
    save.pts -= n.cost;
    (save.nodes || (save.nodes = [])).push(id);
    const learned = n.fx && n.fx.learn ? [n.fx.learn] : [];
    learned.forEach(s => unforget(save, 'solar', s));
    let form = null;
    if (n.form) { save.forms = save.forms || []; if (!save.forms.includes(n.form)) { save.forms.push(n.form); form = n.form; } }
    return { ok: true, learned, form, cost: n.cost };
  }
  /* Respec: every bought node comes back as points, except keystones (their forms are permanent, so they stay). */
  const treeRefundable = save => (save.nodes || []).filter(id => { const n = treeNode(id); return n && !n.keystone; });
  const treeSpent = save => treeRefundable(save).reduce((s, id) => s + treeNode(id).cost, 0);
  function treeRespec(save) {
    const back = treeSpent(save);
    save.pts = (save.pts || 0) + back;
    save.nodes = (save.nodes || []).filter(id => { const n = treeNode(id); return n && n.keystone; });
    return back;
  }

  /* Party trees */
  const ptreeOf = mid => (DATA().ptrees || {})[mid] || null;
  const ptreeNodes = mid => { const t = ptreeOf(mid); return t ? t.tiers.flatMap((tier, k) => tier.map(n => Object.assign({ tier: k, choice: k === 2 }, n))) : []; };
  const linkRank = (save, mid) => +((save.ranks || {})[mid]) || 0;
  const ptreeOwn = (save, mid) => ((save.ptree || {})[mid]) || [];
  const ptreeEarned = (save, mid) => DATA().progression.partyPts(lvlOf(save, mid));
  const ptreeSpent = (save, mid) => ptreeNodes(mid).filter(n => ptreeOwn(save, mid).includes(n.id)).reduce((s, n) => s + n.cost, 0);
  const ptreePts = (save, mid) => ptreeEarned(save, mid) - ptreeSpent(save, mid);
  /* own | avail | rank (the link isn't high enough) | lock (buy something in the tier before) | taken (the other tier-3 choice) */
  function ptreeState(save, mid, id, rank = linkRank(save, mid)) {
    const n = ptreeNodes(mid).find(x => x.id === id);
    if (!n) return 'lock';
    const own = ptreeOwn(save, mid);
    if (own.includes(id)) return 'own';
    if (rank < DATA().ptreeRanks[n.tier]) return 'rank';
    if (n.choice && ptreeNodes(mid).some(x => x.tier === n.tier && x.id !== id && own.includes(x.id))) return 'taken';
    if (n.tier > 0 && !ptreeNodes(mid).some(x => x.tier === n.tier - 1 && own.includes(x.id))) return 'lock';
    return 'avail';
  }
  function ptreeBuy(save, mid, id, rank = linkRank(save, mid)) {
    const n = ptreeNodes(mid).find(x => x.id === id);
    const st = ptreeState(save, mid, id, rank);
    if (!n || st !== 'avail') return { ok: false, why: st === 'rank' ? `Opens at link rank ${DATA().ptreeRanks[n.tier]}.` : st === 'taken' ? 'The other choice is taken.' : 'Buy something in the tier above first.' };
    if (ptreePts(save, mid) < n.cost) return { ok: false, why: `Needs ${n.cost} points (they come from levels).` };
    save.ptree = save.ptree || {};
    (save.ptree[mid] || (save.ptree[mid] = [])).push(id);
    const learned = n.fx && n.fx.learn ? [n.fx.learn] : [];
    learned.forEach(s => unforget(save, mid, s));
    return { ok: true, learned, cost: n.cost };
  }
  function ptreeRespec(save, mid) { const back = ptreeSpent(save, mid); if (save.ptree) save.ptree[mid] = []; return back; }
  function ptreeFx(save, mid) {
    const fx = { st: 0, ma: 0, en: 0, ag: 0, lu: 0, hp: 0, sp: 0, learn: [], counter: 0, crit: 0, evade: 0, acc: 0, endure: false, healMult: 1, aff: {}, boost: {} };
    const own = ptreeOwn(save, mid);
    ptreeNodes(mid).forEach(n => {
      if (!own.includes(n.id)) return;
      const e = n.fx || {};
      ['st', 'ma', 'en', 'ag', 'lu', 'hp', 'sp', 'counter', 'crit', 'evade', 'acc'].forEach(k => { if (e[k]) fx[k] += e[k]; });
      if (e.learn) fx.learn.push(e.learn);
      if (e.endure) fx.endure = true;
      if (e.healMult) fx.healMult *= e.healMult;
      Object.assign(fx.aff, e.aff || {}); Object.assign(fx.boost, e.boost || {});
    });
    return fx;
  }

  /* Forgetting: a forgotten skill's whole chain stays forgotten (an upgrade won't bring it back); buying it again does. */
  function forgetSkill(save, mid, id) {
    save.forgot = save.forgot || {};
    const f = save.forgot[mid] || (save.forgot[mid] = []), r = rootOf(id);
    if (!f.includes(r)) f.push(r);
  }
  function unforget(save, mid, id) {
    const f = (save.forgot || {})[mid];
    if (f) save.forgot[mid] = f.filter(r => r !== rootOf(id));
  }

  /* A tree branch is mastered when every node it needs is owned (kept for older callers; forms now come from keystones). */
  const mastered = (save, branch) => { const b = DATA().tree.find(x => x.id === branch); return !!b && !!b.form && treeOwned(save, b.nodes.find(n => n.keystone).id); };
  /* Haenim's forms the save has unlocked (permanent once earned: save.forms). */
  function formUnlocked(save, id) {
    const p = DATA().personas[id];
    if (!p || !p.form) return id === 'haenim';
    if ((save.forms || []).includes(id)) return true;
    const u = p.unlock || {};
    return !!(u.node && (save.nodes || []).includes(u.node));
  }
  const formsList = () => Object.keys(DATA().personas).filter(k => DATA().personas[k].form);
  /* Which Persona a member is using right now. */
  function personaId(mid, save) {
    const m = member(mid);
    // forceForm: a story fight (the finale's last phase) puts Solar in her route's form for one battle.
    if (mid === 'solar' && save.forceForm && DATA().personas[save.forceForm]) return save.forceForm;
    if (mid === 'solar') return save.form && save.form !== 'haenim' && formUnlocked(save, save.form) ? save.form : 'haenim';
    const p = DATA().personas[m.persona];
    return p.evolves && (save.evo || {})[mid] ? p.evolves : m.persona;
  }
  /* Evolutions that are due (condition met, not yet seen). Fuuka's Lucia is included (user 'fuuka'). */
  function evolutionsDue(save, lvOf) {
    const D = DATA(), out = [];
    Object.entries(D.personas).forEach(([id, p]) => {
      if (!p.evolves || (save.evo || {})[p.user]) return;
      const e = p.evolve || {};
      const ok = (e.lvl && p.user !== 'fuuka' && lvOf(p.user) >= e.lvl) || (e.op && ((save.ops || {}).cleared || []).includes(e.op));
      if (ok) out.push({ mid: p.user, from: id, to: p.evolves });
    });
    return out;
  }
  const lvlOf = (save, mid) => (mid === 'solar' ? save.lvl : ((save.mem || {})[mid] || {}).lvl || save.lvl);
  function gearOf(save, mid) {
    const D = DATA(), m = member(mid), eq = Object.assign({}, D.startGear[mid], ((save.gear || {}).eq || {})[mid] || {});
    const ok = (id, slot) => { const g = id && D.gear[id]; return g && g.slot === slot && (slot !== 'weapon' || g.wtype === m.wtype) ? g : null; };
    return { weapon: ok(eq.weapon, 'weapon') || D.gear[D.startGear[mid].weapon], armor: ok(eq.armor, 'armor') || D.gear.armor0, acc: ok(eq.acc, 'acc'), ids: eq };
  }
  /* Every skill a member knows at a level: base list, level learns, the evolved Persona's learns, then Haenim's tree (Solar) or
     the member's own tree and MAX evolution. Later tiers upgrade earlier ones in place. Forms' signatures are separate (kitFor). */
  function skillsFor(mid, save, lvl = lvlOf(save, mid), fx = treeFx(save.nodes)) {
    const D = DATA(), m = member(mid);
    let list = [];
    m.skills.forEach(id => learnInto(list, id));
    const apply = arr => (arr || []).slice().sort((a, b) => a[0] - b[0]).forEach(([L, id, rep]) => {
      if (L > lvl) return;
      if (rep && list.includes(rep) && rootOf(rep) !== rootOf(id)) list = list.map(x => (x === rep ? id : x)); else learnInto(list, id);
    });
    apply(m.learn);
    const pid = personaId(mid, save), per = D.personas[pid];
    if (mid !== 'solar' && pid !== m.persona) apply(per.learn);
    if (mid === 'solar') fx.learn.forEach(id => learnInto(list, id));
    else {
      ptreeFx(save, mid).learn.forEach(id => learnInto(list, id));
      const t = ptreeOf(mid);
      if (t && t.max && linkRank(save, mid) >= 10) learnInto(list, t.max.to);
    }
    return [...new Set(list)];
  }
  /* The eight slots: skills in the order they were learned, minus forgotten ones. slots: what the Persona uses; pending: learned
     but waiting for a "forget which?" choice; sig: a form's signature (its own slot). Keeps save.order up to date. */
  function kitFor(mid, save, lvl = lvlOf(save, mid), fx = treeFx(save.nodes)) {
    const D = DATA(), pool = skillsFor(mid, save, lvl, fx);
    const forgot = new Set(((save.forgot || {})[mid]) || []);
    const list = pool.filter(id => !forgot.has(rootOf(id)));
    const roots = list.map(rootOf);
    const ord = (((save.order || {})[mid]) || []).filter(r => roots.includes(r));
    roots.forEach(r => { if (!ord.includes(r)) ord.push(r); });
    (save.order || (save.order = {}))[mid] = ord;
    const sorted = ord.map(r => list.find(id => rootOf(id) === r));
    const per = D.personas[personaId(mid, save)] || {};
    return { slots: sorted.slice(0, D.skillSlots), pending: sorted.slice(D.skillSlots), sig: mid === 'solar' && per.sig ? per.sig : null, pool };
  }
  function statsFor(mid, save, lvl = lvlOf(save, mid), fx = treeFx(save.nodes), opts = {}) {
    const D = DATA(), m = member(mid), L = lvl - D.progression.startLevel, s = {};
    Object.keys(m.base).forEach(k => { s[k] = Math.round(m.base[k] + m.growth[k] * L); });
    const add = src => ['st', 'ma', 'en', 'ag', 'lu', 'hp', 'sp'].forEach(k => { if (src[k]) s[k] = (s[k] || 0) + src[k]; });
    if (mid === 'solar') add(fx); else add(ptreeFx(save, mid));
    const per = D.personas[personaId(mid, save)];
    [per.bonus, per.lean].forEach(b => b && Object.keys(b).forEach(k => { s[k] = (s[k] || 0) + b[k]; }));
    if (!opts.noGear) { const g = gearOf(save, mid); [g.weapon, g.armor, g.acc].forEach(x => x && x.stats && Object.keys(x.stats).forEach(k => { s[k] = (s[k] || 0) + x.stats[k]; })); }
    if (opts.tired) ['st', 'ma', 'en', 'ag'].forEach(k => { s[k] = Math.round(s[k] * D.progression.tired.stat); });
    return s;
  }
  /* The battle unit for a member. carry: { hp, sp, th } from the last fight; tired: true if fatigued. */
  function buildUnit(mid, save, { carry = null, tired = false, fx = treeFx(save.nodes) } = {}) {
    const D = DATA(), m = member(mid), L = lvlOf(save, mid), s = statsFor(mid, save, L, fx, { tired }), pid = personaId(mid, save), per = D.personas[pid], g = gearOf(save, mid);
    const aff = Object.assign({}, per.aff);
    [g.armor, g.acc].forEach(x => x && x.aff && Object.entries(x.aff).forEach(([el, a]) => { if (!['null', 'repel', 'drain'].includes(aff[el])) aff[el] = a; }));
    // Tree passives: Solar's from Haenim's tree, everyone else's from their own.
    const pf = mid === 'solar' ? null : ptreeFx(save, mid), hu = mid === 'solar' ? fx.unit : null;
    const resist = el => { if (!['null', 'repel', 'drain'].includes(aff[el])) aff[el] = 'resist'; };
    if (hu) hu.resist.forEach(resist);
    if (pf) Object.entries(pf.aff).forEach(([el, a]) => (a === 'resist' ? resist(el) : (aff[el] = a)));
    const nullAil = [].concat(...[g.weapon, g.armor, g.acc].map(x => (x && x.nullAil) || []));
    const w = g.weapon, kit = kitFor(mid, save, L, fx);
    return {
      mid, name: m.name, persona: per.name, personaId: pid, lvl: L, maxHp: s.hp, maxSp: s.sp, acc: (m.acc || 0) + (w.acc || 0) + (pf ? pf.acc : 0),
      hp: carry ? Math.max(1, Math.min(carry.hp, s.hp)) : s.hp, sp: carry ? Math.min(carry.sp, s.sp) : s.sp, th: carry && carry.th != null ? carry.th : ((save.th || {})[mid] || 0),
      st: s.st, ma: s.ma, en: s.en, ag: s.ag, lu: s.lu, aff, weapon: w.el || m.weapon, atk: w.atk, whits: w.hits || null, wail: w.ail || null,
      critBonus: (w.crit || 0) + ((g.acc && g.acc.crit) || 0) + ((g.armor && g.armor.crit) || 0) + (pf ? pf.crit : 0), def: (g.armor && g.armor.def) || 0,
      nullAil, spRegen: ((g.acc && g.acc.spRegen) || 0) + (hu ? hu.spRegen : 0), hpRegen: (g.acc && g.acc.hpRegen) || 0, thMult: (g.acc && g.acc.thMult) || 1, tired: !!tired,
      skills: kit.slots.concat(kit.sig && !kit.slots.includes(kit.sig) ? [kit.sig] : []), pending: kit.pending.slice(),
      healMult: mid === 'solar' ? fx.healMult : pf.healMult,
      counter: hu ? hu.counter : pf.counter, evade: pf ? pf.evade : 0, endure: hu ? hu.endure : pf.endure,
      quick: !!(hu && hu.quick), firstFree: !!(hu && hu.firstFree), elBoost: pf ? pf.boost : {}
    };
  }
  /* For the balance sim: a whole party from a compact config { lvl, party, nodes, tier, form, evo }. */
  function simParty(c) {
    const D = DATA();
    const ids = ['solar'].concat(c.party || D.defaultParty);
    const t = c.tier != null ? c.tier : 0;
    const eq = {};
    ids.forEach(id => { eq[id] = { weapon: `${member(id).wtype}${Math.min(7, t)}`, armor: `armor${Math.min(7, t)}`, acc: c.acc ? c.acc[id] || null : null }; });
    const save = { lvl: c.lvl, nodes: c.nodes || [], mem: Object.fromEntries(ids.map(id => [id, { lvl: c.lvl }])), gear: { eq }, form: c.form || 'haenim', forms: c.form ? [c.form] : [], evo: c.evo || {}, ops: { cleared: c.cleared || [] }, th: {},
      ptree: c.ptree || {}, ranks: c.ranks || {}, forgot: {}, order: {} };
    if (c.evoAuto) evolutionsDue(save, id => c.lvl).forEach(e => { save.evo[e.mid] = true; });
    const fx = treeFx(save.nodes);
    return { units: ids.map(id => buildUnit(id, save, { fx, tired: !!(c.tired && c.tired.includes(id)) })), mods: fx.mods, fx, save };
  }

  /* ── Enemies ──────────────────────────────────────── */
  /* kind may be 'slug@lvl' to field a Shadow at a higher level. heat: Tartarus difficulty from full climbs. */
  function enemyBase(kindStr) {
    const D = DATA();
    const [kind, at] = String(kindStr).split('@');
    const d = D.enemies[kind];
    if (!d) throw new Error('Unknown Shadow ' + kindStr);
    const L = d.lvl, T = at ? +at : L;
    const r = (a, b) => (a + b * T) / (a + b * L);
    const P = D.progression;
    const expBase = d.exp != null ? d.exp : P.expFor(L), yenBase = d.yen != null ? d.yen : P.yenFor(L);
    return { kind, d, lvl: T, hp: Math.round(d.hp * r(26, 13.5)), st: d.st * r(4, 0.95), ma: d.ma * r(4, 0.95), en: d.en * r(3, 0.7), ag: d.ag * r(4, 0.8), lu: d.lu * r(3, 0.5),
      exp: Math.round(expBase * P.expFor(T) / P.expFor(L)), yen: Math.round(yenBase * P.yenFor(T) / P.yenFor(L)) };
  }
  function makeEnemy(kindStr, id, heat = 0) {
    const b = enemyBase(kindStr), d = b.d, k = 1 + heat;
    return {
      id, side: 'enemy', kind: b.kind, name: d.name, lvl: b.lvl + Math.round(heat * 10), boss: !!d.boss, reaper: !!d.reaper, gimmick: d.gimmick || null, effigy: !!d.effigy,
      hp: Math.round(b.hp * k), maxHp: Math.round(b.hp * k), sp: 999, maxSp: 999,
      st: b.st * (1 + heat * 0.6), ma: b.ma * (1 + heat * 0.6), en: b.en, ag: b.ag, lu: b.lu,
      aff: { ...d.aff }, baseAff: { ...d.aff }, skills: d.skills.slice(), ai: d.ai, exp: Math.round(b.exp * (1 + heat * 1.3)), yen: Math.round(b.yen * (1 + heat * 0.8)),
      down: false, guard: false, ail: null, dead: false, buffs: { atk: 0, def: 0, agi: 0 }, buffT: { atk: 0, def: 0, agi: 0 }, boost: 1, turns: 0, th: 0
    };
  }

  /* setup: { party: [unit], enemies: [kind], mods, known, rand, items, heat, ctx, diff }
     diff: a function returning { pdmg, edmg, heal } (data.difficulty); read on every hit, so a change in Settings applies at once. */
  const NO_DIFF = { pdmg: 1, edmg: 1, heal: 1 };
  function create(setup) {
    const R = setup.rand || Math.random;
    const diff = () => (setup.diff && setup.diff()) || NO_DIFF;
    const D = DATA();
    const mods = Object.assign({ crit: 0, critMult: 1.6, weakMult: 1, healMult: 1, bind: 0, ropeCrit: 0, shiftMult: 1.25, shiftSp: 0, shiftTh: 0, alloutMult: 1, regen: 0, bindTurns: 1, flank: false }, setup.mods || {});
    const S = {
      units: [], round: 0, queue: [], cur: null, oneMore: false, chain: new Set(), alloutReady: false, outcome: null,
      mods, known: setup.known || {}, items: setup.items || {}, heat: setup.heat || 0, extraUsed: false, uid: 0, boss: false, reaper: false, log: [], ctx: setup.ctx || {}, scanRound: -1, deaths: [],
      kitsune: 0, kitsuneSide: null, once: new Set() // Kitsune Rush's turns left (and whose side), skills used once this battle
    };
    /* Buff levels (data.js buffRules): damage dealt / taken for a stat level from -cap to +cap. */
    const BRu = D.buffRules, CAP = BRu.cap;
    const lvl3 = v => Math.min(CAP, Math.abs(v));
    const atkM = v => (v >= 0 ? BRu.atk[lvl3(v)] : BRu.atkDown[lvl3(v)]);
    const defM = v => (v >= 0 ? BRu.def[lvl3(v)] : BRu.defDown[lvl3(v)]);
    setup.party.forEach((p, i) => S.units.push(Object.assign({ id: 'p' + i, side: 'party', down: false, guard: false, ail: null, dead: p.hp <= 0, buffs: { atk: 0, def: 0, agi: 0 }, buffT: { atk: 0, def: 0, agi: 0 }, boost: 1, turns: 0, th: 0, orgia: 0, nullAil: [],
      taunt: 0, veneer: 0, ward: false, endured: false, usedFree: false, counter: 0, evade: 0 }, p)));
    setup.enemies.forEach(kind => { const e = makeEnemy(kind, 'e' + S.uid++, S.heat); S.units.push(e); if (e.boss) S.boss = true; if (e.reaper) S.reaper = true; });

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
    const forget = u => { delete S.known[u.kind]; };
    const kindAlive = kind => alive(foes()).find(f => f.kind === kind);
    /* Aggro: the party member drawing every single-target attack (Public Veneer, Provoke). Off Angle Flank: while someone
       draws aggro, everyone else on the party gets big evasion and crit rate (Haenim's Veil branch). */
    const aggro = () => alive(party()).filter(p => p.taunt > 0).sort((a, b) => b.taunt - a.taunt)[0] || null;
    const flanking = u => !!(mods.flank && u && u.side === 'party' && !u.dead && aggro() && aggro() !== u);
    const kitsuneOn = u => !!(S.kitsune > 0 && u && u.side === S.kitsuneSide);

    /* ── Theurgy gauge ─────────────────────────────── */
    function gain(u, kind, ev, scale = 1) {
      if (!u || u.side !== 'party' || u.dead || u.th >= 100) return;
      const m = member(u.mid) || {};
      const amt = D.theurgyGain[kind] * scale * ((m.th || {})[kind] || 1) * (u.thMult || 1);
      u.th = Math.min(100, u.th + amt);
      if (u.th >= 100) ev.push({ t: 'thReady', tgt: u.id });
    }

    /* ── Formulas ─────────────────────────────────────── */
    function power(src, sk) {
      const phys = PHYS.has(sk.el) || sk.id === 'attack';
      let stat = phys ? src.st : src.ma;
      if (sk.theurgy) stat = Math.max(src.st, src.ma);
      return sk.power * (stat + src.lvl * 0.5 + 4) / 16;
    }
    function rawDamage(src, tgt, sk) {
      let d = power(src, sk);
      d *= atkM(src.buffs.atk);
      d *= defM(tgt.buffs.def);
      if (src.elBoost && src.elBoost[sk.el]) d *= src.elBoost[sk.el];
      d /= 1 + (tgt.en + (tgt.def || 0) / 4) / 20;
      d *= 0.92 + R() * 0.16;
      d *= src.boost || 1;
      d *= src.side === 'party' ? diff().pdmg : diff().edmg;
      if (src.side === 'enemy') {
        d *= 1.18; // Shadows hit a little harder than the formula alone
        if (src.empower) d *= 1 + 0.15 * src.empower;
        if (src.charged && (PHYS.has(sk.el))) d *= 2.4;
      }
      if (tgt.guard) d *= 0.5;
      return d;
    }
    const helpless = u => !!(u.down || (u.ail && D.ailments[u.ail.id].noAct));
    function hits(src, tgt, sk) {
      if (sk.sure || helpless(tgt)) return true;
      const base = (sk.acc || (PHYS.has(sk.el) ? 93 : 97)) + (src.acc || 0);
      const ag = u => u.ag * (kitsuneOn(u) ? 1.5 : 1);
      let chance = base + (ag(src) - ag(tgt)) * 0.8 + BRu.agi * (src.buffs.agi - tgt.buffs.agi);
      if (kitsuneOn(src)) chance *= 1.5;                               // Kitsune Rush: accuracy +50%
      if (src.wild || (src.ail && src.ail.id === 'disorient')) chance -= 35; // Disoriented: swings wide
      let floor = sk.acc ? 50 : 60;
      if (src.side !== tgt.side && tgt.side === 'party') {
        const ev = (tgt.evade || 0) + (flanking(tgt) ? 35 : 0);       // evasion (party trees) and Off Angle Flank
        chance -= ev; floor -= ev / 2;
      }
      return R() * 100 < Math.max(floor, chance);
    }
    function critChance(src, tgt, sk) {
      if ((!PHYS.has(sk.el) && !sk.crit) || tgt.guard) return 0;
      if (!PHYS.has(sk.el) && sk.id !== 'theurgy') return 0;
      let c = 3 + src.lu * 0.6 + (sk.crit || 0);
      if (src.side === 'party') c += mods.crit + (src.critBonus || 0) + ((sk.ail && sk.ail.rope) ? mods.ropeCrit : 0) + (flanking(src) ? 30 : 0) + (sk.critIf && critCond(tgt, sk) ? 30 : 0);
      else c *= 0.5;
      if (tgt.ail && tgt.ail.id === 'distress') c += 40;
      return c;
    }

    /* Kunai Flick: a debuffed or ailing foe, or a weak spot. */
    const critCond = (tgt, sk, aff) => !!(tgt.ail || ['atk', 'def', 'agi'].some(s => tgt.buffs[s] < 0) || aff === 'weak' || (aff == null && tgt.aff && tgt.aff[sk.el] === 'weak' && !tgt.guard));

    /* ── Ailments ─────────────────────────────────────── */
    const ailImmune = (u, id) => u.side === 'enemy' ? (D.enemies[u.kind].ailImmune || []).includes(id) : (u.nullAil || []).includes(id);
    function inflict(src, tgt, ail, ev, mult = 1) {
      if (!ail || tgt.dead || tgt.ail || ailImmune(tgt, ail.id)) return false;
      if (tgt.ward && src.side !== tgt.side) return false; // Protective Suzu
      let ch = ail.chance * mult;
      if (ail.rope && src.side === 'party') ch += mods.bind;
      if (tgt.guard) ch *= 0.5;
      if (R() >= ch) return false;
      const T = D.ailments[ail.id].turns;
      tgt.ail = { id: ail.id, t: T[0] + Math.floor(R() * (T[1] - T[0] + 1)) };
      if (ail.rope && ail.id === 'bind' && src.side === 'party' && mods.bindTurns > 1) tgt.ail.t = mods.bindTurns; // Fine Stitch
      ev.push({ t: 'ail', src: src.id, tgt: tgt.id, id: ail.id, turns: tgt.ail.t });
      if (src.side === 'party' && tgt.side === 'enemy') gain(src, 'ail', ev);
      return true;
    }
    function cure(tgt, ids, ev, src) {
      if (!tgt.ail || !ids.includes(tgt.ail.id)) return false;
      const id = tgt.ail.id;
      tgt.ail = null;
      ev.push({ t: 'ailEnd', tgt: tgt.id, id, cured: true, src: src && src.id });
      return true;
    }

    /* ── Boss gimmicks: hooks into the flow. init (fight start), turn (start of its turn), standup, downed, death, shield. ── */
    const shieldUp = u => u.gimmick === 'hanged' && alive(foes()).some(f => f.effigy && !f.down);
    const GIMMICKS = {
      priestess: {
        turn(u, ev) {
          const veils = D.enemies[u.kind].veil;
          u.veil = veils[(u.turns - 1) % veils.length];
          u.aff = Object.assign({}, u.baseAff, { [u.veil]: 'weak' });
          ev.push({ t: 'veil', tgt: u.id, el: u.veil });
        }
      },
      empress: {
        init(u) { forget(u); GIMMICKS.empress.gate(u); },
        gate(u) {
          const opts = D.enemies[u.kind].gates.filter(g => g !== u.gate);
          u.gate = pick(opts);
          u.aff = Object.fromEntries(D.affinityOrder.map(el => [el, 'null']));
          u.aff[u.gate] = 'weak';
        },
        standup(u, ev) { GIMMICKS.empress.gate(u); forget(u); ev.push({ t: 'gateShift', tgt: u.id }); }
      },
      emperor: {
        init(u) { forget(u); GIMMICKS.emperor.shift(u); },
        shift(u) {
          const opts = D.enemies[u.kind].shifts.filter(g => g !== u.weakEl);
          u.weakEl = pick(opts);
          u.aff = Object.fromEntries(D.affinityOrder.map(el => [el, ['light', 'dark'].includes(el) ? 'null' : 'resist']));
          u.aff[u.weakEl] = 'weak';
        },
        turn(u, ev) { if (u.turns > 1) { GIMMICKS.emperor.shift(u); forget(u); ev.push({ t: 'shiftWeak', tgt: u.id }); } }
      },
      hierophant: {
        downed(u, ev) {
          if (u.buffs.atk > 0 || u.buffs.def > 0 || u.buffs.agi > 0) { ['atk', 'def', 'agi'].forEach(s => { if (u.buffs[s] > 0) { u.buffs[s] = 0; u.buffT[s] = 0; } }); ev.push({ t: 'composure', tgt: u.id }); }
        }
      },
      chariot: {
        turn(u, ev) { if (kindAlive('justice')) { u.empower = Math.min(6, (u.empower || 0) + 1); ev.push({ t: 'empower', tgt: u.id, n: u.empower }); } }
      },
      justice: {
        death(u, ev) { const c = kindAlive('chariot'); if (c && c.empower) { c.empower = 0; c.charged = false; if (!c.down) c.down = true; ev.push({ t: 'drive', tgt: c.id }); } }
      },
      hermit: {
        init(u) { u.hidden = true; },
        turn(u, ev) { if (!u.hidden && --u.revealT <= 0) { u.hidden = true; ev.push({ t: 'hide', tgt: u.id }); } }
      },
      fortune: {},
      strength: {},
      // The finale (story fight). Breaking a lantern weakens the train; when the train stops, every lantern goes out.
      wren: {},
      train: {
        death(u, ev) {
          alive(foes()).filter(f => f.gimmick === 'lantern').forEach(f => { f.woke = true; kill(f, ev); ev.push({ t: 'hit', src: f.id, tgt: f.id, el: 'none', aff: 'normal', amount: 0, hp: 0, maxHp: f.maxHp, killed: true, quiet: true }); });
          ev.push({ t: 'msg', text: 'The train stops. In the rear cars, the sleepers wake.' });
        }
      },
      lantern: {
        death(u, ev) {
          const t = alive(foes()).find(f => f.gimmick === 'train');
          if (!t || u.woke) return;
          t.en *= 0.75;
          const cut = Math.round(t.maxHp * 0.12);
          t.hp = Math.max(1, t.hp - cut);
          ev.push({ t: 'msg', text: `${u.name} goes dark. Somewhere, a life wakes up, and the train shudders.` });
          ev.push({ t: 'hit', src: u.id, tgt: t.id, el: 'none', aff: 'normal', amount: cut, hp: t.hp, maxHp: t.maxHp, quiet: true });
        }
      },
      hanged: {
        init(u) { u.effT = 0; summonAdds(u, null); },
        turn(u) { if (!alive(foes()).some(f => f.effigy)) u.effT = (u.effT || 0) + 1; else u.effT = 0; }
      }
    };
    const G = (u, hook) => u.gimmick && GIMMICKS[u.gimmick] && GIMMICKS[u.gimmick][hook];
    // setup.protect: story fights Solar can't lose (her HP stops at 1).
    function guarded(u) { return !!setup.protect && u.side === 'party' && u === leader(); }
    function summonAdds(u, ev) {
      const added = (D.enemies[u.kind].summon || []).map(k => { const e = makeEnemy(k, 'e' + S.uid++, u.boss ? 0 : S.heat); S.units.push(e); return e.id; });
      if (ev) ev.push({ t: 'summon', src: u.id, ids: added, kind: u.kind });
      return added;
    }

    /* Resolve one damaging hit. Returns whether it newly knocked the target down. */
    function strike(src, tgt, sk, ev, { spread = false } = {}) {
      if (tgt.unreachable && src.side === 'party') {
        ev.push({ t: 'hit', src: src.id, tgt: tgt.id, el: sk.el, aff: 'null', amount: 0, hp: tgt.hp, maxHp: tgt.maxHp });
        if (!tgt.toldOut) { tgt.toldOut = true; ev.push({ t: 'msg', text: 'You can’t reach this one.' }); }
        return false;
      }
      // The Hermit hides: single-target attacks can't find it; spread (all/random) attacks flush it out.
      if (tgt.hidden && src.side === 'party') {
        if (!spread) { ev.push({ t: 'miss', src: src.id, tgt: tgt.id, hidden: true }); return false; }
        tgt.hidden = false; tgt.revealT = 1; ev.push({ t: 'flushed', tgt: tgt.id });
      }
      if (tgt.ward && src.side !== tgt.side) { ev.push({ t: 'hit', src: src.id, tgt: tgt.id, el: sk.el, aff: 'null', warded: true, amount: 0, hp: tgt.hp, maxHp: tgt.maxHp }); return false; }
      if (!hits(src, tgt, sk)) { ev.push({ t: 'miss', src: src.id, tgt: tgt.id }); return false; }
      if (shieldUp(tgt) && src.side === 'party') { ev.push({ t: 'hit', src: src.id, tgt: tgt.id, el: sk.el, aff: 'null', shield: true, amount: 0, hp: tgt.hp, maxHp: tgt.maxHp }); return false; }
      let aff = sk.el === 'almighty' ? 'normal' : (tgt.aff[sk.el] || 'normal');
      if (sk.el === 'almighty' && tgt.gimmick === 'empress' && !sk.theurgy) aff = 'null';
      if (sk.weakEl && tgt.aff[sk.weakEl] === 'weak') aff = 'weak';
      if (tgt.guard && aff === 'weak') aff = 'normal';
      if (src.side === 'party' && sk.el !== 'almighty' && learn(tgt, sk.el)) ev.push({ t: 'reveal', tgt: tgt.id, kind: tgt.kind, el: sk.el, aff: tgt.aff[sk.el] || 'normal' });
      if (aff === 'repel') {
        const d = Math.max(1, Math.round(rawDamage(src, src, sk) * (src.aff[sk.el] === 'resist' ? 0.5 : 1)));
        const back = (src.aff[sk.el] === 'null' || src.aff[sk.el] === 'repel') ? 0 : d;
        src.hp = Math.max(0, src.hp - back);
        if (src.hp <= 0 && guarded(src)) src.hp = 1;
        if (src.hp <= 0) kill(src, ev);
        ev.push({ t: 'hit', src: src.id, tgt: tgt.id, el: sk.el, aff: 'repel', amount: 0 });
        ev.push({ t: 'hit', src: tgt.id, tgt: src.id, el: sk.el, aff: back ? 'normal' : 'null', amount: back, hp: src.hp, maxHp: src.maxHp, killed: src.dead, reflected: true });
        return false;
      }
      if (aff === 'null') { ev.push({ t: 'hit', src: src.id, tgt: tgt.id, el: sk.el, aff, amount: 0, hp: tgt.hp, maxHp: tgt.maxHp }); return false; }
      let d = rawDamage(src, tgt, sk);
      if (spread && tgt.gimmick === 'hermit') d *= 0.5;
      if (aff === 'drain') {
        const amt = Math.max(1, Math.round(d));
        tgt.hp = Math.min(tgt.maxHp, tgt.hp + amt);
        ev.push({ t: 'hit', src: src.id, tgt: tgt.id, el: sk.el, aff, amount: amt, hp: tgt.hp, maxHp: tgt.maxHp });
        return false;
      }
      // Frozen: the next physical hit is a sure critical and shatters the ice.
      const shatter = PHYS.has(sk.el) && tgt.ail && tgt.ail.id === 'freeze';
      const keen = !!(sk.critX && sk.critIf && src.side === 'party' && critCond(tgt, sk, aff)); // Kunai Flick's opening
      const crit = shatter || (sk.crit >= 100) || R() * 100 < critChance(src, tgt, sk);
      if (aff === 'weak') d *= 1.5 * (src.side === 'party' ? mods.weakMult : 1);
      if (aff === 'resist') d *= 0.5;
      if (crit) d *= keen ? sk.critX : (src.side === 'party' ? mods.critMult : 1.6);
      const amount = Math.max(1, Math.round(d));
      tgt.hp = Math.max(0, tgt.hp - amount);
      if (tgt.hp <= 0 && guarded(tgt)) tgt.hp = 1;
      let endured = false;
      if (tgt.hp <= 0 && tgt.endure && !tgt.endured) { tgt.hp = 1; tgt.endured = true; endured = true; } // Endure: once per battle
      let downed = false, killed = false;
      if (tgt.hp <= 0) { kill(tgt, ev); killed = true; }
      else if ((aff === 'weak' || crit) && !tgt.down && !tgt.guard) { tgt.down = true; downed = true; }
      else if (sk.down && !tgt.down && !tgt.guard && R() < sk.down) { tgt.down = true; downed = true; }
      ev.push({ t: 'hit', src: src.id, tgt: tgt.id, el: sk.el, aff, crit, amount, hp: tgt.hp, maxHp: tgt.maxHp, killed, downed, shatter, skill: sk.id, theurgy: !!sk.theurgy, keen: keen && crit, flank: crit && flanking(src) });
      if (endured) ev.push({ t: 'endure', tgt: tgt.id });
      if (src.side === 'party') {
        if (aff === 'weak') gain(src, 'weak', ev);
        if (crit) gain(src, 'crit', ev);
        if (killed) gain(src, 'kill', ev);
      } else if (tgt.side === 'party' && amount > 0) gain(tgt, 'hurt', ev);
      if (downed) { const h = G(tgt, 'downed'); if (h) h(tgt, ev); }
      if (shatter && !killed) { tgt.ail = null; ev.push({ t: 'ailEnd', tgt: tgt.id, id: 'freeze', shatter: true }); }
      // Shocked: touching it with a physical attack may shock the attacker.
      if (!killed && PHYS.has(sk.el) && tgt.ail && tgt.ail.id === 'shock' && !src.ail && !src.dead && !ailImmune(src, 'shock') && R() < 0.4) {
        src.ail = { id: 'shock', t: 1 };
        ev.push({ t: 'ail', src: tgt.id, tgt: src.id, id: 'shock', turns: 1, back: true });
      }
      if (!killed && sk.ail) inflict(src, tgt, sk.ail, ev, aff === 'weak' ? 1.5 : aff === 'resist' ? 0.5 : 1);
      return downed;
    }
    /* Hama / Mudo: all or nothing. Bosses are immune. Fear makes Dark nearly certain. */
    function instaKill(src, tgt, sk, ev) {
      const a = tgt.aff[sk.el] || 'normal';
      if (src.side === 'party' && learn(tgt, sk.el)) ev.push({ t: 'reveal', tgt: tgt.id, kind: tgt.kind, el: sk.el, aff: a });
      if (tgt.hidden && src.side === 'party') { ev.push({ t: 'miss', src: src.id, tgt: tgt.id, hidden: true }); return false; }
      if (tgt.ward && src.side !== tgt.side) { ev.push({ t: 'hit', src: src.id, tgt: tgt.id, el: sk.el, aff: 'null', warded: true, amount: 0, hp: tgt.hp, maxHp: tgt.maxHp, insta: true }); return false; }
      if (tgt.boss || tgt.unreachable || guarded(tgt) || ['null', 'repel', 'drain'].includes(a)) { ev.push({ t: 'hit', src: src.id, tgt: tgt.id, el: sk.el, aff: 'null', amount: 0, hp: tgt.hp, maxHp: tgt.maxHp, insta: true }); return false; }
      let ch = sk.chance + src.lu * 0.5;
      if (a === 'weak') ch = ch * 2 + 15;
      if (a === 'resist') ch *= 0.4;
      if (sk.el === 'dark' && tgt.ail && tgt.ail.id === 'fear') ch += 55;
      if (tgt.down) ch += 10;
      if (tgt === leader()) ch *= 0.5; // Solar falling ends the run, so Shadows' instant kills land on her less
      if (R() * 100 >= ch) { ev.push({ t: 'miss', src: src.id, tgt: tgt.id, insta: true }); return false; }
      const amount = tgt.hp;
      kill(tgt, ev);
      ev.push({ t: 'hit', src: src.id, tgt: tgt.id, el: sk.el, aff: a === 'weak' ? 'weak' : 'normal', amount, hp: 0, maxHp: tgt.maxHp, killed: true, insta: true });
      if (src.side === 'party') gain(src, 'kill', ev);
      return false;
    }
    function kill(u, ev) {
      u.dead = true; u.hp = 0; u.down = false; u.ail = null; u.guard = false; u.hidden = false; u.orgia = 0; u.taunt = 0; u.ward = false;
      u.buffs = { atk: 0, def: 0, agi: 0 }; u.buffT = { atk: 0, def: 0, agi: 0 };
      if (G(u, 'death')) S.deaths.push(u);
    }
    /* Death hooks run after the killing blow has been reported, so the events read in order. */
    function flushDeaths(ev) { while (S.deaths.length) { const u = S.deaths.shift(); G(u, 'death')(u, ev); } }
    function heal(src, tgt, amount, ev, sp = 0) {
      const before = tgt.hp;
      if (tgt.side === 'party') amount *= diff().heal;
      tgt.hp = Math.min(tgt.maxHp, tgt.hp + Math.round(amount));
      if (sp) tgt.sp = Math.min(tgt.maxSp, tgt.sp + sp);
      ev.push({ t: 'heal', src: src && src.id, tgt: tgt.id, amount: tgt.hp - before, sp, hp: tgt.hp, maxHp: tgt.maxHp, spNow: tgt.sp });
    }
    /* Buffs stack (data.js buffRules.cap levels, P5-style): another cast adds a level and refreshes the turns. A lasting buff
       (the Hierophant's sermons) stays lasting while it keeps its sign. */
    function buff(tgt, stat, dir, ev, lasting = false, levels = 1) {
      const old = tgt.buffs[stat];
      const v = Math.max(-CAP, Math.min(CAP, old + dir * levels));
      tgt.buffs[stat] = v;
      tgt.buffT[stat] = !v ? 0 : (lasting || (tgt.buffT[stat] >= 90 && Math.sign(old) === Math.sign(v)) ? 99 : BRu.turns);
      ev.push({ t: 'buff', tgt: tgt.id, stat, dir, v, lasting: tgt.buffT[stat] >= 90, turns: tgt.buffT[stat], capped: v === old });
    }
    function dispel(tgts, kind, ev) {
      let n = 0;
      tgts.forEach(t => ['atk', 'def', 'agi'].forEach(s => {
        if ((kind === 'buffs' && t.buffs[s] > 0) || (kind === 'debuffs' && t.buffs[s] < 0)) { t.buffs[s] = 0; t.buffT[s] = 0; n++; }
      }));
      ev.push({ t: 'dispel', kind, tgts: tgts.map(t => t.id), n });
      return n;
    }

    /* ── Using a skill (party or enemy) ───────────────── */
    function targetsFor(src, sk, target, flip = false) {
      const same = ['ally', 'allies', 'dead', 'self'].includes(sk.target) !== flip;
      const pool = sideOf(src, same);
      if (sk.target === 'self') return [src];
      if (sk.target === 'all' || sk.target === 'allies' || sk.target === 'rand') return alive(pool);
      if (sk.target === 'dead') { const t = U(target); return t && t.dead ? [t] : []; }
      let t = U(target);
      if (!t || t.dead || (pool.length && t.side !== pool[0].side)) t = alive(pool)[0];
      return t ? [t] : [];
    }
    /* What a skill costs this unit right now: Kitsune Rush halves HP/SP costs; Double Tap makes Solar's first skill free. */
    function costOf(u, sk) {
      if (!sk.cost || u.side !== 'party') return { sp: 0, hp: 0 };
      let sp = sk.cost.sp || 0, hp = sk.cost.hp || 0;
      if (kitsuneOn(u)) { sp = Math.ceil(sp / 2); hp = hp / 2; }
      if (u.firstFree && !u.usedFree && sk.id !== 'attack') { sp = 0; hp = 0; }
      return { sp, hp };
    }
    function payCost(u, sk) {
      if (u.side !== 'party' || !sk.cost) return;
      const c = costOf(u, sk);
      if (u.firstFree && !u.usedFree && sk.id !== 'attack') u.usedFree = true;
      if (c.sp) u.sp -= c.sp;
      if (c.hp) u.hp = Math.max(1, u.hp - Math.round(u.maxHp * c.hp / 100));
    }
    function canPay(u, sk) {
      if (!sk || !sk.cost) return true;
      const c = costOf(u, sk);
      if (sk.once && S.once.has(u.side + ':' + (sk.id || ''))) return false;
      if (sk.cost.sp) return u.sp >= c.sp;
      if (sk.cost.hp) return u.hp > Math.round(u.maxHp * c.hp / 100);
      return true;
    }
    const usedOnce = (u, id) => S.once.has(u.side + ':' + id);
    function attackSkill(src) {
      return Object.assign({ id: 'attack' }, D.attack, { el: src.weapon || 'strike', power: src.atk || D.attack.power, crit: D.attack.crit, multi: src.whits || null, ail: src.wail || null });
    }
    /* A party member hits back (Counterstrike, Public Veneer): a plain attack on the Shadow that struck them alone. */
    function counterHit(u, foe, ev) {
      if (!u || u.dead || helpless(u) || !foe || foe.dead || u.side === foe.side) return;
      ev.push({ t: 'counter', src: u.id, tgt: foe.id });
      strike(u, foe, attackSkill(u), ev);
    }
    function useSkill(src, skId, target, ev, { flip = false } = {}) {
      const sk = skId === 'attack' ? attackSkill(src) : Object.assign({ id: skId }, skillOf(skId));
      payCost(src, sk);
      if (sk.once) S.once.add(src.side + ':' + skId);
      // Aggro: a Shadow's single-target attack goes to whoever is drawing it (Public Veneer, Provoke).
      let drawn = null;
      if (src.side === 'enemy' && !flip && sk.target === 'one' && ['dmg', 'insta'].includes(sk.type)) {
        const tank = aggro();
        if (tank && tank.id !== target) { drawn = tank; target = tank.id; }
      }
      const tgts = targetsFor(src, sk, target, flip);
      const hp0 = new Map(tgts.map(t => [t.id, t.hp]));
      ev.push({ t: 'use', src: src.id, skill: skId, name: sk.name, el: sk.el, tgts: tgts.map(u => u.id), summon: skId !== 'attack' && src.side === 'party', cost: sk.cost || null, hp: src.hp, sp: src.sp, charmed: flip, fx: sk.fx || null });
      if (drawn) ev.push({ t: 'drawn', src: src.id, tgt: drawn.id });
      let downs = 0;
      let n = sk.multi ? sk.multi[0] + Math.floor(R() * (sk.multi[1] - sk.multi[0] + 1)) : 1;
      if (src.orgia > 0 && sk.type === 'dmg') n *= 2;
      if (sk.partyBuff) [].concat(sk.partyBuff).forEach(st => alive(sideOf(src, true)).forEach(p => buff(p, st, 1, ev)));
      const spread = sk.target === 'all' || sk.target === 'rand';
      const hidden = t => { if (t.hidden && src.side === 'party' && !spread) { ev.push({ t: 'miss', src: src.id, tgt: t.id, hidden: true }); return true; } return false; };
      if (sk.type === 'dmg' && sk.target === 'rand') {
        for (let i = 0; i < n; i++) { const pool = tgts.filter(t => !t.dead); if (!pool.length) break; const t = pick(pool); if (strike(src, t, sk, ev, { spread })) downs++; }
      } else if (sk.type === 'dmg') tgts.forEach(t => { for (let i = 0; i < n && !t.dead; i++) if (strike(src, t, sk, ev, { spread })) downs++; });
      else if (sk.type === 'insta') tgts.forEach(t => { if (!t.dead && hits(src, t, sk)) instaKill(src, t, sk, ev); else if (!t.dead) ev.push({ t: 'miss', src: src.id, tgt: t.id }); });
      else if (sk.type === 'ailment') tgts.forEach(t => {
        if (t.dead || hidden(t)) return;
        if (t.ail || ailImmune(t, sk.ail.id) || !inflict(src, t, sk.ail, ev)) ev.push({ t: 'miss', src: src.id, tgt: t.id, ail: sk.ail.id, immune: ailImmune(t, sk.ail.id), has: !!t.ail });
      });
      else if (sk.type === 'heal') {
        tgts.forEach(t => { heal(src, t, sk.full ? t.maxHp : power(src, sk) * (src.side === 'party' ? (src.healMult || 1) : 1), ev); if (sk.cureAll && t.ail) cure(t, Object.keys(D.ailments), ev, src); });
        if (src.side === 'party' && !flip) gain(src, 'heal', ev);
      }
      else if (sk.type === 'revive') { tgts.forEach(t => { t.dead = false; t.hp = 0; t.endured = false; ev.push({ t: 'revive', tgt: t.id }); heal(src, t, t.maxHp * sk.power / 100, ev); }); if (src.side === 'party') gain(src, 'heal', ev, 1.5); }
      else if (sk.type === 'buff') {
        tgts.forEach(t => { [].concat(sk.stat).forEach(s => buff(t, s, 1, ev, sk.lasting)); if (sk.sp) heal(null, t, 0, ev, sk.sp); });
        if (sk.thGain) tgts.forEach(t => { if (t.side === 'party' && !t.dead && t.th < 100) { t.th = Math.min(100, t.th + sk.thGain); ev.push({ t: 'thGain', tgt: t.id, n: sk.thGain }); if (t.th >= 100) ev.push({ t: 'thReady', tgt: t.id }); } });
        if (src.side === 'party') gain(src, 'buff', ev);
      }
      else if (sk.type === 'debuff') { tgts.forEach(t => { if (hidden(t)) return; [].concat(sk.stat).forEach(s => buff(t, s, -1, ev, sk.lasting)); }); if (src.side === 'party') gain(src, 'buff', ev); }
      else if (sk.type === 'cure') { let any = false; tgts.forEach(t => { if (cure(t, sk.cures, ev, src)) any = true; }); if (!any) ev.push({ t: 'msg', text: 'It had no effect.' }); else if (src.side === 'party') gain(src, 'heal', ev); }
      else if (sk.type === 'dispel') { dispel(tgts, sk.dispel, ev); if (src.side === 'party') gain(src, 'buff', ev); }
      // ── Kat's skills
      else if (sk.type === 'ward') {
        // Protective Suzu: nothing hurts the party until each one's next turn, and every ailment is cured.
        tgts.forEach(t => { if (t.dead) return; t.ward = true; ev.push({ t: 'ward', tgt: t.id }); if (t.ail) cure(t, Object.keys(D.ailments), ev, src); });
        if (src.side === 'party') gain(src, 'buff', ev);
      }
      else if (sk.type === 'taunt') {
        // Public Veneer / Provoke: draw every single-target attack (one taunter per side; the newest takes over).
        tgts.forEach(t => {
          alive(sideOf(t, true)).forEach(p => { if (p !== t && p.taunt > 0) { p.taunt = 0; p.veneer = 0; ev.push({ t: 'tauntEnd', tgt: p.id }); } });
          t.taunt = sk.turns || 3; t.veneer = sk.counter || 0;
          ev.push({ t: 'taunt', tgt: t.id, turns: t.taunt, flank: !!mods.flank && t.side === 'party', veneer: skId === 'public_veneer' });
          if (sk.def) buff(t, 'def', 1, ev, false, sk.def);
        });
        if (src.side === 'party') gain(src, 'buff', ev);
      }
      else if (sk.type === 'kitsune') {
        // Kitsune Rush: for 3 turns the side moves first (the rest of this round's queue too), +50% agility and accuracy, costs halved.
        S.kitsune = sk.turns || 3; S.kitsuneSide = src.side;
        const q = S.queue.map(U).filter(x => x && !x.dead);
        S.queue = q.filter(x => x.side === src.side).concat(q.filter(x => x.side !== src.side)).map(x => x.id);
        ev.push({ t: 'kitsune', src: src.id, turns: S.kitsune, tgts: alive(sideOf(src, true)).map(p => p.id) });
        if (src.side === 'party') gain(src, 'buff', ev);
      }
      else if (sk.type === 'bluff') {
        // Call the Bluff: strip every buff (lasting ones too), then Disorient for a turn.
        tgts.forEach(t => {
          if (t.dead || hidden(t)) return;
          dispel([t], 'buffs', ev);
          if (inflict(src, t, { id: 'disorient', chance: 1 }, ev)) ev.push({ t: 'bluff', tgt: t.id });
          else ev.push({ t: 'miss', src: src.id, tgt: t.id, ail: 'disorient', immune: ailImmune(t, 'disorient'), has: !!t.ail });
        });
        if (src.side === 'party') gain(src, 'buff', ev);
      }
      if (sk.selfBuff && !src.dead) buff(src, sk.selfBuff, 1, ev);
      if (sk.partyHeal) alive(sideOf(src, true)).forEach(p => heal(src, p, p.maxHp * sk.partyHeal, ev));
      if (src.side === 'party' && !flip && skId !== 'attack' && ((member(src.mid) || {}).sig || []).includes(skId)) gain(src, 'sig', ev);
      if (src.side === 'enemy' && src.charged && sk.type === 'dmg' && PHYS.has(sk.el)) src.charged = false;
      // Counters: a party member struck alone by a Shadow may hit back (Counterstrike; Public Veneer's stance).
      if (src.side === 'enemy' && !flip && sk.target === 'one' && sk.type === 'dmg' && !src.dead) tgts.forEach(t => {
        if (t.side !== 'party' || t.dead || !(t.hp < hp0.get(t.id))) return;
        const ch = (t.counter || 0) + (t.taunt > 0 ? (t.veneer || 0) : 0);
        if (ch > 0 && R() < ch) counterHit(t, src, ev);
      });
      src.boost = 1;
      flushDeaths(ev);
      return downs;
    }

    /* ── Theurgy ──────────────────────────────────────── */
    function theurgyDef(u) {
      const m = member(u.mid), base = m && m.theurgy;
      if (!base) return null;
      const per = D.personas[u.personaId] || {}, f = per.theurgy;
      return f ? Object.assign({}, base, { power: base.power && Math.round(base.power * (f.mult || 1)), down: f.down != null ? f.down : base.down, heal: f.heal || base.heal, unveiled: true }) : base;
    }
    const canTheurgy = u => !!(u && u.side === 'party' && !u.dead && u.th >= 100 && theurgyDef(u));
    function theurgy(u, ev) {
      const T = theurgyDef(u);
      u.th = 0;
      ev.push({ t: 'theurgy', src: u.id, mid: u.mid, name: T.name, look: T.look || T.el, img: T.img || null, video: T.video || null, unveiled: !!T.unveiled });
      let downs = 0;
      if (T.type === 'dmg' || T.type === 'orgia') {
        const sk = { id: 'theurgy', name: T.name, el: T.el, power: T.power, target: T.target, multi: T.multi, crit: T.crit || 10, sure: T.sure !== false, ail: T.ail, down: T.down, weakEl: T.weakEl, theurgy: true, type: 'dmg' };
        const pool = alive(foes()), spread = T.target !== 'one';
        const n = sk.multi ? sk.multi[0] + Math.floor(R() * (sk.multi[1] - sk.multi[0] + 1)) : 1;
        if (T.target === 'rand') { for (let i = 0; i < n; i++) { const p = pool.filter(t => !t.dead); if (!p.length) break; if (strike(u, pick(p), sk, ev, { spread })) downs++; } }
        else {
          // Single-target Theurgies go for the best target: a known weakness, else the strongest standing foe.
          const tg = T.target === 'one' ? [pool.filter(f => !f.hidden && !shieldUp(f)).sort((a, b) => ((S.known[b.kind] || {})[T.el] && b.aff[T.el] === 'weak') - ((S.known[a.kind] || {})[T.el] && a.aff[T.el] === 'weak') || b.hp - a.hp)[0] || pool[0]] : pool;
          tg.forEach(t => { for (let i = 0; i < n && !t.dead; i++) if (strike(u, t, sk, ev, { spread })) downs++; });
        }
        if (T.type === 'orgia') { u.orgia = T.turns || 3; buff(u, 'atk', 1, ev); u.buffT.atk = (T.turns || 3) + 1; ev.push({ t: 'orgia', tgt: u.id, turns: u.orgia }); }
      }
      if (T.type === 'support') {
        alive(party()).forEach(p => { heal(u, p, p.maxHp * (T.heal || 1), ev); if (T.cure && p.ail) cure(p, Object.keys(D.ailments), ev, u); });
        (T.buffs || []).forEach(st => alive(party()).forEach(p => buff(p, st, 1, ev)));
      }
      if (T.heal && T.type !== 'support') alive(party()).forEach(p => heal(u, p, p.maxHp * T.heal, ev));
      flushDeaths(ev);
      return downs;
    }

    /* ── Turn flow ────────────────────────────────────── */
    function order() {
      // Kitsune Rush: its side moves first, 50% faster. Quick Draw: Solar leads the first round.
      return alive(S.units).map(u => ({ u, k: u.ag * (1 + 0.25 * u.buffs.agi) * (kitsuneOn(u) ? 1.5 : 1) + R() * 2.5 + (kitsuneOn(u) ? 1000 : 0) + (S.round === 1 && u.quick ? 2000 : 0) }))
        .sort((a, b) => b.k - a.k).map(x => x.u.id);
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
        if (!S.queue.length) {
          S.round++;
          if (S.kitsune > 0 && --S.kitsune === 0) { S.kitsuneSide = null; ev.push({ t: 'kitsuneEnd' }); }
          S.queue = order(); ev.push({ t: 'round', n: S.round });
        }
        const c = U(S.queue.shift());
        if (c && !c.dead) u = c;
      }
      S.cur = u;
      u.turns++;
      u.acted = 0;
      u.guard = false;
      u.wild = false;
      ['atk', 'def', 'agi'].forEach(s => { if (u.buffT[s] > 0 && u.buffT[s] < 90 && --u.buffT[s] === 0) { u.buffs[s] = 0; ev.push({ t: 'buffEnd', tgt: u.id, stat: s }); } });
      if (u.ward) { u.ward = false; ev.push({ t: 'wardEnd', tgt: u.id }); }
      if (u.taunt > 0 && --u.taunt === 0) { u.veneer = 0; ev.push({ t: 'tauntEnd', tgt: u.id }); }
      if (u.side === 'party') {
        if (u.orgia > 0 && --u.orgia === 0) ev.push({ t: 'orgiaEnd', tgt: u.id });
        if (u.spRegen && u.sp < u.maxSp) { u.sp = Math.min(u.maxSp, u.sp + u.spRegen); }
        if (u.hpRegen && u.hp < u.maxHp) heal(null, u, u.maxHp * u.hpRegen, ev);
      }
      let canAct = true;
      const th = G(u, 'turn'); if (th) th(u, ev);
      if (u.down) {
        u.down = false; ev.push({ t: 'standup', tgt: u.id });
        if (u.side === 'enemy') { canAct = false; const h = G(u, 'standup'); if (h) h(u, ev); }
      }
      let forced = null;
      if (u.ail) {
        const a = u.ail, def = D.ailments[a.id];
        if (a.id === 'poison') {
          const amt = Math.max(1, Math.round(u.maxHp * (u.boss ? 0.03 : 0.08)));
          u.hp = Math.max(u.side === 'party' ? 1 : 0, u.hp - amt);
          ev.push({ t: 'ailTick', tgt: u.id, id: 'poison', amount: amt, hp: u.hp, maxHp: u.maxHp });
          if (u.hp <= 0) { kill(u, ev); flushDeaths(ev); ev.push({ t: 'hit', src: u.id, tgt: u.id, el: 'poison', aff: 'normal', amount: 0, hp: 0, maxHp: u.maxHp, killed: true, quiet: true }); check(); return { actor: u.id, canAct: false, events: ev }; }
        }
        if (def.noAct) { if (canAct) ev.push({ t: 'ailSkip', tgt: u.id, id: a.id }); canAct = false; }
        else if (canAct && a.id === 'fear') {
          const r = R();
          if (u.side === 'enemy' && !u.boss && r < 0.12) {
            u.fled = true; kill(u, ev); ev.push({ t: 'flee', tgt: u.id }); check();
            return { actor: u.id, canAct: false, events: ev };
          }
          if (r < 0.45) { ev.push({ t: 'ailSkip', tgt: u.id, id: 'fear' }); canAct = false; }
        } else if (canAct && a.id === 'charm') forced = 'charm';
        else if (canAct && a.id === 'disorient') { if (R() < 0.5) { ev.push({ t: 'ailSkip', tgt: u.id, id: 'disorient' }); canAct = false; } else u.wild = true; }
        // Count the turn. A charmed unit recovers after its charmed action (forcedAct); the rest right away.
        if (--a.t <= 0 && u.ail) {
          if (forced) a.endAfter = true;
          else { u.ail = null; ev.push({ t: 'ailEnd', tgt: u.id, id: a.id }); }
        }
      }
      // Tired members sometimes lose a turn.
      if (canAct && !forced && u.side === 'party' && u.tired && R() < D.progression.tired.skip) { ev.push({ t: 'tiredSkip', tgt: u.id }); canAct = false; }
      return { actor: u.id, canAct, forced, events: ev };
    }
    /* A charmed unit's turn: hit someone on its own side, or heal the other side. */
    function forcedAct() {
      const u = S.cur, ev = [];
      if (!u || u.dead || S.outcome) return ev;
      S.oneMore = false;
      const mates = alive(sideOf(u, true)).filter(x => x !== u), others = alive(sideOf(u, false));
      const healId = u.skills.find(id => skillOf(id).type === 'heal' && skillOf(id).target === 'ally' && canPay(u, skillOf(id)));
      const hurt = others.filter(o => o.hp < o.maxHp).sort((a, b) => a.hp / a.maxHp - b.hp / b.maxHp)[0];
      ev.push({ t: 'charmAct', src: u.id });
      if (healId && hurt && (R() < 0.5 || !mates.length)) useSkill(u, healId, hurt.id, ev, { flip: true });
      else if (mates.length) {
        const dm = u.side === 'enemy' ? dmgMoves(u).filter(id => skillOf(id).target === 'one') : [];
        useSkill(u, dm.length && R() < 0.5 ? pick(dm) : 'attack', pick(mates).id, ev);
      } else ev.push({ t: 'msg', text: `${u.name} is lost in a daze…`, src: u.id });
      if (u.ail && u.ail.endAfter && !u.dead) { u.ail = null; ev.push({ t: 'ailEnd', tgt: u.id, id: 'charm' }); }
      check();
      if (!S.outcome) endTurn(u, ev);
      return ev;
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
          if (alive(foes()).filter(f => !f.unreachable).every(f => f.down)) { S.alloutReady = true; S.oneMore = true; ev.push({ t: 'alloutReady', src: u.id }); }
          else { S.oneMore = true; ev.push({ t: 'onemore', src: u.id }); }
        } else endTurn(u, ev);
      } else if (downs > 0 && !S.extraUsed) {
        S.extraUsed = true; S.oneMore = true; ev.push({ t: 'onemore', src: u.id });
      } else S.oneMore = false;
    }
    function check() {
      // `scenery` foes (story fights: a train that can't be targeted) don't have to fall for the fight to be won.
      if (!alive(foes()).filter(f => !f.scenery).length) S.outcome = 'win';
      else if (leader().dead || !alive(party()).length) S.outcome = 'lose';
      return S.outcome;
    }

    /* Commands available to a party member right now. */
    function canShiftTo(u) {
      const a = U(S.cur && S.cur.id);
      return !!(a && a.side === 'party' && S.oneMore && u && u.side === 'party' && !u.dead && u !== a && !S.chain.has(u.id));
    }
    function useItem(u, id, target, ev) {
      const it = D.items[id];
      S.items[id]--;
      const t = U(target);
      ev.push({ t: 'item', src: u.id, item: id, name: it.name, tgt: t && t.id });
      const amt = (p, v) => (v <= 1 ? p.maxHp * v : v);
      if (it.type === 'heal') {
        if (it.target === 'allies') alive(party()).forEach(p => heal(u, p, amt(p, it.hp), ev));
        else if (t && !t.dead) heal(u, t, amt(t, it.hp), ev);
      } else if (it.type === 'full') alive(party()).forEach(p => heal(u, p, p.maxHp, ev, p.maxSp));
      else if (it.type === 'sp' && t && !t.dead) heal(u, t, 0, ev, it.sp);
      else if (it.type === 'cure' && t && !t.dead) { if (!cure(t, it.cures, ev, u)) ev.push({ t: 'msg', text: 'It had no effect.' }); }
      else if (it.type === 'revive' && t && t.dead) { t.dead = false; t.hp = 0; ev.push({ t: 'revive', tgt: t.id }); heal(u, t, t.maxHp * it.hp, ev); }
      else if (it.type === 'dispel') dispel(alive(it.target === 'foes' ? foes() : party()), it.dispel, ev);
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
        if (sk && sk.once && usedOnce(u, action.skill)) { S.oneMore = wasOneMore; return [{ t: 'msg', text: `${sk.name} can only be used once per battle.` }]; }
        if (!sk || !u.skills.includes(action.skill) || !canPay(u, Object.assign({ id: action.skill }, sk))) { S.oneMore = wasOneMore; return [{ t: 'msg', text: 'Not enough ' + (sk && sk.cost && sk.cost.hp ? 'HP' : 'SP') + '.' }]; }
        afterAction(u, useSkill(u, action.skill, action.target, ev), ev);
      } else if (action.type === 'theurgy') {
        if (!canTheurgy(u)) { S.oneMore = wasOneMore; return [{ t: 'msg', text: 'The Theurgy gauge isn’t full yet.' }]; }
        afterAction(u, theurgy(u, ev), ev);
      } else if (action.type === 'guard') { u.guard = true; ev.push({ t: 'guard', src: u.id }); endTurn(u, ev); }
      else if (action.type === 'item') {
        const it = D.items[action.item];
        if (!it || !(S.items[action.item] > 0) || it.use === 'field') { S.oneMore = wasOneMore; return [{ t: 'msg', text: 'None left.' }]; }
        useItem(u, action.item, action.target, ev);
        endTurn(u, ev);
      } else if (action.type === 'escape') {
        if (S.boss && !S.reaper) { S.oneMore = wasOneMore; return [{ t: 'msg', text: 'There’s no escape from the full moon!' }]; }
        const avg = l => l.reduce((s, x) => s + x.ag, 0) / Math.max(1, l.length);
        const chance = S.reaper ? 34 + (alive(foes()).some(f => f.down) ? 30 : 0) : Math.max(25, Math.min(90, 55 + (avg(alive(party())) - avg(alive(foes()))) * 4 + (alive(foes()).some(f => f.down) ? 20 : 0)));
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
        if (mods.shiftTh && t.th < 100) { t.th = Math.min(100, t.th + mods.shiftTh); ev.push({ t: 'thGain', tgt: t.id, n: mods.shiftTh }); if (t.th >= 100) ev.push({ t: 'thReady', tgt: t.id }); }
        S.cur = t;
        if (t.down) t.down = false;
        ev.push({ t: 'shift', src: u.id, tgt: t.id, boost: mods.shiftMult, sp: mods.shiftSp, spNow: t.sp });
        S.oneMore = false;
        S.shifted = true;
      }
      return ev;
    }
    /* A free action: reveals every affinity of one foe (Fuuka's scan). Pinning down a hidden Hermit takes her whole focus:
       once per round. */
    function analyze(target) {
      const t = U(target), ev = [];
      if (!t || t.side !== 'enemy') return ev;
      if (t.hidden) {
        if (S.scanRound === S.round) { ev.push({ t: 'msg', text: 'Fuuka needs a moment before she can scan again.' }); return ev; }
        S.scanRound = S.round;
        t.hidden = false; t.revealT = 2;
        ev.push({ t: 'found', tgt: t.id });
      }
      const k = S.known[t.kind] || (S.known[t.kind] = {});
      D.affinityOrder.forEach(el => { k[el] = true; });
      ev.push({ t: 'analyze', tgt: t.id, kind: t.kind });
      if (t.gimmick === 'empress') ev.push({ t: 'gate', tgt: t.id, el: t.gate });
      return ev;
    }
    function allOut() {
      const ev = [], u = S.cur;
      const parts = alive(party());
      const hitsOut = [];
      alive(foes()).forEach(f => {
        let d = parts.reduce((s, p) => s + (p.st + p.lvl * 0.5 + 6) * 2.3 * atkM(p.buffs.atk), 0);
        d *= (0.9 + R() * 0.2) * mods.alloutMult * (D.enemies[f.kind].alloutResist || 1) * diff().pdmg;
        d /= 1 + f.en / 40;
        if (shieldUp(f) || f.unreachable) d = 0;
        const amount = Math.round(d);
        f.hp = Math.max(0, f.hp - amount);
        if (f.hp <= 0) kill(f, ev);
        hitsOut.push({ tgt: f.id, amount, hp: f.hp, maxHp: f.maxHp, killed: f.dead });
      });
      foes().forEach(f => { f.down = false; });
      flushDeaths(ev);
      ev.unshift({ t: 'allout', src: u.id, parts: parts.map(p => p.id), hits: hitsOut });
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
    const has = (u, id) => u.skills.includes(id);
    /* Shadows with ailment skills use them now and then on someone who doesn't have one yet. */
    function ailMove(u) {
      const ids = u.skills.filter(id => skillOf(id).type === 'ailment');
      if (!ids.length || R() >= 0.3) return null;
      const id = pick(ids), clean = alive(party()).filter(p => !p.ail);
      if (!clean.length) return null;
      return { skill: id, target: pick(clean).id };
    }
    const strongest = () => alive(party()).filter(p => p.buffs.atk >= 0).sort((a, b) => b.st - a.st)[0];
    const AI = {
      random(u) { const s = pick(dmgMoves(u)); return { skill: s, target: pick(alive(party())).id }; },
      coward(u) {
        if (R() < 0.22) return { skill: 'tremble' };
        return AI.random(u);
      },
      weakest(u) {
        const deb = u.skills.find(id => skillOf(id).type === 'debuff' && skillOf(id).target === 'one');
        const st = strongest();
        if (deb && st && R() < 0.25) return { skill: deb, target: st.id };
        return { skill: pick(dmgMoves(u)), target: lowest(alive(party())).id };
      },
      // Story fights: Wren asks (an ailment on someone, never damage); `still` does nothing; a lantern mends the train or flickers.
      wren_ask(u) {
        const asks = u.skills.filter(id => skillOf(id).type === 'ailment'), clean = alive(party()).filter(p => !p.ail);
        return { skill: pick(asks), target: pick(clean.length ? clean : alive(party())).id };
      },
      still() { return { skill: 'still' }; },
      // A story fight's untouchable scenery (the 12/2 train): mostly passes, sometimes lashes out.
      carriage(u) { const dm = dmgMoves(u); return dm.length && R() < 0.35 ? { skill: pick(dm), target: pick(alive(party())).id } : { skill: 'still' }; },
      lantern(u) {
        const t = alive(foes()).find(f => f.gimmick === 'train');
        if (t && t.hp < t.maxHp * 0.85 && R() < 0.35 && u.skills.includes('e_dia')) return { skill: 'e_dia', target: t.id };
        return { skill: 'still' };
      },
      buffer(u) {
        const b = u.skills.find(id => skillOf(id).type === 'buff');
        const sk = b && skillOf(b);
        const allies = sk ? alive(foes()).filter(f => f.buffs[[].concat(sk.stat)[0]] < 1) : [];
        const boss = allies.find(f => f.boss);
        if (b && allies.length && R() < 0.45) return { skill: b, target: (boss || pick(allies)).id };
        const deb = u.skills.find(id => skillOf(id).type === 'debuff');
        if (deb && R() < 0.2) return { skill: deb, target: (strongest() || pick(alive(party()))).id };
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
        const group = u.skills.find(id => skillOf(id).type === 'heal' && skillOf(id).target === 'allies');
        const single = u.skills.find(id => skillOf(id).type === 'heal' && skillOf(id).target === 'ally');
        if (hurt.length > 1 && group && R() < 0.8) return { skill: group };
        if (hurt.length && (single || group) && R() < 0.75) return single ? { skill: single, target: lowest(hurt).id } : { skill: group };
        const insta = u.skills.find(id => skillOf(id).type === 'insta');
        if (insta && R() < 0.2) return { skill: insta, target: pick(alive(party())).id };
        return dmgMoves(u).length ? AI.random(u) : { skill: 'tremble' };
      },
      priestess(u) {
        if (u.charge) { u.charge = false; return { skill: 'lunar_tide' }; }
        if (!u.summoned && u.hp / u.maxHp <= 0.5) { u.summoned = true; return { skill: 'call_mirrors' }; }
        if (u.turns % 3 === 2) { u.charge = true; return { skill: 'gather' }; }
        const r = R();
        if (r < 0.35) return { skill: 'e_mabufu' };
        if (r < 0.5) { const t = strongest(); if (t) return { skill: 'e_tarunda', target: t.id }; }
        return { skill: 'e_bufula', target: lowest(alive(party())).id };
      },
      empress(u) {
        const clean = alive(party()).filter(p => !p.ail);
        const r = R();
        if (clean.length && r < 0.25) return { skill: 'e_marin_karin', target: pick(clean).id };
        if (clean.length > 1 && r < 0.35) return { skill: 'e_sexy_dance' };
        if (alive(foes()).some(f => f.hp / f.maxHp < 0.45) && r < 0.5) return { skill: 'e_media' };
        if (r < 0.7) return { skill: 'e_mabufula' };
        return { skill: 'e_bufula', target: lowest(alive(party())).id };
      },
      emperor(u) {
        if (u.charged) return { skill: R() < 0.5 ? 'e_herculean' : 'e_heat_wave', target: lowest(alive(party())).id };
        const r = R();
        if (r < 0.14) return { skill: 'power_charge' };
        if (r < 0.26) { const t = strongest(); if (t) return { skill: 'e_rakunda', target: t.id }; }
        if (r < 0.55) return { skill: 'e_heat_wave' };
        return { skill: R() < 0.5 ? 'e_herculean' : 'e_power_slash', target: lowest(alive(party())).id };
      },
      hierophant(u) {
        const k = u.turns % 4;
        if (k === 1 && (u.buffs.atk < 1 || u.buffs.def < 1)) return { skill: 'e_sermon_up' };
        if (k === 3 && alive(party()).some(p => p.buffs.atk > -1 || p.buffs.def > -1)) return { skill: 'e_sermon_down' };
        const r = R();
        if (r < 0.15) return { skill: 'e_hamaon', target: pick(alive(party())).id };
        if (r < 0.45) return { skill: 'e_mazionga' };
        if (r < 0.62) return { skill: 'e_megido' };
        return { skill: 'e_ziodyne', target: pick(alive(party())).id };
      },
      lovers(u) {
        const clean = alive(party()).filter(p => !p.ail && !ailImmune(p, 'charm'));
        const r = R();
        if (u.hp / u.maxHp < 0.35 && !u.healed && r < 0.6) { u.healed = true; return { skill: 'e_mediarama' }; }
        if (clean.length && r < 0.32) return { skill: 'e_marin_karin', target: (clean.find(p => p !== leader()) || clean[0]).id };
        if (clean.length > 1 && r < 0.5) return { skill: 'e_sexy_dance' };
        if (r < 0.75) return { skill: 'e_maragion' };
        return { skill: R() < 0.5 ? 'e_agilao' : 'e_holy_arrow', target: lowest(alive(party())).id };
      },
      chariot(u) {
        if (u.charged) return { skill: 'e_herculean', target: lowest(alive(party())).id };
        const r = R();
        if (r < 0.16) return { skill: 'power_charge' };
        if (r < 0.5) return { skill: 'e_heat_wave' };
        return { skill: R() < 0.5 ? 'e_kill_rush' : 'e_herculean', target: lowest(alive(party())).id };
      },
      justice(u) {
        const c = kindAlive('chariot');
        const r = R();
        if (c && r < 0.3) return { skill: 'judgment' };
        if (c && c.hp / c.maxHp < 0.5 && r < 0.6) return { skill: 'e_diarama', target: c.id };
        if (r < 0.5) return { skill: 'e_hamaon', target: pick(alive(party())).id };
        if (c && c.buffs.atk < 1 && r < 0.62) return { skill: 'e_tarukaja', target: c.id };
        return { skill: 'e_mazionga' };
      },
      hermit(u) {
        const r = R();
        if (r < 0.15) return { skill: 'e_poison_mist' };
        if (r < 0.27) return { skill: 'e_ominous' };
        if (r < 0.6) return { skill: 'e_mazionga' };
        return { skill: R() < 0.5 ? 'e_ziodyne' : 'e_bufudyne', target: lowest(alive(party())).id };
      },
      fortune() { return { skill: 'wheel' }; },
      strength(u) {
        if (u.charged) return { skill: 'e_herculean', target: lowest(alive(party())).id };
        const r = R();
        if (r < 0.15) return { skill: 'power_charge' };
        if (r < 0.25 && u.buffs.atk < 1) return { skill: 'e_tarukaja', target: u.id };
        if (r < 0.55) return { skill: 'e_heat_wave' };
        return { skill: 'e_kill_rush', target: lowest(alive(party())).id };
      },
      hanged(u) {
        if (!alive(foes()).some(f => f.effigy) && u.effT >= 2) return { skill: 'call_effigies' };
        const r = R();
        if (r < 0.15) return { skill: 'e_evil_smile' };
        if (r < 0.4) return { skill: 'e_megidola' };
        if (r < 0.7) return { skill: 'e_mazionga' };
        return { skill: 'e_mabufula' };
      },
      reaper(u) {
        if (u.turns === 1) return { skill: 'chains' }; // its first turn: the chains rattle (a last chance to run)
        if (u.turns % 3 === 0) return { skill: 'e_megidolaon' };
        const r = R();
        if (r < 0.35) return { skill: 'e_megidola' };
        if (r < 0.6) return { skill: pick(['e_maragion', 'e_mazionga']) };
        return { skill: pick(['e_ziodyne', 'e_bufudyne']), target: lowest(alive(party())).id };
      }
    };
    /* Fortune's wheel: outcome weights. */
    const WHEEL = [['bless', 1], ['curse', 1.2], ['frenzy', 1], ['reverse', 0.7], ['fall', 0.8], ['jackpot', 0.8], ['spark', 1.1]];
    function spinWheel(u, ev) {
      const str = kindAlive('strength');
      const opts = WHEEL.filter(([k]) => k !== 'frenzy' || str);
      let r = R() * opts.reduce((s, x) => s + x[1], 0), out = opts[0][0];
      for (const [k, w] of opts) { if ((r -= w) <= 0) { out = k; break; } }
      ev.push({ t: 'wheel', src: u.id, outcome: out });
      if (out === 'bless') alive(foes()).forEach(f => heal(u, f, f.maxHp * 0.12, ev));
      else if (out === 'curse') alive(party()).forEach(p => { if (R() < 0.45) inflict(u, p, { id: pick(['poison', 'distress', 'fear']), chance: 1 }, ev); });
      else if (out === 'frenzy') { buff(str, 'atk', 1, ev); str.empower = Math.min(4, (str.empower || 0) + 2); S.queue.unshift(str.id); ev.push({ t: 'frenzy', tgt: str.id }); }
      else if (out === 'reverse') S.units.filter(x => !x.dead).forEach(x => ['atk', 'def', 'agi'].forEach(s => { if (x.buffs[s]) { x.buffs[s] = -x.buffs[s]; x.buffT[s] = BRu.turns; } }));
      else if (out === 'fall') { u.down = true; ev.push({ t: 'hit', src: u.id, tgt: u.id, el: 'none', aff: 'normal', amount: 0, hp: u.hp, maxHp: u.maxHp, downed: true, self: true }); }
      else if (out === 'jackpot') alive(party()).forEach(p => heal(null, p, p.maxHp * 0.2, ev, 10));
      else if (out === 'spark') return useSkill(u, 'e_mazionga', null, ev);
      return 0;
    }
    function enemyAct() {
      const u = S.cur, ev = [];
      if (!u || u.dead || S.outcome) return ev;
      S.oneMore = false;
      const gimmicky = !!u.gimmick || u.reaper;
      const move = (!gimmicky && ailMove(u)) || (AI[u.ai] || AI.random)(u);
      const sk = skillOf(move.skill);
      if (sk.type === 'special') {
        ev.push({ t: 'use', src: u.id, skill: move.skill, name: sk.name, el: 'none', tgts: [] });
        if (move.skill === 'tremble') ev.push({ t: 'msg', text: u.name + ' is trembling…', src: u.id });
        if (move.skill === 'chains') ev.push({ t: 'msg', text: 'Chains rattle in the dark… Run!', src: u.id });
        if (move.skill === 'gather') ev.push({ t: 'telegraph', src: u.id });
        if (move.skill === 'power_charge') { u.charged = true; ev.push({ t: 'telegraph', src: u.id, charge: true }); }
        if (move.skill === 'call_mirrors') summonAdds(u, ev);
        if (move.skill === 'call_effigies') { u.effT = 0; summonAdds(u, ev); }
        if (move.skill === 'judgment') { const c = kindAlive('chariot'); if (c) { c.empower = Math.min(6, (c.empower || 0) + 1); ev.push({ t: 'empower', tgt: c.id, n: c.empower, judgment: true }); } }
        if (move.skill === 'wheel') { const downs = spinWheel(u, ev); afterAction(u, downs, ev); check(); }
        if (move.skill === 'still') { const line = D.enemies[u.kind].still; if (line) ev.push({ t: 'msg', text: line, src: u.id }); }
        return ev;
      }
      const downs = useSkill(u, move.skill, move.target, ev);
      if (move.skill === 'e_sermon_up') ev.push({ t: 'sermon', src: u.id });
      if (move.skill === 'e_sermon_down') ev.push({ t: 'penance', src: u.id });
      afterAction(u, downs, ev);
      // Some full-moon Shadows act more than once per turn (data: acts).
      const acts = D.enemies[u.kind].acts || 1;
      if (++u.acted < acts && !S.outcome && !u.dead && !S.oneMore && !u.down) S.oneMore = true;
      return ev;
    }
    foes().forEach(f => { const h = G(f, 'init'); if (h) h(f); });

    /* ── Party tactics (P3P) ───────────────────────────
       Returns the action a member would choose on their own. Uses only the affinities the party knows.
       tactic 'rush' is Rush's own brain (battle.js uses it for Direct and Act Freely members while Rush is on): it fires Theurgy
       the moment it's ready, heals before anyone gets low, rebuffs when a buff is missing or about to run out (only when the
       fight will last), strips a foe's buffs, and otherwise goes for known weaknesses. It never spends a turn on something
       that does nothing (a known null, a cure with nothing to cure, a buff already at the cap). */
    function autoAction(u, tactic = 'free') {
      const smart = tactic === 'rush';
      const foesA = alive(foes()).filter(f => !f.unreachable), allies = alive(party()), dead = party().filter(p => p.dead);
      if (!foesA.length) return { type: 'guard' };
      const sk = id => Object.assign({ id }, skillOf(id)), can = id => canPay(u, sk(id));
      const hasT = type => u.skills.filter(id => skillOf(id).type === type && can(id));
      const affOf = (f, el) => (el === 'almighty' ? (f.gimmick === 'empress' ? 'null' : 'normal') : (S.known[f.kind] || {})[el] ? (f.aff[el] || 'normal') : 'unknown');
      const MULT = { weak: 1.6, normal: 1, unknown: 0.95, resist: 0.45, null: 0, repel: -1, drain: -1 };
      const conserve = tactic === 'conserve';
      const spOk = id => !sk(id).cost || !sk(id).cost.sp || !conserve;
      const hpOk = id => !sk(id).cost || !sk(id).cost.hp || u.hp / u.maxHp > (tactic === 'assault' ? 0.3 : 0.45);
      const bossUp = foesA.some(f => f.boss);
      // Will this fight last? Rough: the foes' HP against what the party deals in a round.
      const roundDmg = allies.reduce((s, p) => s + rawDamageEst(p, foesA[0], attackSkill(p)) * 1.6, 0);
      const longFight = bossUp || foesA.reduce((s, f) => s + f.hp, 0) > roundDmg * 2.2;
      // Theurgy when it's ready (Rush: always; a support Theurgy waits for someone to need it).
      if (canTheurgy(u) && tactic !== 'conserve') {
        const T = theurgyDef(u);
        const needHeal = allies.some(p => p.hp / p.maxHp < (smart ? 0.75 : 0.5)) || dead.length || (smart && allies.some(p => p.ail));
        if (T.type === 'support' ? needHeal : (smart || bossUp || foesA.length >= 2 || tactic === 'assault')) return { type: 'theurgy' };
      }
      // Heal first, at a threshold that depends on the tactic.
      const healAt = { free: 0.45, heal: 0.7, assault: 0.25, conserve: 0.3, rush: 0.6 }[tactic] || 0.45;
      const hurt = allies.filter(p => p.hp / p.maxHp < healAt).sort((a, b) => a.hp / a.maxHp - b.hp / b.maxHp);
      if (tactic !== 'conserve' || hurt.some(p => p.hp / p.maxHp < 0.25)) {
        const revive = hasT('revive').sort((a, b) => sk(b).power - sk(a).power)[0];
        if (revive && dead.length && ['heal', 'free', 'rush'].includes(tactic)) return { type: 'skill', skill: revive, target: dead[0].id };
        const group = hasT('heal').filter(id => sk(id).target === 'allies').sort((a, b) => (sk(a).cost?.sp || 0) - (sk(b).cost?.sp || 0))[0];
        const single = hasT('heal').slice().sort((a, b) => sk(b).power - sk(a).power).find(id => sk(id).target === 'ally');
        if (hurt.length > 1 && group) return { type: 'skill', skill: group, target: 'all' };
        if (hurt.length && single) return { type: 'skill', skill: single, target: hurt[0].id };
        if (hurt.length && group) return { type: 'skill', skill: group, target: 'all' };
      }
      // Cure Charm / Fear on allies, and clear lasting curses or blessings.
      if (['heal', 'free', 'rush'].includes(tactic)) {
        const sick = allies.filter(p => p.ail && ['charm', 'fear', 'distress', 'freeze'].includes(p.ail.id));
        const cureG = hasT('cure').find(id => sk(id).target === 'allies' && sk(id).cures.includes('charm'));
        const cureS = hasT('cure').find(id => sk(id).target === 'ally' && sk(id).cures.includes('charm'));
        if (sick.length > 1 && cureG) return { type: 'skill', skill: cureG, target: 'all' };
        if (sick.length && cureS) return { type: 'skill', skill: cureS, target: sick[0].id };
        const buffed = foesA.filter(f => !f.hidden && ['atk', 'def', 'agi'].some(s => f.buffs[s] > 0 && (f.buffT[s] > 1 || smart)));
        const bluff = hasT('bluff')[0];
        if (bluff && buffed.length) return { type: 'skill', skill: bluff, target: buffed.sort((a, b) => (b.boss - a.boss) || b.hp - a.hp)[0].id };
        const dek = hasT('dispel').find(id => sk(id).dispel === 'buffs');
        if (dek && foesA.some(f => ['atk', 'def'].some(s => f.buffs[s] > 0 && (f.buffT[s] > 3 || (smart && f.buffs[s] > 0))))) return { type: 'skill', skill: dek, target: 'all' };
        const dku = hasT('dispel').find(id => sk(id).dispel === 'debuffs');
        if (dku && allies.filter(p => ['atk', 'def'].some(s => p.buffs[s] < 0)).length >= (smart ? 1 : 2)) return { type: 'skill', skill: dku, target: 'all' };
      }
      // Rush: keep the party's buffs up (missing or about to run out) and the big foe's guard down, when the fight will last.
      if (smart && longFight) {
        const need = (p, st) => p.buffs[st] <= 0 || (p.buffs[st] < CAP && p.buffT[st] <= 1);
        for (const id of hasT('buff')) {
          const s = sk(id), stats = [].concat(s.stat);
          if (s.target === 'allies') { if (allies.filter(p => stats.some(st => need(p, st))).length >= Math.min(2, allies.length)) return { type: 'skill', skill: id, target: 'all' }; }
          else if (s.target === 'ally') { const p = allies.filter(x => stats.some(st => need(x, st))).sort((a, b) => b.st - a.st)[0]; if (p) return { type: 'skill', skill: id, target: p.id }; }
        }
        for (const id of hasT('debuff')) {
          const s = sk(id), stats = [].concat(s.stat);
          const f = foesA.filter(x => !x.hidden && stats.some(st => x.buffs[st] >= 0 || (x.buffs[st] > -CAP && x.buffT[st] <= 1))).sort((a, b) => (b.boss - a.boss) || b.hp - a.hp)[0];
          if (f && (bossUp || s.target === 'all')) return { type: 'skill', skill: id, target: s.target === 'all' ? 'all' : f.id };
        }
      }
      // Support: buffs and debuffs.
      if (tactic === 'heal' || (tactic === 'free' && bossUp && R() < 0.35)) {
        const buffId = hasT('buff').find(id => spOk(id));
        if (buffId) {
          const st = [].concat(sk(buffId).stat)[0];
          const pool = sk(buffId).target === 'allies' ? (allies.some(p => p.buffs[st] < 1) ? ['all'] : []) : allies.filter(p => p.buffs[st] < 1).sort((a, b) => b.st - a.st).map(p => p.id);
          if (pool.length) return { type: 'skill', skill: buffId, target: pool[0] };
        }
        const deb = hasT('debuff').find(id => spOk(id));
        const strong = deb && foesA.filter(f => !f.hidden && [].concat(sk(deb).stat).some(s => f.buffs[s] > -1)).sort((a, b) => (b.boss - a.boss) || b.st - a.st)[0];
        if (deb && strong && (bossUp || tactic === 'heal')) return { type: 'skill', skill: deb, target: sk(deb).target === 'all' ? 'all' : strong.id };
      }
      // Charm a healthy, dangerous foe now and then.
      const ailId = hasT('ailment').find(id => spOk(id));
      if (ailId && (tactic === 'free' || tactic === 'heal') && R() < 0.3) {
        const t = foesA.filter(f => !f.ail && !f.hidden && !ailImmune(f, sk(ailId).ail.id) && f.hp / f.maxHp > 0.5).sort((a, b) => b.hp - a.hp)[0];
        if (t) return { type: 'skill', skill: ailId, target: t.id };
      }
      // Damage: score every option against every foe.
      let best = null;
      const consider = (score, action) => { if (!best || score > best.score) best = { score, action }; };
      const atk = attackSkill(u);
      const opts = [{ id: 'attack', s: atk }].concat(hasT('dmg').concat(hasT('insta')).filter(id => spOk(id) && hpOk(id)).map(id => ({ id, s: sk(id) })));
      const shielded = f => shieldUp(f);
      opts.forEach(({ id, s }) => {
        const cost = id === 'attack' ? 0 : costOf(u, s).sp;
        const costPen = tactic === 'assault' ? 0 : cost * (tactic === 'heal' ? 3 : smart ? (longFight ? 0.8 : 1.6) : 1.2);
        const n = (s.multi ? (s.multi[0] + s.multi[1]) / 2 : 1) * (u.orgia > 0 ? 2 : 1);
        const est = f => rawDamageEst(u, f, s) * n;
        if (s.type === 'insta') {
          if (tactic === 'heal') return;
          let sc = 0, any = false;
          (s.target === 'all' ? foesA : foesA).forEach(f => {
            const a = affOf(f, s.el);
            if (f.boss || f.hidden || ['null', 'repel', 'drain', 'resist'].includes(a)) return;
            const ch = (s.chance + (a === 'weak' ? s.chance + 15 : 0) + (s.el === 'dark' && f.ail && f.ail.id === 'fear' ? 55 : 0)) / 100;
            const v = Math.min(0.95, ch) * f.hp * 0.9 + (a === 'weak' ? 25 : 0);
            if (s.target === 'all') { sc += v; any = true; } else consider(v - costPen, { type: 'skill', skill: id, target: f.id });
          });
          if (s.target === 'all' && any) consider(sc - costPen, { type: 'skill', skill: id, target: 'all' });
          return;
        }
        if (s.target === 'all' || s.target === 'rand') {
          let sc = 0, useful = false;
          foesA.forEach(f => { const m = shielded(f) ? 0 : MULT[affOf(f, s.el)]; if (m > 0) useful = true; sc += Math.min(f.hp, est(f) * Math.max(0, m) * (f.hidden ? 0.5 : 1)) * (s.target === 'rand' ? 1 / foesA.length : 1) + (m < 0 ? -80 : 0) + (f.hidden ? 40 : 0); });
          if (smart && !useful) return;
          consider(sc - costPen, { type: 'skill', skill: id, target: 'all' });
          return;
        }
        foesA.forEach(f => {
          if (f.hidden || shielded(f)) return;
          const a = affOf(f, s.el), m = MULT[a];
          if (m <= 0 && a !== 'unknown') return;
          const frozen = f.ail && f.ail.id === 'freeze' && PHYS.has(s.el);
          let sc = Math.min(f.hp + 10, est(f) * m * (frozen ? 1.6 : 1));
          if ((a === 'weak' || frozen) && !f.down) sc += smart ? 70 : 45; // a Down means One More (Rush leans on it hardest)
          if (est(f) * m >= f.hp) sc += 30;                        // finish it
          if (f.ail && f.ail.id === 'shock' && PHYS.has(s.el)) sc -= 25;
          if (f.kind === 'justice' || f.effigy) sc += 20;          // gimmick priorities: Justice first, effigies before the Hanged Man
          consider(sc - costPen, id === 'attack' ? { type: 'attack', target: f.id } : { type: 'skill', skill: id, target: f.id });
        });
      });
      const firstOpen = foesA.find(f => !f.hidden && !shielded(f));
      return best ? best.action : (firstOpen ? { type: 'attack', target: firstOpen.id } : { type: 'guard' });
    }
    function rawDamageEst(src, tgt, sk) {
      let d = power(src, sk) * atkM(src.buffs.atk) * defM(tgt.buffs.def) * ((src.elBoost || {})[sk.el] || 1) / (1 + (tgt.en + (tgt.def || 0) / 4) / 20);
      return d * (src.boost || 1);
    }

    return {
      S, U, party, foes, alive, leader, act, openBuff, autoAction, forcedAct, helpless, analyze, allOut, declineAllOut, enemyAct, nextTurn, upcoming, canPay, canShiftTo,
      canTheurgy, theurgyDef, shieldUp, outcome: () => S.outcome || check(), skillOf, attackSkill, known: kind => S.known[kind] || {},
      costOf, usedOnce, aggro, flanking, kitsuneOn, atkM, defM
    };
  }

  /* Rewards for a won battle: EXP, yen, material drops. mult: { exp, yen } for strong nodes. */
  function rewards(B, rand = Math.random, mult = {}) {
    const D = DATA(), P = D.progression;
    const beaten = B.foes().filter(f => f.dead && !f.fled);
    const drops = {};
    beaten.forEach(f => {
      const d = D.enemies[f.kind];
      if (d.drop && rand() < (d.dropChance != null ? d.dropChance : P.dropChance)) drops[d.drop] = (drops[d.drop] || 0) + 1;
    });
    return {
      exp: Math.round(beaten.reduce((s, f) => s + f.exp, 0) * (mult.exp || 1)),
      yen: Math.round(beaten.reduce((s, f) => s + f.yen, 0) * (mult.yen || 1) * (0.9 + rand() * 0.2)),
      drops
    };
  }

  return { create, rng, PHYS, MAGIC, treeFx, mastered, formUnlocked, formsList, personaId, evolutionsDue, lvlOf, gearOf, skillsFor, kitFor, statsFor, buildUnit, simParty, enemyBase, rewards,
    rootOf, tierOf, learnInto, treeNodes, treeNode, treeOwned, treeState, treeWhy, treeBuy, treeSpent, treeRespec, fragSet,
    ptreeOf, ptreeNodes, ptreeState, ptreeBuy, ptreeRespec, ptreeFx, ptreeEarned, ptreeSpent, ptreePts, linkRank, forgetSkill, unforget };
})();
