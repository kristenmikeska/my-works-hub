/* FEMC epilogue minigame: The Trip (Nov 11 2026). A DEMO: not in the story (the main session adds its card to
   mockups/minigames/index.html). HOAX: Solar Kim and "the crew" (Hyunsuk, Asahi, Jaehyuk, Junkyu, Jihoon, Cherry), Hanlim Park,
   a winter night, Nana (her huge white Samoyed). Mushrooms happened off screen; the game is only what the park turns into: trees
   breathe, the pond is a kaleidoscope mirror, the streetlights hum notes, Nana talks (calm, absurd), colours move with the music.
   Fiction only: nothing about getting, taking or dosing anything, no plot, nobody named who isn't in the crew.

   FemcTrip.play({ host, mute, difficulty, bg, calm, perf, tutorial, onDone }) -> Promise<result>
     host        element to draw into (default document.body; a full-screen overlay is added inside it)
     mute        no audio at all (captions stand in where a sound matters: lamp notes, chords, the blanket's song, the hum)
     difficulty  'easy' | 'normal' | 'hard' (default 'normal'): night length 360 / 330 / 300 s; vibe drain 1.5 / 1.8 / 2 a
                 second (x1.55 by dawn); how far the crew wandered (x 1 / 1.15 / 1.25); zero-vibe grace 14 / 10 / 7 s;
                 a friend lets go at low vibe every 12 / 9 / 7 s; task sizes (wind 3 / 4 / 5, bench 2 / 2 / 3, breaths 3 / 3 / 4,
                 ducks 3 / 3 / 4, moon 3 / 3 / 4, braid 8 / 10 / 12); easy shows Nana's math hints up front
     bg          background id under assets/femc/bg/ (default 'epi-h-park-night'), blurred and hue-shifted behind the drawn park
     calm, perf  Reduce flashes / Performance; default: the game's settings (FemcGame.settings().calm / .perf), else off
     tutorial    true = show the tutorial, false = never, else first time only (FemcTutorial.should('trip'))
     onDone      called with the result too
   result = { won, grade: 'S' | 'A' | 'B' | 'C', ending: 'blanket' | 'sunrise' | 'curdled' | 'quit', quit, back (0-6),
              crew: ids back on the blanket, vibe (average), low (lowest), letGo, lamps, harmonies, pets, drinks, secs,
              tutorial: 'done' | 'skipped' | 'seen' }
   Grade: S all six back, never under 25, average >= 65; A all six back, average >= 45; B all six back; C otherwise.
   Endings: blanket = everyone back (the sun comes up on all of them; won); sunrise = time ran out first; curdled = the vibe sat
   at zero for the grace time; quit = Quit from the pause menu.

   How it plays (top-down; the camera follows Solar):
     Walk        arrows / WASD, or hold the mouse / a finger where you want to go.
     Coax        E / Space / Enter near a friend (or tap them, or the Coax button) opens their small task:
                 Asahi conducting the wind (watch his baton, repeat the gusts with arrows / the pad), Junkyu apologising to a
                 bench (pick the kind thing to say, 1-3), Jihoon's "snow angel of the self" (hold while the ring breathes in,
                 let go while it breathes out), Hyunsuk filming a duck that isn't there (walk to the shimmer each time it
                 moves), Jaehyuk reciting calculus to the moon (finish his lines, 1-3; Solar is bad at math, Nana whispers),
                 Cherry braiding a willow (left, right, left, right). "Walk away" leaves a task (it starts over next time).
                 Done: they hold her hand and follow in a chain. Walk them onto the blanket and they sit down.
     Vibe        drains all night (slower while someone holds her hand, or while she's helping someone). Up: the blanket's
                 music (stand near it), streetlights (each hums a note as you pass; three different ones within 5 s = a
                 chord), Nana (N / Pet / tap him; 20 s between pets), water bottles (walk over one, Q / Water to drink; holds
                 two; they come back), the pond (stand still at its edge), each friend coaxed and each one back.
                 Under 35 the trip curdles: the palette drains, shadows lengthen, light closes in, the music echoes and goes
                 out of tune, voices echo, and a figure stands at the edge of the light (only ever at the edge; no face, no
                 harm). Under 15 a friend sometimes lets go and wanders back to their spot (take their hand again, no task).
     Sunrise     the sun on the top bar rises with the timer; the park lightens toward dawn in the last quarter.
   Esc pauses (Resume / How to play / Quit). Title card ~1.8 s (click / any key skips). End card with grade and counts.
   Sound (Web Audio, made here, no files): the blanket's song (84 bpm arpeggios over a pad, A minor pentatonic, louder near the
   blanket; echo, lowpass and detune grow as the vibe falls), lamp hums with vibrato, a low hum under everything when it
   curdles, Nana's voice, chimes for pickups, chords for friends. Mute = no AudioContext at all; captions instead.
   Settings: reduced motion = no breathing, trails, kaleidoscope spin or falling snow, slow colour changes, crossfades;
   Reduce flashes (calm) = no beat pulses or chord flashes, slow hue changes; Performance = DPR 1, no blur, glow blending,
   trails or CSS filters, fewer flakes and pond segments. UI chrome is Kat's pink and black; only the park itself is colourful.

   First-time tutorial: window.FemcTutorial (minigames/tutorial.js, loaded on demand) if present, else a small built-in one
   (dim + arrow + bubble, Skip / Next, remembered in localStorage 'kg-femc-tutorials' with try/catch). Practice steps: walk,
   pass a streetlight, pet Nana; info steps for the vibe meter, water and pond, the crew pins, the sun. Pause → How to play
   replays it (Next on every step). The night's clock and the drain don't run during it.

   Optional art (probed once; drawn versions stay when missing):
     art/minigames/trip/title.webp     the title card picture (full bleed)
     art/minigames/trip/blanket.webp   the blanket from above, about 300 x 200 (drawn at 160 x 106 world units)
     art/minigames/trip/nana.webp      Nana from above / three-quarter, facing right, feet at the bottom centre, ~2:1.5
   Test hooks: FemcTrip.state(), FemcTrip.ctl() → { advance(ms), go(x, y), interact(), solve(), pet(), drink(), vibe(v),
   pause(on), quit(), cont(), skip(), crew() }; play({ __sim: true }) runs without requestAnimationFrame or audio. */
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

  /* the park (world units) */
  const WW = 3200, WH = 2200, HOME = { x: 1600, y: 1250 }, BLANKET_R = 120, SPEED = 175;
  const POND = { x: 1600, y: 700, rx: 300, ry: 170 };
  const inPond = (x, y, m = 0) => ((x - POND.x) / (POND.rx + m)) ** 2 + ((y - POND.y) / (POND.ry + m)) ** 2 < 1;
  const pondQ = (x, y) => Math.sqrt(((x - POND.x) / POND.rx) ** 2 + ((y - POND.y) / POND.ry) ** 2);
  const DIFF = {
    easy:   { len: 360, drain: 1.5, spread: 1,    zero: 14, letGo: 12, seq: 3, rounds: 2, breaths: 3, ducks: 3, qs: 3, braid: 8,  hint: true },
    normal: { len: 330, drain: 1.8, spread: 1.15, zero: 10, letGo: 9,  seq: 4, rounds: 2, breaths: 3, ducks: 3, qs: 3, braid: 10, hint: false },
    hard:   { len: 300, drain: 2,   spread: 1.25, zero: 7,  letGo: 7,  seq: 5, rounds: 3, breaths: 4, ducks: 4, qs: 4, braid: 12, hint: false },
  };
  // the crew: where they wandered (offset from the blanket, x spread), what they're doing, their task, how they look
  const CREW = [
    { id: 'asahi', name: 'Asahi', at: [-690, -736], task: 'wind', pose: 'conduct', doing: 'conducting the wind', coat: '#5b6cff', hair: '#141016', skin: '#e9c3a6',
      find: 'Asahi: Shh. The wind is in its second movement.', done: 'Asahi: …Fine. It can play the rest without me.', back: 'Asahi: No one cares that I was good at that.', letgo: 'Asahi: The wind’s calling me back. Rude.' },
    { id: 'junkyu', name: 'Junkyu', at: [-1012, 92], task: 'bench', pose: 'bow', doing: 'apologising to a bench', coat: '#ffb347', hair: '#2a1a12', skin: '#f0cdb2',
      find: 'Junkyu: I’m so sorry. I’m so, so sorry. (He’s talking to a bench.)', done: 'Junkyu: It forgave me! Sol, it FORGAVE me.', back: 'Junkyu: I love this blanket. I’m apologising to it later, just in case.', letgo: 'Junkyu: Wait. I didn’t apologise to the other bench.' },
    { id: 'jihoon', name: 'Jihoon', at: [805, 598], task: 'angel', pose: 'lie', doing: 'making a snow angel of the self', coat: '#1d1d22', hair: '#18110d', streak: '#f2d27a', skin: '#e8c0a0',
      find: 'Jihoon: Behold. A snow angel of the self. Of the almighty Hoon.', done: 'Jihoon: You felt it too. Astonishing.', back: 'Jihoon: The almighty Hoon returns to his throne. It is a blanket.', letgo: 'Jihoon: My angel misses me. I Must Go.' },
    { id: 'hyunsuk', name: 'Hyunsuk', at: [540, -690], task: 'duck', pose: 'phone', doing: 'filming a duck that isn’t there', coat: '#3ec9a7', hair: '#24170f', skin: '#efc9ab',
      find: 'Hyunsuk: Don’t move, man. Don’t scare the duck.', done: 'Hyunsuk: Got it. Best duck footage of my life, bro.', back: 'Hyunsuk: Watch it back with me later. You’ll see it.', letgo: 'Hyunsuk: The duck came back. I swear the duck came back.' },
    { id: 'jaehyuk', name: 'Jaehyuk', at: [1127, -207], task: 'moon', pose: 'moon', doing: 'reciting calculus to the moon', coat: '#9ad0ff', hair: '#1b1210', skin: '#ecc5a5',
      find: 'Jaehyuk: …and so the moon, being continuous, is differentiable everywhere.', done: 'Jaehyuk: The moon agrees. It’s been studied.', back: 'Jaehyuk: I have never skipped a blanket in my life.', letgo: 'Jaehyuk: I left a proof unfinished. The moon’s waiting.' },
    { id: 'cherry', name: 'Cherry', at: [-598, 736], task: 'braid', pose: 'braid', doing: 'braiding a willow', coat: '#ff6f91', hair: '#3a1c14', skin: '#f3d0b8',
      find: 'Cherry: Don’t talk to me, I’m doing her hair. (Her = the willow.)', done: 'Cherry: She looks so good. I’m actually crying.', back: 'Cherry: i love u bitch. Sit down, the blanket’s warm.', letgo: 'Cherry: She’s got a tangle. I can feel it from here.' },
  ];
  const SEATS = [[-50, -28], [-10, -34], [32, -26], [-46, 26], [-4, 32], [40, 24]];
  const SOLAR = { coat: '#ff8fc4', hair: '#4a2a1a', skin: '#f1cfb6' };
  const NANA = [
    'Nana: I have always been able to talk. You never asked.', 'Nana: The snow is just the sky, lying down for a bit.',
    'Nana: Tonight I would like to be called by my full name. It is Nana.', 'Nana: Every bench in this park has a secret. Most of them are gum.',
    'Nana: Jihoon calls me his son. I have decided to allow it.', 'Nana: The lamps are singing in A minor. I prefer my bowl.',
    'Nana: Breathe in. I am breathing. We are breathing at each other.', 'Nana: The trees are only breathing because they saw you do it.',
    'Nana: I have counted everyone. I counted you twice, because I like you.', 'Nana: That willow owes me money.',
  ];
  const NANA_DARK = ['Nana: Stay near the light, Sol.', 'Nana: Don’t look at the edge. Look at me.', 'Nana: It’s only standing there. Let’s go to the music.', 'Nana: Pet me. It helps. It helps both of us.'];
  const NANA_PET = ['Nana: Yes. There. That is the spot of the universe.', 'Nana: I accept this offering.', 'Nana: Again, but with feeling.', 'Nana: You are doing wonderfully. So am I.'];
  const NANA_LEFT = ['Nana: Everyone has wandered off. This is normal. Bring them back to the blanket before the sun.'];
  // the blanket's song: A minor pentatonic, 84 bpm eighths
  const EIGHTH = 60000 / 84 / 2;
  const CHORDS = [[220, 261.63, 329.63, 440], [174.61, 220, 261.63, 349.23], [196, 261.63, 329.63, 392], [196, 246.94, 293.66, 392]];
  const ARP = [0, 1, 2, 3, 2, 1, 2, 3];
  const BAR_HUES = [320, 25, 170, 265];
  const PENT = [['A', 220], ['C', 261.63], ['D', 293.66], ['E', 329.63], ['G', 392], ['A', 440], ['C', 523.25], ['D', 587.33], ['E', 659.25], ['G', 783.99]];
  // the tasks' words
  const BENCH = [
    { say: 'Junkyu: It won’t forgive me. I sat on it really hard in ninth grade.', opts: [['Tell it how many people it’s held. That’s a lot of people.', 1], ['Kyu, benches can’t hear you.', 0, 'Junkyu gasps. The bench definitely heard that.'], ['Sit on it again. Assert dominance.', 0, 'Junkyu: I could NEVER.']] },
    { say: 'Junkyu: What if it’s still mad?', opts: [['Then we sit next to it until it isn’t.', 1], ['Bribe it. Benches love snacks.', 0, 'Junkyu: It’s not that kind of bench, Sol.'], ['Leave it a one-star review.', 0, 'Junkyu looks at you like you kicked Nana.']] },
    { say: 'Junkyu: Should I say goodbye? Is that weird?', opts: [['Say thank you instead. Benches like that.', 1], ['Shake its hand. Find a hand.', 0, 'Junkyu checks the bench for a hand. There isn’t one.'], ['Ghost it. It’s a bench.', 0, 'Junkyu: That’s how this STARTED.']] },
  ];
  const MOON = [
    { q: 'Jaehyuk: The derivative of x squared is—', opts: [['2x', 1], ['x squared, but tired', 0], ['the moon', 0]] },
    { q: 'Jaehyuk: And the derivative of sine is—', opts: [['cosine', 1], ['sine, but leaning', 0], ['a little wave', 0]] },
    { q: 'Jaehyuk: Integrate, and never forget the—', opts: [['plus C', 1], ['plus Nana', 0], ['plus snacks', 0]] },
    { q: 'Jaehyuk: One over x, as x goes to infinity—', opts: [['zero', 1], ['forever', 0], ['the moon, again', 0]] },
  ];
  const MOON_BAD = ['Jaehyuk: Close. Not close.', 'The moon frowns, very slightly.', 'Jaehyuk: You used to copy my homework, Sol.'];
  const DUCK = ['Hyunsuk: It moved. Over there, man.', 'Hyunsuk: Bro. It’s on the move.', 'Hyunsuk: Don’t look at it directly. Okay, look at it.'];
  const ANGEL_GOOD = ['Jihoon: Yes. You see the self now.', 'Jihoon: Breathe like a king. Like me.', 'Jihoon: The snow is proud of you.'];
  const ANGEL_BAD = ['Jihoon: Again. Breathe like you mean it.', 'Jihoon: That was a peasant breath, Sol.'];
  const DIRS4 = { l: '←', u: '↑', d: '↓', r: '→' };
  const KEYDIR = { ArrowLeft: 'l', a: 'l', A: 'l', ArrowRight: 'r', d: 'r', D: 'r', ArrowUp: 'u', w: 'u', W: 'u', ArrowDown: 'd', s: 'd', S: 'd' };

  /* the park's layout: the same every night (seeded), the crew's spots scaled by difficulty */
  const layout = D => {
    const R = mulberry(20261111);
    const crew = CREW.map((c, i) => {
      const x = clamp(HOME.x + c.at[0] * D.spread, 120, WW - 120), y = clamp(HOME.y + c.at[1] * D.spread, 120, WH - 120);
      return { ...c, x, y, hx: x, hy: y, state: 'out', again: false, seat: SEATS[i], order: 0, ph: R() * TAU, face: 1 };
    });
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
    const far = (x, y, r) => Math.hypot(x - HOME.x, y - HOME.y) > 260 && !inPond(x, y, 90) && crew.every(c => Math.hypot(x - c.x, y - c.y) > r) && lamps.every(l => Math.hypot(x - l.x, y - l.y) > 70);
    const trees = [];
    for (let k = 0; k < 600 && trees.length < 64; k++) {
      const x = 80 + R() * (WW - 160), y = 110 + R() * (WH - 180);
      if (far(x, y, 150) && trees.every(t => Math.hypot(x - t.x, y - t.y) > 110)) trees.push({ x, y, r: 34 + R() * 26, h: R() * 360, ph: R() * TAU });
    }
    const ch = crew.find(c => c.id === 'cherry');
    trees.push({ x: ch.x - 80, y: ch.y - 10, r: 82, h: 120, ph: 1, willow: true });
    const jk = crew.find(c => c.id === 'junkyu');
    const benches = [{ x: jk.x + 4, y: jk.y - 46 }, { x: HOME.x - 420, y: HOME.y + 330 }, { x: HOME.x + 520, y: HOME.y + 120 }];
    const bottles = [];
    for (let k = 0; k < 200 && bottles.length < 7; k++) {
      const a = R() * TAU, r = 340 + R() * 900, x = HOME.x + Math.cos(a) * r, y = HOME.y + Math.sin(a) * r * .7;
      if (x > 80 && x < WW - 80 && y > 90 && y < WH - 60 && !inPond(x, y, 40) && bottles.every(b => Math.hypot(x - b.x, y - b.y) > 260)) bottles.push({ x, y, gone: -1e9 });
    }
    const blobs = Array.from({ length: 16 }, () => ({ x: R() * WW, y: R() * WH, r: 220 + R() * 260, h: R() * 360, ph: R() * TAU }));
    return { crew, lamps, trees, benches, bottles, blobs };
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
  let probed = false;
  const probe = () => {
    if (probed || typeof Image === 'undefined') return; probed = true;
    ['blanket', 'nana'].forEach(id => { const im = new Image(); im.onload = () => { ARTOK[id] = im; }; im.src = ART(id); });
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
        p: { x: HOME.x, y: HOME.y + 40 }, face: 1, walkPh: 0, moving: false, stillT: 0, keys: new Set(), ptr: null, trail: [], fx: [], fxAt: 0,
        vibe: 80, sum: 0, n: 0, min: 100, zeroT: 0, curdle: 0, hue: 320, hueT: 320, pulse: 0, flash: 0,
        nana: { x: HOME.x - 50, y: HOME.y + 60, face: 1, petAt: -1e9, sayAt: 14000, hop: 0, talk: 0, ph: 0 },
        water: 0, order: 0, coaxed: 0, letGo: 0, letGoAt: 0, lamps: 0, harmonies: 0, harmonyAt: -1e9, pets: 0, drinks: 0, hits: [],
        fig: { a: 0, seen: false }, says: [], sayEnd: 0, capAt: {}, mirror: false, gust: null, notes: [], flakes: [], markAt: null, tutWalk: 0,
        ending: null, result: null, crewV: 0, endT: 0,
      };
      cur = st;
      const crew = L.crew;
      let tutRes = 'seen', tp = null;
      const tutP = sim || o.tutorial === false ? Promise.resolve(null) : tutLib();
      probe();
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
        <div class="tr-top">
          <div class="tr-vibe"><small>Vibe</small><span><i></i></span></div>
          <ul class="tr-crew">${crew.map(c => `<li data-c="${c.id}"><img src="${FACE(c.id)}" alt="" onerror="this.remove()"><b>${esc(c.name)}</b></li>`).join('')}</ul>
          <div class="tr-sun" aria-label="Time to sunrise"><svg viewBox="0 0 120 44" aria-hidden="true"><path class="tr-arc" d="M6 40 Q60 -14 114 40"/><line x1="0" y1="40" x2="120" y2="40"/><circle class="tr-sundot" r="6" cx="6" cy="40"/></svg><small>Sunrise <b>–</b></small></div>
        </div>
        <ul class="tr-caps" aria-live="polite"></ul>
        <div class="tr-say" aria-live="polite" hidden><img alt="" hidden><p></p></div>
        <div class="tr-task" hidden></div>
        <div class="tr-acts">
          <button type="button" class="tr-coax" data-a="coax" hidden>Coax <kbd>E</kbd></button>
          <button type="button" class="tr-pet" data-a="pet">Pet Nana <kbd>N</kbd><i></i></button>
          <button type="button" class="tr-drink" data-a="drink" disabled>Water <b>0</b> <kbd>Q</kbd></button>
        </div>
        <p class="tr-help">Walk: arrows / WASD, or hold the mouse or a finger where you want to go. E / Space near a friend. Esc pauses.</p>
        <div class="mg-pause" hidden><b>Paused</b><button type="button" data-mg="resume">Resume</button><button type="button" data-mg="howto">How to play</button><button type="button" data-mg="quit">Quit</button></div>
        <div class="mg-end" hidden></div>`;
      host.appendChild(el);
      const $ = s => el.querySelector(s);
      const cv = $('.tr-cv'), ctx = cv && cv.getContext ? cv.getContext('2d') : null;
      const taskEl = $('.tr-task'), sayEl = $('.tr-say'), capsEl = $('.tr-caps'), pinsEl = $('.tr-pins'), markEl = $('.tr-mark');
      const pins = {};
      crew.concat([{ id: 'blanket', name: 'Blanket' }]).forEach(c => {
        const p = document.createElement('i'); p.className = 'tr-pin' + (c.id === 'blanket' ? ' home' : ''); p.dataset.c = c.id;
        p.innerHTML = `<b>${esc(c.id === 'blanket' ? '♥' : c.name[0])}</b>`; p.hidden = true; pinsEl.appendChild(p); pins[c.id] = p;
      });
      let cw = 0, ch = 0, dpr = 1, sc = 1;
      const cam = { x: st.p.x, y: st.p.y };
      const fit = () => {
        const W = el.clientWidth || window.innerWidth || 1280, H = el.clientHeight || window.innerHeight || 800;
        if (W === cw && H === ch) return;
        cw = W; ch = H; dpr = perf ? 1 : Math.min(2, window.devicePixelRatio || 1);
        if (cv) { cv.width = Math.round(cw * dpr); cv.height = Math.round(ch * dpr); }
        sc = clamp(Math.sqrt(cw * ch) / 900, .5, 1.35);
        st.flakes = Array.from({ length: perf ? 40 : still ? 70 : 140 }, () => ({ x: Math.random() * cw, y: Math.random() * ch, r: rnd(.8, 2.4), v: rnd(14, 40), w: rnd(0, TAU) }));
      };
      const toScreen = (x, y) => ({ x: (x - cam.x) * sc + cw / 2, y: (y - cam.y) * sc + ch / 2 });
      const toWorld = (x, y) => ({ x: (x - cw / 2) / sc + cam.x, y: (y - ch / 2) / sc + cam.y });
      const vis = (x, y, r) => Math.abs(x - cam.x) < cw / 2 / sc + r && Math.abs(y - cam.y) < ch / 2 / sc + r;

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
      const noise = (dur, freq, vol) => {
        if (!ac || !A) return;
        try {
          const n = Math.floor(ac.sampleRate * dur), b = ac.createBuffer(1, n, ac.sampleRate), d = b.getChannelData(0);
          for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / n);
          const s = ac.createBufferSource(), f = ac.createBiquadFilter(), gn = ac.createGain();
          s.buffer = b; f.type = 'bandpass'; f.frequency.value = freq; gn.gain.value = vol; s.connect(f); f.connect(gn); gn.connect(A.sfx); s.start();
        } catch (e) {}
      };
      const SFX = {
        lamp: l => tone(l.f, { dur: 1.5, vol: .12, attack: .18, vib: 4, pan: clamp((l.x - st.p.x) / 300, -1, 1) }),
        chord: () => [440, 554.37, 659.25].forEach((f, i) => tone(f, { type: 'triangle', at: i * .06, dur: 1.2, vol: .07, attack: .05 })),
        nana: () => { tone(118, { type: 'triangle', dur: .22, vol: .1, glide: .9 }); tone(104, { type: 'triangle', at: .2, dur: .3, vol: .08, glide: .94 }); },
        pet: () => { noise(.35, 1800, .25); tone(196, { type: 'sine', at: .05, dur: .5, vol: .06, vib: 6 }); },
        pick: () => { tone(1046.5, { dur: .25, vol: .08 }); tone(1318.5, { at: .08, dur: .35, vol: .07 }); },
        drink: () => [0, .08, .16, .26].forEach((t, i) => tone(500 + i * 140 + Math.random() * 60, { at: t, dur: .12, vol: .06, glide: 1.4 })),
        good: () => { tone(659.25, { type: 'triangle', dur: .3, vol: .08 }); tone(880, { type: 'triangle', at: .09, dur: .4, vol: .07 }); },
        tick: () => tone(880 + Math.random() * 220, { type: 'triangle', dur: .12, vol: .06 }),
        wrong: () => tone(130, { type: 'sawtooth', dur: .35, vol: .05, glide: .8 }),
        join: () => [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => tone(f, { type: 'triangle', at: i * .07, dur: .9, vol: .07 })),
        back: () => [261.63, 329.63, 392, 523.25].forEach(f => tone(f, { dur: 1.6, vol: .06, attack: .12 })),
        fig: () => tone(46, { dur: 3.5, vol: .14, attack: 1.2 }),
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
      };
      const soundTick = () => {
        if (!ac || !A) return;
        try {
          const t = ac.currentTime, dh = Math.hypot(st.p.x - HOME.x, st.p.y - HOME.y);
          const near = dh < BLANKET_R ? 1 : clamp(1 - (dh - BLANKET_R) / 900, .22, 1);
          A.music.gain.setTargetAtTime(st.over && st.ending !== 'blanket' ? 0 : .26 * near, t, .3);
          A.lp.frequency.setTargetAtTime(5200 - st.curdle * 4200, t, .4);
          A.fb.gain.setTargetAtTime(.18 + st.curdle * .5, t, .5);
          A.drone.gain.setTargetAtTime(st.over ? 0 : st.curdle * .1, t, .6);
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

      /* says (one at a time, a face beside it) */
      const say = (txt, who) => {
        if (st.says.length > 3) { const k = st.says.findIndex(s => s.who === 'nana'); st.says.splice(k >= 0 ? k : 0, 1); }
        st.says.push({ txt, who });
        if (st.sayEnd <= st.mt) nextSay();
      };
      const nextSay = () => {
        const s = st.says.shift();
        if (!s) { sayEl.hidden = true; return; }
        st.sayEnd = st.mt + clamp(s.txt.length * 55, 2600, 5200);
        const img = sayEl.querySelector('img'), p = sayEl.querySelector('p');
        const f = s.who ? FACE(s.who, s.who === 'nana' ? 'neutral' : 'happy') : null;
        if (f) { img.hidden = false; img.onerror = () => { img.hidden = true; }; img.src = f; } else img.hidden = true;
        const m = /^([A-Z][a-z]+): /.exec(s.txt);
        p.innerHTML = m ? `<b>${esc(m[1])}</b> ${esc(s.txt.slice(m[0].length))}` : esc(s.txt);
        sayEl.dataset.echo = s.txt; sayEl.hidden = false;
        if (s.who === 'nana') { st.nana.talk = 1; sfx('nana'); }
      };

      const vibeAdd = v => { st.vibe = clamp(st.vibe + v, 0, 100); };
      const near = () => {
        let best = null, bd = 95;
        crew.forEach(c => { if (c.state === 'out' || c.state === 'drift') { const d = Math.hypot(c.x - st.p.x, c.y - st.p.y); if (d < bd) { bd = d; best = c; } } });
        return best;
      };

      /* the tasks */
      const TASKS = {
        wind: c => {
          const T = { c, seq: Array.from({ length: D.seq }, () => pick(['l', 'u', 'r', 'd'])), i: 0, phase: 'show', at: -400, shown: -1, msg: 'Watch his baton. Then conduct it back.' };
          T.tick = dt => {
            if (T.phase !== 'show') return; T.at += dt;
            const k = Math.floor(T.at / 720); if (k === T.shown || T.at < 0) return; T.shown = k;
            if (k < T.seq.length) { st.gust = { dir: T.seq[k], t: 0 }; sfx('tick'); cap(`a gust: ${DIRS4[T.seq[k]]}`); }
            else { T.phase = 'input'; T.i = 0; T.msg = 'Your turn. Arrows, WASD or the pad.'; }
            paintTask();
          };
          T.input = d => {
            if (T.phase !== 'input') return;
            if (d === T.seq[T.i]) { T.i++; st.gust = { dir: d, t: 0 }; sfx('tick'); if (T.i >= T.seq.length) return complete(T); }
            else { vibeAdd(-3); sfx('wrong'); T.msg = pick(['The wind sulks. Watch again.', 'Asahi: No. Watch.']); T.phase = 'show'; T.at = -600; T.shown = -1; T.i = 0; }
            paintTask();
          };
          T.key = e => { const d = KEYDIR[e.key]; if (d) { T.input(d); return true; } return false; };
          T.click = b => { if (b.dataset.dir) { T.input(b.dataset.dir); return true; } return false; };
          T.html = () => `<p class="tr-tq">${esc(T.msg)}</p><div class="tr-seq">${T.seq.map((d, i) => {
            const on = T.phase === 'show' && i === T.shown, done = T.phase === 'input' && i < T.i;
            return `<i class="${on ? 'on' : done ? 'done' : ''}">${on || done ? DIRS4[d] : '•'}</i>`; }).join('')}</div>
            <div class="tr-pad">${['l', 'u', 'd', 'r'].map(d => `<button type="button" data-dir="${d}" ${T.phase !== 'input' ? 'disabled' : ''}>${DIRS4[d]}</button>`).join('')}</div>`;
          T.solve = () => { T.phase = 'input'; T.seq.slice(T.i).forEach(d => T.input(d)); };
          return T;
        },
        bench: c => {
          const T = { c, r: 0, rounds: BENCH.slice(0, D.rounds).map(b => ({ say: b.say, opts: shuffle(b.opts) })), msg: '' };
          T.choose = k => {
            const op = T.rounds[T.r] && T.rounds[T.r].opts[k]; if (!op) return;
            if (op[1]) { sfx('good'); T.r++; T.msg = ''; if (T.r >= T.rounds.length) return complete(T); }
            else { sfx('wrong'); vibeAdd(-3); T.msg = op[2]; }
            paintTask();
          };
          T.key = e => { if (/^[1-3]$/.test(e.key)) { T.choose(+e.key - 1); return true; } return false; };
          T.click = b => { if (b.dataset.opt) { T.choose(+b.dataset.opt); return true; } return false; };
          T.html = () => { const R = T.rounds[T.r]; return `<p class="tr-tq">${esc(R.say)}</p>${T.msg ? `<p class="tr-tmsg">${esc(T.msg)}</p>` : ''}
            <div class="tr-opts">${R.opts.map((op, k) => `<button type="button" data-opt="${k}"><kbd>${k + 1}</kbd> ${esc(op[0])}</button>`).join('')}</div>
            <small class="tr-prog">${T.r + 1} / ${T.rounds.length}</small>`; };
          T.solve = () => { while (!st.over && st.task === T) T.choose(T.rounds[T.r].opts.findIndex(op => op[1])); };
          return T;
        },
        angel: c => {
          const T = { c, good: 0, at: -1500, cyc: 0, ok: 0, tot: 0, held: false, ph: 'in', f: 0, msg: 'Lie down next to him. Hold (Space, or press and hold below) while the ring breathes in. Let go while it breathes out.' };
          T.tick = dt => {
            T.at += dt; if (T.at < 0) return;
            const cyc = Math.floor(T.at / 4800), w = T.at % 4800;
            if (cyc !== T.cyc) {
              const acc = T.tot ? T.ok / T.tot : 0;
              if (acc >= .7) { T.good++; sfx('good'); T.msg = pick(ANGEL_GOOD); if (T.good >= D.breaths) return complete(T); }
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
        duck: c => {
          const spots = [];
          for (let k = 0; k < 120 && spots.length < D.ducks; k++) {
            const a = Math.random() * TAU, r = rnd(150, 270), x = c.x + Math.cos(a) * r, y = c.y + Math.sin(a) * r;
            const prev = spots[spots.length - 1] || c;
            if (x > 60 && x < WW - 60 && y > 60 && y < WH - 60 && !inPond(x, y, 30) && Math.hypot(x - prev.x, y - prev.y) > 130) spots.push({ x, y });
          }
          while (spots.length < D.ducks) spots.push({ x: c.x + 160, y: c.y + 60 * spots.length });
          const T = { c, spots, i: 0, walk: true, msg: 'He’s filming a duck. There is no duck. Walk to the shimmer anyway.' };
          T.tick = () => {
            const s = T.spots[T.i]; if (!s) return;
            if (Math.hypot(st.p.x - s.x, st.p.y - s.y) < 48) {
              T.i++; vibeAdd(2); sfx('good'); cap('a quack, from nowhere');
              if (T.i >= T.spots.length) return complete(T);
              T.msg = pick(DUCK); paintTask();
            } else if (Math.hypot(st.p.x - c.x, st.p.y - c.y) > 560) cancelTask('Hyunsuk: Bro, you scared it off.');
          };
          T.key = () => false;
          T.html = () => `<p class="tr-tq">${esc(T.msg)}</p><small class="tr-prog">Duck ${Math.min(T.i + 1, T.spots.length)} / ${T.spots.length}</small>`;
          T.solve = () => { while (!st.over && st.task === T) { const s = T.spots[T.i]; st.p.x = s.x; st.p.y = s.y; T.tick(); } };
          return T;
        },
        moon: c => {
          const T = { c, q: 0, qs: MOON.slice(0, D.qs).map(m => ({ q: m.q, opts: shuffle(m.opts) })), msg: '', hint: D.hint };
          T.choose = k => {
            const op = T.qs[T.q] && T.qs[T.q].opts[k]; if (!op) return;
            if (op[1]) { sfx('good'); T.q++; T.msg = 'The moon nods.'; T.hint = D.hint; if (T.q >= T.qs.length) return complete(T); }
            else { sfx('wrong'); vibeAdd(-2); T.msg = pick(MOON_BAD); T.hint = true; }
            paintTask();
          };
          T.key = e => { if (/^[1-3]$/.test(e.key)) { T.choose(+e.key - 1); return true; } return false; };
          T.click = b => { if (b.dataset.opt) { T.choose(+b.dataset.opt); return true; } return false; };
          T.html = () => { const Q = T.qs[T.q], right = Q.opts.find(op => op[1])[0]; return `<p class="tr-tq">${esc(Q.q)}</p>${T.msg ? `<p class="tr-tmsg">${esc(T.msg)}</p>` : ''}
            ${T.hint ? `<p class="tr-hint">Nana whispers: it’s “${esc(right)}”. (Solar is bad at math. Nana is not.)</p>` : ''}
            <div class="tr-opts">${Q.opts.map((op, k) => `<button type="button" data-opt="${k}"><kbd>${k + 1}</kbd> ${esc(op[0])}</button>`).join('')}</div>
            <small class="tr-prog">${T.q + 1} / ${T.qs.length}</small>`; };
          T.solve = () => { while (!st.over && st.task === T) T.choose(T.qs[T.q].opts.findIndex(op => op[1])); };
          return T;
        },
        braid: c => {
          const T = { c, n: 0, next: 'l', msg: 'Cherry needs a hand. Cross the strands: left, right, left, right.' };
          T.input = s => {
            if (s === T.next) { T.n++; T.next = s === 'l' ? 'r' : 'l'; sfx('tick'); if (T.n >= D.braid) return complete(T); }
            else { T.n = Math.max(0, T.n - 1); vibeAdd(-2); sfx('wrong'); T.msg = 'Cherry: Over, under, Sol. Over, under.'; }
            paintTask();
          };
          T.key = e => { const d = KEYDIR[e.key]; if (d === 'l' || d === 'r') { T.input(d); return true; } return false; };
          T.click = b => { if (b.dataset.side) { T.input(b.dataset.side); return true; } return false; };
          T.html = () => `<p class="tr-tq">${esc(T.msg)}</p><div class="tr-braid">${Array.from({ length: D.braid }, (_, i) => `<i class="${i < T.n ? (i % 2 ? 'r' : 'l') : ''}"></i>`).join('')}</div>
            <div class="tr-pad two"><button type="button" data-side="l" class="${T.next === 'l' ? 'next' : ''}">← Left</button><button type="button" data-side="r" class="${T.next === 'r' ? 'next' : ''}">Right →</button></div>`;
          T.solve = () => { while (!st.over && st.task === T) T.input(T.next); };
          return T;
        },
      };
      const paintTask = () => {
        const T = st.task; if (!T) { taskEl.hidden = true; taskEl.innerHTML = ''; return; }
        taskEl.hidden = false; taskEl.dataset.k = T.c.task;
        taskEl.innerHTML = `<header><img src="${FACE(T.c.id)}" alt="" onerror="this.remove()"><b>${esc(T.c.name)}</b><span>${esc(T.c.doing)}</span>
          <button type="button" data-tk="leave">Walk away</button></header>${T.html()}`;
      };
      const startTask = c => {
        if (st.task || st.over) return;
        st.task = TASKS[c.task](c); st.task.kind = c.task;
        st.ptr = null; st.keys.clear();
        say(c.find, c.id); paintTask();
      };
      const complete = T => {
        if (st.task !== T) return;
        st.task = null; paintTask();
        const c = T.c; c.state = 'with'; c.order = ++st.order; st.coaxed++; st.crewV++;
        vibeAdd(6); sfx('join'); cap(`${c.name} takes your hand`); say(c.done, c.id);
        if (!calm && !still) st.flash = .5;
      };
      const cancelTask = msg => { if (!st.task) return; st.task = null; paintTask(); if (msg) say(msg); };
      const interact = () => {
        if (st.task || st.over || st.paused) return;
        const c = near(); if (!c) return false;
        if (c.again || c.state === 'drift') { c.state = 'with'; c.again = false; c.order = ++st.order; st.crewV++; sfx('join'); say(`${c.name} takes your hand again.`); return true; }
        startTask(c); return true;
      };
      const pet = () => {
        if (st.over || st.paused) return;
        const n = st.nana, d = Math.hypot(n.x - st.p.x, n.y - st.p.y);
        if (d > 170) { say('Nana is too far away to pet. He’s coming.'); return; }
        if (st.mt - n.petAt < 20000 && !st.tut) return;
        n.petAt = st.mt; n.hop = 1; st.pets++; vibeAdd(st.tut ? 0 : 10); sfx('pet'); cap('happy dog noises');
        say(pick(NANA_PET), 'nana');
        if (tp && tp.kind === 'nana') tp.ok();
      };
      const drink = () => {
        if (st.over || st.paused || st.water <= 0) return;
        st.water--; st.drinks++; vibeAdd(14); sfx('drink'); cap('glug');
        say(pick(['Solar drinks some water. It’s the best water anyone has ever made.', 'Water. Incredible. Who invented this.', 'Solar drinks. The stars get a little less loud.']));
      };

      /* lamps */
      const sing = l => {
        l.lit = 1; l.at = st.mt; st.lamps++; sfx('lamp', l); cap(`♪ the lamp hums ${l.name}`);
        if (tp && tp.kind === 'lamp') tp.ok();
        st.hits = st.hits.filter(h => st.mt - h.t < 5000 && h.i !== l.i); st.hits.push({ i: l.i, t: st.mt });
        if (st.hits.length >= 3 && st.mt - st.harmonyAt > 8000) {
          st.harmonyAt = st.mt; st.hits = []; st.harmonies++; if (!st.tut) vibeAdd(7);
          sfx('chord'); cap('♪ the lamps make a chord'); say('Three lamps, one chord. The whole park hums along.');
          if (!calm && !still) st.flash = .7;
        }
      };

      /* one step of the night (dt in ms) */
      const step = dt => {
        const s = dt / 1000;
        st.mt += dt;
        if (!st.tut) st.t += dt;
        const prog = clamp(st.t / LEN, 0, 1);
        const e8 = Math.floor(st.mt / EIGHTH); if (e8 !== st.e8) { st.e8 = e8; onEighth(e8); }
        let dh = (st.hueT - st.hue + 540) % 360 - 180; st.hue = (st.hue + dh * Math.min(1, s * (calm || still ? .25 : 1.1)) + 360) % 360;
        st.pulse = Math.max(0, st.pulse - s * 3); st.flash = Math.max(0, st.flash - s * 1.6);
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
        if (ml) {
          mx /= ml; my /= ml;
          const ox = st.p.x, oy = st.p.y;
          st.p.x += mx * SPEED * s; st.p.y += my * SPEED * s;
          if (inPond(st.p.x, st.p.y, 12)) { const q = Math.sqrt(((st.p.x - POND.x) / (POND.rx + 12)) ** 2 + ((st.p.y - POND.y) / (POND.ry + 12)) ** 2) || 1; st.p.x = POND.x + (st.p.x - POND.x) / q; st.p.y = POND.y + (st.p.y - POND.y) / q; }
          L.trees.forEach(t => { const dx = st.p.x - t.x, dy = st.p.y - t.y, d = Math.hypot(dx, dy); if (d < 16 && d > 0) { st.p.x = t.x + dx / d * 16; st.p.y = t.y + dy / d * 16; } });
          st.p.x = clamp(st.p.x, 40, WW - 40); st.p.y = clamp(st.p.y, 50, WH - 30);
          const moved = Math.hypot(st.p.x - ox, st.p.y - oy);
          if (Math.abs(mx) > .15) st.face = mx < 0 ? -1 : 1;
          st.walkPh += moved / 9; st.stillT = 0;
          if (st.tut && tp && tp.kind === 'walk' && (st.tutWalk += moved) >= 170) tp.ok();
        } else st.stillT += dt;
        const last = st.trail[st.trail.length - 1];
        if (!last || Math.hypot(st.p.x - last.x, st.p.y - last.y) > 12) { st.trail.push({ x: st.p.x, y: st.p.y }); if (st.trail.length > 300) st.trail.shift(); }
        // pickups, lamps
        L.bottles.forEach(b => { if (st.mt - b.gone > 45000 && st.water < 2 && Math.hypot(b.x - st.p.x, b.y - st.p.y) < 36) { b.gone = st.mt; st.water++; sfx('pick'); cap('a bottle clinks'); say(st.water === 1 ? 'A bottle of water, glowing a bit. Q to drink.' : 'Another bottle. Two is the most anyone can carry, apparently.'); } });
        L.lamps.forEach(l => { l.lit = Math.max(0, l.lit - s * .7); if (st.mt - l.at > 1600 && Math.hypot(l.x - st.p.x, l.y - st.p.y) < 80) sing(l); });
        // the vibe
        const nWith = crew.filter(c => c.state === 'with').length;
        const dHome = Math.hypot(st.p.x - HOME.x, st.p.y - HOME.y);
        const pq = pondQ(st.p.x, st.p.y);
        st.mirror = pq < 1.45 && st.stillT > 600;
        if (!st.tut && !st.over) {
          let d = D.drain * (1 + .55 * prog) * (nWith ? .7 : 1) * (st.task ? .8 : 1);
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
          c.state = 'drift'; c.again = true; st.letGo++; st.letGoAt = st.t; st.crewV++; say(c.letgo, c.id); cap(`${c.name} lets go`);
        }
        // the crew
        let k = 0;
        crew.filter(c => c.state === 'with').sort((a, b) => a.order - b.order).forEach(c => {
          k++; const tp2 = st.trail[Math.max(0, st.trail.length - 1 - k * 4)] || st.p;
          const dx = tp2.x - c.x, dy = tp2.y - c.y, d = Math.hypot(dx, dy);
          if (d > 8) { const v = Math.min(d, SPEED * 1.15 * s); c.x += dx / d * v; c.y += dy / d * v; c.face = dx < 0 ? -1 : 1; c.walk = (c.walk || 0) + v / 9; }
        });
        crew.forEach(c => {
          if (c.state === 'back') { const tx = HOME.x + c.seat[0], ty = HOME.y + c.seat[1], dx = tx - c.x, dy = ty - c.y, d = Math.hypot(dx, dy); if (d > 3) { const v = Math.min(d, 120 * s); c.x += dx / d * v; c.y += dy / d * v; } }
          if (c.state === 'drift') { const dx = c.hx - c.x, dy = c.hy - c.y, d = Math.hypot(dx, dy); if (d > 6) { const v = Math.min(d, 80 * s); c.x += dx / d * v; c.y += dy / d * v; c.face = dx < 0 ? -1 : 1; } else { c.state = 'out'; st.crewV++; } }
        });
        // onto the blanket
        if (nWith && dHome < BLANKET_R + 24 && !st.tut) {
          crew.filter(c => c.state === 'with').forEach(c => { c.state = 'back'; vibeAdd(6); say(c.back, c.id); });
          st.crewV++; sfx('back'); cap('everyone on the blanket cheers, softly');
          if (crew.every(c => c.state === 'back')) return finish('blanket');
        }
        // Nana
        const n = st.nana;
        if (st.mt - n.petAt > 1500) {
          const tx = st.p.x - st.face * 52, ty = st.p.y + 22, dx = tx - n.x, dy = ty - n.y, d = Math.hypot(dx, dy);
          if (d > 10) { const v = Math.min(d, (d > 200 ? 330 : 240) * s); n.x += dx / d * v; n.y += dy / d * v; n.face = dx < 0 ? -1 : 1; n.ph += v / 7; }
        }
        n.hop = Math.max(0, n.hop - s * 2.5); n.talk = Math.max(0, n.talk - s * .5);
        if (!st.tut && st.mt - n.sayAt > 0) { n.sayAt = st.mt + rnd(22000, 34000); if (!st.task) say(pick(st.curdle > .5 ? NANA_DARK : NANA), 'nana'); }
        // the task, the figure, the gust
        if (st.task && st.task.tick) st.task.tick(dt);
        const fa = st.curdle > .15 ? (st.curdle - .15) / .85 : 0;
        st.fig.a = lerp(st.fig.a, fa, Math.min(1, s * .6));
        if (st.fig.a > .3 && !st.fig.seen) { st.fig.seen = true; sfx('fig'); cap('a note too low to be music'); }
        if (st.gust) { st.gust.t += dt; if (st.gust.t > 700) st.gust = null; }
        // says
        if (st.sayEnd && st.mt >= st.sayEnd) { st.sayEnd = 0; nextSay(); }
        // the end
        if (!st.tut && !st.over) {
          if (st.zeroT >= D.zero * 1000) return finish('curdled');
          if (st.t >= LEN) return finish('sunrise');
        }
      };

      /* drawing */
      const shadow = (x, y, w, h) => {
        const len = 4 + st.curdle * 50;
        ctx.fillStyle = `rgba(4,0,6,${(.26 + st.curdle * .28).toFixed(3)})`;
        ctx.beginPath(); ctx.ellipse(x + len * .45, y + len * .22, w + len * .45, h, .45, 0, TAU); ctx.fill();
      };
      const person = (x, y, f, pose, ph, face, opt = {}) => {
        shadow(x, y, 15, 6);
        const t = st.mt / 1000;
        if (pose === 'lie') {
          const wing = still ? .4 : .4 + .35 * Math.sin(t * 1.6);
          ctx.strokeStyle = hsl(st.hue + 180, 70, 82, .55); ctx.lineWidth = 4;
          for (const sgn of [-1, 1]) { ctx.beginPath(); ctx.ellipse(x, y - 6 + sgn * 18, 26, 12, sgn * wing, 0, TAU); ctx.stroke(); }
          ctx.fillStyle = f.coat; ctx.beginPath(); ctx.ellipse(x + 6, y - 6, 24, 11, 0, 0, TAU); ctx.fill();
          ctx.fillStyle = f.skin; ctx.beginPath(); ctx.arc(x - 22, y - 6, 10, 0, TAU); ctx.fill();
          ctx.fillStyle = f.hair; ctx.beginPath(); ctx.arc(x - 26, y - 6, 9, Math.PI * .5, Math.PI * 1.5); ctx.fill();
          if (f.streak) { ctx.fillStyle = f.streak; ctx.fillRect(x - 33, y - 9, 6, 3); }
          return;
        }
        const step2 = opt.walk ? Math.sin(ph) : 0;
        const bob = still ? 0 : (opt.walk ? Math.abs(step2) * 2 : 0) + (pose === 'bow' ? Math.max(0, Math.sin(t * 2.4 + ph)) * 6 : 0);
        ctx.strokeStyle = '#140a10'; ctx.lineWidth = 4; ctx.lineCap = 'round';
        ctx.beginPath(); ctx.moveTo(x - 5, y - 10); ctx.lineTo(x - 5 + step2 * 4, y); ctx.moveTo(x + 5, y - 10); ctx.lineTo(x + 5 - step2 * 4, y); ctx.stroke();
        ctx.fillStyle = f.coat; ctx.beginPath(); ctx.ellipse(x, y - 24, 12, 17, 0, 0, TAU); ctx.fill();
        // arms
        ctx.strokeStyle = f.coat; ctx.lineWidth = 5;
        ctx.beginPath();
        if (pose === 'conduct') {
          const a = still ? 0 : Math.sin(t * 3 + ph) * .7;
          ctx.moveTo(x - 9, y - 30); ctx.lineTo(x - 22 + a * 6, y - 52 - a * 6); ctx.moveTo(x + 9, y - 30); ctx.lineTo(x + 22 - a * 8, y - 50 + a * 8);
          ctx.stroke(); ctx.strokeStyle = '#f4ecd8'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(x + 22 - a * 8, y - 50 + a * 8); ctx.lineTo(x + 34 - a * 4, y - 66 + a * 10);
        } else if (pose === 'braid' || pose === 'phone') {
          ctx.moveTo(x - 9, y - 30); ctx.lineTo(x + face * 14 - 4, y - 36); ctx.moveTo(x + 9, y - 30); ctx.lineTo(x + face * 18, y - 38);
        } else { ctx.moveTo(x - 10, y - 30); ctx.lineTo(x - 13, y - 14 + step2 * 3); ctx.moveTo(x + 10, y - 30); ctx.lineTo(x + 13, y - 14 - step2 * 3); }
        ctx.stroke();
        const hy = y - 46 - bob * .2 + (pose === 'bow' ? bob : 0) - (pose === 'moon' ? 3 : 0);
        ctx.fillStyle = f.skin; ctx.beginPath(); ctx.arc(x, hy, 10.5, 0, TAU); ctx.fill();
        ctx.fillStyle = f.hair; ctx.beginPath(); ctx.arc(x, hy - 2, 11.5, Math.PI * 1.05, Math.PI * 1.95); ctx.lineTo(x + face * 9, hy + 2); ctx.closePath(); ctx.fill();
        if (f.streak) { ctx.fillStyle = f.streak; ctx.fillRect(x - 6, hy - 12, 3, 7); ctx.fillRect(x + 3, hy - 12, 3, 6); }
        if (pose === 'phone') { ctx.fillStyle = `rgba(255,255,255,${.6 + .3 * Math.sin(t * 4)})`; ctx.fillRect(x + face * 18 - 4, y - 46, 8, 11); }
        if (pose === 'moon' && !still) {
          ctx.font = 'italic 700 15px Georgia, serif'; ctx.textAlign = 'center';
          ['∫', 'dx', 'π', 'lim', 'Σ'].forEach((g, i) => { const k = ((t * .35 + i / 5 + ph) % 1); ctx.fillStyle = hsl(st.hue + i * 60, 80, 80, 1 - k); ctx.fillText(g, x + Math.sin(i * 2 + t) * 20, hy - 20 - k * 70); });
        }
      };
      const nanaDraw = () => {
        const n = st.nana, x = n.x, y = n.y - n.hop * 12, f = n.face, t = st.mt / 1000;
        shadow(n.x, n.y, 34, 10);
        if (ARTOK.nana) { const im = ARTOK.nana, w = 120, h = w * im.height / im.width; ctx.save(); ctx.translate(x, y); ctx.scale(f, 1); ctx.drawImage(im, -w / 2, -h, w, h); ctx.restore(); }
        else {
          const lg = still ? 0 : Math.sin(n.ph) * 5;
          ctx.strokeStyle = '#e8e2dc'; ctx.lineWidth = 5; ctx.lineCap = 'round';
          ctx.beginPath(); [-20, -8, 10, 22].forEach((ox, i) => { ctx.moveTo(x + ox, y - 18); ctx.lineTo(x + ox + (i % 2 ? lg : -lg), y); }); ctx.stroke();
          const fur = hsl(st.hue + 200, 25, 94);
          ctx.fillStyle = fur;
          [[-22, -28, 15], [-8, -34, 17], [8, -32, 17], [20, -26, 14], [-2, -22, 16], [-30, -36, 9]].forEach(([ox, oy, r]) => { ctx.beginPath(); ctx.arc(x + ox * f, y + oy, r, 0, TAU); ctx.fill(); });
          ctx.beginPath(); ctx.arc(x + 30 * f, y - 40, 15, 0, TAU); ctx.fill();
          ctx.beginPath(); ctx.moveTo(x + 22 * f, y - 50); ctx.lineTo(x + 25 * f, y - 62); ctx.lineTo(x + 31 * f, y - 52); ctx.moveTo(x + 33 * f, y - 52); ctx.lineTo(x + 39 * f, y - 62); ctx.lineTo(x + 41 * f, y - 48); ctx.fill();
          ctx.fillStyle = '#140a10';
          ctx.beginPath(); ctx.arc(x + 43 * f, y - 38, 3, 0, TAU); ctx.arc(x + 31 * f, y - 43, 2, 0, TAU); ctx.arc(x + 38 * f, y - 44, 2, 0, TAU); ctx.fill();
        }
        if (n.talk > 0) { ctx.fillStyle = `rgba(255,79,158,${n.talk.toFixed(2)})`; ctx.font = '900 18px system-ui'; ctx.textAlign = 'center'; ctx.fillText('…', x + 34 * f, y - 66 - (still ? 0 : Math.sin(t * 6) * 2)); }
      };
      const tree = tr => {
        const t = st.mt / 1000, br = still ? 1 : 1 + .07 * Math.sin(t * .9 + tr.ph) + st.pulse * .025;
        shadow(tr.x, tr.y, tr.r * .6, tr.r * .25);
        ctx.fillStyle = '#2a1810'; ctx.fillRect(tr.x - 6, tr.y - 24, 12, 26);
        const cy = tr.y - tr.r * .95, r = tr.r * br;
        if (tr.willow) {
          ctx.lineWidth = 3;
          for (let i = 0; i < 22; i++) {
            const a = i / 22 * TAU, sx = tr.x + Math.cos(a) * r * .8, sy = cy + Math.sin(a) * r * .5, sway = still ? 0 : Math.sin(t * 1.2 + i) * 6;
            const braided = st.task && st.task.kind === 'braid' ? i < st.task.n * 2 : crew.find(c => c.id === 'cherry').state !== 'out';
            ctx.strokeStyle = braided ? hsl(st.hue + i * 30, 85, 65, .9) : hsl(st.hue + tr.h, 55, 45, .8);
            ctx.beginPath(); ctx.moveTo(sx, sy); ctx.quadraticCurveTo(sx + sway, sy + 40, sx + sway * 1.5, sy + 80); ctx.stroke();
          }
        }
        ctx.fillStyle = hsl(st.hue + tr.h, 62, 34); ctx.beginPath(); ctx.arc(tr.x, cy, r, 0, TAU); ctx.fill();
        ctx.fillStyle = hsl(st.hue + tr.h + 28, 78, 52, .85); ctx.beginPath(); ctx.arc(tr.x - r * .22, cy - r * .2, r * .6, 0, TAU); ctx.fill();
        ctx.fillStyle = 'rgba(248,242,255,.55)'; ctx.beginPath(); ctx.arc(tr.x - r * .1, cy - r * .35, r * .55, Math.PI * 1.05, Math.PI * 1.9); ctx.fill();
      };
      const lampDraw = l => {
        ctx.strokeStyle = '#1a0d14'; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(l.x, l.y); ctx.lineTo(l.x, l.y - 74); ctx.stroke();
        ctx.fillStyle = hsl(l.hue + st.hue * .3, 90, 70 + l.lit * 22); ctx.beginPath(); ctx.arc(l.x, l.y - 78, 9 + l.lit * 4, 0, TAU); ctx.fill();
        if (l.lit > .2) { ctx.fillStyle = hsl(l.hue + st.hue * .3, 90, 82, l.lit); ctx.font = '900 18px system-ui'; ctx.textAlign = 'center'; ctx.fillText('♪', l.x + 12, l.y - 92 - (1 - l.lit) * 30); }
      };
      const bench = b => { shadow(b.x, b.y, 36, 8); ctx.fillStyle = '#4a2a1e'; ctx.fillRect(b.x - 36, b.y - 18, 72, 12); ctx.fillRect(b.x - 36, b.y - 30, 72, 6); ctx.fillStyle = '#2a160f'; ctx.fillRect(b.x - 32, b.y - 6, 5, 8); ctx.fillRect(b.x + 27, b.y - 6, 5, 8); ctx.fillStyle = 'rgba(248,242,255,.6)'; ctx.fillRect(b.x - 34, b.y - 21, 68, 3); };
      const bottle = b => {
        const g = still ? .7 : .55 + .35 * Math.sin(st.mt / 300 + b.x);
        ctx.fillStyle = hsl(st.hue + 160, 90, 75, g * .35); ctx.beginPath(); ctx.arc(b.x, b.y - 10, 18, 0, TAU); ctx.fill();
        ctx.fillStyle = hsl(195, 80, 80, .95); ctx.fillRect(b.x - 5, b.y - 22, 10, 20); ctx.fillStyle = '#ff4f9e'; ctx.fillRect(b.x - 3, b.y - 26, 6, 4);
      };
      const blanket = () => {
        const x = HOME.x, y = HOME.y;
        ctx.save(); ctx.translate(x, y); ctx.rotate(-.06);
        if (ARTOK.blanket) ctx.drawImage(ARTOK.blanket, -80, -53, 160, 106);
        else {
          ctx.fillStyle = hsl(st.hue + 330, 70, 52); ctx.fillRect(-80, -53, 160, 106);
          ctx.fillStyle = hsl(st.hue + 300, 60, 34, .55);
          for (let i = -80; i < 80; i += 26) ctx.fillRect(i, -53, 10, 106);
          for (let j = -53; j < 53; j += 26) ctx.fillRect(-80, j, 160, 10);
          ctx.strokeStyle = 'rgba(255,240,248,.7)'; ctx.lineWidth = 2; ctx.strokeRect(-80, -53, 160, 106);
        }
        ctx.fillStyle = '#14070f'; ctx.fillRect(56, -42, 16, 26); ctx.fillStyle = hsl(st.hue, 90, 70, .6 + st.pulse * .4); ctx.fillRect(58, -40, 12, 18);
        ctx.restore();
        if (!still && !perf && st.pulse > .95 && Math.random() < .5) st.notes.push({ x: x + 64, y: y - 50, a: 1, h: st.hue + Math.random() * 120, dx: rnd(-14, 14) });
        st.notes = st.notes.filter(n => (n.a -= .012) > 0);
        ctx.font = '900 18px system-ui'; ctx.textAlign = 'center';
        st.notes.forEach(n => { n.y -= .8; n.x += n.dx * .02; ctx.fillStyle = hsl(n.h, 90, 75, n.a); ctx.fillText('♪', n.x, n.y); });
      };
      const pond = () => {
        const P = POND, t = st.mt / 1000;
        ctx.save(); ctx.beginPath(); ctx.ellipse(P.x, P.y, P.rx, P.ry, 0, 0, TAU);
        ctx.fillStyle = hsl(st.hue + 220, 55, 9); ctx.fill(); ctx.clip();
        const nseg = perf ? 8 : 16, rot = still ? 0 : t * (calm ? .04 : .13);
        for (let i = 0; i < nseg; i++) {
          const a0 = rot + i / nseg * TAU, a1 = a0 + TAU / nseg;
          ctx.beginPath(); ctx.moveTo(P.x, P.y); ctx.lineTo(P.x + Math.cos(a0) * P.rx * 1.2, P.y + Math.sin(a0) * P.rx * 1.2); ctx.lineTo(P.x + Math.cos(a1) * P.rx * 1.2, P.y + Math.sin(a1) * P.rx * 1.2); ctx.closePath();
          ctx.fillStyle = hsl(st.hue + (i % 2 ? 40 : 200) + i * 9, 72, 26 + (i % 2) * 14, .38 + st.pulse * .08); ctx.fill();
        }
        for (let k = 0; k < 4; k++) {
          const r = still ? 50 + k * 55 : ((t * 38 + k * 62) % 248);
          ctx.strokeStyle = hsl(st.hue + k * 50, 80, 75, (1 - r / 248) * .55); ctx.lineWidth = 2;
          ctx.beginPath(); ctx.ellipse(P.x, P.y, r, r * P.ry / P.rx, 0, 0, TAU); ctx.stroke();
        }
        // the mirror: a kinder Solar looks back
        const pq = pondQ(st.p.x, st.p.y);
        if (pq < 1.8) {
          const a = clamp((1.8 - pq) / .6, 0, 1) * (st.mirror ? .75 : .45);
          ctx.globalAlpha = a; ctx.save(); ctx.translate(st.p.x, P.y + (P.y - st.p.y) * .35 + 30); ctx.scale(1, -1);
          person(0, 0, { coat: hsl(st.hue + 140, 80, 70), hair: hsl(st.hue + 40, 70, 60), skin: SOLAR.skin }, 'stand', 0, st.face);
          ctx.restore(); ctx.globalAlpha = 1;
        }
        ctx.restore();
        ctx.strokeStyle = hsl(st.hue + 300, 60, 75, .4); ctx.lineWidth = 3; ctx.beginPath(); ctx.ellipse(P.x, P.y, P.rx, P.ry, 0, 0, TAU); ctx.stroke();
      };
      const label = (x, y, txt, hot) => {
        ctx.font = '800 14px system-ui'; ctx.textAlign = 'center';
        const w = ctx.measureText ? (ctx.measureText(txt).width || 60) + 14 : 70;
        ctx.fillStyle = hot ? '#ff4f9e' : 'rgba(20,7,15,.82)'; ctx.fillRect(x - w / 2, y - 15, w, 20);
        ctx.fillStyle = hot ? '#14070f' : '#ffd1e6'; ctx.fillText(txt, x, y);
      };
      const paint = () => {
        fit();
        cam.x = lerp(cam.x, clamp(st.p.x, cw / 2 / sc, WW - cw / 2 / sc), still ? 1 : .12);
        cam.y = lerp(cam.y, clamp(st.p.y - 30, ch / 2 / sc, WH - ch / 2 / sc), still ? 1 : .12);
        if (cw / sc > WW) cam.x = WW / 2; if (ch / sc > WH) cam.y = WH / 2;
        paintHud();
        if (!ctx) return;
        const t = st.mt / 1000, prog = clamp(st.t / LEN, 0, 1), dawn = st.over && st.ending === 'blanket' ? clamp(.5 + st.endT / 2500, 0, 1) : clamp((prog - .75) / .25, 0, 1) * .7;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, cw, ch);
        ctx.setTransform(dpr * sc, 0, 0, dpr * sc, dpr * (cw / 2 - cam.x * sc), dpr * (ch / 2 - cam.y * sc));
        // ground: snow, coloured patches that breathe with the music, paths
        ctx.fillStyle = hsl(st.hue + 250, 32, 11 + dawn * 16, .84); ctx.fillRect(0, 0, WW, WH);
        L.blobs.forEach(b => {
          if (!vis(b.x, b.y, b.r)) return;
          const r = b.r * (still ? 1 : 1 + .06 * Math.sin(t * .6 + b.ph) + st.pulse * .02);
          if (perf) { ctx.fillStyle = hsl(st.hue + b.h, 60, 40, .1); ctx.beginPath(); ctx.arc(b.x, b.y, r * .8, 0, TAU); ctx.fill(); return; }
          const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, r); g.addColorStop(0, hsl(st.hue + b.h, 78, 56, .2)); g.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = g; ctx.fillRect(b.x - r, b.y - r, r * 2, r * 2);
        });
        ctx.strokeStyle = hsl(st.hue + 200, 30, 85, .1); ctx.lineWidth = 56; ctx.lineCap = 'round';
        ctx.beginPath(); ctx.ellipse(HOME.x, HOME.y - 150, 820, 560, 0, 0, TAU);
        crew.forEach(c => { ctx.moveTo(HOME.x, HOME.y); ctx.lineTo(c.hx, c.hy); }); ctx.stroke();
        pond();
        // lamp light pools
        if (!perf) ctx.globalCompositeOperation = 'lighter';
        L.lamps.forEach(l => {
          if (!vis(l.x, l.y, 200)) return;
          const r = (150 + l.lit * 60) * (1 - st.curdle * .35), a = (.2 + l.lit * .3 + st.pulse * .04) * (1 - st.curdle * .55);
          if (perf) { ctx.fillStyle = hsl(l.hue + st.hue * .3, 90, 60, a * .5); ctx.beginPath(); ctx.arc(l.x, l.y - 10, r * .7, 0, TAU); ctx.fill(); return; }
          const g = ctx.createRadialGradient(l.x, l.y - 10, 0, l.x, l.y - 10, r); g.addColorStop(0, hsl(l.hue + st.hue * .3, 90, 62, a)); g.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = g; ctx.fillRect(l.x - r, l.y - 10 - r, r * 2, r * 2);
        });
        // trails
        if (!still && !perf) {
          if (st.moving && st.mt - st.fxAt > 45) { st.fxAt = st.mt; st.fx.push({ x: st.p.x, y: st.p.y - 26, h: st.hue + Math.random() * 90, a: 1 }); crew.forEach(c => { if (c.state === 'with') st.fx.push({ x: c.x, y: c.y - 26, h: st.hue + 180, a: .7 }); }); }
          st.fx = st.fx.filter(f => (f.a -= calm ? .03 : .022) > 0).slice(-80);
          st.fx.forEach(f => { ctx.fillStyle = hsl(f.h, 95, 65, f.a * (calm ? .18 : .3)); ctx.beginPath(); ctx.arc(f.x, f.y, 12 + (1 - f.a) * 10, 0, TAU); ctx.fill(); });
        }
        ctx.globalCompositeOperation = 'source-over';
        // the gust (Asahi's wind)
        if (st.gust) {
          const g = st.gust, a = 1 - g.t / 700, c = crew[0], v = { l: [-1, 0], r: [1, 0], u: [0, -1], d: [0, 1] }[g.dir];
          ctx.strokeStyle = hsl(st.hue + 120, 90, 85, a * .8); ctx.lineWidth = 4;
          for (let i = 0; i < 5; i++) { const ox = c.x + (i - 2) * 14 * v[1], oy = c.y - 40 + (i - 2) * 14 * v[0], d = 40 + g.t / 6; ctx.beginPath(); ctx.moveTo(ox + v[0] * d * .3, oy + v[1] * d * .3); ctx.lineTo(ox + v[0] * d, oy + v[1] * d); ctx.stroke(); }
        }
        blanket();
        // the scene, back to front
        const items = [];
        L.trees.forEach(tr => { if (vis(tr.x, tr.y, tr.r * 2)) items.push([tr.y, () => tree(tr)]); });
        L.lamps.forEach(l => { if (vis(l.x, l.y, 100)) items.push([l.y, () => lampDraw(l)]); });
        L.benches.forEach(b => { if (vis(b.x, b.y, 60)) items.push([b.y, () => bench(b)]); });
        L.bottles.forEach(b => { if (st.mt - b.gone > 45000 && vis(b.x, b.y, 30)) items.push([b.y, () => bottle(b)]); });
        const nb = near();
        crew.forEach(c => {
          if (!vis(c.x, c.y, 80)) return;
          const pose = c.state === 'out' && !c.again ? c.pose : 'stand';
          items.push([c.y, () => {
            person(c.x, c.y, c, pose, c.state === 'with' ? (c.walk || 0) : c.ph, c.face || 1, { walk: c.state === 'with' || c.state === 'drift' });
            if (c.state === 'out' || c.state === 'drift') label(c.x, c.y - (pose === 'lie' ? 34 : 72), nb === c && !st.task ? `${c.name} · E` : c.name, nb === c && !st.task);
          }]);
        });
        if (st.task && st.task.kind === 'duck') {
          const s2 = st.task.spots[st.task.i];
          if (s2) items.push([s2.y, () => {
            const a = still ? .8 : .5 + .4 * Math.sin(t * 5);
            ctx.fillStyle = hsl(st.hue + 60, 95, 70, a * .4); ctx.beginPath(); ctx.arc(s2.x, s2.y - 10, 26, 0, TAU); ctx.fill();
            ctx.fillStyle = hsl(52, 95, 70, a); ctx.beginPath(); ctx.ellipse(s2.x, s2.y - 8, 13, 9, 0, 0, TAU); ctx.arc(s2.x + 10, s2.y - 18, 6, 0, TAU); ctx.fill();
            ctx.fillStyle = hsl(25, 95, 60, a); ctx.fillRect(s2.x + 15, s2.y - 19, 6, 3);
          }]);
        }
        items.push([st.p.y, () => person(st.p.x, st.p.y, SOLAR, 'stand', st.walkPh, st.face, { walk: st.moving })]);
        items.push([st.nana.y, nanaDraw]);
        items.sort((a, b) => a[0] - b[0]).forEach(i => i[1]());
        // screen space: snow, light closing in, the figure, dawn, flashes
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.fillStyle = 'rgba(250,246,255,.7)';
        st.flakes.forEach(f => {
          if (!still && !st.paused) { f.y += f.v / 60; f.x += Math.sin(t + f.w) * .3; if (f.y > ch) { f.y = -4; f.x = Math.random() * cw; } }
          ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, TAU); ctx.fill();
        });
        const sp = toScreen(st.p.x, st.p.y - 30), m = Math.min(cw, ch);
        const R0 = m * (.78 - .46 * st.curdle), R1 = R0 + m * (.55 - .2 * st.curdle);
        const vg = ctx.createRadialGradient(sp.x, sp.y, R0 * .55, sp.x, sp.y, R1);
        vg.addColorStop(0, 'rgba(5,0,4,0)'); vg.addColorStop(1, `rgba(5,0,4,${(.4 + .55 * st.curdle).toFixed(3)})`);
        ctx.fillStyle = vg; ctx.fillRect(0, 0, cw, ch);
        if (st.fig.a > .02) {
          const ang = Math.atan2(st.p.y - HOME.y, st.p.x - HOME.x) + (still ? 0 : Math.sin(t * .13) * .5) || -.8;
          const fx = sp.x + Math.cos(ang) * R0 * .98, fy = sp.y + Math.sin(ang) * R0 * .98, h = 120 * sc + 40;
          ctx.fillStyle = `rgba(8,2,6,${(st.fig.a * .9).toFixed(3)})`;
          if (!perf) { ctx.shadowColor = 'rgba(0,0,0,.9)'; ctx.shadowBlur = 18; }
          ctx.beginPath(); ctx.ellipse(fx, fy - h * .92, h * .08, h * .1, 0, 0, TAU); ctx.fill();
          ctx.beginPath(); ctx.moveTo(fx - h * .12, fy - h * .8); ctx.lineTo(fx + h * .12, fy - h * .8); ctx.lineTo(fx + h * .07, fy); ctx.lineTo(fx - h * .07, fy); ctx.closePath(); ctx.fill();
          ctx.shadowBlur = 0;
          ctx.strokeStyle = `rgba(8,2,6,${(st.fig.a * .5).toFixed(3)})`; ctx.lineWidth = h * .1;
          ctx.beginPath(); ctx.moveTo(fx, fy); ctx.lineTo(lerp(fx, sp.x, .5 * st.curdle), lerp(fy, sp.y + 30, .5 * st.curdle)); ctx.stroke();
        }
        if (dawn > 0) {
          const dg = ctx.createLinearGradient(0, 0, 0, ch); dg.addColorStop(0, `rgba(255,170,140,${(dawn * .45).toFixed(3)})`); dg.addColorStop(1, `rgba(255,120,170,${(dawn * .12).toFixed(3)})`);
          if (!perf) ctx.globalCompositeOperation = 'screen'; ctx.fillStyle = dg; ctx.fillRect(0, 0, cw, ch); ctx.globalCompositeOperation = 'source-over';
        }
        if (st.flash > 0 && !calm && !still) { ctx.fillStyle = hsl(st.hue, 90, 80, st.flash * .18); ctx.fillRect(0, 0, cw, ch); }
        // the palette drains
        if (!perf && cv) { const f = `saturate(${(1 - st.curdle * .85).toFixed(2)}) brightness(${(1 - st.curdle * .22).toFixed(2)})`; if (cv.style.filter !== f) cv.style.filter = f; }
      };

      /* HUD */
      let hudV = -1, sunSec = -1;
      const paintHud = () => {
        el.style.setProperty('--hue', `${st.hue.toFixed(0)}deg`);
        el.style.setProperty('--curdle', st.curdle.toFixed(3));
        const vb = $('.tr-vibe i'); if (vb) vb.style.width = `${st.vibe.toFixed(1)}%`;
        $('.tr-vibe').classList.toggle('low', st.vibe < 35);
        $('.tr-vibe').classList.toggle('zero', st.vibe <= .01 && !st.tut);
        const prog = clamp(st.t / LEN, 0, 1), dot = $('.tr-sundot');
        if (dot) { const u = prog * .5, x = (1 - u) * (1 - u) * 6 + 2 * (1 - u) * u * 60 + u * u * 114, y = (1 - u) * (1 - u) * 40 + 2 * (1 - u) * u * -14 + u * u * 40; dot.setAttribute('cx', x.toFixed(1)); dot.setAttribute('cy', y.toFixed(1)); }
        const left = Math.max(0, Math.ceil((LEN - st.t) / 1000));
        if (left !== sunSec) { sunSec = left; const b = $('.tr-sun b'); if (b) b.textContent = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`; }
        if (hudV !== st.crewV) {
          hudV = st.crewV;
          crew.forEach(c => { const li = el.querySelector(`.tr-crew [data-c="${c.id}"]`); if (li) li.dataset.s = c.state; });
        }
        const nb = !st.task && !st.over ? near() : null, cb = $('.tr-coax');
        if (cb) { cb.hidden = !nb; if (nb) { const txt = nb.again || nb.state === 'drift' ? `Take ${nb.name}’s hand` : `Coax ${nb.name}`; if (cb.dataset.t !== txt) { cb.dataset.t = txt; cb.innerHTML = `${esc(txt)} <kbd>E</kbd>`; } } }
        const pb = $('.tr-pet'); if (pb) { const cd = clamp(1 - (st.mt - st.nana.petAt) / 20000, 0, 1); pb.style.setProperty('--cd', st.tut ? 0 : cd.toFixed(3)); pb.classList.toggle('far', Math.hypot(st.nana.x - st.p.x, st.nana.y - st.p.y) > 170); }
        const db = $('.tr-drink'); if (db) { db.disabled = st.water <= 0; const b = db.querySelector('b'); if (b && b.textContent !== String(st.water)) b.textContent = String(st.water); }
        sayEl.classList.toggle('echo', st.curdle > .4);
        // pins at the edge for anyone out of sight
        const mg = 30, anyWith = crew.some(c => c.state === 'with');
        const pin = (id, x, y, show) => {
          const p = pins[id]; if (!p) return;
          const s2 = toScreen(x, y - 30), off = s2.x < mg || s2.x > cw - mg || s2.y < 70 || s2.y > ch - mg;
          if (!show || !off || st.over) { if (!p.hidden) p.hidden = true; return; }
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

      /* the end */
      const finish = ending => {
        if (st.over) return; st.over = true; st.ending = ending;
        st.task = null; paintTask(); st.keys.clear(); st.ptr = null; st.markAt = null;
        const back = crew.filter(c => c.state === 'back');
        const won = ending === 'blanket', quit = ending === 'quit';
        const avg = st.n ? st.sum / st.n : st.vibe;
        const grade = won ? (st.min >= 25 && avg >= 65 ? 'S' : avg >= 45 ? 'A' : 'B') : 'C';
        const res = { won, grade, ending, quit, back: back.length, crew: back.map(c => c.id), vibe: Math.round(avg), low: Math.round(st.min), letGo: st.letGo,
          lamps: st.lamps, harmonies: st.harmonies, pets: st.pets, drinks: st.drinks, secs: Math.round(st.t / 1000), tutorial: tutRes };
        st.result = res;
        if (won) { sfx('dawn'); cap('a warm chord, the sun coming up'); } else if (!quit) { sfx('down'); cap('the music stops'); }
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
          const end = $('.mg-end'); end.hidden = false;
          end.innerHTML = `<p class="tr-end-head">${esc(head)}</p><b class="mg-grade">${grade}</b>
            <dl><dt>On the blanket</dt><dd>${back.length} / 6</dd><dt>Lowest vibe</dt><dd>${Math.round(st.min)}</dd><dt>Lamps sung</dt><dd>${st.lamps}</dd><dt>Pets for Nana</dt><dd>${st.pets}</dd></dl>
            <p class="mg-end-say">${esc(line)}</p><button type="button">Continue</button>`;
          const b = end.querySelector('button'); b.focus?.(); b.onclick = cont;
        };
        const cont = () => { if (st.closed) return; st.closed = true; cleanup(); o.onDone?.(res); done(res); };
        st.cont = cont;
        quit ? show() : later(show, won ? 2200 : 1800);
      };

      /* input */
      const blocked = e => !st.begun || st.over || st.paused || (e && e.target && e.target.closest && e.target.closest('.mg-pause, .mg-end, .tr-title, .tr-task, .tr-acts, .tr-mt, .ftut'));
      const tapAt = (x, y) => {
        const w = toWorld(x, y);
        const c = crew.find(c2 => (c2.state === 'out' || c2.state === 'drift') && Math.hypot(c2.x - w.x, c2.y - 30 - w.y) < 50 && Math.hypot(c2.x - st.p.x, c2.y - st.p.y) < 110);
        if (c) { interact(); return true; }
        if (Math.hypot(st.nana.x - w.x, st.nana.y - 30 - w.y) < 50) { pet(); return true; }
        return false;
      };
      const ptrs = new Set();
      const down = e => {
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
        if (st.task && st.task.key && st.task.key(e, false)) { e.preventDefault(); return; }
        if (KEYDIR[e.key]) { e.preventDefault(); st.keys.add(KEYDIR[e.key]); return; }
        if (e.key === 'e' || e.key === 'E' || e.key === ' ' || e.key === 'Enter') { if (e.target && e.target.closest && e.target.closest('button') && e.key !== 'e' && e.key !== 'E') return; e.preventDefault(); interact(); return; }
        if (e.key === 'n' || e.key === 'N') { e.preventDefault(); pet(); return; }
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
      $('.tr-acts').onclick = e => { const b = e.target.closest && e.target.closest('button'); const a = b && b.dataset.a; if (a === 'coax') interact(); if (a === 'pet') pet(); if (a === 'drink') drink(); };
      taskEl.onclick = e => {
        const b = e.target.closest && e.target.closest('button'); if (!b || !st.task || st.paused) return;
        if (b.dataset.tk === 'leave') { cancelTask(); return; }
        st.task.click && st.task.click(b);
      };
      const holdBtn = on => e => { if (st.task && st.task.kind === 'angel' && e.target.closest && e.target.closest('.tr-hold')) { e.preventDefault(); st.task.held = on; } };
      taskEl.addEventListener('pointerdown', holdBtn(true)); taskEl.addEventListener('pointerup', holdBtn(false)); taskEl.addEventListener('pointerleave', () => { if (st.task && st.task.kind === 'angel') st.task.held = false; });
      window.addEventListener('keydown', key, true); window.addEventListener('keyup', keyUp, true);

      /* the first-time tutorial: no clock, no drain; walk, a lamp, Nana, then the rest */
      const practice = kind => new Promise(ok => { tp = { kind, ok: () => { tp = null; ok(); } }; });
      const tutSteps = replay => [
        { target: null, say: 'Hanlim Park, way past midnight. Everything is breathing. That’s fine. That’s normal tonight.' },
        { target: '.tr-mark', before: () => mark(st.p, -40), say: 'This is me. Walk with the <b>arrows / WASD</b>, or hold the mouse or a finger where you want to go. Try it.', wait: replay ? 'click' : () => practice('walk') },
        { target: '.tr-vibe', before: () => mark(st.p, -40), say: 'The <b>vibe</b>. It slips on its own. If it sits at nothing for too long, the night turns. Keep it up.' },
        { target: '.tr-mark', before: () => mark(L.lamps[0], -80), say: 'What helps: the <b>blanket’s music</b> (stand near it), and the streetlights hum when I walk past. Three different ones in a row make a chord. Walk past this one.', wait: replay ? 'click' : () => practice('lamp') },
        { target: '.tr-mark', before: () => mark(st.nana, -50), say: 'And <b>Nana</b>. He’s talking tonight, apparently. Pet him: <b>N</b>, the Pet button, or tap him.', wait: replay ? 'click' : () => practice('nana') },
        { target: '.tr-acts', before: () => { st.markAt = null; positionMark(); }, say: 'Water bottles glow where they fell: walk over one, then drink (<b>Q</b> or Water). Standing still at the pond’s edge helps too.' },
        { target: '.tr-crew', say: 'Everyone wandered off. Pink pins at the edge point to them. Get close, press <b>E / Space</b> (or tap them) and help with whatever they’re doing. Then they hold my hand: walk them back to the blanket.' },
        { target: '.tr-sun', say: 'All six on the blanket before the sun’s up. Esc pauses, and How to play shows this again.' },
      ];
      const tutEnd = () => {
        st.tut = false; tp = null; st.markAt = null; positionMark(); el.classList.remove('tut');
        Object.assign(st, { t: 0, vibe: 80, sum: 0, n: 0, min: 100, zeroT: 0, lamps: 0, pets: 0, harmonies: 0, hits: [], letGoAt: 0 });
        st.nana.petAt = -1e9; st.nana.sayAt = st.mt + 9000;
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
        if (sim) return start();
        st.tut = true;
        paint(); raf = RAF(tick);
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
        interact, pet, drink, solve: () => st.task && st.task.solve(),
        vibe: v => { st.vibe = v; }, pause, quit: () => { pause(false); finish('quit'); }, cont: () => st.cont && st.cont(),
        skip: begin, crew: () => crew,
      };
    });
  }
  return { play, DIFF, CREW, state: () => cur, ctl: () => cur && cur.ctl };
})();
