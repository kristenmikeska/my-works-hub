/* FEMC revamp: screens and the day loop (title, date card, school day, Go Out map, the dorm at night, the Dark Hour (battles
   run in this page), phone, exams, shops, saves, settings). Rules live in core.js, content in data/ and links/, the field
   menu (party, Personas, skills, equipment, items, status, links) in menu.js.
   Battles: a { battle } line or a Tartarus night writes the handoff (core.js makeHandoff, S.handoff) and opens the Dark Hour
   layer: a green wash, the glass shatters, the fight's title, then the battle game (femc-battle.html?embed=1) in a
   full-screen same-origin iframe. It talks back through window.FemcBridge (below; battle.js header). When it finishes, the
   layer fades back to the scene, the result is applied (applyResult), the results card shows and the scene goes on from the
   very next line (the live scene player waits underneath). After a reload mid-fight, Continue reopens the fight and the
   scene is rebuilt from its snapshot (S.pending). The scene's music ducks under the battle's and comes back after.
   Controls: keyboard, mouse, touch, and a controller through pad.js (it turns the pad into keys; navKeys below moves focus
   on the life-sim screens, the battle frame runs its own copy). */
(() => {
  const G = window.FemcGame, SC = window.FemcScene;
  const S = () => G.S;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const $ = (s, r = document) => r.querySelector(s);
  const app = document.getElementById('g-app');
  // The battle game, run inside this page. Test params (?seed, ?speed) pass through.
  const battleSrc = () => { const p = new URLSearchParams(location.search), q = ['seed', 'speed'].filter(k => p.has(k)).map(k => `&${k}=${encodeURIComponent(p.get(k))}`).join(''); return `${G.base}femc-battle.html?embed=1${q}`; };
  // ?debug=1 keeps the Simulate buttons on fight cards (remembered for this tab's session, so it survives the round trip).
  const DEBUG = (() => { try { if (/[?&]debug=1\b/.test(location.search)) sessionStorage.setItem('kg-femc-debug', '1'); if (/[?&]debug=0\b/.test(location.search)) sessionStorage.removeItem('kg-femc-debug'); return sessionStorage.getItem('kg-femc-debug') === '1'; } catch (e) { return /[?&]debug=1\b/.test(location.search); } })();

  /* ── Small drawings (weather, moon, icons) ── */
  const ICON = {
    clear: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="5" fill="#ffd36b"/><g stroke="#ffd36b" stroke-width="2" stroke-linecap="round"><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/></g></svg>',
    cloudy: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 18h10a4 4 0 0 0 .5-8 6 6 0 0 0-11.3 1.5A3.3 3.3 0 0 0 7 18z" fill="#e8dce4"/></svg>',
    rain: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 14h10a4 4 0 0 0 .5-8 6 6 0 0 0-11.3 1.5A3.3 3.3 0 0 0 7 14z" fill="#c9d6ec"/><g stroke="#7fb6ff" stroke-width="2" stroke-linecap="round"><path d="M8 17l-1 3M12 17l-1 3M16 17l-1 3"/></g></svg>',
    snow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 14h10a4 4 0 0 0 .5-8 6 6 0 0 0-11.3 1.5A3.3 3.3 0 0 0 7 14z" fill="#e8eef8"/><g fill="#fff"><circle cx="8" cy="18.5" r="1.3"/><circle cx="12" cy="20" r="1.3"/><circle cx="16" cy="18.5" r="1.3"/></g></svg>',
    storm: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 14h10a4 4 0 0 0 .5-8 6 6 0 0 0-11.3 1.5A3.3 3.3 0 0 0 7 14z" fill="#9aa3b8"/><path d="M12 14l-3 5h3l-1 4 4-6h-3l1-3z" fill="#ffe14d"/></svg>'
  };
  function moonSvg(phase) {
    const k = Math.cos(phase * 2 * Math.PI), rx = (9 * Math.abs(k)).toFixed(2);
    const lit = phase < 0.5 ? `M10 1A9 9 0 0 1 10 19A${rx} 9 0 0 ${k > 0 ? 0 : 1} 10 1` : `M10 1A9 9 0 0 0 10 19A${rx} 9 0 0 ${k > 0 ? 1 : 0} 10 1`;
    return `<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="9" fill="#3a1028"/><path d="${lit}" fill="#fff4f9"/></svg>`;
  }
  const bgUrl = slug => `${G.base}assets/femc/bg/${slug}.webp`;
  // Memory cards without art yet (new fragment ids): the battle data's placeholder card stands in until the .webp exists.
  document.addEventListener('error', e => {
    const t = e.target, m = t && t.tagName === 'IMG' && !t.dataset.ph && /memories\/([a-z0-9-]+?)\.webp/.exec(t.getAttribute('src') || '');
    if (m && G.D.battle.memoryPlaceholder) { t.dataset.ph = '1'; t.src = G.D.battle.memoryPlaceholder(m[1]); }
  }, true);

  /* ── Music by screen ── */
  const screenMusic = key => { const mood = G.D.places.screens[key]; if (mood) SC.Music.set(mood); };

  /* ── Toasts ── */
  const toastBox = document.createElement('div');
  toastBox.className = 'g-toasts';
  toastBox.setAttribute('aria-live', 'polite');
  document.body.appendChild(toastBox);
  function flushToasts() {
    G.takeToasts().forEach((t, i) => {
      const el = document.createElement('div');
      el.className = `g-toast k-${t.kind}${t.stat ? ` s-${t.stat}` : ''}`;
      el.textContent = t.text;
      if (t.thread) { el.setAttribute('role', 'button'); el.tabIndex = 0; el.addEventListener('click', () => openPhone(t.thread)); }
      setTimeout(() => { toastBox.appendChild(el); if (t.kind === 'statrank') G.sfx('femc-rankup'); }, i * 160);
      setTimeout(() => el.classList.add('out'), 2600 + i * 160 + (t.kind === 'statrank' ? 900 : 0));
      setTimeout(() => el.remove(), 3200 + i * 160 + (t.kind === 'statrank' ? 900 : 0));
    });
    paintHud();
  }
  G.onChange(() => { flushToasts(); });

  /* ── The scene bridge (FemcScene needs these) ── */
  const bridge = Object.assign(Object.create(G), {
    base: G.base, settings: G.settings, setSetting: G.setSetting, textDelay: G.textDelay, sfx: G.sfx,
    background: G.background, portrait: G.portrait, scale: G.scale, name: G.name, silhouette: G.silhouette, sub: G.sub,
    dateLabel: G.dateLabel, setDate: G.setDate, moodFor: G.moodFor, applyChoice: G.applyChoice, lacking: G.lacking, flag: G.flag,
    branch: G.branch, effect: G.effect, tarot: G.tarot, actCard
  });
  SC.init(bridge);

  /* ── Layout ── */
  app.innerHTML = `<div class="g-stage"><div class="g-bg"></div><div class="g-stripes"></div></div>
    <header class="g-hud" hidden></header>
    <main class="g-main" id="g-main" tabindex="-1"></main>`;
  const main = $('#g-main'), hud = $('.g-hud');
  function setBg(slug, mood = '') { const b = $('.g-bg'); b.style.backgroundImage = slug ? `url("${bgUrl(slug)}")` : ''; b.className = `g-bg${mood ? ` ${mood}` : ''}`; }
  function show(html, cls = '') { main.className = `g-main ${cls}`; main.innerHTML = html; main.scrollTop = 0; return main; }

  function paintHud() {
    if (S().phase !== 'play') { hud.hidden = true; return; }
    hud.hidden = false;
    const i = G.dayInfo(), c = G.D.stats.conditions[S().condition];
    const m = i.moon, moonTip = m.full ? 'Full moon tonight' : m.days != null ? `${m.name} · full moon in ${m.days} day${m.days === 1 ? '' : 's'}` : m.name;
    hud.innerHTML = `<div class="g-date"><b>${esc(i.md)}</b><small>${esc(i.day)}</small></div>
      <div class="g-when"><span class="g-slot">${esc(G.slotName(S().slot, i))}</span>${i.label ? `<span class="g-label">${esc(i.label)}</span>` : ''}</div>
      <div class="g-sky"><span class="g-wx" title="${esc(G.D.cal.weatherNames[i.weather])}" aria-label="${esc(G.D.cal.weatherNames[i.weather])}">${ICON[i.weather] || ''}</span><span class="g-moon" title="${esc(moonTip)}" aria-label="${esc(moonTip)}">${moonSvg(m.phase)}</span></div>
      <div class="g-me"><span class="g-cond" style="--c:${c.color}" title="${esc(c.desc)}">${esc(c.name)}</span><span class="g-yen">¥${S().yen.toLocaleString()}</span></div>
      <nav class="g-menu" aria-label="Menu"><button type="button" data-ui="menu" class="g-menu-main" title="Menu (M)">Menu</button><button type="button" data-ui="phone">Phone${G.unread() ? `<em>${G.unread()}</em>` : ''}</button><button type="button" data-ui="save">Save</button><button type="button" data-ui="settings" aria-label="Settings" title="Settings"><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" style="display:block;transform:skewX(14deg)"><path fill="currentColor" d="M19.4 13a7.6 7.6 0 0 0 0-2l2.1-1.6-2-3.5-2.5 1a7.4 7.4 0 0 0-1.7-1L15 3.3h-4l-.4 2.6a7.4 7.4 0 0 0-1.7 1l-2.5-1-2 3.5L6.6 11a7.6 7.6 0 0 0 0 2l-2.1 1.6 2 3.5 2.5-1a7.4 7.4 0 0 0 1.7 1l.4 2.6h4l.4-2.6a7.4 7.4 0 0 0 1.7-1l2.5 1 2-3.5zM13 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z" transform="translate(-1 0)"/></svg></button></nav>`;
  }
  hud.addEventListener('click', e => {
    const b = e.target.closest('[data-ui]'); if (!b) return;
    ({ phone: () => openPhone(), menu: () => openStatus(), status: () => openStatus(), save: () => openSaves(), settings: () => openSettings() })[b.dataset.ui]?.();
  });

  /* ── Overlays ── */
  function overlay(html, cls = '', onClose) {
    const el = document.createElement('div');
    el.className = `g-overlay ${cls}`;
    el.setAttribute('role', 'dialog'); el.setAttribute('aria-modal', 'true');
    el.innerHTML = `<div class="g-panel">${html}</div>`;
    document.body.appendChild(el);
    const close = () => { if (el.classList.contains('out')) return; el.classList.add('out'); document.removeEventListener('keydown', key, true); setTimeout(() => el.remove(), 220); onClose?.(); };
    const key = e => { if (e.key === 'Escape' && el === [...document.querySelectorAll('.g-overlay')].pop() && !el.dataset.locked) { e.preventDefault(); e.stopPropagation(); close(); } };
    document.addEventListener('keydown', key, true);
    el.addEventListener('click', e => { if (e.target === el && !el.dataset.locked) close(); if (e.target.closest('[data-close]')) close(); });
    setTimeout(() => el.querySelector('button, [tabindex]')?.focus({ preventScroll: true }), 30);
    return { el, close };
  }

  /* ── Date card (P3R): yesterday rolls up, today slams in ── */
  function dateCard(done) {
    if (!G.settings().dateCard) return done();
    const i = G.dayInfo(), prev = G.dayInfo(Math.max(0, i.d - 1));
    const el = document.createElement('div');
    el.className = 'g-datecard';
    el.setAttribute('role', 'status');
    const m = i.moon;
    el.innerHTML = `<div class="g-dc-band"></div><div class="g-dc-band b2"></div>
      <div class="g-dc-inner">
        <p class="g-dc-month">${i.date.toLocaleString('en', { month: 'long' }).toUpperCase()} ${i.date.getFullYear()}</p>
        <div class="g-dc-roll"><div class="g-dc-days"><span>${esc(prev.md)}<small>${esc(prev.day)}</small></span><span>${esc(i.md)}<small>${esc(i.day)}</small></span></div></div>
        <div class="g-dc-info"><span class="g-dc-wx">${ICON[i.weather] || ''}<b>${esc(G.D.cal.weatherNames[i.weather])}</b></span><span class="g-dc-moon">${moonSvg(m.phase)}<b>${esc(m.full ? 'Full Moon' : m.name)}</b></span></div>
        ${i.label ? `<p class="g-dc-label">${esc(i.label)}</p>` : ''}
      </div>`;
    document.body.appendChild(el);
    G.sfx('femc-hover');
    let gone = false;
    const go = () => { if (gone) return; gone = true; el.classList.add('out'); setTimeout(() => { el.remove(); done(); }, reduced.matches ? 0 : 380); };
    el.addEventListener('click', go);
    const key = e => { if (['Enter', ' ', 'Escape'].includes(e.key)) { e.preventDefault(); document.removeEventListener('keydown', key, true); go(); } };
    document.addEventListener('keydown', key, true);
    setTimeout(() => { document.removeEventListener('keydown', key, true); go(); }, reduced.matches ? 600 : 2300);
  }
  function actCard(act, done) {
    const el = document.createElement('div');
    el.className = 'g-actcard';
    el.innerHTML = `<div class="g-ac-inner"><p class="g-ac-num">ACT ${esc(act.numeral || '')}</p><p class="g-ac-title">${esc(act.title || '')}</p><p class="g-ac-date">${esc(G.dayInfo().md)} · ${esc(G.dayInfo().dayName)}</p><p class="g-ac-hint">click to continue</p></div>`;
    document.body.appendChild(el);
    G.sfx('femc-rankup');
    let ready = false, gone = false;
    setTimeout(() => { ready = true; }, reduced.matches ? 0 : 1600);
    const go = () => { if (!ready || gone) return; gone = true; document.removeEventListener('keydown', key, true); el.classList.add('out'); setTimeout(() => { el.remove(); done(); }, 450); };
    const key = e => { if (['Enter', ' '].includes(e.key)) { e.preventDefault(); go(); } };
    el.addEventListener('click', go);
    document.addEventListener('keydown', key, true);
  }

  /* ── Scenes with context (so a scene can be resumed after a battle handoff) ── */
  // ctx: { type: 'prologue' } | { type: 'event', id } | { type: 'op', md } | { type: 'link', id, kind, r } | { type: 'job', id } | { type: 'tartarus' }
  function sceneFor(ctx) {
    if (ctx.type === 'prologue') return { scene: window.FEMC_GAME_PROLOGUE.scene, label: 'Prologue', title: null };
    if (ctx.type === 'event') { const e = G.D.events.find(x => x.id === ctx.id); return { scene: e.scene, place: e.place, time: e.time, title: e.title, label: G.dayInfo().md, cast: e.cast, link: e.link, event: true }; }
    if (ctx.type === 'door') { const d = (G.D.flags.doorScenes || {})[ctx.key] || {}; return { scene: d.scene || [], place: d.place, time: d.time, title: d.title, label: 'Memory', event: true }; }
    if (ctx.type === 'op') return { scene: opScene(ctx.md), place: 'Iwatodai Dorm · Command Room', time: 'The Dark Hour', title: 'full moon', label: 'Operation' };
    return null;
  }
  function opScene(md) {
    const ops = G.D.cal.ops.filter(o => o.date === md);
    const lines = [{ music: 'fullmoon' }, { dark: true }, { n: 'The moon was full. Everyone knew it before anyone said so. At midnight the green came down over the city, and Mitsuru had every monitor in the command room lit before the clocks had finished stopping.' },
      { s: 'mitsuru', f: 'neutral', t: 'There it is. A large reading, and it isn’t moving. Solar, the field is yours.' }];
    ops.forEach((o, k) => lines.push({ battle: { id: o.op, op: o.op, title: o.name, desc: `${o.name}. A full-moon Shadow.`, forced: true, kind: 'operation' } }, k < ops.length - 1 ? { n: 'It wasn’t over. Fuuka’s voice came through, tight and quick: a second reading, close.' } : { n: 'Then it was quiet, and the green drained out of the sky the way it always did, all at once and like it had never been there, and they walked home through a city that would never know.' }));
    lines.push({ dark: false });
    return lines;
  }
  function playCtx(ctx, opts = {}, resume) {
    const sc = sceneFor(ctx);
    return SC.play({
      scene: sc.scene, place: sc.place, time: sc.time, title: resume ? null : sc.title, label: sc.label, music: opts.music, resume, link: sc.link, event: sc.event,
      onBattle: (battle, snap, cont) => battleCard(battle, { ctx, snap }, cont),
      onDone: r => { S().pending = null; G.save(); opts.onDone?.(r); }
    });
  }

  /* ── Battle handoff: fights run in this page (the Dark Hour layer below). With ?debug=1 a card offers Simulate as well. ── */
  // cont: the live scene's "carry on" (the scene player waits underneath the battle); null after a reload.
  let liveCont = null;
  function goBattle(kind, req, resumeInfo, cont) {
    S().pending = resumeInfo ? { ctx: resumeInfo.ctx, snap: resumeInfo.snap, music: SC.Music.mood() } : { ctx: { type: kind }, snap: null, music: SC.Music.mood() };
    G.makeHandoff(kind, req);
    G.save();
    liveCont = cont || null;
    openBattle();
  }
  function battleCard(battle, resumeInfo, cont, kind) {
    kind = kind || battle.kind || (battle.script ? 'scripted' : battle.op ? 'operation' : 'tartarus');
    const title = battle.title || (kind === 'tartarus' ? 'Tartarus' : battle.op ? 'Full Moon Operation' : 'Battle');
    const req = { op: battle.op, ops: battle.ops, script: battle.script, segment: battle.segment, title, desc: battle.desc, notes: battle.notes || null, forced: battle.forced !== false && kind !== 'tartarus', party: battle.party };
    const seg1 = battle.script && battle.segment === 1;
    // The Dark Hour transition carries the fight's title.
    if (!DEBUG) return goBattle(kind, req, resumeInfo, cont);
    const o = overlay(`<div class="g-battle">
        <p class="g-kicker">${kind === 'tartarus' ? 'The Dark Hour' : 'Battle'} · debug</p>
        <h2>Battle<small>${esc(title)}</small></h2>
        <p class="g-battle-desc">${esc(battle.desc || '')}</p>
        <p class="g-battle-note">Debug: simulate the result here, or fight it.</p>
        <div class="g-row"><button type="button" class="g-btn pink" data-b="go">Fight ▸</button><button type="button" class="g-btn" data-b="sim">${seg1 ? 'Simulate (until the Evoker)' : 'Simulate win'}</button>
        ${kind === 'tartarus' || !req.forced ? '<button type="button" class="g-btn" data-b="lose">Simulate retreat</button>' : ''}</div></div>`, 'g-battle-ov');
    o.el.dataset.locked = '1';
    let used = false;
    o.el.addEventListener('click', e => {
      const b = e.target.closest('[data-b]'); if (!b || used) return;
      used = true;
      o.close();
      if (b.dataset.b === 'go') return goBattle(kind, req, resumeInfo, cont);
      const h = G.makeHandoff(kind, req);
      const r = G.simulate(h, b.dataset.b === 'lose' ? 'retreat' : (seg1 ? 'interrupt' : 'win'));
      if (seg1) r.outcome = 'interrupt';
      const sum = G.applyResult(h, r);
      G.clearHandoff();
      resultsCard(h, sum, () => cont(sum));
    });
  }

  /* ── The Dark Hour layer: the transition in, the battle frame, the bridge, the fade back ── */
  let dh = null; // { el, frame, h, cont, ready, timeOk, revealed, leaving }
  // A glass-break sting (Web Audio; quiet when sound effects are off).
  function shatterSfx() {
    const st = G.settings();
    if (!st.sfx || localStorage.getItem('kg-femc-sound') === 'off') return;
    try {
      const C = window.AudioContext || window.webkitAudioContext; if (!C) return;
      const c = shatterSfx.ctx || (shatterSfx.ctx = new C()); if (c.state === 'suspended') c.resume().catch(() => {});
      const out = c.createGain(); out.gain.value = Math.max(0, Math.min(1, (st.sfxVol ?? 100) / 100)) * 0.8; out.connect(c.destination);
      const t = c.currentTime;
      const noise = (d, f, v, at) => { const n = Math.floor(c.sampleRate * d), b = c.createBuffer(1, n, c.sampleRate), ch = b.getChannelData(0); for (let i = 0; i < n; i++) ch[i] = (Math.random() * 2 - 1) * (1 - i / n); const s = c.createBufferSource(), fl = c.createBiquadFilter(), g = c.createGain(); s.buffer = b; fl.type = 'bandpass'; fl.frequency.value = f; g.gain.value = v; s.connect(fl).connect(g).connect(out); s.start(t + at); };
      const tone = (f, d, v, at, to) => { const o = c.createOscillator(), g = c.createGain(); o.type = 'triangle'; o.frequency.setValueAtTime(f, t + at); if (to) o.frequency.exponentialRampToValueAtTime(to, t + at + d); g.gain.setValueAtTime(v, t + at); g.gain.exponentialRampToValueAtTime(0.0001, t + at + d); o.connect(g).connect(out); o.start(t + at); o.stop(t + at + d + 0.03); };
      tone(90, 0.5, 0.35, 0, 38); noise(0.35, 5200, 0.32, 0.38); [0.4, 0.45, 0.52, 0.6, 0.7].forEach((at, i) => tone(3600 + i * 420, 0.08, 0.04, at, 2600));
    } catch (e) {}
  }
  function shardsHtml() {
    // Glass pieces from the centre outward: each a full-screen layer clipped to one wedge, flying off on its own vector.
    const n = 14, out = [];
    for (let k = 0; k < n; k++) {
      const a0 = (k / n) * Math.PI * 2, a1 = ((k + 1) / n) * Math.PI * 2, r = 150, cx = 50 + Math.cos(a0 * 3) * 3, cy = 48 + Math.sin(a0 * 2) * 3;
      const p = [[cx, cy], [50 + Math.cos(a0) * r, 50 + Math.sin(a0) * r], [50 + Math.cos(a1) * r, 50 + Math.sin(a1) * r]].map(([x, y]) => `${x.toFixed(1)}% ${y.toFixed(1)}%`).join(',');
      const m = (a0 + a1) / 2;
      out.push(`<i style="clip-path:polygon(${p});--x:${(Math.cos(m) * 60).toFixed(1)}vw;--y:${(Math.sin(m) * 60).toFixed(1)}vh;--r:${((k * 53) % 70) - 35}deg;--d:${((k * 7) % 5) * 0.025}s"></i>`);
    }
    return out.join('');
  }
  function openBattle() {
    const h = S().handoff;
    if (!h || dh) return;
    const R = h.request || {}, kind = h.kind;
    const kicker = kind === 'operation' || (R.op && kind !== 'tartarus') ? 'Full Moon · The Dark Hour' : 'The Dark Hour';
    const title = R.title || (kind === 'tartarus' ? 'Tartarus' : 'Battle');
    document.querySelectorAll('.g-overlay').forEach(x => x.remove());
    SC.Music.duck(true);
    const el = document.createElement('div');
    el.className = `g-dh${reduced.matches ? ' calm' : ''}`;
    el.setAttribute('role', 'dialog'); el.setAttribute('aria-modal', 'true'); el.setAttribute('aria-label', title);
    el.innerHTML = `<div class="g-dh-frame"></div>
      <div class="g-dh-fx" aria-hidden="true"><div class="g-dh-wash"></div><div class="g-dh-black"></div><div class="g-dh-glass">${shardsHtml()}</div>
        <svg class="g-dh-cracks" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M50 48 L8 6 M50 48 L92 10 M50 48 L97 60 M50 48 L70 98 M50 48 L22 96 M50 48 L2 58 M50 48 L60 2 M30 27 L41 22 M74 30 L68 22 M74 55 L80 46 M38 72 L30 66 M18 52 L22 44" /></svg>
        <div class="g-dh-title"><small>${esc(kicker)}</small><b>${esc(title)}</b>${h.date ? `<span>${esc(h.date.md)} · ${esc(h.date.weekday || '')}</span>` : ''}</div></div>
      <p class="g-dh-wait" aria-live="polite"></p>`;
    document.body.appendChild(el);
    document.documentElement.classList.add('g-in-battle');
    const st = dh = { el, h, cont: liveCont, ready: false, timeOk: false, revealed: false, leaving: false, frame: null };
    liveCont = null;
    requestAnimationFrame(() => el.classList.add('go'));
    setTimeout(() => { if (dh === st && !reduced.matches) shatterSfx(); }, 330);
    setTimeout(() => {
      if (dh !== st) return;
      const f = document.createElement('iframe');
      f.className = 'g-dh-iframe'; f.title = title; f.setAttribute('allow', 'autoplay; gamepad; fullscreen');
      f.src = battleSrc();
      el.querySelector('.g-dh-frame').appendChild(f);
      st.frame = f;
    }, reduced.matches ? 0 : 420);
    setTimeout(() => { st.timeOk = true; reveal(st); }, reduced.matches ? 250 : 2500);
    // If the frame is slow to report in, say so; it still opens on its own once it's up.
    setTimeout(() => { if (dh === st && !st.revealed) el.querySelector('.g-dh-wait').textContent = 'Loading the Dark Hour…'; }, 6000);
  }
  function reveal(st) {
    if (dh !== st || st.revealed || !st.ready || !st.timeOk) return;
    st.revealed = true;
    st.el.classList.add('live');
    setTimeout(() => { try { st.frame?.contentWindow?.focus(); } catch (e) {} }, 60);
  }
  // The battle is over (result: the contract's `result`, or null when the frame had nothing to fight): fade back.
  function leaveBattle(result) {
    const st = dh;
    if (!st || st.leaving) return;
    st.leaving = true;
    if (result) G.finishHandoff(JSON.parse(JSON.stringify(result)));
    else if (S().handoff && S().handoff.status === 'pending') { G.clearHandoff(); }
    st.el.classList.add('out');
    setTimeout(() => {
      st.frame?.remove();
      st.el.classList.add('gone');
      document.documentElement.classList.remove('g-in-battle');
      dh = null;
      setTimeout(() => st.el.remove(), 650);
      afterBattle(st.cont);
    }, reduced.matches ? 60 : 560);
  }
  // Apply a finished fight, show the results card, then go on: the live scene's next line, or the saved snapshot.
  function afterBattle(cont) {
    const h = S().handoff;
    SC.Music.duck(false);
    if (!h || h.status !== 'done' || !h.result) { if (h && h.status !== 'pending') G.clearHandoff(); return cont ? cont({}) : (S().pending ? resumePending() : run()); }
    const sum = G.applyResult(h, h.result);
    G.clearHandoff();
    resultsCard(h, sum, () => {
      if (cont) { if (!S().pending?.snap) { S().pending = null; G.save(); } return cont(sum); }
      resumePending();
    });
  }
  // On load / Continue: a fight in progress opens again; a finished one that wasn't applied yet is applied now.
  function resumeHandoff() {
    const h = S().handoff;
    hud.hidden = true;
    if (h.status === 'done') { show('', 'is-scene'); return afterBattle(null); }
    show('', 'is-scene');
    openBattle();
  }
  window.FemcBridge = {
    handoff: () => (S().handoff ? JSON.parse(JSON.stringify(S().handoff)) : null),
    battleSave: () => (S().battleSave ? JSON.parse(JSON.stringify(S().battleSave)) : null),
    carry: () => (S().battleCarry ? JSON.parse(JSON.stringify(S().battleCarry)) : null),
    saveBattle: b => { if (b && typeof b === 'object') G.setBattleSave(JSON.parse(JSON.stringify(b))); },
    settings: () => ({ ...G.settings() }),
    setSettings: p => { if (p && typeof p === 'object') { G.setSettings(JSON.parse(JSON.stringify(p))); SC.Music.volume(); } },
    openSettings: (onClose, startKey) => openSettings({ inBattle: true, onClose, startKey }),
    closeSettings: () => settingsPanel?.close(),
    // The field menu over the fight (menu.js header: opts). Returns false when it couldn't open (the frame carries on).
    openMenu: (tab, opts = {}) => {
      if (!window.FemcMenu) return false;
      const ok = window.FemcMenu.open(tab, { ...opts, inBattle: true, onClose: () => { setTimeout(() => { try { dh?.frame?.contentWindow?.focus(); } catch (e) {} }, 30); opts.onClose?.(); } });
      return ok !== false;
    },
    closeMenu: () => window.FemcMenu?.close(),
    key: () => {},
    ready: () => { if (dh) { dh.ready = true; reveal(dh); } },
    finish: result => leaveBattle(result || null)
  };
  // The night's report after the battle's own results: the same look as the battle's results screen.
  function resultsCard(h, sum, done) {
    if (h.kind === 'scripted' && !sum.fragments.length) { done(); return; }
    const exp = Object.entries(sum.exp || {});
    const lv = h.result?.levels || {};
    const opName = id => G.D.battle.ops?.find(o => o.id === id)?.name || G.D.cal.ops.find(o => o.op === id)?.name || id;
    const word = sum.outcome === 'win' ? (h.kind === 'tartarus' ? 'Back safe' : 'Victory') : sum.outcome === 'interrupt' ? 'Interrupted' : sum.outcome === 'lose' ? 'Defeated' : 'Retreated';
    const o = overlay(`<div class="g-results">
      <p class="g-kicker">${esc(h.date?.md || '')} · ${h.kind === 'tartarus' ? 'Back from Tartarus' : 'The Dark Hour'}${sum.simulated ? ' · simulated' : ''}</p>
      <h2 class="g-res-word">${esc(word)}<small>Results</small></h2>
      ${exp.length ? `<ul class="g-exp">${exp.map(([m, x]) => `<li><b>${esc(G.name(m))}${lv[m] ? `<small>Lv ${lv[m]}</small>` : ''}</b><span>+${x} EXP</span></li>`).join('')}</ul>` : ''}
      <ul class="g-gains">${sum.yen ? `<li class="yen">${sum.yen > 0 ? '+' : '−'}¥${Math.abs(sum.yen).toLocaleString()}</li>` : ''}${sum.items.map(([k, n]) => `<li>${esc(G.D.battle.items?.[k]?.name || k)} ${n > 0 ? `×${n}` : `used ×${-n}`}</li>`).join('')}${sum.bosses.length ? `<li class="boss">Cleared: ${sum.bosses.map(b => esc(opName(b))).join(', ')}</li>` : ''}${sum.fragments.map(f => `<li class="frag">Memory fragment: ${esc(G.fragmentInfo(f).title)}</li>`).join('')}${h.kind === 'tartarus' && S().tartarus.maxFloor ? `<li>Best floor: ${S().tartarus.maxFloor}F</li>` : ''}</ul>
      <div class="g-row"><button type="button" class="g-btn pink" data-close>Continue ▸</button></div></div>`, 'g-results-ov', done);
    return o;
  }
  function resumePending() {
    const p = S().pending;
    if (!p) return run();
    if (p.snap) { if (p.music) SC.Music.set(p.music); return playCtx(p.ctx, { onDone: () => afterCtx(p.ctx) }, p.snap); }
    S().pending = null;
    if (p.ctx.type === 'tartarus') { S().spent[`${S().day}-evening`] = 'tartarus'; G.save(); return advance(); }
    run();
  }
  function afterCtx(ctx) {
    if (ctx.type === 'prologue') return endPrologue();
    if (ctx.type === 'door') { G.markDoor(ctx.key); return run(); }
    if (ctx.type === 'event') { G.markEvent(ctx.id); return afterEvent(ctx.id); }
    if (ctx.type === 'op') { const i = G.dayInfo(); i.ops.forEach(o => { S().flags[`op-${o.op}`] = true; }); S().spent[`${S().day}-evening`] = 'op'; G.save(); return advance(); }
    run();
  }
  function afterEvent(id) {
    const e = G.D.events.find(x => x.id === id);
    if (e && (G.hasBattle(e.scene) || e.slot === 'darkhour' || e.consumes)) { S().spent[`${S().day}-${S().slot}`] = `ev:${id}`; G.save(); return advance(); }
    run();
  }

  /* ── The loop ── */
  let cardDay = null;
  function advance() { const r = G.nextSlot(); if (r.end) return endScreen(); run(); }
  function run() {
    flushToasts();
    if (document.querySelector('.gs:not(.out)')) return;
    const s = S();
    if (s.phase === 'title' || !s.started) return titleScreen();
    if (dh) return;
    if (s.handoff) return resumeHandoff();
    if (s.phase === 'prologue') return startPrologue();
    paintHud();
    if (s.pending) return resumePending();
    // The bad ending (route-bad) or a scene's { end } stops the calendar: on to the last night.
    if (G.endingDue()) { G.jumpToEnd(); cardDay = S().day; }
    const info = G.dayInfo();
    if (s.slot === 'early' && cardDay !== s.day) { cardDay = s.day; show('', 'is-card'); return dateCard(run); }
    const due = G.dueEvent();
    if (due) return playDue(due);
    const daily = G.dailyLife();
    if (daily) return playDailyLife(daily, info);
    switch (s.slot) {
      case 'early': return earlyMorning(info);
      case 'morning': return info.exam ? examSession(info) : classPeriod('morning', info);
      case 'lunch': return lunch(info);
      case 'afternoon': return info.exam ? segment({ slot: 'afternoon', bg: 'gekkoukan-classroom-day', text: 'The afternoon was a blur of answer keys being passed back and forth and people comparing what they wrote, which never helped anyone.' }) : classPeriod('afternoon', info);
      case 'after': return G.freeSlotSpent('after') ? advance() : goOut('after');
      case 'evening': return G.freeSlotSpent('evening') ? advance() : evening(info);
      case 'late': return lateNight(info);
      default: return advance();
    }
  }
  function playDailyLife(e, info) {
    const slot = S().slot;
    return SC.play({ ...e, scene: [{ bg: e.bg }, ...e.scene], label: 'Everyday life', onDone: () => {
      G.finishDailyLife(e.id);
      if (slot === 'evening') return evening(info);
      const exam = slot === 'early' && G.D.cal.exams.find(x => x.results === info.md);
      if (exam) return resultsBoard(exam.id, advance);
      advance();
    } });
  }
  function playDue(due) {
    if (due.kind === 'event') { S().pending = null; return playCtx({ type: 'event', id: due.ev.id }, { onDone: () => { G.markEvent(due.ev.id); afterEvent(due.ev.id); } }); }
    if (due.kind === 'link') return playLink(due.link, true);
    if (due.kind === 'op') return playCtx({ type: 'op', md: G.dayInfo().md }, { onDone: () => afterCtx({ type: 'op' }) });
    if (due.kind === 'christmas') return christmasEve();
    if (due.kind === 'door') return playCtx({ type: 'door', key: due.key }, { onDone: () => { G.markDoor(due.key); run(); } });
    if (due.kind === 'farewell') return SC.play({ scene: G.farewellScene(due.link), place: G.linkPlace(due.link), time: 'Early Morning', label: due.link.short, link: due.link.id, onDone: () => run() });
  }

  /* ── Christmas Eve (P3P): who will you spend it with? ── */
  function christmasEve() {
    const opts = G.christmasOptions();
    const alone = () => SC.play({ scene: [{ n: 'Christmas Eve. The lounge had a paper tree, a cake that leaned, and a CD that skipped, and Solar spent the evening there with whoever wandered through, which was most of them, and that was its own kind of present.' }], place: 'Iwatodai Dorm · Lounge', time: 'Evening', music: 'tender', onDone: () => advance() });
    if (!opts.length) { G.pickChristmas(null); return alone(); }
    setBg('iwatodaidorm-livingroom-night');
    screenMusic('dorm');
    show(`<section class="g-dorm g-xmas"><div class="g-map-head"><p class="g-kicker">12/24 · Christmas Eve</p><h1>Who will you spend Christmas Eve with?</h1>
      <p class="g-map-sub">Snow on the windows. Your phone has been buzzing all afternoon.</p></div>
      <div class="g-nights">${opts.map(l => { const pic = G.portrait(l.id, 'happy'); return `<button type="button" class="g-night who" data-x="${l.id}">${pic ? `<i class="g-xmas-pic"><img src="${pic}" alt=""></i>` : ''}<b>${esc(l.short)}</b><small>${esc(l.arcana)}</small></button>`; }).join('')}
        <button type="button" class="g-night" data-x="alone"><b>Spend it alone</b><small>Stay in. The lounge is warm.</small></button></div></section>`, 'is-dorm');
    main.querySelector('[data-x]')?.focus({ preventScroll: true });
    main.querySelectorAll('[data-x]').forEach(b => b.addEventListener('click', () => {
      const l = G.pickChristmas(b.dataset.x === 'alone' ? null : b.dataset.x);
      G.sfx('femc-click');
      if (!l) return alone();
      const c = l.christmas;
      SC.play({ scene: c.scene || [], place: c.place || G.linkPlace(l), time: c.time || 'Evening', music: c.music || 'tender', title: 'Christmas Eve', label: l.short, link: l.id, onDone: () => advance() });
    }));
  }

  /* ── Title ── */
  const autoLine = () => { let x = null; try { x = G.slotInfo(JSON.parse(localStorage.getItem(G.KEY))); } catch (e) {} return x ? `${x.md} ${x.day} · ${x.slot}${x.lv ? ` · Lv ${x.lv}` : ''}${x.fight ? ' · in the Dark Hour' : ''}` : ''; };
  function titleScreen() {
    hud.hidden = true;
    setBg(null);
    screenMusic('title');
    const has = G.hasSave();
    show(`<section class="g-title">
      <img class="g-title-art" src="${G.base}assets/femc/title/keyart.webp" alt="">
      <div class="g-title-copy"><p class="g-kicker">Persona 3 · FEMC</p><h1>FEMC<small>a year that made a place for her</small></h1>
      <div class="g-title-menu" role="menu">${has ? '<button type="button" role="menuitem" data-t="continue">Continue</button>' : ''}<button type="button" role="menuitem" data-t="new">New Game</button><button type="button" role="menuitem" data-t="load">Load</button><button type="button" role="menuitem" data-t="settings">Settings</button></div>
      <p class="g-title-foot">${has ? `Autosave · ${esc(autoLine())}` : 'No save yet'}</p></div>
      <a class="g-title-practice" href="femc-battle.html?practice=1" title="Practice mode: the battle game on its own, with its own save">Practice</a></section>`, 'is-title');
    main.querySelector('.g-title-menu button')?.focus({ preventScroll: true });
    main.querySelectorAll('[data-t]').forEach(b => b.addEventListener('click', () => {
      const t = b.dataset.t;
      if (t === 'continue') { if (S().phase === 'title') S().phase = 'play'; G.save(); cardDay = null; run(); }
      if (t === 'new') {
        if (has) {
          const o = overlay(`<h2>New game?</h2><p>This replaces the autosave. Your three save slots stay.</p><div class="g-row"><button type="button" class="g-btn pink" data-y>Start over</button><button type="button" class="g-btn" data-close>Cancel</button></div>`);
          o.el.querySelector('[data-y]').addEventListener('click', () => { o.close(); G.newGame(); run(); });
        } else { G.newGame(); run(); }
      }
      if (t === 'load') openSaves(true);
      if (t === 'settings') openSettings();
    }));
  }

  /* ── Prologue ── */
  function startPrologue() {
    hud.hidden = true;
    show('', 'is-scene');
    const p = S().pending;
    if (p && p.ctx?.type === 'prologue' && p.snap) return resumePending();
    playCtx({ type: 'prologue' }, { onDone: r => { if (r.finished) endPrologue(); } });
  }
  function endPrologue() {
    const s = S();
    s.phase = 'play'; s.day = G.dayOf(G.D.cal.firstFree); s.slot = 'lunch'; s.pending = null;
    cardDay = s.day;
    G.save();
    run();
  }

  /* ── Generic segment (a time of day with a line or two) ── */
  function segment({ slot, bg, place, text, sub, extra = '', next = advance, button = 'Continue', music }) {
    setBg(bg, /evening|late/.test(slot) ? 'night' : '');
    if (music) screenMusic(music);
    show(`<section class="g-seg">
      <p class="g-kicker">${esc(G.slotName(slot))}${place ? ` · ${esc(place)}` : ''}</p>
      <div class="g-seg-box">${text ? `<p class="g-seg-text">${esc(text)}</p>` : ''}${sub ? `<p class="g-seg-sub">${sub}</p>` : ''}${extra}</div>
      <div class="g-row g-seg-next"><button type="button" class="g-btn pink" data-next>${esc(button)} ▸</button></div></section>`, 'is-seg');
    const b = main.querySelector('[data-next]');
    b?.focus({ preventScroll: true });
    b?.addEventListener('click', () => { if (b.disabled) return; b.disabled = true; next(); });
    return main;
  }
  const cap = t => String(t || '').replace(/^./, c => c.toUpperCase());
  const pick = (arr, seed) => arr[Math.floor(Math.abs(Math.sin(seed * 9.13)) * arr.length) % arr.length];
  function ambient(kind) {
    const m = G.dayInfo().date.getMonth() + 1;
    const pool = (G.D.q.ambient?.[kind] || []).filter(a => !a.months || a.months.includes(m));
    return pool.length ? pick(pool, S().day + kind.length).t : '';
  }
  function earlyMorning(info) {
    screenMusic('school');
    if (info.type === 'trip') return segment({ slot: 'early', bg: 'yakushima-beach', place: info.trip.place, text: info.trip.note, button: 'The day goes by', next: () => { S().slot = 'late'; G.save(); run(); } });
    if (info.type === 'off') return segment({ slot: 'early', bg: 'solar-dormroom-day', place: 'Iwatodai Dorm', text: info.holiday ? `${info.holiday}. No school. The dorm was quiet in the way it only was on days off, everybody sleeping in except Akihiko, who never slept in, and Mitsuru, who might not sleep at all.` : info.brk ? `${info.brk.name}. The day was hers.` : 'Sunday. No school, no alarm, and a whole day that belonged to nobody but her.' });
    const exam = G.D.cal.exams.find(e => e.results === info.md);
    const walk = info.weather === 'rain' ? 'Rain on the monorail windows, umbrellas everywhere.' : info.weather === 'snow' ? 'Snow on the rails. The monorail crept across the bay like it was being careful.' : 'The monorail across the bay, the city falling away behind it.';
    const chatter = ambient('morning');
    return segment({ slot: 'early', bg: 'train-car-inside', place: 'Monorail', text: walk, sub: chatter ? `<i>“${esc(chatter)}”</i>` : '', next: exam ? () => resultsBoard(exam.id, advance) : advance });
  }
  function lunch(info) {
    const line = ambient('lunch');
    segment({ slot: 'lunch', bg: 'school-hallway', place: 'Gekkoukan High', text: info.weather === 'rain' ? 'Lunch indoors, the hallway loud with everybody who’d meant to eat on the roof.' : 'Lunch. The roof was crowded and the cafeteria was worse.', sub: line ? `<i>“${esc(line)}”</i>` : '' });
  }
  function classPeriod(slot, info) {
    screenMusic('school');
    const cond = G.D.stats.conditions[S().condition];
    const seed = Math.abs(Math.sin((S().day + 1) * (slot === 'morning' ? 3.7 : 5.3)));
    const asks = seed < (slot === 'morning' ? 0.42 : 0.3);
    const q = asks ? G.classQuestion() : null;
    const T = G.D.q.teachers || {};
    if (q && seed * 1.7 % 1 > cond.doze) {
      const t = T[q.teacher] || { name: 'The teacher', subject: '' };
      const box = segment({ slot, bg: 'gekkoukan-classroom-day', place: t.subject || 'Class', text: `${cap(t.name)} turned from the board and looked straight at her.`, extra: `<div class="g-quiz"><p class="g-quiz-q"><b>${esc(t.name)}</b>${esc(q.q)}</p><div class="g-quiz-a">${q.a.map((a, i) => `<button type="button" class="g-btn" data-a="${i}">${esc(a)}</button>`).join('')}</div><p class="g-quiz-r" hidden></p></div>`, button: 'Continue' });
      const next = box.querySelector('[data-next]'); next.hidden = true;
      box.querySelectorAll('[data-a]').forEach(b => b.addEventListener('click', () => {
        const right = G.answerClass(q, +b.dataset.a);
        box.querySelectorAll('[data-a]').forEach(x => { x.disabled = true; if (+x.dataset.a === q.correct) x.classList.add('right'); });
        if (!right) b.classList.add('wrong');
        const r = box.querySelector('.g-quiz-r'); r.hidden = false; r.textContent = right ? (q.right || 'Correct.') : (q.wrong || 'Not quite.');
        G.sfx(right ? 'femc-rankup' : 'femc-back');
        next.hidden = false; next.focus({ preventScroll: true });
      }));
      return;
    }
    if (G.settings().quickClass && !(seed < cond.doze)) return advance();
    const dozed = Math.abs(Math.sin(S().day * 7.7 + slot.length)) < cond.doze;
    const t = pick(Object.values(T), S().day + slot.length) || { name: 'The teacher', quirk: '' };
    const QUIET = ['Chalk dust, the clock above the door, and the specific drone of a lesson that had decided to take its time.', 'She took notes in neat small handwriting she didn’t remember learning, and the period went by.', 'Someone behind her was passing notes. The teacher pretended not to see. The period went by anyway.', 'Rain or sun outside, the classroom had its own weather, warm and stale and slow.'];
    const text = dozed ? 'The lecture went somewhere warm and far away, and so did she. When she lifted her head, the board was full and her notes were a single long line where the pen had slid.' : pick(QUIET, S().day * 2 + slot.length);
    const listened = !dozed && Math.abs(Math.sin(S().day * 2.1 + slot.length)) < 0.3;
    if (listened) G.addStat('academics', 1);
    segment({ slot, bg: 'gekkoukan-classroom-day', place: t.subject || 'Class', text, sub: dozed ? '' : `<b>${esc(cap(t.name))}.</b> ${esc(t.quirk || '')}${listened ? ' <i>She caught something worth writing down.</i>' : ''}` });
  }
  function lateNight(info) {
    screenMusic('dorm');
    const t = S().tonight;
    const text = t === 'battled' ? 'Back from the tower, she fell into bed with her boots half off. Her body felt every floor.' : t === 'rest' ? 'She was asleep before her head finished settling into the pillow.' : info.moon.full ? 'The moon outside was enormous. She lay awake for a while and listened to the dorm be quiet.' : 'The dorm settled around her. Somewhere down the hall, a door, and then nothing.';
    segment({ slot: 'late', bg: 'solar-dormroom-night', place: "Solar's Room", text, button: 'Sleep', next: () => { const r = G.sleep(); if (r.end) return endScreen(); run(); } });
  }
  // The end of the year: the ending's name, credits, and New Game+ (social stats, half the yen, the Compendium and books carry
  // over; the battle game carries levels and the tree into the new playthrough).
  function endScreen() {
    hud.hidden = true;
    setBg('iwatodaidorm-roof-night', 'night');
    screenMusic('title');
    const name = G.endingName(), clears = G.recordClear(), seen = [...new Set(clears.map(c => c.ending))];
    const met = S().met.length, frags = S().fragments.length, maxed = Object.values(G.LINKS).filter(l => G.progress(l.id).rank >= 10).length;
    show(`<section class="g-seg g-end"><p class="g-kicker">1/31 · the last minutes of the last Dark Hour</p>
      <div class="g-seg-box"><p class="g-end-name">ENDING · ${esc(name)}</p>
        <p class="g-seg-sub">${frags} memory fragment${frags === 1 ? '' : 's'} · ${maxed} bond${maxed === 1 ? '' : 's'} at MAX · ${met} people met${S().ngp ? ` · New Game+ ${S().ngp}` : ''}</p>
        <div class="g-credits"><p><b>FEMC</b> a year that made a place for her</p><p>Story, characters and worlds · Kat</p><p>Persona 3 · ATLUS (the year it borrows)</p><p>Endings seen · ${seen.map(esc).join(' · ')}</p></div></div>
      <div class="g-row"><button type="button" class="g-btn pink" data-t="ngp">New Game+</button><button type="button" class="g-btn" data-t="title">Back to title</button></div></section>`, 'is-seg');
    main.querySelector('[data-t=ngp]').addEventListener('click', () => { G.newGamePlus(); cardDay = null; run(); });
    main.querySelector('[data-t=title]').addEventListener('click', () => { S().phase = 'title'; G.save(); run(); });
  }

  /* ── Exams ── */
  function examSession(info) {
    screenMusic('exam');
    const e = info.exam, qs = G.examQuestions(e);
    const name = G.D.q.exams[e.id]?.name || 'Exams';
    let k = 0;
    setBg('gekkoukan-classroom-day');
    const step = () => {
      const q = qs[k];
      if (!q) return segment({ slot: 'morning', bg: 'gekkoukan-classroom-day', place: name, text: e.index === e.count - 1 ? 'Pencils down. The last exam was over, and the whole room let out a breath it had been holding for four days.' : `Pencils down. Day ${e.index + 1} of ${e.count} done.`, next: () => { S().slot = 'afternoon'; G.save(); advance(); } });
      show(`<section class="g-exam">
        <p class="g-kicker">${esc(name)} · Day ${e.index + 1} of ${e.count}</p>
        <div class="g-exam-card"><p class="g-exam-n">${esc(q.subject || '')}<span>Q${k + 1} / ${qs.length}</span></p><p class="g-exam-q">${esc(q.q)}</p>
        <div class="g-exam-a">${q.a.map((a, i) => `<button type="button" class="g-btn" data-a="${i}"><i>${'ABCD'[i]}</i>${esc(a)}</button>`).join('')}</div></div></section>`, 'is-exam');
      main.querySelector('[data-a]')?.focus({ preventScroll: true });
      main.querySelectorAll('[data-a]').forEach(b => b.addEventListener('click', () => { G.answerExam(e, q, +b.dataset.a); G.sfx('femc-click'); k += 1; step(); }));
    };
    step();
  }
  function resultsBoard(id, done) {
    screenMusic('results');
    const r = G.postExam(id);
    const name = G.D.q.exams[id]?.name || 'Exams';
    const top = r.board.slice(0, 10);
    const mine = r.place > 10 ? `<li class="me gap"><b>${r.place}</b><span>Solar</span><i>${r.board[r.place - 1].score}</i></li>` : '';
    setBg('school-hallway');
    show(`<section class="g-board"><p class="g-kicker">${esc(name)} · results</p><h2>Third-year rankings</h2>
      <ol class="g-board-list">${top.map((b, i) => `<li class="${b.me ? 'me' : ''}"><b>${i + 1}</b><span>${esc(b.name)}</span><i>${b.score}</i></li>`).join('')}${mine}</ol>
      <p class="g-board-note">Solar answered ${r.right} of ${r.total} correctly. ${r.place <= 3 ? 'People she didn’t know said her name in the hallway all day.' : r.place <= 10 ? 'A few people looked at her differently.' : 'Nobody said anything, which was its own kind of review.'}</p>
      <div class="g-row"><button type="button" class="g-btn pink" data-next>Continue ▸</button></div></section>`, 'is-board');
    main.querySelector('[data-next]').addEventListener('click', done);
  }

  /* ── Go Out map (After School / Daytime, or out at night) ── */
  function goOut(slot, areaId) {
    screenMusic(slot === 'evening' ? 'evening' : 'after');
    const info = G.dayInfo();
    const areas = G.D.places.areas.filter(a => a.slots.includes(slot) && !(a.schoolOnly && info.type !== 'school'));
    if (areaId) return areaView(slot, G.areaById(areaId));
    setBg(slot === 'evening' ? 'outside-night' : 'paulownia-mall', slot === 'evening' ? 'night' : '');
    show(`<section class="g-map"><div class="g-map-head"><p class="g-kicker">Iwatodai · ${esc(G.slotName(slot, info))}</p><h1>${slot === 'evening' ? 'Out tonight' : 'Go out'}</h1>
      <p class="g-map-sub">${slot === 'evening' ? 'Where to tonight?' : 'Where do you want to spend this time?'} People keep their own schedules.</p>${slot === 'evening' ? '<button type="button" class="g-btn small" data-back>‹ Back to the dorm</button>' : ''}</div>
      <div class="g-areas">${areas.map(a => {
        const people = G.linksAt(a.id, slot).filter(l => G.linkStatus(l, S().day, slot).ok);
        const n = people.length + G.tracesAt(a.id, slot).length;
        const img = slot === 'evening' && a.bgEvening ? a.bgEvening : a.bg;
        return `<button type="button" class="g-area${n ? ' busy' : ''}${a.home ? ' home' : ''}${slot === 'evening' ? ' late' : ''}" data-area="${a.id}" style="--pic:url('${bgUrl(img)}')">
          <b>${esc(a.name)}</b><small>${esc(a.blurb)}</small>${n ? `<em>${n} ${n === 1 ? 'person' : 'people'}</em>` : ''}</button>`;
      }).join('')}</div></section>`, 'is-map');
    main.querySelector('[data-back]')?.addEventListener('click', () => evening(info));
    main.querySelectorAll('[data-area]').forEach(b => b.addEventListener('click', () => {
      const a = G.areaById(b.dataset.area);
      if (a.home) { S().spent[`${S().day}-${slot}`] = 'home'; G.save(); return segment({ slot, bg: 'iwotodaidorm-outside', place: 'Iwatodai Dorm', text: 'She went straight home and let the afternoon go by without asking anything of it.', next: advance }); }
      areaView(slot, a);
    }));
  }
  function areaView(slot, a) {
    const info = G.dayInfo();
    setBg(slot === 'evening' && a.bgEvening ? a.bgEvening : a.bg, slot === 'evening' && !a.bgEvening ? 'night' : '');
    const people = G.linksAt(a.id, slot), traces = G.tracesAt(a.id, slot);
    const acts = G.D.places.activities.filter(x => x.area === a.id && x.slots.includes(slot));
    const jobs = G.D.jobs.filter(j => j.area === a.id && G.jobVisible(j) && j.slot === slot);
    const personRow = l => {
      const st = G.linkStatus(l, S().day, slot), met = G.isMet(l.id), p = G.progress(l.id);
      const pic = met ? G.portrait(l.id, 'neutral') : null;
      const note = st.ok ? (met ? (st.after ? 'MAX · Spend time together' : p.ready === p.rank && p.rank > 0 ? 'Hang out' : `Rank ${p.rank} ▸ ${p.rank + 1}`) : 'Someone you haven’t met') : st.reason === 'needs' ? `Needs ${st.needs}` : st.reason === 'later' ? 'Busy today' : 'Busy right now';
      return `<button type="button" class="g-who" data-link="${l.id}"${st.ok ? '' : ' disabled'}><i>${pic ? `<img src="${pic}" alt="">` : '?'}</i><span><b>${esc(G.linkName(l))}</b><small>${esc(met ? `${l.arcana} · ${note}` : (st.ok && l.approach ? l.approach : note))}</small></span></button>`;
    };
    // Something a link who has left behind (afterMax traces).
    const traceRow = t => { const pic = G.portrait(t.link.id, 'neutral'); return `<button type="button" class="g-who trace" data-trace="${t.link.id}"${G.freeSlotSpent(slot) ? ' disabled' : ''}><i>${pic ? `<img src="${pic}" alt="">` : '✦'}</i><span><b>${esc(t.entry.place ? t.entry.place.split(' · ').pop() : t.link.short)}</b><small>${esc(`Something of ${t.link.short}'s is still here.`)}</small></span></button>`; };
    const actRow = x => {
      const ok = G.activityOk(x, slot);
      const cost = x.cost ? `¥${x.cost.toLocaleString()}` : x.shop ? 'Shop' : 'Free';
      const preview = G.activityInfo(x);
      return `<button type="button" class="g-act" data-act="${x.id}"${ok.ok ? '' : ' disabled'}><span><b>${esc(x.name)}</b><small>${esc(x.spot)}${ok.ok ? '' : ` · ${esc(ok.why)}`}</small><small class="g-act-benefit">${esc(preview.benefit)} ${esc(preview.time)}</small></span><em>${esc(cost)}</em></button>`;
    };
    const jobRow = j => {
      const st = G.jobState(j.id), ok = G.jobOk(j, slot);
      const label = st.hired ? `Work a shift · ¥${j.pay.toLocaleString()}` : 'Ask about work';
      return `<button type="button" class="g-act job" data-job="${j.id}"${st.hired && !ok.ok ? ' disabled' : ''}><span><b>${esc(j.name)}</b><small>${esc(j.role)}${st.hired && !ok.ok ? ` · ${esc(ok.why)}` : ''}</small></span><em>${esc(label)}</em></button>`;
    };
    const spent = G.freeSlotSpent(slot);
    show(`<section class="g-areaview"><div class="g-map-head"><button type="button" class="g-btn small" data-back>‹ Map</button><p class="g-kicker">${esc(G.slotName(slot, info))}</p><h1>${esc(a.name)}</h1></div>
      ${spent ? '<p class="g-note">You’ve already spent this time.</p>' : ''}
      <div class="g-cols">
        ${people.length || traces.length ? `<div class="g-col"><h2>People</h2>${people.map(personRow).join('')}${traces.map(traceRow).join('')}</div>` : ''}
        ${acts.length ? `<div class="g-col"><h2>Things to do</h2>${acts.map(actRow).join('')}</div>` : ''}
        ${jobs.length ? `<div class="g-col"><h2>Work</h2>${jobs.map(jobRow).join('')}</div>` : ''}
        ${!people.length && !traces.length && !acts.length && !jobs.length ? '<p class="g-note">Nothing much going on here right now.</p>' : ''}
      </div></section>`, 'is-area');
    main.querySelector('[data-back]').addEventListener('click', () => goOut(slot));
    main.querySelectorAll('[data-link]').forEach(b => b.addEventListener('click', () => playLink(G.LINKS[b.dataset.link])));
    main.querySelectorAll('[data-trace]').forEach(b => b.addEventListener('click', () => playLink(G.LINKS[b.dataset.trace], false, G.nextTrace(G.LINKS[b.dataset.trace]))));
    main.querySelectorAll('[data-act]').forEach(b => b.addEventListener('click', () => previewActivity(G.D.places.activities.find(x => x.id === b.dataset.act), slot, a)));
    main.querySelectorAll('[data-job]').forEach(b => b.addEventListener('click', () => previewJob(G.D.jobs.find(x => x.id === b.dataset.job), slot, a)));
  }
  function previewActivity(x, slot, a) {
    const preview = G.activityInfo(x), ok = G.activityOk(x, slot);
    const o = overlay(`<p class="g-kicker">${esc(a.name)} · ${esc(x.spot)}</p><h2>${esc(x.name)}</h2>
      <p>${esc(preview.benefit)}</p><ul class="g-gains"><li>${esc(preview.cost)}</li><li>${esc(preview.time)}</li></ul>
      ${ok.ok ? '' : `<p class="g-warn">${esc(ok.why)}</p>`}
      <div class="g-row"><button type="button" class="g-btn pink" data-confirm${ok.ok ? '' : ' disabled'}>${x.shop ? 'Browse shop' : 'Spend time here'}</button><button type="button" class="g-btn" data-close>Back</button></div>`, 'g-activity-preview');
    o.el.querySelector('[data-confirm]').addEventListener('click', () => {
      o.close();
      if (!G.activityOk(x, slot).ok) return areaView(slot, a);
      doActivity(x, slot, a);
    });
  }
  function doActivity(x, slot, a) {
    if (x.shop) return openShop(x.shop, () => areaView(slot, a));
    const r = G.doActivity(x);
    SC.play({ scene: [{ n: r.text }], place: r.place, time: slot === 'evening' ? 'Evening' : G.slotName(slot), onDone: () => advance() });
  }
  function previewJob(j, slot, a) {
    if (!G.jobState(j.id).hired) return jobFlow(j, slot, a);
    const preview = G.activityInfo(j);
    const o = overlay(`<p class="g-kicker">Part-time job</p><h2>${esc(j.name)}</h2><p>${esc(j.role)}</p>
      <ul class="g-gains"><li>Earn ¥${j.pay.toLocaleString()}</li><li>${esc(preview.benefit)}</li><li>Uses this time slot.</li></ul>
      <div class="g-row"><button type="button" class="g-btn pink" data-confirm>Work a shift</button><button type="button" class="g-btn" data-close>Back</button></div>`, 'g-activity-preview');
    o.el.querySelector('[data-confirm]').addEventListener('click', () => { o.close(); if (G.jobOk(j, slot).ok) jobFlow(j, slot, a); else areaView(slot, a); });
  }
  function jobFlow(j, slot, a) {
    const st = G.jobState(j.id);
    if (!st.hired) {
      const why = G.lacking(j.needs);
      const o = overlay(`<p class="g-kicker">Part-time job</p><h2>${esc(j.name)}<small>${esc(j.role)}</small></h2><p>${esc(j.blurb)}</p>
        <ul class="g-gains"><li>¥${j.pay.toLocaleString()} a shift</li><li>${Object.keys(j.stats).map(k => G.D.stats.stats[k].name).join(', ')}</li><li>${j.slot === 'evening' ? 'Evenings' : 'Daytime'} · ${j.days.map(d => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d]).join(', ')}</li></ul>
        ${why ? `<p class="g-warn">They want someone with ${esc(why)}.</p>` : ''}
        <div class="g-row">${why ? '' : '<button type="button" class="g-btn pink" data-y>Take the job</button>'}<button type="button" class="g-btn" data-close>${why ? 'Maybe later' : 'Not now'}</button></div>`);
      o.el.querySelector('[data-y]')?.addEventListener('click', () => { G.hire(j); o.close(); G.toast('job', `Hired at ${j.name}.`); G.save(); areaView(slot, a); });
      return;
    }
    const pk = G.shiftScene(j);
    SC.play({ scene: pk.scene, place: j.place, time: slot === 'evening' ? 'Evening' : G.slotName(slot), title: pk.beat ? null : null, label: j.name, onDone: () => { G.finishShift(j, pk); advance(); } });
  }

  /* ── Links ── */
  function playLink(l, forcedStory, trace) {
    const p = G.progress(l.id);
    const pick = G.linkScene(l, trace);
    const r = pick.r;
    const rank = l.ranks[r] || {};
    SC.play({
      scene: pick.scene, place: pick.place, time: pick.time || rank.time || (S().slot === 'evening' ? 'Evening' : G.slotName(S().slot)),
      title: pick.kind === 'rank' || pick.kind === 'after' || pick.kind === 'trace' ? pick.title || null : null, label: pick.kind === 'rank' ? `${l.short} · Rank ${r + 1}` : pick.kind === 'after' ? `${l.short} · MAX` : l.short, link: l.id,
      music: pick.music || null,
      onBattle: (b, snap, cont) => battleCard(b, null, cont),
      onDone: res => {
        const out = G.finishLink(l, pick.kind, r, res.gained);
        const done = () => { G.save(); advance(); };
        if (out.reversed) return SC.rankUp(l, out.rank, done, true);
        if (out.repaired || out.after) return done();
        const after = () => (out.up ? SC.rankUp(l, out.rank, done) : done());
        if (out.req) SC.meter(l, r, out.from, out.to, out.req, out.up, after); else after();
        void p; void forcedStory;
      }
    });
  }

  /* ── The dorm at night ── */
  function evening(info) {
    screenMusic('dorm');
    setBg('iwatodaidorm-livingroom-night');
    const s = S();
    const tt = G.tartarusOk();
    const homeLinks = Object.values(G.LINKS).filter(l => G.areaById(G.homeOf(l).area)?.id === 'dorm' || /^Iwatodai Dorm/.test(G.homeOf(l).area || '')).filter(l => G.linkStatus(l, s.day, 'evening').ok);
    const traces = G.tracesAt('dorm', 'evening');
    const book = s.books.owned.find(b => !s.books.done.includes(b));
    const jobs = G.D.jobs.filter(j => G.jobState(j.id).hired && j.slot === 'evening');
    const opt = (id, label, sub, ok = true, cls = '') => `<button type="button" class="g-night ${cls}" data-n="${id}"${ok ? '' : ' disabled'}><b>${label}</b><small>${esc(sub)}</small></button>`;
    show(`<section class="g-dorm"><div class="g-map-head"><p class="g-kicker">Evening · Iwatodai Dorm</p><h1>Tonight</h1>
      <p class="g-map-sub">${info.moon.days != null && info.moon.days <= 3 && !info.moon.full ? `The moon is almost full. ${info.moon.days} day${info.moon.days === 1 ? '' : 's'} to go.` : 'The lounge smells like instant ramen. What now?'}</p></div>
      <div class="g-nights">
        ${s.unlocked.tartarus ? opt('tartarus', 'Tartarus', tt.ok ? `Climb tonight. Solar will be tired tomorrow.${s.condition === 'tired' ? ' She’s already tired.' : ''}` : tt.why, tt.ok, 'tt') : ''}
        ${opt('study', 'Study', 'Academics', true)}
        ${book ? opt('read', 'Read', G.bookById(book)?.name || 'A book') : ''}
        ${opt('rest', 'Rest', s.condition === 'good' || s.condition === 'great' ? 'Go to bed early.' : 'Shake off being ' + G.D.stats.conditions[s.condition].name.toLowerCase() + '.')}
        ${jobs.map(j => { const ok = G.jobOk(j, 'evening'); return opt(`job:${j.id}`, `Work · ${esc(j.name)}`, ok.ok ? `¥${j.pay.toLocaleString()}` : ok.why, ok.ok); }).join('')}
        ${homeLinks.map(l => opt(`link:${l.id}`, `${esc(G.linkName(l))}`, `${l.arcana} · ${G.homeOf(l).spot ? G.homeOf(l).spot.toLowerCase() : 'in the lounge'}`, true, 'who')).join('')}
        ${traces.map(t => opt(`trace:${t.link.id}`, esc(t.entry.place ? t.entry.place.split(' · ').pop() : t.link.short), `Something of ${t.link.short}'s is still here.`, true, 'who trace')).join('')}
        ${opt('out', 'Go out', 'Iwatodai at night')}
      </div></section>`, 'is-dorm');
    main.querySelectorAll('[data-n]').forEach(b => b.addEventListener('click', () => nightChoice(b.dataset.n, info)));
  }
  function nightChoice(n, info) {
    const s = S();
    const spend = tag => { s.spent[`${s.day}-evening`] = tag; G.save(); };
    if (n === 'study') {
      const d = G.D.places.dorm.study;
      G.addStats(info.weather === 'rain' ? { academics: d.stats.academics + (d.rain?.academics || 0) } : d.stats);
      spend('study');
      return SC.play({ scene: [{ n: pick(d.lines, s.day) }], place: "Iwatodai Dorm · Solar's Room", time: 'Evening', onDone: advance });
    }
    if (n === 'rest') { s.tonight = 'rest'; spend('rest'); return SC.play({ scene: [{ n: pick(G.D.places.dorm.rest.lines, s.day) }], place: "Iwatodai Dorm · Solar's Room", time: 'Evening', onDone: advance }); }
    if (n === 'read') { const r = G.readTonight(); return SC.play({ scene: [{ n: r.finished ? `She read the last chapter of ${r.book.name} and closed it, and sat with it in her lap for a while.` : `She read a chapter of ${r.book.name}, then another, until the words started sliding.` }], place: "Iwatodai Dorm · Solar's Room", time: 'Evening', onDone: advance }); }
    if (n === 'out') return goOut('evening');
    if (n.startsWith('job:')) return jobFlow(G.D.jobs.find(j => j.id === n.slice(4)), 'evening', G.areaById(G.D.jobs.find(j => j.id === n.slice(4)).area));
    if (n.startsWith('link:')) return playLink(G.LINKS[n.slice(5)]);
    if (n.startsWith('trace:')) return playLink(G.LINKS[n.slice(6)], false, G.nextTrace(G.LINKS[n.slice(6)]));
    if (n === 'tartarus') return tartarusPrompt();
  }
  function tartarusPrompt() {
    const s = S(), av = G.available().filter(x => x !== 'solar');
    // Only suggest companions before the first selection; an empty saved team is intentional.
    let party = Array.isArray(s.tartarus.lastParty) ? s.tartarus.lastParty.filter(x => av.includes(x)) : av.slice(0, 3);
    const nav = G.navigator();
    const o = overlay(`<div class="g-tt"><p class="g-kicker">The Dark Hour · Tartarus</p><h2>Climb tonight?<small>Floors open up to ${G.floorCap()}F · best ${s.tartarus.maxFloor || 0}F</small></h2>
      <p>Pick up to three to go in with Solar.${nav ? ` ${esc(G.name(nav))} will navigate.` : ''}</p>
      <div class="g-party"><span class="g-chip on lock">Solar</span>${av.map(m => `<button type="button" class="g-chip${party.includes(m) ? ' on' : ''}" data-m="${m}" aria-pressed="${party.includes(m)}">${esc(G.name(m))}</button>`).join('')}</div>
      ${s.condition === 'tired' ? '<p class="g-warn">Solar is already Tired. Going again will make her Sick.</p>' : ''}
      <div class="g-row"><button type="button" class="g-btn pink" data-go>Enter Tartarus</button><button type="button" class="g-btn" data-menu>Party &amp; equipment</button><button type="button" class="g-btn" data-close>Not tonight</button></div></div>`, 'g-tt-ov');
    // The field menu (party, tactics, equipment) on top; the chips here follow what it changed.
    o.el.querySelector('[data-menu]').addEventListener('click', () => {
      s.tartarus.lastParty = [...party];
      const b = G.ensureBattleSave(); if (b) { b.party = party.slice(); G.saveQuiet(); }
      window.FemcMenu?.open('party', { onClose: () => {
        party = (G.ensureBattleSave()?.party || party).filter(x => av.includes(x)).slice(0, 3);
        o.el.querySelectorAll('[data-m]').forEach(x => { const on = party.includes(x.dataset.m); x.classList.toggle('on', on); x.setAttribute('aria-pressed', on); });
        o.el.querySelector('[data-menu]')?.focus();
      } });
    });
    o.el.querySelectorAll('[data-m]').forEach(b => b.addEventListener('click', () => {
      const m = b.dataset.m;
      if (party.includes(m)) party = party.filter(x => x !== m); else if (party.length < 3) party.push(m);
      o.el.querySelectorAll('[data-m]').forEach(x => { const on = party.includes(x.dataset.m); x.classList.toggle('on', on); x.setAttribute('aria-pressed', on); });
    }));
    o.el.querySelector('[data-go]').addEventListener('click', () => {
      s.tartarus.lastParty = [...party];
      G.save();
      o.close();
      battleCard({ title: 'Tartarus', desc: `Explore Tartarus with ${['Solar', ...party.map(G.name)].join(', ')}. Climb, fight, find what's in the chests, come home before the hour ends.`, party: ['solar', ...party], forced: false }, null, () => {
        s.spent[`${s.day}-evening`] = 'tartarus';
        G.save();
        advance();
      }, 'tartarus');
    });
  }

  /* ── The field menu (menu.js): party, Personas, skills, equipment, items, status, social links, journal, calendar ── */
  function openStatus(tab) {
    if (dh || !window.FemcMenu) return;
    window.FemcMenu.open(tab === 'stats' ? 'status' : tab);
  }

  /* ── Phone ── */
  function openPhone(thread) {
    const s = S();
    const o = overlay(`<div class="g-phone"><div class="g-ph-top"><button type="button" class="g-ph-back" aria-label="Back">‹</button><b>Messages</b><button type="button" data-close aria-label="Close">✕</button></div><div class="g-ph-body"></div><div class="g-ph-reply"></div></div>`, 'g-phone-ov');
    const body = o.el.querySelector('.g-ph-body'), reply = o.el.querySelector('.g-ph-reply'), back = o.el.querySelector('.g-ph-back'), title = o.el.querySelector('.g-ph-top b');
    const tname = id => G.D.texts.threads[id] || G.name(id);
    const list = () => {
      title.textContent = 'Messages'; back.hidden = true; reply.replaceChildren();
      const latest = id => (s.phone.threads[id] || []).at(-1) || {};
      const ids = Object.keys(s.phone.threads).sort((a, b) => {
        const x = latest(a), y = latest(b);
        return (y.d ?? -1) - (x.d ?? -1) || (y.seq || 0) - (x.seq || 0) ||
          G.SLOT_ORDER.indexOf(y.slot) - G.SLOT_ORDER.indexOf(x.slot) ||
          (s.phone.unread[b] || 0) - (s.phone.unread[a] || 0);
      });
      body.innerHTML = ids.length ? ids.map(id => { const th = s.phone.threads[id], last = th[th.length - 1]; return `<button type="button" class="g-ph-row" data-th="${id}"><i>${G.portrait(id, 'neutral') ? `<img src="${G.portrait(id, 'neutral')}" alt="">` : esc(tname(id)[0])}</i><span><b>${esc(tname(id))}</b><small>${esc(last?.t || '')}</small></span>${s.phone.unread[id] ? `<em>${s.phone.unread[id]}</em>` : ''}</button>`; }).join('') : '<p class="g-note">No messages.</p>';
      body.querySelectorAll('[data-th]').forEach(b => b.addEventListener('click', () => open(b.dataset.th)));
    };
    const open = id => {
      title.textContent = tname(id); back.hidden = false;
      delete s.phone.unread[id]; G.save();
      body.innerHTML = (s.phone.threads[id] || []).map(m => `<p class="g-ph-msg ${m.from === 'solar' ? 'me' : 'them'}">${id === 'sees' && m.from !== 'solar' ? `<b>${esc(G.name(m.from))}</b>` : ''}${esc(m.t)}</p>`).join('');
      body.scrollTop = body.scrollHeight;
      reply.replaceChildren();
      const pend = s.phone.pending[id];
      const t = pend && G.D.texts.texts.find(x => x.id === pend);
      if (t) t.reply.forEach((r, i) => { const b = document.createElement('button'); b.type = 'button'; b.textContent = r.t; b.addEventListener('click', () => { G.replyText(id, i); open(id); }); reply.append(b); });
      const inv = s.phone.invite;
      if (inv && inv.link === id) {
        [['Sure, I’m free', true], ['Can’t right now', false]].forEach(([label, yes]) => {
          const b = document.createElement('button'); b.type = 'button'; b.textContent = label;
          b.addEventListener('click', () => { const l = G.answerInvite(yes); open(id); if (l) { setTimeout(() => { o.close(); playLink(l); }, 500); } });
          reply.append(b);
        });
      }
    };
    back.addEventListener('click', list);
    thread ? open(thread) : list();
  }

  /* ── Shops ── */
  function openShop(id, done) {
    const books = id === 'books';
    const shopData = books ? { name: 'Bookworms', sub: 'Used books', lines: { hi: ['Take your time, dear. The good ones are on the bottom shelf.'] } } : G.D.battle.shops?.[G.D.places.shops[id].battleShop];
    if (!shopData) { G.toast('note', 'Closed today.'); return done(); }
    const render = () => {
      const stock = books ? G.D.places.books.filter(b => !S().books.owned.includes(b.id)).map(b => ({ id: b.id, kind: 'book', name: b.name, price: b.price, desc: `${b.nights} nights · ${Object.keys(b.stats).map(k => G.D.stats.stats[k].name).join(', ')}` })) : G.shopStock(id);
      o.el.querySelector('.g-shop-list').innerHTML = stock.length ? stock.map((x, i) => `<button type="button" class="g-act" data-i="${i}"${S().yen < x.price ? ' disabled' : ''}><span><b>${esc(x.name)}</b><small>${esc(x.desc || '')}</small></span><em>¥${x.price.toLocaleString()}${!books && x.kind === 'item' && S().inventory[x.id] ? ` · own ${S().inventory[x.id]}` : ''}${!books && x.kind !== 'item' && S().gear.includes(x.id) ? ' · owned' : ''}</em></button>`).join('') : '<p class="g-note">Nothing for sale right now.</p>';
      o.el.querySelector('.g-shop-yen').textContent = `¥${S().yen.toLocaleString()}`;
      o.el.querySelectorAll('[data-i]').forEach(b => b.addEventListener('click', () => {
        const x = stock[+b.dataset.i];
        if (books) { if (S().yen >= x.price) { G.addYen(-x.price); S().books.owned.push(x.id); G.save(); } }
        else G.buy(x);
        o.el.querySelector('.g-shop-say').textContent = pick(shopData.lines?.buy || ['Thank you!'], Date.now());
        G.sfx('femc-click');
        render();
      }));
    };
    const pic = shopData.portrait ? G.portrait(shopData.portrait, 'neutral') : null;
    const o = overlay(`<div class="g-shop"${shopData.bg ? ` style="--pic:url('${G.base}${shopData.bg}')"` : ''}><div class="g-st-head"><h2>${esc(shopData.name)}<small>${esc(shopData.sub || '')}</small></h2><button type="button" class="g-btn small" data-close>Leave</button></div>
      <div class="g-shop-top">${pic ? `<img src="${pic}" alt="">` : ''}<p class="g-shop-say">${esc(pick(shopData.lines?.hi || ['Welcome.'], S().day))}</p><b class="g-shop-yen"></b></div>
      <p class="g-note small">${books ? 'Read them at the dorm in the evening.' : 'Whatever you buy goes with you into Tartarus.'}</p><div class="g-shop-list"></div></div>`, 'g-shop-ov', done);
    render();
  }

  /* ── Saves: the autosave and three slots, each the whole game (life sim + battle progress), and a backup code ── */
  function openSaves(fromTitle) {
    const canSave = !fromTitle && S().phase === 'play' && !S().handoff;
    let armed = null;
    const card = (n, x, info) => {
      const head = n ? `<b class="g-slot-n">${String(n).padStart(2, '0')}</b>` : '<b class="g-slot-n auto">A</b>';
      if (!info) return `<div class="g-slot empty${n ? '' : ' auto'}">${head}<div class="g-slot-main"><span class="g-slot-when">${n ? 'Empty' : 'Autosave · empty'}</span><small>${n ? 'No data' : 'Saves after everything you do.'}</small></div>
        <div class="g-slot-acts">${n && canSave ? `<button type="button" class="g-btn small pink" data-save="${n}">Save</button>` : ''}</div></div>`;
      return `<div class="g-slot${n ? '' : ' auto'}">${head}<div class="g-slot-month"><span>${esc(info.month.slice(0, 3).toUpperCase())}</span></div>
        <div class="g-slot-main"><span class="g-slot-when"><b>${esc(info.md)}</b> ${esc(info.day)} · ${esc(info.slot)}</span>
          <small>${info.prologue ? 'Prologue' : info.lv ? `Solar Lv ${info.lv}` : 'Solar'}${info.fight ? ' · in the Dark Hour' : ''}${info.ngp ? ` · New Game+ ${info.ngp}` : ''} · Play ${esc(info.play)}${n && x ? ` · saved ${esc(new Date(x.at).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }))}` : ''}</small></div>
        <div class="g-slot-acts">${n && canSave ? `<button type="button" class="g-btn small${armed === `s${n}` ? ' pink' : ''}" data-save="${n}">${armed === `s${n}` ? 'Overwrite?' : 'Save'}</button>` : ''}<button type="button" class="g-btn small${armed === `l${n}` ? ' pink' : ''}" data-load="${n}">${armed === `l${n}` ? 'Load it?' : 'Load'}</button></div></div>`;
    };
    const render = () => {
      let auto = null; try { auto = JSON.parse(localStorage.getItem(G.KEY)); } catch (e) {}
      const autoInfo = G.slotInfo(auto);
      o.el.querySelector('.g-slots').innerHTML = card(0, null, autoInfo).replace(/<button[^>]*data-load="0"[^>]*>[^<]*<\/button>/, '') + [1, 2, 3].map(n => { const x = G.readSlot(n); return card(n, x, x ? G.slotInfo(x.state) : null); }).join('');
      o.el.querySelectorAll('[data-save]').forEach(b => b.addEventListener('click', () => {
        const n = +b.dataset.save;
        if (G.readSlot(n) && armed !== `s${n}`) { armed = `s${n}`; render(); o.el.querySelector(`[data-save="${n}"]`)?.focus(); return; }
        armed = null; G.saveSlot(n); G.sfx('femc-rankup'); render(); o.el.querySelector(`[data-save="${n}"]`)?.focus();
      }));
      o.el.querySelectorAll('[data-load]').forEach(b => b.addEventListener('click', () => {
        const n = +b.dataset.load;
        if (!fromTitle && armed !== `l${n}`) { armed = `l${n}`; render(); o.el.querySelector(`[data-load="${n}"]`)?.focus(); return; }
        if (G.loadSlot(n)) { o.close(); document.querySelectorAll('.gs').forEach(x => x.remove()); document.documentElement.classList.remove('g-in-scene'); cardDay = S().day; if (S().phase === 'title') S().phase = 'play'; run(); }
      }));
    };
    const o = overlay(`<div class="g-saves"><div class="g-st-head"><h2>${canSave ? 'Save' : 'Load'}<small>Each slot holds the whole game: the year and the Dark Hour</small></h2><button type="button" class="g-btn small" data-close>Close</button></div>
      <div class="g-slots"></div>
      <details class="g-io"><summary>Backup code</summary>
        <p class="g-note small">Your whole game as text. Copy it somewhere safe, or paste one in to load it. Codes from before the merge still work.</p>
        <textarea rows="4" spellcheck="false" aria-label="Backup code"></textarea>
        <div class="g-row"><button type="button" class="g-btn small" data-x="export">Show my code</button><button type="button" class="g-btn small" data-x="file">Download file</button><button type="button" class="g-btn small" data-x="import">Load this code</button></div><p class="g-io-msg" aria-live="polite"></p></details></div>`, 'g-saves-ov');
    const ta = o.el.querySelector('textarea'), msg = o.el.querySelector('.g-io-msg');
    o.el.querySelectorAll('[data-x]').forEach(b => b.addEventListener('click', () => {
      if (b.dataset.x === 'export') { ta.value = G.exportCode(); ta.select(); msg.textContent = 'Copied into the box.'; try { navigator.clipboard?.writeText(ta.value); } catch (e) {} }
      if (b.dataset.x === 'file') { const blob = new Blob([JSON.stringify({ game: G.KEY, state: S() }, null, 1)], { type: 'application/json' }); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `femc-revamp-${G.dayInfo().md.replace('/', '-')}.json`; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000); }
      if (b.dataset.x === 'import') {
        const r = G.importCode(ta.value);
        if (r === 'battle') { msg.textContent = 'Battle progress loaded into this game.'; return; }
        if (r) { msg.textContent = 'Loaded.'; o.close(); document.querySelectorAll('.gs').forEach(x => x.remove()); document.documentElement.classList.remove('g-in-scene'); cardDay = S().day; if (S().phase === 'title') S().phase = 'play'; run(); } else msg.textContent = 'That code didn’t work.';
      }
    }));
    render();
  }

  /* ── Settings: one panel for the story and the battles (core.js DEFAULTS; battle.js reads the same store) ── */
  let settingsPanel = null;
  const ONOFF = [[true, 'On'], [false, 'Off']], OFFON = [[false, 'Off'], [true, 'On']];
  const settingRows = () => {
    const DF = G.D.battle.difficulty || {};
    return [
      { h: 'Story' },
      { k: 'text', label: 'Text speed', opts: [['slow', 'Slow'], ['normal', 'Normal'], ['fast', 'Fast'], ['instant', 'Instant']], desc: () => 'How fast lines type out, in scenes and in battle.' },
      { k: 'auto', label: 'Auto-advance', opts: [['off', 'Off'], ['slow', 'Slow'], ['normal', 'Normal'], ['fast', 'Fast']], desc: () => 'Scenes move on by themselves after each line. The Auto button in a scene cycles it too.' },
      { k: 'dateCard', label: 'Date card', opts: ONOFF, desc: () => 'The calendar flip each morning.' },
      { k: 'quickClass', label: 'Quiet class periods', opts: [[false, 'Show'], [true, 'Skip']], desc: () => 'Skip class periods where nothing happens.' },
      { h: 'Battle' },
      { k: 'difficulty', label: 'Difficulty', opts: Object.keys(DF).map(id => [id, DF[id].name]), desc: v => DF[v]?.desc || '' },
      { k: 'battleSpeed', label: 'Battle speed', opts: [[1, '1x'], [2, '2x'], [3, '3x']], desc: () => 'How fast battle animations play. Rush doubles it.' },
      { k: 'cutins', label: 'Persona cut-ins', opts: [['always', 'Always'], ['first', '1st per battle'], ['off', 'Off']], desc: () => 'The Evoker summon before a Persona skill: every time, the first time per member each battle, or never.' },
      { k: 'rushWhere', label: 'Rush allowed in', opts: [['normal', 'Normal rooms'], ['strong', '+ Strong rooms'], ['all', 'Every fight']], desc: () => 'Where Rush (auto-battle) may run.' },
      { k: 'rushStop', label: 'Rush stops below', opts: [[30, '30% HP'], [50, '50% HP']], desc: v => `Rush hands control back when anyone drops below ${v}% HP, or Solar below 50%.` },
      { k: 'remember', label: 'Remember cursor', opts: ONOFF, desc: () => 'Each member’s battle menu reopens on their last command, skill, item and target.' },
      { k: 'numbers', label: 'Damage numbers', opts: ONOFF, desc: () => 'Damage and healing numbers. WEAK, CRITICAL and the rest still show.' },
      { k: 'tips', label: 'Navigator tips', opts: ONOFF, desc: () => 'A small tip the first time each battle mechanic shows up.' },
      { k: 'shake', label: 'Screen shake', opts: ONOFF, desc: () => 'The screen shakes on criticals, weaknesses and All-Out Attacks.' },
      { k: 'calm', label: 'Reduce flashes', opts: OFFON, desc: () => 'Softens white flashes and bursts (Evoker, Theurgy, lightning, criticals).' },
      { k: 'perf', label: 'Performance mode', opts: OFFON, desc: () => 'No glass shatter or ash, fewer particles, a lighter video. Try it if battles feel slow.' },
      { k: 'pad', label: 'Controller buttons', opts: [['auto', 'Auto'], ['xbox', 'Xbox'], ['ps', 'PlayStation']], desc: () => 'Which button prompts show while you play with a controller.' },
      { h: 'Sound' },
      { k: 'music', label: 'Music volume', range: true, desc: v => (v ? 'Music, everywhere.' : 'Music is off.') },
      { k: 'sfx', label: 'Sound effects', opts: ONOFF, desc: () => 'Menu sounds, text blips and battle sounds.' },
      { k: 'sfxVol', label: 'SFX volume', range: true, desc: () => 'Battle sound effect volume. Below 100% the menu sounds in battle use softer built-in versions.' }
    ];
  };
  // opts: { inBattle, onClose, startKey }
  function openSettings(opts = {}) {
    if (settingsPanel) return;
    const rows = settingRows(), items = rows.filter(r => r.k);
    let i = Math.max(0, items.findIndex(r => r.k === opts.startKey));
    const val = r => G.settings()[r.k];
    const valText = r => { const v = val(r); if (r.range) return v ? `${v}%` : 'Off'; const o = r.opts.find(x => String(x[0]) === String(v)); return o ? o[1] : String(v); };
    const canTitle = !opts.inBattle && S().phase !== 'title' && !dh;
    const o = overlay(`<div class="g-settings"><div class="g-st-head"><h2>Settings<small>${opts.inBattle ? 'Paused · the battle waits' : 'The whole game: story and battles'}</small></h2><button type="button" class="g-btn small" data-close>Done</button></div>
      <div class="g-set-list">${rows.map(r => r.h ? `<h3 class="g-set-h">${esc(r.h)}</h3>` : `<div class="g-set" data-k="${r.k}" role="group" aria-label="${esc(r.label)}"><span class="g-set-k">${esc(r.label)}</span><span class="g-set-v">${r.range
        ? `<button type="button" class="g-ar" data-d="-1" aria-label="Lower">‹</button><input type="range" min="0" max="100" step="5" value="${val(r)}" aria-label="${esc(r.label)}"><b>${esc(valText(r))}</b><button type="button" class="g-ar" data-d="1" aria-label="Higher">›</button>`
        : `<button type="button" class="g-ar" data-d="-1" aria-label="Previous">‹</button><b>${esc(valText(r))}</b><button type="button" class="g-ar" data-d="1" aria-label="Next">›</button>`}</span></div>`).join('')}</div>
      <p class="g-set-desc" aria-live="polite"></p>
      <div class="g-row g-set-foot">${canTitle ? '<button type="button" class="g-btn small" data-title>Return to title</button>' : ''}<span class="g-hint">↑↓ choose · ←→ change · Esc close</span></div></div>`, `g-settings-ov${opts.inBattle ? ' g-over-battle' : ''}`, () => {
      settingsPanel = null;
      if (opts.inBattle) setTimeout(() => { try { dh?.frame?.contentWindow?.focus(); } catch (e) {} }, 30);
      opts.onClose?.();
    });
    settingsPanel = o;
    const list = o.el.querySelector('.g-set-list'), desc = o.el.querySelector('.g-set-desc');
    const rowEl = r => list.querySelector(`[data-k="${r.k}"]`);
    function set(r, v) {
      G.setSetting(r.k, v);
      if (r.k === 'sfx') G.sfx('femc-click');
      paint(true);
    }
    function change(j, d) {
      const r = items[j];
      if (r.range) set(r, Math.max(0, Math.min(100, (+val(r) || 0) + d * 10)));
      else { const k = r.opts.findIndex(x => String(x[0]) === String(val(r))); set(r, r.opts[(k + d + r.opts.length) % r.opts.length][0]); }
      G.sfx('femc-hover');
    }
    function paint(vals) {
      items.forEach((r, j) => {
        const el = rowEl(r); el.classList.toggle('sel', j === i);
        if (vals) { el.querySelector('b').textContent = valText(r); const rg = el.querySelector('input'); if (rg) rg.value = val(r); }
      });
      const r = items[i];
      desc.innerHTML = `<b>${esc(r.label)}</b> ${esc(r.desc ? r.desc(val(r)) : '')}`;
      rowEl(r).scrollIntoView?.({ block: 'nearest' });
    }
    items.forEach((r, j) => {
      const el = rowEl(r);
      el.addEventListener('click', ev => { if (ev.target.closest('input')) return; const d = ev.target.closest('[data-d]'); i = j; if (d) change(j, +d.dataset.d); else paint(); });
      const rg = el.querySelector('input');
      if (rg) rg.addEventListener('input', () => { i = j; set(r, +rg.value); });
      el.addEventListener('focusin', () => { if (i !== j) { i = j; paint(); } });
    });
    o.el.addEventListener('keydown', e => {
      if (e.target.closest?.('input[type="range"]') && !e.fromPad && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) return;
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') { e.preventDefault(); e.stopPropagation(); i = (i + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length; G.sfx('femc-hover'); paint(); rowEl(items[i]).querySelector('[data-d="1"]')?.focus({ preventScroll: true }); }
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); e.stopPropagation(); change(i, e.key === 'ArrowLeft' ? -1 : 1); }
      else if ((e.key === 'Enter' || e.key === ' ') && e.target.closest?.('.g-set') && !e.target.closest('[data-d]')) { e.preventDefault(); change(i, 1); }
      else if ((e.key === 'p' || e.key === 'P') && e.fromPad) { e.preventDefault(); o.close(); }
    });
    o.el.querySelector('[data-title]')?.addEventListener('click', () => { o.close(); document.querySelectorAll('.gs').forEach(x => x.remove()); document.documentElement.classList.remove('g-in-scene'); S().phase = S().phase === 'prologue' ? 'prologue' : 'play'; G.save(); titleScreen(); });
    paint();
    setTimeout(() => rowEl(items[i]).querySelector('[data-d="1"]')?.focus({ preventScroll: true }), 40);
  }

  /* ── Keys and controllers on the life-sim screens: arrows move between buttons (P3-style), and a controller's A / B / Start
     (pad.js sends them as Enter / Escape / p) press, go back and open Settings. Scenes and panels keep their own keys. ── */
  const FOCUSABLE = 'button:not(:disabled), [tabindex="0"], summary, a[href], input[type="range"], select';
  function topLayer() {
    const ovs = [...document.querySelectorAll('.g-overlay:not(.out)')];
    if (ovs.length) return ovs[ovs.length - 1];
    return document.querySelector('.g-datecard, .g-actcard, .gs-rank') || null;
  }
  function navKeys(e) {
    if (dh && !document.querySelector('.g-overlay.g-over-battle:not(.out)')) return;
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.altKey) return;
    const t = e.target, k = e.key;
    if (t && (t.tagName === 'TEXTAREA' || (t.tagName === 'INPUT' && t.type !== 'range'))) return;
    const layer = topLayer(), scene = document.querySelector('.gs:not(.out)');
    if ((k === 'm' || k === 'M') && !e.fromPad && !layer && !scene && S().phase === 'play' && !hud.hidden) { e.preventDefault(); return openStatus(); }
    if (e.fromPad && (k === 'p' || k === 'P') && !layer && S().phase !== 'title') { e.preventDefault(); return openSettings(); }
    if (e.fromPad && k === 'Enter' && t && t.matches?.('button, summary, a[href], [role="button"]') && (layer || !scene || t.closest('.gs-choices, .gs-tools'))) { e.preventDefault(); t.click(); return; }
    if (e.fromPad && k === 'Escape' && !layer && !scene) { const back = main.querySelector('[data-back]'); if (back) { e.preventDefault(); back.click(); } return; }
    if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(k)) return;
    if (scene && !layer) return; // the scene player moves through choices itself
    if (t && t.matches?.('input[type="range"], select') && !e.fromPad) return;
    const host = layer || document;
    const all = [...host.querySelectorAll(FOCUSABLE)].filter(x => x.offsetParent !== null && !x.closest('[hidden], .g-toasts'));
    if (!all.length) return;
    e.preventDefault();
    const i = all.indexOf(document.activeElement), d = k === 'ArrowDown' || k === 'ArrowRight' ? 1 : -1;
    const n = all[i < 0 ? (d > 0 ? 0 : all.length - 1) : (i + d + all.length) % all.length];
    n.focus({ preventScroll: false });
    G.sfx('femc-hover');
  }
  document.addEventListener('keydown', navKeys);
  // Play time, for the save slots.
  setInterval(() => { if (document.visibilityState === 'visible' && S().started && S().phase !== 'title') S().playMinutes = (S().playMinutes || 0) + 1; }, 60000);

  /* ── Start ── */
  window.FemcGameUI = { run, openStatus, openPhone, openSaves, openSettings, playLink, goOut, evening: () => evening(G.dayInfo()), dateCard, advance, overlay, esc, inBattle: () => !!dh };
  // An old battle tab coming back (?from=battle): its result was taken into the save on load (core.js); carry on.
  const fromBattle = /[?&]from=battle\b/.test(location.search);
  if (fromBattle) history.replaceState(null, '', location.pathname);
  if (fromBattle && S().started && S().phase !== 'title' && S().handoff) { run(); return; }
  titleScreen();
})();
