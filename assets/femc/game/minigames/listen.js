/* FEMC epilogue minigame: listen (Nov 10 2026, EPILOGUE-EXPANSION-PLAN.md step 2). Runners, 12/29 late, "one set": Fifth Avenue at
   2 a.m., Haechan says "Listen." Standalone: nothing in the story calls it yet (try it at mockups/minigames/listen.html).

   FemcListen.play({ host, rounds, mute, onDone }) -> Promise<result>
     rounds  how many sounds he asks for (default 4)   mute  no audio (captions still show)
   result = { found, rounds, listens, grade: 'S' | 'A' | 'B' | 'C' }

   How it plays: five glowing spots on the dark street, each a sound of the city made in the browser (Web Audio, no files): the
   building heat (a low B), the train under Lexington, the light ticking at Seventy-Second, a cab in the slush, a radiator behind a
   grate. Haechan names one the way he would ("The building heat. All of them at once."). Tap a spot to hear it (its caption shows
   once heard, so it also works with sound off), then "That one." Fewer listens is better. Esc pauses. */
window.FemcListen = (() => {
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const SOUNDS = [
    { id: 'heat', cap: 'a low hum, everywhere at once', ask: ["That's the building heat. All of them, all the way down the avenue. It's a low B.", 'Find the heat. The note under everything.'], x: 22, y: 30 },
    { id: 'train', cap: 'a rumble you feel in your feet first', ask: ['Under that, the subway. Every four minutes. You feel it before you hear it.', 'Find the train under Lexington.'], x: 70, y: 74 },
    { id: 'light', cap: 'a tiny electric tick', ask: ['The lights buzz when they change. Listen for it.', 'Find the light at Seventy-Second.'], x: 82, y: 26 },
    { id: 'cab', cap: 'tires hissing through slush', ask: ["A cab. Somewhere. In the slush.", 'Find the one car still out tonight.'], x: 40, y: 64 },
    { id: 'rad', cap: 'a metal knock behind a grate', ask: ['A radiator banging behind a basement grate. Somebody\'s warm.', 'Find the radiator.'], x: 54, y: 38 },
  ];
  const pick = a => a[Math.floor(Math.random() * a.length)];

  function play(o = {}) {
    return new Promise(done => {
      const host = o.host || document.body, ROUNDS = Math.min(o.rounds || 4, SOUNDS.length);
      const order = [...SOUNDS].sort(() => Math.random() - 0.5).slice(0, ROUNDS);
      const st = { r: 0, sel: null, heard: new Set(), listens: 0, found: 0, wrongs: 0, over: false, paused: false };
      const el = document.createElement('div');
      el.className = 'mg-lis';
      el.innerHTML = `
        <div class="mg-lis-top"><b>Fifth Avenue · 2:14 a.m.</b><span class="mg-lis-round"></span></div>
        <p class="mg-lis-say" aria-live="polite"><b>Haechan</b><span></span></p>
        <div class="mg-lis-street">${SOUNDS.map((s, i) => `<button type="button" class="mg-spot" data-i="${i}" style="left:${s.x}%;top:${s.y}%" aria-label="A sound"><i></i><em></em></button>`).join('')}
          <span class="mg-lis-snow" aria-hidden="true"></span></div>
        <div class="mg-lis-go"><button type="button" class="mg-that" disabled>That one.</button></div>
        <p class="mg-lis-help">Tap a light to listen. Then "That one." Esc pauses.</p>
        <div class="mg-pause" hidden><b>Paused</b><button type="button" data-mg="resume">Resume</button><button type="button" data-mg="quit">Quit</button></div>
        <div class="mg-end" hidden></div>`;
      host.appendChild(el);
      const $ = s => el.querySelector(s), spots = [...el.querySelectorAll('.mg-spot')];
      const say = t => { $('.mg-lis-say span').textContent = t; };
      let ac = null;
      const tone = (f, t0, dur, type, g, out) => { const os = ac.createOscillator(), gn = ac.createGain(); os.type = type; os.frequency.value = f; gn.gain.setValueAtTime(0.0001, ac.currentTime + t0); gn.gain.exponentialRampToValueAtTime(g, ac.currentTime + t0 + 0.08); gn.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + t0 + dur); os.connect(gn); gn.connect(out); os.start(ac.currentTime + t0); os.stop(ac.currentTime + t0 + dur + 0.05); };
      const noise = (t0, dur, type, f, q, g, out, sweep) => {
        const len = Math.ceil(ac.sampleRate * dur), buf = ac.createBuffer(1, len, ac.sampleRate), d = buf.getChannelData(0);
        let b = 0; for (let i = 0; i < len; i++) { const w = Math.random() * 2 - 1; b = type === 'brown' ? (b + 0.02 * w) / 1.02 : w; d[i] = type === 'brown' ? b * 3.5 : w; }
        const src = ac.createBufferSource(), fl = ac.createBiquadFilter(), gn = ac.createGain(); src.buffer = buf; fl.type = 'bandpass'; fl.frequency.value = f; fl.Q.value = q;
        if (sweep) fl.frequency.linearRampToValueAtTime(sweep, ac.currentTime + t0 + dur);
        gn.gain.setValueAtTime(0.0001, ac.currentTime + t0); gn.gain.exponentialRampToValueAtTime(g, ac.currentTime + t0 + dur * 0.4); gn.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + t0 + dur);
        src.connect(fl); fl.connect(gn); gn.connect(out); src.start(ac.currentTime + t0);
      };
      const sound = id => {
        if (o.mute) return;
        try {
          ac = ac || new (window.AudioContext || window.webkitAudioContext)();
          const out = ac.createGain(); out.gain.value = 0.35; out.connect(ac.destination);
          if (id === 'heat') { tone(61.7, 0, 2.2, 'sine', 0.6, out); tone(123.5, 0, 2.2, 'sine', 0.25, out); }
          if (id === 'train') noise(0, 2.4, 'brown', 90, 0.7, 0.9, out);
          if (id === 'light') { [0.2, 0.9, 1.6].forEach(t => tone(2400, t, 0.03, 'square', 0.15, out)); tone(120, 0, 2, 'sine', 0.05, out); }
          if (id === 'cab') noise(0, 1.8, 'white', 600, 1.2, 0.35, out, 1500);
          if (id === 'rad') { [0.15, 0.85].forEach(t => { noise(t, 0.15, 'white', 900, 3, 0.4, out); tone(340, t, 0.5, 'triangle', 0.25, out); tone(512, t, 0.35, 'triangle', 0.12, out); }); }
        } catch (e) {}
      };
      const round = () => {
        st.sel = null; $('.mg-that').disabled = true; spots.forEach(s => s.classList.remove('sel', 'right', 'wrong'));
        $('.mg-lis-round').textContent = `${st.r + 1} / ${ROUNDS}`;
        say(pick(order[st.r].ask));
      };
      const listen = i => {
        if (st.over || st.paused) return;
        st.listens++; st.sel = i; st.heard.add(i); sound(SOUNDS[i].id);
        spots.forEach((s, k) => s.classList.toggle('sel', k === i));
        spots[i].classList.add('heard'); spots[i].querySelector('em').textContent = SOUNDS[i].cap;
        spots[i].classList.remove('ping'); void spots[i].offsetWidth; spots[i].classList.add('ping');
        $('.mg-that').disabled = false;
      };
      const choose = () => {
        if (st.over || st.paused || st.sel == null) return;
        const right = SOUNDS[st.sel].id === order[st.r].id;
        spots[st.sel].classList.add(right ? 'right' : 'wrong');
        if (right) { st.found++; say(pick(['Yeah. That.', 'There it is.', "See? It's never nothing.", 'Mm. You hear it now.'])); st.r++; if (st.r >= ROUNDS) return setTimeout(finish, 1100); setTimeout(round, 1300); }
        else { st.wrongs++; say(pick(["That's not it. Listen again.", 'Close. Lower.', "No. That's something else. Keep listening."])); }
      };
      const finish = (quit = false) => {
        if (st.over) return; st.over = true;
        const extra = st.listens - ROUNDS;
        const g = quit ? 'C' : st.wrongs === 0 && extra <= 3 ? 'S' : st.wrongs <= 1 ? 'A' : st.wrongs <= 3 ? 'B' : 'C';
        const line = { S: "She'd lived her whole life in this city and never once heard it. Now she couldn't stop.", A: 'It came up out of the quiet the way a picture comes up in a darkroom.', B: 'Some of it came up out of the quiet. Enough.', C: '"It never turns off for you," she said. "Does it."' }[g];
        const res = { found: st.found, rounds: ROUNDS, listens: st.listens, wrongs: st.wrongs, grade: g, quit };
        const end = $('.mg-end'); end.hidden = false;
        end.innerHTML = `<b class="mg-grade">${g}</b><dl><dt>Sounds found</dt><dd>${st.found} / ${ROUNDS}</dd><dt>Listens</dt><dd>${st.listens}</dd></dl><p class="mg-end-say">${esc(line)}</p><button type="button">Continue</button>`;
        end.querySelector('button').focus();
        end.querySelector('button').onclick = () => { cleanup(); o.onDone?.(res); done(res); };
      };
      const key = e => {
        if (st.over) return;
        if (e.key === 'Escape') { e.preventDefault(); st.paused = !st.paused; $('.mg-pause').hidden = !st.paused; return; }
        if (!st.paused && e.key === 'Enter' && st.sel != null) { e.preventDefault(); choose(); }
      };
      const cleanup = () => { window.removeEventListener('keydown', key, true); try { ac && ac.close(); } catch (e) {} el.remove(); };
      spots.forEach((s, i) => s.onclick = () => listen(i));
      $('.mg-that').onclick = choose;
      $('.mg-pause').onclick = e => { const b = e.target.dataset.mg; if (b === 'resume') { st.paused = false; $('.mg-pause').hidden = true; } if (b === 'quit') { st.paused = false; finish(true); } };
      window.addEventListener('keydown', key, true);
      round();
    });
  }
  return { play };
})();
