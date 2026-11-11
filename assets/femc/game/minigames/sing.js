/* FEMC epilogue minigame: the booth (Nov 10 2026). Kat: "I am a BIG Friday Night Funkin player ... something more like that
   gameplay wise. DFJK. D is left, F is down, J is up, K is right. The music should be synced to the singer. ... graphics and
   animations ... our own take on that, Solstice style. No opponent." Runners: Studio 4B, Solar sings "Runners" by CAMO at the mic,
   Haechan bobs to it behind the glass. Standalone: nothing in the story calls it yet (demo: mockups/minigames/index.html; the chart
   editor Kat uses to fix the sync: mockups/minigames/sing-editor.html).

   FemcSing.play({ host, song, level, mute, chart, from, onDone }) -> Promise<result>
     record true = Kat's "make my own chart": no notes come; the song plays and every tap (D F J K, held = a long note) becomes
            a note, snapped to the 16th grid. Stop / the song's end → Save as my chart (localStorage draft: Normal and Hard = her
            taps, Easy = them thinned to a beat apart), Play it now, Copy for Claude. Result { record: notes, saved }.
     from   start the song at this second (the editor's Test from here); notes before it are dropped
     song   chart id in window.FEMC_CHARTS (default 'runners', minigames/charts/runners.js)
     level  'easy' | 'normal' | 'hard' (default 'normal')
     chart  optional { easy, normal, hard } overriding the file's charts (the editor's draft: FemcSing.draft(song))
     mute   no sound (the game runs on a free clock)
   result = { song, level, score, accuracy (0-100), perfect, good, ok, miss, maxCombo, fc, grade: 'S'|'A'|'B'|'C', failed, quit }

   Play: arrows rise to the four targets (downscroll: they fall); press D F J K (or ← ↓ ↑ →) as one covers its target, hold through
   the trails. Ghost tapping is free. PERFECT ±45 ms, GOOD ±90, OK ±135, else MISS. Health (the bar under the strum, Solar's icon)
   +on hits, −on misses: empty = Haechan stops the take (Retry). A miss dips the track and Solar's pose cracks.
   Feel: "Ready? / Set. / Sing!" count-in on the beat, the stage bops every bar and the HUD every beat, Solar poses per arrow
   and holds it through a trail, Haechan bobs every beat (talkback lines between sections), PERFECT splash, rating + combo pop.
   Options (pause menu, saved in localStorage kg-femc-sing-opts, shared with the editor): scroll speed, downscroll, offset (ms;
   + if the notes feel early). Clock: the song's own currentTime, smoothed between its updates.
   Art (FEMC-ART-TODO 45, art/minigames/sing/, cut by tools/femc-minigame-art.py): booth, haechan-desk; solar-idle / -left /
   -down / -up / -right / -miss (her singing poses); haechan-bop-0 / -1; arrow-0..3, target; rating-perfect / -good / -ok / -miss;
   ready / set / sing; icon-solar. Each falls back to a drawn stand-in. Reduced motion: no bops or shakes. */
window.FemcSing = (() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const base = () => (window.FemcGame && window.FemcGame.base) || (document.querySelector('script[src*="minigames/sing"]')?.src.split('assets/')[0]) || '';
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const DIRS = ['left', 'down', 'up', 'right'], ROT = [-90, 180, 0, 90];
  const KEYS = [['d', 'arrowleft'], ['f', 'arrowdown'], ['j', 'arrowup'], ['k', 'arrowright']];
  const WIN = [['perfect', 0.045, 350, 1, 2.3], ['good', 0.09, 200, 0.75, 1.5], ['ok', 0.135, 100, 0.4, 0.4]];
  const OPTS_KEY = 'kg-femc-sing-opts', DRAFT_KEY = id => `kg-femc-sing-draft:${id}`;
  const opts = () => { let o = {}; try { o = JSON.parse(localStorage.getItem(OPTS_KEY)) || {}; } catch (e) {} return { speed: 2.2, down: false, offset: 0, ...o }; };
  const saveOpts = o => { try { localStorage.setItem(OPTS_KEY, JSON.stringify(o)); } catch (e) {} };
  const draft = id => { try { return JSON.parse(localStorage.getItem(DRAFT_KEY(id))) || null; } catch (e) { return null; } };
  // the arrow: one path pointing up, rotated per lane (the Solstice take: a chunky cut arrow)
  const ARROW = '<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M50 6 L92 50 L66 50 L66 94 L34 94 L34 50 L8 50 Z"/></svg>';
  const TALK = {
    intro: ["On my count. You're in right away.", "Headphones on. Eyes on the arrows, not on me."],
    verse: ['Good. Stay in it.', 'There you are.'],
    breath: ['Breathe here.', 'Easy. Let it drop out.'],
    chorus: ["Here it comes. Don't reach for it.", 'Open up. The room wants it.'],
    bridge: ['Bridge. You always rush the bridge.', "You're rushing the and."],
    last: ['Last one. Give it everything.', 'All of it now.'],
    outro: ['Let the last note go.'],
    streak: ['...Yeah. That.', 'Keep doing that.', "Don't think. You're doing it."],
    slip: ['Find it again.', "You're rushing.", 'Listen to the kick.'],
    rec: "I'm recording. Tap it how it feels: D F J K, hold for the long ones. Esc when you want to stop.",
    fail: 'Stop. Stop the take. ...Again from the top. You know this.',
    end: { S: "...Don't touch it. That's the take.", A: "That's the song. I'm keeping that one.", B: "It's a take. We'll comp it.", C: "Again. You know it, you just don't trust it yet." },
  };

  function play(o = {}) {
    return new Promise(done => {
      const C = (window.FEMC_CHARTS || {})[o.song || 'runners'];
      if (!C) { done({ quit: true, error: 'no chart' }); return; }
      const level = o.level || 'normal', REC = !!o.record, rec = [], src = REC ? [] : (o.chart && o.chart[level]) || C.charts[level] || C.charts.normal;
      const O = opts(), host = o.host || document.body, ART = id => `${base()}assets/femc/game/art/minigames/sing/${id}.webp`;
      const FACE = (w, f) => `${base()}assets/femc/portraits/${w}-runners/${f}.webp`;
      const BEAT = 60 / C.bpm, PRE = BEAT * 4, FROM = Math.max(0, +o.from || 0); // a bar of count-in before the song
      const el = document.createElement('div');
      el.className = 'mg-sing' + (reduced.matches ? ' still' : '') + (O.down ? ' down' : '');
      const img = (cls, id, alt = '') => `<img class="${cls}" src="${ART(id)}" alt="${alt}" onerror="this.remove()">`;
      el.innerHTML = `
        <div class="sg-stage">
          ${img('sg-booth-art', 'booth')}<div class="sg-room"><i class="foam"></i><i class="glow"></i></div>
          <div class="sg-glass">${img('sg-hc-art', 'haechan-desk')}<div class="sg-hc">${img('sg-hc-bop b0', 'haechan-bop-0')}${img('sg-hc-bop b1', 'haechan-bop-1')}<img class="sg-hc-face" src="${FACE('haechan', 'neutral')}" alt="Haechan"></div><span class="sg-desk"></span><span class="sg-onair">ON AIR</span></div>
          <p class="sg-talk" aria-live="polite"><b>Haechan</b><span></span></p>
          <div class="sg-solar" data-pose="idle">${DIRS.concat('idle', 'miss').map(p => img(`sg-pose p-${p}`, `solar-${p}`)).join('')}<img class="sg-sl-face" src="${FACE('solar', 'neutral')}" alt="Solar"><span class="sg-mic"></span><i class="sg-notes-fx"></i></div>
          <div class="sg-pop"></div>
        </div>
        <div class="sg-hud">
          <div class="sg-time"><i></i><span></span></div>
          <div class="sg-strum">
            ${[0, 1, 2, 3].map(i => `<div class="sg-col" data-l="${i}"><div class="sg-target" style="--r:${ROT[i]}deg">${ARROW}${img('sg-t-art', 'target')}</div><i class="sg-splash"></i></div>`).join('')}
            <div class="sg-notes"></div>
          </div>
          <div class="sg-health"><i></i><b class="sg-icon"><img src="${ART('icon-solar')}" alt="" onerror="this.onerror=null;this.src='${FACE('solar', 'happy')}'"></b></div>
          <p class="sg-stats"></p>
          <div class="sg-count"></div>
        </div>
        <div class="mg-pause" hidden><b>Paused</b>
          <button type="button" data-mg="resume">Resume</button><button type="button" data-mg="restart">Restart</button>
          <div class="sg-opts">
            <label>Scroll speed <input type="range" min="1" max="4" step="0.1" data-o="speed"><output></output></label>
            <label><input type="checkbox" data-o="down"> Downscroll</label>
            <label>Offset <input type="range" min="-200" max="200" step="5" data-o="offset"><output></output> ms</label>
          </div>
          <button type="button" data-mg="quit">Quit</button></div>
        <div class="mg-end" hidden></div>`;
      host.appendChild(el);
      const $ = s => el.querySelector(s), cols = [...el.querySelectorAll('.sg-col')], noteBox = $('.sg-notes'), solar = $('.sg-solar');
      let notes;
      const st = { score: 0, combo: 0, maxCombo: 0, perfect: 0, good: 0, ok: 0, miss: 0, hp: 50, paused: false, over: false, sec: -1, held: [false, false, false, false], beat: -99, count: -1 };
      const build = () => {
        noteBox.innerHTML = '';
        notes = src.filter(n => n.t >= FROM - 0.02).map(n => ({ ...n, lane: n.lane % 4, hit: null, held: false, done: false })).sort((a, b) => a.t - b.t);
        notes.forEach(n => {
          n.el = document.createElement('div'); n.el.className = `sg-note l${n.lane}`; n.el.style.setProperty('--r', ROT[n.lane] + 'deg'); n.el.style.display = 'none';
          n.el.innerHTML = (n.len ? '<i class="sg-trail"></i>' : '') + `<span class="sg-head">${ARROW}<img src="${ART('arrow-' + n.lane)}" alt="" onerror="this.remove()"></span>`;
          noteBox.appendChild(n.el);
        });
      };
      build();

      /* audio: the song through Web Audio so a miss can dip it; synth for the count-in and misses */
      let audio = null, ac = null, gain = null, filt = null;
      if (!o.mute) {
        audio = new Audio(`${base()}${C.src}`); audio.preload = 'auto';
        try { ac = new (window.AudioContext || window.webkitAudioContext)(); const s = ac.createMediaElementSource(audio); filt = ac.createBiquadFilter(); filt.type = 'lowpass'; filt.frequency.value = 20000; gain = ac.createGain(); gain.gain.value = 0.9; s.connect(filt); filt.connect(gain); gain.connect(ac.destination); } catch (e) { }
      }
      const tone = (f, len = 0.12, g = 0.06, type = 'triangle') => { if (!ac) return; const t = ac.currentTime, os = ac.createOscillator(), v = ac.createGain(); os.type = type; os.frequency.value = f; v.gain.setValueAtTime(g, t); v.gain.exponentialRampToValueAtTime(0.0001, t + len); os.connect(v); v.connect(ac.destination); os.start(t); os.stop(t + len + 0.02); };
      const crack = () => { if (!ac) return; tone(180, 0.18, 0.05, 'sawtooth'); const t = ac.currentTime; if (filt) { filt.frequency.cancelScheduledValues(t); filt.frequency.setValueAtTime(700, t); filt.frequency.exponentialRampToValueAtTime(20000, t + 0.45); } };

      /* the clock: before the song a free count-in; then the song's own time, smoothed between its updates */
      let started = false, pre = FROM - PRE, last = 0, sync = { a: -1, p: 0 };
      const songT = () => {
        if (!started || !audio) return pre;
        const a = audio.currentTime, p = performance.now();
        if (a !== sync.a) sync = { a, p };
        return audio.paused ? a : sync.a + (p - sync.p) / 1000;
      };
      const now = () => songT() - O.offset / 1000;

      const say = (k, face = 'neutral') => { $('.sg-talk span').textContent = typeof k === 'string' ? k : pick(k); const im = $('.sg-hc-face'); if (!im.src.endsWith(face + '.webp')) im.src = FACE('haechan', face); el.classList.remove('talk'); void el.offsetWidth; el.classList.add('talk'); };
      let poseT = 0;
      const pose = (p, ms = 380) => { solar.dataset.pose = p; solar.classList.remove('hitpose'); void solar.offsetWidth; solar.classList.add('hitpose'); clearTimeout(poseT); if (ms) poseT = setTimeout(() => { if (!notes.some(n => n.held)) solar.dataset.pose = 'idle'; }, ms); };
      const popRating = (r, combo) => {
        const box = $('.sg-pop'), d = document.createElement('div'); d.className = 'sg-rate ' + r;
        d.innerHTML = `<img src="${ART('rating-' + r)}" alt="" onerror="this.remove()"><b>${{ perfect: 'PERFECT!!', good: 'GOOD', ok: 'OK', miss: 'MISS' }[r]}</b>` + (combo >= 10 ? `<span class="sg-num">${String(combo).padStart(3, '0').split('').map((c, i) => `<i style="--i:${i}">${c}</i>`).join('')}</span>` : '');
        box.appendChild(d); setTimeout(() => d.remove(), 700); while (box.children.length > 4) box.firstChild.remove();
      };
      const splash = lane => { const s = cols[lane].querySelector('.sg-splash'); s.classList.remove('on'); void s.offsetWidth; s.classList.add('on'); };
      const health = d => { st.hp = Math.max(0, Math.min(100, st.hp + d)); $('.sg-health').style.setProperty('--hp', st.hp); el.classList.toggle('low', st.hp < 25); if (st.hp <= 0) fail(); };
      const stats = () => { const tot = st.perfect + st.good + st.ok + st.miss, acc = tot ? (st.perfect + st.good * 0.75 + st.ok * 0.4) / tot * 100 : 100; $('.sg-stats').textContent = `Score ${Math.round(st.score).toLocaleString()} · Misses ${st.miss} · ${acc.toFixed(2)}%`; return acc; };

      /* hitting */
      const snap16 = t => { const g = BEAT / 4; return Math.max(0, +(C.offset + Math.round((t - C.offset) / g) * g).toFixed(3)); };
      const recDown = [null, null, null, null];
      const press = lane => {
        if (st.over || st.paused) return;
        st.held[lane] = true; cols[lane].classList.add('press');
        if (REC) { // her tap becomes a note; it lights the target and floats away so she sees it
          if (!started) return;
          const n = { t: snap16(now()), lane, len: 0 }; rec.push(n); recDown[lane] = n;
          cols[lane].classList.remove('hit'); void cols[lane].offsetWidth; cols[lane].classList.add('hit'); splash(lane); pose(DIRS[lane], 0);
          const f = document.createElement('div'); f.className = `sg-note sg-fly l${lane}`; f.style.setProperty('--r', ROT[lane] + 'deg'); f.style.display = 'block'; f.innerHTML = `<span class="sg-head">${ARROW}</span>`; noteBox.appendChild(f); setTimeout(() => f.remove(), 900);
          $('.sg-stats').textContent = `Recording · ${rec.length} notes`; return;
        }
        const t = now(); let cand = null;
        for (const n of notes) if (n.lane === lane && !n.hit && !n.done && Math.abs(n.t - t) <= WIN[2][1]) { cand = n; break; }
        if (!cand) return; // ghost tap: free
        const d = Math.abs(cand.t - t), [r, , pts, , hp] = WIN.find(x => d <= x[1]);
        cand.hit = r; st[r]++; st.combo++; st.maxCombo = Math.max(st.maxCombo, st.combo); st.score += pts; health(hp);
        cols[lane].classList.remove('hit'); void cols[lane].offsetWidth; cols[lane].classList.add('hit');
        if (r === 'perfect') splash(lane);
        popRating(r, st.combo); pose(DIRS[lane], cand.len ? 0 : 380);
        if (cand.len) { cand.held = true; cand.el.classList.add('holding'); } else { cand.done = true; cand.el.remove(); }
        if (st.combo && st.combo % 50 === 0) say(TALK.streak, 'happy');
        stats();
      };
      const release = lane => {
        st.held[lane] = false; cols[lane].classList.remove('press');
        if (REC) { const n = recDown[lane]; recDown[lane] = null; if (n) { const len = now() - n.t; if (len > BEAT * 0.6) n.len = +(Math.round(len / (BEAT / 4)) * BEAT / 4).toFixed(3); } pose('idle', 200); return; }
        const h = notes.find(n => n.lane === lane && n.held);
        if (h) { h.held = false; h.done = true; h.el.remove(); if (now() < h.t + h.len - 0.12) health(-1.5); pose('idle', 1); }
      };
      const miss = n => {
        n.hit = 'miss'; st.miss++; if (st.combo >= 20) say(TALK.slip, 'serious'); st.combo = 0; health(-4); crack(); popRating('miss', 0);
        n.el.classList.add('missed'); pose('miss', 450); stats();
      };

      /* drawing: notes are placed by translateY in the strum, the target line 70 px from the top (or the bottom) */
      const place = t => {
        const strum = $('.sg-strum'), h = strum.clientHeight, px = O.speed * 0.45 * h, tgt = O.down ? h - 70 : 70;
        for (const n of notes) {
          if (n.done) continue;
          if (n.held) { // the head sits on the target, the trail shortens into it
            const left = n.t + n.len - t;
            if (left <= 0) { n.held = false; n.done = true; n.el.remove(); st.score += 150; health(1); pose('idle', 1); continue; }
            n.el.style.transform = `translateY(${tgt}px)`; n.el.style.setProperty('--trail', left * px + 'px'); continue;
          }
          if (!n.hit && t - n.t > WIN[2][1]) miss(n);
          if (n.hit === 'miss' && t - n.t > 0.45 + (n.len || 0)) { n.done = true; n.el.remove(); continue; }
          const dy = (n.t - t) * px, y = O.down ? tgt - dy : tgt + dy, tail = (n.len || 0) * px;
          const vis = O.down ? (y > -60 && y - tail < h + 60) : (y < h + 60 && y + tail > -60);
          n.el.style.display = vis ? 'block' : 'none';
          if (vis) { n.el.style.transform = `translateY(${y}px)`; if (n.len) n.el.style.setProperty('--trail', tail + 'px'); }
        }
      };

      /* the loop */
      let raf = 0;
      const COUNT = [['ready', 'Ready?', 660], ['set', 'Set.', 660], ['sing', 'Sing!', 990]];
      const loop = ts => {
        const dt = Math.min(0.06, (ts - (last || ts)) / 1000); last = ts;
        if (!st.paused && !st.over) {
          if (!started) { pre += dt; if (pre >= FROM) { started = true; if (audio) { ac && ac.resume(); audio.currentTime = FROM; audio.play().catch(() => { audio = null; }); } else pre = FROM; } }
          else if (!audio) pre += dt;
          const T = songT(), t = T - O.offset / 1000;
          // count-in: "Ready? Set. Sing!" on the last three beats before the song
          if (T < FROM) { const cb = Math.floor((T - FROM + PRE) / BEAT) - 1; if (cb !== st.count && cb >= 0 && cb < 3) { st.count = cb; const c = COUNT[cb], d = $('.sg-count'); d.innerHTML = `<img src="${ART(c[0])}" alt="" onerror="this.remove()"><b>${c[1]}</b>`; d.className = 'sg-count on ' + c[0]; tone(c[2], 0.15, 0.07); } }
          else if (st.count !== 9) { st.count = 9; setTimeout(() => { if (st.count === 9) $('.sg-count').className = 'sg-count'; }, 400); }
          // beat and bar bops
          const b = Math.floor((T - C.offset) / BEAT);
          if (b !== st.beat) { st.beat = b; el.classList.remove('bop'); void el.offsetWidth; el.classList.add('bop'); el.classList.toggle('odd', b % 2 !== 0); if (((b % 4) + 4) % 4 === 0) { el.classList.remove('barbop'); void el.offsetWidth; el.classList.add('barbop'); } }
          place(t);
          const si = (C.sections || []).reduce((a, s, i) => (t >= s.t ? i : a), -1);
          if (si !== st.sec && si >= 0) { st.sec = si; const nm = C.sections[si].name; if (si > 0) say(TALK[{ verse: 'verse', breath: 'breath', chorus: 'chorus', bridge: 'bridge', 'last chorus': 'last', outro: 'outro' }[nm] || 'verse']); }
          const left = Math.max(0, C.duration - Math.max(0, t));
          $('.sg-time i').style.width = `${Math.min(100, Math.max(0, t) / C.duration * 100)}%`;
          $('.sg-time span').textContent = `${Math.floor(left / 60)}:${String(Math.floor(left % 60)).padStart(2, '0')}`;
          if (t >= C.duration - 0.3 || (audio && audio.ended)) finish();
        }
        raf = requestAnimationFrame(loop);
      };

      const fade = () => { if (!audio) return; const a = audio; let v = 0.9; const f = setInterval(() => { v -= 0.1; if (gain) gain.gain.value = Math.max(0, v); else a.volume = Math.max(0, v); if (v <= 0) { clearInterval(f); a.pause(); } }, 50); };
      const fail = () => {
        if (st.over) return; st.over = true; fade(); say(TALK.fail, 'serious'); pose('miss', 0); el.classList.add('failed');
        const end = $('.mg-end'); end.hidden = false;
        end.innerHTML = `<b class="sg-fail">Take stopped</b><p class="mg-end-say">Haechan: ${esc(TALK.fail)}</p><div class="sg-end-btns"><button type="button" data-r>Retry</button><button type="button" data-q>Quit</button></div>`;
        end.querySelector('[data-r]').focus();
        end.querySelector('[data-r]').onclick = restart;
        end.querySelector('[data-q]').onclick = () => out({ failed: true });
      };
      const out = extra => { const total = notes.length, acc = stats(); const res = { song: C.id, level, score: Math.round(st.score), accuracy: Math.round(acc), perfect: st.perfect, good: st.good, ok: st.ok, miss: st.miss, maxCombo: st.maxCombo, fc: st.miss === 0 && st.perfect + st.good + st.ok === total, grade: 'C', failed: false, quit: false, ...extra }; cleanup(); o.onDone?.(res); done(res); };
      const finish = (quit = false) => {
        if (REC) return recEnd();
        if (st.over) return; st.over = true; fade();
        const acc = stats(), fc = st.miss === 0;
        const grade = quit ? 'C' : acc >= 95 && st.miss <= 2 ? 'S' : acc >= 85 ? 'A' : acc >= 70 ? 'B' : 'C';
        say(TALK.end[grade], grade === 'S' || grade === 'A' ? 'happy' : 'neutral'); pose(grade === 'C' ? 'miss' : 'up', 0);
        const end = $('.mg-end'); end.hidden = false;
        end.innerHTML = `<b class="mg-grade">${grade}</b>${fc && !quit ? '<b class="sg-fc">FULL COMBO</b>' : ''}<dl><dt>Score</dt><dd>${Math.round(st.score).toLocaleString()}</dd><dt>Accuracy</dt><dd>${acc.toFixed(2)}%</dd><dt>Perfect</dt><dd>${st.perfect}</dd><dt>Good</dt><dd>${st.good}</dd><dt>OK</dt><dd>${st.ok}</dd><dt>Missed</dt><dd>${st.miss}</dd><dt>Best combo</dt><dd>${st.maxCombo}</dd></dl><p class="mg-end-say">Haechan: ${esc(TALK.end[grade])}</p><div class="sg-end-btns"><button type="button" data-c>Continue</button><button type="button" data-r>Again</button></div>`;
        end.querySelector('[data-c]').focus();
        end.querySelector('[data-c]').onclick = () => out({ grade, quit, fc: fc && !quit });
        end.querySelector('[data-r]').onclick = restart;
      };
      const recEnd = () => {
        if (st.over) return; st.over = true; fade(); for (let l = 0; l < 4; l++) if (recDown[l]) release(l);
        rec.sort((a, b) => a.t - b.t);
        const thin = gap => { const out = []; let lastEnd = -9; for (const n of rec) if (n.t - lastEnd >= gap - 0.01) { out.push({ ...n }); lastEnd = n.t + (n.len || 0); } return out; };
        const js = JSON.stringify({ song: C.id, charts: { easy: thin(BEAT), normal: rec, hard: rec } });
        const end = $('.mg-end'); end.hidden = false;
        end.innerHTML = `<b class="sg-fail" style="color:var(--pk2)">${rec.length} notes</b><p class="mg-end-say">That's your chart. Save it, then play it.</p><div class="sg-end-btns"><button type="button" data-s>Save as my chart</button><button type="button" data-p>Save and play it</button></div><div class="sg-end-btns"><button type="button" data-a>Record again</button><button type="button" data-x>Close without saving</button></div><button type="button" data-k>Copy for Claude</button>`;
        const saveIt = () => { try { localStorage.setItem(DRAFT_KEY(C.id), JSON.stringify({ charts: JSON.parse(js).charts, saved: new Date().toISOString() })); } catch (e) {} };
        end.querySelector('[data-s]').focus();
        end.querySelector('[data-s]').onclick = e => { saveIt(); e.target.textContent = 'Saved ✓'; };
        end.querySelector('[data-p]').onclick = () => { saveIt(); cleanup(); const r = { record: rec, saved: true, play: true }; o.onDone?.(r); done(r); };
        end.querySelector('[data-a]').onclick = () => { rec.length = 0; restart(); };
        end.querySelector('[data-x]').onclick = () => { cleanup(); const r = { record: rec, saved: false }; o.onDone?.(r); done(r); };
        end.querySelector('[data-k]').onclick = e => { saveIt(); navigator.clipboard?.writeText(js); e.target.textContent = 'Copied ✓ (and saved)'; };
      };
      const restart = () => {
        try { audio && audio.pause(); } catch (e) {}
        Object.assign(st, { score: 0, combo: 0, maxCombo: 0, perfect: 0, good: 0, ok: 0, miss: 0, hp: 50, paused: false, over: false, sec: -1, held: [false, false, false, false], beat: -99, count: -1 });
        started = false; pre = FROM - PRE; sync = { a: -1, p: 0 }; if (audio) { audio.currentTime = FROM; if (gain) gain.gain.value = 0.9; }
        $('.mg-end').hidden = true; $('.mg-pause').hidden = true; el.classList.remove('failed', 'low'); el.classList.toggle('down', O.down);
        build(); health(0); stats(); pose('idle', 1); say(REC ? TALK.rec : TALK.intro); recMode();
        cancelAnimationFrame(raf); last = 0; raf = requestAnimationFrame(loop);
      };

      /* input */
      const laneOf = k => KEYS.findIndex(ks => ks.includes(k.toLowerCase()));
      const key = e => {
        if (!el.isConnected || (st.over && !st.paused)) return;
        e.stopPropagation();
        if (e.key === 'Escape' || e.key === 'Enter') { e.preventDefault(); setPause(!st.paused); return; }
        if (st.paused) return;
        const l = laneOf(e.key); if (l < 0) return; e.preventDefault(); if (e.repeat) return; press(l);
      };
      const keyUp = e => { const l = laneOf(e.key); if (l >= 0) release(l); };
      const setPause = p => {
        st.paused = p; $('.mg-pause').hidden = !p;
        if (audio && started) { if (p) audio.pause(); else audio.play().catch(() => {}); }
        if (p) { $('.mg-pause [data-mg=resume]').focus(); paintOpts(); }
      };
      const paintOpts = () => el.querySelectorAll('[data-o]').forEach(i => { const k = i.dataset.o; if (i.type === 'checkbox') i.checked = !!O[k]; else { i.value = O[k]; i.nextElementSibling.textContent = k === 'speed' ? (+O[k]).toFixed(1) : O[k]; } });
      el.querySelector('.sg-opts').addEventListener('input', e => { const i = e.target, k = i.dataset.o; if (!k) return; O[k] = i.type === 'checkbox' ? i.checked : +i.value; saveOpts(O); el.classList.toggle('down', O.down); paintOpts(); });
      cols.forEach((c, i) => { c.addEventListener('pointerdown', e => { e.preventDefault(); press(i); }); c.addEventListener('pointerup', () => release(i)); c.addEventListener('pointerleave', () => st.held[i] && release(i)); });
      $('.mg-pause').onclick = e => { const b = e.target.dataset.mg; if (b === 'resume') setPause(false); if (b === 'restart') restart(); if (b === 'quit') { st.paused = false; $('.mg-pause').hidden = true; finish(true); } };
      const cleanup = () => { cancelAnimationFrame(raf); window.removeEventListener('keydown', key, true); window.removeEventListener('keyup', keyUp, true); try { audio && audio.pause(); ac && ac.close(); } catch (e) {} el.remove(); };
      window.addEventListener('keydown', key, true); window.addEventListener('keyup', keyUp, true);
      const recMode = () => { if (!REC) return; el.classList.add('rec'); $('.sg-stats').textContent = 'Recording · tap along with her voice'; $('.sg-health').style.display = 'none'; };
      health(0); stats(); say(REC ? TALK.rec : TALK.intro); recMode();
      raf = requestAnimationFrame(loop);
    });
  }
  return { play, draft, opts };
})();
