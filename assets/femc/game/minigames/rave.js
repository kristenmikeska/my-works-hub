/* FEMC epilogue minigame: Peak (Nov 11 2026). A DEMO: not in the story (try it at mockups/minigames/index.html once the main
   session adds its card; the page and scene.js aren't touched here). HOAX: an underground club, a Saturday that runs till the
   lights come up, Solar and her crew (Cherry, Jihoon, Hyunsuk, Asahi, Jaehyuk, Junkyu) among the alternative kids. Fun, not
   heavy: nothing of the novel's plot is told, nothing names anything but the music, the heat and the water.

   FemcRave.play({ host, mute, difficulty, calm, perf, tutorial, seed, onDone }) -> Promise<result>
     host        element to draw into (default document.body; a full-screen overlay is added inside it)
     mute        no audio at all (the game runs on its own clock; the beat is still visible: lights, receptors, crowd)
     difficulty  'easy' | 'normal' | 'hard' (BPM 118 / 124 / 130; arrow fall time 1.6 / 1.35 / 1.15 s; note density x0.75 / 1.1 /
                 1.6, and hard lifts every dancing section one step busier (normal and hard add doubles at the peak); crew drift .011 / .017 / .024 a second; thirst x1.1 / 1.4 / 1.55; crashes
                 allowed 3 / 3 / 2; lanes swap every 4 / 4 / 2 bars at the peak; timing wobble ±18 / 28 / 38%; strangers in the
                 find crowd 7 / 9 / 12, easy rings the lost friends; default 'normal')
     calm, perf  Reduce flashes / Performance; default: the game's settings (FemcGame.settings().calm / .perf), else off
     tutorial    true = always show the first-time tutorial, false = never, else only the first time (FemcTutorial.seen('rave'))
     seed        number: the same chart, hugs and drift every time (tests); default random
     onDone      called with the result too
   result = { won, grade: 'S' | 'A' | 'B' | 'C', ending: 'all' | 'some' | 'early' | 'quit', quit, difficulty, crew (0-6 at the
              end), found (ids still with her), missing (ids lost in the crowd), score, accuracy (0-100), perfect, good, ok, miss,
              maxCombo, love (0-100 at the end), lovePeak, hugs, hugsMissed, pulled (friends pulled back), wrong (strangers
              grabbed), waters, crashes, swaps, secs, tutorial: 'done' | 'skipped' | 'seen' }
     won = she made it to 5 a.m. (not quit, not crashed out). ending 'all' = all six at the lights (the best one).

   How it plays (about 3.6-4 minutes; the track is made here in Web Audio: kick, hats, claps, offbeat bass, chord stabs, an arp,
   pads, risers; 118 bars: doors → groove → find → build → drop → find → breakdown → groove → find → the long build → THE PEAK
   (with a two-bar breakdown and a find in the middle) → comedown → last call → 5 a.m.):
     Dance       arrows fall down four lanes to the lit receptors; hit each as it lands: D F J K or ← ↓ ↑ →, or tap / click its
                 lane. PERFECT ±45 ms, GOOD ±90, OK ±135, else MISS (all × the peak's wobble). Ghost taps are free.
     Love        the "Love everyone" meter (starts 30, slowly cools by itself): hits and every 25-combo fill it, hugs fill it most, pulling a friend back
                 helps; misses (−2.5), grabbing a stranger and crashing take from it. 85+ = the whole room glows.
     Hugs        a friend or a stranger dances up (a bubble beside the lanes, about three beats): Space / H or tap it. Within
                 90 ms of a beat = a perfect hug (more love). A hug from a drifting friend brings them right back.
     Crew        the strip under the meters: each friend drifts out from Solar while you dance (faster at drops and the peak);
                 drift full = lost in the crowd. Between phrases ("Find them", two bars, no arrows) the crowd opens: lost and
                 drifting friends are in it among strangers; click / tap them, or ← → (D F / J K) and Space / Enter. A stranger
                 costs a little love and a funny line. Lost friends left in the crowd at the last call stay lost.
     Water       thirst climbs as you dance (fastest at the peak). W or the Water button steps off the floor for two bars and
                 empties it. Best when the music breathes (the button glows: a breakdown, a find, or two bars with almost no
                 arrows): arrows then are sat out. Any other time the arrows in those two bars are misses. Thirst full = you crash:
                 sat on the stairs for two bars, love -15, combo gone, and the run dims (each crash darker). Too many = the night
                 ends early.
     The peak    the lights go fully psychedelic and the controls bend: lanes swap places (a "the floor tilts" warning a bar
                 ahead; keys and taps follow the ARROW, not the spot), notes leave trails, the timing window wobbles (the receptor
                 ring shows it: big = loose, small = tight).
     5 a.m.      the house lights come up; you count your crew. All six = the best ending; a funny line for each one missing.
   Grade: S all six, no crash, accuracy 88+, love 70+; A five or more, at most one crash, accuracy 75+; B made it to 5 a.m.;
   C crashed out or quit.
   Title card ~1.8 s (click / any key skips). Esc pauses (Resume / How to play / Quit); the game also pauses when the window loses
   focus. Settings: reduced motion = no slides, shakes or trails, lanes swap half as often and snap, half the wobble, steady
   lights; Reduce flashes (calm) = no strobe or hit flashes, slow colour drift instead of the wild cycle; Performance = fewer
   beams, no trails / blur / haze. The UI chrome is pink and black; only the club lights change colour.

   First-time tutorial (tutorial.js / FemcTutorial, loaded on demand from this folder, the shared loader below): after the title,
   Cherry talks you through a practice floor (no thirst, no drift, a soft kick): hit three arrows → the love meter → hug Junkyu →
   the crew strip → find Asahi in the crowd → step off for water → the peak's tricks → Esc / How to play. Then the real night
   starts fresh. Pause → How to play replays it as a walkthrough (Next on every step).

   Optional art (each used only if it loads; the drawn version stays under it):
     art/minigames/rave/title.webp   the title card picture (full bleed)
     art/minigames/rave/club.webp    the club behind the lights (dark; it's tinted by the lights and dimmed by crashes)
     art/minigames/rave/solar.webp   Solar dancing, transparent, feet at the bottom, drawn behind the lanes
   Crew faces: portraits/<id>-hoax(-party)/<face>.webp (Solar, Cherry, Jihoon: the party sets; the others their HOAX sets);
   a lettered circle if one is missing. Strangers are drawn.
   Test hooks: FemcRave.state() (the live state), .ctl() ({ advance(sec) (only with __sim), press(lane), hug(), water(),
   pick(i), pickFriends(), breather(), pause(on), quit(), cont(), skip() }), SECTIONS, DIFF, CREW. */
window.FemcRave = (() => {
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const base = () => (window.FemcGame && window.FemcGame.base) || (document.querySelector('script[src*="minigames/rave"]')?.src || '').split('assets/')[0] || '';
  const reduced = typeof matchMedia === 'function' ? matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const perfNow = () => (typeof performance !== 'undefined' && performance.now ? performance.now() : Date.now());
  const ART = id => `${base()}assets/femc/game/art/minigames/rave/${id}.webp`;
  const FACES = { solar: 'solar-hoax-party', cherry: 'cherry-hoax-party', jihoon: 'jihoon-hoax-party', hyunsuk: 'hyunsuk-hoax', asahi: 'asahi-hoax', jaehyuk: 'jaehyuk-hoax', junkyu: 'junkyu-hoax' };
  const face = (id, f = 'happy') => `${base()}assets/femc/portraits/${FACES[id]}/${f}.webp`;
  const mulberry = a => () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };

  // the shared first-time tutorial (tutorial.js + .css, loaded once from this folder)
  const tutLib = () => window.FemcTutorial ? Promise.resolve(window.FemcTutorial) : (window.FemcTutorialLoading ||= new Promise(ok => {
    const B = `${base()}assets/femc/game/minigames/tutorial`, l = document.createElement('link'), s = document.createElement('script');
    l.rel = 'stylesheet'; l.href = `${B}.css?v=1`; document.head.appendChild(l);
    s.src = `${B}.js?v=1`; s.onload = s.onerror = () => ok(window.FemcTutorial || null); document.head.appendChild(s);
  }));

  /* the crew: side / slot = where they stand on the strip (−1 left, 1 right; 1 nearest) */
  const CREW = [
    { id: 'cherry', name: 'Cherry', side: -1, slot: 1,
      hug: ['C’mere. You’re not allowed to vanish.', 'If anyone steps on your shoes I’ll end them.'],
      lost: 'Cherry went to find the bathroom. That was a while ago.', back: 'There you are. Don’t do that to me.',
      still: 'Cherry is holding your shoes.', gone: 'Cherry is outside, arguing with a vending machine. She’s winning.' },
    { id: 'jihoon', name: 'Jihoon', side: -1, slot: 2,
      hug: ['Behold. A Hug From The Almighty Hoon.', 'Sol. Sol. This Is The Song.'],
      lost: 'Jihoon got carried off by a conga line.', back: 'You Came For Me. As You Should.',
      still: 'Jihoon has lost his voice and is still talking.', gone: 'Jihoon is in the DJ booth, explaining that he is “basically also a DJ.” Security is being very patient.' },
    { id: 'hyunsuk', name: 'Hyunsuk', side: -1, slot: 3,
      hug: ['Bro. Where’d you go? Stay here.', 'Okay, this DJ is actually good.'],
      lost: 'Hyunsuk followed a guy he swears he knows.', back: 'My bad. I thought that guy went to my gym.',
      still: 'Hyunsuk is already looking up the next one.', gone: 'Hyunsuk texts at 5:12: “got adopted by a birthday party. theyre feeding me. dont wait up.”' },
    { id: 'junkyu', name: 'Junkyu', side: 1, slot: 1,
      hug: ['SOL!!! I love you!!! I love everyone here!!!', 'Is it always this fun?? Why didn’t anyone tell me!!'],
      lost: 'Junkyu is making friends. Many friends.', back: 'SOL!! I made six friends!!',
      still: 'Junkyu is asleep on your shoulder.', gone: 'Junkyu followed a balloon shaped like a dog into a different club. He is having the best night of his life.' },
    { id: 'jaehyuk', name: 'Jaehyuk', side: 1, slot: 2,
      hug: ['Found you. Water soon, okay?', 'I counted us. Everyone’s here. Keep it that way.'],
      lost: 'Jaehyuk went to get water for everyone.', back: 'I got lost getting water. Ironic.',
      still: 'Jaehyuk counts everyone twice.', gone: 'Jaehyuk took the first train home and left a napkin at coat check: DRINK WATER. TEXT WHEN HOME.' },
    { id: 'asahi', name: 'Asahi', side: 1, slot: 3,
      hug: ['I’m not hugging you. This is a lean.', 'Too many people. Good song, though.'],
      lost: 'Asahi drifted toward the speakers. Of course.', back: 'I was fine. …Thanks.',
      still: 'Asahi admits it was “fine.” High praise.', gone: 'Asahi turns up an hour later, asleep standing up next to a speaker. He says he was listening.' },
  ];
  const STRANGERS = [
    ['A girl in butterfly clips', 'Your hair is SO good. Okay bye.'],
    ['A boy in a mesh shirt', 'I don’t know you but I love you, man.'],
    ['Someone in a cow-print bucket hat', 'This song saved my life. Again.'],
    ['A tall kid with silver nails', 'Your friends are so loud. I love them.'],
    ['A girl with a glow-stick crown', 'Here. You need this more than me.'],
    ['The coat-check girl, on break', 'Five minutes. I have five minutes. Hug.'],
    ['A guy in a band tee three sizes too big', 'Do you know the DJ? Me neither!'],
    ['Somebody’s older cousin', 'Stay hydrated, little ones.'],
    ['A girl with smudged eyeliner', 'Everyone here is so nice. Why is everyone so nice.'],
  ];
  const WRONG = ['a guy holding a glow stick', 'a very confused man in a cardigan', 'a girl who says “hi??”', 'somebody’s coat on a hook', 'a stranger who hugs you anyway', 'a boy who looks like him from behind'];
  const WATER = { jaehyuk: 'Drink all of it. It’s been studied.', cherry: 'Water. Then dance. Then water.', hyunsuk: 'Bro, water. I’m not asking.', asahi: 'Here. Don’t make it weird.', junkyu: 'I got you the cold one!!', jihoon: 'Hydration Is A Royal Duty.' };

  const DIFF = {
    easy:   { bpm: 118, travel: 1.6,  dens: .75, dbl: 0,   drift: .011, thirst: 1.1, crashes: 3, lift: 0, swapBars: 4, wobble: .18, strangers: 7 },
    normal: { bpm: 124, travel: 1.35, dens: 1.1, dbl: .06, drift: .017, thirst: 1.4, crashes: 3, lift: 0, swapBars: 4, wobble: .28, strangers: 9 },
    hard:   { bpm: 130, travel: 1.15, dens: 1.6, dbl: .16, drift: .024, thirst: 1.55, crashes: 2, lift: 1, swapBars: 2, wobble: .38, strangers: 12 },
  };
  // the night: dens = arrow density (-1 none); th = thirst a second; dr = drift ×; hug = a hug every n bars; m = the mix
  const SECTIONS = [
    { id: 'intro',    label: 'Doors',         bars: 8,  dens: 0,  breather: true, th: .45, dr: .5,  hug: 0, m: { kick: 1, hat: 1, pad: 1 } },
    { id: 'grooveA',  label: 'Groove',        bars: 14, dens: 1,  th: .8,  dr: 1,   hug: 5, m: { kick: 1, hat: 2, bass: 1, clap: 1 } },
    { id: 'findA',    label: 'Find them',     bars: 2,  dens: -1, find: true, breather: true, th: .4, dr: 0, hug: 0, m: { kick: 1, hat: 2, bass: 1 } },
    { id: 'build1',   label: 'Build',         bars: 8,  dens: 1,  build: true, th: .95, dr: 1, hug: 0, m: { kick: 1, hat: 2, bass: 1, roll: 1, riser: 1 } },
    { id: 'drop1',    label: 'Drop',          bars: 14, dens: 2,  drop: true, th: 1.1, dr: 1.25, hug: 5, m: { kick: 1, hat: 3, bass: 2, clap: 1, stab: 1 } },
    { id: 'findB',    label: 'Find them',     bars: 2,  dens: -1, find: true, breather: true, th: .4, dr: 0, hug: 0, m: { kick: 1, hat: 2, bass: 1 } },
    { id: 'break',    label: 'Breakdown',     bars: 8,  dens: 0,  breather: true, th: .4, dr: .6, hug: 2, m: { hat: 1, pad: 1, arp: 1 } },
    { id: 'grooveB',  label: 'Groove',        bars: 14, dens: 2,  th: .85, dr: 1.1, hug: 5, m: { kick: 1, hat: 3, bass: 2, clap: 1, stab: 1 } },
    { id: 'findC',    label: 'Find them',     bars: 2,  dens: -1, find: true, breather: true, th: .4, dr: 0, hug: 0, m: { kick: 1, hat: 2, bass: 1 } },
    { id: 'build2',   label: 'Here it comes', bars: 8,  dens: 2,  build: true, th: 1, dr: 1.2, hug: 0, m: { kick: 1, hat: 3, bass: 1, roll: 1, riser: 1, arp: 1 } },
    { id: 'peakA',    label: 'THE PEAK',      bars: 12, dens: 3,  peak: true, drop: true, th: 1.45, dr: 1.6, hug: 4, m: { kick: 1, hat: 3, bass: 2, clap: 1, stab: 1, arp: 2 } },
    { id: 'peakFind', label: 'Find them',     bars: 2,  dens: -1, peak: true, find: true, breather: true, th: .45, dr: 0, hug: 0, m: { hat: 1, pad: 1, arp: 1 } },
    { id: 'peakB',    label: 'THE PEAK',      bars: 10, dens: 3,  peak: true, drop: true, th: 1.45, dr: 1.6, hug: 4, m: { kick: 1, hat: 3, bass: 2, clap: 1, stab: 1, arp: 2 } },
    { id: 'comedown', label: 'Comedown',      bars: 8,  dens: 1,  breather: true, th: .5, dr: .8, hug: 3, m: { kick: 1, hat: 1, bass: 1, pad: 1 } },
    { id: 'findD',    label: 'Last call',     bars: 2,  dens: -1, find: true, breather: true, th: .3, dr: 0, hug: 0, m: { kick: 1, hat: 1, pad: 1 } },
    { id: 'outro',    label: '5 a.m.',        bars: 4,  dens: -1, breather: true, lights: true, th: 0, dr: 0, hug: 0, m: { pad: 1 } },
  ];
  let BARS = 0; SECTIONS.forEach(S => { S.start = BARS; BARS += S.bars; });
  const secAt = B => B < 0 ? -1 : SECTIONS.findIndex(S => B >= S.start && B < S.start + S.bars);
  const LINES = { // said as a section starts, by the first of these still with her
    grooveA: [['cherry', 'Stay where I can see you. I mean it.']], drop1: [['jihoon', 'THIS ONE. Sol. THIS One.'], ['junkyu', 'OH this is the GOOD one!!']],
    break: [['asahi', 'I’m not dancing. I’m standing rhythmically.'], ['hyunsuk', 'My legs. Bro. My legs.']],
    build2: [['jihoon', 'Sol. Sol. It’s Coming. Brace.'], ['cherry', 'Hold on to something. Hold on to me.']],
    peakA: [['junkyu', 'I LOVE EVERYONE HERE!!!'], ['cherry', 'SOL!!!']], comedown: [['jaehyuk', 'Water. Everybody. Then we find the others.'], ['hyunsuk', 'That was insane. That was actually insane.']],
  };

  const LANE_KEY = { d: 0, arrowleft: 0, f: 1, arrowdown: 1, j: 2, arrowup: 2, k: 3, arrowright: 3 };
  const ROT = [-90, 180, 0, 90], DIRS = ['left', 'down', 'up', 'right'];
  const WIN = [['perfect', .045, 350, 1, .55], ['good', .09, 200, .75, .35], ['ok', .135, 100, .4, .15]]; // name, window, score, accuracy, love
  const ARROW = '<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M50 6 L92 50 L66 50 L66 94 L34 94 L34 50 L8 50 Z"/></svg>';
  const BODY = [ // crowd silhouettes (viewBox 0 0 60 120): head drawn separately
    'M18 34 Q30 28 42 34 L48 78 L40 80 L38 120 L22 120 L20 80 L12 78 Z',
    'M16 34 Q30 26 44 34 L52 60 L46 62 L42 120 L18 120 L14 62 L8 60 Z',
    'M20 34 Q30 30 40 34 L44 70 L50 30 L54 32 L48 84 L38 84 L36 120 L24 120 L22 84 L12 84 L6 32 L10 30 L16 70 Z',
    'M17 34 Q30 29 43 34 L46 90 L36 92 L34 120 L26 120 L24 92 L14 90 Z',
  ];
  const HAIR = ['M18 16 Q30 2 42 16 L42 22 Q30 14 18 22 Z', 'M16 20 Q18 2 30 4 Q44 4 44 22 L40 30 L40 18 Q30 10 20 18 L20 30 Z', 'M20 10 L24 0 L28 8 L32 -2 L36 8 L40 0 L42 14 Q30 8 18 14 Z', 'M17 18 Q30 0 43 18 L46 36 L40 34 L40 18 Q30 12 20 18 L20 34 L14 36 Z'];
  const figSvg = (i, hue) => `<svg viewBox="0 -4 60 124" aria-hidden="true"><path class="b" d="${BODY[i % 4]}" style="fill:hsl(${hue} 30% 16%)"/><circle class="h" cx="30" cy="20" r="12"/><path class="hr" d="${HAIR[(i * 7 + 3) % 4]}"/></svg>`;

  /* the chart: arrows from the sections and the difficulty (seeded) */
  const genNotes = (D, rng, spb) => {
    const out = []; let prev = 0, lastG = -9, run = 0;
    const P = [[.5, 0], [.85, .1], [.95, .32], [1, .5]];
    SECTIONS.forEach(S => {
      if (S.dens < 0) return;
      const lv = S.dens ? Math.min(3, S.dens + D.lift) : 0;
      for (let b = 0; b < S.bars; b++) {
        const B = S.start + b;
        if (S.id === 'intro' && b < 2) continue;
        for (let e = 0; e < 8; e++) {
          if (S.build && b === S.bars - 1 && e >= 6) continue; // the held breath before the drop
          if (b === S.bars - 1 && e === 7) continue;
          const on = e % 2 === 0, g = B * 8 + e;
          let p = on ? P[lv][0] * Math.min(1, D.dens + .15) : P[lv][1] * D.dens;
          if (S.dens === 0 && e % 4) p = 0;
          if (S.build) p *= on ? 1 : .4 + b / S.bars;
          if (!on && g - lastG === 1 && run >= (D.dens > 1.1 ? 3 : 2)) p = 0;
          if (rng() >= p) continue;
          const r = rng();
          let lane = r < .5 ? (prev + 1 + Math.floor(rng() * 3)) % 4 : r < .75 ? (prev + (rng() < .5 ? 1 : 3)) % 4 : Math.floor(rng() * 4);
          if (g - lastG === 1 && lane === prev) lane = (lane + 2) % 4;
          run = g - lastG === 1 ? run + 1 : 0; lastG = g; prev = lane;
          const t = g * spb / 2;
          out.push({ t, lane });
          if (lv === 3 && e % 4 === 0 && rng() < D.dbl) out.push({ t, lane: (lane + 2) % 4 });
        }
      }
    });
    return out.sort((a, b) => a.t - b.t || a.lane - b.lane);
  };
  const genHugs = (spb) => {
    const out = [];
    SECTIONS.forEach(S => {
      if (!S.hug) return;
      for (let b = 0; b < S.bars - 1; b++) if (b % S.hug === Math.floor(S.hug / 2)) out.push({ t: ((S.start + b) * 4 + 1) * spb });
    });
    return out;
  };

  let cur = null;
  function play(o = {}) {
    return new Promise(done => {
      const host = o.host || document.body;
      const dname = DIFF[o.difficulty] ? o.difficulty : 'normal', D = DIFF[dname];
      const GS = (window.FemcGame && window.FemcGame.settings && window.FemcGame.settings()) || {};
      const still = !!reduced.matches, calm = o.calm ?? !!GS.calm, perf = o.perf ?? !!GS.perf, sim = !!o.__sim;
      const seed = Number.isFinite(o.seed) ? o.seed : (Math.random() * 2147483647) | 0, rng = mulberry(seed);
      const spb = 60 / D.bpm, barDur = spb * 4, stepDur = spb / 4, LEAD = barDur, END = BARS * barDur;
      const swapEvery = still ? D.swapBars * 2 : D.swapBars, wobAmp = D.wobble * (still ? .5 : 1);
      const NOTES = genNotes(D, rng, spb), HUGS = genHugs(spb);
      const freshCrew = () => Object.fromEntries(CREW.map(c => [c.id, { drift: 0, lost: false, rate: .6 + rng() * .8 }]));
      const st = {
        seed, t: 0, lastT: 0, begun: false, paused: false, over: false, tut: false, bar: -1, si: -1, sec: SECTIONS[0],
        notes: NOTES, ni: 0, ri: 0, live: new Set(), hugs: HUGS, hi: 0, hug: null, find: null, off: null,
        thirst: 0, love: 30, lovePeak: 30, combo: 0, maxCombo: 0, score: 0, perfect: 0, good: 0, ok: 0, miss: 0, sat: 0,
        hugsN: 0, hugsMissed: 0, pulled: 0, wrong: 0, waters: 0, crashes: 0, swaps: 0, order: [0, 1, 2, 3],
        crew: freshCrew(), warned: false, glow: false, endAt: null, ending: null, result: null, capT: {}, simT: 0, startMs: 0, ctl: null,
      };
      cur = st;
      const timers = new Set();
      const later = (fn, ms) => { if (sim) { fn(); return 0; } const id = setTimeout(() => { timers.delete(id); fn(); }, ms); timers.add(id); return id; };

      /* the room */
      const el = document.createElement('div');
      el.className = 'mg-rv' + (still ? ' still' : '') + (calm ? ' calm' : '') + (perf ? ' perf' : '');
      el.setAttribute('role', 'application'); el.setAttribute('aria-label', 'Peak');
      const beams = Array.from({ length: perf ? 3 : 7 }, (_, i) => `<i style="--i:${i}"></i>`).join('');
      const crowd = Array.from({ length: perf ? 10 : 16 }, (_, i) => `<span style="left:${(i * 6.4 + (i % 3) * 1.3).toFixed(1)}%;--d:${((i * .37) % 1).toFixed(2)}s;--s:${(.8 + (i % 4) * .1).toFixed(2)}">${figSvg(i, (i * 47) % 360)}</span>`).join('');
      const chip = c => `<div class="rv-mate" data-c="${c.id}" style="--side:${c.side};--slot:${c.slot}"><img src="${face(c.id)}" alt="" onerror="this.remove()"><b>${c.name[0]}</b><small>${c.name}</small></div>`;
      el.innerHTML = `
        <div class="rv-club">
          <img class="rv-bgart" src="${ART('club')}" alt="" onerror="this.remove()">
          <div class="rv-beams">${beams}</div><div class="rv-haze"></div>
          <div class="rv-crowd">${crowd}</div>
          <img class="rv-solar" src="${ART('solar')}" alt="" onerror="this.remove()">
          <div class="rv-strobe"></div><div class="rv-dimmer"></div><div class="rv-house"></div>
        </div>
        <div class="rv-top"><b class="rv-name">PEAK</b><span class="rv-sec">Doors</span><span class="rv-clock">11:40 p.m.</span>
          <div class="rv-meters"><div class="rv-love"><small>Love everyone</small><span><i></i></span></div>
          <div class="rv-thirst"><small>Thirst</small><span><i></i></span></div></div></div>
        <div class="rv-crew">${CREW.map(chip).join('')}<div class="rv-mate rv-you"><img src="${face('solar')}" alt="" onerror="this.remove()"><b>S</b><small>You</small></div></div>
        <div class="rv-lanes">${[0, 1, 2, 3].map(i => `<div class="rv-lane" data-l="${i}" style="left:${i * 25}%;--rot:${ROT[i]}deg"><div class="rv-notes"></div><div class="rv-rec" aria-label="${DIRS[i]}">${ARROW}</div></div>`).join('')}</div>
        <div class="rv-judge" aria-live="polite"></div><div class="rv-combo"></div>
        <button type="button" class="rv-hug" hidden></button>
        <button type="button" class="rv-water">Water <kbd>W</kbd><i></i></button>
        <div class="rv-chip" hidden></div>
        <ul class="rv-caps" aria-live="polite"></ul>
        <div class="rv-find" hidden></div>
        <p class="rv-help">Hit the arrows on the beat: D F J K, the arrow keys, or tap a lane. Space hugs, W for water, Esc pauses.</p>
        <div class="mg-pause" hidden><b>Paused</b><button type="button" data-mg="resume">Resume</button><button type="button" data-mg="howto">How to play</button><button type="button" data-mg="quit">Quit</button></div>
        <div class="mg-end" hidden></div>`;
      host.appendChild(el);
      const $ = s => el.querySelector(s);
      const laneEls = [...el.querySelectorAll('.rv-lane')], notesEls = laneEls.map(l => l.querySelector('.rv-notes'));
      const mateEl = {}; el.querySelectorAll('.rv-mate[data-c]').forEach(m => { mateEl[m.dataset.c] = m; });
      const hugEl = $('.rv-hug'), waterEl = $('.rv-water'), findEl = $('.rv-find'), capsEl = $('.rv-caps'), chipEl = $('.rv-chip');
      const judgeEl = $('.rv-judge'), comboEl = $('.rv-combo'), loveI = $('.rv-love i'), thirstI = $('.rv-thirst i'), secEl = $('.rv-sec'), clockEl = $('.rv-clock');
      let laneH = 560;
      const measure = () => { try { const h = $('.rv-lanes').getBoundingClientRect().height; if (h > 50) laneH = h; } catch (e) {} };
      const alive = () => sim || el.isConnected;

      /* captions */
      const cap = (txt, kind = '', who = null) => {
        const li = document.createElement('li'); li.className = 'rv-cap ' + kind;
        li.innerHTML = who ? `<img src="${face(who, 'happy')}" alt="" onerror="this.remove()"><span><b>${esc(CREW.find(c => c.id === who)?.name || 'Solar')}</b> ${esc(txt)}</span>` : `<span>${esc(txt)}</span>`;
        capsEl.appendChild(li);
        while (capsEl.children && capsEl.children.length > 3) capsEl.firstChild.remove();
        later(() => li.remove(), 4200);
      };
      const here = id => !st.crew[id].lost;
      const say = (who, txt) => cap(txt, 'talk', who);
      const sayFirst = list => { const l = (list || []).find(([w]) => here(w)); if (l) say(l[0], l[1]); };
      const capOnce = (k, gap, fn) => { if ((st.capT[k] ?? -1e9) + gap > st.t) return; st.capT[k] = st.t; fn(); };
      let chipT = 0;
      const showChip = (txt, ms = 1400) => { chipEl.textContent = txt; chipEl.hidden = false; clearTimeout(chipT); if (!sim) chipT = setTimeout(() => { chipEl.hidden = true; }, ms); };

      /* sound: Web Audio, made here (no files) */
      let ac = null, A = null;
      const audio = () => {
        if (o.mute || ac || sim) return;
        try { ac = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { ac = null; return; }
        const master = ac.createGain(); master.gain.value = .75;
        const comp = ac.createDynamicsCompressor(); master.connect(comp); comp.connect(ac.destination);
        const filt = ac.createBiquadFilter(); filt.type = 'lowpass'; filt.frequency.value = 18000; filt.connect(master);
        const music = ac.createGain(); music.connect(filt);
        const dry = ac.createGain(); dry.connect(filt);
        const nbuf = ac.createBuffer(1, ac.sampleRate, ac.sampleRate), d = nbuf.getChannelData(0);
        for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
        A = { master, filt, music, dry, nbuf };
        wake();
      };
      // a context made without a fresh gesture can start suspended (its clock would stand still): any key or tap wakes it
      const wake = () => { if (ac && ac.state === 'suspended' && !st.paused) { try { ac.resume(); } catch (e) {} } };
      const lat = () => ac ? (ac.outputLatency || 0) + (ac.baseLatency || 0) : 0;
      const env = (g, t, peak, a, dcy) => { g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(Math.max(.0002, peak), t + a); g.gain.exponentialRampToValueAtTime(.0001, t + a + dcy); };
      const osc = (type, f, t, len) => { const x = ac.createOscillator(); x.type = type; x.frequency.setValueAtTime(f, t); x.start(t); x.stop(t + len + .05); return x; };
      const noise = (t, len) => { const n = ac.createBufferSource(); n.buffer = A.nbuf; n.loop = true; n.start(t); n.stop(t + len + .05); return n; };
      const bq = (type, f, q = 1) => { const x = ac.createBiquadFilter(); x.type = type; x.frequency.value = f; x.Q.value = q; return x; };
      const gn = () => ac.createGain();
      const SND = {
        kick(t, v = 1) {
          const x = osc('sine', 150, t, .4), g = gn(); x.frequency.exponentialRampToValueAtTime(42, t + .12);
          g.gain.setValueAtTime(v, t); g.gain.exponentialRampToValueAtTime(.001, t + .38); x.connect(g); g.connect(A.dry);
          A.music.gain.setValueAtTime(.35, t); A.music.gain.linearRampToValueAtTime(1, t + .2); // the sidechain pump
        },
        hat(t, open, v) { const n = noise(t, open ? .2 : .06), f = bq('highpass', 7200), g = gn(); env(g, t, v, .002, open ? .14 : .035); n.connect(f); f.connect(g); g.connect(A.music); },
        clap(t, v) { const n = noise(t, .25), f = bq('bandpass', 1500, .8), g = gn(); g.gain.setValueAtTime(.0001, t); [0, .011, .022].forEach(k => { g.gain.setValueAtTime(v, t + k); g.gain.exponentialRampToValueAtTime(v * .3, t + k + .009); }); g.gain.exponentialRampToValueAtTime(.0001, t + .2); n.connect(f); f.connect(g); g.connect(A.music); },
        snare(t, v) { const n = noise(t, .1), f = bq('bandpass', 1900, .7), g = gn(); env(g, t, v, .002, .08); n.connect(f); f.connect(g); g.connect(A.music); },
        bass(t, f, len, v) { const x = osc('sawtooth', f, t, len), lp = bq('lowpass', 280, 6), g = gn(); lp.frequency.setValueAtTime(900, t); lp.frequency.exponentialRampToValueAtTime(220, t + len); env(g, t, v, .005, len); x.connect(lp); lp.connect(g); g.connect(A.music); },
        stab(t, root, ch, v) { const lp = bq('lowpass', 2600, 1), g = gn(); env(g, t, v, .004, .2); lp.connect(g); g.connect(A.music); ch.forEach(s => [-7, 7].forEach(c => { const x = osc('sawtooth', root * 2 ** (s / 12), t, .25); x.detune.value = c; x.connect(lp); })); },
        arp(t, f, v) { const x = osc('square', f, t, .12), lp = bq('lowpass', 3200), g = gn(); env(g, t, v, .003, .1); x.connect(lp); lp.connect(g); g.connect(A.music); },
        pad(t, root, ch, len, v) { const lp = bq('lowpass', 900, .5), g = gn(); g.gain.setValueAtTime(.0001, t); g.gain.linearRampToValueAtTime(v, t + len * .4); g.gain.linearRampToValueAtTime(.0001, t + len); lp.connect(g); g.connect(A.music); ch.forEach(s => [-9, 9].forEach(c => { const x = osc('sawtooth', root * 2 ** (s / 12), t, len); x.detune.value = c; x.connect(lp); })); },
        riser(t, len) {
          const n = noise(t, len), bp = bq('bandpass', 400, 2), g = gn(); bp.frequency.setValueAtTime(300, t); bp.frequency.exponentialRampToValueAtTime(7000, t + len);
          g.gain.setValueAtTime(.01, t); g.gain.exponentialRampToValueAtTime(.22, t + len - .05); g.gain.setValueAtTime(.0001, t + len);
          n.connect(bp); bp.connect(g); g.connect(A.music);
          const x = osc('sawtooth', 110, t, len), lp = bq('lowpass', 1800), g2 = gn(); x.frequency.exponentialRampToValueAtTime(880, t + len);
          g2.gain.setValueAtTime(.001, t); g2.gain.exponentialRampToValueAtTime(.07, t + len - .05); g2.gain.setValueAtTime(.0001, t + len); x.connect(lp); lp.connect(g2); g2.connect(A.music);
        },
        impact(t) { const n = noise(t, 1.2), lp = bq('lowpass', 3500), g = gn(); env(g, t, .35, .005, 1.1); n.connect(lp); lp.connect(g); g.connect(A.dry); const x = osc('sine', 55, t, 1.3), g2 = gn(); env(g2, t, .6, .005, 1.2); x.connect(g2); g2.connect(A.dry); },
        tick(t) { const x = osc('triangle', 1760, t, .05), g = gn(); env(g, t, .12, .002, .04); x.connect(g); g.connect(A.dry); },
        pop(v = .12) { if (!ac || !A) return; const t = ac.currentTime; const x = osc('sine', 880, t, .12), g = gn(); x.frequency.exponentialRampToValueAtTime(1320, t + .08); env(g, t, v, .003, .1); x.connect(g); g.connect(A.master); },
        thud() { if (!ac || !A) return; const t = ac.currentTime; const x = osc('sine', 90, t, .5), g = gn(); x.frequency.exponentialRampToValueAtTime(40, t + .4); env(g, t, .4, .005, .45); x.connect(g); g.connect(A.master); A.filt.frequency.setTargetAtTime(500, t, .05); A.filt.frequency.setTargetAtTime(18000, t + barDur * 2 - .4, .3); },
        lights() { if (!ac || !A) return; const t = ac.currentTime; A.filt.frequency.setTargetAtTime(380, t, .8); A.master.gain.setTargetAtTime(.0001, t + barDur * 3, .6); const n = noise(t, 3), bp = bq('bandpass', 900, .6), g = gn(); g.gain.setValueAtTime(.0001, t); g.gain.linearRampToValueAtTime(.08, t + 1.2); g.gain.linearRampToValueAtTime(.0001, t + 3); n.connect(bp); bp.connect(g); g.connect(A.master); },
      };
      const PROG = [[110, [0, 3, 7]], [87.31, [0, 4, 7]], [130.81, [0, 4, 7]], [98, [0, 4, 7]]]; // Am F C G
      let nextStep = 0;
      const playStep = (k, at) => {
        if (st.tut) { const s = ((k % 16) + 16) % 16; if (s % 4 === 0) SND.kick(at, .55); if (s % 4 === 2) SND.hat(at, true, .1); return; }
        if (k < 0) { if (k % 4 === 0) SND.tick(at); return; }
        const B = Math.floor(k / 16), s = k % 16, si = secAt(B);
        if (si < 0) return;
        const S = SECTIONS[si], b = B - S.start, m = S.m, [root, ch] = PROG[B % 4];
        if (S.build && b === S.bars - 1 && s >= 12) return; // silence, then the drop
        if (b === 0 && s === 0 && S.drop) SND.impact(at);
        if (b === 0 && s === 0 && m.riser) SND.riser(at, S.bars * barDur - spb);
        if (m.kick && (s % 4 === 0 || (S.build && b === S.bars - 1 && s % 2 === 0))) SND.kick(at, 1);
        if (m.hat >= 1 && s % 4 === 2) SND.hat(at, true, .16);
        if (m.hat >= 2 && s % 2 === 1) SND.hat(at, false, .07);
        if (m.hat >= 3 && s % 4 === 0) SND.hat(at, false, .09);
        if (m.clap && (s === 4 || s === 12)) SND.clap(at, .5);
        if (m.roll) { const p = b / S.bars, every = p < .5 ? 4 : p < .75 ? 2 : 1; if (s % every === 0) SND.snare(at, .08 + p * .3); }
        if (m.bass === 1 && s % 4 === 2) SND.bass(at, root / 2, stepDur * 1.8, .32);
        if (m.bass === 2 && s % 4 !== 0) SND.bass(at, root / 2 * (s % 4 === 3 ? 2 : 1), stepDur * .9, .26);
        if (m.stab && (s === 3 || s === 6 || s === 10)) SND.stab(at, root * 2, ch, .09);
        if (m.arp && s % (m.arp === 2 ? 1 : 2) === 0) { const n = ch[(s / (m.arp === 2 ? 1 : 2)) % 3] + 12 * (Math.floor(s / 6) % 2); SND.arp(at, root * 2 * 2 ** (n / 12), m.arp === 2 ? .045 : .035); }
        if (m.pad && s === 0) SND.pad(at, root, ch, barDur, .05);
      };
      const schedule = () => {
        if (!ac || !A || st.paused) return;
        const t = now();
        while (nextStep * stepDur < t + .15) {
          const at = clk.origin + nextStep * stepDur;
          if (at >= ac.currentTime - .02) playStep(nextStep, Math.max(at, ac.currentTime));
          nextStep++;
        }
      };

      /* the clock: Web Audio time when there's sound, else its own (pauses with the game) */
      const clk = { origin: 0, perf0: 0, pausedAt: 0 };
      const now = () => sim ? st.simT : ac ? ac.currentTime - clk.origin : (perfNow() - clk.perf0) / 1000;
      const setClock = t0 => {
        if (sim) st.simT = t0;
        else if (ac) clk.origin = ac.currentTime - t0;
        else clk.perf0 = perfNow() - t0 * 1000;
        nextStep = Math.ceil(t0 / stepDur); st.lastT = t0;
      };

      /* judging */
      const winMul = t => st.sec && st.sec.peak && !st.tut ? 1 + wobAmp * Math.sin(t / (barDur * 2) * Math.PI * 2) : 1;
      const love = v => { st.love = clamp(st.love + v, 0, 100); st.lovePeak = Math.max(st.lovePeak, st.love);
        if (st.love >= 85 && !st.glow) { st.glow = true; el.classList.add('glow'); if (!st.tut) capOnce('glow', 30, () => cap('You love everyone here. Even the guy who stepped on your foot.', 'warm')); }
        if (st.love < 75 && st.glow) { st.glow = false; el.classList.remove('glow'); } };
      const judgeShow = (txt, cls) => { judgeEl.textContent = txt; judgeEl.className = 'rv-judge ' + cls; void judgeEl.offsetWidth; judgeEl.classList.add('pop');
        comboEl.textContent = st.combo >= 5 ? `${st.combo} combo` : ''; };
      const dropNote = (n, how) => {
        if (n.el) { const e = n.el; n.el = null; st.live.delete(n); e.classList.add(how); later(() => e.remove(), how === 'hit' ? 160 : 260); }
      };
      const resolve = (n, tier) => {
        n.j = tier;
        if (tier === 'sat') { st.sat++; dropNote(n, 'sat'); return; }
        if (tier === 'miss') {
          st.miss++; if (st.combo >= 10) cap('Combo broken.', 'soft'); st.combo = 0; love(-2.5); judgeShow('MISS', 'miss'); dropNote(n, 'miss');
          laneEls[n.lane].classList.add('missed'); later(() => laneEls[n.lane].classList.remove('missed'), 200);
          return;
        }
        const w = WIN.find(x => x[0] === tier);
        st[tier]++; st.combo++; st.maxCombo = Math.max(st.maxCombo, st.combo);
        st.score += Math.round(w[2] * (1 + Math.min(st.combo, 100) / 100)); love(w[4]);
        if (st.combo % 25 === 0) { love(4); if (!st.tut) capOnce('streak', 20, () => { const c = CREW.filter(c => here(c.id)); if (c.length) say(c[st.combo / 25 % c.length].id, pick(['Look at her go!!', 'Okay, Solar!!', 'Don’t stop. Don’t you dare stop.'])); }); }
        judgeShow(tier.toUpperCase(), tier); dropNote(n, 'hit');
        const r = laneEls[n.lane]; r.classList.remove('hit'); void r.offsetWidth; r.classList.add('hit');
      };
      const pick = a => a[Math.floor(rng() * a.length)];
      const press = lane => {
        if (!playable()) return;
        const r = laneEls[lane]; r.classList.add('down'); later(() => r.classList.remove('down'), 90);
        if (st.off) return;
        const t = st.t, w = winMul(t), okW = WIN[2][1] * w;
        let best = null;
        for (let i = st.ni; i < st.notes.length; i++) {
          const n = st.notes[i]; if (n.t > t + okW) break;
          if (n.j || n.lane !== lane) continue;
          if (Math.abs(n.t - t) <= okW && (!best || Math.abs(n.t - t) < Math.abs(best.t - t))) best = n;
        }
        if (!best) return; // ghost taps are free
        const d = Math.abs(best.t - t), tier = WIN.find(x => d <= x[1] * w)[0];
        resolve(best, tier);
        if (tp && tp.kind === 'hit' && ++tp.n >= 3) tp.ok();
      };

      /* hugs */
      const spawnHug = (h, t) => {
        if (st.hug || st.off || st.find) return;
        let who = h.who || null;
        if (!who && rng() < .55) { const near = CREW.filter(c => here(c.id)).sort((a, b) => st.crew[b.id].drift - st.crew[a.id].drift); if (near.length) who = near[0].id; }
        const s = who ? null : pick(STRANGERS), c = who && CREW.find(x => x.id === who);
        st.hug = { t, end: h.forever ? Infinity : t + spb * 3, who, s, side: c ? c.side : rng() < .5 ? -1 : 1 };
        hugEl.innerHTML = `${who ? `<img src="${face(who)}" alt="" onerror="this.remove()">` : figSvg(Math.floor(rng() * 4), Math.floor(rng() * 360))}<span><b>${esc(c ? c.name : s[0])}</b><small>dances up to you</small></span><em>Hug! <kbd>Space</kbd></em><i></i>`;
        hugEl.dataset.side = st.hug.side; hugEl.hidden = false; hugEl.setAttribute('aria-label', `Hug ${c ? c.name : 'them'}`);
      };
      const hugClose = () => { st.hug = null; hugEl.hidden = true; };
      const hug = () => {
        if (!playable() || !st.hug || st.off) return;
        const h = st.hug, t = st.t, ph = t / spb - Math.round(t / spb), onBeat = Math.abs(ph * spb) <= .09;
        st.hugsN++; love(onBeat ? 12 : 8); SND.pop(onBeat ? .16 : .1);
        if (h.who) { st.crew[h.who].drift = 0; say(h.who, pick(CREW.find(c => c.id === h.who).hug)); }
        else cap(`${h.s[0]}: “${h.s[1]}”`, 'talk');
        judgeShow(onBeat ? 'PERFECT HUG' : 'HUG', 'hugj');
        el.classList.add('hugged'); later(() => el.classList.remove('hugged'), 400);
        hugClose();
        if (tp && tp.kind === 'hug') tp.ok();
      };

      /* the crew: drift, lost, found */
      const lose = c => { const s = st.crew[c.id]; s.lost = true; s.drift = 1; cap(c.lost, 'lost'); showChip(`${c.name} is lost in the crowd`, 1800); };
      const openFind = (tut = false) => {
        const want = CREW.filter(c => st.crew[c.id].lost || st.crew[c.id].drift >= .45);
        const nS = tut ? 6 : D.strangers, figs = [];
        want.forEach(c => figs.push({ kind: 'friend', id: c.id }));
        for (let i = 0; i < nS; i++) figs.push({ kind: 'stranger', i: Math.floor(rng() * 4), hue: Math.floor(rng() * 360) });
        for (let i = figs.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [figs[i], figs[j]] = [figs[j], figs[i]]; }
        const step = 88 / Math.max(1, figs.length - 1);
        figs.forEach((f, i) => { f.x = figs.length === 1 ? 50 : 6 + i * step + (rng() - .5) * step * .5; f.row = Math.floor(rng() * 3); f.d = (rng() * .8).toFixed(2); });
        const S = st.sec;
        st.find = { figs, cur: 0, tut, end: tut ? Infinity : (S.start + S.bars) * barDur, start: st.t, want: want.length };
        findEl.className = `rv-find d-${dname}`;
        findEl.innerHTML = `<header><b>${tut ? 'Find Asahi' : S.id === 'findD' ? 'Last call: find them' : 'Find them'}</b>
            <span>${want.length ? want.map(c => `<em data-w="${c.id}" class="${st.crew[c.id].lost ? 'lost' : ''}">${c.name}</em>`).join('') : '<em class="ok">Everyone’s right here.</em>'}</span><i></i></header>
          <div class="rv-floor">${figs.map((f, i) => f.kind === 'friend'
            ? `<button type="button" class="rv-fig friend" data-fig="${i}" aria-label="${CREW.find(c => c.id === f.id).name}" style="left:${f.x.toFixed(1)}%;--row:${f.row};--d:${f.d}s"><img src="${face(f.id, 'surprised')}" alt="" onerror="this.remove()"><em>${CREW.find(c => c.id === f.id).name[0]}</em>${figSvg(f.row, 330)}</button>`
            : `<button type="button" class="rv-fig" data-fig="${i}" aria-label="Someone" style="left:${f.x.toFixed(1)}%;--row:${f.row};--d:${f.d}s">${figSvg(f.i, f.hue)}</button>`).join('')}</div>
          <p>Click them, or ← → and Space.</p>`;
        findEl.hidden = false; el.classList.add('finding'); paintCursor();
      };
      const paintCursor = () => { if (!st.find) return; findEl.querySelectorAll('.rv-fig').forEach(b => b.classList.toggle('cur', +b.dataset.fig === st.find.cur)); };
      const closeFind = () => {
        if (!st.find) return;
        const left = st.find.figs.filter(f => f.kind === 'friend' && !f.got && st.crew[f.id].lost);
        if (left.length && !st.over && !st.find.tut) cap(`${left.map(f => CREW.find(c => c.id === f.id).name).join(', ')} still out there.`, 'lost');
        st.find = null; findEl.hidden = true; findEl.innerHTML = ''; el.classList.remove('finding');
      };
      const pickFig = i => {
        if (!playable() || !st.find) return;
        const f = st.find.figs[i]; if (!f || f.got) return;
        if (f.kind === 'friend') {
          f.got = true; const c = CREW.find(x => x.id === f.id); st.crew[f.id].drift = 0; st.crew[f.id].lost = false; st.pulled++; love(5); SND.pop(.14);
          say(f.id, c.back);
          const b = findEl.querySelector(`[data-fig="${i}"]`); if (b) b.classList.add('got');
          const w = findEl.querySelector(`[data-w="${f.id}"]`); if (w) w.classList.add('got');
          if (tp && tp.kind === 'find') { tp.ok(); later(closeFind, 500); }
        } else {
          f.got = true; st.wrong++; love(-2);
          const who = st.find.figs.find(x => x.kind === 'friend' && !x.got);
          cap(who ? `That’s not ${CREW.find(c => c.id === who.id).name}. That’s ${pick(WRONG)}.` : `That’s ${pick(WRONG)}. Everyone’s already here.`, 'soft');
          const b = findEl.querySelector(`[data-fig="${i}"]`); if (b) b.classList.add('nope');
        }
      };
      const moveCursor = d => { if (!st.find) return; const n = st.find.figs.length; const order = st.find.figs.map((f, i) => i).sort((a, b) => st.find.figs[a].x - st.find.figs[b].x); const k = order.indexOf(st.find.cur); st.find.cur = order[(k + d + n) % n]; paintCursor(); };

      /* water */
      const notesIn = (a, b) => { let k = 0; for (let i = st.ni; i < st.notes.length && st.notes[i].t < b; i++) if (!st.notes[i].j && st.notes[i].t >= a) k++; return k; };
      const breather = () => st.tut || !!(st.sec && st.sec.breather) || notesIn(st.t, st.t + barDur * 2) <= 2;
      const water = () => {
        if (!playable() || st.off) return;
        if (st.thirst < 22) { capOnce('notyet', 4, () => cap('You’re not thirsty yet.', 'soft')); return; }
        const free = breather();
        st.off = { until: st.t + barDur * 2, free, kind: 'water' }; st.thirst = 0; st.waters++;
        el.classList.add('off'); hugClose();
        const giver = CREW.filter(c => here(c.id)).map(c => c.id); const g = giver.length ? pick(giver) : null;
        if (free) { love(3); if (g) say(g, WATER[g]); else cap('The bartender slides you a water. Nobody’s around to say anything about it.', 'soft'); }
        else { love(-3); cap('Bad time to leave the floor. You miss a few.', 'soft'); }
        showChip(free ? 'Water break: good timing' : 'Water break', 1400);
        if (tp && tp.kind === 'water') tp.ok();
      };
      const crash = () => {
        st.crashes++; love(-15); st.combo = 0; st.thirst = 35; hugClose();
        st.off = { until: st.t + barDur * 2, free: true, kind: 'crash' };
        el.classList.add('off', 'crashed'); el.style.setProperty('--dim', Math.min(.6, st.crashes * .2).toFixed(2)); SND.thud();
        cap('The room tilts. You sit down hard on the stairs.', 'lost');
        const s = CREW.find(c => here(c.id)); if (s) later(() => say(s.id, s.id === 'hyunsuk' ? 'I got you. Sit. Drink this. Slowly.' : 'Hey. Hey. Sit with me a sec. Drink this.'), 700);
        showChip(st.crashes >= D.crashes ? 'You’re done for the night' : `Crashed (${st.crashes} / ${D.crashes})`, 1800);
        if (st.crashes >= D.crashes) st.endAt = st.t + 1.6;
      };
      const endOff = () => { st.off = null; el.classList.remove('off', 'crashed'); };

      /* the peak: lanes swap */
      const placeLanes = () => laneEls.forEach((l, i) => { l.style.left = `${st.order[i] * 25}%`; });
      const swap = () => {
        const a = Math.floor(rng() * 4); let b = (a + 1 + Math.floor(rng() * 3)) % 4;
        if (D.swapBars <= 2 && rng() < .35) { st.order = st.order.map(c => (c + 1) % 4); } // hard: the whole floor turns
        else { const o2 = st.order.slice(); const ca = o2.indexOf(a), cb = o2.indexOf(b); o2[ca] = b; o2[cb] = a; st.order = o2; }
        st.swaps++; placeLanes(); el.classList.add('tilt'); later(() => el.classList.remove('tilt'), 400);
      };

      /* the night: sections */
      const enterSection = si => {
        const prev = st.sec; st.si = si; const S = st.sec = SECTIONS[si];
        el.dataset.sec = S.id; secEl.textContent = S.label;
        el.classList.toggle('peak', !!S.peak); el.classList.toggle('drop', !!S.drop); el.classList.toggle('build', !!S.build);
        if (prev && prev.find && prev !== S) closeFind();
        if (S.find) { hugClose(); openFind(); }
        if (S.peak && !(prev && prev.peak)) { showChip('THE PEAK', 1600); cap('The lights go everywhere at once.', 'warm'); }
        if (!S.peak && prev && prev.peak) { st.order = [0, 1, 2, 3]; placeLanes(); cap('The floor settles. The lanes go home.', 'soft'); }
        if (S.lights) { el.classList.add('lights'); SND.lights(); cap('The house lights come up. It’s 5 a.m.', 'warm'); }
        sayFirst(LINES[S.id]);
      };
      const onBar = B => {
        const si = secAt(B); if (si < 0) return;
        if (si !== st.si) enterSection(si);
        const S = SECTIONS[si], b = B - S.start;
        if (S.peak && !S.find && b > 0 && b % swapEvery === 0) swap();
        if (S.peak && !S.find && (b + 1) % swapEvery === 0 && b + 1 < S.bars) showChip('The floor tilts…', barDur * 900);
      };
      const clockText = t => { const m = Math.round(23 * 60 + 40 + clamp(t / END, 0, 1) * 320) % 1440, h = Math.floor(m / 60), mm = m % 60; return `${h % 12 || 12}:${String(mm).padStart(2, '0')} ${h >= 12 ? 'p.m.' : 'a.m.'}`; };

      /* the loop */
      let tp = null; // the practice the tutorial waits on
      const playable = () => st.begun && !st.over && !st.paused && !(window.FemcTutorial && window.FemcTutorial.blocking && window.FemcTutorial.blocking());
      const update = (t, dt) => {
        st.t = t;
        if (!st.tut) {
          const B = Math.floor(t / barDur);
          if (B > st.bar) { for (let b = Math.max(st.bar + 1, 0); b <= B; b++) onBar(b); st.bar = B; }
          const S = st.sec;
          if (t > 0 && !st.off) st.thirst = Math.min(100, st.thirst + S.th * D.thirst * dt);
          if (t > 0 && !S.lights) love(-.35 * dt); // the meter wants feeding
          if (st.thirst >= 70 && !st.warned) { st.warned = true; const j = here('jaehyuk') ? 'jaehyuk' : CREW.find(c => here(c.id))?.id; if (j) say(j, 'You need water. Step off when the music breathes.'); else cap('Your mouth is dry. Water, when the music breathes.', 'soft'); }
          if (st.thirst < 50) st.warned = false;
          if (st.thirst >= 100 && !st.off && st.endAt == null) crash();
          if (t > 0) CREW.forEach(c => { const s = st.crew[c.id]; if (s.lost) return; s.drift += D.drift * S.dr * s.rate * dt * (st.off ? 1.5 : 1); if (s.drift >= 1) lose(c); });
          while (st.hi < st.hugs.length && st.hugs[st.hi].t <= t) spawnHug(st.hugs[st.hi++], t);
          if (st.find && t >= st.find.end) closeFind();
        } else if (tp && tp.kind === 'hit') {
          if (!st.notes.some(n => !n.j && n.t > t)) { const nb = (Math.floor(t / spb) + 2) * spb; for (let k = 0; k < 4; k++) st.notes.push({ t: nb + k * spb, lane: (tp.n + k) % 4 }); }
        }
        if (st.hug && t > st.hug.end) { st.hugsMissed++; capOnce('hugmiss', 6, () => cap(st.hug.who ? `${CREW.find(c => c.id === st.hug.who).name} dances off again.` : 'They dance off into the crowd.', 'soft')); hugClose(); }
        if (st.off && t >= st.off.until) endOff();
        const okW = WIN[2][1] * winMul(t);
        while (st.ni < st.notes.length && (st.notes[st.ni].j || st.notes[st.ni].t < t - okW)) {
          const n = st.notes[st.ni];
          if (!n.j) resolve(n, st.off ? (st.off.free ? 'sat' : 'miss') : 'miss');
          st.ni++;
        }
        if (st.endAt != null && t >= st.endAt) return finish('early');
        if (!st.tut && t >= END) finish('end');
      };
      const paint = t => {
        const ph = t / spb - Math.floor(t / spb);
        el.style.setProperty('--beat', (Math.max(0, 1 - ph * 2.4)).toFixed(3));
        const S = st.sec || SECTIONS[0], prog = st.tut ? 0 : clamp((t - S.start * barDur) / (S.bars * barDur), 0, 1);
        const wild = st.tut ? .1 : S.peak ? 1 : S.drop ? .55 : S.build ? .2 + prog * .5 : S.lights ? 0 : .18;
        el.style.setProperty('--wild', wild.toFixed(2));
        el.style.setProperty('--hue', ((t * (calm ? 4 : S.peak ? 70 : 14)) % 360).toFixed(1));
        el.style.setProperty('--win', winMul(t).toFixed(3));
        loveI.style.width = `${st.love.toFixed(1)}%`; thirstI.style.width = `${st.thirst.toFixed(1)}%`;
        el.classList.toggle('thirsty', st.thirst >= 70);
        if (!st.tut) { const c = clockText(t); if (clockEl.textContent !== c) clockEl.textContent = c; }
        waterEl.classList.toggle('open', !st.off && breather() && st.thirst >= 22);
        CREW.forEach(c => { const s = st.crew[c.id], m = mateEl[c.id]; m.style.setProperty('--dr', s.drift.toFixed(3)); m.classList.toggle('lost', s.lost); m.classList.toggle('far', !s.lost && s.drift >= .6); });
        // arrows
        const Hh = laneH * .84;
        while (st.ri < st.notes.length && st.notes[st.ri].t <= t + D.travel) {
          const n = st.notes[st.ri++]; if (n.j) continue;
          const e = document.createElement('div'); e.className = 'rv-note'; e.innerHTML = ARROW; notesEls[n.lane].appendChild(e); n.el = e; st.live.add(n);
        }
        st.live.forEach(n => { const y = Hh - (n.t - t) / D.travel * Hh; n.el.style.transform = `translate3d(0,${y.toFixed(1)}px,0)`; });
        if (st.hug) hugEl.style.setProperty('--p', st.hug.end === Infinity ? '0' : clamp((t - st.hug.t) / (st.hug.end - st.hug.t), 0, 1).toFixed(3));
        if (st.find && st.find.end !== Infinity) findEl.style.setProperty('--p', clamp((t - st.find.start) / (st.find.end - st.find.start), 0, 1).toFixed(3));
      };
      let raf = 0, sched = 0;
      const frame = () => {
        const t = now() - lat(), dt = clamp(t - st.lastT, 0, .1); st.lastT = t;
        schedule();
        if (!st.over) update(t, dt);
        paint(t);
      };
      const tick = () => { raf = requestAnimationFrame(tick); if (!st.paused) frame(); };

      /* the end: lights up, count the crew */
      const finish = ending => {
        if (st.over) return; st.over = true;
        hugClose(); closeFind(); el.classList.remove('off');
        const done_ = ending === 'end', quit = ending === 'quit';
        const found = CREW.filter(c => here(c.id)).map(c => c.id), missing = CREW.filter(c => !here(c.id)).map(c => c.id);
        const judged = st.perfect + st.good + st.ok + st.miss;
        const accuracy = judged ? Math.round((st.perfect + st.good * .75 + st.ok * .4) / judged * 1000) / 10 : 0;
        const crew = found.length;
        const grade = !done_ ? 'C' : crew === 6 && st.crashes === 0 && accuracy >= 88 && st.love >= 70 ? 'S' : crew >= 5 && st.crashes <= 1 && accuracy >= 75 ? 'A' : 'B';
        const res = st.result = {
          won: done_, grade, ending: done_ ? (crew === 6 ? 'all' : 'some') : quit ? 'quit' : 'early', quit, difficulty: dname,
          crew, found, missing, score: st.score, accuracy, perfect: st.perfect, good: st.good, ok: st.ok, miss: st.miss, maxCombo: st.maxCombo,
          love: Math.round(st.love), lovePeak: Math.round(st.lovePeak), hugs: st.hugsN, hugsMissed: st.hugsMissed, pulled: st.pulled, wrong: st.wrong,
          waters: st.waters, crashes: st.crashes, swaps: st.swaps, secs: Math.round((sim ? Math.max(0, st.t) * 1000 : perfNow() - st.startMs) / 1000), tutorial: tutRes,
        };
        st.ending = res.ending;
        if (!done_) { el.classList.add('lights', quit ? 'quit' : 'early'); SND.lights(); }
        const head = done_ ? '5:00 a.m. The lights come up.' : quit ? 'You get your coat.' : `${clockText(st.t)} You’re done for the night.`;
        const line = done_ ? (crew === 6 ? 'All six. Sticky, hoarse, still here. Cherry makes everyone hold hands the whole way to the station.'
          : crew >= 4 ? `${crew} of six. The rest will turn up. They always do.` : crew ? `${crew} of six. You stand under the house lights and start making calls.` : 'Just you, under the house lights. Your phone has forty messages.')
          : quit ? 'The music keeps going without you.' : 'Hyunsuk walks you out into the cold and doesn’t say a word about it. He just holds your water.';
        const show = () => {
          if (!alive()) return;
          const end = $('.mg-end'); end.hidden = false;
          end.innerHTML = `<p class="rv-end-head">${esc(head)}</p>
            <div class="rv-count">${CREW.map(c => `<span class="${here(c.id) ? 'here' : 'gone'}"><img src="${face(c.id, here(c.id) ? 'happy' : 'neutral')}" alt="" onerror="this.remove()"><b>${c.name[0]}</b><small>${c.name}</small></span>`).join('')}</div>
            <b class="mg-grade">${grade}</b>
            <dl><dt>Crew</dt><dd>${crew} / 6</dd><dt>Accuracy</dt><dd>${accuracy}%</dd><dt>Max combo</dt><dd>${st.maxCombo}</dd><dt>Hugs</dt><dd>${st.hugsN}</dd><dt>Water breaks</dt><dd>${st.waters}</dd><dt>Crashes</dt><dd>${st.crashes}</dd><dt>Love everyone</dt><dd>${Math.round(st.love)}</dd></dl>
            ${done_ ? `<ul class="rv-lines">${CREW.map(c => `<li class="${here(c.id) ? 'here' : 'gone'}">${esc(here(c.id) ? c.still : c.gone)}</li>`).join('')}</ul>` : ''}
            <p class="mg-end-say">${esc(line)}</p><button type="button">Continue</button>`;
          const b = end.querySelector('button'); b.onclick = cont; b.focus?.();
        };
        const cont = () => { if (st.closed) return; st.closed = true; cleanup(); o.onDone?.(res); done(res); };
        st.cont = cont;
        quit ? show() : later(show, done_ ? 2400 : 1400);
      };

      /* input */
      const lanePointer = e => {
        if (!playable() || st.find) return;
        e.preventDefault();
        const r = $('.rv-lanes').getBoundingClientRect(), col = clamp(Math.floor((e.clientX - r.left) / r.width * 4), 0, 3);
        press(st.order.indexOf(col));
      };
      $('.rv-lanes').addEventListener('pointerdown', lanePointer);
      hugEl.addEventListener('pointerdown', e => { e.preventDefault(); e.stopPropagation(); hug(); });
      waterEl.addEventListener('click', e => { e.stopPropagation(); water(); });
      findEl.addEventListener('click', e => { const b = e.target.closest && e.target.closest('[data-fig]'); if (b) { st.find && (st.find.cur = +b.dataset.fig); pickFig(+b.dataset.fig); } });
      el.addEventListener('contextmenu', e => e.preventDefault());
      el.addEventListener('pointerdown', wake, true);
      const pause = on => {
        if (st.over || !st.begun || st.tut) return;
        if (on === st.paused) return;
        st.paused = on; $('.mg-pause').hidden = !on;
        if (!sim) {
          if (ac) { try { on ? ac.suspend() : ac.resume(); } catch (e) {} }
          else if (on) clk.pausedAt = perfNow(); else clk.perf0 += perfNow() - clk.pausedAt;
        }
        el.classList.toggle('paused', on);
        if (on) $('.mg-pause button')?.focus?.();
      };
      const key = e => {
        if (!alive() || st.over) return;
        wake();
        if (!st.begun) { e.preventDefault(); begin(); return; }
        const T = window.FemcTutorial;
        if ((T && T.open && T.open() && (e.key === 'Escape' || T.blocking())) || (st.tut && e.key === 'Escape')) return; // the tutorial has the keys
        e.stopPropagation();
        if (e.key === 'Escape') { e.preventDefault(); pause(!st.paused); return; }
        if (st.paused || e.repeat) return;
        const k = (e.key || '').toLowerCase();
        if (st.find && !st.off) {
          if (k === 'arrowleft' || k === 'd' || k === 'f') { e.preventDefault(); moveCursor(-1); return; }
          if (k === 'arrowright' || k === 'j' || k === 'k') { e.preventDefault(); moveCursor(1); return; }
          if (k === ' ' || k === 'enter') { e.preventDefault(); pickFig(st.find.cur); return; }
        }
        if (LANE_KEY[k] != null) { e.preventDefault(); press(LANE_KEY[k]); return; }
        if (k === ' ' || k === 'h') { e.preventDefault(); hug(); return; }
        if (k === 'w') { e.preventDefault(); water(); }
      };
      const blur = () => { if (st.begun && !st.over && !st.tut) pause(true); };
      const vis = () => { if (document.hidden) blur(); };
      const cleanup = () => {
        if (raf) cancelAnimationFrame(raf); if (sched) clearInterval(sched); timers.forEach(clearTimeout); timers.clear(); clearTimeout(chipT);
        window.removeEventListener('keydown', key, true); window.removeEventListener('blur', blur); window.removeEventListener('resize', measure);
        document.removeEventListener('visibilitychange', vis);
        try { ac && ac.close(); } catch (e) {} el.remove();
        if (cur === st) cur = null;
      };
      $('.mg-pause').onclick = e => { const b = e.target.dataset && e.target.dataset.mg; if (b === 'resume') pause(false); if (b === 'howto') howTo(); if (b === 'quit') { pause(false); finish('quit'); } };
      window.addEventListener('keydown', key, true); window.addEventListener('blur', blur); window.addEventListener('resize', measure);
      document.addEventListener('visibilitychange', vis);

      /* the first-time tutorial: a practice floor (st.tut), each thing done once */
      let tutRes = 'seen';
      const tutP = o.tutorial === false || (sim && !window.FemcTutorial) ? Promise.resolve(null) : tutLib();
      const TFACE = face('cherry', 'happy');
      const practice = kind => new Promise(ok => { tp = { kind, n: 0, ok: () => { tp = null; ok(); } }; });
      const tutSteps = replay => [
        { target: null, say: 'Okay. Rules for tonight: you dance, you stay where I can see you, you drink water. Practice first. Nothing counts yet.' },
        { target: '.rv-lanes', say: 'Arrows fall to the lit line. Hit each one <b>as it lands, on the beat</b>: D F J K, the arrow keys, or tap its lane. Hit three.', wait: replay ? 'click' : () => practice('hit') },
        { target: '.rv-love', say: 'Hits and streaks fill <b>Love everyone</b>. Hugs fill it most. Get it high and the whole room glows.' },
        { target: replay ? '.rv-lanes' : () => hugEl, before: () => { if (!replay) spawnHug({ who: 'junkyu', forever: true }, st.t); },
          say: 'When someone dances up to you, <b>hug them</b>: Space, or tap the bubble. On the beat is a perfect hug.', wait: replay ? 'click' : () => practice('hug') },
        { target: '.rv-crew', say: 'That’s us. While you dance, people <b>drift</b> to the edges, then into the crowd. A hug from a drifting friend brings them right back.' },
        { target: replay ? '.rv-crew' : () => findEl, before: () => { if (!replay) { st.crew.asahi.lost = true; st.crew.asahi.drift = 1; openFind(true); } },
          say: 'Between songs the crowd opens up. <b>Find whoever’s lost</b> and pull them back: click them, or ← → and Space. Find Asahi.', wait: replay ? 'click' : () => practice('find') },
        { target: '.rv-water', before: () => { if (!replay) st.thirst = 80; },
          say: '<b>Thirst</b> climbs while you dance. Step off for water (W, or this button), best when the music breathes and it glows. Let it fill up and you crash.', wait: replay ? 'click' : () => practice('water') },
        { target: null, say: 'At the peak the lights go wild and the floor bends: <b>lanes swap places, arrows trail, the timing wobbles</b>. Follow the arrows, not the spots.' },
        { target: '.rv-clock', say: 'The lights come up at 5. I want all six of us standing there when they do. Esc pauses, and How to play shows this again.' },
      ];
      const howTo = () => {
        tutLib().then(T => {
          if (!T || !st.paused || st.over) return;
          $('.mg-pause').hidden = true;
          T.run(el, { steps: tutSteps(true), who: 'Cherry', face: TFACE, calm, perf, replay: true }).then(() => { if (st.paused && !st.over) { $('.mg-pause').hidden = false; $('.mg-pause button')?.focus?.(); } });
        });
      };
      const wipe = () => { st.live.forEach(n => n.el && n.el.remove()); st.live.clear(); notesEls.forEach(n => { n.innerHTML = ''; }); };
      const start = () => { // the real night, fresh
        if (st.over || !alive()) return;
        tp = null; wipe(); hugClose(); closeFind(); endOff();
        Object.assign(st, { tut: false, notes: NOTES, ni: 0, ri: 0, hi: 0, thirst: 0, love: 30, lovePeak: 30, combo: 0, maxCombo: 0, score: 0, perfect: 0, good: 0, ok: 0, miss: 0, sat: 0,
          hugsN: 0, hugsMissed: 0, pulled: 0, wrong: 0, waters: 0, crashes: 0, swaps: 0, order: [0, 1, 2, 3], crew: freshCrew(), warned: false, bar: -1, si: -1, sec: SECTIONS[0], capT: {} });
        st.glow = false; el.classList.remove('tut', 'glow'); placeLanes(); judgeEl.textContent = ''; comboEl.textContent = '';
        st.startMs = perfNow(); setClock(-LEAD);
        showChip('Doors open', 1400);
      };
      const begin = () => {
        if (st.begun || !alive()) return; st.begun = true; window.removeEventListener('keydown', skipT, true);
        tt.classList.add('out'); later(() => tt.remove(), 450);
        audio(); measure();
        st.tut = true; el.classList.add('tut'); st.notes = []; setClock(0);
        if (!sim) { raf = requestAnimationFrame(tick); sched = setInterval(() => { if (!st.paused) schedule(); }, 25); }
        tutP.then(T => {
          if (!T || !alive() || !T.should('rave', o.tutorial)) return start();
          T.run(el, { id: 'rave', steps: tutSteps(false), who: 'Cherry', face: TFACE, calm, perf }).then(r => { tutRes = r; start(); });
        });
      };

      /* the title card: ~1.8 s (click / any key skips) */
      const note = [calm ? 'Flashes reduced' : 'Flashing lights', still ? 'Reduced motion' : '', o.mute ? 'Sound off: watch the lights for the beat' : 'Best with sound'].filter(Boolean).join(' · ');
      const tt = document.createElement('div'); tt.className = 'rv-title';
      tt.innerHTML = `<img src="${ART('title')}" alt="" onerror="this.remove()"><b>PEAK</b><small>An underground club. Your crew. Until the lights come up.</small><p class="rv-note">${esc(note)}</p>`;
      el.appendChild(tt);
      const skipT = e => { if (e.key !== 'Escape') e.preventDefault(); begin(); };
      tt.onclick = begin; window.addEventListener('keydown', skipT, true);
      if (!sim) later(begin, 1800);
      paint(0);

      st.ctl = {
        advance: sec => { if (!sim) return; for (let left = sec; left > 1e-9; left -= 1 / 120) { if (st.paused || st.closed) return; st.simT += Math.min(1 / 120, left); frame(); } },
        press, hug, water, pick: pickFig, breather,
        pickFriends: () => { if (!st.find) return 0; let k = 0; st.find.figs.forEach((f, i) => { if (f.kind === 'friend' && !f.got && st.find) { pickFig(i); k++; } }); return k; },
        pause, quit: () => { pause(false); finish('quit'); }, cont: () => st.cont && st.cont(), skip: begin,
      };
    });
  }
  return { play, SECTIONS, DIFF, CREW, BARS, state: () => cur, ctl: () => cur && cur.ctl };
})();
