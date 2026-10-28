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
   Which endings open one (worldFor, mirrors core.js endingName): Runners, strangers and HOAX home endings. Stay and true get
   theirs in a later batch; the bad ending never does.
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
     - Practice (raw.practice: { days, slot, from, to, skip, place, bg, stats, title }): on those days that slot is practice
       (variants.practice), not Go Out, unless a story event or routine took it first.
     - An event's `fills: [slots]` spends those slots too (a whole day, like Regionals).
     - Conditions: { ifBond: { id: n } } (closeness at least n), { ifRouteOpen: id } (the route's `open`: always, lean, bond,
       noFlag), plus scene.js's option `when` for choices that show only while a condition holds (the crossroads).
     - The lock sets the flag epi-route-<route> (even from the lean), so texts and routines can gate on the route.
     - Entering copies parts of the year into the epilogue's flags as y-<flag> (xmas-*, arrived-*, route-*, danielle-refused /
       -sold, mem-camp), y-romance-<id> and y-met-<id>: texts and routines can only gate on flags. */
window.FemcEpilogue = (() => {
  const G = window.FemcGame, SC = window.FemcScene, W = window;
  if (!G) return null;
  const S = () => G.S, UI = () => W.FemcGameUI;
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const clone = o => JSON.parse(JSON.stringify(o));
  const DATA_V = 3; // data/epi/<world>/*.js ?v=
  // The worlds: the year's route flag that opens each, its name (the button) and place (slot labels), its data files.
  const WORLDS = {
    runners: { id: 'runners', flag: 'route-R', name: 'Runners', place: 'Syracuse', files: ['calendar', 'world', 'glitches', 'people', 'story-w1', 'story-w2'] },
    strangers: { id: 'strangers', flag: 'route-S', name: 'strangers', place: 'Incheon', files: ['calendar', 'world', 'glitches'] },
    hoax: { id: 'hoax', flag: 'route-H', name: 'HOAX', place: 'Hanlim', files: ['calendar', 'world', 'glitches'] }
  };
  // Which world a finished year's ending opens (the same order as core.js endingName): none for bad, true or Stay (yet).
  function worldFor(s) {
    const f = s?.flags || {};
    if (f['route-bad'] || f['true-final']) return null;
    return Object.values(WORLDS).find(w => f[w.flag])?.id || null;
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
    const data = { cal, places, links, cast: raw.cast || {}, money: raw.money, events: raw.events || [], dailyLife: raw.routines || [], variants: raw.variants || {},
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
    const Y = s.year1, q = line.ifYear;
    if (!Y || !q) return false;
    if (typeof q === 'string') return !!Y.flags?.[q];
    const L = Y.links || {};
    const T = {
      flag: v => [].concat(v).every(k => !!Y.flags?.[k]), noFlag: v => ![].concat(v).some(k => !!Y.flags?.[k]),
      romance: v => [].concat(v).some(id => L[id]?.route === 'romance'), xmas: v => [].concat(v).includes(carryOf(Y).xmas),
      rank: v => Object.entries(v).every(([id, n]) => (L[id]?.rank || 0) >= n), event: v => [].concat(v).every(id => (Y.events || []).includes(id)),
      met: v => [].concat(v).every(id => (Y.met || []).includes(id)), ending: v => [].concat(v).includes(endingOf(Y))
    };
    return Object.entries(q).every(([k, v]) => (T[k] ? T[k](v) : false));
  }

  // Can the route still be picked (the world's routes[].open: always / lean / bond / noFlag)?
  function routeOpen(id) {
    const r = (worldRaw().routes || []).find(x => x.id === id);
    if (!r || !S().epi) return false;
    const o = r.open || { always: true }, f = S().flags;
    if ((o.noFlag || []).some(k => f[k])) return false;
    if (o.always) return true;
    if (o.lean && S().epi.lean === id) return true;
    return !!o.bond && Object.entries(o.bond).every(([b, n]) => closeness(b) >= n);
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
    Object.keys(yf).forEach(k => { if (yf[k] && /^(xmas-|arrived-|route-|danielle-(refused|sold)$|mem-camp$)/.test(k)) E.flags[`y-${k}`] = true; });
    carry.romance.forEach(x => { E.flags[`y-romance-${x}`] = true; });
    (Y.met || []).forEach(x => { E.flags[`y-met-${x}`] = true; });
    E.epi = { v: 1, world: id, place: WORLDS[id].place, year: c.year, start: c.start, slots: Object.fromEntries((c.slots || []).map(x => [x.id, x.name])),
      lean: leanFor(w.raw, carry, Y), route: null, locked: false, carry, entered: Date.now(), done: false };
    return E;
  }
  let cardDay = null;
  function enter(id) {
    const Y = S();
    if (Y.epi || worldFor(Y) !== id) return Promise.resolve(false);
    return loadWorld(id).then(() => {
      const E = stateFor(Y, id);
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
    (Y.epilogues ||= {})[E.epi.world] = { done: true, route: route(), at: Date.now() };
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
  function playEvent(ev) {
    S().pending = null;
    return SC.play({ scene: GL()?.inject(ev.id, ev.scene) || ev.scene, place: ev.place, time: ev.time, title: ev.title, label: G.dayInfo().md, cast: ev.cast, event: true,
      onDone: () => {
        G.markEvent(ev.id);
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
    SC.Music.set(G.D.places.music['epi-r-team'] ? 'epi-r-team' : 'day');
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
    SC.play({ scene: [...(h.bg ? [{ bg: h.bg }] : []), ...(GL()?.inject(h.id, h.scene) || h.scene)], place: h.place, time: h.time, title: h.title, label: G.name(id), cast: h.cast,
      onDone: () => { const st = bondState(id); if (!st.seen.includes(h.id)) st.seen.push(h.id); bond(id, h.gain ?? 1); G.save(); advance(); } });
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
  function card(kicker, title, sub, cls, done) {
    const el = document.createElement('div');
    el.className = `g-actcard g-epi-card ${cls}`;
    el.innerHTML = `<div class="g-ac-inner"><p class="g-ac-num">${esc(kicker)}</p><p class="g-ac-title">${esc(title)}</p>${sub ? `<p class="g-ac-date">${esc(sub)}</p>` : ''}<p class="g-ac-hint">click to continue</p></div>`;
    document.body.appendChild(el);
    let ready = false, gone = false;
    setTimeout(() => { ready = true; }, matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 1200);
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
    card('EPILOGUE', raw.title || s.epi.place, s.epi.place, 'g-epi-end', () => card('PERSONA 3', 'EQUINOX', 'Every universe.', 'g-epi-equinox', () => {
      finishing = false;
      if (leave()) UI().endScreen(); else UI().run();
    }));
  }

  return { WORLDS, worldFor, endingOf, loadWorld, build, ensure, carryOf, leanFor, route, lockRoute, cond, stateFor, enter, leave, endScreen, offer, run, finish, raw: worldRaw,
    routeOpen, bond, closeness, startBond, hangoutFor, people, hangout, practiceNow, CLOSE_MAX,
    get cardDay() { return cardDay; } };
})();
