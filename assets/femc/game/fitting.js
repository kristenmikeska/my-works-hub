/* Persona 3: Solstice · the fitting room (Nov 4 2026, Kat's mockup mockups/wardrobe/, "put it into the game").
   The Wardrobe's booth: the person whose closet is open stands behind a pink velvet curtain, framed from about the hip up.
   cosmetics.js renders the closet and an empty [data-fr-booth] slot; wire() calls FemcFitting.mount(slot, state) and the
   booth element (kept here, bt.el) is put back into the page on every re-render, so its pictures, timers and animations
   carry on across clicks. A booth that leaves the page (another tab, the Boutique, the menu closing) is dropped by the
   watcher and a fresh one opens next time with the walk-in.
   What it shows (lookOf): Solar's HD pose set (ready.js skins[id].hd / own.hd; per-pose head metrics from the set's
   fig.json), a fighter's own look as their full-body Social Link art (menu.js LINK_FIG) with their photo-booth poses
   (game/art/booth/<who>-<n>.webp) as extra moves, an outfit's scene faces (ready.js portraits), else the battle pose frame.
   Moves: a new person walks in as the curtain opens (from the side you came from) and greets; a new outfit is a half-drawn
   curtain and a twirl, then the outfit's own reaction (REACT); idle breathing and sway, a new everyday pose every few
   seconds (Solar's mirror check every fourth); Strike a pose. Equip: sparkles plus the look's own effect sheet (fx.webp).
   Ultra / Super Rare: a glint across the booth and the curtain edges catch the light. Other tabs: a wallpaper becomes the
   back wall, menu colours / battle themes recolour the curtain and the lights, a title slides in a card, a weapon or an
   Evoker is held up in front (Solar takes her Evoker pose). Not owned: a sheer curtain. A couple outfit: the partner in
   the matching outfit leans in from the edge.
   Settings: reduced motion = crossfades only (no walk, twirl, hop, sway); Performance = no breathing, sway or bulbs, fewer
   sparkles; Reduce flashes = no glint, softer sparkles; Outfit effects Off = no effect sheet, glint or partner.
   Test hooks: FemcFitting.state() { alive, who, key, mode, src, partner, wall, sheer, prop, tcard, fx }, freeze(). */
window.FemcFitting = (() => {
  const G = window.FemcGame;
  if (!G) return null;
  const C = () => window.FemcCosmetics;
  const AR = () => window.FEMC_ART_READY || {};
  const ST = () => (G.settings ? G.settings() : {});
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const base = () => G.base || '';
  const SK = id => `${base()}assets/femc/game/art/skins/${id}/`;
  const SKIN_V = 4;
  const ORDER = ['solar', 'haechan', 'jungwon', 'jihoon', 'minji', 'akihiko', 'yukari', 'junpei', 'mitsuru', 'aigis', 'shinjiro', 'koromaru', 'ken', 'fuuka'];
  // The full-body art that's too small for the booth (Mitsuru's) or an action pose (Shinjiro's): their faces instead.
  const FIG_SKIP = ['mitsuru', 'shinjiro'];
  // Each neutral portrait's face, measured by eye (fractions of the picture's width): x between the eyes, the eye line,
  // eye-to-chin. Every character tab's icon is scaled so eye-to-chin is the same size and the eyes sit on one line.
  const FACE = { solar: [0.47, 0.399, 0.18], haechan: [0.62, 0.355, 0.21], jungwon: [0.485, 0.408, 0.25], jihoon: [0.407, 0.299, 0.2], minji: [0.651, 0.402, 0.2], akihiko: [0.273, 0.462, 0.25],
    yukari: [0.365, 0.497, 0.27], junpei: [0.634, 0.424, 0.26], mitsuru: [0.456, 0.408, 0.23], aigis: [0.374, 0.437, 0.21], shinjiro: [0.635, 0.569, 0.21] };
  function faceIcon(w, S = 62) {
    const [cx, ey, d] = FACE[w] || [0.5, 0.4, 0.22], size = (S * 0.47) / d;
    const src = `${base()}assets/femc/portraits/${w}/neutral.webp?v=${window.FEMC_PORTRAIT_V || 1}`;
    return `background-image:url('${src}');background-size:${size.toFixed(1)}px auto;background-position:${(S / 2 - cx * size).toFixed(1)}px ${(S * 0.36 - ey * size).toFixed(1)}px`;
  }

  /* ── Settings ── */
  const opt = () => { const s = ST(); return { reduced: matchMedia('(prefers-reduced-motion: reduce)').matches, perf: !!s.perf, calm: !!s.calm, fx: s.skinFx !== false }; };

  /* ── What the booth shows ── */
  const POSE_ORDER = ['arms-crossed', 'peace', 'hair', 'wave', 'tease', 'heart', 'cheer', 'phone', 'thinking', 'shy'];
  const NOT_IDLE = ['lookback', 'jump', 'evoker', 'sewing', 'ramen', 'watering', 'study', 'stretch'];
  // An outfit's own reaction when it's picked: an HD pose of hers (first match wins).
  const REACT = [[/swim|lagoon/, 'jump'], [/date|moviedate|strawberry/, 'shy'], [/phantom|velvet|arcana|snake/, 'evoker'], [/idol|limelight|y2k|stage/, 'peace'],
    [/sugarrush|oops/, 'heart'], [/festival|yukata|hanbok/, 'wave'], [/emo|prowl|drive/, 'tease'], [/roadwork|esports|ringside/, 'cheer'], [/./, 'hair']];
  const figs = {};
  const figsFor = url => figs[url] || (figs[url] = fetch(url).then(r => (r.ok ? r.json() : {})).catch(() => ({})));
  function lookOf(who, x) {
    const R = AR().skins || {}, own = AR().own || {};
    if (x) {
      const r = R[x.id] || {};
      if (!C().ready(x)) return { key: `${x.id}|pending`, mode: 'pose', src: `${base()}assets/femc/battle/art/poses/${who}-pose-0.webp`, pending: true };
      if (who === 'solar' && (r.hd || []).length) return { key: x.id, mode: 'hd', dir: `${SK(x.id)}hd/`, v: r.hdv || 1, have: r.hd };
      const fs = (r.portraits || {})[who];
      if (fs && fs.length) return { key: x.id, mode: 'face', dir: `${SK(x.id)}portraits/${who}/`, v: SKIN_V, faces: fs };
      return { key: x.id, mode: 'pose', src: `${SK(x.id)}${who}-pose-0.webp?v=${SKIN_V}` };
    }
    if (who === 'solar' && (own.hd || []).length) return { key: 'own', mode: 'hd', dir: `${base()}assets/femc/profile/solar-poses/`, v: own.hdv || 1, have: own.hd };
    const LF = (window.FemcMenu && window.FemcMenu.LINK_FIG || {})[who];
    if (LF && !FIG_SKIP.includes(who)) {
      const snaps = ((window.FEMC_BOOTH_ART || {}).poses || []).includes(who) ? [0, 2, 3, 4, 5].map(k => `${base()}assets/femc/game/art/booth/${who}-${k}.webp`) : [];
      return { key: 'own', mode: 'fig', src: `${base()}assets/femc/${LF[0]}`, ht: LF[2], hx: LF[4], snaps };
    }
    const fs = (window.FEMC_PORTRAITS || {})[who];
    if (fs && fs.length) return { key: 'own', mode: 'face', dir: `${base()}assets/femc/portraits/${who}/`, v: window.FEMC_PORTRAIT_V || 1, faces: fs };
    return { key: 'own', mode: 'pose', src: `${base()}assets/femc/battle/art/poses/${who}-pose-0.webp` };
  }
  const reactPose = (x, have) => { for (const [re, p] of REACT) if (re.test(x.id) && have.includes(p)) return p; return ['peace', 'hair', 'wave'].find(p => have.includes(p)); };

  /* ── The booth element (kept across re-renders) ── */
  const bt = { el: null, alive: false, who: null, key: null, sel: null, L: null, mode: null, timers: [], cue: null, partner: null, evk: false, watch: 0, fromLeft: false, frozen: false };
  const $ = s => bt.el.querySelector(s);
  function build() {
    const el = document.createElement('div');
    el.className = 'g-fr-booth g-wd-stage';
    el.setAttribute('aria-label', 'Fitting room');
    el.innerHTML = `<div class="g-fr-wall"></div><div class="g-fr-floor"></div><div class="g-fr-bulbs">${'<i></i>'.repeat(9)}</div>
      <div class="g-fr-stage"><div class="g-fr-partner"></div><div class="g-fr-fig"><div class="g-fr-walk"><div class="g-fr-breathe"></div></div></div></div>
      <div class="g-fr-prop"></div><div class="g-fr-fx"></div><div class="g-fr-tcard"></div>
      <div class="g-fr-sheer"><span></span></div><div class="g-fr-glint"></div><span class="g-fr-note" hidden></span>
      <div class="g-fr-curtain l"></div><div class="g-fr-curtain r"></div><div class="g-fr-valance"></div>
      <div class="g-fr-tag"></div><div class="g-fr-acts g-wd-acts"></div>`;
    return el;
  }
  const later = (fn, ms) => { const t = setTimeout(() => { bt.timers = bt.timers.filter(x => x !== t); if (bt.alive && !bt.frozen) fn(); }, ms); bt.timers.push(t); return t; };
  // Idle moves (every) wait while Solar holds her Evoker pose (bt.evk).
  const every = (fn, ms) => { const t = setInterval(() => { if (bt.alive && !bt.frozen && !document.hidden && !bt.evk) fn(); }, ms); bt.timers.push(t); return t; };
  function stopTimers() { bt.timers.forEach(t => { clearTimeout(t); clearInterval(t); }); bt.timers = []; }
  function kill() { stopTimers(); bt.alive = false; clearInterval(bt.watch); bt.el = null; bt.who = bt.key = bt.sel = null; bt.partner = null; bt.evk = false; }

  /* ── Pictures ── */
  function place(img) {
    const info = img._info || {}, H = bt.el.clientHeight || 600, W = bt.el.clientWidth || 400;
    const ar = img.naturalWidth && img.naturalHeight ? img.naturalWidth / img.naturalHeight : info.ar || 0.5;
    const st = img.style; st.bottom = ''; st.top = ''; st.right = '';
    if (info.mode === 'hd' || info.mode === 'fig') {
      // Hip-up: the figure's top ~55% fills the booth; the head is centred and a little below the valance.
      const h = H * 1.8, w = h * ar;
      st.height = `${h}px`; st.width = `${w}px`; st.left = `${-(info.hx ?? 0.5) * w}px`; st.top = `${H * 0.07 - (info.ht ?? 0.012) * h - H}px`;
    } else if (info.mode === 'face' || info.mode === 'snap') {
      const w = Math.min(W * (info.mode === 'snap' ? 1.12 : 1.08), H * 1.02);
      st.width = `${w}px`; st.height = 'auto'; st.left = `${-w / 2}px`; st.top = 'auto'; st.bottom = '0';
    } else {
      const h = H * 1.45, w = h * ar;
      st.height = `${h}px`; st.width = `${w}px`; st.left = `${-w / 2}px`; st.top = `${H * 0.04 - h * 0.1 - H}px`;
    }
  }
  // Put a picture up. The page knows the new one at once (.g-wd-pv-solar moves to it); it shows when it has loaded and,
  // with `at`, not before that many ms (the middle of a twirl, the curtain shut). `snap`: no crossfade.
  function show(src, info, o = {}) {
    const box = $('.g-fr-breathe'), old = box.querySelector('img.cur');
    const img = new Image();
    img.alt = ''; img.decoding = 'async'; img._info = info;
    img.className = `g-wd-pv-solar cur out${info.mode === 'hd' ? ' hd' : ''}${info.pending ? ' pending' : ''}${o.snap ? ' snap' : ''}`;
    img.dataset.who = bt.who || ''; if (info.pose) img.dataset.hdPose = info.pose;
    if (old) old.classList.remove('cur', 'g-wd-pv-solar');
    box.appendChild(img);
    let loaded = false, due = !o.at;
    const reveal = () => {
      if (!loaded || !due || !img.isConnected) return;
      place(img);
      if (!img.classList.contains('cur')) { img.remove(); return; }
      img.classList.remove('out');
      box.querySelectorAll('img').forEach(i => { if (i !== img) { if (o.snap) i.remove(); else { i.classList.add('out'); setTimeout(() => i.remove(), 650); } } });
      if (o.snap) setTimeout(() => img.classList.remove('snap'), 60);
    };
    img.onload = img.onerror = () => { loaded = true; reveal(); };
    img.src = src;
    if (img.complete) { loaded = true; }
    if (o.at) later(() => { due = true; reveal(); }, o.at); else setTimeout(reveal, 20);
    if (info.mode === 'hd' && info.fig) figsFor(info.fig).then(f => { const m = f[info.pose]; if (m) { img._info = Object.assign({}, info, { hx: m.hx, ht: m.ht }); if (img.complete) place(img); } });
    return img;
  }
  const hdInfo = (L, p) => ({ mode: 'hd', pose: p, fig: `${L.dir}fig.json?v=${L.v}` });
  const hdSrc = (L, p) => `${L.dir}${p}.webp?v=${L.v}`;
  const faceSrc = (L, f) => `${L.dir}${f}.webp?v=${L.v}`;

  /* ── Idle life, greetings, reactions ── */
  function begin(L, o = {}) {
    stopTimers();
    bt.L = L; bt.mode = L.mode;
    bt.el.classList.toggle('hd', L.mode === 'hd');
    const note = $('.g-fr-note'); note.hidden = !(L.mode === 'pose' && !L.pending); note.textContent = 'Battle frame · softer until HD poses';
    const at = o.at;
    if (L.mode === 'hd') {
      const have = L.have, poses = POSE_ORDER.filter(p => have.includes(p)).concat(have.filter(p => !POSE_ORDER.includes(p) && !NOT_IDLE.includes(p)));
      if (!poses.length) poses.push(have[0]);
      let i = 0;
      L.rest = () => show(hdSrc(L, poses[i]), hdInfo(L, poses[i]));
      const first = (o.greet && ['wave', 'peace', 'cheer'].find(p => have.includes(p))) || (o.react && reactPose(o.react, have)) || null;
      show(hdSrc(L, first || poses[0]), hdInfo(L, first || poses[0]), { at, snap: o.snap });
      if (first) later(() => L.rest(), (at || 0) + 1900);
      let n = 0;
      // A new everyday pose every few seconds; every fourth time she checks the mirror first.
      const tick = () => { n++; if (n % 4 === 0 && have.includes('lookback')) { show(hdSrc(L, 'lookback'), hdInfo(L, 'lookback')); later(() => { i = (i + 1) % poses.length; L.rest(); }, 2400); return; }
        i = (i + 1) % poses.length; L.rest(); };
      every(tick, 6500);
      L.strike = () => { i = (i + 1) % poses.length; L.rest(); };
    } else if (L.mode === 'fig') {
      const fi = { mode: 'fig', ht: L.ht, hx: L.hx }, sn = L.snaps;
      let k = 0;
      L.rest = () => show(L.src, fi);
      const snap = j => show(sn[j], { mode: 'snap' });
      if ((o.greet || o.react) && sn.length) { show(sn[0], { mode: 'snap' }, { at, snap: o.snap }); later(() => L.rest(), (at || 0) + 2000); } else show(L.src, fi, { at, snap: o.snap });
      // Now and then a photo-booth pose, then back to standing.
      if (sn.length) every(() => { k = (k + 1) % sn.length; snap(k); later(() => L.rest(), 3000); }, 8000);
      L.strike = () => { if (!sn.length) return; k = (k + 1) % sn.length; snap(k); later(() => L.rest(), 3200); };
    } else if (L.mode === 'face') {
      const fs = L.faces, b = fs.includes('neutral') ? 'neutral' : fs[0], fi = { mode: 'face' };
      const idle = ['happy', 'neutral', 'neutral', 'serious', 'neutral', 'flustered', 'neutral'].filter(f => fs.includes(f));
      L.rest = () => show(faceSrc(L, b), fi);
      const shy = o.react && /date|swim|sweater|moviedate|lagoon/.test(o.react.id) && fs.includes('flustered');
      const hi = (o.greet || o.react) && (shy ? 'flustered' : fs.includes('happy') ? 'happy' : null);
      show(faceSrc(L, hi || b), fi, { at, snap: o.snap });
      if (hi) later(() => L.rest(), (at || 0) + 1800);
      let k = 0;
      if (idle.length > 1) every(() => { k = (k + 1) % idle.length; show(faceSrc(L, idle[k]), fi); }, 6000);
      L.strike = () => { const xs = ['happy', 'surprised', 'flustered', 'serious'].filter(x => fs.includes(x)); if (!xs.length) return; show(faceSrc(L, xs[Math.floor(Math.random() * xs.length)]), fi); later(() => L.rest(), 2600); };
    } else {
      show(L.src, { mode: 'pose', pending: L.pending }, { at, snap: o.snap });
      L.rest = () => {}; L.strike = () => {};
    }
    const rest = L.rest, strike = L.strike;
    L.rest = () => { if (!bt.evk) rest(); }; L.strike = () => { if (!bt.evk) strike(); };
  }
  const walk = () => $('.g-fr-walk');
  let anim = null;
  function hop() { if (!opt().reduced) walk().animate([{ transform: 'none' }, { transform: 'translateY(-14px) scale(1.01)', offset: 0.4 }, { transform: 'none' }], { duration: 520, easing: 'cubic-bezier(.3, 1.4, .5, 1)', composite: 'add' }); }
  // Moves in pixels (the figure's box has no width, so % moves would do nothing).
  function motion(kind, fromLeft) {
    if (anim) anim.cancel(); anim = null;
    if (opt().reduced) return;
    const w = walk();
    if (kind === 'twirl') {
      anim = w.animate([{ transform: 'none' }, { transform: 'scaleX(.04) translateY(-10px)', offset: 0.45 }, { transform: 'scaleX(.04) translateY(-10px)', offset: 0.55 }, { transform: 'none' }], { duration: 620, easing: 'cubic-bezier(.5, 0, .4, 1)' });
      return;
    }
    // Walks in from beyond the booth's edge: four steps with a small bob, leaning into the walk, then a settle.
    const s = (fromLeft ? -1 : 1) * bt.el.clientWidth * 0.8, lean = fromLeft ? 2 : -2, f = (x, y, r, o) => ({ transform: `translateX(${x}px) translateY(${y}px) rotate(${r}deg)`, offset: o });
    anim = w.animate([f(s, 0, lean, 0), f(s * 0.74, -9, lean, 0.2), f(s * 0.5, 0, lean, 0.38), f(s * 0.28, -8, lean * 0.7, 0.55), f(s * 0.1, 0, lean * 0.4, 0.72), f(-s * 0.015, -4, -lean * 0.2, 0.86), f(0, 0, 0, 1)],
      { duration: 1250, easing: 'cubic-bezier(.25, .6, .35, 1)', fill: 'backwards' });
  }
  function curtain(state) {
    const el = bt.el;
    el.classList.remove('opening', 'peek', 'shut'); void el.offsetWidth;
    if (state === 'open') { el.classList.add('opening'); later(() => el.classList.remove('opening'), 800); }
    else el.classList.add(state);
  }

  /* ── Sounds (Web Audio, nothing to load; quiet when sound effects are off; the SFX volume applies) ── */
  let ac = null;
  function sound(kind, v = 1) {
    const s = ST();
    if (!s.sfx || localStorage.getItem('kg-femc-sound') === 'off') return;
    if (navigator.userActivation && !navigator.userActivation.hasBeenActive) return;
    try {
      const A = window.AudioContext || window.webkitAudioContext; if (!A) return;
      ac = ac || new A(); if (ac.state === 'suspended') ac.resume().catch(() => {});
      const out = ac.createGain(); out.gain.value = Math.max(0, Math.min(1, (s.sfxVol ?? 100) / 100)); out.connect(ac.destination);
      const t = ac.currentTime + 0.01;
      if (kind === 'swish' || kind === 'rings') {
        const len = 0.38, buf = ac.createBuffer(1, Math.floor(ac.sampleRate * len), ac.sampleRate), d = buf.getChannelData(0);
        for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.sin(Math.PI * i / d.length);
        const src = ac.createBufferSource(), f = ac.createBiquadFilter(), g = ac.createGain();
        src.buffer = buf; f.type = 'bandpass'; f.Q.value = 0.8; f.frequency.setValueAtTime(900, t); f.frequency.exponentialRampToValueAtTime(2600, t + len);
        g.gain.value = 0.14 * v; src.connect(f).connect(g).connect(out); src.start(t);
        if (kind === 'rings') for (let k = 0; k < 4; k++) {
          const o = ac.createOscillator(), og = ac.createGain(); o.type = 'triangle'; o.frequency.value = 2400 + k * 180;
          og.gain.setValueAtTime(0, t + k * 0.05); og.gain.linearRampToValueAtTime(0.025 * v, t + k * 0.05 + 0.005); og.gain.exponentialRampToValueAtTime(0.0001, t + k * 0.05 + 0.12);
          o.connect(og).connect(out); o.start(t + k * 0.05); o.stop(t + k * 0.05 + 0.14);
        }
      } else if (kind === 'steps') {
        [0.2, 0.5, 0.78, 1.02].forEach(dt => { const o = ac.createOscillator(), g = ac.createGain();
          o.type = 'sine'; o.frequency.setValueAtTime(140, t + dt); o.frequency.exponentialRampToValueAtTime(60, t + dt + 0.09);
          g.gain.setValueAtTime(0.0001, t + dt); g.gain.exponentialRampToValueAtTime(0.1 * v, t + dt + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + dt + 0.12);
          o.connect(g).connect(out); o.start(t + dt); o.stop(t + dt + 0.14); });
      }
    } catch (e) {}
  }

  /* ── The other tabs, the sheer curtain, the couple partner ── */
  function extras(s, x) {
    const Cs = C(), o = opt(), W = bt.el.clientWidth;
    // A wallpaper you're looking at (or the one you wear) is the back wall.
    const wp = x && x.kind === 'wallpaper' ? x : Cs.onIn('wallpaper');
    const wall = $('.g-fr-wall');
    wall.classList.toggle('on', !!wp);
    wall.style.background = wp ? (wp.css ? wp.css : `url('${base()}${wp.bg}') center / cover no-repeat`) : '';
    bt.wall = wp ? wp.id : null;
    // Menu colours / a battle theme: the curtain and the lights.
    const v = x && (x.kind === 'uitheme' || x.kind === 'battleui') && Cs.PAL[x.pal];
    [['--cv-a', v && `color-mix(in srgb, ${v[0]} 45%, ${v[3]})`], ['--cv-b', v && v[0]], ['--cv-c', v && v[1]], ['--cv-d', v && v[3]], ['--bulb', v && v[2]]]
      .forEach(([k, val]) => (val ? bt.el.style.setProperty(k, val) : bt.el.style.removeProperty(k)));
    // A title screen: a small card slides in.
    const tc = $('.g-fr-tcard'), tt = x && x.kind === 'title' && x.title;
    tc.classList.toggle('on', !!tt);
    if (tt) tc.innerHTML = `<span style="--a:${tt[0]};--b:${tt[1]}"><img src="${base()}assets/femc/title/keyart.webp" alt="" style="${x.titleFilter ? `filter:${x.titleFilter}` : ''}"><b>Solstice</b></span>`;
    // A weapon or an Evoker, held up in front.
    const prop = $('.g-fr-prop'), was = prop.dataset.id || '';
    const pid = x && ((x.kind === 'weapon' && Cs.ready(x)) || x.kind === 'evoker') ? x.id : '';
    if (pid !== was) {
      prop.dataset.id = pid; prop.innerHTML = '';
      if (pid && x.kind === 'weapon') prop.innerHTML = `<img src="${SK(x.id)}weapon.webp" alt="" style="width:${W * 0.95}px;left:${-W * 0.5}px;bottom:-40px;transform:rotate(-24deg)">`;
      if (pid && x.kind === 'evoker') prop.innerHTML = `<img src="${base()}assets/femc/battle/art/summon/evoker-prop.webp" alt="" style="width:${W * 0.42}px;left:${W * 0.02}px;bottom:0;transform:rotate(-14deg);filter:${x.filter} drop-shadow(0 10px 16px rgba(0,0,0,.6))">`;
      const im = prop.firstChild;
      if (im && !o.reduced) im.animate([{ translate: '0 30px', opacity: 0 }, { translate: '0 0', opacity: 1 }], { duration: 500, easing: 'cubic-bezier(.2, 1.3, .4, 1)' })
        .finished.then(() => { if (im.isConnected && !o.perf) im.animate([{ translate: '0 0' }, { translate: '0 -8px' }, { translate: '0 0' }], { duration: 3000, iterations: Infinity, easing: 'ease-in-out' }); }).catch(() => {});
    }
    // Solar takes her Evoker pose while you look at Evokers (her worn outfit's set, else her own).
    const L = bt.L, evk = s.who === 'solar' && s.kind === 'evoker' && x && x.kind === 'evoker' && L && L.mode === 'hd' && L.have.includes('evoker');
    if (evk && !bt.evk) { bt.evk = true; show(hdSrc(L, 'evoker'), hdInfo(L, 'evoker')); }
    else if (!evk && bt.evk && L) { bt.evk = false; L.rest(); }
    bt.evk = !!evk;
    // Not owned (and its art is in): a sheer curtain.
    const sheer = $('.g-fr-sheer'), locked = !!(x && Cs.ready(x) && !Cs.owns(x.id));
    sheer.classList.toggle('on', locked);
    if (locked) sheer.firstChild.textContent = x.pool === false ? 'A capsule series reward' : 'Find it in the Boutique';
    bt.sheer = locked;
  }
  function partner(outfit) {
    const Cs = C(), o = opt(), stage = $('.g-fr-stage'), box = $('.g-fr-partner');
    const mate = o.fx && outfit && outfit.couple && Cs.ITEMS.find(i => i.couple === outfit.couple && i.id !== outfit.id && Cs.ready(i) && Cs.metOk(i));
    if (!mate) {
      if (bt.partner) {
        stage.classList.remove('duo'); bt.partner = null;
        const pin = box.firstChild;
        if (pin && !o.reduced) pin.animate([{ translate: '0 0' }, { translate: `${bt.el.clientWidth * 0.5}px 0` }], { duration: 350, fill: 'forwards' }).finished.then(() => { if (!bt.partner) box.innerHTML = ''; }).catch(() => {});
        else box.innerHTML = '';
      }
      return;
    }
    if (bt.partner === mate.id) return;
    bt.partner = mate.id;
    const H = bt.el.clientHeight, W = bt.el.clientWidth, R = (AR().skins || {})[mate.id] || {}, fs = (R.portraits || {})[mate.who] || [];
    // Their matching outfit's scene face (waist up, smiling), else its battle frame.
    const face = fs.length ? `${SK(mate.id)}portraits/${mate.who}/${fs.includes('happy') ? 'happy' : fs[0]}.webp?v=${SKIN_V}` : null;
    const src = face || `${SK(mate.id)}${mate.who}-pose-0.webp?v=${SKIN_V}`, w = face ? Math.min(W * 0.62, H * 0.6) : H * 0.72;
    const nm = mate.who === 'solar' ? 'Solar' : (G.LINKS && G.LINKS[mate.who] && G.LINKS[mate.who].short) || mate.who;
    box.innerHTML = `<div class="g-fr-pin" data-mate="${esc(mate.id)}"><img src="${src}" alt="" style="width:${w}px;right:${-w * 0.36}px;bottom:0"><span class="g-fr-bub" style="right:${w * 0.12}px;bottom:${w * 0.92}px">${esc(nm)} · ${esc(mate.name)}</span></div>`;
    stage.classList.add('duo');
    const pin = box.firstChild;
    if (!o.reduced) {
      // Slides in from the edge, leans in to look, then a small bob now and then.
      pin.animate([{ transform: `translateX(${w}px) rotate(-8deg)` }, { transform: 'translateX(-14px) rotate(-5deg)', offset: 0.7 }, { transform: 'translateX(0) rotate(-4deg)' }], { duration: 900, delay: 350, easing: 'cubic-bezier(.25, .8, .3, 1)', fill: 'both' })
        .finished.then(() => { if (pin.isConnected && !o.perf) pin.animate([{ transform: 'rotate(-4deg)' }, { transform: 'translateY(-6px) rotate(-2.5deg)' }, { transform: 'rotate(-4deg)' }], { duration: 2600, iterations: Infinity, easing: 'ease-in-out' }); }).catch(() => {});
    } else pin.style.transform = 'rotate(-4deg)';
  }
  // Equip: sparkles and the outfit's own effect sheet (3 x 2 on black, played once).
  function sparkle(outfit) {
    const o = opt(); bt.fx = [];
    if (o.reduced) return;
    const box = $('.g-fr-fx'), W = bt.el.clientWidth, R = outfit ? (AR().skins || {})[outfit.id] || {} : {};
    if (outfit && R.fx && o.fx && !o.perf) {
      const s = W * 0.9, el = document.createElement('div'); el.className = 'g-fr-sheet';
      el.style.cssText = `width:${s}px;height:${s}px;background-image:url('${SK(outfit.id)}fx.webp?v=${R.fx}');background-size:${s * 3}px ${s * 2}px`;
      box.appendChild(el); bt.fx.push('sheet');
      let f = 0;
      const step = () => { if (f > 5 || !el.isConnected) { el.remove(); return; } el.style.backgroundPosition = `${-(f % 3) * s}px ${-Math.floor(f / 3) * s}px`; f++; setTimeout(step, 110); };
      step();
    }
    const n = o.perf ? 6 : 16; bt.fx.push(`sparks:${n}`);
    for (let i = 0; i < n; i++) {
      const sp = document.createElement('i'); sp.className = 'g-fr-spark'; box.appendChild(sp);
      const a = Math.random() * Math.PI * 2, d = W * (0.18 + Math.random() * 0.3), sc = 0.5 + Math.random();
      sp.style.background = i % 3 ? (o.calm ? '#ffd1e6' : '#fff') : 'var(--pink-2)';
      sp.animate([{ transform: 'translate(0,0) scale(0)', opacity: 1 }, { transform: `translate(${Math.cos(a) * d}px, ${Math.sin(a) * d}px) scale(${sc}) rotate(90deg)`, opacity: 1, offset: 0.6 }, { transform: `translate(${Math.cos(a) * d * 1.2}px, ${Math.sin(a) * d * 1.2 + 20}px) scale(0)`, opacity: 0 }],
        { duration: 900 + Math.random() * 300, easing: 'cubic-bezier(.2, .8, .4, 1)' }).finished.then(() => sp.remove()).catch(() => sp.remove());
    }
  }
  // Ultra / Super Rare: the glint and the curtain's edges.
  function rarity(x) {
    const o = opt();
    if (!x || o.reduced || !o.fx || x.r === 'R') return;
    const el = bt.el;
    el.classList.remove('ur', 'sr'); void el.offsetWidth; el.classList.add(x.r === 'UR' ? 'ur' : 'sr');
    later(() => el.classList.remove('ur', 'sr'), x.r === 'UR' ? 1600 : 1000);
    if (o.calm) return;
    const g = $('.g-fr-glint'), i = document.createElement('i'); g.appendChild(i);
    if (x.r === 'SR') i.classList.add('sr');
    i.animate([{ left: '-40%' }, { left: '120%' }], { duration: x.r === 'UR' ? 900 : 700, delay: 250, easing: 'cubic-bezier(.4, 0, .3, 1)', fill: 'both' }).finished.then(() => i.remove()).catch(() => i.remove());
    if (x.r === 'UR') sound('rings', 0.3);
  }

  /* ── Mount and update ── */
  // state: { who, kind, sel, tag, acts } (cosmetics.js). The booth decides what to play from what changed.
  function mount(slot, s) {
    if (!slot) return null;
    let fresh = false;
    if (!bt.el || !bt.alive) { if (bt.el) kill(); bt.el = build(); bt.alive = true; fresh = true; }
    slot.replaceWith(bt.el);
    clearInterval(bt.watch);
    // A booth that has left the page (another tab, the Boutique, the menu closed) is dropped; the next one starts fresh.
    bt.watch = setInterval(() => { if (bt.el && !bt.el.isConnected) kill(); }, 500);
    update(s, fresh);
    return bt.el;
  }
  function update(s, fresh) {
    const Cs = C(), o = opt(), el = bt.el;
    el.classList.toggle('reduced', o.reduced); el.classList.toggle('perf', o.perf); el.classList.toggle('calm', o.calm);
    el.dataset.who = s.who;
    $('.g-fr-tag').innerHTML = s.tag || '';
    const acts = $('.g-fr-acts'); acts.innerHTML = s.acts || '';
    acts.querySelector('[data-fr-pose]')?.addEventListener('click', () => { if (bt.L && bt.L.strike) { bt.L.strike(); hop(); } });
    const x = s.sel ? Cs.byId(s.sel) : null;
    const outfit = x && x.kind === 'skin' && x.who === s.who ? x : Cs.onIn(`skin:${s.who}`);
    const pending = el.querySelector('.g-wd-pending'); if (pending) pending.remove();
    if (x && x.art && !Cs.ready(x)) el.insertAdjacentHTML('beforeend', '<span class="g-wd-pending">Art coming</span>');
    const L = lookOf(s.who, outfit), selChanged = s.sel !== bt.sel;
    if (fresh || !bt.who) {
      bt.who = s.who;
      begin(L, { greet: true, at: o.reduced ? 0 : 350 });
      if (!o.reduced) { curtain('shut'); motion('enter', false); later(() => { motion('enter', false); curtain('open'); sound('rings', 0.6); sound('steps'); }, 350); }
    } else if (s.who !== bt.who) {
      // A new person: the curtain sweeps shut, they walk in from the side you came from as it opens.
      const fromLeft = ORDER.indexOf(s.who) < ORDER.indexOf(bt.who);
      bt.who = s.who; bt.partner = null; $('.g-fr-partner').innerHTML = ''; $('.g-fr-stage').classList.remove('duo');
      curtain('shut'); sound('swish');
      begin(L, { greet: true, at: o.reduced ? 250 : 430, snap: true });
      later(() => { motion('enter', fromLeft); curtain('open'); sound('rings', 0.8); sound('steps'); }, o.reduced ? 250 : 650);
    } else if (L.key !== bt.key) {
      // Same person, new clothes: a quick half-curtain and a twirl; the picture changes mid-turn.
      curtain('peek'); sound('swish', 0.6); motion('twirl');
      begin(L, { react: outfit && outfit === x ? x : null, at: 290, snap: !o.reduced });
      later(() => { curtain('open'); sound('rings', 0.5); }, 410);
      if (x && x === outfit) later(() => rarity(x), 300);
    } else if (selChanged && x && x.kind !== 'skin') { hop(); rarity(x); }
    bt.key = L.key; bt.sel = s.sel;
    extras(s, x);
    partner(outfit);
    if (bt.cue === 'equip') {
      bt.cue = null; sparkle(outfit && (!x || x === outfit) ? outfit : null); hop(); sound('rings', 0.5);
      if (bt.L && bt.L.mode === 'face' && bt.L.faces.includes('happy')) { show(faceSrc(bt.L, 'happy'), { mode: 'face' }); later(() => bt.L.rest(), 2200); }
    }
  }
  addEventListener('resize', () => {
    if (!bt.el || !bt.el.isConnected) return;
    bt.el.querySelectorAll('.g-fr-breathe img').forEach(place);
    if (bt.partner) { bt.partner = null; $('.g-fr-partner').innerHTML = ''; partner((C().byId(bt.sel) && C().byId(bt.sel).kind === 'skin') ? C().byId(bt.sel) : C().onIn(`skin:${bt.who}`)); }
  });

  return {
    ORDER, faceIcon, lookOf, mount,
    cue: k => { bt.cue = k; },
    freeze: (v = true) => { bt.frozen = !!v; if (v) stopTimers(); },
    state: () => {
      const cur = bt.el && bt.el.querySelector('.g-fr-breathe img.cur');
      return { alive: bt.alive && !!bt.el && bt.el.isConnected, who: bt.who, key: bt.key, mode: bt.mode, src: cur ? cur.src : null, partner: bt.partner, wall: bt.wall || null,
        sheer: !!bt.sheer, prop: bt.el ? bt.el.querySelector('.g-fr-prop').dataset.id || null : null, tcard: !!(bt.el && bt.el.querySelector('.g-fr-tcard.on')), fx: bt.fx || [],
        shut: !!(bt.el && bt.el.classList.contains('shut')), evoker: bt.evk };
    },
  };
})();
