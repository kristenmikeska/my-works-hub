/* FEMC revamp: game state and rules (calendar, stats, links, jobs, exams, the battle handoff, saves).
   No content lives here; it reads the data files in assets/femc/game/data and links/.
   One save holds the whole game: localStorage 'kg-femc-revamp' (autosave) + 'kg-femc-revamp-slot1..3', each the life sim's
   state S, which also carries the battle game's progress for this playthrough (S.battleSave: levels, EXP, Haenim's tree,
   Personas, equipment, materials, the access point; its shape is assets/femc/battle/save.js), New Game+'s carried battle
   save until the first fight uses it (S.battleCarry), and the fight in progress (S.handoff). Settings, for the whole game
   (story and battle): 'kg-femc-revamp-settings' (DEFAULTS below). v1's 'kg-femc-game' and the practice mode's
   'kg-femc-battle-proto' are never touched.
   Battle handoff: S.handoff (contract in FEMC-GAME-HANDOFF.md). The fight runs inside femc-game.html (ui.js, the Dark Hour
   layer); the request/result shapes are the contract's.
   Merge migration (S.mv < 2, saves from before the one-save merge): the old separate keys are read once and folded in:
   the battle save from 'kg-femc-revamp-battle' (runs[S.runId]; New Game+: runs[S.ngFrom] becomes S.battleCarry), and a
   pending or finished 'kg-femc-handoff' whose id matches S.handoffId (then that key is removed; the raw autosave and handoff
   are kept once in 'kg-femc-revamp-premerge'). 'kg-femc-revamp-battle' itself is left in place, read only, so older slots
   can still find their battle save when they're loaded. The battle save's own settings seed the shared settings once.
     Beyond the contract, the request also carries `run` (this playthrough's id, S.runId: the battle game keeps one battle
     save per playthrough), `carryFrom` (New Game+: the previous playthrough's id), `route` (route.choices.solstice),
     `routeFlags` (which of route-R/S/H/stay/true/bad, true-final, true-fallback are set: the finale's lantern lock) and
     `trueReady` (true-final or true-path). A result may also carry `flags` ({ id: true }, applied like a scene's { flag }) and `choice` (saved as
     route.choices['fight.<op or script>'], e.g. the finale's 'hand' or 'defeat').
   Story events (data/story-*.js, window.FEMC_GAME_EVENTS): { id, date, slot, title, place, time, flag (only if set), link
     (whose bond the event's `reverse` choices push), consumes, unlock (see unlockMet: fragments / flags / ranks, then it plays on
     the first matching slot on or after `date`), scene }. Door scenes (FEMC_GAME_FLAGS.doorScenes, story-act5.js) play one a
     night in the late slot once due (route.doorsDue → route.doorsSeen). The bad ending (flag route-bad) or a scene's { end }
     jumps to the last night (calendar `end`, 3/7 since the year runs to March) late, where 'end-ending' plays; then the end screen (credits, endings seen in 'kg-femc-revamp-clears',
     New Game+: stats, half the yen, Compendium and books carry over; S.ngFrom tells the battle game whose levels to copy).
   Debug: femc-game.html?debug=1 keeps the Simulate buttons on fight cards (remembered for the tab's session). */
window.FemcGame = (() => {
  const KEY = 'kg-femc-revamp', SETTINGS_KEY = 'kg-femc-revamp-settings', HANDOFF_KEY = 'kg-femc-handoff';
  const LEGACY_BATTLE_KEY = 'kg-femc-revamp-battle', PREMERGE_KEY = 'kg-femc-revamp-premerge', MERGE_V = 2, STATS_V = 2, YEAR_V = 2;
  const SLOT_KEY = n => `${KEY}-slot${n}`;
  // Links removed from the revamp (2026-10-21; migrateRemoved). Declared up here: load() runs before the rest of the file.
  const REMOVED_LINKS = ['leon', 'cloud', 'noctis', 'astarion', 'shadowheart'];
  const VERSION = 1;
  const base = window.FemcMode?.base || new URL('../../../', document.currentScript.src).href;
  const W = window;
  const D = {
    get cal() { return W.FEMC_GAME_CALENDAR; }, get stats() { return W.FEMC_GAME_STATS; }, get places() { return W.FEMC_GAME_PLACES; },
    get jobs() { return W.FEMC_GAME_JOBS || []; }, get jobScenes() { return W.FEMC_GAME_JOB_SCENES || {}; }, get flags() { return W.FEMC_GAME_FLAGS; },
    get texts() { return W.FEMC_GAME_TEXTS || { threads: {}, texts: [] }; }, get q() { return W.FEMC_GAME_QUESTIONS || { classes: [], exams: {}, teachers: {}, rivals: [], ambient: {} }; },
    get dailyLife() { return W.FEMC_GAME_DAILY_LIFE || []; }, get trip() { return W.FEMC_GAME_TRIP || {}; }, get lodging() { return W.FEMC_GAME_LODGING || {}; },
    get clubs() { return W.FEMC_GAME_CLUBS || {}; }, get runIns() { return W.FEMC_GAME_RUNINS || []; }, get variants() { return W.FEMC_GAME_VARIANTS || {}; },
    get events() { return W.FEMC_GAME_EVENTS || []; }, get crush() { return W.FEMC_GAME_CRUSH || { tracks: {}, moments: [], world: {} }; }, get battle() { return W.FEMC_BATTLE_DATA || {}; }
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
  /* Weather (calendar.js weather, weatherLevels, climate, spells, persist). Each day has a kind (clear, cloudy, rain, storm,
     snow: what gates, art and lines read) and a level, how it looks and sounds (wx: clear, overcast, fog, drizzle, rain,
     storm, light, heavy). Fixed dates win; every other day rolls from its month's chances (or a spell's: the rainy season,
     typhoon season) with a seed, and a grey or wet day sometimes carries on into the next, so weather comes in spells and
     never changes for a day once the calendar is set. The whole year is worked out once (WX) and kept. */
  let WX = null;
  function wxYear() {
    if (WX) return WX;
    const C = D.cal, out = [], days = dayOf(C.end) + 8;
    const kindOk = (k, c) => !!(c[k] || (k === 'storm' && c.rain));
    for (let d = 0; d <= days; d++) {
      const md = mdOf(d), m = dateOf(d).getMonth() + 1;
      const spell = (C.spells || []).find(sp => inRange(d, sp.from, sp.to));
      const c = { ...(C.climate[m] || {}), ...(spell || {}) };
      let kind = C.weather[md];
      if (!kind) {
        const prev = out[d - 1]?.kind;
        // A spell of weather: yesterday's grey or wet day carries on (a storm passes, leaving rain behind).
        if (prev && prev !== 'clear' && seeded(d + 503) < (C.persist ?? 0) && kindOk(prev === 'storm' ? 'rain' : prev, c)) kind = prev === 'storm' ? 'rain' : prev;
        else {
          let r = seeded(d + 11);
          kind = 'clear';
          for (const k of ['storm', 'snow', 'rain', 'cloudy']) { if (c[k] && r < c[k]) { kind = k; break; } r -= c[k] || 0; }
        }
      }
      const lr = seeded(d + 77);
      let level = (C.weatherLevels || {})[md];
      if (!level) level = kind === 'rain' ? (lr < (spell?.drizzle ?? C.drizzle ?? 0.4) ? 'drizzle' : 'rain')
        : kind === 'snow' ? (lr < (C.heavySnow ?? 0.35) ? 'heavy' : 'light')
        : kind === 'cloudy' ? ((C.fogMonths || []).includes(m) && lr < (C.fog ?? 0.2) ? 'fog' : 'overcast')
        : kind;
      out.push({ kind, level, spell: spell?.name || null });
    }
    return (WX = out);
  }
  const weather = d => (wxYear()[d] || { kind: 'clear' }).kind;
  // Today's weather in full: kind, level, its name ('Drizzle', 'Heavy snow'), the spell it's part of ('Rainy season').
  function wx(d = S?.day || 0) {
    const w = wxYear()[d] || { kind: 'clear', level: 'clear', spell: null };
    return { ...w, d, md: mdOf(d), name: (D.cal.levelNames || {})[w.level] || D.cal.weatherNames[w.kind] || w.kind, wet: w.kind === 'rain' || w.kind === 'storm' };
  }
  // The next n days' weather from d (the phone's forecast).
  function forecast(n = 5, d = S?.day || 0) { const last = dayOf(D.cal.end); return Array.from({ length: n }, (_, i) => d + i).filter(x => x <= last).map(x => ({ ...wx(x), day: DAYS[dateOf(x).getDay()] })); }
  // Gates: a storm is rain too ({ weather: ['rain'] } plays on a storm day; ['storm'] only on one).
  const wxIn = (list, w) => !list || list.includes(w) || (w === 'storm' && list.includes('rain'));
  // A by-weather table's entry for today (activities' `weather`): a storm uses the rain one when it has none of its own.
  const wxPick = (o, w) => o?.[w] || (w === 'storm' ? o?.rain : null) || null;
  const wet = (d = S.day) => wxIn(['rain'], weather(d));
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
      weather: weather(d), wx: wx(d), moon: moon(d), ops: D.cal.ops.filter(o => o.date === md) };
  }
  const SLOT_ORDER = ['early', 'morning', 'lunch', 'afternoon', 'after', 'evening', 'late'];
  function slotsFor(info) {
    // A trip with its own day plan (data/yakushima.js) has daytime and evening slots too (calendar trips[].slots).
    if (info.type === 'trip') return info.trip?.slots || ['early', 'late'];
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
    dailyLife: { seen: [], lastDay: -99 },
    // The living world: holiday invites (today's, and whose day she spent: holidays[md] = link id | 'none'), the late-night
    // scenes already played, and the trip's day plan (trip.done['7/21-after'] = the pick).
    holiday: null, holidays: {}, lateNights: { seen: [], lastDay: -99 }, trip: { done: {} },
    // Part 2: clubs joined (clubs[id] = { joined, sessions, seen, beats, quiet }), run-ins seen and the texts they leave for
    // later (runIns.later), and which variant line each often-seen spot showed last (vary[key] = { n, d }).
    clubs: {}, runIns: { seen: [], lastDay: -99, later: [] }, vary: {},
    // Crushes (data/crush*.js, 2026-10-23): each track's phase, the moments seen and the last day one played (see crushTick).
    crush: { t: {}, seen: [], lastDay: -99 },
    // The morning after (data/spice-*.js, 2026-10-24): { who, kind, day } from a scene's { glow } (see glowIs), or null.
    glow: null,
    perks: { week: {}, pitchDay: -1 }, // bond perks' once-a-week / once-a-day uses (build.js; FEMC-LINK-PERKS.md)
    jobs: {}, events: [], spent: {}, exams: {}, classSeen: [], phone: { threads: {}, unread: {}, done: [], pending: {}, invite: null, lastInvite: -9, vars: {} },
    tartarus: { nights: 0, maxFloor: 0, bosses: [], lastParty: null }, battle: { exp: {}, levels: {} },
    pending: null, handoffId: null, runId: null, playMinutes: 0, savedAt: null,
    // The battle game's progress for this playthrough (save.js shape), New Game+'s carried one, the fight in progress.
    battleSave: null, battleCarry: null, battleAt: 0, handoff: null, mv: MERGE_V,
    // Social stats version: 2 = the five P5-style stats (stats.js). Saves without it have P3P's three and migrate once.
    sv: STATS_V, statsFrom: null, leftovers: 0, done: {},
    // Calendar version: 2 = the year runs to early March (2026-10-21). Saves without it migrate once (migrateYear).
    yv: YEAR_V,
    // The gacha (gacha.js): the capsule machine's and the Velvet Room's counters, keychains, phone cases and Velvet Plumes.
    gacha: { v: 1, plumes: 0, stars: 0, pulls: 0, draws: 0, pity: { cap: { sr: 0, ur: 0 }, vel: { sr: 0, ur: 0 } }, keys: {}, cases: [], caseOn: null, credited: [], last: null }
  });
  const newRunId = () => `r${Date.now().toString(36)}${Math.floor(Math.random() * 1296).toString(36)}`;
  let migrated = false;
  let S = load() || fresh();
  function load() {
    try { const s = JSON.parse(lsGet(KEY) || 'null'); return s && s.v ? migrate(s, true) : null; } catch (e) { return null; }
  }
  function readLegacyBattle() { try { const c = JSON.parse(lsGet(LEGACY_BATTLE_KEY) || 'null'); return c && c.runs && typeof c.runs === 'object' ? c.runs : {}; } catch (e) { return {}; } }
  // autosave: the state from 'kg-femc-revamp' (only then is the old handoff key adopted).
  function migrate(s, autosave) {
    const f = fresh(), legacy = !(s.mv >= MERGE_V);
    if (!s.runId) s.runId = newRunId();
    if (legacy && autosave && !lsGet(PREMERGE_KEY)) lsSet(PREMERGE_KEY, JSON.stringify({ at: Date.now(), revamp: lsGet(KEY), handoff: lsGet(HANDOFF_KEY) }));
    const out = { ...f, ...s, route: { ...f.route, ...(s.route || {}) }, phone: { ...f.phone, ...(s.phone || {}) }, books: { ...f.books, ...(s.books || {}) }, tartarus: { ...f.tartarus, ...(s.tartarus || {}) }, battle: { ...f.battle, ...(s.battle || {}) }, crush: normCrush(s.crush) };
    if (legacy) {
      // One save: fold this playthrough's battle save in (New Game+: the previous playthrough's, to carry over).
      const runs = readLegacyBattle(), mine = runs[out.runId];
      if (!out.battleSave && mine && mine.save) { out.battleSave = mine.save; out.battleAt = mine.at || 0; }
      else if (!out.battleSave && out.ngFrom && runs[out.ngFrom]?.save) out.battleCarry = runs[out.ngFrom].save;
      out.mv = MERGE_V;
      migrated = true;
    }
    if (!(s.sv >= STATS_V)) { migrateStats(out); migrated = true; } // fresh() says 2; the save itself decides
    if (migrateForced(out)) migrated = true;
    if (migrateRemoved(out)) migrated = true;
    if (migrateYear(out, s.yv)) migrated = true; // the save itself decides (fresh() says YEAR_V)
    if (autosave) adoptHandoff(out);
    return out;
  }
  /* Crushes (2026-10-23): a save from before them has no S.crush; it gets an empty one here, and each track settles the
     first time it's read (crushTick): a save already past a track's opt-in window reads as 'out' (a friendship), a save
     already on that link's romance route reads as 'dating'. A malformed field is rebuilt. Runs on every load; idempotent. */
  function normCrush(c) {
    const o = c && typeof c === 'object' ? { ...c } : {};
    o.t = o.t && typeof o.t === 'object' ? o.t : {};
    o.seen = Array.isArray(o.seen) ? o.seen : [];
    o.lastDay = typeof o.lastDay === 'number' ? o.lastDay : -99;
    return o;
  }
  /* The five social stats (once per save, saves from before 2026-10-21 have P3P's Academics / Charm / Courage).
     Academics becomes Knowledge; Charm and Courage keep their names. Each keeps its place on the ladder: the old rank and the
     progress toward the next one map onto the new five ranks (stats.js legacy.rankMap), so a stat never drops a rank, every
     old gate still passes, and an old MAX is a new MAX. Proficiency and Kindness start low but fair, seeded from what this
     playthrough already did (stats.js has no history to read, so this is the one place it's counted):
       Proficiency: 3, + each job shift's Proficiency (jobs.js, as it is now), + 1 per three weeks of the year played
       Kindness: 3, + each job shift's Kindness, + 2 per Koromaru rank, + 1 per 6 link ranks (all links), + 1 per three weeks
     Neither seed can reach the next-to-top rank. The old values are kept in S.statsFrom. */
  function migrateStats(out) {
    const L = D.stats.legacy || {}, NEW = D.stats.stats, old = { ...(out.stats || {}) };
    const lerpRank = x => { const m = L.rankMap || [1, 2, 3, 4, 5, 5]; const i = Math.max(0, Math.min(m.length - 1, Math.floor(x - 1))), f = x - 1 - i; return i >= m.length - 1 ? m[m.length - 1] : m[i] + (m[i + 1] - m[i]) * f; };
    const level = (at, pts) => { let r = 1; at.forEach((v, i) => { if (pts >= v) r = i + 1; }); return r >= at.length ? r : r + (pts - at[r - 1]) / (at[r] - at[r - 1]); };
    const points = (at, x) => { const r = Math.min(at.length, Math.floor(x)), f = x - r; return r >= at.length ? at[at.length - 1] : Math.ceil(at[r - 1] + (at[r] - at[r - 1]) * f); };
    const stats = { ...D.stats.start };
    ['academics', 'charm', 'courage'].forEach(k => {
      const lg = L[k]; if (!lg || !NEW[lg.to]) return;
      const pts = Math.max(0, +old[k] || 0);
      stats[lg.to] = Math.max(stats[lg.to] || 0, points(NEW[lg.to].at, lerpRank(level(lg.at, pts))));
    });
    const jobs = out.jobs || {}, shifts = (stat) => D.jobs.reduce((a, j) => a + (jobs[j.id]?.shifts || 0) * (j.stats?.[stat] || 0), 0);
    const weeks3 = Math.floor(Math.max(0, out.day || 0) / 21);
    const ranks = Object.values(out.links || {}).reduce((a, p) => a + (p?.rank || 0), 0), koro = out.links?.koromaru?.rank || 0;
    const cap = id => NEW[id].at[NEW[id].at.length - 2] - 1;
    stats.proficiency = Math.min(cap('proficiency'), 3 + shifts('proficiency') + weeks3);
    stats.kindness = Math.min(cap('kindness'), 3 + shifts('kindness') + koro * 2 + Math.floor(ranks / 6) + weeks3);
    out.statsFrom = old; out.stats = stats; out.sv = STATS_V;
  }
  /* Story ranks (a link's `forced`, e.g. Haechan's since 2026-10-21, which used to fill a meter like anyone's). A save made
     while a rank scene had been played but its meter wasn't full yet (progress.ready = that rank's index, and its index in
     `seen`) would otherwise sit on a hangout forever: the rank is granted instead (dated today), so nothing is lost and the
     scene already seen never plays again. Ranks still ahead simply wait for their dates. Runs on every load; idempotent. */
  function migrateForced(out) {
    let changed = false;
    (W.FEMC_GAME_LINKS || []).filter(l => l.forced && l.status !== 'stub').forEach(l => {
      const p = out.links?.[l.id];
      if (!p || p.ready == null) return;
      const r = p.ready;
      if (r === (p.rank || 0) && (p.seen || []).includes(r) && l.forced.includes(r + 1) && r < maxOf(l)) {
        p.rank = r + 1; (p.rankDay ||= {})[p.rank] = out.day || 0; p.xp = 0;
      }
      delete p.ready; changed = true;
    });
    return changed;
  }
  /* Links removed on 2026-10-21 (Kat's ruling): Leon, Cloud, Noctis, Astarion and Shadowheart. An old save keeps loading: their
     link progress, meeting, Compendium registration, phone threads and the battle side's ranks for perks (bonds, bondsRev,
     bondsLove) are dropped quietly. Everything they already gave stays where it is: items, gear (Astarion's Black Rose), learned
     MAX skills (build.js keeps their definitions), fragments (Leon's Suture Kit), stats and yen. Runs on every load; idempotent. */
  function migrateRemoved(out) {
    let changed = false;
    const strip = (o, k) => { if (Array.isArray(o?.[k]) && o[k].some(x => REMOVED_LINKS.includes(x))) { o[k] = o[k].filter(x => !REMOVED_LINKS.includes(x)); changed = true; } };
    const del = (o, k) => { if (o && typeof o === 'object' && k in o) { delete o[k]; changed = true; } };
    REMOVED_LINKS.forEach(id => {
      del(out.links, id);
      ['threads', 'unread', 'pending'].forEach(k => del(out.phone?.[k], id));
      if (out.phone?.invite?.link === id) { out.phone.invite = null; changed = true; }
      [out.battleSave, out.battleCarry].forEach(b => del(b?.bonds, id));
    });
    ['met', 'registered'].forEach(k => strip(out, k));
    if (out.holiday) strip(out.holiday, 'links');
    [out.battleSave, out.battleCarry].forEach(b => { if (b) { strip(b, 'bondsRev'); strip(b, 'bondsLove'); } });
    return changed;
  }
  /* The year runs to early March since 2026-10-21 (Kat's ruling, like P3: graduation on 3/5). The finale moved from 1/30 to
     3/6 and the endings from 1/31 to 3/7 (calendar.js `end`); everything up to the solstice kept its date, and the January
     story still plays where it was. Once per save (S.yv < YEAR_V):
     - an old save whose ending already played ('end-ending' seen) moves to the new last night, late, so sleeping goes to the
       end screen instead of into a February nobody wrote for it;
     - the Black Rose naginata is the Hermit's first-clear drop now (it was Astarion's rank-8 gift): a save that cleared the
       Hermit without it gets it.
     - a save that already played the old finale (or is in the middle of its fight) is marked 'finale-early': once the finale
       is in its events, endingDue() sends it to the ending on the new last night instead of on into February.
     A save before the old finale just plays on into February. */
  function migrateYear(out, from) {
    if (from >= YEAR_V) return false;
    if ((out.events || []).includes('end-ending')) { out.day = END(); out.slot = 'late'; out.tonight = null; }
    else if ((out.events || []).includes('a6-last-train') || [out.handoff?.request?.op, out.handoff?.request?.script].includes('finale')) (out.flags ||= {})['finale-early'] = true;
    const owned = out.battleSave?.gear?.owned;
    if (owned && !(owned.nag_rose > 0) && ((out.tartarus?.bosses || []).includes('hermit') || out.flags?.['op-hermit'])) owned.nag_rose = 1;
    out.yv = YEAR_V;
    return true;
  }
  // A fight the old two-page game left pending or finished ('kg-femc-handoff'), for this state: it moves into S.handoff.
  function adoptHandoff(out) {
    let h = null; try { h = JSON.parse(lsGet(HANDOFF_KEY) || 'null'); } catch (e) {}
    if (!h || !h.request || !out.handoffId || h.id !== out.handoffId) return;
    // An old battle page may have saved progress after this state was written.
    const r = readLegacyBattle()[out.runId];
    if (r && r.save && (r.at || 0) > (out.battleAt || 0)) { out.battleSave = r.save; out.battleAt = r.at; }
    if (!out.handoff || out.handoff.id !== h.id || (h.status === 'done' && out.handoff.status !== 'done')) out.handoff = h;
    lsSet(HANDOFF_KEY, null);
    migrated = true;
  }
  const listeners = [];
  const onChange = fn => listeners.push(fn);
  function save() { S.savedAt = Date.now(); lsSet(KEY, JSON.stringify(S)); listeners.forEach(fn => { try { fn(); } catch (e) { console.error(e); } }); }
  // The same, without telling the screens (the battle writes its progress often).
  function saveQuiet() { S.savedAt = Date.now(); return lsSet(KEY, JSON.stringify(S)); }
  if (migrated && S.started) saveQuiet();
  function newGame() { S = fresh(); S.started = true; S.phase = 'prologue'; S.runId = newRunId(); save(); }

  /* ── Settings ── */
  // One store for the whole game. Story: text, auto, dateCard, quickClass. Battle (battle.js pullSettings maps these onto its
  // own names): battleSpeed, cutins, showtimes, difficulty, remember, rushWhere, rushStop, shake, calm, numbers, tips, pad, perf. Both:
  // text (also the battle's text speed), music (0-100, 0 = off; musicLast remembers the volume), sfx, sfxVol.
  const DEFAULTS = { text: 'normal', music: 60, musicLast: 60, sfx: true, sfxVol: 100, auto: 'off', dateCard: true, battles: 'ask', quickClass: false, wxFx: true, wxSound: 60,
    battleSpeed: 1, cutins: 'first', showtimes: 'on', difficulty: 'normal', remember: true, rushWhere: 'normal', rushStop: 30, shake: true, calm: false, numbers: true, tips: true, pad: 'auto', perf: false };
  let settingsRaw = (() => { try { return JSON.parse(lsGet(SETTINGS_KEY) || '{}') || {}; } catch (e) { return {}; } })();
  // The merge: battle preferences come from the playthrough's battle save the first time (difficulty, Rush, cut-ins…).
  if (!('difficulty' in settingsRaw) && S.battleSave && S.battleSave.settings) {
    const b = S.battleSave, st = b.settings;
    ['difficulty', 'remember', 'rushWhere', 'rushStop', 'shake', 'calm', 'numbers', 'tips', 'pad'].forEach(k => { if (st[k] !== undefined) settingsRaw[k] = st[k]; });
    if ([1, 2, 3].includes(b.speed)) settingsRaw.battleSpeed = b.speed;
    if (b.cutins) settingsRaw.cutins = b.cutins;
    if (typeof b.perf === 'boolean') settingsRaw.perf = b.perf;
    if (typeof st.sfxVol === 'number') settingsRaw.sfxVol = st.sfxVol;
    lsSet(SETTINGS_KEY, JSON.stringify(settingsRaw));
  }
  let settingsCache = { ...DEFAULTS, ...settingsRaw };
  const settings = () => settingsCache;
  function setSettings(patch) {
    settingsCache = { ...settingsCache, ...patch };
    if (typeof patch.music === 'number' && patch.music > 0 && !('musicLast' in patch)) settingsCache.musicLast = patch.music;
    lsSet(SETTINGS_KEY, JSON.stringify(settingsCache));
    if ('sfx' in patch) lsSet('kg-femc-sound', patch.sfx ? null : 'off');
    if ('music' in patch) W.FemcScene?.Music.volume();
  }
  const setSetting = (k, v) => setSettings({ [k]: v });
  const textDelay = () => ({ slow: 42, normal: 24, fast: 10, instant: 0 }[settingsCache.text] ?? 24);
  const sfx = name => { if (settingsCache.sfx && lsGet('kg-femc-sound') !== 'off') W.FemcMode?.sfx(name); };

  /* ── Stats ── */
  // An old id (stats.js alias: academics) reads as its new stat everywhere.
  const statId = id => (D.stats.alias || {})[id] || id;
  const statDef = id => D.stats.stats[statId(id)];
  const statPts = id => +S.stats[statId(id)] || 0;
  function statRank(id, pts = statPts(id)) { const at = statDef(id).at; let r = 1; at.forEach((v, i) => { if (pts >= v) r = i + 1; }); return r; }
  const statRankName = (id, r = statRank(id)) => statDef(id).ranks[r - 1];
  function statProgress(id) { const at = statDef(id).at, r = statRank(id), pts = statPts(id); if (r >= at.length) return 1; return (pts - at[r - 1]) / (at[r] - at[r - 1]); }
  const toasts = [];
  const toast = (kind, text, extra = {}) => { toasts.push({ kind, text, ...extra }); listeners.forEach(fn => { try { fn('toast'); } catch (e) {} }); };
  const takeToasts = () => toasts.splice(0);
  function addStat(id, pts, raw) {
    id = statId(id);
    if (!statDef(id) || !pts) return 0;
    const mult = raw ? 1 : (D.stats.conditions[S.condition]?.gain ?? 1);
    let n = Math.max(1, Math.round(pts * mult));
    // Sebastian's Rain Check (rainy days) and Elizabeth's Sunday Best (Sundays): every gain +1.
    if (!raw && pts > 0) { if (wet() && perkOn('rainCheck')) n++; if (dateOf(S.day).getDay() === 0 && perkOn('sundayBest')) n++; }
    const before = statRank(id);
    S.stats[id] = statPts(id) + n;
    const after = statRank(id);
    toast('stat', `${statDef(id).name} ${'▲'.repeat(Math.min(3, Math.ceil(n / 2)))}`, { stat: id });
    if (after > before) toast('statrank', `Your ${statDef(id).name} has grown to "${statRankName(id, after)}"!`, { stat: id, rank: after, from: before });
    return n;
  }
  function addStats(obj, raw) { Object.entries(obj || {}).forEach(([k, v]) => addStat(k, v, raw)); }
  // Adds up stat objects ({ knowledge: 2 } + { knowledge: 1, charm: 1 } ...), old ids folded into new ones.
  function sumStats(...objs) { const out = {}; objs.forEach(o => Object.entries(o || {}).forEach(([k, v]) => { k = statId(k); out[k] = (out[k] || 0) + v; })); return out; }
  function lacking(needs) {
    for (const [k, r] of Object.entries(needs || {})) if (statDef(k) && statRank(k) < r) return `${statDef(k).name}: ${statRankName(k, r)}`;
    return null;
  }
  function addYen(n) { S.yen = Math.max(0, S.yen + n); if (n) toast('yen', `${n > 0 ? '+' : '−'}¥${Math.abs(n).toLocaleString()}`); }

  /* ── Bond perks, the life sim's side (build.js PERKS: type 'daily'). A link's rank earns them; a reversed link pauses them.
     perkOn(key) → the earned daily perks with that fx key ([] when none); weekly(key) → true the first time this week (and uses it). ── */
  const BLD = () => W.FemcBuild || null;
  const bondRank = id => { const p = S.links[id]; return p && !p.reversed ? (p.rank || 0) : 0; };
  const dailyPerks = () => (BLD() ? BLD().PERKS.filter(p => p.type === 'daily' && !p.stub && bondRank(p.link) >= p.rank) : []);
  function perkOn(key) { const l = dailyPerks().filter(p => p.fx[key] != null); return l.length ? l : null; }
  const perkVal = key => (perkOn(key) || []).map(p => p.fx[key]);
  const weekOf = (d = S.day) => Math.floor((d + 1) / 7); // weeks start on Sunday (day 0 is a Monday)
  function weekly(key) { S.perks = S.perks || { week: {} }; S.perks.week = S.perks.week || {}; if (S.perks.week[key] === weekOf()) return false; S.perks.week[key] = weekOf(); return true; }
  const weeklyFree = key => !(S.perks && S.perks.week && S.perks.week[key] === weekOf());
  // Shop discounts stack to 30% (FEMC-LINK-PERKS.md). kind: weapon | armor | acc | item | book.
  function shopDiscount(shop, kind) {
    let pct = 0;
    perkVal('shopOff').forEach(o => { if (o.shop === shop && (!o.kinds || o.kinds.includes(kind))) pct += o.pct; });
    pct += rainSale(shop, kind);
    return Math.min(30, pct);
  }
  // places.js rainyDay.sale: a rainy (or stormy) day's sale at some shops, like P5's (percent off; 0 on other days).
  function rainSale(shop, kind) {
    const o = D.places.rainyDay?.sale?.[shop];
    return o && wet() && (!o.kinds || o.kinds.includes(kind)) ? o.pct : 0;
  }
  function actCost(a) {
    if (!a.cost) return 0;
    if (perkVal('freeAct').some(l => l.includes(a.id))) return 0;
    if (a.fortune && perkOn('omikuji')) return 0;
    const off = Math.min(30, perkVal('discount').reduce((s, o) => s + (o.acts.includes(a.id) ? o.pct : 0), 0));
    return Math.round(a.cost * (1 - off / 100));
  }
  /* Extra stat points an activity earns from bonds (Yukari, Junpei, Ken, Aphrodite, Mark, Yunjin, Saori, Kuromi, Hyein, Minji, Jungwon). */
  function actPerkStats(a, w = weather(S.day)) {
    const out = {}, add = o => Object.entries(o || {}).forEach(([k, v]) => { out[k] = (out[k] || 0) + v; });
    perkVal('actStat').forEach(m => add(m[a.id]));
    perkVal('areaStat').forEach(o => { if (o.area === a.area) add(o.stat); });
    if (perkOn('weekendCharm') && [0, 6].includes(dateOf(S.day).getDay())) add({ charm: 1 });
    perkVal('goldenHour').forEach(o => { if (w === 'clear' && o.areas.includes(a.area) && S.slot === 'after') add(o.stat); });
    if (a.id === 'library') perkVal('studyAny').forEach(add);
    if (a.club) perkVal('clubStat').forEach(m => add(m[a.id])); // Rio's Practice Swing (the tennis club)
    return out;
  }
  // When a link ranks up: the perks it just earned (a toast each).
  function perkToasts(l, rank) {
    if (!BLD()) return;
    BLD().perksAt(l.id, rank).forEach(p => toast('perk', `Bond perk · ${p.name} (${l.short} ${rank >= maxOf(l) ? 'MAX' : `rank ${rank}`})${p.stub ? ' · coming later' : ''}`, { perk: p.id }));
  }
  // Weekly bonds that just happen (no free time): Akihiko's Roadwork, My Melody's Almond Pound Cake.
  function weeklyBonds() {
    const dow = dateOf(S.day).getDay();
    dailyPerks().forEach(p => {
      const w = p.fx.weekly;
      if (!w || (p.fx.dow != null && p.fx.dow !== dow) || !weekly(w)) return;
      if (p.fx.stat) { addStats(p.fx.stat); toast('perk', `${p.name} with ${LINKS[p.link]?.short || p.link}.`); }
      if (p.fx.cond) { const up = { sick: 'tired', tired: 'good', good: 'great' }[S.condition]; if (up) { S.condition = up; toast('cond', `${p.name}: she feels better.`); } }
    });
  }

  /* ── Links ──
     A link file (links/<id>.js) pushes one object onto window.FEMC_GAME_LINKS:
       id, name, short, arcana, numeral, from, cast: { speakerId: 'Name' }
       kind: 'sees' | 'persona' | 'native' | 'visitor' | 'searcher' | 'frame'; romance: 'canon' | 'side' | null
       starts: 'M/D' (first possible day); closes: 'M/D'; needs: { knowledge|courage|proficiency|charm|kindness: rank } to begin (stats.js; an old id like academics still works)
       gate: { R|S|H: n } memory fragments needed before they appear; hidden: true keeps them off the map
       home: { area (id or name from data/places.js), spot, slot: 'after' | 'evening', days: [0-6], hint }
       approach: one line shown on the map before you've met; invite: { ask, ok, no } texts, or null
       hangouts: [[lines], ...] story-free time that fills the bond meter between ranks
       ranks: 10 entries (maxRank of them), each { after: 'M/D', title: '1: rookie', place, time, music, scene: [lines] } or { todo: '…' }
       maxRank: 15  the link's top rank (default 10: P3's MAX). Since 2026-10-21 Haechan, Jungwon, Akihiko and Shinjiro go to 15:
         ranks 11–15 are ranks[10..14], with `after` dates in February (2/1–3/4; 3/5–3/7 belong to the story). Rank 10 stays
         what it was (the P3 MAX: its perks, the party trees' evolution, bond tier 9 → the rank-10 Christmas / goodbye rules);
         "MAX" in the UI, the meter, the rank card, stamps and toasts means maxOf(link). Between rank 10 and the next rank's
         date (and gate), time together plays afterMax as it did at MAX; a meter that a rank scene didn't fill plays
         stretchHangouts (or hangouts). At maxRank, afterMax rotates as before. maxOf(l) / isMaxed(l) read it.
       stretchHangouts: [[lines], …]  hangouts used instead of `hangouts` once the link is at rank 10+.
       stretch: { from: 'M/D', home: { area, spot, slot, days, hint } }  a link that `closes` (Shinjiro, 10/4) comes back for
         ranks 11+: from `from`, at rank 10+, `closes` no longer stops it and it is met at stretch.home (homeOf). Its traces
         (afterMax after `closes`) keep going in the meantime.
       forced: [rank numbers] that play as story on their `after` date (no meter); reversible: true allows reversal
         A story rank plays in the link's home slot (evening / after school), or `storySlot` ('late' for Haechan), or the
         rank's own `slot`. Before its date, time together is a hangout (no rank-up; never before rank 1). A late story rank
         waits for the next night if a story event already took tonight's late slot. storyEvents: [story event ids] that
         must have played before any story rank (Haechan: his arrival). See migrateForced for old meter-based saves.
       status: 'stub' for links that exist but aren't written (links/stubs.js).
       afterMax: [{ place, time, music, scene, flags, noFlags }, ...]  what spending time together plays after rank 10 (and
         at maxRank; see maxRank). An entry whose flags aren't all set, or whose noFlags are, is skipped. They play in order, then
         rotate, at the link's usual spot (no meter, no rank-up; ifRoute still works). The entry's place/time are the scene's.
         A link that has *left* (see leavesAtMax / closes) can't be met any more; its afterMax become **traces**: from the day
         after `closes`, each entry shows up once, in order, as something to look at in the area its `place` names (e.g.
         'Paulownia Mall · Fountain' → Paulownia Mall; 'Iwatodai Dorm · …' → the dorm's evening menu), at the slot its `time`
         suggests (Evening / Night / Late → evening, anything else → after school / daytime). Each trace plays once.
       leavesAtMax: true | false  the link's rank 10 is its goodbye. Default: true when `closes` is 21 days or less after
         rank 10's `after` date (Ann: rank 10 10/23, closes 11/3; Shinjiro: 10/3, 10/4), so afterMax only plays as traces.
         Links that stay a while after MAX (Haru: 12/4 → the end) play afterMax normally until `closes`, then nothing.
       christmas: { place, time, music, scene, rank, early }  the Christmas Eve date (12/24 evening). christmasOptions() lists every
         met link with `christmas` that is on its romance route (route 'romance') at rank 8+ (the earliest romance turn; a
         link that has closed by 12/24, like Shinjiro, needs rank 10). `rank: n` overrides the rank; `early: n` lets a link be
         picked from rank n before any route is set (v1's field, unless the route is 'friend'). The pick is saved as
         route.choices.xmas = link id | 'alone' | 'friends' (plus the flag xmas-<id>) for the endings' variant. It never sets a route.
         There is ONE picker: the story event on 12/24 (story-act6.js 'a6-christmas-eve'). Its choice list has the route
         partners' written beats, then a { christmasOptions: true } entry that scene.js expands (christmasChoices) into one
         "(Text <short>.)" option per christmasOptions() link the list doesn't already offer (an option that sets the flag
         xmas-<id> offers <id>). Picking one runs pickChristmas(id) and plays that link's own `christmas` scene (christmasLines:
         its place/time/music, in the link's context so ifRoute works). A route partner picked from the written beats plays only
         the story beat, never also their link scene (no double dates). The engine picker (ui.js christmasEve, dueEvent kind
         'christmas') is only a fallback for a 12/24 with no playable story event, and never fires once route.choices.xmas is set.
       summerHome / winterHome: { area, spot, slot, days, hint }  where the link is during Summer Break / Winter Break (calendar
         `breaks` ids). Links whose home is at school (a schoolOnly area like Gekkoukan) and have no break home are
         unreachable in person on breaks and holidays, so on those days they text "free right now?" invites more often
         (every day instead of every other day, and most days rather than about half).
       ranks[n].gate: { R|S|H: n } or { total: n }  memory fragments needed before that rank can play (Wren's 7, 8, 10).
       repair: [[lines], …] or [{ place, time, scene }]  a reversed link's own make-up scenes (in turn), instead of the generic one.
       farewell: [lines]  plays (early morning) the day after `closes` if the bond never reached rank 10. Without it the game
         plays a short generic goodbye so a link never vanishes silently (a text from visitors and searchers, narration
         for everyone else).
       afterRank: { n: { delay, slot, msgs, reply } }  a text sent a day or two after rank n (see deliverTexts).
       holidays: { 'M/D': { ask, yes, ok, no, sorry, rank, route, flag, events, slot, title, place, time, music, bg, scene } }
         an invitation texted that morning; the scene plays only if Solar spends the day with them (see holidayInvites).
       lateNights: [{ id, after, until, rank, route, flag, events, days, when, kind, place, time, music, bg, scene }]  late-night
         scenes (see lateNightDue). These three can also live in data/living-*.js (FEMC_GAME_LINK_EXTRAS), merged in here.
       secret: { flag, after, until, days, met, ranks, label, sub, place, time, scene }  a hidden link (My Melody): invisible
         everywhere until `flag` is set. While its gates hold, the dorm's evening menu shows one quiet extra option (label /
         sub); playing it (secretsDue / findSecret) plays `scene`, sets the flag and counts as meeting them. Skip it and the
         link never appears.
       secret: { flag, via: 'runin', count: { of: [flags], min }, gained }  a hidden link found out in town instead (Kat &
         Ethan, 2026-10-25): never in the evening menu. Its run-ins carry `finds: '<link id>'`; when one ends with `count`
         met (that many of those flags set, one per run-in where Solar stopped), the link is found (findSecret, the slot
         stays the activity's). Walk past enough of them and it never is.
       kind 'persona': Persona-world people from other Persona games (and Kuromi / My Melody, exchange students). They live
         around here: no `closes`, no goodbye texts, ordinary texts (Kat's ruling, 2026-10-20).
     Where the story is heading (heading(): 'R' | 'S' | 'H' | 'stay' | 'true' | 'bad'): the solstice's route once it's
     locked; before that, the secret road ('H', see heading) or the world Solar leans toward. Scenes branch on it with
     { ifHeading: 'R' | ['R', 'true'], then, else }; daily-life routines, late nights, holidays and texts can be gated with
     `heading` (one value or a list). A text can carry `variants: { R: { msgs, reply }, S: …, H: …, stay: …, true: … }`:
     the one for the current heading is sent (and its replies served) instead of its own msgs / reply.
     Scene lines: see scene.js. Choices give ♪ with `notes` (0-3); `reverse: 1` pushes a reversible link. */
  const LINKS = {};
  const CAST = { solar: 'Solar', 'mitsuru-radio': 'Mitsuru · Radio', porter: '???', clerk: 'Clerk', ikutsuki: 'Ikutsuki', teacher: 'Teacher', fuuka: 'Fuuka', koromaru: 'Koromaru', ken: 'Ken', aigis: 'Aigis', elizabeth: 'Elizabeth', wren: 'Wren', kurosawa: 'Officer Kurosawa' };
  function indexLinks() {
    (W.FEMC_GAME_LINKS || []).forEach(l => {
      // A written file wins over a stub with the same id.
      if (LINKS[l.id] && l.status === 'stub') return;
      LINKS[l.id] = l; CAST[l.id] = l.short || l.name; Object.assign(CAST, l.cast || {});
    });
    // The living world's link fields (data/living-*.js, FEMC_GAME_LINK_EXTRAS: afterRank, holidays, lateNights) join the
    // link they name; a link file can carry the same fields itself.
    Object.entries(W.FEMC_GAME_LINK_EXTRAS || {}).forEach(([id, x]) => {
      const l = LINKS[id]; if (!l) return;
      Object.entries(x).forEach(([k, v]) => { l[k] = Array.isArray(v) ? [...(l[k] || []), ...v] : { ...(l[k] || {}), ...v }; });
    });
    Object.values(packs()).forEach(j => Object.assign(CAST, j.cast || {})); // job and club scene packs (job-scenes*, clubs)
    D.runIns.forEach(e => Object.assign(CAST, e.cast || {}));
    D.dailyLife.forEach(e => Object.assign(CAST, e.cast || {}));
    (D.crush.moments || []).forEach(e => Object.assign(CAST, e.cast || {})); // crush moments (data/crush*.js)
    Object.values(D.trip).forEach(t => Object.assign(CAST, t.cast || {}));
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
    if (stretchOn(l, d)) return l.stretch.home;
    const brk = D.cal.breaks.find(b => inRange(d, b.from, b.to));
    if (brk?.id === 'summer' && l.summerHome) return l.summerHome;
    if (brk?.id === 'winter' && l.winterHome) return l.winterHome;
    return l.home || {};
  }
  /* Ranks past 10 (maxRank, see the header). maxOf: the link's top rank. isMaxed: at it. stretchOn: a closing link's
     comeback (stretch) is on today. afterList: the afterMax entries this save can play (flags / noFlags). afterGap: at rank
     10+, time together is afterMax right now (the link is at its top, or the next rank isn't open yet: its date, its gate,
     the stretch), not a rank scene; a meter a rank scene left short (p.ready) is never the gap (hangouts fill it). */
  const maxOf = l => Math.max(10, +(l?.maxRank) || 10);
  const isMaxed = (l, p = progress(l.id)) => (p.rank || 0) >= maxOf(l);
  function stretchOn(l, d = S.day) { return !!(l.stretch && (S.links[l.id]?.rank || 0) >= 10 && d >= dayOf(l.stretch.from)); }
  const entryOk = e => !!e && (e.flags || []).every(flag) && !(e.noFlags || []).some(flag);
  const afterList = l => (l.afterMax || []).filter(entryOk);
  function afterGap(l, d = S.day) {
    const p = progress(l.id), r = p.rank || 0;
    if (r < 10) return false;
    const next = r < maxOf(l) ? l.ranks?.[r] : null;
    if (!next?.scene) return true;
    if (p.ready === r) return false;
    return !((!next.after || d >= dayOf(next.after)) && fragGateMet(next.gate) && (!l.stretch || stretchOn(l, d)));
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
    if (l.secret && !flag(l.secret.flag)) return { ok: false, reason: 'unwritten' };
    if (afterGap(l, d)) {
      // After rank 10 (MAX, or waiting on rank 11+): afterMax scenes with the person, unless they've left (then they're
      // traces, see tracesAt). A link with a stretch is hidden while its next rank isn't open (no "busy" row for it).
      if (!afterList(l).length || leavesAtMax(l)) return { ok: false, reason: 'max' };
      if (l.closes && d >= dayOf(l.closes) && !stretchOn(l, d)) return { ok: false, reason: 'closed' };
      if (S.spent[`${d}-${slot}`]) return { ok: false, reason: 'spent' };
      if (!atHome(l, d, slot)) return { ok: false, reason: 'elsewhere' };
      return { ok: true, after: true };
    }
    const next = l.ranks[p.rank];
    if (!next?.scene) return { ok: false, reason: 'unwritten' };
    if (d < dayOf(l.starts || '4/8') || !fragGateMet(l.gate)) return { ok: false, reason: 'away' };
    if (l.storyEvents && !l.storyEvents.every(id => S.events.includes(id))) return { ok: false, reason: 'away' };
    if (l.closes && d >= dayOf(l.closes) && !stretchOn(l, d)) return { ok: false, reason: 'closed' };
    // A rank's own `gate` (memory fragments, e.g. Wren's { total: 12 }) holds it back until they're found.
    if (next.gate && !fragGateMet(next.gate)) return { ok: false, reason: 'later', gate: next.gate };
    // Story ranks play on their date (dueEvent); before that, time together is a hangout.
    if (l.forced?.includes(p.rank + 1) && next.after && d >= dayOf(next.after)) return { ok: false, reason: 'story' };
    if (l.forced?.includes(p.rank + 1) && (!(l.hangouts || []).length || p.rank === 0)) return { ok: false, reason: 'later' };
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
  const linksAt = (areaId, slot = S.slot) => Object.values(LINKS).filter(l => !l.storyOnly && areaById(homeOf(l).area)?.id === areaId && !['unwritten', 'away', 'closed', 'max'].includes(linkStatus(l, S.day, slot).reason) && (linkStatus(l, S.day, slot).ok || ['spent', 'later', 'needs'].includes(linkStatus(l, S.day, slot).reason) && isHome(l, slot)));
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
    // The next one in order whose gates hold (an entry gated out, e.g. Shinjiro's bedside once he's awake, is passed over).
    let i = p.after || 0;
    while (i < list.length && !entryOk(list[i])) i += 1;
    if (d < from || i >= list.length) return null;
    const e = list[i], a = areaOfPlace(e.place, l.home?.area);
    return a ? { link: l, i, entry: e, area: a.id, slot: a.id === 'dorm' ? 'evening' : slotOfTime(e.time) } : null;
  }
  function tracesAt(areaId, slot = S.slot) {
    if (S.spent[`${S.day}-${slot}`]) return [];
    return Object.values(LINKS).map(l => nextTrace(l)).filter(t => t && t.area === areaId && t.slot === slot && (areaId === 'dorm' || D.places.areas.find(a => a.id === areaId)?.slots.includes(slot)));
  }
  // What to play when Solar spends time with a link: { kind: 'rank'|'hangout'|'repair'|'after'|'trace', r, scene, place, title }
  function linkScene(l, trace) {
    const p = progress(l.id), r = p.rank;
    const hang = () => { const pool = (r >= 10 && (l.stretchHangouts || []).length ? l.stretchHangouts : l.hangouts) || []; return pool.length ? pool[(p.hung || 0) % pool.length] : [{ n: `Solar spent a while with ${l.short}. They talked about nothing in particular, which turned out to be the point.` }, { choose: [{ t: '(Mostly listen.)', notes: 2 }, { t: '(Tell them about your week.)', notes: 3 }, { t: '(Tease them a little.)', notes: 1 }] }]; };
    if (trace) return { kind: 'trace', r, scene: trace.entry.scene || [], place: trace.entry.place || linkPlace(l), time: trace.entry.time, music: trace.entry.music, title: trace.entry.title };
    if (afterGap(l) && afterList(l).length) {
      const list = afterList(l), e = list[(p.after || 0) % list.length];
      return { kind: 'after', r, scene: e.scene || [], place: e.place || linkPlace(l), time: e.time, music: e.music, title: e.title };
    }
    if (p.reversed && (l.repair || []).length) { const e = l.repair[(p.repairs || 0) % l.repair.length]; return { kind: 'repair', r, scene: Array.isArray(e) ? e : e.scene || [], place: (!Array.isArray(e) && e.place) || linkPlace(l), time: !Array.isArray(e) ? e.time : undefined }; }
    if (p.reversed) return { kind: 'repair', r, scene: [{ n: `${l.short} didn't quite look at her at first. Solar stayed anyway, and said the thing she should have said last time, and after a while the silence between them stopped being the bad kind.` }], place: linkPlace(l) };
    if ((p.ready === r && r > 0 && !l.forced?.includes(r + 1)) || (l.forced?.includes(r + 1) && r > 0 && !(l.ranks[r]?.after && S.day >= dayOf(l.ranks[r].after)))) return { kind: 'hangout', r, scene: hang(), place: linkPlace(l), story: l.forced?.includes(r + 1) };
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
    if (kind === 'trace') { const t = nextTrace(l); p.after = (t ? t.i : (p.after || 0)) + 1; save(); return { after: true }; }
    if (kind === 'after') { p.after = (p.after || 0) + 1; save(); return { after: true }; }
    if (p.push >= 2 && l.reversible && !p.reversed) { p.reversed = true; S.flags[`reversed-${l.id}`] = true; delete p.ready; save(); return { reversed: true, rank: p.rank }; }
    // Aigis's Learning Mode: every hangout (not a rank scene) is +1 Kindness.
    if (kind === 'hangout') perkVal('learningMode').forEach(o => addStats(o));
    const story = l.ranks[r]?.story || l.forced?.includes(r + 1);
    if (story && kind === 'hangout') { p.hung = (p.hung || 0) + 1; p.xp = (p.xp || 0) + gained; save(); return { up: false, req: 0 }; }
    // A link that closes (Shinjiro, 10/4) with no home day left before it: this rank scene is the last chance, so it ranks up
    // whatever the answers (otherwise a short meter could never be filled and the link would stay a rank short for good).
    const lastChance = kind === 'rank' && !!l.closes && S.day < dayOf(l.closes) && !stretchOn(l)
      && !Array.from({ length: Math.max(0, dayOf(l.closes) - S.day - 1) }, (_, i) => S.day + 1 + i).some(d => { const h = homeOf(l, d); return atHome(l, d, h.slot === 'evening' ? 'evening' : 'after'); });
    const req = story || lastChance ? 0 : need(l, r);
    const from = Math.min(p.xp || 0, req);
    // Junkyu's #teamsolar: the first hangout each week, with anyone, gives +1 ♪.
    if (kind === 'hangout' && perkOn('teamSolar') && weekly('teamsolar')) { gained += 1; toast('perk', '#teamsolar: +1 ♪'); }
    p.xp = (p.xp || 0) + gained;
    if (kind === 'hangout') p.hung = (p.hung || 0) + 1; else if (!p.seen.includes(r)) p.seen.push(r);
    const up = p.xp >= req;
    if (up) { p.rank = r + 1; p.rankDay[p.rank] = S.day; p.xp = 0; delete p.ready; perkToasts(l, p.rank); } else p.ready = r;
    save();
    return { up, from, to: Math.min(from + gained, req), req, rank: p.rank };
  }

  /* ── Effects and branches used by scenes ── */
  const flag = id => !!S.flags[id];
  // { of: [flags], min, max }: how many of those flags are set (a hidden link's tally of run-ins Solar stopped for, links/kat.js).
  // Scenes { ifCount }, run-in and routine gates `count`, and a secret's `count`. f: the flag reader (menu.js peek passes its own).
  const countOk = (c, f = flag) => { const n = [].concat(c?.of || []).filter(f).length; return n >= (c?.min ?? 0) && n <= (c?.max ?? Infinity); };
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
  /* { gift: { from: 'Mitsuru', item: { medicine: 2 }, gear: 'guard_ring' } }: a present (items into the bag, gear into what she
     owns, the battle's gear list), with a toast naming it. A keepsake ({ keepsake: 'text', id }) shows its picture in the toast. */
  function gift(g) {
    const B = D.battle, names = [];
    Object.entries(g.item || {}).forEach(([k, n]) => { addItem(k, n); names.push(`${B.items?.[k]?.name || k}${n > 1 ? ` ×${n}` : ''}`); });
    [].concat(g.gear || []).forEach(k => { if (B.gear?.[k] && !S.gear.includes(k)) S.gear.push(k); names.push(B.gear?.[k]?.name || k); });
    if (g.keepsake) names.push(g.keepsake);
    // A keepsake's picture (batch 52): `img` (a path under the site), else the keepsake's `id` -> game/art/items/keepsake-<id>.webp.
    const img = g.img || (g.keepsake && g.id ? `assets/femc/game/art/items/keepsake-${g.id}.webp` : null);
    if (names.length) toast('gift', `${g.from ? `From ${g.from}: ` : 'A gift: '}${names.join(', ')}`, img ? { img } : {});
  }
  /* ♪ toward a link's next rank from outside its own scenes (holiday days, the trip, late nights): only for a met link that
     isn't reversed or at MAX. The meter shows it the next time they spend time together. */
  function bond(id, n) {
    const l = LINKS[id];
    if (!l || !n || !isMet(id)) return 0;
    const p = progress(id);
    // No ♪ at MAX, nor at rank 10+ while the next rank isn't open yet (afterGap): a February rank starts its own meter.
    if (p.reversed || isMaxed(l, p) || afterGap(l)) return 0;
    p.xp = (p.xp || 0) + n;
    return n;
  }
  function effect(line) {
    let did = false;
    if (line.stat) { addStats(line.stat); did = true; }
    if (line.yen) { addYen(line.yen); did = true; }
    if (line.flag) { setFlags(line.flag); did = true; }
    if (line.tally) { tally(line.tally); did = true; }
    if (line.fragment) { addFragment(line.fragment); did = true; }
    if (line.item) { Object.entries(line.item).forEach(([k, v]) => addItem(k, v)); did = true; }
    if (line.gift) { gift(line.gift); did = true; }
    if (line.bond) { Object.entries(line.bond).forEach(([k, v]) => bond(k, v)); did = true; }
    if (line.later) { laterText(line.later); did = true; }
    if (line.crush) { crushApply(line.crush); did = true; }
    if (line.glow) { setGlow(line.glow); did = true; }
    if (line.register) { if (!S.registered.includes(line.register)) { S.registered.push(line.register); if (!line.quiet) toast('register', `Registered to the Compendium: ${CAST[line.register] || line.register}`); } did = true; }
    if (line.join) { if (!S.joined.includes(line.join)) { S.joined.push(line.join); S.flags[`joined-${line.join}`] = true; toast('join', `${CAST[line.join] || line.join} joined S.E.E.S.`); } did = true; }
    if (line.end) { S.flags['the-end'] = line.end; did = true; }
    if (line.unlock) { S.unlocked[line.unlock] = true; if (line.unlock === 'tartarus') toast('unlock', 'Tartarus is open at night.'); did = true; }
    if (did) save();
    return did;
  }
  /* Where the story is heading. After the solstice: the locked route. Before it, the secret road shows only to a player who
     means it: she has gone toward a Hoax door (home-H3), turned the pull down at least once (pull-no-there / -awaken /
     -xroad3, or Haechan's friendship route), and holds at least as many Hoax memories as either other world's. Otherwise
     the world she leans toward: Haechan's settled lean (hc-lean-R / -S, from 12/12), else fragments + door answers +
     Haechan's tally (ties go to Runners). Nothing reads this to lock anything; the solstice still decides. */
  function heading() {
    const f = S.flags;
    for (const [k, v] of [['route-bad', 'bad'], ['route-true', 'true'], ['route-R', 'R'], ['route-S', 'S'], ['route-H', 'H'], ['route-stay', 'stay']]) if (f[k]) return v;
    const fr = S.route.frags || {}, t = S.route.tally || {};
    const pullNo = ['pull-no-there', 'pull-no-awaken', 'pull-no-xroad3'].filter(k => f[k]).length + (S.links.haechan?.route === 'friend' ? 1 : 0);
    if (pullNo >= 1 && f['home-H3'] && (fr.H || 0) >= Math.max(fr.R || 0, fr.S || 0)) return 'H';
    if (f['hc-lean-R']) return 'R';
    if (f['hc-lean-S']) return 'S';
    const r = (fr.R || 0) + (t['lean.R'] || 0) + (t['haechan.R'] || 0), s = (fr.S || 0) + (t['lean.S'] || 0) + (t['haechan.S'] || 0);
    return s > r ? 'S' : 'R';
  }
  const headingIs = want => [].concat(want).includes(heading());
  function branch(line, linkId) {
    let ok = null;
    if (line.ifRank) ok = Object.entries(line.ifRank).every(([id, r]) => progress(id).rank >= r);
    else if (line.ifStat) ok = Object.entries(line.ifStat).every(([id, r]) => statRank(id) >= r);
    else if (line.ifFlag) ok = [].concat(line.ifFlag).every(flag);
    else if (line.ifEvent) ok = [].concat(line.ifEvent).every(id => S.events.includes(id));
    else if (line.ifMet) ok = [].concat(line.ifMet).every(isMet);
    else if (line.ifRoute) ok = linkId && progress(linkId).route === line.ifRoute;
    else if (line.ifRomance) ok = progress(line.ifRomance).route === 'romance';
    else if (line.ifReversed) ok = [].concat(line.ifReversed).every(id => !!progress(id).reversed);
    else if (line.ifHeading) ok = headingIs(line.ifHeading);
    else if (line.ifCrush) ok = crushIs(line.ifCrush);
    else if (line.ifCrushed) ok = crushedAt(line.ifCrushed);
    else if (line.ifTaken) ok = takenBy(line.ifTaken);
    else if (line.ifGlow) ok = glowIs(line.ifGlow);
    else if (line.ifCount) ok = countOk(line.ifCount);
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
    if (o.christmas) pickChristmas(o.christmas);
    if (o.flag) setFlags(o.flag);
    if (o.tally) tally(o.tally);
    if (o.stat) addStats(o.stat);
    if (o.crush) crushApply(o.crush);
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
  // Portrait folders are lowercase (tools/femc-portraits.py: the disk is case-insensitive, the site isn't), so camelCase speaker
  // ids (chKagami, hgMaster, kbOno) find theirs: chKagami → portraits/chkagami/.
  const faceId = id => String(SAME_FACE[id] || id || '').toLowerCase();
  // Speakers shown only as a black silhouette, drawn from someone's portrait: { speaker: portrait id }.
  const SILHOUETTES = { porter: 'wren' };
  /* A link whose portraits aren't drawn yet (its file says `portraitPending: true`; Danielle, Jaemin and Chenle since
     2026-10-22) speaks as the plain silhouette (scene.js: a silhouette whose portrait doesn't exist is the drawn shape, no
     art). It needs nothing else: once assets/femc/portraits/<id>/<face>.webp exist and portraits/index.js lists them
     (tools/femc-portraits.py writes both), the index has faces for the id and its real portrait shows everywhere at once
     (scenes, phone, Go Out, pickers: they all ask portrait(), which returns null until then). */
  const pendingFace = id => !!LINKS[id]?.portraitPending && !(PORTRAITS()[faceId(id)] || []).length;
  const silhouette = id => SILHOUETTES[id] || (pendingFace(id) ? id : null);
  function portrait(id, face) {
    // Solar's art wears the S.E.E.S. armband, so she has no portrait until she's given one.
    if (id === 'solar' && !S.flags.armband) return null;
    // An outfit from the Wardrobe with its own portraits, when "Outfits in scene portraits" is on (cosmetics.js).
    const worn = W.FemcCosmetics && W.FemcCosmetics.portrait(faceId(id), face);
    if (worn) return worn;
    id = faceId(id);
    const have = PORTRAITS()[id] || [];
    const b = face && face.replace(/-\d+$/, '');
    const CLOSE = { blushing: ['flustered', 'happy'], flustered: ['blushing', 'happy'], serious: ['sad', 'neutral'], happy: ['neutral'] };
    const pick = [face, b, ...(CLOSE[b] || []), 'neutral', have[0]].find(f => f && have.includes(f));
    return pick ? `${base}assets/femc/portraits/${id}/${pick}.webp?v=${W.FEMC_PORTRAIT_V || 1}` : null;
  }
  const scale = id => (W.FEMC_PORTRAIT_SCALE || {})[faceId(id)] || 1;
  const name = id => CAST[id] || (id ? id[0].toUpperCase() + id.slice(1) : '');
  const castHas = id => id in CAST;
  /* Alternate card art for an arcana two links share (FEMC-ART-TODO 6A; tools/femc-tarot.py EXTRA -> tarot/<arcana>-2.webp).
     A link listed here shows its alternate; everyone else (and this link, if the file isn't listed) keeps the arcana's card. */
  const TAROT_ALT = { hyein: 'lovers-2', koromaru: 'strength-2' };
  function tarot(l) {
    const have = W.FEMC_TAROT || [], alt = l && TAROT_ALT[l.id];
    const k = alt && have.includes(alt) ? alt : String(l?.arcana || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    return have.includes(k) ? `${base}assets/femc/tarot/${k}.webp` : null;
  }
  // places.js seasons: the plain day art that has a version per season (the shrine). Then today's art (dressed).
  function seasonal(img) {
    const list = D.places.seasons?.[img];
    if (!list) return dressed(img);
    const m = dateOf(S?.day || 0).getMonth() + 1;
    return dressed(([...list].reverse().find(([from]) => from <= m) || list[list.length - 1])[1]);
  }
  // places.js today: art for one day or one kind of weather (the culture festival's hallway, the Strip in the rain). The first
  // entry whose `dates` (M/D list) and / or `weather` (calendar.js names) fit today replaces the image, day or evening.
  function dressed(img) {
    const list = D.places.today?.[img];
    if (!list || !S) return img;
    const d = S.day || 0, md = mdOf(d);
    const hit = list.find(e => (!e.dates || e.dates.includes(md)) && (!e.weather || wxIn(e.weather, weather(d))));
    return hit ? hit.img : img;
  }
  function background(place = '', time = '', override) {
    if (override) return { url: `${base}assets/femc/bg/${seasonal(override)}.webp`, mood: '' };
    const rule = D.places.bg.find(([at]) => at[0] === '*' ? place.includes(at.slice(1)) : place.startsWith(at));
    if (!rule) return null;
    const [, day, evening, look] = rule;
    const late = /Evening|Night|PM|AM/.test(time) && !/Morning/.test(time);
    const special = /Dark Hour|Velvet|Tartarus/.test(place + time);
    const img = late && evening ? dressed(evening) : seasonal(day);
    return { url: `${base}assets/femc/bg/${img}.webp`, mood: look || (special || (late && evening) ? '' : late ? 'night' : '') };
  }
  function moodFor(place = '', time = '') {
    if (/Velvet/.test(place)) return 'velvet';
    if (/Tartarus/.test(place)) return 'mystery';
    if (/Dark Hour/.test(place + time)) return 'darkhour'; // Shadow World: the Dark Hour streets
    if (/^Gekkoukan/.test(place)) return 'school';
    if (/^(Paulownia Mall|Iwatodai Strip|Port Island Station)/.test(place)) return 'city';
    if (/Evening|Night/.test(time)) return 'night';
    return 'joy';
  }
  const sub = t => String(t ?? '').replace(/\{name\}/g, 'Solar');
  let dateOverride = null;
  function setDate(md) { const d = dayOf(md); if (d >= S.day || S.phase === 'prologue') { S.day = d; save(); } }
  const dateLabel = () => { const i = dayInfo(); return { md: i.md, day: i.day }; };

  /* ── Activities, shops, books ──
     activities(): places.js activities plus the clubs (places.js clubs: the hook for tennis, the library, band and gaming;
     each club is an activity with club: true, shown at its area like any other). showing(a): what a rotating activity has on
     this week (the cinema's `showings`, one per week). */
  const clubActs = () => (D.places.clubs || []).map(c => ({ area: 'gekkoukan', slots: ['after'], icon: 'club', ...c, club: true }));
  const activities = () => D.places.activities.concat(clubActs());
  const actById = id => activities().find(a => a.id === id);
  const showing = (a, d = S.day) => (a.showings?.length ? a.showings[Math.floor((d + 1) / 7) % a.showings.length] : null);
  function activityOk(a, slot = S.slot) {
    const info = dayInfo();
    if (!a.slots.includes(slot)) return { ok: false, why: 'Closed now' };
    if (a.days && !a.days.includes(info.dow)) return { ok: false, why: 'Not today' };
    if (areaById(a.area)?.schoolOnly && info.type !== 'school') return { ok: false, why: 'School’s out' };
    if (a.needs && lacking(a.needs)) return { ok: false, why: `Needs ${lacking(a.needs)}` };
    if (a.from && S.day < dayOf(a.from)) return { ok: false, why: 'Not yet' };
    // closedIn: weather that shuts it (the pier and the beach in a storm).
    if (a.closedIn && wxIn(a.closedIn, info.weather)) return { ok: false, why: `Closed: ${(D.cal.weatherNames[info.weather] || info.weather).toLowerCase()}` };
    if (actCost(a) && S.yen < actCost(a)) return { ok: false, why: 'Not enough yen' };
    if (S.spent[`${S.day}-${slot}`] && !a.shop) return { ok: false, why: 'No time left' };
    return { ok: true };
  }
  // Preview the same weather and condition-adjusted gains the activity will award.
  const gainText = stats => Object.entries(stats || {}).map(([id, points]) => `${statDef(id).name} +${Math.max(1, Math.round(points * (D.stats.conditions[S.condition]?.gain ?? 1)))}`).join(', ');
  function activityInfo(a) {
    const w = wxPick(a.weather, dayInfo().weather) || (a.showings ? { ...showing(a), label: `Now showing: ${showing(a).title}` } : null);
    const gains = gainText;
    const bonus = actPerkStats(a);
    const merged = sumStats(w ? w.stats : a.stats, bonus);
    let benefit = gains(merged);
    if (a.random) benefit = `One random gain: ${gains(a.random).replaceAll(', ', ' or ')}${Object.keys(bonus).length ? `, plus ${gains(bonus)}` : ''}`;
    if (a.fortune) benefit = 'A random fortune; may improve a social stat or your condition.';
    if (a.cures?.length) benefit += `${benefit ? ' · ' : ''}Relieves ${a.cures.map(id => D.stats.conditions[id].name).join(' or ')}`;
    if (a.shop) benefit = a.shop === 'books' ? 'Buy books to read at the dorm.' : a.gacha ? a.gain : (D.battle.shops[a.shop]?.sub || 'Browse items for sale.');
    const c = actCost(a);
    return { benefit: `${w ? w.label + ' · ' : ''}${benefit}`, cost: a.gacha ? a.price : a.shop ? 'Browsing is free; purchases cost yen.' : c ? `Costs ¥${c.toLocaleString()}${c < a.cost ? ' (a friend’s discount)' : ''}` : a.cost ? 'Free (a friend’s perk)' : 'Free', time: a.shop ? 'Does not spend time.' : 'Uses this time slot.' };
  }
  // Does an activity; returns { text, place } for the narration scene.
  function doActivity(a) {
    const info = dayInfo();
    if (actCost(a)) addYen(-actCost(a));
    let stats = a.stats;
    const sh = showing(a);
    const w = wxPick(a.weather, info.weather) || (sh ? { ...sh, label: `Now showing: ${sh.title}` } : null);
    if (w) stats = w.stats;
    if (a.random) { const k = Object.keys(a.random); const pick = k[Math.floor(Math.random() * k.length)]; stats = { [pick]: a.random[pick] }; }
    // The activity's own lines plus its variants (data/living-variants.js), walked without repeats (vary).
    const lines = (w && w.lines) || a.lines;
    let text = lines ? (w && w.lines ? lines[Math.floor(Math.random() * lines.length)] : vary(`activities.${a.id}`, lines)) : '';
    // A bond can change what the activity is (an `actLine`; the pier's Fishing Trip went with its link on 2026-10-21).
    const alt = perkVal('actLine').map(m => m[a.id]).filter(Boolean)[0];
    if (alt) text = alt;
    if (a.fortune) {
      // Kiriko's Omikuji Pull: the Great Blessing (the first slip) comes up twice as often.
      const F = D.places.fortunes, pool = perkOn('omikuji') ? [F[0]].concat(F) : F;
      const f = pool[Math.floor(Math.random() * pool.length)];
      text = `She unfolded the slip. “${f.t}”`;
      if (f.stats) stats = f.stats;
      if (f.cond && S.condition === 'good') S.condition = f.cond;
    }
    addStats(sumStats(stats, actPerkStats(a)));
    if (a.cures?.includes(S.condition)) { S.condition = 'good'; toast('cond', 'She feels better.'); }
    (S.done ||= {})[a.id] = (S.done[a.id] || 0) + 1;
    // Yunjin's Taxi Driver Coffee: once a week the vending machine's coffee clears Tired.
    perkVal('weeklyCure').forEach(o => { if (o.act === a.id && S.condition === o.cond && weekly('cure-' + a.id)) { S.condition = 'good'; toast('cond', 'Yunjin’s coffee. She’s awake now.'); } });
    // Jaehyun's It's a Schedule: once a week, two activities fit in one After School slot.
    if (S.slot === 'after' && perkOn('schedule') && weeklyFree('schedule')) { weekly('schedule'); toast('perk', 'It’s a schedule: there’s still time for one more thing.'); }
    else S.spent[`${S.day}-${S.slot}`] = `act:${a.id}`;
    save();
    return { text: (w ? `${w.label}. ` : '') + text, place: a.place || `${areaById(a.area).name} · ${a.spot}` };
  }
  function shopStock(id) {
    const B = D.battle, cfg = D.places.shops[id], shop = B.shops?.[cfg?.battleShop];
    if (!shop) return [];
    const tier = 1 + S.tartarus.bosses.length;
    const out = [], line = k => (W.FemcBattleSave ? W.FemcBattleSave.gearLine(k) : (B.gear[k].desc || ''));
    const price = (p, kind) => Math.round(p * (1 - shopDiscount(id, kind) / 100));
    if (shop.sells.includes('item')) (shop.stock || Object.keys(B.items || {})).forEach(k => { const it = B.items?.[k]; if (it && !it.night && (it.tier || 1) <= tier) out.push({ id: k, kind: 'item', name: it.name, price: price(it.price, 'item'), desc: it.desc, shop: id, art: it.art || null, icon: !!it.art }); });
    // Gear: weapons for whoever is fighting this season (newest tiers first), armor, accessories; Mayoido's rare stock.
    const wt = new Set(available().map(m => (B.party || []).find(x => x.id === m)?.wtype).filter(Boolean));
    const gear = [];
    ['weapon', 'armor', 'acc'].forEach(kind => {
      if (!shop.sells.includes(kind)) return;
      Object.entries(B.gear || {}).forEach(([k, g]) => { if ((g.kind || g.slot) === kind && !g.rare && (g.tier ?? 1) <= tier && (g.tier ?? 1) > 0 && g.price && (kind !== 'weapon' || (wt.has(g.wtype) && (!g.owner || available().includes(g.owner))))) gear.push([k, g, kind]); });
    });
    // Someone's own weapon (build.js OWNED) is only stocked while they're around: not before a searcher joins, not after Shinjiro leaves.
    if (shop.sells.includes('rare')) (shop.stock || []).forEach(k => { const g = B.gear?.[k]; if (g && (g.tier ?? 1) <= tier && (!g.owner || available().includes(g.owner))) gear.push([k, g, g.slot]); });
    // Newest tiers first, up to 22; someone's own weapon (named: build.js) always stays on the shelf, so the ordinary stock
    // gives way first (S.E.E.S.'s own weapons joined the Police Box and Mayoido in batch 23). The list scrolls.
    const byTier = (a, b) => (b[1].tier - a[1].tier) || (a[2] > b[2] ? 1 : -1);
    const named = gear.filter(x => x[1].named), plain = gear.filter(x => !x[1].named).sort(byTier).slice(0, Math.max(8, 22 - named.length));
    named.concat(plain).sort(byTier).forEach(([k, g, kind]) => out.push({ id: k, kind, name: g.name, price: price(g.price, kind), desc: line(k), who: g.wtype ? (B.party || []).filter(m => m.wtype === g.wtype && (!g.owner || g.owner === m.id) && available().includes(m.id)).map(m => m.name).join(', ') : '', shop: id, art: g.art || null, wide: !!g.artWide }));
    // Mayoido also sells sealed Revelation cards.
    if (cfg?.cards && W.FemcBuild) out.push({ id: 'card_pack', kind: 'cardpack', name: 'Sealed Revelation Card', price: 1500 + 500 * Math.min(6, tier), desc: `A random Revelation card (★3–★5; better as Tartarus opens up). Equip it from the menu’s Cards tab.`, shop: id });
    return out.slice(0, 32);
  }
  function buy(entry) {
    if (S.yen < entry.price) return false;
    addYen(-entry.price);
    if (entry.kind === 'item') addItem(entry.id, 1);
    else if (entry.kind === 'cardpack') { const b = ensureBattleSave(), c = W.FemcBuild.rollCard(Math.random, { tier: 1 + S.tartarus.bosses.length }); const r = W.FemcBuild.addCard(b, c); toast('perk', r.card ? `Revelation card: ${W.FemcBuild.cardName(c)} ★${c.r}` : `The card box is full: +${r.dust} Tarot Dust`); }
    else if (entry.kind !== 'book' && !S.gear.includes(entry.id)) S.gear.push(entry.id);
    if (entry.kind === 'book') S.books.owned.push(entry.id);
    // Ann's Model Discount: shopping at Be Blue V is good for Charm.
    perkVal('shopStat').forEach(m => { if (m[entry.shop]) addStats(m[entry.shop]); });
    save();
    return true;
  }
  /* Selling materials (Mayoido buys what Shadows drop; a `matSell` perk pays more: Danielle's Line Items). They live in the battle save. */
  function matSellPrice(k) { const m = D.battle.materials?.[k]; if (!m) return 0; return Math.round(m.price * (1 + perkVal('matSell').reduce((a, v) => a + v, 0))); }
  function sellMat(k, n = 1) {
    const b = ensureBattleSave(); if (!b || !(b.mats[k] >= n)) return false;
    b.mats[k] -= n; if (!b.mats[k]) delete b.mats[k];
    S.yen += matSellPrice(k) * n; toast('yen', `+¥${(matSellPrice(k) * n).toLocaleString()}`);
    save(); return true;
  }
  const bookById = id => D.places.books.find(b => b.id === id);
  // A book's cover (batch 52, Kat's books-1/2 sheets, tools/femc-cards.py -> game/art/books/<id>.webp); a book's own `img` wins.
  const bookArt = b => (b && (b.img || `assets/femc/game/art/books/${b.id}.webp`)) || null;
  function readTonight() {
    const id = S.books.reading || S.books.owned.find(b => !S.books.done.includes(b));
    const b = bookById(id);
    if (!b) return null;
    S.books.reading = id;
    S.books.progress[id] = (S.books.progress[id] || 0) + 1;
    let finished = false;
    if (S.books.progress[id] >= Math.max(1, b.nights - (perkOn('speedReader') ? 1 : 0))) { S.books.done.push(id); S.books.reading = null; addStats(b.stats); finished = true; }
    const extra = dormPerkStats({ id: 'read' }); if (Object.keys(extra).length) addStats(extra); // Judy's Editing Bay
    S.spent[`${S.day}-${S.slot}`] = 'read';
    save();
    return { book: b, finished, night: S.books.progress[id] };
  }

  /* ── The dorm at night (places.js dorm): Study, and the evening activities at home (the kitchen, the roof garden, Koromaru,
     Solar's desk). Each uses the evening. A `desk` one is listed under "Your desk"; `perk` ones appear once that bond perk
     is earned (Shinjiro's Kitchen Duty, Hyein's Sewing Machine). from / until: dates; flag: a story flag. leftovers: the
     dish comes along on the next Tartarus night (a night-only item, battle.js). ── */
  function dormPerkStats(a) {
    return sumStats(...perkVal('dormStat'), ...perkVal('actStat').map(m => m[a.id]));
  }
  const dormActs = (d = S.day) => (D.places.dorm.acts || []).filter(a => (!a.from || d >= dayOf(a.from)) && (!a.until || d <= dayOf(a.until)) && (!a.flag || flag(a.flag)) && (!a.perk || perkOn(a.perk)));
  function dormInfo(a) { return { benefit: gainText(sumStats(a.stats, dormPerkStats(a))) + (a.leftovers ? ' · Leftovers for the next Tartarus night' : ''), cost: a.cost ? `Costs ¥${a.cost.toLocaleString()}` : 'Free' }; }
  function dormOk(a) {
    if (S.spent[`${S.day}-evening`]) return { ok: false, why: 'No time left' };
    if (a.cost && S.yen < a.cost) return { ok: false, why: 'Not enough yen' };
    if (a.needs && lacking(a.needs)) return { ok: false, why: `Needs ${lacking(a.needs)}` };
    return { ok: true };
  }
  function doDorm(a) {
    if (a.cost) addYen(-a.cost);
    addStats(sumStats(a.stats, dormPerkStats(a)));
    if (a.leftovers) { S.leftovers = 1; toast('perk', 'Leftovers packed for the next Tartarus night.'); }
    (S.done ||= {})[a.id] = (S.done[a.id] || 0) + 1;
    S.spent[`${S.day}-evening`] = `dorm:${a.id}`;
    save();
    return { text: vary(`dorm.${a.id}`, a.lines), place: a.place || "Iwatodai Dorm · Solar's Room" };
  }
  // Study at the dorm: rainy nights are a little better; Mitsuru's Study Hall and Jungwon's Tutor Session add to it.
  function doStudy() {
    const d = D.places.dorm.study, rain = wet();
    addStats(sumStats(d.stats, rain ? d.rain : null, studyBonus(), dormPerkStats({ id: 'study' })));
    (S.done ||= {}).study = (S.done.study || 0) + 1;
    S.spent[`${S.day}-evening`] = 'study';
    save();
  }
  function studyInfo() { const d = D.places.dorm.study; return gainText(sumStats(d.stats, wet() ? d.rain : null, studyBonus(), dormPerkStats({ id: 'study' }))); }

  /* ── Scene packs: job shifts and club practices (living world, part 2) ──
     A pack (data/job-scenes.js + data/job-scenes-more*.js for a job id; data/clubs.js for a club id):
       { cast, join (clubs: the first practice), shifts: [{ id, scene, gates… }] (full scenes; job-scenes.js's plain arrays
         count as ungated ones), beats: [{ id, at, prev, lean, scene, gates… }] (one-time, in order), quiet: [{ id, scene,
         gates… }], openers: { month: line } }.
     Gates (all optional): months, weather, days, after, until, met, flags, noFlags, events, ranks: { link: n }, route:
       { link: 'romance' }; beats also at (from the nth shift) and prev (that beat already played).
     packPick, in order: (1) the first unplayed beat that fits; (2) an unseen full shift that fits, the one whose window
     closes soonest first (seasonal ones before they go), then file order; (3) a quiet shift: this month's opener plus the
     quiet moment used longest ago and not yet this month. So a full scene never plays twice, and a quiet shift never repeats
     its opener-and-moment pair. State per job / club: { shifts | sessions, seen: [ids], beats: [indices], quiet: { id: day } }. */
  let PACKS = null;
  function packs() {
    if (PACKS) return PACKS;
    const out = {};
    const merge = (id, p) => {
      const o = (out[id] ||= { cast: {}, shifts: [], beats: [], quiet: [], openers: {}, join: null });
      Object.assign(o.cast, p.cast || {});
      (p.shifts || []).forEach((x, i) => o.shifts.push(Array.isArray(x) ? { id: `${id}-base-${i}`, base: true, scene: x } : x));
      (p.beats || []).forEach((x, i) => o.beats.push({ id: x.id || `${id}-beat-${i}`, ...x }));
      (p.quiet || []).forEach(x => o.quiet.push(x));
      Object.assign(o.openers, p.openers || {});
      if (p.join) o.join = p.join;
    };
    Object.entries(W.FEMC_GAME_JOB_SCENES || {}).forEach(([id, p]) => merge(id, p));
    Object.entries(W.FEMC_GAME_JOB_SCENES_MORE || {}).forEach(([id, p]) => merge(id, p));
    Object.entries(W.FEMC_GAME_CLUBS || {}).forEach(([id, p]) => merge(id, p));
    return (PACKS = out);
  }
  function packFits(e, d = S.day) {
    const info = dayInfo(d), m = info.date.getMonth() + 1;
    if (e.months && !e.months.includes(m)) return false;
    if (e.weather && !wxIn(e.weather, info.weather)) return false;
    if (e.days && !e.days.includes(info.dow)) return false;
    if (e.after && d < dayOf(e.after)) return false;
    if (e.until && d > dayOf(e.until)) return false;
    if (e.met && !e.met.every(isMet)) return false;
    if (e.flags && !e.flags.every(flag)) return false;
    if (e.noFlags && e.noFlags.some(flag)) return false;
    if (e.count && !countOk(e.count)) return false;
    if (e.events && !e.events.every(id => S.events.includes(id))) return false;
    if (e.ranks && !Object.entries(e.ranks).every(([id, r]) => progress(id).rank >= r && !progress(id).reversed)) return false;
    if (e.ranksBelow && !Object.entries(e.ranksBelow).every(([id, r]) => progress(id).rank < r)) return false;
    if (e.route && !routeFits(e.route)) return false;
    if (e.heading && !headingIs(e.heading)) return false;
    return true;
  }
  // The last day an entry could still fit (its months / until), for the seasonal-first order.
  function packEnd(e, d = S.day) {
    let end = END();
    if (e.until) end = Math.min(end, dayOf(e.until));
    if (e.months) { let k = d; while (k < end && e.months.includes(dateOf(k + 1).getMonth() + 1)) k++; end = Math.min(end, k); }
    return end;
  }
  function packState(st) {
    if (!Array.isArray(st.seen)) st.seen = [];
    if (!Array.isArray(st.beats)) st.beats = [];
    if (!st.quiet || typeof st.quiet !== 'object') st.quiet = {};
    return st;
  }
  // n: this shift's number (1 = the first). Returns { kind: 'join'|'beat'|'shift'|'quiet', id, scene, beat, index, key }.
  function packPick(id, st, n, d = S.day) {
    const pk = packs()[id] || { shifts: [], beats: [], quiet: [], openers: {} };
    packState(st);
    if (pk.join && n === 1) return { kind: 'join', id: `${id}-join`, scene: pk.join };
    const bi = pk.beats.findIndex((b, i) => !st.beats.includes(i) && n >= (b.at || 1) && (!b.prev || st.beats.some(k => pk.beats[k]?.id === b.prev)) && packFits(b, d));
    if (bi >= 0) return { kind: 'beat', id: pk.beats[bi].id, beat: pk.beats[bi], index: bi, scene: pk.beats[bi].scene };
    const fresh = pk.shifts.map((x, i) => ({ x, i })).filter(({ x }) => !st.seen.includes(x.id) && packFits(x, d));
    if (fresh.length) {
      fresh.sort((a, b) => packEnd(a.x, d) - packEnd(b.x, d) || a.i - b.i);
      const x = fresh[0].x;
      return { kind: 'shift', id: x.id, scene: x.scene };
    }
    const m = dateOf(d).getMonth() + 1, monthKey = d - dateOf(d).getDate() + 1; // the first of this month
    const quiet = pk.quiet.filter(q => packFits(q, d) && !((st.quiet[q.id] ?? -999) >= monthKey));
    if (quiet.length) {
      quiet.sort((a, b) => (st.quiet[a.id] ?? -999) - (st.quiet[b.id] ?? -999) || pk.quiet.indexOf(a) - pk.quiet.indexOf(b));
      const q = quiet[0], op = pk.openers[m];
      const opener = Array.isArray(op) ? op[n % op.length] : op;
      return { kind: 'quiet', id: q.id, key: `${m}:${q.id}`, scene: [...(opener ? [{ n: opener }] : []), ...q.scene] };
    }
    // A very busy month (every quiet moment already used this month): the quiet moment used longest ago, with the opener.
    const anyQuiet = pk.quiet.filter(q => packFits(q, d)).sort((a, b) => (st.quiet[a.id] ?? -999) - (st.quiet[b.id] ?? -999));
    if (anyQuiet.length) { const q = anyQuiet[0], op = pk.openers[m], opener = Array.isArray(op) ? op[n % op.length] : op; return { kind: 'quiet', id: q.id, key: `${m}:${q.id}:again`, again: true, scene: [...(opener ? [{ n: opener }] : []), ...q.scene] }; }
    // No quiet moments at all: the full scene seen longest ago, never the one just played.
    const all = pk.shifts.filter(x => packFits(x, d));
    if (all.length) { const x = all.slice().sort((a, b) => st.seen.indexOf(a.id) - st.seen.indexOf(b.id))[0]; return { kind: 'shift', id: x.id, scene: x.scene, again: true }; }
    return { kind: 'shift', id: null, scene: null };
  }
  function packDone(st, pick) {
    packState(st);
    if (pick.kind === 'beat' && pick.index != null && !st.beats.includes(pick.index)) st.beats.push(pick.index);
    if (pick.kind === 'shift' && pick.id) { st.seen = st.seen.filter(x => x !== pick.id); st.seen.push(pick.id); }
    if (pick.kind === 'quiet' && pick.id) st.quiet[pick.id] = S.day;
    (st.log ||= []).push(pick.kind === 'quiet' ? pick.key : pick.id);
    if (st.log.length > 400) st.log.splice(0, st.log.length - 400);
  }

  /* ── Jobs ── */
  function jobVisible(j) { const u = j.unlock || {}; return (!u.after || S.day >= dayOf(u.after)) && fragGateMet(u.frags); }
  function jobState(id) {
    const st = (S.jobs[id] ||= { hired: false, shifts: 0, beats: [] });
    // Saves from before part 2 rotated the three base scenes: the ones already worked count as seen.
    if (!Array.isArray(st.seen)) { st.seen = []; const base = (packs()[id]?.shifts || []).filter(x => x.base); for (let k = 0; k < Math.min(st.shifts || 0, base.length); k++) st.seen.push(base[k].id); }
    return packState(st);
  }
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
    const st = jobState(j.id), pick = packPick(j.id, st, st.shifts + 1);
    if (!pick.scene) pick.scene = [{ n: `The shift at ${j.name} went by the way shifts do, slowly and then all at once.` }];
    return pick;
  }
  function finishShift(j, pick = {}) {
    const st = jobState(j.id);
    st.shifts += 1;
    if (pick.beat && pick.index != null && pick.beat.lean) tally({ [`lean.${pick.beat.lean}`]: 1 });
    packDone(st, pick);
    st.lastDay = S.day;
    const up = perkVal('jobPay').reduce((a, o) => a + (o.all || 0) + (o[j.id] || 0), 0); // Jungwon, Sunoo
    addYen(Math.round(j.pay * (1 + up / 100)));
    addStats(sumStats(j.stats, ...perkVal('jobStat').map(m => m[j.id]))); // Sunoo's Staff Shift: +1 Kindness at Yeobo's
    S.spent[`${S.day}-${S.slot}`] = `job:${j.id}`;
    save();
  }

  /* ── Clubs (places.js clubs; scenes in data/clubs.js) ──
     Join from the club's card on a club day: the `join` scene is the first practice. After that the club meets on its days;
     each practice plays a pack scene (packPick), gives the club's stats (plus Rio's Practice Swing at tennis: perk key
     clubStat) and spends the slot. Any number of clubs can be joined. */
  const clubById = id => (D.places.clubs || []).find(c => c.id === id) || null;
  const clubState = id => packState(((S.clubs ||= {})[id] ||= { joined: false, sessions: 0, seen: [], beats: [], quiet: {} }));
  const clubStats = c => sumStats(c.stats, actPerkStats({ ...c, club: true, area: c.area || 'gekkoukan' }));
  function clubScene(c) {
    const st = clubState(c.id), pick = packPick(c.id, st, st.sessions + 1);
    if (!pick.scene) pick.scene = [{ n: `Practice at the ${c.name.toLowerCase()} ran long, the way it does when nobody wants to be the first to leave.` }];
    return pick;
  }
  function joinClub(c) { const st = clubState(c.id); if (!st.joined) { st.joined = true; st.joinedDay = S.day; toast('job', `Joined the ${c.name}.`); } save(); }
  function finishClub(c, pick = {}) {
    const st = clubState(c.id);
    if (!st.joined) { st.joined = true; st.joinedDay = S.day; }
    st.sessions += 1; st.lastDay = S.day;
    if (pick.kind !== 'join') packDone(st, pick);
    addStats(clubStats(c));
    (S.done ||= {})[c.id] = (S.done[c.id] || 0) + 1;
    S.spent[`${S.day}-${S.slot}`] = `club:${c.id}`;
    save();
  }

  /* ── Run-ins (data/living-runins.js): after an activity, a shift or a club practice, sometimes someone turns up.
     { id, who, where: { acts, areas, jobs, clubs }, slot, after, until (default after + 45), days, weather, months, met
     (default [who]), flags, noFlags, count, events, ranks, route, cast, scene, label (the scene's tag instead of who's name,
     for someone not met yet), finds (a hidden link found by run-ins, see `secret` in the link header) }. At most one every other day, each once; one whose
     window is about to close comes first and surely, otherwise about half the time. The scene plays on the end of the scene
     that was already playing; its effects are scene lines ({ bond }, { stat }, { later }: a text that arrives later). ── */
  const runState = () => { const r = (S.runIns ||= { seen: [], lastDay: -99, later: [] }); if (!Array.isArray(r.seen)) r.seen = []; if (!Array.isArray(r.later)) r.later = []; return r; };
  const runUntil = e => (e.until ? dayOf(e.until) : dayOf(e.after || '4/8') + 45);
  function runInFits(e, w, d = S.day) {
    const where = e.where || {};
    const hit = (where.acts || []).includes(w.act) || (where.areas || []).includes(w.area) || (where.jobs || []).includes(w.job) || (where.clubs || []).includes(w.club);
    if (!hit && !where.any) return false; // where.any: out anywhere in town (the huskies)
    if (e.slot && w.slot && e.slot !== w.slot) return false;
    if (d > runUntil(e)) return false;
    if (!(e.met || [e.who]).every(isMet)) return false;
    if (e.who && LINKS[e.who] && progress(e.who).reversed) return false;
    return packFits({ ...e, met: null, until: null }, d);
  }
  // w: { act, area, job, club, slot }. force: skip the spacing and the coin flip (tests).
  function runInDue(w, force = false) {
    const st = runState(), d = S.day;
    if (!force && d - (st.lastDay ?? -99) < 2) return null;
    const fit = D.runIns.map((e, i) => ({ e, i })).filter(({ e }) => !st.seen.includes(e.id) && runInFits(e, w, d));
    if (!fit.length) return null;
    fit.sort((a, b) => (!!b.e.finds - !!a.e.finds) || runUntil(a.e) - runUntil(b.e) || a.i - b.i); // a hidden link's run-ins go first
    const urgent = runUntil(fit[0].e) - d <= 3;
    const key = String(w.act || w.job || w.club || w.area || '').length;
    if (!force && !urgent && !fit[0].e.finds && seeded(d * 7 + key * 13) < 0.5) return null; // a hidden link's run-ins skip the coin flip
    return fit[0].e;
  }
  function finishRunIn(id) {
    const st = runState();
    if (!st.seen.includes(id)) st.seen.push(id);
    st.lastDay = S.day;
    // A hidden link found out in town (secret.via 'runin'): enough stops, and this run-in finds them.
    const e = D.runIns.find(x => x.id === id), l = e?.finds && LINKS[e.finds];
    if (l?.secret && !flag(l.secret.flag) && (!l.secret.count || countOk(l.secret.count))) findSecret(l.id, l.secret.gained || 0, true);
    save();
  }
  // { later: { delay, slot, thread, msgs } } in a scene: a text that arrives `delay` days on (in that slot, or the first one).
  function laterText(x) {
    if (!x || !(x.msgs || []).length) return;
    runState().later.push({ d: S.day + (x.delay ?? 1), slot: x.slot || null, thread: x.thread || x.msgs[0].from, msgs: x.msgs });
  }
  function nextLater() {
    const st = runState();
    const i = st.later.findIndex(t => S.day > t.d + 1 || (S.day >= t.d && (!t.slot || t.slot === S.slot || SLOT_ORDER.indexOf(S.slot) > SLOT_ORDER.indexOf(t.slot))));
    if (i < 0) return null;
    const t = st.later.splice(i, 1)[0];
    return { id: `later-${S.day}-${i}`, thread: t.thread, msgs: t.msgs };
  }

  /* ── Variants (data/living-variants.js): often-seen narration gets a pool, added to the line the game already had.
     vary(path, base, key): the spot's line today; the whole pool is walked in a fixed shuffled order, moving on once per day
     the spot shows to the next line that fits today's month and weather, so nothing repeats until the walk has gone round.
     Entries are strings or { t, months, weather }. ── */
  const varyFits = (x, m, w) => typeof x === 'string' || ((!x.months || x.months.includes(m)) && (!x.weather || wxIn(x.weather, w)));
  function varyAll(path, base = []) {
    let v = D.variants; path.split('.').forEach(k => { v = v && v[k]; });
    return [...[].concat(base || []), ...(Array.isArray(v) ? v : [])].filter(Boolean);
  }
  // Today's lines for a spot (months / weather tags applied).
  function varyPool(path, base = []) {
    const m = dateOf(S.day).getMonth() + 1, w = weather(S.day);
    return varyAll(path, base).filter(x => varyFits(x, m, w)).map(x => (typeof x === 'string' ? x : x.t));
  }
  // key: a separate walk for one spot that shares a pool (class in the morning and the afternoon).
  function vary(path, base = [], key = path) {
    // The world reacts (crushes): a phase's own line for this spot, some days, instead of the usual one (crushLine).
    const cl = crushLine(path, key);
    if (cl) return cl;
    const all = varyAll(path, base);
    if (!all.length) return '';
    const m = dateOf(S.day).getMonth() + 1, w = weather(S.day);
    // A fixed shuffle of the whole pool (seeded by the spot's name); each day the spot shows, the walk moves on to the next
    // line that fits today, so a line comes back only after the walk has gone all the way round.
    const salt = [...path].reduce((a, c) => (a * 31 + c.charCodeAt(0)) % 9973, 7);
    const order = all.map((_, i) => i).sort((a, b) => seeded(salt + a * 17) - seeded(salt + b * 17));
    const st = ((S.vary ||= {})[key] ||= { n: -1, d: -1 });
    if (st.d !== S.day) {
      st.d = S.day;
      let k = st.n + 1;
      for (let tries = 0; tries < all.length && !varyFits(all[order[k % all.length]], m, w); tries++) k++;
      st.n = k;
    }
    const x = all[order[st.n % all.length]];
    return typeof x === 'string' ? x : x.t;
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
    // Christmas Eve: the story event on 12/24 is the picker (see `christmas` in the header). This engine pick is the fallback
    // for a 12/24 with no playable story event (12/24 evening; on the late slot if something else took the evening).
    if (md === XMAS && ['evening', 'late'].includes(slot) && !S.route.choices.xmas && S.phase === 'play' && (slot === 'evening' || S.spent[`${d}-evening`])
      && !D.events.some(e => e.date === XMAS && (!e.flag || flag(e.flag)))) return { kind: 'christmas' };
    // A link that closed before rank 10 says goodbye the morning after (see `farewell`).
    if (slot === 'early') { const l = farewellDue(d); if (l) return { kind: 'farewell', link: l }; }
    // Story ranks that happen on a date (a link's `forced`; see the header for storySlot / slot / storyEvents).
    const lateTaken = slot === 'late' && D.events.some(e => e.date === md && SLOT_FOR[e.slot || 'evening'] === 'late' && S.events.includes(e.id));
    for (const l of Object.values(LINKS)) {
      const p = progress(l.id);
      if (!l.forced?.includes(p.rank + 1)) continue;
      const rank = l.ranks[p.rank];
      if (opTonight) continue;
      if (l.storyEvents && !l.storyEvents.every(id => S.events.includes(id))) continue;
      if (l.stretch && p.rank >= 10 && !stretchOn(l, d)) continue;
      const rs = rank?.slot || l.storySlot || (homeOf(l, d).slot === 'evening' ? 'evening' : 'after');
      if (rs === 'late' && (lateTaken || S.phase !== 'play')) continue;
      if (rank?.scene && rank.after && d >= dayOf(rank.after) && fragGateMet(rank.gate) && rs === slot) return { kind: 'link', link: l };
    }
    return null;
  }
  /* Everyday life (data/daily-life.js): small once-a-playthrough routines that replace a plain beat (early morning, class,
     lunch), play before After School / the evening menu without spending them, or close a late night.
     An entry: { id, slot, after: 'M/D', until (default after + 30, so a late save never plays an early beat), schoolOnly,
       offOnly (days off only), days: [0-6], weather: ['rain', …], events: [story ids played], flags: [flags set],
       noFlags: [flags not set], met: [link ids met], ranks: { link: n }, ranksBelow: { link: n } (rank under n), route:
       { link: 'romance' | 'friend' | 'none' } (2026-10-21, the rank-15 batch), heading, place, time, bg, cast, scene }.
     One plays at most every other day, never on a trip or on a day whose story event has already played, and never in a
     free slot that's already spent. Of the routines that fit, the one that goes stale soonest plays first (then file order),
     so a crowded month doesn't leave beats to expire unseen; one in a later slot today that's three days from going stale
     holds the day for itself. */
  const dailyUntil = e => (e.until ? dayOf(e.until) : dayOf(e.after) + 30);
  function dailyFits(e, slot, d, info) {
    if (e.slot !== slot || d < dayOf(e.after) || d > dailyUntil(e)) return false;
    if (e.schoolOnly && info.type !== 'school') return false;
    if (e.offOnly && info.type !== 'off') return false;
    if (e.days && !e.days.includes(info.dow)) return false;
    if (e.weather && !wxIn(e.weather, info.weather)) return false;
    if (!(e.events || []).every(id => S.events.includes(id))) return false;
    if (!(e.flags || []).every(flag) || (e.noFlags || []).some(flag)) return false;
    if (!(e.met || []).every(isMet)) return false;
    if (e.ranks && !Object.entries(e.ranks).every(([id, r]) => progress(id).rank >= r)) return false;
    if (e.ranksBelow && !Object.entries(e.ranksBelow).every(([id, r]) => progress(id).rank < r)) return false;
    if (e.route && !routeFits(e.route)) return false;
    if (e.heading && !headingIs(e.heading)) return false;
    return true;
  }
  // { link: 'romance' | 'friend' | 'none' (no route yet) } for routines and run-ins; a reversed link fits nothing.
  const routeFits = want => Object.entries(want).every(([id, r]) => { const p = progress(id); return !p.reversed && (r === 'none' ? !p.route : p.route === r); });
  function dailyLife(slot = S.slot, d = S.day) {
    const info = dayInfo(d), state = S.dailyLife || { seen: [], lastDay: -99 };
    if (info.type === 'trip' || d - (state.lastDay ?? -99) < 2 ||
      D.events.some(e => e.date === info.md && S.events.includes(e.id))) return null;
    if (['after', 'evening'].includes(slot) && S.spent[`${d}-${slot}`]) return null;
    if (holidayDue(slot, d)) return null;
    // A morning-after crush moment (glow) has only today: a routine waits for it.
    if (glowing(d) && (D.crush.moments || []).some(m => m.glow && !crushState().seen.includes(m.id) && crushFits(m, slot, d, info))) return null;
    const seen = state.seen || [];
    const fit = D.dailyLife.map((e, i) => ({ e, i })).filter(({ e }) => !seen.includes(e.id) && dailyFits(e, slot, d, info));
    fit.sort((a, b) => dailyUntil(a.e) - dailyUntil(b.e) || a.i - b.i);
    // A later slot's routine about to go stale (three days or less) keeps today free for itself, so evening and late-night
    // routines aren't crowded out by mornings that could wait (Haechan's batch made Nov-Jan busy enough to need this).
    const order = slotsFor(info), later = order.slice(order.indexOf(slot) + 1);
    const urgent = D.dailyLife.filter(e => later.includes(e.slot) && !seen.includes(e.id) && dailyUntil(e) - d <= 3 && dailyFits(e, e.slot, d, info))
      .sort((a, b) => dailyUntil(a) - dailyUntil(b))[0];
    if (urgent && (!fit[0] || dailyUntil(urgent) < dailyUntil(fit[0].e))) return null;
    return fit[0]?.e || null;
  }
  function finishDailyLife(id) {
    if ((D.crush.moments || []).some(m => m.id === id)) return finishCrush(id); // a crush moment plays through playDailyLife too
    const e = D.dailyLife.find(e => e.id === id); if (!e) return;
    const state = S.dailyLife ||= { seen: [], lastDay: -99 };
    if (!Array.isArray(state.seen)) state.seen = [];
    if (!state.seen.includes(id)) { state.seen.push(id); state.lastDay = S.day; save(); }
  }

  /* ── Crushes (data/crush.js and data/crush-<id>.js → window.FEMC_GAME_CRUSH; 2026-10-23, Kat's ruling in the lore bible):
     the stretch before a link's romance route, lived at school, in the dorm, in the story and by text. Data-driven per
     character, so any link can have one (CLAUDE.md "Adding a crush track").
     tracks[id]: { optIn: { from, until }, steps: [{ phase, after, rank, warmth, by }], closes }
       optIn: the window for the track's first moment (a moment with optIn: id), whose choices carry { crush: { id: 'in' } }
         (lean in) or { crush: { id: 'out' } } (don't). A save that's past `until` without one reads as 'out'.
       steps, in order ('crush', 'puppy', 'almost'): reached on or after `after` when the link's rank is at least `rank`, OR
         the warmth from Solar's choices is at least `warmth`, OR `by` has passed and she hasn't cooled (warmth >= 0).
       closes: a track that isn't 'dating' by then fades (Shinjiro, 10/4).
       auto: { after, events, flags } (2026-10-23, multi-romance batch): no opt-in; the track starts at 'noticed' by itself
         once these hold (Haechan: the pull isn't something she chooses). A track with `auto` and no optIn never reads 'out'.
       pull: true: another link's romance route doesn't settle this track (Haechan, Kat's "honest and torn": dating
         Akihiko holds while the pull plays). Only its own route (friend → 'faded', romance → 'dating'), letting it go
         ({ crush: { id: 'out' } }) or `closes` settle it. A pull track's own romance still settles every other growing track.
     Phases: 'none' (not asked yet) · 'out' (said no, or missed it) · 'noticed' → 'crush' → 'puppy' → 'almost' (the steps)
       · 'dating' (the link's route is 'romance', from any phase, settled) · 'faded' (a friendship now, settled: the link's
       route is 'friend', another link's route is 'romance', { crush: { id: 'out' } } after leaning in, or `closes`).
       Two tracks can grow at once (the triangle); a romance route on one settles every other growing track into 'faded'.
     Save: S.crush = { t: { id: { opt: null | 'in' | 'out', phase, warmth, peak (highest of noticed..dating reached, 1-5),
       since: { phase: day } } }, seen: [moment ids], lastDay }. crushTick(id) brings a track up to date and never goes back;
       everything that reads a phase calls it, so old saves settle on first read (normCrush gives them the empty field).
     Moments (moments[]): { id, who, optIn: id, crush: { id: [phases] | 'phase' } (all must hold), slot, after, until (default
       after + 21), schoolOnly, offOnly, days, weather, when ('tartarus' | 'quiet'), events, flags, noFlags, met, ranks,
       ranksBelow, route, heading, free (true: only while no link is on its romance route; the searchers' opt-ins, so
       nobody is asked to lean toward someone new while she's with someone), taken (true: only while some other link is on its
       romance route; the spice batch's "we can't" moments), glow (the day after a scene's { glow }: see glowIs), label,
       place, time, bg, cast, scene }. One plays like an everyday-life routine (ui.js
       playDailyLife: in the slot's place, never spending a free slot), at most one every three days (two from 9/1), never on a day a routine
       already played (a late-night one excepted) or a story scene played, a trip, a held holiday, a full-moon or rest night (late), or a night a
       link's late night is due or has played;
       the opt-in first, then stale-first.
     The world reacts (world['path']: [{ t, crush, months, weather, after, until, chance }]): phase lines for often-seen spots
       (living-variants paths: lunch.clear, classQuiet, late.battled, study, home…; and 'chatter.morning' / 'chatter.lunch' /
       'evening.sub' read by ui.js). On about half the days one fits (chance, default 0.5), it shows instead of the usual line.
     Scenes: { ifCrush: { id: [phases] | 'phase' }, then, else }; { ifCrushed: { id: 'phase' } } (that phase was reached at some
       point, e.g. a rank scene acknowledging the build-up after the route has made it 'dating'); { crush: { id: 'in' | 'out'
       | ±n } } as a line, on a choice or on a text reply (n: warmth). Texts (dated, ambient, afterRank) take a `crush` gate.
       { ifTaken: id | [ids], then, else }: some link other than those is on its romance route (she's with someone else). */
  const CRUSH = ['noticed', 'crush', 'puppy', 'almost', 'dating'];
  const crushState = () => (S.crush = normCrush(S.crush));
  function crushTrack(id) { const c = crushState(), t = (c.t[id] ||= { opt: null, phase: 'none', warmth: 0, peak: 0, since: {} }); t.since ||= {}; return t; }
  function crushTick(id, d = S.day) {
    const T = D.crush.tracks?.[id];
    if (!T) return 'none';
    const t = crushTrack(id), p = S.links[id] || {};
    let ph = t.phase || 'none';
    if (p.route === 'romance') ph = 'dating';
    else if (['dating', 'faded', 'out'].includes(ph)) { /* settled */ }
    else if (t.opt === 'out') ph = 'out';
    else if (!t.opt && T.auto && autoMet(T.auto, d)) { t.opt = 'in'; ph = 'noticed'; }
    else if (!t.opt) { if (T.optIn?.until && d > dayOf(T.optIn.until)) { t.opt = 'out'; ph = 'out'; } }
    if (p.route === 'romance' || ['dating', 'faded', 'out'].includes(ph) || t.opt !== 'in') { /* settled, or not asked yet */ }
    else if (p.route === 'friend' || (!T.pull && takenBy(id)) || (T.closes && d >= dayOf(T.closes))) ph = 'faded';
    else {
      if (ph === 'none') ph = 'noticed';
      for (const st of T.steps || []) {
        if (CRUSH.indexOf(st.phase) <= CRUSH.indexOf(ph)) continue;
        const w = t.warmth || 0;
        if (!(d >= dayOf(st.after) && ((p.rank || 0) >= (st.rank ?? 99) || w >= (st.warmth ?? 99) || (st.by && d >= dayOf(st.by) && w >= 0)))) break;
        ph = st.phase;
      }
    }
    if (ph !== t.phase) { t.phase = ph; t.since[ph] = d; }
    const i = CRUSH.indexOf(ph) + 1;
    if (i > (t.peak || 0)) t.peak = i;
    return ph;
  }
  const takenBy = except => { const not = [].concat(except); return Object.entries(S.links).some(([k, q]) => !not.includes(k) && q?.route === 'romance'); };
  const autoMet = (a, d) => d >= dayOf(a.after || '4/6') && (!a.events || a.events.every(e => S.events.includes(e))) && (!a.flags || [].concat(a.flags).every(flag));
  const crushIs = want => Object.entries(want || {}).every(([id, ph]) => [].concat(ph).includes(crushTick(id)));
  const crushedAt = want => Object.entries(want || {}).every(([id, ph]) => { crushTick(id); return (crushTrack(id).peak || 0) >= CRUSH.indexOf(ph) + 1; });
  // { id: 'in' | 'out' | n }: lean in (a track not asked yet, or said no, starts at 'noticed'), let it go ('out', or 'faded'
  // once it had started), or warmth.
  function crushApply(v) {
    Object.entries(v || {}).forEach(([id, x]) => {
      if (!D.crush.tracks?.[id]) return;
      const t = crushTrack(id);
      crushTick(id);
      if (x === 'in') { if (['none', 'out'].includes(t.phase)) { t.opt = 'in'; t.phase = 'noticed'; t.since.noticed = S.day; } }
      else if (x === 'out') {
        if (t.phase === 'none') { t.opt = 'out'; t.phase = 'out'; t.since.out = S.day; }
        else if (['noticed', 'crush', 'puppy', 'almost'].includes(t.phase)) { t.opt = 'out'; t.phase = 'faded'; t.since.faded = S.day; }
      } else if (typeof x === 'number') t.warmth = (t.warmth || 0) + x;
      crushTick(id);
    });
  }
  const crushPhases = () => Object.fromEntries(Object.keys(D.crush.tracks || {}).map(id => [id, crushTick(id)]));
  const crushUntil = m => (m.until ? dayOf(m.until) : dayOf(m.after) + 21);
  function crushFits(m, slot, d = S.day, info = dayInfo(d)) {
    if (m.slot !== slot || d < dayOf(m.after) || d > crushUntil(m)) return false;
    if (m.optIn) { if (crushTick(m.optIn, d) !== 'none') return false; }
    if (m.free && takenBy([])) return false;
    else if (m.crush && !Object.entries(m.crush).every(([id, ph]) => [].concat(ph).includes(crushTick(id, d)))) return false;
    if (m.who && LINKS[m.who] && progress(m.who).reversed) return false;
    if (m.taken && !takenBy([m.who])) return false;
    if (m.glow && !glowIs(m.glow, d)) return false;
    if (m.when === 'tartarus' ? S.tonight !== 'battled' : m.when === 'quiet' && S.tonight === 'battled') return false;
    return dailyFits({ ...m, until: mdOf(crushUntil(m)) }, slot, d, info);
  }
  // Days between moments: three in the spring and summer (Akihiko and Shinjiro), two from September, when the searchers
  // arrive and the house fills up (the multi-romance batch, 2026-10-23: five tracks share the autumn).
  const crushGap = d => (d >= dayOf('9/1') ? 2 : 3);
  function crushDue(slot = S.slot, d = S.day) {
    const M = D.crush.moments || [], c = crushState(), info = dayInfo(d);
    if (!M.length || S.phase !== 'play' || ['trip', 'prologue'].includes(info.type)) return null;
    // A morning-after moment (glow, the spice batch) doesn't wait for the gap or a routine: it only has the one day.
    const spaced = d - c.lastDay >= crushGap(d) && !(S.dailyLife?.lastDay === d && slot !== 'late');
    if (!spaced && !glowing(d)) return null;
    if (D.events.some(e => e.date === info.md && S.events.includes(e.id))) return null;
    if (['after', 'evening'].includes(slot) && S.spent[`${d}-${slot}`]) return null;
    if (holidayDue(slot, d)) return null;
    // Late: a link's own late night (lateNightDue) goes first; a crush moment only takes a night nobody else has.
    if (slot === 'late' && (info.moon.full || S.tonight === 'rest' || S.lateNights?.lastDay === d || lateNightDue(d))) return null;
    const fit = M.map((m, i) => ({ m, i })).filter(({ m }) => !c.seen.includes(m.id) && (spaced || m.glow) && crushFits(m, slot, d, info));
    if (!fit.length) return null;
    // A moment that needs today's weather (the umbrella in the rain) goes before the others: that weather may not come again.
    // A morning-after one (glow) goes first of all.
    fit.sort((a, b) => (b.m.glow ? 1 : 0) - (a.m.glow ? 1 : 0) || (b.m.optIn ? 1 : 0) - (a.m.optIn ? 1 : 0) || (b.m.weather ? 1 : 0) - (a.m.weather ? 1 : 0) || crushUntil(a.m) - crushUntil(b.m) || a.i - b.i);
    const m = fit[0].m;
    return { ...m, link: m.who || null, label: m.label || LINKS[m.who]?.short || 'Everyday life' };
  }
  function finishCrush(id) {
    const c = crushState();
    if (!c.seen.includes(id)) c.seen.push(id);
    c.lastDay = S.day;
    crushPhases();
    save();
  }
  // The world reacts: today's phase line for a spot, or null (about half the days a line fits; walks them in order).
  function crushLine(path, key = path) {
    const pool = D.crush.world?.[path];
    if (!pool?.length || S.phase !== 'play') return null;
    const m = dateOf(S.day).getMonth() + 1, w = weather(S.day);
    const ok = x => varyFits(x, m, w) && (!x.after || S.day >= dayOf(x.after)) && (!x.until || S.day <= dayOf(x.until)) && (!x.crush || crushIs(x.crush))
      && (!x.flags || x.flags.every(flag)) && (!x.events || x.events.every(id => S.events.includes(id))) && (!x.glow || glowIs(x.glow)) && (!x.heading || headingIs(x.heading));
    let fits = pool.map((x, i) => ({ x, i })).filter(({ x }) => ok(x));
    // The day after a night (glow, the spice batch): those lines win the spot, every time.
    const glowFits = fits.filter(({ x }) => x.glow);
    if (glowFits.length) fits = glowFits;
    if (!fits.length) return null;
    const salt = [...key].reduce((a, ch) => (a * 31 + ch.charCodeAt(0)) % 9973, 11);
    if (!glowFits.length && seeded(S.day * 13 + salt) >= (fits[0].x.chance ?? 0.5)) return null;
    const st = ((S.vary ||= {})[`${key}~crush`] ||= { n: -1, d: -1 });
    if (st.d !== S.day) { st.d = S.day; st.n += 1; }
    const x = fits[st.n % fits.length].x;
    return typeof x === 'string' ? x : x.t;
  }
  /* ── The morning after (2026-10-24, the spice batch; data/spice-*.js). A scene's { glow: 'akihiko' } (or 'akihiko:caught',
     or { who, kind }; kind 'night' by default, 'caught' for a near miss) marks tonight. Only the next day, gates read it:
     `glow` on crush moments, late nights and world lines, and { ifGlow, then, else } in scenes, each true (anyone), 'id',
     'id:kind', '*:kind', a list of those, or { who, kind } (each a value or a list). On that day a glow moment skips the
     crush gap and a routine's day (it goes first, and a routine waits for it), and glow world lines win their spot. ── */
  function setGlow(v) {
    const o = typeof v === 'string' ? { who: v.split(':')[0], kind: v.split(':')[1] } : { ...(v || {}) };
    S.glow = { who: o.who || null, kind: o.kind || 'night', day: S.day };
  }
  const glowing = (d = S.day) => !!S.glow && d === S.glow.day + 1;
  function glowIs(want, d = S.day) {
    const g = S.glow;
    if (!g || d !== g.day + 1) return false;
    if (want === true) return true;
    return [].concat(want).some(w => {
      const o = typeof w === 'string' ? { who: w.split(':')[0], kind: w.split(':')[1] } : (w || {});
      return (!o.who || o.who === '*' || [].concat(o.who).includes(g.who)) && (!o.kind || [].concat(o.kind).includes(g.kind));
    });
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
  // { end: 'id' } in a scene (or the solstice's route-bad flag) stops the calendar: the game jumps to the last night (calendar
  // `end`, 3/7, late), where the endings event plays, then the end screen. The finale (a6-last-train) normally plays the night
  // before; a save from before the year ran to March that played it on the old date ('finale-early', migrateYear) goes to its
  // ending too.
  const FINALE = 'a6-last-train';
  const endingDue = () => !!(S.flags['the-end'] || S.flags['route-bad'] || (S.flags['finale-early'] && S.events.includes(FINALE))) && S.day < END();
  function jumpToEnd() { S.day = END(); S.slot = 'late'; S.tonight = null; save(); }
  function endingName() {
    const f = S.flags;
    return f['route-bad'] ? 'the last stop' : f['true-final'] ? 'I am thou' : f['route-R'] ? 'where it begins' : f['route-S'] ? 'low tide' : f['route-H'] ? 'the unfated life' : 'here';
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
    S.battleCarry = old.battleSave || old.battleCarry || null;
    // The keychains and phone cases are a collection, so they come along (gacha.js); counters and plumes start over.
    // Since the skins batch: series keychains, finished series and the Wardrobe (owned looks, what's worn) come along too.
    if (old.gacha) Object.assign(S.gacha, { keys: { ...(old.gacha.keys || {}) }, cases: [...(old.gacha.cases || [])], caseOn: old.gacha.caseOn || null, stars: old.gacha.stars || 0,
      skeys: { ...(old.gacha.skeys || {}) }, done: [...(old.gacha.done || [])], cos: old.gacha.cos ? { own: [...(old.gacha.cos.own || [])], on: { ...(old.gacha.cos.on || {}) }, portraits: old.gacha.cos.portraits !== false } : undefined });
    if (S.gacha && S.gacha.cos === undefined) delete S.gacha.cos;
    save();
  }

  /* ── Goodbyes and Christmas Eve ── */
  function farewellDue(d = S.day) {
    return Object.values(LINKS).find(l => {
      if (!l.closes || d <= dayOf(l.closes) || l.status === 'stub' || !isMet(l.id)) return false;
      const p = progress(l.id);
      return p.rank > 0 && p.rank < 10 && !p.farewell; // rank 10 is a closing link's goodbye, whatever its maxRank
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
  /* ── Hidden links (a link's `secret`, see the header): the quiet evening option that finds them. ── */
  function secretsDue(d = S.day) {
    const info = dayInfo(d);
    return Object.values(LINKS).filter(l => {
      const x = l.secret; if (!x || x.via || flag(x.flag) || l.status === 'stub') return false;
      if (x.after && d < dayOf(x.after)) return false;
      if (x.until && d > dayOf(x.until)) return false;
      if (x.days && !x.days.includes(info.dow)) return false;
      if (x.met && !x.met.every(isMet)) return false;
      if (x.ranks && !Object.entries(x.ranks).every(([id, r]) => progress(id).rank >= r)) return false;
      return info.type !== 'trip';
    });
  }
  // After its scene: the flag, met and registered; the evening is spent with them (keepSlot: found on a run-in, so the slot
  // stays the activity's).
  function findSecret(id, gained = 0, keepSlot = false) {
    const l = LINKS[id]; if (!l?.secret) return null;
    S.flags[l.secret.flag] = true;
    if (!S.met.includes(id)) S.met.push(id);
    bond(id, gained); // the discovery's ♪ count toward rank 1
    if (!S.registered.includes(id)) { S.registered.push(id); toast('register', `Registered to the Compendium: ${l.name}`); }
    if (!keepSlot) S.spent[`${S.day}-${S.slot}`] = `secret:${id}`;
    save();
    return l;
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
  // The story picker's { christmasOptions: true } entry: one option per christmasOptions() link not already offered.
  function christmasChoices(offered = []) {
    return christmasOptions().filter(l => !offered.includes(l.id)).map(l => ({ t: `(Text ${l.short}.)`, christmas: l.id }));
  }
  // What a { christmas: id } option plays: the link's own Christmas scene (scene break with its place/time/music, then the
  // scene in that link's context, so its ifRoute lines read that link's route).
  function christmasLines(id) {
    const l = LINKS[id], c = l?.christmas;
    if (!c) return [];
    return [{ place: c.place || linkPlace(l), time: c.time || 'Evening', music: c.music || 'tender' }, { asLink: id }, ...(c.scene || []), { asLink: null }];
  }

  /* ── Class and exams ── */
  function classQuestion() {
    const m = dayInfo().date.getMonth() + 1;
    const pool = D.q.classes.filter(q => (q.months || []).includes(m) && !S.classSeen.includes(q.id));
    const all = pool.length ? pool : D.q.classes.filter(q => !S.classSeen.includes(q.id));
    return all.length ? all[Math.floor(seeded(S.day * 3 + SLOT_ORDER.indexOf(S.slot)) * all.length)] : null;
  }
  function answerClass(q, i) {
    if (!S.classSeen.includes(q.id)) S.classSeen.push(q.id);
    const right = i === q.correct;
    if (right) addStats({ knowledge: 1, charm: 1 });
    // Haechan's Recruitment Pitch: +1 Charm when she gets the hinted one right.
    if (right && S.perks?.pitchQ === q.id) perkVal('pitch').forEach(o => addStats(o.stat));
    save();
    return right;
  }
  /* Class perks: Cherry's Back Row (half the doze chance), Chenle's Respectfully, Though (guidance: once a week, a retry), Haechan's
     Recruitment Pitch (once a day, a hint: one wrong answer crossed out). */
  const dozeChance = () => (D.stats.conditions[S.condition]?.doze || 0) * (perkOn('backRow') ? 0.5 : 1);
  function dozed() { perkVal('backRow').forEach(o => addStats(o.stat)); }
  const canRetryClass = () => !!perkOn('guidance') && weeklyFree('guidance');
  const useGuidance = () => weekly('guidance');
  function classHint(q) {
    if (!perkOn('pitch') || (S.perks && S.perks.pitchDay === S.day)) return null;
    S.perks = S.perks || { week: {} }; S.perks.pitchDay = S.day; S.perks.pitchQ = q.id;
    const wrong = q.a.map((_, i) => i).filter(i => i !== q.correct);
    return wrong[Math.floor(seeded(S.day + q.id.length) * wrong.length)];
  }
  // Mitsuru's Study Hall (+1 Knowledge, +2 in exam weeks) and Jungwon's Tutor Session (+1 anywhere) at the dorm.
  function studyBonus() {
    const out = {};
    perkVal('studyHall').forEach(o => { const examWeek = Array.from({ length: 7 }, (_, k) => examOn(S.day + k)).some(Boolean); Object.entries(examWeek ? o.exam : o.stat).forEach(([k, v]) => { out[k] = (out[k] || 0) + v; }); });
    perkVal('studyAny').forEach(o => Object.entries(o).forEach(([k, v]) => { out[k] = (out[k] || 0) + v; }));
    return out;
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
  // The ranking board: Knowledge carries most of it, the answers move you up or down. 3rd-years only.
  function examResult(id) {
    const x = S.exams[id] || { answers: {} };
    const total = (D.q.exams[id]?.questions || []).length || 1;
    const right = Object.values(x.answers).filter(Boolean).length;
    const acc = right / total, ac = (statRank('knowledge') - 1) / (statDef('knowledge').at.length - 1);
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
    if (r.place <= 3) addStats({ knowledge: 5, charm: 4 }, true);
    else if (r.place <= 10) addStats({ knowledge: 3, charm: 2 }, true);
    else addStats({ knowledge: 1 }, true);
    save();
    return r;
  }

  /* ── Phone ── */
  function appendPhone(thread, messages) {
    const phone = S.phone, th = (phone.threads[thread] ||= []);
    const latest = Math.max(0, phone.sequence || 0, ...Object.values(phone.threads).flatMap(xs => xs.map(m => m.seq || 0)));
    phone.sequence = latest;
    messages.forEach(m => th.push({ ...m, d: S.day, slot: S.slot, seq: ++phone.sequence }));
  }
  /* Texts (data/texts.js), three kinds, at most one a time slot:
       texts: dated ones (date, slot, flag, rank, met, events), delivered up to two days late, then dropped.
       afterRank (a link's own field): { n: { delay (days, default 1), slot, msgs, reply } }, sent `delay` days after rank n
         was reached (the link's rankDay), within four days of that; it reacts to the last rank scene played.
       ambient: { id, from: 'M/D', to: 'M/D', thread, slot, flag(s), met, rank, events, msgs, reply }, random daytime texts
         and group chats: one may arrive on a random day inside its window (at most one a day), and surely by its last day
         or two; past `to` it's dropped.
     A text's id goes into phone.done once it's sent or dropped. textById() finds any of them (for replies). */
  const AR_ID = (l, n) => `ar-${l.id}-${n}`;
  function afterRankTexts() {
    const out = [];
    Object.values(LINKS).forEach(l => Object.entries(l.afterRank || {}).forEach(([n, t]) => out.push({ ...t, id: AR_ID(l, n), thread: t.thread || l.id, link: l.id, rank: +n })));
    return out;
  }
  function textById(id) {
    const t = D.texts.texts.find(t => t.id === id) || (D.texts.ambient || []).find(t => t.id === id) || afterRankTexts().find(t => t.id === id) || null;
    return t ? withVariant(t, S.phone.vars?.[id]) : null;
  }
  // A text's `variants` (by heading): which one goes out is decided when it's sent and remembered for its replies.
  const variantFor = t => (t?.variants && t.variants[heading()] ? heading() : null);
  const withVariant = (t, key) => (key && t.variants?.[key] ? { ...t, ...t.variants[key] } : t);
  function textOk(t) {
    if (t.slot && t.slot !== S.slot) return false;
    if (t.flag && ![].concat(t.flag).every(flag)) return false;
    if (t.noFlag && [].concat(t.noFlag).some(flag)) return false;
    if (t.rank && typeof t.rank === 'object' && !Object.entries(t.rank).every(([id, r]) => progress(id).rank >= r)) return false;
    if (t.met && !t.met.every(isMet)) return false;
    if (t.events && !t.events.every(id => S.events.includes(id))) return false;
    if (t.route && !Object.entries(t.route).every(([id, r]) => progress(id).route === r)) return false;
    if (t.heading && !headingIs(t.heading)) return false;
    if (t.crush && !crushIs(t.crush)) return false;
    return true;
  }
  function sendText(t) {
    const vk = variantFor(t);
    if (vk) { (S.phone.vars ||= {})[t.id] = vk; t = withVariant(t, vk); }
    if (!/^later-/.test(t.id)) S.phone.done.push(t.id);
    appendPhone(t.thread, t.msgs);
    S.phone.unread[t.thread] = (S.phone.unread[t.thread] || 0) + t.msgs.length;
    if (t.reply) S.phone.pending[t.thread] = t.id;
    toast('text', `${D.texts.threads[t.thread] || name(t.thread)}: ${t.msgs[0].t}`, { thread: t.thread, from: t.msgs[0].from, msg: t.msgs[0].t, count: t.msgs.length });
  }
  function nextDated() {
    for (const t of D.texts.texts) {
      if (S.phone.done.includes(t.id) || dayOf(t.date) > S.day) continue;
      if (S.day > dayOf(t.date) + 2) { S.phone.done.push(t.id); continue; }
      if (t.slot && t.slot !== S.slot && dayOf(t.date) === S.day) continue;
      if (!textOk({ ...t, slot: null })) continue;
      return t;
    }
    return null;
  }
  function nextAfterRank() {
    for (const t of afterRankTexts()) {
      if (S.phone.done.includes(t.id)) continue;
      const p = progress(t.link), at = p.rankDay?.[t.rank];
      if (typeof at !== 'number' || p.reversed) continue;
      const from = at + (t.delay ?? 1);
      if (S.day < from) continue;
      if (S.day > from + 4) { S.phone.done.push(t.id); continue; }
      if (textOk(t)) return t;
    }
    return null;
  }
  function nextAmbient() {
    if (S.phone.ambientDay === S.day) return null;
    const ready = [];
    for (const t of D.texts.ambient || []) {
      if (S.phone.done.includes(t.id) || S.day < dayOf(t.from)) continue;
      if (S.day > dayOf(t.to)) { S.phone.done.push(t.id); continue; }
      if (textOk(t)) ready.push(t);
    }
    if (!ready.length) return null;
    const urgent = ready.filter(t => S.day >= dayOf(t.to) - 1);
    if (urgent.length) return urgent[0];
    return seeded(S.day * 5 + SLOT_ORDER.indexOf(S.slot) * 3 + ready.length) < 0.2 ? ready[Math.floor(seeded(S.day * 3 + 1) * ready.length)] : null;
  }
  function deliverTexts() {
    sendHolidayInvites();
    const t = nextDated() || nextAfterRank() || nextLater() || nextAmbient();
    if (t) { if ((D.texts.ambient || []).includes(t)) S.phone.ambientDay = S.day; sendText(t); }
    maybeInvite();
    save();
  }
  function replyText(thread, i) {
    const t = textById(S.phone.pending[thread]);
    if (!t) return;
    const o = t.reply[i];
    appendPhone(thread, [...(!o.silent ? [{ from: 'solar', t: o.t }] : []), ...(o.then || [])]);
    if (o.link && o.notes && isMet(o.link)) progress(o.link).xp += o.notes;
    if (o.crush) crushApply(o.crush);
    if (o.stat) addStats(o.stat);
    delete S.phone.pending[thread];
    save();
  }

  /* ── Holidays (a link's `holidays`): { 'M/D': { ask, yes, ok, no, sorry, rank (default 1), route, flag, events, slot
     ('after' default, or 'evening'), title, place, time, music, bg, scene } }. On the morning of that date each met link whose
     holiday is open (not reversed, rank reached, route / flag / events met, not closed) texts its `ask`. When the holiday's slot
     comes, the invitations are the choice (ui.js holidayPicker): spend the day with one of them, which plays that link's holiday
     scene (its only chance this playthrough), or make your own plans. The others get `sorry` from Solar and their `no`. A day
     with them spends the slot; its ♪ go toward their next rank. S.holiday is today's invitations; S.holidays[md] the answer. ── */
  function holidayOf(l, md) { return l.holidays?.[md] || null; }
  function holidayInvites(d = S.day) {
    const md = mdOf(d);
    return Object.values(LINKS).filter(l => {
      const h = holidayOf(l, md); if (!h || l.status === 'stub' || !isMet(l.id)) return false;
      const p = progress(l.id);
      if (p.reversed || p.rank < (h.rank ?? 1)) return false;
      if (h.route && p.route !== h.route) return false;
      if (h.flag && ![].concat(h.flag).every(flag)) return false;
      if (h.events && !h.events.every(id => S.events.includes(id))) return false;
      if (h.heading && !headingIs(h.heading)) return false;
      if (l.closes && d >= dayOf(l.closes)) return false;
      return true;
    });
  }
  function sendHolidayInvites() {
    if (S.slot !== 'early' || S.phase !== 'play' || (S.holiday && S.holiday.d === S.day) || S.holidays?.[mdOf(S.day)]) return;
    const list = holidayInvites();
    if (!list.length) return;
    const md = mdOf(S.day);
    S.holiday = { d: S.day, md, links: list.map(l => l.id), pick: null };
    list.forEach(l => {
      const h = holidayOf(l, md);
      appendPhone(l.id, [{ from: l.id, t: h.ask, holiday: md }]);
      S.phone.unread[l.id] = (S.phone.unread[l.id] || 0) + 1;
      toast('text', `${l.short}: ${h.ask}`, { thread: l.id, from: l.id, msg: h.ask, count: 1 });
    });
  }
  // Today's invitations, waiting for this slot (null once answered, or when the slot is spent).
  function holidayDue(slot = S.slot, d = S.day) {
    const h = S.holiday;
    if (!h || h.d !== d || h.pick || S.spent[`${d}-${slot}`]) return null;
    const links = h.links.map(id => LINKS[id]).filter(l => l && (holidayOf(l, h.md)?.slot || 'after') === slot);
    return links.length ? { md: h.md, links } : null;
  }
  // Yes to one link: the texts, then the scene to play (ui.js plays it in the link's context).
  function acceptHoliday(id) {
    const h = S.holiday; if (!h) return null;
    const l = LINKS[id], e = holidayOf(l, h.md);
    h.pick = id;
    appendPhone(id, [{ from: 'solar', t: e.yes || 'yes!! where' }, { from: id, t: e.ok || 'ok. see you soon' }]);
    h.links.filter(x => x !== id).forEach(x => { const o = holidayOf(LINKS[x], h.md); appendPhone(x, [{ from: 'solar', t: o.sorry || 'cant today. im so sorry' }, { from: x, t: o.no || 'ok. next time' }]); });
    save();
    return { link: l, scene: e.scene || [], place: e.place || linkPlace(l), time: e.time || 'Daytime', music: e.music, bg: e.bg, title: e.title || h.md };
  }
  function finishHoliday(id, gained = 0) {
    const h = S.holiday; if (!h) return;
    (S.holidays ||= {})[h.md] = id;
    S.spent[`${S.day}-${holidayOf(LINKS[id], h.md)?.slot || 'after'}`] = `holiday:${id}`;
    const p = progress(id); p.lastDay = S.day;
    bond(id, gained);
    save();
  }
  // Your own plans: everyone who asked gets a kind no.
  function declineHolidays() {
    const h = S.holiday; if (!h) return;
    h.pick = 'none'; (S.holidays ||= {})[h.md] = 'none';
    h.links.forEach(x => { const o = holidayOf(LINKS[x], h.md); appendPhone(x, [{ from: 'solar', t: o.sorry || 'cant today. im so sorry' }, { from: x, t: o.no || 'ok. next time' }]); });
    save();
  }

  /* ── Late nights (a link's `lateNights`): [{ id, after, until, rank, route ('romance' | 'friend' | 'none' = no route yet),
     flag, events, days: [0-6], when: 'tartarus' (after a night in the tower) | 'quiet' (not after one) | 'rain', kind:
     'dorm' (they live in the dorm) | 'visit' (a guesthouse resident's visit that ends tonight) | 'call' (by phone),
     place, time, music, bg, scene, and since the spice batch (2026-10-24) crush: { id: [phases] }, taken, free, glow }]. One may
     play in the late slot instead of the plain bedtime line, at most every third
     night, never on a trip, a full-moon night or a night a story scene already took. Each plays once. Who lives where is
     data/living-world.js FEMC_GAME_LODGING: only dorm residents get 'dorm' scenes (the test holds every file to it). ── */
  function lateNightFits(l, e, d = S.day) {
    const p = progress(l.id), info = dayInfo(d);
    if (!isMet(l.id) || p.reversed || p.rank < (e.rank ?? 1)) return false;
    if (d < dayOf(e.after) || (e.until && d > dayOf(e.until))) return false;
    if (e.route === 'none' ? !!p.route : e.route && p.route !== e.route) return false;
    if (e.flag && ![].concat(e.flag).every(flag)) return false;
    if (e.events && !e.events.every(id => S.events.includes(id))) return false;
    if (e.days && !e.days.includes(info.dow)) return false;
    const battled = S.tonight === 'battled';
    if (e.when === 'tartarus' ? !battled : battled) return false;
    if (e.when === 'rain' && !wxIn(['rain'], info.weather)) return false;
    if (e.heading && !headingIs(e.heading)) return false;
    if (e.noFlags && [].concat(e.noFlags).some(flag)) return false;
    // The spice batch (2026-10-24): a crush phase, someone else's romance (taken), the night after another (glow).
    if (e.crush && !crushIs(e.crush)) return false;
    if (e.taken && !takenBy([l.id])) return false;
    if (e.free && takenBy([])) return false;
    if (e.glow && !glowIs(e.glow, d)) return false;
    if (l.closes && d >= dayOf(l.closes) && !stretchOn(l, d)) return false;
    return true;
  }
  function lateNightDue(d = S.day) {
    const info = dayInfo(d), st = S.lateNights || { seen: [], lastDay: -99 };
    if (S.phase !== 'play' || info.type === 'trip' || info.moon.full || S.tonight === 'rest' || d - (st.lastDay ?? -99) < 3) return null;
    if (D.events.some(e => e.date === info.md && SLOT_FOR[e.slot || 'evening'] === 'late' && S.events.includes(e.id))) return null;
    const all = [];
    Object.values(LINKS).forEach(l => (l.lateNights || []).forEach(e => { if (!(st.seen || []).includes(e.id) && lateNightFits(l, e, d)) all.push({ link: l, e }); }));
    if (!all.length) return null;
    // Rotate between people night to night; within one person, their scenes in order.
    const people = [...new Set(all.map(x => x.link.id))];
    const who = people[d % people.length];
    return all.find(x => x.link.id === who);
  }
  function finishLateNight(id, gained = 0) {
    const st = S.lateNights ||= { seen: [], lastDay: -99 };
    if (!Array.isArray(st.seen)) st.seen = [];
    if (!st.seen.includes(id)) st.seen.push(id);
    st.lastDay = S.day;
    const hit = Object.values(LINKS).find(l => (l.lateNights || []).some(e => e.id === id));
    if (hit) bond(hit.id, Math.min(2, gained));
    save();
  }

  /* ── Trips with a day plan (data/yakushima.js FEMC_GAME_TRIP[trip id].days['M/D'][slot]): a scene ({ place, time, bg,
     music, scene }) or a pick ({ prompt, options: [{ id, who, label, sub, place, time, bg, needs: { join | flag | met },
     scene }] }) where she chooses who to spend that part of the day with. Each part plays once (S.trip.done). Choices' ♪ go to
     the person picked (bond). A story event for the slot (7/22 late) plays instead. ── */
  function tripPlan(d = S.day, slot = S.slot) {
    const info = dayInfo(d); if (info.type !== 'trip' || !info.trip?.id) return null;
    const day = D.trip[info.trip.id]?.days?.[info.md]; const e = day?.[slot];
    if (!e || (S.trip?.done || {})[`${info.md}-${slot}`]) return null;
    if (e.options) return { ...e, key: `${info.md}-${slot}`, options: e.options.filter(o => tripOptionOk(o)) };
    return { ...e, key: `${info.md}-${slot}` };
  }
  function tripOptionOk(o) {
    const n = o.needs || {};
    if (n.join && !S.joined.includes(n.join) && !available().includes(n.join)) return false;
    if (n.flag && !flag(n.flag)) return false;
    if (n.met && !isMet(n.met)) return false;
    if (n.events && !n.events.every(id => S.events.includes(id))) return false;
    return true;
  }
  function finishTrip(key, pick = true, who = null, gained = 0) {
    ((S.trip ||= { done: {} }).done ||= {})[key] = pick;
    if (who) bond(who, gained);
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
    appendPhone(l.id, [{ from: l.id, t: ask, invite: true }]);
    S.phone.unread[l.id] = (S.phone.unread[l.id] || 0) + 1;
    toast('text', `${l.short}: ${ask}`, { thread: l.id, invite: true, from: l.id, msg: ask, count: 1 });
  }
  function answerInvite(yes) {
    const inv = S.phone.invite;
    if (!inv) return null;
    const l = LINKS[inv.link];
    const pool = yes ? l.invite.ok : l.invite.no;
    appendPhone(l.id, [{ from: 'solar', t: yes ? 'sure. where?' : 'can’t right now, sorry' }, { from: l.id, t: pool[Math.floor(Math.random() * pool.length)] }]);
    S.phone.invite = null;
    save();
    return yes ? l : null;
  }
  function expireInvite() { const inv = S.phone.invite; if (inv && (inv.d !== S.day || inv.slot !== S.slot)) S.phone.invite = null; }
  const unread = () => Object.values(S.phone.unread).reduce((a, b) => a + b, 0);
  // "Read all" on the phone: clears every unread badge. Replies and invitations still waiting stay answerable.
  function markAllRead() { const n = unread(); S.phone.unread = {}; save(); return n; }
  // Group chats (texts.js `groups`, or any thread where more than one person besides Solar has written) show sender names.
  function isGroupThread(id) {
    if ((D.texts.groups || []).includes(id)) return true;
    return new Set((S.phone.threads[id] || []).filter(m => m.from !== 'solar').map(m => m.from)).size > 1;
  }

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
    else if (t === 'rest') S.condition = S.condition === 'sick' ? 'tired' : (seeded(S.day) < 0.25 || perkOn('powerNap')) ? 'great' : 'good'; // Jaemin's Sleep It Off (powerNap)
    else if (S.condition === 'great') S.condition = 'good';
    else if (S.condition === 'tired' && seeded(S.day + 5) < 0.5) S.condition = 'good';
    S.tonight = null;
    if (S.day >= END()) { S.slot = 'late'; save(); return { newDay: false, end: true }; }
    S.day += 1; S.slot = 'early';
    weeklyBonds();
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
        // Night-only items from the life sim (Shinjiro's Kitchen Duty leftovers); battle.js adds them on a Tartarus night.
        kits: kind === 'tartarus' && S.leftovers ? { night_leftovers: 1 } : null,
        social: { stats: { ...S.stats }, ranks: Object.fromEntries(Object.entries(S.links).filter(([, p]) => p.rank > 0).map(([k, p]) => [k, p.rank])), reversed: Object.entries(S.links).filter(([, p]) => p.reversed).map(([k]) => k), romance: Object.entries(S.links).filter(([, p]) => p.route === 'romance').map(([k]) => k) },
        difficulty: null
      },
      result: null
    };
    if (kind === 'tartarus') S.leftovers = 0;
    S.handoffId = id;
    S.handoff = h;
    save();
    return h;
  }
  const readHandoff = () => S.handoff || null;
  function clearHandoff() { S.handoff = null; S.handoffId = null; save(); }
  // The battle side's answer (FemcBridge.finish): the contract's `result`, kept in S until the screens apply it.
  function finishHandoff(result) {
    const h = S.handoff;
    if (!h || h.status !== 'pending') return null;
    h.result = result; h.status = 'done'; h.doneAt = new Date().toISOString();
    save();
    return h;
  }
  /* The battle save (see the header). ensureBattleSave() makes one when there's none yet (the field menu needs it before a
     first fight), with save.js: New Game+'s carried save, or one seeded from today's date. */
  function setBattleSave(b) { S.battleSave = b; S.battleAt = Date.now(); S.battleCarry = null; saveQuiet(); }
  function ensureBattleSave() {
    const BS = W.FemcBattleSave;
    if (!BS) return S.battleSave;
    let prefs = null; try { prefs = JSON.parse(lsGet('kg-femc-battle-proto') || 'null'); } catch (e) {}
    const r = BS.forRun({ save: S.battleSave, carry: S.battleCarry, day: S.day, prefs });
    S.battleSave = r.save;
    if (r.made) { S.battleCarry = null; S.battleAt = Date.now(); saveQuiet(); }
    return S.battleSave;
  }
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
    // A reload can recover this completed handoff after rewards were saved but before
    // the UI cleared it. Keep its receipt in the same save as the rewards.
    if (h.appliedResult) return clone(h.appliedResult);
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
    // Courage from the Dark Hour: +1 for a Tartarus night that went in, +3 for a full-moon operation won.
    if (h.kind === 'tartarus' && r.outcome !== 'interrupt') addStat('courage', 1, true);
    else if (h.kind === 'operation' && r.outcome === 'win') addStat('courage', 3, true);
    // Velvet Plumes for Elizabeth's draws (gacha.js): a Tartarus night, a full moon won.
    W.FemcGacha?.afterFight(h.kind, r.outcome);
    // Velvet Plumes found in Tartarus (vaults, guardians, rare Shadows, hidden rooms: battle tartarus.js).
    if (r.plumes > 0 && W.FemcGacha?.gs) { W.FemcGacha.gs().plumes += r.plumes; sum.plumes = r.plumes; toast('perk', `Velvet Plume${r.plumes > 1 ? 's' : ''} +${r.plumes} (found in Tartarus)`); }
    let fat = r.fatigue;
    // Hanni's Mom Mode (Good instead of Tired) and Jaehyun's Wear Layers (Tired instead of Sick), once a week each.
    if (fat === 'sick' && perkOn('wearLayers') && weekly('wearLayers')) { fat = 'tired'; toast('perk', 'Wear Layers: Jaehyun’s jacket. She’s only Tired.'); }
    else if (fat === 'tired' && h.kind === 'tartarus' && perkOn('momMode') && weekly('momMode')) { fat = 'good'; toast('perk', 'Mom Mode: there’s cut fruit waiting. She feels fine.'); }
    if (fat) { S.condition = fat; S.tonightFatigue = fat; }
    if (h.kind === 'tartarus' || (h.kind === 'operation' && r.fatigue)) S.tonight = 'battled';
    // Extras the battle game may send from story fights (the finale): flags to set, and the choice made in the fight.
    if (r.flags) setFlags(r.flags);
    if (r.choice && (h.request.op || h.request.script)) S.route.choices[`fight.${h.request.op || h.request.script}`] = r.choice;
    h.appliedResult = clone(sum);
    save();
    return sum;
  }

  /* ── Saves ── */
  function saveSlot(n, label) { const at = Date.now(); const ok = lsSet(SLOT_KEY(n), JSON.stringify({ at, label: label || slotLabel(), state: S })); return ok; }
  function readSlot(n) { try { const x = JSON.parse(lsGet(SLOT_KEY(n)) || 'null'); return x && x.state && x.state.v ? x : null; } catch (e) { return null; } }
  function loadSlot(n) { const x = readSlot(n); if (!x) return false; S = migrate(clone(x.state)); save(); return true; }
  function slotLabel(s = S) { const i = dayInfo(s.day); return `${i.md} ${i.day} · ${slotName(s.slot, i)}`; }
  // What a save slot shows (P3-style): date, time of day, Solar's level, play time, the month's name.
  function slotInfo(s) {
    if (!s || !s.started) return null;
    const i = dayInfo(s.day), b = s.battleSave || readLegacyBattle()[s.runId]?.save || null;
    const m = Math.max(0, s.playMinutes || 0);
    return { md: i.md, day: i.day, slot: slotName(s.slot, i), month: i.date.toLocaleString('en', { month: 'long' }), lv: b && b.lvl ? b.lvl : null, play: `${Math.floor(m / 60)}:${String(m % 60).padStart(2, '0')}`,
      prologue: s.phase === 'prologue', ngp: s.ngp || 0, fight: !!(s.handoff && s.handoff.status === 'pending') };
  }
  // Backup code: the whole game (life sim + battle progress). Older codes still load. A battle-only code from the old battle
  // game's Save data screen (FEMCBT<v>.…) loads into this playthrough's battle save.
  function exportCode() { return btoa(unescape(encodeURIComponent(JSON.stringify({ game: KEY, v: VERSION, mv: MERGE_V, at: Date.now(), state: S })))); }
  function importCode(code) {
    try {
      const raw = String(code).trim();
      if (/^FEMCBT\d*\./.test(raw)) {
        const b = JSON.parse(decodeURIComponent(escape(atob(raw.replace(/^FEMCBT\d*\./, '').replace(/\s+/g, '')))));
        const BS = W.FemcBattleSave, ok = BS ? BS.fromRaw(b) : (b && b.lvl >= 1 ? b : null);
        if (!ok || !S.started) return false;
        S.battleSave = ok; S.battleAt = Date.now(); save(); return 'battle';
      }
      const obj = JSON.parse(raw.startsWith('{') ? raw : decodeURIComponent(escape(atob(raw.replace(/\s+/g, '')))));
      const st = obj.state || obj;
      if (!st || typeof st.day !== 'number' || !st.stats) return false;
      S = migrate(st); save(); return true;
    } catch (e) { return false; }
  }
  const hasSave = () => { try { return !!JSON.parse(lsGet(KEY) || 'null')?.started; } catch (e) { return false; } };
  function deleteSave() { lsSet(KEY, null); S = fresh(); }

  indexLinks();
  return {
    KEY, HANDOFF_KEY, base, D, get S() { return S; }, save, saveQuiet, newGame, onChange, settings, setSetting, setSettings, DEFAULTS, textDelay, sfx,
    dayOf, dateOf, mdOf, dayInfo, seasonal, dressed, slotsFor, slotName, weather, wx, forecast, wxIn, wet, rainSale, moon, END, SLOT_ORDER,
    statRank, statRankName, statProgress, statId, sumStats, gainText, addStat, addStats, lacking, addYen, takeToasts, toast, migrateStats,
    LINKS, progress, isMet, linkStatus, linkScene, finishLink, linksAt, linkPlace, linkName, need, written, areaById, isHome,
    homeOf, leavesAtMax, maxOf, isMaxed, stretchOn, afterGap, afterList, tracesAt, nextTrace, farewellDue, farewellScene, christmasOptions, pickChristmas, christmasChoices, christmasLines,
    flag, effect, branch, applyChoice, addFragment, fragmentInfo, worldOf,
    portrait, scale, name, castHas, silhouette, pendingFace, tarot, background, moodFor, sub, setDate, dateLabel,
    activities, actById, showing, activityOk, activityInfo, doActivity, dormActs, dormInfo, dormOk, doDorm, doStudy, studyInfo, shopStock, buy, bookById, bookArt, readTonight, matSellPrice, sellMat,
    perkOn, bondRank, dailyPerks, actCost, dozeChance, dozed, canRetryClass, useGuidance, classHint, studyBonus, weekly,
    jobVisible, jobState, jobOk, hire, shiftScene, finishShift, packs, packPick, packFits,
    clubById, clubState, clubStats, clubScene, joinClub, finishClub, runInDue, runInFits, finishRunIn, countOk, vary, varyPool, secretsDue, findSecret,
    heading, headingIs, migrateForced,
    crushTick, crushIs, crushedAt, crushApply, crushPhases, crushTrack, crushFits, crushDue, finishCrush, crushLine, takenBy, glowIs, setGlow,
    dailyLife, finishDailyLife, dueEvent, markEvent, hasBattle, unlockMet, doorDue, markDoor, endingDue, jumpToEnd, endingName, recordClear, newGamePlus,
    classQuestion, answerClass, examQuestions, answerExam, examResult, postExam,
    deliverTexts, replyText, textById, answerInvite, gift, bond,
    holidayInvites, sendHolidayInvites, holidayDue, acceptHoliday, finishHoliday, declineHolidays,
    lateNightDue, finishLateNight, tripPlan, finishTrip, unread, markAllRead, isGroupThread, freeSlotSpent, nextSlot, sleep,
    available, navigator, tartarusOk, floorCap, makeHandoff, readHandoff, clearHandoff, finishHandoff, simulate, applyResult,
    setBattleSave, ensureBattleSave,
    saveSlot, readSlot, loadSlot, slotLabel, slotInfo, exportCode, importCode, hasSave, deleteSave
  };
})();
