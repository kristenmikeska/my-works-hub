/* FEMC epilogue minigame: the mix (Nov 10 2026, EPILOGUE-EXPANSION-PLAN.md step 2). Runners: Studio 4B, or the West 26th session.
   Haechan hands Solar the faders and grades the playback flatly. Standalone: nothing in the story calls it yet
   (try it at mockups/minigames/studio.html).

   FemcStudio.play({ host, tracks, tries, onDone }) -> Promise<result>
     tracks  [{ id, name }] (default: Vocal, Piano, Bass, Drums)   tries  playbacks allowed (default 4)
   result = { score (0-100), tries, grade: 'S' | 'A' | 'B' | 'C', notes: [what he said] }

   How it plays: four faders. Somewhere there's the mix he hears in his head (a hidden target, a little different each time).
   Press Play back: the meters bounce (Web Audio: a soft synth loop per track at the fader's level, quiet; muted if the page says
   so) and Haechan says the one thing that's most wrong ("Vocal's buried." / "Too much low end." / "Drums are in the way.").
   Get every fader within reach of his mix and he says "...Yeah. That." Fewer playbacks = a better grade. Keys: 1-4 pick a fader,
   ↑ / ↓ move it, Space plays back, Esc pauses. */
window.FemcStudio = (() => {
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const TRACKS = [{ id: 'vox', name: 'Vocal' }, { id: 'keys', name: 'Piano' }, { id: 'bass', name: 'Bass' }, { id: 'drums', name: 'Drums' }];
  const LOUD = { vox: ["Vocal's sitting on top of everything. Pull it back.", 'You turned yourself up. I noticed.'], keys: ['Piano is too loud. It\'s a bed, not the song.', 'Less piano.'], bass: ['Too much low end. I can feel it in my teeth.', 'Bass is eating the room.'], drums: ['Drums are in the way.', "Drums down. It's not a gym."] };
  const QUIET = { vox: ["Vocal's buried. Bring yourself up.", "I can't hear you. That's the whole point, Solar."], keys: ['Where\'d the piano go?', 'Bring the piano up. It\'s holding the chords.'], bass: ['There\'s no bottom. It\'s floating.', 'More bass. Not a lot.'], drums: ['Drums are too shy.', "I can't feel the beat. Bring them up."] };
  const NEAR = ['Closer.', 'Almost. Listen to the second verse.', 'It\'s nearly there.'];
  const pick = a => a[Math.floor(Math.random() * a.length)];

  function play(o = {}) {
    return new Promise(done => {
      const host = o.host || document.body, tracks = o.tracks || TRACKS, TRIES = o.tries || 4;
      const target = {}, lvl = {};
      tracks.forEach(t => { target[t.id] = 0.25 + Math.random() * 0.6; lvl[t.id] = 0.5; });
      const st = { tries: 0, sel: 0, notes: [], over: false, paused: false, playing: false };
      const el = document.createElement('div');
      el.className = 'mg-mix';
      el.innerHTML = `
        <div class="mg-mix-top"><b>Studio 4B · the mix</b><span class="mg-mix-tries"></span></div>
        <p class="mg-mix-say" aria-live="polite"><b>Haechan</b><span>Your song. You mix it. I'll tell you when it's right.</span></p>
        <div class="mg-mix-desk">${tracks.map((t, i) => `<div class="mg-ch" data-i="${i}"><span class="mg-meter"><i></i></span>
          <input type="range" min="0" max="100" value="50" aria-label="${esc(t.name)}" data-id="${t.id}"><b>${esc(t.name)}</b><small>${i + 1}</small></div>`).join('')}</div>
        <div class="mg-mix-go"><button type="button" class="mg-play">▶ Play back <small>Space</small></button></div>
        <p class="mg-mix-help">Drag the faders (or 1–4 then ↑ ↓), then play it back. He'll say what's wrong. Esc pauses.</p>
        <div class="mg-pause" hidden><b>Paused</b><button type="button" data-mg="resume">Resume</button><button type="button" data-mg="quit">Quit</button></div>
        <div class="mg-end" hidden></div>`;
      host.appendChild(el);
      const $ = s => el.querySelector(s), chs = [...el.querySelectorAll('.mg-ch')];
      const say = t => { $('.mg-mix-say span').textContent = t; st.notes.push(t); };
      const paintTries = () => { $('.mg-mix-tries').textContent = `Playbacks ${st.tries} / ${TRIES}`; };
      chs.forEach((c, i) => {
        const r = c.querySelector('input');
        r.oninput = () => { lvl[r.dataset.id] = r.value / 100; st.sel = i; mark(); };
      });
      const mark = () => chs.forEach((c, i) => c.classList.toggle('sel', i === st.sel));
      const err = () => tracks.map(t => ({ id: t.id, d: lvl[t.id] - target[t.id] })).sort((a, b) => Math.abs(b.d) - Math.abs(a.d));
      const score = () => Math.max(0, Math.round(100 - err().reduce((s, e) => s + Math.abs(e.d), 0) / tracks.length * 220));
      // sound: a quiet four-part loop through Web Audio (each part's gain = its fader); off if muted or unsupported
      let ac = null;
      const sound = ms => {
        if (o.mute) return;
        try {
          ac = ac || new (window.AudioContext || window.webkitAudioContext)();
          const now = ac.currentTime, master = ac.createGain(); master.gain.value = 0.12; master.connect(ac.destination);
          const note = (f, t0, dur, type, g) => { const os = ac.createOscillator(), gn = ac.createGain(); os.type = type; os.frequency.value = f; gn.gain.setValueAtTime(0, now + t0); gn.gain.linearRampToValueAtTime(g, now + t0 + 0.02); gn.gain.exponentialRampToValueAtTime(0.0001, now + t0 + dur); os.connect(gn); gn.connect(master); os.start(now + t0); os.stop(now + t0 + dur + 0.05); };
          const L = id => lvl[id] ?? 0.5, beats = Math.floor(ms / 375);
          const prog = [[220, 277.2, 329.6], [196, 246.9, 293.7], [174.6, 220, 261.6], [196, 246.9, 293.7]];
          for (let b = 0; b < beats; b++) {
            const t = b * 0.375, ch = prog[Math.floor(b / 4) % 4];
            if (b % 4 === 0) ch.forEach(f => note(f, t, 1.4, 'triangle', 0.18 * L('keys')));
            note(ch[0] / 2, t, 0.3, 'sine', 0.5 * L('bass'));
            if (b % 2 === 0) note(60, t, 0.12, 'square', 0.25 * L('drums'));
            if (b % 2 === 1) note(1800, t, 0.05, 'square', 0.08 * L('drums'));
            if (b % 8 < 6) note([440, 494, 523, 494, 440, 392][b % 6], t + 0.05, 0.3, 'sine', 0.3 * L('vox'));
          }
        } catch (e) {}
      };
      const playback = () => {
        if (st.over || st.paused || st.playing) return;
        st.playing = true; st.tries++; paintTries(); el.classList.add('on');
        sound(3000);
        chs.forEach((c, i) => c.querySelector('.mg-meter i').style.setProperty('--lv', lvl[tracks[i].id]));
        setTimeout(() => {
          st.playing = false; el.classList.remove('on');
          const e = err(), worst = e[0], sc = score();
          if (Math.abs(worst.d) < 0.09) return finish(sc);
          say(Math.abs(worst.d) < 0.16 ? pick(NEAR) : pick(worst.d > 0 ? LOUD[worst.id] : QUIET[worst.id]));
          if (st.tries >= TRIES) setTimeout(() => finish(sc), 1200);
        }, 3000);
      };
      const finish = (sc, quit = false) => {
        if (st.over) return; st.over = true;
        const g = quit ? 'C' : sc >= 88 && st.tries <= 2 ? 'S' : sc >= 80 ? 'A' : sc >= 62 ? 'B' : 'C';
        const line = { S: '...Yeah. That. Don\'t touch it.', A: "Yeah. That's the song.", B: "It's a mix. I'll fix the low end later.", C: "Okay. I'll do it. You sing." }[g];
        st.notes.push(line);
        const res = { score: sc, tries: st.tries, grade: g, notes: st.notes, quit };
        const end = $('.mg-end'); end.hidden = false;
        end.innerHTML = `<b class="mg-grade">${g}</b><dl><dt>How close</dt><dd>${sc}%</dd><dt>Playbacks</dt><dd>${st.tries}</dd></dl><p class="mg-end-say">Haechan: ${esc(line)}</p><button type="button">Continue</button>`;
        end.querySelector('button').focus();
        end.querySelector('button').onclick = () => { cleanup(); o.onDone?.(res); done(res); };
      };
      const key = e => {
        if (st.over) return;
        if (e.key === 'Escape') { e.preventDefault(); st.paused = !st.paused; $('.mg-pause').hidden = !st.paused; return; }
        if (st.paused) return;
        if (/^[1-4]$/.test(e.key)) { st.sel = +e.key - 1; mark(); }
        else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
          e.preventDefault(); const r = chs[st.sel].querySelector('input');
          r.value = Math.max(0, Math.min(100, +r.value + (e.key === 'ArrowUp' ? 4 : -4))); r.oninput();
        } else if (e.key === ' ') { e.preventDefault(); playback(); }
      };
      const cleanup = () => { window.removeEventListener('keydown', key, true); try { ac && ac.close(); } catch (e) {} el.remove(); };
      $('.mg-play').onclick = playback;
      $('.mg-pause').onclick = e => { const b = e.target.dataset.mg; if (b === 'resume') { st.paused = false; $('.mg-pause').hidden = true; } if (b === 'quit') { st.paused = false; finish(score(), true); } };
      window.addEventListener('keydown', key, true);
      paintTries(); mark();
    });
  }
  return { play };
})();
