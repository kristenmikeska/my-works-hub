/* FEMC epilogue minigame: Too Strong (Nov 11 2026). A DEMO: not in the story, not on any page yet (the main session adds its card to
   mockups/minigames/index.html). HOAX: somebody's brownie from this afternoon "didn't do anything", and then, an hour late, at seven
   o'clock, at the Yangs' dining table, it did. Solar has to survive dinner with Jungwon's parents. Half dialogue game, half survival.
   Comedy; fiction only (nothing about amounts, kinds or how; "the brownie" is all it ever is), nothing of the plot told.

   FemcEdible.play({ host, mute, difficulty, bg, calm, perf, still, tutorial, seed, onDone }) -> Promise<result>
     host        element to draw into (default document.body; a full-screen overlay is added inside it)
     mute        no sound at all (no AudioContext is made; every sound also has something on screen)
     difficulty  'easy' | 'normal' | 'hard' (default 'normal'): how fast the answers morph, how sharp Mrs. Yang is (suspicion x0.75 /
                 1 / 1.35, and on hard she follows up), the dinner’s length (16 / 19 / 22 beats, about 3 / 3.5 / 4.5 minutes), 3 / 3 / 4
                 answers, answer time 9 / 7.5 / 6.5 s, dishes 4 / 5 / 6, Jungwon's covers 3 / 2 / 1, how often things are funny
     bg          a background id under assets/femc/bg/ for the dining room (default none: there's no Yang house picture in HOAX yet;
                 epi-s-yang-* are the strangers Yangs, a different family). Kat's art room.webp (below) wins; else a drawn room
     calm, perf  Reduce flashes / Performance; default: the game's settings (FemcGame.settings().calm / .perf), else off
     still       force reduced motion (default: prefers-reduced-motion)
     tutorial    true: always start with the practice; false: never; default: only the first time (FemcTutorial.seen('edible'))
     seed        a number: the same dinner every time (tests); default random
     onDone      called with the result too
   result = { won, grade: 'S' | 'A' | 'B' | 'C', ending: 'grace' | 'interesting' | 'explode' | 'quit', quit, composure, suspicion,
              answers: { sane, odd, wild, silent, covered }, passes: { right, wrong, late, covered }, bursts, covers, nudges: { offered,
              taken }, secs, difficulty, tutorial: 'done' | 'skipped' | 'seen' }
     won = she got to the pears (not 'explode', not 'quit'). ending 'grace' = Suspicion under 45 and Composure 30+, else 'interesting'.
   Grade: S grace with Suspicion under 20, Composure 70+, no giggle bursts and nothing unhinged said; A grace; B interesting; C lost / quit.

   How it plays: four courses (soup, the fish, mains, fruit), a beat at a time.
     Questions   Mrs. Yang or Mr. Yang asks (school, the council, her future, the food); the question types out, then the answers
                 come up with a timer. One is sane, one or two are odd, one is what she's actually thinking. As it gets stronger the
                 answers MORPH: the sane one drifts to another slot, letters swap, and for a second the sane one says what she's
                 thinking instead (pick it then and she says that out loud). Click / tap, or 1-4. Time out = a long silence.
     Pass        "Would you pass the japchae?" The dishes slide round the table and multiply: copies shimmer (bone outline, see-through,
                 maybe a misspelled tag). Click the real one, or ← / → and Enter, or its number.
     Straight face  things are funny (the fish's face, Mr. Yang's tie with the ducks, Maeumi under the table in her coat, a word like
                 "pamphlet"). The Giggle meter fills; hold Space (or the Straight face button) to push it down. Held too long, the
                 strain shows (Suspicion creeps). Full = a giggle burst: Composure down, Suspicion up.
     Jungwon     beside her, on her side. Sometimes his foot taps hers ("N" / tap the prompt in time): he steers her, the sane answer
                 glows and stops morphing. "Look at Jungwon" (C), 3 / 2 / 1 a dinner: he covers (answers for her, passes the dish,
                 or changes the subject when she's about to go). On hard, with Suspicion past 55, his mother notices.
     Time        stretches, about once a course: a sentence types out painfully slowly, the clock runs backwards, faces slightly melt
                 and re-form, the table gets longer. Mostly to look at; the slow sentence only costs time before the answers.
   Meters: Composure (giggle bursts, odd and unhinged answers; it comes back slowly while she's calm) and Suspicion (his parents).
   Endings: survived with grace / survived, but they "think you're interesting" / the giggle explodes (Composure 0).

   Title card ~1.8 s (click / a key skips). Esc pauses (Resume / How to play / Quit). Mouse, touch and keyboard each do everything.
   Settings: reduced motion = no melting, sliding warps or wobble (captions say it instead; dishes still move, slowly); Reduce flashes
   (calm) = no burst flash, softer haze, smaller melt; Performance = no haze, blur or wobble layers. UI chrome pink and black only.
   Sound (Web Audio, made here, no files): a dining-room hum that slowly detunes, the clock (backwards when it runs backwards), type
   ticks, chimes for a sane answer, a thunk, a snort-laugh for a burst, two soft taps for his foot.

   First-time tutorial (Kat: every minigame teaches itself): tutorial.js (FemcTutorial, loaded on demand from this folder; a small
   built-in one if it can't load: dim + arrow + bubble, Skip, remembered in localStorage 'kg-femc-tutorials' in try/catch). After the
   title card, a practice dinner (nothing counts): the meters → one question → the fish (hold Space) → pass the kimchi → Jungwon's
   foot and cover → Esc. Then the real dinner starts fresh. Pause → How to play replays it as a walkthrough.

   Optional art (assets/femc/game/art/minigames/edible/; each falls back to drawn): title.webp (title card), room.webp (the dining room),
   dad.webp (Mr. Yang, bust, transparent; a drawn Mr. Yang with the duck tie otherwise). Uses the HOAX portraits jwmom-hoax (Mrs. Yang),
   jungwon-hoax and solar-hoax (neutral / happy / serious / surprised / flustered / sad).
   Invented here (Kat to confirm): Mr. Yang (no portrait or lines exist; quiet, likes his rice, owns a tie with very small ducks on it).

   Test hooks: FemcEdible.model(opts) = the dinner with no DOM (step(ms), hold(on), answer(slot), pass(uid), cover(), nudge(),
   skip(), quit(), shown(slot), result()); FemcEdible.state() = { M, act(name, arg) } of the running game. */
window.FemcEdible = (() => {
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const base = () => (window.FemcGame && window.FemcGame.base) || (typeof document !== 'undefined' && document.querySelector('script[src*="minigames/edible"]')?.src.split('assets/')[0]) || '';
  const reduced = typeof matchMedia === 'function' ? matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
  const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
  const ART = id => `${base()}assets/femc/game/art/minigames/edible/${id}.webp`;
  const BG = id => `${base()}assets/femc/bg/${id}.webp`;
  const FACE = (who, f) => `${base()}assets/femc/portraits/${who}/${f}.webp`;
  const mulberry = a => () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };

  const DIFF = {
    easy:   { beats: 16, opts: 3, morph: 3400, win: 9000, passWin: 7500, dishes: 4, sharp: 0.75, covers: 3, trigGap: [9000, 14000], trigRate: 15, burst: 18, nudge: 0.75, nudgeWin: 1900, flip: 0.45, scram: 0.45, decoys: 2, slide: 10 },
    normal: { beats: 19, opts: 3, morph: 2600, win: 7500, passWin: 6300, dishes: 5, sharp: 1,    covers: 2, trigGap: [7000, 11000], trigRate: 21, burst: 24, nudge: 0.55, nudgeWin: 1450, flip: 0.75, scram: 0.75, decoys: 3, slide: 14 },
    hard:   { beats: 22, opts: 4, morph: 1900, win: 6500, passWin: 5400, dishes: 6, sharp: 1.35, covers: 1, trigGap: [5500, 9000],  trigRate: 27, burst: 30, nudge: 0.4,  nudgeWin: 1100, flip: 1,    scram: 1,    decoys: 4, slide: 19 },
  };
  const NAMES = { mom: 'Mrs. Yang', dad: 'Mr. Yang', jungwon: 'Jungwon', solar: 'Solar', n: '' };

  // the questions: who asks, the question, s = sane, o = [odd, odd (hard's fourth)], w = what she's actually thinking;
  // word = a word in the question that's suddenly very funny (a giggle trigger as it types)
  const QUESTIONS = [
    { who: 'mom', ask: 'So. Jungwon tells me you are the vice president now.', s: 'Yes. I’m learning a lot from him.', o: ['Yes! Technically. Legally, yes.', 'I am. Vice. President. Of things.'], w: 'he picked me. like in a movie. a really boring movie about councils' },
    { who: 'mom', ask: 'What are you planning to study at university?', s: 'Something with people. Maybe social work.', o: ['Undecided, but in a very focused way.', 'University. At a university.'], w: 'lasagna' },
    { who: 'dad', ask: 'And how do you find calculus?', s: 'Hard, honestly. Jungwon’s a patient tutor.', o: ['I find it every day. It’s always there.', 'With my eyes, mostly.'], w: 'numbers are just letters that gave up' },
    { who: 'mom', ask: 'What do your parents do?', s: 'They both work in business. They travel a lot.', o: ['Mostly work. Sometimes a plane.', 'They’re… parents. Professionally.'], w: 'they exist. i think. i saw them in october' },
    { who: 'mom', ask: 'The school sent home a pamphlet about the council’s winter events.', word: 'pamphlet', s: 'We’re hoping to raise money for the library.', o: ['We have so many events. So many.', 'I helped fold the pamphlets!'], w: 'PAMPHLET' },
    { who: 'dad', ask: 'Is the fish all right?', s: 'It’s delicious, thank you.', o: ['It’s very… present.', 'It’s a lot of fish. In a good way.'], w: 'he knows what he did' },
    { who: 'mom', ask: 'Jungwon tells me you walk to school.', s: 'I do. It’s not far.', o: ['With my legs, yes.', 'Most days. Nana walks me.'], w: 'have you ever really looked at a road' },
    { who: 'mom', ask: 'And your grades this term?', s: 'Better. I’m really working on it.', o: ['They’re numbers. On paper. Good paper.', 'Present and accounted for.'], w: 'how are YOUR grades mrs yang' },
    { who: 'dad', ask: 'Do you have any hobbies?', s: 'Films, mostly. And walking my dog.', o: ['Rom-coms. I study them. Seriously.', 'Lying down. Competitively.'], w: 'i’m looking at your tie' },
    { who: 'mom', ask: 'Jungwon has a competition in January.', s: 'He’ll do well. He always prepares.', o: ['He’ll win. He’s a machine. A nice machine.', 'Math, right? The math one?'], w: 'he should eat lunch though. tell him to eat lunch' },
    { who: 'dad', ask: 'We had kumquats at the market today.', word: 'kumquats', s: 'Oh, I love those. Were they good?', o: ['Wow. Kumquats. Wow.', 'I’ve heard of them, yes.'], w: 'kumquat. KUMquat. kum. quat' },
    { who: 'dad', ask: 'More rice?', s: 'Yes, please. Thank you.', o: ['I would love more rice. I love rice. Thank you, rice.', 'Always. Forever. Yes.'], w: 'how much rice is there. like in the whole world' },
    { who: 'mom', ask: 'Jungwon doesn’t usually bring people home.', s: 'I’m really glad he asked me.', o: ['I’m honoured. I’m a guest. Hello.', 'Well. Here I am! At home. Yours.'], w: 'he is SO cute when he’s nervous look at his ears' },
    { who: 'mom', ask: 'Have you thought about what comes after graduation?', s: 'A little. I want to keep my options open.', o: ['After graduation comes… the summer.', 'Yes. Constantly. No.'], w: 'what comes after anything. mrs yang. what comes after' },
    { who: 'dad', ask: 'How is the soup?', s: 'It’s lovely. Is there ginger in it?', o: ['It’s very soup.', 'Hot! Good hot. Soup hot.'], w: 'it’s warm like a hug from god' },
    { who: 'mom', ask: 'You seem very relaxed this evening, Solar.', s: 'It’s a really nice dinner. Thank you for having me.', o: ['I’m always like this. Calm. Like a lake.', 'Do I? Ha. I do. I am.'], w: 'i can hear the lamp' },
    { who: 'mom', ask: 'Jungwon says the bake sale was your idea.', s: 'It was, but everyone helped.', o: ['Allegedly.', 'Ideas are a team effort, really.'], w: 'the BAKE sale. ha. haha. baked' },
    { who: 'dad', ask: 'Do you have a dog? Jungwon mentioned a dog.', s: 'Nana. He’s big and white and very fluffy.', o: ['Yes. A dog. Dog-shaped.', 'Sort of. He has me, more.'], w: 'nana is a cloud that got a job' },
    { who: 'mom', ask: 'Jungwon says you help him remember to eat.', s: 'I try. He forgets when he’s busy.', o: ['Somebody has to! Ha. Not you. Sorry.', 'I bring sandwiches. Normal ones.'], w: 'he’s a little noodle. a little studious noodle' },
  ];
  // what she's actually thinking (the sane answer flips to one of these for a second)
  const THOUGHTS = ['why is the fish looking at me', 'i love your son so much it’s actually scary', 'how long have we been sitting here. be honest', 'don’t laugh don’t laugh don’t laugh', 'is the table getting longer or is it me', 'the ducks on that tie are having a meeting', 'i can feel my teeth', 'what if spoons were bigger'];
  const DISHES = [['japchae', 'japchae'], ['kimchi', 'kimchi'], ['soy', 'soy sauce'], ['rice', 'rice'], ['namul', 'spinach namul'], ['eggroll', 'egg roll'], ['radish', 'radish kimchi'], ['galbi', 'galbi']];
  // giggle triggers: cap = the caption chip; at = where it is (positions the chip)
  const TRIGS = {
    fish:   { cap: 'The fish is looking at you.', at: 'table' },
    tie:    { cap: 'Mr. Yang’s tie has very small ducks on it.', at: 'dad' },
    chew:   { cap: 'Mr. Yang chews exactly like a hamster.', at: 'dad' },
    maeumi: { cap: 'Maeumi is under the table in her knitted coat.', at: 'floor' },
    clock:  { cap: 'The clock said “tock.” Just tock. No tick.', at: 'clock' },
    spoon:  { cap: 'Jungwon is holding his spoon extremely formally.', at: 'jw' },
    ears:   { cap: 'Jungwon’s ears have gone pink.', at: 'jw' },
  };
  const REPLY = {
    mom: { sane: ['Good.', 'I see. That’s sensible.', 'Mm.'], odd: ['…I see.', 'Is that so.', 'Hm.'], wild: ['I beg your pardon?', 'Jungwon. Is she all right?', '…'], silent: ['Solar?', 'Are you with us, Solar?'] },
    dad: { sane: ['Ha. Good, good.', 'That’s right.', 'Good girl.'], odd: ['Ha! …Ha?', 'Interesting.', 'Ah.'], wild: ['Ha. …What?', 'Mm. Yes. Well.', 'Ha! I don’t follow, but ha.'], silent: ['…Solar?', 'She’s thinking. Let her think.'] },
  };
  const COVER = ['She stayed up studying with me. She’s exhausted, Mom.', 'Solar’s being modest. The bake sale raised more than anything else this term.', 'She means yes. She’s nervous. I told her you were strict.', 'Dad, tell Solar about the fishing trip.', 'Mom, the kimchi’s very good tonight. Did Grandmother send it?'];
  const COURSES = [
    { name: 'Soup', lines: [['n', 'Doenjang soup, four bowls, four spoons. The clock on the wall is very loud.']] },
    { name: 'The fish', lines: [['n', 'The fish arrives whole. It has a face. The face has opinions.']] },
    { name: 'Mains', lines: [['n', 'The table is fuller now. It might also be longer. It’s hard to say.']] },
    { name: 'Fruit', lines: [['n', 'Pears, cut into perfect pieces. The end is in sight. Probably.'], ['jungwon', '(very quietly) Almost done.']] },
  ];
  const INTRO = [
    ['n', 'Seven o’clock. The Yangs’ dining room: very clean, very quiet, a clock you can hear.'],
    ['n', 'Somebody’s brownie from this afternoon, the one that “didn’t do anything,” has just decided to do something.'],
    ['jungwon', '(low) You look… very relaxed. Just answer the questions. Please.'],
  ];
  const OUTRO = {
    grace: [['mom', 'It was nice to meet you, Solar. Jungwon, walk her to the corner.'], ['n', 'At the corner, Jungwon breathes out. He has been holding it since the soup.'], ['jungwon', 'You were perfect. My father liked you. My mother didn’t say anything bad, which is the same thing.'], ['solar', 'won. the moon is SO big. is it always that big']],
    interesting: [['mom', 'Well. She’s… interesting, Jungwon.'], ['dad', 'I liked her! The rice thing!'], ['jungwon', 'That’s. Good. I think that’s good.'], ['n', 'He walks her to the corner and holds on to her sleeve the whole way, like she might float off.']],
    explode: [['n', 'It starts as a snort. Then it’s a noise. Then it’s a laugh you could hear from the street, and it does not stop.'], ['mom', '…'], ['dad', 'Ha! It’s the tie, isn’t it. Everybody laughs at the tie.'], ['jungwon', 'Mom. Dad. She has a fever. I’m going to walk her home now. Thank you for dinner. It was very good fish.']],
    quit: [],
  };
  // letters swap (the first and last of each word stay; readable if you look)
  const scramble = (s, R) => s.replace(/[A-Za-z’']{4,}/g, w => { const a = w.split(''); for (let k = 0; k < 2; k++) { const i = 1 + Math.floor(R() * (a.length - 2)), j = 1 + Math.floor(R() * (a.length - 2)); [a[i], a[j]] = [a[j], a[i]]; } return a.join(''); });

  /* ── the dinner, no DOM ── */
  function model(o = {}) {
    const diff = DIFF[o.difficulty] ? o.difficulty : 'normal', D = DIFF[diff];
    const R = mulberry(o.seed ?? ((Math.random() * 2 ** 31) | 0));
    const pickR = a => a[Math.floor(R() * a.length)], rr = (a, b) => a + R() * (b - a);
    const shuffleR = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(R() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
    const M = { diff, D, tut: !!o.tut, t: 0, high: o.tut ? 0.3 : 0.1, comp: 100, susp: 10, gig: 0, holding: false, holdT: 0, strained: false,
      covers: D.covers, over: false, ending: null, phase: 'line', line: null, beat: null, queue: [], done: 0, total: 0, course: '',
      clockOff: 0, clockRev: 0, long: 0, longTo: 0, trig: null, lastTrig: '', trigNext: rr(...D.trigGap) * 1.2, nudge: null, aside: null, uid: 1, outro: [],
      st: { sane: 0, odd: 0, wild: 0, silent: 0, covered: 0, pRight: 0, pWrong: 0, pLate: 0, pCovered: 0, bursts: 0, covers: 0, nOffered: 0, nTaken: 0 }, ev: [] };
    const emit = (k, x = {}) => M.ev.push(Object.assign({ k }, x));
    const line = (who, t, ms) => ({ k: 'line', who, t, ms });
    const morphMs = () => D.morph * (1.25 - 0.6 * M.high);
    const sharp = v => v * D.sharp;
    const aside = (who, t) => { M.aside = { who, t, left: 2600 }; emit('aside', { who, t }); };

    // the plan: intro, four courses of beats (q / pass; never two passes running), warps spread through
    if (!M.tut) {
      const n = D.beats, nPass = Math.round(n * 0.3), plan = [];
      let left = nPass;
      for (let i = 0; i < n; i++) {
        const canPass = i >= 2 && plan[i - 1] !== 'pass' && left > 0;
        const want = left / Math.max(1, n - i);
        if (canPass && (R() < want * 1.6 || left >= (n - i + 1) / 2)) { plan.push('pass'); left--; } else plan.push('q');
      }
      const qs = shuffleR(QUESTIONS); let qi = 0;
      const lastWho = { v: 'mom' };
      const beats = plan.map(k => {
        if (k === 'q') return { k: 'q', q: qs[qi++ % qs.length] };
        const who = lastWho.v = lastWho.v === 'mom' ? 'dad' : 'mom';
        return { k: 'pass', who, want: pickR(DISHES)[0] };
      });
      const warpAt = (f, id, qOnly) => { let i = Math.round(f * (n - 1)); if (qOnly) while (i < n - 1 && beats[i].k !== 'q') i++; if (!beats[i].warp) beats[i].warp = id; };
      warpAt(0.3, 'slow', true); warpAt(0.45, 'clock'); warpAt(0.6, 'melt'); warpAt(0.75, 'long');
      if (diff === 'hard') warpAt(0.88, 'slow', true);
      INTRO.forEach(([w, t]) => M.queue.push(line(w, t)));
      const per = n / COURSES.length;
      COURSES.forEach((c, ci) => {
        M.queue.push({ k: 'course', name: c.name });
        c.lines.forEach(([w, t]) => M.queue.push(line(w, t)));
        beats.slice(Math.round(ci * per), Math.round((ci + 1) * per)).forEach(b => M.queue.push(b));
      });
      M.total = n;
    }

    const next = () => {
      if (M.over) return;
      M.beat = null;
      if (!M.queue.length) { if (M.tut) { M.phase = 'idle'; M.line = null; return; } return finish(); }
      const it = M.queue.shift();
      if (it.k === 'course') { M.course = it.name; emit('course', { name: it.name }); return next(); }
      if (it.k === 'line') { M.phase = 'line'; M.line = { who: it.who, t: it.t, left: it.ms || clamp(1300 + it.t.length * 38, 1900, 4800) }; emit('say', { who: it.who, t: it.t }); return; }
      M.phase = 'beat'; M.line = null;
      if (it.warp) warp(it.warp);
      if (it.k === 'q') startQ(it); else startPass(it);
    };
    const warp = id => {
      emit('warp', { id });
      if (id === 'clock') M.clockRev = 9000;
      if (id === 'long') M.longTo = 1;
    };

    /* questions */
    const startQ = it => {
      const q = it.q, opts = [{ k: 'sane', t: q.s }, { k: 'odd', t: q.o[0] }, { k: 'wild', t: q.w }];
      if (D.opts > 3) opts.push({ k: 'odd', t: q.o[1] });
      opts.forEach(x => { x.scr = null; x.think = null; x.thinkLeft = 0; });
      const slow = it.warp === 'slow';
      const b = M.beat = { k: 'q', q, who: q.who, ask: q.ask, opts, slots: shuffleR(opts.map((_, i) => i)), stage: 'ask', typed: 0,
        typeMs: 30 * (1 + 0.5 * M.high) * (slow ? 4.5 : 1), slow, left: D.win * (M.tut ? 3 : 1), win: D.win * (M.tut ? 3 : 1), pickT: 0, morphT: morphMs(),
        nudgeAt: !M.tut && R() < D.nudge * (M.high > 0.35 || M.susp > 35 ? 1 : 0.5) ? rr(600, 2400) : -1, hint: false,
        wordAt: q.word ? q.ask.indexOf(q.word) + q.word.length : -1, calm: !!it.calm };
      if (slow) emit('warp', { id: 'slowtext' });
      emit('ask', { who: b.who });
    };
    const saneSlot = b => b.slots.findIndex(i => b.opts[i].k === 'sane');
    const shown = s => {
      const b = M.beat; if (!b || b.k !== 'q') return null;
      const x = b.opts[b.slots[s]]; if (!x) return null;
      return { t: x.think || x.scr || x.t, kind: x.think ? 'wild' : x.k, think: !!x.think, scr: !!x.scr && !x.think, hint: b.hint && x.k === 'sane' };
    };
    const morph = b => {
      if (b.calm) return;
      const h = M.high, sl = saneSlot(b);
      if (!b.hint && R() < 0.3 + 0.6 * h) { const o2 = (sl + 1 + Math.floor(R() * (b.slots.length - 1))) % b.slots.length; [b.slots[sl], b.slots[o2]] = [b.slots[o2], b.slots[sl]]; emit('drift'); }
      b.opts.forEach(x => { x.scr = (!(b.hint && x.k === 'sane') && R() < D.scram * h * 0.55) ? scramble(x.t, R) : null; });
      const so = b.opts.find(x => x.k === 'sane');
      if (!b.hint && !so.think && R() < D.flip * h * 0.65) { so.think = pickR(THOUGHTS); so.thinkLeft = rr(900, 1700); emit('think'); }
    };
    const stepQ = (b, dt) => {
      if (b.stage === 'ask') {
        const was = b.typed; b.typed += dt / b.typeMs;
        if (b.wordAt > 0 && was < b.wordAt && b.typed >= b.wordAt) startTrig('word', `“${b.q.word}.” She said “${b.q.word}.”`);
        if (b.typed >= b.ask.length) { b.typed = b.ask.length; b.stage = 'pick'; emit('opts'); }
        return;
      }
      b.pickT += dt;
      if (!M.tut) b.left -= dt;
      b.opts.forEach(x => { if (x.think && (x.thinkLeft -= dt) <= 0) x.think = null; });
      if ((b.morphT -= dt) <= 0) { morph(b); b.morphT = morphMs(); }
      if (b.nudgeAt >= 0 && b.pickT >= b.nudgeAt && !M.nudge) { M.nudge = { left: D.nudgeWin }; b.nudgeAt = -1; M.st.nOffered++; emit('nudge'); }
      if (b.left <= 0) resolveQ(b, null);
    };
    const answer = s => {
      const b = M.beat; if (M.over || !b || b.k !== 'q' || b.stage !== 'pick' || !b.opts[b.slots[s]]) return false;
      resolveQ(b, s); return true;
    };
    const resolveQ = (b, s) => {
      const sh = s == null ? null : shown(s), kind = sh ? sh.kind : 'silent';
      const said = sh ? (sh.think ? sh.t : b.opts[b.slots[s]].t) : '…';
      M.st[kind]++;
      if (kind === 'sane') { M.susp -= 4; M.comp += 2; }
      if (kind === 'odd') { M.susp += sharp(7); M.comp -= 3; }
      if (kind === 'wild') { M.susp += sharp(14); M.comp -= 9; M.gig += 20; }
      if (kind === 'silent') { M.susp += sharp(9); M.comp -= 2; }
      emit('answer', { kind });
      const L = [line('solar', said, kind === 'silent' ? 1600 : clamp(900 + said.length * 30, 1300, 3000)), line(b.who, pickR(REPLY[b.who][kind]))];
      if (kind === 'odd' && D.sharp > 1.2 && b.who === 'mom') { L.push(line('mom', 'You’ll forgive me. I prefer a straight answer.')); M.susp += 2; }
      if (kind === 'wild' && R() < 0.5) L.push(line('n', '(Under the table, Jungwon’s hand finds her wrist and squeezes, once: breathe.)'));
      M.queue.unshift(...L);
      endBeat();
    };
    const endBeat = () => { M.nudge = null; M.done++; if (!M.tut) M.high = clamp(0.1 + 1.4 * M.done / M.total); emit('beatEnd'); next(); };

    /* pass the dish */
    const startPass = it => {
      const want = it.want, ids = shuffleR(DISHES.filter(d => d[0] !== want)).slice(0, D.dishes - 1).concat([DISHES.find(d => d[0] === want)]);
      const dishes = shuffleR(ids).map((d, i, a) => ({ uid: M.uid++, id: d[0], name: d[1], x: (i + 0.5) / a.length, ghost: false }));
      const name = DISHES.find(d => d[0] === want)[1];
      const ask = it.who === 'mom' ? `Solar, would you pass the ${name}?` : `Pass the ${name}, would you?`;
      M.beat = { k: 'pass', who: it.who, want, name, ask, dishes, stage: 'ask', typed: 0, typeMs: 26 * (1 + 0.4 * M.high), left: D.passWin * (M.tut ? 3 : 1), win: D.passWin * (M.tut ? 3 : 1),
        spawnT: rr(500, 900), maxGhosts: M.tut ? 2 : Math.round(D.decoys * (0.4 + M.high)) };
      emit('ask', { who: it.who });
    };
    const stepPass = (b, dt) => {
      if (b.stage === 'ask') { b.typed += dt / b.typeMs; if (b.typed >= b.ask.length) { b.typed = b.ask.length; b.stage = 'pick'; emit('opts'); } }
      const sp = D.slide / 100 * (0.3 + M.high) * (M.tut ? 0.5 : 1) * dt / 1000;
      b.dishes.forEach(d => { d.x = (d.x + sp * (d.ghost ? 1.35 : 1)) % 1; });
      if ((b.spawnT -= dt) <= 0) {
        b.spawnT = rr(650, 1200);
        if (b.dishes.filter(d => d.ghost).length < b.maxGhosts) {
          const src = R() < 0.7 ? DISHES.find(d => d[0] === b.want) : pickR(DISHES);
          b.dishes.push({ uid: M.uid++, id: src[0], name: M.high > 0.45 && R() < 0.6 ? scramble(src[1], R) : src[1], x: R(), ghost: true });
          emit('multiply');
        }
      }
      if (!M.tut) b.left -= dt;
      if (b.left <= 0) resolvePass(b, null);
    };
    const pass = uid => {
      const b = M.beat; if (M.over || !b || b.k !== 'pass') return false;
      const d = b.dishes.find(x => x.uid === uid); if (!d) return false;
      resolvePass(b, d); return true;
    };
    const resolvePass = (b, d) => {
      const ok = d && !d.ghost && d.id === b.want, L = [];
      if (ok) { M.st.pRight++; M.susp -= 3; L.push(line('n', pickR([`She passes the ${b.name}. Her hand is very steady. Suspiciously steady.`, `The ${b.name}, passed, both hands, a little bow. Textbook.`, `She passes the ${b.name}. Nothing spills. A miracle, quietly.`])), line(b.who, 'Thank you.')); }
      else if (d && d.ghost) { M.st.pWrong++; M.susp += sharp(7); M.comp -= 5; L.push(line('n', `Her hand closes on nothing. On the air, really, a little to the left of the ${b.name}.`), line(b.who, '…Thank you?')); }
      else if (d) { M.st.pWrong++; M.susp += sharp(6); M.comp -= 4; L.push(line('n', `She passes the ${d.name}, with total confidence.`), line(b.who, b.who === 'mom' ? `That’s the ${d.name}, Solar.` : `Ha. That’s the ${d.name}. Close.`)); }
      else { M.st.pLate++; M.susp += sharp(5); L.push(line(b.who, 'Never mind. Jungwon?'), line('n', `Jungwon passes the ${b.name} without looking up.`)); }
      emit('pass', { ok: !!ok, ghost: !!(d && d.ghost) });
      M.queue.unshift(...L);
      endBeat();
    };

    /* Jungwon */
    const nudge = () => {
      if (!M.nudge || M.over) return false;
      M.nudge = null; M.st.nTaken++; M.gig = Math.max(0, M.gig - 15);
      const b = M.beat; if (b && b.k === 'q') { b.hint = true; b.opts.forEach(x => { x.think = null; if (x.k === 'sane') x.scr = null; }); }
      emit('nudged'); return true;
    };
    const cover = () => {
      if (M.over || M.covers <= 0 || M.phase === 'end') return false;
      M.covers--; M.st.covers++;
      const b = M.beat, L = [];
      if (b && b.k === 'q') {
        M.st.covered++; M.susp -= 2;
        L.push(line('jungwon', pickR(COVER)), line(b.who, b.who === 'mom' ? 'Hm.' : 'Ha. Is that so.'));
        if (D.sharp > 1.2 && M.susp > 55) { M.susp += 6; L.push(line('mom', 'Jungwon. Let her answer for herself.')); }
        emit('cover', { on: 'q' }); M.queue.unshift(...L); endBeat();
      } else if (b && b.k === 'pass') {
        M.st.pCovered++; M.susp -= 1;
        L.push(line('jungwon', 'I’ve got it.'), line('n', `He passes the ${b.name} across her, smooth, and his sleeve brushes her arm.`));
        emit('cover', { on: 'pass' }); M.queue.unshift(...L); endBeat();
      } else {
        M.gig = Math.max(0, M.gig - 60); M.trig = null;
        aside('jungwon', pickR(['Dad. The fishing trip. Tell it.', 'Mom, is that a new tablecloth?', 'Dad, how is work?']));
        emit('cover', { on: 'line' });
      }
      return true;
    };

    /* giggles */
    const startTrig = (id, cap) => {
      if (M.over) return;
      const T = TRIGS[id] || { at: 'mom' };
      M.trig = { id, cap: cap || T.cap, at: T.at, left: M.tut ? 999999 : rr(2600, 4400), rate: D.trigRate * (M.tut ? 0.8 : 1), held: 0 };
      M.lastTrig = id; emit('trig', { id });
    };
    const burst = () => {
      M.st.bursts++; M.comp -= D.burst; M.susp += sharp(9); M.gig = 30; M.trig = null;
      emit('burst');
      const who = R() < 0.65 ? 'mom' : 'dad';
      aside(who, who === 'mom' ? pickR(['Is something funny?', 'Solar?', 'Was it something I said?']) : pickR(['Ha! What? What is it?', 'Ha. Good, good. …What?']));
    };
    const stepGig = dt => {
      const s = dt / 1000;
      if (!M.tut && !M.trig && M.phase !== 'end' && (M.trigNext -= dt) <= 0) {
        const ids = Object.keys(TRIGS).filter(k => k !== M.lastTrig);
        startTrig(pickR(ids)); M.trigNext = rr(...D.trigGap) / (0.7 + 0.6 * M.high);
      }
      if (M.trig) {
        if (!M.holding) M.gig += M.trig.rate * (0.6 + 0.8 * M.high) * s; else M.trig.held += dt;
        if ((M.trig.left -= dt) <= 0 || (M.tut && M.trig.held > 500 && M.gig < 15)) { const id = M.trig.id; M.trig = null; emit('trigEnd', { id }); }
      }
      if (M.holding) M.gig -= 40 * s; else if (!M.trig) M.gig -= 6 * s;
      if (M.gig >= 100) burst();
      if (M.holding) {
        M.holdT += dt;
        if (M.holdT > 2600) { M.susp += sharp(3.5) * s; if (!M.strained) { M.strained = true; aside(R() < 0.5 ? 'dad' : 'mom', pickR(['Is the soup too hot?', 'Are you all right, Solar? You look… pained.', 'Something in your eye?'])); emit('strain'); } }
      }
      if (!M.trig && M.gig < 40) M.comp += 0.7 * s;
    };
    const hold = on => { if (M.holding === !!on) return; M.holding = !!on; if (!on) { M.holdT = 0; M.strained = false; } };

    /* time */
    const step = dt => {
      if (M.over || dt <= 0) return;
      dt = Math.min(dt, 100);
      M.t += dt;
      if (M.phase === 'line' && M.line && (M.line.left -= dt) <= 0) next();
      const b = M.beat;
      if (b && b.k === 'q') stepQ(b, dt); else if (b && b.k === 'pass') stepPass(b, dt);
      if (M.nudge && (M.nudge.left -= dt) <= 0) { M.nudge = null; emit('nudgeMiss'); }
      if (M.aside && (M.aside.left -= dt) <= 0) M.aside = null;
      stepGig(dt);
      if (M.clockRev > 0) { M.clockRev -= dt; M.clockOff -= 2.4 * dt / 1000; } else if (M.clockOff < 0) M.clockOff = Math.min(0, M.clockOff + 1.5 * dt / 1000);
      M.long += (M.longTo - M.long) * Math.min(1, dt / 1400);
      M.comp = clamp(M.comp, M.tut ? 35 : 0, 100); M.susp = clamp(M.susp, 0, 100); M.gig = clamp(M.gig, 0, 100);
      if (!M.tut && M.comp <= 0) finish('explode');
    };
    const clock = () => { const m = 19 * 60 + 90 * (M.total ? M.done / M.total : 0) + M.clockOff; const h = Math.floor(m / 60), mm = Math.floor(m % 60); return `${h - 12}:${String(mm).padStart(2, '0')} p.m.`; };
    const skip = () => { if (M.phase === 'line' && M.line && M.line.left > 250) { M.line.left = 0; return true; } return false; };
    const finish = kind => {
      if (M.over) return;
      M.ending = kind || (M.susp < 45 && M.comp >= 30 ? 'grace' : 'interesting');
      M.over = true; M.phase = 'end'; M.beat = null; M.line = null; M.trig = null; M.nudge = null; M.holding = false;
      M.outro = OUTRO[M.ending].map(([who, t]) => ({ who, t }));
      emit('end', { ending: M.ending });
    };
    const result = () => {
      const e = M.ending, quit = e === 'quit', won = e === 'grace' || e === 'interesting', S = M.st;
      const grade = !won ? 'C' : e === 'interesting' ? 'B' : M.susp < 20 && M.comp >= 70 && !S.bursts && !S.wild ? 'S' : 'A';
      return { won, grade, ending: e, quit, composure: Math.round(M.comp), suspicion: Math.round(M.susp),
        answers: { sane: S.sane, odd: S.odd, wild: S.wild, silent: S.silent, covered: S.covered },
        passes: { right: S.pRight, wrong: S.pWrong, late: S.pLate, covered: S.pCovered }, bursts: S.bursts, covers: S.covers,
        nudges: { offered: S.nOffered, taken: S.nTaken }, secs: Math.round(M.t / 1000), difficulty: diff };
    };
    // tutorial: force a beat / trigger
    const force = (k, x) => {
      if (k === 'trig') return startTrig(x); // the line on screen stays
      M.queue = []; M.phase = 'beat'; M.line = null;
      if (k === 'q') startQ({ q: x, calm: true }); else if (k === 'pass') startPass({ who: 'mom', want: x });
    };
    if (!M.tut) next(); else M.phase = 'idle';
    return Object.assign(M, { step, hold, answer, pass, cover, nudge, skip, shown, clock, result, force, quit: () => finish('quit'), saneSlot: () => M.beat && M.beat.k === 'q' ? saneSlot(M.beat) : -1 });
  }

  /* ── drawn art ── */
  const DUCK = (x, y) => `<path d="M${x} ${y}c1.6-1.6 4-1.4 4.6.4.6-.6 1.8-.6 2 .3-.8.3-1.2.8-1.4 1.6-.4 1.6-2.4 2.2-4.2 1.6-1.6-.5-2.2-2.4-1-3.9z" fill="#f6d36b"/>`;
  const DAD = `<svg viewBox="0 0 200 240" class="ed-dadsvg" aria-hidden="true">
    <path d="M18 240c4-46 30-70 82-74 52 4 78 28 82 74z" fill="#2c2f3a"/><path d="M78 168l22 28 22-28-6-6H84z" fill="#f4f1ea"/>
    <g class="ed-tie"><path d="M93 176h14l5 52-12 12-12-12z" fill="#2f6b52"/>${DUCK(94, 186)}${DUCK(99, 200)}${DUCK(93, 214)}${DUCK(101, 226)}<path d="M93 176h14l-3 9h-8z" fill="#245641"/></g>
    <path d="M86 140h28v26c-6 6-22 6-28 0z" fill="#e9c3a3"/>
    <ellipse cx="100" cy="104" rx="38" ry="44" fill="#f0cdb0"/><path d="M62 98c-2-34 20-50 40-50s40 14 38 48c-6-14-14-22-38-22S68 82 62 98z" fill="#22181a"/>
    <g fill="none" stroke="#3a2a2a" stroke-width="2.4"><circle cx="85" cy="106" r="10"/><circle cx="115" cy="106" r="10"/><path d="M95 106h10"/></g>
    <circle cx="85" cy="107" r="2.6" fill="#2a1a1a"/><circle cx="115" cy="107" r="2.6" fill="#2a1a1a"/>
    <path class="ed-dadmouth" d="M90 128q10 6 20 0" stroke="#9a5a4a" stroke-width="2.6" fill="none" stroke-linecap="round"/></svg>`;
  const TABLE = `<svg viewBox="0 0 1000 300" preserveAspectRatio="none" class="ed-tablesvg" aria-hidden="true">
    <defs><linearGradient id="ed-wood" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6b3b28"/><stop offset="1" stop-color="#3b1d14"/></linearGradient>
    <linearGradient id="ed-cloth" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6efe6"/><stop offset="1" stop-color="#d9cbbb"/></linearGradient></defs>
    <path d="M120 10H880L1000 230H0z" fill="url(#ed-wood)"/><path d="M200 18H800L900 200H100z" fill="url(#ed-cloth)" opacity=".92"/>
    <path d="M0 230H1000V300H0z" fill="#2a130d"/></svg>`;
  const FISH = `<svg viewBox="0 0 240 110" class="ed-fishsvg" aria-hidden="true"><ellipse cx="120" cy="66" rx="112" ry="38" fill="#f4f1ea" stroke="#cfc3b4" stroke-width="3"/>
    <g class="ed-fishbody"><path d="M40 62c30-30 110-34 150-6l30-20-6 30 6 30-30-20c-40 28-120 22-150-14z" fill="#9aa6ad"/><path d="M70 50c30-12 80-12 110 4" stroke="#7d8a92" stroke-width="3" fill="none"/>
    <circle cx="66" cy="60" r="9" fill="#fff"/><circle class="ed-fisheye" cx="64" cy="60" r="4.5" fill="#1a1012"/><path class="ed-fishlid" d="M57 60a9 9 0 0 1 18 0z" fill="#9aa6ad" opacity="0"/>
    <path d="M44 68q6 4 12 0" stroke="#5c666c" stroke-width="2" fill="none"/></g></svg>`;
  const DOG = `<svg viewBox="0 0 80 60" class="ed-dog" aria-hidden="true"><path d="M10 50c0-16 10-26 30-26s30 10 30 26z" fill="#ff9ac8"/><path d="M14 44h52M18 36h44" stroke="#ff4f9e" stroke-width="3"/>
    <circle cx="40" cy="22" r="13" fill="#f4ece2"/><path d="M27 16l-6-10 12 6zM53 16l6-10-12 6z" fill="#f4ece2"/><circle cx="35" cy="21" r="2" fill="#1a1012"/><circle cx="45" cy="21" r="2" fill="#1a1012"/><circle cx="40" cy="26" r="1.8" fill="#1a1012"/></svg>`;
  const CLOCK = `<svg viewBox="0 0 60 60" class="ed-wallclock" aria-hidden="true"><circle cx="30" cy="30" r="27" fill="#f4ece2" stroke="#3a1d14" stroke-width="4"/><path class="ed-hh" d="M30 30V16" stroke="#1a1012" stroke-width="3.5" stroke-linecap="round"/><path class="ed-mh" d="M30 30V8" stroke="#1a1012" stroke-width="2" stroke-linecap="round"/><circle cx="30" cy="30" r="2.5" fill="#1a1012"/></svg>`;
  const DISH = (id, name) => {
    const c = { japchae: ['#c58a5a', '#8a5a3a'], kimchi: ['#e0533a', '#a8321e'], soy: ['#3a1d14', '#1a0a06'], rice: ['#fbf8f2', '#d8d0c4'], namul: ['#4f8a3a', '#2f5a22'], eggroll: ['#f4c84a', '#d49a2a'], radish: ['#e86a4a', '#f4e0d0'], galbi: ['#8a3a22', '#5a2010'] }[id] || ['#ccc', '#999'];
    return `<svg viewBox="0 0 80 50" aria-hidden="true"><ellipse cx="40" cy="30" rx="36" ry="16" fill="#f4f1ea" stroke="#bfb3a4" stroke-width="2"/><ellipse cx="40" cy="27" rx="26" ry="10" fill="${c[0]}"/><path d="M24 26q8-6 16 0t16 0" stroke="${c[1]}" stroke-width="3" fill="none"/></svg>`;
  };

  /* ── sounds (Web Audio; none at all when muted) ── */
  function sounds(on) {
    if (!on) { const nop = () => {}; return new Proxy({}, { get: () => nop }); }
    let ac = null, bus = null, hum = null, giggle = null;
    const ctx = () => {
      if (!ac) { try { ac = new (window.AudioContext || window.webkitAudioContext)(); bus = ac.createGain(); bus.gain.value = 0.8; bus.connect(ac.destination); } catch (e) { ac = null; } }
      return ac;
    };
    const tone = (f, len, type = 'sine', vol = 0.12, at = 0, slide) => {
      if (!ctx()) return; const t = ac.currentTime + at, o = ac.createOscillator(), g = ac.createGain();
      o.type = type; o.frequency.setValueAtTime(f, t); if (slide) o.frequency.exponentialRampToValueAtTime(slide, t + len);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t + len);
      o.connect(g); g.connect(bus); o.start(t); o.stop(t + len + 0.05);
    };
    const noise = (len, f, q, vol, at = 0, f2) => {
      if (!ctx()) return; const t = ac.currentTime + at, n = Math.floor(ac.sampleRate * len), buf = ac.createBuffer(1, n, ac.sampleRate), d = buf.getChannelData(0);
      for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
      const s = ac.createBufferSource(), bp = ac.createBiquadFilter(), g = ac.createGain();
      s.buffer = buf; bp.type = 'bandpass'; bp.frequency.setValueAtTime(f, t); if (f2) bp.frequency.exponentialRampToValueAtTime(f2, t + len); bp.Q.value = q;
      g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + len);
      s.connect(bp); bp.connect(g); g.connect(bus); s.start(t);
    };
    return {
      start() {
        if (!ctx() || hum) return;
        const o1 = ac.createOscillator(), o2 = ac.createOscillator(), g = ac.createGain(), lp = ac.createBiquadFilter();
        o1.type = 'sine'; o1.frequency.value = 98; o2.type = 'triangle'; o2.frequency.value = 147; lp.type = 'lowpass'; lp.frequency.value = 420;
        g.gain.value = 0.025; o1.connect(lp); o2.connect(lp); lp.connect(g); g.connect(bus); o1.start(); o2.start();
        const go = ac.createOscillator(), gg = ac.createGain(); go.type = 'triangle'; go.frequency.value = 520; gg.gain.value = 0; go.connect(gg); gg.connect(bus); go.start();
        hum = { o1, o2, g }; giggle = { o: go, g: gg };
      },
      high(h, gig) {
        if (!hum) return; const t = ac.currentTime;
        hum.o2.detune.setTargetAtTime(h * 40 * Math.sin(t * 0.7), t, 0.3);
        giggle.g.gain.setTargetAtTime(gig > 55 ? (gig - 55) / 45 * 0.035 : 0, t, 0.15);
        giggle.o.frequency.setTargetAtTime(480 + gig * 3 + Math.sin(t * 22) * 30, t, 0.05);
      },
      tick(back) { tone(back ? 1500 : 1900, 0.04, 'square', 0.025); },
      type() { noise(0.02, 3200, 2, 0.04); },
      sane() { tone(784, 0.18, 'sine', 0.1); tone(1047, 0.28, 'sine', 0.09, 0.08); },
      odd() { tone(330, 0.22, 'triangle', 0.1); },
      wild() { tone(500, 0.45, 'sawtooth', 0.06, 0, 140); },
      thunk() { tone(110, 0.2, 'sine', 0.2, 0, 60); noise(0.08, 300, 1, 0.1); },
      slide() { noise(0.25, 900, 1.2, 0.05, 0, 2400); },
      clink() { tone(2400, 0.25, 'sine', 0.06); tone(3150, 0.2, 'sine', 0.04, 0.02); },
      snort() { noise(0.18, 600, 3, 0.25, 0, 300); [0, 0.14, 0.27, 0.39].forEach((a, i) => tone(520 - i * 30, 0.1, 'triangle', 0.12, 0.2 + a)); },
      tap() { tone(180, 0.06, 'sine', 0.2); tone(180, 0.06, 'sine', 0.2, 0.16); },
      warm() { [523, 659, 784].forEach((f, i) => tone(f, 0.6, 'sine', 0.06, i * 0.05)); },
      warp() { tone(440, 1.2, 'sine', 0.05, 0, 330); },
      end(kind) { if (kind === 'explode') [0, 0.12, 0.24, 0.36, 0.5, 0.62, 0.74].forEach((a, i) => tone(600 - (i % 3) * 60, 0.1, 'triangle', 0.13, a)); else if (kind === 'grace') [523, 659, 784, 1047].forEach((f, i) => tone(f, 0.5, 'sine', 0.08, i * 0.12)); else { tone(392, 0.3, 'triangle', 0.08); tone(466, 0.4, 'triangle', 0.08, 0.2); } },
      pause(on) { try { if (ac) on ? ac.suspend() : ac.resume(); } catch (e) {} },
      close() { try { ac && ac.close(); } catch (e) {} ac = null; },
    };
  }

  // the shared first-time tutorial (tutorial.js + .css, loaded once from this folder)
  const tutLib = () => window.FemcTutorial ? Promise.resolve(window.FemcTutorial) : (window.FemcTutorialLoading ||= new Promise(ok => {
    const B = `${base()}assets/femc/game/minigames/tutorial`, l = document.createElement('link'), s = document.createElement('script');
    l.rel = 'stylesheet'; l.href = `${B}.css?v=1`; document.head.appendChild(l);
    s.src = `${B}.js?v=1`; s.onload = s.onerror = () => ok(window.FemcTutorial || null); document.head.appendChild(s);
  }));
  // a tiny built-in tutorial if tutorial.js can't load: info steps only (dim + arrow + bubble), Skip, remembered
  const TKEY = 'kg-femc-tutorials';
  const lite = {
    seen: id => { try { return !!(JSON.parse(localStorage.getItem(TKEY) || '{}') || {})[id]; } catch (e) { return false; } },
    mark: id => { try { const m = JSON.parse(localStorage.getItem(TKEY) || '{}') || {}; m[id] = 1; localStorage.setItem(TKEY, JSON.stringify(m)); } catch (e) {} },
    open: () => !!lite.cur, blocking: () => !!lite.cur,
    should: (id, opt) => opt === true ? true : opt === false ? false : !lite.seen(id),
    run(root, o) {
      return new Promise(fin => {
        const steps = o.steps || []; let i = 0;
        const el = document.createElement('div'); el.className = 'ed-lt';
        el.innerHTML = `<div class="ed-lt-b"><b>${esc(o.who || 'Solar')}</b><p></p><span><button type="button" data-lt="skip">Skip</button><button type="button" data-lt="next">Next</button></span></div><i class="ed-lt-arrow"></i>`;
        root.appendChild(el); lite.cur = el;
        const end = r => { root.querySelectorAll('.ed-spot').forEach(n => n.classList.remove('ed-spot')); el.remove(); lite.cur = null; window.removeEventListener('keydown', key, true); if (o.id) lite.mark(o.id); fin(r); };
        const show = () => {
          if (i >= steps.length) return end('done');
          const s = steps[i]; root.querySelectorAll('.ed-spot').forEach(n => n.classList.remove('ed-spot'));
          el.querySelector('p').innerHTML = esc(s.say).replace(/&lt;(\/?)b&gt;/g, '<$1b>');
          el.querySelector('[data-lt=next]').textContent = i === steps.length - 1 ? 'Let’s go' : 'Next';
          const t = typeof s.target === 'string' ? root.querySelector(s.target) : null, ar = el.querySelector('.ed-lt-arrow');
          if (t) { t.classList.add('ed-spot'); const r = t.getBoundingClientRect(); ar.hidden = false; ar.style.left = `${r.left + r.width / 2}px`; ar.style.top = `${Math.max(8, r.top - 30)}px`; } else ar.hidden = true;
        };
        const key = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); i++; show(); } else if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); end('skipped'); } };
        el.addEventListener('click', e => { const b = e.target.closest('[data-lt]'); if (!b) return; if (b.dataset.lt === 'skip') end('skipped'); else { i++; show(); } });
        window.addEventListener('keydown', key, true); show();
      });
    },
  };

  /* ── the game ── */
  let cur = null;
  function play(o = {}) {
    return new Promise(done => {
      const host = o.host || document.body;
      const diff = DIFF[o.difficulty] ? o.difficulty : 'normal';
      const GS = (window.FemcGame && window.FemcGame.settings && window.FemcGame.settings()) || {};
      const still = o.still ?? reduced.matches, calm = o.calm ?? !!GS.calm, perf = o.perf ?? !!GS.perf;
      const K = sounds(!o.mute);
      let M = model({ difficulty: diff, seed: o.seed, tut: true }); // the practice table until the real dinner starts
      let begun = false, paused = false, ended = false, raf = 0, last = 0, tutRes = 'seen', tp = null, cursor = 0, tickAcc = 0, typeAcc = 0, lastSay = null;
      const timers = new Set();
      const later = (fn, ms) => { const id = setTimeout(() => { timers.delete(id); fn(); }, ms); timers.add(id); return id; };
      const el = document.createElement('div');
      el.className = 'mg-ed' + (still ? ' still' : '') + (calm ? ' calm' : '') + (perf ? ' perf' : '');
      el.setAttribute('role', 'application'); el.setAttribute('aria-label', 'Too Strong');
      el.innerHTML = `
        <div class="ed-scene">
          <div class="ed-room"><i class="ed-window"></i><i class="ed-lamp"></i>${CLOCK}</div>
          ${o.bg ? `<img class="ed-bg" src="${BG(o.bg)}" alt="" onerror="this.remove()">` : ''}<img class="ed-bg" src="${ART('room')}" alt="" onerror="this.remove()">
          <div class="ed-people">
            <div class="ed-p ed-dad" data-who="dad">${DAD}<img src="${ART('dad')}" alt="" onerror="this.remove()"><b class="ed-tag">Mr. Yang</b><q class="ed-aside" hidden></q></div>
            <div class="ed-p ed-mom" data-who="mom"><img class="ed-face" src="${FACE('jwmom-hoax', 'neutral')}" alt="" onerror="this.remove()"><b class="ed-tag">Mrs. Yang</b><q class="ed-aside" hidden></q></div>
            <div class="ed-p ed-jw" data-who="jungwon"><img class="ed-face" src="${FACE('jungwon-hoax', 'neutral')}" alt="" onerror="this.remove()"><b class="ed-tag">Jungwon</b><q class="ed-aside" hidden></q></div>
          </div>
          <div class="ed-table">${TABLE}<div class="ed-fish">${FISH}</div><div class="ed-dishes"></div></div>
          <div class="ed-floor">${DOG}</div>
          <p class="ed-trig" hidden></p>
          <div class="ed-haze"></div><div class="ed-vig"></div>
        </div>
        <header class="ed-hud">
          <b class="ed-logo">TOO STRONG</b><span class="ed-course"></span><span class="ed-clock"></span>
          <div class="ed-meters"><label class="ed-m ed-comp"><small>Composure</small><span><i></i></span></label><label class="ed-m ed-susp"><small>Suspicion</small><span><i></i></span></label></div>
          <button type="button" class="ed-pbtn" aria-label="Pause">II</button>
        </header>
        <aside class="ed-gig"><img class="ed-solar" src="${FACE('solar-hoax', 'neutral')}" alt="" onerror="this.remove()"><span class="ed-gigm" aria-label="Giggle"><i></i></span><small>Giggle</small>
          <button type="button" class="ed-hold">Straight face <kbd>Space</kbd></button></aside>
        <div class="ed-jwt"><button type="button" class="ed-nudge" hidden>His foot taps yours <kbd>N</kbd></button><button type="button" class="ed-cover">Look at Jungwon <kbd>C</kbd> <em></em></button></div>
        <div class="ed-box"><b class="ed-who"></b><p class="ed-say"></p><div class="ed-opts"></div><i class="ed-timer"><u></u></i></div>
        <div class="ed-flash"></div><p class="ed-warpcap" hidden></p>
        <div class="mg-pause" hidden><b>Paused</b><button type="button" data-p="resume">Resume</button><button type="button" data-p="howto">How to play</button><button type="button" data-p="quit">Quit</button></div>
        <div class="mg-end" hidden></div>`;
      host.appendChild(el);
      const $ = s => el.querySelector(s);
      const scene = $('.ed-scene'), people = $('.ed-people'), dishesEl = $('.ed-dishes'), optsEl = $('.ed-opts'), sayEl = $('.ed-say'), whoEl = $('.ed-who');
      const set = (node, k, v) => { if (node && node['_' + k] !== v) { node['_' + k] = v; if (k === 'text') node.textContent = v; else if (k === 'html') node.innerHTML = v; else node.style.setProperty(k, v); } };
      const face = (sel, who, f) => { const i = $(sel); if (i && i._f !== f) { i._f = f; i.src = FACE(who, f); } };
      cur = { get M() { return M; }, act: (n, a) => act(n, a) };

      /* drawing */
      let qKey = null, dKey = '';
      const paintOpts = () => {
        const b = M.beat;
        if (!b || b.stage !== 'pick' || b.k !== 'q') { if (qKey !== null) { optsEl.innerHTML = ''; qKey = null; } return; }
        if (qKey !== b) { qKey = b; optsEl.innerHTML = b.slots.map((_, s) => `<button type="button" data-s="${s}"><kbd>${s + 1}</kbd><span></span></button>`).join(''); optsEl.dataset.n = b.slots.length; }
        optsEl.querySelectorAll('[data-s]').forEach(btn => {
          const sh = M.shown(+btn.dataset.s); if (!sh) return;
          set(btn.lastChild, 'text', sh.t);
          const c = (sh.think ? ' think' : '') + (sh.scr ? ' scr' : '') + (sh.hint ? ' hint' : '');
          if (btn._c !== c) { btn._c = c; btn.className = c.trim(); }
        });
      };
      const paintDishes = () => {
        const b = M.beat;
        if (!b || b.k !== 'pass') { if (dKey) { dishesEl.innerHTML = ''; dKey = ''; } return; }
        const key = b.dishes.map(d => d.uid).join(',');
        if (key !== dKey) {
          dKey = key;
          dishesEl.innerHTML = b.dishes.map(d => `<button type="button" class="ed-dish${d.ghost ? ' ghost' : ''}" data-uid="${d.uid}" aria-label="${esc(d.name)}">${DISH(d.id, d.name)}<span>${esc(d.name)}</span><kbd></kbd></button>`).join('');
        }
        const order = [...b.dishes].sort((a, c) => a.x - c.x);
        cursor = clamp(cursor, 0, order.length - 1);
        order.forEach((d, i) => {
          const btn = dishesEl.querySelector(`[data-uid="${d.uid}"]`); if (!btn) return;
          set(btn, 'left', `${(6 + d.x * 88).toFixed(2)}%`);
          set(btn.lastChild, 'text', i < 9 ? String(i + 1) : '');
          btn.classList.toggle('sel', i === cursor);
        });
      };
      const momFace = () => M.ending === 'explode' ? 'surprised' : M.ending === 'grace' ? 'happy' : M.susp > 70 ? 'serious' : M.susp > 40 ? 'sad' : 'neutral';
      const paint = () => {
        const b = M.beat;
        // the box: a line, a question typing, or the answers
        let who = '', t = '';
        if (M.line) { who = M.line.who; t = M.line.t; }
        else if (b) { who = b.who; t = b.ask.slice(0, Math.floor(b.typed)); }
        set(whoEl, 'text', NAMES[who] ?? ''); set(sayEl, 'text', t);
        el.dataset.who = who || 'none';
        el.classList.toggle('slowtext', !!(b && b.slow && b.stage === 'ask'));
        paintOpts(); paintDishes();
        const tm = b && b.stage === 'pick' && !M.tut ? clamp(b.left / b.win) : (b && M.tut ? 1 : 0);
        set($('.ed-timer u'), 'width', `${(tm * 100).toFixed(1)}%`);
        $('.ed-timer').hidden = !b;
        // meters
        set($('.ed-comp i'), 'width', `${M.comp.toFixed(1)}%`); set($('.ed-susp i'), 'width', `${M.susp.toFixed(1)}%`);
        set($('.ed-gigm i'), 'height', `${M.gig.toFixed(1)}%`);
        el.classList.toggle('low', M.comp < 30); el.classList.toggle('hot', M.susp > 60); el.classList.toggle('holding', M.holding); el.classList.toggle('giggly', M.gig > 70);
        set($('.ed-course'), 'text', M.tut ? 'Practice' : M.course); set($('.ed-clock'), 'text', M.tut ? '' : M.clock());
        el.classList.toggle('rev', M.clockRev > 0);
        const mins = 19 * 60 + 90 * (M.total ? M.done / M.total : 0) + M.clockOff;
        set($('.ed-mh'), 'transform', `rotate(${(mins % 60) * 6}deg)`); set($('.ed-hh'), 'transform', `rotate(${(mins / 60) * 30}deg)`);
        // Jungwon
        $('.ed-nudge').hidden = !M.nudge;
        const cb = $('.ed-cover'); set(cb.querySelector('em'), 'text', '●'.repeat(M.covers) + '○'.repeat(Math.max(0, M.D.covers - M.covers)));
        cb.disabled = M.covers <= 0 || M.over || M.tut;
        // giggles
        const tr = $('.ed-trig');
        if (M.trig) { tr.hidden = false; set(tr, 'text', M.trig.cap); tr.dataset.at = M.trig.at; } else tr.hidden = true;
        scene.dataset.trig = M.trig ? M.trig.id : '';
        // asides
        el.querySelectorAll('.ed-aside').forEach(q => { const on = M.aside && M.aside.who === q.parentNode.dataset.who; q.hidden = !on; if (on) set(q, 'text', M.aside.t); });
        // faces
        face('.ed-mom .ed-face', 'jwmom-hoax', momFace());
        face('.ed-jw .ed-face', 'jungwon-hoax', M.ending === 'explode' ? 'flustered' : M.over ? 'happy' : M.susp > 60 ? 'serious' : M.gig > 70 ? 'flustered' : 'neutral');
        face('.ed-solar', 'solar-hoax', M.gig > 85 ? 'flustered' : M.gig > 50 ? 'happy' : M.holding ? 'serious' : M.comp < 30 ? 'sad' : 'neutral');
        // time: the table, the haze
        scene.style.setProperty('--high', (still ? 0 : M.high).toFixed(3));
        scene.style.setProperty('--long', (still ? M.long * 0.25 : M.long).toFixed(3));
        set(el, '--gig', (M.gig / 100).toFixed(3));
      };

      /* one-shots: sounds and short visual cues */
      const warpCap = t => { const c = $('.ed-warpcap'); c.textContent = t; c.hidden = false; later(() => { c.hidden = true; }, 2600); };
      const flash = cls => { el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); later(() => el.classList.remove(cls), 900); };
      const events = () => {
        for (const e of M.ev.splice(0)) {
          if (e.k === 'answer') { K[e.kind === 'sane' ? 'sane' : e.kind === 'wild' ? 'wild' : e.kind === 'odd' ? 'odd' : 'thunk'](); if (e.kind === 'wild') flash('oops'); }
          else if (e.k === 'pass') { if (e.ok) { K.slide(); K.clink(); } else K.thunk(); }
          else if (e.k === 'burst') { K.snort(); if (!calm) flash('burst'); else flash('oops'); }
          else if (e.k === 'nudge') K.tap();
          else if (e.k === 'nudged') { K.warm(); flash('nudged'); }
          else if (e.k === 'cover') K.warm();
          else if (e.k === 'multiply') { if (!still) flash('wobble'); }
          else if (e.k === 'warp') {
            K.warp();
            if (e.id === 'melt') { if (still) warpCap('(Their faces are… doing something. Then they aren’t.)'); else { people.classList.add('melt'); later(() => people.classList.remove('melt'), 2600); } }
            if (e.id === 'clock') warpCap('(The clock is going backwards. That’s fine.)');
            if (e.id === 'long') warpCap('(The table is longer than it was. Everyone is very far away.)');
            if (e.id === 'slowtext') warpCap('(This sentence is taking a year.)');
          }
          else if (e.k === 'end') endGame(e.ending);
        }
      };

      /* the loop */
      const tick = now => {
        raf = 0; if (!el.isConnected || ended) return;
        const dt = Math.min(100, now - (last || now)); last = now;
        if (!paused && !lite.cur && !(window.FemcTutorial && window.FemcTutorial.blocking && window.FemcTutorial.blocking() && !tp)) {
          M.step(dt);
          if (!M.tut) { tickAcc += dt; if (tickAcc > 1000) { tickAcc = 0; K.tick(M.clockRev > 0); } }
          const b = M.beat; if (b && b.stage === 'ask') { typeAcc += dt; if (typeAcc > Math.max(60, b.typeMs * 2)) { typeAcc = 0; K.type(); } }
          K.high(M.high, M.gig);
          if (tp) tp.check();
        }
        events(); paint();
        raf = requestAnimationFrame(tick);
      };

      /* input */
      const act = (n, a) => {
        if (!begun || paused || M.over && n !== 'skip') return false;
        if (n === 'answer') return M.answer(a);
        if (n === 'pass') return M.pass(a);
        if (n === 'cover') return !M.tut && M.cover();
        if (n === 'nudge') return M.nudge();
        if (n === 'hold') { M.hold(a); return true; }
        if (n === 'skip') return M.skip();
        return false;
      };
      const passOrder = () => M.beat && M.beat.k === 'pass' ? [...M.beat.dishes].sort((a, c) => a.x - c.x) : [];
      const pause = on => {
        if (ended || !begun) return;
        paused = on; $('.mg-pause').hidden = !on; K.pause(on); M.hold(false);
        if (on) $('.mg-pause button').focus(); else last = 0;
      };
      const key = e => {
        if (!el.isConnected || ended) return;
        e.stopPropagation();
        if (!begun) return;
        const T = window.FemcTutorial || null;
        if ((T && T.open && T.open() && (e.key === 'Escape' || (T.blocking && T.blocking()))) || lite.cur) return; // the tutorial has the keys
        if (e.key === 'Escape') { e.preventDefault(); pause(!paused); return; }
        if (paused) return;
        const k = e.key;
        if (k === ' ' || e.code === 'Space') { e.preventDefault(); if (!e.repeat) act('hold', true); return; }
        if (/^[1-9]$/.test(k)) { e.preventDefault(); const i = +k - 1; if (M.beat && M.beat.k === 'pass') { const d = passOrder()[i]; if (d) act('pass', d.uid); } else act('answer', i); return; }
        if (k === 'ArrowLeft' || k === 'ArrowRight') { e.preventDefault(); cursor += k === 'ArrowLeft' ? -1 : 1; return; }
        if (k === 'Enter') { e.preventDefault(); if (M.beat && M.beat.k === 'pass') { const d = passOrder()[cursor]; if (d) act('pass', d.uid); } else act('skip'); return; }
        if (k === 'c' || k === 'C') { act('cover'); return; }
        if (k === 'n' || k === 'N') { act('nudge'); return; }
      };
      const keyUp = e => { if (e.key === ' ' || e.code === 'Space') { e.stopPropagation(); act('hold', false); } };
      const blur = () => act('hold', false);
      const hb = $('.ed-hold');
      hb.addEventListener('pointerdown', e => { e.preventDefault(); try { hb.setPointerCapture(e.pointerId); } catch (x) {} act('hold', true); });
      ['pointerup', 'pointercancel', 'lostpointercapture'].forEach(n => hb.addEventListener(n, () => act('hold', false)));
      el.addEventListener('click', e => {
        const t = e.target;
        const s = t.closest('.ed-opts [data-s]'); if (s) { act('answer', +s.dataset.s); return; }
        const d = t.closest('.ed-dish'); if (d) { act('pass', +d.dataset.uid); return; }
        if (t.closest('.ed-cover')) { act('cover'); return; }
        if (t.closest('.ed-nudge')) { act('nudge'); return; }
        if (t.closest('.ed-pbtn')) { pause(true); return; }
        if (t.closest('.ed-box')) act('skip');
      });
      el.addEventListener('contextmenu', e => e.preventDefault());
      $('.mg-pause').addEventListener('click', e => { const p = e.target.closest('[data-p]'); if (!p) return; if (p.dataset.p === 'resume') pause(false); else if (p.dataset.p === 'howto') howTo(); else { pause(false); M.quit(); } });
      window.addEventListener('keydown', key, true); window.addEventListener('keyup', keyUp, true); window.addEventListener('blur', blur);

      /* the end */
      const endGame = ending => {
        const res = Object.assign(M.result(), { tutorial: tutRes });
        K.end(ending);
        el.classList.add(ending === 'explode' || ending === 'quit' ? 'lost' : 'won', 'end-' + ending);
        const lines = M.outro; let i = 0;
        const card = () => {
          if (!el.isConnected) return;
          ended = true; cancelAnimationFrame(raf); raf = 0;
          const end = $('.mg-end'); end.hidden = false;
          const head = { grace: 'Survived, with grace.', interesting: 'Survived. They think you’re “interesting.”', explode: 'The giggle wins.', quit: 'You excuse yourself from the table.' }[ending];
          const say = { grace: 'Not one person at that table knows. Probably. Jungwon definitely knows.', interesting: 'Mr. Yang wants you back. Mrs. Yang wants to know what you’re like on a normal day. So do you.', explode: 'The fish saw everything.', quit: 'The bathroom down the hall has a very nice soap. You stay with it a while.' }[ending];
          const A = res.answers, P = res.passes;
          end.innerHTML = `<p class="ed-end-head">${esc(head)}</p><b class="mg-grade">${res.grade}</b>
            <dl><dt>Composure</dt><dd>${res.composure}%</dd><dt>Suspicion</dt><dd>${res.suspicion}%</dd><dt>Sane answers</dt><dd>${A.sane} / ${A.sane + A.odd + A.wild + A.silent + A.covered}</dd>
            <dt>Said out loud</dt><dd>${A.wild}</dd><dt>Dishes passed</dt><dd>${P.right} / ${P.right + P.wrong + P.late + P.covered}</dd><dt>Giggle bursts</dt><dd>${res.bursts}</dd><dt>Jungwon covered</dt><dd>${res.covers}</dd></dl>
            <p class="mg-end-say">${esc(say)}</p><button type="button">Continue</button>`;
          const btn = end.querySelector('button'); btn.focus();
          btn.onclick = () => { cleanup(); o.onDone?.(res); done(res); };
        };
        const nextLine = () => {
          if (!el.isConnected) return;
          if (i >= lines.length) return card();
          const L = lines[i++]; M.line = { who: L.who, t: L.t, left: 0 }; paint();
          later(nextLine, clamp(1200 + L.t.length * 34, 1800, 4200));
        };
        lastSay = nextLine;
        if (ending === 'quit') card(); else later(nextLine, 500);
      };
      const cleanup = () => {
        ended = true; cancelAnimationFrame(raf); timers.forEach(clearTimeout); timers.clear();
        window.removeEventListener('keydown', key, true); window.removeEventListener('keyup', keyUp, true); window.removeEventListener('blur', blur); window.removeEventListener('keydown', skipT, true);
        K.close(); el.remove(); if (cur && cur.M === M) cur = null;
      };
      // outro lines skip on a click
      el.addEventListener('click', e => { if (M.over && !ended && lastSay && !e.target.closest('.mg-end')) { timers.forEach(clearTimeout); timers.clear(); lastSay(); } });

      /* the first-time tutorial: a practice table (M.tut), each thing done once */
      const SOLAR = FACE('solar-hoax', 'neutral');
      const TUTQ = { who: 'mom', ask: 'Solar. Do you take your tea with milk?', s: 'Just a little, thank you.', o: ['Milk. Tea. Both. Yes.', 'I take it with me.'], w: 'tea is just leaf soup' };
      const practice = (kind, check) => new Promise(ok => { tp = { kind, check: () => { if (check()) { tp = null; ok(); } } }; });
      const tutSteps = replay => [
        { target: null, say: 'Dinner at Jungwon’s. His parents. And the brownie from this afternoon has just decided to start working. Let’s practise first.' },
        { target: '.ed-meters', say: '<b>Composure</b> is you holding it together. <b>Suspicion</b> is his parents noticing. Keep the first up and the second down until the fruit.' },
        { target: '.ed-box', before: () => { if (!replay) { const n = M.done; M.force('q', TUTQ); tp = null; tutDone = () => M.done > n; } },
          say: 'His mother asks things. Pick the <b>sane</b> answer (click it, or 1-3). Later the answers move, swap letters, and sometimes say what you’re actually thinking. Read before you click.',
          wait: replay ? 'click' : () => practice('answer', () => tutDone()) },
        { target: '.ed-gig', before: () => { if (!replay) M.force('trig', 'fish'); },
          say: 'Uh oh. The fish. <b>Hold Space</b> (or hold Straight face) until the Giggle meter is down. Not forever, though: a strained face looks strange too.',
          wait: replay ? 'click' : () => practice('hold', () => !M.trig) },
        { target: '.ed-table', before: () => { if (!replay) { const n = M.done; M.force('pass', 'kimchi'); tutDone = () => M.done > n; } },
          say: '“Would you pass the kimchi?” Click the real dish (or ← / → and Enter, or its number). Copies that shimmer aren’t there.',
          wait: replay ? 'click' : () => practice('pass', () => tutDone()) },
        { target: '.ed-jwt', say: 'Jungwon is on your side. When <b>his foot taps yours</b>, press N (or tap it): the sane answer glows and holds still. <b>Look at Jungwon</b> (C) and he covers for you, a few times a dinner.' },
        { target: null, say: 'Esc pauses (How to play is in there). The pears come last. Get to the pears.' },
      ];
      let tutDone = () => true;
      const runTut = (steps, extra) => tutLib().then(T => (T || lite).run(el, Object.assign({ steps, who: 'Solar', face: SOLAR, calm, perf }, extra)));
      const howTo = () => {
        if (!paused || ended) return;
        $('.mg-pause').hidden = true;
        runTut(tutSteps(true), { replay: true }).then(() => { if (paused && !ended) { $('.mg-pause').hidden = false; $('.mg-pause button').focus(); } });
      };
      const startDinner = () => {
        if (!el.isConnected || ended) return;
        tp = null; el.classList.remove('tut'); M.hold(false);
        M = model({ difficulty: diff, seed: o.seed }); qKey = null; dKey = ''; optsEl.innerHTML = ''; dishesEl.innerHTML = '';
        K.start(); last = 0;
      };

      /* the title card: held 1.8 s (click / any key skips) */
      const note = ['Comedy', calm ? 'Flashes reduced' : 'Some flashing', still ? 'Reduced motion' : '', o.mute ? 'Sound off' : 'Best with sound'].filter(Boolean).join(' · ');
      const tt = document.createElement('div'); tt.className = 'ed-title';
      tt.innerHTML = `<img src="${ART('title')}" alt="" onerror="this.remove()"><b>TOO STRONG</b><small>Dinner at the Yangs’. Somebody’s brownie kicked in an hour late.</small><p class="ed-note">${esc(note)}</p>`;
      el.appendChild(tt);
      const tutP = o.tutorial === false ? Promise.resolve(null) : tutLib(); // loads during the title card
      const begin = () => {
        if (begun || !el.isConnected) return; begun = true; window.removeEventListener('keydown', skipT, true);
        tt.classList.add('out'); later(() => tt.remove(), 400);
        raf = requestAnimationFrame(tick);
        tutP.then(T => {
          const L = T || lite;
          if (o.tutorial === false || !L.should('edible', o.tutorial)) return startDinner();
          el.classList.add('tut');
          L.run(el, { id: 'edible', steps: tutSteps(false), who: 'Solar', face: SOLAR, calm, perf }).then(r => { tutRes = r; startDinner(); });
        });
      };
      const skipT = e => { if (e.key !== 'Escape') { e.preventDefault(); e.stopPropagation(); begin(); } };
      tt.onclick = begin; window.addEventListener('keydown', skipT, true); later(begin, 1800);
      paint();
    });
  }
  return { play, model, DIFF, QUESTIONS, TRIGS, state: () => cur };
})();
