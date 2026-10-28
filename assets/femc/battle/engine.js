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

  /* ── Passives (Haenim's sun and the party trees share them; 2026-10-25). Each key adds up across owned nodes, then is capped
     so no build can loop or one-shot: see the balance note in FEMC-REVAMP-LORE.md. buildUnit copies them onto the battle unit.
       counter (chance to hit back), spRegen (SP a turn), hpRegen (share of max HP a turn), critUp (her own crit %), evade,
       haste (turn order), firstCut (the first skill on each of her turns costs that much less), weakUp / ailDmg / lowHpUp /
       physUp / magicUp / bossUp / downUp (damage), ailUp / freezeUp (ailment chance), ailTurns (ailments last longer, not Bind),
       followUp (chance of a free weapon strike after a single-target hit), thStart (Theurgy at the start), buffTurns /
       debuffTurns, weakSp (SP back on a weakness, once a skill), critAdd (crit damage), critIf (crit % on a Down or ailing foe),
       guardHeal (HP share and 4 SP when guarding), corona (the party takes that much less while the holder stands; the highest
       counts), momentum (SP on each One More); flags quick, firstFree, endure, guardianBell (the first ally who would fall
       stays at 1 HP, once a battle); lists openBuff (self at the start), partyOpen (the party at the start), nullAil, resist;
       boost { el: mult }. */
  const PASSIVE_CAP = { counter: 0.5, spRegen: 8, hpRegen: 0.08, critUp: 30, evade: 30, haste: 0.3, firstCut: 0.4, weakUp: 0.4, ailDmg: 0.4, lowHpUp: 0.4,
    physUp: 0.4, magicUp: 0.4, bossUp: 0.3, downUp: 0.3, ailUp: 0.3, freezeUp: 0.3, ailTurns: 1, followUp: 0.4, thStart: 30, buffTurns: 1, debuffTurns: 1,
    weakSp: 5, critAdd: 0.5, critIf: 25, guardHeal: 0.1, corona: 0.15, momentum: 5 };
  const PASSIVE_FLAGS = ['quick', 'firstFree', 'endure', 'guardianBell'];
  const PASSIVE_LISTS = ['openBuff', 'partyOpen', 'nullAil', 'resist'];
  function passives() {
    const p = { boost: {} };
    Object.keys(PASSIVE_CAP).forEach(k => { p[k] = 0; });
    PASSIVE_FLAGS.forEach(k => { p[k] = false; });
    PASSIVE_LISTS.forEach(k => { p[k] = []; });
    return p;
  }
  function addPassives(p, e) {
    Object.keys(PASSIVE_CAP).forEach(k => { if (typeof e[k] === 'number') p[k] += e[k]; });
    PASSIVE_FLAGS.forEach(k => { if (e[k]) p[k] = true; });
    PASSIVE_LISTS.forEach(k => { if (e[k] && Array.isArray(e[k])) e[k].forEach(x => { if (!p[k].includes(x)) p[k].push(x); }); else if (k === 'resist' && typeof e[k] === 'string' && !p[k].includes(e[k])) p[k].push(e[k]); });
    Object.entries(e.boost || {}).forEach(([el, m]) => { p.boost[el] = (p.boost[el] || 1) * m; });
    return p;
  }
  function capPassives(p) { Object.entries(PASSIVE_CAP).forEach(([k, c]) => { p[k] = Math.min(c, p[k]); }); return p; }

  /* Haenim's sun */
  let nodeCache = null;
  const treeNodes = () => nodeCache || (nodeCache = DATA().tree.flatMap(b => b.nodes.map(n => Object.assign({ branch: b.id }, n))).concat(DATA().treeCenter ? [Object.assign({ branch: 'center' }, DATA().treeCenter)] : []));
  const treeNode = id => treeNodes().find(n => n.id === id) || null;
  function treeFx(nodes = []) {
    const fx = { st: 0, ma: 0, en: 0, ag: 0, lu: 0, hp: 0, sp: 0, mods: {}, learn: [], healMult: 1, openBuff: null, autoAnalyze: false, unit: passives() };
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
      if (typeof e.openBuff === 'string') fx.openBuff = e.openBuff; // the party's opening buff (Opening Statement)
      addPassives(fx.unit, Object.assign({}, e, { openBuff: Array.isArray(e.openBuff) ? e.openBuff : null }));
    });
    capPassives(fx.unit);
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
  /* Respec: every bought node comes back as points, except the keystones that awakened a form (forms are permanent, so they stay). */
  const keeps = n => !!(n && n.keystone && n.form);
  const treeRefundable = save => (save.nodes || []).filter(id => { const n = treeNode(id); return n && !keeps(n); });
  const treeSpent = save => treeRefundable(save).reduce((s, id) => s + treeNode(id).cost, 0);
  function treeRespec(save) {
    const back = treeSpent(save);
    save.pts = (save.pts || 0) + back;
    save.nodes = (save.nodes || []).filter(id => keeps(treeNode(id)));
    return back;
  }

  /* Party trees */
  const ptreeOf = mid => (DATA().ptrees || {})[mid] || null;
  const ptreeNodes = mid => { const t = ptreeOf(mid), C = DATA().ptreeChoice || []; return t ? t.tiers.flatMap((tier, k) => tier.map(n => Object.assign({ tier: k, choice: !!C[k] }, n))) : []; };
  const linkRank = (save, mid) => +((save.ranks || {})[mid]) || 0;
  const ptreeOwn = (save, mid) => ((save.ptree || {})[mid]) || [];
  const ptreeEarned = (save, mid) => DATA().progression.partyPts(lvlOf(save, mid));
  const ptreeSpent = (save, mid) => ptreeNodes(mid).filter(n => ptreeOwn(save, mid).includes(n.id)).reduce((s, n) => s + n.cost, 0);
  const ptreePts = (save, mid) => ptreeEarned(save, mid) - ptreeSpent(save, mid);
  /* own | avail | rank (the link isn't high enough) | lock (buy something in the tier before, or any higher one) | taken (the other choice in a choice tier) */
  function ptreeState(save, mid, id, rank = linkRank(save, mid)) {
    const n = ptreeNodes(mid).find(x => x.id === id);
    if (!n) return 'lock';
    const own = ptreeOwn(save, mid);
    if (own.includes(id)) return 'own';
    if (rank < DATA().ptreeRanks[n.tier]) return 'rank';
    if (n.choice && ptreeNodes(mid).some(x => x.tier === n.tier && x.id !== id && own.includes(x.id))) return 'taken';
    if (n.tier > 0 && !ptreeNodes(mid).some(x => x.tier >= n.tier - 1 && x.id !== id && own.includes(x.id))) return 'lock';
    return 'avail';
  }
  function ptreeBuy(save, mid, id, rank = linkRank(save, mid)) {
    const n = ptreeNodes(mid).find(x => x.id === id);
    const st = ptreeState(save, mid, id, rank);
    if (!n || st !== 'avail') return { ok: false, why: st === 'rank' ? `Opens at link rank ${DATA().ptreeRanks[n.tier]}.` : st === 'taken' ? 'The other choice is taken.' : 'Buy something in the tier before it first.' };
    if (ptreePts(save, mid) < n.cost) return { ok: false, why: `Needs ${n.cost} points (they come from levels).` };
    save.ptree = save.ptree || {};
    (save.ptree[mid] || (save.ptree[mid] = [])).push(id);
    const learned = n.fx && n.fx.learn ? [n.fx.learn] : [];
    learned.forEach(s => unforget(save, mid, s));
    return { ok: true, learned, cost: n.cost };
  }
  function ptreeRespec(save, mid) { const back = ptreeSpent(save, mid); if (save.ptree) save.ptree[mid] = []; return back; }
  function ptreeFx(save, mid) {
    const fx = Object.assign(passives(), { st: 0, ma: 0, en: 0, ag: 0, lu: 0, hp: 0, sp: 0, learn: [], crit: 0, acc: 0, healMult: 1, aff: {} });
    const own = ptreeOwn(save, mid);
    ptreeNodes(mid).forEach(n => {
      if (!own.includes(n.id)) return;
      const e = n.fx || {};
      ['st', 'ma', 'en', 'ag', 'lu', 'hp', 'sp', 'crit', 'acc'].forEach(k => { if (e[k]) fx[k] += e[k]; });
      if (e.learn) fx.learn.push(e.learn);
      if (e.healMult) fx.healMult *= e.healMult;
      Object.assign(fx.aff, e.aff || {});
      addPassives(fx, e);
    });
    return capPassives(fx);
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
    const ok = (id, slot) => { const g = id && D.gear[id]; return g && g.slot === slot && (slot !== 'weapon' || (g.wtype === m.wtype && (!g.owner || g.owner === mid))) ? g : null; };
    const wid = ok(eq.weapon, 'weapon') ? eq.weapon : D.startGear[mid].weapon;
    return { weapon: D.gear[wid], armor: ok(eq.armor, 'armor') || D.gear.armor0, acc: ok(eq.acc, 'acc'), ids: eq, wid };
  }
  /* The building systems (build.js): cards, the weapon's bonus and refine, Persona boosts. null without build.js. */
  const BLD = () => window.FemcBuild || null;
  const bonusOf = (save, mid) => (BLD() ? BLD().unitBonus(save, mid, gearOf(save, mid).wid) : null);
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
    // Skill cards taught (Shuffle Time's Magician), and the skills Solar keeps from MAX links (build.js perks).
    (((save.taught || {})[mid]) || []).forEach(id => learnInto(list, id));
    if (mid === 'solar' && BLD()) BLD().bondSkills(save).forEach(id => learnInto(list, id));
    return [...new Set(list)];
  }
  /* The eight slots: skills in the order they were learned, minus forgotten ones. slots: what the Persona uses; pending: learned
     but waiting for a "forget which?" choice; sig: a form's signature (its own slot). Keeps save.order up to date. */
  function kitFor(mid, save, lvl = lvlOf(save, mid), fx = treeFx(save.nodes)) {
    const D = DATA(), pool = skillsFor(mid, save, lvl, fx);
    if (mid === 'solar') return solarKit(save, pool);
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
  /* ── Solar's skill list (2026-10-25): she keeps every skill she learns and picks which eight sit in her slots, freely, outside
     battle. Save: equip.solar (chain roots in slot order; a root she no longer knows, after a respec, keeps its place for when
     she learns it again but takes no slot), seen.solar (roots she has learned: a new one goes into a free slot by itself, else
     into the list), fresh.solar (new ones not looked at yet: the list's NEW marks). The first time (a new or an older save) her
     slots are her old kit, in its order, minus what she'd forgotten; forgotten skills wait in the list (save.js clears forgot.solar). */
  function solarKit(save, pool) {
    const D = DATA(), N = D.skillSlots, roots = pool.map(rootOf);
    save.equip = save.equip && typeof save.equip === 'object' ? save.equip : {};
    save.seen = save.seen && typeof save.seen === 'object' ? save.seen : {};
    save.fresh = save.fresh && typeof save.fresh === 'object' ? save.fresh : {};
    const seen = Array.isArray(save.seen.solar) ? save.seen.solar : (save.seen.solar = []);
    const fresh = Array.isArray(save.fresh.solar) ? save.fresh.solar : (save.fresh.solar = []);
    if (!Array.isArray(save.equip.solar)) {
      const forgot = new Set(((save.forgot || {}).solar) || []);
      const ord = (((save.order || {}).solar) || []).filter(r => roots.includes(r) && !forgot.has(r));
      roots.forEach(r => { if (!ord.includes(r) && !forgot.has(r)) ord.push(r); });
      save.equip.solar = ord.slice(0, N);
      roots.forEach(r => { if (!seen.includes(r)) seen.push(r); });
    }
    let eq = [...new Set(save.equip.solar.filter(r => typeof r === 'string'))];
    const act = eq.filter(r => roots.includes(r));
    roots.forEach(r => {
      if (seen.includes(r)) return;
      seen.push(r); if (!fresh.includes(r)) fresh.push(r);
      if (act.length < N) { act.push(r); eq.push(r); }
    });
    if (act.length > N) { const drop = act.splice(N); eq = eq.filter(r => !drop.includes(r)); }
    save.equip.solar = eq;
    save.fresh.solar = fresh.filter(r => roots.includes(r));
    const per = D.personas[personaId('solar', save)] || {};
    const of = r => pool.find(id => rootOf(id) === r);
    return { slots: act.map(of), pending: [], sig: per.sig || null, pool, library: pool.slice(), fresh: save.fresh.solar.map(of) };
  }
  /* Put a skill Solar knows into slot i (0-7): it swaps with whatever is there; a skill already equipped moves; past the last
     filled slot it just joins the end. Returns { ok, why }. */
  function equipSkill(save, id, i = null) {
    const kit = kitFor('solar', save), N = DATA().skillSlots, r = rootOf(id);
    if (!kit.pool.some(x => rootOf(x) === r)) return { ok: false, why: 'Solar doesn’t know that skill.' };
    const act = kit.slots.map(rootOf), rest = save.equip.solar.filter(x => !act.includes(x));
    const from = act.indexOf(r);
    if (i == null || i >= act.length) {
      if (from >= 0) return { ok: true };
      if (act.length >= N) return { ok: false, why: 'Every slot is full: pick one to swap.' };
      act.push(r);
    } else if (from >= 0) { [act[from], act[i]] = [act[i], act[from]]; }
    else act[i] = r;
    save.equip.solar = act.concat(rest.filter(x => x !== r));
    seenSkill(save, id);
    return { ok: true };
  }
  function unequipSkill(save, id) {
    kitFor('solar', save);
    const r = rootOf(id);
    save.equip.solar = save.equip.solar.filter(x => x !== r);
    return { ok: true };
  }
  /* The list's NEW mark goes once she's looked at it. */
  function seenSkill(save, id) { if (save.fresh && Array.isArray(save.fresh.solar)) save.fresh.solar = save.fresh.solar.filter(r => r !== rootOf(id)); }
  function statsFor(mid, save, lvl = lvlOf(save, mid), fx = treeFx(save.nodes), opts = {}) {
    const D = DATA(), m = member(mid), L = lvl - D.progression.startLevel, s = {};
    Object.keys(m.base).forEach(k => { s[k] = Math.round(m.base[k] + m.growth[k] * L); });
    const add = src => ['st', 'ma', 'en', 'ag', 'lu', 'hp', 'sp'].forEach(k => { if (src[k]) s[k] = (s[k] || 0) + src[k]; });
    if (mid === 'solar') add(fx); else add(ptreeFx(save, mid));
    const per = D.personas[personaId(mid, save)];
    [per.bonus, per.lean].forEach(b => b && Object.keys(b).forEach(k => { s[k] = (s[k] || 0) + b[k]; }));
    if (!opts.noGear) {
      const g = gearOf(save, mid); [g.weapon, g.armor, g.acc].forEach(x => x && x.stats && Object.keys(x.stats).forEach(k => { s[k] = (s[k] || 0) + x.stats[k]; }));
      // Cards (flat, then percent), Persona boosts.
      const bx = opts.bx || bonusOf(save, mid);
      if (bx) {
        Object.entries(bx.flat).forEach(([k, v]) => { s[k] = (s[k] || 0) + v; });
        Object.entries(bx.pct).forEach(([k, v]) => { if (s[k] != null) s[k] = Math.round(s[k] * (1 + v / 100)); });
      }
    }
    if (opts.tired) ['st', 'ma', 'en', 'ag'].forEach(k => { s[k] = Math.round(s[k] * D.progression.tired.stat); });
    return s;
  }
  /* The battle unit for a member. carry: { hp, sp, th } from the last fight; tired: true if fatigued. */
  function buildUnit(mid, save, { carry = null, tired = false, fx = treeFx(save.nodes) } = {}) {
    const D = DATA(), m = member(mid), L = lvlOf(save, mid), bx = bonusOf(save, mid), s = statsFor(mid, save, L, fx, { tired, bx }), pid = personaId(mid, save), per = D.personas[pid], g = gearOf(save, mid);
    const aff = Object.assign({}, per.aff);
    [g.armor, g.acc].forEach(x => x && x.aff && Object.entries(x.aff).forEach(([el, a]) => { if (!['null', 'repel', 'drain'].includes(aff[el])) aff[el] = a; }));
    // Tree passives: Solar's from Haenim's tree, everyone else's from their own.
    // Solar's Echo (echoes.js): its passive joins the sun's before the caps (a copy, so the shared fx stays the sun's alone).
    const ech = mid === 'solar' && window.FemcEchoes ? window.FemcEchoes.layerOf(save) : null;
    const sunPv = mid === 'solar' ? (ech ? capPassives(addPassives(JSON.parse(JSON.stringify(fx.unit)), ech.passive)) : fx.unit) : null;
    const pf = mid === 'solar' ? null : ptreeFx(save, mid), hu = sunPv, pv = hu || pf; // pv: the passives (sun or tree)
    const resist = el => { if (!['null', 'repel', 'drain'].includes(aff[el])) aff[el] = 'resist'; };
    pv.resist.forEach(resist);
    if (bx && bx.resist) bx.resist.forEach(resist); // card sets' resists (build.js)
    if (pf) Object.entries(pf.aff).forEach(([el, a]) => (a === 'resist' ? resist(el) : (aff[el] = a)));
    // The Echo's resists and weaknesses only land where Haenim has no affinity at all (never past a resist).
    const echoAff = ech ? window.FemcEchoes.layerAff(aff, ech.aff) : [];
    const nullAil = [...new Set([].concat(...[g.weapon, g.armor, g.acc].map(x => (x && x.nullAil) || []), bx ? bx.nullAil : [], pv.nullAil))];
    const w = g.weapon, kit = kitFor(mid, save, L, fx);
    const b = bx || (BLD() ? BLD().emptyBonus() : null);
    const elBoost = Object.assign({}, pv.boost);
    if (b) Object.entries(b.el).forEach(([el, v]) => { elBoost[el] = (elBoost[el] || 1) * (1 + v / 100); });
    const unit = {
      mid, name: m.name, persona: per.name, personaId: pid, lvl: L, maxHp: s.hp, maxSp: s.sp, acc: (m.acc || 0) + (w.acc || 0) + (pf ? pf.acc : 0),
      hp: carry ? Math.max(1, Math.min(carry.hp, s.hp)) : s.hp, sp: carry ? Math.min(carry.sp, s.sp) : s.sp, th: carry && carry.th != null ? carry.th : ((save.th || {})[mid] || 0),
      st: s.st, ma: s.ma, en: s.en, ag: s.ag, lu: s.lu, aff, weapon: w.el || m.weapon, atk: w.atk, whits: w.hits || null, wail: w.ail || null,
      critBonus: (w.crit || 0) + ((g.acc && g.acc.crit) || 0) + ((g.armor && g.armor.crit) || 0) + (pf ? pf.crit : 0) + pv.critUp, def: (g.armor && g.armor.def) || 0,
      nullAil, spRegen: ((g.acc && g.acc.spRegen) || 0) + pv.spRegen, hpRegen: ((g.acc && g.acc.hpRegen) || 0) + pv.hpRegen, thMult: (g.acc && g.acc.thMult) || 1, tired: !!tired,
      skills: kit.slots.concat(kit.sig && !kit.slots.includes(kit.sig) ? [kit.sig] : []).concat(ech ? ech.skills.filter(s => !kit.slots.includes(s) && s !== kit.sig) : []), pending: kit.pending.slice(),
      echo: ech ? { id: ech.id, name: ech.name, u: ech.inst.u, lvl: ech.inst.lvl, skills: ech.skills.filter(s => !kit.slots.includes(s) && s !== kit.sig), aff: echoAff } : null,
      healMult: mid === 'solar' ? fx.healMult : pf.healMult,
      counter: pv.counter, evade: pv.evade, endure: pv.endure, quick: pv.quick, firstFree: pv.firstFree, elBoost
    };
    // The building systems' bonus (build.js unitBonus): cards, the weapon's own bonus and refine.
    if (b) {
      if (BLD()) unit.atk = BLD().weaponAtk(save, g.wid) || unit.atk;
      unit.critBonus += b.crit; unit.critAdd = b.critX / 100; unit.healMult *= 1 + b.heal / 100; unit.thMult *= 1 + b.th / 100;
      unit.spRegen += b.spRegen; unit.hpRegen += b.hpRegen / 100; unit.evade += b.evade; unit.def += b.def;
      unit.endure = !!(unit.endure || b.endure); unit.quick = !!(unit.quick || b.quick);
      Object.assign(unit, { physUp: b.phys / 100, magicUp: b.magic / 100, dmgUp: b.dmg / 100, bossUp: b.boss / 100, downUp: b.down / 100, ailUp: b.ail / 100, bindUp: b.bind / 100,
        freezeUp: b.freeze / 100, instaUp: b.insta, costCut: b.costCut / 100, distressDebuff: b.distressDebuff / 100, thStart: b.thStart, openBuff: b.openBuff.slice(), partyOpen: b.partyOpen.slice(), sets: b.sets.slice() });
    }
    // Tree passives on top of the building systems' (engine PASSIVE keys; capped in capPassives).
    ['physUp', 'magicUp', 'bossUp', 'downUp', 'ailUp', 'freezeUp', 'thStart'].forEach(k => { unit[k] = (unit[k] || 0) + pv[k]; });
    unit.critAdd = (unit.critAdd || 0) + pv.critAdd;
    ['haste', 'firstCut', 'weakUp', 'ailDmg', 'lowHpUp', 'ailTurns', 'followUp', 'buffTurns', 'debuffTurns', 'weakSp', 'critIf', 'guardHeal', 'corona', 'momentum'].forEach(k => { unit[k] = pv[k]; });
    // Card sets' engine passives (build.js `pass`: momentum, followUp, counter, corona, debuffTurns, ailDmg…) on top, capped the same.
    if (b && b.pass) Object.entries(b.pass).forEach(([k, v]) => { if (PASSIVE_CAP[k] != null) unit[k] = Math.min(PASSIVE_CAP[k], (unit[k] || 0) + v); });
    unit.guardianBell = pv.guardianBell;
    unit.openBuff = [...new Set((unit.openBuff || []).concat(pv.openBuff))];
    unit.partyOpen = [...new Set((unit.partyOpen || []).concat(pv.partyOpen))];
    return unit;
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
      kitsune: 0, kitsuneSide: null, once: new Set(), // Kitsune Rush's turns left (and whose side), skills used once this battle
      perks: setup.perks || {}, perkUsed: new Set(), assists: {}, follow: [], lastWeak: null, forceOneMore: false, keep: 0, warp: false, // bond perks (build.js)
      bondArts: setup.bondArts || [], bondUsed: new Set() // bond skills (bonds.js): this fight's unlocked combos, and the ones used
    };
    /* Buff levels (data.js buffRules): damage dealt / taken for a stat level from -cap to +cap. */
    const BRu = D.buffRules, CAP = BRu.cap;
    const lvl3 = v => Math.min(CAP, Math.abs(v));
    const atkM = v => (v >= 0 ? BRu.atk[lvl3(v)] : BRu.atkDown[lvl3(v)]);
    const defM = v => (v >= 0 ? BRu.def[lvl3(v)] : BRu.defDown[lvl3(v)]);
    setup.party.forEach((p, i) => S.units.push(Object.assign({ id: 'p' + i, side: 'party', down: false, guard: false, ail: null, dead: p.hp <= 0, buffs: { atk: 0, def: 0, agi: 0 }, buffT: { atk: 0, def: 0, agi: 0 }, boost: 1, turns: 0, th: 0, orgia: 0, nullAil: [],
      taunt: 0, veneer: 0, ward: false, endured: false, usedFree: false, counter: 0, evade: 0 }, p)));
    setup.enemies.forEach(kind => { const e = makeEnemy(kind, 'e' + S.uid++, S.heat); S.units.push(e); if (e.boss) S.boss = true; if (e.reaper) S.reaper = true; });

    const U = id => S.units.find(u => u.id === id) || Object.values(S.assists).find(a => a.id === id) || null;
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
    /* Corona / Aegis / Big Brother: the party takes less damage while the holder stands (the highest counts). */
    const corona = () => alive(party()).reduce((m, p) => Math.max(m, p.corona || 0), 0);

    /* ── Bond perks (build.js battlePerks: { fxKey: { perk, link, name, by, assist, …params } }) ──────────────
       A perk with `by` belongs to a fighter who must be in the party (and able to act, for the ones they do themselves);
       the rest are Assists (cut-ins from outside the party) or Solar's own passives. Each firing emits { t: 'perk' } for the
       cut-in. Once-per-battle perks are remembered in S.perkUsed. Assist attacks come from a stand-in unit at Solar's level. */
    const PK = k => S.perks[k] || null;
    const byUnit = mid => party().find(p => p.mid === mid && !p.dead) || null;
    function perkOn(k, able = false) { const p = PK(k); if (!p) return null; if (!p.by) return p; const u = byUnit(p.by); return u && (!able || !helpless(u)) ? p : null; }
    const onceOk = k => !S.perkUsed.has(k);
    const useOnce = k => { S.perkUsed.add(k); };
    function perkEv(ev, k, extra = {}) { const p = PK(k); if (p) ev.push(Object.assign({ t: 'perk', key: k, perk: p.perk, link: p.link, name: p.name, assist: !p.by, by: p.by || null }, extra)); }
    /* Who acts for a perk: the fighter's own unit, or an assist stand-in (Solar's level and stats). */
    function actorFor(k) {
      const p = PK(k); if (!p) return null;
      if (p.by) return byUnit(p.by);
      if (S.assists[p.link]) return S.assists[p.link];
      const L = leader(), nm = (setup.names || {})[p.link] || p.link;
      return (S.assists[p.link] = { id: 'a:' + p.link, side: 'party', assistOf: p.link, mid: null, name: nm, lvl: L.lvl, st: L.st, ma: L.ma, en: L.en, ag: L.ag, lu: L.lu, acc: 0,
        buffs: { atk: 0, def: 0, agi: 0 }, buffT: { atk: 0, def: 0, agi: 0 }, boost: 1, aff: {}, dead: false, th: 0, critBonus: 0, elBoost: {}, hp: 1, maxHp: 1, sp: 0, maxSp: 0, atk: 30 });
    }
    const isLead = u => !!u && u === leader();
    const hpPct = u => u.hp / u.maxHp;
    /* Multipliers on one hit (cards, weapons and perks). Consumables (Polite Fury, Payback, Key Change, Titanic Kiss) are folded
       into src.actBoost once per action (useSkill). */
    function hitMult(src, tgt, sk, aff) {
      let m = src.actBoost || 1;
      // Signature skills: Fastball / Moonlit Static hit a Down foe harder; Haymaker hits harder the more hurt Shinjiro is.
      if (sk.downBonus && tgt.down) m *= 1 + sk.downBonus;
      if (sk.lowHpBonus && src.maxHp) m *= 1 + sk.lowHpBonus * (1 - Math.max(0, Math.min(1, src.hp / src.maxHp)));
      const phys = PHYS.has(sk.el) || sk.id === 'attack', magic = !phys && sk.el !== 'almighty' && D.elements[sk.el];
      if (src.side === 'party' && !src.assistOf) {
        m *= 1 + (src.dmgUp || 0) + (phys ? src.physUp || 0 : 0) + (magic ? src.magicUp || 0 : 0) + (tgt.boss ? src.bossUp || 0 : 0) + (tgt.down ? src.downUp || 0 : 0);
        // Tree passives: Opportunist / Sunshower (an ailing foe), Last Lap / Pinch Hitter (below a third of HP).
        if (src.ailDmg && tgt.ail) m *= 1 + src.ailDmg;
        if (src.lowHpUp && hpPct(src) < 1 / 3) m *= 1 + src.lowHpUp;
        let p;
        if (phys && tgt.ail && tgt.ail.id === 'freeze' && (p = perkOn('shatterUp'))) m *= 1 + p.dmg;
        if (sk.el === 'light' && (p = perkOn('justiceBolt'))) m *= 1 + p.light;
        if (sk.el === 'light' && (p = perkOn('sunnySide'))) m *= 1 + p.light;
        if (sk.el === 'fire' && (p = perkOn('carmen'))) m *= 1 + p.fire;
        if (phys && tgt.down && (p = perkOn('buster'))) m *= 1 + p.dmg;
        if (src.mid === 'shinjiro' && tgt.down && (p = perkOn('heavyHand'))) m *= 1 + p.dmg;
        if (isLead(src) && phys && hpPct(src) < 0.3 && (p = perkOn('hardWay'))) m *= 1 + p.dmg;
        if (isLead(src) && src.hp >= src.maxHp && (p = perkOn('centerStage'))) m *= 1 + p.dmg;
        if (isLead(src) && tgt.grudged && (p = perkOn('grudge'))) m *= 1 + p.dmg;
        if (src.mid === 'haechan' && src.loudAt === tgt.id && (p = perkOn('loud'))) { m *= 1 + p.dmg; src.loudUsed = true; }
        if (aff === 'weak' && S.lastWeak && S.lastWeak.el === sk.el && S.lastWeak.src !== src.id && (p = perkOn('harmony'))) m *= 1 + p.dmg;
        if (src.counterHit && (p = perkOn('baitPunish'))) m *= 1 + p.dmg;
      }
      return m;
    }
    /* A free follow-up hit from a perk (Jab-Cross, Duo Cohesion, Roundhouse, Prada Swing, Spirit Guardians, a counter-snipe,
       Milady's Salute). Queued during an action, played after it (S.follow), so multi-hits stay in order. */
    function follow(k, tgt, o = {}) { S.follow.push({ k, tgt: tgt && tgt.id, o }); }
    function runFollows(ev) {
      let guard = 0;
      S.inFollow = true; // a follow-up never sets off another one
      while (S.follow.length && guard++ < 12) {
        const f = S.follow.shift(), a = f.unit ? U(f.unit) : actorFor(f.k), tgts = f.o.all ? alive(foes()).filter(x => !x.unreachable && x.id !== f.o.except) : [U(f.tgt)].filter(t => t && !t.dead);
        if (!a || a.dead || !tgts.length || (f.unit && helpless(a))) continue;
        if (f.unit) ev.push({ t: 'status', tgt: a.id, label: 'FOLLOW-UP', cls: 'buff', follow: true });
        else perkEv(ev, f.k, { follow: true });
        const sk = Object.assign({ id: f.unit ? 'follow_up' : 'perk_' + f.k, name: f.unit ? 'Follow-up' : PK(f.k).name, type: 'dmg', target: f.o.all ? 'all' : 'one', sure: true, crit: 0 }, f.o.skill);
        tgts.forEach(t => { if (!t.dead) { const down = strike(a, t, sk, ev, { spread: !!f.o.all }); if (!down && f.o.down && !t.dead && !t.down && R() < f.o.down) { t.down = true; ev.push({ t: 'hit', src: a.id, tgt: t.id, el: 'none', aff: 'normal', amount: 0, hp: t.hp, maxHp: t.maxHp, downed: true, self: false, perkDown: true }); } } });
      }
      S.follow.length = 0;
      S.inFollow = false;
    }
    /* Checks after any action: rescues and second winds. */
    function checkTriggers(ev) {
      if (S.outcome || check()) return;
      const pt = alive(party()), L = leader();
      let p;
      // Mercy's Resurrect: the first ally to fall comes back with half their HP at the end of that turn.
      if (S.reviveNow && (p = perkOn('resurrect')) && onceOk('resurrect')) {
        const t = U(S.reviveNow); S.reviveNow = null;
        if (t && t.dead) { useOnce('resurrect'); perkEv(ev, 'resurrect'); t.dead = false; t.hp = 0; t.endured = false; ev.push({ t: 'revive', tgt: t.id }); heal(null, t, t.maxHp * p.hp, ev); }
      }
      if (!L || L.dead) return;
      if ((p = perkOn('littleBrother')) && onceOk('littleBrother') && hpPct(L) < p.below) { useOnce('littleBrother'); perkEv(ev, 'littleBrother'); heal(actorFor('littleBrother'), L, power(actorFor('littleBrother'), { power: p.power, el: 'heal' }), ev); }
      const low = pt.filter(u => hpPct(u) < ((PK('swiftStep') || {}).below || 0)).sort((a, b) => hpPct(a) - hpPct(b))[0];
      if (low && (p = perkOn('swiftStep')) && onceOk('swiftStep')) { useOnce('swiftStep'); perkEv(ev, 'swiftStep', { tgt: low.id }); heal(null, low, low.maxHp * p.heal, ev); }
      const lowS = pt.filter(u => hpPct(u) < ((PK('sanctuary') || {}).below || 0))[0];
      if (lowS && (p = perkOn('sanctuary')) && onceOk('sanctuary')) { useOnce('sanctuary'); lowS.sanct = true; perkEv(ev, 'sanctuary', { tgt: lowS.id }); }
      if (pt.length > 1 && pt.every(u => hpPct(u) < ((PK('secondWind') || {}).below || 0)) && (p = perkOn('secondWind', true)) && onceOk('secondWind')) {
        useOnce('secondWind'); perkEv(ev, 'secondWind'); const y = byUnit('yukari') || actorFor('secondWind'); pt.forEach(u => heal(y, u, power(y, D.skills.media) * (y.healMult || 1), ev));
      }
      if ((p = perkOn('oracleLink')) && onceOk('oracleLink') && (hpPct(L) < 0.35 || party().some(u => u.dead) || pt.filter(u => hpPct(u) < 0.35).length >= 2 || pt.filter(u => u.ail).length >= 2)) {
        useOnce('oracleLink');
        const sick = pt.filter(u => u.ail).length, dry = pt.filter(u => u.sp < u.maxSp * 0.2).sort((a, b) => a.sp / a.maxSp - b.sp / b.maxSp)[0];
        const pickWhat = sick >= 2 ? 'cure' : (pt.some(u => hpPct(u) < 0.5) ? 'heal' : dry ? 'sp' : 'heal');
        perkEv(ev, 'oracleLink', { what: pickWhat });
        if (pickWhat === 'heal') pt.forEach(u => heal(null, u, u.maxHp, ev));
        else if (pickWhat === 'sp') heal(null, dry, 0, ev, dry.maxSp);
        else pt.forEach(u => { if (u.ail) cure(u, Object.keys(D.ailments), ev); });
      }
      if (party().length > 1 && pt.length === 1 && pt[0] === L && (p = perkOn('quietStrength')) && onceOk('quietStrength')) {
        useOnce('quietStrength'); perkEv(ev, 'quietStrength'); ['atk', 'def', 'agi'].forEach(st => buff(L, st, 1, ev)); heal(null, L, L.maxHp * p.heal, ev);
      }
      // Junkyu's Ice Pack: Shock, Freeze or Poison on Solar wears off at the end of the turn it landed.
      if (L.ail && (p = perkOn('icePack')) && onceOk('icePack') && [].concat(p.v || []).includes(L.ail.id)) { useOnce('icePack'); perkEv(ev, 'icePack'); cure(L, [L.ail.id], ev); }
    }
    /* Before damage lands on a party member: parries, covers and the perks that keep Solar standing. Returns the damage to apply,
       or null when someone else took the hit (Cover Me). */
    function guardHit(src, tgt, sk, amount, ev) {
      let p;
      const phys = PHYS.has(sk.el);
      if (tgt.papillon) { tgt.papillon = false; perkEv(ev, 'papillon'); S.queue.unshift(tgt.id); ev.push({ t: 'msg', text: `${tgt.name} slips the blow, and moves again!` }); return 0; }
      if (isLead(tgt) && tgt.guard && phys && (p = perkOn('knifeParry')) && R() < p.chance) { perkEv(ev, 'knifeParry'); return 0; }
      if (isLead(tgt) && amount > 0 && (tgt.hp - amount) / tgt.maxHp < 0.25 && (p = perkOn('cover', true)) && onceOk('cover')) {
        const a = byUnit('akihiko');
        if (a && !helpless(a)) {
          useOnce('cover'); perkEv(ev, 'cover');
          const d = Math.max(1, Math.round(amount / 2));
          a.hp = Math.max(1, a.hp - d);
          ev.push({ t: 'hit', src: src.id, tgt: a.id, el: sk.el, aff: 'normal', amount: d, hp: a.hp, maxHp: a.maxHp, covered: true });
          return null;
        }
      }
      if (tgt.bondWith && !tgt.dead) {
        const L = U(tgt.bondWith);
        if (L && !L.dead && L !== tgt) { const half = Math.round(amount / 2); L.hp = Math.max(1, L.hp - half); ev.push({ t: 'hit', src: src.id, tgt: L.id, el: sk.el, aff: 'normal', amount: half, hp: L.hp, maxHp: L.maxHp, bond: true }); amount -= half; }
      }
      if (isLead(tgt) && amount > 0 && (p = perkOn('bloom')) && !S.bloomed) { S.bloomed = true; perkEv(ev, 'bloom'); amount = Math.round(amount / 2); }
      if (isLead(tgt) && amount > tgt.maxHp * ((PK('blindside') || {}).over || 1) && (p = perkOn('blindside')) && onceOk('blindside')) { useOnce('blindside'); perkEv(ev, 'blindside'); amount = Math.round(amount / 2); }
      if (amount >= tgt.hp) {
        if (tgt.undying > 0) { amount = tgt.hp - 1; ev.push({ t: 'endure', tgt: tgt.id, undying: true }); }
        else if (isLead(tgt) && hpPct(tgt) > ((PK('tether') || {}).above || 2) && perkOn('tether')) { amount = tgt.hp - 1; perkEv(ev, 'tether'); }
        else if (isLead(tgt) && (p = perkOn('behindLens')) && onceOk('behindLens')) {
          useOnce('behindLens'); amount = tgt.hp - 1; perkEv(ev, 'behindLens');
          follow('behindLens', src, { skill: { el: 'pierce', power: 60, crit: 100 } });
        }
      }
      return amount;
    }

    /* After a party member's hit lands: follow-ups, SP back, Harmony's chain, Cut, Print. */
    function afterPartyHit(src, tgt, sk, ev, h) {
      let p;
      const L = leader();
      if (h.aff === 'weak') S.lastWeak = { el: sk.el, src: src.id }; else if (h.amount > 0) S.lastWeak = null;
      // Tree passives. Follow-ups: never from a counter, a follow-up or a spread skill; one per action.
      if (src.followUp && !S.inFollow && !src.counterHit && sk.target === 'one' && h.amount > 0 && !tgt.dead && !S.follow.some(f => f.unit === src.id) && R() < src.followUp)
        S.follow.push({ unit: src.id, tgt: tgt.id, o: { skill: { el: src.weapon || 'strike', power: Math.max(12, Math.round((src.atk || D.attack.power) * 0.6)), crit: 4 } } });
      if (h.aff === 'weak' && src.weakSp && !src.wspGot && src.sp < src.maxSp) { src.wspGot = true; src.sp = Math.min(src.maxSp, src.sp + src.weakSp); ev.push({ t: 'heal', src: src.id, tgt: src.id, amount: 0, sp: src.weakSp, hp: src.hp, maxHp: src.maxHp, spNow: src.sp }); }
      if (!isLead(src)) return;
      if ((h.aff === 'weak' || h.crit) && (p = perkOn('feelEverything')) && src.sp < src.maxSp) { src.sp = Math.min(src.maxSp, src.sp + p.sp); ev.push({ t: 'heal', src: src.id, tgt: src.id, amount: 0, sp: p.sp, hp: src.hp, maxHp: src.maxHp, spNow: src.sp }); }
      if (h.aff === 'weak' && !tgt.dead && (p = perkOn('jab', true)) && byUnit('akihiko') && !S.follow.some(f => f.k === 'jab') && R() < (p.rank >= p.hiRank ? p.hi : p.chance)) follow('jab', tgt, { skill: { el: 'strike', power: p.power } });
      if (h.crit) {
        if ((p = perkOn('perfectTen')) && src.buffs.agi < 3) buff(src, 'agi', 1, ev);
        if (!tgt.dead && (p = perkOn('bestie')) && !tgt.ail && ['atk', 'def', 'agi'].some(st => tgt.buffs[st] < 0)) inflict(src, tgt, { id: 'distress', chance: 1 }, ev);
        if (tgt.down && !h.downed && (p = perkOn('cutPrint')) && onceOk('cutPrint')) { useOnce('cutPrint'); perkEv(ev, 'cutPrint'); S.forceOneMore = true; alive(party()).forEach(u => heal(null, u, u.maxHp * p.heal, ev)); }
        if (!tgt.dead && (p = perkOn('duo', true)) && !S.follow.some(f => f.k === 'duo')) follow('duo', tgt, { skill: { el: 'pierce', power: p.power, crit: 6 } });
      }
      if (h.downed && !tgt.dead && (p = perkOn('roundhouse')) && onceOk('roundhouse') && alive(foes()).some(f => f !== tgt)) { useOnce('roundhouse'); follow('roundhouse', null, { all: true, except: tgt.id, skill: { el: 'strike', power: p.power } }); }
      if (h.killed && (p = perkOn('goodDog'))) { heal(null, src, src.maxHp * p.hp, ev, Math.round(src.maxSp * p.sp)); }
      if (PHYS.has(sk.el) && h.amount > 0 && (p = perkOn('taste')) && src.hp < src.maxHp) heal(null, src, h.amount * p.drain, ev);
    }
    /* After a Shadow's hit lands on the party: Limit Break, Payback, Polite Fury, Loud About It, Prada Swing, Back Off!,
       Spirit Guardians, Corner Man. */
    function afterFoeHit(src, tgt, sk, ev, h) {
      let p;
      const L = leader(), phys = PHYS.has(sk.el);
      if (tgt.thOnHit && tgt.taunt > 0) { tgt.th = Math.min(100, (tgt.th || 0) + tgt.thOnHit); ev.push({ t: 'thGain', tgt: tgt.id, n: tgt.thOnHit }); }
      if (!isLead(tgt)) {
        if ((h.crit || h.aff === 'weak') && L && !L.dead && (p = perkOn('politeFury'))) { L.fury = Math.min(p.max, (L.fury || 0) + 1); }
        return;
      }
      if ((p = perkOn('limitBreak')) && tgt.th < 100) { tgt.th = Math.min(100, tgt.th + p.th); if (tgt.th >= 100) ev.push({ t: 'thReady', tgt: tgt.id }); }
      if ((h.crit || h.aff === 'weak') && (p = perkOn('payback'))) { tgt.th = Math.min(100, tgt.th + p.th); tgt.payback = 1 + p.dmg; ev.push({ t: 'thGain', tgt: tgt.id, n: p.th }); }
      if (h.crit) {
        const hc = byUnit('haechan');
        if (hc && (p = perkOn('loud'))) { hc.loudAt = src.id; hc.loudUsed = false; }
        if (!src.dead && (p = perkOn('prada')) && onceOk('prada')) { useOnce('prada'); follow('prada', src, { skill: { el: 'strike', power: p.power }, down: p.down }); }
      }
      if (phys && !src.dead && (p = perkOn('backOff')) && onceOk('backOff')) { useOnce('backOff'); if (R() < p.chance) { src.skipNext = true; perkEv(ev, 'backOff', { tgt: src.id }); } }
      if (phys && !src.dead && (p = perkOn('spiritGuardians'))) follow('spiritGuardians', src, { skill: { el: p.el || 'light', power: p.power } });
      if (h.downed && !tgt.dead && (p = perkOn('cornerMan')) && onceOk('cornerMan')) { useOnce('cornerMan'); tgt.down = false; tgt.sureCrit = true; perkEv(ev, 'cornerMan'); ev.push({ t: 'standup', tgt: tgt.id }); }
    }

    /* ── Theurgy gauge ─────────────────────────────── */
    function gain(u, kind, ev, scale = 1) {
      if (!u || u.side !== 'party' || u.dead || u.th >= 100 || u.assistOf) return;
      const m = member(u.mid) || {};
      const amt = D.theurgyGain[kind] * scale * ((m.th || {})[kind] || 1) * (u.thMult || 1);
      u.th = Math.min(100, u.th + amt);
      if (u.th >= 100) ev.push({ t: 'thReady', tgt: u.id });
    }

    /* ── Formulas ─────────────────────────────────────── */
    function power(src, sk) {
      const phys = PHYS.has(sk.el) || sk.id === 'attack';
      let stat = phys ? src.st : src.ma;
      if (sk.theurgy || sk.bond) stat = Math.max(src.st, src.ma); // a Theurgy or a bond uses the better stat
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
      if (tgt.dodgeNext && src.side !== tgt.side) { tgt.dodgeNext = false; return false; } // Pirouette
      if (sk.sure || helpless(tgt)) return true;
      if (isLead(src) && S.warp) return true; // Danielle's Read Faster (the Warp-Strike hook): her first attack can't miss
      const base = (sk.acc || (PHYS.has(sk.el) ? 93 : 97)) + (src.acc || 0);
      const ag = u => u.ag * (kitsuneOn(u) ? 1.5 : 1);
      let chance = base + (ag(src) - ag(tgt)) * 0.8 + BRu.agi * (src.buffs.agi - tgt.buffs.agi);
      if (kitsuneOn(src)) chance *= 1.5;                               // Kitsune Rush: accuracy +50%
      if (src.wild || (src.ail && src.ail.id === 'disorient')) chance -= 35; // Disoriented: swings wide
      let floor = sk.acc ? 50 : 60;
      if (src.side !== tgt.side && tgt.side === 'party') {
        const fr = isLead(tgt) && PHYS.has(sk.el) && perkOn('floorRoutine');
        const ev = Math.min(50, (tgt.evade || 0) + (flanking(tgt) ? 35 : 0) + (fr ? fr.evade : 0)); // evasion (trees, cards, Kasumi) and Off Angle Flank, capped
        chance -= ev; floor -= ev / 2;
      }
      return R() * 100 < Math.max(floor, chance);
    }
    function critChance(src, tgt, sk) {
      if ((!PHYS.has(sk.el) && !sk.crit) || tgt.guard) return 0;
      if (!PHYS.has(sk.el) && sk.id !== 'theurgy') return 0;
      let c = 3 + src.lu * 0.6 + (sk.crit || 0);
      if (src.side === 'party') {
        if (src.sureCrit && (src.sureCrit !== 'phys' || PHYS.has(sk.el))) return 100; // Corner Man, Pinch Hitter
        if ((sk.critDown && tgt.down) || (sk.critFresh && tgt.actedRound !== S.round)) return 100; // Grand Slam / Suplex, Widow's Kiss
        if (isLead(src) && tgt.heard && !tgt.heardHit && perkOn('hearRoom')) return 100;
        if (isLead(src) && hpPct(tgt) < ((PK('matchPoint') || {}).below || 0) && perkOn('matchPoint')) return 100;
        c += mods.crit + (src.critBonus || 0) + ((sk.ail && sk.ail.rope) ? mods.ropeCrit : 0) + (flanking(src) ? 30 : 0) + (sk.critIf && critCond(tgt, sk) ? 30 : 0) + (src.critIf && (tgt.down || tgt.ail) ? src.critIf : 0);
        // Bond perks' crit bonuses stack up to +30.
        let pc = 0, p;
        if (src.mid === 'junpei' && (p = perkOn('clutch')) && (S.round > 5 || alive(party()).reduce((a, u) => a + hpPct(u), 0) / Math.max(1, alive(party()).length) < 0.5)) pc += p.crit;
        if (isLead(src) && tgt.turns === 0 && (p = perkOn('sneak'))) pc += p.crit;
        if (isLead(src) && sk.el === 'pierce' && (p = perkOn('headshot'))) pc += p.crit;
        if (tgt.down && (p = perkOn('crosshair'))) pc += p.crit;
        c += Math.min(30, pc);
      }
      else c *= 0.5;
      if (tgt.ail && tgt.ail.id === 'distress') c += 40;
      return src.side === 'party' ? Math.min(85, c) : c; // no build crits every time (sure crits above skip the cap)
    }

    /* Kunai Flick: a debuffed or ailing foe, or a weak spot. */
    const critCond = (tgt, sk, aff) => !!(tgt.ail || ['atk', 'def', 'agi'].some(s => tgt.buffs[s] < 0) || aff === 'weak' || (aff == null && tgt.aff && tgt.aff[sk.el] === 'weak' && !tgt.guard));

    /* ── Ailments ─────────────────────────────────────── */
    const ailImmune = (u, id) => u.side === 'enemy' ? (D.enemies[u.kind].ailImmune || []).includes(id) : (u.nullAil || []).includes(id);
    function inflict(src, tgt, ail, ev, mult = 1) {
      if (!ail || tgt.dead || tgt.ail || ailImmune(tgt, ail.id)) return false;
      if (tgt.ward && src.side !== tgt.side) return false; // Protective Suzu
      let p;
      if (tgt.side === 'party' && src.side !== tgt.side) {
        if (isLead(tgt) && (p = perkOn('grounded')) && [].concat(p.v).includes(ail.id)) return false;
        if ((p = perkOn('sweetNature')) && [].concat(p.v).includes(ail.id)) return false;
      }
      let ch = ail.chance * mult;
      if (ail.rope && src.side === 'party') ch += mods.bind;
      if (src.side === 'party' && !src.assistOf) {
        ch += (src.ailUp || 0) + (ail.id === 'bind' ? src.bindUp || 0 : 0) + (ail.id === 'freeze' ? src.freezeUp || 0 : 0);
        if (['charm', 'bind'].includes(ail.id) && (p = perkOn('whipCrack'))) ch += p.up;
        if ((p = perkOn('cutFluff'))) ch += p.ail;
      }
      if (tgt.guard) ch *= 0.5;
      if (R() >= ch) return false;
      if (isLead(tgt) && src.side !== tgt.side && (p = perkOn('noRefuse')) && onceOk('noRefuse')) { useOnce('noRefuse'); perkEv(ev, 'noRefuse'); return false; }
      const T = D.ailments[ail.id].turns;
      tgt.ail = { id: ail.id, t: T[0] + Math.floor(R() * (T[1] - T[0] + 1)) };
      if (ail.rope && ail.id === 'bind' && src.side === 'party' && mods.bindTurns > 1) tgt.ail.t = mods.bindTurns; // Fine Stitch
      if (src.side === 'party' && src.ailTurns && ail.id !== 'bind') tgt.ail.t += src.ailTurns; // Lantern Trick
      if (ail.id === 'freeze' && src.side === 'party' && tgt.side === 'enemy' && perkOn('shatterUp')) tgt.ail.t += 1; // Mitsuru's Shatter
      if (tgt.side === 'party' && src.side !== tgt.side && (p = perkOn('peacemaker')) && [].concat(p.v).includes(ail.id)) tgt.ail.t = Math.max(1, tgt.ail.t - 1);
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
      if (sk.noResist && aff === 'resist') aff = 'normal'; // Widow's Kiss
      let d = rawDamage(src, tgt, sk) * hitMult(src, tgt, sk, aff);
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
      if (aff === 'weak') d *= 1.5 * (src.side === 'party' ? mods.weakMult * (1 + (src.weakUp || 0)) : 1);
      if (src.side === 'enemy' && tgt.side === 'party') d *= 1 - corona();
      if (aff === 'resist') d *= 0.5;
      if (crit) d *= keen ? sk.critX : (src.side === 'party' ? mods.critMult + (src.critAdd || 0) : 1.6);
      if (crit && src.side === 'party' && tgt.ail && tgt.ail.id === 'distress' && perkOn('bestie')) d *= 1 + PK('bestie').dmg;
      if (crit && src.sureCrit && (src.sureCrit !== 'phys' || PHYS.has(sk.el))) src.sureCrit = false;
      if (crit && isLead(src) && tgt.heard) tgt.heardHit = true;
      let amount = Math.max(1, Math.round(d));
      if (src.side === 'enemy' && tgt.side === 'party') {
        const g = guardHit(src, tgt, sk, amount, ev);
        if (g === null) return false;
        amount = g;
      }
      tgt.hp = Math.max(0, tgt.hp - amount);
      if (tgt.hp <= 0 && guarded(tgt)) tgt.hp = 1;
      let endured = false;
      if (tgt.hp <= 0 && tgt.endure && !tgt.endured) { tgt.hp = 1; tgt.endured = true; endured = true; } // Endure: once per battle
      // Guardian Bell / Loyal to the End: the first of the party who would fall stays at 1 HP (once a battle).
      if (tgt.hp <= 0 && tgt.side === 'party' && !S.bellUsed && alive(party()).some(p => p.guardianBell)) { tgt.hp = 1; S.bellUsed = true; endured = true; }
      let downed = false, killed = false;
      const noDown = isLead(tgt) && hpPct(tgt) < ((PK('hardWay') || {}).below || 0) && perkOn('hardWay'); // Hard Way Home
      if (tgt.hp <= 0) { kill(tgt, ev); killed = true; }
      else if (amount > 0 && (aff === 'weak' || crit) && !tgt.down && !tgt.guard && !noDown) { tgt.down = true; downed = true; }
      else if (amount > 0 && sk.down && !tgt.down && !tgt.guard && !noDown && R() < sk.down) { tgt.down = true; downed = true; }
      ev.push({ t: 'hit', src: src.id, tgt: tgt.id, el: sk.el, aff, crit, amount, hp: tgt.hp, maxHp: tgt.maxHp, killed, downed, shatter, skill: sk.id, theurgy: !!sk.theurgy, keen: keen && crit, flank: crit && flanking(src) });
      if (endured) ev.push({ t: 'endure', tgt: tgt.id });
      if (src.side === 'party') {
        if (aff === 'weak') gain(src, 'weak', ev);
        if (crit) gain(src, 'crit', ev);
        if (killed) gain(src, 'kill', ev);
        if (!src.assistOf) afterPartyHit(src, tgt, sk, ev, { aff, crit, killed, downed, amount });
      } else if (tgt.side === 'party' && amount > 0) { gain(tgt, 'hurt', ev); afterFoeHit(src, tgt, sk, ev, { aff, crit, killed, downed, amount }); }
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
      if (src.side === 'party') {
        let p;
        ch += src.instaUp || 0;
        if (sk.el === 'light' && (p = perkOn('justiceBolt'))) ch += p.insta;
        if (tgt.down && (p = perkOn('hellhound'))) ch += p.insta;
      }
      if (isLead(tgt) && src.side === 'enemy' && perkOn('noRefuse') && onceOk('noRefuse')) { useOnce('noRefuse'); perkEv(ev, 'noRefuse'); ev.push({ t: 'miss', src: src.id, tgt: tgt.id, insta: true }); return false; }
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
      if (u.side === 'party' && !u.dead && u !== leader() && !u.assistOf) {
        if (perkOn('resurrect') && onceOk('resurrect') && !S.reviveNow) S.reviveNow = u.id;
        const L = leader();
        if (L && !L.dead && perkOn('rideOrDie') && onceOk('rideOrDie')) { useOnce('rideOrDie'); L.rideRevive = true; S.queue = [L.id].concat(S.queue.filter(x => x !== L.id)); if (ev) perkEv(ev, 'rideOrDie'); }
        if (S.cur && S.cur.side === 'enemy' && perkOn('grudge')) S.cur.grudged = true;
      }
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
    function buff(tgt, stat, dir, ev, lasting = false, levels = 1, src = null) {
      const old = tgt.buffs[stat];
      const v = Math.max(-CAP, Math.min(CAP, old + dir * levels));
      tgt.buffs[stat] = v;
      tgt.buffT[stat] = !v ? 0 : (lasting || (tgt.buffT[stat] >= 90 && Math.sign(old) === Math.sign(v)) ? 99 : BRu.turns);
      // Jungwon's Order of Business (his and Solar's debuffs), Jihoon's Hype Man (his buffs on Solar).
      if (src && v && tgt.buffT[stat] < 90) {
        let p;
        // Long Speech / Spotlight Hog / Order: a caster's buffs on her side or debuffs on the other last longer.
        if (dir > 0 && src.buffTurns && tgt.side === src.side) tgt.buffT[stat] += src.buffTurns;
        if (dir < 0 && src.debuffTurns && tgt.side !== src.side) tgt.buffT[stat] += src.debuffTurns;
        if (dir < 0 && tgt.side === 'enemy' && (isLead(src) || src.mid === 'jungwon') && (p = perkOn('orderBiz'))) tgt.buffT[stat] += p.turns;
        if (dir > 0 && isLead(tgt) && src.mid === 'jihoon' && (p = perkOn('hypeMan'))) tgt.buffT[stat] += p.turns;
      }
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
      // Council Croissant (cards), Sebastian's Optimize, Kiriko's Protective Suzu at half the SP.
      if (sp && u.costCut) sp = Math.ceil(sp * (1 - u.costCut));
      if (sp && isLead(u)) { let p; if ((p = perkOn('optimize'))) sp = Math.ceil(sp * (1 - p.cut)); if (sk.id === 'protective_suzu' && (p = perkOn('suzuHalf'))) sp = Math.ceil(sp * p.v); }
      // Talking Points: the first skill on each of her turns costs less (a One More pays in full).
      if (u.firstCut && !u.cutUsed && sk.id !== 'attack') { if (sp) sp = Math.ceil(sp * (1 - u.firstCut)); hp *= 1 - u.firstCut; }
      if (u.firstFree && !u.usedFree && sk.id !== 'attack') { sp = 0; hp = 0; }
      return { sp, hp };
    }
    function payCost(u, sk) {
      if (u.side !== 'party' || !sk.cost) return;
      const c = costOf(u, sk);
      if (u.firstFree && !u.usedFree && sk.id !== 'attack') u.usedFree = true;
      if (sk.id !== 'attack') u.cutUsed = true;
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
      u.counterHit = true;
      strike(u, foe, attackSkill(u), ev);
      u.counterHit = false;
    }
    function useSkill(src, skId, target, ev, { flip = false } = {}) {
      const sk = skId === 'attack' ? attackSkill(src) : Object.assign({ id: skId }, skillOf(skId));
      payCost(src, sk);
      if (sk.once) S.once.add(src.side + ':' + skId);
      const ev0 = ev.length, lead = isLead(src) && !flip;
      let pk;
      // One-action boosts: Polite Fury, Payback, Key Change, Titanic Kiss (magic only).
      if (src.side === 'party' && !src.assistOf) {
        let b = 1;
        if (lead && sk.type === 'dmg' && skId !== 'attack' && src.fury && (pk = PK('politeFury'))) { b *= 1 + pk.dmg * src.fury; src.fury = 0; }
        if (lead && sk.type === 'dmg' && src.payback) { b *= src.payback; src.payback = 0; }
        if (sk.type === 'dmg' && src.keyBoost) { b *= src.keyBoost; src.keyBoost = 0; }
        if (sk.type === 'dmg' && src.charge2 && skId !== 'attack' && !PHYS.has(sk.el)) { b *= src.charge2; src.charge2 = 0; }
        if (sk.type === 'dmg' && src.chargeP && PHYS.has(sk.el)) { b *= src.chargeP; src.chargeP = 0; } // Gather Light
        src.wspGot = false;
        src.actBoost = b;
      }
      // Aggro: a Shadow's single-target attack goes to whoever is drawing it (Public Veneer, Provoke).
      let drawn = null;
      if (src.side === 'enemy' && !flip && sk.target === 'one' && ['dmg', 'insta'].includes(sk.type)) {
        const tank = aggro();
        if (tank && tank.id !== target) { drawn = tank; target = tank.id; }
        // Bond perks that steer a Shadow's single-target attack away from Solar.
        const L = leader(), t0 = U(target);
        if (!tank && t0 && t0.side === 'party' && !t0.dead) {
          const others = () => alive(party()).filter(x => x !== L && !x.sanct);
          let to = null;
          if (t0 === L && L.down && (pk = perkOn('tryMe')) && onceOk('tryMe')) {
            useOnce('tryMe');
            ev.push({ t: 'use', src: src.id, skill: skId, name: sk.name, el: sk.el, tgts: [], hp: src.hp, sp: src.sp });
            perkEv(ev, 'tryMe', { tgt: src.id });
            inflict(actorFor('tryMe'), src, { id: 'distress', chance: 1 }, ev);
            src.boost = 1; src.actBoost = 1;
            return 0;
          }
          if (t0.sanct && others().length) to = pick(others());
          else if (t0 === L && src.noSolar > 0 && others().length) { to = pick(others()); perkEv(ev, 'heavensDoor', { tgt: src.id, quiet: true }); }
          else if (t0 === L && hpPct(L) < ((PK('mainChar') || {}).below || 0) && (pk = perkOn('mainChar', true)) && byUnit('jihoon')) { to = byUnit('jihoon'); perkEv(ev, 'mainChar'); }
          else if (t0 === L && (pk = perkOn('bodyguard', true)) && byUnit('aigis') && R() < pk.chance) { to = byUnit('aigis'); perkEv(ev, 'bodyguard'); }
          else if (t0 === L && (pk = perkOn('spotlight')) && others().length && R() < pk.chance) { to = pick(others()); perkEv(ev, 'spotlight', { quiet: true }); }
          if (to && to !== t0) { drawn = to; target = to.id; }
        }
      }
      let tgts = targetsFor(src, sk, target, flip);
      // Valkyrie: Solar's single-target heals reach the whole party.
      if (lead && src.valkyrie > 0 && sk.type === 'heal' && sk.target === 'ally') tgts = alive(party());
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
        // Haechan's Bait and Punish: an ailment tried on the party gets countered.
        if (src.side === 'enemy' && !flip && t.side === 'party' && !t.dead && !src.dead && (pk = perkOn('baitPunish')) && R() < pk.chance) { perkEv(ev, 'baitPunish', { quiet: true }); counterHit(t, src, ev); }
      });
      else if (sk.type === 'heal') {
        const wab = lead && perkOn('windAtBack');
        tgts.forEach(t => {
          const before = t.hp;
          heal(src, t, (sk.full ? t.maxHp : power(src, sk) * (src.side === 'party' ? (src.healMult || 1) : 1)) * (wab ? 1 + wab.heal : 1), ev);
          if (sk.cureAll && t.ail) cure(t, Object.keys(D.ailments), ev, src);
          if (lead) healPerks(src, t, t.hp - before, ev);
        });
        if (src.side === 'party' && !flip) gain(src, 'heal', ev);
        if (lead && (pk = perkOn('duo', true)) && alive(foes()).some(f => !f.unreachable && !f.hidden)) follow('duo', pick(alive(foes()).filter(f => !f.unreachable && !f.hidden)), { skill: { el: 'pierce', power: pk.power, crit: 6 } });
      }
      else if (sk.type === 'revive') { tgts.forEach(t => { t.dead = false; t.hp = 0; t.endured = false; ev.push({ t: 'revive', tgt: t.id }); heal(src, t, t.maxHp * (src.rideRevive ? 1 : sk.power / 100), ev); }); src.rideRevive = false; if (src.side === 'party') gain(src, 'heal', ev, 1.5); }
      else if (sk.type === 'buff') {
        tgts.forEach(t => { [].concat(sk.stat).forEach(s => buff(t, s, 1, ev, sk.lasting, 1, src)); if (sk.sp) heal(null, t, 0, ev, sk.sp); if (lead && t !== src) keepCount(ev); });
        if (sk.thGain) tgts.forEach(t => { if (t.side === 'party' && !t.dead && t.th < 100) { t.th = Math.min(100, t.th + sk.thGain); ev.push({ t: 'thGain', tgt: t.id, n: sk.thGain }); if (t.th >= 100) ev.push({ t: 'thReady', tgt: t.id }); } });
        if (src.side === 'party') gain(src, 'buff', ev);
        // Jungwon's Motion Denied: a foe that buffs itself has it stripped at once (once per battle).
        if (src.side === 'enemy' && (pk = perkOn('motionDenied', true)) && onceOk('motionDenied') && tgts.some(t => ['atk', 'def', 'agi'].some(st => t.buffs[st] > 0))) { useOnce('motionDenied'); perkEv(ev, 'motionDenied'); dispel(tgts, 'buffs', ev); }
      }
      else if (sk.type === 'debuff') {
        tgts.forEach(t => {
          if (hidden(t)) return;
          [].concat(sk.stat).forEach(s => buff(t, s, -1, ev, sk.lasting, 1, src));
          // Ballot Box (cards) and Cherry's Mean on Purpose: debuffs may Distress.
          if (src.side === 'party' && !t.dead && src.distressDebuff > 0 && R() < src.distressDebuff) inflict(src, t, { id: 'distress', chance: 1 }, ev);
          else if (lead && !t.dead && (pk = perkOn('meanPurpose')) && R() < pk.chance && inflict(src, t, { id: 'distress', chance: 1 }, ev)) perkEv(ev, 'meanPurpose', { quiet: true });
        });
        if (src.side === 'party') gain(src, 'buff', ev);
      }
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
      // ── MAX skills from bonds (build.js)
      else if (sk.type === 'valkyrie') { src.valkyrie = sk.turns || 3; ev.push({ t: 'status', tgt: src.id, label: 'VALKYRIE', cls: 'buff' }); gain(src, 'buff', ev); }
      else if (sk.type === 'undying') { tgts.forEach(t => { if (t.dead) return; t.undying = sk.turns || 2; ev.push({ t: 'status', tgt: t.id, label: 'UNDYING', cls: 'buff' }); }); src.undying = sk.turns || 2; ev.push({ t: 'status', tgt: src.id, label: 'UNDYING', cls: 'buff' }); gain(src, 'buff', ev); }
      else if (sk.type === 'bond') { tgts.forEach(t => { if (t.dead || t === src) return; t.bondWith = src.id; t.bondT = sk.turns || 3; ev.push({ t: 'status', tgt: t.id, label: 'WARDING BOND', cls: 'buff' }); }); gain(src, 'buff', ev); }
      else if (sk.type === 'charge') { tgts.forEach(t => { if (t.dead) return; if (sk.phys) t.chargeP = sk.mult || 2; else t.charge2 = sk.mult || 2.5; ev.push({ t: 'status', tgt: t.id, label: 'CHARGED', cls: 'buff' }); }); gain(src, 'buff', ev); }
      if (sk.selfBuff && !src.dead) buff(src, sk.selfBuff, 1, ev);
      // Black Tortoise: the user draws every single-target attack (one taunter per side; the newest takes over).
      if (sk.tauntSelf && !src.dead) {
        alive(sideOf(src, true)).forEach(p => { if (p !== src && p.taunt > 0) { p.taunt = 0; p.veneer = 0; ev.push({ t: 'tauntEnd', tgt: p.id }); } });
        src.taunt = sk.tauntSelf; src.veneer = 0;
        ev.push({ t: 'taunt', tgt: src.id, turns: src.taunt, flank: !!mods.flank && src.side === 'party', veneer: false });
      }
      // Focus Pull: whatever it hit loses a level of the stat, and (scan) every affinity it has is known.
      if ((sk.debuffOnHit || sk.scan) && sk.type === 'dmg') tgts.forEach(t => {
        if (t.dead || t.side === src.side || !ev.slice(ev0).some(e => e.t === 'hit' && e.src === src.id && e.tgt === t.id && e.amount > 0)) return;
        if (sk.debuffOnHit) buff(t, sk.debuffOnHit, -1, ev, false, 1, src);
        if (sk.scan && t.side === 'enemy') { const k = S.known[t.kind] || (S.known[t.kind] = {}); D.affinityOrder.forEach(el => { k[el] = true; }); ev.push({ t: 'status', tgt: t.id, label: 'IN FOCUS', cls: 'buff', scan: true }); }
      });
      if (sk.type === 'taunt' && sk.thOnHit) tgts.forEach(t => { t.thOnHit = sk.thOnHit; });
      if (sk.dodgeNext && !src.dead) src.dodgeNext = true;
      if (sk.partyHeal) alive(sideOf(src, true)).forEach(p => heal(src, p, p.maxHp * sk.partyHeal, ev));
      // Damage dealt by this action (Fangs Out's drain, Armiger's phantom swords, Rio's Second Serve).
      if (src.side === 'party' && !src.assistOf && ['dmg', 'insta'].includes(sk.type)) {
        const dealt = {}; let any = false;
        ev.slice(ev0).forEach(e => { if (e.t === 'hit' && e.src === src.id && e.tgt !== src.id && !e.reflected && e.amount > 0 && e.aff !== 'drain') { dealt[e.tgt] = (dealt[e.tgt] || 0) + e.amount; any = true; } });
        const total = Object.values(dealt).reduce((a, b) => a + b, 0);
        if (sk.drain && total > 0 && !src.dead) heal(src, src, total * sk.drain, ev);
        if (lead && src.th >= 100 && sk.type === 'dmg' && total > 0 && (pk = perkOn('armiger'))) {
          perkEv(ev, 'armiger', { quiet: true });
          Object.entries(dealt).forEach(([id, d]) => { const t = U(id); if (!t || t.dead) return; const a = Math.max(1, Math.round(d * pk.pct)); t.hp = Math.max(0, t.hp - a); const k = t.hp <= 0; if (k) kill(t, ev); ev.push({ t: 'hit', src: src.id, tgt: t.id, el: 'almighty', aff: 'normal', amount: a, hp: t.hp, maxHp: t.maxHp, killed: k, armiger: true }); });
        }
        if (lead && skId === 'attack' && !any && !ev.slice(ev0).some(e => e.t === 'hit' && e.src === src.id) && tgts.length && !tgts[0].dead && (pk = perkOn('secondServe')) && onceOk('secondServe')) {
          useOnce('secondServe'); perkEv(ev, 'secondServe');
          if (strike(src, tgts[0], sk, ev)) downs++;
        }
        if (lead) S.warp = false;
      }
      if (src.loudUsed) { src.loudAt = null; src.loudUsed = false; }
      src.actBoost = 1;
      runFollows(ev);
      if (src.side === 'party' && !flip && skId !== 'attack' && ((member(src.mid) || {}).sig || []).includes(skId)) gain(src, 'sig', ev);
      if (src.side === 'enemy' && src.charged && sk.type === 'dmg' && PHYS.has(sk.el)) src.charged = false;
      // Counters: a party member struck alone by a Shadow may hit back (Counterstrike; Public Veneer's stance).
      if (src.side === 'enemy' && !flip && sk.target === 'one' && sk.type === 'dmg' && !src.dead) tgts.forEach(t => {
        if (t.side !== 'party' || t.dead || !(t.hp < hp0.get(t.id))) return;
        const ch = Math.min(0.6, (t.counter || 0) + (t.taunt > 0 ? (t.veneer || 0) : 0));
        if (ch > 0 && R() < ch) counterHit(t, src, ev);
      });
      src.boost = 1;
      flushDeaths(ev);
      checkTriggers(ev);
      return downs;
    }
    /* After Solar heals someone: Wind at Your Back, Blue Beam, Melody Hug, Kiss, Keeping Count. */
    function healPerks(src, t, amt, ev) {
      let p;
      if (t.dead) return;
      if ((p = perkOn('windAtBack'))) buff(t, 'agi', 1, ev);
      if ((p = perkOn('blueBeam')) && onceOk('blueBeam')) { useOnce('blueBeam'); perkEv(ev, 'blueBeam', { quiet: true }); buff(t, 'atk', 1, ev); }
      if ((p = perkOn('melodyHug'))) buff(t, 'def', 1, ev);
      if (amt > 0 && (p = perkOn('kiss')) && S.kissTo && S.kissTo !== t.id) { const k = U(S.kissTo); if (k && !k.dead) heal(null, k, amt * p.share, ev); }
      if (t !== src) keepCount(ev);
    }
    function keepCount(ev) {
      const p = perkOn('keepCount');
      if (!p) return;
      S.keep++;
      if (S.keep >= p.n) { S.keep = 0; perkEv(ev, 'keepCount'); const a = actorFor('keepCount'); alive(party()).forEach(u => heal(null, u, power(a, D.skills.media), ev)); }
    }

    /* ── Theurgy ──────────────────────────────────────── */
    // Presentation fields a Persona form may swap (data.js theurgy.forms); the mechanics always stay the base entry's.
    const TH_LOOK = ['name', 'img', 'focus', 'layers', 'sheet', 'sequence', 'video'];
    function theurgyDef(u) {
      const m = member(u.mid), base0 = m && m.theurgy;
      if (!base0) return null;
      const fl = base0.forms && base0.forms[u.personaId];
      const base = fl ? Object.assign({}, base0, ...TH_LOOK.filter(k => fl[k] !== undefined).map(k => ({ [k]: fl[k] })), { form: u.personaId }) : base0;
      const per = D.personas[u.personaId] || {}, f = per.theurgy;
      return f ? Object.assign({}, base, { power: base.power && Math.round(base.power * (f.mult || 1)), down: f.down != null ? f.down : base.down, heal: f.heal || base.heal, unveiled: true }) : base;
    }
    const canTheurgy = u => !!(u && u.side === 'party' && !u.dead && u.th >= 100 && theurgyDef(u));
    function theurgy(u, ev) {
      const T = theurgyDef(u);
      u.th = 0;
      ev.push({ t: 'theurgy', src: u.id, mid: u.mid, name: T.name, look: T.look || T.el, img: T.img || null, video: T.video || null, unveiled: !!T.unveiled,
        focus: T.focus || null, layers: T.layers || null, sheet: T.sheet || null, sequence: T.sequence || null, form: T.form || null });
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
      // Mark's Key Change: after Rise and Shine, Solar's gauge restarts at 30% and the party's next attacks hit harder.
      let kc;
      if (isLead(u) && (kc = perkOn('keyChange'))) { perkEv(ev, 'keyChange'); u.th = kc.th; ev.push({ t: 'thGain', tgt: u.id, n: kc.th }); alive(party()).forEach(p => { p.keyBoost = 1 + kc.dmg; }); }
      flushDeaths(ev);
      runFollows(ev);
      checkTriggers(ev);
      return downs;
    }

    /* ── Bond skills (bonds.js; setup.bondArts: this save's unlocked combos, already resolved to their current version) ──
       Solar and one partner, from either one's turn. Both must be in the party, alive and able to act; both pay the SP; the
       one who didn't start it loses their next turn (bondRest); once per battle each. */
    const bondArt = id => S.bondArts.find(a => a.id === id) || null;
    function bondInfo(u, id) {
      const art = bondArt(id), L = leader();
      if (!art) return { ok: false, why: 'Not unlocked yet.' };
      const P = party().find(p => p.mid === art.partner) || null;
      const pn = P ? P.name : (member(art.partner) || {}).name || art.partner;
      const out = (why, extra = {}) => Object.assign({ ok: !why, why, art, solar: L, partner: P }, extra);
      if (!P) return out(`${pn} isn’t in the party.`, { absent: true });
      if (!u || (u !== L && u !== P)) return out(`Only Solar or ${pn} can start it.`);
      if (S.bondUsed.has(id)) return out('Once per battle, and it’s been used.', { used: true });
      if (L.dead || P.dead) return out(`${L.dead ? L.name : pn} is knocked out.`);
      const other = u === L ? P : L;
      if (helpless(other)) return out(`${other.name} can’t move right now.`);
      if (other.bondRest) return out(`${other.name} is still catching their breath.`);
      if (L.sp < art.sp || P.sp < art.sp) return out(`Both need ${art.sp} SP (${L.name} ${L.sp}, ${pn} ${P.sp}).`, { sp: true });
      if (!alive(foes()).some(f => !f.unreachable && !f.hidden)) return out('Nothing to aim at.');
      return out('');
    }
    /* Every bond this member could start right now, usable or not (the menu greys the ones that aren't). */
    function bondsFor(u) {
      if (!u || u.side !== 'party') return [];
      return S.bondArts.filter(a => (isLead(u) && party().some(p => p.mid === a.partner)) || a.partner === u.mid).map(a => bondInfo(u, a.id));
    }
    function bondAct(u, id, target, ev) {
      const info = bondInfo(u, id), art = info.art, L = info.solar, P = info.partner;
      L.sp -= art.sp; P.sp -= art.sp;
      S.bondUsed.add(id);
      const other = u === L ? P : L;
      other.bondRest = true;
      ev.push({ t: 'bond', src: u.id, solar: L.id, partner: P.id, mid: P.mid, id, name: art.name, love: art.love, tier: art.tier, look: art.look, colors: art.colors,
        img: art.img, focus: art.focus, sheet: art.sheet, sequence: art.sequence || null, layers: art.layers, face: art.face || null, line: art.line, desc: art.desc, sp: art.sp, spSolar: L.sp, spPartner: P.sp, rest: other.id });
      const open = () => alive(foes()).filter(f => !f.unreachable && !f.hidden && !shieldUp(f));
      let main = U(target);
      if (!main || main.dead || main.side !== 'enemy' || main.hidden || main.unreachable) main = open().sort((a, b) => (b.boss - a.boss) || b.hp - a.hp)[0] || null;
      let downs = 0;
      art.steps.forEach((st, i) => {
        const a = st.by === 'partner' ? P : L;
        if (!a || a.dead || S.outcome || !alive(foes()).some(f => !f.unreachable)) return;
        const tg = st.target || art.target;
        const sk = { id: `bond_${art.id}_${i}`, name: art.name, el: st.el, power: st.power, target: tg, multi: st.multi, crit: st.crit || 6, ail: st.ail, down: st.down, sure: true, bond: true, type: 'dmg' };
        const n = sk.multi ? sk.multi[0] + Math.floor(R() * (sk.multi[1] - sk.multi[0] + 1)) : 1;
        if (tg === 'rand') { for (let k = 0; k < n; k++) { const pool = alive(foes()).filter(f => !f.unreachable); if (!pool.length) break; if (strike(a, pick(pool), sk, ev, { spread: true })) downs++; } }
        else if (tg === 'all') alive(foes()).filter(f => !f.unreachable).forEach(t => { for (let k = 0; k < n && !t.dead; k++) if (strike(a, t, sk, ev, { spread: true })) downs++; });
        else { if (!main || main.dead) main = open()[0] || null; if (main) for (let k = 0; k < n && !main.dead; k++) if (strike(a, main, sk, ev)) downs++; }
        flushDeaths(ev);
      });
      const af = art.after || {};
      if (!S.outcome || S.outcome === 'win') {
        if (af.heal) alive(party()).forEach(p => heal(L, p, p.maxHp * af.heal, ev));
        if (af.cure) alive(party()).forEach(p => { if (p.ail) cure(p, Object.keys(D.ailments), ev, L); });
        (af.buffs || []).forEach(st => alive(party()).forEach(p => buff(p, st, 1, ev, false, 1, L)));
        (af.debuffs || []).forEach(st => alive(foes()).filter(f => !f.unreachable).forEach(f => buff(f, st, -1, ev, false, 1, L)));
        if (af.ward === 'solar' && !L.dead) { L.ward = true; ev.push({ t: 'ward', tgt: L.id }); }
        if (af.th) [L, P].forEach(p => { if (!p.dead && p.th < 100) { p.th = Math.min(100, p.th + af.th); ev.push({ t: 'thGain', tgt: p.id, n: af.th }); if (p.th >= 100) ev.push({ t: 'thReady', tgt: p.id }); } });
      }
      gain(L, 'sig', ev); gain(P, 'sig', ev);
      flushDeaths(ev);
      runFollows(ev);
      checkTriggers(ev);
      return downs;
    }

    /* ── Turn flow ────────────────────────────────────── */
    function order() {
      // Kitsune Rush: its side moves first, 50% faster. Quick Draw: Solar leads the first round.
      return alive(S.units).map(u => ({ u, k: u.ag * (1 + 0.25 * u.buffs.agi) * (1 + (u.haste || 0)) * (kitsuneOn(u) ? 1.5 : 1) + R() * 2.5 + (kitsuneOn(u) ? 1000 : 0) + (S.round === 1 && u.quick ? 2000 : 0) }))
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
          roundPerks(ev);
        }
        const c = U(S.queue.shift());
        if (c && !c.dead) u = c;
      }
      S.cur = u;
      u.turns++;
      u.acted = 0;
      u.guard = false;
      u.wild = false;
      u.cutUsed = false;
      u.actedRound = S.round;
      // Bond perks' timed states: Sanctuary ends on their turn; Undying Love, Warding Bond, Valkyrie and Heaven's Door count down.
      if (u.sanct) u.sanct = false;
      if (u.undying > 0) u.undying--;
      if (u.bondT > 0 && --u.bondT === 0) u.bondWith = null;
      if (u.valkyrie > 0) { u.valkyrie--; if (u.sp < u.maxSp) { u.sp = Math.min(u.maxSp, u.sp + 4); ev.push({ t: 'heal', src: u.id, tgt: u.id, amount: 0, sp: 4, hp: u.hp, maxHp: u.maxHp, spNow: u.sp }); } }
      if (u.noSolar > 0) u.noSolar--;
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
          if (u.side === 'party') checkTriggers(ev);
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
      // A bond took this member's turn too (bondAct): they catch their breath.
      if (u.bondRest) { u.bondRest = false; if (canAct && !forced) { ev.push({ t: 'bondRest', tgt: u.id }); canAct = false; } }
      // Tired members sometimes lose a turn.
      if (canAct && !forced && u.side === 'party' && u.tired && R() < D.progression.tired.skip) { ev.push({ t: 'tiredSkip', tgt: u.id }); canAct = false; }
      // Aphrodite's Back Off!: a shoved foe loses this turn.
      if (u.skipNext) { u.skipNext = false; if (canAct) { canAct = false; ev.push({ t: 'msg', text: `${u.name} is still reeling and loses its turn.`, src: u.id }); } }
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
      if (isLead(u) && !u.dead) {
        let p;
        // Yukari's Second Opinion: Solar ends her turn with an ailment, Yukari cures it (once per battle).
        if (u.ail && (p = perkOn('secondOpinion', true)) && onceOk('secondOpinion')) { useOnce('secondOpinion'); perkEv(ev, 'secondOpinion'); cure(u, [u.ail.id], ev); }
        // Haru's Bloom: she heals 10% at the end of each of her first 3 turns.
        if ((p = perkOn('bloom')) && u.turns <= p.turns && u.hp < u.maxHp) heal(null, u, u.maxHp * p.heal, ev);
      }
      checkTriggers(ev);
      u.boost = 1;
      S.oneMore = false; S.alloutReady = false;
    }
    function afterAction(u, downs, ev) {
      check();
      if (S.outcome) return;
      if (u.dead) { endTurn(u, ev); return; }
      if (u.side === 'party') {
        const forced = S.forceOneMore; S.forceOneMore = false;
        if (downs > 0 || forced) {
          S.chain.add(u.id);
          let cs;
          if (isLead(u) && (cs = perkOn('centerStage'))) alive(party()).forEach(p => { if (p.th < 100) { p.th = Math.min(100, p.th + cs.th); ev.push({ t: 'thGain', tgt: p.id, n: cs.th }); if (p.th >= 100) ev.push({ t: 'thReady', tgt: p.id }); } });
          if (alive(foes()).filter(f => !f.unreachable).every(f => f.down)) { S.alloutReady = true; S.oneMore = true; ev.push({ t: 'alloutReady', src: u.id }); }
          else { S.oneMore = true; ev.push({ t: 'onemore', src: u.id }); }
          if (u.momentum && u.sp < u.maxSp) { u.sp = Math.min(u.maxSp, u.sp + u.momentum); ev.push({ t: 'heal', src: u.id, tgt: u.id, amount: 0, sp: u.momentum, hp: u.hp, maxHp: u.maxHp, spNow: u.sp }); } // Momentum
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
      const fm = perkOn('fieldMedicine'), amt = (p, v) => (v <= 1 ? p.maxHp * v : v) * (fm ? 1 + fm.v : 1);
      if (it.type === 'spPct') alive(party()).forEach(p => heal(u, p, 0, ev, Math.round(p.maxSp * it.sp)));
      else if (it.type === 'heal') {
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
      } else if (action.type === 'bond') {
        const inf = bondInfo(u, action.bond);
        if (!inf.ok) { S.oneMore = wasOneMore; return [{ t: 'msg', text: inf.why }]; }
        afterAction(u, bondAct(u, action.bond, action.target, ev), ev);
      } else if (action.type === 'guard') {
        u.guard = true; ev.push({ t: 'guard', src: u.id });
        let p;
        if (isLead(u) && (p = perkOn('waitingRoom'))) { perkEv(ev, 'waitingRoom', { quiet: true }); heal(null, u, u.maxHp * p.heal, ev, Math.round(u.maxSp * p.heal)); }
        if (isLead(u) && perkOn('papillon')) u.papillon = true;
        if (u.guardHeal && (u.hp < u.maxHp || u.sp < u.maxSp)) heal(null, u, u.maxHp * u.guardHeal, ev, 4); // Hold the Podium
        endTurn(u, ev);
      }
      else if (action.type === 'item') {
        const it = D.items[action.item];
        if (!it || !(S.items[action.item] > 0) || it.use === 'field') { S.oneMore = wasOneMore; return [{ t: 'msg', text: 'None left.' }]; }
        useItem(u, action.item, action.target, ev);
        endTurn(u, ev);
      } else if (action.type === 'escape') {
        if (S.boss && !S.reaper) { S.oneMore = wasOneMore; return [{ t: 'msg', text: 'There’s no escape from the full moon!' }]; }
        const avg = l => l.reduce((s, x) => s + x.ag, 0) / Math.max(1, l.length);
        const chance = S.reaper ? 34 + (alive(foes()).some(f => f.down) ? 30 : 0) : Math.max(25, Math.min(90, 55 + (avg(alive(party())) - avg(alive(foes()))) * 4 + (alive(foes()).some(f => f.down) ? 20 : 0)));
        const gh = !S.boss && perkOn('grapple');
        const ok = !!gh || R() * 100 < chance;
        if (gh) perkEv(ev, 'grapple', { quiet: true });
        ev.push({ t: 'escape', ok, grapple: !!gh });
        if (ok) S.outcome = 'escaped'; else endTurn(u, ev);
      } else if (action.type === 'shift') {
        const t = U(action.to);
        S.oneMore = wasOneMore;
        const ok = wasOneMore && canShiftTo(t);
        S.oneMore = false;
        if (!ok) { S.oneMore = wasOneMore; return [{ t: 'msg', text: 'Can’t shift now.' }]; }
        S.chain.add(u.id);
        t.boost = mods.shiftMult;
        let p;
        // Jaehyun's Field General: each pass in a chain adds another +10%. Judy's Hotwire: +10 Theurgy. Junpei's Pinch Hitter.
        if ((p = perkOn('fieldGeneral'))) t.boost = mods.shiftMult + p.step * S.chain.size;
        if ((p = perkOn('hotwire')) && t.th < 100) { t.th = Math.min(100, t.th + p.th); perkEv(ev, 'hotwire', { quiet: true }); ev.push({ t: 'thGain', tgt: t.id, n: p.th }); if (t.th >= 100) ev.push({ t: 'thReady', tgt: t.id }); }
        if (isLead(u) && t.mid === 'junpei' && perkOn('pinchHitter', true) && onceOk('pinchHitter')) { useOnce('pinchHitter'); t.sureCrit = 'phys'; perkEv(ev, 'pinchHitter'); }
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
      // Haechan's Cut the Fluff: the status openings (ailments that land on it) come with the scan.
      const open = perkOn('cutFluff') ? Object.keys(D.ailments).filter(a => !ailImmune(t, a) && a !== 'disorient') : null;
      ev.push({ t: 'analyze', tgt: t.id, kind: t.kind, open });
      // Saori's Margin Notes: the first Analyze reads every foe on the field.
      if (perkOn('marginNotes') && onceOk('marginNotes')) {
        useOnce('marginNotes'); perkEv(ev, 'marginNotes', { quiet: true });
        alive(foes()).forEach(f => { if (f.hidden) return; const kk = S.known[f.kind] || (S.known[f.kind] = {}); D.affinityOrder.forEach(el => { kk[el] = true; }); });
      }
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
      // Haru's Milady's Salute: a grenade shell after the All-Out.
      let ms;
      if (!check() && (ms = perkOn('milady')) && alive(foes()).length) { follow('milady', null, { all: true, skill: { el: 'almighty', power: ms.power } }); runFollows(ev); flushDeaths(ev); }
      check();
      endTurn(u, ev);
      return ev;
    }
    /* Start-of-battle party buff (Star tree capstone). */
    function openBuff(stat) { const ev = []; alive(party()).forEach(p => buff(p, stat, 1, ev)); return ev; }
    /* Each new round: Fuuka's Steady Signal, and Haechan's Hear the Room (the foe charging its strongest move). */
    function roundPerks(ev) {
      let p;
      if ((p = perkOn('steadySignal')) && S.round > 1 && S.round % p.every === 0) { perkEv(ev, 'steadySignal'); alive(party()).forEach(u => { if (u.hp < u.maxHp) heal(null, u, u.maxHp * p.heal, ev); }); }
      if (perkOn('hearRoom')) {
        const fs = alive(foes()).filter(f => !f.unreachable && !f.hidden);
        fs.forEach(f => { f.heard = false; f.heardHit = false; });
        const f = fs.slice().sort((a, b) => (!!(b.charge || b.charged) - !!(a.charge || a.charged)) || (Math.max(b.st, b.ma) * (b.boss ? 2 : 1) - Math.max(a.st, a.ma) * (a.boss ? 2 : 1)))[0];
        if (f) { f.heard = true; ev.push({ t: 'heard', tgt: f.id }); if (S.round === 1) perkEv(ev, 'hearRoom', { tgt: f.id, quiet: true }); }
      }
    }
    /* The start of a battle: cards' opening buffs and Theurgy, set bonuses, the night's buffs (battle.js setup.startBuffs, { stat, v: -1 } a debuff:
       Yunjin's mood, Danielle's The Folder (missionBriefing), Jihoon's Almighty Hoon) and the start-of-battle perks. */
    function start() {
      const ev = [], L = leader();
      let p;
      party().forEach(u => {
        if (u.dead) return;
        if (u.thStart && u.th < 100) { u.th = Math.min(100, u.th + u.thStart); ev.push({ t: 'thGain', tgt: u.id, n: u.thStart }); if (u.th >= 100) ev.push({ t: 'thReady', tgt: u.id }); }
        (u.openBuff || []).forEach(st => buff(u, st, 1, ev));
      });
      [...new Set([].concat(...alive(party()).map(u => u.partyOpen || [])))].forEach(st => alive(party()).forEach(u => buff(u, st, 1, ev)));
      (setup.startBuffs || []).forEach(b => alive(party()).forEach(u => { buff(u, b.stat || b, b.v || 1, ev); if (b.turns) u.buffT[b.stat || b] = Math.max(u.buffT[b.stat || b], b.turns); }));
      if ((p = perkOn('countIn'))) { perkEv(ev, 'countIn', { quiet: true }); [].concat(p.v).forEach(st => alive(party()).forEach(u => buff(u, st, 1, ev))); }
      if (L && (p = perkOn('onIce'))) { buff(L, 'agi', 1, ev); L.buffT.agi = 1; }
      if ((p = perkOn('sunnySide'))) { perkEv(ev, 'sunnySide', { quiet: true }); alive(party()).forEach(u => { if (u.hp < u.maxHp) heal(null, u, u.maxHp * p.heal, ev); }); }
      if ((p = perkOn('venomMine')) && R() < p.chance) {
        const pool = alive(foes()).filter(f => !f.ail && !f.unreachable && !ailImmune(f, 'poison'));
        if (pool.length) { const f = pick(pool); perkEv(ev, 'venomMine', { tgt: f.id }); f.ail = { id: 'poison', t: 3 }; ev.push({ t: 'ail', src: actorFor('venomMine').id, tgt: f.id, id: 'poison', turns: 3 }); }
      }
      if ((p = perkOn('heavensDoor'))) {
        const f = alive(foes()).filter(x => !x.unreachable).sort((a, b) => (b.boss - a.boss) || (Math.max(b.st, b.ma) - Math.max(a.st, a.ma)))[0];
        if (f) { f.noSolar = p.turns; perkEv(ev, 'heavensDoor', { tgt: f.id }); }
      }
      if ((p = perkOn('kiss'))) { const k = alive(party()).filter(u => u !== L).sort((a, b) => hpPct(a) - hpPct(b))[0]; if (k) { S.kissTo = k.id; perkEv(ev, 'kiss', { tgt: k.id, quiet: true }); } }
      if (perkOn('warpStrike')) S.warp = true;
      return ev;
    }
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
    /* Bond perks that change the units themselves (build.js): Rio's Stamina, Hyein's Tailor Made, Cherry's On Ice,
       Read Faster (Solar first; the warpStrike hook, Danielle), and the Moon's curse from Shuffle Time (setup.foeHpMult). */
    (() => {
      const L = leader(); let p;
      if (L) {
        if ((p = perkOn('stamina'))) { const add = Math.round(L.maxHp * p.hp); const full = L.hp >= L.maxHp; L.maxHp += add; if (full) L.hp = L.maxHp; }
        if ((p = perkOn('solarDef'))) L.def = (L.def || 0) + p.v;
        if (perkOn('onIce') && !['null', 'repel', 'drain'].includes(L.aff.ice)) L.aff = Object.assign({}, L.aff, { ice: 'resist' });
        if (perkOn('warpStrike')) L.quick = true;
      }
      if (setup.foeHpMult && setup.foeHpMult !== 1) foes().forEach(f => { f.maxHp = Math.round(f.maxHp * setup.foeHpMult); f.hp = Math.round(f.hp * setup.foeHpMult); });
    })();

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
      // Rush: Solar starts a bond when it's worth both turns (a boss, a crowd, or a long fight) and Theurgy isn't the better move.
      if (smart && isLead(u) && S.bondArts.length && !canTheurgy(u) && (bossUp || foesA.length >= 2 || longFight)) {
        const b = bondsFor(u).filter(x => x.ok).sort((a, c) => c.art.tier - a.art.tier)[0];
        if (b) {
          const tg = foesA.filter(f => !f.hidden && !shieldUp(f)).sort((a, c) => (c.boss - a.boss) || c.hp - a.hp)[0];
          return { type: 'bond', bond: b.art.id, target: tg ? tg.id : null };
        }
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
      costOf, usedOnce, aggro, flanking, kitsuneOn, atkM, defM, start, perkOn: k => perkOn(k), perks: () => S.perks, bondInfo, bondsFor
    };
  }

  /* Rewards for a won battle: EXP, yen, material drops. mult: { exp, yen } for strong nodes. */
  function rewards(B, rand = Math.random, mult = {}) {
    const D = DATA(), P = D.progression;
    const beaten = B.foes().filter(f => f.dead && !f.fled);
    const drops = {};
    beaten.forEach(f => {
      const d = D.enemies[f.kind];
      if (d.drop && rand() < (d.dropChance != null ? d.dropChance : P.dropChance) * (1 + (mult.drop || 0))) drops[d.drop] = (drops[d.drop] || 0) + 1;
    });
    return {
      exp: Math.round(beaten.reduce((s, f) => s + f.exp, 0) * (mult.exp || 1)),
      yen: Math.round(beaten.reduce((s, f) => s + f.yen, 0) * (mult.yen || 1) * (0.9 + rand() * 0.2)),
      drops
    };
  }

  return { create, rng, PHYS, MAGIC, treeFx, mastered, formUnlocked, formsList, personaId, evolutionsDue, lvlOf, gearOf, skillsFor, kitFor, statsFor, buildUnit, simParty, enemyBase, rewards,
    rootOf, tierOf, learnInto, treeNodes, passives, equipSkill, unequipSkill, seenSkill, treeNode, treeOwned, treeState, treeWhy, treeBuy, treeSpent, treeRespec, fragSet,
    ptreeOf, ptreeNodes, ptreeState, ptreeBuy, ptreeRespec, ptreeFx, ptreeEarned, ptreeSpent, ptreePts, linkRank, forgetSkill, unforget };
})();
