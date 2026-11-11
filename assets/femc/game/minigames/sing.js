/* FEMC epilogue minigame: the booth (Nov 10 2026, Kat: the studio game should feel like Solstice / Runners, "sound may be the most
   important", "syncing it to an actual song would be A plus"; replaces studio.js's fader game). Runners: Studio 4B, Solar in the
   booth with headphones on, Haechan behind the glass at the desk. Standalone: nothing in the story calls it yet
   (mockups/minigames/sing.html).

   FemcSing.play({ host, song, level, mute, onDone }) -> Promise<result>
     song   chart id in window.FEMC_CHARTS (default 'runners': "Runners" by CAMO, minigames/charts/runners.js)
     level  'easy' | 'normal' | 'hard' (default 'normal')   mute  no sound at all (the game still runs on the clock)
   result = { song, level, score, accuracy (0-100), perfect, good, miss, maxCombo, grade: 'S' | 'A' | 'B' | 'C', quit }

   How it plays: three lanes (low, mid, high: her voice), notes slide down to the mic line in time with the real song. Press the
   lane's key as a note reaches the line (D / F / J, or ← ↓ →, or tap the lane); hold through long notes. Perfect ±60 ms, Good
   ±130 ms. A hit lights her waveform and the lane; a miss dips the music for a moment (her voice dropping out of the mix).
   "Five bars. You come in on six." Haechan talks back through the talkback between sections and on streaks and slips.
   The chart is generated from the track's own onsets (charts/runners.js, header says how), so the notes land on the music.
   Art (FEMC-ART-TODO 45, art/minigames/sing/): booth.webp (Studio 4B from the booth), solar-mic.webp, haechan-desk.webp;
   until then a drawn studio with their portraits. Esc pauses (and the song). Reduced motion: no shakes or particles. */
window.FemcSing = (() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const base = () => (window.FemcGame && window.FemcGame.base) || (document.querySelector('script[src*="minigames/sing.js"]')?.src.split('assets/')[0]) || '';
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const KEYS = [['d', 'arrowleft'], ['f', 'arrowdown'], ['j', 'arrowright']];
  const PERFECT = 0.06, GOOD = 0.13, LEAD = 1.6; // seconds a note is on screen before the line
  const TALK = {
    intro: ["Five bars. You come in on six.", "Headphones on. Don't look at me, look at the line."],
    verse: ['Good. Stay in it.', "There you are."],
    breath: ['Breathe here. You wrote it on the sheet eleven times.', 'Easy. It drops out. Let it.'],
    chorus: ['Here it comes. Don\'t reach for it.', 'Open up. The room wants it.'],
    bridge: ['Bridge. You always rush the bridge.', "You're rushing the and."],
    last: ['Last one. Give it everything you didn\'t give the first time.', 'All of it now.'],
    outro: ['Let the last note go. Don\'t hold on to it.'],
    streak: ['...Yeah. That.', 'Keep doing that.', "Don't think. You're doing it."],
    slip: ['Again from the bridge.', "You're rushing.", "It's fine. Find it again.", 'Listen to the kick.'],
    end: { S: "...Don't touch it. That's the take.", A: "That's the song. I'll keep that one.", B: "It's a take. We'll comp it.", C: 'Again. From the top. You know it, you just don\'t trust it yet.' },
  };

  function play(o = {}) {
    return new Promise(done => {
      const C = (window.FEMC_CHARTS || {})[o.song || 'runners'];
      if (!C) { done({ quit: true, error: 'no chart' }); return; }
      const level = o.level || 'normal', notes = (C.charts[level] || C.charts.normal).map(n => ({ ...n, hit: null, held: false, holdOk: false }));
      const host = o.host || document.body, ART = id => `${base()}assets/femc/game/art/minigames/sing/${id}.webp`;
      const FACE = (w, f) => `${base()}assets/femc/portraits/${w}-runners/${f}.webp`;
      const st = { t: -2.5, score: 0, combo: 0, maxCombo: 0, perfect: 0, good: 0, miss: 0, paused: false, over: false, sec: -1, held: [false, false, false] };
      const el = document.createElement('div');
      el.className = 'mg-sing' + (reduced.matches ? ' still' : '');
      el.innerHTML = `
        <div class="sg-room"><img class="sg-booth-art" src="${ART('booth')}" alt="" onerror="this.remove()"><div class="sg-room-stand"><i class="foam"></i><i class="glass"></i><i class="light"></i></div>
          <div class="sg-glass"><img class="sg-hc-art" src="${ART('haechan-desk')}" alt="" onerror="this.remove()"><img class="sg-hc" src="${FACE('haechan', 'neutral')}" alt="Haechan"><span class="sg-desk"></span><span class="sg-redlight"></span></div>
          <div class="sg-solar"><img class="sg-solar-art" src="${ART('solar-mic')}" alt="" onerror="this.remove()"><img class="sg-sl" src="${FACE('solar', 'neutral')}" alt="Solar"><span class="sg-mic"></span></div></div>
        <div class="sg-top"><b>Studio 4B · ${esc(C.title)}</b><small>${esc(C.artist || '')}</small><span class="sg-sec"></span><span class="sg-score">0</span></div>
        <p class="sg-talk" aria-live="polite"><b>Haechan</b><span></span></p>
        <div class="sg-lanes">${[0, 1, 2].map(i => `<div class="sg-lane" data-l="${i}"><i class="beam"></i><span class="key">${['D', 'F', 'J'][i]}</span></div>`).join('')}<div class="sg-line"></div><div class="sg-notes"></div><div class="sg-judge"></div></div>
        <canvas class="sg-wave" width="600" height="80" aria-hidden="true"></canvas>
        <div class="sg-combo"></div><div class="sg-prog"><i></i></div>
        <div class="mg-pause" hidden><b>Paused</b><button type="button" data-mg="resume">Resume</button><button type="button" data-mg="quit">Quit</button></div>
        <div class="mg-end" hidden></div>`;
      host.appendChild(el);
      const $ = s => el.querySelector(s), lanes = [...el.querySelectorAll('.sg-lane')], noteBox = $('.sg-notes');
      // notes as elements, made once
      notes.forEach(n => { n.el = document.createElement('i'); n.el.className = `sg-note l${n.lane}${n.len ? ' hold' : ''}`; if (n.len) n.el.style.setProperty('--len', n.len / LEAD); noteBox.appendChild(n.el); });

      /* audio: the song through an <audio>, routed via Web Audio so a miss can dip it */
      let audio = null, ac = null, gain = null, filt = null;
      if (!o.mute) {
        audio = new Audio(`${base()}${C.src}`); audio.preload = 'auto';
        try { ac = new (window.AudioContext || window.webkitAudioContext)(); const src = ac.createMediaElementSource(audio); filt = ac.createBiquadFilter(); filt.type = 'lowpass'; filt.frequency.value = 20000; gain = ac.createGain(); gain.gain.value = 0.9; src.connect(filt); filt.connect(gain); gain.connect(ac.destination); } catch (e) { ac = null; }
      }
      const tick = (f, g = 0.05) => { if (!ac) return; const t = ac.currentTime, os = ac.createOscillator(), v = ac.createGain(); os.type = 'triangle'; os.frequency.value = f; v.gain.setValueAtTime(g, t); v.gain.exponentialRampToValueAtTime(0.0001, t + 0.09); os.connect(v); v.connect(ac.destination); os.start(t); os.stop(t + 0.1); };
      const dip = () => { if (!ac || !filt) return; const t = ac.currentTime; filt.frequency.cancelScheduledValues(t); filt.frequency.setValueAtTime(900, t); filt.frequency.exponentialRampToValueAtTime(20000, t + 0.5); };

      const say = (k, face = 'neutral') => { $('.sg-talk span').textContent = typeof k === 'string' ? k : pick(k); const im = $('.sg-hc'); if (!im.src.endsWith(face + '.webp')) im.src = FACE('haechan', face); el.classList.remove('talk'); void el.offsetWidth; el.classList.add('talk'); };
      const solarFace = f => { const im = $('.sg-sl'); if (!im.src.endsWith(f + '.webp')) im.src = FACE('solar', f); };
      const judge = (txt, cls, lane) => { const j = document.createElement('b'); j.className = 'sg-j ' + cls; j.textContent = txt; j.style.left = `${(lane + 0.5) * 33.33}%`; $('.sg-judge').appendChild(j); setTimeout(() => j.remove(), 600); };
      const burst = lane => { lanes[lane].classList.remove('hit'); void lanes[lane].offsetWidth; lanes[lane].classList.add('hit'); };
      const comboShow = () => { const c = $('.sg-combo'); c.textContent = st.combo >= 5 ? `${st.combo} COMBO` : ''; c.classList.toggle('big', st.combo >= 20); };

      /* the clock: the song's own time when it plays, else a free clock */
      let started = false, t0 = 0, lastNow = 0, pauseAt = 0;
      const now = () => audio && started && !audio.paused ? audio.currentTime : st.t;
      const start = () => {
        started = true; t0 = performance.now();
        if (audio) { ac && ac.resume(); audio.currentTime = 0; audio.play().catch(() => { audio = null; }); }
        say(TALK.intro);
      };

      /* hitting */
      const press = lane => {
        if (st.over || st.paused) return;
        st.held[lane] = true; lanes[lane].classList.add('down');
        const t = now(), cand = notes.find(n => n.lane === lane && n.hit == null && !n.held && !n.done && Math.abs(n.t - t) <= GOOD);
        if (!cand) return;
        const d = Math.abs(cand.t - t), ok = d <= PERFECT ? 'perfect' : 'good';
        cand.hit = ok; cand.el.classList.add('gone'); st[ok]++; st.combo++; st.maxCombo = Math.max(st.maxCombo, st.combo);
        st.score += (ok === 'perfect' ? 300 : 120) * (1 + Math.min(st.combo, 50) / 50);
        if (cand.len) { cand.hit = null; cand.held = true; cand.el.classList.remove('gone'); cand.el.classList.add('holding'); }
        judge(ok === 'perfect' ? 'PERFECT' : 'GOOD', ok, lane); burst(lane); tick(ok === 'perfect' ? 1320 : 990);
        energy = Math.min(1, energy + (ok === 'perfect' ? 0.35 : 0.2)); solarFace(st.combo > 15 ? 'happy' : 'neutral');
        if (st.combo && st.combo % 25 === 0) say(TALK.streak, 'happy');
        comboShow();
      };
      const release = lane => {
        st.held[lane] = false; lanes[lane].classList.remove('down');
        const t = now(), h = notes.find(n => n.lane === lane && n.held && !n.holdOk);
        if (h) { h.held = false; h.done = true; h.el.classList.add('gone'); if (t >= h.t + h.len - 0.15) { h.holdOk = true; st.score += 200; judge('HOLD!', 'perfect', lane); } }
      };
      const miss = n => {
        n.hit = 'miss'; st.miss++; if (st.combo >= 10) say(TALK.slip, 'serious'); st.combo = 0; comboShow(); judge('MISS', 'miss', n.lane); dip(); solarFace('surprised');
        n.el.classList.add('missed');
      };

      /* the waveform: her voice, louder when she's hitting */
      const cv = $('.sg-wave'), cx = cv.getContext('2d'); let energy = 0, phase = 0;
      const wave = dt => {
        energy = Math.max(0.05, energy - dt * 0.9); phase += dt * 9;
        cx.clearRect(0, 0, 600, 80); cx.lineWidth = 3; cx.strokeStyle = '#ff9ac8'; cx.shadowColor = '#ff4f9e'; cx.shadowBlur = 12; cx.beginPath();
        for (let x = 0; x <= 600; x += 6) { const y = 40 + Math.sin(x / 26 + phase) * energy * 26 * Math.sin(x / 600 * Math.PI) + Math.sin(x / 9 + phase * 2) * energy * 6; x ? cx.lineTo(x, y) : cx.moveTo(x, y); }
        cx.stroke();
      };

      /* the loop */
      let raf = 0;
      const loop = ts => {
        const dt = Math.min(0.06, (ts - (lastNow || ts)) / 1000); lastNow = ts;
        if (!st.paused && !st.over) {
          if (!started) { st.t += dt; if (st.t >= 0) start(); }
          else if (!audio) st.t += dt; else st.t = audio.currentTime;
          const t = now();
          for (const n of notes) {
            if (n.done) continue;
            const y = 1 - (n.t - t) / LEAD; // 0 at the top, 1 at the line
            if (n.held) { // a hold being sung: the head sits on the line, the tail shrinks into it
              if (t > n.t + n.len) { n.held = false; n.holdOk = true; n.done = true; st.score += 200; n.el.style.display = 'none'; judge('HOLD!', 'perfect', n.lane); }
              else { n.el.style.display = ''; n.el.style.top = '86%'; n.el.style.setProperty('--len', Math.max(0, (n.t + n.len - t) / LEAD)); energy = Math.min(1, energy + dt * 2); }
              continue;
            }
            if (n.hit && n.hit !== 'miss') { n.done = true; n.el.style.display = 'none'; continue; }
            if (!n.hit && y > 1 + GOOD / LEAD) miss(n);
            if (n.hit === 'miss' && t - n.t > 0.5) { n.done = true; n.el.style.display = 'none'; continue; }
            if (y < -0.05) { n.el.style.display = 'none'; continue; }
            n.el.style.display = ''; n.el.style.top = `${y * 86}%`;
          }
          // sections and talkback
          const si = (C.sections || []).reduce((a, s, i) => (t >= s.t ? i : a), -1);
          if (si !== st.sec && si >= 0) { st.sec = si; const nm = C.sections[si].name; $('.sg-sec').textContent = nm; if (si > 0) say(TALK[{ verse: 'verse', breath: 'breath', chorus: 'chorus', bridge: 'bridge', 'last chorus': 'last', outro: 'outro' }[nm] || 'verse']); }
          $('.sg-score').textContent = Math.round(st.score).toLocaleString();
          if (st.sec === 0) { const bar = Math.floor((t - C.offset) / (240 / C.bpm)) + 1; $('.sg-sec').textContent = bar >= 1 && bar <= 5 ? `count in · ${bar} of 5` : 'intro'; }
          $('.sg-prog i').style.width = `${Math.min(100, (t / C.duration) * 100)}%`;
          el.style.setProperty('--pulse', ((t - C.offset) / (60 / C.bpm)) % 1);
          wave(dt);
          if (t >= C.duration - 0.3 || (audio && audio.ended)) finish();
        }
        raf = requestAnimationFrame(loop);
      };

      const finish = (quit = false) => {
        if (st.over) return; st.over = true; cancelAnimationFrame(raf);
        if (audio) { const a = audio; let v = 1; const f = setInterval(() => { v -= 0.1; if (gain) gain.gain.value = Math.max(0, v); if (v <= 0) { clearInterval(f); a.pause(); } }, 60); }
        const total = notes.length, acc = total ? (st.perfect + st.good * 0.6) / total * 100 : 0;
        const grade = quit ? 'C' : acc >= 92 && st.miss <= 3 ? 'S' : acc >= 80 ? 'A' : acc >= 62 ? 'B' : 'C';
        const res = { song: C.id, level, score: Math.round(st.score), accuracy: Math.round(acc), perfect: st.perfect, good: st.good, miss: st.miss, maxCombo: st.maxCombo, grade, quit };
        say(TALK.end[grade], grade === 'S' || grade === 'A' ? 'happy' : 'neutral'); solarFace(grade === 'C' ? 'sad' : 'happy');
        const end = $('.mg-end'); end.hidden = false;
        end.innerHTML = `<b class="mg-grade">${grade}</b><dl><dt>Accuracy</dt><dd>${res.accuracy}%</dd><dt>Perfect</dt><dd>${res.perfect}</dd><dt>Good</dt><dd>${res.good}</dd><dt>Missed</dt><dd>${res.miss}</dd><dt>Best combo</dt><dd>${res.maxCombo}</dd></dl><p class="mg-end-say">Haechan: ${esc(TALK.end[grade])}</p><button type="button">Continue</button>`;
        end.querySelector('button').focus();
        end.querySelector('button').onclick = () => { cleanup(); o.onDone?.(res); done(res); };
      };

      /* input */
      const laneOf = k => KEYS.findIndex(ks => ks.includes(k.toLowerCase()));
      const key = e => {
        if (st.over) return; e.stopPropagation();
        if (e.key === 'Escape') { e.preventDefault(); setPause(!st.paused); return; }
        const l = laneOf(e.key); if (l < 0) return; e.preventDefault(); if (e.repeat) return; press(l);
      };
      const keyUp = e => { const l = laneOf(e.key); if (l >= 0) release(l); };
      const setPause = p => { st.paused = p; $('.mg-pause').hidden = !p; if (audio) { if (p) { pauseAt = audio.currentTime; audio.pause(); } else if (started) { audio.currentTime = pauseAt; audio.play().catch(() => {}); } } };
      lanes.forEach((ln, i) => { ln.addEventListener('pointerdown', e => { e.preventDefault(); press(i); }); ln.addEventListener('pointerup', () => release(i)); ln.addEventListener('pointerleave', () => st.held[i] && release(i)); });
      $('.mg-pause').onclick = e => { const b = e.target.dataset.mg; if (b === 'resume') setPause(false); if (b === 'quit') { st.paused = false; $('.mg-pause').hidden = true; finish(true); } };
      const cleanup = () => { cancelAnimationFrame(raf); window.removeEventListener('keydown', key, true); window.removeEventListener('keyup', keyUp, true); try { audio && audio.pause(); ac && ac.close(); } catch (e) {} el.remove(); };
      window.addEventListener('keydown', key, true); window.addEventListener('keyup', keyUp, true);
      say("Headphones on. Count in with me.");
      raf = requestAnimationFrame(loop);
    });
  }
  return { play };
})();
