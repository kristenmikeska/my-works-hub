/* FEMC revamp: game state and rules (calendar, stats, links, jobs, exams, the battle handoff, saves).
   No content lives here; it reads the data files in assets/femc/game/data and links/.
   Save: localStorage 'kg-femc-revamp' (autosave) + 'kg-femc-revamp-slot1..3'. Settings: 'kg-femc-revamp-settings'.
   Battle handoff: 'kg-femc-handoff' (contract in FEMC-GAME-HANDOFF.md). v1's 'kg-femc-game' is never touched.
     Beyond the contract, the request also carries `run` (this playthrough's id, S.runId: the battle game keeps one battle
     save per playthrough), `carryFrom` (New Game+: the previous playthrough's id), `route` (route.choices.solstice),
     `routeFlags` (which of route-R/S/H/stay/true/bad, true-final, true-fallback are set: the finale's lantern lock) and
     `trueReady` (true-final or true-path). A result may also carry `flags` ({ id: true }, applied like a scene's { flag }) and `choice` (saved as
     route.choices['fight.<op or script>'], e.g. the finale's 'hand' or 'defeat').
   Story events (data/story-*.js, window.FEMC_GAME_EVENTS): { id, date, slot, title, place, time, flag (only if set), link
     (whose bond the event's `reverse` choices push), consumes, unlock (see unlockMet: fragments / flags / ranks, then it plays on
     the first matching slot on or after `date`), scene }. Door scenes (FEMC_GAME_FLAGS.doorScenes, story-act5.js) play one a
     night in the late slot once due (route.doorsDue → route.doorsSeen). The bad ending (flag route-bad) or a scene's { end }
     jumps to 1/31 late, where 'end-ending' plays; then the end screen (credits, endings seen in 'kg-femc-revamp-clears',
     New Game+: stats, half the yen, Compendium and books carry over; S.ngFrom tells the battle game whose levels to copy).
   Debug: femc-game.html?debug=1 keeps the Simulate buttons on fight cards (remembered for the tab's session). */
window.FemcGame = (() => {
  const KEY = 'kg-femc-revamp', SETTINGS_KEY = 'kg-femc-revamp-settings', HANDOFF_KEY = 'kg-femc-handoff';
  const SLOT_KEY = n => `${KEY}-slot${n}`;
  const VERSION = 1;
  const base = window.FemcMode?.base || new URL('../../../', document.currentScript.src).href;
  const W = window;
  const D = {
    get cal() { return W.FEMC_GAME_CALENDAR; }, get stats() { return W.FEMC_GAME_STATS; }, get places() { return W.FEMC_GAME_PLACES; },
    get jobs() { return W.FEMC_GAME_JOBS || []; }, get jobScenes() { return W.FEMC_GAME_JOB_SCENES || {}; }, get flags() { return W.FEMC_GAME_FLAGS; },
    get texts() { return W.FEMC_GAME_TEXTS || { threads: {}, texts: [] }; }, get q() { return W.FEMC_GAME_QUESTIONS || { classes: [], exams: {}, teachers: {}, rivals: [], ambient: {} }; },
    get events() { return W.FEMC_GAME_EVENTS || []; }, get battle() { return W.FEMC_BATTLE_DATA || {}; }
  };
  const lsGet = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const lsSet = (k, v) => { try { v === null ? localStorage.removeItem(k) : localStorage.setItem(k, v); return true; } catch (e) { return false; } };
  const clone = o => JSON.parse(JSON.stringify(o));

  /* ── Calendar ── */
  const START = new Date(2009, 3, 6);
  const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOf = md => { const [m, d] = String(md).split('/').map(Number); return Math.round((new Date(m >= 4 ? 2009 : 2010, m - 1, d) - START) / 86400000); };
  const dateOf = d => new Date(2009, 3, 6 + d);
  const mdOf = d => { const t = dateOf(d); return `${t.getMonth() + 1}/${t.getDate()}`; };
  const END = () => dayOf(D.cal.end);
  const inRange = (d, from, to) => d >= dayOf(from) && d <= dayOf(to);
  function seeded(n) { let x = Math.sin(n * 9301 + 49297) * 233280; return x - Math.floor(x); }
  function weather(d) {
    const md = mdOf(d), fixed = D.cal.weather[md];
    if (fixed) return fixed;
    const m = dateOf(d).getMonth() + 1, c = D.cal.climate[m] || {};
    let r = seeded(d + 11);
    for (const k of ['snow', 'rain', 'cloudy']) { if (c[k] && r < c[k]) return k; r -= c[k] || 0; }
    return 'clear';
  }
  function moon(d) {
    const fulls = D.cal.fullMoons.map(dayOf).sort((a, b) => a - b);
    const next = fulls.find(f => f >= d), prev = [...fulls].reverse().find(f => f <= d);
    if (next === d) return { phase: 0.5, full: true, name: 'Full Moon', days: 0 };
    const p = next != null && prev != null ? 0.5 + (d - prev) / (next - prev) : 0.25;
    const ph = p % 1;
    const NAMES = ['New Moon', 'Waxing Crescent', 'First Quarter', 'Waxing Gibbous', 'Full Moon', 'Waning Gibbous', 'Last Quarter', 'Waning Crescent'];
    return { phase: ph, full: false, name: NAMES[Math.round(ph * 8) % 8], days: next != null ? next - d : null };
  }
  function examOn(d) {
    for (const e of D.cal.exams) { const i = e.days.map(dayOf).indexOf(d); if (i >= 0) return { ...e, index: i, count: e.days.length }; }
    return null;
  }
  function dayInfo(d = S.day) {
    const t = dateOf(d), md = mdOf(d), dow = t.getDay();
    const holiday = D.cal.holidays[md] || null;
    const brk = D.cal.breaks.find(b => inRange(d, b.from, b.to)) || null;
    const trip = (D.cal.trips || []).find(b => inRange(d, b.from, b.to)) || null;
    const exam = examOn(d);
    let type = 'school';
    if (dow === 0 || holiday || brk) type = 'off';
    if (exam) type = 'exam';
    if (trip) type = 'trip';
    if (d < dayOf(D.cal.firstFree)) type = 'prologue';
    return { d, date: t, md, dow, day: DAYS[dow], dayName: DAY_NAMES[dow], type, holiday, brk, trip, exam, label: holiday || D.cal.events[md] || (brk ? brk.name : '') || (exam ? 'Exams' : ''),
      weather: weather(d), moon: moon(d), ops: D.cal.ops.filter(o => o.date === md) };
  }
  const SLOT_ORDER = ['early', 'morning', 'lunch', 'afternoon', 'after', 'evening', 'late'];
  function slotsFor(info) {
    if (info.type === 'trip') return ['early', 'late'];
    if (info.type === 'off') return ['early', 'after', 'evening', 'late'];
    return SLOT_ORDER;
  }
  const slotName = (slot, info = dayInfo()) => { const s = D.cal.slots.find(x => x.id === slot); return s ? (info.type !== 'school' && info.type !== 'exam' && s.offName ? s.offName : s.name) : slot; };

  /* ── State ── */
  const fresh = () => ({
    v: VERSION, started: false, day: 0, slot: 'early', phase: 'title',
    stats: { ...D.stats.start }, yen: D.stats.startYen, condition: 'good', tonight: null,
    links: {}, met: [], registered: [], flags: {}, unlocked: {}, joined: ['solar'],
    route: { tally: {}, choices: {}, frags: { R: 0, S: 0, H: 0 }, doorsDue: [], doorsSeen: [] },
    fragments: [], inventory: {}, gear: [], books: { owned: [], reading: null, progress: {}, done: [] },
    jobs: {}, events: [], spent: {}, exams: {}, classSeen: [], phone: { threads: {}, unread: {}, done: [], pending: {}, invite: null, lastInvite: -9 },
    tartarus: { nights: 0, maxFloor: 0, bosses: [], lastParty: null }, battle: { exp: {}, levels: {} },
    pending: null, handoffId: null, runId: null, playMinutes: 0, savedAt: null
  });
  const newRunId = () => `r${Date.now().toString(36)}${Math.floor(Math.random() * 1296).toString(36)}`;
  let S = load() || fresh();
  function load() {
    try { const s = JSON.parse(lsGet(KEY) || 'null'); return s && s.v ? migrate(s) : null; } catch (e) { return null; }
  }
  function migrate(s) { const f = fresh(); if (!s.runId) s.runId = newRunId(); return { ...f, ...s, route: { ...f.route, ...(s.route || {}) }, phone: { ...f.phone, ...(s.phone || {}) }, books: { ...f.books, ...(s.books || {}) }, tartarus: { ...f.tartarus, ...(s.tartarus || {}) }, battle: { ...f.battle, ...(s.battle || {}) } }; }
  const listeners = [];
  const onChange = fn => listeners.push(fn);
  function save() { S.savedAt = Date.now(); lsSet(KEY, JSON.stringify(S)); listeners.forEach(fn => { try { fn(); } catch (e) { console.error(e); } }); }
  function newGame() { S = fresh(); S.started = true; S.phase = 'prologue'; S.runId = newRunId(); save(); }

  /* ── Settings ── */
  const DEFAULTS = { text: 'normal', music: 60, sfx: true, auto: 'off', dateCard: true, battles: 'ask', quickClass: false };
  let settingsCache = (() => { try { return { ...DEFAULTS, ...JSON.parse(lsGet(SETTINGS_KEY) || '{}') }; } catch (e) { return { ...DEFAULTS }; } })();
  const settings = () => settingsCache;
  function setSetting(k, v) { settingsCache = { ...settingsCache, [k]: v }; lsSet(SETTINGS_KEY, JSON.stringify(settingsCache)); if (k === 'sfx') lsSet('kg-femc-sound', v ? null : 'off'); if (k === 'music') W.FemcScene?.Music.volume(); }
  const textDelay = () => ({ slow: 42, normal: 24, fast: 10, instant: 0 }[settingsCache.text] ?? 24);
  const sfx = name => { if (settingsCache.sfx && lsGet('kg-femc-sound') !== 'off') W.FemcMode?.sfx(name); };

  /* ── Stats ── */
  const statDef = id => D.stats.stats[id];
  function statRank(id, pts = S.stats[id]) { const at = statDef(id).at; let r = 1; at.forEach((v, i) => { if (pts >= v) r = i + 1; }); return r; }
  const statRankName = (id, r = statRank(id)) => statDef(id).ranks[r - 1];
  function statProgress(id) { const at = statDef(id).at, r = statRank(id), pts = S.stats[id]; if (r >= at.length) return 1; return (pts - at[r - 1]) / (at[r] - at[r - 1]); }
  const toasts = [];
  const toast = (kind, text, extra = {}) => { toasts.push({ kind, text, ...extra }); listeners.forEach(fn => { try { fn('toast'); } catch (e) {} }); };
  const takeToasts = () => toasts.splice(0);
  function addStat(id, pts, raw) {
    if (!statDef(id) || !pts) return 0;
    const mult = raw ? 1 : (D.stats.conditions[S.condition]?.gain ?? 1);
    const n = Math.max(1, Math.round(pts * mult));
    const before = statRank(id);
    S.stats[id] += n;
    const after = statRank(id);
    toast('stat', `${statDef(id).name} ${'▲'.repeat(Math.min(3, Math.ceil(n / 2)))}`, { stat: id });
    if (after > before) toast('statrank', `Your ${statDef(id).name} has grown to "${statRankName(id, after)}"!`, { stat: id });
    return n;
  }
  function addStats(obj, raw) { Object.entries(obj || {}).forEach(([k, v]) => addStat(k, v, raw)); }
  function lacking(needs) {
    for (const [k, r] of Object.entries(needs || {})) if (statDef(k) && statRank(k) < r) return `${statDef(k).name}: ${statRankName(k, r)}`;
    return null;
  }
  function addYen(n) { S.yen = Math.max(0, S.yen + n); if (n) toast('yen', `${n > 0 ? '+' : '−'}¥${Math.abs(n).toLocaleString()}`); }

  /* ── Links ──
     A link file (links/<id>.js) pushes one object onto window.FEMC_GAME_LINKS:
       id, name, short, arcana, numeral, from, cast: { speakerId: 'Name' }
       kind: 'sees' | 'persona' | 'native' | 'visitor' | 'searcher' | 'frame'; romance: 'canon' | 'side' | null
       starts: 'M/D' (first possible day); closes: 'M/D'; needs: { academics|charm|courage: rank } to begin (P3P-style)
       gate: { R|S|H: n } memory fragments needed before they appear; hidden: true keeps them off the map
       home: { area (id or name from data/places.js), spot, slot: 'after' | 'evening', days: [0-6], hint }
       approach: one line shown on the map before you've met; invite: { ask, ok, no } texts, or null
       hangouts: [[lines], ...] story-free time that fills the bond meter between ranks
       ranks: 10 entries, each { after: 'M/D', title: '1: rookie', place, time, music, scene: [lines] } or { todo: '…' }
       forced: [rank numbers] that play as story on their `after` date (no meter); reversible: true allows reversal
       status: 'stub' for links that exist but aren't written (links/stubs.js).
       afterMax: [{ place, time, music, scene }, ...]  what spending time together plays after rank 10. They play in order, then
         rotate, at the link's usual spot (no meter, no rank-up; ifRoute still works). The entry's place/time are the scene's.
         A link that has *left* (see leavesAtMax / closes) can't be met any more; its afterMax become **traces**: from the day
         after `closes`, each entry shows up once, in order, as something to look at in the area its `place` names (e.g.
         'Paulownia Mall · Fountain' → Paulownia Mall; 'Iwatodai Dorm · …' → the dorm's evening menu), at the slot its `time`
         suggests (Evening / Night / Late → evening, anything else → after school / daytime). Each trace plays once.
       leavesAtMax: true | false  the link's rank 10 is its goodbye. Default: true when `closes` is 21 days or less after
         rank 10's `after` date (Ann: rank 10 10/23, closes 11/3; Shinjiro: 10/3, 10/4), so afterMax only plays as traces.
         Links that stay a while after MAX (Haru: 12/4 → 1/30) play afterMax normally until `closes`, then nothing.
       christmas: { place, time, music, scene, rank, early }  the Christmas Eve date (12/24 evening). The partner pick lists every
         met link with `christmas` that is on its romance route (route 'romance') at rank 8+ (the earliest romance turn; a
         link that has closed by 12/24, like Shinjiro, needs rank 10). `rank: n` overrides the rank; `early: n` lets a link be
         picked from rank n before any route is set (v1's field, unless the route is 'friend'). The pick is saved as
         route.choices.xmas = link id | 'alone' (plus the flag xmas-<id>) for the endings' variant. It never sets a route.
       summerHome / winterHome: { area, spot, slot, days, hint }  where the link is during Summer Break / Winter Break (calendar
         `breaks` ids). Links whose home is at school (a schoolOnly area like Gekkoukan) and have no break home are
         unreachable in person on breaks and holidays, so on those days they text "free right now?" invites more often
         (every day instead of every other day, and most days rather than about half).
       ranks[n].gate: { R|S|H: n } or { total: n }  memory fragments needed before that rank can play (Wren's 7, 8, 10).
       repair: [[lines], …] or [{ place, time, scene }]  a reversed link's own make-up scenes (in turn), instead of the generic one.
       farewell: [lines]  plays (early morning) the day after `closes` if the bond never reached rank 10. Without it the game
         plays a short generic goodbye so a link never vanishes silently (a text from visitors and searchers, narration
         for everyone else).
     Scene lines: see scene.js. Choices give ♪ with `notes` (0-3); `reverse: 1` pushes a reversible link. */
  const LINKS = {};
  const CAST = { solar: 'Solar', 'mitsuru-radio': 'Mitsuru · Radio', porter: '???', clerk: 'Clerk', ikutsuki: 'Ikutsuki', teacher: 'Teacher', fuuka: 'Fuuka', koromaru: 'Koromaru', ken: 'Ken', aigis: 'Aigis', elizabeth: 'Elizabeth', wren: 'Wren', kurosawa: 'Officer Kurosawa' };
  function indexLinks() {
    (W.FEMC_GAME_LINKS || []).forEach(l => {
      // A written file wins over a stub with the same id.
      if (LINKS[l.id] && l.status === 'stub') return;
      LINKS[l.id] = l; CAST[l.id] = l.short || l.name; Object.assign(CAST, l.cast || {});
    });
    Object.values(D.jobScenes).forEach(j => Object.assign(CAST, j.cast || {}));
    D.events.forEach(e => Object.assign(CAST, e.cast || {}));
  }
  const progress = id => (S.links[id] ||= { rank: 0, xp: 0, seen: [], rankDay: {}, hung: 0, push: 0, reversed: false });
  const isMet = id => S.met.includes(id);
  const written = l => (l.ranks || []).filter(r => r && r.scene).length;
  const linkName = l => (isMet(l.id) ? l.name : '???');
  // { R|S|H: n } per world, { total: n } across all three (S.route.frags counts what each world has found).
  function fragGateMet(gate) {
    return Object.entries(gate || {}).every(([w, n]) => (w === 'total' ? Object.values(S.route.frags).reduce((a, b) => a + (b || 0), 0) : (S.route.frags[w] || 0)) >= n);
  }
  // Where a link spends its free time today: summerHome / winterHome on those breaks, otherwise home.
  function homeOf(l, d = S.day) {
    const brk = D.cal.breaks.find(b => inRange(d, b.from, b.to));
    if (brk?.id === 'summer' && l.summerHome) return l.summerHome;
    if (brk?.id === 'winter' && l.winterHome) return l.winterHome;
    return l.home || {};
  }
  // A link whose rank 10 is its goodbye (see leavesAtMax in the header).
  function leavesAtMax(l) {
    if (typeof l.leavesAtMax === 'boolean') return l.leavesAtMax;
    const r10 = l.ranks?.[9]?.after;
    return !!(l.closes && r10 && dayOf(l.closes) - dayOf(r10) <= 21);
  }
  // Home-slot check shared by ranks, hangouts and afterMax.
  function atHome(l, d, slot) {
    const h = homeOf(l, d), info = dayInfo(d);
    const hs = h.slot === 'evening' ? 'evening' : 'after';
    if (hs !== slot || !(h.days || []).includes(info.dow)) return false;
    if (h.slot !== 'evening' && h.areaSchoolOnly !== false && areaById(h.area)?.schoolOnly && info.type !== 'school') return false;
    return true;
  }
  function linkStatus(l, d = S.day, slot = S.slot) {
    const p = progress(l.id);
    if (l.hidden || l.status === 'stub' || !l.ranks?.[0]?.scene) return { ok: false, reason: 'unwritten' };
    if (p.rank >= 10) {
      // After MAX: afterMax scenes with the person, unless they've left (then they're traces, see tracesAt).
      if (!(l.afterMax || []).length || leavesAtMax(l)) return { ok: false, reason: 'max' };
      if (l.closes && d >= dayOf(l.closes)) return { ok: false, reason: 'closed' };
      if (S.spent[`${d}-${slot}`]) return { ok: false, reason: 'spent' };
      if (!atHome(l, d, slot)) return { ok: false, reason: 'elsewhere' };
      return { ok: true, after: true };
    }
    const next = l.ranks[p.rank];
    if (!next?.scene) return { ok: false, reason: 'unwritten' };
    if (d < dayOf(l.starts || '4/8') || !fragGateMet(l.gate)) return { ok: false, reason: 'away' };
    if (l.closes && d >= dayOf(l.closes)) return { ok: false, reason: 'closed' };
    // A rank's own `gate` (memory fragments, e.g. Wren's { total: 12 }) holds it back until they're found.
    if (next.gate && !fragGateMet(next.gate)) return { ok: false, reason: 'later', gate: next.gate };
    // Story ranks play on their date (dueEvent); before that, time together is a hangout.
    if (l.forced?.includes(p.rank + 1) && next.after && d >= dayOf(next.after)) return { ok: false, reason: 'story' };
    if (l.forced?.includes(p.rank + 1) && !(l.hangouts || []).length) return { ok: false, reason: 'later' };
    if (p.rank === 0 && l.needs && lacking(l.needs)) return { ok: false, reason: 'needs', needs: lacking(l.needs) };
    if (S.spent[`${d}-${slot}`]) return { ok: false, reason: 'spent' };
    if (next.after && d < dayOf(next.after) && !l.forced?.includes(p.rank + 1)) return { ok: false, reason: 'later', when: next.after };
    if (!atHome(l, d, slot)) return { ok: false, reason: 'elsewhere' };
    return { ok: true };
  }
  function maxNotes(lines) {
    return (lines || []).reduce((sum, l) => {
      const opts = l.choose || l.route;
      if (opts) return sum + Math.max(0, ...opts.map(o => (o.notes || 0) + maxNotes(o.then)));
      if (l.then || l.else) return sum + Math.max(maxNotes(l.then), maxNotes(l.else));
      return sum;
    }, 0);
  }
  const need = (l, r) => (r <= 0 || !l.ranks[r]?.scene ? 0 : Math.max(4, Math.round(maxNotes(l.ranks[r].scene) * 0.8)));
  // Link homes name an area id or an area's display name.
  const areaById = id => D.places.areas.find(a => a.id === id || a.name === id);
  const linkPlace = l => { const h = homeOf(l), a = areaById(h.area); return `${a ? a.name : (h.area || '')}${h.spot ? ` · ${h.spot}` : ''}`; };
  const linksAt = (areaId, slot = S.slot) => Object.values(LINKS).filter(l => areaById(homeOf(l).area)?.id === areaId && !['unwritten', 'away', 'closed', 'max'].includes(linkStatus(l, S.day, slot).reason) && (linkStatus(l, S.day, slot).ok || ['spent', 'later', 'needs'].includes(linkStatus(l, S.day, slot).reason) && isHome(l, slot)));
  function isHome(l, slot = S.slot) { const h = homeOf(l), info = dayInfo(); return (h.slot === 'evening' ? 'evening' : 'after') === slot && (h.days || []).includes(info.dow); }
  // An afterMax entry's area (longest area name its place starts with) and slot.
  function areaOfPlace(place, fallback) {
    const hit = D.places.areas.filter(a => String(place || '').startsWith(a.name)).sort((a, b) => b.name.length - a.name.length)[0];
    return hit || areaById(fallback) || null;
  }
  const slotOfTime = t => (/Evening|Night|Late|Dark Hour/i.test(t || '') ? 'evening' : 'after');
  // Traces: afterMax scenes of a link that has left. The next one (in order, each once) waits in its area from the day after `closes`.
  function nextTrace(l, d = S.day) {
    const p = progress(l.id), list = l.afterMax || [];
    if (p.rank < 10 || !list.length || !leavesAtMax(l)) return null;
    const from = l.closes ? dayOf(l.closes) + 1 : (p.rankDay[10] ?? d) + 1;
    if (d < from || (p.after || 0) >= list.length) return null;
    const e = list[p.after || 0], a = areaOfPlace(e.place, l.home?.area);
    return a ? { link: l, i: p.after || 0, entry: e, area: a.id, slot: a.id === 'dorm' ? 'evening' : slotOfTime(e.time) } : null;
  }
  function tracesAt(areaId, slot = S.slot) {
    if (S.spent[`${S.day}-${slot}`]) return [];
    return Object.values(LINKS).map(l => nextTrace(l)).filter(t => t && t.area === areaId && t.slot === slot && (areaId === 'dorm' || D.places.areas.find(a => a.id === areaId)?.slots.includes(slot)));
  }
  // What to play when Solar spends time with a link: { kind: 'rank'|'hangout'|'repair'|'after'|'trace', r, scene, place, title }
  function linkScene(l, trace) {
    const p = progress(l.id), r = p.rank;
    const hang = () => { const pool = l.hangouts || []; return pool.length ? pool[(p.hung || 0) % pool.length] : [{ n: `Solar spent a while with ${l.short}. They talked about nothing in particular, which turned out to be the point.` }, { choose: [{ t: '(Mostly listen.)', notes: 2 }, { t: '(Tell them about your week.)', notes: 3 }, { t: '(Tease them a little.)', notes: 1 }] }]; };
    if (trace) return { kind: 'trace', r, scene: trace.entry.scene || [], place: trace.entry.place || linkPlace(l), time: trace.entry.time, music: trace.entry.music, title: trace.entry.title };
    if (r >= 10 && (l.afterMax || []).length) {
      const e = l.afterMax[(p.after || 0) % l.afterMax.length];
      return { kind: 'after', r, scene: e.scene || [], place: e.place || linkPlace(l), time: e.time, music: e.music, title: e.title };
    }
    if (p.reversed && (l.repair || []).length) { const e = l.repair[(p.repairs || 0) % l.repair.length]; return { kind: 'repair', r, scene: Array.isArray(e) ? e : e.scene || [], place: (!Array.isArray(e) && e.place) || linkPlace(l), time: !Array.isArray(e) ? e.time : undefined }; }
    if (p.reversed) return { kind: 'repair', r, scene: [{ n: `${l.short} didn't quite look at her at first. Solar stayed anyway, and said the thing she should have said last time, and after a while the silence between them stopped being the bad kind.` }], place: linkPlace(l) };
    if ((p.ready === r && r > 0) || (l.forced?.includes(r + 1) && r > 0 && !(l.ranks[r]?.after && S.day >= dayOf(l.ranks[r].after)))) return { kind: 'hangout', r, scene: hang(), place: linkPlace(l), story: l.forced?.includes(r + 1) };
    const rank = l.ranks[r];
    return { kind: 'rank', r, scene: rank.scene, place: rank.place || linkPlace(l), title: rank.title, music: rank.music };
  }
  // After a link scene: ♪ into the meter; a full meter (or a story rank) ranks up. Returns { up, reversed, from, to, req, rank }.
  function finishLink(l, kind, r, gained) {
    const p = progress(l.id);
    if (!isMet(l.id)) S.met.push(l.id);
    if (!S.registered.includes(l.id)) S.registered.push(l.id);
    S.spent[`${S.day}-${S.slot}`] = l.id;
    p.lastDay = S.day;
    if (kind === 'repair') { p.reversed = false; p.push = 0; p.repairs = (p.repairs || 0) + 1; S.flags[`reversed-${l.id}`] = false; save(); return { repaired: true }; }
    if (kind === 'after' || kind === 'trace') { p.after = (p.after || 0) + 1; save(); return { after: true }; }
    if (p.push >= 2 && l.reversible && !p.reversed) { p.reversed = true; S.flags[`reversed-${l.id}`] = true; delete p.ready; save(); return { reversed: true, rank: p.rank }; }
    const story = l.ranks[r]?.story || l.forced?.includes(r + 1);
    if (story && kind === 'hangout') { p.hung = (p.hung || 0) + 1; p.xp = (p.xp || 0) + gained; save(); return { up: false, req: 0 }; }
    const req = story ? 0 : need(l, r);
    const from = Math.min(p.xp || 0, req);
    p.xp = (p.xp || 0) + gained;
    if (kind === 'hangout') p.hung = (p.hung || 0) + 1; else if (!p.seen.includes(r)) p.seen.push(r);
    const up = p.xp >= req;
    if (up) { p.rank = r + 1; p.rankDay[p.rank] = S.day; p.xp = 0; delete p.ready; } else p.ready = r;
    save();
    return { up, from, to: Math.min(from + gained, req), req, rank: p.rank };
  }

  /* ── Effects and branches used by scenes ── */
  const flag = id => !!S.flags[id];
  // { flag: { id: true } } (the usual form), or { flag: 'id' } / { flag: ['a', 'b'] } to set flags to true.
  function setFlags(v) {
    if (typeof v === 'string') S.flags[v] = true;
    else if (Array.isArray(v)) v.forEach(k => { if (typeof k === 'string') S.flags[k] = true; });
    else if (v && typeof v === 'object') Object.assign(S.flags, v);
  }
  function tally(obj) {
    for (const [k, v] of Object.entries(obj || {})) {
      if (typeof v === 'number') S.route.tally[k] = (S.route.tally[k] || 0) + v; else S.route.choices[k] = v;
    }
  }
  function worldOf(fragId) { return Object.entries(D.flags.worlds).find(([, w]) => fragId.startsWith(w.prefix))?.[0] || null; }
  function fragmentInfo(id) { return (D.battle.memories || []).find(m => m.id === id) || { id, title: id.replace(/^[a-z]+-/, '').replace(/-/g, ' '), text: '', world: worldOf(id) }; }
  function addFragment(id, quiet) {
    if (!id || S.fragments.includes(id)) return false;
    S.fragments.push(id);
    const w = worldOf(id);
    if (w) {
      S.route.frags[w] = (S.route.frags[w] || 0) + 1;
      if (D.flags.doors.includes(S.route.frags[w])) S.route.doorsDue.push(`${w}${S.route.frags[w]}`);
    }
    if (!quiet) toast('fragment', `Memory fragment: ${fragmentInfo(id).title}`, { id });
    return true;
  }
  function addItem(id, n = 1) { S.inventory[id] = Math.max(0, (S.inventory[id] || 0) + n); if (!S.inventory[id]) delete S.inventory[id]; }
  function effect(line) {
    let did = false;
    if (line.stat) { addStats(line.stat); did = true; }
    if (line.yen) { addYen(line.yen); did = true; }
    if (line.flag) { setFlags(line.flag); did = true; }
    if (line.tally) { tally(line.tally); did = true; }
    if (line.fragment) { addFragment(line.fragment); did = true; }
    if (line.item) { Object.entries(line.item).forEach(([k, v]) => addItem(k, v)); did = true; }
    if (line.register) { if (!S.registered.includes(line.register)) { S.registered.push(line.register); if (!line.quiet) toast('register', `Registered to the Compendium: ${CAST[line.register] || line.register}`); } did = true; }
    if (line.join) { if (!S.joined.includes(line.join)) { S.joined.push(line.join); S.flags[`joined-${line.join}`] = true; toast('join', `${CAST[line.join] || line.join} joined S.E.E.S.`); } did = true; }
    if (line.end) { S.flags['the-end'] = line.end; did = true; }
    if (line.unlock) { S.unlocked[line.unlock] = true; if (line.unlock === 'tartarus') toast('unlock', 'Tartarus is open at night.'); did = true; }
    if (did) save();
    return did;
  }
  function branch(line, linkId) {
    let ok = null;
    if (line.ifRank) ok = Object.entries(line.ifRank).every(([id, r]) => progress(id).rank >= r);
    else if (line.ifStat) ok = Object.entries(line.ifStat).every(([id, r]) => statRank(id) >= r);
    else if (line.ifFlag) ok = [].concat(line.ifFlag).every(flag);
    else if (line.ifMet) ok = [].concat(line.ifMet).every(isMet);
    else if (line.ifRoute) ok = linkId && progress(linkId).route === line.ifRoute;
    else if (line.ifRomance) ok = progress(line.ifRomance).route === 'romance';
    else if (line.ifReversed) ok = [].concat(line.ifReversed).every(id => !!progress(id).reversed);
    // Dates: ifAfter is "on or after" (like a rank's `after`), ifBefore is "strictly before"; they're each other's else.
    else if (line.ifAfter) ok = S.day >= dayOf(line.ifAfter);
    else if (line.ifBefore) ok = S.day < dayOf(line.ifBefore);
    if (ok === null) return null;
    return (ok ? line.then : line.else) || [];
  }
  // A choice can name its link (o.link). In a story event (now = true) a push that reaches 2 reverses the link at once;
  // in a link's own scene the reversal is settled when the scene ends (finishLink).
  function applyChoice(o, linkId, now) {
    now = now || !!o.link;
    linkId = o.link || linkId;
    if (o.flag) setFlags(o.flag);
    if (o.tally) tally(o.tally);
    if (o.stat) addStats(o.stat);
    if (typeof o.route === 'string' && linkId) progress(linkId).route = o.route;
    if (o.reverse && linkId) {
      const p = progress(linkId), l = LINKS[linkId];
      p.push = (p.push || 0) + o.reverse;
      if (now && l?.reversible && p.push >= 2 && !p.reversed) { p.reversed = true; S.flags[`reversed-${linkId}`] = true; delete p.ready; toast('reverse', `Your bond with ${l.short} has turned…`); }
    }
    save();
  }

  /* ── Portraits, names, art ── */
  const PORTRAITS = () => W.FEMC_PORTRAITS || {};
  const SAME_FACE = { 'hx-flower': 'sunghoon', 'hx-jacket': 'jay', 'hx-tall': 'heeseung' };
  const faceId = id => SAME_FACE[id] || id;
  // Speakers shown only as a black silhouette, drawn from someone's portrait: { speaker: portrait id }.
  const SILHOUETTES = { porter: 'wren' };
  const silhouette = id => SILHOUETTES[id] || null;
  function portrait(id, face) {
    // Solar's art wears the S.E.E.S. armband, so she has no portrait until she's given one.
    if (id === 'solar' && !S.flags.armband) return null;
    id = faceId(id);
    const have = PORTRAITS()[id] || [];
    const b = face && face.replace(/-\d+$/, '');
    const CLOSE = { blushing: ['flustered', 'happy'], flustered: ['blushing', 'happy'], serious: ['sad', 'neutral'], happy: ['neutral'] };
    const pick = [face, b, ...(CLOSE[b] || []), 'neutral', have[0]].find(f => f && have.includes(f));
    return pick ? `${base}assets/femc/portraits/${id}/${pick}.webp` : null;
  }
  const scale = id => (W.FEMC_PORTRAIT_SCALE || {})[faceId(id)] || 1;
  const name = id => CAST[id] || (id ? id[0].toUpperCase() + id.slice(1) : '');
  function tarot(l) { const k = String(l?.arcana || '').toLowerCase().replace(/[^a-z0-9]/g, ''); return (W.FEMC_TAROT || []).includes(k) ? `${base}assets/femc/tarot/${k}.webp` : null; }
  function background(place = '', time = '', override) {
    if (override) return { url: `${base}assets/femc/bg/${override}.webp`, mood: '' };
    const rule = D.places.bg.find(([at]) => at[0] === '*' ? place.includes(at.slice(1)) : place.startsWith(at));
    if (!rule) return null;
    const [, day, evening, look] = rule;
    const late = /Evening|Night|PM|AM/.test(time) && !/Morning/.test(time);
    const special = /Dark Hour|Velvet|Tartarus/.test(place + time);
    const img = late && evening ? evening : day;
    return { url: `${base}assets/femc/bg/${img}.webp`, mood: look || (special || (late && evening) ? '' : late ? 'night' : '') };
  }
  function moodFor(place = '', time = '') {
    if (/Velvet/.test(place)) return 'velvet';
    if (/Dark Hour|Tartarus/.test(place + time)) return 'mystery';
    if (/^Gekkoukan/.test(place)) return 'school';
    if (/^(Paulownia Mall|Iwatodai Strip|Port Island Station)/.test(place)) return 'city';
    if (/Evening|Night/.test(time)) return 'night';
    return 'joy';
  }
  const sub = t => String(t ?? '').replace(/\{name\}/g, 'Solar');
  let dateOverride = null;
  function setDate(md) { const d = dayOf(md); if (d >= S.day || S.phase === 'prologue') { S.day = d; save(); } }
  const dateLabel = () => { const i = dayInfo(); return { md: i.md, day: i.day }; };

  /* ── Activities, shops, books ── */
  function activityOk(a, slot = S.slot) {
    const info = dayInfo();
    if (!a.slots.includes(slot)) return { ok: false, why: 'Closed now' };
    if (a.days && !a.days.includes(info.dow)) return { ok: false, why: 'Not today' };
    if (areaById(a.area)?.schoolOnly && info.type !== 'school') return { ok: false, why: 'School’s out' };
    if (a.needs && lacking(a.needs)) return { ok: false, why: `Needs ${lacking(a.needs)}` };
    if (a.cost && S.yen < a.cost) return { ok: false, why: 'Not enough yen' };
    if (S.spent[`${S.day}-${slot}`] && !a.shop) return { ok: false, why: 'No time left' };
    return { ok: true };
  }
  // Does an activity; returns { text, place } for the narration scene.
  function doActivity(a) {
    const info = dayInfo();
    if (a.cost) addYen(-a.cost);
    let stats = a.stats;
    const w = a.weather?.[info.weather];
    if (w) stats = w.stats;
    if (a.random) { const k = Object.keys(a.random); const pick = k[Math.floor(Math.random() * k.length)]; stats = { [pick]: a.random[pick] }; }
    let text = a.lines ? a.lines[Math.floor(Math.random() * a.lines.length)] : '';
    if (a.fortune) {
      const f = D.places.fortunes[Math.floor(Math.random() * D.places.fortunes.length)];
      text = `She unfolded the slip. “${f.t}”`;
      if (f.stats) stats = f.stats;
      if (f.cond && S.condition === 'good') S.condition = f.cond;
    }
    if (stats) addStats(stats);
    if (a.cures?.includes(S.condition)) { S.condition = 'good'; toast('cond', 'She feels better.'); }
    S.spent[`${S.day}-${S.slot}`] = `act:${a.id}`;
    save();
    return { text: (w ? `${w.label}. ` : '') + text, place: `${areaById(a.area).name} · ${a.spot}` };
  }
  function shopStock(id) {
    const B = D.battle, cfg = D.places.shops[id], shop = B.shops?.[cfg?.battleShop];
    if (!shop) return [];
    const tier = 1 + S.tartarus.bosses.length;
    const out = [];
    if (shop.sells.includes('item')) (shop.stock || Object.keys(B.items || {})).forEach(k => { const it = B.items?.[k]; if (it && (it.tier || 1) <= tier) out.push({ id: k, kind: 'item', name: it.name, price: it.price, desc: it.desc }); });
    ['weapon', 'armor', 'acc'].forEach(kind => {
      if (!shop.sells.includes(kind)) return;
      Object.entries(B.gear || {}).forEach(([k, g]) => { if (g.kind === kind && (g.tier ?? 1) <= tier && (g.tier ?? 1) > 0 && g.price) out.push({ id: k, kind, name: g.name, price: g.price, desc: g.desc || '', who: g.who || g.for || '' }); });
    });
    return out.slice(0, 18);
  }
  function buy(entry) {
    if (S.yen < entry.price) return false;
    addYen(-entry.price);
    if (entry.kind === 'item') addItem(entry.id, 1); else if (!S.gear.includes(entry.id)) S.gear.push(entry.id);
    if (entry.kind === 'book') S.books.owned.push(entry.id);
    save();
    return true;
  }
  const bookById = id => D.places.books.find(b => b.id === id);
  function readTonight() {
    const id = S.books.reading || S.books.owned.find(b => !S.books.done.includes(b));
    const b = bookById(id);
    if (!b) return null;
    S.books.reading = id;
    S.books.progress[id] = (S.books.progress[id] || 0) + 1;
    let finished = false;
    if (S.books.progress[id] >= b.nights) { S.books.done.push(id); S.books.reading = null; addStats(b.stats); finished = true; }
    S.spent[`${S.day}-${S.slot}`] = 'read';
    save();
    return { book: b, finished, night: S.books.progress[id] };
  }

  /* ── Jobs ── */
  function jobVisible(j) { const u = j.unlock || {}; return (!u.after || S.day >= dayOf(u.after)) && fragGateMet(u.frags); }
  const jobState = id => (S.jobs[id] ||= { hired: false, shifts: 0, beats: [] });
  function jobOk(j, slot = S.slot) {
    const info = dayInfo();
    if (!jobVisible(j)) return { ok: false, why: 'Not hiring' };
    if (j.slot !== slot) return { ok: false, why: j.slot === 'evening' ? 'Evening shifts' : 'Daytime shifts' };
    if (!j.days.includes(info.dow) && !(j.offDaysOnly && info.type === 'off' && j.days.includes(0))) return { ok: false, why: 'No shift today' };
    if (j.offDaysOnly && info.type !== 'off') return { ok: false, why: 'Days off only' };
    if (S.spent[`${S.day}-${slot}`]) return { ok: false, why: 'No time left' };
    if (S.condition === 'sick') return { ok: false, why: 'Too sick to work' };
    return { ok: true };
  }
  function hire(j) { const why = lacking(j.needs); if (why) return why; jobState(j.id).hired = true; save(); return null; }
  function shiftScene(j) {
    const st = jobState(j.id), sc = D.jobScenes[j.id] || {};
    const n = st.shifts + 1;
    const beat = (sc.beats || []).find((b, i) => !st.beats.includes(i) && n >= (b.at || 1) && (!b.after || S.day >= dayOf(b.after)) && (b.met || []).every(isMet));
    if (beat) return { beat, index: sc.beats.indexOf(beat), scene: beat.scene };
    const pool = sc.shifts || [];
    return { scene: pool.length ? pool[st.shifts % pool.length] : [{ n: `The shift at ${j.name} went by the way shifts do, slowly and then all at once.` }] };
  }
  function finishShift(j, pick) {
    const st = jobState(j.id);
    st.shifts += 1;
    if (pick.beat) { st.beats.push(pick.index); if (pick.beat.lean) tally({ [`lean.${pick.beat.lean}`]: 1 }); }
    addYen(j.pay); addStats(j.stats);
    S.spent[`${S.day}-${S.slot}`] = `job:${j.id}`;
    save();
  }

  /* ── Story events ── */
  const SLOT_FOR = { morning: 'morning', lunch: 'lunch', after: 'after', evening: 'evening', darkhour: 'evening', early: 'early', late: 'late' };
  function hasBattle(lines) { return (lines || []).some(l => l.battle || hasBattle(l.then) || hasBattle(l.else) || (l.choose || []).some(o => hasBattle(o.then))); }
  function dueEvent(slot = S.slot, d = S.day) {
    const md = mdOf(d);
    const ev = D.events.find(e => (e.unlock ? d >= dayOf(e.date) && unlockMet(e.unlock, d) : e.date === md) && SLOT_FOR[e.slot || 'evening'] === slot && !S.events.includes(e.id) && (!e.flag || flag(e.flag)));
    if (ev) return { kind: 'event', ev };
    // Door scenes (data/flags.js doorScenes, written in story-act5.js): one a night, late, once a world's 3rd/6th/9th
    // memory fragment has made it due.
    if (slot === 'late' && S.phase === 'play') { const key = doorDue(d); if (key) return { kind: 'door', key }; }
    // Full-moon operations with no event of their own.
    const opTonight = D.cal.ops.some(o => o.date === md && !S.tartarus.bosses.includes(o.op) && !S.flags[`op-${o.op}`]);
    if (slot === 'evening') {
      const ops = D.cal.ops.filter(o => o.date === md && !S.tartarus.bosses.includes(o.op) && !(S.flags[`op-${o.op}`]));
      const covered = D.events.some(e => e.date === md && hasBattle(e.scene));
      if (ops.length && !covered) return { kind: 'op', ops };
    }
    // Christmas Eve: the partner pick (12/24 evening; on the late slot if a story event took the evening).
    if (md === XMAS && ['evening', 'late'].includes(slot) && !S.route.choices.xmas && S.phase === 'play' && (slot === 'evening' || S.spent[`${d}-evening`])) return { kind: 'christmas' };
    // A link that closed before rank 10 says goodbye the morning after (see `farewell`).
    if (slot === 'early') { const l = farewellDue(d); if (l) return { kind: 'farewell', link: l }; }
    // Story ranks that happen on a date (a link's `forced`).
    for (const l of Object.values(LINKS)) {
      const p = progress(l.id);
      if (!l.forced?.includes(p.rank + 1)) continue;
      const rank = l.ranks[p.rank];
      if (opTonight) continue;
      if (rank?.scene && rank.after && d >= dayOf(rank.after) && fragGateMet(rank.gate) && (l.home?.slot === 'evening' ? 'evening' : 'after') === slot) return { kind: 'link', link: l };
    }
    return null;
  }
  const markEvent = id => { if (!S.events.includes(id)) S.events.push(id); save(); };
  // An event's `unlock` holds it until a condition is met, then it plays on the first matching slot on or after its `date`:
  //   unlock: { fragments: { R: 3 } | { total: 12 }, flags: ['id', …], ranks: { linkId: n }, until: 'M/D' }
  function unlockMet(u, d = S.day) {
    if (u.until && d > dayOf(u.until)) return false;
    if (u.fragments && !fragGateMet(u.fragments)) return false;
    if (u.flags && ![].concat(u.flags).every(flag)) return false;
    if (u.ranks && !Object.entries(u.ranks).every(([id, r]) => progress(id).rank >= r)) return false;
    return true;
  }
  function doorDue(d = S.day) {
    const scenes = D.flags.doorScenes || {};
    if (S.route.doorNight === d) return null;
    return S.route.doorsDue.find(k => scenes[k] && !S.route.doorsSeen.includes(k)) || null;
  }
  function markDoor(key) { if (!S.route.doorsSeen.includes(key)) S.route.doorsSeen.push(key); S.route.doorNight = S.day; save(); }
  /* ── The end of the year ── */
  // { end: 'id' } in a scene (or the solstice's route-bad flag) stops the calendar: the game jumps to the last night (1/31,
  // late), where the endings event plays, then the end screen.
  const endingDue = () => !!(S.flags['the-end'] || S.flags['route-bad']) && S.day < END();
  function jumpToEnd() { S.day = END(); S.slot = 'late'; S.tonight = null; save(); }
  function endingName() {
    const f = S.flags;
    return f['route-bad'] ? 'the last stop' : f['true-final'] ? 'I am thou' : f['route-R'] ? 'where it begins' : f['route-S'] ? 'low tide' : f['route-H'] ? 'the count' : 'here';
  }
  const CLEARS_KEY = 'kg-femc-revamp-clears';
  function recordClear() {
    let list = []; try { list = JSON.parse(lsGet(CLEARS_KEY) || '[]') || []; } catch (e) {}
    if (!list.some(x => x.run === S.runId)) { list.push({ run: S.runId, ending: endingName(), xmas: S.route.choices.xmas || null, at: Date.now(), ngp: S.ngp || 0 }); lsSet(CLEARS_KEY, JSON.stringify(list)); }
    return list;
  }
  // New Game+: a fresh year that keeps Solar's social stats, half her yen, the Compendium and the books she owns. The battle
  // game copies this playthrough's levels, tree and gear into the new one on its first fight (request.carryFrom).
  function newGamePlus() {
    const old = S;
    S = fresh(); S.started = true; S.phase = 'prologue'; S.runId = newRunId();
    S.stats = { ...old.stats }; S.yen = Math.max(D.stats.startYen, Math.round(old.yen / 2)); S.registered = [...old.registered];
    S.books.owned = [...old.books.owned]; S.books.done = [...old.books.done]; S.ngp = (old.ngp || 0) + 1; S.ngFrom = old.runId; S.flags.ngplus = true;
    save();
  }

  /* ── Goodbyes and Christmas Eve ── */
  function farewellDue(d = S.day) {
    return Object.values(LINKS).find(l => {
      if (!l.closes || d <= dayOf(l.closes) || l.status === 'stub' || !isMet(l.id)) return false;
      const p = progress(l.id);
      return p.rank > 0 && p.rank < 10 && !p.farewell;
    }) || null;
  }
  // The scene for a link that closed before rank 10: its own `farewell`, or a generic goodbye (no plot).
  function farewellScene(l) {
    const p = progress(l.id);
    p.farewell = S.day; save();
    if (Array.isArray(l.farewell) && l.farewell.length) return l.farewell;
    const spot = homeOf(l).spot ? `${homeOf(l).spot.toLowerCase()}` : 'usual spot';
    const lines = [{ n: `${l.short} wasn't at the ${spot} anymore. Solar noticed it the way you notice a clock that has stopped, late and all at once.` }];
    if (['visitor', 'searcher'].includes(l.kind)) lines.push({ phone: [{ from: l.id, t: 'hey. i had to go. i wanted to say it properly and i didn\u2019t get the chance' }, { from: l.id, t: 'thank you for the time we had. really. take care of yourself' }], contact: l.name });
    lines.push({ n: 'Whatever the two of them had been building stopped where it stopped. She kept what there was of it.' });
    return lines;
  }
  const XMAS = '12/24';
  // Who can be picked on Christmas Eve (see `christmas` in the header): romance route, the rank it needs, not reversed.
  function christmasOptions(d = S.day) {
    return Object.values(LINKS).filter(l => {
      const c = l.christmas; if (!c || !isMet(l.id) || l.status === 'stub') return false;
      const p = progress(l.id); if (p.reversed) return false;
      const closed = l.closes && dayOf(l.closes) <= d;
      const need = c.rank ?? (closed ? 10 : 8);
      if (p.route === 'romance' && p.rank >= need) return true;
      return !!(c.early && p.rank >= c.early && !p.route);
    });
  }
  // Records the pick. id = a link id, or null / 'alone'. Sets the endings' variant only; never a route (plot rule).
  function pickChristmas(id) {
    const who = id && LINKS[id] ? id : 'alone';
    S.route.choices.xmas = who;
    if (who !== 'alone') S.flags[`xmas-${who}`] = true;
    S.spent[`${S.day}-evening`] = `xmas:${who}`;
    save();
    return who === 'alone' ? null : LINKS[who];
  }

  /* ── Class and exams ── */
  function classQuestion() {
    const m = dayInfo().date.getMonth() + 1;
    const pool = D.q.classes.filter(q => (q.months || []).includes(m) && !S.classSeen.includes(q.id));
    const all = pool.length ? pool : D.q.classes.filter(q => !S.classSeen.includes(q.id));
    return all.length ? all[Math.floor(seeded(S.day * 3 + SLOT_ORDER.indexOf(S.slot)) * all.length)] : null;
  }
  function answerClass(q, i) {
    S.classSeen.push(q.id);
    const right = i === q.correct;
    if (right) addStats({ charm: 2, academics: 1 });
    save();
    return right;
  }
  function examQuestions(e) {
    const pool = D.q.exams[e.id]?.questions || [];
    const per = Math.ceil(pool.length / e.count);
    return pool.slice(e.index * per, e.index * per + per);
  }
  function answerExam(e, q, i) {
    const x = (S.exams[e.id] ||= { answers: {}, posted: false });
    x.answers[q.id] = i === q.correct;
    save();
    return x.answers[q.id];
  }
  // The ranking board: Academics carries most of it, the answers move you up or down. 3rd-years only.
  function examResult(id) {
    const x = S.exams[id] || { answers: {} };
    const total = (D.q.exams[id]?.questions || []).length || 1;
    const right = Object.values(x.answers).filter(Boolean).length;
    const acc = right / total, ac = (statRank('academics') - 1) / 5;
    const score = Math.round(100 * (0.55 * acc + 0.45 * ac) + (seeded(dayOf('5/1') + id.length) * 6 - 3));
    const SECOND_YEARS = ['Kenji Tomochika', 'Kazushi Miyamoto', 'Yuko Nishiwaki', 'Hidetoshi Odagiri'];
    const names = (D.q.rivals || []).filter(n => !SECOND_YEARS.includes(n));
    const board = names.map((n, i) => ({ name: n, score: Math.round(40 + seeded(i * 17 + id.length * 3) * 58) }));
    board.push({ name: 'Solar', score: Math.max(0, Math.min(100, score)), me: true });
    board.sort((a, b) => b.score - a.score || (a.me ? -1 : 1));
    const place = board.findIndex(b => b.me) + 1;
    return { right, total, score, place, of: board.length, board };
  }
  function postExam(id) {
    const x = (S.exams[id] ||= { answers: {}, posted: false });
    if (x.posted) return examResult(id);
    const r = examResult(id);
    x.posted = true; x.place = r.place; x.right = r.right; x.total = r.total;
    if (r.place <= 3) addStats({ charm: 6, academics: 2 }, true);
    else if (r.place <= 10) addStats({ charm: 3 }, true);
    save();
    return r;
  }

  /* ── Phone ── */
  function deliverTexts() {
    const md = mdOf(S.day);
    for (const t of D.texts.texts) {
      if (S.phone.done.includes(t.id)) continue;
      if (dayOf(t.date) > S.day) continue;
      if (S.day > dayOf(t.date) + 2) { S.phone.done.push(t.id); continue; }
      if (t.slot && t.slot !== S.slot && dayOf(t.date) === S.day) continue;
      if (t.flag && !flag(t.flag)) continue;
      if (t.rank && !Object.entries(t.rank).every(([id, r]) => progress(id).rank >= r)) continue;
      if (t.met && !t.met.every(isMet)) continue;
      S.phone.done.push(t.id);
      const th = (S.phone.threads[t.thread] ||= []);
      t.msgs.forEach(m => th.push({ ...m, d: S.day }));
      S.phone.unread[t.thread] = (S.phone.unread[t.thread] || 0) + t.msgs.length;
      if (t.reply) S.phone.pending[t.thread] = t.id;
      toast('text', `${D.texts.threads[t.thread] || name(t.thread)}: ${t.msgs[0].t}`, { thread: t.thread });
      void md;
      break;
    }
    maybeInvite();
    save();
  }
  function replyText(thread, i) {
    const t = D.texts.texts.find(x => x.id === S.phone.pending[thread]);
    if (!t) return;
    const o = t.reply[i];
    const th = S.phone.threads[thread];
    if (!o.silent) th.push({ from: 'solar', t: o.t, d: S.day });
    (o.then || []).forEach(m => th.push({ ...m, d: S.day }));
    if (o.link && o.notes && isMet(o.link)) progress(o.link).xp += o.notes;
    delete S.phone.pending[thread];
    save();
  }
  // "Free right now?": a met friend whose next rank is ready but who isn't at their usual spot.
  // On breaks and holidays, links whose home is at school (and who have no break home) are stranded: they ask more often.
  function stranded(l, d = S.day) { const h = homeOf(l, d); return h.slot !== 'evening' && !!areaById(h.area)?.schoolOnly; }
  function maybeInvite() {
    if (!['after', 'evening'].includes(S.slot) || S.phone.invite) return;
    const info = dayInfo(), holiday = info.type === 'off' && !!(info.brk || info.holiday);
    const ready = Object.values(LINKS).filter(l => l.invite && isMet(l.id) && !progress(l.id).reversed && linkStatus(l).reason === 'elsewhere');
    const away = holiday ? ready.filter(l => stranded(l)) : [];
    if (away.length) { if (S.day - S.phone.lastInvite < 1 || seeded(S.day * 7 + S.slot.length) < 0.2) return; }
    else if (S.day - S.phone.lastInvite < 2 || !ready.length || seeded(S.day * 7 + S.slot.length) < 0.45) return;
    const pool = away.length ? away : ready;
    const l = pool[Math.floor(seeded(S.day * 13 + S.slot.length) * pool.length)];
    const ask = l.invite.ask[Math.floor(seeded(S.day) * l.invite.ask.length)];
    S.phone.invite = { link: l.id, d: S.day, slot: S.slot };
    S.phone.lastInvite = S.day;
    const th = (S.phone.threads[l.id] ||= []);
    th.push({ from: l.id, t: ask, d: S.day, invite: true });
    S.phone.unread[l.id] = (S.phone.unread[l.id] || 0) + 1;
    toast('text', `${l.short}: ${ask}`, { thread: l.id, invite: true });
  }
  function answerInvite(yes) {
    const inv = S.phone.invite;
    if (!inv) return null;
    const l = LINKS[inv.link];
    const pool = yes ? l.invite.ok : l.invite.no;
    S.phone.threads[l.id].push({ from: 'solar', t: yes ? 'sure. where?' : 'can’t right now, sorry', d: S.day }, { from: l.id, t: pool[Math.floor(Math.random() * pool.length)], d: S.day });
    S.phone.invite = null;
    save();
    return yes ? l : null;
  }
  function expireInvite() { const inv = S.phone.invite; if (inv && (inv.d !== S.day || inv.slot !== S.slot)) S.phone.invite = null; }
  const unread = () => Object.values(S.phone.unread).reduce((a, b) => a + b, 0);

  /* ── Time ── */
  function freeSlotSpent(slot = S.slot) { return !!S.spent[`${S.day}-${slot}`]; }
  // Moves to the next time slot (or the next day). Returns { newDay }.
  function nextSlot() {
    const info = dayInfo(), list = slotsFor(info);
    const i = list.indexOf(S.slot);
    if (i >= 0 && i < list.length - 1) { S.slot = list[i + 1]; expireInvite(); deliverTexts(); save(); return { newDay: false }; }
    return sleep();
  }
  function sleep() {
    // Overnight: Tartarus tires her out; resting clears it.
    const t = S.tonight;
    if (t === 'tartarus') S.condition = S.condition === 'tired' || S.condition === 'sick' ? 'sick' : 'tired';
    else if (t === 'rest') S.condition = S.condition === 'sick' ? 'tired' : seeded(S.day) < 0.25 ? 'great' : 'good';
    else if (S.condition === 'great') S.condition = 'good';
    else if (S.condition === 'tired' && seeded(S.day + 5) < 0.5) S.condition = 'good';
    S.tonight = null;
    if (S.day >= END()) { S.slot = 'late'; save(); return { newDay: false, end: true }; }
    S.day += 1; S.slot = 'early';
    // Don't let old spent markers pile up forever.
    Object.keys(S.spent).forEach(k => { if (+k.split('-')[0] < S.day - 1) delete S.spent[k]; });
    expireInvite(); deliverTexts(); save();
    return { newDay: true };
  }

  /* ── Tartarus and the battle handoff (see FEMC-GAME-HANDOFF.md) ── */
  const partyDef = () => D.stats.party;
  function available(d = S.day) {
    return partyDef().filter(m => d >= dayOf(m.joins) && (!m.leaves || d <= dayOf(m.leaves)) && (m.leader || S.joined.includes(m.id) || (!m.flag && m.id !== 'junpei') || (m.flag && flag(m.flag)))).map(m => m.id);
  }
  const navigator = (d = S.day) => (D.stats.navigators.find(n => d >= dayOf(n.from) && (!n.to || d <= dayOf(n.to))) || {}).id || null;
  function tartarusOk() {
    const info = dayInfo();
    if (!S.unlocked.tartarus) return { ok: false, why: 'Not yet' };
    if (info.moon.full) return { ok: false, why: 'Full moon tonight' };
    if (info.exam || examOn(S.day + 1)) return { ok: false, why: 'Exams. Mitsuru says no.' };
    if (S.condition === 'sick') return { ok: false, why: 'Too sick' };
    if (S.spent[`${S.day}-evening`]) return { ok: false, why: 'No time left' };
    return { ok: true };
  }
  function floorCap(d = S.day) { let cap = 0; D.cal.floorCaps.forEach(([md, f]) => { if (d >= dayOf(md)) cap = f; }); return cap; }
  function makeHandoff(kind, req) {
    const info = dayInfo();
    const id = `h${S.day}-${Date.now().toString(36)}`;
    const party = (req.party || S.tartarus.lastParty || ['solar', ...available().filter(x => x !== 'solar').slice(0, 3)]).filter(x => available().includes(x));
    const h = {
      v: 1, id, status: 'pending', from: 'game', kind, createdAt: new Date().toISOString(),
      returnTo: 'femc-game.html?from=battle',
      date: { day: S.day, md: info.md, iso: info.date.toISOString().slice(0, 10), weekday: info.day, moon: info.moon.name, fullMoon: info.moon.full },
      request: {
        op: req.op || null, ops: req.ops || null, script: req.script || null, segment: req.segment || null,
        title: req.title || null, desc: req.desc || null, notes: req.notes || null, forced: !!req.forced, canRetreat: !req.forced,
        party: party.includes('solar') ? party : ['solar', ...party].slice(0, 4),
        available: available(), navigator: navigator(),
        fatigue: { solar: S.condition }, condition: S.condition,
        yen: S.yen, items: { ...S.inventory }, gear: [...S.gear],
        maxFloor: floorCap(), bestFloor: S.tartarus.maxFloor, bossesCleared: [...S.tartarus.bosses],
        fragments: [...S.fragments], fragmentsOpen: S.day >= dayOf(D.cal.fragmentsFrom || '5/16'),
        run: S.runId, carryFrom: S.ngFrom || null, route: S.route.choices.solstice ?? null, trueReady: !!(S.flags['true-final'] || S.flags['true-path']),
        routeFlags: ['route-R', 'route-S', 'route-H', 'route-stay', 'route-true', 'route-bad', 'true-final', 'true-fallback'].filter(flag),
        social: { stats: { ...S.stats }, ranks: Object.fromEntries(Object.entries(S.links).filter(([, p]) => p.rank > 0).map(([k, p]) => [k, p.rank])) },
        difficulty: null
      },
      result: null
    };
    S.handoffId = id;
    lsSet(HANDOFF_KEY, JSON.stringify(h));
    save();
    return h;
  }
  const readHandoff = () => { try { return JSON.parse(lsGet(HANDOFF_KEY) || 'null'); } catch (e) { return null; } };
  function clearHandoff() { lsSet(HANDOFF_KEY, null); S.handoffId = null; save(); }
  // A stand-in result, until the battle game reads handoffs. It looks like what the battle side will send.
  function simulate(h, outcome = 'win') {
    const lvl = 4 + Math.floor(S.day / 9);
    const r = { outcome, exp: {}, levels: {}, yenDelta: 0, items: {}, fatigue: null, fragments: [], bossesCleared: [], floorsReached: S.tartarus.maxFloor, simulated: true };
    h.request.party.forEach(m => { r.exp[m] = 60 + lvl * 25; });
    if (h.kind === 'tartarus') {
      r.yenDelta = 600 + Math.round(seeded(S.day) * 1400);
      r.floorsReached = Math.min(h.request.maxFloor || 16, (S.tartarus.maxFloor || 1) + 3 + Math.floor(seeded(S.day + 1) * 4));
      if (seeded(S.day + 2) < 0.5) r.items.medicine = 1;
      r.fatigue = S.condition === 'tired' ? 'sick' : 'tired';
      if (S.day >= dayOf(D.cal.fragmentsFrom || '5/16') && seeded(S.day + 3) < 0.2) {
        const all = (D.battle.memories || []).map(m => m.id).filter(id => !S.fragments.includes(id));
        if (all.length) r.fragments.push(all[Math.floor(seeded(S.day + 4) * all.length)]);
      }
    } else if (outcome === 'win') {
      r.bossesCleared = h.request.ops || (h.request.op ? [h.request.op] : []);
      r.yenDelta = h.request.op ? 3000 : 0;
      r.fatigue = h.kind === 'scripted' ? null : 'tired';
    }
    if (outcome === 'retreat' || outcome === 'lose') { r.exp = {}; r.yenDelta = 0; r.fatigue = h.kind === 'scripted' ? null : 'tired'; }
    if (outcome === 'interrupt') { r.exp = {}; r.fatigue = null; }
    return r;
  }
  // Apply a battle result to the life sim. Returns a summary for the results screen.
  function applyResult(h, r) {
    const sum = { outcome: r.outcome, yen: 0, items: [], fragments: [], bosses: [], exp: r.exp || {}, simulated: !!r.simulated };
    Object.entries(r.exp || {}).forEach(([m, x]) => { S.battle.exp[m] = (S.battle.exp[m] || 0) + x; });
    Object.assign(S.battle.levels, r.levels || {});
    const dy = r.yenDelta ?? (typeof r.yen === 'number' ? r.yen - h.request.yen : 0);
    if (dy) { S.yen = Math.max(0, S.yen + dy); sum.yen = dy; }
    Object.entries(r.items || {}).forEach(([k, n]) => { addItem(k, n); sum.items.push([k, n]); });
    if (Array.isArray(r.gear)) S.gear = r.gear;
    (r.fragments || []).forEach(f => { if (addFragment(f, true)) sum.fragments.push(f); });
    (r.bossesCleared || []).forEach(b => { if (!S.tartarus.bosses.includes(b)) { S.tartarus.bosses.push(b); sum.bosses.push(b); } S.flags[`op-${b}`] = true; });
    if (r.floorsReached) S.tartarus.maxFloor = Math.max(S.tartarus.maxFloor, r.floorsReached);
    if (h.kind === 'tartarus') { S.tartarus.nights += 1; S.tonight = 'tartarus-done'; }
    if (r.fatigue) { S.condition = r.fatigue; S.tonightFatigue = r.fatigue; }
    if (h.kind === 'tartarus' || (h.kind === 'operation' && r.fatigue)) S.tonight = 'battled';
    // Extras the battle game may send from story fights (the finale): flags to set, and the choice made in the fight.
    if (r.flags) setFlags(r.flags);
    if (r.choice && (h.request.op || h.request.script)) S.route.choices[`fight.${h.request.op || h.request.script}`] = r.choice;
    save();
    return sum;
  }

  /* ── Saves ── */
  function saveSlot(n, label) { const at = Date.now(); const ok = lsSet(SLOT_KEY(n), JSON.stringify({ at, label: label || slotLabel(), state: S })); return ok; }
  function readSlot(n) { try { const x = JSON.parse(lsGet(SLOT_KEY(n)) || 'null'); return x && x.state && x.state.v ? x : null; } catch (e) { return null; } }
  function loadSlot(n) { const x = readSlot(n); if (!x) return false; S = migrate(clone(x.state)); save(); return true; }
  function slotLabel(s = S) { const i = dayInfo(s.day); return `${i.md} ${i.day} · ${slotName(s.slot, i)}`; }
  function exportCode() { return btoa(unescape(encodeURIComponent(JSON.stringify({ game: KEY, v: VERSION, at: Date.now(), state: S })))); }
  function importCode(code) {
    try {
      const raw = String(code).trim();
      const obj = JSON.parse(raw.startsWith('{') ? raw : decodeURIComponent(escape(atob(raw))));
      const st = obj.state || obj;
      if (!st || typeof st.day !== 'number' || !st.stats) return false;
      S = migrate(st); save(); return true;
    } catch (e) { return false; }
  }
  const hasSave = () => !!(load()?.started);
  function deleteSave() { lsSet(KEY, null); S = fresh(); }

  indexLinks();
  return {
    KEY, HANDOFF_KEY, base, D, get S() { return S; }, save, newGame, onChange, settings, setSetting, textDelay, sfx,
    dayOf, dateOf, mdOf, dayInfo, slotsFor, slotName, weather, moon, END, SLOT_ORDER,
    statRank, statRankName, statProgress, addStat, addStats, lacking, addYen, takeToasts, toast,
    LINKS, progress, isMet, linkStatus, linkScene, finishLink, linksAt, linkPlace, linkName, need, written, areaById, isHome,
    homeOf, leavesAtMax, tracesAt, nextTrace, farewellDue, farewellScene, christmasOptions, pickChristmas,
    flag, effect, branch, applyChoice, addFragment, fragmentInfo, worldOf,
    portrait, scale, name, silhouette, tarot, background, moodFor, sub, setDate, dateLabel,
    activityOk, doActivity, shopStock, buy, bookById, readTonight,
    jobVisible, jobState, jobOk, hire, shiftScene, finishShift,
    dueEvent, markEvent, hasBattle, unlockMet, doorDue, markDoor, endingDue, jumpToEnd, endingName, recordClear, newGamePlus,
    classQuestion, answerClass, examQuestions, answerExam, examResult, postExam,
    deliverTexts, replyText, answerInvite, unread, freeSlotSpent, nextSlot, sleep,
    available, navigator, tartarusOk, floorCap, makeHandoff, readHandoff, clearHandoff, simulate, applyResult,
    saveSlot, readSlot, loadSlot, slotLabel, exportCode, importCode, hasSave, deleteSave
  };
})();
