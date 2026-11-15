/* Persona 3: Equinox · Import from Solstice (EQUINOX-PLAN.md "Starting a game"; EQUINOX-TECH.md).
   Reads a finished Persona 3: Solstice save and brings over LOOKS ONLY. The Solstice save is only read (localStorage.getItem),
   never written. Pure functions, no DOM; loads on any page (or under jsc) before or after core.js.

   ── Where Solstice keeps things (read from, never written) ──
     Saves: 'kg-femc-revamp' (the autosave: the state itself) and 'kg-femc-revamp-slot1..10' ({ at, label, state }); core.js.
     Clears: 'kg-femc-revamp-clears' [{ run, ending, xmas, at, ngp, epi: [worlds] }] (core.js recordClear, epilogue.js leave).
     A state S is either the year (S.events, S.flags, S.gacha, S.album, S.epilogues) or, inside an epilogue, the epilogue layer
     (S.epi = { world, route, lean, done, … }) with the finished year tucked inside it as S.year1 (epilogue.js stateFor). The
     year layer Y is S.year1 when S.epi is set, else S.
       Wardrobe:  S.gacha.cos = { own: [item ids], on: { slot: id } (slot 'skin:<who>', 'weapon:<who>', 'evoker', 'battleui',
                  'title', 'wallpaper', 'uitheme'), portraits, pOff: [who], pulls, pity, guar, last, got, bsel } (cosmetics.js cs).
                  Every kind is a look: outfits (sk-*) for every fighter, weapon looks (wpn-*), Evoker looks (evk-*), battle
                  themes (bui-*, tr-bui-*), menu colours (ui-*), titles (tt-*, ec-tt-*, tr-tt-*, stat titles), wallpapers (wp-*,
                  tr-wp-*). Inside an epilogue the layer holds a copy (stateFor) that leave() doesn't copy back, so both are read.
       Plumes:    S.gacha.plumes (gacha.js). Inside an epilogue the year's are in S.year1.gacha.plumes (the layer starts at 0).
       Album:     S.album = { v, cg: [ids], posts: [ids], booth: [strip / solo records], frags, events, doors, ranks, prologue,
                  epi: { world: record } } (ui.js seeCg / seePost, booth.js, menu.js albumCarry). Inside an epilogue the year's
                  album is S.year1.album (albumCarry snapshot) and the layer's own CGs / posts are S.album.
       Polaroids: not stored; epilogue.js unlocks one when its hangout has played (POLAROIDS: [polaroid id, hangout id]), read
                  here from the epilogue records' seen.hangouts (and the live layer's S.epi.bonds[*].seen).
       Epilogues: Y.epilogues[world] = { done, route, at, seen, flags, bonds, open, stage } (epilogue.js recordOf); New Game+
                  carries earlier runs' records in S.album.epi (menu.js albumCarry).
   ── API (window.FemcEquinoxImport) ──
     slots() → [{ slot, n (0 = autosave), label, savedAt, date: 'M/D', playthrough: { run, ngp, inEpilogue }, finished,
                  ending, epilogues: [{ world, route }] }]  every Solstice save found, newest first; read only.
     read(slotKey) → { cosmetics: { own: [ids], on: { slot: id }, portraits, pOff: [who] }, plumes: n,
                  album: { cg: [ids], posts: [ids], booth: [records], polaroids: [ids] }, epilogues: [{ world, route }],
                  from: { slot, savedAt } }  or null (no such save, or a year not finished). Nothing else is copied: not levels,
                  links, skills, Personas, Echoes, money, items, stats, flags, keychains, gacha counters or pity.
     apply(state, imported) → state  writes into a fresh Equinox state under Solstice's own field names, so cosmetics.js,
                  gacha.js and the album code read it unchanged: state.gacha.cos.{own, on, portraits, pOff} (own is a union),
                  state.gacha.plumes (+= once), state.album.{cg, posts, booth, polaroids} (unions; polaroids is new: the Equinox
                  album lists them from here), and state.solstice = { epilogues, from, plumes } (the opening's flavour lines read
                  state.solstice.epilogues; a second apply() of the same import doesn't add the plumes again).
   Tests: tests/equinox_import_jsc.js (jsc, stub localStorage). */
window.FemcEquinoxImport = (() => {
  const KEY = 'kg-femc-revamp', CLEARS_KEY = 'kg-femc-revamp-clears';
  const SLOTS = Array.from({ length: 10 }, (_, i) => i + 1);
  const SLOT_KEY = n => `${KEY}-slot${n}`;
  const KEYS = [KEY, ...SLOTS.map(SLOT_KEY)];
  const WORLD_ORDER = ['runners', 'strangers', 'hoax', 'stay', 'true'];
  // epilogue.js POLAROIDS as of Nov 15 2026 (polaroid id, the hangout that gives it). The live table wins when epilogue.js is
  // loaded (window.FemcEpilogue.POLAROIDS); this copy is for the Equinox page, which doesn't load epilogue.js.
  const POLAROIDS = {
    runners: [['runners-snow-day-at-the-valley', 'epi-r-hanni-4'], ['runners-napkin-math', 'epi-r-hyein-4'], ['runners-four-seconds', 'epi-r-minji-3'], ['runners-two-chairs', 'epi-r-jaehyun-3']],
    strangers: [['strangers-hot-floor', 'epi-s-yunjin-5'], ['strangers-the-chair-by-the-window', 'epi-s-yunjin-2'], ['strangers-good-cards', 'epi-s-eomma-1'], ['strangers-four-frames', 'epi-s-girls-1'], ['strangers-white-eyebrows', 'epi-s-girls-eyebrows'], ['strangers-the-tent', 'epi-s-girls-tent'], ['strangers-pleats', 'epi-s-house-1'], ['strangers-bad-coffee', 'epi-s-yunjin-1'], ['strangers-the-wall', 'epi-s-niki-1'], ['strangers-good-morning', 'epi-s-kazuha-morning']],
    hoax: [['hoax-backwards', 'epi-h-cherry-2'], ['hoax-swings', 'epi-h-cherry-4'], ['hoax-snow-way', 'epi-h-jake-1'], ['hoax-ice-cream-and-hugs', 'epi-h-junkyu-1'], ['hoax-four-croissants', 'epi-h-sunoo-1'], ['hoax-sleepover', 'epi-h-cherry-late-2'], ['hoax-land-of-the-living', 'epi-h-jihoon-1'], ['hoax-dog-date', 'epi-h-jungwon-dogs'], ['hoax-colour-coded', 'epi-h-jaehyuk-1']],
    stay: [['stay-borrowed', 'epi-st-yukari-1'], ['stay-attempt-nine', 'epi-st-fuuka-1'], ['stay-the-long-way', 'epi-st-ken-1'], ['stay-in-that-order', 'epi-st-mitsuru-2'], ['stay-april-fool', 'epi-st-junpei-2']]
  };
  const G = typeof globalThis !== 'undefined' ? globalThis : window;
  const store = () => { try { return G.localStorage || null; } catch (e) { return null; } };
  const get = k => { const s = store(); try { return s ? s.getItem(k) : null; } catch (e) { return null; } }; // the only storage call
  const parse = t => { try { return JSON.parse(t || 'null'); } catch (e) { return null; } };
  const obj = x => (x && typeof x === 'object' && !Array.isArray(x) ? x : {});
  const arr = x => (Array.isArray(x) ? x : []);
  const strs = x => arr(x).filter(v => typeof v === 'string' && v);
  const uniq = a => [...new Set(a)];
  const clone = o => JSON.parse(JSON.stringify(o));

  // A save key's record: { state, at, label } (the autosave is the state itself).
  function record(key) {
    if (!KEYS.includes(key)) return null; // only Solstice's own save keys, never anything else
    const x = parse(get(key));
    if (!x || typeof x !== 'object') return null;
    if (key === KEY) return x.v && x.started ? { state: x, at: x.savedAt || null, label: null } : null;
    return x.state && x.state.v && x.state.started ? { state: x.state, at: x.at || x.state.savedAt || null, label: x.label || null } : null;
  }
  const yearOf = s => (s.epi && s.year1 && typeof s.year1 === 'object' ? s.year1 : s);
  const clears = () => arr(parse(get(CLEARS_KEY)));
  // core.js endingName, read only.
  const endingOf = f => (f['route-bad'] ? 'the last stop' : f['true-final'] ? 'I am thou' : f['route-R'] ? 'where it begins' : f['route-S'] ? 'low tide' : f['route-H'] ? 'the unfated life' : 'here');
  function finished(s) {
    const Y = yearOf(s);
    return !!(s.epi || arr(Y.events).includes('end-ending') || Object.keys(obj(Y.epilogues)).length || clears().some(c => c && c.run && c.run === Y.runId));
  }
  // Every finished epilogue record this save knows: this run's (Y.epilogues) and earlier runs' (album.epi, New Game+).
  function recordsOf(s) {
    const Y = yearOf(s), out = {};
    [obj(obj(Y.album).epi), obj(obj(s.album).epi), obj(Y.epilogues)].forEach(r => Object.entries(r).forEach(([w, x]) => { if (x && x.done) out[w] = x; }));
    return out;
  }
  const epilogues = s => Object.entries(recordsOf(s)).filter(([w]) => WORLD_ORDER.includes(w))
    .sort((a, b) => WORLD_ORDER.indexOf(a[0]) - WORLD_ORDER.indexOf(b[0]))
    .map(([world, x]) => ({ world, route: typeof x.route === 'string' ? x.route : null }));
  // The in-game date of a save (Solstice's year: 4/6/2009 is day 0; an epilogue layer counts from its own start).
  function dateOf(s) {
    const e = s.epi, [m, d] = String((e && e.start) || '4/6').split('/').map(Number);
    const t = new Date((e && e.year) || 2009, m - 1, d + (+s.day || 0));
    return `${t.getMonth() + 1}/${t.getDate()}`;
  }

  function slots() {
    return KEYS.map((key, i) => {
      const r = record(key); if (!r) return null;
      const s = r.state, Y = yearOf(s);
      return { slot: key, n: i, label: r.label, savedAt: r.at, date: dateOf(s),
        playthrough: { run: Y.runId || null, ngp: +Y.ngp || 0, inEpilogue: s.epi ? s.epi.world || null : null },
        finished: finished(s), ending: finished(s) ? endingOf(obj(Y.flags)) : null, epilogues: epilogues(s) };
    }).filter(Boolean).sort((a, b) => (b.savedAt || 0) - (a.savedAt || 0));
  }

  function polaroidsOf(s) {
    const live = G.FemcEpilogue && G.FemcEpilogue.POLAROIDS, table = live && typeof live === 'object' ? live : POLAROIDS;
    const recs = { ...obj(obj(yearOf(s).album).epi), ...obj(obj(s.album).epi), ...obj(yearOf(s).epilogues) }, out = [];
    const seenIn = w => {
      const hs = new Set(Object.values(obj(obj(obj(recs[w]).seen).hangouts)).flatMap(strs));
      if (s.epi && s.epi.world === w) Object.values(obj(s.epi.bonds)).forEach(b => strs(obj(b).seen).forEach(h => hs.add(h)));
      return hs;
    };
    Object.keys(table).forEach(w => { const hs = seenIn(w); arr(table[w]).forEach(p => { if (Array.isArray(p) && hs.has(p[1])) out.push(p[0]); }); });
    return uniq(out);
  }

  function read(slotKey) {
    const r = record(slotKey);
    if (!r || !finished(r.state)) return null;
    const s = r.state, Y = yearOf(s), layers = s === Y ? [Y] : [Y, s];
    const cos = layers.map(l => obj(obj(l.gacha).cos)), liveCos = cos[cos.length - 1];
    const own = uniq(cos.flatMap(c => strs(c.own)));
    const on = {};
    Object.entries(obj(liveCos.on)).forEach(([slot, id]) => { if (typeof id === 'string' && own.includes(id)) on[slot] = id; });
    const plumes = layers.reduce((n, l) => n + Math.max(0, Math.floor(+obj(l.gacha).plumes || 0)), 0);
    const albums = layers.map(l => obj(l.album)), seenBooth = new Set(), booth = [];
    albums.forEach(a => arr(a.booth).forEach(b => { if (!b || typeof b !== 'object') return; const k = JSON.stringify(b); if (!seenBooth.has(k)) { seenBooth.add(k); booth.push(clone(b)); } }));
    return {
      cosmetics: { own, on, portraits: liveCos.portraits !== false, pOff: uniq(strs(liveCos.pOff)) },
      plumes,
      album: { cg: uniq(albums.flatMap(a => strs(a.cg))), posts: uniq(albums.flatMap(a => strs(a.posts))), booth, polaroids: polaroidsOf(s) },
      epilogues: epilogues(s),
      from: { slot: slotKey, savedAt: r.at }
    };
  }

  function apply(state, imported) {
    if (!state || typeof state !== 'object' || !imported) return state;
    const im = clone(imported), c = obj(im.cosmetics), a = obj(im.album);
    const g = (state.gacha = state.gacha && typeof state.gacha === 'object' ? state.gacha : {});
    const cos = (g.cos = g.cos && typeof g.cos === 'object' ? g.cos : {});
    cos.own = uniq([...strs(cos.own), ...strs(c.own)]);
    cos.on = { ...obj(cos.on), ...obj(c.on) };
    cos.portraits = c.portraits !== false;
    cos.pOff = uniq([...strs(cos.pOff), ...strs(c.pOff)]);
    const again = !!(state.solstice && state.solstice.from && im.from && state.solstice.from.slot === im.from.slot && state.solstice.from.savedAt === im.from.savedAt);
    const add = Math.max(0, Math.floor(+im.plumes || 0));
    if (!again) g.plumes = Math.max(0, Math.floor(+g.plumes || 0)) + add;
    const al = (state.album = state.album && typeof state.album === 'object' ? state.album : { v: 1 });
    if (!al.v) al.v = 1;
    ['cg', 'posts', 'polaroids'].forEach(k => { al[k] = uniq([...strs(al[k]), ...strs(a[k])]); });
    const keys = new Set(arr(al.booth).map(b => JSON.stringify(b)));
    al.booth = [...arr(al.booth), ...arr(a.booth).filter(b => b && typeof b === 'object' && !keys.has(JSON.stringify(b)))];
    state.solstice = { epilogues: arr(im.epilogues).map(e => ({ world: String(e.world), route: e.route == null ? null : String(e.route) })), from: im.from || null, plumes: again ? (state.solstice.plumes || 0) : add };
    return state;
  }

  return { slots, read, apply, KEYS, POLAROIDS };
})();
