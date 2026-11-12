/* FEMC epilogue minigame: the booth (Nov 10 2026). Kat: "I am a BIG Friday Night Funkin player ... something more like that
   gameplay wise. DFJK. D is left, F is down, J is up, K is right. The music should be synced to the singer. ... graphics and
   animations ... our own take on that, Solstice style. No opponent." Runners: Studio 4B, Solar sings "Runners" by CAMO at the mic,
   Haechan bobs to it behind the glass.
   Kat, Nov 10: in the real game the ONLY chart is hers (charts/runners.js). Record mode, `chart` drafts and the editor are her
   tuning tools on the demo page; when this is wired into a scene, call play({ level }) only: no record, no draft, no editor.
   In the story since Nov 11 (scene.js { minigame }; see its comment for where) (demo: mockups/minigames/index.html; the chart
   editor Kat uses to fix the sync: mockups/minigames/sing-editor.html).

   FemcSing.play({ host, song, level, mute, chart, from, onDone }) -> Promise<result>
     record true = Kat's "make my own chart": no notes come; the song plays and every tap (D F J K, held = a long note) becomes
            a note, snapped to the 16th grid. Stop / the song's end → Save as my chart (localStorage draft: Normal and Hard = her
            taps, Easy = them thinned to a beat apart), Play it now, Copy for Claude. Result { record: notes, saved }.
     singers  optional [{ t, who }] overriding the song's (her draft's); who = 'solar' | 'haechan' | 'both' (Haechan at the
            mic swaps the stage: he sings, Solar bops behind the glass on talkback; 'both' = a duet at the mic). While recording,
            1 / 2 / 3 mark Solar / Haechan / both from that moment.
     Songs: one file per song in minigames/charts/<id>.js ({ id, title, artist, src, bpm, offset, duration (the clip's end),
            snap (false = taps kept as played), singer, singers, charts }); only Kat's recorded Hard + its thinned Normal / Easy.
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
   -down / -up / -right / -miss (her singing poses); haechan-bop-0 / -1; arrow-0..3 (all point up, rotated per lane), target, splash
   (the PERFECT burst on the target); rating-perfect / -good / -ok / -miss; ready / set / sing; icon-solar. Each falls back to a
   drawn stand-in. In since art batch 150: booth, haechan-desk, the arrows sheet, ratings, count-in (the rest still to make). Reduced motion: no bops or shakes.

   Tutorial (Nov 11 2026, Kat: every minigame teaches itself; tutorial.js, FemcTutorial, loaded on demand from this folder):
     play({ tutorial }) true = always, false = never, else only the first time (localStorage kg-femc-tutorials 'sing'); never by
     itself in record mode or with `from` (the editor). After the title card, whoever's on talkback (Haechan; Solar when he's at
     the mic) runs a practice take on a free clock with no song: the targets and keys, four slow arrows (one per lane; a missed
     one comes round again), one held note, the health bar, the pause options. Health can't run out in practice. Then the score
     and notes are reset and the real count-in starts the song from the top. Pause → How to play replays it as a walkthrough
     (the song stays paused). result.tutorial = 'done' | 'skipped' | 'seen' (not shown). o.hook(fn) gets test handles (jsc). */
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
  const draft = id => { try { const d = JSON.parse(localStorage.getItem(DRAFT_KEY(id))); return d && d.v >= 2 ? d : null; } catch (e) { return null; } }; // v2: recorded after the Restart fix
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
    rec: "I'm recording. Tap it how it feels: D F J K, hold for the long ones. Mess up? Esc, go back, play over it.",
    fail: 'Stop. Stop the take. ...Again from the top. You know this.',
    end: { S: "...Don't touch it. That's the take.", A: "That's the song. I'm keeping that one.", B: "It's a take. We'll comp it.", C: "Again. You know it, you just don't trust it yet." },
  };

  const TALK_S = { // Solar on the talkback while Haechan sings
    intro: ["You're on. Don't make it weird.", "Headphones on, Lee. I'm rolling."],
    verse: ["Okay. That's... good.", "Keep going. Don't look at me."],
    breath: ['Breathe. You always forget to breathe.'],
    chorus: ['Here it comes. Show-off.', "Open up. You're holding back."],
    bridge: ["Bridge. Slow down, you're rushing it."],
    last: ['Last one. All of it.'],
    outro: ["Let it go. ...Don't smirk."],
    streak: ["Show-off.", "...Okay. That one got me.", "Don't let it go to your head."],
    slip: ["You're behind the kick.", "Again. You're better than that.", 'Find it again.'],
    rec: "I'm recording. Tap it how it feels: D F J K, hold for the long ones. Mess up? Esc, go back, play over it.",
    fail: "Stop. You're overthinking it. From the top.",
    end: { S: "...I'm keeping that. Don't argue.", A: "That's the take. Obviously.", B: "It's a take. We'll comp it.", C: "Again. You know this one." },
  };
  const NAME = { solar: 'Solar', haechan: 'Haechan' };

  // in the game the chart file isn't on the page: load minigames/charts/<song>.js on first use
  const CHART_V = { runners: 5 };
  // the shared first-time tutorial (tutorial.js / .css, loaded once from this folder; null = play without one)
  const tutLib = () => window.FemcTutorial ? Promise.resolve(window.FemcTutorial) : (window.FemcTutorialLoading ||= new Promise(ok => {
    const B = `${base()}assets/femc/game/minigames/tutorial`, l = document.createElement('link'), s = document.createElement('script');
    l.rel = 'stylesheet'; l.href = `${B}.css?v=1`; document.head.appendChild(l);
    s.src = `${B}.js?v=1`; s.onload = s.onerror = () => ok(window.FemcTutorial || null); document.head.appendChild(s);
  }));
  const loadChart = id => new Promise(ok => { const s = document.createElement('script'); s.src = `${base()}assets/femc/game/minigames/charts/${id}.js?v=${CHART_V[id] || 1}`; s.onload = s.onerror = () => ok(); document.head.appendChild(s); });
  function play(o = {}) {
    const id = o.song || 'runners';
    if (!(window.FEMC_CHARTS || {})[id] && !o._loaded) return loadChart(id).then(() => play({ ...o, _loaded: true }));
    return new Promise(done => {
      const C = (window.FEMC_CHARTS || {})[o.song || 'runners'];
      if (!C) { done({ quit: true, error: 'no chart' }); return; }
      const level = o.level || 'normal', REC = !!o.record;
      // record mode starts from her saved chart (else the game's) and replaces only what she plays over
      const D0 = draft(C.id), recBase = REC ? ((D0 || {}).charts || C.charts).hard || [] : null;
      // who sings when: [{ t, who: 'solar' | 'haechan' | 'both' }] (Kat marks it while recording: 1 / 2 / 3)
      const sing = ((REC ? (D0 || {}).singers : o.singers) || C.singers || [{ t: 0, who: C.singer || 'solar' }]).map(x => ({ t: x.t, who: x.who, pass: -1 }));
      const src = REC ? recBase : (o.chart && o.chart[level]) || C.charts[level] || C.charts.normal;
      const O = opts(), host = o.host || document.body, ART = id => `${base()}assets/femc/game/art/minigames/sing/${id}.webp`;
      const FACE = (w, f) => `${base()}assets/femc/portraits/${w}-runners/${f}.webp`;
      const BEAT = 60 / C.bpm, PRE = BEAT * 4, FROM = Math.max(0, +o.from || 0); // a bar of count-in before the song
      let from = FROM, pass = 0, wipeFrom = FROM; // record mode: where the song (re)starts, which take, how far it has replaced
      const el = document.createElement('div');
      el.className = 'mg-sing' + (reduced.matches ? ' still' : '') + (O.down ? ' down' : '');
      const img = (cls, id, alt = '') => `<img class="${cls}" src="${ART(id)}" alt="${alt}" onerror="this.remove()">`;
      el.innerHTML = `
        <div class="sg-stage">
          ${img('sg-booth-art', 'booth')}<div class="sg-room"><i class="foam"></i><i class="glow"></i></div>
          <div class="sg-glass">${img('sg-hc-art', 'haechan-desk')}<div class="sg-hc">${img('sg-hc-bop b0', 'haechan-bop-0')}${img('sg-hc-bop b1', 'haechan-bop-1')}<img class="sg-hc-face" src="${FACE('haechan', 'neutral')}" alt="Haechan"></div><span class="sg-desk"></span><span class="sg-onair">ON AIR</span></div>
          <p class="sg-talk" aria-live="polite"><img class="sg-tb" alt="" hidden><b>Haechan</b><span></span></p>
          <div class="sg-solar" data-pose="idle">${DIRS.concat('idle', 'miss').map(p => img(`sg-pose p-${p}`, `solar-${p}`)).join('')}<img class="sg-sl-face" src="${FACE('solar', 'neutral')}" alt="Solar"><span class="sg-mic"></span><i class="sg-notes-fx"></i></div>
          <div class="sg-pop"></div>
        </div>
        <div class="sg-hud">
          <div class="sg-time"><i></i><span></span></div>
          <div class="sg-strum">
            ${[0, 1, 2, 3].map(i => `<div class="sg-col" data-l="${i}"><div class="sg-target" style="--r:${ROT[i]}deg">${ARROW}${img('sg-t-art', 'target')}</div><i class="sg-splash">${img('sg-sp-art', 'splash')}</i></div>`).join('')}
            <div class="sg-notes"></div>
          </div>
          <div class="sg-health"><i></i><b class="sg-icon"><img src="${ART('icon-solar')}" alt="" onerror="this.onerror=null;this.src='${FACE('solar', 'happy')}'"></b></div>
          <p class="sg-stats"></p>
          <div class="sg-count"></div>
        </div>
        <div class="mg-pause" hidden><b>Paused</b>
          ${REC ? `<p class="sg-rec-help">Go back and play over a part to redo it. Everything you don't play over stays.</p><div class="sg-end-btns"><button type="button" data-mg="back5">Back 5 sec</button><button type="button" data-mg="back10">Back 10 sec</button><button type="button" data-mg="back0">Back to start</button></div><button type="button" data-mg="resume">Resume</button><button type="button" data-mg="save">Finish &amp; save</button>` : `<button type="button" data-mg="resume">Resume</button><button type="button" data-mg="restart">Restart</button><button type="button" data-mg="howto">How to play</button>`}
          <div class="sg-opts">
            <label>Scroll speed <input type="range" min="1" max="4" step="0.1" data-o="speed"><output></output></label>
            <label><input type="checkbox" data-o="down"> Downscroll</label>
            <label>Offset <input type="range" min="-200" max="200" step="5" data-o="offset"><output></output> ms</label>
          </div>
          ${REC ? '' : '<button type="button" data-mg="quit">Quit</button>'}</div>
        <div class="mg-end" hidden></div>
        ${REC || FROM ? '' : `<div class="sg-title"><img src="${ART('title')}" alt=""></div>`}`;
      host.appendChild(el);
      const $ = s => el.querySelector(s), cols = [...el.querySelectorAll('.sg-col')], noteBox = $('.sg-notes'), solar = $('.sg-solar'), hcBox = $('.sg-hc');
      let mic = null, talker = 'haechan';
      const T = () => (talker === 'solar' ? TALK_S : TALK);
      const cast = who => {
        if (who === mic) return; mic = who; el.dataset.mic = who;
        const singer = who === 'haechan' ? 'haechan' : 'solar', other = who === 'haechan' ? 'solar' : 'haechan', pose = solar.dataset.pose || 'idle';
        solar.innerHTML = DIRS.concat('idle', 'miss').map(p => img(`sg-pose p-${p}`, `${singer}-${p}`)).join('') + `<img class="sg-sl-face" src="${FACE(singer, 'neutral')}" alt="${NAME[singer]}">` + (who === 'both' ? `<img class="sg-duo" src="${FACE('haechan', 'happy')}" alt="Haechan">` : '') + '<span class="sg-mic"></span><i class="sg-notes-fx"></i>';
        solar.dataset.pose = pose;
        hcBox.innerHTML = who === 'both' ? '' : `${img('sg-hc-bop b0', other + '-bop-0')}${img('sg-hc-bop b1', other + '-bop-1')}<img class="sg-hc-face" src="${FACE(other, 'neutral')}" alt="${NAME[other]}">`;
        talker = other; $('.sg-talk b').textContent = NAME[other]; el.classList.toggle('duet', who === 'both');
        const ic = $('.sg-icon img'); ic.onerror = () => { ic.onerror = null; ic.src = FACE(singer, 'happy'); }; ic.src = ART('icon-' + singer);
      };
      const whoAt = t => sing.reduce((a, x) => (!x.dead && x.t <= t + 1e-3 ? x.who : a), sing[0] ? sing[0].who : 'solar');
      let notes;
      const st = { score: 0, combo: 0, maxCombo: 0, perfect: 0, good: 0, ok: 0, miss: 0, hp: 50, paused: false, over: false, sec: -1, held: [false, false, false, false], beat: -99, count: -1 };
      const mkEl = n => {
        n.el = n.el || document.createElement('div'); n.el.className = `sg-note l${n.lane}` + (REC && n.pass !== pass ? ' ghost' : ''); n.el.style.setProperty('--r', ROT[n.lane] + 'deg'); n.el.style.display = 'none';
        n.el.innerHTML = (n.len ? '<i class="sg-trail"></i>' : '') + `<span class="sg-head">${ARROW}<img src="${ART('arrow-' + n.lane)}" alt="" onerror="this.remove()"></span>`;
        if (!n.el.isConnected) noteBox.appendChild(n.el);
      };
      const drop = n => { n.done = true; n.el && n.el.remove(); };
      const build = () => {
        noteBox.innerHTML = '';
        notes = src.filter(n => REC || n.t >= FROM - 0.02).map(n => ({ t: n.t, lane: n.lane % 4, len: n.len || 0, hit: null, held: false, done: false, pass: -1 })).sort((a, b) => a.t - b.t);
        notes.forEach(mkEl);
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
      let started = false, pre = from - PRE, last = 0, sync = { a: -1, p: 0 };
      let prac = null, tutRes = 'seen'; const TUT = () => window.FemcTutorial; // the practice take: its own free clock, no song
      const songT = () => {
        if (prac) return prac.t;
        if (!started || !audio) return pre;
        const a = audio.currentTime, p = performance.now();
        if (a !== sync.a) sync = { a, p };
        return audio.paused ? a : sync.a + (p - sync.p) / 1000;
      };
      const now = () => songT() - O.offset / 1000;

      // Haechan's talkback faces (FEMC-ART-TODO 45E, art hc-<face>): a square picture beside his line; none while Solar talks back
      const TB = { neutral: 'talking', happy: 'happy', serious: 'wince' };
      const say = (k, face = 'neutral', tb) => { if (!k) return;
        const tbi = $('.sg-tb'); if (tbi) { const n = tb || TB[face] || 'talking'; if (talker !== 'haechan' || tbi.dataset.bad) tbi.hidden = true; else { tbi.hidden = false; tbi.onerror = () => { tbi.hidden = true; tbi.dataset.bad = 1; }; tbi.src = ART('hc-' + n); } } $('.sg-talk span').textContent = typeof k === 'string' ? k : pick(k); const im = $('.sg-hc-face'); if (im && !im.src.endsWith(face + '.webp')) im.src = FACE(talker, face); el.classList.remove('talk'); void el.offsetWidth; el.classList.add('talk'); };
      let poseT = 0;
      const pose = (p, ms = 380) => { solar.dataset.pose = p; solar.classList.remove('hitpose'); void solar.offsetWidth; solar.classList.add('hitpose'); clearTimeout(poseT); if (ms) poseT = setTimeout(() => { if (!notes.some(n => n.held)) solar.dataset.pose = 'idle'; }, ms); };
      const popRating = (r, combo) => {
        const box = $('.sg-pop'), d = document.createElement('div'); d.className = 'sg-rate ' + r;
        d.innerHTML = `<img src="${ART('rating-' + r)}" alt="" onerror="this.remove()"><b>${{ perfect: 'PERFECT!!', good: 'GOOD', ok: 'OK', miss: 'MISS' }[r]}</b>` + (combo >= 10 ? `<span class="sg-num">${String(combo).padStart(3, '0').split('').map((c, i) => `<i style="--i:${i}">${c}</i>`).join('')}</span>` : '');
        box.appendChild(d); setTimeout(() => d.remove(), 700); while (box.children.length > 4) box.firstChild.remove();
      };
      const splash = lane => { const s = cols[lane].querySelector('.sg-splash'); s.classList.remove('on'); void s.offsetWidth; s.classList.add('on'); };
      const health = d => { st.hp = Math.max(0, Math.min(100, st.hp + d)); $('.sg-health').style.setProperty('--hp', st.hp); el.classList.toggle('low', st.hp < 25); if (st.hp <= 0 && !prac) fail(); };
      const stats = () => { const tot = st.perfect + st.good + st.ok + st.miss, acc = tot ? (st.perfect + st.good * 0.75 + st.ok * 0.4) / tot * 100 : 100; $('.sg-stats').textContent = `Score ${Math.round(st.score).toLocaleString()} · Misses ${st.miss} · ${acc.toFixed(2)}%`; return acc; };

      /* hitting */
      const snap16 = t => { if (C.snap === false) return Math.max(0, +t.toFixed(3)); const g = BEAT / 4; return Math.max(0, +(C.offset + Math.round((t - C.offset) / g) * g).toFixed(3)); };
      const recDown = [null, null, null, null];
      const press = lane => {
        if (st.over || st.paused) return;
        st.held[lane] = true; cols[lane].classList.add('press');
        if (REC) { // her tap becomes a note; it lights the target and floats away so she sees it
          if (!started) return;
          const t = snap16(now());
          for (const x of notes) if (!x.done && x.lane === lane && Math.abs(x.t - t) < BEAT / 8) { if (x.pass === pass) return; drop(x); } // an old note there: replaced
          const n = { t, lane, len: 0, hit: null, held: false, done: false, pass }; notes.push(n); mkEl(n); recDown[lane] = n;
          cols[lane].classList.remove('hit'); void cols[lane].offsetWidth; cols[lane].classList.add('hit'); splash(lane); pose(DIRS[lane], 0);
          recCount(); return;
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
        if (st.combo && st.combo % 50 === 0) say(T().streak, 'happy', 'impressed');
        stats();
      };
      const release = lane => {
        st.held[lane] = false; cols[lane].classList.remove('press');
        if (REC) { const n = recDown[lane]; recDown[lane] = null; if (n) { const len = now() - n.t; if (len > BEAT * 0.6) { n.len = +(Math.round(len / (BEAT / 4)) * BEAT / 4).toFixed(3); mkEl(n); } } pose('idle', 200); return; }
        const h = notes.find(n => n.lane === lane && n.held);
        if (h) { h.held = false; h.done = true; h.el.remove(); if (now() < h.t + h.len - 0.12) health(-1.5); pose('idle', 1); }
      };
      const miss = n => {
        n.hit = 'miss'; st.miss++; if (st.combo >= 20) say(T().slip, 'serious'); st.combo = 0; health(-4); crack(); popRating('miss', 0);
        n.el.classList.add('missed'); pose('miss', 450); stats();
      };

      /* drawing: notes are placed by translateY in the strum, the target line 70 px from the top (or the bottom) */
      const place = t => {
        const strum = $('.sg-strum'), h = strum.clientHeight, px = O.speed * 0.45 * h, tgt = O.down ? h - 70 : 70;
        for (const n of notes) {
          if (n.done) continue;
          if (n.held) { // the head sits on the target, the trail shortens into it
            const left = n.t + n.len - t;
            if (left <= 0) { n.held = false; n.done = true; n.ok = true; n.el.remove(); st.score += 150; health(1); pose('idle', 1); continue; }
            n.el.style.transform = `translateY(${tgt}px)`; n.el.style.setProperty('--trail', left * px + 'px'); continue;
          }
          if (REC) { const dy = (n.t - t) * px, y = O.down ? tgt - dy : tgt + dy, tail = n.len * px, vis = O.down ? (y > -60 && y - tail < h + 60) : (y < h + 60 && y + tail > -60); n.el.style.display = vis ? 'block' : 'none'; if (vis) { n.el.style.transform = `translateY(${y}px)`; if (n.len) n.el.style.setProperty('--trail', tail + 'px'); } continue; }
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
        if (!st.paused && !st.over && prac) { prac.t += dt; const t = prac.t - O.offset / 1000; place(t); prac.tick?.(t); }
        else if (!st.paused && !st.over) {
          if (!started) { pre += dt; if (pre >= from) { started = true; sync = { a: -1, p: 0 }; if (audio) { ac && ac.resume(); audio.currentTime = from; audio.play().catch(() => { audio = null; }); } else pre = from; } }
          else if (!audio) pre += dt;
          const ST = songT(), t = ST - O.offset / 1000;
          // count-in: "Ready? Set. Sing!" on the last three beats before the song
          if (ST < from) { const cb = Math.floor((ST - from + PRE) / BEAT) - 1; if (cb !== st.count && cb >= 0 && cb < 3) { st.count = cb; const c = COUNT[cb], d = $('.sg-count'); d.innerHTML = `<img src="${ART(c[0])}" alt="" onerror="this.remove()"><b>${c[1]}</b>`; d.className = 'sg-count on ' + c[0]; tone(c[2], 0.15, 0.07); } }
          else if (st.count !== 9) { st.count = 9; setTimeout(() => { if (st.count === 9) $('.sg-count').className = 'sg-count'; }, 400); }
          // beat and bar bops
          const b = Math.floor((ST - C.offset) / BEAT);
          if (b !== st.beat) { st.beat = b; el.classList.remove('bop'); void el.offsetWidth; el.classList.add('bop'); el.classList.toggle('odd', b % 2 !== 0); if (((b % 4) + 4) % 4 === 0) { el.classList.remove('barbop'); void el.offsetWidth; el.classList.add('barbop'); } }
          if (REC && started && t > wipeFrom) { for (const n of notes) if (!n.done && n.pass !== pass && n.t >= wipeFrom && n.t < t) drop(n); for (const x of sing) if (x.t > 0 && x.pass !== pass && x.t >= wipeFrom && x.t < t) x.dead = true; wipeFrom = t; recCount(); }
          cast(whoAt(t));
          place(t);
          const si = (C.sections || []).reduce((a, s, i) => (t >= s.t ? i : a), -1);
          if (si !== st.sec && si >= 0) { st.sec = si; const nm = C.sections[si].name; if (si > 0) say(T()[{ verse: 'verse', breath: 'breath', chorus: 'chorus', bridge: 'bridge', 'last chorus': 'last', outro: 'outro' }[nm] || 'verse']); }
          const left = Math.max(0, C.duration - Math.max(0, t));
          $('.sg-time i').style.width = `${Math.min(100, Math.max(0, t) / C.duration * 100)}%`;
          $('.sg-time span').textContent = `${Math.floor(left / 60)}:${String(Math.floor(left % 60)).padStart(2, '0')}`;
          if (t >= C.duration - 0.3 || (audio && audio.ended)) finish();
        }
        raf = requestAnimationFrame(loop);
      };

      const fade = () => { if (!audio) return; const a = audio; let v = 0.9; const f = setInterval(() => { v -= 0.1; if (gain) gain.gain.value = Math.max(0, v); else a.volume = Math.max(0, v); if (v <= 0) { clearInterval(f); a.pause(); } }, 50); };
      const fail = () => {
        if (st.over) return; st.over = true; fade(); say(T().fail, 'serious'); pose('miss', 0); el.classList.add('failed');
        const end = $('.mg-end'); end.hidden = false;
        end.innerHTML = `<b class="sg-fail">Take stopped</b><p class="mg-end-say">Haechan: ${esc(T().fail)}</p><div class="sg-end-btns"><button type="button" data-r>Retry</button><button type="button" data-q>Quit</button></div>`;
        end.querySelector('[data-r]').focus();
        end.querySelector('[data-r]').onclick = restart;
        end.querySelector('[data-q]').onclick = () => out({ failed: true });
      };
      const out = extra => { const total = notes.length, acc = stats(); const res = { song: C.id, level, score: Math.round(st.score), accuracy: Math.round(acc), perfect: st.perfect, good: st.good, ok: st.ok, miss: st.miss, maxCombo: st.maxCombo, fc: st.miss === 0 && st.perfect + st.good + st.ok === total, grade: 'C', failed: false, quit: false, ...extra, tutorial: tutRes }; cleanup(); o.onDone?.(res); done(res); };
      const finish = (quit = false) => {
        if (REC) return recEnd();
        if (st.over) return; st.over = true; fade();
        const acc = stats(), fc = st.miss === 0;
        const grade = quit ? 'C' : acc >= 95 && st.miss <= 2 ? 'S' : acc >= 85 ? 'A' : acc >= 70 ? 'B' : 'C';
        say(T().end[grade], grade === 'S' || grade === 'A' ? 'happy' : 'neutral', grade === 'S' ? 'soft' : grade === 'A' ? 'happy' : grade === 'C' ? 'wince' : 'neutral'); pose(grade === 'C' ? 'miss' : 'up', 0);
        const end = $('.mg-end'); end.hidden = false;
        end.innerHTML = `<b class="mg-grade">${grade}</b>${fc && !quit ? '<b class="sg-fc">FULL COMBO</b>' : ''}<dl><dt>Score</dt><dd>${Math.round(st.score).toLocaleString()}</dd><dt>Accuracy</dt><dd>${acc.toFixed(2)}%</dd><dt>Perfect</dt><dd>${st.perfect}</dd><dt>Good</dt><dd>${st.good}</dd><dt>OK</dt><dd>${st.ok}</dd><dt>Missed</dt><dd>${st.miss}</dd><dt>Best combo</dt><dd>${st.maxCombo}</dd></dl><p class="mg-end-say">Haechan: ${esc(T().end[grade])}</p><div class="sg-end-btns"><button type="button" data-c>Continue</button><button type="button" data-r>Again</button></div>`;
        end.querySelector('[data-c]').focus();
        end.querySelector('[data-c]').onclick = () => out({ grade, quit, fc: fc && !quit });
        end.querySelector('[data-r]').onclick = restart;
      };
      const recEnd = () => {
        if (st.over) return; st.over = true; fade(); for (let l = 0; l < 4; l++) if (recDown[l]) release(l);
        const rec = notes.filter(n => !n.done).map(n => ({ t: n.t, lane: n.lane, len: n.len })).sort((a, b) => a.t - b.t);
        const thin = gap => { const out = []; let lastEnd = -9; for (const n of rec) if (n.t - lastEnd >= gap - 0.01) { out.push({ ...n }); lastEnd = n.t + (n.len || 0); } return out; };
        const singers = sing.filter(x => !x.dead).map(x => ({ t: x.t, who: x.who })).sort((a, b) => a.t - b.t);
        const js = JSON.stringify({ song: C.id, charts: { easy: thin(BEAT), normal: rec, hard: rec }, singers });
        const end = $('.mg-end'); end.hidden = false;
        end.innerHTML = `<b class="sg-fail" style="color:var(--pk2)">${rec.length} notes</b><p class="mg-end-say">That's your chart. Save it, then play it.</p><div class="sg-end-btns"><button type="button" data-s>Save as my chart</button><button type="button" data-p>Save and play it</button></div><div class="sg-end-btns"><button type="button" data-a>Record again</button><button type="button" data-x>Close without saving</button></div><button type="button" data-k>Copy for Claude</button>`;
        const saveIt = () => { try { localStorage.setItem(DRAFT_KEY(C.id), JSON.stringify({ v: 2, charts: JSON.parse(js).charts, singers, saved: new Date().toISOString() })); } catch (e) {} };
        end.querySelector('[data-s]').focus();
        end.querySelector('[data-s]').onclick = e => { saveIt(); e.target.textContent = 'Saved ✓'; };
        end.querySelector('[data-p]').onclick = () => { saveIt(); cleanup(); const r = { record: rec, saved: true, play: true }; o.onDone?.(r); done(r); };
        end.querySelector('[data-a]').onclick = () => restart();
        end.querySelector('[data-x]').onclick = () => { cleanup(); const r = { record: rec, saved: false }; o.onDone?.(r); done(r); };
        end.querySelector('[data-k]').onclick = e => { saveIt(); navigator.clipboard?.writeText(js); e.target.textContent = 'Copied ✓ (and saved)'; };
      };
      const restart = () => {
        recDown.fill(null); from = FROM; pass = 0; wipeFrom = FROM; for (let i = sing.length - 1; i >= 0; i--) { if (sing[i].pass >= 0) sing.splice(i, 1); else sing[i].dead = false; } mic = null;
        try { audio && audio.pause(); } catch (e) {}
        Object.assign(st, { score: 0, combo: 0, maxCombo: 0, perfect: 0, good: 0, ok: 0, miss: 0, hp: 50, paused: false, over: false, sec: -1, held: [false, false, false, false], beat: -99, count: -1 });
        started = false; pre = from - PRE; sync = { a: -1, p: 0 }; if (audio) { audio.currentTime = from; if (gain) gain.gain.value = 0.9; }
        $('.mg-end').hidden = true; $('.mg-pause').hidden = true; el.classList.remove('failed', 'low'); el.classList.toggle('down', O.down);
        build(); health(0); stats(); pose('idle', 1); say(REC ? T().rec : T().intro); recMode();
        cancelAnimationFrame(raf); last = 0; raf = requestAnimationFrame(loop);
      };

      /* input */
      const laneOf = k => KEYS.findIndex(ks => ks.includes(k.toLowerCase()));
      const key = e => {
        if (!el.isConnected || (st.over && !st.paused)) return;
        e.stopPropagation();
        const TT = TUT(); if (TT && TT.open() && (e.key === 'Escape' || e.key === 'Enter' || TT.blocking())) return; // the tutorial has the keys
        if (e.key === 'Escape' || e.key === 'Enter') { e.preventDefault(); setPause(!st.paused); return; }
        if (st.paused) return;
        if (REC && started && ['1', '2', '3'].includes(e.key)) { const who = { 1: 'solar', 2: 'haechan', 3: 'both' }[e.key], t = now(); for (const x of sing) if (x.pass === pass && Math.abs(x.t - t) < 0.3) x.dead = true; sing.push({ t: +Math.max(0, t).toFixed(3), who, pass }); sing.sort((a, b) => a.t - b.t); say(`${NAME[who] || 'Both'} from here.`); return; }
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
      cols.forEach((c, i) => { c.addEventListener('pointerdown', e => { e.preventDefault(); if (TUT()?.blocking()) return; press(i); }); c.addEventListener('pointerup', () => release(i)); c.addEventListener('pointerleave', () => st.held[i] && release(i)); });
      const seekTo = x => { // record mode: go back (or stay), count in, and the next take replaces what it plays over
        for (let l = 0; l < 4; l++) if (recDown[l]) release(l);
        try { audio && audio.pause(); } catch (e) {}
        from = Math.max(0, Math.min(C.duration - 1, x)); pass++; wipeFrom = from; started = false; pre = from - PRE; st.count = -1; st.paused = false; $('.mg-pause').hidden = true;
        notes.forEach(n => { if (!n.done) mkEl(n); }); recCount(); say(from ? 'From there. On my count.' : 'From the top. On my count.');
      };
      $('.mg-pause').onclick = e => { const b = e.target.dataset.mg; const at = songT();
        if (REC && b === 'resume') return seekTo(at); if (b === 'back5') return seekTo(at - 5); if (b === 'back10') return seekTo(at - 10); if (b === 'back0') return seekTo(0); if (b === 'save') { st.paused = false; $('.mg-pause').hidden = true; return finish(true); }
        if (b === 'howto') return howTo();
        if (b === 'resume') setPause(false); if (b === 'restart') restart(); if (b === 'quit') { st.paused = false; $('.mg-pause').hidden = true; finish(true); } };
      const cleanup = () => { cancelAnimationFrame(raf); window.removeEventListener('keydown', key, true); window.removeEventListener('keyup', keyUp, true); try { audio && audio.pause(); ac && ac.close(); } catch (e) {} el.remove(); };
      window.addEventListener('keydown', key, true); window.addEventListener('keyup', keyUp, true);
      const recCount = () => { if (REC) $('.sg-stats').textContent = `Recording · ${notes.filter(n => !n.done).length} notes · Esc to go back or save`; };
      const recMode = () => { if (!REC) return; el.classList.add('rec'); recCount(); $('.sg-health').style.display = 'none'; };
      cast(whoAt(FROM)); health(0); stats(); say(REC ? T().rec : T().intro); recMode();
      /* the tutorial: a practice take on its own clock (no song); live = practice notes come and must be played (the first
         time), else a walkthrough over the paused song (How to play) */
      const tutP = o.tutorial === true || (o.tutorial !== false && !REC && !FROM) ? tutLib() : Promise.resolve(null);
      const LANE_KEY = ['D (←)', 'F (↓)', 'J (↑)', 'K (→)'];
      const spawn = list => list.forEach(x => { const n = { t: prac.t + x.t, lane: x.lane, len: x.len || 0, hit: null, held: false, done: false, pass: -1 }; notes.push(n); mkEl(n); });
      const practice = (list, isOk) => () => new Promise(ok => { // spawn the notes; a missed one comes round again
        spawn(list); const want = notes.slice(-list.length);
        prac.tick = () => {
          want.forEach((n, k) => { if (n.done && !isOk(n) || n.hit === 'miss') { if (!n.done) { n.done = true; n.el.remove(); } const again = { ...list[k], t: 1.6 }; spawn([again]); want[k] = notes[notes.length - 1]; } });
          if (want.every(isOk)) { prac.tick = null; ok(); }
        };
      });
      const FACE_T = f => FACE(talker, f);
      const steps = live => [
        { target: '.sg-strum', say: `Quick run first, no song. Arrows ${O.down ? 'fall onto' : 'rise to'} these targets: <b>D F J K</b>, or the arrow keys.`, face: FACE_T('neutral') },
        { target: '.sg-strum', say: 'Four slow ones. Hit each key as its arrow covers the target.', wait: live ? practice([0, 1, 2, 3].map(l => ({ lane: l, t: 2 + l * 1.3 })), n => n.hit && n.hit !== 'miss') : 'click', face: FACE_T('happy'), pos: 'right' },
        { target: '.sg-strum', say: `This one has a tail. Press <b>${LANE_KEY[2]}</b> and hold it until the tail's gone.`, wait: live ? practice([{ lane: 2, t: 2.2, len: 1.6 }], n => !!n.ok) : 'click', face: FACE_T('neutral'), pos: 'right' },
        { target: '.sg-health', say: 'Hits fill this bar, misses drain it. Run it dry and the take stops. Extra taps are free.', face: FACE_T('serious') },
        { target: null, say: 'Esc pauses. Scroll speed, downscroll and timing offset are in there. Okay. On my count.', face: FACE_T('happy') },
      ];
      const tutOpts = () => { const GS = (window.FemcGame && window.FemcGame.settings && window.FemcGame.settings()) || {}; return { who: NAME[talker], calm: o.calm ?? !!GS.calm, perf: o.perf ?? !!GS.perf }; };
      const howTo = () => {
        const TT = TUT(); if (!TT) return;
        $('.mg-pause').hidden = true;
        TT.run(el, { ...tutOpts(), id: 'sing', replay: true, steps: steps(false) }).then(() => { if (el.isConnected && st.paused) { $('.mg-pause').hidden = false; $('.mg-pause [data-mg=resume]').focus(); } });
      };
      o.hook?.({ st, notes: () => notes, now, press, release, el, prac: () => prac });
      // the title card (FEMC-ART-TODO 45J, art title): held 1.8 s (click to skip), then the count-in starts; none without the art
      let going = false; const go = () => {
        if (going) return; going = true;
        tutP.then(TT => {
          if (!el.isConnected) return;
          if (!TT || !TT.should('sing', o.tutorial)) { raf = requestAnimationFrame(loop); return; }
          notes.forEach(drop); notes = []; prac = { t: 0, tick: null }; raf = requestAnimationFrame(loop);
          TT.run(el, { ...tutOpts(), id: 'sing', steps: steps(true) }).then(r => { // then the real take from a clean slate
            tutRes = r; prac = null; for (let l = 0; l < 4; l++) if (st.held[l]) release(l);
            Object.assign(st, { score: 0, combo: 0, maxCombo: 0, perfect: 0, good: 0, ok: 0, miss: 0, hp: 50, sec: -1, held: [false, false, false, false], beat: -99, count: -1 });
            started = false; pre = from - PRE; sync = { a: -1, p: 0 }; el.classList.remove('low');
            build(); health(0); stats(); pose('idle', 1); say(T().intro);
          });
        });
      };
      const tt = $('.sg-title');
      if (!tt) go();
      else {
        const out = () => { tt.classList.add('out'); go(); setTimeout(() => tt.remove(), 450); };
        tt.querySelector('img').onerror = () => { tt.remove(); go(); };
        tt.onclick = out; setTimeout(out, reduced.matches ? 1200 : 1800);
      }
    });
  }
  return { play, draft, opts };
})();
