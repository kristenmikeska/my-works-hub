/* FEMC epilogue minigame: Pass It (Nov 11 2026). A DEMO: not in the story yet (try it on mockups/minigames/index.html once
   that page lists it). HOAX: Solar's old crew on the rug at Jihoon's at night (Jihoon, Hyunsuk, Asahi, Jaehyuk, Junkyu,
   Cherry), a lo-fi beat on, a joint going round the circle. A hot-potato rhythm game. Cartoony and fiction-only; nothing of
   the plot (no sophomore year, no who-knows-what), no real-world instructions.

   FemcPassit.play({ host, mute, difficulty, bg, calm, perf, still, seconds, tutorial, onDone }) -> Promise<result>
     host        element to draw into (default document.body; a full-screen overlay is added inside it)
     mute        no sound at all (no AudioContext; the game runs on its own clock and the beat stays visible: the rug thumps,
                 the dots in the top bar step, the ring around Solar closes on every beat)
     difficulty  'easy' | 'normal' | 'hard' (default 'normal'): tempo 76 / 84 / 92 bpm, drift ±5 / ±9 / ±14 bpm as the room gets
                 hazy, timing windows (perfect / good) ±75/170 · ±60/140 · ±50/115 ms, lungs band 55-88 / 60-86 / 64-84 %,
                 an interruption after a turn 22 / 32 / 42 % of the time (at least 2 / 2 / 1 turns apart), shell-game swaps
                 3 / 4 / 6 (hard swaps twice a beat), friends hold it a beat 15 / 25 / 30 % of the time
     bg          a background id under assets/femc/bg/ (default 'epi-h-jihoon-house': his living room at night, the rug and the
                 lamp). Kat's art/minigames/passit/room.webp wins when it exists; a drawn room shows if neither loads
     calm, perf  Reduce flashes / Performance; default: the game's settings (FemcGame.settings().calm / .perf), else off
     still       force reduced motion (default: prefers-reduced-motion)
     seconds     override the length (default 180)
     tutorial    true = always show the first-time tutorial, false = never, default = only the first time (FemcTutorial.seen
                 ('passit'); without tutorial.js a built-in card, localStorage 'kg-femc-passit-tutorial', try/catch)
     onDone      called with the result too
   result = { won, grade: 'S' | 'A' | 'B' | 'C', score, perfect, good, passes, hits, smooth, weak, coughs, fumbles, bogarts,
              mixups, misses, roasts, thoughts: { n, right, wrong, zoned }, shells: { n, right }, nana: { n, saved },
              snacks: { n, passed, dropped }, awake: [ids still awake], superlatives: { id: text }, quit, tutorial }
     won = finished (not quit) with grade B or better. tutorial = 'done' | 'skipped' | 'seen' (not shown).

   How it plays: seven on the rug, Solar at the bottom; the joint goes clockwise one seat per beat (a friend sometimes holds it
   a beat: a puff). When it lands on Solar it's her turn: the ring round her face closes in on each of the next three beats.
     Pass       tap on the beat (Space / J, a click or tap anywhere, or the PASS pad): PERFECT / GOOD, else OFF BEAT (a fumble).
     Take a hit hold instead (past 0.22 s); the press is judged like a tap, then the LUNGS meter fills (full in ~2.4-2.8 beats).
                Let go inside the pink band = Smooth (big vibes); early = a tiny hit; past the band = a cough (it passes on the
                next beat either way). A full meter coughs on its own.
     Bogart     nothing by the third beat = "bogarting": a miss, it passes itself.
     Misses     earn a roast: one awake friend, one line, in voice, and a laugh.
   Interruptions (after a turn, by difficulty):
     Deep thoughts  as the joint reaches her, someone starts philosophizing. A heart = they mean it: Nod along (← / A / 1);
                    a spiral = they're spiralling: Derail (→ / D / 2). Four beats to answer, still pass on the beat.
     Who has it?    the lights drop, three friends hold out closed fists, the joint is shown then hidden, the fists swap on the
                    beat; pick who has it (click, or 1 / 2 / 3) within four beats.
     Nana           Nana bounds in and knocks something off the table: tap it (or ↓ / C) when its ring closes, on the beat.
     Chips          a bag of chips goes round the other way at the same time. Pass the chips with F (or the CHIPS pad), the
                    joint with Space / J. Mixing them up (the wrong control while only the other one is at her seat) = a miss.
   The haze: it thickens as the session runs and with every smooth hit; the beat drifts with it (tempo wanders and sags) and the
   timing window wobbles (narrower, wider). Reduced motion / Reduce flashes / Performance cut drift and wobble to 40-60 %.
   Friends get drowsy (faster with misses, slower with good moments); asleep, they're skipped (never the last two awake).
   End (~3 min): "Who's still awake?": each friend's face (awake / asleep) with a superlative, the grade and the stats.
   Grade: miss rate (misses + half a wrong guess) ≤ 5 % with 60 %+ PERFECT and 2+ smooth hits = S, ≤ 14 % A, ≤ 30 % B, else C.

   Sound (Web Audio, made here, no files, made lazily when the title card goes): a lo-fi loop (soft kick, brushed snare,
   swung hats, Fmaj9 / Em7 / Dm9 / Cmaj7 keys, bass, vinyl crackle) scheduled against the AudioContext's own time (the game
   clock follows ac.currentTime once it runs; a free clock before that or when muted), muffling as the haze grows; a lighter
   click, coughs, laughs (pitched per friend), chips crinkle, a crash, soft ticks. Pause suspends the context.
   Settings: reduced motion = no sliding tokens, bobbing, smoke drift or shake (the shell game's fists still slide: you need to
   see them); Reduce flashes (calm) = no flash on judgements, thinner smoke, less wobble; Performance = no smoke layers, blur
   or approach-ring jitter. Pink and black UI; the room stays warm.
   Optional art (art/minigames/passit/, each falls back to a drawn piece): title, room (background), rug, joint, chips, nana.
   Faces: assets/femc/portraits/<id>-hoax/<neutral | happy | surprised | serious | sad>.webp (Nana: nana-hoax); an initial if
   a face doesn't load.
   First-time tutorial: window.FemcTutorial (tutorial.js, loaded on demand from this folder), Jihoon hosting: the circle, the
   ring, a practice pass, a practice hit, the chips, the interruptions, the haze. Pause → How to play replays it (Next on
   every step). Test hook FemcPassit.state(). */
window.FemcPassit = (() => {
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const base = () => (window.FemcGame && window.FemcGame.base) || (document.querySelector('script[src*="minigames/passit"]')?.src.split('assets/')[0]) || '';
  const reduced = typeof matchMedia === 'function' ? matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const shuffle = a => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const ART = n => `${base()}assets/femc/game/art/minigames/passit/${n}.webp`;
  const BG = id => `${base()}assets/femc/bg/${id}.webp`;
  const FACE = (id, f = 'neutral') => `${base()}assets/femc/portraits/${id}-hoax/${f}.webp`;
  const N = 7;
  const CREW = [
    { id: 'solar', name: 'Solar', laugh: 330 }, { id: 'jihoon', name: 'Jihoon', laugh: 150 }, { id: 'hyunsuk', name: 'Hyunsuk', laugh: 190 },
    { id: 'asahi', name: 'Asahi', laugh: 170 }, { id: 'jaehyuk', name: 'Jaehyuk', laugh: 160 }, { id: 'junkyu', name: 'Junkyu', laugh: 210 },
    { id: 'cherry', name: 'Cherry', laugh: 300 },
  ];
  const DIFF = {
    easy:   { secs: 180, bpm: 76, drift: 5,  perfect: 0.075, good: 0.17,  fill: 2.8, band: [0.55, 0.88], chance: 0.22, gap: 2, swaps: 3, spb: 1, npcHold: 0.15, wob: 0.18, sleep: 0.8 },
    normal: { secs: 180, bpm: 84, drift: 9,  perfect: 0.06,  good: 0.14,  fill: 2.6, band: [0.6, 0.86],  chance: 0.32, gap: 2, swaps: 4, spb: 1, npcHold: 0.25, wob: 0.28, sleep: 1 },
    hard:   { secs: 180, bpm: 92, drift: 14, perfect: 0.05,  good: 0.115, fill: 2.4, band: [0.64, 0.84], chance: 0.42, gap: 1, swaps: 3, spb: 2, npcHold: 0.3,  wob: 0.38, sleep: 1.15 },
  };
  const TAP = 0.22; // a press held longer than this is a hit, not a pass

  /* the crew's voices (spoken lines: Jihoon talks normally out loud) */
  const ROAST = {
    jihoon: { any: ['Sol. Sol. That was tragic.', 'I raised you better than that.', 'In my own house. Unbelievable.', 'I’m embarrassed for both of us.'],
      cough: ['Look at her. My little champion.', 'You sound like my car in winter.'], bogart: ['Any day now, Kim.', 'You’re not proposing to it, Sol. Pass it.'],
      mixup: ['Did you just try to pass me the chips? To my face?'], chips: ['Those are my chips, actually.'] },
    hyunsuk: { any: ['Bro. It’s a circle. You just pass it, man.', 'Man, I’ve seen Nana pass better.', 'That was so off beat it’s in a different song, bro.'],
      cough: ['Breathe, bro. Breathe. Okay, not that much.'], bogart: ['Sol. Hello? Some of us are waiting, man.'],
      mixup: ['Bro is passing snacks like it’s the joint.'], chips: ['Man, the chips, bro. The chips.'] },
    asahi: { any: ['Wow. Riveting.', 'I’m putting that in my notes app. Under “tragedies.”', 'No one cares. …Okay, everyone saw that.'],
      cough: ['Very emo of you. I respect it.'], bogart: ['Are you writing it a letter? Pass it.'],
      mixup: ['That’s a chip bag, Solar.'], chips: ['You’re hoarding chips now. Cool. Cool cool.'] },
    jaehyuk: { any: ['For the record, the beat was right there.', 'That’s the worst timing I’ve seen since your math homework.', 'Interesting choice. Wrong, but interesting.'],
      cough: ['In through the nose. Out through the… yeah, that.'], bogart: ['Statistically, it’s been your turn for a while.'],
      mixup: ['Wrong hand. Simple mistake. Very funny mistake.'], chips: ['The chips also move on the beat, Sol.'] },
    junkyu: { any: ['It’s okay, Solar!! …That was kind of bad though!!', 'I still believe in you!! A little less now!!', 'Solar nooo!!'],
      cough: ['Do you need water?? I’ll get you water!!'], bogart: ['Solar? Solar?? Are you okay??'],
      mixup: ['Oh no, the chips!! Solar, no!!'], chips: ['Can I have the chips?? Please??'] },
    cherry: { any: ['You dumb bitch, I love you, pass it.', 'I will break your fingers. Lovingly.', 'That was so bad I’m telling everyone.'],
      cough: ['Oh my god. Someone film her. Actually, don’t.'], bogart: ['Solar Kim, I will knock your teeth down your throat. Pass it.'],
      mixup: ['That’s the chips. That is the chips, babe.'], chips: ['Babe. The chips. Today.'] },
  };
  const CHEER = {
    jihoon: ['That’s my best friend.', 'See? Natural talent.'], hyunsuk: ['Ayyy, Sol!', 'Clean, bro. Clean.'], asahi: ['…Fine. That was cool.', 'Okay. I’m mildly impressed.'],
    jaehyuk: ['Textbook.', 'Right on the beat.'], junkyu: ['SOLAR!!', 'Yay!! Smooth!!'], cherry: ['Okay, queen.', 'That’s my wife.'],
  };
  // philosophizing: want 'nod' (a heart: they mean it) or 'derail' (a spiral: they're spiralling)
  const THOUGHTS = [
    { who: 'jaehyuk', want: 'nod', t: 'Do you think we’ll still do this when we’re old? Like, sitting on a rug at forty?' },
    { who: 'junkyu', want: 'nod', t: 'I think Nana knows when we’re sad. Like, he just knows.' },
    { who: 'cherry', want: 'nod', t: 'You guys are my favourite people. Don’t make it weird.' },
    { who: 'hyunsuk', want: 'nod', t: 'Snow is just rain that decided to chill out, man. Respect.' },
    { who: 'jihoon', want: 'nod', t: 'This rug has seen things. Good things. Mostly good things.' },
    { who: 'asahi', want: 'nod', t: 'This song is actually really good. Don’t tell anyone I said that.' },
    { who: 'asahi', want: 'derail', t: 'What if the rug is sitting on us. Think about it. No. Actually think about it.' },
    { who: 'hyunsuk', want: 'derail', t: 'If a fish had legs, would it still be a fish? Or a… legfish, bro?' },
    { who: 'jihoon', want: 'derail', t: 'What if every dog is just Nana. From a different angle.' },
    { who: 'junkyu', want: 'derail', t: 'Wait. Wait. Are hands just… feet that went to college?' },
    { who: 'jaehyuk', want: 'derail', t: 'If you count to infinity in your head, where do the numbers go after?' },
    { who: 'cherry', want: 'derail', t: 'Care Bears are a government thing. Don’t look at me like that.' },
  ];
  const NOD_SAY = ['Yeah. Yeah, totally.', 'That’s so real.', 'Mm. I love that.'];
  const DERAIL_SAY = ['Okay, but what’s your favourite Sanrio character?', 'Anyway! Who ate all the tteokbokki?', 'Hey. Hey. Nana is a good boy.', 'Wait, is this song new?'];
  const WRONG_NOD = ['Right?? RIGHT?? …wait, what were we talking about.', 'Exactly. …Exactly what?', 'See, she gets it. …Gets what?'];
  const WRONG_DERAIL = ['Wow. Okay. I was having a moment.', 'Rude. I was being vulnerable.', 'Cool. Never sharing again.'];
  const NANA_ITEMS = [{ id: 'can', name: 'a can' }, { id: 'lamp', name: 'the lamp' }, { id: 'plant', name: 'Jihoon’s plant' }, { id: 'remote', name: 'the remote' }, { id: 'cup', name: 'a cup' }];
  const SUPER = {
    jihoon:  { awake: ['Host With the Most (Rugs)', 'Self-Appointed King of the Couch'], asleep: ['First Asleep in His Own House', 'Snoring Like Royalty'] },
    hyunsuk: { awake: ['Most “Bro”s Per Sentence', 'Still Going, Man'], asleep: ['Fell Asleep Mid-“Bro”', 'Out Like a Light, Bro'] },
    asahi:   { awake: ['Least Impressed, Still Here', 'Deadpan Survivor'], asleep: ['Fell Asleep Looking Disappointed', 'Emo Nap Champion'] },
    jaehyuk: { awake: ['Designated Brain Cell', 'Never Skipped a Beat'], asleep: ['Slept Like He Studies: Hard', 'Asleep Sitting Up'] },
    junkyu:  { awake: ['Best Hype Man', 'Most Exclamation Points'], asleep: ['Snores Like a Puppy', 'Asleep Hugging a Pillow'] },
    cherry:  { awake: ['Most Violent Love Language', 'Last Girl Standing (Besides Solar)'], asleep: ['Threatened Someone in Her Sleep', 'Beauty Sleep, Allegedly'] },
  };
  const SOLAR_SUPER = { S: 'Smoothest Lungs at Hanlim', A: 'Keeper of the Beat', B: 'Still Holding It Together', C: 'Most Roasted, Most Loved' };
  const END_SAY = {
    S: 'Smoothest night in Hanlim history. Nobody is ever topping it.', A: 'Good night. The rug approves.',
    B: 'Messy, loud, perfect. Same time next week?', C: 'Roasted to a crisp. They still love you. Probably.', quit: 'You slipped out early. The circle closes without you.',
  };

  /* drawn pieces */
  const SVG_JOINT = `<svg viewBox="0 0 64 24" aria-hidden="true"><path d="M6 9 L50 6 L50 18 L6 15 Z" fill="#fff4f9" stroke="#e8cdd9" stroke-width="1.2"/><path d="M6 9 L14 8.5 L14 15.5 L6 15 Z" fill="#ffd1e6"/><path d="M50 6 L58 9 Q60 12 58 15 L50 18 Z" fill="#3a1a26"/><circle class="pi-ember" cx="57" cy="12" r="3.4" fill="#ff4f9e"/></svg>`;
  const SVG_CHIPS = `<svg viewBox="0 0 48 56" aria-hidden="true"><path d="M6 6 Q24 1 42 6 L40 50 Q24 55 8 50 Z" fill="#ff4f9e" stroke="#14070f" stroke-width="2"/><path d="M6 6 Q24 1 42 6 L41 12 Q24 8 7 12 Z" fill="#ffd1e6"/><text x="24" y="33" text-anchor="middle" font-family="system-ui" font-weight="900" font-style="italic" font-size="11" fill="#14070f">CHIPS</text><circle cx="17" cy="42" r="3" fill="#ffd1e6"/><circle cx="29" cy="44" r="2.4" fill="#ffd1e6"/></svg>`;
  const SVG_HEART = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z" fill="#ff4f9e"/></svg>`;
  const SVG_SPIRAL = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12m0 0a1.5 1.5 0 0 1 3 0a3 3 0 0 1-6 0a4.5 4.5 0 0 1 9 0a6 6 0 0 1-12 0a7.5 7.5 0 0 1 15 0" fill="none" stroke="#ff9ac8" stroke-width="2" stroke-linecap="round"/></svg>`;
  const SVG_FIST = `<svg viewBox="0 0 48 40" aria-hidden="true"><rect x="8" y="10" width="30" height="24" rx="9" fill="#f3c9b0" stroke="#14070f" stroke-width="2"/><path d="M14 10v8M21 9v9M28 9v9M34 11v7" stroke="#14070f" stroke-width="1.6" stroke-linecap="round" opacity=".55"/><path d="M8 22c-5 0-6 8 0 9" fill="#f3c9b0" stroke="#14070f" stroke-width="2"/></svg>`;
  const SVG_NANA = `<svg viewBox="0 0 80 64" aria-hidden="true"><ellipse cx="40" cy="38" rx="28" ry="22" fill="#fffaf7"/><ellipse cx="16" cy="26" rx="9" ry="14" fill="#f4ece6" transform="rotate(-20 16 26)"/><ellipse cx="64" cy="26" rx="9" ry="14" fill="#f4ece6" transform="rotate(20 64 26)"/><circle cx="31" cy="34" r="3.4" fill="#14070f"/><circle cx="49" cy="34" r="3.4" fill="#14070f"/><ellipse cx="40" cy="43" rx="5" ry="3.6" fill="#14070f"/><path d="M36 49q4 6 8 0" fill="#ff7bb5"/></svg>`;
  const SVG_ITEM = {
    can: `<svg viewBox="0 0 40 40"><rect x="12" y="5" width="16" height="30" rx="3" fill="#cfd3da" stroke="#14070f" stroke-width="2"/><rect x="12" y="13" width="16" height="12" fill="#ff4f9e"/></svg>`,
    lamp: `<svg viewBox="0 0 40 40"><path d="M10 16h20l-5-11H15z" fill="#ffd9a0" stroke="#14070f" stroke-width="2"/><path d="M20 16v16M12 35h16" stroke="#14070f" stroke-width="3" stroke-linecap="round"/></svg>`,
    plant: `<svg viewBox="0 0 40 40"><path d="M12 24h16l-2 12H14z" fill="#ff9ac8" stroke="#14070f" stroke-width="2"/><path d="M20 24c0-8-6-12-10-14M20 24c0-9 5-14 11-16M20 24V8" stroke="#4f7a4a" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,
    remote: `<svg viewBox="0 0 40 40"><rect x="13" y="4" width="14" height="32" rx="4" fill="#2a0f22" stroke="#14070f" stroke-width="2"/><circle cx="20" cy="11" r="2.6" fill="#ff4f9e"/><g fill="#ffd1e6"><circle cx="17" cy="19" r="1.4"/><circle cx="23" cy="19" r="1.4"/><circle cx="17" cy="24" r="1.4"/><circle cx="23" cy="24" r="1.4"/></g></svg>`,
    cup: `<svg viewBox="0 0 40 40"><path d="M10 10h20l-3 24H13z" fill="#fff4f9" stroke="#14070f" stroke-width="2"/><path d="M11 17h18" stroke="#ff4f9e" stroke-width="4"/></svg>`,
  };
  const img = (src, cls, fallback = '') => `<img class="${cls}" src="${src}" alt="" draggable="false" onerror="this.remove()">${fallback}`;

  // the shared first-time tutorial (tutorial.js + .css, loaded once from this folder)
  const tutLib = () => window.FemcTutorial ? Promise.resolve(window.FemcTutorial) : (window.FemcTutorialLoading ||= new Promise(ok => {
    const B = `${base()}assets/femc/game/minigames/tutorial`, l = document.createElement('link'), s = document.createElement('script');
    l.rel = 'stylesheet'; l.href = `${B}.css?v=1`; document.head.appendChild(l);
    s.src = `${B}.js?v=1`; s.onload = s.onerror = () => ok(window.FemcTutorial || null); document.head.appendChild(s);
  }));
  const OWN_TUT = 'kg-femc-passit-tutorial';
  const ownSeen = () => { try { return localStorage.getItem(OWN_TUT) === '1'; } catch (e) { return false; } };
  const ownMark = () => { try { localStorage.setItem(OWN_TUT, '1'); } catch (e) {} };

  let cur = null; // test hook: FemcPassit.state()
  function play(o = {}) {
    return new Promise(done => {
      const host = o.host || document.body;
      const D = DIFF[o.difficulty] || DIFF.normal, LEN = o.seconds || D.secs;
      let GS = {}; try { GS = (window.FemcGame && window.FemcGame.settings && window.FemcGame.settings()) || {}; } catch (e) {}
      const still = o.still ?? reduced.matches, calm = o.calm ?? !!GS.calm, perf = o.perf ?? !!GS.perf;
      const soft = still || calm || perf, wobK = soft ? 0.4 : 1, driftK = soft ? 0.6 : 1;
      const st = {
        T: 0, begun: false, run: false, paused: false, over: false, tut: false, start: 0, haze: 0, hazeAdd: 0, ending: false,
        beats: [], bN: 0, count: 0,
        j: { seat: 1, arr: -1, hold: 0, passOn: null, frozen: true, lit: false }, turn: null, press: null, lungs: 0, ignoreUp: false,
        s: null, sturn: null, think: null, shell: null, nana: null, pend: null, sinceInt: 0, intQ: shuffle(['thought', 'shell', 'nana', 'snack']),
        score: 0, combo: 0, dz: Array(N).fill(0), rate: CREW.map(() => 0.65 + Math.random() * 0.7), asleep: Array(N).fill(false), roastsBy: Array(N).fill(0), lastRoaster: -1,
        k: { perfect: 0, good: 0, passes: 0, hits: 0, smooth: 0, weak: 0, coughs: 0, fumbles: 0, bogarts: 0, mixups: 0, roasts: 0,
          thoughts: 0, tRight: 0, tWrong: 0, tZoned: 0, shells: 0, shRight: 0, nanas: 0, nSaved: 0, snacks: 0, sPassed: 0, sDropped: 0 },
        result: null,
      };
      cur = st;
      const tutP = o.tutorial === false ? Promise.resolve(null) : tutLib();
      let tutRes = 'seen', tp = null;
      const timers = new Set();
      const later = (fn, ms) => { const id = setTimeout(() => { timers.delete(id); fn(); }, ms); timers.add(id); return id; };

      /* the page */
      const seatPos = i => { const a = (90 + i * 360 / N) * Math.PI / 180; return { x: 50 + 41 * Math.cos(a), y: 50 + 39 * Math.sin(a) }; };
      const tokPos = (i, side = 0) => { const p = seatPos(i), a = (90 + i * 360 / N + side) * Math.PI / 180; return { x: 50 + 27 * Math.cos(a), y: 50 + 25 * Math.sin(a) }; };
      const el = document.createElement('div');
      el.className = 'mg-pi' + (still ? ' still' : '') + (calm ? ' calm' : '') + (perf ? ' perf' : '');
      el.setAttribute('role', 'application'); el.setAttribute('aria-label', 'Pass It');
      el.innerHTML = `
        <div class="pi-room"><i class="pi-room-drawn"></i>${img(ART('room'), 'pi-bg pi-bg-art')}${img(BG(o.bg || 'epi-h-jihoon-house'), 'pi-bg')}</div>
        <div class="pi-smoke"><i></i><i></i><i></i></div><div class="pi-ceiling" aria-hidden="true"></div><div class="pi-trot" aria-hidden="true" hidden><span>${SVG_NANA}</span></div>
        <div class="pi-ring">
          <div class="pi-rug"><i class="pi-rug-drawn"></i>${img(ART('rug'), 'pi-rug-art')}</div>
          ${CREW.map((c, i) => { const p = seatPos(i); return `<div class="pi-seat${i === 0 ? ' me' : ''}${p.y < 50 ? ' up' : ''}" data-i="${i}" style="left:${p.x}%;top:${p.y}%">
            <i class="pi-app"></i><i class="pi-app2"></i><span class="pi-face"><b class="pi-init">${c.name[0]}</b>${img(FACE(c.id), 'pi-fimg')}</span>
            <small class="pi-name">${c.name}</small><em class="pi-zz">z z z</em><p class="pi-bub"></p></div>`; }).join('')}
          <div class="pi-joint" hidden><span class="pi-jdrawn">${SVG_JOINT}</span>${img(ART('joint'), 'pi-jart')}<i class="pi-puff"></i></div>
          <div class="pi-chips" hidden><span class="pi-cdrawn">${SVG_CHIPS}</span>${img(ART('chips'), 'pi-cart')}</div>
          <p class="pi-pop" aria-live="polite"></p>
        </div>
        <div class="pi-lungs" hidden><small>LUNGS</small><span><i class="pi-band"></i><i class="pi-fill"></i></span></div>
        <div class="pi-top"><b class="pi-title-s">PASS IT</b><span class="pi-dots"><i></i><i></i><i></i><i></i></span><span class="pi-time">3:00</span>
          <span class="pi-vibes">Vibes <b>0</b></span><span class="pi-haze"><small>Haze</small><span><i></i></span></span></div>
        <div class="pi-count" aria-live="polite"></div>
        <div class="pi-think" hidden><span class="pi-tface"></span><div><b class="pi-twho"></b><p class="pi-tline"></p>
          <div class="pi-tbtns"><button type="button" data-th="nod">${SVG_HEART}<span>Nod along</span><kbd>←</kbd></button><button type="button" data-th="derail">${SVG_SPIRAL}<span>Derail</span><kbd>→</kbd></button></div>
          <span class="pi-tpips"><i></i><i></i><i></i><i></i></span></div></div>
        <div class="pi-shell" hidden><p class="pi-shq">Watch it…</p><div class="pi-cards"></div></div>
        <div class="pi-nana" hidden><span class="pi-dog">${SVG_NANA}${img(FACE('nana', 'happy'), 'pi-dimg')}</span><button type="button" class="pi-item"><i class="pi-iring"></i><span></span></button></div>
        <div class="pi-pads"><button type="button" class="pi-pad pi-pad-j"><b>PASS</b><small>tap · hold to hit · Space / J</small></button>
          <button type="button" class="pi-pad pi-pad-s"><b>CHIPS</b><small>F</small></button></div>
        <p class="pi-help">The joint goes round on the beat. On your turn, tap on the beat to pass, or hold to take a hit and let go in the pink band. Chips go the other way: F. Esc pauses.</p>
        <div class="mg-pause" hidden><b>Paused</b><button type="button" data-mg="resume">Resume</button><button type="button" data-mg="howto">How to play</button><button type="button" data-mg="quit">Quit</button></div>
        <div class="pi-howto" hidden></div>
        <div class="mg-end" hidden></div>`;
      host.appendChild(el);
      const $ = s => el.querySelector(s);
      const seats = [...el.querySelectorAll('.pi-seat')];
      const joint = $('.pi-joint'), chips = $('.pi-chips'), pop = $('.pi-pop');

      /* faces */
      const faceT = Array(N).fill(0);
      const setFace = (i, f, ms = 0) => {
        const im = seats[i] && seats[i].querySelector('.pi-fimg'); if (!im) return;
        const src = FACE(CREW[i].id, f); if (im.getAttribute('src') !== src) im.setAttribute('src', src);
        clearTimeout(faceT[i]); if (ms) faceT[i] = later(() => setFace(i, 'neutral'), ms);
      };
      const bubT = Array(N).fill(0);
      const say = (i, text, ms = 2300) => {
        const b = seats[i] && seats[i].querySelector('.pi-bub'); if (!b) return;
        b.textContent = text; b.classList.add('on'); clearTimeout(bubT[i]); bubT[i] = later(() => b.classList.remove('on'), ms);
      };
      let popT = 0;
      /* polish (Nov 11 2026, Kat: "as many visuals, as much animation as possible"): the crew sway between beats and react
         (.pi-seat.laugh: shoulders shaking, .cough: Solar doubles over with a cloud off her), smoke curls off the joint and whoever
         holds it, a haze that gathers under the ceiling (--haze), a ring of sound off the rug on every beat, the lighter's flick at
         the count-in, chips rustling, Nana trotting through now and then (scenery only, no button; never during her
         interruption or the tutorial), the end card's faces popping in and the vibes ticking up. Rules and timing unchanged.
         still: none of it moves; calm: no flashes; perf: no curls, ceiling haze or trotting. */
      const react = (i, cls, ms = 900) => {
        const s = seats[i]; if (!s || still) return;
        s.classList.remove(cls); void s.offsetWidth; s.classList.add(cls); later(() => s.classList.remove(cls), ms);
      };
      const lighterFlick = () => {
        if (still) return; const s = seats[1]; if (!s) return;
        const f = document.createElement('i'); f.className = 'pi-lighter'; f.setAttribute('aria-hidden', 'true'); s.appendChild(f); later(() => f.remove(), 1500);
      };
      let trotIn = 28;
      const trotBeat = () => {
        if (--trotIn > 0) return; trotIn = 40 + Math.floor(Math.random() * 30);
        if (still || perf || st.tut || st.nana || st.shell) return;
        const t = $('.pi-trot'); if (!t) return; t.hidden = false; t.className = 'pi-trot go ' + (Math.random() < 0.5 ? 'ltr' : 'rtl');
        later(() => { t.hidden = true; t.className = 'pi-trot'; }, 5200);
      };
      const popUp = (text, kind) => { pop.textContent = text; pop.className = 'pi-pop on ' + (kind || ''); clearTimeout(popT); popT = later(() => pop.classList.remove('on'), 650); };

      /* sound: Web Audio, made here (lazily, when the title card goes) */
      let ac = null, A = null, synced = false, t0 = 0;
      const audio = () => {
        if (o.mute || ac) return;
        try { ac = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { ac = null; return; }
        try {
          const master = ac.createGain(); master.gain.value = 0.85; master.connect(ac.destination);
          const haze = ac.createBiquadFilter(); haze.type = 'lowpass'; haze.frequency.value = 9000; haze.Q.value = 0.5; haze.connect(master);
          const fx = ac.createGain(); fx.gain.value = 1; fx.connect(master);
          const nbuf = ac.createBuffer(1, ac.sampleRate * 2, ac.sampleRate), d = nbuf.getChannelData(0);
          for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
          // vinyl crackle: sparse clicks in a loop, lowpassed
          const cbuf = ac.createBuffer(1, ac.sampleRate * 3, ac.sampleRate), c = cbuf.getChannelData(0);
          for (let i = 0; i < c.length; i++) c[i] = Math.random() < 0.0009 ? (Math.random() * 2 - 1) : (Math.random() * 2 - 1) * 0.012;
          const cs = ac.createBufferSource(); cs.buffer = cbuf; cs.loop = true; const cl = ac.createBiquadFilter(); cl.type = 'lowpass'; cl.frequency.value = 3200;
          const cg = ac.createGain(); cg.gain.value = 0.35; cs.connect(cl); cl.connect(cg); cg.connect(haze); cs.start();
          A = { master, haze, fx, nbuf, bus: null };
          newBus();
        } catch (e) { A = null; }
      };
      const newBus = () => { // beats scheduled ahead go through a bus, so a reset can silence what was already queued
        if (!A) return;
        if (A.bus) { const old = A.bus; try { old.gain.setTargetAtTime(0, ac.currentTime, 0.02); later(() => { try { old.disconnect(); } catch (e) {} }, 400); } catch (e) {} }
        A.bus = ac.createGain(); A.bus.gain.value = 1; A.bus.connect(A.haze);
      };
      const env = (g, t, a, peak, dur) => { g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + a); g.gain.exponentialRampToValueAtTime(0.0001, t + dur); };
      const osc = (dest, t, f, dur, type = 'sine', vol = 0.1, to = 0, att = 0.008) => {
        const os = ac.createOscillator(), g = ac.createGain(); os.type = type; os.frequency.setValueAtTime(f, t);
        if (to) os.frequency.exponentialRampToValueAtTime(to, t + dur); env(g, t, att, vol, dur); os.connect(g); g.connect(dest); os.start(t); os.stop(t + dur + 0.05);
      };
      const nz = (dest, t, dur, type, f, q, vol, att = 0.004) => {
        const s = ac.createBufferSource(), fl = ac.createBiquadFilter(), g = ac.createGain(); s.buffer = A.nbuf; fl.type = type; fl.frequency.value = f; fl.Q.value = q;
        env(g, t, att, vol, dur); s.connect(fl); fl.connect(g); g.connect(dest); s.start(t, Math.random()); s.stop(t + dur + 0.05);
      };
      const CHORDS = [[174.6, 220, 261.6, 329.6, 392], [164.8, 196, 246.9, 293.7], [146.8, 174.6, 220, 261.6, 329.6], [130.8, 164.8, 196, 246.9]];
      const ROOTS = [87.3, 82.4, 73.4, 65.4];
      const schedBeat = b => { // one beat of the loop at the beat's own time on the AudioContext clock
        if (!A || !synced || b.sched) return; b.sched = true;
        const t = t0 + b.t; if (t < ac.currentTime - 0.02) return;
        const bus = A.bus, len = b.len, pos = b.bar, bar = Math.floor(b.n / 4) % 4;
        if (b.count) { osc(bus, t, b.count === 4 ? 1320 : 990, 0.07, 'sine', 0.06); return; }
        if (pos === 0 || pos === 2) osc(bus, t, 118, 0.32, 'sine', 0.42, 44, 0.004);
        if (pos === 2 && Math.random() < 0.35) osc(bus, t + len * 0.58, 110, 0.26, 'sine', 0.24, 44, 0.004);
        if (pos === 1 || pos === 3) { nz(bus, t, 0.2, 'bandpass', 1700, 0.7, 0.13); osc(bus, t, 190, 0.1, 'triangle', 0.05); }
        nz(bus, t, 0.035, 'highpass', 7200, 0.7, 0.035); nz(bus, t + len * 0.58, 0.03, 'highpass', 7600, 0.7, 0.022);
        if (pos === 0) {
          CHORDS[bar].forEach((f, i) => { osc(bus, t + i * 0.012, f, len * 3.9, 'triangle', 0.028, 0, 0.03); osc(bus, t + i * 0.012, f * 1.0035, len * 3.9, 'sine', 0.02, 0, 0.05); });
          osc(bus, t, ROOTS[bar], len * 1.8, 'sine', 0.13, 0, 0.02);
        }
        if (pos === 2) osc(bus, t + len * 0.5, ROOTS[bar] * 1.5, len * 1.2, 'sine', 0.08, 0, 0.02);
      };
      const now0 = () => (ac ? ac.currentTime : 0);
      const S = {
        lighter: () => { if (!A) return; const t = now0(); osc(A.fx, t, 3200, 0.012, 'square', 0.04); nz(A.fx, t + 0.02, 0.32, 'highpass', 3000, 0.6, 0.05, 0.03); nz(A.fx, t + 0.05, 0.4, 'bandpass', 600, 0.8, 0.03, 0.08); },
        cough: () => { if (!A) return; const t = now0(); [0, 0.19, 0.36].forEach((d, i) => { nz(A.fx, t + d, 0.14, 'bandpass', 700 - i * 60, 1.8, 0.22); osc(A.fx, t + d, 150 - i * 10, 0.12, 'sawtooth', 0.04, 110); }); },
        laugh: (f, n = 5) => { if (!A) return; const t = now0(); for (let k = 0; k < n; k++) { const d = k * 0.13 + Math.random() * 0.02; osc(A.fx, t + d, f * (1.08 - k * 0.04), 0.09, 'triangle', 0.045, f * (1 - k * 0.04)); nz(A.fx, t + d, 0.07, 'bandpass', 1300, 1.2, 0.035); } },
        good: p => { if (!A) return; const t = now0(); osc(A.fx, t, p ? 1318.5 : 987.8, 0.18, 'sine', 0.05); if (p) osc(A.fx, t + 0.05, 1975.5, 0.16, 'sine', 0.025); },
        miss: () => { if (!A) return; osc(A.fx, now0(), 196, 0.28, 'triangle', 0.06, 140); },
        smooth: () => { if (!A) return; const t = now0(); nz(A.fx, t, 0.9, 'lowpass', 900, 0.5, 0.06, 0.25); [523.3, 659.3, 784].forEach((f, i) => osc(A.fx, t + i * 0.06, f, 0.6, 'sine', 0.03)); },
        inhale: () => { if (!A) return; nz(A.fx, now0(), 0.5, 'bandpass', 1500, 0.9, 0.03, 0.35); },
        chips: () => { if (!A) return; const t = now0(); for (let k = 0; k < 7; k++) nz(A.fx, t + k * 0.025 + Math.random() * 0.01, 0.025, 'highpass', 4200, 0.8, 0.07); },
        crash: () => { if (!A) return; const t = now0(); nz(A.fx, t, 0.5, 'lowpass', 700, 0.6, 0.3); osc(A.fx, t + 0.02, 1800, 0.25, 'triangle', 0.05); osc(A.fx, t + 0.05, 2450, 0.2, 'triangle', 0.04); },
        tick: () => { if (!A) return; osc(A.fx, now0(), 1050, 0.04, 'triangle', 0.05); },
        catch: () => { if (!A) return; const t = now0(); osc(A.fx, t, 784, 0.12, 'sine', 0.05); osc(A.fx, t + 0.08, 1174.7, 0.18, 'sine', 0.05); },
        bark: () => { if (!A) return; const t = now0(); [0, 0.18].forEach(d => { osc(A.fx, t + d, 420, 0.1, 'sawtooth', 0.04, 260); nz(A.fx, t + d, 0.08, 'bandpass', 900, 1.5, 0.06); }); },
      };

      /* the clock: the AudioContext's own time once it runs, a free clock before that / when muted / suspended */
      let lastNow = 0;
      const clock = dt => {
        if (ac && A && ac.state === 'running') {
          if (!synced) { t0 = ac.currentTime - st.T; synced = true; for (let i = st.bN; i < st.beats.length; i++) if (st.beats[i].t > st.T) schedBeat(st.beats[i]); }
          st.T = ac.currentTime - t0;
        } else { synced = false; st.T += dt / 1000; }
      };
      const nowT = () => synced && ac && ac.state === 'running' ? ac.currentTime - t0 : st.T + Math.max(0, (performance.now() - lastNow) / 1000);

      /* the beat: a little lazy and drifting as the haze grows */
      const bpmAt = t => {
        const h = st.tut ? 0 : st.haze, w = Math.sin(t * 0.23) * 0.7 + Math.sin(t * 0.61 + 1.3) * 0.3;
        return Math.max(52, D.bpm - D.drift * driftK * h * 0.5 + D.drift * driftK * h * w);
      };
      const ensure = upTo => {
        while (!st.beats.length || st.beats[st.beats.length - 1].t < upTo) {
          const prev = st.beats[st.beats.length - 1];
          const t = prev ? prev.t + prev.len : st.start;
          const n = st.beats.length, len = 60 / bpmAt(t);
          const b = { n, t, len, bar: n % 4, count: !st.tut && n < 4 ? n + 1 : 0, sched: false };
          st.beats.push(b); schedBeat(b);
        }
      };
      const beat = k => st.beats[k];
      const beatLen = () => (beat(Math.max(0, st.bN - 1)) || { len: 60 / D.bpm }).len;
      const nextIdx = T => { let i = st.bN; while (beat(i) && beat(i).t <= T) i++; return i; };
      const winK = T => 1 + D.wob * wobK * st.haze * Math.sin(T * 1.9);
      const judge = (T, a, b) => { let best = null; for (let k = a; k <= b; k++) { const bt = beat(k); if (!bt) break; const d = T - bt.t; if (!best || Math.abs(d) < Math.abs(best.d)) best = { k, d }; } return best || { k: a, d: Infinity }; };
      const rateOf = (d, T, mult = 1) => { const w = winK(T) * mult; return Math.abs(d) <= D.perfect * w ? 'perfect' : Math.abs(d) <= D.good * w ? 'good' : 'off'; };
      const bandAt = T => { const w = D.wob * wobK * st.haze * 0.1 * Math.sin(T * 1.3 + 0.7); return [D.band[0] + w, D.band[1] + w]; };

      /* seats, tokens */
      const awakeNPC = () => [1, 2, 3, 4, 5, 6].filter(i => !st.asleep[i]);
      const nextSeat = (seat, dir) => { let s = seat; for (let k = 0; k < N; k++) { s = (s + dir + N) % N; if (s === 0 || !st.asleep[s]) return s; } return 0; };
      const mv = () => `${Math.min(0.32, beatLen() * 0.5).toFixed(2)}s`;
      const placeJ = () => { const p = tokPos(st.j.seat); joint.style.setProperty('--mv', mv()); joint.style.left = p.x + '%'; joint.style.top = p.y + '%'; seats.forEach((s, i) => s.classList.toggle('has', i === st.j.seat && !joint.hidden)); };
      const placeS = () => { if (!st.s) { chips.hidden = true; return; } chips.hidden = false; const p = tokPos(st.s.seat, 14); chips.style.setProperty('--mv', mv()); chips.style.left = p.x + '%'; chips.style.top = p.y + '%'; };
      const puff = i => { if (perf) return; const p = joint.querySelector('.pi-puff'); p.classList.remove('go'); void p.offsetWidth; p.classList.add('go'); seats[i] && seats[i].classList.add('puff'); later(() => seats[i] && seats[i].classList.remove('puff'), 600); };

      /* scoring */
      const live = () => st.run && !st.tut;
      const vibes = (pts, why) => { st.combo++; st.score += Math.round(pts * (1 + Math.min(st.combo, 10) * 0.1)); st.dz = st.dz.map(v => Math.max(0, v - 0.012)); };
      const roast = (type = 'any', prefer = -1) => {
        if (st.tut) return;
        const pool = awakeNPC().filter(i => i !== st.lastRoaster);
        const i = prefer > 0 && !st.asleep[prefer] ? prefer : pool.length ? pick(pool) : pick(awakeNPC().length ? awakeNPC() : [1]);
        const R = ROAST[CREW[i].id], lines = (R[type] && Math.random() < 0.7) ? R[type] : R.any;
        say(i, pick(lines)); setFace(i, 'happy', 1800); S.laugh(CREW[i].laugh); react(i, 'laugh', 1400);
        const j = pick(awakeNPC().filter(x => x !== i)); if (j && Math.random() < 0.6) { setFace(j, 'happy', 1500); later(() => S.laugh(CREW[j].laugh, 3), 160); later(() => react(j, 'laugh', 1200), 160); }
        st.k.roasts++; st.roastsBy[i]++; st.lastRoaster = i;
      };
      const miss = (label, type, prefer) => {
        st.combo = 0; S.miss(); popUp(label, 'bad'); if (!calm) el.classList.add('flash-bad'), later(() => el.classList.remove('flash-bad'), 260);
        if (live()) { st.dz = st.dz.map(v => v + 0.04); roast(type, prefer); }
        setFace(0, 'flustered', 1400);
      };
      const cheer = () => { const pool = awakeNPC(); if (!pool.length || Math.random() < 0.45) return; const i = pick(pool); say(i, pick(CHEER[CREW[i].id]), 1600); setFace(i, 'happy', 1500); };

      /* the joint */
      const moveJ = n => {
        const from = st.j.seat, to = nextSeat(from, 1);
        st.j.seat = to; st.j.arr = n; st.j.passOn = null; st.j.hold = 0; placeJ();
        if (from === 0) { st.turn = null; afterTurn(n); }
        if (to === 0) startTurn(n);
        else {
          if (!st.tut && Math.random() < D.npcHold) st.j.hold = 1;
          if (st.pend === 'shell' && !st.shell && !st.ending && to >= (st.shellAt || 2)) startShell(n);
        }
      };
      const startTurn = n => {
        st.turn = { A: n, dl: n + 3, done: false }; seats[0].classList.add('turn');
        if (st.pend === 'thought' && !st.ending) startThought(n);
      };
      const endTurn = () => { if (st.turn) st.turn.done = true; seats[0].classList.remove('turn'); };
      const passNext = () => { st.j.passOn = nextIdx(nowT()); };
      const pressJ = () => {
        if (!canPlay()) return;
        const T = nowT(); st.ignoreUp = false;
        if (!st.turn || st.turn.done) { if (st.sturn && !st.sturn.done && live()) { st.k.mixups++; miss('WRONG HAND', 'mixup'); } return; }
        if (st.press) return;
        const { k, d } = judge(T, st.turn.A + 1, st.turn.dl), r = rateOf(d, T);
        if (r === 'off') {
          if (st.tut) { say(1, d < 0 ? 'Bit early. Wait for the ring to close.' : 'Bit late. Right when the ring closes.', 2200); return; }
          st.k.fumbles++; endTurn(); miss('OFF BEAT', 'any'); passNext(); joint.classList.add('fumble'); later(() => joint.classList.remove('fumble'), 500); return;
        }
        st.press = { t0: T, r, k, len: (beat(k) || { len: 60 / D.bpm }).len, hitting: false };
      };
      const releaseJ = () => {
        const p = st.press; if (!p) return; st.press = null;
        const T = nowT();
        if (!p.hitting) { // a clean pass, straight to the next seat on that beat
          endTurn(); st.k.passes++; st.k[p.r]++; vibes(p.r === 'perfect' ? 100 : 60); S.good(p.r === 'perfect'); popUp(p.r === 'perfect' ? 'PERFECT' : 'GOOD', p.r);
          const n = Math.max(p.k, st.bN - 1); moveJ(n); st.j.arr = Math.max(st.j.arr, p.k);
          if (tp && tp.kind === 'pass') tp.ok();
          return;
        }
        $('.pi-lungs').hidden = true; el.classList.remove('holding');
        const [lo, hi] = bandAt(T), l = st.lungs;
        endTurn(); st.k.hits++; passNext(); puff(0);
        if (l > hi) return cough();
        st.k.passes++; st.k[p.r]++;
        if (l >= lo) {
          st.k.smooth++; vibes(p.r === 'perfect' ? 280 : 230); S.smooth(); popUp('SMOOTH', 'perfect'); setFace(0, 'happy', 1600); st.hazeAdd += 0.02; cheer();
          if (tp && tp.kind === 'hit') tp.ok();
        } else {
          st.k.weak++; vibes(70); popUp('TINY HIT', 'good');
          if (st.tut) say(1, 'That was a sip. Hold till the meter’s in the pink.', 2400);
        }
      };
      const cough = () => {
        st.press = null; st.ignoreUp = true; $('.pi-lungs').hidden = true; el.classList.remove('holding');
        endTurn(); if (st.j.passOn == null) passNext();
        S.cough(); st.hazeAdd += 0.03; el.classList.add('coughing'); later(() => el.classList.remove('coughing'), 900); react(0, 'cough', 1000);
        if (st.tut) { popUp('COUGH!', 'bad'); say(1, 'Let go while it’s in the pink. Not after.', 2400); return; }
        st.k.coughs++; miss('COUGH!', 'cough');
      };

      /* the chips, going the other way */
      const startSnack = n => {
        let seat = 4; if (st.asleep[seat]) seat = nextSeat(seat, -1); if (seat === 0) return;
        st.s = { seat, arr: n, passOn: null, passes: 0, left: -1, frozen: false }; st.k.snacks++; placeS();
        const j = st.asleep[5] ? seat : 5; say(j, CREW[j].id === 'junkyu' ? 'Chips going this way!!' : 'Chips! Other way!', 1800); S.chips();
      };
      const moveS = n => {
        const s = st.s, from = s.seat, to = nextSeat(from, -1);
        s.seat = to; s.arr = n; s.passOn = null; placeS(); S.chips();
        if (from === 0) { st.sturn = null; seats[0].classList.remove('sturn'); }
        if (s.left > 0 && --s.left === 0) { const i = awakeNPC().includes(5) ? 5 : (awakeNPC()[0] || 1); say(i, i === 5 ? 'The bag’s empty!! Who did that!!' : 'Bag’s empty.', 1800); st.s = null; chips.hidden = true; return; }
        if (to === 0) { st.sturn = { A: n, dl: n + 3, done: false }; seats[0].classList.add('sturn'); }
      };
      const pressS = () => {
        if (!canPlay() || !st.s) return;
        const T = nowT();
        if (!st.sturn || st.sturn.done) { if (st.turn && !st.turn.done && !st.press && live()) { st.k.mixups++; miss('WRONG HAND', 'mixup'); } return; }
        const { k, d } = judge(T, st.sturn.A + 1, st.sturn.dl), r = rateOf(d, T, 1.15);
        st.sturn.done = true; seats[0].classList.remove('sturn');
        if (r === 'off') { st.k.sDropped++; miss('CHIPS EVERYWHERE', 'chips'); st.s.passOn = nextIdx(T); }
        else { st.k.sPassed++; st.k[r]++; vibes(r === 'perfect' ? 90 : 55); S.good(r === 'perfect'); popUp(r === 'perfect' ? 'CHIPS · PERFECT' : 'CHIPS · GOOD', r); moveS(Math.max(k, st.bN - 1)); st.s && (st.s.arr = Math.max(st.s.arr, k)); }
        if (st.s) { st.s.passes++; if (st.s.passes >= 2) st.s.left = 3; }
      };

      /* deep thoughts */
      const startThought = n => {
        st.pend = null;
        const pool = THOUGHTS.filter(t => !st.asleep[CREW.findIndex(c => c.id === t.who)] && t !== st.lastThought);
        if (!pool.length) return;
        const th = pick(pool), i = CREW.findIndex(c => c.id === th.who); st.lastThought = th;
        st.think = { i, th, until: n + 4 }; st.turn.dl = n + 5; st.k.thoughts++;
        const box = $('.pi-think'); box.hidden = false; box.className = 'pi-think ' + th.want;
        box.querySelector('.pi-tface').innerHTML = `<b>${CREW[i].name[0]}</b>${img(FACE(CREW[i].id, th.want === 'nod' ? 'serious' : 'surprised'), '')}<i class="pi-tmark">${th.want === 'nod' ? SVG_HEART : SVG_SPIRAL}</i>`;
        box.querySelector('.pi-twho').textContent = CREW[i].name; box.querySelector('.pi-tline').textContent = th.t;
        setFace(i, th.want === 'nod' ? 'serious' : 'surprised', 0);
      };
      const answer = how => {
        const t = st.think; if (!t) return; st.think = null; $('.pi-think').hidden = true;
        const i = t.i;
        if (how === 'zoned') { st.k.tZoned++; popUp('ZONED OUT', 'bad'); say(i, 'Hello? Sol? Did you hear any of that?', 2000); miss('ZONED OUT', 'any', i); setFace(i, 'sad', 1500); return; }
        say(0, pick(how === 'nod' ? NOD_SAY : DERAIL_SAY), 1800);
        if (how === t.th.want) {
          st.k.tRight++; vibes(150); popUp(how === 'nod' ? 'VIBE CHECK' : 'SAVED THE ROOM', 'perfect'); setFace(i, 'happy', 1600);
          if (how === 'derail') { st.hazeAdd = Math.max(0, st.hazeAdd - 0.03); S.laugh(CREW[i].laugh, 4); } else S.good(true);
        } else {
          st.k.tWrong++; st.combo = 0; popUp('HM.', 'good'); later(() => say(i, pick(how === 'nod' ? WRONG_NOD : WRONG_DERAIL), 2000), 900);
          setFace(i, how === 'nod' ? 'surprised' : 'sad', 1800); if (how === 'nod') st.hazeAdd += 0.04;
        }
      };

      /* who has it? */
      const startShell = n => {
        st.pend = null;
        const holder = st.j.seat, others = shuffle(awakeNPC().filter(i => i !== holder)).slice(0, 2);
        if (others.length < 2) return;
        const order = shuffle([holder, ...others]);
        st.shell = { holder, begin: n, cards: order.map((seat, pos) => ({ seat, pos })), phase: 'show', until: 0, queue: [] };
        st.j.frozen = true; joint.hidden = true; placeJ(); if (st.s) st.s.frozen = true; st.k.shells++;
        const box = $('.pi-shell'); box.hidden = false; box.className = 'pi-shell show';
        box.querySelector('.pi-shq').textContent = 'Wait. Who has it? Watch…';
        box.querySelector('.pi-cards').innerHTML = st.shell.cards.map((c, idx) => `<button type="button" class="pi-card${c.seat === holder ? ' hold' : ''}" data-c="${idx}" style="left:${18 + c.pos * 32}%">
          <span class="pi-cface"><b>${CREW[c.seat].name[0]}</b>${img(FACE(CREW[c.seat].id, 'happy'), '')}</span><span class="pi-fist">${SVG_FIST}</span><span class="pi-cj">${SVG_JOINT}</span><small>${CREW[c.seat].name}</small><kbd></kbd></button>`).join('');
        const asker = awakeNPC().find(i => i !== holder && !others.includes(i)) || others[0]; say(asker, 'Wait. Who has it?', 1600);
      };
      const shellBeat = n => {
        const sh = st.shell, rel = n - sh.begin, box = $('.pi-shell');
        box.style.setProperty('--sw', `${Math.min(0.5, beatLen() * (D.spb === 2 ? 0.38 : 0.6)).toFixed(2)}s`);
        if (rel === 1) { box.className = 'pi-shell hide'; box.querySelector('.pi-shq').textContent = 'Keep your eyes on it…'; S.tick(); }
        else if (rel >= 2 && rel < 2 + D.swaps) { swap(); if (D.spb === 2) sh.queue.push(beat(n).t + beat(n).len / 2); }
        else if (rel === 2 + D.swaps) {
          sh.phase = 'ask'; sh.until = n + 4; box.className = 'pi-shell hide ask'; box.querySelector('.pi-shq').textContent = 'Who has it? (1 · 2 · 3)';
          [...box.querySelectorAll('.pi-card')].forEach(b => { const c = sh.cards[+b.dataset.c]; b.querySelector('kbd').textContent = c.pos + 1; });
        } else if (sh.phase === 'ask' && n > sh.until) chooseShell(-1);
      };
      const swap = () => {
        const sh = st.shell; if (!sh) return;
        const a = Math.floor(Math.random() * 3), b = (a + 1 + Math.floor(Math.random() * 2)) % 3;
        const ca = sh.cards.find(c => c.pos === a), cb = sh.cards.find(c => c.pos === b);
        ca.pos = b; cb.pos = a; S.tick();
        const btns = [...$('.pi-cards').querySelectorAll('.pi-card')];
        sh.cards.forEach((c, idx) => { const bt = btns[idx]; if (!bt) return; bt.style.left = `${18 + c.pos * 32}%`; bt.classList.remove('up', 'down'); });
        if (!still) { const ba = btns[sh.cards.indexOf(ca)], bb = btns[sh.cards.indexOf(cb)]; ba && ba.classList.add('up'); bb && bb.classList.add('down'); later(() => { ba && ba.classList.remove('up'); bb && bb.classList.remove('down'); }, 180); }
      };
      const chooseShell = pos => {
        const sh = st.shell; if (!sh || sh.phase !== 'ask') return;
        sh.phase = 'done'; const box = $('.pi-shell'); box.className = 'pi-shell reveal';
        const picked = sh.cards.find(c => c.pos === pos), right = picked && picked.seat === sh.holder;
        [...box.querySelectorAll('.pi-card')].forEach(b => { const c = sh.cards[+b.dataset.c]; b.classList.toggle('picked', c === picked); });
        if (right) { st.k.shRight++; vibes(160); S.good(true); popUp('EYES OF A HAWK', 'perfect'); box.querySelector('.pi-shq').textContent = `${CREW[sh.holder].name} had it.`; }
        else { box.querySelector('.pi-shq').textContent = `It was ${CREW[sh.holder].name}. The whole time.`; miss(pos < 0 ? 'TOO SLOW' : 'NOPE', 'any', sh.holder); }
        later(() => {
          if (!st.shell) return; box.hidden = true; st.shell = null;
          st.j.frozen = false; joint.hidden = false; st.j.seat = sh.holder; st.j.arr = st.bN; placeJ(); if (st.s) st.s.frozen = false;
          if (right) { say(sh.holder, pick(['Okay, she’s good.', 'How did you track that?', 'Busted.']), 1500); setFace(sh.holder, 'surprised', 1400); }
        }, 1100);
      };

      /* Nana */
      const startNana = n => {
        const it = pick(NANA_ITEMS), x = 30 + Math.random() * 40, y = 34 + Math.random() * 26;
        st.nana = { it, k: n + 3, x, y, done: false, at: n }; st.k.nanas++;
        const box = $('.pi-nana'); box.hidden = false; box.className = 'pi-nana in ' + (Math.random() < 0.5 ? 'left' : 'right');
        const b = box.querySelector('.pi-item'); b.style.left = x + '%'; b.style.top = y + '%'; b.querySelector('span').innerHTML = SVG_ITEM[it.id];
        b.setAttribute('aria-label', `Catch ${it.name}`); S.bark();
        const i = awakeNPC().includes(1) ? 1 : awakeNPC()[0]; i && say(i, pick(['Nana! NO!', 'Nana, buddy, no—', 'NANA.']), 1400);
      };
      const catchNana = () => {
        const nn = st.nana; if (!nn || nn.done || !canPlay()) return;
        const T = nowT(), bt = beat(nn.k); if (!bt) return;
        endNana(rateOf(T - bt.t, T, 1.5) !== 'off');
      };
      const endNana = ok => {
        const nn = st.nana; if (!nn || nn.done) return; nn.done = true;
        const box = $('.pi-nana');
        if (ok) { st.k.nSaved++; vibes(130); S.catch(); popUp('CAUGHT IT', 'perfect'); box.className = 'pi-nana caught'; const i = awakeNPC().includes(1) ? 1 : awakeNPC()[0]; i && say(i, pick(['My son. My beautiful, destructive son.', 'Reflexes. Unreal.', 'Saved. Nana, sit.']), 1800); }
        else { S.crash(); box.className = 'pi-nana crash'; miss('CRASH', 'any'); }
        later(() => { box.hidden = true; st.nana = null; }, 900);
      };

      /* interruptions: one may be queued after each of her turns */
      const afterTurn = n => {
        if (!live() || st.ending) return;
        st.sinceInt++;
        const el2 = st.T - st.start;
        if (st.pend || st.nana || st.shell || el2 < 10 || LEN - el2 < 14 || st.sinceInt < D.gap || Math.random() > D.chance) return;
        let type = st.intQ.shift() || pick(['thought', 'shell', 'nana', 'snack', 'snack']);
        if (type === 'snack' && st.s) type = 'nana';
        st.sinceInt = 0;
        st.shellAt = 2 + Math.floor(Math.random() * 4);
        if (type === 'nana') startNana(n + 1); else if (type === 'snack') startSnack(n + 1); else st.pend = type;
      };

      /* each beat */
      let flip = false;
      const onBeat = b => {
        const n = b.n;
        flip = !flip; el.classList.toggle('ba', flip); el.classList.toggle('bb', !flip);
        el.querySelectorAll('.pi-dots i').forEach((d, i) => d.classList.toggle('on', i === b.bar));
        if (b.count) {
          const c = $('.pi-count'); c.textContent = ['3', '2', '1', 'PASS IT'][b.count - 1]; c.className = 'pi-count on c' + b.count;
          if (b.count === 3) { S.lighter(); lighterFlick(); say(1, 'Okay, okay. House rules: on the beat.', 1800); }
          if (b.count === 4) { st.j.frozen = false; st.j.lit = true; joint.hidden = false; st.j.arr = n; placeJ(); later(() => c.classList.remove('on'), 500); }
          return;
        }
        if (st.shell) shellBeat(n);
        trotBeat();
        const j = st.j;
        if (!j.frozen && j.lit) {
          if (j.seat === 0) { if (j.passOn != null && n >= j.passOn) moveJ(n); }
          else if (n > j.arr) { if (j.hold > 0) { j.hold--; puff(j.seat); } else moveJ(n); }
        }
        const s = st.s;
        if (s && !s.frozen && st.s) {
          if (s.seat === 0) { if (s.passOn != null && n >= s.passOn) moveS(n); }
          else if (n > s.arr) moveS(n);
        }
        if (st.think && n > st.think.until) answer('zoned');
      };

      /* each frame */
      const step = dt => {
        clock(dt);
        if (!st.run) return;
        const T = st.T;
        ensure(T + 3);
        if (A) try { A.haze.frequency.setTargetAtTime(9000 - 6500 * st.haze, ac.currentTime, 0.4); } catch (e) {}
        while (beat(st.bN) && beat(st.bN).t <= T) { onBeat(beat(st.bN)); st.bN++; if (st.over) return; }
        if (st.shell && st.shell.queue.length && T >= st.shell.queue[0]) { st.shell.queue.shift(); swap(); }
        // her turn running out
        if (st.turn && !st.turn.done && !st.press) {
          const dl = beat(st.turn.dl);
          if (dl && T > dl.t + D.good * winK(T)) {
            if (st.tut) { st.turn.A = st.turn.dl - 2; st.turn.dl += 1; }
            else { st.k.bogarts++; endTurn(); miss('BOGARTING', 'bogart'); passNext(); }
          }
        }
        if (st.sturn && !st.sturn.done) {
          const dl = beat(st.sturn.dl);
          if (dl && T > dl.t + D.good * 1.15 * winK(T)) { st.sturn.done = true; seats[0].classList.remove('sturn'); st.k.sDropped++; miss('CHIP HOG', 'chips'); st.s.passOn = nextIdx(T); if ((st.s.passes += 1) >= 2) st.s.left = 3; }
        }
        // the lungs
        if (st.press) {
          const p = st.press;
          if (!p.hitting && T - p.t0 > TAP) { p.hitting = true; $('.pi-lungs').hidden = false; el.classList.add('holding'); S.inhale(); }
          if (p.hitting) { st.lungs = (T - p.t0) / (D.fill * p.len); if (st.lungs >= 1) { st.lungs = 1; cough(); } }
        }
        // Nana's thing hits the floor
        if (st.nana && !st.nana.done) { const bt = beat(st.nana.k); if (bt && T > bt.t + D.good * 1.5 * winK(T)) endNana(false); }
        if (st.tut) return;
        // the haze, the yawns
        const el2 = T - st.start;
        st.haze = clamp(el2 / LEN * 0.8 + st.hazeAdd, 0, 1);
        const base = 1.05 * D.sleep / (0.725 * LEN);
        for (let i = 1; i < N; i++) {
          if (st.asleep[i]) continue;
          st.dz[i] += dt / 1000 * base * st.rate[i] * (0.3 + st.haze);
          if (el2 < LEN * 0.4) st.dz[i] = Math.min(st.dz[i], 0.95);
          if (st.dz[i] >= 1 && awakeNPC().length > 2 && st.j.seat !== i && !(st.s && st.s.seat === i) && !(st.think && st.think.i === i) && !(st.shell && st.shell.cards.some(c => c.seat === i))) {
            st.asleep[i] = true; seats[i].classList.add('asleep'); setFace(i, 'neutral'); say(i, pick(['I’m just resting my eyes.', 'Five minutes…', 'zzz…', 'Wake me up for the chips.']), 1600);
          }
        }
        if (el2 >= LEN && !st.ending) { st.ending = true; st.pend = null; }
        if (st.ending && ((!st.turn || st.turn.done) && !st.press && !st.shell && !st.think && !(st.nana && !st.nana.done) || el2 >= LEN + 8)) finish(false);
      };
      const paint = () => {
        if (!st.run) return;
        const T = st.T, el2 = st.tut ? 0 : Math.max(0, T - st.start), left = Math.max(0, Math.ceil(LEN - el2));
        const tx = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`, tm = $('.pi-time'); if (tm.textContent !== tx) tm.textContent = st.tut ? 'practice' : tx;
        $('.pi-vibes b').textContent = st.score;
        el.style.setProperty('--haze', st.haze.toFixed(3));
        // the ring that closes on each beat of her turn (joint) and the chips' ring
        const ring = (tr, sel) => {
          const r = seats[0].querySelector(sel); if (!tr || tr.done) { r.style.opacity = 0; return; }
          let k = tr.A + 1; while (beat(k) && beat(k).t < T - 0.05 && k < tr.dl) k++;
          const bt = beat(k); if (!bt) return;
          const p = clamp((bt.t - T) / bt.len, 0, 1), jit = perf || still ? 0 : Math.sin(T * 9) * 0.03 * st.haze;
          r.style.opacity = (0.35 + 0.65 * (1 - p)).toFixed(2); r.style.transform = `translate(-50%, -50%) scale(${(1 + p * 1.1 + jit).toFixed(3)})`;
        };
        ring(st.turn, '.pi-app'); ring(st.sturn, '.pi-app2');
        if (st.press && st.press.hitting) { const [lo, hi] = bandAt(T), L = $('.pi-lungs'); L.style.setProperty('--l', st.lungs.toFixed(3)); L.style.setProperty('--lo', lo.toFixed(3)); L.style.setProperty('--hi', hi.toFixed(3)); L.classList.toggle('in', st.lungs >= lo && st.lungs <= hi); }
        if (st.nana && !st.nana.done) { const bt = beat(st.nana.k), b0 = beat(st.nana.at); if (bt) { const p = clamp((bt.t - T) / Math.max(0.3, bt.t - (b0 ? b0.t : bt.t - 2)), 0, 1); $('.pi-iring').style.transform = `translate(-50%, -50%) scale(${(1 + p * 1.6).toFixed(3)})`; } }
        if (st.think) { const left2 = st.think.until - st.bN + 1; el.querySelectorAll('.pi-tpips i').forEach((d, i) => d.classList.toggle('on', i < left2)); }
      };
      let last = 0, raf = 0;
      const tick = now => {
        const dt = Math.min(100, now - (last || now)); last = now; lastNow = performance.now();
        if (!st.paused && !st.over) { step(dt); if (!st.over) paint(); }
        if (!st.over) raf = requestAnimationFrame(tick);
      };

      /* the end: who's still awake */
      const finish = quit => {
        if (st.over) return; st.over = true; cancelAnimationFrame(raf);
        st.press = null; $('.pi-lungs').hidden = true; $('.pi-think').hidden = true; $('.pi-shell').hidden = true; $('.pi-nana').hidden = true;
        const k = st.k, misses = k.fumbles + k.bogarts + k.coughs + k.mixups + k.sDropped + k.tZoned + (k.shells - k.shRight) + (k.nanas - k.nSaved);
        const clean = k.passes + k.sPassed + k.tRight + k.shRight + k.nSaved, rate = (misses + 0.5 * k.tWrong) / Math.max(1, clean + misses + k.tWrong);
        const pr = k.perfect / Math.max(1, k.perfect + k.good);
        const grade = quit ? 'C' : rate <= 0.05 && pr >= 0.6 && k.smooth >= 2 ? 'S' : rate <= 0.14 ? 'A' : rate <= 0.3 ? 'B' : 'C';
        const top = st.roastsBy.reduce((b, v, i) => v > st.roastsBy[b] ? i : b, 1);
        const sup = { solar: SOLAR_SUPER[grade] };
        for (let i = 1; i < N; i++) { const id = CREW[i].id; sup[id] = i === top && st.roastsBy[i] >= 3 ? `Roast Champion (${st.roastsBy[i]} roasts)` : pick(SUPER[id][st.asleep[i] ? 'asleep' : 'awake']); }
        const awake = CREW.filter((c, i) => !st.asleep[i]).map(c => c.id);
        const res = { won: !quit && grade !== 'C', grade, score: st.score, perfect: k.perfect, good: k.good, passes: k.passes, hits: k.hits, smooth: k.smooth, weak: k.weak,
          coughs: k.coughs, fumbles: k.fumbles, bogarts: k.bogarts, mixups: k.mixups, misses, roasts: k.roasts,
          thoughts: { n: k.thoughts, right: k.tRight, wrong: k.tWrong, zoned: k.tZoned }, shells: { n: k.shells, right: k.shRight }, nana: { n: k.nanas, saved: k.nSaved },
          snacks: { n: k.snacks, passed: k.sPassed, dropped: k.sDropped }, awake, superlatives: sup, quit: !!quit, tutorial: tutRes };
        st.result = res;
        if (A) try { A.master.gain.setTargetAtTime(0.0001, ac.currentTime, 0.8); } catch (e) {}
        el.classList.add('done');
        const end = $('.mg-end');
        const show = () => {
          if (!el.isConnected) return;
          end.hidden = false;
          const ints = k.thoughts + k.shells + k.nanas + k.snacks, handled = k.tRight + k.shRight + k.nSaved + Math.max(0, k.snacks - k.sDropped);
          end.innerHTML = `<p class="pi-end-head">${quit ? 'You slipped out.' : 'Who’s still awake?'}</p>
            <div class="pi-awake">${CREW.map((c, i) => `<figure class="${st.asleep[i] ? 'asleep' : ''}${i === 0 ? ' me' : ''}"><span class="pi-face"><b class="pi-init">${c.name[0]}</b>${img(FACE(c.id, st.asleep[i] ? 'neutral' : 'happy'), 'pi-fimg')}</span>
              <figcaption><b>${c.name}${st.asleep[i] ? ' <em>asleep</em>' : ''}</b><small>${esc(sup[c.id])}</small></figcaption></figure>`).join('')}</div>
            <b class="mg-grade">${grade}</b>
            <dl><dt>Vibes</dt><dd class="pi-endvibes">${still ? st.score : 0}</dd><dt>Clean passes</dt><dd>${k.passes + k.sPassed}</dd><dt>Perfect</dt><dd>${k.perfect}</dd><dt>Smooth hits</dt><dd>${k.smooth}</dd>
              <dt>Coughs</dt><dd>${k.coughs}</dd><dt>Roasts taken</dt><dd>${k.roasts}</dd>${ints ? `<dt>Interruptions</dt><dd>${handled} / ${ints}</dd>` : ''}</dl>
            <p class="mg-end-say">${esc(quit ? END_SAY.quit : END_SAY[grade])}</p><button type="button">Continue</button>`;
          const bt = end.querySelector('button'); bt.focus();
          if (!still) { const v = end.querySelector('.pi-endvibes'), tot = st.score; for (let q = 1; q <= 16; q++) later(() => { if (v) v.textContent = Math.round(tot * q / 16); }, 900 + q * 50); }
          bt.onclick = () => { cleanup(); o.onDone?.(res); done(res); };
        };
        quit ? show() : later(show, 1200);
      };

      /* input */
      const canPlay = () => st.run && !st.paused && !st.over && !(window.FemcTutorial && window.FemcTutorial.blocking && window.FemcTutorial.blocking()) && $('.pi-howto').hidden;
      let pDown = null;
      const wake = () => { if (ac && ac.state === 'suspended' && !st.paused) { try { ac.resume(); } catch (e) {} } };
      const down = e => {
        if (!st.run || st.over || st.paused) return;
        wake();
        const t = e.target;
        if (t.closest('.mg-pause, .mg-end, .pi-title, .pi-howto, .pi-top')) return;
        const tb = t.closest('[data-th]'); if (tb) { e.preventDefault(); if (canPlay()) answer(tb.dataset.th); return; }
        const cd = t.closest('.pi-card'); if (cd) { e.preventDefault(); if (canPlay() && st.shell) chooseShell(st.shell.cards[+cd.dataset.c].pos); return; }
        if (t.closest('.pi-item')) { e.preventDefault(); catchNana(); return; }
        if (t.closest('.pi-pad-s')) { e.preventDefault(); pressS(); return; }
        if (e.button > 0) return;
        e.preventDefault(); pDown = e.pointerId; pressJ();
      };
      const up = e => { if (pDown !== e.pointerId) return; pDown = null; if (st.ignoreUp) { st.ignoreUp = false; return; } releaseJ(); };
      el.addEventListener('pointerdown', down); window.addEventListener('pointerup', up); window.addEventListener('pointercancel', up);
      el.addEventListener('contextmenu', e => e.preventDefault());
      let spaceDown = false;
      const pause = on => {
        if (st.over || !st.begun) return;
        st.paused = on; $('.mg-pause').hidden = !on;
        if (on && st.press) { st.press = null; $('.pi-lungs').hidden = true; el.classList.remove('holding'); }
        if (ac) { try { on ? ac.suspend() : ac.resume(); } catch (e) {} }
        if (on) $('.mg-pause button').focus();
      };
      const key = e => {
        if (!el.isConnected || st.over) return;
        if (!st.begun) return;
        const T = window.FemcTutorial;
        if ((T && T.open && T.open() && (e.key === 'Escape' || (T.blocking && T.blocking()))) || (st.tut && e.key === 'Escape')) return; // the tutorial has those keys
        e.stopPropagation();
        if (!$('.pi-howto').hidden) { if (e.key === 'Escape' || e.key === 'Enter') { e.preventDefault(); $('.pi-howto [data-ht=ok]')?.click(); } return; }
        if (e.key === 'Escape') { e.preventDefault(); pause(!st.paused); return; }
        if (st.paused || !st.run) return;
        if (e.repeat) { if (e.key === ' ') e.preventDefault(); return; }
        wake();
        const kk = e.key.length === 1 ? e.key.toLowerCase() : e.key;
        if (kk === ' ' || kk === 'j') { e.preventDefault(); spaceDown = true; pressJ(); return; }
        if (kk === 'f') { e.preventDefault(); pressS(); return; }
        if (kk === 'ArrowDown' || kk === 'c') { e.preventDefault(); catchNana(); return; }
        if (st.shell && st.shell.phase === 'ask' && /^[123]$/.test(kk)) { e.preventDefault(); chooseShell(+kk - 1); return; }
        if (st.think) {
          if (kk === 'ArrowLeft' || kk === 'a' || kk === '1') { e.preventDefault(); answer('nod'); }
          else if (kk === 'ArrowRight' || kk === 'd' || kk === '2') { e.preventDefault(); answer('derail'); }
        }
      };
      const keyUp = e => {
        if (!el.isConnected || st.over) return;
        const kk = e.key.length === 1 ? e.key.toLowerCase() : e.key;
        if ((kk === ' ' || kk === 'j') && spaceDown) { spaceDown = false; e.preventDefault(); if (st.ignoreUp) { st.ignoreUp = false; return; } releaseJ(); }
      };
      const vis = () => { if (document.hidden && st.run && !st.paused && !st.over && !st.tut) pause(true); };
      const blur = () => { if (st.press) releaseJ(); spaceDown = false; };
      const cleanup = () => {
        cancelAnimationFrame(raf); timers.forEach(clearTimeout); timers.clear();
        window.removeEventListener('keydown', key, true); window.removeEventListener('keyup', keyUp, true); window.removeEventListener('keydown', skipT, true);
        window.removeEventListener('pointerup', up); window.removeEventListener('pointercancel', up); window.removeEventListener('blur', blur);
        document.removeEventListener('visibilitychange', vis);
        try { ac && ac.close(); } catch (e) {} el.remove();
      };
      $('.mg-pause').onclick = e => { const b = e.target.closest('[data-mg]'); if (!b) return; const m = b.dataset.mg; if (m === 'resume') pause(false); if (m === 'howto') howTo(); if (m === 'quit') { pause(false); finish(true); } };
      window.addEventListener('keydown', key, true); window.addEventListener('keyup', keyUp, true); window.addEventListener('blur', blur);
      document.addEventListener('visibilitychange', vis);

      /* the first-time tutorial: Jihoon hosts a practice circle (st.tut: no interruptions, no roasts, no timer) */
      const HOST_FACE = FACE('jihoon', 'happy');
      const practice = kind => new Promise(ok => { tp = { kind, ok: () => { tp = null; ok(); } }; });
      const tutSteps = replay => [
        { target: null, say: 'Welcome to my humble home. House rules: it goes around the circle, <b>on the beat</b>. Nobody holds it forever.' },
        { target: '.pi-ring', say: 'Everyone passes on the beat. When it lands on you, the <b>ring around your face</b> closes in on every beat. That’s your cue.' },
        { target: '.pi-pad-j', say: '<b>Tap on the beat</b> to pass it clean: Space, J, a click, or this pad. It’s coming round. Try it.', wait: replay ? 'click' : () => practice('pass') },
        { target: '.pi-seat.me', say: 'Or <b>hold</b> to take a hit. Your lungs fill up. Let go <b>inside the pink band</b>, or you’re coughing in front of everyone. Try it next time it’s yours.', wait: replay ? 'click' : () => practice('hit') },
        { target: '.pi-pad-s', say: 'Snacks go <b>the other way</b>. Chips are <b>F</b> or this pad. Mix them up and Cherry will never let it go.' },
        { target: null, say: 'Stuff happens. Someone gets deep: a heart means <b>nod along</b> (←), a spiral means <b>derail</b> (→). Someone hides it: watch the fists, pick who has it (1-3). Nana knocks something over: tap it (or ↓) as its ring closes.' },
        { target: '.pi-haze', say: 'The room gets hazy and the beat gets lazy. Keep up, and keep us awake. Esc pauses. Let’s go.' },
      ];
      const ownCard = (replay, then) => { // the built-in fallback when tutorial.js isn't there
        const h = $('.pi-howto'); h.hidden = false;
        h.innerHTML = `<div><b>How to play</b><ul>${tutSteps(true).map(s => `<li>${s.say}</li>`).join('')}</ul>
          <button type="button" data-ht="ok">${replay ? 'Back' : 'Got it'}</button>${replay ? '' : '<button type="button" data-ht="skip">Skip</button>'}</div>`;
        h.onclick = e => { const b = e.target.closest('[data-ht]'); if (!b) return; h.hidden = true; h.onclick = null; if (!replay) ownMark(); then(b.dataset.ht === 'ok' ? 'done' : 'skipped'); };
        h.querySelector('button').focus();
      };
      const howTo = () => {
        const back = () => { if (st.paused && !st.over) { $('.mg-pause').hidden = false; $('.mg-pause button').focus(); } };
        $('.mg-pause').hidden = true;
        tutLib().then(T => { if (!st.paused || st.over) return; if (!T) return ownCard(true, back); T.run(el, { steps: tutSteps(true), who: 'Jihoon', face: HOST_FACE, calm, perf, replay: true }).then(back); });
      };

      /* start: practice circle (first time) then the real session */
      const resetRun = () => {
        st.beats = []; st.bN = 0; st.start = st.T + 0.5; st.haze = 0; st.hazeAdd = 0; st.score = 0; st.combo = 0;
        Object.keys(st.k).forEach(x => { st.k[x] = 0; });
        st.j = { seat: 1, arr: -1, hold: 0, passOn: null, frozen: true, lit: false }; st.turn = null; st.press = null; st.s = null; st.sturn = null;
        st.think = null; st.shell = null; st.nana = null; st.pend = null; st.sinceInt = 0;
        joint.hidden = true; chips.hidden = true; seats[0].classList.remove('turn', 'sturn'); $('.pi-lungs').hidden = true; newBus();
      };
      const startReal = () => {
        if (st.over || !el.isConnected) return;
        st.tut = false; tp = null; el.classList.remove('tut'); resetRun(); st.run = true; placeJ();
      };
      const startTut = () => {
        st.tut = true; el.classList.add('tut'); resetRun(); st.run = true;
        st.j.frozen = false; st.j.lit = true; joint.hidden = false; st.j.arr = 0; placeJ();
      };

      /* the title card: ~1.8 s (click / any key skips) */
      const note = ['Rhythm', o.mute ? 'Muted: watch the rug' : 'Best with sound', still ? 'Reduced motion' : '', calm ? 'Flashes reduced' : ''].filter(Boolean).join(' · ');
      const tt = document.createElement('div'); tt.className = 'pi-title';
      tt.innerHTML = `${img(ART('title'), 'pi-title-art')}<b>PASS IT</b><small>Keep it moving. On the beat.</small><p class="pi-note">${esc(note)}</p>`;
      el.appendChild(tt);
      const begin = () => {
        if (st.begun || !el.isConnected) return; st.begun = true; window.removeEventListener('keydown', skipT, true);
        tt.classList.add('out'); later(() => tt.remove(), 400);
        audio();
        last = 0; raf = requestAnimationFrame(tick);
        tutP.then(T => {
          if (!el.isConnected || st.over) return;
          if (!T) {
            const want = o.tutorial === true || (o.tutorial !== false && !ownSeen());
            return want ? ownCard(false, r => { tutRes = r; startReal(); }) : startReal();
          }
          if (!T.should('passit', o.tutorial)) return startReal();
          startTut();
          T.run(el, { id: 'passit', steps: tutSteps(false), who: 'Jihoon', face: HOST_FACE, calm, perf }).then(r => { tutRes = r; startReal(); });
        });
      };
      const skipT = e => { if (e.key !== 'Escape') { e.preventDefault(); begin(); } };
      tt.onclick = begin; window.addEventListener('keydown', skipT, true); later(begin, 1800);
    });
  }
  return { play, DIFF, CREW, THOUGHTS, state: () => cur };
})();
