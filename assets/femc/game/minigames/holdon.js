/* In the story since Nov 11 2026 (the "DEMO" wording in the header below is older): Runners story-nyc2.js epi-r-dark-kitchen (12/27 late, the 2 a.m. train, every route), flags epi-r-mg-holdon; optional, with a confirmed skip. */
/* FEMC epilogue minigame: hold on (Nov 11 2026, EPILOGUE-EXPANSION-PLAN.md: "'Hold on' for the glitch nights: keep her in place
   against the pull"). A DEMO: not in the story yet (try it at mockups/minigames/index.html). Horror pass (Nov 11, Kat: "I want
   it creepier ... psychological horror"): built for the Runners held stretch (the apartment at night, the world losing track of
   her); its vocabulary is glitches.js's held layer (erase, late, clock, sound, name). Dread, not jumpscares; nothing gory.

   FemcHoldOn.play({ host, mute, difficulty, seconds, bg, onDone, calm, perf }) -> Promise<result>
     host        element to draw into (default document.body; a full-screen overlay is added inside it)
     mute        no audio at all (the captions and meters carry everything; sound-only tells are never used)
     difficulty  'easy' | 'normal' | 'hard' (length 60 / 75 / 90 s, real anchors per surge 2 / 3 / 3, false ones from wave 2 / 2 / 1,
                 tells per false one 2 / 1 / 1 (hard: subtler), slips allowed 3 / 3 / 2; default 'normal')
     seconds     override the length
     bg          a background id under assets/femc/bg/ (default epi-r-her-room-night: there's no Lee apartment night picture
                 yet; epi-r-nyc-kitchen is day art. A drawn room shows if it's missing)
     calm, perf  Reduce flashes / Performance; default: the game's settings (FemcGame.settings().calm / .perf), else off
     onDone      called with the result too
   result = { won, grade: 'S' | 'A' | 'B' | 'C', slips, anchors, offered, missed, held, quit, lured, lies }
     anchors / offered / missed count real anchors only; lured = false ones grabbed, lies = false ones shown;
     held = seconds she stayed (the whole length when won)

   How it plays: a room at night, and the pull comes in waves: QUIET → BUILD (it darkens, things whisper, anchors glow) → a beat
   of total silence → SURGE (a train's brakes somewhere under the floor).
     Hold on   hold the mouse button / a finger anywhere, or Space. Holding is grip against the pull.
     Breath    holding spends breath; letting go refills it (let go in the quiet, hold from the build).
     Anchors   glowing things in the room (lamp, mug, her hand, the clock, snow on the glass, a voice, the blanket, a phone, a
               photo). While holding, rest the pointer / finger on one until its ring fills (or press its number, 1-6).
               Not all of them are real. A false one has tells: a bone-white glow instead of pink (colour), a pulse out of step
               with the others (lag), a misspelled caption or the wrong words (text), its sound a beat late and from the wrong
               side (late; only with sound), or a wrong picture (odd: six fingers, a gap in the photo, a voice bubble facing the
               wrong way, "Solar left the chat"). Grabbing one pulls her further (slip, a kick of pull, breath). Left alone it
               just isn't there any more.
     Slipping  pull stronger than grip fills the slip meter; full = a slip. Too many and she's gone; last to the end = held.
   Grade: S held, no slips, 85%+ anchors, nothing false taken; A held, ≤1 slip, 60%+, ≤1 false; B held; C slipped (or quit).

   The room is wrong in ways you notice late (props drawn over the background, changed a second or two into each quiet, PLAN):
   the wall clock runs backwards during the pull, then stops at 3:12; a figure leaves the family photo; the door opens a little
   more; the mug moves, then goes; the coat on its hook goes; her reflection in the window falls half a second behind, then
   stops moving at all. It darkens and drains of colour as the run goes on and as the pull builds.
   Sharper moments (one each a run): after the second wave the room cuts to black for a beat and comes back changed; on a later
   surge, for one frame, she isn't there but her reflection is.
   The interface lies: labels rewrite themselves (Slipping → Leaving, Hold on → Let go, HOLD → STAY), the timer jumps back or
   freezes, a caption types a sentence and deletes it, the HOLD pill drifts. Controls never lie: Esc, Space, numbers and the
   pause menu always work.
   Sound (Web Audio, made here, no files): a room tone that sinks and detunes, a clock that ticks (backwards when it runs
   backwards), whispers (filtered noise) panned left / right, a falling three-note chime far below that gets closer each wave,
   brakes at each surge, and silence right before it.
   End: held = the room snaps back warm and whole; slipped = the room empties, a quiet card.
   Title card: art title.webp if present (art/minigames/holdon/), a content note under it, held 2.6 s (click / a key skips).
   Settings: reduced motion = no tearing, shaking, drifting or moving figure (crossfades instead of cuts); Reduce flashes (calm) =
   no hard cuts or stings, softer static; Performance = no static / tearing layers. Pink, near-black and bone only.

   First-time tutorial (Nov 11 2026, Kat: every minigame teaches itself; tutorial.js / FemcTutorial, loaded on demand from this
   folder): after the title card, before the first quiet, the first time ever (FemcTutorial.seen('holdon')) or with play option
   `tutorial: true` (`false` never shows it; the story passes neither). Solar talks you through it (solar-runners faces), in a
   calm, well-lit practice room (`.tut`: no pull, lies, ghosts, room changes, slips or stings; st.tut runs tutStep instead of
   step): hold (Space / mouse / finger) → the Slipping meter and pips → let go to refill breath → while holding, rest on one
   glowing anchor → a real one and a false one (bone-white glow, misspelled words): take the real one → Esc pauses. Then the
   real run starts fresh. result.tutorial = 'done' | 'skipped' | 'seen' (not shown). Pause menu → How to play replays it as a
   walkthrough over the paused room (Next on every step) and returns to the pause menu.

   Visual pass (Nov 11 2026, Kat: "as many visuals as possible, as much animation as possible", here with restraint: creepy, not
   busy; the rules, tells and result are unchanged, the extra tells only repeat the existing ones):
     the room   dust motes in the lamp's light that drift slowly, get pulled toward the pull's side in a surge and stop dead in
                the silence before one; shadows in the corners that breathe (slow in the quiet, quicker as it builds); the
                lamp's glow flickers during the pull, more as the glitch grows (never in the silence); a dark creep from the
                pull's side across the build; the room leans a little toward the pull in a surge; one slow heartbeat of the
                vignette in the silence. The window: snow falling, breath-fog on the glass; once her reflection freezes, its
                head tilts, very slowly.
     her        a slow breath; quicker and tense while holding, shaky when out of breath.
     anchors    the icon breathes with the ring (so a lagging one is out of step in both: the same tell), a few motes in its
                own glow colour (the same colour tell), a faint thread to her that fills with the ring; taken = a soft bloom and
                motes that drift to her; a false one taken = it cracks and bone flakes fall.
     HUD        meters ease; Slipping glows past 70%; a lost pip shakes. End: the grade presses in slowly, the stats count up;
                held = warm light and rising motes, slipped = the motes settle.
   Settings: reduced motion = none of the motion (static motes and shadows, no lean / tilt / thread growth beyond a fade),
   Reduce flashes = the flicker only dims softly, no thump, Performance = a third of the motes, no fog blur. */
window.FemcHoldOn = (() => {
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const base = () => (window.FemcGame && window.FemcGame.base) || (document.querySelector('script[src*="minigames/holdon"]')?.src.split('assets/')[0]) || '';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const rnd = ([a, b]) => a + Math.random() * (b - a);
  const shuffle = a => [...a].sort(() => Math.random() - 0.5);
  const ART = id => `${base()}assets/femc/game/art/minigames/holdon/${id}.webp`;
  const BG = id => `${base()}assets/femc/bg/${id}.webp`;
  const DIFF = {
    easy:   { secs: 60, per: 2, dwell: 260, drain: 7,  regen: 26, k: 120, maxSlips: 3, build: 3400, surge: [2000, 2600], calm: [4200, 6200], grow: 0.25, liesFrom: 2, lies: [0.6, 0],    tells: 2, lure: 25, subtle: false },
    normal: { secs: 75, per: 3, dwell: 320, drain: 9,  regen: 22, k: 150, maxSlips: 3, build: 3000, surge: [2200, 3000], calm: [3600, 5600], grow: 0.35, liesFrom: 2, lies: [0.85, 0.35], tells: 1, lure: 34, subtle: false },
    hard:   { secs: 90, per: 3, dwell: 380, drain: 11, regen: 18, k: 175, maxSlips: 2, build: 2600, surge: [2400, 3200], calm: [3000, 4800], grow: 0.45, liesFrom: 1, lies: [1, 0.5],    tells: 1, lure: 40, subtle: true },
  };
  // the anchors. cap = the small caption; bad (/ bad2) = a false one's text tell; say = taken; lie = taken when false;
  // odd = has a wrong picture (SVG_ODD)
  const THINGS = [
    { id: 'lamp', sense: 'See', cap: 'The lamp', bad: 'The lmap', say: 'The lamp. Still on.', lie: 'It was never on.' },
    { id: 'mug', sense: 'Warm', cap: 'Still warm', bad: 'Stil warm', say: 'The mug. Still warm.', lie: 'Cold. Cold for days.' },
    { id: 'hand', sense: 'Feel', cap: 'Your hand', bad: 'Your hnad', say: 'Your hand. Still yours.', lie: 'Count the fingers.', odd: true },
    { id: 'clock', sense: 'Hear', cap: 'Tick. Tick.', bad: 'Tick. Tcik.', say: 'The clock. Ticking forward.', lie: 'It was ticking backwards.', odd: true },
    { id: 'window', sense: 'See', cap: 'Snow on the glass', bad: 'Snow on the galss', say: 'Snow on the window. Count it.', lie: 'The snow was falling up.' },
    { id: 'voice', sense: 'Hear', cap: '“Hey. Stay here.”', bad: '“Hey. Stay hear.”', bad2: '“Stay here, Sola.”', say: 'A voice: “Hey. Stay here.”', lie: 'That came from the wrong side of the room.', odd: true },
    { id: 'blanket', sense: 'Feel', cap: 'Soft. Heavy.', bad: 'Soft. Haevy.', say: 'The blanket. Soft. Heavy.', lie: 'There was nothing there.' },
    { id: 'phone', sense: 'See', cap: 'you up?', bad: 'Solar left the chat', say: 'A text: “you up?” Someone is.', lie: 'Read 3:12 AM.', odd: true },
    { id: 'photo', sense: 'See', cap: 'Everyone in it', bad: 'Evreyone in it', say: 'A photo. You’re in it.', lie: 'There’s a gap where you stood.', odd: true },
  ];
  const P = '#ff9ac8', L = '#ffd1e6', N = '#2a0f1f';
  const SVG = {
    lamp: `<path d="M13 22h22l-6-15H19z" fill="${P}"/><path d="M24 22v15M15 40h18" stroke="${L}" stroke-width="3" stroke-linecap="round"/><circle cx="24" cy="25" r="5" fill="${L}" opacity=".6"/>`,
    mug: `<path d="M9 17h23v14a9 9 0 0 1-9 9h-5a9 9 0 0 1-9-9z" fill="${P}"/><path d="M32 20h3a5 5 0 0 1 0 10h-3" stroke="${L}" stroke-width="3" fill="none"/><path d="M16 5c-2 3 2 5 0 8M23 5c-2 3 2 5 0 8" stroke="${L}" stroke-width="2" fill="none" stroke-linecap="round"/>`,
    hand: `<rect x="13" y="22" width="22" height="20" rx="9" fill="${P}"/><rect x="13" y="9" width="5" height="18" rx="2.5" fill="${P}"/><rect x="19.5" y="5" width="5" height="21" rx="2.5" fill="${P}"/><rect x="26" y="6" width="5" height="20" rx="2.5" fill="${P}"/><rect x="32" y="11" width="4.5" height="16" rx="2.25" fill="${P}"/><rect x="5" y="24" width="13" height="5" rx="2.5" transform="rotate(32 11 26)" fill="${P}"/>`,
    clock: `<circle cx="24" cy="25" r="16" fill="${N}" stroke="${P}" stroke-width="3"/><path d="M24 25V15M24 25l7 4" stroke="${L}" stroke-width="3" stroke-linecap="round"/><path d="M12 8l-4 4M36 8l4 4" stroke="${P}" stroke-width="3" stroke-linecap="round"/>`,
    window: `<rect x="7" y="6" width="34" height="36" rx="2" fill="${N}" stroke="${P}" stroke-width="3"/><path d="M24 6v36M7 24h34" stroke="${P}" stroke-width="2.5"/><g fill="${L}"><circle cx="13" cy="13" r="1.4"/><circle cx="19" cy="18" r="1.2"/><circle cx="31" cy="12" r="1.4"/><circle cx="35" cy="19" r="1.2"/><circle cx="14" cy="31" r="1.3"/><circle cx="33" cy="32" r="1.4"/><circle cx="20" cy="37" r="1.2"/></g>`,
    voice: `<path d="M6 10h26a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H18l-8 7v-7H6a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4z" fill="${P}"/><path d="M39 14c3 3 3 9 0 12M43 10c5 5 5 15 0 20" stroke="${L}" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M10 20h18" stroke="${N}" stroke-width="2.5" stroke-linecap="round"/>`,
    blanket: `<path d="M5 14c6-4 12 4 19 0s13 4 19 0v22c-6 4-12-4-19 0s-13-4-19 0z" fill="${P}"/><path d="M5 22c6-4 12 4 19 0s13 4 19 0M5 30c6-4 12 4 19 0s13 4 19 0" stroke="${L}" stroke-width="2" fill="none" opacity=".7"/>`,
    phone: `<rect x="14" y="4" width="20" height="40" rx="4" fill="${P}"/><rect x="16.5" y="9" width="15" height="28" rx="1.5" fill="${N}"/><rect x="18.5" y="13" width="11" height="5" rx="2.5" fill="${L}"/><rect x="18.5" y="21" width="7" height="4" rx="2" fill="${P}" opacity=".7"/>`,
    photo: `<rect x="5" y="9" width="38" height="30" rx="2" fill="${N}" stroke="${P}" stroke-width="3"/><g fill="${P}"><circle cx="15" cy="20" r="3.4"/><path d="M9.5 33a5.5 6 0 0 1 11 0z"/><circle cx="24" cy="19" r="3.4"/><path d="M18.5 32a5.5 6 0 0 1 11 0z"/><circle cx="33" cy="20" r="3.4"/><path d="M27.5 33a5.5 6 0 0 1 11 0z"/></g>`,
  };
  // the wrong pictures (a false anchor's "odd" tell, and what a false one turns into when it's grabbed)
  const SVG_ODD = {
    hand: SVG.hand + `<rect x="37.5" y="15" width="4" height="13" rx="2" fill="${P}"/>`,
    clock: `<circle cx="24" cy="25" r="16" fill="${N}" stroke="${P}" stroke-width="3"/><path d="M24 25V34M24 25l-7 -4" stroke="${L}" stroke-width="3" stroke-linecap="round"/><path d="M12 8l-4 4M36 8l4 4" stroke="${P}" stroke-width="3" stroke-linecap="round"/>`,
    voice: `<g transform="translate(48 0) scale(-1 1)">${SVG.voice}</g>`,
    phone: `<rect x="14" y="4" width="20" height="40" rx="4" fill="${P}"/><rect x="16.5" y="9" width="15" height="28" rx="1.5" fill="${N}"/><path d="M19 23h10" stroke="${L}" stroke-width="2" stroke-linecap="round" opacity=".5"/>`,
    photo: `<rect x="5" y="9" width="38" height="30" rx="2" fill="${N}" stroke="${P}" stroke-width="3"/><g fill="${P}"><circle cx="15" cy="20" r="3.4"/><path d="M9.5 33a5.5 6 0 0 1 11 0z"/><circle cx="33" cy="20" r="3.4"/><path d="M27.5 33a5.5 6 0 0 1 11 0z"/></g><g fill="none" stroke="${L}" stroke-width="1" stroke-dasharray="1.5 1.5" opacity=".6"><circle cx="24" cy="19" r="3.4"/><path d="M18.5 32a5.5 6 0 0 1 11 0z"/></g>`,
  };
  // where anchors can sit (% of the screen): away from her in the middle and from the room's props
  const SLOTS = [[32, 22], [44, 13], [70, 32], [86, 20], [12, 62], [24, 78], [74, 74], [84, 56], [50, 15], [38, 86], [62, 86], [66, 48]];
  // her stand-in: a seated silhouette from behind, rim-lit pink; the reflection is the same shape in bone, small
  const BODY = 'M100 18c-24 0-38 18-38 40 0 16 6 30 4 46-2 10-8 16-8 16h84s-6-6-8-16c-2-16 4-30 4-46 0-22-14-40-38-40z M44 240c0-60 16-104 56-108s56 48 56 108z';
  const FIGURE = `<svg viewBox="0 0 200 240" aria-hidden="true"><defs><linearGradient id="ho-rim" x1="0" x2="1"><stop offset="0" stop-color="#ff4f9e"/><stop offset=".25" stop-color="#1c0913"/><stop offset=".75" stop-color="#1c0913"/><stop offset="1" stop-color="#ff4f9e"/></linearGradient></defs>
    <path d="${BODY}" fill="url(#ho-rim)"/><path d="${BODY}" fill="none" stroke="#ff9ac8" stroke-width="2" opacity=".6"/></svg>`;
  const REFL = `<svg viewBox="0 0 200 240" aria-hidden="true"><path d="${BODY}" fill="rgba(232,221,208,.5)"/></svg>`;
  // the room's props (scenery, never clickable)
  const PROPS = `
    <div class="hp hp-window"><div class="hp-snow"></div><div class="hp-snow two"></div><div class="hp-refl">${REFL}</div><div class="hp-fog"></div></div>
    <div class="hp hp-coat"><svg viewBox="0 0 40 60" aria-hidden="true"><path d="M8 4h24" stroke="#4a1f30" stroke-width="3" stroke-linecap="round"/><path d="M20 4v5" stroke="#4a1f30" stroke-width="2"/><path d="M20 9c-6 0-11 4-12 10l-4 36h32l-4-36c-1-6-6-10-12-10z" fill="#2a1018" stroke="#5a2a3c" stroke-width="1.2"/></svg></div>
    <div class="hp hp-clock"><svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="21" fill="#1a0b12" stroke="#cfc3b6" stroke-width="2" opacity=".85"/>${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => `<path d="M24 5v3" stroke="#cfc3b6" stroke-width="1.6" transform="rotate(${i * 30} 24 24)"/>`).join('')}<path class="hh" d="M24 24v-10" stroke="#e8ddd0" stroke-width="2.6" stroke-linecap="round"/><path class="mh" d="M24 24v-15" stroke="#e8ddd0" stroke-width="1.8" stroke-linecap="round"/><path class="sh" d="M24 27v-19" stroke="#ff4f9e" stroke-width="1" stroke-linecap="round"/><circle cx="24" cy="24" r="1.6" fill="#ff4f9e"/></svg></div>
    <div class="hp hp-frame"><svg viewBox="0 0 64 48" aria-hidden="true"><rect x="2" y="2" width="60" height="44" fill="#1a0b12" stroke="#5a2a3c" stroke-width="3"/><rect x="6" y="6" width="52" height="36" fill="#3a1a26"/>${[14, 26, 38, 50].map((x, i) => `<g data-f="${i}"><circle cx="${x}" cy="${i === 3 ? 24 : 20}" r="${i === 3 ? 3.4 : 4.2}" fill="#cfc3b6" opacity=".7"/><path d="M${x - 6} 42a6 ${i === 3 ? 9 : 12} 0 0 1 12 0z" fill="#cfc3b6" opacity=".6"/></g>`).join('')}</svg></div>
    <div class="hp hp-door"><i class="hp-gap"></i></div>
    <div class="hp hp-mug"><svg viewBox="0 0 40 40" aria-hidden="true"><path d="M6 12h22v14a8 8 0 0 1-8 8h-6a8 8 0 0 1-8-8z" fill="#3a1a26" stroke="#7a4a5c" stroke-width="1.4"/><path d="M28 15h3a5 5 0 0 1 0 10h-3" stroke="#7a4a5c" stroke-width="2" fill="none"/></svg></div>`;
  // what changes in the room, one step after each wave (BLACK = the room cuts to black and comes back like this)
  const PLAN = [['clock-back'], ['BLACK', 'frame-gap', 'door-1'], ['refl-lag'], ['mug-move'], ['coat-gone', 'refl-freeze'], ['door-2'], ['clock-stop'], ['mug-gone'], ['frame-gap2']];
  // a caption that types itself and takes it back
  const GHOST = ['Who’s there?', 'There’s no one in that room.', 'Go back to bed.', 'Nobody’s awake.', 'It’s only the train.', 'You don’t live here.', 'Come down.', 'How many of you were there?', 'Don’t turn around.'];
  const START = 2 * 3600; // the wall clock starts at 2:00 a.m.
  // the shared first-time tutorial (tutorial.js + .css, loaded once from this folder)
  const tutLib = () => window.FemcTutorial ? Promise.resolve(window.FemcTutorial) : (window.FemcTutorialLoading ||= new Promise(ok => {
    const B = `${base()}assets/femc/game/minigames/tutorial`, l = document.createElement('link'), s = document.createElement('script');
    l.rel = 'stylesheet'; l.href = `${B}.css?v=1`; document.head.appendChild(l);
    s.src = `${B}.js?v=1`; s.onload = s.onerror = () => ok(window.FemcTutorial || null); document.head.appendChild(s);
  }));

  let cur = null; // test hook: FemcHoldOn.state()
  function play(o = {}) {
    return new Promise(done => {
      const host = o.host || document.body;
      const D = DIFF[o.difficulty] || DIFF.normal, LEN = (o.seconds || D.secs) * 1000;
      const GS = (window.FemcGame && window.FemcGame.settings && window.FemcGame.settings()) || {};
      const still = reduced.matches, calm = o.calm ?? !!GS.calm, perf = o.perf ?? !!GS.perf;
      const expect = LEN / (D.build + (D.surge[0] + D.surge[1]) / 2 + (D.calm[0] + D.calm[1]) / 2);
      const st = { t: 0, phase: 'calm', pStart: 0, pEnd: 3200, wave: null, waves: 0, pull: 0, gl: 0, slip: 0, slips: 0, breath: 100, tired: false,
        anchors: 0, offered: 0, missed: 0, lured: 0, lies: 0, kick: 0, dark: 0, paused: false, over: false, begun: false,
        room: { clock: 'fwd', clockT: START, refl: 0, changes: [] }, plan: 0, change: null, black: null, gone: null,
        missWave: Math.max(3, Math.min(5, Math.round(expect * 0.7))), missDone: false,
        lieAt: 9000, clockLie: null, ghost: null, ghosts: 0, whisperAt: 0, drift: { x: 0, y: 0 }, hist: [], reflAt: { x: 0, y: 0 } };
      cur = st;
      const tutP = o.tutorial === false ? Promise.resolve(null) : tutLib(); // starts loading during the title card
      let tutRes = 'seen', tp = null; // tp = the practice the tutorial is waiting on
      const pts = new Map(); let mouse = null, space = false;
      const holding = () => !st.paused && (pts.size > 0 || space);
      const bg = BG(o.bg || 'epi-r-her-room-night');
      // dust in the lamp's light (Nov 11 visual pass): each mote its own slow path
      const motes = Array.from({ length: perf ? 7 : 22 }, () => `<i style="left:${(Math.random() * 100).toFixed(1)}%;top:${(Math.random() * 100).toFixed(1)}%;--sz:${(1 + Math.random() * 2.4).toFixed(1)}px;--dur:${(14 + Math.random() * 16).toFixed(1)}s;--del:${(-Math.random() * 30).toFixed(1)}s;--mx:${(Math.random() * 60 - 30).toFixed(0)}px;--my:${(Math.random() * 50 - 25).toFixed(0)}px"></i>`).join('');
      const timers = new Set();
      const later = (fn, ms) => { const id = setTimeout(() => { timers.delete(id); fn(); }, ms); timers.add(id); return id; };
      const el = document.createElement('div');
      el.className = 'mg-ho' + (still ? ' still' : '') + (calm ? ' calm' : '') + (perf ? ' perf' : '');
      el.setAttribute('role', 'application');
      el.setAttribute('aria-label', 'Hold on');
      el.innerHTML = `
        <div class="ho-scene">
          <div class="ho-room"><img class="ho-bg" src="${bg}" alt="" onerror="this.remove()"></div>
          <div class="ho-props">${PROPS}</div>
          <div class="ho-lamp"></div><div class="ho-shaft">${motes}</div>
          <div class="ho-sick"></div><div class="ho-shade"></div><div class="ho-creep"></div>
          <div class="ho-split"><i style="background-image:url('${bg}')"></i></div>
          ${[0, 1, 2].map(() => `<div class="ho-band" style="background-image:url('${bg}')"></div>`).join('')}
          <div class="ho-her"><img src="${ART('solar')}" alt="" onerror="this.remove()">${FIGURE}</div>
          <div class="ho-streaks"></div><div class="ho-static"></div><div class="ho-scan"></div><div class="ho-edge"></div>
          <div class="ho-anchors"></div><div class="ho-fx"></div>
        </div>
        <div class="ho-black"></div><div class="ho-sting"></div>
        <div class="ho-top"><b class="ho-name" data-t="HOLD ON">HOLD ON</b><span class="ho-phase" data-t="Quiet">Quiet</span><span class="ho-clock">1:15</span></div>
        <div class="ho-meters">
          <div class="ho-m ho-slipm"><small data-t="Slipping">Slipping</small><span><i></i></span><em class="ho-pips"></em></div>
          <div class="ho-m ho-breathm"><small data-t="Breath">Breath</small><span><i></i></span></div>
        </div>
        <div class="ho-pull"><span><i></i></span><small>Pull</small></div>
        <div class="ho-grip" aria-hidden="true"><b data-t="HOLD">HOLD</b></div>
        <p class="ho-ghost" aria-hidden="true"></p>
        <p class="ho-say" aria-live="polite"></p>
        <p class="ho-help">Hold (mouse, finger or Space) when it pulls. Let go in the quiet to breathe. While holding, rest on the glowing things (or 1–6). Not everything that glows is real. Esc pauses.</p>
        <div class="mg-pause" hidden><b>Paused</b><button type="button" data-mg="resume">Resume</button><button type="button" data-mg="howto">How to play</button><button type="button" data-mg="quit">Quit</button></div>
        <div class="mg-end" hidden></div>`;
      host.appendChild(el);
      const $ = s => el.querySelector(s);
      const bands = [...el.querySelectorAll('.ho-band')], her = $('.ho-her'), anchorsEl = $('.ho-anchors'), refl = $('.hp-refl');
      const hands = { h: $('.hp-clock .hh'), m: $('.hp-clock .mh'), s: $('.hp-clock .sh') };
      const say = (txt, kind = '') => { const c = $('.ho-say'); c.textContent = txt; c.className = 'ho-say on ' + kind; clearTimeout(say.t); say.t = later(() => c.classList.remove('on'), 2200); };
      /* the drawn side (Nov 11 visual pass): a few soft particles, the lamp's flicker. V never feeds the rules. */
      const V = { flick: 1, flickEnd: 0, flickAt: 4000 };
      const fxL = $('.ho-fx');
      const motesAt = (x, y, n, cls, tx, ty) => { // x / y in % of the screen; tx / ty = where they drift (px)
        if (still) return;
        n = perf ? Math.ceil(n / 3) : n;
        for (let k = 0; k < n; k++) {
          const m = document.createElement('i'); m.className = 'ho-mote ' + cls; m.style.left = `${x.toFixed(1)}%`; m.style.top = `${y.toFixed(1)}%`;
          m.style.setProperty('--tx', `${(tx + (Math.random() - 0.5) * 50).toFixed(0)}px`); m.style.setProperty('--ty', `${(ty + (Math.random() - 0.5) * 40).toFixed(0)}px`);
          m.style.setProperty('--del', `${(k * 70).toFixed(0)}ms`); fxL.appendChild(m); later(() => m.remove(), 1900);
        }
      };

      /* sound: Web Audio, made here */
      let ac = null, A = null;
      const audio = () => {
        if (o.mute || ac) return;
        try { ac = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { ac = null; return; }
        const master = ac.createGain(); master.gain.value = 0.9; master.connect(ac.destination);
        const fx = ac.createGain(); fx.gain.value = 1; fx.connect(master);
        // a far-off echo for the chime (a delay that feeds itself through a lowpass)
        const echo = ac.createGain(); echo.gain.value = 0.5; const dl = ac.createDelay(1); dl.delayTime.value = 0.34;
        const fb = ac.createGain(); fb.gain.value = 0.42; const elp = ac.createBiquadFilter(); elp.type = 'lowpass'; elp.frequency.value = 1400;
        echo.connect(dl); dl.connect(elp); elp.connect(fb); fb.connect(dl); elp.connect(master);
        // the room tone: a low hum and a not-quite fifth that drifts apart
        const lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 260; lp.Q.value = 3;
        const g = ac.createGain(); g.gain.value = 0.0001; lp.connect(g); g.connect(master);
        const o1 = ac.createOscillator(); o1.type = 'sine'; o1.frequency.value = 58;
        const o2 = ac.createOscillator(); o2.type = 'triangle'; o2.frequency.value = 86.9;
        const o3 = ac.createOscillator(); o3.type = 'sawtooth'; o3.frequency.value = 116.3;
        const g2 = ac.createGain(); g2.gain.value = 0.35; const g3 = ac.createGain(); g3.gain.value = 0.12;
        o1.connect(lp); o2.connect(g2); g2.connect(lp); o3.connect(g3); g3.connect(lp); o1.start(); o2.start(); o3.start();
        const nbuf = ac.createBuffer(1, ac.sampleRate * 2, ac.sampleRate), d = nbuf.getChannelData(0);
        for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
        const ns = ac.createBufferSource(); ns.buffer = nbuf; ns.loop = true;
        const bp = ac.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 2400; bp.Q.value = 0.7;
        const ng = ac.createGain(); ng.gain.value = 0; ns.connect(bp); bp.connect(ng); ng.connect(master); ns.start();
        A = { master, fx, echo, lp, g, o1, o2, o3, ng, nbuf, quiet: false };
      };
      const out = (pan = 0) => {
        if (!A) return null;
        if (pan && ac.createStereoPanner) { const p = ac.createStereoPanner(); p.pan.value = Math.max(-1, Math.min(1, pan)); p.connect(A.fx); return p; }
        return A.fx;
      };
      const tone = (f, dur, type = 'sine', vol = 0.12, at = 0, to = 0, pan = 0) => {
        if (!A) return;
        const t = ac.currentTime + at, os = ac.createOscillator(), g = ac.createGain();
        os.type = type; os.frequency.setValueAtTime(f, t); if (to) os.frequency.exponentialRampToValueAtTime(to, t + dur);
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        os.connect(g); g.connect(out(pan)); os.start(t); os.stop(t + dur + 0.05);
      };
      const noise = ({ dur = 1, type = 'bandpass', f = 1000, f2 = 0, q = 1, vol = 0.05, at = 0, pan = 0, att = 0.05 }) => {
        if (!A) return;
        const t = ac.currentTime + at, s = ac.createBufferSource(), fl = ac.createBiquadFilter(), g = ac.createGain();
        s.buffer = A.nbuf; s.loop = true; fl.type = type; fl.Q.value = q; fl.frequency.setValueAtTime(f, t);
        if (f2) fl.frequency.exponentialRampToValueAtTime(f2, t + dur);
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + att); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        s.connect(fl); fl.connect(g); g.connect(out(pan)); s.start(t, Math.random()); s.stop(t + dur + 0.05);
      };
      // the falling three notes, from far below (near 0) to close (near 1)
      const fall3 = (near, dry = false) => {
        if (!A) return;
        const lpf = ac.createBiquadFilter(); lpf.type = 'lowpass'; lpf.frequency.value = 380 + near * 4200;
        const bus = ac.createGain(); bus.gain.value = 0.02 + near * 0.11; bus.connect(lpf); lpf.connect(A.fx); if (!dry) lpf.connect(A.echo);
        [784, 659.3, 523.3].forEach((f, i) => {
          const t = ac.currentTime + i * 0.42, os = ac.createOscillator(), o2 = ac.createOscillator(), g = ac.createGain();
          os.type = 'sine'; o2.type = 'triangle'; os.frequency.value = f; o2.frequency.value = f * 2.003;
          g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(1, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.3);
          const g2 = ac.createGain(); g2.gain.value = 0.25; os.connect(g); o2.connect(g2); g2.connect(g); g.connect(bus);
          os.start(t); o2.start(t); os.stop(t + 1.4); o2.stop(t + 1.4);
        });
      };
      const quiet = on => { if (!A) return; A.quiet = on; A.master.gain.setTargetAtTime(on ? 0.0001 : 0.9, ac.currentTime, on ? 0.035 : 0.05); };
      const K = {
        chime: n => { const f = [659.3, 784, 880, 987.8, 1046.5, 1174.7][n % 6]; tone(f, 1.1, 'sine', 0.08); tone(f * 1.5, 0.9, 'sine', 0.03, 0.05); },
        wrong: () => { tone(233, 1.1, 'sawtooth', 0.045, 0, 180); tone(329.6, 1.1, 'sine', 0.05, 0.02, 311); noise({ dur: 0.7, type: 'lowpass', f: 300, vol: 0.12 }); },
        slip: () => { tone(330, 1.2, 'sawtooth', 0.05, 0, 45); tone(165, 1.4, 'sine', 0.09, 0, 30); },
        warn: () => tone(98, 0.9, 'sine', 0.06, 0, 82),
        tired: () => tone(150, 0.4, 'sine', 0.06, 0, 110),
        calm: () => { tone(523.3, 1.4, 'sine', 0.035); tone(659.3, 1.4, 'sine', 0.025, 0.14); },
        warm: () => { [261.6, 329.6, 392, 523.3].forEach((f, i) => tone(f, 2.6, 'sine', 0.045, i * 0.06)); },
        tick: back => tone(back ? 1650 : 2100, 0.03, 'square', 0.01, 0, 0, 0.55),
        appear: (pan, at) => tone(1318.5, 0.6, 'sine', 0.03, at, 0, pan),
        whisper: (pan, at = 0, dur = 0) => {
          const d = dur || 0.7 + Math.random() * 0.7, f = 900 + Math.random() * 1300;
          noise({ dur: d, f, f2: f * (0.6 + Math.random() * 0.9), q: 7, vol: 0.05, at, pan, att: 0.12 });
          noise({ dur: d * 0.8, f: f * 2.1, f2: f * 1.4, q: 9, vol: 0.025, at: at + 0.05, pan, att: 0.1 });
        },
        brakes: v => {
          noise({ dur: 1.8, f: 2700, f2: 3500, q: 28, vol: 0.02 + v * 0.06, att: 0.25, pan: Math.random() - 0.5 });
          noise({ dur: 2.4, type: 'lowpass', f: 140, f2: 60, q: 1, vol: 0.15 + v * 0.35, att: 0.3 });
        },
      };
      let soundAt = 0;
      const hum = () => {
        if (!A || st.t - soundAt < 50) return; soundAt = st.t;
        const t = ac.currentTime, p = Math.min(1.4, st.pull), pr = prog();
        A.o1.frequency.setTargetAtTime(58 - pr * 7 + p * 6, t, 0.3);
        A.o2.detune.setTargetAtTime(pr * 70 + p * 45, t, 0.3); A.o3.detune.setTargetAtTime(-pr * 50 - p * 30, t, 0.3);
        A.lp.frequency.setTargetAtTime(220 + p * 900, t, 0.2); A.g.gain.setTargetAtTime(0.03 + p * 0.1 + pr * 0.02, t, 0.25);
        A.ng.gain.setTargetAtTime(Math.max(0, st.gl - 0.25) * 0.035, t, 0.1);
      };

      /* the room */
      const R = st.room, prop = c => $('.hp-' + c);
      const change = key => {
        R.changes.push(key);
        if (key === 'clock-back') R.clock = 'back';
        if (key === 'clock-stop') { R.clock = 'stop'; R.clockT = 3 * 3600 + 12 * 60; }
        if (key === 'frame-gap') $('.hp-frame [data-f="1"]').classList.add('gone');
        if (key === 'frame-gap2') $('.hp-frame [data-f="3"]').classList.add('gone');
        if (key === 'door-1') prop('door').style.setProperty('--door', '.3');
        if (key === 'door-2') prop('door').style.setProperty('--door', '.65');
        if (key === 'refl-lag') R.refl = 1;
        if (key === 'refl-freeze') { R.refl = 3; el.classList.add('refl-frozen'); }
        if (key === 'mug-move') prop('mug').classList.add('moved');
        if (key === 'mug-gone') prop('mug').classList.add('gone');
        if (key === 'coat-gone') prop('coat').classList.add('gone');
      };
      const restoreRoom = () => {
        el.querySelectorAll('.ho-props .gone, .ho-props .moved').forEach(n => n.classList.remove('gone', 'moved'));
        prop('door').style.setProperty('--door', '0'); el.classList.remove('refl-frozen');
        R.clock = 'fwd'; R.refl = 0; R.clockT = START + st.t / 1000;
      };
      const blackout = keys => {
        const len = still || calm ? 1300 : 900;
        st.black = { end: st.t + len, mid: st.t + len / 2, keys, done: false };
        el.classList.add('black', 'snap'); quiet(true);
      };
      const paintClock = () => {
        const s = R.clockT, rot = (n, a) => n && n.setAttribute('transform', `rotate(${a.toFixed(1)} 24 24)`);
        rot(hands.s, (Math.floor(s) % 60) * 6); rot(hands.m, (s / 60 % 60) * 6); rot(hands.h, (s / 3600 % 12) * 30);
      };

      /* the interface lies (labels only; the controls never do) */
      const lie = (node, txt, ms) => {
        if (!node || node._lie) return;
        node._lie = true; node.textContent = txt; node.classList.add('lie');
        later(() => { node._lie = false; node.classList.remove('lie'); node.textContent = node.dataset.t; }, ms);
      };
      const LIES = [
        () => lie($('.ho-slipm small'), 'Leaving', 800),
        () => lie($('.ho-breathm small'), pick(['Stop', 'Don’t']), 650),
        () => lie($('.ho-phase'), st.phase === 'surge' ? 'Let go' : 'It’s here', 420),
        () => lie($('.ho-name'), 'LET GO', 450),
        () => lie($('.ho-grip b'), 'STAY', 600),
        () => { st.clockLie = { end: st.t + 1100, add: 3000 + Math.floor(Math.random() * 4) * 1000 }; },
        () => { st.clockLie = { end: st.t + 1400, freeze: LEN - st.t }; },
      ];

      /* waves */
      const prog = () => Math.min(1, st.t / LEN);
      const setPhase = (ph, dur) => {
        st.phase = ph; st.pStart = st.t; st.pEnd = st.t + dur;
        const n = $('.ho-phase'); n.dataset.t = { calm: 'Quiet', build: 'It\'s coming', surge: 'Hold on' }[ph]; if (!n._lie) n.textContent = n.dataset.t;
        el.dataset.phase = ph;
      };
      const tellsFor = th => {
        const can = ['colour', 'text', 'lag', 'late', 'odd'].filter(k => (k !== 'late' || A) && (k !== 'lag' || !still) && (k !== 'odd' || th.odd));
        return shuffle(can).slice(0, D.tells);
      };
      const startWave = () => {
        const left = LEN - st.t, final = left < D.build + D.surge[1] + D.calm[1] + 1500;
        const n = D.per + (final && D.per < 4 ? 1 : 0);
        const I = (st.waves ? 0.95 : 0.8) + D.grow * prog() + Math.random() * 0.15 + (final ? 0.15 : 0);
        let nl = 0;
        if (st.waves + 1 >= D.liesFrom) { if (Math.random() < D.lies[0]) nl++; if (prog() > 0.5 && Math.random() < D.lies[1]) nl++; }
        nl = Math.min(nl, 6 - n);
        const things = shuffle(THINGS).slice(0, n + nl);
        const slots = shuffle(SLOTS);
        const dir = pick(['l', 'r', 'u']);
        const order = shuffle(things.map((th, i) => ({ th, lie: i >= n })));
        const gap = Math.min(320, D.build / (order.length + 1));
        st.wave = { I, n, got: 0, dir, final, list: order.map((x, i) => ({ th: x.th, lie: x.lie, tells: x.lie ? tellsFor(x.th) : [], key: i + 1, slot: slots[i], at: st.t + i * gap, dwell: 0, state: 'wait', node: null })) };
        st.waves++; st.offered += n; st.lies += nl; el.dataset.dir = dir;
        setPhase('build', D.build);
        say(final ? 'This one’s bigger. Ground her.' : pick(['It’s starting.', 'Something’s pulling.', 'Find something real.', 'The room is thinning.', 'It’s getting closer.']), 'warn');
        K.warn(); fall3(Math.min(1, (st.waves - 1) / Math.max(3, expect - 1)), final);
      };
      const spawn = a => {
        a.state = 'up';
        const th = a.th, T = a.tells, b = document.createElement('button'); b.type = 'button'; b.tabIndex = -1;
        b.className = 'ho-anchor' + (T.includes('colour') ? ' wc' : '') + (D.subtle && !st.tut ? ' subtle' : '');
        b.style.left = a.slot[0] + '%'; b.style.top = a.slot[1] + '%';
        const cap = T.includes('text') ? (th.bad2 && Math.random() < 0.5 ? th.bad2 : th.bad) : th.cap;
        const art = T.includes('odd') ? SVG_ODD[th.id] : SVG[th.id];
        // drawn (Nov 11): a faint thread to her that fills with the ring (ho-tether), a few motes in its own glow colour (ho-dots)
        const E = el.getBoundingClientRect(), W = E.width || innerWidth || 1, H = E.height || innerHeight || 1;
        const tx = (50 - a.slot[0]) / 100 * W, ty = (78 - a.slot[1]) / 100 * H;
        const tether = `<i class="ho-tether" style="--len:${Math.hypot(tx, ty).toFixed(0)}px;--ang:${(Math.atan2(ty, tx) * 180 / Math.PI).toFixed(1)}deg"></i>`;
        b.innerHTML = `${tether}<span class="ho-ring"></span><i class="ho-dots"></i><svg viewBox="0 0 48 48" aria-hidden="true">${art}</svg><b>${a.key}</b><small>${esc(th.sense)}</small><em>${esc(cap)}</em>`;
        b.setAttribute('aria-label', `${th.sense}: ${cap} (key ${a.key})`);
        // every real one pulses in step; a lagging one is out of step
        const now = (window.performance ? performance.now() : Date.now()) % 1400;
        b.style.setProperty('--ph', `${-now + (T.includes('lag') ? (D.subtle ? 300 : 520) : 0)}ms`);
        anchorsEl.appendChild(b); a.node = b;
        const pan = (a.slot[0] - 50) / 50, late = T.includes('late');
        const at = late ? (D.subtle ? 0.28 : 0.45) : 0, p = late ? -pan : pan;
        th.id === 'voice' ? K.whisper(p, at, 0.5) : K.appear(p, at);
      };
      const grab = a => {
        if (a.state !== 'up') return;
        if (st.tut) { // practice: no slips, no sting, no wrong sound
          if (a.lie) {
            a.state = 'lured'; a.node.querySelector('em').textContent = a.th.bad; a.node.classList.add('lured', 'wc');
            const n = a.node; later(() => n.remove(), 1100); say('That one was false. See the bone-white glow? Take the pink one.', 'warn');
            return;
          }
          a.state = 'got'; a.node.classList.add('got'); const n = a.node; later(() => n.remove(), 900);
          motesAt(a.slot[0], a.slot[1], 6, 'warm', 0, -60);
          say(a.th.say, 'good'); K.chime(0); if (tp && tp.kind === 'anchor') tp.ok();
          return;
        }
        if (a.lie) {
          a.state = 'lured'; st.lured++; st.slip += D.lure; st.kick = 0.45; st.breath = Math.max(0, st.breath - 12);
          a.node.querySelector('svg').innerHTML = SVG_ODD[a.th.id] || SVG[a.th.id]; a.node.querySelector('em').textContent = a.th.bad;
          a.node.classList.add('lured', 'wc'); const n = a.node; later(() => n.remove(), 1100);
          motesAt(a.slot[0], a.slot[1], 7, 'flake', 0, 90);
          el.classList.remove('sting'); void el.offsetWidth; el.classList.add('sting'); later(() => el.classList.remove('sting'), 500);
          say(a.th.lie, 'bad'); K.wrong();
          return;
        }
        a.state = 'got'; st.wave.got++; st.anchors++; st.slip = Math.max(0, st.slip - 6);
        a.node.classList.add('got'); const n = a.node; later(() => n.remove(), 900);
        { const E = el.getBoundingClientRect(), W = E.width || innerWidth || 1, H = E.height || innerHeight || 1; motesAt(a.slot[0], a.slot[1], 8, 'warm', (50 - a.slot[0]) / 100 * W, (74 - a.slot[1]) / 100 * H); }
        say(a.th.say, 'good'); K.chime(st.wave.got - 1);
      };
      const drop = a => {
        if (a.state === 'up') { a.node.classList.add(a.lie ? 'faded' : 'lost'); const n = a.node; later(() => n.remove(), 700); }
        if (!a.lie) { st.missed++; st.slip += 6; }
        a.state = 'lost';
      };
      const missAll = () => { if (st.wave) st.wave.list.forEach(a => { if (a.state === 'up' || a.state === 'wait') drop(a); }); };
      const endWave = () => {
        missAll(); st.wave = null; anchorsEl.querySelectorAll('.ho-anchor:not(.got):not(.lured)').forEach(n => n.remove());
        if (LEN - st.t < 1200) return setPhase('calm', LEN - st.t + 50);
        setPhase('calm', rnd(D.calm) * (1 - 0.15 * prog()));
        say(pick(['It passed. Breathe.', 'Quiet again. Let go, breathe.', 'Still here.', 'It passed. For now.']), ''); K.calm();
        const keys = PLAN[st.plan++];
        if (keys) st.change = { at: st.t + (keys[0] === 'BLACK' ? 1000 : rnd([1200, 2600])), keys };
        if (st.waves >= 2 && Math.random() < (prog() > 0.5 ? 0.8 : 0.5)) st.ghostAt = st.t + rnd([1600, 2600]);
      };
      const slipNow = () => {
        st.slips++; st.slip = 25; K.slip();
        el.classList.remove('slipped'); void el.offsetWidth; el.classList.add('slipped'); later(() => el.classList.remove('slipped'), 1300);
        motesAt(50, 70, 10, 'flake', 0, 120);
        if (st.slips >= D.maxSlips) return finish(false);
        say(D.maxSlips - st.slips === 1 ? 'She almost went. Once more and she’s gone.' : 'She slipped. Pull her back.', 'bad');
      };

      /* one frame */
      let tearAt = 0, tickS = Math.floor(R.clockT);
      const step = dt => {
        st.t += dt;
        const w = st.wave, k = Math.min(1, (st.t - st.pStart) / Math.max(1, st.pEnd - st.pStart));
        const fac = w ? 1 - 0.5 * (w.got / w.n) : 1;
        let target, gl;
        if (st.phase === 'calm') { target = 0.1 + 0.05 * Math.sin(st.t / 700); gl = 0.04; }
        else if (st.phase === 'build') { target = (0.15 + (0.5 * w.I - 0.15) * k * k) * (0.6 + 0.4 * fac); gl = 0.12 + 0.6 * k; }
        else { const env = 0.75 + 0.25 * Math.sin(Math.PI * k); target = w.I * env * fac; gl = 0.65 + 0.35 * env * (0.5 + 0.5 * fac); }
        st.kick = Math.max(0, st.kick - dt / 1600);
        st.pull += (target + st.kick - st.pull) * Math.min(1, dt / 120);
        st.gl = Math.min(1, gl + Math.max(0, st.slip - 60) / 200);
        st.dark = Math.min(1, 0.1 + 0.55 * prog() + 0.3 * Math.min(1, st.pull) + 0.1 * st.slip / 100);
        // breath
        const h = holding();
        if (h) { st.breath -= D.drain * dt / 1000; if (st.breath <= 0 && !st.tired) { st.breath = 0; st.tired = true; say('Out of breath. Let go in the quiet.', 'bad'); K.tired(); } st.breath = Math.max(0, st.breath); }
        else { st.breath = Math.min(100, st.breath + D.regen * dt / 1000); if (st.tired && st.breath >= 30) st.tired = false; }
        // slip
        const grip = h ? (st.tired ? 0.1 : 0.62) : 0;
        st.slip += Math.max(0, st.pull - grip - 0.2) * D.k * dt / 1000;
        if (st.phase === 'calm' && !h) st.slip = Math.max(0, st.slip - 4 * dt / 1000);
        if (st.slip >= 100) { slipNow(); if (st.over) return; }
        // anchors: spawn, dwell, gone at the peak
        if (w) {
          const peaked = st.phase === 'surge' && k >= 0.5;
          const spotsNow = [...pts.values()]; if (space && mouse) spotsNow.push(mouse);
          w.list.forEach(a => {
            if (a.state === 'wait' && st.t >= a.at && !peaked) spawn(a);
            if (a.state !== 'up') return;
            if (peaked) return drop(a);
            let on = false;
            if (h) { const r = a.node.getBoundingClientRect(), m = 12; on = spotsNow.some(p => p.x >= r.left - m && p.x <= r.right + m && p.y >= r.top - m && p.y <= r.bottom + m); }
            a.dwell = on ? a.dwell + dt : Math.max(0, a.dwell - dt * 0.5);
            a.node.style.setProperty('--d', Math.min(1, a.dwell / D.dwell).toFixed(3));
            a.node.classList.toggle('touch', on);
            if (a.dwell >= D.dwell) grab(a);
          });
          // silence right before the surge
          if (st.phase === 'build' && !w.hushed && st.t >= st.pEnd - 650) { w.hushed = true; el.classList.add('hush'); if (!st.black) quiet(true); }
          // the frame where she isn't there (once a run)
          if (st.phase === 'surge' && !st.missDone && k >= 0.55 && (st.waves >= st.missWave || w.final)) {
            st.missDone = true; st.gone = { end: st.t + (still || calm ? 700 : 170) }; el.classList.add('vanish');
          }
          if (st.phase === 'build' && st.t >= st.whisperAt) { st.whisperAt = st.t + rnd([600, 1500]); K.whisper(Math.random() < 0.5 ? -0.85 : 0.85); }
        } else if (prog() > 0.4 && st.t >= st.whisperAt) { st.whisperAt = st.t + rnd([5000, 9000]); K.whisper(Math.random() < 0.5 ? -0.9 : 0.9); }
        if (st.gone && st.t >= st.gone.end) { st.gone = null; el.classList.remove('vanish'); }
        // the room changes, late
        if (st.change && st.t >= st.change.at) { const c = st.change; st.change = null; if (c.keys[0] === 'BLACK') blackout(c.keys.slice(1)); else c.keys.forEach(change); }
        if (st.black) {
          if (!st.black.done && st.t >= st.black.mid) { st.black.done = true; st.black.keys.forEach(change); }
          if (st.t >= st.black.end) { st.black = null; el.classList.remove('black'); quiet(false); later(() => el.classList.remove('snap'), 400); }
        }
        // the wall clock
        const pulling = st.phase !== 'calm';
        if (R.clock === 'fwd' || (R.clock === 'back' && !pulling)) R.clockT += dt / 1000;
        else if (R.clock === 'back') R.clockT -= dt / 1000 * 3;
        const s = Math.floor(R.clockT); if (s !== tickS) { tickS = s; if (R.clock !== 'stop' && !A?.quiet) K.tick(R.clock === 'back' && pulling); }
        // the interface lies (from the first wave on, more often later)
        if (st.waves >= 1 && st.t >= st.lieAt) { st.lieAt = st.t + rnd([2600, 6500]) * (1 - 0.45 * prog()); pick(LIES)(); }
        if (st.clockLie && st.t >= st.clockLie.end) st.clockLie = null;
        // a caption types itself, then takes it back
        if (st.ghostAt && st.t >= st.ghostAt && st.phase === 'calm' && !st.ghost) { st.ghostAt = 0; st.ghost = { s: GHOST[st.ghosts++ % GHOST.length], i: 0, mode: 'type', acc: 0 }; if (st.ghosts === 1) GHOST.sort(() => Math.random() - 0.5); }
        if (st.ghost) {
          const g = st.ghost; g.acc += dt;
          if (g.mode === 'type') { while (g.acc >= 60 && g.i < g.s.length) { g.acc -= 60; g.i++; } if (g.i >= g.s.length) { g.mode = 'hold'; g.acc = 0; } }
          else if (g.mode === 'hold') { if (g.acc >= 1100) { g.mode = 'del'; g.acc = 0; } }
          else { while (g.acc >= 28 && g.i > 0) { g.acc -= 28; g.i--; } if (g.i <= 0) st.ghost = null; }
          const gn = $('.ho-ghost'); gn.textContent = st.ghost ? g.s.slice(0, g.i) : ''; gn.classList.toggle('on', !!st.ghost);
        }
        // the HOLD pill drifts while it pulls
        if (!still) {
          const dm = pulling ? 30 + 50 * prog() : 0;
          st.drift.x = Math.max(-dm, Math.min(dm, st.drift.x * (pulling ? 1 : 0.96) + (pulling ? (Math.random() - 0.5) * dt * 0.08 : 0)));
          st.drift.y = Math.max(-dm / 3, Math.min(dm / 3, st.drift.y * (pulling ? 1 : 0.96) + (pulling ? (Math.random() - 0.5) * dt * 0.03 : 0)));
        }
        // phases
        if (st.t >= st.pEnd) {
          if (st.phase === 'calm') { if (LEN - st.t < D.build + D.surge[1] + 600) { if (st.t >= LEN) return finish(true); } else startWave(); }
          else if (st.phase === 'build') {
            setPhase('surge', rnd(D.surge)); el.classList.remove('hush'); if (!st.black) quiet(false);
            K.brakes(Math.min(1, st.waves / Math.max(3, expect))); say(pick(['Hold on.', 'Hold on. Don’t let go.', 'Hold.', 'Stay.']), 'warn');
          }
          else endWave();
        }
        if (st.phase === 'calm' && st.t >= LEN) return finish(true);
        // the lamp flickers while it pulls (more as the glitch grows); never in the silence; soft dims only with Reduce flashes /
        // reduced motion (drawn, Nov 11)
        if (V.flick < 1 && st.t >= V.flickEnd) V.flick = 1;
        if (st.t >= V.flickAt) {
          const hushed = el.classList.contains('hush');
          V.flickAt = st.t + (pulling ? 260 + Math.random() * 900 * (1.2 - st.gl) : 2500 + Math.random() * 6000 * (1 - prog() * 0.6));
          if (!hushed && (pulling || prog() > 0.35) && Math.random() < (pulling ? 0.35 + st.gl * 0.5 : 0.25)) {
            const soft = calm || still; V.flick = soft ? 0.72 + Math.random() * 0.12 : 0.25 + Math.random() * 0.35; V.flickEnd = st.t + (soft ? 420 : 50 + Math.random() * 120);
          }
        }
        if (el.classList.contains('hush')) V.flick = 1;
        // tears (not with reduced motion or Performance)
        if (!still && !perf && st.t - tearAt > 90) {
          tearAt = st.t;
          bands.forEach(b => {
            if (st.gl < 0.4 || Math.random() < 0.3 || el.classList.contains('hush')) { b.style.opacity = 0; return; }
            const top = Math.random() * 92, hh = 1.5 + Math.random() * 9 * st.gl;
            b.style.clipPath = `inset(${top}% 0 ${Math.max(0, 100 - top - hh)}% 0)`;
            b.style.transform = `translateX(${((Math.random() - 0.5) * 70 * st.gl).toFixed(1)}px)`; b.style.opacity = 1;
          });
        }
      };
      const paint = () => {
        const h = holding();
        el.style.setProperty('--g', st.gl.toFixed(3)); el.style.setProperty('--pull', Math.min(1, st.pull).toFixed(3)); el.style.setProperty('--slip', Math.min(1, st.slip / 100).toFixed(3));
        el.style.setProperty('--dark', st.dark.toFixed(3));
        el.style.setProperty('--flick', V.flick.toFixed(2));
        el.style.setProperty('--k', (st.phase === 'build' ? Math.min(1, (st.t - st.pStart) / Math.max(1, st.pEnd - st.pStart)) : st.phase === 'surge' ? 1 : 0).toFixed(3));
        el.classList.toggle('gl-2', st.gl > 0.35); el.classList.toggle('gl-3', st.gl > 0.7);
        el.classList.toggle('holding', h); el.classList.toggle('tired', st.tired);
        $('.ho-slipm i').style.width = `${Math.min(100, st.slip)}%`;
        $('.ho-breathm i').style.width = `${st.breath}%`;
        $('.ho-pull i').style.height = `${Math.min(100, st.pull / 1.4 * 100)}%`;
        $('.ho-pips').textContent = '◆'.repeat(Math.max(0, D.maxSlips - st.slips)) + '◇'.repeat(Math.min(D.maxSlips, st.slips));
        let ms = Math.max(0, LEN - st.t);
        if (st.clockLie) ms = st.clockLie.freeze ?? Math.min(LEN, ms + st.clockLie.add);
        const left = Math.ceil(ms / 1000); $('.ho-clock').textContent = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`;
        $('.ho-clock').classList.toggle('lie', !!st.clockLie);
        let x = 0, y = 0;
        if (!still) {
          const d = el.dataset.dir, p = Math.min(1.2, st.pull);
          x = d === 'l' ? -p * 26 : d === 'r' ? p * 26 : 0; y = d === 'u' ? -p * 18 : 0;
          her.style.transform = `translate(calc(-50% + ${x.toFixed(1)}px), ${y.toFixed(1)}px)`;
          const g = $('.ho-grip'); g.style.setProperty('--dx', `${st.drift.x.toFixed(1)}px`); g.style.setProperty('--dy', `${st.drift.y.toFixed(1)}px`);
        }
        // her reflection: in step, then half a second late, then not moving at all
        st.hist.push({ t: st.t, x, y }); while (st.hist.length > 2 && st.hist[0].t < st.t - 2000) st.hist.shift();
        if (R.refl < 3) {
          const lag = [90, 550, 1200][R.refl], s = st.hist.find(q => q.t >= st.t - lag) || st.hist[0];
          st.reflAt = { x: s.x, y: s.y };
        }
        if (refl) refl.style.transform = `translate(${(st.reflAt.x * 0.35).toFixed(1)}px, ${(st.reflAt.y * 0.35).toFixed(1)}px) scaleX(-1)`;
        paintClock();
        hum();
      };
      let last = 0, raf = 0;
      const tick = now => {
        const dt = Math.min(100, now - (last || now)); last = now;
        if (!st.paused && !st.over) { st.tut ? tutStep(dt) : step(dt); if (!st.over) paint(); }
        if (!st.over) raf = requestAnimationFrame(tick);
      };

      /* the end */
      const finish = won => {
        if (st.over) return; st.over = true; cancelAnimationFrame(raf); pts.clear(); space = false;
        const quit = won === 'quit'; won = won === true;
        if (st.wave) missAll();
        st.ghost = null; $('.ho-ghost').textContent = ''; anchorsEl.innerHTML = '';
        el.classList.remove('black', 'hush', 'vanish', 'sting', 'gl-2', 'gl-3', 'holding', 'tired');
        const ratio = st.offered ? st.anchors / st.offered : 1;
        const grade = !won ? 'C' : st.slips === 0 && ratio >= 0.85 && st.lured === 0 ? 'S' : st.slips <= 1 && ratio >= 0.6 && st.lured <= 1 ? 'A' : 'B';
        const res = { won, grade, slips: st.slips, anchors: st.anchors, offered: st.offered, missed: st.missed, held: Math.round(Math.min(st.t, LEN) / 1000), quit, lured: st.lured, lies: st.lies, tutorial: tutRes };
        if (A) {
          const t = ac.currentTime; A.master.gain.cancelScheduledValues(t); A.ng.gain.setTargetAtTime(0, t, 0.05);
          if (won) { A.master.gain.setTargetAtTime(0.9, t, 0.05); A.o2.detune.setTargetAtTime(0, t, 0.2); A.o3.detune.setTargetAtTime(0, t, 0.2); A.o1.frequency.setTargetAtTime(58, t, 0.2); A.g.gain.setTargetAtTime(0.02, t, 0.4); K.warm(); }
          else { A.g.gain.setTargetAtTime(0.0001, t, 0.08); A.master.gain.setTargetAtTime(0.9, t, 0.05); if (!quit) later(() => fall3(1, true), 900); }
        }
        if (won) { el.classList.add('snap'); restoreRoom(); paintClock(); later(() => el.classList.remove('snap'), 60); }
        el.classList.add(won ? 'won' : 'lost'); el.style.setProperty('--dark', won ? '0' : '1'); el.style.setProperty('--flick', '1'); el.style.setProperty('--k', '0');
        if (won && !quit) later(() => motesAt(50, 82, 14, 'warm', 0, -220), 400); // drawn: held = warm motes rise
        const end = $('.mg-end');
        const show = () => {
          if (!el.isConnected) return;
          end.hidden = false;
          end.innerHTML = `<p class="ho-end-head">${won ? 'You held on.' : quit ? 'You let go.' : 'You slipped.'}</p><b class="mg-grade">${grade}</b>
            <dl><dt>Anchors</dt><dd><span data-n="${st.anchors}">${still ? st.anchors : 0}</span> / ${st.offered}</dd><dt>False ones taken</dt><dd><span data-n="${st.lured}">${still ? st.lured : 0}</span></dd><dt>Slips</dt><dd><span data-n="${st.slips}">${still ? st.slips : 0}</span></dd><dt>Held</dt><dd><span data-n="${res.held}">${still ? res.held : 0}</span>s</dd></dl>
            <p class="mg-end-say">${won ? 'The light is just a light. The clock ticks forward. She’s still here.' : 'The room is empty. It looks like it always was.'}</p><button type="button">Continue</button>`;
          // drawn (Nov 11): the numbers count up, slowly
          if (!still) [...end.querySelectorAll('[data-n]')].forEach((n, k) => { const v = +n.dataset.n || 0; for (let f = 1; f <= 16; f++) later(() => { n.textContent = Math.round(v * f / 16); }, 900 + k * 220 + f * 55); });
          end.querySelector('button').focus();
          end.querySelector('button').onclick = () => { cleanup(); o.onDone?.(res); done(res); };
        };
        quit ? show() : later(show, 1700);
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
        const T = window.FemcTutorial; if ((T && T.open() && (e.key === 'Escape' || T.blocking())) || (st.tut && e.key === 'Escape')) return; // the tutorial has the keys
        if (e.key === 'Escape') { e.preventDefault(); pause(!st.paused); return; }
        if (st.paused) return;
        if (e.key === ' ') { e.preventDefault(); space = true; return; }
        if (/^[1-6]$/.test(e.key) && st.wave) {
          e.preventDefault();
          const a = st.wave.list.find(x => x.key === +e.key && x.state === 'up');
          if (!a) return;
          if (holding()) grab(a); else say('Hold on first (Space), then ground her.', 'warn');
        }
      };
      const keyUp = e => { if (e.key === ' ') { space = false; if (el.isConnected) e.preventDefault(); } };
      const cleanup = () => {
        cancelAnimationFrame(raf); timers.forEach(clearTimeout); timers.clear();
        window.removeEventListener('keydown', key, true); window.removeEventListener('keyup', keyUp, true);
        window.removeEventListener('blur', blur); window.removeEventListener('keydown', skipT, true);
        try { ac && ac.close(); } catch (e) {} el.remove();
      };
      $('.mg-pause').onclick = e => { const b = e.target.dataset.mg; if (b === 'resume') pause(false); if (b === 'howto') howTo(); if (b === 'quit') { pause(false); finish('quit'); } };
      window.addEventListener('keydown', key, true); window.addEventListener('keyup', keyUp, true);

      /* the first-time tutorial: a calm practice room (st.tut), each action done once */
      const FACE = `${base()}assets/femc/portraits/solar-runners/neutral.webp`;
      const practice = kind => new Promise(ok => { tp = { kind, acc: 0, ok: () => { tp = null; ok(); } }; });
      const tutWave = list => {
        anchorsEl.innerHTML = '';
        st.wave = { I: 0, n: list.length, got: 0, dir: 'u', final: false, list: list.map((x, i) => ({ th: THINGS.find(t => t.id === x.id), lie: !!x.lie, tells: x.lie ? ['colour', 'text'] : [], key: i + 1, slot: x.slot, at: 0, dwell: 0, state: 'wait', node: null })) };
        st.wave.list.forEach(spawn);
      };
      const tutStep = dt => {
        const h = holding();
        if (h) st.breath = Math.max(0, st.breath - D.drain * dt / 1000); else st.breath = Math.min(100, st.breath + D.regen * 1.5 * dt / 1000);
        st.tired = false; st.dark = 0; st.gl = 0;
        const want = tp && tp.kind === 'hold' ? 0.45 : 0.06;
        st.pull += (want - st.pull) * Math.min(1, dt / 300);
        if (tp && tp.kind === 'hold' && h && (tp.acc += dt) >= 1200) tp.ok();
        if (tp && tp.kind === 'breathe' && !h && st.breath >= 95) tp.ok();
        const w = st.wave;
        if (w) w.list.forEach(a => {
          if (a.state !== 'up') return;
          const spots = [...pts.values()]; if (space && mouse) spots.push(mouse);
          let on = false;
          if (h) { const r = a.node.getBoundingClientRect(), m = 12; on = spots.some(p => p.x >= r.left - m && p.x <= r.right + m && p.y >= r.top - m && p.y <= r.bottom + m); }
          a.dwell = on ? a.dwell + dt : Math.max(0, a.dwell - dt * 0.5);
          a.node.style.setProperty('--d', Math.min(1, a.dwell / D.dwell).toFixed(3)); a.node.classList.toggle('touch', on);
          if (a.dwell >= D.dwell) grab(a);
        });
      };
      const tutEnd = () => { // the real run starts fresh
        st.tut = false; tp = null; el.classList.remove('tut');
        Object.assign(st, { pull: 0, slip: 0, breath: 100, tired: false, kick: 0, anchors: 0, offered: 0, missed: 0, lured: 0, lies: 0, wave: null, dark: 0, gl: 0 });
        anchorsEl.innerHTML = ''; pts.clear(); space = false;
      };
      const tutSteps = replay => [
        { target: null, say: 'Some nights the room starts to forget me. This is how I stay. Practice first: nothing happens in here.' },
        { target: '.ho-grip', say: 'When it pulls, <b>hold on</b>: hold the mouse button, a finger, or Space. Try it now.', wait: replay ? 'click' : () => practice('hold') },
        { target: '.ho-meters', say: 'If the pull gets stronger than my grip, <b>Slipping</b> fills. Full = a slip. The diamonds are how many I can take.', before: () => { if (!replay) st.slip = 45; }, after: () => { if (!replay) st.slip = 0; } },
        { target: '.ho-breathm', say: 'Holding costs <b>breath</b>. In the quiet, let go and it comes back. Let go now and watch it fill.', before: () => { if (!replay) st.breath = Math.min(st.breath, 35); }, wait: replay ? 'click' : () => practice('breathe') },
        { target: replay ? null : () => st.wave && st.wave.list[0].node, before: () => { if (!replay) tutWave([{ id: 'lamp', slot: [62, 40] }]); },
          say: 'When it pulls, real things glow. <b>While holding</b>, rest on one until its ring fills (or press its number).', wait: replay ? 'click' : () => practice('anchor') },
        { target: null, before: () => { if (!replay) tutWave(shuffle([{ id: 'mug', slot: [32, 40] }, { id: 'photo', slot: [68, 40], lie: true }])); },
          say: 'Not all of them are real. A false one glows <b>bone-white</b>, has the wrong words, or pulses out of step. Take only the real one.', wait: replay ? 'click' : () => practice('anchor') },
        { target: '.ho-clock', say: 'Make it to the end and I’m held. Esc pauses, and How to play shows this again. It starts quiet.' },
      ];
      const howTo = () => {
        tutLib().then(T => {
          if (!T || !st.paused || st.over) return;
          $('.mg-pause').hidden = true;
          T.run(el, { steps: tutSteps(true), who: 'Solar', face: FACE, calm, perf, replay: true }).then(() => { if (st.paused && !st.over) { $('.mg-pause').hidden = false; $('.mg-pause button').focus(); } });
        });
      };

      /* the title card: held 2.6 s (click / any key skips), then the quiet */
      const note = ['Psychological horror', calm ? 'Flashes reduced' : 'Flashing lights', still ? 'Reduced motion' : '', o.mute ? '' : 'Best with sound'].filter(Boolean).join(' · ');
      const tt = document.createElement('div'); tt.className = 'ho-title';
      tt.innerHTML = `<b data-t="HOLD ON">HOLD ON</b><small>Keep her here.</small><img src="${ART('title')}" alt="" onerror="this.remove()"><p class="ho-note">${esc(note)}</p>`;
      el.appendChild(tt);
      const begin = () => {
        if (st.begun || !el.isConnected) return; st.begun = true; window.removeEventListener('keydown', skipT, true);
        tt.classList.add('out'); later(() => tt.remove(), 450);
        audio(); el.dataset.dir = 'u';
        const start = () => {
          if (st.over || !el.isConnected) return;
          tutEnd(); setPhase('calm', 3200);
          say('Quiet for now. Let go and breathe. When it pulls, hold on.', '');
          paint(); if (!raf) raf = requestAnimationFrame(tick);
        };
        st.tut = true; paint(); raf = requestAnimationFrame(tick); // the loop runs the calm practice room until the real start
        tutP.then(T => {
          if (!T || !el.isConnected || !T.should('holdon', o.tutorial)) return start();
          el.classList.add('tut');
          T.run(el, { id: 'holdon', steps: tutSteps(false), who: 'Solar', face: FACE, calm, perf }).then(r => { tutRes = r; start(); });
        });
      };
      const skipT = e => { if (e.key !== 'Escape') { e.preventDefault(); begin(); } };
      tt.onclick = begin; window.addEventListener('keydown', skipT, true); later(begin, 2600);
      paint();
    });
  }
  return { play, THINGS, DIFF, PLAN, state: () => cur };
})();
