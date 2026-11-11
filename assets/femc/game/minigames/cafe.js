/* FEMC epilogue minigame: Yeobo's, the winter shift (Nov 11 2026). A DEMO: not in the story (try it at
   mockups/minigames/index.html once the main session adds its card). HOAX, winter break: Solar helps Sunoo at his grandmother's
   café in Hanlim High's neighbourhood. Kat: a cooking game that's more MANAGEMENT style, so it feels nothing like the dumplings
   (Diner Dash / Overcooked-lite / Good Pizza Great Pizza): you juggle a counter of customers, four stations and a teammate,
   not one dish's motions. Cameos only; nothing of the plot.

   FemcCafe.play({ host, mute, difficulty, seed, bg, nightBg, still, calm, perf, onDone }) -> Promise<result>
     host        element to draw into (default document.body; a full-screen overlay is added inside it)
     mute        no sound at all (no AudioContext is made; every sound also has something on screen)
     difficulty  'easy' | 'normal' | 'hard' (default 'normal'): customer patience x1.35 / 1 / 0.72; rush sizes 5-6-8 / 6-8-10 /
                 7-10-12; extras asked for 20 / 28 / 36% of the time; Sunoo works x1.25 / 1 / 0.85 as fast and drifts into a
                 chat every 18-28 / 14-24 / 11-19 s
     seed        a number: the same customers, orders and events every time (tests); default random
     bg          the café picture under assets/femc/bg/ (default 'epi-h-yeobos'; rushes 1-2), nightBg (default 'epi-h-yeobos-night';
                 rush 3). A drawn warm café shows if either is missing
     still       force reduced motion (default: prefers-reduced-motion)
     calm, perf  Reduce flashes / Performance; default: the game's settings (FemcGame.settings().calm / .perf), else off
     onDone      called with the result too
   FemcCafe.shift(opts) -> the model without any DOM (same rules; tests drive it: tick(dt), take, start, act, serve, plate, ...)
   result = { won, grade: 'S' | 'A' | 'B' | 'C', quit, score, served, left, customers, tips, stars, fiveStars, burnt, wasted,
              rushes: [{ served, left, tips, event }], upgrades: [ids], specials: [[a, b] per rush], hurried, charmed,
              verdict (Halmeoni's line), difficulty }
     served / left / customers = customers fed / walked out / came in; tips in won; stars = the average of the served (1-5,
     one decimal); burnt = things that burnt; wasted = things binned or left on the pass when a rush ended
   Grade: S 90%+ served and 4.3+ stars; A 75%+ and 3.6+; B half served; else C. won = not C and not quit.

   How it plays (a short shift in three rushes, about 4-6 minutes):
     The counter    four spots; more customers wait at the door (they lose patience slower). Each has a patience bar.
                    Click / tap a customer who's ready to order to take it (keys 1-4); they wait for their order, then pay.
     Stations       the menu (left): click an item (or its key) to start it at its station.
                      kettle (2 spots)    hot chocolate H, yuzu tea Y
                      espresso (1)        americano A
                      griddle (2, +2)     hotteok O (flip it once, in the FLIP window), street toast T
                      fridge              sikhye S (ladled straight onto the pass)
                      board (1)           kimbap K (tap it four times to slice)
                    A heated thing has a ring: take it off (click the spot / Space) in the pink zone for the best; early is
                    pale, late is stewed, and past the ring it burns. Done things go on the pass (4 spots). Hot things
                    cool on the pass (a cold one is worth less), so don't start too early either.
     Plating        an order may want its extra (+ cream, + honey, + extra shot, + pine nuts, + seeds, + sugar, + sesame oil):
                    drag the item to Plating (or select it and press P) for a second. Bin (B) throws a thing away.
     Serving        drag an item from the pass onto its customer, or select it (click / Z X C V) and click the customer
                    (or 1-4); clicking a waiting customer with nothing selected hands over the first thing that fits.
     Register       a fed customer pays: click them or Ring up (R). Their tip follows their stars (quality, how long they
                    waited, the extras) and the tip jar.
     Sunoo          your teammate. Give him a job (Q griddle: starts, flips and takes hotteok and toast; W cold: makes
                    sikhye and kimbap; E register; D orders: takes orders). He drifts into chatting with a customer now and
                    then (that customer's patience goes up, his job stops): Hurry (G) sends him back. Charm (F, then a
                    customer): he leaves his job for a few seconds to win over a grumpy one (their patience refills).
     Halmeoni       drops in once a rush: she inspects, adds an extra to someone's order, or orders her own (her way).
     One event a rush (a different one each): a spilled drink (a puddle: mop it, M; customers fidget and plating is
                    blocked), a big group order (one card, four or five things, a big tip), a big white dog at the window
                    (everyone's patience stops, Sunoo leaves his job; Shoo, M, ends it), a power flicker (the heat stops;
                    hit the breaker, M).
     Between rushes spend tips on upgrades (a second griddle, a faster kettle, the tip jar sign, the radiator, a warming
                    lamp, Sunoo's name tag), pick the next rush's two specials (asked for more often, +₩300 tip each) and
                    Sunoo's starting job. Enter opens the doors.
   Keys: 1-4 customers · H Y A O T S K start · Space the most urgent station · Z X C V the pass · P plate · B bin · R ring up ·
   Q W E D Sunoo's job · G hurry · F charm · M the event · Esc pause (Resume / Quit). Mouse and touch do everything.

   Art (optional, art/minigames/cafe/; each falls back to a drawn stand-in): title (the title card, held 1.8 s, click / a key
   skips; a drawn card without it), counter (behind the stations), item-cocoa / -yuzu / -americano / -sikhye / -hotteok /
   -toast / -kimbap (the item pictures; the extras and burnt state are still drawn over them), dog (the window event),
   stamp-s / -a / -b / -c (the grade on the end card). Faces are the HOAX scene portraits (portraits/<id>-hoax/); the
   neighbourhood regulars have none and get a drawn badge.
   Sounds: Web Audio, made here, no files. Reduced motion: no shakes, bobs or steam. Pink and black chrome; the café is warm. */
window.FemcCafe = (() => {
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const base = () => (window.FemcGame && window.FemcGame.base) || (typeof document !== 'undefined' && document.querySelector && document.querySelector('script[src*="minigames/cafe"]')?.src.split('assets/')[0]) || '';
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const won = n => '₩' + Math.round(n).toLocaleString('en-US');
  const mulberry = s => () => { s |= 0; s = s + 0x6D2B79F5 | 0; let t = Math.imul(s ^ s >>> 15, 1 | s); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };

  /* ── the menu ── st = station; hot things cool on the pass; time = seconds to the middle of the pink zone */
  const ITEMS = {
    cocoa:     { name: 'Hot chocolate', st: 'kettle',   hot: true,  price: 4500, extra: 'cream',  ex: 'cream',     key: 'h', time: 5 },
    yuzu:      { name: 'Yuzu tea',      st: 'kettle',   hot: true,  price: 4000, extra: 'honey',  ex: 'honey',     key: 'y', time: 5 },
    americano: { name: 'Americano',     st: 'espresso', hot: true,  price: 3500, extra: 'shot',   ex: 'extra shot', key: 'a', time: 4 },
    hotteok:   { name: 'Hotteok',       st: 'griddle',  hot: true,  price: 2500, extra: 'seeds',  ex: 'seeds',     key: 'o', time: 6, flip: true },
    toast:     { name: 'Street toast',  st: 'griddle',  hot: true,  price: 4000, extra: 'sugar',  ex: 'sugar',     key: 't', time: 4.5 },
    sikhye:    { name: 'Sikhye',        st: 'fridge',   hot: false, price: 3000, extra: 'pine',   ex: 'pine nuts', key: 's', time: 0 },
    kimbap:    { name: 'Kimbap',        st: 'board',    hot: false, price: 3500, extra: 'sesame', ex: 'sesame oil', key: 'k', time: 0 },
  };
  const TYPES = Object.keys(ITEMS);
  const CUTS = 4;          // kimbap slices
  const PASS = 4;          // pass spots
  const SPOTS = 4;         // counter spots
  const ZONE = { ok: 0.65, good: 0.85, top: 1.15, late: 1.4, cap: 1.8 };   // fractions of an item's time
  const FLIP = [0.35, 0.6];
  const DIFF = {
    easy:   { pat: 1.35, size: [5, 6, 8],  win: [70, 80, 90], extra: 0.2,  sunoo: 1.25, chat: [18, 28] },
    normal: { pat: 1,    size: [6, 8, 10], win: [70, 85, 95], extra: 0.28, sunoo: 1,    chat: [14, 24] },
    hard:   { pat: 0.72, size: [7, 10, 12], win: [70, 85, 95], extra: 0.36, sunoo: 0.85, chat: [11, 19] },
  };
  const UPGRADES = [
    { id: 'griddle2', name: 'A second griddle', cost: 6000, note: 'Two more spots on the griddle. Halmeoni had one in the back the whole time.' },
    { id: 'kettle',   name: 'Faster kettle',    cost: 4500, note: 'Kettle and espresso a third faster. Sunoo descaled it with vinegar and regret.' },
    { id: 'jar',      name: 'Tip jar sign',     cost: 3000, note: 'Tips +20%. Sunoo letters it by hand. There are hearts.' },
    { id: 'radiator', name: 'Bleed the radiator', cost: 4000, note: 'Customers wait 12% longer. The draft from the door stops winning.' },
    { id: 'lamp',     name: 'Warming lamp',     cost: 3500, note: 'Hot things on the pass cool half as fast.' },
    { id: 'tag',      name: "Sunoo's name tag", cost: 2500, note: "He chats less. He says it's because now everyone already knows his name." },
  ];
  const EVENTS = { spill: 'A spilled drink', group: 'A big group order', dog: 'A dog at the window', flicker: 'A power flicker' };
  const TASKS = { griddle: 'Griddle', cold: 'Cold things', register: 'Register', orders: 'Orders' };
  const TASK_KEYS = { q: 'griddle', w: 'cold', e: 'register', d: 'orders' };
  const RUSH_NAME = ['after school', 'dusk', 'after dark'];

  /* ── who comes in ── face = portrait folder (none = a drawn badge); likes weigh the first thing they order */
  const ROSTER = [
    { id: 'jungwon', name: 'Jungwon', face: 'jungwon-hoax', likes: ['americano', 'toast'], say: ["An americano, please. And— is that toast? Fine. One toast. For the record, I did eat today.", 'Thank you. That was very efficient.', "I'll come back when it's quieter. That's not a complaint."] },
    { id: 'jake', name: 'Jake', face: 'jake-hoax', likes: ['hotteok', 'cocoa'], say: ["One hotteok! Hot-tteok. Because it's hot. Sunoo, she didn't laugh.", "Sol, you're a lifesaver. A hotteok-saver.", "Okay, I'm going to go cry in the car. Kidding! Mostly!"] },
    { id: 'niki', name: 'Niki', face: 'niki-hoax', likes: ['cocoa', 'hotteok'], say: ["Hot chocolate. The big one. Don't tell Heeseung.", 'W café. W service.', "bruh. I'm going to the convenience store."] },
    { id: 'heeseung', name: 'Heeseung', face: 'heeseung-hoax', likes: ['kimbap', 'toast'], say: ["Kimbap, and a toast to go. The toast is for Jungwon. He'll say he's not hungry.", "Thank you. I'll make sure he finishes it.", "I'll grab something on the way. It's okay, Sol."] },
    { id: 'jay', name: 'Jay', face: 'jay-hoax', likes: ['americano', 'sikhye'], say: ["Americano. Whatever's fastest. Practice in twenty.", 'Bro. Perfect.', "Can't wait, I've got practice. Next time."] },
    { id: 'sunghoon', name: 'Sunghoon', face: 'sunghoon-hoax', likes: ['yuzu', 'toast'], say: ["Yuzu tea, please. In a pretty cup, if Sunoo's hiding any.", 'The prince approves.', 'Sunghoon forgives you. Eventually.'] },
    { id: 'cherry', name: 'Cherry', face: 'cherry-hoax', likes: ['sikhye', 'cocoa'], say: ["Sikhye, babe. Make it cute or I'm leaving a one-star review.", "Love you. Don't let it go to your head.", "I'm leaving. I'm still leaving the review."] },
    { id: 'junkyu', name: 'Junkyu', face: 'junkyu-hoax', likes: ['cocoa', 'hotteok'], say: ['Um, hi!! Can I get a hot chocolate? Please?', 'This is the best thing that happened all week!!!', "It's okay!! I'll come back!!"] },
    { id: 'asahi', name: 'Asahi', face: 'asahi-hoax', likes: ['americano'], say: ['Americano. No one cares how I take it.', "...It's good. Don't make it weird.", 'Deleting this café from my memory.'] },
    { id: 'jaehyuk', name: 'Jaehyuk', face: 'jaehyuk-hoax', likes: ['yuzu', 'kimbap'], say: ["Yuzu tea and a kimbap, please. I'm studying, so, quietly. If that's possible.", 'Thank you. Genuinely.', "I'll study at the library. It's fine."] },
    { id: 'hyunsuk', name: 'Hyunsuk', face: 'hyunsuk-hoax', likes: ['toast', 'americano'], say: ['Toast. Whatever, man. The egg one.', "Okay. That's actually good.", 'Forget it, man.'] },
    { id: 'yuna', name: 'Yuna', face: 'yuna-hoax', likes: ['hotteok', 'yuzu'], say: ["Two hotteok? No, one. I'm being good this week.", "Okay, I'm coming back tomorrow.", "I'll just get something at the station."] },
    { id: 'seoyeon', name: 'Seoyeon', face: 'seoyeon-hoax', likes: ['yuzu', 'sikhye'], say: ["Yuzu tea, please! It's so cold out there.", 'Ahh, warm hands. Thank you!', 'Sorry, my bus is here!'] },
    { id: 'minho', name: 'Minho', face: 'minho-hoax', likes: ['toast', 'kimbap'], say: ['Toast and kimbap. I skipped lunch for exams.', 'You saved my life. Probably.', 'Exams wait for no man. Neither do I.'] },
    { id: 'dohyun', name: 'Dohyun', face: 'dohyun-hoax', likes: ['americano', 'hotteok'], say: ['Americano. Large. Very large. Is there a larger?', 'Bless this café.', "I'll just... sleep instead."] },
    { id: 'mrkang', name: 'Mr. Kang', tag: 'the mail carrier', likes: ['americano', 'toast'], say: ["Americano, quick. I've got the whole hill to do.", "That'll get me up the hill.", 'The mail waits for nobody.'] },
    { id: 'nurse', name: 'Nurse Lim', tag: 'off a night shift', likes: ['toast', 'americano'], say: ["Toast, and the biggest americano you're allowed to make.", "You're an angel. I'm going to sleep for a year.", "I'll sleep instead. Honestly, fine."] },
    { id: 'kids', name: 'Middle schoolers', tag: 'two of them, one wallet', likes: ['hotteok', 'sikhye'], say: ["One hotteok! We're sharing. It's fine. It's FINE.", 'THANK YOU, NOONA!', "Mom's calling. Bye!"] },
    { id: 'mrchoi', name: 'Mr. Choi', tag: 'the hardware store', grumpy: true, likes: ['kimbap', 'sikhye'], say: ['Kimbap. Not the tuna. Never the tuna.', "Hm. Good kimbap. Don't tell anyone I said it.", 'Bah.'] },
    { id: 'mryoon', name: 'Mr. Yoon', tag: 'drives the 7 bus', likes: ['sikhye', 'toast'], say: ['Sikhye. My wife says I drink too much coffee.', "Don't tell her I liked it this much.", "Bus doesn't drive itself."] },
  ];
  // once a shift, rush 2 or 3: a halmeoni from down the street who wants it her way (grumpy and picky; Sunoo's charm works)
  const MRS_BAE = { id: 'mrsbae', name: 'Mrs. Bae', tag: 'the flower shop', grumpy: true, picky: true, fixed: [['yuzu', true]], say: ['Yuzu tea. Real honey. Not the squeezy bottle. I can tell.', 'Hm. Acceptable. Tell your halmeoni I said so.', "I've waited long enough in my life."] };
  const GROUP = { id: 'group', name: 'The council table', face: 'jake-hoax', group: true, say: ["Okay, so. Big order. Sunoo said you could handle it. Sunoo is very optimistic.", 'Group hug? No? Okay. Thank you!!', "We'll split up and go home. Like a family."] };
  const HALMEONI = { id: 'halmeoni', name: 'Halmeoni', face: 'halmeoni-hoax', picky: true, fixed: [['yuzu', true]], say: ["A yuzu tea. Hot, not boiling. Real honey. That's my way.", 'Hm. Good.', "I'll make it myself. Like always."] };

  /* ── Sunoo and Halmeoni ── [face, line] */
  const SUNOO = {
    open: [['happy', "Okay! Halmeoni went to the market, so it's just us for the first bit. Don't panic. I'm panicking a little. But you don't!"]],
    task: { griddle: [['happy', 'Griddle! On it. I love the griddle.']], cold: [['happy', 'Kimbap and sikhye, leave it to me~']], register: [['happy', "I'll take the money! I'm very trustworthy."]], orders: [['happy', "I'll say hi to everyone! That's basically my job anyway."]] },
    chat: [['happy', 'Wait, is that a new scarf? It is SO cute—'], ['surprised', 'You got your exam back?? Tell me everything—'], ['happy', 'How is your dog? Do you have pictures? Show me—'], ['happy', 'You look so tired! Sit. Sit, sit. Okay, so—']],
    hurry: [['flustered', 'Going! Going! I\'m going!!'], ['flustered', 'Sorry, sorry! Back!'], ['neutral', 'Okay. Focus. I am a focused person.']],
    charm: [['happy', "Hi!! You look like you need a croissant. On the house. Don't tell Halmeoni."], ['happy', "Long day? Me too. Let's be tired together."], ['happy', "I saved you the good seat. It's the one by the radiator."]],
    burnt: [['surprised', "Oh no. Oh no, that's black. We don't talk about it."], ['sad', "It's okay. It's a learning hotteok."]],
    left: [['sad', "Aw. They'll be back. Everyone comes back."], ['sad', 'Next time. I believe in next time.']],
    spill: [['surprised', 'Nobody move. The floor is a lake now.']],
    dog: [['surprised', "Sol. SOL. There's a dog at the window. He's so big. I'll be one second—"]],
    flicker: [['neutral', "The lights do that! It's the old wiring. Halmeoni says hit the box."]],
    group: [['happy', "Big table! I pushed two together. You're welcome."]],
    rush: [['happy', "We survived!! Mostly!"], ['happy', "Okay, that was a lot. I love it here."]],
    end: { S: ['happy', "Sol. SOL. Halmeoni smiled. I saw it. Nobody will believe me, but I saw it."], A: ['happy', 'We were so good!! Okay, mostly you. A little me.'], B: ['happy', "We survived! Mostly! I'm putting that on the tip jar."], C: ['neutral', "Hey. Tomorrow's a new café. ...It's the same café. But new!"] },
  };
  const HAL = {
    look: [['neutral', 'Hm. Let me see.'], ['neutral', "Don't mind me. I'm only the owner."]],
    extra: [['neutral', 'That one. Give extra. Too thin.'], ['neutral', 'That one has exams. Give extra.'], ['neutral', 'Extra for that one. Cold hands. I can tell from here.']],
    order: [['neutral', 'Sit down? No. I am ordering. Like a customer.']],
    burnt: [['serious', "Something is burning. I'm old, not dead. I can smell it."]],
    puddle: [['serious', 'There is a lake in my café.']],
    good: [['happy', "Hm. Good. Don't let it go to your head."], ['neutral', 'Sunoo, stand up straight. She is.']],
    verdict: { S: ['happy', "Hm. You can come back. That's all I'm saying. ...Take a croissant."], A: ['neutral', 'Good. Not perfect. Perfect is for people with nothing else to do. Good.'], B: ['neutral', "The café is still standing. Sunoo, stop smiling like that, it wasn't that good."], C: ['neutral', 'You tried. I watched you try. Come tomorrow and try earlier.'] },
  };

  /* ════════════ the model (no DOM) ════════════ */
  function shift(o = {}) {
    const rnd = mulberry(Math.imul((o.seed != null ? o.seed : Math.floor(Math.random() * 1e9)) | 0, 2654435761) ^ 0x5bd1e995); for (let i = 0; i < 8; i++) rnd();
    const pick = a => a[Math.floor(rnd() * a.length)];
    const range = ([a, b]) => a + rnd() * (b - a);
    const shuffle = a => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
    const diff = DIFF[o.difficulty] ? o.difficulty : 'normal', D = DIFF[diff];
    const evOrder = shuffle(Object.keys(EVENTS)).slice(0, 3);
    let deck = [], uid = 0;
    const S = {
      phase: 'brief', rush: -1, t: 0, money: 0, tips: 0, served: 0, left: 0, customers: 0, stars: [], burnt: 0, wasted: 0,
      cust: [], spots: Array(SPOTS).fill(null), sched: [],
      kettle: [null, null], espresso: [null], griddle: [null, null], board: null, pass: Array(PASS).fill(null), plate: null,
      sunoo: { task: 'griddle', chat: 0, chatWith: null, next: range(D.chat), cd: 0, away: 0, charmCd: 0, hurried: 0, charmed: 0 },
      hal: null, event: null, evAt: 0, halAt: 0, evFired: false, halFired: false, baeRush: 1 + Math.floor(rnd() * 2),
      upgrades: [], specials: ['hotteok', 'yuzu'], specialsLog: [], rushes: [], out: [], quit: false, diff,
    };
    const emit = (type, x = {}) => S.out.push({ type, ...x });
    const has = u => S.upgrades.includes(u);
    const C = id => S.cust.find(c => c.id === id);
    const active = () => S.cust.filter(c => c.state !== 'gone');
    const passFree = () => S.pass.indexOf(null);
    const sunooLine = k => emit('say', { who: 'sunoo', line: pick(Array.isArray(SUNOO[k]) ? SUNOO[k] : SUNOO[k]) });

    /* orders */
    const weightPick = likes => {
      const w = TYPES.map(t => (S.specials.includes(t) ? 2.5 : 1) * (likes && likes.includes(t) ? 2 : 1));
      let r = rnd() * w.reduce((a, b) => a + b, 0);
      for (let i = 0; i < TYPES.length; i++) { r -= w[i]; if (r <= 0) return TYPES[i]; }
      return TYPES[0];
    };
    const makeLines = (who, n) => {
      if (who.fixed) return who.fixed.map(([type, extra]) => ({ type, extra, done: false, q: 0 }));
      const L = [];
      for (let i = 0; i < n; i++) L.push({ type: i === 0 && who.likes && rnd() < 0.6 ? pick(who.likes) : weightPick(who.likes), extra: rnd() < D.extra, done: false, q: 0 });
      return L;
    };
    const nextWho = () => { if (!deck.length) deck = shuffle(ROSTER); return deck.pop(); };
    const orderPat = (who, n) => (30 + 10 * n) * D.pat * (who.grumpy ? 0.75 : 1) * (who.group ? 1.6 : 1) * (who.id === 'halmeoni' ? 1.4 : 1) * (has('radiator') ? 1.12 : 1);
    const arrive = who => {
      const n = who.group ? 4 + (S.rush === 2 ? 1 : 0) : 1 + (rnd() < 0.45 ? 1 : 0) + (S.rush === 2 && rnd() < 0.25 ? 1 : 0);
      const lines = makeLines(who, n);
      const waitMax = 16 * D.pat * (who.grumpy ? 0.8 : 1) * (has('radiator') ? 1.12 : 1);
      const c = { id: ++uid, who: who.id, name: who.name, face: who.face || null, tag: who.tag || '', say: who.say, grumpy: !!who.grumpy, picky: !!who.picky, group: !!who.group,
        lines, state: 'queue', spot: -1, pat: waitMax, patMax: waitMax, orderMax: orderPat(who, lines.length), charmed: false, stars: 0, hal: false };
      S.cust.push(c); S.customers++;
      emit('arrive', { id: c.id });
    };
    const fillSpots = () => {
      for (let i = 0; i < SPOTS; i++) {
        if (S.spots[i] != null) continue;
        const q = S.cust.find(c => c.state === 'queue');
        if (!q) break;
        q.state = 'wait'; q.spot = i; S.spots[i] = q.id;
      }
    };
    const freeSpot = c => { if (c.spot >= 0) S.spots[c.spot] = null; c.spot = -1; };
    const walkout = c => {
      c.state = 'gone'; freeSpot(c); S.left++; S.rushLeft++;
      emit('left', { id: c.id }); emit('say', { who: c.id, name: c.name, face: c.face, line: ['sad', c.say[2]] });
      if (rnd() < 0.5) sunooLine('left');
    };
    const starsFor = c => {
      const q = c.lines.reduce((a, l) => a + l.q, 0) / c.lines.length;
      let s = 0.5 + 4.5 * (0.5 * q + 0.5 * c.pFrac);
      if (c.picky && c.lines.some(l => l.q < 0.85)) s -= 1;
      if (c.charmed) s += 0.5;
      return clamp(Math.round(s * 2) / 2, 1, 5);
    };
    const tipFor = c => {
      const total = c.lines.reduce((a, l) => a + ITEMS[l.type].price, 0);
      let tip = total * (0.02 + 0.03 * c.stars) * (has('jar') ? 1.2 : 1) * (c.group ? 1.3 : 1) * (c.charmed ? 1.15 : 1);
      tip += 300 * c.lines.filter(l => S.specials.includes(l.type)).length;
      return Math.round(tip / 100) * 100;
    };
    const pay = (c, tipped) => {
      const tip = tipped ? tipFor(c) : 0;
      c.state = 'gone'; freeSpot(c);
      S.tips += tip; S.money += tip; S.rushTips += tip; S.served++; S.rushServed++; S.stars.push(tipped ? c.stars : Math.max(1, c.stars - 0.5));
      emit('paid', { id: c.id, tip });
      emit('say', { who: c.id, name: c.name, face: c.face, line: ['happy', c.say[1]] });
    };

    /* stations */
    const timeOf = type => ITEMS[type].time * ((ITEMS[type].st === 'kettle' || ITEMS[type].st === 'espresso') && has('kettle') ? 0.65 : 1);
    const slotsOf = st => S[st];
    const heatQ = p => p >= ZONE.late ? 0.2 : (p >= ZONE.good && p <= ZONE.top) ? 1 : 0.7;
    const flipQ = p => p < FLIP[0] ? 0.6 : p <= FLIP[1] ? 1 : Math.max(0.4, 1 - (p - FLIP[1]) * 2);
    const newPass = (type, q, burnt) => ({ uid: ++uid, type, q, extra: false, heat: 1, burnt: !!burnt, busy: 0, plating: false });
    function start(type) {
      const it = ITEMS[type]; if (!it || S.phase !== 'rush') return false;
      if (it.st === 'fridge') {
        const i = passFree(); if (i < 0) return emit('nope', { text: 'The pass is full.' }), false;
        S.pass[i] = newPass(type, 1); S.pass[i].busy = 0.8; emit('ladle'); return true;
      }
      if (it.st === 'board') {
        if (S.board) return emit('nope', { text: 'The board is busy.' }), false;
        S.board = { type, cuts: 0, auto: 0 }; emit('board'); return true;
      }
      const slots = slotsOf(it.st), i = slots.indexOf(null);
      if (i < 0) return emit('nope', { text: `No room on the ${it.st}.` }), false;
      slots[i] = { type, p: 0, flipped: !it.flip, fq: 1, warned: false };
      emit('start', { st: it.st }); return true;
    }
    function act(st, i) {
      if (S.phase !== 'rush') return false;
      if (st === 'board') return slice();
      const slots = slotsOf(st); const x = slots && slots[i]; if (!x) return false;
      if (!x.flipped) { x.flipped = true; x.fq = flipQ(x.p); emit('flip', { good: x.fq === 1 }); return true; }
      if (x.p < ZONE.ok) return emit('nope', { text: 'Not ready yet.' }), false;
      const j = passFree(); if (j < 0) return emit('nope', { text: 'The pass is full.' }), false;
      const burnt = x.p >= ZONE.late;
      S.pass[j] = newPass(x.type, heatQ(x.p) * x.fq, burnt); slots[i] = null;
      emit('take', { good: !burnt && heatQ(x.p) === 1, burnt });
      return true;
    }
    function slice() {
      const b = S.board; if (!b || b.cuts >= CUTS || b.auto > 0) return false;
      b.cuts++; emit('chop');
      if (b.cuts >= CUTS) boardDone();
      return true;
    }
    const boardDone = () => { const j = passFree(); if (j < 0) return; S.pass[j] = newPass(S.board.type, 1); S.board = null; emit('take', { good: true }); };
    // the most urgent spot (Space): a flip due, else the ripest thing in its zone, else slice
    function urgent() {
      let best = null;
      for (const st of ['griddle', 'kettle', 'espresso']) S[st].forEach((x, i) => {
        if (!x) return;
        const due = !x.flipped ? (x.p >= FLIP[0] ? 2 + x.p : -1) : (x.p >= ZONE.good - 0.05 ? x.p : -1);
        if (due > 0 && (!best || due > best.due)) best = { st, i, due };
      });
      if (best) return act(best.st, best.i);
      if (S.board && S.board.cuts < CUTS) return slice();
      return false;
    }

    /* the pass */
    function plate(pi) {
      const it = S.pass[pi]; if (!it || it.busy > 0 || it.extra || it.burnt) return false;
      if (S.event && S.event.kind === 'spill' && S.event.mop > 0) return emit('nope', { text: 'Mop the puddle first.' }), false;
      if (S.plate != null) return emit('nope', { text: 'Plating is busy.' }), false;
      it.busy = 1.1; it.plating = true; S.plate = it.uid; emit('plate'); return true;
    }
    function bin(pi) { if (!S.pass[pi] || S.pass[pi].busy > 0) return false; S.pass[pi] = null; S.wasted++; emit('bin'); return true; }
    function fits(c, it) { return c.state === 'order' && c.lines.some(l => !l.done && l.type === it.type); }
    function serve(pi, cid) {
      const it = S.pass[pi], c = C(cid);
      if (!it || it.busy > 0 || !c) return false;
      if (c.state !== 'order' || !fits(c, it)) { emit('nope', { text: c.state === 'wait' ? 'Take their order first.' : `That's not ${c.name}'s.` }); return false; }
      const open = c.lines.filter(l => !l.done && l.type === it.type);
      const l = open.find(x => x.extra === it.extra) || open[0];
      let q = it.q * (ITEMS[it.type].hot && it.heat < 0.35 ? 0.6 : 1);
      if (l.extra && !it.extra) q *= 0.6; else if (!l.extra && it.extra) q *= 0.9;
      l.done = true; l.q = q; S.pass[pi] = null;
      emit('serve', { id: c.id, q });
      if (c.lines.every(x => x.done)) {
        c.pFrac = clamp(c.pat / c.orderMax, 0, 1); c.stars = starsFor(c);
        c.state = 'pay'; c.pat = c.patMax = 15 * (D.pat > 1 ? 1.2 : 1);
        emit('fed', { id: c.id, stars: c.stars });
      }
      return true;
    }
    function serveAny(cid) {   // a click on a waiting customer with nothing selected: the first thing on the pass that fits
      const c = C(cid); if (!c) return false;
      const ok = S.pass.map((it, i) => it && it.busy <= 0 && fits(c, it) ? i : -1).filter(i => i >= 0);
      if (!ok.length) return false;
      const best = ok.find(i => c.lines.some(l => !l.done && l.type === S.pass[i].type && l.extra === S.pass[i].extra)) ?? ok[0];
      return serve(best, cid);
    }
    function take(cid) {
      const c = C(cid); if (!c || c.state !== 'wait') return false;
      c.state = 'order'; c.pat = c.patMax = c.orderMax;
      emit('order', { id: c.id }); emit('say', { who: c.id, name: c.name, face: c.face, line: ['neutral', c.say[0]] });
      return true;
    }
    function ring(cid) {
      const c = cid != null ? C(cid) : S.cust.find(x => x.state === 'pay');
      if (!c || c.state !== 'pay') return false;
      pay(c, true); return true;
    }
    // how many of a type still have to be made for orders already taken
    function need(type) {
      let n = 0; for (const c of S.cust) if (c.state === 'order') n += c.lines.filter(l => !l.done && l.type === type).length;
      for (const st of ['kettle', 'espresso', 'griddle']) n -= S[st].filter(x => x && x.type === type && x.p < ZONE.late).length;
      if (S.board && S.board.type === type) n--;
      n -= S.pass.filter(x => x && x.type === type && !x.burnt).length;
      return Math.max(0, n);
    }

    /* Sunoo */
    function setTask(t) { if (!TASKS[t] || S.sunoo.task === t) return false; S.sunoo.task = t; emit('say', { who: 'sunoo', line: pick(SUNOO.task[t]) }); return true; }
    function hurry() { const su = S.sunoo; if (su.chat <= 0) return false; su.chat = 0; su.chatWith = null; su.hurried++; su.cd = 0.3; sunooLine('hurry'); emit('hurry'); return true; }
    function charm(cid) {
      const su = S.sunoo, c = C(cid);
      if (!c || (c.state !== 'wait' && c.state !== 'order') || su.charmCd > 0 || su.away > 0) return false;
      su.chat = 0; su.chatWith = null; su.away = 4; su.charmCd = 18; su.charmed++; su.charmWith = c.id;
      c.grumpy = false; c.charmed = true; c.pat = Math.min(c.patMax, c.pat + 0.5 * c.patMax);
      sunooLine('charm'); emit('charm', { id: c.id }); return true;
    }
    function sunooTick(dt) {
      const su = S.sunoo;
      su.charmCd = Math.max(0, su.charmCd - dt);
      if (su.away > 0) { su.away -= dt; return; }
      if (S.event && S.event.kind === 'dog' && S.event.t > 0) return;
      if (su.chat > 0) { su.chat -= dt; const c = C(su.chatWith); if (!c || c.state === 'gone') su.chat = 0; return; }
      su.next -= dt;
      if (su.next <= 0) {
        su.next = range(D.chat) * (has('tag') ? 1.6 : 1);
        const cs = active().filter(c => c.state === 'wait' || c.state === 'order');
        if (cs.length) { const c = pick(cs); su.chat = 4.5; su.chatWith = c.id; c.pat = Math.min(c.patMax, c.pat + 0.2 * c.patMax); emit('say', { who: 'sunoo', line: pick(SUNOO.chat) }); emit('chat', { id: c.id }); return; }
      }
      su.cd -= dt; if (su.cd > 0) return;
      const done = () => { su.cd = 1.1 / D.sunoo; };
      if (su.task === 'griddle') {
        for (let i = 0; i < S.griddle.length; i++) { const x = S.griddle[i]; if (x && !x.flipped && x.p >= 0.42) { act('griddle', i); return done(); } }
        for (let i = 0; i < S.griddle.length; i++) { const x = S.griddle[i]; if (x && x.flipped && x.p >= 0.95 && passFree() >= 0) { act('griddle', i); return done(); } }
        for (const t of ['hotteok', 'toast']) if (need(t) > 0 && S.griddle.includes(null)) { start(t); return done(); }
      } else if (su.task === 'cold') {
        if (S.board && S.board.auto > 0) return;
        if (need('sikhye') > 0 && passFree() >= 0) { start('sikhye'); return done(); }
        if (need('kimbap') > 0 && !S.board) { S.board = { type: 'kimbap', cuts: 0, auto: 2.6 / D.sunoo }; emit('board'); return done(); }
      } else if (su.task === 'register') {
        const c = S.cust.find(x => x.state === 'pay'); if (c) { pay(c, true); su.cd = 1.4 / D.sunoo; return; }
      } else if (su.task === 'orders') {
        const c = S.cust.find(x => x.state === 'wait'); if (c) { take(c.id); su.cd = 1.3 / D.sunoo; return; }
      }
    }

    /* Halmeoni and the events */
    function halmeoni() {
      S.halFired = true;
      const kind = S.rush === 1 ? 'order' : S.rush === 2 ? 'extra' : (rnd() < 0.5 ? 'extra' : 'look');
      let line = pick(HAL.look);
      if (kind === 'order') { arrive(HALMEONI); line = HAL.order[0]; }
      else if (kind === 'extra') {
        const c = S.cust.filter(x => (x.state === 'order' || x.state === 'wait') && x.lines.some(l => !l.done && !l.extra));
        if (c.length) { const t = pick(c), l = t.lines.find(x => !x.done && !x.extra); l.extra = true; t.hal = true; line = pick(HAL.extra); emit('halExtra', { id: t.id }); }
        else line = pick(HAL.good);
      } else {
        const burnt = S.pass.some(x => x && x.burnt) || ['griddle', 'kettle', 'espresso'].some(st => S[st].some(x => x && x.p >= ZONE.late));
        line = burnt ? HAL.burnt[0] : (S.event && S.event.kind === 'spill' && S.event.mop > 0) ? HAL.puddle[0] : pick(HAL.good);
      }
      S.hal = { t: 6, kind };
      emit('say', { who: 'halmeoni', line });
    }
    function fireEvent() {
      S.evFired = true;
      const kind = evOrder[S.rush];
      S.event = { kind, t: kind === 'dog' ? 10 : kind === 'flicker' ? 8 : 0, mop: kind === 'spill' ? 3 : 0 };
      if (kind === 'spill') {
        const drinks = S.pass.map((x, i) => x && ['cocoa', 'yuzu', 'americano', 'sikhye'].includes(x.type) && x.busy <= 0 ? i : -1).filter(i => i >= 0);
        if (drinks.length) { S.pass[drinks[drinks.length - 1]] = null; S.wasted++; }
      }
      if (kind === 'group') arrive(GROUP);
      emit('event', { kind }); sunooLine(kind);
    }
    function fix() {
      const e = S.event; if (!e) return false;
      if (e.kind === 'spill' && e.mop > 0) { e.mop--; emit('mop', { left: e.mop }); if (!e.mop) emit('fixed', { kind: 'spill' }); return true; }
      if ((e.kind === 'dog' || e.kind === 'flicker') && e.t > 0) { e.t = 0; emit('fixed', { kind: e.kind }); return true; }
      return false;
    }

    /* rushes */
    function startRush() {
      if (S.phase !== 'brief' && S.phase !== 'break') return false;
      S.rush++; S.phase = 'rush'; S.t = 0; S.rushServed = 0; S.rushLeft = 0; S.rushTips = 0;
      S.event = null; S.hal = null; S.evFired = false; S.halFired = false;
      if (has('griddle2') && S.griddle.length < 4) S.griddle.push(null, null);
      S.specialsLog.push([...S.specials]);
      const W = D.win[S.rush], n = D.size[S.rush];
      const times = Array.from({ length: n }, (_, k) => k === 0 ? 1.5 : (W * k / n) + (rnd() - 0.5) * (W / n) * 0.8).sort((a, b) => a - b);
      S.sched = times.map(at => ({ at, who: null }));
      if (S.rush === S.baeRush) S.sched[Math.floor(n / 2)].who = MRS_BAE;
      S.evAt = W * (evOrder[S.rush] === 'group' ? 0.35 : 0.5) + rnd() * 6;
      S.halAt = W * (S.rush === 0 ? 0.3 : 0.42) + rnd() * 6;
      S.su0 = S.sunoo.task;
      emit('rush', { rush: S.rush });
      return true;
    }
    function endRush() {
      for (const st of ['kettle', 'espresso', 'griddle']) S[st] = S[st].map(() => null);
      S.wasted += S.pass.filter(Boolean).length; S.pass = Array(PASS).fill(null); S.board = null; S.plate = null;
      S.rushes.push({ served: S.rushServed, left: S.rushLeft, tips: S.rushTips, event: evOrder[S.rush] });
      S.event = null; S.hal = null; S.sunoo.chat = 0; S.sunoo.away = 0;
      if (S.rush >= 2) { S.phase = 'done'; emit('done'); }
      else { S.phase = 'break'; emit('break'); sunooLine('rush'); }
    }
    function tick(dt) {
      if (S.phase !== 'rush') return;
      S.t += dt;
      while (S.sched.length && S.sched[0].at <= S.t) arrive(S.sched.shift().who || nextWho());
      if (!S.evFired && S.t >= S.evAt) fireEvent();
      if (!S.halFired && S.t >= S.halAt) halmeoni();
      if (S.hal && (S.hal.t -= dt) <= 0) S.hal = null;
      fillSpots();
      const ev = S.event;
      const frozen = ev && ev.kind === 'dog' && ev.t > 0, cold = ev && ev.kind === 'flicker' && ev.t > 0;
      const fidget = ev && ev.kind === 'spill' && ev.mop > 0 ? 1.25 : 1;
      if (ev && ev.t > 0 && (ev.t -= dt) <= 0) { ev.t = 0; emit('fixed', { kind: ev.kind, self: true }); }
      if (!frozen) for (const c of S.cust) {
        if (c.state === 'gone') continue;
        const chatting = S.sunoo.chat > 0 && S.sunoo.chatWith === c.id;
        c.pat -= dt * (c.state === 'queue' ? 0.4 : chatting ? 0 : 1) * fidget;
        if (c.pat <= 0) { if (c.state === 'pay') pay(c, false); else walkout(c); }
      }
      if (!cold) for (const st of ['kettle', 'espresso', 'griddle']) S[st].forEach(x => {
        if (!x) return;
        x.p = Math.min(ZONE.cap, x.p + dt / timeOf(x.type));
        if (x.p >= ZONE.late && !x.warned) { x.warned = true; S.burnt++; emit('burn', { st }); if (rnd() < 0.6) sunooLine('burnt'); }
      });
      if (S.board && S.board.auto > 0 && !(S.sunoo.chat > 0 || S.sunoo.away > 0 || frozen)) { S.board.auto -= dt; if (S.board.auto <= 0) { S.board.auto = 0; S.board.cuts = CUTS; } }
      if (S.board && S.board.cuts >= CUTS) boardDone();
      const cool = has('lamp') ? 1 / 44 : 1 / 22;
      S.pass.forEach(x => {
        if (!x) return;
        if (x.busy > 0 && (x.busy -= dt) <= 0) { x.busy = 0; if (x.plating) { x.plating = false; x.extra = true; S.plate = null; emit('plated'); } }
        if (ITEMS[x.type].hot) x.heat = Math.max(0, x.heat - dt * cool);
      });
      sunooTick(dt);
      fillSpots();
      if (!S.sched.length && !active().length && S.evFired) endRush();
      else if (S.t > D.win[S.rush] + 150) { active().forEach(walkout); endRush(); }   // never hangs
    }

    /* between rushes */
    function buy(id) {
      const u = UPGRADES.find(x => x.id === id);
      if (S.phase !== 'break' || !u || has(id) || S.money < u.cost) return false;
      S.money -= u.cost; S.upgrades.push(id); emit('buy', { id }); return true;
    }
    function setSpecials(a) { if (S.phase !== 'break' || !Array.isArray(a) || a.length !== 2 || a.some(t => !ITEMS[t]) || a[0] === a[1]) return false; S.specials = [...a]; return true; }
    function result(quit) {
      const total = S.customers || 1, avg = S.stars.length ? S.stars.reduce((a, b) => a + b, 0) / S.stars.length : 0, ratio = S.served / total;
      const grade = quit ? 'C' : ratio >= 0.9 && avg >= 4.3 ? 'S' : ratio >= 0.75 && avg >= 3.6 ? 'A' : ratio >= 0.5 ? 'B' : 'C';
      return { won: !quit && grade !== 'C', grade, quit: !!quit, score: Math.max(0, Math.round(S.tips + 400 * S.served - 300 * S.left + 200 * S.stars.filter(s => s >= 5).length)),
        served: S.served, left: S.left, customers: S.customers, tips: S.tips, stars: Math.round(avg * 10) / 10, fiveStars: S.stars.filter(s => s >= 5).length,
        burnt: S.burnt, wasted: S.wasted, rushes: S.rushes.map(r => ({ ...r })), upgrades: [...S.upgrades], specials: S.specialsLog.map(x => [...x]),
        hurried: S.sunoo.hurried, charmed: S.sunoo.charmed, verdict: HAL.verdict[grade][1], difficulty: diff };
    }
    const drain = () => S.out.splice(0);
    return { S, D, tick, start, act, slice, urgent, plate, bin, serve, serveAny, take, ring, need, fits, setTask, hurry, charm, fix, startRush, buy, setSpecials, result, drain, timeOf, events: evOrder };
  }

  /* ════════════ sounds (Web Audio) ════════════ */
  function sounds(muted) {
    let ac = null;
    const A = () => { if (muted) return null; try { ac = ac || new (window.AudioContext || window.webkitAudioContext)(); return ac; } catch (e) { return null; } };
    const tone = (f, dur, type = 'sine', g = 0.12, at = 0, f2) => {
      const a = A(); if (!a) return; const t = a.currentTime + at, o = a.createOscillator(), v = a.createGain();
      o.type = type; o.frequency.setValueAtTime(f, t); if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + dur);
      v.gain.setValueAtTime(0.0001, t); v.gain.exponentialRampToValueAtTime(g, t + 0.01); v.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(v); v.connect(a.destination); o.start(t); o.stop(t + dur + 0.05);
    };
    const noise = (dur, f, q, g, at = 0, f2) => {
      const a = A(); if (!a) return; const t = a.currentTime + at, n = Math.ceil(a.sampleRate * dur), b = a.createBuffer(1, n, a.sampleRate), d = b.getChannelData(0);
      for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
      const s = a.createBufferSource(), fl = a.createBiquadFilter(), v = a.createGain();
      s.buffer = b; fl.type = 'bandpass'; fl.frequency.setValueAtTime(f, t); if (f2) fl.frequency.linearRampToValueAtTime(f2, t + dur); fl.Q.value = q;
      v.gain.setValueAtTime(0.0001, t); v.gain.exponentialRampToValueAtTime(g, t + dur * 0.2); v.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      s.connect(fl); fl.connect(v); v.connect(a.destination); s.start(t);
    };
    return {
      door: () => { tone(1975, 0.6, 'sine', 0.07); tone(2637, 0.7, 'sine', 0.05, 0.09); },
      blip: () => tone(1100, 0.05, 'triangle', 0.05),
      nope: () => tone(260, 0.16, 'square', 0.04, 0, 200),
      start: () => noise(0.25, 900, 1.2, 0.08),
      sizzle: () => noise(0.5, 3600, 0.6, 0.09, 0, 2400),
      pour: () => noise(0.6, 1300, 0.8, 0.1, 0, 800),
      flip: good => { noise(0.08, 1800, 2, 0.12); tone(good ? 700 : 400, 0.1, 'triangle', 0.08, 0.02); },
      take: good => { tone(good ? 1320 : 990, 0.12, 'triangle', 0.08); if (good) tone(1760, 0.15, 'triangle', 0.06, 0.07); },
      burn: () => { tone(160, 0.5, 'sawtooth', 0.04, 0, 110); noise(0.6, 2600, 0.8, 0.07); },
      chop: () => { tone(200, 0.05, 'square', 0.1, 0, 100); noise(0.04, 2600, 2, 0.1); },
      plate: () => tone(880, 0.25, 'sine', 0.07, 0, 1320),
      serve: () => { tone(988, 0.1, 'sine', 0.08); tone(1318, 0.14, 'sine', 0.07, 0.06); },
      cash: () => { noise(0.08, 3000, 3, 0.1); [1568, 2093].forEach((f, i) => tone(f, 0.25, 'sine', 0.09, 0.05 + i * 0.07)); },
      left: () => tone(520, 0.4, 'sine', 0.08, 0, 300),
      woof: () => { tone(180, 0.14, 'sawtooth', 0.06, 0, 120); tone(170, 0.14, 'sawtooth', 0.05, 0.22, 110); },
      flicker: () => { tone(60, 0.5, 'sawtooth', 0.05); noise(0.3, 6000, 4, 0.05, 0.1); },
      splash: () => noise(0.5, 700, 0.7, 0.14, 0, 300),
      mop: () => noise(0.18, 500, 1, 0.08),
      sparkle: () => [2637, 3136, 3520].forEach((f, i) => tone(f, 0.15, 'sine', 0.04, i * 0.06)),
      fanfare: () => [784, 988, 1175, 1568].forEach((f, i) => tone(f, 0.3, 'triangle', 0.08, i * 0.12)),
      close: () => { try { ac && ac.close(); } catch (e) {} },
    };
  }

  /* ════════════ drawn stand-ins ════════════ */
  function icon(type, x = {}) {
    const burnt = x.burnt, ex = x.extra;
    const dark = burnt ? ' filter="url(#cf-burnt)"' : '';
    const defs = burnt ? '<defs><filter id="cf-burnt"><feColorMatrix values=".25 0 0 0 0  0 .2 0 0 0  0 0 .18 0 0  0 0 0 1 0"/></filter></defs>' : '';
    let body = '';
    if (type === 'cocoa') body = `<path d="M9 14h20l-2 18a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3z" fill="#fff4f9" stroke="#14070f" stroke-width="1.6"/><path d="M29 18h3a4 4 0 0 1 0 8h-4" fill="none" stroke="#14070f" stroke-width="1.6"/><ellipse cx="19" cy="15" rx="9.5" ry="2.6" fill="#6b3a24"/>${ex ? '<path d="M11 14c0-5 4-8 8-8s8 3 8 8c-3 1-13 1-16 0z" fill="#fff" stroke="#e9cfd9"/><circle cx="19" cy="6" r="1.4" fill="#ff4f9e"/>' : ''}`;
    else if (type === 'yuzu') body = `<path d="M9 13h20l-2.5 20H11.5z" fill="#ffe6a6" fill-opacity=".85" stroke="#14070f" stroke-width="1.6"/><path d="M10 17h18" stroke="#f0b43c" stroke-width="2"/><circle cx="25" cy="13" r="5" fill="#ffd34d" stroke="#d99a1a"/><path d="M25 8.5v9M20.5 13h9" stroke="#d99a1a" stroke-width=".8"/>${ex ? '<path d="M13 23q3-4 6 0t6 0" fill="none" stroke="#c97a10" stroke-width="2"/>' : ''}`;
    else if (type === 'americano') body = `<path d="M11 10h16l-2 25H13z" fill="#fff4f9" stroke="#14070f" stroke-width="1.6"/><path d="M11.6 18h14.8l-.8 9H12.4z" fill="#ff4f9e"/><rect x="10" y="7" width="18" height="4" rx="1.5" fill="#14070f"/>${ex ? '<circle cx="30" cy="9" r="4.5" fill="#3a1d12" stroke="#fff4f9"/><text x="30" y="11" font-size="6" text-anchor="middle" fill="#fff" font-weight="900">2</text>' : ''}`;
    else if (type === 'sikhye') body = `<ellipse cx="19" cy="20" rx="13" ry="4" fill="#f6efe0" stroke="#14070f" stroke-width="1.6"/><path d="M6 20q1 13 13 13t13-13" fill="#f9f3e6" stroke="#14070f" stroke-width="1.6"/><g fill="#fff">${[[13, 20], [17, 21], [22, 19], [25, 21], [19, 19]].map(([a, b]) => `<ellipse cx="${a}" cy="${b}" rx="1.4" ry=".8"/>`).join('')}</g>${ex ? '<g fill="#e9c27a">' + [[14, 19], [20, 21], [24, 19]].map(([a, b]) => `<ellipse cx="${a}" cy="${b}" rx="1.3" ry="1.8"/>`).join('') + '</g>' : ''}`;
    else if (type === 'hotteok') body = `<ellipse cx="19" cy="24" rx="15" ry="9" fill="#d99a4a" stroke="#7a4a1a" stroke-width="1.6"/><ellipse cx="19" cy="22.5" rx="11" ry="6" fill="#e9b464"/><path d="M14 23q5-5 10 0" fill="none" stroke="#7a3a10" stroke-width="1.6"/>${ex ? '<g fill="#3a2a10">' + [[12, 22], [16, 20], [22, 21], [26, 23], [19, 25]].map(([a, b]) => `<circle cx="${a}" cy="${b}" r="1"/>`).join('') + '</g>' : ''}`;
    else if (type === 'toast') body = `<path d="M8 15c0-5 22-5 22 0v17H8z" fill="#f2c27a" stroke="#8a5a20" stroke-width="1.6"/><rect x="11" y="16" width="16" height="13" rx="2" fill="#fff4dc"/><ellipse cx="19" cy="22.5" rx="6" ry="4.5" fill="#ffd34d"/><path d="M12 27h14" stroke="#8bd27a" stroke-width="2"/>${ex ? '<g fill="#fff">' + [[13, 18], [17, 17], [22, 18], [25, 17], [20, 20]].map(([a, b]) => `<rect x="${a}" y="${b}" width="1.4" height="1.4"/>`).join('') + '</g>' : ''}`;
    else if (type === 'kimbap') body = [[11, 22], [19, 26], [27, 22]].map(([a, b]) => `<circle cx="${a}" cy="${b}" r="7" fill="#1d2a1d" stroke="#14070f"/><circle cx="${a}" cy="${b}" r="5.4" fill="#fff9ee"/><circle cx="${a - 1.5}" cy="${b - 1}" r="1.4" fill="#ff9a3c"/><circle cx="${a + 1.6}" cy="${b}" r="1.3" fill="#ffd34d"/><circle cx="${a}" cy="${b + 2}" r="1.3" fill="#5fa84f"/>`).join('') + (ex ? '<path d="M8 13q11-5 22 0" fill="none" stroke="#e8b04a" stroke-width="2" stroke-dasharray="2 2"/>' : '');
    return `<svg viewBox="0 0 38 38" aria-hidden="true">${defs}<g${dark}>${body}</g>${burnt ? '<path d="M14 10q-2-4 1-7M20 9q-2-4 1-7M26 10q-2-4 1-7" fill="none" stroke="#5a4a4a" stroke-width="1.4" class="cf-smoke"/>' : ''}</svg>`;
  }
  const badge = name => { const h = [...name].reduce((a, c) => a + c.charCodeAt(0), 0) % 4; return `<span class="cf-badge b${h}">${esc(name.split(' ').pop()[0])}</span>`; };

  /* ════════════ play ════════════ */
  function play(o = {}) {
    return new Promise(done => {
      const host = o.host || document.body, M = shift(o), S = M.S, K = sounds(!!o.mute);
      const GS = (window.FemcGame && window.FemcGame.settings && window.FemcGame.settings()) || {};
      const still = o.still != null ? !!o.still : matchMedia('(prefers-reduced-motion: reduce)').matches;
      const calm = o.calm != null ? !!o.calm : !!GS.calm, perf = o.perf != null ? !!o.perf : !!GS.perf;
      const ART = id => `${base()}assets/femc/game/art/minigames/cafe/${id}.webp`;
      const BG = id => `${base()}assets/femc/bg/${id}.webp`;
      const FACE = (id, f = 'neutral') => `${base()}assets/femc/portraits/${id}/${f}.webp`;
      const art = {}; ['counter', 'dog', ...TYPES.map(t => 'item-' + t)].forEach(id => { const i = new Image(); i.onload = () => { art[id] = true; dirty = true; }; i.src = ART(id); });
      let dirty = true, sel = -1, charmMode = false, paused = false, over = false, raf = 0, last = performance.now(), dayBg = o.bg || 'epi-h-yeobos';
      const el = document.createElement('div');
      el.className = 'mg-cafe' + (still ? ' still' : '') + (calm ? ' calm' : '') + (perf ? ' perf' : '');
      el.innerHTML = `
        <div class="cf-bg"></div><div class="cf-dim"></div>
        <header class="cf-top"></header>
        <section class="cf-floor" aria-label="The counter"></section>
        <section class="cf-kitchen" aria-label="Stations"><img class="cf-counter-art" src="${ART('counter')}" alt="" onerror="this.remove()"><div class="cf-k"></div></section>
        <div class="cf-say" aria-live="polite"></div><div class="cf-toast" aria-live="polite"></div><div class="cf-ann"></div>
        <div class="cf-break" hidden></div>
        <div class="mg-pause" hidden><b>Paused</b><button type="button" data-p="resume">Resume</button><button type="button" data-p="quit">Quit</button></div>
        <div class="mg-end" hidden></div>`;
      host.appendChild(el);
      const $ = s => el.querySelector(s);
      const setBg = id => { el.style.setProperty('--cf-bg', `url("${BG(id)}")`); };
      const bgOk = id => { const i = new Image(); i.onerror = () => el.classList.add('nobg'); i.src = BG(id); };
      setBg(dayBg); bgOk(dayBg);

      /* speech: one bubble at a time (Halmeoni first), never blocking */
      const sayQ = []; let sayT = 0, saying = null;
      const faceOf = w => w === 'sunoo' ? 'sunoo-hoax' : w === 'halmeoni' ? 'halmeoni-hoax' : null;
      const pushSay = e => {
        if (e.who === 'halmeoni') sayQ.unshift(e); else { sayQ.push(e); if (sayQ.length > 3) sayQ.splice(1, sayQ.length - 3); }
        if (!saying) nextSay();
      };
      const nextSay = () => {
        saying = sayQ.shift() || null; const box = $('.cf-say');
        if (!saying) { box.classList.remove('on'); return; }
        const [f, t] = saying.line, who = saying.who, face = saying.face || faceOf(who);
        const name = who === 'sunoo' ? 'Sunoo' : who === 'halmeoni' ? 'Halmeoni' : saying.name;
        box.className = `cf-say on ${typeof who === 'string' ? who : 'cust'}`;
        box.innerHTML = `${face ? `<img src="${FACE(face, f)}" alt="" onerror="this.src='${FACE(face)}';this.onerror=()=>this.remove()">` : badge(name)}<p><b>${esc(name)}</b>${esc(t)}</p>`;
        sayT = clamp(1.6 + t.length * 0.045, 2.2, 5.5);
      };
      $('.cf-say').onclick = () => nextSay();
      let toastT = 0; const toast = t => { const b = $('.cf-toast'); b.textContent = t; b.classList.add('on'); toastT = 1.6; };
      let annT = 0; const announce = (big, small) => { const a = $('.cf-ann'); a.innerHTML = `<b>${esc(big)}</b>${small ? `<small>${esc(small)}</small>` : ''}`; a.classList.remove('on'); void a.offsetWidth; a.classList.add('on'); annT = 2.2; };
      const shake = (node, cls = 'bump') => { if (still || !node) return; node.classList.remove(cls); void node.offsetWidth; node.classList.add(cls); };

      /* model events → sound, lines, banners */
      const handle = list => list.forEach(e => {
        dirty = true;
        switch (e.type) {
          case 'say': pushSay(e); break;
          case 'arrive': K.door(); break;
          case 'nope': K.nope(); toast(e.text); break;
          case 'start': (e.st === 'griddle' ? K.sizzle : e.st === 'espresso' ? K.start : K.pour)(); break;
          case 'ladle': K.pour(); break;
          case 'board': K.start(); break;
          case 'flip': K.flip(e.good); break;
          case 'take': K.take(e.good); break;
          case 'burn': K.burn(); break;
          case 'chop': K.chop(); break;
          case 'plate': case 'plated': K.plate(); break;
          case 'bin': K.nope(); break;
          case 'serve': K.serve(); break;
          case 'fed': if (e.stars >= 5) K.sparkle(); break;
          case 'paid': K.cash(); if (e.tip) floatTip(e.id, e.tip); break;
          case 'left': K.left(); break;
          case 'charm': K.sparkle(); break;
          case 'event': ({ spill: K.splash, dog: K.woof, flicker: K.flicker, group: K.door })[e.kind](); announce(EVENTS[e.kind], { spill: 'Mop it (M) before someone slips.', dog: 'Everyone stops to look. Shoo (M) to get Sunoo back.', flicker: 'The heat is off. Hit the breaker (M).', group: 'One card, a lot of things, a big tip.' }[e.kind]); break;
          case 'mop': K.mop(); break;
          case 'fixed': if (e.kind === 'dog' && !e.self) K.woof(); break;
          case 'rush': announce(`Rush ${e.rush + 1} of 3`, RUSH_NAME[e.rush]); break;
          case 'break': K.fanfare(); setTimeout(showBreak, 600); break;
          case 'done': K.fanfare(); setTimeout(() => finish(false), 700); break;
        }
      });
      const floatTip = (id, tip) => {
        const c = S.cust.find(x => x.id === id), spot = c && el.querySelector(`.cf-spot[data-n="${S.cust.indexOf(c)}"]`);
        const f = document.createElement('i'); f.className = 'cf-float'; f.textContent = '+' + won(tip);
        const host2 = $('.cf-floor'); host2.appendChild(f);
        const r = (spot || host2).getBoundingClientRect(), hr = host2.getBoundingClientRect();
        f.style.left = (r.left - hr.left + r.width / 2) + 'px'; f.style.top = (r.top - hr.top + 10) + 'px';
        setTimeout(() => f.remove(), 1200);
      };

      /* ── rendering: structure strings are diffed; meters (--v) are set every frame ── */
      // Kat's item picture when it exists (the extra as a + chip, burnt as a dark filter), else the drawn icon
      const pic = (type, x = {}) => art['item-' + type] ? `<span class="cf-pic art${x.burnt ? ' burnt' : ''}"><img src="${ART('item-' + type)}" alt="">${x.extra ? '<i class="cf-plus">+</i>' : ''}</span>` : `<span class="cf-pic">${icon(type, x)}</span>`;
      const custState = c => ({ wait: 'Ready to order', order: 'Waiting', pay: 'Pay', queue: 'At the door' })[c.state];
      const floorHtml = () => {
        const spots = S.spots.map((id, i) => {
          const c = id != null && S.cust.find(x => x.id === id);
          if (!c) return `<div class="cf-spot empty" data-drop="c" data-spot="${i}"><span class="cf-k-n">${i + 1}</span></div>`;
          const n = S.cust.indexOf(c), chat = S.sunoo.chat > 0 && S.sunoo.chatWith === c.id;
          const ticket = c.state === 'wait' ? '<p class="cf-ask">Tap to take the order</p>'
            : `<ol class="cf-ticket">${c.lines.map(l => `<li class="${l.done ? 'done' : ''}${l.extra ? ' ex' : ''}">${pic(l.type, { extra: l.extra })}${l.extra ? `<em>+ ${esc(ITEMS[l.type].ex)}</em>` : ''}</li>`).join('')}</ol>`;
          const stars = c.state === 'pay' ? `<p class="cf-paystars">${'★'.repeat(Math.floor(c.stars))}${c.stars % 1 ? '½' : ''} <b>Tap to ring up</b></p>` : '';
          return `<button type="button" class="cf-spot ${c.state}${c.grumpy ? ' grumpy' : ''}${c.charmed ? ' charmed' : ''}${c.group ? ' group' : ''}${chat ? ' chat' : ''}${charmMode && (c.state === 'wait' || c.state === 'order') ? ' charmable' : ''}${sel >= 0 && S.pass[sel] && M.fits(c, S.pass[sel]) ? ' fits' : ''}" data-a="cust" data-id="${c.id}" data-n="${n}" data-drop="c">
            <span class="cf-k-n">${i + 1}</span>
            <span class="cf-face">${c.face ? `<img src="${FACE(c.face)}" alt="" onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'cf-badge',textContent:'${esc(c.name[0])}'}))">` : badge(c.name)}</span>
            <span class="cf-who"><b>${esc(c.name)}</b>${c.tag ? `<small>${esc(c.tag)}</small>` : ''}${c.grumpy ? '<small class="cf-grump">grumpy</small>' : ''}${c.hal ? '<small class="cf-halnote">Halmeoni: extra</small>' : ''}${chat ? '<small class="cf-chatnote">chatting with Sunoo</small>' : ''}</span>
            <span class="cf-state">${custState(c)}</span>${ticket}${stars}
            <span class="cf-pat" data-m="pat:${c.id}"><i></i></span></button>`;
        }).join('');
        const q = S.cust.filter(c => c.state === 'queue').length;
        const e = S.event, evBtn = !e ? '' : e.kind === 'spill' && e.mop > 0 ? `<button type="button" class="cf-ev spill" data-a="fix">Mop the puddle <b>${e.mop}</b> <kbd>M</kbd></button>`
          : e.kind === 'dog' && e.t > 0 ? `<button type="button" class="cf-ev dog" data-a="fix">${art.dog ? `<img src="${ART('dog')}" alt="">` : '<span class="cf-dog" aria-hidden="true"></span>'}Shoo, back to work <kbd>M</kbd></button>`
          : e.kind === 'flicker' && e.t > 0 ? `<button type="button" class="cf-ev flicker" data-a="fix">Hit the breaker <kbd>M</kbd></button>` : '';
        return `<div class="cf-spots">${spots}</div><div class="cf-door"><b>${q}</b> at the door${evBtn}</div>`;
      };
      const ringOf = (st, i, x) => {
        if (!x) return `<button type="button" class="cf-slot empty" data-a="slot" data-st="${st}" data-i="${i}" aria-label="Empty"><span></span></button>`;
        const zone = !x.flipped ? (x.p >= FLIP[0] && x.p <= FLIP[1] + 0.1 ? 'flip' : x.p > FLIP[1] + 0.1 ? 'flip late' : '')
          : x.p >= ZONE.late ? 'burning' : x.p >= ZONE.good && x.p <= ZONE.top ? 'ready' : x.p >= ZONE.ok ? 'okay' : '';
        const label = !x.flipped ? (zone ? 'FLIP!' : '') : zone === 'burning' ? (ITEMS[x.type].st === 'griddle' ? 'BURNT' : 'STEWED') : zone === 'ready' ? 'TAKE!' : zone === 'okay' ? 'take' : '';
        return `<button type="button" class="cf-slot ${zone}" data-a="slot" data-st="${st}" data-i="${i}"><span class="cf-ring" data-m="p:${st}:${i}"></span>${pic(x.type, { burnt: x.p >= ZONE.late })}<em>${label}</em></button>`;
      };
      const kitchenHtml = () => {
        const menu = TYPES.map(t => { const it = ITEMS[t], n = M.need(t); return `<button type="button" class="cf-item${S.specials.includes(t) ? ' special' : ''}" data-a="start" data-t="${t}">${pic(t)}<span>${esc(it.name)}</span><kbd>${it.key.toUpperCase()}</kbd>${n ? `<i class="cf-need">${n}</i>` : ''}</button>`; }).join('');
        const st = (name, label, slots) => `<div class="cf-st ${name}"><h3>${label}</h3><div class="cf-slots">${slots.map((x, i) => ringOf(name, i, x)).join('')}</div></div>`;
        const b = S.board;
        const board = `<div class="cf-st board"><h3>Board</h3><div class="cf-slots">${b ? `<button type="button" class="cf-slot cut${b.auto > 0 ? ' sunoo' : ''}" data-a="slot" data-st="board" data-i="0">${pic('kimbap')}<em>${b.auto > 0 ? 'Sunoo' : `slice ${b.cuts}/${CUTS}`}</em></button>` : '<span class="cf-slot empty"><span></span></span>'}</div></div>`;
        const pass = S.pass.map((x, i) => x ? `<button type="button" class="cf-pass-i${sel === i ? ' sel' : ''}${x.busy > 0 ? ' busy' : ''}${x.burnt ? ' burnt' : ''}" data-a="pass" data-i="${i}" data-drag="${i}">${pic(x.type, { extra: x.extra, burnt: x.burnt })}<kbd>${'ZXCV'[i]}</kbd>${x.extra ? `<em>+ ${esc(ITEMS[x.type].ex)}</em>` : ''}${ITEMS[x.type].hot ? `<span class="cf-heat" data-m="heat:${i}"><i></i></span>` : ''}${x.plating ? '<small>plating…</small>' : x.busy > 0 ? '<small>ladling…</small>' : ''}</button>` : `<span class="cf-pass-i empty"><kbd>${'ZXCV'[i]}</kbd></span>`).join('');
        const su = S.sunoo, dog = S.event && S.event.kind === 'dog' && S.event.t > 0;
        const sstate = su.away > 0 ? 'charming someone' : dog ? 'at the window' : su.chat > 0 ? 'chatting…' : `on ${TASKS[su.task].toLowerCase()}`;
        const sface = su.chat > 0 || su.away > 0 ? 'happy' : dog ? 'surprised' : 'neutral';
        const pays = S.cust.filter(c => c.state === 'pay').length;
        return `<div class="cf-menu"><h3>Menu</h3>${menu}</div>
          <div class="cf-stations">${st('kettle', 'Kettle', S.kettle)}${st('espresso', 'Espresso', S.espresso)}${st('griddle', 'Griddle', S.griddle)}${board}</div>
          <div class="cf-passbox"><h3>Pass</h3><div class="cf-pass">${pass}</div>
            <div class="cf-tools"><button type="button" class="cf-plate${S.plate != null ? ' busy' : ''}${S.event && S.event.kind === 'spill' && S.event.mop > 0 ? ' blocked' : ''}" data-a="plate" data-drop="plate">Plating <kbd>P</kbd></button><button type="button" class="cf-bin" data-a="bin" data-drop="bin">Bin <kbd>B</kbd></button><button type="button" class="cf-reg${pays ? ' due' : ''}" data-a="ring">Ring up${pays ? ` <b>${pays}</b>` : ''} <kbd>R</kbd></button></div></div>
          <div class="cf-sunoo${su.chat > 0 ? ' chatting' : ''}"><div class="cf-sface"><img src="${FACE('sunoo-hoax', sface)}" alt="" onerror="this.remove()"></div><p><b>Sunoo</b> <span>${sstate}</span></p>
            <div class="cf-tasks">${Object.entries(TASKS).map(([k, v]) => `<button type="button" class="${su.task === k ? 'on' : ''}" data-a="task" data-t="${k}">${v} <kbd>${Object.keys(TASK_KEYS).find(x => TASK_KEYS[x] === k).toUpperCase()}</kbd></button>`).join('')}</div>
            <div class="cf-tasks two"><button type="button" class="cf-hurry" data-a="hurry"${su.chat > 0 ? '' : ' disabled'}>Hurry! <kbd>G</kbd></button><button type="button" class="cf-charm${charmMode ? ' on' : ''}" data-a="charm"${su.charmCd > 0 || su.away > 0 ? ' disabled' : ''}>${su.charmCd > 0 ? `Charm (${Math.ceil(su.charmCd)})` : charmMode ? 'Pick a customer' : 'Charm'} <kbd>F</kbd></button></div></div>`;
      };
      const topHtml = () => {
        const avg = S.stars.length ? (S.stars.reduce((a, b) => a + b, 0) / S.stars.length).toFixed(1) : '–';
        const left = S.sched.length + S.cust.filter(c => c.state !== 'gone').length;
        return `<b class="cf-where">Yeobo's</b><span class="cf-rush">${S.rush >= 0 ? `Rush ${S.rush + 1} / 3 · ${RUSH_NAME[S.rush]}` : 'Opening'}</span><span>${left} to go</span><span>Tips <b>${won(S.tips)}</b></span><span>★ <b>${avg}</b></span><span class="cf-specs">Specials: ${S.specials.map(t => esc(ITEMS[t].name)).join(' · ')}</span>${S.hal ? '<span class="cf-halnow">Halmeoni is watching</span>' : ''}<button type="button" class="cf-pause" data-a="pause" aria-label="Pause">II</button>`;
      };
      const cache = {};
      const put = (sel2, html) => { if (cache[sel2] !== html) { cache[sel2] = html; $(sel2).innerHTML = html; } };
      const meter = key => {
        const [k, a, b] = key.split(':');
        if (k === 'pat') { const c = S.cust.find(x => x.id === +a); return c ? clamp(c.pat / c.patMax, 0, 1) : 0; }
        if (k === 'p') { const x = S[a][+b]; return x ? clamp(x.p / ZONE.cap, 0, 1) : 0; }
        if (k === 'heat') { const x = S.pass[+a]; return x ? x.heat : 0; }
        return 0;
      };
      const render = () => {
        if (dirty || S.phase === 'rush') {
          put('.cf-top', topHtml()); put('.cf-floor', floorHtml()); put('.cf-k', kitchenHtml()); dirty = false;
        }
        el.querySelectorAll('[data-m]').forEach(m => { const v = meter(m.dataset.m); m.style.setProperty('--v', v.toFixed(3)); m.classList.toggle('low', v < 0.3); });
        el.classList.toggle('dark', !!(S.event && S.event.kind === 'flicker' && S.event.t > 0));
        el.classList.toggle('charming', charmMode);
      };

      /* ── actions ── */
      const custClick = id => {
        const c = S.cust.find(x => x.id === id); if (!c) return;
        if (charmMode) { charmMode = false; if (!M.charm(id)) toast("Sunoo can't charm them right now."); return; }
        if (c.state === 'wait') return M.take(id);
        if (c.state === 'pay') return M.ring(id);
        if (c.state === 'order') {
          if (sel >= 0 && S.pass[sel]) { const ok = M.serve(sel, id); if (ok) sel = -1; return; }
          if (!M.serveAny(id)) toast('Nothing on the pass for them yet.');
        }
      };
      const spotKey = n => { const id = S.spots[n]; if (id != null) custClick(id); };
      const passPick = i => { if (!S.pass[i]) { sel = -1; return; } sel = sel === i ? -1 : i; K.blip(); };
      const doA = (b) => {
        const a = b.dataset.a; dirty = true;
        if (a === 'pause') return setPause(true);
        if (S.phase !== 'rush') return;
        if (a === 'cust') return custClick(+b.dataset.id);
        if (a === 'start') return M.start(b.dataset.t);
        if (a === 'slot') return M.act(b.dataset.st, +b.dataset.i);
        if (a === 'pass') return passPick(+b.dataset.i);
        if (a === 'plate') { if (sel >= 0) { M.plate(sel); sel = -1; } else toast('Pick something on the pass first.'); return; }
        if (a === 'bin') { if (sel >= 0) { M.bin(sel); sel = -1; } else toast('Pick something on the pass first.'); return; }
        if (a === 'ring') return M.ring() || toast('Nobody is waiting to pay.');
        if (a === 'task') return M.setTask(b.dataset.t);
        if (a === 'hurry') return M.hurry();
        if (a === 'charm') { charmMode = !charmMode; if (charmMode) toast('Sunoo: who needs me?'); return; }
        if (a === 'fix') return M.fix();
      };
      // buttons act on pointerdown (the board re-renders often; a click could land on a replaced button); a keyboard click (detail 0) acts too
      let drag = null;
      el.addEventListener('pointerdown', e => {
        if (paused || over) return;
        const d = e.target.closest('[data-drag]');
        if (d && S.phase === 'rush') { e.preventDefault(); drag = { i: +d.dataset.drag, x: e.clientX, y: e.clientY, moved: false, ghost: null }; return; }
        const b = e.target.closest('.cf-top [data-a], .cf-floor [data-a], .cf-k [data-a]');
        if (b && !b.disabled) { e.preventDefault(); doA(b); }
      });
      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp); window.addEventListener('pointercancel', onUp);
      function onMove(e) {
        if (!drag) return;
        if (!drag.moved && Math.hypot(e.clientX - drag.x, e.clientY - drag.y) > 8 && S.pass[drag.i]) {
          drag.moved = true; sel = drag.i; dirty = true;
          drag.ghost = document.createElement('div'); drag.ghost.className = 'cf-ghost'; drag.ghost.innerHTML = pic(S.pass[drag.i].type, { extra: S.pass[drag.i].extra }); el.appendChild(drag.ghost);
        }
        if (drag.ghost) { drag.ghost.style.left = e.clientX + 'px'; drag.ghost.style.top = e.clientY + 'px'; }
      }
      function onUp(e) {
        if (!drag) return;
        const d = drag; drag = null; d.ghost && d.ghost.remove();
        if (!d.moved) { passPick(d.i); dirty = true; return; }
        const t = document.elementFromPoint(e.clientX, e.clientY), drop = t && t.closest('[data-drop]');
        if (drop) {
          const k = drop.dataset.drop;
          if (k === 'c' && drop.dataset.id) M.serve(d.i, +drop.dataset.id);
          else if (k === 'plate') M.plate(d.i);
          else if (k === 'bin') M.bin(d.i);
        }
        sel = -1; dirty = true;
      }
      el.addEventListener('click', e => {
        const b = e.target.closest('.cf-top [data-a], .cf-floor [data-a], .cf-k [data-a]'); if (b && !b.disabled && e.detail === 0) doA(b);
      });
      const key = e => {
        if (over) return;
        e.stopPropagation();
        const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
        if (k === 'Escape') { e.preventDefault(); if (S.phase === 'rush' || paused) setPause(!paused); return; }
        if (paused || e.repeat) return;
        if (S.phase === 'break' || S.phase === 'brief') { if (k === 'Enter' && !$('.cf-break').hidden && !e.target.closest?.('.cf-break button')) { e.preventDefault(); openDoors(); } return; }
        if (S.phase !== 'rush') return;
        if (k === ' ' || k.startsWith('Arrow')) e.preventDefault();
        dirty = true;
        if (/^[1-4]$/.test(k)) return spotKey(+k - 1);
        const t = TYPES.find(x => ITEMS[x].key === k); if (t) return M.start(t);
        if (k === ' ') return M.urgent() || M.slice();
        const zi = 'zxcv'.indexOf(k); if (zi >= 0) return passPick(zi);
        if (k === 'p') { if (sel >= 0) { M.plate(sel); sel = -1; } return; }
        if (k === 'b') { if (sel >= 0) { M.bin(sel); sel = -1; } return; }
        if (k === 'r') return M.ring();
        if (TASK_KEYS[k]) return M.setTask(TASK_KEYS[k]);
        if (k === 'g') return M.hurry();
        if (k === 'f') { charmMode = !charmMode; return; }
        if (k === 'm') return M.fix();
      };
      window.addEventListener('keydown', key, true);
      const setPause = p => { paused = p; $('.mg-pause').hidden = !p; if (p) $('.mg-pause button').focus(); };
      $('.mg-pause').onclick = e => { const b = e.target.dataset.p; if (b === 'resume') setPause(false); if (b === 'quit') { setPause(false); finish(true); } };

      /* ── between rushes (and the brief before the first) ── */
      let picks = [...S.specials];
      function showBreak() {
        const br = $('.cf-break'), first = S.phase === 'brief', r = S.rushes[S.rushes.length - 1];
        picks = [...S.specials];
        const draw = () => {
          const ups = UPGRADES.map(u => { const own = S.upgrades.includes(u.id); return `<button type="button" class="cf-up${own ? ' own' : ''}" data-up="${u.id}"${own || S.money < u.cost ? ' disabled' : ''}><b>${esc(u.name)}</b><small>${esc(u.note)}</small><span>${own ? 'Bought' : won(u.cost)}</span></button>`; }).join('');
          const spec = TYPES.map(t => `<button type="button" class="cf-spec${picks.includes(t) ? ' on' : ''}" data-spec="${t}" aria-pressed="${picks.includes(t)}">${pic(t)}<span>${esc(ITEMS[t].name)}</span></button>`).join('');
          const task = Object.entries(TASKS).map(([k, v]) => `<button type="button" class="cf-task0${S.sunoo.task === k ? ' on' : ''}" data-task0="${k}">${v}</button>`).join('');
          br.innerHTML = first
            ? `<div class="cf-card"><h2>Yeobo's · the winter shift</h2>
                <p class="cf-lead">Sunoo's grandmother is out at the market. Three rushes. Keep the counter happy.</p>
                <ul class="cf-how"><li><b>Customers</b> tap one to take their order; tap again (or drag their food onto them) to serve; tap to ring up.</li>
                  <li><b>Menu</b> starts a thing at its station. Take it off in the pink (<kbd>Space</kbd> takes the most urgent). Flip hotteok once. Slice kimbap.</li>
                  <li><b>Pass</b> holds what's done; hot things cool. Drag to <b>Plating</b> for an order's extra (+ cream, + honey…).</li>
                  <li><b>Sunoo</b> takes a job. He'll wander off to chat: <b>Hurry</b> him back, or send him to <b>Charm</b> a grumpy one.</li>
                  <li>Esc pauses. Keys are on every button.</li></ul>
                <h3>Sunoo starts on</h3><div class="cf-row">${task}</div>
                <p class="cf-board-note">Halmeoni's board today: <b>${S.specials.map(t => esc(ITEMS[t].name)).join(' · ')}</b></p>
                <button type="button" class="cf-go" data-go>Open the doors <kbd>Enter</kbd></button></div>`
            : `<div class="cf-card"><h2>Rush ${S.rushes.length} done</h2>
                <p class="cf-lead">${r.served} served · ${r.left} walked out · ${won(r.tips)} in tips · ${esc(EVENTS[r.event])}</p>
                <h3>Spend tips <span class="cf-money">${won(S.money)}</span></h3><div class="cf-ups">${ups}</div>
                <h3>Specials board for ${esc(RUSH_NAME[S.rush + 1])} <small>(pick two: asked for more, +₩300 tip each)</small></h3><div class="cf-row specs">${spec}</div>
                <h3>Sunoo starts on</h3><div class="cf-row">${task}</div>
                <button type="button" class="cf-go" data-go>Open the doors <kbd>Enter</kbd></button></div>`;
          const go = br.querySelector('[data-go]'); go && go.focus();
        };
        br.onclick = e => {
          const u = e.target.closest('[data-up]'), s = e.target.closest('[data-spec]'), t = e.target.closest('[data-task0]'), g = e.target.closest('[data-go]');
          if (u && !u.disabled) { if (M.buy(u.dataset.up)) K.cash(); draw(); }
          if (s) { const id = s.dataset.spec; picks = picks.includes(id) ? picks.filter(x => x !== id) : [...picks, id].slice(-2); if (picks.length === 2) M.setSpecials(picks); K.blip(); draw(); }
          if (t) { S.sunoo.task = t.dataset.task0; K.blip(); draw(); }
          if (g) openDoors();
        };
        draw(); br.hidden = false;
      }
      function openDoors() {
        if (S.phase === 'break' && picks.length === 2) M.setSpecials(picks);
        $('.cf-break').hidden = true;
        if (S.rush + 1 === 2) setBg(o.nightBg || 'epi-h-yeobos-night'), bgOk(o.nightBg || 'epi-h-yeobos-night');
        M.startRush(); handle(M.drain()); dirty = true;
      }

      /* ── the end ── */
      function finish(quit) {
        if (over) return; over = true;
        const res = M.result(quit), g = res.grade, end = $('.mg-end');
        const [hf, hl] = HAL.verdict[g], [sf, sl] = SUNOO.end[g];
        end.innerHTML = `<span class="cf-stamp"><img src="${ART('stamp-' + g.toLowerCase())}" alt="Grade ${g}" onerror="this.remove()"><b class="mg-grade">${g}</b></span>
          <dl><dt>Served</dt><dd>${res.served} / ${res.customers}</dd><dt>Walked out</dt><dd>${res.left}</dd><dt>Tips</dt><dd>${won(res.tips)}</dd><dt>Stars</dt><dd>★ ${res.stars.toFixed(1)}</dd><dt>Five-star tables</dt><dd>${res.fiveStars}</dd>${res.burnt ? `<dt>Burnt</dt><dd>${res.burnt}</dd>` : ''}</dl>
          <div class="cf-verdict"><img src="${FACE('halmeoni-hoax', hf)}" alt="" onerror="this.remove()"><p><b>Halmeoni</b>${esc(hl)}</p></div>
          <div class="cf-verdict s"><img src="${FACE('sunoo-hoax', sf)}" alt="" onerror="this.remove()"><p><b>Sunoo</b>${esc(sl)}</p></div>
          <button type="button">Continue</button>`;
        end.hidden = false; $('.cf-say').classList.remove('on');
        const btn = end.querySelector('button'); btn.focus();
        btn.onclick = () => { cleanup(); o.onDone?.(res); done(res); };
      }
      const cleanup = () => { cancelAnimationFrame(raf); window.removeEventListener('keydown', key, true); window.removeEventListener('keydown', skipT, true); window.removeEventListener('pointermove', onMove); window.removeEventListener('pointerup', onUp); window.removeEventListener('pointercancel', onUp); K.close(); el.remove(); };

      /* ── loop ── */
      const loop = now => {
        const dt = Math.min(0.1, (now - last) / 1000); last = now;
        if (!paused && !over) {
          if (S.phase === 'rush') { M.tick(dt); handle(M.drain()); }
          if (saying && (sayT -= dt) <= 0) nextSay();
          if (toastT > 0 && (toastT -= dt) <= 0) $('.cf-toast').classList.remove('on');
          if (annT > 0 && (annT -= dt) <= 0) $('.cf-ann').classList.remove('on');
        }
        render();
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);

      /* the title card: art title if present, else a drawn one; 1.8 s, click / a key skips; then the brief */
      const tt = document.createElement('div'); tt.className = 'cf-title';
      tt.innerHTML = `<div class="cf-title-drawn"><small>HOAX · winter break</small><b>Yeobo's</b><span>the winter shift</span></div><img src="${ART('title')}" alt="" onerror="this.remove()">`;
      el.appendChild(tt);
      let begun = false;
      const begin = () => { if (begun) return; begun = true; window.removeEventListener('keydown', skipT, true); tt.classList.add('out'); setTimeout(() => tt.remove(), 450); pushSay({ who: 'sunoo', line: SUNOO.open[0] }); showBreak(); };
      function skipT(e) { if (e.key !== 'Escape') { e.stopPropagation(); begin(); } }
      tt.onclick = begin; window.addEventListener('keydown', skipT, true); setTimeout(begin, 1800);
    });
  }
  return { play, shift, ITEMS, UPGRADES, EVENTS, ROSTER, DIFF };
})();
