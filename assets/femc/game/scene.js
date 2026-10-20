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
     { end: 'id' }                  stops the calendar: the game goes to the last night (1/31), where the endings play
     { ifReversed: 'linkId' }       -> then / else, when that link is reversed (the flag reversed-<id> mirrors it)
     choices may carry link: 'id' (whose bond reverse / route apply to); in story events a reverse that reaches 2 turns it now
     { act: { numeral, title } }    an act title card
   G (the game) supplies portraits, names, backgrounds, settings and effects. */
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
     duck(true): a battle has the floor (its own music plays in the battle frame); the track keeps running silently so it can
     come back where it was, and so FEMC mode's background music stays paused. mood(): the last mood asked for. */
  const Music = (() => {
    let cur = null, key = null, ducked = false, lastMood = null;
    const vol = () => (ducked ? 0 : (G?.settings().music ?? 60) / 100 * 0.5);
    const fade = (a, to, done) => {
      clearInterval(a._fade);
      a._fade = setInterval(() => {
        const v = a.volume + (to > a.volume ? 0.03 : -0.03);
        if (Math.abs(to - a.volume) <= 0.03) { a.volume = to; clearInterval(a._fade); done && done(); } else a.volume = Math.max(0, Math.min(1, v));
      }, 50);
    };
    return {
      set(mood) {
        lastMood = mood;
        const M = window.FEMC_GAME_PLACES.music;
        const file = M[mood] || M.joy;
        if (file === key) return;
        key = file;
        const old = cur;
        const a = cur = new Audio(`${G.base}assets/femc/music/${file}.mp3`);
        a.loop = true; a.volume = 0;
        const start = () => a.play().then(() => fade(a, vol()));
        start().catch(() => {
          const go = () => { removeEventListener('pointerdown', go, true); removeEventListener('keydown', go, true); if (cur === a) start().catch(() => {}); };
          addEventListener('pointerdown', go, true); addEventListener('keydown', go, true);
        });
        if (old) fade(old, 0, () => old.pause());
      },
      volume() { if (cur) { clearInterval(cur._fade); cur.volume = vol(); } },
      stop() { if (cur) { const a = cur; fade(a, 0, () => a.pause()); } cur = null; key = null; },
      duck(on) { ducked = !!on; if (cur) fade(cur, vol()); },
      key: () => key, mood: () => lastMood
    };
  })();

  /* ── The player ── */
  // opts: { scene: lines | queue, place, time, title, label, theme, music, link, resume: { queue, vis, gained },
  //         onBattle(battle, snapshot, resume), onDone({ finished, gained, choices }) }
  function play(opts) {
    const vis = Object.assign({ place: opts.place || '', time: opts.time || '', bg: null, cg: null, dark: false, theme: opts.theme || '', date: null }, opts.resume?.vis || {});
    let gained = opts.resume?.gained || 0;
    const el = document.createElement('div');
    el.className = 'gs';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-label', opts.label || opts.title || 'Scene');
    el.innerHTML = `<div class="gs-bg"></div><img class="gs-cg" alt="" hidden><div class="gs-tint"></div>
      <div class="gs-place"><b></b><span></span></div>
      <img class="gs-portrait" alt="" hidden><div class="gs-silhouette" hidden></div>
      <img class="gs-solar" alt="" hidden>
      <div class="gs-tools"><button type="button" data-t="log">Log</button><button type="button" data-t="auto" aria-pressed="false">Auto</button><button type="button" data-t="skip">Skip</button>${opts.canLeave ? '<button type="button" data-t="leave">Leave</button>' : ''}</div>
      <div class="gs-log" hidden><div class="gs-log-inner"></div><button type="button" data-t="log-close">Close log</button></div>
      <div class="gs-choices"></div>
      <div class="gs-box" aria-live="polite"><span class="gs-name"></span><p class="gs-text"></p></div>`;
    document.body.appendChild(el);
    document.documentElement.classList.add('g-in-scene');
    const $ = s => el.querySelector(s);
    const img = $('.gs-portrait'), sil = $('.gs-silhouette'), meEl = $('.gs-solar'), nameEl = $('.gs-name'), textEl = $('.gs-text'), choices = $('.gs-choices'), boxEl = $('.gs-box'), cgEl = $('.gs-cg');
    const fit = () => el.style.setProperty('--boxh', `${boxEl.offsetHeight}px`);
    if (window.ResizeObserver) new ResizeObserver(fit).observe(boxEl); else fit();
    const queue = opts.resume?.queue ? [...opts.resume.queue] : [...opts.scene];
    let typing = null, waiting = null, skipping = false, currentFace = null, closed = false;
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
      const apply = () => { img.style.setProperty('--ps', G.scale(who)); if (src) { img.src = src; img.hidden = false; } else img.hidden = true; img.alt = G.name(who); img.classList.remove('swap', 'dim'); };
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
      const shown = options.filter(o => !o.ifFlag || G.flag(o.ifFlag));
      const offered = shown.flatMap(o => (o.flag && typeof o.flag === 'object' && !Array.isArray(o.flag) ? Object.keys(o.flag) : []).map(k => /^xmas-(.+)$/.exec(k)?.[1]).filter(Boolean));
      const list = shown.flatMap(o => (o.christmasOptions ? G.christmasChoices(offered) : [o]));
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
          G.applyChoice(o, curLink, opts.event);
          notes(o.notes || 0);
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
      if (line.music) Music.set(line.music); else if (!opts.music && line.place) Music.set(G.moodFor(line.place, line.time));
      const apply = () => {
        vis.place = line.place; vis.time = line.time || ''; vis.bg = line.bg || null; vis.cg = null;
        if (line.date) { G.setDate(line.date); vis.date = null; }
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
      const reveal = () => {
        const m = line.phone[i++];
        if (!m) { box.remove(); el.classList.remove('phoning'); waiting = null; return next(); }
        const p = document.createElement('p');
        p.className = `gs-msg ${m.from === 'solar' ? 'me' : 'them'}`;
        p.textContent = G.sub(m.t);
        thread.appendChild(p);
        thread.scrollTop = thread.scrollHeight;
        log.push({ name: m.from === 'solar' ? 'Solar' : G.name(m.from), text: `[text] ${G.sub(m.t)}` });
        G.sfx('femc-text');
        waiting = reveal;
        if (skipping) setTimeout(() => { if (waiting === reveal) advanceClick(); }, 40);
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
      if ('cg' in line) { vis.cg = line.cg; if (line.cg) { img.hidden = true; sil.hidden = true; currentFace = null; showMe(null); } paintVis(); return next(); }
      if ('dark' in line) { vis.dark = !!line.dark; paintVis(); return next(); }
      if (line.setDate) { G.setDate(line.setDate); paintVis(); return next(); }
      if ('asLink' in line) { curLink = line.asLink || opts.link; return next(); }
      if (line.phone) return phone(line);
      if (line.summon) return summon(line);
      if (line.act) return actCard(line);
      if (line.battle) return battle(line);
      if (line.choose) return ask(line.choose);
      if (line.route) return ask(line.route);
      const branch = G.branch(line, curLink);
      if (branch !== null) { queue.unshift(...(branch || [])); return next(); }
      if (G.effect(line)) return next();
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
      if (!el.isConnected) return document.removeEventListener('keydown', keys, true);
      if (document.querySelector('.g-overlay, .g-dh')) return;
      if (e.key === ' ' || e.key === 'Enter') { if (!choices.children.length && !e.target.closest?.('button')) { e.preventDefault(); advanceClick(); } }
      if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && choices.children.length) {
        e.preventDefault();
        const all = [...choices.querySelectorAll('button:not(:disabled)')];
        const i = all.indexOf(document.activeElement);
        all[(i + (e.key === 'ArrowDown' ? 1 : all.length - 1) + all.length) % all.length]?.focus({ preventScroll: true });
        G.sfx('femc-hover');
      }
      if ((e.key === 'a' || e.key === 'A') && !e.metaKey && !e.ctrlKey) { e.preventDefault(); autoBtn.click(); }
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
      const can = mode !== 'off' && !skipping && waiting && !typing && !choices.children.length && $('.gs-log').hidden && !el.querySelector('.gs-summon') && !document.querySelector('.g-overlay, .g-card, .g-dh');
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
      document.removeEventListener('keydown', keys, true);
      el.classList.add('out');
      setTimeout(() => { el.remove(); if (!document.querySelector('.gs')) document.documentElement.classList.remove('g-in-scene'); }, 320);
    }
    function end(finished) {
      clearTimeout(typing);
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
      const go = e => { e?.stopPropagation?.(); if (gone) return; gone = true; card.classList.add('out'); setTimeout(() => card.remove(), 450); next(); };
      card.addEventListener('click', go);
      setTimeout(go, 2400);
    } else next();
    return { el, close: () => end(false) };
  }

  /* ── The bond meter and rank-up (P3R) ── */
  function cardFace(link) { const art = G.tarot(link); return art ? ` art" style="background-image:url('${art}')` : ''; }
  function meter(link, r, from, to, req, up, done) {
    const gained = to - from;
    const box = document.createElement('div');
    box.className = 'gs-rank gs-meter g-card';
    box.innerHTML = `<div class="gs-meter-inner"><div class="gs-card gs-card-sm${cardFace(link)}" aria-label="${esc(link.arcana)}"><span>${esc(link.numeral || '✦')}</span><small>${esc(link.arcana)}</small></div>
      <div class="gs-meter-info"><p class="gs-meter-name">${esc(link.short)}<small>Rank ${r} ▸ ${r + 1 >= 10 ? 'MAX' : r + 1}</small></p>
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
    const max = n >= 10;
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
