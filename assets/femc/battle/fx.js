/* FEMC battle effects: one canvas over the field for spells, hits, heals, buffs, ailments and Shadow ash,
   plus the Evoker glass shatter. Hand-written canvas 2D, no libraries.
   - prefers-reduced-motion: spells become a single soft flash, no ash, no shatter.
   - Particles are capped (lower on phones), DPR is capped, and requestAnimationFrame only runs while something is on screen.
   - Time is scaled by the battle speed, so 2x battles get 2x effects.
   - Adaptive quality: while effects run, the real frame time is measured; if it averages over ~20ms the canvas DPR and the
     particle budget step down (and back up when frames are fast again). setQuality('low') pins it low (Performance mode).
   - One requestAnimationFrame loop drives everything, including the glass shatter (via loop hooks).
   battle.js: FemcFX.attach(root, { speed }) after building a battle, then FemcFX.play(kind, at, opts),
   FemcFX.ash(rect, img), FemcFX.snapshot(root, extras) + FemcFX.shatter(layer, snap, point). */
window.FemcFX = (() => {
  const RM = matchMedia('(prefers-reduced-motion: reduce)');
  const phone = () => matchMedia('(max-width: 760px), (max-width: 1100px) and (max-aspect-ratio: 4/5)').matches; // phones, and tablets held upright
  const TAU = Math.PI * 2;
  const rnd = (a, b) => a + Math.random() * (b - a);
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const c01 = t => (t < 0 ? 0 : t > 1 ? 1 : t);
  const E = {
    out: t => 1 - (1 - t) ** 3,
    in: t => t * t * t,
    inOut: t => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2),
    back: t => { const c = 1.9; return 1 + (c + 1) * (t - 1) ** 3 + c * (t - 1) ** 2; }
  };
  const gauss = () => (Math.random() + Math.random() + Math.random() - 1.5) / 1.5;
  const rgba = (hex, a) => { const n = parseInt(hex.slice(1), 16); return `rgba(${n >> 16},${(n >> 8) & 255},${n & 255},${a})`; };
  const mk = (w, h) => { const c = document.createElement('canvas'); c.width = Math.max(1, Math.round(w)); c.height = Math.max(1, Math.round(h)); return c; };

  let host = null, cv = null, ctx = null, W = 0, H = 0, DPR = 1;
  let effects = [], parts = [], raf = 0, last = 0, paused = false, speedFn = () => 1;
  let ticking = false; // inside tick(): emit()/add() must not start a second loop
  const hooks = new Set(); // extra per-frame work (the glass shatter) sharing this loop: fn(now, dt) → keep going?
  /* Quality: level 0 = full, 1 = reduced (DPR ≤ 1.25, 60% particles), 2 = low (DPR 1, 35% particles). */
  const LEVELS = [{ dpr: 2, n: 1 }, { dpr: 1.25, n: 0.6 }, { dpr: 1, n: 0.35 }];
  let level = 0, pinned = null, ftAvg = 16, fastFrames = 0;
  const Q = () => LEVELS[pinned != null ? pinned : level];
  const cap = () => Math.round((phone() ? 240 : 600) * Q().n);
  /* Next frame: requestAnimationFrame, or a timer if rAF is late (throttled iframes, headless test runs). */
  function frameAfter(fn) {
    let done = false;
    const go = () => { if (done) return; done = true; cancelAnimationFrame(r); clearTimeout(tm); fn(performance.now()); };
    const r = requestAnimationFrame(go), tm = setTimeout(go, 40);
    return () => { done = true; cancelAnimationFrame(r); clearTimeout(tm); };
  }
  const reduced = () => RM.matches;
  /* Images (the Evoker snapshot's art and the skill-effect sheets), loaded once. */
  const imgCache = new Map();
  function preload(src) { if (!src || imgCache.has(src)) return; const im = new Image(); im.decoding = 'async'; im.src = src; imgCache.set(src, im); }
  const ready = im => im && im.complete && im.naturalWidth > 0;
  let calm = false; // Settings → Reduce flashes: full-screen flashes drop to a fifth
  const flashK = () => (calm ? 0.2 : 1);

  /* Soft round sprites, one per color, drawn once. */
  const sprites = new Map();
  function glow(color) {
    let s = sprites.get(color);
    if (s) return s;
    s = mk(64, 64);
    const g = s.getContext('2d'), gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, 'rgba(255,255,255,1)');
    gr.addColorStop(0.22, rgba(color, 0.95));
    gr.addColorStop(0.55, rgba(color, 0.35));
    gr.addColorStop(1, rgba(color, 0));
    g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
    sprites.set(color, s);
    return s;
  }
  function soft(color) { // no white core: mist, smoke, bloom
    const key = 'soft' + color;
    let s = sprites.get(key);
    if (s) return s;
    s = mk(64, 64);
    const g = s.getContext('2d'), gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, rgba(color, 1)); gr.addColorStop(0.5, rgba(color, 0.45)); gr.addColorStop(1, rgba(color, 0));
    g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
    sprites.set(key, s);
    return s;
  }

  /* ── Canvas lifecycle ───────────────────────────── */
  function attach(el, { speed } = {}) {
    detach();
    host = el;
    if (speed) speedFn = speed;
    cv = document.createElement('canvas');
    cv.className = 'bt-fxc';
    cv.setAttribute('aria-hidden', 'true');
    el.appendChild(cv);
    ctx = cv.getContext('2d');
    resize();
    preloadArt();
  }
  function detach() { if (raf) raf(); raf = 0; effects = []; parts = []; if (cv) cv.remove(); cv = ctx = host = null; if (hooks.size) kick(); }
  function resize() {
    if (!cv || !host) return;
    const r = host.getBoundingClientRect();
    DPR = Math.min(window.devicePixelRatio || 1, phone() ? 1.5 : 2, Q().dpr);
    W = r.width; H = r.height;
    cv.width = Math.round(W * DPR); cv.height = Math.round(H * DPR);
  }
  addEventListener('resize', resize);

  function add(e) { e.age = 0; e.delay = e.delay || 0; effects.push(e); kick(); return e; }
  function emit(p) {
    if (parts.length >= cap()) return null;
    p.age = 0; p.delay = p.delay || 0;
    p.size1 = p.size1 == null ? p.size : p.size1;
    p.alpha = p.alpha == null ? 1 : p.alpha;
    parts.push(p);
    kick();
    return p;
  }
  function kick() { if (!raf && !ticking && !paused && (ctx || hooks.size)) { last = performance.now(); raf = frameAfter(tick); } }
  /* Adaptive quality from the real frame time (only while something is animating). */
  function measure(ms) {
    if (pinned != null || ms <= 0 || ms > 250) return;
    ftAvg = ftAvg * 0.9 + ms * 0.1;
    if (ftAvg > 20 && level < LEVELS.length - 1) { level++; ftAvg = 16; fastFrames = 0; resize(); }
    else if (ftAvg < 13 && level > 0) { if (++fastFrames > 150) { level--; fastFrames = 0; resize(); } }
    else fastFrames = 0;
  }
  function tick(now) {
    raf = 0;
    if (paused) return;
    measure(now - last);
    const dt = Math.min(0.05, Math.max(0, now - last) / 1000) * speedFn();
    last = now;
    ticking = true;
    hooks.forEach(h => { if (!h(now, dt)) hooks.delete(h); });
    ticking = false;
    if (!ctx) { if (hooks.size) raf = frameAfter(tick); return; }
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    ctx.clearRect(0, 0, W, H);
    ticking = true;
    const cur = effects;
    effects = []; // effects added while drawing (e.g. ice's burst ring) land here and are kept
    const kept = cur.filter(e => {
      e.age += dt;
      const t = e.age - e.delay;
      if (t < 0) return true;
      ctx.save();
      e.draw(ctx, t, dt, e);
      ctx.restore();
      return t < e.dur;
    });
    effects = kept.concat(effects);
    parts = parts.filter(p => stepPart(p, dt));
    ticking = false;
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    if (effects.length || parts.length || hooks.size) raf = frameAfter(tick);
    else ctx.clearRect(0, 0, W, H);
  }

  /* ── Particles ──────────────────────────────────── */
  function stepPart(p, dt) {
    p.age += dt;
    const t = p.age - p.delay;
    if (t < 0) return true;
    if (t >= p.life) return false;
    if (p.drag) { const k = Math.exp(-p.drag * dt); p.vx *= k; p.vy *= k; }
    p.vx += (p.ax || 0) * dt; p.vy += (p.ay || 0) * dt;
    p.x += p.vx * dt; p.y += p.vy * dt;
    if (p.vr) p.rot = (p.rot || 0) + p.vr * dt;
    const u = t / p.life;
    const fadeIn = p.fadeIn ? c01(t / p.fadeIn) : 1;
    const a = p.alpha * fadeIn * (p.hold ? (u < p.hold ? 1 : 1 - (u - p.hold) / (1 - p.hold)) : 1 - u);
    if (a <= 0.01) return true;
    const s = p.size + (p.size1 - p.size) * u;
    const c = ctx;
    c.globalAlpha = a;
    c.globalCompositeOperation = p.blend || 'lighter';
    switch (p.shape) {
      case 'flame': {
        const col = p.ramp[Math.min(p.ramp.length - 1, Math.floor(u * p.ramp.length))];
        const sp = glow(col), fl = 0.85 + 0.3 * Math.sin(p.age * 38 + p.x);
        c.drawImage(sp, p.x - s * 0.45 * fl, p.y - s * 1.3, s * 0.9 * fl, s * 2.2);
        break;
      }
      case 'spark': {
        const len = Math.hypot(p.vx, p.vy) * (p.streak || 0.03) + 2;
        const ang = Math.atan2(p.vy, p.vx);
        c.strokeStyle = p.color; c.lineWidth = s; c.lineCap = 'round';
        c.beginPath(); c.moveTo(p.x, p.y); c.lineTo(p.x - Math.cos(ang) * len, p.y - Math.sin(ang) * len); c.stroke();
        break;
      }
      case 'ash': {
        c.fillStyle = p.color;
        c.save(); c.translate(p.x, p.y); c.rotate(p.rot || 0);
        c.beginPath(); c.moveTo(-s * 0.6, -s * 0.4); c.lineTo(s * 0.7, -s * 0.2); c.lineTo(s * 0.2, s * 0.6); c.lineTo(-s * 0.5, s * 0.4); c.closePath(); c.fill();
        c.restore();
        break;
      }
      case 'poly': { // ice shard
        c.save(); c.translate(p.x, p.y); c.rotate(p.rot || 0); c.scale(s, s);
        c.beginPath(); p.pts.forEach(([x, y], i) => (i ? c.lineTo(x, y) : c.moveTo(x, y))); c.closePath();
        c.fillStyle = p.fill || 'rgba(190,240,255,.85)'; c.fill();
        c.lineWidth = 1.2 / s; c.strokeStyle = 'rgba(255,255,255,.95)'; c.stroke();
        c.restore();
        break;
      }
      case 'heart': {
        c.save(); c.translate(p.x + Math.sin(p.age * 6 + p.ph) * 6, p.y); c.rotate(Math.sin(p.age * 4 + p.ph) * 0.3); c.scale(s / 20, s / 20);
        c.beginPath(); c.moveTo(0, 7); c.bezierCurveTo(-12, -1, -9, -12, 0, -5); c.bezierCurveTo(9, -12, 12, -1, 0, 7); c.closePath();
        c.fillStyle = p.color; c.fill(); c.lineWidth = 1.6; c.strokeStyle = '#fff'; c.stroke();
        c.restore();
        break;
      }
      case 'bubble': {
        c.strokeStyle = p.color; c.lineWidth = 1.6;
        c.beginPath(); c.arc(p.x + Math.sin(p.age * 5 + p.ph) * 4, p.y, s, 0, TAU); c.stroke();
        c.globalAlpha = a * 0.25; c.fillStyle = p.color; c.fill();
        break;
      }
      case 'plus': {
        c.fillStyle = p.color;
        c.save(); c.translate(p.x, p.y); c.rotate(p.rot || 0);
        c.fillRect(-s / 2, -s / 7, s, s * 2 / 7); c.fillRect(-s / 7, -s / 2, s * 2 / 7, s);
        c.restore();
        break;
      }
      case 'star': { // four-point twinkle
        c.fillStyle = p.color;
        c.save(); c.translate(p.x, p.y); c.rotate(p.rot || 0);
        c.beginPath();
        for (let i = 0; i < 8; i++) { const r = i % 2 ? s * 0.18 : s; const an = (i / 8) * TAU; c.lineTo(Math.cos(an) * r, Math.sin(an) * r); }
        c.closePath(); c.fill();
        c.restore();
        break;
      }
      case 'arrow': {
        c.save(); c.translate(p.x, p.y); c.scale(s / 16, (s / 16) * (p.dir < 0 ? -1 : 1));
        c.beginPath(); [[0, -16], [12, -2], [5, -2], [5, 14], [-5, 14], [-5, -2], [-12, -2]].forEach(([x, y], i) => (i ? c.lineTo(x, y) : c.moveTo(x, y))); c.closePath();
        c.fillStyle = p.color; c.fill(); c.lineWidth = 2; c.strokeStyle = 'rgba(255,255,255,.9)'; c.stroke();
        c.restore();
        break;
      }
      case 'soft': { const sp = soft(p.color); c.drawImage(sp, p.x - s, p.y - s, s * 2, s * 2); break; }
      default: { const sp = glow(p.color); c.drawImage(sp, p.x - s, p.y - s, s * 2, s * 2); }
    }
    return true;
  }
  function burst(x, y, n, o) {
    for (let i = 0; i < n; i++) {
      const an = o.ang != null ? o.ang + rnd(-(o.spread || 0.5), o.spread || 0.5) : rnd(0, TAU), sp = rnd(o.min || 200, o.max || 600);
      emit(Object.assign({ x, y, vx: Math.cos(an) * sp, vy: Math.sin(an) * sp, life: rnd(0.25, 0.5), size: rnd(1.5, 3), shape: 'spark', color: o.color || '#fff', drag: 3 }, o.p || {}));
    }
  }
  const scaleN = n => Math.max(1, Math.round(n * (phone() ? 0.55 : 1) * Q().n));

  /* ── Drawing helpers ────────────────────────────── */
  function radial(c, x, y, r, color, a, blend = 'lighter') {
    if (r <= 0 || a <= 0) return;
    c.globalCompositeOperation = blend; c.globalAlpha = Math.min(1, a);
    c.drawImage(glow(color), x - r, y - r, r * 2, r * 2);
  }
  /* A tapered crescent along an arc (slashes, wind). */
  function crescent(c, cx, cy, r, a0, a1, thick, fill, edge) {
    const N = 16, out = [], inn = [];
    for (let i = 0; i <= N; i++) {
      const u = i / N, an = a0 + (a1 - a0) * u, w = thick * Math.sin(Math.PI * u);
      out.push([cx + Math.cos(an) * (r + w * 0.5), cy + Math.sin(an) * (r + w * 0.5)]);
      inn.push([cx + Math.cos(an) * (r - w * 0.5), cy + Math.sin(an) * (r - w * 0.5)]);
    }
    c.beginPath();
    out.forEach(([x, y], i) => (i ? c.lineTo(x, y) : c.moveTo(x, y)));
    for (let i = inn.length - 1; i >= 0; i--) c.lineTo(inn[i][0], inn[i][1]);
    c.closePath();
    c.fillStyle = fill; c.fill();
    if (edge) { c.lineWidth = 1.4; c.strokeStyle = edge; c.beginPath(); out.forEach(([x, y], i) => (i ? c.lineTo(x, y) : c.moveTo(x, y))); c.stroke(); }
  }
  function polyline(c, pts) { c.beginPath(); pts.forEach(([x, y], i) => (i ? c.lineTo(x, y) : c.moveTo(x, y))); }
  /* Midpoint-displacement lightning between two points. */
  function bolt(x1, y1, x2, y2, disp) {
    let pts = [[x1, y1], [x2, y2]];
    while (disp > 3) {
      const nx = [pts[0]];
      for (let i = 0; i < pts.length - 1; i++) {
        const [ax, ay] = pts[i], [bx, by] = pts[i + 1];
        const dx = bx - ax, dy = by - ay, l = Math.hypot(dx, dy) || 1;
        const off = rnd(-disp, disp);
        nx.push([(ax + bx) / 2 - (dy / l) * off, (ay + by) / 2 + (dx / l) * off], pts[i + 1]);
      }
      pts = nx;
      disp *= 0.55;
    }
    return pts;
  }
  function boltTree(x1, y1, x2, y2) {
    const L = Math.hypot(x2 - x1, y2 - y1);
    const main = bolt(x1, y1, x2, y2, L * 0.16);
    const out = [{ pts: main, w: 1 }];
    const nb = 2 + Math.floor(Math.random() * 3);
    for (let b = 0; b < nb; b++) {
      const i = Math.floor(rnd(0.2, 0.75) * main.length);
      const [sx, sy] = main[i];
      const ang = Math.atan2(y2 - y1, x2 - x1) + rnd(0.35, 0.9) * (Math.random() < 0.5 ? -1 : 1);
      const len = L * rnd(0.15, 0.32);
      out.push({ pts: bolt(sx, sy, sx + Math.cos(ang) * len, sy + Math.sin(ang) * len, len * 0.2), w: 0.5 });
    }
    return out;
  }
  function strokeBolts(c, bolts, a) {
    c.globalCompositeOperation = 'lighter';
    c.lineJoin = 'round'; c.lineCap = 'round';
    [[16, 'rgba(255,225,80,.16)'], [7, 'rgba(255,236,120,.5)'], [2.4, 'rgba(255,253,240,1)']].forEach(([w, col]) => {
      bolts.forEach(b => { c.globalAlpha = a; c.lineWidth = w * b.w; c.strokeStyle = col; polyline(c, b.pts); c.stroke(); });
    });
  }
  /* P3's blue Shadow mask, for the end of a Shadow's death. */
  function drawMask(c, x, y, s, rot, a) {
    c.save(); c.translate(x, y); c.rotate(rot); c.globalAlpha = a; c.globalCompositeOperation = 'source-over';
    c.beginPath();
    c.moveTo(0, -s);
    c.bezierCurveTo(s * 0.92, -s, s, -s * 0.1, s * 0.62, s * 0.55);
    c.bezierCurveTo(s * 0.36, s * 0.98, -s * 0.36, s * 0.98, -s * 0.62, s * 0.55);
    c.bezierCurveTo(-s, -s * 0.1, -s * 0.92, -s, 0, -s);
    const g = c.createLinearGradient(0, -s, 0, s);
    g.addColorStop(0, '#d4efff'); g.addColorStop(0.45, '#6fa8ff'); g.addColorStop(1, '#2546c8');
    c.fillStyle = g; c.fill();
    c.lineWidth = Math.max(1.2, s * 0.08); c.strokeStyle = '#0b1a5a'; c.stroke();
    c.fillStyle = '#06102a';
    [-1, 1].forEach(k => { c.save(); c.translate(k * s * 0.33, -s * 0.12); c.rotate(k * 0.38); c.beginPath(); c.ellipse(0, 0, s * 0.22, s * 0.1, 0, 0, TAU); c.fill(); c.restore(); });
    c.beginPath(); c.ellipse(0, s * 0.45, s * 0.16, s * 0.06, 0, 0, TAU); c.fill();
    c.globalAlpha = a * 0.6; c.strokeStyle = '#fff'; c.lineWidth = s * 0.07; c.beginPath(); c.arc(0, 0, s * 0.78, -2.6, -1.9); c.stroke();
    c.restore();
  }

  /* ── Spells ─────────────────────────────────────── */
  const sizeOf = at => Math.max(46, Math.min(at.big ? 280 : 150, Math.min(at.w || 200, (at.h || 200) * 1.2) * 0.5)); // at.big: a cut-in's full-screen impact

  function fire(at, o = {}) {
    const R = sizeOf(at) * (o.small ? 0.6 : 1), baseY = at.y + R * 0.55;
    const ramp = ['#ffe9a0', '#ffb03a', '#ff7a22', '#ff4a14', '#c42810', '#6a1208'];
    radial(ctx, 0, 0, 0, '#fff', 0);
    add({ dur: 1.0, acc: 0, draw(c, t, dt, e) {
      const k = t < 0.7 ? c01(t / 0.08) : 1 - (t - 0.7) / 0.3;
      const fl = 0.8 + 0.2 * Math.sin(t * 41) * Math.sin(t * 23);
      radial(c, at.x, baseY - R * 0.2, R * 2.1 * fl, '#ff6a1f', 0.5 * k);
      radial(c, at.x, baseY, R * 1.1 * fl, '#ffa040', 0.4 * k);
      if (t < 0.62) {
        e.acc += dt * (phone() ? 150 : 280);
        while (e.acc >= 1) {
          e.acc--;
          const x = at.x + gauss() * R * 0.95;
          emit({ shape: 'flame', ramp, x, y: baseY + rnd(-8, 12), vx: (at.x - x) * 0.45 + rnd(-24, 24), vy: rnd(-400, -230) * (R / 100), ay: -260, life: rnd(0.45, 0.8), size: rnd(0.42, 0.75) * R, size1: R * 0.08, alpha: 0.55 });
          if (Math.random() < 0.12) emit({ shape: 'spark', x, y: baseY, vx: rnd(-60, 60), vy: rnd(-520, -300), ay: 160, life: rnd(0.4, 0.8), size: rnd(1.4, 2.4), color: '#ffd27a', streak: 0.02 });
        }
      }
      if (t > 0.25 && t < 0.9 && Math.random() < dt * 14) emit({ shape: 'soft', color: '#2a120c', blend: 'source-over', x: at.x + gauss() * R * 0.5, y: baseY - R * 0.9, vx: rnd(-15, 15), vy: rnd(-70, -40), life: rnd(0.7, 1), size: R * 0.25, size1: R * 0.6, alpha: 0.3, fadeIn: 0.2 });
    } });
    return 80;
  }

  function ice(at, o = {}) {
    const R = sizeOf(at) * (o.small ? 0.7 : 1);
    const n = phone() ? 7 : 10;
    const shards = Array.from({ length: n }, (_, i) => {
      const an = (i / n) * TAU + rnd(-0.22, 0.22), len = R * rnd(0.6, 1.05) * (i % 2 ? 0.75 : 1), wid = len * rnd(0.17, 0.25);
      return { an, len, wid, d0: R * rnd(0.02, 0.12), delay: rnd(0, 0.08) };
    });
    const kite = s => [[0, 0], [s.len * 0.32, s.wid / 2], [s.len, 0], [s.len * 0.32, -s.wid / 2]];
    const grow = o.hold ? 0.3 : 0.32, hold = o.hold ? 0.6 : 0;
    add({ dur: grow + hold + 0.02, burst: false, draw(c, t, dt, e) {
      radial(c, at.x, at.y, R * 1.6 * E.out(c01(t / grow)), '#7fe3ff', 0.4);
      const fade = hold && t > grow + hold * 0.5 ? 1 - (t - grow - hold * 0.5) / (hold * 0.5) : 1;
      shards.forEach(s => {
        const g = E.back(c01((t - s.delay) / (grow - s.delay)));
        if (g <= 0) return;
        c.save(); c.translate(at.x, at.y); c.rotate(s.an); c.translate(s.d0, 0); c.scale(g, g);
        c.globalCompositeOperation = 'source-over'; c.globalAlpha = 0.92 * fade;
        const gr = c.createLinearGradient(0, 0, s.len, 0);
        gr.addColorStop(0, 'rgba(120,200,255,.55)'); gr.addColorStop(0.5, 'rgba(205,245,255,.95)'); gr.addColorStop(1, 'rgba(255,255,255,1)');
        polyline(c, kite(s)); c.closePath(); c.fillStyle = gr; c.fill();
        c.lineWidth = 1.4 / g; c.strokeStyle = 'rgba(255,255,255,.95)'; c.stroke();
        c.globalAlpha = 0.6 * fade; c.beginPath(); c.moveTo(0, 0); c.lineTo(s.len, 0); c.stroke();
        c.restore();
      });
      if (!o.hold && !e.burst && t >= grow) {
        e.burst = true;
        shards.forEach(s => {
          const cx = at.x + Math.cos(s.an) * (s.d0 + s.len * 0.5), cy = at.y + Math.sin(s.an) * (s.d0 + s.len * 0.5), sp = rnd(320, 640);
          const pts = kite(s).map(([x, y]) => [(x - s.len * 0.5) / s.len * 2, y / s.len * 2]);
          emit({ shape: 'poly', pts, x: cx, y: cy, vx: Math.cos(s.an) * sp, vy: Math.sin(s.an) * sp - 80, ay: 700, drag: 1.2, rot: s.an, vr: rnd(-12, 12), life: rnd(0.45, 0.7), size: s.len * 0.42, size1: s.len * 0.3, blend: 'source-over' });
        });
        burst(at.x, at.y, scaleN(26), { color: '#e6fbff', min: 220, max: 620, p: { size: 2 } });
        for (let i = 0; i < scaleN(8); i++) emit({ shape: 'soft', color: '#cfefff', x: at.x + gauss() * R * 0.6, y: at.y + gauss() * R * 0.4, vx: rnd(-40, 40), vy: rnd(-30, 10), drag: 1, life: rnd(0.8, 1.2), size: R * 0.4, size1: R * 1.1, alpha: 0.32, fadeIn: 0.1 });
        add({ dur: 0.35, draw(cc, tt) { cc.globalCompositeOperation = 'lighter'; cc.globalAlpha = 1 - tt / 0.35; cc.lineWidth = 5 * (1 - tt / 0.35) + 1; cc.strokeStyle = '#bff3ff'; cc.beginPath(); cc.arc(at.x, at.y, R * (0.4 + 1.2 * E.out(tt / 0.35)), 0, TAU); cc.stroke(); } });
      }
    } });
    if (o.hold) for (let i = 0; i < scaleN(6); i++) emit({ shape: 'soft', color: '#cfefff', x: at.x + gauss() * R * 0.5, y: at.y + gauss() * R * 0.3, vx: rnd(-20, 20), vy: rnd(-20, 5), life: 1, size: R * 0.3, size1: R * 0.8, alpha: 0.28, fadeIn: 0.2 });
    return o.hold ? 0 : 320;
  }

  function elec(at, o = {}) {
    const R = sizeOf(at) * (o.small ? 0.6 : 1);
    if (o.small) {
      add({ dur: 0.5, bolts: null, n: -1, draw(c, t, dt, e) {
        const step = Math.floor(t / 0.07);
        if (step !== e.n) { e.n = step; e.bolts = Array.from({ length: 3 }, () => { const a = rnd(0, TAU), b = a + rnd(1, 2.4); return { pts: bolt(at.x + Math.cos(a) * R, at.y + Math.sin(a) * R * 0.7, at.x + Math.cos(b) * R * 0.8, at.y + Math.sin(b) * R * 0.6, R * 0.35), w: 0.45 }; }); }
        strokeBolts(c, e.bolts, (1 - t / 0.5) * (step % 2 ? 0.6 : 1));
      } });
      burst(at.x, at.y, scaleN(10), { color: '#fff3a0', min: 120, max: 320 });
      return 0;
    }
    const sx = at.x + rnd(-0.25, 0.25) * Math.min(W, 700), sy = -20;
    const times = [0, 0.07, 0.15, 0.25, 0.34];
    add({ dur: 0.55, bolts: null, n: -1, flashes: 0, draw(c, t, dt, e) {
      let step = 0;
      while (step < times.length - 1 && t >= times[step + 1]) step++;
      if (step !== e.n) {
        e.n = step;
        e.bolts = boltTree(sx + rnd(-30, 30), sy, at.x + rnd(-R * 0.15, R * 0.15), at.y + rnd(-R * 0.1, R * 0.2));
        if (step === 0 || step === 2) burst(at.x, at.y, scaleN(step ? 10 : 22), { color: pick(['#fff7c0', '#ffe14d', '#ffffff']), min: 220, max: 700, p: { life: rnd(0.2, 0.45) } });
      }
      const decay = t > 0.36 ? 1 - (t - 0.36) / 0.19 : 1;
      const flick = [1, 0.55, 1, 0.7, 0.9][step];
      // Screen flash
      const fa = (Math.max(0, 0.42 - t * 4) + (t > 0.15 && t < 0.22 ? 0.18 : 0)) * flashK();
      if (fa > 0) { c.globalCompositeOperation = 'lighter'; c.globalAlpha = fa; c.fillStyle = '#fff6c8'; c.fillRect(0, 0, W, H); }
      strokeBolts(c, e.bolts, flick * decay);
      radial(c, at.x, at.y, R * 1.5 * flick, '#ffe14d', 0.6 * decay);
      radial(c, sx, 0, 140, '#fff6c8', 0.35 * decay);
    } });
    return 40;
  }

  function wind(at, o = {}) {
    const R = sizeOf(at) * (o.small ? 0.6 : 1);
    const n = phone() ? 5 : 7;
    const cres = Array.from({ length: n }, (_, i) => ({ th: (i / n) * TAU + rnd(-0.3, 0.3), w: rnd(8, 11), delay: i * 0.045, rise: rnd(0.1, 0.9), tilt: rnd(0.4, 0.62), k: rnd(0.8, 1.15) }));
    add({ dur: 0.85, acc: 0, draw(c, t, dt, e) {
      radial(c, at.x, at.y, R * 1.6, '#5dffa0', 0.28 * Math.sin(Math.PI * c01(t / 0.85)));
      c.globalCompositeOperation = 'lighter';
      cres.forEach(k => {
        const u = c01((t - k.delay) / 0.72);
        if (u <= 0 || u >= 1) return;
        const r = R * k.k * (0.35 + 1.25 * E.out(u)), a = Math.sin(Math.PI * u);
        c.save(); c.translate(at.x, at.y + R * 0.3 - R * k.rise * u * 1.2); c.scale(1, k.tilt);
        const a0 = k.th + k.w * t;
        c.globalAlpha = a * 0.7; crescent(c, 0, 0, r, a0, a0 + 2.3, R * 0.42 * (1 - u * 0.4), 'rgba(120,255,190,.8)');
        c.globalAlpha = a; crescent(c, 0, 0, r, a0 + 0.25, a0 + 2.0, R * 0.12, 'rgba(240,255,248,1)', null);
        c.restore();
      });
      if (t < 0.6) {
        e.acc += dt * (phone() ? 30 : 60);
        while (e.acc >= 1) {
          e.acc--;
          const an = rnd(0, TAU), r = R * rnd(0.4, 1.2), sp = rnd(380, 620);
          emit({ shape: 'spark', x: at.x + Math.cos(an) * r, y: at.y + Math.sin(an) * r * 0.55, vx: -Math.sin(an) * sp, vy: Math.cos(an) * sp * 0.55 - 60, drag: 2, life: rnd(0.22, 0.4), size: rnd(1.2, 2.2), color: pick(['#d8ffe9', '#7dffb0', '#ffffff']), streak: 0.05 });
        }
      }
    } });
    return 60;
  }

  function light(at, o = {}) {
    const R = sizeOf(at) * (o.small ? 0.7 : 1), y0 = at.y + R * 0.5, top = at.y - R * 0.15;
    const holy = o.holy, dur = 1.15;
    const rays = Array.from({ length: phone() ? 10 : 14 }, (_, i) => ({ an: (i / (phone() ? 10 : 14)) * TAU + rnd(-0.1, 0.1), len: rnd(1.4, 2.3), col: holy ? (i % 2 ? '#ffffff' : '#fff2b0') : (i % 2 ? '#ff9ac8' : '#ffd36b') }));
    add({ dur, draw(c, t) {
      const fade = t > dur - 0.35 ? 1 - (t - (dur - 0.35)) / 0.35 : 1;
      const rise = E.out(c01(t / 0.55)), cy = y0 + (top - y0) * rise;
      // Horizon band
      c.save(); c.translate(at.x, y0); c.scale(1, 0.1);
      radial(c, 0, 0, R * 3 * E.out(c01(t / 0.3)), holy ? '#ffffff' : '#ffb35a', 0.85 * fade);
      c.restore();
      // Warm bloom
      radial(c, at.x, cy, R * (2.2 + rise), holy ? '#fff2c8' : '#ff9a5a', 0.38 * fade);
      if (!holy) radial(c, at.x, cy, R * 3.4, '#ff8cc0', 0.16 * fade);
      // Rays
      c.globalCompositeOperation = 'lighter';
      const ru = E.out(c01((t - 0.1) / 0.45));
      rays.forEach(r => {
        const an = r.an + t * 0.5, L = R * r.len * ru, wdt = L * 0.11;
        c.globalAlpha = 0.42 * fade;
        const gx = c.createLinearGradient(at.x, cy, at.x + Math.cos(an) * L, cy + Math.sin(an) * L);
        gx.addColorStop(0, rgba(r.col, 1)); gx.addColorStop(1, rgba(r.col, 0));
        c.fillStyle = gx;
        c.beginPath(); c.moveTo(at.x, cy);
        c.lineTo(at.x + Math.cos(an) * L - Math.sin(an) * wdt, cy + Math.sin(an) * L + Math.cos(an) * wdt);
        c.lineTo(at.x + Math.cos(an) * L + Math.sin(an) * wdt, cy + Math.sin(an) * L - Math.cos(an) * wdt);
        c.closePath(); c.fill();
      });
      // The sun
      radial(c, at.x, cy, R * 0.75, holy ? '#ffffff' : '#ffe39a', fade);
      radial(c, at.x, cy, R * 0.35, '#ffffff', fade);
      // Lens flare toward the middle of the screen
      const fx = W / 2 - at.x, fy = H / 2 - cy;
      [[0.45, 0.12, '#ffd36b'], [0.75, 0.2, '#ff8cc0'], [1.1, 0.07, '#9fd3ff']].forEach(([k, s, col]) => radial(c, at.x + fx * k, cy + fy * k, R * s * 2, col, 0.22 * fade * rise));
      if (t < 0.7 && Math.random() < 0.6) emit({ shape: Math.random() < 0.3 ? 'star' : 'glow', x: at.x + gauss() * R, y: y0 - rnd(0, R * 0.6), vx: rnd(-20, 20), vy: rnd(-120, -50), life: rnd(0.5, 0.9), size: rnd(3, 6), color: pick(holy ? ['#ffffff', '#fff2b0'] : ['#ffd36b', '#ffb3d6', '#fff2b0']), rot: rnd(0, TAU) });
    } });
    return 260;
  }

  function dark(at, o = {}) {
    const R = sizeOf(at) * (o.small ? 0.55 : 1);
    const n = phone() ? 5 : 8, dur = o.small ? 0.8 : 1.0;
    const tend = Array.from({ length: n }, (_, i) => {
      // Rooted on a ring around the target, curling in like ink pulled down a drain.
      const an = (i / n) * TAU + rnd(-0.25, 0.25), sw = (i % 2 ? 1 : -1) * rnd(0.9, 1.4), r0 = R * rnd(1.35, 1.75);
      return { bx: at.x + Math.cos(an) * r0, by: at.y + Math.sin(an) * r0 * 0.6 + R * 0.25, cx: at.x + Math.cos(an + sw) * R * 1.05, cy: at.y + Math.sin(an + sw) * R * 0.7, tx: at.x + rnd(-R * 0.12, R * 0.12), ty: at.y + rnd(-R * 0.15, R * 0.1), ph: rnd(0, TAU), w: R * rnd(0.055, 0.09), delay: rnd(0, 0.14) };
    });
    add({ dur, draw(c, t) {
      const core = Math.sin(Math.PI * c01(t / dur));
      c.globalCompositeOperation = 'source-over';
      c.globalAlpha = 0.85 * core;
      c.drawImage(soft('#05000a'), at.x - R * 1.1, at.y - R * 0.9, R * 2.2, R * 1.8);
      radial(c, at.x, at.y, R * 1.2 * core, '#7a2bd0', 0.35 * core);
      tend.forEach(k => {
        const tt = t - k.delay;
        let g = E.out(c01(tt / 0.35));
        if (tt > dur * 0.62) g *= 1 - E.inOut(c01((tt - dur * 0.62) / (dur * 0.33)));
        if (g <= 0.02) return;
        // Stamp soft ink along the curve: thin at the root, thickest in the middle, a glowing tip.
        const N = 26, pts = [];
        for (let i = 0; i <= N; i++) {
          const u = (i / N) * g, iu = 1 - u;
          const x = iu * iu * k.bx + 2 * iu * u * k.cx + u * u * k.tx, y = iu * iu * k.by + 2 * iu * u * k.cy + u * u * k.ty;
          const dx = 2 * iu * (k.cx - k.bx) + 2 * u * (k.tx - k.cx), dy = 2 * iu * (k.cy - k.by) + 2 * u * (k.ty - k.cy), l = Math.hypot(dx, dy) || 1;
          const wob = Math.sin(u * 9 + tt * 15 + k.ph) * R * 0.16 * u * (1 - u * 0.5);
          pts.push([x - (dy / l) * wob, y + (dx / l) * wob, i / N]);
        }
        const ink = soft('#0c0214');
        c.globalCompositeOperation = 'source-over';
        pts.forEach(([x, y, v]) => { const r = k.w * (0.35 + 1.1 * Math.sin(Math.PI * Math.min(1, v * 0.9 + 0.1))); c.globalAlpha = 0.55 + 0.4 * v; c.drawImage(ink, x - r * 1.6, y - r * 1.6, r * 3.2, r * 3.2); });
        c.globalCompositeOperation = 'lighter'; c.globalAlpha = 0.5; c.lineWidth = 1.2; c.strokeStyle = '#b06bff';
        polyline(c, pts.filter((p, i) => i > N * 0.3)); c.stroke();
        const tip = pts[pts.length - 1];
        if (tip) radial(c, tip[0], tip[1], k.w * 2.4, '#9a4bff', 0.55);
      });
      if (t < dur * 0.7 && Math.random() < 0.5) {
        const an = rnd(0, TAU), r = R * rnd(0.8, 1.4);
        emit({ x: at.x + Math.cos(an) * r, y: at.y + Math.sin(an) * r * 0.7, vx: -Math.cos(an) * r * 2, vy: -Math.sin(an) * r * 1.4, life: 0.45, size: rnd(2.5, 5), color: pick(['#c07bff', '#7a2bd0', '#ff5ab0']) });
      }
    } });
    return 200;
  }

  function almighty(at) {
    const R = sizeOf(at);
    add({ dur: 0.85, draw(c, t) {
      if (t < 0.12) { c.globalCompositeOperation = 'lighter'; c.globalAlpha = 0.3 * (1 - t / 0.12) * flashK(); c.fillStyle = '#ffd6e8'; c.fillRect(0, 0, W, H); }
      radial(c, at.x, at.y, R * 1.8 * (1 - c01(t / 0.5)) + R * 0.4, '#ffb3d6', 1 - c01(t / 0.5));
      [0, 0.12].forEach((d, i) => {
        const u = c01((t - d) / 0.6);
        if (u <= 0 || u >= 1) return;
        const r = R * (0.3 + 3 * E.out(u)), w = (i ? 10 : 22) * (1 - u) + 1;
        c.globalCompositeOperation = 'lighter';
        c.globalAlpha = (1 - u) * 0.7; c.lineWidth = w * 2.2; c.strokeStyle = '#ff6fb0'; c.beginPath(); c.arc(at.x, at.y, r, 0, TAU); c.stroke();
        c.globalAlpha = 1 - u; c.lineWidth = w; c.strokeStyle = '#ffffff'; c.stroke();
      });
      const su = c01(t / 0.35);
      if (su < 1) {
        c.globalAlpha = 1 - su; c.strokeStyle = '#fff'; c.lineWidth = 2;
        for (let i = 0; i < 16; i++) { const an = (i / 16) * TAU, r0 = R * (0.2 + su * 1.4), r1 = r0 + R * 0.5; c.beginPath(); c.moveTo(at.x + Math.cos(an) * r0, at.y + Math.sin(an) * r0); c.lineTo(at.x + Math.cos(an) * r1, at.y + Math.sin(an) * r1); c.stroke(); }
      }
    } });
    return 60;
  }

  function slash(at, o = {}) {
    const R = sizeOf(at), col = o.color || '#e8e8f0', n = o.crit ? 3 : 2;
    const arcs = Array.from({ length: n }, (_, i) => ({ cx: at.x + rnd(-0.3, 0.3) * R, cy: at.y + rnd(-0.3, 0.2) * R, r: R * rnd(0.95, 1.35), mid: rnd(-0.9, 0.9) + (i % 2 ? Math.PI : 0), span: rnd(1.5, 2.1), delay: i * 0.07, sparked: false }));
    add({ dur: 0.5, draw(c, t) {
      c.globalCompositeOperation = 'lighter';
      arcs.forEach(a => {
        const u = c01((t - a.delay) / 0.16);
        if (u <= 0) return;
        const head = E.out(u), tail = E.in(c01((t - a.delay - 0.05) / 0.2));
        if (head <= tail) return;
        const a0 = a.mid - a.span / 2 + a.span * tail, a1 = a.mid - a.span / 2 + a.span * head;
        const fade = 1 - c01((t - a.delay - 0.18) / 0.15);
        c.globalAlpha = 0.65 * fade; crescent(c, a.cx, a.cy, a.r, a0, a1, R * 0.26, rgba(col, 0.6));
        c.globalAlpha = fade; crescent(c, a.cx, a.cy, a.r, a0, a1, R * 0.09, '#ffffff');
        if (!a.sparked && u >= 1) {
          a.sparked = true;
          const an = a.mid; burst(a.cx + Math.cos(an) * a.r, a.cy + Math.sin(an) * a.r, scaleN(10), { color: '#fff', ang: an + Math.PI / 2, spread: 0.8, min: 200, max: 520 });
        }
      });
      radial(c, at.x, at.y, R * 0.9, col, 0.5 * (1 - c01(t / 0.3)));
    } });
    return 70;
  }

  function strike(at, o = {}) {
    const R = sizeOf(at), col = o.color || '#ffc979';
    burst(at.x, at.y, scaleN(o.crit ? 26 : 16), { color: pick(['#fff', '#ffe4a8']), min: 300, max: 800, p: { size: 2.4, life: rnd(0.2, 0.35) } });
    for (let i = 0; i < scaleN(5); i++) emit({ shape: 'soft', color: '#b9a5b5', blend: 'source-over', x: at.x + gauss() * R * 0.3, y: at.y + R * 0.3, vx: rnd(-120, 120), vy: rnd(-60, 10), drag: 3, life: 0.6, size: R * 0.2, size1: R * 0.45, alpha: 0.35 });
    add({ dur: 0.5, draw(c, t) {
      c.globalCompositeOperation = 'lighter';
      [0, 0.05, 0.11].forEach((d, i) => {
        const u = c01((t - d) / 0.34);
        if (u <= 0 || u >= 1) return;
        c.globalAlpha = 1 - u; c.lineWidth = (i === 1 ? 6 : 11) * (1 - u) + 1; c.strokeStyle = i === 1 ? col : '#ffffff';
        c.beginPath(); c.ellipse(at.x, at.y, R * (0.2 + 1.15 * E.out(u)), R * (0.2 + 1.15 * E.out(u)) * 0.8, 0, 0, TAU); c.stroke();
      });
      const su = c01(t / 0.2);
      if (su < 1) {
        const s = R * (0.4 + 0.9 * E.back(c01(t / 0.08)));
        c.globalAlpha = 1 - su;
        c.beginPath();
        for (let i = 0; i < 24; i++) { const an = (i / 24) * TAU + 0.2, r = i % 2 ? s * 0.38 : s * (0.8 + (i % 4 === 0 ? 0.35 : 0)); c.lineTo(at.x + Math.cos(an) * r, at.y + Math.sin(an) * r); }
        c.closePath(); c.fillStyle = '#fffbe8'; c.fill(); c.lineWidth = 3; c.strokeStyle = col; c.stroke();
      }
    } });
    return 50;
  }

  function pierce(at, o = {}) {
    const R = sizeOf(at), col = o.color || '#9fd3ff', n = o.crit ? 7 : 5, phi = rnd(-0.45, -0.15) + (Math.random() < 0.5 ? 0 : Math.PI);
    const lines = Array.from({ length: n }, (_, i) => ({ off: (i / (n - 1) - 0.5) * R * 0.9 + rnd(-8, 8), delay: i * 0.03 + rnd(0, 0.02), w: rnd(1.6, 3.4) }));
    const dx = Math.cos(phi), dy = Math.sin(phi), nx = -dy, ny = dx, L = R * 2.6;
    let sparked = false;
    add({ dur: 0.45, draw(c, t) {
      c.globalCompositeOperation = 'lighter'; c.lineCap = 'round';
      lines.forEach(l => {
        const u = c01((t - l.delay) / 0.16);
        if (u <= 0 || u >= 1) return;
        const head = -L * 1.1 + L * 1.9 * E.out(u), tail = head - L * 0.7;
        const hx = at.x + dx * head + nx * l.off, hy = at.y + dy * head + ny * l.off, tx = at.x + dx * tail + nx * l.off, ty = at.y + dy * tail + ny * l.off;
        const g = c.createLinearGradient(tx, ty, hx, hy); g.addColorStop(0, rgba(col, 0)); g.addColorStop(0.7, rgba(col, 0.9)); g.addColorStop(1, '#ffffff');
        c.globalAlpha = 1 - u * 0.5; c.strokeStyle = g; c.lineWidth = l.w; c.beginPath(); c.moveTo(tx, ty); c.lineTo(hx, hy); c.stroke();
      });
      if (!sparked && t > 0.08) { sparked = true; burst(at.x, at.y, scaleN(14), { color: '#fff', ang: phi, spread: 0.5, min: 300, max: 800 }); }
      const ru = c01((t - 0.06) / 0.3);
      if (ru > 0 && ru < 1) { c.globalAlpha = 1 - ru; c.lineWidth = 4 * (1 - ru) + 1; c.strokeStyle = '#fff'; c.beginPath(); c.arc(at.x, at.y, R * (0.15 + 0.7 * E.out(ru)), 0, TAU); c.stroke(); radial(c, at.x, at.y, R * 0.7, col, 1 - ru); }
    } });
    return 60;
  }

  /* Golden Rope: Haenim's signature. A twisting gold ribbon lashes from Solar to the target and wraps it. */
  function rope(at, o = {}) {
    const R = sizeOf(at);
    const P0 = o.from || { x: W * 0.12, y: H * 0.85 };
    const T1 = 0.3, T2 = 0.62, T3 = 0.9, dur = 1.15;
    // The coil: two turns around the Shadow's middle, each a little lower, seen slightly from above.
    const rx = Math.max(R * 0.7, (at.w || 200) * 0.36), ry = rx * 0.34, tilt = -0.1, TURNS = 2;
    const loopAt = (phi, k) => {
      const cxw = at.x, cyw = at.y - R * 0.18; // live: the target may move
      const lx = Math.cos(phi) * rx * k, ly = Math.sin(phi) * ry * k + (phi + Math.PI / 2) / TAU * R * 0.3;
      return [cxw + lx * Math.cos(tilt) - ly * Math.sin(tilt), cyw + lx * Math.sin(tilt) + ly * Math.cos(tilt)];
    };
    const ribbon = (c, pts, a, wBase) => {
      // Glow pass
      c.globalCompositeOperation = 'lighter'; c.globalAlpha = 0.35 * a; c.lineWidth = wBase * 2.6; c.lineJoin = c.lineCap = 'round'; c.strokeStyle = '#ffcf5a';
      polyline(c, pts.map(p => [p[0], p[1]])); c.stroke();
      // Twisting band: front faces bright gold, back faces deeper gold.
      c.globalCompositeOperation = 'source-over';
      for (let i = 0; i < pts.length - 1; i++) {
        const [x1, y1, u1, back1] = pts[i], [x2, y2, u2] = pts[i + 1];
        const dx = x2 - x1, dy = y2 - y1, l = Math.hypot(dx, dy) || 1, nx = -dy / l, ny = dx / l;
        const tw = Math.cos(u1 * 22 + o._t * 9), hw = wBase * (0.22 + 0.78 * Math.abs(tw)) * 0.5, hw2 = wBase * (0.22 + 0.78 * Math.abs(Math.cos(u2 * 22 + o._t * 9))) * 0.5;
        c.globalAlpha = a * (back1 ? 0.45 : 1);
        c.fillStyle = tw > 0 ? (back1 ? '#b07814' : '#ffd96b') : (back1 ? '#8a5a0c' : '#e0a12a');
        c.beginPath(); c.moveTo(x1 + nx * hw, y1 + ny * hw); c.lineTo(x2 + nx * hw2, y2 + ny * hw2); c.lineTo(x2 - nx * hw2, y2 - ny * hw2); c.lineTo(x1 - nx * hw, y1 - ny * hw); c.closePath(); c.fill();
        if (tw > 0.35 && !back1) { c.globalAlpha = a * 0.85; c.strokeStyle = '#fff6d6'; c.lineWidth = 1.2; c.beginPath(); c.moveTo(x1 + nx * hw * 0.4, y1 + ny * hw * 0.4); c.lineTo(x2 + nx * hw2 * 0.4, y2 + ny * hw2 * 0.4); c.stroke(); }
      }
    };
    let flashed = false;
    add({ dur, draw(c, t) {
      o._t = t;
      const throwU = E.out(c01(t / T1));
      const wrapU = E.inOut(c01((t - T1) / (T2 - T1)));
      const tight = E.back(c01((t - T2) / (T3 - T2)));
      const k = 1 - 0.13 * tight;
      const fade = t > T3 ? 1 - (t - T3) / (dur - T3) : 1;
      const phi0 = -Math.PI / 2, phiEnd = phi0 + wrapU * TURNS * TAU;
      const start = loopAt(phi0, k);
      // The line from Solar: an arc that straightens as it pulls tight.
      const tens = c01((t - T1 * 0.6) / 0.4);
      const P3 = t < T1 ? [at.x, at.y - R * 0.2] : start;
      const P1 = [P0.x + (P3[0] - P0.x) * 0.25, P0.y - H * 0.28 * (1 - tens * 0.85)], P2 = [P3[0] - (P3[0] - P0.x) * 0.2, P3[1] - R * 1.5 * (1 - tens)];
      const tailU = t > T3 ? E.in(c01((t - T3) / (dur - T3))) : 0;
      const pts = [];
      const N = phone() ? 28 : 44;
      for (let i = 0; i <= N; i++) {
        const u = tailU + (throwU - tailU) * (i / N), iu = 1 - u;
        let x = iu ** 3 * P0.x + 3 * iu * iu * u * P1[0] + 3 * iu * u * u * P2[0] + u ** 3 * P3[0];
        let y = iu ** 3 * P0.y + 3 * iu * iu * u * P1[1] + 3 * iu * u * u * P2[1] + u ** 3 * P3[1];
        const wave = Math.sin(u * 16 - t * 34) * R * 0.12 * (1 - u) * (1 - tens) * Math.min(1, u * 6);
        pts.push([x + wave * 0.6, y + wave, u, false]);
      }
      const loops = [];
      if (wrapU > 0) { const NL = Math.max(2, Math.round(72 * wrapU)); for (let i = 0; i <= NL; i++) { const ph = phi0 + (phiEnd - phi0) * (i / NL); const [x, y] = loopAt(ph, k); loops.push([x, y, 0.5 + ph / 20, Math.sin(ph) < 0]); } }
      const w = Math.max(6, R * 0.085);
      ribbon(c, pts, fade, w);
      if (loops.length > 1) {
        // Back half (behind the Shadow) dim and thin, front half bright: drawn as separate runs so they don't join up.
        const runs = [];
        loops.forEach(p => { const last = runs[runs.length - 1]; if (last && last.back === p[3]) last.pts.push(p); else runs.push({ back: p[3], pts: last ? [last.pts[last.pts.length - 1], p] : [p] }); });
        runs.filter(r => r.back).forEach(r => ribbon(c, r.pts, fade * 0.5, w * 0.8));
        runs.filter(r => !r.back).forEach(r => ribbon(c, r.pts, fade, w));
      }
      // Head glint while flying, knot glint when tight
      const head = t < T1 ? pts[pts.length - 1] : loops[loops.length - 1] || start;
      if (head && fade > 0) { radial(c, head[0], head[1], w * 3, '#ffe9a0', 0.8 * fade); }
      if (t > T2 && !flashed) {
        flashed = true;
        burst(head[0], head[1], scaleN(18), { color: '#ffe48a', min: 150, max: 420, p: { size: 2 } });
        emit({ shape: 'star', x: at.x + rx * 0.55, y: at.y - R * 0.23, life: 0.5, size: R * 0.5, size1: R * 0.1, color: '#fff6d6', vr: 4, rot: 0, vx: 0, vy: 0 });
      }
      const all = pts.concat(loops);
      if (all.length && Math.random() < 0.85) { const p = pick(all); emit({ shape: Math.random() < 0.35 ? 'star' : 'glow', x: p[0], y: p[1], vx: rnd(-30, 30), vy: rnd(-60, 10), life: rnd(0.35, 0.6), size: rnd(2, 4.5), color: pick(['#ffd36b', '#fff2b0', '#ff9ac8']), rot: rnd(0, TAU) }); }
    } });
    return T1 * 1000;
  }

  function heal(at, o = {}) {
    const R = sizeOf(at) * 0.9, cols = o.cure ? ['#ffffff', '#bff6ff', '#ffe9a0'] : ['#7dffc0', '#ffe9a0', '#c8ffe6'];
    add({ dur: 1.0, acc: 0, draw(c, t, dt, e) {
      const a = Math.sin(Math.PI * c01(t / 1.0));
      const g = c.createLinearGradient(0, at.y + R * 0.8, 0, at.y - R * 1.6);
      g.addColorStop(0, rgba(cols[0], 0)); g.addColorStop(0.35, rgba(cols[0], 0.32)); g.addColorStop(1, rgba(cols[0], 0));
      c.globalCompositeOperation = 'lighter'; c.globalAlpha = a; c.fillStyle = g;
      c.fillRect(at.x - R * 0.55, at.y - R * 1.6, R * 1.1, R * 2.4);
      if (t < 0.55) {
        e.acc += dt * (phone() ? 40 : 70);
        while (e.acc >= 1) { e.acc--; emit({ shape: Math.random() < 0.2 ? 'plus' : 'glow', x: at.x + rnd(-R * 0.7, R * 0.7), y: at.y + rnd(-R * 0.1, R * 0.6), vx: rnd(-14, 14), vy: rnd(-150, -70), life: rnd(0.6, 0.95), size: rnd(3, 6.5), size1: 1.5, color: pick(cols), rot: rnd(0, 1) }); }
      }
    } });
    return 0;
  }

  const STAT_COL = { atk: '#ff6b6b', def: '#6ab0ff', agi: '#7dffa0' };
  function buff(at, o = {}) {
    const R = sizeOf(at) * 0.8, dir = o.dir || 1, col = STAT_COL[o.stat] || '#ffd36b';
    for (let i = 0; i < 5; i++) {
      emit({ shape: 'arrow', dir, color: dir > 0 ? col : '#8a3550', x: at.x + (i - 2) * R * 0.32 + rnd(-6, 6), y: at.y + (dir > 0 ? R * 0.5 : -R * 0.7), vx: 0, vy: dir > 0 ? rnd(-230, -170) : rnd(150, 210), drag: 1.2, life: 0.75, size: rnd(14, 20), delay: i * 0.05 + rnd(0, 0.04), blend: 'source-over', fadeIn: 0.08, hold: 0.55 });
    }
    add({ dur: 0.5, draw(c, t) { const u = t / 0.5; c.globalCompositeOperation = 'lighter'; c.globalAlpha = 1 - u; c.lineWidth = 3; c.strokeStyle = col; c.beginPath(); c.ellipse(at.x, at.y + R * 0.5, R * (0.5 + u), R * (0.5 + u) * 0.3, 0, 0, TAU); c.stroke(); } });
    return 0;
  }

  function charm(at) {
    const R = sizeOf(at) * 0.8;
    for (let i = 0; i < scaleN(10); i++) emit({ shape: 'heart', x: at.x + rnd(-R * 0.8, R * 0.8), y: at.y + rnd(-R * 0.2, R * 0.4), vx: 0, vy: rnd(-110, -60), life: rnd(0.8, 1.1), size: rnd(20, 32), color: pick(['#ff7ac8', '#ff4f9e', '#ffb3d6']), ph: rnd(0, TAU), delay: rnd(0, 0.25), blend: 'source-over', hold: 0.6, fadeIn: 0.1 });
    add({ dur: 0.8, draw(c, t) { radial(c, at.x, at.y, R * 1.4, '#ff7ac8', 0.45 * Math.sin(Math.PI * t / 0.8)); } });
    return 0;
  }
  function poison(at) {
    const R = sizeOf(at) * 0.8;
    for (let i = 0; i < scaleN(14); i++) emit({ shape: 'bubble', x: at.x + rnd(-R * 0.7, R * 0.7), y: at.y + rnd(-R * 0.1, R * 0.6), vx: 0, vy: rnd(-90, -40), life: rnd(0.7, 1.1), size: rnd(4, 10), size1: rnd(6, 13), color: pick(['#b36bff', '#9cff6b', '#d49bff']), ph: rnd(0, TAU), delay: rnd(0, 0.3), blend: 'source-over', hold: 0.7 });
    add({ dur: 0.9, draw(c, t) { radial(c, at.x, at.y + R * 0.2, R * 1.3, '#8a3dff', 0.4 * Math.sin(Math.PI * t / 0.9)); } });
    return 0;
  }
  function distress(at) {
    const R = sizeOf(at) * 0.7, y = at.y - R * 0.5;
    add({ dur: 0.9, draw(c, t) {
      const a = Math.sin(Math.PI * t / 0.9);
      c.globalCompositeOperation = 'lighter';
      for (let i = 0; i < 9; i++) { const an = (i / 9) * TAU + t * 7; radial(c, at.x + Math.cos(an) * R * 0.75, y + Math.sin(an) * R * 0.22, 7, '#ff9a3d', a); }
      c.globalAlpha = a * 0.8; c.strokeStyle = '#ffd09a'; c.lineWidth = 2; c.beginPath();
      for (let i = 0; i < 40; i++) { const u = i / 40, an = u * TAU * 2 + t * 9, r = R * 0.6 * u; c.lineTo(at.x + Math.cos(an) * r, y + Math.sin(an) * r * 0.5); }
      c.stroke();
    } });
    return 0;
  }
  function bindFx(at) {
    const R = sizeOf(at);
    add({ dur: 0.6, draw(c, t) { const u = t / 0.6; c.globalCompositeOperation = 'lighter'; c.globalAlpha = 1 - u; c.lineWidth = 6 * (1 - u) + 1; c.strokeStyle = '#ffd36b'; c.beginPath(); c.ellipse(at.x, at.y, R * (1.3 - 0.6 * E.out(u)), R * (1.3 - 0.6 * E.out(u)) * 0.35, -0.16, 0, TAU); c.stroke(); } });
    return 0;
  }

  /* ── Kat's skills (Haenim's tree) ───────────────── */
  /* Protective Suzu: a gold bell rings once above the ally; a dome of light settles over them with chiming rings. */
  function suzu(at, o = {}) {
    const R = sizeOf(at) * (o.small ? 0.7 : 1), by = at.y - R * 1.05;
    add({ dur: 1.1, draw(c, t) {
      const fade = t > 0.75 ? 1 - (t - 0.75) / 0.35 : 1, sw = Math.sin(t * 22) * 0.35 * (1 - c01(t / 0.6));
      // the bell
      c.save(); c.translate(at.x, by); c.rotate(sw); c.globalAlpha = fade; c.globalCompositeOperation = 'source-over';
      const g = c.createLinearGradient(-R * 0.22, 0, R * 0.22, 0); g.addColorStop(0, '#b8862a'); g.addColorStop(0.45, '#fff2b0'); g.addColorStop(1, '#c9962e');
      c.fillStyle = g; c.strokeStyle = '#5a3a0a'; c.lineWidth = 2;
      c.beginPath(); c.moveTo(-R * 0.22, R * 0.22); c.quadraticCurveTo(-R * 0.24, -R * 0.2, 0, -R * 0.24); c.quadraticCurveTo(R * 0.24, -R * 0.2, R * 0.22, R * 0.22); c.closePath(); c.fill(); c.stroke();
      c.fillStyle = '#ff4f9e'; c.beginPath(); c.arc(0, R * 0.25, R * 0.05, 0, TAU); c.fill();
      c.restore();
      // chiming rings
      [0, 0.18, 0.36].forEach(d => { const u = c01((t - d) / 0.55); if (u <= 0 || u >= 1) return; c.globalCompositeOperation = 'lighter'; c.globalAlpha = (1 - u) * fade; c.lineWidth = 3 * (1 - u) + 1; c.strokeStyle = '#ffe9a0'; c.beginPath(); c.arc(at.x, by, R * (0.3 + 0.9 * E.out(u)), 0, TAU); c.stroke(); });
      // the ward dome
      const du = E.out(c01((t - 0.2) / 0.5));
      if (du > 0) { c.globalCompositeOperation = 'lighter'; c.globalAlpha = 0.5 * fade; c.lineWidth = 2.5; c.strokeStyle = '#fff2b0'; c.beginPath(); c.ellipse(at.x, at.y + R * 0.35, R * 0.95 * du, R * 1.15 * du, 0, Math.PI, TAU); c.stroke(); radial(c, at.x, at.y, R * 1.1 * du, '#ffd36b', 0.22 * fade); }
      if (t < 0.6 && Math.random() < 0.5) emit({ shape: 'star', x: at.x + rnd(-R, R) * 0.8, y: at.y + rnd(-R, R * 0.4), vx: 0, vy: rnd(-60, -20), life: rnd(0.4, 0.7), size: rnd(3, 6), color: pick(['#fff2b0', '#ffd36b', '#ffffff']), rot: rnd(0, TAU) });
    } });
    return 280;
  }
  /* Kunai Flick: three thin blades flicked in a fan; a keen hit (×3.5) leaves a pink cross-flash. */
  function kunai(at, o = {}) {
    const R = sizeOf(at), phi = rnd(-0.3, -0.12) + Math.PI, keen = !!o.keen;
    const blades = [-0.18, 0, 0.18].map((d, i) => ({ an: phi + d, delay: i * 0.05 }));
    let hit = false;
    add({ dur: 0.6, draw(c, t) {
      c.globalCompositeOperation = 'lighter';
      blades.forEach(b => {
        const u = c01((t - b.delay) / 0.18); if (u <= 0 || u >= 1) return;
        const dist = R * 2.2 * (1 - E.out(u)), x = at.x - Math.cos(b.an) * dist, y = at.y - Math.sin(b.an) * dist;
        c.save(); c.translate(x, y); c.rotate(b.an); c.globalAlpha = 1;
        c.fillStyle = '#e8eef8'; c.strokeStyle = '#14070f'; c.lineWidth = 1.5;
        c.beginPath(); c.moveTo(R * 0.28, 0); c.lineTo(0, -R * 0.05); c.lineTo(-R * 0.14, 0); c.lineTo(0, R * 0.05); c.closePath(); c.fill(); c.stroke();
        c.fillStyle = '#ff4f9e'; c.beginPath(); c.arc(-R * 0.18, 0, R * 0.035, 0, TAU); c.fill();
        c.restore();
        c.globalAlpha = 0.5; c.strokeStyle = '#9fd3ff'; c.lineWidth = 1.4; c.beginPath(); c.moveTo(x, y); c.lineTo(x - Math.cos(b.an) * R * 0.6, y - Math.sin(b.an) * R * 0.6); c.stroke();
      });
      if (!hit && t > 0.2) { hit = true; burst(at.x, at.y, scaleN(keen ? 22 : 10), { color: keen ? '#ff8cc0' : '#ffffff', min: 260, max: keen ? 900 : 600 }); }
      if (keen) { const u = c01((t - 0.2) / 0.35); if (u > 0 && u < 1) { c.globalAlpha = 1 - u; c.lineWidth = 5 * (1 - u) + 1; c.strokeStyle = '#ff4f9e'; const L = R * (0.4 + 0.8 * E.out(u)); c.beginPath(); c.moveTo(at.x - L, at.y - L); c.lineTo(at.x + L, at.y + L); c.moveTo(at.x + L, at.y - L); c.lineTo(at.x - L, at.y + L); c.stroke(); radial(c, at.x, at.y, R, '#ff4f9e', 0.5 * (1 - u)); } }
    } });
    return 200;
  }
  /* Kitsune Rush: fox-fire. Blue-white wisps circle the ally, then streak forward like a sprint start. */
  function kitsune(at, o = {}) {
    const R = sizeOf(at) * 0.9, wisps = Array.from({ length: phone() ? 5 : 8 }, (_, i) => ({ ph: (i / (phone() ? 5 : 8)) * TAU }));
    add({ dur: 1.1, acc: 0, draw(c, t, dt, e) {
      const fade = t > 0.8 ? 1 - (t - 0.8) / 0.3 : 1, r = R * (0.6 + 0.4 * E.out(c01(t / 0.4)));
      c.globalCompositeOperation = 'lighter';
      wisps.forEach(w => { const an = w.ph + t * 7, x = at.x + Math.cos(an) * r, y = at.y + Math.sin(an) * r * 0.45; radial(c, x, y, R * 0.18, '#7fe3ff', 0.9 * fade); radial(c, x, y, R * 0.08, '#ffffff', fade); });
      radial(c, at.x, at.y, R * 1.3, '#ff9ac8', 0.18 * fade);
      e.acc += dt * 40;
      while (e.acc >= 1) { e.acc--; emit({ shape: 'flame', ramp: ['#ffffff', '#bff6ff', '#7fe3ff', '#ff9ac8'], x: at.x + rnd(-R, R) * 0.7, y: at.y + rnd(-R * 0.2, R * 0.5), vx: rnd(160, 320), vy: rnd(-60, -20), drag: 1.5, life: rnd(0.3, 0.55), size: rnd(8, 14) }); }
    } });
    return 220;
  }
  /* Public Veneer: a smiling mask settles over her and a pink shield ring locks in place. */
  function veneer(at, o = {}) {
    const R = sizeOf(at);
    add({ dur: 1.0, draw(c, t) {
      const fade = t > 0.7 ? 1 - (t - 0.7) / 0.3 : 1, u = E.out(c01(t / 0.35));
      drawMask(c, at.x, at.y - R * 0.45 - (1 - u) * R * 0.5, R * 0.55, 0, 0.85 * fade);
      c.globalCompositeOperation = 'lighter'; c.globalAlpha = fade; c.lineWidth = 4; c.strokeStyle = '#ff8cc0';
      c.beginPath(); c.ellipse(at.x, at.y + R * 0.4, R * (1.3 - 0.4 * u), R * (1.3 - 0.4 * u) * 0.32, 0, 0, TAU); c.stroke();
      c.lineWidth = 2; c.strokeStyle = '#ffffff'; c.beginPath(); c.arc(at.x, at.y, R * 0.9 * u, Math.PI * 1.1, Math.PI * 1.9); c.stroke();
      radial(c, at.x, at.y, R * 1.2, '#ff4f9e', 0.25 * fade);
    } });
    return 200;
  }
  /* Call the Bluff: a playing card spins in, flips, and splits; the foe's glow drains out. */
  function bluff(at, o = {}) {
    const R = sizeOf(at);
    let split = false;
    add({ dur: 1.0, draw(c, t) {
      const u = c01(t / 0.45), fade = t > 0.7 ? 1 - (t - 0.7) / 0.3 : 1;
      if (t < 0.5) {
        c.save(); c.translate(at.x, at.y - R * 0.3); c.rotate((1 - E.out(u)) * 3); c.scale(Math.cos(u * Math.PI * 2) || 0.05, 1);
        c.globalCompositeOperation = 'source-over'; c.globalAlpha = 1;
        c.fillStyle = u > 0.5 ? '#fff4f9' : '#ff4f9e'; c.strokeStyle = '#14070f'; c.lineWidth = 2;
        c.fillRect(-R * 0.28, -R * 0.4, R * 0.56, R * 0.8); c.strokeRect(-R * 0.28, -R * 0.4, R * 0.56, R * 0.8);
        if (u > 0.5) { c.fillStyle = '#ff4f9e'; c.font = `900 ${Math.round(R * 0.36)}px sans-serif`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('?', 0, 0); }
        c.restore();
      } else if (!split) { split = true; burst(at.x, at.y - R * 0.3, scaleN(16), { color: '#ff8cc0', min: 200, max: 520 }); }
      c.globalCompositeOperation = 'lighter';
      const du = c01((t - 0.45) / 0.5);
      if (du > 0) { c.globalAlpha = fade; c.lineWidth = 3; c.strokeStyle = '#ffb3e6'; for (let i = 0; i < 3; i++) { const an = t * 6 + i * TAU / 3; c.beginPath(); c.arc(at.x + Math.cos(an) * R * 0.3, at.y - R * 0.55, R * 0.12, 0, TAU); c.stroke(); } }
    } });
    return 380;
  }
  /* Off Angle Flank: a pink slash from the side angle. */
  function flank(at, o = {}) {
    const R = sizeOf(at) * (o.small ? 0.6 : 1), an = Math.PI * 0.82;
    add({ dur: 0.45, draw(c, t) {
      const u = c01(t / 0.25), f = 1 - c01((t - 0.2) / 0.25);
      c.globalCompositeOperation = 'lighter'; c.globalAlpha = f; c.lineCap = 'round';
      [0, 1].forEach(k => { const off = (k - 0.5) * R * 0.25, L = R * 1.4 * E.out(u); c.lineWidth = k ? 2 : 5; c.strokeStyle = k ? '#ffffff' : '#ff4f9e';
        c.beginPath(); c.moveTo(at.x - Math.cos(an) * L + off, at.y - Math.sin(an) * L); c.lineTo(at.x + Math.cos(an) * L * 0.4 + off, at.y + Math.sin(an) * L * 0.4); c.stroke(); });
    } });
    return 0;
  }

  /* ── Signature skills (data.js skills[].fx): one look per fighter. Each returns ms (at 1x) until it lands. ── */
  /* Corkscrew Thunder: three fist impacts in a tight triangle, each with a jagged arc; the last twists into a spiral. */
  function corkscrew(at, o = {}) {
    const R = sizeOf(at), pts = [[-0.35, -0.15], [0.3, -0.25], [0, 0.15]];
    let fired = 0;
    add({ dur: 0.85, draw(c, t) {
      pts.forEach(([dx, dy], i) => {
        const t0 = i * 0.14, u = c01((t - t0) / 0.22);
        if (u <= 0 || u >= 1) return;
        const x = at.x + dx * R, y = at.y + dy * R;
        if (fired <= i) { fired = i + 1; burst(x, y, scaleN(9), { color: pick(['#ffc979', '#ffffff']), min: 200, max: 520 }); }
        radial(c, x, y, R * (0.35 + 0.4 * u), '#ffc979', 0.9 * (1 - u));
        c.globalCompositeOperation = 'lighter'; c.globalAlpha = 1 - u; c.lineWidth = 4 * (1 - u) + 1; c.strokeStyle = '#fff';
        c.beginPath(); c.arc(x, y, R * 0.3 * E.out(u), 0, TAU); c.stroke();
        strokeBolts(c, [{ pts: bolt(x, y, x + rnd(-R, R) * 0.6, y - R * 0.5, R * 0.18), w: 0.6 }], (1 - u) * flashK());
      });
      const v = c01((t - 0.42) / 0.4);
      if (v > 0 && v < 1) { c.globalCompositeOperation = 'lighter'; c.globalAlpha = 1 - v; c.lineWidth = 3; c.strokeStyle = '#ffe14d'; c.beginPath(); for (let k = 0; k <= 40; k++) { const a = k / 40 * TAU * 2.2 + v * 6, r = R * 0.9 * (k / 40) * E.out(v); c.lineTo(at.x + Math.cos(a) * r, at.y + Math.sin(a) * r * 0.7); } c.stroke(); }
    } });
    return 160;
  }
  /* Gale Arrow: an arrow streaks in on a green spiral; a soft wind ring breaks off it. */
  function galearrow(at, o = {}) {
    const R = sizeOf(at), from = { x: at.x - R * 3.2, y: at.y + R * 0.4 };
    let hit = false;
    add({ dur: 0.9, draw(c, t) {
      const u = c01(t / 0.3), x = from.x + (at.x - from.x) * E.out(u), y = from.y + (at.y - from.y) * E.out(u), ang = Math.atan2(at.y - from.y, at.x - from.x);
      c.globalCompositeOperation = 'lighter';
      if (u < 1) {
        c.globalAlpha = 0.8; c.strokeStyle = '#5dffa0'; c.lineWidth = 2;
        c.beginPath(); for (let k = 0; k <= 24; k++) { const f = k / 24, px = from.x + (x - from.x) * f, py = from.y + (y - from.y) * f + Math.sin(f * 14 + t * 20) * R * 0.12 * (1 - f); c.lineTo(px, py); } c.stroke();
        c.save(); c.translate(x, y); c.rotate(ang); c.globalCompositeOperation = 'source-over'; c.globalAlpha = 1;
        c.fillStyle = '#eef2fa'; c.strokeStyle = '#14070f'; c.lineWidth = 1.4; c.beginPath(); c.moveTo(R * 0.22, 0); c.lineTo(-R * 0.05, -R * 0.07); c.lineTo(-R * 0.05, R * 0.07); c.closePath(); c.fill(); c.stroke();
        c.fillStyle = '#ff8cc0'; c.fillRect(-R * 0.55, -R * 0.06, R * 0.14, R * 0.12); c.restore();
      } else if (!hit) { hit = true; burst(at.x, at.y, scaleN(14), { color: pick(['#5dffa0', '#ffffff', '#ff8cc0']), min: 220, max: 600 }); }
      const v = c01((t - 0.3) / 0.6);
      if (v > 0 && v < 1) { c.globalAlpha = 1 - v; c.lineWidth = 3; c.strokeStyle = '#7dffb0'; c.beginPath(); c.ellipse(at.x, at.y, R * (0.3 + 1.1 * E.out(v)), R * (0.3 + 1.1 * E.out(v)) * 0.4, -0.2, 0, TAU); c.stroke(); radial(c, at.x, at.y, R, '#7dffc0', 0.3 * (1 - v)); }
    } });
    return 280;
  }
  /* Fastball: a stitched ball with a flame tail arcs in and bursts into fire. */
  function fastball(at, o = {}) {
    const R = sizeOf(at), from = { x: at.x - R * 3, y: at.y - R * 1.6 };
    let hit = false;
    add({ dur: 1.0, acc: 0, draw(c, t, dt, e) {
      const u = c01(t / 0.32);
      if (u < 1) {
        const x = from.x + (at.x - from.x) * u, y = from.y + (at.y - from.y) * u - Math.sin(u * Math.PI) * R * 0.5;
        e.acc += dt * 90; while (e.acc >= 1) { e.acc--; emit({ shape: 'flame', ramp: ['#ffe9a0', '#ffb03a', '#ff4a14', '#6a1208'], x, y, vx: rnd(-80, -20), vy: rnd(-40, 20), life: rnd(0.2, 0.4), size: rnd(7, 12), drag: 2 }); }
        c.globalCompositeOperation = 'source-over'; c.globalAlpha = 1; c.fillStyle = '#fff4f9'; c.strokeStyle = '#14070f'; c.lineWidth = 2;
        c.beginPath(); c.arc(x, y, R * 0.16, 0, TAU); c.fill(); c.stroke();
        c.strokeStyle = '#d2324f'; c.lineWidth = 1.4; c.beginPath(); c.arc(x - R * 0.2, y, R * 0.16, -0.7, 0.7); c.stroke(); c.beginPath(); c.arc(x + R * 0.2, y, R * 0.16, Math.PI - 0.7, Math.PI + 0.7); c.stroke();
      } else if (!hit) { hit = true; fire(at, { small: false }); burst(at.x, at.y, scaleN(18), { color: pick(['#ffe39a', '#ff6b3d']), min: 260, max: 700 }); }
    } });
    return 320;
  }
  /* Glacial Flèche: two thin thrust lines, each leaving a spinning snowflake. */
  function fleche(at, o = {}) {
    const R = sizeOf(at);
    add({ dur: 0.9, draw(c, t) {
      [0, 0.22].forEach((d, i) => {
        const u = c01((t - d) / 0.18), v = c01((t - d - 0.15) / 0.5), yy = at.y + (i ? R * 0.18 : -R * 0.12);
        c.globalCompositeOperation = 'lighter';
        if (u > 0 && u < 1) { c.globalAlpha = 1; c.lineWidth = 3; c.strokeStyle = '#ffffff'; c.beginPath(); c.moveTo(at.x - R * 2.2 * (1 - u) - R * 0.8, yy + R * 0.3); c.lineTo(at.x - R * 2.2 * (1 - u) + R * 0.3, yy); c.stroke(); }
        if (v > 0 && v < 1) {
          c.save(); c.translate(at.x + R * 0.2, yy); c.rotate(v * 3); c.globalAlpha = 1 - v; c.strokeStyle = '#9fe8ff'; c.lineWidth = 2.4; const L = R * (0.25 + 0.45 * E.out(v));
          for (let k = 0; k < 6; k++) { c.rotate(TAU / 6); c.beginPath(); c.moveTo(0, 0); c.lineTo(L, 0); c.moveTo(L * 0.6, 0); c.lineTo(L * 0.8, L * 0.15); c.moveTo(L * 0.6, 0); c.lineTo(L * 0.8, -L * 0.15); c.stroke(); }
          c.restore(); radial(c, at.x, yy, R * 0.8, '#7fe3ff', 0.4 * (1 - v));
        }
      });
    } });
    return 150;
  }
  /* Missile Salvo: small missiles arc in on smoke trails from below and pop one after another. */
  function salvo(at, o = {}) {
    const R = sizeOf(at), ms = Array.from({ length: phone() ? 4 : 6 }, (_, i) => ({ d: i * 0.07, sx: at.x + rnd(-R * 2.4, -R * 0.6), sy: at.y + R * rnd(1.6, 2.6), ox: rnd(-R, R) * 0.45, oy: rnd(-R, R) * 0.35, hit: false }));
    add({ dur: 1.0, draw(c, t) {
      ms.forEach(m => {
        const u = c01((t - m.d) / 0.34);
        if (u <= 0) return;
        const tx = at.x + m.ox, ty = at.y + m.oy, cx = (m.sx + tx) / 2, cy = Math.min(m.sy, ty) - R * 1.2;
        const q = (a, b, cc, k) => (1 - k) * (1 - k) * a + 2 * (1 - k) * k * b + k * k * cc;
        if (u < 1) {
          const x = q(m.sx, cx, tx, u), y = q(m.sy, cy, ty, u);
          emit({ shape: 'soft', x, y, vx: rnd(-20, 20), vy: rnd(-20, 10), life: rnd(0.4, 0.7), size: rnd(4, 7), size1: 12, color: '#c9d0dc', blend: 'source-over', alpha: 0.5 });
          radial(c, x, y, R * 0.12, '#ffd36b', 1);
        } else if (!m.hit) { m.hit = true; burst(tx, ty, scaleN(8), { color: pick(['#ffd36b', '#ff6b3d', '#fff']), min: 180, max: 480 }); radial(c, tx, ty, R * 0.6, '#ff8a3d', 0.8); }
      });
    } });
    return 360;
  }
  /* Lance of Justice: a golden spear falls point-first and a star of light opens where it lands. */
  function lance(at, o = {}) {
    const R = sizeOf(at);
    let hit = false;
    add({ dur: 1.0, draw(c, t) {
      const u = c01(t / 0.28);
      if (u < 1) {
        const y = at.y - R * 3 * (1 - E.in(u));
        c.save(); c.translate(at.x + R * 0.6 * (1 - u), y); c.rotate(0.35 * (1 - u) + Math.PI / 2); c.globalCompositeOperation = 'source-over'; c.globalAlpha = 1;
        c.fillStyle = '#8a5a2a'; c.fillRect(-R * 1.1, -R * 0.03, R * 0.9, R * 0.06);
        c.fillStyle = '#fff2b0'; c.strokeStyle = '#5a3a0a'; c.lineWidth = 1.5; c.beginPath(); c.moveTo(R * 0.25, 0); c.lineTo(-R * 0.2, -R * 0.09); c.lineTo(-R * 0.2, R * 0.09); c.closePath(); c.fill(); c.stroke(); c.restore();
      } else if (!hit) { hit = true; light(at, { holy: true }); }
      const v = c01((t - 0.28) / 0.6);
      if (v > 0 && v < 1) { c.save(); c.translate(at.x, at.y); c.rotate(v * 0.6); c.globalCompositeOperation = 'lighter'; c.globalAlpha = 1 - v; c.fillStyle = '#ffd36b'; const r = R * (0.4 + 1.1 * E.out(v)); c.beginPath(); for (let k = 0; k < 8; k++) { const rr = k % 2 ? r * 0.25 : r, a = k / 8 * TAU; c.lineTo(Math.cos(a) * rr, Math.sin(a) * rr); } c.closePath(); c.fill(); c.restore(); }
    } });
    return 300;
  }
  /* Three Heads: three pairs of fanged arcs snap shut one after another, embers flying. */
  function bite(at, o = {}) {
    const R = sizeOf(at), spots = [[-0.4, -0.2], [0.35, -0.3], [0, 0.25]];
    let n = 0;
    add({ dur: 0.85, draw(c, t) {
      spots.forEach(([dx, dy], i) => {
        const u = c01((t - i * 0.14) / 0.24);
        if (u <= 0 || u >= 1) return;
        const x = at.x + dx * R, y = at.y + dy * R, gap = R * 0.35 * (1 - E.out(c01(u / 0.6))), f = u > 0.6 ? 1 - (u - 0.6) / 0.4 : 1;
        if (n <= i && u > 0.55) { n = i + 1; burst(x, y, scaleN(8), { color: pick(['#ffb347', '#ff6b3d']), min: 150, max: 420 }); }
        c.globalCompositeOperation = 'source-over'; c.globalAlpha = f; c.fillStyle = '#fff'; c.strokeStyle = '#14070f'; c.lineWidth = 1.5;
        [-1, 1].forEach(k => { c.beginPath(); c.moveTo(x - R * 0.3, y + k * gap); for (let j = 0; j < 4; j++) { const xx = x - R * 0.3 + j * R * 0.2; c.lineTo(xx + R * 0.1, y + k * gap - k * R * 0.14); c.lineTo(xx + R * 0.2, y + k * gap); } c.closePath(); c.fill(); c.stroke(); });
        radial(c, x, y, R * 0.5, '#ff6b3d', 0.5 * f);
      });
    } });
    return 180;
  }
  /* Haymaker: one heavy impact, a red shockwave ring along the floor and the ground cracking. */
  function haymaker(at, o = {}) {
    const R = sizeOf(at) * 1.1, cracks = Array.from({ length: 7 }, () => ({ a: rnd(0, TAU), l: rnd(0.6, 1.3) }));
    burst(at.x, at.y, scaleN(26), { color: pick(['#ffc979', '#ffffff', '#ff5b5b']), min: 300, max: 900, p: { size: 2.6 } });
    add({ dur: 0.9, draw(c, t) {
      const u = c01(t / 0.6), f = 1 - c01((t - 0.4) / 0.5);
      radial(c, at.x, at.y, R * (0.5 + u), '#ff5b5b', 0.7 * (1 - u));
      c.globalCompositeOperation = 'lighter'; c.globalAlpha = 1 - u; c.lineWidth = 7 * (1 - u) + 1; c.strokeStyle = '#ff8a6b';
      c.beginPath(); c.ellipse(at.x, at.y + R * 0.5, R * 2 * E.out(u), R * 0.5 * E.out(u), 0, 0, TAU); c.stroke();
      c.globalCompositeOperation = 'source-over'; c.globalAlpha = 0.8 * f; c.strokeStyle = '#14070f'; c.lineWidth = 2.4;
      cracks.forEach(k => { c.beginPath(); c.moveTo(at.x, at.y); const L = R * k.l * E.out(c01(t / 0.2)); c.lineTo(at.x + Math.cos(k.a) * L * 0.5 + rnd(-2, 2), at.y + Math.sin(k.a) * L * 0.5); c.lineTo(at.x + Math.cos(k.a + 0.2) * L, at.y + Math.sin(k.a + 0.2) * L); c.stroke(); });
    } });
    return 60;
  }
  /* Moonlit Static: a pale moon rises over the target and drops violet-gold arcs onto it. */
  function moonstatic(at, o = {}) {
    const R = sizeOf(at), my = at.y - R * 1.2;
    add({ dur: 1.0, bt: 0, bolts: null, draw(c, t, dt, e) {
      const u = E.out(c01(t / 0.35)), f = t > 0.7 ? 1 - (t - 0.7) / 0.3 : 1;
      c.globalCompositeOperation = 'lighter'; radial(c, at.x, my, R * 0.9 * u, '#c9a8ff', 0.5 * f);
      c.globalCompositeOperation = 'source-over'; c.globalAlpha = 0.95 * f; c.fillStyle = '#f2ecff';
      c.beginPath(); c.arc(at.x, my, R * 0.36 * u, 0, TAU); c.fill(); c.globalAlpha = f; c.fillStyle = '#1a1030'; c.beginPath(); c.arc(at.x + R * 0.14 * u, my - R * 0.06, R * 0.3 * u, 0, TAU); c.fill();
      e.bt -= dt;
      if (t > 0.25 && t < 0.75 && e.bt <= 0) { e.bt = 0.09; e.bolts = boltTree(at.x + rnd(-R, R) * 0.2, my + R * 0.3, at.x + rnd(-R, R) * 0.4, at.y + rnd(-R, R) * 0.2); e.ba = 1; }
      if (e.bolts) { e.ba -= dt * 8; if (e.ba > 0) strokeBolts(c, e.bolts, e.ba * flashK()); }
    } });
    return 300;
  }
  /* Black Tortoise: hexagon plates lock together into a shell over the ally, rimmed with frost. */
  function shell(at, o = {}) {
    const R = sizeOf(at) * 1.05, cells = [];
    for (let row = -1; row <= 1; row++) for (let col = -2; col <= 2; col++) { if (Math.abs(row) === 1 && Math.abs(col) === 2) continue; cells.push({ x: col * 0.42 + (row % 2 ? 0.21 : 0), y: row * 0.36, d: rnd(0, 0.25) }); }
    add({ dur: 1.1, draw(c, t) {
      const f = t > 0.8 ? 1 - (t - 0.8) / 0.3 : 1;
      cells.forEach(k => {
        const u = E.back(c01((t - k.d) / 0.3)); if (u <= 0) return;
        c.save(); c.translate(at.x + k.x * R, at.y - R * 0.1 + k.y * R); c.scale(u, u); c.globalCompositeOperation = 'lighter'; c.globalAlpha = 0.55 * f;
        c.beginPath(); for (let j = 0; j < 6; j++) { const a = j / 6 * TAU + Math.PI / 6; c.lineTo(Math.cos(a) * R * 0.22, Math.sin(a) * R * 0.22); } c.closePath();
        c.fillStyle = 'rgba(95,224,176,.35)'; c.fill(); c.lineWidth = 2; c.strokeStyle = '#9fe8ff'; c.stroke(); c.restore();
      });
      radial(c, at.x, at.y, R * 1.3, '#5fe0b0', 0.25 * f);
    } });
    return 200;
  }
  /* Goblin Fire: blue dokkaebi wisps circle the target, then dive into it. */
  function goblinfire(at, o = {}) {
    const R = sizeOf(at), n = phone() ? 3 : 5, ws = Array.from({ length: n }, (_, i) => ({ ph: i / n * TAU }));
    let hit = false;
    add({ dur: 1.0, acc: 0, draw(c, t, dt, e) {
      const u = c01((t - 0.35) / 0.25), r = R * 1.1 * (1 - E.in(u));
      ws.forEach(w => { const a = w.ph + t * 8, x = at.x + Math.cos(a) * r, y = at.y + Math.sin(a) * r * 0.5; radial(c, x, y, R * 0.26, '#5ab4ff', 0.9); radial(c, x, y, R * 0.1, '#ffffff', 1); c.globalCompositeOperation = 'source-over'; c.globalAlpha = 0.9; c.fillStyle = '#14070f'; c.fillRect(x - R * 0.06, y - R * 0.02, R * 0.03, R * 0.04); c.fillRect(x + R * 0.03, y - R * 0.02, R * 0.03, R * 0.04); });
      if (u >= 1 && !hit) { hit = true; burst(at.x, at.y, scaleN(16), { color: pick(['#5ab4ff', '#bfe4ff', '#ffffff']), min: 200, max: 560 }); }
      if (u >= 1) radial(c, at.x, at.y, R * 1.1, '#5ab4ff', 0.6 * (1 - c01((t - 0.6) / 0.4)));
    } });
    return 560;
  }
  /* Focus Pull: aperture blades close on the target, a shutter flash, and focus marks at the corners. */
  function aperture(at, o = {}) {
    const R = sizeOf(at) * 0.9;
    add({ dur: 0.9, draw(c, t) {
      const u = E.inOut(c01(t / 0.35)), f = t > 0.6 ? 1 - (t - 0.6) / 0.3 : 1;
      // The iris: six blades inside a lens ring, closing from wide open to a small hole.
      c.save(); c.beginPath(); c.arc(at.x, at.y, R, 0, TAU); c.clip();
      c.translate(at.x, at.y); c.globalCompositeOperation = 'source-over'; c.globalAlpha = 0.55 * f; c.fillStyle = '#14070f'; c.strokeStyle = '#ffe6a8'; c.lineWidth = 1.4;
      const hole = R * (0.95 - 0.7 * u);
      for (let k = 0; k < 6; k++) { c.save(); c.rotate(k / 6 * TAU + u * 0.9); c.beginPath(); c.moveTo(hole, -R * 0.1); c.lineTo(R * 1.1, -R * 0.75); c.lineTo(R * 1.1, R * 0.4); c.lineTo(hole * 0.9, R * 0.5); c.closePath(); c.fill(); c.stroke(); c.restore(); }
      c.restore();
      c.globalCompositeOperation = 'lighter'; c.globalAlpha = f; c.lineWidth = 2.5; c.strokeStyle = '#ffe6a8'; c.beginPath(); c.arc(at.x, at.y, R, 0, TAU); c.stroke();
      if (t > 0.33 && t < 0.5) radial(c, at.x, at.y, R * 1.3, '#ffffff', (1 - (t - 0.33) / 0.17) * 0.9 * flashK());
      c.globalAlpha = f; c.strokeStyle = '#ff4f9e'; c.lineWidth = 3; const b = R * 0.8, k2 = R * 0.22;
      [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([sx, sy]) => { c.beginPath(); c.moveTo(at.x + sx * b, at.y + sy * b - sy * k2); c.lineTo(at.x + sx * b, at.y + sy * b); c.lineTo(at.x + sx * b - sx * k2, at.y + sy * b); c.stroke(); });
    } });
    return 330;
  }
  /* Waning Moon: a dark crescent blade sweeps across and leaves violet motes. */
  function crescentFx(at, o = {}) {
    const R = sizeOf(at) * 1.1;
    let hit = false;
    add({ dur: 0.7, draw(c, t) {
      const u = c01(t / 0.32), f = 1 - c01((t - 0.3) / 0.4);
      c.globalCompositeOperation = 'lighter'; c.globalAlpha = f;
      crescent(c, at.x, at.y, R * 0.8, -2.4 + u * 1.6, -0.6 + u * 1.6, R * 0.32, 'rgba(192,123,255,.85)', '#ffffff');
      radial(c, at.x, at.y, R * 0.9, '#7a2bd0', 0.45 * f);
      if (!hit && u >= 1) { hit = true; for (let k = 0; k < scaleN(14); k++) emit({ shape: 'soft', x: at.x + rnd(-R, R) * 0.6, y: at.y + rnd(-R, R) * 0.4, vx: rnd(-40, 40), vy: rnd(-90, -30), life: rnd(0.5, 0.9), size: rnd(4, 9), color: pick(['#c07bff', '#7a2bd0', '#ff5ab0']) }); }
    } });
    return 200;
  }
  /* Serpent Coil: an ice serpent spirals tight around the target and squeezes. */
  function serpent(at, o = {}) {
    const R = sizeOf(at);
    add({ dur: 1.0, draw(c, t) {
      const u = E.out(c01(t / 0.5)), f = t > 0.7 ? 1 - (t - 0.7) / 0.3 : 1, sq = 1 - 0.25 * c01((t - 0.5) / 0.2);
      c.globalCompositeOperation = 'lighter'; c.globalAlpha = f; c.lineCap = 'round';
      [[9, 'rgba(127,227,255,.45)'], [4, '#bff6ff']].forEach(([w, col]) => { c.lineWidth = w; c.strokeStyle = col; c.beginPath(); const N = 60; for (let k = 0; k <= N * u; k++) { const a = k / N * TAU * 2.4 + t * 2, r = R * 0.95 * sq, y = at.y + R * 0.7 - k / N * R * 1.4; c.lineTo(at.x + Math.cos(a) * r, y + Math.sin(a) * r * 0.25); } c.stroke(); });
      radial(c, at.x, at.y, R, '#7fe3ff', 0.3 * f);
    } });
    return 350;
  }
  /* Goblin Club: a huge club slams down, stars spin out. */
  function club(at, o = {}) {
    const R = sizeOf(at) * 1.2;
    let hit = false;
    add({ dur: 0.9, draw(c, t) {
      const u = c01(t / 0.24), f = 1 - c01((t - 0.5) / 0.4);
      if (u < 1) {
        c.save(); c.translate(at.x + R * 0.9, at.y + R * 0.6); c.rotate(-2.2 + u * 1.7); c.globalCompositeOperation = 'source-over'; c.globalAlpha = 1;
        c.fillStyle = '#c98a3a'; c.strokeStyle = '#14070f'; c.lineWidth = 2.4; c.beginPath(); c.moveTo(0, -R * 0.06); c.lineTo(R * 1.2, -R * 0.2); c.quadraticCurveTo(R * 1.45, 0, R * 1.2, R * 0.2); c.lineTo(0, R * 0.06); c.closePath(); c.fill(); c.stroke(); c.restore();
      } else if (!hit) { hit = true; strike(at, { crit: true }); }
      if (u >= 1) for (let k = 0; k < 3; k++) { const a = t * 7 + k * TAU / 3; c.save(); c.translate(at.x + Math.cos(a) * R * 0.5, at.y - R * 0.5 + Math.sin(a) * R * 0.15); c.globalCompositeOperation = 'lighter'; c.globalAlpha = f; c.fillStyle = '#ffe14d'; c.beginPath(); for (let j = 0; j < 10; j++) { const rr = j % 2 ? R * 0.04 : R * 0.1, aa = j / 10 * TAU; c.lineTo(Math.cos(aa) * rr, Math.sin(aa) * rr); } c.closePath(); c.fill(); c.restore(); }
    } });
    return 240;
  }
  /* Clear Sight: an eye of light opens over the target and an arrow of light flies through its pupil. */
  function theia(at, o = {}) {
    const R = sizeOf(at);
    let hit = false;
    add({ dur: 0.95, draw(c, t) {
      const u = E.out(c01(t / 0.3)), f = t > 0.65 ? 1 - (t - 0.65) / 0.3 : 1;
      c.globalCompositeOperation = 'lighter'; c.globalAlpha = f; c.lineWidth = 3; c.strokeStyle = '#fff2b0';
      c.beginPath(); c.moveTo(at.x - R, at.y); c.quadraticCurveTo(at.x, at.y - R * 0.8 * u, at.x + R, at.y); c.quadraticCurveTo(at.x, at.y + R * 0.8 * u, at.x - R, at.y); c.stroke();
      radial(c, at.x, at.y, R * 0.35 * u, '#ffd36b', f);
      const v = c01((t - 0.25) / 0.2);
      if (v > 0 && v < 1) { c.globalAlpha = 1; c.lineWidth = 3; c.strokeStyle = '#ffffff'; const x = at.x - R * 2.6 + R * 2.6 * v; c.beginPath(); c.moveTo(x - R * 0.8, at.y + R * 0.2); c.lineTo(x, at.y); c.stroke(); }
      if (v >= 1 && !hit) { hit = true; light(at, { small: true }); }
    } });
    return 290;
  }

  /* ── Cut-in ambience (battle.js theurgyCut): the element's particles streaming across the whole canvas for dur seconds,
     mostly along the cut-in's diagonal. kind: an element, or 'sun' (Solar's gold). Returns 0; nothing in reduced motion. ── */
  const STREAM = {
    sun: { cols: ['#fff2b0', '#ffd36b', '#ffffff', '#ffb3d6'], shapes: ['glow', 'star', 'glow'], vx: [-60, 60], vy: [-180, -60], size: [2.5, 7], life: [0.8, 1.4], rate: 70 },
    light: { cols: ['#ffffff', '#fff2b0', '#ffe6a8'], shapes: ['star', 'glow'], vx: [-50, 50], vy: [-140, -40], size: [2, 6], life: [0.7, 1.3], rate: 60 },
    ice: { cols: ['rgba(220,248,255,.9)', 'rgba(170,236,255,.85)'], shapes: ['poly', 'poly', 'glow'], vx: [-300, -160], vy: [140, 280], size: [5, 13], life: [0.8, 1.4], rate: 45 },
    elec: { cols: ['#fff6b0', '#ffe14d', '#c9a8ff'], shapes: ['spark'], vx: [-900, 900], vy: [-500, 500], size: [1.2, 2.6], life: [0.12, 0.3], rate: 90, streak: 0.04, bolts: true },
    wind: { cols: ['#e8fff2', '#7dffb0', '#ffffff'], shapes: ['spark'], vx: [-1400, -900], vy: [-160, 40], size: [1, 2.2], life: [0.35, 0.7], rate: 70, streak: 0.07 },
    fire: { cols: ['#ffb347', '#ff6b3d', '#ffe39a'], shapes: ['glow'], vx: [-70, 70], vy: [-300, -140], size: [2, 6], life: [0.6, 1.1], rate: 80 },
    dark: { cols: ['#c07bff', '#7a2bd0', '#ff5ab0'], shapes: ['glow', 'soft'], vx: [-90, 90], vy: [-90, 90], size: [3, 9], life: [0.7, 1.2], rate: 50 },
    almighty: { cols: ['#ffb3d6', '#ffffff', '#ff8cc0'], shapes: ['glow', 'star'], vx: [-120, 120], vy: [-160, 0], size: [2.5, 6], life: [0.6, 1.1], rate: 60 },
    heal: { cols: ['#c8ffe4', '#7dffc0', '#ffffff'], shapes: ['glow', 'plus'], vx: [-30, 30], vy: [-160, -60], size: [3, 7], life: [0.8, 1.3], rate: 55 },
    phys: { cols: ['#ffffff', '#e8e8f0', '#ffe4a8'], shapes: ['spark'], vx: [-1300, -900], vy: [200, 420], size: [1.2, 2.4], life: [0.25, 0.5], rate: 70, streak: 0.06 },
    // Bond cut-ins (battle.js bondCut): Jungwon's jade, Nike's star, and hearts for a romance version.
    jade: { cols: ['#5fe0b0', '#9fe8ff', '#ffffff'], shapes: ['poly', 'glow'], vx: [-260, -120], vy: [100, 240], size: [4, 10], life: [0.8, 1.4], rate: 40 },
    star: { cols: ['#ff8cc0', '#ffd36b', '#ffffff'], shapes: ['star', 'star', 'glow'], vx: [-90, 90], vy: [-170, -40], size: [3, 8], life: [0.7, 1.3], rate: 55 },
    love: { cols: ['#ff8cc0', '#ffb3d6', '#ff4f9e'], shapes: ['heart', 'glow'], vx: [-40, 40], vy: [-120, -40], size: [10, 18], life: [1, 1.6], rate: 22 }
  };
  function stream(kind, o = {}) {
    if (!ctx || reduced()) return 0;
    const S = STREAM[kind] || STREAM[{ slash: 'phys', strike: 'phys', pierce: 'phys' }[kind]] || STREAM.almighty;
    const dur = o.dur || 2.4, k = (phone() ? 0.5 : 1) * Q().n * (o.n || 1);
    const shard = () => { const a = rnd(0.7, 1.4); return [[0, -1], [0.32 * a, 0.1], [0, 1], [-0.28 * a, 0]]; };
    add({ dur, acc: 0, bt: 0, bolts: null, draw(c, t, dt, e) {
      const fade = t > dur - 0.4 ? Math.max(0, (dur - t) / 0.4) : 1;
      e.acc += dt * S.rate * k * fade;
      while (e.acc >= 1) {
        e.acc--;
        const shape = pick(S.shapes);
        // Spawn across the frame; things that travel left come in from the right edge, risers from the bottom.
        const x = S.vx[1] < -400 ? W + rnd(0, 60) : rnd(-20, W + 20), y = S.vy[1] < -30 ? rnd(H * 0.35, H + 20) : S.vy[0] > 60 ? rnd(-40, H * 0.6) : rnd(0, H);
        emit({ shape, pts: shape === 'poly' ? shard() : undefined, x, y, vx: rnd(S.vx[0], S.vx[1]), vy: rnd(S.vy[0], S.vy[1]), life: rnd(S.life[0], S.life[1]),
          size: rnd(S.size[0], S.size[1]), color: pick(S.cols), fill: shape === 'poly' ? pick(S.cols) : undefined, rot: rnd(0, TAU), vr: rnd(-3, 3),
          streak: S.streak, fadeIn: 0.12, ph: rnd(0, TAU), blend: shape === 'poly' || shape === 'heart' ? 'source-over' : 'lighter' });
      }
      if (S.bolts) {
        e.bt -= dt;
        if (e.bt <= 0) { e.bt = rnd(0.18, 0.4); const x1 = rnd(W * 0.1, W * 0.9); e.bolts = boltTree(x1, -10, x1 + rnd(-W * 0.25, W * 0.25), rnd(H * 0.4, H * 0.9)); e.ba = 1; }
        if (e.bolts) { e.ba -= dt * 7; if (e.ba > 0) strokeBolts(c, e.bolts, e.ba * 0.55 * fade * flashK()); }
      }
    } });
    return 0;
  }

  /* ── Skill-effect sheets (Kat's art, FEMC-ART-TODO 5F) ──
     art/fx/index.js (tools/femc-fx.py) lists the sheets that exist: window.FEMC_FX_ART[name] = { cell, frames, peak,
     blend, v, loop?, tint?, scale? } (scale: the tool padded the frames, so draw them that much bigger). A sheet is 3 x 2 frames; play() uses one only once its image has loaded, so a missing file,
     a 404 or a sheet still loading falls through to the code effect unchanged. Reduced motion never reaches here. */
  const FX_DIR = 'assets/femc/battle/art/fx/';
  const ART = () => window.FEMC_FX_ART || {};
  const artSrc = name => { const a = ART()[name]; return a ? a.src || `${FX_DIR}${name}.webp?v=${a.v || 1}` : null; };
  function preloadArt() { Object.keys(ART()).forEach(n => preload(artSrc(n))); }
  function artImg(name) {
    const src = artSrc(name);
    if (!src) return null;
    const im = imgCache.get(src);
    if (!im) { preload(src); return null; }
    return ready(im) ? im : null;
  }
  const hasArt = name => !reduced() && !!artImg(name);
  // A kind's sheets in order of preference (fear plays its own sheet, then borrows Dark's; the code effect after that).
  const ART_KINDS = { fear: ['fear', 'dark'], freeze: ['freeze', 'ice'], shock: ['shock', 'elec'], shatter: ['shatter', 'ice'] };
  const ART_OK = new Set(['fire', 'ice', 'elec', 'wind', 'light', 'dark', 'almighty', 'slash', 'strike', 'pierce', 'heal', 'cure', 'revive', 'buff',
    'charm', 'poison', 'distress', 'bind', 'disorient', 'fear', 'freeze', 'shock', 'shatter', 'crit', 'weak', 'theurgy-burst']);
  const SHEET_BIG = new Set(['crit', 'weak', 'theurgy-burst', 'allout-cloud']);
  const BORROWED = { fear: 0.6, freeze: 0.7, shock: 0.6 }; // a borrowed sheet plays at the code effect's small size
  /* The sheet a play(kind, at, o) would use right now, or null (the code effect plays). */
  function artFor(kind, o = {}) {
    if (reduced() || !ART_OK.has(kind)) return null;
    let names = ART_KINDS[kind] || [kind];
    if (kind === 'buff') names = [(o.dir || 1) < 0 ? 'debuff' : 'buff'];
    if (o.insta) names = kind === 'light' ? ['hama', 'light'] : ['mudo', 'dark'];
    return names.find(n => artImg(n)) || null;
  }
  /* Tinted copies (buff per stat; any sheet the index marks `tint`, coloured by o.tint), made once: multiply keeps the art's shading, then its own alpha. */
  const tints = new Map();
  function tinted(im, name, col) {
    const key = name + col;
    let t = tints.get(key);
    if (t) return t;
    t = mk(im.naturalWidth, im.naturalHeight);
    const g = t.getContext('2d');
    g.drawImage(im, 0, 0);
    g.globalCompositeOperation = 'multiply'; g.fillStyle = col; g.fillRect(0, 0, t.width, t.height);
    g.globalCompositeOperation = 'destination-in'; g.drawImage(im, 0, 0);
    tints.set(key, t);
    return t;
  }
  const FD = 0.07; // seconds per frame at 1x (the loop's dt carries battle speed)
  const sheetLog = []; // test hook: one entry per sheet played ({ name, frames drawn, peak alpha, size })
  function sheet(name, at, o = {}, kind = name) {
    const im = artImg(name), meta = ART()[name] || {};
    const n = meta.frames || 6, peak = meta.peak != null ? meta.peak : 2, cols = 3, rows = Math.ceil(n / cols);
    const fd = (meta.fd || FD) * (o.slow || 1);
    const big = at.big || SHEET_BIG.has(name);
    let side = sizeOf(at) * 2.4 * (meta.scale || 1) * (big ? 2.2 : 1) * (o.small ? 0.6 : 1) * (kind !== name ? BORROWED[kind] || 1 : 1);
    if (calm && (name === 'crit' || name === 'theurgy-burst')) side *= 0.75;
    side = Math.min(side, Math.max(W, H) * 1.2 * (meta.scale || 1));
    const col = meta.tint ? (name === 'buff' ? STAT_COL[o.stat] || '#ffd36b' : o.tint) : null; // the buff sheet is grey: always coloured
    const src = col ? tinted(im, name, col) : im;
    const sw = (src.naturalWidth || src.width) / cols, sh = (src.naturalHeight || src.height) / rows;
    const log = { name, kind, frames: [], peakAlpha: 0, side: Math.round(side), tint: col || null };
    sheetLog.push(log); if (sheetLog.length > 40) sheetLog.shift();
    add({ dur: n * fd, delay: o.delay || 0, draw(c, t) {
      const f = Math.min(n - 1, Math.floor(t / fd));
      // Reduce flashes: the peak frames (2-4) at 0.45; the last frame fades out.
      let a = calm && f >= 1 && f <= 3 ? 0.45 : 1;
      if (f === n - 1) a *= c01(1 - (t - f * fd) / fd);
      if (log.frames[log.frames.length - 1] !== f) log.frames.push(f);
      if (f === peak) log.peakAlpha = Math.max(log.peakAlpha, a);
      if (a <= 0.01) return;
      c.globalCompositeOperation = meta.blend || 'lighter'; c.globalAlpha = a;
      c.drawImage(src, (f % cols) * sw, Math.floor(f / cols) * sh, sw, sh, at.x - side / 2, at.y - side / 2, side, side);
    } });
    // A few of the code's sparks on top at the impact (not in Performance mode).
    if (pinned == null && !meta.loop && name !== 'buff' && name !== 'debuff')
      add({ dur: 0.01, delay: (o.delay || 0) + peak * fd, draw() { burst(at.x, at.y, phone() ? 5 : 8, { color: col || COLORS[kind] || '#fff', min: 120, max: 420 }); } });
    return (o.delay || 0) * 1000 + peak * fd * 1000;
  }

  /* A soft colored flash: the reduced-motion version of everything. */
  function simple(at, color) {
    const R = sizeOf(at);
    add({ dur: 0.35, draw(c, t) { radial(c, at.x, at.y, R * 1.3, color || '#ffffff', 0.7 * (1 - t / 0.35)); } });
    return 0;
  }

  const COLORS = { fire: '#ff6b3d', ice: '#7fe3ff', elec: '#ffe14d', wind: '#5dffa0', light: '#fff2b0', dark: '#c07bff', almighty: '#ff8cc0', slash: '#e8e8f0', strike: '#ffc979', pierce: '#9fd3ff', heal: '#7dffc0', charm: '#ff7ac8', poison: '#b36bff', fear: '#a98bff', distress: '#ff9a3d', freeze: '#9fe8ff', shock: '#ffe14d', bind: '#ffd36b', cure: '#ffffff', buff: '#6ab0ff', debuff: '#ff5a7a',
    suzu: '#ffd36b', kunai: '#9fd3ff', kitsune: '#7fe3ff', veneer: '#ff8cc0', bluff: '#ffb3e6', flank: '#ff4f9e', disorient: '#ffb3e6',
    corkscrew: '#ffe14d', galearrow: '#5dffa0', fastball: '#ff6b3d', fleche: '#9fe8ff', salvo: '#ffd36b', lance: '#fff2b0', bite: '#ff6b3d', haymaker: '#ff5b5b',
    moonstatic: '#c9a8ff', shell: '#5fe0b0', goblinfire: '#5ab4ff', aperture: '#ffe6a8', crescent: '#c07bff', serpent: '#7fe3ff', club: '#ffc979', theia: '#fff2b0' };
  /* play(kind, at, opts) → milliseconds (at 1x) until the effect "lands", so the battle can time its damage numbers. */
  function play(kind, at, o = {}) {
    if (!ctx || !at) return 0;
    // o.track(): a fresh box for the target each frame, so long effects follow a Shadow if the field shifts.
    if (o.track && !reduced()) { at = Object.assign({}, at); const tr = o.track; add({ dur: 1.3, draw() { const b = tr(); if (b) { const dx = b.x - at.x, dy = b.y - at.y; at.x = b.x; at.y = b.y; if (at.shift) at.shift(dx, dy); } } }); }
    if (reduced()) return simple(at, COLORS[kind] || '#fff');
    const art = artFor(kind, o);
    if (art) return sheet(art, at, o, kind);
    if (kind === 'crit' || kind === 'weak' || kind === 'theurgy-burst') return 0; // sheet-only kinds: callers check hasArt first
    switch (kind) {
      case 'fire': return fire(at, o);
      case 'ice': return ice(at, o);
      case 'elec': return elec(at, o);
      case 'wind': return wind(at, o);
      case 'light': return light(at, o);
      case 'dark': return dark(at, o);
      case 'almighty': return almighty(at, o);
      case 'slash': return slash(at, o);
      case 'strike': return strike(at, o);
      case 'pierce': return pierce(at, o);
      case 'rope': return rope(at, o);
      case 'heal': return heal(at, o);
      case 'cure': return heal(at, Object.assign({ cure: true }, o));
      case 'revive': light(at, { small: true, holy: true }); return heal(at, o);
      case 'buff': return buff(at, o);
      case 'charm': return charm(at, o);
      case 'poison': return poison(at, o);
      case 'fear': return dark(at, { small: true });
      case 'distress': return distress(at, o);
      case 'freeze': return ice(at, { hold: true, small: true });
      case 'shatter': return ice(at, {});
      case 'shock': return elec(at, { small: true });
      case 'bind': return bindFx(at, o);
      case 'suzu': return suzu(at, o);
      case 'kunai': return kunai(at, o);
      case 'kitsune': return kitsune(at, o);
      case 'veneer': return veneer(at, o);
      case 'bluff': return bluff(at, o);
      case 'flank': return flank(at, o);
      case 'corkscrew': return corkscrew(at, o);
      case 'galearrow': return galearrow(at, o);
      case 'fastball': return fastball(at, o);
      case 'fleche': return fleche(at, o);
      case 'salvo': return salvo(at, o);
      case 'lance': return lance(at, o);
      case 'bite': return bite(at, o);
      case 'haymaker': return haymaker(at, o);
      case 'moonstatic': return moonstatic(at, o);
      case 'shell': return shell(at, o);
      case 'goblinfire': return goblinfire(at, o);
      case 'aperture': return aperture(at, o);
      case 'crescent': return crescentFx(at, o);
      case 'serpent': return serpent(at, o);
      case 'club': return club(at, o);
      case 'theia': return theia(at, o);
      default: return simple(at, COLORS[kind]);
    }
  }

  /* ── Shadow death: black ash drifting up, the mask falls last ── */
  function sample(img, rect, n) {
    try {
      if (!img || !img.complete || !img.naturalWidth) return null;
      const sw = 72, sh = Math.max(8, Math.round(sw * rect.h / rect.w));
      const oc = mk(sw, sh), g = oc.getContext('2d', { willReadFrequently: true });
      g.drawImage(img, 0, 0, sw, sh);
      const d = g.getImageData(0, 0, sw, sh).data, pts = [];
      for (let y = 0; y < sh; y++) for (let x = 0; x < sw; x++) {
        const i = (y * sw + x) * 4;
        if (d[i + 3] > 110) pts.push({ x: rect.x + ((x + Math.random()) / sw) * rect.w, y: rect.y + ((y + Math.random()) / sh) * rect.h, lum: (d[i] + d[i + 1] + d[i + 2]) / 765 });
      }
      for (let i = pts.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [pts[i], pts[j]] = [pts[j], pts[i]]; }
      return pts.slice(0, n);
    } catch (e) { return null; }
  }
  /* rect: the Shadow's art box in canvas coordinates. Returns the dissolve time in ms (at 1x) for the CSS sweep. */
  function ash(rect, img, o = {}) {
    if (!ctx || reduced()) return 0;
    const n = phone() ? 170 : 340, sweep = 0.6;
    let pts = sample(img, rect, n);
    if (!pts || pts.length < 20) pts = Array.from({ length: n }, () => { const a = rnd(0, TAU), r = Math.sqrt(Math.random()); return { x: rect.x + rect.w / 2 + Math.cos(a) * r * rect.w * 0.4, y: rect.y + rect.h * 0.55 + Math.sin(a) * r * rect.h * 0.4, lum: 0.1 }; });
    pts.forEach(p => {
      const rel = (p.y - rect.y) / rect.h, ember = p.lum > 0.45 || Math.random() < 0.1;
      emit({ shape: ember ? 'glow' : 'ash', x: p.x, y: p.y, vx: rnd(-30, 30), vy: rnd(-60, -20), ax: rnd(0, 40), ay: -70, drag: 0.8, rot: rnd(0, TAU), vr: rnd(-5, 5),
        life: rnd(0.9, 1.6), size: ember ? rnd(1.6, 3.2) : rnd(2.4, 5.2), size1: ember ? 0.6 : rnd(1, 2.2), delay: rel * sweep + rnd(0, 0.1),
        color: ember ? pick(['#6fa8ff', '#c07bff', '#ff5ab0']) : pick(['#0d0812', '#0d0812', '#1e1428', '#3a2a48']), blend: ember ? 'lighter' : 'source-over', alpha: ember ? 0.9 : 0.95 });
    });
    if (!o.noMask) {
      const s = Math.max(10, Math.min(24, Math.min(rect.w, rect.h) * 0.12));
      const floor = rect.y + rect.h - s * 0.6;
      const m = { x: rect.x + rect.w / 2, y: rect.y + rect.h * 0.34, vx: rnd(-40, 40), vy: -160, rot: 0, vr: rnd(-4, 4), bounced: false };
      add({ dur: 1.7, delay: sweep * 0.75, draw(c, t, dt) {
        m.vy += 1300 * dt; m.x += m.vx * dt; m.y += m.vy * dt; m.rot += m.vr * dt;
        if (m.y > floor) { m.y = floor; if (!m.bounced) { m.bounced = true; m.vy *= -0.32; m.vx *= 0.5; m.vr *= 0.4; burst(m.x, floor + s * 0.4, scaleN(6), { color: '#9fd3ff', ang: -Math.PI / 2, spread: 1.2, min: 60, max: 160, p: { size: 1.6 } }); } else { m.vy = 0; m.vx *= 0.9; m.vr *= 0.8; } }
        const a = t < 1.05 ? 1 : 1 - (t - 1.05) / 0.65;
        if (t < 0.15) radial(c, m.x, m.y, s * 3, '#6fa8ff', 0.6 * (1 - t / 0.15));
        drawMask(c, m.x, m.y, s, m.rot, Math.max(0, a));
        if (t > 1.0) for (let i = 0; i < 2; i++) if (Math.random() < 0.5) emit({ shape: 'ash', color: '#4a6cc8', blend: 'source-over', x: m.x + rnd(-s, s), y: m.y + rnd(-s, s * 0.5), vx: rnd(-10, 10), vy: rnd(-50, -20), ay: -30, life: 0.7, size: rnd(1.5, 3), rot: rnd(0, 6), vr: 3, alpha: 0.8 });
      } });
    }
    add({ dur: 0.3, draw(c, t) { radial(c, rect.x + rect.w / 2, rect.y + rect.h * 0.5, Math.max(rect.w, rect.h) * 0.6, '#6fa8ff', 0.35 * (1 - t / 0.3)); } });
    return sweep * 1000 + 100;
  }

  /* ── Evoker: a rough snapshot of the battle, then glass that breaks ── */
  function coverDraw(g, im, x, y, w, h) {
    const r = Math.max(w / im.naturalWidth, h / im.naturalHeight), iw = im.naturalWidth * r, ih = im.naturalHeight * r;
    g.drawImage(im, x + (w - iw) / 2, y + (h - ih) / 2, iw, ih);
  }
  /* Draws the battle (background, Shadows, party cards) plus extra layers into a canvas.
     extras: [{ el, clip: [[x%, y%]...] }]: an element whose <img> children are drawn clipped to a polygon in the element's box. */
  function snapshot(root, { bg, extras = [] } = {}) {
    const R = root.getBoundingClientRect(), k = 1; // DPR 1: the snapshot only lives as motion-blurred shards
    const c = mk(R.width * k, R.height * k), g = c.getContext('2d');
    g.scale(k, k);
    const box = el => { const r = el.getBoundingClientRect(); return { x: r.left - R.left, y: r.top - R.top, w: r.width, h: r.height }; };
    g.fillStyle = '#07040c'; g.fillRect(0, 0, R.width, R.height);
    const bgEl = root.querySelector('.bt-bg'), bim = imgCache.get(bg);
    if (bgEl && ready(bim)) { const b = box(bgEl); coverDraw(g, bim, b.x, b.y, b.w, b.h); }
    g.fillStyle = 'rgba(8,3,14,.55)'; g.fillRect(0, 0, R.width, R.height);
    const vg = g.createRadialGradient(R.width * 0.42, R.height * 0.46, R.height * 0.2, R.width * 0.42, R.height * 0.46, R.height * 0.9);
    vg.addColorStop(0, 'rgba(0,0,0,0)'); vg.addColorStop(1, 'rgba(4,2,8,.7)');
    g.fillStyle = vg; g.fillRect(0, 0, R.width, R.height);
    root.querySelectorAll('.bt-enemy:not(.gone):not(.dead) .sh-pic img').forEach(im => {
      if (!ready(im)) return;
      const b = box(im);
      g.save(); g.shadowColor = 'rgba(90,160,255,.75)'; g.shadowBlur = 14; g.drawImage(im, b.x, b.y, b.w, b.h); g.restore();
    });
    root.querySelectorAll('.bt-card').forEach(cd => {
      const b = box(cd), off = Math.tan(12 * Math.PI / 180) * b.h * 0.5;
      g.save();
      g.beginPath(); g.moveTo(b.x + off, b.y); g.lineTo(b.x + b.w, b.y); g.lineTo(b.x + b.w - off, b.y + b.h); g.lineTo(b.x, b.y + b.h); g.closePath();
      g.fillStyle = cd.classList.contains('active') ? '#e0408a' : 'rgba(20,7,15,.96)'; g.fill();
      const face = cd.querySelector('.face'), fi = face && face.querySelector('img');
      if (fi && ready(fi)) { const fb = box(face), ib = box(fi); g.save(); g.beginPath(); g.rect(fb.x, fb.y, fb.w, fb.h); g.clip(); g.drawImage(fi, ib.x, ib.y, ib.w, ib.h); g.restore(); }
      const nm = cd.querySelector('.nm');
      if (nm) { const nb = box(nm); g.fillStyle = '#fff'; g.font = `italic 900 ${phone() ? 13 : 19}px "Avenir Next Condensed","Arial Narrow",sans-serif`; g.textBaseline = 'top'; g.fillText((nm.firstChild && nm.firstChild.textContent || '').trim().toUpperCase(), nb.x, nb.y); }
      cd.querySelectorAll('.bt-bar .track').forEach((tr, i) => { const tb = box(tr), bar = tr.querySelector('i'); g.fillStyle = 'rgba(255,255,255,.14)'; g.fillRect(tb.x, tb.y, tb.w, tb.h); g.fillStyle = i ? '#ff6fb0' : '#5df0b0'; g.fillRect(tb.x, tb.y, bar ? box(bar).w : tb.w, tb.h); });
      g.restore();
    });
    extras.forEach(({ el, clip, fill, cover, edge }) => {
      if (!el) return;
      const b = box(el);
      g.save();
      g.beginPath(); clip.forEach(([px, py], i) => { const x = b.x + b.w * px / 100, y = b.y + b.h * py / 100; i ? g.lineTo(x, y) : g.moveTo(x, y); }); g.closePath();
      if (fill) { g.fillStyle = fill; g.fill(); }
      g.clip();
      el.querySelectorAll('img').forEach(im => {
        if (!ready(im)) return;
        const ib = box(im);
        if (cover) { // object-fit: cover with its object-position
          const k2 = Math.max(ib.w / im.naturalWidth, ib.h / im.naturalHeight), w = im.naturalWidth * k2, h = im.naturalHeight * k2;
          const op = getComputedStyle(im).objectPosition.split(' ').map(v => parseFloat(v) / 100);
          g.drawImage(im, ib.x + (ib.w - w) * (isNaN(op[0]) ? 0.5 : op[0]), ib.y + (ib.h - h) * (isNaN(op[1]) ? 0.5 : op[1]), w, h);
        } else g.drawImage(im, ib.x, ib.y, ib.w, ib.h);
      });
      g.restore();
      if (edge) { g.save(); g.beginPath(); clip.forEach(([px, py], i) => { const x = b.x + b.w * px / 100, y = b.y + b.h * py / 100; i ? g.lineTo(x, y) : g.moveTo(x, y); }); g.closePath(); g.lineWidth = 5; g.strokeStyle = edge; g.stroke(); g.restore(); }
    });
    return c;
  }
  /* Break `snap` into glass around (cx, cy) inside `layer` (an absolutely positioned box). Resolves when the last shard is gone. */
  function shatter(layer, snap, { cx, cy, onFly } = {}) {
    return new Promise(resolve => {
      if (!snap || reduced()) { resolve(); return; }
      const R = layer.getBoundingClientRect(), Wl = R.width, Hl = R.height, k = snap.width / Wl;
      const cvs = mk(Wl, Hl), g = cvs.getContext('2d'), dk = 1; // DPR 1 (shards are motion-blurred anyway)
      void k;
      cvs.className = 'bt-glass';
      layer.appendChild(cvs);
      // Radial cracks + jittered rings make the cells.
      const rays = phone() ? 12 : 19, maxD = Math.hypot(Math.max(cx, Wl - cx), Math.max(cy, Hl - cy));
      const ringsF = phone() ? [0, 0.05, 0.12, 0.22, 0.36, 0.54, 0.76, 1.02] : [0, 0.04, 0.09, 0.16, 0.25, 0.36, 0.5, 0.67, 0.84, 1.02];
      const angs = Array.from({ length: rays }, (_, i) => (i / rays) * TAU + rnd(-0.18, 0.18)).sort((a, b) => a - b);
      const V = (i, r) => { const a = angs[(i + rays) % rays], j = r === 0 ? 0 : 1 + Math.sin(i * 12.9898 + r * 78.233) * 0.16; return [cx + Math.cos(a) * ringsF[r] * maxD * j, cy + Math.sin(a) * ringsF[r] * maxD * j]; };
      const cells = [];
      for (let i = 0; i < rays; i++) for (let r = 0; r < ringsF.length - 1; r++) {
        const quad = r === 0 ? [V(i, 0), V(i, 1), V(i + 1, 1)] : [V(i, r), V(i, r + 1), V(i + 1, r + 1), V(i + 1, r)];
        if (quad.length === 4 && r > 1 && Math.random() < 0.55) { const d = Math.random() < 0.5; cells.push(d ? [quad[0], quad[1], quad[2]] : [quad[0], quad[1], quad[3]], d ? [quad[0], quad[2], quad[3]] : [quad[1], quad[2], quad[3]]); }
        else cells.push(quad);
      }
      const shards = [];
      cells.forEach(poly => {
        const xs = poly.map(p => p[0]), ys = poly.map(p => p[1]);
        const x0 = Math.max(-4, Math.min(...xs)), y0 = Math.max(-4, Math.min(...ys)), x1 = Math.min(Wl + 4, Math.max(...xs)), y1 = Math.min(Hl + 4, Math.max(...ys));
        if (x1 <= x0 + 1 || y1 <= y0 + 1) return;
        const ox = xs.reduce((s, v) => s + v, 0) / xs.length, oy = ys.reduce((s, v) => s + v, 0) / ys.length;
        const pc = mk((x1 - x0) * dk + 4, (y1 - y0) * dk + 4), pg = pc.getContext('2d');
        pg.scale(dk, dk); pg.translate(-x0 + 2 / dk, -y0 + 2 / dk);
        pg.beginPath(); poly.forEach(([x, y], i) => (i ? pg.lineTo(x, y) : pg.moveTo(x, y))); pg.closePath();
        pg.save(); pg.clip(); pg.drawImage(snap, 0, 0, Wl, Hl);
        const sh = pg.createLinearGradient(x0, y0, x1, y1); sh.addColorStop(0, 'rgba(255,255,255,.22)'); sh.addColorStop(0.5, 'rgba(255,255,255,0)'); sh.addColorStop(1, 'rgba(160,200,255,.12)');
        pg.fillStyle = sh; pg.fillRect(x0, y0, x1 - x0, y1 - y0); pg.restore();
        pg.lineWidth = 1.4; pg.strokeStyle = 'rgba(255,255,255,.75)'; pg.stroke();
        const d = Math.hypot(ox - cx, oy - cy) / maxD, dir = Math.atan2(oy - cy, ox - cx), sp = rnd(260, 760) * (1.15 - d * 0.5);
        shards.push({ c: pc, x0: x0 - 2 / dk, y0: y0 - 2 / dk, ox, oy, vx: Math.cos(dir) * sp + rnd(-60, 60), vy: Math.sin(dir) * sp - rnd(80, 260), vr: rnd(-7, 7) * (1.2 - d * 0.6), delay: d * 0.1 + rnd(0, 0.03), z: rnd(0.35, 0.9), glint: rnd(0, TAU) });
      });
      // Crack lines grow out from the impact before the glass lets go.
      const cracks = [];
      for (let i = 0; i < rays; i++) for (let r = 0; r < ringsF.length - 1; r++) { cracks.push({ a: V(i, r), b: V(i, r + 1), d: ringsF[r] }); if (r > 0) cracks.push({ a: V(i, r), b: V(i + 1, r), d: ringsF[r] + 0.02 }); }
      // Pre-build the crack paths: one Path2D per ring, cumulative, so a frame strokes a single path.
      const levels = [...new Set(cracks.map(c => c.d))].sort((x, y) => x - y);
      const paths = levels.map(lv => { const p = new Path2D(); cracks.forEach(cr => { if (cr.d <= lv) { p.moveTo(cr.a[0], cr.a[1]); p.lineTo(cr.b[0], cr.b[1]); } }); return p; });
      const TC = 0.14, TF = 0.9;
      let t = 0, flew = false;
      const glints = !phone() && level === 0 && pinned == null;
      // Runs inside the shared loop (tick → hooks). Returns false when the last shard is gone.
      const frame = (now, dt) => {
        t += dt;
        g.setTransform(dk, 0, 0, dk, 0, 0); g.clearRect(0, 0, Wl, Hl);
        if (t < TC) {
          g.drawImage(snap, 0, 0, Wl, Hl);
          const p = E.out(t / TC);
          let li = -1; levels.forEach((lv, i) => { if (lv <= p) li = i; });
          if (li >= 0) {
            g.lineCap = 'round';
            g.globalAlpha = 0.25; g.lineWidth = 6; g.strokeStyle = '#bfe0ff'; g.stroke(paths[li]);
            g.globalAlpha = 0.9; g.lineWidth = 1.6; g.strokeStyle = '#ffffff'; g.stroke(paths[li]);
          }
          g.globalAlpha = Math.max(0, 1 - t / 0.07); g.fillStyle = '#fff'; g.fillRect(0, 0, Wl, Hl);
          g.globalAlpha = 1;
        } else {
          if (!flew) { flew = true; onFly && onFly(); }
          const ft = t - TC;
          shards.forEach(s => {
            const tt = Math.max(0, ft - s.delay), sc = 1 + tt * s.z;
            const x = s.ox + s.vx * tt, y = s.oy + s.vy * tt + 0.5 * 1700 * tt * tt;
            const a = 1 - c01((tt - 0.32) / 0.4);
            if (a <= 0) return;
            g.save(); g.globalAlpha = a; g.translate(x, y); g.rotate(s.vr * tt); g.scale(sc, sc);
            g.drawImage(s.c, s.x0 - s.ox, s.y0 - s.oy, s.c.width / dk, s.c.height / dk);
            if (glints) { const gl = Math.max(0, Math.sin(s.vr * tt * 2 + s.glint)); if (gl > 0.6) { g.globalCompositeOperation = 'lighter'; g.globalAlpha = a * (gl - 0.6) * 0.9; g.drawImage(s.c, s.x0 - s.ox, s.y0 - s.oy, s.c.width / dk, s.c.height / dk); } }
            g.restore();
          });
        }
        if (t < TC + TF) return true;
        cvs.remove(); resolve();
        return false;
      };
      hooks.add(frame);
      kick();
    });
  }

  return {
    attach, detach, resize, play, stream, setSpeed(fn) { speedFn = fn; }, ash, snapshot, shatter, preload, reduced,
    pause() { paused = true; }, resume() { paused = false; last = performance.now(); kick(); }, get paused() { return paused; },
    setCalm(b) { calm = !!b; },
    // Skill-effect sheets: hasArt(name) once loaded; artFor(kind, o) = the sheet play() would use; artSrc for DOM sprites.
    hasArt, artFor, artSrc: name => (artImg(name) ? new URL(artSrc(name), document.baseURI).href : null), preloadArt, sheetLog, // absolute: a CSS var url() would resolve against battle.css
    setQuality(q) { pinned = q === 'low' ? LEVELS.length - 1 : null; resize(); }, quality: () => ['full', 'reduced', 'low'][pinned != null ? pinned : level],
    get count() { return parts.length; }
  };
})();
