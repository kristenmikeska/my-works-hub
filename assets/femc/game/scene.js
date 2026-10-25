/* FEMC revamp: the scene player (P3R-style visual novel), adapted from v1's femc-social.js (which stays untouched).
   Scenes are arrays of lines (data files never contain logic):
     { n }                       narration; *word* is italic
     { s, f, t }                 a spoken line: speaker id, portrait face, text ('solar' stands on the right)
     { choose: [{ t, notes, then, say, flag, tally, stat, needs, reverse, route }] }
                                 a choice; "(...)" options aren't spoken; needs: { stat: rank } locks an option
       { christmasOptions: true }  an entry in a choice list (the 12/24 story picker) that expands into one "(Text <name>.)"
                                 option per G.christmasChoices(): links whose own `christmas` scene is open (core.js) and
                                 that no shown option already offers (an option setting the flag xmas-<id> offers <id>).
                                 Picking one records the pick (G.pickChristmas) and plays G.christmasLines(id).
     { asLink: 'id' | null }     the lines after it read that link's route/bond (ifRoute, choice reverse/route), until the
                                 next asLink (null = back to the scene's own link)
     { place, time, bg, music, date, soft }   a scene break (soft: no fade to black)
     { bg } { music } { cg } { cg: null } { dark: true|false }   backdrop changes
     { phone: [{ from, t }], contact }        a text conversation
     { stat } { yen } { flag } { tally } { fragment } { register } { join } { unlock } { setDate }   effects (via the game)
     { ifRank } { ifStat } { ifFlag } { ifMet } { ifRoute } { ifRomance } -> then / else
     { ifCrush: { id: [phases] } } { ifCrushed: { id: 'phase' } } -> then / else; { crush: { id: 'in' | 'out' | n } } an effect (core.js crushes)
     { ifTaken: id | [ids] } -> then / else; { glow: 'id' | 'id:kind' } an effect and { ifGlow } its next-day condition (core.js glowIs)
     { ifEvent: 'event-id' }     -> then / else, only if that story event is recorded in the save
     { ifCount: { of: [flags], min, max } } -> then / else, by how many of those flags are set (core.js countOk)
     { ifAfter: 'M/D', then, else }   today is on or after M/D (same rule as a rank's `after`)
     { ifBefore: 'M/D', then, else }  today is strictly before M/D (so ifBefore X is exactly ifAfter X's else)
     { flag: { id: true } }           sets flags; { flag: 'id' } and { flag: ['a', 'b'] } set them to true. Works in story
                                      events, link scenes and choices alike.
     { battle: { id, op, kind, script, segment, title, desc, notes, forced } }   hand off to the battle game, then carry on
                                      kind: 'operation' (op = a full-moon id), 'scripted' (script + segment), 'tartarus'.
                                      A scripted segment can end early on purpose (outcome 'interrupt'); the scene picks up
                                      on the next line either way.
     { summon: 'haenim', glitch }   the Evoker and the Persona card. Forms: 'haenim-sunna' (Sunna), 'haenim-harbor' (Mazu),
                                    'haenim-nike' (Nike), 'haenim-unveiled'; name / sub override the card's two lines
     { end: 'id' }                  stops the calendar: the game goes to the last night (calendar `end`, 3/7), where the endings play
     { ifReversed: 'linkId' }       -> then / else, when that link is reversed (the flag reversed-<id> mirrors it)
     choices may carry link: 'id' (whose bond reverse / route apply to); in story events a reverse that reaches 2 turns it now
     { act: { numeral, title } }    an act title card
   G (the game) supplies portraits, names, backgrounds, settings and effects.
   Replay (the Theater, menu.js; opts.replay): the same player, read-only. Effects ({ stat } { yen } { flag } { fragment } …),
   choices' effects, dates and ♪ never reach the game; a { battle } is a one-line card; a CG shown is not recorded. Flags set
   by the scene's own lines and choices go to a local overlay, so later { ifFlag } lines inside the replay still follow them.
   opts.replayFlags (optional): the flags the replay reads instead of the save's (an ending from an earlier playthrough).
   opts.date: { md, day } for the date plate. opts.branch(line, link, flagOn): a read-only stand-in for G.branch (returns
   null for a line that isn't a condition). Leave (and Esc) ends it. A live scene reports CGs through G.seeCg(id). */
window.FemcScene = (() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  let G = null;
  const init = game => { G = game; };

  // *italic* → segments, for the typewriter.
  function segments(text) {
    const out = [];
    String(text).split(/(\*[^*]+\*)/).forEach(p => { if (!p) return; if (/^\*[^*]+\*$/.test(p)) out.push({ t: p.slice(1, -1), em: true }); else out.push({ t: p, em: false }); });
    return out;
  }
  function paintText(el, segs, n) {
    el.replaceChildren();
    let left = n;
    for (const s of segs) {
      if (left <= 0) break;
      const piece = s.t.slice(0, left); left -= piece.length;
      if (s.em) { const e = document.createElement('em'); e.textContent = piece; el.append(e); } else el.append(piece);
    }
  }
  const plain = text => String(text).replace(/\*([^*]+)\*/g, '$1');

  /* ── Music for scenes and screens ──
     set(mood): the P3 track for a mood (places.js `music`). A mood is a file (it loops) or a pool: a pool rotates (the
     rotation is remembered in localStorage, kg-femc-music), never starts the file that just played, and plays each track
     through once before crossfading into the next. Asking for the mood that's already playing (or a mood whose pool holds
     the current file) keeps the track going.
     World moods ('world-runners' etc.): Solar's world songs. They fade in softly over the scene while the P3 track waits,
     paused where it was, and fade back out to it when the song ends, the scene asks for another mood, or the scene ends.
     (A change of place without a music key only changes the P3 track waiting underneath.)
     duck(true): a battle has the floor (its own music plays in the battle frame); the tracks keep running silently so they
     can come back where they were, and so FEMC mode's background music stays paused. mood(): the last P3 mood asked for.
     Volume is the shared Music setting (0 = silent; the track still runs). */
  const Music = (() => {
    const SOFT = 0.6, ROT = 'kg-femc-music';
    let cur = null, file = null, mood0 = null, lastMood = null, ducked = false, world = null;
    let rot = {};
    try { rot = JSON.parse(localStorage.getItem(ROT) || '{}').rot || {}; } catch (e) { rot = {}; }
    const keepRot = () => { try { localStorage.setItem(ROT, JSON.stringify({ rot })); } catch (e) {} };
    const vol = () => (ducked ? 0 : Math.max(0, Math.min(100, G?.settings().music ?? 60)) / 100 * 0.5);
    const wvol = () => vol() * SOFT;
    const MAP = () => window.FEMC_GAME_PLACES.music;
    const isWorld = m => /^world-/.test(m || '');
    const pool = m => [].concat(MAP()[m] ?? MAP().joy);
    const src = f => `${G.base}${f.includes('/') ? f : `assets/femc/music/${f}.mp3`}`;
    // The next file in a mood's rotation, skipping `avoid` (the file that just played).
    function pick(m, avoid) {
      const list = pool(m);
      let i = (rot[m] || 0) % list.length;
      if (list.length > 1 && list[i] === avoid) i = (i + 1) % list.length;
      rot[m] = (i + 1) % list.length; keepRot();
      return list[i];
    }
    function fade(a, to, ms, done) {
      clearInterval(a._fade);
      const step = (to - a.volume) / Math.max(1, ms / 50);
      if (!step) { a.volume = Math.max(0, Math.min(1, to)); done && done(); return; }
      a._fade = setInterval(() => {
        const v = a.volume + step;
        if ((step > 0 && v >= to) || (step < 0 && v <= to)) { a.volume = Math.max(0, Math.min(1, to)); clearInterval(a._fade); done && done(); }
        else a.volume = Math.max(0, Math.min(1, v));
      }, 50);
    }
    // Start (or resume) an element and fade it up to to(); if autoplay is blocked, try again on the first click or key.
    function begin(a, to, ms) {
      clearInterval(a._fade);
      const go = () => a.play().then(() => { if (a === cur && world) { a.pause(); return; } fade(a, to(), ms); }); // a world song took over meanwhile
      go().catch(() => {
        const retry = () => { removeEventListener('pointerdown', retry, true); removeEventListener('keydown', retry, true); if (a === cur || a === world?.a) go().catch(() => {}); };
        addEventListener('pointerdown', retry, true); addEventListener('keydown', retry, true);
      });
    }
    // Fade out and pause; an element that is no longer the current track or the world song is released, so a long session
    // never piles up media players (Chrome stops creating them past a limit).
    const release = a => { if (a === cur || a === world?.a) return; a.removeAttribute('src'); try { a.load(); } catch (e) {} };
    const out = (a, ms) => fade(a, 0, ms, () => { a.pause(); release(a); });
    // A pooled track crossfades into the next one just before it ends; a single-file mood just loops. (Every P3 track has
    // loop on, so a missed cue only means one more time round.)
    function watch(a) {
      const next = () => { if (a !== cur || a._next || world || pool(mood0).length < 2) return; a._next = true; playP3(mood0, pick(mood0, file)); };
      a.addEventListener('timeupdate', () => { const d = a.duration; if (d && isFinite(d) && d - a.currentTime < 2.2) next(); });
    }
    function playP3(m, f) {
      const old = cur;
      file = f; mood0 = m;
      const a = cur = new Audio(src(f));
      a.preload = 'auto'; a.volume = 0; a.loop = true;
      watch(a);
      if (world) return; // waits under the world song; it starts when that fades out
      begin(a, vol, 900);
      if (old) out(old, 900);
    }
    function resumeP3(ms) {
      if (!cur) { if (lastMood) playP3(lastMood, pick(lastMood, file)); return; }
      if (cur.paused) begin(cur, vol, ms); else fade(cur, vol(), ms);
    }
    function startWorld(m) {
      if (world && world.mood === m) return;
      const prev = world;
      const f = pick(m, prev && prev.file);
      if (prev) out(prev.a, 1200);
      const a = new Audio(src(f));
      a.preload = 'auto'; a.volume = 0; a.loop = false;
      const w = world = { a, mood: m, file: f };
      a.addEventListener('ended', () => { if (world === w) { world = null; resumeP3(2200); } release(a); });
      if (cur && !cur.paused) { const p = cur; fade(p, 0, 1200, () => { if (world) p.pause(); }); }
      begin(a, () => (ducked ? 0 : wvol()), 2500);
    }
    function endWorld(ms = 2200) {
      if (!world) return;
      const w = world; world = null;
      out(w.a, ms);
      resumeP3(ms);
    }
    return {
      // opts.under: a mood the scene only implies (a change of place): a world song keeps playing over it.
      set(mood, opts = {}) {
        if (!mood) return;
        if (isWorld(mood)) return startWorld(mood);
        lastMood = mood;
        const keep = cur && (mood === mood0 || pool(mood).includes(file));
        if (world && opts.under) { if (keep) mood0 = mood; else playP3(mood, pick(mood, file)); return; }
        if (world) { const w = world; world = null; out(w.a, 1600); if (keep) { mood0 = mood; return resumeP3(1600); } }
        if (keep) { mood0 = mood; if (cur.paused) resumeP3(600); return; }
        playP3(mood, pick(mood, file));
      },
      // A memory fragment in a scene: its world's song, unless a world song is already playing.
      fragment(id) { const m = (window.FEMC_GAME_PLACES.worldMusic || {})[G.worldOf?.(id)]; if (m && !world) startWorld(m); },
      sceneEnd() { endWorld(); },
      volume() { if (cur && !world) { clearInterval(cur._fade); cur.volume = vol(); } if (world) { clearInterval(world.a._fade); world.a.volume = ducked ? 0 : wvol(); } },
      stop() { if (world) { out(world.a, 400); world = null; } if (cur) out(cur, 400); cur = null; file = null; mood0 = null; },
      duck(on) { ducked = !!on; if (world) fade(world.a, ducked ? 0 : wvol(), 400); else if (cur && !cur.paused) fade(cur, vol(), 400); },
      key: () => file, mood: () => lastMood, world: () => (world ? world.mood : null),
      // For tests: what's playing.
      state: () => ({ file, mood: mood0, lastMood, ducked, curPaused: cur ? cur.paused : null, curVol: cur ? cur.volume : null, curLoop: cur ? cur.loop : null, curSrc: cur ? cur.src : null,
        world: world ? world.mood : null, worldFile: world ? world.file : null, worldVol: world ? world.a.volume : null, worldPaused: world ? world.a.paused : null, target: vol(), soft: SOFT })
    };
  })();

  /* ── The player ── */
  // opts: { scene: lines | queue, place, time, title, label, theme, music, link, resume: { queue, vis, gained },
  //         onBattle(battle, snapshot, resume), onDone({ finished, gained, choices }) }
  function play(opts) {
    const replay = !!opts.replay;
    const vis = Object.assign({ place: opts.place || '', time: opts.time || '', bg: null, cg: null, dark: false, theme: opts.theme || '', date: replay ? opts.date || null : null }, opts.resume?.vis || {});
    let gained = opts.resume?.gained || 0;
    // Replay: the flags this scene's own lines set, over the save's (or over opts.replayFlags, which then stand alone).
    const over = {}, baseFlags = opts.replayFlags || null;
    const flagOn = id => (id in over ? !!over[id] : baseFlags ? !!baseFlags[id] : G.flag(id));
    const overFlags = v => { if (typeof v === 'string') over[v] = true; else if (Array.isArray(v)) v.forEach(k => { over[k] = true; }); else if (v && typeof v === 'object') Object.assign(over, v); };
    const EFFECTS = ['stat', 'yen', 'flag', 'tally', 'fragment', 'item', 'gift', 'bond', 'later', 'register', 'join', 'end', 'unlock', 'crush', 'glow'];
    const mdLabel = md => { const i = G.dayInfo(G.dayOf(md)); return { md: i.md, day: i.day }; };
    if (replay) opts.canLeave = true;
    const el = document.createElement('div');
    el.className = `gs${replay ? ' gs-replay' : ''}`;
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-label', opts.label || opts.title || 'Scene');
    el.innerHTML = `<div class="gs-bg"></div><img class="gs-cg" alt="" hidden><div class="gs-tint"></div>
      <div class="gs-place"><b></b><span></span></div>${replay ? '<p class="gs-replay-tag">Theater · replay</p>' : ''}
      <img class="gs-portrait" alt="" hidden><div class="gs-silhouette" hidden></div>
      <img class="gs-solar" alt="" hidden>
      <div class="gs-tools"><button type="button" data-t="log">Log</button><button type="button" data-t="auto" aria-pressed="false">Auto</button><button type="button" data-t="skip">Skip</button>${opts.canLeave ? '<button type="button" data-t="leave">Leave</button>' : ''}</div>
      <div class="gs-log" hidden><div class="gs-log-inner"></div><button type="button" data-t="log-close">Close log</button></div>
      <div class="gs-choices"></div>
      <div class="gs-box" aria-live="polite"><span class="gs-name"></span><p class="gs-text"></p></div>`;
    document.body.appendChild(el);
    // The launcher must stop receiving Enter/Space once its scene is open.
    el.tabIndex = -1;
    el.focus({ preventScroll: true });
    document.documentElement.classList.add('g-in-scene');
    const $ = s => el.querySelector(s);
    const img = $('.gs-portrait'), sil = $('.gs-silhouette'), meEl = $('.gs-solar'), nameEl = $('.gs-name'), textEl = $('.gs-text'), choices = $('.gs-choices'), boxEl = $('.gs-box'), cgEl = $('.gs-cg');
    const fit = () => el.style.setProperty('--boxh', `${boxEl.offsetHeight}px`);
    if (window.ResizeObserver) new ResizeObserver(fit).observe(boxEl); else fit();
    const queue = opts.resume?.queue ? [...opts.resume.queue] : [...opts.scene];
    let typing = null, waiting = null, skipping = false, currentFace = null, closed = false;
    let titleGo = null, titleTimer = null;
    // The link whose route/bond the lines read (asLink switches it, e.g. a link's Christmas scene inside the story event).
    let curLink = opts.resume?.vis?.link || opts.link;
    const log = [];

    function paintVis() {
      el.classList.toggle('gs-velvet', vis.theme === 'velvet' || /^The Velvet Room/.test(vis.place));
      el.classList.toggle('gs-dark', !!vis.dark);
      const b = G.background(vis.place, vis.time, vis.bg);
      const bg = $('.gs-bg');
      bg.className = `gs-bg${b ? ' on' : ''}${b?.mood ? ` ${b.mood}` : ''}`;
      bg.style.backgroundImage = b ? `url("${b.url}")` : '';
      if (vis.cg) { const src = `${G.base}assets/femc/cg/${vis.cg}.webp`; if (cgEl.getAttribute('src') !== src) cgEl.src = src; cgEl.style.setProperty('--focus', (window.FEMC_GAME_PLACES.cgFocus || {})[vis.cg] || 'center'); cgEl.hidden = false; el.classList.add('gs-cg-on'); }
      else { cgEl.hidden = true; el.classList.remove('gs-cg-on'); }
      const d = vis.date || G.dateLabel();
      $('.gs-place b').innerHTML = d ? `${esc(d.md)}<small>${esc(d.day)}</small>` : '';
      $('.gs-place b').hidden = !d;
      $('.gs-place span').textContent = [vis.time, vis.place].filter(Boolean).join(' · ');
      // Weather over the backdrop (weather.js): not over a CG, in the Dark Hour, the Velvet Room or a replay.
      window.FemcWeather?.scene(el, { url: b?.url, place: vis.place, time: vis.time, dark: vis.dark, cg: vis.cg, replay, velvet: el.classList.contains('gs-velvet') });
    }
    paintVis();
    if (opts.music) Music.set(opts.music);

    const showMe = face => {
      const src = face !== null && G.portrait('solar', face || 'neutral');
      if (src) { meEl.style.setProperty('--ps', G.scale('solar')); if (meEl.getAttribute('src') !== src) meEl.src = src; meEl.hidden = false; }
      el.classList.toggle('me-talking', !!src);
    };
    function showPortrait(who, face) {
      if (G.silhouette(who)) {
        const src = G.portrait(G.silhouette(who), 'neutral');
        img.hidden = true; currentFace = `sil/${who}`;
        if (src) { sil.style.backgroundImage = `url("${src}")`; sil.style.setProperty('--ps', G.scale(G.silhouette(who))); sil.classList.add('art'); }
        sil.hidden = false; return;
      }
      sil.hidden = true;
      const src = G.portrait(who, face || 'neutral');
      const key = `${who}/${src}`;
      if (key === currentFace) { img.classList.remove('dim'); return; }
      const swap = currentFace && currentFace.split('/')[0] !== who;
      currentFace = key;
      const apply = () => { img.style.setProperty('--ps', G.scale(who)); img.style.setProperty('--pd', (window.FEMC_PORTRAIT_DROP || {})[String(who).toLowerCase()] || 0); if (src) { img.src = src; img.hidden = false; } else img.hidden = true; img.alt = G.name(who); img.classList.remove('swap', 'dim'); };
      if (swap && !reduced.matches) { img.classList.add('swap'); setTimeout(apply, 180); } else apply();
    }
    function say(text, done) {
      const segs = segments(G.sub(text)); const full = segs.reduce((n, s) => n + s.t.length, 0); let i = 0;
      el.classList.remove('ready');
      const finish = () => { clearTimeout(typing); typing = null; paintText(textEl, segs, full); el.classList.add('ready'); waiting = done; };
      const speed = G.textDelay();
      if (reduced.matches || skipping || speed <= 0) return finish();
      const flat = segs.map(s => s.t).join('');
      const step = () => {
        i += 1; paintText(textEl, segs, i);
        if (i % 3 === 1 && flat[i - 1] !== ' ') G.sfx('femc-text');
        if (i < full) typing = setTimeout(step, '.!?'.includes(flat[i - 1]) ? speed * 6 : speed); else finish();
      };
      textEl.replaceChildren();
      typing = setTimeout(step, 30);
      waiting = () => finish();
    }
    function notes(n) {
      gained += n;
      if (!n) return;
      G.sfx('femc-note');
      const box = document.createElement('div');
      box.className = 'gs-notes';
      box.innerHTML = Array.from({ length: n }, (_, i) => `<i style="--d:${i * 0.12}s">♪</i>`).join('');
      el.appendChild(box);
      setTimeout(() => box.remove(), 1700);
    }
    function ask(options) {
      skipping = false;
      showMe(null);
      el.classList.remove('ready');
      waiting = null;
      const shown = options.filter(o => !o.ifFlag || flagOn(o.ifFlag));
      const offered = shown.flatMap(o => (o.flag && typeof o.flag === 'object' && !Array.isArray(o.flag) ? Object.keys(o.flag) : []).map(k => /^xmas-(.+)$/.exec(k)?.[1]).filter(Boolean));
      const list = shown.flatMap(o => (o.christmasOptions ? (replay ? [] : G.christmasChoices(offered)) : [o]));
      if (replay && !list.length) list.push({ t: '(Carry on.)' });
      choices.replaceChildren(...list.map((o, i) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.style.animationDelay = `${i * 0.06}s`;
        const lock = o.needs && G.lacking(o.needs);
        b.innerHTML = `<span></span>${lock ? `<small>${esc(lock)}</small>` : ''}`;
        b.querySelector('span').textContent = G.sub(o.t);
        if (lock) { b.disabled = true; b.classList.add('locked'); }
        b.addEventListener('click', e => {
          e.stopPropagation();
          if (lock) return;
          choices.replaceChildren();
          G.sfx('femc-click');
          if (replay) { if (o.flag) overFlags(o.flag); } // for show: nothing reaches the save
          else { G.applyChoice(o, curLink, opts.event); notes(o.notes || 0); }
          const spoken = o.say || (o.t.trim().startsWith('(') ? null : o.t);
          queue.unshift(...(spoken ? [{ s: 'solar', t: spoken }] : []), ...(o.christmas ? G.christmasLines(o.christmas) : []), ...(o.then || []));
          next();
        });
        return b;
      }));
      choices.querySelector('button:not(:disabled)')?.focus({ preventScroll: true });
      G.sfx('femc-hover');
    }
    function sceneBreak(line) {
      currentFace = null; img.hidden = true; sil.hidden = true;
      if (line.music) Music.set(line.music); else if (!opts.music && line.place) Music.set(G.moodFor(line.place, line.time), { under: true });
      const apply = () => {
        vis.place = line.place; vis.time = line.time || ''; vis.bg = line.bg || null; vis.cg = null;
        if (line.date) { if (replay) vis.date = mdLabel(line.date); else { G.setDate(line.date); vis.date = null; } }
        paintVis();
      };
      log.push({ name: '', text: '—' });
      if (line.soft || reduced.matches || skipping) { apply(); return next(); }
      el.classList.add('gs-break');
      setTimeout(apply, 260);
      setTimeout(() => el.classList.remove('gs-break'), 700);
      setTimeout(next, 480);
    }
    function phone(line) {
      const box = document.createElement('div');
      box.className = 'gs-phone';
      box.innerHTML = `<div class="gs-phone-head"></div><div class="gs-phone-thread"></div><p class="gs-phone-hint">tap to continue</p>`;
      box.querySelector('.gs-phone-head').textContent = line.contact || '';
      el.appendChild(box);
      const thread = box.querySelector('.gs-phone-thread');
      let i = 0;
      // Each incoming text gets a moment of "typing…" first (a tap shows it at once); Solar's own send with a whoosh.
      // Skip, Instant text speed and reduced motion show them straight away.
      const reveal = () => {
        const m = line.phone[i++];
        if (!m) { box.remove(); el.classList.remove('phoning'); waiting = null; return next(); }
        const me = m.from === 'solar', text = G.sub(m.t);
        let dots = null;
        const show = () => {
          clearTimeout(typing); typing = null; dots?.remove();
          if (!el.isConnected) return;
          const p = document.createElement('p');
          p.className = `gs-msg ${me ? 'me' : 'them'}${reduced.matches ? '' : ' in'}`;
          p.textContent = text;
          thread.appendChild(p);
          thread.scrollTop = thread.scrollHeight;
          log.push({ name: me ? 'Solar' : G.name(m.from), text: `[text] ${text}` });
          if (G.phoneSfx) G.phoneSfx(me ? 'whoosh' : 'pop'); else G.sfx('femc-text');
          waiting = reveal;
          if (skipping) setTimeout(() => { if (waiting === reveal) advanceClick(); }, 40);
        };
        const speed = G.textDelay();
        if (me || skipping || reduced.matches || speed <= 0) return show();
        dots = document.createElement('p');
        dots.className = 'gs-msg them gs-typing';
        dots.innerHTML = '<i></i><i></i><i></i>';
        thread.appendChild(dots);
        thread.scrollTop = thread.scrollHeight;
        typing = setTimeout(show, Math.round(Math.max(420, Math.min(1300, 300 + text.length * speed * 0.8))));
        waiting = show;
      };
      el.classList.add('ready', 'phoning');
      reveal();
    }
    // The Evoker: a white flash, glass breaking outward, and the Persona card whose name won't hold.
    function summon(line) {
      waiting = null; sil.hidden = true; img.hidden = true; currentFace = null;
      const fx = document.createElement('div');
      fx.className = `gs-summon${line.glitch ? ' glitch' : ''}`;
      const shards = Array.from({ length: 14 }, (_, k) => { const a = (k / 14) * Math.PI * 2 + (k % 3) * 0.2; return `<i style="--x:${Math.cos(a).toFixed(2)};--y:${Math.sin(a).toFixed(2)};--r:${(k * 47) % 360}deg;--d:${(k % 4) * 0.03}s"></i>`; }).join('');
      // { summon: 'haenim' | 'haenim-sunna' | 'haenim-harbor' (Mazu) | 'haenim-nike' | 'haenim-unveiled', name?, sub? }
      const FORMS = { haenim: ['HAENIM', 'Lady Sun'], 'haenim-sunna': ['SUNNA', 'The runner under stage lights'], 'haenim-harbor': ['MAZU', 'She who keeps the docks'], 'haenim-mazu': ['MAZU', 'She who keeps the docks'], 'haenim-nike': ['NIKE', 'Winged Victory'], 'haenim-unveiled': ['HAENIM', 'Unveiled'] };
      const form = FORMS[line.summon] || FORMS.haenim, title = line.name || form[0], sub = line.sub || form[1];
      const names = line.glitch ? ['해—', 'HAE—', 'LADY S—', 'H̷A̵E̶N̸I̷M̵', title] : [title];
      fx.innerHTML = `<div class="gs-summon-flash"></div><div class="gs-shards">${shards}</div>
        <img class="gs-summon-art" alt="" src="${G.base}assets/femc/battle/art/personas/${line.summon === 'haenim-mazu' ? 'haenim-harbor' : (line.summon && line.summon !== true ? line.summon : 'haenim')}.webp">
        <div class="gs-summon-card"><small>Persona</small><b>${esc(names[0])}</b><span>${esc(sub)}</span></div><p class="gs-summon-hint">tap to continue</p>`;
      el.appendChild(fx);
      G.sfx('femc-rankup');
      const nameB = fx.querySelector('.gs-summon-card b');
      let k = 0;
      const cycle = setInterval(() => { k += 1; if (k >= names.length) { clearInterval(cycle); fx.classList.add('settled'); return; } nameB.textContent = names[k]; nameB.dataset.text = names[k]; }, reduced.matches ? 60 : 520);
      let ready = false;
      setTimeout(() => { ready = true; fx.classList.add('ready'); }, reduced.matches ? 0 : 2900);
      const done = e => { e?.stopPropagation?.(); if (!ready) return; clearInterval(cycle); fx.removeEventListener('click', done); document.removeEventListener('keydown', onKey, true); fx.classList.add('out'); setTimeout(() => fx.remove(), 350); next(); };
      const onKey = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); done(); } };
      fx.addEventListener('click', done);
      document.addEventListener('keydown', onKey, true);
      if (skipping) { ready = true; setTimeout(done, 50); }
    }
    function actCard(line) {
      waiting = null; skipping = false;
      G.actCard(line.act, () => next());
    }
    function battle(line) {
      if (replay) {
        // The Theater doesn't refight: a line where the fight was.
        const t = `— ${line.battle.title || 'A fight in the Dark Hour'} —`;
        nameEl.textContent = ''; textEl.classList.add('narration'); img.classList.add('dim'); showMe(null);
        log.push({ name: '', text: t });
        return say(t, next);
      }
      waiting = null; skipping = false;
      textEl.replaceChildren(); nameEl.textContent = '';
      const snapshot = { queue: [...queue], vis: { ...vis, link: curLink }, gained };
      opts.onBattle ? opts.onBattle(line.battle, snapshot, () => next()) : next();
    }
    function next() {
      if (closed || !el.isConnected) return;
      const line = queue.shift();
      if (!line) return end(true);
      if (line.place !== undefined && line.n === undefined && line.t === undefined) return sceneBreak(line);
      if (line.music) { Music.set(line.music); return next(); }
      if (line.bg !== undefined && Object.keys(line).length === 1) { vis.bg = line.bg; paintVis(); return next(); }
      if ('cg' in line) {
        vis.cg = line.cg;
        if (line.cg) { img.hidden = true; sil.hidden = true; currentFace = null; showMe(null); if (!replay) G.seeCg?.(line.cg); }
        paintVis(); return next();
      }
      if ('dark' in line) { vis.dark = !!line.dark; paintVis(); return next(); }
      if (line.setDate) { if (replay) vis.date = mdLabel(line.setDate); else G.setDate(line.setDate); paintVis(); return next(); }
      if ('asLink' in line) { curLink = line.asLink || opts.link; return next(); }
      if (line.phone) return phone(line);
      if (line.summon) return summon(line);
      if (line.act) return actCard(line);
      if (line.battle) return battle(line);
      if (line.choose) return ask(line.choose);
      if (line.route) return ask(line.route);
      // In a replay, opts.branch(line, link, flagOn) answers conditions without touching the save (menu.js peek); without
      // it, { ifFlag } reads the replay's flags and the rest goes to G.branch (which checks ifRank and ifStat first).
      const branch = replay && opts.branch ? opts.branch(line, curLink, flagOn)
        : replay && line.ifFlag && !line.ifRank && !line.ifStat ? ([].concat(line.ifFlag).every(flagOn) ? line.then : line.else) || [] : G.branch(line, curLink);
      if (branch !== null) { queue.unshift(...(branch || [])); return next(); }
      if (line.fragment) Music.fragment(line.fragment);
      // (Same rule as G.effect: a line that carries an effect is only that effect.)
      if (replay) { if (EFFECTS.some(k => line[k])) { if (line.flag) overFlags(line.flag); return next(); } }
      else if (G.effect(line)) return next();
      if (line.n !== undefined) {
        nameEl.textContent = ''; textEl.classList.add('narration'); img.classList.add('dim'); sil.hidden = true; if (currentFace?.startsWith('sil/')) currentFace = null;
        log.push({ name: '', text: plain(G.sub(line.n)) });
        showMe(null);
        return say(line.n, next);
      }
      if (line.t !== undefined) {
        textEl.classList.remove('narration');
        if (line.s === 'solar') { nameEl.textContent = 'Solar'; img.classList.add('dim'); if (!vis.cg) showMe(line.f); }
        else {
          nameEl.textContent = G.name(line.s);
          if (!vis.cg) showPortrait(line.s, line.f);
          showMe(null);
        }
        log.push({ name: nameEl.textContent, text: plain(G.sub(line.t)) });
        return say(line.t, next);
      }
      next();
    }
    function advanceClick() {
      if (choices.children.length) return;
      const w = waiting; waiting = null;
      if (!w) return;
      if (!typing && !skipping) G.sfx('femc-advance');
      w();
    }
    el.addEventListener('click', e => { if (e.target.closest('.gs-tools, .gs-choices, .gs-log, .gs-summon, .g-card')) return; advanceClick(); });
    const keys = e => {
      if (closed || !el.isConnected) return document.removeEventListener('keydown', keys, true);
      if (document.querySelector('.g-overlay, .g-dh')) return;
      if (e.key === ' ' || e.key === 'Enter') {
        if (e.repeat) { e.preventDefault(); e.stopPropagation(); return; }
        if (titleGo) { e.preventDefault(); e.stopPropagation(); titleGo(); return; }
        const sceneButton = el.contains(e.target) && e.target.closest?.('button');
        if (!sceneButton) {
          e.preventDefault(); e.stopPropagation();
          if (!choices.children.length) advanceClick();
        }
      }
      if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && choices.children.length) {
        e.preventDefault();
        const all = [...choices.querySelectorAll('button:not(:disabled)')];
        const i = all.indexOf(document.activeElement);
        all[(i + (e.key === 'ArrowDown' ? 1 : all.length - 1) + all.length) % all.length]?.focus({ preventScroll: true });
        G.sfx('femc-hover');
      }
      if ((e.key === 'a' || e.key === 'A') && !e.metaKey && !e.ctrlKey) { e.preventDefault(); autoBtn.click(); }
      // A replay can be left any time (a controller's B is Escape too). The log closes first if it's open.
      if (replay && e.key === 'Escape' && !document.querySelector('.g-actcard')) { e.preventDefault(); e.stopPropagation(); if (!$('.gs-log').hidden) $('.gs-log').hidden = true; else end(false); }
    };
    document.addEventListener('keydown', keys, true);
    $('[data-t="skip"]').addEventListener('click', e => { e.stopPropagation(); skipping = true; advanceClick(); const run = () => { if (skipping && waiting && !choices.children.length) { advanceClick(); setTimeout(run, 50); } }; setTimeout(run, 50); });
    $('[data-t="leave"]')?.addEventListener('click', e => { e.stopPropagation(); end(false); });
    const autoBtn = $('[data-t="auto"]');
    const AUTO = { off: 'Auto', normal: 'Auto ▸', fast: 'Auto ▸▸', slow: 'Auto ·' }, PACE = { off: 0, normal: 1, fast: 0.55, slow: 1.7 }, ORDER = ['off', 'normal', 'fast', 'slow'];
    let mode = G.settings().auto || 'off', readyAt = 0;
    const setAuto = (m, persist = true) => { mode = m; readyAt = 0; autoBtn.textContent = AUTO[m]; autoBtn.setAttribute('aria-pressed', String(m !== 'off')); if (persist) G.setSetting('auto', m); };
    setAuto(AUTO[mode] ? mode : 'off');
    autoBtn.addEventListener('click', e => { e.stopPropagation(); setAuto(ORDER[(ORDER.indexOf(mode) + 1) % ORDER.length]); });
    const autoTick = setInterval(() => {
      if (!el.isConnected) return clearInterval(autoTick);
      // The shared Settings panel can change Auto while this scene waits underneath it.
      const pref = G.settings().auto;
      const selected = AUTO[pref] ? pref : 'off';
      if (selected !== mode) setAuto(selected, false);
      const can = mode !== 'off' && !skipping && waiting && !typing && !choices.children.length && $('.gs-log').hidden && !el.querySelector('.gs-summon') && !document.querySelector('.g-overlay, .g-card, .g-dh, .g-statup');
      if (!can) { readyAt = 0; return; }
      if (!readyAt) readyAt = Date.now();
      const wait = PACE[mode] * (el.classList.contains('phoning') ? 1400 : Math.min(7000, 1100 + textEl.textContent.length * 38));
      if (Date.now() - readyAt >= wait) { readyAt = 0; advanceClick(); }
    }, 200);
    const logBox = $('.gs-log');
    $('[data-t="log"]').addEventListener('click', e => {
      e.stopPropagation();
      logBox.querySelector('.gs-log-inner').replaceChildren(...log.map(l => { const p = document.createElement('p'); if (l.name) { const b = document.createElement('b'); b.textContent = l.name; p.append(b); } else p.className = 'n'; p.append(l.text); return p; }));
      logBox.hidden = false;
      const inner = logBox.querySelector('.gs-log-inner'); inner.scrollTop = inner.scrollHeight;
    });
    $('[data-t="log-close"]').addEventListener('click', e => { e.stopPropagation(); logBox.hidden = true; });

    function close() {
      closed = true;
      window.FemcWeather?.sceneEnd(el);
      clearTimeout(titleTimer); titleGo = null;
      document.removeEventListener('keydown', keys, true);
      el.classList.add('out');
      setTimeout(() => { el.remove(); if (!document.querySelector('.gs')) document.documentElement.classList.remove('g-in-scene'); }, 320);
    }
    function end(finished) {
      if (closed) return;
      clearTimeout(typing);
      Music.sceneEnd();
      close();
      opts.onDone?.({ finished, gained });
    }
    // A title card ("1: rookie") opens a link rank.
    if (opts.title && !opts.resume && !reduced.matches) {
      const card = document.createElement('div');
      card.className = 'gs-title';
      card.innerHTML = `<p><small></small><span></span></p>`;
      card.querySelector('small').textContent = opts.label || '';
      card.querySelector('span').textContent = opts.title;
      el.appendChild(card);
      let gone = false;
      const go = e => { e?.stopPropagation?.(); if (gone || closed) return; gone = true; titleGo = null; clearTimeout(titleTimer); card.classList.add('out'); setTimeout(() => card.remove(), 450); next(); };
      titleGo = go;
      card.addEventListener('click', go);
      titleTimer = setTimeout(go, 2400);
    } else next();
    return { el, close: () => end(false) };
  }

  /* ── The bond meter and rank-up (P3R) ── */
  // A link's top rank (its maxRank, 15 for the rank-15 links since 2026-10-21; 10 otherwise): "MAX" means that one.
  const topRank = link => Math.max(10, +(link && link.maxRank) || 10);
  function cardFace(link) { const art = G.tarot(link); return art ? ` art" style="background-image:url('${art}')` : ''; }
  function meter(link, r, from, to, req, up, done) {
    const gained = to - from;
    const box = document.createElement('div');
    box.className = 'gs-rank gs-meter g-card';
    box.innerHTML = `<div class="gs-meter-inner"><div class="gs-card gs-card-sm${cardFace(link)}" aria-label="${esc(link.arcana)}"><span>${esc(link.numeral || '✦')}</span><small>${esc(link.arcana)}</small></div>
      <div class="gs-meter-info"><p class="gs-meter-name">${esc(link.short)}<small>Rank ${r} ▸ ${r + 1 >= topRank(link) ? 'MAX' : r + 1}</small></p>
      <div class="gs-bar" role="progressbar" aria-valuemin="0" aria-valuemax="${req}" aria-valuenow="${to}"><i></i></div>
      <p class="gs-meter-notes"><b>+${gained} ♪</b> <span>${from}</span> / ${req}</p><p class="gs-meter-msg"></p></div></div>`;
    document.body.appendChild(box);
    const fill = box.querySelector('.gs-bar i'), count = box.querySelector('.gs-meter-notes span'), msg = box.querySelector('.gs-meter-msg');
    const pct = v => `${Math.min(100, (v / req) * 100)}%`;
    fill.style.width = pct(from);
    const gap = reduced.matches ? 0 : 150;
    for (let k = 1; k <= gained; k++) setTimeout(() => { fill.style.width = pct(from + k); count.textContent = from + k; G.sfx('femc-note'); }, 400 + k * gap);
    let ready = false, finished = false;
    setTimeout(() => { ready = true; msg.textContent = up ? 'The meter is full. Something is about to change...' : `Your bond with ${link.short} grew. Spend more time together to reach the next rank.`; if (up) box.classList.add('full'); }, 500 + gained * gap);
    const finish = () => { if (!ready || finished) return; finished = true; document.removeEventListener('keydown', onKey, true); box.remove(); done(); };
    const onKey = e => { if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') { e.preventDefault(); finish(); } };
    box.addEventListener('click', finish);
    document.addEventListener('keydown', onKey, true);
  }
  function rankUp(link, n, done, reversed) {
    const max = n >= topRank(link);
    const box = document.createElement('div');
    box.className = `gs-rank g-card${reversed ? ' reversed' : ''}`;
    box.innerHTML = `<div class="gs-rank-inner"><div class="gs-card${cardFace(link)}" aria-label="${esc(link.arcana)}"><span>${esc(link.numeral || '✦')}</span><small>${esc(link.arcana)}</small></div><p class="gs-thou"></p><p class="gs-ranknum">${reversed ? 'REVERSED' : max ? 'RANK MAX' : `RANK ${n}`}<small>${esc(link.short || link.name)}</small></p></div>`;
    document.body.appendChild(box);
    G.sfx(reversed ? 'femc-back' : 'femc-rankup');
    const lines = reversed ? ['The bond has turned...', `Something between you and ${link.short} has gone wrong.`] : n === 1 ? ['Thou art I... and I am thou...', 'Thou hast established a new bond.'] : max ? ['Thou art I... and I am thou...', `The bond with ${link.short} has reached its fullest.`] : ['Thou art I... and I am thou...', `Thy bond with ${link.short} grows stronger.`];
    const thou = box.querySelector('.gs-thou');
    let i = 0;
    const tick = () => { if (i < lines.length) { thou.innerHTML += (i ? '<br>' : '') + esc(lines[i++]); setTimeout(tick, reduced.matches ? 0 : 850); } };
    setTimeout(tick, reduced.matches ? 0 : 450);
    let ready = false, finished = false;
    setTimeout(() => { ready = true; }, reduced.matches ? 0 : 1700);
    const finish = () => { if (!ready || finished) return; finished = true; document.removeEventListener('keydown', onKey, true); box.classList.add('out'); setTimeout(() => box.remove(), 300); done(); };
    const onKey = e => { if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') { e.preventDefault(); finish(); } };
    box.addEventListener('click', finish);
    document.addEventListener('keydown', onKey, true);
  }
  return { init, play, meter, rankUp, Music, segments, plain };
})();
