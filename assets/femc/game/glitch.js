/* Persona 3: Solstice: the epilogue's glitch system (FEMC-EPILOGUE-PLAN.md 2.3; epilogue batch 2, 2026-10-27).
   The Personaverse coming through at home. Only ever inside the epilogue: every entry point checks active() (S.epi is set
   and core.js reads that world), so a year save, the title screen, the Theater and the battle never see a glitch.

   STAGES (S.glitch.stage, 0-4). A date sets the floor (the world's glitch.floors: { 'M/D': n }, the latest date on or before
   today wins), and any trigger pushes it one higher for now:
     midnight   the Late Night slot             moon      the world's full moon (calendar fullMoons)
     thin       a thin place: the place shown (a scene's place plate or the screen's) contains one of glitch.thin
     constant   one of glitch.constant spoke in a scene today (scene.js → heard)
     strain     a scene's { glitch: { strain: 1 } } today (she held a lie together)
   A story day calls for a stage directly with { glitch: { stage: n } } (exactly n for the rest of that day, no bump).
   S.glitch = { v, seed, stage, peak, seen: [ids], done: { 'day-slot-where': id | '-' }, set: { day, stage }, near, strainDay, n }.
   The seed comes from the playthrough's runId and the world, so a reload (or a slot / code) rolls the same glitches.

   THE KINDS (KINDS; FX below; each cleans up after itself, and clear() ends everything at once):
     tint     the backdrop washes Dark Hour green (game.css .gs-bg.darkhour's filter) for a beat
     weather  snow falls upward / rain hangs in the air: weather.js glitch('rise' | 'hold'); clear days get a little of it
     clock    the HUD's slot (or a scene's place plate) reads 12:00 AM; the HUD moon goes green
     date     the date card (or a small plate) flickers to an Iwatodai date (md, default 4/6) in the summon card's glitch letters
     phone    a banner from a dead thread: no face, a typing bubble or msg, "Read 12:00 AM" (name, msg, read, time)
     map      Go Out gains one greyed card, Iwatodai Station; at stage 4 (or open: true) it opens (lines: its scene, or a short
              default; a schedule entry's `scene` is the scene-hook gate below, so the station's own lines are `lines`)
     face     one frame of a portrait swaps to someone from S.E.E.S. (who, f); on a screen, a ghost of one at the edge
     sound    sound: 'p3' (two seconds of a P3 track under the home music; track) | 'piano' (a Velvet Room note) | 'static'
     tear     cracks and glass across the screen (the Dark Hour transition's cracks), then gone
     name     Haenim's name glitching on a card (names, label)
     hands    a choice she didn't write: the next choice list gets "(Evoke.)" (t). Not pickable: it flickers and is gone.
              pickable: true (the "then once she does"): picking it plays its `then` lines. Armed until a choice that day.
     Any spec may carry ms (its length at Full).

   WHERE THEY COME FROM (the world batches' hooks; all of this lives in data/epi/<world>/glitches.js, loaded with the world):
     glitch:   { floors: { 'M/D': stage }, thin: [place text], constant: [speaker ids], chance: [per stage 0-4],
                 ambient: { 1: [specs], 2: [...], 3: [...], 4: [...] } }   (a stage with no pool uses the one below it)
     glitches: [ { id, kind, ...spec, gates } ]  the schedule, played once each (once: false to repeat):
       by day     day: 'M/D' | days: [..] | from / to, slot (id or ids), at (where: 'card' | 'morning' | 'out' | 'late';
                  default: date → card, map → out, the rest → morning / out / late), moon, weather [kinds], place (text in
                  the screen's place), route (epilogue route id or ids), flag / noFlag, ifYear (epilogue.js cond)
       by stage   stage: n plays only once the stage is at least n (with no day gate: the first screen that reaches it)
       by scene   scene: '<event or routine id>', line: n inserts { glitch: id } before line n of that scene (inject)
       inline     inline: true never plays on a screen; only a scene's { glitch: '<id>' } plays it (Runners batch 3)
     Each screen asks once per day and slot (tick): the first scheduled entry that fits, else an ambient roll for the stage
     (chance × ½ on Gentle) picked by the seed.
   In scenes (any epilogue scene; scene.js):
     { glitch: 'tint' }  { glitch: { kind: 'sound', sound: 'piano', stage: 2 } } (stage: plays only at that stage or higher)
     { glitch: '<schedule id>' }  plays that entry (its spec; marks it seen)
     { glitch: { stage: 3 } } / { glitch: { strain: 1 } } / { glitch: { near: true } }   state only, nothing shows
     { ifGlitch: n, then, else }  the stage now is at least n (core.js branch → epilogue.js cond); never true in the year.
     A glitch line waits for its effect (at most 1.6 s; wait: false, on the line or the spec, goes straight on; so does Skip).

   SETTINGS: Glitch effects (core.js DEFAULTS glitchFx): Full | Gentle (shorter, softer, half the ambient rolls, no glass
   shards, quieter) | Off (nothing shows or sounds; a pickable hands choice still appears, plainly, since it's the story's).
   Reduce flashes (calm): nothing cuts in hard; flickers become fades and a face swap fades at half strength. Reduced motion:
   still frames only (no flicker, no drawn cracks, the name card holds its glitched spelling, weather as one still frame).
   Light on the Mac: CSS classes and a few short-lived elements, no loops of its own; weather reuses weather.js's canvas.
   Tests: FemcGlitch.state(), roll(where), play(spec), clear(). */
window.FemcGlitch = (() => {
  const G = window.FemcGame, W = window;
  if (!G) return null;
  const KINDS = ['tint', 'weather', 'clock', 'date', 'phone', 'map', 'face', 'sound', 'tear', 'name', 'hands'];
  const DUR = { tint: 1100, weather: 3600, clock: 1500, date: 1300, phone: 4200, map: 0, face: 140, sound: 2000, tear: 1100, name: 1600, hands: 2400 };
  const SCREENS = ['morning', 'out', 'late'], AT = { date: ['card'], map: ['out'] };
  const CHANCE = [0, 0.12, 0.2, 0.3, 0.4];
  const SEES = ['akihiko', 'yukari', 'junpei', 'mitsuru', 'fuuka', 'aigis', 'ken', 'koromaru'];
  const TRACKS = ['iwatodai-dorm', 'memories-of-you', 'deep-mentality'];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const S = () => G.S;
  const active = () => { const s = S(); return !!(s && s.epi && s.phase === 'play' && G.world() && G.world() === s.epi.world); };
  const mode = () => { const m = G.settings().glitchFx; return m === 'gentle' || m === 'off' ? m : 'full'; };
  const still = () => reduced.matches;
  const calm = () => !!G.settings().calm;
  const cls = () => `m-${mode()}${calm() ? ' calm' : ''}${still() ? ' still' : ''}`;
  const raw = () => W.FemcEpilogue?.raw?.() || {};
  const cfg = () => raw().glitch || {};
  function hash(str) { let h = 2166136261; for (const c of String(str)) { h ^= c.codePointAt(0); h = Math.imul(h, 16777619) >>> 0; } return h >>> 0; }
  function st() {
    const s = S(), g = s.glitch ||= { v: 1, stage: 0, peak: 0, seen: [], done: {}, n: 0 };
    if (!Array.isArray(g.seen)) g.seen = [];
    if (!g.done || typeof g.done !== 'object') g.done = {};
    if (g.seed == null) g.seed = hash(`${s.runId || 'solstice'}|${s.epi?.world || ''}`);
    return g;
  }
  const rnd = (...k) => hash(`${st().seed}|${k.join('|')}`) / 4294967296;
  const sceneEl = () => [...document.querySelectorAll('.gs:not(.out)')].pop() || null;
  let lastPlace = '';
  const placeNow = () => sceneEl()?.querySelector('.gs-place span')?.textContent || lastPlace || '';

  /* ── The stage ── */
  function floorOf(d) {
    let f = 0, at = -1;
    Object.entries(cfg().floors || {}).forEach(([md, n]) => { const x = G.dayOf(md); if (x <= d && x >= at) { at = x; f = n; } });
    return f;
  }
  function triggers(ctx = {}) {
    const s = S(), g = st(), out = [];
    if (s.slot === 'late') out.push('midnight');
    if (G.dayInfo().moon?.full) out.push('moon');
    const place = ctx.place || placeNow();
    if (place && (cfg().thin || []).some(t => place.includes(t))) out.push('thin');
    if (g.near === s.day) out.push('constant');
    if (g.strainDay === s.day) out.push('strain');
    return out;
  }
  function stageNow(ctx) {
    if (!active()) return 0;
    const s = S(), g = st();
    const n = g.set && g.set.day === s.day ? g.set.stage : Math.min(4, floorOf(s.day) + (triggers(ctx).length ? 1 : 0));
    g.stage = n; g.peak = Math.max(g.peak || 0, n);
    return n;
  }

  /* ── The schedule ── */
  const whereOk = (e, where) => (e.at ? [].concat(e.at) : AT[e.kind] || SCREENS).includes(where);
  function fits(e, where, stage, ctx) {
    const s = S(), d = s.day, i = G.dayInfo();
    if (typeof e.scene === 'string' || e.inline || !KINDS.includes(e.kind) || !whereOk(e, where)) return false; // inline: only a scene's { glitch: id }
    if (e.once !== false && st().seen.includes(e.id)) return false;
    if ((e.stage || 0) > stage) return false;
    if (e.day && d !== G.dayOf(e.day)) return false;
    if (e.days && !e.days.some(md => G.dayOf(md) === d)) return false;
    if (e.from && d < G.dayOf(e.from)) return false;
    if (e.to && d > G.dayOf(e.to)) return false;
    if (e.slot && ![].concat(e.slot).includes(s.slot)) return false;
    if (e.moon && !i.moon?.full) return false;
    if (e.weather && !G.wxIn([].concat(e.weather), i.weather)) return false;
    if (e.place && !(ctx.place || placeNow()).includes(e.place)) return false;
    if (e.route && ![].concat(e.route).includes(W.FemcEpilogue?.route())) return false;
    if (e.flag && ![].concat(e.flag).every(k => s.flags[k])) return false;
    if (e.noFlag && [].concat(e.noFlag).some(k => s.flags[k])) return false;
    if (e.ifYear && !W.FemcEpilogue?.cond({ ifYear: e.ifYear })) return false;
    return true;
  }
  function ambientPool(stage) {
    const A = cfg().ambient || {};
    for (let k = stage; k >= 1; k--) if ((A[k] || []).length) return A[k];
    return [];
  }
  // Which glitch this screen gets (no side effects beyond the stage): the schedule first, then an ambient roll.
  function roll(where, ctx = {}) {
    if (!active()) return null;
    const s = S(), stage = stageNow(ctx);
    const e = (raw().glitches || []).find(x => fits(x, where, stage, ctx));
    if (e) return { ...e, src: 'schedule' };
    if (stage < 1) return null;
    const ch = ((cfg().chance || CHANCE)[stage] ?? 0) * (mode() === 'gentle' ? 0.5 : 1);
    if (rnd(s.day, s.slot, where, 'roll') >= ch) return null;
    const pool = ambientPool(stage).filter(x => KINDS.includes(x.kind) && whereOk(x, where));
    if (!pool.length) return null;
    const a = pool[Math.floor(rnd(s.day, s.slot, where, 'pick') * pool.length)];
    return { ...a, id: a.id || `amb-${a.kind}`, src: 'ambient' };
  }
  const findSpec = id => (raw().glitches || []).find(e => e.id === id) || Object.values(cfg().ambient || {}).flat().find(a => (a.id || `amb-${a.kind}`) === id) || null;
  // A screen asks for its glitch (epilogue.js: 'card' after the date card, 'morning', 'out' with ctx.list, 'late').
  function tick(where, ctx = {}) {
    if (!active()) return null;
    if (ctx.place) lastPlace = ctx.place;
    const s = S(), g = st(), key = `${s.day}-${s.slot}-${where}`;
    if (key in g.done) { // asked already this slot: only a map card comes back when the screen is drawn again
      const e = g.done[key] !== '-' && findSpec(g.done[key]);
      return e && e.kind === 'map' ? (play(e, { ...ctx, where, again: true }), e) : null;
    }
    const e = roll(where, ctx);
    Object.keys(g.done).forEach(k => { if (+k.split('-')[0] < s.day - 1) delete g.done[k]; });
    g.done[key] = e ? e.id : '-';
    if (e && e.src === 'schedule' && e.once !== false && !g.seen.includes(e.id)) g.seen.push(e.id);
    G.saveQuiet();
    if (e) play(e, { ...ctx, where });
    return e;
  }
  // Scheduled scene glitches: { glitch: id } before line n of that scene (epilogue.js, for events and routines).
  function inject(id, lines) {
    if (!active() || !Array.isArray(lines)) return lines;
    const add = (raw().glitches || []).filter(e => e.scene === id && KINDS.includes(e.kind) && !(e.once !== false && st().seen.includes(e.id)));
    if (!add.length) return lines;
    const out = [...lines];
    add.sort((a, b) => (b.line || 0) - (a.line || 0)).forEach(e => out.splice(Math.min(e.line || 0, out.length), 0, { glitch: e.id }));
    return out;
  }

  /* ── Playing one ── */
  const live = new Map();
  let uid = 0, armed = null;
  const log = [];
  function hold(undo, ms) { const id = ++uid; live.set(id, { undo, t: setTimeout(() => end(id), ms) }); return id; }
  function end(id) { const x = live.get(id); if (!x) return; clearTimeout(x.t); live.delete(id); try { x.undo(); } catch (e) {} }
  function clear() { [...live.keys()].forEach(end); armed = null; document.querySelectorAll('.g-glx-station').forEach(x => x.remove()); }
  function play(spec, ctx = {}) {
    if (!active() || !spec || !KINDS.includes(spec.kind)) return 0;
    const m = mode();
    if (!ctx.again) { log.push({ kind: spec.kind, id: spec.id || null, mode: m, still: still(), calm: calm(), at: ctx.where || null, day: S().day, slot: S().slot, stage: st().stage }); if (log.length > 60) log.shift(); st().n = (st().n || 0) + 1; }
    if (spec.kind === 'hands') { armed = { t: spec.t || '(Evoke.)', pickable: !!spec.pickable, then: spec.then || [], id: spec.id || null, day: S().day }; return 0; }
    if (m === 'off') return 0;
    const dur = Math.round((spec.ms || DUR[spec.kind]) * (m === 'gentle' ? 0.6 : 1));
    return FX[spec.kind](spec, dur, ctx) === false ? 0 : dur;
  }
  function el(kind, html, tag = 'div') {
    const x = document.createElement(tag);
    x.className = `g-glx g-glx-${kind} ${cls()}`;
    x.setAttribute('aria-hidden', 'true');
    if (html) x.innerHTML = html;
    return x;
  }
  const CRACKS = 'M50 48 L8 6 M50 48 L92 10 M50 48 L97 60 M50 48 L70 98 M50 48 L22 96 M50 48 L2 58 M50 48 L60 2 M30 27 L41 22 M74 30 L68 22 M74 55 L80 46 M38 72 L30 66 M18 52 L22 44';
  const FX = {
    tint(spec, dur) {
      const sc = sceneEl(), bg = sc ? sc.querySelector('.gs-bg') : document.querySelector('.g-stage .g-bg');
      if (!bg) return false;
      const wash = el('tint');
      wash.style.setProperty('--d', `${dur}ms`);
      bg.after(wash);
      bg.classList.add('g-glx-dh');
      if (mode() === 'gentle') bg.classList.add('soft');
      hold(() => { bg.classList.remove('g-glx-dh', 'soft'); wash.remove(); }, dur);
    },
    weather(spec, dur) {
      const F = W.FemcWeather;
      if (!F?.glitch || !F.glitch(spec.mode === 'hold' ? 'hold' : 'rise')) { F?.glitch?.(null); return false; }
      hold(() => F.glitch(null), dur);
    },
    clock(spec, dur) {
      const sc = sceneEl(), hud = document.querySelector('.g-hud:not([hidden])');
      const t = sc ? sc.querySelector('.gs-place span') : hud?.querySelector('.g-slot');
      if (!t) return false;
      const old = t.textContent, moon = !sc && hud.querySelector('.g-moon');
      t.textContent = spec.time || '12:00 AM'; t.classList.add('g-glx-clock');
      if (moon) moon.classList.add('g-glx-moon');
      hold(() => { if (t.classList.contains('g-glx-clock')) { t.textContent = old; t.classList.remove('g-glx-clock'); } if (moon) moon.classList.remove('g-glx-moon'); }, dur);
    },
    date(spec, dur) {
      const md = spec.md || '4/6', [m, d] = md.split('/').map(Number), y = m <= 3 ? 2010 : 2009, dt = new Date(y, m - 1, d);
      const wd = dt.toLocaleString('en', { weekday: 'short' }), month = `${dt.toLocaleString('en', { month: 'long' }).toUpperCase()} ${y}`;
      const card = document.querySelector('.g-datecard:not(.out)');
      const day = card?.querySelector('.g-dc-days span:last-child'), mon = card?.querySelector('.g-dc-month');
      if (day) { // on the date card itself, once it has landed
        const was = [day.innerHTML, mon?.textContent];
        let t = setTimeout(() => { t = null; day.innerHTML = `${esc(md)}<small>${esc(wd)}</small>`; day.classList.add('g-glx-letters'); if (mon) mon.textContent = month; }, still() ? 0 : 650);
        hold(() => { if (t) clearTimeout(t); else { day.innerHTML = was[0]; day.classList.remove('g-glx-letters'); if (mon) mon.textContent = was[1]; } }, dur + (still() ? 0 : 650));
        return;
      }
      const x = el('date', `<small>${esc(month)}</small><b class="g-glx-letters">${esc(md)}</b><span>${esc(wd)}</span>`);
      x.style.setProperty('--d', `${dur}ms`);
      document.body.appendChild(x);
      hold(() => x.remove(), dur);
    },
    phone(spec, dur) {
      const box = document.querySelector('.g-banners');
      if (!box) return false;
      const x = el('phone', `<i class="g-bn-pic g-glx-noface"></i><span class="g-bn-body"><span class="g-bn-top"><b>${esc(spec.name || 'S.E.E.S.')}</b><small>${esc(spec.time || '12:00 AM')}</small></span>
        <span class="g-bn-msg">${spec.msg ? esc(spec.msg) : '<span class="g-glx-dots"><i></i><i></i><i></i></span>'}</span><span class="g-glx-read">${esc(spec.read || 'Read 12:00 AM')}</span></span>`);
      x.classList.add('g-banner');
      box.prepend(x);
      if (!calm() || mode() === 'full') W.FemcGameUI?.phoneSfx?.('notify');
      hold(() => x.remove(), dur);
    },
    map(spec, dur, ctx) {
      const list = ctx.list || document.querySelector('.g-epi-acts:not(.g-epi-folks)');
      if (!list || list.querySelector('.g-glx-station')) return false;
      const open = !!spec.open || stageNow() >= 4;
      const b = el('station', `<b>${esc(spec.name || 'Iwatodai Station')}</b><small>${open ? esc(spec.note || 'The doors are open.') : '—'}</small>`, 'button');
      b.type = 'button'; b.classList.add('g-epi-act'); b.removeAttribute('aria-hidden');
      b.style.backgroundImage = `linear-gradient(rgba(6, 22, 14, .72), rgba(6, 22, 14, .72)), url("${G.base}assets/femc/bg/${spec.bg || 'iwatodai-station'}.webp")`;
      b.disabled = !open;
      if (open) b.addEventListener('click', () => {
        const at = `${S().day}-${S().slot}-out`;
        st().done[at] = '-'; G.saveQuiet();
        W.FemcScene.play({ scene: [{ bg: spec.bg || 'iwatodai-station' }, { glitch: 'tear' }, ...(spec.lines || (Array.isArray(spec.scene) ? spec.scene : null) || [{ n: 'The doors opened on a platform that wasn’t there. Then they closed, and it was gone.' }])],
          label: spec.name || 'Iwatodai Station', onDone: () => W.FemcGameUI.run() });
      });
      list.appendChild(b);
    },
    face(spec, dur) {
      const who = spec.who || SEES[Math.floor(rnd(S().day, S().slot, 'face') * SEES.length)];
      const src = G.portrait(who, spec.f || 'neutral');
      if (!src) return false;
      const soft = calm() || still(), ms = soft ? Math.max(dur, 520) : dur;
      const sc = sceneEl(), img = sc?.querySelector('.gs-portrait');
      const pre = new Image(); pre.src = src;
      const go = fn => (pre.decode ? pre.decode().then(fn, fn) : fn());
      if (img && !img.hidden) {
        const old = img.getAttribute('src');
        let on = false;
        const id = hold(() => { if (on && img.getAttribute('src') === src) img.setAttribute('src', old); img.classList.remove('g-glx-face', 'soft'); }, ms + 400);
        go(() => { if (!live.has(id)) return; on = true; img.setAttribute('src', src); img.classList.add('g-glx-face'); if (soft) img.classList.add('soft'); setTimeout(() => end(id), ms); });
        return;
      }
      const host = sc || document.querySelector('.g-stage');
      if (!host) return false;
      const gh = el('ghost', '', 'img');
      gh.alt = ''; gh.hidden = true;
      host.appendChild(gh);
      const id = hold(() => gh.remove(), ms + 400);
      go(() => { if (!live.has(id)) return; gh.src = src; gh.hidden = false; setTimeout(() => end(id), ms); });
    },
    sound(spec, dur) {
      const set = G.settings(), soft = mode() === 'gentle' ? 0.5 : 1;
      const which = spec.sound || 'p3';
      if (which === 'p3') {
        const v = Math.max(0, Math.min(100, set.music ?? 60)) / 100 * 0.5 * 0.45 * soft;
        if (!v) return false; // music off: nothing to hear
        const f = spec.track || TRACKS[Math.floor(rnd(S().day, S().slot, 'track') * TRACKS.length)];
        const a = new Audio(`${G.base}assets/femc/music/${f}.mp3`);
        a.volume = 0; a.preload = 'auto';
        let iv = null;
        const fadeTo = (to, ms, done) => { clearInterval(iv); const step = (to - a.volume) / Math.max(1, ms / 50); iv = setInterval(() => { const n = a.volume + step; if ((step >= 0 && n >= to) || (step < 0 && n <= to)) { a.volume = Math.max(0, Math.min(1, to)); clearInterval(iv); done?.(); } else a.volume = Math.max(0, Math.min(1, n)); }, 50); };
        a.addEventListener('loadedmetadata', () => { try { if (isFinite(a.duration) && a.duration > 40) a.currentTime = 15 + rnd(S().day, 'seek') * (a.duration - 30); } catch (e) {} }, { once: true });
        a.play().then(() => fadeTo(v, 300), () => {});
        hold(() => { clearInterval(iv); a.pause(); a.removeAttribute('src'); try { a.load(); } catch (e) {} }, dur);
        setTimeout(() => fadeTo(0, 350), Math.max(0, dur - 400));
        return;
      }
      if (!set.sfx || localStorage.getItem('kg-femc-sound') === 'off' || (navigator.userActivation && !navigator.userActivation.hasBeenActive)) return false;
      try {
        const C = W.AudioContext || W.webkitAudioContext; if (!C) return false;
        const c = FX.ctx || (FX.ctx = new C()); if (c.state === 'suspended') c.resume().catch(() => {});
        const out = c.createGain(), t = c.currentTime;
        out.gain.value = Math.max(0, Math.min(1, (set.sfxVol ?? 100) / 100)) * 0.3 * soft; out.connect(c.destination);
        if (which === 'piano') { // one low Velvet Room note: a few partials, a long decay
          [[196, 0.5], [392, 0.22], [588, 0.1], [784, 0.05]].forEach(([fq, g0]) => {
            const o = c.createOscillator(), g = c.createGain(); o.type = 'sine'; o.frequency.value = fq;
            g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(g0, t + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t + dur / 1000);
            o.connect(g).connect(out); o.start(t); o.stop(t + dur / 1000 + 0.05);
          });
        } else { // static: band-passed noise that breaks up
          const n = Math.floor(c.sampleRate * dur / 1000), b = c.createBuffer(1, n, c.sampleRate), ch = b.getChannelData(0);
          for (let i = 0; i < n; i++) ch[i] = (Math.random() * 2 - 1) * (Math.sin(i / 900) > -0.2 ? 0.6 : 0.1);
          const s = c.createBufferSource(), fl = c.createBiquadFilter(), g = c.createGain();
          s.buffer = b; fl.type = 'bandpass'; fl.frequency.value = 2400; fl.Q.value = 0.7;
          g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.5, t + 0.05); g.gain.exponentialRampToValueAtTime(0.0001, t + dur / 1000);
          s.connect(fl).connect(g).connect(out); s.start(t); s.stop(t + dur / 1000 + 0.05);
        }
        hold(() => { try { out.disconnect(); } catch (e) {} }, dur + 100);
      } catch (e) {}
    },
    tear(spec, dur) {
      const k = Math.floor(rnd(S().day, S().slot, 'tear') * 4), shards = mode() === 'gentle' || still() || G.settings().perf ? 0 : 6;
      const glass = Array.from({ length: shards }, (_, i) => {
        const a0 = (i / shards) * 6.283, a1 = ((i + 1) / shards) * 6.283, p = [[50, 48], [50 + Math.cos(a0) * 150, 50 + Math.sin(a0) * 150], [50 + Math.cos(a1) * 150, 50 + Math.sin(a1) * 150]];
        return `<i style="clip-path:polygon(${p.map(([x, y]) => `${x.toFixed(1)}% ${y.toFixed(1)}%`).join(',')});--x:${(Math.cos((a0 + a1) / 2) * 18).toFixed(1)}vw;--y:${(Math.sin((a0 + a1) / 2) * 18).toFixed(1)}vh"></i>`;
      }).join('');
      const x = el('tear', `<svg viewBox="0 0 100 100" preserveAspectRatio="none" style="transform:${['none', 'scaleX(-1)', 'scaleY(-1)', 'scale(-1)'][k]}"><path d="${CRACKS}"/></svg>${glass ? `<div class="g-glx-glass">${glass}</div>` : ''}`);
      x.style.setProperty('--d', `${dur}ms`);
      document.body.appendChild(x);
      hold(() => x.remove(), dur);
    },
    name(spec, dur) {
      const names = spec.names || ['H̷A̵E̶N̸I̷M̵', '해░▒NIM', 'HAE▓█M', '해—', 'HAENIM'];
      const x = el('name', `<small>${esc(spec.label || 'Persona')}</small><b></b>`), b = x.querySelector('b');
      b.textContent = names[0];
      x.style.setProperty('--d', `${dur}ms`);
      document.body.appendChild(x);
      let k = 0;
      const iv = still() ? null : setInterval(() => { k = (k + 1) % names.length; b.textContent = names[k]; }, Math.max(90, Math.round(dur / (names.length + 1))));
      hold(() => { clearInterval(iv); x.remove(); }, dur);
    },
    hands() {}
  };
  // scene.js ask(): add the armed choice to a choice list. pick(lines) plays a pickable one's lines.
  function hands(box, replay, pick) {
    if (replay || !armed || !active()) return false;
    const h = armed; armed = null;
    if (h.day !== S().day || (mode() === 'off' && !h.pickable)) return false;
    const b = document.createElement('button');
    b.type = 'button';
    b.className = `gs-hand g-glx-hand ${cls()}${h.pickable ? ' pick' : ''}`;
    b.innerHTML = '<span></span>';
    b.querySelector('span').textContent = h.t;
    if (h.pickable) b.addEventListener('click', e => { e.stopPropagation(); if (h.id && !st().seen.includes(h.id)) st().seen.push(h.id); pick(h.then); });
    else {
      b.setAttribute('aria-disabled', 'true'); b.tabIndex = -1;
      b.addEventListener('click', e => e.stopPropagation());
      const id = hold(() => b.remove(), Math.round(DUR.hands * (mode() === 'gentle' ? 0.6 : 1)));
      box.addEventListener('click', e => { if (e.target.closest('button') !== b) end(id); }, { capture: true }); // a real choice ends it
    }
    box.appendChild(b);
    return true;
  }
  // scene.js: a { glitch } line. next() carries on (after the effect, at most 1.6 s).
  function line(l, sceneNode, next, skipping) {
    if (!active()) return next();
    const v = l.glitch, g = st(), s = S();
    if (v && typeof v === 'object' && !v.kind && !v.id) {
      if (v.stage != null) g.set = { day: s.day, stage: Math.max(0, Math.min(4, +v.stage || 0)) };
      if (v.strain) g.strainDay = s.day;
      if (v.near) g.near = s.day;
      stageNow(); G.saveQuiet();
      return next();
    }
    const base = typeof v === 'string' ? (KINDS.includes(v) ? { kind: v } : findSpec(v)) : v?.id ? { ...(findSpec(v.id) || {}), ...v } : v;
    if (!base || !KINDS.includes(base.kind)) return next();
    if (base.stage != null && stageNow() < base.stage) return next();
    if (base.route && ![].concat(base.route).includes(W.FemcEpilogue?.route())) return next();
    if (base.id && base.once !== false && !g.seen.includes(base.id)) { g.seen.push(base.id); G.saveQuiet(); }
    const dur = play(base, { where: 'scene' });
    if (!dur || skipping || base.wait === false || l.wait === false) return next();
    setTimeout(next, Math.min(dur, 1600));
  }
  // scene.js: a spoken line. Her constant talking to her today pushes the stage one higher.
  function heard(id) {
    if (!id || !active() || !(cfg().constant || []).includes(id)) return;
    const g = st(); if (g.near !== S().day) { g.near = S().day; G.saveQuiet(); }
  }

  return {
    KINDS, active, mode, tick, roll, play, line, inject, hands, heard, clear,
    stage: ctx => (active() ? stageNow(ctx) : 0), floor: d => (active() ? floorOf(d ?? S().day) : 0), triggers: ctx => (active() ? triggers(ctx) : []),
    state: () => ({ active: active(), mode: mode(), stage: S()?.glitch?.stage ?? null, peak: S()?.glitch?.peak ?? null, seen: [...(S()?.glitch?.seen || [])], n: S()?.glitch?.n || 0,
      live: live.size, armed: armed ? armed.t : null, log: log.slice(), dom: document.querySelectorAll('.g-glx:not(.g-glx-station), .g-glx-dh, .g-glx-clock, .g-glx-moon, .g-glx-face, .g-glx-letters').length,
      weather: W.FemcWeather?.state().glitch || null })
  };
})();
