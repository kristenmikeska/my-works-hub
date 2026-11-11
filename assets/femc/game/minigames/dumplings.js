/* FEMC epilogue minigame: dumplings, a Solstice cooking game (Nov 10 2026, Kat: "a cute solstice style cooking game", "I really
   want some cooking sound effects"; EPILOGUE-EXPANSION-PLAN.md step 2). Runners, 12/31 "the list": Haechan makes sixty-one, Solar
   does the folding, badly, and gets shouted at about it. Standalone: nothing in the story calls it yet (mockups/minigames/index.html).

   FemcDumplings.play({ host, count, mute, onDone }) -> Promise<result>
     count  dumplings (default 4)   mute  no sound
   result = { folded, perfect, okay, bags, cook: 'pale' | 'golden' | 'burnt', grade: 'S' | 'A' | 'B' | 'C', quit }

   Each dumpling, Cooking Mama style:
     1 Roll   drag the rolling pin back and forth over the dough (or tap ← →) until the meter sits in the pink, then Done (Space).
              Under = thick and lumpy, over = so thin it tears.
     2 Fill   hold (Space / press) to spoon filling on; let go inside the pink. Too much bursts later.
     3 Pleat  it folds into a half-moon; a marker sweeps the bar; tap (Space / click) in the pink to crimp, gold is perfect. 7 pleats.
     4 Reveal perfect plumps with a sparkle and a ding; okay sits there; a bag squishes into a lump with a boing. Onto the tray.
   Then the pan: the dumplings sizzle, the bottoms brown; press Water + lid in the golden window; steam; lift the lid; done.
   Haechan reacts in the corner (his Runners portrait). Sounds: Web Audio, made in the browser: rolling, plop, pinch, sizzle, pour,
   lid clank, steam, ding, boing, timer bell.
   Art (optional, FEMC-ART-TODO 44, assets/femc/game/art/minigames/cook/): counter.webp (the board, top-down), pan.webp; the
   dumpling itself is drawn in SVG so it can animate (roll, fill, fold, pleat, plump, squish, brown). Esc pauses. */
window.FemcDumplings = (() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const base = () => (window.FemcGame && window.FemcGame.base) || (document.querySelector('script[src*="minigames/dumplings.js"]')?.src.split('assets/')[0]) || '';
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const PLEATS = 7;
  const SAY = {
    roll: ["Roll it out. Thin, not see-through.", 'Even. From the middle out.'],
    rollThick: ["That's a coaster.", 'Thicker than my patience. Again.'],
    rollThin: ['You can see the counter through it.', "It's going to tear. It's fine. It's going to tear."],
    rollGood: ['Okay. That one\'s a wrapper.', 'Good. Now the filling.'],
    fill: ['A spoon. Not a shovel.', 'Less than you think.'],
    fillMore: ['That\'s a sad dumpling.', 'Bit more. It\'s not a diet.'],
    fillOver: ["That's not going to close.", 'Solar. It\'s going to explode.'],
    fillGood: ['Perfect. Fold.', "That's the amount."],
    pleat: ['Crimp, crimp, crimp. Like a bar of eighths.', "Fold it over. Then pleat. I'm not showing you again."],
    tear: ['Gentle.', "You're rushing the and.", "It's not a race."],
    perfect: ["...Okay. That one's good.", 'Huh. Look at you.', 'That one goes on the good tray.'],
    okay: ["It'll hold.", "Fine. It's a dumpling.", 'Your mother would eat that one.'],
    bag: ["That's a bag, Solar.", "That's a bag with meat in it.", 'I demonstrated the pleat four times.'],
    cook: ['Listen. When the sizzle goes quiet and nutty, that\'s the bottom going gold.', 'Watch the edges.'],
    pale: ['Pale. They\'re steamed now. That\'s allowed.'], golden: ['...Yeah. That.'], burnt: ['We don\'t talk about the bottoms.'],
    end: { S: "Sixty-one, and yours are the good ones. I'm telling everyone.", A: 'Okay. You can fold at my house.', B: 'Some of them are dumplings.', C: 'You do the flat ones.' },
  };
  const FACE = { roll: 'neutral', rollThick: 'serious', rollThin: 'surprised', rollGood: 'neutral', fill: 'neutral', fillMore: 'serious', fillOver: 'surprised', fillGood: 'happy', pleat: 'neutral', tear: 'serious', perfect: 'happy', okay: 'neutral', bag: 'serious', cook: 'neutral', pale: 'neutral', golden: 'happy', burnt: 'sad' };

  /* ── kitchen sounds (Web Audio) ── */
  function kitchen(muted) {
    let ac = null, sizz = null;
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
      v.gain.setValueAtTime(0.0001, t); v.gain.exponentialRampToValueAtTime(g, t + 0.01); v.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(v); v.connect(a.destination); o.start(t); o.stop(t + dur + 0.05);
    };
    return {
      roll: () => noise(0.22, 260, 0.8, 0.5, 'brown'),
      scoop: () => { noise(0.12, 600, 2, 0.12); },
      plop: () => tone(320, 0.18, 'sine', 0.22, 0, 140),
      pinch: () => { tone(900, 0.04, 'triangle', 0.1); noise(0.08, 1800, 3, 0.08, 'white', 0.01); },
      tear: () => noise(0.25, 2400, 1.5, 0.12, 'white', 0, 900),
      ding: () => { tone(1568, 0.5, 'sine', 0.14); tone(2093, 0.6, 'sine', 0.1, 0.06); },
      boing: () => tone(220, 0.45, 'sine', 0.2, 0, 90),
      sparkle: () => [2637, 3136, 3520].forEach((f, i) => tone(f, 0.15, 'sine', 0.05, i * 0.06)),
      sizzleOn: () => {
        const a = A(); if (!a || sizz) return; const s = a.createBufferSource(), fl = a.createBiquadFilter(), v = a.createGain();
        s.buffer = buf(a, 2, 'white'); s.loop = true; fl.type = 'highpass'; fl.frequency.value = 3000; v.gain.value = 0.0001; v.gain.exponentialRampToValueAtTime(0.06, a.currentTime + 0.4);
        s.connect(fl); fl.connect(v); v.connect(a.destination); s.start(); sizz = { s, v, fl };
      },
      sizzleTone: k => { if (sizz) { sizz.fl.frequency.value = 3000 - k * 1600; } },
      crackle: () => noise(0.03, 4000 + Math.random() * 2000, 4, 0.08),
      sizzleOff: () => { if (!sizz || !ac) return; sizz.v.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + 0.3); const s = sizz.s; setTimeout(() => { try { s.stop(); } catch (e) {} }, 400); sizz = null; },
      pour: () => { noise(0.6, 900, 1, 0.25, 'white', 0, 400); noise(1.2, 5000, 0.7, 0.18, 'white', 0.15); },
      lid: () => { tone(640, 0.35, 'triangle', 0.16); tone(960, 0.3, 'triangle', 0.08, 0.01); noise(0.06, 3000, 2, 0.1); },
      steam: () => noise(1.4, 3500, 0.6, 0.12, 'white', 0, 1500),
      bell: () => [1760, 1760].forEach((f, i) => tone(f, 0.3, 'triangle', 0.12, i * 0.18)),
      close: () => { try { sizz && sizz.s.stop(); ac && ac.close(); } catch (e) {} },
    };
  }

  /* ── the dumpling, drawn so it can move ── */
  // the wrapper's edge as a half-moon: a quadratic from L via the top to R
  const edge = (t, w, h) => { const u = 1 - t, L = [150 - w, 150], T = [150, 150 - 2 * h], R = [150 + w, 150]; return [u * u * L[0] + 2 * u * t * T[0] + t * t * R[0], u * u * L[1] + 2 * u * t * T[1] + t * t * R[1]]; };
  function svg(st) {
    const r = 30 + st.roll * 0.62, thin = st.roll > 112, w = r;
    const plump = st.result === 'perfect' ? 1.08 : st.result === 'bag' ? 0.9 : 1;
    const dough = thin ? '#fbf3e8' : '#f6ead9';
    const crisp = st.stage === 'cooked' ? `<ellipse cx="150" cy="152" rx="${w * 0.95}" ry="10" style="fill:var(--brown,#f3e2c4)"/>` : '';
    let body = '';
    if (st.stage === 'roll') {
      const ry = r * (0.86 + Math.min(st.roll, 100) / 700);
      body = `<ellipse cx="150" cy="140" rx="${r}" ry="${ry}" fill="${dough}" stroke="#e3cfb5" stroke-width="2"/>${st.roll < 60 ? `<ellipse cx="142" cy="132" rx="${r * 0.35}" ry="${r * 0.25}" fill="#fff8ee" opacity=".7"/>` : ''}${thin ? `<ellipse cx="160" cy="146" rx="12" ry="6" fill="#e9dccb"/>` : ''}
        <g class="pin" transform="translate(${st.pinX} 0)"><rect x="40" y="128" width="220" height="22" rx="11" fill="#f2f2f4" stroke="#cfcfd6" stroke-width="2"/><rect x="20" y="132" width="26" height="14" rx="7" fill="#e7e7ec"/><rect x="254" y="132" width="26" height="14" rx="7" fill="#e7e7ec"/><circle cx="210" cy="139" r="5" fill="#ff7fb2"/></g>`;
    } else if (st.stage === 'fill') {
      const f = st.fill;
      body = `<ellipse cx="150" cy="140" rx="${r}" ry="${r * 0.98}" fill="${dough}" stroke="#e3cfb5" stroke-width="2"/>
        <ellipse cx="150" cy="${140 - f * 0.06}" rx="${8 + f * 0.42}" ry="${5 + f * 0.3}" fill="#c9806f"/><ellipse cx="146" cy="${136 - f * 0.08}" rx="${4 + f * 0.15}" ry="${2 + f * 0.08}" fill="#e0a08f" opacity=".7"/>
        ${f > 0 ? '' : ''}<g class="spoon" transform="translate(${190 - Math.min(f, 40) * 0.3} ${70 + (st.holding ? 12 : 0)}) rotate(-28)"><ellipse cx="0" cy="0" rx="16" ry="11" fill="#d9dde3" stroke="#aab0b8"/><rect x="12" y="-3" width="70" height="6" rx="3" fill="#c3c8cf"/>${st.holding ? '<ellipse cx="0" cy="-2" rx="11" ry="6" fill="#c9806f"/>' : ''}</g>`;
    } else {
      // folded half-moon, pleats drawn along the top edge
      const fold = st.foldT ?? 1, h = w * 0.74 * Math.max(0.05, fold) * plump;
      const pleats = (st.pleats || []).map((p, k) => {
        const t = 0.16 + (k / (PLEATS - 1)) * 0.68, [x, y] = edge(t, w, h / plump), [x2, y2] = edge(Math.min(0.98, t + 0.06), w, h / plump);
        return `<path d="M${x} ${y} Q${(x + x2) / 2} ${Math.min(y, y2) - (p ? 12 : 3)} ${x2} ${y2}" fill="none" stroke="${p === 2 ? '#ffcf5a' : p ? '#d9c3a6' : '#c45d5d'}" stroke-width="${p ? 6 : 3}" stroke-linecap="round" ${p ? '' : 'stroke-dasharray="3 5"'}/>`;
      }).join('');
      const lump = st.result === 'bag' ? `<path d="M${150 - w} 150 Q${150 - w * 0.6} ${150 - h * 0.7} 150 ${150 - h * 0.85} Q${150 + w * 0.8} ${150 - h * 1.05} ${150 + w} 150 Z" fill="${dough}" stroke="#e3cfb5" stroke-width="2"/>` : '';
      body = `${crisp}<g transform="translate(150 150) scale(${plump}) translate(-150 -150)">${lump || `<path d="M${150 - w} 150 Q150 ${150 - (h / plump) * 2} ${150 + w} 150 Z" fill="${dough}" stroke="#e3cfb5" stroke-width="2"/>`}
        <ellipse cx="${150 - w * 0.25}" cy="${150 - h * 0.45}" rx="${w * 0.22}" ry="${h * 0.12}" fill="#fff8ee" opacity=".55"/>${pleats}</g>
        ${st.result === 'perfect' ? `<g class="spark"><path d="M${150 + w * 0.8} ${110 - h * 0.4} l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4z" fill="#ffd166"/><path d="M${150 - w * 0.9} ${118 - h * 0.3} l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z" fill="#ffe9a6"/></g>` : ''}`;
    }
    return `<svg viewBox="0 0 300 200" class="dmp-svg" aria-hidden="true"><ellipse cx="150" cy="168" rx="130" ry="20" fill="rgba(0,0,0,.18)"/>${body}</svg>`;
  }

  function play(o = {}) {
    return new Promise(done => {
      const host = o.host || document.body, N = o.count || 4, K = kitchen(!!o.mute);
      const ART = id => `${base()}assets/femc/game/art/minigames/cook/${id}.webp`, FACEURL = f => `${base()}assets/femc/portraits/haechan-runners/${f}.webp`;
      const st = { i: 0, stage: 'roll', roll: 0, pinX: 0, fill: 0, holding: false, pleats: [], pleatP: 0, x: 0.5, dir: 1, speed: 0.6, zone: 0.24, foldT: 0, result: null, brown: null, tears: 0, rollQ: 0, fillQ: 0, done: [], paused: false, over: false, lock: 0 };
      const el = document.createElement('div');
      el.className = 'mg-dmp' + (reduced.matches ? ' still' : '');
      el.innerHTML = `
        <div class="dmp-top"><b>12/31 · the kitchen</b><span class="dmp-step"></span><ol class="dmp-tray" aria-label="Your dumplings"></ol></div>
        <div class="dmp-chef"><img alt="Haechan" src="${FACEURL('neutral')}"><p aria-live="polite"><b>Haechan</b><span></span></p></div>
        <div class="dmp-counter"><img class="dmp-counter-art" src="${ART('counter')}" alt="" onerror="this.remove()"><div class="dmp-flour"></div><div class="dmp-board"></div><div class="dmp-steam" aria-hidden="true"></div></div>
        <div class="dmp-ctl"><div class="dmp-meter"><i class="zone"></i><i class="gold"></i><i class="fillbar"></i><i class="mark"></i></div><p class="dmp-tip"></p><button type="button" class="dmp-go"></button></div>
        <div class="mg-pause" hidden><b>Paused</b><button type="button" data-mg="resume">Resume</button><button type="button" data-mg="quit">Quit</button></div>
        <div class="mg-end" hidden></div>`;
      host.appendChild(el);
      const $ = s => el.querySelector(s), board = $('.dmp-board');
      const talk = (k) => { $('.dmp-chef span').textContent = pick(SAY[k]); const f = FACE[k] || 'neutral'; const im = $('.dmp-chef img'); if (!im.src.endsWith(f + '.webp')) im.src = FACEURL(f); el.classList.remove('talk'); void el.offsetWidth; el.classList.add('talk'); };
      const draw = () => { board.innerHTML = svg(st); };
      const tray = () => { $('.dmp-tray').innerHTML = st.done.map(r => `<li class="${r}"></li>`).join('') + '<li class="todo"></li>'.repeat(Math.max(0, N - st.done.length)); };
      const setStep = (label, tip, btn) => { $('.dmp-step').textContent = label; $('.dmp-tip').textContent = tip; const b = $('.dmp-go'); b.textContent = btn || ''; b.hidden = !btn; };
      const meter = (zoneA, zoneB, goldA, goldB, fill, mark) => {
        $('.zone').style.cssText = `left:${zoneA}%;width:${zoneB - zoneA}%`; $('.gold').style.cssText = goldA == null ? 'display:none' : `left:${goldA}%;width:${goldB - goldA}%`;
        $('.fillbar').style.width = fill == null ? '0' : `${Math.min(100, fill)}%`; $('.mark').style.display = mark == null ? 'none' : ''; if (mark != null) $('.mark').style.left = `${mark * 100}%`;
      };
      el.classList.add('cook-' + st.stage);
      const setStage = s => { el.classList.remove('cook-' + st.stage); st.stage = s; el.classList.add('cook-' + s); };

      /* stage 1: roll */
      const startRoll = () => { setStage('roll'); st.roll = 0; st.pinX = 0; st.result = null; st.brown = null; st.pleats = []; st.foldT = 0; st.tears = 0; talk('roll'); setStep(`Dumpling ${st.i + 1} of ${N} · Roll`, 'Drag the rolling pin back and forth (or tap ← →). Stop in the pink.', 'Done'); draw(); };
      let lastX = null, lastDir = 0;
      const rollBy = dx => {
        if (st.stage !== 'roll' || st.paused || st.over) return;
        st.pinX = Math.max(-60, Math.min(60, st.pinX + dx * 0.6));
        const d = Math.sign(dx); if (d && d !== lastDir) { lastDir = d; st.roll = Math.min(140, st.roll + 7 + Math.random() * 3); K.roll(); if (!reduced.matches) { board.classList.remove('squish'); void board.offsetWidth; board.classList.add('squish'); } }
        draw();
      };
      const finishRoll = () => {
        if (st.stage !== 'roll') return;
        st.rollQ = st.roll < 85 ? 0 : st.roll > 112 ? 1 : 2; talk(st.rollQ === 0 ? 'rollThick' : st.rollQ === 1 ? 'rollThin' : 'rollGood');
        st.lock = 700; setTimeout(startFill, 700);
      };
      /* stage 2: fill */
      const startFill = () => { setStage('fill'); st.fill = 0; st.holding = false; talk('fill'); setStep(`Dumpling ${st.i + 1} of ${N} · Fill`, 'Hold to spoon on the filling (Space or press). Let go in the pink.', 'Hold to scoop'); draw(); };
      const holdFill = on => {
        if (st.stage !== 'fill' || st.paused || st.over) return;
        if (on && !st.holding) { st.holding = true; K.scoop(); }
        else if (!on && st.holding) { st.holding = false; K.plop(); st.fillQ = st.fill < 55 ? 0 : st.fill > 82 ? 1 : 2; talk(st.fillQ === 0 ? 'fillMore' : st.fillQ === 1 ? 'fillOver' : 'fillGood'); draw(); setStage('wait'); setTimeout(startPleat, 750); }
      };
      /* stage 3: fold and pleat */
      const startPleat = () => {
        setStage('pleat'); st.pleats = []; st.pleatP = 0; st.x = 0; st.dir = 1; st.speed = 0.55 + st.i * 0.05; st.zone = st.rollQ === 2 ? 0.26 : 0.2; st.foldT = 0;
        talk('pleat'); setStep(`Dumpling ${st.i + 1} of ${N} · Pleat`, 'Tap (Space or click) when the marker is in the pink. Gold is perfect.', '');
        const t0 = performance.now(); const fold = now => { st.foldT = Math.min(1, (now - t0) / 500); draw(); if (st.foldT < 1) requestAnimationFrame(fold); }; requestAnimationFrame(fold);
      };
      const crimp = () => {
        if (st.stage !== 'pleat' || st.paused || st.over || st.lock > 0) return;
        const off = Math.abs(st.x - 0.5), z = st.zone / 2, g = z * 0.3;
        let p = off <= g ? 2 : off <= z ? 1 : 0;
        if (st.rollQ === 1 && p === 1 && Math.random() < 0.35) p = 0; // too thin: an okay pinch can tear
        st.pleats.push(p); p ? K.pinch() : (K.tear(), st.tears++, Math.random() < 0.5 && talk('tear'));
        if (!reduced.matches) { board.classList.remove('pinch'); void board.offsetWidth; board.classList.add('pinch'); }
        st.speed *= 1.06; st.zone = Math.max(0.12, st.zone * 0.96); draw();
        if (st.pleats.length >= PLEATS) reveal();
      };
      /* stage 4: reveal */
      const reveal = () => {
        let bad = st.tears + (st.rollQ === 2 ? 0 : 1) + (st.fillQ === 2 ? 0 : st.fillQ === 1 ? 2 : 1);
        const golds = st.pleats.filter(p => p === 2).length;
        st.result = bad === 0 && golds >= 2 ? 'perfect' : bad <= 2 ? 'okay' : 'bag';
        setStage('reveal'); draw(); talk(st.result);
        if (st.result === 'perfect') { K.ding(); setTimeout(K.sparkle, 120); } else if (st.result === 'bag') K.boing(); else K.pinch();
        board.classList.add('rev-' + st.result);
        setTimeout(() => {
          board.classList.remove('rev-' + st.result); board.classList.add('slide');
          setTimeout(() => { board.classList.remove('slide'); st.done.push(st.result); tray(); st.i++; st.i >= N ? startCook() : startRoll(); }, 450);
        }, 1300);
      };
      /* the pan */
      let cookT = 0;
      const startCook = () => {
        setStage('cook'); cookT = 0; st.brown = '#f3e2c4'; st.result = null; st.pleats = Array(PLEATS).fill(1); st.foldT = 1;
        $('.dmp-counter').classList.add('pan'); board.innerHTML = `<div class="dmp-pan"><img src="${ART('pan')}" alt="" onerror="this.remove()"><div class="dmp-pan-stand"></div><div class="dmp-in">${st.done.map(r => `<span class="${r}">${svg({ ...st, result: r, stage: 'cooked', brown: null })}</span>`).join('')}</div><div class="dmp-lid"></div></div>`;
        talk('cook'); setStep('The pan', 'Wait for the bottoms to go golden, then Water + lid (Space).', 'Water + lid');
        K.sizzleOn();
      };
      const lid = () => {
        if (st.stage !== 'cook' || st.paused || st.over) return;
        setStage('lidded'); const k = cookT; const cook = k < 0.55 ? 'pale' : k > 0.85 ? 'burnt' : 'golden'; st.cook = cook;
        K.pour(); setTimeout(K.lid, 350); setTimeout(K.steam, 450); K.sizzleOff();
        $('.dmp-counter').classList.add('steaming'); board.querySelector('.dmp-lid').classList.add('on');
        setTimeout(() => { board.querySelector('.dmp-lid').classList.add('lift'); $('.dmp-counter').classList.remove('steaming'); K.bell(); talk(cook); setTimeout(finish, 1600); }, 2400);
      };
      const grade = () => {
        const p = st.done.filter(r => r === 'perfect').length, b = st.done.filter(r => r === 'bag').length, c = st.cook === 'golden' ? 1 : 0;
        return p >= N - 1 && !b && c ? 'S' : p >= N / 2 && b <= 1 ? 'A' : b <= N / 2 ? 'B' : 'C';
      };
      const finish = (quit = false) => {
        if (st.over) return; st.over = true; K.sizzleOff();
        const n = r => st.done.filter(x => x === r).length;
        const res = { folded: st.done.length, perfect: n('perfect'), okay: n('okay'), bags: n('bag'), cook: st.cook || 'pale', grade: quit ? 'C' : grade(), quit };
        const end = $('.mg-end'); end.hidden = false;
        end.innerHTML = `<b class="mg-grade">${res.grade}</b><dl><dt>Perfect</dt><dd>${res.perfect}</dd><dt>Will hold</dt><dd>${res.okay}</dd><dt>Bags</dt><dd>${res.bags}</dd><dt>Bottoms</dt><dd>${res.cook}</dd></dl><p class="mg-end-say">Haechan: ${esc(SAY.end[res.grade])}</p><button type="button">Continue</button>`;
        end.querySelector('button').focus();
        end.querySelector('button').onclick = () => { cleanup(); o.onDone?.(res); done(res); };
      };

      /* loop: the pleat marker, the fill, the pan */
      let last = performance.now(), raf = 0, crackAt = 0;
      const tick = now => {
        const dt = Math.min(60, now - last) / 1000; last = now;
        if (!st.paused && !st.over) {
          if (st.lock > 0) st.lock -= dt * 1000;
          if (st.stage === 'roll') meter(85 / 1.4, 112 / 1.4, 92 / 1.4, 104 / 1.4, st.roll / 1.4, null);
          if (st.stage === 'fill') { if (st.holding) { st.fill = Math.min(100, st.fill + dt * 38); draw(); } meter(55, 82, 64, 74, st.fill, null); }
          if (st.stage === 'pleat') { st.x += st.dir * st.speed * dt; if (st.x > 1) { st.x = 1; st.dir = -1; } if (st.x < 0) { st.x = 0; st.dir = 1; } const z = st.zone / 2, g = z * 0.3; meter((0.5 - z) * 100, (0.5 + z) * 100, (0.5 - g) * 100, (0.5 + g) * 100, null, st.x); }
          if (st.stage === 'cook') {
            cookT = Math.min(1, cookT + dt / 9); K.sizzleTone(cookT);
            const c = cookT < 0.55 ? `rgb(${243 - cookT * 60},${226 - cookT * 110},${196 - cookT * 200})` : cookT < 0.85 ? `rgb(${220 - (cookT - 0.55) * 120},${150 - (cookT - 0.55) * 160},${70 - (cookT - 0.55) * 100})` : `rgb(${150 - (cookT - 0.85) * 400},${90 - (cookT - 0.85) * 300},${40 - (cookT - 0.85) * 200})`;
            board.querySelectorAll('.dmp-in span').forEach(sp => sp.style.setProperty('--brown', c));
            meter(55, 85, 62, 78, cookT * 100, null);
            if ((crackAt -= dt) <= 0) { crackAt = 0.08 + Math.random() * 0.25; K.crackle(); }
            if (cookT >= 1) lid();
          }
        }
        raf = requestAnimationFrame(tick);
      };

      /* input */
      board.addEventListener('pointerdown', e => {
        e.preventDefault(); lastX = e.clientX; board.setPointerCapture?.(e.pointerId);
        if (st.stage === 'fill') holdFill(true); else if (st.stage === 'pleat') crimp();
      });
      board.addEventListener('pointermove', e => { if (lastX == null || st.stage !== 'roll') return; const dx = e.clientX - lastX; lastX = e.clientX; if (Math.abs(dx) > 1) rollBy(dx); });
      const up = () => { lastX = null; if (st.stage === 'fill') holdFill(false); };
      board.addEventListener('pointerup', up); board.addEventListener('pointercancel', up);
      $('.dmp-meter').addEventListener('pointerdown', e => { e.preventDefault(); if (st.stage === 'pleat') crimp(); });
      const go = $('.dmp-go');
      go.addEventListener('pointerdown', e => { if (st.stage === 'fill') { e.preventDefault(); holdFill(true); } });
      go.addEventListener('pointerup', () => { if (st.stage === 'fill') holdFill(false); });
      go.addEventListener('click', () => { if (st.stage === 'roll') finishRoll(); else if (st.stage === 'cook') lid(); });
      const key = e => {
        if (st.over) return; e.stopPropagation();
        if (e.key === 'Escape') { e.preventDefault(); st.paused = !st.paused; $('.mg-pause').hidden = !st.paused; return; }
        if (st.paused) return;
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); rollBy(e.key === 'ArrowLeft' ? -24 : 24); }
        else if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault(); if (e.repeat && st.stage !== 'fill') return;
          if (st.stage === 'roll') finishRoll(); else if (st.stage === 'fill') holdFill(true); else if (st.stage === 'pleat') crimp(); else if (st.stage === 'cook') lid();
        }
      };
      const keyUp = e => { if ((e.key === ' ' || e.key === 'Enter') && st.stage === 'fill') holdFill(false); };
      const cleanup = () => { cancelAnimationFrame(raf); window.removeEventListener('keydown', key, true); window.removeEventListener('keyup', keyUp, true); K.close(); el.remove(); };
      $('.mg-pause').onclick = e => { const b = e.target.dataset.mg; if (b === 'resume') { st.paused = false; $('.mg-pause').hidden = true; } if (b === 'quit') { st.paused = false; finish(true); } };
      window.addEventListener('keydown', key, true); window.addEventListener('keyup', keyUp, true);
      tray(); startRoll(); raf = requestAnimationFrame(tick);
    });
  }
  return { play };
})();
