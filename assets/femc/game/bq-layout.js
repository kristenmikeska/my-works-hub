/* Boutique banner layouts and Kat's layout editor (Nov 7 2026, Kat: "something like what you did for the portraits … with
   the banner screens, where i can move everything around or resize it to my liking … including moving the art crop").

   Data: window.FEMC_BQ_LAYOUT (data/boutique-layout.js) = { <banner id>: { h, art: { x, y, z }, title | plate | strip | side |
   wallet: { l, t, s } } }. l / t: the piece's top-left corner in % of the splash's width / height; s: its size, as drawn on a
   splash `h` px tall (it grows and shrinks with the splash's height on other screens); art: background-position x% y% and
   height z% of the splash (100 = exactly the splash's height; the art is 3:2). A banner with no entry keeps the CSS layout.
   Edits made in the editor are kept in this browser (localStorage kg-femc-bq-layout) on top of the file, so Kat sees them at
   once; "Copy for Claude" copies them all for the file.

   Editor: open the game with ?bqedit=1 (femc-game.html?bqedit=1), then the Boutique. A bar on the splash names the banner.
   Click a piece (title, plate, strip, buttons, wallet) to select it, drag it to move it; the mouse wheel or − / + resizes it;
   arrow keys nudge (Shift: more). Drag the picture anywhere else to move the art; the wheel over the picture zooms it.
   Reset banner, Copy to every banner (the pieces, not the art), Copy for Claude. Pulls are off while editing. */
window.FemcBqLayout = (() => {
  const KEY = 'kg-femc-bq-layout';
  const PIECES = { title: '.g-bq-title', plate: '.g-bq-hero-tag', strip: '.g-bq-strip', side: '.g-bq-side', wallet: '.g-bq-wallet' };
  const NAMES = { title: 'Title', plate: 'Rate-up plate', strip: 'Outfit strip', side: 'Pull buttons', wallet: 'Plumes', art: 'Picture' };
  const ART_AR = 1.5;
  const editing = (() => { try { return /[?&]bqedit=1\b/.test(location.search); } catch (e) { return false; } })();
  const local = () => { try { return JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { return {}; } };
  const saveLocal = o => { try { localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) {} };
  const layoutOf = id => {
    const f = (window.FEMC_BQ_LAYOUT || {})[id], l = local()[id];
    if (!f && !l) return null;
    const o = JSON.parse(JSON.stringify(f || {}));
    if (l) { Object.keys(l).forEach(k => { o[k] = l[k]; }); }
    return o;
  };
  const r2 = n => Math.round(n * 100) / 100;

  function paintArt(sp, L) {
    const bg = sp.querySelector('.g-bq-sbg'); if (!bg) return;
    if (!L || !L.art || !sp.classList.contains('has-art')) { bg.style.background = ''; return; }
    const a = L.art;
    bg.style.background = `linear-gradient(90deg, rgba(0, 0, 0, .86) 0, rgba(0, 0, 0, .55) 30%, transparent 52%), var(--bq-art) ${a.x}% ${a.y}% / auto ${a.z}% no-repeat, #000`;
  }
  function paintPiece(sp, el, p, h) {
    if (!el) return;
    if (!p) { ['left', 'top', 'right', 'bottom', 'scale', 'transformOrigin', 'maxWidth'].forEach(k => { el.style[k] = ''; }); return; }
    el.style.left = `${p.l}%`; el.style.top = `${p.t}%`; el.style.right = 'auto'; el.style.bottom = 'auto';
    el.style.transformOrigin = '0 0'; el.style.scale = String(r2(p.s * (sp.clientHeight / (h || sp.clientHeight))) || 1);
  }
  // From cosmetics.js bannerMotion (after every render of the Boutique page).
  function apply(root) {
    const sp = root && root.querySelector('.g-bq-splash'); if (!sp) return;
    const id = root.dataset.ban, L = layoutOf(id);
    paintArt(sp, L);
    Object.entries(PIECES).forEach(([k, sel]) => paintPiece(sp, sp.querySelector(sel), L && L[k], L && L.h));
    if (editing) editor(root, sp, id);
  }

  /* ── The editor ── */
  let sel = null;
  function current(sp, id) { // the layout as it stands on screen (file + local, or the CSS defaults measured)
    const L = layoutOf(id) || {}, H = sp.clientHeight, W = sp.clientWidth;
    const out = { h: L.h || H };
    if (sp.classList.contains('has-art')) out.art = L.art || { x: 100, y: 0, z: r2(Math.max(100, (W / ART_AR) / H * 100)) };
    Object.entries(PIECES).forEach(([k, s]) => {
      const el = sp.querySelector(s); if (!el) return;
      if (L[k]) { out[k] = { ...L[k] }; return; }
      out[k] = { l: r2(el.offsetLeft / W * 100), t: r2(el.offsetTop / H * 100), s: 1 };
    });
    // Positions are kept for the height they were placed at: rescale sizes to this splash.
    if (out.h !== H) { Object.keys(PIECES).forEach(k => { if (out[k]) out[k].s = r2(out[k].s * H / out.h); }); out.h = H; }
    return out;
  }
  function store(id, L) { const all = local(); all[id] = L; saveLocal(all); }
  function editor(root, sp, id) {
    if (sp.querySelector('.g-bqe-bar')) return;
    sp.classList.add('g-bqe');
    const bar = document.createElement('div'); bar.className = 'g-bqe-bar';
    const name = (root.querySelector(`[data-wd-ban="${id}"] b`) || {}).textContent || id;
    bar.innerHTML = `<b>Layout · ${name}</b><span data-bqe-sel>Click a piece or drag the picture</span>
      <button type="button" data-bqe="minus">−</button><button type="button" data-bqe="plus">+</button>
      <button type="button" data-bqe="reset">Reset banner</button><button type="button" data-bqe="all">Copy to every banner</button>
      <button type="button" data-bqe="copy">Copy for Claude</button><em data-bqe-msg></em>`;
    sp.appendChild(bar);
    const msg = t => { const m = bar.querySelector('[data-bqe-msg]'); m.textContent = t; clearTimeout(msg.t); msg.t = setTimeout(() => { m.textContent = ''; }, 2600); };
    const pick = k => { sel = k; sp.querySelectorAll('.g-bqe-on').forEach(e => e.classList.remove('g-bqe-on')); if (k && PIECES[k]) sp.querySelector(PIECES[k])?.classList.add('g-bqe-on'); bar.querySelector('[data-bqe-sel]').textContent = k ? `${NAMES[k]} · drag · wheel or −/+ to resize · arrows nudge` : 'Click a piece or drag the picture'; };
    const redo = () => apply(root);
    const resize = (k, f) => { const L = current(sp, id); if (k === 'art') { if (!L.art) return; L.art.z = r2(Math.max(40, Math.min(400, L.art.z * f))); } else if (L[k]) L[k].s = r2(Math.max(0.3, Math.min(3, L[k].s * f))); store(id, L); redo(); };
    bar.addEventListener('click', e => {
      const b = e.target.closest('[data-bqe]'); if (!b) return; e.stopPropagation();
      const a = b.dataset.bqe;
      if (a === 'minus' || a === 'plus') { if (sel) resize(sel, a === 'plus' ? 1.05 : 1 / 1.05); }
      else if (a === 'reset') { const all = local(); delete all[id]; saveLocal(all); pick(null); redo(); msg('Back to the file / default'); }
      else if (a === 'all') { const L = current(sp, id), all = local(); (window.FemcCosmetics?.BANNERS || []).forEach(b2 => { const o = all[b2.id] || layoutOf(b2.id) || {}; Object.keys(PIECES).forEach(k => { if (L[k]) o[k] = { ...L[k] }; }); o.h = L.h; all[b2.id] = o; }); saveLocal(all); msg('Pieces copied to every banner (each keeps its own picture)'); }
      else if (a === 'copy') { const txt = JSON.stringify(local(), null, 1); (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(() => msg('Copied: paste it to Claude'), () => { window.prompt('Copy this for Claude:', txt); }); }
    });
    // No pulls, banner switches still work; clicks inside the splash select instead of acting.
    sp.addEventListener('click', e => { if (!e.target.closest('.g-bqe-bar')) { e.preventDefault(); e.stopPropagation(); } }, true);
    sp.addEventListener('pointerdown', e => {
      if (e.target.closest('.g-bqe-bar')) return;
      e.preventDefault(); e.stopPropagation();
      const k = Object.keys(PIECES).find(k2 => e.target.closest(PIECES[k2])) || 'art';
      pick(k);
      const L0 = current(sp, id), W = sp.clientWidth, H = sp.clientHeight, x0 = e.clientX, y0 = e.clientY;
      const z = parseFloat(document.documentElement.style.zoom) || 1;
      const move = ev => {
        const dx = (ev.clientX - x0) / z, dy = (ev.clientY - y0) / z, L = JSON.parse(JSON.stringify(L0));
        if (k === 'art') {
          if (!L.art) return;
          const ih = L.art.z / 100 * H, iw = ih * ART_AR, ox = W - iw, oy = H - ih;
          if (Math.abs(ox) > 2) L.art.x = r2(Math.max(-50, Math.min(150, L0.art.x + dx / ox * 100)));
          if (Math.abs(oy) > 2) L.art.y = r2(Math.max(-50, Math.min(150, L0.art.y + dy / oy * 100)));
        } else { L[k].l = r2(L0[k].l + dx / W * 100); L[k].t = r2(L0[k].t + dy / H * 100); }
        store(id, L); redo();
      };
      const up = () => { removeEventListener('pointermove', move); removeEventListener('pointerup', up); };
      addEventListener('pointermove', move); addEventListener('pointerup', up);
    }, true);
    sp.addEventListener('wheel', e => { e.preventDefault(); const k = Object.keys(PIECES).find(k2 => e.target.closest(PIECES[k2])) || 'art'; pick(k); resize(k, e.deltaY < 0 ? 1.04 : 1 / 1.04); }, { passive: false });
    if (!window.__bqeKeys) {
      window.__bqeKeys = true;
      addEventListener('keydown', e => {
        const sp2 = document.querySelector('.g-bq-splash.g-bqe'); if (!sp2 || !sel) return;
        const root2 = sp2.closest('.g-bq-ban'), id2 = root2.dataset.ban, st = e.shiftKey ? 1 : 0.2;
        const d = { ArrowLeft: [-st, 0], ArrowRight: [st, 0], ArrowUp: [0, -st], ArrowDown: [0, st] }[e.key];
        if (d && sel !== 'art') { e.preventDefault(); e.stopPropagation(); const L = current(sp2, id2); L[sel].l = r2(L[sel].l + d[0]); L[sel].t = r2(L[sel].t + d[1]); store(id2, L); apply(root2); }
        if (e.key === '+' || e.key === '=' || e.key === '-') { e.preventDefault(); e.stopPropagation(); const L = current(sp2, id2), f = e.key === '-' ? 1 / 1.05 : 1.05; if (sel === 'art') { if (L.art) L.art.z = r2(L.art.z * f); } else L[sel].s = r2(L[sel].s * f); store(id2, L); apply(root2); }
      }, true);
    }
    if (sel) pick(sel);
  }
  return { apply, editing, layoutOf, KEY };
})();
