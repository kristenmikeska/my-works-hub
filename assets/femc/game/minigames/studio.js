/* FEMC epilogue minigame: the mix (Nov 10 2026, EPILOGUE-EXPANSION-PLAN.md step 2). Runners: Studio 4B, or the West 26th session.
   Haechan hands Solar the faders and grades the playback flatly. In the story since Nov 11 (scene.js { minigame }; see its comment for where)
   (try it at mockups/minigames/studio.html).

   FemcStudio.play({ host, tracks, tries, onDone }) -> Promise<result>
     tracks  [{ id, name }] (default: Vocal, Piano, Bass, Drums)   tries  playbacks allowed (default 4)
   result = { score (0-100), tries, grade: 'S' | 'A' | 'B' | 'C', notes: [what he said] }

   How it plays: four faders. Somewhere there's the mix he hears in his head (a hidden target, a little different each time).
   Press Play back: the meters bounce (Web Audio: a soft synth loop per track at the fader's level, quiet; muted if the page says
   so) and Haechan says the one thing that's most wrong ("Vocal's buried." / "Too much low end." / "Drums are in the way.").
   Get every fader within reach of his mix and he says "...Yeah. That." Fewer playbacks = a better grade. Keys: 1-4 pick a fader,
   ↑ / ↓ move it, Space plays back, Esc pauses.

   Tutorial (Nov 11 2026, Kat: every minigame gets one; tutorial.js FemcTutorial, loaded on demand from this folder):
     play({ tutorial: true | false })  true = always show it, false = never; default = only the first time (id 'studio').
     Haechan guides a practice round on the real desk before the mix starts: move a fader (drag, or 1-4 then ↑ ↓), play it
     back once (that playback doesn't count), read his note, then the playbacks counter. After it the faders reset, his mix is
     new, and the count starts at 0. result.tutorial = 'done' | 'skipped' | 'seen' (not shown).
     Pause (Esc) → How to play replays it as a walkthrough over the paused desk (Next on every step, nothing to do).

   Polish pass (Nov 11 2026, Kat: "every minigame needs as many visuals as possible, as much animation as possible"; looks and
   a quiet fader click only, no rule or result changed): segmented VU meters with peak holds driven by the same beat grid as
   the synth loop (so they bounce with the music, muted or not), a scrolling waveform with tape reels and a playhead, each
   fader's glow column, value pop and knob following it (a soft click as it moves), ON AIR lit while it plays, playback pips,
   Haechan's talkback face beside his line (art/minigames/sing/hc-*, his portrait if missing) bobbing on the beat and reacting
   to each playback, and an end card with the grade slammed, the % ticking up and confetti on A / S. o.calm (Reduce flashes)
   and o.perf (Performance) default to the game's settings: calm = no blinking or flashes, perf = fewer bars, ~20 fps meters,
   no haze. Reduced motion (.still): levels shown without movement. */
window.FemcStudio = (() => {
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const TRACKS = [{ id: 'vox', name: 'Vocal' }, { id: 'keys', name: 'Piano' }, { id: 'bass', name: 'Bass' }, { id: 'drums', name: 'Drums' }];
  const LOUD = { vox: ["Vocal's sitting on top of everything. Pull it back.", 'You turned yourself up. I noticed.'], keys: ['Piano is too loud. It\'s a bed, not the song.', 'Less piano.'], bass: ['Too much low end. I can feel it in my teeth.', 'Bass is eating the room.'], drums: ['Drums are in the way.', "Drums down. It's not a gym."] };
  const QUIET = { vox: ["Vocal's buried. Bring yourself up.", "I can't hear you. That's the whole point, Solar."], keys: ['Where\'d the piano go?', 'Bring the piano up. It\'s holding the chords.'], bass: ['There\'s no bottom. It\'s floating.', 'More bass. Not a lot.'], drums: ['Drums are too shy.', "I can't feel the beat. Bring them up."] };
  const NEAR = ['Closer.', 'Almost. Listen to the second verse.', 'It\'s nearly there.'];
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const base = () => (window.FemcGame && window.FemcGame.base) || (typeof document !== 'undefined' && document.querySelector('script[src*="minigames/studio"]')?.src.split('assets/')[0]) || '';
  // first-time tutorial (Nov 11 2026): tutorial.js + .css load once, from this folder
  const tutLib = () => window.FemcTutorial ? Promise.resolve(window.FemcTutorial) : (window.FemcTutorialLoading ||= new Promise(ok => {
    const B = `${base()}assets/femc/game/minigames/tutorial`, l = document.createElement('link'), s = document.createElement('script');
    l.rel = 'stylesheet'; l.href = `${B}.css?v=1`; document.head.appendChild(l);
    s.src = `${B}.js?v=1`; s.onload = s.onerror = () => ok(window.FemcTutorial || null); document.head.appendChild(s);
  }));
  const SART = id => `${base()}assets/femc/game/art/minigames/sing/${id}.webp`; // Haechan's talkback faces (the booth's art)
  const PFACE = { neutral: 'neutral', talking: 'neutral', happy: 'happy', impressed: 'surprised', wince: 'serious', soft: 'happy' };
  const tutBusy = e => { const T = window.FemcTutorial; return !!(T && T.open() && (e.key === 'Escape' || T.blocking())); };

  function play(o = {}) {
    return new Promise(done => {
      const host = o.host || document.body, tracks = o.tracks || TRACKS, TRIES = o.tries || 4;
      const target = {}, lvl = {};
      tracks.forEach(t => { target[t.id] = 0.25 + Math.random() * 0.6; lvl[t.id] = 0.5; });
      const st = { tries: 0, sel: 0, notes: [], over: false, paused: false, playing: false, tut: false, tutRes: 'seen' };
      const tutOn = {}; // practice hooks: moved / played
      const tutHit = k => { const f = tutOn[k]; delete tutOn[k]; f && f(); };
      const el = document.createElement('div');
      const GS0 = (() => { try { return (window.FemcGame && window.FemcGame.settings && window.FemcGame.settings()) || {}; } catch (e) { return {}; } })();
      const CALM = o.calm ?? !!GS0.calm, PERF = o.perf ?? !!GS0.perf, STILL = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
      const BARS = PERF ? 24 : 44;
      el.className = 'mg-mix' + (CALM ? ' calm' : '') + (PERF ? ' perf' : '') + (STILL ? ' still' : '');
      el.innerHTML = `
        <div class="mg-mix-bg" aria-hidden="true"><i class="lamp l1"></i><i class="lamp l2"></i><i class="haze"></i></div>
        <div class="mg-mix-top"><b>Studio 4B · the mix</b><span class="mg-mix-onair" aria-hidden="true">ON AIR</span><span class="mg-mix-count"><span class="mg-mix-pips" aria-hidden="true">${Array.from({ length: TRIES }, () => '<i></i>').join('')}</span><span class="mg-mix-tries"></span></span></div>
        <p class="mg-mix-say" aria-live="polite"><img class="mg-mix-hc" alt="" src="${SART('hc-neutral')}"><b>Haechan</b><span>Your song. You mix it. I'll tell you when it's right.</span></p>
        <div class="mg-mix-wave" aria-hidden="true"><i class="mg-reel"></i><div class="mg-mix-bars">${Array.from({ length: BARS }, (_, i) => `<i style="--i:${i}"></i>`).join('')}<u class="mg-mix-head"></u></div><i class="mg-reel"></i></div>
        <div class="mg-mix-desk">${tracks.map((t, i) => `<div class="mg-ch" data-i="${i}" style="--lv:.5"><span class="mg-meter"><i></i><u></u></span><span class="mg-glow" aria-hidden="true"></span>
          <i class="mg-knob" aria-hidden="true"></i><output class="mg-ch-val">50</output><input type="range" min="0" max="100" value="50" aria-label="${esc(t.name)}" data-id="${t.id}"><b>${esc(t.name)}</b><small>${i + 1}</small></div>`).join('')}</div>
        <div class="mg-mix-go"><button type="button" class="mg-play">▶ Play back <small>Space</small></button></div>
        <p class="mg-mix-help">Drag the faders (or 1–4 then ↑ ↓), then play it back. He'll say what's wrong. Esc pauses.</p>
        <div class="mg-pause" hidden><b>Paused</b><button type="button" data-mg="resume">Resume</button><button type="button" data-mg="howto">How to play</button><button type="button" data-mg="quit">Quit</button></div>
        <div class="mg-end" hidden></div>`;
      host.appendChild(el);
      const $ = s => el.querySelector(s), chs = [...el.querySelectorAll('.mg-ch')];
      const say = t => { $('.mg-mix-say span').textContent = t; st.notes.push(t); once(el, 'talk', 400); };
      const paintTries = () => { $('.mg-mix-tries').textContent = `Playbacks ${st.tries} / ${TRIES}`; el.querySelectorAll('.mg-mix-pips i').forEach((p, k) => p.classList.toggle('used', k < st.tries)); };
      /* polish: fader feedback (glow column, value pop, knob, a soft click) and Haechan's face */
      let clickAt = 0, hcBad = false;
      const once = (node, cls, ms) => { if (!node) return; node.classList.remove(cls); void node.offsetWidth; node.classList.add(cls); clearTimeout(node['_t' + cls]); node['_t' + cls] = setTimeout(() => node.classList.remove(cls), ms); };
      const look = f => { const im = $('.mg-mix-hc'); if (!im) return; im.onerror = () => { hcBad = true; im.onerror = null; im.src = `${base()}assets/femc/portraits/haechan-runners/${PFACE[f] || 'neutral'}.webp`; }; im.src = hcBad ? `${base()}assets/femc/portraits/haechan-runners/${PFACE[f] || 'neutral'}.webp` : SART('hc-' + f); once(im, 'react', 420); };
      const feel = (c, v) => { c.style.setProperty('--lv', v / 100); const out = c.querySelector('.mg-ch-val'); if (out) { out.textContent = Math.round(v); once(out, 'pop', 500); } };
      const click = v => { if (o.mute || !ac) return; const t = performance.now(); if (t - clickAt < 45) return; clickAt = t; try { const os = ac.createOscillator(), g = ac.createGain(), n = ac.currentTime; os.type = 'square'; os.frequency.value = 900 + v * 9; g.gain.setValueAtTime(0.012, n); g.gain.exponentialRampToValueAtTime(0.0001, n + 0.03); os.connect(g); g.connect(ac.destination); os.start(n); os.stop(n + 0.04); } catch (e) {} };
      chs.forEach((c, i) => {
        const r = c.querySelector('input');
        r.oninput = () => { lvl[r.dataset.id] = r.value / 100; st.sel = i; mark(); feel(c, +r.value); click(+r.value); if (st.tut) tutHit('moved'); };
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
      /* polish: the meters and waveform follow the loop's own beat grid (0.375 s a beat, same as sound()), so they move with
         the music, muted or not */
      let vuRaf = 0, vuT0 = 0, vuSkip = 0; const peak = {};
      const env = (id, t) => {
        const B = 0.375, b = Math.floor(t / B), dt = t - b * B;
        if (id === 'keys') { const d4 = t - Math.floor(b / 4) * 4 * B; return 0.25 + 0.75 * Math.exp(-d4 / 0.7); }
        if (id === 'bass') return 0.2 + 0.8 * Math.exp(-dt / 0.14);
        if (id === 'drums') return b % 2 === 0 ? Math.exp(-dt / 0.07) : 0.45 * Math.exp(-dt / 0.03);
        if (id === 'vox') return b % 8 < 6 ? (dt < 0.05 ? 0.2 : 0.3 + 0.7 * Math.exp(-(dt - 0.05) / 0.2)) : 0.08;
        return 0.3 + 0.7 * Math.exp(-dt / 0.15);
      };
      let barEls = null; const bars = () => (barEls ||= [...el.querySelectorAll('.mg-mix-bars i')]);
      const meters = (t, live) => {
        let mix = 0;
        chs.forEach((c, i) => {
          const id = tracks[i].id, L = lvl[id] ?? 0.5, v = live ? Math.min(1, env(id, t) * L * 1.2 + Math.random() * 0.03 * L) : 0;
          mix += v / chs.length; peak[id] = Math.max(v, (peak[id] || 0) - 0.02);
          const m = c.querySelector('.mg-meter'); m.style.setProperty('--vu', v.toFixed(3)); m.style.setProperty('--pkh', (peak[id] || 0).toFixed(3));
        });
        bars().forEach((b, k) => b.style.setProperty('--v', live ? Math.min(1, 0.08 + mix * 1.5 * (0.55 + 0.45 * Math.sin(k * 0.62 + t * 11) * Math.cos(k * 0.21 - t * 4))).toFixed(3) : ''));
        const hd = $('.mg-mix-head'); if (hd) hd.style.setProperty('--p', live ? Math.min(1, t / 3).toFixed(3) : '0');
      };
      const vuLoop = ts => {
        if (!st.playing) { meters(0, false); vuRaf = 0; return; }
        if (!vuT0) vuT0 = ts; if (PERF && (vuSkip++ % 3)) { vuRaf = requestAnimationFrame(vuLoop); return; }
        meters((ts - vuT0) / 1000, !STILL); vuRaf = requestAnimationFrame(vuLoop);
      };
      const react = (worst, near) => { const f = near ? 'impressed' : worst.d > 0 ? 'wince' : 'talking'; look(f); once(el, near ? 'nod' : 'shake', 600); };
      const playback = () => {
        if (st.over || st.paused || st.playing) return;
        const practice = st.tut;
        st.playing = true; if (!practice) st.tries++; paintTries(); el.classList.add('on');
        sound(3000); look('neutral');
        chs.forEach((c, i) => c.querySelector('.mg-meter i').style.setProperty('--lv', lvl[tracks[i].id]));
        if (STILL) chs.forEach((c, i) => c.querySelector('.mg-meter').style.setProperty('--vu', (lvl[tracks[i].id] * 0.8).toFixed(3)));
        else { vuT0 = 0; cancelAnimationFrame(vuRaf); vuRaf = requestAnimationFrame(vuLoop); }
        setTimeout(() => {
          st.playing = false; el.classList.remove('on'); if (STILL) meters(0, false);
          const e = err(), worst = e[0], sc = score();
          react(worst, Math.abs(worst.d) < 0.16);
          if (practice) { $('.mg-mix-say span').textContent = Math.abs(worst.d) < 0.16 ? pick(NEAR) : pick(worst.d > 0 ? LOUD[worst.id] : QUIET[worst.id]); return tutHit('played'); }
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
        const res = { score: sc, tries: st.tries, grade: g, notes: st.notes, quit, tutorial: st.tutRes };
        const end = $('.mg-end'); end.hidden = false; el.classList.add('done'); el.dataset.grade = g;
        const conf = STILL || quit || (g !== 'S' && g !== 'A') ? '' : `<div class="mg-mix-conf" aria-hidden="true">${Array.from({ length: PERF ? 12 : 30 }, (_, i) => `<i style="--x:${(Math.random() * 100).toFixed(1)}%;--dx:${Math.round((Math.random() - 0.5) * 140)}px;--r:${Math.round(Math.random() * 720 - 360)}deg;--t:${(1.6 + Math.random() * 1.4).toFixed(2)}s;--dl:${(0.4 + Math.random() * 0.6).toFixed(2)}s;--c:${['#ff4f9e', '#ff9ac8', '#ffd3e6', '#fff'][i % 4]}"></i>`).join('')}</div>`;
        end.innerHTML = `${conf}<img class="mg-end-hc" alt="" src="${hcBad ? `${base()}assets/femc/portraits/haechan-runners/${PFACE[{ S: 'soft', A: 'happy', B: 'neutral', C: 'wince' }[g]]}.webp` : SART('hc-' + { S: 'soft', A: 'happy', B: 'neutral', C: 'wince' }[g])}" onerror="this.remove()"><span class="mg-gradewrap"><i class="mg-shock"></i><b class="mg-grade">${g}</b></span><dl><dt>How close</dt><dd class="mg-close" data-to="${sc}">${sc}%</dd><dt>Playbacks</dt><dd>${st.tries}</dd></dl><p class="mg-end-say">Haechan: ${esc(line)}</p><button type="button">Continue</button>`;
        const dd = end.querySelector('.mg-close');
        if (dd && !STILL && !quit) { const t0 = performance.now() + 450; const step = () => { if (!el.isConnected) return; const k = Math.max(0, Math.min(1, (performance.now() - t0) / 1000)); dd.textContent = `${k >= 1 ? sc : Math.round(sc * (1 - Math.pow(1 - k, 3)))}%`; if (k < 1) setTimeout(step, 40); }; dd.textContent = '0%'; setTimeout(step, 40); }
        end.querySelector('button').focus();
        end.querySelector('button').onclick = () => { cleanup(); o.onDone?.(res); done(res); };
      };
      const key = e => {
        if (st.over || tutBusy(e)) return;
        if (e.key === 'Escape') { e.preventDefault(); st.paused = !st.paused; $('.mg-pause').hidden = !st.paused; return; }
        if (st.paused) return;
        if (/^[1-4]$/.test(e.key)) { st.sel = +e.key - 1; mark(); }
        else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
          e.preventDefault(); const r = chs[st.sel].querySelector('input');
          r.value = Math.max(0, Math.min(100, +r.value + (e.key === 'ArrowUp' ? 4 : -4))); r.oninput();
        } else if (e.key === ' ') { e.preventDefault(); playback(); }
      };
      const cleanup = () => { window.removeEventListener('keydown', key, true); cancelAnimationFrame(vuRaf); try { ac && ac.close(); } catch (e) {} el.remove(); };
      $('.mg-play').onclick = playback;
      /* the tutorial: Haechan walks her through the desk once, on the real faders; replay = the same words as a walkthrough */
      const face = f => `${base()}assets/femc/portraits/haechan-runners/${f}.webp`;
      const tutSteps = replay => {
        const doIt = (k, extra) => replay ? {} : { wait: () => new Promise(ok => { tutOn[k] = ok; }), ...extra };
        return [
          { target: '.mg-mix-desk', face: face('neutral'), say: 'Your song, four parts: vocal, piano, bass, drums. Each fader is how loud that part is.' },
          { target: () => chs[0], face: face('neutral'), say: 'Move one. Drag a fader up or down, or press <b>1–4</b> to pick one and <b>↑ ↓</b> to move it.', ...doIt('moved') },
          { target: '.mg-play', face: face('happy'), say: 'Now <b>Play back</b> (or Space). This one is practice: it doesn\'t count.', ...doIt('played') },
          { target: '.mg-mix-say', face: face('serious'), say: 'After every playback I tell you the one thing that\'s most wrong. Fix that, then play it again.' },
          { target: '.mg-mix-tries', face: face('neutral'), say: 'You get four playbacks. The fewer you need, the better the grade. Esc pauses.' },
        ];
      };
      const settings = () => { try { return (window.FemcGame && window.FemcGame.settings && window.FemcGame.settings()) || {}; } catch (e) { return {}; } };
      const runTut = (T, replay) => T.run(el, { id: 'studio', who: 'Haechan', steps: tutSteps(replay), replay, calm: o.calm ?? !!settings().calm, perf: o.perf ?? !!settings().perf });
      const fresh = () => { // the real mix starts clean: faders at half, a new mix in his head, no playbacks
        tracks.forEach((t, i) => { target[t.id] = 0.25 + Math.random() * 0.6; lvl[t.id] = 0.5; const r = chs[i] && chs[i].querySelector('input'); if (r) r.value = 50; });
        chs.forEach(c => feel(c, 50)); look('neutral');
        st.sel = 0; st.tries = 0; st.notes = []; $('.mg-mix-say span').textContent = "Your song. You mix it. I'll tell you when it's right."; paintTries(); mark();
      };
      const howTo = () => tutLib().then(T => {
        if (!T || st.over) return;
        $('.mg-pause').hidden = true;
        runTut(T, true).then(() => { if (st.over) return; $('.mg-pause').hidden = false; $('.mg-pause button').focus(); });
      });
      $('.mg-pause').onclick = e => { const b = e.target.dataset.mg; if (b === 'resume') { st.paused = false; $('.mg-pause').hidden = true; } if (b === 'howto') howTo(); if (b === 'quit') { st.paused = false; finish(score(), true); } };
      window.addEventListener('keydown', key, true);
      paintTries(); mark();
      tutLib().then(T => {
        if (!T || !T.should('studio', o.tutorial)) return;
        st.tut = true;
        runTut(T, false).then(r => { st.tut = false; st.tutRes = r; for (const k in tutOn) delete tutOn[k]; const wait = () => st.playing ? setTimeout(wait, 100) : fresh(); wait(); });
      });
    });
  }
  return { play };
})();
