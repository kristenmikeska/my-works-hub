/* FEMC battle prototype: screens, battle UI, menus, save and Haenim's skill tree.
   Rules live in engine.js, content in data.js, Shadow SVGs and icons in shadows.js.
   Save: localStorage 'kg-femc-battle-proto' only (never the main game's kg-femc-game).
   Test hooks: ?seed=N (repeatable fights), ?speed=N (animation speed), window.FemcBattle (state + freeze for screenshots). */
(() => {
  const D = window.FEMC_BATTLE_DATA, E = window.FemcBattleEngine, ART = window.FemcBattleArt, FX = window.FemcFX;
  const KEY = 'kg-femc-battle-proto';
  const params = new URLSearchParams(location.search);
  const app = document.getElementById('bt-app');
  const root = document.documentElement;
  const rand = params.has('seed') ? E.rng(+params.get('seed') || 1) : Math.random;
  const testSpeed = +params.get('speed') || 0;
  const V = () => (window.FemcMode && window.FemcMode.v) || 1;
  const pimg = (id, face) => `${D.portraits}${id}/${face}.webp?v=${V()}`;
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const member = mid => D.party.find(m => m.id === mid);
  const phone = () => matchMedia('(max-width: 760px)').matches;
  const pickOne = a => Array.isArray(a) ? a[Math.floor(Math.random() * a.length)] : a;
  const SHADOW_DIR = 'assets/femc/battle/art/shadows/';
  const FINISH_DIR = 'assets/femc/battle/art/finish/', SUMMON_DIR = 'assets/femc/battle/art/summon/';
  const AWAKEN = ['solar-01-resolve', 'solar-02-focus', 'solar-03-awakening', 'solar-04-manifestation', 'solar-05-command', 'solar-06-summoned'];
  /* A stylized Evoker for members without their own Evoker art (muzzle on the left, at the temple). */
  const EVOKER_SVG = 'data:image/svg+xml,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 110"><defs><linearGradient id="m" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f7f9ff"/><stop offset=".35" stop-color="#c9d0dc"/><stop offset=".7" stop-color="#8a93a6"/><stop offset="1" stop-color="#4b5263"/></linearGradient><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3a404e"/><stop offset="1" stop-color="#14171f"/></linearGradient></defs><path d="M214 30H70l-10 5v22h34l6 7h20l7-7h87z" fill="url(#m)" stroke="#12151c" stroke-width="3" stroke-linejoin="round"/><path d="M214 30v27" stroke="#12151c" stroke-width="5"/><path d="M78 36h126" stroke="#fff" stroke-opacity=".85" stroke-width="2"/><path d="M84 44h120M84 50h120" stroke="#5a6274" stroke-width="1.2"/><path d="M62 57h32l-16 48H38z" fill="url(#g)" stroke="#0b0d12" stroke-width="3" stroke-linejoin="round"/><path d="M50 70h30M46 80h30M42 90h30" stroke="#5a6274" stroke-width="1.5"/><path d="M98 57q-2 18 16 18h6" fill="none" stroke="#12151c" stroke-width="4"/><path d="M104 60l4 10" stroke="#12151c" stroke-width="3"/><rect x="150" y="40" width="40" height="4" rx="1" fill="#ff4f9e"/></svg>`);
  const tacticOf = u => (u.mid === 'solar' ? 'direct' : (save.tactics[u.mid] || 'direct'));
  const AFF_SHORT = { normal: '–', weak: 'WK', resist: 'RS', null: 'NU', drain: 'DR', repel: 'RP' };
  const AFF_WORD = { weak: 'WEAK!', resist: 'RESIST', null: 'NULL', drain: 'DRAIN', repel: 'REPEL' };
  const STAT_SHORT = { atk: 'ATK', def: 'DEF', agi: 'AGI' };

  /* ── Save ─────────────────────────────────────────── */
  // reached: the furthest floor (index into D.floors) Solar has made it to, like P3's access points.
  // v2 adds: party (up to 3 ids beside Solar), mem (each member's own level and EXP), tactics, cutins, awakened.
  const fresh = () => ({ v: 2, lvl: D.progression.startLevel, exp: 0, pts: 0, nodes: [], known: {}, clears: 0, runs: 0, reached: 0, music: null, sfx: true, speed: 1,
    party: D.defaultParty.slice(), mem: {}, tactics: {}, cutins: 'first', awakened: false });
  /* Fills in anything missing, so v1 saves (and hand-edited ones) load cleanly. Members who were already fighting
     keep Solar's level; new recruits join one level behind her. */
  function normalize(s) {
    s.v = 2;
    if (!Array.isArray(s.party)) s.party = D.defaultParty.slice();
    s.party = [...new Set(s.party)].filter(id => id !== 'solar' && member(id)).slice(0, 3);
    if (!s.mem || typeof s.mem !== 'object') s.mem = {};
    D.party.forEach(m => {
      if (m.id === 'solar') return;
      const e = s.mem[m.id];
      if (!e || !(e.lvl >= 1)) s.mem[m.id] = { lvl: D.defaultParty.includes(m.id) ? s.lvl : Math.max(D.progression.startLevel, s.lvl - 1), exp: 0 };
      else if (!(e.exp >= 0)) e.exp = 0;
    });
    if (!s.tactics || typeof s.tactics !== 'object') s.tactics = {};
    Object.keys(s.tactics).forEach(k => { if (!D.tactics[s.tactics[k]]) delete s.tactics[k]; });
    if (!['always', 'first', 'off'].includes(s.cutins)) s.cutins = 'first';
    return s;
  }
  function loadSave() {
    try { const s = JSON.parse(localStorage.getItem(KEY) || 'null'); if (s && (s.v === 1 || s.v === 2)) return normalize(Object.assign(fresh(), s)); } catch (e) {}
    return normalize(fresh());
  }
  let save = loadSave();
  const persist = () => { try { localStorage.setItem(KEY, JSON.stringify(save)); } catch (e) {} };
  const lsGet = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const femcMusicWanted = () => { try { return (JSON.parse(lsGet('kg-femc-bgm') || '{}') || {}).on !== false; } catch (e) { return true; } };
  const musicOn = () => (save.music == null ? femcMusicWanted() : save.music);
  const sfxOn = () => save.sfx !== false && lsGet('kg-femc-sound') !== 'off';
  const speed = () => testSpeed || save.speed || 1;

  /* ── Timing, freeze (for screenshots) and marks (for tests) ── */
  let frozen = false;
  const marks = {};
  function mark(name) { marks[name] = (marks[name] || 0) + 1; const f = window.__btFreezeAt; if (f === name || f === `${name}#${marks[name]}`) frozen = true; }
  const sleep = ms => new Promise(r => setTimeout(function go() { if (!frozen) r(); }, ms / speed()));

  /* ── Music: one track per screen (data.music); "off" keeps the track muted so FEMC's own BGM stays paused here too ── */
  const music = (() => {
    const VOL = 0.42, pool = {}, fades = new Map();
    let cur = null, key = null, pending = false;
    const get = src => pool[src] || (pool[src] = Object.assign(new Audio(src), { loop: true, preload: 'auto' }));
    function fade(a, to, ms, done) {
      clearInterval(fades.get(a));
      const step = (to - a.volume) / Math.max(1, ms / 40);
      fades.set(a, setInterval(() => {
        const v = a.volume + step;
        if ((step >= 0 && v >= to) || (step < 0 && v <= to)) { a.volume = Math.max(0, Math.min(1, to)); clearInterval(fades.get(a)); done && done(); }
        else a.volume = Math.max(0, Math.min(1, v));
      }, 40));
    }
    function play(k, { restart = false } = {}) {
      key = k;
      const src = k && D.music[k];
      if (!src) { stop(); return; }
      const a = get(src);
      a.muted = !musicOn();
      if (cur && cur !== a) { const old = cur; fade(old, 0, 450, () => old.pause()); }
      if (cur === a && !a.paused) return;
      cur = a;
      if (restart) { try { a.currentTime = 0; } catch (e) {} }
      a.volume = 0;
      const p = a.play();
      const ok = () => { pending = false; fade(a, VOL, 700); };
      if (p && p.then) p.then(ok).catch(() => { pending = true; }); else ok();
    }
    function stop() { if (cur) { const old = cur; fade(old, 0, 400, () => old.pause()); cur = null; } }
    const retry = () => { if (pending && key) { const k = key; key = null; cur = null; play(k); } };
    addEventListener('pointerdown', retry, true);
    addEventListener('keydown', retry, true);
    return { play, stop, refresh: () => { if (cur) cur.muted = !musicOn(); else if (key) play(key); }, key: () => key };
  })();

  /* ── Sound effects: FEMC's menu sounds when available, otherwise small Web Audio synths ── */
  const sfx = (() => {
    let ctx = null;
    const ac = () => {
      if (!ctx) { const C = window.AudioContext || window.webkitAudioContext; if (!C) return null; try { ctx = new C(); } catch (e) { return null; } }
      if (ctx.state === 'suspended') ctx.resume().catch(() => {});
      return ctx;
    };
    function tone(f, d, { type = 'square', v = 0.05, to = null, at = 0 } = {}) {
      const c = ac(); if (!c) return;
      const t = c.currentTime + at, o = c.createOscillator(), g = c.createGain();
      o.type = type; o.frequency.setValueAtTime(f, t); if (to) o.frequency.exponentialRampToValueAtTime(to, t + d);
      g.gain.setValueAtTime(v, t); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
      o.connect(g).connect(c.destination); o.start(t); o.stop(t + d + 0.03);
    }
    function noise(d, { v = 0.2, f = 1200, q = 0.8, at = 0, type = 'bandpass' } = {}) {
      const c = ac(); if (!c) return;
      const t = c.currentTime + at, n = Math.floor(c.sampleRate * d), b = c.createBuffer(1, n, c.sampleRate), ch = b.getChannelData(0);
      for (let i = 0; i < n; i++) ch[i] = (Math.random() * 2 - 1) * (1 - i / n);
      const s = c.createBufferSource(), fl = c.createBiquadFilter(), g = c.createGain();
      s.buffer = b; fl.type = type; fl.frequency.value = f; fl.Q.value = q; g.gain.value = v;
      s.connect(fl).connect(g).connect(c.destination); s.start(t);
    }
    const femc = name => { if (window.FemcMode && window.FemcMode.sfx) { window.FemcMode.sfx(name); return true; } return false; };
    const S = {
      move: () => femc('femc-hover') || tone(1300, 0.035, { v: 0.025 }),
      ok: () => femc('femc-click') || tone(880, 0.08, { v: 0.04, to: 1320 }),
      back: () => femc('femc-back') || tone(700, 0.09, { v: 0.04, to: 420 }),
      hit: () => { noise(0.14, { v: 0.35, f: 900 }); tone(120, 0.18, { type: 'sine', v: 0.3, to: 45 }); },
      weak: () => { S.hit(); tone(1500, 0.14, { type: 'triangle', v: 0.08, to: 2300, at: 0.03 }); },
      crit: () => { noise(0.24, { v: 0.45, f: 2400, q: 0.5 }); tone(70, 0.32, { type: 'sine', v: 0.4, to: 30 }); tone(2100, 0.16, { type: 'sawtooth', v: 0.035, to: 900 }); },
      fire: () => noise(0.35, { v: 0.3, f: 500, q: 0.5 }),
      ice: () => { tone(2600, 0.25, { type: 'triangle', v: 0.05, to: 3600 }); tone(3200, 0.2, { type: 'triangle', v: 0.03, at: 0.06 }); },
      elec: () => { tone(1800, 0.22, { type: 'sawtooth', v: 0.04, to: 200 }); noise(0.15, { v: 0.15, f: 4000 }); },
      wind: () => noise(0.4, { v: 0.25, f: 2600, q: 0.3 }),
      light: () => { tone(1100, 0.3, { type: 'triangle', v: 0.06, to: 2400 }); tone(1650, 0.3, { type: 'sine', v: 0.04, at: 0.05, to: 3200 }); },
      almighty: () => { noise(0.6, { v: 0.4, f: 300, q: 0.4 }); tone(60, 0.6, { type: 'sine', v: 0.4, to: 25 }); },
      heal: () => { tone(660, 0.15, { type: 'triangle', v: 0.06, to: 990 }); tone(990, 0.22, { type: 'triangle', v: 0.05, at: 0.1, to: 1320 }); },
      buff: () => { [523, 659, 784].forEach((f, i) => tone(f, 0.12, { type: 'triangle', v: 0.05, at: i * 0.06 })); },
      down: () => tone(220, 0.25, { type: 'square', v: 0.05, to: 80 }),
      miss: () => tone(420, 0.12, { type: 'sine', v: 0.05, to: 300 }),
      onemore: () => { tone(880, 0.08, { v: 0.05 }); tone(1320, 0.16, { v: 0.05, at: 0.08 }); },
      summon: () => { tone(220, 0.6, { type: 'sawtooth', v: 0.03, to: 880 }); noise(0.5, { v: 0.1, f: 4000, q: 0.3 }); },
      allout: () => { noise(1.1, { v: 0.32, f: 500, q: 0.4 }); [0, 0.18, 0.36, 0.54, 0.72].forEach(at => { noise(0.1, { v: 0.4, f: 900, at }); tone(110, 0.12, { type: 'sine', v: 0.3, to: 50, at }); }); },
      ko: () => tone(300, 0.6, { type: 'sawtooth', v: 0.05, to: 60 }),
      guard: () => tone(320, 0.14, { type: 'square', v: 0.04, to: 360 }),
      level: () => [523, 659, 784, 1046].forEach((f, i) => tone(f, 0.18, { type: 'triangle', v: 0.06, at: i * 0.09 })),
      unlock: () => [784, 988, 1175, 1568].forEach((f, i) => tone(f, 0.22, { type: 'triangle', v: 0.06, at: i * 0.07 })),
      escape: () => noise(0.5, { v: 0.2, f: 1800, q: 0.4 }),
      // The Evoker: a dry gunshot crack, a low thump, then glass.
      evoker: () => {
        noise(0.045, { v: 1, f: 2500, q: 0.3, type: 'highpass' });
        tone(110, 0.25, { type: 'sine', v: 0.55, to: 34 });
        noise(0.4, { v: 0.16, f: 1400, q: 0.5, at: 0.02 });
        [0.06, 0.1, 0.15, 0.21, 0.28, 0.36, 0.45].forEach((at, i) => tone(3200 + ((i * 1777) % 3100), 0.07, { type: 'triangle', v: 0.03, at, to: 2600 + ((i * 911) % 2000) }));
        noise(0.5, { v: 0.07, f: 6000, q: 0.7, at: 0.05 });
      },
      click: () => { tone(2400, 0.02, { type: 'square', v: 0.03 }); tone(1600, 0.03, { type: 'square', v: 0.025, at: 0.03 }); },
      ail: () => { tone(520, 0.18, { type: 'sine', v: 0.05, to: 340 }); tone(780, 0.14, { type: 'triangle', v: 0.03, at: 0.05, to: 520 }); },
      cure: () => [880, 1175, 1568].forEach((f, i) => tone(f, 0.14, { type: 'sine', v: 0.05, at: i * 0.05 })),
      shatter: () => { noise(0.3, { v: 0.3, f: 5000, q: 0.5 }); [0, 0.05, 0.11].forEach(at => tone(4200, 0.05, { type: 'triangle', v: 0.04, at })); },
      dissolve: () => noise(0.7, { v: 0.12, f: 700, q: 0.4 })
    };
    return name => { if (!sfxOn() || !S[name]) return; try { S[name](); } catch (e) {} };
  })();

  /* ── Party, levels and Haenim's tree ──────────────── */
  const need = lvl => D.progression.expToNext(lvl);
  function treeFx(nodes = save.nodes) {
    const fx = { st: 0, ag: 0, hp: 0, sp: 0, mods: {}, learn: [], upgrade: [], healMult: 1, openBuff: null, autoAnalyze: false };
    D.tree.forEach(b => b.nodes.forEach(n => {
      if (!nodes.includes(n.id)) return;
      const e = n.effect;
      ['st', 'ag', 'hp', 'sp'].forEach(k => { if (e[k]) fx[k] += e[k]; });
      if (e.healMult) fx.healMult *= e.healMult;
      if (e.learn) fx.learn.push(e.learn);
      if (e.upgrade) fx.upgrade.push(e.upgrade);
      ['crit', 'bind', 'ropeCrit'].forEach(k => { if (e[k]) fx.mods[k] = (fx.mods[k] || 0) + e[k]; });
      ['weakMult', 'shiftMult', 'alloutMult', 'regen', 'shiftSp'].forEach(k => { if (e[k]) fx.mods[k] = e[k]; });
      if (e.autoAnalyze) fx.autoAnalyze = true;
      if (e.openBuff) fx.openBuff = e.openBuff;
    }));
    return fx;
  }
  function memberStats(m, lvl, fx) {
    const L = lvl - D.progression.startLevel, s = {};
    Object.keys(m.base).forEach(k => { s[k] = Math.round(m.base[k] + m.growth[k] * L); });
    if (m.id === 'solar') { s.st += fx.st; s.ag += fx.ag; s.hp += fx.hp; s.sp += fx.sp; }
    return s;
  }
  function solarSkills(fx) {
    let list = D.party[0].skills.concat(fx.learn);
    fx.upgrade.forEach(([a, b]) => { list = list.map(x => (x === a ? b : x)); });
    return [...new Set(list)];
  }
  /* Each member's own level (Solar's is the save's). */
  const lvOf = id => (id === 'solar' ? save.lvl : ((save.mem[id] || {}).lvl || save.lvl));
  const roster = () => [D.party[0]].concat(save.party.map(member).filter(Boolean));
  function buildParty(carry) {
    const fx = treeFx();
    return roster().map(m => {
      const L = lvOf(m.id), s = memberStats(m, L, fx), per = D.personas[m.persona], c = carry && carry[m.id];
      return {
        mid: m.id, name: m.name, persona: per.name, personaId: m.persona, lvl: L, maxHp: s.hp, maxSp: s.sp, acc: m.acc || 0,
        hp: c ? Math.max(1, Math.min(c.hp, s.hp)) : s.hp, sp: c ? Math.min(c.sp, s.sp) : s.sp,
        st: s.st, ma: s.ma, en: s.en, ag: s.ag, lu: s.lu, aff: Object.assign({}, per.aff), weapon: m.weapon,
        skills: m.id === 'solar' ? solarSkills(fx) : m.skills.slice(), healMult: m.id === 'solar' ? fx.healMult : 1
      };
    });
  }
  const nodeState = n => {
    if (save.nodes.includes(n.id)) return 'own';
    const b = D.tree.find(x => x.nodes.includes(n)), i = b.nodes.indexOf(n);
    return i === 0 || save.nodes.includes(b.nodes[i - 1].id) ? 'avail' : 'lock';
  };

  /* ── Keyboard / pointer controller ────────────────── */
  let ctl = null, screen = 'boot';
  document.addEventListener('keydown', e => {
    if (e.metaKey || e.ctrlKey || e.altKey || !ctl) return;
    const k = e.key;
    if (ctl.key && ctl.key(e)) { e.preventDefault(); return; }
    const g = ctl.grid || 1;
    if (k === 'ArrowUp') { e.preventDefault(); ctl.move(-g); }
    else if (k === 'ArrowDown') { e.preventDefault(); ctl.move(g); }
    else if (k === 'ArrowLeft') { e.preventDefault(); ctl.move(-1); }
    else if (k === 'ArrowRight') { e.preventDefault(); ctl.move(1); }
    else if (k === 'Enter' || k === ' ' || k === 'z' || k === 'Z') { e.preventDefault(); ctl.pick(); }
    else if (k === 'Escape' || k === 'Backspace' || k === 'x' || k === 'X') { e.preventDefault(); if (ctl.back) ctl.back(); }
  });
  /* Arrow/Enter navigation over a screen's .bt-btn buttons. */
  function buttonNav(container, { back = null, start = 0 } = {}) {
    const btns = [...container.querySelectorAll('.bt-btn:not(:disabled)')];
    let i = Math.min(start, btns.length - 1);
    const show = () => { btns.forEach((b, j) => b.classList.toggle('on', j === i)); if (btns[i]) btns[i].focus({ preventScroll: true }); };
    btns.forEach((b, j) => b.addEventListener('pointerenter', () => { i = j; show(); }));
    ctl = { kind: 'buttons', move(d) { if (!btns.length) return; i = (i + d + btns.length) % btns.length; sfx('move'); show(); }, pick() { if (btns[i]) btns[i].click(); }, back };
    show();
  }
  const CUT_LABEL = { always: 'Always', first: '1st only', off: 'Off' };
  const tools = () => `<button type="button" class="bt-tool" data-tool="cut" title="Persona cut-ins: always, the first time per battle, or off"><span>Cut-ins<em>:</em> ${CUT_LABEL[save.cutins]}</span></button><button type="button" class="bt-tool" data-tool="music" aria-pressed="${musicOn()}" title="Music" aria-label="Music"><span>♪<em> Music</em></span></button><button type="button" class="bt-tool" data-tool="sfx" aria-pressed="${save.sfx !== false}" title="Sound effects"><span>SFX</span></button>`;
  function wireTools(el) {
    el.querySelectorAll('[data-tool]').forEach(b => b.addEventListener('click', () => {
      const t = b.dataset.tool;
      if (t === 'music') { save.music = !musicOn(); music.refresh(); b.setAttribute('aria-pressed', String(musicOn())); }
      if (t === 'sfx') { save.sfx = save.sfx === false; b.setAttribute('aria-pressed', String(save.sfx)); sfx('ok'); }
      if (t === 'cut') { const o = ['always', 'first', 'off']; save.cutins = o[(o.indexOf(save.cutins) + 1) % 3]; b.querySelector('span').innerHTML = `Cut-ins<em>:</em> ${CUT_LABEL[save.cutins]}`; sfx('move'); mark('cutins-' + save.cutins); }
      if (t === 'speed') { save.speed = save.speed === 2 ? 1 : 2; b.querySelector('span').textContent = `▶▶ ${save.speed}x`; }
      persist();
      b.blur();
    }));
  }
  const show = (html, cls) => {
    if (FX) FX.detach();
    // The FEMC badge (bottom-left) stays on the entrance screen; elsewhere this page's own corners are busy.
    root.classList.toggle('bt-in-battle', !/bt-hub/.test(cls));
    app.innerHTML = `<div class="bt-screen ${cls}" data-femc-quiet>${html}</div>`;
    return app.firstElementChild;
  };

  /* ════════════════════════════════════════════════════
     HUB
     ════════════════════════════════════════════════════ */
  let resetArmed = false;
  function hub() {
    screen = 'hub';
    root.classList.remove('bt-in-battle');
    music.play('title');
    const fx = treeFx(), m = D.party[0], s = memberStats(m, save.lvl, fx), skills = solarSkills(fx);
    const pct = Math.round(save.exp / need(save.lvl) * 100);
    const el = show(`<div class="bt-hub-copy">
        <p class="bt-kicker">FEMC · Battle prototype</p>
        <h1>TARTARUS<small>Full Moon Operation</small></h1>
        <div class="bt-hub-menu">
          ${save.reached > 0 && save.reached < D.floors.length ? `<button type="button" class="bt-btn pink" data-go="cont"><span>Continue from ${esc(D.floors[save.reached].label)}</span><small>Access point · ${esc(D.floors[save.reached].block)}</small></button>` : ''}
          <button type="button" class="bt-btn${save.reached > 0 && save.reached < D.floors.length ? '' : ' pink'}" data-go="run"><span>${save.reached > 0 && save.reached < D.floors.length ? 'Start from the bottom' : 'Enter Tartarus'}</span><small>${save.clears ? `Cleared ×${save.clears}` : `${D.floors.length} floors`}</small></button>
          <button type="button" class="bt-btn" data-go="party"><span>Party</span><small>${save.party.length + 1} / 4</small></button>
          <button type="button" class="bt-btn" data-go="tree"><span>Haenim’s Tree</span><small>${save.pts} SP</small></button>
          <button type="button" class="bt-btn" data-go="personas"><span>Personas</span><small>S.E.E.S.</small></button>
          <button type="button" class="bt-btn danger" data-go="reset"><span>${resetArmed ? 'Really reset? Press again' : 'Reset battle save'}</span></button>
        </div>
        <p class="bt-hub-hint">↑↓←→ move · Enter choose · Esc back · mouse and touch work too</p>
      </div>
      <div class="bt-solar">
        <div class="bt-solar-art"><img src="${pimg('solar', 'serious')}" alt=""></div>
        <div>
          <h2>Solar<small>Lv ${save.lvl}</small></h2>
          <p class="persona">Persona · Haenim · 해님</p>
          <div class="bt-expbar"><i style="width:${pct}%"></i></div>
          <div class="bt-explabel"><span>EXP ${save.exp} / ${need(save.lvl)}</span><span>${save.pts} skill pts</span></div>
          <div class="bt-stats">${['hp', 'sp', 'st', 'ma', 'en', 'ag', 'lu'].map(k => `<div><span>${k.toUpperCase()}</span><b>${s[k]}</b></div>`).join('')}</div>
          <ul class="bt-chips">${skills.map(id => `<li>${ART.icon(D.skills[id].el)}<span>${esc(D.skills[id].name)}</span></li>`).join('')}</ul>
          <div class="bt-hub-party" aria-label="Party">${roster().slice(1).map(m => `<span title="${esc(m.name)}"><img src="${pimg(m.id, m.faces.idle)}" alt="" style="--fx:${m.face[0]}%;--fy:${m.face[1]}%"><b>${esc(m.name)}<small>Lv ${lvOf(m.id)}${tacticOf({ mid: m.id }) !== 'direct' ? ` · ${esc(D.tactics[tacticOf({ mid: m.id })].short)}` : ''}</small></b></span>`).join('') || '<em>Solar fights alone</em>'}</div>
          <p class="bt-meta">${save.runs} run${save.runs === 1 ? '' : 's'} · full moon cleared ${save.clears}×${save.clears ? ' · Shadows grow stronger each clear' : ''}</p>
        </div>
      </div>
      <div class="bt-top" style="justify-content:flex-end"><a class="bt-tool" href="social.html"><span>‹ Back to the game</span></a><div class="bt-tools" style="margin-left:8px">${tools()}</div></div>`, 'bt-hub');
    wireTools(el);
    el.querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', () => {
      const go = b.dataset.go;
      if (go !== 'reset') resetArmed = false;
      if (go === 'run') { sfx('ok'); startRun(0); }
      else if (go === 'cont') { sfx('ok'); startRun(save.reached); }
      else if (go === 'tree') { sfx('ok'); treeScreen(hub); }
      else if (go === 'party') { sfx('ok'); partyScreen(hub); }
      else if (go === 'personas') { sfx('ok'); personaScreen(hub); }
      else if (go === 'reset') {
        if (!resetArmed) { resetArmed = true; sfx('move'); hub(); ctlFocus('[data-go="reset"]'); return; }
        resetArmed = false;
        try { localStorage.removeItem(KEY); } catch (e) {}
        save = fresh();
        sfx('back');
        hub();
      }
    }));
    buttonNav(el);
    mark('hub');
  }
  function ctlFocus(sel) { const b = app.querySelector(sel); if (!b || !ctl) return; for (let i = 0; i < 8; i++) { if (document.activeElement === b) break; ctl.move(1); } }

  /* ════════════════════════════════════════════════════
     PARTY: Solar plus up to three, each with a Tactic
     ════════════════════════════════════════════════════ */
  const TACTIC_ORDER = Object.keys(D.tactics);
  const affChips = per => D.affinityOrder.filter(x => per.aff[x]).map(x => `<span class="bt-aff ${per.aff[x]}">${ART.icon(x)}<em>${AFF_SHORT[per.aff[x]]}</em></span>`).join('') || '<span class="bt-aff"><em>–</em></span>';
  function partyScreen(onClose) {
    screen = 'party';
    root.classList.remove('bt-in-battle');
    const list = D.party.slice(1);
    let i = 0, msg = '';
    const cols = () => (phone() ? 2 : 4);
    const render = () => {
      const solar = D.party[0];
      const card = (m, k) => {
        const per = D.personas[m.persona], slot = save.party.indexOf(m.id), tac = save.tactics[m.id] || 'direct';
        return `<div class="bt-pm${slot >= 0 ? ' in' : ''}${k === i ? ' sel' : ''}" data-k="${k}" style="--c:${m.color}">
          <button type="button" class="bt-pm-main" data-act="toggle" data-id="${m.id}" aria-pressed="${slot >= 0}">
            <span class="pic"><img src="${pimg(m.id, m.faces.idle)}" alt="" style="--fx:${m.face[0]}%;--fy:${m.face[1]}%"></span>
            <span class="info"><b>${esc(m.name)}<small>Lv ${lvOf(m.id)}</small></b><span class="per-n">${esc(per.name)} · ${esc(per.arcana)}</span><span class="role">${esc(m.role || '')}</span><span class="bt-affs">${affChips(per)}</span></span>
            <span class="per-art"><img src="${per.art}" alt="${esc(per.name)}"></span>
            <span class="slot">${slot >= 0 ? `IN · ${slot + 2}` : 'Bench'}</span>
          </button>
          <button type="button" class="bt-pm-tac" data-act="tac" data-id="${m.id}" title="${esc(D.tactics[tac].desc)}">${ART.icon('tactics')}<span>${esc(D.tactics[tac].name)}</span></button>
        </div>`;
      };
      const sp = D.personas.haenim;
      const el = show(`<div class="bt-tree-head"><button type="button" class="bt-tool" data-act="back"><span>‹ Back</span></button>
          <h1>PARTY<small>S.E.E.S.</small></h1><div class="bt-pts"><span><small>Members</small>${save.party.length + 1} / 4</span></div></div>
        <div class="bt-party-grid">
          <div class="bt-pm in leader" style="--c:${solar.color}"><div class="bt-pm-main"><span class="pic"><img src="${pimg('solar', 'serious')}" alt="" style="--fx:${solar.face[0]}%;--fy:${solar.face[1]}%"></span>
            <span class="info"><b>Solar<small>Lv ${save.lvl}</small></b><span class="per-n">Haenim · Fool</span><span class="role">${esc(solar.role)}</span><span class="bt-affs">${affChips(sp)}</span></span><span class="per-art"><img src="${sp.art}" alt="Haenim"></span><span class="slot">Leader · 1</span></div>
            <div class="bt-pm-tac fixed">${ART.icon('tactics')}<span>Always Direct</span></div></div>
          ${list.map(card).join('')}
        </div>
        <div class="bt-party-foot"><p>${msg ? `<b>${esc(msg)}</b>` : `<b>Pick up to 3.</b>`} Members on the bench still earn ${Math.round(D.progression.benchShare * 100)}% of the EXP.<span> Tactics: Direct lets you choose; the others act on their own. Enter picks, T changes tactic.</span></p>
          <button type="button" class="bt-btn pink" data-act="done"><span>Done</span></button></div>`, 'bt-tree bt-partyscr');
      el.querySelectorAll('[data-act="toggle"]').forEach(b => b.addEventListener('click', () => { i = list.findIndex(m => m.id === b.dataset.id); toggle(); }));
      el.querySelectorAll('[data-act="tac"]').forEach(b => b.addEventListener('click', () => { i = list.findIndex(m => m.id === b.dataset.id); cycle(); }));
      el.querySelector('[data-act="back"]').addEventListener('click', close);
      el.querySelector('[data-act="done"]').addEventListener('click', close);
      ctl = {
        kind: 'party',
        key(e) { if (e.key === 't' || e.key === 'T' || e.key === 'Tab') { cycle(); return true; } return false; },
        move(d) { i = (i + d + list.length) % list.length; sfx('move'); msg = ''; render(); },
        grid: cols(), pick: toggle, back: close
      };
      const sel = el.querySelector('.bt-pm.sel'); if (sel && sel.scrollIntoView) sel.scrollIntoView({ block: 'nearest' });
      mark('party');
    };
    function toggle() {
      const id = list[i].id, at = save.party.indexOf(id);
      if (at >= 0) { save.party.splice(at, 1); sfx('back'); msg = ''; }
      else if (save.party.length >= 3) { sfx('back'); msg = 'The party is full. Bench someone first.'; }
      else { save.party.push(id); sfx('ok'); msg = ''; mark('party-add'); }
      persist(); render();
    }
    function cycle() {
      const id = list[i].id, cur = save.tactics[id] || 'direct', nx = TACTIC_ORDER[(TACTIC_ORDER.indexOf(cur) + 1) % TACTIC_ORDER.length];
      if (nx === 'direct') delete save.tactics[id]; else save.tactics[id] = nx;
      persist(); sfx('move'); mark('tactic-set'); render();
    }
    function close() { sfx('back'); ctl = null; onClose(); }
    render();
  }

  /* ════════════════════════════════════════════════════
     RUN FLOW
     ════════════════════════════════════════════════════ */
  let run = null;
  async function startRun(from = 0) {
    run = { floor: from, carry: null, items: Object.assign({}, D.startItems), clocked: false, groups: {} };
    save.runs++;
    persist();
    while (run.floor < D.floors.length) {
      const f = D.floors[run.floor];
      if (f.clock && !run.clocked) { await clockScreen(); run.carry = null; run.clocked = true; }
      const snap = JSON.stringify({ carry: run.carry, items: run.items });
      const out = await battle(f);
      if (out.result === 'win') {
        const go = await results(f, out);
        run.floor++;
        if (run.floor < D.floors.length) { save.reached = Math.max(save.reached, run.floor); persist(); }
        if (go === 'leave') { hub(); return; }
      }
      else if (out.result === 'escaped') { await message('ESCAPED', 'You slipped past the Shadows. No EXP this floor.'); run.floor++; if (run.floor < D.floors.length) { save.reached = Math.max(save.reached, run.floor); persist(); } }
      else {
        const choice = await gameOver();
        if (choice === 'retry') { const s = JSON.parse(snap); run.carry = s.carry; run.items = s.items; continue; }
        hub(); return;
      }
    }
    save.reached = 0; persist();
    await complete();
    hub();
  }

  function message(title, text) {
    screen = 'message';
    root.classList.remove('bt-in-battle');
    return new Promise(res => {
      const el = show(`<div><h1>${esc(title)}</h1><p>${esc(text)}</p><div class="row"><button type="button" class="bt-btn pink"><span>Continue</span></button></div></div>`, 'bt-over');
      el.querySelector('button').addEventListener('click', () => { sfx('ok'); res(); });
      buttonNav(el);
    });
  }
  function clockScreen() {
    screen = 'clock';
    music.play('floor');
    return new Promise(res => {
      const el = show(`<div><p class="bt-kicker">Before the full moon</p><h1>THE CLOCK</h1><p>A clock chimes somewhere in the dark. Everyone’s HP and SP are fully restored.</p>
        <div class="bt-navline"><div class="bt-nav" style="position:relative;top:auto;right:auto;margin:18px auto 0"><div class="pic"><img src="${pimg('fuuka', 'happy')}" alt=""></div><p><b>Fuuka</b>${esc(D.nav.clock[0])}</p></div></div>
        <div class="row"><button type="button" class="bt-btn pink"><span>To the full moon ›</span></button></div></div>`, 'bt-over');
      el.querySelector('button').addEventListener('click', () => { sfx('ok'); res(); });
      buttonNav(el);
      mark('clock');
    });
  }
  function gameOver() {
    screen = 'over';
    root.classList.remove('bt-in-battle');
    music.play(D.music.gameover ? 'gameover' : null);
    return new Promise(res => {
      const el = show(`<div><p class="bt-kicker">Solar has fallen</p><h1>GAME OVER</h1><p>The Dark Hour closes over S.E.E.S. … but the clock can turn back.</p>
        <div class="row"><button type="button" class="bt-btn pink" data-v="retry"><span>Retry floor</span></button><button type="button" class="bt-btn" data-v="hub"><span>Return to the entrance</span></button></div></div>`, 'bt-over');
      el.querySelectorAll('[data-v]').forEach(b => b.addEventListener('click', () => { sfx('ok'); res(b.dataset.v); }));
      buttonNav(el);
      mark('gameover');
    });
  }
  function complete() {
    screen = 'complete';
    root.classList.remove('bt-in-battle');
    music.play('victory');
    return new Promise(res => {
      const el = show(`<div><p class="bt-kicker">Full moon · cleared ×${save.clears}</p><h1>OPERATION<br>COMPLETE</h1><p>The Priestess is gone and the moon is quiet. Tartarus will be harder next time.</p>
        <div class="row"><button type="button" class="bt-btn pink"><span>Return to the entrance</span></button></div></div>`, 'bt-over bt-complete');
      el.querySelector('button').addEventListener('click', () => { sfx('ok'); res(); });
      buttonNav(el);
      mark('complete');
    });
  }

  /* ════════════════════════════════════════════════════
     BATTLE
     ════════════════════════════════════════════════════ */
  let B = null, BT = null, navSaid = new Set(), navTimer = null, summoned = new Set();

  async function battle(floor) {
    screen = 'battle';
    const fx = treeFx();
    const heat = save.clears * D.progression.heat;
    // Test hook: window.__btPool forces that enemy group on every floor that has it.
    const forcedPool = window.__btPool != null && floor.pool[window.__btPool];
    const group = run.groups[floor.id] || (run.groups[floor.id] = forcedPool || floor.pool[Math.floor(rand() * floor.pool.length)]);
    if (fx.autoAnalyze) group.forEach(k => { const kn = save.known[k] || (save.known[k] = {}); D.affinityOrder.forEach(el => { kn[el] = true; }); });
    B = E.create({ party: buildParty(run.carry), enemies: group, mods: fx.mods, known: save.known, rand, items: run.items, heat });
    navSaid = new Set(); summoned = new Set();
    buildBattle(floor);
    root.classList.add('bt-in-battle');
    music.play(floor.music || 'battle', { restart: true });
    await intro(floor, group);
    if (fx.openBuff) await play(B.openBuff(fx.openBuff));
    nav(floor.nav);
    mark('battle-start');
    let guard = 0;
    while (!B.outcome() && guard++ < 600) {
      const turn = B.nextTurn();
      const u = B.U(turn.actor);
      setActive(u);
      await play(turn.events);
      if (B.outcome()) break;
      if (!turn.canAct) { await sleep(300); continue; }
      if (u.side === 'enemy') {
        let n = 0;
        do { await sleep(n ? 250 : 380); await play(turn.forced && !n ? B.forcedAct() : B.enemyAct()); n++; } while (B.S.oneMore && !B.outcome() && !u.dead && n < 3);
      } else await partyTurn(u, turn.forced);
      dangerCheck();
      syncAll();
    }
    const result = B.outcome() || 'lose';
    setActive(null);
    hideMenu();
    run.carry = Object.fromEntries(B.party().map(p => [p.mid, { hp: p.dead ? 1 : p.hp, sp: p.sp }]));
    persist();
    if (result === 'win') {
      nav(floor.boss ? 'bossWin' : 'win');
      B.party().filter(p => !p.dead).forEach(p => { const c = BT.cards.get(p.id); const img = c && c.querySelector('.face img'); if (img) img.src = pimg(p.mid, member(p.mid).faces.win); });
      await sleep(1300);
    } else if (result === 'lose') { nav('solarDown'); sfx('ko'); await sleep(1500); }
    else await sleep(700);
    if (result === 'win' && floor.boss) await navCard();
    const exp = B.foes().filter(f => f.dead && !f.fled).reduce((s, f) => s + f.exp, 0);
    return { result, exp, boss: !!floor.boss };
  }

  function buildBattle(floor) {
    const el = show(`${ART.defs()}
      <div class="bt-bg" style="background-image:url('${floor.bg}')"></div><div class="bt-floor"></div><div class="bt-shade"></div>
      <header class="bt-top">
        <div class="bt-floorlabel"><b>${esc(floor.label)}</b><span>${esc(floor.block)}<em><br>${floor.boss ? 'Full Moon Operation' : 'Tartarus'}</em></span></div>
        <ol class="bt-order" aria-label="Turn order"></ol>
        <div class="bt-tools"><button type="button" class="bt-tool" data-tool="speed" title="Battle speed"><span>▶▶ ${save.speed || 1}x</span></button>${tools()}</div>
      </header>
      <div class="bt-field" role="group" aria-label="Shadows"></div>
      <div class="bt-party" role="group" aria-label="Party"></div>
      <div class="bt-cmd" hidden><div class="bt-who"><img alt=""><div class="tag"><b></b><span></span></div></div><div class="bt-cmd-body"></div></div>
      <div class="bt-log" role="status" aria-live="polite"></div>
      <div class="bt-nav" hidden></div>
      <div class="bt-fx"></div><div class="bt-cut"></div><div class="bt-flash"></div>`, `bt-battle${floor.boss ? ' boss' : ''}`);
    BT = {
      root: el, field: el.querySelector('.bt-field'), party: el.querySelector('.bt-party'), cmd: el.querySelector('.bt-cmd'),
      body: el.querySelector('.bt-cmd-body'), who: el.querySelector('.bt-who'), log: el.querySelector('.bt-log'), nav: el.querySelector('.bt-nav'),
      fx: el.querySelector('.bt-fx'), cut: el.querySelector('.bt-cut'), flash: el.querySelector('.bt-flash'), order: el.querySelector('.bt-order'),
      enemies: new Map(), cards: new Map(), bg: floor.bg
    };
    wireTools(el);
    if (FX) {
      FX.attach(el, { speed });
      FX.preload(floor.bg);
      [SUMMON_DIR + 'solar-evoker.webp'].concat(B.party().map(p => FINISH_DIR + p.mid + '.webp')).forEach(src => FX.preload(src));
      if (!save.awakened) AWAKEN.forEach(f => FX.preload(SUMMON_DIR + f + '.webp'));
    }
    B.foes().forEach(u => addEnemy(u));
    B.party().forEach(u => {
      const m = member(u.mid);
      const c = document.createElement('button');
      c.type = 'button';
      c.className = 'bt-card';
      c.dataset.id = u.id;
      c.innerHTML = `<span class="face"><img src="${pimg(u.mid, m.faces.idle)}" alt="" style="--fx:${m.face[0]}%;--fy:${m.face[1]}%"></span>
        <span class="nm">${esc(u.name)} <small>${esc(u.persona)}</small></span>
        <span class="bt-bar hp"><span>HP</span><span class="track"><i></i></span><b></b></span>
        <span class="bt-bar sp"><span>SP</span><span class="track"><i></i></span><b></b></span><span class="st"></span>`;
      c.addEventListener('mousedown', e => e.preventDefault());
      c.addEventListener('click', () => { if (ctl && ctl.pickValue) ctl.pickValue(u.id); });
      c.addEventListener('pointerenter', () => { if (ctl && ctl.hoverValue) ctl.hoverValue(u.id); });
      BT.party.appendChild(c);
      BT.cards.set(u.id, c);
    });
    syncAll();
    sizeField();
  }
  function addEnemy(u) {
    const d = D.enemies[u.kind];
    const el = document.createElement('div');
    el.className = 'bt-enemy';
    el.dataset.id = u.id;
    let body;
    const art = d.img && (window.FEMC_SHADOW_ART || {})[d.img];
    if (art) {
      const h = d.h || 220;
      el.style.setProperty('--w', `${Math.round(h * art.w / art.h)}px`);
      if (art.small) el.classList.add('soft');
      body = `<div class="sh sh-pic idle-${d.idle || 'breathe'}"><img src="${SHADOW_DIR}${d.img}.webp?v=${V()}" alt="${esc(u.name)}" draggable="false" width="${art.w}" height="${art.h}"></div>`;
    } else {
      const sv = ART.shadow(d.svg);
      el.style.setProperty('--w', `${sv.w * (d.size || 1)}px`);
      body = `<svg class="sh" viewBox="${sv.vb}" role="img" aria-label="${esc(u.name)}">${sv.svg}</svg>`;
    }
    if (d.veil) el.classList.add('veiled');
    el.innerHTML = `${d.veil ? '<div class="bt-veil"></div>' : ''}<div class="bt-tags"></div>${body}<div class="bt-ehp"><i style="width:100%"></i></div>`;
    el.addEventListener('click', () => { if (ctl && ctl.pickValue) ctl.pickValue(u.id); });
    el.addEventListener('pointerenter', () => { if (ctl && ctl.hoverValue) ctl.hoverValue(u.id); });
    BT.field.appendChild(el);
    BT.enemies.set(u.id, el);
    paintEnemy(u);
  }
  function sizeField() {
    if (!BT) return;
    const n = Math.max(1, B.foes().filter(f => !f.dead).length);
    BT.field.style.setProperty('--n', n);
    BT.root.style.setProperty('--k', phone() ? 1 : Math.max(0.55, Math.min(1, innerHeight / 900, (innerWidth - 440) / 1000)));
  }
  addEventListener('resize', sizeField);

  /* ── Painting from engine state ───────────────────── */
  function paintEnemy(u, o = {}) {
    const el = BT.enemies.get(u.id); if (!el) return;
    const hp = o.hp != null ? o.hp : u.hp;
    el.querySelector('.bt-ehp i').style.width = `${Math.max(0, hp / u.maxHp * 100)}%`;
    el.classList.toggle('down', !!u.down && !u.dead);
    el.classList.toggle('bound', !!(u.ail && u.ail.id === 'bind') && !u.dead);
    el.dataset.ail = u.ail && !u.dead ? u.ail.id : '';
    el.classList.toggle('charging', !!u.charge && !u.dead);
    if (u.veil) el.style.setProperty('--veil', D.elements[u.veil].color);
    const tags = [];
    if (u.down && !u.dead) tags.push('<span class="bt-tag down">Down</span>');
    if (u.ail && !u.dead) tags.push(ailTag(u.ail));
    if (u.veil && !u.dead) tags.push(`<span class="bt-tag veil" style="--veil:${D.elements[u.veil].color}">Veil · ${D.elements[u.veil].name}</span>`);
    ['atk', 'def'].forEach(s => { if (u.buffs[s]) tags.push(`<span class="bt-tag">${STAT_SHORT[s]} ${u.buffs[s] > 0 ? '↑' : '↓'}</span>`); });
    el.querySelector('.bt-tags').innerHTML = tags.join('');
  }
  const ailTag = a => { const d = D.ailments[a.id]; return `<span class="bt-tag ail" style="--c:${d.color}" title="${esc(d.desc)}">${ART.icon(a.id)}<span>${esc(d.name)}</span><em>${a.t}</em></span>`; };
  function paintCard(u, o = {}) {
    const c = BT.cards.get(u.id); if (!c) return;
    const hp = o.hp != null ? o.hp : u.hp, sp = o.sp != null ? o.sp : u.sp, dead = o.dead != null ? o.dead : u.dead;
    const [h, s] = c.querySelectorAll('.bt-bar');
    h.querySelector('i').style.width = `${hp / u.maxHp * 100}%`;
    h.querySelector('b').textContent = hp;
    h.classList.toggle('low', hp / u.maxHp < 0.3);
    s.querySelector('i').style.width = `${sp / u.maxSp * 100}%`;
    s.querySelector('b').textContent = sp;
    c.classList.toggle('dead', !!dead);
    c.classList.toggle('boosted', u.boost > 1);
    c.dataset.boost = u.boost;
    const st = [];
    if (u.down && !dead) st.push('<i class="dw">DOWN</i>');
    if (u.guard) st.push('<i class="gd">GUARD</i>');
    if (u.ail && !dead) { const d = D.ailments[u.ail.id]; st.push(`<i class="ail" style="--c:${d.color}" title="${esc(d.name)}">${ART.icon(u.ail.id)}${esc(d.name.toUpperCase())}</i>`); }
    const tac = tacticOf(u);
    if (tac !== 'direct' && !dead) st.push(`<i class="tc" title="${esc(D.tactics[tac].name)}">${esc(D.tactics[tac].short.toUpperCase())}</i>`);
    ['atk', 'def', 'agi'].forEach(k => { if (u.buffs[k]) st.push(`<i class="${u.buffs[k] > 0 ? 'up' : 'dn'}">${STAT_SHORT[k]}${u.buffs[k] > 0 ? '↑' : '↓'}</i>`); });
    c.querySelector('.st').innerHTML = st.join('');
    c.classList.toggle('ailing', !!(u.ail && !dead));
    c.dataset.ail = u.ail && !dead ? u.ail.id : '';
    c.setAttribute('aria-label', `${u.name}: HP ${hp} of ${u.maxHp}, SP ${sp} of ${u.maxSp}${dead ? ', knocked out' : ''}${u.ail && !dead ? ', ' + D.ailments[u.ail.id].name : ''}`);
  }
  function syncAll() {
    if (!BT) return;
    B.foes().forEach(u => { if (!BT.enemies.has(u.id)) addEnemy(u); paintEnemy(u); const el = BT.enemies.get(u.id); if (u.dead && !el.classList.contains('dead')) el.classList.add('dead', 'gone'); });
    B.party().forEach(u => paintCard(u));
    paintOrder();
  }
  function paintOrder() {
    const cur = B.S.cur;
    const ids = [cur && cur.id].concat(B.upcoming(7)).filter(Boolean);
    BT.order.innerHTML = ids.map((id, i) => {
      const u = B.U(id); if (!u) return '';
      const st = u.side === 'party' ? ` style="background-image:url('${pimg(u.mid, member(u.mid).faces.idle)}')"` : '';
      return `<li class="${u.side === 'enemy' ? 'enemy' : 'party'}${i === 0 ? ' now' : ''}${u.down ? ' down' : ''}" title="${esc(u.name)}"${st}></li>`;
    }).join('');
  }
  function setActive(u) {
    BT.cards.forEach(c => c.classList.remove('active'));
    BT.enemies.forEach(e => e.classList.remove('acting'));
    if (u && u.side === 'party') BT.cards.get(u.id).classList.add('active');
    paintOrder();
  }
  function log(text) { BT.log.textContent = text; clearTimeout(log.t); log.t = setTimeout(() => { if (BT) BT.log.textContent = ''; }, 2200 / Math.min(speed(), 2)); }

  /* ── Fuuka ────────────────────────────────────────── */
  function nav(key, vars = {}, { once = false } = {}) {
    const line = D.nav[key];
    if (!line || !BT) return;
    if (once && navSaid.has(key)) return;
    navSaid.add(key);
    const text = String(pickOne(line[0])).replace(/\{(\w+)\}/g, (_, k) => (vars[k] != null ? vars[k] : ''));
    BT.nav.innerHTML = `<div class="pic"><img src="${pimg('fuuka', line[1] || 'neutral')}" alt=""></div><p><b>Fuuka</b>${esc(text)}</p>`;
    BT.nav.hidden = false;
    BT.nav.classList.remove('out');
    void BT.nav.offsetWidth;
    BT.nav.style.animation = 'none'; void BT.nav.offsetWidth; BT.nav.style.animation = '';
    clearTimeout(navTimer);
    const nv = BT.nav;
    navTimer = setTimeout(() => { nv.classList.add('out'); setTimeout(() => { if (nv.classList.contains('out')) nv.hidden = true; }, 300); }, 2900 / Math.min(speed(), 3));
    mark('nav-' + key);
  }
  function dangerCheck() {
    B.party().forEach(p => { if (!p.dead && p.hp / p.maxHp < 0.3 && !navSaid.has('danger-' + p.id)) { navSaid.add('danger-' + p.id); nav('danger', { name: p.name }); } else if (p.hp / p.maxHp >= 0.5) navSaid.delete('danger-' + p.id); });
    const alive = B.foes().filter(f => !f.dead);
    if (alive.length === 1 && B.foes().length > 1) nav('last', {}, { once: true });
  }

  /* ── Effects ──────────────────────────────────────── */
  function anchor(id) {
    const el = BT.enemies.get(id) || BT.cards.get(id);
    const R = BT.root.getBoundingClientRect();
    if (!el) return { x: R.width / 2, y: R.height / 2 };
    const t = el.querySelector('.sh') || el;
    const r = t.getBoundingClientRect();
    return BT.enemies.has(id) ? { x: r.left + r.width / 2 - R.left, y: r.top + r.height * 0.45 - R.top } : { x: r.left + r.width / 2 - R.left, y: r.top - R.top + 6 };
  }
  const popCount = new Map();
  function popup(id, { n = null, label = '', cls = '', lcls = '', style = '' }) {
    const p = anchor(id), k = popCount.get(id) || 0;
    popCount.set(id, k + 1);
    setTimeout(() => popCount.set(id, Math.max(0, (popCount.get(id) || 1) - 1)), 700);
    const el = document.createElement('div');
    el.className = `bt-pop ${cls}`;
    el.style.left = `${p.x + (k % 2 ? 26 : -10) * Math.min(k, 3)}px`;
    el.style.top = `${p.y - k * 30}px`;
    el.innerHTML = `${label ? `<span class="l ${lcls}"${style ? ` style="${style}"` : ''}>${label}</span>` : ''}${n != null ? `<span class="n">${n}</span>` : ''}`;
    BT.fx.appendChild(el);
    setTimeout(() => el.remove(), 1300 / Math.min(speed(), 2));
  }
  function strikeFx(id, el) {
    const p = anchor(id), c = (D.elements[el] || {}).color || '#ff4f9e';
    const fx = document.createElement('div');
    if (E.PHYS.has(el)) { fx.className = 'bt-slashfx'; fx.innerHTML = '<i></i><i></i>'; }
    else fx.className = 'bt-burst';
    fx.style.cssText = `left:${p.x}px;top:${p.y}px;--c:${c}`;
    BT.fx.appendChild(fx);
    setTimeout(() => fx.remove(), 700);
  }
  /* Box of a unit for the canvas effects: a Shadow's art, or a party card. */
  function fxAt(id) {
    const R = BT.root.getBoundingClientRect(), en = BT.enemies.get(id), c = BT.cards.get(id);
    const el = en ? (en.querySelector('.sh') || en) : c;
    if (!el) return { x: R.width / 2, y: R.height / 2, w: 200, h: 200 };
    const r = el.getBoundingClientRect();
    return en ? { x: r.left + r.width / 2 - R.left, y: r.top + r.height * 0.5 - R.top, w: r.width, h: r.height } : { x: r.left + r.width * 0.55 - R.left, y: r.top + r.height * 0.4 - R.top, w: r.width * 0.7, h: r.height };
  }
  /* Play a spell/hit effect; returns ms (at 1x) until it lands. */
  function fxPlay(kind, id, o = {}) {
    mark('fx-' + kind);
    if (!FX) { strikeFx(id, kind); return 0; }
    return FX.play(kind, fxAt(id), Object.assign({ track: () => { if (!BT || !(BT.enemies.has(id) || BT.cards.has(id))) return null; const b = fxAt(id); return b.w > 0 ? b : null; } }, o)) || 0;
  }
  function fxHit(e) {
    const src = B.U(e.src), el = e.el, o = { crit: e.crit, color: (D.elements[el] || {}).color };
    if (e.skill === 'golden_rope') { const c = BT.cards.get(e.src), R = BT.root.getBoundingClientRect(); if (c) { const r = c.getBoundingClientRect(); o.from = { x: r.left + r.width * 0.4 - R.left, y: r.top - R.top }; } return fxPlay('rope', e.tgt, o); }
    if (e.insta) return fxPlay(el === 'light' ? 'light' : 'dark', e.tgt, Object.assign(o, { holy: el === 'light' }));
    if (e.skill === 'daybreak' || el === 'light') return fxPlay('light', e.tgt, o);
    if (src && src.side === 'enemy' && el === 'almighty') return fxPlay('almighty', e.tgt, o);
    return fxPlay(D.elements[el] ? el : 'strike', e.tgt, o);
  }
  /* Shadow death: dissolve into ash (canvas) while a CSS mask wipes the art away; the mask falls last. */
  function deathFx(id) {
    const en = BT.enemies.get(id);
    if (!en || en.classList.contains('dead')) return;
    en.classList.remove('down', 'charging', 'hit', 'targeted');
    let ms = 0;
    const sh = en.querySelector('.sh');
    if (FX && sh) {
      const r = sh.getBoundingClientRect(), R = BT.root.getBoundingClientRect();
      ms = FX.ash({ x: r.left - R.left, y: r.top - R.top, w: r.width, h: r.height }, en.querySelector('.sh-pic img'));
    }
    if (ms) { en.style.setProperty('--ash', `${Math.round(ms / speed())}ms`); en.classList.add('ash'); sfx('dissolve'); mark('ash'); }
    en.classList.add('dead');
    setTimeout(() => { en.classList.add('gone'); sizeField(); }, Math.max(900, ms + 300) / speed());
  }
  function flash(pink) {
    BT.flash.classList.toggle('pink', !!pink);
    BT.flash.classList.remove('go'); void BT.flash.offsetWidth; BT.flash.classList.add('go');
  }
  function shake(big) {
    const r = BT.root, c = big ? 'shake-big' : 'shake';
    r.classList.remove('shake', 'shake-big'); void r.offsetWidth; r.classList.add(c);
    setTimeout(() => r.classList.remove(c), 750);
  }
  function banner(text, { el = null, enemy = false, sub = '' } = {}) {
    BT.root.querySelectorAll('.bt-banner').forEach(b => b.remove());
    const b = document.createElement('div');
    b.className = `bt-banner${enemy ? ' enemy' : ''}`;
    b.innerHTML = `${el && el !== 'none' ? ART.icon(el) : ''}<span>${esc(text)}</span>${sub ? `<small>${esc(sub)}</small>` : ''}`;
    if (el && D.elements[el]) b.style.color = '#fff';
    BT.root.appendChild(b);
    setTimeout(() => b.remove(), 1100 / Math.min(speed(), 2));
  }
  /* Persona summon (P3's Evoker): a beat of stillness on the Evoker, a gunshot crack, the screen shatters into glass,
     then blue/pink light and the Persona rising. Solar uses Kat's close-up; others get their portrait and a drawn Evoker.
     Cut-in setting: always / the first time per member per battle / off. Haenim's name glitches (lore). */
  function coverBox(img) { // where an object-fit: cover image actually lands, relative to the battle root
    const R = BT.root.getBoundingClientRect(), r = img.getBoundingClientRect(), nw = img.naturalWidth || 16, nh = img.naturalHeight || 9;
    const k = Math.max(r.width / nw, r.height / nh), cs = getComputedStyle(img).objectPosition.split(' ').map(v => parseFloat(v) / 100);
    const w = nw * k, h = nh * k;
    return { x: r.left - R.left + (r.width - w) * (isNaN(cs[0]) ? 0.5 : cs[0]), y: r.top - R.top + (r.height - h) * (isNaN(cs[1]) ? 0.5 : cs[1]), w, h };
  }
  const glitchName = (pn, sp = speed()) => ['H̷A̵E̶N̸I̴M', '해░▒NIM', 'HAE▓█M', '해님', 'HAENIM'].forEach((t, i) => setTimeout(() => { pn.textContent = t; }, (i * 110) / sp));
  async function summonCut(u, skillName) {
    const first = !summoned.has(u.id);
    summoned.add(u.id);
    mark('summon');
    mark('summon-' + u.mid);
    if (u.mid === 'solar' && !save.awakened) {
      save.awakened = true; persist();
      await awakening(BT.root, sleep);
      return;
    }
    const mode = save.cutins || 'first';
    if (mode === 'off' || (mode === 'first' && !first)) { sfx('summon'); flash(true); await sleep(180); return; }
    await evoker(u, skillName);
  }
  async function evoker(u, skillName) {
    const m = member(u.mid), per = D.personas[m.persona], reduced = !FX || FX.reduced(), solar = u.mid === 'solar';
    const wrap = document.createElement('div');
    wrap.className = `bt-evoke${solar ? ' solar' : ''}`;
    wrap.style.setProperty('--spd', speed());
    const shot = solar
      ? `<div class="bt-evk-shot"><img src="${SUMMON_DIR}solar-evoker.webp" alt=""></div>`
      : `<div class="bt-evk-band" style="--c:${m.color}"><img class="face" src="${pimg(u.mid, m.faces.idle)}" alt="" style="--fx:${m.face[0]}%"><img class="gun" src="${EVOKER_SVG}" alt=""></div>`;
    wrap.innerHTML = `<div class="bt-evk-light"></div><img class="per" src="${per.art}" alt=""><b class="bt-evk-name"><span class="pn">${esc(per.name.toUpperCase())}</span><small>${esc(skillName)}</small></b>${shot}`;
    BT.cut.appendChild(wrap);
    BT.root.classList.add('evoking');
    sfx('click');
    mark('evoke');
    mark('evoke-' + u.mid);
    await sleep(reduced ? 140 : 320);
    const sh = wrap.querySelector('.bt-evk-shot, .bt-evk-band');
    sfx('evoker');
    mark('evoke-crack');
    if (!reduced) {
      const R = BT.root.getBoundingClientRect();
      let cx, cy, extras;
      if (solar) {
        const im = sh.querySelector('img'), cb = coverBox(im);
        cx = cb.x + cb.w * 0.515; cy = cb.y + cb.h * 0.18; // the Evoker's muzzle at her temple
        extras = [{ el: sh, clip: [[0, 6], [100, 0], [100, 94], [0, 100]], fill: '#05060c', cover: true }];
      } else {
        const g = sh.querySelector('.gun').getBoundingClientRect();
        cx = g.right - R.left - g.width * 0.02; cy = g.top - R.top + g.height * 0.32;
        extras = [{ el: sh, clip: [[0, 18], [100, 0], [100, 82], [0, 100]], fill: '#14070f', edge: m.color }];
      }
      const snap = FX.snapshot(BT.root, { bg: BT.bg, extras });
      sh.remove();
      wrap.classList.add('broke');
      FX.shatter(wrap, snap, { cx, cy });
      mark('evoke-shatter');
    } else { sh.remove(); wrap.classList.add('broke'); flash(); }
    if (solar) glitchName(wrap.querySelector('.pn'));
    await sleep(reduced ? 600 : 900);
    wrap.classList.add('out');
    BT.root.classList.remove('evoking');
    await sleep(200);
    wrap.remove();
  }

  /* The one-time cinematic: Solar's Persona awakening, six storyboard frames with Ken Burns crossfades,
     the glass breaking between 03 and 04, and Haenim's name glitching in. Skip with the button, Enter or Esc.
     host: where to draw it; wait: a sleep that respects battle speed (and the screenshot freeze). */
  function awakening(host, wait = ms => new Promise(r => setTimeout(r, ms / speed()))) {
    const reduced = !FX || FX.reduced();
    const prevCtl = ctl;
    return new Promise(resolve => {
      let done = false;
      const el = document.createElement('div');
      el.className = `bt-awaken${reduced ? ' reduced' : ''}`;
      el.style.setProperty('--spd', speed());
      const caps = ['', '', 'I am thou…', '…thou art I.', '', ''];
      el.innerHTML = AWAKEN.map((f, i) => `<div class="bt-awk-f" data-i="${i}"><img src="${SUMMON_DIR}${f}.webp" alt=""></div>`).join('') +
        `<p class="bt-awk-cap"></p><b class="bt-awk-name"><span class="pn">H̷A̵E̶N̸I̴M</span><small>해님 · Lady Sun</small></b>
         <button type="button" class="bt-tool bt-awk-skip"><span>Skip ›</span></button>`;
      host.appendChild(el);
      const frames = [...el.querySelectorAll('.bt-awk-f')], cap = el.querySelector('.bt-awk-cap');
      const finish = () => { if (done) return; done = true; el.classList.add('out'); ctl = prevCtl; setTimeout(() => el.remove(), 350); mark('awaken-done'); resolve(); };
      el.querySelector('.bt-awk-skip').addEventListener('click', () => { sfx('back'); mark('awaken-skip'); finish(); });
      ctl = { kind: 'cinematic', move() {}, pick: () => { mark('awaken-skip'); finish(); }, back: () => { mark('awaken-skip'); finish(); } };
      mark('awaken');
      const showFrame = i => {
        frames.forEach((f, j) => f.classList.toggle('on', j === i));
        frames[i].classList.add('kb' + (i % 2));
        cap.textContent = caps[i]; cap.classList.toggle('on', !!caps[i]);
        mark('awaken-' + (i + 1));
      };
      (async () => {
        sfx('summon');
        for (let i = 0; i < AWAKEN.length && !done; i++) {
          if (i === 3 && !reduced) {
            // 03 → 04: the glass breaks over frame 03 and frame 04 is behind it.
            const im = frames[2].querySelector('img'), r = el.getBoundingClientRect();
            const snap = document.createElement('canvas'), k = Math.min(window.devicePixelRatio || 1, phone() ? 1 : 1.5);
            snap.width = Math.round(r.width * k); snap.height = Math.round(r.height * k);
            const g = snap.getContext('2d'), ib = im.getBoundingClientRect();
            g.scale(k, k);
            if (im.complete && im.naturalWidth) { const kk = Math.max(ib.width / im.naturalWidth, ib.height / im.naturalHeight); g.drawImage(im, ib.left - r.left + (ib.width - im.naturalWidth * kk) / 2, ib.top - r.top + (ib.height - im.naturalHeight * kk) / 2, im.naturalWidth * kk, im.naturalHeight * kk); }
            sfx('evoker');
            frames[2].classList.remove('on');
            frames[2].style.visibility = 'hidden';
            showFrame(3);
            frames[3].classList.add('snap');
            FX.shatter(el, snap, { cx: r.width * 0.5, cy: r.height * 0.32 });
            mark('awaken-shatter');
            await wait(1500);
            continue;
          }
          showFrame(i);
          if (i === 5) { el.classList.add('named'); glitchName(el.querySelector('.pn')); }
          await wait(i === 5 ? 2000 : 1250);
        }
        finish();
      })();
    });
  }
  /* Fuuka's card: a navigator moment after the full-moon boss. */
  async function navCard() {
    const w = document.createElement('div');
    w.className = 'bt-allout';
    w.innerHTML = `<div class="bt-finish card nav"><div class="bk" style="background-image:url('${FINISH_DIR}fuuka.webp')"></div><img src="${FINISH_DIR}fuuka.webp" alt="Fuuka"></div>`;
    BT.cut.appendChild(w);
    mark('navcard');
    await sleep(1500);
    w.remove();
  }
  async function bigWord(text, { sub = '', gold = false, band = null, ms = 900 } = {}) {
    const w = document.createElement('div');
    w.className = 'bt-onemore';
    w.innerHTML = `${band ? `<div class="bt-band"><img src="${band}" alt=""></div>` : ''}<div class="bt-big${gold ? ' gold' : ''}">${text}${sub ? `<small>${esc(sub)}</small>` : ''}</div>`;
    w.querySelectorAll('.bt-band, .bt-band img, .bt-big').forEach(x => { x.style.animationDuration = `${ms / speed()}ms`; });
    BT.cut.appendChild(w);
    await sleep(ms * 0.85);
    setTimeout(() => w.remove(), 300);
  }

  /* ── Event playback ───────────────────────────────── */
  async function play(evs) {
    for (let i = 0; i < evs.length; i++) await playOne(evs[i], evs[i + 1]);
    syncAll();
  }
  async function playOne(e, next) {
    const U = id => B.U(id);
    switch (e.t) {
      case 'round': paintOrder(); break;
      case 'use': {
        const u = U(e.src);
        mark('use-' + e.skill);
        if (u.side === 'enemy') {
          const el = BT.enemies.get(u.id); if (el) { el.classList.remove('acting'); void el.offsetWidth; el.classList.add('acting'); }
          banner(e.name, { el: e.el, enemy: true, sub: u.name });
          log(`${u.name} used ${e.name}.`);
          await sleep(e.skill === 'tremble' ? 500 : 650);
        } else {
          paintCard(u);
          if (e.summon && !e.charmed) { await summonCut(u, e.name); banner(e.name, { el: e.el, sub: u.persona }); }
          else if (e.charmed) { banner(e.name, { el: 'charm', sub: `${u.name} · Charmed` }); await sleep(300); }
          else { const c = BT.cards.get(u.id); c.classList.remove('hit'); banner('Attack', { el: e.el, sub: u.name }); await sleep(260); }
          log(`${u.name}: ${e.name}`);
        }
        if (D.ailments[e.el]) sfx('ail');
        if (D.elements[e.el] && e.tgts.length) sfx(E.PHYS.has(e.el) ? 'hit' : (['fire', 'ice', 'elec', 'wind', 'light', 'almighty'].includes(e.el) ? e.el : 'hit'));
        break;
      }
      case 'hit': {
        const t = U(e.tgt), onEnemy = t.side === 'enemy', src = U(e.src);
        if (e.quiet) { if (onEnemy) { paintEnemy(t, { hp: 0 }); deathFx(e.tgt); mark('kill'); } await sleep(500); break; }
        if (e.aff === 'repel' && !e.reflected) { fxPlay(e.el, e.tgt, { small: true }); popup(e.tgt, { label: 'REPEL', lcls: 'repel' }); if (src.side === 'party') nav('repel', {}, { once: true }); sfx('miss'); await sleep(420); break; }
        const lead = e.aff === 'null' ? fxPlay('miss', e.tgt) : fxHit(e);
        if (lead > 40) await sleep(lead);
        if (e.insta) {
          if (e.killed) { popup(e.tgt, { label: e.el === 'light' ? 'BANISHED!' : 'INSTANT KILL!', lcls: 'weak' }); flash(e.el !== 'light'); shake(true); sfx('crit'); nav('insta'); mark('insta'); paintEnemy(t, { hp: 0 }); deathFx(e.tgt); mark('kill'); }
          else { popup(e.tgt, { label: t.boss ? 'IMMUNE' : 'NULL', lcls: 'null' }); sfx('miss'); }
          await sleep(650);
          break;
        }
        const el = onEnemy ? BT.enemies.get(e.tgt) : BT.cards.get(e.tgt);
        if (el && e.amount > 0 && e.aff !== 'drain') { el.classList.remove('hit'); void el.offsetWidth; el.classList.add('hit'); setTimeout(() => el.classList.remove('hit'), 420); }
        const label = e.crit ? 'CRITICAL!' : (AFF_WORD[e.aff] || '');
        const lcls = e.crit ? 'crit' : e.aff;
        if (e.aff === 'null') popup(e.tgt, { label: 'NULL', lcls: 'null' });
        else if (e.aff === 'drain') popup(e.tgt, { label: 'DRAIN', lcls: 'drain', n: e.amount, cls: 'heal' });
        else popup(e.tgt, { n: e.amount, label, lcls, cls: `${onEnemy ? '' : 'party'} ${e.crit ? 'crit' : ''} ${e.aff === 'weak' ? 'big' : ''}` });
        if (onEnemy) paintEnemy(t, { hp: e.hp }); else paintCard(t, { hp: e.hp, dead: e.killed });
        if (e.crit) { shake(true); flash(); sfx('crit'); }
        else if (e.aff === 'weak') { shake(false); flash(true); sfx('weak'); }
        else if (e.amount) sfx('hit');
        if (e.downed) { sfx('down'); if (onEnemy) { const en = BT.enemies.get(e.tgt); en.classList.add('down'); } }
        if (e.shatter) { popup(e.tgt, { label: 'SHATTER!', lcls: 'crit' }); fxPlay('shatter', e.tgt); sfx('shatter'); nav('shatter'); mark('shatter'); }
        if (src && src.side === 'party' && onEnemy) {
          if (e.crit) nav('crit'); else if (e.aff === 'weak') { nav('weak'); mark('weak'); }
          else if (['null', 'drain', 'resist'].includes(e.aff)) nav(e.aff, {}, { once: true });
        }
        if (!onEnemy && e.aff === 'weak') { nav('hurt', { name: t.name }); const img = BT.cards.get(t.id).querySelector('.face img'); img.src = pimg(t.mid, member(t.mid).faces.hurt); setTimeout(() => { if (!t.dead) img.src = pimg(t.mid, member(t.mid).faces.idle); }, 1600); }
        if (e.killed) {
          if (onEnemy) { deathFx(e.tgt); mark('kill'); }
          else { sfx('ko'); const img = BT.cards.get(t.id).querySelector('.face img'); img.src = pimg(t.mid, member(t.mid).faces.ko); if (t !== B.leader()) nav('ko', { name: t.name }); log(`${t.name} was knocked out!`); }
        }
        await sleep(next && next.t === 'hit' && !e.crit ? 240 : (e.aff === 'weak' || e.crit ? 700 : 460));
        break;
      }
      case 'miss': popup(e.tgt, { label: e.immune ? 'IMMUNE' : e.ail ? (e.has ? 'NO EFFECT' : 'MISS') : 'MISS', lcls: 'miss' }); sfx('miss'); if (e.insta) mark('insta-miss'); await sleep(420); break;
      case 'ail': {
        const t = U(e.tgt), d = D.ailments[e.id];
        fxPlay(e.id === 'bind' ? 'bind' : e.id, e.tgt);
        popup(e.tgt, { label: d.name.toUpperCase() + '!', lcls: 'ail', style: `--c:${d.color}` });
        if (t.side === 'party') paintCard(t); else paintEnemy(t);
        sfx('ail');
        if (e.back) nav('shockBack', { name: t.name });
        else if (e.id === 'bind') nav('bind');
        else nav((t.side === 'party' ? 'ally_' : 'foe_') + e.id, { name: t.name });
        log(`${t.name} ${e.id === 'bind' ? 'is bound by the golden rope' : 'is afflicted with ' + d.name}!`);
        mark('ail'); mark('ail-' + e.id); mark((t.side === 'party' ? 'ally-ail-' : 'foe-ail-') + e.id);
        if (t.side === 'party') { const img = BT.cards.get(t.id).querySelector('.face img'); img.src = pimg(t.mid, member(t.mid).faces.hurt); setTimeout(() => { if (!t.dead) img.src = pimg(t.mid, member(t.mid).faces.idle); }, 1400); }
        await sleep(560);
        break;
      }
      case 'ailEnd': {
        const t = U(e.tgt);
        if (t.side === 'party') paintCard(t); else paintEnemy(t);
        if (e.shatter) break; // shown with the hit
        if (e.cured) { fxPlay('cure', e.tgt); popup(e.tgt, { label: 'CURED', lcls: 'buff' }); sfx('cure'); nav('cured'); mark('cure'); mark('cure-' + e.id); await sleep(420); }
        else { popup(e.tgt, { label: 'RECOVERED', lcls: 'buff' }); log(`${t.name} recovered from ${D.ailments[e.id].name}.`); mark('recover'); await sleep(300); }
        break;
      }
      case 'ailSkip': {
        const t = U(e.tgt), words = { freeze: 'FROZEN', shock: 'SHOCKED', bind: 'BOUND', fear: 'COWERING' };
        if (e.id === 'shock') fxPlay('shock', e.tgt); else if (e.id === 'freeze') fxPlay('freeze', e.tgt); else if (e.id === 'fear') fxPlay('fear', e.tgt);
        popup(e.tgt, { label: words[e.id] || 'STUCK', lcls: 'ail', style: `--c:${D.ailments[e.id].color}` });
        log(e.id === 'fear' ? `${t.name} is cowering in fear…` : e.id === 'bind' ? `${t.name} is bound by the golden rope!` : `${t.name} can’t move!`);
        mark('ail-skip');
        await sleep(520);
        break;
      }
      case 'ailTick': {
        const t = U(e.tgt);
        fxPlay('poison', e.tgt);
        popup(e.tgt, { n: e.amount, cls: 'poison' + (t.side === 'party' ? ' party' : ''), label: 'POISON', lcls: 'ail', style: `--c:${D.ailments.poison.color}` });
        if (t.side === 'party') paintCard(t, { hp: e.hp }); else paintEnemy(t, { hp: e.hp });
        mark('poison-tick');
        await sleep(480);
        break;
      }
      case 'flee': { const t = U(e.tgt), en = BT.enemies.get(e.tgt); if (en) { en.classList.add('fled'); setTimeout(() => { en.classList.add('gone'); sizeField(); }, 700 / speed()); } nav('fled'); log(`${t.name} ran away in fear!`); mark('flee'); await sleep(600); break; }
      case 'charmAct': { const t = U(e.src); popup(e.src, { label: 'CHARMED', lcls: 'ail', style: `--c:${D.ailments.charm.color}` }); fxPlay('charm', e.src); log(`${t.name} is charmed!`); mark('charm-act'); await sleep(420); break; }
      case 'heal': {
        const t = U(e.tgt);
        if (e.amount > 0) { popup(e.tgt, { n: e.amount, cls: 'heal' + (t.side === 'party' ? ' party' : '') }); if (!(next && next.t === 'heal' && next.tgt === e.tgt)) fxPlay('heal', e.tgt); }
        if (e.sp) popup(e.tgt, { n: `+${e.sp} SP`, cls: 'sp' });
        if (t.side === 'party') paintCard(t, { hp: e.hp, sp: e.spNow != null ? e.spNow : undefined, dead: false }); else paintEnemy(t, { hp: e.hp });
        sfx('heal');
        await sleep(next && next.t === 'heal' ? 160 : 420);
        break;
      }
      case 'revive': { const t = U(e.tgt); const c = BT.cards.get(t.id); fxPlay('revive', e.tgt); c.classList.remove('dead'); c.querySelector('.face img').src = pimg(t.mid, member(t.mid).faces.idle); popup(e.tgt, { label: 'REVIVED', lcls: 'buff' }); mark('revive'); await sleep(300); break; }
      case 'buff': {
        const t = U(e.tgt);
        popup(e.tgt, { label: `${STAT_SHORT[e.stat]} ${e.dir > 0 ? '↑' : '↓'}`, lcls: e.dir > 0 ? 'buff' : 'debuff' });
        fxPlay('buff', e.tgt, { dir: e.dir, stat: e.stat });
        if (t.side === 'party') paintCard(t); else paintEnemy(t);
        sfx('buff');
        await sleep(next && next.t === 'buff' ? 120 : 380);
        break;
      }
      case 'buffEnd': break;
      case 'reveal': break;
      case 'onemore': {
        const u = U(e.src);
        sfx('onemore');
        if (u.side === 'party') { await bigWord('1 MORE!', { band: pimg(u.mid, member(u.mid).faces.idle), ms: 950 }); log(`${u.name}: “${member(u.mid).lines.onemore}”`); mark('onemore'); }
        else { banner('1 More', { enemy: true, sub: u.name }); await sleep(500); }
        break;
      }
      case 'alloutReady': nav('allDown'); sfx('onemore'); await bigWord('ALL DOWN', { sub: 'They’re wide open', ms: 900 }); break;
      case 'allout': await allOutSequence(e); break;
      case 'shift': {
        const a = U(e.src), b = U(e.tgt);
        sfx('summon');
        await bigWord('SHIFT', { sub: `${a.name} → ${b.name} · ×${e.boost} power`, gold: true, band: pimg(b.mid, member(b.mid).faces.idle), ms: 900 });
        if (e.sp) popup(e.tgt, { n: `+${e.sp} SP`, cls: 'sp' });
        log(`${a.name}: “${member(a.mid).lines.shift}”`);
        nav('shift');
        mark('shift');
        break;
      }
      case 'guard': { const u = U(e.src); paintCard(u); popup(e.src, { label: 'GUARD', lcls: 'buff' }); sfx('guard'); await sleep(360); break; }
      case 'item': { const u = U(e.src); banner(e.name, { el: 'item', sub: u.name }); log(`${u.name} used ${e.name}.`); await sleep(420); break; }
      case 'escape': if (e.ok) { sfx('escape'); nav('escape'); await bigWord('ESCAPED', { ms: 800 }); } else { nav('escapeFail'); log('Couldn’t escape!'); await sleep(500); } break;
      case 'telegraph': { const u = U(e.src); paintEnemy(u); BT.enemies.get(u.id).classList.add('charging'); nav('telegraph'); log(`${u.name} is gathering moonlight…`); sfx('summon'); await sleep(900); mark('telegraph'); break; }
      case 'veil': {
        const u = U(e.tgt);
        const kn = save.known[u.kind] || (save.known[u.kind] = {}); kn[e.el] = true;
        paintEnemy(u);
        nav('veil', { el: D.elements[e.el].name });
        await sleep(350);
        break;
      }
      case 'summon': {
        nav('summon');
        await bigWord('CALL OF THE MIRROR', { sub: 'Mirror Maidens appear', ms: 900 });
        e.ids.forEach(id => addEnemy(B.U(id)));
        sizeField();
        mark('summon-adds');
        await sleep(500);
        break;
      }
      case 'standup': { const u = U(e.tgt); if (u.side === 'enemy') { paintEnemy(u); log(`${u.name} got back up.`); await sleep(380); } else paintCard(u); break; }
      case 'msg': log(e.text); await sleep(e.src ? 500 : 200); break;
      case 'analyze': break;
      default: break;
    }
  }

  async function allOutSequence(e) {
    const actor = B.U(e.src);
    hideMenu();
    const parts = e.parts.map(B.U);
    const wrap = document.createElement('div');
    wrap.className = 'bt-allout';
    // One dense comic cloud over the Shadows: puffs on a ring plus a core, outlined as a whole (CSS drop-shadows on .cloud).
    const puffs = Array.from({ length: 12 }, (_, i) => {
      const ring = i < 9, ang = (i / 9) * Math.PI * 2, s = ring ? 30 + (i * 7) % 12 : 46;
      const x = ring ? 50 + Math.cos(ang) * 30 : 36 + (i - 9) * 14, y = ring ? 52 + Math.sin(ang) * 26 : 50;
      return `<i style="left:${x - s / 2}%;top:${y - s * 0.6}%;width:${s}%;aspect-ratio:1;animation-delay:${-i * 0.17}s"></i>`;
    }).join('');
    const sils = parts.map((p, i) => `<img class="sil" src="${pimg(p.mid, member(p.mid).faces.idle)}" alt="" style="left:${[8, 64, 30, 78][i % 4]}%;top:${[2, 0, 58, 50][i % 4]}%;animation-delay:${i * 0.22}s">`).join('');
    const words = ['BAM!', 'POW!', 'WHAM!', 'SMASH!'].map((w, i) => `<b style="left:${[2, 70, 18, 66][i]}%;top:${[10, 6, 74, 70][i]}%;animation-delay:${0.1 + i * 0.22}s">${w}</b>`).join('');
    const stars = [0, 1, 2, 3, 4, 5].map(i => `<span class="star" style="left:${[14, 84, 48, 0, 94, 40][i]}%;top:${[78, 30, -6, 44, 74, 92][i]}%;animation-delay:${-i * 0.15}s">${ART.icon('allout')}</span>`).join('');
    wrap.innerHTML = `<div class="bt-speedlines"></div><div class="bt-dust"><div class="cloud">${puffs}</div>${sils}${words}${stars}</div>`;
    const fr = BT.field.getBoundingClientRect(), rr = BT.root.getBoundingClientRect();
    const dust = wrap.querySelector('.bt-dust');
    dust.style.left = `${fr.left - rr.left + fr.width / 2}px`;
    dust.style.top = `${fr.top - rr.top + fr.height * 0.62}px`;
    BT.cut.appendChild(wrap);
    sfx('allout');
    shake(true);
    mark('allout-dust');
    await sleep(500); shake(true); await sleep(500); shake(true); await sleep(500);
    wrap.innerHTML = '';
    // P3R finish card of whoever triggered it (the line is in Kat's art), wiped in full screen.
    const fin = document.createElement('div');
    fin.className = 'bt-finish card';
    fin.style.setProperty('--spd', speed());
    const card = `${FINISH_DIR}${actor.mid}.webp`;
    fin.innerHTML = `<div class="bk" style="background-image:url('${card}')"></div><i class="wipe"></i><i class="wipe w2"></i><img src="${card}" alt="${esc(actor.name)}: All-Out Attack finish">`;
    wrap.appendChild(fin);
    flash();
    mark('allout-finish');
    await sleep(1500);
    wrap.remove();
    e.hits.forEach((h, i) => setTimeout(() => {
      const t = B.U(h.tgt);
      fxPlay('strike', h.tgt, { crit: true });
      popup(h.tgt, { n: h.amount, cls: 'big crit' });
      paintEnemy(t, { hp: h.hp });
      const en = BT.enemies.get(h.tgt);
      en.classList.remove('down');
      if (h.killed) deathFx(h.tgt);
    }, i * 140 / speed()));
    shake(true);
    sfx('crit');
    mark('allout');
    await sleep(1100 + e.hits.length * 140);
    sizeField();
  }

  /* ── Menus ────────────────────────────────────────── */
  function hideMenu() { if (!BT) return; BT.cmd.hidden = true; BT.root.classList.remove('menu-open'); clearTargets(); }
  function clearTargets() {
    BT.enemies.forEach(el => { el.classList.remove('targeted', 'targetable'); const p = el.querySelector('.bt-plate'); if (p) p.remove(); });
    BT.cards.forEach(c => c.classList.remove('targeted', 'targetable'));
  }
  function showWho(u, extra = '') {
    const m = member(u.mid);
    const img = BT.who.querySelector('img');
    const src = pimg(u.mid, m.faces.idle);
    if (img.getAttribute('src') !== src) { img.src = src; img.style.animation = 'none'; void img.offsetWidth; img.style.animation = ''; }
    BT.who.querySelector('b').textContent = u.name;
    BT.who.querySelector('.tag span').outerHTML = `<span class="${extra ? 'om' : ''}">${esc(extra || `${u.persona} · Lv ${u.lvl}`)}</span>`;
    BT.cmd.hidden = false;
    BT.root.classList.add('menu-open');
  }
  /* A slanted list in the command panel. items: { v, label, icon, right, rcls, desc, off, offWhy, cls, wide } */
  function listMenu({ items, cls = '', back = false, title = '', start = 0, onSel = null, name = 'list' }) {
    return new Promise(resolve => {
      BT.body.innerHTML = `${title ? `<p class="bt-hint" style="margin:0 0 8px">${title}</p>` : ''}<ul class="bt-menu ${cls}">${items.map((it, i) => `<li style="--i:${i}" class="${it.wide ? 'wide' : ''}"><button type="button" class="bt-mi ${it.cls || ''}${it.off ? ' off' : ''}" data-v="${esc(it.v)}">${it.icon ? ART.icon(it.icon) : ''}<span>${esc(it.label)}</span>${it.right ? `<span class="r ${it.rcls || ''}">${it.right}</span>` : ''}</button></li>`).join('')}</ul>
        <p class="bt-desc"></p>${back ? '<button type="button" class="bt-back" data-back>‹ Back</button>' : ''}<p class="bt-hint">↑↓ choose · Enter confirm${back ? ' · Esc back' : ''}</p>`;
      const ul = BT.body.querySelector('.bt-menu'), btns = [...ul.querySelectorAll('.bt-mi')], desc = BT.body.querySelector('.bt-desc');
      let i = Math.max(0, Math.min(start, items.length - 1));
      const paint = () => {
        btns.forEach((b, j) => b.classList.toggle('sel', j === i));
        desc.innerHTML = items[i].desc || '';
        const b = btns[i], li = b.parentElement;
        if (ul.scrollHeight > ul.clientHeight) { if (li.offsetTop < ul.scrollTop) ul.scrollTop = li.offsetTop - 4; else if (li.offsetTop + li.offsetHeight > ul.scrollTop + ul.clientHeight) ul.scrollTop = li.offsetTop + li.offsetHeight - ul.clientHeight + 8; }
        if (onSel) onSel(items[i]);
      };
      const done = v => { ctl = null; resolve(v); };
      const grid = cls.includes('root') && phone() ? 2 : 1;
      ctl = {
        kind: 'menu', grid, items,
        move(d) { i = (i + d + items.length * 4) % items.length; sfx('move'); paint(); },
        pick() { const it = items[i]; if (it.off) { sfx('back'); desc.innerHTML = `<b>Can’t</b>${esc(it.offWhy || 'Not now.')}`; return; } sfx('ok'); done(it.v); },
        back: back ? () => { sfx('back'); done(null); } : null,
        pickValue(v) { const j = items.findIndex(it => it.v === v); if (j < 0) return; i = j; paint(); this.pick(); },
        hoverValue(v) { const j = items.findIndex(it => it.v === v); if (j < 0 || j === i) return; i = j; paint(); }
      };
      btns.forEach((b, j) => {
        b.addEventListener('mousedown', ev => ev.preventDefault());
        b.addEventListener('pointerenter', () => { if (i !== j && ctl && ctl.items === items) { i = j; paint(); } });
        b.addEventListener('click', () => { if (ctl && ctl.items === items) { i = j; paint(); ctl.pick(); } });
      });
      const bb = BT.body.querySelector('[data-back]');
      if (bb) { bb.addEventListener('mousedown', ev => ev.preventDefault()); bb.addEventListener('click', () => { if (ctl && ctl.items === items && ctl.back) ctl.back(); }); }
      paint();
      mark('menu');
      mark('menu-' + name);
    });
  }

  function costText(u, sk) {
    if (!sk.cost) return '';
    if (sk.cost.sp) return `${sk.cost.sp} SP`;
    return `${Math.round(u.maxHp * sk.cost.hp / 100)} HP`;
  }
  function affOn(enemy, el) {
    if (!el || !D.elements[el] || el === 'almighty') return '';
    const k = B.known(enemy.kind);
    if (!k[el]) return '?';
    const a = enemy.aff[el] || 'normal';
    return a === 'normal' ? '' : AFF_SHORT[a];
  }
  function plate(u, el) {
    const k = B.known(u.kind);
    const affs = D.affinityOrder.map(x => {
      const a = k[x] ? (u.aff[x] || 'normal') : null;
      return `<span class="bt-aff ${a ? (a === 'normal' ? '' : a) : 'unk'}${x === el ? ' cur' : ''}" title="${D.elements[x].name}">${ART.icon(x)}<em>${a ? AFF_SHORT[a] : '?'}</em></span>`;
    }).join('');
    return `<div class="bt-plate"><b>${esc(u.name)}<small>Lv ${u.lvl}</small></b><div class="bt-affs">${affs}</div></div>`;
  }
  const letters = () => {
    const seen = {}, out = {};
    B.foes().forEach(f => { seen[f.kind] = (seen[f.kind] || 0) + 1; });
    const n = {};
    B.foes().forEach(f => { if (seen[f.kind] > 1) { n[f.kind] = (n[f.kind] || 0) + 1; out[f.id] = ' ' + String.fromCharCode(64 + n[f.kind]); } else out[f.id] = ''; });
    return out;
  };

  /* Choose a target. spec.target: one | all | ally | allies | dead | self | shift | scan. Resolves with an id, 'all', or null (back). */
  function pickTarget(u, spec, title) {
    const t = spec.target;
    if (t === 'self') return Promise.resolve(u.id);
    let items = [];
    const L = letters();
    const foeItem = f => {
      const a = affOn(f, spec.el);
      return { v: f.id, label: f.name + L[f.id], icon: null, right: a ? (a === 'WK' ? 'WEAK' : a) : '', rcls: a === 'WK' ? 'hp' : '', desc: `<b>${esc(f.name)}</b>${f.down ? 'Down. ' : ''}${f.ail ? esc(D.ailments[f.ail.id].name) + '. ' : ''}HP ${Math.round(f.hp / f.maxHp * 100)}%` };
    };
    const allyItem = p => ({ v: p.id, label: p.name, right: p.dead ? 'KO' : `${p.ail ? D.ailments[p.ail.id].name.toUpperCase() + ' · ' : ''}${p.hp}/${p.maxHp}`, rcls: 'hp', desc: `<b>${esc(p.name)}</b>${esc(p.persona)} · SP ${p.sp}/${p.maxSp}${p.ail ? ' · ' + esc(D.ailments[p.ail.id].name) : ''}` });
    const aliveFoes = B.foes().filter(f => !f.dead), party = B.party();
    if (t === 'one') items = aliveFoes.map(foeItem);
    else if (t === 'scan') items = aliveFoes.map(foeItem).concat(party.map(p => Object.assign(allyItem(p), { right: 'Persona', rcls: '' })));
    else if (t === 'all' || t === 'rand') items = [{ v: 'all', label: t === 'rand' ? 'Random foes' : 'All foes', desc: aliveFoes.map(f => f.name).join(', ') }];
    else if (t === 'allies') items = [{ v: 'all', label: 'Whole party', desc: party.filter(p => !p.dead).map(p => p.name).join(', ') }];
    else if (t === 'ally') items = party.filter(p => !p.dead).map(allyItem);
    else if (t === 'dead') items = party.filter(p => p.dead).map(allyItem);
    else if (t === 'shift') items = party.filter(p => B.canShiftTo(p)).map(p => Object.assign(allyItem(p), { desc: `<b>${esc(p.name)}</b>takes the One More with ×${B.S.mods.shiftMult} power.` }));
    if (!items.length) return Promise.resolve(null);
    const highlight = it => {
      clearTargets();
      const set = it.v === 'all' ? (t === 'all' || t === 'rand' ? aliveFoes.map(f => f.id) : party.filter(p => !p.dead).map(p => p.id)) : [it.v];
      items.forEach(x => { const el = BT.enemies.get(x.v) || BT.cards.get(x.v); if (el) el.classList.add('targetable'); });
      set.forEach(id => {
        const en = BT.enemies.get(id), c = BT.cards.get(id);
        if (en) { en.classList.add('targeted'); en.insertAdjacentHTML('beforeend', plate(B.U(id), spec.el)); }
        if (c) c.classList.add('targeted');
      });
    };
    return listMenu({ items, back: true, cls: 'small', title: title || 'Choose a target', onSel: highlight, name: 'target' }).then(v => { clearTargets(); return v; });
  }

  function rootItems(u) {
    const it = [];
    const canShift = B.S.oneMore && B.party().some(p => B.canShiftTo(p));
    if (canShift) it.push({ v: 'shift', label: 'Shift', icon: 'shift', cls: 'shift', wide: true, desc: `<b>Shift</b>Pass the One More to someone who hasn’t gone yet. They hit ×${B.S.mods.shiftMult} harder.` });
    it.push(
      { v: 'attack', label: 'Attack', icon: u.weapon, desc: `<b>Attack</b>${D.elements[u.weapon].name} attack with your weapon. Can crit.` },
      { v: 'skill', label: 'Skill', icon: 'skill', desc: `<b>${esc(u.persona)}</b>Use a Persona skill. Magic costs SP, physical skills cost HP.` },
      { v: 'item', label: 'Item', icon: 'item', desc: '<b>Item</b>' + Object.keys(D.items).map(k => `${D.items[k].name} ×${B.S.items[k] || 0}`).join(' · ') },
      { v: 'guard', label: 'Guard', icon: 'guard', desc: '<b>Guard</b>Halve damage and cover your weakness until your next turn.' },
      { v: 'analyze', label: 'Analyze', icon: 'analyze', desc: '<b>Analyze</b>Fuuka scans a Shadow’s affinities and status, or check an ally’s Persona. Free action.' },
      { v: 'tactics', label: 'Tactics', icon: 'tactics', off: B.party().length < 2, offWhy: 'No one else to give orders to.', desc: '<b>Tactics</b>' + (B.party().filter(p => p.mid !== 'solar').map(p => `${esc(p.name)}: ${esc(D.tactics[tacticOf(p)].short)}`).join(' · ') || 'Solar is alone.') + '. Free action.' },
      { v: 'escape', label: 'Escape', icon: 'escape', wide: true, off: B.S.boss, offWhy: 'There’s no escape from the full moon!', desc: B.S.boss ? '<b>Escape</b>There’s no escape from the full moon!' : '<b>Escape</b>Try to run. Easier when Shadows are Down.' }
    );
    return it;
  }
  async function commandMenu(u) {
    let start = 0;
    for (;;) {
      showWho(u, B.S.oneMore ? '1 MORE!' : '');
      mark('command');
      const items = rootItems(u);
      const c = await listMenu({ items, cls: 'root', start });
      start = items.findIndex(x => x.v === c);
      if (c === 'attack') { const t = await pickTarget(u, { target: 'one', el: u.weapon }, 'Attack → choose a Shadow'); if (t) return { type: 'attack', target: t }; }
      else if (c === 'skill') { const r = await skillMenu(u); if (r) return r; }
      else if (c === 'item') { const r = await itemMenu(u); if (r) return r; }
      else if (c === 'guard') return { type: 'guard' };
      else if (c === 'escape') return { type: 'escape' };
      else if (c === 'shift') { const t = await pickTarget(u, { target: 'shift' }, 'Shift → pass the turn'); if (t) return { type: 'shift', to: t }; }
      else if (c === 'analyze') { const t = await pickTarget(u, { target: 'scan' }, 'Analyze → choose'); if (t) await analyzePanel(t); }
      else if (c === 'tactics') { await tacticsMenu(); if (tacticOf(u) !== 'direct') return null; }
    }
  }
  /* Tactics: pick a member, then their tactic. A free action; if the current member stops being Direct they act at once. */
  async function tacticsMenu() {
    let start = 0;
    for (;;) {
      const mates = B.party().filter(p => p.mid !== 'solar');
      if (!mates.length) return;
      const items = mates.map(p => ({ v: p.mid, label: p.name, right: esc(D.tactics[tacticOf(p)].short), rcls: tacticOf(p) === 'direct' ? '' : 'hp', desc: `<b>${esc(p.name)}</b>${esc(D.tactics[tacticOf(p)].name)}: ${esc(D.tactics[tacticOf(p)].desc)}` }));
      const who = await listMenu({ items, back: true, cls: 'small', title: 'Tactics → who?', start, name: 'tactics' });
      if (who == null) return;
      start = items.findIndex(x => x.v === who);
      const cur = save.tactics[who] || 'direct';
      const titems = TACTIC_ORDER.map(k => ({ v: k, label: D.tactics[k].name, icon: 'tactics', right: k === cur ? '✓' : '', desc: `<b>${esc(D.tactics[k].name)}</b>${esc(D.tactics[k].desc)}` }));
      const pickT = await listMenu({ items: titems, back: true, cls: 'small', title: `${esc(member(who).name)} → tactic`, start: TACTIC_ORDER.indexOf(cur), name: 'tactic' });
      if (pickT) {
        if (pickT === 'direct') delete save.tactics[who]; else save.tactics[who] = pickT;
        persist();
        B.party().forEach(p => paintCard(p));
        nav('tactics');
        log(`${member(who).name}: ${D.tactics[pickT].name}.`);
        mark('tactic-set'); mark('tactic-' + pickT);
      }
    }
  }
  async function skillMenu(u) {
    let start = 0;
    for (;;) {
      const deadCount = B.party().filter(p => p.dead).length;
      const items = u.skills.map(id => {
        const sk = D.skills[id], pay = B.canPay(u, sk), noDead = sk.target === 'dead' && !deadCount;
        return { v: id, label: sk.name, icon: sk.el, right: costText(u, sk), rcls: sk.cost && sk.cost.hp ? 'hp' : '', off: !pay || noDead, offWhy: noDead ? 'No one needs reviving.' : `Not enough ${sk.cost && sk.cost.hp ? 'HP' : 'SP'}.`, desc: `<b>${esc(sk.name)}</b>${esc(sk.desc)}` };
      });
      const s = await listMenu({ items, back: true, cls: 'small scroll', title: `${esc(u.persona)} · SP ${u.sp}/${u.maxSp}`, start, name: 'skill' });
      if (s == null) return null;
      start = items.findIndex(x => x.v === s);
      const sk = D.skills[s];
      const t = await pickTarget(u, sk, `${sk.name} → choose`);
      if (t != null) return { type: 'skill', skill: s, target: t };
    }
  }
  async function itemMenu(u) {
    for (;;) {
      const deadCount = B.party().filter(p => p.dead).length;
      const items = Object.keys(D.items).map(id => {
        const it = D.items[id], n = B.S.items[id] || 0, noDead = it.target === 'dead' && !deadCount;
        return { v: id, label: it.name, icon: 'item', right: `×${n}`, off: !n || noDead, offWhy: !n ? 'None left.' : 'No one needs reviving.', desc: `<b>${esc(it.name)}</b>${esc(it.desc)}` };
      });
      const v = await listMenu({ items, back: true, cls: 'small', title: 'Items' });
      if (v == null) return null;
      const t = await pickTarget(u, { target: D.items[v].target }, `${D.items[v].name} → choose`);
      if (t != null) return { type: 'item', item: v, target: t };
    }
  }
  function statusLine(u, immune) {
    const a = u.ail && D.ailments[u.ail.id];
    return `<div class="bt-status">${a ? `<span class="bt-tag ail" style="--c:${a.color}">${ART.icon(u.ail.id)}<span>${esc(a.name)}</span><em>${u.ail.t}</em></span><p>${esc(a.desc)} ${u.ail.t} turn${u.ail.t === 1 ? '' : 's'} left.</p>` : '<p><b>Status</b> No ailments.</p>'}${immune && immune.length ? `<p class="imm">Immune to ${immune.map(x => esc(D.ailments[x].name)).join(', ')}.</p>` : ''}</div>`;
  }
  function analyzePanel(id) {
    const u = B.U(id);
    return new Promise(res => {
      let html;
      if (u.side === 'enemy') {
        B.analyze(id);
        nav('analyze');
        mark('analyze');
        if (u.ail) mark('analyze-status');
        const d = D.enemies[u.kind];
        const k = B.known(u.kind);
        html = `<h2><small>Analyze · ${esc(d.arcana)} · Lv ${u.lvl}</small>${esc(u.name)}</h2>
          <div class="bt-expbar" style="margin:12px 0 4px"><i style="width:${u.hp / u.maxHp * 100}%;background:linear-gradient(90deg,#ff3b6b,#ff8cc0)"></i></div>
          <div class="bt-explabel"><span>HP ${Math.round(u.hp / u.maxHp * 100)}%</span><span>${u.down ? 'Down' : ''}${u.veil ? ` · Veil: ${D.elements[u.veil].name}` : ''}</span></div>
          ${statusLine(u, d.ailImmune)}
          <div class="bt-affs">${D.affinityOrder.map(x => { const a = k[x] ? (u.aff[x] || 'normal') : null; return `<span class="bt-aff ${a ? (a === 'normal' ? '' : a) : 'unk'}">${ART.icon(x)}<em>${a ? AFF_SHORT[a] : '?'}</em>${D.elements[x].name}</span>`; }).join('')}</div>
          <p class="note">${esc(d.note)}</p>`;
      } else {
        const per = Object.values(D.personas).find(p => p.name === u.persona);
        mark('persona-view');
        html = `<div class="bt-pv"><img src="${per.art}" alt=""><div>
          <h2><small>Persona · ${esc(per.arcana)} · ${esc(u.name)}</small>${esc(per.name)}</h2>
          <div class="bt-affs">${D.affinityOrder.map(x => { const a = per.aff[x] || 'normal'; return `<span class="bt-aff ${a === 'normal' ? '' : a}">${ART.icon(x)}<em>${AFF_SHORT[a]}</em>${D.elements[x].name}</span>`; }).join('')}</div>
          <ul class="bt-chips">${u.skills.map(s => `<li>${ART.icon(D.skills[s].el)}<span>${esc(D.skills[s].name)}</span></li>`).join('')}</ul>
          <p class="note">${esc(per.blurb || '')}</p>
          ${statusLine(u)}
          <p class="note">St ${u.st} · Ma ${u.ma} · En ${u.en} · Ag ${u.ag} · Lu ${u.lu}</p></div></div>`;
      }
      const p = document.createElement('div');
      p.className = 'bt-panel';
      p.innerHTML = `<div class="bt-card-lg">${html}<div style="margin-top:14px"><button type="button" class="bt-btn pink"><span>Close</span></button></div></div>`;
      BT.root.appendChild(p);
      const close = () => { p.remove(); res(); };
      p.querySelector('button').addEventListener('click', () => { sfx('back'); close(); });
      p.addEventListener('click', ev => { if (ev.target === p) { sfx('back'); close(); } });
      ctl = { kind: 'panel', move() {}, pick: () => { sfx('back'); close(); }, back: () => { sfx('back'); close(); } };
    });
  }
  function alloutPrompt(u) {
    return new Promise(res => {
      hideMenu();
      const parts = B.party().filter(p => !p.dead);
      const p = document.createElement('div');
      p.className = 'bt-prompt';
      p.innerHTML = `<div class="bt-prompt-inner"><div class="bt-faces">${parts.map(x => `<div><img src="${pimg(x.mid, member(x.mid).faces.idle)}" alt="" style="--fx:${member(x.mid).face[0]}%"></div>`).join('')}</div>
        <h2><small>They’re all down</small>ALL-OUT ATTACK?</h2>
        <div class="row"><button type="button" class="bt-btn pink on" data-v="1"><span>Go!</span></button><button type="button" class="bt-btn" data-v="0"><span>Not yet</span></button></div></div>`;
      BT.root.appendChild(p);
      const btns = [...p.querySelectorAll('[data-v]')];
      let i = 0;
      const paint = () => btns.forEach((b, j) => b.classList.toggle('on', j === i));
      const done = v => { ctl = null; p.remove(); res(v); };
      btns.forEach((b, j) => { b.addEventListener('mousedown', ev => ev.preventDefault()); b.addEventListener('pointerenter', () => { i = j; paint(); }); b.addEventListener('click', () => { sfx('ok'); done(b.dataset.v === '1'); }); });
      ctl = { kind: 'allout', move(d) { i = (i + d + 2) % 2; sfx('move'); paint(); }, pick() { sfx('ok'); done(i === 0); }, back() { sfx('back'); done(false); }, pickValue(v) { done(v === '1'); } };
      mark('allout-prompt');
    });
  }

  async function partyTurn(u, forced) {
    if (forced === 'charm') { setActive(u); await sleep(300); await play(B.forcedAct()); return; }
    let said = false;
    for (let n = 0; n < 12; n++) {
      setActive(u);
      paintCard(u);
      let tac = tacticOf(u), action = null;
      if (tac === 'direct') {
        if (!said) { log(`${u.name}: “${member(u.mid).lines.turn}”`); said = true; }
        action = await commandMenu(u);
        hideMenu();
        tac = tacticOf(u);
      }
      if (!action) {
        // Tactics: the member acts on their own.
        action = B.autoAction(u, tac);
        showWho(u, D.tactics[tac].name);
        BT.body.innerHTML = '';
        await sleep(420);
        hideMenu();
        mark('auto'); mark('auto-' + tac); mark('auto-' + u.mid);
      }
      const evs = B.act(action);
      await play(evs);
      if (B.outcome()) return;
      if (B.S.alloutReady) {
        const go = await alloutPrompt(u);
        if (go) { await play(B.allOut()); return; }
        await play(B.declineAllOut());
      }
      if (B.S.shifted) { B.S.shifted = false; u = B.S.cur; log(`${u.name}: “${member(u.mid).lines.turn}”`); continue; }
      if (B.S.oneMore && B.S.cur === u && !u.dead) continue;
      return;
    }
  }

  async function intro(floor, group) {
    const el = document.createElement('div');
    if (floor.boss) {
      el.className = 'bt-moon';
      const d = D.enemies[group[0]];
      el.innerHTML = `<div><p>Full moon · ${esc(d.arcana)}</p><h2>${esc(d.name.toUpperCase())}</h2></div>`;
      el.style.animationDuration = `${2600 / speed()}ms`;
      BT.root.appendChild(el);
      await sleep(2400);
    } else {
      el.className = 'bt-intro';
      el.innerHTML = `<i style="--d:0s"></i><i style="--d:.07s"></i><i style="--d:.14s"></i><b>${esc(floor.label)} · ${esc(floor.block.toUpperCase())}<small>Shadows ahead</small></b>`;
      el.querySelectorAll('i, b').forEach(x => { x.style.animationDuration = `${1300 / speed()}ms`; });
      BT.root.appendChild(el);
      sfx('escape');
      await sleep(1100);
    }
    el.remove();
  }

  /* ════════════════════════════════════════════════════
     RESULTS + LEVEL UP
     ════════════════════════════════════════════════════ */
  /* Everyone in the party gets the full EXP; the bench gets a share so nobody falls behind. Solar's level-ups give skill points. */
  function gainExp(n) {
    const fx = treeFx(), share = D.progression.benchShare;
    const rows = D.party.map(m => {
      const inP = m.id === 'solar' || save.party.includes(m.id);
      const rec = m.id === 'solar' ? save : save.mem[m.id];
      const before = { lvl: rec.lvl, stats: memberStats(m, rec.lvl, fx) };
      const got = inP ? n : Math.round(n * share);
      rec.exp += got;
      let ups = 0;
      while (rec.exp >= need(rec.lvl)) { rec.exp -= need(rec.lvl); rec.lvl++; ups++; if (m.id === 'solar') save.pts += D.progression.pointsPerLevel; }
      return { m, inP, got, ups, before, after: memberStats(m, rec.lvl, fx), lvl: rec.lvl, exp: rec.exp };
    });
    const ups = rows[0].ups;
    return { rows, ups, any: rows.some(r => r.ups), pts: ups * D.progression.pointsPerLevel };
  }
  async function results(floor, out) {
    const g = gainExp(out.exp);
    let bonus = 0;
    if (floor.boss) { bonus = D.progression.bossBonusPoints; save.pts += bonus; save.clears++; }
    const loot = floor.loot || {};
    Object.keys(loot).forEach(k => { run.items[k] = (run.items[k] || 0) + loot[k]; });
    persist();
    if (g.any) mark('levelup');
    let first = true;
    for (;;) {
      const go = await resultsScreen(floor, out, g, bonus, loot, first);
      first = false;
      if (go === 'tree') { await new Promise(r => treeScreen(r)); continue; }
      if (go === 'party') { await new Promise(r => partyScreen(r)); continue; }
      return go;
    }
  }
  function resultsScreen(floor, out, g, bonus, loot, first) {
    screen = 'results';
    root.classList.remove('bt-in-battle');
    music.play('floor');
    if (first && g.any) setTimeout(() => sfx('level'), 500);
    return new Promise(res => {
      const rows = g.rows.filter(r => r.inP).map((r, i) => {
        const m = r.m, b = r.before.stats, a = r.after, pct = Math.round(r.exp / need(r.lvl) * 100);
        const gains = r.ups ? ['hp', 'sp', 'st', 'ma', 'en', 'ag', 'lu'].filter(k => a[k] > b[k]).map(k => `<span>${k.toUpperCase()} <b>+${a[k] - b[k]}</b></span>`).join('') : '';
        return `<div class="bt-res-row" style="animation-delay:${0.15 + i * 0.08}s"><div class="pic"><img src="${pimg(m.id, m.faces.win)}" alt="" style="--fx:${m.face[0]}%;--fy:${m.face[1]}%"></div>
          <div><b>${esc(m.name)}<small>Lv ${r.lvl}</small></b>${r.ups ? '<span class="bt-lvup">LEVEL UP!</span>' : ''}
          <div class="bt-expbar"><i style="width:${pct}%"></i></div>${gains ? `<div class="bt-gains">${gains}</div>` : ''}</div></div>`;
      }).join('') + (g.rows.some(r => !r.inP) ? `<div class="bt-bench"><small>Bench · +${g.rows.find(r => !r.inP).got} EXP</small>${g.rows.filter(r => !r.inP).map(r => `<span${r.ups ? ' class="up"' : ''}><img src="${pimg(r.m.id, r.m.faces.idle)}" alt="" style="--fx:${r.m.face[0]}%;--fy:${r.m.face[1]}%">${esc(r.m.name)} <b>Lv ${r.lvl}${r.ups ? ' ↑' : ''}</b></span>`).join('')}</div>` : '');
      const extra = [];
      if (g.pts) extra.push(`<span class="pts">+${g.pts} Skill Points</span>`);
      if (bonus) extra.push(`<span class="pts">+${bonus} Full-moon bonus</span>`);
      Object.keys(loot).forEach(k => extra.push(`<span>${esc(D.items[k].name)} ×${loot[k]}</span>`));
      const last = run.floor >= D.floors.length - 1;
      const el = show(`<div class="bt-res"><div>
          <h1 class="bt-res-title"><small>${esc(floor.label)} · ${esc(floor.block)}</small>RESULTS</h1>
          <div class="bt-res-exp"><small>EXP</small>+${out.exp}</div>
          <div class="bt-res-extra" style="margin-top:18px">${extra.join('')}</div>
          <div class="bt-res-btns">
            <button type="button" class="bt-btn pink" data-go="next"><span>${last ? 'Finish ›' : 'Next floor ›'}</span></button>
            <button type="button" class="bt-btn" data-go="tree"><span>Haenim’s Tree</span><small>${save.pts} SP</small></button>
            <button type="button" class="bt-btn" data-go="party"><span>Party</span><small>${save.party.length + 1} / 4</small></button>
            ${last ? '' : `<button type="button" class="bt-btn" data-go="leave"><span>Leave Tartarus</span><small>Progress saved · continue from ${esc(D.floors[run.floor + 1].label)}</small></button>`}
          </div></div>
        <div class="bt-res-list">${rows}</div></div>`, 'bt-results');
      el.querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', () => { sfx('ok'); res(b.dataset.go); }));
      buttonNav(el, { start: save.pts > 0 && first ? 1 : 0 });
      mark('results');
    });
  }

  /* ════════════════════════════════════════════════════
     HAENIM'S SKILL TREE
     ════════════════════════════════════════════════════ */
  function treeScreen(onClose) {
    screen = 'tree';
    root.classList.remove('bt-in-battle');
    if (onClose === hub) music.play('title'); else music.play('floor');
    let bi = 0, ni = 0, just = null;
    // Start on the first node you can buy.
    D.tree.some((b, x) => b.nodes.some((n, y) => { if (nodeState(n) === 'avail') { bi = x; ni = y; return true; } return false; }));
    const render = () => {
      const fx = treeFx();
      const node = D.tree[bi].nodes[ni], st = nodeState(node), afford = save.pts >= node.cost;
      const el = show(`${ART.defs()}<img class="bt-tree-art" src="${D.personas.haenim.art}" alt="">
        <div class="bt-tree-head"><button type="button" class="bt-tool" data-act="back"><span>‹ Back</span></button>
          <h1>HAENIM<small>해님 · Fool</small></h1>
          <div class="bt-pts"><span><small>Skill Points</small>${save.pts}</span></div></div>
        <div class="bt-branches">${D.tree.map((b, x) => `<section class="bt-branch" style="--c:${b.color}" aria-label="${esc(b.name)} branch">
          <div class="bt-branch-h">${ART.charm(b.id)}<div><b>${esc(b.name)}</b><span>${esc(b.world)} · ${esc(b.theme)}</span><span>${esc(b.blurb)}</span></div></div>
          ${b.nodes.map((n, y) => `<button type="button" class="bt-node ${nodeState(n)}${x === bi && y === ni ? ' sel' : ''}${just === n.id ? ' just' : ''}" data-b="${x}" data-n="${y}"><span class="gem"></span><b>${esc(n.name)}</b><span class="cost">${nodeState(n) === 'own' ? '✓' : `${n.cost} SP`}</span></button>`).join('')}
        </section>`).join('')}</div>
        <div class="bt-tree-foot"><div><h3>${esc(node.name)}<small>${esc(D.tree[bi].name)} · ${esc(D.tree[bi].world)} · ${node.cost} SP</small></h3><p>${esc(node.desc)}${st === 'lock' ? ' <em>(Unlock the one above it first.)</em>' : ''}</p></div>
          <div class="btns"><button type="button" class="bt-btn pink" data-act="buy"${st !== 'avail' || !afford ? ' disabled' : ''}><span>${st === 'own' ? 'Unlocked' : st === 'lock' ? 'Locked' : afford ? `Unlock · ${node.cost} SP` : `Need ${node.cost} SP`}</span></button>
          <button type="button" class="bt-btn" data-act="refund"${save.nodes.length ? '' : ' disabled'}><span>Refund all</span></button></div>
          <ul class="bt-chips bt-tree-skills"><li class="lbl"><span>Haenim knows</span></li>${solarSkills(fx).map(id => `<li>${ART.icon(D.skills[id].el)}<span>${esc(D.skills[id].name)}</span></li>`).join('')}</ul></div>`, 'bt-tree');
      el.querySelectorAll('.bt-node').forEach(b => {
        b.addEventListener('click', () => {
          const x = +b.dataset.b, y = +b.dataset.n;
          if (x === bi && y === ni) buy(); else { bi = x; ni = y; sfx('move'); just = null; render(); }
        });
      });
      el.querySelector('[data-act="back"]').addEventListener('click', close);
      el.querySelector('[data-act="buy"]').addEventListener('click', buy);
      el.querySelector('[data-act="refund"]').addEventListener('click', () => {
        D.tree.forEach(b => b.nodes.forEach(n => { if (save.nodes.includes(n.id)) save.pts += n.cost; }));
        save.nodes = []; persist(); sfx('back'); just = null; render();
      });
      ctl = {
        kind: 'tree',
        key(e) {
          const k = e.key;
          if (k === 'ArrowLeft' || k === 'ArrowRight') { bi = (bi + (k === 'ArrowLeft' ? -1 : 1) + D.tree.length) % D.tree.length; ni = Math.min(ni, D.tree[bi].nodes.length - 1); sfx('move'); just = null; render(); return true; }
          if (k === 'ArrowUp' || k === 'ArrowDown') { const L = D.tree[bi].nodes.length; ni = (ni + (k === 'ArrowUp' ? -1 : 1) + L) % L; sfx('move'); just = null; render(); return true; }
          return false;
        },
        move() {}, pick: buy, back: close
      };
      mark('tree');
    };
    function buy() {
      const n = D.tree[bi].nodes[ni];
      if (nodeState(n) !== 'avail' || save.pts < n.cost) { sfx('back'); return; }
      save.pts -= n.cost;
      save.nodes.push(n.id);
      persist();
      sfx('unlock');
      just = n.id;
      mark('tree-buy');
      const nx = D.tree[bi].nodes[ni + 1];
      render();
      if (nx) setTimeout(() => { if (screen === 'tree' && just === n.id) { ni++; just = null; render(); } }, 650);
    }
    function close() { sfx('back'); ctl = null; onClose(); }
    render();
  }

  /* ════════════════════════════════════════════════════
     PERSONA VIEW
     ════════════════════════════════════════════════════ */
  const userName = id => (member(id) || {}).name || (id ? id[0].toUpperCase() + id.slice(1) : '');
  function personaScreen(onClose) {
    screen = 'personas';
    const list = Object.entries(D.personas).filter(([, p]) => !Object.values(D.personas).some(q => q.evolves && D.personas[q.evolves] === p));
    let i = 0;
    const render = () => {
      const [id, p] = list[i];
      const ev = p.evolves && D.personas[p.evolves];
      const inParty = roster().some(m => m.persona === id);
      const el = show(`<div class="bt-tree-head"><button type="button" class="bt-tool" data-act="back"><span>‹ Back</span></button><h1>PERSONAS<small>${i + 1} / ${list.length}</small></h1></div>
        <div class="bt-pview">
          <div class="bt-pv-art"><img src="${p.art}" alt="${esc(p.name)}"></div>
          <div class="bt-card-lg"><h2><small>${esc(p.arcana)} · ${esc(userName(p.user))}${inParty ? ' · in the party' : ''}</small>${esc(p.name)}${p.ko ? ` <span style="color:var(--gold);font-size:.6em">${esc(p.ko)}</span>` : ''}</h2>
            <div class="bt-affs">${D.affinityOrder.map(x => { const a = p.aff[x] || 'normal'; return `<span class="bt-aff ${a === 'normal' ? '' : a}">${ART.icon(x)}<em>${AFF_SHORT[a]}</em>${D.elements[x].name}</span>`; }).join('')}</div>
            <p class="note">${esc(p.blurb || '')}</p>
            ${ev ? `<div class="bt-evo"><img src="${ev.art}" alt=""><p><b>Evolves into ${esc(ev.name)}</b>${esc(ev.blurb || '')}</p></div>` : ''}
            <div class="bt-res-btns"><button type="button" class="bt-btn" data-act="prev"><span>‹ Prev</span></button><button type="button" class="bt-btn pink" data-act="next"><span>Next ›</span></button>${id === 'haenim' ? '<button type="button" class="bt-btn" data-act="awaken"><span>Replay awakening</span></button>' : ''}</div>
          </div></div>`, 'bt-tree bt-personas');
      el.querySelector('[data-act="back"]').addEventListener('click', close);
      el.querySelector('[data-act="prev"]').addEventListener('click', () => step(-1));
      el.querySelector('[data-act="next"]').addEventListener('click', () => step(1));
      const aw = el.querySelector('[data-act="awaken"]');
      if (aw) aw.addEventListener('click', async () => { sfx('ok'); if (FX) FX.setSpeed(speed); await awakening(el); render(); });
      ctl = { kind: 'personas', move: d => step(d), pick: () => step(1), back: close };
      mark('personas');
    };
    const step = d => { i = (i + d + list.length) % list.length; sfx('move'); render(); };
    function close() { sfx('back'); ctl = null; onClose(); }
    render();
  }

  /* ── Boot ─────────────────────────────────────────── */
  window.FemcBattle = {
    get B() { return B; }, get save() { return save; }, get run() { return run; }, get ctl() { return ctl; },
    screen: () => screen, marks, freeze() { frozen = true; if (FX) FX.pause(); }, unfreeze() { frozen = false; if (FX) FX.resume(); },
    awakening: () => awakening(app.firstElementChild || app),
    reloadSave() { save = loadSave(); }
  };
  if (FX) FX.setSpeed(speed);
  hub();
})();
