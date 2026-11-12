/* FEMC epilogue minigame: the planchette (Nov 11 2026). A DEMO: not in the story (try it at mockups/minigames/index.html once
   the main session adds its card). HOAX's own horror game, made to play unlike Hold On (gripping, anchors) and The Seventh Stair
   (moving only under cover): this one is steering against something. Setting and tone only from the HOAX epilogue's séance (the
   Hate Club in Jihoon's dark living room, a board on the floor, candles from a gift set, a joke until it isn't); nothing of the
   plot is told and no on-screen text names what happens there. Dread, not jumpscares; no gore; two sharp moments.

   FemcPlanchette.play({ host, mute, difficulty, bg, calm, perf, onDone }) -> Promise<result>
     host        element to draw into (default document.body; a full-screen overlay is added inside it)
     mute        no audio at all (every sound has a caption chip; the tells are all visual too, nothing is sound-only)
     difficulty  'easy' | 'normal' | 'hard' (questions 6 / 7 / 8 before GOODBYE; the force's push 300 / 430 / 540 and how much of
                 it aims at its own letters .45 / .55 / .65; jerks every 9-14 / 6.5-10 / 4.5-7.5 s; letters swap every 26-34 /
                 18-26 / 13-19 s; how loud the tells are (the candle, the swapped letters' colour, the ring): loud / some /
                 faint; dwell 1000 / 1200 / 1350 ms; while the group's letter fills it tugs at it, harder each difficulty; "let it spell" offers 1 / 2 / 2; default 'normal')
     bg          a background id under assets/femc/bg/ (default epi-h-jihoon-house, night, one lamp; drawn dark if missing)
     calm, perf  Reduce flashes / Performance; default: the game's settings (FemcGame.settings().calm / .perf), else off
     onDone      called with the result too
   result = { won, grade: 'S' | 'A' | 'B' | 'C', ending: 'goodbye' | 'board' | 'quit', quit, asked, answered, strays,
              boardLetters, boardWords, words, let, listened, fooled, hold, secs }
     answered = questions the group got its answer for; strays = letters taken that were nobody's; boardLetters / boardWords =
     what the board spelled for itself; words = its words in order (spaces as spelled, e.g. 'ONE MORE'); let = times she let it
     spell (listened = let > 0); fooled = letters taken while the board had swapped their labels; hold = the board's meter at
     the end (0-100); secs = how long it took

   How it plays: a spirit board on the floor by candlelight (two arcs A-M / N-Z, YES and NO under a sun and a moon, 1-9 0,
   GOODBYE), seven people's fingers on the planchette (stand-in hands drawn round it). Solar is the one really steering.
     Steer       hold the mouse button / a finger and drag: the planchette is pulled toward the pointer (it lags; the force sits
                 between). Arrows / WASD push it; Space holds it steady where it is. Let go and her fingers relax and it drifts.
     Spell       the group asks a question and agrees on an answer for it (a joke on Junkyu, mostly). Keep the glass (the lens in
                 the planchette) on the next letter until its ring fills: that letter is spelled. Double letters: stay on it
                 for a second ring. Finish the answer for the next question. Last, take it to GOODBYE (a longer hold).
     The force   something else pushes too: a slow drift, a pull toward the letters of ITS word (cunning), a shove away from the
                 group's next letter when the glass gets close (resistance), and sudden jerks, each after a beat of silence.
                 It grows through the night. Letters it gets fill the board's meter (its letter more, a stray letter less, a
                 whole word of its own a lot); finishing an answer takes a little off; stuck on one answer letter for 12 s, it creeps
                 up by itself (impatience). Full = the board wins.
     Let it      when it has started a word, sometimes she can stop fighting (L, or the button): it spells its word smoothly
                 by itself, the group's question is dropped, and it changes the end (listened; a creepier card; the grade at most B).
   Grade: S goodbye, the meter ≤ 30, no word of its own, ≤ 2 strays, never let it; A goodbye, ≤ 60, ≤ 1 word, never let it;
   B goodbye; C the board won or quit.

   The board lies (the drawn board under the glass is the truth for what you're on, the labels are not):
     swaps      two letters' labels trade places for a few seconds, usually the group's next letter and the board's next one,
                so steering to the label takes its letter. Tells: the swapped labels sit off their line, tinted bone, and
                shimmer (easy), slightly off and bone (normal), barely off (hard).
     candles    the candles flicker when the glass is near a letter that isn't the group's next one (hardest near the board's);
                under reduced motion they dim instead of flickering. On easy the dwell ring goes bone on a wrong letter too.
     the HUD    'Under the glass' names the wrong letter for a moment; the spelled answer shows the group's letter in bone when
                the board really took its own (the friend reading it out says what it really was); 'The board' meter is
                relabelled 'It'; 'Hands on it: 7' stays 7 when there are eight; a caption types a sentence and deletes it.
     the room   the friends' chatter goes quiet in the last questions (captions turn to "…"); an eighth hand, pale, from the
                side of the board where nobody sits, rests on the planchette from the fifth question (and the force grows).
   Sharp moments (once a run): every candle goes out for a beat (a silence first), and when they catch again the planchette is
   on the board's next letter with its ring half full; the eighth hand.
   Sound (Web Audio, made here, no files): a room tone, the planchette's wood scrape tied to its speed, a low hum under the
   force (it beats and detunes as it grows), candle gutters, whispers panned to the side of its letter, a knock under the board
   when it takes a letter, silence before a jerk, the candles going out and catching. Mute = silent; every one has a caption.
   Controls never lie: Esc (pause: Resume / Quit), Space, arrows, L and the pointer always do what they say.
   Title card ~1.8 s (click / any key skips; Esc skips and pauses), content note under it. End: GOODBYE = warm light, the
   planchette slides off the board; the board wins = it finishes its word by itself and the candles gutter down, a quiet card.
   Settings: reduced motion = no shake, no flicker or shimmer (dims instead), crossfades; Reduce flashes (calm) = the blackout is
   a slow dim, no hard cuts; Performance = no blur / glow layers, fewer candle lights. Pink and near-black UI; the scene is
   candlelit (warm flames, never used for UI).

   Optional art (each used only if it loads; the drawn version stays under it):
     art/minigames/planchette/title.webp       the title card picture (full bleed)
     art/minigames/planchette/board.webp       the board's blank surface, 1000 x 640 framing, NO letters (letters stay drawn
                                               so their hit spots line up)
     art/minigames/planchette/planchette.webp  the planchette, tip up, the glass at the image centre, about 140 x 150 board units
   Test hooks: FemcPlanchette.state() (the live state), .ctl() ({ aim(x, y), release(), steady(on), letIt(), pause(on), quit(),
   cont(), skip() }: board coordinates 1000 x 640), TOK (token positions), QUESTIONS, WORDS, DIFF. */
window.FemcPlanchette = (() => {
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const base = () => (window.FemcGame && window.FemcGame.base) || (document.querySelector('script[src*="minigames/planchette"]')?.src.split('assets/')[0]) || '';
  const reduced = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const rnd = ([a, b]) => a + Math.random() * (b - a);
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const ART = id => `${base()}assets/femc/game/art/minigames/planchette/${id}.webp`;
  const BG = id => `${base()}assets/femc/bg/${id}.webp`;
  const W = 1000, H = 640;

  /* the board: every token's spot (board units) */
  const TOK = {};
  const put = (id, x, y, o) => { TOK[id] = { id, x, y, r: o.r, rot: o.rot || 0, size: o.size, wide: o.wide || 0 }; };
  'ABCDEFGHIJKLM'.split('').forEach((c, i) => { const d = 200 + i * 140 / 12, a = d * Math.PI / 180; put(c, 500 + 420 * Math.cos(a), 470 + 300 * Math.sin(a), { r: 32, rot: d + 90, size: 50 }); });
  'NOPQRSTUVWXYZ'.split('').forEach((c, i) => { const d = 203 + i * 134 / 12, a = d * Math.PI / 180; put(c, 500 + 340 * Math.cos(a), 522 + 225 * Math.sin(a), { r: 26, rot: d + 90, size: 42 }); });
  '1234567890'.split('').forEach((c, i) => put(c, 230 + i * 60, 528, { r: 24, size: 34 }));
  put('YES', 150, 96, { r: 46, size: 40 }); put('NO', 850, 96, { r: 46, size: 40 }); put('GOODBYE', 500, 598, { r: 30, wide: 112, size: 36 });
  const SWAPPABLE = id => id.length === 1;

  const DIFF = {
    easy:   { qs: [0, 1, 2, 3, 4, 7], force: 300, grow: .45, cunning: .45, resist: 200, tug: .3, jerk: [9, 14], jerkV: 420, swap: [26, 34], tell: 2, dwell: 1000, offers: 1, letter: 6, stray: 2, word: 16, black: 3, lies: false },
    normal: { qs: [0, 1, 2, 3, 4, 5, 7], force: 430, grow: .55, cunning: .55, resist: 280, tug: .45, jerk: [6.5, 10], jerkV: 560, swap: [18, 26], tell: 1, dwell: 1200, offers: 2, letter: 7, stray: 3, word: 18, black: 3, lies: true },
    hard:   { qs: [0, 1, 2, 3, 4, 5, 6, 7], force: 540, grow: .7, cunning: .65, resist: 340, tug: .55, jerk: [4.5, 7.5], jerkV: 700, swap: [13, 19], tell: 0, dwell: 1350, offers: 2, letter: 8, stray: 4, word: 20, black: 2, lies: true },
  };
  // the group's questions: who asks, the question, who settles the answer and how, the answer (tokens)
  const QUESTIONS = [
    { who: 'Cherry', q: 'Is anyone here with us tonight?', by: 'Hyunsuk', how: 'Take it to YES. Watch Junkyu.', ans: ['YES'] },
    { who: 'Jihoon', q: 'What’s your name, spirit?', by: 'Jihoon', how: 'Bob. Make it Bob. Nobody’s scared of a Bob.', ans: ['B', 'O', 'B'] },
    { who: 'Junkyu', q: 'Are you… going to hurt us?', by: 'Cherry', how: 'NO. Take it to NO.', ans: ['NO'] },
    { who: 'Hyunsuk', q: 'What do you want?', by: 'Jihoon', how: 'Snacks. It wants snacks. Spell it.', ans: ['S', 'N', 'A', 'C', 'K', 'S'] },
    { who: 'Jihoon', q: 'Who’s the best-looking person in this room?', by: 'Asahi', how: 'Spell HOON so he shuts up.', ans: ['H', 'O', 'O', 'N'] },
    { who: 'Jaehyuk', q: 'How many of us are touching it?', by: 'Jaehyuk', how: 'Seven. Put it on 7. It’s science.', ans: ['7'] },
    { who: 'Asahi', q: 'How old are you?', by: 'Jihoon', how: 'A hundred. Make it old and tired.', ans: ['1', '0', '0'] },
    { who: 'Junkyu', q: 'Can we stop now?', by: 'Hyunsuk', how: 'YES. Yes. Take it to YES.', ans: ['YES'] },
  ];
  const GOODBYE = { who: 'Cherry', q: 'Say goodbye. Everybody. Now.', by: 'Cherry', how: 'Take it to GOODBYE and nobody lets go till it’s there.', ans: ['GOODBYE'] };
  // what it spells for itself, in order (spaces are for the cards only); the last one is the goodbye's
  const WORDS = ['HERE', 'LOOK', 'BEHIND', 'ONE MORE', 'COUNT', 'AGAIN', 'DOWN', 'LISTEN'];
  const LAST = 'STAY';
  const CHAT = [
    ['Junkyu', 'Who’s pushing. Somebody’s pushing.'], ['Jihoon', 'Not me. I’m a vessel.'], ['Cherry', 'Jihoon, I swear to god.'],
    ['Asahi', 'No one cares. Keep going.'], ['Hyunsuk', 'Bro, your hands are freezing.'], ['Jaehyuk', 'Your hands move without you noticing. It’s been studied.'],
    ['Junkyu', 'I’m not looking. Tell me when it’s done.'], ['Jihoon', 'Lightly. Like a butterfly. Like a rich butterfly.'], ['Cherry', 'Sol, you okay?'],
  ];
  const GHOST = ['Who’s moving it?', 'Not you.', 'Count the hands.', 'Don’t take your fingers off.', 'It’s warm. Why is it warm?', 'There’s room for one more.', 'Nobody asked that.'];
  const READERS = ['Cherry', 'Hyunsuk', 'Jaehyuk', 'Asahi'];

  /* drawing */
  const P = '#ff4f9e', BONE = '#e8ddd0';
  const HAND = `<path d="M-6 -13h46a7 7 0 0 1 0 13h-46a6.5 6.5 0 0 1 0-13z"/><path d="M-4 1h42a7 7 0 0 1 0 13h-42a6.5 6.5 0 0 1 0-13z"/><path d="M34 -22c26-8 54-4 66 8l60-2v30l-60-1c-14 14-42 16-66 8z"/>`;
  const SKIN = ['#c99a86', '#b98270', '#d6ab95', '#a87563', '#d9b29d', '#bf8f7a', '#caa08b'];
  // seven people round the board: Solar's hand from the bottom (her side), the rest round the sides; the eighth from the top
  const SEATS = [90, 38, 142, 0, 180, -32, -148];
  const handSvg = (deg, fill, cls) => `<g class="${cls}" transform="rotate(${deg}) translate(50 0)" fill="${fill}" stroke="#1a0a0f" stroke-width="2">${HAND}</g>`;
  const PL_PATH = 'M0 -78C30 -44 72 -14 64 22C57 56 20 64 0 48C-20 64 -57 56 -64 22C-72 -14 -30 -44 0 -78Z';
  const boardSvg = () => {
    const toks = Object.values(TOK).map(t => `<text class="pl-tok" data-k="${t.id}" x="${t.x.toFixed(1)}" y="${t.y.toFixed(1)}" font-size="${t.size}" ${t.rot ? `transform="rotate(${(t.rot % 360).toFixed(1)} ${t.x.toFixed(1)} ${t.y.toFixed(1)})"` : ''}>${t.id}</text>`).join('');
    const sun = `<g class="pl-deco" transform="translate(150 50)"><circle r="16"/>${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<path d="M0 -22v-9" transform="rotate(${i * 45})"/>`).join('')}</g>`;
    const moon = `<g class="pl-deco" transform="translate(850 50)"><path d="M6 -18a19 19 0 1 0 0 36a14 14 0 1 1 0-36z"/></g>`;
    const hands = SEATS.map((d, i) => handSvg(d, SKIN[i], 'pl-hand' + (i === 0 ? ' her' : ''))).join('') + handSvg(-90, BONE, 'pl-hand pl-eighth');
    return `<svg class="pl-board" viewBox="0 0 ${W} ${H}" aria-hidden="true">
      <defs><radialGradient id="pl-wood" cx="50%" cy="55%" r="70%"><stop offset="0" stop-color="#5a2a22"/><stop offset=".7" stop-color="#3a1712"/><stop offset="1" stop-color="#1e0a08"/></radialGradient>
      <radialGradient id="pl-lensg"><stop offset="0" stop-color="rgba(255,240,230,.18)"/><stop offset="1" stop-color="rgba(255,240,230,.04)"/></radialGradient></defs>
      <rect class="pl-surface" x="16" y="14" width="968" height="612" rx="42" fill="url(#pl-wood)"/>
      <image class="pl-boardart" href="${ART('board')}" x="0" y="0" width="${W}" height="${H}" preserveAspectRatio="xMidYMid slice"/>
      <rect x="30" y="28" width="940" height="584" rx="34" fill="none" stroke="rgba(232,221,208,.28)" stroke-width="2"/>
      ${sun}${moon}<g class="pl-toks">${toks}</g>
      <text class="pl-burn" x="500" y="420"></text>
      <g class="pl-pl" transform="translate(500 420)">
        ${hands}
        <path class="pl-heart" d="${PL_PATH}"/>
        <image class="pl-plart" href="${ART('planchette')}" x="-70" y="-80" width="140" height="150"/>
        <circle class="pl-lens" r="22"/>
        <circle class="pl-ring" r="30" transform="rotate(-90)"/>
        <circle class="pl-dot" r="2.5"/>
      </g>
    </svg>`;
  };
  const CANDLES = [[7, 76, 1], [93, 74, .9], [4, 34, .8], [96, 30, .85], [26, 93, 1.05], [74, 94, 1], [50, 5, .7]];

  let cur = null;
  function play(o = {}) {
    return new Promise(done => {
      const host = o.host || document.body;
      const D = DIFF[o.difficulty] || DIFF.normal;
      const GS = (window.FemcGame && window.FemcGame.settings && window.FemcGame.settings()) || {};
      const still = !!reduced.matches, calm = o.calm ?? !!GS.calm, perf = o.perf ?? !!GS.perf;
      const QS = D.qs.map(i => QUESTIONS[i]).concat([GOODBYE]);
      const RING = 2 * Math.PI * 30;
      const st = {
        t: 0, begun: false, paused: false, over: false, phase: 'ask', pEnd: 0, qi: -1, ai: 0,
        p: { x: 500, y: 420 }, v: { x: 0, y: 0 }, aim: null, held: false, keys: new Set(), steady: false, lastIn: -9999, drift: Math.random() * 6.28,
        wi: 0, bi: 0, its: WORDS[0].replace(/ /g, ''), hold: 0, strays: 0, boardLetters: 0, boardWords: 0, words: [], let: 0, fooled: 0, asked: 0, answered: 0,
        dw: { tok: null, ms: 0 }, under: null, speed: 0, fmag: 0, flick: 0,
        jerkAt: 0, hush: null, swapAt: 0, swap: null, readLie: null, hudLie: null, ghost: null, ghostAt: 0, chatAt: 0, whisperAt: 0,
        dark: null, blackDone: false, eighth: false, silent: false, offer: null, offers: 0, offeredQ: -1, auto: false, outro: false, outroEnd: 0,
        capT: {}, ending: null, ctl: null,
      };
      cur = st;
      const timers = new Set();
      const later = (fn, ms) => { const id = setTimeout(() => { timers.delete(id); fn(); }, ms); timers.add(id); return id; };
      const el = document.createElement('div');
      el.className = 'mg-pl' + (still ? ' still' : '') + (calm ? ' calm' : '') + (perf ? ' perf' : '');
      el.setAttribute('role', 'application');
      el.setAttribute('aria-label', 'The planchette');
      el.innerHTML = `
        <div class="pl-scene">
          <img class="pl-bg" src="${BG(o.bg || 'epi-h-jihoon-house')}" alt="" onerror="this.remove()">
          <div class="pl-moon"></div>
          <div class="pl-stage">${boardSvg()}</div>
          <div class="pl-glow"></div>
          ${CANDLES.map(([x, y, s], i) => `<i class="pl-candle" style="left:${x}%;top:${y}%;--s:${s};--d:${(i * 0.37) % 1}s"><b></b></i>`).join('')}
          <div class="pl-vig"></div>
        </div>
        <div class="pl-black"></div>
        <div class="pl-top"><b class="pl-name">THE PLANCHETTE</b><span class="pl-qn"></span><span class="pl-hands" data-t="Hands on it">Hands on it: 7</span></div>
        <div class="pl-q"><small class="pl-who"></small><p class="pl-qt"></p><div class="pl-ans"><small>Answer</small><span class="pl-slots"></span></div><p class="pl-read">Under the glass: <b>–</b></p></div>
        <div class="pl-meter"><small data-t="The board">The board</small><span><i></i></span></div>
        <ul class="pl-caps" aria-live="polite"></ul>
        <p class="pl-ghost" aria-hidden="true"></p>
        <p class="pl-say" aria-live="polite"></p>
        <button type="button" class="pl-let" hidden>Let it spell <kbd>L</kbd><i></i></button>
        <p class="pl-help">Hold and drag (mouse or finger), or arrows / WASD, to steer the planchette. Keep the glass on a letter until its ring fills. Space holds it steady. Esc pauses.</p>
        <div class="mg-pause" hidden><b>Paused</b><button type="button" data-mg="resume">Resume</button><button type="button" data-mg="quit">Quit</button></div>
        <div class="mg-end" hidden></div>`;
      host.appendChild(el);
      const $ = s => el.querySelector(s);
      const svg = $('.pl-board'), plG = $('.pl-pl'), ringEl = $('.pl-ring'), burnEl = $('.pl-burn');
      const tokEl = {}; el.querySelectorAll('.pl-tok').forEach(t => { tokEl[t.dataset.k] = t; });
      const eighthEl = $('.pl-eighth');
      const capsEl = $('.pl-caps');
      ['.pl-boardart', '.pl-plart'].forEach(s => { const im = $(s); if (im && im.addEventListener) im.addEventListener('error', () => im.remove()); });

      const say = (txt, kind = '') => { const c = $('.pl-say'); c.textContent = txt; c.className = 'pl-say on ' + kind; clearTimeout(say.t); say.t = later(() => c.classList.remove('on'), 2600); };
      // a caption chip: sounds are [bracketed]; speech names its speaker. Every sound gets one, muted or not.
      const cap = (txt, kind = 'snd', who = '') => {
        const li = document.createElement('li'); li.className = 'pl-cap ' + kind;
        li.innerHTML = kind === 'snd' ? `<b>♪</b><span>[${esc(txt)}]</span>` : `<b>${esc(who)}</b><span>${esc(txt)}</span>`;
        capsEl.appendChild(li);
        while (capsEl.children && capsEl.children.length > 4) capsEl.firstChild.remove();
        later(() => li.remove(), kind === 'snd' ? 2600 : 3600);
      };
      const capOnce = (key, gap, txt) => { if ((st.capT[key] || -1e9) + gap > st.t) return false; st.capT[key] = st.t; cap(txt); return true; };
      const speak = (who, txt) => { if (st.silent) { cap('…', 'talk quiet', who); return; } cap(txt, 'talk', who); };

      /* sound: Web Audio, made here */
      let ac = null, A = null;
      const audio = () => {
        if (o.mute || ac) return;
        try { ac = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { ac = null; return; }
        const master = ac.createGain(); master.gain.value = 0.9; master.connect(ac.destination);
        const nbuf = ac.createBuffer(1, ac.sampleRate * 2, ac.sampleRate), d = nbuf.getChannelData(0);
        let b = 0; for (let i = 0; i < d.length; i++) { const w = Math.random() * 2 - 1; b = (b + 0.02 * w) / 1.02; d[i] = i % 2 ? w : b * 3.5; }
        const noise = () => { const n = ac.createBufferSource(); n.buffer = nbuf; n.loop = true; return n; };
        const filt = (type, f, q = 1) => { const x = ac.createBiquadFilter(); x.type = type; x.frequency.value = f; x.Q.value = q; return x; };
        const gain = v => { const g = ac.createGain(); g.gain.value = v; return g; };
        // room tone: a low, warm hush
        const rt = noise(), rl = filt('lowpass', 240, .7), rg = gain(0.05); rt.connect(rl); rl.connect(rg); rg.connect(master); rt.start();
        // the scrape: band-passed noise, gain and colour from the planchette's speed
        const sc = noise(), sb = filt('bandpass', 900, 1.6), sg = gain(0); sc.connect(sb); sb.connect(sg); sg.connect(master); sc.start();
        // the hum under the force: two close sines that beat, and an octave that detunes as it grows
        const h1 = ac.createOscillator(), h2 = ac.createOscillator(), h3 = ac.createOscillator(); h1.frequency.value = 55; h2.frequency.value = 55.6; h3.type = 'triangle'; h3.frequency.value = 110;
        const hl = filt('lowpass', 220, 2), hg = gain(0), h3g = gain(0.25); h1.connect(hl); h2.connect(hl); h3.connect(h3g); h3g.connect(hl); hl.connect(hg); hg.connect(master);
        h1.start(); h2.start(); h3.start();
        A = { master, nbuf, noise, filt, gain, sg, sb, hg, h2, h3, rg };
      };
      const outTo = pan => {
        if (pan && ac.createStereoPanner) { const p = ac.createStereoPanner(); p.pan.value = clamp(pan, -1, 1); p.connect(A.master); return p; }
        return A.master;
      };
      const burst = ({ type = 'bandpass', f = 2000, f2 = 0, q = 1, dur = 0.5, g = 0.2, at = 0.02, pan = 0, when = 0 }) => {
        if (!A) return;
        const t = ac.currentTime + when, n = A.noise(), fl = A.filt(type, f, q), gg = A.gain(0.0001);
        if (f2) fl.frequency.exponentialRampToValueAtTime(f2, t + dur);
        gg.gain.setValueAtTime(0.0001, t); gg.gain.exponentialRampToValueAtTime(g, t + at); gg.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        n.connect(fl); fl.connect(gg); gg.connect(outTo(pan)); n.start(t, Math.random()); n.stop(t + dur + 0.05);
      };
      const tone = ({ f = 200, f2 = 0, type = 'sine', dur = 0.3, g = 0.2, at = 0.01, pan = 0, when = 0 }) => {
        if (!A) return;
        const t = ac.currentTime + when, os = ac.createOscillator(), gg = A.gain(0.0001); os.type = type; os.frequency.setValueAtTime(f, t);
        if (f2) os.frequency.exponentialRampToValueAtTime(f2, t + dur);
        gg.gain.setValueAtTime(0.0001, t); gg.gain.exponentialRampToValueAtTime(g, t + at); gg.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        os.connect(gg); gg.connect(outTo(pan)); os.start(t); os.stop(t + dur + 0.05);
      };
      const SND = {
        whisper: pan => { for (let i = 0; i < 4; i++) burst({ f: 2600 + Math.random() * 1400, f2: 1800 + Math.random() * 1600, q: 7, dur: 0.5 + Math.random() * 0.5, g: 0.06, at: 0.12, pan, when: i * 0.28 + Math.random() * 0.1 }); },
        gutter: () => { for (let i = 0; i < 6; i++) burst({ type: 'lowpass', f: 1800, dur: 0.05, g: 0.1, at: 0.003, when: Math.random() * 0.5 }); },
        jerk: () => { tone({ f: 92, f2: 36, dur: 0.4, g: 0.45 }); burst({ type: 'lowpass', f: 700, dur: 0.14, g: 0.3, at: 0.004 }); },
        knock: pan => { tone({ f: 150, f2: 110, type: 'triangle', dur: 0.16, g: 0.32, pan }); tone({ f: 150, f2: 110, type: 'triangle', dur: 0.16, g: 0.22, pan, when: 0.22 }); },
        hush: on => { if (!A) return; const t = ac.currentTime; A.master.gain.cancelScheduledValues(t); A.master.gain.setTargetAtTime(on ? 0.03 : 0.9, t, on ? 0.06 : 0.12); },
        out: () => burst({ type: 'lowpass', f: 1400, f2: 120, dur: 0.6, g: 0.3, at: 0.01 }),
        relight: () => { burst({ type: 'bandpass', f: 300, f2: 900, q: 1.2, dur: 0.5, g: 0.22, at: 0.25 }); },
        warm: () => [220, 277.2, 329.6].forEach((f, i) => tone({ f, type: 'sine', dur: 2.8, g: 0.045, at: 0.6, when: i * 0.12 })),
        down: () => { if (!A) return; const t = ac.currentTime; A.hg.gain.setTargetAtTime(0.0001, t, 0.6); A.rg.gain.setTargetAtTime(0.0001, t, 1.4); },
      };
      const sound = () => {
        if (!A) return;
        const t = ac.currentTime, dark = !!st.dark;
        A.sg.gain.setTargetAtTime(dark || st.over ? 0 : clamp(st.speed / 1400, 0, 0.3), t, 0.05);
        A.sb.frequency.setTargetAtTime(480 + st.speed * 1.1 + Math.random() * 160, t, 0.05);
        A.hg.gain.setTargetAtTime(st.over ? 0.0001 : clamp(st.fmag / 2400, 0, 0.12) + stage() * 0.05, t, 0.3);
        A.h3.detune.setTargetAtTime(stage() * -55 + (st.eighth ? -30 : 0), t, 0.8);
      };

      /* helpers */
      const stage = () => clamp(st.qi / Math.max(1, QS.length - 1), 0, 1);
      const Q = () => QS[st.qi];
      const isBye = () => st.qi === QS.length - 1;
      const want = () => (Q() ? Q().ans[st.ai] : null);
      const itsNext = () => st.its[st.bi] || null;
      const hit = (x, y) => {
        let best = null, bd = 1e9;
        for (const k in TOK) {
          const t = TOK[k];
          let d;
          if (t.wide) { const dx = Math.abs(x - t.x), dy = Math.abs(y - t.y); if (dx > t.wide || dy > t.r) continue; d = dy + dx * 0.05; }
          else { d = Math.hypot(x - t.x, y - t.y); if (d > t.r) continue; }
          if (d < bd) { bd = d; best = k; }
        }
        return best;
      };
      const near = (x, y, lim) => { let best = null, bd = lim; for (const k in TOK) { const t = TOK[k], d = t.wide ? Math.max(0, Math.abs(x - t.x) - t.wide) + Math.abs(y - t.y) : Math.hypot(x - t.x, y - t.y); if (d < bd) { bd = d; best = k; } } return best ? { k: best, d: bd } : null; };
      const label = k => (st.swap && (k === st.swap.a || k === st.swap.b) ? (k === st.swap.a ? st.swap.b : st.swap.a) : k);
      const sideOf = k => (TOK[k] ? clamp((TOK[k].x - 500) / 420, -1, 1) : 0);
      const dwellNeed = () => D.dwell * (isBye() ? 1.5 : 1);

      /* the flow: ask → spell → react → next; the last is GOODBYE */
      const setPhase = (ph, ms) => { st.phase = ph; st.pEnd = st.t + ms; el.dataset.phase = ph; };
      const nextQ = () => {
        st.qi++; st.ai = 0; st.asked++;
        const q = Q(); if (!q) return;
        st.silent = st.qi >= QS.length - 3 || st.silentQ === st.qi;
        if (isBye()) { st.its = LAST; st.bi = 0; }
        if (q.ans[0] === '7' || st.qi === 4) showEighth();
        setPhase('ask', 3600);
        $('.pl-who').textContent = q.who; $('.pl-qt').textContent = q.q;
        $('.pl-qn').textContent = isBye() ? 'Goodbye' : `Question ${st.qi + 1} / ${QS.length - 1}`;
        speak(q.who, q.q);
        later(() => { if (!st.over && st.qi === QS.indexOf(q)) speak(q.by, q.how); }, 1500);
        if (st.qi >= 1) later(() => { if (!st.over) capOnce('hum', 1, st.qi >= 3 ? 'the hum under the floor gets louder' : 'a low hum, somewhere under the board'); }, 3200);
        paintSlots();
      };
      const showEighth = () => {
        if (st.eighth) return; st.eighth = true;
        if (eighthEl) eighthEl.classList.add('on');
        el.classList.add('eighth');
      };
      const answered = () => {
        st.answered++; st.hold = Math.max(0, st.hold - 8);
        if (isBye()) return finish('goodbye');
        const r = pick(['Jihoon', 'Hyunsuk', 'Cherry']);
        speak(r, pick(['There. See? Totally normal.', 'Okay. Okay, that one was us.', 'Junkyu, breathe. That was us.', 'Next. Quick. Next question.']));
        setPhase('react', 2800);
      };
      const boardWord = (gain) => {
        st.boardWords++; const w = WORDS[st.wi] && !isBye() ? WORDS[st.wi] : LAST; st.words.push(w);
        st.hold += gain;
        burnEl.textContent = w; burnEl.classList.remove('on'); void burnEl.getBBox?.(); burnEl.classList.add('on');
        capOnce('word', 0, 'every candle leans the same way');
        SND.gutter();
        if (!isBye()) { st.wi = (st.wi + 1) % WORDS.length; st.its = WORDS[st.wi].replace(/ /g, ''); }
        st.bi = 0;
      };
      const take = k => {
        const w = want(), its = itsNext(), swapped = st.swap && (k === st.swap.a || k === st.swap.b);
        if (swapped && label(k) === w) st.fooled++;
        if (st.auto || st.outro) {
          if (k === its) {
            st.bi++; st.boardLetters++;
            SND.knock(sideOf(k)); capOnce('knock', 0, 'a knock, under the board');
            if (st.bi >= st.its.length) {
              if (st.outro) return finish('board');
              st.auto = false; el.classList.remove('auto'); boardWord(Math.round(D.word * 0.6));
              cap('nobody says anything'); st.silentQ = st.qi + 1;
              if (isBye()) return; // never: no offers on the goodbye
              setPhase('react', 3200);
            }
          }
          return;
        }
        if (k === w) {
          st.ai++;
          const r = pick(READERS); speak(r, `${k === 'YES' || k === 'NO' || k === 'GOODBYE' ? k : k + '.'}`);
          paintSlots();
          if (st.ai >= Q().ans.length) answered();
          return;
        }
        if (k === its) {
          st.bi++; st.boardLetters++; st.hold += D.letter;
          SND.knock(sideOf(k)); capOnce('knock', 0, 'a knock, under the board');
          const r = pick(READERS);
          speak(r, pick([`${k}? Why ${k}?`, `…that’s ${k}.`, `${k}. Who did ${k}?`]));
          if (D.lies && w && w.length === 1 && Math.random() < 0.45) st.hudLie = { end: st.t + 2200, show: w };
          if (st.bi >= st.its.length) boardWord(D.word);
          else if (!isBye() && st.qi >= 1 && st.offers < D.offers && st.offeredQ !== st.qi && !st.offer) offerLet();
        } else {
          st.strays++; st.hold += D.stray;
          speak(pick(['Jihoon', 'Asahi', 'Hyunsuk']), pick([`${k}? That’s not a word, ghost.`, `${k}. Cool. Very helpful.`, `It went to ${k}. Why ${k}.`]));
        }
        if (st.hold >= 100) boardWins();
      };
      const offerLet = () => {
        st.offers++; st.offeredQ = st.qi; st.offer = { end: st.t + 5000 };
        const b = $('.pl-let'); b.hidden = false; b.classList.add('on');
        say('It wants to finish. You could let it.', 'bone');
      };
      const closeOffer = () => { st.offer = null; const b = $('.pl-let'); b.hidden = true; b.classList.remove('on'); };
      const letIt = () => {
        if (!st.offer || st.auto || st.over || st.paused) return;
        closeOffer(); st.auto = true; st.let++; el.classList.add('auto'); st.aim = null; st.held = false;
        st.silent = true; say('You stop pushing.', 'bone');
      };
      const boardWins = () => {
        if (st.outro || st.over) return;
        st.outro = true; st.auto = true; st.outroEnd = st.t + 9000; closeOffer(); el.classList.add('auto', 'outro');
        st.silent = true; st.aim = null; st.held = false;
        say('It doesn’t need you any more.', 'bone');
        if (st.bi >= st.its.length) st.bi = 0;
      };

      /* the step */
      const KP = 18, GRIP = 3400, DAMP = 6.5;
      const step = dt => {
        st.t += dt; const s = dt / 1000;
        if (st.dark) {
          if (st.t >= st.dark.end) relight(); else { st.speed = 0; return; }
        }
        if (st.phase === 'ask' && st.t >= st.pEnd) setPhase('spell', 0);
        if (st.phase === 'react' && st.t >= st.pEnd) nextQ();
        if (st.over) return;
        if (st.outro && st.t >= st.outroEnd) return finish('board');
        const sp = st.phase === 'spell' || st.auto;
        // a jerk: a beat of silence, then the shove
        if (sp && !st.auto && st.t >= st.jerkAt - 650 && !st.hush) { st.hush = { at: st.jerkAt }; SND.hush(true); cap('silence'); }
        if (st.hush && st.t >= st.hush.at) {
          st.hush = null; SND.hush(false); st.jerkAt = st.t + rnd(D.jerk) * 1000 / (1 + stage() * 0.35);
          if (sp && !st.auto) {
            const it = TOK[itsNext()], toward = it && Math.random() < 0.7;
            const a = toward ? Math.atan2(it.y - st.p.y, it.x - st.p.x) : Math.random() * 6.283;
            const jv = D.jerkV * (1 + stage() * 0.4) * (st.eighth ? 1.1 : 1);
            st.v.x += Math.cos(a) * jv; st.v.y += Math.sin(a) * jv;
            SND.jerk(); cap('the planchette jerks');
            if (!still) { el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake'); later(() => el.classList.remove('shake'), 420); }
          }
        }
        // the blackout (once): silence, every candle out, and back with the planchette somewhere else
        if (sp && !st.auto && !st.blackDone && st.qi >= D.black && st.t >= st.pEnd + 4000 && !st.hush) blackout();
        // the force
        const F = D.force * (1 + D.grow * stage()) * (st.eighth ? 1.15 : 1) * (isBye() ? 1.2 : 1) * (sp ? 1 : 0.3);
        let ax = 0, ay = 0, fx = 0, fy = 0;
        st.drift += (Math.random() - 0.5) * s * 4;
        const it = TOK[itsNext()], dIt = it ? Math.hypot(it.x - st.p.x, it.y - st.p.y) : 999;
        const dr = F * (1 - D.cunning) * Math.min(1, dIt / 80);
        fx += Math.cos(st.drift) * dr; fy += Math.sin(st.drift) * dr;
        if (it) {
          const dx = it.x - st.p.x, dy = it.y - st.p.y, d = dIt || 1;
          const k = (st.auto ? 2200 : F * D.cunning) * Math.min(1, d / (st.auto ? 40 : 30));
          fx += dx / d * k; fy += dy / d * k;
          if (st.auto && d < 30) { st.v.x *= Math.exp(-14 * s); st.v.y *= Math.exp(-14 * s); }
        }
        const wt = sp && !st.auto ? TOK[want()] : null;
        if (wt) {
          const dx = st.p.x - wt.x, dy = st.p.y - wt.y, d = Math.hypot(dx, dy), R = 90 + (wt.wide || 0) * 0.3;
          if (d < R) { const ang = d > 2 ? Math.atan2(dy, dx) : st.drift; const k = D.resist * (1 + stage() * 0.5) * (1 - d / R); fx += Math.cos(ang) * k; fy += Math.sin(ang) * k; }
        }
        // the tug: while the group's letter fills, it worries at the planchette (a shove that changes direction a few times a second)
        if (wt && st.dw.tok === want() && st.dw.ms > 0) {
          if (st.t >= (st.tugAt || 0)) { st.tugAt = st.t + 260 + Math.random() * 320; st.tugA = Math.random() * 6.283; }
          const k = F * D.tug * (0.6 + 0.8 * clamp(st.dw.ms / dwellNeed(), 0, 1));
          fx += Math.cos(st.tugA) * k; fy += Math.sin(st.tugA) * k;
        }
        st.fmag = Math.hypot(fx, fy);
        ax += fx; ay += fy;
        // her fingers
        if (!st.auto) {
          if (st.keys.size) {
            let kx = 0, ky = 0; st.keys.forEach(k => { if (k === 'l') kx--; if (k === 'r') kx++; if (k === 'u') ky--; if (k === 'd') ky++; });
            const m = Math.hypot(kx, ky) || 1; st.aim = { x: st.p.x + kx / m * 150, y: st.p.y + ky / m * 150 }; st.lastIn = st.t;
          } else if (st.aim && !st.held && !st.steady && st.t - st.lastIn > 400) {
            st.aim.x += (st.p.x - st.aim.x) * Math.min(1, s * 2.5); st.aim.y += (st.p.y - st.aim.y) * Math.min(1, s * 2.5);
          }
          if (st.aim) {
            const dx = st.aim.x - st.p.x, dy = st.aim.y - st.p.y, d = Math.hypot(dx, dy);
            if (d > 0.01) { const a = Math.min(GRIP, KP * d); ax += dx / d * a; ay += dy / d * a; }
          }
        }
        st.v.x = st.v.x * Math.exp(-DAMP * s) + ax * s; st.v.y = st.v.y * Math.exp(-DAMP * s) + ay * s;
        st.p.x += st.v.x * s; st.p.y += st.v.y * s;
        if (st.p.x < 40 || st.p.x > W - 40) { st.p.x = clamp(st.p.x, 40, W - 40); st.v.x *= -0.2; }
        if (st.p.y < 40 || st.p.y > H - 30) { st.p.y = clamp(st.p.y, 40, H - 30); st.v.y *= -0.2; }
        st.speed = Math.hypot(st.v.x, st.v.y);
        if (st.speed > 300) capOnce('scrape', 3800, 'wood scrapes on wood');
        // under the glass, and the dwell ring
        st.under = hit(st.p.x, st.p.y);
        if (sp) {
          if (st.under && st.under === st.dw.tok) {
            st.dw.ms += dt;
            if (st.dw.ms >= dwellNeed()) { const k = st.under; st.dw.ms = -450; take(k); if (st.over) return; }
          } else {
            st.dw.ms -= dt * 1.4;
            if (st.dw.ms <= 0) st.dw = { tok: st.under, ms: 0 };
          }
        } else st.dw.ms = Math.max(0, st.dw.ms - dt * 2);
        // the candles: flicker near a letter that isn't the group's next one
        let fl = 0;
        if (sp && !st.auto) {
          const n = near(st.p.x, st.p.y, 70), w = want();
          if (n && n.k !== w) fl = (1 - n.d / 70) * (n.k === itsNext() ? 1 : 0.6) * [0.45, 0.75, 1][D.tell];
        } else if (st.auto) fl = 0.8;
        st.flick += (fl - st.flick) * Math.min(1, s * 6);
        if (st.flick > 0.5) { if (capOnce('gutter', 4200, 'a candle gutters')) SND.gutter(); }
        // the letters swap
        if (sp && !st.auto && !st.swap && st.t >= st.swapAt && st.qi >= 1) doSwap();
        if (st.swap && st.t >= st.swap.end) unswap();
        // the HUD lies
        if (D.lies && sp && !st.readLie && st.t > (st.readAt || 0) && st.qi >= 1) { st.readAt = st.t + 16000 + Math.random() * 10000; const w = want(); if (w && st.under && st.under !== w) st.readLie = { end: st.t + 2400, show: w }; }
        if (st.readLie && st.t >= st.readLie.end) st.readLie = null;
        if (st.hudLie && st.t >= st.hudLie.end) { st.hudLie = null; paintSlots(); }
        if (st.offer && st.t >= st.offer.end) closeOffer();
        // whispers, chatter, a caption that takes itself back
        if (sp && st.qi >= 1 && st.t >= st.whisperAt) {
          st.whisperAt = st.t + 9000 + Math.random() * 6000 - stage() * 3000;
          const k = itsNext(), pan = sideOf(k); SND.whisper(pan);
          cap(`whispering, from the ${pan < -0.2 ? 'left' : pan > 0.2 ? 'right' : 'middle of the circle'}`);
        }
        if (sp && !st.auto && st.t >= st.chatAt) { st.chatAt = st.t + 8000 + Math.random() * 5000; const [who, line] = pick(CHAT); speak(who, line); }
        if (st.qi >= 2 && !st.ghost && st.t >= st.ghostAt) { st.ghostAt = st.t + 24000 + Math.random() * 12000; st.ghost = { txt: pick(GHOST), i: 0, dir: 1, at: st.t }; }
        if (st.ghost && st.t - st.ghost.at > 70) {
          const g = st.ghost; g.at = st.t;
          if (g.dir > 0) { g.i++; if (g.i >= g.txt.length + 22) g.dir = -1; } else { g.i -= 2; if (g.i <= 0) st.ghost = null; }
        }
        // impatience: stuck on the same answer letter for 12 s, the board's meter creeps (no night can stall forever)
        if (sp && !st.auto && st.phase === 'spell') {
          const key = st.qi + ':' + st.ai; if (st.stuckKey !== key) { st.stuckKey = key; st.stuckAt = st.t; }
          if (st.t - st.stuckAt > 12000) { st.hold += s * (1 + stage()); el.classList.add('creep'); if (capOnce('creep', 9000, 'the hum rises, patient')) SND.whisper(0); }
          else el.classList.remove('creep');
        }
        if (st.hold >= 100) boardWins();
      };
      const doSwap = () => {
        st.swapAt = st.t + rnd(D.swap) * 1000;
        const w = want(), its = itsNext();
        if (!w || !SWAPPABLE(w)) return;
        let b = its && SWAPPABLE(its) && its !== w ? its : null;
        if (!b) { const pool = Object.keys(TOK).filter(k => SWAPPABLE(k) && k !== w && Math.hypot(TOK[k].x - TOK[w].x, TOK[k].y - TOK[w].y) < 200); b = pool.length ? pick(pool) : null; }
        if (!b) return;
        st.swap = { a: w, b, end: st.t + 5200 };
        capOnce('swap', 0, 'the board creaks');
        paintToks();
      };
      const unswap = () => { st.swap = null; paintToks(); };
      const blackout = () => {
        st.blackDone = true; SND.hush(true); cap('silence');
        st.dark = { end: st.t + 650 + (calm ? 1700 : 1250), out: st.t + 650 };
        later(() => { if (st.over || !st.dark) return; SND.hush(false); SND.out(); cap('every candle goes out at once'); el.classList.add('dark'); }, 650);
      };
      const relight = () => {
        st.dark = null; el.classList.remove('dark');
        const k = itsNext() || pick(Object.keys(TOK)), t = TOK[k];
        st.p = { x: t.x + (Math.random() - 0.5) * 8, y: t.y + (Math.random() - 0.5) * 8 }; st.v = { x: 0, y: 0 };
        if (st.aim) st.aim = { x: st.p.x, y: st.p.y };
        st.dw = { tok: k, ms: dwellNeed() * 0.55 };
        SND.relight(); cap('the candles catch again, all of them');
        speak('Junkyu', 'Who moved it. WHO MOVED IT.');
        el.classList.add('relit'); later(() => el.classList.remove('relit'), 900);
      };

      /* paint */
      let slotsKey = '';
      const paintSlots = () => {
        const q = Q(); if (!q) return;
        const parts = q.ans.map((a, i) => {
          if (i < st.ai) return `<b>${a}</b>`;
          if (st.hudLie && i === st.ai) return `<b class="lie">${a}</b>`;
          return `<i>${a.length > 1 ? a.replace(/./g, '_') : '_'}</i>`;
        });
        const key = parts.join('');
        if (key !== slotsKey) { slotsKey = key; $('.pl-slots').innerHTML = key; }
      };
      const paintToks = () => {
        for (const k in tokEl) {
          const e = tokEl[k], l = label(k), sw = l !== k;
          if (e.textContent !== l) e.textContent = l;
          e.classList.toggle('sw', sw);
          e.classList.toggle('sw-loud', sw && D.tell === 2);
          e.classList.toggle('sw-soft', sw && D.tell === 1);
          e.classList.toggle('sw-faint', sw && D.tell === 0);
        }
      };
      let lastUnder = null;
      const paint = () => {
        if (plG) plG.setAttribute('transform', `translate(${st.p.x.toFixed(1)} ${st.p.y.toFixed(1)}) rotate(${clamp(st.v.x * 0.012, -9, 9).toFixed(1)})`);
        if (lastUnder !== st.under) { if (lastUnder && tokEl[lastUnder]) tokEl[lastUnder].classList.remove('on'); if (st.under && tokEl[st.under]) tokEl[st.under].classList.add('on'); lastUnder = st.under; }
        const fillR = st.dw.tok && st.dw.ms > 0 ? clamp(st.dw.ms / dwellNeed(), 0, 1) : 0;
        if (ringEl) {
          ringEl.style.strokeDasharray = `${RING}`; ringEl.style.strokeDashoffset = `${(RING * (1 - fillR)).toFixed(1)}`;
          ringEl.classList.toggle('wrong', D.tell === 2 && !!st.dw.tok && st.dw.tok !== want() && !st.auto);
          ringEl.classList.toggle('its', st.auto);
        }
        // the candles
        const j = still ? 0 : (Math.random() - 0.5) * st.flick;
        el.style.setProperty('--flick', st.flick.toFixed(3));
        el.style.setProperty('--lit', clamp(1 - st.flick * (still ? 0.45 : 0.25) + j * 0.5 - stage() * 0.15, 0.2, 1).toFixed(3));
        el.style.setProperty('--hold', (st.hold / 100).toFixed(3));
        el.style.setProperty('--stage', stage().toFixed(3));
        // HUD
        const m = $('.pl-meter i'); if (m) m.style.width = `${clamp(st.hold, 0, 100).toFixed(1)}%`;
        const ml = $('.pl-meter small'), itL = stage() >= 0.5 && D.lies;
        if (ml && ml.textContent !== (itL ? 'It' : 'The board')) { ml.textContent = itL ? 'It' : 'The board'; ml.classList.toggle('lie', itL); }
        const rd = $('.pl-read b'), showK = st.readLie ? st.readLie.show : st.under ? label(st.under) : '–';
        if (rd && rd.textContent !== showK) rd.textContent = showK;
        if (rd) rd.classList.toggle('lie', !!st.readLie);
        const g = $('.pl-ghost');
        if (g) { const txt = st.ghost ? st.ghost.txt.slice(0, Math.min(st.ghost.i, st.ghost.txt.length)) : ''; if (g.textContent !== txt) g.textContent = txt; g.classList.toggle('on', !!st.ghost); }
        if (st.offer) { const b = $('.pl-let i'); if (b) b.style.width = `${clamp((st.offer.end - st.t) / 50, 0, 100).toFixed(1)}%`; }
        paintSlots();
        sound();
      };

      let last = 0, raf = 0;
      const tick = now => {
        const dt = Math.min(60, now - (last || now)); last = now;
        if (!st.paused && !st.over) { step(dt); if (!st.over) paint(); }
        if (!st.over) raf = requestAnimationFrame(tick);
      };

      /* the end */
      const finish = ending => {
        if (st.over) return; st.over = true; st.ending = ending; cancelAnimationFrame(raf); closeOffer();
        st.held = false; st.keys.clear(); st.dark = null; el.classList.remove('dark', 'shake', 'auto');
        const won = ending === 'goodbye', quit = ending === 'quit';
        const grade = !won ? 'C' : st.let > 0 ? 'B' : st.hold <= 30 && st.boardWords === 0 && st.strays <= 2 ? 'S' : st.hold <= 60 && st.boardWords <= 1 ? 'A' : 'B';
        const res = { won, grade, ending, quit, asked: st.asked, answered: st.answered, strays: st.strays, boardLetters: st.boardLetters, boardWords: st.boardWords,
          words: st.words.slice(), let: st.let, listened: st.let > 0, fooled: st.fooled, hold: Math.round(clamp(st.hold, 0, 100)), secs: Math.round(st.t / 1000) };
        st.result = res;
        if (A) { SND.hush(false); if (won) SND.warm(); else SND.down(); }
        if (won) cap('the room tone settles'); else if (!quit) cap('the hum stops');
        el.classList.add(won ? 'won' : quit ? 'quit' : 'lost');
        const last = st.words[st.words.length - 1] || st.its;
        const head = won ? 'Goodbye.' : quit ? 'You took your hand off.' : `It spelled ${esc(last)}.`;
        const line = won
          ? (st.let ? 'The candles are just candles again. Nobody turns the big light on for a while. Nobody asks what it said when you let it.'
            : 'The candles are just candles. Somebody turns the big light on. Junkyu doesn’t come out from under his blanket for a while.')
          : quit ? 'The planchette sits where you left it. Nobody touches it after that.'
            : 'Nobody takes their fingers off. Nobody says goodbye. The candles burn down to nothing, and the planchette stays where it stopped.';
        const end = $('.mg-end');
        const show = () => {
          if (!el.isConnected && !o.__sim) return;
          end.hidden = false;
          end.innerHTML = `<p class="pl-end-head">${head}</p><b class="mg-grade">${grade}</b>
            <dl><dt>Answers</dt><dd>${st.answered} / ${QS.length}</dd><dt>Its letters</dt><dd>${st.boardLetters}</dd><dt>Its words</dt><dd>${st.boardWords}</dd><dt>Stray letters</dt><dd>${st.strays}</dd>${st.let ? `<dt>Let it spell</dt><dd>${st.let}</dd>` : ''}</dl>
            <p class="mg-end-say">${esc(line)}</p><button type="button">Continue</button>`;
          const b = end.querySelector('button'); b.focus?.();
          b.onclick = cont;
        };
        const cont = () => { if (st.closed) return; st.closed = true; cleanup(); o.onDone?.(res); done(res); };
        st.cont = cont;
        quit ? show() : later(show, won ? 1600 : 2400);
      };

      /* input */
      const toBoard = e => { const r = svg.getBoundingClientRect(); return { x: (e.clientX - r.left) / r.width * W, y: (e.clientY - r.top) / r.height * H }; };
      const blocked = e => !st.begun || st.over || st.paused || st.dark || st.auto || (e.target && e.target.closest && e.target.closest('.mg-pause, .mg-end, .pl-title, .pl-let'));
      const ptrs = new Set();
      const down = e => {
        if (blocked(e)) return;
        e.preventDefault(); ptrs.add(e.pointerId); st.held = true; st.aim = toBoard(e); st.lastIn = st.t;
        try { el.setPointerCapture(e.pointerId); } catch (err) {}
      };
      const move = e => { if (!ptrs.has(e.pointerId) || st.auto || st.paused) return; st.aim = toBoard(e); st.lastIn = st.t; };
      const up = e => { ptrs.delete(e.pointerId); if (!ptrs.size) { st.held = false; st.lastIn = st.t; } };
      el.addEventListener('pointerdown', down); el.addEventListener('pointermove', move);
      el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up); el.addEventListener('lostpointercapture', up);
      el.addEventListener('contextmenu', e => e.preventDefault());
      const blur = () => { ptrs.clear(); st.held = false; st.keys.clear(); st.steady = false; };
      window.addEventListener('blur', blur);
      const pause = on => {
        if (st.over) return;
        st.paused = on; $('.mg-pause').hidden = !on; blur();
        if (ac) { try { on ? ac.suspend() : ac.resume(); } catch (e) {} }
        if (on) $('.mg-pause button').focus?.();
      };
      const DIRS = { ArrowLeft: 'l', a: 'l', A: 'l', ArrowRight: 'r', d: 'r', D: 'r', ArrowUp: 'u', w: 'u', W: 'u', ArrowDown: 'd', s: 'd', S: 'd' };
      const key = e => {
        if (!el.isConnected || st.over) return;
        e.stopPropagation();
        if (!st.begun) { e.preventDefault(); begin(); if (e.key === 'Escape') pause(true); return; }
        if (e.key === 'Escape') { e.preventDefault(); pause(!st.paused); return; }
        if (st.paused) return;
        if (e.key === 'l' || e.key === 'L') { e.preventDefault(); letIt(); return; }
        if (st.auto || st.dark) return;
        if (e.key === ' ') { e.preventDefault(); st.steady = true; if (!st.aim) st.aim = { x: st.p.x, y: st.p.y }; st.lastIn = st.t; return; }
        if (DIRS[e.key]) { e.preventDefault(); st.keys.add(DIRS[e.key]); }
      };
      const keyUp = e => {
        if (e.key === ' ') { st.steady = false; st.lastIn = st.t; }
        if (DIRS[e.key]) { st.keys.delete(DIRS[e.key]); if (!st.keys.size) { st.aim = { x: st.p.x, y: st.p.y }; st.lastIn = st.t; } }
      };
      const cleanup = () => {
        cancelAnimationFrame(raf); timers.forEach(clearTimeout); timers.clear();
        window.removeEventListener('keydown', key, true); window.removeEventListener('keyup', keyUp, true); window.removeEventListener('blur', blur);
        try { ac && ac.close(); } catch (e) {} el.remove();
      };
      $('.mg-pause').onclick = e => { const b = e.target.dataset && e.target.dataset.mg; if (b === 'resume') pause(false); if (b === 'quit') { pause(false); finish('quit'); } };
      $('.pl-let').onclick = e => { e.stopPropagation(); letIt(); };
      window.addEventListener('keydown', key, true); window.addEventListener('keyup', keyUp, true);

      /* the title card: ~1.8 s (click / any key skips; Esc skips and pauses) */
      const note = ['Psychological horror', calm ? 'Flashes reduced' : 'Flashing lights', 'Sudden darkness', still ? 'Reduced motion' : '', o.mute ? 'Captions on' : 'Best with sound'].filter(Boolean).join(' · ');
      const tt = document.createElement('div'); tt.className = 'pl-title';
      tt.innerHTML = `<b>THE PLANCHETTE</b><small>Lightly. Nobody pushes.</small><img src="${ART('title')}" alt="" onerror="this.remove()"><p class="pl-note">${esc(note)}</p>`;
      el.appendChild(tt);
      const begin = () => {
        if (st.begun || !el.isConnected && !o.__sim) return; st.begun = true;
        tt.classList.add('out'); later(() => tt.remove(), 450);
        audio();
        st.jerkAt = 9000 + rnd(D.jerk) * 1000; st.swapAt = 14000 + rnd(D.swap) * 1000; st.chatAt = 5000; st.whisperAt = 12000; st.ghostAt = 30000; st.readAt = 20000;
        nextQ();
        paint(); raf = requestAnimationFrame(tick);
      };
      tt.onclick = begin; later(begin, 1800);
      paintToks();
      st.ctl = {
        aim: (x, y) => { if (!st.begun || st.auto || st.paused || st.dark || st.over) return; st.held = true; st.aim = { x, y }; st.lastIn = st.t; },
        release: () => { st.held = false; st.lastIn = st.t; },
        steady: on => { st.steady = !!on; if (on && !st.aim) st.aim = { x: st.p.x, y: st.p.y }; },
        letIt, pause, quit: () => { pause(false); finish('quit'); }, cont: () => st.cont && st.cont(), skip: begin,
      };
    });
  }
  return { play, TOK, QUESTIONS, WORDS, DIFF, state: () => cur, ctl: () => cur && cur.ctl };
})();
