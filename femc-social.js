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
  const fresh = () => ({ d: 0, slot: 0, spent: {}, links: {}, met: [], registered: [], free: false, phone: { log: {}, done: [], unread: {}, pending: {} } });
  let S = (() => { try { return { ...fresh(), ...JSON.parse(localStorage.getItem(KEY)) }; } catch (e) { return fresh(); } })();
  S.phone ||= fresh().phone;
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} listeners.forEach(fn => fn()); };
  const listeners = [];
  const onChange = fn => listeners.push(fn);
  const progress = id => (S.links[id] ||= { rank: 0, notes: 0, route: null, seen: [], rankDay: {} });

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
    deliver();
    save();
  }
  function nextDay() { if (S.d < END_DAY) { S.d += 1; S.slot = 0; deliver(); save(); } }

  /* ── Links ───────────────────────────────────────── */
  const TEXTS = [];
  const THREADS = {};
  function define(link) {
    links[link.id] = link;
    Object.assign(CAST, link.cast || {});
    CAST[link.id] = link.short || link.name;
    Object.assign(THREADS, link.threads || {});
    THREADS[link.id] ||= { name: link.name, members: [link.id] };
    (link.texts || []).forEach(t => TEXTS.push({ link: link.id, thread: link.id, ...t }));
  }
  // Secret links (and their texts) need every condition in `unlock`: { stamps: [ids], links: { id: rank }, after: 'M/D' }.
  function unlockMet(u) {
    if (!u) return true;
    const got = window.Achievements ? Achievements.unlocked() : {};
    if ((u.stamps || []).some(id => !got[id])) return false;
    if (Object.entries(u.links || {}).some(([id, r]) => progress(id).rank < r)) return false;
    if (u.after && S.d < dayOf(u.after)) return false;
    return true;
  }
  const arrived = link => S.free || ((!link.arrives || S.d >= dayOf(link.arrives)) && unlockMet(link.unlock));
  const isMet = id => S.met.includes(id);
  // Why a link can or can't be seen right now: { ok, reason }.
  function status(link) {
    const p = progress(link.id);
    if (p.rank >= link.ranks.length) return { ok: false, reason: 'max' };
    if (!arrived(link)) return { ok: false, reason: 'away' };
    if (link.closes && S.d >= dayOf(link.closes) && !S.free) return { ok: false, reason: 'closed' };
    if (S.free) return { ok: true };
    if (S.spent[`${S.d}-${S.slot}`]) return { ok: false, reason: 'spent' };
    const next = link.ranks[p.rank];
    if (next.after && S.d < dayOf(next.after)) return { ok: false, reason: 'later', when: next.after };
    const h = link.home;
    if (h.slot !== S.slot || !h.days.includes(dateOf(S.d).getDay())) return { ok: false, reason: 'elsewhere' };
    return { ok: true };
  }
  const freeNow = () => Object.values(links).filter(l => !l.hidden && status(l).ok);
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
    .vn.vn-velvet { background: radial-gradient(ellipse at 60% 30%, #1b3a8a, #050b26 70%); }
    .vn.vn-velvet::before { background: repeating-linear-gradient(0deg, rgba(120, 160, 255, .05) 0 2px, transparent 2px 22px); }
    .vn-velvet .vn-name, .vn-velvet .vn-title small { background: #2f5bd8; color: #fff; }
    .vn-velvet .vn-title small { background: none; color: #9fb8ff; }
    .vn-velvet .vn-text { border-color: #8fb0ff; box-shadow: 8px 8px 0 rgba(60, 110, 255, .45); background: rgba(5, 11, 38, .93); }
    .vn-velvet .vn-text::after, .vn-velvet .vn-title span { color: #8fb0ff; }
    .vn-velvet .vn-title span { color: #fff; text-shadow: .05em .05em 0 #2f5bd8; }
    .vn-velvet .vn-place { box-shadow: 5px 5px 0 rgba(60, 110, 255, .55); background: #050b26; }
    .vn-velvet .vn-place span { color: #9fb8ff; }
    .vn-velvet .vn-portrait { filter: drop-shadow(10px 10px 0 rgba(60, 110, 255, .35)); }
    .vn-velvet .vn-choices button { box-shadow: 5px 5px 0 rgba(60, 110, 255, .5); }
    .vn-velvet .vn-choices button:is(:hover, :focus-visible) { box-shadow: 7px 7px 0 #2f5bd8; }
    .vn-naming { position: absolute; left: 50%; top: 42%; z-index: 7; display: grid; gap: 16px; justify-items: center; width: min(460px, calc(100vw - 40px)); padding: 26px; transform: translate(-50%, -50%); background: rgba(5, 11, 38, .96); border: 2px solid #8fb0ff; box-shadow: 10px 10px 0 rgba(60, 110, 255, .5); }
    .vn-naming p { margin: 0; font: italic 800 18px/1 ${COND}; letter-spacing: .12em; text-transform: uppercase; color: #9fb8ff; }
    .vn-name-field { display: flex; align-items: center; min-width: 240px; padding: 10px 16px; border-bottom: 3px solid #fff; font: italic 900 34px/1 ${COND}; letter-spacing: .06em; }
    .vn-name-field i { width: 3px; height: 1em; margin-left: 4px; background: #fff; animation: vn-blink 1s steps(2) infinite; }
    .vn-naming button { padding: 9px 26px; border: 0; background: #2f5bd8; color: #fff; font: italic 900 16px/1 ${COND}; letter-spacing: .1em; text-transform: uppercase; transform: skewX(-14deg); cursor: inherit; }
    .vn-naming button:disabled { opacity: .35; }
    .vn-naming button:not(:disabled):is(:hover, :focus-visible) { background: #fff; color: #050b26; outline: none; }
    @keyframes vn-break { 0% { opacity: 0; } 35%, 55% { opacity: 1; } 100% { opacity: 0; } }
    @keyframes vn-phone { from { opacity: 0; transform: translate(-50%, -40%); } }
    .ph { position: fixed; inset: 0; z-index: 2147483350; display: grid; place-items: center; background: rgba(12, 3, 9, .7); backdrop-filter: blur(4px); animation: vn-in .25s ease both; }
    .ph-device { display: grid; grid-template-rows: auto 1fr auto; width: min(380px, calc(100vw - 28px)); height: min(680px, calc(100vh - 40px)); border: 11px solid #1b0b15; border-radius: 38px; background: #f7f2f5; color: #1b0b15; box-shadow: 12px 12px 0 rgba(255, 79, 158, .55); overflow: hidden; font-family: -apple-system, "Helvetica Neue", sans-serif; animation: vn-phone .35s cubic-bezier(.2, 1.3, .4, 1) both; }
    .ph-top { display: grid; grid-template-columns: 40px 1fr 40px; align-items: center; padding: 12px 10px; background: #fff; border-bottom: 1px solid #eadde4; }
    .ph-top b { text-align: center; font-size: 15px; }
    .ph-top button { border: 0; background: none; color: #ff4f9e; font-size: 22px; cursor: inherit; }
    .ph-top .ph-back[hidden] { display: block; visibility: hidden; }
    .ph-body { display: flex; flex-direction: column; gap: 8px; padding: 14px; overflow-y: auto; }
    .ph-empty { margin: auto; text-align: center; color: #8a7080; font-size: 14px; }
    .ph-row { display: grid; grid-template-columns: 46px minmax(0, 1fr) auto auto; gap: 10px; align-items: center; width: 100%; padding: 8px; border: 0; border-radius: 14px; background: none; color: inherit; text-align: left; cursor: inherit; }
    .ph-row:hover, .ph-row:focus-visible { background: #f0e4ea; outline: none; }
    .ph-row i, .ph-toast i { display: grid; place-items: center; width: 46px; height: 46px; border-radius: 50%; overflow: hidden; background: #ff4f9e; color: #fff; font: italic 900 20px/1 "Avenir Next Condensed", sans-serif; }
    .ph-row i img, .ph-toast i img { width: 100%; height: 100%; object-fit: cover; object-position: 50% 8%; transform: scale(1.6); transform-origin: 50% 12%; background: #3a1028; }
    .ph-row b { display: block; font-size: 15px; }
    .ph-row small { display: block; overflow: hidden; color: #8a7080; font-size: 13px; white-space: nowrap; text-overflow: ellipsis; }
    .ph-row em { padding: 3px 8px; border-radius: 99px; background: #ff4f9e; color: #fff; font: 700 11px/1.2 -apple-system, sans-serif; font-style: normal; }
    .ph-row em.re { background: #1b0b15; }
    .ph-msg { max-width: 80%; margin: 0; padding: 8px 12px; border-radius: 18px; font-size: 15px; line-height: 1.35; animation: vn-in .2s ease both; }
    .ph-msg b { display: block; font-size: 11px; opacity: .6; }
    .ph-msg.them { align-self: flex-start; background: #e7dde3; }
    .ph-msg.me { align-self: flex-end; background: #ff4f9e; color: #fff; }
    .ph-typing { letter-spacing: .1em; color: #8a7080; }
    .ph-sys { align-self: center; margin: 4px 0; color: #8a7080; font-size: 12px; text-align: center; }
    .ph-notes { align-self: flex-end; margin: -4px 4px 0; color: #ff4f9e; font-size: 18px; }
    .ph-reply { display: grid; gap: 6px; padding: 0 12px; }
    .ph-reply:not(:empty) { padding: 10px 12px 14px; border-top: 1px solid #eadde4; background: #fff; }
    .ph-reply button { padding: 9px 14px; border: 1.5px solid #ff4f9e; border-radius: 18px; background: #fff; color: #1b0b15; font: 600 14px/1.3 -apple-system, sans-serif; text-align: left; cursor: inherit; }
    .ph-reply button:hover, .ph-reply button:focus-visible { background: #ff4f9e; color: #fff; outline: none; }
    .ph-toast { position: fixed; top: 16px; right: 16px; z-index: 2147483360; display: grid; grid-template-columns: 46px minmax(0, 1fr); gap: 10px; align-items: center; width: min(340px, calc(100vw - 32px)); padding: 10px 14px 10px 10px; border: 0; border-radius: 18px; background: rgba(255, 255, 255, .96); color: #1b0b15; box-shadow: 8px 8px 0 rgba(255, 79, 158, .5); text-align: left; font-family: -apple-system, "Helvetica Neue", sans-serif; cursor: pointer; animation: ph-toast .5s cubic-bezier(.2, 1.3, .4, 1) both; }
    .ph-toast.out { transition: opacity .5s, transform .5s; opacity: 0; transform: translateY(-20px); }
    .ph-toast b { display: block; font-size: 14px; }
    .ph-toast small { display: block; overflow: hidden; color: #6a5060; font-size: 13px; white-space: nowrap; text-overflow: ellipsis; }
    @keyframes ph-toast { from { opacity: 0; transform: translateY(-30px); } }
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
    el.className = `vn${link.theme ? ` vn-${link.theme}` : ''}`;
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-label', `${link.name}, rank ${r + 1}`);
    const when = opts.replay || opts.frame ? '' : `${now().md}<small>${now().day}</small>`;
    el.innerHTML = `<div class="vn-place"><b>${when}</b><span></span></div>
      <img class="vn-portrait" alt="">
      <div class="vn-tools"><button type="button" data-t="log">Log</button><button type="button" data-t="skip">Skip ▸▸</button><button type="button" data-t="leave">Leave</button></div>
      <div class="vn-log" hidden><div class="vn-log-inner"></div><button type="button" data-t="log-close">Close log</button></div>
      <div class="vn-choices"></div>
      <div class="vn-box" aria-live="polite"><span class="vn-name"></span><p class="vn-text"></p></div>`;
    el.querySelector('.vn-place span').textContent = opts.frame ? rank.place : `${opts.replay ? 'Memory · ' : (now().time + ' · ')}${rank.place}`;
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
      F().sfx('femc-hover');
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
    // P3P's naming screen. The name is already decided.
    function naming() {
      const box = document.createElement('div');
      box.className = 'vn-naming';
      box.innerHTML = `<p>Please enter your name.</p><div class="vn-name-field"><span></span><i></i></div><button type="button" disabled>Confirm</button>`;
      el.appendChild(box);
      const field = box.querySelector('span'), btn = box.querySelector('button');
      const name = 'Solar';
      let i = 0;
      const type = () => { field.textContent = name.slice(0, ++i); F().sfx('femc-hover'); if (i < name.length) setTimeout(type, 260); else { btn.disabled = false; btn.focus({ preventScroll: true }); } };
      setTimeout(type, reduced.matches ? 0 : 500);
      btn.addEventListener('click', e => { e.stopPropagation(); F().sfx('femc-click'); box.remove(); waiting = null; next(); });
      waiting = null;
    }
    function next() {
      if (!el.isConnected) return;
      const line = queue.shift();
      if (!line) return end(true);
      if (line.place) return sceneBreak(line);
      if (line.naming) return naming();
      if (line.phone) return phone(line);
      if (line.register) { if (!opts.replay) register(line.register); return next(); }
      if (line.choose) return ask(line.choose);
      if (line.route) return ask(line.route);
      if (line.ifRank) { const ok = Object.entries(line.ifRank).every(([id, r]) => progress(id).rank >= r); queue.unshift(...((ok ? line.then : line.else) || [])); return next(); }
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
    function advanceClick() {
      if (choices.children.length) return;
      const w = waiting; waiting = null;
      if (!w) return;
      if (!typing && !skipping) F().sfx('femc-advance');
      w();
    }
    el.addEventListener('click', e => { if (e.target.closest('.vn-tools, .vn-choices, .vn-rank, .vn-log, .vn-title')) return; advanceClick(); });
    const keys = e => {
      if (!el.isConnected) return document.removeEventListener('keydown', keys, true);
      if (e.key === ' ' || e.key === 'Enter') { if (!choices.children.length && !e.target.closest?.('button')) { e.preventDefault(); advanceClick(); } }
      if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); }
      // Arrow keys move the cursor through dialogue choices, P3P style.
      if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && choices.children.length) {
        e.preventDefault();
        const all = [...choices.querySelectorAll('button')];
        const i = all.indexOf(document.activeElement);
        all[(i + (e.key === 'ArrowDown' ? 1 : all.length - 1) + all.length) % all.length].focus({ preventScroll: true });
        F().sfx('femc-hover');
      }
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
      if (!finished || opts.replay || opts.frame) { close(); opts.onDone?.(finished); return; }
      // Progress, then the rank-up.
      p.rank = r + 1;
      (p.rankDay ||= {})[p.rank] = S.d;
      p.notes += gained;
      if (!p.seen.includes(r)) p.seen.push(r);
      if (!S.met.includes(link.id)) S.met.push(link.id);
      if (!S.free) S.spent[`${S.d}-${S.slot}`] = link.id;
      save();
      (link.stamps?.[p.rank] || []).forEach(id => F().load('achievements.js?v=9', () => window.Achievements).then(() => window.Achievements?.unlock(id)));
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


  /* ── Phone: texts between hangouts ───────────────── */
  // A text event (in a link file's `texts`) arrives the first time the calendar moves while its conditions hold:
  //   rank: the link is at least this rank; before: and still below this rank (default rank + 1); route: only on that route;
  //   days: at least this many days since reaching that rank (default 1); slot: 0 daytime, 1 evening (default any).
  // msgs: [{ from, t } | { sys }]; reply: [{ t, notes, then: [{ from, t }] }] lets Solar answer for ♪.
  const ph = () => S.phone;
  const unread = () => Object.values(ph().unread).reduce((a, b) => a + b, 0);
  function eligible(t) {
    if (ph().done.includes(t.id)) return false;
    const p = progress(t.link);
    const before = t.before ?? (t.rank + 1);
    if (p.rank < t.rank || p.rank >= before) return false;
    const since = S.d - ((p.rankDay || {})[t.rank] ?? -999);
    if (since < (t.days ?? 1)) return false;
    if (t.slot !== undefined && t.slot !== S.slot) return false;
    if (t.date && S.d < dayOf(t.date)) return false;
    if (t.route && progress(t.link).route !== t.route) return false;
    if (!unlockMet(t.unlock ?? links[t.link]?.unlock)) return false;
    return true;
  }
  function deliver() {
    const t = TEXTS.find(eligible);
    if (!t) return;
    const P = ph();
    P.done.push(t.id);
    const log = (P.log[t.thread] ||= []);
    t.msgs.forEach(m => log.push({ ...m, d: S.d }));
    if (t.rename) THREADS[t.thread] && (P.names = { ...(P.names || {}), [t.thread]: t.rename });
    P.unread[t.thread] = (P.unread[t.thread] || 0) + t.msgs.filter(m => !m.sys).length;
    if (t.reply) P.pending[t.thread] = t.id;
    const first = t.msgs.find(m => !m.sys);
    setTimeout(() => notify(t.thread, first), 300);
  }
  const threadName = id => (ph().names || {})[id] || (THREADS[id] || {}).name || CAST[id] || id;
  const sender = id => id === 'solar' ? 'Solar' : (CAST[id] || id);
  function avatar(id) {
    const pic = THREADS[id]?.members?.length === 1 ? portrait(THREADS[id].members[0], 'neutral') : null;
    return pic ? `<img src="${pic}" alt="">` : `<span>${threadName(id).replace(/[^\p{L}\p{N}]/gu, '').slice(0, 1).toUpperCase() || '#'}</span>`;
  }
  function notify(thread, m) {
    if (!m || !document.body) return;
    const el = document.createElement('button');
    el.type = 'button';
    el.className = 'ph-toast';
    el.innerHTML = `<i>${avatar(thread)}</i><span><b></b><small></small></span>`;
    el.querySelector('b').textContent = threadName(thread);
    el.querySelector('small').textContent = `${THREADS[thread]?.members?.length > 1 ? sender(m.from) + ': ' : ''}${m.t}`;
    el.addEventListener('click', () => { el.remove(); openPhone(thread); });
    document.body.appendChild(el);
    F().sfx('femc-buzz');
    setTimeout(() => el.classList.add('out'), 4600);
    setTimeout(() => el.remove(), 5200);
  }

  let phoneEl = null;
  function openPhone(thread) {
    phoneEl?.remove();
    phoneEl = document.createElement('div');
    phoneEl.className = 'ph';
    phoneEl.setAttribute('role', 'dialog');
    phoneEl.setAttribute('aria-modal', 'true');
    phoneEl.setAttribute('aria-label', 'Phone');
    phoneEl.innerHTML = `<div class="ph-device"><div class="ph-top"><button type="button" class="ph-back" hidden>‹</button><b class="ph-title">Messages</b><button type="button" class="ph-close" aria-label="Close phone">✕</button></div><div class="ph-body"></div><div class="ph-reply"></div></div>`;
    document.body.appendChild(phoneEl);
    const close = () => { phoneEl?.remove(); phoneEl = null; document.removeEventListener('keydown', esc, true); };
    const esc = e => { if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); close(); } };
    document.addEventListener('keydown', esc, true);
    phoneEl.addEventListener('click', e => { if (e.target === phoneEl) close(); });
    phoneEl.querySelector('.ph-close').addEventListener('click', close);
    phoneEl.querySelector('.ph-back').addEventListener('click', () => list());
    F().sfx('femc-click');
    thread ? open(thread) : list();

    function list() {
      phoneEl.querySelector('.ph-back').hidden = true;
      phoneEl.querySelector('.ph-title').textContent = 'Messages';
      phoneEl.querySelector('.ph-reply').replaceChildren();
      const P = ph();
      const ids = Object.keys(P.log).sort((a, b) => (P.log[b].at(-1)?.d ?? 0) - (P.log[a].at(-1)?.d ?? 0));
      const body = phoneEl.querySelector('.ph-body');
      if (!ids.length) { body.innerHTML = '<p class="ph-empty">No messages yet. Get to know people, and they might text you.</p>'; return; }
      body.innerHTML = '';
      ids.forEach(id => {
        const last = [...P.log[id]].reverse().find(m => !m.sys) || {};
        const row = document.createElement('button');
        row.type = 'button';
        row.className = 'ph-row';
        row.innerHTML = `<i>${avatar(id)}</i><span><b></b><small></small></span>${P.unread[id] ? `<em>${P.unread[id]}</em>` : ''}${P.pending[id] ? '<em class="re">reply</em>' : ''}`;
        row.querySelector('b').textContent = threadName(id);
        row.querySelector('small').textContent = last.t ? `${last.from === 'solar' ? 'You: ' : ''}${last.t}` : '';
        row.addEventListener('click', () => { F().sfx('femc-hover'); open(id); });
        body.appendChild(row);
      });
    }
    function bubble(m, group) {
      const p = document.createElement('p');
      if (m.sys) { p.className = 'ph-sys'; p.textContent = m.sys; return p; }
      p.className = `ph-msg ${m.from === 'solar' ? 'me' : 'them'}`;
      if (group && m.from !== 'solar') { const b = document.createElement('b'); b.textContent = sender(m.from); p.append(b); }
      p.append(m.t);
      return p;
    }
    function open(id) {
      const P = ph();
      P.unread[id] = 0; save();
      phoneEl.querySelector('.ph-back').hidden = false;
      phoneEl.querySelector('.ph-title').textContent = threadName(id);
      const group = (THREADS[id]?.members?.length || 1) > 1;
      const body = phoneEl.querySelector('.ph-body');
      body.replaceChildren(...(P.log[id] || []).map(m => bubble(m, group)));
      body.scrollTop = body.scrollHeight;
      const replyBox = phoneEl.querySelector('.ph-reply');
      replyBox.replaceChildren();
      const t = TEXTS.find(x => x.id === P.pending[id]);
      if (!t) return;
      t.reply.forEach(o => {
        const b = document.createElement('button');
        b.type = 'button';
        b.textContent = o.t;
        b.addEventListener('click', () => {
          replyBox.replaceChildren();
          delete P.pending[id];
          const log = P.log[id];
          log.push({ from: 'solar', t: o.t, d: S.d });
          if (o.notes) { progress(t.link).notes += o.notes; }
          save();
          body.appendChild(bubble({ from: 'solar', t: o.t }, group));
          if (o.notes) { const n = document.createElement('p'); n.className = 'ph-notes'; n.textContent = '♪'.repeat(o.notes); body.appendChild(n); F().sfx('femc-note'); }
          F().sfx('femc-text');
          body.scrollTop = body.scrollHeight;
          // Their answers arrive one at a time, with a typing indicator.
          let i = 0;
          const nextMsg = () => {
            const m = (o.then || [])[i++];
            if (!m) return;
            const dots = document.createElement('p');
            dots.className = 'ph-msg them ph-typing';
            dots.textContent = '• • •';
            body.appendChild(dots); body.scrollTop = body.scrollHeight;
            setTimeout(() => {
              dots.remove();
              log.push({ ...m, d: S.d }); save();
              body.appendChild(bubble(m, group)); body.scrollTop = body.scrollHeight;
              F().sfx('femc-text');
              nextMsg();
            }, reduced.matches ? 0 : 900);
          };
          setTimeout(nextMsg, 500);
        });
        replyBox.appendChild(b);
      });
    }
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
    ready = Promise.all([L('assets/femc/portraits/index.js?v=3', () => window.FEMC_PORTRAITS), L('assets/femc/links/index.js?v=20', () => window.FEMC_LINK_FILES)])
      .then(() => Promise.all((window.FEMC_LINK_FILES || []).map(id => L(`assets/femc/links/${id}.js?v=23`, () => links[id]))))
      .then(() => { if (document.body) testPanel(); else addEventListener('DOMContentLoaded', testPanel); return links; });
    return ready;
  }

  // Elizabeth's Velvet Room opening, shown the first time Solar opens her social links.
  function playIntro(onDone) {
    const l = links.elizabeth;
    if (!l || S.intro) return false;
    play(l, 0, { frame: true, onDone: () => { S.intro = true; save(); onDone?.(); } });
    return true;
  }
  return { playIntro, define, load, links, now, advance, nextDay, status, freeNow, progress, isMet, nameFor, portrait, play, register, onChange, dayOf, state: () => S, DAYS, openPhone, unread };
})();
