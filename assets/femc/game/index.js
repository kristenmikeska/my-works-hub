/* Persona 3: Solstice · the Index (Kat, EPILOGUE-EXPANSION-PLAN.md section 3, "Lore for new players": "people, places and
   terms, filled in as you meet them"). Menu → Records → Index (menu.js 'index' tab → pageHtml / wirePage). Styles:
   solstice-index.css (every rule under .g-fm-ov.is-page).

   DATA: data/index-<world>.js, one file per world, each pushing onto window.FEMC_INDEX:
     { id, kind: 'person' | 'place' | 'term', world: 'year' | 'runners' | 'strangers' | 'hoax' | 'stay', name, short, text,
       unlock, face?, bg? }
     id      unique across every world (the epilogue files prefix theirs with the world: 'runners-hanni')
     short   one line under the name (who / what, at a glance)
     text    1-3 sentences, spoiler-safe AS OF the unlock point. A string, or tiers [{ t, unlock }] for an entry that grows:
             the first tier with no unlock always shows once the entry is open; each later tier shows once its own unlock holds.
     face    a portrait folder (assets/femc/portraits/<face>/, FEMC_PORTRAITS): the neutral face, else the first one there.
             Read straight from the portrait index (not G.portrait), so a worn Wardrobe outfit, the season or the world the
             player is standing in never changes whose face the Index shows. A folder that doesn't exist yet shows no picture.
     bg      a background slug (assets/femc/bg/<slug>.webp) through core.js background(), shown for places (and a few terms).
   UNLOCK: a rule string, or an array of them (ANY one opens it), or { all: [rules] }. true or a missing unlock = always.
     met:<id>      year: in S.met (the link's been met). Epilogue: a hangout with that home bond has been played.
     heard:<id>    that speaker has said a line in a live scene in this world (the seen log below)
     at:<prefix>   a live scene in this world has been at a place starting with <prefix> (logged as its first three parts,
                   "Incheon · The Lee House · Annex", so a prefix is at most three parts)
     did:<id>      an activity done (the year's S.done: Go Out spots, dorm activities, clubs; an epilogue's Go Out spots through
                   the log's d below); job:<id> a part-time job taken (S.jobs)
     flag:<id>     a flag set; event:<id> a story event played (S.events)
     date:<M/D>    the day reached in that world's calendar (always true once that world is behind her)
     frag:<n>      at least n memory fragments; frag:<R|S|H>:<n> at least n of that world's (route.frags)
     links:<n>     at least n links met (year)
     glitch        epilogue: a glitch has shown (S.glitch.seen / peak; always true for a finished epilogue)
   Where the facts live: the year is S (S.year1 while an epilogue plays); the epilogue being played is S itself (S.epi,
   S.epi.bonds[id].seen); a finished epilogue is the year's S.epilogues[world] (epilogue.js recordOf: flags, seen.events,
   seen.hangouts). Days, flags and events of the year read as all done inside an epilogue.

   THE SEEN LOG (the only new save data): S.ix = { <world>: { p: [speaker ids], l: [places, up to three parts], d: [epilogue
   Go Out activity ids, copied from S.spent; see syncActs] } }, kept on the YEAR
   state (S.year1.ix while an epilogue plays), so it survives leaving an epilogue and rides along in slots and codes. scene.js
   calls heard(id) on each spoken line and went(place) when a scene opens or breaks to a new place; a Theater replay never
   logs. Old saves have no S.ix: they read as empty, and links / activities / flags / dates still open everything they cover.
   New Game+ starts a fresh state, so the Index starts over with the year.

   WORLDS: the year is always listed; an epilogue world only once she's been there (so the Index never hints at an ending).
   Inside an epilogue the page opens on that world. Locked entries show as "???" rows at the end of their section (no name,
   no picture) and count toward "n / total"; a search hides them.
   KEYS: ↑↓ (and Home / End) move through the list and show the entry; type in the search box to filter; ← → or the chips
   switch world and section; Enter on a row reads it. The menu's own [ ] and Esc work as on every page. */
window.FemcIndex = (() => {
  const G = window.FemcGame;
  if (!G) return null;
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const WORLDS = [['year', 'Iwatodai'], ['runners', 'Syracuse'], ['strangers', 'Incheon'], ['hoax', 'Hanlim'], ['stay', 'Spring']];
  const KINDS = [['all', 'All'], ['person', 'People'], ['place', 'Places'], ['term', 'Terms']];
  const KIND_ONE = { person: 'Person', place: 'Place', term: 'Term' };
  const ALL = () => window.FEMC_INDEX || [];
  const S = () => G.S;
  const yearOf = () => { const s = S(); return s && s.epi ? (s.year1 || null) : s; };
  const worldNow = () => { const s = S(); return s && s.epi ? s.epi.world : 'year'; };

  /* ── The seen log ── */
  function logOf(w) {
    const Y = yearOf(); if (!Y) return null;
    const ix = (Y.ix && typeof Y.ix === 'object') ? Y.ix : (Y.ix = {});
    const L = ix[w] || (ix[w] = { p: [], l: [] });
    if (!Array.isArray(L.p)) L.p = []; if (!Array.isArray(L.l)) L.l = [];
    return L;
  }
  // An epilogue's Go Out spots don't go through S.done (epilogue.js doAct records S.spent['day-slot'] = 'act:<id>', and that
  // state is dropped on leaving), so they're copied into the log as d: [ids] whenever a scene opens and when the page draws.
  function syncActs() {
    const s = S(); if (!s || !s.epi) return;
    const acts = Object.values(s.spent || {}).filter(v => typeof v === 'string' && v.startsWith('act:')).map(v => v.slice(4));
    if (!acts.length) return;
    const L = logOf(s.epi.world); if (!L) return;
    if (!Array.isArray(L.d)) L.d = [];
    acts.forEach(a => { if (!L.d.includes(a)) L.d.push(a); });
  }
  function heard(id) {
    if (!id || typeof id !== 'string' || id === 'solar') return;
    try { const L = logOf(worldNow()); if (L && !L.p.includes(id)) L.p.push(id); } catch (e) {}
  }
  function went(place) {
    if (!place || typeof place !== 'string') return;
    const key = place.split(' · ').slice(0, 3).join(' · ').trim(); if (!key) return;
    try { const L = logOf(worldNow()); if (L && !L.l.includes(key)) L.l.push(key); syncActs(); } catch (e) {}
  }

  /* ── What each world knows ── */
  function ctx(w) {
    const s = S(), Y = yearOf(); if (!s || !Y) return null;
    const ix = (Y.ix && Y.ix[w]) || { p: [], l: [] };
    if (w === 'year') {
      const done = !!s.epi;
      return { w, live: !done, flags: Y.flags || {}, events: Y.events || [], met: id => (Y.met || []).includes(id), done: Y.done || {}, jobs: Y.jobs || {},
        day: done ? Infinity : (s.day || 0), frags: (Y.route && Y.route.frags) || {}, nfrag: (Y.fragments || []).length, nlinks: (Y.met || []).length, ix, glitch: false };
    }
    if (s.epi && s.epi.world === w) {
      const b = s.epi.bonds || {}, g = s.glitch || {};
      return { w, live: true, flags: s.flags || {}, events: s.events || [], met: id => !!(b[id] && (b[id].seen || []).length), done: s.done || {}, jobs: s.jobs || {},
        day: s.day || 0, frags: {}, nfrag: 0, nlinks: 0, ix, glitch: (g.seen || []).length > 0 || (g.peak || 0) > 0 };
    }
    const r = (Y.epilogues || {})[w]; if (!r) return null;
    const hang = (r.seen && r.seen.hangouts) || {};
    return { w, live: false, flags: r.flags || {}, events: (r.seen && r.seen.events) || [], met: id => !!(hang[id] || []).length, done: {}, jobs: {},
      day: Infinity, frags: {}, nfrag: 0, nlinks: 0, ix, glitch: true };
  }
  function rule(c, r) {
    if (r === true || r == null || r === 'always') return true;
    if (Array.isArray(r)) return r.some(x => rule(c, x));
    if (typeof r === 'object') return Array.isArray(r.all) ? r.all.every(x => rule(c, x)) : false;
    const at = String(r).indexOf(':'), k = at < 0 ? r : r.slice(0, at), v = at < 0 ? '' : r.slice(at + 1);
    switch (k) {
      case 'met': return c.met(v);
      case 'heard': return (c.ix.p || []).includes(v);
      case 'at': return (c.ix.l || []).some(p => p.startsWith(v) || v.startsWith(p + ' · ') || p === v);
      case 'did': return (c.done[v] || 0) > 0 || (c.ix.d || []).includes(v);
      case 'job': return !!c.jobs[v];
      case 'flag': return !!c.flags[v];
      case 'event': return c.events.includes(v);
      case 'date': if (c.day === Infinity) return true; try { return c.day >= G.dayOf(v); } catch (e) { return false; }
      case 'frag': { const [a, b] = v.split(':'); return b === undefined ? c.nfrag >= (+a || 1) : (c.frags[a] || 0) >= (+b || 1); }
      case 'links': return c.nlinks >= (+v || 1);
      case 'glitch': return !!c.glitch;
    }
    return false;
  }
  const open = (c, e) => !!c && rule(c, e.unlock);
  const tiers = (c, e) => (Array.isArray(e.text) ? e.text.filter((x, i) => (i === 0 && !x.unlock) || rule(c, x.unlock)).map(x => x.t) : [e.text]).filter(Boolean);

  /* ── Pictures ── */
  function faceUrl(id) {
    const have = (window.FEMC_PORTRAITS || {})[id] || [];
    const f = have.includes('neutral') ? 'neutral' : have[0];
    return f ? `${G.base}assets/femc/portraits/${id}/${f}.webp?v=${window.FEMC_PORTRAIT_V || 1}` : null;
  }
  function bgUrl(slug) { try { const b = G.background('', '', slug); return b && b.url; } catch (e) { return null; } }
  const picOf = e => (e.face ? faceUrl(e.face) : null) || (e.bg ? bgUrl(e.bg) : null);

  /* ── The page ── */
  const sel = { w: null, kind: 'all', q: '', id: null, ctxW: null };
  const worlds = () => WORLDS.filter(([w]) => w === 'year' || (ctx(w) && ALL().some(e => e.world === w)));
  const sortKey = e => String(e.name).replace(/^The /, '').toLowerCase();
  function listFor(w, kind, q) {
    const c = ctx(w), all = ALL().filter(e => e.world === w && (kind === 'all' || e.kind === kind));
    const on = all.filter(e => open(c, e)).sort((a, b) => sortKey(a).localeCompare(sortKey(b)));
    const n = on.length, total = all.length;
    const ql = q.trim().toLowerCase();
    const shown = ql ? on.filter(e => [e.name, e.short, ...tiers(c, e)].join(' ').toLowerCase().includes(ql)) : on;
    return { c, shown, locked: ql ? 0 : total - n, n, total };
  }
  function counts(w) { const c = ctx(w), all = ALL().filter(e => e.world === w); return { n: all.filter(e => open(c, e)).length, total: all.length }; }
  function summary() { syncWorld(); const k = counts(sel.w); return `Index · ${k.n} / ${k.total}`; }
  function syncWorld() {
    const now = ctx(worldNow()) ? worldNow() : 'year';
    if (sel.ctxW !== now) { sel.ctxW = now; sel.w = now; sel.id = null; sel.kind = 'all'; sel.q = ''; }
    if (!worlds().some(([w]) => w === sel.w)) sel.w = 'year';
  }

  const thumb = e => { const u = picOf(e); return u ? `<span class="g-ix-pic ${e.kind}"><img src="${esc(u)}" alt="" loading="lazy"></span>` : `<span class="g-ix-pic ${e.kind} none">${esc((e.name || '?')[0])}</span>`; };
  function rowsHtml(L) {
    const KIND_ORDER = sel.kind === 'all' ? ['person', 'place', 'term'] : [sel.kind];
    const out = [];
    KIND_ORDER.forEach(k => {
      const mine = L.shown.filter(e => e.kind === k), lockedHere = sel.q.trim() ? 0 : ALL().filter(e => e.world === sel.w && e.kind === k && !open(L.c, e)).length;
      if (!mine.length && !lockedHere) return;
      if (sel.kind === 'all') out.push(`<li class="g-ix-sec" role="presentation">${esc(KINDS.find(x => x[0] === k)[1])}<small>${mine.length} / ${mine.length + lockedHere}</small></li>`);
      mine.forEach(e => out.push(`<li role="none"><button type="button" role="option" class="g-ix-row${e.id === sel.id ? ' on' : ''}" data-ix="${esc(e.id)}" aria-selected="${e.id === sel.id}">${thumb(e)}<span class="g-ix-nm"><b>${esc(e.name)}</b><small>${esc(e.short || '')}</small></span></button></li>`));
      if (lockedHere) out.push(`<li class="g-ix-locked" role="presentation"><span>???</span><small>${lockedHere} still to find</small></li>`);
    });
    if (!L.shown.length && sel.q.trim()) out.push(`<li class="g-ix-empty" role="presentation">Nothing by that name yet.</li>`);
    return out.join('');
  }
  function detailHtml(c, e) {
    if (!e) return `<div class="g-ix-blank"><p class="g-ix-kick">Index</p><p>People, places and words, written down as Solar comes across them.</p><p class="g-ix-hint">Pick an entry to read it.</p></div>`;
    const u = picOf(e), wn = (WORLDS.find(x => x[0] === e.world) || [])[1] || '';
    const pic = u ? `<div class="g-ix-art ${e.face ? 'face' : 'scene'}"><img src="${esc(u)}" alt=""></div>` : '';
    return `${pic}<div class="g-ix-txt"><p class="g-ix-kick">${esc(KIND_ONE[e.kind] || '')} · ${esc(wn)}</p><h4>${esc(e.name)}</h4>${e.short ? `<p class="g-ix-short">${esc(e.short)}</p>` : ''}
      ${tiers(c, e).map(t => `<p>${esc(t)}</p>`).join('')}</div>`;
  }
  function pageHtml() {
    try { syncActs(); } catch (e) {}
    syncWorld();
    const L = listFor(sel.w, sel.kind, sel.q), k = counts(sel.w);
    if (sel.id && !L.shown.some(e => e.id === sel.id)) sel.id = null;
    const cur = sel.id ? L.shown.find(e => e.id === sel.id) : null;
    const ws = worlds();
    return `<div class="g-ix" data-ix-page>
      <div class="g-ix-top">
        ${ws.length > 1 ? `<div class="g-ix-chips g-ix-worlds" role="tablist" aria-label="World">${ws.map(([w, n]) => `<button type="button" role="tab" data-ix-w="${w}" class="${w === sel.w ? 'on' : ''}" aria-selected="${w === sel.w}">${esc(n)}</button>`).join('')}</div>` : ''}
        <div class="g-ix-chips g-ix-kinds" role="tablist" aria-label="Section">${KINDS.map(([kd, n]) => `<button type="button" role="tab" data-ix-k="${kd}" class="${kd === sel.kind ? 'on' : ''}" aria-selected="${kd === sel.kind}">${esc(n)}</button>`).join('')}</div>
        <label class="g-ix-search"><span class="g-sr">Search the Index</span><input type="search" data-ix-q placeholder="Search…" value="${esc(sel.q)}" autocomplete="off" spellcheck="false"></label>
        <p class="g-ix-count" data-ix-count>${k.n} / ${k.total} found</p>
      </div>
      <div class="g-ix-main">
        <ul class="g-ix-list" role="listbox" aria-label="Entries" data-ix-list>${rowsHtml(L)}</ul>
        <div class="g-ix-detail" data-ix-detail aria-live="polite">${detailHtml(L.c, cur)}</div>
      </div></div>`;
  }
  function wirePage(el, rerender) {
    const root = el.querySelector('[data-ix-page]'); if (!root) return;
    const list = root.querySelector('[data-ix-list]'), det = root.querySelector('[data-ix-detail]'), q = root.querySelector('[data-ix-q]');
    const paintList = () => { const L = listFor(sel.w, sel.kind, sel.q); list.innerHTML = rowsHtml(L); wireRows(); return L; };
    const show = (id, focus) => {
      sel.id = id;
      const L = listFor(sel.w, sel.kind, sel.q), e = L.shown.find(x => x.id === id);
      list.querySelectorAll('[data-ix]').forEach(b => { const on = b.dataset.ix === id; b.classList.toggle('on', on); b.setAttribute('aria-selected', on); });
      det.innerHTML = detailHtml(L.c, e);
      const b = list.querySelector(`[data-ix="${CSS.escape(id)}"]`);
      if (focus && b) { b.focus({ preventScroll: true }); b.scrollIntoView({ block: 'nearest' }); }
      // Phones and tall screens stack the entry above the list (solstice-index.css): bring it into view on a tap.
      if (!focus && matchMedia('(max-width: 760px), (max-aspect-ratio: 13/10)').matches) det.scrollIntoView({ block: 'nearest', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    };
    function wireRows() {
      list.querySelectorAll('[data-ix]').forEach(b => {
        b.addEventListener('click', () => { G.sfx('femc-click'); show(b.dataset.ix, false); });
        b.addEventListener('focus', () => { if (sel.id !== b.dataset.ix) show(b.dataset.ix, false); });
      });
    }
    wireRows();
    list.addEventListener('keydown', e => {
      const rows = [...list.querySelectorAll('[data-ix]')], at = rows.indexOf(document.activeElement);
      if (!rows.length || at < 0) return;
      let to = -1;
      if (e.key === 'ArrowDown') to = Math.min(rows.length - 1, at + 1);
      else if (e.key === 'ArrowUp') { if (at === 0) { e.preventDefault(); e.stopPropagation(); q?.focus(); return; } to = at - 1; }
      else if (e.key === 'Home') to = 0; else if (e.key === 'End') to = rows.length - 1;
      if (to < 0) return;
      e.preventDefault(); e.stopPropagation();
      G.sfx('femc-hover'); show(rows[to].dataset.ix, true);
    });
    root.querySelectorAll('[data-ix-w]').forEach(b => b.addEventListener('click', () => { if (sel.w === b.dataset.ixW) return; sel.w = b.dataset.ixW; sel.id = null; G.sfx('femc-click'); rerender(`[data-ix-w="${sel.w}"]`); }));
    root.querySelectorAll('[data-ix-k]').forEach(b => b.addEventListener('click', () => { if (sel.kind === b.dataset.ixK) return; sel.kind = b.dataset.ixK; G.sfx('femc-click'); rerender(`[data-ix-k="${sel.kind}"]`); }));
    // ← → across a chip strip (world or section), like the menu's own tabs.
    root.querySelectorAll('.g-ix-chips').forEach(strip => strip.addEventListener('keydown', e => {
      if (!['ArrowLeft', 'ArrowRight', 'ArrowDown', 'ArrowUp'].includes(e.key)) return;
      e.preventDefault(); e.stopPropagation();
      const strips = [...root.querySelectorAll('.g-ix-chips')], si = strips.indexOf(strip);
      if (e.key === 'ArrowDown') { (strips[si + 1]?.querySelector('.on') || q)?.focus(); return; }
      if (e.key === 'ArrowUp') { (strips[si - 1]?.querySelector('.on') || root.closest('.g-fm-ov')?.querySelector('[data-tab].on'))?.focus(); return; }
      const bs = [...strip.querySelectorAll('button')], at = bs.indexOf(document.activeElement), to = bs[(at + (e.key === 'ArrowLeft' ? -1 : 1) + bs.length) % bs.length];
      to?.click(); if (!to?.isConnected) return; to.focus();
    }));
    if (q) {
      q.addEventListener('input', () => { sel.q = q.value; const L = paintList(); if (sel.id && !L.shown.some(e => e.id === sel.id)) { sel.id = null; det.innerHTML = detailHtml(L.c, null); } });
      // Typing stays in the box: the menu's [ ] and arrow keys don't switch tabs from here. ↓ steps into the list. Esc is the
      // menu's (it listens in the capture phase): back, as on every page.
      q.addEventListener('keydown', e => {
        if (e.key === 'ArrowDown') { e.preventDefault(); e.stopPropagation(); const f = list.querySelector('[data-ix].on') || list.querySelector('[data-ix]'); if (f) { show(f.dataset.ix, true); } return; }
        if (e.key === 'ArrowUp') { e.preventDefault(); e.stopPropagation(); root.querySelector('.g-ix-kinds .on')?.focus(); return; }
        if (e.key !== 'Escape' && e.key !== 'Tab') e.stopPropagation();
      });
    }
  }
  return { heard, went, pageHtml, wirePage, summary, counts, ctx, rule, worlds: () => worlds().map(w => w[0]), entries: ALL };
})();
