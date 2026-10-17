/* FEMC mode's menu: a P3P-style menu that reaches everything on the other side.
   Opened from the MENU button on the badge or the FEMC tab in the top bar (femc-mode.js loads this on demand). */
window.FemcMenu = (() => {
  const F = window.FemcMode;
  const BASE = F.base;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const read = (k, fallback) => { try { return JSON.parse(localStorage.getItem(k)) ?? fallback; } catch (e) { return fallback; } };
  const page = (location.pathname.split('/').pop() || 'index.html').replace('.html', '');
  const COND = '"Avenir Next Condensed", "Arial Narrow", "Helvetica Neue", sans-serif';

  const style = document.createElement('style');
  style.textContent = `
    .fm { position: fixed; inset: 0; z-index: 2147483300; overflow: hidden; color: #fff; font-family: ${COND}; background: rgba(14, 5, 10, .86); backdrop-filter: blur(6px); animation: fm-fade .25s ease both; }
    .fm.out { animation: fm-fade .25s ease reverse forwards; pointer-events: none; }
    .fm::before { content: ""; position: absolute; left: -12%; top: -20%; width: 54%; height: 140%; background: #ff4f9e; transform: skewX(-14deg); box-shadow: 18px 0 0 #14070f, 26px 0 0 rgba(255, 140, 192, .5); animation: fm-band .45s cubic-bezier(.2, 1, .3, 1) both; }
    .fm-art { position: absolute; right: -4vw; bottom: 0; height: 92vh; max-width: 62vw; object-fit: cover; object-position: 20% 50%; opacity: .5; -webkit-mask-image: linear-gradient(to right, transparent, #000 30%); mask-image: linear-gradient(to right, transparent, #000 30%); animation: fm-art .6s .1s cubic-bezier(.2, 1, .3, 1) both; }
    .fm-inner { position: relative; display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 4vw; height: 100%; padding: 6vh 6vw; align-items: center; }
    .fm-kicker { margin: 0 0 14px 8px; color: #14070f; font: italic 900 15px/1 ${COND}; letter-spacing: .4em; text-transform: uppercase; }
    .fm-list { display: grid; gap: 6px; margin: 0; padding: 0; list-style: none; }
    .fm-list li { animation: fm-item .4s cubic-bezier(.2, 1.2, .4, 1) both; }
    .fm-item { display: flex; align-items: baseline; gap: 14px; width: min(100%, 470px); padding: 9px 22px 9px 18px; border: 0; background: rgba(20, 7, 15, .82); color: #fff; text-align: left; text-decoration: none; transform: skewX(-14deg); cursor: inherit; }
    .fm-item > * { transform: skewX(14deg); }
    .fm-item b { font: italic 900 clamp(24px, 3.2vw, 38px)/1 ${COND}; letter-spacing: -.01em; text-transform: uppercase; }
    .fm-item small { margin-left: auto; color: #ff8cc0; font: italic 800 12px/1.2 ${COND}; letter-spacing: .1em; text-transform: uppercase; white-space: nowrap; }
    .fm-item:is(:hover, :focus-visible, [aria-current="true"]) { outline: none; background: #fff; color: #14070f; box-shadow: 8px 8px 0 #14070f; }
    .fm-item:is(:hover, :focus-visible) small { color: #ff4f9e; }
    .fm-list li:nth-child(even) .fm-item { margin-left: 18px; }
    .fm-desc { align-self: end; margin-bottom: 4vh; animation: fm-item .45s .2s both; }
    .fm-desc-name { display: inline-block; margin-left: 16px; padding: 6px 16px; background: #ff4f9e; font: italic 900 16px/1 ${COND}; letter-spacing: .06em; text-transform: uppercase; transform: skewX(-14deg); box-shadow: 4px 4px 0 #14070f; }
    .fm-desc-box { margin-top: -4px; padding: 18px 22px; border: 2px solid #ff8cc0; border-radius: 4px 22px 4px 22px; background: rgba(20, 7, 15, .92); box-shadow: 6px 6px 0 rgba(255, 79, 158, .45); font: 600 16px/1.45 "Avenir Next", "Helvetica Neue", sans-serif; min-height: 6.5em; }
    .fm-desc-box p { margin: 0 0 6px; }
    .fm-desc-box .fm-dim { color: #d9a9c0; font-size: 14px; }
    .fm-desc-box .fm-moon { display: inline-block; width: 18px; height: 18px; vertical-align: -3px; margin-right: 6px; }
    .fm-desc-box .fm-moon svg { width: 100%; height: 100%; }
    .fm-ctrls { display: flex; gap: 8px; margin-top: 10px; }
    .fm-ctrls button { padding: 7px 14px; border: 0; background: rgba(255, 255, 255, .1); color: #fff; font: italic 800 13px/1 ${COND}; letter-spacing: .06em; text-transform: uppercase; transform: skewX(-14deg); cursor: inherit; }
    .fm-ctrls button:is(:hover, :focus-visible) { background: #fff; color: #14070f; outline: none; box-shadow: 4px 4px 0 #ff4f9e; }
    .fm-close { position: absolute; top: 18px; right: 22px; z-index: 2; padding: 8px 16px; border: 0; background: #14070f; color: #fff; font: italic 900 15px/1 ${COND}; letter-spacing: .1em; text-transform: uppercase; transform: skewX(-14deg); box-shadow: 4px 4px 0 #ff4f9e; cursor: inherit; }
    .fm-close:is(:hover, :focus-visible) { background: #fff; color: #14070f; outline: none; }
    @keyframes fm-fade { from { opacity: 0; } }
    @keyframes fm-band { from { transform: skewX(-14deg) translateX(-100%); } }
    @keyframes fm-art { from { opacity: 0; transform: translateX(8%); } }
    @keyframes fm-item { from { opacity: 0; transform: translateX(-50px); } }
    @media (max-width: 760px) {
      .fm::before { width: 120%; left: -40%; opacity: .9; }
      .fm-art { opacity: .25; max-width: none; width: 100%; }
      .fm-inner { grid-template-columns: 1fr; align-content: center; gap: 22px; padding: 70px 18px 24px; }
      .fm-list li:nth-child(even) .fm-item { margin-left: 10px; }
      .fm-desc { margin: 0; }
    }
    @media (prefers-reduced-motion: reduce) { .fm, .fm *, .fm::before { animation: none !important; } }
  `;
  document.head.appendChild(style);

  const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  function untilDarkHour(now) {
    if (now.getHours() === 0) return "It's the Dark Hour right now.";
    const next = new Date(now); next.setHours(24, 0, 0, 0);
    const mins = Math.round((next - now) / 60000);
    return `The Dark Hour comes in ${Math.floor(mins / 60)}h ${mins % 60}m.`;
  }
  function otherSideStamps() {
    const A = window.Achievements;
    if (!A) return null;
    const got = A.unlocked(), list = A.list().filter(a => a.group === 'The other side');
    return { found: list.filter(a => got[a.id]).length, total: list.length };
  }
  function compendiumCount() {
    const list = (window.FEMC_COMPENDIUM || []).filter(e => !e.secret || (window.femcCompendiumOpen && window.femcCompendiumOpen(e)));
    return { found: window.femcCompendiumOpen ? list.filter(window.femcCompendiumOpen).length : 0, total: list.length };
  }

  function items() {
    const X = window.FemcSocial;
    const met = X ? Object.values(X.links).filter(l => X.isMet(l.id)) : [];
    const free = X ? X.freeNow() : [];
    const game = X ? X.now() : null;
    const now = new Date(), moon = F.moon(now);
    const stamps = otherSideStamps(), comp = compendiumCount();
    const m = F.music;
    return [
      { id: 'social', label: 'Social Link', sub: met.length ? `${met.length} ${met.length === 1 ? 'bond' : 'bonds'}` : 'No bonds yet', href: 'social.html#links', name: 'Social Link',
        desc: () => `<p>${met.length ? met.map(l => `${l.short} · ${X.progress(l.id).rank >= 10 ? 'MAX' : `Rank ${X.progress(l.id).rank}`}`).join('<br>') : 'Nobody here knows you yet. Someone at the dorm might.'}</p><p class="fm-dim">${free.length ? `Free right now: ${free.map(l => X.nameFor(l)).join(', ')}.` : 'Nobody you know is free right now.'}</p>` },
      { id: 'phone', label: 'Phone', sub: X && X.unread() ? `${X.unread()} new` : 'Messages', name: 'Phone',
        desc: () => `<p>${X && X.unread() ? `You have <b>${X.unread()}</b> unread ${X.unread() === 1 ? 'message' : 'messages'}.` : 'Your messages. People text when time passes between hangouts.'}</p><p class="fm-dim">Some texts are waiting for an answer.</p>` },
      { id: 'compendium', label: 'Compendium', sub: `${comp.found} of ${comp.total}`, href: 'compendium.html', name: 'Compendium',
        desc: () => `<p>Characters from the worlds I didn't write. Entries register as you find things on the other side.</p><p class="fm-dim">${comp.found} of ${comp.total} registered.</p>` },
      { id: 'calendar', label: 'Go Out', sub: game ? `${game.md} ${game.day} · ${game.time}` : '', href: 'social.html', name: 'Go Out',
        desc: () => `<p>${game ? `In Iwatodai it's <b>${game.md} ${game.day}</b>, ${game.time.toLowerCase()}.` : ''} Pick a place and see who's around. Spending time with someone moves the day forward.</p><p class="fm-dim"><span class="fm-moon">${moon.svg}</span>Out here: ${moon.name}${moon.full ? ', a full moon tonight.' : `, next full moon ${moon.next}.`} ${untilDarkHour(now)}</p>` },
      { id: 'music', label: 'Music', sub: m.tracks().length ? (m.playing() || 'Paused') : 'None', name: 'Music',
        desc: () => m.tracks().length ? `<p>${m.playing() ? `Now playing: <b>${m.playing()}</b>` : 'The music is paused.'}</p><div class="fm-ctrls"><button type="button" data-music="toggle">${m.playing() ? '❚❚ Pause' : '▶ Play'}</button>${m.tracks().length > 1 ? '<button type="button" data-music="next">⏭ Next track</button>' : ''}</div>` : '<p>No music yet.</p>' },
      { id: 'stamps', label: 'Stamps', sub: stamps ? `${stamps.found} of ${stamps.total}` : 'Passport', href: 'passport.html#secretHeading', name: 'Stamps',
        desc: () => `<p>Stamps from the other side, kept in your passport.</p><p class="fm-dim">${stamps ? `${stamps.found} of ${stamps.total} found. Locked ones come with a riddle.` : ''}</p>` },
      { id: 'return', label: 'Return', sub: 'to the idols', name: 'Return',
        desc: () => '<p>Leave the game worlds and go back to the idols.</p><p class="fm-dim">Type femc anytime to cross over again.</p>' }
    ];
  }

  let el = null, lastFocus = null;
  function close() {
    if (!el) return;
    const gone = el; el = null;
    document.removeEventListener('keydown', keys, true);
    gone.classList.add('out');
    setTimeout(() => gone.remove(), reduced.matches ? 0 : 250);
    lastFocus?.focus?.({ preventScroll: true });
  }
  function describe(item) {
    el.querySelector('.fm-desc-name').textContent = item.name;
    el.querySelector('.fm-desc-box').innerHTML = item.desc();
    el.querySelectorAll('.fm-item').forEach(b => b.setAttribute('aria-current', String(b.dataset.id === item.id)));
    el.querySelectorAll('[data-music]').forEach(b => b.addEventListener('click', () => {
      b.dataset.music === 'next' ? F.music.next() : F.music.toggle();
      setTimeout(() => refresh('music'), 250);
    }));
  }
  function refresh(focusId) {
    const list = items();
    const ul = el.querySelector('.fm-list');
    ul.replaceChildren(...list.map((item, i) => {
      const li = document.createElement('li');
      li.style.animationDelay = `${0.08 + i * 0.05}s`;
      const node = document.createElement(item.href ? 'a' : 'button');
      node.className = 'fm-item';
      node.dataset.id = item.id;
      if (item.href) node.href = BASE + item.href; else node.type = 'button';
      if (item.href && page === item.href.replace(/\.html.*/, '')) node.setAttribute('aria-label', `${item.label} (you're here)`);
      node.innerHTML = '<b></b><small></small>';
      node.querySelector('b').textContent = item.label;
      node.querySelector('small').textContent = item.sub;
      node.addEventListener('mouseenter', () => describe(item));
      node.addEventListener('focus', () => describe(item));
      node.addEventListener('click', e => {
        if (item.id === 'return') { close(); F.toggle(false); }
        else if (item.id === 'phone') { close(); window.FemcSocial?.openPhone(); }
        else if (item.id === 'music') { F.music.toggle(); setTimeout(() => refresh('music'), 250); }
                else if (item.href && page === item.href.replace(/\.html.*/, '') && !item.href.includes('#')) { e.preventDefault(); close(); }
      });
      li.appendChild(node);
      return li;
    }));
    const target = ul.querySelector(`[data-id="${focusId}"]`) || ul.querySelector('.fm-item');
    target.focus({ preventScroll: true });
    describe(list.find(i => i.id === target.dataset.id));
  }
  function keys(e) {
    if (!el) return;
    if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); F.sfx('femc-back'); close(); return; }
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const all = [...el.querySelectorAll('.fm-item')];
      const i = all.indexOf(document.activeElement);
      all[(i + (e.key === 'ArrowDown' ? 1 : all.length - 1) + all.length) % all.length].focus();
      F.sfx('femc-hover');
    }
  }
  function open() {
    if (el) return;
    lastFocus = document.activeElement;
    el = document.createElement('div');
    el.className = 'fm';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-label', 'FEMC menu');
    el.innerHTML = `<img class="fm-art" src="${BASE}assets/femc/img/femc-lying.jpg" alt="">
      <button class="fm-close" type="button">✕ Close</button>
      <div class="fm-inner"><nav><p class="fm-kicker">Menu</p><ul class="fm-list"></ul></nav>
      <div class="fm-desc" aria-live="polite"><span class="fm-desc-name"></span><div class="fm-desc-box"></div></div></div>`;
    document.body.appendChild(el);
    el.querySelector('.fm-close').addEventListener('click', close);
    el.addEventListener('click', e => { if (e.target === el || e.target.classList.contains('fm-inner')) { F.sfx('femc-back'); close(); } });
    document.addEventListener('keydown', keys, true);
    F.sfx('femc-click');
    refresh(page === 'compendium' ? 'compendium' : page === 'akihiko' ? 'social' : null);
    // Counts for the compendium and stamps load in the background, then the list redraws.
    Promise.all([F.load('achievements.js?v=19', () => window.Achievements), F.load(`assets/femc/compendium.js?v=${F.v}`, () => window.FEMC_COMPENDIUM),
      F.load('femc-social.js?v=96', () => window.FemcSocial).then(() => window.FemcSocial?.load())])
      .then(() => { if (el) refresh(document.activeElement?.dataset?.id); });
  }
  return { open, close };
})();
