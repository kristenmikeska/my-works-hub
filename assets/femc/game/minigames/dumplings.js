/* FEMC epilogue minigame: dumplings, a Cooking Mama-style kitchen game (Nov 10 2026, Kat: "a cute solstice style cooking game",
   "more animation and realism", "like one of those Mama's cooking games" (step by step, hands-on, no customers: it's just the two
   of them cooking), "more customization and for them to actually talk to each other"). Runners, 12/31. Standalone: nothing in the
   story calls it yet (mockups/minigames/index.html).

   FemcDumplings.play({ host, count, mute, onDone }) -> Promise<result>
     count  dumplings to wrap (default 3)   mute  no sound
   result = { steps: { id: 0-100 }, score, perfect, okay, bags, cook, filling, sauce, garnish, plate, grade: 'S'|'A'|'B'|'C', quit }

   Choices (customization): the filling (classic pork and chive / kimchi pork / shrimp and chive) at the start; the plate, the
   dipping sauce (soy-vinegar / chili oil / sesame soy) and the garnish (sesame / scallion / chili flakes) when plating. Each one
   changes the colours and what they say.
   The steps (each 0-100):
     chop     tap (Space / click) as the knife reaches each mark: the scallion shortens, rounds pile up
     stir     stir the bowl in circles (drag, or ← → in turn): chunky filling blends smooth
     season   hold to tip the bottle; let go at the line
     per dumpling: roll (drag the pin / ← →, Done in the pink) · spoon (hold, let go in the pink) · wet (trace the rim, or hold Space)
                   · fold (drag the edge up and over, or hold ↑) · pleat (swipe across each glowing point, or Space on the pulse)
     pan      drag each dumpling in (or Space); brown the bottoms; hold to pour water at the line; lid; steam
     plate    pick the plate, sauce and garnish; drag to drizzle, tap to sprinkle; Serve
   They talk: Haechan (left) and Solar (right) trade lines between and during the steps, by what you chose and how it's going
   (a little conversation queue, never blocking the game; tap a bubble to skip it).
   Everything is SVG drawn in code (shaded dough, speckled filling, a glossy pan, bubbles, rising steam) so it can move; Kat's
   art (FEMC-ART-TODO 44, art/minigames/cook/) dresses the kitchen when it exists. Sounds: Web Audio, no files. Esc pauses. */
window.FemcDumplings = (() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const base = () => (window.FemcGame && window.FemcGame.base) || (document.querySelector('script[src*="minigames/dumplings.js"]')?.src.split('assets/')[0]) || '';
  const pick = a => Array.isArray(a) ? a[Math.floor(Math.random() * a.length)] : a;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  /* ── choices ── */
  const FILLINGS = {
    classic: { name: 'Pork and chive', a: '#e3a08f', b: '#b8695a', speck: '#7ac36b', speck2: '#f2efe2',
      say: [['h', 'neutral', 'Classic. Good. You can taste if you messed it up.'], ['s', 'happy', "That's the one your mom makes, right?"], ['h', 'flustered', '...Maybe.']] },
    kimchi: { name: 'Kimchi pork', a: '#e9806a', b: '#b8432f', speck: '#ff5a3c', speck2: '#ffe0c9',
      say: [['h', 'happy', 'Kimchi. Okay. You have taste.'], ['s', 'happy', "I've been told I'm spicy."], ['h', 'neutral', 'By who.'], ['s', 'flustered', '...Hyein.']] },
    shrimp: { name: 'Shrimp and chive', a: '#ffc2a8', b: '#f08f6f', speck: '#7ac36b', speck2: '#fff1e8',
      say: [['h', 'surprised', 'Shrimp? Fancy.'], ['s', 'neutral', "We're on Fifth Avenue. Let me have this."], ['h', 'happy', 'Fair.']] },
  };
  const SAUCES = { soy: { name: 'Soy-vinegar', col: '#4a2416', say: ['h', 'neutral', 'The responsible choice.'] }, chili: { name: 'Chili oil', col: '#c4321c', say: ['h', 'happy', 'Now we\'re talking.'] }, sesame: { name: 'Sesame soy', col: '#8a5524', say: ['s', 'happy', 'It smells like a good restaurant.'] } };
  const GARNISH = { sesame: { name: 'Sesame', col: '#fff4dc', edge: '#d8c49a' }, scallion: { name: 'Scallion', col: '#8bd27a', edge: '#5fa84f' }, chili: { name: 'Chili flakes', col: '#d8341c', edge: '#8a1e10' } };
  const PLATES = { white: { name: 'White plate', rim: '#f0d7e4', in: '#ffd3e6', body: '#ffffff' }, pink: { name: 'Pink plate', rim: '#ff9ac8', in: '#ffd3e6', body: '#ffe6f1' }, gold: { name: "Her mother's good tray", rim: '#d9b45a', in: '#f3e1a8', body: '#fffaf0' } };

  /* ── what they say ── ['h' | 's', face, line]; a step key gives a little exchange, picked by how it went */
  const TALK = {
    open: [[['h', 'neutral', "Okay. Sixty-one. I'll do most of them. You do these."], ['s', 'neutral', 'Why sixty-one?'], ['h', 'neutral', "Because sixty is a round number and I don't trust round numbers."]]],
    chop: [[['h', 'neutral', 'Scallions first. Thin rounds, not logs.'], ['s', 'happy', 'I know how to cut a scallion.'], ['h', 'neutral', 'We\'ll see.']]],
    stir: [[['h', 'neutral', 'Stir one way. Until it goes sticky.'], ['s', 'neutral', 'Why one way?'], ['h', 'neutral', "Because I said so, and also science."]]],
    season: [[['h', 'neutral', 'Soy. A splash. Not a flood.'], ['s', 'neutral', 'Define a splash.'], ['h', 'serious', 'Less than whatever you\'re about to do.']]],
    roll: [[['h', 'neutral', 'Roll it out. Thin, not see-through.']], [['s', 'happy', 'Okay, I think I get this part.'], ['h', 'neutral', 'You thought that last time.']], [['h', 'neutral', 'Even. From the middle out.']]],
    spoon: [[['h', 'neutral', 'A spoon. Not a shovel.']], [['s', 'neutral', 'How much is enough?'], ['h', 'neutral', 'Less than you think.']]],
    wet: [[['h', 'neutral', 'Wet the edge. All the way round, or it opens in the pan.'], ['s', 'surprised', 'It opens?'], ['h', 'serious', 'It explodes.']]],
    fold: [[['h', 'neutral', 'Fold it over. Gently.']], [['s', 'neutral', 'Like a taco.'], ['h', 'serious', "Never say that again."]]],
    pleat: [[['h', 'neutral', 'Crimp, crimp, crimp. Like a bar of eighths.']], [['s', 'happy', "You're counting it in."], ['h', 'happy', "It's the only way I know how to teach anything."]]],
    pan: [[['h', 'neutral', "Into the pan. Flat side down. It'll spit."], ['s', 'surprised', 'It spat at me.'], ['h', 'happy', "It does that. It's personal."]]],
    brown: [[['h', 'neutral', 'Listen. When the sizzle goes nutty, that\'s gold.'], ['s', 'neutral', 'You can hear it?'], ['h', 'neutral', 'You can too. Listen.']]],
    water: [[['h', 'neutral', 'Water. To the line. Then lid, fast.']]],
    plate: [[['s', 'happy', 'Can I pick the plate?'], ['h', 'neutral', "It's your apartment, princess."]]],
    great: [[['h', 'happy', "...Okay. That's good."], ['s', 'happy', 'Say it again.'], ['h', 'neutral', 'No.']], [['h', 'surprised', 'Huh. Look at you.']], [['h', 'happy', 'That one goes on the good tray.'], ['s', 'happy', '!!']], [['s', 'happy', 'Did you see that?'], ['h', 'neutral', 'I saw it.']]],
    fine: [[['h', 'neutral', "It'll do."]], [['h', 'neutral', "Fine. It's a dumpling."], ['s', 'neutral', "That's practically a compliment."]], [['h', 'neutral', 'Your mother would eat that.']]],
    poor: [[['h', 'serious', "That's a bag, Solar."], ['s', 'flustered', "It's a dumpling."], ['h', 'serious', "That's a bag with meat in it."]], [['h', 'serious', 'I demonstrated that four times.'], ['s', 'flustered', 'SHOW ME AGAIN.']], [['s', 'sad', '...We\'ll call it rustic.'], ['h', 'neutral', "We'll call it yours."]]],
    end: { S: [['h', 'happy', "Sixty-one, and yours are the good ones. I'm telling everyone."], ['s', 'happy', "You're not telling anyone."], ['h', 'happy', "I'm telling Jaemin."]],
      A: [['h', 'neutral', 'Okay. You can cook at my house.'], ['s', 'happy', 'Is that an invitation?'], ['h', 'flustered', "...It's a statement."]],
      B: [['h', 'neutral', 'Some of them are dumplings.'], ['s', 'neutral', 'Some is a lot.']], C: [['h', 'neutral', 'You do the flat ones. Next year.'], ['s', 'sad', 'Next year.'], ['h', 'neutral', 'Next year.']] },
  };

  /* ── kitchen sounds (Web Audio) ── */
  function kitchen(muted) {
    let ac = null, sizz = null, pouring = null;
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
    const loop = (f, q, g, type = 'highpass') => {
      const a = A(); if (!a) return null; const s = a.createBufferSource(), fl = a.createBiquadFilter(), v = a.createGain();
      s.buffer = buf(a, 2, 'white'); s.loop = true; fl.type = type; fl.frequency.value = f; fl.Q.value = q; v.gain.value = 0.0001; v.gain.exponentialRampToValueAtTime(g, a.currentTime + 0.25);
      s.connect(fl); fl.connect(v); v.connect(a.destination); s.start();
      return { s, v, fl, stop() { try { v.gain.exponentialRampToValueAtTime(0.0001, a.currentTime + 0.25); setTimeout(() => { try { s.stop(); } catch (e) {} }, 300); } catch (e) {} } };
    };
    return {
      chop: () => { tone(180, 0.06, 'square', 0.18, 0, 90); noise(0.05, 2500, 2, 0.15); },
      stir: () => noise(0.18, 500, 1.2, 0.18, 'brown'),
      squelch: () => { noise(0.12, 380, 3, 0.2, 'brown'); tone(140, 0.1, 'sine', 0.08, 0, 90); },
      pourOn: (f = 1400) => { if (!pouring) pouring = loop(f, 0.7, 0.12, 'bandpass'); },
      pourOff: () => { pouring && pouring.stop(); pouring = null; },
      roll: () => noise(0.22, 260, 0.8, 0.5, 'brown'),
      scoop: () => noise(0.12, 600, 2, 0.12),
      plop: () => tone(320, 0.18, 'sine', 0.22, 0, 140),
      drip: () => tone(1200, 0.08, 'sine', 0.08, 0, 600),
      fold: () => noise(0.2, 700, 1, 0.15, 'brown'),
      pinch: () => { tone(900, 0.04, 'triangle', 0.1); noise(0.08, 1800, 3, 0.08, 'white', 0.01); },
      tear: () => noise(0.25, 2400, 1.5, 0.12, 'white', 0, 900),
      ding: () => { tone(1568, 0.5, 'sine', 0.14); tone(2093, 0.6, 'sine', 0.1, 0.06); },
      boing: () => tone(220, 0.45, 'sine', 0.2, 0, 90),
      sparkle: () => [2637, 3136, 3520].forEach((f, i) => tone(f, 0.15, 'sine', 0.05, i * 0.06)),
      blip: () => tone(1100, 0.05, 'triangle', 0.05),
      pick: () => { tone(880, 0.08, 'triangle', 0.1); tone(1320, 0.1, 'triangle', 0.08, 0.06); },
      sizzleOn: () => { if (!sizz) sizz = loop(3200, 0.5, 0.06); },
      sizzleTone: k => { if (sizz) sizz.fl.frequency.value = 3200 - k * 1600; },
      sizzleOff: () => { sizz && sizz.stop(); sizz = null; },
      crackle: () => noise(0.03, 4000 + Math.random() * 2000, 4, 0.08),
      hiss: () => noise(1.2, 3000, 0.6, 0.35, 'white', 0, 1500),
      lid: () => { tone(640, 0.35, 'triangle', 0.16); tone(960, 0.3, 'triangle', 0.08, 0.01); noise(0.06, 3000, 2, 0.1); },
      steam: () => noise(1.4, 3500, 0.6, 0.12, 'white', 0, 1500),
      bell: () => [1760, 1760].forEach((f, i) => tone(f, 0.3, 'triangle', 0.12, i * 0.18)),
      shake: () => [0, 0.08, 0.16].forEach(t => noise(0.05, 5000, 2, 0.06, 'white', t)),
      close: () => { try { sizz && sizz.s.stop(); pouring && pouring.s.stop(); ac && ac.close(); } catch (e) {} },
    };
  }

  /* ── shared SVG pieces ── */
  const defs = F => `<defs>
    <radialGradient id="dg-dough" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#fffaf2"/><stop offset=".7" stop-color="#f4e6d2"/><stop offset="1" stop-color="#e2cdb0"/></radialGradient>
    <radialGradient id="dg-fill" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="${F.a}"/><stop offset="1" stop-color="${F.b}"/></radialGradient>
    <radialGradient id="dg-pan" cx="45%" cy="40%" r="65%"><stop offset="0" stop-color="#55555e"/><stop offset=".75" stop-color="#232329"/><stop offset="1" stop-color="#121216"/></radialGradient>
    <radialGradient id="dg-bowl" cx="50%" cy="30%" r="80%"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#e9dfe6"/></radialGradient>
    <linearGradient id="dg-oil" x1="0" x2="1"><stop offset="0" stop-color="#ffd27a" stop-opacity="0"/><stop offset=".5" stop-color="#ffd27a" stop-opacity=".35"/><stop offset="1" stop-color="#ffd27a" stop-opacity="0"/></linearGradient>
    <filter id="dg-soft"><feGaussianBlur stdDeviation="2"/></filter></defs>`;
  const shadow = (cx, cy, rx, ry) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="rgba(60,30,30,.18)" filter="url(#dg-soft)"/>`;
  const specks = (cx, cy, rx, ry, n, col, seed = 1) => { let out = ''; for (let i = 0; i < n; i++) { const a = (i * 137.5 + seed * 31) * Math.PI / 180, r = Math.sqrt((i + 0.5) / Math.max(n, 1)); out += `<circle cx="${(cx + Math.cos(a) * r * rx).toFixed(1)}" cy="${(cy + Math.sin(a) * r * ry).toFixed(1)}" r="${1.3 + (i % 3) * 0.5}" fill="${col}"/>`; } return out; };
  const rim = (t, w, h, cx = 150, cy = 150) => { const u = 1 - t; return [u * u * (cx - w) + 2 * u * t * cx + t * t * (cx + w), u * u * cy + 2 * u * t * (cy - 2 * h) + t * t * cy]; };
  function dumpling({ cx = 150, cy = 150, w = 70, h = 52, pleats = [], brown = null, q = null, fold = 1 } = {}) {
    const sq = q === 'poor' ? 0.82 : q === 'great' ? 1.05 : 1, H = h * sq * fold;
    const body = q === 'poor'
      ? `<path d="M${cx - w} ${cy} C${cx - w * 0.9} ${cy - H * 1.2} ${cx - w * 0.2} ${cy - H * 1.6} ${cx + w * 0.1} ${cy - H * 1.1} S${cx + w * 1.1} ${cy - H * 0.6} ${cx + w} ${cy} Z" fill="url(#dg-dough)" stroke="#d9c2a3" stroke-width="2"/>`
      : `<path d="M${cx - w} ${cy} Q${cx} ${cy - H * 2} ${cx + w} ${cy} Z" fill="url(#dg-dough)" stroke="#d9c2a3" stroke-width="2"/>`;
    const bottom = brown ? `<path d="M${cx - w + 4} ${cy - 1} Q${cx} ${cy + 9} ${cx + w - 4} ${cy - 1} Z" fill="${brown}" opacity=".95"/>` : '';
    const pl = pleats.map((p, k) => {
      const n = Math.max(pleats.length, 7), t = 0.16 + (k / (n - 1)) * 0.68, [x, y] = rim(t, w, H, cx, cy), [x2, y2] = rim(Math.min(0.98, t + 0.06), w, H, cx, cy);
      return `<path d="M${x.toFixed(1)} ${y.toFixed(1)} Q${((x + x2) / 2).toFixed(1)} ${(Math.min(y, y2) - (p ? w / 7 : 4)).toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}" fill="none" stroke="${p === 2 ? '#ffcf5a' : p ? '#d6bd9c' : '#c45d5d'}" stroke-width="${p ? Math.max(2, w / 14) : 2}" stroke-linecap="round"${p ? '' : ' stroke-dasharray="3 5"'}/>`;
    }).join('');
    const spark = q === 'great' ? `<g class="spark"><path d="M${cx + w * 0.8} ${cy - H * 1.7} l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4z" fill="#ffd166"/><path d="M${cx - w * 0.9} ${cy - H * 1.3} l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z" fill="#ffe9a6"/></g>` : '';
    return `${shadow(cx, cy + 6, w * 0.95, Math.max(4, w / 8))}${bottom}${body}<ellipse cx="${cx - w * 0.28}" cy="${cy - H * 0.55}" rx="${w * 0.2}" ry="${H * 0.14}" fill="#fff" opacity=".45"/>${pl}${spark}`;
  }

  function play(o = {}) {
    return new Promise(done => {
      const host = o.host || document.body, N = o.count || 3, K = kitchen(!!o.mute);
      const ART = id => `${base()}assets/femc/game/art/minigames/cook/${id}.webp`;
      const FACE = (who, f) => `${base()}assets/femc/portraits/${who === 'h' ? 'haechan-runners' : 'solar-runners'}/${f}.webp`;
      const R = { steps: {}, made: [], step: null, paused: false, over: false, filling: 'classic', sauce: 'soy', garnish: 'sesame', plate: 'white' };
      let F = FILLINGS.classic;
      const el = document.createElement('div');
      el.className = 'mg-dmp' + (reduced.matches ? ' still' : '');
      el.innerHTML = `
        <div class="dmp-top"><b>12/31 · the kitchen</b><span class="dmp-step"></span><ol class="dmp-prog" aria-label="Steps"></ol></div>
        <div class="dmp-talk h"><img alt="Haechan" src="${FACE('h', 'neutral')}"><p aria-live="polite"><b>Haechan</b><span></span></p></div>
        <div class="dmp-talk s"><img alt="Solar" src="${FACE('s', 'neutral')}"><p aria-live="polite"><b>Solar</b><span></span></p></div>
        <div class="dmp-counter"><img class="dmp-counter-art" src="${ART('counter')}" alt="" onerror="this.remove()"><div class="dmp-flour"></div>
          <svg class="dmp-svg" viewBox="0 0 300 200" aria-hidden="true"><g class="defs"></g><g class="scene"></g></svg><div class="dmp-fx" aria-hidden="true"></div>
          <div class="dmp-grade" aria-live="polite"></div><div class="dmp-choose" hidden></div></div>
        <div class="dmp-ctl"><div class="dmp-meter"><i class="zone"></i><i class="gold"></i><i class="fillbar"></i><i class="mark"></i></div><p class="dmp-tip"></p><button type="button" class="dmp-go" hidden></button></div>
        <div class="mg-pause" hidden><b>Paused</b><button type="button" data-mg="resume">Resume</button><button type="button" data-mg="quit">Quit</button></div>
        <div class="mg-end" hidden></div>`;
      host.appendChild(el);
      const $ = s => el.querySelector(s), G = $('.scene'), svgEl = $('.dmp-svg'), FX = $('.dmp-fx');
      const setDefs = () => { $('.defs').innerHTML = defs(F); };

      /* the conversation queue: one bubble at a time, never blocking */
      const talkQ = []; let talkT = null;
      const showLine = () => {
        clearTimeout(talkT); const L = talkQ.shift();
        el.querySelectorAll('.dmp-talk').forEach(t => t.classList.remove('on'));
        if (!L) return;
        const [who, f, t] = L, box = $(`.dmp-talk.${who}`), im = box.querySelector('img');
        if (!im.src.endsWith(`/${f}.webp`)) im.src = FACE(who, f);
        box.querySelector('span').textContent = t; box.classList.add('on'); K.blip();
        talkT = setTimeout(showLine, 1300 + t.length * 38);
      };
      const say = (lines, now = true) => { if (!lines) return; if (now) talkQ.length = 0; talkQ.push(...lines); if (now || !el.querySelector('.dmp-talk.on')) showLine(); };
      const talk = key => say(pick(TALK[key]));
      el.querySelectorAll('.dmp-talk').forEach(b => b.addEventListener('click', showLine));

      const meter = m => {
        const z = $('.zone'), g = $('.gold'), fb = $('.fillbar'), mk = $('.mark');
        if (!m) { $('.dmp-meter').hidden = true; return; } $('.dmp-meter').hidden = false;
        z.style.cssText = m.zone ? `left:${m.zone[0]}%;width:${m.zone[1] - m.zone[0]}%` : 'display:none';
        g.style.cssText = m.gold ? `left:${m.gold[0]}%;width:${m.gold[1] - m.gold[0]}%` : 'display:none';
        fb.style.width = m.fill == null ? '0' : `${clamp(m.fill, 0, 100)}%`; mk.style.display = m.mark == null ? 'none' : ''; if (m.mark != null) mk.style.left = `${m.mark}%`;
      };
      const btn = (label, on) => { const b = $('.dmp-go'); b.hidden = !label; b.textContent = label || ''; b.onclick = null; b.onpointerdown = null; b.onpointerup = null; if (on) Object.assign(b, on); };
      const pt = e => { const r = svgEl.getBoundingClientRect(), s = Math.min(r.width / 300, r.height / 200), ox = r.left + (r.width - 300 * s) / 2, oy = r.top + (r.height - 200 * s) / 2; return { x: (e.clientX - ox) / s, y: (e.clientY - oy) / s }; };
      const puff = (x, y, cls = 'steam', n = 1) => { if (reduced.matches) return; for (let i = 0; i < n; i++) { const p = document.createElement('i'); p.className = 'dmp-p ' + cls; p.style.left = `${x / 3 + (Math.random() - 0.5) * 6}%`; p.style.top = `${y / 2}%`; p.style.animationDelay = `${i * 0.08}s`; FX.appendChild(p); setTimeout(() => p.remove(), 1600); } };
      const pop = (txt, kind) => { const g = $('.dmp-grade'); g.textContent = txt; g.className = 'dmp-grade on ' + kind; clearTimeout(pop.t); pop.t = setTimeout(() => g.classList.remove('on'), 1100); };
      const STEPS = ['pick', 'chop', 'stir', 'season', ...Array.from({ length: N }, (_, i) => `wrap${i + 1}`), 'pan', 'plate'];
      const prog = cur => { $('.dmp-prog').innerHTML = STEPS.map(s => `<li class="${s === cur ? 'now' : R.steps[s] != null || (s.startsWith('wrap') && R.made[+s.slice(4) - 1]) || (s === 'pick' && cur !== 'pick') ? 'done' : ''}"></li>`).join(''); };
      const score = (id, v) => { R.steps[id] = Math.round(clamp(v, 0, 100)); const k = v >= 85 ? 'great' : v >= 55 ? 'fine' : 'poor'; talk(k); pop(k === 'great' ? 'GREAT!' : k === 'fine' ? 'OKAY' : 'OOPS', k); k === 'great' ? (K.ding(), setTimeout(K.sparkle, 100)) : k === 'poor' ? K.boing() : K.pinch(); return k; };
      let loopFn = null;
      const next = (fn, ms = 1300) => { loopFn = null; setTimeout(() => !R.over && fn(), ms); };
      const choose = (title, opts, onPick) => {
        const c = $('.dmp-choose'); c.hidden = false;
        c.innerHTML = `<b>${esc(title)}</b><div>${Object.entries(opts).map(([id, x]) => `<button type="button" data-id="${id}"><i style="--c:${x.a || x.col || x.body}"></i>${esc(x.name)}</button>`).join('')}</div>`;
        c.querySelectorAll('button').forEach((b, i) => { b.onclick = () => { K.pick(); c.hidden = true; onPick(b.dataset.id); }; if (i === 0) b.focus(); });
      };

      /* ── 0. pick the filling ── */
      function pickFilling() {
        R.step = 'pick'; prog('pick'); $('.dmp-step').textContent = 'What are we making?'; $('.dmp-tip').textContent = 'Pick a filling.'; btn(null); meter(null);
        setDefs(); G.innerHTML = `${shadow(150, 168, 110, 12)}<ellipse cx="150" cy="120" rx="108" ry="56" fill="url(#dg-bowl)" stroke="#e2c9d6" stroke-width="3"/>`;
        say(TALK.open[0]);
        choose('The filling', FILLINGS, id => { R.filling = id; F = FILLINGS[id]; setDefs(); say(F.say); next(chop, 2600); });
      }

      /* ── 1. chop the scallions ── */
      function chop() {
        R.step = 'chop'; prog('chop'); talk('chop'); $('.dmp-step').textContent = 'Chop the scallions';
        $('.dmp-tip').textContent = 'Tap (Space or click) as the knife reaches each mark.';
        const MARKS = 8; let cut = 0, x = 40, dir = 1, sp = 70, hits = 0; const piles = [];
        const draw = () => {
          const left = 60 + cut * 22;
          G.innerHTML = `${shadow(150, 150, 120, 10)}<rect x="30" y="80" width="240" height="78" rx="14" fill="#c99b6d"/><rect x="30" y="80" width="240" height="78" rx="14" fill="url(#dg-oil)" opacity=".5"/>
            <rect x="${left}" y="112" width="${Math.max(0, 230 - left)}" height="11" rx="5" fill="#7ac36b"/><rect x="${Math.max(left, 200)}" y="112" width="${Math.max(0, 230 - Math.max(left, 200))}" height="11" rx="5" fill="#f2f7e8"/>
            ${Array.from({ length: MARKS - cut }, (_, i) => `<line x1="${left + 22 * (i + 1)}" y1="106" x2="${left + 22 * (i + 1)}" y2="128" stroke="#ff4f9e" stroke-width="2" stroke-dasharray="3 3" opacity="${i === 0 ? 1 : .35}"/>`).join('')}
            ${piles.map(p => `<ellipse cx="${p[0]}" cy="${p[1]}" rx="5" ry="3" fill="#8bd27a" stroke="#5fa84f"/>`).join('')}
            <g transform="translate(${left + 22 + (x - 50) * 0.4} 0)"><rect x="-3" y="44" width="6" height="66" fill="#dfe3ea" stroke="#aab1bb"/><rect x="-6" y="24" width="12" height="24" rx="4" fill="#3a2a2a"/></g>`;
          meter({ zone: [32, 68], gold: [42, 58], mark: x });
        };
        const hit = () => {
          if (R.step !== 'chop' || R.paused) return;
          const off = Math.abs(x - 50); K.chop(); if (!reduced.matches) { svgEl.classList.remove('thunk'); void svgEl.getBBox(); svgEl.classList.add('thunk'); }
          hits += off < 8 ? 100 : off < 18 ? 70 : 25; cut++; piles.push([60 + cut * 6 + Math.random() * 18, 140 + Math.random() * 10]); sp *= 1.07;
          if (cut >= MARKS) { loopFn = null; R.step = 'wait'; draw(); score('chop', hits / MARKS); next(stir, 1800); }
        };
        btn('Chop', { onclick: hit });
        loopFn = dt => { x += dir * sp * dt; if (x > 100) { x = 100; dir = -1; } if (x < 0) { x = 0; dir = 1; } draw(); };
        R.onKey = (k, up) => !up && k === ' ' && hit(); R.onTap = () => hit(); R.onDrag = null;
        draw();
      }

      /* ── 2. stir ── */
      function stir() {
        R.step = 'stir'; prog('stir'); talk('stir'); $('.dmp-step').textContent = 'Mix the filling';
        $('.dmp-tip').textContent = 'Stir in circles: drag round the bowl (or tap ← → in turn).'; btn(null);
        let turns = 0, last = null, spoonA = 0, lastKey = null, wobble = 0; const GOAL = 3;
        const draw = () => {
          const smooth = clamp(turns / GOAL, 0, 1), chunks = Math.round(26 * (1 - smooth));
          G.innerHTML = `${shadow(150, 168, 110, 12)}<ellipse cx="150" cy="120" rx="108" ry="56" fill="url(#dg-bowl)" stroke="#e2c9d6" stroke-width="3"/>
            <ellipse cx="150" cy="118" rx="88" ry="40" fill="url(#dg-fill)"/>${specks(150, 118, 78, 34, chunks, F.speck, 2)}${specks(150, 118, 76, 32, Math.round(chunks * 0.7), F.speck2, 5)}
            <path d="M${150 + Math.cos(spoonA) * 50} ${118 + Math.sin(spoonA) * 22} q-20 -6 -30 -${12 + smooth * 6}" stroke="rgba(255,255,255,${0.15 + smooth * 0.25})" stroke-width="5" fill="none" stroke-linecap="round"/>
            <g transform="translate(${150 + Math.cos(spoonA) * 52} ${116 + Math.sin(spoonA) * 24}) rotate(${-30 + Math.cos(spoonA) * 10})"><ellipse cx="0" cy="6" rx="9" ry="6" fill="#d7a679"/><rect x="-3" y="-70" width="6" height="74" rx="3" fill="#d7a679"/></g>`;
          meter({ zone: [80, 100], fill: smooth * 100 });
        };
        const turnBy = da => {
          if (R.step !== 'stir' || R.paused) return;
          spoonA += da; turns += Math.abs(da) / (Math.PI * 2); wobble += Math.abs(da);
          if (wobble > 1.4) { wobble = 0; K.stir(); if (Math.random() < 0.3) K.squelch(); }
          if (turns >= GOAL) { R.step = 'wait'; draw(); score('stir', 80 + Math.random() * 20); next(season, 1800); return; }
          draw();
        };
        R.onDrag = (p, ph) => { const a = Math.atan2((p.y - 118) / 0.45, p.x - 150); if (ph === 'move' && last != null) { let d = a - last; if (d > Math.PI) d -= 2 * Math.PI; if (d < -Math.PI) d += 2 * Math.PI; if (Math.abs(d) < 1) turnBy(Math.abs(d)); } last = ph === 'up' ? null : a; };
        R.onKey = (k, up) => { if (!up && (k === 'ArrowLeft' || k === 'ArrowRight') && k !== lastKey) { lastKey = k; turnBy(1.25); } };
        R.onTap = null; loopFn = null; draw();
      }

      /* ── 3. season ── */
      function season() {
        R.step = 'season'; prog('season'); talk('season'); $('.dmp-step').textContent = 'Season it';
        $('.dmp-tip').textContent = 'Hold to tip the soy sauce (Space or the button). Let go at the line.';
        let lvl = 0, holding = false;
        const draw = () => {
          G.innerHTML = `${shadow(150, 168, 110, 12)}<ellipse cx="150" cy="128" rx="108" ry="56" fill="url(#dg-bowl)" stroke="#e2c9d6" stroke-width="3"/><ellipse cx="150" cy="126" rx="88" ry="40" fill="url(#dg-fill)"/>
            <ellipse cx="150" cy="126" rx="${10 + lvl * 0.5}" ry="${5 + lvl * 0.22}" fill="#5a2d1c" opacity=".85"/>
            <g transform="translate(205 30) rotate(${holding ? 118 : 30})"><rect x="-12" y="-40" width="24" height="56" rx="8" fill="#3b1d12"/><rect x="-12" y="-14" width="24" height="18" fill="#ff4f9e"/><rect x="-5" y="-54" width="10" height="16" rx="3" fill="#c2302d"/></g>
            ${holding ? '<path d="M161 52 Q170 90 152 126" stroke="#5a2d1c" stroke-width="3" fill="none" opacity=".9"/>' : ''}`;
          meter({ zone: [62, 78], gold: [67, 73], fill: lvl });
        };
        const set = on => {
          if (R.step !== 'season' || R.paused) return;
          if (on && !holding) { holding = true; K.pourOn(1100); }
          if (!on && holding) { holding = false; K.pourOff(); R.step = 'wait'; loopFn = null; draw(); score('season', 100 - Math.abs(lvl - 70) * 4); next(roll, 1800); }
          draw();
        };
        btn('Hold to pour', { onpointerdown: e => { e.preventDefault(); set(true); }, onpointerup: () => set(false) });
        loopFn = dt => { if (holding) { lvl = Math.min(100, lvl + dt * 32); if (Math.random() < dt * 8) K.drip(); draw(); } };
        R.onKey = (k, up) => k === ' ' && set(!up); R.onTap = null; R.onDrag = null;
        draw();
      }

      /* ── 4-8. wrap a dumpling ── */
      let D = null;
      function roll() {
        const i = R.made.length; D = { i, roll: 0, fill: 0, wet: 0, pleats: [], q: {} };
        R.step = 'roll'; prog(`wrap${i + 1}`); talk('roll'); $('.dmp-step').textContent = `Dumpling ${i + 1} of ${N} · Roll`;
        $('.dmp-tip').textContent = 'Drag the rolling pin back and forth (or ← →). Done when the meter is in the pink.';
        let pinX = 0, lastX = null, lastDir = 0;
        const draw = () => {
          const r = 26 + D.roll * 0.6, thin = D.roll > 112;
          G.innerHTML = `${shadow(150, 152, r + 6, 10)}<ellipse cx="150" cy="140" rx="${r}" ry="${r * (0.62 + Math.min(D.roll, 100) / 1000)}" fill="url(#dg-dough)" stroke="#e3cfb5" stroke-width="2"/>${D.roll < 50 ? `<ellipse cx="142" cy="${132 - (50 - D.roll) * 0.2}" rx="${r * 0.55}" ry="${r * 0.35}" fill="#fff6ea" opacity=".75"/>` : ''}${thin ? '<ellipse cx="164" cy="146" rx="10" ry="5" fill="#e9dccb"/>' : ''}${specks(150, 140, r * 0.9, r * 0.5, 10, 'rgba(255,255,255,.7)', 9)}
            <g transform="translate(${pinX} 0)"><rect x="46" y="126" width="208" height="20" rx="10" fill="#f4f4f6" stroke="#cfcfd6" stroke-width="2"/><rect x="26" y="130" width="26" height="12" rx="6" fill="#e7e7ec"/><rect x="248" y="130" width="26" height="12" rx="6" fill="#e7e7ec"/><circle cx="214" cy="136" r="5" fill="#ff7fb2"/></g>`;
          meter({ zone: [85 / 1.4, 112 / 1.4], gold: [92 / 1.4, 104 / 1.4], fill: D.roll / 1.4 });
        };
        const by = dx => {
          if (R.step !== 'roll' || R.paused) return;
          pinX = clamp(pinX + dx * 0.6, -60, 60); const d = Math.sign(dx);
          if (d && d !== lastDir) { lastDir = d; D.roll = Math.min(140, D.roll + 7 + Math.random() * 3); K.roll(); if (!reduced.matches) { svgEl.classList.remove('squish'); void svgEl.getBBox(); svgEl.classList.add('squish'); } puff(150 + (Math.random() - 0.5) * 100, 150, 'flour', 2); }
          draw();
        };
        const doneRoll = () => { if (R.step !== 'roll') return; R.step = 'wait'; const v = D.roll < 85 ? 40 + D.roll * 0.3 : D.roll > 112 ? 100 - (D.roll - 112) * 3 : 100 - Math.abs(D.roll - 98) * 2; D.q.roll = v; score('roll', v); next(spoon, 1100); };
        btn('Done', { onclick: doneRoll });
        R.onDrag = (p, ph) => { if (ph === 'move' && lastX != null) by((p.x - lastX) * 2.2); lastX = ph === 'up' ? null : p.x; };
        R.onKey = (k, up) => { if (up) return; if (k === 'ArrowLeft' || k === 'ArrowRight') by(k === 'ArrowLeft' ? -24 : 24); else if (k === ' ') doneRoll(); };
        R.onTap = null; loopFn = null; draw();
      }
      function spoon() {
        R.step = 'spoon'; talk('spoon'); $('.dmp-step').textContent = `Dumpling ${D.i + 1} of ${N} · Filling`;
        $('.dmp-tip').textContent = 'Hold to spoon on the filling. Let go in the pink.';
        let holding = false;
        const draw = () => {
          const f = D.fill;
          G.innerHTML = `${shadow(150, 152, 92, 10)}<ellipse cx="150" cy="140" rx="86" ry="56" fill="url(#dg-dough)" stroke="#e3cfb5" stroke-width="2"/>
            <ellipse cx="150" cy="${136 - f * 0.08}" rx="${8 + f * 0.36}" ry="${5 + f * 0.24}" fill="url(#dg-fill)"/>${specks(150, 136 - f * 0.08, 6 + f * 0.3, 4 + f * 0.2, Math.round(f / 6), F.speck, 3)}
            <g transform="translate(${196 - Math.min(f, 40) * 0.3} ${62 + (holding ? 14 : 0)}) rotate(-28)"><ellipse cx="0" cy="0" rx="16" ry="11" fill="#d9dde3" stroke="#aab0b8"/><rect x="12" y="-3" width="70" height="6" rx="3" fill="#c3c8cf"/>${holding ? '<ellipse cx="0" cy="-2" rx="11" ry="6" fill="url(#dg-fill)"/>' : ''}</g>`;
          meter({ zone: [55, 82], gold: [63, 74], fill: f });
        };
        const set = on => {
          if (R.step !== 'spoon' || R.paused) return;
          if (on && !holding) { holding = true; K.scoop(); }
          if (!on && holding) { holding = false; K.plop(); R.step = 'wait'; loopFn = null; draw(); const v = 100 - Math.abs(D.fill - 68) * 3; D.q.spoon = v; D.overfill = D.fill > 82; score('spoon', v); next(wet, 1100); }
          draw();
        };
        btn('Hold to scoop', { onpointerdown: e => { e.preventDefault(); set(true); }, onpointerup: () => set(false) });
        loopFn = dt => { if (holding) { D.fill = Math.min(100, D.fill + dt * 36); draw(); } };
        R.onKey = (k, up) => k === ' ' && set(!up); R.onTap = () => set(true); R.onTapUp = () => set(false); R.onDrag = null;
        draw();
      }
      function wet() {
        R.step = 'wet'; talk('wet'); $('.dmp-step').textContent = `Dumpling ${D.i + 1} of ${N} · Wet the edge`;
        $('.dmp-tip').textContent = 'Trace the rim with your finger (drag round the edge), or hold Space to go round.'; btn(null);
        const SEG = 36, got = new Array(SEG).fill(false); let ang = -Math.PI / 2, hold = false, left = 9, acc = 0;
        const draw = () => {
          const arcs = got.map((g, k) => { if (!g) return ''; const a0 = k / SEG * Math.PI * 2, a1 = (k + 1) / SEG * Math.PI * 2; return `<path d="M${150 + Math.cos(a0) * 80} ${140 + Math.sin(a0) * 51} A80 51 0 0 1 ${150 + Math.cos(a1) * 80} ${140 + Math.sin(a1) * 51}" stroke="#bfe3ff" stroke-width="6" fill="none" stroke-linecap="round" opacity=".9"/>`; }).join('');
          G.innerHTML = `${shadow(150, 152, 92, 10)}<ellipse cx="150" cy="140" rx="86" ry="56" fill="url(#dg-dough)" stroke="#e3cfb5" stroke-width="2"/><ellipse cx="150" cy="134" rx="32" ry="22" fill="url(#dg-fill)"/>${specks(150, 134, 28, 18, 10, F.speck, 3)}
            <ellipse cx="150" cy="140" rx="80" ry="51" fill="none" stroke="#ff4f9e" stroke-width="2" stroke-dasharray="4 6" opacity=".55"/>${arcs}
            <ellipse cx="44" cy="70" rx="20" ry="9" fill="#9fd3ff" opacity=".7" stroke="#e2c9d6"/><circle cx="${150 + Math.cos(ang) * 80}" cy="${140 + Math.sin(ang) * 51}" r="7" fill="#ffe0cf" stroke="#e3a99a"/>`;
          meter({ zone: [90, 100], fill: got.filter(Boolean).length / SEG * 100 });
        };
        const end = c => { if (R.step !== 'wet') return; R.step = 'wait'; loopFn = null; D.q.wet = c * 100; D.wet = c; score('wet', c * 100); next(fold, 1000); };
        const mark = a => { ang = a; const k = ((Math.floor((a / (Math.PI * 2)) * SEG) % SEG) + SEG) % SEG; if (!got[k]) { got[k] = true; if (Math.random() < 0.3) K.drip(); } if (got.every(Boolean)) end(1); else draw(); };
        R.onDrag = (p, ph) => { if (ph === 'up') return; const dx = p.x - 150, dy = (p.y - 140) / 0.64, r = Math.hypot(dx, dy); if (Math.abs(r - 80) < 26) mark(Math.atan2(dy, dx)); };
        R.onKey = (k, up) => { if (k === ' ') hold = !up; };
        loopFn = dt => { if (hold) mark(ang + dt * 2.6); acc += dt; if (acc >= 1) { acc = 0; if (--left <= 0) end(got.filter(Boolean).length / SEG); } };
        R.onTap = null; draw();
      }
      function fold() {
        R.step = 'fold'; talk('fold'); $('.dmp-step').textContent = `Dumpling ${D.i + 1} of ${N} · Fold`;
        $('.dmp-tip').textContent = 'Drag the front edge up and over (or hold ↑). Let go when the edges meet.'; btn(null);
        let f = 0, startY = null, hold = false;
        const draw = () => {
          const t = clamp(f, 0, 1.25), H = 37 * Math.min(1, t);
          G.innerHTML = `${shadow(150, 156, 92, 10)}${t < 1 ? `<ellipse cx="150" cy="140" rx="86" ry="${56 * (1 - t * 0.6)}" fill="url(#dg-dough)" stroke="#e3cfb5" stroke-width="2"/><ellipse cx="150" cy="${134 + t * 6}" rx="32" ry="${22 * (1 - t * 0.5)}" fill="url(#dg-fill)"/>` : ''}
            ${dumpling({ cx: 150, cy: 150, w: 82, h: Math.max(4, H) })}${t > 1.05 ? '<ellipse cx="150" cy="104" rx="30" ry="6" fill="#e9dccb" opacity=".8"/>' : ''}`;
          meter({ zone: [80 * 0.8, 96 * 0.8], gold: [86 * 0.8, 92 * 0.8], fill: (f / 1.25) * 100 });
        };
        const doneFold = () => { if (R.step !== 'fold') return; R.step = 'wait'; loopFn = null; K.fold(); const v = f > 1.12 ? 60 : f < 0.95 ? 45 + f * 30 : 100; D.q.fold = v * (0.4 + D.wet * 0.6); score('fold', D.q.fold); next(pleat, 1100); };
        R.onDrag = (p, ph) => { if (ph === 'down') startY = p.y; if (ph === 'move' && startY != null) { f = clamp((startY - p.y) / 70, 0, 1.25); draw(); } if (ph === 'up' && startY != null) { startY = null; if (f > 0.3) doneFold(); } };
        R.onKey = (k, up) => { if (k === 'ArrowUp') { hold = !up; if (up && f > 0.3) doneFold(); } };
        loopFn = dt => { if (hold) { f = Math.min(1.25, f + dt * 0.9); draw(); } };
        R.onTap = null; draw();
      }
      function pleat() {
        R.step = 'pleat'; talk('pleat'); $('.dmp-step').textContent = `Dumpling ${D.i + 1} of ${N} · Pleat`;
        $('.dmp-tip').textContent = 'Swipe across each glowing point along the rim, in order (or tap Space on the pulse).'; btn(null);
        const P = 7, W = 82, H = 37; let k = 0, pulse = 0, last = null;
        const pos = j => rim(0.16 + (j / (P - 1)) * 0.68, W, H);
        const draw = () => {
          const [px, py] = k < P ? pos(k) : [0, 0], s = Math.sin(pulse * 6);
          G.innerHTML = `${dumpling({ cx: 150, cy: 150, w: W, h: H, pleats: D.pleats })}${k < P ? `<circle cx="${px}" cy="${py - 4}" r="${7 + s * 2}" fill="none" stroke="#ffcf5a" stroke-width="3"/><circle cx="${px}" cy="${py - 4}" r="3" fill="#ffcf5a"/>` : ''}`;
          meter({ zone: [0, 100], gold: [40, 60], mark: 50 + s * 50 });
        };
        const crimp = good => {
          if (R.step !== 'pleat' || R.paused) return;
          let p = good; if (D.q.roll < 50 && p === 1 && Math.random() < 0.3) p = 0;
          D.pleats.push(p); p ? K.pinch() : K.tear(); if (!reduced.matches) { svgEl.classList.remove('pinch'); void svgEl.getBBox(); svgEl.classList.add('pinch'); }
          k++; draw(); if (k >= P) finishPleat();
        };
        const finishPleat = () => {
          R.step = 'wait'; loopFn = null;
          const pq = D.pleats.reduce((s, p) => s + (p === 2 ? 100 : p ? 70 : 10), 0) / P;
          const all = [D.q.roll, D.q.spoon, D.q.fold, pq].reduce((a, b) => a + b, 0) / 4 - (D.overfill ? 15 : 0);
          const k2 = all >= 82 ? 'great' : all >= 55 ? 'fine' : 'poor'; D.quality = k2; R.made.push(D); R.steps[`wrap${D.i + 1}`] = Math.round(clamp(all, 0, 100));
          G.innerHTML = dumpling({ cx: 150, cy: 150, w: W, h: H, pleats: D.pleats, q: k2 });
          svgEl.classList.add('rev-' + k2); talk(k2); pop(k2 === 'great' ? 'PERFECT!' : k2 === 'fine' ? 'OKAY' : 'A BAG', k2); k2 === 'great' ? (K.ding(), setTimeout(K.sparkle, 100)) : k2 === 'poor' ? K.boing() : K.pinch();
          setTimeout(() => { svgEl.classList.remove('rev-' + k2); svgEl.classList.add('slide'); setTimeout(() => { svgEl.classList.remove('slide'); R.made.length >= N ? pan() : roll(); }, 450); }, 1700);
        };
        R.onDrag = (p, ph) => {
          if (ph === 'up') { last = null; return; } if (k >= P) return;
          const [x, y] = pos(k);
          if (last && Math.hypot(p.x - x, p.y - (y - 4)) < 14) crimp(Math.hypot(p.x - last.x, p.y - last.y) > 3 ? 2 : 1);
          last = p;
        };
        R.onKey = (key, up) => { if (!up && key === ' ') { const s = Math.abs(Math.sin(pulse * 6)); crimp(s < 0.35 ? 2 : s < 0.75 ? 1 : 0); } };
        R.onTap = null;
        loopFn = dt => { pulse += dt * 0.5; draw(); };
        draw();
      }

      /* ── 9-10. the pan ── */
      function pan() {
        R.step = 'pan'; prog('pan'); talk('pan'); $('.dmp-step').textContent = 'Into the pan';
        $('.dmp-tip').textContent = 'Drag each dumpling into the pan (or Space).'; btn(null);
        const home = j => ({ x: 34, y: 62 + j * 44 });
        const slots = R.made.map((d, j) => ({ d, ...home(j), in: false, tx: 118 + j * 36, ty: 130 + (j % 2) * 8 }));
        let cook = 0, phase = 'place', water = 0, holding = false, drag = null, bubbleAt = 0;
        const brown = () => cook < 0.55 ? `rgb(${Math.round(243 - cook * 60)},${Math.round(226 - cook * 110)},${Math.round(196 - cook * 200)})` : cook < 0.85 ? `rgb(${Math.round(210 - (cook - 0.55) * 120)},${Math.round(150 - (cook - 0.55) * 160)},${Math.round(80 - (cook - 0.55) * 100)})` : `rgb(${Math.round(150 - (cook - 0.85) * 400)},${Math.round(90 - (cook - 0.85) * 300)},${Math.max(10, Math.round(40 - (cook - 0.85) * 200))})`;
        const draw = () => {
          const lid = phase === 'lid' || phase === 'steam';
          G.innerHTML = `${shadow(160, 172, 120, 12)}<rect x="250" y="122" width="60" height="12" rx="6" fill="#2a1d18"/><ellipse cx="160" cy="135" rx="112" ry="56" fill="#2b2b31"/><ellipse cx="160" cy="132" rx="102" ry="49" fill="url(#dg-pan)"/>
            <ellipse cx="150" cy="122" rx="60" ry="14" fill="url(#dg-oil)" opacity=".8"/>${water > 0 ? `<ellipse cx="160" cy="134" rx="${40 + water * 0.55}" ry="${18 + water * 0.26}" fill="rgba(200,230,255,.28)"/>` : ''}
            ${slots.map(s => s.in ? dumpling({ cx: s.tx, cy: s.ty, w: 26, h: 12, pleats: s.d.pleats, brown: brown(), q: s.d.quality === 'poor' ? 'poor' : null }) : '').join('')}
            ${slots.map(s => !s.in ? dumpling({ cx: s.x, cy: s.y, w: 22, h: 10, pleats: s.d.pleats, q: s.d.quality === 'poor' ? 'poor' : null }) : '').join('')}
            ${lid ? `<g class="lid ${phase === 'steam' ? 'up' : ''}"><ellipse cx="160" cy="122" rx="104" ry="50" fill="rgba(220,235,245,.45)" stroke="rgba(255,255,255,.7)" stroke-width="4"/><circle cx="160" cy="98" r="9" fill="#ff4f9e" stroke="#fff" stroke-width="3"/></g>` : ''}`;
          if (phase === 'place') meter(null);
          if (phase === 'brown') meter({ zone: [55, 85], gold: [62, 78], fill: cook * 100 });
          if (phase === 'water') meter({ zone: [55, 80], gold: [62, 72], fill: water });
        };
        const drop = j => {
          const s = slots[j]; if (!s || s.in) return; s.in = true; K.sizzleOn(); K.crackle(); puff(s.tx, s.ty - 10, 'oil', 3);
          if (slots.every(x => x.in)) { phase = 'brown'; talk('brown'); $('.dmp-step').textContent = 'Brown the bottoms'; $('.dmp-tip').textContent = 'Wait for golden, then hold Add water (Space).'; btn('Add water', { onpointerdown: e => { e.preventDefault(); startWater(); }, onpointerup: () => stopWater() }); }
          draw();
        };
        const startWater = () => {
          if (phase === 'brown') { R.steps.brown = Math.round(clamp(cook < 0.55 ? 40 + cook * 60 : cook > 0.85 ? 100 - (cook - 0.85) * 400 : 100 - Math.abs(cook - 0.7) * 120, 0, 100)); R.cook = cook < 0.55 ? 'pale' : cook > 0.85 ? 'burnt' : 'golden'; phase = 'water'; talk('water'); $('.dmp-step').textContent = 'Water and lid'; $('.dmp-tip').textContent = 'Hold to pour. Let go at the line: the lid goes on.'; K.hiss(); puff(160, 120, 'steam', 6); }
          if (phase === 'water' && !holding) { holding = true; K.pourOn(900); }
        };
        const stopWater = () => {
          if (phase !== 'water' || !holding) return; holding = false; K.pourOff();
          R.steps.water = Math.round(clamp(100 - Math.abs(water - 67) * 3, 0, 100)); phase = 'lid'; K.lid(); K.sizzleOff(); K.steam(); btn(null); draw();
          say([['s', 'surprised', 'Is it supposed to be that loud?'], ['h', 'neutral', 'Yes. Don\'t lift it.'], ['s', 'neutral', "I wasn't going to."], ['h', 'neutral', 'You were.']]);
          setTimeout(() => { phase = 'steam'; puff(160, 90, 'steam', 10); K.bell(); draw(); const v = (R.steps.brown + R.steps.water) / 2; delete R.steps.brown; delete R.steps.water; score('pan', v); next(plate, 1900); }, 3000);
        };
        R.onDrag = (p, ph) => {
          if (phase !== 'place') return;
          if (ph === 'down') drag = slots.findIndex(s => !s.in && Math.hypot(p.x - s.x, p.y - s.y) < 26);
          if (ph === 'move' && drag != null && drag >= 0) { slots[drag].x = p.x; slots[drag].y = p.y; draw(); }
          if (ph === 'up' && drag != null && drag >= 0) { const s = slots[drag]; if (Math.hypot((p.x - 160) / 102, (p.y - 132) / 49) < 1) drop(drag); else { Object.assign(s, home(drag)); draw(); } drag = null; }
        };
        R.onKey = (k, up) => { if (k !== ' ') return; if (phase === 'place' && !up) drop(slots.findIndex(s => !s.in)); else if (phase === 'brown' && !up) startWater(); else if (phase === 'water') up ? stopWater() : startWater(); };
        R.onTap = null;
        loopFn = dt => {
          if (phase === 'brown') { cook = Math.min(1, cook + dt / 9); K.sizzleTone(cook); if ((bubbleAt -= dt) <= 0) { bubbleAt = 0.08 + Math.random() * 0.2; K.crackle(); puff(110 + Math.random() * 110, 120 + Math.random() * 20, 'oil', 1); } if (cook >= 1) startWater(); draw(); }
          if (phase === 'water' && holding) { water = Math.min(100, water + dt * 34); if (Math.random() < dt * 10) puff(110 + Math.random() * 110, 110, 'steam', 1); draw(); }
        };
        draw();
      }

      /* ── 11. plate it: plate, sauce, garnish, then drizzle and sprinkle ── */
      function plate() {
        R.step = 'plate'; prog('plate'); talk('plate'); $('.dmp-step').textContent = 'Plate it'; btn(null); meter(null);
        const lines = [], seeds = []; let cur = null;
        const P = () => PLATES[R.plate], S = () => SAUCES[R.sauce], Gn = () => GARNISH[R.garnish];
        const draw = () => {
          G.innerHTML = `${shadow(150, 172, 120, 12)}<ellipse cx="150" cy="128" rx="120" ry="58" fill="${P().body}" stroke="${P().rim}" stroke-width="4"/><ellipse cx="150" cy="128" rx="100" ry="46" fill="none" stroke="${P().in}" stroke-width="2"/>
            <ellipse cx="236" cy="96" rx="20" ry="10" fill="#fff" stroke="${P().rim}" stroke-width="2"/><ellipse cx="236" cy="95" rx="15" ry="7" fill="${S().col}"/>
            ${R.made.map((d, j) => dumpling({ cx: 96 + j * 50, cy: 142 - (j % 2) * 8, w: 32, h: 15, pleats: d.pleats, brown: R.cook === 'golden' ? '#c9893e' : R.cook === 'burnt' ? '#3a2416' : '#efdcbc', q: d.quality === 'poor' ? 'poor' : null })).join('')}
            ${lines.map(l => `<polyline points="${l.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')}" fill="none" stroke="${S().col}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" opacity=".88"/>`).join('')}
            ${seeds.map(s => `<ellipse cx="${s.x}" cy="${s.y}" rx="2.2" ry="1.4" fill="${s.c}" stroke="${s.e}" stroke-width=".6" transform="rotate(${s.r} ${s.x} ${s.y})"/>`).join('')}`;
          if (R.step === 'decorate') meter({ zone: [35, 75], gold: [45, 65], fill: clamp(lines.reduce((n, l) => n + l.length, 0) / 1.2, 0, 100) });
        };
        draw();
        choose('The plate', PLATES, id => { R.plate = id; draw(); if (id === 'gold') say([['h', 'surprised', "Your mother's good tray?"], ['s', 'happy', "She said next year. It's practically next year."]]);
          choose('The dipping sauce', SAUCES, sid => { R.sauce = sid; draw(); say([SAUCES[sid].say]);
            choose('The garnish', GARNISH, gid => { R.garnish = gid; decorate(); }); }); });
        const decorate = () => {
          R.step = 'decorate'; $('.dmp-tip').textContent = `Drag across the plate to drizzle the ${S().name.toLowerCase()}, tap to sprinkle ${Gn().name.toLowerCase()}. Serve when it looks right.`;
          btn('Serve', { onclick: serve }); draw();
        };
        const sprinkle = (x, y, n) => { const g = Gn(); for (let i = 0; i < n; i++) seeds.push({ x: x + (Math.random() - 0.5) * 22, y: y + (Math.random() - 0.5) * 12, r: Math.random() * 180, c: g.col, e: g.edge }); K.shake(); };
        const serve = () => {
          if (R.step !== 'decorate') return; R.step = 'wait'; btn(null);
          const ink = lines.reduce((n, l) => n + l.length, 0) / 1.2, sp = seeds.length;
          const v = 100 - Math.abs(ink - 55) * 1.4 - (sp < 6 ? 25 : sp > 60 ? 20 : 0); score('plate', v); setTimeout(finish, 2600);
        };
        R.onDrag = (p, ph) => { if (R.step !== 'decorate') return; if (ph === 'down') { cur = [p]; lines.push(cur); K.drip(); } else if (ph === 'move' && cur) { const l = cur[cur.length - 1]; if (Math.hypot(p.x - l.x, p.y - l.y) > 3) cur.push(p); draw(); } else if (ph === 'up') { if (cur && cur.length < 3) { lines.pop(); sprinkle(p.x, p.y, 5); } cur = null; draw(); } };
        R.onKey = (k, up) => { if (up || R.step !== 'decorate') return; if (k === 's' || k === 'S') { sprinkle(80 + Math.random() * 140, 110 + Math.random() * 40, 6); draw(); } if (k === 'Enter') serve(); };
        R.onTap = null; loopFn = null;
      }

      /* ── the end ── */
      const finish = (quit = false) => {
        if (R.over) return; R.over = true; K.sizzleOff(); K.pourOff();
        const vals = Object.values(R.steps), sc = vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : 0;
        const q = k => R.made.filter(d => d.quality === k).length;
        const grade = quit ? 'C' : sc >= 88 ? 'S' : sc >= 74 ? 'A' : sc >= 55 ? 'B' : 'C';
        const res = { steps: R.steps, score: Math.round(sc), perfect: q('great'), okay: q('fine'), bags: q('poor'), cook: R.cook || 'pale', filling: R.filling, sauce: R.sauce, garnish: R.garnish, plate: R.plate, grade, quit };
        say(TALK.end[grade]);
        const end = $('.mg-end'); end.hidden = false;
        end.innerHTML = `<b class="mg-grade">${grade}</b><dl><dt>Score</dt><dd>${res.score}</dd><dt>Filling</dt><dd>${esc(FILLINGS[res.filling].name)}</dd><dt>Perfect dumplings</dt><dd>${res.perfect} / ${N}</dd><dt>Bottoms</dt><dd>${res.cook}</dd><dt>Sauce</dt><dd>${esc(SAUCES[res.sauce].name)}</dd></dl><p class="mg-end-say">Haechan: ${esc(TALK.end[grade][0][2])}</p><button type="button">Continue</button>`;
        end.querySelector('button').focus();
        end.querySelector('button').onclick = () => { cleanup(); o.onDone?.(res); done(res); };
      };

      /* ── loop and input ── */
      let last = performance.now(), raf = 0;
      const tick = now => { const dt = Math.min(60, now - last) / 1000; last = now; if (!R.paused && !R.over && loopFn) loopFn(dt); raf = requestAnimationFrame(tick); };
      let down = false;
      svgEl.addEventListener('pointerdown', e => { e.preventDefault(); if (R.paused) return; down = true; svgEl.setPointerCapture?.(e.pointerId); const p = pt(e); R.onDrag?.(p, 'down'); R.onTap?.(p); });
      svgEl.addEventListener('pointermove', e => { if (!down || R.paused) return; R.onDrag?.(pt(e), 'move'); });
      const up = e => { if (!down) return; down = false; R.onDrag?.(pt(e), 'up'); const f = R.onTapUp; R.onTapUp = null; f?.(); };
      svgEl.addEventListener('pointerup', up); svgEl.addEventListener('pointercancel', up);
      const key = e => {
        if (R.over) return; e.stopPropagation();
        if (e.key === 'Escape') { e.preventDefault(); R.paused = !R.paused; $('.mg-pause').hidden = !R.paused; return; }
        if (R.paused) return;
        if ([' ', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) e.preventDefault();
        if (e.repeat) return;
        R.onKey?.(e.key, false);
      };
      const keyUp = e => { if (R.over || R.paused) return; R.onKey?.(e.key, true); };
      const cleanup = () => { cancelAnimationFrame(raf); clearTimeout(talkT); window.removeEventListener('keydown', key, true); window.removeEventListener('keyup', keyUp, true); K.close(); el.remove(); };
      $('.mg-pause').onclick = e => { const b = e.target.dataset.mg; if (b === 'resume') { R.paused = false; $('.mg-pause').hidden = true; } if (b === 'quit') { R.paused = false; $('.mg-pause').hidden = true; finish(true); } };
      window.addEventListener('keydown', key, true); window.addEventListener('keyup', keyUp, true);
      raf = requestAnimationFrame(tick);
      pickFilling();
    });
  }
  return { play, FILLINGS, SAUCES, GARNISH, PLATES };
})();
