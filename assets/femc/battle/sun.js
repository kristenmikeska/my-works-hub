/* FEMC: Haenim's sun, drawn (2026-10-25). One renderer for the field menu's Skills tab (menu.js) and practice mode's tree screen
   (battle.js treeScreen). Data: data.js tree / treeCenter (each node's `at`), rules: engine.js (treeState etc.); this file only
   draws and moves. Loaded after engine.js in femc-game.html and femc-battle.html; injects its own CSS once.
     FemcSun.html({ state(id), sel, base, label(n, st), glyph(n, st) }) → the viewport's markup: an SVG of rays, rings and edges, and
       one <button class="<base> <state> …" data-hn="<id>"> per node (the state is always the second class).
     FemcSun.mount(viewport, sel) → pan (drag), zoom (wheel, pinch, the + − buttons), Fit, and keeps the selected node in view.
       The view (zoom and center) is remembered across re-renders, like a map.
     FemcSun.move(id, key) → the nearest node in an arrow key's direction (keyboard and pad).
     FemcSun.pos(id) → { x, y } in stage pixels from the center. */
window.FemcSun = (() => {
  const D = () => window.FEMC_BATTLE_DATA;
  const U = 50, LANE = 44, HALF = 560, SIZE = HALF * 2;
  const R = ring => 1.5 + 0.9 * ring; // a ray's ring → radius in units
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const rad = a => a * Math.PI / 180;
  let cache = null;
  function layout() {
    if (cache && cache.data === D()) return cache;
    const pos = {}, nodes = [], groups = {};
    D().tree.forEach(g => {
      groups[g.id] = g;
      g.nodes.forEach(n => {
        let x, y;
        if (Array.isArray(n.at) && g.ray) {
          const a = rad(g.angle), r = R(n.at[0]) * U, l = (n.at[1] || 0) * LANE;
          x = Math.cos(a) * r - Math.sin(a) * l; y = Math.sin(a) * r + Math.cos(a) * l;
        } else { const at = n.at || { a: 0, r: 0 }; x = Math.cos(rad(at.a)) * at.r * U; y = Math.sin(rad(at.a)) * at.r * U; }
        pos[n.id] = { x, y }; nodes.push({ n, g });
      });
    });
    const c = D().treeCenter;
    if (c) { const at = c.at || { a: 270, r: 9.9 }; pos[c.id] = { x: Math.cos(rad(at.a)) * at.r * U, y: Math.sin(rad(at.a)) * at.r * U }; nodes.push({ n: c, g: { id: 'center', name: 'Unveiled', world: 'The crown', color: '#fff2b0' }, crown: true }); }
    cache = { data: D(), pos, nodes, groups };
    return cache;
  }
  const pos = id => layout().pos[id] || { x: 0, y: 0 };
  const groupOf = id => (layout().nodes.find(x => x.n.id === id) || {}).g || null;

  /* Simple glyphs drawn here, so the sun reads without any art: a skill's element and kind, a passive's gem, a stat's plus. */
  const KIND = { dmg: 'M12 3l2.6 6.4L21 12l-6.4 2.6L12 21l-2.6-6.4L3 12l6.4-2.6z', heal: 'M9.5 4h5v5.5H20v5h-5.5V20h-5v-5.5H4v-5h5.5z', revive: 'M9.5 4h5v5.5H20v5h-5.5V20h-5v-5.5H4v-5h5.5z',
    buff: 'M12 4l8 9h-5v7H9v-7H4z', debuff: 'M12 20l-8-9h5V4h6v7h5z', ailment: 'M12 4a8 8 0 1 0 8 8h-3a5 5 0 1 1-5-5z', insta: 'M12 3l3 6 6 1-4.5 4 1 6.5L12 17l-5.5 3.5 1-6.5L3 10l6-1z',
    charge: 'M13 2L5 14h6l-1 8 8-12h-6z', taunt: 'M12 3l8 3v6c0 5-3.4 8.2-8 9.6C7.4 20.2 4 17 4 12V6z', ward: 'M12 3l8 3v6c0 5-3.4 8.2-8 9.6C7.4 20.2 4 17 4 12V6z',
    cure: 'M9.5 4h5v5.5H20v5h-5.5V20h-5v-5.5H4v-5h5.5z', dispel: 'M5 5l14 14M19 5L5 19', kitsune: 'M4 4l5 5h6l5-5-1 9c0 4-3 7-7 8-4-1-7-4-7-8z', bluff: 'M6 4h9l3 3v13H6z' };
  const svg = (d, fill, extra = '') => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${d}" fill="${fill}" stroke="#0a1230" stroke-width="1.6" stroke-linejoin="round" ${extra}/></svg>`;
  function glyph(n, st) {
    if (st === 'hidden') return '<svg viewBox="0 0 24 24" aria-hidden="true"><text x="12" y="17.5" text-anchor="middle" font-size="16" font-weight="800" fill="#9fb4e8">?</text></svg>';
    const e = n.fx || {};
    if (n.id === 'sun1') return '<svg viewBox="0 0 24 24" aria-hidden="true"><g stroke="#8a3a10" stroke-width="2.2" stroke-linecap="round"><path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M4.6 19.4l2.1-2.1M17.3 6.7l2.1-2.1"/></g><circle cx="12" cy="12" r="5.6" fill="#fff6c8" stroke="#8a3a10" stroke-width="1.6"/></svg>';
    if (n.keystone) return svg('M12 1.8l2.4 5.6 6-1.5-2.9 5.4 4.7 3.8-6 1.1.3 6.1L12 18.4l-4.5 3.9.3-6.1-6-1.1 4.7-3.8-2.9-5.4 6 1.5z', n.form ? '#ffd36b' : '#fff', 'stroke-width="1.2"');
    if (e.learn) {
      const sk = D().skills[e.learn] || {}, el = (D().elements[sk.el] || {}).color || '#ff8cc0';
      return svg(KIND[sk.type] || KIND.dmg, el);
    }
    const stat = ['st', 'ma', 'en', 'ag', 'lu', 'hp', 'sp'].some(k => e[k]) && Object.keys(e).every(k => ['st', 'ma', 'en', 'ag', 'lu', 'hp', 'sp'].includes(k));
    if (stat) return svg('M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6z', '#ffe9a8');
    return svg('M12 2.5l8.2 4.75v9.5L12 21.5l-8.2-4.75v-9.5z', 'var(--c)', 'stroke-width="1.4"');
  }

  /* The sun's markup. o: { state(id) → own|avail|lock|lvl|story|hidden|taken, sel, base ('g-hn'), label(n, st), glyph(n, st) } */
  function html(o) {
    const L = layout(), st = id => o.state(id), base = o.base || 'g-hn';
    const own = id => st(id) === 'own';
    const P = id => L.pos[id];
    // Edges: every needs / any link. Inside the corona ring they follow the ring as arcs.
    const edges = [];
    L.nodes.forEach(({ n }) => (n.needs || []).map(x => [x, 'need']).concat((n.any || []).map(x => [x, 'any'])).forEach(([from, kind]) => {
      if (!L.pos[from]) return;
      const a = P(from), b = P(n.id), cls = own(from) && own(n.id) ? 'lit' : own(from) && st(n.id) === 'avail' ? 'next' : '';
      const ra = Math.hypot(a.x, a.y), rb = Math.hypot(b.x, b.y);
      const ring = Math.abs(ra - rb) < 2 && ra > 20 && ra < 100;
      const d = ring ? `M${a.x.toFixed(1)} ${a.y.toFixed(1)}A${ra.toFixed(1)} ${ra.toFixed(1)} 0 0 ${(Math.atan2(a.x * b.y - a.y * b.x, a.x * b.x + a.y * b.y) > 0 ? 1 : 0)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`
        : `M${a.x.toFixed(1)} ${a.y.toFixed(1)}L${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
      edges.push(`<path class="sun-e ${cls}${kind === 'any' ? ' any' : ''}" d="${d}"/>`);
    }));
    const rays = D().tree.filter(g => g.ray);
    const beams = rays.map(g => {
      const a = rad(g.angle), r0 = 95, r1 = R(8.4) * U, w0 = 10, w1 = 30;
      const pt = (r, w) => `${(Math.cos(a) * r - Math.sin(a) * w).toFixed(1)},${(Math.sin(a) * r + Math.cos(a) * w).toFixed(1)}`;
      const lr = R(9.35) * U, lx = Math.cos(a) * lr, ly = Math.sin(a) * lr;
      return `<polygon class="sun-beam" points="${pt(r0, -w0)} ${pt(r1, -w1)} ${pt(r1, w1)} ${pt(r0, w0)}" style="--c:${g.color}"/>
        <g class="sun-raylbl" transform="translate(${lx.toFixed(1)} ${ly.toFixed(1)})" style="--c:${g.color}"><text class="r" y="-2">${esc(g.name.toUpperCase())}</text><text class="w" y="13">${esc(g.world)}${g.who ? ' · ' + esc(g.who) : ''}</text></g>`;
    }).join('');
    const btns = L.nodes.map(({ n, g, crown }) => {
      const s = st(n.id), p = P(n.id), hid = s === 'hidden';
      const cls = [base, s, 'sun-n', n.keystone ? 'key' : '', n.memory ? 'mem' : '', n.choice ? 'choice' : '', crown ? 'crown center' : '', g.core ? 'core' : '', g.hybrid ? 'hyb' : '', n.id === 'sun1' ? 'heart' : '', n.id === o.sel ? 'sel' : ''].filter(Boolean).join(' ');
      const color = g.hybrid ? '#ffe9a8' : g.color;
      const name = hid ? '? ? ?' : (o.label ? o.label(n, s) : n.name);
      return `<button type="button" class="${cls}" data-hn="${n.id}" style="left:${(HALF + p.x).toFixed(1)}px;top:${(HALF + p.y).toFixed(1)}px;--c:${color}" aria-pressed="${s === 'own'}" aria-label="${esc(hid ? 'Hidden memory node' : n.name)}: ${s}">
        <i class="gem" aria-hidden="true">${(o.glyph || glyph)(n, s)}</i><b>${esc(name)}</b><small>${s === 'own' ? '✓' : n.cost}</small></button>`;
    }).join('');
    return `<div class="sun-stage" style="width:${SIZE}px;height:${SIZE}px">
      <svg class="sun-svg" viewBox="${-HALF} ${-HALF} ${SIZE} ${SIZE}" width="${SIZE}" height="${SIZE}" aria-hidden="true">
        <defs><radialGradient id="sunCore"><stop offset="0" stop-color="#fff6c8"/><stop offset=".35" stop-color="#ffd36b" stop-opacity=".9"/><stop offset=".7" stop-color="#ff8c4a" stop-opacity=".25"/><stop offset="1" stop-color="#ff4f9e" stop-opacity="0"/></radialGradient>
          <radialGradient id="sunSky"><stop offset="0" stop-color="#1b2c6b" stop-opacity=".95"/><stop offset=".6" stop-color="#0d1640" stop-opacity=".85"/><stop offset="1" stop-color="#070b22" stop-opacity="0"/></radialGradient></defs>
        <circle r="${HALF - 4}" fill="url(#sunSky)"/>
        <circle class="sun-orbit" r="${(R(8) * U).toFixed(1)}"/><circle class="sun-orbit thin" r="${(R(4.5) * U).toFixed(1)}"/><circle class="sun-orbit thin" r="${(9.9 * U).toFixed(1)}"/>
        ${beams}
        <circle r="150" fill="url(#sunCore)" class="sun-glow"/><circle class="sun-corona" r="${(1.3 * U).toFixed(1)}"/>
        ${edges.join('')}
      </svg>${btns}</div>
      <div class="sun-tools" role="group" aria-label="Zoom"><button type="button" data-sun-zoom="in" aria-label="Zoom in">+</button><button type="button" data-sun-zoom="out" aria-label="Zoom out">−</button><button type="button" data-sun-zoom="fit" aria-label="See the whole sun">◎</button></div>`;
  }

  /* Arrow keys: the nearest node in that direction (sideways distance counts double). */
  function move(id, key) {
    const L = layout(), cur = L.pos[id] || { x: 0, y: 0 };
    const d = { ArrowUp: [0, -1], ArrowDown: [0, 1], ArrowLeft: [-1, 0], ArrowRight: [1, 0] }[key];
    if (!d) return id;
    let best = null;
    L.nodes.forEach(({ n }) => {
      if (n.id === id) return;
      const p = L.pos[n.id], dx = p.x - cur.x, dy = p.y - cur.y, along = dx * d[0] + dy * d[1];
      if (along <= 4) return;
      const s = along + 2.2 * Math.abs(d[0] ? dy : dx);
      if (!best || s < best.s) best = { id: n.id, s };
    });
    return best ? best.id : id;
  }

  /* Pan and zoom. The view survives a re-render (menu.js redraws the tab on every action). */
  let view = null;
  function mount(vp, sel) {
    const stage = vp.querySelector('.sun-stage');
    if (!stage) return null;
    const box = () => { const r = vp.getBoundingClientRect(); return { w: r.width || 1, h: r.height || 1 }; };
    const fitK = () => { const b = box(); return Math.min(b.w, b.h) / (SIZE - 40); };
    const clamp = k => Math.max(fitK() * 0.9, Math.min(2.4, k));
    const apply = () => { const b = box(); stage.style.transform = `translate(${(b.w / 2 - (HALF + view.x) * view.k).toFixed(1)}px,${(b.h / 2 - (HALF + view.y) * view.k).toFixed(1)}px) scale(${view.k.toFixed(4)})`; vp.dataset.zoom = view.k.toFixed(2); };
    const center = id => { const p = pos(id); view.x = p.x; view.y = p.y; apply(); };
    const inView = id => { const b = box(), p = pos(id), sx = b.w / 2 + (p.x - view.x) * view.k, sy = b.h / 2 + (p.y - view.y) * view.k, m = 34; return sx > m && sx < b.w - m && sy > m && sy < b.h - m; };
    if (!view || view.size !== `${Math.round(box().w)}x${Math.round(box().h)}`) {
      const b = box(), f = fitK(), k = Math.max(f, b.w < 600 ? 0.74 : 0.56);
      view = { k, x: 0, y: 0, size: `${Math.round(b.w)}x${Math.round(b.h)}` };
      if (k > f * 1.05 && sel) { const p = pos(sel); view.x = p.x * 0.85; view.y = p.y * 0.85; }
    }
    view.k = clamp(view.k);
    apply();
    if (sel && !inView(sel)) center(sel);
    const zoomAt = (f, cx, cy) => {
      const b = box(), k0 = view.k, k1 = clamp(k0 * f);
      if (cx != null) { const wx = view.x + (cx - b.w / 2) / k0, wy = view.y + (cy - b.h / 2) / k0; view.x = wx - (cx - b.w / 2) / k1; view.y = wy - (cy - b.h / 2) / k1; }
      view.k = k1; apply();
    };
    vp.querySelectorAll('[data-sun-zoom]').forEach(b => b.addEventListener('click', e => {
      e.stopPropagation();
      const z = b.dataset.sunZoom;
      if (z === 'fit') { view.k = fitK(); view.x = 0; view.y = 0; apply(); } else zoomAt(z === 'in' ? 1.3 : 1 / 1.3);
    }));
    vp.addEventListener('wheel', e => { e.preventDefault(); const r = vp.getBoundingClientRect(); zoomAt(Math.exp(-e.deltaY * 0.0015), e.clientX - r.left, e.clientY - r.top); }, { passive: false });
    // Drag to pan, two fingers to pinch. A drag never counts as a tap on a node.
    const pts = new Map();
    let moved = 0, pinch = null;
    vp.addEventListener('pointerdown', e => {
      if (e.target.closest('.sun-tools')) return;
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY }); moved = 0;
      if (pts.size === 2) { const [a, b] = [...pts.values()]; pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), k: view.k }; }
    });
    vp.addEventListener('pointermove', e => {
      const p = pts.get(e.pointerId); if (!p) return;
      const dx = e.clientX - p.x, dy = e.clientY - p.y;
      p.x = e.clientX; p.y = e.clientY;
      if (pts.size === 2 && pinch) { const [a, b] = [...pts.values()]; view.k = clamp(pinch.k * Math.hypot(a.x - b.x, a.y - b.y) / Math.max(1, pinch.d)); moved += 10; apply(); return; }
      moved += Math.abs(dx) + Math.abs(dy);
      if (moved > 6) { view.x -= dx / view.k; view.y -= dy / view.k; apply(); vp.classList.add('dragging'); }
    });
    const up = e => { pts.delete(e.pointerId); if (pts.size < 2) pinch = null; if (!pts.size) setTimeout(() => { vp.classList.remove('dragging'); moved = 0; }, 0); };
    vp.addEventListener('pointerup', up); vp.addEventListener('pointercancel', up); vp.addEventListener('pointerleave', up);
    vp.addEventListener('click', e => { if (moved > 6 && e.isTrusted) { e.stopPropagation(); e.preventDefault(); moved = 0; } }, true);
    // Focus (keys, pad) keeps the node in view; the viewport never scrolls itself.
    vp.addEventListener('focusin', e => { const b = e.target.closest('[data-hn]'); if (b && !inView(b.dataset.hn)) center(b.dataset.hn); });
    vp.addEventListener('scroll', () => { vp.scrollLeft = 0; vp.scrollTop = 0; });
    return { center, fit: () => { view.k = fitK(); view.x = 0; view.y = 0; apply(); }, zoom: f => zoomAt(f), view: () => Object.assign({}, view) };
  }

  const CSS = `
  .sun-vp { position: relative; overflow: hidden; touch-action: none; user-select: none; -webkit-user-select: none; border-radius: 14px; min-height: 300px;
    background: radial-gradient(ellipse at 50% 45%, #13205a 0%, #0a1233 55%, #060920 100%); box-shadow: inset 0 0 0 1px rgba(111, 200, 255, .22), inset 0 0 60px rgba(0, 0, 0, .55); cursor: grab; }
  .sun-vp.dragging { cursor: grabbing; }
  .sun-vp::before { content: ""; position: absolute; inset: 0; pointer-events: none; z-index: 2; background: repeating-linear-gradient(-58deg, rgba(255, 140, 192, .05) 0 1px, transparent 1px 30px); mask-image: linear-gradient(110deg, transparent 40%, #000 95%); -webkit-mask-image: linear-gradient(110deg, transparent 40%, #000 95%); }
  .sun-stage { position: absolute; left: 0; top: 0; transform-origin: 0 0; will-change: transform; }
  .sun-svg { position: absolute; inset: 0; overflow: visible; }
  .sun-orbit { fill: none; stroke: rgba(111, 200, 255, .28); stroke-width: 1.4; stroke-dasharray: 2 7; }
  .sun-orbit.thin { stroke: rgba(111, 200, 255, .14); stroke-dasharray: 1 9; }
  .sun-beam { fill: var(--c); opacity: .09; }
  .sun-corona { fill: none; stroke: #ffd36b; stroke-width: 2.4; opacity: .55; filter: drop-shadow(0 0 6px #ffb35c); }
  .sun-glow { opacity: .8; }
  .sun-e { fill: none; stroke: rgba(150, 175, 235, .2); stroke-width: 2.4; stroke-linecap: round; }
  .sun-e.any { stroke-dasharray: 5 5; }
  .sun-e.next { stroke: #ff8cc0; opacity: .85; stroke-width: 2.8; }
  .sun-e.lit { stroke: #ffd36b; stroke-width: 3.4; filter: drop-shadow(0 0 4px rgba(255, 211, 107, .9)); }
  .sun-raylbl text { text-anchor: middle; paint-order: stroke; stroke: #060920; stroke-width: 4px; }
  .sun-raylbl .r { fill: var(--c); font: italic 900 21px/1 "Avenir Next Condensed", "Arial Narrow", sans-serif; letter-spacing: .06em; transform: skewX(-8deg); }
  .sun-raylbl .w { fill: #c9d6ff; font: 600 11px/1 "Avenir Next", sans-serif; letter-spacing: .08em; text-transform: uppercase; }
  .sun-n { position: absolute; width: 36px; height: 36px; margin: -18px 0 0 -18px; padding: 0; border: 0; border-radius: 50%; background: none; color: #fff; display: grid; place-items: center; z-index: 1; }
  .sun-n .gem { width: 100%; height: 100%; border-radius: 50%; display: grid; place-items: center; background: radial-gradient(circle at 35% 30%, #2a3a78, #0d1640 70%); box-shadow: 0 0 0 2px rgba(150, 175, 235, .45), 0 3px 8px rgba(0, 0, 0, .55); transition: transform .15s, box-shadow .15s; }
  .sun-n .gem svg { width: 60%; height: 60%; opacity: .5; filter: grayscale(.6); }
  .sun-n b { position: absolute; top: calc(100% + 5px); left: 50%; transform: translateX(-50%) skewX(-6deg); white-space: nowrap; font: 800 12px/1.1 "Avenir Next Condensed", "Arial Narrow", sans-serif; letter-spacing: .03em; padding: 3px 7px; border-radius: 4px; background: rgba(6, 9, 32, .88); color: #fff; box-shadow: 0 0 0 1px var(--c); pointer-events: none; display: none; }
  .sun-n small { position: absolute; right: -5px; bottom: -4px; min-width: 15px; height: 15px; border-radius: 8px; font: 800 10px/15px "Avenir Next", sans-serif; text-align: center; background: #0a1233; color: #c9d6ff; box-shadow: 0 0 0 1.5px rgba(150, 175, 235, .6); }
  .sun-n.avail .gem { background: radial-gradient(circle at 35% 30%, #3b4fa0, #141f5c 70%); box-shadow: 0 0 0 2.5px #ff8cc0, 0 0 14px rgba(255, 79, 158, .55); }
  .sun-n.avail .gem svg { opacity: 1; filter: none; }
  .sun-n.avail small { background: #ff4f9e; color: #fff; box-shadow: none; }
  .sun-n.own .gem { background: radial-gradient(circle at 35% 30%, #fff6c8, var(--c) 55%, #8a5a10 120%); box-shadow: 0 0 0 2.5px #ffd36b, 0 0 16px var(--c); }
  .sun-n.own .gem svg { opacity: 1; filter: none; }
  .sun-n.own small { background: #ffd36b; color: #3a2400; box-shadow: none; }
  .sun-n.taken .gem { opacity: .35; } .sun-n.taken small { display: none; }
  .sun-n.hidden .gem { background: #0a0f2e; box-shadow: 0 0 0 2px rgba(150, 175, 235, .3), inset 0 0 0 2px rgba(150, 175, 235, .12); }
  .sun-n.hidden .gem svg { opacity: 1; filter: none; }
  .sun-n.mem .gem { border-radius: 7px; transform: rotate(45deg); } .sun-n.mem .gem svg { transform: rotate(-45deg); }
  .sun-n.hyb .gem { border-radius: 8px; }
  .sun-n.key { width: 52px; height: 52px; margin: -26px 0 0 -26px; }
  .sun-n.key .gem { clip-path: polygon(50% 0, 64% 30%, 98% 35%, 72% 58%, 80% 94%, 50% 76%, 20% 94%, 28% 58%, 2% 35%, 36% 30%); border-radius: 0; }
  .sun-n.key b, .sun-n.sel b { display: block; }
  .sun-n.key b { background: rgba(6, 9, 32, .7); font-size: 13px; }
  .sun-n.heart { width: 62px; height: 62px; margin: -31px 0 0 -31px; }
  .sun-n.heart .gem { background: radial-gradient(circle at 40% 35%, #fffbe6, #ffd36b 45%, #ff8c4a 80%); box-shadow: 0 0 0 3px #fff2b0, 0 0 30px #ffb35c; }
  .sun-n.heart .gem svg { opacity: 1; filter: none; }
  .sun-n.crown { width: 58px; height: 58px; margin: -29px 0 0 -29px; }
  .sun-n.crown b { display: block; }
  .sun-n:hover .gem, .sun-n:focus-visible .gem { transform: scale(1.12); }
  .sun-n.mem:hover .gem, .sun-n.mem:focus-visible .gem { transform: rotate(45deg) scale(1.12); }
  .sun-n.sel { z-index: 3; }
  .sun-n.sel .gem { box-shadow: 0 0 0 3px #fff, 0 0 0 6px var(--c), 0 0 24px var(--c); transform: scale(1.15); }
  .sun-n.mem.sel .gem { transform: rotate(45deg) scale(1.15); }
  .sun-n.sel b { background: #ff4f9e; box-shadow: 0 0 0 2px #fff; font-size: 13px; }
  .sun-n:focus { outline: none; }
  .sun-tools { position: absolute; right: 8px; bottom: 8px; z-index: 4; display: flex; gap: 6px; }
  .sun-tools button { width: 36px; height: 36px; border-radius: 50%; border: 0; background: rgba(10, 18, 51, .92); color: #fff; font: 800 18px/1 "Avenir Next", sans-serif; box-shadow: 0 0 0 1.5px rgba(111, 200, 255, .6); cursor: pointer; }
  .sun-tools button:hover, .sun-tools button:focus-visible { background: #ff4f9e; box-shadow: 0 0 0 2px #fff; outline: none; }
  @media (prefers-reduced-motion: reduce) { .sun-n .gem { transition: none; } }`;
  if (!document.getElementById('femc-sun-css')) { const s = document.createElement('style'); s.id = 'femc-sun-css'; s.textContent = CSS; document.head.appendChild(s); }

  return { html, mount, move, pos, layout, glyph, groupOf, HALF };
})();
