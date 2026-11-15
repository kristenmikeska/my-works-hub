/* FEMC epilogue minigame: Somebody Yelled Cops (Nov 11 2026). A DEMO: not in the story (try it on mockups/minigames/ once the
   main session adds its card). HOAX's winter party: mid-party somebody screams it, and Solar Kim gets her crew out. Chaotic fun,
   fiction only, nothing of the plot told. Two phases, about 3-5 minutes.

   FemcCops.play({ host, mute, difficulty, bg, alleyBg, calm, perf, tutorial, onDone, hook }) -> Promise<result>
     host        element to draw into (default document.body; a full-screen overlay is added inside it)
     mute        no audio at all (captions carry every sound: sirens, the bass, the car; nothing is sound-only)
     difficulty  'easy' | 'normal' | 'hard' (siren timer 95 / 75 / 60 s, the cop's speed once they're in .5 / .62 / .74 of
                 Solar's, bag items 3 / 4 / 5, timing zones wide / normal / narrow, alley 300 / 360 / 420 m with torch beams
                 per 100 m .7 / 1 / 1.2 and patrol-car sweeps 2 / 3 / 4, Spotted per second in a beam 42 / 55 / 62,
                 a straggler is lost past 28 / 23 / 19 m; default 'normal')
     bg          the party background id under assets/femc/bg/ (default epi-h-party: behind the title, faintly under the
                 floor plan, behind the end card)
     alleyBg     the alley's far layer (default epi-h-winter-street); the end card uses epi-h-jihoon-car on a getaway.
                 A drawn stand-in shows for any picture that's missing.
     calm, perf  Reduce flashes / Performance; default: the game's settings (FemcGame.settings().calm / .perf), else off
     tutorial    true = always show the first-time tutorial, false = never, else only the first time (see below)
     onDone      called with the result too
     hook(api)   test handle: { g: () => the engine, el }
   result = { won, grade: 'S' | 'A' | 'B' | 'C', ending: 'clean' | 'left' | 'caught' | 'quit', where: 'house' | 'alley' | 'car',
              saved, crew: 6, left: [ids], items, handled, flushed, stashed, kept, found, secs, style, score, quit, tutorial }
     saved = friends who made it into Jihoon's car (Solar not counted); left = who didn't (left in the house, or lost in the
     alleys); handled = items flushed + stashed and not found + kept (kept only count if you got away); found = stashes the
     cops turned up, plus the whole bag if it never left the couch, plus anything kept on you if you were caught.
     Grade: S = clean, nothing found, every item handled; A = clean, or one left behind with nothing found; B = got away;
     C = caught or quit. score = saved × 1000 + handled × 250 − found × 150 + style + 10 a second under par.

   How it plays.
   1. The house (top-down floor plan; the siren timer runs). Move: WASD / arrows, or tap / click where to go (tap a person or
      thing to walk there and use it). Act: E / Space / Enter (or the Act button). Choices: 1-4 or tap.
        The bag (on the couch): grab it, then a quick choice per item: Flush (safe, costs ~2 s; only what fits), Stash in one
        of two spots offered (each shows its risk; the cops roll them when they come in), or Keep it (it rides with you:
        each one slows your hurry in the alleys, and it's found if you're caught).
        The crew, each with a problem: Junkyu asleep in the bathtub (mash Act to wake him), Asahi won't leave the record
        player (a choice), Cherry can't find her other shoe (look for it in the "?" spots, or go without: she hops), Jihoon
        is giving a speech on the stairs (a choice), Hyunsuk is stuck in the kitchen window (timing: two pulls), Jaehyuk is
        already at the back wall. Once sorted, a friend follows you in a line.
        The back wall (the yard, out the kitchen's back door): boost each follower over with a timing bar (Act when the
        marker is in the pink; the bright middle is a perfect boost, style), then climb over yourself (Jaehyuk pulls you
        up). You can go back for people or go over with someone still inside. Moving cancels a boost.
        The sirens get closer (red and blue light in the windows). At zero they're at the front door; a cop comes in and
        walks after Solar. Friends the cop reaches are left behind; Solar reached = caught. The party crowd scatters early.
   2. The getaway (side-scrolling, three lanes, Hanlim's back alleys to Jihoon's car). ▲ / ▼ (W / S) change lane; hold → / D
      to hurry (the crew can't keep up: stragglers), hold ← / A to slow (they catch up). Torch beams sweep the lanes at
      cross streets: being in one fills Spotted. A patrol car's sweep is called two seconds early ("Headlights!"): get into
      a doorway (top lane) or behind the bins (bottom lane) and hold Shift / H / Space to hide; friends close behind hide
      with you. A fence gap now and then is a shortcut (E when you're in its lane: timing; it skips ahead).
      Controller (Nov 15 2026, battle/pad.js): D-pad / stick moves (lanes, hurry, slow), ✕ acts (E), hold □ or R2 to hide
      (through FemcPad.remap), choices: ↑ ↓ then ✕; ○ pauses (D-pad + ✕ in the pause menu). Spotted full =
      caught. A friend too far back for ~3 s is lost (a funny line on the end card). Reach the car: everyone piles in and
      Jihoon peels out (if Jihoon didn't make it, Jaehyuk drives, at the speed limit).
   Esc pauses (Resume / How to play / Quit). Touch: tap to walk, the pad's buttons for the rest.
   Endings: clean getaway / someone left behind (a consequence line per friend, house or alley version) / caught (funny,
   never grim). Style: perfect boosts, letting Jihoon finish, the autograph line, the record, the shoe found, a hide right
   under the headlights, shortcuts.

   Title card ~1.8 s (click / any key skips): art title.webp if present. Sound (Web Audio, made here, no files): the party's
   bass through the walls (lowpassed harder once it's outside), a siren that swells as the timer runs down, footsteps, the
   flush, boosts and slips, the patrol car, the getaway screech. mute = none of it, captions instead.
   Settings: reduced motion = no shake, no pulsing, the siren light changes slowly; Reduce flashes (calm) = the red / blue is
   a soft slow wash, never alternating; Performance = 1x canvas, no glow, fewer party guests. UI chrome is pink and black;
   red / blue is scene lighting only.

   Art (optional, assets/femc/game/art/minigames/cops/; each has a drawn stand-in): title, alley (a tileable far layer,
   used before alleyBg), car (Jihoon's car, side view), cop (top-down cop token). Faces: portraits/<id>-hoax/neutral.webp
   (solar / cherry / jihoon use their -hoax-party sets), cropped round; a drawn initial if missing.

   First-time tutorial (Kat: every minigame teaches itself): tutorial.js / FemcTutorial, loaded on demand from this folder
   (the same loader as the other games; null = the built-in cards below). After the title card, the first time ever
   (FemcTutorial.seen('cops'), localStorage kg-femc-tutorials) or with `tutorial: true`. Jaehyuk (jaehyuk-hoax faces) talks
   you through a practice house with the sirens frozen: move → grab the bag and choose for one practice item → the sirens
   → the crew → one practice boost → the alleys (info). Then the real run starts fresh. Without FemcTutorial: skippable
   info cards (Next / Skip, same localStorage key, try/catch). result.tutorial = 'done' | 'skipped' | 'seen'. Pause → How
   to play replays it as a walkthrough (Next on every step).

   FemcCops.engine(difficulty, seed, { on, tut }) is the game without the page (jsc runs drive it with bots): step(dt),
   input { dx, dy, act, hide, hurry, slow, up, down }, walkTo(x, y, id), choose(i), plus state. */
window.FemcCops = (() => {
  const reduced = typeof matchMedia === 'function' ? matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const base = () => (window.FemcGame && window.FemcGame.base) || (typeof document !== 'undefined' && document.querySelector && document.querySelector('script[src*="minigames/cops"]')?.src.split('assets/')[0]) || '';
  const ART = id => `${base()}assets/femc/game/art/minigames/cops/${id}.webp`;
  const BG = id => `${base()}assets/femc/bg/${id}.webp`;
  const FACE_DIR = { solar: 'solar-hoax-party', cherry: 'cherry-hoax-party', jihoon: 'jihoon-hoax-party' };
  const FACE = (id, f = 'neutral') => `${base()}assets/femc/portraits/${FACE_DIR[id] || id + '-hoax'}/${f}.webp`;
  const tutLib = () => window.FemcTutorial ? Promise.resolve(window.FemcTutorial) : (window.FemcTutorialLoading ||= new Promise(ok => {
    const B = `${base()}assets/femc/game/minigames/tutorial`, l = document.createElement('link'), s = document.createElement('script');
    l.rel = 'stylesheet'; l.href = `${B}.css?v=1`; document.head.appendChild(l);
    s.src = `${B}.js?v=2`; s.onload = s.onerror = () => ok(window.FemcTutorial || null); document.head.appendChild(s);
  }));

  const DIFF = {
    easy:   { siren: 95, cop: .5,  items: 3, zone: .26, bar: 1.05, mash: 7,  len: 300, beams: .7,  cars: 2, spot: 42, carSpot: 30, lost: 28, cuts: 3, search: .7, par: 230 },
    normal: { siren: 75, cop: .62, items: 4, zone: .2,  bar: 1.35, mash: 9,  len: 360, beams: 1,   cars: 3, spot: 55, carSpot: 40, lost: 23, cuts: 2, search: 1,  par: 210 },
    hard:   { siren: 60, cop: .74, items: 5, zone: .15, bar: 1.7,  mash: 11, len: 420, beams: 1.2, cars: 4, spot: 62, carSpot: 46, lost: 19, cuts: 2, search: 1.25, par: 200 },
  };
  const SPEED = 5.2, WALK = 4.6, HURRY = 7.4, SLOW = 2.6;

  /* the house: a 40 x 24 cell plan (rooms carved out of wall) */
  const GW = 40, GH = 24;
  const ROOMS = {
    bath: { r: [1, 1, 7, 6], name: 'Bathroom', c: '#1d1220' }, den: { r: [9, 1, 11, 6], name: 'Den', c: '#24101d' },
    bed: { r: [21, 1, 10, 6], name: 'Bedroom', c: '#2a1222' }, hall: { r: [1, 8, 30, 2], name: 'Hall', c: '#1c0b15' },
    stairs: { r: [1, 11, 5, 11], name: 'Stairs', c: '#1a0a13' }, living: { r: [7, 11, 14, 11], name: 'Living room', c: '#2c0f20' },
    kitchen: { r: [22, 11, 9, 11], name: 'Kitchen', c: '#22101a' }, yard: { r: [32, 1, 6, 21], name: 'Yard', c: '#120b10' },
  };
  const DOORS = [[4, 7], [14, 7], [25, 7], [3, 10], [13, 10], [14, 10], [26, 10], [21, 15], [21, 16], [6, 17], [31, 18], [31, 19]];
  const WINDOWS = [[3, 0], [14, 0], [26, 0], [0, 4], [0, 14], [0, 19], [10, 23], [17, 23], [26, 23]];
  const FRONT = { x: 12.5, y: 21.4 };
  const GRID = (() => {
    const g = Array.from({ length: GH }, () => new Array(GW).fill(0));
    for (const { r: [x, y, w, h] } of Object.values(ROOMS)) for (let j = y; j < y + h; j++) for (let i = x; i < x + w; i++) g[j][i] = 1;
    for (const [x, y] of DOORS) g[y][x] = 1;
    return g;
  })();
  const open = (x, y) => x >= 0 && y >= 0 && x < GW && y < GH && GRID[y][x] === 1;
  const R = .3;
  const free = (x, y) => open(Math.floor(x - R), Math.floor(y - R)) && open(Math.floor(x + R), Math.floor(y - R)) && open(Math.floor(x - R), Math.floor(y + R)) && open(Math.floor(x + R), Math.floor(y + R));
  const roomAt = (x, y) => { for (const [k, v] of Object.entries(ROOMS)) { const [rx, ry, w, h] = v.r; if (x >= rx && x < rx + w && y >= ry && y < ry + h) return k; } return 'hall'; };
  const bfs = (sx, sy, tx, ty) => { // cell path (centres) from (sx, sy) to (tx, ty), nearest open cell if the target is a wall
    sx = Math.floor(sx); sy = Math.floor(sy); tx = Math.floor(tx); ty = Math.floor(ty);
    if (!open(tx, ty)) { let best = null, bd = 1e9; for (let j = 0; j < GH; j++) for (let i = 0; i < GW; i++) if (GRID[j][i]) { const d = (i - tx) ** 2 + (j - ty) ** 2; if (d < bd) { bd = d; best = [i, j]; } } [tx, ty] = best; }
    const prev = new Int16Array(GW * GH).fill(-1), q = [sy * GW + sx]; prev[sy * GW + sx] = sy * GW + sx;
    for (let h = 0; h < q.length; h++) {
      const c = q[h], cx = c % GW, cy = (c - cx) / GW;
      if (cx === tx && cy === ty) break;
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const nx = cx + dx, ny = cy + dy, n = ny * GW + nx; if (open(nx, ny) && prev[n] < 0) { prev[n] = c; q.push(n); } }
    }
    const end = ty * GW + tx; if (prev[end] < 0) return [];
    const out = []; for (let c = end; c !== sy * GW + sx; c = prev[c]) out.unshift({ x: c % GW + .5, y: (c - c % GW) / GW + .5 });
    return out;
  };

  /* the crew and their problems */
  const CREW = {
    junkyu: { name: 'Junkyu', at: [3.5, 2.6], icon: 'zZ', prob: 'Asleep in the bathtub', vmax: 5.7 },
    asahi: { name: 'Asahi', at: [17.5, 2.6], icon: '♪', prob: 'Won’t leave the record player', vmax: 6.4 },
    cherry: { name: 'Cherry', at: [27.5, 3.6], icon: '?', prob: 'Can’t find her other shoe', vmax: 6.5 },
    jihoon: { name: 'Jihoon', at: [3.5, 15.5], icon: '!', prob: 'Giving a speech on the stairs', vmax: 6.6 },
    hyunsuk: { name: 'Hyunsuk', at: [30.2, 13.5], icon: '!?', prob: 'Stuck in the kitchen window', vmax: 6.1 },
    jaehyuk: { name: 'Jaehyuk', at: [36.6, 9.5], icon: '', prob: 'Already at the wall', vmax: 6.8 },
  };
  const ORDER = ['hyunsuk', 'asahi', 'jaehyuk', 'junkyu', 'jihoon', 'cherry'];
  const ITEMS = [
    { id: 'soju', name: 'Six green bottles of soju (not ours, allegedly)', flush: false, big: true },
    { id: 'ids', name: 'A stack of fake IDs (one is Niki’s face on a forty-year-old)', flush: true },
    { id: 'cigs', name: 'Somebody’s cigarettes and three lighters', flush: true },
    { id: 'trophy', name: 'Hanlim’s debate trophy (who brought this)', flush: false, big: true },
    { id: 'cone', name: 'A traffic cone, wearing a party hat', flush: false, big: true },
    { id: 'baggie', name: 'A little baggie nobody will claim', flush: true },
    { id: 'letter', name: 'The neighbour’s noise complaint, unopened', flush: true },
    { id: 'sign', name: 'A real street sign. BUS STOP.', flush: false, big: true },
  ];
  const SPOTS = [
    { id: 'freezer', name: 'The freezer, behind the dumplings', risk: .12 },
    { id: 'piano', name: 'Inside the piano', risk: .18 },
    { id: 'tile', name: 'Above a loose ceiling tile', risk: .1, small: true },
    { id: 'vase', name: 'The ugly vase on the landing', risk: .3, small: true },
    { id: 'hamper', name: 'The laundry hamper', risk: .26 },
    { id: 'dogbed', name: 'The dog bed (the dog is unbothered)', risk: .42 },
    { id: 'cushions', name: 'Under the couch cushions', risk: .55 },
    { id: 'cereal', name: 'An empty cereal box', risk: .22, small: true },
  ];
  const SHOE_SPOTS = [
    { id: 'coats', x: 23.5, y: 5.5, name: 'the coat pile', hit: 'In the coat pile, under four coats and a sleeping cat.' },
    { id: 'beanbag', x: 10.5, y: 5.5, name: 'the beanbag', hit: 'Inside the beanbag. Don’t ask how.' },
    { id: 'fridge', x: 23.5, y: 12.5, name: 'the fridge', hit: 'In the fridge. Next to the kimchi. Nobody asks.' },
    { id: 'plant', x: 19.5, y: 20.5, name: 'the big plant', hit: 'In the big plant’s pot, heel up.' },
    { id: 'tub2', x: 6.5, y: 5.5, name: 'the laundry basket', hit: 'In the laundry basket. Junkyu was using it as a pillow.' },
  ];
  const LEFT = { // a funny consequence per friend: house (left inside) / alley (lost on the way)
    junkyu: ['Junkyu woke up in the bathtub at noon. The house was spotless and the cops had left him a blanket. He thinks it was a dream.', 'Junkyu took a wrong turn into a 24-hour laundromat and fell asleep on a warm dryer. He calls it the best night of his life.'],
    asahi: ['Asahi stayed with the record player. The officer turned out to love the same band. They follow each other now.', 'Asahi stopped to let a cat sniff the record. The cat is his now. He named it No One Cares.'],
    cherry: ['Cherry got a ride home in the back of a squad car with one shoe on and reviewed it four stars. “Roomy.”', 'Cherry hopped into a convenience store, bought slippers and a banana milk, and walked home like nothing happened.'],
    jihoon: ['Jihoon finished his speech to two officers and the neighbour. He got a standing ovation and a warning, in that order.', 'Jihoon got lost in his own neighbourhood and called from a playground. “Do Not Fret. I Am On The Swings.”'],
    hyunsuk: ['Hyunsuk is still in the kitchen window. The fire department was very nice about it. There are photos.', 'Hyunsuk hid in a recycling bin and committed to it. At 3 a.m. the chat got one text: “im the bin now”.'],
    jaehyuk: ['Jaehyuk walked out the front door and told the police he was just leaving. It worked. Of course it worked.', 'Jaehyuk fell behind on purpose to walk at a reasonable pace. He got home first.'],
  };

  /* ---------------- the engine (no page) ---------------- */
  function engine(diff, seed, hooks = {}) {
    const D = DIFF[diff] || DIFF.normal;
    let rs = (seed >>> 0) || 1;
    const rnd = () => (rs = (Math.imul(rs, 1664525) + 1013904223) >>> 0) / 4294967296;
    const pickR = a => a[Math.floor(rnd() * a.length)];
    const shuf = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
    const emit = (e, x) => { try { hooks.on && hooks.on(e, x); } catch (err) {} };
    const say = (t, kind = '') => emit('say', { t, kind });
    const g = {
      D, diff, phase: 'house', t: 0, tut: !!hooks.tut, siren: D.siren, sirenMax: D.siren, yelled: false,
      me: { x: 15.5, y: 12.5, fx: 0, fy: 1, moving: false, step: 0 }, path: [], pathAct: null, busy: 0,
      trail: [{ x: 15.5, y: 12.5 }], order: [], crew: {}, card: null, meter: null, cop: null, copsIn: false, copT: 0,
      bag: { got: false, items: shuf(ITEMS).slice(0, D.items), i: 0 }, flushed: [], stashed: [], kept: [], found: [], rolled: false,
      shoe: { shown: false, found: false, spots: [], at: null }, style: 0, over: false, end: null, seenYard: false,
      crowd: [], input: { dx: 0, dy: 0, act: false, hide: false, hurry: false, slow: false, up: false, down: false },
      // alley
      dist: 0, len: D.len, lane: 1, ly: 1, spot: 0, lyHist: [], beams: [], cars: [], zones: [], cuts: [], hidden: false, stun: 0, warnCar: null,
    };
    for (const id of ORDER) g.crew[id] = { id, ...CREW[id], x: CREW[id].at[0], y: CREW[id].at[1], st: id === 'jaehyuk' ? 'wall' : 'stuck', mash: 0, lag: 0, warn: 0 };
    for (let i = 0; i < 16; i++) g.crowd.push({ x: 8 + rnd() * 12, y: 12 + rnd() * 9, ph: rnd() * 6, run: 0, gone: false, sp: 2.5 + rnd() * 2 });
    const C = g.crew;

    /* hotspots: what Act does near Solar */
    g.hotspots = () => {
      if (g.phase !== 'house') return [];
      const list = [];
      if (!g.bag.got) list.push({ id: 'bag', x: 8.5, y: 12.5, label: 'Grab the bag' });
      for (const c of Object.values(C)) if (c.st === 'stuck') list.push({ id: c.id, x: c.x, y: c.y, label: c.id === 'junkyu' ? 'Wake Junkyu' : c.id === 'hyunsuk' ? 'Pull Hyunsuk out' : c.id === 'cherry' ? 'Talk to Cherry' : c.id === 'jihoon' ? 'Stop the speech' : 'Talk to Asahi' });
      if (g.shoe.shown && !g.shoe.found) for (const s of g.shoe.spots) if (!s.done) list.push({ id: 'shoe:' + s.id, x: s.x, y: s.y, label: 'Look in ' + s.name });
      list.push({ id: 'wall', x: 37.3, y: 10.5, label: 'The back wall' });
      return list;
    };
    const near = () => { let best = null, bd = 1.45 ** 2; for (const h of g.hotspots()) { const d = (h.x - g.me.x) ** 2 + (h.y - g.me.y) ** 2; if (d < bd) { bd = d; best = h; } } return best; };
    g.near = near;

    const follow = id => { const c = C[id]; c.st = 'follow'; if (!g.order.includes(id)) g.order.push(id); emit('follow', id); };
    const timing = (o) => { g.meter = { kind: 'time', pos: 0, dir: 1, zone: o.zone || D.zone, hits: 0, need: o.need || 1, miss: 0, ...o }; g.meter.z0 = .5 - g.meter.zone / 2 + (rnd() - .5) * (.5 - g.meter.zone) * .9; emit('meter', g.meter); };
    const card = (o) => { g.card = o; emit('card', o); };

    const useBag = () => {
      g.bag.got = true; emit('bag'); say('The bag. Of course it’s heavier than it looks.');
      nextItem();
    };
    const nextItem = () => {
      const b = g.bag, it = b.items[b.i];
      if (!it) { g.card = null; emit('card', null); emit('bagDone'); say(g.tut ? 'Bag sorted.' : 'Bag sorted. Now the crew.'); return; }
      const spots = shuf(SPOTS.filter(s => !(it.big && s.small))).slice(0, 2).sort((a, b) => a.risk - b.risk);
      card({
        kind: 'bag', title: `In the bag · ${b.i + 1} of ${b.items.length}`, say: it.name,
        opts: [
          { t: 'Flush it', sub: it.flush ? 'safe · about 2 s' : 'it won’t fit', dis: !it.flush },
          { t: 'Stash: ' + spots[0].name, sub: Math.round(spots[0].risk * 100) + '% they find it' },
          { t: 'Stash: ' + spots[1].name, sub: Math.round(spots[1].risk * 100) + '% they find it' },
          { t: 'Keep it on you', sub: 'slows you down later' },
        ],
        pick: i => {
          if (i === 0) { if (!it.flush) return false; g.flushed.push(it.id); g.busy = 1.8; emit('flush'); say('Flushed. The pipes make a noise like a dying whale.'); }
          else if (i === 1 || i === 2) { const s = spots[i - 1]; g.stashed.push({ item: it.id, name: it.name, spot: s.name, risk: s.risk }); g.busy = .7; emit('stash'); say('Stashed: ' + s.name.toLowerCase() + '.'); }
          else { g.kept.push(it.id); emit('keep'); say('Into your coat. It clinks.'); }
          b.i++; nextItem(); return true;
        },
      });
    };
    const useFriend = id => {
      const c = C[id];
      if (id === 'junkyu') { g.meter = { kind: 'mash', who: id, v: 0, need: D.mash, title: 'Wake Junkyu up (tap Act fast)' }; emit('meter', g.meter); say('Junkyu is asleep in the bathtub, fully dressed, hugging a rubber duck.'); }
      else if (id === 'hyunsuk') { timing({ who: id, need: 2, title: 'Pull Hyunsuk out of the window (Act in the pink, twice)' }); say('Hyunsuk is stuck halfway out the kitchen window. He says it was a plan.'); }
      else if (id === 'asahi') card({ kind: 'friend', who: id, title: 'Asahi', say: 'Both hands on the record player. “It’s a first pressing. I’m not leaving it.”', opts: [
        { t: 'Bring the record', sub: 'style · he’s slower outside' }, { t: 'Promise him a new one', sub: 'about 2 s of pinky swearing' }, { t: 'Lift the needle', sub: 'fast · he sulks' }],
        pick: i => { if (i === 0) { c.record = true; c.vmax = 5.6; g.style += 40; say('He holds it like a baby. He’s coming.'); } else if (i === 1) { g.busy = 2; say('He makes you pinky swear. Twice. Then he’s coming.'); } else say('Asahi: “no one cares about music anymore.” He follows, sulking.'); g.card = null; emit('card', null); follow(id); return true; } });
      else if (id === 'jihoon') card({ kind: 'friend', who: id, title: 'Jihoon', say: 'On the fourth stair, glass raised, to nobody: “Friends. Countrymen. Hanlim. The almighty Hoon has an announcement.”', opts: [
        { t: 'Grab his arm', sub: 'fast' }, { t: 'Let him finish', sub: 'about 5 s · big style' }, { t: '“The cops want your autograph”', sub: 'style' }],
        pick: i => { if (i === 0) say('“Unhand me.” He comes anyway, still talking.'); else if (i === 1) { g.busy = 5; g.style += 120; say('…and he bows. A standing ovation from two strangers in the hall.'); } else { g.style += 70; say('Jihoon: “Finally. Recognition.” He’s right behind you.'); } g.card = null; emit('card', null); follow(id); return true; } });
      else if (id === 'cherry') card({ kind: 'friend', who: id, title: 'Cherry', say: '“My SHOE. My other shoe. I am not going over a wall in one boot.”', opts: [
        { t: 'Help her look', sub: 'search the “?” spots' }, { t: 'Go without it', sub: 'she hops · slower outside' }],
        pick: i => { if (i === 0) { g.shoe.shown = true; g.shoe.spots = shuf(SHOE_SPOTS).slice(0, 3).map(s => ({ ...s })); g.shoe.at = g.shoe.spots[Math.floor(rnd() * 3)].id; say('She follows you, hopping. Try the “?” spots.'); }
          else { c.vmax = 5.2; c.hop = true; say('“Fine. FINE.” She hops after you, furious and fast.'); } g.card = null; emit('card', null); follow(id); return true; } });
    };
    const useShoe = sid => {
      const s = g.shoe.spots.find(x => x.id === sid); if (!s || s.done) return;
      s.done = true; g.busy = .6;
      if (sid === g.shoe.at) { g.shoe.found = true; g.style += 50; C.cherry.vmax = 6.5; C.cherry.hop = false; emit('shoe'); say('Found it! ' + s.hit); }
      else say('Not in ' + s.name + '. Just a sock and somebody’s calculus homework.');
    };
    const useWall = () => {
      if (!g.seenYard) { g.seenYard = true; }
      const q = g.order.filter(id => C[id].st === 'follow');
      if (q.length) {
        const id = q[0];
        timing({ who: id, kind2: 'boost', title: `Boost ${C[id].name} over (Act in the pink)` });
        return;
      }
      const inside = Object.values(C).filter(c => c.st === 'stuck' || c.st === 'follow').length;
      card({ kind: 'climb', title: 'The back wall', say: inside ? `Jaehyuk reaches down. “${inside} still inside. Your call.”` : 'Jaehyuk reaches down. “That’s everyone. Come on.”', opts: [
        { t: inside ? `Climb over (leave ${inside})` : 'Climb over', sub: 'Jaehyuk pulls you up' }, { t: 'Not yet', sub: 'go back in' }],
        pick: i => { g.card = null; emit('card', null); if (i === 0) timing({ who: 'solar', kind2: 'climb', zone: D.zone * 1.5, title: 'Climb (Act in the pink)' }); return true; } });
    };
    g.interact = id => {
      if (g.card || g.meter || g.over || g.end) return;
      if (g.tut && id !== 'bag') { say(id === 'wall' ? 'Jaehyuk: “Not yet. Practice first.”' : 'Practice first. They’ll keep.'); return; }
      if (id === 'bag') useBag();
      else if (id === 'wall') useWall();
      else if (id && id.startsWith('shoe:')) useShoe(id.slice(5));
      else if (C[id] && C[id].st === 'stuck') useFriend(id);
    };
    g.choose = i => { const c = g.card; if (!c || !c.opts[i] || c.opts[i].dis) return false; return c.pick(i); };
    g.walkTo = (x, y, id = null) => { if (g.phase !== 'house') return; g.path = bfs(g.me.x, g.me.y, x, y); g.pathAct = id; if (!g.path.length && id) { g.pathAct = null; if (near() && near().id === id) g.interact(id); } };

    const meterHit = () => {
      const m = g.meter; if (!m) return;
      if (m.kind === 'mash') { m.v += 1; emit('mash', m); if (m.v >= m.need) { g.meter = null; emit('meter', null); follow('junkyu'); say('Junkyu: “are we going to Sunoo’s?” Sure, Kyu. Sure.'); } return; }
      const inZ = m.pos >= m.z0 && m.pos <= m.z0 + m.zone, perfect = Math.abs(m.pos - (m.z0 + m.zone / 2)) <= m.zone * .18;
      if (m.practice) { emit(inZ ? 'hit' : 'miss', { perfect, who: m.who }); if (inZ) { g.meter = null; emit('meter', null); emit('practiceBoost'); } return; }
      if (!inZ) {
        m.miss++; emit('miss', m);
        if (m.kind2 === 'boost' && m.miss >= 3) { say(`${C[m.who].name} makes it over on the fourth try, mostly by accident.`); return boostDone(m, false); }
        if (m.kind2 === 'climb' && m.miss >= 3) { say('Jaehyuk just hauls you up by the hood.'); return climbDone(); }
        say(m.kind2 === 'boost' ? `${C[m.who].name} slides back down the wall.` : m.kind2 === 'climb' ? 'Your foot slips on the frost.' : 'Not quite. Again!', 'warn');
        m.z0 = .5 - m.zone / 2 + (rnd() - .5) * (.5 - m.zone) * .9; return;
      }
      emit('hit', { perfect, who: m.who });
      if (perfect) g.style += m.kind2 === 'boost' ? 40 : 20;
      m.hits++;
      if (m.hits < m.need) { m.z0 = .5 - m.zone / 2 + (rnd() - .5) * (.5 - m.zone) * .9; return; }
      g.meter = null; emit('meter', null);
      if (m.kind2 === 'boost') boostDone(m, perfect);
      else if (m.kind2 === 'climb') climbDone();
      else if (m.kind2 === 'cut') cutDone(true);
      else if (m.who === 'hyunsuk') { follow('hyunsuk'); C.hyunsuk.x = 29.5; say('Hyunsuk pops free. “I had it under control.” He did not.'); }
    };
    const boostDone = (m, perfect) => {
      g.meter = null; emit('meter', null);
      const c = C[m.who]; c.st = 'over'; g.order = g.order.filter(x => x !== m.who); emit('over', { who: m.who, perfect });
      if (perfect) say(`${c.name} sails over. Perfect boost.`);
      const q = g.order.filter(id => C[id].st === 'follow');
      if (q.length) timing({ who: q[0], kind2: 'boost', title: `Boost ${C[q[0]].name} over (Act in the pink)` });
      else useWall();
    };
    const climbDone = () => { g.meter = null; emit('meter', null); g.over = true; C.jaehyuk.st = 'over'; emit('climbed'); houseEnd(); };
    const rollStash = () => {
      if (g.rolled) return; g.rolled = true;
      if (!g.bag.got) { for (const it of g.bag.items) g.found.push({ item: it.id, name: it.name, spot: 'the bag on the couch' }); return; }
      for (const s of g.stashed) if (rnd() < s.risk * D.search) { s.found = true; g.found.push({ item: s.item, name: s.name, spot: s.spot }); }
    };
    const houseEnd = () => {
      rollStash();
      for (const c of Object.values(C)) if (c.st !== 'over') { c.st = 'left'; c.where = 'house'; }
      emit('houseEnd');
    };
    g.copsArrive = () => { // timer zero: they're in
      if (g.copsIn) return; g.copsIn = true; rollStash();
      g.cop = { x: FRONT.x, y: FRONT.y, path: [], re: 0 };
      emit('copsIn'); say('The sirens stop. Car doors. The front door opens.', 'warn');
    };

    /* alley setup */
    g.startAlley = () => {
      g.phase = 'alley'; g.dist = 0; g.lane = 1; g.ly = 1; g.spot = 0; g.lyHist = [{ d: -60, y: 1 }]; g.path = []; g.card = null; g.meter = null;
      let rank = 0;
      for (const id of ORDER) { const c = C[id]; if (c.st === 'over') { c.rank = rank++; c.lag = 1.3 * c.rank + 1.3; c.warn = 0; } }
      const L = g.len, nb = Math.round(L / 100 * D.beams);
      for (let i = 0; i < nb; i++) { const at = 40 + (L - 80) * (i + .5) / nb + (rnd() - .5) * 18; g.beams.push({ at, w: 1.1 + rnd() * 1.1 + D.beams * .3, ph: rnd() * 6.3, side: rnd() < .5 ? 0 : 1 }); }
      for (let i = 0; i < D.cars; i++) g.cars.push({ at: 55 + (L - 100) * (i + .5) / D.cars + (rnd() - .5) * 20, st: 'wait', t: 0, clean: true });
      for (let d = 14, k = 0; d < L - 8; d += 12 + rnd() * 6, k++) g.zones.push({ a: d, b: d + 3.2, lane: k % 2 ? 2 : 0, kind: k % 2 ? 'bins' : 'door' });
      for (let i = 0; i < D.cuts; i++) { const at = 70 + (L - 150) * (i + .5) / D.cuts + (rnd() - .5) * 20; if (!g.cars.some(c => Math.abs(c.at - at) < 18)) g.cuts.push({ at, lane: Math.floor(rnd() * 3), skip: 26 + Math.round(rnd() * 10), used: false }); }
      emit('alley'); say('Over the wall and into the alleys. Jihoon’s car is three streets away.');
    };
    const lyAt = d => { const h = g.lyHist; for (let i = h.length - 1; i >= 0; i--) if (h[i].d <= d) return h[i].y; return 1; };
    g.lyAt = lyAt;
    g.inZone = () => g.zones.find(z => g.dist >= z.a - .6 && g.dist <= z.b + .6 && Math.abs(g.ly - z.lane) < .45);
    g.cutHere = () => g.cuts.find(c => !c.used && Math.abs(g.dist - c.at) < 2.2 && g.lane === c.lane);
    const cutDone = ok => {
      const c = g.cuts.find(x => x.active); if (c) { c.used = true; c.active = false; }
      g.meter = null; emit('meter', null);
      if (ok) { g.dist += c ? c.skip : 0; g.style += 80; emit('cut'); say('Through the gap behind the noraebang. Shortcut!'); }
      else { g.stun = 1.2; g.spot = Math.min(99, g.spot + 12); emit('miss'); say('You catch your coat on the fence. Loudly.', 'warn'); }
    };
    const beamY = (b, t) => 1 + Math.sin(t * b.w + b.ph) * 1.3;
    g.beamY = beamY;

    /* finishing */
    g.finish = (ending, where) => {
      if (g.end) return g.end;
      if (ending === 'caught') { for (const c of Object.values(C)) if (c.st !== 'left') { c.st = 'caught'; } for (const k of g.kept) g.found.push({ item: k, name: ITEMS.find(x => x.id === k).name, spot: 'on you' }); }
      const won = ending === 'clean' || ending === 'left';
      if (won) ending = Object.values(C).some(c => c.st === 'left') ? 'left' : 'clean';
      const saved = Object.values(C).filter(c => c.st === 'over').length;
      const left = ORDER.filter(id => C[id].st === 'left');
      const stashSafe = g.stashed.filter(s => !s.found).length;
      const handled = g.flushed.length + stashSafe + (won ? g.kept.length : 0);
      const found = g.found.length, secs = Math.round(g.t);
      const grade = !won ? 'C' : ending === 'clean' && !found && handled === g.bag.items.length ? 'S' : (ending === 'clean' || left.length <= 1) && !found ? 'A' : 'B';
      const score = Math.max(0, saved * 1000 + handled * 250 - found * 150 + g.style + (won ? Math.max(0, D.par - secs) * 10 : 0));
      g.end = { won, grade, ending, where, saved, crew: 6, left, items: g.bag.items.length, handled, flushed: g.flushed.length, stashed: g.stashed.length, kept: g.kept.length, found, foundList: g.found.slice(), secs, style: g.style, score, quit: ending === 'quit' };
      emit('end', g.end); return g.end;
    };

    /* the step */
    g.step = dt => {
      if (g.end) return;
      dt = Math.min(.1, Math.max(0, dt));
      if (!g.tut) g.t += dt;
      if (g.phase === 'house') houseStep(dt); else if (g.phase === 'alley') alleyStep(dt);
      const I = g.input; I.act = false; I.up = false; I.down = false;
    };
    const houseStep = dt => {
      const I = g.input, me = g.me;
      if (!g.tut && !g.over) {
        g.siren -= dt;
        if (!g.yelled) g.yelled = true;
        if (g.siren <= 0 && !g.copsIn) { g.siren = 0; g.copsArrive(); }
      }
      // the crowd scatters out the front
      for (const p of g.crowd) {
        if (p.gone) continue;
        p.ph += dt;
        if (g.yelled && !g.tut) { p.run += dt; if (p.run > p.sp * .25) { const dx = FRONT.x - p.x, dy = FRONT.y + .6 - p.y, d = Math.hypot(dx, dy) || 1; p.x += dx / d * p.sp * dt; p.y += dy / d * p.sp * dt; if (d < .5) p.gone = true; } }
      }
      if (g.busy > 0) { g.busy -= dt; me.moving = false; return copStep(dt); }
      // meters
      const m = g.meter;
      if (m && m.kind === 'time') { m.pos += m.dir * D.bar * dt; if (m.pos > 1) { m.pos = 1; m.dir = -1; } if (m.pos < 0) { m.pos = 0; m.dir = 1; } }
      if (m && m.kind === 'mash') m.v = Math.max(0, m.v - 1.6 * dt);
      // input
      let dx = I.dx, dy = I.dy;
      if ((dx || dy) && g.path.length) { g.path = []; g.pathAct = null; }
      if ((dx || dy) && m && !m.practice) { g.meter = null; emit('meter', null); say('Cancelled. Come back to finish.', ''); }
      if (I.act) {
        if (g.meter) meterHit();
        else if (!g.card) { const h = near(); if (h) g.interact(h.id); }
      }
      if (g.card || g.meter) { me.moving = false; return copStep(dt); }
      if (!dx && !dy && g.path.length) {
        const w = g.path[0], ddx = w.x - me.x, ddy = w.y - me.y, d = Math.hypot(ddx, ddy);
        if (d < .12) { g.path.shift(); if (!g.path.length && g.pathAct) { const id = g.pathAct; g.pathAct = null; const h = near(); if (h && h.id === id) g.interact(id); } }
        else { dx = ddx / d; dy = ddy / d; }
      }
      const len = Math.hypot(dx, dy);
      me.moving = len > 0;
      if (len) {
        dx /= len; dy /= len; me.fx = dx; me.fy = dy;
        const crowd = g.crowd.filter(p => !p.gone && Math.abs(p.x - me.x) < 1.1 && Math.abs(p.y - me.y) < 1.1).length;
        const sp = SPEED * (crowd ? .62 : 1) * dt;
        move(me, dx * sp, dy * sp);
        me.step += sp;
        if (me.step > .9) { me.step = 0; emit('step'); }
        const last = g.trail[g.trail.length - 1];
        if (Math.hypot(me.x - last.x, me.y - last.y) > .12) { g.trail.push({ x: me.x, y: me.y }); if (g.trail.length > 200) g.trail.shift(); }
        emit('moved', len);
        if (!g.seenYard && roomAt(me.x, me.y) === 'yard') { g.seenYard = true; say('Jaehyuk is already at the wall. “I left at the first siren. Obviously.”'); }
      }
      // followers walk Solar's trail
      let k = 0;
      for (const id of g.order) { const c = C[id]; if (c.st !== 'follow') continue; k++; const p = g.trail[Math.max(0, g.trail.length - 1 - k * 6)]; c.x += (p.x - c.x) * Math.min(1, dt * 9); c.y += (p.y - c.y) * Math.min(1, dt * 9); }
      copStep(dt);
    };
    const move = (o, dx, dy) => {
      // blocked on one axis: slide toward the centre of an open cell ahead (so 1-cell doors are easy to hit with keys)
      if (free(o.x + dx, o.y)) o.x += dx;
      else if (dx) { const col = Math.floor(o.x + Math.sign(dx) * (R + .05) + dx), row = Math.floor(o.y); for (const r of [row, Math.floor(o.y - R), Math.floor(o.y + R)]) if (open(col, r) && open(Math.floor(o.x), r)) { const d = r + .5 - o.y; if (Math.abs(d) > .01) o.y += Math.sign(d) * Math.min(Math.abs(dx), Math.abs(d)); break; } }
      if (free(o.x, o.y + dy)) o.y += dy;
      else if (dy) { const row = Math.floor(o.y + Math.sign(dy) * (R + .05) + dy), col = Math.floor(o.x); for (const c of [col, Math.floor(o.x - R), Math.floor(o.x + R)]) if (open(c, row) && open(c, Math.floor(o.y))) { const d = c + .5 - o.x; if (Math.abs(d) > .01) o.x += Math.sign(d) * Math.min(Math.abs(dy), Math.abs(d)); break; } }
    };
    const copStep = dt => {
      const cop = g.cop; if (!cop || g.over) return;
      cop.re -= dt;
      if (cop.re <= 0 || !cop.path.length) { cop.path = bfs(cop.x, cop.y, g.me.x, g.me.y); cop.re = .45; }
      const w = cop.path[0];
      if (w) { const dx = w.x - cop.x, dy = w.y - cop.y, d = Math.hypot(dx, dy), sp = SPEED * D.cop * dt; if (d <= sp) { cop.x = w.x; cop.y = w.y; cop.path.shift(); } else { cop.x += dx / d * sp; cop.y += dy / d * sp; } }
      for (const c of Object.values(C)) if ((c.st === 'follow' || c.st === 'stuck') && Math.hypot(c.x - cop.x, c.y - cop.y) < .7) {
        c.st = 'left'; c.where = 'house'; g.order = g.order.filter(x => x !== c.id); emit('nabbed', c.id); say(`The cop gets ${c.name}. “Sit. Stay.”`, 'warn');
      }
      if (Math.hypot(g.me.x - cop.x, g.me.y - cop.y) < .62) { g.card = null; g.meter = null; g.finish('caught', 'house'); }
    };
    const alleyStep = dt => {
      const I = g.input;
      if (I.up) g.lane = Math.max(0, g.lane - 1);
      if (I.down) g.lane = Math.min(2, g.lane + 1);
      g.ly += (g.lane - g.ly) * Math.min(1, dt * 10);
      const m = g.meter;
      if (m && m.kind === 'time') { m.pos += m.dir * D.bar * dt; if (m.pos > 1) { m.pos = 1; m.dir = -1; } if (m.pos < 0) { m.pos = 0; m.dir = 1; } }
      if (I.act) { if (m) meterHit(); else { const c = g.cutHere(); if (c) { c.active = true; timing({ kind2: 'cut', who: 'solar', zone: D.zone * 1.3, title: 'Through the fence (Act in the pink)' }); } } }
      const zone = g.inZone();
      g.hidden = !!(I.hide && zone) && !g.meter;
      let spd = g.meter ? 0 : g.stun > 0 ? 0 : g.hidden ? 0 : I.hurry ? HURRY * (1 - .05 * g.kept.length) : I.slow ? SLOW : WALK;
      if (I.hide && !zone && !g.meter) spd = Math.min(spd, SLOW);
      if (g.stun > 0) g.stun -= dt;
      g.dist += spd * dt;
      const H = g.lyHist; if (g.dist - H[H.length - 1].d >= .4 || Math.abs(g.ly - H[H.length - 1].y) > .08) { H.push({ d: g.dist, y: g.ly }); if (H.length > 600) H.shift(); }
      if (spd > 0) { g.me.step += spd * dt; if (g.me.step > (I.hurry ? 1.6 : 1.3)) { g.me.step = 0; emit('step'); } }
      // the crew trails behind
      const crew = ORDER.map(id => C[id]).filter(c => c.st === 'over');
      for (const c of crew) {
        const minLag = 1.3 * c.rank + 1.3;
        const theirs = g.hidden && c.lag < 6 ? 0 : Math.min(c.vmax, spd + (c.lag - minLag) * 1.4);
        c.lag = Math.max(minLag, c.lag + (spd - theirs) * dt);
        c.hid = g.hidden && c.lag < 6;
        if (c.lag > D.lost) { c.warn += dt; if (c.warn > 3) { c.st = 'left'; c.where = 'alley'; emit('lost', c.id); say(`${c.name} is gone. Somewhere back there. Probably fine.`, 'warn'); } }
        else c.warn = Math.max(0, c.warn - dt);
      }
      // light: torch beams at the cross streets
      let lit = false;
      for (const b of g.beams) {
        const by = beamY(b, g.t);
        if (Math.abs(g.dist - b.at) < 2.3 && Math.abs(g.ly - by) < .55 && !g.hidden) { g.spot += D.spot * dt; lit = true; }
        for (const c of crew) if (c.st === 'over' && !c.hid && Math.abs(g.dist - c.lag - b.at) < 2.3 && Math.abs(lyAt(g.dist - c.lag) - by) < .55) { g.spot += D.spot * .3 * dt; lit = true; }
      }
      // the patrol car's sweep
      for (const car of g.cars) {
        if (car.st === 'wait' && g.dist >= car.at - 16) { car.st = 'warn'; car.t = 2.2; emit('car', car); say('Headlights! Get in a doorway or behind the bins and hide!', 'warn'); }
        else if (car.st === 'warn') { car.t -= dt; if (car.t <= 0) { car.st = 'sweep'; car.t = 1.7; emit('sweep', car); } }
        else if (car.st === 'sweep') {
          car.t -= dt; lit = true;
          if (!g.hidden) { g.spot += D.carSpot * dt; car.clean = false; }
          for (const c of crew) if (c.st === 'over' && !c.hid) { g.spot += D.carSpot * .22 * dt; car.clean = false; }
          if (car.t <= 0) { car.st = 'done'; if (car.clean) { g.style += 60; say('The car rolls past. Nobody breathes. Nobody sees you.'); } emit('carGone', car); }
        }
      }
      g.lit = lit;
      if (!lit) g.spot = Math.max(0, g.spot - 7 * dt);
      if (g.spot >= 100) { g.spot = 100; g.meter = null; return g.finish('caught', 'alley'); }
      if (g.dist >= g.len) { g.dist = g.len; emit('car-reached'); g.phase = 'car'; return g.finish('clean', 'car'); }
    };
    g.practiceBoost = () => timing({ practice: true, who: 'jaehyuk', title: 'Practice: Act when the marker is in the pink' });
    g.practiceBag = () => { g.bag = { got: false, items: [ITEMS.find(x => x.id === 'letter')], i: 0 }; };
    g.C = C; g.ORDER = ORDER;
    return g;
  }

  /* ---------------- the page ---------------- */
  let cur = null;
  function play(o = {}) {
    return new Promise(done => {
      const host = o.host || document.body;
      const diff = DIFF[o.difficulty] ? o.difficulty : 'normal';
      const GS = (window.FemcGame && window.FemcGame.settings && window.FemcGame.settings()) || {};
      const still = reduced.matches, calm = o.calm ?? !!GS.calm, perf = o.perf ?? !!GS.perf;
      const mute = !!o.mute;
      const st = { paused: false, over: false, begun: false, tut: false, bannerT: 0 };
      let tutRes = 'seen', tp = null;
      const tutP = o.tutorial === false ? Promise.resolve(null) : tutLib();
      const timers = new Set();
      const later = (fn, ms) => { const id = setTimeout(() => { timers.delete(id); fn(); }, ms); timers.add(id); return id; };
      const el = document.createElement('div');
      el.dataset.padnav = ''; el.className = 'mg-cp' + (still ? ' still' : '') + (calm ? ' calm' : '') + (perf ? ' perf' : '');
      el.setAttribute('role', 'application'); el.setAttribute('aria-label', 'Somebody Yelled Cops');
      el.innerHTML = `
        <canvas class="cp-cv"></canvas>
        <div class="cp-top"><b class="cp-name">SOMEBODY YELLED COPS</b><span class="cp-phase">The house</span><span class="cp-clock">1:15</span></div>
        <div class="cp-crew"></div>
        <div class="cp-meters">
          <div class="cp-m cp-sirenm"><small>Sirens</small><span><i></i></span></div>
          <div class="cp-m cp-spotm" hidden><small>Spotted</small><span><i></i></span></div>
          <div class="cp-m cp-runm" hidden><small>To the car</small><span><i></i></span></div>
        </div>
        <div class="cp-bagchip" hidden></div>
        <div class="cp-mark" aria-hidden="true"></div>
        <div class="cp-card" hidden></div>
        <div class="cp-bar" hidden><small></small><span><i class="z"></i><i class="zz"></i><i class="mk"></i></span></div>
        <div class="cp-yell" aria-hidden="true">COPS!!!</div>
        <p class="cp-say" aria-live="polite"></p>
        <p class="cp-cc" aria-live="polite"></p>
        <p class="cp-help"></p>
        <div class="cp-pad">
          <button type="button" data-k="up" class="al">▲</button><button type="button" data-k="down" class="al">▼</button>
          <button type="button" data-k="slow" class="al">Slow</button><button type="button" data-k="hurry" class="al">Hurry</button>
          <button type="button" data-k="hide" class="al">Hide</button><button type="button" data-k="act" class="act">Act</button>
        </div>
        <div class="mg-pause" hidden><b>Paused</b><button type="button" data-mg="resume">Resume</button><button type="button" data-mg="howto">How to play</button><button type="button" data-mg="quit">Quit</button></div>
        <div class="mg-end" hidden></div>`;
      host.appendChild(el);
      const $ = s => el.querySelector(s);
      const cv = $('.cp-cv'), cx = cv.getContext('2d');
      const say = (t, kind = '') => { const c = $('.cp-say'); c.textContent = t; c.className = 'cp-say on ' + kind; clearTimeout(say.t); say.t = later(() => c.classList.remove('on'), 2600); };
      const cc = t => { if (!mute) return; const c = $('.cp-cc'); c.textContent = '[' + t + ']'; c.classList.add('on'); clearTimeout(cc.t); cc.t = later(() => c.classList.remove('on'), 2400); };

      /* pictures (all optional) */
      const imgs = {};
      const img = (k, src) => { const i = new Image(); i.onload = () => { i.ok = true; }; i.onerror = () => { i.bad = true; }; i.src = src; imgs[k] = i; return i; };
      img('bg', BG(o.bg || 'epi-h-party')); img('alley', ART('alley')); img('alleyBg', BG(o.alleyBg || 'epi-h-winter-street')); img('car', ART('car')); img('cop', ART('cop'));
      for (const id of ['solar', ...ORDER]) img('f-' + id, FACE(id));
      const placeCx = id => { try { const p = window.FEMC_PORTRAIT_PLACE && window.FEMC_PORTRAIT_PLACE[FACE_DIR[id] || id + '-hoax']; return p ? p[0] : .5; } catch (e) { return .5; } };

      /* sound: Web Audio, made here */
      let ac = null, A = null;
      const audio = () => {
        if (mute || ac) return;
        try { ac = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { ac = null; return; }
        const master = ac.createGain(); master.gain.value = .8; master.connect(ac.destination);
        const partyLP = ac.createBiquadFilter(); partyLP.type = 'lowpass'; partyLP.frequency.value = 1400; partyLP.Q.value = .7;
        const party = ac.createGain(); party.gain.value = .32; partyLP.connect(party); party.connect(master);
        const sirG = ac.createGain(); sirG.gain.value = 0; sirG.connect(master);
        const sir = ac.createOscillator(); sir.type = 'triangle'; sir.frequency.value = 760;
        const sirLfo = ac.createOscillator(); sirLfo.frequency.value = .32; const sirAmt = ac.createGain(); sirAmt.gain.value = 260; sirLfo.connect(sirAmt); sirAmt.connect(sir.frequency);
        const sirF = ac.createBiquadFilter(); sirF.type = 'lowpass'; sirF.frequency.value = 1800;
        sir.connect(sirF); sirF.connect(sirG); sir.start(); sirLfo.start();
        const noise = ac.createBuffer(1, ac.sampleRate, ac.sampleRate); const nd = noise.getChannelData(0); for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
        A = { master, partyLP, party, sirG, sir, noise, beat: 0, next: ac.currentTime + .1 };
      };
      const burst = (f, q, dur, gain, type = 'bandpass', when = 0) => {
        if (!A) return; const t = ac.currentTime + when;
        const s = ac.createBufferSource(); s.buffer = A.noise; const fl = ac.createBiquadFilter(); fl.type = type; fl.frequency.value = f; fl.Q.value = q;
        const gn = ac.createGain(); gn.gain.setValueAtTime(gain, t); gn.gain.exponentialRampToValueAtTime(.0001, t + dur);
        s.connect(fl); fl.connect(gn); gn.connect(A.master); s.start(t, Math.random() * .5); s.stop(t + dur + .05);
        return fl;
      };
      const tone = (f0, f1, dur, gain, type = 'sine', dest, when = 0) => {
        if (!A) return; const t = ac.currentTime + when;
        const os = ac.createOscillator(); os.type = type; os.frequency.setValueAtTime(f0, t); os.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
        const gn = ac.createGain(); gn.gain.setValueAtTime(gain, t); gn.gain.exponentialRampToValueAtTime(.0001, t + dur);
        os.connect(gn); gn.connect(dest || A.master); os.start(t); os.stop(t + dur + .05);
      };
      const K = {
        step: () => burst(700 + Math.random() * 300, 1.4, .07, .1),
        yell: () => { tone(520, 980, .35, .22, 'sawtooth'); tone(980, 760, .4, .18, 'sawtooth', null, .3); burst(1800, 2, .5, .12); },
        flush: () => { const f = burst(400, 3, 1.4, .2); if (f) f.frequency.exponentialRampToValueAtTime(90, ac.currentTime + 1.3); },
        pop: () => tone(660, 990, .09, .12, 'triangle'),
        hit: p => { burst(300, .8, .25, .2, 'lowpass'); tone(p ? 880 : 660, p ? 1320 : 880, .14, .12, 'triangle', null, .05); },
        miss: () => { tone(200, 70, .25, .25, 'sine'); burst(160, .7, .2, .2, 'lowpass'); },
        car: () => { tone(90, 60, 2.2, .14, 'sawtooth'); },
        screech: () => { tone(1400, 900, .9, .14, 'sawtooth'); burst(2400, 4, .9, .16); tone(70, 160, 1.6, .2, 'sawtooth', null, .3); },
        door: () => { burst(120, .6, .3, .4, 'lowpass'); burst(120, .6, .3, .35, 'lowpass', .35); },
      };
      const music = () => { // the party's bass, scheduled ahead
        if (!A) return;
        const spb = 60 / 118 / 2;
        while (A.next < ac.currentTime + .25) {
          const t = A.next, b = A.beat % 16;
          if (b % 4 === 0) { const os = ac.createOscillator(); os.frequency.setValueAtTime(120, t); os.frequency.exponentialRampToValueAtTime(42, t + .18); const gn = ac.createGain(); gn.gain.setValueAtTime(.9, t); gn.gain.exponentialRampToValueAtTime(.001, t + .26); os.connect(gn); gn.connect(A.partyLP); os.start(t); os.stop(t + .3); }
          if (b % 2 === 1 || b === 6) { const os = ac.createOscillator(); os.type = 'sawtooth'; os.frequency.value = [55, 55, 65.4, 49][Math.floor(A.beat / 16) % 4]; const gn = ac.createGain(); gn.gain.setValueAtTime(.18, t); gn.gain.exponentialRampToValueAtTime(.001, t + spb * .9); os.connect(gn); gn.connect(A.partyLP); os.start(t); os.stop(t + spb); }
          A.next += spb; A.beat++;
        }
      };
      const sfx = (k, ...a) => { try { K[k] && A && K[k](...a); } catch (e) {} };

      /* engine wiring */
      const hooks = { on: (e, x) => onEv(e, x) };
      let g = null;
      const newG = tut => { g = engine(diff, (Math.random() * 4294967296) >>> 0, { ...hooks, tut }); cur = g; return g; };
      const onEv = (e, x) => {
        if (e === 'say') say(x.t, x.kind);
        else if (e === 'card') paintCard();
        else if (e === 'meter') paintBar();
        else if (e === 'step') sfx('step');
        else if (e === 'flush') { sfx('flush'); cc('a toilet flushes, long and loud'); }
        else if (e === 'stash' || e === 'keep' || e === 'bag' || e === 'shoe' || e === 'follow') sfx('pop');
        else if (e === 'hit') { sfx('hit', x && x.perfect); if (x && x.perfect) cc('a perfect boost'); }
        else if (e === 'miss') { sfx('miss'); shake(); }
        else if (e === 'mash') sfx('pop');
        else if (e === 'copsIn') { sfx('door'); cc('car doors, then knocking at the front'); if (A) A.sirG.gain.setTargetAtTime(.05, ac.currentTime, .4); }
        else if (e === 'houseEnd') overWall();
        else if (e === 'car') { sfx('car'); cc('a patrol car turning into the street'); }
        else if (e === 'sweep') cc('headlights sweep the alley');
        else if (e === 'lost') cc('someone falls behind');
        else if (e === 'cut') sfx('hit', true);
        else if (e === 'end') finish(x);
        if (tp && tp.on) tp.on(e, x);
        if (e !== 'moved' && e !== 'step' && e !== 'mash') paintHud();
      };

      /* layout */
      let W = 0, H = 0, dpr = 1, cs = 20, ox = 0, oy = 0;
      const fit = () => {
        W = el.clientWidth || 800; H = el.clientHeight || 600; dpr = perf ? 1 : Math.min(2, window.devicePixelRatio || 1);
        cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr); cv.style.width = W + 'px'; cv.style.height = H + 'px';
        const top = W < 620 ? 96 : 76, bot = W < 620 ? 150 : 104;
        cs = Math.max(6, Math.min((W - 20) / GW, (H - top - bot) / GH)); ox = (W - cs * GW) / 2; oy = top + (H - top - bot - cs * GH) / 2;
      };
      const sx = x => ox + x * cs, sy = y => oy + y * cs;

      /* drawing */
      let shakeT = 0;
      const shake = () => { if (!still && !calm) shakeT = .25; };
      const face = (id, x, y, r, ring = '#ff4f9e', alpha = 1) => {
        const i = imgs['f-' + id];
        cx.save(); cx.globalAlpha = alpha;
        cx.beginPath(); cx.arc(x, y, r, 0, 7); cx.fillStyle = '#14070f'; cx.fill();
        if (i && i.ok) {
          cx.save(); cx.beginPath(); cx.arc(x, y, r - 1, 0, 7); cx.clip();
          const iw = i.naturalWidth, ih = i.naturalHeight, s = iw * .46, fx = Math.max(0, Math.min(iw - s, iw * placeCx(id) - s / 2));
          cx.drawImage(i, fx, ih * .05, s, s, x - r, y - r, r * 2, r * 2); cx.restore();
        } else { cx.fillStyle = '#ff9ac8'; cx.font = `900 ${Math.round(r)}px system-ui, sans-serif`; cx.textAlign = 'center'; cx.textBaseline = 'middle'; cx.fillText((CREW[id] ? CREW[id].name : 'Solar')[0], x, y + 1); }
        cx.lineWidth = Math.max(2, r * .16); cx.strokeStyle = ring; cx.beginPath(); cx.arc(x, y, r, 0, 7); cx.stroke();
        cx.restore();
      };
      const heat = () => g.phase === 'house' ? (g.copsIn ? 1 : 1 - g.siren / g.sirenMax) : 0;
      const sirenCol = (t, a) => { // scene light: alternating red / blue, a slow soft wash under Reduce flashes / reduced motion
        if (calm || still) { const k = (Math.sin(t * .9) + 1) / 2; return `rgba(${Math.round(150 + 90 * k)}, 50, ${Math.round(110 + 120 * (1 - k))}, ${a * .45})`; }
        return Math.sin(t * 7) > 0 ? `rgba(255, 40, 60, ${a})` : `rgba(40, 90, 255, ${a})`;
      };
      const drawHouse = t => {
        const hh = heat();
        if (imgs.bg.ok) { cx.save(); cx.globalAlpha = .14; const i = imgs.bg, s = Math.max(W / i.naturalWidth, H / i.naturalHeight); cx.drawImage(i, (W - i.naturalWidth * s) / 2, (H - i.naturalHeight * s) / 2, i.naturalWidth * s, i.naturalHeight * s); cx.restore(); }
        // floor
        for (const [k, v] of Object.entries(ROOMS)) {
          const [x, y, w, h] = v.r;
          cx.fillStyle = v.c; cx.fillRect(sx(x), sy(y), w * cs, h * cs);
          if (k === 'stairs') { cx.strokeStyle = 'rgba(255, 154, 200, .12)'; cx.lineWidth = 1; for (let j = 0; j < h; j += .7) { cx.beginPath(); cx.moveTo(sx(x), sy(y + j)); cx.lineTo(sx(x + w), sy(y + j)); cx.stroke(); } }
          if (k === 'yard') { cx.fillStyle = 'rgba(255, 244, 249, .08)'; for (let i = 0; i < (perf ? 20 : 60); i++) { const px = x + ((i * 37) % 60) / 10, py = y + ((i * 53) % 210) / 10; cx.fillRect(sx(px), sy(py), 2, 2); } }
          cx.strokeStyle = 'rgba(255, 79, 158, .45)'; cx.lineWidth = 2; cx.strokeRect(sx(x) + 1, sy(y) + 1, w * cs - 2, h * cs - 2);
          cx.fillStyle = 'rgba(255, 209, 230, .32)'; cx.font = `800 ${Math.max(9, cs * .5)}px system-ui, sans-serif`; cx.textAlign = 'left'; cx.textBaseline = 'top';
          cx.fillText(v.name.toUpperCase(), sx(x) + 4, sy(y + h) - cs * .7);
        }
        for (const [x, y] of DOORS) { cx.fillStyle = '#3a1428'; cx.fillRect(sx(x), sy(y), cs, cs); }
        // the back wall (bricks) and the front door
        cx.fillStyle = '#3a1a24'; cx.fillRect(sx(38), sy(1), cs, 21 * cs);
        cx.strokeStyle = 'rgba(255, 154, 200, .25)'; cx.lineWidth = 1;
        for (let j = 1; j < 22; j += .5) { cx.beginPath(); cx.moveTo(sx(38), sy(j)); cx.lineTo(sx(39), sy(j)); cx.stroke(); }
        cx.fillStyle = '#ff4f9e'; cx.fillRect(sx(11.6), sy(22), cs * 1.8, cs * .35);
        cx.fillStyle = 'rgba(255, 209, 230, .5)'; cx.font = `800 ${Math.max(8, cs * .42)}px system-ui`; cx.textAlign = 'center'; cx.fillText('FRONT DOOR', sx(12.5), sy(22.5));
        cx.save(); cx.translate(sx(38.5), sy(11.5)); cx.rotate(-Math.PI / 2); cx.fillText('THE BACK WALL', 0, -cs * .2); cx.restore();
        // furniture
        const box = (x, y, w, h, c, label) => { cx.fillStyle = c; cx.fillRect(sx(x), sy(y), w * cs, h * cs); if (label && cs > 12) { cx.fillStyle = 'rgba(255, 244, 249, .55)'; cx.font = `700 ${Math.max(8, cs * .36)}px system-ui`; cx.textAlign = 'center'; cx.textBaseline = 'middle'; cx.fillText(label, sx(x + w / 2), sy(y + h / 2)); } };
        box(1.4, 1.4, 4.2, 2.2, '#3b2a3a', 'tub'); box(6, 1.3, 1.6, 1.3, '#4a3a48', ''); box(7.2, 12, 1.2, 3.6, '#5a1a38', 'couch');
        box(15.6, 1.4, 3.6, 1.6, '#3c1430', 'records'); box(9.4, 4.4, 2.2, 1.8, '#4a1a36', ''); box(22.4, 1.4, 4, 3, '#4a1a36', 'bed');
        box(22.2, 11.2, 2.2, 2.2, '#3a2a36', 'fridge'); box(24.6, 11.2, 6.2, 1.2, '#2e1a28', 'counter'); box(31, 12.6, 1, 1.8, 'rgba(160, 200, 255, .25)', '');
        box(18.6, 11.2, 2.2, 1.6, '#30101f', 'piano'); box(10.5, 20.6, 4, .9, '#24101b', '');
        // the speaker, thumping
        const sp = still ? 0 : (Math.sin(t * 2 * Math.PI * 118 / 60) + 1) / 2;
        cx.fillStyle = '#14070f'; cx.fillRect(sx(19.2), sy(19.6), cs * 1.4, cs * 1.4);
        cx.strokeStyle = `rgba(255, 79, 158, ${.25 + sp * .4})`; cx.lineWidth = 2; cx.beginPath(); cx.arc(sx(19.9), sy(20.3), cs * (.6 + sp * .5), 0, 7); cx.stroke();
        // windows: the sirens
        for (const [x, y] of WINDOWS) {
          cx.fillStyle = '#0d0408'; cx.fillRect(sx(x) + cs * .15, sy(y) + cs * .15, cs * .7, cs * .7);
          if (hh > .02) { cx.fillStyle = sirenCol(t + x * .1, Math.min(1, hh * (calm ? .45 : .95))); cx.fillRect(sx(x) + cs * .15, sy(y) + cs * .15, cs * .7, cs * .7); }
        }
        if (hh > .25 && !perf) { // red / blue spilling in at the edges
          const a = (hh - .25) * (calm ? .14 : .3);
          const gr = cx.createLinearGradient(0, sy(0), 0, sy(4)); gr.addColorStop(0, sirenCol(t, a)); gr.addColorStop(1, 'rgba(0,0,0,0)'); cx.fillStyle = gr; cx.fillRect(sx(0), sy(0), GW * cs, 4 * cs);
          const gb = cx.createLinearGradient(0, sy(GH), 0, sy(GH - 4)); gb.addColorStop(0, sirenCol(t + 1.3, a)); gb.addColorStop(1, 'rgba(0,0,0,0)'); cx.fillStyle = gb; cx.fillRect(sx(0), sy(GH - 4), GW * cs, 4 * cs);
        }
        // the bag, the shoe spots
        if (!g.bag.got) { cx.fillStyle = '#ff4f9e'; cx.fillRect(sx(8.15), sy(12.15), cs * .7, cs * .6); cx.fillStyle = '#14070f'; cx.fillRect(sx(8.3), sy(12), cs * .4, cs * .2); }
        if (g.shoe.shown && !g.shoe.found) for (const s of g.shoe.spots) if (!s.done) mark(s.x, s.y, '?', t);
        // the crowd
        cx.fillStyle = 'rgba(255, 209, 230, .22)';
        for (const p of g.crowd) if (!p.gone && !(perf && g.crowd.indexOf(p) % 2)) { const b = still ? 0 : Math.sin(p.ph * 6) * .08; cx.beginPath(); cx.arc(sx(p.x), sy(p.y + b), cs * .3, 0, 7); cx.fill(); }
        // the crew
        for (const id of ORDER) {
          const c = g.C[id]; if (c.st === 'over' || (c.st === 'left' && !g.copsIn)) continue;
          const bob = still || c.st !== 'stuck' ? 0 : Math.sin(t * 3 + id.length) * .1;
          face(id, sx(c.x), sy(c.y + bob), cs * .5, c.st === 'stuck' ? '#ff9ac8' : '#ff4f9e', c.st === 'left' ? .4 : 1);
          if (c.st === 'stuck' || (c.st === 'wall' && !g.seenYard)) bubble(sx(c.x) + cs * .4, sy(c.y) - cs * .7, c.icon || '…');
          if (c.hop && c.st === 'follow' && cs > 12) bubble(sx(c.x) + cs * .4, sy(c.y) - cs * .6, '1 shoe');
        }
        // the cop
        if (g.cop) {
          const cp = g.cop, a = Math.atan2(g.me.y - cp.y, g.me.x - cp.x);
          if (!perf) { cx.save(); cx.globalAlpha = .18; cx.fillStyle = '#fff4d6'; cx.beginPath(); cx.moveTo(sx(cp.x), sy(cp.y)); cx.arc(sx(cp.x), sy(cp.y), cs * 4, a - .35, a + .35); cx.closePath(); cx.fill(); cx.restore(); }
          if (imgs.cop.ok) cx.drawImage(imgs.cop, sx(cp.x) - cs * .6, sy(cp.y) - cs * .6, cs * 1.2, cs * 1.2);
          else { cx.fillStyle = '#16203a'; cx.beginPath(); cx.arc(sx(cp.x), sy(cp.y), cs * .5, 0, 7); cx.fill(); cx.fillStyle = '#0a0f1e'; cx.fillRect(sx(cp.x) - cs * .32, sy(cp.y) - cs * .5, cs * .64, cs * .26); cx.strokeStyle = sirenCol(t, .9); cx.lineWidth = 2; cx.beginPath(); cx.arc(sx(cp.x), sy(cp.y), cs * .5, 0, 7); cx.stroke(); }
        }
        // Solar
        const me = g.me;
        face('solar', sx(me.x), sy(me.y), cs * .62, '#fff4f9');
        const h = g.near();
        if (h && !g.card && !g.meter) { mark(h.x, h.y, '', t); label(sx(me.x), sy(me.y) - cs * 1.1, (touch ? 'Act' : 'E') + ': ' + h.label); }
        if (g.path.length) { const p = g.path[g.path.length - 1]; cx.strokeStyle = 'rgba(255, 79, 158, .6)'; cx.lineWidth = 2; cx.beginPath(); cx.arc(sx(p.x), sy(p.y), cs * .3, 0, 7); cx.stroke(); }
      };
      const mark = (x, y, txt, t) => { const p = still ? 0 : (Math.sin(t * 5) + 1) * .12; cx.strokeStyle = '#ff4f9e'; cx.lineWidth = 2; cx.beginPath(); cx.arc(sx(x), sy(y), cs * (.55 + p), 0, 7); cx.stroke(); if (txt) { cx.fillStyle = '#ff9ac8'; cx.font = `900 ${Math.round(cs * .7)}px system-ui`; cx.textAlign = 'center'; cx.textBaseline = 'middle'; cx.fillText(txt, sx(x), sy(y)); } };
      const bubble = (x, y, txt) => { cx.font = `900 ${Math.max(9, cs * .42)}px system-ui`; const w = cx.measureText(txt).width + 8; cx.fillStyle = '#fff4f9'; cx.fillRect(x, y - cs * .3, w, cs * .6); cx.fillStyle = '#14070f'; cx.textAlign = 'left'; cx.textBaseline = 'middle'; cx.fillText(txt, x + 4, y); };
      const label = (x, y, txt) => { cx.font = `800 ${Math.max(11, Math.min(15, cs * .62))}px system-ui`; const w = cx.measureText(txt).width + 14; const lx = Math.max(4, Math.min(W - w - 4, x - w / 2)); cx.fillStyle = 'rgba(20, 7, 15, .92)'; cx.fillRect(lx, y - 12, w, 24); cx.strokeStyle = '#ff4f9e'; cx.lineWidth = 2; cx.strokeRect(lx, y - 12, w, 24); cx.fillStyle = '#fff'; cx.textAlign = 'left'; cx.textBaseline = 'middle'; cx.fillText(txt, lx + 7, y); };

      const drawAlley = t => {
        const m = W / 46, meX = W * .6, top = H * .42, bot = H * .86, lh = (bot - top) / 3, LY = l => top + (l + .5) * lh;
        const X = d => meX + (d - g.dist) * m;
        // far layer: the street at night (art, else drawn)
        const far = imgs.alley.ok ? imgs.alley : imgs.alleyBg.ok ? imgs.alleyBg : null;
        if (far) { const s = (top) / far.naturalHeight * 1.3, w = far.naturalWidth * s, off = -((g.dist * m * .25) % w); cx.save(); cx.globalAlpha = .45; for (let x = off; x < W; x += w) cx.drawImage(far, x, 0, w, top * 1.3); cx.restore(); }
        else { cx.fillStyle = '#1a0912'; cx.fillRect(0, 0, W, top); cx.fillStyle = 'rgba(255, 209, 230, .08)'; for (let i = 0; i < 18; i++) { const x = ((i * 137 - g.dist * m * .25) % (W + 80) + W + 80) % (W + 80) - 40; cx.fillRect(x, top * .2 + (i % 5) * 14, 26, top * .8); } }
        // snow
        if (!perf) { cx.fillStyle = 'rgba(255, 244, 249, .5)'; for (let i = 0; i < 40; i++) { const x = ((i * 97 - g.dist * m * .6 + (still ? 0 : t * 20)) % W + W) % W, y = ((i * 61 + (still ? 0 : t * 40)) % H); cx.fillRect(x, y, 2, 2); } }
        // the near wall with its doorways and cross streets
        cx.fillStyle = '#2a0f1a'; cx.fillRect(0, top - H * .14, W, H * .14);
        cx.strokeStyle = 'rgba(255, 154, 200, .12)'; cx.lineWidth = 1;
        for (let r = 0; r < 4; r++) { const y = top - H * .14 + r * H * .035; cx.beginPath(); cx.moveTo(0, y); cx.lineTo(W, y); cx.stroke(); }
        // ground and lanes
        cx.fillStyle = '#160911'; cx.fillRect(0, top, W, bot - top);
        cx.strokeStyle = 'rgba(255, 79, 158, .18)'; cx.setLineDash([12, 14]); for (let l = 1; l < 3; l++) { cx.beginPath(); cx.lineTo(0, top + l * lh); cx.lineTo(W, top + l * lh); cx.stroke(); } cx.setLineDash([]);
        cx.fillStyle = '#0d0408'; cx.fillRect(0, bot, W, H - bot);
        // hide spots
        for (const z of g.zones) { const x0 = X(z.a), x1 = X(z.b); if (x1 < -20 || x0 > W + 20) continue; const y = LY(z.lane), inz = g.inZone() === z;
          cx.fillStyle = z.kind === 'door' ? '#0a0306' : '#2a2030'; cx.fillRect(x0, y - lh * .45, x1 - x0, lh * .9);
          cx.strokeStyle = inz ? '#ff4f9e' : 'rgba(255, 79, 158, .45)'; cx.lineWidth = inz ? 3 : 1.5; cx.strokeRect(x0, y - lh * .45, x1 - x0, lh * .9);
          cx.fillStyle = 'rgba(255, 209, 230, .6)'; cx.font = `800 ${Math.max(9, lh * .16)}px system-ui`; cx.textAlign = 'center'; cx.textBaseline = 'middle'; cx.fillText(z.kind === 'door' ? 'DOORWAY' : 'BINS', (x0 + x1) / 2, y); }
        // shortcuts
        for (const c of g.cuts) { if (c.used) continue; const x = X(c.at); if (x < -40 || x > W + 40) continue; const y = LY(c.lane);
          cx.strokeStyle = '#ff9ac8'; cx.lineWidth = 2; cx.setLineDash([4, 4]); cx.strokeRect(x - m * 1.5, y - lh * .4, m * 3, lh * .8); cx.setLineDash([]);
          cx.fillStyle = '#ff9ac8'; cx.font = `900 ${Math.max(9, lh * .15)}px system-ui`; cx.textAlign = 'center'; cx.fillText('FENCE GAP', x, y - lh * .5); }
        // torch beams from the cross streets
        for (const b of g.beams) {
          const x = X(b.at); if (x < -80 || x > W + 80) continue; const by = LY(Math.max(0, Math.min(2, g.beamY(b, g.t))));
          cx.fillStyle = '#0a0306'; cx.fillRect(x - m * 2.3, top - H * .14, m * 4.6, H * .14);
          cx.save(); cx.globalAlpha = perf ? .22 : .3; const gr = cx.createLinearGradient(x, top - H * .1, x, by); gr.addColorStop(0, 'rgba(255, 246, 214, .9)'); gr.addColorStop(1, 'rgba(255, 246, 214, .35)'); cx.fillStyle = gr;
          cx.beginPath(); cx.moveTo(x - 4, top - H * .1); cx.lineTo(x + 4, top - H * .1); cx.lineTo(x + m * 2.3, by + lh * .5); cx.lineTo(x - m * 2.3, by + lh * .5); cx.closePath(); cx.fill(); cx.restore();
          cx.fillStyle = '#16203a'; cx.beginPath(); cx.arc(x, top - H * .11, m * .6, 0, 7); cx.fill();
        }
        // the car at the end
        const ex = X(g.len + 3);
        if (ex < W + 200) { if (imgs.car.ok) { const i = imgs.car, w = m * 8, h = w * i.naturalHeight / i.naturalWidth; cx.drawImage(i, ex - w / 2, LY(1) - h / 2, w, h); } else { cx.fillStyle = '#14070f'; cx.fillRect(ex - m * 3.5, LY(1) - lh * .6, m * 7, lh * 1.2); cx.fillStyle = '#ff4f9e'; cx.fillRect(ex - m * 3.5, LY(1) - lh * .6, m * 7, 4); cx.fillStyle = '#fff4d6'; cx.fillRect(ex + m * 3.2, LY(1) - lh * .3, 6, lh * .2); cx.fillStyle = '#fff'; cx.font = `900 ${Math.max(10, lh * .16)}px system-ui`; cx.textAlign = 'center'; cx.fillText('JIHOON’S CAR', ex, LY(1)); } }
        // the crew and Solar
        for (const id of [...ORDER].reverse()) { const c = g.C[id]; if (c.st !== 'over') continue; const x = X(g.dist - c.lag), y = LY(g.lyAt(g.dist - c.lag)); if (x < -30) { cx.fillStyle = '#ff4f9e'; cx.fillText('◀ ' + c.name, 40, y); continue; } face(id, x, y + (still ? 0 : Math.sin(t * 9 + c.rank) * 2), lh * .22, c.warn > 0 ? '#fff4f9' : '#ff4f9e', c.hid ? .45 : 1); if (c.warn > 0) bubble(x + lh * .2, y - lh * .35, 'wait up!'); }
        face('solar', meX, LY(g.ly), lh * .28, '#fff4f9', g.hidden ? .55 : 1);
        const z = g.inZone(); if (z && !g.hidden) label(meX, LY(g.ly) - lh * .5, (touch ? 'Hold Hide' : 'Hold Shift') + ' to hide');
        const cut = g.cutHere(); if (cut && !g.meter) label(meX, LY(g.ly) - lh * .5, (touch ? 'Act' : 'E') + ': shortcut');
        // the patrol car: warning, then the sweep
        for (const car of g.cars) {
          if (car.st === 'warn') { cx.fillStyle = sirenCol(t, calm ? .3 : .45); cx.fillRect(0, 0, W, 8); label(W / 2, top - H * .2, 'HEADLIGHTS IN ' + Math.ceil(car.t) + ': HIDE!'); }
          if (car.st === 'sweep') { const k = 1 - car.t / 1.7, x = -W * .3 + k * W * 1.6; cx.save(); cx.globalAlpha = calm ? .28 : .42; const gr = cx.createLinearGradient(x - W * .3, 0, x + W * .3, 0); gr.addColorStop(0, 'rgba(255, 246, 214, 0)'); gr.addColorStop(.5, 'rgba(255, 246, 214, 1)'); gr.addColorStop(1, 'rgba(255, 246, 214, 0)'); cx.fillStyle = gr; cx.fillRect(0, top - H * .14, W, bot - top + H * .14); cx.restore(); cx.fillStyle = sirenCol(t, calm ? .25 : .5); cx.fillRect(0, 0, W, 8); }
        }
        if (g.lit && !calm && !perf) { cx.fillStyle = 'rgba(255, 246, 214, .05)'; cx.fillRect(0, 0, W, H); }
      };
      let touch = false, last = 0, raf = 0;
      const draw = now => {
        const t = now / 1000;
        cx.setTransform(dpr, 0, 0, dpr, 0, 0);
        cx.fillStyle = '#0a0306'; cx.fillRect(0, 0, W, H);
        if (shakeT > 0) cx.translate((Math.random() - .5) * 6, (Math.random() - .5) * 6);
        if (g.phase === 'house') drawHouse(t); else drawAlley(t);
        if (st.mark) placeMark();
      };

      /* HUD */
      const fmt = s => { s = Math.max(0, Math.ceil(s)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };
      const paintHud = () => {
        if (!g) return;
        const house = g.phase === 'house';
        el.dataset.ph = house ? 'house' : 'alley';
        $('.cp-phase').textContent = house ? (g.copsIn ? 'They’re inside' : 'The house') : 'The alleys';
        $('.cp-clock').textContent = house ? (g.copsIn ? 'RUN' : fmt(g.siren)) : Math.max(0, Math.round(g.len - g.dist)) + ' m';
        $('.cp-sirenm').hidden = !house; $('.cp-spotm').hidden = house; $('.cp-runm').hidden = house;
        $('.cp-sirenm i').style.width = (heat() * 100).toFixed(1) + '%';
        $('.cp-spotm i').style.width = g.spot.toFixed(1) + '%'; $('.cp-spotm').classList.toggle('hot', g.spot > 60);
        $('.cp-runm i').style.width = (g.dist / g.len * 100).toFixed(1) + '%';
        const chips = ORDER.map(id => { const c = g.C[id]; const s = c.st === 'stuck' ? c.prob : c.st === 'follow' ? 'With you' : c.st === 'over' ? (house ? 'Over the wall' : c.warn > 0 ? 'Falling behind!' : 'With you') : c.st === 'wall' ? 'At the wall' : c.st === 'left' ? 'Left behind' : 'Caught';
          return `<span class="cp-chip ${c.st}${c.warn > 0 ? ' warn' : ''}" title="${esc(c.name + ': ' + s)}"><img src="${FACE(id)}" alt="" onerror="this.remove()"><b>${esc(c.name)}</b><small>${esc(s)}</small></span>`; }).join('');
        const crewEl = $('.cp-crew'); if (crewEl.dataset.h !== chips) { crewEl.innerHTML = chips; crewEl.dataset.h = chips; }
        const b = g.bag, bc = $('.cp-bagchip');
        bc.hidden = !house; bc.textContent = !b.got ? 'The bag: on the couch' : b.i < b.items.length ? `The bag: ${b.items.length - b.i} to deal with` : `Bag sorted · ${g.flushed.length} flushed · ${g.stashed.length} stashed · ${g.kept.length} on you`;
        $('.cp-help').textContent = house ? (touch ? 'Tap to walk · tap someone to help · Act to use · Esc pauses' : (window.FemcPad && window.FemcPad.active ? 'Move: D-pad / stick · ✕: act · choices: ↑ ↓ then ✕ · ○: pause' : 'Move: WASD / arrows or click · E / Space: act · 1-4: choose · Esc: pause'))
          : (touch ? '▲▼ lanes · hold Hurry / Slow · hold Hide in a doorway or behind bins · Act: shortcut' : (window.FemcPad && window.FemcPad.active ? '↑↓: lane · hold →: hurry · hold ←: slow · hold □ / R2: hide · ✕: shortcut · ○: pause' : '↑↓ / W S: lane · hold → / D: hurry · hold ← / A: slow · hold Shift / H / Space: hide · E: shortcut · Esc'));
      };
      const paintCard = () => {
        const box = $('.cp-card'), c = g && g.card;
        if (!c) { box.hidden = true; box.innerHTML = ''; return; }
        box.hidden = false;
        box.innerHTML = `${c.who ? `<img class="cp-cface" src="${FACE(c.who)}" alt="" onerror="this.remove()">` : ''}<div><b>${esc(c.title)}</b><p>${esc(c.say)}</p>
          <div class="cp-opts">${c.opts.map((x, i) => `<button type="button" data-o="${i}"${x.dis ? ' disabled' : ''}><kbd>${i + 1}</kbd><span>${esc(x.t)}</span><small>${esc(x.sub || '')}</small></button>`).join('')}</div></div>`;
      };
      const paintBar = () => {
        const bar = $('.cp-bar'), m = g && g.meter;
        if (!m) { bar.hidden = true; return; }
        bar.hidden = false; bar.dataset.kind = m.kind; $('.cp-bar small').textContent = m.title || '';
      };
      const tickBar = () => {
        const m = g && g.meter; if (!m) return;
        const z = $('.cp-bar .z'), zz = $('.cp-bar .zz'), mk = $('.cp-bar .mk');
        if (m.kind === 'mash') { z.style.left = '0'; z.style.width = (m.v / m.need * 100).toFixed(1) + '%'; zz.style.width = '0'; mk.style.left = '-99px'; }
        else { z.style.left = (m.z0 * 100).toFixed(1) + '%'; z.style.width = (m.zone * 100).toFixed(1) + '%'; zz.style.left = ((m.z0 + m.zone * .32) * 100).toFixed(1) + '%'; zz.style.width = (m.zone * 36).toFixed(1) + '%'; mk.style.left = (m.pos * 100).toFixed(1) + '%'; }
      };

      /* the loop */
      let hudT = 0, ccT = 0;
      const tick = now => {
        const dt = Math.min(.1, (now - (last || now)) / 1000); last = now;
        if (shakeT > 0) shakeT -= dt;
        const blockT = window.FemcTutorial && window.FemcTutorial.blocking && window.FemcTutorial.blocking();
        if (!st.paused && !st.over && g && !blockT) {
          readKeys();
          g.step(dt);
          if (A) audioTick();
          if (mute && g.phase === 'house' && !g.tut && !g.copsIn && (ccT -= dt) <= 0) { ccT = 11; cc(heat() > .75 ? 'sirens, very close now' : heat() > .4 ? 'sirens, getting closer' : 'bass through the floor, sirens far off'); }
          if ((hudT -= dt) <= 0) { hudT = .15; paintHud(); }
          tickBar();
        }
        if (g) draw(now);
        if (!st.over) raf = requestAnimationFrame(tick);
      };
      const audioTick = () => {
        music();
        const t = ac.currentTime;
        if (g.phase === 'house') { A.sirG.gain.setTargetAtTime(g.tut ? 0 : g.copsIn ? .05 : .015 + heat() ** 1.6 * .14, t, .3); A.partyLP.frequency.setTargetAtTime(g.yelled && !g.tut ? 420 : 1400, t, .4); }
        else { const near = g.cars.some(c => c.st === 'warn' || c.st === 'sweep'); A.sirG.gain.setTargetAtTime(near ? .1 : .012, t, .3); A.partyLP.frequency.setTargetAtTime(160, t, .6); A.party.gain.setTargetAtTime(Math.max(0, .3 - g.dist / g.len * .3), t, .5); }
      };

      /* input */
      const keys = new Set();
      const readKeys = () => {
        if (!g) return;
        const I = g.input, k = c => keys.has(c);
        if (g.phase === 'house') { I.dx = (k('right') ? 1 : 0) - (k('left') ? 1 : 0); I.dy = (k('down') ? 1 : 0) - (k('up') ? 1 : 0); }
        else { I.dx = I.dy = 0; I.hurry = k('right') || padHold.has('hurry'); I.slow = k('left') || padHold.has('slow'); I.hide = k('hide') || padHold.has('hide'); }
      };
      const KEYMAP = { ArrowUp: 'up', w: 'up', W: 'up', ArrowDown: 'down', s: 'down', S: 'down', ArrowLeft: 'left', a: 'left', A: 'left', ArrowRight: 'right', d: 'right', D: 'right', Shift: 'hide', h: 'hide', H: 'hide' };
      const key = e => {
        if (!el.isConnected || st.over) return;
        e.stopPropagation();
        if (!st.begun || !g) return;
        const T = window.FemcTutorial; if ((T && T.open && T.open() && (e.key === 'Escape' || T.blocking())) || (st.builtinTut && e.key === 'Escape')) return;
        if (e.key === 'Escape') { e.preventDefault(); pause(!st.paused); return; }
        if (st.paused || st.builtinTut) return;
        touch = false;
        if (/^[1-4]$/.test(e.key) && g.card) { e.preventDefault(); g.choose(+e.key - 1); return; }
        if (e.fromPad && g.card) { // the controller on a choice card: ↑ ↓ (← →) move between the options, ✕ picks
          const bs = [...el.querySelectorAll('.cp-card button[data-o]:not(:disabled)')], i = bs.indexOf(document.activeElement);
          if (e.key.startsWith('Arrow') && bs.length) { e.preventDefault(); bs[i < 0 ? 0 : (i + (e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? bs.length - 1 : 1)) % bs.length].focus(); return; }
          if (e.key === 'Enter') { e.preventDefault(); if (i >= 0) g.choose(+bs[i].dataset.o); else if (bs[0]) bs[0].focus(); return; }
        }
        const k = KEYMAP[e.key];
        if (k) { e.preventDefault(); if (!e.repeat && g.phase !== 'house' && (k === 'up' || k === 'down')) g.input[k] = true; keys.add(k); return; }
        if (e.key === 'e' || e.key === 'E' || e.key === 'Enter') { e.preventDefault(); if (!e.repeat) g.input.act = true; return; }
        if (e.key === ' ') { e.preventDefault(); if (g.phase === 'house' || g.meter) { if (!e.repeat) g.input.act = true; } else keys.add('hide'); }
      };
      const keyUp = e => { const k = KEYMAP[e.key]; if (k) keys.delete(k); if (e.key === ' ') keys.delete('hide'); };
      const padHold = new Set();
      el.querySelector('.cp-pad').addEventListener('pointerdown', e => {
        const b = e.target.closest('button[data-k]'); if (!b || !g || st.paused) return; e.preventDefault(); touch = e.pointerType !== 'mouse';
        const k = b.dataset.k;
        if (k === 'act') g.input.act = true; else if (k === 'up' || k === 'down') g.input[k] = true; else { padHold.add(k); try { b.setPointerCapture(e.pointerId); } catch (err) {} }
      });
      const padUp = e => { const b = e.target.closest && e.target.closest('button[data-k]'); if (b) padHold.delete(b.dataset.k); };
      el.querySelector('.cp-pad').addEventListener('pointerup', padUp); el.querySelector('.cp-pad').addEventListener('pointercancel', padUp); el.querySelector('.cp-pad').addEventListener('lostpointercapture', padUp);
      cv.addEventListener('pointerdown', e => {
        if (!st.begun || st.paused || st.over || !g) return;
        touch = e.pointerType !== 'mouse';
        const r = cv.getBoundingClientRect(), px = e.clientX - r.left, py = e.clientY - r.top;
        if (g.meter) { g.input.act = true; return; }
        if (g.card) return;
        if (g.phase === 'house') {
          const wx = (px - ox) / cs, wy = (py - oy) / cs;
          let hit = null, bd = 1.2 ** 2; for (const h of g.hotspots()) { const d = (h.x - wx) ** 2 + (h.y - wy) ** 2; if (d < bd) { bd = d; hit = h; } }
          if (hit) { const n = g.near(); if (n && n.id === hit.id) g.interact(hit.id); else g.walkTo(hit.x, hit.y, hit.id); }
          else g.walkTo(wx, wy);
        } else { const top = H * .42, bot = H * .86; if (py >= top && py <= bot) { const l = Math.floor((py - top) / ((bot - top) / 3)); if (l < g.lane) g.input.up = true; else if (l > g.lane) g.input.down = true; } }
      });
      $('.cp-card').addEventListener('click', e => { const b = e.target.closest('button[data-o]'); if (b && g) g.choose(+b.dataset.o); });
      $('.cp-bar').addEventListener('pointerdown', e => { e.preventDefault(); if (g && g.meter) g.input.act = true; });
      el.addEventListener('contextmenu', e => e.preventDefault());
      const blur = () => { keys.clear(); padHold.clear(); };
      const pause = on => {
        if (st.over) return;
        st.paused = on; $('.mg-pause').hidden = !on; keys.clear(); padHold.clear();
        if (ac) { try { on ? ac.suspend() : ac.resume(); } catch (e) {} }
        if (on) $('.mg-pause button').focus();
      };
      const onResize = () => fit();
      $('.mg-pause').onclick = e => { const b = e.target.dataset.mg; if (b === 'resume') pause(false); if (b === 'howto') howTo(); if (b === 'quit') { pause(false); quit(); } };
      window.addEventListener('keydown', key, true); window.addEventListener('keyup', keyUp, true); window.addEventListener('blur', blur); window.addEventListener('resize', onResize);
      // the controller (battle/pad.js reads this at each press): □ / R2 = H (hold to hide)
      const padMap = k => { if (!st.begun || st.paused || st.over || !el.isConnected) return; return { l: 'h', r: 'h' }[k]; };
      if (window.FemcPad) window.FemcPad.remap = padMap;

      /* between the phases */
      const overWall = () => {
        st.trans = true;
        const lines = [];
        const over = ORDER.filter(id => g.C[id].st === 'over').map(id => g.C[id].name);
        const left = ORDER.filter(id => g.C[id].st === 'left').map(id => g.C[id].name);
        if (g.found.length) for (const f of g.found.slice(0, 3)) lines.push(`Found: ${f.name.split(' (')[0].toLowerCase()}, in ${f.spot.toLowerCase()}.`);
        const safe = g.stashed.filter(s => !s.found); if (safe.length) lines.push(`Not found: ${safe.length} stash${safe.length > 1 ? 'es' : ''}. Nice.`);
        const box = $('.cp-card'); box.hidden = false;
        box.innerHTML = `<div><b>Over the wall.</b><p>${esc(over.length ? 'With you: ' + over.join(', ') + '.' : 'Just you.')}${left.length ? ' ' + esc('Still inside: ' + left.join(', ') + '.') : ''}</p>${lines.map(l => `<p class="cp-small">${esc(l)}</p>`).join('')}
          <div class="cp-opts"><button type="button" data-go><span>Run for the car</span><small>Space / Enter</small></button></div></div>`;
        const go = () => { if (!st.trans) return; st.trans = false; window.removeEventListener('keydown', goKey, true); box.hidden = true; box.innerHTML = ''; g.startAlley(); paintHud(); };
        const goKey = e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); e.stopPropagation(); go(); } };
        box.querySelector('[data-go]').onclick = go; window.addEventListener('keydown', goKey, true); later(go, 6000);
      };

      /* the end */
      const quit = () => { if (st.over || !g) return; g.finish('quit', g.phase); };
      const finish = r => {
        if (st.over) return; st.over = true; cancelAnimationFrame(raf); keys.clear();
        const res = { ...r, tutorial: tutRes }; delete res.foundList;
        const firstLeft = r.left[0], lc = firstLeft && g.C[firstLeft];
        let head, line, pic = BG(o.bg || 'epi-h-party');
        if (r.ending === 'clean') { head = 'Clean getaway.'; pic = BG('epi-h-jihoon-car'); line = 'Everyone piles in. Jihoon peels out. Junkyu is asleep again before the first stoplight, and somewhere behind you the speaker is still playing to nobody.'; sfx('screech'); }
        else if (r.ending === 'left') { head = 'Somebody got left behind.'; pic = BG('epi-h-jihoon-car'); line = (lc ? LEFT[firstLeft][lc.where === 'alley' ? 1 : 0] : '') + (r.left.length > 1 ? ` (And ${r.left.length - 1} more. The group chat will be loud tomorrow.)` : ''); sfx('screech'); }
        else if (r.ending === 'caught') { head = 'Caught.'; line = r.where === 'alley' ? 'A flashlight, a sigh and a very long walk back to the cruiser. Jihoon asks if the police car has aux. It does not.' : 'Officer Bae writes down everyone’s name, slowly, spelling Hyunsuk’s wrong twice. Nana is the only one waiting up, and he doesn’t judge.'; }
        else { head = 'You called it a night.'; line = 'You stay on the couch. The bass keeps going. Whatever happens next happens to somebody else.'; }
        if (r.won && g.C.jihoon.st !== 'over') line += ' Jaehyuk drives Jihoon’s car home, exactly at the speed limit, using his signals.';
        const end = $('.mg-end');
        const show = () => {
          if (!el.isConnected) return;
          el.classList.add(r.won ? 'won' : 'lost'); end.hidden = false;
          end.innerHTML = `<img class="cp-endbg" src="${pic}" alt="" onerror="this.remove()"><p class="cp-end-head">${esc(head)}</p><b class="mg-grade">${r.grade}</b>
            <dl><dt>Friends saved</dt><dd>${r.saved} / 6</dd><dt>Items handled</dt><dd>${r.handled} / ${r.items}</dd><dt>Found by the cops</dt><dd>${r.found}</dd><dt>Time</dt><dd>${fmt(r.secs)}</dd><dt>Style</dt><dd>${r.style}</dd><dt>Score</dt><dd>${r.score}</dd></dl>
            <p class="mg-end-say">${esc(line)}</p><button type="button">Continue</button>`;
          end.querySelector('button').focus();
          end.querySelector('button').onclick = () => { cleanup(); o.onDone?.(res); done(res); };
        };
        r.quit ? show() : later(show, still ? 400 : 1200);
      };
      const cleanup = () => {
        if (window.FemcPad && window.FemcPad.remap === padMap) window.FemcPad.remap = null;
        cancelAnimationFrame(raf); timers.forEach(clearTimeout); timers.clear();
        window.removeEventListener('keydown', key, true); window.removeEventListener('keyup', keyUp, true); window.removeEventListener('blur', blur); window.removeEventListener('resize', onResize);
        window.removeEventListener('keydown', skipT, true);
        try { ac && ac.close(); } catch (e) {} el.remove();
      };

      /* the tutorial */
      const TFACE = FACE('jaehyuk');
      const practice = kind => new Promise(ok => { tp = { kind, acc: 0, on: (e, x) => {
        if (kind === 'move' && e === 'moved' && (tp.acc += x) > 40) fin();
        if (kind === 'bag' && e === 'bagDone') fin();
        if (kind === 'boost' && e === 'practiceBoost') fin();
      } }; const fin = () => { tp = null; ok(); }; });
      const markAt = (x, y) => { st.mark = { x, y }; placeMark(); return $('.cp-mark'); };
      const placeMark = () => { const m = $('.cp-mark'), p = st.mark; if (!p) { m.style.display = 'none'; return; } m.style.display = 'block'; m.style.left = sx(p.x) - cs * 1.2 + 'px'; m.style.top = sy(p.y) - cs * 1.2 + 'px'; m.style.width = m.style.height = cs * 2.4 + 'px'; };
      const tutSteps = replay => [
        { target: null, say: 'Somebody yelled cops. Don’t panic. I already did the panicking, quietly. Practice first: the sirens wait for us.' },
        { target: () => markAt(g.me.x, g.me.y), say: 'That’s you. Move with <b>WASD / the arrows</b> (the <b>D-pad</b> or stick on a controller), or tap / click where to go. Walk around a little.', wait: replay ? 'click' : () => practice('move'), after: () => { st.mark = null; placeMark(); } },
        { target: () => markAt(8.5, 12.5), before: () => { if (!replay) g.practiceBag(); },
          say: 'The bag on the couch. Walk to it and press <b>E / Space</b> (<b>✕</b>; or tap it). For each thing inside: <b>Flush</b> (safe, costs seconds), <b>Stash</b> (a risk the cops find it) or <b>Keep</b> (slows you later). Pick with 1-3 (or ↑ ↓ and ✕). Try it.', wait: replay ? 'click' : () => practice('bag'), after: () => { st.mark = null; placeMark(); } },
        { target: '.cp-sirenm', say: 'The <b>sirens</b> are the clock. The windows go red and blue as they get close. At zero, a cop comes in after you.' },
        { target: '.cp-crew', say: 'Everyone has a problem. Walk up to them and press <b>E</b> (<b>✕</b>) to sort it out; then they follow you in a line. I’m at the back wall already. Obviously.' },
        { target: '.cp-bar', before: () => { if (!replay) g.practiceBoost(); else { $('.cp-bar').hidden = false; } }, after: () => { if (replay) paintBar(); },
          say: 'At the back wall you boost them over: press <b>Act</b> (E / Space / <b>✕</b> / tap) when the marker is in the pink. The bright middle is a perfect boost. Try it.', wait: replay ? 'click' : () => practice('boost') },
        { target: null, say: 'Then the alleys to Jihoon’s car: <b>↑↓</b> lanes, hold <b>→</b> to hurry (they fall behind), <b>←</b> to slow. When headlights come, get in a doorway or behind the bins and hold <b>Shift</b> (<b>□</b> on a controller) to hide. <b>Esc</b> (○) pauses. Go.' },
      ];
      const BUILTIN_KEY = 'kg-femc-tutorials';
      const seenLocal = () => { try { return !!(JSON.parse(localStorage.getItem(BUILTIN_KEY) || '{}') || {}).cops; } catch (e) { return false; } };
      const markLocal = () => { try { const m = JSON.parse(localStorage.getItem(BUILTIN_KEY) || '{}') || {}; m.cops = 1; localStorage.setItem(BUILTIN_KEY, JSON.stringify(m)); } catch (e) {} };
      const builtin = (replay) => new Promise(ok => { // no FemcTutorial: plain info cards
        const steps = tutSteps(true); let i = 0;
        st.builtinTut = true;
        const box = document.createElement('div'); box.className = 'cp-tut'; el.appendChild(box);
        const paint = () => { const s = steps[i]; box.innerHTML = `<div><img src="${TFACE}" alt="" onerror="this.remove()"><p><b>Jaehyuk</b>${s.say.replace(/<(?!\/?b>)[^>]*>/g, '')}</p><span>${i + 1} / ${steps.length}</span><button type="button" data-t="skip">Skip</button><button type="button" data-t="next">${i === steps.length - 1 ? 'Let’s go' : 'Next'}</button></div>`; box.querySelector('[data-t=next]').focus(); };
        const end = r => { st.builtinTut = false; window.removeEventListener('keydown', k, true); box.remove(); if (!replay) markLocal(); ok(r); };
        const k = e => { if (!box.isConnected) return; if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); end('skipped'); } else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); next(); } };
        const next = () => { if (++i >= steps.length) end('done'); else paint(); };
        box.onclick = e => { const b = e.target.closest('button'); if (!b) return; b.dataset.t === 'skip' ? end('skipped') : next(); };
        window.addEventListener('keydown', k, true); paint();
      });
      const howTo = () => {
        tutLib().then(T => {
          if (!st.paused || st.over) return;
          $('.mg-pause').hidden = true;
          const back = () => { if (st.paused && !st.over) { $('.mg-pause').hidden = false; $('.mg-pause button').focus(); } };
          if (!T) return builtin(true).then(back);
          T.run(el, { steps: tutSteps(true), who: 'Jaehyuk', face: TFACE, calm, perf, replay: true }).then(back);
        });
      };

      /* the title card, then the tutorial, then the yell */
      const note = ['Chaotic fun', calm ? 'Flashes reduced' : 'Red and blue lights', still ? 'Reduced motion' : '', mute ? 'Captions on' : 'Best with sound'].filter(Boolean).join(' · ');
      const tt = document.createElement('div'); tt.className = 'cp-title';
      tt.innerHTML = `<img class="cp-tbg" src="${BG(o.bg || 'epi-h-party')}" alt="" onerror="this.remove()"><b>SOMEBODY<br>YELLED COPS</b><small>Get the crew out. Get to Jihoon’s car.</small><img class="cp-tart" src="${ART('title')}" alt="" onerror="this.remove()"><p class="cp-note">${esc(note)}</p>`;
      el.appendChild(tt);
      fit(); newG(true);
      raf = requestAnimationFrame(tick);
      const start = () => {
        if (st.over || !el.isConnected) return;
        st.tut = false; el.classList.remove('tut'); tp = null; st.mark = null; placeMark();
        newG(false); paintCard(); paintBar(); paintHud();
        const y = $('.cp-yell'); y.classList.add('on'); later(() => y.classList.remove('on'), 1300);
        sfx('yell'); cc('someone screams “COPS!” over the music'); later(() => cc('the bass keeps going through the walls'), 2600);
        say('Somebody yelled cops. Grab the bag. Get everyone out the back.', 'big');
        shake();
      };
      const begin = () => {
        if (st.begun || !el.isConnected) return; st.begun = true; window.removeEventListener('keydown', skipT, true);
        tt.classList.add('out'); later(() => tt.remove(), 450);
        audio(); st.tut = true; el.classList.add('tut'); paintHud();
        tutP.then(T => {
          if (!el.isConnected) return;
          if (T) { if (!T.should('cops', o.tutorial)) return start(); T.run(el, { id: 'cops', steps: tutSteps(false), who: 'Jaehyuk', face: TFACE, calm, perf }).then(r => { tutRes = r; start(); }); return; }
          if (o.tutorial === true || (o.tutorial !== false && !seenLocal())) builtin(false).then(r => { tutRes = r; start(); });
          else start();
        });
      };
      const skipT = e => { if (e.key !== 'Escape') { e.preventDefault(); e.stopPropagation(); begin(); } };
      tt.onclick = begin; window.addEventListener('keydown', skipT, true); later(begin, 1800);
      if (o.hook) try { o.hook({ g: () => g, el, state: st }); } catch (e) {}
    });
  }
  return { play, engine, DIFF, CREW, ITEMS, SPOTS, LEFT, GRID, ROOMS, bfs, state: () => cur };
})();
