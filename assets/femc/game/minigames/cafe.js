/* In the story since Nov 11 2026 (the "DEMO" wording in the header below is older): HOAX people-crew.js epi-h-sunoo-1 (12/23-12/31 after, short-handed at Yeobo's), flags epi-h-mg-cafe; optional, with a confirmed skip. */
/* FEMC epilogue minigame: Yeobo's, a day at the café (reworked Nov 11 2026). A DEMO: not in the story (play it on
   mockups/minigames/index.html). HOAX, winter break: Solar helps Sunoo at his grandmother's café. Kat, on the first
   version: "It needs visuals and animations and sound effects, etc. I think it should feel like a Papa's game." So this is a
   restaurant game in that genre's shape (stations you switch between, every order built step by step and graded step by
   step, a customer who tastes it in front of you), made Yeobo's own: its own menu, people, art and screens. Cameos only;
   nothing of the plot.

   FemcCafe.play({ host, mute, difficulty, seed, bg, nightBg, still, calm, perf, onDone }) -> Promise<result>
     host        element to draw into (default document.body; a full-screen overlay is added inside it)
     mute        no sound at all (no AudioContext is made; every sound also has something on screen)
     difficulty  'easy' | 'normal' | 'hard' (default 'normal'): customers a rush 3-4-5 / 4-5-6 / 5-6-7; the wait before the
                 Wait score starts dropping x1.4 / 1 / 0.75; cooking x0.85 / 1 / 1.15 as fast; topping guides shown on easy and
                 normal only; Sunoo works x1.25 / 1 / 0.85 as fast and drifts into a chat every 22-34 / 18-28 / 14-22 s
     seed        a number: the same customers and orders every time (tests); default random
     bg          the café picture under assets/femc/bg/ behind the Order view (default 'epi-h-yeobos'; rushes 1-2), nightBg
                 (default 'epi-h-yeobos-night'; rush 3). Kat's `bg-order` art wins over both when it exists; a drawn café
                 shows if neither loads
     still       force reduced motion (default: prefers-reduced-motion): no walking, sliding, bobbing, steam or flying coins;
                 views and pop-ups crossfade
     calm, perf  Reduce flashes (no star bursts or flashes) / Performance (no steam, bubbles, coins or music); default: the
                 game's settings (FemcGame.settings().calm / .perf), else off
     onDone      called with the result too
     hook        tests only: called with { M (the model), act, setView, render, finish }
   FemcCafe.shift(opts) -> the model with no DOM (same rules; tests drive it, see "The model" below)

   result = { won, grade: 'S' | 'A' | 'B' | 'C', quit, score, served, left, customers, tips, stars, fiveStars, burnt, wasted,
              rushes: [{ served, left, tips, stars, event: null }], upgrades: [ids], specials: [[unlocked ids] per rush],
              unlocks: [ids earned on the stamp card], points, steps: { wait, drinks, griddle, build } (averages 0-100),
              halmeoni: { stars, reaction } | null, hurried, charmed (Sunoo's chats), verdict (Halmeoni's line), difficulty }
     served / left / customers = customers who tasted their order / walked out / came in; tips in won; stars = the average
     of the served (0.5-5, one decimal); burnt = griddle things past burnt; wasted = things binned or left when a rush ended
   Grade: S 95%+ served and 4.3+ stars; A 85%+ and 3.6+; B 60%+ and 2.6+; else C. won = not C and not quit.

   ── How it plays ──────────────────────────────────────────────────────────────────────────────────────────────────────
   One day = three rushes (after school, dusk, after dark), about 6-8 minutes, a shop between rushes, a summary at the end.
   The screen: the HUD (rush, clock, tips, the stamp card meter, Sunoo, music, pause) on top, the TICKET RAIL under it (every
   open order: number, face, its items with ✓ when made, a wait bar), the station in the middle, the TAB BAR at the bottom
   (Order · Drinks · Griddle · Build; a badge on a tab says something needs you there: someone at the counter, a tray ready,
   something to flip, ready or BURNING on the griddle, things waiting to be plated). Keys 1-4 switch, Tab cycles; the views
   slide (crossfade under reduced motion). Timers keep running on every station while you're on another.
     ORDER     customers walk in one by one (the door bell), queue at the door and step up to the counter. Click them / Space:
               they say their order in a speech bubble (drawn as the items), a TICKET prints out of the printer and slides
               onto the rail, and they sit in the seats. Finished trays wait on the pass at the front: drag a tray onto its
               customer (or click the tray / Enter serves the oldest). They taste it: a happy bounce, a shrug or a grumpy
               face, a line, the star pop-up with every step's score, and coins drop into the tip jar.
     DRINKS    the to-make chips list every drink still owed (ticket number + drink). Pick one, pick the cup (S or L; the ticket
               says which), then HOLD Pour (mouse / touch / Space): the kettle, espresso machine or sikhye jug tips and pours
               while the level rises; let go on the dashed fill line (over the top spills). Add the add-ins the ticket wants
               (keys Z X C V), then Done (Enter) puts it on the order's tray; Bin (Backspace) starts over.
     GRIDDLE   pick a chip to put hotteok or street toast on the griddle (2 spots, 4 with the upgrade; the dough squishes down).
               The side touching the griddle cooks: each side has a meter with the ticket's doneness (light / golden / well)
               marked. Click the item (Z X C V) to flip, Off (A S D F) to slide it onto the warming rack. Past the mark it
               darkens, then smokes and BURNS. Sizzle bubbles and steam say it's working.
     BUILD     two jobs. Kimbap: pick a chip, then lay rice and the three fillings ON THE SEAWEED IN THE TICKET'S ORDER (drag
               them on, or click), roll it with an upward drag on the mat (Space rolls a step), then tap the log at the five
               cut marks (Space cuts at the next mark). Plating: pick a griddle thing from the warming rack, drag each topping
               the ticket wants onto its spots on the item (faint guides on easy / normal; click a topping then the item works
               too), then Plate (Enter). A griddle thing reaches the tray only through here, toppings or not.
   Scores, Papa's-style: every step is graded 0-100 and pops up with stars when it's done: the pour (level, cup, add-ins), the
   griddle (each side's doneness), the build (kimbap order, roll, even slices; toppings by how close each lands to its spot),
   and at the table the Wait (from walking in to tasting, with a grace time per item). Total = 25% wait + 75% the items
   (a missing item scores 0). Stars 0.5-5 from the total; happy 4+, meh 2.5+, grumpy under; tip = the order's price x (3% +
   4% a star), +20% with the tip jar sign, +₩300 for each new thing (an unlock or a shop item) in the order, x3 for Halmeoni.
   Regulars: the HOAX cast (their scene portraits) and six neighbourhood regulars (letter badges until art) each have a
   favourite order they ask for about two times in three. Stamp card: each customer adds points (total / 10, +3 for 4.5
   stars); at 25 / 60 / 100 it unlocks marshmallows (hot chocolate), cheese (toast) and tuna (kimbap), which then show up
   in orders. Shop (between rushes, with tips): a gooseneck kettle (the pour slows near the line), more griddle (4 spots),
   the tip jar sign, bleeding the radiator (+20% grace), Sunoo's name tag (chats less, 15% faster), the spice shelf
   (cinnamon, ginger), powdered sugar (hotteok), vanilla syrup (americano). Choose where Sunoo starts, then open the doors.
   SUNOO      your teammate: assign him to Order, Drinks, Griddle or Build (the chip on the tab bar, or T cycles; Off too). He
              auto-works that station slowly (takes orders; makes drinks or kimbap in his own lane at 68-88; on the griddle he
              places, flips and takes off on his own, a little early or late; on Build he plates the rack at 68-86), and now
              and then drifts into a chat with a seated customer (their wait clock stops; his work stops): Hurry (G) sends him
              back. His lines come in the speech bubble.
   HALMEONI   comes in once a day (rush 2 or 3) as a special customer with her own order (yuzu tea L with honey; golden hotteok
              with seeds and syrup), a high bar (her stars are the total less 8, so only near-perfect pleases her) and a big
              tip. She gives the end-of-day verdict. She looks in on rush 1 with a line too.
   Keys: 1-4 / Tab views · Space the main action of the view (take the order, hold to pour, roll / cut) · Enter serve / Done /
   Plate · Z X C V add-ins / flip / toppings · A S D F take off · Backspace bin · T Sunoo's station · G hurry · M music ·
   Esc pause (Resume / Quit). Mouse and touch do everything.

   ── The model (FemcCafe.shift(o): no DOM) ─────────────────────────────────────────────────────────────────────────────
   { S, tick(dt), startRush(), takeOrder(), drinkStart(tid, li), drinkCup('S'|'L'), pour(on), drinkAdd(id), drinkDone(),
     drinkBin(), grillPlace(tid, li), grillFlip(i), grillOff(i), grillState(i), topStart(rackIndex), topDrop(top, x, y),
     topDone(), kimStart(tid, li), kimLay(ing), kimRoll(amount, q), kimCut(x), kimBin(), serve(tid, cid?), owed(kind),
     assign(station), hurry(), buy(id), avail(kind), result(quit), drain(), target(line), spots(type, top) }
   S.tickets[i] = { id, cid, lines: [{ kind: 'drink', type, size, adds } | { kind: 'grill', type, done, tops } |
   { kind: 'kimbap', fill: [3] }], made: [{ score, ... } | null], busy: [bool], t0 }. Events come out of drain() as
   { type, ... } (arrive, walk, counter, print, step, taste, unlock, burn, overflow, say, rush, break, done, ...).

   ── Art (optional; assets/femc/game/art/minigames/cafe/<name>.webp; each probed ONCE at start, else the drawn stand-in) ──
   FEMC-ART-TODO 50 / FEMC-ART-WIRING 50: bg-order (+ bg-order-night for rush 3) / bg-drinks / bg-griddle / bg-build, title,
   cup-s / cup-l (empty cups on the shelf), drink-<cocoa|yuzu|americano|sikhye> (finished, for trays and tickets),
   add-<id>, hotteok-<raw|cooking|done|burnt>, toast-<raw|cooking|done|burnt>, kimbap-<seaweed|rice|roll|sliced>,
   fill-<rice|egg|carrot|spinach|danmuji|ham|tuna>, top-<seeds|syrup|powder|sugar|ketchup|cheese>, tray, plate (under the item being topped), ticket,
   tipjar, coin, stampcard, stamp-<s|a|b|c>, sunoo-apron-<neutral|happy|surprised|flustered|sad|serious>,
   face-<regular>-<neutral|happy|grumpy> (mrkang, nurse, kids, mrchoi, mryoon, mrsbae). Faces otherwise are the HOAX scene
   portraits (assets/femc/portraits/<id>-hoax/<expr>.webp). Sounds: Web Audio, made here, no files; the café loop is a
   quiet chord progression (M toggles it; none when muted or with Performance). Pink and black chrome; the scenes are warm. */
window.FemcCafe = (() => {
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const base = () => (window.FemcGame && window.FemcGame.base) || (typeof document !== 'undefined' && document.querySelector && document.querySelector('script[src*="minigames/cafe"]')?.src.split('assets/')[0]) || '';
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const won = n => '₩' + Math.round(n).toLocaleString('en-US');
  const mulberry = s => () => { s |= 0; s = s + 0x6D2B79F5 | 0; let t = Math.imul(s ^ s >>> 15, 1 | s); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  const avg = a => a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0;

  /* ── the menu ── */
  const DRINKS = {
    cocoa:     { name: 'Hot chocolate', adds: ['cream', 'marsh', 'cinnamon'], price: 4500, col: '#6b3a22', src: 'kettle' },
    yuzu:      { name: 'Yuzu tea',      adds: ['honey', 'ginger'],            price: 4000, col: '#f2b632', src: 'kettle' },
    americano: { name: 'Americano',     adds: ['shot', 'syrup'],              price: 3500, col: '#3a2014', src: 'espresso' },
    sikhye:    { name: 'Sikhye',        adds: ['pine', 'ice'],                price: 3000, col: '#efdcae', src: 'jug' },
  };
  const ADDS = { cream: 'Whipped cream', marsh: 'Marshmallows', cinnamon: 'Cinnamon', honey: 'Honey', ginger: 'Ginger', shot: 'Extra shot', syrup: 'Vanilla syrup', pine: 'Pine nuts', ice: 'Ice' };
  const GRILL = {
    hotteok: { name: 'Hotteok', time: 6.5, tops: ['seeds', 'syrup', 'powder'], price: 2500 },
    toast:   { name: 'Street toast', time: 5, tops: ['sugar', 'ketchup', 'cheese'], price: 4000 },
  };
  const DONE = { light: 0.8, golden: 1, well: 1.2 };
  // topping spots on the item, in 0-1 of the item's box; a topping's spots never sit on another's
  const TOPS = {
    seeds:   { name: 'Seeds',          spots: [[0.5, 0.27], [0.27, 0.66], [0.73, 0.66]] },
    syrup:   { name: 'Honey syrup',    spots: [[0.5, 0.53]] },
    powder:  { name: 'Powdered sugar', spots: [[0.3, 0.4], [0.7, 0.4]] },
    sugar:   { name: 'Sugar',          spots: [[0.3, 0.28], [0.7, 0.28]] },
    ketchup: { name: 'Ketchup',        spots: [[0.25, 0.62], [0.5, 0.74], [0.75, 0.62]] },
    cheese:  { name: 'Cheese',         spots: [[0.5, 0.46]] },
  };
  const FILLS = { rice: 'Rice', egg: 'Egg', carrot: 'Carrot', spinach: 'Spinach', danmuji: 'Danmuji', ham: 'Ham', tuna: 'Tuna' };
  const KIMBAP = { name: 'Kimbap', price: 3500 };
  const CUTS = 5, LINE = 0.8;
  // base options; the rest come from the stamp card (UNLOCKS) or the shop (UPGRADES with gives)
  const BASE = { add: ['cream', 'honey', 'shot', 'pine', 'ice'], top: ['seeds', 'syrup', 'sugar', 'ketchup'], fill: ['egg', 'carrot', 'spinach', 'danmuji', 'ham'] };
  const UNLOCKS = [
    { at: 25,  id: 'marsh',  kind: 'add',  name: 'Marshmallows', note: 'for the hot chocolate' },
    { at: 60,  id: 'cheese', kind: 'top',  name: 'Cheese', note: 'on the street toast' },
    { at: 100, id: 'tuna',   kind: 'fill', name: 'Tuna', note: 'in the kimbap (not for Mr. Choi)' },
  ];
  const UPGRADES = [
    { id: 'kettle',   name: 'A gooseneck kettle', cost: 4000, note: 'The pour slows down near the line. Sunoo named it.' },
    { id: 'griddle2', name: 'More griddle',       cost: 6000, note: 'Four spots on the griddle. Halmeoni had a second one in the back the whole time.' },
    { id: 'jar',      name: 'Tip jar sign',       cost: 3000, note: 'Tips +20%. Sunoo letters it by hand. There are hearts.' },
    { id: 'radiator', name: 'Bleed the radiator', cost: 3500, note: 'Customers stay patient 20% longer. The draft from the door stops winning.' },
    { id: 'tag',      name: "Sunoo's name tag",   cost: 2500, note: "He chats less and works faster. He says it's because everyone already knows his name now." },
    { id: 'spice',    name: 'The spice shelf',    cost: 2500, gives: [['add', 'cinnamon'], ['add', 'ginger']], note: 'Cinnamon for the hot chocolate, ginger for the yuzu tea.' },
    { id: 'powder',   name: 'Powdered sugar',     cost: 2000, gives: [['top', 'powder']], note: 'A snowy hotteok topping. It gets everywhere.' },
    { id: 'syrup',    name: 'Vanilla syrup',      cost: 2000, gives: [['add', 'syrup']], note: 'For the americano people who are secretly hot chocolate people.' },
  ];
  const DIFF = {
    easy:   { size: [3, 4, 5], win: [95, 110, 120], grace: 1.4,  cook: 0.85, guides: true,  sunoo: 1.25, chat: [22, 34], cap: 420 },
    normal: { size: [4, 5, 6], win: [100, 120, 130], grace: 1,   cook: 1,    guides: true,  sunoo: 1,    chat: [18, 28], cap: 330 },
    hard:   { size: [5, 6, 7], win: [105, 125, 135], grace: 0.75, cook: 1.15, guides: false, sunoo: 0.85, chat: [14, 22], cap: 260 },
  };
  const RUSH_NAME = ['After school', 'Dusk', 'After dark'];
  const STATIONS = ['order', 'drinks', 'griddle', 'build'];
  const SUNOO_AT = ['order', 'drinks', 'griddle', 'build', 'off'];

  /* ── who comes in ── face = portrait folder (none = a letter badge until Kat's face-<id> art); fav = their usual */
  const D_ = (type, size, adds = []) => ({ kind: 'drink', type, size, adds });
  const G_ = (type, done = 'golden', tops = []) => ({ kind: 'grill', type, done, tops });
  const K_ = (...fill) => ({ kind: 'kimbap', fill });
  const ROSTER = [
    { id: 'jungwon', name: 'Jungwon', face: 'jungwon-hoax', fav: [D_('americano', 'L', ['shot']), G_('toast')], say: ["An americano, large, extra shot. And a toast. For the record, I did eat today.", 'Thank you. That was very efficient.', "It's fine. I'm not complaining. I'm noting it."] },
    { id: 'jake', name: 'Jake', face: 'jake-hoax', fav: [G_('hotteok', 'golden', ['seeds', 'syrup']), D_('cocoa', 'S', ['cream'])], say: ["One hotteok! Hot-tteok. Because it's hot. Sunoo, she didn't laugh.", "Sol, you're a lifesaver. A hotteok-saver.", "Okay! It's okay! I'm going to go cry in the car. Kidding! Mostly!"] },
    { id: 'niki', name: 'Niki', face: 'niki-hoax', fav: [D_('cocoa', 'L', ['cream', 'marsh']), G_('hotteok', 'well', ['syrup'])], say: ["Hot chocolate. The big one. Don't tell Heeseung.", 'W café. W service.', 'bruh.'] },
    { id: 'heeseung', name: 'Heeseung', face: 'heeseung-hoax', fav: [K_('egg', 'spinach', 'danmuji'), G_('toast', 'golden', ['sugar'])], say: ["Kimbap, and a toast. The toast is for Jungwon. He'll say he's not hungry.", "Thank you. I'll make sure he finishes it.", "It's okay, Sol. Long day."] },
    { id: 'jay', name: 'Jay', face: 'jay-hoax', fav: [D_('americano', 'L')], say: ["Americano. Whatever's fastest. Practice in twenty.", 'Bro. Perfect.', 'Bro.'] },
    { id: 'sunghoon', name: 'Sunghoon', face: 'sunghoon-hoax', fav: [D_('yuzu', 'S', ['honey']), G_('toast', 'light', ['sugar'])], say: ["Yuzu tea, please. In a pretty cup, if Sunoo's hiding any.", 'The prince approves.', 'Sunghoon forgives you. Eventually.'] },
    { id: 'cherry', name: 'Cherry', face: 'cherry-hoax', fav: [D_('sikhye', 'L', ['ice']), G_('hotteok', 'golden', ['powder'])], say: ["Sikhye, babe. Make it cute or I'm leaving a one-star review.", "Love you. Don't let it go to your head.", "I'm still leaving the review."] },
    { id: 'junkyu', name: 'Junkyu', face: 'junkyu-hoax', fav: [D_('cocoa', 'L', ['cream', 'marsh']), G_('hotteok', 'golden', ['seeds'])], say: ['Um, hi!! Can I get a hot chocolate? Please?', 'This is the best thing that happened all week!!!', "It's okay!! It's still nice!!"] },
    { id: 'asahi', name: 'Asahi', face: 'asahi-hoax', fav: [D_('americano', 'S')], say: ['Americano. No one cares how I take it.', "...It's good. Don't make it weird.", 'Deleting this café from my memory.'] },
    { id: 'jaehyuk', name: 'Jaehyuk', face: 'jaehyuk-hoax', fav: [D_('yuzu', 'L', ['honey']), K_('egg', 'carrot', 'spinach')], say: ["Yuzu tea and a kimbap, please. I'm studying, so, quietly. If that's possible.", 'Thank you. Genuinely.', "It's fine. I'll study anyway."] },
    { id: 'hyunsuk', name: 'Hyunsuk', face: 'hyunsuk-hoax', fav: [G_('toast', 'well', ['ketchup']), D_('americano', 'S')], say: ['Toast. Whatever, man. The egg one. Burn it a little.', "Okay. That's actually good.", 'Forget it, man.'] },
    { id: 'yuna', name: 'Yuna', face: 'yuna-hoax', fav: [G_('hotteok', 'light', ['seeds']), D_('yuzu', 'S')], say: ["One hotteok, and a little yuzu tea. I'm being good this week.", "Okay, I'm coming back tomorrow.", 'Hm. Okay.'] },
    { id: 'seoyeon', name: 'Seoyeon', face: 'seoyeon-hoax', fav: [D_('yuzu', 'L', ['honey', 'ginger'])], say: ["Yuzu tea, please! It's so cold out there.", 'Ahh, warm hands. Thank you!', 'Oh. Um. Thanks anyway!'] },
    { id: 'minho', name: 'Minho', face: 'minho-hoax', fav: [G_('toast', 'golden', ['ketchup', 'cheese']), K_('ham', 'egg', 'danmuji')], say: ['Toast and kimbap. I skipped lunch for exams.', 'You saved my life. Probably.', 'Exams wait for no man.'] },
    { id: 'dohyun', name: 'Dohyun', face: 'dohyun-hoax', fav: [D_('americano', 'L', ['shot', 'syrup'])], say: ['Americano. Large. Very large. Is there a larger?', 'Bless this café.', "I'll just... sleep instead."] },
    { id: 'mrkang', name: 'Mr. Kang', tag: 'the mail carrier', fav: [D_('americano', 'S', ['shot']), G_('toast')], say: ["Americano, quick. I've got the whole hill to do.", "That'll get me up the hill.", 'The mail waits for nobody.'] },
    { id: 'nurse', name: 'Nurse Lim', tag: 'off a night shift', fav: [G_('toast', 'well'), D_('americano', 'L', ['shot'])], say: ["Toast, and the biggest americano you're allowed to make.", "You're an angel. I'm going to sleep for a year.", "I'll sleep instead. Honestly, fine."] },
    { id: 'kids', name: 'Middle schoolers', tag: 'two of them, one wallet', fav: [G_('hotteok', 'golden', ['seeds', 'syrup']), D_('sikhye', 'S')], say: ["One hotteok! We're sharing. It's fine. It's FINE.", 'THANK YOU, NOONA!', "It's fine. Mom's calling. Bye!"] },
    { id: 'mrchoi', name: 'Mr. Choi', tag: 'the hardware store', grumpy: true, never: ['tuna'], fav: [K_('egg', 'carrot', 'danmuji'), D_('sikhye', 'S', ['pine'])], say: ['Kimbap. Not the tuna. Never the tuna.', "Hm. Good kimbap. Don't tell anyone I said it.", 'Bah.'] },
    { id: 'mryoon', name: 'Mr. Yoon', tag: 'drives the 7 bus', fav: [D_('sikhye', 'L', ['pine']), G_('toast', 'golden', ['sugar'])], say: ['Sikhye. My wife says I drink too much coffee.', "Don't tell her I liked it this much.", "Bus doesn't drive itself."] },
    { id: 'mrsbae', name: 'Mrs. Bae', tag: 'the flower shop', grumpy: true, fav: [D_('yuzu', 'L', ['honey'])], say: ['Yuzu tea. Real honey. Not the squeezy bottle. I can tell.', 'Hm. Acceptable. Tell your halmeoni I said so.', "I've had better. I've had worse."] },
  ];
  const HALMEONI = { id: 'halmeoni', name: 'Halmeoni', face: 'halmeoni-hoax', picky: true, fixed: [D_('yuzu', 'L', ['honey']), G_('hotteok', 'golden', ['seeds', 'syrup'])],
    say: ["Sit. No, you sit. I'm a customer today. A yuzu tea, large, real honey. And a hotteok the way I make it.", 'Hm. Good. ...Good.', 'Hm. I see.'] };
  const MEH = ['Mm. It\'s fine.', "It's okay. It's food.", 'Hm. Not bad.', 'Thanks. It\'s okay.'];

  /* ── Sunoo and Halmeoni ── [expression, line] */
  const SUNOO = {
    open: [['happy', "Okay! Halmeoni went to the market, so it's just us. Orders at the counter, drinks, griddle, the build board. Tell me where you want me. Don't panic. I'm panicking a little. But you don't!"]],
    at: { order: [['happy', "I'll take orders! Saying hi is basically my job anyway."]], drinks: [['happy', 'Drinks! I am a very good pourer.']], griddle: [['happy', 'Griddle! On it. I love the griddle.']], build: [['happy', 'Kimbap and plating, leave it to me~']], off: [['neutral', "Okay! I'll just... stand here. Supportively."]] },
    chat: [['happy', 'Wait, is that a new scarf? It is SO cute—'], ['surprised', 'You got your exam back?? Tell me everything—'], ['happy', 'How is your dog? Do you have pictures? Show me—'], ['happy', 'You look so tired! Sit. Sit, sit. Okay, so—']],
    hurry: [['flustered', "Going! Going! I'm going!!"], ['flustered', 'Sorry, sorry! Back!'], ['neutral', 'Okay. Focus. I am a focused person.']],
    burnt: [['surprised', "Oh no. Oh no, that's black. We don't talk about it."], ['sad', "It's okay. It's a learning hotteok."]],
    five: [['happy', 'FIVE STARS. Sol. Sol!! Frame it.'], ['happy', "Did you see their face? That's the face. That's why we do this."]],
    grumpy: [['sad', "Aw. They'll be back. Everyone comes back."], ['neutral', 'Next one. I believe in the next one.']],
    unlock: [['happy', 'The stamp card! We get to make new stuff!!'], ['happy', 'New thing on the menu! I already love it.']],
    rush: [['happy', 'We survived!! Mostly!'], ['happy', 'Okay, that was a lot. I love it here.']],
    end: { S: ['happy', "Sol. SOL. Halmeoni smiled. I saw it. Nobody will believe me, but I saw it."], A: ['happy', 'We were so good!! Okay, mostly you. A little me.'], B: ['happy', "We survived! I'm putting that on the tip jar."], C: ['neutral', "Hey. Tomorrow's a new café. ...It's the same café. But new!"] },
  };
  const HAL = {
    look: [['neutral', "Don't mind me. I'm only the owner."], ['neutral', 'Hm. Let me see how you hold the kettle.']],
    burnt: [['serious', "Something is burning. I'm old, not dead. I can smell it."]],
    verdict: { S: ['happy', "Hm. You can come back. That's all I'm saying. ...Take a croissant."], A: ['neutral', 'Good. Not perfect. Perfect is for people with nothing else to do. Good.'], B: ['neutral', "The café is still standing. Sunoo, stop smiling like that, it wasn't that good."], C: ['neutral', 'You tried. I watched you try. Come tomorrow and try earlier.'] },
  };

  /* ════════════ the model (no DOM) ════════════ */
  function shift(o = {}) {
    const rnd = mulberry(Math.imul((o.seed != null ? o.seed : Math.floor(Math.random() * 1e9)) | 0, 2654435761) ^ 0x5bd1e995); for (let i = 0; i < 8; i++) rnd();
    const pick = a => a[Math.floor(rnd() * a.length)];
    const range = ([a, b]) => a + rnd() * (b - a);
    const shuffle = a => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
    const diff = DIFF[o.difficulty] ? o.difficulty : 'normal', D = DIFF[diff];
    let deck = [], uid = 0, tnum = 0;
    const S = {
      phase: 'brief', rush: -1, t: 0, money: 0, tips: 0, served: 0, left: 0, customers: 0, stars: [], burnt: 0, wasted: 0,
      cust: [], door: [], counter: null, tickets: [], sched: [],
      drink: null, griddle: [null, null], rack: [], kimbap: null, topping: null,
      points: 0, unlocked: [], upgrades: [], specialsLog: [], rushes: [], steps: { wait: [], drinks: [], griddle: [], build: [] },
      sunoo: { at: 'griddle', job: null, chat: 0, chatWith: null, next: range(D.chat), cd: 0, hurried: 0, chats: 0 },
      halRush: 1 + Math.floor(rnd() * 2), halmeoni: null, out: [], diff, guides: D.guides,
    };
    const emit = (type, x = {}) => S.out.push({ type, ...x });
    const has = u => S.upgrades.includes(u);
    const C = id => S.cust.find(c => c.id === id);
    const T = id => S.tickets.find(t => t.id === id);
    const say = (who, line, extra = {}) => emit('say', { who, line, ...extra });

    /* what's on the menu right now */
    function avail(kind) {
      const a = [...BASE[kind]];
      S.unlocked.forEach(id => { const u = UNLOCKS.find(x => x.id === id); if (u && u.kind === kind) a.push(id); });
      UPGRADES.forEach(u => has(u.id) && (u.gives || []).forEach(([k, id]) => k === kind && a.push(id)));
      return a;
    }
    const isNew = id => !BASE.add.includes(id) && !BASE.top.includes(id) && !BASE.fill.includes(id);
    const lineNew = l => (l.adds || l.tops || l.fill || []).filter(isNew).length;
    const price = l => l.kind === 'drink' ? DRINKS[l.type].price + (l.size === 'L' ? 500 : 0) : l.kind === 'grill' ? GRILL[l.type].price : KIMBAP.price;

    /* orders */
    const randomLine = who => {
      const r = rnd(), A = avail('add'), P = avail('top'), F = avail('fill').filter(f => !(who.never || []).includes(f));
      if (r < 0.42) { const type = pick(Object.keys(DRINKS)); const ok = DRINKS[type].adds.filter(a => A.includes(a)); return D_(type, rnd() < 0.5 ? 'S' : 'L', shuffle(ok).slice(0, Math.floor(rnd() * Math.min(3, ok.length + 1)))); }
      if (r < 0.8) { const type = rnd() < 0.5 ? 'hotteok' : 'toast'; const ok = GRILL[type].tops.filter(t => P.includes(t)); const dr = rnd(); return G_(type, dr < 0.6 ? 'golden' : dr < 0.8 ? 'light' : 'well', shuffle(ok).slice(0, Math.floor(rnd() * Math.min(3, ok.length + 1)))); }
      return K_(...shuffle(F).slice(0, 3));
    };
    const fitLine = (l, who) => {   // a favourite with things not on the menu yet: drop them (kimbap: swap in something we have)
      const A = avail('add'), P = avail('top'), F = avail('fill').filter(f => !(who.never || []).includes(f));
      if (l.kind === 'drink') return D_(l.type, l.size, l.adds.filter(a => A.includes(a)));
      if (l.kind === 'grill') return G_(l.type, l.done, l.tops.filter(t => P.includes(t)));
      const fill = l.fill.filter(f => F.includes(f)); for (const f of shuffle(F)) if (fill.length < 3 && !fill.includes(f)) fill.push(f);
      return K_(...fill);
    };
    function makeLines(who) {
      if (who.fixed) return who.fixed.map(l => fitLine(l, who));
      if (who.fav && rnd() < 0.65) return who.fav.map(l => fitLine(l, who));
      const n = 1 + (rnd() < 0.55 ? 1 : 0) + (S.rush === 2 && rnd() < 0.2 ? 1 : 0), L = [];
      for (let i = 0; i < n; i++) { let l = randomLine(who), k = 0; while (k++ < 4 && L.some(x => x.kind === l.kind)) l = randomLine(who); L.push(l); }
      return L;
    }
    const nextWho = () => { if (!deck.length) deck = shuffle(ROSTER); return deck.pop(); };
    const arrive = who => {
      const c = { id: ++uid, who: who.id, name: who.name, face: who.face || null, tag: who.tag || '', say: who.say, picky: !!who.picky, grumpy: !!who.grumpy, hal: who.id === 'halmeoni',
        src: who, state: 'door', t: 0, arrived: S.t, chatted: 0, ticket: null, stars: 0, reaction: null };
      S.cust.push(c); S.door.push(c.id); S.customers++;
      emit('arrive', { id: c.id });
    };
    function takeOrder() {
      const c = C(S.counter); if (!c || c.state !== 'counter') return false;
      c.state = 'ordering'; c.t = 1.4; c.lines = makeLines(c.src);
      emit('order', { id: c.id }); say(c.id, ['neutral', c.say[0]], { name: c.name, face: c.face });
      return true;
    }
    const printTicket = c => {
      const t = { id: ++tnum, cid: c.id, lines: c.lines, made: c.lines.map(() => null), busy: c.lines.map(() => false), t0: c.arrived, rush: S.rush };
      S.tickets.push(t); c.ticket = t.id; c.state = 'seat'; S.counter = null;
      emit('print', { tid: t.id, id: c.id });
    };
    const lineOpen = (t, li, kind) => t && t.lines[li] && t.lines[li].kind === kind && !t.made[li] && !t.busy[li];
    // every line still owed of a kind, oldest ticket first: [{ tid, li, line }]
    function owed(kind) {
      const r = [];
      S.tickets.forEach(t => t.lines.forEach((l, li) => { if (l.kind === kind && !t.made[li] && !t.busy[li]) r.push({ tid: t.id, li, line: l }); }));
      return r;
    }
    const target = l => DONE[l.done] || 1;
    const spots = (type, top) => TOPS[top] ? TOPS[top].spots : [];
    const step = (station, tid, li, score, parts, by) => { S.steps[station].push(score); emit('step', { station, tid, li, score: Math.round(score), parts, by: by || 'solar' }); };
    const make = (tid, li, rec) => { const t = T(tid); if (!t) return; t.made[li] = rec; t.busy[li] = false; if (t.made.every(Boolean)) emit('ready', { tid }); };

    /* drinks */
    function drinkStart(tid, li) {
      if (S.phase !== 'rush' || S.drink) return false;
      const t = T(tid); if (!lineOpen(t, li, 'drink')) return false;
      t.busy[li] = true; S.drink = { tid, li, type: t.lines[li].type, size: null, level: 0, pouring: false, adds: [], spilled: false };
      emit('drinkStart'); return true;
    }
    function drinkCup(size) { const d = S.drink; if (!d || d.level > 0 || (size !== 'S' && size !== 'L')) return false; d.size = size; emit('cup'); return true; }
    function pour(on) { const d = S.drink; if (!d || !d.size) return false; if (!!on === d.pouring) return false; d.pouring = !!on; emit(on ? 'pourOn' : 'pourOff'); return true; }
    function drinkAdd(a) {
      const d = S.drink; if (!d || !d.size || !DRINKS[d.type].adds.includes(a) || !avail('add').includes(a)) return false;
      const i = d.adds.indexOf(a); if (i >= 0) d.adds.splice(i, 1); else d.adds.push(a);
      emit('add', { id: a, on: i < 0 }); return true;
    }
    function drinkDone() {
      const d = S.drink; if (!d || !d.size || d.level < 0.1) return false;
      const t = T(d.tid), l = t && t.lines[d.li];
      d.pouring = false; S.drink = null;
      if (!l) { S.wasted++; return true; }
      const pourS = d.spilled ? 25 : clamp(100 - Math.abs(d.level - LINE) * 350, 0, 100);
      const miss = l.adds.filter(a => !d.adds.includes(a)).length, extra = d.adds.filter(a => !l.adds.includes(a)).length;
      const addS = clamp(100 - 30 * miss - 20 * extra, 0, 100), cupS = d.size === l.size ? 100 : 0;
      const score = 0.5 * pourS + 0.3 * addS + 0.2 * cupS;
      make(d.tid, d.li, { kind: 'drink', score, size: d.size, adds: [...d.adds], level: d.level });
      step('drinks', d.tid, d.li, score, [['Pour', pourS], ['Add-ins', addS], ['Cup', cupS]]);
      return true;
    }
    function drinkBin() { const d = S.drink; if (!d) return false; const t = T(d.tid); if (t) t.busy[d.li] = false; S.drink = null; S.wasted++; emit('bin'); return true; }

    /* griddle */
    function grillPlace(tid, li, by) {
      if (S.phase !== 'rush') return false;
      const t = T(tid); if (!lineOpen(t, li, 'grill')) return false;
      const i = S.griddle.indexOf(null); if (i < 0) return emit('nope', { text: 'The griddle is full.' }), false;
      t.busy[li] = true; S.griddle[i] = { tid, li, type: t.lines[li].type, side: 0, cook: [0, 0], flips: 0, warned: [false, false], by: by || 'solar', sn: (rnd() - 0.5) * 0.2 };
      emit('place', { i }); return true;
    }
    function grillFlip(i) { const g = S.griddle[i]; if (!g) return false; g.side = 1 - g.side; g.flips++; emit('flip', { i }); return true; }
    function grillState(i) {
      const g = S.griddle[i]; if (!g) return null;
      const t = T(g.tid), l = t && t.lines[g.li], tg = l ? target(l) : 1, c = g.cook;
      if (c[0] > tg + 0.3 || c[1] > tg + 0.3) return 'burning';
      if (c[0] >= tg - 0.12 && c[1] >= tg - 0.12) return 'ready';
      if (c[g.side] >= tg - 0.12) return 'flip';
      return 'cooking';
    }
    function grillOff(i, by) {
      const g = S.griddle[i]; if (!g) return false;
      const t = T(g.tid), l = t && t.lines[g.li];
      S.griddle[i] = null;
      if (!l) { S.wasted++; return true; }
      if (g.cook[0] < 0.3 && g.cook[1] < 0.3) { S.griddle[i] = g; emit('nope', { text: 'Still raw.' }); return false; }
      const tg = target(l), side = c => clamp(100 - Math.abs(c - tg) * 200, 0, 100);
      const a = side(g.cook[0]), b = side(g.cook[1]), burnt = g.cook.some(c => c > tg + 0.6), score = (a + b) / 2;
      S.rack.push({ tid: g.tid, li: g.li, type: g.type, grill: score, burnt, cook: [...g.cook] });
      t.busy[g.li] = true;   // stays busy on the rack until plated
      step('griddle', g.tid, g.li, score, [['Side 1', a], ['Side 2', b]], by || g.by);
      emit('off', { i, burnt }); return true;
    }

    /* build: toppings and plating */
    function topStart(ri) {
      if (S.topping || S.phase !== 'rush') return false;
      const r = S.rack[ri]; if (!r) return false;
      S.rack.splice(ri, 1); S.topping = { ...r, drops: [] }; emit('topStart'); return true;
    }
    function topDrop(top, x, y) {
      const p = S.topping; if (!p || !TOPS[top] || !GRILL[p.type].tops.includes(top) || !avail('top').includes(top)) return false;
      if (p.drops.length >= 12) return false;
      p.drops.push({ top, x: clamp(x, 0, 1), y: clamp(y, 0, 1) }); emit('drop', { top }); return true;
    }
    function topScore(p, l) {
      const want = l.tops, parts = [];
      let pen = 0;
      p.drops.forEach(d => { if (!want.includes(d.top)) pen += 25; });
      for (const top of want) {
        const sp = TOPS[top].spots.map(s => ({ s, used: false })), ds = p.drops.filter(d => d.top === top), sc = [];
        ds.forEach(d => {
          let best = null, bd = 9; sp.forEach(x => { if (x.used) return; const dd = Math.hypot(d.x - x.s[0], d.y - x.s[1]); if (dd < bd) { bd = dd; best = x; } });
          if (best) { best.used = true; sc.push(bd < 0.07 ? 100 : clamp(100 - (bd - 0.07) * 500, 0, 100)); } else pen += 10;
        });
        while (sc.length < sp.length) sc.push(0);
        parts.push(avg(sc));
      }
      return clamp((want.length ? avg(parts) : 100) - pen, 0, 100);
    }
    function topDone(by) {
      const p = S.topping; if (!p) return false;
      const t = T(p.tid), l = t && t.lines[p.li]; S.topping = null;
      if (!l) { S.wasted++; return true; }
      const ts = by ? 68 + rnd() * 18 : topScore(p, l), score = 0.6 * p.grill + 0.4 * ts;
      make(p.tid, p.li, { kind: 'grill', score, grill: p.grill, top: ts, burnt: p.burnt, drops: p.drops, cook: p.cook });
      step('build', p.tid, p.li, ts, [['Toppings', ts]], by);
      return true;
    }

    /* build: kimbap */
    function kimStart(tid, li) {
      if (S.phase !== 'rush' || S.kimbap) return false;
      const t = T(tid); if (!lineOpen(t, li, 'kimbap')) return false;
      t.busy[li] = true; S.kimbap = { tid, li, laid: [], roll: 0, rq: [], cuts: [], stage: 'lay' };
      emit('kimStart'); return true;
    }
    function kimLay(ing) {
      const k = S.kimbap; if (!k || k.stage !== 'lay' || !FILLS[ing] || (ing !== 'rice' && !avail('fill').includes(ing)) || k.laid.includes(ing)) return false;
      k.laid.push(ing); emit('lay', { ing });
      if (k.laid.length >= 4) k.stage = 'roll';
      return true;
    }
    function kimRoll(amount, q = 1) {
      const k = S.kimbap; if (!k || k.stage !== 'roll' || !(amount > 0)) return false;
      k.roll = Math.min(1, k.roll + amount); k.rq.push(clamp(q, 0, 1)); emit('roll');
      if (k.roll >= 1) k.stage = 'cut';
      return true;
    }
    function kimCut(x) {
      const k = S.kimbap; if (!k || k.stage !== 'cut' || !(x > 0.03 && x < 0.97)) return false;
      if (k.cuts.some(c => Math.abs(c - x) < 0.04)) return false;
      k.cuts.push(x); emit('chop');
      if (k.cuts.length >= CUTS) kimDone();
      return true;
    }
    function kimDone(by) {
      const k = S.kimbap; if (!k) return false;
      const t = T(k.tid), l = t && t.lines[k.li]; S.kimbap = null;
      if (!l) { S.wasted++; return true; }
      let score, parts;
      if (by) { score = 68 + rnd() * 20; parts = [['Kimbap', score]]; }
      else {
        const want = ['rice', ...l.fill], orderS = want.reduce((a, f, i) => a + (k.laid[i] === f ? 25 : l.fill.includes(k.laid[i]) || k.laid[i] === 'rice' ? 10 : 0), 0);
        const rollS = avg(k.rq) * 100, cs = [...k.cuts].sort((a, b) => a - b), err = avg(cs.map((c, i) => Math.abs(c - (i + 1) / (CUTS + 1))));
        const cutS = clamp(100 - err * 900, 0, 100);
        score = 0.45 * orderS + 0.2 * rollS + 0.35 * cutS; parts = [['Order', orderS], ['Roll', rollS], ['Slices', cutS]];
      }
      make(k.tid, k.li, { kind: 'kimbap', score, laid: by ? ['rice', ...l.fill] : [...k.laid] });
      step('build', k.tid, k.li, score, parts, by);
      return true;
    }
    function kimBin() { const k = S.kimbap; if (!k) return false; const t = T(k.tid); if (t) t.busy[k.li] = false; S.kimbap = null; S.wasted++; emit('bin'); return true; }

    /* serving */
    const starsOf = (total, picky) => { const x = total - (picky ? 8 : 0); return x >= 92 ? 5 : x >= 82 ? 4.5 : x >= 72 ? 4 : x >= 62 ? 3.5 : x >= 52 ? 3 : x >= 42 ? 2.5 : x >= 32 ? 2 : x >= 20 ? 1.5 : 1; };
    function serve(tid, cid) {
      const t = T(tid); if (!t || S.phase !== 'rush') return false;
      if (cid != null && cid !== t.cid) { emit('nope', { text: "That's not their order." }); return false; }
      if (!t.made.every(Boolean)) { emit('nope', { text: 'That order isn’t finished.' }); return false; }
      const c = C(t.cid); if (!c) return false;
      const n = t.lines.length, grace = (40 + 22 * n) * D.grace * (has('radiator') ? 1.2 : 1), w = S.t - t.t0 - c.chatted;
      const waitS = clamp(100 - Math.max(0, w - grace) * 1.1, 0, 100);
      const itemS = avg(t.made.map(m => m.score)), total = 0.25 * waitS + 0.75 * itemS;
      const stars = starsOf(total, c.picky), reaction = stars >= 4 ? 'happy' : stars >= 2.5 ? 'meh' : 'grumpy';
      const novel = t.lines.reduce((a, l) => a + lineNew(l), 0);
      const tip = Math.round((t.lines.reduce((a, l) => a + price(l), 0) * (0.03 + 0.04 * stars) * (has('jar') ? 1.2 : 1) * (c.hal ? 3 : 1) + 300 * novel) / 100) * 100;
      const pts = Math.round(total / 10) + (stars >= 4.5 ? 3 : 0);
      S.steps.wait.push(waitS);
      S.tickets.splice(S.tickets.indexOf(t), 1);
      c.state = 'gone'; c.stars = stars; c.reaction = reaction;
      S.served++; S.rushServed++; S.stars.push(stars); S.tips += tip; S.money += tip; S.rushTips += tip; S.rushStars.push(stars);
      if (c.hal) S.halmeoni = { stars, reaction };
      emit('taste', { tid, id: c.id, total: Math.round(total), stars, reaction, tip, wait: Math.round(waitS), items: t.made.map((m, i) => ({ kind: t.lines[i].kind, type: t.lines[i].type, score: Math.round(m.score) })) });
      say(c.id, [reaction === 'happy' ? 'happy' : reaction === 'meh' ? 'neutral' : 'sad', reaction === 'happy' ? c.say[1] : reaction === 'meh' ? pick(MEH) : c.say[2]], { name: c.name, face: c.face, reaction });
      if (stars >= 5 && rnd() < 0.6) say('sunoo', pick(SUNOO.five)); else if (reaction === 'grumpy' && rnd() < 0.5) say('sunoo', pick(SUNOO.grumpy));
      addPoints(pts);
      return true;
    }
    function addPoints(p) {
      const before = S.points; S.points += p;
      UNLOCKS.forEach(u => { if (before < u.at && S.points >= u.at && !S.unlocked.includes(u.id)) { S.unlocked.push(u.id); emit('unlock', { id: u.id, name: u.name, note: u.note }); say('sunoo', pick(SUNOO.unlock)); } });
    }
    const walkout = c => {
      const t = T(c.ticket);
      if (t) {
        S.tickets.splice(S.tickets.indexOf(t), 1);
        if (S.drink && S.drink.tid === t.id) { S.drink = null; S.wasted++; }
        if (S.kimbap && S.kimbap.tid === t.id) { S.kimbap = null; S.wasted++; }
        if (S.topping && S.topping.tid === t.id) { S.topping = null; S.wasted++; }
        S.griddle = S.griddle.map(g => g && g.tid === t.id ? (S.wasted++, null) : g);
        S.rack = S.rack.filter(r => r.tid !== t.id || (S.wasted++, false));
        if (S.sunoo.job && S.sunoo.job.tid === t.id) S.sunoo.job = null;
      }
      if (S.counter === c.id) S.counter = null;
      S.door = S.door.filter(x => x !== c.id);
      c.state = 'gone'; c.reaction = 'left'; S.left++; S.rushLeft++;
      emit('left', { id: c.id }); say(c.id, ['sad', c.say[2]], { name: c.name, face: c.face });
    };

    /* Sunoo */
    function assign(at) { if (!SUNOO_AT.includes(at) || S.sunoo.at === at) return false; S.sunoo.at = at; S.sunoo.job = null; S.sunoo.cd = 0.5; say('sunoo', pick(SUNOO.at[at])); emit('assign', { at }); return true; }
    function hurry() { const su = S.sunoo; if (su.chat <= 0) return false; su.chat = 0; su.chatWith = null; su.hurried++; su.cd = 0.3; say('sunoo', pick(SUNOO.hurry)); emit('hurry'); return true; }
    function sunooTick(dt) {
      const su = S.sunoo, sp = D.sunoo * (has('tag') ? 1.15 : 1);
      if (su.at === 'off') return;
      if (su.chat > 0) { su.chat -= dt; const c = C(su.chatWith); if (c && c.state === 'seat') c.chatted += dt; if (!c || c.state === 'gone') su.chat = 0; return; }
      su.next -= dt;
      if (su.next <= 0) {
        su.next = range(D.chat) * (has('tag') ? 1.6 : 1);
        const cs = S.cust.filter(c => c.state === 'seat');
        if (cs.length) { const c = pick(cs); su.chat = 4.5; su.chatWith = c.id; su.chats++; say('sunoo', pick(SUNOO.chat)); emit('chat', { id: c.id }); return; }
      }
      if (su.job) {
        su.job.t -= dt * sp;
        if (su.job.t <= 0) {
          const j = su.job; su.job = null;
          const t = T(j.tid);
          if (t && j.kind === 'drink') { const score = 68 + rnd() * 20; make(j.tid, j.li, { kind: 'drink', score, size: t.lines[j.li].size, adds: [...t.lines[j.li].adds], level: LINE }); step('drinks', j.tid, j.li, score, [['Sunoo', score]], 'sunoo'); }
          if (t && j.kind === 'kimbap') { const score = 68 + rnd() * 20; make(j.tid, j.li, { kind: 'kimbap', score, laid: ['rice', ...t.lines[j.li].fill] }); step('build', j.tid, j.li, score, [['Sunoo', score]], 'sunoo'); }
          if (t && j.kind === 'plate') { const ts = 68 + rnd() * 18, score = 0.6 * j.r.grill + 0.4 * ts; make(j.tid, j.li, { kind: 'grill', score, grill: j.r.grill, top: ts, burnt: j.r.burnt, drops: [], cook: j.r.cook, sunoo: true }); step('build', j.tid, j.li, ts, [['Sunoo', ts]], 'sunoo'); }
        }
        return;
      }
      if ((su.cd -= dt) > 0) return;
      const done = () => { su.cd = 0.8 / sp; };
      if (su.at === 'order') { const c = C(S.counter); if (c && c.state === 'counter') { takeOrder(); su.cd = 2 / sp; } return; }
      if (su.at === 'drinks') { const w = owed('drink')[0]; if (w) { T(w.tid).busy[w.li] = true; su.job = { kind: 'drink', tid: w.tid, li: w.li, t: 9, T: 9 }; emit('sunooJob', { kind: 'drink' }); } return done(); }
      if (su.at === 'build') {
        if (S.rack.length && !S.rack[0].hold) { const r = S.rack.shift(); su.job = { kind: 'plate', tid: r.tid, li: r.li, r, t: 6, T: 6 }; emit('sunooJob', { kind: 'plate' }); return done(); }
        const w = owed('kimbap')[0]; if (w) { T(w.tid).busy[w.li] = true; su.job = { kind: 'kimbap', tid: w.tid, li: w.li, t: 13, T: 13 }; emit('sunooJob', { kind: 'kimbap' }); }
        return done();
      }
      if (su.at === 'griddle') {
        for (let i = 0; i < S.griddle.length; i++) {
          const g = S.griddle[i]; if (!g) continue; const t = T(g.tid), tg = t ? target(t.lines[g.li]) : 1;
          if (g.cook[0] >= tg - 0.05 + g.sn && g.cook[1] >= tg - 0.05 + g.sn) { grillOff(i, 'sunoo'); return done(); }
          if (g.cook[g.side] >= tg - 0.05 + g.sn && g.cook[1 - g.side] < tg - 0.2) { grillFlip(i); return done(); }
        }
        const w = owed('grill')[0]; if (w && S.griddle.includes(null)) { grillPlace(w.tid, w.li, 'sunoo'); return done(); }
      }
    }

    /* rushes */
    function startRush() {
      if (S.phase !== 'brief' && S.phase !== 'break') return false;
      S.rush++; S.phase = 'rush'; S.t = 0; S.rushServed = 0; S.rushLeft = 0; S.rushTips = 0; S.rushStars = [];
      S.griddle = Array(has('griddle2') ? 4 : 2).fill(null);
      S.specialsLog.push([...S.unlocked, ...UPGRADES.filter(u => u.gives && has(u.id)).map(u => u.id)]);
      const W = D.win[S.rush], n = D.size[S.rush];
      const times = Array.from({ length: n }, (_, k) => k === 0 ? 1 : (W * k / n) + (rnd() - 0.5) * (W / n) * 0.7).sort((a, b) => a - b);
      S.sched = times.map(at => ({ at, who: null }));
      if (S.rush === S.halRush) S.sched[Math.floor(n / 2)].who = HALMEONI;
      S.halLook = S.rush === 0 ? W * 0.4 : -1;
      emit('rush', { rush: S.rush });
      return true;
    }
    function endRush() {
      if (S.drink || S.kimbap || S.topping) S.wasted++;
      S.wasted += S.griddle.filter(Boolean).length + S.rack.length;
      S.drink = null; S.kimbap = null; S.topping = null; S.rack = []; S.griddle = S.griddle.map(() => null); S.door = []; S.counter = null;
      S.sunoo.job = null; S.sunoo.chat = 0;
      S.rushes.push({ served: S.rushServed, left: S.rushLeft, tips: S.rushTips, stars: Math.round(avg(S.rushStars) * 10) / 10, event: null });
      if (S.rush >= 2) { S.phase = 'done'; emit('done'); }
      else { S.phase = 'break'; emit('break'); say('sunoo', pick(SUNOO.rush)); }
    }
    function tick(dt) {
      if (S.phase !== 'rush') return;
      S.t += dt;
      while (S.sched.length && S.sched[0].at <= S.t) arrive(S.sched.shift().who || nextWho());
      if (S.halLook > 0 && S.t >= S.halLook) { S.halLook = -1; const burning = S.griddle.some(g => g && Math.max(...g.cook) > 1.6); say('halmeoni', burning ? HAL.burnt[0] : pick(HAL.look)); emit('halLook'); }
      // the door → a walk-in → the counter → ordering → a seat
      if (S.counter == null && S.door.length) { const c = C(S.door.shift()); c.state = 'walk'; c.t = 1.1; S.counter = c.id; emit('walk', { id: c.id }); }
      for (const c of S.cust) {
        if (c.state === 'walk' && (c.t -= dt) <= 0) { c.state = 'counter'; emit('counter', { id: c.id }); }
        else if (c.state === 'ordering' && (c.t -= dt) <= 0) printTicket(c);
        else if (c.state !== 'gone' && S.t - c.arrived > D.cap * (has('radiator') ? 1.2 : 1) && c.state !== 'ordering') walkout(c);
      }
      // drinks
      const d = S.drink;
      if (d && d.pouring) {
        const rate = 0.3 * (has('kettle') && d.level > LINE - 0.2 ? 0.45 : 1);
        d.level = Math.min(1.12, d.level + rate * dt);
        if (d.level > 1 && !d.spilled) { d.spilled = true; emit('overflow'); }
      }
      // griddle
      S.griddle.forEach((g, i) => {
        if (!g) return;
        g.cook[g.side] = Math.min(2.2, g.cook[g.side] + dt * D.cook / GRILL[g.type].time);
        const t = T(g.tid), tg = t ? target(t.lines[g.li]) : 1;
        if (g.cook[g.side] > tg + 0.6 && !g.warned[g.side]) { g.warned[g.side] = true; if (!g.warned[1 - g.side]) S.burnt++; emit('burn', { i }); if (rnd() < 0.5) say('sunoo', pick(SUNOO.burnt)); }
      });
      sunooTick(dt);
      if (!S.sched.length && !S.cust.some(c => c.state !== 'gone')) endRush();
      else if (S.t > D.win[S.rush] + D.cap + 60) { S.cust.filter(c => c.state !== 'gone').forEach(walkout); endRush(); }   // never hangs
    }

    /* between rushes */
    function buy(id) {
      const u = UPGRADES.find(x => x.id === id);
      if (S.phase !== 'break' || !u || has(id) || S.money < u.cost) return false;
      S.money -= u.cost; S.upgrades.push(id); emit('buy', { id }); return true;
    }
    function result(quit) {
      const total = S.customers || 1, a = avg(S.stars), ratio = S.served / total;
      const grade = quit ? 'C' : ratio >= 0.95 && a >= 4.3 ? 'S' : ratio >= 0.85 && a >= 3.6 ? 'A' : ratio >= 0.6 && a >= 2.6 ? 'B' : 'C';
      const st = k => Math.round(avg(S.steps[k]));
      return { won: !quit && grade !== 'C', grade, quit: !!quit, score: Math.max(0, Math.round(S.tips + 400 * S.served - 300 * S.left + 200 * S.stars.filter(s => s >= 5).length)),
        served: S.served, left: S.left, customers: S.customers, tips: S.tips, stars: Math.round(a * 10) / 10, fiveStars: S.stars.filter(s => s >= 5).length,
        burnt: S.burnt, wasted: S.wasted, rushes: S.rushes.map(r => ({ ...r })), upgrades: [...S.upgrades], specials: S.specialsLog.map(x => [...x]),
        unlocks: [...S.unlocked], points: S.points, steps: { wait: st('wait'), drinks: st('drinks'), griddle: st('griddle'), build: st('build') },
        halmeoni: S.halmeoni ? { ...S.halmeoni } : null, hurried: S.sunoo.hurried, charmed: S.sunoo.chats, verdict: HAL.verdict[grade][1], difficulty: diff };
    }
    const drain = () => S.out.splice(0);
    // the wait bar on a ticket / seat: 0 fresh … 1 the grace is used up (the Wait score starts dropping) … 2 cap
    const waitFrac = c => { if (!c) return 0; const t = T(c.ticket), n = t ? t.lines.length : 2, g = (40 + 22 * n) * D.grace * (has('radiator') ? 1.2 : 1); return clamp((S.t - c.arrived - c.chatted) / g, 0, 2); };
    return { S, D, tick, startRush, takeOrder, drinkStart, drinkCup, pour, drinkAdd, drinkDone, drinkBin, grillPlace: (t, l) => grillPlace(t, l), grillFlip, grillOff: i => grillOff(i), grillState,
      topStart, topDrop, topDone: () => topDone(), kimStart, kimLay, kimRoll, kimCut, kimBin, serve, owed, assign, hurry, buy, avail, result, drain, target, spots, price, waitFrac, C, T };
  }

  /* ════════════ sounds (Web Audio: effects, two loops and a quiet café music bed) ════════════ */
  function sounds(muted) {
    let ac = null, bus = null, mus = null, musOn = false, musTimer = 0, nextBar = 0, bar = 0;
    const loops = {};
    const A = () => {
      if (muted) return null;
      try {
        if (!ac) { ac = new (window.AudioContext || window.webkitAudioContext)(); bus = ac.createGain(); bus.gain.value = 0.9; bus.connect(ac.destination); }
        if (ac.state === 'suspended' && !A.paused) ac.resume();
        return ac;
      } catch (e) { return null; }
    };
    const tone = (f, dur, type = 'sine', g = 0.1, at = 0, f2, out) => {
      const a = A(); if (!a) return; const t = a.currentTime + at, o = a.createOscillator(), v = a.createGain();
      o.type = type; o.frequency.setValueAtTime(f, t); if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + dur);
      v.gain.setValueAtTime(0.0001, t); v.gain.exponentialRampToValueAtTime(g, t + Math.min(0.02, dur / 4)); v.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(v); v.connect(out || bus); o.start(t); o.stop(t + dur + 0.05);
    };
    let nbuf = null;
    const noiseBuf = a => { if (nbuf) return nbuf; const n = a.sampleRate * 2; nbuf = a.createBuffer(1, n, a.sampleRate); const d = nbuf.getChannelData(0); for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1; return nbuf; };
    const noise = (dur, f, q, g, at = 0, f2, type = 'bandpass') => {
      const a = A(); if (!a) return; const t = a.currentTime + at;
      const s = a.createBufferSource(), fl = a.createBiquadFilter(), v = a.createGain();
      s.buffer = noiseBuf(a); fl.type = type; fl.frequency.setValueAtTime(f, t); if (f2) fl.frequency.linearRampToValueAtTime(f2, t + dur); fl.Q.value = q;
      v.gain.setValueAtTime(0.0001, t); v.gain.exponentialRampToValueAtTime(g, t + Math.max(0.005, dur * 0.15)); v.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      s.connect(fl); fl.connect(v); v.connect(bus); s.start(t, Math.random()); s.stop(t + dur + 0.05);
    };
    // a looping noise (the sizzle, the pour) whose level is set every frame
    const loop = (name, f, q, type = 'bandpass') => {
      const a = A(); if (!a) return null; if (loops[name]) return loops[name];
      const s = a.createBufferSource(), fl = a.createBiquadFilter(), v = a.createGain();
      s.buffer = noiseBuf(a); s.loop = true; fl.type = type; fl.frequency.value = f; fl.Q.value = q; v.gain.value = 0;
      s.connect(fl); fl.connect(v); v.connect(bus); s.start();
      return (loops[name] = { v, fl });
    };
    const level = (name, g, f) => { const l = (g > 0.0005 || loops[name]) && loop(name, ...LOOP[name]); if (!l) return; l.v.gain.setTargetAtTime(g, ac.currentTime, 0.06); if (f) l.fl.frequency.setTargetAtTime(f, ac.currentTime, 0.1); };
    const LOOP = { sizzle: [3800, 0.5, 'highpass'], pour: [1100, 0.9] };
    // the café bed: Fmaj7 Em7 Dm7 Cmaj7 on soft sines, a bass note and a few pentatonic notes on top, 2.4 s a chord
    const CH = [[174.6, 220, 261.6, 329.6], [164.8, 196, 246.9, 293.7], [146.8, 174.6, 220, 261.6], [130.8, 164.8, 196, 246.9]];
    const PENTA = [523.3, 587.3, 659.3, 784, 880, 1046.5];
    const schedule = () => {
      const a = A(); if (!a || !musOn) return;
      if (!mus) { mus = a.createGain(); const lp = a.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2000; mus.connect(lp); lp.connect(bus); mus.gain.value = 0; }
      mus.gain.setTargetAtTime(0.8, a.currentTime, 0.5);
      if (nextBar < a.currentTime) nextBar = a.currentTime + 0.1;
      while (nextBar < a.currentTime + 1.2) {
        const ch = CH[bar % 4], at = nextBar - a.currentTime;
        ch.forEach((f, i) => tone(f, 2.6, 'sine', 0.016, at + i * 0.03, null, mus));
        tone(ch[0] / 2, 2.2, 'triangle', 0.028, at, null, mus);
        for (let k = 0; k < 4; k++) if (Math.random() < 0.45) tone(PENTA[Math.floor(Math.random() * PENTA.length)], 0.5, 'sine', 0.01, at + k * 0.6 + 0.3, null, mus);
        nextBar += 2.4; bar++;
      }
    };
    return {
      door: () => { tone(1975, 0.7, 'sine', 0.06); tone(2637, 0.8, 'sine', 0.045, 0.1); tone(1975, 0.5, 'sine', 0.03, 0.22); },
      print: () => { for (let i = 0; i < 9; i++) noise(0.03, 2400, 3, 0.06, i * 0.055); tone(880, 0.06, 'square', 0.02, 0.52); },
      blip: () => tone(1100, 0.05, 'triangle', 0.04),
      tab: () => noise(0.18, 600, 0.7, 0.05, 0, 2400),
      nope: () => tone(260, 0.16, 'square', 0.035, 0, 200),
      cup: () => { tone(1500, 0.08, 'triangle', 0.05); tone(2100, 0.12, 'sine', 0.03, 0.02); },
      add: () => { noise(0.08, 3000, 2, 0.05); tone(1320, 0.08, 'sine', 0.03); },
      squish: () => { tone(220, 0.18, 'sine', 0.09, 0, 110); noise(0.2, 400, 1, 0.06); },
      flip: () => { noise(0.07, 1800, 2, 0.1); tone(520, 0.08, 'triangle', 0.06, 0.03); noise(0.25, 4000, 0.6, 0.05, 0.08); },
      off: () => { noise(0.12, 900, 1.5, 0.06); tone(990, 0.1, 'triangle', 0.05, 0.05); },
      burn: () => { tone(160, 0.5, 'sawtooth', 0.035, 0, 110); noise(0.6, 2600, 0.8, 0.06); },
      overflow: () => noise(0.5, 700, 0.7, 0.12, 0, 300),
      lay: () => { noise(0.1, 900, 1, 0.06); tone(330, 0.08, 'sine', 0.04); },
      roll: () => noise(0.12, 500, 0.8, 0.04),
      chop: () => { tone(180, 0.05, 'square', 0.09, 0, 90); noise(0.05, 2600, 2, 0.1); noise(0.04, 5000, 2, 0.04, 0.03); },
      drop: () => tone(700 + Math.random() * 300, 0.09, 'sine', 0.05, 0, 500),
      plate: () => { tone(1568, 0.25, 'sine', 0.05); tone(2093, 0.3, 'sine', 0.035, 0.03); },
      star: n => { for (let i = 0; i < n; i++) tone(1320 * Math.pow(1.122, i), 0.18, 'sine', 0.045, i * 0.07); },
      coins: n => { for (let i = 0; i < n; i++) { const at = 0.25 + i * 0.09; tone(2400 + Math.random() * 800, 0.12, 'square', 0.02, at); tone(3600, 0.2, 'sine', 0.03, at + 0.01); } },
      happy: () => [784, 988, 1175, 1568].forEach((f, i) => tone(f, 0.22, 'triangle', 0.06, i * 0.09)),
      meh: () => { tone(660, 0.2, 'triangle', 0.05); tone(622, 0.3, 'triangle', 0.045, 0.18); },
      grumpy: () => { tone(330, 0.25, 'sawtooth', 0.035, 0, 300); tone(247, 0.4, 'sawtooth', 0.035, 0.22, 220); },
      unlock: () => [1047, 1319, 1568, 2093, 2637].forEach((f, i) => tone(f, 0.3, 'sine', 0.05, i * 0.08)),
      fanfare: () => [784, 988, 1175, 1568].forEach((f, i) => tone(f, 0.32, 'triangle', 0.07, i * 0.12)),
      sizzle: g => level('sizzle', g),
      pour: (on, lv) => level('pour', on ? 0.09 : 0, 800 + 700 * (lv || 0)),
      music: on => { musOn = !!on && !muted; if (musOn) { schedule(); clearInterval(musTimer); musTimer = setInterval(schedule, 400); } else { clearInterval(musTimer); if (mus && ac) mus.gain.setTargetAtTime(0, ac.currentTime, 0.3); } },
      pause: on => { A.paused = on; try { if (ac) on ? ac.suspend() : ac.resume(); } catch (e) {} },
      close: () => { clearInterval(musTimer); try { ac && ac.close(); } catch (e) {} },
    };
  }

  /* ════════════ drawn stand-ins (SVG / CSS) ════════════ */
  const COOK = [[0, [246, 230, 200]], [0.8, [236, 192, 112]], [1, [214, 142, 56]], [1.2, [170, 96, 36]], [1.6, [92, 50, 22]], [2.1, [30, 18, 12]]];
  const cookCol = c => {
    let i = 0; while (i < COOK.length - 2 && c > COOK[i + 1][0]) i++;
    const [a, ca] = COOK[i], [b, cb] = COOK[i + 1], k = clamp((c - a) / (b - a), 0, 1);
    return `rgb(${ca.map((v, j) => Math.round(v + (cb[j] - v) * k)).join(',')})`;
  };
  const FILL_COL = { rice: '#fbf7ee', egg: '#ffc93c', carrot: '#ff8a3c', spinach: '#3f8f34', danmuji: '#f0e25a', ham: '#f29aa8', tuna: '#d8c3a0' };
  const topSVG = (top, x = 0, y = 0, s = 1) => {
    const g = b => `<g transform="translate(${x} ${y}) scale(${s})">${b}</g>`;
    if (top === 'seeds') return g([[-4, -2], [3, -3], [0, 3], [-5, 4], [5, 3]].map(([a, b]) => `<ellipse cx="${a}" cy="${b}" rx="2.2" ry="1.3" fill="#f5ead0" stroke="#7a5a30" stroke-width=".6" transform="rotate(${a * 9} ${a} ${b})"/>`).join(''));
    if (top === 'syrup') return g('<path d="M-9 0c0-6 5-9 9-9s10 4 9 9-6 8-10 8-8-3-8-8z" fill="#e39a1f" opacity=".9"/><ellipse cx="-3" cy="-3" rx="3" ry="1.6" fill="#ffd37a"/>');
    if (top === 'powder') return g([[-5, -3], [0, -5], [5, -2], [-3, 3], [3, 4], [0, 0], [-7, 1], [7, 2]].map(([a, b]) => `<circle cx="${a}" cy="${b}" r="2.4" fill="#fff" opacity=".85"/>`).join(''));
    if (top === 'sugar') return g([[-5, -3], [2, -5], [6, 1], [-2, 3], [-6, 4], [3, 5]].map(([a, b]) => `<rect x="${a}" y="${b}" width="2.6" height="2.6" fill="#fff" stroke="#e9d9c9" stroke-width=".4" transform="rotate(30 ${a} ${b})"/>`).join(''));
    if (top === 'ketchup') return g('<path d="M-9 2l4-6 4 6 4-6 4 6 3-4" fill="none" stroke="#d62a1e" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>');
    if (top === 'cheese') return g('<path d="M-9-8h18v12c-2 4-4 1-5 4s-4 2-5-1-5 1-8-3z" fill="#ffcc33" stroke="#e0a812" stroke-width=".8"/>');
    return '';
  };
  // hotteok / toast seen from above: the top is the side facing up (--up), the rim glow the side on the griddle (--dn)
  const grillSVG = (type, drops = [], opts = {}) => {
    const body = type === 'hotteok'
      ? `<ellipse cx="50" cy="52" rx="43" ry="40" style="fill:var(--dn,#f6e6c8)"/><ellipse cx="50" cy="50" rx="39" ry="36" style="fill:var(--up,#f6e6c8)"/><path d="M28 44q10-8 22-6M58 62q10 0 16-8M36 66q6 4 12 3" fill="none" stroke="rgba(90,50,20,.25)" stroke-width="2" stroke-linecap="round"/>`
      : `<rect x="8" y="14" width="84" height="74" rx="14" style="fill:var(--dn,#f3dcae)"/><rect x="11" y="12" width="78" height="70" rx="12" style="fill:var(--up,#f3dcae)"/><rect x="18" y="20" width="64" height="54" rx="8" fill="rgba(255,250,235,.35)"/><path d="M14 70q36 10 72 0" fill="none" stroke="#7cc46a" stroke-width="3" opacity=".7"/>`;
    const tops = drops.map(d => topSVG(d.top, d.x * 100, d.y * 100, 1.25)).join('');
    const guide = (opts.guides || []).map(([top, [x, y]]) => `<circle cx="${x * 100}" cy="${y * 100}" r="7" class="cf-guide g-${top}"/>`).join('');
    return `<svg viewBox="0 0 100 100" aria-hidden="true">${body}${guide}${tops}${opts.smoke ? '<g class="cf-smoke"><path d="M35 20q-5-9 2-16M52 18q-5-9 2-16M68 22q-5-9 2-16" fill="none" stroke="#6a5a5a" stroke-width="3" stroke-linecap="round"/></g>' : ''}</svg>`;
  };
  const drinkSVG = (type, size, adds = []) => {
    const col = DRINKS[type] ? DRINKS[type].col : '#a86';
    const L = size === 'L';
    const cup = L ? '<path d="M24 14h52l-6 92H30z" fill="#fff4f9" stroke="#3a1d2c" stroke-width="3"/><path d="M22 10h56v8H22z" fill="#ff4f9e"/>'
      : '<path d="M20 40h56v56c0 8-6 12-12 12H32c-6 0-12-4-12-12z" fill="#fff4f9" stroke="#3a1d2c" stroke-width="3"/><path d="M76 52c14 0 14 26 0 26" fill="none" stroke="#3a1d2c" stroke-width="5"/>';
    const top = L ? 22 : 46, liq = L ? `<path d="M26 ${top}h48l-1 6H27z" fill="${col}"/>` : `<rect x="23" y="${top}" width="50" height="7" fill="${col}"/>`;
    const add = adds.map(a => ({
      cream: `<path d="M30 ${top}q4-14 20-14t20 14q-6-4-10 0-6-6-10 0-6-4-10 0z" fill="#fff" stroke="#e8d5df" stroke-width="1.4"/>`,
      marsh: [[36, top - 3], [50, top - 5], [62, top - 2]].map(([x, y]) => `<rect x="${x - 4}" y="${y - 4}" width="8" height="8" rx="2" fill="#ffe3ee" stroke="#e8a9c4"/>`).join(''),
      cinnamon: [[38, top + 2], [46, top + 3], [56, top + 2], [62, top + 4]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.5" fill="#8a4a1a"/>`).join(''),
      honey: `<path d="M40 ${top + 2}q10 6 20 0" fill="none" stroke="#ffb31a" stroke-width="3" stroke-linecap="round"/>`,
      ginger: `<ellipse cx="44" cy="${top + 3}" rx="5" ry="2.6" fill="#f3e2a0" stroke="#c9a85a"/><ellipse cx="57" cy="${top + 2}" rx="4" ry="2.2" fill="#f3e2a0" stroke="#c9a85a"/>`,
      shot: `<ellipse cx="50" cy="${top + 3}" rx="14" ry="2.6" fill="#c9884a"/>`,
      syrup: `<path d="M34 ${top + 2}l32 2" stroke="#fff3c9" stroke-width="2.4" stroke-linecap="round"/>`,
      pine: [[40, top + 2], [48, top + 3], [57, top + 2]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="2" ry="1.3" fill="#f6e8c6" stroke="#b08850" stroke-width=".6"/>`).join(''),
      ice: [[38, top], [54, top + 1]].map(([x, y]) => `<rect x="${x}" y="${y - 3}" width="9" height="8" rx="2" fill="rgba(220,240,255,.85)" stroke="#9ab"/>`).join(''),
    }[a] || '')).join('');
    return `<svg viewBox="0 0 100 116" aria-hidden="true">${cup}${liq}${add}</svg>`;
  };
  const kimbapSVG = (sliced = true, fill = ['egg', 'carrot', 'spinach']) => sliced
    ? `<svg viewBox="0 0 100 100" aria-hidden="true"><ellipse cx="50" cy="70" rx="46" ry="16" fill="#fff4f9" stroke="#e7c9d8" stroke-width="2"/>${[[24, 56], [50, 52], [76, 56], [37, 70], [63, 70]].map(([x, y]) => `<g><circle cx="${x}" cy="${y}" r="13" fill="#1d2a1d"/><circle cx="${x}" cy="${y}" r="10.5" fill="#fbf7ee"/>${fill.map((f, i) => `<circle cx="${x + [-3.5, 3.5, 0][i]}" cy="${y + [-2, -1.5, 3.5][i]}" r="2.6" fill="${FILL_COL[f] || '#ccc'}"/>`).join('')}</g>`).join('')}</svg>`
    : `<svg viewBox="0 0 100 60" aria-hidden="true"><rect x="4" y="12" width="92" height="36" rx="18" fill="#1d2a1d"/><path d="M14 18h72" stroke="#33463a" stroke-width="3"/></svg>`;
  const lineIcon = l => l.kind === 'drink' ? drinkSVG(l.type, l.size, l.adds) : l.kind === 'grill' ? `<span class="cf-gico" style="--up:${cookCol(DONE[l.done])};--dn:${cookCol(DONE[l.done] + 0.1)}">${grillSVG(l.type, l.tops.map(t => ({ top: t, x: TOPS[t].spots[0][0], y: TOPS[t].spots[0][1] })))}</span>` : kimbapSVG(true, l.fill);
  const lineName = l => l.kind === 'drink' ? DRINKS[l.type].name : l.kind === 'grill' ? GRILL[l.type].name : KIMBAP.name;
  const lineBits = l => l.kind === 'drink' ? [l.size === 'L' ? 'Large' : 'Small', ...l.adds.map(a => '+ ' + ADDS[a])]
    : l.kind === 'grill' ? [l.done[0].toUpperCase() + l.done.slice(1), ...l.tops.map(t => '+ ' + TOPS[t].name)] : l.fill.map((f, i) => `${i + 1}. ${FILLS[f]}`);
  const badge = name => { const h = [...name].reduce((a, c) => a + c.charCodeAt(0), 0) % 4; return `<span class="cf-badge b${h}">${esc(name.replace(/^(Mr|Mrs|Nurse)\.? /, '').charAt(0))}</span>`; };
  const starStr = n => '★'.repeat(Math.floor(n)) + (n % 1 ? '½' : '') + '<i>' + '★'.repeat(5 - Math.ceil(n)) + '</i>';

  /* ════════════ play ════════════ */
  const VIEW_NAME = { order: 'Order', drinks: 'Drinks', griddle: 'Griddle', build: 'Build' };
  const STEP_NAME = { drinks: 'Drink', griddle: 'Griddle', build: 'Build', wait: 'Wait' };
  const REGULARS = ['mrkang', 'nurse', 'kids', 'mrchoi', 'mryoon', 'mrsbae'];
  const PROBES = ['bg-order', 'bg-order-night', 'bg-drinks', 'bg-griddle', 'bg-build', 'title', 'ticket', 'stampcard', 'tray', 'tipjar', 'cup-s', 'drink-cocoa', 'add-cream',
    'hotteok-done', 'toast-done', 'kimbap-roll', 'fill-egg', 'top-seeds', 'stamp-s', 'sunoo-apron-neutral', ...REGULARS.map(r => `face-${r}-neutral`)];
  // one probe per sheet: a sheet's other cuts are assumed there when its first is
  const probeOf = id => {
    const m = id.match(/^(cup|drink|add|hotteok|toast|kimbap|fill|top|stamp)-/);
    if (m) return { cup: 'cup-s', drink: 'drink-cocoa', add: 'add-cream', hotteok: 'hotteok-done', toast: 'toast-done', kimbap: 'kimbap-roll', fill: 'fill-egg', top: 'top-seeds', stamp: 'stamp-s' }[m[1]];
    if (id === 'plate') return 'tray'; if (id === 'coin') return 'tipjar';
    const f = id.match(/^(face-[a-z]+|sunoo-apron)-/); if (f) return f[1] + '-neutral';
    return id;
  };

  function play(o = {}) {
    return new Promise(resolve => {
      const host = o.host || document.body, M = shift(o), S = M.S, K = sounds(!!o.mute);
      const GS = (window.FemcGame && window.FemcGame.settings && window.FemcGame.settings()) || {};
      const still = o.still != null ? !!o.still : matchMedia('(prefers-reduced-motion: reduce)').matches;
      const calm = o.calm != null ? !!o.calm : !!GS.calm, perf = o.perf != null ? !!o.perf : !!GS.perf;
      const ART = id => `${base()}assets/femc/game/art/minigames/cafe/${id}.webp`;
      const BG = id => `${base()}assets/femc/bg/${id}.webp`;
      const FACE = (id, f = 'neutral') => `${base()}assets/femc/portraits/${id}/${f}.webp`;
      const art = {};
      let dirty = true, view = 'order', paused = false, over = false, raf = 0, last = performance.now(), renderT = 0, selTop = null, musicOn = !o.mute && !perf;
      const hasArt = id => !!art[probeOf(id)];
      PROBES.forEach(id => { const i = new Image(); i.onload = () => { art[id] = true; dirty = true; if (id.startsWith('bg-')) paintBgs(); }; i.src = ART(id); });
      const img = (id, cls = '') => `<img class="cf-art ${cls}" src="${ART(id)}" alt="" draggable="false">`;

      const el = document.createElement('div');
      el.className = 'mg-cafe' + (still ? ' still' : '') + (calm ? ' calm' : '') + (perf ? ' perf' : '');
      el.innerHTML = `
        <header class="cf-hud"></header>
        <div class="cf-rail" aria-label="Tickets"></div>
        <main class="cf-views">${['order', 'drinks', 'griddle', 'build'].map((v, i) => `<section class="cf-view v-${v}${i ? '' : ' on'}" data-view="${v}" style="--i:${i}" aria-label="${VIEW_NAME[v]}"><div class="cf-sbg"></div><div class="cf-vin"></div></section>`).join('')}</main>
        <nav class="cf-tabs" aria-label="Stations"></nav>
        <div class="cf-say" aria-live="polite"></div><div class="cf-pops" aria-live="polite"></div><div class="cf-ann"></div><div class="cf-toast" aria-live="polite"></div>
        <div class="cf-break" hidden></div>
        <div class="mg-pause" hidden><b>Paused</b><button type="button" data-p="resume">Resume</button><button type="button" data-p="quit">Quit</button></div>
        <div class="mg-end" hidden></div>
        <div class="cf-title"><div class="cf-title-card">${''}<img src="${ART('title')}" alt="" onerror="this.remove()"><b>Yeobo's</b><small>a day at the café</small></div></div>`;
      host.appendChild(el);
      const $ = s => el.querySelector(s);
      const V = v => el.querySelector(`.cf-view[data-view="${v}"] .cf-vin`);
      let dayBg = o.bg || 'epi-h-yeobos';
      function paintBgs() {
        ['order', 'drinks', 'griddle', 'build'].forEach(v => {
          const b = el.querySelector(`.cf-view[data-view="${v}"] .cf-sbg`);
          const id = v === 'order' && el.classList.contains('night') && art['bg-order-night'] ? 'bg-order-night' : 'bg-' + v;
          if (art[id]) { b.style.backgroundImage = `url("${ART(id)}")`; b.classList.add('art'); }
          else if (v === 'order') { b.style.backgroundImage = `url("${BG(dayBg)}")`; b.classList.add('photo'); }
        });
      }
      const bgOk = id => { const i = new Image(); i.onerror = () => el.classList.add('nobg'); i.onload = () => el.classList.remove('nobg'); i.src = BG(id); };
      paintBgs(); bgOk(dayBg);
      el.querySelectorAll('.cf-view').forEach(s => { s.inert = s.dataset.view !== 'order'; });

      /* faces */
      const regularExpr = e => e === 'happy' ? 'happy' : (e === 'sad' || e === 'serious') ? 'grumpy' : 'neutral';
      const faceHtml = (c, expr = 'neutral') => {
        if (c.face) return `<img src="${FACE(c.face, expr)}" alt="" draggable="false" onerror="if(!this.dataset.f){this.dataset.f=1;this.src='${FACE(c.face)}'}else this.remove()">`;
        const id = `face-${c.who}-${regularExpr(expr)}`;
        return hasArt(id) ? img(id) : badge(c.name);
      };
      const sunooFace = (e = 'happy') => hasArt('sunoo-apron-' + e) ? ART('sunoo-apron-' + e) : FACE('sunoo-hoax', e);

      /* speech: one bubble at a time (Halmeoni first), never blocking */
      const sayQ = []; let sayT = 0, saying = null;
      const pushSay = e => {
        if (e.who === 'halmeoni') sayQ.unshift(e); else { sayQ.push(e); if (sayQ.length > 3) sayQ.splice(1, sayQ.length - 3); }
        if (!saying) nextSay();
      };
      const nextSay = () => {
        saying = sayQ.shift() || null; const box = $('.cf-say');
        if (!saying) { box.classList.remove('on'); return; }
        const [f, t] = saying.line, who = saying.who;
        const name = who === 'sunoo' ? 'Sunoo' : who === 'halmeoni' ? 'Halmeoni' : saying.name;
        const pic = who === 'sunoo' ? `<img src="${sunooFace(f)}" alt="" onerror="this.src='${FACE('sunoo-hoax')}';this.onerror=()=>this.remove()">`
          : who === 'halmeoni' ? `<img src="${FACE('halmeoni-hoax', f)}" alt="" onerror="this.remove()">`
          : faceHtml({ face: saying.face, who: (S.cust.find(c => c.id === who) || {}).who, name }, f);
        box.className = `cf-say on ${typeof who === 'string' ? who : 'cust'}`;
        box.innerHTML = `<span class="cf-sayf">${pic}</span><p><b>${esc(name)}</b>${esc(t)}</p>`;
        sayT = clamp(1.6 + t.length * 0.045, 2.2, 5.5);
      };
      $('.cf-say').onclick = () => nextSay();
      let toastT = 0; const toast = t => { const b = $('.cf-toast'); b.textContent = t; b.classList.add('on'); toastT = 1.6; };
      let annT = 0; const announce = (big, small) => { const a = $('.cf-ann'); a.innerHTML = `<b>${esc(big)}</b>${small ? `<small>${esc(small)}</small>` : ''}`; a.classList.remove('on'); void a.offsetWidth; a.classList.add('on'); annT = 2.2; };
      const kick = (node, cls) => { if (!node) return; node.classList.remove(cls); void node.offsetWidth; node.classList.add(cls); };

      /* pop-ups: a step's score with stars, the tasting card, coins */
      const stars20 = s => Math.max(0.5, Math.round(s / 10) / 2);
      const pop = (html, cls = '') => {
        const p = document.createElement('div'); p.className = 'cf-pop ' + cls; p.innerHTML = html; $('.cf-pops').appendChild(p);
        while ($('.cf-pops').children.length > 3) $('.cf-pops').firstChild.remove();
        setTimeout(() => p.remove(), cls.includes('taste') ? 3200 : 2000);
      };
      const coins = (cid, n) => {
        const jar = $('.cf-jar'), seat = el.querySelector(`.cf-seat[data-cid="${cid}"]`);
        kick(jar, 'clink');
        if (still || perf || !jar || !seat || view !== 'order') return;
        const a = seat.getBoundingClientRect(), b = jar.getBoundingClientRect(), r = el.getBoundingClientRect();
        for (let i = 0; i < n; i++) {
          const c = document.createElement('i'); c.className = 'cf-coin' + (hasArt('coin') ? ' art' : '');
          if (hasArt('coin')) c.style.backgroundImage = `url("${ART('coin')}")`;
          el.appendChild(c);
          const x0 = a.left - r.left + a.width / 2, y0 = a.top - r.top + a.height * 0.3, x1 = b.left - r.left + b.width / 2 - 9, y1 = b.top - r.top + 8;
          c.animate([{ transform: `translate(${x0}px, ${y0}px) scale(.6)`, opacity: 0 }, { transform: `translate(${(x0 + x1) / 2}px, ${Math.min(y0, y1) - 80 - i * 6}px) scale(1) rotate(180deg)`, opacity: 1, offset: 0.5 }, { transform: `translate(${x1}px, ${y1}px) scale(.8) rotate(360deg)`, opacity: 1 }],
            { duration: 700, delay: i * 90, easing: 'cubic-bezier(.3,.7,.6,1)', fill: 'both' }).onfinish = () => c.remove();
        }
      };

      /* the customers leaving after tasting (kept on screen for their reaction) */
      const leaving = [];
      const newTk = {};
      const placed = {}, flipAt = {};
      let layAt = 0, chopAt = 0;

      /* model events → sound, lines, banners, animation */
      const handle = list => list.forEach(e => {
        dirty = true;
        switch (e.type) {
          case 'say': pushSay(e); break;
          case 'arrive': K.door(); kick($('.cf-tab[data-v="order"]'), 'ping'); break;
          case 'order': K.blip(); break;
          case 'print': K.print(); newTk[e.tid] = performance.now(); kick(el.querySelector('.cf-printer'), 'go'); break;
          case 'nope': K.nope(); toast(e.text); break;
          case 'drinkStart': case 'kimStart': case 'topStart': K.blip(); break;
          case 'cup': K.cup(); break;
          case 'add': K.add(); break;
          case 'overflow': K.overflow(); toast('It spilled over!'); kick(el.querySelector('.cf-cup'), 'slosh'); break;
          case 'place': K.squish(); placed[e.i] = performance.now(); break;
          case 'flip': K.flip(); flipAt[e.i] = performance.now(); break;
          case 'off': K.off(); break;
          case 'burn': K.burn(); kick($('.cf-tab[data-v="griddle"]'), 'ping'); break;
          case 'lay': K.lay(); layAt = performance.now(); break;
          case 'chop': K.chop(); chopAt = performance.now(); break;
          case 'drop': K.drop(); break;
          case 'bin': K.nope(); break;
          case 'step': {
            const s = stars20(e.score);
            if (e.by !== 'sunoo') { K.star(Math.round(s)); if (e.station === 'build' && e.parts[0][0] === 'Toppings') K.plate(); }
            pop(`<b>${e.by === 'sunoo' ? 'Sunoo · ' : ''}${STEP_NAME[e.station]}</b><span class="cf-st">${starStr(s)}</span><small>${e.parts.map(([n, v]) => `${n} ${Math.round(v)}`).join(' · ')}</small>`, 'step' + (s >= 4.5 ? ' great' : ''));
            break;
          }
          case 'ready': K.blip(); kick($('.cf-tab[data-v="order"]'), 'ping'); break;
          case 'taste': {
            const c = S.cust.find(x => x.id === e.id);
            leaving.push({ c, reaction: e.reaction, until: performance.now() + 2600 });
            K[e.reaction](); if (e.tip) K.coins(Math.min(6, Math.ceil(e.tip / 600)));
            pop(`<span class="cf-pf">${faceHtml(c, e.reaction === 'happy' ? 'happy' : e.reaction === 'meh' ? 'neutral' : 'sad')}</span><div><b>${esc(c.name)}${c.hal ? ' · Halmeoni' : ''}</b><span class="cf-st big">${starStr(e.stars)}</span>
              <dl><dt>Wait</dt><dd>${e.wait}</dd>${e.items.map(i => `<dt>${esc(i.kind === 'drink' ? DRINKS[i.type].name : i.kind === 'grill' ? GRILL[i.type].name : 'Kimbap')}</dt><dd>${i.score}</dd>`).join('')}<dt>Total</dt><dd>${e.total}%</dd></dl>
              <em>${e.tip ? '+' + won(e.tip) + ' tip' : 'No tip'}</em></div>`, 'taste r-' + e.reaction);
            setTimeout(() => coins(e.id, Math.min(6, Math.ceil(e.tip / 600))), 300);
            break;
          }
          case 'left': K.grumpy(); { const c = S.cust.find(x => x.id === e.id); leaving.push({ c, reaction: 'left', until: performance.now() + 1800 }); } break;
          case 'unlock': K.unlock(); announce('Stamp card: ' + e.name + '!', 'New on the menu, ' + e.note); break;
          case 'assign': K.blip(); break;
          case 'hurry': K.blip(); break;
          case 'rush': announce(`Rush ${e.rush + 1} of 3`, RUSH_NAME[e.rush]); break;
          case 'break': K.fanfare(); setTimeout(() => showBreak(false), 900); break;
          case 'done': K.fanfare(); setTimeout(() => finish(false), 1000); break;
        }
      });

      /* ── views ── */
      const setView = v => {
        if (!VIEW_NAME[v] || v === view) return;
        view = v; selTop = null; K.tab(); M.pour(false);
        el.querySelector('.cf-views').style.setProperty('--v', ['order', 'drinks', 'griddle', 'build'].indexOf(v));
        el.querySelectorAll('.cf-view').forEach(s => { s.classList.toggle('on', s.dataset.view === v); s.inert = s.dataset.view !== v; });
        dirty = true;
      };
      const R = {};
      const put = (node, key, html) => { if (R[key] === html) return; R[key] = html; node.innerHTML = html; };
      const tnum = tid => '#' + tid;
      const C = id => S.cust.find(c => c.id === id);
      const chip = (w, a) => `<button type="button" class="cf-chip" data-a="${a}" data-tid="${w.tid}" data-li="${w.li}"><b>${tnum(w.tid)}</b><span class="cf-ico">${lineIcon(w.line)}</span><span>${esc(lineName(w.line))}<small>${esc(lineBits(w.line).join(' '))}</small></span></button>`;
      const chips = (title, list, a, empty) => `<div class="cf-chips"><h3>${title}</h3>${list.length ? list.map(w => chip(w, a)).join('') : `<p class="cf-none">${empty}</p>`}</div>`;
      const madeIcon = (l, m) => {
        if (l.kind === 'drink') return hasArt('drink-' + l.type) ? img('drink-' + l.type) : drinkSVG(l.type, m.size, m.adds);
        if (l.kind === 'kimbap') return hasArt('kimbap-sliced') ? img('kimbap-sliced') : kimbapSVG(true, m.laid.slice(1, 4));
        const up = m.cook ? cookCol(m.cook[1]) : cookCol(1), dn = m.cook ? cookCol(m.cook[0]) : cookCol(1);
        return `<span class="cf-gico" style="--up:${up};--dn:${dn}">${hasArt(l.type + '-done') ? img(l.type + '-' + (m.burnt ? 'burnt' : 'done')) : ''}${grillSVG(l.type, m.drops || [])}</span>`;
      };
      const sunLane = kind => {
        const su = S.sunoo, j = su.job;
        if (su.at !== kind) return '';
        const chat = su.chat > 0;
        return `<div class="cf-sunlane${chat ? ' chat' : ''}"><img src="${sunooFace(chat ? 'happy' : 'neutral')}" alt="" onerror="this.remove()"><span><b>Sunoo</b>${chat ? 'is chatting… <button type="button" data-a="hurry">Hurry <kbd>G</kbd></button>' : j ? `is making ${j.kind === 'plate' ? 'a plate' : j.kind === 'drink' ? 'a drink' : 'a kimbap'} for ${tnum(j.tid)}` : kind === 'griddle' ? 'is minding the griddle' : kind === 'order' ? 'is at the counter' : 'is waiting for work'}</span>${j ? '<i class="cf-sp"><i></i></i>' : ''}</div>`;
      };

      function renderOrder() {
        const cc = C(S.counter);
        const door = S.door.map(id => C(id)).filter(Boolean);
        const seats = S.cust.filter(c => c.state === 'seat');
        const ghosts = leaving.filter(g => performance.now() < g.until);
        const ready = S.tickets.filter(t => t.made.every(Boolean));
        const bubble = cc && cc.state === 'ordering' ? `<div class="cf-bubble">${cc.lines.map(l => `<span class="cf-bi"><span class="cf-ico">${lineIcon(l)}</span><small>${esc(lineName(l))}<br>${esc(lineBits(l).join(' '))}</small></span>`).join('')}</div>` : '';
        const jar = `${hasArt('tipjar') ? img('tipjar') : '<svg viewBox="0 0 60 70" aria-hidden="true"><path d="M12 10h36v6c6 4 8 10 8 18v24c0 6-4 10-10 10H14C8 68 4 64 4 58V34c0-8 2-14 8-18z" fill="rgba(255,244,249,.25)" stroke="#fff4f9" stroke-width="2.5"/><rect x="10" y="6" width="40" height="7" rx="2" fill="#ff4f9e"/></svg>'}<b>${won(S.money)}</b>${S.upgrades.includes('jar') ? '<small>tips ♥</small>' : ''}`;
        return [
          ['door', `${door.map(c => `<span class="cf-dq">${faceHtml(c)}</span>`).join('')}<small>${door.length ? door.length + ' waiting' : ''}</small>`, 'cf-door'],
          ['stage', cc ? `<div class="cf-cc ${cc.state}${cc.hal ? ' hal' : ''}" data-a="take" data-cid="${cc.id}"><span class="cf-bust">${faceHtml(cc, cc.state === 'ordering' ? 'happy' : 'neutral')}</span><span class="cf-ccn"><b>${esc(cc.name)}</b>${cc.tag ? `<small>${esc(cc.tag)}</small>` : ''}</span>${cc.state === 'counter' ? '<button type="button" class="cf-take" data-a="take">Take order <kbd>Space</kbd></button>' : ''}${bubble}</div>` : `<p class="cf-quiet">${S.phase === 'rush' ? (S.sched.length ? 'The bell will ring…' : 'Nobody at the door.') : ''}</p>`, 'cf-stage'],
          ['printer', '<i class="cf-paper"></i>', 'cf-printer'],
          ['seats', { keyed: [
            ...seats.map(c => ({ key: 's' + c.id, html: `<div class="cf-seat${ready.some(t => t.cid === c.id) ? ' ready' : ''}${S.sunoo.chat > 0 && S.sunoo.chatWith === c.id ? ' chat' : ''}" data-drop="cust" data-cid="${c.id}"><span class="cf-bust">${faceHtml(c)}</span><b>${tnum(c.ticket)}</b><i class="cf-w"></i></div>` })),
            ...ghosts.map(g => ({ key: 'g' + g.c.id, html: `<div class="cf-seat gone r-${g.reaction}" data-cid="${g.c.id}"><span class="cf-bust">${faceHtml(g.c, g.reaction === 'happy' ? 'happy' : g.reaction === 'meh' ? 'neutral' : 'sad')}</span><b>${g.reaction === 'happy' ? '♥' : g.reaction === 'meh' ? '…' : g.reaction === 'left' ? 'left' : '✕'}</b></div>` })),
          ] }, 'cf-seats'],
          ['ctop', { parts: [
            ['pass', { keyed: ready.length ? ready.map(t => ({ key: 't' + t.id, html: `<button type="button" class="cf-tray${hasArt('tray') ? ' art' : ''}" data-drag="tray" data-a="serveT" data-tid="${t.id}" aria-label="Order ${t.id}: drag to ${esc(C(t.cid)?.name)}">${hasArt('tray') ? img('tray', 'cf-trayart') : ''}<span class="cf-tis">${t.lines.map((l, i) => `<span class="cf-ico">${madeIcon(l, t.made[i])}</span>`).join('')}</span><b>${tnum(t.id)}</b></button>` })) : [{ key: 'none', html: '<p class="cf-none">Finished trays wait here. Drag one onto its customer.</p>' }] }, 'cf-pass'],
            ['jar', jar, 'cf-jar'],
          ] }, 'cf-ctop'],
          ['sun', sunLane('order')],
        ];
      }
      function renderDrinks() {
        const d = S.drink, t = d && M.T(d.tid), l = t && t.lines[d.li];
        const src = d ? DRINKS[d.type].src : 'kettle';
        const machine = `<div class="cf-machine m-${src}${d && d.pouring ? ' pouring' : ''}"><span class="cf-mbody"></span><span class="cf-spout"></span>${d ? `<i class="cf-stream" style="--col:${DRINKS[d.type].col}"></i>` : ''}<small>${src === 'kettle' ? 'Kettle' : src === 'espresso' ? 'Espresso' : 'Sikhye jug'}</small></div>`;
        let mid;
        if (!d) mid = `<p class="cf-hint">Pick a drink to make.</p>`;
        else if (!d.size) mid = `<div class="cf-cups"><p>Which cup? <b>${tnum(d.tid)}</b> wants <b>${l.size === 'L' ? 'Large' : 'Small'}</b>.</p>${['S', 'L'].map((s, i) => `<button type="button" class="cf-cupbtn s-${s}" data-a="cup" data-size="${s}">${hasArt('cup-' + s.toLowerCase()) ? img('cup-' + s.toLowerCase()) : `<span class="cf-cup s-${s} empty"></span>`}<b>${s === 'L' ? 'Large' : 'Small'}</b><kbd>${i ? 'W' : 'Q'}</kbd></button>`).join('')}</div>`;
        else mid = `<div class="cf-cupw"><span class="cf-cup s-${d.size}${d.spilled ? ' spilled' : ''}" style="--col:${DRINKS[d.type].col}"><i class="cf-liq"></i><i class="cf-line"></i>${d.adds.map(a => `<i class="cf-addin a-${a}">${hasArt('add-' + a) ? img('add-' + a) : ''}</i>`).join('')}${d.type !== 'sikhye' ? '<i class="cf-steam"><i></i><i></i><i></i></i>' : ''}</span></div>`;
        const ctl = d && d.size ? `<div class="cf-dctl"><button type="button" class="cf-pour" data-pour>Hold to pour <kbd>Space</kbd></button>
          <div class="cf-adds">${DRINKS[d.type].adds.filter(a => M.avail('add').includes(a)).map((a, i) => `<button type="button" class="cf-add${d.adds.includes(a) ? ' on' : ''}" data-a="add" data-id="${a}">${hasArt('add-' + a) ? img('add-' + a) : ''}<span>${esc(ADDS[a])}</span><kbd>${'ZXCV'[i]}</kbd></button>`).join('')}</div>
          <div class="cf-acts"><button type="button" class="cf-done" data-a="dDone">Done <kbd>Enter</kbd></button><button type="button" class="cf-bin" data-a="dBin">Bin <kbd>⌫</kbd></button></div></div>` : d ? '<div class="cf-dctl"><button type="button" class="cf-bin" data-a="dBin">Bin <kbd>⌫</kbd></button></div>' : '';
        return [
          ['chips', chips('Drinks to make', d ? [] : M.owed('drink'), 'dStart', d ? `Making ${tnum(d.tid)}: ${esc(DRINKS[d.type].name)} · ${esc(lineBits(l).join(' '))}` : 'Nothing owed. Breathe.')],
          ['station', `${machine}${mid}${d && d.size ? '<div class="cf-gauge" aria-hidden="true"><i></i><b></b></div>' : ''}`, 'cf-dstation'],
          ['ctl', ctl], ['sun', sunLane('drinks')],
        ];
      }
      const stageOf = (c, tg) => c < 0.3 ? 'raw' : c < tg - 0.12 ? 'cooking' : c <= tg + 0.35 ? 'done' : 'burnt';
      function renderGriddle() {
        const slots = S.griddle.map((g, i) => {
          if (!g) return `<div class="cf-gslot empty" data-g="${i}"><span class="cf-gempty">${i + 1}</span></div>`;
          const t = M.T(g.tid), l = t && t.lines[g.li], tg = l ? M.target(l) : 1, st = M.grillState(i), stage = stageOf(g.cook[1 - g.side], tg);
          const fresh = placed[i] && performance.now() - placed[i] < 500, flipped = flipAt[i] && performance.now() - flipAt[i] < 420;
          return `<div class="cf-gslot st-${st}" data-g="${i}"><button type="button" class="cf-gitem${fresh ? ' squish' : ''}${flipped ? ' flipped' : ''}" data-a="flip" data-i="${i}" aria-label="Flip">${hasArt(g.type + '-' + stage) ? img(g.type + '-' + stage) : grillSVG(g.type, [], { smoke: stage === 'burnt' })}${perf ? '' : '<span class="cf-bubs"><i></i><i></i><i></i><i></i><i></i></span><i class="cf-steam"><i></i><i></i><i></i></i>'}</button>
            <div class="cf-meters">${[0, 1].map(s => `<span class="cf-m${g.side === s ? ' down' : ''}"><i data-m="${s}"></i><u style="left:${(tg / 1.6) * 100}%"></u><em>Side ${s + 1}${g.side === s ? ' ▼' : ''}</em></span>`).join('')}</div>
            <div class="cf-gfoot"><small>${tnum(g.tid)} · ${l ? esc(l.done) : ''}${g.by === 'sunoo' ? ' · Sunoo' : ''}</small><span class="cf-gst">${st === 'burning' ? 'BURNING' : st === 'ready' ? 'READY' : st === 'flip' ? 'FLIP' : ''}</span><button type="button" class="cf-off" data-a="off" data-i="${i}">Off <kbd>${'ASDF'[i]}</kbd></button></div></div>`;
        });
        return [
          ['chips', chips('To the griddle', M.owed('grill'), 'gStart', 'Nothing to put on.')],
          ['plate', { keyed: slots.map((html, i) => ({ key: 'g' + i, html })) }, 'cf-gplate n' + S.griddle.length],
          ['rack', `<div class="cf-rack"><h3>Warming rack</h3>${S.rack.length ? S.rack.map(r => `<span class="cf-ico" style="--up:${cookCol(r.cook[1])};--dn:${cookCol(r.cook[0])}">${grillSVG(r.type)}</span>`).join('') : '<small>Things you take off wait here for Build.</small>'}</div>`],
          ['sun', sunLane('griddle')],
        ];
      }
      function renderBuild() {
        const p = S.topping, k = S.kimbap;
        let board;
        if (p) {
          const t = M.T(p.tid), l = t && t.lines[p.li], want = l ? l.tops : [];
          const guides = S.guides ? want.flatMap(top => TOPS[top].spots.map(s => [top, s])) : [];
          const tops = GRILL[p.type].tops.filter(x => M.avail('top').includes(x));
          board = `<div class="cf-topw"><p class="cf-for"><b>${tnum(p.tid)}</b> ${esc(GRILL[p.type].name)}: ${want.length ? 'wants ' + want.map(x => esc(TOPS[x].name)).join(', ') : 'no toppings, just plate it'}</p>
            <div class="cf-titem${selTop ? ' aim' : ''}${hasArt('plate') ? ' art' : ''}" data-drop="item" style="--up:${cookCol(p.cook[1])};--dn:${cookCol(p.cook[0])}${hasArt('plate') ? `;background-image:url('${ART('plate')}')` : ''}"><div class="cf-tin${hasArt(p.type + '-done') ? ' art' : ''}">${hasArt(p.type + '-done') ? img(p.type + '-' + (p.burnt ? 'burnt' : 'done')) : ''}${grillSVG(p.type, hasArt('top-seeds') ? [] : p.drops, { guides })}${hasArt('top-seeds') ? p.drops.map(d => `<img class="cf-art cf-dropart" src="${ART('top-' + d.top)}" style="left:${d.x * 100}%;top:${d.y * 100}%" alt="">`).join('') : ''}</div></div>
            <div class="cf-topbar">${tops.map((x, i) => `<button type="button" class="cf-topb${selTop === x ? ' on' : ''}${want.includes(x) ? ' want' : ''}" data-drag="top" data-a="pickTop" data-top="${x}">${hasArt('top-' + x) ? img('top-' + x) : `<svg viewBox="-12 -12 24 24" aria-hidden="true">${topSVG(x)}</svg>`}<span>${esc(TOPS[x].name)}</span><kbd>${'ZXCV'[i]}</kbd></button>`).join('')}<button type="button" class="cf-done" data-a="plate">Plate <kbd>Enter</kbd></button></div></div>`;
        } else if (k) {
          const t = M.T(k.tid), l = t && t.lines[k.li], want = l ? ['rice', ...l.fill] : [];
          const head = `<p class="cf-for"><b>${tnum(k.tid)}</b> Kimbap: ${want.map((f, i) => `<span class="${k.laid[i] === f ? 'ok' : k.laid[i] ? 'bad' : ''}">${i ? i + '. ' : ''}${esc(FILLS[f])}</span>`).join(' ')}</p>`;
          if (k.stage === 'lay') board = `${head}<div class="cf-mat"><div class="cf-sheet${hasArt('kimbap-seaweed') ? ' art' : ''}" data-drop="sheet" style="${hasArt('kimbap-seaweed') ? `background-image:url('${ART(k.laid.length ? 'kimbap-rice' : 'kimbap-seaweed')}')` : ''}">${k.laid.map((f, i) => `<i class="cf-lay f-${f}${i ? '' : ' rice'}${i === k.laid.length - 1 && performance.now() - layAt < 300 ? ' new' : ''}" style="--n:${i}">${i && hasArt('fill-' + f) ? img('fill-' + f) : ''}</i>`).join('')}<small>${k.laid.length ? '' : 'Rice first, then the fillings in order'}</small></div></div>
              <div class="cf-bins">${['rice', ...M.avail('fill')].map((f, i) => `<button type="button" class="cf-binf${k.laid.includes(f) ? ' used' : ''}" data-drag="ing" data-a="lay" data-ing="${f}">${hasArt('fill-' + f) ? img('fill-' + f) : `<i class="cf-swatch f-${f}"></i>`}<span>${esc(FILLS[f])}</span><kbd>${'ZXCVBNM'[i] || ''}</kbd></button>`).join('')}<button type="button" class="cf-bin" data-a="kBin">Bin <kbd>⌫</kbd></button></div>`;
          else if (k.stage === 'roll') board = `${head}<div class="cf-mat roll" data-roll><div class="cf-sheet rolling${hasArt('kimbap-rice') ? ' art' : ''}" style="${hasArt('kimbap-rice') ? `background-image:url('${ART('kimbap-rice')}')` : ''}">${k.laid.map((f, i) => `<i class="cf-lay f-${f}${i ? '' : ' rice'}" style="--n:${i}"></i>`).join('')}</div><span class="cf-rolled">${hasArt('kimbap-roll') ? img('kimbap-roll') : ''}</span><small class="cf-rollhint">Drag up to roll ↑ <kbd>Space</kbd></small></div>`;
          else board = `${head}<div class="cf-log" data-cut>${hasArt('kimbap-roll') ? img('kimbap-roll') : '<span class="cf-logbody"></span>'}${Array.from({ length: CUTS }, (_, i) => `<i class="cf-mark" style="left:${(i + 1) / (CUTS + 1) * 100}%"></i>`).join('')}${k.cuts.map(c => `<i class="cf-cut" style="left:${c * 100}%"></i>`).join('')}<i class="cf-knife${performance.now() - chopAt < 200 ? ' go' : ''}" style="left:${(k.cuts.length ? k.cuts[k.cuts.length - 1] : 0.1) * 100}%"></i></div><p class="cf-hint">Tap the log at the five marks to slice (${k.cuts.length} / ${CUTS}) <kbd>Space</kbd></p>`;
        } else board = `<p class="cf-hint">Pick something from the warming rack to top and plate, or a kimbap to roll.</p>`;
        return [['chips', `<div class="cf-chips"><h3>Warming rack</h3>${S.rack.length ? S.rack.map((r, i) => { const t = M.T(r.tid), l = t && t.lines[r.li]; return `<button type="button" class="cf-chip" data-a="topStart" data-ri="${i}"${p ? ' disabled' : ''}><b>${tnum(r.tid)}</b><span class="cf-ico" style="--up:${cookCol(r.cook[1])};--dn:${cookCol(r.cook[0])}">${grillSVG(r.type)}</span><span>${esc(GRILL[r.type].name)}<small>${l ? esc(lineBits(l).slice(1).join(' ') || 'plain') : ''}</small></span></button>`; }).join('') : '<p class="cf-none">Empty. Griddle things land here.</p>'}
            <h3>Kimbap to roll</h3>${!k && M.owed('kimbap').length ? M.owed('kimbap').map(w => chip(w, 'kStart')).join('') : `<p class="cf-none">${k ? 'Rolling one now.' : 'None owed.'}</p>`}</div>`], ['board', board, 'cf-board'], ['sun', sunLane('build')]];
      }
      function renderTabs() {
        const st = S.griddle.map((g, i) => M.grillState(i));
        const ready = S.tickets.filter(t => t.made.every(Boolean)).length, cc = C(S.counter);
        const badge = {
          order: (cc && cc.state === 'counter' ? '<em class="b-hot">!</em>' : '') + (ready ? `<em class="b-ok">${ready} ready</em>` : ''),
          drinks: M.owed('drink').length ? `<em>${M.owed('drink').length}</em>` : '',
          griddle: st.includes('burning') ? '<em class="b-burn">BURNING</em>' : st.includes('ready') ? '<em class="b-ok">READY</em>' : st.includes('flip') ? '<em class="b-hot">FLIP</em>' : M.owed('grill').length ? `<em>${M.owed('grill').length}</em>` : '',
          build: (S.rack.length + M.owed('kimbap').length) ? `<em>${S.rack.length + M.owed('kimbap').length}</em>` : '',
        };
        const su = S.sunoo;
        return `${['order', 'drinks', 'griddle', 'build'].map((v, i) => `<button type="button" class="cf-tab${view === v ? ' on' : ''}" data-a="view" data-v="${v}"><span class="cf-ti t-${v}"></span><b>${VIEW_NAME[v]}</b><kbd>${i + 1}</kbd>${badge[v]}</button>`).join('')}
          <div class="cf-sunoo${su.chat > 0 ? ' chat' : ''}"><img src="${sunooFace(su.chat > 0 ? 'happy' : 'neutral')}" alt="" onerror="this.remove()"><span><b>Sunoo <kbd>T</kbd></b><span class="cf-sat">${SUNOO_AT.map(a => `<button type="button" class="${su.at === a ? 'on' : ''}" data-a="sunoo" data-at="${a}" aria-label="Sunoo: ${a}">${a === 'off' ? '–' : VIEW_NAME[a][0]}</button>`).join('')}</span></span>${su.chat > 0 ? '<button type="button" class="cf-hurry" data-a="hurry">Hurry <kbd>G</kbd></button>' : ''}</div>`;
      }
      function renderHud() {
        const W = M.D.win[Math.max(0, S.rush)], start = [15 * 60 + 40, 17 * 60 + 30, 19 * 60 + 30][Math.max(0, S.rush)], m = Math.round(start + clamp(S.t / (W * 1.15), 0, 1.4) * 80);
        const clock = `${((Math.floor(m / 60) + 11) % 12) + 1}:${String(m % 60).padStart(2, '0')} ${m >= 720 ? 'pm' : 'am'}`;
        const nx = UNLOCKS.find(u => !S.unlocked.includes(u.id)), prev = [...UNLOCKS].reverse().find(u => S.unlocked.includes(u.id));
        const p = nx ? clamp((S.points - (prev ? prev.at : 0)) / (nx.at - (prev ? prev.at : 0)), 0, 1) : 1;
        return `<b class="cf-where">Yeobo's</b><span class="cf-rush">${S.rush >= 0 ? `${RUSH_NAME[S.rush]} · Rush ${S.rush + 1}/3` : 'Before opening'}</span><span class="cf-clock">${clock}</span><span class="cf-money">${won(S.money)}</span>
          <span class="cf-card" title="Stamp card">${hasArt('stampcard') ? img('stampcard') : '<i class="cf-cardi"></i>'}<span class="cf-meter"><i style="width:${p * 100}%"></i></span><small>${nx ? `${esc(nx.name)} at ${nx.at} · ${S.points}` : 'Every stamp!'}</small></span>
          <button type="button" class="cf-mus${musicOn ? ' on' : ''}" data-a="music" aria-label="Café music"${o.mute ? ' disabled' : ''}>♪</button><button type="button" class="cf-pausebtn" data-a="pause" aria-label="Pause">II</button>`;
      }
      function renderRail() {
        const now = performance.now();
        return S.tickets.length ? S.tickets.map(t => { const c = C(t.cid); return { key: 'k' + t.id, html: `<div class="cf-tk${t.made.every(Boolean) ? ' ready' : ''}${newTk[t.id] && now - newTk[t.id] < 900 ? ' new' : ''}${c && c.hal ? ' hal' : ''}${hasArt('ticket') ? ' art' : ''}" data-a="tk" data-tid="${t.id}"${hasArt('ticket') ? ` style="--tk-art:url('${ART('ticket')}')"` : ''}><header><b>${tnum(t.id)}</b><span class="cf-tkf">${c ? faceHtml(c) : ''}</span><span class="cf-tkn">${c ? esc(c.name) : ''}</span></header>
          <ul>${t.lines.map((l, li) => `<li class="${t.made[li] ? 'made' : t.busy[li] ? 'busy' : ''}"><span class="cf-ico">${lineIcon(l)}</span><span><b>${esc(lineName(l))}</b>${lineBits(l).map(b => `<small>${esc(b)}</small>`).join('')}</span>${t.made[li] ? '<em>✓</em>' : ''}</li>`).join('')}</ul><i class="cf-tkw"><i></i></i></div>` }; }) : [{ key: 'none', html: '<p class="cf-none">Tickets print here.</p>' }];
      }
      // keyed lists: an element is kept (and its animation runs on) while its html is the same
      const keyed = (box, items) => {
        const have = new Map([...box.children].map(n => [n.dataset.k, n]));
        let prev = null;
        items.forEach(({ key, html }) => {
          let n = have.get(key);
          if (!n || n._h !== html) { const t = document.createElement('template'); t.innerHTML = html.trim(); const nn = t.content.firstElementChild; nn.dataset.k = key; nn._h = html; if (n) n.replaceWith(nn); n = nn; }
          have.delete(key);
          const want = prev ? prev.nextElementSibling : box.firstElementChild;
          if (want !== n) box.insertBefore(n, want);
          prev = n;
        });
        have.forEach(n => n.remove());
      };
      // a view is a fixed list of regions: [name, html | { keyed } | { parts }, class]; a region is redrawn only when it changes
      const paint = (box, parts) => parts.forEach(([name, val, cls]) => {
        box._r = box._r || {};
        let r = box._r[name];
        if (!r) { r = document.createElement('div'); box._r[name] = r; box.appendChild(r); }
        const c = 'cf-r ' + (cls || 'cf-c'); if (r.className !== c) r.className = c;
        if (typeof val === 'string') { if (r._h !== val) { r._h = val; r.innerHTML = val; } }
        else if (val.keyed) keyed(r, val.keyed);
        else paint(r, val.parts);
      });
      function render() {
        put($('.cf-hud'), 'hud', renderHud());
        keyed($('.cf-rail'), renderRail());
        put($('.cf-tabs'), 'tabs', renderTabs());
        paint(V('order'), renderOrder());
        paint(V('drinks'), renderDrinks());
        paint(V('griddle'), renderGriddle());
        paint(V('build'), renderBuild());
        dirty = false;
      }
      // per frame: meters, levels, colours, wait bars
      function live() {
        el.querySelectorAll('.cf-tk').forEach(n => { const t = M.T(+n.dataset.tid), c = t && C(t.cid); n.style.setProperty('--w', Math.min(1, M.waitFrac(c) / 1.6)); n.classList.toggle('late', M.waitFrac(c) > 1); });
        el.querySelectorAll('.cf-seat[data-cid]').forEach(n => { const c = C(+n.dataset.cid); n.style.setProperty('--w', Math.min(1, M.waitFrac(c) / 1.6)); });
        const d = S.drink;
        if (d) { el.querySelectorAll('.cf-cup:not(.empty), .cf-gauge').forEach(n => n.style.setProperty('--lv', Math.min(1.08, d.level))); }
        S.griddle.forEach((g, i) => {
          const n = el.querySelector(`.cf-gslot[data-g="${i}"]`); if (!g || !n) return;
          n.style.setProperty('--up', cookCol(g.cook[1 - g.side])); n.style.setProperty('--dn', cookCol(g.cook[g.side]));
          n.querySelectorAll('[data-m]').forEach(m => { const c = g.cook[+m.dataset.m]; m.style.width = Math.min(100, c / 1.6 * 100) + '%'; m.style.background = cookCol(c); });
        });
        const j = S.sunoo.job; el.querySelectorAll('.cf-sp').forEach(n => n.style.setProperty('--p', j ? 1 - j.t / j.T : 0));
        const k = S.kimbap; if (k) el.querySelectorAll('[data-roll]').forEach(n => n.style.setProperty('--r', k.roll));
        const busy = S.griddle.filter(Boolean).length;
        K.sizzle(S.phase === 'rush' && !paused ? busy * (view === 'griddle' ? 0.035 : 0.01) : 0);
        K.pour(S.phase === 'rush' && !paused && d && d.pouring && view === 'drinks', d && d.level);
      }

      /* ── input ── */
      let drag = null, rolling = null, pourPtr = false;
      const act = (a, ds) => {
        dirty = true;
        const tid = +ds.tid, li = +ds.li, i = +ds.i;
        switch (a) {
          case 'view': setView(ds.v); break;
          case 'take': if (S.phase === 'rush') M.takeOrder(); break;
          case 'serveT': M.serve(tid); break;
          case 'tk': { const t = M.T(tid); if (!t) break; if (t.made.every(Boolean)) { setView('order'); break; } const li2 = t.made.findIndex(m => !m), l = t.lines[li2]; setView(l.kind === 'drink' ? 'drinks' : l.kind === 'kimbap' || S.rack.some(r => r.tid === tid && r.li === li2) ? 'build' : 'griddle'); break; }
          case 'dStart': M.drinkStart(tid, li); break;
          case 'cup': M.drinkCup(ds.size); break;
          case 'add': M.drinkAdd(ds.id); break;
          case 'dDone': M.drinkDone(); break;
          case 'dBin': M.drinkBin(); break;
          case 'gStart': M.grillPlace(tid, li); break;
          case 'flip': M.grillFlip(i); break;
          case 'off': M.grillOff(i); break;
          case 'topStart': M.topStart(+ds.ri); selTop = null; break;
          case 'pickTop': selTop = selTop === ds.top ? null : ds.top; K.blip(); break;
          case 'plate': if (M.topDone()) selTop = null; break;
          case 'kStart': M.kimStart(tid, li); break;
          case 'lay': M.kimLay(ds.ing); break;
          case 'kBin': M.kimBin(); break;
          case 'sunoo': M.assign(ds.at); if (!$('.cf-break').hidden) showBreak(S.rush < 0); break;
          case 'hurry': M.hurry(); break;
          case 'music': musicOn = !musicOn; K.music(musicOn); break;
          case 'pause': if (S.phase === 'rush') setPause(true); break;
          case 'buy': if (M.buy(ds.id)) { K.coins(3); showBreak(S.rush < 0); } else K.nope(); break;
          case 'open': openDoors(); break;
        }
        handle(M.drain());
      };
      const dropTop = (x, y) => {
        const n = el.querySelector('.cf-titem'), b = el.querySelector('.cf-tin'); if (!n || !b || !selTop) return false;
        const o2 = n.getBoundingClientRect(); if (x < o2.left || x > o2.right || y < o2.top || y > o2.bottom) return false;
        const r = b.getBoundingClientRect();
        M.topDrop(selTop, (x - r.left) / r.width, (y - r.top) / r.height); handle(M.drain()); dirty = true; return true;
      };
      el.addEventListener('pointerdown', e => {
        if (e.button > 0 || over) return;
        const brk = e.target.closest('.cf-break [data-a]'); if (brk) { e.preventDefault(); act(brk.dataset.a, brk.dataset); return; }
        if (paused || S.phase !== 'rush') return;
        const pr = e.target.closest('[data-pour]'); if (pr) { e.preventDefault(); pourPtr = true; M.pour(true); handle(M.drain()); return; }
        const rl = e.target.closest('[data-roll]'); if (rl) { e.preventDefault(); const r = rl.getBoundingClientRect(); rolling = { y: e.clientY, x: e.clientX, h: r.height, last: 0 }; return; }
        const ct = e.target.closest('[data-cut]'); if (ct) { e.preventDefault(); const r = ct.getBoundingClientRect(); M.kimCut((e.clientX - r.left) / r.width); handle(M.drain()); dirty = true; return; }
        const dg = e.target.closest('[data-drag]'); if (dg) { e.preventDefault(); drag = { src: dg, kind: dg.dataset.drag, x: e.clientX, y: e.clientY, ghost: null, ds: { ...dg.dataset } }; return; }
        const it = e.target.closest('[data-drop="item"]'); if (it && selTop) { e.preventDefault(); dropTop(e.clientX, e.clientY); return; }
        const b = e.target.closest('[data-a]'); if (b && !b.disabled) { e.preventDefault(); act(b.dataset.a, b.dataset); }
      });
      el.addEventListener('click', e => { if (e.detail !== 0) return; const b = e.target.closest('[data-a]'); if (b && !b.disabled && !b.closest('.cf-break') && S.phase === 'rush' && !paused) act(b.dataset.a, b.dataset); });
      const onMove = e => {
        if (rolling) {
          const dy = rolling.y - e.clientY, dx = e.clientX - rolling.x;
          if (dy > 4) { const q = clamp(1 - Math.abs(dx) / Math.max(8, dy) * 0.7, 0, 1); M.kimRoll(dy / (rolling.h * 0.9), q); rolling.y = e.clientY; rolling.x = e.clientX; const now = performance.now(); if (now - rolling.last > 120) { K.roll(); rolling.last = now; } handle(M.drain()); dirty = true; }
          else if (dy < -4) { rolling.y = e.clientY; rolling.x = e.clientX; }
          return;
        }
        if (!drag) return;
        if (!drag.ghost && Math.hypot(e.clientX - drag.x, e.clientY - drag.y) > 7) {
          drag.ghost = document.createElement('div'); drag.ghost.className = 'cf-ghost k-' + drag.kind; drag.ghost.innerHTML = drag.src.innerHTML; el.appendChild(drag.ghost);
          if (drag.kind === 'top') { selTop = drag.ds.top; dirty = true; }
        }
        if (drag.ghost) { const r = el.getBoundingClientRect(); drag.ghost.style.transform = `translate(${e.clientX - r.left}px, ${e.clientY - r.top}px)`;
          el.querySelectorAll('.cf-hover').forEach(n => n.classList.remove('cf-hover'));
          const over = document.elementFromPoint(e.clientX, e.clientY), dz = over && over.closest('[data-drop]'); if (dz) dz.classList.add('cf-hover'); }
      };
      const onUp = e => {
        if (pourPtr) { pourPtr = false; M.pour(false); handle(M.drain()); }
        if (rolling) { rolling = null; return; }
        if (!drag) return;
        const d = drag; drag = null;
        el.querySelectorAll('.cf-hover').forEach(n => n.classList.remove('cf-hover'));
        if (!d.ghost) { act(d.src.dataset.a || d.ds.a, d.ds); return; }
        d.ghost.remove();
        const over = document.elementFromPoint(e.clientX, e.clientY), dz = over && over.closest('[data-drop]');
        if (!dz) { dirty = true; return; }
        if (d.kind === 'tray' && dz.dataset.drop === 'cust') M.serve(+d.ds.tid, +dz.dataset.cid);
        else if (d.kind === 'top' && dz.dataset.drop === 'item') { selTop = d.ds.top; dropTop(e.clientX, e.clientY); }
        else if (d.kind === 'ing' && dz.dataset.drop === 'sheet') M.kimLay(d.ds.ing);
        handle(M.drain()); dirty = true;
      };
      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
      window.addEventListener('pointercancel', onUp);

      // keyboard: the next topping goes on its next free spot (a small wobble), Space cuts at the next mark
      const keyTop = top => {
        const p = S.topping; if (!p) return;
        const sp = TOPS[top].spots, used = p.drops.filter(d => d.top === top).length, s = sp[used % sp.length];
        M.topDrop(top, s[0] + (Math.random() - 0.5) * 0.06, s[1] + (Math.random() - 0.5) * 0.06);
      };
      const key = e => {
        const k = e.key;
        if (over) return;
        if (!$('.cf-break').hidden) {
          if (k === 'Enter' || k === ' ') { e.preventDefault(); e.stopPropagation(); const f = document.activeElement, b = f && f.closest && f.closest('.cf-break [data-a]'); if (b && !b.disabled) act(b.dataset.a, b.dataset); else if (k === 'Enter') openDoors(); }
          return;
        }
        if (k === 'Escape') { e.preventDefault(); e.stopPropagation(); if (S.phase === 'rush' || paused) setPause(!paused); return; }
        if (paused || S.phase !== 'rush' || e.metaKey || e.ctrlKey || e.altKey) return;
        const lk = k.length === 1 ? k.toLowerCase() : k;
        let used = true;
        if (lk >= '1' && lk <= '4') setView(['order', 'drinks', 'griddle', 'build'][+lk - 1]);
        else if (k === 'Tab') { const vs = ['order', 'drinks', 'griddle', 'build']; setView(vs[(vs.indexOf(view) + (e.shiftKey ? 3 : 1)) % 4]); }
        else if (lk === 't') { const i = SUNOO_AT.indexOf(S.sunoo.at); M.assign(SUNOO_AT[(i + 1) % SUNOO_AT.length]); }
        else if (lk === 'g') M.hurry();
        else if (lk === 'm') act('music', {});
        else if (view === 'order') {
          if (k === ' ') M.takeOrder();
          else if (k === 'Enter') { const t = S.tickets.find(x => x.made.every(Boolean)); if (t) M.serve(t.id); }
          else used = false;
        } else if (view === 'drinks') {
          const d = S.drink;
          if (k === ' ') { if (!e.repeat) M.pour(true); }
          else if (lk === 'q') M.drinkCup('S'); else if (lk === 'w') M.drinkCup('L');
          else if ('zxcv'.includes(lk) && d) { const a = DRINKS[d.type].adds.filter(x => M.avail('add').includes(x))['zxcv'.indexOf(lk)]; if (a) M.drinkAdd(a); }
          else if (k === 'Enter') M.drinkDone(); else if (k === 'Backspace') M.drinkBin();
          else if (k === 'ArrowDown' || k === 'ArrowUp') { const w = M.owed('drink')[0]; if (w && !d) M.drinkStart(w.tid, w.li); }
          else used = false;
        } else if (view === 'griddle') {
          if ('zxcv'.includes(lk) && lk) M.grillFlip('zxcv'.indexOf(lk));
          else if ('asdf'.includes(lk) && lk) M.grillOff('asdf'.indexOf(lk));
          else if (k === ' ') { const st = S.griddle.map((g, i) => M.grillState(i)); let i = st.indexOf('burning'); if (i < 0) i = st.indexOf('ready'); if (i >= 0) M.grillOff(i); else { i = st.indexOf('flip'); if (i >= 0) M.grillFlip(i); else { const w = M.owed('grill')[0]; if (w) M.grillPlace(w.tid, w.li); } } }
          else used = false;
        } else if (view === 'build') {
          const p = S.topping, kb = S.kimbap;
          if (p) {
            const tops = GRILL[p.type].tops.filter(x => M.avail('top').includes(x));
            if ('zxcv'.includes(lk) && lk && tops['zxcv'.indexOf(lk)]) keyTop(tops['zxcv'.indexOf(lk)]);
            else if (k === 'Enter') { M.topDone(); selTop = null; } else used = false;
          } else if (kb) {
            const bins = ['rice', ...M.avail('fill')];
            if (kb.stage === 'lay' && 'zxcvbnm'.includes(lk) && lk && bins['zxcvbnm'.indexOf(lk)]) M.kimLay(bins['zxcvbnm'.indexOf(lk)]);
            else if (k === ' ' && kb.stage === 'roll') { M.kimRoll(0.26, 0.92); K.roll(); }
            else if (k === ' ' && kb.stage === 'cut') { const n = kb.cuts.length + 1; M.kimCut(n / (CUTS + 1) + (Math.random() - 0.5) * 0.03); }
            else if (k === 'Backspace') M.kimBin(); else used = false;
          } else if (k === ' ' || k === 'Enter') { if (S.rack.length) M.topStart(0); else { const w = M.owed('kimbap')[0]; if (w) M.kimStart(w.tid, w.li); } }
          else used = false;
        } else used = false;
        if (used) { e.preventDefault(); e.stopPropagation(); handle(M.drain()); dirty = true; }
      };
      const keyUp = e => { if (e.key === ' ' && S.drink && S.drink.pouring) { M.pour(false); handle(M.drain()); } };
      window.addEventListener('keydown', key, true);
      window.addEventListener('keyup', keyUp, true);

      /* ── pause, breaks, the end ── */
      function setPause(on) {
        paused = on; $('.mg-pause').hidden = !on; K.pause(on); M.pour(false);
        if (on) $('.mg-pause [data-p="resume"]').focus(); else last = performance.now();
      }
      $('.mg-pause').addEventListener('click', e => { const p = e.target.closest('[data-p]'); if (!p) return; if (p.dataset.p === 'resume') setPause(false); else { setPause(false); finish(true); } });
      function showBreak(first) {
        const b = $('.cf-break'), r = S.rushes[S.rushes.length - 1];
        const howto = `<ol class="cf-how"><li><b>Order</b> Customers walk up one at a time. Take the order: a ticket prints onto the rail.</li><li><b>Drinks</b> Pick the cup, hold to pour, let go on the line, add the add-ins.</li><li><b>Griddle</b> Hotteok and toast cook on the side touching the griddle. Flip, then take off at the ticket's doneness.</li><li><b>Build</b> Roll kimbap (fillings in order, roll, slice) and top and plate the griddle things.</li><li><b>Serve</b> Drag the finished tray onto the customer. Every step is scored; they taste it and tip.</li></ol>`;
        b.innerHTML = `<div class="cf-brk"><h2>${first ? "Yeobo's" : `Rush ${S.rush + 1} done`}</h2>
          ${first ? `<p class="cf-sub">Winter break. Sunoo's grandmother's café, three rushes, one day.</p>${howto}` : `<dl class="cf-rs"><dt>Served</dt><dd>${r.served}</dd><dt>Walked out</dt><dd>${r.left}</dd><dt>Tips</dt><dd>${won(r.tips)}</dd><dt>Stars</dt><dd>★ ${r.stars.toFixed(1)}</dd></dl>
          <h3>The shop <span>${won(S.money)} to spend</span></h3><div class="cf-shop">${UPGRADES.map(u => { const own = S.upgrades.includes(u.id); return `<button type="button" class="${own ? 'own' : ''}" data-a="buy" data-id="${u.id}"${own || S.money < u.cost ? ' disabled' : ''}><b>${esc(u.name)}</b><small>${esc(u.note)}</small><em>${own ? 'Bought' : won(u.cost)}</em></button>`; }).join('')}</div>`}
          <h3>Sunoo starts on</h3><div class="cf-sstart">${SUNOO_AT.map(a => `<button type="button" class="${S.sunoo.at === a ? 'on' : ''}" data-a="sunoo" data-at="${a}">${a === 'off' ? 'Nothing' : VIEW_NAME[a]}</button>`).join('')}</div>
          <button type="button" class="cf-open" data-a="open">${first ? 'Open the doors' : `Open for ${RUSH_NAME[S.rush + 1].toLowerCase()}`} <kbd>Enter</kbd></button></div>`;
        b.hidden = false; b.querySelector('.cf-open').focus();
      }
      function openDoors() {
        if (S.phase !== 'brief' && S.phase !== 'break') return;
        $('.cf-break').hidden = true;
        if (S.rush + 1 === 2) { dayBg = o.nightBg || 'epi-h-yeobos-night'; el.classList.add('night'); paintBgs(); bgOk(dayBg); }
        M.startRush(); setView('order'); handle(M.drain()); K.door(); dirty = true;
      }
      function finish(quit) {
        if (over) return; over = true; K.music(false); K.sizzle(0); K.pour(false);
        const res = M.result(quit), g = res.grade, end = $('.mg-end');
        const [hf, hl] = HAL.verdict[g], [sf, sl] = SUNOO.end[g];
        end.innerHTML = `<h2>End of the day</h2><span class="cf-stamp">${hasArt('stamp-s') ? img('stamp-' + g.toLowerCase()) : ''}<b class="mg-grade g-${g}">${g}</b></span>
          <dl><dt>Customers</dt><dd>${res.served} served${res.left ? ` · ${res.left} walked out` : ''}</dd><dt>Tips</dt><dd>${won(res.tips)}</dd><dt>Average</dt><dd>★ ${res.stars.toFixed(1)}</dd><dt>Five-star tables</dt><dd>${res.fiveStars}</dd>
          <dt>Steps</dt><dd>Wait ${res.steps.wait} · Drinks ${res.steps.drinks} · Griddle ${res.steps.griddle} · Build ${res.steps.build}</dd>${res.unlocks.length ? `<dt>Stamp card</dt><dd>${res.unlocks.map(u => esc(UNLOCKS.find(x => x.id === u).name)).join(', ')}</dd>` : ''}${res.halmeoni ? `<dt>Halmeoni's order</dt><dd>★ ${res.halmeoni.stars}</dd>` : ''}${res.burnt ? `<dt>Burnt</dt><dd>${res.burnt}</dd>` : ''}</dl>
          <div class="cf-verdict"><img src="${FACE('halmeoni-hoax', hf)}" alt="" onerror="this.remove()"><p><b>Halmeoni</b>${esc(hl)}</p></div>
          <div class="cf-verdict s"><img src="${sunooFace(sf)}" alt="" onerror="this.remove()"><p><b>Sunoo</b>${esc(sl)}</p></div>
          <button type="button">Continue</button>`;
        end.hidden = false; $('.cf-say').classList.remove('on'); $('.cf-break').hidden = true;
        const btn = end.querySelector('button'); btn.focus();
        btn.onclick = () => { cleanup(); o.onDone?.(res); resolve(res); };
      }
      const cleanup = () => { cancelAnimationFrame(raf); window.removeEventListener('keydown', key, true); window.removeEventListener('keyup', keyUp, true); window.removeEventListener('keydown', skipT, true); window.removeEventListener('pointermove', onMove); window.removeEventListener('pointerup', onUp); window.removeEventListener('pointercancel', onUp); K.close(); el.remove(); };

      /* ── loop ── */
      const frame = now => {
        const dt = Math.min(0.1, (now - last) / 1000); last = now;
        if (!paused && !over) {
          if (S.phase === 'rush') M.tick(dt);
          handle(M.drain());
          if (saying && (sayT -= dt) <= 0) nextSay();
          if (toastT > 0 && (toastT -= dt) <= 0) $('.cf-toast').classList.remove('on');
          if (annT > 0 && (annT -= dt) <= 0) $('.cf-ann').classList.remove('on');
          for (let i = leaving.length - 1; i >= 0; i--) if (now > leaving[i].until) { leaving.splice(i, 1); dirty = true; }
          if (dirty || (renderT -= dt) <= 0) { render(); renderT = 0.15; }
          live();
        }
        raf = requestAnimationFrame(frame);
      };

      // the title card (Kat's art when it exists), held 1.8 s; a click or a key skips
      const tt = $('.cf-title');
      let begun = false;
      const begin = () => { if (begun) return; begun = true; window.removeEventListener('keydown', skipT, true); tt.classList.add('out'); setTimeout(() => tt.remove(), 450); pushSay({ who: 'sunoo', line: SUNOO.open[0] }); showBreak(true); if (musicOn) K.music(true); };
      function skipT(e) { if (e.key !== 'Escape') { e.stopPropagation(); e.preventDefault(); begin(); } }
      tt.onclick = begin; window.addEventListener('keydown', skipT, true); setTimeout(begin, 1800);
      render();
      raf = requestAnimationFrame(frame);
      if (typeof o.hook === 'function') o.hook({ M, act, setView, render, finish });   // tests only
    });
  }

  return { play, shift, DRINKS, GRILL, TOPS, FILLS, UPGRADES, UNLOCKS, ROSTER, DIFF };
})();
