/* Persona 3: Solstice: the epilogue sim (Nov 11 2026, Kat: "an epilogue sim thing where i can just go play through the
   epilogues without me having to restart the entire game again in ng+").
   Where: the title's "Epilogues" link (beside Practice; ui.js titleScreen calls title(sec)) opens a picker of the four worlds
   by the names she knows (Runners, strangers, HOAX, Stay). Nothing else is listed by name.
   Sandbox saves, one per world: localStorage 'kg-femc-episim-<world>' (runners / strangers / hoax / stay). Starting or
   continuing one calls core.js sandbox(key, state): save() writes there instead of 'kg-femc-revamp', saveSlot() refuses
   (the Save buttons hide under html.g-episim, episim.css; a small "Epilogue sim" tag sits bottom left), and the fights' battle save lives inside it like any epilogue.
   Her autosave, her ten slots and the clears list ('kg-femc-revamp-clears', the stamps) are never written. One sandbox per
   world, so she can be partway through all four; Continue picks each up where she left it.
   Leaving: Settings → Return to title (or a reload) lands on the title, whose hook calls exit(): sandbox(null) reloads her
   own autosave. Loading a slot or a backup code mid-sim also ends it (core.js). The act's end (epilogue.js finish, after
   the end and Equinox cards) calls finished() instead of leave(): the sandbox is kept, marked done, and she's back on the
   title with the picker open. No New Game+ prompt, no year to give back.
   What it fakes (fakeYear): a finished year on its last night, built with core.js's fresh state against Iwatodai's data,
   then epilogue.js stateFor(year, world) makes the epilogue state exactly as entering after an ending would:
     - the world's ending flag (route-R / route-S / route-H / route-stay), the end-ending event;
     - every main-game link met and at rank 10; "Closest to" (her pick, default Haechan; or nobody in particular): that one
       at rank 15 on the romance route and her Christmas pick (xmas-<id>), which is what each world's lean reads; the
       world's own matching year flags for that pick (strangers: hc-lean-S for Haechan; Stay: stay-<id> / ending-<id>, and
       shinji-awake for Shinjiro, as tests/femc_epilogue.py sets them);
     - every searcher arrived (arrived-*), no Danielle choice either way; social stats at their top rank;
     - fragments, the Compendium and the phone case / looks copied (read only) from her own save, so the sim looks like her;
     - the battle save: the highest-level one in her autosave or slots (a copy), if it's at least end-of-year level
       (save.js seedLevel of the last day, 54); else a seeded end-of-year one (that level, the default party, awakened).
   The "Previously…" scrapbook plays when a world is started fresh (skippable), as entering does. */
window.FemcEpiSim = (() => {
  const G = window.FemcGame, W = window;
  if (!G || !G.sandbox) return null;
  const EP = () => W.FemcEpilogue, UI = () => W.FemcGameUI;
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const clone = o => JSON.parse(JSON.stringify(o));
  const KEY = id => `kg-femc-episim-${id}`;
  // The worlds, in the order and by the names Kat knows them (Stay's world id is 'stay', its place Iwatodai).
  const LIST = [
    { id: 'runners', name: 'Runners', place: 'Syracuse', flag: 'route-R' },
    { id: 'strangers', name: 'strangers', place: 'Incheon', flag: 'route-S' },
    { id: 'hoax', name: 'HOAX', place: 'Hanlim', flag: 'route-H' },
    { id: 'stay', name: 'Stay', place: 'Iwatodai', flag: 'route-stay' }
  ];
  // "Closest to": the main game's romances, the same list for every world.
  const CLOSE = [['haechan', 'Haechan'], ['jungwon', 'Jungwon'], ['jihoon', 'Jihoon'], ['minji', 'Minji'], ['akihiko', 'Akihiko'], ['shinjiro', 'Shinjiro'], ['', 'Nobody in particular']];
  const ARRIVED = ['chenle', 'cherry', 'crew', 'danielle', 'haechan', 'hanni', 'hyein', 'jaehyun', 'jaemin', 'jihoon', 'jungwon', 'mark', 'minji', 'sunoo', 'yunjin'];
  const read = id => { try { const s = JSON.parse(localStorage.getItem(KEY(id)) || 'null'); return s && s.v && s.epi && s.epi.world === id ? s : null; } catch (e) { return null; } };
  // html.g-episim (episim.css hides the slots' Save buttons) and the corner tag, whenever the save changes.
  function sync() {
    const on = !!G.sandboxed(), tag = document.querySelector('.g-esim-tag');
    document.documentElement.classList.toggle('g-episim', on);
    if (on && !tag && document.body) document.body.insertAdjacentHTML('beforeend', '<div class="g-esim-tag" aria-hidden="true">Epilogue sim</div>');
    if (!on && tag) tag.remove();
  }
  G.onChange(sync);

  /* ── The fake finished year ── */
  function bestBattle(endDay) {
    const BS = W.FemcBattleSave, D = W.FEMC_BATTLE_DATA;
    if (!BS || !D) return null;
    const got = [], add = s => { if (!s || typeof s !== 'object') return; [s.battleSave, s.battleCarry, s.year1 && s.year1.battleSave].forEach(b => { try { const x = b && BS.fromRaw(clone(b)); if (x) got.push(x); } catch (e) {} }); };
    try { add(JSON.parse(localStorage.getItem(G.KEY) || 'null')); } catch (e) {}
    G.SLOTS.forEach(n => add(G.readSlot(n)?.state));
    const floor = BS.seedLevel(endDay), best = got.sort((a, b) => (b.lvl || 0) - (a.lvl || 0))[0];
    if (best && (best.lvl || 0) >= floor) return best;
    const s = BS.seed(endDay);
    s.party = (D.defaultParty || []).slice(); s.awakened = true;
    return BS.normalize(s);
  }
  function fakeYear(w, pick) {
    return G.noWorld(() => {
      const me = G.S.epi ? (G.S.year1 || {}) : G.S, Y = G.freshState(), end = G.END();
      const top = Object.fromEntries(Object.entries(G.D.stats.stats || {}).map(([k, v]) => [k, (v.at || [0]).slice(-1)[0]]));
      Object.assign(Y, { started: true, phase: 'play', day: end, slot: 'late', runId: `episim-${w.id}`, ngp: 0, yen: 0, stats: top,
        fragments: [...(me.fragments || [])], registered: [...(me.registered || [])], events: ['end-ending'], battleSave: bestBattle(end), battleAt: Date.now() });
      if (me.gacha) Y.gacha = clone(me.gacha);
      const f = Y.flags = { [w.flag]: true };
      ARRIVED.forEach(id => { f[`arrived-${id}`] = true; });
      Y.met = Object.keys(G.LINKS);
      Y.met.forEach(id => { Y.links[id] = { rank: 10, xp: 0, seen: [], rankDay: {} }; });
      if (pick) {
        Y.links[pick] = { rank: 15, xp: 0, seen: [], rankDay: {}, route: 'romance' };
        Y.route.choices.xmas = pick; f[`xmas-${pick}`] = true;
        if (w.id === 'strangers' && pick === 'haechan') f['hc-lean-S'] = true;
        if (w.id === 'stay' && (pick === 'akihiko' || pick === 'shinjiro')) { f[`stay-${pick}`] = true; f[`ending-${pick}`] = true; if (pick === 'shinjiro') f['shinji-awake'] = true; }
      }
      return Y;
    });
  }

  /* ── Starting, continuing, leaving ── */
  function clearScreen() {
    document.querySelectorAll('.g-overlay, .gs').forEach(x => x.remove());
    document.documentElement.classList.remove('g-in-scene');
  }
  function go(w, pick, fresh) {
    const ep = EP();
    return ep.loadWorld(w.id).then(() => {
      if (fresh) { if (!G.sandbox(KEY(w.id), ep.stateFor(fakeYear(w, pick), w.id))) throw new Error('sandbox'); }
      else if (!G.sandbox(KEY(w.id))) throw new Error('sandbox');
      G.setWorld(ep.build(w.id));
      sync();
      clearScreen();
      if (fresh && W.FemcScrapbook) W.FemcScrapbook.play(w.id).then(() => UI().run(), () => UI().run());
      else UI().run();
    });
  }
  function exit() {
    if (!G.sandboxed()) return false;
    W.FemcGlitch?.clear();
    G.sandbox(null);
    sync();
    return true;
  }
  // The title, from anywhere: her own autosave back as S (its phase kept), the title drawn.
  function toTitle() {
    exit();
    clearScreen();
    const s = G.S, ph = s.phase;
    s.phase = 'title';
    try { UI().run(); } finally { s.phase = ph; }
  }
  function finished() {
    const id = G.S.epi && G.S.epi.world;
    G.save();
    toTitle();
    setTimeout(() => open(id), 80);
  }

  /* ── The picker ── */
  function status(id) {
    const s = read(id);
    if (!s) return { s: null, line: 'Not started' };
    if (s.epi.done) return { s, line: 'Finished', done: true };
    const i = G.slotInfo(s);
    return { s, line: i ? `In progress · ${i.md} ${i.day} · ${i.slot}` : 'In progress', going: true };
  }
  function open(focusId) {
    const ui = UI(); if (!ui) return;
    const opts = CLOSE.map(([id, n]) => `<option value="${id}"${id === 'haechan' ? ' selected' : ''}>${esc(n)}</option>`).join('');
    const o = ui.overlay(`<div class="g-esim"><p class="g-esim-kick">Extras</p><h2>Epilogues</h2>
      <p class="g-note">Play any epilogue on its own, as if the year just ended. Each one keeps its own sim save: your game and your save slots aren’t touched. Leave any time with Settings → Return to title, and Continue picks it up again.</p>
      <div class="g-esim-list">${LIST.map(w => `<section class="g-esim-w" data-w="${w.id}"><div class="g-esim-head"><h3>${esc(w.name)}</h3><small>${esc(w.place)}</small></div>
        <p class="g-esim-st" aria-live="polite"></p>
        <label class="g-esim-pick">Closest to <select data-pick aria-label="Closest to, for ${esc(w.name)}">${opts}</select></label>
        <div class="g-row"></div></section>`).join('')}</div>
      <p class="g-note small">Closest to: who she ended the year with. Everyone else she met is a good friend.</p>
      <div class="g-row"><button type="button" class="g-btn" data-close>Close</button></div></div>`, 'g-esim-ov');
    const armed = {};
    const paint = id => {
      const w = LIST.find(x => x.id === id), sec = o.el.querySelector(`[data-w="${id}"]`), st = status(id);
      sec.querySelector('.g-esim-st').textContent = st.line;
      sec.classList.toggle('done', !!st.done);
      const freshLabel = armed[id] ? 'Replace it?' : st.s ? (st.done ? 'Play again' : 'Start over') : 'Start fresh';
      sec.querySelector('.g-row').innerHTML = `${st.going ? '<button type="button" class="g-btn pink small" data-go="cont">Continue ▸</button>' : ''}<button type="button" class="g-btn small${st.going ? '' : ' pink'}" data-go="fresh">${freshLabel}${st.going ? '' : ' ▸'}</button>`;
      sec.querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', () => {
        const fresh = b.dataset.go === 'fresh';
        if (fresh && st.going && !armed[id]) { armed[id] = true; paint(id); sec.querySelector('[data-go=fresh]')?.focus(); return; }
        G.sfx('femc-click');
        o.el.querySelectorAll('button, select').forEach(x => { x.disabled = true; });
        sec.querySelector('.g-esim-st').textContent = 'Loading…';
        go(w, sec.querySelector('[data-pick]').value || null, fresh).catch(() => {
          o.el.querySelectorAll('button, select').forEach(x => { x.disabled = false; });
          sec.querySelector('.g-esim-st').textContent = 'It couldn’t load. Check your connection and try again.';
        });
      }));
    };
    LIST.forEach(w => paint(w.id));
    if (focusId) setTimeout(() => o.el.querySelector(`[data-w="${focusId}"] button`)?.focus({ preventScroll: true }), 40);
  }

  /* ── The title's link (ui.js titleScreen) ── */
  function title(sec) {
    exit();
    if (!sec || sec.querySelector('.g-title-episim')) return;
    sec.insertAdjacentHTML('beforeend', '<button type="button" class="g-title-episim" title="Play any epilogue on its own, in its own sim save">Epilogues</button>');
    sec.querySelector('.g-title-episim').addEventListener('click', () => { G.sfx('femc-click'); open(); });
  }

  return { title, open, exit, finished, active: () => !!G.sandboxed(), LIST, KEY, fakeYear, read };
})();
