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
  // The battle game, run inside this page. Test params (?seed, ?speed) pass through. `fresh` is new on every open: browsers
  // keep a frame's page in their cache and don't check it again on a reload (python's http.server sends no Cache-Control,
  // GitHub Pages caches for ten minutes), so without it an old femc-battle.html, with its old ?v= scripts and styles,
  // could run inside the game after an update. The page is small; its scripts and styles still cache by their own ?v=.
  const battleSrc = () => { const p = new URLSearchParams(location.search), q = ['seed', 'speed'].filter(k => p.has(k)).map(k => `&${k}=${encodeURIComponent(p.get(k))}`).join(''); return `${G.base}femc-battle.html?embed=1${q}&fresh=${Date.now().toString(36)}`; };
  // ?debug=1 keeps the Simulate buttons on fight cards (remembered for this tab's session, so it survives the round trip).
  const DEBUG = (() => { try { if (/[?&]debug=1\b/.test(location.search)) sessionStorage.setItem('kg-femc-debug', '1'); if (/[?&]debug=0\b/.test(location.search)) sessionStorage.removeItem('kg-femc-debug'); return sessionStorage.getItem('kg-femc-debug') === '1'; } catch (e) { return /[?&]debug=1\b/.test(location.search); } })();

  /* ── Small drawings (weather, moon, icons) ── */
  const ICON = {
    clear: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="5" fill="#ffd36b"/><g stroke="#ffd36b" stroke-width="2" stroke-linecap="round"><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/></g></svg>',
    cloudy: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 18h10a4 4 0 0 0 .5-8 6 6 0 0 0-11.3 1.5A3.3 3.3 0 0 0 7 18z" fill="#e8dce4"/></svg>',
    rain: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 14h10a4 4 0 0 0 .5-8 6 6 0 0 0-11.3 1.5A3.3 3.3 0 0 0 7 14z" fill="#c9d6ec"/><g stroke="#7fb6ff" stroke-width="2" stroke-linecap="round"><path d="M8 17l-1 3M12 17l-1 3M16 17l-1 3"/></g></svg>',
    snow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 14h10a4 4 0 0 0 .5-8 6 6 0 0 0-11.3 1.5A3.3 3.3 0 0 0 7 14z" fill="#e8eef8"/><g fill="#fff"><circle cx="8" cy="18.5" r="1.3"/><circle cx="12" cy="20" r="1.3"/><circle cx="16" cy="18.5" r="1.3"/></g></svg>',
    storm: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 14h10a4 4 0 0 0 .5-8 6 6 0 0 0-11.3 1.5A3.3 3.3 0 0 0 7 14z" fill="#9aa3b8"/><path d="M12 14l-3 5h3l-1 4 4-6h-3l1-3z" fill="#ffe14d"/></svg>',
    // By level (core.js wx): a drizzle's two short drops, heavy snow's six flakes, fog's bands.
    drizzle: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 14h10a4 4 0 0 0 .5-8 6 6 0 0 0-11.3 1.5A3.3 3.3 0 0 0 7 14z" fill="#d6dfee"/><g stroke="#9cc6ff" stroke-width="1.8" stroke-linecap="round"><path d="M9.5 17.5l-.5 1.6M14.5 17.5l-.5 1.6"/></g></svg>',
    heavy: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 13h10a4 4 0 0 0 .5-8 6 6 0 0 0-11.3 1.5A3.3 3.3 0 0 0 7 13z" fill="#eef3fb"/><g fill="#fff"><circle cx="7" cy="16.5" r="1.3"/><circle cx="12" cy="16.5" r="1.3"/><circle cx="17" cy="16.5" r="1.3"/><circle cx="9.5" cy="20.5" r="1.3"/><circle cx="14.5" cy="20.5" r="1.3"/><circle cx="4.8" cy="20.3" r="1"/></g></svg>',
    fog: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 12h10a4 4 0 0 0 .5-8 6 6 0 0 0-11.3 1.5A3.3 3.3 0 0 0 7 12z" fill="#dfe4ec"/><g stroke="#c4ccd8" stroke-width="2" stroke-linecap="round"><path d="M4 15.5h16M6 19h12M8 22.2h8"/></g></svg>'
  };
  // The icon for a day's weather (G.wx): its level first (drizzle, heavy snow, fog), else its kind.
  const wxIcon = w => ICON[w.level] || ICON[w.kind] || ICON.clear;
  function moonSvg(phase) {
    const k = Math.cos(phase * 2 * Math.PI), rx = (9 * Math.abs(k)).toFixed(2);
    const lit = phase < 0.5 ? `M10 1A9 9 0 0 1 10 19A${rx} 9 0 0 ${k > 0 ? 0 : 1} 10 1` : `M10 1A9 9 0 0 0 10 19A${rx} 9 0 0 ${k > 0 ? 1 : 0} 10 1`;
    return `<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="9" fill="#3a1028"/><path d="${lit}" fill="#fff4f9"/></svg>`;
  }
  const bgUrl = slug => `${G.base}assets/femc/bg/${G.seasonal(slug)}.webp`; // the shrine's day art follows the season (places.js seasons)
  // Memory cards without art yet (new fragment ids): the battle data's placeholder card stands in until the .webp exists.
  document.addEventListener('error', e => {
    const t = e.target, m = t && t.tagName === 'IMG' && !t.dataset.ph && /memories\/([a-z0-9-]+?)\.webp/.exec(t.getAttribute('src') || '');
    if (m && G.D.battle.memoryPlaceholder) { t.dataset.ph = '1'; t.src = G.D.battle.memoryPlaceholder(m[1]); }
  }, true);

  /* ── Music by screen ── */
  // A day screen's mood for today (places.js `screens`, then the day): a trip or the culture festival, an exam, a rainy
  // evening, a new term's first week, and school days from December on.
  const TERMS = ['4/8', '9/1', '1/8'];
  function screenMood(key) {
    const base = G.D.places.screens[key];
    if (!base || !['school', 'class', 'after', 'evening'].includes(key)) return base;
    const i = G.dayInfo(), d = i.d;
    if (i.type === 'trip' || i.label === 'Culture Festival') return 'trip';
    if (key === 'evening') return G.wxIn(['rain'], i.weather) ? 'rain' : base;
    if (i.type === 'exam') return 'exam';
    if (TERMS.some(md => d >= G.dayOf(md) && d < G.dayOf(md) + 7)) return 'fresh';
    if (d >= G.dayOf('12/1')) return 'late';
    return base;
  }
  const screenMusic = key => { const mood = screenMood(key); if (mood) SC.Music.set(mood); };

  /* ── Phone sounds (Web Audio, made here; nothing is downloaded): a soft two-note chime when a text arrives, a small pop for
     each incoming bubble, and a whoosh when Solar sends. Quiet when sound effects are off; the SFX volume applies.
     sfxLog keeps the last few names for the tests. ── */
  const sfxLog = [];
  function phoneSfx(kind) {
    sfxLog.push(kind); if (sfxLog.length > 60) sfxLog.shift();
    const st = G.settings();
    if (!st.sfx || localStorage.getItem('kg-femc-sound') === 'off') return;
    if (navigator.userActivation && !navigator.userActivation.hasBeenActive) return; // browsers keep audio locked until a click
    try {
      const C = window.AudioContext || window.webkitAudioContext; if (!C) return;
      const c = phoneSfx.ctx || (phoneSfx.ctx = new C()); if (c.state === 'suspended') c.resume().catch(() => {});
      const out = c.createGain(); out.gain.value = Math.max(0, Math.min(1, (st.sfxVol ?? 100) / 100)); out.connect(c.destination);
      const t = c.currentTime + 0.01;
      const tone = (f, at, d, v, to, type = 'sine') => { const o = c.createOscillator(), g = c.createGain(); o.type = type; o.frequency.setValueAtTime(f, t + at); if (to) o.frequency.exponentialRampToValueAtTime(to, t + at + d * 0.6); g.gain.setValueAtTime(0.0001, t + at); g.gain.exponentialRampToValueAtTime(v, t + at + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t + at + d); o.connect(g).connect(out); o.start(t + at); o.stop(t + at + d + 0.03); };
      if (kind === 'notify') { tone(1318.5, 0, 0.32, 0.06); tone(1975.5, 0.11, 0.5, 0.055); tone(3951, 0.11, 0.25, 0.008); }
      else if (kind === 'pop') tone(740, 0, 0.09, 0.035, 1180);
      else if (kind === 'whoosh') {
        const n = Math.floor(c.sampleRate * 0.34), b = c.createBuffer(1, n, c.sampleRate), ch = b.getChannelData(0);
        for (let i = 0; i < n; i++) ch[i] = Math.random() * 2 - 1;
        const s = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
        s.buffer = b; f.type = 'bandpass'; f.Q.value = 1.4; f.frequency.setValueAtTime(500, t); f.frequency.exponentialRampToValueAtTime(3600, t + 0.24);
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.16, t + 0.1); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.32);
        s.connect(f).connect(g).connect(out); s.start(t); s.stop(t + 0.35);
        tone(1568, 0.2, 0.16, 0.02);
      }
    } catch (e) {}
  }

  /* ── Toasts. Texts come in as phone banners (slide down from the top, tap to read); a social stat ranking up plays the
     level-up card (statUp below) instead of a toast. ── */
  const toastBox = document.createElement('div');
  toastBox.className = 'g-toasts';
  toastBox.setAttribute('aria-live', 'polite');
  document.body.appendChild(toastBox);
  const bannerBox = document.createElement('div');
  bannerBox.className = 'g-banners';
  bannerBox.setAttribute('aria-live', 'polite');
  document.body.appendChild(bannerBox);
  const statColor = id => G.D.stats.stats[id]?.color || '';
  function flushToasts() {
    let chimed = false;
    G.takeToasts().forEach((t, i) => {
      if (t.kind === 'statrank') return statUp(t);
      if (t.kind === 'text') { textBanner(t, i, !chimed); chimed = true; return; }
      const el = document.createElement('div');
      el.className = `g-toast k-${t.kind}${t.stat ? ` s-${t.stat}` : ''}`;
      if (t.stat && statColor(t.stat)) el.style.setProperty('--c', statColor(t.stat));
      el.textContent = t.text;
      // A hub stamp earned in the game (stamps.js): the stamp's art, a kicker and its name.
      if (t.kind === 'stamp') { el.innerHTML = `<svg viewBox="0 0 64 64" aria-hidden="true">${t.svg || ''}</svg><span><b>Stamp earned</b></span>`; el.querySelector('span').append(t.text); el.setAttribute('role', 'status'); }
      if (t.thread) { el.setAttribute('role', 'button'); el.tabIndex = 0; el.addEventListener('click', () => openPhone(t.thread)); }
      setTimeout(() => { toastBox.appendChild(el); }, i * 160);
      setTimeout(() => el.classList.add('out'), 2600 + i * 160);
      setTimeout(() => el.remove(), 3200 + i * 160);
    });
    paintHud();
  }
  G.onChange(() => { flushToasts(); });

  // How a text reads on the phone: group chats name the sender (their handle, when the line starts with one, moves out of
  // the bubble), and "hanni added jihoon and you to a group" lines are the chat's own notices.
  const HANDLE = /^([a-z0-9_.]{2,24}):\s+/i, NOTICE = /^[a-z0-9_.]+ (added|named|removed|left|renamed|changed|created) /i;
  function msgParts(id, m) {
    const group = G.isGroupThread(id), me = m.from === 'solar', name = me ? 'Solar' : G.name(m.from);
    let text = G.sub(m.t), handle = null;
    if (group && !me) {
      const h = HANDLE.exec(text);
      if (h) { handle = h[1]; text = text.slice(h[0].length); }
      else if (NOTICE.test(text)) return { group, me, name, notice: true, text };
    }
    return { group, me, name, handle: handle && handle.toLowerCase() !== name.toLowerCase() ? handle : null, text };
  }
  const threadName = id => G.D.texts.threads[id] || G.name(id);
  const threadPic = id => G.portrait(id, 'neutral');
  // A text arriving: the notification chime and a banner from the top. Tap / Enter opens the conversation.
  function textBanner(t, i, chime) {
    const th = S().phone.threads[t.thread] || [], last = th[th.length - (t.count || 1)] || { from: t.from, t: t.msg || t.text };
    const m = msgParts(t.thread, { from: t.from || last.from, t: t.msg || last.t });
    const pic = threadPic(t.thread) || threadPic(t.from || last.from);
    const el = document.createElement('div');
    el.className = `g-banner${reduced.matches ? ' calm' : ''}${t.invite ? ' invite' : ''}`;
    el.setAttribute('role', 'button'); el.tabIndex = 0;
    el.dataset.thread = t.thread;
    const more = (t.count || 1) > 1 ? ` · ${t.count} new` : '';
    el.innerHTML = `<i class="g-bn-pic">${pic ? `<img src="${pic}" alt="">` : esc(threadName(t.thread)[0] || '✉')}</i><span class="g-bn-body"><span class="g-bn-top"><b>${esc(threadName(t.thread))}</b><small>now${esc(more)}</small></span><span class="g-bn-msg">${m.group && !m.notice ? `<em>${esc(m.name)}:</em> ` : ''}${esc(m.text)}</span></span>`;
    el.setAttribute('aria-label', `New message. ${threadName(t.thread)}: ${m.text}. Open the phone.`);
    const go = () => {
      if (el.classList.contains('out')) return;
      el.classList.add('out'); setTimeout(() => el.remove(), 260);
      if (document.querySelector('.gs:not(.out), .g-dh')) return; // mid-scene the banner just goes; the phone waits for after
      document.querySelectorAll('.g-phone-ov:not(.out) [data-close]').forEach(b => b.click());
      openPhone(t.thread);
    };
    el.addEventListener('click', go);
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); go(); } });
    setTimeout(() => { bannerBox.prepend(el); if (chime) phoneSfx('notify'); }, i * 220);
    setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 300); }, 4600 + i * 220);
  }

  /* ── Social stat level-up (P5R's rank-up, with Solar's sun instead of a star). Waits until no scene, date card or rank card
     is up, so it lands between beats, never under them. Click / Enter / Space / Esc (or a pad's A / B) to go on; it also
     moves on by itself. ── */
  const SUN = (cls = '') => `<svg class="g-sun ${cls}" viewBox="-50 -50 100 100" aria-hidden="true"><g class="g-sun-rays">${Array.from({ length: 12 }, (_, k) => `<path d="${k % 2 ? 'M-4.5 -27 L0 -44 L4.5 -27Z' : 'M-6 -27 L0 -49 L6 -27Z'}" transform="rotate(${k * 30})"/>`).join('')}</g><circle class="g-sun-core" r="22"/><circle class="g-sun-ring" r="15"/></svg>`;
  const statQueue = [];
  let statBusy = false, statTimer = null;
  // A beat later, so a scene opened in the same step as the gain (an activity's narration) is up before the card checks.
  function statUp(t) { statQueue.push(t); if (!statBusy) { clearTimeout(statTimer); statTimer = setTimeout(pumpStat, 80); } }
  function pumpStat() {
    clearTimeout(statTimer);
    if (statBusy || !statQueue.length) return;
    if (document.querySelector('.gs:not(.out), .gs-rank, .g-datecard, .g-actcard, .g-dh')) { statTimer = setTimeout(pumpStat, 300); return; }
    statBusy = true;
    statCard(statQueue.shift(), () => { statBusy = false; pumpStat(); });
  }
  function statCard(t, done) {
    const d = G.D.stats.stats[t.stat];
    if (!d) return done();
    const to = t.rank || G.statRank(t.stat), from = t.from || Math.max(1, to - 1), max = d.ranks.length;
    const el = document.createElement('div');
    el.className = `g-statup${reduced.matches ? ' calm' : ''}`;
    el.setAttribute('role', 'alertdialog'); el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-label', `${d.name} rank up: ${d.ranks[to - 1]}`);
    el.style.setProperty('--c', d.color || 'var(--pink)');
    el.innerHTML = `<div class="g-su-band" aria-hidden="true"></div><div class="g-su-band b2" aria-hidden="true"></div>
      <div class="g-su-inner"><div class="g-su-sunbox" aria-hidden="true"><i class="g-su-burst"></i>${SUN('big')}</div>
        <div class="g-su-text"><p class="g-su-kicker">Social stat</p><p class="g-su-name">${esc(d.name)}</p><p class="g-su-up">Rank up!</p>
          <p class="g-su-rank"><s>${esc(d.ranks[from - 1] || '')}</s><span aria-hidden="true">▸</span><b>${esc(d.ranks[to - 1] || '')}</b></p>
          <p class="g-su-pips" aria-label="Rank ${to} of ${max}">${Array.from({ length: max }, (_, k) => SUN(k < to ? (k >= from ? 'on new' : 'on') : '')).join('')}</p></div></div>
      <p class="g-su-hint">${matchMedia('(hover: none)').matches ? 'Tap' : 'Click'} to continue</p>`;
    document.body.appendChild(el);
    G.sfx('femc-rankup');
    let gone = false;
    const close = () => {
      if (gone) return; gone = true;
      clearTimeout(auto); window.removeEventListener('keydown', key, true);
      el.classList.add('out'); setTimeout(() => { el.remove(); done(); }, reduced.matches ? 60 : 320);
    };
    const key = e => { if (['Enter', ' ', 'Escape'].includes(e.key)) { e.preventDefault(); e.stopPropagation(); close(); } };
    window.addEventListener('keydown', key, true);
    el.addEventListener('click', close);
    const auto = setTimeout(close, reduced.matches ? 2600 : 4800);
  }

  /* ── The scene bridge (FemcScene needs these) ── */
  const bridge = Object.assign(Object.create(G), {
    base: G.base, settings: G.settings, setSetting: G.setSetting, textDelay: G.textDelay, sfx: G.sfx,
    background: G.background, portrait: G.portrait, scale: G.scale, name: G.name, silhouette: G.silhouette, sub: G.sub,
    dateLabel: G.dateLabel, setDate: G.setDate, moodFor: G.moodFor, applyChoice: G.applyChoice, lacking: G.lacking, flag: G.flag,
    branch: G.branch, effect: G.effect, tarot: G.tarot, actCard, phoneSfx,
    // The Memories album (menu.js): every CG a live scene shows is kept in S.album.cg (a replay never calls this).
    seeCg: id => { const a = S().album ||= { v: 1 }; const list = a.cg ||= []; if (id && !list.includes(id)) { list.push(id); G.saveQuiet(); } }
  });
  SC.init(bridge);

  /* ── Layout ── */
  app.innerHTML = `<div class="g-stage"><div class="g-bg"></div><div class="g-stripes"></div></div>
    <header class="g-hud" hidden></header>
    <main class="g-main" id="g-main" tabindex="-1"></main>`;
  const main = $('#g-main'), hud = $('.g-hud');
  function setBg(slug, mood = '') { const b = $('.g-bg'); b.style.backgroundImage = slug ? `url("${bgUrl(slug)}")` : ''; b.className = `g-bg${mood ? ` ${mood}` : ''}`; window.FemcWeather?.field(slug ? G.seasonal(slug) : '', $('.g-stage')); }
  function show(html, cls = '') { main.className = `g-main ${cls}`; main.innerHTML = html; main.scrollTop = 0; return main; }

  function paintHud() {
    if (S().phase !== 'play') { hud.hidden = true; return; }
    hud.hidden = false;
    const i = G.dayInfo(), c = G.D.stats.conditions[S().condition];
    const m = i.moon, moonTip = m.full ? 'Full moon tonight' : m.days != null ? `${m.name} · full moon in ${m.days} day${m.days === 1 ? '' : 's'}` : m.name;
    hud.innerHTML = `<div class="g-date"><b>${esc(i.md)}</b><small>${esc(i.day)}</small></div>
      <div class="g-when"><span class="g-slot">${esc(G.slotName(S().slot, i))}</span>${i.label ? `<span class="g-label">${esc(i.label)}</span>` : ''}</div>
      <div class="g-sky"><button type="button" class="g-wx" data-ui="forecast" title="${esc(i.wx.name)} · forecast" aria-label="${esc(i.wx.name)}. Open the forecast">${wxIcon(i.wx)}</button><span class="g-moon" title="${esc(moonTip)}" aria-label="${esc(moonTip)}">${moonSvg(m.phase)}</span></div>
      <div class="g-me"><span class="g-cond" style="--c:${c.color}" title="${esc(c.desc)}">${esc(c.name)}</span><span class="g-yen">¥${S().yen.toLocaleString()}</span></div>
      <nav class="g-menu" aria-label="Menu"><button type="button" data-ui="menu" class="g-menu-main" title="Menu (M)">Menu</button><button type="button" data-ui="phone">Phone${G.unread() ? `<em>${G.unread()}</em>` : ''}</button><button type="button" data-ui="save">Save</button><button type="button" data-ui="settings" aria-label="Settings" title="Settings"><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" style="display:block;transform:skewX(14deg)"><path fill="currentColor" d="M19.4 13a7.6 7.6 0 0 0 0-2l2.1-1.6-2-3.5-2.5 1a7.4 7.4 0 0 0-1.7-1L15 3.3h-4l-.4 2.6a7.4 7.4 0 0 0-1.7 1l-2.5-1-2 3.5L6.6 11a7.6 7.6 0 0 0 0 2l-2.1 1.6 2 3.5 2.5-1a7.4 7.4 0 0 0 1.7 1l.4 2.6h4l.4-2.6a7.4 7.4 0 0 0 1.7-1l2.5 1 2-3.5zM13 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z" transform="translate(-1 0)"/></svg></button></nav>`;
  }
  hud.addEventListener('click', e => {
    const b = e.target.closest('[data-ui]'); if (!b) return;
    ({ phone: () => openPhone(), forecast: () => openPhone(), menu: () => openStatus(), status: () => openStatus(), save: () => openSaves(), settings: () => openSettings() })[b.dataset.ui]?.();
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
        <div class="g-dc-info"><span class="g-dc-wx">${wxIcon(i.wx)}<b>${esc(i.wx.name)}</b></span><span class="g-dc-moon">${moonSvg(m.phase)}<b>${esc(m.full ? 'Full Moon' : m.name)}</b></span></div>
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
    window.FemcWeather?.pause(true);
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
      window.FemcWeather?.pause(false);
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
    // A trip with a day plan (data/yakushima.js): its own scenes and picks instead of school, Go Out and the dorm.
    if (info.type === 'trip') return tripSlot(info);
    // Holiday invitations (a link's `holidays`) wait for their slot: spend the day with someone, or make your own plans.
    const hol = G.holidayDue();
    if (hol) return holidayPicker(hol, info);
    const daily = G.dailyLife();
    if (daily) return playDailyLife(daily, info);
    // A crush moment (core.js crushes, data/crush*.js): plays the same way, in a slot no routine took.
    const crush = G.crushDue();
    if (crush) return playDailyLife(crush, info);
    switch (s.slot) {
      case 'early': return earlyMorning(info);
      case 'morning': return info.exam ? examSession(info) : classPeriod('morning', info);
      case 'lunch': return lunch(info);
      case 'afternoon': return info.exam ? segment({ slot: 'afternoon', bg: 'gekkoukan-classroom-day', text: 'The afternoon was a blur of answer keys being passed back and forth and people comparing what they wrote, which never helped anyone.' }) : classPeriod('afternoon', info);
      case 'after': return G.freeSlotSpent('after') ? advance() : goOut('after');
      case 'evening': return G.freeSlotSpent('evening') ? advance() : evening(info);
      case 'late': { const ln = G.lateNightDue(); return ln ? playLateNight(ln) : lateNight(info); }
      default: return advance();
    }
  }
  function playDailyLife(e, info) {
    const slot = S().slot;
    return SC.play({ ...e, scene: [{ bg: e.bg }, ...e.scene], label: e.label || 'Everyday life', onDone: () => {
      G.finishDailyLife(e.id);
      if (slot === 'evening') return evening(info);
      if (slot === 'after') return G.freeSlotSpent('after') ? advance() : goOut('after');
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

  /* ── Holidays: who texted an invitation this morning (core.js holidays). Pick one and the day is theirs (their holiday
     scene, the only chance at it this playthrough), or make your own plans and go out as usual. ── */
  function holidayPicker(hol, info) {
    const slot = S().slot, night = slot === 'evening';
    setBg(night ? 'iwatodaidorm-livingroom-night' : 'solar-dormroom-day', night ? 'night' : '');
    screenMusic(night ? 'dorm' : 'after');
    const label = info.holiday || info.label || 'A day off';
    show(`<section class="g-dorm g-holiday"><div class="g-map-head"><p class="g-kicker">${esc(info.md)} · ${esc(label)}</p><h1>${night ? 'Plans tonight?' : 'Holiday plans'}</h1>
      <p class="g-map-sub">Your phone went off ${night ? 'all afternoon' : 'before breakfast'}. A day like this only comes once.</p></div>
      <div class="g-nights">${hol.links.map(l => { const pic = G.portrait(l.id, 'happy'), h = l.holidays[hol.md]; return `<button type="button" class="g-night who" data-h="${l.id}">${pic ? `<i class="g-xmas-pic"><img src="${pic}" alt=""></i>` : ''}<b>${esc(l.short)}</b><small>“${esc(h.ask)}”</small></button>`; }).join('')}
        <button type="button" class="g-night" data-h="none"><b>Make your own plans</b><small>${night ? 'Stay in, or go out on your own.' : 'Go out on your own today.'}</small></button></div></section>`, 'is-dorm');
    main.querySelector('[data-h]')?.focus({ preventScroll: true });
    main.querySelectorAll('[data-h]').forEach(b => b.addEventListener('click', () => {
      G.sfx('femc-click');
      if (b.dataset.h === 'none') { G.declineHolidays(); return run(); }
      const id = b.dataset.h, e = G.acceptHoliday(id);
      SC.play({ scene: [...(e.bg ? [{ bg: e.bg }] : []), ...e.scene], place: e.place, time: e.time, music: e.music || null, title: e.title, label: `${e.link.short} · ${label}`, link: id,
        onDone: res => { G.finishHoliday(id, res.gained || 0); advance(); } });
    }));
  }

  /* ── Late nights (core.js lateNights): instead of the plain bedtime line, now and then, someone. ── */
  function playLateNight(ln) {
    const { link: l, e } = ln;
    SC.play({ scene: [...(e.bg ? [{ bg: e.bg }] : []), ...e.scene], place: e.place, time: e.time || 'Late Night', music: e.music || 'night', label: `${l.short} · Late night`, link: l.id,
      onDone: res => { G.finishLateNight(e.id, res.gained || 0); const r = G.sleep(); if (r.end) return endScreen(); run(); } });
  }

  /* ── A trip's day plan (data/yakushima.js): a scene for the slot, or a pick of who to spend it with. ── */
  function tripSlot(info) {
    const slot = S().slot, plan = G.tripPlan();
    if (!plan) {
      if (slot === 'early') return earlyMorning(info);
      if (slot === 'late') return lateNight(info);
      return advance();
    }
    screenMusic('after');
    const done = (pick, who, gained) => { G.finishTrip(plan.key, pick, who, gained); if (slot === 'late') { const r = G.sleep(); if (r.end) return endScreen(); return run(); } advance(); };
    const playIt = (e, pick, who) => SC.play({ scene: [...(e.bg ? [{ bg: e.bg }] : []), ...(e.scene || [])], place: e.place || plan.place || info.trip.place, time: e.time || plan.time || G.slotName(slot, info), music: e.music || plan.music || 'trip', title: e.title || null, label: info.trip.place, link: who || null,
      onDone: res => done(pick, who, res.gained || 0) });
    if (!plan.options) return playIt(plan, true, plan.who || null);
    setBg(plan.bg || 'yakushima-beach');
    show(`<section class="g-dorm g-trip"><div class="g-map-head"><p class="g-kicker">${esc(info.md)} · ${esc(info.trip.place)} · ${esc(G.slotName(slot, info))}</p><h1>${esc(plan.prompt || 'Who will you spend it with?')}</h1>
      <p class="g-map-sub">${esc(plan.sub || 'The island is big, and the day is short.')}</p></div>
      <div class="g-nights">${plan.options.map(o => { const pic = o.who ? G.portrait(o.who, 'happy') : null; return `<button type="button" class="g-night${o.who ? ' who' : ''}" data-o="${esc(o.id)}">${pic ? `<i class="g-xmas-pic"><img src="${pic}" alt=""></i>` : ''}<b>${esc(o.label)}</b><small>${esc(o.sub || '')}</small></button>`; }).join('')}</div></section>`, 'is-dorm');
    main.querySelector('[data-o]')?.focus({ preventScroll: true });
    main.querySelectorAll('[data-o]').forEach(b => b.addEventListener('click', () => { G.sfx('femc-click'); const o = plan.options.find(x => x.id === b.dataset.o); playIt(o, o.id, o.who || null); }));
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
  /* The logo (assets/femc/title/solstice-logo.svg) is inlined so game.css can switch it to its dark variant (class sl-dark)
     and animate its parts: the wipe in, the sun-moon O's shimmer. Fetched once; until it arrives (or if it can't be, as on
     file://) the h1 shows a plain text title. */
  let logoSvg = null;
  const logoLoad = fetch(`${G.base}assets/femc/title/solstice-logo.svg?v=1`).then(r => r.ok ? r.text() : '').catch(() => '').then(t => (logoSvg = t));
  function putLogo(h) {
    if (!h) return;
    const put = t => {
      if (!h.isConnected) return;
      if (!/^\s*<svg[\s>]/.test(t || '')) { h.classList.add('is-text'); return; }
      h.insertAdjacentHTML('afterbegin', t.replace('class="sl-logo"', 'class="sl-logo sl-dark" aria-hidden="true" focusable="false"').replace(/<title[^>]*>.*?<\/title>/, ''));
      h.classList.add('is-svg');
    };
    if (logoSvg !== null) put(logoSvg); else logoLoad.then(put);
  }
  const autoLine = () => { let x = null; try { x = G.slotInfo(JSON.parse(localStorage.getItem(G.KEY))); } catch (e) {} return x ? `${x.md} ${x.day} · ${x.slot}${x.lv ? ` · Lv ${x.lv}` : ''}${x.fight ? ' · in the Dark Hour' : ''}` : ''; };
  /* The title: Burn My Dread (places.js `opening`), the key art breathing (and leaning with the mouse), a moonlight sheen,
     glass shards and moon dust drifting, the menu sliding in. The first visit of a page load opens on a P3-style "Press any
     key / Tap to start" (browsers keep music locked until a key or a tap, so this is when the song starts). The menu is in
     the page under it all along, so its buttons work straight away too. Moving the cursor ticks, choosing clicks, and New
     Game / Continue wipe out to the game. Reduced motion: no drift, no lean, no wipe; the key art holds still. */
  let titleWoke = false;
  function titleFx(box) {
    if (!box || reduced.matches) return;
    const phone = innerWidth < 700, R = (a, b) => (a + Math.random() * (b - a)).toFixed(2);
    let h = '';
    for (let i = 0; i < (phone ? 8 : 13); i++) h += `<i class="sh" style="--x:${R(0, 100)}%;--s:${R(6, 14)}px;--d:${R(16, 28)}s;--l:-${R(0, 28)}s;--dx:${R(-110, 40)}px;--r:${R(-300, 300)}deg;--o:${R(0.35, 0.8)}"></i>`;
    for (let i = 0; i < (phone ? 10 : 16); i++) h += `<i class="du" style="--x:${R(0, 100)}%;--s:${R(1.5, 3.6)}px;--d:${R(11, 22)}s;--l:-${R(0, 22)}s;--dx:${R(-50, 50)}px;--o:${R(0.4, 0.9)}"></i>`;
    box.innerHTML = h;
  }
  function titleScreen() {
    hud.hidden = true;
    setBg(null);
    screenMusic('opening');
    const has = G.hasSave();
    const splash = !titleWoke && !navigator.userActivation?.hasBeenActive;
    const tap = matchMedia('(hover: none)').matches;
    show(`<section class="g-title${splash ? ' is-splash' : ''}">
      <div class="g-title-stage"><img class="g-title-art" src="${G.base}assets/femc/title/keyart.webp" alt=""></div>
      <div class="g-title-moon" aria-hidden="true"></div><div class="g-title-fx" aria-hidden="true"></div>
      <div class="g-title-copy"><h1 class="g-logo" aria-label="Persona 3: Solstice"><span class="g-logo-text" aria-hidden="true">Solstice<small>Persona 3 · Every Universe</small></span></h1>
      <button type="button" class="g-title-press">${tap ? 'Tap to start' : 'Press any key'}</button>
      <div class="g-title-menu" role="menu">${has ? '<button type="button" role="menuitem" data-t="continue">Continue</button>' : ''}<button type="button" role="menuitem" data-t="new">New Game</button><button type="button" role="menuitem" data-t="load">Load</button><button type="button" role="menuitem" data-t="extras">Extras</button><button type="button" role="menuitem" data-t="settings">Settings</button></div>
      <p class="g-title-foot">${has ? `Autosave · ${esc(autoLine())}` : 'No save yet'}</p></div>
      <a class="g-title-practice" href="femc-battle.html?practice=1" title="Practice mode: the battle game on its own, with its own save">Practice</a></section>`, 'is-title');
    const sec = main.querySelector('.g-title'), items = [...sec.querySelectorAll('.g-title-menu button')];
    let leaving = false;
    putLogo(main.querySelector('.g-logo'));
    titleFx(sec.querySelector('.g-title-fx'));
    // The cursor: one lit item, by mouse or keys (the arrow keys already tick, in navKeys).
    const light = b => items.forEach(x => x.classList.toggle('is-on', x === b));
    items.forEach(b => {
      b.addEventListener('focus', () => light(b));
      b.addEventListener('pointerenter', e => { if (e.pointerType !== 'mouse' || leaving || b.classList.contains('is-on')) return; b.focus({ preventScroll: true }); G.sfx('femc-hover'); });
    });
    const firstItem = () => { if (sec.isConnected && !leaving) items[0]?.focus({ preventScroll: true }); };
    // Press start.
    const onKey = e => {
      if (!sec.isConnected || !sec.classList.contains('is-splash')) return document.removeEventListener('keydown', onKey, true);
      if (topLayer() || e.metaKey || e.ctrlKey || e.altKey || ['Shift', 'Control', 'Alt', 'Meta', 'Tab', 'CapsLock'].includes(e.key)) return;
      e.preventDefault(); e.stopPropagation(); wake();
    };
    function wake() {
      titleWoke = true;
      if (!sec.classList.contains('is-splash')) return;
      document.removeEventListener('keydown', onKey, true);
      sec.classList.remove('is-splash');
      G.sfx('femc-on');
      screenMusic('opening');
      setTimeout(firstItem, 0);
    }
    if (splash) {
      document.addEventListener('keydown', onKey, true);
      sec.querySelector('.g-title-press').focus({ preventScroll: true });
      sec.addEventListener('click', e => { if (sec.classList.contains('is-splash') && !e.target.closest('[data-t], a')) { e.preventDefault(); wake(); } });
    } else firstItem();
    // The key art leans a little with the mouse (desktop only).
    if (!reduced.matches && matchMedia('(hover: hover) and (pointer: fine)').matches) {
      let raf = 0, px = 0, py = 0;
      sec.addEventListener('pointermove', e => {
        px = e.clientX / innerWidth - 0.5; py = e.clientY / innerHeight - 0.5;
        if (!raf) raf = requestAnimationFrame(() => { raf = 0; sec.style.setProperty('--px', px.toFixed(3)); sec.style.setProperty('--py', py.toFixed(3)); });
      });
    }
    // New Game / Continue wipe out to the game.
    const leave = (b, go) => {
      if (leaving) return;
      titleWoke = true;
      if (reduced.matches) return go();
      leaving = true;
      b?.classList.add('is-go');
      sec.classList.add('is-leaving');
      setTimeout(() => { if (sec.isConnected) go(); }, 560);
    };
    items.forEach(b => b.addEventListener('click', () => {
      const t = b.dataset.t;
      if (leaving) return;
      titleWoke = true; sec.classList.remove('is-splash');
      G.sfx('femc-click');
      if (t === 'continue') leave(b, () => { if (S().phase === 'title') S().phase = 'play'; G.save(); cardDay = null; run(); });
      if (t === 'new') {
        if (has) {
          const o = overlay(`<h2>New game?</h2><p>This replaces the autosave. Your three save slots stay.</p><div class="g-row"><button type="button" class="g-btn pink" data-y>Start over</button><button type="button" class="g-btn" data-close>Cancel</button></div>`);
          o.el.querySelector('[data-y]').addEventListener('click', () => { o.close(); leave(b, () => { G.newGame(); run(); }); });
        } else leave(b, () => { G.newGame(); run(); });
      }
      if (t === 'load') openSaves(true);
      // Extras: the Memories album and the Theater for the autosave's playthrough (menu.js; read only, nothing is saved).
      if (t === 'extras') window.FemcMenu?.extras(() => b.isConnected && b.focus({ preventScroll: true }));
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
    // The world reacts (core.js crushLine): some days, what she overhears is about her and him.
    const cl = G.crushLine(`chatter.${kind}`);
    if (cl) return cl.trim().replace(/^["“]+|["”]+$/g, '');
    const m = G.dayInfo().date.getMonth() + 1;
    const pool = (G.D.q.ambient?.[kind] || []).filter(a => !a.months || a.months.includes(m));
    // The screen adds its own quotation marks, so strip any the line already carries.
    return pool.length ? pick(pool, S().day + kind.length).t.trim().replace(/^["“]+|["”]+$/g, '') : '';
  }
  /* The world reacts to the weather: a spot's weather pool (living-weather.js `weather.<spot>.<rain|storm|snow>`: late, home,
     lunch) takes over on most wet, snowy or stormy days (a storm falls back to the rain pool). A crush's line for the spot's
     usual path still comes first (core.js crushLine; some of those need the weather too). `usual`: that path. */
  function wxLine(spot, usual, info = G.dayInfo()) {
    const w = info.weather;
    if (!['rain', 'storm', 'snow'].includes(w)) return '';
    const cl = usual && G.crushLine(usual);
    if (cl) return cl;
    const V = G.D.variants.weather?.[spot] || {};
    const pool = (w === 'storm' ? ['storm', 'rain'] : [w]).find(k => V[k]?.length);
    if (!pool || Math.abs(Math.sin((S().day + 3) * 12.9898 + spot.length)) > 0.7) return '';
    return G.vary(`weather.${spot}.${pool}`, []);
  }
  function earlyMorning(info) {
    screenMusic('school');
    if (info.type === 'trip') return segment({ slot: 'early', bg: 'yakushima-beach', place: info.trip.place, text: info.trip.note, button: 'The day goes by', next: () => { if (info.trip.slots) return advance(); S().slot = 'late'; G.save(); run(); } });
    if (info.type === 'off') {
      // Variants (data/living-variants.js offDay); {holiday} and {break} are the day's names.
      const off = info.holiday ? G.vary('offDay.holiday', ['{holiday}. No school. The dorm was quiet in the way it only was on days off, everybody sleeping in except Akihiko, who never slept in, and Mitsuru, who might not sleep at all.'])
        : info.brk ? G.vary('offDay.break', ['{break}. The day was hers.']) : G.vary('offDay.sunday', ['Sunday. No school, no alarm, and a whole day that belonged to nobody but her.']);
      return segment({ slot: 'early', bg: 'solar-dormroom-day', place: 'Iwatodai Dorm', text: off.replace(/\{holiday\}/g, info.holiday || '').replace(/\{break\}/g, info.brk?.name || '') });
    }
    const exam = G.D.cal.exams.find(e => e.results === info.md);
    // The commute by weather (living-variants.js monorail.*; a storm has its own pool, living-weather.js).
    const mk = ['rain', 'snow', 'cloudy', 'storm'].includes(info.weather) ? info.weather : 'clear';
    const walk = G.vary(`monorail.${mk}`, mk === 'storm' ? 'The monorail crossed the bay in a gray roar of rain, the cars swaying on the gusts, and everyone pretended not to notice.' : G.wxIn(['rain'], info.weather) ? 'Rain on the monorail windows, umbrellas everywhere.' : info.weather === 'snow' ? 'Snow on the rails. The monorail crept across the bay like it was being careful.' : 'The monorail across the bay, the city falling away behind it.');
    const chatter = ambient('morning');
    return segment({ slot: 'early', bg: 'train-car-inside', place: 'Monorail', text: walk, sub: chatter ? `<i>“${esc(chatter)}”</i>` : '', next: exam ? () => resultsBoard(exam.id, advance) : advance });
  }
  function lunch(info) {
    const line = ambient('lunch');
    const rain = ['rain', 'snow', 'storm'].includes(info.weather);
    // Rain, snow and storms get their own lunch lines most of those days (living-weather.js weather.lunch).
    const own = wxLine('lunch', 'lunch.rain', info);
    if (own) return segment({ slot: 'lunch', bg: 'school-hallway', place: 'Gekkoukan High', text: own, sub: line ? `<i>“${esc(line)}”</i>` : '' });
    segment({ slot: 'lunch', bg: 'school-hallway', place: 'Gekkoukan High', text: G.vary(`lunch.${rain ? 'rain' : 'clear'}`, rain ? 'Lunch indoors, the hallway loud with everybody who’d meant to eat on the roof.' : 'Lunch. The roof was crowded and the cafeteria was worse.'), sub: line ? `<i>“${esc(line)}”</i>` : '' });
  }
  function classPeriod(slot, info) {
    screenMusic('class');
    const cond = Object.assign({}, G.D.stats.conditions[S().condition], { doze: G.dozeChance() }); // Cherry's Back Row halves dozing
    const seed = Math.abs(Math.sin((S().day + 1) * (slot === 'morning' ? 3.7 : 5.3)));
    const asks = seed < (slot === 'morning' ? 0.42 : 0.3);
    const q = asks ? G.classQuestion() : null;
    const T = G.D.q.teachers || {};
    if (q && seed * 1.7 % 1 > cond.doze) {
      const t = T[q.teacher] || { name: 'The teacher', subject: '' };
      // Haechan's Recruitment Pitch: once a day, one wrong answer is crossed out.
      const hint = G.classHint(q);
      // The teacher's face once their portrait exists (portraits/<teacher key>/); the name alone until then.
      const face = G.portrait(q.teacher, 'neutral');
      const box = segment({ slot, bg: 'gekkoukan-classroom-day', place: t.subject || 'Class', text: `${cap(t.name)} turned from the board and looked straight at her.`, extra: `<div class="g-quiz${face ? ' has-face' : ''}">${face ? `<img class="g-quiz-face" src="${face}" alt="${esc(cap(t.name))}">` : ''}<p class="g-quiz-q"><b>${esc(t.name)}</b>${esc(q.q)}</p><div class="g-quiz-a">${q.a.map((a, i) => `<button type="button" class="g-btn${i === hint ? ' hinted' : ''}" data-a="${i}"${i === hint ? ' disabled' : ''}>${esc(a)}</button>`).join('')}</div>${hint != null ? '<p class="g-quiz-hint">Haechan, under his breath: “Not that one.”</p>' : ''}<p class="g-quiz-r" hidden></p></div>`, button: 'Continue' });
      const next = box.querySelector('[data-next]'); next.hidden = true;
      box.querySelectorAll('[data-a]').forEach(b => b.addEventListener('click', () => {
        const right = G.answerClass(q, +b.dataset.a);
        const r = box.querySelector('.g-quiz-r'); r.hidden = false;
        // Guidance (unassigned since 2026-10-21): once a week, a wrong answer can be taken back.
        if (!right && G.canRetryClass()) {
          G.useGuidance(); b.classList.add('wrong'); b.disabled = true;
          r.textContent = 'Guidance: something tells her to look again. Try once more.';
          G.sfx('femc-back'); return;
        }
        box.querySelectorAll('[data-a]').forEach(x => { x.disabled = true; if (+x.dataset.a === q.correct) x.classList.add('right'); });
        if (!right) b.classList.add('wrong');
        r.textContent = right ? (q.right || 'Correct.') : (q.wrong || 'Not quite.');
        G.sfx(right ? 'femc-rankup' : 'femc-back');
        next.hidden = false; next.focus({ preventScroll: true });
      }));
      return;
    }
    if (G.settings().quickClass && !(seed < cond.doze)) return advance();
    const dozed = Math.abs(Math.sin(S().day * 7.7 + slot.length)) < cond.doze;
    if (dozed) G.dozed(); // Cherry's Back Row: dozing still earns +1 Courage
    const tk = pick(Object.keys(T), S().day + slot.length), t = T[tk] || { name: 'The teacher', quirk: '' };
    const tface = tk && G.portrait(tk, 'neutral');
    const QUIET = ['Chalk dust, the clock above the door, and the specific drone of a lesson that had decided to take its time.', 'She took notes in neat small handwriting she didn’t remember learning, and the period went by.', 'Someone behind her was passing notes. The teacher pretended not to see. The period went by anyway.', 'Rain or sun outside, the classroom had its own weather, warm and stale and slow.'];
    const text = dozed ? 'The lecture went somewhere warm and far away, and so did she. When she lifted her head, the board was full and her notes were a single long line where the pen had slid.' : G.vary('classQuiet', QUIET, `classQuiet.${slot}`);
    const listened = !dozed && Math.abs(Math.sin(S().day * 2.1 + slot.length)) < 0.3;
    if (listened) G.addStat('knowledge', 1);
    segment({ slot, bg: 'gekkoukan-classroom-day', place: t.subject || 'Class', text, sub: dozed ? '' : `${tface ? `<img class="g-quiz-face small" src="${tface}" alt="">` : ''}<b>${esc(cap(t.name))}.</b> ${esc(t.quirk || '')}${listened ? ' <i>She caught something worth writing down.</i>' : ''}` });
  }
  function lateNight(info) {
    screenMusic('dorm');
    const t = S().tonight;
    const wl = t !== 'battled' && t !== 'rest' && !info.moon.full ? wxLine('late', 'late.plain', info) : '';
    const text = wl ? wl : t === 'battled' ? G.vary('late.battled', 'Back from the tower, she fell into bed with her boots half off. Her body felt every floor.') : t === 'rest' ? G.vary('late.rest', 'She was asleep before her head finished settling into the pillow.') : info.moon.full ? G.vary('late.fullMoon', 'The moon outside was enormous. She lay awake for a while and listened to the dorm be quiet.') : G.vary('late.plain', 'The dorm settled around her. Somewhere down the hall, a door, and then nothing.');
    segment({ slot: 'late', bg: 'solar-dormroom-night', place: "Solar's Room", text, button: 'Sleep', next: () => { const r = G.sleep(); if (r.end) return endScreen(); run(); } });
  }
  // The end of the year: the ending's name, credits, and New Game+ (social stats, half the yen, the Compendium and books carry
  // over; the battle game carries levels and the tree into the new playthrough).
  function endScreen() {
    hud.hidden = true;
    setBg('iwatodaidorm-roof-night', 'night');
    screenMusic('title');
    const name = G.endingName(), clears = G.recordClear(), seen = [...new Set(clears.map(c => (c.ending === 'the count' ? 'the unfated life' : c.ending)))]; // the Hoax ending's old name (before 2026-10-21)
    const met = S().met.length, frags = S().fragments.length, maxed = Object.values(G.LINKS).filter(l => G.isMaxed(l)).length;
    show(`<section class="g-seg g-end"><p class="g-kicker">${esc(G.dayInfo(G.END()).md)} · the last minutes of the last Dark Hour</p>
      <div class="g-seg-box"><p class="g-end-name">ENDING · ${esc(name)}</p>
        <p class="g-seg-sub">${frags} memory fragment${frags === 1 ? '' : 's'} · ${maxed} bond${maxed === 1 ? '' : 's'} at MAX · ${met} people met${S().ngp ? ` · New Game+ ${S().ngp}` : ''}</p>
        <div class="g-credits"><p><b>Persona 3: Solstice</b> Every Universe</p><p>Story, characters and worlds · Kat</p><p>Persona 3 · ATLUS (the year it borrows)</p><p>Endings seen · ${seen.map(esc).join(' · ')}</p></div></div>
      <div class="g-row"><button type="button" class="g-btn pink" data-t="ngp">New Game+</button><button type="button" class="g-btn" data-t="title">Back to title</button></div></section>`, 'is-seg');
    // The album and the Theater come along into New Game+ (menu.js albumCarry: everything seen so far, in one list).
    main.querySelector('[data-t=ngp]').addEventListener('click', () => { const keep = window.FemcMenu?.albumCarry?.(); G.newGamePlus(); if (keep) { S().album = keep; G.saveQuiet(); } cardDay = null; run(); });
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

  /* ── Go Out (After School / Daytime, or out at night), P5X-style: bold slanted cards with each place's art and who's there
     today (met links' faces). Hovering or focusing a card fills the side panel: what the place is, who's around, what you'd
     get and what it costs. On a phone the cards carry that themselves (the panel would be off-screen), and choosing an
     activity still opens its review before any time or yen is spent (previewActivity). Arrows / a pad's D-pad move between
     cards (navKeys), Enter / A picks, Esc / B goes back. ── */
  const faceOf = (id, cls = '') => { const pic = G.portrait(id, 'neutral'); return `<i class="g-px-face${cls}">${pic ? `<img src="${pic}" alt="">` : '?'}</i>`; };
  // A link's line on Go Out: rank progress if they're free, why not if they aren't.
  function personNote(l, slot) {
    const st = G.linkStatus(l, S().day, slot), met = G.isMet(l.id), p = G.progress(l.id);
    const note = st.ok ? (met ? (st.after ? `${G.isMaxed(l) ? 'MAX' : `Rank ${p.rank}`} · Spend time together` : p.ready === p.rank && p.rank > 0 ? 'Hang out' : `Rank ${p.rank} ▸ ${p.rank + 1}`) : 'Someone you haven’t met') : st.reason === 'needs' ? `Needs ${st.needs}` : st.reason === 'later' ? 'Busy today' : 'Busy right now';
    return { st, met, note, line: met ? `${l.arcana} · ${note}` : (st.ok && l.approach ? l.approach : note) };
  }
  function pxWire(onPaint) {
    // The side panel follows the pointer and the focus; leaving the cards keeps the last one shown.
    main.querySelectorAll('[data-px]').forEach(b => { const go = () => onPaint(b); b.addEventListener('mouseenter', go); b.addEventListener('focus', go); });
  }
  const pxGo = () => (matchMedia('(hover: none)').matches ? 'Tap' : 'Enter or click');
  function goOut(slot, areaId) {
    screenMusic(slot === 'evening' ? 'evening' : 'after');
    const info = G.dayInfo(), night = slot === 'evening';
    const areas = G.D.places.areas.filter(a => a.slots.includes(slot) && !(a.schoolOnly && info.type !== 'school'));
    if (areaId) return areaView(slot, G.areaById(areaId));
    setBg(night ? 'outside-night' : 'paulownia-mall', night ? 'night' : '');
    const here = a => {
      const people = G.linksAt(a.id, slot).filter(l => G.linkStatus(l, S().day, slot).ok), traces = G.tracesAt(a.id, slot);
      return { people, traces, met: people.filter(l => G.isMet(l.id)), unmet: people.filter(l => !G.isMet(l.id)).length, n: people.length + traces.length };
    };
    show(`<section class="g-map g-px"><div class="g-map-head"><p class="g-kicker">Iwatodai · ${esc(G.slotName(slot, info))}</p><h1>${night ? 'Out tonight' : 'Go out'}</h1>
      <p class="g-map-sub">${night ? 'Where to tonight?' : 'Where do you want to spend this time?'} People keep their own schedules.</p>${night ? '<button type="button" class="g-btn small" data-back>‹ Back to the dorm</button>' : ''}</div>
      <div class="g-px-wrap"><div class="g-px-grid">${areas.map((a, k) => {
        const h = here(a), img = night && a.bgEvening ? a.bgEvening : a.bg;
        const faces = h.met.slice(0, 4).map(l => faceOf(l.id)).join('') + (h.met.length > 4 ? `<i class="g-px-face more">+${h.met.length - 4}</i>` : '') + (h.unmet ? '<i class="g-px-face q">?</i>' : '') + h.traces.map(t => faceOf(t.link.id, ' trace')).join('');
        return `<button type="button" class="g-px-card${h.n ? ' busy' : ''}${a.home ? ' home' : ''}${night ? ' late' : ''}" data-area="${a.id}" data-px="${a.id}" style="--pic:url('${bgUrl(img)}');--k:${k}">
          <span class="g-px-art" aria-hidden="true"></span><span class="g-px-num" aria-hidden="true">${String(k + 1).padStart(2, '0')}</span>
          <span class="g-px-txt"><b>${esc(a.name)}</b><small>${esc(a.blurb)}</small></span>
          ${faces ? `<span class="g-px-faces" aria-label="Here today: ${esc(h.met.map(l => l.short).join(', ') || 'someone new')}">${faces}</span>` : ''}${h.n ? `<em>${h.n} ${h.n === 1 ? 'person' : 'people'}</em>` : ''}</button>`;
      }).join('')}</div><aside class="g-px-info" aria-live="polite"></aside></div></section>`, 'is-map');
    const panel = main.querySelector('.g-px-info');
    const paint = b => {
      const a = G.areaById(b.dataset.px), h = here(a);
      main.querySelectorAll('[data-px]').forEach(x => x.classList.toggle('px-on', x === b));
      const acts = G.activities().filter(x => x.area === a.id && x.slots.includes(slot));
      const jobs = G.D.jobs.filter(j => j.area === a.id && G.jobVisible(j) && j.slot === slot);
      panel.innerHTML = `<p class="g-kicker">${esc(G.slotName(slot, info))}</p><h2>${esc(a.name)}</h2><p class="g-px-about">${esc(a.about || a.blurb)}</p>
        ${a.home ? '<ul class="g-px-gets"><li><b>Go home</b><small>Uses this time slot.</small></li></ul>' : `
        <h3>Here today</h3>${h.met.length || h.traces.length ? `<ul class="g-px-who">${h.met.map(l => `<li>${faceOf(l.id)}<span><b>${esc(l.short)}</b><small>${esc(personNote(l, slot).line)}</small></span></li>`).join('')}${h.traces.map(t => `<li>${faceOf(t.link.id, ' trace')}<span><b>${esc(t.link.short)}</b><small>Something of theirs is still here.</small></span></li>`).join('')}</ul>` : ''}
        ${h.unmet ? `<p class="g-px-new">${faceOf('?', ' q')}${h.unmet === 1 ? 'Someone you haven’t met' : `${h.unmet} people you haven’t met`}</p>` : ''}
        ${!h.n ? '<p class="g-note small">Nobody you know is free here right now.</p>' : ''}
        ${acts.length || jobs.length ? `<h3>Things to do</h3><ul class="g-px-gets">${acts.map(x => { const pv = G.activityInfo(x); return `<li><b>${esc(x.name)}</b><small>${esc(x.gacha ? (x.gacha === 'velvet' ? 'Elizabeth’s cards' : 'Capsule machine') : x.shop ? 'Shop · browsing is free' : pv.benefit)}${!x.shop && pv.cost !== 'Free' ? ` · ${esc(pv.cost.replace(/^Costs /, ''))}` : ''}</small></li>`; }).join('')}${jobs.map(j => `<li><b>${esc(j.name)}</b><small>${G.jobState(j.id).hired ? `Work a shift · ¥${j.pay.toLocaleString()}` : 'Part-time work'}</small></li>`).join('')}</ul>` : ''}`}
        <p class="g-px-go">${pxGo()} ▸ ${a.home ? 'go home' : `go to ${esc(a.name)}`}</p>`;
    };
    pxWire(paint);
    main.querySelector('[data-back]')?.addEventListener('click', () => evening(info));
    main.querySelectorAll('[data-area]').forEach(b => b.addEventListener('click', () => {
      const a = G.areaById(b.dataset.area);
      G.sfx('femc-click');
      if (a.home) { S().spent[`${S().day}-${slot}`] = 'home'; G.save(); return segment({ slot, bg: 'iwotodaidorm-outside', place: 'Iwatodai Dorm', text: wxLine('home', 'home') || G.vary('home', ['She went straight home and let the afternoon go by without asking anything of it.']), next: advance }); }
      areaView(slot, a);
    }));
    const first = main.querySelector('.g-px-card.busy') || main.querySelector('.g-px-card');
    if (first) { paint(first); first.focus({ preventScroll: true }); }
  }
  function areaView(slot, a) {
    const info = G.dayInfo(), night = slot === 'evening';
    setBg(night && a.bgEvening ? a.bgEvening : a.bg, night && !a.bgEvening ? 'night' : '');
    const people = G.linksAt(a.id, slot), traces = G.tracesAt(a.id, slot);
    const acts = G.activities().filter(x => x.area === a.id && x.slots.includes(slot));
    const jobs = G.D.jobs.filter(j => j.area === a.id && G.jobVisible(j) && j.slot === slot);
    const when = night ? 'Evening' : 'Afternoon';
    const art = place => G.background(place, when)?.url || bgUrl(night && a.bgEvening ? a.bgEvening : a.bg);
    const spotOf = l => G.homeOf(l).spot || '';
    const free = people.filter(l => G.linkStatus(l, S().day, slot).ok && G.isMet(l.id));
    let k = 0;
    const card = (attrs, cls, pic, body, tail = '') => `<button type="button" class="g-pcard ${cls}" ${attrs} style="--pic:url('${pic}');--k:${k++}"><span class="g-px-art" aria-hidden="true"></span>${body}${tail}</button>`;
    const personCard = l => {
      const x = personNote(l, slot), portrait = x.met ? G.portrait(l.id, 'neutral') : null;
      return card(`data-link="${l.id}" data-px="link:${l.id}"${x.st.ok ? '' : ' aria-disabled="true"'}`, `who${x.st.ok ? '' : ' off'}${x.met ? '' : ' unmet'}`, art(G.linkPlace(l)),
        `<i class="g-pc-pic">${portrait ? `<img src="${portrait}" alt="">` : '?'}</i><span class="g-pc-txt"><small class="g-pc-kick">${esc(spotOf(l) || a.name)}</small><b>${esc(G.linkName(l))}</b><small>${esc(x.line)}</small></span>`);
    };
    const traceCard = t => card(`data-trace="${t.link.id}" data-px="trace:${t.link.id}"${G.freeSlotSpent(slot) ? ' aria-disabled="true"' : ''}`, `who trace${G.freeSlotSpent(slot) ? ' off' : ''}`, art(t.entry.place || G.linkPlace(t.link)),
      `${faceOf(t.link.id, ' g-pc-pic')}<span class="g-pc-txt"><small class="g-pc-kick">A memory</small><b>${esc(t.entry.place ? t.entry.place.split(' · ').pop() : t.link.short)}</b><small>${esc(`Something of ${t.link.short}'s is still here.`)}</small></span>`);
    const actCard = x => {
      const ok = G.activityOk(x, slot), pv = G.activityInfo(x), cost = x.club ? (G.clubState(x.id).joined ? 'Your club' : 'Join') : x.cost ? `¥${x.cost.toLocaleString()}` : x.gacha ? (x.gacha === 'velvet' ? 'Draw' : 'Gacha') : x.shop ? 'Shop' : 'Free';
      const who = free.filter(l => spotOf(l) === x.spot);
      return card(`data-act="${x.id}" data-px="act:${x.id}"${ok.ok ? '' : ' aria-disabled="true"'}`, `place${ok.ok ? '' : ' off'}`, art(x.place || `${a.name} · ${x.spot}`),
        `<span class="g-pc-txt"><small class="g-pc-kick">${esc(x.spot)}</small><b>${esc(x.name)}</b><small class="g-act-benefit">${esc(pv.benefit)} · ${esc(pv.time)}</small>${ok.ok ? '' : `<small class="g-pc-why">${esc(ok.why)}</small>`}<small class="g-px-more">${esc(x.about || '')}</small></span>`,
        `<em>${esc(cost)}</em>${who.length ? `<span class="g-px-faces">${who.map(l => faceOf(l.id)).join('')}</span>` : ''}`);
    };
    const jobCard = j => {
      const st = G.jobState(j.id), ok = G.jobOk(j, slot), off = st.hired && !ok.ok;
      return card(`data-job="${j.id}" data-px="job:${j.id}"${off ? ' aria-disabled="true"' : ''}`, `job${off ? ' off' : ''}`, art(j.place || a.name),
        `<span class="g-pc-txt"><small class="g-pc-kick">Part-time job</small><b>${esc(j.name)}</b><small>${esc(j.role)}${off ? ` · ${esc(ok.why)}` : ''}</small></span>`, `<em>${esc(st.hired ? `Shift · ¥${j.pay.toLocaleString()}` : 'Ask about work')}</em>`);
    };
    const spent = G.freeSlotSpent(slot);
    show(`<section class="g-areaview g-px"><div class="g-map-head"><button type="button" class="g-btn small" data-back>‹ Map</button><p class="g-kicker">${esc(G.slotName(slot, info))}</p><h1>${esc(a.name)}</h1>
      <p class="g-map-sub">${esc(a.about || a.blurb)}</p></div>
      ${spent ? '<p class="g-note">You’ve already spent this time.</p>' : ''}
      <div class="g-px-wrap"><div class="g-px-places">
        ${people.length || traces.length ? `<div class="g-col"><h2>People</h2>${people.map(personCard).join('')}${traces.map(traceCard).join('')}</div>` : ''}
        ${acts.length ? `<div class="g-col"><h2>Places</h2>${acts.map(actCard).join('')}</div>` : ''}
        ${jobs.length ? `<div class="g-col"><h2>Work</h2>${jobs.map(jobCard).join('')}</div>` : ''}
        ${!people.length && !traces.length && !acts.length && !jobs.length ? '<p class="g-note">Nothing much going on here right now.</p>' : ''}
      </div><aside class="g-px-info" aria-live="polite"></aside></div></section>`, 'is-area');
    const panel = main.querySelector('.g-px-info');
    const paint = b => {
      main.querySelectorAll('[data-px]').forEach(x => x.classList.toggle('px-on', x === b));
      const [kind, id] = b.dataset.px.split(':');
      if (kind === 'act') {
        const x = G.activities().find(v => v.id === id), pv = G.activityInfo(x), ok = G.activityOk(x, slot), who = free.filter(l => spotOf(l) === x.spot);
        panel.innerHTML = `<p class="g-kicker">${esc(a.name)} · ${esc(x.spot)}${x.club ? ` · ${G.clubState(x.id).joined ? 'your club' : 'club'}` : ''}</p><h2>${esc(x.name)}</h2>${x.about ? `<p class="g-px-about">${esc(x.about)}</p>` : ''}
          <h3>You’d get</h3><ul class="g-px-gets"><li><b>${esc(pv.benefit)}</b></li><li><small>${esc(pv.cost)}</small></li><li><small>${esc(pv.time)}</small></li></ul>
          ${ok.ok ? '' : `<p class="g-warn">${esc(ok.why)}</p>`}
          ${who.length ? `<h3>Who’s there</h3><ul class="g-px-who">${who.map(l => `<li>${faceOf(l.id)}<span><b>${esc(l.short)}</b><small>${esc(personNote(l, slot).line)}</small></span></li>`).join('')}</ul>` : ''}
          <p class="g-px-go">${pxGo()} ▸ review${x.shop ? ' and browse' : ' before spending time'}</p>`;
      } else if (kind === 'link') {
        const l = G.LINKS[id], x = personNote(l, slot), pic = x.met ? G.portrait(l.id, 'neutral') : null;
        panel.innerHTML = `<div class="g-px-person">${pic ? `<img src="${pic}" alt="">` : '<i>?</i>'}</div><p class="g-kicker">${esc(G.linkPlace(l))}</p><h2>${esc(G.linkName(l))}</h2>
          <p class="g-px-about">${esc(x.met ? `${l.arcana} · ${x.note}` : x.st.ok && l.approach ? l.approach : x.note)}</p>
          ${x.met && x.st.ok ? `<ul class="g-px-gets"><li><b>${esc(x.st.after ? 'Time together' : 'Deepen your bond')}</b><small>Uses this time slot.</small></li></ul>` : ''}
          <p class="g-px-go">${x.st.ok ? `${pxGo()} ▸ spend time together` : 'Not today.'}</p>`;
      } else if (kind === 'trace') {
        const l = G.LINKS[id];
        panel.innerHTML = `<p class="g-kicker">${esc(a.name)}</p><h2>${esc(l.short)}</h2><p class="g-px-about">Something of ${esc(l.short)}'s is still here.</p><ul class="g-px-gets"><li><small>Uses this time slot.</small></li></ul>`;
      } else if (kind === 'job') {
        const j = G.D.jobs.find(v => v.id === id), st = G.jobState(j.id), ok = G.jobOk(j, slot);
        panel.innerHTML = `<p class="g-kicker">Part-time job</p><h2>${esc(j.name)}</h2><p class="g-px-about">${esc(st.hired ? j.role : j.blurb || j.role)}</p>
          <ul class="g-px-gets"><li><b>¥${j.pay.toLocaleString()} a shift</b></li><li><small>${esc(Object.keys(j.stats).map(k2 => G.D.stats.stats[k2]?.name).filter(Boolean).join(', '))}</small></li><li><small>${st.hired ? 'Uses this time slot.' : 'Asking about work uses no time.'}</small></li></ul>
          ${st.hired && !ok.ok ? `<p class="g-warn">${esc(ok.why)}</p>` : ''}<p class="g-px-go">${pxGo()} ▸ ${st.hired ? 'review the shift' : 'ask about work'}</p>`;
      }
    };
    pxWire(paint);
    main.querySelector('[data-back]').addEventListener('click', () => goOut(slot));
    const blocked = b => { if (b.getAttribute('aria-disabled') !== 'true') return false; G.sfx('femc-back'); return true; };
    main.querySelectorAll('[data-link]').forEach(b => b.addEventListener('click', () => { if (!blocked(b)) playLink(G.LINKS[b.dataset.link]); }));
    main.querySelectorAll('[data-trace]').forEach(b => b.addEventListener('click', () => { if (!blocked(b)) playLink(G.LINKS[b.dataset.trace], false, G.nextTrace(G.LINKS[b.dataset.trace])); }));
    // Activities you can't do right now still open their review, which says why (its confirm stays off).
    main.querySelectorAll('[data-act]').forEach(b => b.addEventListener('click', () => previewActivity(G.activities().find(x => x.id === b.dataset.act), slot, a)));
    main.querySelectorAll('[data-job]').forEach(b => b.addEventListener('click', () => { if (!blocked(b)) previewJob(G.D.jobs.find(x => x.id === b.dataset.job), slot, a); }));
    const first = main.querySelector('.g-pcard:not([aria-disabled])') || main.querySelector('.g-pcard');
    if (first) { paint(first); first.focus({ preventScroll: true }); }
  }
  function previewActivity(x, slot, a) {
    if (x.club) return previewClub(x, slot, a);
    const preview = G.activityInfo(x), ok = G.activityOk(x, slot);
    const o = overlay(`<p class="g-kicker">${esc(a.name)} · ${esc(x.spot)}</p><h2>${esc(x.name)}</h2>
      ${x.about ? `<p class="g-note">${esc(x.about)}</p>` : ''}<p>${esc(preview.benefit)}</p><ul class="g-gains"><li>${esc(preview.cost)}</li><li>${esc(preview.time)}</li></ul>
      ${ok.ok ? '' : `<p class="g-warn">${esc(ok.why)}</p>`}
      <div class="g-row"><button type="button" class="g-btn pink" data-confirm${ok.ok ? '' : ' disabled'}>${x.gacha === 'velvet' ? 'Open the door' : x.gacha ? 'Walk over' : x.shop ? 'Browse shop' : 'Spend time here'}</button><button type="button" class="g-btn" data-close>Back</button></div>`, 'g-activity-preview');
    o.el.querySelector('[data-confirm]').addEventListener('click', () => {
      o.close();
      if (!G.activityOk(x, slot).ok) return areaView(slot, a);
      doActivity(x, slot, a);
    });
  }
  function doActivity(x, slot, a) {
    // The capsule machine and the Velvet Room (gacha.js): free to walk up to, no time spent.
    if (x.gacha && window.FemcGacha) return window.FemcGacha.open(x.gacha, () => areaView(slot, a));
    if (x.shop) return openShop(x.shop, () => areaView(slot, a));
    if (x.club) return playClub(x, slot, a);
    const r = G.doActivity(x);
    // Sometimes someone turns up (data/living-runins.js): their scene plays on the end of this one.
    const ri = G.runInDue({ act: x.id, area: a.id, slot });
    SC.play({ scene: [{ n: r.text }, ...(ri ? ri.scene : [])], place: r.place, time: slot === 'evening' ? 'Evening' : G.slotName(slot), label: ri ? `${x.name} · ${G.name(ri.who)}` : undefined,
      onDone: () => { if (ri) G.finishRunIn(ri.id); advance(); } });
  }
  /* ── Clubs (places.js clubs, data/clubs.js): join on a club day (the first practice), then practice on its days. ── */
  function previewClub(x, slot, a) {
    const st = G.clubState(x.id), ok = G.activityOk(x, slot), pv = G.activityInfo(x);
    const days = (x.days || []).map(d => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d]).join(', ');
    const lead = x.link && G.isMet(x.link) ? ` ${G.LINKS[x.link]?.short || ''} is in it.` : '';
    const o = overlay(`<p class="g-kicker">${esc(a.name)} · ${esc(x.spot)} · ${st.joined ? 'Your club' : 'Club'}</p><h2>${esc(x.name)}</h2>
      ${x.about ? `<p class="g-note">${esc(x.about)}${esc(lead)}</p>` : ''}<p>${esc(pv.benefit)} every practice</p>
      <ul class="g-gains"><li>Meets after school: ${esc(days)}</li><li>${st.joined ? `${st.sessions} practice${st.sessions === 1 ? '' : 's'} so far` : 'Joining is free; the first practice is today.'}</li><li>Uses this time slot.</li></ul>
      ${ok.ok ? '' : `<p class="g-warn">${esc(ok.why)}</p>`}
      <div class="g-row"><button type="button" class="g-btn pink" data-confirm${ok.ok ? '' : ' disabled'}>${st.joined ? 'Go to practice' : 'Join the club'}</button><button type="button" class="g-btn" data-close>Back</button></div>`, 'g-activity-preview g-club-preview');
    o.el.querySelector('[data-confirm]').addEventListener('click', () => { o.close(); if (!G.activityOk(x, slot).ok) return areaView(slot, a); playClub(x, slot, a); });
  }
  function playClub(x, slot, a) {
    const st = G.clubState(x.id);
    if (!st.joined) G.joinClub(x);
    const pk = G.clubScene(x), ri = G.runInDue({ club: x.id, area: a.id, slot });
    SC.play({ scene: [...pk.scene, ...(ri ? ri.scene : [])], place: x.place || `${a.name} · ${x.spot}`, time: G.slotName(slot), label: x.name, link: x.link && G.isMet(x.link) ? x.link : null,
      onDone: () => { G.finishClub(x, pk); if (ri) G.finishRunIn(ri.id); advance(); } });
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
    const pk = G.shiftScene(j), ri = G.runInDue({ job: j.id, area: j.area, slot });
    SC.play({ scene: [...pk.scene, ...(ri ? ri.scene : [])], place: j.place, time: slot === 'evening' ? 'Evening' : G.slotName(slot), label: j.name,
      onDone: () => { G.finishShift(j, pk); if (ri) G.finishRunIn(ri.id); advance(); } });
  }

  /* ── Links ── */
  function playLink(l, forcedStory, trace) {
    const p = G.progress(l.id);
    const pick = G.linkScene(l, trace);
    const r = pick.r;
    const rank = l.ranks[r] || {};
    SC.play({
      scene: pick.scene, place: pick.place, time: pick.time || rank.time || (S().slot === 'evening' ? 'Evening' : G.slotName(S().slot)),
      title: pick.kind === 'rank' || pick.kind === 'after' || pick.kind === 'trace' ? pick.title || null : null, label: pick.kind === 'rank' ? `${l.short} · Rank ${r + 1}` : pick.kind === 'after' ? `${l.short} · ${G.isMaxed(l) ? 'MAX' : `Rank ${r}`}` : l.short, link: l.id,
      music: pick.music || (/^Persona 5/.test(l.from || '') ? 'p5' : null), // the Persona 5 cast: Beneath the Mask
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
    const dorm = G.dormActs(), desk = dorm.filter(a => a.desk);
    const secrets = s.spent[`${s.day}-evening`] ? [] : G.secretsDue(); // a hidden link's quiet option (My Melody)
    const opt = (id, label, sub, ok = true, cls = '') => `<button type="button" class="g-night ${cls}" data-n="${id}"${ok ? '' : ' disabled'}><b>${label}</b><small>${esc(sub)}</small></button>`;
    show(`<section class="g-dorm"><div class="g-map-head"><p class="g-kicker">Evening · Iwatodai Dorm</p><h1>Tonight</h1>
      <p class="g-map-sub">${info.moon.days != null && info.moon.days <= 3 && !info.moon.full ? `The moon is almost full. ${info.moon.days} day${info.moon.days === 1 ? '' : 's'} to go.` : esc(G.crushLine('evening.sub') || 'The lounge smells like instant ramen. What now?')}</p></div>
      <div class="g-nights">
        ${s.unlocked.tartarus ? opt('tartarus', 'Tartarus', tt.ok ? `Climb tonight. Solar will be tired tomorrow.${s.condition === 'tired' ? ' She’s already tired.' : ''}` : tt.why, tt.ok, 'tt') : ''}
        ${opt('study', 'Study', G.studyInfo(), true)}
        ${book ? opt('read', 'Read', G.bookById(book)?.name || 'A book') : ''}
        ${dorm.filter(a => !a.desk).map(a => { const ok = G.dormOk(a), pv = G.dormInfo(a); return opt(`dorm:${a.id}`, esc(a.name), ok.ok ? `${pv.benefit}${a.cost ? ` · ¥${a.cost.toLocaleString()}` : ''}` : ok.why, ok.ok, a.perk ? 'perk' : ''); }).join('')}
        ${desk.length ? opt('desk', 'Your desk', `${desk.map(a => a.name).join(' · ')}`, true) : ''}
        ${opt('rest', 'Rest', s.condition === 'good' || s.condition === 'great' ? 'Go to bed early.' : 'Shake off being ' + G.D.stats.conditions[s.condition].name.toLowerCase() + '.')}
        ${jobs.map(j => { const ok = G.jobOk(j, 'evening'); return opt(`job:${j.id}`, `Work · ${esc(j.name)}`, ok.ok ? `¥${j.pay.toLocaleString()}` : ok.why, ok.ok); }).join('')}
        ${homeLinks.map(l => opt(`link:${l.id}`, `${esc(G.linkName(l))}`, `${l.arcana} · ${G.homeOf(l).spot ? G.homeOf(l).spot.toLowerCase() : 'in the lounge'}`, true, 'who')).join('')}
        ${traces.map(t => opt(`trace:${t.link.id}`, esc(t.entry.place ? t.entry.place.split(' · ').pop() : t.link.short), `Something of ${t.link.short}'s is still here.`, true, 'who trace')).join('')}
        ${secrets.map(l => opt(`secret:${l.id}`, esc(l.secret.label || 'Something’s different tonight'), l.secret.sub || '', true, 'secret')).join('')}
        ${opt('out', 'Go out', 'Iwatodai at night')}
      </div></section>`, 'is-dorm');
    main.querySelectorAll('[data-n]').forEach(b => b.addEventListener('click', () => nightChoice(b.dataset.n, info)));
  }
  function nightChoice(n, info) {
    const s = S();
    const spend = tag => { s.spent[`${s.day}-evening`] = tag; G.save(); };
    if (n === 'study') {
      G.doStudy(); // rainy nights, Mitsuru's Study Hall, Jungwon's Tutor Session, Judy's Editing Bay
      return SC.play({ scene: [{ n: G.vary('study', G.D.places.dorm.study.lines) }], place: "Iwatodai Dorm · Solar's Room", time: 'Evening', onDone: advance });
    }
    if (n === 'desk') return deskMenu(info);
    if (n.startsWith('dorm:')) return dormAct(G.dormActs().find(a => a.id === n.slice(5)));
    if (n === 'rest') { s.tonight = 'rest'; spend('rest'); return SC.play({ scene: [{ n: G.vary('rest', G.D.places.dorm.rest.lines) }], place: "Iwatodai Dorm · Solar's Room", time: 'Evening', onDone: advance }); }
    if (n === 'read') {
      const r = G.readTonight();
      const line = r.finished ? G.vary('read.finished', ['She read the last chapter of {book} and closed it, and sat with it in her lap for a while.']) : G.vary('read.chapter', ['She read a chapter of {book}, then another, until the words started sliding.']);
      return SC.play({ scene: [{ n: line.replace(/\{book\}/g, r.book.name) }], place: "Iwatodai Dorm · Solar's Room", time: 'Evening', onDone: advance });
    }
    if (n === 'out') return goOut('evening');
    if (n.startsWith('job:')) return jobFlow(G.D.jobs.find(j => j.id === n.slice(4)), 'evening', G.areaById(G.D.jobs.find(j => j.id === n.slice(4)).area));
    if (n.startsWith('link:')) return playLink(G.LINKS[n.slice(5)]);
    if (n.startsWith('trace:')) return playLink(G.LINKS[n.slice(6)], false, G.nextTrace(G.LINKS[n.slice(6)]));
    if (n.startsWith('secret:')) {
      const l = G.LINKS[n.slice(7)], x = l.secret;
      return SC.play({ scene: x.scene || [], place: x.place || "Iwatodai Dorm · Kitchen", time: x.time || 'Evening', music: x.music || null, label: x.label || '', link: l.id,
        onDone: res => { G.findSecret(l.id, res.gained || 0); advance(); } });
    }
    if (n === 'tartarus') return tartarusPrompt();
  }
  // An evening activity at home (places.js dorm.acts): the stats, then a line of narration in its place.
  function dormAct(a) {
    if (!a || !G.dormOk(a).ok) return evening(G.dayInfo());
    const r = G.doDorm(a);
    SC.play({ scene: [{ n: r.text }], place: r.place, time: 'Evening', onDone: advance });
  }
  // Solar's desk: the crafts and hobbies in her room (sewing, fixing things, retro games, the keyboard; sewing with Hyein).
  function deskMenu(info) {
    const acts = G.dormActs().filter(a => a.desk);
    const o = overlay(`<p class="g-kicker">Evening · Solar's room</p><h2>Your desk<small>One project tonight</small></h2>
      <div class="g-desk">${acts.map(a => { const ok = G.dormOk(a), pv = G.dormInfo(a); return `<button type="button" class="g-night${a.perk ? ' perk' : ''}" data-desk="${a.id}"${ok.ok ? '' : ' disabled'}><b>${esc(a.name)}</b><small>${esc(a.sub || '')}</small><small class="g-desk-gain">${esc(ok.ok ? `${pv.benefit}${a.cost ? ` · ¥${a.cost.toLocaleString()}` : ''}` : ok.why)}</small></button>`; }).join('')}</div>
      <div class="g-row"><button type="button" class="g-btn" data-close>Back</button></div>`, 'g-desk-ov');
    o.el.querySelectorAll('[data-desk]').forEach(b => b.addEventListener('click', () => { o.close(); dormAct(acts.find(a => a.id === b.dataset.desk)); }));
    void info;
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

  /* ── Phone. The list: newest conversation on top (latest message's day, then its sequence), unread badges, a "Reply" tag
     where an answer is waiting, and Read all. A conversation: what was already read shows at once; new texts arrive one at
     a time (a typing bubble, then the message, a soft pop), and Solar's answer types out in the compose bar and sends with a
     whoosh. Pace: the Text speed setting (Instant shows everything at once) and Auto (Slow / Fast stretch or tighten the gap
     between bubbles); reduced motion shows everything at once. Skip, a tap on the conversation, or Enter / Space while it
     plays fast-forwards. Everything is already in the save before it animates, so closing mid-way loses nothing. ── */
  function phonePace() {
    const st = G.settings();
    const text = { slow: 1.45, normal: 1, fast: 0.5, instant: 0 }[st.text] ?? 1;
    const auto = { off: 1, slow: 1.4, normal: 1, fast: 0.65 }[st.auto] ?? 1;
    return { text, auto, instant: !text || reduced.matches };
  }
  // The phone's weather app, P5-style: today and the next four days (core.js forecast), and the spell it's part of.
  function forecastHtml() {
    const days = G.forecast(5); if (!days.length) return '';
    const spell = days[0].spell, wet = days.filter(d => d.wet).length;
    const note = days[0].kind === 'storm' ? 'Storm warning today. The pier and the beach are closed.' : days[0].wet && G.D.places.rainyDay?.note ? G.D.places.rainyDay.note : wet >= 3 ? 'A wet few days ahead. Take an umbrella.' : days.some(d => d.kind === 'snow') ? 'Snow in the forecast.' : '';
    return `<section class="g-ph-wx" aria-label="Forecast"><p class="g-ph-wx-h">Iwatodai weather${spell ? `<small>${esc(spell)}</small>` : ''}</p><ol>${days.map((d, k) => `<li class="${k ? '' : 'today'}" data-wx="${esc(d.level)}"><b>${k ? esc(d.day) : 'Today'}</b>${wxIcon(d)}<small>${esc(d.name)}</small></li>`).join('')}</ol>${note ? `<p>${esc(note)}</p>` : ''}</section>`;
  }
  function openPhone(thread) {
    const s = S();
    let goLink = null; // an invitation said yes to: the hangout starts when the phone closes
    const anim = { token: 0, skip: null, timer: null };
    const o = overlay(`<div class="g-phone"><div class="g-ph-top"><button type="button" class="g-ph-back" aria-label="Back">‹</button><b>Messages</b><button type="button" data-close aria-label="Close">✕</button></div>
      <div class="g-ph-bar"></div><div class="g-ph-body" aria-live="polite"></div>
      <div class="g-ph-compose" hidden aria-hidden="true"><p class="g-ph-draft"></p><span class="g-ph-send">↑</span></div><div class="g-ph-reply"></div></div>`, 'g-phone-ov', () => {
      stop();
      if (goLink) { const l = goLink; goLink = null; setTimeout(() => playLink(l), 0); }
    });
    // A phone case from the capsule machine (gacha.js; game.css .g-phone-ov[data-case]).
    const pcase = window.FemcGacha?.phoneCase(); if (pcase) o.el.dataset.case = pcase;
    const $p = sel => o.el.querySelector(sel);
    const body = $p('.g-ph-body'), reply = $p('.g-ph-reply'), back = $p('.g-ph-back'), title = $p('.g-ph-top b'), bar = $p('.g-ph-bar');
    const compose = $p('.g-ph-compose'), draft = $p('.g-ph-draft');
    const stop = () => { anim.token += 1; clearTimeout(anim.timer); anim.skip = null; o.el.classList.remove('g-ph-playing'); };
    const focusIn = el => setTimeout(() => el?.isConnected && el.focus({ preventScroll: true }), 40);
    const pending = id => !!(s.phone.pending[id] && G.textById(s.phone.pending[id])) || s.phone.invite?.link === id;

    const list = () => {
      stop();
      title.textContent = 'Messages'; back.hidden = true; reply.replaceChildren(); compose.hidden = true;
      const latest = id => (s.phone.threads[id] || []).at(-1) || {};
      const ids = Object.keys(s.phone.threads).sort((a, b) => {
        const x = latest(a), y = latest(b);
        return (y.d ?? -1) - (x.d ?? -1) || (y.seq || 0) - (x.seq || 0) ||
          G.SLOT_ORDER.indexOf(y.slot) - G.SLOT_ORDER.indexOf(x.slot) ||
          (s.phone.unread[b] || 0) - (s.phone.unread[a] || 0);
      });
      const n = G.unread();
      bar.innerHTML = `<span>${n ? `${n} unread` : ids.length ? 'All caught up' : ''}</span><button type="button" class="g-ph-readall" data-readall${n ? '' : ' disabled'}>Read all</button>`;
      bar.hidden = !ids.length;
      body.innerHTML = forecastHtml() + (ids.length ? ids.map(id => {
        const th = s.phone.threads[id], last = th[th.length - 1], pic = threadPic(id), u = s.phone.unread[id];
        const m = last ? msgParts(id, last) : { text: '' };
        const lead = !last ? '' : m.me ? 'You: ' : m.group && !m.notice ? `${m.name}: ` : '';
        return `<button type="button" class="g-ph-row${u ? ' unread' : ''}" data-th="${id}"><i>${pic ? `<img src="${pic}" alt="">` : esc(threadName(id)[0])}</i><span><b>${esc(threadName(id))}</b><small>${esc(lead + m.text)}</small></span>${u ? `<em>${u}</em>` : pending(id) ? '<em class="g-ph-due">Reply</em>' : ''}</button>`;
      }).join('') : '<p class="g-note">No messages.</p>');
      body.querySelectorAll('[data-th]').forEach(b => b.addEventListener('click', () => open(b.dataset.th)));
      bar.querySelector('[data-readall]').addEventListener('click', () => {
        if (!G.markAllRead()) return;
        G.sfx('femc-click'); paintHud(); list();
        focusIn(body.querySelector('.g-ph-row'));
      });
    };

    // One bubble (or a group chat's notice). Consecutive texts from one sender in a group show the name once.
    let lastFrom = null;
    const bubble = (id, m, animate) => {
      const x = msgParts(id, m), p = document.createElement('p');
      if (x.notice) { p.className = 'g-ph-notice'; p.textContent = x.text; lastFrom = null; }
      else {
        p.className = `g-ph-msg ${x.me ? 'me' : 'them'}${x.group && !x.me ? ' group' : ''}`;
        if (x.group && !x.me && lastFrom !== m.from) { const b = document.createElement('b'); b.textContent = x.name; if (x.handle) { const h = document.createElement('small'); h.textContent = x.handle; b.append(' ', h); } p.append(b); }
        p.append(x.text);
        lastFrom = m.from;
      }
      if (animate) p.classList.add('in');
      body.appendChild(p);
      body.scrollTop = body.scrollHeight;
      return p;
    };
    // Play messages [from, end) of a conversation, then call done. Instant when the pace says so.
    const play = (id, from, done) => {
      stop();
      const tok = anim.token, th = s.phone.threads[id] || [], queue = th.slice(from), pace = phonePace();
      const alive = () => tok === anim.token && o.el.isConnected && !o.el.classList.contains('out');
      let i = 0, dots = null;
      const finish = () => {
        if (!alive()) return;
        clearTimeout(anim.timer); dots?.remove(); dots = null; compose.hidden = true; draft.textContent = '';
        while (i < queue.length) bubble(id, queue[i++], false);
        anim.skip = null; o.el.classList.remove('g-ph-playing');
        done?.();
      };
      if (!queue.length) return finish();
      if (pace.instant) { if (queue.some(m => m.from !== 'solar')) phoneSfx('pop'); return finish(); }
      anim.skip = finish;
      o.el.classList.add('g-ph-playing');
      bar.innerHTML = '<span>…</span><button type="button" class="g-ph-skip" data-skip>Skip ▸▸</button>';
      bar.hidden = false;
      bar.querySelector('[data-skip]').addEventListener('click', e => { e.stopPropagation(); anim.skip?.(); focusIn(reply.querySelector('button') || back); });
      focusIn(bar.querySelector('[data-skip]'));
      const gap = () => Math.round(420 * pace.auto);
      const step = () => {
        if (!alive()) return;
        if (i >= queue.length) return finish();
        const m = queue[i], text = G.sub(m.t);
        if (m.from === 'solar') {
          // Solar's answer types out in the compose bar, then sends.
          compose.hidden = false; draft.textContent = '';
          const per = Math.max(8, G.textDelay()), chunk = Math.max(1, Math.ceil(text.length / 70));
          let k = 0;
          const type = () => {
            if (!alive()) return;
            k = Math.min(text.length, k + chunk); draft.textContent = text.slice(0, k);
            if (k % 3 === 1) G.sfx('femc-text');
            if (k < text.length) { anim.timer = setTimeout(type, per); return; }
            anim.timer = setTimeout(() => {
              if (!alive()) return;
              compose.classList.add('sent'); phoneSfx('whoosh');
              anim.timer = setTimeout(() => { if (!alive()) return; compose.classList.remove('sent'); compose.hidden = true; draft.textContent = ''; bubble(id, m, true).classList.add('sent'); i += 1; anim.timer = setTimeout(step, gap()); }, 160);
            }, Math.round(260 * pace.text));
          };
          anim.timer = setTimeout(type, 120);
          return;
        }
        // Someone else: the typing bubble, then the message.
        dots = document.createElement('p');
        dots.className = 'g-ph-typing'; dots.setAttribute('aria-label', `${G.name(m.from)} is typing`);
        dots.innerHTML = '<i></i><i></i><i></i>';
        body.appendChild(dots); body.scrollTop = body.scrollHeight;
        const wait = Math.round(Math.max(550, Math.min(1700, 420 + text.length * 22)) * pace.text);
        anim.timer = setTimeout(() => { if (!alive()) return; dots.remove(); dots = null; bubble(id, m, true); phoneSfx('pop'); i += 1; anim.timer = setTimeout(step, gap()); }, wait);
      };
      step();
    };
    // Answers waiting in a conversation: a text's reply options, or an invitation.
    const replies = id => {
      reply.replaceChildren();
      bar.innerHTML = ''; bar.hidden = true;
      const t = s.phone.pending[id] && G.textById(s.phone.pending[id]);
      if (t) t.reply.forEach((r, i) => {
        const b = document.createElement('button'); b.type = 'button'; b.textContent = G.sub(r.t);
        b.addEventListener('click', () => { const from = (s.phone.threads[id] || []).length; G.replyText(id, i); reply.replaceChildren(); G.sfx('femc-click'); play(id, from, () => replies(id)); });
        reply.append(b);
      });
      const inv = s.phone.invite;
      if (inv && inv.link === id) {
        [['Sure, I’m free', true], ['Can’t right now', false]].forEach(([label, yes]) => {
          const b = document.createElement('button'); b.type = 'button'; b.textContent = label;
          b.addEventListener('click', () => {
            const from = (s.phone.threads[id] || []).length;
            const l = G.answerInvite(yes); reply.replaceChildren(); G.sfx('femc-click');
            if (l) goLink = l;
            play(id, from, () => { if (goLink) setTimeout(() => o.close(), 500); else replies(id); });
          });
          reply.append(b);
        });
      }
      if (reply.firstChild) focusIn(reply.firstChild);
    };
    const open = id => {
      title.textContent = threadName(id); back.hidden = false;
      const th = s.phone.threads[id] || [], fresh = Math.min(th.length, s.phone.unread[id] || 0);
      delete s.phone.unread[id]; G.save(); paintHud();
      body.replaceChildren(); reply.replaceChildren(); lastFrom = null;
      th.slice(0, th.length - fresh).forEach(m => bubble(id, m, false));
      body.scrollTop = body.scrollHeight;
      bar.innerHTML = ''; bar.hidden = true;
      play(id, th.length - fresh, () => replies(id));
      if (!o.el.classList.contains('g-ph-playing') && !reply.firstChild) focusIn(back);
    };
    back.addEventListener('click', () => { list(); focusIn(body.querySelector('.g-ph-row')); });
    // A tap on the conversation, or Enter / Space on it, fast-forwards what's still arriving.
    body.addEventListener('click', () => anim.skip?.());
    o.el.addEventListener('keydown', e => { if (anim.skip && (e.key === 'Enter' || e.key === ' ') && !e.target.closest?.('button:not([data-skip])')) { e.preventDefault(); anim.skip(); } });
    if (thread) open(thread); else { list(); focusIn(body.querySelector('.g-ph-row') || $p('[data-close]')); }
  }

  /* ── Shops ── */
  function openShop(id, done) {
    const books = id === 'books';
    const shopData = books ? { name: 'Bookworms', sub: 'Used books', lines: { hi: ['Take your time, dear. The good ones are on the bottom shelf.'] } } : G.D.battle.shops?.[G.D.places.shops[id].battleShop];
    if (!shopData) { G.toast('note', 'Closed today.'); return done(); }
    // Mayoido buys materials (they live in the battle save): a Sell tab.
    const buys = !books && !!shopData.buys;
    let tab = 'buy';
    const render = () => {
      const mats = buys ? Object.entries((G.ensureBattleSave()?.mats) || {}).filter(([k, n]) => n > 0 && G.D.battle.materials?.[k]) : [];
      const stock = books ? G.D.places.books.filter(b => !S().books.owned.includes(b.id)).map(b => ({ id: b.id, kind: 'book', name: b.name, price: b.price, desc: `${b.nights} nights · ${Object.keys(b.stats).map(k => G.D.stats.stats[k].name).join(', ')}` })) : G.shopStock(id);
      const tabs = o.el.querySelector('.g-shop-tabs');
      if (tabs) tabs.innerHTML = buys ? `<button type="button" class="g-chip${tab === 'buy' ? ' on' : ''}" data-tab="buy">Buy</button><button type="button" class="g-chip${tab === 'sell' ? ' on' : ''}" data-tab="sell">Sell materials</button>` : '';
      o.el.querySelector('.g-shop-list').innerHTML = tab === 'sell'
        ? (mats.length ? mats.map(([k, n]) => `<button type="button" class="g-act" data-sell="${esc(k)}"><span><b>${esc(G.D.battle.materials[k].name)} ×${n}</b><small>${esc(G.D.battle.materials[k].desc || '')}</small></span><em>¥${G.matSellPrice(k).toLocaleString()} each</em></button>`).join('') : '<p class="g-note">Nothing to sell. Shadows drop materials in Tartarus.</p>')
        : stock.length ? stock.map((x, i) => `<button type="button" class="g-act${x.art ? ' has-art' : ''}" data-i="${i}"${S().yen < x.price ? ' disabled' : ''}>${x.art ? `<img class="g-shop-art${x.wide ? ' wide' : ''}" src="${G.base}${x.art}" alt="">` : ''}<span><b>${esc(x.name)}</b><small>${esc(x.desc || '')}${x.who ? ` · for ${esc(x.who)}` : ''}</small></span><em>¥${x.price.toLocaleString()}${!books && x.kind === 'item' && S().inventory[x.id] ? ` · own ${S().inventory[x.id]}` : ''}${!books && !['item', 'cardpack'].includes(x.kind) && S().gear.includes(x.id) ? ' · owned' : ''}</em></button>`).join('') : '<p class="g-note">Nothing for sale right now.</p>';
      o.el.querySelector('.g-shop-yen').textContent = `¥${S().yen.toLocaleString()}`;
      o.el.querySelectorAll('[data-tab]').forEach(b => b.addEventListener('click', () => { tab = b.dataset.tab; G.sfx('femc-hover'); render(); }));
      o.el.querySelectorAll('[data-sell]').forEach(b => b.addEventListener('click', () => { if (G.sellMat(b.dataset.sell, 1)) { o.el.querySelector('.g-shop-say').textContent = shopData.lines?.sold || 'A pleasure.'; G.sfx('femc-click'); } render(); }));
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
      <p class="g-note small">${books ? 'Read them at the dorm in the evening.' : 'Whatever you buy goes with you into Tartarus.'}${!books && G.D.places.rainyDay?.sale?.[id] && G.wet() ? ` <b>Rainy-day sale: ${G.D.places.rainyDay.sale[id].pct}% off today.</b>` : ''}</p><div class="g-shop-tabs g-row"></div><div class="g-shop-list"></div></div>`, 'g-shop-ov', done);
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
      { k: 'wxFx', label: 'Weather effects', opts: ONOFF, desc: () => 'Rain, snow, fog and lightning over the scenes and the map. Lightning follows Reduce flashes; reduced motion shows it still.' },
      { h: 'Battle' },
      { k: 'difficulty', label: 'Difficulty', opts: Object.keys(DF).map(id => [id, DF[id].name]), desc: v => DF[v]?.desc || '' },
      { k: 'battleSpeed', label: 'Battle speed', opts: [[1, '1x'], [2, '2x'], [3, '3x']], desc: () => 'How fast battle animations play. Rush doubles it.' },
      { k: 'cutins', label: 'Persona cut-ins', opts: [['always', 'Always'], ['first', '1st per battle'], ['off', 'Off']], desc: () => 'The Evoker summon before a Persona skill and the full Theurgy cut-in: every time, the first time per member each battle, or never (Theurgy then plays a short version, as it does in Rush).' },
      { k: 'showtimes', label: 'Bond Showtimes', opts: [['on', 'On'], ['still', 'Still only']], desc: () => 'A bond with a Showtime plays its little scene before the strike (tap or Enter skips to the strike). Still only shows the bond’s single picture instead.' },
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
      { k: 'sfxVol', label: 'SFX volume', range: true, desc: () => 'Battle sound effect volume. Below 100% the menu sounds in battle use softer built-in versions.' },
      { k: 'wxSound', label: 'Weather sound', range: true, desc: v => (v ? 'Rain, storms and wind under the music, softer indoors. Sound effects and SFX volume apply too.' : 'Weather is silent.') }
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
      window.FemcWeather?.refresh();
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
  window.FemcGameUI = { run, openStatus, openPhone, openSaves, sfxLog: () => sfxLog.slice(), SUN, openSettings, playLink, goOut, evening: () => evening(G.dayInfo()), dateCard, advance, overlay, esc, inBattle: () => !!dh };
  // An old battle tab coming back (?from=battle): its result was taken into the save on load (core.js); carry on.
  const fromBattle = /[?&]from=battle\b/.test(location.search);
  if (fromBattle) history.replaceState(null, '', location.pathname);
  if (fromBattle && S().started && S().phase !== 'title' && S().handoff) { run(); return; }
  titleScreen();
})();
