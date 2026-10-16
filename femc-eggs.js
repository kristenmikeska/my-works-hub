/* Easter eggs that only exist on the other side (FEMC mode). femc-mode.js loads this once the mode is on.
   - Akihiko texts you now and then (P3P-style message box) and links to his social link.
   - Type "protein": shakers and beef bowls rain down ("Gains" stamp).
   - Type "akihiko" or "compendium" to visit the hidden pages.
   - Midnight to 1 a.m.: the Dark Hour ("The Dark Hour" stamp, once a night).
   - Full-moon days: a Full Moon Operation banner ("Full Moon Operation" stamp).
   Preview without stamps: add ?femcpreview=darkhour, fullmoon, text or protein to any page URL. */
window.FemcEggs = (() => {
  const F = window.FemcMode;
  const BASE = F.base;
  const get = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const set = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const reader = document.documentElement.classList.contains('femc-reader');
  const page = (location.pathname.split('/').pop() || 'index.html').replace('.html', '');
  const preview = new URLSearchParams(location.search).get('femcpreview');
  const unlock = id => { if (!preview) F.load('achievements.js?v=10', () => window.Achievements).then(() => window.Achievements?.unlock(id)); };
  const dayKey = d => `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  let started = false;
  const timers = [];
  const later = (fn, ms) => timers.push(setTimeout(fn, ms));

  const style = document.createElement('style');
  style.textContent = `
    .femc-msg { position: fixed; left: 50%; bottom: 74px; z-index: 2147483100; width: min(620px, calc(100vw - 28px)); transform: translateX(-50%); color: #fff; font-family: "Avenir Next Condensed", "Arial Narrow", "Helvetica Neue", sans-serif; animation: femc-msg-in .45s cubic-bezier(.2, 1.3, .4, 1) both; }
    .femc-msg.out { animation: femc-msg-out .3s ease-in forwards; }
    .femc-msg-name { display: inline-block; margin-left: 18px; padding: 6px 18px; background: #ff4f9e; font: italic 900 17px/1 "Avenir Next Condensed", "Arial Narrow", sans-serif; letter-spacing: .04em; text-transform: uppercase; transform: skewX(-14deg); box-shadow: 4px 4px 0 #14070f; }
    .femc-msg-name span { display: inline-block; transform: skewX(14deg); }
    .femc-msg-box { position: relative; margin-top: -4px; padding: 18px 22px 14px; border: 2px solid #ff8cc0; border-radius: 4px 22px 4px 22px; background: rgba(20, 7, 15, .92); box-shadow: 6px 6px 0 rgba(255, 79, 158, .45); backdrop-filter: blur(6px); }
    .femc-msg-text { min-height: 2.6em; margin: 0; font: 600 17px/1.35 "Avenir Next", "Helvetica Neue", sans-serif; }
    .femc-msg-text::after { content: "▼"; margin-left: 6px; color: #ff4f9e; font-size: 11px; opacity: 0; }
    .femc-msg.done .femc-msg-text::after { opacity: 1; animation: femc-blink 1s steps(2) infinite; }
    .femc-msg-actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 10px; opacity: 0; transition: opacity .2s; }
    .femc-msg.done .femc-msg-actions { opacity: 1; }
    .femc-msg-actions :is(a, button) { padding: 7px 16px; border: 0; background: rgba(255, 255, 255, .1); color: #fff; font: italic 800 13px/1 "Avenir Next Condensed", "Arial Narrow", sans-serif; letter-spacing: .06em; text-transform: uppercase; text-decoration: none; transform: skewX(-14deg); cursor: inherit; }
    .femc-msg-actions :is(a, button):is(:hover, :focus-visible) { background: #fff; color: #14070f; box-shadow: 4px 4px 0 #ff4f9e; outline: none; }
    @keyframes femc-msg-in { from { opacity: 0; transform: translate(-50%, 30px); } }
    @keyframes femc-msg-out { to { opacity: 0; transform: translate(-50%, 20px); } }
    @keyframes femc-blink { 50% { opacity: 0; } }

    .femc-rain { position: fixed; inset: 0; z-index: 2147483200; pointer-events: none; overflow: hidden; }
    .femc-rain i { position: absolute; top: -12vh; left: var(--x); font-size: var(--s); font-style: normal; animation: femc-fall var(--t) cubic-bezier(.4, 0, .9, .6) var(--d) both; }
    @keyframes femc-fall { to { transform: translateY(125vh) rotate(var(--r)); } }
    .femc-stat { position: fixed; left: 50%; top: 42%; z-index: 2147483300; pointer-events: none; text-align: center; color: #fff; font: italic 900 clamp(40px, 8vw, 92px)/.9 "Avenir Next Condensed", "Arial Narrow", sans-serif; text-shadow: .06em .06em 0 #ff4f9e, .12em .12em 0 #14070f; transform: translate(-50%, -50%) skewX(-10deg); animation: femc-stat 2.6s cubic-bezier(.2, 1.3, .4, 1) both; }
    .femc-stat small { display: block; margin-top: .3em; font-size: .24em; letter-spacing: .2em; text-shadow: 2px 2px 0 #14070f; }
    @keyframes femc-stat { 0% { opacity: 0; transform: translate(-50%, -20%) skewX(-10deg) scale(.6); } 15%, 75% { opacity: 1; transform: translate(-50%, -50%) skewX(-10deg); } 100% { opacity: 0; transform: translate(-50%, -70%) skewX(-10deg); } }

    .femc-dh { position: fixed; inset: 0; z-index: 2147483400; display: grid; place-items: center; overflow: hidden; color: #eaffd8; text-align: center; cursor: pointer;
      background: radial-gradient(circle at 50% 30%, #f4ffb0 0 9vmin, #d5ff7a 9.4vmin, rgba(170, 255, 120, .35) 16vmin, transparent 34vmin), linear-gradient(#0d2a14, #031208 70%); animation: femc-dh-in 2s ease-out both; }
    .femc-dh::before { content: ""; position: absolute; inset: 0; background: repeating-linear-gradient(0deg, rgba(0, 0, 0, .18) 0 2px, transparent 2px 5px); mix-blend-mode: multiply; }
    .femc-dh.out { animation: femc-dh-out 1s ease-in forwards; }
    .femc-dh div { position: relative; margin-top: 30vh; }
    .femc-dh b { display: block; font: italic 900 clamp(46px, 10vw, 120px)/.9 "Avenir Next Condensed", "Arial Narrow", sans-serif; letter-spacing: -.02em; color: #b8ff8a; text-shadow: 0 0 30px rgba(150, 255, 110, .6), .05em .05em 0 #041a0b; }
    .femc-dh time { display: block; margin-bottom: 10px; font: 700 clamp(22px, 3vw, 34px)/1 ui-monospace, Menlo, monospace; color: #e6ffc9; letter-spacing: .2em; animation: femc-glitch 2.4s steps(1) infinite; }
    .femc-dh p { margin: 14px 0 0; font: italic 600 15px/1.4 "Avenir Next", sans-serif; color: #c9f5b0; opacity: .85; }
    @keyframes femc-dh-in { 0% { opacity: 0; filter: saturate(0); } 20% { opacity: 1; } 100% { filter: none; } }
    @keyframes femc-dh-out { to { opacity: 0; } }
    @keyframes femc-glitch { 0%, 100% { transform: none; } 42% { transform: translateX(3px); opacity: .7; } 44% { transform: translateX(-2px); } 46% { transform: none; opacity: 1; } }

    .femc-op { position: fixed; left: 50%; top: 14px; z-index: 2147483100; display: flex; align-items: center; gap: 14px; width: min(640px, calc(100vw - 28px)); padding: 12px 16px; transform: translateX(-50%); border-left: 6px solid #fff; background: linear-gradient(100deg, #c0123f, #ff4f9e); box-shadow: 6px 6px 0 #14070f; color: #fff; font-family: "Avenir Next Condensed", "Arial Narrow", sans-serif; animation: femc-op-in .5s cubic-bezier(.2, 1.3, .4, 1) both; }
    .femc-op.out { animation: femc-msg-out .3s ease-in forwards; }
    .femc-op svg { flex-shrink: 0; width: 38px; height: 38px; }
    .femc-op b { display: block; font: italic 900 20px/1 "Avenir Next Condensed", "Arial Narrow", sans-serif; letter-spacing: .06em; text-transform: uppercase; }
    .femc-op span { flex: 1; font: 600 14px/1.3 "Avenir Next", sans-serif; }
    .femc-op button { padding: 8px 14px; border: 0; background: #14070f; color: #fff; font: italic 800 13px/1 "Avenir Next Condensed", sans-serif; letter-spacing: .06em; text-transform: uppercase; transform: skewX(-14deg); cursor: inherit; }
    .femc-op button + button { background: none; }
    .femc-op button:is(:hover, :focus-visible) { background: #fff; color: #14070f; outline: none; }
    @keyframes femc-op-in { from { opacity: 0; transform: translate(-50%, -30px); } }
    .femc-opfull { position: fixed; inset: 0; z-index: 2147483400; display: grid; place-items: center; color: #fff; text-align: center; background: radial-gradient(circle at 50% 42%, #fffbe9 0 13vmin, #ffe3a6 13.5vmin, rgba(255, 200, 220, .25) 22vmin, transparent 40vmin), radial-gradient(ellipse at 50% 120%, #4a0a26, #0c0309 70%); animation: femc-dh-in 1.2s ease-out both; }
    .femc-opfull.out { animation: femc-dh-out .8s ease-in forwards; }
    .femc-opfull b { display: block; margin-top: 44vh; font: italic 900 clamp(40px, 9vw, 104px)/.9 "Avenir Next Condensed", "Arial Narrow", sans-serif; text-shadow: .06em .06em 0 #c0123f; transform: skewX(-10deg); }
    .femc-opfull small { display: block; margin-top: 12px; font: 600 15px/1.4 "Avenir Next", sans-serif; opacity: .85; }
    .femc-rez { position: fixed; inset: 0; z-index: 2147483300; display: grid; place-items: center; pointer-events: none; background: radial-gradient(circle at 50% 45%, rgba(255, 236, 170, .55), rgba(255, 220, 140, .15) 40%, transparent 70%); animation: femc-rez 3.4s ease both; }
    .femc-rez .halo { position: absolute; left: 50%; top: 32%; width: 160px; height: 40px; margin-left: -80px; border: 6px solid #ffe28a; border-radius: 50%; box-shadow: 0 0 30px #ffd34d, inset 0 0 18px #ffd34d; animation: femc-halo 3.4s cubic-bezier(.2, 1, .3, 1) both; }
    .femc-rez .wings { position: absolute; top: 30%; width: 30vmin; filter: drop-shadow(0 0 16px #ffd34d); animation: femc-wing 3.4s cubic-bezier(.2, 1, .3, 1) both; }
    .femc-rez .wings svg { display: block; width: 100%; }
    .femc-rez .wings.r { left: 51%; transform-origin: left center; }
    .femc-rez .wings.l { right: 51%; transform-origin: right center; }
    .femc-rez .wings.l svg { transform: scaleX(-1); }
    .femc-rez b { position: relative; margin-top: 30vh; color: #fff; font: italic 900 clamp(36px, 7vw, 84px)/1 "Avenir Next Condensed", "Arial Narrow", sans-serif; text-shadow: 0 0 24px #ffb800, .05em .05em 0 #b37a00; transform: skewX(-8deg); }
    .femc-doves { position: fixed; inset: 0; z-index: 2147483300; pointer-events: none; overflow: hidden; display: grid; place-items: center; background: radial-gradient(circle at 50% 50%, rgba(255, 150, 200, .35), transparent 65%); animation: femc-rez 3.6s ease both; }
    .femc-doves i { position: absolute; left: -12vw; top: var(--y); width: calc(9vmin * var(--s)); fill: var(--c); filter: drop-shadow(0 0 10px #ff8cc0); animation: femc-dove 2.6s cubic-bezier(.3, 0, .6, 1) var(--d) both; }
    .femc-doves i svg { display: block; width: 100%; }
    .femc-doves b { color: #fff; text-align: center; font: italic 900 clamp(34px, 7vw, 82px)/1 "Avenir Next Condensed", "Arial Narrow", sans-serif; text-shadow: 0 0 24px #ff4f9e, .05em .05em 0 #b3125e; transform: skewX(-8deg); }
    .femc-doves b small { display: block; margin-top: 10px; font-size: .26em; letter-spacing: .2em; text-transform: uppercase; }
    @keyframes femc-dove { 0% { transform: translateX(0) translateY(0); } 50% { transform: translateX(65vw) translateY(-6vh); } 100% { transform: translateX(130vw) translateY(-14vh); } }
    @keyframes femc-rez { 0% { opacity: 0; } 10%, 80% { opacity: 1; } 100% { opacity: 0; } }
    @keyframes femc-halo { from { transform: translateY(-40vh) scale(.6); } 40% { transform: none; } }
    @keyframes femc-wing { from { opacity: 0; transform: scaleX(0); } 45% { opacity: 1; transform: none; } }
    @media (prefers-reduced-motion: reduce) { .femc-doves, .femc-doves *, .femc-rez, .femc-rez *, .femc-msg, .femc-rain i, .femc-stat, .femc-dh, .femc-dh time, .femc-op, .femc-opfull { animation: none !important; } .femc-rain { display: none; } }
  `;
  document.head.appendChild(style);

  /* ── Akihiko texts you ─────────────────────────────── */
  const LINES = [
    "Hey. You up for a run tonight? ...I'll wait by the dorm.",
    "Got two tickets to the boxing match this weekend. You in?",
    "Hagakure after training? My treat. ...Don't tell Junpei.",
    "You skipped breakfast again, didn't you. I can tell.",
    "Be careful tonight, alright? I'd rather you didn't go out alone.",
    "I found a new protein flavor. It's... not great. Want to try it?",
    "You've been working hard. Take a break. With me, I mean.",
    "I'm heading to the gym. ...You could come watch. If you want."
  ];
  // A P3P-style message box from anyone: used by Akihiko's texts and by typed secret codes.
  function message(name, line, link) {
    if (document.querySelector('.femc-msg')) document.querySelector('.femc-msg').remove();
    const box = document.createElement('div');
    box.className = 'femc-msg';
    box.setAttribute('role', 'status');
    box.innerHTML = `<span class="femc-msg-name"><span></span></span><div class="femc-msg-box"><p class="femc-msg-text"></p><div class="femc-msg-actions">${link ? `<a href="${BASE}${link.href}"></a>` : ''}<button type="button">Close</button></div></div>`;
    box.querySelector('.femc-msg-name span').textContent = name;
    if (link) box.querySelector('a').textContent = link.text;
    document.body.appendChild(box);
    const text = box.querySelector('.femc-msg-text');
    let i = 0;
    const type = () => {
      if (!box.isConnected) return;
      text.textContent = line.slice(0, ++i);
      if (i % 3 === 1 && line[i - 1] !== ' ') F.sfx('femc-text');
      if (i < line.length) setTimeout(type, line[i - 1] === '.' ? 140 : 32); else box.classList.add('done');
    };
    reduced.matches ? (text.textContent = line, box.classList.add('done')) : type();
    const close = () => { box.classList.add('out'); setTimeout(() => box.remove(), 320); };
    box.querySelector('button').addEventListener('click', close);
    later(() => { if (box.isConnected && !box.matches(':hover')) close(); }, 22000);
  }

  /* ── Secret codes (assets/femc/codes.js) ─────────── */
  // Typing a code in FEMC mode shows a message, unlocks its stamp, and remembers it (kg-femc-codes) so
  // secret scenes can require it (unlock: { codes: [...] }).
  F.load(`assets/femc/codes.js?v=${F.v}`, () => window.FEMC_CODES);
  function tryCode() {
    const c = (window.FEMC_CODES || []).find(x => typed.endsWith(x.code) && (x.needs?.met || []).every(met));
    if (!c) return false;
    typed = '';
    let got = [];
    try { got = JSON.parse(get('kg-femc-codes')) || []; } catch (e) {}
    if (!got.includes(c.code)) { got.push(c.code); set('kg-femc-codes', JSON.stringify(got)); }
    F.sfx(c.sound || 'femc-buzz');
    message(c.from || '???', c.lines[Math.floor(Math.random() * c.lines.length)], c.link);
    if (c.stamp) unlock(c.stamp);
    return true;
  }

  function textFromAkihiko(force) {
    if (document.querySelector('.femc-msg')) return;
    const box = document.createElement('div');
    box.className = 'femc-msg';
    box.setAttribute('role', 'status');
    box.innerHTML = `<span class="femc-msg-name"><span>Akihiko</span></span><div class="femc-msg-box"><p class="femc-msg-text"></p><div class="femc-msg-actions"><a href="${BASE}social.html#akihiko">Go see him</a><button type="button">Later</button></div></div>`;
    document.body.appendChild(box);
    const line = LINES[Math.floor(Math.random() * LINES.length)];
    const text = box.querySelector('.femc-msg-text');
    let i = 0;
    const type = () => {
      if (!box.isConnected) return;
      text.textContent = line.slice(0, ++i);
      if (i % 3 === 1 && line[i - 1] !== ' ') F.sfx('femc-text');
      if (i < line.length) setTimeout(type, line[i - 1] === '.' ? 140 : 32); else box.classList.add('done');
    };
    reduced.matches ? (text.textContent = line, box.classList.add('done')) : type();
    const close = () => { box.classList.add('out'); setTimeout(() => box.remove(), 320); };
    box.querySelector('button').addEventListener('click', close);
    later(() => { if (box.isConnected && !box.matches(':hover')) close(); }, 22000);
    if (!force) set('kg-femc-text', String(Date.now()));
  }
  function maybeText() {
    if (reader || /^(akihiko|compendium|social)$/.test(page)) return;
    const last = Number(get('kg-femc-text')) || 0;
    if (Date.now() - last < 8 * 60 * 1000 || Math.random() > 0.25) return;
    later(() => { if (F.isOn()) textFromAkihiko(); }, 7000 + Math.random() * 7000);
  }

  /* ── Protein ──────────────────────────────────────── */
  function protein() {
    F.sfx('femc-protein');
    if (!reduced.matches) {
      const rain = document.createElement('div');
      rain.className = 'femc-rain';
      rain.setAttribute('aria-hidden', 'true');
      rain.innerHTML = Array.from({ length: 34 }, (_, i) => `<i style="--x:${(Math.random() * 96).toFixed(1)}vw;--s:${(1.6 + Math.random() * 2).toFixed(2)}rem;--t:${(1.6 + Math.random() * 1.4).toFixed(2)}s;--d:${(Math.random() * 0.9).toFixed(2)}s;--r:${Math.round(Math.random() * 540 - 270)}deg">${['🥤', '🍚', '🥩', '🥛', '🍜'][i % 5]}</i>`).join('');
      document.body.appendChild(rain);
      setTimeout(() => rain.remove(), 3600);
    }
    const stat = document.createElement('div');
    stat.className = 'femc-stat';
    stat.setAttribute('role', 'status');
    stat.innerHTML = 'COURAGE ↑<small>Akihiko approves.</small>';
    document.body.appendChild(stat);
    setTimeout(() => stat.remove(), 2700);
    unlock('gains');
  }

  /* ── The Dark Hour (midnight to 1 a.m., once a night) ── */
  function darkHour(force) {
    if (document.querySelector('.femc-dh')) return;
    const now = new Date();
    if (!force && (now.getHours() !== 0 || get('kg-femc-dh') === dayKey(now))) return;
    if (!force) set('kg-femc-dh', dayKey(now));
    const el = document.createElement('div');
    el.className = 'femc-dh';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-label', 'The Dark Hour');
    el.innerHTML = `<div><time>00:00</time><b>THE DARK HOUR</b><p>The hour between one day and the next. Most people don't know it's here.</p></div>`;
    document.body.appendChild(el);
    F.sfx('femc-darkhour');
    unlock('dark-hour');
    const close = () => { if (!el.isConnected) return; el.classList.add('out'); setTimeout(() => el.remove(), 1000); };
    el.addEventListener('click', close);
    setTimeout(close, 9000);
  }

  /* ── Full Moon Operation ─────────────────────────── */
  function fullMoon(force) {
    if (document.querySelector('.femc-op, .femc-opfull')) return;
    const now = new Date();
    if (!force && (!F.moon(now).full || get('kg-femc-fm') === dayKey(now))) return;
    const bar = document.createElement('div');
    bar.className = 'femc-op';
    bar.setAttribute('role', 'alert');
    bar.innerHTML = `<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="9" fill="#fff4f9"/></svg><span><b>Full Moon Operation</b>Tonight's a full moon. Something's waiting.</span><button type="button">Deploy</button><button type="button">Later</button>`;
    document.body.appendChild(bar);
    F.sfx('femc-moon');
    const [deploy, dismiss] = bar.querySelectorAll('button');
    const closeBar = () => { bar.classList.add('out'); setTimeout(() => bar.remove(), 320); };
    dismiss.addEventListener('click', closeBar);
    deploy.addEventListener('click', () => {
      closeBar();
      const full = document.createElement('div');
      full.className = 'femc-opfull';
      full.setAttribute('role', 'dialog');
      full.setAttribute('aria-label', 'Full Moon Operation');
      full.innerHTML = '<div><b>OPERATION START</b><small>Stay close to the team.</small></div>';
      document.body.appendChild(full);
      F.sfx('femc-darkhour');
      setTimeout(() => {
        full.querySelector('div').innerHTML = '<b>OPERATION COMPLETE</b><small>The moon is quiet again. Good work, leader.</small>';
        F.sfx('femc-rankup');
        unlock('full-moon');
        if (!force) set('kg-femc-fm', dayKey(now));
      }, 3200);
      const close = () => { full.classList.add('out'); setTimeout(() => full.remove(), 800); };
      setTimeout(close, 7000);
      full.addEventListener('click', () => { if (full.querySelector('b').textContent.includes('COMPLETE')) close(); });
    });
  }

  /* ── Heroes never die (only once Solar has met Mercy) ── */
  const metMercy = () => { try { return (JSON.parse(localStorage.getItem('kg-femc-game')) || {}).met?.includes('mercy'); } catch (e) { return false; } };
  function heroesNeverDie() {
    F.sfx('femc-rez');
    const el = document.createElement('div');
    el.className = 'femc-rez';
    el.setAttribute('role', 'status');
    const wing = '<svg class="wing" viewBox="0 0 170 120" aria-hidden="true"><defs><linearGradient id="fg" x1="0" x2="1"><stop offset="0" stop-color="#fffbe8"/><stop offset="1" stop-color="#ffd56a"/></linearGradient></defs><g fill="url(#fg)"><rect x="12" y="54" width="150" height="13" rx="6.5" transform="rotate(-40 12 60)"/><rect x="12" y="54" width="130" height="13" rx="6.5" transform="rotate(-25 12 60)"/><rect x="12" y="54" width="110" height="13" rx="6.5" transform="rotate(-10 12 60)"/><rect x="12" y="54" width="90" height="13" rx="6.5" transform="rotate(5 12 60)"/><rect x="12" y="54" width="70" height="13" rx="6.5" transform="rotate(20 12 60)"/><rect x="12" y="54" width="50" height="13" rx="6.5" transform="rotate(35 12 60)"/></g></svg>';
    el.innerHTML = `<i class="halo" aria-hidden="true"></i><span class="wings l">${wing}</span><span class="wings r">${wing}</span><b>HEROES NEVER DIE!</b>`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3400);
    unlock('heroes-never-die');
  }

  /* ── Love birds (only once Solar has met Aphrodite) ── */
  const met = id => { try { return (JSON.parse(localStorage.getItem('kg-femc-game')) || {}).met?.includes(id); } catch (e) { return false; } };
  function loveBirds() {
    F.sfx('femc-doves');
    const el = document.createElement('div');
    el.className = 'femc-doves';
    el.setAttribute('role', 'status');
    const dove = '<svg viewBox="0 0 64 40" aria-hidden="true"><path d="M4 22c8-2 14 0 20 4c4-8 14-18 30-20c-6 6-10 12-12 18c6 0 12 2 18 6c-10 2-20 2-28 0c-6 4-14 6-22 4c4-2 6-5 6-8c-4 0-8-2-12-4z"/></svg>';
    el.innerHTML = Array.from({ length: 16 }, (_, i) => `<i style="--y:${(8 + Math.random() * 70).toFixed(1)}vh;--d:${(Math.random() * 0.9).toFixed(2)}s;--s:${(0.7 + Math.random() * 0.9).toFixed(2)};--c:${i % 3 ? '#ffffff' : '#ffb3d1'}">${dove}</i>`).join('') + '<b>MID LANE GODDESS<small>20+ ★ · KDA 5–7 · solo and mid</small></b>';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3600);
    unlock('mid-lane-goddess');
  }

  /* ── Typed words ─────────────────────────────────── */
  let typed = '';
  document.addEventListener('keydown', e => {
    if (!F.isOn() || e.metaKey || e.ctrlKey || e.altKey || e.key.length !== 1) return;
    if (e.target.closest && e.target.closest('input, textarea, select, [contenteditable]')) return;
    typed = (typed + e.key.toLowerCase()).slice(-40);
    if (tryCode()) return;
    if (typed.endsWith('heroes never die') && metMercy()) { typed = ''; heroesNeverDie(); return; }
    if (typed.endsWith('love birds') && met('aphrodite')) { typed = ''; loveBirds(); return; }
    if (typed.endsWith('protein')) { typed = ''; protein(); }
    else if (typed.endsWith('akihiko') && page !== 'akihiko') { typed = ''; F.sfx('femc-click'); location.href = BASE + 'social.html#akihiko'; }
    else if (typed.endsWith('compendium') && page !== 'compendium') { typed = ''; F.sfx('femc-click'); location.href = BASE + 'compendium.html'; }
  });

  function start() {
    if (started) return;
    started = true;
    if (preview) {
      const show = { darkhour: () => darkHour(true), fullmoon: () => fullMoon(true), text: () => textFromAkihiko(true), protein }[preview];
      if (show) later(show, 600);
      return;
    }
    darkHour();
    later(() => fullMoon(), 1200);
    maybeText();
  }
  function stop() {
    started = false;
    timers.splice(0).forEach(clearTimeout);
    document.querySelectorAll('.femc-msg, .femc-op').forEach(el => el.remove());
  }
  document.addEventListener('visibilitychange', () => { if (!document.hidden && started && F.isOn()) darkHour(); });
  return { start, stop, text: textFromAkihiko };
})();
