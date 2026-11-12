/* FEMC epilogue minigame: hwatu (Go-Stop) (Nov 11 2026). In the strangers story: people.js epi-s-eomma-4 (Thursdays, the sunroom,
   seats 2, flags epi-s-mg-hwatu); also on mockups/minigames/index.html.
   Built for the strangers epilogue (Incheon, Feb-Mar 2013, the Lee house): Solar plays Go-Stop with her mother, who plays with
   the other wives on Thursdays. Elegant, cool, never raises her voice; a few short dry lines while she plays (no plot).

   FemcHwatu.play({ host, mute, difficulty, seats, target, bg, onDone }) -> Promise<result>
     host        element to draw into (default document.body; a full-screen overlay is added inside it)
     mute        no audio at all (no AudioContext is made)
     difficulty  'easy' | 'normal' | 'hard' (how sharp Eomma is; default 'normal'), see DIFF
     seats       2 (Solar vs Eomma, the default) or 3 (an auntie joins)
     target      points to win / to be asked Go or Stop (default 3, a short demo; real 2-player Go-Stop is 7)
     bg          a background id under assets/femc/bg/ (default epi-s-front-room), dimmed behind the table; drawn felt if missing
     onDone      called with the result too
   result = { won, grade: 'S'|'A'|'B'|'C', quit, draw, how: 'stop'|'out'|'nagari'|'quit', winner: 'solar'|'mother'|'auntie'|null,
              points (the winner's final, after Go bonuses and go-bak), base (score before bonuses), gos (the winner's Gos), goBak,
              scores: [solar, mother(, auntie)], captured: { bright, animal, ribbon, junk } (Solar's; junk counts double junk as 2),
              sets: Solar's completed sets ('godori'|'red'|'blue'|'plain'), turns, seats, difficulty }
   Grade: S won with 7+ points or 2+ Gos; A won with 4+ points or a Go; B won; C lost, nagari (nobody) or quit.

   How it plays (a simplified, readable Go-Stop; the collapsible Rules card in the game says the same):
     The deck: 48 cards, 12 months of 4. Each card is a type: bright (gwang 광), animal (yeol 열), ribbon (tti 띠: red with writing
       Jan-Mar, blue Jun / Sep / Oct, plain red Apr / May / Jul, and December's), junk (pi 피; Nov and Dec each have a double junk).
     Deal: 2 seats 10 cards each, 8 face up on the felt, 20 in the pile; 3 seats 7 each, 6 on the felt, 21 in the pile.
       Eomma deals, Solar leads. (No four of a month on the felt: redeal.)
     A turn: play a hand card. If the felt has a card of its month, it lands on it (two there: pick which; three: take all four).
       Then flip the pile's top card and match it the same way. Pairs go to your side, sorted by type.
       Stuck (ppeok): your card matched one, and the flip was that month too: all three stay on the felt (the fourth takes them).
       Kiss (jjok): your card matched nothing and the flip matched it.  Ttadak: your card and the flip took all four of a month.
       Kiss, ttadak, taking a stuck three, and a sweep (the felt left empty) each take one junk from every other player.
     Score: brights 3 = 3 (2 with December's rain), 4 = 4, 5 = 15 · animals 5 = 1, +1 each more · ribbons 5 = 1, +1 each more ·
       junk 10 = 1, +1 each more · godori (the three birds: Feb, Apr, Aug) +5 · red ribbons with writing (Jan-Mar) +3 ·
       blue ribbons (Jun, Sep, Oct) +3 · plain red ribbons (Apr, May, Jul) +3.
     Go or Stop: reaching the target (and each time you go higher after a Go) you choose. Stop wins now. Go plays on: +1 point
       per Go (two Gos +2, three or more double), but if someone else then reaches the target and stops, they score double
       (go-bak). On your last card there's no choice: it's a Stop. If the hands run out, the highest scorer who called Go wins;
       else nobody does (nagari).
     Controls: click / tap a hand card (cards with a match on the felt glow pink; hovering one lights its match), or ← → and
       Enter / Space. When there are two to pick from, click one (or ← → Enter). Go / Stop: buttons, or G / S. Esc pauses
       (Resume / Quit); the II button too. Rules: the Rules button (or R).
   Eomma (DIFF): easy plays loose (often a random card, Goes on a whim); normal takes the best capture, blocks your sets, avoids
     feeding you, Goes only when you're nowhere close; hard also counts the cards she has seen and reads your near sets before a Go.
   Feel: cards slap onto the felt (a soft thwack), flip from the pile, sort into piles at each player's side; points pop.
   Sound (Web Audio, made here, no files): thwack, flip, clack, Go / Stop tones, a small end figure. mute = silent.
   Reduced motion: no flights, flips or pops (cards just move); timings shorten.
   Optional art (assets/femc/game/art/minigames/hwatu/*.webp; drawn stand-ins show until each exists):
     title       the title card (held 1.8 s over a drawn one; click / a key skips)
     mother      Eomma's portrait (square-ish, face crop)   auntie   the auntie's   solar   Solar's
     felt        the table / blanket texture under the cards
     back        the card back
     cards/<id>  card faces, probed once with cards/01b: id = month 01-12 + type: b bright, a animal, r ribbon, j1 j2 (j3) junk,
                 jd double junk. e.g. 08b (the moon), 08a (the geese), 12jd. Full list: FemcHwatu.DECK.map(c => c.id)
   Tutorial (Nov 11 2026, Kat: every minigame teaches itself first): after the title card, the first time only (FemcTutorial seen-state
     'hwatu'), Eomma walks Solar through a staged practice hand on its own little table over the real one (the real deal hasn't
     happened yet, so nothing of the game changes): the month in the corner, play the glowing match, tap the pile to flip, the pairs
     sorting into 광 / 열 / 띠 / 피, how points come, then Go or Stop on a pretend 3 points. play({ tutorial: true | false }) forces /
     skips it (the story passes neither). Esc → Pause → How to play replays it over the paused game (Next on every step).
     result.tutorial = 'done' | 'skipped' | 'seen' (not shown). Helper: minigames/tutorial.js (FemcTutorial), loaded on demand.
   Test hooks: FemcHwatu.engine (deal, runTurn, score, ai, settle) runs a whole game with no DOM; state().prac is the practice table
     while a tutorial is up ({ hand, pile, ask: [go, stop], key }). */
window.FemcHwatu = (() => {
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const base = () => (window.FemcGame && window.FemcGame.base) || (typeof document !== 'undefined' && document.querySelector('script[src*="minigames/hwatu"]')?.src.split('assets/')[0]) || '';
  const reduced = typeof matchMedia === 'function' ? matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const rnd = ([a, b]) => a + Math.random() * (b - a);
  const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const ART = id => `${base()}assets/femc/game/art/minigames/hwatu/${id}.webp`;
  const BG = id => `${base()}assets/femc/bg/${id}.webp`;
  // the first-time tutorial's helper (tutorial.js + .css), loaded once from this folder; null = play without one
  const tutLib = () => window.FemcTutorial ? Promise.resolve(window.FemcTutorial) : (window.FemcTutorialLoading ||= new Promise(ok => {
    const B = `${base()}assets/femc/game/minigames/tutorial`, l = document.createElement('link'), s = document.createElement('script');
    l.rel = 'stylesheet'; l.href = `${B}.css?v=1`; document.head.appendChild(l);
    s.src = `${B}.js?v=1`; s.onload = s.onerror = () => ok(window.FemcTutorial || null); document.head.appendChild(s);
  }));

  /* ── the deck ── */
  const MONTHS = [null,
    { en: 'Pine', ko: '송학', ty: ['b', 'rr', 'j', 'j'], b: 'crane and sun' },
    { en: 'Plum', ko: '매조', ty: ['ab', 'rr', 'j', 'j'], a: 'bush warbler' },
    { en: 'Cherry', ko: '벚꽃', ty: ['b', 'rr', 'j', 'j'], b: 'the curtain' },
    { en: 'Wisteria', ko: '흑싸리', ty: ['ab', 'rp', 'j', 'j'], a: 'cuckoo' },
    { en: 'Iris', ko: '난초', ty: ['a', 'rp', 'j', 'j'], a: 'the bridge' },
    { en: 'Peony', ko: '모란', ty: ['a', 'rb', 'j', 'j'], a: 'butterflies' },
    { en: 'Bush clover', ko: '홍싸리', ty: ['a', 'rp', 'j', 'j'], a: 'boar' },
    { en: 'Pampas', ko: '공산', ty: ['b', 'ab', 'j', 'j'], b: 'the full moon', a: 'geese' },
    { en: 'Chrysanthemum', ko: '국진', ty: ['a', 'rb', 'j', 'j'], a: 'the sake cup' },
    { en: 'Maple', ko: '단풍', ty: ['a', 'rb', 'j', 'j'], a: 'deer' },
    { en: 'Paulownia', ko: '오동', ty: ['b', 'jd', 'j', 'j'], b: 'the phoenix' },
    { en: 'Rain', ko: '비', ty: ['b', 'a', 'rx', 'jd'], b: 'the rain', a: 'swallow' },
  ];
  const DECK = [];
  MONTHS.forEach((M, m) => {
    if (!M) return; let jn = 0;
    M.ty.forEach(t => {
      const mm = String(m).padStart(2, '0');
      const c = { m, t: t[0], id: '', rib: null, bird: t === 'ab', rain: m === 12 && t === 'b', pi: 0 };
      if (t[0] === 'r') c.rib = { r: 'red', b: 'blue', p: 'plain', x: 'rain' }[t[1]];
      if (t[0] === 'j') c.pi = t === 'jd' ? 2 : 1;
      c.id = mm + (t === 'jd' ? 'jd' : t[0] === 'j' ? 'j' + (++jn) : t[0]);
      DECK.push(Object.freeze(c));
    });
  });
  const TYPE = { b: 'Bright', a: 'Animal', r: 'Ribbon', j: 'Junk' };
  const KO = { b: '광', a: '열', r: '띠', j: '피' };
  const cardName = c => `${MONTHS[c.m].en} (${c.m}) · ${c.t === 'j' ? (c.pi === 2 ? 'Double junk' : 'Junk') : TYPE[c.t]}${c.t === 'b' ? ', ' + MONTHS[c.m].b : c.t === 'a' ? ', ' + MONTHS[c.m].a : c.t === 'r' ? ', ' + { red: 'red with writing', blue: 'blue', plain: 'plain red', rain: 'rain' }[c.rib] : ''}`;
  const SETS = { godori: c => c.bird, red: c => c.rib === 'red', blue: c => c.rib === 'blue', plain: c => c.rib === 'plain' };
  const SETNAME = { godori: 'Godori', red: 'Red ribbons', blue: 'Blue ribbons', plain: 'Plain ribbons' };

  /* ── scoring ── */
  function score(cap) {
    const B = cap.filter(c => c.t === 'b'), A = cap.filter(c => c.t === 'a'), R = cap.filter(c => c.t === 'r');
    const J = cap.reduce((s, c) => s + (c.t === 'j' ? c.pi : 0), 0);
    const b = B.length >= 5 ? 15 : B.length === 4 ? 4 : B.length === 3 ? (B.some(c => c.rain) ? 2 : 3) : 0;
    let a = A.length >= 5 ? A.length - 4 : 0, r = R.length >= 5 ? R.length - 4 : 0;
    const j = J >= 10 ? J - 9 : 0, sets = [];
    for (const k in SETS) if (cap.filter(SETS[k]).length === 3) { sets.push(k); if (k === 'godori') a += 5; else r += 3; }
    return { total: b + a + r + j, b, a, r, j, sets, n: { b: B.length, a: A.length, r: R.length, j: J } };
  }

  /* ── the engine (no DOM): deal, a turn, the end ── */
  function deal(n) {
    for (let tries = 0; tries < 60; tries++) {
      const d = shuffle(DECK.slice()), hand = n === 3 ? 7 : 10, fieldN = n === 3 ? 6 : 8;
      const seats = [...Array(n)].map(() => ({ hand: [], cap: [], go: 0, goScore: 0, score: 0 }));
      seats.forEach(s => { s.hand = d.splice(0, hand).sort((x, y) => x.m - y.m || x.id.localeCompare(y.id)); });
      const field = d.splice(0, fieldN), cnt = {};
      field.forEach(c => { cnt[c.m] = (cnt[c.m] || 0) + 1; });
      if (Object.values(cnt).some(v => v >= 4)) continue;
      return { seats, field, deck: d, n, target: 3, over: false, result: null, turns: 0 };
    }
    throw new Error('hwatu: no deal');
  }
  // one player's turn. H = { pickHand(pi) -> card, pickField(pi, options, card) -> card, goStop(pi) -> bool, fx(name, data) } (all may be async)
  async function runTurn(G, pi, H) {
    const p = G.seats[pi], fx = H.fx || (() => {});
    const card = await H.pickHand(pi);
    if (!card || !p.hand.includes(card)) throw new Error('hwatu: bad card');
    p.hand.splice(p.hand.indexOf(card), 1); G.turns++;
    const fm = G.field.filter(c => c.m === card.m);
    let target = fm.length === 1 ? fm[0] : fm.length === 2 ? await H.pickField(pi, fm, card) : null;
    if (fm.length === 2 && !fm.includes(target)) target = fm[0];
    G.field.push(card);
    await fx('play', { pi, card, onto: target || fm[0] || null });
    let hp = fm.length === 3 ? [card, ...fm] : target ? [card, target] : null, fp = null, special = null;
    const fl = G.deck.pop();
    await fx('flip', { pi, card: fl });
    if (fm.length === 1 && fl.m === card.m) { // stuck: all three stay
      G.field.push(fl); hp = null; special = 'stuck';
      await fx('place', { pi, card: fl, onto: card });
    } else {
      const fm2 = G.field.filter(c => c.m === fl.m && !(hp && hp.includes(c)));
      let t2 = fm2.length === 1 ? fm2[0] : fm2.length === 2 ? await H.pickField(pi, fm2, fl) : null;
      if (fm2.length === 2 && !fm2.includes(t2)) t2 = fm2[0];
      G.field.push(fl);
      await fx('place', { pi, card: fl, onto: t2 || fm2[0] || null });
      if (fm2.length === 3) { fp = [fl, ...fm2]; special = 'unstick'; }
      else if (t2) { fp = [fl, t2]; if (!hp && t2 === card) special = 'kiss'; else if (hp && fl.m === card.m) special = 'ttadak'; }
    }
    const took = [...(hp || []), ...(fp || [])];
    if (took.length) {
      G.field = G.field.filter(c => !took.includes(c)); p.cap.push(...took);
      await fx('capture', { pi, cards: took, special });
    } else if (special) await fx('capture', { pi, cards: [], special });
    let steal = special === 'kiss' || special === 'ttadak' || special === 'unstick' ? 1 : 0;
    if (took.length && !G.field.length && G.deck.length) { steal++; await fx('special', { pi, kind: 'sweep' }); }
    for (let k = 0; k < steal; k++) {
      for (let i = 0; i < G.n; i++) {
        if (i === pi) continue;
        const js = G.seats[i].cap.filter(c => c.t === 'j'); if (!js.length) continue;
        const c = js.find(x => x.pi === 1) || js[0];
        G.seats[i].cap.splice(G.seats[i].cap.indexOf(c), 1); p.cap.push(c);
        await fx('steal', { from: i, to: pi, card: c });
      }
    }
    G.seats.forEach(s => { s.score = score(s.cap).total; });
    await fx('score', { pi });
    const last = G.seats.every(s => !s.hand.length);
    if (p.score >= G.target && p.score > p.goScore) {
      const go = !last && p.hand.length ? !!(await H.goStop(pi)) : false;
      if (go) { p.go++; p.goScore = p.score; await fx('go', { pi }); }
      else { settle(G, pi, 'stop'); return G.result; }
    }
    if (last) { settle(G, null, 'out'); return G.result; }
    return null;
  }
  function settle(G, winner, how) {
    G.over = true;
    if (winner == null) {
      const goers = G.seats.map((s, i) => i).filter(i => G.seats[i].go > 0).sort((a, b) => G.seats[b].score - G.seats[a].score);
      if (!goers.length) return (G.result = { winner: null, how: 'nagari', base: 0, points: 0, gos: 0, goBak: false });
      winner = goers[0];
    }
    const w = G.seats[winner], gos = w.go;
    let pts = w.score + Math.min(gos, 2);
    if (gos >= 3) pts *= 2 ** (gos - 2);
    const goBak = how === 'stop' && G.seats.some((s, i) => i !== winner && s.go > 0);
    if (goBak) pts *= 2;
    return (G.result = { winner, how, base: w.score, points: pts, gos, goBak });
  }

  /* ── Eomma's head (also the auntie's, and Solar's in the test) ── */
  const DIFF = {
    easy:   { rand: 0.4,  deny: 0,   risk: 0.25, count: false, noise: 3,    think: [900, 1500], go: 'rash' },
    normal: { rand: 0.06, deny: 0.7, risk: 0.8,  count: false, noise: 1.2,  think: [800, 1300], go: 'safe' },
    hard:   { rand: 0,    deny: 1.1, risk: 1,    count: true,  noise: 0.25, think: [700, 1200], go: 'sharp' },
  };
  const VAL = c => c.t === 'b' ? (c.rain ? 4 : 6) : c.t === 'a' ? (c.bird ? 4.5 : 3) : c.t === 'r' ? (c.rib === 'rain' ? 2 : 3) : c.pi;
  // what these cards are worth added to this pile: points gained (x4), the card, progress toward a set / brights
  function gain(cap, cards) {
    if (!cards.length) return 0;
    let v = 4 * (score(cap.concat(cards)).total - score(cap).total);
    for (const c of cards) {
      v += VAL(c);
      for (const k in SETS) if (SETS[k](c)) v += cap.filter(SETS[k]).length * 1.2;
      if (c.t === 'b') v += cap.filter(x => x.t === 'b').length * 1.2;
      if (c.t === 'j') v += Math.max(0, cap.filter(x => x.t === 'j').length - 5) * 0.25;
    }
    return v;
  }
  const others = (G, pi) => G.seats.filter((_, i) => i !== pi);
  const deny = (G, pi, cards) => Math.max(0, ...others(G, pi).map(o => gain(o.cap, cards)));
  const unseen = (G, pi, m) => 4 - G.seats[pi].hand.filter(c => c.m === m).length - G.field.filter(c => c.m === m).length
    - G.seats.reduce((s, x) => s + x.cap.filter(c => c.m === m).length, 0);
  const near = (G, cap) => { const s = score(cap); return s.total >= G.target - 1 || Object.keys(SETS).some(k => cap.filter(SETS[k]).length === 2) || s.n.b >= 2 || s.n.j >= 8 || s.n.r >= 4 || s.n.a >= 4; };
  const ai = {
    field(G, pi, opts, D) {
      if (Math.random() < D.rand) return pick(opts);
      const p = G.seats[pi];
      return opts.reduce((best, c) => (gain(p.cap, [c]) + D.deny * deny(G, pi, [c]) * 0.6 > gain(p.cap, [best]) + D.deny * deny(G, pi, [best]) * 0.6 ? c : best), opts[0]);
    },
    hand(G, pi, D) {
      const p = G.seats[pi];
      if (Math.random() < D.rand) return pick(p.hand);
      let best = p.hand[0], bv = -1e9;
      for (const c of p.hand) {
        const fm = G.field.filter(x => x.m === c.m);
        let v;
        if (fm.length) {
          const take = fm.length === 3 ? [c, ...fm] : [c, fm.length === 2 ? ai.field(G, pi, fm, { ...D, rand: 0 }) : fm[0]];
          v = 2 + gain(p.cap, take) + D.deny * deny(G, pi, take.slice(1)) * 0.6;
          if (fm.length === 3) v += 2;
          // a single match with the month's last card still out: a flip could leave it stuck
          if (fm.length === 1 && D.count && unseen(G, pi, c.m) === 1) v -= 1.5;
        } else {
          const mine = p.hand.filter(x => x !== c && x.m === c.m).length;
          let risk = deny(G, pi, [c]);
          risk *= D.count ? (unseen(G, pi, c.m) > 0 ? 0.6 : 0.05) : 0.5;
          if (mine) risk *= 0.4;
          v = -D.risk * risk - VAL(c) * 0.3;
        }
        v += (Math.random() * 2 - 1) * D.noise;
        if (v > bv) { bv = v; best = c; }
      }
      return best;
    },
    go(G, pi, D) {
      const p = G.seats[pi], left = p.hand.length, opp = others(G, pi), oppMax = Math.max(...opp.map(o => o.score));
      if (left < 2) return false;
      if (D.go === 'rash') return Math.random() < 0.45;
      if (D.go === 'safe') return oppMax === 0 && left >= 4 && p.go < 1;
      return left >= 3 && p.go < 3 && !opp.some(o => near(G, o.cap));
    },
  };

  /* ── drawn card faces (a 60 x 96 box; traditional hwatu red, black, white, a little green; blue only on blue ribbons) ── */
  const R = '#c8102e', K = '#1b1214', W = '#fffaf2', GR = '#2f4a2d', BL = '#1f4fa8', BR = '#6b4a2e';
  const dots = (pts, r, f, stroke = '') => pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${f}"${stroke}/>`).join('');
  const blossom = pts => pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4.6" fill="${R}"/><circle cx="${x}" cy="${y}" r="1.5" fill="${W}"/>`).join('');
  const leaf = (x, y, s = 1.4, f = R) => `<path transform="translate(${x} ${y}) scale(${s})" d="M0-8 2-3 7-5 4 0 8 3 2 3 0 8-2 3-8 3-4 0-7-5-2-3z" fill="${f}"/>`;
  const FLOWER = {
    1: `<path d="M30 38 17 56h26zM30 50 13 72h34zM30 62 10 86h40z" fill="${GR}"/><path d="M30 84v10" stroke="${K}" stroke-width="3"/>`,
    2: `<path d="M8 92C20 72 30 60 52 34" stroke="${K}" stroke-width="3" fill="none"/>${blossom([[16, 80], [26, 66], [38, 52], [50, 40], [34, 72]])}`,
    3: `<path d="M30 94V56" stroke="${K}" stroke-width="2.4"/>${dots([[18, 44], [28, 38], [40, 42], [22, 54], [34, 50], [44, 56], [14, 62], [28, 62]], 5, '#e2405e')}${dots([[18, 44], [28, 38], [40, 42], [22, 54], [34, 50], [44, 56], [14, 62], [28, 62]], 1.6, W)}`,
    4: `<g stroke="${K}" stroke-width="2" fill="none"><path d="M14 22c-3 20 4 40 0 66"/><path d="M30 22c2 20-4 40 0 60"/><path d="M46 22c-3 20 4 40 0 66"/></g>${dots([[12, 34], [16, 46], [13, 58], [31, 32], [28, 44], [31, 56], [44, 36], [48, 50], [45, 62], [15, 72], [47, 76]], 2.4, K)}`,
    5: `<path d="M20 94C18 70 14 50 8 28M30 94c0-24 2-44 4-68M40 94c2-20 8-40 16-60" stroke="${GR}" stroke-width="3" fill="none"/>${dots([[9, 32], [34, 30], [54, 38]], 3.2, R)}`,
    6: `<path d="M8 90q8-26 22-28M52 90q-8-26-22-28M30 90V72" stroke="${K}" stroke-width="3" fill="none"/><circle cx="30" cy="60" r="14" fill="${R}"/><circle cx="30" cy="60" r="9" fill="#e8455e"/><circle cx="30" cy="60" r="3.6" fill="${W}"/>`,
    7: `<path d="M8 28q30 10 46 64M20 22q22 30 16 70" stroke="${K}" stroke-width="2" fill="none"/>${dots([[16, 32], [26, 36], [36, 44], [44, 56], [50, 70], [24, 30], [30, 46], [34, 60], [36, 76]], 2.6, R)}`,
    8: `<path d="M0 62q30-26 60 0v34H0z" fill="${K}"/><path d="M10 92l4-18M20 92l2-20M34 92l-2-22M46 92l-4-18" stroke="${W}" stroke-width="1" opacity=".55"/>`,
    9: `<path d="M14 92q6-14 16-22M46 92q-6-14-16-22" stroke="${GR}" stroke-width="3" fill="none"/><g stroke="${R}" stroke-width="3.2" stroke-linecap="round">${[...Array(12)].map((_, i) => { const a = i * Math.PI / 6; return `<path d="M${30 + Math.cos(a) * 5} ${58 + Math.sin(a) * 5}L${30 + Math.cos(a) * 14} ${58 + Math.sin(a) * 14}"/>`; }).join('')}</g><circle cx="30" cy="58" r="4.5" fill="${W}" stroke="${R}"/>`,
    10: `${leaf(18, 40)}${leaf(42, 48)}${leaf(24, 66)}${leaf(44, 78)}${leaf(14, 84, 1)}<path d="M18 40 30 94M42 48l-12 46" stroke="${K}" stroke-width="1.2"/>`,
    11: `<path d="M8 74q22-40 44 0q-22 22-44 0z" fill="${K}"/><path d="M30 54v30M18 70q12 8 24 0" stroke="${GR}" stroke-width="1.4" fill="none"/>${dots([[30, 28], [26, 34], [34, 34], [30, 40], [27, 46], [33, 46]], 2.4, R)}`,
    12: `<path d="M10 18c10 20 0 50 8 76M26 18c8 24-2 48 6 76M44 18c6 20-6 50 2 76" stroke="${GR}" stroke-width="2.4" fill="none"/><g stroke="${K}" stroke-width="1" opacity=".6"><path d="M16 30l-3 8M38 26l-3 8M52 44l-3 8M8 56l-3 8M36 60l-3 8"/></g>`,
  };
  const BIRD = f => `<path d="M16 58q8-10 20-6l8-5-3 9q-4 10-17 8q-6-1-8-6z" fill="${f}" stroke="${K}" stroke-width="1"/><circle cx="35" cy="54" r="1.2" fill="${W}"/>`;
  const ANIMAL = {
    2: BIRD('#6f8a3c'), 4: BIRD(K),
    5: `<path d="M4 70h20v7H4zM22 77h20v7H22zM40 63h17v7H40z" fill="${BR}" stroke="${K}"/>`,
    6: `<g stroke="${K}" stroke-width=".8">${dots([[22, 36], [30, 36]], 5, R)}${dots([[24, 43], [28, 43]], 3.5, R)}${dots([[42, 26], [47, 26]], 3.2, K)}</g>`,
    7: `<ellipse cx="30" cy="76" rx="16" ry="9" fill="${BR}" stroke="${K}"/><path d="M20 84v8M26 84v8M36 84v8M42 84v8" stroke="${K}" stroke-width="2.4"/><path d="M46 74l7 2-7 3z" fill="${K}"/>`,
    8: `<path d="M12 30l5 4 5-4M26 22l5 4 5-4M40 32l5 4 5-4" stroke="${K}" stroke-width="2.6" fill="none"/>`,
    9: `<path d="M18 74h24l-4 11H22z" fill="${R}" stroke="${K}"/><ellipse cx="30" cy="74" rx="12" ry="3" fill="${R}" stroke="${K}"/><text x="30" y="83" text-anchor="middle" font-size="7" fill="${W}">壽</text>`,
    10: `<ellipse cx="30" cy="74" rx="13" ry="7" fill="${BR}" stroke="${K}"/><path d="M40 70l6-10M22 80v10M28 80v10M34 80v10M40 78v10" stroke="${K}" stroke-width="2"/><path d="M46 60l-4-8M46 60l4-8M44 56l-5-2M48 56l5-2" stroke="${K}" stroke-width="1.4"/>`,
    12: `<path d="M12 52l14 5 16-10-6 12 10 8-14-4-10 10 2-12z" fill="${K}"/>`,
  };
  const BRIGHT = {
    1: [`<circle cx="38" cy="34" r="11" fill="${R}"/>`, `<ellipse cx="26" cy="78" rx="11" ry="6.5" fill="${W}" stroke="${K}"/><path d="M34 76q8-14 4-24" stroke="${K}" stroke-width="2" fill="none"/><circle cx="38" cy="51" r="2.4" fill="${R}"/>`],
    3: ['', `<rect x="6" y="66" width="48" height="24" fill="${R}"/><path d="M6 72h48M6 79h48M6 86h48" stroke="${W}" stroke-width="1.3"/>`],
    8: [`<rect x="0" y="0" width="60" height="62" fill="${R}"/><circle cx="30" cy="38" r="13" fill="${W}"/>`, ''],
    11: ['', `<path d="M10 56q14-20 30-10l10-8-4 12q4 14-14 18q-10 2-22-12z" fill="${R}" stroke="${K}"/><path d="M10 56l-6 10M12 60l-4 12M16 64l-1 12" stroke="${R}" stroke-width="2"/>`],
    12: ['', `<path d="M16 60a15 13 0 0 1 30 0z" fill="${R}" stroke="${K}"/><path d="M31 60v24" stroke="${K}" stroke-width="2"/><circle cx="22" cy="68" r="3.4" fill="${K}"/><path d="M19 72h6l2 16h-10z" fill="${K}"/>`],
  };
  const ribbon = c => {
    const f = c.rib === 'blue' ? BL : R;
    const ink = c.rib === 'red' ? `<path d="M20 34l2 6M27 36l1 6M34 38l2 6M41 40l1 6" stroke="${K}" stroke-width="1.8"/>` : c.rib === 'rain' ? `<path d="M18 33l-3 7M28 36l-3 7M38 39l-3 7" stroke="${K}" stroke-width="3"/>` : '';
    return `<path d="M6 26 54 40v10L6 36z" fill="${f}" stroke="${K}" stroke-width=".6"/>${ink}`;
  };
  function faceSVG(c) {
    const br = c.t === 'b' ? BRIGHT[c.m] : ['', ''];
    let s = br[0] + FLOWER[c.m];
    if (c.t === 'a') s += ANIMAL[c.m];
    if (c.t === 'r') s += ribbon(c);
    s += br[1];
    if (c.t === 'b') s += `<circle cx="49" cy="11" r="8.4" fill="${R}" stroke="${W}" stroke-width="1.2"/><text x="49" y="14.6" text-anchor="middle" font-size="10" font-weight="700" fill="${W}">光</text>`;
    return `<svg viewBox="0 0 60 96" aria-hidden="true">${s}</svg>`;
  }

  /* ── what Eomma (and the auntie) say: short, cool, dry ── */
  const LINES = {
    start: ['Sit properly. One game.', 'Thursday practice, then.', 'Your lead.'],
    youBig: ['Don’t look so pleased.', 'Lucky.', 'Hm. You’ve been watching us.', 'Mm.'],
    herBig: ['Mine.', 'Thank you.', 'That one was always mine.'],
    block: ['Were you saving that?', 'You were obvious.', 'Not that one.'],
    stuckYou: ['Careful.', 'That’s stuck now.'],
    stuckHer: ['Hm.', 'Leave it.'],
    sweepYou: ['Neat.', 'Tidy.'],
    sweepHer: ['There.', 'Clean.'],
    youGo: ['Brave.', 'Go, then.', 'Hm. Brave.'],
    youStop: ['Sensible.', 'Wise.'],
    herGo: ['Go.', 'I’ll keep going.'],
    herStop: ['Stop. That’s enough.', 'Stop.'],
    youWin: ['Well played. Again next Thursday.', 'Hm. Fine.'],
    youLose: ['Again.', 'Again. Sit up straight.'],
    draw: ['Nobody, then. Shuffle.'],
    idle: ['Your turn, Solar.', 'Take your time. Not that much.'],
  };
  const AUNT = { hurt: ['Aigoo, unni.', 'You’re merciless.', 'Ah, my bird!'], happy: ['Oh! Look at that.', 'Finally.'], win: ['Ha! Pay up.'] };

  /* ── portraits (drawn stand-ins) ── */
  const FACE = {
    mother: `<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="23" fill="#2a0f1c"/><circle cx="31" cy="13" r="6" fill="${K}"/><path d="M12 26a12 13 0 0 1 24 0v4H12z" fill="${K}"/><ellipse cx="24" cy="27" rx="8.5" ry="10" fill="#f1d9c8"/><path d="M15 24q9-10 18 0" stroke="${K}" stroke-width="4" fill="none"/><path d="M20 28h3M26 28h3" stroke="${K}" stroke-width="1.2"/><path d="M22 33h4" stroke="#b03050" stroke-width="1.4"/><path d="M8 48q16-14 32 0" fill="#ff4f9e"/></svg>`,
    auntie: `<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="23" fill="#2a0f1c"/>${dots([[15, 18], [20, 13], [27, 12], [33, 16], [35, 23], [13, 25]], 5, '#3a2420')}<ellipse cx="24" cy="27" rx="8.5" ry="10" fill="#f3dccb"/><path d="M20 27q1.5-2 3 0M26 27q1.5-2 3 0" stroke="${K}" stroke-width="1.2" fill="none"/><path d="M21 33q3 3 6 0" stroke="#b03050" stroke-width="1.4" fill="none"/><path d="M8 48q16-14 32 0" fill="#ff9ac8"/></svg>`,
    solar: `<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="23" fill="#2a0f1c"/><path d="M11 40V24a13 14 0 0 1 26 0v16z" fill="${K}"/><ellipse cx="24" cy="26" rx="8.5" ry="10" fill="#f6e0d2"/><path d="M15 22q4-9 18-2" stroke="${K}" stroke-width="4" fill="none"/><circle cx="20.5" cy="27" r="1.1" fill="${K}"/><circle cx="27.5" cy="27" r="1.1" fill="${K}"/><path d="M22 33h4" stroke="#d0406a" stroke-width="1.4"/><path d="M8 48q16-14 32 0" fill="#ff4f9e"/></svg>`,
  };

  let cur = null; // test hook: FemcHwatu.state()
  function play(o = {}) {
    return new Promise(done => {
      const host = o.host || document.body;
      const diff = DIFF[o.difficulty] ? o.difficulty : 'normal', D = DIFF[diff];
      const N = +o.seats === 3 ? 3 : 2, still = reduced.matches;
      const G = deal(N); G.target = Math.max(1, Math.round(+o.target) || 3);
      const WHO = ['solar', 'mother', 'auntie'], NAME = ['Solar', 'Eomma', 'Auntie'];
      const st = { G, paused: false, over: false, begun: false, mode: null, sel: 0, opts: null, resolve: null, lineAt: -9, quiet: 0 };
      cur = st;
      const timers = new Set();
      const later = (fn, ms) => { const id = setTimeout(() => { timers.delete(id); fn(); }, ms); timers.add(id); return id; };
      const raw = ms => new Promise(r => later(r, ms));
      const gate = async () => { while (st.paused) await raw(120); };
      const wait = async ms => { await raw(still ? Math.min(ms, 160) : ms); await gate(); };

      const el = document.createElement('div');
      el.className = 'mg-hw' + (still ? ' still' : '') + (N === 3 ? ' three' : '');
      el.setAttribute('role', 'application'); el.setAttribute('aria-label', 'Hwatu (Go-Stop)');
      const seatHTML = i => `<section class="hw-seat ${i ? 'opp' : 'me'}" data-s="${i}">
          <div class="hw-who"><div class="hw-pic"><img src="${ART(WHO[i])}" alt="" onerror="this.remove()">${FACE[WHO[i]]}</div>
            <div class="hw-name"><b>${NAME[i]}</b><span class="hw-pts" aria-live="polite">0</span><em class="hw-go" hidden></em></div>
            <p class="hw-bub" aria-live="polite"></p></div>
          <div class="hw-hand"></div>
          <div class="hw-caps">${['b', 'a', 'r', 'j'].map(t => `<div class="hw-grp" data-t="${t}" title="${TYPE[t]}"><i>${KO[t]}<em>0</em></i><div class="hw-stk"></div></div>`).join('')}</div>
          <div class="hw-sets"></div></section>`;
      el.innerHTML = `
        <div class="hw-room"><img class="hw-bg" src="${BG(o.bg || 'epi-s-front-room')}" alt="" onerror="this.remove()"></div>
        <header class="hw-top"><b class="hw-title">HWATU</b><span class="hw-goal">First to ${G.target} · Go or Stop</span>
          <span class="hw-turn"></span><button type="button" class="hw-btn" data-hw="rules" aria-expanded="false">Rules</button>
          <button type="button" class="hw-btn" data-hw="pause" aria-label="Pause">II</button></header>
        <div class="hw-opps">${N === 3 ? seatHTML(2) : ''}${seatHTML(1)}</div>
        <div class="hw-felt"><img class="hw-felt-art" src="${ART('felt')}" alt="" onerror="this.remove()">
          <div class="hw-pile" title="The pile"><span class="hw-count">0</span></div><div class="hw-field" aria-label="The felt"></div>
          <p class="hw-toast" aria-live="polite"></p></div>
        ${seatHTML(0)}
        <aside class="hw-rules" hidden><button type="button" class="hw-x" data-hw="rules" aria-label="Close rules">×</button>
          <h3>Go-Stop, quickly</h3>
          <p><b>Your turn:</b> play a card onto one of the <b>same month</b> (the number in the corner; glowing cards have a match). Then the top of the pile flips and matches the same way. Matched pairs are yours. No match: the card stays on the felt.</p>
          <p><b>Two of that month on the felt?</b> Pick one. <b>Three?</b> Take all four.</p>
          <p><b>Stuck (뻑):</b> you matched one and the flip was the same month: all three stay. <b>Kiss (쪽)</b>, <b>ttadak (따닥)</b>, taking a stuck three, or a <b>sweep</b> (the felt left empty) each steal a junk from everyone.</p>
          <table><tr><th>광 Brights</th><td>3 = 3 (2 with December's rain) · 4 = 4 · 5 = 15</td></tr>
            <tr><th>열 Animals</th><td>5 = 1, +1 each more · <b>Godori</b> (Feb, Apr, Aug birds) +5</td></tr>
            <tr><th>띠 Ribbons</th><td>5 = 1, +1 each more · red with writing (Jan-Mar) +3 · blue (Jun, Sep, Oct) +3 · plain red (Apr, May, Jul) +3</td></tr>
            <tr><th>피 Junk</th><td>10 = 1, +1 each more (a double junk, 쌍피, counts 2)</td></tr></table>
          <p><b>${G.target} points:</b> Stop to win, or Go for more (+1 a Go; three Gos double). If you Go and someone else then reaches ${G.target} and stops, they score double.</p>
          <p class="hw-keys">Keys: ← → Enter · G / S · R rules · Esc pause</p></aside>
        <div class="hw-ask" hidden></div>
        <div class="mg-pause" hidden><b>Paused</b><button type="button" data-mg="resume">Resume</button><button type="button" data-mg="howto">How to play</button><button type="button" data-mg="quit">Quit</button></div>
        <div class="mg-end" hidden></div>`;
      host.appendChild(el);
      const $ = s => el.querySelector(s);
      const seatEl = i => el.querySelector(`.hw-seat[data-s="${i}"]`);
      const pile = $('.hw-pile'), field = $('.hw-field');

      /* polish (Nov 11 2026, Kat: "every minigame needs as many visuals as possible, as much animation as possible"): a particle /
         stamp layer (.hw-fx) over the table: dust puffs on every slap, sparks on a bright, coins sliding to a seat when its points rise,
         a flourish when a set completes (godori: three birds fly across), portrait moods (.hw-pic[data-mood]: talk, smug, stung, glow),
         the Go / Stop stamp, petals on a win, a ticking end card. Ambient: sunroom light and drifting motes (CSS). None of it changes
         play. still (reduced motion): none of it; calm (Reduce flashes, .calm): no flashes or glows; perf (Performance, .perf): no
         ambient motion, fewer particles. */
      const GS0 = (window.FemcGame && window.FemcGame.settings && window.FemcGame.settings()) || {};
      const calm = !!(o.calm ?? GS0.calm), perf = !!(o.perf ?? GS0.perf);
      if (calm) el.classList.add('calm');
      if (perf) el.classList.add('perf');
      const fxL = document.createElement('div'); fxL.className = 'hw-fx'; fxL.setAttribute('aria-hidden', 'true'); el.appendChild(fxL);
      const at = n => { const a = n.getBoundingClientRect(), b = el.getBoundingClientRect(); return { x: a.left - b.left + a.width / 2, y: a.top - b.top + a.height / 2, w: a.width, h: a.height }; };
      const spawn = (cls, x, y, life, vars) => {
        const p = document.createElement('i'); p.className = cls; p.style.left = x.toFixed(1) + 'px'; p.style.top = y.toFixed(1) + 'px';
        if (vars) for (const k in vars) p.style.setProperty(k, vars[k]);
        fxL.appendChild(p); later(() => p.remove(), life); return p;
      };
      const px = v => v.toFixed(1) + 'px';
      const puff = (n, v = 1) => {
        if (still || !n || !n.isConnected) return;
        const c = at(n), k = perf ? 3 : Math.round(6 * v) + 3;
        for (let i = 0; i < k; i++) {
          const a = Math.PI * (i / (k - 1)) + (Math.random() - 0.5) * 0.4, r = 16 + Math.random() * 24;
          spawn('hw-dust', c.x + Math.cos(a) * c.w * 0.4, c.y + c.h * 0.4, 760, { '--dx': px(Math.cos(a) * r), '--dy': px(-Math.sin(a) * (5 + Math.random() * 12)), '--s': (0.6 + Math.random() * 0.9).toFixed(2) });
        }
      };
      const sparks = (n, k = 10) => {
        if (still || calm || !n || !n.isConnected) return;
        const c = at(n); k = perf ? Math.ceil(k / 3) : k;
        for (let i = 0; i < k; i++) { const a = Math.random() * Math.PI * 2, r = 22 + Math.random() * 34; spawn('hw-spark', c.x, c.y, 650, { '--dx': px(Math.cos(a) * r), '--dy': px(Math.sin(a) * r) }); }
      };
      const coins = (i, k) => {
        if (still || !st.begun || k <= 0) return;
        const from = at(field), to = at(seatEl(i).querySelector('.hw-pts'));
        k = Math.min(perf ? 2 : 6, k + 1);
        for (let j = 0; j < k; j++) later(() => {
          const x = from.x + (Math.random() - 0.5) * 80, y = from.y + (Math.random() - 0.5) * 24;
          spawn('hw-coin', x, y, 950, { '--tx': px(to.x - x), '--ty': px(to.y - y), '--arc': px(-30 - Math.random() * 40) }); S.coin(j % 3);
        }, j * 80);
      };
      const mood = (i, m, ms = 1600) => {
        const se = seatEl(i); if (!se || still) return; const p = se.querySelector('.hw-pic');
        p.dataset.mood = m; clearTimeout(p._m); p._m = later(() => { if (p.dataset.mood === m) delete p.dataset.mood; }, ms);
      };
      const stamp = (txt, kind) => {
        if (still) return;
        fxL.querySelectorAll('.hw-stamp').forEach(x => x.remove());
        const b = document.createElement('div'); b.className = 'hw-stamp ' + kind; b.innerHTML = `<b>${esc(txt)}</b>`; fxL.appendChild(b); later(() => b.remove(), 1300);
      };
      const BIRD_SVG = '<svg viewBox="0 0 60 30" aria-hidden="true"><path class="w1" d="M30 16Q18 2 2 8Q16 10 30 18Z"/><path class="w2" d="M30 16Q42 2 58 8Q44 10 30 18Z"/><ellipse cx="30" cy="17" rx="7" ry="3.4"/></svg>';
      const flourish = (i, k) => {
        if (still) return;
        S.set();
        const b = document.createElement('div'); b.className = 'hw-flour k-' + k;
        b.innerHTML = `<p><b>${k === 'godori' ? '고도리' : k === 'red' ? '홍단' : k === 'blue' ? '청단' : '초단'}</b><small>${esc(SETNAME[k])}${i ? ' · ' + esc(NAME[i]) : ''}</small></p>`
          + (k === 'godori' ? [0, 1, 2].map(j => `<span class="hw-bird" style="--d:${j * 0.18}s;--y:${18 + j * 14}%">${BIRD_SVG}</span>`).join('') : [0, 1, 2].map(j => `<span class="hw-rib" style="--d:${j * 0.12}s;--y:${30 + j * 16}%"></span>`).join(''));
        fxL.appendChild(b); later(() => b.remove(), perf ? 1600 : 2400);
        mood(1, i === 0 ? 'stung' : 'smug', 2200);
      };
      const petals = () => {
        if (still || calm && perf) return;
        for (let j = 0; j < (perf ? 10 : 26); j++) spawn('hw-petal', Math.random() * (el.clientWidth || 800), -20, 5200, { '--d': (Math.random() * 1.8).toFixed(2) + 's', '--sx': px((Math.random() - 0.5) * 160), '--r': Math.round(Math.random() * 720 - 360) + 'deg' });
      };

      /* sound: Web Audio, made here */
      let ac = null, nbuf = null, master = null;
      const audio = () => {
        if (o.mute || ac) return;
        try { ac = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { ac = null; return; }
        master = ac.createGain(); master.gain.value = 0.8; master.connect(ac.destination);
        nbuf = ac.createBuffer(1, ac.sampleRate * 0.5, ac.sampleRate); const d = nbuf.getChannelData(0);
        for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 2);
      };
      const noise = (t, dur, type, f, q, vol) => {
        const s = ac.createBufferSource(); s.buffer = nbuf; const b = ac.createBiquadFilter(); b.type = type; b.frequency.value = f; b.Q.value = q;
        const g = ac.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        s.connect(b); b.connect(g); g.connect(master); s.start(t); s.stop(t + dur + 0.05);
      };
      const tone = (t, f, dur, vol, type = 'sine', f2) => {
        const os = ac.createOscillator(); os.type = type; os.frequency.setValueAtTime(f, t); if (f2) os.frequency.exponentialRampToValueAtTime(f2, t + dur);
        const g = ac.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(vol, t + 0.008); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        os.connect(g); g.connect(master); os.start(t); os.stop(t + dur + 0.05);
      };
      const S = {
        thwack: (v = 1) => { if (!ac) return; const t = ac.currentTime; noise(t, 0.07, 'lowpass', 1100, 0.8, 0.55 * v); tone(t, 120, 0.12, 0.5 * v, 'sine', 48); noise(t + 0.004, 0.025, 'bandpass', 2600, 1.2, 0.12 * v); },
        flip: () => { if (!ac) return; const t = ac.currentTime; noise(t, 0.09, 'bandpass', 3400, 0.9, 0.16); noise(t + 0.06, 0.04, 'highpass', 5000, 0.7, 0.06); },
        clack: (i = 0) => { if (!ac) return; const t = ac.currentTime + i * 0.07; noise(t, 0.035, 'bandpass', 1900 + i * 120, 2, 0.28); tone(t, 900, 0.03, 0.05, 'triangle'); },
        go: () => { if (!ac) return; const t = ac.currentTime; tone(t, 523, 0.18, 0.18, 'triangle'); tone(t + 0.12, 784, 0.32, 0.18, 'triangle'); },
        stop: () => { if (!ac) return; const t = ac.currentTime; tone(t, 196, 1.3, 0.22); tone(t, 294, 1.1, 0.12); noise(t, 0.05, 'lowpass', 800, 0.7, 0.4); },
        pop: () => { if (!ac) return; const t = ac.currentTime; tone(t, 880, 0.12, 0.08, 'sine', 1320); },
        coin: (i = 0) => { if (!ac) return; const t = ac.currentTime + i * 0.05; tone(t, 1900 + i * 140, 0.07, 0.035, 'triangle'); tone(t + 0.02, 2600, 0.05, 0.02, 'sine'); },
        set: () => { if (!ac) return; const t = ac.currentTime; [659, 784, 988, 1319].forEach((f, i) => tone(t + i * 0.07, f, 0.35, 0.09, 'triangle')); noise(t, 0.4, 'highpass', 6000, 0.6, 0.05); },
        win: () => { if (!ac) return; const t = ac.currentTime; [523, 659, 784, 1047].forEach((f, i) => tone(t + i * 0.11, f, 0.5, 0.14, 'triangle')); },
        lose: () => { if (!ac) return; const t = ac.currentTime; tone(t, 330, 0.5, 0.14, 'triangle'); tone(t + 0.25, 247, 0.8, 0.14, 'triangle'); },
      };

      /* cards */
      const nodes = new Map();
      let cardArt = false;
      const mk = c => {
        const n = document.createElement('div');
        n.className = 'hw-card down'; n.dataset.id = c.id; n.dataset.m = c.m; n.dataset.t = c.t;
        n.style.setProperty('--r', ((Math.random() * 2 - 1) * 2.2).toFixed(2) + 'deg');
                n.innerHTML = `<div class="hw-in"><div class="hw-face">${faceSVG(c)}<b class="hw-m">${c.m}</b><i class="hw-k k-${c.t}">${KO[c.t]}${c.pi === 2 ? '<sup>2</sup>' : ''}</i></div><div class="hw-back"></div></div>`;
        nodes.set(c.id, n); n._c = c; return n;
      };
      const addArt = () => nodes.forEach((n, id) => { const f = n.querySelector('.hw-face'); if (f.querySelector('img')) return; const im = document.createElement('img'); im.alt = ''; im.src = ART('cards/' + id); im.onerror = () => im.remove(); f.appendChild(im); });
      { const probe = new Image(); probe.onload = () => { cardArt = true; addArt(); }; probe.src = ART('cards/01b'); }
      { const probe = new Image(); probe.onload = () => el.classList.add('art-back'); probe.src = ART('back'); el.style.setProperty('--back', `url("${ART('back')}")`); }
      const node = c => nodes.get(c.id);
      const reveal = n => { n.classList.remove('down'); n.setAttribute('aria-label', cardName(n._c)); n.title = cardName(n._c); };
      const slotOf = m => {
        let s = field.querySelector(`.hw-slot[data-m="${m}"]`);
        if (!s) {
          s = document.createElement('div'); s.className = 'hw-slot'; s.dataset.m = m;
          const after = [...field.children].find(x => +x.dataset.m > m); field.insertBefore(s, after || null);
        }
        return s;
      };
      const tidy = () => field.querySelectorAll('.hw-slot').forEach(s => { if (!s.children.length) s.remove(); });
      // FLIP: measure every card, change the DOM, then glide each one from where it was
      const glide = async (fn, ms = 400, stag = 0) => {
        const ns = [...el.querySelectorAll('.hw-card')], r0 = new Map(ns.map(n => [n, n.getBoundingClientRect()]));
        fn();
        if (still || typeof ns[0]?.animate !== 'function') return;
        let k = 0, longest = 0;
        for (const n of ns) {
          const a = r0.get(n), b = n.getBoundingClientRect();
          if (!a.width || !b.width) continue;
          const dx = a.left - b.left, dy = a.top - b.top, sc = a.width / b.width;
          if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5 && Math.abs(sc - 1) < 0.01) continue;
          const mv = n.classList.contains('mv'), delay = mv ? (k++) * stag : 0, dur = mv ? ms : ms * 0.7;
          longest = Math.max(longest, delay + dur);
          n.animate([{ transform: `translate(${dx}px, ${dy}px) scale(${sc})`, transformOrigin: '0 0' }, { transform: 'none', transformOrigin: '0 0' }],
            { duration: dur, delay, easing: mv ? 'cubic-bezier(.3, .9, .35, 1)' : 'ease-out', fill: 'backwards' });
        }
        return longest;
      };
      const slap = (n, v = 1) => {
        S.thwack(v); if (still) return;
        n.classList.remove('slap'); void n.offsetWidth; n.classList.add('slap'); puff(n, v);
        const s = n.parentElement; s && s.classList.remove('jolt'); s && void s.offsetWidth; s && s.classList.add('jolt');
      };

      /* the seats' piles and score */
      const upd = () => {
        G.seats.forEach((s, i) => {
          const se = seatEl(i), sc = score(s.cap), pts = se.querySelector('.hw-pts');
          if (pts.textContent !== String(sc.total)) {
            const was = +pts.textContent || 0;
            pts.textContent = sc.total;
            if (!still && st.begun) { pts.classList.remove('pop'); void pts.offsetWidth; pts.classList.add('pop'); S.pop(); if (sc.total > was) coins(i, sc.total - was); }
          }
          const seen = (st.setsSeen ||= [[], [], []])[i];
          sc.sets.forEach(k => { if (!seen.includes(k)) { seen.push(k); if (st.begun) flourish(i, k); } });
          ['b', 'a', 'r', 'j'].forEach(t => { se.querySelector(`.hw-grp[data-t="${t}"] em`).textContent = sc.n[t]; });
          const chips = [];
          if (sc.n.b >= 2) chips.push(`<i class="${sc.n.b >= 3 ? 'done' : ''}">광 ${sc.n.b}${sc.n.b < 3 ? '/3' : ''}</i>`);
          for (const k in SETS) { const n = s.cap.filter(SETS[k]).length; if (n >= 2) chips.push(`<i class="${n === 3 ? 'done' : ''}">${SETNAME[k]} ${n}/3</i>`); }
          if (sc.n.j >= 7) chips.push(`<i class="${sc.n.j >= 10 ? 'done' : ''}">Junk ${sc.n.j}/10</i>`);
          se.querySelector('.hw-sets').innerHTML = chips.join('');
          const go = se.querySelector('.hw-go'); go.hidden = !s.go; go.textContent = s.go ? `${s.go} Go` : '';
          se.classList.toggle('hot', sc.total >= G.target);
        });
        $('.hw-count').textContent = G.deck.length;
        pile.classList.toggle('empty', !G.deck.length);
      };
      const turnLabel = i => { $('.hw-turn').textContent = i === 0 ? 'Your turn' : `${NAME[i]}’s turn`; el.querySelectorAll('.hw-seat').forEach(s => s.classList.toggle('now', +s.dataset.s === i)); };

      /* talk */
      const say = (i, list, force) => {
        if (!list || !list.length) return;
        if (!force && G.turns - st.lineAt < 2) return;
        st.lineAt = G.turns;
        const b = seatEl(i).querySelector('.hw-bub');
        b.textContent = pick(list); b.classList.add('on'); mood(i, list === LINES.youBig || list === LINES.block || list === AUNT.hurt ? 'stung' : list === LINES.herBig || list === LINES.herGo || list === LINES.youWin ? 'smug' : 'talk');
        clearTimeout(b._t); b._t = later(() => b.classList.remove('on'), 2600);
      };
      const toast = txt => { const t = $('.hw-toast'); t.textContent = txt; if (/Stuck|Kiss|Ttadak|Sweep|stuck three/.test(txt)) stamp(/Stuck/.test(txt) && !/Took/.test(txt) ? '뻑!' : /Kiss/.test(txt) ? '쪽!' : /Ttadak/.test(txt) ? '따닥!' : /Sweep/.test(txt) ? '쓸!' : '!', 'small'); t.classList.remove('on'); void t.offsetWidth; t.classList.add('on'); clearTimeout(toast.t); toast.t = later(() => t.classList.remove('on'), 2200); };
      const SPECIAL = { stuck: 'Stuck! Three of a month wait on the felt.', kiss: 'Kiss! A junk from each.', ttadak: 'Ttadak! A junk from each.', unstick: 'Took the stuck three! A junk from each.', sweep: 'Sweep! The felt is clear: a junk from each.' };

      /* the table's events (the engine calls these) */
      const fx = async (name, d) => {
        await gate();
        if (st.over) return;
        if (name === 'play' || name === 'place') {
          const n = node(d.card); n.classList.add('mv'); n.classList.remove('sel', 'can', 'lift');
          if (name === 'play' && d.pi !== 0) reveal(n);
          const ms = name === 'play' ? 420 : 360;
          await glide(() => { slotOf(d.card.m).appendChild(n); }, ms);
          await wait(ms * 0.85); slap(n, d.onto ? 1 : 0.75); n.classList.remove('mv');
          await wait(name === 'play' ? 280 : 340);
        } else if (name === 'flip') {
          const n = node(d.card); n.classList.add('lift', 'flip'); pile.appendChild(n); reveal(n); S.flip(); upd(); later(() => n.classList.remove('flip'), 620);
          await wait(480);
        } else if (name === 'capture') {
          const sp = d.special;
          if (sp && SPECIAL[sp]) toast((d.pi === 0 ? '' : NAME[d.pi] + ': ') + SPECIAL[sp]);
          if (sp === 'stuck') say(1, d.pi === 0 ? LINES.stuckYou : LINES.stuckHer);
          if (d.cards.length) {
            await wait(220);
            const order = { b: 0, a: 1, r: 2, j: 3 }, cards = d.cards.slice().sort((x, y) => order[x.t] - order[y.t]);
            const se = seatEl(d.pi);
            cards.forEach(c => node(c).classList.add('mv'));
            await glide(() => { cards.forEach(c => se.querySelector(`.hw-grp[data-t="${c.t}"] .hw-stk`).appendChild(node(c))); tidy(); }, 460, 70);
            cards.forEach((c, i) => later(() => S.clack(0), (still ? 0 : 380) + i * 70));
            await wait(460 + cards.length * 70);
            cards.forEach(c => node(c).classList.remove('mv'));
            if (!still) [...new Set(cards.map(c => c.t))].forEach(t => { const g = se.querySelector(`.hw-grp[data-t="${t}"]`); g.classList.remove('got'); void g.offsetWidth; g.classList.add('got'); });
            cards.filter(c => c.t === 'b').forEach(c => sparks(node(c), 12));
            if (d.pi === 0 && cards.some(c => c.t === 'b')) mood(1, 'stung');
            upd();
            // what they say about it
            const big = cards.some(c => c.t === 'b') || cards.length >= 4 || Object.keys(SETS).some(k => cards.some(SETS[k]) && G.seats[d.pi].cap.filter(SETS[k]).length >= 3);
            const block = d.pi !== 0 && cards.some(c => c.t !== 'j' && (gain(G.seats[0].cap, [c]) >= 6 || Object.keys(SETS).some(k => SETS[k](c) && G.seats[0].cap.filter(SETS[k]).length === 2)));
            if (d.pi === 0 && big) say(1, LINES.youBig, cards.some(c => c.t === 'b'));
            else if (d.pi === 1 && block) say(1, LINES.block);
            else if (d.pi === 1 && big) say(1, LINES.herBig);
            else if (N === 3 && d.pi !== 2 && cards.some(c => c.t === 'b' || c.bird) && Math.random() < 0.5) say(2, AUNT.hurt);
            else if (N === 3 && d.pi === 2 && big) say(2, AUNT.happy);
          }
        } else if (name === 'special') {
          toast((d.pi === 0 ? '' : NAME[d.pi] + ': ') + SPECIAL[d.kind]);
          say(1, d.pi === 0 ? LINES.sweepYou : LINES.sweepHer);
          await wait(500);
        } else if (name === 'steal') {
          const n = node(d.card); n.classList.add('mv');
          await glide(() => seatEl(d.to).querySelector('.hw-grp[data-t="j"] .hw-stk').appendChild(n), 420);
          await wait(420); S.clack(1); n.classList.remove('mv'); upd();
        } else if (name === 'score') {
          upd(); await wait(120);
        } else if (name === 'go') {
          upd(); S.go(); stamp('GO!', 'go'); mood(d.pi, 'glow');
          toast(`${d.pi === 0 ? 'You' : NAME[d.pi]}: Go! (${G.seats[d.pi].go})`);
          const se = seatEl(d.pi); se.classList.remove('went'); void se.offsetWidth; se.classList.add('went');
          say(1, d.pi === 0 ? LINES.youGo : d.pi === 1 ? LINES.herGo : AUNT.happy, true);
          await wait(900);
        }
      };

      /* the players */
      const markCan = on => {
        G.seats[0].hand.forEach((c, i) => {
          const n = node(c);
          n.classList.toggle('can', on && G.field.some(x => x.m === c.m));
          n.classList.toggle('sel', on && i === st.sel);
          n.tabIndex = on ? 0 : -1;
        });
      };
      const hint = m => field.querySelectorAll('.hw-slot').forEach(s => s.classList.toggle('hint', m != null && +s.dataset.m === m));
      const human = {
        pickHand: () => new Promise(r => {
          st.mode = 'hand'; st.sel = Math.min(st.sel, G.seats[0].hand.length - 1); markCan(true);
          const idle = later(() => { if (st.mode === 'hand') say(1, LINES.idle, true); }, 16000);
          st.resolve = c => { clearTimeout(idle); timers.delete(idle); st.mode = null; st.resolve = null; markCan(false); hint(null); r(c); };
        }),
        pickField: (pi, opts, card) => new Promise(r => {
          st.mode = 'field'; st.opts = opts; st.sel = 0;
          toast(`Two of ${MONTHS[card.m].en} on the felt: pick the one to take.`);
          const mark = () => opts.forEach((c, i) => { node(c).classList.add('pick'); node(c).classList.toggle('sel', i === st.sel); });
          mark(); st.mark = mark;
          st.resolve = c => { opts.forEach(x => node(x).classList.remove('pick', 'sel')); st.mode = null; st.resolve = null; st.opts = null; r(c); };
        }),
        goStop: () => new Promise(r => {
          st.mode = 'ask';
          const s = G.seats[0], a = $('.hw-ask'), next = s.go + 1;
          a.innerHTML = `<b>${s.score} points</b><p>Stop and win with ${s.score + Math.min(s.go, 2)}${s.go >= 3 ? ' ×' + 2 ** (s.go - 2) : ''}. Or Go: play on for ${next >= 3 ? 'double' : '+' + next}, but if ${N === 3 ? 'someone else' : 'Eomma'} reaches ${G.target} and stops, ${N === 3 ? 'they score' : 'she scores'} double.</p>
            <div><button type="button" data-a="go">Go</button><button type="button" data-a="stop">Stop</button></div>`;
          a.hidden = false; a.querySelector('[data-a="stop"]').focus(); el.classList.add('asking'); mood(1, 'watch', 60000);
          st.resolve = go => { a.hidden = true; el.classList.remove('asking'); st.mode = null; st.resolve = null; if (go) { say(1, LINES.youGo, true); } else { S.stop(); stamp('STOP', 'stop'); say(1, LINES.youStop, true); } r(go); };
        }),
      };
      const bot = i => ({
        pickHand: async () => { await wait(rnd(D.think) * (i === 2 ? 0.8 : 1)); return ai.hand(G, i, i === 1 ? D : DIFF.normal); },
        pickField: async (pi, opts) => { await wait(450); return ai.field(G, i, opts, i === 1 ? D : DIFF.normal); },
        goStop: async () => { await wait(800); const g = ai.go(G, i, i === 1 ? D : DIFF.normal); if (!g) { S.stop(); stamp('STOP', 'stop'); mood(i, 'smug', 2400); toast(`${NAME[i]}: Stop.`); say(i, i === 1 ? LINES.herStop : AUNT.win, true); await wait(700); } return g; },
      });
      const players = [human, bot(1), bot(2)];
      const H = {
        pickHand: pi => players[pi].pickHand(pi),
        pickField: (pi, opts, card) => players[pi].pickField(pi, opts, card),
        goStop: pi => players[pi].goStop(pi),
        fx,
      };

      /* the game */
      const run = async () => {
        // deal: everything flies from the pile (hands first, then the felt), then turns face up
        DECK.forEach(c => pile.appendChild(mk(c)));
        [...pile.querySelectorAll('.hw-card')].forEach((n, i) => { n.style.left = (i % 6) * 0.4 + 'px'; n.style.top = -(i % 6) * 0.4 + 'px'; });
        upd(); await wait(300);
        const order = [];
        G.seats.forEach((s, i) => s.hand.forEach(c => order.push([c, seatEl(i).querySelector('.hw-hand')])));
        G.field.forEach(c => order.push([c, null]));
        order.forEach(([c]) => node(c).classList.add('mv'));
        const len = await glide(() => order.forEach(([c, to]) => { const n = node(c); n.style.left = n.style.top = ''; (to || slotOf(c.m)).appendChild(n); }), 380, 26);
        if (len) order.forEach(([c], i) => later(() => S.thwack(0.35), 330 + i * 26));
        await wait((len || 0) + 150);
        order.forEach(([c]) => node(c).classList.remove('mv'));
        G.seats[0].hand.concat(G.field).forEach(c => reveal(node(c))); S.flip();
        G.deck.forEach(c => pile.appendChild(node(c)));
        upd(); await wait(500);
        say(1, LINES.start, true); await wait(700);
        let pi = 0;
        while (!G.over && !st.over) {
          turnLabel(pi);
          await runTurn(G, pi, H);
          if (st.over) return;
          if (!G.over) pi = (pi + 1) % N;
        }
        finish();
      };

      /* the end */
      const finish = quit => {
        if (st.over) return; st.over = true; st.mode = null; $('.hw-ask').hidden = true;
        const r = quit ? { winner: null, how: 'quit', base: 0, points: 0, gos: 0, goBak: false } : G.result;
        const won = r.winner === 0, draw = r.how === 'nagari';
        const sc = score(G.seats[0].cap);
        const grade = !won ? 'C' : r.points >= 7 || r.gos >= 2 ? 'S' : r.points >= 4 || r.gos >= 1 ? 'A' : 'B';
        const res = { won, grade, quit: !!quit, draw, how: r.how, winner: r.winner == null ? null : WHO[r.winner], points: r.points, base: r.base, gos: r.gos, goBak: r.goBak,
          scores: G.seats.map(s => s.score), captured: { bright: sc.n.b, animal: sc.n.a, ribbon: sc.n.r, junk: sc.n.j }, sets: sc.sets, turns: G.turns, seats: N, difficulty: diff, tutorial: st.tut || 'seen' };
        el.classList.add(won ? 'won' : 'lost');
        if (!quit) { (won ? S.win : S.lose)(); if (r.winner === 2) say(2, AUNT.win, true); else say(1, won ? LINES.youWin : draw ? LINES.draw : LINES.youLose, true); }
        const head = quit ? 'You left the table.' : won ? `You win${r.how === 'out' ? ' (your Go held)' : ''}.` : draw ? 'Nobody wins (nagari).' : `${NAME[r.winner]} wins.`;
        const show = () => {
          if (!el.isConnected) return;
          const end = $('.mg-end'); end.hidden = false;
          end.innerHTML = `<p class="hw-end-head">${esc(head)}</p><b class="mg-grade">${grade}</b>
            <dl>${r.winner != null ? `<dt>${r.winner === 0 ? 'Your points' : NAME[r.winner] + '’s points'}</dt><dd><span class="hw-tick" data-n="${r.points}">${still ? r.points : 0}</span>${r.points !== r.base ? ` <small>(${r.base}${r.gos ? ` +${r.gos} Go` : ''}${r.goBak ? ', go-bak ×2' : ''})</small>` : ''}</dd>` : ''}
              <dt>Scores</dt><dd>${G.seats.map((s, i) => `${NAME[i]} ${s.score}`).join(' · ')}</dd>
              <dt>Your piles</dt><dd>광 ${sc.n.b} · 열 ${sc.n.a} · 띠 ${sc.n.r} · 피 ${sc.n.j}</dd>
              ${sc.sets.length ? `<dt>Sets</dt><dd>${sc.sets.map(k => SETNAME[k]).join(', ')}</dd>` : ''}</dl>
            <p class="mg-end-say">${quit ? 'She gathers the cards without a word.' : won ? 'She squares the deck. Something in her face almost approves.' : draw ? 'The cards go back in the box. Next Thursday, then.' : 'She shuffles. The cards make a sound like rain.'}</p><button type="button">Continue</button>`;
          end.querySelector('button').focus();
          if (!still) {
            end.querySelectorAll('.hw-tick').forEach(t => { const n = +t.dataset.n; for (let k = 1; k <= 12; k++) later(() => { t.textContent = Math.round(n * k / 12); if (k % 3 === 0) S.coin(k % 2); }, 260 + k * 55); });
            if (won) later(petals, 300);
          }
          end.querySelector('button').onclick = () => { cleanup(); o.onDone?.(res); done(res); };
        };
        quit ? show() : later(show, still ? 400 : 1600);
      };

      /* input */
      const playSel = () => { const c = G.seats[0].hand[st.sel]; if (c && st.resolve) st.resolve(c); };
      el.addEventListener('click', e => {
        const b = e.target.closest('[data-hw]');
        if (b) { if (b.dataset.hw === 'rules') toggleRules(); if (b.dataset.hw === 'pause' && st.begun && !st.over && !tutOpen()) pause(true); return; }
        if (st.paused || st.over) return;
        const n = e.target.closest('.hw-card');
        if (st.mode === 'hand' && n && n.parentElement.closest('.hw-seat.me .hw-hand')) { const c = n._c; st.sel = G.seats[0].hand.indexOf(c); st.resolve(c); return; }
        if (st.mode === 'field' && n && n.classList.contains('pick')) { st.resolve(n._c); return; }
        const a = e.target.closest('.hw-ask [data-a]');
        if (st.mode === 'ask' && a) st.resolve(a.dataset.a === 'go');
      });
      el.addEventListener('pointerover', e => {
        if (st.mode !== 'hand') return;
        const n = e.target.closest('.hw-seat.me .hw-hand .hw-card'); hint(n ? n._c.m : null);
      });
      el.addEventListener('pointerleave', () => hint(null));
      const toggleRules = () => { const r = $('.hw-rules'); r.hidden = !r.hidden; $('.hw-top [data-hw="rules"]').setAttribute('aria-expanded', String(!r.hidden)); };
      const pause = on => {
        st.paused = on; $('.mg-pause').hidden = !on;
        if (ac) { try { on ? ac.suspend() : ac.resume(); } catch (e) {} }
        if (on) $('.mg-pause button').focus();
      };
      const key = e => {
        if (!el.isConnected || st.over) return;
        e.stopPropagation();
        if (!st.begun) return;
        if (tutOpen()) { if (st.prac && !window.FemcTutorial.blocking()) st.prac.key(e); return; } // Esc and Next belong to the tutorial
        if (e.key === 'Escape') { e.preventDefault(); if (!$('.hw-rules').hidden && !st.paused) toggleRules(); else pause(!st.paused); return; }
        if (st.paused) return;
        const k = e.key.toLowerCase();
        if (k === 'r') { e.preventDefault(); toggleRules(); return; }
        if (st.mode === 'ask' && (k === 'g' || k === 's')) { e.preventDefault(); st.resolve(k === 'g'); return; }
        if (st.mode === 'hand') {
          const n = G.seats[0].hand.length;
          if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); st.sel = (st.sel + (e.key === 'ArrowLeft' ? n - 1 : 1)) % n; markCan(true); hint(G.seats[0].hand[st.sel].m); }
          else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); playSel(); }
        } else if (st.mode === 'field') {
          if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); st.sel = 1 - st.sel; st.mark(); }
          else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); st.resolve(st.opts[st.sel]); }
        }
      };
      const cleanup = () => {
        timers.forEach(clearTimeout); timers.clear();
        window.removeEventListener('keydown', key, true); window.removeEventListener('keydown', skipT, true);
        try { ac && ac.close(); } catch (e) {} el.remove();
      };
      $('.mg-pause').onclick = e => { const b = e.target.dataset.mg; if (b === 'resume') pause(false); if (b === 'howto') howTo(); if (b === 'quit') { pause(false); finish(true); } };
      window.addEventListener('keydown', key, true);
      el.addEventListener('pointerdown', () => { if (ac && ac.state === 'suspended' && !st.paused) ac.resume().catch(() => {}); });

      /* the tutorial (Nov 11 2026): Eomma and a staged practice hand on its own little table (.hw-prac) over the real one.
         Nothing here touches G; the practice cards are their own nodes (never in `nodes`). */
      const GS = (window.FemcGame && window.FemcGame.settings && window.FemcGame.settings()) || {};
      const tutOpen = () => !!(window.FemcTutorial && window.FemcTutorial.open());
      if (o.tutorial !== false) tutLib(); // start loading early
      const practice = () => {
        const C = id => DECK.find(c => c.id === id);
        const P = document.createElement('div'); P.className = 'hw-prac';
        const pcard = c => { const n = document.createElement('div'); n.className = 'hw-card hw-pcard'; n._c = c; n.dataset.m = c.m; n.dataset.t = c.t; n.title = cardName(c);
          n.innerHTML = `<div class="hw-in"><div class="hw-face">${faceSVG(c)}<b class="hw-m">${c.m}</b><i class="hw-k k-${c.t}">${KO[c.t]}</i></div><div class="hw-back"></div></div>`;
          if (cardArt) { const im = document.createElement('img'); im.alt = ''; im.src = ART('cards/' + c.id); im.onerror = () => im.remove(); n.querySelector('.hw-face').appendChild(im); }
          return n; };
        const row = cls => { const r = document.createElement('div'); r.className = cls; P.appendChild(r); return r; };
        const feltR = row('hw-prac-felt'), handR = row('hw-prac-hand'), capsR = row('hw-prac-caps hw-caps');
        const pileN = document.createElement('button'); pileN.type = 'button'; pileN.className = 'hw-prac-pile'; pileN.setAttribute('aria-label', 'The pile: tap to flip'); feltR.appendChild(pileN);
        const slots = {};
        ['03b', '08j1'].forEach(id => { const c = C(id), sl = document.createElement('div'); sl.className = 'hw-slot'; sl.dataset.m = c.m; sl.appendChild(pcard(c)); feltR.appendChild(sl); slots[c.m] = sl; });
        const hand = ['07a', '03j1', '11j1'].map(id => { const n = pcard(C(id)); handR.appendChild(n); return n; });
        const match = hand[1]; match.classList.add('can');
        const flipC = pcard(C('08a'));
        const grp = {}; ['b', 'a', 'r', 'j'].forEach(t => { const g = document.createElement('div'); g.className = 'hw-grp'; g.dataset.t = t; g.innerHTML = `<i>${KO[t]}<em>0</em></i>`; const k = document.createElement('div'); k.className = 'hw-stk'; g.appendChild(k); g._k = k; capsR.appendChild(g); grp[t] = g; });
        const ask = document.createElement('div'); ask.className = 'hw-prac-ask'; ask.hidden = true;
        ask.innerHTML = '<b>3 points</b><p>Stop: win now. Go: play on for more.</p>';
        const goB = document.createElement('button'), stopB = document.createElement('button');
        goB.type = stopB.type = 'button'; goB.textContent = 'Go'; stopB.textContent = 'Stop'; goB.dataset.a = 'go'; stopB.dataset.a = 'stop';
        const btns = document.createElement('div'); btns.append(goB, stopB); ask.appendChild(btns); P.appendChild(ask);
        el.appendChild(P);
        const pr = st.prac = { node: P, hand, pile: pileN, ask: [goB, stopB], sel: 1, step: null, key: () => {} };
        let played = false, flipped = false, sorted = false, choice = null, waiter = null;
        const markSel = () => hand.forEach((n, i) => n.classList.toggle('sel', pr.step === 'hand' && i === pr.sel));
        const doPlay = () => { if (played) return; played = true; match.classList.remove('can', 'sel'); slots[3].appendChild(match); slap(match, 0.8); markSel(); };
        const doFlip = () => { if (flipped) return; doPlay(); flipped = true; slots[8].appendChild(flipC); flipC.classList.add('lift'); S.flip(); later(() => { flipC.classList.remove('lift'); slap(flipC, 0.8); }, 260); };
        const doSort = () => { if (sorted) return; doFlip(); sorted = true;
          [[slots[3], 'b'], [slots[8], 'a']].forEach(([sl]) => [...sl.children].forEach(n => { grp[n._c.t]._k.appendChild(n); }));
          ['b', 'a', 'r', 'j'].forEach(t => { grp[t].querySelector('em').textContent = grp[t]._k.children.length; });
          slots[3].remove(); slots[8].remove(); S.clack(0); later(() => S.clack(1), 90); };
        const resolve = () => { const w = waiter; waiter = null; w && w(); };
        const tryCard = n => {
          if (pr.step !== 'hand' || played) return;
          if (n === match) { doPlay(); resolve(); }
          else pr.say && pr.say(`No ${MONTHS[n._c.m].en} (${n._c.m}) on the felt yet. Look for the glowing card.`);
        };
        hand.forEach((n, i) => { n.onclick = () => { pr.sel = i; tryCard(n); }; n.onpointerover = () => { if (pr.step === 'hand') hint(null); }; });
        pileN.onclick = () => { if (pr.step === 'pile' && !flipped) { doFlip(); later(resolve, 420); } };
        const pickGo = g => { if (pr.step !== 'ask' || choice != null) return; choice = g; (g ? S.go : S.stop)(); resolve(); };
        goB.onclick = () => pickGo(true); stopB.onclick = () => pickGo(false);
        pr.key = e => {
          const k = e.key.toLowerCase();
          if (pr.step === 'hand' && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) { e.preventDefault(); pr.sel = (pr.sel + (e.key === 'ArrowLeft' ? 2 : 1)) % 3; markSel(); }
          else if (pr.step === 'hand' && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); tryCard(hand[pr.sel]); }
          else if (pr.step === 'pile' && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); pileN.onclick(); }
          else if (pr.step === 'ask' && (k === 'g' || k === 's')) { e.preventDefault(); pickGo(k === 'g'); }
        };
        const until = (name, ready) => ctx => new Promise(ok => { pr.step = name; pr.say = ctx.say; markSel(); waiter = ok; if (ready && ready()) resolve(); });
        const steps = [
          { target: feltR, say: 'Every card belongs to a <b>month</b>: the number in its corner. Same month, same flower.' },
          { target: handR, say: 'Play a card onto one of the <b>same month</b> on the felt. A card with a match glows. Go on.', wait: until('hand', () => played), before: () => { pr.step = 'hand'; markSel(); } },
          { target: pileN, say: 'Then the <b>pile</b> flips its top card, and it matches the same way. Tap the pile.', wait: until('pile', () => flipped), before: () => { doPlay(); pr.step = 'pile'; } },
          { target: capsR, say: 'Both pairs are yours. They sort by type: <b>광</b> brights, <b>열</b> animals, <b>띠</b> ribbons, <b>피</b> junk.', before: () => { pr.step = null; doSort(); } },
          { target: capsR, say: 'Points come from sets: <b>three brights</b>, five animals or five ribbons, <b>ten junk</b>, and a few special trios. The Rules button (R) lists them.' },
          { target: ask, say: 'Reach the target and you choose. <b>Stop</b> wins now. <b>Go</b> plays on for more, but if I stop after that, I score double. Pick one (G / S).', wait: until('ask', () => choice != null),
            before: () => { doSort(); ask.hidden = false; }, after: () => { ask.hidden = true; pr.step = null; } },
          { target: null, say: `First to ${G.target} points. Esc pauses; How to play is in there. You lead.`, next: 'Deal', before: ctx => ctx.say(choice === true ? 'Bold. We’ll see. First to ' + G.target + ' points. Esc pauses; How to play is in there. You lead.' : 'Sensible. First to ' + G.target + ' points. Esc pauses; How to play is in there. You lead.') },
        ];
        return { node: P, steps };
      };
      const tutor = async replay => {
        const T = await tutLib(); if (!T || !el.isConnected || st.over) return null;
        const P = practice();
        try { return await T.run(el, { id: 'hwatu', who: 'Eomma', face: `${base()}assets/femc/portraits/lee-eomma/neutral.webp`, calm: !!GS.calm, perf: !!GS.perf, replay, steps: P.steps }); }
        finally { P.node.remove(); st.prac = null; }
      };
      const firstTut = async () => {
        if (o.tutorial === false) return 'seen';
        const T = await tutLib(); if (!T || !T.should('hwatu', o.tutorial)) return 'seen';
        return (await tutor(false)) || 'seen';
      };
      const howTo = async () => {
        if (tutOpen()) return;
        $('.mg-pause').hidden = true;
        await tutor(true);
        if (!st.over && el.isConnected && st.paused) { $('.mg-pause').hidden = false; $('.mg-pause button').focus(); }
      };

      /* the title card: held 1.8 s (click / any key skips), then the deal */
      const tt = document.createElement('div'); tt.className = 'hw-tt';
      tt.innerHTML = `<div class="hw-tt-cards">${[DECK[0], DECK[28], DECK[44]].map(c => `<span>${faceSVG(c)}</span>`).join('')}</div><b>HWATU</b><small>Go-Stop with Eomma${N === 3 ? ' and Auntie' : ''}</small><img src="${ART('title')}" alt="" onerror="this.remove()">`;
      el.appendChild(tt);
      const begin = () => {
        if (st.begun || !el.isConnected) return; st.begun = true; window.removeEventListener('keydown', skipT, true);
        tt.classList.add('out'); later(() => tt.remove(), 450);
        audio();
        const go = () => run().catch(err => { console.error('hwatu', err); if (!st.over) { G.over = true; finish(true); } });
        firstTut().then(r => { st.tut = r; if (!st.over && el.isConnected) go(); });
      };
      const skipT = e => { if (e.key !== 'Escape') { e.preventDefault(); begin(); } };
      tt.onclick = begin; window.addEventListener('keydown', skipT, true); later(begin, 1800);
    });
  }
  return { play, DECK, DIFF, MONTHS, score, engine: { deal, runTurn, settle, score, ai }, state: () => cur };
})();
