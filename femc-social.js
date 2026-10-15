/* FEMC mode social links: the shared in-game calendar, link progress, and a P3P-style scene player.
   Links are data files in assets/femc/links/<id>.js that call FemcSocial.define({...}); see akihiko.js for the format.
   Progress lives in localStorage 'kg-femc-game'. Add ?femctest to the URL for Kat's test panel. */
window.FemcSocial = (() => {
  const F = () => window.FemcMode;
  const KEY = 'kg-femc-game';
  const START = new Date(2009, 3, 7);           // 4/7/2009, the first day of the school year
  const END_DAY = Math.round((new Date(2010, 0, 31) - START) / 86400000);
  const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const links = {};
  const CAST = {};                               // speaker id -> display name, for side characters

  /* ── State ───────────────────────────────────────── */
  const fresh = () => ({ d: 0, slot: 0, spent: {}, links: {}, met: [], registered: [], free: false });
  let S = (() => { try { return { ...fresh(), ...JSON.parse(localStorage.getItem(KEY)) }; } catch (e) { return fresh(); } })();
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} listeners.forEach(fn => fn()); };
  const listeners = [];
  const onChange = fn => listeners.push(fn);
  const progress = id => (S.links[id] ||= { rank: 0, notes: 0, route: null, seen: [] });

  /* ── Calendar ────────────────────────────────────── */
  const dateOf = d => new Date(2009, 3, 7 + d);
  const dayOf = md => { const [m, dd] = md.split('/').map(Number); return Math.round((new Date(m >= 4 ? 2009 : 2010, m - 1, dd) - START) / 86400000); };
  const slotName = (d, slot) => slot === 1 ? 'Evening' : [0, 6].includes(dateOf(d).getDay()) ? 'Daytime' : 'After School';
  function now() {
    const date = dateOf(S.d);
    return { d: S.d, slot: S.slot, date, md: `${date.getMonth() + 1}/${date.getDate()}`, day: DAYS[date.getDay()], time: slotName(S.d, S.slot), last: S.d >= END_DAY };
  }
  function advance() {
    if (S.slot === 0) S.slot = 1; else if (S.d < END_DAY) { S.d += 1; S.slot = 0; }
    save();
  }
  function nextDay() { if (S.d < END_DAY) { S.d += 1; S.slot = 0; save(); } }

  /* ── Links ───────────────────────────────────────── */
  function define(link) {
    links[link.id] = link;
    Object.assign(CAST, link.cast || {});
    CAST[link.id] = link.short || link.name;
  }
  const arrived = link => S.free || !link.arrives || S.d >= dayOf(link.arrives);
  const isMet = id => S.met.includes(id);
  // Why a link can or can't be seen right now: { ok, reason }.
  function status(link) {
    const p = progress(link.id);
    if (p.rank >= link.ranks.length) return { ok: false, reason: 'max' };
    if (!arrived(link)) return { ok: false, reason: 'away' };
    if (S.free) return { ok: true };
    if (S.spent[`${S.d}-${S.slot}`]) return { ok: false, reason: 'spent' };
    const next = link.ranks[p.rank];
    if (next.after && S.d < dayOf(next.after)) return { ok: false, reason: 'later', when: next.after };
    const h = link.home;
    if (h.slot !== S.slot || !h.days.includes(dateOf(S.d).getDay())) return { ok: false, reason: 'elsewhere' };
    return { ok: true };
  }
  const freeNow = () => Object.values(links).filter(l => status(l).ok);
  const nameFor = link => (isMet(link.id) ? link.name : '???');

  /* ── Portraits ───────────────────────────────────── */
  function portrait(id, face) {
    const have = (window.FEMC_PORTRAITS || {})[id] || [];
    const pick = [face, face && face.replace(/-\d+$/, ''), 'neutral', have[0]].find(f => f && have.includes(f));
    return pick ? `${F().base}assets/femc/portraits/${id}/${pick}.webp?v=3` : null;
  }

  /* ── Styles ──────────────────────────────────────── */
  const COND = '"Avenir Next Condensed", "Arial Narrow", "Helvetica Neue", sans-serif';
  const style = document.createElement('style');
  style.textContent = `
    .vn { position: fixed; inset: 0; z-index: 2147483200; overflow: hidden; color: #fff; font-family: "Avenir Next", "Helvetica Neue", sans-serif; background: radial-gradient(ellipse at 70% 30%, #3a1430, #12060e 70%); animation: vn-in .4s ease both; }
    .vn::before { content: ""; position: absolute; inset: 0; background: repeating-linear-gradient(-58deg, rgba(255, 79, 158, .06) 0 2px, transparent 2px 26px); }
    .vn.out { animation: vn-in .35s ease reverse forwards; pointer-events: none; }
    .vn-place { position: absolute; top: 22px; left: 26px; display: flex; align-items: center; gap: 14px; padding: 8px 18px; background: #14070f; transform: skewX(-14deg); box-shadow: 5px 5px 0 rgba(255, 79, 158, .55); z-index: 3; }
    .vn-place > * { transform: skewX(14deg); }
    .vn-place b { font: italic 900 24px/1 ${COND}; }
    .vn-place b small { margin-left: 4px; color: #ff8cc0; font-size: 12px; letter-spacing: .08em; }
    .vn-place span { color: #ff8cc0; font: italic 800 12px/1.2 ${COND}; letter-spacing: .12em; text-transform: uppercase; }
    .vn-portrait { position: absolute; right: 4vw; bottom: 0; height: min(86vh, 900px); max-width: 60vw; object-fit: contain; object-position: bottom; filter: drop-shadow(10px 10px 0 rgba(255, 79, 158, .35)); transition: opacity .25s, transform .25s, filter .25s; -webkit-mask-image: linear-gradient(to bottom, #000 80%, transparent 98%); mask-image: linear-gradient(to bottom, #000 80%, transparent 98%); }
    .vn-portrait.dim { filter: brightness(.55) drop-shadow(10px 10px 0 rgba(255, 79, 158, .2)); }
    .vn-portrait.swap { opacity: 0; transform: translateX(30px); }
    .vn-silhouette { position: absolute; right: 8vw; bottom: 0; width: min(46vw, 520px); height: min(76vh, 760px); background: linear-gradient(#000, #000) center bottom / 70% 52% no-repeat, radial-gradient(circle at 50% 30%, #000 0 22%, transparent 23%); opacity: .55; }
    .vn-box { position: absolute; left: 50%; bottom: 4vh; z-index: 4; width: min(980px, calc(100vw - 32px)); transform: translateX(-50%); cursor: pointer; }
    .vn-name { display: inline-block; min-height: 30px; margin-left: 22px; padding: 6px 20px; background: #ff4f9e; font: italic 900 18px/1 ${COND}; letter-spacing: .06em; text-transform: uppercase; transform: skewX(-14deg); box-shadow: 4px 4px 0 #14070f; }
    .vn-name:empty { visibility: hidden; }
    .vn-text { position: relative; min-height: 7.2em; margin: -4px 0 0; padding: 22px 28px 26px; border: 2px solid #ff8cc0; border-radius: 4px 26px 4px 26px; background: rgba(20, 7, 15, .93); box-shadow: 8px 8px 0 rgba(255, 79, 158, .45); font-size: clamp(16px, 1.6vw, 19px); line-height: 1.5; font-weight: 600; }
    .vn-text.narration { font-style: italic; color: #f5d9e7; font-weight: 500; }
    .vn-text::after { content: "▼"; position: absolute; right: 22px; bottom: 12px; color: #ff4f9e; font-size: 12px; opacity: 0; }
    .vn.ready .vn-text::after { opacity: 1; animation: vn-blink 1s steps(2) infinite; }
    .vn-choices { position: absolute; left: max(5vw, 16px); bottom: calc(4vh + 200px); z-index: 5; display: grid; gap: 10px; justify-items: start; max-width: min(560px, calc(100vw - 32px)); }
    .vn-choices button { padding: 11px 26px; border: 0; background: rgba(20, 7, 15, .92); color: #fff; font: italic 800 clamp(15px, 1.5vw, 18px)/1.25 ${COND}; letter-spacing: .02em; text-align: left; transform: skewX(-14deg); box-shadow: 5px 5px 0 rgba(255, 79, 158, .5); cursor: inherit; animation: vn-choice .35s cubic-bezier(.2, 1.2, .4, 1) both; }
    .vn-choices button > span { display: inline-block; transform: skewX(14deg); }
    .vn-choices button:is(:hover, :focus-visible) { background: #fff; color: #14070f; outline: none; box-shadow: 7px 7px 0 #ff4f9e; }
    .vn-notes { position: absolute; right: 18vw; top: 26vh; z-index: 6; display: flex; gap: 6px; pointer-events: none; }
    .vn-notes i { font-style: normal; font-size: 46px; color: #ff4f9e; text-shadow: 3px 3px 0 #fff; animation: vn-note 1.4s cubic-bezier(.2, 1.4, .4, 1) var(--d) both; }
    .vn-tools { position: absolute; top: 22px; right: 22px; z-index: 6; display: flex; gap: 8px; }
    .vn-tools button { padding: 7px 14px; border: 0; background: #14070f; color: #fff; font: italic 900 13px/1 ${COND}; letter-spacing: .1em; text-transform: uppercase; transform: skewX(-14deg); box-shadow: 3px 3px 0 #ff4f9e; cursor: inherit; }
    .vn-tools button:is(:hover, :focus-visible) { background: #fff; color: #14070f; outline: none; }
    .vn-rank { position: absolute; inset: 0; z-index: 8; display: grid; place-items: center; background: rgba(14, 5, 10, .9); cursor: pointer; animation: vn-in .4s ease both; }
    .vn-rank-inner { display: grid; justify-items: center; gap: 18px; text-align: center; padding: 16px; }
    .vn-card { width: 150px; height: 230px; display: grid; place-content: center; gap: 8px; border: 3px solid #ff8cc0; border-radius: 10px; background: linear-gradient(160deg, #ff4f9e, #7a0b3e); box-shadow: 0 0 40px rgba(255, 79, 158, .6); font: italic 900 46px/1 ${COND}; animation: vn-card 1.1s cubic-bezier(.2, 1.2, .4, 1) both; }
    .vn-card small { font-size: 15px; letter-spacing: .2em; text-transform: uppercase; }
    .vn-thou { min-height: 3.2em; margin: 0; font: italic 600 18px/1.6 Georgia, serif; color: #ffd6e8; }
    .vn-ranknum { margin: 0; font: italic 900 clamp(56px, 10vw, 110px)/.9 ${COND}; text-shadow: .06em .06em 0 #ff4f9e; transform: skewX(-8deg); animation: vn-slam .7s 1.2s cubic-bezier(.2, 1.5, .4, 1) both; }
    .vn-ranknum small { display: block; font-size: .2em; letter-spacing: .3em; }
    .vn-reg { position: fixed; left: 50%; top: 20px; z-index: 2147483400; display: flex; align-items: center; gap: 14px; padding: 10px 22px 10px 10px; transform: translateX(-50%); background: #14070f; border: 2px solid #ff8cc0; box-shadow: 6px 6px 0 rgba(255, 79, 158, .5); color: #fff; animation: vn-reg 3.4s ease both; pointer-events: none; }
    .vn-reg img, .vn-reg .ph { width: 52px; height: 52px; object-fit: cover; object-position: top; border-radius: 50%; background: #3a1028; }
    .vn-reg b { display: block; font: italic 900 13px/1 ${COND}; letter-spacing: .2em; color: #ff8cc0; text-transform: uppercase; }
    .vn-reg span { font: italic 900 22px/1.1 ${COND}; }
    .vn.vn-break::after { content: ""; position: absolute; inset: 0; z-index: 7; background: #0c0309; animation: vn-break .7s ease both; pointer-events: none; }
    .vn-title { position: absolute; inset: 0; z-index: 9; display: grid; place-items: center; background: rgba(12, 3, 9, .94); cursor: pointer; animation: vn-in .5s ease both; }
    .vn-title.out { animation: vn-in .5s ease reverse forwards; }
    .vn-title p { margin: 0; text-align: center; transform: skewX(-8deg); }
    .vn-title small { display: block; margin-bottom: 14px; color: #ff8cc0; font: italic 800 14px/1 ${COND}; letter-spacing: .34em; text-transform: uppercase; }
    .vn-title span { font: italic 600 clamp(34px, 6vw, 72px)/1 Georgia, "Times New Roman", serif; text-shadow: .05em .05em 0 #ff4f9e; }
    .vn-phone { position: absolute; left: 50%; top: 50%; z-index: 7; width: min(340px, calc(100vw - 40px)); height: min(560px, 70vh); display: grid; grid-template-rows: auto 1fr auto; transform: translate(-50%, -54%); border: 10px solid #1b0b15; border-radius: 34px; background: #f7f2f5; box-shadow: 10px 10px 0 rgba(255, 79, 158, .5); overflow: hidden; color: #1b0b15; animation: vn-phone .4s cubic-bezier(.2, 1.3, .4, 1) both; cursor: pointer; }
    .vn.phoning .vn-box, .vn.phoning .vn-portrait { opacity: 0; }
    .vn-phone-head { padding: 14px; background: #fff; border-bottom: 1px solid #eadde4; text-align: center; font: 700 15px/1 -apple-system, "Helvetica Neue", sans-serif; }
    .vn-phone-thread { display: flex; flex-direction: column; gap: 8px; padding: 14px; overflow-y: auto; }
    .vn-msg { max-width: 80%; margin: 0; padding: 8px 12px; border-radius: 16px; font: 15px/1.35 -apple-system, "Helvetica Neue", sans-serif; animation: vn-in .25s ease both; }
    .vn-msg b { display: block; margin-bottom: 2px; font-size: 11px; opacity: .6; }
    .vn-msg.them { align-self: flex-start; background: #e7dde3; }
    .vn-msg.me { align-self: flex-end; background: #ff4f9e; color: #fff; }
    .vn-phone-hint { margin: 0; padding: 8px; text-align: center; font: 600 11px/1 -apple-system, sans-serif; letter-spacing: .1em; text-transform: uppercase; opacity: .45; }
    .vn-log { position: absolute; inset: 0; z-index: 9; display: grid; grid-template-rows: 1fr auto; gap: 12px; padding: 70px max(16px, 8vw) 24px; background: rgba(12, 3, 9, .95); }
    .vn-log-inner { overflow-y: auto; max-width: 760px; width: 100%; margin: 0 auto; }
    .vn-log p { margin: 0 0 14px; font-size: 16px; line-height: 1.55; }
    .vn-log p b { display: block; color: #ff8cc0; font: italic 900 14px/1.3 ${COND}; letter-spacing: .08em; text-transform: uppercase; }
    .vn-log p.n { font-style: italic; color: #e9c9d8; }
    .vn-log > button { justify-self: center; padding: 9px 20px; border: 0; background: #ff4f9e; color: #fff; font: italic 900 14px/1 ${COND}; letter-spacing: .08em; text-transform: uppercase; transform: skewX(-14deg); cursor: inherit; }
    @keyframes vn-break { 0% { opacity: 0; } 35%, 55% { opacity: 1; } 100% { opacity: 0; } }
    @keyframes vn-phone { from { opacity: 0; transform: translate(-50%, -40%); } }
    @keyframes vn-in { from { opacity: 0; } }
    @keyframes vn-blink { 50% { opacity: 0; } }
    @keyframes vn-choice { from { opacity: 0; transform: translateX(-40px) skewX(-14deg); } }
    @keyframes vn-note { 0% { opacity: 0; transform: translateY(30px) scale(.5); } 25% { opacity: 1; transform: translateY(0) scale(1.1); } 80% { opacity: 1; } 100% { opacity: 0; transform: translateY(-40px); } }
    @keyframes vn-card { 0% { transform: rotateY(180deg) scale(.6); opacity: 0; } 60% { transform: rotateY(-10deg) scale(1.05); opacity: 1; } 100% { transform: none; } }
    @keyframes vn-slam { from { opacity: 0; transform: skewX(-8deg) scale(1.8); } }
    @keyframes vn-reg { 0% { opacity: 0; transform: translate(-50%, -30px); } 10%, 85% { opacity: 1; transform: translate(-50%, 0); } 100% { opacity: 0; transform: translate(-50%, -20px); } }
    @media (max-width: 700px) {
      .vn-portrait { right: 50%; transform: translateX(50%); max-width: 92vw; height: 62vh; bottom: 150px; }
      .vn-portrait.swap { transform: translateX(50%) translateY(20px); }
      .vn-text { min-height: 8em; padding: 18px 18px 24px; }
      .vn-choices { bottom: 240px; left: 16px; right: 16px; justify-items: stretch; }
      .vn-choices button { text-align: left; }
      .vn-place { left: 12px; top: 12px; }
      .vn-place b { font-size: 18px; }
      .vn-tools { top: 64px; right: 12px; }
    }
    @media (prefers-reduced-motion: reduce) { .vn, .vn *, .vn-reg { animation: none !important; transition: none !important; } }
  `;
  document.head.appendChild(style);

  /* ── Compendium registration ─────────────────────── */
  function register(id, quiet) {
    if (S.registered.includes(id)) return;
    S.registered.push(id); save();
    if (quiet) return;
    const pic = portrait(id, 'neutral');
    const el = document.createElement('div');
    el.className = 'vn-reg';
    el.setAttribute('role', 'status');
    el.innerHTML = `${pic ? `<img src="${pic}" alt="">` : '<span class="ph"></span>'}<div><b>Registered to the Compendium</b><span></span></div>`;
    el.querySelector('span:last-child').textContent = CAST[id] || id;
    document.body.appendChild(el);
    F().sfx('femc-register');
    setTimeout(() => el.remove(), 3500);
  }

  /* ── Scene player ────────────────────────────────── */
  // Plays rank `r` (0-based) of a link. opts.replay skips progress, stamps and the rank-up.
  function play(link, r, opts = {}) {
    const rank = link.ranks[r];
    const p = progress(link.id);
    let gained = 0;
    const el = document.createElement('div');
    el.className = 'vn';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-label', `${link.name}, rank ${r + 1}`);
    const when = opts.replay ? '' : `${now().md}<small>${now().day}</small>`;
    el.innerHTML = `<div class="vn-place"><b>${when}</b><span></span></div>
      <img class="vn-portrait" alt="">
      <div class="vn-tools"><button type="button" data-t="log">Log</button><button type="button" data-t="skip">Skip ▸▸</button><button type="button" data-t="leave">Leave</button></div>
      <div class="vn-log" hidden><div class="vn-log-inner"></div><button type="button" data-t="log-close">Close log</button></div>
      <div class="vn-choices"></div>
      <div class="vn-box" aria-live="polite"><span class="vn-name"></span><p class="vn-text"></p></div>`;
    el.querySelector('.vn-place span').textContent = `${opts.replay ? 'Memory · ' : (now().time + ' · ')}${rank.place}`;
    document.body.appendChild(el);
    const img = el.querySelector('.vn-portrait'), nameEl = el.querySelector('.vn-name'), textEl = el.querySelector('.vn-text'), choices = el.querySelector('.vn-choices');
    let currentFace = null;
    let music = null;
    if (link.music) { music = new Audio(F().base + link.music); music.loop = true; music.volume = 0.32; music.play().catch(() => {}); }

    // Flatten the scene into a queue we can push branches onto.
    const queue = [...rank.scene];
    let typing = null, full = '', waiting = null, skipping = false;
    const sub = text => text.replace(/\{name\}/g, 'Solar');
    function showPortrait(who, face) {
      const src = portrait(who, face || 'neutral');
      const key = `${who}/${src}`;
      if (key === currentFace) { img.classList.remove('dim'); return; }
      const swap = currentFace && currentFace.split('/')[0] !== who;
      currentFace = key;
      const apply = () => { if (src) { img.src = src; img.hidden = false; } else img.hidden = true; img.alt = CAST[who] || ''; img.classList.remove('swap', 'dim'); };
      if (swap && !reduced.matches) { img.classList.add('swap'); setTimeout(apply, 200); } else apply();
    }
    function say(text, done) {
      full = sub(text); let i = 0;
      el.classList.remove('ready');
      textEl.textContent = '';
      const finish = () => { clearTimeout(typing); typing = null; textEl.textContent = full; el.classList.add('ready'); waiting = done; };
      if (reduced.matches || skipping) return finish();
      const step = () => {
        textEl.textContent = full.slice(0, ++i);
        if (i % 3 === 1 && full[i - 1] !== ' ') F().sfx('femc-text');
        if (i < full.length) typing = setTimeout(step, '.!?'.includes(full[i - 1]) ? 150 : 24); else finish();
      };
      typing = setTimeout(step, 30);
      waiting = () => finish();
    }
    function notes(n) {
      gained += n;
      if (!n) return;
      F().sfx('femc-note');
      const box = document.createElement('div');
      box.className = 'vn-notes';
      box.innerHTML = Array.from({ length: n }, (_, i) => `<i style="--d:${i * 0.12}s">♪</i>`).join('');
      el.appendChild(box);
      setTimeout(() => box.remove(), 1700);
    }
    function ask(options) {
      skipping = false;
      el.classList.remove('ready');
      waiting = null;
      choices.replaceChildren(...options.map((o, i) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.style.animationDelay = `${i * 0.06}s`;
        b.innerHTML = '<span></span>';
        b.querySelector('span').textContent = sub(o.t);
        b.addEventListener('click', e => {
          e.stopPropagation();
          choices.replaceChildren();
          F().sfx('femc-click');
          if (o.route) { p.route = o.route; save(); }
          notes(o.notes || 0);
          // Solar says what you chose, unless the choice is an action in parentheses.
          const spoken = o.say || (o.t.trim().startsWith('(') ? null : o.t);
          queue.unshift(...(spoken ? [{ s: 'solar', t: spoken }] : []), ...(o.then || []));
          next();
        });
        return b;
      }));
      choices.querySelector('button')?.focus({ preventScroll: true });
    }
    const log = [];
    function setPlace(place, time) {
      const span = el.querySelector('.vn-place span');
      span.textContent = `${opts.replay ? 'Memory' : (time || now().time)} · ${place}`;
    }
    // A scene break: the screen dips, the place banner changes, and nobody is on screen until they speak.
    function sceneBreak(line) {
      currentFace = null;
      img.hidden = true;
      el.classList.add('vn-break');
      setTimeout(() => el.classList.remove('vn-break'), 700);
      setPlace(line.place, line.time);
      log.push({ name: '', text: '—' });
      setTimeout(next, reduced.matches || skipping ? 0 : 450);
    }
    // A text conversation on Solar's phone, one message per click.
    function phone(line) {
      const box = document.createElement('div');
      box.className = 'vn-phone';
      box.innerHTML = `<div class="vn-phone-head">${line.contact || ''}</div><div class="vn-phone-thread"></div><p class="vn-phone-hint">tap to continue</p>`;
      el.appendChild(box);
      const thread = box.querySelector('.vn-phone-thread');
      let i = 0;
      const reveal = () => {
        const m = line.phone[i++];
        if (!m) { box.remove(); el.classList.remove('phoning'); waiting = null; return next(); }
        const bubble = document.createElement('p');
        bubble.className = `vn-msg ${m.from === 'solar' ? 'me' : 'them'}`;
        bubble.innerHTML = `<b></b><span></span>`;
        bubble.querySelector('b').textContent = m.from === 'solar' ? (line.me || 'solar') : (line.handle || m.from);
        bubble.querySelector('span').textContent = sub(m.t);
        thread.appendChild(bubble);
        thread.scrollTop = thread.scrollHeight;
        log.push({ name: m.from === 'solar' ? 'Solar' : (CAST[m.from] || m.from), text: `[text] ${sub(m.t)}` });
        F().sfx('femc-text');
        waiting = reveal;
        if (skipping) setTimeout(() => { if (waiting === reveal) advanceClick(); }, 40);
      };
      el.classList.add('ready', 'phoning');
      reveal();
    }
    function next() {
      if (!el.isConnected) return;
      const line = queue.shift();
      if (!line) return end(true);
      if (line.place) return sceneBreak(line);
      if (line.phone) return phone(line);
      if (line.register) { if (!opts.replay) register(line.register); return next(); }
      if (line.choose) return ask(line.choose);
      if (line.route) return ask(line.route);
      if (line.ifRoute) { if ((opts.route || p.route) === line.ifRoute) queue.unshift(...line.then); return next(); }
      if (line.n) {
        nameEl.textContent = '';
        textEl.classList.add('narration');
        img.classList.add('dim');
        log.push({ name: '', text: sub(line.n) });
        return say(line.n, next);
      }
      textEl.classList.remove('narration');
      if (line.s === 'solar') {
        nameEl.textContent = 'Solar';
        img.classList.add('dim');
      } else {
        nameEl.textContent = CAST[line.s] || line.s;
        showPortrait(line.s, line.f);
      }
      log.push({ name: nameEl.textContent, text: sub(line.t) });
      say(line.t, next);
    }
    function advanceClick() { if (choices.children.length) return; const w = waiting; waiting = null; if (w) w(); }
    el.addEventListener('click', e => { if (e.target.closest('.vn-tools, .vn-choices, .vn-rank, .vn-log, .vn-title')) return; advanceClick(); });
    const keys = e => {
      if (!el.isConnected) return document.removeEventListener('keydown', keys, true);
      if (e.key === ' ' || e.key === 'Enter') { if (!choices.children.length && !e.target.closest?.('button')) { e.preventDefault(); advanceClick(); } }
      if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); }
    };
    document.addEventListener('keydown', keys, true);
    el.querySelector('[data-t="skip"]').addEventListener('click', () => { skipping = true; advanceClick(); const run = () => { if (skipping && waiting && !choices.children.length) { advanceClick(); setTimeout(run, 60); } }; setTimeout(run, 60); });
    el.querySelector('[data-t="leave"]').addEventListener('click', () => end(false));
    const logBox = el.querySelector('.vn-log');
    el.querySelector('[data-t="log"]').addEventListener('click', () => {
      logBox.querySelector('.vn-log-inner').replaceChildren(...log.map(l => { const p = document.createElement('p'); if (l.name) { const b = document.createElement('b'); b.textContent = l.name; p.append(b); } else p.className = 'n'; p.append(l.text); return p; }));
      logBox.hidden = false;
      const inner = logBox.querySelector('.vn-log-inner'); inner.scrollTop = inner.scrollHeight;
    });
    el.querySelector('[data-t="log-close"]').addEventListener('click', () => { logBox.hidden = true; });

    function close() {
      document.removeEventListener('keydown', keys, true);
      if (music) { const m = music; const fade = setInterval(() => { m.volume = Math.max(0, m.volume - 0.04); if (m.volume <= 0) { clearInterval(fade); m.pause(); } }, 50); }
      el.classList.add('out');
      setTimeout(() => el.remove(), 350);
    }
    function end(finished) {
      clearTimeout(typing);
      if (!finished || opts.replay) { close(); opts.onDone?.(false); return; }
      // Progress, then the rank-up.
      p.rank = r + 1;
      p.notes += gained;
      if (!p.seen.includes(r)) p.seen.push(r);
      if (!S.met.includes(link.id)) S.met.push(link.id);
      if (!S.free) S.spent[`${S.d}-${S.slot}`] = link.id;
      save();
      (link.stamps?.[p.rank] || []).forEach(id => F().load('achievements.js?v=6', () => window.Achievements).then(() => window.Achievements?.unlock(id)));
      rankUp(link, p.rank, () => { close(); if (!S.free) advance(); opts.onDone?.(true); });
    }
    function rankUp(link, n, done) {
      const max = n >= link.ranks.length;
      const box = document.createElement('div');
      box.className = 'vn-rank';
      box.innerHTML = `<div class="vn-rank-inner"><div class="vn-card"><span>${link.numeral || '✦'}</span><small>${link.arcana}</small></div><p class="vn-thou"></p><p class="vn-ranknum">${max ? 'RANK MAX' : `RANK ${n}`}<small>${link.short || link.name}</small></p></div>`;
      el.appendChild(box);
      F().sfx('femc-rankup');
      const lines = n === 1 ? ['Thou art I... and I am thou...', 'Thou hast established a new bond.'] : max ? ['Thou art I... and I am thou...', `The bond with ${link.short} has reached its fullest.`] : ['Thou art I... and I am thou...', `Thy bond with ${link.short} grows stronger.`];
      const thou = box.querySelector('.vn-thou');
      let i = 0;
      const tick = () => { if (i < lines.length) { thou.innerHTML += (i ? '<br>' : '') + lines[i++]; setTimeout(tick, reduced.matches ? 0 : 900); } };
      setTimeout(tick, reduced.matches ? 0 : 500);
      let ready = false, finished = false;
      setTimeout(() => { ready = true; }, reduced.matches ? 0 : 1800);
      const finish = () => { if (!ready || finished) return; finished = true; document.removeEventListener('keydown', onKey, true); done(); };
      const onKey = e => { if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') { e.preventDefault(); finish(); } };
      box.addEventListener('click', finish);
      document.addEventListener('keydown', onKey, true);
    }
    // Each rank opens like a chapter: "1: rookie".
    if (rank.title && !reduced.matches) {
      const card = document.createElement('div');
      card.className = 'vn-title';
      card.innerHTML = `<p><small></small><span></span></p>`;
      card.querySelector('small').textContent = `${link.short} · Rank ${r + 1}`;
      card.querySelector('span').textContent = rank.title;
      el.appendChild(card);
      let gone = false;
      const go = () => { if (gone) return; gone = true; card.classList.add('out'); setTimeout(() => card.remove(), 500); next(); };
      card.addEventListener('click', go);
      setTimeout(go, 2600);
    } else next();
  }

  /* ── Kat's test panel (?femctest) ─────────────────── */
  function testPanel() {
    if (!new URLSearchParams(location.search).has('femctest')) return;
    const box = document.createElement('div');
    box.style.cssText = 'position:fixed;left:12px;top:12px;z-index:2147483600;width:260px;padding:12px;background:#000d;border:2px solid #8ee3b0;color:#fff;font:13px/1.5 ui-monospace,Menlo,monospace';
    const render = () => {
      const n = now();
      box.innerHTML = `<b style="color:#8ee3b0">TEST PANEL</b><br>${n.md} ${n.day} · ${n.time}<br>
        <label>Date <input id="tpDate" size="5" value="${n.md}"></label> <button data-a="go">Go</button><br>
        <button data-a="slot">Next slot</button> <button data-a="day">Next day</button><br>
        <label><input type="checkbox" id="tpFree" ${S.free ? 'checked' : ''}> Everyone free, no gates</label><br>
        ${Object.values(links).map(l => `${l.short}: rank <input data-rank="${l.id}" size="2" value="${progress(l.id).rank}"> ${progress(l.id).route || ''}`).join('<br>')}<br>
        <button data-a="reset" style="color:#ff8c8c">Reset all FEMC progress</button>`;
    };
    box.addEventListener('click', e => {
      const a = e.target.dataset?.a;
      if (a === 'go') { const v = box.querySelector('#tpDate').value.trim(); if (/^\d{1,2}\/\d{1,2}$/.test(v)) { S.d = Math.max(0, Math.min(END_DAY, dayOf(v))); S.slot = 0; save(); } }
      if (a === 'slot') advance();
      if (a === 'day') nextDay();
      if (a === 'reset') { S = fresh(); save(); }
    });
    box.addEventListener('change', e => {
      if (e.target.id === 'tpFree') { S.free = e.target.checked; save(); }
      if (e.target.dataset.rank) { const p = progress(e.target.dataset.rank); p.rank = Math.max(0, Math.min(10, +e.target.value || 0)); if (p.rank && !S.met.includes(e.target.dataset.rank)) S.met.push(e.target.dataset.rank); save(); }
    });
    onChange(render);
    document.body.appendChild(box);
    render();
  }

  // Loads every link data file listed in assets/femc/links/index.js, plus the portrait manifest.
  let ready = null;
  function load() {
    if (ready) return ready;
    const L = F().load;
    ready = Promise.all([L('assets/femc/portraits/index.js?v=3', () => window.FEMC_PORTRAITS), L('assets/femc/links/index.js?v=1', () => window.FEMC_LINK_FILES)])
      .then(() => Promise.all((window.FEMC_LINK_FILES || []).map(id => L(`assets/femc/links/${id}.js?v=2`, () => links[id]))))
      .then(() => { if (document.body) testPanel(); else addEventListener('DOMContentLoaded', testPanel); return links; });
    return ready;
  }

  return { define, load, links, now, advance, nextDay, status, freeNow, progress, isMet, nameFor, portrait, play, register, onChange, dayOf, state: () => S, DAYS };
})();
