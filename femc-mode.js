/* FEMC mode: type "femc" on any page to switch the site into a pink, P3P-inspired skin.
   Original menu sounds (entrance-sounds.js femc-*), a calendar + moon badge, a "Dark Hour" at midnight,
   a crossing-over intro scored with "A Way of Life", and background music listed in assets/femc/bgm.js.
   Storage: kg-femc ('on'), kg-femc-sound ('off' mutes the menu sounds), kg-femc-bgm ({ on, i, t }). */
(() => {
  if (window.FemcMode) return;
  const BASE = new URL('.', document.currentScript.src).href;
  // Cache-busting version for every FEMC data file and image under assets/femc/ (portraits, backgrounds, tarot,
  // profile art, link files, compendium, bgm). Bump it whenever any of them change; see MAINTENANCE.md.
  const FEMC_ASSET_VERSION = 60;
  const KEY = 'kg-femc', SOUND = 'kg-femc-sound', BGM = 'kg-femc-bgm';
  const get = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const set = (k, v) => { try { v === null ? localStorage.removeItem(k) : localStorage.setItem(k, v); } catch (e) {} };
  const root = document.documentElement;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const isOn = () => root.classList.contains('femc');
  const soundOn = () => get(SOUND) !== 'off';
  if (/\/readers\//.test(location.pathname)) root.classList.add('femc-reader');
  if (get(KEY) === 'on') root.classList.add('femc');

  const load = (src, ready) => new Promise(resolve => {
    if (ready()) return resolve();
    const s = document.createElement('script');
    s.src = BASE + src;
    s.onload = s.onerror = () => resolve();
    document.head.appendChild(s);
  });
  const sfx = name => { if (soundOn()) load('entrance-sounds.js?v=22', () => window.EntranceSounds).then(() => window.EntranceSounds?.home(name, { force: true })); };

  /* ── Look ─────────────────────────────────────────────── */
  const arrow = (fill, stroke) => `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26'><path d='M3 2l19 9.5l-8.2 2.3L9.6 22z' fill='${fill}' stroke='${stroke}' stroke-width='1.6' stroke-linejoin='round'/></svg>`)}") 3 2`;
  const style = document.createElement('style');
  style.id = 'femc-style';
  style.textContent = `
    html.femc { --femc: #ff4f9e; --femc-2: #ff8cc0; --femc-ink: #1a0712; scrollbar-color: #ff4f9e #1a0b14; accent-color: #ff4f9e; }
    html.femc body { --accent: #ff4f9e !important; --hot: #ff4f9e !important; --teal: #ff8cc0 !important; --violet: #ff8cc0 !important; cursor: ${arrow('#ff4f9e', '#fff')}, auto; }
    html.femc :is(a[href], button, summary, [role="button"], label, select, .world-card, .site-card, .shelf-card, .related-card, .collage-card) { cursor: ${arrow('#fff', '#ff4f9e')}, pointer; }
    html.femc ::selection { background: #ff4f9e; color: #fff; }
    html.femc :focus-visible { outline-color: #ff4f9e; }
    html.femc a:not([class]):hover { color: #ff8cc0; }
    html.femc:not(.femc-reader) :is(h1, h2) { text-shadow: .055em .055em 0 rgba(255, 79, 158, .55); }
    html.femc :is(.world-card, .site-card, .shelf-card, .related-card, .collage-card, .info-card):hover { outline: 2px solid #ff4f9e; outline-offset: 3px; box-shadow: 9px 9px 0 rgba(255, 79, 158, .5) !important; }
    html.femc :is(.filter-chip, .world-chip, .world-btn, .card-chip, .booth-again, .booth-close):hover { box-shadow: 3px 3px 0 #ff4f9e; }
    html.femc:not(.femc-reader) body::after { content: ""; position: fixed; inset: 0; z-index: 2147482000; pointer-events: none; mix-blend-mode: screen;
      background: repeating-linear-gradient(-58deg, rgba(255, 79, 158, .05) 0 2px, transparent 2px 26px), radial-gradient(ellipse at 100% 0%, rgba(255, 79, 158, .16), transparent 50%), radial-gradient(ellipse at 0% 100%, rgba(255, 79, 158, .1), transparent 45%); }
    html.femc.femc-dark-hour body::after { background: repeating-linear-gradient(-58deg, rgba(90, 255, 140, .05) 0 2px, transparent 2px 26px), radial-gradient(ellipse at 50% 0%, rgba(90, 255, 140, .14), transparent 60%); }

    .femc-badge { position: fixed; left: 14px; bottom: 14px; z-index: 2147483000; display: none; align-items: stretch; gap: 0; font: italic 800 13px/1 "Avenir Next Condensed", "Arial Narrow", "Helvetica Neue", sans-serif; color: #fff; filter: drop-shadow(4px 4px 0 #14070f); animation: femc-badge-in .6s cubic-bezier(.2, 1.3, .4, 1) both; }
    html.femc .femc-badge { display: flex; }
    .femc-badge > * { display: flex; align-items: center; gap: 5px; padding: 6px 10px; transform: skewX(-14deg); }
    .femc-badge > * > * { transform: skewX(14deg); }
    .femc-badge > [hidden] { display: none; }
    .femc-cal { background: linear-gradient(135deg, #ff4f9e, #e5287a); }
    .femc-cal b { font-size: 21px; letter-spacing: -.02em; text-shadow: 2px 2px 0 #7a0b3e; }
    .femc-cal small { font-size: 11px; text-transform: uppercase; letter-spacing: .08em; color: #ffe1ee; }
    .femc-time { background: #14070f; color: #ff8cc0; text-transform: uppercase; letter-spacing: .1em; font-size: 10.5px; }
    html.femc-dark-hour .femc-time { color: #6dff9e; }
    .femc-moon { background: #14070f; padding-left: 4px; }
    .femc-moon svg { width: 20px; height: 20px; }
    .femc-badge .femc-menu-btn { background: #14070f; color: #fff; font-size: 14px; letter-spacing: .06em; text-transform: uppercase; box-shadow: inset 0 0 0 2px #ff4f9e; }
    .femc-badge .femc-menu-btn:hover, .femc-badge .femc-menu-btn:focus-visible { background: #ff4f9e; color: #fff; }
    .femc-navtab { display: none; align-items: center; gap: 6px; margin-left: -8px; margin-right: auto; padding: 7px 14px; border: 0; background: #ff4f9e; color: #fff; font: italic 900 13px/1 "Avenir Next Condensed", "Arial Narrow", sans-serif; letter-spacing: .1em; transform: skewX(-14deg); box-shadow: 3px 3px 0 #14070f; cursor: inherit; }
    .femc-navtab > * { transform: skewX(14deg); }
    html.femc .femc-navtab { display: inline-flex; }
    html.femc .topbar .passport-tab { margin-right: 0; }
    .femc-navtab:hover, .femc-navtab:focus-visible { background: #fff; color: #14070f; box-shadow: 3px 3px 0 #ff4f9e; outline: none; }
    .world-topbar .femc-navtab { margin-left: 14px; }
    @media (max-width: 600px) { .topbar .femc-navtab { position: absolute; top: 16px; right: calc(clamp(18px, 4vw, 52px) + 46px); margin: 0; } }
    .femc-badge button { border: 0; margin: 0; background: #fff; color: #14070f; font: inherit; cursor: inherit; }
    .femc-badge button:hover, .femc-badge button:focus-visible { background: #ff8cc0; }
    .femc-badge button[aria-pressed="false"]:not(.femc-full) span { opacity: .4; text-decoration: line-through; }
    .femc-badge .femc-full span { font-style: normal; font-size: 15px; }
    .femc-badge .femc-exit { background: #ff4f9e; color: #fff; }
    @keyframes femc-badge-in { from { transform: translateX(-130%); } }
    @media (max-width: 640px) { .femc-time { display: none; } }

    .femc-wipe { position: fixed; inset: 0; z-index: 2147483600; pointer-events: none; overflow: hidden; }
    .femc-wipe i { position: absolute; top: -20%; bottom: -20%; left: 0; width: 75vw; background: #ff4f9e; transform: skewX(-18deg) translateX(-100vw); animation: femc-band 1.2s cubic-bezier(.75, 0, .25, 1) var(--d) both; }
    .femc-wipe i:nth-child(2) { background: #14070f; width: 60vw; }
    .femc-wipe i:nth-child(3) { background: #ff8cc0; width: 30vw; }
    .femc-wipe.off i:nth-child(1) { background: #14070f; } .femc-wipe.off i:nth-child(2) { background: #3a1028; }
    .femc-wipe b { position: absolute; left: 50%; top: 50%; color: #fff; white-space: nowrap; font: italic 900 clamp(2.6rem, 10vw, 7rem)/1 "Avenir Next Condensed", "Arial Narrow", "Helvetica Neue", sans-serif; letter-spacing: -.02em; text-shadow: .07em .07em 0 #14070f; animation: femc-word 1.2s cubic-bezier(.2, .9, .3, 1) .12s both; }
    .femc-wipe b small { display: block; margin-top: .25em; font-size: .28em; letter-spacing: .3em; color: #ffe1ee; text-shadow: none; }
    @keyframes femc-band { from { transform: skewX(-18deg) translateX(-110vw); } to { transform: skewX(-18deg) translateX(140vw); } }
    @keyframes femc-word { 0% { opacity: 0; transform: translate(-30%, -50%) skewX(-12deg); } 30%, 72% { opacity: 1; transform: translate(-50%, -50%) skewX(-12deg); } 100% { opacity: 0; transform: translate(-70%, -50%) skewX(-12deg); } }
    .femc-intro { position: fixed; inset: 0; z-index: 2147483500; overflow: hidden; background: #fd64a8; color: #fff; font-family: "Avenir Next Condensed", "Arial Narrow", "Helvetica Neue", sans-serif; animation: fi-in .5s cubic-bezier(.7, 0, .3, 1) both; }
    .femc-intro.fi-out { animation: fi-out .65s cubic-bezier(.7, 0, .3, 1) forwards; pointer-events: none; }
    @keyframes fi-in { from { clip-path: polygon(0 0, 0 0, -40% 100%, -40% 100%); } to { clip-path: polygon(0 0, 140% 0, 100% 100%, -40% 100%); } }
    @keyframes fi-out { from { clip-path: polygon(0 0, 140% 0, 100% 100%, -40% 100%); } to { clip-path: polygon(140% 0, 140% 0, 100% 100%, 100% 100%); } }
    .fi-stripes { position: absolute; inset: -40% -40% -40% -20%; background: repeating-linear-gradient(-58deg, rgba(255, 255, 255, .1) 0 16px, transparent 16px 64px); animation: fi-drift 9s linear infinite; }
    @keyframes fi-drift { to { transform: translateX(-302px); } }
    .femc-intro::before { content: ""; position: absolute; z-index: 1; left: -14%; top: -20%; width: 62%; height: 140%; background: #14070f; transform: skewX(-14deg); animation: fi-band .75s .1s cubic-bezier(.2, 1, .3, 1) both; }
    @keyframes fi-band { from { transform: skewX(-14deg) translateX(-105%); } }
    .fi-art { position: absolute; right: 0; bottom: 0; height: 100%; max-width: 64vw; object-fit: cover; object-position: 30% 0; -webkit-mask-image: linear-gradient(to right, transparent, #000 22%); mask-image: linear-gradient(to right, transparent, #000 22%); animation: fi-art 1s .2s cubic-bezier(.2, 1, .3, 1) both; }
    @keyframes fi-art { from { opacity: 0; transform: translateX(12%); } }
    .fi-cal { position: absolute; z-index: 2; top: 5vh; right: 4vw; text-align: right; filter: drop-shadow(5px 5px 0 #14070f); }
    .fi-dayclip { height: 1em; padding: 0 .12em 0 .3em; overflow: hidden; font-size: clamp(54px, 8vw, 96px); line-height: 1; }
    .fi-days { animation: fi-roll 1.7s .35s cubic-bezier(.6, 0, .3, 1) both; }
    .fi-days span { display: block; height: 1em; font-style: italic; font-weight: 900; letter-spacing: -.03em; transform: skewX(-8deg); }
    .fi-days small { margin-left: .15em; font-size: .3em; letter-spacing: .08em; text-transform: uppercase; color: #ffe1ee; }
    @keyframes fi-roll { 0%, 22% { transform: translateY(0); } 42%, 58% { transform: translateY(-1em); } 80%, 100% { transform: translateY(-2em); } }
    .fi-when { display: flex; align-items: center; justify-content: flex-end; gap: 10px; margin-top: 10px; padding: 7px 14px; background: #14070f; transform: skewX(-14deg); font: italic 800 15px/1.1 \"Avenir Next Condensed\", \"Arial Narrow\", \"Helvetica Neue\", sans-serif; text-transform: uppercase; letter-spacing: .12em; color: #ff8cc0; animation: fi-item .5s 1.9s cubic-bezier(.2, 1.2, .4, 1) both; }
    .fi-when > * { transform: skewX(14deg); }
    .fi-when small { display: block; color: #ffe1ee; font-size: 10px; letter-spacing: .16em; }
    .fi-moon svg { display: block; width: 26px; height: 26px; }
    .fi-copy { position: absolute; z-index: 2; left: 6vw; top: 50%; max-width: 44vw; transform: translateY(-50%); }
    .fi-kicker { margin: 0 0 6px; color: #ff8cc0; font: italic 800 13px/1 \"Avenir Next Condensed\", \"Arial Narrow\", \"Helvetica Neue\", sans-serif; letter-spacing: .34em; text-transform: uppercase; animation: fi-item .5s .45s both; }
    .fi-title { margin: 0; font: italic 900 clamp(64px, 12.5vw, 168px)/.82 \"Avenir Next Condensed\", \"Arial Narrow\", \"Helvetica Neue\", sans-serif; letter-spacing: -.03em; }
    .fi-title span { display: block; transform: skewX(-10deg); text-shadow: .06em .06em 0 #ff4f9e; animation: fi-slam .55s cubic-bezier(.2, 1.4, .4, 1) both; }
    .fi-title span:nth-child(1) { animation-delay: .5s; } .fi-title span:nth-child(2) { animation-delay: .62s; color: #ff8cc0; text-shadow: .06em .06em 0 #fff; }
    @keyframes fi-slam { from { opacity: 0; transform: translateX(-70px) skewX(-10deg); } }
    .fi-sub { margin: 16px 0 26px; color: #ffd6e8; font: italic 600 clamp(15px, 1.6vw, 19px)/1.3 \"Avenir Next Condensed\", \"Arial Narrow\", \"Helvetica Neue\", sans-serif; animation: fi-item .5s .8s both; }
    .fi-menu button { position: relative; display: block; min-width: min(300px, 70vw); margin: 0 0 10px; padding: 11px 44px 11px 18px; border: 0; background: rgba(255, 255, 255, .08); color: #fff; font: italic 800 22px/1 \"Avenir Next Condensed\", \"Arial Narrow\", \"Helvetica Neue\", sans-serif; text-align: left; text-transform: uppercase; letter-spacing: .05em; transform: skewX(-14deg); cursor: inherit; animation: fi-item .45s cubic-bezier(.2, 1.2, .4, 1) both; }
    .fi-menu button:nth-child(1) { animation-delay: .95s; } .fi-menu button:nth-child(2) { animation-delay: 1.05s; font-size: 16px; }
    .fi-menu button:is(:hover, :focus-visible) { outline: none; background: #fff; color: #14070f; box-shadow: 7px 7px 0 #ff4f9e; }
    .fi-menu button:is(:hover, :focus-visible)::after { content: "◀"; position: absolute; right: 14px; top: 50%; transform: translateY(-50%); color: #ff4f9e; font-size: .8em; }
    @keyframes fi-item { from { opacity: 0; transform: translateX(-40px) skewX(-14deg); } }
    .fi-foot { position: absolute; z-index: 2; left: 6vw; bottom: 4vh; margin: 0; color: #ff8cc0; font: italic 700 12px/1 \"Avenir Next Condensed\", \"Arial Narrow\", \"Helvetica Neue\", sans-serif; letter-spacing: .5em; text-transform: uppercase; opacity: .8; }
    @media (max-width: 700px) {
      .femc-intro::before { width: 120%; left: -30%; opacity: .82; }
      .fi-art { max-width: none; width: 100%; opacity: .6; -webkit-mask-image: none; mask-image: none; }
      .fi-copy { max-width: 88vw; top: auto; bottom: 12vh; transform: none; }
      .fi-cal { top: 3vh; right: 6vw; }
      .fi-dayclip { font-size: 52px; }
    }
    @media (prefers-reduced-motion: reduce) { .femc-intro, .femc-intro *, .femc-intro::before { animation: none !important; } .fi-days { transform: translateY(-2em); } }
    @media (prefers-reduced-motion: reduce) { .femc-badge { animation: none; } }
  `;
  document.head.appendChild(style);

  /* ── Calendar badge ───────────────────────────────────── */
  const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const PHASES = ['New Moon', 'Waxing Crescent', 'First Quarter', 'Waxing Gibbous', 'Full Moon', 'Waning Gibbous', 'Last Quarter', 'Waning Crescent'];
  function daypart(h) {
    if (h === 0) return 'Dark Hour';
    if (h < 5) return 'Late Night';
    if (h < 7) return 'Early Morning';
    if (h < 12) return 'Morning';
    if (h < 13) return 'Lunchtime';
    if (h < 15) return 'Afternoon';
    if (h < 18) return 'After School';
    return 'Evening';
  }
  function moon(date) {
    const p = (((date - Date.UTC(2000, 0, 6, 18, 14)) / 86400000 / 29.530588853) % 1 + 1) % 1;
    const k = Math.cos(p * 2 * Math.PI), rx = (9 * Math.abs(k)).toFixed(2);
    const lit = p < 0.5
      ? `M10 1A9 9 0 0 1 10 19A${rx} 9 0 0 ${k > 0 ? 0 : 1} 10 1`
      : `M10 1A9 9 0 0 0 10 19A${rx} 9 0 0 ${k > 0 ? 1 : 0} 10 1`;
    const toFull = ((0.5 - p + 1) % 1) * 29.530588853, next = new Date(+date + toFull * 86400000);
    return { phase: p, full: Math.abs(p - 0.5) < 0.034, next: `${next.getMonth() + 1}/${next.getDate()}`, name: PHASES[Math.round(p * 8) % 8], svg: `<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="9" fill="#3a1028"/><path d="${lit}" fill="#fff4f9"/></svg>` };
  }
  let badge = null;
  // Fullscreen (browsers drop it when you go to another page; iPhone Safari doesn't allow it at all).
  const canFull = () => !!(document.fullscreenEnabled || document.webkitFullscreenEnabled);
  const isFull = () => !!(document.fullscreenElement || document.webkitFullscreenElement);
  function fullscreen(on = !isFull()) {
    const el = document.documentElement;
    const call = on ? (el.requestFullscreen || el.webkitRequestFullscreen) : (document.exitFullscreen || document.webkitExitFullscreen);
    try { call?.call(on ? el : document)?.catch?.(() => {}); } catch (e) {}
  }
  ['fullscreenchange', 'webkitfullscreenchange'].forEach(ev => document.addEventListener(ev, () => paintBadge()));

  function paintBadge() {
    if (!badge) return;
    const full = badge.querySelector('.femc-full');
    full.hidden = !canFull();
    full.setAttribute('aria-pressed', String(isFull()));
    full.setAttribute('aria-label', isFull() ? 'Exit fullscreen' : 'Fullscreen');
    full.title = isFull() ? 'Exit fullscreen' : 'Fullscreen';
    const now = new Date(), part = daypart(now.getHours()), m = moon(now);
    root.classList.toggle('femc-dark-hour', part === 'Dark Hour');
    badge.querySelector('.femc-cal').innerHTML = `<span><b>${now.getMonth() + 1}/${now.getDate()}</b> <small>${DAYS[now.getDay()]}</small></span>`;
    badge.querySelector('.femc-time').innerHTML = `<span>${part}</span>`;
    const mo = badge.querySelector('.femc-moon');
    mo.innerHTML = `<span>${m.svg}</span>`;
    mo.title = m.full ? `${m.name} · tonight` : `${m.name} · next full moon ${m.next}`;
    mo.setAttribute('aria-label', mo.title);
    const snd = badge.querySelector('.femc-sound');
    snd.setAttribute('aria-pressed', String(soundOn()));
    snd.setAttribute('aria-label', soundOn() ? 'Mute FEMC sounds' : 'Unmute FEMC sounds');
    const mus = badge.querySelector('.femc-music');
    mus.hidden = !music.tracks.length;
    mus.setAttribute('aria-pressed', String(music.wanted()));
    mus.setAttribute('aria-label', music.wanted() ? 'Pause FEMC music' : 'Play FEMC music');
  }
  function buildBadge() {
    if (badge || !document.body) return;
    badge = document.createElement('div');
    badge.className = 'femc-badge';
    badge.setAttribute('role', 'group');
    badge.setAttribute('aria-label', 'FEMC mode');
    badge.innerHTML = `<button class="femc-menu-btn" type="button" title="Open the FEMC menu"><span>◆ Menu</span></button><span class="femc-cal"></span><span class="femc-time"></span><span class="femc-moon" role="img"></span>
      <button class="femc-music" type="button" hidden><span>♪</span></button>
      <button class="femc-sound" type="button" title="FEMC sounds"><span>SFX</span></button>
      <button class="femc-full" type="button" hidden><span>⛶</span></button>
      <button class="femc-exit" type="button" title="Turn off FEMC mode" aria-label="Turn off FEMC mode"><span>✕</span></button>`;
    badge.querySelector('.femc-sound').addEventListener('click', () => { set(SOUND, soundOn() ? 'off' : null); paintBadge(); sfx('femc-click'); });
    badge.querySelector('.femc-music').addEventListener('click', () => { music.toggle(); paintBadge(); });
    badge.querySelector('.femc-full').addEventListener('click', () => { fullscreen(); sfx('femc-click'); });
    badge.querySelector('.femc-exit').addEventListener('click', () => toggle(false));
    badge.querySelector('.femc-menu-btn').addEventListener('click', openMenu);
    document.body.appendChild(badge);
    // A FEMC tab in the top bar too: beside the Passport tab, or after "All Worlds" on world pages.
    const bar = document.querySelector('.topbar, .world-topbar');
    if (bar && !bar.querySelector('.femc-navtab')) {
      const tab = document.createElement('button');
      tab.type = 'button';
      tab.className = 'femc-navtab';
      tab.dataset.femcQuiet = '';
      tab.innerHTML = '<span>◆</span><span class="femc-navtab-label">FEMC</span>';
      tab.setAttribute('aria-label', 'Open the FEMC menu');
      tab.addEventListener('click', openMenu);
      const after = bar.querySelector('.passport-tab') || bar.querySelector('.brand') || bar.querySelector('.back-link');
      after ? after.after(tab) : bar.prepend(tab);
    }
    paintBadge();
    place();
    new MutationObserver(place).observe(document.body, { childList: true });
    addEventListener('resize', place);
  }
  // Sit above the world music player when they would overlap (phones).
  function place() {
    if (!badge) return;
    badge.style.bottom = '';
    const player = document.querySelector('.music-player');
    if (!player) return;
    const p = player.getBoundingClientRect(), b = badge.getBoundingClientRect();
    if (p.left < b.right && p.right > b.left && p.top < b.bottom && p.bottom > b.top) badge.style.bottom = `${Math.ceil(innerHeight - p.top + 10)}px`;
  }
  document.addEventListener('visibilitychange', () => { if (!document.hidden) paintBadge(); });

  /* ── Switching on and off ─────────────────────────────── */
  function wipe(on) {
    const el = document.createElement('div');
    el.className = `femc-wipe${on ? '' : ' off'}`;
    el.setAttribute('aria-hidden', 'true');
    el.innerHTML = `<i style="--d:0s"></i><i style="--d:.07s"></i><i style="--d:.14s"></i><b>FEMC MODE<small>${on ? 'memento mori' : 'back to the idols'}</small></b>`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1500);
  }
  /* The crossing-over screen: a P3P-style calendar roll and menu, scored with "A Way of Life". */
  function intro() {
    const now = new Date(), m = moon(now);
    const day = back => { const d = new Date(now); d.setDate(now.getDate() - back); return `<span>${d.getMonth() + 1}/${d.getDate()}<small>${DAYS[d.getDay()]}</small></span>`; };
    const el = document.createElement('div');
    el.className = 'femc-intro';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-label', 'FEMC mode');
    el.innerHTML = `<div class="fi-stripes" aria-hidden="true"></div>
      <img class="fi-art" src="${BASE}assets/femc/img/femc-portrait.jpg" alt="">
      <div class="fi-cal" aria-hidden="true"><div class="fi-dayclip"><div class="fi-days">${day(2)}${day(1)}${day(0)}</div></div>
        <div class="fi-when"><span class="fi-moon">${m.svg}</span><span>${daypart(now.getHours())}<small>${m.name}</small></span></div></div>
      <div class="fi-copy">
        <p class="fi-kicker">Crossing over</p>
        <h2 class="fi-title"><span>FEMC</span><span>MODE</span></h2>
        <p class="fi-sub">Leaving the idol worlds for the game ones.</p>
        <div class="fi-menu" role="menu"><button type="button" role="menuitem" data-go="enter">Enter</button><button type="button" role="menuitem" data-go="back">Back to the idols</button></div>
      </div>
      <p class="fi-foot" aria-hidden="true">Memento mori</p>`;
    document.body.appendChild(el);
    const theme = new Audio(BASE + 'assets/femc/music/a-way-of-life.mp3');
    theme.loop = true;
    theme.volume = 0;
    let rise = null;
    theme.play().then(() => { rise = setInterval(() => { theme.volume = Math.min(0.5, theme.volume + 0.03); if (theme.volume >= 0.5) clearInterval(rise); }, 60); }).catch(() => {});
    if (!reduced.matches) [750, 1400].forEach(t => setTimeout(() => sfx('femc-hover'), t));
    const items = [...el.querySelectorAll('.fi-menu button')];
    setTimeout(() => items[0].focus({ preventScroll: true }), reduced.matches ? 0 : 1000);
    let closing = false;
    function finish(go, viaKey) {
      if (closing) return;
      closing = true;
      if (viaKey) sfx(go === 'enter' ? 'femc-click' : 'femc-back');
      clearInterval(rise);
      const fall = setInterval(() => { theme.volume = Math.max(0, theme.volume - 0.05); if (theme.volume <= 0) { clearInterval(fall); theme.pause(); } }, 50);
      document.removeEventListener('keydown', keys, true);
      el.classList.add('fi-out');
      setTimeout(() => {
        el.remove();
        if (go === 'enter') { music.start(); eggs(); load('achievements.js?v=9', () => window.Achievements).then(() => window.Achievements?.unlock('femc')); }
        else toggle(false);
      }, reduced.matches ? 0 : 650);
    }
    function keys(e) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const i = items.indexOf(document.activeElement);
        items[(i + (e.key === 'ArrowDown' ? 1 : items.length - 1) + items.length) % items.length].focus();
        sfx('femc-hover');
      } else if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); finish('enter', true); }
    }
    document.addEventListener('keydown', keys, true);
    items.forEach(b => b.addEventListener('click', () => finish(b.dataset.go, !b.matches(':hover'))));
  }

  function toggle(on) {
    if (on === isOn()) return;
    set(KEY, on ? 'on' : null);
    if (on) {
      // The intro covers the page while the skin switches on underneath it.
      sfx('femc-on');
      root.classList.add('femc');
      buildBadge();
      paintBadge();
      intro();
      return;
    }
    sfx('femc-off');
    const apply = () => { root.classList.remove('femc'); music.stop(); window.FemcEggs?.stop(); };
    if (reduced.matches) apply(); else { wipe(false); setTimeout(apply, 520); }
  }

  // Easter eggs that only exist on the other side.
  const eggs = () => load('femc-eggs.js?v=8', () => window.FemcEggs).then(() => { if (isOn()) window.FemcEggs?.start(); });

  let typed = '';
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && isOn()) sfx('femc-back');
    if (e.metaKey || e.ctrlKey || e.altKey || e.key.length !== 1) return;
    if (e.target.closest && e.target.closest('input, textarea, select, [contenteditable]')) return;
    typed = (typed + e.key.toLowerCase()).slice(-8);
    if (typed.endsWith('femc')) { typed = ''; toggle(!isOn()); }
  });

  /* ── Menu sounds ──────────────────────────────────────── */
  const INTERACTIVE = 'a[href], button, summary, [role="button"], select, input[type="range"], input[type="checkbox"], .world-card, .site-card, .shelf-card, .related-card, .collage-card';
  const BACK = /^(✕|×|‹|←)|\b(close|back|skip|hide|cancel|all worlds|turn off)\b/i;
  let hovered = null, hoveredAt = 0;
  document.addEventListener('pointerover', e => {
    if (!isOn() || e.pointerType === 'touch') return;
    const el = e.target.closest?.(INTERACTIVE);
    if (!el || el === hovered) return;
    hovered = el;
    const now = performance.now();
    if (now - hoveredAt < 70) return;
    hoveredAt = now;
    sfx('femc-hover');
  }, true);
  document.addEventListener('pointerout', e => { if (hovered && !hovered.contains(e.relatedTarget)) hovered = null; }, true);
  document.addEventListener('click', e => {
    if (!isOn()) return;
    const el = e.target.closest?.(INTERACTIVE);
    if (!el || el.closest('.femc-badge, [data-femc-quiet]')) return;
    const label = (el.getAttribute('aria-label') || el.title || el.textContent || '').trim();
    sfx(BACK.test(label) ? 'femc-back' : 'femc-click');
  }, true);

  /* ── Background music (tracks listed in assets/femc/bgm.js) ── */
  const music = (() => {
    const VOLUME = 0.22;
    const others = new Set();
    let audio = null, idx = 0, fadeTimer = null;
    const state = () => { try { return JSON.parse(get(BGM)) || {}; } catch (e) { return {}; } };
    const save = patch => set(BGM, JSON.stringify({ ...state(), ...patch }));
    const api = { tracks: [] };
    api.wanted = () => state().on !== false;
    // Pause for the site's own songs and the world intros, then come back.
    const native = HTMLMediaElement.prototype.play;
    HTMLMediaElement.prototype.play = function (...args) {
      if (this !== audio && !others.has(this)) {
        others.add(this);
        ['pause', 'ended', 'emptied'].forEach(ev => this.addEventListener(ev, () => setTimeout(api.sync, 300)));
      }
      const result = native.apply(this, args);
      setTimeout(api.sync, 0);
      return result;
    };
    const busy = () => [...others].some(a => !a.paused) || !!document.querySelector('dialog.world-entrance[open], .femc-intro');
    function fade(to, done) {
      clearInterval(fadeTimer);
      fadeTimer = setInterval(() => {
        const v = audio.volume + (to > audio.volume ? 0.02 : -0.02);
        if (Math.abs(to - audio.volume) <= 0.02) { audio.volume = to; clearInterval(fadeTimer); done && done(); } else audio.volume = Math.max(0, Math.min(1, v));
      }, 40);
    }
    function ensure() {
      if (audio || !api.tracks.length) return;
      const s = state();
      idx = Math.min(s.i || 0, api.tracks.length - 1);
      audio = new Audio(BASE + api.tracks[idx].src);
      audio.preload = 'auto';
      audio.volume = 0;
      if (s.t) audio.addEventListener('loadedmetadata', () => { try { audio.currentTime = Math.min(s.t, audio.duration - 1); } catch (e) {} }, { once: true });
      audio.addEventListener('ended', () => { idx = (idx + 1) % api.tracks.length; audio.src = BASE + api.tracks[idx].src; save({ i: idx, t: 0 }); native.call(audio).catch(() => {}); });
      setInterval(() => { if (!audio.paused) save({ i: idx, t: audio.currentTime }); api.sync(); }, 1500);
      addEventListener('pagehide', () => { if (audio) save({ i: idx, t: audio.currentTime }); });
    }
    api.sync = () => {
      if (!audio) return;
      const play = isOn() && api.wanted() && !busy();
      if (play && audio.paused) {
        native.call(audio).then(() => fade(VOLUME)).catch(() => {
          // Autoplay blocked: start on the first click or key press instead.
          const go = () => { removeEventListener('pointerdown', go, true); removeEventListener('keydown', go, true); api.sync(); };
          addEventListener('pointerdown', go, true); addEventListener('keydown', go, true);
        });
      } else if (!play && !audio.paused) fade(0, () => audio.pause());
    };
    api.start = () => { ensure(); api.sync(); };
    api.playing = () => (audio && !audio.paused ? api.tracks[idx].title : null);
    api.stop = () => { if (audio && !audio.paused) fade(0, () => audio.pause()); };
    api.toggle = () => { save({ on: !api.wanted() }); api.start(); };
    api.next = () => {
      if (!api.tracks.length) return;
      ensure();
      idx = (idx + 1) % api.tracks.length;
      audio.src = BASE + api.tracks[idx].src;
      save({ i: idx, t: 0, on: true });
      api.sync();
    };
    return api;
  })();

  function boot() {
    load(`assets/femc/bgm.js?v=${FEMC_ASSET_VERSION}`, () => window.FEMC_BGM).then(() => {
      music.tracks = (window.FEMC_BGM || []).filter(t => t && t.src);
      if (isOn()) { buildBadge(); music.start(); eggs(); }
      paintBadge();
    });
    if (isOn()) buildBadge();
  }
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', boot) : boot();

  function openMenu() { load('femc-menu.js?v=22', () => window.FemcMenu).then(() => window.FemcMenu?.open()); }
  window.FemcMode = { fullscreen, isFullscreen: isFull, canFullscreen: canFull, toggle, isOn, openMenu, nowPlaying: () => music.playing(), sfx, moon, daypart, load, base: BASE, v: FEMC_ASSET_VERSION,
    music: { playing: () => music.playing(), toggle: () => { music.toggle(); paintBadge(); }, next: () => music.next(), tracks: () => music.tracks } };
})();
