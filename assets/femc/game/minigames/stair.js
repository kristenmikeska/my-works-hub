/* FEMC epilogue minigame: the seventh stair (Nov 11 2026). A DEMO: not in the story (try it at mockups/minigames/index.html once
   the main session adds its card). The strangers epilogue's horror game, a listening / stealth game, made to feel unlike Hold On
   (no gripping, no anchors): Solar goes down the dark stairs of the Lee house at night to the kitchen for a glass of water and
   back up to bed, moving only while the house is loud enough to cover her steps. Its vocabulary is the strange nights of
   glitches.js (the seventh stair, the clocks, the old radio's tune, the koi bucket, the gate); nothing of the plot is told.
   Dread, not jumpscares; no gore, no violence; two sharp moments.

   FemcStair.play({ host, mute, difficulty, seconds, bg, kitchenBg, calm, perf, onDone }) -> Promise<result>
     host        element to draw into (default document.body; a full-screen overlay is added inside it)
     mute        no audio at all (every sound has a caption chip, a light in the house map and the House meter; nothing is
                 sound-only: the 'late' tell is only dealt when there is sound)
     difficulty  'easy' | 'normal' | 'hard' (night 240 / 200 / 170 s, Listening per uncovered noise 80 / 105 / 125, wrong sounds
                 from stage 2 / 1 / 1, tells per wrong sound 2 / 1 / 1 (hard: subtler), the step counter lies on normal / hard;
                 default 'normal')
     seconds     override the length of the night (the clock runs 2:07 → 4:30 a.m. over it)
     bg          the stairs background id under assets/femc/bg/ (default epi-s-stairs-night)
     kitchenBg   the kitchen background (default epi-s-lee-kitchen, the night one). A drawn dark shows if either is missing
     calm, perf  Reduce flashes / Performance; default: the game's settings (FemcGame.settings().calm / .perf), else off
     onDone      called with the result too
   result = { won, grade: 'S' | 'A' | 'B' | 'C', quit, dawn, heard, lured, wrong, creaks, answered, steps, stairs, secs }
     heard = the highest Listening reached (0-100); lured = wrong sounds she moved under, of `wrong` dealt; creaks = the
     creaking stair stepped on uncovered; answered = steps taken while something else was walking; stairs = 13, or 14 if the
     stairs counted wrong on the way up; dawn = the night ran out (lost); secs = how long it took

   How it plays: a cross-section of the house (her room and the landing upstairs, thirteen stairs, the hall with its clock and
   light, the kitchen with the radio, the koi bucket and its radiator, the gate outside) beside the dark stairwell.
     Step        Space / Enter / ↓ / ↑ / S / W, or the Step button: one careful step (0.42 s). Held keys don't repeat.
     Long step   Shift + Step, L, or the Long step button, on the stairs: over the next stair (0.75 s, a little louder).
     The house   sounds come and go (the radiator knocking, the koi bucket, the old radio drifting into "Molihua", Mr. Oh's
                 engine idling at the gate, wind at the stair window), with silence between. The House meter shows how much
                 they cover where she is (nearer is louder); the notch is how loud her next step will be. Under the notch =
                 freeze. A step louder than the cover fills Listening; still and quiet, it drains. Full = she's heard (lost).
     The stair   the seventh stair creaks (only Mr. Oh's engine covers it): wait for the engine, or long-step over it. The
                 drawing marks it with a worn tread.
     Wrong sounds  from the second stage some sounds aren't the house. They fill the meter but cover nothing, and moving under
                 one fills Listening and stops it dead. Tells: its place in the house stays dark (dark), it comes from upstairs
                 (up: "Nothing real comes from upstairs"), its caption is wrong (text), the meter goes bone instead of pink
                 (colour), it plays twice, a beat late and detuned (late, sound only). The first one is always the radio with
                 every tell.
     Answering   later, a step answers hers from the landing and keeps walking after she stops. Stepping while it walks fills
                 Listening (and it comes one step closer). Freeze until it stops.
     The count   the counter counts the stairs in the direction she walks. On the way up there are fourteen (a pale new tread
                 under the seventh): the HUD still thinks "the seventh from the bottom" creaks, so its notch is wrong there;
                 the worn tread in the drawing is the truth. On normal / hard the counter also misreads for a moment now and
                 then. Trust the picture.
   Grade: S home, Listening never past 40, no wrong sound followed, no uncovered creak; A home, under 70, ≤1 and ≤1; B home;
   C heard, dawn or quit.

   The night goes wrong slowly (stages by how far she's got and how long it's taken): her own step's echo from the landing
   starts in time, then lags, comes twice, then doesn't come; the hall light goes off near the bottom with a click from
   upstairs and is on again when she comes back, with no click; the hall clock is an hour ahead; the radio's tune picks up
   where it left off however long it's been silent; a caption types itself and takes it back. Sharp moments (one each a run):
   the click and the dark at the bottom of the stairs, and on the way back up, for a moment, someone sitting on the seventh
   stair, and the creak of their weight.
   The interface lies: Freeze reads Go, Listening reads Awake, the counter is a stair off, the clock jumps an hour, the title
   reads THE EIGHTH STAIR. Controls never lie: Esc, the keys, the buttons and the pause menu always work; the meter's fill is
   always what the sound claims.
   Sound (Web Audio, made here, no files): a room tone that sinks and detunes, a thin high ring as Listening rises, socks on
   wood with a creak pitched per stair, the echo from the landing, the radiator's knocks, water in the koi bucket, an engine
   idling, wind, the hall clock's tick, and "Molihua" (Jasmine Flower, public-domain folk tune) on a music box through a radio,
   a little more out of tune each time.
   End: home = the house settles, warm; heard = the landing light comes on, and nobody is at the switch.
   Title card: art title.webp if present, held 1.8 s (click / a key skips), content note under it.
   Test hooks: FemcStair.state() (the live state; state().peek() = { cover, shown, next, notch, long }).
   Optional art (assets/femc/game/art/minigames/stair/): title.webp (the title card), sit.webp (the sharp moment's figure; a
   drawn silhouette otherwise). Nothing else is needed.
   Settings: reduced motion = no shake, no bobbing, no typed captions moving, crossfades only; Reduce flashes (calm) = no hard
   cut to dark, the sit moment fades in and out slowly, no sting; Performance = no grain or flicker layers. Pink, near-black and
   bone only; the scene dark and drained of colour. */
window.FemcStair = (() => {
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const base = () => (window.FemcGame && window.FemcGame.base) || (document.querySelector('script[src*="minigames/stair"]')?.src.split('assets/')[0]) || '';
  const reduced = typeof matchMedia === 'function' ? matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const rnd = ([a, b]) => a + Math.random() * (b - a);
  const shuffle = a => [...a].sort(() => Math.random() - 0.5);
  const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
  const ART = id => `${base()}assets/femc/game/art/minigames/stair/${id}.webp`;
  const BG = id => `${base()}assets/femc/bg/${id}.webp`;
  const DIFF = {
    easy:   { secs: 240, k: 80,  decay: 7, lure: 28, answer: 30, tells: 2, subtle: false, wrongFrom: 2, wrong: [0, 0, 0.22, 0.3],    gap: [1200, 2800], answerFrom: 3, answerN: [2, 3], lieCount: false, engine: 1.4 },
    normal: { secs: 200, k: 105, decay: 5, lure: 38, answer: 40, tells: 1, subtle: false, wrongFrom: 1, wrong: [0, 0.12, 0.28, 0.4], gap: [1500, 3400], answerFrom: 2, answerN: [2, 4], lieCount: true,  engine: 1 },
    hard:   { secs: 170, k: 125, decay: 4, lure: 48, answer: 50, tells: 1, subtle: true,  wrongFrom: 1, wrong: [0, 0.2, 0.36, 0.5],  gap: [1800, 4000], answerFrom: 2, answerN: [3, 5], lieCount: true,  engine: 0.8 },
  };
  // the house's sounds. loc = where it is (sets the direction glyph, the map light and how loud it is from where she stands);
  // cover = how loud a step it hides at full volume nearby; bad = the subtle text tell (hard), off = the plain one
  const SRC = {
    radiator: { loc: 'kitchen', cap: 'The radiator knocks', bad: 'The radaitor knocks', off: 'The radiator knocks (it’s off)', cover: 0.55, dur: [1600, 2600], w: 2, from: 0, lie: 'The radiator was cold.' },
    koi:      { loc: 'kitchen', cap: 'The koi bucket sloshes', bad: 'The koi bukcet sloshes', off: 'The koi bucket sloshes (it’s empty)', cover: 0.36, dur: [1000, 1700], w: 1.5, from: 0, lie: 'The fish weren’t moving.' },
    radio:    { loc: 'kitchen', cap: 'The old radio drifts into a tune', bad: 'The old raido drifts into a tune', off: 'The old radio plays (it’s unplugged)', cover: 0.66, dur: [3800, 5600], w: 1.1, from: 1, lie: 'The radio’s dial was dark. Nobody was playing it.' },
    engine:   { loc: 'gate', cap: 'Mr. Oh’s engine at the gate', bad: 'Mr. Oh’s engnie at the gate', off: 'An engine at the gate (no car)', cover: 0.95, dur: [4000, 6500], w: 1, from: 0, lie: 'There was no car at the gate.' },
    wind:     { loc: 'window', cap: 'Wind at the stair window', bad: 'Wind at the stair widnow', off: 'Wind at the stair window (it’s shut tight)', cover: 0.45, dur: [2000, 3400], w: 1.5, from: 0, lie: 'The window was still.' },
  };
  const DIR = { kitchen: '▼', gate: '▶', window: '◀', up: '▲' };
  const PLACE = { kitchen: 'kitchen', gate: 'the gate', window: 'stair window', up: 'upstairs' };
  // how much of a sound reaches her, by where it is and where she stands
  const NEAR = { kitchen: { up: 0.6, mid: 0.8, down: 1 }, gate: { up: 0.75, mid: 0.9, down: 1 }, window: { up: 1, mid: 0.85, down: 0.6 } };
  const NOISE = { bed: 0.16, landing: 0.2, tread: 0.24, creak: 0.84, hall: 0.26, kdoor: 0.3, fill: 0.58, long: 0.42 };
  const CREAK = 7; // the creaking tread, counted from the top
  // "Molihua" (Jasmine Flower), the folk tune: [semitones above C5, beats]
  const MOLIHUA = [[4, 1], [4, .5], [7, .5], [9, .5], [12, .5], [12, .5], [9, .5], [7, 1], [7, .5], [9, .5], [7, 2],
    [4, 1], [4, .5], [7, .5], [9, .5], [12, .5], [12, .5], [9, .5], [7, 1], [7, .5], [9, .5], [7, 2],
    [7, 1], [7, 1], [7, 1], [4, .5], [7, .5], [9, 1], [9, 1], [7, 2], [4, 1], [2, .5], [4, .5], [7, 1], [4, .5], [2, .5], [0, 1], [0, .5], [2, .5], [0, 2]];
  const GHOST = ['Seven.', 'Eight.', 'Who counted that one?', 'Go back to bed.', 'It’s only the house.', 'Don’t count out loud.', 'Nobody’s up.', 'You missed one.'];
  const START = 127, SPAN = 143; // 2:07 a.m. → 4:30 a.m.

  /* the house map (viewBox 0 0 330 400) */
  const STX = 120, STY = 80, STW = 140, STH = 240; // the flight: from the landing's edge down to the hall floor
  const treadAt = (i, n) => ({ x: STX + (i - 0.5) * STW / n, y: STY + i * STH / n });
  const SPOT = { bed: { x: 36, y: 80 }, landing: { x: 86, y: 80 }, hall: { x: 272, y: 320 }, kdoor: { x: 168, y: 320 }, sink: { x: 46, y: 320 } };
  const P = '#ff9ac8', PK = '#ff4f9e', B = '#e8ddd0', N = '#14070f', W = '#3a1a26';
  const stairsSvg = (n, odd) => {
    let d = `M${STX} ${STY}`, worn = '', pale = '';
    for (let i = 1; i <= n; i++) {
      const x0 = STX + (i - 1) * STW / n, x1 = STX + i * STW / n, y = STY + i * STH / n;
      d += `V${y.toFixed(1)}H${x1.toFixed(1)}`;
      if (i === CREAK) worn = `<path class="st-worn" d="M${(x0 + 2).toFixed(1)} ${(y - 1.5).toFixed(1)}H${(x1 - 2).toFixed(1)}" stroke="${B}" stroke-width="2.4" stroke-linecap="round"/>`;
      if (odd && i === odd) pale = `<path class="st-odd" d="M${x0.toFixed(1)} ${(y - STH / n).toFixed(1)}V${y.toFixed(1)}H${x1.toFixed(1)}" stroke="${B}" stroke-width="1.6" stroke-dasharray="2 2" fill="none"/>`;
    }
    return `<path d="${d}V${STY + STH}H${STX}Z" fill="#1a0b12" opacity=".7"/><path d="${d}" stroke="${P}" stroke-width="1.8" fill="none" opacity=".75"/>${worn}${pale}`;
  };
  const MAP = `
    <rect x="6" y="20" width="318" height="372" fill="${N}" opacity=".55" rx="3"/>
    <path d="M10 80H120M200 80H322M10 320H322M10 200H110" stroke="${W}" stroke-width="3"/>
    <path d="M10 20V392M322 20V392" stroke="${W}" stroke-width="2"/>
    <g class="st-door" data-at="bed"><rect x="22" y="38" width="26" height="42" fill="#2a1018" stroke="${P}" stroke-width="1.2" opacity=".8"/><circle cx="43" cy="60" r="1.6" fill="${P}"/></g>
    <g class="st-src st-up"><rect x="262" y="38" width="26" height="42" fill="#2a1018" stroke="#5a2a3c" stroke-width="1.2"/><rect class="st-glow" x="264" y="40" width="22" height="40" fill="${B}"/></g>
    <g class="st-src" data-src="window"><rect x="72" y="30" width="22" height="30" fill="#12060c" stroke="#5a2a3c" stroke-width="2"/><path d="M83 30v30M72 45h22" stroke="#5a2a3c" stroke-width="1.5"/><rect class="st-glow" x="74" y="32" width="18" height="26" fill="${P}"/></g>
    <g class="st-stairs"></g>
    <g class="st-hall"><path d="M290 200v12" stroke="${W}" stroke-width="1.5"/><circle class="st-bulb" cx="290" cy="216" r="5" fill="#ffd8a8"/><circle class="st-bulbglow" cx="290" cy="240" r="46" fill="url(#st-warm)"/></g>
    <g class="st-hclock"><circle cx="300" cy="262" r="11" fill="#1a0b12" stroke="${B}" stroke-width="1.4"/><path class="hh" d="M300 262v-6" stroke="${B}" stroke-width="2" stroke-linecap="round"/><path class="mh" d="M300 262v-9" stroke="${B}" stroke-width="1.2" stroke-linecap="round"/></g>
    <g class="st-src" data-src="gate"><path d="M316 280v40M326 280v40M316 290h10M316 306h10" stroke="#5a2a3c" stroke-width="2"/><circle class="st-glow" cx="321" cy="298" r="9" fill="${P}"/></g>
    <g class="st-src" data-src="radio"><rect x="58" y="262" width="34" height="20" rx="3" fill="#2a1018" stroke="#7a4a5c" stroke-width="1.2"/><circle cx="68" cy="272" r="5" fill="none" stroke="#7a4a5c"/><rect class="st-glow" x="77" y="267" width="11" height="4" fill="${P}"/><path d="M60 262l8-10" stroke="#7a4a5c"/></g>
    <g class="st-src" data-src="koi"><path d="M100 300h22l-3 20h-16z" fill="#2a1018" stroke="#7a4a5c" stroke-width="1.2"/><ellipse class="st-glow" cx="111" cy="304" rx="9" ry="2.5" fill="${P}"/></g>
    <g class="st-src" data-src="radiator"><rect x="128" y="290" width="22" height="24" fill="#2a1018" stroke="#7a4a5c" stroke-width="1.2"/><path d="M133 292v20M138 292v20M143 292v20" stroke="#7a4a5c"/><rect class="st-glow" x="128" y="290" width="22" height="24" fill="${P}"/></g>
    <g class="st-stove"><rect x="14" y="290" width="20" height="30" fill="#2a1018" stroke="#5a2a3c"/><circle cx="24" cy="248" r="18" fill="url(#st-warm)" opacity=".5"/></g>
    <g class="st-glass" data-at="sink"><path d="M40 296h12l-1.5 16h-9z" fill="none" stroke="${B}" stroke-width="1.2"/><rect class="st-water" x="42" y="304" width="8" height="7" fill="${P}" opacity="0"/></g>
    <circle class="st-echo" cx="86" cy="76" r="6" fill="none" stroke="${P}" stroke-width="1.5" opacity="0"/>
    <circle class="st-pip" cx="100" cy="76" r="4" fill="${B}" opacity="0"/>
    <g class="st-sitter" opacity="0"><path d="M0 -26c-6 0-9 4-9 9 0 4 2 7 3 9-6 2-9 7-9 14h30c0-7-3-12-9-14 1-2 3-5 3-9 0-5-3-9-9-9z" fill="${B}" opacity=".85"/></g>
    <g class="st-me"><circle r="9" fill="${PK}" opacity=".22"/><circle r="4.5" fill="${PK}"/><circle r="4.5" fill="none" stroke="#fff" stroke-width="1" opacity=".7"/></g>
    <text class="st-lbl" x="35" y="96">her room</text><text class="st-lbl" x="232" y="336">hall</text><text class="st-lbl" x="70" y="336">kitchen</text><text class="st-lbl" x="296" y="276">gate</text>
    <defs><radialGradient id="st-warm"><stop offset="0" stop-color="#ffcf9a" stop-opacity=".55"/><stop offset="1" stop-color="#ffcf9a" stop-opacity="0"/></radialGradient></defs>`;
  // the sharp moment's figure in the stairwell (a seated shape, from below; drawn until sit.webp)
  const SIT = `<svg viewBox="0 0 200 240" aria-hidden="true"><path d="M100 30c-20 0-31 15-31 33 0 13 5 23 8 30-22 8-36 26-38 52l-2 30h126l-2-30c-2-26-16-44-38-52 3-7 8-17 8-30 0-18-11-33-31-33z M30 175h140l14 50H16z" fill="#050103"/><path d="M100 30c-20 0-31 15-31 33 0 13 5 23 8 30-22 8-36 26-38 52l-2 30h126l-2-30c-2-26-16-44-38-52 3-7 8-17 8-30 0-18-11-33-31-33z" fill="none" stroke="rgba(232,221,208,.35)" stroke-width="2"/></svg>`;

  let cur = null; // test hook: FemcStair.state()
  function play(o = {}) {
    return new Promise(done => {
      const host = o.host || document.body;
      const D = DIFF[o.difficulty] || DIFF.normal, LEN = (o.seconds || D.secs) * 1000;
      const GS = (window.FemcGame && window.FemcGame.settings && window.FemcGame.settings()) || {};
      const still = reduced.matches, calm = o.calm ?? !!GS.calm, perf = o.perf ?? !!GS.perf;
      const route = (n, odd) => {
        const r = [{ id: 'bed', kind: 'bed' }, { id: 'landing', kind: 'landing' }];
        for (let i = 1; i <= n; i++) r.push({ id: 't' + i, kind: 'tread', i, creaky: i === CREAK, odd: i === odd });
        return r.concat([{ id: 'hall', kind: 'hall' }, { id: 'kdoor', kind: 'kdoor' }, { id: 'sink', kind: 'sink' }]);
      };
      const st = { t: 0, over: false, paused: false, begun: false, n: 13, odd: 0, route: route(13, 0), pos: 0, dir: 'down', lock: 0,
        listen: 0, heard: 0, lured: 0, wrong: 0, creaks: 0, answered: 0, steps: 0, stage: 0, glass: false,
        ev: null, evNext: 2200, lastSrc: '', taught: false, answer: null, answerCool: 0, answerTaught: false,
        light: 'on', lightOff: false, lightBack: false, sat: false, sit: null, clockSaid: false, mIdx: 0, mPlays: 0,
        lieAt: 12000, cntLie: null, clockLie: null, ghost: null, ghostAt: 0, ghosts: 0, dark: null, lastStep: -9999 };
      cur = st;
      const timers = new Set();
      const later = (fn, ms) => { const id = setTimeout(() => { timers.delete(id); fn(); }, ms); timers.add(id); return id; };
      const el = document.createElement('div');
      el.className = 'mg-st' + (still ? ' still' : '') + (calm ? ' calm' : '') + (perf ? ' perf' : '');
      el.setAttribute('role', 'application');
      el.setAttribute('aria-label', 'The seventh stair');
      el.innerHTML = `
        <div class="st-scene">
          <img class="st-bg st-bg-stairs" src="${BG(o.bg || 'epi-s-stairs-night')}" alt="" onerror="this.remove()">
          <img class="st-bg st-bg-kitchen" src="${BG(o.kitchenBg || 'epi-s-lee-kitchen')}" alt="" onerror="this.remove()">
          <div class="st-halllight"></div><div class="st-shade"></div>
          <div class="st-sit"><img src="${ART('sit')}" alt="" onerror="this.remove()">${SIT}</div>
          <div class="st-grain"></div><div class="st-vig"></div>
          <b class="st-num" aria-hidden="true"></b>
        </div>
        <div class="st-black"></div><div class="st-sting"></div>
        <svg class="st-map" viewBox="0 0 330 400" aria-hidden="true">${MAP}</svg>
        <div class="st-top"><b class="st-name" data-t="THE SEVENTH STAIR">THE SEVENTH STAIR</b><span class="st-phase" data-t="Freeze">Freeze</span><span class="st-clock">2:07 a.m.</span></div>
        <div class="st-meters">
          <div class="st-m st-housem"><small data-t="The house">The house</small><span><i></i><u title="your next step"></u></span></div>
          <div class="st-m st-listenm"><small data-t="Listening">Listening</small><span><i></i></span></div>
          <p class="st-where"><b class="st-count"></b><em class="st-next"></em></p>
        </div>
        <ul class="st-caps" aria-live="polite"></ul>
        <p class="st-ghost" aria-hidden="true"></p>
        <p class="st-say" aria-live="polite"></p>
        <div class="st-btns"><button type="button" class="st-step" tabindex="-1">Step</button><button type="button" class="st-long" tabindex="-1">Long step</button></div>
        <p class="st-help">Step (Space, ↓ / ↑ or the button) only while the house is louder than the notch. Freeze in the quiet. Shift + Step or L steps over a stair. Nothing real comes from upstairs. Esc pauses.</p>
        <div class="mg-pause" hidden><b>Paused</b><button type="button" data-mg="resume">Resume</button><button type="button" data-mg="quit">Quit</button></div>
        <div class="mg-end" hidden></div>`;
      host.appendChild(el);
      const $ = s => el.querySelector(s);
      const map = $('.st-map'), me = $('.st-me'), capsEl = $('.st-caps');
      const say = (txt, kind = '') => { const c = $('.st-say'); c.textContent = txt; c.className = 'st-say on ' + kind; clearTimeout(say.t); say.t = later(() => c.classList.remove('on'), 2600); };
      // a caption chip for a sound (every sound has one); returns it so an event can keep it up and remove it
      const chip = (dir, txt, kind = '', ms = 1600) => {
        const li = document.createElement('li'); li.className = 'st-cap ' + kind;
        li.innerHTML = `<b>${esc(dir)}</b><span>${esc(txt)}</span><i></i>`;
        capsEl.appendChild(li);
        const all = capsEl.querySelectorAll('.st-cap:not(.ev)'); if (all.length > 3) all[0].remove();
        if (ms) later(() => li.remove(), ms);
        return li;
      };

      /* sound: Web Audio, made here */
      let ac = null, A = null;
      const audio = () => {
        if (o.mute || ac) return;
        try { ac = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { ac = null; return; }
        const master = ac.createGain(); master.gain.value = 0.9; master.connect(ac.destination);
        const fx = ac.createGain(); fx.connect(master);
        // the stairwell: a short delay that feeds itself through a lowpass
        const hall = ac.createGain(); hall.gain.value = 0.35; const dl = ac.createDelay(1); dl.delayTime.value = 0.13;
        const fb = ac.createGain(); fb.gain.value = 0.32; const hlp = ac.createBiquadFilter(); hlp.type = 'lowpass'; hlp.frequency.value = 1600;
        hall.connect(dl); dl.connect(hlp); hlp.connect(fb); fb.connect(dl); hlp.connect(master);
        // room tone: a low hum and a drifting not-quite fifth, and the air of the house
        const lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 230; lp.Q.value = 2;
        const g = ac.createGain(); g.gain.value = 0.0001; lp.connect(g); g.connect(master);
        const o1 = ac.createOscillator(); o1.frequency.value = 52; const o2 = ac.createOscillator(); o2.type = 'triangle'; o2.frequency.value = 77.9;
        const g2 = ac.createGain(); g2.gain.value = 0.3; o1.connect(lp); o2.connect(g2); g2.connect(lp); o1.start(); o2.start();
        const nbuf = ac.createBuffer(1, ac.sampleRate * 2, ac.sampleRate), d = nbuf.getChannelData(0);
        for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
        const air = ac.createBufferSource(); air.buffer = nbuf; air.loop = true;
        const abp = ac.createBiquadFilter(); abp.type = 'bandpass'; abp.frequency.value = 420; abp.Q.value = 0.6;
        const ag = ac.createGain(); ag.gain.value = 0.012; air.connect(abp); abp.connect(ag); ag.connect(master); air.start();
        // the ring in her ears as the house listens
        const ring = ac.createOscillator(); ring.frequency.value = 6900; const rg = ac.createGain(); rg.gain.value = 0;
        ring.connect(rg); rg.connect(master); ring.start();
        A = { master, fx, hall, g, o1, o2, lp, rg, ag, nbuf };
      };
      const out = (pan = 0, wet = 0) => {
        if (!A) return null;
        const gn = ac.createGain();
        if (pan && ac.createStereoPanner) { const p = ac.createStereoPanner(); p.pan.value = clamp(pan, -1, 1); gn.connect(p); p.connect(A.fx); if (wet) p.connect(A.hall); }
        else { gn.connect(A.fx); if (wet) gn.connect(A.hall); }
        return gn;
      };
      const tone = (f, dur, type = 'sine', vol = 0.1, at = 0, to = 0, pan = 0, wet = 0, dest = null) => {
        if (!A) return;
        const t = ac.currentTime + at, os = ac.createOscillator(), gn = ac.createGain();
        os.type = type; os.frequency.setValueAtTime(f, t); if (to) os.frequency.exponentialRampToValueAtTime(to, t + dur);
        gn.gain.setValueAtTime(0.0001, t); gn.gain.exponentialRampToValueAtTime(vol, t + 0.008); gn.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        os.connect(gn); gn.connect(dest || out(pan, wet)); os.start(t); os.stop(t + dur + 0.05);
      };
      const noise = ({ dur = 0.3, type = 'bandpass', f = 1000, f2 = 0, q = 1, vol = 0.05, at = 0, pan = 0, att = 0.01, wet = 0, dest = null }) => {
        if (!A) return;
        const t = ac.currentTime + at, s = ac.createBufferSource(), fl = ac.createBiquadFilter(), gn = ac.createGain();
        s.buffer = A.nbuf; s.loop = true; fl.type = type; fl.Q.value = q; fl.frequency.setValueAtTime(f, t);
        if (f2) fl.frequency.exponentialRampToValueAtTime(f2, t + dur);
        gn.gain.setValueAtTime(0.0001, t); gn.gain.exponentialRampToValueAtTime(vol, t + att); gn.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        s.connect(fl); fl.connect(gn); gn.connect(dest || out(pan, wet)); s.start(t, Math.random()); s.stop(t + dur + 0.05);
      };
      const K = {
        step: (pan, vol = 1, muffle = 0, at = 0) => {
          noise({ dur: 0.09, type: 'lowpass', f: muffle ? 260 : 380, vol: 0.12 * vol, at, pan, wet: 1 });
          tone(72, 0.08, 'sine', 0.09 * vol, at, 48, pan, 1);
        },
        // a creak, pitched per stair; long and loud on the creaking one
        creak: (i, loud, pan = 0, vol = 1, at = 0) => {
          const f = 150 + i * 13 + Math.random() * 8, dur = loud ? 0.75 : 0.22;
          tone(f * 1.08, dur, 'sawtooth', (loud ? 0.05 : 0.012) * vol, at, f * 0.82, pan, 1);
          tone(f * 2.02, dur * 0.8, 'triangle', (loud ? 0.03 : 0.008) * vol, at + 0.02, f * 1.7, pan, 1);
          if (loud) noise({ dur: 0.6, f: f * 4, f2: f * 3, q: 9, vol: 0.03 * vol, at, pan, wet: 1 });
        },
        click: () => { noise({ dur: 0.03, type: 'highpass', f: 2200, vol: 0.06 }); tone(1700, 0.02, 'square', 0.02); },
        tick: v => tone(2500, 0.02, 'square', 0.005 * v, 0, 0, 0.6),
        warn: () => tone(92, 0.9, 'sine', 0.06, 0, 78),
        heard: () => { tone(311, 1.4, 'sawtooth', 0.035, 0, 280); tone(155, 1.6, 'sine', 0.08, 0, 120); },
        stop: () => noise({ dur: 0.05, type: 'lowpass', f: 300, vol: 0.05 }),
        warm: () => { [196, 246.9, 293.7, 392].forEach((f, i) => tone(f, 2.6, 'sine', 0.04, i * 0.07)); K.tick(4); later(() => K.tick(4), 420); },
        // one music-box note: a few bright partials that die fast
        box: (semi, at, cents, vol, dest) => {
          const f = 523.25 * Math.pow(2, (semi + cents / 100) / 12);
          tone(f, 1.1, 'sine', vol, at, 0, 0, 0, dest); tone(f * 2, 0.5, 'sine', vol * 0.3, at, 0, 0, 0, dest); tone(f * 3.01, 0.25, 'sine', vol * 0.14, at, 0, 0, 0, dest);
        },
      };
      // a house sound that lasts; returns a stop()
      const playSrc = (ev, vol, late) => {
        if (!A) return () => {};
        const key = ev.key, dur = (ev.end - ev.start) / 1000, pan = ev.up ? 0 : { kitchen: -0.6, gate: 0.8, window: -0.35 }[SRC[key].loc];
        const bus = ac.createGain(), t0 = ac.currentTime; bus.gain.value = 0.0001;
        let dest = bus;
        if (ev.up) { const m = ac.createBiquadFilter(); m.type = 'lowpass'; m.frequency.value = 700; bus.connect(m); m.connect(out(0, 1)); }
        else bus.connect(out(pan, 1));
        bus.gain.setTargetAtTime(vol, t0, 0.12);
        const made = [];
        const keep = n => { made.push(n); return n; };
        const at = late ? 0.28 : 0;
        if (key === 'engine') {
          const lpf = ac.createBiquadFilter(); lpf.type = 'lowpass'; lpf.frequency.value = 170; lpf.connect(dest);
          const a = keep(ac.createOscillator()), b = keep(ac.createOscillator()); a.type = b.type = 'sawtooth'; a.frequency.value = 40; b.frequency.value = 40.7;
          const eg = ac.createGain(); eg.gain.value = 0.16; a.connect(eg); b.connect(eg); eg.connect(lpf);
          const lfo = keep(ac.createOscillator()); lfo.frequency.value = 6.5; const lg = ac.createGain(); lg.gain.value = 0.06; lfo.connect(lg); lg.connect(eg.gain);
          a.start(t0 + at); b.start(t0 + at); lfo.start(t0);
          noise({ dur: dur + 0.6, type: 'lowpass', f: 110, vol: 0.14, att: 0.9, dest, at });
        } else if (key === 'radiator') {
          noise({ dur: dur, type: 'highpass', f: 3200, vol: 0.008, att: 0.3, dest });
          for (let k = 0, x = 0.1; x < dur - 0.2 && k < 9; k++, x += 0.18 + Math.random() * 0.4) {
            tone(120 + Math.random() * 50, 0.12, 'sine', 0.12, x + at, 90, 0, 0, dest);
            noise({ dur: 0.07, f: 900, q: 4, vol: 0.08, at: x + at, dest }); tone(2150 + Math.random() * 200, 0.08, 'sine', 0.012, x + at + 0.01, 0, 0, 0, dest);
          }
        } else if (key === 'koi') {
          for (let k = 0, x = 0.05; x < dur - 0.25 && k < 5; k++, x += 0.25 + Math.random() * 0.3) {
            noise({ dur: 0.35, f: 500 + Math.random() * 300, f2: 1300 + Math.random() * 500, q: 2.5, vol: 0.09, at: x + at, att: 0.08, dest });
            tone(800 + Math.random() * 300, 0.06, 'sine', 0.02, x + at + 0.15, 1500, 0, 0, dest);
          }
        } else if (key === 'wind') {
          noise({ dur, type: 'lowpass', f: 380, f2: 620, vol: 0.12, att: dur * 0.4, dest, at });
          noise({ dur: dur * 0.8, f: 1080, f2: 960, q: 14, vol: 0.02, att: dur * 0.3, at: at + 0.3, dest });
        } else if (key === 'radio') {
          const hp = ac.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 380; const lpf = ac.createBiquadFilter(); lpf.type = 'lowpass'; lpf.frequency.value = 2900;
          hp.connect(lpf); lpf.connect(dest);
          noise({ dur, f: 1800, q: 0.8, vol: 0.018, att: 0.4, dest, at });
          // the tune picks up where it left off, a little more out of tune each time
          const beat = (ev.wrong ? 0.5 : 0.42), drift = -6 - st.mPlays * 7 - (ev.wrong ? 45 : 0);
          let x = 0.5, i = st.mIdx;
          while (x < dur - 0.4) {
            const [semi, b] = MOLIHUA[i % MOLIHUA.length];
            const off = ev.wrong && Math.random() < 0.2 ? -1 : 0;
            K.box(semi + off, x + at, drift + (Math.random() - 0.5) * 14, 0.05, hp);
            x += b * beat; i++;
          }
          if (!late) { st.mIdx = i % MOLIHUA.length; st.mPlays++; }
        }
        return (fast) => {
          const t = ac.currentTime; bus.gain.cancelScheduledValues(t); bus.gain.setTargetAtTime(0.0001, t, fast ? 0.01 : 0.15);
          made.forEach(n => { try { n.stop(t + (fast ? 0.1 : 0.8)); } catch (e) {} });
        };
      };
      let soundAt = 0;
      const hum = () => {
        if (!A || st.t - soundAt < 60) return; soundAt = st.t;
        const t = ac.currentTime, pr = prog(), L = st.listen / 100;
        A.o1.frequency.setTargetAtTime(52 - pr * 6, t, 0.4); A.o2.detune.setTargetAtTime(pr * 60 + L * 40, t, 0.4);
        A.g.gain.setTargetAtTime(0.025 + pr * 0.015, t, 0.3);
        A.rg.gain.setTargetAtTime(L * L * 0.012, t, 0.2);
      };

      /* where she is */
      const node = (i = st.pos) => st.route[i];
      const zone = nd => nd.kind === 'tread' ? (nd.i <= st.n / 3 ? 'up' : 'mid') : (nd.kind === 'bed' || nd.kind === 'landing') ? 'up' : 'down';
      const spot = nd => nd.kind === 'tread' ? treadAt(nd.i, st.n) : SPOT[nd.id];
      const fwd = () => st.dir === 'down' ? 1 : -1;
      const prog = () => clamp(st.t / LEN);
      const along = () => st.dir === 'down' ? st.pos / (st.route.length - 1) * 0.5 : 0.5 + (1 - st.pos / (st.route.length - 1)) * 0.5;
      const stageNow = () => { const d = along(); let s = d < 0.2 ? 0 : d < 0.45 ? 1 : d < 0.65 ? 2 : 3; if (st.t > LEN * 0.5) s = Math.max(s, 2); return s; };
      // the stair number the HUD shows (counted in the walking direction) and the stair it thinks creaks
      const countOf = nd => nd.kind !== 'tread' ? 0 : st.dir === 'down' ? nd.i : st.n - nd.i + 1;
      const nextNode = (long = false) => {
        if (st.pos === st.route.length - 1 && st.dir === 'down' && !st.glass) return { kind: 'fill' };
        const j = st.pos + fwd() * (long ? 2 : 1);
        return st.route[clamp(j, 0, st.route.length - 1)];
      };
      const canLong = () => { const a = st.route[st.pos + fwd()], b = st.route[st.pos + fwd() * 2]; return !!(a && b && a.kind === 'tread'); };
      const noiseOf = (nd, long, truth = true) => {
        if (nd.kind === 'fill') return NOISE.fill;
        // the truth, or what the HUD believes: "the seventh", counted the way she walks (and misread while the counter lies)
        const creaky = nd.kind === 'tread' && (truth ? nd.creaky : countOf(nd) + (st.cntLie ? st.cntLie.d : 0) === CREAK);
        if (creaky) return NOISE.creak;
        return long ? NOISE.long : NOISE[nd.kind] ?? NOISE.tread;
      };
      const coverAt = (real = true) => {
        const ev = st.ev; if (!ev || (real && ev.wrong)) return 0;
        const s = SRC[ev.key]; return ev.lvl * s.cover * (ev.up ? 0.85 : NEAR[s.loc][zone(node())]);
      };
      // test hook: what the house really covers now, and how loud her next step / long step really is (and what the notch says)
      st.peek = () => ({ cover: coverAt(true), shown: coverAt(false), next: noiseOf(nextNode(false), false, true), notch: noiseOf(nextNode(false), false, false),
        long: canLong() ? noiseOf(nextNode(true), true, true) : null });

      /* the house's sounds */
      const startEv = () => {
        const s = st.stage;
        let key, wrong = false, tells = [];
        const canWrong = s >= D.wrongFrom && st.t > 12000;
        if (canWrong && !st.taught) { key = 'radio'; wrong = true; st.taught = true; tells = ['dark', 'up', 'text', 'colour'].concat(A ? ['late'] : []); }
        else {
          const pool = Object.keys(SRC).filter(k => SRC[k].from <= s && k !== st.lastSrc);
          const ws = pool.map(k => SRC[k].w * (k === 'engine' ? D.engine : 1)), sum = ws.reduce((a, b) => a + b, 0);
          let r = Math.random() * sum; key = pool[pool.length - 1];
          for (let i = 0; i < pool.length; i++) { r -= ws[i]; if (r <= 0) { key = pool[i]; break; } }
          if (canWrong && Math.random() < D.wrong[s]) { wrong = true; tells = shuffle(['dark', 'up', 'text', 'colour'].concat(A ? ['late'] : [])).slice(0, D.tells); }
        }
        const S = SRC[key], len = rnd(S.dur) * (1 - 0.12 * prog());
        const ev = { key, wrong, tells, up: tells.includes('up'), start: st.t, end: st.t + len, lvl: 0, stop: null, chip: null };
        st.ev = ev; st.lastSrc = key; if (wrong) st.wrong++;
        const T = tells, loc = ev.up ? 'up' : S.loc;
        const txt = T.includes('text') ? (D.subtle ? S.bad : S.off) : S.cap;
        ev.chip = chip(DIR[loc], `${txt} · ${PLACE[loc]}`, 'ev' + (T.includes('colour') ? ' wc' : ''), 0);
        // the map: a real sound lights its place; a wrong one may not, or lights the door upstairs
        if (!wrong || !(T.includes('dark') || ev.up)) map.querySelector(`[data-src="${S.loc === 'gate' ? 'gate' : S.loc === 'window' ? 'window' : key}"]`)?.classList.add('on');
        if (ev.up) map.querySelector('.st-up')?.classList.add('on');
        const vol = ev.up ? 0.7 : NEAR[S.loc][zone(node())];
        ev.stop = playSrc(ev, vol, false);
        if (T.includes('late')) { const s2 = playSrc(ev, vol * 0.45, true); const s1 = ev.stop; ev.stop = f => { s1(f); s2(f); }; }
        if (wrong && T.length >= 4) say('The radio. Look at it.', 'warn');
      };
      const endEv = (dead = false) => {
        const ev = st.ev; if (!ev) return;
        ev.stop && ev.stop(dead); ev.chip && ev.chip.remove();
        map.querySelectorAll('.st-src.on').forEach(n => n.classList.remove('on'));
        st.ev = null;
        const g = rnd(D.gap) * (1 + 0.18 * st.stage);
        st.evNext = st.t + (dead ? g + 900 : g);
        if (st.stage >= 2 && !st.ghost && Math.random() < 0.35) st.ghostAt = st.t + 400;
      };

      /* the step */
      const stepNow = (long = false) => {
        if (!st.begun || st.over || st.paused || st.t < st.lock) return;
        if (long && !canLong()) long = false;
        const nd0 = nextNode(long), cover = coverAt(true), ev = st.ev;
        let nz, nd = nd0, creakI = 0, loud = false;
        st.steps++;
        if (nd0.kind === 'fill') {
          nz = NOISE.fill; st.glass = true; st.dir = 'up'; st.lock = st.t + 1100;
          map.querySelector('.st-water')?.setAttribute('opacity', '.8');
          chip('●', 'Water in the glass', '', 1400);
          noise({ dur: 0.9, f: 1400, f2: 2600, q: 1.5, vol: 0.05, att: 0.05, pan: -0.5 });
          say('Now back up. Count them.', '');
          // the stairs count wrong on the way back
          st.n = 14; st.odd = CREAK + 1; st.route = route(14, st.odd); st.pos = st.route.length - 1;
          map.querySelector('.st-stairs').innerHTML = stairsSvg(st.n, st.odd);
        } else {
          const skipped = long ? st.route[st.pos + fwd()] : null;
          st.pos = clamp(st.pos + fwd() * (long ? 2 : 1), 0, st.route.length - 1); nd = node();
          nz = noiseOf(nd, long, true);
          loud = nd.kind === 'tread' && nd.creaky;
          creakI = nd.kind === 'tread' ? nd.i : 0;
          st.lock = st.t + (long ? 750 : 420);
          const p = (spot(nd).x - 165) / 165;
          if (A) { K.step(p, long ? 1.3 : 1); if (creakI) K.creak(creakI, loud, p, long ? 1.2 : 1); }
          if (loud) chip('●', 'CREAK. The seventh stair.', nz > cover ? 'bad' : '', 1800);
          else if (nd.odd) { chip('▼', 'A creak, under you', 'odd', 1800); if (A) K.creak(3, false, 0, 2.2, 0.3); }
          if (skipped && skipped.creaky) chip('●', 'Over the seventh stair', 'good', 1300);
        }
        // the house hears what it doesn't cover
        if (nz > cover) {
          st.listen += (nz - cover) * D.k;
          if (loud) st.creaks++;
        }
        if (ev && ev.wrong && ev.lvl > 0.2) {
          st.listen += D.lure; st.lured++;
          sting(); say(SRC[ev.key].lie, 'bad'); K.stop(); endEv(true);
        }
        if (st.answer) {
          st.listen += D.answer; st.answered++; st.answer.left++;
          say('It heard that.', 'bad');
        }
        // her echo from the landing: in time, then late, then twice, then not at all
        const s = st.stage, lag = [90, 170, 330, 540][s];
        const miss = s >= 3 && Math.random() < 0.25, twice = s >= 2 && !miss && Math.random() < 0.22;
        if (!miss) {
          later(() => echo(), lag); if (twice) later(() => echo(true), lag + 380);
        } else chip('▲', 'No echo', 'odd', 1400);
        if (s >= 1 && lag > 150 && !miss) later(() => chip('▲', twice ? 'Your step, twice' : 'Your step, late', 'odd', 1200), lag);
        // something on the landing answers
        if (!st.answer && s >= D.answerFrom && st.t >= st.answerCool && Math.random() < 0.2) {
          const [a, b] = D.answerN; st.answer = { left: a + Math.floor(Math.random() * (b - a + 1)), next: st.t + rnd([500, 900]), until: Infinity };
        }
        st.lastStep = st.t; st.heard = Math.max(st.heard, Math.min(100, st.listen));
        if (st.listen >= 100) return finish(false);
        if (st.dir === 'up' && st.pos === 0) return finish(true);
        paint();
      };
      const echo = (extra = false) => {
        if (st.over) return;
        if (A) K.step(0, extra ? 0.7 : 0.5, 1);
        const e = map.querySelector('.st-echo'); e.classList.remove('ping'); void e.getBoundingClientRect(); e.classList.add('ping');
      };
      const sting = () => { el.classList.remove('sting'); void el.offsetWidth; el.classList.add('sting'); later(() => el.classList.remove('sting'), 600); };

      /* the interface lies (labels only) */
      const lie = (n, txt, ms) => {
        if (!n || n._lie) return;
        n._lie = true; n.textContent = txt; n.classList.add('lie');
        later(() => { n._lie = false; n.classList.remove('lie'); n.textContent = n.dataset.t || ''; }, ms);
      };
      const LIES = [
        () => { if (!st.ev) lie($('.st-phase'), 'Go', 520); },
        () => lie($('.st-listenm small'), pick(['Awake', 'Closer']), 700),
        () => lie($('.st-name'), 'THE EIGHTH STAIR', 650),
        () => { if (D.lieCount && node().kind === 'tread') st.cntLie = { end: st.t + 1100, d: pick([-1, 1]) }; },
        () => { st.clockLie = { end: st.t + 1300 }; },
      ];

      /* one frame */
      let tickS = 0;
      const step = dt => {
        st.t += dt;
        st.stage = stageNow();
        // the house
        if (st.ev) {
          const ev = st.ev;
          ev.lvl = clamp((st.t - ev.start) / 350) * (st.t > ev.end ? clamp(1 - (st.t - ev.end) / 450) : 1);
          if (st.t >= ev.end + 450) endEv();
        } else if (st.t >= st.evNext) startEv();
        st.listen = Math.max(0, st.listen - D.decay * dt / 1000);
        st.heard = Math.max(st.heard, Math.min(100, st.listen));
        // something walking on the landing
        const an = st.answer;
        if (an) {
          if (an.left > 0 && st.t >= an.next) {
            an.left--; an.next = st.t + rnd([520, 760]);
            if (A) K.step(0, 0.8 + 0.1 * st.answered, 1);
            chip('▲', 'A step. Not yours.', 'odd', 1100);
            const pip = map.querySelector('.st-pip'); pip.classList.remove('ping'); void pip.getBoundingClientRect(); pip.classList.add('ping');
            if (!st.answerTaught) { st.answerTaught = true; say('Something on the landing is walking. Freeze until it stops.', 'warn'); K.warn(); }
            if (an.left === 0) an.until = st.t + 700;
          }
          if (st.t >= an.until) { st.answer = null; st.answerCool = st.t + rnd([8000, 13000]); }
        }
        const nd = node();
        // the hall light: off near the bottom (a click upstairs), on again when she comes back (no click)
        if (!st.lightOff && st.dir === 'down' && nd.kind === 'tread' && nd.i >= st.n - 3) {
          st.lightOff = true; st.light = 'off'; if (A) K.click(); chip('▲', 'Click. The hall light goes off.', 'odd', 2200);
          el.classList.add('lights-off');
          if (!calm && !still) { el.classList.add('black'); later(() => el.classList.remove('black'), 380); }
        }
        if (st.lightOff && !st.lightBack && st.dir === 'up' && nd.kind === 'kdoor') {
          st.lightBack = true; st.light = 'on'; el.classList.remove('lights-off'); chip('●', 'The hall light is on. No click.', 'odd', 2400);
        }
        if (!st.clockSaid && nd.kind === 'hall') { st.clockSaid = true; say(`The hall clock says ${fmt(clockMins() + 60)}. It isn’t.`, ''); }
        // someone on the seventh stair (once a run)
        if (!st.sat && st.dir === 'up' && st.stage >= 2 && nd.kind === 'tread' && nd.i > CREAK && nd.i <= CREAK + 3) {
          st.sat = true; st.sit = { end: st.t + (still || calm ? 900 : 200) }; el.classList.add('sitting');
          const pt = treadAt(CREAK, st.n); map.querySelector('.st-sitter').setAttribute('transform', `translate(${pt.x.toFixed(1)} ${pt.y.toFixed(1)})`);
          if (A) K.creak(CREAK, true, 0, 1.4); chip('●', 'Creak. Not you.', 'odd', 1800);
        }
        if (st.sit && st.t >= st.sit.end) { st.sit = null; el.classList.remove('sitting'); }
        // the hall clock ticks (louder in the hall)
        const s = Math.floor(st.t / 1000); if (s !== tickS) { tickS = s; if (A) K.tick(zone(nd) === 'down' ? 1 : 0.35); }
        // lies, from the second stage
        if (st.stage >= 1 && st.t >= st.lieAt) { st.lieAt = st.t + rnd([4000, 8000]) * (1 - 0.3 * prog()); pick(LIES)(); }
        if (st.cntLie && st.t >= st.cntLie.end) st.cntLie = null;
        if (st.clockLie && st.t >= st.clockLie.end) st.clockLie = null;
        // a caption types itself and takes it back
        if (st.ghostAt && st.t >= st.ghostAt && !st.ghost) { st.ghostAt = 0; st.ghost = { s: GHOST[st.ghosts++ % GHOST.length], i: 0, mode: 'type', acc: 0 }; if (st.ghosts === 1) GHOST.sort(() => Math.random() - 0.5); }
        if (st.ghost) {
          const g = st.ghost; g.acc += dt;
          if (g.mode === 'type') { while (g.acc >= 70 && g.i < g.s.length) { g.acc -= 70; g.i++; } if (g.i >= g.s.length) { g.mode = 'hold'; g.acc = 0; } }
          else if (g.mode === 'hold') { if (g.acc >= 1000) { g.mode = 'del'; g.acc = 0; } }
          else { while (g.acc >= 30 && g.i > 0) { g.acc -= 30; g.i--; } if (g.i <= 0) st.ghost = null; }
          const gn = $('.st-ghost'); gn.textContent = st.ghost ? g.s.slice(0, g.i) : ''; gn.classList.toggle('on', !!st.ghost);
        }
        if (st.t >= LEN) return finish('dawn');
      };
      const clockMins = () => START + Math.floor(prog() * SPAN);
      const fmt = m => `${Math.floor(m / 60) % 12 || 12}:${String(m % 60).padStart(2, '0')}`;
      const paint = () => {
        const nd = node(), pt = spot(nd), shown = coverAt(false), nx = nextNode(false), nn = noiseOf(nx, false, false);
        me.setAttribute('transform', `translate(${pt.x.toFixed(1)} ${(pt.y - 6).toFixed(1)})`);
        const ev = st.ev, bone = ev && ev.wrong && ev.tells.includes('colour');
        const hm = $('.st-housem');
        hm.querySelector('i').style.width = `${(shown * 100).toFixed(1)}%`;
        hm.querySelector('u').style.left = `${(nn * 100).toFixed(1)}%`;
        hm.classList.toggle('bone', !!bone); hm.classList.toggle('subtle', !!bone && D.subtle);
        hm.classList.toggle('over', shown >= nn);
        $('.st-listenm i').style.width = `${Math.min(100, st.listen)}%`;
        el.style.setProperty('--listen', (Math.min(100, st.listen) / 100).toFixed(3));
        el.style.setProperty('--dark', Math.min(1, 0.15 + 0.6 * along() + 0.25 * prog()).toFixed(3));
        if (ev) { const c = ev.chip?.querySelector('i'); if (c) c.style.width = `${(shown * 100).toFixed(0)}%`; }
        const ph = $('.st-phase'); ph.dataset.t = st.answer ? 'Freeze' : shown >= nn ? 'Move' : 'Freeze'; if (!ph._lie) ph.textContent = ph.dataset.t;
        el.dataset.phase = ph.dataset.t === 'Move' ? 'move' : 'freeze';
        // the counter, which may misread
        let k = countOf(nd); if (k && st.cntLie) k = Math.max(1, k + st.cntLie.d);
        const names = { bed: st.glass ? 'Your room' : 'Your door', landing: 'The landing', hall: 'The hall', kdoor: 'The kitchen', sink: st.glass ? 'The sink' : 'The sink: fill the glass' };
        $('.st-count').textContent = k ? `Stair ${k} of 13` : names[nd.id];
        $('.st-count').classList.toggle('lie', !!st.cntLie || k > 13);
        $('.st-num').textContent = k ? String(k) : '';
        const nk = countOf(nx) && countOf(nx) + (st.cntLie ? st.cntLie.d : 0);
        $('.st-next').textContent = nx.kind === 'fill' ? 'Next: the tap (loud)' : nk ? `Next: stair ${nk}${nn >= NOISE.creak ? ' · it creaks' : ''}` : `Next: ${({ bed: 'your room', landing: 'the landing', hall: 'the hall', kdoor: 'the kitchen', sink: 'the sink' })[nx.id] || ''}`;
        $('.st-long').disabled = !canLong();
        el.classList.toggle('in-kitchen', nd.kind === 'kdoor' || nd.kind === 'sink');
        const m = clockMins() + (st.clockLie ? 60 : 0);
        $('.st-clock').textContent = `${fmt(m)} a.m.`; $('.st-clock').classList.toggle('lie', !!st.clockLie);
        // the hall clock: an hour ahead
        const hc = clockMins() + 60, rot = (n, a) => n && n.setAttribute('transform', `rotate(${a.toFixed(1)} 300 262)`);
        rot(map.querySelector('.st-hclock .hh'), (hc / 60 % 12) * 30); rot(map.querySelector('.st-hclock .mh'), (hc % 60) * 6);
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
        if (st.over) return; st.over = true; cancelAnimationFrame(raf);
        const quit = won === 'quit', dawn = won === 'dawn'; won = won === true;
        if (st.ev) endEv(!won);
        st.answer = null; st.ghost = null; $('.st-ghost').textContent = '';
        el.classList.remove('black', 'sitting', 'sting');
        const grade = !won ? 'C' : st.heard < 40 && st.lured === 0 && st.creaks === 0 ? 'S' : st.heard < 70 && st.lured <= 1 && st.creaks <= 1 ? 'A' : 'B';
        const res = { won, grade, quit, dawn, heard: Math.round(st.heard), lured: st.lured, wrong: st.wrong, creaks: st.creaks, answered: st.answered, steps: st.steps, stairs: st.n, secs: Math.round(Math.min(st.t, LEN) / 1000) };
        if (A) {
          const t = ac.currentTime; A.rg.gain.setTargetAtTime(0, t, 0.05);
          if (won) { A.o2.detune.setTargetAtTime(0, t, 0.3); A.o1.frequency.setTargetAtTime(52, t, 0.3); K.warm(); }
          else { A.g.gain.setTargetAtTime(0.0001, t, 0.1); A.ag.gain.setTargetAtTime(0.0001, t, 0.4); if (!quit) { K.heard(); later(() => K.box(12, 0, -60, 0.05), 1400); } }
        }
        el.classList.add(won ? 'won' : 'lost');
        if (!won && !quit) el.classList.add('lights-on');
        const end = $('.mg-end');
        const show = () => {
          if (!el.isConnected) return;
          end.hidden = false;
          const head = won ? 'Back in bed.' : quit ? 'You stay where you are.' : dawn ? 'Half past four.' : 'The house heard you.';
          const line = won ? 'The house settles. The radiator ticks twice, the way it always does, and decides it isn’t getting up for this.'
            : quit ? 'You stand on the stair and wait. The stairs wait too.'
            : dawn ? 'Slippers on the landing. Somebody’s up early, and you’re still on the stairs.'
            : 'The landing light comes on. Nobody is standing at the switch.';
          end.innerHTML = `<p class="st-end-head">${head}</p><b class="mg-grade">${grade}</b>
            <dl><dt>Listening, at worst</dt><dd>${res.heard}%</dd><dt>Wrong sounds followed</dt><dd>${st.lured} / ${st.wrong}</dd><dt>Uncovered creaks</dt><dd>${st.creaks}</dd><dt>Stairs counted</dt><dd>${st.glass ? st.n : 13}</dd><dt>Time</dt><dd>${res.secs}s</dd></dl>
            <p class="mg-end-say">${line}</p><button type="button">Continue</button>`;
          end.querySelector('button').focus();
          end.querySelector('button').onclick = () => { cleanup(); o.onDone?.(res); done(res); };
        };
        quit ? show() : later(show, won ? 1400 : 2000);
      };

      /* input */
      const pause = on => {
        st.paused = on; $('.mg-pause').hidden = !on;
        if (ac) { try { on ? ac.suspend() : ac.resume(); } catch (e) {} }
        if (on) $('.mg-pause button').focus();
      };
      const STEP_KEYS = [' ', 'Enter', 'ArrowDown', 'ArrowUp', 's', 'S', 'w', 'W'];
      const key = e => {
        if (!el.isConnected || st.over) return;
        e.stopPropagation();
        if (!st.begun) return;
        if (e.key === 'Escape') { e.preventDefault(); pause(!st.paused); return; }
        if (st.paused) return;
        if (STEP_KEYS.includes(e.key) || e.key === 'l' || e.key === 'L') {
          e.preventDefault(); if (e.repeat) return;
          stepNow(e.shiftKey || e.key === 'l' || e.key === 'L');
        }
      };
      const press = long => e => { e.preventDefault(); e.stopPropagation(); stepNow(long); };
      $('.st-step').addEventListener('pointerdown', press(false));
      $('.st-long').addEventListener('pointerdown', press(true));
      el.addEventListener('contextmenu', e => e.preventDefault());
      const cleanup = () => {
        cancelAnimationFrame(raf); timers.forEach(clearTimeout); timers.clear();
        window.removeEventListener('keydown', key, true); window.removeEventListener('keydown', skipT, true);
        try { ac && ac.close(); } catch (e) {} el.remove();
      };
      $('.mg-pause').onclick = e => { const b = e.target.dataset.mg; if (b === 'resume') pause(false); if (b === 'quit') { pause(false); finish('quit'); } };
      window.addEventListener('keydown', key, true);

      /* the title card: held 1.8 s (click / any key skips), then the stairs */
      map.querySelector('.st-stairs').innerHTML = stairsSvg(13, 0);
      const note = ['Psychological horror', calm ? 'Flashes reduced' : 'Flashing lights', still ? 'Reduced motion' : '', o.mute ? 'Captions on' : 'Best with sound'].filter(Boolean).join(' · ');
      const tt = document.createElement('div'); tt.className = 'st-title';
      tt.innerHTML = `<b>THE SEVENTH STAIR</b><small>Down to the kitchen and back. Count them.</small><img src="${ART('title')}" alt="" onerror="this.remove()"><p class="st-note">${esc(note)}</p>`;
      el.appendChild(tt);
      const begin = () => {
        if (st.begun || !el.isConnected) return; st.begun = true; window.removeEventListener('keydown', skipT, true);
        tt.classList.add('out'); later(() => tt.remove(), 450);
        audio();
        say('Move while the house is loud. Freeze when it’s quiet.', '');
        paint(); raf = requestAnimationFrame(tick);
      };
      const skipT = e => { if (e.key !== 'Escape') { e.preventDefault(); e.stopPropagation(); begin(); } };
      tt.onclick = begin; window.addEventListener('keydown', skipT, true); later(begin, 1800);
      paint();
    });
  }
  return { play, DIFF, SRC, MOLIHUA, state: () => cur };
})();
