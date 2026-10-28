/* Persona 3: Solstice: the epilogue (FEMC-EPILOGUE-PLAN.md; batch 1, 2026-10-27: the engine, with stand-in worlds).
   After a home ending's credits, Solar's life back home in the world her route took her to, played like a smaller Solstice.
   One save, two layers:
     - Entering (the end screen's Epilogue button, after an offer to save the finished year to a slot): the finished year is
       tucked inside the save as S.year1, and a fresh epilogue state takes its place as S, with S.epi = { v, world, place,
       year, start, slots (slot names, for the save screen), lean, route, locked, carry, entered, done }.
     - While S.epi is set, core.js reads the world's data instead of Iwatodai's (setWorld: D getters, calendar maths, LINKS),
       and ui.js run() hands the day to run() below. A save without S.epi never comes here.
     - Leaving (after the act's last night: the end card, then the Equinox card): the year comes back out as S, with the battle
       save (it lives in the epilogue layer while she's there), play time and S.epilogues[world] = { done, route, at }; the
       clear is noted on the year's entry in 'kg-femc-revamp-clears' (epi: [worlds]); then the year's end screen, with New
       Game+ exactly as before.
   What carries over (stateFor): her social stats, the memory journal (fragments), the Compendium, the battle save (dormant
   until the half-present fights, batch 6), the phone case and looks, play time and New Game+ count. Not yen, items, links,
   jobs, clubs, perks or the gacha: the wallet is the world's money (S.yen inside the epilogue, shown by core.js money()).
   carry: a summary of the year for scenes and tests (ending, xmas, romances, ranks, crossed). Scenes read the year itself
   through { ifYear: { flag, noFlag, romance, xmas, rank, event, met, ending } } (all must hold; a string is a flag) and the
   route through { ifEpiRoute: id | [ids] } (core.js branch → cond below).
   The route: `lean` comes from the year (the world's `routes`, first match), `route` locks on the night of the world's
   `lockAfter` (a flag 'epi-route-<id>' set by a scene's choice wins over the lean), P5R-style.
   World data: data/epi/<world>/calendar.js and world.js (shapes in data/epi/runners/*.js), loaded on demand (loadWorld), so the
   main game's start-up doesn't get heavier. build() fills every key core.js reads, so nothing falls through to Iwatodai.
   The day (run): the date card, a story event due now (core.js dueEvent, world events only), a routine, then by slot: the
   morning screen, After Class / Evening (Go Out: the world's activities, paid in its money; or stay in), the late screen and
   Sleep. Sleeping through `end` finishes the act.
   Which endings open one (worldFor, mirrors core.js endingName): every ending but the bad one (batch 8 added Stay and true).
   Glitches (batch 2, glitch.js documents them): each world's data/epi/<world>/glitches.js loads with it; run() asks
   FemcGlitch.tick() on the date card ('card'), the morning, Go Out ('out', which may gain the station card) and the late
   screen; events and routines get their scheduled { glitch } lines (inject); { ifGlitch: n } goes through cond().
   The world batches (batch 3, 2026-10-28: Runners weeks 1-2; data/epi/runners/world.js documents the data side):
     - A world is several files (WORLDS[id].files), each merging into FEMC_EPI_WORLDS[id]; loadWorld marks it `_loaded`.
     - Home bonds (raw.bonds, people.js): { id: { id, role: 'friend' | 'rival', hangouts: [{ id, title, hint, after, until, slots,
       days, events, flags, noFlags, route, noRoute, minBond, ifYear, place, time, gain, scene }] } }. Go Out lists, above the
       places, each person whose first unseen hangout fits now (route / noRoute read the LOCKED route only); playing one spends
       the slot and adds closeness (gain, default 1), with a small bond toast. Closeness (S.epi.bonds[id] = { c, seen }) starts
       from the year (startBond: rank 1+ → 1, 5+ → 2, 10+ → 3, 15 → 4; +1 romance, +1 her Christmas pick; at most 5) and tops
       out at 10. A scene's { bond: { id: n } } adds to it (core.js bond → bond() here). A rival's closeness is how closely she's
       watching.
     - Practice (raw.practice: { days, slot, from, to, skip, place, bg, stats, title, music }): on those days that slot is practice
       (variants.practice), not Go Out, unless a story event or routine took it first (HOAX uses it for council duty, batch 5).
     - An event's `fills: [slots]` spends those slots too (a whole day, like Regionals).
     - Conditions: { ifBond: { id: n } } (closeness at least n), { ifRouteOpen: id } (the route's `open`: always, lean, bond,
       noFlag), plus scene.js's option `when` for choices that show only while a condition holds (the crossroads).
     - An event's `ends: true` finishes the act when its scene ends (batch 4): no late screen, no Sleep; straight to finish().
     - The lock sets the flag epi-route-<route> (even from the lean), so texts and routines can gate on the route.
     - Entering copies parts of the year into the epilogue's flags as y-<flag> (xmas-*, arrived-*, route-*, danielle-refused /
       -sold, mem-camp), y-romance-<id> and y-met-<id>: texts and routines can only gate on flags.
   The half-present fights (batch 6, 2026-10-28): events' and hangouts' { battle } lines go through fightHook (documented above
     it): the handoff with request.epi, the year's battle save (EXP lands there), nothing of the world's wallet, items or
     condition, can't-lose fades, and resume() after a reload mid-fight.
   Stay and true (batch 8, 2026-10-28; data/epi/stay/world.js and data/epi/true/world.js document the data side):
     - Stay is a world like the others whose places are Iwatodai's own (its bg rules sit in front of the main game's). The
       reverse fights: a world's `fightParty: { n: [ids] }` is the party for fight n (partyFor), and battle.js EPI_WORLDS.stay
       gives each fight its own Tartarus layer, rules and barks.
     - True is a coda: three small days, one per world, on one calendar whose days wear another world's date (the calendar's
       `shown: { 'M/D': { date: 'YYYY-MM-DD', place } }`, read by core.js dayInfo → ui.js date card and HUD, and copied into
       S.epi.shown for the save screen). Every slot is a story event, so no Go Out or late screen appears.
     - ifYear gained anyFlag (any of a list); the y- flags copied on entering also take ending-*, stay-* and shinji-awake.
   strangers (batch 7, 2026-10-28; data/epi/strangers/world.js documents the data side): the whole act on the same engine
     (nine files, like HOAX); no engine change. The Equinox card's route lines for haechan / jungwon / family are in its world.js.
   Finale and polish (batch 9, 2026-10-28):
     - The Equinox card reads the world's `equinox` (world.js: line, routes { id: line }, echoes ['Place · line']): the route's
       own line under EQUINOX, then one line per other world (equinoxOf, card's `echoes`).
     - Leaving records the act in the year's S.epilogues[world] (recordOf: seen events / hangouts / routines, the layer's flags,
       closeness, open routes, the stage), and the CGs seen here join the year's album. Entering keeps the year's album
       (menu.js albumCarry) in year1.album for the album's "Iwatodai" page inside the epilogue.
     - The album and the Theater (menu.js): albumEntries (ALBUM: each world's CGs, locked until a scene shows one), theaterRows /
       theaterLoad / replay (read-only; a finished world is replayed from the year through core.js replayWorld), and peekCond for
       menu.js peek (ifYear, ifEpiRoute, ifGlitch, ifBond, ifRouteOpen without writing; replaySaw for ifEvent). The section
       above the return documents it. Stamps for finished epilogues: stamps.js. */
window.FemcEpilogue = (() => {
  const G = window.FemcGame, SC = window.FemcScene, W = window;
  if (!G) return null;
  const S = () => G.S, UI = () => W.FemcGameUI;
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const clone = o => JSON.parse(JSON.stringify(o));
  const DATA_V = 13; // data/epi/<world>/*.js ?v=
  // The worlds: the year's route flag that opens each, its name (the button) and place (slot labels), its data files.
  const WORLDS = {
    runners: { id: 'runners', flag: 'route-R', name: 'Runners', place: 'Syracuse', files: ['calendar', 'world', 'glitches', 'people', 'story-w1', 'story-w2', 'people-w3', 'story-w3'] },
    strangers: { id: 'strangers', flag: 'route-S', name: 'strangers', place: 'Incheon', files: ['calendar', 'world', 'glitches', 'people', 'people-crew', 'story-w1', 'story-w2', 'story-w3', 'story-end'] },
    hoax: { id: 'hoax', flag: 'route-H', name: 'HOAX', place: 'Hanlim', files: ['calendar', 'world', 'glitches', 'people', 'people-crew', 'story-w1', 'story-w2', 'story-w3', 'story-end'] },
    // Batch 8: Stay's reverse epilogue (Iwatodai is home) and the true ending's coda (three small days, one per world).
    stay: { id: 'stay', flag: 'route-stay', name: 'Iwatodai', place: 'Iwatodai', files: ['calendar', 'world', 'glitches', 'people', 'story'] },
    true: { id: 'true', flag: 'true-final', name: 'Every world', place: 'Every world', files: ['calendar', 'world', 'glitches', 'story'] }
  };
  // Which world a finished year's ending opens (the same order as core.js endingName): none for bad; the true ending's coda;
  // Runners, strangers, HOAX; anything else is Stay ("here": route-stay, or no route at all), as the ending itself decides.
  function worldFor(s) {
    const f = s?.flags || {};
    if (f['route-bad']) return null;
    if (f['true-final']) return 'true';
    return ['runners', 'strangers', 'hoax'].find(id => f[WORLDS[id].flag]) || 'stay';
  }
  const endingOf = s => { const f = s?.flags || {}; return f['route-bad'] ? 'the last stop' : f['true-final'] ? 'I am thou' : f['route-R'] ? 'where it begins' : f['route-S'] ? 'low tide' : f['route-H'] ? 'the unfated life' : 'here'; };

  /* ── World data ── */
  const loading = {};
  function loadWorld(id) {
    if (W.FEMC_EPI_WORLDS?.[id]?._loaded === DATA_V) return Promise.resolve();
    if (loading[id]) return loading[id];
    const one = f => new Promise((res, rej) => {
      const s = document.createElement('script');
      s.src = `${G.base}assets/femc/game/data/epi/${id}/${f}.js?v=${DATA_V}`;
      s.onload = res; s.onerror = () => rej(new Error(`epilogue data ${id}/${f}`));
      document.head.appendChild(s);
    });
    loading[id] = WORLDS[id].files.reduce((p, f) => p.then(() => one(f)), Promise.resolve()).then(() => { W.FEMC_EPI_WORLDS[id]._loaded = DATA_V; })
      .catch(e => { delete loading[id]; throw e; });
    return loading[id];
  }
  // What every epilogue calendar has unless it says otherwise: nothing of Iwatodai's (no ops, trips, floor caps, exams).
  const CAL_BASE = () => ({ holidays: {}, breaks: [], events: {}, trips: [], exams: [], fullMoons: [], ops: [], floorCaps: [], weather: {}, weatherLevels: {},
    climate: {}, spells: [], persist: 0.4, drizzle: 0.4, heavySnow: 0.35, fog: 0.2, fogMonths: [], weekend: [0, 6],
    weatherNames: W.FEMC_GAME_CALENDAR.weatherNames, levelNames: W.FEMC_GAME_CALENDAR.levelNames });
  const built = {};
  function build(id) {
    if (built[id]) return built[id];
    const raw = W.FEMC_EPI_WORLDS[id], main = W.FEMC_GAME_PLACES, rp = raw.places || {};
    const cal = { ...CAL_BASE(), fragmentsFrom: raw.calendar.start, ...raw.calendar };
    // Places: the world's own map; the music moods and screens are the main game's (a world can add its own).
    const places = { ...main, areas: [], activities: [], clubs: [], shops: {}, seasons: {}, today: {}, cgFocus: {}, books: main.books, fortunes: [],
      dorm: { acts: [], study: { stats: {} } }, rainyDay: {}, ...rp,
      bg: rp.bg || [], weatherFx: rp.weatherFx || { outdoor: [], sealed: [], none: [] },
      music: { ...main.music, ...(rp.music || {}) }, screens: { ...main.screens, ...(rp.screens || {}) } };
    const links = {};
    Object.values(raw.links || {}).forEach(l => { links[l.id] = l; });
    const data = { cal, places, links, cast: raw.cast || {}, faces: raw.faces || {}, money: raw.money, events: raw.events || [], dailyLife: raw.routines || [], variants: raw.variants || {},
      texts: { threads: {}, texts: [], ambient: [], groups: {}, ...(raw.texts || {}) }, q: { classes: [], exams: {}, teachers: {}, rivals: [], ambient: {} },
      jobs: [], jobScenes: {}, clubs: {}, runIns: [], trip: {}, lodging: {}, crush: { tracks: {}, moments: [], world: {} } };
    return (built[id] = { id, data, raw });
  }
  const worldRaw = () => built[S().epi?.world]?.raw || W.FEMC_EPI_WORLDS?.[S().epi?.world] || {};
  // Points core.js at the current save's world, if its data is here. false: it still has to load.
  function ensure() {
    const id = S().epi?.world;
    if (!id || !WORLDS[id]) return false;
    if (G.world() === id) return true;
    if (!W.FEMC_EPI_WORLDS?.[id]?.places) return false;
    G.setWorld(build(id));
    return G.world() === id;
  }

  /* ── Carry-over, the route ── */
  function carryOf(Y) {
    const links = Y.links || {}, ranks = {};
    Object.entries(links).forEach(([id, p]) => { if (p && p.rank > 0) ranks[id] = p.rank; });
    return { ending: endingOf(Y), xmas: Y.route?.choices?.xmas || Object.keys(Y.flags || {}).find(k => /^xmas-/.test(k) && Y.flags[k])?.slice(5) || null,
      romance: Object.keys(links).filter(id => links[id]?.route === 'romance'), ranks,
      crossed: Object.keys(Y.flags || {}).filter(k => /^arrived-/.test(k) && Y.flags[k]).map(k => k.slice(8)), stats: { ...(Y.stats || {}) }, ngp: Y.ngp || 0 };
  }
  // The year's lean: the world's first route whose `from` fits (any one of romance / xmas / ranks / flags), else the last.
  function leanFor(raw, carry, Y) {
    const rs = raw.routes || [];
    const fits = f => !!f && ((f.romance || []).some(id => carry.romance.includes(id)) || (f.xmas || []).includes(carry.xmas)
      || Object.entries(f.ranks || {}).some(([id, n]) => (carry.ranks[id] || 0) >= n) || (f.flags || []).some(k => Y.flags?.[k]));
    return (rs.find(r => fits(r.from)) || rs[rs.length - 1] || { id: null }).id;
  }
  const route = () => S().epi?.route || S().epi?.lean || null;
  function lockRoute(id) {
    const e = S().epi; if (!e || e.locked) return;
    const rs = worldRaw().routes || [], pick = rs.find(r => S().flags[`epi-route-${r.id}`]);
    // No pick (the crossroads never played): the lean, if that route is still open; else the last route (the default).
    e.route = id || pick?.id || (rs.length && !routeOpen(e.lean) ? rs[rs.length - 1].id : e.lean); e.locked = true;
    if (e.route) S().flags[`epi-route-${e.route}`] = true;
    G.save();
  }
  // Scene conditions (core.js branch): { ifYear } against the finished year, { ifEpiRoute } against the route.
  function cond(line) {
    const s = S();
    if (line.ifGlitch !== undefined) return !!s.epi && !!W.FemcGlitch && W.FemcGlitch.stage() >= +line.ifGlitch;
    if (line.ifEpiRoute) return !!s.epi && [].concat(line.ifEpiRoute).includes(route());
    if (line.ifBond) return !!s.epi && Object.entries(line.ifBond).every(([id, n]) => closeness(id) >= n);
    if (line.ifRouteOpen) return !!s.epi && routeOpen(line.ifRouteOpen);
    return yearCond(s.year1, line.ifYear);
  }
  // { ifYear } against a finished year Y (the save's year1 in the epilogue; the year itself for a Theater replay after it).
  function yearCond(Y, q) {
    if (!Y || !q) return false;
    if (typeof q === 'string') return !!Y.flags?.[q];
    const L = Y.links || {};
    const T = {
      flag: v => [].concat(v).every(k => !!Y.flags?.[k]), noFlag: v => ![].concat(v).some(k => !!Y.flags?.[k]), anyFlag: v => [].concat(v).some(k => !!Y.flags?.[k]),
      romance: v => [].concat(v).some(id => L[id]?.route === 'romance'), xmas: v => [].concat(v).includes(carryOf(Y).xmas),
      rank: v => Object.entries(v).every(([id, n]) => (L[id]?.rank || 0) >= n), event: v => [].concat(v).every(id => (Y.events || []).includes(id)),
      met: v => [].concat(v).every(id => (Y.met || []).includes(id)), ending: v => [].concat(v).includes(endingOf(Y))
    };
    return Object.entries(q).every(([k, v]) => (T[k] ? T[k](v) : false));
  }

  // Can the route still be picked (the world's routes[].open: always / lean / bond / noFlag)?
  function routeOpen(id, close = closeness) {
    const r = (worldRaw().routes || []).find(x => x.id === id);
    if (!r || !S().epi) return false;
    const o = r.open || { always: true }, f = S().flags;
    if ((o.noFlag || []).some(k => f[k])) return false;
    if (o.always) return true;
    if (o.lean && S().epi.lean === id) return true;
    return !!o.bond && Object.entries(o.bond).every(([b, n]) => close(b) >= n);
  }

  /* ── Home bonds (raw.bonds) ── */
  const BONDS = () => worldRaw().bonds || {};
  const CLOSE_MAX = 10;
  let toasted = null;
  function startBond(id) {
    const c = S().epi?.carry || {}, r = (c.ranks || {})[id] || 0;
    let n = r >= 15 ? 4 : r >= 10 ? 3 : r >= 5 ? 2 : r >= 1 ? 1 : 0;
    if ((c.romance || []).includes(id)) n += 1;
    if (c.xmas === id) n += 1;
    return Math.min(n, 5);
  }
  function bondState(id) {
    const all = (S().epi.bonds ||= {});
    return (all[id] ||= { c: startBond(id), seen: [] });
  }
  const closeness = id => (S().epi && BONDS()[id] ? bondState(id).c : 0);
  function bond(id, n) {
    const b = BONDS()[id];
    if (!S().epi || !b || !n) return 0;
    const st = bondState(id), was = st.c;
    st.c = Math.max(0, Math.min(CLOSE_MAX, st.c + n));
    const key = `${S().day}-${S().slot}-${id}`; // one toast per person per slot (a scene's { bond } and the hangout's gain)
    if (st.c > was && toasted !== key) { toasted = key; G.toast('bond', b.role === 'rival' ? `${G.name(id)} is watching more closely.` : `Bond · ${G.name(id)}`); }
    G.save();
    return st.c - was;
  }
  // The hangout a person offers now: the first unseen one whose gates fit (route / noRoute: the locked route only).
  function hangoutFor(id, slot = S().slot, d = S().day) {
    const b = BONDS()[id], e = S().epi, f = S().flags;
    if (!b || !e) return null;
    const st = bondState(id), dow = G.dateOf(d).getDay(), locked = e.locked ? e.route : null;
    return (b.hangouts || []).find(h => !st.seen.includes(h.id)
      && (h.slots || ['after', 'evening']).includes(slot) && (!h.days || h.days.includes(dow))
      && (!h.after || d >= G.dayOf(h.after)) && (!h.until || d <= G.dayOf(h.until))
      && (h.events || []).every(x => S().events.includes(x)) && (h.flags || []).every(k => f[k]) && !(h.noFlags || []).some(k => f[k])
      && (!h.route || (locked && [].concat(h.route).includes(locked))) && !(h.noRoute && locked && [].concat(h.noRoute).includes(locked))
      && (!h.minBond || st.c >= h.minBond) && (!h.ifYear || cond({ ifYear: h.ifYear }))) || null;
  }
  const people = slot => Object.keys(BONDS()).map(id => ({ id, b: BONDS()[id], h: hangoutFor(id, slot) })).filter(x => x.h);

  /* ── Entering and leaving ── */
  function stateFor(Y, id) {
    const w = build(id), c = w.data.cal, E = G.freshState(), carry = carryOf(Y);
    Object.assign(E, { started: true, phase: 'play', day: 0, slot: (c.daySlots?.school || ['early'])[0], runId: Y.runId, ngp: Y.ngp || 0, ngFrom: Y.ngFrom || null,
      stats: { ...Y.stats }, yen: w.raw.money?.start || 0, condition: 'good', fragments: [...(Y.fragments || [])], registered: [...(Y.registered || [])],
      battleSave: Y.battleSave || null, battleAt: Y.battleAt || 0, playMinutes: Y.playMinutes || 0 });
    if (Y.gacha) Object.assign(E.gacha, { cases: [...(Y.gacha.cases || [])], caseOn: Y.gacha.caseOn || null, keys: { ...(Y.gacha.keys || {}) }, ...(Y.gacha.cos ? { cos: clone(Y.gacha.cos) } : {}) });
    const year = clone(Y);
    year.battleSave = null; // lives in the epilogue layer while she's there; leave() puts it back
    E.year1 = year;
    // Parts of the year as flags (y-…), for texts and routines, which only gate on flags.
    const yf = Y.flags || {};
    Object.keys(yf).forEach(k => { if (yf[k] && /^(xmas-|arrived-|route-|ending-|stay-|danielle-(refused|sold)$|mem-camp$|shinji-awake$)/.test(k)) E.flags[`y-${k}`] = true; });
    carry.romance.forEach(x => { E.flags[`y-romance-${x}`] = true; });
    (Y.met || []).forEach(x => { E.flags[`y-met-${x}`] = true; });
    E.epi = { v: 1, world: id, place: WORLDS[id].place, year: c.year, start: c.start, slots: Object.fromEntries((c.slots || []).map(x => [x.id, x.name])),
      lean: leanFor(w.raw, carry, Y), route: null, locked: false, carry, entered: Date.now(), done: false, ...(c.shown ? { shown: clone(c.shown) } : {}) };
    return E;
  }
  let cardDay = null;
  function enter(id) {
    const Y = S();
    if (Y.epi || worldFor(Y) !== id) return Promise.resolve(false);
    return loadWorld(id).then(() => {
      // The album's "Iwatodai" page (batch 9): what the year has seen, worked out now while core.js still reads Iwatodai.
      let keep = null; try { keep = W.FemcMenu?.albumCarry?.() || null; } catch (e) { keep = null; }
      const E = stateFor(Y, id);
      if (keep) E.year1.album = keep;
      G.setWorld(build(id));
      G.adoptState(E);
      cardDay = null;
      document.querySelectorAll('.g-overlay').forEach(x => x.remove());
      UI().run();
      return true;
    });
  }
  function leave() {
    const E = S(), Y = E.year1;
    if (!E.epi || !Y) return false;
    Y.battleSave = E.battleSave || Y.battleSave || null;
    Y.battleAt = Math.max(Y.battleAt || 0, E.battleAt || 0);
    Y.playMinutes = Math.max(Y.playMinutes || 0, E.playMinutes || 0);
    (Y.epilogues ||= {})[E.epi.world] = recordOf(E);
    // CGs she saw here join the year's album (the album's epilogue pages; New Game+ carries them like the rest).
    const ecg = (E.album && E.album.cg) || [];
    if (ecg.length) { const a = (Y.album ||= { v: 1 }); a.cg = [...new Set([...(a.cg || []), ...ecg])]; }
    const wid = E.epi.world;
    W.FemcGlitch?.clear();
    G.setWorld(null);
    G.adoptState(Y);
    G.recordClear();
    try {
      const list = JSON.parse(localStorage.getItem(G.CLEARS_KEY) || '[]') || [], c = list.find(x => x.run === Y.runId);
      if (c) { c.epi = [...new Set([...(c.epi || []), wid])]; localStorage.setItem(G.CLEARS_KEY, JSON.stringify(list)); }
    } catch (e) {}
    cardDay = null;
    return true;
  }

  /* ── The end screen: the button, and the offer to save the finished year first ── */
  function endScreen(main) {
    const id = worldFor(S());
    const row = main.querySelector('.g-end .g-row');
    if (!id || !row || S().epi) return;
    const w = WORLDS[id];
    row.insertAdjacentHTML('afterbegin', `<button type="button" class="g-btn pink g-epi-go" data-t="epi">Epilogue ▸ <small>${esc(w.name)}</small></button>`);
    row.querySelector('[data-t=epi]').addEventListener('click', () => offer(id));
  }
  function offer(id) {
    const ov = UI().overlay(`<div class="g-epi-offer"><h2>Before you go</h2>
      <p class="g-note">Save the finished year to a slot first? You can always load it to come back to this screen, or to start New Game+ from it.</p>
      <div class="g-epi-slots"></div>
      <div class="g-row"><button type="button" class="g-btn pink" data-go>Go without saving ▸</button><button type="button" class="g-btn" data-close>Cancel</button></div></div>`, 'g-epi-ov');
    let armed = null;
    const render = () => {
      ov.el.querySelector('.g-epi-slots').innerHTML = [1, 2, 3].map(n => {
        const x = G.readSlot(n), lab = x ? (x.label || G.slotLabel(x.state)) : 'Empty';
        return `<button type="button" class="g-btn g-epi-slot${armed === n ? ' pink' : ''}" data-slot="${n}"><b>${String(n).padStart(2, '0')}</b><span>${armed === n ? 'Overwrite this slot?' : esc(lab)}</span></button>`;
      }).join('');
      ov.el.querySelectorAll('[data-slot]').forEach(b => b.addEventListener('click', () => {
        const n = +b.dataset.slot;
        if (G.readSlot(n) && armed !== n) { armed = n; render(); ov.el.querySelector(`[data-slot="${n}"]`)?.focus(); return; }
        G.saveSlot(n, `The finished year · ${G.endingName()}`); G.sfx('femc-rankup');
        go();
      }));
    };
    const go = () => { ov.el.querySelectorAll('button').forEach(b => { b.disabled = true; }); enter(id).catch(() => { ov.el.querySelector('.g-note').textContent = 'The epilogue couldn’t load. Check your connection and try again.'; ov.el.querySelectorAll('button').forEach(b => { b.disabled = false; }); }); };
    ov.el.querySelector('[data-go]').addEventListener('click', go);
    render();
  }

  /* ── The day ── */
  function run() {
    const s = S(), ui = UI();
    if (!ensure()) {
      ui.show('<section class="g-seg"><p class="g-kicker">Epilogue</p><div class="g-seg-box"><p class="g-seg-text">…</p></div></section>', 'is-seg');
      loadWorld(s.epi.world).then(() => ui.run(), () => ui.show('<section class="g-seg"><div class="g-seg-box"><p class="g-seg-text">The epilogue couldn’t load. Check your connection and reload the page.</p></div></section>', 'is-seg'));
      return;
    }
    ui.paintHud();
    // A scene a fight interrupted (a reload after the fight, before the scene finished): it goes on from the line after it.
    if (s.pending) return resume(s.pending, null);
    if (s.epi.done) return finish();
    const info = G.dayInfo();
    if (s.slot === (G.slotsFor(info)[0]) && cardDay !== s.day) { cardDay = s.day; ui.show('', 'is-card'); ui.dateCard(ui.run); GL()?.tick('card'); return; }
    const due = G.dueEvent();
    if (due && due.kind === 'event') return playEvent(due.ev);
    const daily = G.dailyLife();
    if (daily) return SC.play({ ...daily, scene: [{ bg: daily.bg }, ...(GL()?.inject(daily.id, daily.scene) || daily.scene)], label: daily.label || 'Everyday life', onDone: () => { G.finishDailyLife(daily.id); ui.run(); } });
    if (practiceNow(info)) return practice(info);
    switch (s.slot) {
      case 'early': return morning(info);
      case 'late': return late(info);
      default: return G.freeSlotSpent(s.slot) ? advance() : goOut(info);
    }
  }
  function advance() { const r = G.nextSlot(); if (r.end) return finish(); UI().run(); }
  // resume: a snapshot from a fight in this event (batch 6), when the scene is rebuilt after it (a reload, or the fight's own way back).
  function playEvent(ev, resume) {
    if (!resume) S().pending = null;
    return SC.play({ scene: GL()?.inject(ev.id, ev.scene) || ev.scene, place: ev.place, time: ev.time, title: resume ? null : ev.title, label: (G.dayInfo().shown || G.dayInfo()).md, cast: ev.cast, event: true, resume,
      onBattle: fightHook({ type: 'epi', kind: 'event', id: ev.id }),
      onDone: () => {
        S().pending = null;
        G.markEvent(ev.id);
        // ends: the act's last scene (batch 4: the Runners rooftop) goes straight to the end card, the Equinox card, the year.
        if (ev.ends) return finish();
        // fills: the rest of the day's slots go with it (Regionals); consumes: this slot does.
        (ev.fills || []).forEach(x => { S().spent[`${S().day}-${x}`] = `ev:${ev.id}`; });
        if (ev.consumes || ev.fills) { S().spent[`${S().day}-${S().slot}`] = `ev:${ev.id}`; G.save(); return advance(); }
        UI().run();
      } });
  }
  // The team's practice (raw.practice): that slot on those days, unless something took it.
  function practiceNow(info) {
    const p = worldRaw().practice, s = S();
    if (!p || s.slot !== p.slot || G.freeSlotSpent(s.slot) || info.type === 'exam') return false;
    if (!p.days.includes(info.dow) || (p.skip || []).includes(info.md)) return false;
    return (!p.from || s.day >= G.dayOf(p.from)) && (!p.to || s.day <= G.dayOf(p.to));
  }
  function practice(info) {
    const p = worldRaw().practice, s = S();
    s.spent[`${s.day}-${s.slot}`] = 'practice';
    if (p.stats) G.addStats(p.stats);
    G.save();
    SC.Music.set(p.music && G.D.places.music[p.music] ? p.music : G.D.places.music['epi-r-team'] ? 'epi-r-team' : 'day');
    UI().segment({ slot: s.slot, bg: p.bg, place: p.place, text: line('practice', 'Practice.'), next: advance });
    GL()?.tick('out', { place: p.place });
  }
  const P = () => G.D.places;
  const GL = () => W.FemcGlitch;
  const line = (path, fallback) => G.vary(path, [fallback]);
  function morning(info) {
    const at = (info.type !== 'off' && P().school) || P().home || {};
    const kind = info.type === 'exam' ? 'exam' : info.type === 'off' ? 'off' : 'school';
    SC.Music.set(G.D.places.screens.after || 'day');
    UI().segment({ slot: 'early', bg: at.bg, place: at.place, text: line(`morning.${kind}`, 'Morning.'), next: advance });
    GL()?.tick('morning', { place: at.place });
  }
  function late(info) {
    const at = P().home || {};
    SC.Music.set(G.D.places.screens.dorm || 'night');
    UI().segment({ slot: 'late', bg: at.bg, place: at.place, text: line('late', 'Late.'), button: 'Sleep', next: () => {
      const raw = worldRaw();
      if (!S().epi.locked && raw.lockAfter && S().day >= G.dayOf(raw.lockAfter)) lockRoute();
      const r = G.sleep(); if (r.end) return finish(); UI().run();
    } });
    GL()?.tick('late', { place: at.place });
  }
  const acts = slot => (P().activities || []).filter(a => (!a.slots || a.slots.includes(slot)) && (!a.from || S().day >= G.dayOf(a.from)) && (!a.until || S().day <= G.dayOf(a.until)));
  function goOut(info) {
    const s = S(), slot = s.slot, ui = UI(), home = P().home || {};
    ui.setBg(home.bg, slot === 'evening' ? 'night' : '');
    SC.Music.set(G.D.places.screens[slot === 'evening' ? 'evening' : 'after'] || 'day');
    const list = acts(slot), folks = people(slot);
    const pips = id => { const c = closeness(id); return `<i class="g-epi-pips" aria-label="closeness ${c} of ${CLOSE_MAX}">${'●'.repeat(Math.min(c, CLOSE_MAX))}${'○'.repeat(Math.max(0, CLOSE_MAX - c))}</i>`; };
    const main = ui.show(`<section class="g-seg g-epi-out"><p class="g-kicker">${esc(G.slotName(slot, info))} · ${esc(s.epi.place)}</p>
      <div class="g-seg-box"><p class="g-seg-text">Where to?</p>${folks.length ? `<p class="g-epi-sub">People</p><div class="g-epi-acts g-epi-folks">${folks.map(x =>
        `<button type="button" class="g-epi-act g-epi-bond${x.b.role === 'rival' ? ' rival' : ''}" data-bond="${esc(x.id)}"><b>${esc(G.name(x.id))}</b><small>${esc(x.h.hint || x.h.place || '')}</small>${pips(x.id)}</button>`).join('')}</div><p class="g-epi-sub">Places</p>` : ''}<div class="g-epi-acts">${list.map(a => {
        const short = (a.cost || 0) > s.yen;
        return `<button type="button" class="g-epi-act" data-act="${esc(a.id)}"${short ? ' disabled' : ''}><b>${esc(a.name)}</b><small>${a.cost ? esc(G.money(a.cost)) : 'Free'}${a.stats ? ` · ${esc(G.gainText(a.stats))}` : ''}${short ? ' · not enough money' : ''}</small></button>`;
      }).join('') || '<p class="g-note">Nowhere to be today.</p>'}</div></div>
      <div class="g-row g-seg-next"><button type="button" class="g-btn" data-stay>Stay in ▸</button></div></section>`, 'is-seg');
    main.querySelectorAll('[data-act]').forEach(b => b.addEventListener('click', () => doAct(list.find(a => a.id === b.dataset.act), info)));
    main.querySelectorAll('[data-bond]').forEach(b => b.addEventListener('click', () => hangout(b.dataset.bond)));
    main.querySelector('[data-stay]').addEventListener('click', () => {
      s.spent[`${s.day}-${slot}`] = 'stay'; G.save();
      ui.segment({ slot, bg: home.bg, place: home.place, text: line('stayIn', 'She stayed in.'), next: advance });
    });
    GL()?.tick('out', { place: home.place, list: main.querySelector('.g-epi-acts:not(.g-epi-folks)') }); // the station card joins the places, not the people
    main.querySelector('[data-bond], [data-act]:not(:disabled), [data-stay]')?.focus({ preventScroll: true });
  }
  // A hangout with a home bond: spends the slot, plays the scene, then closeness (gain, default 1).
  function hangout(id) {
    const s = S(), h = hangoutFor(id);
    if (!h || G.freeSlotSpent(s.slot)) return;
    s.spent[`${s.day}-${s.slot}`] = `bond:${h.id}`;
    G.save();
    hangoutScene(id, h);
  }
  function hangoutScene(id, h, resume) {
    SC.play({ scene: [...(h.bg ? [{ bg: h.bg }] : []), ...(GL()?.inject(h.id, h.scene) || h.scene)], place: h.place, time: h.time, title: resume ? null : h.title, label: G.name(id), cast: h.cast, resume,
      onBattle: fightHook({ type: 'epi', kind: 'hangout', id, h: h.id }),
      onDone: () => { S().pending = null; const st = bondState(id); if (!st.seen.includes(h.id)) st.seen.push(h.id); bond(id, h.gain ?? 1); G.save(); advance(); } });
  }

  /* ── The half-present fights (batch 6; FEMC-EPILOGUE-PLAN.md 2.4) ──
     A scene's { battle: { script: 'epi-<world>-<n>' } } line (n 1-4) hands a fight to the battle game through ui.js battleCard,
     like the year's story fights, with request.epi = { world, n, stage, bg (the scene's own place, half turned to Tartarus),
     place, glitch (today's stage) } (core.js epiRequest builds the rest from the finished year). The stages (battle.js EPI
     documents the rules): 1 alone (Solar by herself), 2 unseen (S.E.E.S. can't see her), 3 unheard (they see her, can't hear
     her), 4 contact (one round). The party: Solar alone in fight 1; then Akihiko (he found her first) and two of S.E.E.S. by
     the year's highest ranks (Shinjiro only if he woke). She can't lose one: the battle side ends a fight she'd lose with
     result.epi.ended 'faded', and the scene drops the lines that told the fight's end (its plain narration and speech up to the
     next line that does anything else) for the battle line's `fade` (or FADE below for its stage), then goes on. Fight 4's
     contact round always ends in the pull, so it never fades. ended 'win' / 'pulled' change nothing in the scene; core.js
     applyResult keeps the world's wallet, items and condition out of it and sets <script>-<ended>. A reload mid-fight: ui.js
     run() loads the world first, the fight opens again, then resume() rebuilds the scene from its snapshot (S.pending). Any other
     { battle } line in an epilogue scene goes through as an ordinary story fight (still wallet-safe). */
  const STAGES = { 1: 'alone', 2: 'unseen', 3: 'unheard', 4: 'contact' };
  const SEES = ['yukari', 'junpei', 'mitsuru', 'aigis', 'ken', 'koromaru', 'shinjiro'];
  const FADE = {
    alone: 'The hour let go of her before it was finished. Not the Shadow: the hour. It opened its hand the way you let go of a railing, and she went home through the green with Haenim’s name still coming apart in her mouth.',
    unseen: 'She went before they did. Their last one was still standing, and they were still fighting it, and the green rinsed her out of the middle of them like a stain nobody had noticed, and none of them looked round.',
    unheard: 'She went down, and then there was no floor to go down onto. The last thing she saw was Akihiko turning toward the place she’d been, his mouth already shaping her name, and she was gone before it reached her.'
  };
  const fightOf = b => { const m = /^epi-([a-z]+)-(\d+)$/.exec((b && b.script) || ''); return m && STAGES[m[2]] ? { world: m[1], n: +m[2], stage: STAGES[m[2]] } : null; };
  function partyFor(n) {
    const own = (worldRaw().fightParty || {})[n]; // a world's own party for that fight (Stay's reversed fights: the searchers)
    if (own) return [...own];
    if (n <= 1) return ['solar'];
    const Y = S().year1 || {}, L = Y.links || {}, f = Y.flags || {};
    const two = SEES.filter(id => id !== 'shinjiro' || f['shinji-awake']).map((id, i) => ({ id, r: (L[id] && L[id].rank) || 0, i }))
      .sort((a, b) => b.r - a.r || a.i - b.i).slice(0, 2).map(x => x.id);
    return ['solar', 'akihiko', ...two];
  }
  const faded = sum => !!(sum && sum.epi && sum.epi.ended === 'faded');
  // The lines that told the fight's end (plain narration and speech) go; the fade line takes their place.
  const SAYS = new Set(['n', 's', 'f', 't']);
  function fadeQueue(q, text) {
    while (q.length && Object.keys(q[0]).every(k => SAYS.has(k))) q.shift();
    q.unshift({ n: text });
  }
  function fightHook(ctx0) {
    return (battle, snap, cont) => {
      const f = fightOf(battle);
      if (!f) return UI().battleCard(battle, { ctx: ctx0, snap }, cont);
      const v = (snap && snap.vis) || {}, bg = v.place ? G.background(v.place, v.time || '', v.bg || null) : null;
      const ctx = { ...ctx0, fade: f.stage === 'contact' ? null : battle.fade || FADE[f.stage] || null };
      const b = { ...battle, kind: 'scripted', forced: true, party: partyFor(f.n),
        epi: { world: f.world, n: f.n, stage: f.stage, bg: bg ? bg.url : null, place: v.place || null, glitch: GL() ? GL().stage() : null } };
      UI().battleCard(b, { ctx, snap }, sum => {
        if (!faded(sum) || !ctx.fade) return cont(sum);
        const pn = S().pending; // a reload later in the scene rebuilds it from here: keep it faded
        if (pn && pn.snap && pn.ctx && !pn.ctx.reshaped) { fadeQueue(pn.snap.queue, ctx.fade); pn.ctx.reshaped = true; G.save(); }
        cont({ ...sum, reshape: q => fadeQueue(q, ctx.fade) });
      });
    };
  }
  // After a reload (or the fight's way back without a live scene): the scene from its snapshot, on the line after the fight.
  function resume(p, sum) {
    const c = p && p.ctx;
    if (!p || !p.snap || !c || c.type !== 'epi') { S().pending = null; G.save(); return UI().run(); }
    if (!ensure()) return run();
    if (faded(sum) && c.fade && !c.reshaped) { fadeQueue(p.snap.queue, c.fade); c.reshaped = true; G.save(); }
    const snap = { ...p.snap, queue: [...(p.snap.queue || [])] };
    if (p.music) SC.Music.set(p.music);
    UI().show('', 'is-scene');
    if (c.kind === 'event') { const ev = (G.D.events || []).find(e => e.id === c.id); if (ev) return playEvent(ev, snap); }
    if (c.kind === 'hangout') { const h = ((BONDS()[c.id] || {}).hangouts || []).find(x => x.id === c.h); if (h) return hangoutScene(c.id, h, snap); }
    S().pending = null; G.save(); UI().run();
  }
  function doAct(a, info) {
    const s = S();
    if (!a || (a.cost || 0) > s.yen || G.freeSlotSpent(s.slot)) return;
    if (a.cost) G.addYen(-a.cost);
    if (a.stats) G.addStats(a.stats);
    s.spent[`${s.day}-${s.slot}`] = `act:${a.id}`;
    G.save();
    UI().segment({ slot: s.slot, bg: a.bg, place: a.place, text: a.text || a.name, next: advance });
  }

  /* ── The end of the act: its card, the Equinox card, then back to the year's end screen ── */
  // The Equinox card's words (batch 9): the world's `equinox` (world.js): the route's own line, else `line`; then `echoes`, one
  // line per other world ("Place · what happens there"), each fading in under it.
  function equinoxOf(raw, rid) {
    const q = raw.equinox || {};
    return { line: (q.routes || {})[rid] || q.line || 'Every universe.', echoes: (q.echoes || []).filter(Boolean) };
  }
  function card(kicker, title, sub, cls, done, echoes) {
    const el = document.createElement('div');
    el.className = `g-actcard g-epi-card ${cls}`;
    const eco = (echoes || []).map((t, i) => { const [pl, ...rest] = String(t).split(' · '); return `<li style="--i:${i}">${rest.length ? `<b>${esc(pl)}</b>${esc(rest.join(' · '))}` : esc(t)}</li>`; }).join('');
    el.innerHTML = `<div class="g-ac-inner"><p class="g-ac-num">${esc(kicker)}</p><p class="g-ac-title">${esc(title)}</p>${sub ? `<p class="g-ac-date">${esc(sub)}</p>` : ''}${eco ? `<ul class="g-epi-echoes">${eco}</ul>` : ''}<p class="g-ac-hint">click to continue</p></div>`;
    document.body.appendChild(el);
    let ready = false, gone = false;
    setTimeout(() => { ready = true; }, matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : eco ? 2400 : 1200);
    const go = () => { if (!ready || gone) return; gone = true; document.removeEventListener('keydown', key, true); el.classList.add('out'); setTimeout(() => { el.remove(); done(); }, 450); };
    const key = e => { if (['Enter', ' '].includes(e.key)) { e.preventDefault(); go(); } };
    el.addEventListener('click', go);
    document.addEventListener('keydown', key, true);
  }
  let finishing = false;
  function finish() {
    const s = S();
    if (!s.epi || finishing) return;
    finishing = true;
    if (!s.epi.done) { s.epi.done = true; if (!s.epi.locked) lockRoute(); G.save(); }
    UI().show('', 'is-card');
    const raw = worldRaw();
    const eq = equinoxOf(raw, route());
    card('EPILOGUE', raw.title || s.epi.place, s.epi.place, 'g-epi-end', () => card('PERSONA 3', 'EQUINOX', eq.line, 'g-epi-equinox', () => {
      finishing = false;
      if (leave()) UI().endScreen(); else UI().run();
    }, eq.echoes));
  }

  /* ── The album, the Theater and menu.js peek (batch 9) ──
     Leaving records what she lived through in the year's S.epilogues[world] (recordOf): { done, route, at, seen: { events,
     hangouts: { bond: [ids] }, routines }, flags (the epilogue layer's), bonds (closeness), open (routes still open), stage }.
     New Game+ carries the records in the album (menu.js albumCarry → S.album.epi), so the Theater keeps them like the year's.
     Conditions read-only (peekCond): the live epilogue (no bondState writes), or a record during a replay (replayCtx). In a
     replay, ifGlitch reads the stage the scene's own day had (the world's glitch floors, +1 at Late Night) and a hangout the
     stage she ended on; ifRouteOpen is the route taken or one still open at the end; ifBond the closeness at the end.
     The album: ALBUM lists each world's CGs (all art-pending as of batch 9, so their tiles stay locked until a scene shows
     one), plus any cg a loaded world's scenes use. A section appears only for a world she has entered. */
  const ALBUM = {
    runners: [['epi-r-regionals', 'Regionals'], ['epi-r-studio', 'The studio'], ['epi-r-footage', 'The footage'], ['epi-r-held', 'Held']],
    strangers: [['epi-s-moon', 'The first full moon'], ['epi-s-tide', 'The tide'], ['epi-s-held', 'Held']],
    hoax: [['epi-h-seance', 'The séance'], ['epi-h-hearing', 'The hearing'], ['epi-h-held', 'Held']],
    stay: [['epi-stay-held', 'Held']],
    true: [['epi-true-coda', 'Every world']]
  };
  function recordOf(E) {
    const e = E.epi, hang = {}, bonds = {};
    Object.entries(e.bonds || {}).forEach(([id, b]) => { bonds[id] = b.c; if ((b.seen || []).length) hang[id] = [...b.seen]; });
    const flags = {}; Object.keys(E.flags || {}).forEach(k => { if (E.flags[k]) flags[k] = true; });
    const ro = id => (bonds[id] ?? (BONDS()[id] ? startBond(id) : 0));
    return { done: true, route: route(), at: Date.now(), seen: { events: [...(E.events || [])], hangouts: hang, routines: [...(E.dailyLife?.seen || [])] },
      flags, bonds, open: (worldRaw().routes || []).filter(r => routeOpen(r.id, ro)).map(r => r.id), stage: GL() ? GL().stage() : null };
  }
  let replayCtx = null;
  function liveCtx() {
    const s = S(); if (!s.epi) return null;
    const close = id => (BONDS()[id] ? (s.epi.bonds?.[id]?.c ?? startBond(id)) : 0);
    return { year: s.year1, route: route(), close, open: id => routeOpen(id, close), stage: GL()?.active?.() ? GL().stage() : 0, events: s.events };
  }
  function recCtx(rec, Y) {
    return { year: Y, route: rec.route || null, close: id => (rec.bonds || {})[id] || 0, open: id => id === rec.route || (rec.open || []).includes(id),
      stage: rec.stage ?? 4, events: (rec.seen && rec.seen.events) || [] };
  }
  const isEpiCond = l => !!(l && (l.ifYear || l.ifEpiRoute || l.ifGlitch !== undefined || l.ifBond || l.ifRouteOpen));
  // menu.js peek: an epilogue condition without writing anything (false outside the epilogue and outside a replay, like branch).
  function peekCond(line, ctx = replayCtx || liveCtx()) {
    if (!ctx) return false;
    if (line.ifGlitch !== undefined) return (ctx.stage || 0) >= +line.ifGlitch;
    if (line.ifEpiRoute) return [].concat(line.ifEpiRoute).includes(ctx.route);
    if (line.ifBond) return Object.entries(line.ifBond).every(([id, n]) => ctx.close(id) >= n);
    if (line.ifRouteOpen) return !!ctx.open(line.ifRouteOpen);
    return yearCond(ctx.year, line.ifYear);
  }
  const replaySaw = id => !!replayCtx && (replayCtx.events || []).includes(id);
  // The stage on a scene's own day: the world's floor (latest date on or before it), +1 at Late Night (needs the world's calendar).
  function floorAt(raw, md, slot) {
    const d = G.dayOf(md); let f = 0, at = -1;
    Object.entries(raw.glitch?.floors || {}).forEach(([k, n]) => { const x = G.dayOf(k); if (x <= d && x >= at) { at = x; f = n; } });
    return Math.min(4, f + (slot === 'late' ? 1 : 0));
  }
  // The worlds this save has gone into (a section of the album and the Theater each), in WORLDS order.
  function records() {
    const s = S(), Y = s.year1;
    return { ...((s.album || {}).epi || {}), ...((Y && Y.epilogues) || {}), ...(s.epilogues || {}) };
  }
  function entered() {
    const ids = new Set([...Object.keys(records()), ...(S().epi ? [S().epi.world] : [])]);
    return Object.keys(WORLDS).filter(id => ids.has(id));
  }
  const worldLabel = id => (id === 'true' ? 'Every world' : WORLDS[id].place);
  function cgsOf(lines, out) { (lines || []).forEach(l => { if (!l || typeof l !== 'object') return; if (typeof l.cg === 'string') out.add(l.cg); [l.then, l.else, ...(Array.isArray(l.choose) ? l.choose.map(o => o && o.then) : [])].forEach(k => Array.isArray(k) && cgsOf(k, out)); }); return out; }
  // The album's epilogue tiles. seen: the CG ids the save (and the year) have seen.
  function albumEntries(seen) {
    return entered().flatMap(wid => {
      const list = [...ALBUM[wid]], raw = W.FEMC_EPI_WORLDS?.[wid];
      if (raw && raw._loaded) {
        const more = new Set();
        [...(raw.events || []), ...(raw.routines || []), ...Object.values(raw.bonds || {}).flatMap(b => b.hangouts || [])].forEach(e => cgsOf(e.scene, more));
        more.forEach(id => { if (!list.some(x => x[0] === id)) list.push([id, '']); });
      }
      return list.map(([id, title]) => ({ kind: 'cg', id, group: `epi-${wid}`, world: wid, on: seen.has(id), img: `${G.base}assets/femc/cg/${id}.webp`, kicker: `Epilogue · ${worldLabel(wid)}`, title }));
    });
  }
  // The Theater's epilogue rows: the current world while she's in it (live), else each finished world's record.
  function theaterRows() {
    const s = S(), out = [];
    entered().forEach(wid => {
      const live = !!s.epi && s.epi.world === wid, rec = live ? null : records()[wid];
      if (!live && !rec) return;
      if (s.epi && !live) return; // inside one epilogue, only its own world (another world's data can't be pointed at mid-act)
      const raw = W.FEMC_EPI_WORLDS?.[wid];
      if (!raw || raw._loaded !== DATA_V) return; // theaterLoad() brings it, then the page repaints
      const evs = live ? s.events : (rec.seen ? rec.seen.events : (raw.events || []).filter(e => !e.flag || e.flag === `epi-route-${rec.route}`).map(e => e.id));
      const hang = live ? Object.fromEntries(Object.entries(s.epi.bonds || {}).map(([id, b]) => [id, b.seen || []])) : (rec.seen ? rec.seen.hangouts || {} : {});
      const group = `Epilogue · ${worldLabel(wid)}`, shown = md => { const x = raw.calendar?.shown?.[md]; if (!x) return md; const [, m, d] = x.date.split('-').map(Number); return `${m}/${d}`; };
      (raw.events || []).filter(e => evs.includes(e.id)).forEach(e => out.push({ sec: 'epilogue', group, date: shown(e.date), title: e.title || 'Epilogue', sub: e.place || '',
        src: { kind: 'epi', k: 'event', world: wid, key: e.id, live } }));
      Object.entries(hang).forEach(([bid, ids]) => ((raw.bonds || {})[bid]?.hangouts || []).filter(h => ids.includes(h.id)).forEach(h => out.push({ sec: 'epilogue', group, date: '',
        title: h.title || 'Time together', sub: `${G.name(bid)}${h.place ? ` · ${h.place}` : ''}`, src: { kind: 'epi', k: 'hangout', world: wid, key: h.id, bond: bid, live } })));
    });
    return out;
  }
  // Loads the worlds the Theater has rows for. Resolves true if anything new came in (the page then repaints).
  function theaterLoad() {
    const s = S(), need = entered().filter(w => (s.epi ? s.epi.world === w : !!records()[w]) && W.FEMC_EPI_WORLDS?.[w]?._loaded !== DATA_V);
    return need.length ? Promise.all(need.map(w => loadWorld(w).catch(() => null))).then(() => true) : Promise.resolve(false);
  }
  // Plays a Theater row read-only: the world's places, music and names for the length of the replay (core.js replayWorld
  // when it's a finished world seen from the year), its record's flags and conditions; the save never changes.
  function replay(src, label, onDone) {
    return loadWorld(src.world).then(() => {
      const w = build(src.world), raw = w.raw, s = S(), live = !!s.epi && s.epi.world === src.world;
      if (live && !ensure()) throw new Error('epilogue world');
      const rec = live ? null : records()[src.world] || {};
      const end = live ? null : G.replayWorld(w);
      try {
        let v;
        if (src.k === 'event') { const e = raw.events.find(x => x.id === src.key); v = e && { scene: e.scene, place: e.place, time: e.time, title: e.title, cast: e.cast, md: e.date, slot: e.slot }; }
        else { const h = ((raw.bonds || {})[src.bond]?.hangouts || []).find(x => x.id === src.key); v = h && { scene: [...(h.bg ? [{ bg: h.bg }] : []), ...h.scene], place: h.place, time: h.time, title: h.title, cast: h.cast }; }
        if (!v) throw new Error('no scene');
        replayCtx = live ? liveCtx() : recCtx(rec, s);
        if (v.md) replayCtx.stage = floorAt(raw, v.md, v.slot);
        const di = v.md ? G.dayInfo(G.dayOf(v.md)) : null, d = di ? (di.shown || di) : null;
        return SC.play({ scene: v.scene, place: v.place || '', time: v.time || '', title: v.title || null, label, cast: v.cast, event: src.k === 'event', replay: true,
          replayFlags: live ? null : { ...(rec.flags || { [`epi-route-${rec.route}`]: true }) }, date: d ? { md: d.md, day: d.day } : null,
          branch: (line, link, flagOn) => (W.FemcMenu ? W.FemcMenu.peek(line, link, flagOn) : isEpiCond(line) ? ((peekCond(line) ? line.then : line.else) || []) : null),
          onDone: () => { replayCtx = null; end?.(); onDone?.(); } });
      } catch (e) { replayCtx = null; end?.(); throw e; }
    });
  }

  return { WORLDS, worldFor, endingOf, loadWorld, build, ensure, carryOf, leanFor, route, lockRoute, cond, stateFor, enter, leave, endScreen, offer, run, finish, raw: worldRaw,
    yearCond, peekCond, isEpiCond, replaySaw, recordOf, records, entered, albumEntries, theaterRows, theaterLoad, replay, equinoxOf, ALBUM,
    routeOpen, bond, closeness, startBond, hangoutFor, people, hangout, practiceNow, CLOSE_MAX, resume, partyFor, fightOf, fadeQueue, FADE, STAGES,
    get cardDay() { return cardDay; } };
})();
