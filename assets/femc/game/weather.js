/* FEMC revamp: weather you can see and hear (P5-style), 2026-10-23. Rules are in core.js (wx, forecast: the calendar's
   kind and level for each day); this file only draws and plays them.
   Where: the field screens' backdrop (ui.js setBg → field) and every scene (scene.js paintVis → scene, sceneEnd). The topmost
   one gets the one overlay (.g-wxfx: a canvas, a tint, fog, a lightning flash), moved between them, so only one ever runs.
   Indoors or out comes from the background image's name (places.js weatherFx): outdoors the rain and snow fall; indoors
   (any room with a window) a few drops run down the glass and the sound is muffled; sealed rooms (Tartarus, the Velvet
   Room, karaoke, the baths) show nothing and hear it faintly. Nothing in the Dark Hour, Tartarus, the Velvet Room, a CG, a
   Theater replay or on the title screen.
   Levels: drizzle · rain · storm (lightning now and then) · light · heavy (snow) · overcast (a gray tint) · fog.
   Light on the Mac: one canvas at CSS pixels (no retina), one path per frame, 30 fps, fewer drops on small screens and in
   Performance mode, nothing runs while the tab is hidden or a battle is up. Reduced motion: one still frame, no flashes,
   no drifting fog. Reduce flashes: lightning is a soft brightening.
   Sound (Web Audio, made here; no files): looped filtered noise for the rain, a patter of drops, a low rumble and thunder
   in a storm, a quiet wind for snow; muffled indoors. It sits under the music: Weather sound (0-100) × SFX volume, off with
   Sound effects off, and starts only after the player's first click or key (browsers keep audio locked until then).
   Settings (core.js DEFAULTS): wxFx (Weather effects, on/off), wxSound (Weather sound, 0 = off).
   Tests: FemcWeather.state(). */
window.FemcWeather = (() => {
  const G = window.FemcGame;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const RAIN = { drizzle: 1, rain: 1, storm: 1 }, SNOW = { light: 1, heavy: 1 };
  const st = () => G.settings();

  /* ── Where are we? ── */
  const slugOf = url => (/\/bg\/([^/?#]+)\.webp/.exec(url || '') || [])[1] || '';
  function placeKind(slug) {
    const fx = G.D.places.weatherFx || {};
    const has = list => (list || []).some(p => slug === p || slug.startsWith(p));
    if (!slug) return 'none';
    if (has(fx.none)) return 'none';
    if (has(fx.outdoor)) return 'out';
    if (has(fx.sealed)) return 'sealed';
    return 'in';
  }
  // What a host should show now: { level, where } (where: out | in | sealed | none).
  function decide(c) {
    const S = G.S;
    if (!c || paused || !S || S.phase === 'title' || c.none) return { level: 'clear', where: 'none' };
    const w = G.wx(S.day);
    return { level: w.level, where: placeKind(c.slug), kind: w.kind };
  }

  /* ── The overlay ── */
  const host = document.createElement('div');
  host.className = 'g-wxfx';
  host.setAttribute('aria-hidden', 'true');
  host.innerHTML = '<i class="g-wx-tint"></i><i class="g-wx-fog"></i><canvas></canvas><i class="g-wx-flash"></i>';
  const cv = host.querySelector('canvas'), cx = cv.getContext('2d'), flashEl = host.querySelector('.g-wx-flash');
  let field = null;            // { el, slug }
  const scenes = [];           // [{ el, slug, none }] in the order they opened
  let paused = false, cur = { level: 'clear', where: 'none' }, key = '';
  let drops = [], raf = 0, last = 0, acc = 0, W = 0, H = 0, flashTimer = 0, flashes = 0, frames = 0;

  const active = () => { for (let i = scenes.length - 1; i >= 0; i--) { if (scenes[i].el.isConnected) return scenes[i]; scenes.splice(i, 1); } return field; };
  function mount(c) {
    if (!c) { host.remove(); return; }
    const parent = c.el, before = c.before ? parent.querySelector(c.before) : null;
    if (host.parentNode !== parent || (before && host.nextSibling !== before)) parent.insertBefore(host, before);
  }
  function apply() {
    const c = active();
    const want = st().wxFx === false ? { level: 'clear', where: 'none' } : decide(c);
    const k = `${want.level}|${want.where}|${!!c}|${reduced.matches}|${st().calm}|${st().perf}`;
    mount(c);
    sound(decide(c));
    if (k === key && c === lastHost) return;
    key = k; lastHost = c; cur = want;
    const lv = want.where === 'none' || want.where === 'sealed' ? 'clear' : want.level;
    host.className = `g-wxfx wx-${lv} at-${want.where}${reduced.matches ? ' still' : ''}`;
    host.hidden = lv === 'clear';
    resize(); seed(lv, want.where);
    clearTimeout(flashTimer);
    if (lv === 'storm' && !reduced.matches) flashTimer = setTimeout(lightning, 2500 + Math.random() * 6000);
    loop();
  }
  let lastHost = null;
  function resize() {
    const r = host.getBoundingClientRect();
    const w = Math.max(1, Math.round(r.width)), h = Math.max(1, Math.round(r.height));
    if (w !== W || h !== H) { W = cv.width = w; H = cv.height = h; return true; }
    return false;
  }
  if (window.ResizeObserver) new ResizeObserver(() => { if (resize() && !host.hidden) { seed(cur.level, cur.where); if (reduced.matches) draw(0); } }).observe(host);

  // How many: by level, by screen area (a phone gets fewer), halved in Performance mode.
  const COUNT = { out: { drizzle: 70, rain: 170, storm: 280, light: 110, heavy: 320 }, in: { drizzle: 14, rain: 26, storm: 36 } };
  function seed(level, where) {
    drops = [];
    const n0 = COUNT[where]?.[level] || 0;
    if (!n0) return;
    const area = Math.max(0.35, Math.min(1.3, (W * H) / (1280 * 720)));
    const n = Math.round(n0 * area * (st().perf ? 0.5 : 1));
    for (let i = 0; i < n; i++) drops.push(spawn(level, where, true));
  }
  const R = (a, b) => a + Math.random() * (b - a);
  function spawn(level, where, anywhere) {
    if (where === 'in') return { x: R(0, W), y: anywhere ? R(0, H) : R(-40, H * 0.4), r: R(2, 5), v: 0, hold: R(0.5, 4), trail: 0 };
    if (SNOW[level]) return { x: R(0, W), y: anywhere ? R(0, H) : R(-20, -4), r: level === 'heavy' ? R(1.4, 3.8) : R(1, 2.6), v: level === 'heavy' ? R(38, 80) : R(22, 50), p: R(0, 6.28), s: R(0.4, 1.4) };
    const sp = { drizzle: [420, 600], rain: [700, 950], storm: [950, 1300] }[level];
    return { x: R(-60, W + 60), y: anywhere ? R(0, H) : R(-80, -10), len: level === 'drizzle' ? R(7, 13) : level === 'rain' ? R(12, 22) : R(18, 30), v: R(sp[0], sp[1]) };
  }

  function draw(dt) {
    cx.clearRect(0, 0, W, H);
    const lv = cur.level, where = cur.where;
    if (!drops.length) return;
    frames++;
    if (where === 'in') { // drops on the window: they sit, then run down, leaving a short trail
      cx.fillStyle = 'rgba(215, 228, 248, .22)'; cx.strokeStyle = 'rgba(215, 228, 248, .16)'; cx.lineWidth = 1.5;
      cx.beginPath();
      for (const d of drops) {
        if (dt) { d.hold -= dt; if (d.hold <= 0) { d.v = Math.min(d.v + 90 * dt, 160); d.y += d.v * dt; d.trail = Math.min(26, d.trail + d.v * dt * 0.4); } }
        if (d.y > H + 10) Object.assign(d, spawn(lv, where, false));
        cx.moveTo(d.x + d.r, d.y); cx.arc(d.x, d.y, d.r, 0, 6.283);
      }
      cx.fill();
      cx.beginPath();
      for (const d of drops) if (d.trail > 2) { cx.moveTo(d.x, d.y - d.r); cx.lineTo(d.x, d.y - d.r - d.trail); }
      cx.stroke();
      // A glint on each drop, so they read as water on glass.
      cx.fillStyle = 'rgba(255, 255, 255, .35)'; cx.beginPath();
      for (const d of drops) { cx.moveTo(d.x - d.r * 0.3 + 1, d.y - d.r * 0.35); cx.arc(d.x - d.r * 0.3, d.y - d.r * 0.35, Math.max(0.7, d.r * 0.3), 0, 6.283); }
      cx.fill();
      return;
    }
    if (SNOW[lv]) {
      cx.fillStyle = 'rgba(255, 255, 255, .82)';
      cx.beginPath();
      const t = performance.now() / 1000;
      for (const d of drops) {
        if (dt) { d.y += d.v * dt; d.x += Math.sin(t * d.s + d.p) * 18 * dt + 6 * dt; }
        if (d.y > H + 6 || d.x > W + 10) Object.assign(d, spawn(lv, where, false), { x: R(-10, W) });
        cx.moveTo(d.x + d.r, d.y); cx.arc(d.x, d.y, d.r, 0, 6.283);
      }
      cx.fill();
      return;
    }
    const slant = { drizzle: 0.06, rain: 0.14, storm: 0.3 }[lv] || 0.1;
    cx.strokeStyle = lv === 'drizzle' ? 'rgba(205, 220, 240, .32)' : 'rgba(205, 220, 240, .42)';
    cx.lineWidth = lv === 'storm' ? 1.4 : 1;
    cx.beginPath();
    for (const d of drops) {
      if (dt) { d.y += d.v * dt; d.x += d.v * slant * dt; }
      if (d.y - d.len > H) Object.assign(d, spawn(lv, where, false));
      cx.moveTo(d.x, d.y); cx.lineTo(d.x - d.len * slant, d.y - d.len);
    }
    cx.stroke();
  }
  // 30 fps: plenty for rain, half the work.
  function loop() {
    cancelAnimationFrame(raf); raf = 0;
    if (host.hidden || !drops.length) { cx.clearRect(0, 0, W, H); return; }
    if (reduced.matches) { draw(0); return; } // a still frame
    last = performance.now(); acc = 0;
    const tick = now => {
      raf = 0;
      if (host.hidden || document.hidden || !host.isConnected) return;
      const dt = Math.min(0.1, (now - last) / 1000); last = now; acc += dt;
      if (acc >= 1 / 30) { draw(Math.min(acc, 0.1)); acc = 0; }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
  }
  document.addEventListener('visibilitychange', () => { if (!document.hidden) loop(); if (A.ctx) (document.hidden ? A.ctx.suspend() : A.ctx.resume()).catch?.(() => {}); });

  // Lightning: a flash (two quick pulses; a soft brightening with Reduce flashes), thunder a moment later, then the next.
  function lightning() {
    clearTimeout(flashTimer);
    if (cur.level !== 'storm' || host.hidden || reduced.matches) return;
    flashes++;
    flashEl.className = `g-wx-flash ${st().calm ? 'soft' : 'on'}`;
    void flashEl.offsetWidth;
    setTimeout(() => { flashEl.className = 'g-wx-flash'; }, 1300);
    thunder(0.35 + Math.random() * 1.6);
    flashTimer = setTimeout(lightning, 7000 + Math.random() * 12000);
  }

  /* ── Sound ── */
  const A = { ctx: null, bus: null, filt: null, L: {}, want: null, key: '' };
  const BASE = 0.32;
  function noiseBuf(c, secs, color) {
    const n = Math.floor(c.sampleRate * secs), b = c.createBuffer(1, n, c.sampleRate), d = b.getChannelData(0);
    let last = 0, b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < n; i++) {
      const w = Math.random() * 2 - 1;
      if (color === 'brown') { last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5; }
      else if (color === 'pink') { b0 = 0.99765 * b0 + w * 0.099; b1 = 0.963 * b1 + w * 0.2965; b2 = 0.57 * b2 + w * 1.0527; d[i] = (b0 + b1 + b2 + w * 0.1848) * 0.12; }
      else d[i] = w;
    }
    // Ease the loop's seam.
    const f = Math.min(n >> 3, 2000); for (let i = 0; i < f; i++) { const k = i / f; d[i] *= k; d[n - 1 - i] *= k; }
    return b;
  }
  // A few seconds of separate drops hitting things, looped.
  function patterBuf(c, secs, count) {
    const n = Math.floor(c.sampleRate * secs), b = c.createBuffer(1, n, c.sampleRate), d = b.getChannelData(0);
    for (let k = 0; k < count; k++) {
      const at = Math.floor(Math.random() * (n - 600)), len = 120 + Math.floor(Math.random() * 360), amp = 0.15 + Math.random() * 0.6;
      for (let i = 0; i < len; i++) d[at + i] += (Math.random() * 2 - 1) * amp * Math.exp(-i / (len / 5));
    }
    return b;
  }
  function loopLayer(c, buf, filters, gain0 = 0) {
    const s = c.createBufferSource(); s.buffer = buf; s.loop = true;
    let node = s;
    filters.forEach(([type, f, q]) => { const fl = c.createBiquadFilter(); fl.type = type; fl.frequency.value = f; if (q) fl.Q.value = q; node.connect(fl); node = fl; });
    const g = c.createGain(); g.gain.value = gain0; node.connect(g).connect(A.bus);
    s.start();
    return { s, g, last: node };
  }
  function ensureAudio() {
    if (A.ctx) return A.ctx;
    if (navigator.userActivation && !navigator.userActivation.hasBeenActive) return null;
    const C = window.AudioContext || window.webkitAudioContext; if (!C) return null;
    try {
      const c = A.ctx = new C();
      A.out = c.createGain(); A.out.gain.value = 0; A.out.connect(c.destination);
      A.filt = c.createBiquadFilter(); A.filt.type = 'lowpass'; A.filt.frequency.value = 16000; A.filt.connect(A.out);
      A.bus = c.createGain(); A.bus.connect(A.filt);
      A.L.rain = loopLayer(c, noiseBuf(c, 2.6, 'pink'), [['highpass', 380], ['lowpass', 7000]]);
      A.L.patter = loopLayer(c, patterBuf(c, 3.1, 150), [['highpass', 1500]]);
      A.L.rumble = loopLayer(c, noiseBuf(c, 3.7, 'brown'), [['lowpass', 140]]);
      const wind = loopLayer(c, noiseBuf(c, 4.3, 'pink'), [['bandpass', 520, 1.4]]);
      const lfo = c.createOscillator(), depth = c.createGain(); lfo.frequency.value = 0.07; depth.gain.value = 260; lfo.connect(depth).connect(wind.last.frequency); lfo.start();
      A.L.wind = wind;
      // The storm's rumble swells and fades.
      const lfo2 = c.createOscillator(), d2 = c.createGain(); lfo2.frequency.value = 0.05; d2.gain.value = 0.18; lfo2.connect(d2).connect(A.L.rumble.g.gain); lfo2.start();
    } catch (e) { A.ctx = null; return null; }
    return A.ctx;
  }
  const MIX = { // layer gains by level
    drizzle: { rain: 0.22, patter: 0.35 }, rain: { rain: 0.45, patter: 0.4 }, storm: { rain: 0.7, patter: 0.45, rumble: 0.5 },
    light: { wind: 0.16 }, heavy: { wind: 0.32 }, fog: { wind: 0.05 }
  };
  const WHERE = { out: [16000, 1], in: [650, 0.55], sealed: [320, 0.28], none: [16000, 0] };
  function sound(want) {
    A.want = want;
    const s = st(), vol = s.sfx === false || localStorage.getItem('kg-femc-sound') === 'off' ? 0 : (+s.wxSound || 0) / 100 * Math.max(0, Math.min(1, (s.sfxVol ?? 100) / 100));
    const mix = MIX[want.level] || {}, [freq, k] = WHERE[want.where] || WHERE.none;
    const on = vol > 0 && k > 0 && Object.keys(mix).length > 0;
    if (!on && !A.ctx) return;
    const c = ensureAudio(); if (!c) return;
    if (c.state === 'suspended' && on && !document.hidden) c.resume().catch(() => {});
    const t = c.currentTime;
    A.out.gain.setTargetAtTime(on ? BASE * vol * k : 0, t, 0.6);
    A.filt.frequency.setTargetAtTime(freq, t, 0.3);
    ['rain', 'patter', 'rumble', 'wind'].forEach(n => A.L[n].g.gain.setTargetAtTime(on ? (mix[n] || 0) : 0, t, 0.8));
    A.key = on ? `${want.level}|${want.where}` : '';
  }
  function thunder(delay) {
    const c = A.ctx; if (!c || !A.key) return;
    try {
      const t = c.currentTime + delay, len = 4.5;
      const s = c.createBufferSource(); s.buffer = noiseBuf(c, len, 'brown');
      const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.setValueAtTime(900, t); lp.frequency.exponentialRampToValueAtTime(120, t + 1.2);
      const g = c.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(1.6, t + 0.06); g.gain.exponentialRampToValueAtTime(0.5, t + 0.9); g.gain.exponentialRampToValueAtTime(0.0001, t + len);
      s.connect(lp).connect(g).connect(A.bus); s.start(t); s.stop(t + len + 0.1);
      A.thunders = (A.thunders || 0) + 1;
    } catch (e) {}
  }
  // The first click or key unlocks audio: start the sound for whatever is showing.
  const unlock = () => { if (A.want) sound(A.want); if (A.ctx) { removeEventListener('pointerdown', unlock, true); removeEventListener('keydown', unlock, true); } };
  addEventListener('pointerdown', unlock, true); addEventListener('keydown', unlock, true);

  /* ── API (ui.js, scene.js) ── */
  return {
    // The field screens' backdrop (.g-stage), after each setBg.
    field(slug, el) { field = { el: el || document.querySelector('.g-stage'), slug: slug || '', before: '.g-stripes' }; if (!field.el) field = null; apply(); },
    // A scene's backdrop changed (scene.js paintVis). opts: { url, place, time, dark, cg, replay, velvet }.
    scene(el, o = {}) {
      let c = scenes.find(x => x.el === el);
      if (!c) { c = { el, before: '.gs-portrait' }; scenes.push(c); }
      c.slug = slugOf(o.url);
      c.none = !!(o.replay || o.dark || o.cg || o.velvet || /Dark Hour|Tartarus|Velvet/.test(`${o.place || ''} ${o.time || ''}`));
      apply();
    },
    sceneEnd(el) { const i = scenes.findIndex(x => x.el === el); if (i >= 0) scenes.splice(i, 1); apply(); },
    // A battle has the screen (the Dark Hour layer), or the title screen: nothing shows or sounds.
    pause(on) { paused = !!on; apply(); },
    // Settings changed, or the day did.
    refresh() { key = ''; apply(); },
    flash: lightning,
    state: () => ({ level: cur.level, where: cur.where, shown: !host.hidden && host.isConnected, host: host.parentNode?.className || null, drops: drops.length, frames, flashes,
      flashing: flashEl.className, still: host.classList.contains('still'), audio: { ctx: !!A.ctx, on: !!A.key, key: A.key, want: A.want, thunders: A.thunders || 0 } }),
    placeKind
  };
})();
