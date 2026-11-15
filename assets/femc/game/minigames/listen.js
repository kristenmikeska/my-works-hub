/* FEMC epilogue minigame: listen (Nov 10 2026, EPILOGUE-EXPANSION-PLAN.md step 2; redone the same day: Kat found the first
   version confusing and wanted "find the sound in the picture", more visuals). Runners, 12/29 late, "one set": Fifth Avenue at
   2 a.m., Haechan says "Listen." In the story since Nov 11 (scene.js { minigame }; see its comment for where) (try it at mockups/minigames/index.html).

   FemcListen.play({ host, rounds, mute, onDone }) -> Promise<result>
     rounds  how many sounds he plays (default 5, max 6)   mute  no audio (each sound's caption is shown instead)
   result = { found, rounds, tries, wrongs, grade: 'S' | 'A' | 'B' | 'C', quit }

   How it plays (always on screen as two steps): 1. LISTEN: Haechan plays a sound of the city (Web Audio, made in the browser;
   "Hear it again" replays it). 2. FIND IT: six things glow in the picture of the street (the lamp, the traffic light, the
   cab, the steam grate, the lit window with the radiator, the subway stairs). Hover or focus one to hear it quietly and see its
   name; click the one making his sound. Right: it lights up, a soundwave rings out, its sticker goes into the notebook at the
   top and he says something about it. Wrong: it shakes and he nudges ("Lower." / "Closer to the ground."). Fewer wrong
   guesses = better grade. Keyboard: Tab / arrows move between things, Enter picks, Space replays, Esc pauses.
   Controller (Nov 15 2026, battle/pad.js): D-pad / stick moves between things, ✕ picks, △ (or □) replays, ○ pauses.
   Art (FEMC-ART-TODO 47, art/minigames/listen/): street.webp (the avenue, 16:9, no objects needed), obj-<id>.webp (each
   thing, transparent), sticker-<id>.webp (the notebook stickers), haechan.webp (his figure, bottom left). Until then: the
   background epi-r-nyc-street-night, drawn objects and his portrait. Reduced motion: no shakes, no drifting snow.

   Tutorial (Nov 11 2026, Kat: every minigame gets one; tutorial.js FemcTutorial, loaded on demand from this folder):
     play({ tutorial: true | false })  true = always show it, false = never; default = only the first time (id 'listen').
     After Start, Haechan guides one practice sound on the real street (the steam grate's hiss): hear it again (▶ / Space),
     hover or tap a glowing thing to hear it quietly, pick the one making his sound (a wrong pick just gets a hint), then the
     notebook. Practice picks count for nothing; the real rounds start after. result.tutorial = 'done' | 'skipped' | 'seen'.
     Pause (Esc) → How to play replays it as a walkthrough over the paused street (Next on every step, nothing to do).

   Polish pass (Nov 11 2026, Kat: "every minigame needs as many visuals as possible, as much animation as possible"; looks only,
   no rule or result changed, and nothing ever points at the right answer while he plays it): the street's lanterns and tree
   lights glow and breathe (halos placed on the default street picture), three layers of falling snow, a car's headlights
   now and then up the wet avenue, shimmer on the reflections; when he plays the sound every light swells and a ripple rings
   out from him (from him, never from the thing); a thing you hover "sounds" (glow pulse + rings); a right pick bursts
   sparks and its sticker flies into the notebook, which hops; a wrong one gets a dim thud. Haechan walks (a bob, his breath
   fogging) and Solar walks beside him on the right (her Runners portrait, reacting: happy / surprised); the end card drops the
   stickers in one by one, slams the grade and ticks the count. o.calm (Reduce flashes) and o.perf (Performance) default to
   the game's settings: calm = no flashes or twinkle, perf = one snow layer, no car, no particles. Reduced motion: still. */
window.FemcListen = (() => {
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const base = () => (window.FemcGame && window.FemcGame.base) || (document.querySelector('script[src*="minigames/listen"]')?.src.split('assets/')[0]) || '';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const pick = a => a[Math.floor(Math.random() * a.length)];
  // first-time tutorial (Nov 11 2026): tutorial.js + .css load once, from this folder
  const tutLib = () => window.FemcTutorial ? Promise.resolve(window.FemcTutorial) : (window.FemcTutorialLoading ||= new Promise(ok => {
    const B = `${base()}assets/femc/game/minigames/tutorial`, l = document.createElement('link'), s = document.createElement('script');
    l.rel = 'stylesheet'; l.href = `${B}.css?v=1`; document.head.appendChild(l);
    s.src = `${B}.js?v=2`; s.onload = s.onerror = () => ok(window.FemcTutorial || null); document.head.appendChild(s);
  }));
  const tutBusy = e => { const T = window.FemcTutorial; return !!(T && T.open() && (e.key === 'Escape' || T.blocking())); };
  // the things in the street; x / y = where they stand (% of the scene), w = width (% of the scene)
  // (Nov 14, art batch 158: re-placed on Kat's street.webp: the window on the facade above the awning, the basement window at
  // the building's foot behind the railing, steam grate and subway stairs on the sidewalk, the traffic light at the curb, the cab in the road)
  const THINGS = [
    { id: 'heat', name: 'The lit window', cap: 'a low hum, everywhere at once', x: 28.5, y: 17, w: 8,
      ask: ["The building heat. Every building on the avenue, all at once. It's a low B.", 'Under everything. The note the whole street sits on.'],
      got: "Every radiator on Fifth, humming the same note. You'll hear it in your sleep now.", miss: 'Higher up. Inside somewhere.' },
    { id: 'train', name: 'The subway stairs', cap: 'a rumble you feel in your feet first', x: 61, y: 78, w: 14,
      ask: ['Feel that? Before you hear it.', "Every four minutes. Under your feet."],
      got: 'The six train. You feel it in your teeth before your ears.', miss: 'Lower. Under the street.' },
    { id: 'light', name: 'The traffic light', cap: 'a tiny electric tick and buzz', x: 71.5, y: 69, w: 9,
      ask: ['Tiny. Tick. Hear it?', "It changes for nobody. Listen when it does."],
      got: 'It buzzes when it changes. For no one. All night.', miss: 'Smaller. Electric.' },
    { id: 'cab', name: 'The cab', cap: 'tires hissing through slush', x: 84, y: 70, w: 14,
      ask: ['One car still out tonight. Hear it?', 'Wet. Going somewhere.'],
      got: 'The one cab on Fifth at two in the morning. Somebody\'s going home.', miss: "It's moving. Find what moves." },
    { id: 'steam', name: 'The steam grate', cap: 'a soft, steady hiss', x: 50, y: 69.5, w: 9,
      ask: ['Breathing. The street is breathing.', 'Soft. Steady. Like a held breath going out.'],
      got: "The street breathes. Con Ed's whole secret life, right there.", miss: 'Closer to the ground.' },
    { id: 'rad', name: 'The basement window', cap: 'a metal knock behind a grate', x: 35.5, y: 66, w: 6.5,
      ask: ['Somebody banging pipes. Hear it?', 'Knock. Knock. Somebody\'s warm.'],
      got: "An old radiator in a basement. Somebody's super is not sleeping.", miss: 'Metal. Knocking.' },
  ];
  const ART = id => `${base()}assets/femc/game/art/minigames/listen/${id}.webp`;
  // the drawn stand-ins for each thing (simple, glowing, pink and gold)
  const SVG = {
    heat: '<svg viewBox="0 0 60 80"><rect x="4" y="4" width="52" height="72" rx="3" fill="#2a1320" stroke="#c99a5b" stroke-width="3"/><rect x="10" y="10" width="40" height="46" fill="#ffcf8a" opacity=".85"/><path d="M30 10v46M10 33h40" stroke="#5a3a2a" stroke-width="3"/><rect x="12" y="60" width="36" height="12" rx="2" fill="#7a6a72"/><path d="M16 60v12M22 60v12M28 60v12M34 60v12M40 60v12" stroke="#4a3a42" stroke-width="2"/></svg>',
    train: '<svg viewBox="0 0 120 70"><rect x="10" y="4" width="100" height="10" fill="#1a7a3a"/><circle cx="20" cy="9" r="4" fill="#fff"/><text x="60" y="13" font-size="8" fill="#fff" text-anchor="middle" font-family="sans-serif">SUBWAY</text><path d="M14 14h92l-10 52H24z" fill="#1c0e16" stroke="#8a8a8a" stroke-width="2"/><path d="M28 30h64M32 42h56M36 54h48" stroke="#5a5a5a" stroke-width="3"/><path d="M14 14v40M106 14v40" stroke="#b9b9b9" stroke-width="3"/></svg>',
    light: '<svg viewBox="0 0 40 110"><rect x="18" y="40" width="4" height="70" fill="#3a3a3a"/><rect x="8" y="2" width="24" height="56" rx="5" fill="#222" stroke="#555" stroke-width="2"/><circle cx="20" cy="14" r="6" fill="#5a1a1a"/><circle cx="20" cy="30" r="6" fill="#5a4a1a"/><circle cx="20" cy="46" r="6" fill="#7dffb0"/><circle cx="20" cy="46" r="10" fill="#7dffb0" opacity=".25"/></svg>',
    cab: '<svg viewBox="0 0 160 70"><path d="M10 48l10-18c4-7 10-10 18-10h60c9 0 15 4 20 10l14 18h14v14H4V48z" fill="#f5c518" stroke="#2a2a2a" stroke-width="3"/><rect x="62" y="10" width="34" height="10" rx="2" fill="#fff4b0" stroke="#2a2a2a" stroke-width="2"/><path d="M40 26h30v20H30zM78 26h32l12 20H78z" fill="#2a3440"/><circle cx="38" cy="62" r="10" fill="#1a1a1a"/><circle cx="122" cy="62" r="10" fill="#1a1a1a"/><circle cx="150" cy="52" r="4" fill="#fff6c0"/><path d="M0 66c20 4 40-2 60 2" stroke="#d9e4ee" stroke-width="3" opacity=".7" fill="none"/></svg>',
    steam: '<svg viewBox="0 0 80 90"><ellipse cx="40" cy="80" rx="36" ry="8" fill="#2a2a2a" stroke="#6a6a6a" stroke-width="2"/><path d="M14 80h52M18 76h44M18 84h44" stroke="#4a4a4a" stroke-width="2"/><path d="M30 72c-8-12 8-18 0-30s6-20 2-30M48 72c8-12-8-18 0-30s-6-20-2-30" stroke="#f3eef2" stroke-width="7" stroke-linecap="round" opacity=".55" fill="none"/></svg>',
    rad: '<svg viewBox="0 0 60 50"><rect x="2" y="2" width="56" height="46" rx="3" fill="#1d1016" stroke="#6a5a62" stroke-width="3"/><path d="M12 2v46M22 2v46M32 2v46M42 2v46" stroke="#6a5a62" stroke-width="3"/><rect x="6" y="28" width="48" height="16" fill="#ffb366" opacity=".55"/></svg>',
  };
  const STICK = { heat: '♨', train: '🚇', light: '🚦', cab: '🚕', steam: '〰', rad: '🔧' };

  function play(o = {}) {
    return new Promise(done => {
      const host = o.host || document.body, ROUNDS = Math.max(1, Math.min(o.rounds || 5, THINGS.length));
      const order = [...THINGS].sort(() => Math.random() - 0.5).slice(0, ROUNDS);
      const st = { r: 0, tries: 0, wrongs: 0, roundWrong: 0, found: [], over: false, paused: false, busy: false, tut: null, tutRes: 'seen' };
      // practice (the tutorial): st.tut = 'again' | 'hover' | 'pick' while that step waits; tutOn[step] resolves it
      const PRACTICE = THINGS.find(t => t.id === 'steam'), tutOn = {};
      const tutHit = k => { if (st.tut !== k) return; const f = tutOn[k]; delete tutOn[k]; st.tut = 'wait'; f && f(); };
      const el = document.createElement('div');
      const GS0 = (() => { try { return (window.FemcGame && window.FemcGame.settings && window.FemcGame.settings()) || {}; } catch (e) { return {}; } })();
      const CALM = o.calm ?? !!GS0.calm, PERF = o.perf ?? !!GS0.perf, STILL = reduced.matches;
      el.dataset.padnav = ''; el.className = 'mg-lis' + (STILL ? ' still' : '') + (CALM ? ' calm' : '') + (PERF ? ' perf' : '');
      const B = base();
      // the street's own lights, on Kat's street.webp (Nov 14): the wall lanterns, the far lanterns, the lit trees, the park trees, the lobby and an upper window
      const HALOS = [[6.5, 31, 9], [23.3, 42, 7], [42.7, 46.5, 4], [45.4, 49, 3.5], [41, 30, 12, 'tree'], [50, 38, 10, 'tree'], [75, 46, 8, 'tree'], [93, 37, 9, 'tree'], [15, 52, 8, 'win'], [28.5, 4, 5, 'win']];
      el.innerHTML = `
        <div class="ls-scene">
          <img class="ls-bg" src="${ART('street')}" alt="" onerror="this.onerror=null;this.src='${B}assets/femc/bg/epi-r-nyc-street-night.webp'">
          <div class="ls-glows" aria-hidden="true">${HALOS.map(([x, y, w, k], i) => `<i class="ls-halo ${k || ''}" style="left:${x}%;top:${y}%;width:${w}%;--d:${(i * 0.37) % 2}s"></i>`).join('')}<i class="ls-shine r1"></i><i class="ls-shine r2"></i><i class="ls-car"><b></b><b></b></i></div>
          <i class="ls-snow" aria-hidden="true"></i><i class="ls-snow s2" aria-hidden="true"></i><i class="ls-snow s3" aria-hidden="true"></i><i class="ls-vignette" aria-hidden="true"></i>
          ${THINGS.map((t, i) => `<button type="button" class="ls-thing" data-i="${i}" style="left:${t.x}%;top:${t.y}%;width:${t.w}%" aria-label="${esc(t.name)}">
            <img src="${ART('obj-' + t.id)}" alt="" onerror="this.remove()">${SVG[t.id]}<b class="ls-tag">${esc(t.name)}</b><i class="ls-ring"></i><i class="ls-wave"></i><i class="ls-pulse"></i><i class="ls-burst"></i></button>`).join('')}
        </div>
        <i class="ls-sonar" aria-hidden="true"><b></b><b></b><b></b></i>
        <div class="ls-top"><b>Fifth Avenue · 2:14 a.m.</b><ol class="ls-book">${order.map((_, i) => `<li data-r="${i}"><span>?</span></li>`).join('')}</ol></div>
        <div class="ls-steps"><span class="ls-step s1"><b>1</b> Listen</span><span class="ls-step s2"><b>2</b> Find what's making it</span></div>
        <div class="ls-talk"><div class="ls-hc"><img src="${ART('haechan')}" alt="" onerror="this.onerror=null;this.src='${B}assets/femc/portraits/haechan-runners/neutral.webp'"></div>
          <p aria-live="polite"><b>Haechan</b><span></span><em class="ls-cap"></em></p>
          <button type="button" class="ls-again">▶ Hear it again</button><div class="ls-sl" aria-hidden="true"><img src="${B}assets/femc/portraits/solar-runners/neutral.webp" alt="" onerror="this.remove()"></div></div>
        <div class="ls-intro"><div><b>Listen</b><p>It's two in the morning and the city is almost silent. Haechan says it never really is.</p><ol><li><b>1</b> He plays you a sound of the street.</li><li><b>2</b> Find the thing in the picture making it. Hover anything to hear it.</li></ol><button type="button" class="ls-start">Start</button></div></div>
        <div class="mg-pause" hidden><b>Paused</b><button type="button" data-mg="resume">Resume</button><button type="button" data-mg="howto">How to play</button><button type="button" data-mg="quit">Quit</button></div>
        <div class="mg-end" hidden></div>`;
      host.appendChild(el);
      const $ = s => el.querySelector(s), things = [...el.querySelectorAll('.ls-thing')];
      const say = (t, cap = '') => { $('.ls-talk span').textContent = t; $('.ls-cap').textContent = cap; el.classList.remove('talk'); void el.offsetWidth; el.classList.add('talk'); };
      const face = f => { const im = $('.ls-hc img'); if (im.src.includes('/portraits/')) im.src = `${B}assets/femc/portraits/haechan-runners/${f}.webp`; };
      /* polish (looks only) */
      const once = (node, cls, ms) => { if (!node) return; node.classList.remove(cls); void node.offsetWidth; node.classList.add(cls); clearTimeout(node['_t' + cls]); node['_t' + cls] = setTimeout(() => node.classList.remove(cls), ms); };
      const sface = f => { const im = $('.ls-sl img'); if (im) { im.src = `${B}assets/femc/portraits/solar-runners/${f}.webp`; once($('.ls-sl'), 'react', 500); } };
      const sparks = b => { // a right pick: sparks burst off the thing
        if (STILL || PERF) return; const box = b.querySelector('.ls-burst'); if (!box) return; let h = '';
        for (let k = 0; k < 12; k++) h += `<em style="--a:${Math.round(k * 30 + Math.random() * 20)}deg;--d:${Math.round(50 + Math.random() * 50)}px;--c:${k % 3 ? '#ffcf8a' : '#ff9ac8'}"></em>`;
        box.innerHTML = h; once(box, 'on', 900);
      };
      const flySticker = (b, li) => { // the sticker flies from the thing into its notebook slot
        if (STILL || !b.getBoundingClientRect || !li || !li.getBoundingClientRect) return;
        try {
          const a = b.getBoundingClientRect(), z = li.getBoundingClientRect(), f = document.createElement('i'); f.className = 'ls-fly'; f.textContent = STICK[THINGS[things.indexOf(b)].id];
          f.style.left = `${a.left + a.width / 2}px`; f.style.top = `${a.top + a.height / 2}px`; el.appendChild(f);
          const dx = z.left + z.width / 2 - (a.left + a.width / 2), dy = z.top + z.height / 2 - (a.top + a.height / 2);
          if (f.animate) f.animate([{ transform: 'translate(-50%, -50%) scale(.6) rotate(-20deg)', opacity: 0 }, { transform: 'translate(-50%, -80%) scale(1.6) rotate(8deg)', opacity: 1, offset: .25 }, { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(.8) rotate(0)`, opacity: 1 }], { duration: 750, easing: 'cubic-bezier(.4, 0, .3, 1)', fill: 'forwards' });
          setTimeout(() => { f.remove(); once($('.ls-top .ls-book'), 'hop', 500); }, 760);
        } catch (e) {}
      };

      /* the sounds: all made in the browser */
      let ac = null, hum = null;
      const ctx = () => { ac = ac || new (window.AudioContext || window.webkitAudioContext)(); ac.resume(); return ac; };
      const tone = (f, t0, dur, type, g, out, f2) => { const os = ac.createOscillator(), gn = ac.createGain(), t = ac.currentTime + t0; os.type = type; os.frequency.setValueAtTime(f, t); if (f2) os.frequency.exponentialRampToValueAtTime(f2, t + dur); gn.gain.setValueAtTime(0.0001, t); gn.gain.exponentialRampToValueAtTime(g, t + Math.min(0.08, dur / 3)); gn.gain.exponentialRampToValueAtTime(0.0001, t + dur); os.connect(gn); gn.connect(out); os.start(t); os.stop(t + dur + 0.05); };
      const noise = (t0, dur, type, f, q, g, out, f2, kind = 'bandpass') => {
        const len = Math.ceil(ac.sampleRate * (dur + 0.1)), buf = ac.createBuffer(1, len, ac.sampleRate), d = buf.getChannelData(0);
        let b = 0; for (let i = 0; i < len; i++) { const w = Math.random() * 2 - 1; b = type === 'brown' ? (b + 0.02 * w) / 1.02 : w; d[i] = type === 'brown' ? b * 3.5 : w; }
        const t = ac.currentTime + t0, src = ac.createBufferSource(), fl = ac.createBiquadFilter(), gn = ac.createGain(); src.buffer = buf; fl.type = kind; fl.frequency.setValueAtTime(f, t); fl.Q.value = q;
        if (f2) fl.frequency.exponentialRampToValueAtTime(f2, t + dur);
        gn.gain.setValueAtTime(0.0001, t); gn.gain.exponentialRampToValueAtTime(g, t + dur * 0.3); gn.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        src.connect(fl); fl.connect(gn); gn.connect(out); src.start(t); src.stop(t + dur + 0.05);
      };
      const sound = (id, vol = 0.4) => {
        if (o.mute) return;
        try {
          ctx(); const out = ac.createGain(); out.gain.value = vol; out.connect(ac.destination);
          if (id === 'heat') { tone(61.7, 0, 2.4, 'sine', 0.7, out); tone(123.5, 0, 2.4, 'sine', 0.3, out); tone(185, 0.1, 2.2, 'sine', 0.08, out); }
          if (id === 'train') { noise(0, 2.6, 'brown', 70, 0.8, 1, out); [0.3, 0.75, 1.2, 1.65].forEach(t => noise(t, 0.25, 'brown', 160, 2, 0.5, out)); }
          if (id === 'light') { [0.15, 1.05].forEach(t => { tone(2600, t, 0.02, 'square', 0.25, out); tone(120, t, 0.7, 'sawtooth', 0.06, out); }); }
          if (id === 'cab') { noise(0, 1.9, 'white', 400, 0.9, 0.45, out, 2200); tone(90, 0, 1.9, 'sawtooth', 0.04, out, 140); }
          if (id === 'steam') noise(0, 2.4, 'white', 3500, 0.6, 0.35, out, 2800, 'highpass');
          if (id === 'rad') { [0.1, 0.55, 0.85].forEach(t => { noise(t, 0.12, 'white', 1100, 3, 0.5, out); tone(330, t, 0.45, 'triangle', 0.3, out); tone(498, t, 0.3, 'triangle', 0.14, out); }); }
        } catch (e) {}
      };
      const chime = ok => { if (o.mute) return; try { ctx(); const out = ac.createGain(); out.gain.value = 0.25; out.connect(ac.destination); (ok ? [880, 1108, 1318] : [330, 262]).forEach((f, i) => tone(f, i * 0.09, ok ? 0.5 : 0.25, 'triangle', 0.3, out)); } catch (e) {} };

      /* the rounds */
      const target = () => st.tut ? PRACTICE : order[st.r];
      const playTarget = () => { if (!target() || st.over) return; sound(target().id, 0.5); el.classList.add('listening'); once($('.ls-sonar'), 'on', 1700); setTimeout(() => el.classList.remove('listening'), 1600); };
      const round = () => {
        st.roundWrong = 0; st.busy = false; things.forEach(b => b.classList.remove('right', 'wrong'));
        el.querySelectorAll('.ls-book li').forEach((li, i) => li.classList.toggle('now', i === st.r));
        face('neutral'); sface('neutral'); say(pick(target().ask), o.mute ? `(the sound: ${target().cap})` : '');
        setTimeout(playTarget, 500);
      };
      let hoverT = 0;
      const preview = i => { if (st.busy || st.over || st.paused) return; if (st.tut === 'hover') setTimeout(() => tutHit('hover'), 700); clearTimeout(hoverT); hoverT = setTimeout(() => { sound(THINGS[i].id, 0.18); once(things[i], 'sounding', 1500); }, 120); if (o.mute) things[i].querySelector('.ls-tag').dataset.cap = THINGS[i].cap; };
      const tutChoose = i => { // a practice pick: right lights it up, wrong shakes with his hint; nothing is counted
        const t = THINGS[i], b = things[i];
        if (st.tut === 'hover') return preview(i);
        if (st.tut !== 'pick') return;
        if (t.id === PRACTICE.id) { b.classList.add('right'); chime(true); sound(t.id, 0.5); face('happy'); sface('happy'); sparks(b); once(el, 'found', 900); say(t.got); tutHit('pick'); }
        else { b.classList.remove('wrong'); void b.offsetWidth; b.classList.add('wrong'); chime(false); face('serious'); once(el, 'thud', 400); say(`${PRACTICE.miss} Listen again.`, o.mute ? `(the sound: ${PRACTICE.cap})` : ''); }
      };
      const choose = i => {
        if (st.tut) return tutChoose(i);
        if (st.busy || st.over || st.paused) return;
        st.tries++; const t = THINGS[i], b = things[i];
        if (t.id === target().id) {
          st.busy = true; st.found.push(t.id); b.classList.add('right', 'done'); chime(true); sound(t.id, 0.5); face('happy'); sface('happy'); say(t.got);
          const li = el.querySelector(`.ls-book li[data-r="${st.r}"]`); sparks(b); once(el, 'found', 900); flySticker(b, li); li.classList.add('got'); li.innerHTML = `<img src="${ART('sticker-' + t.id)}" alt="" onerror="this.remove()"><span>${STICK[t.id]}</span><small>${esc(t.name.replace(/^The /, ''))}</small>`;
          st.r++; setTimeout(() => (st.r >= ROUNDS ? finish() : round()), 2200);
        } else {
          st.wrongs++; st.roundWrong++; b.classList.remove('wrong'); void b.offsetWidth; b.classList.add('wrong'); chime(false); face('serious'); sface('surprised'); once(el, 'thud', 400);
          say(st.roundWrong >= 2 ? `${target().miss} Listen again.` : pick(["No. That's something else.", 'Not that one. Listen.', 'Close your eyes. Then look.']), o.mute ? `(the sound: ${target().cap})` : '');
          if (st.roundWrong >= 2) setTimeout(playTarget, 400);
        }
      };
      const finish = (quit = false) => {
        if (st.over) return; st.over = true;
        const g = quit ? 'C' : st.wrongs === 0 ? 'S' : st.wrongs <= 2 ? 'A' : st.wrongs <= 4 ? 'B' : 'C';
        const line = { S: "She'd lived her whole life in this city and never once heard it. Now she couldn't stop.", A: 'It came up out of the quiet the way a picture comes up in a darkroom.', B: 'Some of it came up out of the quiet. Enough.', C: '"It never turns off for you," she said. "Does it."' }[g];
        const res = { found: st.found.length, rounds: ROUNDS, tries: st.tries, wrongs: st.wrongs, grade: g, quit, tutorial: st.tutRes };
        const end = $('.mg-end'); end.hidden = false; face(g === 'C' ? 'neutral' : 'happy'); sface(g === 'C' ? 'sad' : 'happy'); el.classList.add('done');
        end.innerHTML = `<span class="ls-gradewrap"><i class="ls-shock"></i><b class="mg-grade">${g}</b></span><ol class="ls-book big">${st.found.map((id, k) => `<li class="got" style="--k:${k}"><img src="${ART('sticker-' + id)}" alt="" onerror="this.remove()"><span>${STICK[id]}</span><small>${esc(THINGS.find(t => t.id === id).name.replace(/^The /, ''))}</small></li>`).join('')}</ol><dl><dt>Sounds found</dt><dd class="ls-count">${st.found.length} / ${ROUNDS}</dd><dt>Wrong guesses</dt><dd>${st.wrongs}</dd></dl><p class="mg-end-say">${esc(line)}</p><button type="button">Continue</button>`;
        const cd = end.querySelector('.ls-count'); if (cd && !STILL && !quit && st.found.length) { let n = 0; cd.textContent = `0 / ${ROUNDS}`; const up = () => { if (!el.isConnected || n >= st.found.length) return; n++; cd.textContent = `${n} / ${ROUNDS}`; once(cd, 'tick', 250); setTimeout(up, 160); }; setTimeout(up, 500); }
        end.querySelector('button').focus();
        end.querySelector('button').onclick = () => { cleanup(); o.onDone?.(res); done(res); };
      };

      /* input */
      things.forEach((b, i) => { b.addEventListener('pointerenter', () => preview(i)); b.addEventListener('focus', () => preview(i)); b.addEventListener('pointerleave', () => clearTimeout(hoverT)); b.onclick = () => choose(i); });
      $('.ls-again').onclick = () => { if (!st.busy && !st.over) { playTarget(); if (st.tut === 'again') setTimeout(() => tutHit('again'), 1200); } };
      /* the tutorial: one practice sound on the real street; replay = the same words as a walkthrough */
      const hcFace = f => `${B}assets/femc/portraits/haechan-runners/${f}.webp`;
      const tutSteps = replay => {
        const doIt = k => replay ? {} : { before: () => { st.tut = k; }, wait: () => new Promise(ok => { tutOn[k] = ok; }) };
        return [
          { target: '.ls-talk', face: hcFace('neutral'), say: 'The city never really goes quiet. I play you one sound, and you find what\'s making it.',
            before: () => { if (!replay) { face('neutral'); say(PRACTICE.ask[0], o.mute ? `(the sound: ${PRACTICE.cap})` : ''); } } },
          { target: '.ls-again', face: hcFace('neutral'), say: o.mute ? 'Sound\'s off, so the sound is written under my line. Press <b>▶ Hear it again</b> (or Space; <b>△</b> on a controller) anyway.' : 'Hear it once more: press <b>▶ Hear it again</b> (or Space; <b>△</b> on a controller).', ...doIt('again') },
          { target: '.ls-scene', face: hcFace('happy'), say: 'The glowing things are what could be making it. Hover one (or tap it, or Tab to it; the <b>D-pad</b> on a controller) to hear it quietly and see its name.', pos: 'center', ...doIt('hover') },
          { target: '.ls-scene', face: hcFace('neutral'), say: 'Now click the one making my sound (<b>✕</b> on a controller): a soft, steady hiss. Wrong ones shake and I give you a hint.', pos: 'center', ...doIt('pick') },
          { target: '.ls-book', face: hcFace('happy'), say: 'Every sound you find goes in the notebook. Fewer wrong guesses, better grade. Esc (○) pauses.' },
        ];
      };
      const settings = () => { try { return (window.FemcGame && window.FemcGame.settings && window.FemcGame.settings()) || {}; } catch (e) { return {}; } };
      const runTut = (T, replay) => T.run(el, { id: 'listen', who: 'Haechan', steps: tutSteps(replay), replay, calm: o.calm ?? !!settings().calm, perf: o.perf ?? !!settings().perf });
      const howTo = () => tutLib().then(T => {
        if (!T || st.over) return;
        $('.mg-pause').hidden = true;
        runTut(T, true).then(() => { if (st.over) return; $('.mg-pause').hidden = false; $('.mg-pause button').focus(); });
      });
      const begin = () => { el.classList.add('on'); round(); things[0].focus({ preventScroll: true }); };
      const start = () => {
        if (!$('.ls-intro')) return; $('.ls-intro').remove(); try { ctx(); } catch (e) {}
        tutLib().then(T => {
          if (!T || !T.should('listen', o.tutorial)) return begin();
          st.tut = 'wait'; el.classList.add('on');
          runTut(T, false).then(r => {
            st.tutRes = r; st.tut = null; for (const k in tutOn) delete tutOn[k];
            things.forEach(b => b.classList.remove('right', 'wrong'));
            setTimeout(begin, 300);
          });
        });
      };
      $('.ls-start').onclick = start;
      const key = e => {
        if (!el.isConnected || st.over || tutBusy(e)) return;
        e.stopPropagation();
        if ($('.ls-intro')) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); start(); } return; }
        if (e.key === 'Escape') { e.preventDefault(); st.paused = !st.paused; $('.mg-pause').hidden = !st.paused; if (st.paused) $('.mg-pause button').focus(); return; }
        if (st.paused) return;
        if (e.key === ' ' || (e.fromPad && (e.key === 'y' || e.key === 'l'))) { e.preventDefault(); $('.ls-again').click(); return; }
        if (e.key.startsWith('Arrow')) { e.preventDefault(); const i = Math.max(0, things.indexOf(document.activeElement)); const n = (i + (e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : -1) + things.length) % things.length; things[n].focus(); }
      };
      const cleanup = () => { window.removeEventListener('keydown', key, true); try { ac && ac.close(); } catch (e) {} el.remove(); };
      $('.mg-pause').onclick = e => { const b = e.target.dataset.mg; if (b === 'resume') { st.paused = false; $('.mg-pause').hidden = true; } if (b === 'howto') howTo(); if (b === 'quit') { st.paused = false; $('.mg-pause').hidden = true; finish(true); } };
      window.addEventListener('keydown', key, true);
      $('.ls-start').focus();
    });
  }
  return { play };
})();
