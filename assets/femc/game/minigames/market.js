/* FEMC epilogue minigame: the fish market at Incheon (Nov 11 2026). A DEMO: not in the story (try it at
   mockups/minigames/index.html). strangers, Feb-Mar 2013: Solar Lee (a shipping family the whole quay knows; she has read these
   tides since she was six) goes down to the fish market with the household's cook, Mrs. Bang, who tells the fish man what his
   flounder is actually worth. Light and tactile; no plot.

   FemcMarket.play({ host, mute, difficulty, budget, seed, bg, stallBg, still, onDone }) -> Promise<result>
     host        element to draw into (default document.body; a full-screen overlay is added inside it)
     mute        no sound at all (no AudioContext is made)
     difficulty  'easy' | 'normal' | 'hard' (default 'normal'):
                   tide window after the landing 40 / 25 / 15 min; the chart: the water-deep-enough stretch shaded / the curve
                   only / hourly dots only (read it from the table);
                   fish tells full / softer / faint (DIFF.subtle 1 / .62 / .38);
                   sellers' floors x .92 / 1 / 1.05 and patience +1 / 0 / 0; Mrs. Bang's whispers 3 / 2 / 1;
                   budget 115,000 / 100,000 / 90,000 won
     budget      override the purse (won)
     seed        a number: the same tide, fish and sellers every time (tests); default random
     bg          the dock picture under assets/femc/bg/ (default 'epi-s-harbor-tide'; a drawn harbour shows if missing)
     stallBg     the stalls' picture (default 'flashback-fish-market')
     still       force reduced motion (default: prefers-reduced-motion)
     onDone      called with the result too
   result = { won, grade: 'S'|'A'|'B'|'C', score, tide, arrived, landed, timing: 'early'|'ontime'|'late', minutes,
              quality, money, list, of, bought: [{ id, q: 'good'|'fair'|'bad'|null, paid, ask, worth, seller, rounds, lee, wavedOff, extra }],
              spent, saved, left, budget, wavedOff, whispers, difficulty, quit }
     tide / quality / money are 0-100; list = items bought of `of` (5); saved = their opening asks minus what was paid;
     minutes = how early (−) or late (+) against the window; won = not quit, 4+ items and grade above C.

   Part 1, read the tide: Mrs. Bang's tide table (low and high water), the morning's tide chart (4:00-10:00) and the radio's word
     on the Haesong-ho (off the breakwater at a time; it draws so many metres, so it ties up only once the water at the quay
     reaches its line). Drag the pin on the chart (or ← →, 5 min; Shift 15) to when you'll be on the quay; Set out (Enter).
     The morning plays out over the quay (the water climbing the ruler on the wall, the small boat, the Haesong, the other
     buyers, you). In the window (landing −5 … +window) = first pick. Early = safe but cold (tide 55-100). Late = the restaurant
     buyers got there first: the Haesong's fish (flounder, croaker, bream) lose their best specimens and ask more.
   Part 2, haggle at the stalls: Mrs. Bang's list (flounder, yellow croaker, squid, clams, a sea bream for Sunday) and a purse.
     At each stall three specimens on the ice, each with its own ticket. Judge them:
       fish   eyes clear and full (cloudy / sunken = old); tap the gills to lift them (bright red, not brown);
              press the flesh (springs back, or the dent stays)
       squid  eyes; the skin (glossy with brown speckles, not milky white); press
       clams  tap the bowl (live ones snap shut); the water (clear, not cloudy); the shells (wet and glossy, not chalky)
     (keys: 1-3 pick, G gills, P press, T tap, Enter haggle). Then haggle: drag the offer meter (← → 500 won, Shift 2,000) and
     Offer (Enter). At or above his floor he takes it (pay more than you had to and you overpaid); under it he counts down his
     patience (pips; a rude offer costs two) and comes down a little. Out of patience (never on the first offer) = he waves you off and Mrs. Bang buys a
     so-so one at the end of the row for over the odds. Pay his price any time; Ask Mrs. Bang shows what it's worth (whispers
     are limited; at the flounder stall she says it out loud for free). Leave it skips the item.
     Sellers: Mr. Cha (flounder, chatty, starts high), Grandma Yoon (croaker, tough, short patience), young Mr. Nam (squid, knows
     the Lee family: nervous, gives way), Mrs. Ok (clams, extra polite to the Lees, throws in extra), Mr. Ahn (sea bream, proud).
     Others may recognise Solar too (a little lower floor).
   Grade: score = tide 20% + quality 35% (good 100 / fair 60 / bad 15 / missing 0, over five) + money 25% (paid against what it
     was worth) + list 20%; S 88+, A 74+, B 55+, else C.
   Art (all optional; drawn stand-ins otherwise), assets/femc/game/art/minigames/market/<name>.webp:
     title       the title card (held 1.8 s; click / a key skips)
     dock        the quay picture behind part 1 (else the bg above, else a drawn harbour)
     stall       the market picture behind part 2 (else stallBg)
     seller-cha, seller-yoon, seller-nam, seller-ok, seller-ahn   each seller (else a drawn figure whose brows follow his mood)
     stamp-s / -a / -b / -c   the grade on the end card (else the big letter)
     The fish themselves stay drawn in code: their tells must change with difficulty.
   Faces in the talk strip: portraits/mrsbang-strangers/ and solar-strangers/ (neutral, happy, sad, serious, surprised, flustered).
   Sounds: Web Audio made here (sea, gulls, horn, ice, taps, coins, a grunt, a bell). Esc pauses (Resume / Quit). Touch works
   everywhere (pointer events). Reduced motion: no slides or bobbing, the morning plays out in a blink.
   Test hooks: FemcMarket.state(); FemcMarket.logic (the pure rules: tide, stalls, haggling, scoring). */
window.FemcMarket = (() => {
  const reduced = typeof matchMedia === 'function' ? matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const base = () => (window.FemcGame && window.FemcGame.base) || (typeof document !== 'undefined' && document.querySelector('script[src*="minigames/market"]')?.src.split('assets/')[0]) || '';
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const r500 = v => Math.round(v / 500) * 500;
  const won = v => '₩' + Math.round(v).toLocaleString('en-US');
  const hhmm = m => { const t = Math.round(m); return `${4 + Math.floor(t / 60)}:${String(((t % 60) + 60) % 60).padStart(2, '0')}`; }; // minutes from 4:00
  const mulberry = a => () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  const mix = (a, b, k) => { const p = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16)), A = p(a), B = p(b); return '#' + A.map((v, i) => Math.round(v + (B[i] - v) * clamp(k, 0, 1)).toString(16).padStart(2, '0')).join(''); };

  const DIFF = {
    easy:   { window: 40, chart: 'shade', subtle: 1,    floor: 0.92, patience: 1, whispers: 3, budget: 115000 },
    normal: { window: 25, chart: 'curve', subtle: 0.62, floor: 1,    patience: 0, whispers: 2, budget: 100000 },
    hard:   { window: 15, chart: 'dots',  subtle: 0.38, floor: 1.05, patience: 0, whispers: 1, budget: 90000 },
  };

  /* ── the list and the stalls ── */
  const ITEMS = [
    { id: 'flounder', name: 'Flounder', note: 'one, for slicing', fair: 15000, boat: true, kind: 'flounder', tells: ['eye', 'gill', 'firm'], seller: 'cha' },
    { id: 'croaker', name: 'Yellow croaker', note: 'a string of them', fair: 12000, boat: true, kind: 'croaker', tells: ['eye', 'gill', 'firm'], seller: 'yoon' },
    { id: 'squid', name: 'Squid', note: 'three', fair: 9000, boat: false, kind: 'squid', tells: ['eye', 'skin', 'firm'], seller: 'nam' },
    { id: 'clams', name: 'Clams', note: 'a net', fair: 8000, boat: false, kind: 'clams', tells: ['tap', 'water', 'shell'], seller: 'ok' },
    { id: 'bream', name: 'Sea bream', note: "Sunday's dinner", fair: 30000, boat: true, kind: 'bream', tells: ['eye', 'gill', 'firm'], seller: 'ahn' },
  ];
  const QV = { good: 1, fair: 0.7, bad: 0.4 };          // worth = fair price x this
  const QS = { good: 100, fair: 60, bad: 15 };          // quality points
  const SELLERS = {
    cha: { name: 'Mr. Cha', mood: 'chatty', ask: 1.55, floor: 0.9, patience: 4, leeP: 0.3, cap: '#3a3a40', coat: '#5a4a44', apron: '#2f6a5a',
      open: 'Flounder! Off the Haesong this morning, still arguing with me.', far: ['Ha! My wife would leave me if I sold it for that.', 'For that I would have to throw myself in after it.'],
      mid: ["You're breaking my heart. Slowly. Keep going.", 'Lower than that and the fish files a complaint.'], near: ["Hm. Hmm. You're cruel, you know that?", 'Ah. Almost. Almost.'],
      deal: 'Fine! Fine. Take it before I cry.', wave: 'No, no. Go on. Go buy a fish somewhere they like you.', leeLine: "Is that the Lee girl? Mrs. Bang, you brought the boss." },
    yoon: { name: 'Grandma Yoon', mood: 'tough', ask: 1.25, floor: 0.97, patience: 2, leeP: 0.3, cap: '#8a2a3a', coat: '#4a3a40', apron: '#5a5a5a', grey: true,
      open: "Croaker. Counted. Don't touch what you won't buy.", far: ['No.', 'Ha. No.'], mid: ['Still no.', 'Try again. Once.'], near: ['...Closer.', 'Mm.'],
      deal: 'Done. Next.', wave: 'Go. Next customer.', leeLine: 'I sold your grandmother croaker. She haggled worse.' },
    nam: { name: 'Mr. Nam', mood: 'nervous', ask: 1.35, floor: 0.82, patience: 3, leeP: 1, young: true, cap: '#ff4f9e', coat: '#3a3440', apron: '#2a4a6a',
      open: 'Squid, fresh, very fresh, very... oh. Good morning, Miss Lee.', far: ["That's... I mean... I'd have to ask my uncle.", "My uncle's right there. He can hear you."],
      mid: ['Could we maybe meet in the middle-ish?', 'I could... a little. A little.'], near: ["Okay. Okay, that's almost okay.", 'So close. Please be a little closer.'],
      deal: 'Thank you! Please say hello to... everyone.', wave: "I'm so sorry, I can't, my uncle would actually kill me.", leeLine: '' },
    ok: { name: 'Mrs. Ok', mood: 'polite', ask: 1.2, floor: 0.88, patience: 3, leeP: 1, cap: '#c25a7a', coat: '#6a4a54', apron: '#a0503a',
      open: 'Clams from Yeongjong, Miss Lee. Still spitting. Let me find you the best.', far: ["Ah, for the Lee house I'd love to, but my husband counts the till.", 'Oh, dear. No.'],
      mid: ["A little more, and I'll put extra in.", 'Nearly, nearly.'], near: ['For you, I can almost do that.', 'One more step, dear.'],
      deal: 'And a handful more, for the house. No, no, take them.', wave: 'Another time, dear. Another time.', leeLine: '' },
    ahn: { name: 'Mr. Ahn', mood: 'proud', ask: 1.45, floor: 0.95, patience: 2, leeP: 0.3, cap: '#e8e0d0', coat: '#3a2a30', apron: '#7a2a2a',
      open: 'Sea bream. From the tank to your table. The best fish on this row, from the only honest man on it.', far: ['You insult the fish.', 'The fish heard that.'],
      mid: ['The fish is listening, you know.', 'Consider the fish.'], near: ['...The fish accepts. Almost.', 'The fish is thinking.'],
      deal: "Cook it whole. Don't you dare take its head off.", wave: "Not for that. The fish has its dignity, even if you don't.", leeLine: 'The Lee house. Then you know a good bream when you see one.' },
  };
  const TELL = { eye: 'Eyes', gill: 'Gills', firm: 'Flesh', skin: 'Skin', tap: 'Tap test', water: 'Water', shell: 'Shells' };
  const TIP = {
    fish: 'Eyes clear and full, not cloudy or sunken. Tap the gills to lift them: bright red, not brown. Press the flesh: it should spring back.',
    squid: 'Eyes clear. Skin glossy with brown speckles, not milky white. Press it: it should spring back.',
    clams: 'Tap the bowl: live clams snap shut. Clear water, not cloudy. Shells wet and glossy, not chalky.',
  };

  /* ── what Mrs. Bang and Solar say ── ['bang' | 'solar', face, line] */
  const TALK = {
    open: [['bang', 'neutral', "Low water was before five. The Haesong comes in on the rise. Tell me when we leave, and don't make me stand on the ice."], ['solar', 'happy', "I've known these tides since I was six."], ['bang', 'neutral', 'You were wrong about them at seven.']],
    hard: [['bang', 'serious', 'Rule of twelfths. One, two, three, three, two, one. Your grandfather never needed a chart.']],
    early: [['bang', 'serious', 'We have been standing on this ice for an hour. My feet have opinions.']],
    ontime: [['bang', 'happy', 'There. First pick. Nobody saw us coming.'], ['solar', 'happy', 'Told you.']],
    late: [['bang', 'sad', "The restaurant buyers have been and gone. We'll take what they left and say thank you."]],
    stalls: [['bang', 'neutral', 'Eyes, gills, flesh. Then we talk money. Then you let me talk money.']],
    good: [[['bang', 'happy', "Good eye. I'd have picked that one."]], [['bang', 'neutral', 'That one. Yes.']], [['bang', 'happy', 'Hm. You were paying attention.']]],
    fair: [[['bang', 'neutral', "It'll do for soup."]], [['bang', 'neutral', "It's a fish. It will taste like a fish."]]],
    bad: [[['bang', 'serious', 'That fish has been dead since Seollal.']], [['bang', 'serious', 'Its eyes are cloudier than the harbour.'], ['solar', 'flustered', "...It looked fine from up here."]], [['bang', 'serious', 'We will be eating that one with a lot of garlic.']]],
    overpaid: [['bang', 'serious', "You paid his asking price. He'll tell the whole row by lunch."]],
    bargain: [['bang', 'happy', 'Hm. You can come again.']],
    rude: [['solar', 'surprised', 'Was that too low?'], ['bang', 'neutral', 'It was rude. Rude is fine. Too rude is not.']],
    waved: [['bang', 'neutral', "Leave it. I'll buy one at the end of the row. You hold the bag."]],
    skip: [['bang', 'neutral', "Fine. We'll live without it."]],
    broke: [['bang', 'serious', "Don't look at me. I gave you the purse."]],
    end: { S: [['bang', 'happy', "Everything on the list, and change left over. Don't tell anyone at the house; they'll send you every week."]],
      A: [['bang', 'happy', "Good. I'll make the bream on Sunday and say I chose it."]], B: [['bang', 'neutral', "We have dinner. That's the job."]],
      C: [['bang', 'neutral', 'We will have the clams. Many, many clams.'], ['solar', 'sad', '...I like clams.']] },
  };

  /* ── the rules (pure: FemcMarket.logic) ── */
  function makeTide(rng) {
    const low = Math.round(20 + rng() * 50), lowH = +(0.5 + rng() * 0.5).toFixed(1), highH = +(8.2 + rng() * 0.8).toFixed(1), P = 745;
    const at = t => lowH + (highH - lowH) * (1 - Math.cos(2 * Math.PI * (t - low) / P)) / 2;
    const cross = h => { for (let t = low; t < low + P / 2; t += 0.5) if (at(t) >= h) return t; return low + P / 2; };
    const draft = +(4.8 + rng() * 1.2).toFixed(1), smallDraft = +(2.6 + rng() * 0.6).toFixed(1);
    const cBig = cross(draft), eta = Math.round(cBig - 80 + rng() * 95), land = Math.round(Math.max(eta, cBig));
    const etaSmall = Math.round(low + 30 + rng() * 30), landSmall = Math.round(Math.max(etaSmall, cross(smallDraft)));
    return { low, lowH, high: Math.round(low + P / 2), highH, at, draft, smallDraft, eta, land, etaSmall, landSmall };
  }
  // arrive / land in minutes from 4:00; W = the window after the landing
  function tideScore(arrive, land, W) {
    if (arrive < land - 5) { const m = land - 5 - arrive; return { score: Math.round(Math.max(55, 100 - m * 0.5)), timing: 'early', minutes: -Math.round(m), fresh: 1 }; }
    if (arrive <= land + W) { const m = Math.max(0, arrive - land - W / 2); return { score: Math.round(100 - m / (W / 2) * 10), timing: 'ontime', minutes: 0, fresh: 1 }; }
    const m = arrive - land - W; return { score: Math.round(Math.max(0, 88 - m * 2.2)), timing: 'late', minutes: Math.round(m), fresh: clamp(1 - m / 60, 0, 1) };
  }
  // three specimens on the ice, each { q, bad: { tell: true }, ask, worth }
  function makeStall(item, D, fresh, rng) {
    const S = SELLERS[item.seller];
    const qs = ['good', 'fair', 'bad'].map(q => (item.boat && q === 'good' && rng() > fresh * 0.9 + 0.1) ? 'fair' : q);
    for (let i = qs.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [qs[i], qs[j]] = [qs[j], qs[i]]; }
    const bump = item.boat ? (1 - fresh) * 0.15 : 0;
    const specs = qs.map((q, i) => {
      const tells = [...item.tells].sort(() => rng() - 0.5), n = q === 'good' ? 0 : q === 'fair' ? 1 : 2 + (rng() < 0.4 ? 1 : 0), bad = {};
      tells.slice(0, n).forEach(t => { bad[t] = true; });
      const ask = r500(item.fair * S.ask * (1 + bump) * (0.95 + rng() * 0.13));
      return { i, q, bad, ask, worth: r500(item.fair * QV[q]), seed: Math.floor(rng() * 1000), gill: false, dent: null, tap: 0, gaps: Array.from({ length: 7 }, () => 6 + rng() * 9), looked: {} };
    });
    const lee = rng() < S.leeP;
    return { item, S, specs, lee, pick: null };
  }
  function haggleStart(spec, S, D, lee) {
    let floor = spec.worth * S.floor * D.floor * (lee ? 0.93 : 1);
    floor = r500(Math.min(floor, spec.ask * 0.97));
    return { ask: spec.ask, price: spec.ask, floor, worth: spec.worth, patience: S.patience + D.patience, max: S.patience + D.patience, rounds: 0, offers: [], mood: S.mood };
  }
  // one offer: { kind: 'deal' | 'counter' | 'wave', price, tier }
  function respond(h, offer, rng) {
    h.rounds++; h.offers.push(offer);
    if (offer >= h.price) return { kind: 'deal', price: h.price };
    if (offer >= h.floor) return { kind: 'deal', price: offer };
    const gap = (h.floor - offer) / h.ask, tier = gap > 0.22 ? 'far' : gap > 0.08 ? 'mid' : 'near';
    h.patience -= tier === 'far' ? 2 : 1;
    if (h.patience <= 0 && h.rounds === 1) h.patience = 1; // the first offer never ends it: one pip left is the warning
    if (h.patience <= 0) return { kind: 'wave', tier };
    const give = h.mood === 'nervous' ? 0.45 + rng() * 0.35 : h.mood === 'tough' || h.mood === 'proud' ? 0.2 + rng() * 0.25 : 0.3 + rng() * 0.35;
    h.price = Math.max(h.floor, r500(h.price - (h.price - h.floor) * give));
    return { kind: 'counter', price: h.price, tier };
  }
  function scoreRun(tide, bought) {
    const got = bought.filter(b => b.q), of = ITEMS.length;
    const quality = Math.round(got.reduce((s, b) => s + QS[b.q], 0) / of);
    const worth = got.reduce((s, b) => s + b.worth, 0), paid = got.reduce((s, b) => s + b.paid, 0);
    const money = got.length ? Math.round(clamp(100 - (paid / worth - 0.9) * 180, 0, 100)) : 0;
    const list = got.length, score = Math.round(tide * 0.2 + quality * 0.35 + money * 0.25 + list / of * 100 * 0.2);
    const grade = score >= 88 ? 'S' : score >= 74 ? 'A' : score >= 55 ? 'B' : 'C';
    return { quality, money, list, of, score, grade, paid };
  }

  /* ── harbour sounds (Web Audio) ── */
  function harbour(muted) {
    let ac = null, sea = null;
    const A = () => { if (muted) return null; try { ac = ac || new (window.AudioContext || window.webkitAudioContext)(); return ac; } catch (e) { return null; } };
    const buf = (a, dur, kind) => { const n = Math.ceil(a.sampleRate * dur), b = a.createBuffer(1, n, a.sampleRate), d = b.getChannelData(0); let l = 0; for (let i = 0; i < n; i++) { const w = Math.random() * 2 - 1; l = kind === 'brown' ? (l + 0.02 * w) / 1.02 : w; d[i] = kind === 'brown' ? l * 3.5 : w; } return b; };
    const noise = (dur, f, q, g, kind = 'white', at = 0, f2) => {
      const a = A(); if (!a) return; const t = a.currentTime + at, s = a.createBufferSource(), fl = a.createBiquadFilter(), v = a.createGain();
      s.buffer = buf(a, dur, kind); fl.type = 'bandpass'; fl.frequency.setValueAtTime(f, t); if (f2) fl.frequency.linearRampToValueAtTime(f2, t + dur); fl.Q.value = q;
      v.gain.setValueAtTime(0.0001, t); v.gain.exponentialRampToValueAtTime(g, t + dur * 0.2); v.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      s.connect(fl); fl.connect(v); v.connect(a.destination); s.start(t);
    };
    const tone = (f, dur, type = 'sine', g = 0.15, at = 0, f2) => {
      const a = A(); if (!a) return; const t = a.currentTime + at, o = a.createOscillator(), v = a.createGain();
      o.type = type; o.frequency.setValueAtTime(f, t); if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + dur);
      v.gain.setValueAtTime(0.0001, t); v.gain.exponentialRampToValueAtTime(g, t + 0.02); v.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(v); v.connect(a.destination); o.start(t); o.stop(t + dur + 0.05);
    };
    return {
      seaOn: () => { const a = A(); if (!a || sea) return; const s = a.createBufferSource(), fl = a.createBiquadFilter(), v = a.createGain(), lfo = a.createOscillator(), lg = a.createGain();
        s.buffer = buf(a, 4, 'brown'); s.loop = true; fl.type = 'lowpass'; fl.frequency.value = 520; v.gain.value = 0.05; lfo.frequency.value = 0.13; lg.gain.value = 0.035;
        lfo.connect(lg); lg.connect(v.gain); s.connect(fl); fl.connect(v); v.connect(a.destination); s.start(); lfo.start(); sea = { s, v, lfo }; },
      seaDim: k => { if (sea) sea.v.gain.value = 0.05 * k; },
      gull: () => [0, 0.17, 0.42].forEach((at, i) => tone(1900 - i * 120, 0.16, 'sine', 0.035, at, 1250)),
      horn: () => { tone(98, 1.3, 'triangle', 0.16); tone(147, 1.3, 'triangle', 0.07); },
      ice: () => noise(0.09, 5200, 2, 0.08),
      tick: () => tone(1500, 0.03, 'triangle', 0.03),
      tap: () => tone(760, 0.05, 'triangle', 0.08),
      squish: () => noise(0.16, 420, 1.4, 0.14, 'brown'),
      clack: () => [0, 0.04, 0.07, 0.11].forEach((at, i) => tone(2100 + i * 160, 0.03, 'square', 0.025, at)),
      flap: () => noise(0.12, 1800, 1.2, 0.08, 'white', 0, 900),
      coin: () => { tone(2093, 0.14, 'sine', 0.07); tone(2637, 0.2, 'sine', 0.06, 0.07); },
      grunt: () => tone(150, 0.25, 'square', 0.035, 0, 105),
      huff: () => noise(0.32, 900, 1, 0.1, 'white', 0, 300),
      deal: () => { tone(1568, 0.5, 'triangle', 0.1); tone(2093, 0.6, 'triangle', 0.07, 0.08); },
      waveoff: () => tone(440, 0.4, 'triangle', 0.08, 0, 210),
      splash: () => noise(0.45, 1500, 0.8, 0.12, 'white', 0, 400),
      blip: () => tone(1100, 0.05, 'triangle', 0.04),
      close: () => { try { sea && (sea.s.stop(), sea.lfo.stop()); ac && ac.close(); } catch (e) {} },
    };
  }

  /* ── drawn pieces ── */
  const speck = (seed, n, x0, y0, w, h) => { let out = '', s = seed + 1; const r = () => (s = (s * 9301 + 49297) % 233280) / 233280; for (let i = 0; i < n; i++) out += `<circle cx="${(x0 + r() * w).toFixed(1)}" cy="${(y0 + r() * h).toFixed(1)}" r="${(0.8 + r() * 1.8).toFixed(1)}"/>`; return out; };
  const eyeSvg = (x, y, r, b) => { const rr = r * (1 - b * 0.22);
    return `<circle cx="${x}" cy="${y}" r="${rr + 2.2}" fill="#efe6d6" stroke="rgba(40,18,18,${0.25 + b * 0.55})" stroke-width="${1 + b * 1.6}"/><circle cx="${x}" cy="${y}" r="${rr}" fill="${mix('#c9a24a', '#9c9a8a', b)}"/><circle cx="${x}" cy="${y}" r="${rr * 0.62}" fill="${mix('#0b0b0f', '#66767a', b)}"/><circle cx="${x}" cy="${y}" r="${rr}" fill="#e3eaec" opacity="${(b * 0.72).toFixed(2)}"/><circle cx="${x - rr * 0.35}" cy="${y - rr * 0.38}" r="${rr * 0.3}" fill="#fff" opacity="${(1 - b * 0.85).toFixed(2)}"/>`; };
  const gillSvg = (x, y, open, b, body) => open
    ? `<path d="M${x - 4} ${y - 17} Q${x + 13} ${y} ${x - 4} ${y + 17} Q${x - 9} ${y} ${x - 4} ${y - 17}Z" fill="${mix('#d4213d', '#6e4a3c', b)}"/>${[-10, -4, 2, 8].map(d => `<path d="M${x - 3} ${y + d} q7 2 9 1" stroke="${mix('#9a0f25', '#4a3026', b)}" stroke-width="1.2" fill="none"/>`).join('')}<path d="M${x - 5} ${y - 18} Q${x - 22} ${y} ${x - 7} ${y + 18}" fill="${body}" stroke="rgba(30,18,18,.5)" stroke-width="1.5"/>`
    : `<path d="M${x - 4} ${y - 17} Q${x + 9} ${y} ${x - 4} ${y + 17}" stroke="rgba(30,18,18,.55)" stroke-width="2.4" fill="none"/>`;
  const dentSvg = d => d && d.v > 0.02 ? `<ellipse cx="${d.x}" cy="${d.y}" rx="${9 + d.v * 3}" ry="${5 + d.v * 2}" fill="rgba(30,10,10,${(0.4 * d.v).toFixed(2)})"/><ellipse cx="${d.x - 1}" cy="${d.y - 3}" rx="8" ry="2.6" fill="rgba(255,255,255,${(0.2 * d.v).toFixed(2)})"/>` : '';
  // the geometry of each kind: eye, gill, body path; viewBox 0 0 240 130
  const KIND = {
    flounder: { eye: [[60, 52, 6], [77, 43, 6]], gill: [100, 66], body: 'M28 66 C40 20 150 14 196 50 L228 30 L222 66 L228 102 L196 82 C150 118 40 112 28 66Z', a: '#8a6a4a', b: '#5e4632', dots: '#3e2c1e' },
    croaker: { eye: [[44, 60, 7]], gill: [68, 66], body: 'M16 66 C40 42 150 38 190 58 L228 36 L218 66 L228 96 L190 74 C150 94 40 92 16 66Z', a: '#e2b44a', b: '#b98a2a', dots: '#8a6418' },
    bream: { eye: [[52, 58, 8]], gill: [80, 70], body: 'M22 70 C40 16 150 12 186 56 L226 28 L214 68 L226 108 L186 82 C150 124 40 118 22 70Z', a: '#e88a86', b: '#c45a5a', dots: '#4a8ad0' },
    squid: { eye: [[74, 60, 6]], body: 'M86 48 C140 34 200 44 232 64 C200 84 140 94 86 80Z' },
  };
  function specSvg(item, sp, s) {
    const b = t => sp.bad[t] ? s : 0;
    if (item.kind === 'clams') {
      const water = mix('#a8d4dc', '#9a8a60', b('water')), shell = mix('#5f4e40', '#d4cab8', b('shell')), tapB = b('tap');
      const pos = [[62, 78], [96, 70], [132, 72], [168, 76], [80, 94], [120, 92], [160, 96]];
      return `<ellipse cx="120" cy="92" rx="110" ry="36" fill="#e9e4dc" stroke="#b9b0a2" stroke-width="3"/><ellipse cx="120" cy="86" rx="98" ry="28" fill="${water}" opacity="${0.55 + b('water') * 0.35}"/>
        ${pos.map(([x, y], k) => { const g = sp.gaps[k] * (1 - sp.tap * (1 - tapB * 0.85)); return `<g transform="translate(${x} ${y})"><path d="M-15 0 Q0 9 15 0 Q0 4 -15 0Z" fill="${shell}" stroke="rgba(20,10,10,.4)"/><g transform="rotate(${-g.toFixed(1)} -15 0)"><path d="M-15 0 Q-2 -14 15 0 Q0 -3 -15 0Z" fill="${shell}" stroke="rgba(20,10,10,.4)"/><path d="M-9 -4 Q0 -10 9 -4" stroke="rgba(255,255,255,${(0.55 * (1 - b('shell'))).toFixed(2)})" stroke-width="1.6" fill="none"/></g>${g > 4 ? `<path d="M-6 -1 Q0 ${-g * 0.25} 6 -1" fill="#f2d6c6"/>` : ''}</g>`; }).join('')}
        <ellipse cx="80" cy="74" rx="40" ry="6" fill="#fff" opacity="${(0.35 * (1 - b('water'))).toFixed(2)}"/>`;
    }
    const K = KIND[item.kind];
    if (item.kind === 'squid') {
      const skin = mix('#b4785a', '#ecd6cf', b('skin'));
      return `<ellipse cx="128" cy="104" rx="100" ry="8" fill="rgba(0,0,0,.18)"/>${[0, 1, 2, 3, 4].map(k => `<path d="M62 ${56 + k * 4} C40 ${48 + k * 7} 26 ${40 + k * 12} 8 ${36 + k * 14}" stroke="${skin}" stroke-width="${3.5 - k * 0.3}" fill="none" stroke-linecap="round"/>`).join('')}
        <path d="M196 50 L232 36 L232 64Z M196 78 L232 92 L232 64Z" fill="${skin}" opacity=".9"/><path d="${K.body}" fill="${skin}"/><g fill="#7a3a22" opacity="${(0.85 * (1 - b('skin'))).toFixed(2)}">${speck(sp.seed, 40, 92, 44, 130, 38)}</g>
        <ellipse cx="74" cy="64" rx="17" ry="15" fill="${skin}"/><path d="M96 54 C140 44 190 52 220 62" stroke="#fff" stroke-width="3" opacity="${(0.4 * (1 - b('skin'))).toFixed(2)}" fill="none" stroke-linecap="round"/>
        ${eyeSvg(74, 60, 6, b('eye'))}${dentSvg(sp.dent)}`;
    }
    const body = K.a;
    return `<ellipse cx="124" cy="${item.kind === 'flounder' ? 112 : 104}" rx="100" ry="8" fill="rgba(0,0,0,.18)"/><path d="${K.body}" fill="${body}"/>
      ${item.kind === 'flounder' ? `<path d="${K.body}" fill="none" stroke="${K.b}" stroke-width="7" stroke-dasharray="2 3" opacity=".7"/>` : `<path d="M60 ${item.kind === 'bream' ? 30 : 50} Q120 ${item.kind === 'bream' ? 6 : 34} 180 50" stroke="${K.b}" stroke-width="5" fill="none" stroke-dasharray="3 4"/>`}
      <path d="M40 ${item.kind === 'croaker' ? 72 : 80} Q120 ${item.kind === 'bream' ? 110 : 96} 190 72" fill="none" stroke="#fff3d8" stroke-width="10" opacity=".25"/>
      <g fill="${K.dots}" opacity=".7">${speck(sp.seed, item.kind === 'bream' ? 18 : 30, 60, 36, 120, 56)}</g>
      <path d="M50 60 Q120 ${item.kind === 'bream' ? 40 : 52} 196 62" stroke="#fff" stroke-width="2.5" opacity=".35" fill="none"/>
      ${gillSvg(K.gill[0], K.gill[1], sp.gill, b('gill'), body)}${K.eye.map(([x, y, r]) => eyeSvg(x, y, r, b('eye'))).join('')}${dentSvg(sp.dent)}`;
  }
  const sellerSvg = (S, anger) => { const a = clamp(anger, 0, 1);
    return `<svg viewBox="0 0 120 160" aria-hidden="true"><path d="M16 160 C16 110 38 92 60 92 C82 92 104 110 104 160Z" fill="${S.coat}"/><path d="M36 102 L84 102 L90 160 L30 160Z" fill="${S.apron}"/><path d="M36 102 L44 92 M84 102 L76 92" stroke="${S.apron}" stroke-width="3"/>
      <circle cx="60" cy="62" r="26" fill="#e6b794"/>${S.grey ? '<path d="M35 64 C30 40 90 40 85 64 C80 54 40 54 35 64Z" fill="#cfc8c2"/>' : ''}<path d="M33 56 C33 26 87 26 87 56 C78 46 42 46 33 56Z" fill="${S.cap}"/><rect x="31" y="52" width="58" height="7" rx="3" fill="${S.cap}" opacity=".85"/>
      <path d="M44 ${58 - (S.young ? 1 : 0)} L55 ${57 + a * 5}" stroke="#2a1a14" stroke-width="2.4" stroke-linecap="round"/><path d="M76 ${58 - (S.young ? 1 : 0)} L65 ${57 + a * 5}" stroke="#2a1a14" stroke-width="2.4" stroke-linecap="round"/>
      <circle cx="50" cy="65" r="2.3" fill="#2a1a14"/><circle cx="70" cy="65" r="2.3" fill="#2a1a14"/><path d="M51 78 Q60 ${82 - a * 9} 69 78" stroke="#7a3a2a" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      ${S.young ? '' : '<path d="M44 71 q3 2 6 0 M70 71 q3 2 6 0" stroke="#b98a6a" stroke-width="1.2" fill="none"/>'}</svg>`; };

  /* ── the tide chart (viewBox 0 0 600 250): x 50-580 = 4:00-10:00, y 220-40 = 0-9 m ── */
  const CX = t => 50 + t * 530 / 360, CY = h => 220 - h * 20, CT = x => (x - 50) * 360 / 530;
  function chartSvg(T, D, arrive) {
    const pts = []; for (let t = 0; t <= 360; t += 5) pts.push(`${CX(t).toFixed(1)},${CY(T.at(t)).toFixed(1)}`);
    let shade = '';
    if (D.chart === 'shade') { const c = []; for (let t = 0; t <= 360; t += 2) if (T.at(t) >= T.draft) c.push(`${CX(t).toFixed(1)},${CY(T.at(t)).toFixed(1)}`); if (c.length) shade = `<polygon points="${c[0].split(',')[0]},${CY(T.draft)} ${c.join(' ')} ${CX(360)},${CY(T.draft)}" fill="rgba(255,79,158,.22)"/>`; }
    const grid = Array.from({ length: 7 }, (_, i) => `<line x1="${CX(i * 60)}" y1="40" x2="${CX(i * 60)}" y2="220" stroke="rgba(255,209,230,.1)"/><text x="${CX(i * 60)}" y="238" text-anchor="middle">${4 + i}:00</text>`).join('')
      + [0, 3, 6, 9].map(h => `<line x1="50" y1="${CY(h)}" x2="580" y2="${CY(h)}" stroke="rgba(255,209,230,.08)"/><text x="42" y="${CY(h) + 4}" text-anchor="end">${h} m</text>`).join('');
    const water = D.chart === 'dots'
      ? Array.from({ length: 7 }, (_, i) => `<circle cx="${CX(i * 60)}" cy="${CY(T.at(i * 60))}" r="4.5" fill="#ffd1e6"/>`).join('')
      : `<polyline points="${pts.join(' ')}" fill="none" stroke="#ffd1e6" stroke-width="3" stroke-linejoin="round"/>`;
    return `${grid}${shade}
      <line x1="50" x2="580" y1="${CY(T.smallDraft)}" y2="${CY(T.smallDraft)}" stroke="rgba(255,209,230,.35)" stroke-dasharray="4 6"/><text class="lab" x="576" y="${CY(T.smallDraft) - 6}" text-anchor="end" opacity=".6">small boats ${T.smallDraft} m</text>
      <line x1="50" x2="580" y1="${CY(T.draft)}" y2="${CY(T.draft)}" stroke="#ff4f9e" stroke-width="2" stroke-dasharray="8 5"/><text class="lab pk" x="576" y="${CY(T.draft) - 7}" text-anchor="end">Haesong-ho needs ${T.draft} m</text>
      ${water}
      <g transform="translate(${CX(T.eta)} 214)"><path d="M-14 0 L14 0 L9 7 L-9 7Z" fill="#ff4f9e"/><rect x="-3" y="-11" width="9" height="11" fill="#ff9ac8"/></g><text class="lab pk" x="${CX(T.eta)}" y="204" text-anchor="middle">${hhmm(T.eta)} off the breakwater</text>
      <g class="mk-pin" transform="translate(${CX(arrive)} 0)"><line y1="30" y2="222" stroke="#ff4f9e" stroke-width="3"/><circle cy="222" r="9" fill="#ff4f9e" stroke="#14070f" stroke-width="3"/><rect x="-30" y="14" width="60" height="20" rx="10" fill="#ff4f9e"/><text y="29" text-anchor="middle" class="pinT">${hhmm(arrive)}</text></g>
      <rect class="mk-hit" x="40" y="10" width="550" height="240" fill="transparent"/>`;
  }
  // the quay as the morning plays out (viewBox 0 0 600 300): water climbs the ruler on the wall; y 270 = 0 m, 9 m = 126
  const QY = h => 270 - h * 16;
  const boatSvg = (x, y, big, lab) => `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)})"><path d="M${big ? -70 : -40} -6 L${big ? 70 : 40} -6 L${big ? 58 : 32} 12 L${big ? -62 : -34} 12Z" fill="${big ? '#2a1018' : '#4a2030'}" stroke="#ff9ac8" stroke-width="1.5"/>${big ? '<rect x="-20" y="-30" width="34" height="24" fill="#e8ddd0"/><rect x="-14" y="-24" width="8" height="7" fill="#14070f"/><rect x="0" y="-24" width="8" height="7" fill="#14070f"/><path d="M30 -6 L30 -44 M30 -40 L52 -20" stroke="#e8ddd0" stroke-width="2"/>' : '<rect x="-8" y="-18" width="18" height="12" fill="#e8ddd0"/>'}<text y="28" text-anchor="middle" class="lab">${lab}</text></g>`;
  const personSvg = (x, y, col, h = 1) => `<g transform="translate(${x} ${y}) scale(${h})"><circle cy="-30" r="6" fill="${col}"/><path d="M-7 0 L-6 -22 Q0 -26 6 -22 L7 0Z" fill="${col}"/></g>`;
  function quaySvg(T, t, arrive) {
    const y = QY(T.at(t)), small = t >= T.landSmall ? 330 : t >= T.etaSmall ? 520 : 680, big = t >= T.land ? 400 : t >= T.eta ? 540 : 720;
    const buyers = clamp(Math.floor((t - T.land) / 7), 0, 7) + (t > T.landSmall ? 2 : 0);
    const ruler = Array.from({ length: 10 }, (_, h) => `<line x1="236" x2="${h % 3 ? 244 : 252}" y1="${QY(h)}" y2="${QY(h)}" stroke="#e8ddd0" stroke-width="2"/><text x="226" y="${QY(h) + 4}" text-anchor="end" class="lab">${h}</text>`).join('');
    return `<rect width="600" height="300" fill="url(#mk-sky)"/><rect x="0" y="${y.toFixed(1)}" width="600" height="${(300 - y).toFixed(1)}" fill="url(#mk-sea)"/><path d="M470 ${y - 4} L600 ${y - 10} L600 ${y + 4} L470 ${y + 2}Z" fill="#3a1a26"/>
      <rect x="0" y="112" width="254" height="200" fill="#2a1820"/><rect x="0" y="104" width="258" height="10" fill="#4a3038"/>${ruler}
      <line x1="230" x2="258" y1="${QY(T.draft)}" y2="${QY(T.draft)}" stroke="#ff4f9e" stroke-width="3"/><text x="262" y="${QY(T.draft) + 4}" class="lab pk">Haesong</text>
      ${boatSvg(small, y - 4, false, 'night boat')}${boatSvg(big, y - 6, true, 'Haesong-ho')}
      ${Array.from({ length: buyers }, (_, i) => personSvg(30 + i * 22, 104, '#8a6a74', 0.9)).join('')}
      ${t >= arrive ? `${personSvg(206, 104, '#ff4f9e')}<text x="206" y="62" text-anchor="middle" class="lab pk">you</text>${personSvg(186, 104, '#e8ddd0')}` : ''}
      <text x="582" y="34" text-anchor="end" class="clock">${hhmm(t)}</text>`;
  }

  let cur = null;
  function play(o = {}) {
    return new Promise(done => {
      const host = o.host || document.body, diff = DIFF[o.difficulty] ? o.difficulty : 'normal', D = DIFF[diff];
      const rng = o.seed != null ? mulberry(+o.seed || 1) : Math.random;
      const still = o.still ?? reduced.matches, K = harbour(!!o.mute);
      const ART = id => `${base()}assets/femc/game/art/minigames/market/${id}.webp`, BG = id => `${base()}assets/femc/bg/${id}.webp`;
      const FACE = (who, f) => `${base()}assets/femc/portraits/${who === 'bang' ? 'mrsbang-strangers' : 'solar-strangers'}/${f}.webp`;
      const T = makeTide(rng);
      const R = { phase: 'title', paused: false, over: false, arrive: 60, tide: null, purse: o.budget || D.budget, budget: o.budget || D.budget, bought: [], whispers: D.whispers, used: 0, stall: null, at: 0, h: null, sel: 0, T };
      cur = R;
      const el = document.createElement('div');
      el.className = 'mg-mk' + (still ? ' still' : '');
      el.innerHTML = `
        <div class="mk-bg"><img class="mk-bgimg" alt=""><i class="mk-drawn"></i></div>
        <div class="mk-top"><b>Incheon · the fish market</b><span class="mk-step"></span><ol class="mk-list" aria-label="Mrs. Bang's list"></ol><span class="mk-purse"></span></div>
        <div class="mk-main"></div>
        <div class="mk-talk"><img alt=""><p aria-live="polite"><b></b><span></span></p></div>
        <div class="mg-pause" hidden><b>Paused</b><button type="button" data-mg="resume">Resume</button><button type="button" data-mg="quit">Quit</button></div>
        <div class="mg-end" hidden></div>`;
      host.appendChild(el);
      const $ = s => el.querySelector(s), main = $('.mk-main');
      const later = (fn, ms) => setTimeout(() => { if (!R.over || fn.always) fn(); }, ms);

      /* backdrop: Kat's art, else the bg picture, else drawn */
      const setBg = (art, bg) => { const im = $('.mk-bgimg'); im.onerror = () => { if (im.dataset.try === 'art') { im.dataset.try = 'bg'; im.src = BG(bg); } else im.removeAttribute('src'); }; im.dataset.try = 'art'; im.src = ART(art); };

      /* the talk strip: one line at a time, never blocking */
      const talkQ = []; let talkT = null;
      const showLine = () => {
        clearTimeout(talkT); const L = talkQ.shift(), box = $('.mk-talk');
        if (!L) { box.classList.remove('on'); return; }
        const [who, f, t] = L, im = box.querySelector('img');
        im.hidden = false; im.onerror = () => { im.hidden = true; }; im.src = FACE(who, f); im.alt = who === 'bang' ? 'Mrs. Bang' : 'Solar';
        box.className = 'mk-talk on ' + who; box.querySelector('b').textContent = who === 'bang' ? 'Mrs. Bang' : 'Solar'; box.querySelector('span').textContent = t; K.blip();
        talkT = setTimeout(showLine, 1500 + t.length * 40);
      };
      const say = (lines, now = true) => { if (!lines || !lines.length) return; if (now) talkQ.length = 0; talkQ.push(...lines); if (now || !$('.mk-talk.on')) showLine(); };
      const sayPick = arr => say(arr[Math.floor(rng() * arr.length)]);
      $('.mk-talk').addEventListener('click', showLine);

      const list = () => {
        $('.mk-list').innerHTML = ITEMS.map((it, i) => { const b = R.bought[i]; const st = b ? (b.q ? 'got ' + b.q : 'skip') : R.stall && R.stall.item === it ? 'now' : '';
          return `<li class="${st}" title="${esc(it.note)}"><i></i>${esc(it.name)}${b && b.q ? ` <small>${won(b.paid)}</small>` : ''}</li>`; }).join('');
        $('.mk-purse').textContent = won(R.purse);
      };
      const svgPt = (svg, e, W, H) => { const r = svg.getBoundingClientRect(), s = Math.min(r.width / W, r.height / H), ox = r.left + (r.width - W * s) / 2, oy = r.top + (r.height - H * s) / 2; return { x: (e.clientX - ox) / s, y: (e.clientY - oy) / s }; };

      /* ── part 1: read the tide ── */
      function tide() {
        R.phase = 'tide'; setBg('dock', o.bg || 'epi-s-harbor-tide'); K.seaOn(); later(K.gull, 600);
        $('.mk-step').textContent = 'Read the tide'; list();
        main.innerHTML = `<div class="mk-tide">
          <div class="mk-card"><b>Mrs. Bang's tide table</b><dl><dt>Low water</dt><dd>${hhmm(T.low)} · ${T.lowH} m</dd><dt>High water</dt><dd>${hhmm(T.high)} · ${T.highH} m</dd>
            <dt>The radio</dt><dd>Haesong-ho off the breakwater at ${hhmm(T.eta)}, waiting on water. Draws ${T.draft} m at the quay.</dd><dt>The car</dt><dd>Already counted. Just say when you'll be on the quay.</dd></dl></div>
          <svg class="mk-chart" viewBox="0 0 600 250" role="img" aria-label="Tide chart, 4 to 10 a.m."></svg>
          <div class="mk-ctl"><button type="button" data-t="-" aria-label="Earlier">‹</button><output class="mk-when"></output><button type="button" data-t="+" aria-label="Later">›</button><button type="button" class="mk-go">Set out</button></div>
          <p class="mk-tip">Drag the pin (or ← →) to when you'll be on the quay. The Haesong-ho ties up only once the water reaches its line${D.chart === 'dots' ? '; the chart has only the hourly readings' : ''}.</p></div>`;
        const ch = $('.mk-chart');
        const draw = () => { ch.innerHTML = chartSvg(T, D, R.arrive); $('.mk-when').textContent = `On the quay at ${hhmm(R.arrive)}`; };
        const setT = v => { const n = clamp(Math.round(v / 5) * 5, 30, 360); if (n !== R.arrive) { R.arrive = n; K.tick(); draw(); } };
        let drag = false;
        ch.addEventListener('pointerdown', e => { if (R.paused || R.phase !== 'tide') return; e.preventDefault(); drag = true; ch.setPointerCapture?.(e.pointerId); setT(CT(svgPt(ch, e, 600, 250).x)); });
        ch.addEventListener('pointermove', e => { if (drag && !R.paused) setT(CT(svgPt(ch, e, 600, 250).x)); });
        const up = () => { drag = false; }; ch.addEventListener('pointerup', up); ch.addEventListener('pointercancel', up);
        main.querySelectorAll('[data-t]').forEach(b => b.onclick = () => setT(R.arrive + (b.dataset.t === '+' ? 5 : -5)));
        $('.mk-go').onclick = setOut;
        R.onKey = e => { if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { setT(R.arrive + (e.key === 'ArrowRight' ? 1 : -1) * (e.shiftKey ? 15 : 5)); return true; } if (e.key === 'Enter') { setOut(); return true; } };
        draw(); say(TALK.open); if (D.chart === 'dots') say(TALK.hard, false);
      }
      function setOut() {
        if (R.phase !== 'tide' || R.paused) return; R.phase = 'quay'; R.onKey = null;
        R.tide = tideScore(R.arrive, T.land, D.window);
        $('.mk-step').textContent = 'The quay';
        main.innerHTML = `<div class="mk-quay"><svg class="mk-qsvg" viewBox="0 0 600 300" aria-hidden="true"><defs><linearGradient id="mk-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a0f22"/><stop offset="1" stop-color="#7a3a50"/></linearGradient><linearGradient id="mk-sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a2a36"/><stop offset="1" stop-color="#14070f"/></linearGradient></defs><g class="q"></g></svg>
          <div class="mk-qres" hidden></div></div>`;
        const q = $('.mk-quay .q'), t0 = Math.max(0, Math.min(R.arrive, T.landSmall) - 25), t1 = Math.min(380, Math.max(R.arrive, T.land) + 25), dur = still ? 400 : 7000;
        let t = t0, horned = false, small = false, raf = 0, last = performance.now();
        const step = now => {
          const dt = Math.min(60, now - last); last = now;
          if (!R.paused && !R.over) {
            t = Math.min(t1, t + (t1 - t0) * dt / dur); q.innerHTML = quaySvg(T, t, R.arrive);
            if (!small && t >= T.landSmall) { small = true; K.splash(); }
            if (!horned && t >= T.land) { horned = true; K.horn(); }
            if (t >= t1) { quayDone(); return; }
          }
          raf = requestAnimationFrame(step);
        };
        R.stopAnim = () => cancelAnimationFrame(raf);
        raf = requestAnimationFrame(step);
      }
      function quayDone() {
        const r = R.tide, box = $('.mk-qres');
        const head = r.timing === 'early' ? `${-r.minutes} minutes early` : r.timing === 'late' ? `${r.minutes} minutes late` : 'First pick';
        box.hidden = false;
        box.innerHTML = `<b>${head}</b><p>The Haesong-ho tied up at ${hhmm(T.land)}${T.land > T.eta + 2 ? ' (it waited on the water)' : ''}. You were on the quay at ${hhmm(R.arrive)}.</p><p class="mk-score">Tide ${r.score}</p><button type="button">To the stalls</button>`;
        say(TALK[r.timing]);
        const go = () => { if (R.phase !== 'quay') return; R.onKey = null; stalls(); };
        box.querySelector('button').onclick = go; box.querySelector('button').focus();
        R.onKey = e => { if (e.key === 'Enter' || e.key === ' ') { go(); return true; } };
      }

      /* ── part 2: the stalls ── */
      function stalls() { R.phase = 'stall'; R.at = 0; setBg('stall', o.stallBg || 'flashback-fish-market'); K.seaDim(0.4); say(TALK.stalls); stall(); }
      function stall() {
        if (R.at >= ITEMS.length) return finish(false);
        const item = ITEMS[R.at], st = makeStall(item, D, R.tide ? R.tide.fresh : 1, rng), S = st.S;
        R.stall = st; R.h = null; R.sel = 0; list();
        $('.mk-step').textContent = `Stall ${R.at + 1} of ${ITEMS.length} · ${item.name}`;
        const kind = item.kind === 'squid' ? 'squid' : item.kind === 'clams' ? 'clams' : 'fish';
        main.innerHTML = `<div class="mk-stall${still ? '' : ' in'}">
          <div class="mk-seller"><div class="mk-fig"><span class="mk-figsvg"></span><img src="${ART('seller-' + item.seller)}" alt="" onerror="this.remove()"></div>
            <div class="mk-say"><b>${esc(S.name)}</b><span></span></div><ol class="mk-temper" aria-label="Patience"></ol></div>
          <div class="mk-ice">
            <ol class="mk-specs">${st.specs.map((sp, i) => `<li><button type="button" data-spec="${i}" aria-label="${esc(item.name)} ${i + 1}"><svg viewBox="0 0 240 130" aria-hidden="true"></svg><i class="tag">${won(sp.ask)}</i><kbd>${i + 1}</kbd></button></li>`).join('')}</ol>
            <div class="mk-look"><svg class="mk-big" viewBox="0 0 240 130" aria-label="The one you're looking at"></svg>
              <div class="mk-tools">${kind === 'clams' ? '<button type="button" data-tool="tap">Tap the bowl <kbd>T</kbd></button>' : `${kind === 'fish' ? '<button type="button" data-tool="gill">Lift the gills <kbd>G</kbd></button>' : ''}<button type="button" data-tool="press">Press the flesh <kbd>P</kbd></button>`}
                <button type="button" class="mk-buy">Haggle for this one <kbd>Enter</kbd></button><button type="button" class="mk-leave">Leave it</button></div>
              <p class="mk-tip">${TIP[kind]}</p></div>
            <div class="mk-hag" hidden></div></div></div>`;
        const fig = () => { $('.mk-figsvg').innerHTML = sellerSvg(S, R.h ? 1 - R.h.patience / R.h.max : 0); $('.mk-temper').innerHTML = R.h ? Array.from({ length: R.h.max }, (_, i) => `<li class="${i < R.h.patience ? 'on' : ''}"></li>`).join('') : ''; };
        const sellerSay = t => { const s = $('.mk-say'); s.querySelector('span').textContent = t; s.classList.remove('pop'); void s.offsetWidth; s.classList.add('pop'); };
        R.fig = fig; R.sellerSay = sellerSay;
        fig(); sellerSay(st.lee && S.leeLine ? `${S.open} ${S.leeLine}` : S.open);
        if (item.id === 'flounder') later(() => say([['bang', 'serious', `Mr. Cha. That flounder is worth ${won(st.specs.find(s => s.q === 'good')?.worth || item.fair)}, not ${won(Math.max(...st.specs.map(s => s.ask)))}. You know it, and I know you know it.`], ['solar', 'happy', '(She does this every time.)']]), 900);
        K.ice();
        const smalls = () => st.specs.forEach((sp, i) => { const b = main.querySelector(`[data-spec="${i}"]`); b.querySelector('svg').innerHTML = specSvg(item, sp, D.subtle); b.classList.toggle('sel', i === R.sel); });
        const big = () => { const sp = st.specs[R.sel]; $('.mk-big').innerHTML = specSvg(item, sp, D.subtle); };
        R.redraw = () => { big(); };
        const select = i => { if (R.h || R.paused) return; R.sel = i; K.ice(); smalls(); big(); };
        main.querySelectorAll('[data-spec]').forEach(b => b.onclick = () => select(+b.dataset.spec));
        const K2 = KIND[item.kind] || {};
        const tool = (name, p) => {
          if (R.h || R.paused) return; const sp = st.specs[R.sel];
          if (name === 'gill' && K2.gill) { sp.gill = !sp.gill; sp.looked.gill = true; K.flap(); }
          if (name === 'press') { const pt = p || { x: 140, y: item.kind === 'squid' ? 64 : 70 }; sp.dent = { x: pt.x, y: pt.y, v: 1 }; sp.looked.firm = true; K.squish(); }
          if (name === 'tap') { sp.tapAt = performance.now(); sp.looked.tap = true; K.clack(); }
          big(); smalls();
        };
        main.querySelectorAll('[data-tool]').forEach(b => b.onclick = () => tool(b.dataset.tool));
        const bigEl = $('.mk-big');
        bigEl.addEventListener('pointerdown', e => {
          if (R.paused || R.h) return; e.preventDefault(); const p = svgPt(bigEl, e, 240, 130);
          if (kind === 'clams') return tool('tap');
          if (K2.gill && Math.hypot(p.x - K2.gill[0], p.y - K2.gill[1]) < 20) return tool('gill');
          if (K2.eye.some(([x, y, r]) => Math.hypot(p.x - x, p.y - y) < r + 6)) { K.tap(); return; }
          if (p.x > 30 && p.x < 225 && p.y > 25 && p.y < 110) tool('press', p);
        });
        $('.mk-buy').onclick = () => haggle();
        $('.mk-leave').onclick = () => leave();
        R.onKey = e => {
          if (R.h) return haggleKey(e);
          const k = e.key.toLowerCase();
          if (['1', '2', '3'].includes(k)) { select(+k - 1); return true; }
          if (k === 'g') { tool('gill'); return true; } if (k === 'p') { tool('press'); return true; } if (k === 't' && kind === 'clams') { tool('tap'); return true; }
          if (e.key === 'Enter') { haggle(); return true; }
          if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { select((R.sel + (e.key === 'ArrowRight' ? 1 : 2)) % 3); return true; }
        };
        smalls(); big();
      }
      /* the press dent and the clams' snap, animated */
      let raf = 0, last = performance.now();
      const tick = now => {
        const dt = Math.min(60, now - last) / 1000; last = now;
        if (!R.paused && !R.over && R.phase === 'stall' && R.stall) {
          let dirty = false;
          R.stall.specs.forEach(sp => {
            if (sp.dent && sp.dent.v > 0) { const d = sp.dent, hold = sp.bad.firm ? 0.2 + 0.6 * D.subtle : 0; d.v = d.v > hold ? Math.max(hold, d.v - dt / 0.3) : Math.max(0, d.v - dt * 0.12); dirty = sp.i === R.sel || dirty; } // firm flesh springs back; soft keeps the dent
            if (sp.tapAt) { const k = clamp((now - sp.tapAt) / (still ? 1 : 260), 0, 1); const back = clamp((now - sp.tapAt - 2400) / 900, 0, 1); sp.tap = still ? (back < 1 ? 1 : 0) : k * (1 - back); if (back >= 1) sp.tapAt = 0; dirty = sp.i === R.sel || dirty; }
          });
          if (dirty && R.redraw) R.redraw();
        }
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);

      function haggle() {
        if (R.h || R.paused || R.phase !== 'stall') return;
        const st = R.stall, sp = st.specs[R.sel]; st.pick = sp;
        const h = R.h = haggleStart(sp, st.S, D, st.lee); h.offer = r500(Math.min(R.purse, h.price * 0.6));
        const box = $('.mk-hag'); $('.mk-look').hidden = true; box.hidden = false;
        main.querySelectorAll('[data-spec]').forEach((b, i) => { b.disabled = i !== R.sel; });
        box.innerHTML = `<p class="mk-hhead">Your offer for the ${esc(st.item.name.toLowerCase())} (${R.sel + 1}): <b class="mk-offer"></b> <span>his price <b class="mk-price"></b></span></p>
          <div class="mk-mtr" role="slider" tabindex="0" aria-label="Your offer"><i class="fill"></i><i class="worth" hidden></i><span class="ticks"></span><i class="knob"></i><i class="cap"></i></div>
          <div class="mk-hbtn"><button type="button" data-h="offer">Offer <kbd>Enter</kbd></button><button type="button" data-h="pay"></button><button type="button" data-h="bang"></button><button type="button" data-h="back">Another one</button><button type="button" data-h="leave">Leave it</button></div>`;
        const lo = () => r500(h.ask * 0.3), hi = () => Math.min(h.price, R.purse);
        const pct = v => clamp((v - lo()) / (h.ask - lo()) * 100, 0, 100);
        const paint = () => {
          h.offer = clamp(h.offer, lo(), Math.max(lo(), hi()));
          box.querySelector('.mk-offer').textContent = won(h.offer); box.querySelector('.mk-price').textContent = won(h.price);
          box.querySelector('.knob').style.left = box.querySelector('.fill').style.width = pct(h.offer) + '%';
          box.querySelector('.cap').style.left = pct(h.price) + '%';
          box.querySelector('.ticks').innerHTML = h.offers.map(v => `<i style="left:${pct(v)}%"></i>`).join('');
          const w = box.querySelector('.worth'); if (h.showWorth) { w.hidden = false; w.style.left = pct(h.worth) + '%'; w.title = 'Worth ' + won(h.worth); }
          const pay = box.querySelector('[data-h=pay]'); pay.textContent = `Pay his price ${won(h.price)}`; pay.disabled = h.price > R.purse;
          const bb = box.querySelector('[data-h=bang]'); bb.textContent = `Ask Mrs. Bang (${R.whispers})`; bb.disabled = R.whispers <= 0 || h.showWorth;
          box.querySelector('[data-h=back]').hidden = h.rounds > 0;
          box.querySelector('.mk-mtr').setAttribute('aria-valuenow', h.offer);
          R.fig();
        };
        R.hpaint = paint;
        const mtr = box.querySelector('.mk-mtr'); let drag = false;
        const setX = e => { const r = mtr.getBoundingClientRect(), k = clamp((e.clientX - r.left) / r.width, 0, 1); const v = r500(lo() + k * (h.ask - lo())); if (v !== h.offer) K.tick(); h.offer = v; paint(); };
        mtr.addEventListener('pointerdown', e => { if (R.paused) return; e.preventDefault(); drag = true; mtr.setPointerCapture?.(e.pointerId); setX(e); });
        mtr.addEventListener('pointermove', e => { if (drag && !R.paused) setX(e); });
        mtr.addEventListener('pointerup', () => { drag = false; }); mtr.addEventListener('pointercancel', () => { drag = false; });
        box.querySelectorAll('[data-h]').forEach(b => b.onclick = () => hAct(b.dataset.h));
        if (R.purse < h.floor && R.purse < h.price) say(TALK.broke);
        paint(); mtr.focus();
      }
      function haggleKey(e) {
        const h = R.h; if (!h || R.paused) return;
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { h.offer += (e.key === 'ArrowRight' ? 1 : -1) * (e.shiftKey ? 2000 : 500); K.tick(); R.hpaint(); return true; }
        if (e.key === 'Enter') { hAct('offer'); return true; }
      }
      function hAct(a) {
        const h = R.h, st = R.stall; if (!h || R.paused || h.done) return;
        if (a === 'back') { if (h.rounds) return; R.h = null; $('.mk-hag').hidden = true; $('.mk-look').hidden = false; main.querySelectorAll('[data-spec]').forEach(b => { b.disabled = false; }); R.fig(); return; }
        if (a === 'leave') return leave();
        if (a === 'bang') { if (R.whispers <= 0 || h.showWorth) return; R.whispers--; R.used++; h.showWorth = true; say([['bang', 'neutral', `Worth ${won(h.worth)}. Not a won more.`]]); R.hpaint(); return; }
        if (a === 'pay') { if (h.price > R.purse) return; return deal(h.price, true); }
        const r = respond(h, Math.min(h.offer, R.purse), rng);
        if (r.kind === 'deal') return deal(r.price, false);
        const S = st.S, pickL = arr => arr[Math.floor(rng() * arr.length)];
        if (r.kind === 'wave') { K.waveoff(); R.sellerSay(S.wave); h.done = true; R.fig(); later(waved, 1300); return; }
        K.grunt(); if (r.tier === 'far') K.huff();
        R.sellerSay(`${pickL(S[r.tier])} ${won(r.price)}.`);
        if (r.tier === 'far' && !R.rudeSaid) { R.rudeSaid = true; say(TALK.rude); }
        h.offer = Math.min(h.offer, h.price); R.hpaint();
      }
      function record(b) { R.bought[R.at] = b; list(); }
      function deal(price, paidAsk) {
        const h = R.h, st = R.stall, sp = st.pick, S = st.S; h.done = true;
        R.purse -= price; K.coin(); later(K.deal, 200);
        const extra = S.mood === 'polite';
        R.sellerSay(S.deal);
        record({ id: st.item.id, q: sp.q, paid: price, ask: sp.ask, worth: sp.worth, seller: st.item.seller, rounds: h.rounds, lee: st.lee, wavedOff: false, extra, looked: Object.keys(sp.looked) });
        const over = price / sp.worth;
        later(() => { if (paidAsk && h.rounds === 0 && price > sp.worth * 1.2) say(TALK.overpaid); else if (over <= 0.95 && sp.q !== 'bad') say(TALK.bargain); else sayPick(TALK[sp.q]); }, 700);
        nextStall(2600);
      }
      function waved() {
        const st = R.stall, it = st.item, price = r500(it.fair * 1.1);
        if (price <= R.purse) { R.purse -= price; record({ id: it.id, q: 'fair', paid: price, ask: price, worth: r500(it.fair * QV.fair), seller: 'bang', rounds: R.h.rounds, lee: st.lee, wavedOff: true, extra: false, looked: [] }); say(TALK.waved); }
        else { record({ id: it.id, q: null, paid: 0, ask: 0, worth: 0, seller: it.seller, rounds: R.h.rounds, lee: st.lee, wavedOff: true, extra: false, looked: [] }); say(TALK.broke); }
        nextStall(2200);
      }
      function leave() {
        if (R.phase !== 'stall' || R.paused || (R.h && R.h.done)) return; if (R.h) R.h.done = true;
        const st = R.stall; record({ id: st.item.id, q: null, paid: 0, ask: 0, worth: 0, seller: st.item.seller, rounds: R.h ? R.h.rounds : 0, lee: st.lee, wavedOff: false, extra: false, looked: [] });
        say(TALK.skip); nextStall(1500);
      }
      function nextStall(ms) {
        R.onKey = null;
        later(() => { const s = main.querySelector('.mk-stall'); if (s && !still) s.classList.add('out'); later(() => { R.at++; R.h = null; R.redraw = null; stall(); }, still ? 0 : 380); }, ms);
      }

      /* ── the end ── */
      const finish = (quit = false) => {
        if (R.over) return; R.over = true; R.onKey = null; R.stopAnim?.();
        const t = R.tide || { score: 0, timing: 'late', minutes: 0 };
        const sc = scoreRun(t.score, R.bought), mine = R.bought.filter(b => b && b.q && !b.wavedOff);
        const grade = quit ? 'C' : sc.grade;
        const res = { won: !quit && sc.list >= 4 && grade !== 'C', grade, score: sc.score, tide: t.score, arrived: hhmm(R.arrive), landed: hhmm(T.land), timing: t.timing, minutes: t.minutes,
          quality: sc.quality, money: sc.money, list: sc.list, of: sc.of, bought: R.bought.filter(Boolean).map(({ looked, ...b }) => b), spent: R.budget - R.purse,
          saved: mine.reduce((s, b) => s + b.ask - b.paid, 0), left: R.purse, budget: R.budget, wavedOff: R.bought.filter(b => b && b.wavedOff).length, whispers: R.used, difficulty: diff, quit };
        R.result = res;
        say(TALK.end[grade]);
        const end = $('.mg-end'); end.hidden = false;
        end.innerHTML = `<span class="mk-stamp"><img src="${ART('stamp-' + grade.toLowerCase())}" alt="Grade ${grade}" onerror="this.remove()"><b class="mg-grade">${grade}</b></span>
          <dl><dt>The tide</dt><dd>${res.timing === 'ontime' ? 'first pick' : res.timing} (${res.tide})</dd><dt>The list</dt><dd>${res.list} / ${res.of}</dd><dt>Quality</dt><dd>${res.quality}</dd>
            <dt>Spent</dt><dd>${won(res.spent)} of ${won(res.budget)}</dd><dt>Haggled off</dt><dd>${won(res.saved)}</dd><dt>Score</dt><dd>${res.score}</dd></dl>
          <p class="mg-end-say">Mrs. Bang: ${esc(TALK.end[grade][0][2])}</p><button type="button">Continue</button>`;
        const b = end.querySelector('button'); b.focus();
        b.onclick = () => { cleanup(); o.onDone?.(res); done(res); };
      };

      /* ── input, pause, cleanup ── */
      const pause = on => { if (R.over || R.phase === 'title') return; R.paused = on; $('.mg-pause').hidden = !on; if (on) $('.mg-pause button').focus(); };
      const key = e => {
        if (R.over || R.phase === 'title') return; e.stopPropagation();
        if (e.key === 'Escape') { e.preventDefault(); pause(!R.paused); return; }
        if (R.paused) return;
        const onBtn = e.target && e.target.tagName === 'BUTTON';
        if (onBtn && (e.key === 'Enter' || e.key === ' ')) return; // the focused button does it
        if (e.repeat && e.key === 'Enter') return;
        if (R.onKey && R.onKey(e)) e.preventDefault();
      };
      const cleanup = () => { cancelAnimationFrame(raf); R.stopAnim?.(); clearTimeout(talkT); window.removeEventListener('keydown', key, true); window.removeEventListener('keydown', skipT, true); K.close(); el.remove(); cur = null; };
      $('.mg-pause').onclick = e => { const b = e.target.dataset.mg; if (b === 'resume') pause(false); if (b === 'quit') { pause(false); finish(true); } };
      window.addEventListener('keydown', key, true);
      list();

      /* the title card: held 1.8 s (click / any key but Esc skips), then the tide */
      const tt = document.createElement('div'); tt.className = 'mk-title';
      tt.innerHTML = `<b>THE FISH MARKET</b><small>Incheon · early March, 2013</small><img src="${ART('title')}" alt="" onerror="this.remove()">`;
      el.appendChild(tt);
      let begun = false; const begin = () => { if (begun || !el.isConnected) return; begun = true; window.removeEventListener('keydown', skipT, true); tt.classList.add('out'); setTimeout(() => tt.remove(), still ? 0 : 450); tide(); };
      const skipT = e => { if (e.key !== 'Escape') { e.preventDefault(); e.stopPropagation(); begin(); } };
      tt.onclick = begin; window.addEventListener('keydown', skipT, true); setTimeout(begin, 1800);
    });
  }
  return { play, state: () => cur, logic: { DIFF, ITEMS, SELLERS, makeTide, tideScore, makeStall, haggleStart, respond, scoreRun, mulberry, hhmm } };
})();
