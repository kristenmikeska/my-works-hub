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
   Art (FEMC-ART-TODO 47, art/minigames/listen/): street.webp (the avenue, 16:9, no objects needed), obj-<id>.webp (each
   thing, transparent), sticker-<id>.webp (the notebook stickers), haechan.webp (his figure, bottom left). Until then: the
   background epi-r-nyc-street-night, drawn objects and his portrait. Reduced motion: no shakes, no drifting snow. */
window.FemcListen = (() => {
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const base = () => (window.FemcGame && window.FemcGame.base) || (document.querySelector('script[src*="minigames/listen"]')?.src.split('assets/')[0]) || '';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const pick = a => a[Math.floor(Math.random() * a.length)];
  // the things in the street; x / y = where they stand (% of the scene), w = width (% of the scene)
  const THINGS = [
    { id: 'heat', name: 'The lit window', cap: 'a low hum, everywhere at once', x: 30, y: 30, w: 9,
      ask: ["The building heat. Every building on the avenue, all at once. It's a low B.", 'Under everything. The note the whole street sits on.'],
      got: "Every radiator on Fifth, humming the same note. You'll hear it in your sleep now.", miss: 'Higher up. Inside somewhere.' },
    { id: 'train', name: 'The subway stairs', cap: 'a rumble you feel in your feet first', x: 66, y: 74, w: 13,
      ask: ['Feel that? Before you hear it.', "Every four minutes. Under your feet."],
      got: 'The six train. You feel it in your teeth before your ears.', miss: 'Lower. Under the street.' },
    { id: 'light', name: 'The traffic light', cap: 'a tiny electric tick and buzz', x: 88, y: 46, w: 6,
      ask: ['Tiny. Tick. Hear it?', "It changes for nobody. Listen when it does."],
      got: 'It buzzes when it changes. For no one. All night.', miss: 'Smaller. Electric.' },
    { id: 'cab', name: 'The cab', cap: 'tires hissing through slush', x: 44, y: 70, w: 18,
      ask: ['One car still out tonight. Hear it?', 'Wet. Going somewhere.'],
      got: 'The one cab on Fifth at two in the morning. Somebody\'s going home.', miss: "It's moving. Find what moves." },
    { id: 'steam', name: 'The steam grate', cap: 'a soft, steady hiss', x: 18, y: 80, w: 11,
      ask: ['Breathing. The street is breathing.', 'Soft. Steady. Like a held breath going out.'],
      got: "The street breathes. Con Ed's whole secret life, right there.", miss: 'Closer to the ground.' },
    { id: 'rad', name: 'The basement window', cap: 'a metal knock behind a grate', x: 56, y: 46, w: 8,
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
      const st = { r: 0, tries: 0, wrongs: 0, roundWrong: 0, found: [], over: false, paused: false, busy: false };
      const el = document.createElement('div');
      el.className = 'mg-lis' + (reduced.matches ? ' still' : '');
      const B = base();
      el.innerHTML = `
        <div class="ls-scene">
          <img class="ls-bg" src="${ART('street')}" alt="" onerror="this.onerror=null;this.src='${B}assets/femc/bg/epi-r-nyc-street-night.webp'">
          <i class="ls-snow" aria-hidden="true"></i><i class="ls-vignette" aria-hidden="true"></i>
          ${THINGS.map((t, i) => `<button type="button" class="ls-thing" data-i="${i}" style="left:${t.x}%;top:${t.y}%;width:${t.w}%" aria-label="${esc(t.name)}">
            <img src="${ART('obj-' + t.id)}" alt="" onerror="this.remove()">${SVG[t.id]}<b class="ls-tag">${esc(t.name)}</b><i class="ls-ring"></i><i class="ls-wave"></i></button>`).join('')}
        </div>
        <div class="ls-top"><b>Fifth Avenue · 2:14 a.m.</b><ol class="ls-book">${order.map((_, i) => `<li data-r="${i}"><span>?</span></li>`).join('')}</ol></div>
        <div class="ls-steps"><span class="ls-step s1"><b>1</b> Listen</span><span class="ls-step s2"><b>2</b> Find what's making it</span></div>
        <div class="ls-talk"><div class="ls-hc"><img src="${ART('haechan')}" alt="" onerror="this.onerror=null;this.src='${B}assets/femc/portraits/haechan-runners/neutral.webp'"></div>
          <p aria-live="polite"><b>Haechan</b><span></span><em class="ls-cap"></em></p>
          <button type="button" class="ls-again">▶ Hear it again</button></div>
        <div class="ls-intro"><div><b>Listen</b><p>It's two in the morning and the city is almost silent. Haechan says it never really is.</p><ol><li><b>1</b> He plays you a sound of the street.</li><li><b>2</b> Find the thing in the picture making it. Hover anything to hear it.</li></ol><button type="button" class="ls-start">Start</button></div></div>
        <div class="mg-pause" hidden><b>Paused</b><button type="button" data-mg="resume">Resume</button><button type="button" data-mg="quit">Quit</button></div>
        <div class="mg-end" hidden></div>`;
      host.appendChild(el);
      const $ = s => el.querySelector(s), things = [...el.querySelectorAll('.ls-thing')];
      const say = (t, cap = '') => { $('.ls-talk span').textContent = t; $('.ls-cap').textContent = cap; el.classList.remove('talk'); void el.offsetWidth; el.classList.add('talk'); };
      const face = f => { const im = $('.ls-hc img'); if (im.src.includes('/portraits/')) im.src = `${B}assets/femc/portraits/haechan-runners/${f}.webp`; };

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
      const target = () => order[st.r];
      const playTarget = () => { sound(target().id, 0.5); el.classList.add('listening'); setTimeout(() => el.classList.remove('listening'), 1600); };
      const round = () => {
        st.roundWrong = 0; st.busy = false; things.forEach(b => b.classList.remove('right', 'wrong'));
        el.querySelectorAll('.ls-book li').forEach((li, i) => li.classList.toggle('now', i === st.r));
        face('neutral'); say(pick(target().ask), o.mute ? `(the sound: ${target().cap})` : '');
        setTimeout(playTarget, 500);
      };
      let hoverT = 0;
      const preview = i => { if (st.busy || st.over || st.paused) return; clearTimeout(hoverT); hoverT = setTimeout(() => sound(THINGS[i].id, 0.18), 120); if (o.mute) things[i].querySelector('.ls-tag').dataset.cap = THINGS[i].cap; };
      const choose = i => {
        if (st.busy || st.over || st.paused) return;
        st.tries++; const t = THINGS[i], b = things[i];
        if (t.id === target().id) {
          st.busy = true; st.found.push(t.id); b.classList.add('right', 'done'); chime(true); sound(t.id, 0.5); face('happy'); say(t.got);
          const li = el.querySelector(`.ls-book li[data-r="${st.r}"]`); li.classList.add('got'); li.innerHTML = `<img src="${ART('sticker-' + t.id)}" alt="" onerror="this.remove()"><span>${STICK[t.id]}</span><small>${esc(t.name.replace(/^The /, ''))}</small>`;
          st.r++; setTimeout(() => (st.r >= ROUNDS ? finish() : round()), 2200);
        } else {
          st.wrongs++; st.roundWrong++; b.classList.remove('wrong'); void b.offsetWidth; b.classList.add('wrong'); chime(false); face('serious');
          say(st.roundWrong >= 2 ? `${target().miss} Listen again.` : pick(["No. That's something else.", 'Not that one. Listen.', 'Close your eyes. Then look.']), o.mute ? `(the sound: ${target().cap})` : '');
          if (st.roundWrong >= 2) setTimeout(playTarget, 400);
        }
      };
      const finish = (quit = false) => {
        if (st.over) return; st.over = true;
        const g = quit ? 'C' : st.wrongs === 0 ? 'S' : st.wrongs <= 2 ? 'A' : st.wrongs <= 4 ? 'B' : 'C';
        const line = { S: "She'd lived her whole life in this city and never once heard it. Now she couldn't stop.", A: 'It came up out of the quiet the way a picture comes up in a darkroom.', B: 'Some of it came up out of the quiet. Enough.', C: '"It never turns off for you," she said. "Does it."' }[g];
        const res = { found: st.found.length, rounds: ROUNDS, tries: st.tries, wrongs: st.wrongs, grade: g, quit };
        const end = $('.mg-end'); end.hidden = false; face(g === 'C' ? 'neutral' : 'happy');
        end.innerHTML = `<b class="mg-grade">${g}</b><ol class="ls-book big">${st.found.map(id => `<li class="got"><img src="${ART('sticker-' + id)}" alt="" onerror="this.remove()"><span>${STICK[id]}</span><small>${esc(THINGS.find(t => t.id === id).name.replace(/^The /, ''))}</small></li>`).join('')}</ol><dl><dt>Sounds found</dt><dd>${st.found.length} / ${ROUNDS}</dd><dt>Wrong guesses</dt><dd>${st.wrongs}</dd></dl><p class="mg-end-say">${esc(line)}</p><button type="button">Continue</button>`;
        end.querySelector('button').focus();
        end.querySelector('button').onclick = () => { cleanup(); o.onDone?.(res); done(res); };
      };

      /* input */
      things.forEach((b, i) => { b.addEventListener('pointerenter', () => preview(i)); b.addEventListener('focus', () => preview(i)); b.addEventListener('pointerleave', () => clearTimeout(hoverT)); b.onclick = () => choose(i); });
      $('.ls-again').onclick = () => { if (!st.busy && !st.over) playTarget(); };
      const start = () => { $('.ls-intro').remove(); el.classList.add('on'); ctx(); round(); things[0].focus({ preventScroll: true }); };
      $('.ls-start').onclick = start;
      const key = e => {
        if (!el.isConnected || st.over) return;
        e.stopPropagation();
        if ($('.ls-intro')) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); start(); } return; }
        if (e.key === 'Escape') { e.preventDefault(); st.paused = !st.paused; $('.mg-pause').hidden = !st.paused; if (st.paused) $('.mg-pause button').focus(); return; }
        if (st.paused) return;
        if (e.key === ' ') { e.preventDefault(); $('.ls-again').click(); return; }
        if (e.key.startsWith('Arrow')) { e.preventDefault(); const i = Math.max(0, things.indexOf(document.activeElement)); const n = (i + (e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : -1) + things.length) % things.length; things[n].focus(); }
      };
      const cleanup = () => { window.removeEventListener('keydown', key, true); try { ac && ac.close(); } catch (e) {} el.remove(); };
      $('.mg-pause').onclick = e => { const b = e.target.dataset.mg; if (b === 'resume') { st.paused = false; $('.mg-pause').hidden = true; } if (b === 'quit') { st.paused = false; $('.mg-pause').hidden = true; finish(true); } };
      window.addEventListener('keydown', key, true);
      $('.ls-start').focus();
    });
  }
  return { play };
})();
