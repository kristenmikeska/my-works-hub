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
  const fresh = () => ({ d: 0, slot: 0, spent: {}, links: {}, met: [], registered: [], free: false, approached: [], phone: { log: {}, done: [], unread: {}, pending: {}, invited: {} } });
  let S = (() => { try { return { ...fresh(), ...JSON.parse(localStorage.getItem(KEY)) }; } catch (e) { return fresh(); } })();
  S.phone ||= fresh().phone;
  S.approached ||= [];
  S.phone.invited ||= {};
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
  // Also: met, romance: [ids] (all on the romance route), romances: N (dating at least N people), codes, seen.
  function unlockMet(u) {
    if (!u) return true;
    const got = window.Achievements ? Achievements.unlocked() : {};
    if ((u.stamps || []).some(id => !got[id])) return false;
    if (Object.entries(u.links || {}).some(([id, r]) => progress(id).rank < r)) return false;
    if (u.after && S.d < dayOf(u.after)) return false;
    if ((u.met || []).some(id => !S.met.includes(id))) return false;
    if ((u.romance || []).some(id => progress(id).route !== 'romance')) return false;
    if ((u.codes || []).some(c => !typedCodes().includes(c))) return false;
    if ((u.seen || []).some(id => !(S.story?.seen || []).includes(id))) return false;
    if (u.romances && loves().length < u.romances) return false;
    return true;
  }
  // Everyone Solar is dating (romance route, met), closest first. Scenes can name them with {love1}, {love2}, {love3}.
  const loves = () => Object.values(links).filter(l => isMet(l.id) && progress(l.id).route === 'romance').sort((a, b) => progress(b.id).rank - progress(a.id).rank || a.id.localeCompare(b.id));
  // Codes typed in FEMC mode (femc-eggs.js keeps them in their own key so the two scripts never overwrite each other).
  const typedCodes = () => { try { return JSON.parse(localStorage.getItem('kg-femc-codes')) || []; } catch (e) { return []; } };
  const arrived = link => S.free || ((!link.arrives || S.d >= dayOf(link.arrives)) && unlockMet(link.unlock));
  const isMet = id => S.met.includes(id);
  // Why a link can or can't be seen right now: { ok, reason }.
  function status(link) {
    const p = progress(link.id);
    if (p.rank >= link.ranks.length && !afterMax(link, p)) return { ok: false, reason: 'max' };
    if (!arrived(link)) return { ok: false, reason: 'away' };
    if (link.closes && S.d >= dayOf(link.closes) && !S.free) return { ok: false, reason: 'closed' };
    if (S.free) return { ok: true };
    // After the main story's ending, the last day stays open: everyone Solar has met is free, as often as she likes.
    const after = storyState().ended && S.d >= END_DAY && isMet(link.id);
    if (S.spent[`${S.d}-${S.slot}`] && !after) return { ok: false, reason: 'spent' };
    const next = link.ranks[p.rank];
    if (next?.after && S.d < dayOf(next.after)) return { ok: false, reason: 'later', when: next.after };
    const h = link.home;
    if (!after && (h.slot !== S.slot || !h.days.includes(dateOf(S.d).getDay()))) return { ok: false, reason: 'elsewhere' };
    return { ok: true };
  }
  // After MAX, a link keeps going: romance gets `dates` (in order, then rotating), friends get `afterMax` scenes,
  // falling back to the link's `hangouts`. They play without the bond meter.
  function afterMax(link, p = progress(link.id)) {
    const pool = (p.route === 'romance' && link.dates?.length) ? link.dates : (link.afterMax?.length ? link.afterMax : link.hangouts);
    return pool?.length ? pool : null;
  }
  const freeNow = () => Object.values(links).filter(l => !l.hidden && status(l).ok);
  const nameFor = link => (isMet(link.id) ? link.name : '???');

  /* ── Portraits ───────────────────────────────────── */
  // Characters drawn with someone else's portraits (the girl on the bench is Wren before she has a name).
  const SAME_FACE = { porter: 'wren', 'hx-flower': 'sunghoon' };
  // Cameos in secret scenes have ids like 'hx-jungwon'; they use that person's portraits ('jungwon') when there are some.
  const faceId = id => SAME_FACE[id] || ((window.FEMC_PORTRAITS || {})[id] ? id : (id || '').replace(/^[a-z0-9]+-/, ''));
  function portrait(id, face) {
    id = faceId(id);
    const have = (window.FEMC_PORTRAITS || {})[id] || [];
    // A missing expression falls back to the closest one the set has (many sets have three or four faces).
    const base = face && face.replace(/-\d+$/, '');
    const CLOSE = { blushing: ['flustered', 'happy'], flustered: ['blushing', 'happy'], serious: ['sad'], surprised: [], sad: [] };
    const pick = [face, base, ...(CLOSE[base] || []), 'neutral', have[0]].find(f => f && have.includes(f));
    return pick ? `${F().base}assets/femc/portraits/${id}/${pick}.webp?v=${F().v}` : null;
  }

  /* ── Styles ──────────────────────────────────────── */
  const COND = '"Avenir Next Condensed", "Arial Narrow", "Helvetica Neue", sans-serif';
  const style = document.createElement('style');
  style.textContent = `
    .vn { position: fixed; inset: 0; z-index: 2147483200; overflow: hidden; color: #fff; font-family: "Avenir Next", "Helvetica Neue", sans-serif; background: radial-gradient(ellipse at 70% 30%, #3a1430, #12060e 70%); animation: vn-in .4s ease both; }
    .vn::before { content: ""; position: absolute; inset: 0; background: repeating-linear-gradient(-58deg, rgba(255, 79, 158, .06) 0 2px, transparent 2px 26px); }
    .vn.out { animation: vn-in .35s ease reverse forwards; pointer-events: none; }
    .vn-bg { position: absolute; inset: 0; background: center / cover no-repeat; opacity: 0; transition: opacity .6s ease, filter .6s ease; }
    .vn-bg.on { opacity: 1; }
    .vn-bg::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(14, 5, 10, .18), rgba(14, 5, 10, .42) 55%, rgba(14, 5, 10, .78)), repeating-linear-gradient(-58deg, rgba(255, 79, 158, .05) 0 2px, transparent 2px 26px); }
    .vn-bg.night { filter: brightness(.5) saturate(.75) hue-rotate(-12deg); }
    .vn-bg.night::after { background: linear-gradient(180deg, rgba(20, 24, 70, .35), rgba(14, 5, 20, .55) 55%, rgba(14, 5, 10, .82)); }
    .vn-bg.nightblue { filter: hue-rotate(125deg) saturate(.45) brightness(.78); }
    .vn-bg.dusk { filter: brightness(.75) saturate(1.05) sepia(.25); }
    .vn-place { position: absolute; top: 22px; left: 26px; display: flex; align-items: center; gap: 14px; padding: 8px 18px; background: #14070f; transform: skewX(-14deg); box-shadow: 5px 5px 0 rgba(255, 79, 158, .55); z-index: 3; }
    .vn-place > * { transform: skewX(14deg); }
    .vn-place b { font: italic 900 24px/1 ${COND}; }
    .vn-place b small { margin-left: 4px; color: #ff8cc0; font-size: 12px; letter-spacing: .08em; }
    .vn-place span { color: #ff8cc0; font: italic 800 12px/1.2 ${COND}; letter-spacing: .12em; text-transform: uppercase; }
    /* P3R layout: the speaker stands on the left, cut off by the bottom edge; the dialogue box sits to the right and points at them. */
    /* Every portrait is sized by height (times its --ps from portraits/scale.js) and wide art is trimmed at the sides,
       so faces come out the same size whatever shape the source image is. */
    .vn-portrait { position: absolute; left: max(1vw, 8px); bottom: 0; height: calc(min(80vh, 850px) * var(--ps, 1)); width: auto; max-width: calc(min(40vw, 760px) * var(--ps, 1)); object-fit: cover; object-position: center bottom; filter: drop-shadow(10px 0 0 rgba(255, 79, 158, .35)); -webkit-mask-image: linear-gradient(to right, #000 95%, transparent), linear-gradient(transparent, #000 4%); -webkit-mask-composite: source-in; mask-image: linear-gradient(to right, #000 95%, transparent), linear-gradient(transparent, #000 4%); mask-composite: intersect; transition: opacity .25s, transform .25s, filter .25s; }
    .vn-portrait.dim { filter: brightness(.55) drop-shadow(10px 0 0 rgba(255, 79, 158, .2)); }
    .vn-portrait.swap { opacity: 0; transform: translateX(-30px); }
    .vn-silhouette { position: absolute; left: 6vw; bottom: 0; width: min(46vw, 520px); height: min(76vh, 760px); background: linear-gradient(#000, #000) center bottom / 70% 52% no-repeat, radial-gradient(circle at 50% 30%, #000 0 22%, transparent 23%); opacity: .55; }
    .vn-box { position: absolute; left: 41vw; right: max(3vw, 16px); bottom: 4vh; z-index: 4; max-width: 980px; cursor: pointer; }
    .vn-name { display: inline-block; min-height: 30px; margin-left: 22px; padding: 6px 20px; background: #ff4f9e; font: italic 900 18px/1 ${COND}; letter-spacing: .06em; text-transform: uppercase; transform: skewX(-14deg); box-shadow: 4px 4px 0 #14070f; }
    .vn-name:empty { visibility: hidden; }
    .vn-text { position: relative; min-height: 7.2em; margin: -4px 0 0; padding: 22px 28px 26px; border: 2px solid #ff8cc0; border-radius: 4px 26px 4px 26px; background: rgba(20, 7, 15, .93); box-shadow: 8px 8px 0 rgba(255, 79, 158, .45); font-size: clamp(16px, 1.6vw, 19px); line-height: 1.5; font-weight: 600; }
    .vn-text.narration { font-style: italic; color: #f5d9e7; font-weight: 500; }
    /* Solar (the player) stands on the RIGHT while she talks; the box shifts left and points at her. */
    .vn-solar { position: absolute; right: max(1vw, 8px); bottom: 0; height: calc(min(80vh, 850px) * var(--ps, 1)); width: auto; max-width: calc(min(40vw, 760px) * var(--ps, 1)); object-fit: cover; object-position: center bottom; filter: drop-shadow(-10px 0 0 rgba(255, 79, 158, .35)); -webkit-mask-image: linear-gradient(to left, #000 95%, transparent), linear-gradient(transparent, #000 4%); -webkit-mask-composite: source-in; mask-image: linear-gradient(to left, #000 95%, transparent), linear-gradient(transparent, #000 4%); mask-composite: intersect; opacity: 0; transform: translateX(30px); transition: opacity .25s, transform .25s; pointer-events: none; }
    .vn.me-talking .vn-solar { opacity: 1; transform: none; }
    .vn.me-talking .vn-box { left: max(3vw, 16px); right: 41vw; text-align: right; }
    .vn.me-talking .vn-name { margin: 0 22px 0 0; }
    .vn.me-talking .vn-text { text-align: left; }
    .vn-velvet .vn-solar { filter: drop-shadow(-10px 10px 0 rgba(60, 110, 255, .35)); }
    .vn-text::before { content: ""; position: absolute; left: -40px; top: 26px; border: 16px solid transparent; border-right: 38px solid #ff8cc0; border-left: 0; filter: drop-shadow(0 6px 0 rgba(255, 79, 158, .45)); }
    .vn-text.narration::before, .vn-portrait.dim ~ .vn-box .vn-text::before, .vn-portrait[hidden] ~ .vn-box .vn-text::before { display: none; }
    .vn.me-talking .vn-box .vn-text::before { display: block; left: auto; right: -40px; border-right: 0; border-left: 38px solid #ff8cc0; }
    .vn-velvet.me-talking .vn-box .vn-text::before { border-left-color: #8fb0ff; }
    .vn-text::after { content: "▼"; position: absolute; right: 22px; bottom: 12px; color: #ff4f9e; font-size: 12px; opacity: 0; }
    .vn.ready .vn-text::after { opacity: 1; animation: vn-blink 1s steps(2) infinite; }
    .vn-choices { position: absolute; right: max(3vw, 16px); bottom: calc(4vh + 200px); z-index: 5; display: grid; gap: 10px; justify-items: end; max-width: min(560px, calc(100vw - 32px)); }
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
    .vn-meter-inner { display: flex; align-items: center; gap: clamp(18px, 4vw, 40px); width: min(680px, calc(100vw - 40px)); padding: 16px; }
    .vn-card.art { background: center / cover no-repeat; border: 0; border-radius: 8px; }
    .vn-card.art > * { visibility: hidden; }
    .vn-card-sm { flex: none; width: 110px; height: 168px; font-size: 34px; }
    .vn-card-sm small { font-size: 12px; }
    .vn-meter-info { flex: 1; min-width: 0; display: grid; gap: 12px; }
    .vn-meter-name { margin: 0; font: italic 900 clamp(30px, 5vw, 46px)/1 ${COND}; transform: skewX(-8deg); text-shadow: .06em .06em 0 #ff4f9e; }
    .vn-meter-name small { display: block; margin-top: 6px; color: #ff8cc0; font-size: 14px; letter-spacing: .24em; text-transform: uppercase; text-shadow: none; }
    .vn-bar { position: relative; height: 22px; border: 2px solid #ff8cc0; background: #14070f; transform: skewX(-18deg); overflow: hidden; box-shadow: 5px 5px 0 rgba(255, 79, 158, .45); }
    .vn-bar i { position: absolute; inset: 0 auto 0 0; width: 0; background: linear-gradient(90deg, #ff4f9e, #ffb3d6); transition: width .15s ease-out; }
    .vn-meter.full .vn-bar i { background: #fff; box-shadow: 0 0 18px #ff4f9e; }
    .vn-meter-notes { margin: 0; font: italic 800 16px/1 ${COND}; letter-spacing: .08em; color: #ffd6e8; }
    .vn-meter-notes b { margin-right: 10px; color: #ff4f9e; font-size: 20px; }
    .vn-meter-msg { min-height: 2.8em; margin: 0; font: italic 600 16px/1.45 Georgia, serif; color: #ffd6e8; }
    @media (max-width: 560px) { .vn-meter-inner { flex-direction: column; text-align: center; } }
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
    .vn.phoning .vn-box, .vn.phoning .vn-portrait, .vn.phoning .vn-solar { opacity: 0; }
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
    .vn-velvet .vn-text::before { border-right-color: #8fb0ff; filter: drop-shadow(0 6px 0 rgba(60, 110, 255, .45)); }
    .vn-velvet .vn-title span { color: #fff; text-shadow: .05em .05em 0 #2f5bd8; }
    .vn-velvet .vn-place { box-shadow: 5px 5px 0 rgba(60, 110, 255, .55); background: #050b26; }
    .vn-velvet .vn-place span { color: #9fb8ff; }
    .vn-velvet .vn-portrait { filter: drop-shadow(10px 10px 0 rgba(60, 110, 255, .35)); }
    .vn-velvet .vn-choices button { box-shadow: 5px 5px 0 rgba(60, 110, 255, .5); }
    .vn-velvet .vn-choices button:is(:hover, :focus-visible) { box-shadow: 7px 7px 0 #2f5bd8; }
    .vn-act { display: grid; place-items: center; z-index: 2147483300; background: radial-gradient(ellipse at 50% 40%, #2a0d22, #07030a 75%); cursor: pointer; }
    .vn-act-inner { position: relative; z-index: 2; display: grid; justify-items: center; gap: 10px; padding: 16px; text-align: center; }
    .vn-act-num { margin: 0; color: #ff8cc0; font: italic 800 clamp(16px, 2vw, 22px)/1 ${COND}; letter-spacing: .5em; text-transform: uppercase; animation: vn-in 1s .2s ease both; }
    .vn-act-title { margin: 0; font: italic 900 clamp(52px, 11vw, 140px)/.9 ${COND}; letter-spacing: -.01em; text-shadow: .05em .05em 0 #ff4f9e; transform: skewX(-8deg); animation: vn-slam .9s .5s cubic-bezier(.2, 1.4, .4, 1) both; }
    .vn-act-date { margin: 8px 0 0; color: #f5d9e7; font: italic 700 18px/1 ${COND}; letter-spacing: .2em; animation: vn-in 1s 1.2s ease both; }
    .vn-act-hint { margin: 26px 0 0; color: #c99ab3; font: 600 11px/1 "Avenir Next", sans-serif; letter-spacing: .3em; text-transform: uppercase; animation: vn-blink 1.6s 2s steps(2) infinite both; }
    .vn-approach { display: grid; place-items: center; z-index: 2147483250; }
    .vn-approach-inner { position: relative; z-index: 2; display: grid; gap: 18px; width: min(680px, calc(100vw - 40px)); }
    .vn-approach-kicker { margin: 0; color: #ff8cc0; font: italic 800 14px/1 ${COND}; letter-spacing: .3em; text-transform: uppercase; }
    .vn-approach-text { margin: 0; padding: 22px 26px; border: 2px solid #ff8cc0; border-radius: 4px 26px 4px 26px; background: rgba(20, 7, 15, .93); box-shadow: 8px 8px 0 rgba(255, 79, 158, .45); font: italic 500 clamp(17px, 1.8vw, 21px)/1.55 "Avenir Next", "Helvetica Neue", sans-serif; color: #f5d9e7; }
    .vn-approach .vn-choices { position: static; }
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
    @keyframes vn-choice { from { opacity: 0; transform: translateX(40px) skewX(-14deg); } }
    @keyframes vn-note { 0% { opacity: 0; transform: translateY(30px) scale(.5); } 25% { opacity: 1; transform: translateY(0) scale(1.1); } 80% { opacity: 1; } 100% { opacity: 0; transform: translateY(-40px); } }
    @keyframes vn-card { 0% { transform: rotateY(180deg) scale(.6); opacity: 0; } 60% { transform: rotateY(-10deg) scale(1.05); opacity: 1; } 100% { transform: none; } }
    @keyframes vn-slam { from { opacity: 0; transform: skewX(-8deg) scale(1.8); } }
    @keyframes vn-reg { 0% { opacity: 0; transform: translate(-50%, -30px); } 10%, 85% { opacity: 1; transform: translate(-50%, 0); } 100% { opacity: 0; transform: translate(-50%, -20px); } }
    @media (max-width: 700px) {
      /* Phones: the bust rests on top of the dialogue box (fixed height, so it never bobs). */
      .vn-portrait { left: 50%; transform: translateX(-50%); width: auto; max-width: calc(min(96vw, 520px) * var(--ps, 1)); height: calc(min(54vh, calc(100vh - var(--boxh, 220px) - 4vh - 70px)) * var(--ps, 1)); bottom: calc(4vh + var(--boxh, 220px) - 6px); object-position: center bottom; }
      .vn-portrait.swap { transform: translateX(-50%) translateY(20px); }
      .vn-box { left: 16px; right: 16px; }
      .vn-text { height: 10.5em; min-height: 0; overflow-y: auto; padding: 18px 18px 24px; }
      .vn-text::before { display: none; }
      .vn-solar { right: auto; left: 50%; transform: translateX(-50%) translateY(20px); max-width: calc(min(96vw, 520px) * var(--ps, 1)); height: calc(min(54vh, calc(100vh - var(--boxh, 220px) - 4vh - 70px)) * var(--ps, 1)); bottom: calc(4vh + var(--boxh, 220px) - 6px); }
      .vn.me-talking .vn-solar { transform: translateX(-50%); }
      .vn.me-talking .vn-portrait { opacity: 0; }
      .vn.me-talking .vn-box { left: 16px; right: 16px; }
      .vn.me-talking .vn-box .vn-text::before { display: none; }
      .vn-choices { bottom: calc(4vh + var(--boxh, 220px) + 14px); left: 16px; right: 16px; justify-items: stretch; }
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

  /* ── Tarot card art (assets/femc/tarot) ── */
  // A link's card image, or null when there's no art for its arcana yet (the plain pink card is drawn instead).
  function tarot(link) {
    const key = String(link?.arcana || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    return (window.FEMC_TAROT || []).includes(key) ? `${F().base}assets/femc/tarot/${key}.webp?v=${F().v}` : null;
  }
  // Full-body art for the link page and compendium (assets/femc/profile), or null.
  const profile = id => ((window.FEMC_PROFILE || []).includes(id) ? `${F().base}assets/femc/profile/${id}.webp?v=${F().v}` : null);
  const cardFace = link => { const art = tarot(link); return art ? ` art" style="background-image:url('${art}')` : ''; };

  /* ── Backgrounds by place (assets/femc/backgrounds.js) ── */
  // Returns { url, mood } for a place: mood 'night' or 'dusk' dims a daytime image; Dark Hour and Velvet images stay as they are.
  function background(place = '', time) {
    const rule = (window.FEMC_BG || []).find(([at]) => at[0] === '*' ? place.includes(at.slice(1)) : place.startsWith(at));
    if (!rule) return null;
    const [, day, evening, look] = rule;
    const late = time === 'Evening' || /\bNight\b|Evening/.test(place);
    const dusk = /\bDusk\b/.test(place);
    const special = /Dark Hour|Velvet|Tartarus/.test(place);
    const img = late && evening ? evening : day;
    return { url: `${F().base}assets/femc/bg/${img}.webp?v=${F().v}`, mood: look || (special || (late && evening) ? '' : late ? 'night' : dusk ? 'dusk' : '') };
  }
  const areaBackground = area => { const img = (window.FEMC_AREA_BG || {})[area]; return img ? `${F().base}assets/femc/bg/${img}.webp?v=${F().v}` : null; };

  /* ── Bond meter ────────────────────────────────────── */
  // Every rank after the first needs ♪ to reach. A rank's story scene always plays once; if its choices
  // didn't earn enough, shorter hangouts (the link's `hangouts`) fill the meter until the rank-up.
  // The bar fills from about 80% of the ♪ the story scene can give, so the best answers rank up right away.
  function maxNotes(lines) {
    return (lines || []).reduce((sum, l) => {
      const opts = l.choose || l.route;
      if (opts) return sum + Math.max(...opts.map(o => (o.notes || 0) + maxNotes(o.then)));
      if (l.ifRoute) return sum + maxNotes(l.then);
      if (l.ifRank || l.ifRomance) return sum + Math.max(maxNotes(l.then), maxNotes(l.else));
      return sum;
    }, 0);
  }
  function need(link, r) {
    if (r <= 0 || !link.ranks[r]) return 0;
    return Math.max(4, Math.round(maxNotes(link.ranks[r].scene) * 0.8));
  }
  // A short, story-free hangout for topping up the meter. Kat's vignettes rotate; there's a plain fallback.
  function maxScene(link, p) {
    const pool = afterMax(link, p), romance = p.route === 'romance' && link.dates?.length;
    const i = p.dated || 0;
    const pick = pool[romance && i < pool.length ? i : i % pool.length];
    const scene = Array.isArray(pick) ? pick : pick.scene;
    return { place: pick.place || link.home.place, scene, title: pick.title, music: pick.music || (romance ? 'date' : undefined) };
  }
  function hangoutScene(link, p) {
    const pool = link.hangouts || [];
    const scene = pool.length ? pool[(p.hung || 0) % pool.length] : [
      { n: `Solar spent the ${now().time === 'Evening' ? 'evening' : 'afternoon'} with ${link.short}. They talked about nothing in particular, which turned out to be the point.` },
      { choose: [{ t: '(Mostly listen.)', notes: 2 }, { t: '(Tell them about your week.)', notes: 3 }, { t: '(Tease them a little.)', notes: 1 }] },
      { n: `${link.short} seemed to have a good time.` }
    ];
    return { place: link.home.place, scene, music: link.music || (/^Gekkoukan High/.test(link.home.place) ? 'school' : CITY.test(link.home.place) ? 'city' : 'joy') };
  }

  /* ── Scene music, chosen by mood the way Persona does ── */
  // A rank (or a scene line) can name a mood with `music`; otherwise the place decides.
  const SCENE_MUSIC = {
    joy: 'joy', school: 'after-school', sun: 'sun', tender: 'tender-feeling',
    mystery: 'this-mysterious-feeling', night: 'tranquility', velvet: 'poem-for-everyones-souls',
    date: 'heartbeat-heartbreak', city: 'paulownia-mall', battle: 'mass-destruction'
  };
  const CITY = /^(Paulownia Mall|Iwatodai Strip|Port Island Station)/;
  function moodFor(link, rank, r, place = rank.place || '') {
    if (rank.music) return rank.music;
    if (link.theme === 'velvet' || /Velvet Room/.test(place)) return 'velvet';
    if (/Dark Hour|Tartarus/.test(place)) return 'night';
    if (r === 9) return 'tender';
    if (/^Gekkoukan High/.test(place)) return 'school';
    if (CITY.test(place)) return 'city';
    return link.music || 'joy';
  }
  function sceneMusic() {
    const VOLUME = 0.32;
    let cur = null, key = null;
    const fade = (a, to, done) => {
      clearInterval(a._fade);
      a._fade = setInterval(() => {
        const v = a.volume + (to > a.volume ? 0.03 : -0.03);
        if (Math.abs(to - a.volume) <= 0.03) { a.volume = to; clearInterval(a._fade); done && done(); } else a.volume = Math.max(0, Math.min(1, v));
      }, 50);
    };
    return {
      set(mood) {
        const k = SCENE_MUSIC[mood] ? mood : 'joy';
        if (k === key) return;
        key = k;
        const old = cur;
        cur = new Audio(`${F().base}assets/femc/music/${SCENE_MUSIC[k]}.mp3`);
        cur.loop = true; cur.volume = 0;
        const a = cur;
        const start = () => a.play().then(() => fade(a, VOLUME));
        // Autoplay blocked (a scene that opens on page load, like Elizabeth's): start on the first click or key press.
        start().catch(() => {
          const go = () => { removeEventListener('pointerdown', go, true); removeEventListener('keydown', go, true); if (cur === a) start().catch(() => {}); };
          addEventListener('pointerdown', go, true); addEventListener('keydown', go, true);
        });
        if (old) fade(old, 0, () => old.pause());
      },
      stop() { if (cur) { const a = cur; fade(a, 0, () => a.pause()); } cur = null; key = null; }
    };
  }

  /* ── Scene player ────────────────────────────────── */
  // Plays rank `r` (0-based) of a link. opts.replay skips progress, stamps and the rank-up.
  function play(link, r, opts = {}) {
    const p = progress(link.id);
    // The story for this rank already played but the meter isn't full: a hangout instead.
    const maxed = !opts.replay && !opts.frame && r >= link.ranks.length;
    const filler = !maxed && !opts.replay && !opts.frame && !S.free && p.ready === r && r > 0;
    const rank = maxed ? maxScene(link, p) : filler ? hangoutScene(link, p) : (opts.scene || link.ranks[r]);
    let gained = 0;
    const el = document.createElement('div');
    el.className = `vn${link.theme ? ` vn-${link.theme}` : ''}`;
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-label', `${link.name}, rank ${r + 1}`);
    const when = opts.replay || opts.frame ? '' : `${now().md}<small>${now().day}</small>`;
    el.innerHTML = `<div class="vn-bg"></div><div class="vn-place"><b>${when}</b><span></span></div>
      <img class="vn-portrait" alt="">
      <img class="vn-solar" alt="" hidden>
      <div class="vn-tools">${F().canFullscreen?.() ? `<button type="button" data-t="full" aria-label="Fullscreen" title="Fullscreen (F)">⛶</button>` : ''}<button type="button" data-t="log">Log</button><button type="button" data-t="skip">Skip ▸▸</button><button type="button" data-t="leave">Leave</button></div>
      <div class="vn-log" hidden><div class="vn-log-inner"></div><button type="button" data-t="log-close">Close log</button></div>
      <div class="vn-choices"></div>
      <div class="vn-box" aria-live="polite"><span class="vn-name"></span><p class="vn-text"></p></div>`;
    el.querySelector('.vn-place span').textContent = opts.frame ? rank.place : `${opts.replay ? 'Memory · ' : (now().time + ' · ')}${rank.place}`;
    paint(rank.place, opts.replay || opts.frame ? '' : now().time);
    document.body.appendChild(el);
    const img = el.querySelector('.vn-portrait'), nameEl = el.querySelector('.vn-name'), textEl = el.querySelector('.vn-text'), choices = el.querySelector('.vn-choices');
    const meEl = el.querySelector('.vn-solar');
    // Solar on the right while she talks (null hides her).
    const showMe = face => {
      const src = face !== null && portrait('solar', face || 'neutral');
      if (src) { meEl.style.setProperty('--ps', (window.FEMC_PORTRAIT_SCALE || {}).solar || 1); if (meEl.getAttribute('src') !== src) meEl.src = src; meEl.hidden = false; }
      el.classList.toggle('me-talking', !!src);
    };
    let currentFace = null;
    const boxEl = el.querySelector('.vn-box');
    const fit = () => el.style.setProperty('--boxh', `${boxEl.offsetHeight}px`);
    if (window.ResizeObserver) new ResizeObserver(fit).observe(boxEl); else fit();
    const music = sceneMusic();
    music.set(moodFor(link, rank, r));

    // Flatten the scene into a queue we can push branches onto.
    const queue = [...rank.scene];
    let typing = null, full = '', waiting = null, skipping = false;
    const sub = text => text.replace(/\{name\}/g, 'Solar').replace(/\{love([1-3])\}/g, (m, i) => loves()[i - 1]?.short || 'someone');
    function showPortrait(who, face) {
      const src = portrait(who, face || 'neutral');
      const key = `${who}/${src}`;
      if (key === currentFace) { img.classList.remove('dim'); return; }
      const swap = currentFace && currentFace.split('/')[0] !== who;
      currentFace = key;
      const apply = () => { img.style.setProperty('--ps', (window.FEMC_PORTRAIT_SCALE || {})[faceId(who)] || 1); if (src) { img.src = src; img.hidden = false; } else img.hidden = true; img.alt = CAST[who] || ''; img.classList.remove('swap', 'dim'); };
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
      showMe(null);
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
      paint(place, time || (opts.replay || opts.frame ? '' : now().time));
    }
    // The backdrop for wherever the scene is.
    function paint(place, time) {
      const bg = el.querySelector('.vn-bg'), b = background(place, time);
      bg.className = `vn-bg${b ? ' on' : ''}${b && b.mood ? ` ${b.mood}` : ''}`;
      bg.style.backgroundImage = b ? `url("${b.url}")` : '';
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
      if (line.place) { music.set(line.music || moodFor(link, rank, r, line.place)); return sceneBreak(line); }
      if (line.music) { music.set(line.music); return next(); }
      if (line.go) {
        const l = links[line.go], st = storyState();
        st.christmas = l.id; S.spent[`${S.d}-${S.slot}`] = l.id; save();
        close();
        return setTimeout(() => play(l, 0, { frame: true, label: `${l.short} · Christmas Eve`, scene: { place: l.christmas.place || l.home.place, scene: l.christmas.scene || l.christmas, music: 'tender' }, onDone: () => { if (!S.free) advance(); opts.onDone?.(true); } }), 400);
      }
      if (line.naming) return naming();
      if (line.phone) return phone(line);
      if (line.register) { if (!opts.replay) register(line.register); return next(); }
      // { stamp: 'id' } unlocks a passport stamp when the scene reaches it (replays too, so every ending can be collected).
      if (line.stamp) { stamp(line.stamp); if (line.n === undefined && line.t === undefined) return next(); }
      if (line.choose) return ask(line.choose);
      if (line.route) { music.set('tender'); return ask(line.route); }
      if (line.ifRank) { const ok = Object.entries(line.ifRank).every(([id, r]) => progress(id).rank >= r); queue.unshift(...((ok ? line.then : line.else) || [])); return next(); }
      if (line.ifRoute) { if ((opts.route || p.route) === line.ifRoute) queue.unshift(...line.then); return next(); }
      if (line.ifRomance) { const ok = progress(line.ifRomance).route === 'romance'; queue.unshift(...((ok ? line.then : line.else) || [])); return next(); }
      if (line.n) {
        nameEl.textContent = '';
        textEl.classList.add('narration');
        img.classList.add('dim');
        log.push({ name: '', text: sub(line.n) });
        showMe(null);
        return say(line.n, next);
      }
      textEl.classList.remove('narration');
      if (line.s === 'solar') {
        nameEl.textContent = 'Solar';
        img.classList.add('dim');
        showMe(line.f);
      } else {
        nameEl.textContent = CAST[line.s] || line.s;
        showPortrait(line.s, line.f);
        showMe(null);
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
      if ((e.key === 'f' || e.key === 'F') && !e.metaKey && !e.ctrlKey && !e.altKey && F().canFullscreen?.()) { e.preventDefault(); e.stopPropagation(); F().fullscreen(); }
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
    el.querySelector('[data-t="full"]')?.addEventListener('click', () => F().fullscreen());
    const logBox = el.querySelector('.vn-log');
    el.querySelector('[data-t="log"]').addEventListener('click', () => {
      logBox.querySelector('.vn-log-inner').replaceChildren(...log.map(l => { const p = document.createElement('p'); if (l.name) { const b = document.createElement('b'); b.textContent = l.name; p.append(b); } else p.className = 'n'; p.append(l.text); return p; }));
      logBox.hidden = false;
      const inner = logBox.querySelector('.vn-log-inner'); inner.scrollTop = inner.scrollHeight;
    });
    el.querySelector('[data-t="log-close"]').addEventListener('click', () => { logBox.hidden = true; });

    function close() {
      document.removeEventListener('keydown', keys, true);
      music.stop();
      el.classList.add('out');
      setTimeout(() => el.remove(), 350);
    }
    function end(finished) {
      clearTimeout(typing);
      if (!finished || opts.replay || opts.frame) { close(); opts.onDone?.(finished); return; }
      // Progress: ♪ go into the bond meter, and the rank goes up only when it's full.
      if (maxed) {
        p.dated = (p.dated || 0) + 1; p.notes += gained; p.lastDay = S.d;
        if (!S.free) S.spent[`${S.d}-${S.slot}`] = link.id;
        save(); close(); if (!S.free) advance(); opts.onDone?.(true); return;
      }
      const req = S.free ? 0 : need(link, r);
      const from = Math.min(p.xp || 0, req);
      p.notes += gained;
      p.xp = (p.xp || 0) + gained;
      p.lastDay = S.d;
      if (filler) p.hung = (p.hung || 0) + 1;
      else if (!p.seen.includes(r)) p.seen.push(r);
      if (!S.met.includes(link.id)) S.met.push(link.id);
      if (!S.free) S.spent[`${S.d}-${S.slot}`] = link.id;
      const up = p.xp >= req;
      if (up) { p.rank = r + 1; (p.rankDay ||= {})[p.rank] = S.d; p.xp = 0; delete p.ready; } else p.ready = r;
      save();
      if (up) (link.stamps?.[p.rank] || []).forEach(id => F().load('achievements.js?v=15', () => window.Achievements).then(() => window.Achievements?.unlock(id)));
      const done = () => { close(); if (!S.free) advance(); opts.onDone?.(true); };
      const after = () => (up ? rankUp(link, p.rank, done) : done());
      req ? meter(link, r, from, Math.min(from + gained, req), req, up, after, gained) : after();
    }
    // P3R's bond meter: the ♪ from this hangout pour into the bar toward the next rank.
    function meter(link, r, from, to, req, up, done, gained = to - from) {
      const box = document.createElement('div');
      box.className = 'vn-rank vn-meter';
      box.innerHTML = `<div class="vn-meter-inner"><div class="vn-card vn-card-sm${cardFace(link)}" aria-label="${link.arcana}"><span>${link.numeral || '✦'}</span><small>${link.arcana}</small></div>
        <div class="vn-meter-info"><p class="vn-meter-name">${link.short}<small>Rank ${r} ▸ ${r + 1 >= link.ranks.length ? 'MAX' : r + 1}</small></p>
        <div class="vn-bar" role="progressbar" aria-valuemin="0" aria-valuemax="${req}" aria-valuenow="${to}"><i></i></div>
        <p class="vn-meter-notes"><b>+${gained} ♪</b> <span>${from}</span> / ${req}</p><p class="vn-meter-msg"></p></div></div>`;
      el.appendChild(box);
      const fill = box.querySelector('.vn-bar i'), count = box.querySelector('.vn-meter-notes span'), msg = box.querySelector('.vn-meter-msg');
      const pct = v => `${Math.min(100, (v / req) * 100)}%`;
      fill.style.width = pct(from);
      const steps = to - from, gap = reduced.matches ? 0 : 160;
      for (let k = 1; k <= steps; k++) setTimeout(() => { fill.style.width = pct(from + k); count.textContent = from + k; F().sfx('femc-note'); }, 500 + k * gap);
      let ready = false, finished = false;
      setTimeout(() => {
        ready = true;
        msg.textContent = up ? 'The meter is full. Something is about to change...' : `Your bond with ${link.short} grew. Spend more time together to reach the next rank.`;
        if (up) box.classList.add('full');
      }, 600 + steps * gap);
      const finish = () => { if (!ready || finished) return; finished = true; document.removeEventListener('keydown', onKey, true); box.remove(); done(); };
      const onKey = e => { if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') { e.preventDefault(); finish(); } };
      box.addEventListener('click', finish);
      document.addEventListener('keydown', onKey, true);
    }
    function rankUp(link, n, done) {
      const max = n >= link.ranks.length;
      const box = document.createElement('div');
      box.className = 'vn-rank';
      box.innerHTML = `<div class="vn-rank-inner"><div class="vn-card${cardFace(link)}" aria-label="${link.arcana}"><span>${link.numeral || '✦'}</span><small>${link.arcana}</small></div><p class="vn-thou"></p><p class="vn-ranknum">${max ? 'RANK MAX' : `RANK ${n}`}<small>${link.short || link.name}</small></p></div>`;
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
      card.querySelector('small').textContent = opts.label || (maxed ? `${link.short} · ${p.route === 'romance' && link.dates?.length ? 'Date' : 'Rank MAX'}` : `${link.short} · Rank ${r + 1}`);
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
  //   date: not before M/D; until: not on or after M/D (so a joke chat can't land after something sad).
  // msgs: [{ from, t } | { sys }]; reply: [{ t, notes, then: [{ from, t }] }] lets Solar answer for ♪.
  const ph = () => S.phone;
  const unread = () => Object.values(ph().unread).reduce((a, b) => a + b, 0);
  function eligible(t) {
    // A chat waiting on Solar holds back its link's later texts; a dated secret thread moves on without her.
    if (ph().done.includes(t.id) || (ph().pending[t.thread] && t.link !== 'story')) return false;
    const p = progress(t.link);
    const before = t.before ?? (t.rank + 1);
    if (p.rank < t.rank || p.rank >= before) return false;
    const since = S.d - ((p.rankDay || {})[t.rank] ?? -999);
    if (since < (t.days ?? 1)) return false;
    if (t.slot !== undefined && t.slot !== S.slot) return false;
    if (t.date && S.d < dayOf(t.date)) return false;
    if (t.date && t.link === 'story' && S.d > dayOf(t.date) + (t.window ?? 3)) return false;   // a dated secret only lands near its day
    if (t.until && S.d >= dayOf(t.until)) return false;
    if (t.route && progress(t.link).route !== t.route) return false;
    if (!unlockMet(t.unlock ?? links[t.link]?.unlock)) return false;
    return true;
  }
  function deliver() {
    expireInvites();
    const t = TEXTS.find(x => x.priority && eligible(x)) || TEXTS.find(eligible);
    if (t) send(t); else invite();
  }
  function send(t) {
    const P = ph();
    P.done.push(t.id);
    if (P.pending[t.thread] && !isInvite(P.pending[t.thread])) delete P.pending[t.thread];   // the chat moved on
    stamp(t.stamp);
    const log = (P.log[t.thread] ||= []);
    // Longer chats pause at each { ask: [...] } for Solar's answer; the rest arrives after she replies.
    const cut = t.msgs.findIndex(m => m.ask);
    const shown = cut < 0 ? t.msgs : t.msgs.slice(0, cut);
    shown.forEach(m => log.push({ ...m, d: S.d }));
    // A chat that pauses for answers takes its new group name when the conversation ends.
    if (t.rename && cut < 0) THREADS[t.thread] && (P.names = { ...(P.names || {}), [t.thread]: t.rename });
    P.unread[t.thread] = (P.unread[t.thread] || 0) + shown.filter(m => !m.sys).length;
    if (cut >= 0) P.pending[t.thread] = { id: t.id, ask: t.msgs[cut].ask, rest: t.msgs.slice(cut + 1).concat(t.reply ? [{ ask: t.reply }] : []) };
    else if (t.reply) P.pending[t.thread] = t.id;
    const first = shown.find(m => !m.sys);
    setTimeout(() => notify(t.thread, first), 300);
  }
  /* ── Invitations: "free right now?" ── */
  // A friend texts to hang out when everything's ready for their next rank but they aren't at their usual spot.
  // At most one invite a day, never two days running, once per rank. It expires when the time of day moves on.
  const slotKey = () => `${S.d}-${S.slot}`;
  function invite() {
    const P = ph();
    if (S.free || (P.lastInvite != null && S.d - P.lastInvite < 2)) return;
    const ready = Object.values(links).filter(l => {
      if (l.hidden || !l.invite || !isMet(l.id) || P.pending[l.id]) return false;
      const p = progress(l.id);
      return status(l).reason === 'elsewhere' && P.invited[l.id] !== inviteKey(p) && S.d - (p.lastDay ?? (p.rankDay || {})[p.rank] ?? -99) >= 2;
    });
    if (!ready.length) return;
    const l = ready[Math.floor(Math.random() * ready.length)];
    const msg = pickFresh(l.id, 'ask', l.invite.ask);
    P.invited[l.id] = inviteKey(progress(l.id));
    P.lastInvite = S.d;
    (P.log[l.id] ||= []).push({ from: l.id, t: msg, d: S.d });
    P.unread[l.id] = (P.unread[l.id] || 0) + 1;
    P.pending[l.id] = `invite:${l.id}:${slotKey()}`;
    setTimeout(() => notify(l.id, { from: l.id, t: msg }), 300);
  }
  // Once per rank, and once more after each hangout that didn't rank up.
  const inviteKey = p => `${p.rank}:${p.hung || 0}`;
  // A random line from a pool, never the same as the last few used for this link.
  function pickFresh(id, kind, pool) {
    if (!Array.isArray(pool)) return pool;
    const P = ph(), seen = ((P.recent ||= {})[`${id}:${kind}`] ||= []);
    const fresh = pool.map((_, i) => i).filter(i => !seen.includes(i));
    const i = (fresh.length ? fresh : pool.map((_, j) => j))[Math.floor(Math.random() * (fresh.length || pool.length))];
    seen.push(i);
    while (seen.length > Math.min(4, pool.length - 1)) seen.shift();
    return pool[i];
  }
  const isInvite = v => typeof v === 'string' && v.startsWith('invite:');
  function expireInvites() {
    const P = ph();
    Object.entries(P.pending).forEach(([thread, v]) => {
      if (!isInvite(v) || v.split(':')[2] === slotKey()) return;
      delete P.pending[thread];
      (P.log[thread] ||= []).push({ sys: 'Missed invitation', d: S.d });
    });
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
      if (isInvite(P.pending[id])) return inviteReply(id, P.pending[id].split(':')[1]);
      const pend = P.pending[id];
      const t = TEXTS.find(x => x.id === (pend?.id ?? pend));
      if (!t) return;
      offer(pend?.ask ?? t.reply, pend?.rest ?? []);
      // Solar's answer options; picking one plays the replies, then the rest of the chat until the next question.
      function offer(ask, rest) {
        replyBox.replaceChildren();
        ask.forEach(o => {
          const b = document.createElement('button');
          b.type = 'button';
          b.textContent = o.t;
          b.addEventListener('click', () => {
            replyBox.replaceChildren();
            delete P.pending[id];
            const log = P.log[id];
            log.push({ from: 'solar', t: o.t, d: S.d });
            if (o.notes) { const lp = progress(t.link); lp.notes += o.notes; if (lp.rank < (links[t.link]?.ranks.length || 10)) lp.xp = (lp.xp || 0) + o.notes; }
            save();
            body.appendChild(bubble({ from: 'solar', t: o.t }, group));
            if (o.notes) { const n = document.createElement('p'); n.className = 'ph-notes'; n.textContent = '♪'.repeat(o.notes); body.appendChild(n); F().sfx('femc-note'); }
            F().sfx('femc-text');
            body.scrollTop = body.scrollHeight;
            // Their answers arrive one at a time, with a typing indicator.
            const queue = [...(o.then || []), ...rest];
            const nextMsg = () => {
              const m = queue.shift();
              if (!m) {
                if (t.rename && !P.pending[id] && (P.names || {})[id] !== t.rename) { P.names = { ...(P.names || {}), [id]: t.rename }; save(); phoneEl.querySelector('.ph-title').textContent = threadName(id); }
                return;
              }
              if (m.ask) { P.pending[id] = { id: t.id, ask: m.ask, rest: queue }; save(); return offer(m.ask, queue); }
              if (m.sys) { log.push({ ...m, d: S.d }); save(); body.appendChild(bubble(m, group)); body.scrollTop = body.scrollHeight; return nextMsg(); }
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
    // An invitation: say yes and the hangout starts right away.
    function inviteReply(id, linkId) {
      const P = ph(), l = links[linkId];
      const body = phoneEl.querySelector('.ph-body'), replyBox = phoneEl.querySelector('.ph-reply');
      const YES = ['On my way!', 'Be there in ten.', 'Yes!! Where?', 'Say less.', 'omw 🏃‍♀️', 'Leaving now.'];
      const NO = ["Can't right now, sorry.", 'Rain check?', "Not today, I'm wiped.", 'Next time, promise.', "Ugh, I can't. Sorry!"];
      [[pickFresh('solar', 'yes', YES), true], [pickFresh('solar', 'no', NO), false]].forEach(([text, yes]) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.textContent = text;
        b.addEventListener('click', () => {
          replyBox.replaceChildren();
          delete P.pending[id];
          P.log[id].push({ from: 'solar', t: text, d: S.d });
          save();
          body.appendChild(bubble({ from: 'solar', t: text }));
          F().sfx('femc-text');
          body.scrollTop = body.scrollHeight;
          const answer = pickFresh(linkId, yes ? 'ok' : 'no', yes ? l.invite.ok : l.invite.no);
          setTimeout(() => {
            if (answer) { P.log[id].push({ from: linkId, t: answer, d: S.d }); save(); body.appendChild(bubble({ from: linkId, t: answer })); body.scrollTop = body.scrollHeight; F().sfx('femc-text'); }
            if (yes) setTimeout(() => { close(); play(l, progress(linkId).rank); }, reduced.matches ? 0 : 1100);
          }, reduced.matches ? 0 : 900);
        });
        replyBox.appendChild(b);
      });
    }
  }

  /* ── First meetings that happen to you ───────────── */
  // When someone new is free where Solar happens to be, they find her: once per link, at most once per time of day.
  let approachEl = null;
  function offerApproach(onDone) {
    if (S.free || !S.intro || approachEl || S.approachAt === slotKey() || document.querySelector('.vn, .ph')) return false;
    const l = Object.values(links).find(x => !x.hidden && x.approach && !isMet(x.id) && !S.approached.includes(x.id) && status(x).ok);
    if (!l) return false;
    approachEl = document.createElement('div');
    approachEl.className = 'vn vn-approach';
    approachEl.setAttribute('role', 'dialog');
    approachEl.setAttribute('aria-modal', 'true');
    approachEl.setAttribute('aria-label', 'Someone is waiting');
    approachEl.innerHTML = `<div class="vn-bg"></div><div class="vn-place"><b>${now().md}<small>${now().day}</small></b><span></span></div>
      <div class="vn-approach-inner"><p class="vn-approach-kicker">Someone is waiting</p><p class="vn-approach-text"></p>
      <div class="vn-choices"><button type="button" data-go><span>Go over</span></button><button type="button"><span>Not now</span></button></div></div>`;
    approachEl.querySelector('.vn-place span').textContent = `${now().time} · ${l.ranks[0].place}`;
    approachEl.querySelector('.vn-approach-text').textContent = l.approach;
    const abg = background(l.ranks[0].place, now().time), abgEl = approachEl.querySelector('.vn-bg');
    if (abg) { abgEl.style.backgroundImage = `url("${abg.url}")`; abgEl.className = `vn-bg on${abg.mood ? ` ${abg.mood}` : ''}`; }
    S.approached.push(l.id);
    S.approachAt = slotKey();
    document.body.appendChild(approachEl);
    save();
    F().sfx('femc-buzz');
    const el = approachEl;
    const close = go => {
      document.removeEventListener('keydown', key, true);
      F().sfx(go ? 'femc-click' : 'femc-back');
      el.classList.add('out');
      setTimeout(() => { el.remove(); if (approachEl === el) approachEl = null; if (go) play(l, 0, { onDone }); }, 300);
    };
    const key = e => { if (e.key === 'Escape') { e.preventDefault(); close(false); } };
    document.addEventListener('keydown', key, true);
    el.querySelectorAll('.vn-choices button').forEach(b => {
      b.addEventListener('mouseenter', () => F().sfx('femc-hover'));
      b.addEventListener('click', () => close(b.hasAttribute('data-go')));
    });
    el.querySelector('[data-go]').focus({ preventScroll: true });
    return true;
  }

  /* ── Kat's test panel (?femctest) ─────────────────── */
  function testPanel() {
    if (!new URLSearchParams(location.search).has('femctest')) return;
    const box = document.createElement('div');
    box.style.cssText = 'position:fixed;left:12px;top:12px;z-index:2147483600;width:260px;max-height:calc(100vh - 24px);overflow-y:auto;padding:12px;background:#000d;border:2px solid #8ee3b0;color:#fff;font:13px/1.5 ui-monospace,Menlo,monospace';
    // Collapsed state is remembered so the panel stays out of the way of dialogue choices.
    let hidden = false;
    try { hidden = localStorage.getItem('kg-femc-testpanel') === 'hidden'; } catch (e) {}
    const render = () => {
      const n = now();
      box.style.width = hidden ? 'auto' : '260px';
      box.style.padding = hidden ? '4px 8px' : '12px';
      if (hidden) { box.innerHTML = `<button data-a="toggle" title="Show the test panel">TEST ▸</button>`; return; }
      box.innerHTML = `<b style="color:#8ee3b0">TEST PANEL</b> <button data-a="toggle" title="Hide the test panel" style="float:right">✕ hide</button><br>${n.md} ${n.day} · ${n.time}<br>
        <label>Date <input id="tpDate" size="5" value="${n.md}"></label> <button data-a="go">Go</button><br>
        <button data-a="slot">Next slot</button> <button data-a="day">Next day</button><br>
        <label><input type="checkbox" id="tpFree" ${S.free ? 'checked' : ''}> Everyone free, no gates</label><br>
        ${Object.values(links).map(l => `${l.short}: rank <input data-rank="${l.id}" size="2" value="${progress(l.id).rank}"> ${progress(l.id).route || ''}`).join('<br>')}<br>
        <button data-a="story">Play next story event</button> <span style="color:#c99ab3">${(S.story?.seen || []).length}/${STORY.events.length} seen</span><br>
        <button data-a="reset" style="color:#ff8c8c">Reset all FEMC progress</button>`;
    };
    box.addEventListener('click', e => {
      const a = e.target.dataset?.a;
      if (a === 'toggle') { hidden = !hidden; try { localStorage.setItem('kg-femc-testpanel', hidden ? 'hidden' : 'shown'); } catch (err) {} render(); }
      if (a === 'go') { const v = box.querySelector('#tpDate').value.trim(); if (/^\d{1,2}\/\d{1,2}$/.test(v)) { S.d = Math.max(0, Math.min(END_DAY, dayOf(v))); S.slot = 0; save(); } }
      if (a === 'slot') advance();
      if (a === 'day') nextDay();
      if (a === 'reset') { S = fresh(); save(); }
      if (a === 'story') { const e = STORY.events.find(x => !storyState().seen.includes(x.id)); if (e) playEvent(e); }
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
    const L = (path, isReady) => F().load(`${path}?v=${F().v}`, isReady);   // FEMC_ASSET_VERSION in femc-mode.js
    ready = Promise.all([L('assets/femc/portraits/index.js', () => window.FEMC_PORTRAITS), L('assets/femc/portraits/scale.js', () => window.FEMC_PORTRAIT_SCALE), L('assets/femc/backgrounds.js', () => window.FEMC_BG), L('assets/femc/tarot/index.js', () => window.FEMC_TAROT), L('assets/femc/profile/index.js', () => window.FEMC_PROFILE), L('assets/femc/links/index.js', () => window.FEMC_LINK_FILES), L('assets/femc/story.js', () => STORY.acts.length), L('assets/femc/secrets/index.js', () => window.FEMC_SECRET_FILES)])
      .then(() => Promise.all((window.FEMC_SECRET_FILES || []).map(id => L(`assets/femc/secrets/${id}.js`, () => (window.FEMC_SECRETS_LOADED || []).includes(id)))))
      .then(() => Promise.all((window.FEMC_LINK_FILES || []).map(id => L(`assets/femc/links/${id}.js`, () => links[id]))))
      .then(() => { if (document.body) testPanel(); else addEventListener('DOMContentLoaded', testPanel); return links; });
    return ready;
  }

  /* ── The main story: acts and the events between them (assets/femc/story.js) ── */
  // story({ cast, acts: [{ id, numeral, title, from }], events: [{ id, act, date, slot?, unlock?, ending?, title, place, music?, scene }] })
  // `ending: true` marks the story's last event: once it's finished, status() keeps the final day open (see `after`).
  // An event plays by itself on Solar's social links once its date (and time of day, if set) arrives, one at a time,
  // in order. The first event of each act opens with that act's title card. Finished events can be replayed.
  const STORY = { acts: [], events: [] };
  function story(data) {
    Object.assign(CAST, data.cast || {});
    STORY.acts = data.acts || [];
    STORY.events = [...(data.events || []), ...STORY.events.filter(e => e.secret)];
  }
  /* ── Secrets (assets/femc/secrets.js): wrong-number texts, dated moments, group scenes, hidden places ── */
  // Each file in assets/femc/secrets/ (listed in its index.js) calls secrets({ id, cast, threads, texts, moments, places })
  //   texts: like a link's texts but on their own: { id, thread, date?, until?, slot?, unlock?, msgs, reply?, stamp? }
  //   moments: short scenes that play by themselves when due: { id, date?, slot?, unlock?, label, title, place, scene, stamp? }
  //   places: hidden Go Out spots: { id, area, title, dates: ['M/D', ...], slot?, unlock?, place, scene, stamp? }
  // `stamp` unlocks a passport stamp (defined in achievements.js) when the text arrives or the scene is finished.
  const SECRETS = { places: [] };
  function secrets(data) {
    (window.FEMC_SECRETS_LOADED ||= []).push(data.id);
    Object.assign(CAST, data.cast || {});
    Object.assign(THREADS, data.threads || {});
    (data.texts || []).forEach(t => TEXTS.push({ link: 'story', rank: 0, before: 99, days: 0, priority: !!t.date, ...t }));
    STORY.events.push(...(data.moments || []).map(m => ({ date: '4/7', ...m, secret: true })));
    SECRETS.places.push(...(data.places || []));
  }
  const stamp = id => id && F().load('achievements.js?v=15', () => window.Achievements).then(() => window.Achievements?.unlock(id));
  // Hidden places open on the Go Out map tonight, not yet visited.
  function secretPlaces() {
    const md = now().md;
    return SECRETS.places.filter(pl => !storyState().seen.includes(pl.id) && (pl.dates || []).includes(md) && (pl.slot === undefined || pl.slot === S.slot) && unlockMet(pl.unlock));
  }
  function visitPlace(id, onDone) {
    const pl = SECRETS.places.find(x => x.id === id);
    if (pl) playEvent({ ...pl, secret: true, label: pl.label || pl.area }, { onDone });
  }

  const storyState = () => (S.story ||= { seen: [], act: null });
  const storyLink = { id: 'story', name: '', short: '', arcana: '', numeral: '', ranks: [], home: { place: '', slot: 0, days: [] } };
  function dueEvent() {
    const st = storyState();
    return STORY.events.find(e => !st.seen.includes(e.id) && S.d >= dayOf(e.date) && (e.slot === undefined || e.slot === S.slot) && unlockMet(e.unlock));
  }
  function playEvent(e, opts = {}) {
    const act = e.secret ? null : STORY.acts.find(a => a.id === e.act);
    const run = () => play({ ...storyLink, ranks: [e], theme: e.theme }, 0, {
      frame: true, label: act ? `Act ${act.numeral} · ${act.title}` : (e.label || 'Story'), replay: opts.replay,
      onDone: finished => {
        if (finished && !opts.replay) { const st = storyState(); if (!st.seen.includes(e.id)) st.seen.push(e.id); if (e.ending) st.ended = true; save(); stamp(e.stamp); }
        opts.onDone?.(finished);
      }
    });
    if (act && !opts.replay && storyState().act !== act.id) { storyState().act = act.id; save(); actCard(act, run); } else run();
  }
  // A full-screen act title, P3P chapter style.
  function actCard(act, done) {
    const el = document.createElement('div');
    el.className = 'vn vn-act';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-label', `Act ${act.numeral}: ${act.title}`);
    el.innerHTML = `<div class="vn-act-inner"><p class="vn-act-num">Act ${act.numeral}</p><p class="vn-act-title"></p><p class="vn-act-date">${now().md} ${now().day}</p><p class="vn-act-hint">click to continue</p></div>`;
    el.querySelector('.vn-act-title').textContent = act.title;
    document.body.appendChild(el);
    F().sfx('femc-darkhour');
    let ready = false, gone = false;
    setTimeout(() => { ready = true; }, reduced.matches ? 0 : 1600);
    const go = () => { if (!ready || gone) return; gone = true; document.removeEventListener('keydown', key, true); el.classList.add('out'); setTimeout(() => { el.remove(); done(); }, 400); };
    const key = e => { if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') { e.preventDefault(); go(); } };
    el.addEventListener('click', go);
    document.addEventListener('keydown', key, true);
  }
  // Called after Solar's social links render: plays the next story event if one is due.
  // P3's Christmas Eve: on the evening of 12/24, if Solar is romancing anyone, she chooses who to spend it with.
  function christmasEve(onDone) {
    const st = storyState();
    if (st.christmas || now().md !== '12/24' || S.slot !== 1) return false;
    // `christmas.early: N` lets a link whose rank 9 comes after Christmas (Haechan) be chosen from rank N, before any route is set.
    const loves = Object.values(links).filter(l => !l.hidden && l.christmas && ((progress(l.id).route === 'romance' && progress(l.id).rank >= 9) || (l.christmas.early && isMet(l.id) && progress(l.id).rank >= l.christmas.early && progress(l.id).route !== 'friend')));
    if (!loves.length) return false;
    st.christmas = 'pending'; save();
    const pickScene = [
      { n: loves.length > 1 ? "Christmas Eve. Her phone had buzzed more than once that afternoon, and she had read each message twice, and now it was evening, and she could only be in one place." : "Christmas Eve, and her phone buzzed once, and she already knew who it was before she looked." },
      { choose: [...loves.map(l => ({ t: `(Spend Christmas Eve with ${l.short}.)`, then: [{ go: l.id }] })), { t: '(Spend it alone, this year.)', then: [{ n: "She turned her phone face down on the desk and watched the snow, and told herself that was a choice too." }] }] }
    ];
    play({ ...storyLink, ranks: [{ place: 'Iwatodai Dorm · Lounge', scene: pickScene }] }, 0, { frame: true, label: 'Christmas Eve', onDone: f => { st.christmas = st.christmas === 'pending' ? 'alone' : st.christmas; save(); onDone?.(f); } });
    return true;
  }

  function offerStory(onDone) {
    if (S.free || !S.intro || document.querySelector('.vn, .ph')) return false;
    if (christmasEve(onDone)) return true;
    const e = dueEvent();
    if (!e) return false;
    playEvent(e, { onDone });
    return true;
  }
  const storySeen = () => STORY.events.filter(e => storyState().seen.includes(e.id));

  // Elizabeth's Velvet Room opening, shown the first time Solar opens her social links.
  function playIntro(onDone) {
    const l = links.elizabeth;
    if (!l || S.intro) return false;
    play(l, 0, { frame: true, onDone: () => { S.intro = true; save(); onDone?.(); } });
    return true;
  }
  return { secrets, secretPlaces, visitPlace, story, offerStory, playEvent, storySeen, storyActs: () => STORY.acts, storyEvents: () => STORY.events, profile, tarot, background, areaBackground, need, playIntro, offerApproach, define, load, links, now, advance, nextDay, status, freeNow, progress, isMet, nameFor, portrait, play, register, onChange, dayOf, state: () => S, DAYS, openPhone, unread };
})();
