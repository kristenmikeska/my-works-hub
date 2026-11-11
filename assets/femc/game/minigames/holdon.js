/* FEMC epilogue minigame: hold on (Nov 11 2026, EPILOGUE-EXPANSION-PLAN.md: "'Hold on' for the glitch nights: keep her in place
   against the pull"). A DEMO: not in the story yet (try it at mockups/minigames/index.html).

   FemcHoldOn.play({ host, mute, difficulty, seconds, bg, onDone }) -> Promise<result>
     host        element to draw into (default document.body; a full-screen overlay is added inside it)
     mute        no audio (the captions and meters carry everything)
     difficulty  'easy' | 'normal' | 'hard' (length 60 / 75 / 90 s, anchors per surge 2 / 3 / 4, how fast breath runs out,
                 slips allowed 3 / 3 / 2; default 'normal')
     seconds     override the length
     bg          a background id under assets/femc/bg/ (default epi-r-her-room-night; a drawn room shows if it's missing)
     onDone      called with the result too
   result = { won, grade: 'S' | 'A' | 'B' | 'C', slips, anchors, offered, missed, held, quit }
     held = seconds she stayed (the whole length when won)

   How it plays: a quiet room, and the world glitches in waves (glitch.js's look: scanlines, static, a pink colour split,
   the room tearing in bands). Each wave is QUIET → BUILD (the glitch climbs, the hum rises, anchors appear) → SURGE (the pull).
     Hold on   hold the mouse button / a finger anywhere, or Space. Holding is grip against the pull.
     Breath    holding spends breath; letting go refills it. Hold all the time and she runs out right when a surge hits (grip
               drops until she's caught her breath), so the rhythm is: let go in the quiet, hold from the build.
     Anchors   during the build, 2-4 glowing things in the room (a lamp, a mug, her hand, the clock, rain on the window, a voice,
               the blanket, string lights: "five things you can see"). While holding, rest the pointer / finger on one until its
               ring fills (or press its number, 1-4) to ground her. Each one taken weakens that surge; the ones still up when
               the surge peaks are missed.
     Slipping  pull stronger than her grip fills the slip meter (missed anchors add to it; it drains in the quiet). Full = a
               slip: she thins out and comes back. Too many slips and she's gone ("You slipped."); last to the end = held.
   Grade: S held, no slips, 85%+ anchors; A held, ≤1 slip, 60%+; B held; C slipped (or quit).
   Title card (art title, held 1.8 s, click / a key skips; a drawn one without the art). Art, optional (art/minigames/holdon/):
   title.webp, solar.webp (her figure, transparent, from behind or seated); until then a drawn silhouette.
   Sounds: Web Audio, no files (a hum that rises with the pull, static with the glitch, a chime per anchor, a falling tone on a
   slip). Pink and black only. Reduced motion: no tearing or drifting, the glitch shows as a still overlay. Esc pauses. */
window.FemcHoldOn = (() => {
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const base = () => (window.FemcGame && window.FemcGame.base) || (document.querySelector('script[src*="minigames/holdon"]')?.src.split('assets/')[0]) || '';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const rnd = ([a, b]) => a + Math.random() * (b - a);
  const ART = id => `${base()}assets/femc/game/art/minigames/holdon/${id}.webp`;
  const BG = id => `${base()}assets/femc/bg/${id}.webp`;
  const DIFF = {
    easy:   { secs: 60, per: 2, dwell: 260, drain: 7,  regen: 26, k: 120, maxSlips: 3, build: 3400, surge: [2000, 2600], calm: [4200, 6200], grow: 0.25 },
    normal: { secs: 75, per: 3, dwell: 320, drain: 9,  regen: 22, k: 150, maxSlips: 3, build: 3000, surge: [2200, 3000], calm: [3600, 5600], grow: 0.35 },
    hard:   { secs: 90, per: 4, dwell: 380, drain: 11, regen: 18, k: 175, maxSlips: 2, build: 2600, surge: [2400, 3200], calm: [3000, 4800], grow: 0.45 },
  };
  // the anchors: generic sensory things in a room
  const THINGS = [
    { id: 'lamp', sense: 'See', say: 'The lamp. Still on.' },
    { id: 'mug', sense: 'Warm', say: 'The mug. Still warm.' },
    { id: 'hand', sense: 'Feel', say: 'Your hand. Still yours.' },
    { id: 'clock', sense: 'Hear', say: 'The clock. Still ticking.' },
    { id: 'window', sense: 'See', say: 'Rain on the window. Count it.' },
    { id: 'voice', sense: 'Hear', say: 'A voice: "Hey. Stay here."' },
    { id: 'blanket', sense: 'Feel', say: 'The blanket. Soft. Heavy.' },
    { id: 'lights', sense: 'See', say: 'String lights. One, two, three…' },
  ];
  const P = '#ff9ac8', L = '#ffd1e6';
  const SVG = {
    lamp: `<path d="M13 22h22l-6-15H19z" fill="${P}"/><path d="M24 22v15M15 40h18" stroke="${L}" stroke-width="3" stroke-linecap="round"/><circle cx="24" cy="25" r="5" fill="${L}" opacity=".6"/>`,
    mug: `<path d="M9 17h23v14a9 9 0 0 1-9 9h-5a9 9 0 0 1-9-9z" fill="${P}"/><path d="M32 20h3a5 5 0 0 1 0 10h-3" stroke="${L}" stroke-width="3" fill="none"/><path d="M16 5c-2 3 2 5 0 8M23 5c-2 3 2 5 0 8" stroke="${L}" stroke-width="2" fill="none" stroke-linecap="round"/>`,
    hand: `<rect x="13" y="22" width="22" height="20" rx="9" fill="${P}"/><rect x="13" y="9" width="5" height="18" rx="2.5" fill="${P}"/><rect x="19.5" y="5" width="5" height="21" rx="2.5" fill="${P}"/><rect x="26" y="6" width="5" height="20" rx="2.5" fill="${P}"/><rect x="32" y="11" width="4.5" height="16" rx="2.25" fill="${P}"/><rect x="5" y="24" width="13" height="5" rx="2.5" transform="rotate(32 11 26)" fill="${P}"/>`,
    clock: `<circle cx="24" cy="25" r="16" fill="#2a0f1f" stroke="${P}" stroke-width="3"/><path d="M24 25V15M24 25l7 4" stroke="${L}" stroke-width="3" stroke-linecap="round"/><path d="M12 8l-4 4M36 8l4 4" stroke="${P}" stroke-width="3" stroke-linecap="round"/>`,
    window: `<rect x="7" y="6" width="34" height="36" rx="2" fill="#2a0f1f" stroke="${P}" stroke-width="3"/><path d="M24 6v36M7 24h34" stroke="${P}" stroke-width="2.5"/><path d="M13 11v4M19 16v4M30 11v4M35 17v4M14 29v4M33 30v4M20 34v4" stroke="${L}" stroke-width="2" stroke-linecap="round"/>`,
    voice: `<path d="M6 10h26a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H18l-8 7v-7H6a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4z" fill="${P}"/><path d="M39 14c3 3 3 9 0 12M43 10c5 5 5 15 0 20" stroke="${L}" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M10 20h18" stroke="#2a0f1f" stroke-width="2.5" stroke-linecap="round"/>`,
    blanket: `<path d="M5 14c6-4 12 4 19 0s13 4 19 0v22c-6 4-12-4-19 0s-13-4-19 0z" fill="${P}"/><path d="M5 22c6-4 12 4 19 0s13 4 19 0M5 30c6-4 12 4 19 0s13 4 19 0" stroke="${L}" stroke-width="2" fill="none" opacity=".7"/>`,
    lights: `<path d="M3 12c10 10 32 10 42 0" stroke="${L}" stroke-width="2" fill="none"/><g fill="${P}"><ellipse cx="10" cy="22" rx="3.5" ry="5"/><ellipse cx="19" cy="26" rx="3.5" ry="5"/><ellipse cx="29" cy="26" rx="3.5" ry="5"/><ellipse cx="38" cy="22" rx="3.5" ry="5"/></g><g fill="${L}" opacity=".5"><circle cx="10" cy="23" r="7"/><circle cx="29" cy="27" r="7"/></g>`,
  };
  // where anchors can sit (% of the screen), away from her in the middle
  const SLOTS = [[14, 30], [30, 20], [70, 20], [86, 32], [12, 60], [27, 72], [73, 72], [88, 58], [50, 18], [40, 82], [60, 82]];
  // her stand-in: a seated silhouette from behind, rim-lit pink
  const FIGURE = `<svg viewBox="0 0 200 240" aria-hidden="true"><defs><linearGradient id="ho-rim" x1="0" x2="1"><stop offset="0" stop-color="#ff4f9e"/><stop offset=".25" stop-color="#2a0f1f"/><stop offset=".75" stop-color="#2a0f1f"/><stop offset="1" stop-color="#ff4f9e"/></linearGradient></defs>
    <path d="M100 18c-24 0-38 18-38 40 0 16 6 30 4 46-2 10-8 16-8 16h84s-6-6-8-16c-2-16 4-30 4-46 0-22-14-40-38-40z" fill="url(#ho-rim)"/>
    <path d="M44 240c0-60 16-104 56-108s56 48 56 108z" fill="url(#ho-rim)"/>
    <path d="M100 18c-24 0-38 18-38 40 0 16 6 30 4 46-2 10-8 16-8 16h84s-6-6-8-16c-2-16 4-30 4-46 0-22-14-40-38-40z M44 240c0-60 16-104 56-108s56 48 56 108z" fill="none" stroke="#ff9ac8" stroke-width="2" opacity=".7"/></svg>`;

  let cur = null; // test hook: FemcHoldOn.state()
  function play(o = {}) {
    return new Promise(done => {
      const host = o.host || document.body;
      const D = DIFF[o.difficulty] || DIFF.normal, LEN = (o.seconds || D.secs) * 1000;
      const still = reduced.matches;
      const st = { t: 0, phase: 'calm', pStart: 0, pEnd: 3200, wave: null, waves: 0, pull: 0, gl: 0, slip: 0, slips: 0, breath: 100, tired: false,
        anchors: 0, offered: 0, missed: 0, paused: false, over: false, begun: false };
      cur = st;
      const pts = new Map(); let mouse = null, space = false;
      const holding = () => !st.paused && (pts.size > 0 || space);
      const bg = BG(o.bg || 'epi-r-her-room-night');
      const el = document.createElement('div');
      el.className = 'mg-ho' + (still ? ' still' : '');
      el.setAttribute('role', 'application');
      el.setAttribute('aria-label', 'Hold on');
      el.innerHTML = `
        <div class="ho-scene">
          <div class="ho-room"><img class="ho-bg" src="${bg}" alt="" onerror="this.remove()"></div>
          <div class="ho-split"><i style="background-image:url('${bg}')"></i></div>
          ${[0, 1, 2].map(() => `<div class="ho-band" style="background-image:url('${bg}')"></div>`).join('')}
          <div class="ho-her"><img src="${ART('solar')}" alt="" onerror="this.remove()">${FIGURE}</div>
          <div class="ho-streaks"></div><div class="ho-static"></div><div class="ho-scan"></div><div class="ho-edge"></div>
          <div class="ho-anchors"></div>
        </div>
        <div class="ho-top"><b class="ho-name" data-t="HOLD ON">HOLD ON</b><span class="ho-phase">Quiet</span><span class="ho-clock">1:15</span></div>
        <div class="ho-meters">
          <div class="ho-m ho-slipm"><small>Slipping</small><span><i></i></span><em class="ho-pips"></em></div>
          <div class="ho-m ho-breathm"><small>Breath</small><span><i></i></span></div>
        </div>
        <div class="ho-pull"><span><i></i></span><small>Pull</small></div>
        <div class="ho-grip" aria-hidden="true"><b>HOLD</b></div>
        <p class="ho-say" aria-live="polite"></p>
        <p class="ho-help">Hold (mouse, finger or Space) when it pulls. Let go in the quiet to breathe. While holding, rest on the glowing things (or 1–4). Esc pauses.</p>
        <div class="mg-pause" hidden><b>Paused</b><button type="button" data-mg="resume">Resume</button><button type="button" data-mg="quit">Quit</button></div>
        <div class="mg-end" hidden></div>`;
      host.appendChild(el);
      const $ = s => el.querySelector(s);
      const bands = [...el.querySelectorAll('.ho-band')], her = $('.ho-her'), anchorsEl = $('.ho-anchors');
      const say = (txt, kind = '') => { const c = $('.ho-say'); c.textContent = txt; c.className = 'ho-say on ' + kind; clearTimeout(say.t); say.t = setTimeout(() => c.classList.remove('on'), 2200); };

      /* sound: Web Audio, made here */
      let ac = null, A = null;
      const audio = () => {
        if (o.mute || ac) return;
        try { ac = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { ac = null; return; }
        const master = ac.createGain(); master.gain.value = 0.9; master.connect(ac.destination);
        const lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 220; lp.Q.value = 5;
        const g = ac.createGain(); g.gain.value = 0.0001; lp.connect(g); g.connect(master);
        const o1 = ac.createOscillator(); o1.type = 'sine'; o1.frequency.value = 55;
        const o2 = ac.createOscillator(); o2.type = 'sawtooth'; o2.frequency.value = 55.4;
        const g2 = ac.createGain(); g2.gain.value = 0.3; o1.connect(lp); o2.connect(g2); g2.connect(lp); o1.start(); o2.start();
        const buf = ac.createBuffer(1, ac.sampleRate, ac.sampleRate), d = buf.getChannelData(0);
        for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
        const ns = ac.createBufferSource(); ns.buffer = buf; ns.loop = true;
        const bp = ac.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 2600; bp.Q.value = 0.7;
        const ng = ac.createGain(); ng.gain.value = 0; ns.connect(bp); bp.connect(ng); ng.connect(master); ns.start();
        A = { master, lp, g, o1, o2, ng };
      };
      let soundAt = 0;
      const hum = () => {
        if (!A || st.t - soundAt < 50) return; soundAt = st.t;
        const t = ac.currentTime, p = Math.min(1.4, st.pull);
        A.o1.frequency.setTargetAtTime(55 + p * 50, t, 0.15); A.o2.frequency.setTargetAtTime(55.4 + p * 51, t, 0.15);
        A.lp.frequency.setTargetAtTime(200 + p * 1300, t, 0.15); A.g.gain.setTargetAtTime(0.025 + p * 0.12, t, 0.2);
        A.ng.gain.setTargetAtTime(Math.max(0, st.gl - 0.2) * 0.05, t, 0.1);
      };
      const tone = (f, dur, type = 'sine', vol = 0.12, at = 0, to = 0) => {
        if (!A) return;
        const t = ac.currentTime + at, os = ac.createOscillator(), g = ac.createGain();
        os.type = type; os.frequency.setValueAtTime(f, t); if (to) os.frequency.exponentialRampToValueAtTime(to, t + dur);
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        os.connect(g); g.connect(A.master); os.start(t); os.stop(t + dur + 0.05);
      };
      const NOTES = [880, 1046.5, 1318.5, 1568];
      const K = {
        chime: n => { tone(NOTES[n % 4], 0.9, 'sine', 0.11); tone(NOTES[n % 4] * 1.5, 0.7, 'sine', 0.04, 0.04); },
        slip: () => { tone(420, 0.8, 'sawtooth', 0.08, 0, 60); tone(210, 0.9, 'sine', 0.1, 0, 40); },
        warn: () => tone(110, 0.6, 'triangle', 0.06, 0, 160),
        tired: () => tone(150, 0.4, 'sine', 0.07, 0, 110),
        calm: () => { tone(659, 1.2, 'sine', 0.05); tone(988, 1.2, 'sine', 0.03, 0.12); },
      };

      /* waves */
      const prog = () => Math.min(1, st.t / LEN);
      const setPhase = (ph, dur) => { st.phase = ph; st.pStart = st.t; st.pEnd = st.t + dur; $('.ho-phase').textContent = { calm: 'Quiet', build: 'It\'s coming', surge: 'Hold on' }[ph]; el.dataset.phase = ph; };
      const startWave = () => {
        const left = LEN - st.t, final = left < D.build + D.surge[1] + D.calm[1] + 1500;
        const n = D.per + (final && D.per < 4 ? 1 : 0);
        const I = (st.waves ? 0.95 : 0.8) + D.grow * prog() + Math.random() * 0.15 + (final ? 0.15 : 0);
        const things = [...THINGS].sort(() => Math.random() - 0.5).slice(0, n);
        const slots = [...SLOTS].sort(() => Math.random() - 0.5);
        const dir = pick(['l', 'r', 'u']);
        st.wave = { I, n, got: 0, dir, final, list: things.map((th, i) => ({ th, key: i + 1, slot: slots[i], at: st.t + i * Math.min(320, D.build / (n + 1)), dwell: 0, state: 'wait', node: null })) };
        st.waves++; st.offered += n; el.dataset.dir = dir;
        setPhase('build', D.build);
        say(final ? 'This one\'s bigger. Ground her.' : pick(['It\'s starting.', 'Something\'s pulling.', 'Here it comes. Find something real.', 'The room is thinning.']), 'warn');
        K.warn();
      };
      const spawn = a => {
        a.state = 'up';
        const b = document.createElement('button'); b.type = 'button'; b.className = 'ho-anchor'; b.tabIndex = -1;
        b.style.left = a.slot[0] + '%'; b.style.top = a.slot[1] + '%';
        b.innerHTML = `<span class="ho-ring"></span><svg viewBox="0 0 48 48" aria-hidden="true">${SVG[a.th.id]}</svg><b>${a.key}</b><small>${esc(a.th.sense)}</small>`;
        b.setAttribute('aria-label', `${a.th.sense}: ${a.th.id} (key ${a.key})`);
        anchorsEl.appendChild(b); a.node = b;
      };
      const grab = a => {
        if (a.state !== 'up') return;
        a.state = 'got'; st.wave.got++; st.anchors++; st.slip = Math.max(0, st.slip - 6);
        a.node.classList.add('got'); setTimeout(() => a.node && a.node.remove(), 900);
        say(a.th.say, 'good'); K.chime(st.wave.got - 1);
      };
      const missAll = () => {
        if (!st.wave) return;
        st.wave.list.forEach(a => {
          if (a.state === 'up' || a.state === 'wait') {
            if (a.state === 'up') { a.node.classList.add('lost'); const n = a.node; setTimeout(() => n.remove(), 600); }
            a.state = 'lost'; st.missed++; st.slip += 6;
          }
        });
      };
      const endWave = () => {
        missAll(); st.wave = null; anchorsEl.querySelectorAll('.ho-anchor:not(.got)').forEach(n => n.remove());
        if (LEN - st.t < 1200) return setPhase('calm', LEN - st.t + 50);
        setPhase('calm', rnd(D.calm) * (1 - 0.15 * prog()));
        say(pick(['It passed. Breathe.', 'Quiet again. Let go, breathe.', 'Still here.']), ''); K.calm();
      };
      const slipNow = () => {
        st.slips++; st.slip = 25; K.slip();
        el.classList.remove('slipped'); void el.offsetWidth; el.classList.add('slipped'); setTimeout(() => el.classList.remove('slipped'), 1300);
        if (st.slips >= D.maxSlips) return finish(false);
        say(D.maxSlips - st.slips === 1 ? 'She almost went. Once more and she\'s gone.' : 'She slipped. Pull her back.', 'bad');
      };

      /* one frame */
      let tearAt = 0;
      const step = dt => {
        st.t += dt;
        const w = st.wave, k = Math.min(1, (st.t - st.pStart) / Math.max(1, st.pEnd - st.pStart));
        const fac = w ? 1 - 0.5 * (w.got / w.n) : 1;
        let target, gl;
        if (st.phase === 'calm') { target = 0.1 + 0.05 * Math.sin(st.t / 700); gl = 0.04; }
        else if (st.phase === 'build') { target = (0.15 + (0.5 * w.I - 0.15) * k * k) * (0.6 + 0.4 * fac); gl = 0.12 + 0.6 * k; }
        else { const env = 0.75 + 0.25 * Math.sin(Math.PI * k); target = w.I * env * fac; gl = 0.65 + 0.35 * env * (0.5 + 0.5 * fac); }
        st.pull += (target - st.pull) * Math.min(1, dt / 120);
        st.gl = Math.min(1, gl + Math.max(0, st.slip - 60) / 200);
        // breath
        const h = holding();
        if (h) { st.breath -= D.drain * dt / 1000; if (st.breath <= 0 && !st.tired) { st.breath = 0; st.tired = true; say('Out of breath. Let go in the quiet.', 'bad'); K.tired(); } st.breath = Math.max(0, st.breath); }
        else { st.breath = Math.min(100, st.breath + D.regen * dt / 1000); if (st.tired && st.breath >= 30) st.tired = false; }
        // slip
        const grip = h ? (st.tired ? 0.1 : 0.62) : 0;
        st.slip += Math.max(0, st.pull - grip - 0.2) * D.k * dt / 1000;
        if (st.phase === 'calm' && !h) st.slip = Math.max(0, st.slip - 4 * dt / 1000);
        if (st.slip >= 100) { slipNow(); if (st.over) return; }
        // anchors: spawn, dwell, miss at the peak
        if (w) {
          const peaked = st.phase === 'surge' && k >= 0.5;
          const spotsNow = [...pts.values()]; if (space && mouse) spotsNow.push(mouse);
          w.list.forEach(a => {
            if (a.state === 'wait' && st.t >= a.at && !peaked) spawn(a);
            if (a.state !== 'up') return;
            if (peaked) { a.node.classList.add('lost'); const n = a.node; setTimeout(() => n.remove(), 600); a.state = 'lost'; st.missed++; st.slip += 6; return; }
            let on = false;
            if (h) { const r = a.node.getBoundingClientRect(), m = 12; on = spotsNow.some(p => p.x >= r.left - m && p.x <= r.right + m && p.y >= r.top - m && p.y <= r.bottom + m); }
            a.dwell = on ? a.dwell + dt : Math.max(0, a.dwell - dt * 0.5);
            a.node.style.setProperty('--d', Math.min(1, a.dwell / D.dwell).toFixed(3));
            a.node.classList.toggle('touch', on);
            if (a.dwell >= D.dwell) grab(a);
          });
        }
        // phases
        if (st.t >= st.pEnd) {
          if (st.phase === 'calm') { if (LEN - st.t < D.build + D.surge[1] + 600) { if (st.t >= LEN) return finish(true); } else startWave(); }
          else if (st.phase === 'build') { setPhase('surge', rnd(D.surge)); say(pick(['Hold on.', 'Hold on. Don\'t let go.', 'Hold.']), 'warn'); }
          else endWave();
        }
        if (st.phase === 'calm' && st.t >= LEN) return finish(true);
        // tears (not with reduced motion)
        if (!still && st.t - tearAt > 90) {
          tearAt = st.t;
          bands.forEach(b => {
            if (st.gl < 0.4 || Math.random() < 0.3) { b.style.opacity = 0; return; }
            const top = Math.random() * 92, hh = 1.5 + Math.random() * 9 * st.gl;
            b.style.clipPath = `inset(${top}% 0 ${Math.max(0, 100 - top - hh)}% 0)`;
            b.style.transform = `translateX(${((Math.random() - 0.5) * 70 * st.gl).toFixed(1)}px)`; b.style.opacity = 1;
          });
        }
      };
      const paint = () => {
        const h = holding();
        el.style.setProperty('--g', st.gl.toFixed(3)); el.style.setProperty('--pull', Math.min(1, st.pull).toFixed(3)); el.style.setProperty('--slip', Math.min(1, st.slip / 100).toFixed(3));
        el.classList.toggle('gl-2', st.gl > 0.35); el.classList.toggle('gl-3', st.gl > 0.7);
        el.classList.toggle('holding', h); el.classList.toggle('tired', st.tired);
        $('.ho-slipm i').style.width = `${Math.min(100, st.slip)}%`;
        $('.ho-breathm i').style.width = `${st.breath}%`;
        $('.ho-pull i').style.height = `${Math.min(100, st.pull / 1.4 * 100)}%`;
        $('.ho-pips').textContent = '◆'.repeat(Math.max(0, D.maxSlips - st.slips)) + '◇'.repeat(Math.min(D.maxSlips, st.slips));
        const left = Math.ceil(Math.max(0, LEN - st.t) / 1000); $('.ho-clock').textContent = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`;
        if (!still) {
          const d = el.dataset.dir, p = Math.min(1.2, st.pull);
          const x = d === 'l' ? -p * 26 : d === 'r' ? p * 26 : 0, y = d === 'u' ? -p * 18 : 0;
          her.style.transform = `translate(calc(-50% + ${x.toFixed(1)}px), ${y.toFixed(1)}px)`;
        }
        hum();
      };
      let last = 0, raf = 0;
      const tick = now => {
        const dt = Math.min(100, now - (last || now)); last = now;
        if (!st.paused && !st.over) { step(dt); if (!st.over) paint(); }
        if (!st.over) raf = requestAnimationFrame(tick);
      };

      /* the end */
      const finish = won => {
        if (st.over) return; st.over = true; cancelAnimationFrame(raf); pts.clear(); space = false;
        const quit = won === 'quit'; won = won === true;
        if (A) { const t = ac.currentTime; A.g.gain.setTargetAtTime(0.0001, t, 0.3); A.ng.gain.setTargetAtTime(0, t, 0.1); }
        if (st.wave) missAll();
        const ratio = st.offered ? st.anchors / st.offered : 1;
        const grade = !won ? 'C' : st.slips === 0 && ratio >= 0.85 ? 'S' : st.slips <= 1 && ratio >= 0.6 ? 'A' : 'B';
        const res = { won, grade, slips: st.slips, anchors: st.anchors, offered: st.offered, missed: st.missed, held: Math.round(Math.min(st.t, LEN) / 1000), quit };
        el.classList.add(won ? 'won' : 'lost');
        if (won) K.calm();
        const end = $('.mg-end'); end.hidden = false;
        end.innerHTML = `<p class="ho-end-head">${won ? 'You held on.' : 'You slipped.'}</p><b class="mg-grade">${grade}</b>
          <dl><dt>Anchors</dt><dd>${st.anchors} / ${st.offered}</dd><dt>Slips</dt><dd>${st.slips}</dd><dt>Held</dt><dd>${res.held}s</dd></dl>
          <p class="mg-end-say">${won ? 'The room stayed where it was. So did she.' : 'For a moment, the room was empty.'}</p><button type="button">Continue</button>`;
        end.querySelector('button').focus();
        end.querySelector('button').onclick = () => { cleanup(); o.onDone?.(res); done(res); };
      };

      /* input */
      const blocked = e => !st.begun || st.over || st.paused || e.target.closest('.mg-pause, .mg-end, .ho-title');
      const down = e => {
        if (blocked(e)) return;
        e.preventDefault(); pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
        try { el.setPointerCapture(e.pointerId); } catch (err) {}
      };
      const move = e => { const p = { x: e.clientX, y: e.clientY }; if (e.pointerType === 'mouse') mouse = p; if (pts.has(e.pointerId)) pts.set(e.pointerId, p); };
      const up = e => pts.delete(e.pointerId);
      el.addEventListener('pointerdown', down); el.addEventListener('pointermove', move);
      el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up); el.addEventListener('lostpointercapture', up);
      el.addEventListener('contextmenu', e => e.preventDefault());
      const blur = () => { pts.clear(); space = false; };
      window.addEventListener('blur', blur);
      const pause = on => {
        st.paused = on; $('.mg-pause').hidden = !on; pts.clear(); space = false;
        if (ac) { try { on ? ac.suspend() : ac.resume(); } catch (e) {} }
        if (on) $('.mg-pause button').focus();
      };
      const key = e => {
        if (!el.isConnected || st.over) return;
        e.stopPropagation();
        if (!st.begun) return;
        if (e.key === 'Escape') { e.preventDefault(); pause(!st.paused); return; }
        if (st.paused) return;
        if (e.key === ' ') { e.preventDefault(); space = true; return; }
        if (/^[1-4]$/.test(e.key) && st.wave) {
          e.preventDefault();
          const a = st.wave.list.find(x => x.key === +e.key && x.state === 'up');
          if (!a) return;
          if (holding()) grab(a); else say('Hold on first (Space), then ground her.', 'warn');
        }
      };
      const keyUp = e => { if (e.key === ' ') { space = false; if (el.isConnected) e.preventDefault(); } };
      const cleanup = () => {
        cancelAnimationFrame(raf); window.removeEventListener('keydown', key, true); window.removeEventListener('keyup', keyUp, true);
        window.removeEventListener('blur', blur); window.removeEventListener('keydown', skipT, true);
        try { ac && ac.close(); } catch (e) {} el.remove();
      };
      $('.mg-pause').onclick = e => { const b = e.target.dataset.mg; if (b === 'resume') pause(false); if (b === 'quit') { pause(false); finish('quit'); } };
      window.addEventListener('keydown', key, true); window.addEventListener('keyup', keyUp, true);

      /* the title card: held 1.8 s (click / any key skips), then the quiet */
      const tt = document.createElement('div'); tt.className = 'ho-title';
      tt.innerHTML = `<b data-t="HOLD ON">HOLD ON</b><small>Keep her here.</small><img src="${ART('title')}" alt="" onerror="this.remove()">`;
      el.appendChild(tt);
      const begin = () => {
        if (st.begun || !el.isConnected) return; st.begun = true; window.removeEventListener('keydown', skipT, true);
        tt.classList.add('out'); setTimeout(() => tt.remove(), 450);
        audio(); setPhase('calm', 3200); el.dataset.dir = 'u';
        say('Quiet for now. Let go and breathe. When it pulls, hold on.', '');
        paint(); raf = requestAnimationFrame(tick);
      };
      const skipT = e => { if (e.key !== 'Escape') { e.preventDefault(); begin(); } };
      tt.onclick = begin; window.addEventListener('keydown', skipT, true); setTimeout(begin, 1800);
      paint();
    });
  }
  return { play, THINGS, DIFF, state: () => cur };
})();
