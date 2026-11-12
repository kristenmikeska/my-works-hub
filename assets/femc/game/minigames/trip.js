/* FEMC epilogue minigame: The Trip (Nov 11 2026; reworked the same day after Kat's verdict: "I actually like how there's the
   ability to walk around on the map and you can see their models … I want … improvements and depth. More action.").
   A DEMO: not in the story (the main session adds its card to mockups/minigames/index.html). HOAX: Solar Kim and "the crew"
   (Hyunsuk, Asahi, Jaehyuk, Junkyu, Jihoon, Cherry), Hanlim Park, a winter night, Nana (her huge white Samoyed). Mushrooms
   happened off screen; the game is only what the park turns into: trees breathe, the pond is a kaleidoscope mirror, the
   streetlights hum notes, Nana talks (calm, absurd), colours move with the music. Fiction only: nothing about getting, taking or
   dosing anything, no plot, nobody named who isn't in the crew (the park's night guard is just "a torch").

   FemcTrip.play({ host, mute, difficulty, bg, calm, perf, tutorial, onDone }) -> Promise<result>
     host        element to draw into (default document.body; a full-screen overlay is added inside it)
     mute        no audio at all (captions stand in where a sound matters: lamp notes, chords, barks, whistles, the hum)
     difficulty  'easy' | 'normal' | 'hard' (default 'normal'); everything per level is in DIFF below: night length 345 / 315 / 300 s,
                 vibe drain, how far the crew wandered, the shadow-things (how often, how many, how fast, how much a touch costs),
                 Nana's bark cooldown 14 / 18 / 22 s, torches 1 / 1 / 2, each friend's task size; easy shows Nana's math hints
     bg          background id under assets/femc/bg/ (default 'epi-h-park-night'), blurred and hue-shifted behind the drawn park
     calm, perf  Reduce flashes / Performance; default: the game's settings (FemcGame.settings().calm / .perf), else off
     tutorial    true = show the tutorial, false = never, else first time only (FemcTutorial.should('trip'))
     onDone      called with the result too
   result = { won, grade: 'S' | 'A' | 'B' | 'C', ending: 'blanket' | 'sunrise' | 'curdled' | 'quit', quit, back (0-6),
              crew: ids back on the blanket, vibe (average), low (lowest), letGo, lamps, harmonies, pets, drinks, secs,
              tutorial: 'done' | 'skipped' | 'seen',
              moments (good moments found), scrapbook (their ids), barks, shades (shadow-things cleared), hits (shadow touches),
              caught (torch), spooked (friends who let go in fright) }
   Grade: S all six back, never under 25, average >= 65; A all six back, average >= 45; B all six back; C otherwise.
   Endings: blanket = everyone back (the finale: everyone lies down, heads together, and the sky draws them; won);
   sunrise = time ran out first; curdled = the vibe sat at zero for the grace time; quit = Quit from the pause menu.

   How it plays (top-down; the camera follows Solar):
     Walk        arrows / WASD, or hold the mouse / a finger where you want to go.
     Coax        E / Space / Enter near a friend (or tap them, or the Coax button) opens their task:
                   Asahi    the wind keeps dropping its notes: walk under the falling snow-sparks and catch them (action)
                   Hyunsuk  the duck only dances on the beat: stomp (Space / E / the button) on the music's beat, a streak (rhythm)
                   Junkyu   tag: he runs around the playground giggling; tag him (he stops to catch his breath), then one line
                            to the bench he's been apologising to (chase + choice)
                   Jihoon   "snow angel of the self": hold while the ring breathes in, let go while it breathes out
                   Jaehyuk  calculus to the moon: finish his lines (1-3); Solar is bad at math, Nana whispers
                   Cherry   braiding the willow: the strand swings; press its side (← / →) while it's there
                 "Walk away" leaves a task (it starts over next time). Done: they hold her hand and follow in a chain. Walk them
                 onto the blanket and they sit down.
     Vibe        drains all night (slower while someone holds her hand). Up: the blanket's music (stand near it), streetlights
                 (each hums a note; three different ones within 5 s = a chord), Nana (N / Pet / tap him; 20 s between pets),
                 water bottles (Q / Water; holds two; they come back), the pond (stand still at its edge), good moments
                 (glowing polaroids: walk through them; they go in the scrapbook), each friend coaxed and each one back.
     Shadows     the curdle grows shadow-things: a few all night, many more when the vibe is low. They drift toward Solar and
                 whoever's holding her hand. A touch costs vibe; a friend touched lets go and runs back to their spot (take
                 their hand again, no task). Lamp light, the blanket and a torch beam melt them; Nana barks them off (B / Bark;
                 a cooldown).
     Torch       from about a fifth of the night to near dawn, a night guard's torch sweeps the ring path (two on Hard). In the
                 beam: a whistle, vibe down, the last friend in the chain lets go. The beam melts shadow-things too.
     Wind        gusts every 14-26 s: snow streams sideways, trees lean, Solar gets nudged.
     Curdle      under 35 the palette drains, the night turns cold blue, light closes in, the music echoes and goes out of tune,
                 and a figure stands at the edge of the light (only ever at the edge; no face, no harm).
     Sunrise     the sun on the top bar rises with the timer; the park turns dawn pink in the last quarter.
   Esc pauses (Resume / How to play / Quit). Title card ~1.8 s (click / any key skips). The finale (~13 s; click / key skips)
   ends on the end card: grade, counts and the scrapbook (a drawn polaroid per good moment found).

   Look: every character is a drawn top-down chibi sprite (LOOKS: hair colour and cut, outfit, accessories from their HOAX
   portraits) with 4 facings, a walk cycle (legs, arms, bob), idle breathing and blinks, poses for their side quests, emotes
   (♥ ! ? ♪, sweat, shiver), breath clouds in the cold and footprints in the snow; whoever talks gets a floating head bubble
   with their portrait. The park is prerendered once (snow, drifts, paths, the hill, the playground mat, pond stones, hedges,
   a fence) and redrawn each frame in strips with a breathing wave, tinted by the music's hue; a lightmap darkens the night
   with holes for lamps, the blanket, Solar, fireflies, moments and torch beams; snow falls and streams with the wind.

   Sound (Web Audio, made here, no files): the blanket's song (84 bpm arpeggios over a pad, A minor pentatonic, louder near the
   blanket; echo, lowpass and detune grow as the vibe falls), lamp hums with vibrato, a low hum when it curdles, Nana's voice
   and bark, chimes, stomps, sparks, the whistle, gusts, the finale's swell. Mute = no AudioContext at all; captions instead.
   Settings: reduced motion = no breathing / wave / kaleidoscope spin / falling snow / camera zoom, slow colour changes,
   crossfades; Reduce flashes (calm) = no beat pulses, chord flashes or hit flashes, slow hues; Performance = DPR 1, no lightmap
   (a vignette instead), no strip wave, glow blending, trails, breath or CSS filters, fewer flakes, fireflies and pond segments.
   UI chrome is Kat's pink and black; only the park itself is colourful.

   First-time tutorial: window.FemcTutorial (minigames/tutorial.js, loaded on demand) if present, else a small built-in one.
   Practice steps: walk, pass a streetlight, pet Nana, bark a shadow-thing away; info steps for the vibe, torch, moments,
   water and pond, the crew, the sun. Pause → How to play replays it (Next on every step). No clock or drain during it.

   Optional art (probed once; the drawn versions stay when missing; FEMC-ART-WIRING "56"):
     art/minigames/trip/sprite-<id>.webp  a 4 × 4 sprite sheet (rows: facing down, left, right, up; columns: stand, step,
                                          stand, other step), feet at each cell's bottom centre, transparent; ids solar,
                                          hyunsuk, asahi, jaehyuk, junkyu, jihoon, cherry, nana
     art/minigames/trip/ground.webp       the park's ground from straight above (no props), 3200 × 2200 world → any 16:11
     art/minigames/trip/tree.webp, willow.webp, lamp.webp, bench.webp, playground.webp   props from above, transparent
     art/minigames/trip/blanket.webp      the blanket from above, about 3:2 (drawn at 240 × 160 world units)
     art/minigames/trip/title.webp        the title card picture (full bleed)
     art/minigames/trip/sky.webp          the finale's sky (full bleed under the drawn stars and constellations)
     art/minigames/trip/nana.webp         (older hook) a single Nana picture facing right, used when sprite-nana is missing
   Test hooks: FemcTrip.state(), FemcTrip.ctl() → { advance(ms), go(x, y), press(dir, ms), interact(), solve(), pet(), bark(),
   drink(), vibe(v), pause(on), quit(), cont(), skip(), skipFinale(), crew(), moments(), guards(), lamps() }; play({ __sim: true }) runs without
   requestAnimationFrame or audio (with tutorial: true and a FemcTutorial present it runs the tutorial too). */
window.FemcTrip = (() => {
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const bold = s => esc(s).replace(/&lt;(\/?)b&gt;/g, '<$1b>');
  const base = () => (window.FemcGame && window.FemcGame.base) || (document.querySelector('script[src*="minigames/trip"]')?.src.split('assets/')[0]) || '';
  const reduced = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const rnd = (a, b) => a + Math.random() * (b - a);
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const lerp = (a, b, k) => a + (b - a) * k;
  const shuffle = a => a.map(x => [Math.random(), x]).sort((p, q) => p[0] - q[0]).map(p => p[1]);
  const TAU = Math.PI * 2;
  const hsl = (h, s, l, a = 1) => `hsla(${(((h % 360) + 360) % 360).toFixed(0)},${s}%,${l}%,${a})`;
  const ART = id => `${base()}assets/femc/game/art/minigames/trip/${id}.webp`;
  const BG = id => `${base()}assets/femc/bg/${id}.webp`;
  const FACE = (who, f = 'neutral') => `${base()}assets/femc/portraits/${who}-hoax/${f}.webp`;
  const mulberry = a => () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  const angDiff = (a, b) => { let d = (a - b) % TAU; if (d > Math.PI) d -= TAU; if (d < -Math.PI) d += TAU; return Math.abs(d); };
  const mkCanvas = (w, h) => { try { const c = document.createElement('canvas'); c.width = w; c.height = h; return c.getContext ? c : null; } catch (e) { return null; } };

  /* the park (world units) */
  const WW = 3200, WH = 2200, HOME = { x: 1600, y: 1250 }, BLANKET_R = 120, SPEED = 175;
  const POND = { x: 1600, y: 700, rx: 300, ry: 170 };
  const RING = { x: HOME.x, y: HOME.y - 150, rx: 820, ry: 560 };
  const ringAt = a => ({ x: RING.x + Math.cos(a) * RING.rx, y: RING.y + Math.sin(a) * RING.ry });
  const inPond = (x, y, m = 0) => ((x - POND.x) / (POND.rx + m)) ** 2 + ((y - POND.y) / (POND.ry + m)) ** 2 < 1;
  const pondQ = (x, y) => Math.sqrt(((x - POND.x) / POND.rx) ** 2 + ((y - POND.y) / POND.ry) ** 2);
  const DIFF = {
    easy:   { len: 345, drain: 1.4, spread: 1,    zero: 14, letGo: 12, hint: true,
              shBase: .014, shLow: .10, shMax: 2, shSpd: 52, shHit: 7,  bark: 14, torches: 1, torchV: 46, torchHit: 8,
              sparks: 5, sparkGap: 2100, sparkV: 92,  stomps: 6,  stompWin: 175, tags: 2, tagV: 138, sway: 2.0, braid: 8,
              breaths: 3, qs: 3 },
    normal: { len: 315, drain: 1.7, spread: 1.15, zero: 10, letGo: 9, hint: false,
              shBase: .028, shLow: .16, shMax: 4, shSpd: 66, shHit: 9,  bark: 18, torches: 1, torchV: 56, torchHit: 11,
              sparks: 6, sparkGap: 1750, sparkV: 108, stomps: 8,  stompWin: 140, tags: 3, tagV: 156, sway: 2.6, braid: 10,
              breaths: 3, qs: 3 },
    hard:   { len: 300, drain: 1.9, spread: 1.25, zero: 7,  letGo: 7, hint: false,
              shBase: .045, shLow: .22, shMax: 6, shSpd: 80, shHit: 11, bark: 22, torches: 2, torchV: 64, torchHit: 14,
              sparks: 8, sparkGap: 1450, sparkV: 128, stomps: 10, stompWin: 115, tags: 4, tagV: 170, sway: 3.2, braid: 12,
              breaths: 4, qs: 4 },
  };

  /* how everyone looks (from their HOAX portraits): hair colour and cut, outfit, accessories. Units: a chibi about 66 tall */
  const LOOKS = {
    solar:   { skin: '#f4d7c6', eye: '#3f8f5f', blush: .5, hair: { c: '#2e1c16', c2: '#55362a', long: 2.0, fy: -.3, jag: .05, side: 1.5, wave: 1 },
               top: '#1a1216', stripe: '#ee8fb6', stripes: 'body', legs: '#1b1418', shoe: '#0e0a0c', choker: 1, chain: 1, scale: .96 },
    hyunsuk: { skin: '#f1d2bd', eye: '#2b1d18', hair: { c: '#8a1c2b', c2: '#c03a48', spikes: 7, sh: .5, fy: -.5, jag: .12, side: .35 },
               jacket: '#2a2a31', inner: '#141216', legs: '#1c1b20', shoe: '#0d0c0e', chain: 2, lip: 1, ear: 1, scale: .9 },
    asahi:   { skin: '#f2d6c6', eye: '#2b1d18', hair: { c: '#1e1a1d', c2: '#3d353b', fy: -.1, jag: .2, side: .8, nape: 1 },
               jacket: '#2c2d33', inner: '#141216', legs: '#16151a', shoe: '#0c0b0d', choker: 1, chain: 1, gauge: 1, pin: 1, scale: .97 },
    jaehyuk: { skin: '#f3d8c8', eye: '#2b1d18', hair: { c: '#141217', c2: '#302b34', fy: -.2, jag: .03, side: .62 },
               top: '#18171c', hood: 1, legs: '#1b1a1f', shoe: '#0d0c0e', glasses: 1, chain: 1, scale: 1.02 },
    junkyu:  { skin: '#f2d4c0', eye: '#2b1d18', hair: { c: '#18141a', c2: '#352d36', fy: -.22, jag: .07, side: .55 },
               top: '#16151a', stripe: '#e9e7ea', stripes: 'arms', legs: '#1d1c22', shoe: '#0d0c0e', chain: 1, scale: 1.04 },
    jihoon:  { skin: '#f1d3c0', eye: '#2b1d18', hair: { c: '#0f0d12', c2: '#2d2833', fy: -.06, jag: .14, sweep: .4, side: .85 },
               jacket: '#26262c', inner: '#3a3a40', rip: 1, legs: '#17161b', shoe: '#0d0c0e', choker: 1, chain: 2, ear: 1, scale: 1.1 },
    cherry:  { skin: '#f5dacb', eye: '#4f86c6', blush: .45, hair: { c: '#141014', c2: '#332a31', long: 2.1, fy: -.36, jag: .04, side: 1.6, wave: 1 },
               jacket: '#1c1a1e', shine: 1, inner: '#efe2cc', legs: '#151318', shoe: '#1a1416', boots: 1, choker: 1, scale: .95 },
    guard:   { skin: '#e6c6ae', eye: '#1d1612', hair: { c: '#1b1e26', c2: '#2f3442', fy: -.42, jag: 0, side: .3, hat: 1 },
               jacket: '#232733', inner: '#3c4250', legs: '#1a1d25', shoe: '#0c0d10', scale: 1.08 },
  };
  // the crew: where they wandered (offset from the blanket, x spread), what they're doing, their task, their lines
  const CREW = [
    { id: 'asahi', name: 'Asahi', at: [-690, -736], task: 'sparks', pose: 'conduct', doing: 'conducting the wind (it keeps dropping its notes)',
      call: 'Asahi: Sol. Over here. Don’t make it weird.', find: 'Asahi: The wind keeps dropping its notes. Catch them. Don’t make it weird.',
      done: 'Asahi: …Fine. It can play the rest without me.', back: 'Asahi: No one cares that I was good at that.', letgo: 'Asahi: The wind’s calling me back. Rude.',
      spook: 'Asahi: Nope. Nope. Something touched my soul.', chat: ['Asahi: Your dog keeps looking at me like he knows things.', 'Asahi: This is fine. I’m having a normal one.'] },
    { id: 'junkyu', name: 'Junkyu', at: [-1012, 92], task: 'tag', pose: 'bow', doing: 'playing tag with a bench (he’s losing)',
      call: 'Junkyu: SOL! Sol. You have to meet this bench.', find: 'Junkyu: I said sorry to the bench and it tagged me. So now YOU’RE it. Wait—',
      done: 'Junkyu: It forgave me! Sol, it FORGAVE me.', back: 'Junkyu: I love this blanket. I’m apologising to it later, just in case.', letgo: 'Junkyu: Wait. I didn’t apologise to the other bench.',
      spook: 'Junkyu: Something cold hugged me and it WASN’T NICE.', chat: ['Junkyu: Your hand is so warm. Is that normal? Is MY hand normal?', 'Junkyu: I love you guys. I love the snow. I love this hand.'] },
    { id: 'jihoon', name: 'Jihoon', at: [805, 598], task: 'angel', pose: 'lie', doing: 'making a snow angel of the self',
      call: 'Jihoon: Sol. SOL. Come witness me.', find: 'Jihoon: Behold. A snow angel of the self. Of the almighty Hoon. Lie down. Breathe with me.',
      done: 'Jihoon: You felt it too. Astonishing.', back: 'Jihoon: The almighty Hoon returns to his throne. It is a blanket.', letgo: 'Jihoon: My angel misses me. I Must Go.',
      spook: 'Jihoon: A Grave Sin. Something touched the king.', chat: ['Jihoon: Sol. Sol. Your hair is doing a thing. A good thing.', 'Jihoon: Remember when we were five and you bit me. Good times.'] },
    { id: 'hyunsuk', name: 'Hyunsuk', at: [540, -690], task: 'stomp', pose: 'phone', doing: 'filming a duck that only dances on the beat',
      call: 'Hyunsuk: Sol! Bro. Bro. Come here, quiet.', find: 'Hyunsuk: The duck only dances on the beat, man. Stomp with me. On the BEAT.',
      done: 'Hyunsuk: Got it. Best duck footage of my life, bro.', back: 'Hyunsuk: Watch it back with me later. You’ll see it.', letgo: 'Hyunsuk: The duck came back. I swear the duck came back.',
      spook: 'Hyunsuk: Man, something just walked THROUGH me.', chat: ['Hyunsuk: Don’t tell anyone I held your hand, man. Okay, tell them.', 'Hyunsuk: I can hear the lamps. Can you hear the lamps?'] },
    { id: 'jaehyuk', name: 'Jaehyuk', at: [1127, -207], task: 'moon', pose: 'moon', doing: 'reciting calculus to the moon',
      call: 'Jaehyuk: Sol. The moon has questions.', find: 'Jaehyuk: …and so the moon, being continuous, is differentiable everywhere. Help me finish.',
      done: 'Jaehyuk: The moon agrees. It’s been studied.', back: 'Jaehyuk: I have never skipped a blanket in my life.', letgo: 'Jaehyuk: I left a proof unfinished. The moon’s waiting.',
      spook: 'Jaehyuk: That was not a continuous function. I’m leaving.', chat: ['Jaehyuk: Statistically, this is the best night of the year.', 'Jaehyuk: You walk like you’re solving for x.'] },
    { id: 'cherry', name: 'Cherry', at: [-598, 736], task: 'braid', pose: 'braid', doing: 'braiding a willow',
      call: 'Cherry: SOLAR KIM. Get over here, she needs you.', find: 'Cherry: Don’t talk to me, I’m doing her hair. (Her = the willow.) Grab the strand when it swings to you.',
      done: 'Cherry: She looks so good. I’m actually crying.', back: 'Cherry: i love u bitch. Sit down, the blanket’s warm.', letgo: 'Cherry: She’s got a tangle. I can feel it from here.',
      spook: 'Cherry: Oh HELL no. Something breathed on me.', chat: ['Cherry: If anyone posts this I’m breaking their phone. Lovingly.', 'Cherry: Your hand is freezing, Sol. Here. Pocket.'] },
  ];
  const SEATS = [[-50, -28], [-10, -34], [32, -26], [-46, 26], [-4, 32], [40, 24]];
  const NANA = [
    'Nana: I have always been able to talk. You never asked.', 'Nana: The snow is just the sky, lying down for a bit.',
    'Nana: Tonight I would like to be called by my full name. It is Nana.', 'Nana: Every bench in this park has a secret. Most of them are gum.',
    'Nana: Jihoon calls me his son. I have decided to allow it.', 'Nana: The lamps are singing in A minor. I prefer my bowl.',
    'Nana: Breathe in. I am breathing. We are breathing at each other.', 'Nana: The trees are only breathing because they saw you do it.',
    'Nana: I have counted everyone. I counted you twice, because I like you.', 'Nana: That willow owes me money.',
    'Nana: If a shadow comes, say my name. I will say a louder word.', 'Nana: The torch man is only doing his job. His job is ruining things.',
  ];
  const NANA_DARK = ['Nana: Stay near the light, Sol.', 'Nana: Don’t look at the edge. Look at me.', 'Nana: It’s only standing there. Let’s go to the music.', 'Nana: Pet me. It helps. It helps both of us.'];
  const NANA_PET = ['Nana: Yes. There. That is the spot of the universe.', 'Nana: I accept this offering.', 'Nana: Again, but with feeling.', 'Nana: You are doing wonderfully. So am I.'];
  const NANA_BARK = ['Nana: WOOF. (That means “leave”.)', 'Nana: BORK. Shadows are not invited.', 'Nana: WOOF. I am very big, actually.', 'Nana: Woof. Do not touch my people.'];
  const NANA_LEFT = ['Nana: Everyone has wandered off. This is normal. Bring them back to the blanket before the sun.'];
  const TORCH = ['A torch finds you. A whistle. “Park’s closed!” Everyone scatters for a second.', 'The beam sweeps over you. A whistle, sharp as glass. Somebody lets go.', 'Light in your face. “HEY.” Nobody follows the voice, but somebody lets go.'];
  const HIT = ['Something cold went through you. The colours flinch.', 'A shadow brushes past. The music skips.', 'Cold, all at once, like a missed step.'];
  // good moments: polaroids that glow where they happened (the end's scrapbook); who = who's in the drawn photo
  const MOMENTS = [
    { id: 'bow', cap: 'Junkyu teaching Nana to bow. Nana teaching Junkyu to sit.', who: ['junkyu', 'nana'], h: 30 },
    { id: 'snort', cap: 'Cherry’s laugh, the real one, the snort one.', who: ['cherry', 'solar'], h: 340 },
    { id: 'almost', cap: 'Asahi almost smiling. Almost.', who: ['asahi'], h: 260 },
    { id: 'graph', cap: 'Jaehyuk drawing a graph in the snow. It’s a heart.', who: ['jaehyuk'], h: 320 },
    { id: 'shake', cap: 'Hyunsuk and Jihoon doing the handshake from middle school.', who: ['hyunsuk', 'jihoon'], h: 200 },
    { id: 'cloud', cap: 'Everybody’s breath in the air at once, like one cloud.', who: ['junkyu', 'cherry', 'solar', 'jaehyuk'], h: 180 },
    { id: 'flake', cap: 'Nana catching a snowflake. Then another. Then all of them.', who: ['nana'], h: 210 },
    { id: 'sol', cap: 'Jihoon saying “Sol” like it’s the first time.', who: ['jihoon', 'solar'], h: 300 },
    { id: 'hum', cap: 'The lamps humming the blanket’s song, a little flat.', who: ['solar', 'nana'], h: 40 },
    { id: 'hands', cap: 'Junkyu trying to hold everyone’s hands at once.', who: ['asahi', 'junkyu', 'hyunsuk'], h: 100 },
    { id: 'slide', cap: 'Solar and Cherry, arms linked, sliding down the ice path.', who: ['solar', 'cherry'], h: 280 },
    { id: 'all', cap: 'The willow braided. The wind conducted. The moon convinced.', who: ['cherry', 'asahi', 'jaehyuk'], h: 240 },
  ];
  // the blanket's song: A minor pentatonic, 84 bpm eighths
  const EIGHTH = 60000 / 84 / 2, BEAT = EIGHTH * 2;
  const CHORDS = [[220, 261.63, 329.63, 440], [174.61, 220, 261.63, 349.23], [196, 261.63, 329.63, 392], [196, 246.94, 293.66, 392]];
  const ARP = [0, 1, 2, 3, 2, 1, 2, 3];
  const BAR_HUES = [320, 25, 170, 265];
  const PENT = [['A', 220], ['C', 261.63], ['D', 293.66], ['E', 329.63], ['G', 392], ['A', 440], ['C', 523.25], ['D', 587.33], ['E', 659.25], ['G', 783.99]];
  // the tasks' words
  const BENCH = [
    { say: 'Junkyu: Okay. Okay. Now I have to say sorry to the bench for the tag. What do I say?', opts: [['Tell it how many people it’s held. That’s a lot of people.', 1], ['Kyu, benches can’t hear you.', 0, 'Junkyu gasps. The bench definitely heard that.'], ['Sit on it again. Assert dominance.', 0, 'Junkyu: I could NEVER.']] },
    { say: 'Junkyu: What if it’s still mad?', opts: [['Then we sit next to it until it isn’t.', 1], ['Bribe it. Benches love snacks.', 0, 'Junkyu: It’s not that kind of bench, Sol.'], ['Leave it a one-star review.', 0, 'Junkyu looks at you like you kicked Nana.']] },
    { say: 'Junkyu: Should I say goodbye? Is that weird?', opts: [['Say thank you instead. Benches like that.', 1], ['Shake its hand. Find a hand.', 0, 'Junkyu checks the bench for a hand. There isn’t one.'], ['Ghost it. It’s a bench.', 0, 'Junkyu: That’s how this STARTED.']] },
  ];
  const TAG = ['Junkyu: NO. You got me. Okay but I’m faster now—', 'Junkyu: That doesn’t count, I was apologising to the slide!', 'Junkyu: Tag! I mean, you tagged. I mean—', 'Junkyu: (wheezing) Okay. Okay. One more.'];
  const MOON = [
    { q: 'Jaehyuk: The derivative of x squared is—', opts: [['2x', 1], ['x squared, but tired', 0], ['the moon', 0]] },
    { q: 'Jaehyuk: And the derivative of sine is—', opts: [['cosine', 1], ['sine, but leaning', 0], ['a little wave', 0]] },
    { q: 'Jaehyuk: Integrate, and never forget the—', opts: [['plus C', 1], ['plus Nana', 0], ['plus snacks', 0]] },
    { q: 'Jaehyuk: One over x, as x goes to infinity—', opts: [['zero', 1], ['forever', 0], ['the moon, again', 0]] },
  ];
  const MOON_BAD = ['Jaehyuk: Close. Not close.', 'The moon frowns, very slightly.', 'Jaehyuk: You used to copy my homework, Sol.'];
  const STOMP_GOOD = ['Hyunsuk: YES. It’s dancing. Keep going, man.', 'Hyunsuk: On the beat, bro. ON the beat.', 'The duck does a little spin.'];
  const STOMP_BAD = ['Hyunsuk: Bro, that was off. The duck saw.', 'The duck stops dancing and stares at you.'];
  const SPARK = ['Asahi: That one was a C. Good.', 'Asahi: Fine. Nice catch. No one cares.', 'Asahi: Another. The wind’s getting sloppy.'];
  const ANGEL_GOOD = ['Jihoon: Yes. You see the self now.', 'Jihoon: Breathe like a king. Like me.', 'Jihoon: The snow is proud of you.'];
  const ANGEL_BAD = ['Jihoon: Again. Breathe like you mean it.', 'Jihoon: That was a peasant breath, Sol.'];
  const BRAID_BAD = ['Cherry: Over, under, Sol. Over, under.', 'Cherry: You’re pulling her hair. She hates that.', 'Cherry: Wait for it to come to you.'];
  const KEYDIR = { ArrowLeft: 'l', a: 'l', A: 'l', ArrowRight: 'r', d: 'r', D: 'r', ArrowUp: 'u', w: 'u', W: 'u', ArrowDown: 'd', s: 'd', S: 'd' };
  // the finale's constellations: one per person (polylines in a -1..1 box), drawn in the sky with their line
  const STARS = [
    { who: 'solar', line: 'The sun. It’s coming up anyway.', h: 330, p: [[[0, 0], [0, -1]], [[0, 0], [.72, -.72]], [[0, 0], [1, 0]], [[0, 0], [.72, .72]], [[0, 0], [0, 1]], [[0, 0], [-.72, .72]], [[0, 0], [-1, 0]], [[0, 0], [-.72, -.72]]] },
    { who: 'hyunsuk', line: 'Hyunsuk: Duck. Told you, man. Told you there was a duck.', h: 50, p: [[[-.85, .15], [-.35, .5], [.45, .45], [.8, .1], [.45, -.12], [.42, -.6], [.12, -.75], [-.1, -.5], [-.02, -.18], [-.85, .15]], [[.12, -.75], [-.25, -.62]]] },
    { who: 'asahi', line: 'Asahi: That’s a note. No one cares. (He cares.)', h: 190, p: [[[-.45, .65], [-.3, -.75], [.5, -.45], [.42, .4]], [[-.62, .62], [-.45, .65], [-.42, .8], [-.62, .62]], [[.25, .38], [.42, .4], [.45, .55], [.25, .38]]] },
    { who: 'jaehyuk', line: 'Jaehyuk: That one’s an integral. I’m not explaining it.', h: 210, p: [[[.55, -.9], [.25, -.82], [.08, -.45], [-.05, .4], [-.22, .82], [-.55, .9]]] },
    { who: 'junkyu', line: 'Junkyu: That one’s a bench. It forgave us.', h: 30, p: [[[-.9, -.1], [.9, -.1], [.9, .12], [-.9, .12], [-.9, -.1]], [[-.7, .12], [-.7, .62]], [[.7, .12], [.7, .62]], [[-.9, -.1], [-.85, -.55], [.85, -.55], [.9, -.1]]] },
    { who: 'jihoon', line: 'Jihoon: A crown. For the almighty Hoon. Don’t argue with the sky.', h: 45, p: [[[-.8, .5], [-.8, -.4], [-.4, .02], [0, -.72], [.4, .02], [.8, -.4], [.8, .5], [-.8, .5]]] },
    { who: 'cherry', line: 'Cherry: Cherries. Obviously. I’m the main character.', h: 345, p: [[[-.45, .45], [-.15, -.55], [.45, -.8], [.4, .35]], [[-.7, .45], [-.45, .2], [-.2, .45], [-.45, .7], [-.7, .45]], [[.15, .35], [.4, .1], [.65, .35], [.4, .6], [.15, .35]]] },
    { who: 'nana', line: 'Nana: That one is me. I have always been in the sky.', h: 200, p: [[[-.7, -.15], [-.5, -.85], [-.2, -.4], [.2, -.4], [.5, -.85], [.7, -.15], [.62, .4], [.2, .72], [-.2, .72], [-.62, .4], [-.7, -.15]], [[0, .2], [0, .45]]] },
  ];
  const STAR_MS = 1250, FIN_MS = STARS.length * STAR_MS + 4200;

  /* the park's layout: the same every night (seeded), the crew's spots scaled by difficulty */
  const layout = D => {
    const R = mulberry(20261111);
    const crew = CREW.map((c, i) => {
      const x = clamp(HOME.x + c.at[0] * D.spread, 140, WW - 140), y = clamp(HOME.y + c.at[1] * D.spread, 140, WH - 140);
      return { ...c, x, y, hx: x, hy: y, state: 'out', again: false, seat: SEATS[i], order: 0, ph: R() * TAU, dir: 'd', walk: 0, react: null, called: false, puff: R() * 3000 };
    });
    const by = id => crew.find(c => c.id === id);
    const jh = by('jihoon'), jk = by('junkyu'), chy = by('cherry');
    const hill = { x: jh.x + 20, y: jh.y - 10, rx: 250, ry: 190 };
    const play = { x: jk.x + 10, y: jk.y - 10, w: 380, h: 260 };
    const lamps = [{ x: HOME.x + 200, y: HOME.y - 70 }];
    for (let i = 0; i < 13; i++) {
      const a = i / 13 * TAU + .2;
      lamps.push({ x: HOME.x + Math.cos(a) * 820 * (.88 + R() * .24), y: HOME.y - 150 + Math.sin(a) * 560 * (.88 + R() * .24) });
    }
    lamps.forEach((l, i) => {
      let n = 0; while (inPond(l.x, l.y, 70) && n++ < 60) l.y += l.y < POND.y ? -20 : 20;
      l.x = clamp(l.x, 80, WW - 80); l.y = clamp(l.y, 90, WH - 60);
      const p = PENT[(i * 3) % PENT.length]; l.name = p[0]; l.f = p[1]; l.hue = (i * 47) % 360; l.lit = 0; l.at = -1e9; l.i = i;
    });
    const inPlay = (x, y, m = 0) => Math.abs(x - play.x) < play.w / 2 + m && Math.abs(y - play.y) < play.h / 2 + m;
    const onHill = (x, y) => ((x - hill.x) / hill.rx) ** 2 + ((y - hill.y) / hill.ry) ** 2 < 1;
    const far = (x, y, r) => Math.hypot(x - HOME.x, y - HOME.y) > 260 && !inPond(x, y, 90) && !inPlay(x, y, 40) && !onHill(x, y) && crew.every(c => Math.hypot(x - c.x, y - c.y) > r) && lamps.every(l => Math.hypot(x - l.x, y - l.y) > 70);
    const trees = [];
    for (let k = 0; k < 700 && trees.length < 70; k++) {
      const x = 80 + R() * (WW - 160), y = 110 + R() * (WH - 180);
      if (far(x, y, 150) && trees.every(t => Math.hypot(x - t.x, y - t.y) > 105)) trees.push({ x, y, r: 34 + R() * 26, h: R() * 360, ph: R() * TAU, pine: R() < .6 });
    }
    trees.push({ x: chy.x - 80, y: chy.y - 10, r: 82, h: 120, ph: 1, willow: true });
    const benches = [{ x: play.x + 120, y: play.y + 150 }, { x: HOME.x - 420, y: HOME.y + 330 }, { x: HOME.x + 520, y: HOME.y + 120 }, { x: POND.x - 360, y: POND.y + 120 }];
    const bottles = [];
    for (let k = 0; k < 200 && bottles.length < 7; k++) {
      const a = R() * TAU, r = 340 + R() * 900, x = HOME.x + Math.cos(a) * r, y = HOME.y + Math.sin(a) * r * .7;
      if (x > 80 && x < WW - 80 && y > 90 && y < WH - 60 && !inPond(x, y, 40) && !inPlay(x, y) && bottles.every(b => Math.hypot(x - b.x, y - b.y) > 260)) bottles.push({ x, y, gone: -1e9 });
    }
    const moments = [];
    for (let k = 0; k < 600 && moments.length < MOMENTS.length; k++) {
      const a = R() * TAU, r = 300 + R() * 1050, x = HOME.x + Math.cos(a) * r, y = HOME.y + Math.sin(a) * r * .72;
      if (x > 100 && x < WW - 100 && y > 120 && y < WH - 80 && !inPond(x, y, 50) && !inPlay(x, y, 20) && moments.every(m => Math.hypot(x - m.x, y - m.y) > 300)
        && bottles.every(b => Math.hypot(x - b.x, y - b.y) > 90) && trees.every(t => Math.hypot(x - t.x, y - t.y) > 50)) {
        const M = MOMENTS[moments.length]; moments.push({ ...M, x, y, got: false, ph: R() * TAU, late: moments.length >= 8 });
      }
    }
    const blobs = Array.from({ length: 16 }, () => ({ x: R() * WW, y: R() * WH, r: 220 + R() * 260, h: R() * 360, ph: R() * TAU }));
    const flies = Array.from({ length: 48 }, () => {
      const l = lamps[Math.floor(R() * lamps.length)], a = R() * TAU, r = 40 + R() * 160;
      return { bx: l.x + Math.cos(a) * r, by: l.y + Math.sin(a) * r * .7 - 30, h: R() * 360, ph: R() * TAU, sp: .5 + R(), x: 0, y: 0 };
    });
    const guards = Array.from({ length: D.torches }, (_, i) => {
      const a0 = i ? .55 : -2.65, a1 = i ? 2.55 : -.55;
      return { i, a0, a1, a: lerp(a0, a1, .3 + i * .4), v: (D.torchV / 700) * (i ? -1 : 1), ph: i * 2.1, pause: 0, on: false, x: 0, y: 0, beam: 0, walk: 0, dir: 'd' };
    });
    return { crew, lamps, trees, benches, bottles, moments, blobs, flies, guards, hill, play, inPlay };
  };

  /* drawing the people: top-down chibi sprites (feet at x, y), 4 facings, a walk cycle, idle breathing, blinks, poses */
  const rrect = (g, x, y, w, h, r) => { g.beginPath(); g.moveTo(x + r, y); g.lineTo(x + w - r, y); g.quadraticCurveTo(x + w, y, x + w, y + r); g.lineTo(x + w, y + h - r); g.quadraticCurveTo(x + w, y + h, x + w - r, y + h); g.lineTo(x + r, y + h); g.quadraticCurveTo(x, y + h, x, y + h - r); g.lineTo(x, y + r); g.quadraticCurveTo(x, y, x + r, y); g.closePath(); };
  const limb = (g, x0, y0, x1, y1, w, c) => { g.strokeStyle = c; g.lineWidth = w; g.lineCap = 'round'; g.beginPath(); g.moveTo(x0, y0); g.lineTo(x1, y1); g.stroke(); };
  const dot = (g, x, y, r, c) => { g.fillStyle = c; g.beginPath(); g.arc(x, y, r, 0, TAU); g.fill(); };
  const longMass = (g, H, hy, r, back) => {
    const L2 = H.long * r, wv = H.wave ? 1 : 0;
    g.fillStyle = H.c; g.beginPath();
    g.moveTo(-r * 1.12, hy - 2);
    g.quadraticCurveTo(-r * (1.45 + wv * .1), hy + L2 * .45, -r * 1.25, hy + L2);
    for (let i = 0; i <= 6; i++) { const u = i / 6, x = -r * 1.25 + u * r * 2.5; g.quadraticCurveTo(x - r * .2, hy + L2 + (i % 2 ? r * .22 : -r * .05) * (wv + .3), x, hy + L2 - (back ? 0 : r * .1)); }
    g.quadraticCurveTo(r * (1.45 + wv * .1), hy + L2 * .45, r * 1.12, hy - 2);
    g.arc(0, hy, r * 1.12, 0, Math.PI, true); g.closePath(); g.fill();
    if (wv) { g.strokeStyle = H.c2; g.lineWidth = 1.4; for (let i = -2; i <= 2; i++) { g.beginPath(); g.moveTo(i * r * .4, hy + r * .5); g.quadraticCurveTo(i * r * .5 + r * .25, hy + L2 * .6, i * r * .45, hy + L2 * .92); g.stroke(); } }
  };
  function human(g, L, x, y, o = {}) {
    const k = (L.scale || 1) * (o.size || 1), t = o.t || 0, dir = o.dir || 'd', still = !!o.still, pose = o.pose || 'stand';
    const s = o.walk && !still ? Math.sin(o.ph || 0) : 0;
    const bob = o.walk && !still ? Math.abs(s) * 1.8 : 0;
    const breath = still ? 0 : Math.sin(t * 2.2 + (o.seed || 0)) * .5;
    const dip = pose === 'bow' ? 4 + (still ? 0 : Math.max(0, Math.sin(t * 2.4 + (o.seed || 0))) * 4) : 0;
    const H = L.hair, r = 16;
    const side = dir === 'l' || dir === 'r', back = dir === 'u';
    g.save(); g.translate(x + (o.jit || 0), y - (o.hop || 0)); if (dir === 'l') g.scale(-1, 1); g.scale(k, k);
    const bodyY = -35 + bob * .6 - breath + dip * .4, hy = -50 + bob + dip - breath * .6;
    const sleeve = L.jacket || L.top;
    const blink = o.blink || (!still && ((t * 1000 + (o.seed || 0) * 997) % 3700) < 120);
    // long hair behind the body (front and side views)
    if (H.long && !back && !side) longMass(g, H, hy, r, false);
    // far arm (side view)
    if (side) { const ax = pose === 'phone' || pose === 'braid' ? 10 : -s * 6; limb(g, -1, bodyY + 4, ax - 1, bodyY + 17, 5.5, shade(sleeve, -18)); dot(g, ax - 1, bodyY + 18, 2.6, L.skin); }
    // legs
    if (side) {
      limb(g, -2, -13, -2 - s * 5, -1, 5, L.legs); limb(g, 2, -13, 2 + s * 5, -1, 5, L.legs);
      g.fillStyle = L.shoe; g.beginPath(); g.ellipse(-s * 5 + 1, -.5, 4.5, 2.6, 0, 0, TAU); g.ellipse(s * 5 + 3, -.5, 4.5, 2.6, 0, 0, TAU); g.fill();
      if (L.boots) { g.fillStyle = L.shoe; g.fillRect(-s * 5 - 4, -6, 6, 5); g.fillRect(s * 5 - 1, -6, 6, 5); }
    } else {
      const lL = 13 - Math.max(0, s) * 3, lR = 13 - Math.max(0, -s) * 3;
      g.fillStyle = L.legs; g.fillRect(-7, -13, 5, lL); g.fillRect(2, -13, 5, lR);
      g.fillStyle = L.shoe; g.beginPath(); g.ellipse(-4.5, -13 + lL, 4, 2.6, 0, 0, TAU); g.ellipse(4.5, -13 + lR, 4, 2.6, 0, 0, TAU); g.fill();
      if (L.boots) { g.fillRect(-7.5, -18 + lL, 6, 5); g.fillRect(1.5, -18 + lR, 6, 5); }
    }
    // hood behind the head
    if (L.hood && !back) { g.fillStyle = shade(sleeve, 10); g.beginPath(); g.ellipse(0, bodyY + 1, 12, 5, 0, 0, TAU); g.fill(); }
    // body
    const bw = side ? 18 : 26;
    g.fillStyle = sleeve; rrect(g, -bw / 2, bodyY, bw, 24, 7); g.fill();
    if (L.stripes === 'body') { g.save(); rrect(g, -bw / 2, bodyY, bw, 24, 7); g.clip(); g.fillStyle = L.stripe; for (let yy = bodyY + 3; yy < bodyY + 24; yy += 5) g.fillRect(-bw / 2, yy, bw, 2.2); g.restore(); }
    if (L.jacket && !back) {
      g.fillStyle = L.inner; if (side) g.fillRect(4, bodyY + 2, 4, 20); else g.fillRect(-4, bodyY + 2, 8, 21);
      if (!side) { g.fillStyle = shade(L.jacket, -14); g.beginPath(); g.moveTo(-4, bodyY + 1); g.lineTo(-9, bodyY + 1); g.lineTo(-4, bodyY + 10); g.moveTo(4, bodyY + 1); g.lineTo(9, bodyY + 1); g.lineTo(4, bodyY + 10); g.fill(); }
    }
    if (L.shine) { g.strokeStyle = 'rgba(255,255,255,.28)'; g.lineWidth = 1.5; g.beginPath(); g.moveTo(-bw / 2 + 3, bodyY + 5); g.lineTo(-bw / 2 + 3, bodyY + 19); g.stroke(); }
    if (L.rip && !back) { g.strokeStyle = 'rgba(210,210,220,.55)'; g.lineWidth = 1; g.beginPath(); g.moveTo(-10, bodyY + 15); g.lineTo(-7, bodyY + 17); g.moveTo(7, bodyY + 8); g.lineTo(10, bodyY + 10); g.stroke(); }
    if (L.hood && !back && !side) { limb(g, -3, bodyY + 2, -3, bodyY + 10, 1.2, '#e8e4ea'); limb(g, 3, bodyY + 2, 3, bodyY + 10, 1.2, '#e8e4ea'); }
    if (L.chain && !back && !side) { g.strokeStyle = '#d7dae2'; g.lineWidth = 1.1; g.beginPath(); g.moveTo(-6, bodyY + 1); g.quadraticCurveTo(0, bodyY + 9, 6, bodyY + 1); g.stroke(); if (L.chain > 1) { g.beginPath(); g.moveTo(-7, bodyY + 1); g.quadraticCurveTo(0, bodyY + 13, 7, bodyY + 1); g.stroke(); } dot(g, 0, bodyY + 8.5, 1.2, '#eef0f4'); }
    if (L.pin && !back) dot(g, side ? 5 : -8, bodyY + 10, 1.4, '#e8eaf0');
    // near arms
    const armC = L.stripes === 'arms' ? L.stripe : sleeve;
    const arm = (x0, y0, x1, y1) => { limb(g, x0, y0, x1, y1, 5.5, armC); if (L.stripes === 'arms') { g.strokeStyle = L.top; g.lineWidth = 5.5; g.setLineDash && g.setLineDash([2, 2.4]); g.beginPath(); g.moveTo(x0, y0); g.lineTo(x1, y1); g.stroke(); g.setLineDash && g.setLineDash([]); } dot(g, x1, y1, 2.7, L.skin); };
    const sw = still ? 0 : Math.sin(t * 3 + (o.seed || 0));
    if (side) {
      if (pose === 'phone') { arm(1, bodyY + 4, 11, bodyY - 2); g.fillStyle = '#16161a'; g.fillRect(10, bodyY - 11, 5, 9); g.fillStyle = `rgba(220,240,255,${still ? .8 : .6 + .3 * Math.sin(t * 4)})`; g.fillRect(10.8, bodyY - 10, 3.4, 7); }
      else if (pose === 'braid' || pose === 'stomp') arm(1, bodyY + 4, 11, bodyY + 4);
      else if (pose === 'conduct') { arm(1, bodyY + 4, 8 + sw * 3, bodyY - 12 - sw * 3); limb(g, 8 + sw * 3, bodyY - 12 - sw * 3, 16 + sw * 2, bodyY - 24, 1.6, '#f4ecd8'); }
      else arm(1, bodyY + 4, 1 + s * 6, bodyY + 17);
    } else if (!back) {
      if (pose === 'conduct') { arm(-11, bodyY + 4, -18 - sw * 3, bodyY - 12 + sw * 4); arm(11, bodyY + 4, 18 - sw * 4, bodyY - 14 - sw * 4); limb(g, 18 - sw * 4, bodyY - 14 - sw * 4, 26 - sw * 2, bodyY - 28 + sw * 4, 1.6, '#f4ecd8'); }
      else if (pose === 'phone') { arm(-11, bodyY + 4, -13, bodyY + 18); arm(11, bodyY + 4, 8, bodyY - 4); g.fillStyle = '#16161a'; g.fillRect(4, bodyY - 13, 8, 10); g.fillStyle = `rgba(220,240,255,${still ? .8 : .6 + .3 * Math.sin(t * 4)})`; g.fillRect(5, bodyY - 12, 6, 8); }
      else if (pose === 'braid') { arm(-11, bodyY + 4, -5, bodyY - 2); arm(11, bodyY + 4, 5, bodyY - 2); }
      else if (pose === 'stomp') { arm(-11, bodyY + 4, -17, bodyY - 3); arm(11, bodyY + 4, 17, bodyY - 3); }
      else if (pose === 'wave') { arm(-11, bodyY + 4, -13, bodyY + 18); arm(11, bodyY + 4, 19 + sw * 3, bodyY - 10); }
      else if (pose === 'hold') { arm(-11, bodyY + 4, -16, bodyY + 15); arm(11, bodyY + 4, 16, bodyY + 15); }
      else { arm(-11, bodyY + 4, -14, bodyY + 18 + s * 2); arm(11, bodyY + 4, 14, bodyY + 18 - s * 2); }
    } else {
      if (pose === 'conduct' || pose === 'moon') { arm(-11, bodyY + 4, -17, bodyY - 10 + sw * 3); arm(11, bodyY + 4, 17, bodyY - 10 - sw * 3); }
      else if (pose === 'braid') { arm(-11, bodyY + 4, -7, bodyY - 6); arm(11, bodyY + 4, 7, bodyY - 6); }
      else { arm(-11, bodyY + 4, -14, bodyY + 18 - s * 2); arm(11, bodyY + 4, 14, bodyY + 18 + s * 2); }
    }
    // neck, choker, head
    g.fillStyle = L.skin; g.fillRect(-3, hy + 12, 6, bodyY - hy - 11);
    if (L.choker && !back) { g.fillStyle = '#121014'; g.fillRect(side ? -2 : -4.5, hy + 13, side ? 7 : 9, 2.4); }
    dot(g, 0, hy, r, L.skin);
    if (!back) {
      if (side) {
        const ex = r * .45;
        if (blink || o.sleep) limb(g, ex - 2, hy + 1.5, ex + 2, hy + 1.5, 1.3, '#2a1a16');
        else { g.fillStyle = L.eye; g.beginPath(); g.ellipse(ex, hy + 1.5, 2.2, 3.4, 0, 0, TAU); g.fill(); dot(g, ex - .6, hy, .9, '#fff'); }
        if (L.blush || o.expr === 'happy') { g.fillStyle = `rgba(255,120,150,${L.blush || .35})`; g.beginPath(); g.ellipse(r * .52, hy + 6, 3, 1.8, 0, 0, TAU); g.fill(); }
        limb(g, r * .62, hy + 8, r * .74, hy + 7.4, 1.1, '#9a4a4a');
        if (L.glasses) { g.strokeStyle = '#2a2a30'; g.lineWidth = 1; g.beginPath(); g.arc(ex, hy + 1.5, 4.6, 0, TAU); g.moveTo(ex - 4.6, hy + 1); g.lineTo(-r * .2, hy); g.stroke(); }
      } else {
        for (const sx of [-6, 6]) {
          if (blink || o.sleep) limb(g, sx - 2.4, hy + 2, sx + 2.4, hy + 2, 1.3, '#2a1a16');
          else { g.fillStyle = L.eye; g.beginPath(); g.ellipse(sx, hy + 2, 2.6, 3.6, 0, 0, TAU); g.fill(); dot(g, sx, hy + 2.6, 1.3, '#120c0e'); dot(g, sx - .9, hy + .8, 1, '#fff'); }
        }
        g.fillStyle = `rgba(255,120,150,${L.blush || .3})`; g.beginPath(); g.ellipse(-9.5, hy + 7.5, 3, 1.8, 0, 0, TAU); g.ellipse(9.5, hy + 7.5, 3, 1.8, 0, 0, TAU); g.fill();
        g.strokeStyle = '#9a4a4a'; g.lineWidth = 1.2; g.beginPath();
        if (o.expr === 'o') { g.arc(0, hy + 9.5, 1.6, 0, TAU); g.stroke(); }
        else if (o.expr === 'happy' || o.sleep) { g.arc(0, hy + 7.6, 2.6, .2 * Math.PI, .8 * Math.PI); g.stroke(); }
        else { g.moveTo(-1.6, hy + 9.4); g.lineTo(1.6, hy + 9.4); g.stroke(); }
        if (L.lip) dot(g, 1.8, hy + 10.6, .9, '#d8dbe2');
        if (L.glasses) { g.strokeStyle = '#2a2a30'; g.lineWidth = 1; g.beginPath(); g.arc(-6, hy + 2, 4.8, 0, TAU); g.moveTo(10.8, hy + 2); g.arc(6, hy + 2, 4.8, 0, TAU); g.moveTo(-1.2, hy + 1.6); g.lineTo(1.2, hy + 1.6); g.stroke(); dot(g, -8, hy, .9, 'rgba(255,255,255,.8)'); dot(g, 4, hy, .9, 'rgba(255,255,255,.8)'); }
      }
    }
    // hair
    g.fillStyle = H.c;
    if (back) {
      dot(g, 0, hy, r * 1.1, H.c);
      if (H.nape) { g.beginPath(); g.moveTo(-r * .9, hy + 4); g.lineTo(-r * .5, hy + r * 1.05); g.lineTo(0, hy + r * .8); g.lineTo(r * .5, hy + r * 1.05); g.lineTo(r * .9, hy + 4); g.fill(); }
      if (H.long) longMass(g, H, hy, r, true);
    } else if (side) {
      g.beginPath(); g.moveTo(r * .78, hy + r * H.fy + r * .25); g.lineTo(r * 1.02, hy - r * .4);
      g.arc(0, hy, r * 1.1, -.42, Math.PI * .62, true);
      if (H.long) { g.quadraticCurveTo(-r * 1.4, hy + H.long * r * .5, -r * 1.2, hy + H.long * r); g.quadraticCurveTo(-r * .5, hy + H.long * r * 1.02, -r * .2, hy + H.long * r * .8); g.lineTo(-r * .1, hy + r * .3); }
      else g.lineTo(-r * (.2 + (H.nape ? .1 : 0)), hy + r * (.55 + (H.nape ? .35 : 0) + H.side * .2));
      g.lineTo(-r * .05, hy - r * .05); g.lineTo(r * .3, hy + r * (H.fy + .2)); g.closePath(); g.fill();
    } else {
      const sy = hy + r * (H.side * .6 - .1);
      g.beginPath(); g.moveTo(-r * 1.08, sy); g.lineTo(-r * 1.1, hy); g.arc(0, hy, r * 1.1, Math.PI, 0); g.lineTo(r * 1.08, sy); g.lineTo(r * .86, sy); g.lineTo(r * .9, hy + r * (H.fy + (H.sweep || 0) * .5));
      const n = 7;
      for (let i = n; i >= 0; i--) { const u = i / n; g.lineTo(-r * .9 + u * r * 1.8, hy + r * (H.fy + (H.sweep || 0) * (u - .5)) + (i % 2 ? H.jag * r : 0)); }
      g.lineTo(-r * .86, sy); g.closePath(); g.fill();
      if (H.long) for (const sg of [-1, 1]) { g.beginPath(); g.moveTo(sg * r * .9, hy); g.quadraticCurveTo(sg * r * 1.25, hy + H.long * r * .45, sg * r * 1.0, hy + H.long * r * .82); g.lineTo(sg * r * .72, hy + H.long * r * .6); g.quadraticCurveTo(sg * r * .82, hy + r * .5, sg * r * .78, hy + r * .1); g.fill(); }
      if (H.nape) { g.beginPath(); g.moveTo(-r * 1.06, sy); g.lineTo(-r * .8, sy + 6); g.lineTo(-r * .7, sy - 2); g.moveTo(r * 1.06, sy); g.lineTo(r * .8, sy + 6); g.lineTo(r * .7, sy - 2); g.fill(); }
    }
    if (H.spikes) { g.beginPath(); for (let i = 0; i < H.spikes; i++) { const a = Math.PI * (1.08 + .84 * i / (H.spikes - 1)), a2 = a + .14; g.moveTo(Math.cos(a - .14) * r * 1.02, hy + Math.sin(a - .14) * r * 1.02); g.lineTo(Math.cos(a) * r * (1.1 + H.sh), hy + Math.sin(a) * r * (1.1 + H.sh)); g.lineTo(Math.cos(a2) * r * 1.02, hy + Math.sin(a2) * r * 1.02); } g.fill(); }
    if (H.hat) { g.fillStyle = shade(H.c, -10); g.beginPath(); g.arc(0, hy - 2, r * 1.14, Math.PI, 0); g.fill(); if (!back) { g.fillStyle = shade(H.c, -25); g.beginPath(); g.ellipse(side ? r * .7 : 0, hy - r * .35, side ? r * .7 : r * 1.2, r * .26, 0, 0, TAU); g.fill(); } }
    g.strokeStyle = H.c2; g.lineWidth = 2.4; g.lineCap = 'round'; g.beginPath(); g.arc(-2, hy - 3, r * .78, Math.PI * 1.18, Math.PI * 1.52); g.stroke();
    // ears and what's in them
    if (!back && (L.ear || L.gauge)) {
      const ears = side ? [[-r * .12, hy + 3]] : [[-r, hy + 3], [r, hy + 3]];
      ears.forEach(([ex, ey]) => { dot(g, ex, ey, 2.6, L.skin); if (L.gauge) { dot(g, ex, ey + 2.4, 1.8, '#0e0c10'); } else dot(g, ex, ey + 2.6, 1, '#e2e5ec'); });
    }
    g.restore();
  }
  // a hex colour, lighter or darker
  const shade = (hex, d) => { const n = parseInt(String(hex).slice(1), 16); if (!(n >= 0)) return hex; const f = v => clamp(v + d, 0, 255); return `rgb(${f(n >> 16 & 255)},${f(n >> 8 & 255)},${f(n & 255)})`; };
  // Nana: a huge white Samoyed, side view (r, mirrored for l) or front / back
  function nanaSprite(g, x, y, o = {}) {
    const t = o.t || 0, still = !!o.still, dir = o.dir || 'r', k = o.size || 1;
    const s = o.walk && !still ? Math.sin(o.ph || 0) : 0, wag = still ? 0 : Math.sin(t * (o.walk ? 9 : 5)) * (o.happy ? .35 : .18);
    const pant = still ? 0 : Math.max(0, Math.sin(t * 7)) * 1.5, fur = o.fur || '#f8f6f4', sh = 'rgba(160,156,172,.32)';
    g.save(); g.translate(x, y - (o.hop || 0)); if (dir === 'l') g.scale(-1, 1); g.scale(k * 1.25, k * 1.25);
    const puff = (px, py, r) => { g.beginPath(); g.arc(px, py, r, 0, TAU); g.fill(); };
    if (dir === 'l' || dir === 'r') {
      g.fillStyle = shade('#e6e2de', 0); [[-20, s], [-11, -s], [13, -s], [22, s]].forEach(([lx, w]) => { g.fillRect(lx - 3 + w * 3, -13, 6, 13); dot(g, lx + w * 3, -1, 3.4, '#ece8e4'); });
      g.save(); g.translate(-27, -30); g.rotate(-.5 + wag); g.fillStyle = fur; puff(0, -6, 9); puff(5, -13, 8); puff(12, -16, 6.5); g.fillStyle = sh; puff(3, -4, 5); g.restore();
      g.fillStyle = fur; g.beginPath(); g.ellipse(0, -25, 30, 15, 0, 0, TAU); g.fill();
      for (let i = 0; i < 12; i++) { const a = i / 12 * TAU; puff(Math.cos(a) * 28, -25 + Math.sin(a) * 13, 6.5); }
      g.fillStyle = sh; g.beginPath(); g.ellipse(2, -17, 26, 6, 0, 0, TAU); g.fill();
      g.fillStyle = fur; puff(25, -27, 12);
      // head
      const hx = 32, hy = -40 + (o.bark ? -2 : 0);
      g.fillStyle = fur; puff(hx, hy, 14); for (let i = 0; i < 8; i++) { const a = i / 8 * TAU; puff(hx + Math.cos(a) * 12, hy + Math.sin(a) * 11, 4.5); }
      g.beginPath(); g.moveTo(hx - 10, hy - 8); g.lineTo(hx - 7, hy - 22); g.lineTo(hx - 1, hy - 11); g.moveTo(hx + 1, hy - 11); g.lineTo(hx + 6, hy - 23); g.lineTo(hx + 10, hy - 8); g.fill();
      g.fillStyle = '#f2b6c4'; g.beginPath(); g.moveTo(hx - 7.5, hy - 11); g.lineTo(hx - 6.5, hy - 18); g.lineTo(hx - 3.5, hy - 11); g.moveTo(hx + 3, hy - 11); g.lineTo(hx + 6, hy - 19); g.lineTo(hx + 7.5, hy - 11); g.fill();
      g.fillStyle = fur; g.beginPath(); g.ellipse(hx + 12, hy + 4, 8.5, 6, 0, 0, TAU); g.fill();
      dot(g, hx + 19.5, hy + 1.5, 2.8, '#15101a');
      if (o.sleep) limb(g, hx + 3, hy - 2, hx + 7.5, hy - 2, 1.3, '#15101a'); else { dot(g, hx + 5, hy - 2.5, 2.3, '#15101a'); dot(g, hx + 4.3, hy - 3.4, .8, '#fff'); }
      if (o.bark) { g.fillStyle = '#3a1520'; g.beginPath(); g.ellipse(hx + 13, hy + 8, 5, 3.6, 0, 0, TAU); g.fill(); g.fillStyle = '#ff8fb0'; g.beginPath(); g.ellipse(hx + 12, hy + 10, 3, 2, 0, 0, TAU); g.fill(); }
      else { g.strokeStyle = '#15101a'; g.lineWidth = 1.1; g.beginPath(); g.moveTo(hx + 16, hy + 6); g.quadraticCurveTo(hx + 12, hy + 9, hx + 8, hy + 6); g.stroke(); if (!o.sleep) { g.fillStyle = '#ff8fb0'; g.beginPath(); g.ellipse(hx + 12, hy + 9 + pant, 2.4, 2.6 + pant, 0, 0, TAU); g.fill(); } }
    } else if (dir === 'd') {
      g.fillStyle = fur; g.beginPath(); g.ellipse(0, -24, 24, 18, 0, 0, TAU); g.fill();
      for (let i = 0; i < 10; i++) { const a = i / 10 * TAU; puff(Math.cos(a) * 22, -24 + Math.sin(a) * 16, 6); }
      g.fillStyle = '#ece8e4'; [[-9, s], [9, -s]].forEach(([lx, w]) => { g.fillRect(lx - 3, -12 + w * 2, 6, 12 - w * 2); dot(g, lx, -1, 3.4, '#ece8e4'); });
      const hy = -42; g.fillStyle = fur; puff(0, hy, 16); for (let i = 0; i < 9; i++) { const a = i / 9 * TAU; puff(Math.cos(a) * 14, hy + Math.sin(a) * 13, 5); }
      g.beginPath(); g.moveTo(-14, hy - 6); g.lineTo(-11, hy - 22); g.lineTo(-4, hy - 12); g.moveTo(4, hy - 12); g.lineTo(11, hy - 22); g.lineTo(14, hy - 6); g.fill();
      g.fillStyle = '#f2b6c4'; g.beginPath(); g.moveTo(-11, hy - 10); g.lineTo(-10.5, hy - 18); g.lineTo(-6.5, hy - 12); g.moveTo(6.5, hy - 12); g.lineTo(10.5, hy - 18); g.lineTo(11, hy - 10); g.fill();
      if (o.sleep) { limb(g, -8, hy - 1, -3, hy - 1, 1.3, '#15101a'); limb(g, 3, hy - 1, 8, hy - 1, 1.3, '#15101a'); } else { dot(g, -5.5, hy - 1, 2.3, '#15101a'); dot(g, 5.5, hy - 1, 2.3, '#15101a'); dot(g, -6.2, hy - 2, .8, '#fff'); dot(g, 4.8, hy - 2, .8, '#fff'); }
      g.fillStyle = fur; g.beginPath(); g.ellipse(0, hy + 6, 7, 5, 0, 0, TAU); g.fill(); dot(g, 0, hy + 4, 2.8, '#15101a');
      if (o.bark) { g.fillStyle = '#3a1520'; g.beginPath(); g.ellipse(0, hy + 10, 4.5, 3.5, 0, 0, TAU); g.fill(); }
      else if (!o.sleep) { g.fillStyle = '#ff8fb0'; g.beginPath(); g.ellipse(0, hy + 10 + pant * .6, 2.6, 2.6 + pant, 0, 0, TAU); g.fill(); }
    } else {
      g.fillStyle = '#ece8e4'; [[-9, s], [9, -s]].forEach(([lx, w]) => { g.fillRect(lx - 3, -12 + w * 2, 6, 12 - w * 2); });
      g.fillStyle = fur; g.beginPath(); g.ellipse(0, -24, 24, 18, 0, 0, TAU); g.fill();
      for (let i = 0; i < 10; i++) { const a = i / 10 * TAU; puff(Math.cos(a) * 22, -24 + Math.sin(a) * 16, 6); }
      g.save(); g.translate(0, -20); g.rotate(wag); puff(0, -8, 10); puff(4, -16, 8); g.fillStyle = sh; puff(1, -6, 5); g.restore();
      const hy = -44; g.fillStyle = fur; puff(0, hy, 15);
      g.beginPath(); g.moveTo(-13, hy - 6); g.lineTo(-10, hy - 21); g.lineTo(-4, hy - 11); g.moveTo(4, hy - 11); g.lineTo(10, hy - 21); g.lineTo(13, hy - 6); g.fill();
    }
    g.restore();
  }
  const EMO = { heart: '♥', bang: '!', q: '?', note: '♪', zz: 'z' };
  const emote = (g, x, y, rc, mt, still) => {
    if (!rc) return; const a = clamp(1 - (mt - rc.t0) / (rc.ms || 1300), 0, 1); if (a <= 0) return;
    const lift = still ? 0 : (1 - a) * 14;
    if (rc.k === 'shiver') { g.strokeStyle = `rgba(200,220,255,${a})`; g.lineWidth = 1.6; for (const sg of [-1, 1]) { g.beginPath(); g.moveTo(x + sg * 16, y + 10); g.lineTo(x + sg * 20, y + 6); g.lineTo(x + sg * 16, y + 2); g.lineTo(x + sg * 20, y - 2); g.stroke(); } return; }
    if (rc.k === 'sweat') { g.fillStyle = `rgba(170,210,255,${a})`; g.beginPath(); g.ellipse(x + 14, y + 8 + (1 - a) * 6, 2.6, 3.8, 0, 0, TAU); g.fill(); return; }
    const ch = EMO[rc.k]; if (!ch) return;
    g.font = '900 17px system-ui'; g.textAlign = 'center';
    g.fillStyle = `rgba(20,7,15,${a * .75})`; g.beginPath(); g.arc(x, y - lift - 5, 11, 0, TAU); g.fill();
    g.fillStyle = rc.k === 'heart' ? `rgba(255,79,158,${a})` : rc.k === 'bang' ? `rgba(255,209,230,${a})` : `rgba(255,240,248,${a})`;
    g.fillText(ch, x, y - lift + 1);
  };

  /* a tiny built-in tutorial, only when tutorial.js can't be had */
  const MINI = (() => {
    const KEY = 'kg-femc-tutorials';
    const store = () => { try { return JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { return {}; } };
    const seen = id => !!store()[id];
    const mark = id => { try { const m = store(); m[id] = 1; localStorage.setItem(KEY, JSON.stringify(m)); } catch (e) {} };
    const should = (id, opt) => opt === true ? true : opt === false ? false : !seen(id);
    let cur = null;
    const run = (root, o = {}) => new Promise(fin => {
      const steps = (o.steps || []).filter(Boolean);
      const el = document.createElement('div');
      el.className = 'tr-mt'; el.setAttribute('role', 'dialog'); el.setAttribute('aria-label', 'How to play');
      el.innerHTML = `<div class="tr-mt-dim"></div><i class="tr-mt-arrow" hidden></i><div class="tr-mt-bub" aria-live="polite"><b>${esc(o.who || '')}</b><p></p>
        <div><span class="tr-mt-try" hidden>Your turn</span><button type="button" data-m="skip">Skip</button><button type="button" data-m="next">Next</button></div></div>`;
      root.appendChild(el);
      const S = cur = { blocking: true };
      let i = -1, ended = false;
      const end = r => {
        if (ended) return; ended = true; cur = null; el.remove(); window.removeEventListener('keydown', key, true);
        if (o.id) mark(o.id); if (r === 'skipped') o.onSkip?.(); fin(r);
      };
      const place = t => {
        const a = el.querySelector('.tr-mt-arrow');
        let tg = null; try { tg = typeof t === 'string' ? root.querySelector(t) : typeof t === 'function' ? t() : t; } catch (e) {}
        if (!tg || !tg.getBoundingClientRect) { a.hidden = true; return; }
        const r = tg.getBoundingClientRect(), up = r.top > (window.innerHeight || 800) / 2;
        a.hidden = false; a.classList.toggle('up', up);
        a.style.left = `${r.left + r.width / 2}px`; a.style.top = `${up ? r.top - 30 : r.bottom + 6}px`;
      };
      const show = () => {
        i++; if (i >= steps.length) return end('done');
        const s = steps[i]; try { s.before?.(); } catch (e) {}
        const practice = typeof s.wait === 'function' && !o.replay;
        S.blocking = !practice; el.classList.toggle('practice', practice);
        el.querySelector('p').innerHTML = bold(s.say);
        el.querySelector('.tr-mt-try').hidden = !practice;
        el.querySelector('[data-m=next]').textContent = i === steps.length - 1 ? 'Let’s go' : 'Next';
        place(s.target);
        if (practice) { const my = i; s.wait().then(() => { if (my === i && !ended) next(); }); }
      };
      const next = () => { const s = steps[i]; try { s && s.after?.(); } catch (e) {} show(); };
      const key = e => {
        if (e.key === 'Escape') { e.preventDefault(); e.stopImmediatePropagation(); end('skipped'); return; }
        if (S.blocking && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); e.stopImmediatePropagation(); next(); }
      };
      window.addEventListener('keydown', key, true);
      el.querySelector('[data-m=next]').onclick = next;
      el.querySelector('[data-m=skip]').onclick = () => end('skipped');
      show();
    });
    return { run, seen, mark, should, open: () => !!cur, blocking: () => !!(cur && cur.blocking) };
  })();
  // the shared first-time tutorial (tutorial.js + .css, loaded once from this folder); the built-in one if it can't load
  const tutLib = () => (window.FemcTutorial ? Promise.resolve(window.FemcTutorial) : (window.FemcTutorialLoading ||= new Promise(ok => {
    const B = `${base()}assets/femc/game/minigames/tutorial`, l = document.createElement('link'), s = document.createElement('script');
    l.rel = 'stylesheet'; l.href = `${B}.css?v=1`; document.head.appendChild(l);
    s.src = `${B}.js?v=1`; s.onload = s.onerror = () => ok(window.FemcTutorial || null); document.head.appendChild(s);
  }))).then(T => T || MINI);
  const tutNow = () => window.FemcTutorial || MINI;

  // optional art, probed once
  const ARTOK = {};
  const SPRITE_IDS = ['solar', 'hyunsuk', 'asahi', 'jaehyuk', 'junkyu', 'jihoon', 'cherry', 'nana'];
  let probed = false;
  const probe = onGround => {
    if (probed || typeof Image === 'undefined') return; probed = true;
    ['blanket', 'nana', 'tree', 'willow', 'lamp', 'bench', 'playground', 'sky', 'ground'].concat(SPRITE_IDS.map(id => `sprite-${id}`)).forEach(id => {
      const im = new Image(); im.onload = () => { ARTOK[id] = im; if (id === 'ground' && probe.cb) probe.cb(); }; im.src = ART(id);
    });
  };
  const ROW = { d: 0, l: 1, r: 2, u: 3 };
  // a sprite-sheet frame (4 × 4: rows down / left / right / up; columns stand, step, stand, step), feet at x, y, h tall
  const sheet = (g, im, dir, walk, ph, x, y, h) => {
    const cw = im.width / 4, chh = im.height / 4, col = walk ? [1, 2, 3, 0][Math.floor((((ph || 0) % TAU) + TAU) % TAU / TAU * 4)] : 0;
    const w = h * cw / chh; g.drawImage(im, col * cw, (ROW[dir] || 0) * chh, cw, chh, x - w / 2, y - h, w, h);
  };

  let cur = null;
  function play(o = {}) {
    return new Promise(done => {
      const host = o.host || document.body;
      const D = DIFF[o.difficulty] || DIFF.normal, LEN = D.len * 1000;
      const GS = (window.FemcGame && window.FemcGame.settings && window.FemcGame.settings()) || {};
      const still = !!reduced.matches, calm = o.calm ?? !!GS.calm, perf = o.perf ?? !!GS.perf, sim = !!o.__sim;
      const L = layout(D);
      const st = {
        t: 0, mt: 0, e8: -1, begun: false, paused: false, over: false, closed: false, tut: false, task: null,
        p: { x: HOME.x, y: HOME.y + 40 }, dir: 'd', walkPh: 0, moving: false, stillT: 0, keys: new Set(), ptr: null, trail: [], fx: [], fxAt: 0,
        vibe: 80, sum: 0, n: 0, min: 100, zeroT: 0, curdle: 0, hue: 320, hueT: 320, pulse: 0, flash: 0, shake: 0, react: null, puff: 0,
        nana: { x: HOME.x - 50, y: HOME.y + 60, dir: 'r', petAt: -1e9, sayAt: 14000, hop: 0, talk: 0, ph: 0, walk: false, barkT: 0, react: null },
        water: 0, order: 0, coaxed: 0, letGo: 0, letGoAt: 0, lamps: 0, harmonies: 0, harmonyAt: -1e9, pets: 0, drinks: 0, hits: [],
        shades: [], shadeN: 0, shadeHits: 0, spooked: 0, barkAt: -1e9, barks: 0, bark: null, caught: 0, caughtAt: -1e9, warn: 0,
        got: [], prints: [], printD: 0, puffs: [], sparkle: [], wind: { g: 0, dir: 1, next: 16000, on: 0 }, streaks: [],
        fig: { a: 0, seen: false }, says: [], sayEnd: 0, capAt: {}, mirror: false, notes: [], flakes: [], markAt: null, tutWalk: 0,
        talker: null, chatAt: 30000, fin: null, zoom: 1, ending: null, result: null, crewV: 0, endT: 0,
      };
      cur = st;
      const crew = L.crew;
      let tutRes = 'seen', tp = null;
      const tutP = o.tutorial === false ? Promise.resolve(null) : sim ? Promise.resolve(window.FemcTutorial || null) : tutLib();
      const timers = new Set();
      const later = (fn, ms) => { const id = setTimeout(() => { timers.delete(id); fn(); }, ms); timers.add(id); return id; };

      const el = document.createElement('div');
      el.className = 'mg-tr' + (still ? ' still' : '') + (calm ? ' calm' : '') + (perf ? ' perf' : '');
      el.setAttribute('role', 'application'); el.setAttribute('aria-label', 'The Trip');
      el.innerHTML = `
        <img class="tr-bg" src="${BG(o.bg || 'epi-h-park-night')}" alt="" onerror="this.remove()">
        <canvas class="tr-cv"></canvas>
        <div class="tr-pins"></div>
        <i class="tr-mark" hidden></i>
        <div class="tr-head" hidden><img alt=""><i></i></div>
        <div class="tr-top">
          <div class="tr-vibe"><small>Vibe</small><span><i></i></span></div>
          <ul class="tr-crew">${crew.map(c => `<li data-c="${c.id}"><img src="${FACE(c.id)}" alt="" onerror="this.remove()"><b>${esc(c.name)}</b></li>`).join('')}</ul>
          <div class="tr-mom" aria-label="Good moments found"><b>0</b><small>/ ${MOMENTS.length}</small></div>
          <div class="tr-sun" aria-label="Time to sunrise"><svg viewBox="0 0 120 44" aria-hidden="true"><path class="tr-arc" d="M6 40 Q60 -14 114 40"/><line x1="0" y1="40" x2="120" y2="40"/><circle class="tr-sundot" r="6" cx="6" cy="40"/></svg><small>Sunrise <b>–</b></small></div>
        </div>
        <ul class="tr-caps" aria-live="polite"></ul>
        <div class="tr-say" aria-live="polite" hidden><img alt="" hidden><p></p></div>
        <div class="tr-task" hidden></div>
        <div class="tr-acts">
          <button type="button" class="tr-coax" data-a="coax" hidden>Coax <kbd>E</kbd></button>
          <button type="button" class="tr-bark" data-a="bark">Bark <kbd>B</kbd><i></i></button>
          <button type="button" class="tr-pet" data-a="pet">Pet Nana <kbd>N</kbd><i></i></button>
          <button type="button" class="tr-drink" data-a="drink" disabled>Water <b>0</b> <kbd>Q</kbd></button>
        </div>
        <p class="tr-help">Walk: arrows / WASD, or hold the mouse or a finger where you want to go. E / Space near a friend. B: Nana barks shadows away. Esc pauses.</p>
        <p class="tr-finskip" hidden>Click or press any key to skip</p>
        <div class="mg-pause" hidden><b>Paused</b><button type="button" data-mg="resume">Resume</button><button type="button" data-mg="howto">How to play</button><button type="button" data-mg="quit">Quit</button></div>
        <div class="mg-end" hidden></div>`;
      host.appendChild(el);
      const $ = s => el.querySelector(s);
      const cv = $('.tr-cv'), ctx = cv && cv.getContext ? cv.getContext('2d') : null;
      const taskEl = $('.tr-task'), sayEl = $('.tr-say'), capsEl = $('.tr-caps'), pinsEl = $('.tr-pins'), markEl = $('.tr-mark'), headEl = $('.tr-head');
      const pins = {};
      crew.concat([{ id: 'blanket', name: 'Blanket' }]).forEach(c => {
        const p = document.createElement('i'); p.className = 'tr-pin' + (c.id === 'blanket' ? ' home' : ''); p.dataset.c = c.id;
        p.innerHTML = `<b>${esc(c.id === 'blanket' ? '♥' : c.name[0])}</b>`; p.hidden = true; pinsEl.appendChild(p); pins[c.id] = p;
      });

      /* the ground: prerendered once (half size), redrawn each frame in strips that breathe */
      const GSC = .5;
      let ground = null;
      const buildGround = () => {
        const gc = mkCanvas(WW * GSC, WH * GSC); if (!gc) return null;
        const g = gc.getContext('2d'); if (!g) return null;
        g.setTransform(GSC, 0, 0, GSC, 0, 0);
        if (ARTOK.ground) { g.drawImage(ARTOK.ground, 0, 0, WW, WH); return gc; }
        const R = mulberry(77);
        g.fillStyle = '#d6dcea'; g.fillRect(0, 0, WW, WH);
        for (let i = 0; i < 170; i++) { const x = R() * WW, y = R() * WH, rx = 40 + R() * 150; g.fillStyle = R() < .5 ? 'rgba(160,170,200,.16)' : 'rgba(255,255,255,.28)'; g.beginPath(); g.ellipse(x, y, rx, rx * (.3 + R() * .3), R() * Math.PI, 0, TAU); g.fill(); }
        g.strokeStyle = 'rgba(70,90,70,.55)'; g.lineWidth = 2;
        for (let i = 0; i < 300; i++) { const x = R() * WW, y = R() * WH; if (inPond(x, y, 40)) continue; g.beginPath(); for (let j = 0; j < 4; j++) { g.moveTo(x + j * 3, y); g.lineTo(x + j * 3 + (R() - .5) * 5, y - 6 - R() * 6); } g.stroke(); }
        // the hill: a mound, lit from the top left, sled tracks down it
        const Hh = L.hill, hg = g.createRadialGradient(Hh.x - Hh.rx * .35, Hh.y - Hh.ry * .4, 10, Hh.x, Hh.y, Hh.rx * 1.15);
        hg.addColorStop(0, '#f4f6fb'); hg.addColorStop(.6, '#cfd6e6'); hg.addColorStop(1, 'rgba(150,160,190,.0)');
        g.fillStyle = hg; g.beginPath(); g.ellipse(Hh.x, Hh.y, Hh.rx * 1.15, Hh.ry * 1.15, 0, 0, TAU); g.fill();
        g.strokeStyle = 'rgba(130,140,175,.28)'; g.lineWidth = 3; for (let k2 = 1; k2 <= 4; k2++) { g.beginPath(); g.ellipse(Hh.x + k2 * 6, Hh.y + k2 * 5, Hh.rx * k2 / 4.4, Hh.ry * k2 / 4.4, 0, 0, TAU); g.stroke(); }
        g.strokeStyle = 'rgba(120,130,170,.35)'; g.lineWidth = 4; for (const sx of [-30, 0]) { g.beginPath(); g.moveTo(Hh.x + sx, Hh.y - 20); g.quadraticCurveTo(Hh.x + sx + 60, Hh.y + 90, Hh.x + sx + 40, Hh.y + Hh.ry + 60); g.stroke(); }
        // paths: the ring, spokes to everyone, worn snow and footprints
        const paths = gg => { gg.beginPath(); gg.ellipse(RING.x, RING.y, RING.rx, RING.ry, 0, 0, TAU); crew.forEach(c => { gg.moveTo(HOME.x, HOME.y); gg.quadraticCurveTo((HOME.x + c.hx) / 2 + (c.hy - HOME.y) * .12, (HOME.y + c.hy) / 2 - (c.hx - HOME.x) * .12, c.hx, c.hy); }); gg.stroke(); };
        g.lineCap = 'round'; g.lineJoin = 'round';
        g.strokeStyle = 'rgba(150,158,182,.6)'; g.lineWidth = 74; paths(g);
        g.strokeStyle = '#c3cadb'; g.lineWidth = 56; paths(g);
        g.strokeStyle = 'rgba(255,255,255,.35)'; g.lineWidth = 18; paths(g);
        g.fillStyle = 'rgba(110,118,150,.35)';
        for (let i = 0; i < 420; i++) { const a = R() * TAU, p = ringAt(a), j = (R() - .5) * 36; g.beginPath(); g.ellipse(p.x + j, p.y + (R() - .5) * 30, 3, 5, a, 0, TAU); g.fill(); }
        // the playground's rubber mat under snow, the sandbox
        const P = L.play; g.fillStyle = 'rgba(190,110,130,.32)'; rrect(g, P.x - P.w / 2, P.y - P.h / 2, P.w, P.h, 30); g.fill();
        g.strokeStyle = 'rgba(120,70,90,.35)'; g.lineWidth = 4; rrect(g, P.x - P.w / 2, P.y - P.h / 2, P.w, P.h, 30); g.stroke();
        g.fillStyle = 'rgba(220,200,170,.5)'; rrect(g, P.x + 60, P.y - 100, 90, 70, 10); g.fill();
        // pond stones and an ice rim
        g.strokeStyle = 'rgba(255,255,255,.75)'; g.lineWidth = 22; g.beginPath(); g.ellipse(POND.x, POND.y, POND.rx + 14, POND.ry + 14, 0, 0, TAU); g.stroke();
        for (let i = 0; i < 48; i++) { const a = i / 48 * TAU, x = POND.x + Math.cos(a) * (POND.rx + 30), y = POND.y + Math.sin(a) * (POND.ry + 30); g.fillStyle = `rgba(${90 + R() * 40},${95 + R() * 40},${115 + R() * 40},.9)`; g.beginPath(); g.ellipse(x, y, 10 + R() * 8, 7 + R() * 5, a, 0, TAU); g.fill(); g.fillStyle = 'rgba(255,255,255,.7)'; g.beginPath(); g.ellipse(x - 2, y - 4, 7, 3, a, 0, TAU); g.fill(); }
        // hedges and a low fence round the edge
        for (let x = 30; x < WW; x += 46 + R() * 20) for (const y of [26, WH - 22]) { g.fillStyle = '#22382b'; g.beginPath(); g.arc(x, y, 30 + R() * 10, 0, TAU); g.fill(); g.fillStyle = 'rgba(255,255,255,.6)'; g.beginPath(); g.arc(x - 6, y - 10, 18, Math.PI, TAU); g.fill(); }
        for (let y = 60; y < WH - 40; y += 46 + R() * 20) for (const x of [24, WW - 24]) { g.fillStyle = '#22382b'; g.beginPath(); g.arc(x, y, 28 + R() * 10, 0, TAU); g.fill(); g.fillStyle = 'rgba(255,255,255,.6)'; g.beginPath(); g.arc(x - 6, y - 10, 16, Math.PI, TAU); g.fill(); }
        g.strokeStyle = '#3a2a24'; g.lineWidth = 4; g.strokeRect(60, 64, WW - 120, WH - 124);
        g.fillStyle = '#3a2a24'; for (let x = 60; x <= WW - 60; x += 80) { g.fillRect(x - 4, 58, 8, 12); g.fillRect(x - 4, WH - 66, 8, 12); }
        // snow sparkle
        g.fillStyle = 'rgba(255,255,255,.9)'; for (let i = 0; i < 1600; i++) { g.fillRect(R() * WW, R() * WH, 2, 2); }
        return gc;
      };
      probe.cb = () => { ground = buildGround(); };
      probe();
      ground = buildGround();
      // the lightmap (screen size, half resolution)
      let lm = null, lmx = null;
      let cw = 0, ch = 0, dpr = 1, sc = 1;
      const cam = { x: st.p.x, y: st.p.y };
      const fit = () => {
        const W = el.clientWidth || window.innerWidth || 1280, Hh = el.clientHeight || window.innerHeight || 800;
        if (W === cw && Hh === ch) return;
        cw = W; ch = Hh; dpr = perf ? 1 : Math.min(2, window.devicePixelRatio || 1);
        if (cv) { cv.width = Math.round(cw * dpr); cv.height = Math.round(ch * dpr); }
        sc = clamp(Math.sqrt(cw * ch) / 900, .5, 1.35);
        st.flakes = Array.from({ length: perf ? 40 : still ? 70 : 150 }, () => ({ x: Math.random() * cw, y: Math.random() * ch, r: rnd(.8, 2.6), v: rnd(14, 42), w: rnd(0, TAU), z: rnd(.5, 1.4) }));
        if (!perf) { lm = mkCanvas(Math.max(1, Math.round(cw / 2)), Math.max(1, Math.round(ch / 2))); lmx = lm ? lm.getContext('2d') : null; }
      };
      const S = () => sc * st.zoom;
      const toScreen = (x, y) => ({ x: (x - cam.x) * S() + cw / 2, y: (y - cam.y) * S() + ch / 2 });
      const toWorld = (x, y) => ({ x: (x - cw / 2) / S() + cam.x, y: (y - ch / 2) / S() + cam.y });
      const vis = (x, y, r) => Math.abs(x - cam.x) < cw / 2 / S() + r && Math.abs(y - cam.y) < ch / 2 / S() + r;

      /* sound (Web Audio, made here) */
      let ac = null, A = null;
      const audio = () => {
        if (o.mute || sim || ac) return;
        const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
        try { ac = new AC(); } catch (e) { ac = null; return; }
        const g = v => { const n = ac.createGain(); n.gain.value = v; return n; };
        const master = g(.55); master.connect(ac.destination);
        const music = g(0), lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 5200;
        const dl = ac.createDelay(2); dl.delayTime.value = EIGHTH * 3 / 1000; const fb = g(.18), wet = g(.32);
        music.connect(lp); lp.connect(master); lp.connect(dl); dl.connect(fb); fb.connect(dl); dl.connect(wet); wet.connect(master);
        const sfx = g(.8); sfx.connect(master);
        const drone = g(0); drone.connect(master);
        [55, 55.6, 82.4].forEach(f => { const os = ac.createOscillator(); os.type = 'sine'; os.frequency.value = f; os.connect(drone); os.start(); });
        A = { master, music, lp, fb, wet, sfx, drone };
      };
      const tone = (f, { type = 'sine', at = 0, dur = .4, vol = .2, bus = 'sfx', attack = .01, pan = 0, vib = 0, glide = 0 } = {}) => {
        if (!ac || !A) return;
        try {
          const t0 = ac.currentTime + at, os = ac.createOscillator(), gn = ac.createGain();
          os.type = type; os.frequency.setValueAtTime(f, t0); if (glide) os.frequency.exponentialRampToValueAtTime(f * glide, t0 + dur);
          gn.gain.setValueAtTime(.0001, t0); gn.gain.exponentialRampToValueAtTime(vol, t0 + attack); gn.gain.exponentialRampToValueAtTime(.0001, t0 + dur);
          let out = gn;
          if (pan && ac.createStereoPanner) { const p = ac.createStereoPanner(); p.pan.value = clamp(pan, -1, 1); gn.connect(p); out = p; }
          if (vib) { const lf = ac.createOscillator(), lg = ac.createGain(); lf.frequency.value = 5.5; lg.gain.value = vib; lf.connect(lg); lg.connect(os.frequency); lf.start(t0); lf.stop(t0 + dur + .05); }
          os.connect(gn); out.connect(A[bus]); os.start(t0); os.stop(t0 + dur + .05);
        } catch (e) {}
      };
      const noise = (dur, freq, vol, q = 1, glide = 0) => {
        if (!ac || !A) return;
        try {
          const n = Math.floor(ac.sampleRate * dur), b = ac.createBuffer(1, n, ac.sampleRate), d = b.getChannelData(0);
          for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / n);
          const s = ac.createBufferSource(), f = ac.createBiquadFilter(), gn = ac.createGain();
          s.buffer = b; f.type = 'bandpass'; f.frequency.value = freq; f.Q.value = q; if (glide) f.frequency.exponentialRampToValueAtTime(freq * glide, ac.currentTime + dur);
          gn.gain.value = vol; s.connect(f); f.connect(gn); gn.connect(A.sfx); s.start();
        } catch (e) {}
      };
      const SFX = {
        lamp: l => tone(l.f, { dur: 1.5, vol: .12, attack: .18, vib: 4, pan: clamp((l.x - st.p.x) / 300, -1, 1) }),
        chord: () => [440, 554.37, 659.25].forEach((f, i) => tone(f, { type: 'triangle', at: i * .06, dur: 1.2, vol: .07, attack: .05 })),
        nana: () => { tone(118, { type: 'triangle', dur: .22, vol: .1, glide: .9 }); tone(104, { type: 'triangle', at: .2, dur: .3, vol: .08, glide: .94 }); },
        bark: () => { noise(.18, 700, .6, 2); tone(150, { type: 'sawtooth', dur: .16, vol: .12, glide: .7 }); noise(.22, 600, .5, 2); tone(140, { type: 'sawtooth', at: .2, dur: .18, vol: .11, glide: .7 }); },
        pet: () => { noise(.35, 1800, .25); tone(196, { type: 'sine', at: .05, dur: .5, vol: .06, vib: 6 }); },
        pick: () => { tone(1046.5, { dur: .25, vol: .08 }); tone(1318.5, { at: .08, dur: .35, vol: .07 }); },
        moment: () => [783.99, 987.77, 1174.66, 1567.98].forEach((f, i) => tone(f, { type: 'triangle', at: i * .07, dur: .8, vol: .06 })),
        drink: () => [0, .08, .16, .26].forEach((t, i) => tone(500 + i * 140 + Math.random() * 60, { at: t, dur: .12, vol: .06, glide: 1.4 })),
        good: () => { tone(659.25, { type: 'triangle', dur: .3, vol: .08 }); tone(880, { type: 'triangle', at: .09, dur: .4, vol: .07 }); },
        tick: () => tone(880 + Math.random() * 220, { type: 'triangle', dur: .12, vol: .06 }),
        spark: n => tone(PENT[5 + (n % 5)][1], { type: 'sine', dur: .9, vol: .1, vib: 3 }),
        stomp: () => { tone(120, { type: 'sine', dur: .2, vol: .3, glide: .4 }); noise(.08, 2400, .2); },
        giggle: () => [0, .09, .18].forEach((t, i) => tone(620 + i * 90, { type: 'triangle', at: t, dur: .08, vol: .05 })),
        wrong: () => tone(130, { type: 'sawtooth', dur: .35, vol: .05, glide: .8 }),
        join: () => [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => tone(f, { type: 'triangle', at: i * .07, dur: .9, vol: .07 })),
        back: () => [261.63, 329.63, 392, 523.25].forEach(f => tone(f, { dur: 1.6, vol: .06, attack: .12 })),
        hit: () => { tone(70, { dur: .8, vol: .16, glide: .6, attack: .02 }); noise(.5, 300, .25, .7, .4); },
        spook: () => [523.25, 415.3, 311.13].forEach((f, i) => tone(f, { type: 'triangle', at: i * .08, dur: .3, vol: .05 })),
        whistle: () => { tone(2600, { dur: .25, vol: .06, vib: 60 }); tone(2400, { at: .28, dur: .45, vol: .06, vib: 60 }); },
        gust: () => noise(2.2, 500, .18, .6, 2.2),
        fig: () => tone(46, { dur: 3.5, vol: .14, attack: 1.2 }),
        star: n => tone(PENT[(n * 2) % PENT.length][1] * 2, { type: 'sine', dur: 1.6, vol: .07, attack: .02, vib: 2 }),
        swell: () => [220, 277.18, 329.63, 440, 554.37].forEach((f, i) => tone(f, { at: i * .25, dur: 6, vol: .05, attack: 1.4 })),
        dawn: () => [261.63, 329.63, 392, 493.88, 659.25].forEach((f, i) => tone(f, { at: i * .15, dur: 3.2, vol: .06, attack: .5 })),
        down: () => tone(98, { type: 'sine', dur: 3, vol: .1, glide: .6, attack: .3 }),
      };
      const sfx = (k, a) => { if (ac) SFX[k](a); };
      const onEighth = i => {
        const bar = Math.floor(i / 8), chd = CHORDS[bar % 4];
        if (i % 8 === 0) { st.hueT = BAR_HUES[bar % 4] + (bar * 13) % 40; }
        if (!calm && !still) st.pulse = 1;
        if (!ac || !A) return;
        const sour = st.curdle > .45 ? 1 - .035 * st.curdle * Math.random() : 1;
        tone(chd[ARP[i % 8]] * 2 * sour, { type: 'triangle', dur: .5, vol: .1, bus: 'music', pan: Math.sin(i * .7) * .4 });
        if (i % 8 === 0) chd.slice(0, 3).forEach(f => tone(f * sour, { dur: EIGHTH * 8 / 1000, vol: .045, attack: .5, bus: 'music' }));
        if (st.task && st.task.kind === 'stomp' && i % 2 === 0) tone(1760, { type: 'square', dur: .03, vol: .015, bus: 'music' });
      };
      const soundTick = () => {
        if (!ac || !A) return;
        try {
          const t = ac.currentTime, dh = Math.hypot(st.p.x - HOME.x, st.p.y - HOME.y);
          const near2 = dh < BLANKET_R || st.fin ? 1 : clamp(1 - (dh - BLANKET_R) / 900, .22, 1);
          A.music.gain.setTargetAtTime(st.over && st.ending !== 'blanket' ? 0 : .26 * near2, t, .3);
          A.lp.frequency.setTargetAtTime(5200 - st.curdle * 4200, t, .4);
          A.fb.gain.setTargetAtTime(.18 + st.curdle * .5, t, .5);
          A.drone.gain.setTargetAtTime(st.over || st.fin ? 0 : st.curdle * .1 + Math.min(.05, st.shades.length * .012), t, .6);
        } catch (e) {}
      };
      // captions: only when there's no sound (mute, or no Web Audio)
      const cap = (txt, key, gap = 0) => {
        if (ac && !o.mute) return;
        if (key) { if (st.mt - (st.capAt[key] ?? -1e9) < gap) return; st.capAt[key] = st.mt; }
        const li = document.createElement('li'); li.textContent = txt; capsEl.appendChild(li);
        while (capsEl.children.length > 3) capsEl.firstChild.remove();
        later(() => li.remove(), 3200);
      };

      /* says (one at a time, a face beside it, and a floating head over whoever said it) */
      const say = (txt, who) => {
        if (st.says.length > 3) { const k = st.says.findIndex(s => s.who === 'nana'); st.says.splice(k >= 0 ? k : 0, 1); }
        st.says.push({ txt, who });
        if (st.sayEnd <= st.mt) nextSay();
      };
      const nextSay = () => {
        const s = st.says.shift();
        if (!s) { sayEl.hidden = true; st.talker = null; return; }
        st.sayEnd = st.mt + clamp(s.txt.length * 55, 2600, 5200);
        const img = sayEl.querySelector('img'), p = sayEl.querySelector('p');
        const f = s.who ? FACE(s.who, s.who === 'nana' ? 'neutral' : 'happy') : null;
        if (f) { img.hidden = false; img.onerror = () => { img.hidden = true; }; img.src = f; } else img.hidden = true;
        const m = /^([A-Z][a-z]+): /.exec(s.txt);
        p.innerHTML = m ? `<b>${esc(m[1])}</b> ${esc(s.txt.slice(m[0].length))}` : esc(s.txt);
        sayEl.dataset.echo = s.txt; sayEl.hidden = false;
        st.talker = s.who || null;
        if (s.who) { const hi = headEl.querySelector('img'); if (hi && hi.dataset.who !== s.who) { hi.dataset.who = s.who; hi.onerror = () => { hi.removeAttribute('src'); }; hi.src = FACE(s.who, s.who === 'nana' ? 'neutral' : 'happy'); } }
        if (s.who === 'nana') { st.nana.talk = 1; sfx('nana'); }
      };
      const react = (who, k, ms = 1300) => { const r = { k, t0: st.mt, ms }; if (who === 'solar') st.react = r; else if (who === 'nana') st.nana.react = r; else { const c = crew.find(x => x.id === who); if (c) c.react = r; } };

      const vibeAdd = v => { st.vibe = clamp(st.vibe + v, 0, 100); };
      const near = () => {
        let best = null, bd = 95;
        crew.forEach(c => { if (c.state === 'out' || c.state === 'drift') { const d = Math.hypot(c.x - st.p.x, c.y - st.p.y); if (d < bd) { bd = d; best = c; } } });
        return best;
      };
      const burst = (x, y, h, n = 10, sp = 1) => { if (perf && n > 6) n = 6; for (let i = 0; i < n; i++) { const a = Math.random() * TAU, v = rnd(30, 110) * sp; st.sparkle.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 30, a: 1, h: h + rnd(-30, 30) }); } if (st.sparkle.length > 120) st.sparkle.splice(0, st.sparkle.length - 120); };

      /* the tasks */
      const TASKS = {
        // Asahi: snow-sparks fall around him; walk under them before they land
        sparks: c => {
          const T = { c, walk: true, mini: true, n: 0, miss: 0, sp: [], next: 600, msg: 'The wind keeps dropping its notes. Walk under the falling sparks and catch them.' };
          const spot = () => {
            for (let k = 0; k < 40; k++) {
              const a = Math.random() * TAU, r = rnd(80, 230), x = c.x + Math.cos(a) * r, y = c.y + Math.sin(a) * r * .8;
              if (x > 60 && x < WW - 60 && y > 80 && y < WH - 60 && !inPond(x, y, 30) && Math.hypot(x - st.p.x, y - st.p.y) > 110) return { x, y };
            }
            return { x: c.x + rnd(-150, 150), y: c.y + 120 };
          };
          T.tick = dt => {
            T.next -= dt;
            if (T.next <= 0 && T.sp.length < 2) { const p = spot(); T.sp.push({ ...p, h: 260, hue: rnd(0, 360) }); T.next = D.sparkGap; sfx('tick'); }
            T.sp.forEach(s2 => { s2.h -= D.sparkV * dt / 1000; });
            T.sp = T.sp.filter(s2 => {
              if (s2.h < 130 && Math.hypot(st.p.x - s2.x, st.p.y - s2.y) < 44) {
                T.n++; sfx('spark', T.n); cap('a bright note, caught'); burst(s2.x, s2.y - 30, s2.hue, 12); vibeAdd(2); react('asahi', 'note');
                if (T.n % 2 === 0) say(pick(SPARK), 'asahi');
                if (T.n >= D.sparks) { complete(T); return false; }
                paintTask(); return false;
              }
              if (s2.h <= 0) { T.miss++; vibeAdd(-2); sfx('wrong'); burst(s2.x, s2.y, 220, 6, .5); T.msg = pick(['Asahi: Dropped. It’s fine. It’s not fine.', 'The note goes out in the snow with a hiss.']); paintTask(); return false; }
              return true;
            });
            if (st.task === T && Math.hypot(st.p.x - c.x, st.p.y - c.y) > 600) cancelTask('Asahi: You left in the middle of a movement. Rude.');
          };
          T.key = () => false;
          T.html = () => `<p class="tr-tq">${esc(T.msg)}</p><div class="tr-dots">${Array.from({ length: D.sparks }, (_, i) => `<i class="${i < T.n ? 'on' : ''}">♪</i>`).join('')}</div>`;
          T.solve = () => complete(T);
          return T;
        },
        // Hyunsuk: stomp on the music's beat (a streak)
        stomp: c => {
          const T = { c, streak: 0, best: 0, lastBeat: -1, msg: 'Stomp on the beat: Space, E or the button, when the ring closes. A streak makes the duck dance.' };
          T.tick = () => {
            const ph = (st.mt % BEAT) / BEAT, ring = taskEl.querySelector('.tr-beat i');
            if (ring) ring.style.setProperty('--k', (1 - ph).toFixed(3));
          };
          T.stomp = () => {
            const m = ((st.mt % BEAT) + BEAT) % BEAT, d = Math.min(m, BEAT - m), beat = Math.round(st.mt / BEAT);
            st.puffs.push({ x: st.p.x, y: st.p.y, a: 1, r: 8, ring: true }); react('solar', 'note', 500);
            if (d <= D.stompWin && beat !== T.lastBeat) {
              T.lastBeat = beat; T.streak++; T.best = Math.max(T.best, T.streak); sfx('stomp'); cap('stomp, on the beat');
              c.hop = 8; burst(c.x, c.y - 20, st.hue, 5); if (T.streak % 3 === 0) { react('hyunsuk', 'note'); T.msg = pick(STOMP_GOOD); }
              if (T.streak >= D.stomps) return complete(T);
            } else { T.streak = Math.floor(T.streak / 2); vibeAdd(-2); sfx('wrong'); T.msg = pick(STOMP_BAD); }
            paintTask();
          };
          T.key = e => { if (e.key === ' ' || e.key === 'e' || e.key === 'E' || e.key === 'Enter') { if (!e.repeat) T.stomp(); return true; } return false; };
          T.click = b => { if (b.classList.contains('tr-stomp')) { T.stomp(); return true; } return false; };
          T.html = () => `<p class="tr-tq">${esc(T.msg)}</p><div class="tr-beatrow"><div class="tr-beat"><i></i><b>${T.streak}</b></div>
            <div class="tr-dots">${Array.from({ length: D.stomps }, (_, i) => `<i class="${i < T.streak ? 'on' : ''}">●</i>`).join('')}</div></div>
            <button type="button" class="tr-stomp">Stomp</button>`;
          T.solve = () => complete(T);
          return T;
        },
        // Junkyu: tag around the playground (he stops to catch his breath), then a word for the bench
        tag: c => {
          const T = { c, walk: true, mini: true, n: 0, run: 0, rest: 600, phase: 'tag', msg: 'Tag him: get close while he stops to catch his breath.' };
          const P = L.play;
          T.tick = dt => {
            if (T.phase !== 'tag') return;
            const s = dt / 1000, dx = c.x - st.p.x, dy = c.y - st.p.y, d = Math.hypot(dx, dy) || 1;
            if (d < 38) {
              T.n++; sfx('giggle'); cap('Junkyu shrieks, laughing'); burst(c.x, c.y - 30, 40, 10); c.hop = 10; react('junkyu', 'heart'); vibeAdd(2);
              if (T.n >= D.tags) { T.phase = 'bench'; T.walk = false; T.mini = false; T.round = { say: BENCH[0].say, opts: shuffle(BENCH[0].opts) }; T.msg = ''; c.dir = 'd'; paintTask(); return; }
              say(TAG[(T.n - 1) % TAG.length], 'junkyu'); T.rest = 0; T.run = 0; T.boost = 900;
              const a = Math.atan2(dy, dx); c.x += Math.cos(a) * 30; c.y += Math.sin(a) * 30; paintTask(); return;
            }
            if (T.rest > 0) { T.rest -= dt; c.walking = false; react('junkyu', 'sweat', 400); return; }
            if (d < 230 || T.boost > 0) {
              T.boost = Math.max(0, (T.boost || 0) - dt);
              let vx = dx / d, vy = dy / d; const tx = -vy, ty = vx; vx = vx * .75 + tx * .55; vy = vy * .75 + ty * .55;
              const ox = c.x - P.x, oy = c.y - P.y, od = Math.hypot(ox, oy); if (od > 260) { vx -= ox / od * 1.2; vy -= oy / od * 1.2; }
              const vl = Math.hypot(vx, vy) || 1, v = D.tagV * (T.boost ? 1.25 : 1) * s;
              c.x = clamp(c.x + vx / vl * v, 80, WW - 80); c.y = clamp(c.y + vy / vl * v, 100, WH - 80);
              if (inPond(c.x, c.y, 20)) { c.x -= vx / vl * v * 2; c.y -= vy / vl * v * 2; }
              c.walk = (c.walk || 0) + v / 9; c.walking = true; c.dir = Math.abs(vx) > Math.abs(vy) ? (vx < 0 ? 'l' : 'r') : (vy < 0 ? 'u' : 'd');
              T.run += dt; if (T.run > 1700 + Math.random() * 500) { T.run = 0; T.rest = 1150; sfx('giggle'); }
            } else c.walking = false;
            if (st.task === T && Math.hypot(st.p.x - P.x, st.p.y - P.y) > 700) cancelTask('Junkyu: Sol? Sol, come back, I was winning.');
          };
          T.choose = k => {
            if (T.phase !== 'bench') return; const op = T.round.opts[k]; if (!op) return;
            if (op[1]) { sfx('good'); return complete(T); }
            sfx('wrong'); vibeAdd(-3); T.msg = op[2]; const B2 = BENCH[1 + Math.floor(Math.random() * 2)]; T.round = { say: B2.say, opts: shuffle(B2.opts) };
            paintTask();
          };
          T.key = e => { if (T.phase === 'bench' && /^[1-3]$/.test(e.key)) { T.choose(+e.key - 1); return true; } return false; };
          T.click = b => { if (b.dataset.opt) { T.choose(+b.dataset.opt); return true; } return false; };
          T.html = () => T.phase === 'tag' ? `<p class="tr-tq">${esc(T.msg)}</p><div class="tr-dots">${Array.from({ length: D.tags }, (_, i) => `<i class="${i < T.n ? 'on' : ''}">✦</i>`).join('')}</div>`
            : `<p class="tr-tq">${esc(T.round.say)}</p>${T.msg ? `<p class="tr-tmsg">${esc(T.msg)}</p>` : ''}<div class="tr-opts">${T.round.opts.map((op, k) => `<button type="button" data-opt="${k}"><kbd>${k + 1}</kbd> ${esc(op[0])}</button>`).join('')}</div>`;
          T.solve = () => complete(T);
          return T;
        },
        angel: c => {
          const T = { c, good: 0, at: -1500, cyc: 0, ok: 0, tot: 0, held: false, ph: 'in', f: 0, msg: 'Lie down next to him. Hold (Space, or press and hold below) while the ring breathes in. Let go while it breathes out.' };
          T.tick = dt => {
            T.at += dt; if (T.at < 0) return;
            const cyc = Math.floor(T.at / 4800), w = T.at % 4800;
            if (cyc !== T.cyc) {
              const acc = T.tot ? T.ok / T.tot : 0;
              if (acc >= .7) { T.good++; sfx('good'); T.msg = pick(ANGEL_GOOD); burst(c.x, c.y - 10, 200, 8); if (T.good >= D.breaths) return complete(T); }
              else { sfx('wrong'); T.msg = pick(ANGEL_BAD); }
              T.cyc = cyc; T.ok = T.tot = 0; paintTask();
            }
            T.ph = w < 2400 ? 'in' : 'out'; T.f = w / 4800;
            T.tot += dt; if ((T.ph === 'in') === T.held) T.ok += dt;
            const ring = taskEl.querySelector('.tr-ring');
            if (ring) { ring.style.setProperty('--s', (T.ph === 'in' ? .45 + .55 * (w / 2400) : 1 - .55 * ((w - 2400) / 2400)).toFixed(3)); ring.dataset.ph = T.ph; ring.classList.toggle('held', T.held); }
            const b = taskEl.querySelector('.tr-hold'); if (b) b.classList.toggle('on', T.held);
          };
          T.key = (e, up) => { if (e.key === ' ' || e.key === 'e' || e.key === 'E' || e.key === 'Enter') { T.held = !up; return true; } return false; };
          T.html = () => `<p class="tr-tq">${esc(T.msg)}</p><div class="tr-angel"><i class="tr-ring" data-ph="in"><b>${'◆'.repeat(T.good)}${'◇'.repeat(Math.max(0, D.breaths - T.good))}</b></i>
            <button type="button" class="tr-hold">Hold to breathe in</button></div>`;
          T.solve = () => complete(T);
          return T;
        },
        moon: c => {
          const T = { c, q: 0, qs: MOON.slice(0, D.qs).map(m => ({ q: m.q, opts: shuffle(m.opts) })), msg: '', hint: D.hint };
          T.choose = k => {
            const op = T.qs[T.q] && T.qs[T.q].opts[k]; if (!op) return;
            if (op[1]) { sfx('good'); T.q++; T.msg = 'The moon nods.'; T.hint = D.hint; react('jaehyuk', 'note'); if (T.q >= T.qs.length) return complete(T); }
            else { sfx('wrong'); vibeAdd(-2); T.msg = pick(MOON_BAD); T.hint = true; react('jaehyuk', 'q'); }
            paintTask();
          };
          T.key = e => { if (/^[1-3]$/.test(e.key)) { T.choose(+e.key - 1); return true; } return false; };
          T.click = b => { if (b.dataset.opt) { T.choose(+b.dataset.opt); return true; } return false; };
          T.html = () => { const Q = T.qs[T.q], right = Q.opts.find(op => op[1])[0]; return `<p class="tr-tq">${esc(Q.q)}</p>${T.msg ? `<p class="tr-tmsg">${esc(T.msg)}</p>` : ''}
            ${T.hint ? `<p class="tr-hint">Nana whispers: it’s “${esc(right)}”. (Solar is bad at math. Nana is not.)</p>` : ''}
            <div class="tr-opts">${Q.opts.map((op, k) => `<button type="button" data-opt="${k}"><kbd>${k + 1}</kbd> ${esc(op[0])}</button>`).join('')}</div>
            <small class="tr-prog">${T.q + 1} / ${T.qs.length}</small>`; };
          T.solve = () => complete(T);
          return T;
        },
        // Cherry: the strand swings; press its side while it's there
        braid: c => {
          const T = { c, n: 0, next: 'l', at: 0, p: 0, msg: 'The strand swings. Press ← when it’s on the left, → when it’s on the right. Over, under.' };
          T.tick = dt => {
            T.at += dt; T.p = Math.sin(T.at / 1000 * D.sway);
            const m = taskEl.querySelector('.tr-sway b'); if (m) m.style.setProperty('--p', T.p.toFixed(3));
            const z = taskEl.querySelector('.tr-sway'); if (z) z.dataset.next = T.next;
          };
          T.input = side => {
            const ok = side === T.next && (side === 'l' ? T.p < -.38 : T.p > .38);
            if (ok) { T.n++; T.next = side === 'l' ? 'r' : 'l'; sfx('tick'); burst(c.x - 70 + (side === 'l' ? -30 : 30), c.y - 60, st.hue + T.n * 30, 5, .6); if (T.n >= D.braid) return complete(T); }
            else { T.n = Math.max(0, T.n - 1); vibeAdd(-2); sfx('wrong'); T.msg = pick(BRAID_BAD); react('cherry', 'bang', 700); }
            paintTask();
          };
          T.key = e => { const d = KEYDIR[e.key]; if (d === 'l' || d === 'r') { T.input(d); return true; } return false; };
          T.click = b => { if (b.dataset.side) { T.input(b.dataset.side); return true; } return false; };
          T.html = () => `<p class="tr-tq">${esc(T.msg)}</p><div class="tr-sway" data-next="${T.next}"><span class="l"></span><span class="r"></span><b></b></div>
            <div class="tr-braid">${Array.from({ length: D.braid }, (_, i) => `<i class="${i < T.n ? (i % 2 ? 'r' : 'l') : ''}"></i>`).join('')}</div>
            <div class="tr-pad two"><button type="button" data-side="l" class="${T.next === 'l' ? 'next' : ''}">← Left</button><button type="button" data-side="r" class="${T.next === 'r' ? 'next' : ''}">Right →</button></div>`;
          T.solve = () => complete(T);
          return T;
        },
      };
      const paintTask = () => {
        const T = st.task; if (!T) { taskEl.hidden = true; taskEl.innerHTML = ''; taskEl.classList.remove('mini'); return; }
        taskEl.hidden = false; taskEl.dataset.k = T.c.task; taskEl.classList.toggle('mini', !!T.mini);
        taskEl.innerHTML = `<header><img src="${FACE(T.c.id)}" alt="" onerror="this.remove()"><b>${esc(T.c.name)}</b><span>${esc(T.c.doing)}</span>
          <button type="button" data-tk="leave">Walk away</button></header>${T.html()}`;
      };
      const startTask = c => {
        if (st.task || st.over || st.fin) return;
        st.task = TASKS[c.task](c); st.task.kind = c.task;
        if (!st.task.walk) { st.ptr = null; st.keys.clear(); }
        say(c.find, c.id); react(c.id, 'bang'); paintTask();
      };
      const complete = T => {
        if (st.task !== T) return;
        st.task = null; paintTask();
        const c = T.c; c.state = 'with'; c.order = ++st.order; st.coaxed++; st.crewV++; c.walking = false;
        vibeAdd(6); sfx('join'); cap(`${c.name} takes your hand`); say(c.done, c.id); react(c.id, 'heart', 1800); burst(c.x, c.y - 40, 330, 16);
        if (!calm && !still) st.flash = .5;
      };
      const cancelTask = msg => { if (!st.task) return; const c = st.task.c; st.task = null; paintTask(); if (c.task === 'tag') { c.walking = false; } if (msg) say(msg, c.id); };
      const interact = () => {
        if (st.task || st.over || st.paused || st.fin) return;
        const c = near(); if (!c) return false;
        if (c.again || c.state === 'drift') { c.state = 'with'; c.again = false; c.spook = false; c.order = ++st.order; st.crewV++; sfx('join'); say(`${c.name} takes your hand again.`); react(c.id, 'heart'); return true; }
        startTask(c); return true;
      };
      const pet = () => {
        if (st.over || st.paused || st.fin) return;
        const n = st.nana, d = Math.hypot(n.x - st.p.x, n.y - st.p.y);
        if (d > 170) { say('Nana is too far away to pet. He’s coming.'); return; }
        if (st.mt - n.petAt < 20000 && !st.tut) return;
        n.petAt = st.mt; n.hop = 1; st.pets++; vibeAdd(st.tut ? 0 : 10); sfx('pet'); cap('happy dog noises'); react('nana', 'heart', 1600);
        say(pick(NANA_PET), 'nana');
        if (tp && tp.kind === 'nana') tp.ok();
      };
      const bark = () => {
        if (st.over || st.paused || st.fin) return;
        if (st.mt - st.barkAt < D.bark * 1000 && !st.tut) return;
        const n = st.nana; st.barkAt = st.mt; st.barks++; n.barkT = 1; n.hop = .6;
        st.bark = { x: n.x, y: n.y - 30, t: 0 }; sfx('bark'); cap('WOOF');
        let k2 = 0;
        st.shades.forEach(h => { if (!h.dying && (Math.hypot(h.x - n.x, h.y - n.y) < 300 || Math.hypot(h.x - st.p.x, h.y - st.p.y) < 260)) { h.dying = 1; k2++; st.shadeN++; burst(h.x, h.y - 20, 280, 8, .7); } });
        if (k2 && !st.tut) vibeAdd(2 * k2);
        say(pick(NANA_BARK), 'nana');
        if (tp && tp.kind === 'bark' && k2) tp.ok();
      };
      const drink = () => {
        if (st.over || st.paused || st.water <= 0 || st.fin) return;
        st.water--; st.drinks++; vibeAdd(14); sfx('drink'); cap('glug');
        say(pick(['Solar drinks some water. It’s the best water anyone has ever made.', 'Water. Incredible. Who invented this.', 'Solar drinks. The stars get a little less loud.']));
      };
      const spook = (c, line) => {
        if (c.state !== 'with') return;
        c.state = 'drift'; c.again = true; c.spook = true; st.letGo++; st.spooked++; st.crewV++; sfx('spook');
        say(line || c.spook, c.id); react(c.id, 'shiver', 1600); cap(`${c.name} lets go`);
      };

      /* lamps */
      const sing = l => {
        l.lit = 1; l.at = st.mt; st.lamps++; sfx('lamp', l); cap(`♪ the lamp hums ${l.name}`);
        if (tp && tp.kind === 'lamp') tp.ok();
        st.hits = st.hits.filter(h => st.mt - h.t < 5000 && h.i !== l.i); st.hits.push({ i: l.i, t: st.mt });
        if (st.hits.length >= 3 && st.mt - st.harmonyAt > 8000) {
          st.harmonyAt = st.mt; st.hits = []; st.harmonies++; if (!st.tut) vibeAdd(7);
          sfx('chord'); cap('♪ the lamps make a chord'); say('Three lamps, one chord. The whole park hums along.'); react('solar', 'note');
          if (!calm && !still) st.flash = .7;
        }
      };

      /* the shadow-things */
      const lit = (x, y) => L.lamps.some(l => Math.hypot(l.x - x, l.y - 20 - y) < 125) || Math.hypot(x - HOME.x, y - HOME.y) < 190 || inBeam(x, y);
      const inBeam = (x, y) => L.guards.some(gd => gd.on && gd.pause <= 0 && Math.hypot(x - gd.x, y - gd.y) < 280 && angDiff(Math.atan2(y - gd.y, x - gd.x), gd.beam) < .38);
      const spawnShade = (near2 = false) => {
        const R0 = near2 ? 230 : Math.max(500, Math.max(cw, ch) / 2 / S() + 60);
        for (let k = 0; k < 12; k++) {
          const a = Math.random() * TAU, x = st.p.x + Math.cos(a) * R0, y = st.p.y + Math.sin(a) * R0 * .8;
          if (x < 70 || x > WW - 70 || y < 90 || y > WH - 60 || inPond(x, y, 20) || (!near2 && lit(x, y))) continue;
          st.shades.push({ x, y, ph: Math.random() * TAU, age: 0, life: 26000, r: rnd(17, 25), dying: 0 }); return true;
        }
        return false;
      };
      const shadeStep = (dt, prog) => {
        const s = dt / 1000, lock = st.task && !st.task.walk;
        if (!st.tut && !lock && !st.fin) {
          const low = clamp((55 - st.vibe) / 55, 0, 1);
          const rate = (prog > .1 ? D.shBase : 0) + D.shLow * low * (.6 + prog);
          if (st.shades.length < D.shMax && Math.random() < rate * s) spawnShade();
        }
        st.shades.forEach(h => {
          if (h.dying) { h.dying += dt; return; }
          h.age += dt; if (h.age > h.life || st.fin) { h.dying = 1; return; }
          let tg = { x: st.p.x, y: st.p.y, c: null }, bd = Math.hypot(st.p.x - h.x, st.p.y - h.y);
          crew.forEach(c => { if (c.state === 'with') { const d = Math.hypot(c.x - h.x, c.y - h.y) * .85; if (d < bd) { bd = d; tg = { x: c.x, y: c.y, c }; } } });
          const dx = tg.x - h.x, dy = tg.y - 20 - h.y, d = Math.hypot(dx, dy) || 1, wob = still ? 0 : Math.sin(h.age / 420 + h.ph) * .6;
          const a = Math.atan2(dy, dx) + wob, v = D.shSpd * (1 + .35 * st.curdle) * (lock ? .3 : 1) * (st.tut ? .45 : 1) * s;
          h.x += Math.cos(a) * v; h.y += Math.sin(a) * v;
          if (st.tut) { if (Math.hypot(st.p.x - h.x, st.p.y - h.y) < 80) { h.x -= Math.cos(a) * v; h.y -= Math.sin(a) * v; } h.age = Math.min(h.age, 5000); return; }
          if (lit(h.x, h.y)) { h.dying = 1; burst(h.x, h.y - 20, 50, 6, .6); return; }
          if (Math.hypot(st.p.x - h.x, st.p.y - 20 - h.y) < h.r + 12) {
            h.dying = 1;
            if (!st.tut) { vibeAdd(-D.shHit); st.shadeHits++; st.shake = 1; if (!calm && !still) { el.classList.remove('hit'); void el.offsetWidth; el.classList.add('hit'); } say(pick(HIT)); }
            react('solar', 'shiver', 1400); sfx('hit'); cap('something cold, close');
            return;
          }
          crew.forEach(c => { if (!h.dying && c.state === 'with' && Math.hypot(c.x - h.x, c.y - 20 - h.y) < h.r + 12) { h.dying = 1; if (!st.tut) spook(c); } });
        });
        st.shades = st.shades.filter(h => !h.dying || h.dying < 650);
        if (st.tut && tp && tp.kind === 'bark' && !st.shades.some(h => !h.dying)) spawnShade(true);
        if (st.bark) { st.bark.t += dt; if (st.bark.t > 700) st.bark = null; }
      };

      /* the torch: a night guard walking the ring path, the beam sweeping */
      const guardStep = (dt, prog) => {
        const s = dt / 1000; st.warn = Math.max(0, st.warn - s * 3);
        L.guards.forEach(gd => {
          gd.on = prog > .18 && prog < .92 && !st.fin && !st.tut;
          if (!gd.on) return;
          const p0 = ringAt(gd.a);
          if (gd.pause > 0) gd.pause -= dt;
          else { gd.a += gd.v * s; if (gd.a > gd.a1 || gd.a < gd.a0) { gd.v *= -1; gd.a = clamp(gd.a, gd.a0, gd.a1); } }
          const p1 = ringAt(gd.a), mvx = p1.x - p0.x, mvy = p1.y - p0.y;
          gd.x = p1.x; gd.y = p1.y; gd.walk += Math.hypot(mvx, mvy) / 9;
          const fwd = Math.atan2(gd.v > 0 ? Math.cos(gd.a) * RING.ry : -Math.cos(gd.a) * RING.ry, gd.v > 0 ? -Math.sin(gd.a) * RING.rx : Math.sin(gd.a) * RING.rx);
          gd.beam = gd.pause > 0 ? fwd + Math.PI : fwd + (still ? .3 : Math.sin(st.mt / 1000 * .8 + gd.ph) * .75);
          const c2 = Math.cos(gd.beam), s2 = Math.sin(gd.beam); gd.dir = Math.abs(c2) > Math.abs(s2) ? (c2 < 0 ? 'l' : 'r') : (s2 < 0 ? 'u' : 'd');
          const dx = st.p.x - gd.x, dy = st.p.y - 20 - gd.y, d = Math.hypot(dx, dy), ad = angDiff(Math.atan2(dy, dx), gd.beam);
          if (gd.pause <= 0 && d < 360 && ad < .7) st.warn = 1;
          if (gd.pause <= 0 && d < 280 && ad < .36 && st.mt - st.caughtAt > 4500 && !st.over) {
            st.caughtAt = st.mt; st.caught++; vibeAdd(-D.torchHit); sfx('whistle'); cap('a whistle, sharp');
            say(pick(TORCH)); react('solar', 'bang'); gd.pause = 2600;
            const c = crew.filter(x => x.state === 'with').sort((a, b) => b.order - a.order)[0];
            if (c) spook(c, c.letgo);
            if (!calm && !still) st.flash = .4;
          }
        });
      };

      /* one step of the night (dt in ms) */
      const step = dt => {
        const s = dt / 1000;
        st.mt += dt;
        if (!st.tut && !st.fin) st.t += dt;
        const prog = clamp(st.t / LEN, 0, 1);
        const e8 = Math.floor(st.mt / EIGHTH); if (e8 !== st.e8) { st.e8 = e8; onEighth(e8); }
        let dh = (st.hueT - st.hue + 540) % 360 - 180; st.hue = (st.hue + dh * Math.min(1, s * (calm || still ? .25 : 1.1)) + 360) % 360;
        st.pulse = Math.max(0, st.pulse - s * 3); st.flash = Math.max(0, st.flash - s * 1.6); st.shake = Math.max(0, st.shake - s * 3);
        if (st.fin) return finStep(dt);
        // wind
        const W = st.wind;
        if (!st.tut && st.mt > W.next) { W.on = 2600; W.dir = Math.random() < .5 ? -1 : 1; W.next = st.mt + rnd(14000, 26000); sfx('gust'); cap('a gust of wind', 'gust', 9000); }
        if (W.on > 0) { W.on -= dt; W.g = Math.sin(clamp(1 - W.on / 2600, 0, 1) * Math.PI); } else W.g = 0;
        // walking
        let mx = 0, my = 0;
        const canMove = !st.task || st.task.walk;
        const T = tutNow(); const tutBlock = T.open() && T.blocking();
        if (canMove && !tutBlock) {
          if (st.keys.size) { if (st.keys.has('l')) mx -= 1; if (st.keys.has('r')) mx += 1; if (st.keys.has('u')) my -= 1; if (st.keys.has('d')) my += 1; }
          else if (st.ptr) { const w = toWorld(st.ptr.x, st.ptr.y), dx = w.x - st.p.x, dy = w.y - st.p.y, d = Math.hypot(dx, dy); if (d > 14) { mx = dx / d; my = dy / d; } }
        }
        const ml = Math.hypot(mx, my);
        st.moving = ml > 0;
        const ox = st.p.x, oy = st.p.y;
        if (ml) { mx /= ml; my /= ml; st.p.x += mx * SPEED * s; st.p.y += my * SPEED * s; st.dir = Math.abs(mx) > Math.abs(my) * 1.1 ? (mx < 0 ? 'l' : 'r') : (my < 0 ? 'u' : 'd'); }
        if (W.g > .05 && canMove && !st.tut) st.p.x += W.dir * W.g * 28 * s;
        if (inPond(st.p.x, st.p.y, 12)) { const q = Math.sqrt(((st.p.x - POND.x) / (POND.rx + 12)) ** 2 + ((st.p.y - POND.y) / (POND.ry + 12)) ** 2) || 1; st.p.x = POND.x + (st.p.x - POND.x) / q; st.p.y = POND.y + (st.p.y - POND.y) / q; }
        L.trees.forEach(t => { const dx = st.p.x - t.x, dy = st.p.y - t.y, d = Math.hypot(dx, dy); if (d < 16 && d > 0) { st.p.x = t.x + dx / d * 16; st.p.y = t.y + dy / d * 16; } });
        st.p.x = clamp(st.p.x, 60, WW - 60); st.p.y = clamp(st.p.y, 80, WH - 50);
        const moved = Math.hypot(st.p.x - ox, st.p.y - oy);
        if (ml) {
          st.walkPh += moved / 9; st.stillT = 0;
          if (st.tut && tp && tp.kind === 'walk' && (st.tutWalk += moved) >= 170) tp.ok();
          st.printD += moved; if (st.printD > 22) { st.printD = 0; const sd = st.prints.length % 2 ? 4 : -4, a = Math.atan2(my, mx); st.prints.push({ x: st.p.x + Math.cos(a + Math.PI / 2) * sd, y: st.p.y + Math.sin(a + Math.PI / 2) * sd, a: 1, r: a }); if (st.prints.length > 180) st.prints.shift(); }
        } else st.stillT += dt;
        st.prints.forEach(p => { p.a -= s / 30; }); if (st.prints.length && st.prints[0].a <= 0) st.prints = st.prints.filter(p => p.a > 0);
        const last = st.trail[st.trail.length - 1];
        if (!last || Math.hypot(st.p.x - last.x, st.p.y - last.y) > 12) { st.trail.push({ x: st.p.x, y: st.p.y }); if (st.trail.length > 300) st.trail.shift(); }
        // pickups, lamps, moments
        L.bottles.forEach(b => { if (st.mt - b.gone > 45000 && st.water < 2 && Math.hypot(b.x - st.p.x, b.y - st.p.y) < 36) { b.gone = st.mt; st.water++; sfx('pick'); cap('a bottle clinks'); say(st.water === 1 ? 'A bottle of water, glowing a bit. Q to drink.' : 'Another bottle. Two is the most anyone can carry, apparently.'); } });
        L.lamps.forEach(l => { l.lit = Math.max(0, l.lit - s * .7); if (st.mt - l.at > 1600 && Math.hypot(l.x - st.p.x, l.y - st.p.y) < 80) sing(l); });
        L.moments.forEach(m => {
          if (m.got || (m.late && prog < .35) || st.tut) return;
          if (Math.hypot(m.x - st.p.x, m.y - 20 - st.p.y) < 40) {
            m.got = true; st.got.push(m.id); vibeAdd(8); sfx('moment'); cap('a good moment, kept'); burst(m.x, m.y - 30, m.h, 18, 1.2);
            say(`♥ ${m.cap}`); react('solar', 'heart'); if (!calm && !still) st.flash = .35;
            const b = $('.tr-mom'); if (b) { b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop'); }
          }
        });
        // the vibe
        const nWith = crew.filter(c => c.state === 'with').length;
        const dHome = Math.hypot(st.p.x - HOME.x, st.p.y - HOME.y);
        const pq = pondQ(st.p.x, st.p.y);
        st.mirror = pq < 1.45 && st.stillT > 600;
        if (!st.tut && !st.over) {
          const d = D.drain * (1 + .55 * prog) * (nWith ? .7 : 1) * (st.task ? .8 : 1);
          st.vibe -= d * s;
          if (dHome < BLANKET_R) st.vibe += 6 * s; else if (dHome < 420) st.vibe += 2 * s * (1 - (dHome - BLANKET_R) / 300);
          if (st.mirror) st.vibe += 3 * s;
          st.vibe = clamp(st.vibe, 0, 100);
          st.sum += st.vibe * s; st.n += s; st.min = Math.min(st.min, st.vibe);
          if (st.vibe <= .01) st.zeroT += dt; else st.zeroT = Math.max(0, st.zeroT - dt * 2);
          if (dHome < BLANKET_R) cap('♪ the blanket’s song, close by', 'song', 20000);
        }
        st.curdle = clamp((35 - st.vibe) / 35, 0, 1);
        if (st.curdle > .3) cap('a low hum, under everything', 'hum', 25000);
        // a friend lets go when it's bad
        if (!st.tut && st.vibe < 15 && nWith && st.t - st.letGoAt > D.letGo * 1000) {
          const c = crew.filter(x => x.state === 'with').sort((a, b) => b.order - a.order)[0];
          st.letGoAt = st.t; spook(c, c.letgo); st.spooked--; c.spook = false;
        }
        // the crew
        let k = 0;
        crew.filter(c => c.state === 'with').sort((a, b) => a.order - b.order).forEach(c => {
          k++; const tp2 = st.trail[Math.max(0, st.trail.length - 1 - k * 4)] || st.p;
          const dx = tp2.x - c.x, dy = tp2.y - c.y, d = Math.hypot(dx, dy);
          if (d > 8) { const v = Math.min(d, SPEED * 1.15 * s); c.x += dx / d * v; c.y += dy / d * v; c.dir = Math.abs(dx) > Math.abs(dy) ? (dx < 0 ? 'l' : 'r') : (dy < 0 ? 'u' : 'd'); c.walk = (c.walk || 0) + v / 9; c.walking = true; } else c.walking = false;
        });
        crew.forEach(c => {
          c.hop = Math.max(0, (c.hop || 0) - s * 40);
          if (c.state === 'back') { const tx = HOME.x + c.seat[0], ty = HOME.y + c.seat[1], dx = tx - c.x, dy = ty - c.y, d = Math.hypot(dx, dy); if (d > 3) { const v = Math.min(d, 120 * s); c.x += dx / d * v; c.y += dy / d * v; c.walk = (c.walk || 0) + v / 9; c.walking = true; c.dir = dx < 0 ? 'l' : 'r'; } else { c.walking = false; c.dir = 'd'; } }
          if (c.state === 'drift') { const dx = c.hx - c.x, dy = c.hy - c.y, d = Math.hypot(dx, dy); if (d > 6) { const v = Math.min(d, (c.spook ? 150 : 80) * s); c.x += dx / d * v; c.y += dy / d * v; c.dir = Math.abs(dx) > Math.abs(dy) ? (dx < 0 ? 'l' : 'r') : (dy < 0 ? 'u' : 'd'); c.walk = (c.walk || 0) + v / 9; c.walking = true; } else { c.state = 'out'; c.walking = false; st.crewV++; } }
          if (c.state === 'out' && !(st.task && st.task.c === c)) {
            const d = Math.hypot(c.x - st.p.x, c.y - st.p.y);
            if (!c.called && d < 330 && !st.tut) { c.called = true; say(c.call, c.id); react(c.id, 'bang'); }
            if (d < 220 && c.pose !== 'lie') { const dx = st.p.x - c.x, dy = st.p.y - c.y; c.dir = Math.abs(dx) > Math.abs(dy) ? (dx < 0 ? 'l' : 'r') : (dy < 0 ? 'u' : 'd'); }
            else c.dir = c.pose === 'moon' || c.pose === 'braid' ? 'u' : 'd';
          }
        });
        // a hand-holder says something now and then
        if (!st.tut && st.mt > st.chatAt) { st.chatAt = st.mt + rnd(22000, 32000); const w = crew.filter(c => c.state === 'with'); if (w.length && !st.task) { const c = pick(w); say(pick(c.chat), c.id); } }
        // onto the blanket
        if (nWith && dHome < BLANKET_R + 24 && !st.tut) {
          crew.filter(c => c.state === 'with').forEach(c => { c.state = 'back'; vibeAdd(6); say(c.back, c.id); react(c.id, 'heart', 2000); burst(c.x, c.y - 40, 330, 10); });
          st.crewV++; sfx('back'); cap('everyone on the blanket cheers, softly');
          if (crew.every(c => c.state === 'back')) return startFinale();
        }
        // Nana
        const n = st.nana;
        n.walk = false;
        if (st.mt - n.petAt > 1500) {
          const sx = st.dir === 'l' ? 1 : st.dir === 'r' ? -1 : -.8;
          const tx = st.p.x + sx * 56, ty = st.p.y + 24, dx = tx - n.x, dy = ty - n.y, d = Math.hypot(dx, dy);
          if (d > 10) { const v = Math.min(d, (d > 200 ? 330 : 240) * s); n.x += dx / d * v; n.y += dy / d * v; n.dir = Math.abs(dx) > Math.abs(dy) * .8 ? (dx < 0 ? 'l' : 'r') : (dy < 0 ? 'u' : 'd'); n.ph += v / 7; n.walk = true; }
          else if (!st.moving) n.dir = n.x < st.p.x ? 'r' : 'l';
        }
        n.hop = Math.max(0, n.hop - s * 2.5); n.talk = Math.max(0, n.talk - s * .5); n.barkT = Math.max(0, n.barkT - s * 2.5);
        if (!st.tut && st.mt - n.sayAt > 0) { n.sayAt = st.mt + rnd(22000, 34000); if (!st.task) say(pick(st.curdle > .5 ? NANA_DARK : NANA), 'nana'); }
        // the task, shadows, torch, the figure
        if (st.task && st.task.tick) st.task.tick(dt);
        shadeStep(dt, prog);
        guardStep(dt, prog);
        const fa = st.curdle > .15 ? (st.curdle - .15) / .85 : 0;
        st.fig.a = lerp(st.fig.a, fa, Math.min(1, s * .6));
        if (st.fig.a > .3 && !st.fig.seen) { st.fig.seen = true; sfx('fig'); cap('a note too low to be music'); }
        partStep(s);
        // says
        if (st.sayEnd && st.mt >= st.sayEnd) { st.sayEnd = 0; nextSay(); }
        // the end
        if (!st.tut && !st.over) {
          if (st.zeroT >= D.zero * 1000) return finish('curdled');
          if (st.t >= LEN) return finish('sunrise');
        }
      };
      // particles: sparkles, breath, fireflies
      const partStep = s => {
        st.sparkle.forEach(p => { p.x += p.vx * s; p.y += p.vy * s; p.vy += 60 * s; p.a -= s * 1.3; }); st.sparkle = st.sparkle.filter(p => p.a > 0);
        st.puffs.forEach(p => { p.a -= s * (p.ring ? 2.2 : .9); p.r += s * (p.ring ? 90 : 10); if (!p.ring) p.y -= s * 14; }); st.puffs = st.puffs.filter(p => p.a > 0);
        if (!perf && !st.fin) {
          st.puff -= s * 1000 * (1 + st.curdle * 1.5);
          if (st.puff <= 0) { st.puff = rnd(1600, 2600); const who = [{ x: st.p.x, y: st.p.y }].concat(crew.filter(c => vis(c.x, c.y, 40)).map(c => ({ x: c.x, y: c.y }))); const w = pick(who); st.puffs.push({ x: w.x + rnd(-4, 4), y: w.y - 56, a: .7, r: 5 }); }
        }
      };

      /* the finale: everyone lies down, heads together; the sky draws them */
      const startFinale = () => {
        st.fin = { t: 0, star: -1 }; st.task = null; paintTask(); st.keys.clear(); st.ptr = null; st.shades.forEach(h => burst(h.x, h.y - 20, 280, 6, .6)); st.shades = [];
        const pos = ['solar'].concat(crew.map(c => c.id));
        pos.forEach((id, i) => {
          const a = i / pos.length * TAU - Math.PI / 2, o2 = { lx: HOME.x + Math.cos(a) * 40, ly: HOME.y + Math.sin(a) * 34, a };
          if (id === 'solar') st.lie = o2; else crew.find(c => c.id === id).lie = o2;
        });
        sfx('swell'); cap('a warm swell of music');
        const fs = $('.tr-finskip'); if (fs) fs.hidden = false; el.classList.add('fin');
        say('Everyone lies down on the blanket, heads together. Nana lies across as many legs as he can reach. The sky starts doing something.');
      };
      const finStep = dt => {
        const F = st.fin; F.t += dt;
        st.zoom = still ? 1 : lerp(1, 1.35, clamp(F.t / 4000, 0, 1));
        const ease = clamp(F.t / 1600, 0, 1);
        if (st.lie) { st.p.x = lerp(st.p.x, st.lie.lx, ease * .2); st.p.y = lerp(st.p.y, st.lie.ly, ease * .2); }
        crew.forEach(c => { if (c.lie) { c.x = lerp(c.x, c.lie.lx, ease * .2); c.y = lerp(c.y, c.lie.ly, ease * .2); } });
        st.nana.x = lerp(st.nana.x, HOME.x + 70, ease * .15); st.nana.y = lerp(st.nana.y, HOME.y + 44, ease * .15); st.nana.dir = 'l';
        const k = Math.floor((F.t - 2200) / STAR_MS);
        if (k >= 0 && k < STARS.length && k !== F.star) { F.star = k; const S2 = STARS[k]; sfx('star', k); say(S2.who === 'solar' ? S2.line : S2.line, S2.who === 'solar' ? null : S2.who); cap('a star chimes'); }
        if (F.t > 2200 + STARS.length * STAR_MS && !F.dawn) { F.dawn = true; sfx('dawn'); cap('a warm chord, the sun coming up'); }
        partStep(dt / 1000);
        if (st.sayEnd && st.mt >= st.sayEnd) { st.sayEnd = 0; nextSay(); }
        if (F.t >= FIN_MS) finish('blanket');
      };
      const skipFinale = () => { if (st.fin && !st.over) finish('blanket'); };

      /* drawing */
      const t0 = () => st.mt / 1000;
      const shadow = (x, y, w, h) => {
        const len = 4 + st.curdle * 50;
        ctx.fillStyle = `rgba(4,0,12,${(.24 + st.curdle * .28).toFixed(3)})`;
        ctx.beginPath(); ctx.ellipse(x + len * .45, y + len * .22, w + len * .45, h, .45, 0, TAU); ctx.fill();
      };
      const drawPerson = (id, x, y, o2) => {
        const im = ARTOK[`sprite-${id}`];
        shadow(x, y, 14, 5.5);
        if (o2.lie != null) {
          ctx.save(); ctx.translate(x, y); ctx.rotate(o2.lie);
          if (im) sheet(ctx, im, 'd', false, 0, 0, 33, 74 * (LOOKS[id]?.scale || 1)); else human(ctx, LOOKS[id], 0, 33, { ...o2, dir: 'd', walk: false });
          ctx.restore(); return;
        }
        if (im) sheet(ctx, im, o2.dir, o2.walk, o2.ph, x + (o2.jit || 0), y - (o2.hop || 0), 74 * (LOOKS[id]?.scale || 1));
        else human(ctx, LOOKS[id], x, y, o2);
      };
      const drawNana = () => {
        const n = st.nana, t = t0(), x = n.x, y = n.y, lie = st.fin;
        shadow(x, y, 36, 10);
        const im = ARTOK['sprite-nana'];
        const o2 = { t, dir: n.dir, walk: n.walk, ph: n.ph, hop: n.hop * 12, bark: n.barkT > .2, still, happy: st.mt - n.petAt < 3000, sleep: !!lie && st.fin.t > 6000, fur: hsl(st.hue + 200, 20, 96) };
        if (im) sheet(ctx, im, n.dir, n.walk, n.ph, x, y - o2.hop, 76);
        else if (ARTOK.nana && (n.dir === 'l' || n.dir === 'r')) { const w = 120, h = w * ARTOK.nana.height / ARTOK.nana.width; ctx.save(); ctx.translate(x, y - o2.hop); ctx.scale(n.dir === 'l' ? -1 : 1, 1); ctx.drawImage(ARTOK.nana, -w / 2, -h, w, h); ctx.restore(); }
        else nanaSprite(ctx, x, y, o2);
        emote(ctx, x + (n.dir === 'l' ? -36 : 36), y - 78, n.react, st.mt, still);
        if (n.talk > 0) { ctx.fillStyle = `rgba(255,79,158,${n.talk.toFixed(2)})`; ctx.font = '900 18px system-ui'; ctx.textAlign = 'center'; ctx.fillText('…', x + (n.dir === 'l' ? -40 : 40), y - 88 - (still ? 0 : Math.sin(t * 6) * 2)); }
        if (st.bark) { const b = st.bark, a = 1 - b.t / 700; ctx.strokeStyle = `rgba(255,209,230,${(a * .8).toFixed(3)})`; ctx.lineWidth = 6 * a + 1; ctx.beginPath(); ctx.arc(b.x, b.y, 40 + b.t / 700 * 260, 0, TAU); ctx.stroke(); ctx.font = `italic 900 ${22 + (1 - a) * 10}px system-ui`; ctx.fillStyle = `rgba(255,79,158,${a})`; ctx.fillText('WOOF', b.x, b.y - 70 - (1 - a) * 20); }
      };
      const tree = tr => {
        const t = t0(), wind = st.wind.g * st.wind.dir, br = still ? 1 : 1 + .07 * Math.sin(t * .9 + tr.ph) + st.pulse * .025;
        shadow(tr.x, tr.y, tr.r * .6, tr.r * .25);
        const lean = still ? 0 : wind * 10 + Math.sin(t * .7 + tr.ph) * 1.5;
        if (tr.willow) {
          ctx.fillStyle = '#2a1810'; ctx.fillRect(tr.x - 7, tr.y - 30, 14, 32);
          const cy = tr.y - tr.r * .95, r = tr.r * br;
          if (ARTOK.willow) { const w = r * 2.6; ctx.drawImage(ARTOK.willow, tr.x - w / 2 + lean, cy - w * .55, w, w); return; }
          ctx.fillStyle = hsl(st.hue + tr.h, 50, 30); ctx.beginPath(); ctx.arc(tr.x + lean * .3, cy, r * .85, 0, TAU); ctx.fill();
          ctx.lineWidth = 3;
          const T = st.task && st.task.kind === 'braid' ? st.task : null;
          for (let i = 0; i < 26; i++) {
            const a = i / 26 * TAU, sx = tr.x + Math.cos(a) * r * .8, sy = cy + Math.sin(a) * r * .5, sway = still ? 0 : Math.sin(t * 1.2 + i) * 6 + lean + (T && i < 3 ? T.p * 22 : 0);
            const braided = T ? i < T.n * 2 : crew.find(c => c.id === 'cherry').state !== 'out';
            ctx.strokeStyle = braided ? hsl(st.hue + i * 30, 85, 65, .9) : hsl(st.hue + tr.h, 55, 45, .8);
            ctx.beginPath(); ctx.moveTo(sx, sy); ctx.quadraticCurveTo(sx + sway, sy + 40, sx + sway * 1.5, sy + 86); ctx.stroke();
          }
          return;
        }
        if (ARTOK.tree) { const w = tr.r * 2.6 * br; ctx.save(); ctx.translate(tr.x, tr.y); ctx.rotate(lean * .006); ctx.drawImage(ARTOK.tree, -w / 2, -w * .92, w, w); ctx.restore(); return; }
        ctx.fillStyle = '#2a1810'; ctx.fillRect(tr.x - 6, tr.y - 22, 12, 24);
        const cy = tr.y - tr.r * .95, r = tr.r * br, cx = tr.x + lean;
        if (tr.pine) {
          for (let l2 = 0; l2 < 3; l2++) {
            const rr = r * (1.05 - l2 * .28), yy = cy - l2 * r * .18;
            ctx.fillStyle = hsl(st.hue * .3 + 140 + tr.h * .1, 35, 16 + l2 * 7); ctx.beginPath();
            for (let i = 0; i <= 16; i++) { const a = i / 16 * TAU, q = i % 2 ? .72 : 1; ctx.lineTo(cx + Math.cos(a) * rr * q, yy + Math.sin(a) * rr * q * .82); }
            ctx.fill();
            ctx.fillStyle = 'rgba(245,248,255,.75)'; ctx.beginPath(); ctx.arc(cx - rr * .2, yy - rr * .25, rr * .55, Math.PI * 1.05, Math.PI * 1.75); ctx.fill();
          }
          ctx.fillStyle = hsl(st.hue + tr.h, 85, 70, .55 + st.pulse * .3); [[.4, .1], [-.35, .3], [.1, -.45]].forEach(([ax, ay]) => { ctx.beginPath(); ctx.arc(cx + ax * r, cy + ay * r, 3, 0, TAU); ctx.fill(); });
        } else {
          ctx.fillStyle = hsl(st.hue + tr.h, 62, 34); ctx.beginPath(); ctx.arc(cx, cy, r, 0, TAU); ctx.fill();
          ctx.fillStyle = hsl(st.hue + tr.h + 28, 78, 52, .85); ctx.beginPath(); ctx.arc(cx - r * .22, cy - r * .2, r * .6, 0, TAU); ctx.fill();
          ctx.fillStyle = 'rgba(248,242,255,.55)'; ctx.beginPath(); ctx.arc(cx - r * .1, cy - r * .35, r * .55, Math.PI * 1.05, Math.PI * 1.9); ctx.fill();
        }
      };
      const lampDraw = l => {
        const hue = l.hue + st.hue * .3;
        if (ARTOK.lamp) { ctx.drawImage(ARTOK.lamp, l.x - 20, l.y - 96, 40, 100); }
        else {
          ctx.strokeStyle = '#1a0d14'; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(l.x, l.y); ctx.lineTo(l.x, l.y - 74); ctx.stroke();
          ctx.fillStyle = '#1a0d14'; ctx.fillRect(l.x - 10, l.y - 92, 20, 4); ctx.fillRect(l.x - 7, l.y - 4, 14, 4);
          ctx.fillStyle = 'rgba(255,255,255,.7)'; ctx.fillRect(l.x - 10, l.y - 95, 20, 3);
        }
        ctx.fillStyle = hsl(hue, 90, 70 + l.lit * 22, .95); ctx.beginPath(); ctx.arc(l.x, l.y - 80, 8 + l.lit * 4, 0, TAU); ctx.fill();
        if (l.lit > .2) { ctx.fillStyle = hsl(hue, 90, 82, l.lit); ctx.font = '900 18px system-ui'; ctx.textAlign = 'center'; ctx.fillText('♪', l.x + 12, l.y - 96 - (1 - l.lit) * 30); }
      };
      const bench = b => {
        shadow(b.x, b.y, 36, 8);
        if (ARTOK.bench) { ctx.drawImage(ARTOK.bench, b.x - 44, b.y - 40, 88, 44); return; }
        ctx.fillStyle = '#4a2a1e'; ctx.fillRect(b.x - 36, b.y - 18, 72, 12); ctx.fillRect(b.x - 36, b.y - 30, 72, 6);
        ctx.fillStyle = '#2a160f'; ctx.fillRect(b.x - 32, b.y - 6, 5, 8); ctx.fillRect(b.x + 27, b.y - 6, 5, 8);
        ctx.fillStyle = 'rgba(248,242,255,.75)'; ctx.fillRect(b.x - 34, b.y - 21, 68, 4); ctx.fillRect(b.x - 34, b.y - 32, 68, 3);
      };
      const playground = () => {
        const P = L.play, t = t0();
        if (ARTOK.playground) { ctx.drawImage(ARTOK.playground, P.x - P.w / 2, P.y - P.h / 2 - 40, P.w, P.h + 40); return; }
        // swings
        const sx = P.x - 120, sy = P.y - 70;
        ctx.strokeStyle = '#3b2b3a'; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(sx - 50, sy); ctx.lineTo(sx + 50, sy); ctx.moveTo(sx - 50, sy); ctx.lineTo(sx - 56, sy + 60); ctx.moveTo(sx + 50, sy); ctx.lineTo(sx + 56, sy + 60); ctx.stroke();
        for (const [ox, ph] of [[-22, 0], [22, 1.7]]) { const sw = still ? 0 : Math.sin(t * 1.6 + ph) * 18; ctx.strokeStyle = 'rgba(220,220,230,.7)'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(sx + ox - 5, sy); ctx.lineTo(sx + ox - 5, sy + 34 + sw * .3); ctx.moveTo(sx + ox + 5, sy); ctx.lineTo(sx + ox + 5, sy + 34 + sw * .3); ctx.stroke(); ctx.fillStyle = hsl(st.hue + ox * 3, 70, 55); ctx.fillRect(sx + ox - 8, sy + 32 + sw * .3, 16, 6); }
        // slide
        ctx.fillStyle = hsl(st.hue + 180, 60, 50); ctx.beginPath(); ctx.moveTo(P.x + 20, P.y - 20); ctx.lineTo(P.x + 40, P.y - 20); ctx.lineTo(P.x + 110, P.y + 60); ctx.lineTo(P.x + 88, P.y + 66); ctx.closePath(); ctx.fill();
        ctx.fillStyle = '#3b2b3a'; ctx.fillRect(P.x + 12, P.y - 34, 34, 16); ctx.fillStyle = 'rgba(255,255,255,.7)'; ctx.fillRect(P.x + 12, P.y - 37, 34, 4);
        // the roundabout
        const rx = P.x - 60, ry = P.y + 60, a0 = still ? 0 : t * .9;
        ctx.fillStyle = '#3b2b3a'; ctx.beginPath(); ctx.ellipse(rx, ry, 40, 26, 0, 0, TAU); ctx.fill();
        for (let i = 0; i < 4; i++) { const a = a0 + i / 4 * TAU; ctx.fillStyle = hsl(st.hue + i * 90, 70, 58); ctx.beginPath(); ctx.moveTo(rx, ry); ctx.arc(rx, ry, 36, a, a + TAU / 8); ctx.closePath(); ctx.fill(); }
        ctx.fillStyle = 'rgba(255,255,255,.6)'; ctx.beginPath(); ctx.ellipse(rx - 6, ry - 6, 18, 6, 0, Math.PI, TAU); ctx.fill();
      };
      const bottle = b => {
        const g = still ? .7 : .55 + .35 * Math.sin(st.mt / 300 + b.x);
        ctx.fillStyle = hsl(st.hue + 160, 90, 75, g * .35); ctx.beginPath(); ctx.arc(b.x, b.y - 10, 18, 0, TAU); ctx.fill();
        ctx.fillStyle = hsl(195, 80, 80, .95); ctx.fillRect(b.x - 5, b.y - 22, 10, 20); ctx.fillStyle = '#ff4f9e'; ctx.fillRect(b.x - 3, b.y - 26, 6, 4);
      };
      const momentDraw = m => {
        ctx.textAlign = 'center'; const t = t0(), bob = still ? 0 : Math.sin(t * 2 + m.ph) * 5, rot = still ? 0 : Math.sin(t * .8 + m.ph) * .18;
        ctx.fillStyle = hsl(m.h, 90, 70, .22 + st.pulse * .1); ctx.beginPath(); ctx.arc(m.x, m.y - 30 + bob, 26, 0, TAU); ctx.fill();
        ctx.save(); ctx.translate(m.x, m.y - 34 + bob); ctx.rotate(rot);
        ctx.fillStyle = '#fbf6ef'; ctx.fillRect(-12, -14, 24, 28); ctx.fillStyle = hsl(m.h + st.hue * .2, 70, 55); ctx.fillRect(-9, -11, 18, 16);
        ctx.fillStyle = 'rgba(255,255,255,.8)'; ctx.beginPath(); ctx.arc(-3, -6, 3, 0, TAU); ctx.fill();
        ctx.restore();
        if (!still) for (let i = 0; i < 3; i++) { const a = t * 1.5 + i * 2.1 + m.ph, rx = Math.cos(a) * 24, ry = Math.sin(a) * 14; ctx.fillStyle = hsl(m.h + i * 40, 95, 82, .8); ctx.font = '900 11px system-ui'; ctx.fillText('✦', m.x + rx, m.y - 30 + ry + bob); }
      };
      const shadeDraw = h => {
        const t = h.age / 1000, a = h.dying ? clamp(1 - h.dying / 650, 0, 1) : clamp(h.age / 800, 0, 1), r = h.r * (h.dying ? 1 + h.dying / 400 : 1);
        ctx.fillStyle = `rgba(6,2,12,${(a * .82).toFixed(3)})`;
        for (let i = 0; i < 5; i++) { const ang = i / 5 * TAU + (still ? 0 : t * 1.3), w = still ? 0 : Math.sin(t * 3 + i) * 4; ctx.beginPath(); ctx.arc(h.x + Math.cos(ang) * r * .4 + w, h.y - 22 + Math.sin(ang) * r * .3, r * .62, 0, TAU); ctx.fill(); }
        ctx.strokeStyle = `rgba(6,2,12,${(a * .5).toFixed(3)})`; ctx.lineWidth = 4; ctx.lineCap = 'round';
        for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.moveTo(h.x - 8 + i * 8, h.y - 12); ctx.quadraticCurveTo(h.x - 12 + i * 8 + (still ? 0 : Math.sin(t * 4 + i) * 6), h.y, h.x - 6 + i * 6, h.y + 8); ctx.stroke(); }
        ctx.strokeStyle = hsl(st.hue + 180, 60, 70, a * .35); ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(h.x, h.y - 22, r * .95, 0, TAU); ctx.stroke();
      };
      const guardDraw = gd => {
        drawPerson('guard', gd.x, gd.y, { t: t0(), dir: gd.dir, walk: gd.pause <= 0, ph: gd.walk, still, seed: gd.i * 3 });
      };
      const beamDraw = gd => {
        const len = 280, hw = .36, a = gd.pause > 0 ? .35 : 1;
        const gr = ctx.createRadialGradient(gd.x, gd.y - 26, 4, gd.x, gd.y - 26, len);
        gr.addColorStop(0, `rgba(255,250,225,${(.5 * a).toFixed(3)})`); gr.addColorStop(1, 'rgba(255,250,225,0)');
        ctx.fillStyle = gr; ctx.beginPath(); ctx.moveTo(gd.x, gd.y - 26); ctx.arc(gd.x, gd.y - 26, len, gd.beam - hw, gd.beam + hw); ctx.closePath(); ctx.fill();
      };
      const blanket = () => {
        const x = HOME.x, y = HOME.y;
        ctx.save(); ctx.translate(x, y); ctx.rotate(-.06);
        if (ARTOK.blanket) ctx.drawImage(ARTOK.blanket, -120, -80, 240, 160);
        else {
          ctx.fillStyle = hsl(st.hue + 330, 70, 52); ctx.fillRect(-120, -80, 240, 160);
          ctx.fillStyle = hsl(st.hue + 300, 60, 34, .55);
          for (let i = -120; i < 120; i += 30) ctx.fillRect(i, -80, 12, 160);
          for (let j = -80; j < 80; j += 30) ctx.fillRect(-120, j, 240, 12);
          ctx.strokeStyle = 'rgba(255,240,248,.75)'; ctx.lineWidth = 3; ctx.setLineDash && ctx.setLineDash([6, 5]); ctx.strokeRect(-114, -74, 228, 148); ctx.setLineDash && ctx.setLineDash([]);
          ctx.fillStyle = 'rgba(255,240,248,.8)'; for (let i = -120; i <= 120; i += 12) { ctx.fillRect(i, -86, 3, 6); ctx.fillRect(i, 80, 3, 6); }
        }
        ctx.fillStyle = '#14070f'; ctx.fillRect(86, -66, 18, 28); ctx.fillStyle = hsl(st.hue, 90, 70, .6 + st.pulse * .4); ctx.fillRect(88, -64, 14, 20);
        ctx.restore();
        if (!still && !perf && st.pulse > .95 && Math.random() < .5) st.notes.push({ x: x + 96, y: y - 74, a: 1, h: st.hue + Math.random() * 120, dx: rnd(-14, 14) });
        st.notes = st.notes.filter(n => (n.a -= .012) > 0);
        ctx.font = '900 18px system-ui'; ctx.textAlign = 'center';
        st.notes.forEach(n => { n.y -= .8; n.x += n.dx * .02; ctx.fillStyle = hsl(n.h, 90, 75, n.a); ctx.fillText('♪', n.x, n.y); });
      };
      const pond = () => {
        const P = POND, t = t0();
        ctx.save(); ctx.beginPath(); ctx.ellipse(P.x, P.y, P.rx, P.ry, 0, 0, TAU);
        ctx.fillStyle = hsl(st.hue + 220, 55, 9); ctx.fill(); ctx.clip();
        const nseg = perf ? 8 : 18, rot = still ? 0 : t * (calm ? .04 : .13);
        for (let i = 0; i < nseg; i++) {
          const a0 = rot + i / nseg * TAU, a1 = a0 + TAU / nseg;
          ctx.beginPath(); ctx.moveTo(P.x, P.y); ctx.lineTo(P.x + Math.cos(a0) * P.rx * 1.2, P.y + Math.sin(a0) * P.rx * 1.2); ctx.lineTo(P.x + Math.cos(a1) * P.rx * 1.2, P.y + Math.sin(a1) * P.rx * 1.2); ctx.closePath();
          ctx.fillStyle = hsl(st.hue + (i % 2 ? 40 : 200) + i * 9, 72, 26 + (i % 2) * 14, .38 + st.pulse * .08); ctx.fill();
        }
        if (!perf) for (let i = 0; i < 12; i++) { const a = -rot * 1.6 + i / 12 * TAU, rr = 90 + (still ? 0 : Math.sin(t * .8 + i) * 18); ctx.fillStyle = hsl(st.hue + i * 30, 85, 70, .22); ctx.beginPath(); ctx.ellipse(P.x + Math.cos(a) * rr, P.y + Math.sin(a) * rr * .6, 26, 9, a, 0, TAU); ctx.fill(); }
        for (let k = 0; k < 4; k++) {
          const r = still ? 50 + k * 55 : ((t * 38 + k * 62) % 248);
          ctx.strokeStyle = hsl(st.hue + k * 50, 80, 75, (1 - r / 248) * .55); ctx.lineWidth = 2;
          ctx.beginPath(); ctx.ellipse(P.x, P.y, r, r * P.ry / P.rx, 0, 0, TAU); ctx.stroke();
        }
        // the mirror: a kinder Solar looks back, in colours that aren't hers
        const pq = pondQ(st.p.x, st.p.y);
        if (pq < 1.8) {
          const a = clamp((1.8 - pq) / .6, 0, 1) * (st.mirror ? .75 : .45);
          ctx.globalAlpha = a; ctx.save(); ctx.translate(st.p.x, P.y + (P.y - st.p.y) * .35 + 30); ctx.scale(1, -1);
          const ml = { ...LOOKS.solar, top: hsl(st.hue + 140, 70, 40), stripe: hsl(st.hue + 200, 80, 70), hair: { ...LOOKS.solar.hair, c: hsl(st.hue + 40, 60, 40), c2: hsl(st.hue + 60, 70, 60) } };
          human(ctx, ml, 0, 0, { t, dir: st.dir === 'u' ? 'd' : st.dir === 'd' ? 'u' : st.dir, still, expr: 'happy' });
          ctx.restore(); ctx.globalAlpha = 1;
        }
        ctx.restore();
        ctx.strokeStyle = hsl(st.hue + 300, 60, 75, .4); ctx.lineWidth = 3; ctx.beginPath(); ctx.ellipse(P.x, P.y, P.rx, P.ry, 0, 0, TAU); ctx.stroke();
      };
      const label = (x, y, txt, hot) => {
        ctx.font = '800 14px system-ui'; ctx.textAlign = 'center';
        const mw = ctx.measureText ? ctx.measureText(txt).width : 0, w = (typeof mw === 'number' && mw ? mw : txt.length * 7.5) + 14;
        ctx.fillStyle = hot ? '#ff4f9e' : 'rgba(20,7,15,.82)'; ctx.fillRect(x - w / 2, y - 15, w, 20);
        ctx.fillStyle = hot ? '#14070f' : '#ffd1e6'; ctx.fillText(txt, x, y);
      };
      // the lightmap: night with holes for every light (half resolution, screen space)
      const lights = (night) => {
        if (!lmx) return;
        const g = lmx, w = lm.width, h = lm.height, k = w / cw;
        g.setTransform(1, 0, 0, 1, 0, 0); g.globalCompositeOperation = 'source-over'; g.clearRect(0, 0, w, h);
        g.fillStyle = night.c; g.fillRect(0, 0, w, h);
        g.globalCompositeOperation = 'destination-out';
        const hole = (x, y, r, a = 1) => { const p = toScreen(x, y), R2 = r * S() * k; if (p.x * k < -R2 || p.y * k < -R2 || p.x * k > w + R2 || p.y * k > h + R2) return; const gr = g.createRadialGradient(p.x * k, p.y * k, 0, p.x * k, p.y * k, R2); gr.addColorStop(0, `rgba(0,0,0,${a})`); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(p.x * k - R2, p.y * k - R2, R2 * 2, R2 * 2); };
        const cr = 1 - st.curdle * .35;
        L.lamps.forEach(l => hole(l.x, l.y - 30, (200 + l.lit * 70) * cr, .95));
        hole(HOME.x, HOME.y, 240 * (1 + st.pulse * .04), 1);
        hole(st.p.x, st.p.y - 30, 130 * cr, .8);
        if (!perf) L.flies.forEach(f => hole(f.x, f.y, 22, .5 * (1 - st.curdle * .7)));
        L.moments.forEach(m => { if (!m.got) hole(m.x, m.y - 30, 70, .6); });
        L.bottles.forEach(b => { if (st.mt - b.gone > 45000) hole(b.x, b.y - 10, 40, .45); });
        st.sparkle.forEach(p => hole(p.x, p.y, 18, p.a * .5));
        if (st.task && st.task.kind === 'sparks') st.task.sp.forEach(s2 => hole(s2.x, s2.y - s2.h, 60, .8));
        L.guards.forEach(gd => {
          if (!gd.on) return; const p = toScreen(gd.x, gd.y - 26), R2 = 280 * S() * k;
          const gr = g.createRadialGradient(p.x * k, p.y * k, 0, p.x * k, p.y * k, R2); gr.addColorStop(0, `rgba(0,0,0,${gd.pause > 0 ? .4 : .95})`); gr.addColorStop(1, 'rgba(0,0,0,0)');
          g.fillStyle = gr; g.beginPath(); g.moveTo(p.x * k, p.y * k); g.arc(p.x * k, p.y * k, R2, gd.beam - .36, gd.beam + .36); g.closePath(); g.fill();
        });
        g.globalCompositeOperation = 'source-over';
        ctx.drawImage(lm, 0, 0, cw, ch);
      };
      // the finale's sky: stars, aurora, the constellations, then dawn
      const SKY = Array.from({ length: 180 }, () => ({ x: Math.random(), y: Math.random(), r: rnd(.5, 1.8), ph: rnd(0, TAU) }));
      const skyDraw = () => {
        const F = st.fin, t = F.t / 1000, a = clamp(F.t / 1800, 0, 1), m = Math.min(cw, ch);
        ctx.save();
        if (ARTOK.sky) { ctx.globalAlpha = a * .85; ctx.drawImage(ARTOK.sky, 0, 0, cw, ch); ctx.globalAlpha = 1; }
        else { const gr = ctx.createLinearGradient(0, 0, 0, ch); gr.addColorStop(0, `rgba(10,4,24,${(a * .82).toFixed(3)})`); gr.addColorStop(1, `rgba(40,10,40,${(a * .55).toFixed(3)})`); ctx.fillStyle = gr; ctx.fillRect(0, 0, cw, ch); }
        SKY.forEach(s2 => { const tw = still ? .8 : .5 + .5 * Math.sin(t * 2 + s2.ph); ctx.fillStyle = `rgba(255,248,252,${(a * tw).toFixed(3)})`; ctx.fillRect(s2.x * cw, s2.y * ch, s2.r, s2.r); });
        if (!perf) {
          ctx.globalCompositeOperation = 'lighter';
          for (let b = 0; b < 3; b++) {
            const base = ch * (.22 + b * .1), hue = [320, 170, 270][b];
            ctx.beginPath(); ctx.moveTo(0, base);
            for (let x = 0; x <= cw; x += 24) ctx.lineTo(x, base + Math.sin(x * .004 + (still ? 0 : t * .6) + b * 2) * 40 + Math.sin(x * .011 + b) * 14);
            for (let x = cw; x >= 0; x -= 24) ctx.lineTo(x, base + 60 + Math.sin(x * .004 + (still ? 0 : t * .6) + b * 2 + .6) * 50);
            ctx.closePath(); const gr = ctx.createLinearGradient(0, base - 40, 0, base + 110); gr.addColorStop(0, hsl(hue, 90, 60, 0)); gr.addColorStop(.5, hsl(hue, 90, 62, a * .22)); gr.addColorStop(1, hsl(hue, 90, 60, 0)); ctx.fillStyle = gr; ctx.fill();
          }
          ctx.globalCompositeOperation = 'source-over';
        }
        // the constellations, one by one round the sky
        const R2 = m * .34, sz = m * .085;
        STARS.forEach((S2, i) => {
          const start = 2200 + i * STAR_MS; if (F.t < start) return;
          const p = clamp((F.t - start) / (STAR_MS * .8), 0, 1), ang = i / STARS.length * TAU - Math.PI / 2;
          const cx = cw / 2 + Math.cos(ang) * R2 * 1.3, cy = ch * .56 + Math.sin(ang) * R2 * .72;
          ctx.strokeStyle = hsl(S2.h, 90, 80, .75 * a); ctx.lineWidth = 1.6;
          let pts = 0; S2.p.forEach(pl => { pts += pl.length; });
          let shown = Math.floor(pts * p), n = 0;
          S2.p.forEach(pl => { ctx.beginPath(); pl.forEach((q, j) => { if (n++ > shown) return; const x = cx + q[0] * sz, y = cy + q[1] * sz; j ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }); ctx.stroke(); });
          S2.p.forEach(pl => pl.forEach(q => { const tw = still ? 1 : .7 + .3 * Math.sin(t * 4 + q[0] * 5); ctx.fillStyle = hsl(S2.h, 90, 92, a * tw); ctx.beginPath(); ctx.arc(cx + q[0] * sz, cy + q[1] * sz, 2.4, 0, TAU); ctx.fill(); }));
          ctx.font = 'italic 800 12px system-ui'; ctx.textAlign = 'center'; ctx.fillStyle = `rgba(255,209,230,${(a * p).toFixed(3)})`;
          ctx.fillText(S2.who === 'solar' ? 'Solar' : S2.who === 'nana' ? 'Nana' : CREW.find(c => c.id === S2.who).name, cx, cy + sz + 18);
        });
        // shooting stars
        if (!still && F.t > 3000) for (let i = 0; i < 2; i++) { const u = ((t * .35 + i * .5) % 1); if (u < .25) { const x = cw * (.2 + i * .45) + u * cw * .8, y = ch * (.08 + i * .1) + u * ch * .3; ctx.strokeStyle = `rgba(255,255,255,${(1 - u * 4) * .8})`; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x - 60, y - 22); ctx.stroke(); } }
        // dawn: pink from the bottom, the sun's rim
        const d = clamp((F.t - (2200 + STARS.length * STAR_MS)) / 3200, 0, 1);
        if (d > 0) {
          const gr = ctx.createLinearGradient(0, ch, 0, 0); gr.addColorStop(0, `rgba(255,150,170,${(d * .7).toFixed(3)})`); gr.addColorStop(.5, `rgba(255,190,200,${(d * .35).toFixed(3)})`); gr.addColorStop(1, 'rgba(255,200,220,0)');
          ctx.fillStyle = gr; ctx.fillRect(0, 0, cw, ch);
          const sr = m * .22; const sg = ctx.createRadialGradient(cw / 2, ch + sr * .35, sr * .2, cw / 2, ch + sr * .35, sr * 2.2); sg.addColorStop(0, `rgba(255,240,230,${d})`); sg.addColorStop(.4, `rgba(255,170,190,${(d * .6).toFixed(3)})`); sg.addColorStop(1, 'rgba(255,150,180,0)');
          ctx.fillStyle = sg; ctx.fillRect(0, 0, cw, ch);
        }
        ctx.restore();
      };
      const paint = () => {
        fit();
        const fin = st.fin;
        const tx = fin ? HOME.x : st.p.x, ty = fin ? HOME.y - 10 : st.p.y - 30, Sv = S();
        cam.x = lerp(cam.x, clamp(tx, cw / 2 / Sv, WW - cw / 2 / Sv), still ? 1 : .12);
        cam.y = lerp(cam.y, clamp(ty, ch / 2 / Sv, WH - ch / 2 / Sv), still ? 1 : .12);
        if (cw / Sv > WW) cam.x = WW / 2; if (ch / Sv > WH) cam.y = WH / 2;
        paintHud();
        if (!ctx) return;
        const t = t0(), prog = clamp(st.t / LEN, 0, 1), dawn = st.over && st.ending === 'blanket' ? 1 : clamp((prog - .75) / .25, 0, 1) * .7;
        const shk = st.shake > 0 && !still && !calm ? st.shake * 6 : 0, jx = shk ? rnd(-shk, shk) : 0, jy = shk ? rnd(-shk, shk) : 0;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.globalCompositeOperation = 'source-over'; ctx.clearRect(0, 0, cw, ch);
        ctx.setTransform(dpr * Sv, 0, 0, dpr * Sv, dpr * (cw / 2 - cam.x * Sv + jx), dpr * (ch / 2 - cam.y * Sv + jy));
        const vl = cam.x - cw / 2 / Sv - 40, vt = cam.y - ch / 2 / Sv - 40, vw = cw / Sv + 80, vh = ch / Sv + 80;
        // the ground: strips with a breathing wave (a cheap shader), then the music's hue over it
        if (ground) {
          const strips = perf || still ? 1 : 22, amp = perf || still ? 0 : (3 + 7 * (1 - st.curdle * .5)) * (calm ? .5 : 1), sh = vh / strips;
          for (let i = 0; i < strips; i++) {
            const y0 = vt + i * sh, ox = amp * Math.sin(y0 * .012 + t * 1.3) + (amp ? st.pulse * 2 : 0);
            const sx0 = clamp(vl, 0, WW), sy0 = clamp(y0, 0, WH), sw = clamp(vw, 0, WW - sx0), shh = clamp(sh + 1, 0, WH - sy0);
            if (sw > 0 && shh > 0) ctx.drawImage(ground, sx0 * GSC, sy0 * GSC, sw * GSC, shh * GSC, sx0 + ox, sy0, sw, shh);
          }
        } else { ctx.fillStyle = '#cfd6e6'; ctx.fillRect(0, 0, WW, WH); }
        ctx.globalCompositeOperation = perf ? 'source-over' : 'color';
        ctx.fillStyle = hsl(st.hue + 250, 60, 50, perf ? .12 : .32 * (1 - st.curdle * .6)); ctx.fillRect(vl, vt, vw, vh);
        ctx.globalCompositeOperation = 'source-over';
        L.blobs.forEach(b => {
          if (!vis(b.x, b.y, b.r)) return;
          const r = b.r * (still ? 1 : 1 + .06 * Math.sin(t * .6 + b.ph) + st.pulse * .02);
          if (perf) { ctx.fillStyle = hsl(st.hue + b.h, 60, 50, .08); ctx.beginPath(); ctx.arc(b.x, b.y, r * .8, 0, TAU); ctx.fill(); return; }
          const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, r); g.addColorStop(0, hsl(st.hue + b.h, 78, 60, .2 * (1 - st.curdle * .7))); g.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = g; ctx.fillRect(b.x - r, b.y - r, r * 2, r * 2);
        });
        if (st.curdle > 0) { ctx.fillStyle = `rgba(40,70,140,${(st.curdle * .22).toFixed(3)})`; ctx.fillRect(vl, vt, vw, vh); }
        pond();
        // footprints
        st.prints.forEach(p => { if (!vis(p.x, p.y, 10)) return; ctx.fillStyle = `rgba(70,70,110,${(p.a * .3).toFixed(3)})`; ctx.beginPath(); ctx.ellipse(p.x, p.y, 2.6, 4.4, p.r + Math.PI / 2, 0, TAU); ctx.fill(); });
        // lamp light pools, fireflies, trails (additive)
        if (!perf) ctx.globalCompositeOperation = 'lighter';
        L.lamps.forEach(l => {
          if (!vis(l.x, l.y, 200)) return;
          const r = (150 + l.lit * 60) * (1 - st.curdle * .35), a = (.2 + l.lit * .3 + st.pulse * .04) * (1 - st.curdle * .55);
          if (perf) { ctx.fillStyle = hsl(l.hue + st.hue * .3, 90, 60, a * .5); ctx.beginPath(); ctx.arc(l.x, l.y - 10, r * .7, 0, TAU); ctx.fill(); return; }
          const g = ctx.createRadialGradient(l.x, l.y - 10, 0, l.x, l.y - 10, r); g.addColorStop(0, hsl(l.hue + st.hue * .3, 90, 62, a)); g.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = g; ctx.fillRect(l.x - r, l.y - 10 - r, r * 2, r * 2);
        });
        L.flies.forEach((f, i) => {
          if (perf && i % 3) return;
          const w = still ? 0 : 1; f.x = f.bx + w * (Math.sin(t * .4 * f.sp + f.ph) * 70 + st.wind.g * st.wind.dir * 60); f.y = f.by + w * Math.sin(t * .55 * f.sp + f.ph * 1.7) * 40;
          if (!vis(f.x, f.y, 20)) return;
          const a = (.5 + .5 * Math.sin(t * 3 * f.sp + f.ph)) * (1 - st.curdle * .8);
          ctx.fillStyle = hsl(f.h + st.hue * .5, 95, 70, a * .35); ctx.beginPath(); ctx.arc(f.x, f.y, 7, 0, TAU); ctx.fill();
          ctx.fillStyle = hsl(f.h + st.hue * .5, 95, 88, a); ctx.beginPath(); ctx.arc(f.x, f.y, 2, 0, TAU); ctx.fill();
        });
        if (!still && !perf) {
          if (st.moving && st.mt - st.fxAt > 45) { st.fxAt = st.mt; st.fx.push({ x: st.p.x, y: st.p.y - 26, h: st.hue + Math.random() * 90, a: 1 }); crew.forEach(c => { if (c.state === 'with' && c.walking) st.fx.push({ x: c.x, y: c.y - 26, h: st.hue + 180, a: .7 }); }); }
          st.fx = st.fx.filter(f => (f.a -= calm ? .03 : .022) > 0).slice(-90);
          st.fx.forEach(f => { ctx.fillStyle = hsl(f.h, 95, 65, f.a * (calm ? .18 : .3)); ctx.beginPath(); ctx.arc(f.x, f.y, 12 + (1 - f.a) * 10, 0, TAU); ctx.fill(); });
        }
        L.guards.forEach(gd => { if (gd.on && vis(gd.x, gd.y, 300)) beamDraw(gd); });
        ctx.globalCompositeOperation = 'source-over';
        // the stomp ring round Hyunsuk, the sparks' landing marks
        if (st.task && st.task.kind === 'stomp') { const c = st.task.c, ph = (st.mt % BEAT) / BEAT; ctx.strokeStyle = hsl(st.hue, 90, 75, .7 * (1 - ph)); ctx.lineWidth = 3; ctx.beginPath(); ctx.ellipse(c.x, c.y, 30 + ph * 60, (30 + ph * 60) * .5, 0, 0, TAU); ctx.stroke(); }
        blanket();
        // the scene, back to front
        const items = [];
        L.trees.forEach(tr => { if (vis(tr.x, tr.y, tr.r * 2)) items.push([tr.y, () => tree(tr)]); });
        L.lamps.forEach(l => { if (vis(l.x, l.y, 100)) items.push([l.y, () => lampDraw(l)]); });
        L.benches.forEach(b => { if (vis(b.x, b.y, 60)) items.push([b.y, () => bench(b)]); });
        if (vis(L.play.x, L.play.y, 260)) items.push([L.play.y - 40, playground]);
        L.bottles.forEach(b => { if (st.mt - b.gone > 45000 && vis(b.x, b.y, 30)) items.push([b.y, () => bottle(b)]); });
        L.moments.forEach(m => { if (!m.got && !(m.late && prog < .35) && vis(m.x, m.y, 40)) items.push([m.y, () => momentDraw(m)]); });
        const nb = near();
        crew.forEach(c => {
          if (!vis(c.x, c.y, 80)) return;
          const inTask = st.task && st.task.c === c;
          const pose = fin ? 'lie' : c.state === 'out' && !c.again ? (c.task === 'tag' && inTask && T_tagPhase() === 'tag' ? 'stand' : c.task === 'stomp' && inTask ? 'stomp' : c.pose) : c.state === 'with' ? 'hold' : 'stand';
          items.push([c.y, () => {
            const o2 = { t, dir: c.dir, walk: !!c.walking, ph: c.walk || 0, still, seed: c.ph, pose, hop: c.hop || 0, expr: c.state !== 'out' || c.react?.k === 'heart' ? 'happy' : null, jit: c.react && c.react.k === 'shiver' && !still && st.mt - c.react.t0 < c.react.ms ? Math.sin(st.mt / 20) * 1.6 : 0 };
            if (pose === 'lie') {
              if (c.task === 'angel' && c.state === 'out') {
                const wing = still ? .4 : .4 + .35 * Math.sin(t * 1.6 + (inTask ? 0 : 1));
                ctx.strokeStyle = hsl(st.hue + 180, 70, 82, .55); ctx.lineWidth = 4;
                for (const sg of [-1, 1]) { ctx.beginPath(); ctx.ellipse(c.x, c.y - 8 + sg * 18, 30, 12, sg * wing, 0, TAU); ctx.stroke(); }
              }
              drawPerson(c.id, c.x, c.y, { ...o2, lie: fin && c.lie ? c.lie.a - Math.PI / 2 : -Math.PI / 2, sleep: fin && st.fin.t > 6000 });
            } else drawPerson(c.id, c.x, c.y, o2);
            emote(ctx, c.x, c.y - 84 * (LOOKS[c.id].scale || 1) - (c.hop || 0), c.react, st.mt, still);
            if (!fin && (c.state === 'out' || c.state === 'drift')) label(c.x, c.y - (pose === 'lie' ? 40 : 98), nb === c && !st.task ? `${c.name} · E` : c.name, nb === c && !st.task);
            if (pose === 'moon' && !still) { ctx.font = 'italic 700 15px Georgia, serif'; ctx.textAlign = 'center'; ['∫', 'dx', 'π', 'lim', 'Σ'].forEach((gl, i) => { const k = ((t * .35 + i / 5 + c.ph) % 1); ctx.fillStyle = hsl(st.hue + i * 60, 80, 80, 1 - k); ctx.fillText(gl, c.x + Math.sin(i * 2 + t) * 22, c.y - 80 - k * 70); }); }
          }]);
        });
        if (st.task && st.task.kind === 'sparks') st.task.sp.forEach(s2 => items.push([s2.y, () => {
          const a = clamp(1 - s2.h / 260, 0, 1);
          ctx.strokeStyle = hsl(s2.hue, 90, 75, .4 + a * .5); ctx.lineWidth = 2; ctx.beginPath(); ctx.ellipse(s2.x, s2.y, 40 - a * 22, (40 - a * 22) * .5, 0, 0, TAU); ctx.stroke();
          const sy2 = s2.y - s2.h - 20; ctx.fillStyle = hsl(s2.hue, 95, 80, .35); ctx.beginPath(); ctx.arc(s2.x, sy2, 14, 0, TAU); ctx.fill();
          ctx.fillStyle = hsl(s2.hue, 95, 92); ctx.font = '900 20px system-ui'; ctx.textAlign = 'center'; ctx.fillText('✦', s2.x, sy2 + 7);
          if (!still) { ctx.strokeStyle = hsl(s2.hue, 95, 80, .4); ctx.beginPath(); ctx.moveTo(s2.x, sy2 - 10); ctx.lineTo(s2.x - 6, sy2 - 40); ctx.stroke(); }
        }]));
        L.guards.forEach(gd => { if (gd.on && vis(gd.x, gd.y, 80)) items.push([gd.y, () => guardDraw(gd)]); });
        const solarLie = fin ? (st.lie ? st.lie.a - Math.PI / 2 : 0) : st.task && st.task.kind === 'angel' ? -Math.PI / 2 : null;
        items.push([st.p.y, () => {
          drawPerson('solar', st.p.x, st.p.y, { t, dir: st.dir, walk: st.moving, ph: st.walkPh, still, seed: 2, pose: st.task && st.task.kind === 'stomp' ? 'stomp' : 'stand', lie: solarLie, sleep: fin && st.fin.t > 8000, expr: st.vibe > 60 ? 'happy' : st.curdle > .5 ? 'o' : null, jit: st.react && st.react.k === 'shiver' && !still && st.mt - st.react.t0 < st.react.ms ? Math.sin(st.mt / 20) * 1.8 : 0 });
          emote(ctx, st.p.x, st.p.y - 82, st.react, st.mt, still);
          if (st.warn > .1 && !fin) { ctx.font = 'italic 900 22px system-ui'; ctx.textAlign = 'center'; ctx.fillStyle = `rgba(255,240,200,${st.warn.toFixed(2)})`; ctx.fillText('!', st.p.x + 16, st.p.y - 82); }
        }]);
        items.push([st.nana.y, drawNana]);
        st.shades.forEach(h => { if (vis(h.x, h.y, 40)) items.push([h.y + 1, () => shadeDraw(h)]); });
        items.sort((a, b) => a[0] - b[0]).forEach(i => i[1]());
        // breath, sparkles
        st.puffs.forEach(p => { if (p.ring) { ctx.strokeStyle = `rgba(240,245,255,${(p.a * .6).toFixed(3)})`; ctx.lineWidth = 2; ctx.beginPath(); ctx.ellipse(p.x, p.y, p.r, p.r * .5, 0, 0, TAU); ctx.stroke(); } else { ctx.fillStyle = `rgba(240,245,255,${(p.a * .5).toFixed(3)})`; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, TAU); ctx.arc(p.x + p.r * .7, p.y - 2, p.r * .7, 0, TAU); ctx.fill(); } });
        if (!perf) ctx.globalCompositeOperation = 'lighter';
        st.sparkle.forEach(p => { ctx.fillStyle = hsl(p.h, 95, 75, p.a); ctx.beginPath(); ctx.arc(p.x, p.y, 2.4 + (1 - p.a) * 2, 0, TAU); ctx.fill(); });
        ctx.globalCompositeOperation = 'source-over';
        // screen space: the night (lightmap or a vignette), lamp cores again, snow and wind, the figure, dawn, the sky, flashes
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const sp = toScreen(st.p.x, st.p.y - 30), m = Math.min(cw, ch);
        const R0 = m * (.78 - .46 * st.curdle), R1 = R0 + m * (.55 - .2 * st.curdle);
        if (lmx && !perf) {
          const cu = st.curdle, nd = clamp(.6 + cu * .28 - dawn * .5 - (fin ? clamp(fin.t / 3000, 0, .35) : 0), .08, .9);
          lights({ c: `rgba(${Math.round(lerp(26, 4, cu))},${Math.round(lerp(8, 12, cu))},${Math.round(lerp(34, 36, cu))},${nd.toFixed(3)})` });
          ctx.globalCompositeOperation = 'lighter';
          L.lamps.forEach(l => { if (!vis(l.x, l.y, 60)) return; const p = toScreen(l.x, l.y - 80), r = (14 + l.lit * 10) * S(); const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 2.4); g.addColorStop(0, hsl(l.hue + st.hue * .3, 90, 85, .55)); g.addColorStop(1, 'rgba(0,0,0,0)'); ctx.fillStyle = g; ctx.fillRect(p.x - r * 2.4, p.y - r * 2.4, r * 4.8, r * 4.8); });
          ctx.globalCompositeOperation = 'source-over';
        }
        const vg = ctx.createRadialGradient(sp.x, sp.y, R0 * .55, sp.x, sp.y, R1);
        vg.addColorStop(0, 'rgba(5,0,4,0)'); vg.addColorStop(1, `rgba(5,0,8,${((perf ? .4 : .22) + .55 * st.curdle).toFixed(3)})`);
        ctx.fillStyle = vg; ctx.fillRect(0, 0, cw, ch);
        // snow, streaming with the wind
        const wx = st.wind.g * st.wind.dir;
        ctx.fillStyle = st.curdle > .3 ? 'rgba(220,232,255,.75)' : 'rgba(250,246,255,.72)';
        st.flakes.forEach(f => {
          if (!still && !st.paused) { f.y += f.v * f.z / 60; f.x += (Math.sin(t + f.w) * .3 + wx * 6) * f.z; if (f.y > ch) { f.y = -4; f.x = Math.random() * cw; } if (f.x > cw + 10) f.x = -10; if (f.x < -10) f.x = cw + 10; }
          ctx.beginPath(); ctx.arc(f.x, f.y, f.r * f.z, 0, TAU); ctx.fill();
        });
        if (Math.abs(wx) > .15 && !still && !perf) {
          if (Math.random() < .5) st.streaks.push({ x: wx > 0 ? -60 : cw + 60, y: Math.random() * ch, a: 1, l: rnd(60, 160) });
          st.streaks = st.streaks.filter(s2 => (s2.a -= .03) > 0).slice(-30);
          ctx.strokeStyle = 'rgba(255,255,255,.35)'; ctx.lineWidth = 1.5;
          st.streaks.forEach(s2 => { s2.x += wx * 30; ctx.globalAlpha = s2.a; ctx.beginPath(); ctx.moveTo(s2.x, s2.y); ctx.quadraticCurveTo(s2.x + s2.l * .5 * Math.sign(wx), s2.y - 6, s2.x + s2.l * Math.sign(wx), s2.y); ctx.stroke(); });
          ctx.globalAlpha = 1;
        } else st.streaks = [];
        if (st.fig.a > .02 && !fin) {
          const ang = Math.atan2(st.p.y - HOME.y, st.p.x - HOME.x) + (still ? 0 : Math.sin(t * .13) * .5) || -.8;
          const fx = sp.x + Math.cos(ang) * R0 * .98, fy = sp.y + Math.sin(ang) * R0 * .98, h = 120 * sc + 40;
          ctx.fillStyle = `rgba(8,2,6,${(st.fig.a * .9).toFixed(3)})`;
          if (!perf) { ctx.shadowColor = 'rgba(0,0,0,.9)'; ctx.shadowBlur = 18; }
          ctx.beginPath(); ctx.ellipse(fx, fy - h * .92, h * .08, h * .1, 0, 0, TAU); ctx.fill();
          ctx.beginPath(); ctx.moveTo(fx - h * .12, fy - h * .8); ctx.lineTo(fx + h * .12, fy - h * .8); ctx.lineTo(fx + h * .07, fy); ctx.lineTo(fx - h * .07, fy); ctx.closePath(); ctx.fill();
          ctx.shadowBlur = 0;
        }
        if (dawn > 0 && !fin) {
          const dg = ctx.createLinearGradient(0, 0, 0, ch); dg.addColorStop(0, `rgba(255,170,180,${(dawn * .45).toFixed(3)})`); dg.addColorStop(1, `rgba(255,120,170,${(dawn * .12).toFixed(3)})`);
          if (!perf) ctx.globalCompositeOperation = 'screen'; ctx.fillStyle = dg; ctx.fillRect(0, 0, cw, ch); ctx.globalCompositeOperation = 'source-over';
        }
        if (fin) skyDraw();
        if (st.flash > 0 && !calm && !still) { ctx.fillStyle = hsl(st.hue, 90, 80, st.flash * .18); ctx.fillRect(0, 0, cw, ch); }
        // a beat's chromatic ghost (a cheap shader echo)
        if (!calm && !still && !perf && st.pulse > .55 && cv) { ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = .06 * st.pulse; ctx.drawImage(cv, 0, 0, cv.width, cv.height, 4, 0, cw, ch); ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over'; }
        // the palette drains
        if (!perf && cv) { const f = `saturate(${(1 - st.curdle * .85).toFixed(2)}) brightness(${(1 - st.curdle * .22).toFixed(2)})`; if (cv.style.filter !== f) cv.style.filter = f; }
      };
      const T_tagPhase = () => (st.task && st.task.kind === 'tag' ? st.task.phase : null);

      /* HUD */
      let hudV = -1, sunSec = -1, momV = -1;
      const paintHud = () => {
        el.style.setProperty('--hue', `${st.hue.toFixed(0)}deg`);
        el.style.setProperty('--curdle', st.curdle.toFixed(3));
        const vb = $('.tr-vibe i'); if (vb) vb.style.width = `${st.vibe.toFixed(1)}%`;
        $('.tr-vibe').classList.toggle('low', st.vibe < 35);
        $('.tr-vibe').classList.toggle('zero', st.vibe <= .01 && !st.tut);
        const prog = clamp(st.t / LEN, 0, 1), dot2 = $('.tr-sundot');
        if (dot2) { const u = prog * .5, x = (1 - u) * (1 - u) * 6 + 2 * (1 - u) * u * 60 + u * u * 114, y = (1 - u) * (1 - u) * 40 + 2 * (1 - u) * u * -14 + u * u * 40; dot2.setAttribute('cx', x.toFixed(1)); dot2.setAttribute('cy', y.toFixed(1)); }
        const left = Math.max(0, Math.ceil((LEN - st.t) / 1000));
        if (left !== sunSec) { sunSec = left; const b = $('.tr-sun b'); if (b) b.textContent = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`; }
        if (hudV !== st.crewV) { hudV = st.crewV; crew.forEach(c => { const li = el.querySelector(`.tr-crew [data-c="${c.id}"]`); if (li) li.dataset.s = c.state; }); }
        if (momV !== st.got.length) { momV = st.got.length; const b = $('.tr-mom b'); if (b) b.textContent = String(momV); }
        const nb = !st.task && !st.over && !st.fin ? near() : null, cb = $('.tr-coax');
        if (cb) { cb.hidden = !nb; if (nb) { const txt = nb.again || nb.state === 'drift' ? `Take ${nb.name}’s hand` : `Coax ${nb.name}`; if (cb.dataset.t !== txt) { cb.dataset.t = txt; cb.innerHTML = `${esc(txt)} <kbd>E</kbd>`; } } }
        const pb = $('.tr-pet'); if (pb) { const cd = clamp(1 - (st.mt - st.nana.petAt) / 20000, 0, 1); pb.style.setProperty('--cd', st.tut ? 0 : cd.toFixed(3)); pb.classList.toggle('far', Math.hypot(st.nana.x - st.p.x, st.nana.y - st.p.y) > 170); }
        const bb = $('.tr-bark'); if (bb) { const cd = clamp(1 - (st.mt - st.barkAt) / (D.bark * 1000), 0, 1); bb.style.setProperty('--cd', st.tut ? 0 : cd.toFixed(3)); bb.classList.toggle('ready', cd <= 0 || st.tut); bb.classList.toggle('need', st.shades.some(h => !h.dying)); }
        const db = $('.tr-drink'); if (db) { db.disabled = st.water <= 0; const b = db.querySelector('b'); if (b && b.textContent !== String(st.water)) b.textContent = String(st.water); }
        sayEl.classList.toggle('echo', st.curdle > .4);
        // the floating head over whoever is talking
        if (headEl) {
          let tg = null;
          if (st.talker === 'nana') tg = { x: st.nana.x + (st.nana.dir === 'l' ? -20 : 20), y: st.nana.y - 92 };
          else if (st.talker) { const c = crew.find(x => x.id === st.talker); if (c) tg = { x: c.x, y: c.y - 100 * (LOOKS[c.id].scale || 1) }; }
          const p2 = tg && toScreen(tg.x, tg.y), on = !!(p2 && p2.x > 20 && p2.x < cw - 20 && p2.y > 60 && p2.y < ch - 20 && !st.paused);
          if (headEl.hidden === on) headEl.hidden = !on;
          if (on) { headEl.style.left = `${p2.x.toFixed(0)}px`; headEl.style.top = `${p2.y.toFixed(0)}px`; }
        }
        // pins at the edge for anyone out of sight
        const mg = 30, anyWith = crew.some(c => c.state === 'with');
        const pin = (id, x, y, show) => {
          const p = pins[id]; if (!p) return;
          const s2 = toScreen(x, y - 30), off = s2.x < mg || s2.x > cw - mg || s2.y < 70 || s2.y > ch - mg;
          if (!show || !off || st.over || st.fin) { if (!p.hidden) p.hidden = true; return; }
          const cx = cw / 2, cy = ch / 2, dx = s2.x - cx, dy = s2.y - cy, k = Math.min((cw / 2 - mg) / Math.abs(dx || 1), (ch / 2 - mg - 30) / Math.abs(dy || 1));
          p.hidden = false; p.style.transform = `translate(${(cx + dx * k).toFixed(0)}px, ${(cy + dy * k).toFixed(0)}px)`;
          p.style.setProperty('--a', `${Math.atan2(dy, dx).toFixed(3)}rad`);
        };
        crew.forEach(c => pin(c.id, c.x, c.y, c.state === 'out' || c.state === 'drift'));
        pin('blanket', HOME.x, HOME.y, anyWith);
        positionMark();
        soundTick();
      };
      const positionMark = () => {
        if (!markEl) return;
        if (!st.markAt) { markEl.hidden = true; return; }
        const s2 = toScreen(st.markAt.o.x, st.markAt.o.y + st.markAt.dy);
        markEl.hidden = false; markEl.style.left = `${s2.x.toFixed(0)}px`; markEl.style.top = `${s2.y.toFixed(0)}px`;
      };
      const mark = (o2, dy = -30) => { st.markAt = { o: o2, dy }; positionMark(); };

      let last = 0, raf = 0;
      const RAF = window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : (f => setTimeout(() => f(Date.now()), 16));
      const tick = now => {
        if (st.closed) return;
        const dt = Math.min(50, now - (last || now)); last = now;
        if (!st.paused && !st.over) step(dt);
        if (st.over) st.endT += dt;
        if (!st.paused) paint();
        raf = RAF(tick);
      };

      /* the scrapbook: one drawn polaroid per good moment (the people in it drawn with their sprites) */
      const polaroid = m => {
        const W = 120, Hh = 100, c = mkCanvas(W * 2, Hh * 2); if (!c) return null;
        const g = c.getContext('2d'); if (!g) return null;
        g.setTransform(2, 0, 0, 2, 0, 0);
        const sky = g.createLinearGradient(0, 0, 0, Hh); sky.addColorStop(0, hsl(m.h + 220, 45, 14)); sky.addColorStop(1, hsl(m.h, 60, 38)); g.fillStyle = sky; g.fillRect(0, 0, W, Hh);
        const R = mulberry(m.id.length * 31 + m.h); g.fillStyle = 'rgba(255,250,255,.8)'; for (let i = 0; i < 22; i++) g.fillRect(R() * W, R() * Hh * .5, 1.2, 1.2);
        const lg = g.createRadialGradient(W * .8, 18, 2, W * .8, 18, 40); lg.addColorStop(0, hsl(m.h + 40, 90, 80, .7)); lg.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = lg; g.fillRect(0, 0, W, Hh);
        g.fillStyle = '#dfe5f2'; g.beginPath(); g.moveTo(0, Hh * .72); g.quadraticCurveTo(W * .5, Hh * .62, W, Hh * .74); g.lineTo(W, Hh); g.lineTo(0, Hh); g.fill();
        const n = m.who.length, gap = Math.min(30, (W - 24) / Math.max(1, n - 1));
        m.who.forEach((id, i) => {
          const x = n === 1 ? W / 2 : W / 2 - gap * (n - 1) / 2 + i * gap, y = Hh * .93;
          if (id === 'nana') nanaSprite(g, x, y, { t: 0, dir: i ? 'l' : 'r', still: true, size: .62, happy: true });
          else human(g, LOOKS[id], x, y, { t: 0, dir: 'd', still: true, size: .82, expr: 'happy', pose: m.id === 'hands' ? 'hold' : 'stand' });
        });
        g.fillStyle = 'rgba(255,240,230,.12)'; g.fillRect(0, 0, W, Hh);
        return c;
      };

      /* the end */
      const finish = ending => {
        if (st.over) return; st.over = true; st.ending = ending;
        st.task = null; paintTask(); st.keys.clear(); st.ptr = null; st.markAt = null;
        const fs = $('.tr-finskip'); if (fs) fs.hidden = true;
        st.says = []; st.sayEnd = 0; st.talker = null; sayEl.hidden = true; if (headEl) headEl.hidden = true;
        const back = crew.filter(c => c.state === 'back');
        const won = ending === 'blanket', quit = ending === 'quit';
        const avg = st.n ? st.sum / st.n : st.vibe;
        const grade = won ? (st.min >= 25 && avg >= 65 ? 'S' : avg >= 45 ? 'A' : 'B') : 'C';
        const res = { won, grade, ending, quit, back: back.length, crew: back.map(c => c.id), vibe: Math.round(avg), low: Math.round(st.min), letGo: st.letGo,
          lamps: st.lamps, harmonies: st.harmonies, pets: st.pets, drinks: st.drinks, secs: Math.round(st.t / 1000), tutorial: tutRes,
          moments: st.got.length, scrapbook: st.got.slice(), barks: st.barks, shades: st.shadeN, hits: st.shadeHits, caught: st.caught, spooked: st.spooked };
        st.result = res;
        if (!won && !quit) { sfx('down'); cap('the music stops'); }
        el.classList.add(won ? 'won' : ending);
        const missing = crew.filter(c => c.state !== 'back').map(c => c.name);
        const list = missing.length > 1 ? `${missing.slice(0, -1).join(', ')} and ${missing[missing.length - 1]}` : missing[0] || '';
        const head = won ? 'Sunrise. Everyone’s on the blanket.' : ending === 'sunrise' ? 'The sun’s up.' : ending === 'curdled' ? 'The night turned.' : 'You went home early.';
        const line = won ? 'Nana lies across as many legs as he can reach. Junkyu apologises to the sun for being early. The trees stop breathing, politely, one at a time.'
          : ending === 'sunrise' ? `The park is just a park again. ${list} wander${missing.length === 1 ? 's' : ''} back on their own, cold and confused, still mid-sentence.`
          : ending === 'curdled' ? 'Somebody finds you by the pond. Nana won’t leave your side. Nobody talks much on the walk home, and the lamps don’t sing.'
          : 'Nana walks you to the gate. The blanket stays where it is, waiting.';
        const show = () => {
          if (st.closed) return;
          const end = $('.mg-end'); end.hidden = false; el.classList.add('ended');
          end.innerHTML = `<p class="tr-end-head">${esc(head)}</p><b class="mg-grade">${grade}</b>
            <dl><dt>On the blanket</dt><dd>${back.length} / 6</dd><dt>Good moments</dt><dd>${st.got.length} / ${MOMENTS.length}</dd><dt>Lowest vibe</dt><dd>${Math.round(st.min)}</dd>
              <dt>Shadows cleared</dt><dd>${st.shadeN}</dd><dt>Lamps sung</dt><dd>${st.lamps}</dd><dt>Pets for Nana</dt><dd>${st.pets}</dd></dl>
            <p class="mg-end-say">${esc(line)}</p>
            <div class="tr-book"><small>The scrapbook</small><div class="tr-book-row"></div></div>
            <button type="button">Continue</button>`;
          const row = end.querySelector('.tr-book-row');
          if (row) MOMENTS.forEach((M, i) => {
            const got = st.got.includes(M.id), f = document.createElement('figure'); f.className = 'tr-pol' + (got ? '' : ' none');
            f.style.setProperty('--r', `${((i * 37) % 9 - 4) * .9}deg`);
            if (got) { const c = polaroid(M); if (c) f.appendChild(c); const fc = document.createElement('figcaption'); fc.textContent = M.cap; f.appendChild(fc); }
            else { const q = document.createElement('i'); q.textContent = '?'; f.appendChild(q); }
            row.appendChild(f);
          });
          const b = end.querySelector('button'); b.focus?.(); b.onclick = cont;
        };
        const cont = () => { if (st.closed) return; st.closed = true; cleanup(); o.onDone?.(res); done(res); };
        st.cont = cont;
        quit || won ? show() : later(show, 1800);
      };

      /* input */
      const blocked = e => !st.begun || st.over || st.paused || (e && e.target && e.target.closest && e.target.closest('.mg-pause, .mg-end, .tr-title, .tr-task, .tr-acts, .tr-mt, .ftut'));
      const tapAt = (x, y) => {
        const w = toWorld(x, y);
        const c = crew.find(c2 => (c2.state === 'out' || c2.state === 'drift') && Math.hypot(c2.x - w.x, c2.y - 30 - w.y) < 50 && Math.hypot(c2.x - st.p.x, c2.y - st.p.y) < 110);
        if (c) { interact(); return true; }
        if (Math.hypot(st.nana.x - w.x, st.nana.y - 30 - w.y) < 55) { pet(); return true; }
        return false;
      };
      const ptrs = new Set();
      const down = e => {
        if (st.fin && !st.over && st.begun && !st.paused && !(e.target && e.target.closest && e.target.closest('.mg-pause'))) { skipFinale(); return; }
        if (blocked(e)) return;
        const T = tutNow(); if (T.open() && T.blocking()) return;
        if (st.task && !st.task.walk) return;
        if (!st.task && tapAt(e.clientX, e.clientY)) return;
        e.preventDefault(); ptrs.add(e.pointerId); st.ptr = { x: e.clientX, y: e.clientY };
        try { el.setPointerCapture(e.pointerId); } catch (err) {}
      };
      const move = e => { if (ptrs.has(e.pointerId)) st.ptr = { x: e.clientX, y: e.clientY }; };
      const up = e => { ptrs.delete(e.pointerId); if (!ptrs.size) st.ptr = null; };
      el.addEventListener('pointerdown', down); el.addEventListener('pointermove', move);
      el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up); el.addEventListener('lostpointercapture', up);
      el.addEventListener('contextmenu', e => e.preventDefault());
      const blur = () => { ptrs.clear(); st.ptr = null; st.keys.clear(); if (st.task && st.task.kind === 'angel') st.task.held = false; };
      window.addEventListener('blur', blur);
      const pause = on => {
        if (st.over) return;
        st.paused = on; $('.mg-pause').hidden = !on; blur();
        if (ac) { try { on ? ac.suspend() : ac.resume(); } catch (e) {} }
        if (on) $('.mg-pause button')?.focus?.();
      };
      const key = e => {
        if (!el.isConnected && !sim || st.over) return;
        e.stopPropagation();
        if (!st.begun) return;
        const T = tutNow(); if ((T.open() && (e.key === 'Escape' || T.blocking())) || (st.tut && e.key === 'Escape')) return; // the tutorial has the keys
        if (e.key === 'Escape') { e.preventDefault(); pause(!st.paused); return; }
        if (st.paused) return;
        if (st.fin) { e.preventDefault(); skipFinale(); return; }
        if (st.task && st.task.key && st.task.key(e, false)) { e.preventDefault(); return; }
        if (KEYDIR[e.key]) { e.preventDefault(); st.keys.add(KEYDIR[e.key]); return; }
        if (e.key === 'e' || e.key === 'E' || e.key === ' ' || e.key === 'Enter') { if (e.target && e.target.closest && e.target.closest('button') && e.key !== 'e' && e.key !== 'E') return; e.preventDefault(); interact(); return; }
        if (e.key === 'n' || e.key === 'N') { e.preventDefault(); pet(); return; }
        if (e.key === 'b' || e.key === 'B') { e.preventDefault(); bark(); return; }
        if (e.key === 'q' || e.key === 'Q') { e.preventDefault(); drink(); }
      };
      const keyUp = e => {
        if (st.task && st.task.kind === 'angel') st.task.key(e, true);
        if (KEYDIR[e.key]) st.keys.delete(KEYDIR[e.key]);
      };
      const cleanup = () => {
        if (window.cancelAnimationFrame) window.cancelAnimationFrame(raf); timers.forEach(clearTimeout); timers.clear();
        window.removeEventListener('keydown', key, true); window.removeEventListener('keyup', keyUp, true);
        window.removeEventListener('blur', blur); window.removeEventListener('keydown', skipT, true);
        try { ac && ac.close(); } catch (e) {} el.remove();
      };
      $('.mg-pause').onclick = e => { const b = e.target.dataset && e.target.dataset.mg; if (b === 'resume') pause(false); if (b === 'howto') howTo(); if (b === 'quit') { pause(false); finish('quit'); } };
      $('.tr-acts').onclick = e => { const b = e.target.closest && e.target.closest('button'); const a = b && b.dataset.a; if (a === 'coax') interact(); if (a === 'pet') pet(); if (a === 'bark') bark(); if (a === 'drink') drink(); };
      taskEl.onclick = e => {
        const b = e.target.closest && e.target.closest('button'); if (!b || !st.task || st.paused) return;
        if (b.dataset.tk === 'leave') { cancelTask(); return; }
        st.task.click && st.task.click(b);
      };
      const holdBtn = on => e => { if (st.task && st.task.kind === 'angel' && e.target.closest && e.target.closest('.tr-hold')) { e.preventDefault(); st.task.held = on; } };
      taskEl.addEventListener('pointerdown', holdBtn(true)); taskEl.addEventListener('pointerup', holdBtn(false)); taskEl.addEventListener('pointerleave', () => { if (st.task && st.task.kind === 'angel') st.task.held = false; });
      window.addEventListener('keydown', key, true); window.addEventListener('keyup', keyUp, true);

      /* the first-time tutorial: no clock, no drain; walk, a lamp, Nana, a bark, then the rest */
      const practice = kind => new Promise(ok => { tp = { kind, ok: () => { tp = null; ok(); } }; });
      const tutSteps = replay => [
        { target: null, say: 'Hanlim Park, way past midnight. Everything is breathing. That’s fine. That’s normal tonight.' },
        { target: '.tr-mark', before: () => mark(st.p, -40), say: 'This is me. Walk with the <b>arrows / WASD</b>, or hold the mouse or a finger where you want to go. Try it.', wait: replay ? 'click' : () => practice('walk') },
        { target: '.tr-vibe', before: () => mark(st.p, -40), say: 'The <b>vibe</b>. It slips on its own. If it sits at nothing for too long, the night turns. Keep it up.' },
        { target: '.tr-mark', before: () => mark(L.lamps[0], -80), say: 'What helps: the <b>blanket’s music</b> (stand near it), and the streetlights hum when I walk past. Three different ones in a row make a chord. Walk past this one.', wait: replay ? 'click' : () => practice('lamp') },
        { target: '.tr-mark', before: () => mark(st.nana, -50), say: 'And <b>Nana</b>. He’s talking tonight, apparently. Pet him: <b>N</b>, the Pet button, or tap him.', wait: replay ? 'click' : () => practice('nana') },
        { target: '.tr-bark', before: () => { if (!replay) { st.shades = []; spawnShade(true); st.barkAt = -1e9; } st.markAt = null; positionMark(); },
          say: 'When the vibe slips, the dark grows <b>shadow-things</b>. They drift at me and whoever holds my hand: a touch costs vibe, and a friend lets go and runs. <b>Lamp light</b> melts them. So does Nana: <b>B</b> or Bark. Bark now.', wait: replay ? 'click' : () => practice('bark') },
        { target: '.tr-sun', say: 'Later a <b>torch</b> sweeps the ring path: a night guard. Stay out of the beam, or the last friend in my chain lets go. The beam melts shadows too.' },
        { target: '.tr-mom', say: '<b>Good moments</b> glow like little polaroids. Walk through them: they fill the vibe, and they go in the scrapbook at the end.' },
        { target: '.tr-acts', say: 'Water bottles glow where they fell: walk over one, then drink (<b>Q</b> or Water). Standing still at the pond’s edge helps too.' },
        { target: '.tr-crew', say: 'Everyone wandered off. Pink pins at the edge point to them. Get close and press <b>E / Space</b>: catch Asahi’s falling notes, stomp on the beat with Hyunsuk, tag Junkyu, breathe with Jihoon, answer Jaehyuk, braid with Cherry. Then they hold my hand: walk them back to the blanket.' },
        { target: '.tr-sun', say: 'All six on the blanket before the sun’s up. Esc pauses, and How to play shows this again.' },
      ];
      const tutEnd = () => {
        st.tut = false; tp = null; st.markAt = null; positionMark(); el.classList.remove('tut');
        Object.assign(st, { t: 0, vibe: 80, sum: 0, n: 0, min: 100, zeroT: 0, lamps: 0, pets: 0, harmonies: 0, hits: [], letGoAt: 0, shades: [], barks: 0, shadeN: 0, shadeHits: 0, barkAt: -1e9, chatAt: st.mt + 30000 });
        st.nana.petAt = -1e9; st.nana.sayAt = st.mt + 9000; st.wind.next = st.mt + 16000;
      };
      const howTo = () => {
        tutLib().then(T => {
          if (!T || !st.paused || st.over) return;
          $('.mg-pause').hidden = true;
          T.run(el, { steps: tutSteps(true), who: 'Solar', face: FACE('solar'), calm, perf, replay: true }).then(() => {
            st.markAt = null; positionMark();
            if (st.paused && !st.over) { $('.mg-pause').hidden = false; $('.mg-pause button')?.focus?.(); }
          });
        });
      };

      /* the title card: ~1.8 s (click / any key skips) */
      const note = ['Surreal', calm ? 'Flashes reduced' : 'Colour flashes', still ? 'Reduced motion' : 'Lots of motion', o.mute ? 'Captions on' : 'Best with sound'].join(' · ');
      const tt = document.createElement('div'); tt.className = 'tr-title';
      tt.innerHTML = `<img class="tr-tbg" src="${BG(o.bg || 'epi-h-park-night')}" alt="" onerror="this.remove()"><img src="${ART('title')}" alt="" onerror="this.remove()">
        <b>THE TRIP</b><small>Hanlim Park. Everything is breathing.</small><p class="tr-note">${esc(note)}</p>`;
      el.appendChild(tt);
      const begin = () => {
        if (st.begun || (!el.isConnected && !sim)) return; st.begun = true; window.removeEventListener('keydown', skipT, true);
        tt.classList.add('out'); later(() => tt.remove(), 450);
        audio();
        const start = () => {
          if (st.over || st.closed) return;
          tutEnd();
          say(NANA_LEFT[0], 'nana');
          later(() => { const h = $('.tr-help'); if (h) h.classList.add('gone'); }, 14000);
        };
        if (sim && o.tutorial !== true) return start();
        st.tut = true;
        if (!sim) { paint(); raf = RAF(tick); }
        tutP.then(T => {
          if (!T || st.closed || (!el.isConnected && !sim) || !T.should('trip', o.tutorial)) return start();
          el.classList.add('tut');
          T.run(el, { id: 'trip', steps: tutSteps(false), who: 'Solar', face: FACE('solar'), calm, perf }).then(r => { tutRes = r; start(); });
        });
      };
      const skipT = e => { if (e.key !== 'Escape') { e.preventDefault(); begin(); } };
      tt.onclick = begin; window.addEventListener('keydown', skipT, true); later(begin, 1800);
      paintTask();

      st.ctl = {
        advance: ms => { for (let a = 0; a < ms && !st.over; a += 50) { if (!st.paused) step(50); if ((a / 50) % 20 === 0) paint(); } paint(); },
        go: (x, y) => { st.p.x = x; st.p.y = y; st.trail.push({ x, y }); },
        press: (dir, ms = 500) => { st.keys.add(dir); for (let a = 0; a < ms; a += 50) step(50); st.keys.delete(dir); paint(); },
        interact, pet, bark, drink, solve: () => st.task && st.task.solve(),
        vibe: v => { st.vibe = v; }, pause, quit: () => { pause(false); finish('quit'); }, cont: () => st.cont && st.cont(),
        skip: begin, skipFinale, crew: () => crew, moments: () => L.moments, guards: () => L.guards, lamps: () => L.lamps,
      };
    });
  }
  return { play, DIFF, CREW, LOOKS, state: () => cur, ctl: () => cur && cur.ctl };
})();
