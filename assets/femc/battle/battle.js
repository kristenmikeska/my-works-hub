/* FEMC battle: screens, battle UI, menus, Haenim's skill tree, the Tartarus node map, shops, equipment, Full Moon Operations,
   Persona evolutions and Haenim's forms.
   Rules live in engine.js (battles, growth) and map.js (node maps), content in data.js, the save's shape in save.js, art in
   shadows.js / icons.js, effects in fx.js.
   Two ways this page runs:
   - Story fights (embedded): the life sim (femc-game.html) opens femc-battle.html?embed=1 in a full-screen same-origin iframe
     during its Dark Hour transition and talks to it through window.parent.FemcBridge (ui.js): handoff() is the request
     (FEMC-GAME-HANDOFF.md: a Tartarus night, a full-moon operation or a scripted story fight), battleSave() / carry() the
     playthrough's battle save (levels, EXP, Haenim's tree, Personas, equipment, materials, access point; it lives inside the
     life sim's save slot as S.battleSave), saveBattle(save) writes it back after every change, settings() / setSettings(patch)
     the one settings store, openSettings(onClose) the game's settings panel, ready() when the first screen is up and
     finish(result) with the contract's `result` when the fight is over (the life sim then fades back to the exact line).
     A playthrough's first fight seeds the battle save from the game's date (save.js forRun), or on New Game+ from the
     previous playthrough's (carry). On every handoff the life sim's party, items, yen, gear, date, floor cap, cleared
     operations, memory fragments and Solar's condition replace the battle save's own (the life sim is the source of truth
     for those); levels, the tree and equipment stay the battle game's. See the HANDOFF section near the end.
   - Practice mode: femc-battle.html on its own (the title screen's Practice link adds ?practice=1). The battle prototype as
     before: its own hub, shops, operations and save slots, saved in localStorage 'kg-femc-battle-proto' only (never the
     story's save, never v1's kg-femc-game). The old page-jump handoff URL (?from=game) now just goes back to femc-game.html,
     which picks the fight up itself.
   Menus: in story fights every party / equipment / Persona / memories screen (Tartarus's hub and access points, a fight's
   results, Get Ready before a boss) is the game's one field menu (menu.js), opened over this frame through
   BR.openMenu (fieldMenu below); the screens further down are practice mode's. Haenim's tree stays this page's own until
   the skill system replaces it (menu.js SKILLS).
   Settings: both ways read the game's one settings store ('kg-femc-revamp-settings', core.js DEFAULTS) through pullSettings()
   and write changes back through pushSettings(), so text speed, battle speed, cut-ins, volume, difficulty and the rest are
   the same everywhere.
   Test hooks: ?seed=N (repeatable fights), ?speed=N (animation speed), ?fps=1 (frame meter), window.FemcBattle (state + freeze for screenshots). */
(() => {
  const D = window.FEMC_BATTLE_DATA, E = window.FemcBattleEngine, ART = window.FemcBattleArt, FX = window.FemcFX, MAP = window.FemcTartarusMap, ICON = window.FemcIcons, BS = window.FemcBattleSave;
  const BLD = window.FemcBuild || null; // naginatas, Revelation cards, Shuffle Time, bond perks (build.js)
  const BDS = window.FemcBonds || null; // bond skills: Solar and a partner (bonds.js)
  const TT = window.FemcTartarus || null; // Tartarus's newer rooms, puzzles, events, loot and chatter (tartarus.js)
  const PROTO_KEY = 'kg-femc-battle-proto', UNI_KEY = 'kg-femc-revamp-settings';
  // The old page-jump handoff: the life sim now runs the fight in its own page.
  if (/[?&]from=game\b/.test(location.search)) { location.replace('femc-game.html'); return; }
  const BR = (() => { if (!/[?&]embed=1\b/.test(location.search) || window.parent === window) return null; try { return window.parent.FemcBridge || null; } catch (e) { return null; } })();
  const HO = (() => {
    if (!BR) return null;
    try { const h = BR.handoff(); return h && h.request && ['pending', 'done'].includes(h.status) ? h : null; } catch (e) { return null; }
  })();
  if (BR && !HO) { try { BR.finish(null); } catch (e) {} return; }
  if (HO && HO.status === 'done') { BR.finish(HO.result); return; }
  if (BR) document.documentElement.classList.add('bt-embed');
  const KEY = PROTO_KEY;
  // Memory cards without art yet: swap in a placeholder card (data.js memoryPlaceholder) the moment the image fails to load.
  document.addEventListener('error', e => {
    const t = e.target, m = t && t.tagName === 'IMG' && !t.dataset.ph && /memories\/([a-z0-9-]+?)(-wide)?\.webp/.exec(t.getAttribute('src') || '');
    if (m && D.memoryPlaceholder) { t.dataset.ph = '1'; t.src = D.memoryPlaceholder(m[1]); return; }
    // No finish-card art for a member (the searchers, so far): their portrait stands in.
    const f = t && t.tagName === 'IMG' && !t.dataset.ph && /art\/finish\/([a-z]+)\.webp/.exec(t.getAttribute('src') || '');
    if (f && D.party.some(x => x.id === f[1])) { t.dataset.ph = '1'; t.src = `${D.portraits}${f[1]}/serious.webp`; }
  }, true);
  const params = new URLSearchParams(location.search);
  const app = document.getElementById('bt-app');
  const root = document.documentElement;
  const rand = params.has('seed') ? E.rng(+params.get('seed') || 1) : Math.random;
  const testSpeed = +params.get('speed') || 0;
  const V = () => (window.FemcMode && window.FemcMode.v) || 1;
  const pimg = (id, face) => `${D.portraits}${id}/${face}.webp?v=${V()}`;
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const member = mid => D.party.find(m => m.id === mid);
  // Who this page deals with: the prototype leaves the searchers out (they only fight in the life sim, once awake).
  const usable = m => (HO ? hoAvail().includes(m.id) : !m.searcher);
  /* Portrait crops. An <img class="fc"> inside a box with class "fcb" is scaled and placed from the face-focus table (data.js
     faceFocus) so the eyes sit on the box's eye line and the whole face shows; each box sets its framing in CSS (--zy, --zk). */
  const focusOf = (id, face) => { const f = D.faceFocus[id] || { x: 50, y: 40, s: 25, ar: 1.1 }, a = f.alt && f.alt[face]; return a ? Object.assign({}, f, a) : f; };
  const fvars = (id, face) => { const f = focusOf(id, face); return `--fx:${f.x};--fy:${f.y};--fs:${(f.s / 100).toFixed(3)};--ar:${f.ar}`; };
  const fimg = (id, face, alt = '', cls = '') => `<img class="fc${cls ? ' ' + cls : ''}" src="${pimg(id, face)}" alt="${esc(alt)}" style="${fvars(id, face)}" draggable="false">`;
  const setFace = (img, id, face) => { if (!img) return; img.src = pimg(id, face); img.style.cssText = fvars(id, face); };
  const phone = () => matchMedia('(max-width: 760px), (max-width: 1100px) and (max-aspect-ratio: 4/5)').matches; // phones, and tablets held upright
  const pickOne = a => Array.isArray(a) ? a[Math.floor(Math.random() * a.length)] : a;
  const yen = n => `¥${Math.round(n).toLocaleString('en-US')}`;
  const SHADOW_DIR = 'assets/femc/battle/art/shadows/';
  /* Battle art version: bump when the Shadow / Persona art in assets/femc/battle/art/ is regenerated, so browsers refetch it. */
  const ART_V = 32;
  /* Status art (tools/femc-icons.py): sticker icons for the ailments and the buff / debuff arrows, and the Tartarus map's room
     glyphs. A status chip shows its icon in place of the old name or ATK / DEF / AGI text (the name stays in its title). */
  const ICON_DIR = 'assets/femc/battle/art/icons/';
  const stIco = k => `<img class="bt-sti" src="${ICON_DIR}${k}.webp?v=${ART_V}" alt="" draggable="false">`;
  const buffIco = (k, v) => stIco(`${k}-${v > 0 ? 'up' : 'down'}`);
  const ROOM_ART = new Set(['room-shadow', 'room-chest', 'room-locked', 'room-clock', 'room-access', 'room-stairs', 'room-event',
    'room-guardian', 'room-vault', 'room-puzzle', 'room-rest', 'room-rare', 'room-trap', 'room-altar', 'room-crack', 'room-orchid']); // sheet 2: batch 48
  const sart = slug => `${SHADOW_DIR}${slug}.webp?v=${V()}.${ART_V}`;
  Object.values(D.personas).forEach(p => { if (p.art && !p.art.startsWith('data:') && !p.art.includes('?')) p.art += `?v=${ART_V}`; });
  // Theurgy and Evoker sheet art (data.js paths are bare) get the art version too.
  const artV = x => (typeof x === 'string' && !x.startsWith('data:') && !x.includes('?') ? `${x}?v=${ART_V}` : x);
  const verTh = T => {
    if (!T) return;
    T.img = artV(T.img);
    if (T.sheet) T.sheet.frames = T.sheet.frames.map(artV);
    if (T.sequence) T.sequence = T.sequence.map(f => (f && typeof f === 'object' ? Object.assign({}, f, { src: artV(f.src) }) : artV(f)));
    if (T.layers) ['bg', 'persona', 'char'].forEach(k => { const v = T.layers[k]; if (v && typeof v === 'object') v.src = artV(v.src); else if (v) T.layers[k] = artV(v); });
  };
  D.party.forEach(m => { verTh(m.theurgy); Object.values((m.theurgy && m.theurgy.forms) || {}).forEach(verTh); if (m.evoker) { if (m.evoker.frames) m.evoker.frames = m.evoker.frames.map(artV); if (m.evoker.shot) m.evoker.shot = artV(m.evoker.shot); } });
  const FINISH_DIR = 'assets/femc/battle/art/finish/', SUMMON_DIR = 'assets/femc/battle/art/summon/';
  // Searchers' finish cards (Kat's <name>-alloutattack.png, cut by tools/femc-cards.py): all four have one now; a searcher
  // without one would use their portrait. Searchers' cards carry ART_V (the S.E.E.S. ones are older and unchanged).
  const FINISH_CARDS = new Set(['haechan', 'jungwon', 'jihoon', 'minji']);
  const finishArt = mid => ((member(mid) || {}).searcher ? (FINISH_CARDS.has(mid) ? `${FINISH_DIR}${mid}.webp?v=${ART_V}` : pimg(mid, 'serious')) : FINISH_DIR + mid + '.webp');
  // Full-body weapon stances belong on the battlefield, separate from face crops and finish cards.
  const FIELD_POSES = new Set(['solar', 'akihiko', 'junpei', 'yukari', 'aigis', 'mitsuru', 'shinjiro', 'koromaru']);
  /* Fighter pose sheets (Kat's <name>-posesheet.png, cut by tools/femc-shadow-poses.py into poses/<mid>-pose-0..5.webp:
     idle, Evoker raised, weapon attack, spell, hurt, victory). They play through the Shadow pose controller below; the
     idle frame is the stance. The number scales the figure so its size matches the stance it replaces (or, for the
     searchers, the S.E.E.S. figures): frames sit on one canvas per member, framed in the stance box like the stances.
     Members without a sheet keep their static stance (or nothing, like Ken). */
  // Measured 2026-10-24 (figure height on the field, head to feet, idle frame): Junpei, Mitsuru and Shinjiro drew about 60% of the
  // others' height (their canvases are wide for the weapon), Aigis about 85%; they were raised to match (tests/femc_bonds.py --only poses).
  const FIGHTER_POSES = { solar: 1.3, akihiko: 1, yukari: 1.04, junpei: 1.42, mitsuru: 1.4, aigis: 1.18, koromaru: 0.87, shinjiro: 1.51, haechan: 1, jungwon: 1, jihoon: 0.92, minji: 0.97 };
  const FIGHTER_STATES = { attack: [2], cast: [3], hurt: [4], evoke: [1], win: [5] };
  /* Wardrobe looks from the life sim (game/cosmetics.js battle(), read once per frame): an outfit's pose folder per member
     (same six frames and canvas as the member's own sheet) and CSS for the battle theme and Evoker tint. Practice: none. */
  const LOOKS = (() => { try { return window.parent !== window && window.parent.FemcCosmetics ? window.parent.FemcCosmetics.battle() : null; } catch (e) { return null; } })();
  if (LOOKS && LOOKS.css) { const st = document.createElement('style'); st.id = 'bt-looks'; st.textContent = LOOKS.css; document.head.appendChild(st); }
  const posedFrames = mid => [0, 1, 2, 3, 4, 5].map(i => (LOOKS && LOOKS.pose[mid] ? `${LOOKS.pose[mid]}${mid}-pose-${i}.webp?v=${ART_V}` : `assets/femc/battle/art/poses/${mid}-pose-${i}.webp?v=${ART_V}`));
  const fieldPose = mid => (FIGHTER_POSES[mid] ? posedFrames(mid)[0] : `assets/femc/battle/art/poses/${mid}.webp?v=${ART_V}`);
  const hasField = mid => FIELD_POSES.has(mid) || !!FIGHTER_POSES[mid];
  /* Chibi brawl sheets (Kat's <name>-chibi-alloutattack.png, cut by tools/femc-chibi.py into chibi/<mid>-<i>.webp, one
     shared canvas and scale): the number is how many action frames the All-Out cloud cycles (each sheet's last frame is a
     victory pose, cut but not used here). Members without one use their pose-sheet attack frames, or the silhouette (Ken). */
  const CHIBI = { solar: 5, akihiko: 5, yukari: 5, junpei: 5, mitsuru: 5, aigis: 5, koromaru: 5, shinjiro: 5, haechan: 7, jungwon: 5, jihoon: 5, minji: 5 };
  const BRAWL = [2, 3];
  const brawlFrames = mid => (CHIBI[mid] ? Array.from({ length: CHIBI[mid] }, (_, i) => `assets/femc/battle/art/chibi/${mid}-${i}.webp?v=${ART_V}`)
    : FIGHTER_POSES[mid] ? BRAWL.map(i => posedFrames(mid)[i]) : null);
  const AWAKEN = ['solar-01-resolve', 'solar-02-focus', 'solar-03-awakening', 'solar-04-manifestation', 'solar-05-command', 'solar-06-summoned'];
  /* The Evoker for members without their own Evoker art: Kat's prop (batch 37, tools/femc-evoker-prop.py), drawn like the SVG
     below (grip left, barrel to the right, pointing into the face beside it). The SVG stays as the fallback if the art fails. */
  const EVOKER_ART = `${SUMMON_DIR}evoker-prop.webp?v=${ART_V}`;
  /* A stylized Evoker (the fallback). */
  const EVOKER_SVG = 'data:image/svg+xml,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 110"><defs><linearGradient id="m" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f7f9ff"/><stop offset=".35" stop-color="#c9d0dc"/><stop offset=".7" stop-color="#8a93a6"/><stop offset="1" stop-color="#4b5263"/></linearGradient><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3a404e"/><stop offset="1" stop-color="#14171f"/></linearGradient></defs><path d="M214 30H70l-10 5v22h34l6 7h20l7-7h87z" fill="url(#m)" stroke="#12151c" stroke-width="3" stroke-linejoin="round"/><path d="M214 30v27" stroke="#12151c" stroke-width="5"/><path d="M78 36h126" stroke="#fff" stroke-opacity=".85" stroke-width="2"/><path d="M84 44h120M84 50h120" stroke="#5a6274" stroke-width="1.2"/><path d="M62 57h32l-16 48H38z" fill="url(#g)" stroke="#0b0d12" stroke-width="3" stroke-linejoin="round"/><path d="M50 70h30M46 80h30M42 90h30" stroke="#5a6274" stroke-width="1.5"/><path d="M98 57q-2 18 16 18h6" fill="none" stroke="#12151c" stroke-width="4"/><path d="M104 60l4 10" stroke="#12151c" stroke-width="3"/><rect x="150" y="40" width="40" height="4" rx="1" fill="#ff4f9e"/></svg>`);
  const tacticOf = u => (u.mid === 'solar' ? 'direct' : (save.tactics[u.mid] || 'direct'));
  /* The navigator: Fuuka, or Mitsuru before Fuuka joins (handoff request.navigator). Mitsuru has no 'happy' face. */
  const NAVI = HO && HO.request.navigator === 'mitsuru' ? { id: 'mitsuru', name: 'Mitsuru' } : { id: 'fuuka', name: 'Fuuka' };
  const navFace = f => (NAVI.id === 'fuuka' ? f : ({ happy: 'neutral' }[f] || f || 'neutral'));
  const AFF_SHORT = { normal: '–', weak: 'WK', resist: 'RS', null: 'NU', drain: 'DR', repel: 'RP' };
  const AFF_WORD = { weak: 'WEAK!', resist: 'RESIST', null: 'NULL', drain: 'DRAIN', repel: 'REPEL' };
  const STAT_SHORT = { atk: 'ATK', def: 'DEF', agi: 'AGI' };

  /* ── Save ─────────────────────────────────────────── */
  // The save's shape (fresh, normalize, fromRaw, seeding, New Game+ carry) lives in save.js, shared with the life sim's menu.
  // reached: the floor id (e.g. 'f9') of the last access point Solar touched, like P3's access points; null = start at the bottom.
  const { SETTINGS, SETTING_OK, PREFS, fresh, normalize, fromRaw } = BS;
  // Records exist before recruitment. Catch up each new member once, including old saves,
  // without repeatedly scaling benched members or discarding their earned EXP.
  function catchUpRecruits(s, ids, phase, encounterLevel = 0) {
    const done = new Set(Array.isArray(s.recruitmentChecks) ? s.recruitmentChecks : []);
    const floor = Math.max(D.progression.startLevel, s.lvl - 1, encounterLevel);
    for (const mid of ids) {
      if (mid === 'solar' || !member(mid) || D.defaultParty.includes(mid)) continue;
      const key = `${phase}:${mid}`;
      if (done.has(key)) continue;
      const rec = s.mem[mid] || (s.mem[mid] = { lvl: floor, exp: 0 });
      rec.lvl = Math.max(rec.lvl || D.progression.startLevel, floor);
      done.add(key);
    }
    s.recruitmentChecks = [...done];
  }
  function loadSave() {
    if (HO) {
      // The story's battle save comes from the life sim's save slot (or is seeded / carried over by save.js).
      let prefs = null; try { prefs = JSON.parse(localStorage.getItem(PROTO_KEY) || 'null'); } catch (e) {}
      return BS.forRun({ save: BR.battleSave(), carry: BR.carry(), day: (HO.date && HO.date.day) || 0, prefs }).save;
    }
    try {
      const raw = localStorage.getItem(KEY), s = JSON.parse(raw || 'null');
      if (s && [1, 2, 3, 4].includes(s.v)) {
        // Keep a copy of a pre-v4 save before upgrading it (once per old version).
        if (s.v < 4) { const bk = `${KEY}-backup-v${s.v}`; if (!localStorage.getItem(bk)) localStorage.setItem(bk, raw); }
        return fromRaw(s);
      }
    } catch (e) {}
    return normalize(fresh());
  }
  let save = loadSave();
  /* Settings: the game's one store. Story fights read it from the life sim; practice reads the same key directly. */
  const readUni = () => { if (BR) { try { return JSON.parse(JSON.stringify(BR.settings() || {})); } catch (e) { return {}; } } try { return JSON.parse(localStorage.getItem(UNI_KEY) || '{}') || {}; } catch (e) { return {}; } };
  // battle setting (save.settings.<k>) → the store's key
  const UNI = { textSpeed: 'text', sfxVol: 'sfxVol', difficulty: 'difficulty', remember: 'remember', rushWhere: 'rushWhere', rushStop: 'rushStop', shake: 'shake', calm: 'calm', numbers: 'numbers', tips: 'tips', pad: 'pad', showtimes: 'showtimes' };
  function pullSettings() {
    const u = readUni(), st = save.settings;
    Object.entries(UNI).forEach(([k, uk]) => {
      const v = u[uk];
      if (v === undefined) return;
      if (SETTING_OK[k]) { if (SETTING_OK[k].includes(v)) st[k] = v; }
      else if (typeof SETTINGS[k] === 'boolean') { if (typeof v === 'boolean') st[k] = v; }
      else if (typeof v === 'number' && v >= 0 && v <= 100) st[k] = Math.round(v);
    });
    const mv = typeof u.music === 'number' ? u.music : 60;
    save.music = mv > 0;
    st.musicVol = mv > 0 ? mv : (typeof u.musicLast === 'number' && u.musicLast > 0 ? u.musicLast : 60);
    if (typeof u.sfx === 'boolean') save.sfx = u.sfx;
    if ([1, 2, 3].includes(u.battleSpeed)) save.speed = u.battleSpeed;
    if (['always', 'first', 'off'].includes(u.cutins)) save.cutins = u.cutins;
    if (typeof u.perf === 'boolean') save.perf = u.perf;
  }
  function pushSettings() {
    const st = save.settings, patch = { battleSpeed: save.speed || 1, cutins: save.cutins, perf: !!save.perf, sfx: save.sfx !== false, music: save.music === false ? 0 : st.musicVol, musicLast: st.musicVol };
    Object.entries(UNI).forEach(([k, uk]) => { patch[uk] = st[k]; });
    if (BR) { try { BR.setSettings(patch); } catch (e) {} return; }
    try { localStorage.setItem(UNI_KEY, JSON.stringify(Object.assign(readUni(), patch))); } catch (e) {}
  }
  pullSettings();
  const persist = () => {
    try {
      if (BR) BR.saveBattle(JSON.parse(JSON.stringify(save)));
      else localStorage.setItem(KEY, JSON.stringify(save));
    } catch (e) {}
  };
  persist();
  const lsGet = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const musicOn = () => save.music !== false;
  const sfxOn = () => save.sfx !== false && lsGet('kg-femc-sound') !== 'off';
  const ST = () => save.settings;
  /* Rush doubles the battle speed (and skips cut-ins) while it's running. */
  const speed = () => (testSpeed || save.speed || 1) * (rushActive() ? 2 : 1);
  const diff = () => D.difficulty[ST().difficulty] || D.difficulty.normal;
  /* Text speed: how fast Fuuka's lines type out (chars/second, 0 = at once) and how long lines stay up. */
  const textHold = () => ({ slow: 1.6, normal: 1, fast: 0.65, instant: 0.5 })[ST().textSpeed] || 1;
  const typeCps = () => (FX && FX.reduced() ? 0 : ({ slow: 28, normal: 55, fast: 120, instant: 0 })[ST().textSpeed] || 0);
  function typeInto(el, text) {
    if (!el) return 0;
    clearInterval(el._type);
    const cps = typeCps();
    if (!cps || frozen) { el.textContent = text; return 0; }
    let n = 0;
    el.textContent = '';
    const per = Math.max(1, Math.round(cps / 30));
    el._type = setInterval(() => { n = Math.min(text.length, n + per); el.textContent = text.slice(0, n); if (n >= text.length) clearInterval(el._type); }, 1000 / 30);
    return text.length / cps * 1000;
  }
  /* Performance mode: no glass shatter, no ash, fewer particles, no background drift, the small video. */
  const lowEnd = () => (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) || (navigator.deviceMemory && navigator.deviceMemory <= 4);
  const perf = () => !!save.perf;
  const applyPerf = () => {
    root.classList.toggle('bt-perf', perf());
    root.classList.toggle('bt-calm', !!ST().calm);
    root.classList.toggle('bt-noshake', !ST().shake);
    if (FX && FX.setQuality) FX.setQuality(perf() ? 'low' : 'auto');
    if (FX && FX.setCalm) FX.setCalm(ST().calm);
  };
  applyPerf();

  /* ── Timing, freeze (for screenshots) and marks (for tests) ── */
  let frozen = false;
  const marks = {};
  function mark(name) { marks[name] = (marks[name] || 0) + 1; const f = window.__btFreezeAt; if (f === name || f === `${name}#${marks[name]}`) frozen = true; }
  // paused: a panel (Settings, the log, help) is open over a battle; the battle waits.
  let paused = 0;
  /* Battle-wide UI state: Rush (stays on between fights until it stops or you turn it off), the current battle's spec,
     its log (last 60 lines), each member's last target, and the Shadow the skill list is marking against. */
  const RUSH = '__rush__';
  let rushOn = false, curSpec = null, menuAbort = null, blog = [], lastTgt = {}, focusId = null, listIdx = 0;
  // A frozen or paused beat waits and resumes; it must not drop its timer, or unfreeze() would leave the cut-in hung.
  const sleep = ms => new Promise(r => setTimeout(function go() { if (frozen || paused) { setTimeout(go, 120); return; } r(); }, ms / speed()));

  /* ── Stills and clips: decode before showing (kept in a cache so the decoded image stays warm) ── */
  const stillCache = new Map();
  function still(src) {
    let e = stillCache.get(src);
    if (!e) {
      const im = new Image(); im.decoding = 'async'; im.src = src;
      e = { im, p: (im.decode ? im.decode() : new Promise(r => { im.onload = r; im.onerror = r; })).catch(() => {}) };
      stillCache.set(src, e);
    }
    return e;
  }
  /* Wait (at most maxWait ms) for these images to be decoded. maxWait 0 just starts the work. */
  function stills(srcs, maxWait = 1500) {
    const all = Promise.all(srcs.filter(Boolean).map(s => still(s).p));
    return maxWait ? Promise.race([all, new Promise(r => setTimeout(r, maxWait))]) : Promise.resolve();
  }
  // The current presentation of each fighter's Theurgy (their Persona form's art, if it has its own); thArt is with theurgyCut.
  const theurgyStills = () => (B ? B.party() : []).flatMap(p => thArt(B.theurgyDef(p)));
  /* Video clips (data.clips): a <video> loaded ahead of time. ready() resolves true once it can play through,
     false on error or after maxWait. The small file is used on phones, low-end devices and in Performance mode. */
  const clipCache = new Map();
  function prepClip(key) {
    const c = D.clips[key];
    if (!c || perf() || (FX && FX.reduced())) return null;
    let e = clipCache.get(key);
    if (e) return e;
    const v = document.createElement('video');
    v.muted = true; v.playsInline = true; v.preload = 'auto'; v.setAttribute('playsinline', ''); v.setAttribute('muted', '');
    v.src = (phone() || lowEnd()) && c.small ? c.small : c.src;
    let state = 'loading';
    const ready = new Promise(r => {
      v.addEventListener('canplaythrough', () => { state = 'ready'; r(true); }, { once: true });
      v.addEventListener('error', () => { state = 'error'; r(false); }, { once: true });
    });
    try { v.load(); } catch (err) {}
    e = { v, c, ready: (ms = c.maxWait || 2500) => (state === 'ready' ? Promise.resolve(true) : state === 'error' ? Promise.resolve(false) : Promise.race([ready, new Promise(r => setTimeout(() => r(false), ms))])) };
    clipCache.set(key, e);
    if (c.last) stills([c.last], 0);
    return e;
  }

  /* ── Music: a track per screen (data.music). A key that's a list rotates: each start takes the next file and never the one
     that just played. The place is kept in localStorage (kg-femc-battle-music) because the life sim opens a fresh battle
     frame for every fight. world(name): Solar's world song for a memory fragment, soft over the screen while the screen's
     track waits; endWorld() fades it out and brings the track back. "Off" keeps the tracks muted so FEMC's own BGM stays
     paused here too. ── */
  const music = (() => {
    const VOL = () => 0.42 * Math.max(0, Math.min(100, ST().musicVol)) / 100, SOFT = 0.6, ROT = 'kg-femc-battle-music', pool = {}, fades = new Map();
    let cur = null, key = null, pending = false, world = null;
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
    // The next file for a rotation id, skipping the file that rotation played last.
    function pick(id, list) {
      list = [].concat(list || []).filter(Boolean);
      if (list.length < 2) return list[0] || null;
      let st = {};
      try { st = JSON.parse(localStorage.getItem(ROT) || '{}') || {}; } catch (e) { st = {}; }
      const r = st.rot || (st.rot = {}), last = st.last || (st.last = {});
      let i = (r[id] || 0) % list.length;
      if (list[i] === last[id]) i = (i + 1) % list.length;
      r[id] = (i + 1) % list.length; last[id] = list[i];
      try { localStorage.setItem(ROT, JSON.stringify(st)); } catch (e) {}
      return list[i];
    }
    function play(k, { restart = false } = {}) {
      if (world) endWorld(300);
      if (k && k === key && cur && !cur.paused && !restart) return;
      key = k;
      const src = k && pick(k, D.music[k]);
      if (!src) { stop(); return; }
      const a = get(src);
      a.muted = !musicOn();
      if (cur && cur !== a) { const old = cur; fade(old, 0, 450, () => old.pause()); }
      if (cur === a && !a.paused && !restart) return;
      cur = a;
      if (restart) { try { a.currentTime = 0; } catch (e) {} }
      a.volume = 0;
      const p = a.play();
      const ok = () => { pending = false; if (world && cur === a) { a.pause(); return; } fade(a, VOL(), 700); }; // a world song took over meanwhile: wait under it
      if (p && p.then) p.then(ok).catch(() => { pending = true; }); else ok();
    }
    function stop() { if (world) endWorld(300); if (cur) { const old = cur; fade(old, 0, 400, () => old.pause()); cur = null; } }
    function startWorld(name) {
      const n = String(name || '').toLowerCase(), src = pick('world:' + n, (D.music.world || {})[n]);
      if (!src) return;
      if (world) { const w = world.a; fade(w, 0, 600, () => w.pause()); }
      const a = new Audio(src);
      a.preload = 'auto'; a.loop = false; a.volume = 0; a.muted = !musicOn();
      const w = world = { a, name: n, src };
      a.addEventListener('ended', () => { if (world === w) endWorld(1800); });
      if (cur && !cur.paused) { const c = cur; fade(c, 0, 1000, () => { if (world) c.pause(); }); }
      const p = a.play();
      if (p && p.then) p.then(() => fade(a, VOL() * SOFT, 2200)).catch(() => {});
    }
    function endWorld(ms = 1800) {
      if (!world) return;
      const a = world.a; world = null;
      fade(a, 0, ms, () => a.pause());
      if (!cur) return;
      cur.muted = !musicOn();
      if (cur.paused) { const c = cur, p = c.play(); if (p && p.then) p.then(() => fade(c, VOL(), ms)).catch(() => {}); } else fade(cur, VOL(), ms);
    }
    const retry = () => { if (pending && key) { const k = key; key = null; cur = null; play(k); } };
    addEventListener('pointerdown', retry, true);
    addEventListener('keydown', retry, true);
    // refresh(): after the Music toggle or the volume slider changed.
    const refresh = () => {
      if (world) { world.a.muted = !musicOn(); clearInterval(fades.get(world.a)); world.a.volume = VOL() * SOFT; if (cur) cur.muted = !musicOn(); return; }
      if (cur) { cur.muted = !musicOn(); clearInterval(fades.get(cur)); cur.volume = VOL(); } else if (key) play(key);
    };
    return { play, stop, refresh, world: startWorld, endWorld, key: () => key,
      state: () => ({ key, src: cur ? cur.getAttribute('src') : null, paused: cur ? cur.paused : null, vol: cur ? cur.volume : null, muted: cur ? cur.muted : null, target: VOL(),
        world: world ? world.name : null, worldSrc: world ? world.src : null, worldVol: world ? world.a.volume : null, worldPaused: world ? world.a.paused : null, soft: SOFT }) };
  })();

  /* ── Sound effects: FEMC's menu sounds when available, otherwise small Web Audio synths ── */
  const sfx = (() => {
    let ctx = null, master = null;
    const ac = () => {
      if (!ctx) { const C = window.AudioContext || window.webkitAudioContext; if (!C) return null; try { ctx = new C(); master = ctx.createGain(); master.connect(ctx.destination); } catch (e) { return null; } }
      if (ctx.state === 'suspended') ctx.resume().catch(() => {});
      master.gain.value = Math.max(0, Math.min(100, ST().sfxVol)) / 100;
      return ctx;
    };
    function tone(f, d, { type = 'square', v = 0.05, to = null, at = 0 } = {}) {
      const c = ac(); if (!c) return;
      const t = c.currentTime + at, o = c.createOscillator(), g = c.createGain();
      o.type = type; o.frequency.setValueAtTime(f, t); if (to) o.frequency.exponentialRampToValueAtTime(to, t + d);
      g.gain.setValueAtTime(v, t); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
      o.connect(g).connect(master); o.start(t); o.stop(t + d + 0.03);
    }
    function noise(d, { v = 0.2, f = 1200, q = 0.8, at = 0, type = 'bandpass' } = {}) {
      const c = ac(); if (!c) return;
      const t = c.currentTime + at, n = Math.floor(c.sampleRate * d), b = c.createBuffer(1, n, c.sampleRate), ch = b.getChannelData(0);
      for (let i = 0; i < n; i++) ch[i] = (Math.random() * 2 - 1) * (1 - i / n);
      const s = c.createBufferSource(), fl = c.createBiquadFilter(), g = c.createGain();
      s.buffer = b; fl.type = type; fl.frequency.value = f; fl.Q.value = q; g.gain.value = v;
      s.connect(fl).connect(g).connect(master); s.start(t);
    }
    // FEMC's own menu sounds have no volume control: below 100% SFX volume the synth versions play instead.
    const femc = name => { if (ST().sfxVol >= 100 && window.FemcMode && window.FemcMode.sfx) { window.FemcMode.sfx(name); return true; } return false; };
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
      // Theurgy ready: a quick rising shimmer and a bell.
      thready: () => { [1046, 1318, 1568, 2093].forEach((f, i) => tone(f, 0.12, { type: 'triangle', v: 0.045, at: i * 0.045 })); tone(2637, 0.7, { type: 'sine', v: 0.05, at: 0.18 }); tone(3951, 0.45, { type: 'sine', v: 0.02, at: 0.2 }); },
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
    return name => { if (!sfxOn() || !S[name] || ST().sfxVol <= 0) return; try { S[name](); } catch (e) {} };
  })();

  /* ── Party, levels and Haenim's tree (the math lives in engine.js) ── */
  const need = lvl => D.progression.expToNext(lvl);
  const treeFx = (nodes = save.nodes) => E.treeFx(nodes);
  const memberStats = (m, lvl, fx) => E.statsFor(m.id, save, lvl, fx);
  // Solar's eight slots (plus her form's signature), the skill system's kit (engine.js kitFor).
  const solarSkills = fx => { const k = E.kitFor('solar', save, save.lvl, fx); return k.slots.concat(k.sig ? [k.sig] : []); };
  // A skill's icon: Kat's skills have their own (icons.js sk-*), the rest show their element.
  const skIcon = id => { const sk = D.skills[id] || {}; return sk.icon && ICON ? ICON.svg(sk.icon, null, 'bt-ico sk') : ART.icon(sk.el); };
  /* Each member's own level (Solar's is the save's). */
  const lvOf = id => E.lvlOf(save, id);
  const roster = () => [D.party[0]].concat(save.party.map(member).filter(Boolean));
  const perOf = mid => D.personas[E.personaId(mid, save)];
  /* Battle units for the current party. carry: { mid: { hp, sp, th } }. Tired members (run.tired) fight at reduced stats. */
  function buildParty(carry) {
    const fx = treeFx();
    return roster().map(m => E.buildUnit(m.id, save, { carry: carry && carry[m.id], tired: !!(run && run.tired && run.tired[m.id]), fx }));
  }
  const nodeState = n => {
    if (save.nodes.includes(n.id)) return 'own';
    const b = D.tree.find(x => x.nodes.includes(n)), i = b.nodes.indexOf(n);
    return i === 0 || save.nodes.includes(b.nodes[i - 1].id) ? 'avail' : 'lock';
  };
  /* Shops stock one tier more for every Full Moon Operation cleared. */
  const shopTier = () => Math.min(7, 1 + save.ops.cleared.length);
  const opCleared = id => save.ops.cleared.includes(id);
  const opUnlocked = i => i === 0 || opCleared(D.ops[i - 1].id);
  /* Newly earned Haenim forms (branch mastered, or the true-ending preview) become permanent. Returns the new ones. */
  function checkForms() {
    const got = E.formsList().filter(f => !save.forms.includes(f) && E.formUnlocked(Object.assign({}, save, { forms: [] }), f));
    got.forEach(f => save.forms.push(f));
    if (got.length) persist();
    return got;
  }
  /* Inventory helpers */
  const addItem = (id, n = 1) => { save.items[id] = (save.items[id] || 0) + n; };
  const addMat = (id, n = 1) => { save.mats[id] = (save.mats[id] || 0) + n; };
  const addGear = (id, n = 1) => { save.gear.owned[id] = (save.gear.owned[id] || 0) + n; };
  const eqOf = mid => Object.assign({}, D.startGear[mid], save.gear.eq[mid] || {});
  const equippedCount = id => D.party.reduce((s, m) => s + Object.values(eqOf(m.id)).filter(x => x === id).length, 0);
  /* Spare copies of a piece of gear (tier-0 starter gear is always there for its owner). */
  const spare = id => (D.gear[id] && D.gear[id].tier === 0 ? 99 : (save.gear.owned[id] || 0) - equippedCount(id));

  /* ── Keyboard / pointer controller ────────────────── */
  // Keys: arrows move, Enter/Space/Z choose, Esc/Backspace/X back. Anywhere: P settings, H or ? help. In battle: R Rush, L log,
  // Y Analyze. [ and ] are the shoulder buttons (switch branch, tab, member or the skill list's target). pad.js turns a
  // gamepad into these same keys.
  let ctl = null, screen = 'boot';
  const typing = t => !!t && (t.tagName === 'TEXTAREA' || (t.tagName === 'INPUT' && !['range', 'checkbox', 'button', 'radio'].includes(t.type)));
  const OVERLAYS = ['settings', 'log', 'help', 'field-menu'];
  function hotkey(e) {
    const k = e.key, kind = ctl && ctl.kind, over = OVERLAYS.includes(kind);
    if (kind === 'cinematic') return false;
    if (k === 'p' || k === 'P') { if (kind === 'settings') ctl.back(); else if (!over) openSettings(); return true; }
    if (k === 'h' || k === 'H' || k === '?') { if (kind === 'help') ctl.back(); else if (!over) openHelp(); return true; }
    if (over || screen !== 'battle' || !BT) return false;
    if (k === 'l' || k === 'L') { openLog(); return true; }
    if (k === 'r' || k === 'R') { toggleRush(); return true; }
    return false;
  }
  function onKey(e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (typing(e.target)) { if (e.key === 'Escape') e.target.blur(); return; }
    if (hotkey(e)) { e.preventDefault(); return; }
    if (!ctl) return;
    const k = e.key;
    if (ctl.key && ctl.key(e)) { e.preventDefault(); return; }
    const g = ctl.grid || 1;
    if (k === '[' || k === ']') {
      e.preventDefault();
      const d = k === '[' ? -1 : 1;
      if (ctl.shoulder) ctl.shoulder(d);
      else if (!(ctl.key && ctl.key({ key: d < 0 ? 'ArrowLeft' : 'ArrowRight', preventDefault() {} }))) ctl.move(d);
    } else if (k === 'y' || k === 'Y') {
      e.preventDefault();
      if (ctl.kind === 'menu' && ctl.items && ctl.items.some(it => it.v === 'analyze')) ctl.pickValue('analyze');
      else if (ctl.kind === 'map' && ctl.key) ctl.key({ key: 's', preventDefault() {} });
    }
    else if (k === 'ArrowUp') { e.preventDefault(); ctl.move(-g); }
    else if (k === 'ArrowDown') { e.preventDefault(); ctl.move(g); }
    else if (k === 'ArrowLeft') { e.preventDefault(); ctl.move(-1); }
    else if (k === 'ArrowRight') { e.preventDefault(); ctl.move(1); }
    else if (k === 'Enter' || k === ' ' || k === 'z' || k === 'Z') { e.preventDefault(); ctl.pick(); }
    else if (k === 'Escape' || k === 'Backspace' || k === 'x' || k === 'X') { e.preventDefault(); if (ctl.back) ctl.back(); }
  }
  document.addEventListener('keydown', onKey);
  /* Arrow/Enter navigation over a screen's .bt-btn buttons. */
  function buttonNav(container, { back = null, start = 0 } = {}) {
    const btns = [...container.querySelectorAll('.bt-btn:not(:disabled)')];
    let i = Math.min(start, btns.length - 1);
    const show = () => { btns.forEach((b, j) => b.classList.toggle('on', j === i)); if (btns[i]) btns[i].focus({ preventScroll: true }); };
    btns.forEach((b, j) => b.addEventListener('pointerenter', () => { i = j; show(); }));
    ctl = { kind: 'buttons', move(d) { if (!btns.length) return; i = (i + d + btns.length) % btns.length; sfx('move'); show(); if (btns[i] && btns[i].scrollIntoView) btns[i].scrollIntoView({ block: 'nearest' }); }, pick() { if (btns[i]) btns[i].click(); }, back };
    show();
  }
  // M opens the field menu from a screen that offers one (story fights).
  function menuKey(el, go) {
    if (!BR) return;
    const k = e => {
      if (!el.isConnected) { document.removeEventListener('keydown', k); return; }
      if ((e.key === 'm' || e.key === 'M') && !e.metaKey && !e.ctrlKey && !e.altKey && ctl && ctl.kind === 'buttons') { e.preventDefault(); e.stopPropagation(); document.removeEventListener('keydown', k); go(); }
    };
    document.addEventListener('keydown', k);
  }
  const GEAR_SVG = '<svg class="bt-gear" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M10.3 2h3.4l.5 2.6c.6.2 1.2.5 1.7.9l2.5-.9 1.7 2.9-2 1.8c.1.6.1 1.2 0 1.8l2 1.8-1.7 2.9-2.5-.9c-.5.4-1.1.7-1.7.9l-.5 2.6h-3.4l-.5-2.6c-.6-.2-1.2-.5-1.7-.9l-2.5.9-1.7-2.9 2-1.8a6 6 0 0 1 0-1.8l-2-1.8 1.7-2.9 2.5.9c.5-.4 1.1-.7 1.7-.9zM12 8.6a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8z"/></svg>';
  /* The corner tool buttons. Battle: Rush, log, speed, help, settings. Elsewhere: help, settings, music, SFX. */
  const tools = (where = 'hub') => {
    const common = `<button type="button" class="bt-tool" data-tool="help" title="Help and glossary (H)" aria-label="Help"><span>?</span></button><button type="button" class="bt-tool" data-tool="settings" title="Settings (P)" aria-label="Settings"><span>${GEAR_SVG}<em> Settings</em></span></button>`;
    if (where === 'battle') return `<button type="button" class="bt-tool bt-rushbtn" data-tool="rush" aria-pressed="false" title="Rush: auto-battle (R)"><span>Rush</span></button><button type="button" class="bt-tool" data-tool="log" title="Battle log (L)"><span>Log</span></button><button type="button" class="bt-tool" data-tool="speed" title="Battle speed"><span>▶▶ ${save.speed || 1}x</span></button>${common}`;
    return `${common}<button type="button" class="bt-tool" data-tool="music" aria-pressed="${musicOn()}" title="Music" aria-label="Music"><span>♪<em> Music</em></span></button><button type="button" class="bt-tool" data-tool="sfx" aria-pressed="${save.sfx !== false}" title="Sound effects"><span>SFX</span></button>`;
  };
  function wireTools(el) {
    el.querySelectorAll('[data-tool]').forEach(b => b.addEventListener('click', () => {
      const t = b.dataset.tool;
      b.blur();
      if (t === 'settings') { openSettings(); return; }
      if (t === 'help') { openHelp(); return; }
      if (t === 'log') { openLog(); return; }
      if (t === 'rush') { toggleRush(); return; }
      if (t === 'music') { save.music = !musicOn(); music.refresh(); b.setAttribute('aria-pressed', String(musicOn())); }
      if (t === 'sfx') { save.sfx = save.sfx === false; b.setAttribute('aria-pressed', String(save.sfx)); sfx('ok'); }
      if (t === 'speed') { save.speed = (save.speed || 1) % 3 + 1; paintSpeed(); sfx('move'); mark('speed-' + save.speed); }
      pushSettings();
      persist();
    }));
  }
  const paintSpeed = () => document.querySelectorAll('[data-tool="speed"] span').forEach(sp => { sp.textContent = `▶▶ ${save.speed || 1}x`; });
  /* Lists that keep their scroll when a screen re-renders itself (a click in the shop, the tree, equipment…), so a row never
     jumps out from under the pointer. */
  const KEEP_SCROLL = '.bt-shop, .bt-shop-list, .bt-equip, .bt-eq-slots, .bt-eq-mates, .bt-branches, .bt-party-grid, .bt-ops, .bt-mems, .bt-slots, .bt-pview';
  const show = (html, cls) => {
    if (FX) FX.detach();
    // The FEMC badge (bottom-left) stays on the entrance screen; elsewhere this page's own corners are busy.
    root.classList.toggle('bt-in-battle', !/bt-hub/.test(cls));
    const prev = app.firstElementChild, tops = prev && prev.dataset.cls === cls ? [...prev.querySelectorAll(KEEP_SCROLL)].map(e => e.scrollTop) : null;
    app.innerHTML = `<div class="bt-screen ${cls}" data-cls="${esc(cls)}" data-femc-quiet>${html}</div>`;
    const el = app.firstElementChild;
    if (tops) el.querySelectorAll(KEEP_SCROLL).forEach((e, i) => { if (tops[i]) e.scrollTop = tops[i]; });
    return el;
  };

  /* ════════════════════════════════════════════════════
     PANELS over any screen: Settings, the battle log, help. They pause a battle while open.
     ════════════════════════════════════════════════════ */
  function overlay({ cls, html, kind, key = null, move = null, pick = null, onClose = null }) {
    const prev = ctl;
    const el = document.createElement('div');
    el.className = `bt-ov ${cls}`;
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.innerHTML = html;
    document.body.appendChild(el);
    root.classList.add('bt-ov-open'); // hides FEMC's corner badge so it can't cover the panel
    paused++;
    let open = true;
    const me = { kind, key, move: move || (() => {}), pick: pick || (() => {}), back: () => close() };
    function close(silent) {
      if (!open) return;
      open = false;
      paused = Math.max(0, paused - 1);
      el.remove();
      if (!document.querySelector('.bt-ov')) root.classList.remove('bt-ov-open');
      if (ctl === me) ctl = prev;
      if (!silent) sfx('back');
      if (onClose) onClose();
    }
    me.close = close;
    ctl = me;
    el.addEventListener('click', ev => { if (ev.target === el) close(); });
    el.querySelectorAll('[data-x]').forEach(b => b.addEventListener('click', () => close()));
    mark('overlay-' + kind);
    return { el, close, ctl: me };
  }

  /* ── Settings ─────────────────────────────────────── */
  const ON_OFF = [[true, 'On'], [false, 'Off']], OFF_ON = [[false, 'Off'], [true, 'On']];
  const RUSH_WHERE = { normal: 'Rush runs in normal Shadow rooms only. It turns itself off for Strong rooms, the Reaper and full moons.', strong: 'Rush runs in normal and Strong Shadow rooms, never against the Reaper or a full moon.', all: 'Rush runs anywhere, even the Reaper and full moons. Careful.' };
  const settingRows = () => [
    { k: 'difficulty', label: 'Difficulty', opts: Object.keys(D.difficulty).map(id => [id, D.difficulty[id].name]), desc: v => D.difficulty[v].desc },
    { k: 'speed', top: true, label: 'Battle speed', opts: [[1, '1x'], [2, '2x'], [3, '3x']], desc: () => 'How fast battle animations play. Rush doubles it.' },
    { k: 'textSpeed', label: 'Text speed', opts: [['slow', 'Slow'], ['normal', 'Normal'], ['fast', 'Fast'], ['instant', 'Instant']], desc: () => 'How fast Fuuka’s lines type out, and how long lines stay on screen.' },
    { k: 'cutins', top: true, label: 'Persona cut-ins', opts: [['always', 'Always'], ['first', '1st per battle'], ['off', 'Off']], desc: () => 'The Evoker summon before a Persona skill and the full Theurgy cut-in: every time, the first time per member each battle, or never (Theurgy then plays a short version, as it does in Rush).' },
    { k: 'showtimes', label: 'Bond Showtimes', opts: [['on', 'On'], ['still', 'Still only']], desc: () => 'A bond with a Showtime plays its little scene before the strike (tap or Enter skips to the strike). Still only shows the bond’s single picture instead.' },
    { k: 'music', label: 'Music', opts: ON_OFF, get: () => musicOn(), set: v => { save.music = v; }, desc: () => 'The same switch as the ♪ button.' },
    { k: 'musicVol', label: 'Music volume', range: true, desc: () => (musicOn() ? 'Music volume.' : 'Music volume (music is switched off).') },
    { k: 'sfx', label: 'Sound effects', opts: ON_OFF, get: () => save.sfx !== false, set: v => { save.sfx = v; }, desc: () => (lsGet('kg-femc-sound') === 'off' ? 'Sound effects (FEMC’s sound switch is off, so they stay quiet).' : 'The same switch as the SFX button.') },
    { k: 'sfxVol', label: 'SFX volume', range: true, desc: () => 'Sound effect volume. Below 100% the menu sounds use the softer built-in versions.' },
    { k: 'remember', label: 'Remember cursor', opts: ON_OFF, desc: () => 'Each member’s menu reopens on their last command, skill, item and target (if it’s still standing).' },
    { k: 'rushWhere', label: 'Rush allowed in', opts: [['normal', 'Normal rooms'], ['strong', '+ Strong rooms'], ['all', 'Every fight']], desc: v => RUSH_WHERE[v] },
    { k: 'rushStop', label: 'Rush stops below', opts: [[30, '30% HP'], [50, '50% HP']], desc: v => `Rush hands control back when anyone drops below ${v}% HP, or Solar below 50%.` },
    { k: 'shake', label: 'Screen shake', opts: ON_OFF, desc: () => 'The screen shakes on criticals, weaknesses and All-Out Attacks.' },
    { k: 'calm', label: 'Reduce flashes', opts: OFF_ON, desc: () => 'Softens white flashes and bursts (Evoker, Theurgy, lightning, criticals).' },
    { k: 'numbers', label: 'Damage numbers', opts: ON_OFF, desc: () => 'Damage and healing numbers. WEAK, CRITICAL and the rest still show.' },
    { k: 'perf', top: true, label: 'Performance mode', opts: OFF_ON, desc: () => 'No glass shatter or ash, fewer particles, a lighter video. Try it if battles feel slow.' },
    { k: 'tips', label: 'Fuuka’s tips', opts: ON_OFF, desc: () => `A small tip the first time each mechanic shows up (${save.tipsSeen.length} of ${Object.keys(D.tips).length} seen). Everything is also in Help (?).` },
    { k: 'pad', label: 'Controller buttons', opts: [['auto', 'Auto'], ['xbox', 'Xbox'], ['ps', 'PlayStation']], desc: () => 'Which button prompts to show while you play with a controller. Auto reads the controller’s name.' }
  ];
  const getSet = r => (r.get ? r.get() : r.top ? save[r.k] : ST()[r.k]);
  function putSet(r, v) {
    if (r.set) r.set(v); else if (r.top) save[r.k] = v; else ST()[r.k] = v;
    if (r.k === 'music' || r.k === 'musicVol') music.refresh();
    if (r.k === 'speed') paintSpeed();
    if (r.k === 'rushWhere' || r.k === 'rushStop') paintRush();
    applyPerf();
    pushSettings();
    persist();
    mark('set-' + r.k);
  }
  /* After the game's settings panel closed (story fights): take its values in and repaint what depends on them. */
  function settingsChanged() {
    pullSettings();
    music.refresh(); paintSpeed(); paintRush(); applyPerf();
    document.querySelectorAll('[data-tool="music"]').forEach(b => b.setAttribute('aria-pressed', String(musicOn())));
    document.querySelectorAll('[data-tool="sfx"]').forEach(b => b.setAttribute('aria-pressed', String(save.sfx !== false)));
  }
  function openSettings(startKey = null) {
    if (ctl && ctl.kind === 'settings') return;
    if (BR) {
      // Story fights use the game's one settings panel (it opens over this frame). The battle waits while it's open; a
      // controller's buttons (pad.js, which runs in here) are passed on to it.
      const prev = ctl;
      const me = { kind: 'settings', move() {}, pick() {}, back: () => { try { BR.closeSettings(); } catch (e) {} }, key: e => { try { BR.key(e.key); } catch (err) {} return true; } };
      paused++;
      ctl = me;
      root.classList.add('bt-ov-open');
      mark('overlay-settings');
      sfx('ok');
      BR.openSettings(() => {
        paused = Math.max(0, paused - 1);
        root.classList.remove('bt-ov-open');
        if (ctl === me) ctl = prev;
        settingsChanged();
        persist();
        if (screen === 'hub' && !ctlBusy()) hub();
      }, startKey);
      return;
    }
    const rows = settingRows();
    let i = Math.max(0, rows.findIndex(r => r.k === startKey));
    const valText = r => { const v = getSet(r); if (r.range) return `${v}%`; const o = r.opts.find(x => x[0] === v); return o ? o[1] : String(v); };
    const rowHtml = (r, j) => `<div class="bt-set-row${j === i ? ' sel' : ''}" data-r="${j}"><span class="k">${esc(r.label)}</span><span class="v">${r.range
      ? `<button type="button" class="ar" data-d="-1" aria-label="Lower">‹</button><input type="range" min="0" max="100" step="5" value="${getSet(r)}" aria-label="${esc(r.label)}"><b>${valText(r)}</b><button type="button" class="ar" data-d="1" aria-label="Higher">›</button>`
      : `<button type="button" class="ar" data-d="-1" aria-label="Previous">‹</button><b>${esc(valText(r))}</b><button type="button" class="ar" data-d="1" aria-label="Next">›</button>`}</span></div>`;
    const o = overlay({
      cls: 'bt-setp', kind: 'settings',
      html: `<div class="bt-ov-card"><div class="bt-ov-head"><h2><small>${screen === 'battle' ? 'Paused' : 'Practice mode · same settings as the story'}</small>SETTINGS</h2><button type="button" class="bt-tool" data-x><span>Close</span></button></div>
        <div class="bt-set-list">${rows.map(rowHtml).join('')}</div><p class="bt-set-desc"></p>
        <div class="bt-ov-foot"><button type="button" class="bt-tool" data-help><span>? Help</span></button><span class="bt-hint">↑↓ choose · ←→ change · Esc close</span></div></div>`,
      key(e) {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { change(i, e.key === 'ArrowLeft' ? -1 : 1); return true; }
        return false;
      },
      move(d) { i = (i + (d > 0 ? 1 : -1) + rows.length) % rows.length; sfx('move'); paint(); },
      pick() { change(i, 1); },
      onClose() { if (screen === 'hub' && !ctlBusy()) hub(); }
    });
    const list = o.el.querySelector('.bt-set-list'), desc = o.el.querySelector('.bt-set-desc');
    function change(j, d) {
      const r = rows[j];
      if (r.range) putSet(r, Math.max(0, Math.min(100, getSet(r) + d * 10)));
      else { const k = r.opts.findIndex(x => x[0] === getSet(r)); putSet(r, r.opts[(k + d + r.opts.length) % r.opts.length][0]); }
      i = j;
      sfx('move');
      paint(true);
    }
    function paint(vals) {
      list.querySelectorAll('.bt-set-row').forEach((el, j) => {
        el.classList.toggle('sel', j === i);
        if (vals && j === i) { const r = rows[j]; el.querySelector('b').textContent = valText(r); const rg = el.querySelector('input'); if (rg) rg.value = getSet(r); }
      });
      const r = rows[i], v = getSet(r);
      desc.innerHTML = `<b>${esc(r.label)}</b>${esc(r.desc ? r.desc(v) : '')}`;
      const el = list.querySelector(`[data-r="${i}"]`);
      if (el) { if (el.offsetTop < list.scrollTop) list.scrollTop = el.offsetTop - 6; else if (el.offsetTop + el.offsetHeight > list.scrollTop + list.clientHeight) list.scrollTop = el.offsetTop + el.offsetHeight - list.clientHeight + 6; }
    }
    list.querySelectorAll('.bt-set-row').forEach(el => {
      const j = +el.dataset.r;
      el.addEventListener('click', ev => { if (ev.target.closest('input')) return; const d = ev.target.closest('[data-d]'); if (d) change(j, +d.dataset.d); else if (j === i) change(j, 1); else { i = j; paint(); } });
      const rg = el.querySelector('input');
      if (rg) rg.addEventListener('input', () => { i = j; putSet(rows[j], +rg.value); el.querySelector('b').textContent = `${rg.value}%`; paint(); });
    });
    o.el.querySelector('[data-help]').addEventListener('click', () => { o.close(true); openHelp(); });
    paint();
    sfx('ok');
  }
  /* The hub re-renders after Settings close, unless something else took over the screen meanwhile. */
  const ctlBusy = () => !!(ctl && OVERLAYS.includes(ctl.kind));

  /* ── The battle log ───────────────────────────────── */
  function blogAdd(t, c = '') { blog.push({ r: B ? B.S.round : 0, t, c }); if (blog.length > 60) blog.shift(); }
  function openLog() {
    if (!BT || !B || (ctl && OVERLAYS.includes(ctl.kind))) return;
    const rows = blog.map(x => `<li class="${x.c}">${x.c === 'round' ? `<b>${esc(x.t)}</b>` : esc(x.t)}</li>`).join('') || '<li class="sys">Nothing yet.</li>';
    let list = null;
    const o = overlay({
      cls: 'bt-logp', kind: 'log',
      html: `<div class="bt-ov-card"><div class="bt-ov-head"><h2><small>${esc(curSpec ? curSpec.label : '')} · Round ${B.S.round} · last ${blog.length}</small>BATTLE LOG</h2><button type="button" class="bt-tool" data-x><span>Close</span></button></div>
        <ol class="bt-loglist">${rows}</ol><p class="bt-hint">↑↓ scroll · L or Esc close</p></div>`,
      key(e) { if (e.key === 'l' || e.key === 'L') { o.close(); return true; } return false; },
      move(d) { list.scrollTop += d * 64; }
    });
    list = o.el.querySelector('.bt-loglist');
    list.scrollTop = list.scrollHeight;
    sfx('ok');
  }

  /* ── Help and glossary ────────────────────────────── */
  const CONTROLS = { id: 'controls', name: 'Controls', text: '' };
  function helpBody(g) {
    let extra = '';
    if (g.list === 'ailments') extra = `<dl>${Object.values(D.ailments).map(a => `<dt style="--c:${a.color}">${esc(a.name)}</dt><dd>${esc(a.desc)}</dd>`).join('')}</dl>`;
    if (g.list === 'tactics') extra = `<dl>${Object.values(D.tactics).map(t => `<dt>${esc(t.name)}</dt><dd>${esc(t.desc)}</dd>`).join('')}</dl>`;
    if (g.id === 'difficulty') extra = `<dl>${Object.values(D.difficulty).map(t => `<dt>${esc(t.name)}${t === diff() ? ' · now' : ''}</dt><dd>${esc(t.desc)}</dd>`).join('')}</dl>`;
    if (g.id === 'controls') return `<h3>Controls</h3><dl class="keys">
      <dt>Arrows · D-pad · stick</dt><dd>Move</dd><dt>Enter · Z · A / ✕</dt><dd>Choose</dd><dt>Esc · X · B / ○</dt><dd>Back (on the entrance: Settings)</dd>
      <dt>Y · Y / △</dt><dd>Analyze in battle, Fuuka’s scan on the map</dd><dt>R · RT / R2</dt><dd>Rush (auto-battle)</dd><dt>L · X / □</dt><dd>Battle log</dd>
      <dt>[ ] · LB RB / L1 R1</dt><dd>Switch branch, tab or member; in the skill list, the Shadow it marks against</dd><dt>P · Start / Options</dt><dd>Settings</dd><dt>H · ? · Select / Share</dt><dd>This help</dd></dl>`;
    return `<h3>${esc(g.name)}</h3><p>${esc(g.text)}</p>${extra}`;
  }
  function openHelp(topic = null) {
    if (ctl && OVERLAYS.includes(ctl.kind)) return;
    const G = D.glossary.concat([{ id: 'difficulty', name: 'Difficulty', text: 'Change it any time in Settings. It only changes damage, healing, the Reaper and Strong rooms; rewards stay the same.' }, CONTROLS]);
    let i = Math.max(0, G.findIndex(g => g.id === topic));
    const o = overlay({
      cls: 'bt-helpp', kind: 'help',
      html: `<div class="bt-ov-card"><div class="bt-ov-head"><h2><small>Fuuka’s notes</small>HELP</h2><button type="button" class="bt-tool" data-x><span>Close</span></button></div>
        <div class="bt-help-in"><ul class="bt-help-list">${G.map((g, j) => `<li><button type="button" data-j="${j}">${esc(g.name)}</button></li>`).join('')}</ul><div class="bt-help-body"></div></div>
        <p class="bt-hint">↑↓ topic · Esc close</p></div>`,
      move(d) { i = (i + (d > 0 ? 1 : -1) + G.length) % G.length; sfx('move'); paint(); },
      key(e) { if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { this.move(e.key === 'ArrowLeft' ? -1 : 1); return true; } return false; }
    });
    const body = o.el.querySelector('.bt-help-body'), btns = [...o.el.querySelectorAll('[data-j]')];
    function paint() {
      btns.forEach((b, j) => b.classList.toggle('sel', j === i));
      body.innerHTML = helpBody(G[i]);
      const b = btns[i]; if (b && b.scrollIntoView) b.scrollIntoView({ block: 'nearest', inline: 'nearest' });
      mark('help-' + G[i].id);
    }
    btns.forEach((b, j) => b.addEventListener('click', () => { i = j; sfx('move'); paint(); }));
    paint();
    sfx('ok');
  }

  /* ── Fuuka's one-time tips ────────────────────────── */
  const tipQ = [];
  let tipEl = null;
  function tip(id) {
    if (!ST().tips || !D.tips[id] || save.tipsSeen.includes(id)) return;
    save.tipsSeen.push(id);
    persist();
    tipQ.push(id);
    if (!tipEl) nextTip();
  }
  function nextTip() {
    const id = tipQ.shift();
    if (!id) { tipEl = null; return; }
    const [topic, text] = D.tips[id], g = D.glossary.find(x => x.id === topic);
    const el = tipEl = document.createElement('div');
    el.className = 'bt-tip';
    el.setAttribute('role', 'status');
    el.innerHTML = `<div class="pic fcb">${fimg(NAVI.id, navFace('happy'))}</div><div class="tx"><b>Tip · ${esc(g ? g.name : 'Fuuka')}</b><span></span><div class="acts"><button type="button" data-more>More</button><button type="button" data-ok>Got it</button></div></div>`;
    document.body.appendChild(el);
    typeInto(el.querySelector('span'), text);
    let gone = false;
    const hide = () => { if (gone) return; gone = true; el.classList.add('out'); setTimeout(() => { el.remove(); nextTip(); }, 260); };
    el.querySelector('[data-ok]').addEventListener('click', hide);
    el.querySelector('[data-more]').addEventListener('click', () => { hide(); openHelp(topic); });
    setTimeout(hide, (5600 + text.length * 30) * textHold());
    mark('tip'); mark('tip-' + id);
  }

  /* ── Rush (auto-battle) ───────────────────────────── */
  function rushAllowed(spec = curSpec) {
    if (!spec || spec.rules) return false;
    const w = ST().rushWhere;
    if (spec.boss || spec.reaper) return w === 'all';
    if (spec.strong) return w !== 'normal';
    return true;
  }
  function rushActive() { return !!(rushOn && B && BT && screen === 'battle' && rushAllowed()); }
  /* Who's too hurt to keep rushing: Solar under 50%, or anyone under the Settings threshold (a KO counts). */
  function rushDanger() {
    const L = B.leader();
    if (L.hp / L.maxHp < 0.5) return L;
    return B.party().find(p => p.hp / p.maxHp < ST().rushStop / 100) || null;
  }
  function paintRush() {
    if (!BT) return;
    const b = BT.root.querySelector('[data-tool="rush"]'), on = rushActive();
    if (b) { b.setAttribute('aria-pressed', String(on)); b.classList.toggle('na', !rushAllowed()); }
    BT.root.classList.toggle('rushing', on);
  }
  function stopRush(key, vars) { rushOn = false; paintRush(); if (key) nav(key, vars); banner('Rush off'); blogAdd('Rush off.', 'sys'); mark('rush-stop'); }
  function toggleRush() {
    if (!BT || !B || B.outcome()) return;
    if (rushOn && rushActive()) { rushOn = false; sfx('back'); paintRush(); blogAdd('Rush off.', 'sys'); mark('rush-off'); return; }
    if (!rushAllowed()) { rushOn = false; sfx('back'); paintRush(); nav(curSpec && (curSpec.boss || curSpec.reaper) ? 'rushBoss' : 'rushNo'); mark('rush-denied'); return; }
    const d = rushDanger();
    if (d) { sfx('back'); nav('rushStop', { name: d.name }); mark('rush-denied'); return; }
    rushOn = true;
    sfx('ok'); paintRush(); nav('rushOn'); blogAdd('Rush on.', 'sys'); mark('rush-on');
    if (menuAbort) menuAbort(RUSH);
  }
  function rushGuard() { if (!rushActive()) return; const d = rushDanger(); if (d) stopRush('rushStop', { name: d.name }); }
  /* A Direct member in Rush: a plain attack on the best known target (a weakness to the weapon first, else the weakest foe). */
  function rushAttack(u) {
    const score = f => { const k = B.known(f.kind)[u.weapon], a = k ? (f.aff[u.weapon] || 'normal') : 'unknown'; return { weak: f.down ? 1.2 : 3, normal: 1, unknown: 1, resist: 0.3, null: -1, repel: -2, drain: -2 }[a]; };
    const pool = B.foes().filter(f => !f.dead && !f.hidden && !B.shieldUp(f)).map(f => ({ f, s: score(f) })).filter(x => x.s > 0).sort((a, b) => b.s - a.s || a.f.hp - b.f.hp);
    return pool.length ? { type: 'attack', target: pool[0].f.id } : { type: 'guard' };
  }
  // Rush's brain (engine.js autoAction 'rush'): Direct and Act Freely members heal, rebuff, strip buffs, hit known weaknesses
  // and fire Theurgy the moment it's ready; the other tactics keep their own style. rushAttack stays as the fallback.
  const rushAction = u => { const t = tacticOf(u); const a = B.autoAction(u, t === 'direct' || t === 'free' ? 'rush' : t); return a || rushAttack(u); };

  /* ════════════════════════════════════════════════════
     HUB
     ════════════════════════════════════════════════════ */
  /* Solar's panel on the hub (also the handoff hub). meta: the line of small print under the party. */
  function hubSolar(meta) {
    const fx = treeFx(), m = D.party[0], s = memberStats(m, save.lvl, fx), skills = solarSkills(fx);
    const pct = Math.round(save.exp / need(save.lvl) * 100), per = perOf('solar');
    return `<div class="bt-solar">
        <div>
          <h2>Solar<small>Lv ${save.lvl}</small></h2>
          <p class="persona">Persona · ${esc(per.name)}${per.form ? '' : ' · 해님'}</p>
          <div class="bt-expbar"><i style="width:${pct}%"></i></div>
          <div class="bt-explabel"><span>EXP ${save.exp} / ${need(save.lvl)}</span><span>${save.pts} skill pts</span></div>
          <div class="bt-stats">${['hp', 'sp', 'st', 'ma', 'en', 'ag', 'lu'].map(k => `<div><span>${k.toUpperCase()}</span><b>${s[k]}</b></div>`).join('')}</div>
          <ul class="bt-chips">${skills.map(id => `<li>${skIcon(id)}<span>${esc(D.skills[id].name)}</span></li>`).join('')}</ul>
          <div class="bt-hub-party" aria-label="Party">${roster().slice(1).map(m => `<span title="${esc(m.name)}"><i class="av fcb">${fimg(m.id, m.faces.idle)}</i><b>${esc(m.name)}<small>Lv ${lvOf(m.id)}${tacticOf({ mid: m.id }) !== 'direct' ? ` · ${esc(D.tactics[tacticOf({ mid: m.id })].short)}` : ''}</small></b></span>`).join('') || '<em>Solar fights alone</em>'}</div>
          ${meta}
        </div>
      </div>`;
  }
  function hub() {
    // Evolutions that came due (an old save, or levels from the bench) play before the hub opens.
    if (!evolving && E.evolutionsDue(save, lvOf).length) { ctl = null; pendingEvolutions().then(hub); return; }
    if (!resolving && D.party.filter(usable).some(m => pendingOf(m.id).length)) { ctl = null; resolvePending().then(hub); return; }
    if (HO) return hoHub();
    screen = 'hub';
    root.classList.remove('bt-in-battle');
    music.play('title');
    const fx = treeFx(), m = D.party[0], s = memberStats(m, save.lvl, fx), skills = solarSkills(fx);
    const pct = Math.round(save.exp / need(save.lvl) * 100);
    const cont = save.reached && D.floors.find(f => f.id === save.reached);
    const opsDone = save.ops.cleared.length, per = perOf('solar');
    const el = show(`<div class="bt-hub-copy">
        <p class="bt-kicker">Practice mode · its own save<span class="bt-diff d-${esc(ST().difficulty)}" title="Difficulty (change it in Settings)">${esc(diff().name)}</span></p>
        <h1>TARTARUS<small>Full Moon Operation</small></h1>
        <div class="bt-hub-menu">
          ${cont ? `<button type="button" class="bt-btn pink" data-go="cont"><span>Continue from ${esc(cont.label)}</span><small>Access point · ${esc(cont.block)}</small></button>` : ''}
          <button type="button" class="bt-btn${cont ? '' : ' pink'}" data-go="run"><span>${cont ? 'Start from the bottom' : 'Enter Tartarus'}</span><small>${save.cycle ? `Climbed ×${save.cycle}` : `${D.blocks.filter(b => !b.secret).length} blocks`}</small></button>
          <button type="button" class="bt-btn" data-go="ops"><span>Full Moon Operations</span><small>${opsDone} / ${D.ops.length}</small></button>
          <button type="button" class="bt-btn" data-go="mall"><span>Paulownia Mall</span><small>${yen(save.yen)}</small></button>
          <div class="bt-hub-row"><button type="button" class="bt-btn" data-go="party"><span>Party</span><small>${save.party.length + 1} / 4</small></button><button type="button" class="bt-btn" data-go="equip"><span>Equip</span></button></div>
          <div class="bt-hub-row"><button type="button" class="bt-btn" data-go="tree"><span>Haenim’s Tree</span><small>${save.pts} SP</small></button><button type="button" class="bt-btn" data-go="personas"><span>Personas</span></button></div>
          <div class="bt-hub-row"><button type="button" class="bt-btn" data-go="memories"><span>Memories</span><small>${save.memories.length} / ${D.memories.length}</small></button><button type="button" class="bt-btn" data-go="slots"><span>Save data</span></button></div>
        </div>
        <p class="bt-hub-hint">↑↓←→ move · Enter choose · Esc settings · H help · mouse, touch and controllers work too</p>
      </div>
      <div class="bt-hub-fig" aria-hidden="true"><i class="band"></i><img src="assets/femc/profile/femc.webp?v=${V()}" alt=""></div>
      ${hubSolar(`<p class="bt-meta"><span class="bt-yen">${ICON.svg('yen')}${yen(save.yen)}</span> · ${save.runs} run${save.runs === 1 ? '' : 's'} · ${opsDone} full moon${opsDone === 1 ? '' : 's'} cleared${save.cycle ? ` · Tartarus is stronger (climb ${save.cycle + 1})` : ''}</p>`)}
      <div class="bt-top" style="justify-content:flex-end"><a class="bt-tool" href="femc-game.html"><span>‹ Back to the game</span></a><div class="bt-tools" style="margin-left:8px">${tools()}</div></div>`, 'bt-hub');
    wireTools(el);
    el.querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', () => {
      const go = b.dataset.go;
      if (go === 'run') { sfx('ok'); startRun(null); }
      else if (go === 'cont') { sfx('ok'); startRun(save.reached); }
      else if (go === 'tree') { sfx('ok'); treeScreen(hub); }
      else if (go === 'party') { sfx('ok'); partyScreen(hub); }
      else if (go === 'personas') { sfx('ok'); personaScreen(hub); }
      else if (go === 'ops') { sfx('ok'); opsScreen(); }
      else if (go === 'mall') { sfx('ok'); mallScreen(hub); }
      else if (go === 'equip') { sfx('ok'); equipScreen(hub); }
      else if (go === 'memories') { sfx('ok'); memoriesScreen(hub); }
      else if (go === 'slots') { sfx('ok'); slotsScreen(hub); }
    }));
    buttonNav(el, { back: () => openSettings() });
    mark('hub');
  }
  function ctlFocus(sel) { const b = app.querySelector(sel); if (!b || !ctl) return; for (let i = 0; i < 8; i++) { if (document.activeElement === b) break; ctl.move(1); } }

  /* ════════════════════════════════════════════════════
     PARTY: Solar plus up to three, each with a Tactic
     ════════════════════════════════════════════════════ */
  /* Story fights: the game's field menu (menu.js) over this frame, in place of the practice screens. The save is handed over
     first and read back after, since the menu edits the playthrough's battle save in the life sim. Resolves when it closes:
     'leave' when an escape item was used on a floor, else null. Its Skills tab is the skill system (Haenim's tree, the party trees).
     onFloor: items can be used (useFieldItem) and the team is locked until an access point. */
  function fieldMenu(tab, { required = [], solo = false, extra = [], onFloor = false } = {}) {
    return new Promise(resolve => {
      const prev = ctl;
      let left = false;
      persist();
      const hp = {};
      if (run) buildParty(run.carry).forEach(u => { hp[u.mid] = { hp: u.hp, maxHp: u.maxHp, sp: u.sp, maxSp: u.maxSp }; });
      const me = { kind: 'field-menu', move() {}, pick() {}, back: () => { try { BR.closeMenu(); } catch (e) {} }, key: () => true };
      const done = () => {
        paused = Math.max(0, paused - 1);
        root.classList.remove('bt-ov-open');
        if (ctl === me) ctl = prev;
        let back = null; try { back = fromRaw(BR.battleSave()); } catch (e) {}
        if (back) { save = back; persist(); }
        mark('field-menu-closed');
        const out = left ? 'leave' : null;
        resolve(out);
      };
      paused++; ctl = me;
      root.classList.add('bt-ov-open');
      sfx('ok'); mark('field-menu'); mark('field-menu-' + tab);
      // On a floor: field items are used from the menu, the team is set until an access point, Traesto leaves Tartarus.
      const useItem = !onFloor ? null : (id, tgt) => {
        const it = D.items[id];
        if (!it || !(save.items[id] > 0) || it.use === 'battle' || it.type === 'key') return null;
        if (it.type === 'escape') {
          save.items[id]--; if (!save.items[id]) delete save.items[id];
          // Saori's Bookmark: leaving with a Traesto Gem keeps the progress since the last access point.
          if (run && TP().bookmark) { save.reached = D.floors[run.fi].id; mark('bookmark'); }
          persist(); mark('traesto'); left = true; return { leave: true };
        }
        if (['ally', 'dead'].includes(it.target) && !tgt) return null;
        useFieldItem(id, tgt, fieldUnits());
        const now = {}; fieldUnits().forEach(u => { now[u.mid] = { hp: u.hp, maxHp: u.maxHp, sp: u.sp, maxSp: u.maxSp }; });
        return { items: Object.assign({}, save.items), hp: now };
      };
      let ok = false;
      try { ok = BR.openMenu(tab, { kind: HO && HO.kind, required, solo, extra, lockParty: onFloor, useItem, items: Object.assign({}, save.items), yen: save.yen, hp, onClose: done }); } catch (e) { ok = false; }
      if (!ok) { paused = Math.max(0, paused - 1); root.classList.remove('bt-ov-open'); if (ctl === me) ctl = prev; resolve(null); }
    });
  }
  const TACTIC_ORDER = Object.keys(D.tactics);
  const affChips = per => D.affinityOrder.filter(x => per.aff[x]).map(x => `<span class="bt-aff ${per.aff[x]}">${ART.icon(x)}<em>${AFF_SHORT[per.aff[x]]}</em></span>`).join('') || '<span class="bt-aff"><em>–</em></span>';
  function partyScreen(onClose, { required = [] } = {}) {
    if (BR) { fieldMenu('party', { required, extra: required }).then(onClose); return; }
    screen = 'party';
    root.classList.remove('bt-in-battle');
    const list = D.party.slice(1).filter(m => usable(m) || required.includes(m.id));
    if (!list.length) { onClose(); return; }
    let i = 0, msg = '';
    const cols = () => (phone() ? 2 : 4);
    const render = () => {
      const solar = D.party[0];
      const card = (m, k) => {
        const per = perOf(m.id), slot = save.party.indexOf(m.id), tac = save.tactics[m.id] || 'direct';
        return `<div class="bt-pm${slot >= 0 ? ' in' : ''}${k === i ? ' sel' : ''}" data-k="${k}" style="--c:${m.color}">
          <button type="button" class="bt-pm-main" data-act="toggle" data-id="${m.id}" aria-pressed="${slot >= 0}">
            <span class="pic fcb">${fimg(m.id, m.faces.idle)}</span>
            <span class="info"><b>${esc(m.name)}<small>Lv ${lvOf(m.id)}</small></b><span class="per-n">${esc(per.name)} · ${esc(per.arcana)}</span><span class="role">${esc(m.role || '')}</span><span class="bt-affs">${affChips(per)}</span></span>
            <span class="per-art"><img src="${per.art}" alt="${esc(per.name)}"></span>
            <span class="slot">${required.includes(m.id) ? 'Required' : slot >= 0 ? `IN · ${slot + 2}` : 'Bench'}</span>
          </button>
          <button type="button" class="bt-pm-tac" data-act="tac" data-id="${m.id}" title="${esc(D.tactics[tac].desc)}">${ART.icon('tactics')}<span>${esc(D.tactics[tac].name)}</span></button>
        </div>`;
      };
      const sp = perOf('solar');
      const el = show(`<div class="bt-tree-head"><button type="button" class="bt-tool" data-act="back"><span>‹ Back</span></button>
          <h1>PARTY<small>S.E.E.S.</small></h1><div class="bt-pts"><span><small>Members</small>${save.party.length + 1} / 4</span></div></div>
        <div class="bt-party-grid">
          <div class="bt-pm in leader" style="--c:${solar.color}"><div class="bt-pm-main"><span class="pic fcb">${fimg('solar', 'serious')}</span>
            <span class="info"><b>Solar<small>Lv ${save.lvl}</small></b><span class="per-n">${esc(sp.name)} · Fool</span><span class="role">${esc(solar.role)}</span><span class="bt-affs">${affChips(sp)}</span></span><span class="per-art"><img src="${sp.art}" alt="Haenim"></span><span class="slot">Leader · 1</span></div>
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
      if (required.includes(id)) { sfx('back'); msg = `${member(id).name} must take part in this fight.`; render(); return; }
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
     RUN FLOW: climbing Tartarus floor by floor (node maps), with a full moon at the top of each block
     ════════════════════════════════════════════════════ */
  /* run: { fi (floor index), carry (HP/SP/Theurgy between fights), fights (fights per member since the last rest), tired, map, ops (true for an operation) } */
  let run = null;
  const newRun = (o = {}) => Object.assign({ fi: 0, carry: null, fights: {}, tired: {}, map: null }, o);
  async function startRun(fromId) {
    const fi = fromId ? Math.max(0, D.floors.findIndex(f => f.id === fromId)) : 0;
    run = newRun({ fi, tired: HO ? hoTired() : {} });
    save.runs++;
    persist();
    for (;;) {
      // A hidden floor (a cracked wall's stairwell) sits between this floor and the next; it has no number of its own.
      const base = D.floors[run.fi], floor = TT && run.hiddenOf === base.id ? TT.hiddenFloor(base) : base;
      if (HS) { HS.entered = true; HS.floor = Math.max(HS.floor, floor.gameFloor || 0); }
      // Test hook: window.__btMap forces a seed for the floor's layout. tartarus.js plans the guardian and the cracked wall.
      run.map = MAP.generate(floor, { rand, strongChance: D.map.strongChance * diff().strong, plan: TT ? TT.plan(floor, ttCtx(floor)) : {} });
      if (TT) TT.dress(run.map, floor, ttCtx(floor));
      mapPerks(floor, run.map);
      if (TT && !floor.hiddenFloor) tip('rooms');
      const r = await explore(floor);
      if (r === 'secret') { run.hiddenOf = base.id; continue; }
      if (r === 'monad') { run.hiddenOf = null; run.fi = D.floors.findIndex(f => f.secret); continue; }
      // Sebastian's Save Point: the party wakes at the last access point instead of a Game Over (once a night).
      if (r === 'savepoint') { const ai = save.reached ? D.floors.findIndex(f => f.id === save.reached) : -1; run.fi = ai >= 0 && ai <= run.fi ? ai : run.fi; run.carry = null; run.tired = {}; run.fights = {}; continue; }
      if (r !== 'up') { run = null; if (HO) return hoFinish(r === 'over' ? 'lose' : 'win'); hub(); return; }
      // Rohan's Sketch the Floor remembers floors whose stairs were taken; Kiriko's Fox Spirit heals on the way up.
      if (!floor.hiddenFloor && !save.floorsMapped.includes(floor.id)) { save.floorsMapped.push(floor.id); persist(); }
      if (floor.hiddenFloor) { run.hiddenOf = null; if (!save.tt.secrets.includes(floor.id)) { save.tt.secrets.push(floor.id); persist(); } }
      const tpu = TP();
      if (tpu.foxSpirit) carryEach(u => { u.hp = Math.min(u.maxHp, Math.round(u.hp + u.maxHp * tpu.foxSpirit.v)); });
      if (floor.top && floor.op) {
        const op = D.ops.find(o => o.id === floor.op);
        if (!opCleared(op.id) || run.refight) {
          run.refight = false;
          const res = await fullMoon(op, { climb: true });
          if (res !== 'win') { run = null; if (HO) return hoFinish('lose'); hub(); return; }
        }
        if (floor.last) {
          save.cycle++; save.reached = null; persist();
          await complete('top');
          run = null; if (HO) return hoFinish('win'); hub(); return;
        }
      }
      run.fi++;
    }
  }
  /* Rest: a Clock room, or before a full moon. Full HP/SP and no more fatigue. */
  function rest() { if (!run) return; run.carry = null; run.fights = {}; run.tired = {}; }

  function message(title, text) {
    screen = 'message';
    root.classList.remove('bt-in-battle');
    return new Promise(res => {
      const el = show(`<div><h1>${esc(title)}</h1><p>${esc(text)}</p><div class="row"><button type="button" class="bt-btn pink"><span>Continue</span></button></div></div>`, 'bt-over');
      el.querySelector('button').addEventListener('click', () => { sfx('ok'); res(); });
      buttonNav(el);
    });
  }
  /* The clock before a full moon: a full heal, then the operation's briefing. */
  function clockScreen(op) {
    screen = 'clock';
    music.play('floor');
    rest();
    return new Promise(res => {
      const el = show(`<div class="bt-clock-bg" style="background-image:url('${op.arena}')"></div><div class="bt-clock-in"><p class="bt-kicker">Before the full moon · ${esc(op.arcana)}</p><h1>THE CLOCK</h1><p>A clock chimes somewhere in the dark. Everyone’s HP and SP are fully restored, and no one is tired anymore.</p>
        <div class="bt-brief"><b>${esc(op.name)} · ${esc(op.place)}</b>${esc(op.brief)}<small>Recommended level ${op.lvl}</small></div>
        <div class="bt-navline"><div class="bt-nav bt-room-nav"><div class="pic fcb">${fimg(NAVI.id, navFace('happy'))}</div><p><b>${esc(NAVI.name)}</b>${esc(D.nav.clock[0])}</p></div></div>
        <div class="row"><button type="button" class="bt-btn pink"><span>To the full moon ›</span></button></div></div>`, 'bt-over bt-clock');
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
        <div class="row"><button type="button" class="bt-btn pink" data-v="retry"><span>Retry the battle</span></button><button type="button" class="bt-btn" data-v="hub"><span>${HO ? 'Return to the dorm' : 'Return to the entrance'}</span></button></div></div>`, 'bt-over');
      el.querySelectorAll('[data-v]').forEach(b => b.addEventListener('click', () => { sfx('ok'); res(b.dataset.v); }));
      buttonNav(el);
      mark('gameover');
    });
  }
  function complete(kind) {
    screen = 'complete';
    root.classList.remove('bt-in-battle');
    music.play('victory');
    return new Promise(res => {
      const el = show(`<div><p class="bt-kicker">${kind === 'top' ? `The top of Tartarus · climb ${save.cycle}` : 'Full moon'}</p><h1>OPERATION<br>COMPLETE</h1><p>${kind === 'top' ? 'You reached the top of Tartarus and the moon is quiet. The tower will be harder next time you climb.' : 'The moon is quiet.'}</p>
        <div class="row"><button type="button" class="bt-btn pink"><span>Return to the entrance</span></button></div></div>`, 'bt-over bt-complete');
      el.querySelector('button').addEventListener('click', () => { sfx('ok'); res(); });
      buttonNav(el);
      mark('complete');
    });
  }

  /* One Tartarus fight (a Shadow room, the Reaper, or one of tartarus.js's rooms). Handles game over → retry.
     Returns 'win' | 'escaped' | 'fled' (a rare Shadow got away: rules.fleeAt) | 'over' | 'savepoint'. */
  async function fight(floor, { group, strong = false, reaper = false, rules = null, music: tune = null, nav: navKey = null }) {
    for (;;) {
      const snap = JSON.stringify({ carry: run.carry, items: save.items, th: save.th, fights: run.fights, tired: run.tired });
      const out = await battle({ group, bg: floor.bg, label: floor.label, block: floor.block, boss: reaper, reaper, strong, rules, music: tune || (reaper || strong ? 'danger' : 'battle'), nav: reaper ? 'reaper' : navKey || floor.nav, heat: reaper ? 0 : save.cycle * D.progression.heat });
      if (out.result === 'fled') return 'fled';
      if (out.result === 'win') {
        await afterWin(out, { title: `${floor.label} · ${floor.block}`, strong, reaper, back: 'Back to the map' });
        return 'win';
      }
      if (out.result === 'escaped') {
        // Widowmaker's Grappling Hook: the Reaper loses 2 more steps after an escape.
        const tpe = TP(); if (tpe.grapple && run.map && !reaper) run.map.steps = Math.max(0, run.map.steps - tpe.grapple.v);
        return 'escaped';
      }
      const tpo = TP();
      if (tpo.savePoint && !run.savePointUsed) {
        run.savePointUsed = true; mark('save-point');
        await message('SAVE POINT', 'The world goes dark… and then green. Solar wakes at the last access point, everything she carried still with her. Sebastian would call it a checkpoint.');
        return 'savepoint';
      }
      const c = await gameOver();
      if (c === 'retry') { const s = JSON.parse(snap); run.carry = s.carry; save.items = s.items; save.th = s.th; run.fights = s.fights; run.tired = s.tired; persist(); continue; }
      return 'over';
    }
  }
  /* A Full Moon Operation (from the hub's list or the top of a block). The clock heals first. */
  async function fullMoon(op, { climb = false } = {}) {
    const own = !run;
    if (own) run = newRun({ ops: true });
    try {
      for (;;) {
        await clockScreen(op);
        await prepareBattle({ group: op.group, bg: op.arena, title: op.name });
        const snap = JSON.stringify({ items: save.items, th: save.th });
        const out = await battle({ group: op.group, bg: op.arena, label: 'Full Moon', block: op.place, boss: true, music: 'boss', nav: D.nav[op.id] ? op.id : 'boss', heat: 0, op });
        if (out.result === 'win') {
          const first = !opCleared(op.id);
          if (first) save.ops.cleared.push(op.id);
          save.clears++;
          await afterWin(out, { title: `Full Moon · ${op.name}`, op, first, back: climb ? 'Onward ›' : HO ? 'Continue' : 'Back to Operations' });
          return 'win';
        }
        const c = await gameOver();
        if (c === 'retry') { const s = JSON.parse(snap); save.items = s.items; save.th = s.th; persist(); continue; }
        return 'over';
      }
    } finally { if (own) run = null; }
  }
  /* After a win: rewards, fatigue, results, then any Persona evolution or new Haenim form. */
  async function afterWin(out, { title, strong = false, reaper = false, op = null, first = false, back = 'Continue', story = false }) {
    const tp = TP(), notes = [];
    const mult = strong ? Object.assign({}, D.progression.strongMult, tp.rivalsDare ? { exp: tp.rivalsDare.v } : {}) : {};
    const rew = out.rew || { exp: 0, yen: 0, drops: {} };
    if (strong) { rew.exp = Math.round(rew.exp * mult.exp); rew.yen = Math.round(rew.yen * mult.yen); if (tp.rivalsDare) notes.push('Rival’s Dare: double EXP'); }
    // Bond perks on the money: Jungwon's Stewardship (battles), Wren's Porter's Tip (Tartarus).
    // Jihoon's Treasure gloves: battle yen +15% (refines raise it) while he's in the fight.
    const yb = (tp.stewardship ? tp.stewardship.v : 0) + (tp.portersTip && run && !run.ops ? tp.portersTip.v : 0) + (BLD && BLD.yenBonus ? BLD.yenBonus(save, roster().map(m => m.id)) / 100 : 0);
    if (yb && rew.yen) { rew.yen = Math.round(rew.yen * (1 + yb)); notes.push(`Yen +${Math.round(yb * 100)}%`); }
    if (TT && run && !run.ops && !op && !story) TT.expBoost(run, rew, notes); // a moon shrine's Moon's Favour
    // Tarot Dust: what's left of Shadows in Tartarus (cards and refines run on it).
    if (BLD && run && !run.ops && !op && !story && rand() < 0.4 + (strong ? 0.3 : 0)) { const n = 1 + Math.floor(rand() * 3) + (strong ? 2 : 0) + Math.floor((D.floors[run.fi].bi || 0) / 2); rew.drops.tarot_dust = (rew.drops.tarot_dust || 0) + n; }
    // A Capsule Ticket, now and then (the life sim's capsule machine; gacha.js). Story mode only: practice has no mall.
    if (HO && run && !run.ops && !op && !story && D.items.capsule_ticket && rand() < (strong ? 0.12 : 0.05)) { addItem('capsule_ticket'); notes.push('A Capsule Ticket (the machine at Paulownia Mall)'); mark('capsule-ticket'); }
    // A full moon's first clear can leave one of Solar's naginatas (or a searcher's own weapon) behind; Fortune leaves two.
    if (BLD && op && first) BLD.bossWeapons(op.id).forEach(bw => { if (D.gear[bw] && !(save.gear.owned[bw] > 0)) { addGear(bw); notes.push(`${D.gear[bw].name}${BLD.namedTag(bw)}`); mark('boss-weapon'); } });
    // Shuffle Time (P3P): after an All-Out finish, a clean fast win, Strong Shadows, the Reaper or a full moon, or by chance.
    let shuffle = null;
    const due = BLD && !story && out.rating ? (window.__btShuffle ? 'chance' : BLD.shuffleDue(Object.assign({ strong, reaper, boss: !!op }, out.rating), rand)) : null;
    if (due) {
      shuffle = await shuffleTime(due, { tier: shuffleTier(op), bg: (curSpec && curSpec.bg) || '' });
      const f = shuffle.res.fx;
      if (f.expMult) rew.exp = Math.round(rew.exp * (1 + f.expMult));
      if (f.heal || f.hpLoss || f.th) carryEach(u => { if (f.heal) { u.hp = Math.min(u.maxHp, Math.round(u.hp + u.maxHp * f.heal)); u.sp = Math.min(u.maxSp, Math.round(u.sp + u.maxSp * f.heal)); } if (f.hpLoss) u.hp = Math.max(1, Math.round(u.hp - u.maxHp * f.hpLoss)); if (f.th) u.th = Math.min(100, (u.th || 0) + f.th); });
      if (f.th) roster().forEach(m => { save.th[m.id] = Math.min(100, (save.th[m.id] || 0) + f.th); });
      if (f.reaper && run && run.map) run.map.steps += f.reaper;
      if (f.curse && run) run.curse = f.curse;
    }
    save.yen += rew.yen;
    Object.entries(rew.drops).forEach(([k, n]) => addMat(k, n));
    let bonus = 0;
    if (op && first) { bonus = D.progression.bossBonusPoints; save.pts += bonus; }
    // Yukari's First Aid Kit and Rio's Stamina: a little HP after the win. Jihoon's Almighty Hoon: a strong win fires the party up.
    if (run && tp.firstAid) { let low = null; carryEach(u => { if (!low || u.hp / u.maxHp < low.hp / low.maxHp) low = u; }, false); if (low) { carryEach(u => { if (u.mid === low.mid) u.hp = Math.min(u.maxHp, Math.round(u.hp + u.maxHp * tp.firstAid.v)); }); notes.push(`First Aid Kit: ${low.name} +${Math.round(tp.firstAid.v * 100)}% HP`); } }
    if (run && tp.stamina) { carryEach(u => { u.hp = Math.min(u.maxHp, Math.round(u.hp + u.maxHp * tp.stamina.win)); }); notes.push('Stamina: the party +5% HP'); }
    if (run && strong && tp.almightyHoon) { run.hoon = true; notes.push('Almighty Hoon: the next fight starts with attack up'); }
    // Fatigue: members who fought get closer to Tired (not in operations: the clock just healed them). Akihiko's All Night: +2.
    const nowTired = [], tiredAfter = D.progression.tiredAfter + (tp.allNight ? tp.allNight.v : 0);
    if (run && !run.ops && !op) roster().forEach(m => {
      run.fights[m.id] = (run.fights[m.id] || 0) + 1;
      if (run.fights[m.id] >= tiredAfter && !run.tired[m.id]) { run.tired[m.id] = true; nowTired.push(m.id); }
    });
    persist();
    if (nowTired.length) tip('fatigue');
    await results({ title, out, rew, bonus, nowTired, op, reaper, back, notes, shuffle });
    await resolvePending();   // a ninth skill from a level-up: forget which?
    await pendingEvolutions();
    await resolvePending();   // an evolved Persona's new skills
    const forms = checkForms();
    for (const f of forms) await formUnlocked(f);
  }
  /* Tartarus-side bond perks (build.js battlePerks): story nights only; practice has no links. */
  const TP = () => (BLD && HO ? BLD.battlePerks(save, hoAvail()) : {});
  /* Change tonight's carried HP/SP/Theurgy for each member (run.carry; a missing entry is full). fn(u) edits { mid, name, hp, maxHp, sp, maxSp, th }. */
  function carryEach(fn, write = true) {
    if (!run) return;
    const units = buildParty(run.carry).map(u => ({ mid: u.mid, name: u.name, hp: u.hp, maxHp: u.maxHp, sp: u.sp, maxSp: u.maxSp, th: u.th }));
    units.forEach(fn);
    if (write) run.carry = Object.fromEntries(units.map(u => [u.mid, { hp: u.hp, sp: u.sp, th: u.th }]));
  }
  const shuffleTier = op => Math.max(1, Math.min(7, op ? 1 + D.ops.findIndex(o => o.id === op.id) : 1 + (run ? D.floors[run.fi].bi : save.ops.cleared.length)));

  /* ════════════════════════════════════════════════════
     SHUFFLE TIME (P3P): the cards show face up, flip, shuffle and spin; pick one. Rush picks for you. Reduced motion: no
     movement (the order still changes, out of sight). Test hooks: window.__btShuffle (always due), window.__btShuffleHand (a
     fixed hand), window.__btShufflePick (the index Rush/auto picks).
     ════════════════════════════════════════════════════ */
  const SH_WHY = { boss: 'The full moon is quiet', allout: 'All-Out finish', rating: 'A clean, fast win', strong: 'Strong Shadows', chance: 'The cards are turning…' };
  const SUIT_SVG = {
    cups: c => `<path d="M38 50h44c0 22-9 35-22 37v19h13v8H47v-8h13V87C47 85 38 72 38 50z" fill="${c}" stroke="#14070f" stroke-width="3"/><path d="M45 58h30" stroke="#fff" stroke-width="3" opacity=".6"/>`,
    coins: c => `<circle cx="60" cy="80" r="27" fill="${c}" stroke="#14070f" stroke-width="3"/><circle cx="60" cy="80" r="19" fill="none" stroke="#14070f" stroke-width="2"/><path d="M60 64l5 11h12l-10 7 4 12-11-7-11 7 4-12-10-7h12z" fill="#fff" opacity=".85"/>`,
    swords: c => `<path d="M57 34h6l3 64h-12z" fill="${c}" stroke="#14070f" stroke-width="3"/><rect x="42" y="98" width="36" height="7" fill="#ffd36b" stroke="#14070f" stroke-width="2.5"/><rect x="56" y="105" width="8" height="18" fill="#7a4a2a" stroke="#14070f" stroke-width="2.5"/><circle cx="60" cy="127" r="5" fill="#ffd36b" stroke="#14070f" stroke-width="2.5"/>`,
    wands: c => `<path d="M56 36h8l-2 92h-4z" fill="#a0603a" stroke="#14070f" stroke-width="3"/><path d="M60 40c-12-6-16-16-12-24 8 2 12 10 12 24zM60 40c12-6 16-16 12-24-8 2-12 10-12 24z" fill="${c}" stroke="#14070f" stroke-width="2.5"/><path d="M58 74c-10-2-14-8-14-14 7 0 12 5 14 14zM62 96c10-2 14-8 14-14-7 0-12 5-14 14z" fill="${c}" stroke="#14070f" stroke-width="2.5"/>`
  };
  const shFrame = inner => `<svg viewBox="0 0 120 180" aria-hidden="true"><defs><linearGradient id="shg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2b1a5c"/><stop offset="1" stop-color="#0d0c2c"/></linearGradient></defs>
    <rect x="2" y="2" width="116" height="176" rx="7" fill="#d9e4ff" stroke="#14070f" stroke-width="3"/><rect x="9" y="9" width="102" height="162" rx="4" fill="url(#shg)" stroke="#ffd36b" stroke-width="2"/>
    <path d="M14 14l10 0M14 14l0 10M106 14l-10 0M106 14l0 10M14 166l10 0M14 166l0-10M106 166l-10 0M106 166l0-10" stroke="#ffd36b" stroke-width="2"/>${inner}</svg>`;
  function shFace(c) {
    if (c.kind !== 'minor') return `<span class="sh-face major${c.kind === 'penalty' ? ' pen' : ''}"><img src="assets/femc/tarot/${esc(c.id)}.webp?v=${V()}" alt="" draggable="false"><b>${esc(c.name)}</b></span>`;
    const su = D.shuffle.suits[c.suit];
    return `<span class="sh-face minor" style="--c:${su.color}">${shFrame(SUIT_SVG[c.suit](su.color) + `<rect x="30" y="140" width="60" height="22" rx="3" fill="#14070f" stroke="#ffd36b" stroke-width="1.5"/><text x="60" y="157" fill="#fff4f9" font-family="Georgia, serif" font-size="16" font-weight="700" text-anchor="middle">${esc(c.num)}</text>`)}<b>${esc(c.name)}</b></span>`;
  }
  const shBack = () => `<span class="sh-back">${shFrame('<circle cx="60" cy="90" r="34" fill="none" stroke="#6ab0ff" stroke-width="3"/><circle cx="60" cy="90" r="24" fill="#0b1640" stroke="#ffd36b" stroke-width="2"/><path d="M66 74a18 18 0 1 0 0 32 14 14 0 1 1 0-32z" fill="#ffd36b"/><path d="M60 40v10M60 130v10M24 90h10M86 90h10M35 65l7 7M78 108l7 7M85 65l-7 7M42 108l-7 7" stroke="#6ab0ff" stroke-width="2.5" stroke-linecap="round"/>')}</span>`;
  let shState = null;
  function shuffleTime(why, ctx) {
    return new Promise(async resolve => {
      const tp = TP(), extra = tp.goodFortune ? 1 : 0, reduced = !FX || FX.reduced();
      const hand = Array.isArray(window.__btShuffleHand) ? window.__btShuffleHand.splice(0) : BLD.deal(rand, { tier: ctx.tier, extra, hard: !!(D.difficulty[ST().difficulty] || {}).tough, boss: why === 'boss', practice: !HO });
      const auto = rushActive();
      shState = { why, hand, phase: 'show', picked: null, res: null };
      save.shuffles = (save.shuffles || 0) + 1;
      screen = 'shuffle';
      root.classList.remove('bt-in-battle');
      music.play('floor');
      mark('shuffle'); mark('shuffle-' + why);
      const el = show(`<div class="bt-sh-bg"${ctx.bg ? ` style="background-image:url('${ctx.bg}')"` : ''}></div><div class="bt-sh-shade"></div>
        <div class="bt-sh-in"><p class="bt-kicker">${esc(SH_WHY[why] || 'Shuffle Time')}${extra ? ' · Kiriko’s Good Fortune: one more card' : ''}</p><h1 class="bt-sh-title"><span>SHUFFLE</span> <span>TIME</span></h1>
          <div class="bt-sh-hand" style="--n:${hand.length}">${hand.map((c, i) => `<button type="button" class="bt-sh-card" data-i="${i}" style="--slot:${i}" aria-label="Card ${i + 1}"><span class="in"><span class="front">${shFace(c)}</span>${shBack()}</span></button>`).join('')}</div>
          <p class="bt-sh-say" aria-live="polite">Watch the cards…</p>
          <div class="bt-sh-out" hidden></div>
          <div class="row" hidden><button type="button" class="bt-btn pink" data-sh-ok><span>Continue</span></button></div></div>`, `bt-shuffle${reduced ? ' reduced' : ''}`);
      el.style.setProperty('--spd', speed());
      const cards = [...el.querySelectorAll('.bt-sh-card')], say = el.querySelector('.bt-sh-say');
      sfx('summon'); tip('shuffle'); nav('shuffle');
      ctl = { kind: 'shuffle-wait', move() {}, pick() {}, back() {} };
      await sleep(auto ? 500 : 1300);
      // Flip face down, then shuffle (the order changes either way; with reduced motion it happens out of sight).
      el.classList.add('down'); sfx('move');
      shState.phase = 'shuffle';
      await sleep(reduced ? 150 : 420);
      const slots = cards.map((_, i) => i);
      const rounds = reduced || auto ? 1 : 6;
      for (let k = 0; k < rounds; k++) {
        for (let i = slots.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [slots[i], slots[j]] = [slots[j], slots[i]]; }
        cards.forEach((c, i) => c.style.setProperty('--slot', slots[i]));
        if (!reduced && !auto) { sfx('move'); await sleep(230); }
      }
      el.classList.add('spin');
      shState.phase = 'pick';
      say.textContent = 'Pick a card!';
      mark('shuffle-ready');
      // Keyboard / pad: ←→ walk the cards in their on-screen order.
      const order = () => cards.slice().sort((a, b) => +a.style.getPropertyValue('--slot') - +b.style.getPropertyValue('--slot'));
      let sel = 0, done = false;
      const paint = () => order().forEach((c, j) => c.classList.toggle('sel', j === sel));
      const choose = async cardEl => {
        if (done) return; done = true; ctl = null;
        const i = +cardEl.dataset.i, c = hand[i];
        el.classList.remove('spin'); el.classList.add('picked');
        cardEl.classList.add('chosen'); sfx('ok');
        shState.phase = 'reveal'; shState.picked = i;
        await sleep(reduced ? 120 : 380);
        // Kat's card-flip flare (art/fx/shuffle-flip.webp, 5F): a CSS sprite on the card; off with reduced motion.
        const flare = !reduced && FX && FX.artSrc && FX.artSrc('shuffle-flip');
        if (flare) { el.style.setProperty('--flip', `url('${flare}')`); el.classList.add('has-flip'); mark('fx-art-shuffle-flip'); }
        cardEl.classList.add('up');
        const res = BLD.applyShuffle(save, c, { R: rand, tier: ctx.tier, party: roster().map(m => m.id) });
        shState.res = res;
        persist();
        mark('shuffle-pick'); mark('shuffle-' + (c.kind === 'minor' ? c.suit : c.kind === 'penalty' ? 'penalty' : 'major')); mark('shuffle-out-' + (c.out || c.suit));
        sfx(res.penalty ? 'ko' : 'unlock');
        if (res.penalty) nav('shufflePenalty');
        const out = el.querySelector('.bt-sh-out');
        out.hidden = false;
        // A Revelation card (the Fool, the Empress, the Star) shows its face: Kat's set art in the drawn frame (icons.js revCard).
        const rc = res.fx.card && ICON && ICON.revCard ? ICON.revCard(res.fx.card, { cls: 'bt-sh-rev' }) : '';
        out.classList.toggle('has-card', !!rc);
        out.innerHTML = `${rc}<b>${esc(c.name)}${c.kind === 'penalty' ? ' · reversed' : ''}</b>${res.lines.map(l => `<span>${esc(l)}</span>`).join('')}`;
        say.textContent = res.penalty ? 'Upside down…' : BLD.cardText(c);
        blogAdd(`Shuffle Time: ${c.name} · ${res.lines.join(', ')}`, res.penalty ? 'miss' : 'buff');
        await sleep(reduced ? 200 : 650);
        cards.forEach(x => { if (x !== cardEl) x.classList.add('up', 'other'); });
        const row = el.querySelector('.row'); row.hidden = false;
        const fin = () => { ctl = null; shState.phase = 'done'; resolve({ card: c, res }); };
        el.querySelector('[data-sh-ok]').addEventListener('click', () => { sfx('ok'); fin(); });
        if (auto) { await sleep(900); if (shState.phase !== 'done') fin(); } else buttonNav(el);
      };
      cards.forEach(c => c.addEventListener('click', () => { if (shState.phase === 'pick') choose(c); }));
      cards.forEach(c => c.addEventListener('pointerenter', () => { if (shState.phase !== 'pick') return; sel = order().indexOf(c); paint(); }));
      ctl = { kind: 'shuffle', items: hand, move(d) { sel = (sel + (d > 0 ? 1 : -1) + cards.length) % cards.length; sfx('move'); paint(); }, pick() { choose(order()[sel]); }, back() {}, pickValue(v) { const c = cards.find(x => +x.dataset.i === +v); if (c) choose(c); } };
      paint();
      if (auto) { await sleep(450); const k = window.__btShufflePick != null ? +window.__btShufflePick : Math.floor(Math.random() * cards.length); choose(cards[Math.max(0, Math.min(cards.length - 1, k))]); }
    });
  }
  /* Evolutions that are due play one after another. Returns how many played. */
  let evolving = false;
  async function pendingEvolutions() {
    if (evolving) return 0;
    evolving = true;
    let n = 0;
    try {
      for (const e of E.evolutionsDue(save, lvOf)) { save.evo[e.mid] = true; persist(); await evolution(e); n++; }
    } finally { evolving = false; }
    return n;
  }

  /* ════════════════════════════════════════════════════
     THE NODE MAP
     ════════════════════════════════════════════════════ */
  const ROOM = {
    start: { name: 'Arrival', icon: 'room-start' }, shadow: { name: 'Shadow', icon: 'room-shadow', color: '#4b9bff' }, chest: { name: 'Treasure', icon: 'room-chest', color: '#ffd36b' },
    locked: { name: 'Locked chest', icon: 'room-locked', color: '#4fb3ff' }, clock: { name: 'Clock', icon: 'room-clock', color: '#ff9a3d' }, access: { name: 'Access point', icon: 'room-access', color: '#5fe0b0' },
    stairs: { name: 'Stairs', icon: 'room-stairs', color: '#a77bff' }, event: { name: 'Something here', icon: 'room-event', color: '#ff8cc0' }, empty: { name: 'Corridor', icon: 'room-empty', color: '#8a7a9a' },
    shrine: { name: 'Night Orchid', icon: 'room-orchid', color: '#c9b8ff' }
  };
  if (TT) Object.assign(ROOM, TT.ROOMS); // guardian, vault, puzzle, rest, rare, trap, altar, crack
  /* Tartarus bond perks on a fresh floor (build.js): Koromaru's Good Nose (one more chest), Jaemin's Recovery Party (the nightOrchid hook) (a
     shrine), Judy's Tech Savvy (locked chests roll one more item), Fuuka's Oracle Ping (chests and events marked), Widowmaker's
     Infra-Sight (Shadow rooms marked), Mitsuru's Field Report (the way to the stairs), Rohan's Sketch the Floor (floors cleared
     before are fully mapped), Mark's Setlist (one more layer ahead). Mint Blossom can turn up in a chest from Arqa on. */
  function mapPerks(floor, map) {
    const tp = TP(), N = map.nodes, bi = floor.bi || 0;
    const pickN = list => list[Math.floor(rand() * list.length)];
    if (BLD && bi >= BLD.CHEST_WEAPON.fromBlock && !(save.gear.owned[BLD.CHEST_WEAPON.id] > 0)) N.filter(n => n.type === 'chest').forEach(n => { if (rand() < BLD.CHEST_WEAPON.chance) n.chest = { gear: BLD.CHEST_WEAPON.id }; });
    if (tp.goodNose) { const e = N.filter(n => n.type === 'empty'); if (e.length) { const n = pickN(e); n.type = 'chest'; n.chest = MAP.rollChest(rand, bi, false); n.perk = 'goodNose'; } }
    if (tp.nightOrchid) { const e = N.filter(n => n.type === 'empty'); if (e.length) pickN(e).type = 'shrine'; }
    if (tp.techSavvy) N.filter(n => n.type === 'locked' && n.chest).forEach(n => { const t = D.map.chest.items; n.chest = Object.assign({}, n.chest, { extra: pickN(t[Math.min(bi + 1, t.length - 1)]) }); });
    if (tp.oraclePing) N.filter(n => ['chest', 'locked', 'event', 'shrine'].includes(n.type)).forEach(n => { n.seen = n.known = true; });
    if (tp.infraSight) N.filter(n => n.type === 'shadow').forEach(n => { n.seen = n.known = true; });
    if (tp.fieldReport) { const { prev } = MAP.bfs(map, map.stairs); let c = map.start, k = 0; while (c && c !== map.stairs && k++ < 40) { const n = MAP.get(map, c); n.seen = n.known = true; n.route = true; c = prev[c]; } }
    if (tp.sketchFloor && save.floorsMapped.includes(floor.id)) N.forEach(n => { n.seen = n.known = true; });
    if (tp.setlist) extraSight(map);
  }
  function extraSight(map) { const { dist } = MAP.bfs(map, map.pos); map.nodes.forEach(n => { if (dist[n.id] <= 2) n.seen = n.known = true; else if (dist[n.id] === 3) n.seen = true; }); }
  const MOODS = [['def', 'Sad', 'defense up'], ['atk', 'Angry', 'attack up'], ['crit', 'Plotting', 'crits up'], ['agi', 'Shoes', 'agility up']];
  const hasJuno = () => !!save.evo.fuuka;
  let mapLine = null, mapTyped = null;
  function explore(floor) {
    return new Promise(resolve => {
      const map = run.map;
      let busy = false, sel = 0, done = false;
      const finish = r => { if (done) return; done = true; ctl = null; resolve(r); };
      const say = (key, vars) => { const l = D.nav[key]; if (!l) return; mapLine = [String(pickOne(l[0])).replace(/\{(\w+)\}/g, (_, k) => (vars && vars[k] != null ? vars[k] : '')), l[1] || 'neutral']; mark('mapnav-' + key); };
      let mode = null; // 'roads': Sebastian's Back Roads, two steps at once
      const options = () => (mode === 'roads'
        ? (() => { const { dist } = MAP.bfs(map, map.pos); return map.nodes.filter(n => dist[n.id] === 2 && n.type !== 'start'); })()
        : MAP.neighbors(map, map.pos)).sort((a, b) => (a.x - b.x) || (a.y - b.y));
      if (!map.started) { map.started = true; say(floor.nav === 'floor' ? 'mapStart' : floor.nav); }
      music.play('floor');
      let animFrom = null;
      const render = () => {
        screen = 'map';
        root.classList.remove('bt-in-battle');
        const opts = options();
        sel = Math.min(sel, opts.length - 1);
        const el = show(mapHtml(floor, map, opts, sel, animFrom, mode), 'bt-map');
        animFrom = null;
        wireTools(el);
        el.querySelectorAll('[data-node]').forEach(g => {
          g.addEventListener('click', () => { const i = opts.findIndex(n => n.id === g.dataset.node); if (i >= 0) { sel = i; go(opts[i].id); } });
          g.addEventListener('pointerenter', () => { const i = opts.findIndex(n => n.id === g.dataset.node); if (i >= 0 && i !== sel) { sel = i; paintSel(el, opts, sel); } });
        });
        el.querySelectorAll('[data-act]').forEach(b => b.addEventListener('click', () => act(b.dataset.act)));
        ctl = {
          kind: 'map', opts,
          move(d) { if (!opts.length) return; sel = (sel + (d > 0 ? 1 : -1) + opts.length) % opts.length; sfx('move'); paintSel(el, opts, sel); },
          pick() { if (opts[sel]) go(opts[sel].id); },
          back() { act('items'); },
          key(e) { if (e.key === 's' || e.key === 'S') { act('scan'); return true; } if (e.key === 'i' || e.key === 'I') { act('items'); return true; } return false; },
          go: id => go(id)
        };
        paintSel(el, opts, sel);
        if (mapLine && mapLine !== mapTyped) { mapTyped = mapLine; typeInto(el.querySelector('.bt-map-nav .tx'), mapLine[0]); }
        const pm = el.querySelector('.party-mark');
        if (pm && pm.dataset.to) requestAnimationFrame(() => requestAnimationFrame(() => { pm.style.transform = pm.dataset.to; }));
        mark('map');
      };
      async function act(a) {
        if (busy) return;
        if (a === 'scan') {
          if (!map.scans) { sfx('back'); return; }
          const found = MAP.scan(map, hasJuno() ? 99 : 3); sfx('ok'); say(hasJuno() ? 'mapScanJuno' : 'mapScan'); mark('map-scan');
          if (TT) TT.afterScan(ttCtx(floor, say), found); // hidden rooms found, traps marked
          render(); return;
        }
        if (a === 'items') {
          busy = true; sfx('ok');
          const r = await fieldItems();
          busy = false;
          if (r === 'leave') return finish('leave');
          render(); return;
        }
        if (a === 'roads') { if (map.roadsUsed) return; mode = mode === 'roads' ? null : 'roads'; sfx(mode ? 'ok' : 'back'); mark('back-roads-' + (mode ? 'on' : 'off')); sel = 0; render(); return; }
        if (a === 'ticket') {
          if (run.ticketUsed) return;
          busy = true; run.ticketUsed = true; sfx('ok'); mark('through-ticket');
          const r = await room(floor, MAP.get(map, map.stairs), say);
          busy = false;
          if (r) return finish(r);
          render(); return;
        }
      }
      async function go(id) {
        if (busy || done) return;
        busy = true;
        const from = map.pos, tp = TP();
        let res;
        if (mode === 'roads') {
          // Back Roads: skip the room between, two steps for one, and the Reaper's counter doesn't move.
          res = { ok: true }; map.prev = map.pos; map.pos = id; MAP.visit(map, id); map.roadsUsed = true; mode = null; mark('back-roads');
        } else res = MAP.move(map, id, { noReaper: !diff().reaper, reaperSteps: D.map.reaperSteps + (tp.timetable ? tp.timetable.v : 0) });
        if (!res.ok) { busy = false; return; }
        if (tp.setlist) extraSight(map);
        if (TT) TT.afterMove(ttCtx(floor, say)); // walls noticed in passing, golden Shadows running off, Fuuka and the party talking
        sfx('move'); mark('map-move');
        animFrom = from;
        render();
        await sleep(320);
        if (res.warn) { say('reaperNear'); mark('reaper-warn'); tip('reaper'); }
        if (res.spawned) {
          say('reaperCame'); sfx('ko'); mark('reaper-spawn'); tip('reaper');
          // Aigis's Sentry Mode: she holds it off, and it loses track for a few steps (once a night).
          if (tp.sentry && map.reaper && !run.sentryUsed) { run.sentryUsed = true; map.reaper.stun = tp.sentry.v; mapLine = ['Aigis is holding it back! It’s lost track of us for now.', 'surprised']; mark('sentry'); }
          render(); await sleep(500);
        }
        if (res.caught) {
          mark('reaper-fight');
          const r = await fight(floor, { group: ['reaper'], reaper: true });
          if (r === 'over' || r === 'savepoint') return finish(r);
          if (r === 'win') { MAP.banishReaper(map); say('reaperWin'); }
          else { MAP.retreat(map); if (map.reaper) map.reaper.stun = 2; say('escape'); }
          busy = false; render(); return;
        }
        const node = MAP.get(map, map.pos);
        const r = await room(floor, node, say);
        if (r) return finish(r);
        busy = false;
        sel = 0;
        render();
      }
      render();
    });
  }
  function paintSel(el, opts, sel) {
    el.querySelectorAll('[data-node]').forEach(g => g.classList.remove('sel'));
    const cur = opts[sel];
    if (!cur) return;
    const g = el.querySelector(`[data-node="${cur.id}"]`); if (g) g.classList.add('sel');
    const info = el.querySelector('.bt-map-info');
    if (info) info.innerHTML = roomInfo(cur);
  }
  /* What Fuuka can tell about a room before you step in. */
  function roomInfo(n) {
    if (!n.known) return `<b>???</b><span>Fuuka can’t read this room yet.</span>`;
    const tti = TT && TT.info(n);
    if (tti) return tti;
    if (TT && TT.look(n) === 'empty' && n.type === 'trap') return `<b>Corridor</b><span>An empty corridor.</span>`;
    const r = ROOM[n.type] || ROOM.empty;
    if (n.type === 'shadow') {
      if (n.cleared) return `<b>Cleared</b><span>Nothing left but ash.</span>`;
      const names = [...new Set(n.group.map(k => D.enemies[k.split('@')[0]].name))];
      return `<b>${n.strong ? 'Strong Shadows' : 'Shadows'}</b><span>${esc(names.join(' · '))}${n.strong ? ' · tougher, better rewards' : ''}</span>`;
    }
    if (n.type === 'chest' || n.type === 'locked') return `<b>${esc(r.name)}</b><span>${n.opened ? 'Already opened.' : n.type === 'locked' ? `Needs a Tartarus Key (you have ${save.items.tartarus_key || 0}).` : 'Something glints inside.'}</span>`;
    if (n.type === 'clock') return `<b>Clock</b><span>${n.used ? 'It has stopped chiming.' : 'Heals everyone fully and clears fatigue. Once.'}</span>`;
    if (n.type === 'access') return `<b>Access point</b><span>Saves your progress. You can leave Tartarus from here.</span>`;
    if (n.type === 'stairs') return `<b>Stairs</b><span>The way up.</span>`;
    if (n.type === 'event') return `<b>Something here</b><span>${n.used ? 'Quiet now.' : 'Fuuka senses something odd.'}</span>`;
    if (n.type === 'shrine') return `<b>Night Orchid</b><span>${n.used ? 'The orchids have closed.' : 'A small shrine: 30% HP and SP. Once.'}</span>`;
    return `<b>${esc(r.name)}</b><span>${n.type === 'start' ? 'Where you arrived.' : 'An empty corridor.'}</span>`;
  }
  /* Party status for the map panel (HP/SP as they'll start the next fight). */
  function fieldUnits() { return buildParty(run.carry); }
  function mapHtml(floor, map, opts, sel, animFrom, mode = null) {
    const tp = TP();
    // Yunjin's Sticker Code: green when the party knows a weakness it can hit, red when it doesn't.
    let pels = null;
    const sticker = n => {
      if (!tp.stickerCode || n.type !== 'shadow' || n.cleared || !n.known) return '';
      if (!pels) { pels = new Set(); fieldUnits().forEach(u => { pels.add(u.weapon); u.skills.forEach(id => { const sk = D.skills[id]; if (sk && ['dmg', 'insta'].includes(sk.type)) pels.add(sk.el); }); }); }
      const ok = n.group.some(k => { const kind = k.split('@')[0], kn = save.known[kind] || {}, d = D.enemies[kind]; return d && Object.keys(kn).some(el => kn[el] && d.aff[el] === 'weak' && pels.has(el)); });
      return ok ? 'g' : 'r';
    };
    // Portrait-ish windows draw the floor bottom-to-top so it fills the space.
    const vert = phone() || innerWidth / innerHeight < 1.2;
    const W = vert ? 400 : 1000, H = vert ? 520 : 560, padX = vert ? 46 : 70, padY = vert ? 40 : 56;
    const pos = n => vert ? { x: padX + n.y * (W - padX * 2), y: H - padY - n.x * (H - padY * 2) } : { x: padX + n.x * (W - padX * 2), y: padY + n.y * (H - padY * 2) };
    const nodes = map.nodes.filter(n => n.seen);
    const here = MAP.get(map, map.pos);
    const optIds = opts.map(n => n.id);
    // Edges: walked (both visited) in pink; seen in faint teal; edges into the fog aren't drawn.
    const edges = [];
    map.nodes.forEach(a => a.links.forEach(id => {
      const b = MAP.get(map, id);
      if (a.id > b.id || !a.seen || !b.seen) return;
      const pa = pos(a), pb = pos(b), walked = a.visited && b.visited, live = (a.id === map.pos && optIds.includes(b.id)) || (b.id === map.pos && optIds.includes(a.id));
      const sc = map.shortcut && map.shortcut.includes(a.id) && map.shortcut.includes(b.id), hid = a.hidden || b.hidden;
      edges.push(`<line x1="${pa.x}" y1="${pa.y}" x2="${pb.x}" y2="${pb.y}" class="e${walked ? ' walked' : ''}${live ? ' live' : ''}${a.known && b.known ? '' : ' fog'}${sc ? ' shortcut' : ''}${hid ? ' crack' : ''}"/>`);
    }));
    const S = vert ? 22 : 27;
    const nodeSvg = n => {
      const t = TT ? TT.look(n) : n.type; // an unspotted trap looks like a corridor
      const p = pos(n), r = ROOM[t] || ROOM.empty, opt = optIds.includes(n.id), cur = n.id === map.pos;
      const known = n.known, icon = !known ? 'room-unknown' : (t === 'shadow' || t === 'guardian' || t === 'rare') && n.cleared ? 'room-empty' : r.icon;
      const col = !known ? '#3a2a3a' : t === 'shadow' && n.strong && !n.cleared ? '#ff3b6b' : (r.color || '#8a7a9a');
      const cls = ['node', `t-${known ? t : 'unknown'}`, n.visited ? 'visited' : '', cur ? 'cur' : '', opt ? 'opt' : '', (n.cleared || n.opened || n.used) ? 'done' : '', n.strong && !n.cleared && known ? 'strong' : '', n.hidden ? 'hidden-room' : '', n.risky && known ? 'risky' : ''].join(' ');
      const label = !known ? '???' : t === 'shadow' ? (n.cleared ? 'Cleared' : n.strong ? 'Strong' : 'Shadow') : t === 'rare' && !n.cleared && n.flee != null ? `Rare · ${n.flee}` : t === 'guardian' && n.cleared ? 'Beaten' : r.name;
      const IS = S * (t === 'empty' && known ? 0.9 : 1.42);
      const ic = ROOM_ART.has(icon) ? `<image class="glyph art" href="${ICON_DIR}${icon}.webp?v=${ART_V}" x="${p.x - IS / 2}" y="${p.y - IS / 2}" width="${IS}" height="${IS}"/>` : ICON.svg(icon, known && n.type === 'shadow' && n.strong && !n.cleared ? '#ff3b6b' : null, 'glyph').replace('<svg class="bt-icon ', `<svg x="${p.x - IS / 2}" y="${p.y - IS / 2}" width="${IS}" height="${IS}" class="bt-icon `);
      return `<g class="${cls}" ${opt ? `data-node="${n.id}" role="button" tabindex="-1" aria-label="${esc(label)}"` : ''} style="--c:${col}">
        ${opt ? `<polygon class="ring" points="${p.x},${p.y - S - 9} ${p.x + S + 9},${p.y} ${p.x},${p.y + S + 9} ${p.x - S - 9},${p.y}"/>` : ''}
        <g class="nt" style="transform-origin:${p.x}px ${p.y}px"><polygon class="tile" points="${p.x},${p.y - S} ${p.x + S},${p.y} ${p.x},${p.y + S} ${p.x - S},${p.y}"/><polygon class="tile-in" points="${p.x},${p.y - S + 6} ${p.x + S - 6},${p.y} ${p.x},${p.y + S - 6} ${p.x - S + 6},${p.y}"/>${ic}</g>
        <text x="${p.x}" y="${p.y + S + (vert ? 15 : 19)}" class="lbl">${esc(label.toUpperCase())}</text>${sticker(n) ? `<circle class="sticker ${sticker(n)}" cx="${p.x + S * 0.78}" cy="${p.y - S * 0.78}" r="${vert ? 6 : 7.5}"/>` : ''}${n.route && !n.visited ? `<circle class="route" cx="${p.x}" cy="${p.y}" r="${S * 0.32}"/>` : ''}</g>`;
    };
    const hp = pos(here), lift = S + (vert ? 28 : 36), fromN = animFrom && MAP.get(map, animFrom), fp = fromN ? pos(fromN) : hp;
    const tf = p => `translate(${p.x}px, ${p.y - lift}px)`;
    // Solar's marker: a face crop (from the face-focus table) in a pink ring with a pointer down to her room.
    const mr = vert ? 19 : 24, mc = mr - 4, ff = focusOf('solar', 'serious'), iw = mc * 0.7 / (ff.s / 100), ih = iw * ff.ar;
    const marker = `<g class="party-mark" style="transform:${tf(fp)}"${fromN ? ` data-to="${tf(hp)}"` : ''}><path d="M-8 ${mr - 3}h16l-8 ${vert ? 11 : 13}z" class="pm-tip"/><circle r="${mr}" class="pm-ring"/><clipPath id="pmclip"><circle r="${mc}"/></clipPath><circle r="${mc}" class="pm-bg"/><image href="${pimg('solar', 'serious')}" x="${(-ff.x / 100 * iw).toFixed(1)}" y="${(-mc * 0.2 - ff.y / 100 * ih).toFixed(1)}" width="${iw.toFixed(1)}" height="${ih.toFixed(1)}" clip-path="url(#pmclip)" preserveAspectRatio="none"/><circle r="${mc}" class="pm-in"/></g>`;
    let reaper = '';
    if (map.reaper) {
      const rn = MAP.get(map, map.reaper.node), rp = pos(rn);
      reaper = `<g class="reaper-mark" transform="translate(${rp.x} ${rp.y})"><circle r="${S + 12}" class="rm-aura"/><image href="${sart('reaper')}" x="-${S + 6}" y="-${S + 22}" width="${(S + 6) * 2}" height="${(S + 6) * 2.4}" preserveAspectRatio="xMidYMid meet"/><text y="${S + 22}" class="lbl reaper">THE REAPER</text></g>`;
    }
    const svg = `<svg class="bt-mapsvg${vert ? ' vert' : ''}" style="--bt:${floor.color};--bt2:${floor.tint || floor.color}" viewBox="0 0 ${W} ${H}" role="group" aria-label="${esc(floor.label)} map">
      <defs><pattern id="mgrid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="rgba(125,255,192,.07)" stroke-width="1"/></pattern></defs>
      <rect width="${W}" height="${H}" fill="url(#mgrid)"/>
      ${edges.join('')}${nodes.map(nodeSvg).join('')}${reaper}${marker}</svg>`;
    const R = D.map.reaperSteps, steps = map.steps, calmFloor = !diff().reaper && !map.reaper, danger = map.reaperGone || calmFloor ? 0 : Math.min(1, steps / (R + (tp.timetable ? tp.timetable.v : 0)));
    const units = fieldUnits();
    const partyHtml = units.map(u => {
      const m = member(u.mid);
      return `<div class="bt-mp${run.tired[u.mid] ? ' tired' : ''}" style="--c:${m.color}"><i class="av fcb">${fimg(u.mid, m.faces.idle)}</i><div><b>${esc(u.name)}<small>Lv ${u.lvl}${run.tired[u.mid] ? ' · <em>Tired</em>' : ''}</small></b>
        <span class="bar hp"><i style="width:${u.hp / u.maxHp * 100}%"></i></span><span class="bar sp"><i style="width:${u.sp / u.maxSp * 100}%"></i></span><span class="bar th${u.th >= 100 ? ' full' : ''}"><i style="width:${u.th}%"></i></span></div></div>`;
    }).join('');
    const line = mapLine || ['…', 'neutral'];
    // A line can be someone in the party's (tartarus.js chatter: [text, face, member id]); else it's the navigator's.
    const spk = line[2] && member(line[2]) ? member(line[2]) : null;
    const cur = opts[sel];
    const gl = TT ? TT.goal(map) : null;
    return `<div class="bt-map-bg" style="background-image:url('${floor.bg}')"></div><div class="bt-map-shade${floor.hiddenFloor ? ' tt-hidden' : ''}" style="--bc:${floor.color};--bc2:${floor.tint || floor.color}"></div>
      <header class="bt-top bt-map-top">
        <div class="bt-floorlabel"><b>${esc(floor.label)}</b><span>${esc(floor.hiddenFloor ? 'Hidden floor' : floor.block)}<em><br>Tartarus${floor.top ? ' · block top' : ''}${floor.hiddenFloor ? ` · ${esc(floor.block)}` : ''}</em></span></div>
        <div class="bt-steps${map.reaper ? ' hunted' : danger > 0.75 ? ' near' : ''}" title="Linger too long and the Reaper comes."><span>Steps <b>${steps}</b>${tp.timetable && !map.reaper && !map.reaperGone && !calmFloor ? ` / ${R + tp.timetable.v}` : ''}</span><i style="--p:${danger}"></i><em>${map.reaper ? (diff().reaper ? 'THE REAPER IS HERE' : 'The Reaper isn’t chasing') : map.reaperGone ? 'The Reaper is gone' : calmFloor ? 'Story · no Reaper' : danger > 0.75 ? 'Something is coming…' : 'Quiet'}</em></div>
        <div class="bt-tools"><span class="bt-yen">${ICON.svg('yen')}${yen(save.yen)}</span>${tools()}</div>
      </header>
      <div class="bt-map-stage">${svg}</div>
      <aside class="bt-map-side">
        ${gl ? `<div class="tt-goal"><span class="${gl.stairs ? 'ok' : ''}"><b>Goal</b>Find the stairs</span><span><b>Side rooms</b>${gl.done} of ${gl.side} done${gl.side && gl.done >= gl.side ? ' ✓' : ''}</span></div>` : ''}
        <div class="bt-map-info">${cur ? roomInfo(cur) : ''}</div>
        <div class="bt-map-party">${partyHtml}</div>
        <div class="bt-map-acts">
          <button type="button" class="bt-btn" data-act="scan"${map.scans ? '' : ' disabled'}><span>Fuuka’s scan</span><small>${map.scans ? (hasJuno() ? 'Juno · whole floor' : 'Nearby rooms') : 'Used'}</small></button>
          <button type="button" class="bt-btn" data-act="items"><span>${BR ? 'Menu' : 'Items'}</span><small>${BR ? 'Items · Equipment · ' : ''}${Object.values(save.items).reduce((a, b) => a + b, 0)}${BR ? ' items' : ''}</small></button>
          ${tp.backRoads ? `<button type="button" class="bt-btn${mode === 'roads' ? ' pink' : ''}" data-act="roads"${map.roadsUsed ? ' disabled' : ''}><span>Back Roads</span><small>${map.roadsUsed ? 'Used on this floor' : mode === 'roads' ? 'Pick a room two steps away' : 'Sebastian · two steps, no Reaper'}</small></button>` : ''}
          ${tp.throughTicket && map.pos !== map.stairs ? `<button type="button" class="bt-btn" data-act="ticket"${run.ticketUsed ? ' disabled' : ''}><span>Through Ticket</span><small>${run.ticketUsed ? 'Used tonight' : 'Wren · straight to the stairs'}</small></button>` : ''}
        </div>
        <p class="bt-hint">${phone() ? 'Tap a lit room to move' : '←→ pick a room · Enter move · S scan · I items'}</p>
      </aside>
      <div class="bt-map-nav${spk ? ' mate' : ''}"${spk ? ` style="--mc:${spk.color || '#ff8cc0'}"` : ''}><div class="pic fcb">${spk ? fimg(spk.id, line[1]) : fimg(NAVI.id, navFace(line[1]))}</div><p><b>${esc(spk ? spk.name : NAVI.name)}</b><span class="tx">${esc(line[0])}</span></p></div>`;
  }

  /* A full-screen room panel (chest, access point, clock, stairs, events). Resolves with the chosen button's value. */
  function roomPanel({ bg, cls = '', kicker = '', title = '', body = '', buttons = [{ v: 'ok', label: 'Continue', pink: true }], fuuka = null, name = 'room' }) {
    screen = 'room';
    root.classList.remove('bt-in-battle');
    return new Promise(res => {
      const el = show(`<div class="bt-room-bg" style="background-image:url('${bg}')"></div><div class="bt-room-shade"></div>
        <div class="bt-room-in">${kicker ? `<p class="bt-kicker">${esc(kicker)}</p>` : ''}<h1>${title}</h1><div class="bt-room-body">${body}</div>
        ${fuuka ? `<div class="bt-nav bt-room-nav"><div class="pic fcb">${fimg(NAVI.id, navFace(fuuka[1] || 'neutral'))}</div><p><b>${esc(NAVI.name)}</b>${esc(fuuka[0])}</p></div>` : ''}
        <div class="row">${buttons.map(b => `<button type="button" class="bt-btn${b.pink ? ' pink' : ''}" data-v="${esc(b.v)}"${b.off ? ' disabled' : ''}><span>${esc(b.label)}</span>${b.small ? `<small>${esc(b.small)}</small>` : ''}</button>`).join('')}</div></div>`, `bt-room ${cls}`);
      el.querySelectorAll('[data-v]').forEach(b => b.addEventListener('click', () => { sfx('ok'); res(b.dataset.v); }));
      buttonNav(el, { back: () => { sfx('back'); res(buttons[buttons.length - 1].v); } });
      mark('room-' + name);
    });
  }
  const navLine = key => { const l = D.nav[key]; return l ? [String(pickOne(l[0])), l[1]] : null; };
  /* What tartarus.js gets to work with on a floor (its rooms, puzzles and chatter). say: the map's Fuuka line (explore). */
  function ttCtx(floor, say = () => {}) {
    return {
      D, MAP, ICON, BLD, HO, ART_V, rand, floor, say, navLine, roomPanel, carryEach, rest, memoryFound, roster, member, fimg, esc, yen, gearLine, phone, sfx, mark, tip, persist, addItem, addMat, addGear, show,
      get save() { return save; }, get run() { return run; },
      fight: o => fight(floor, o),
      line: l => { mapLine = l; },
      sleep, speed, setCtl: c => { ctl = c; },
      solarAg: () => memberStats(D.party[0], save.lvl, treeFx()).ag,
      plumes: n => { if (HS) HS.plumes = (HS.plumes || 0) + n; }
    };
  }
  const lootHtml = c => {
    const rows = [];
    if (c.yen) rows.push(`<div class="bt-loot">${ICON.svg('yen')}<b>${yen(c.yen)}</b></div>`);
    if (c.item) rows.push(`<div class="bt-loot">${ICON.of(c.item)}<b>${esc(D.items[c.item].name)}${c.n > 1 ? ` ×${c.n}` : ''}</b><span>${esc(D.items[c.item].desc)}</span></div>`);
    if (c.gear) rows.push(`<div class="bt-loot${D.gear[c.gear].art ? ' art' : ''}">${D.gear[c.gear].art ? `<img${D.gear[c.gear].artWide ? ' class="wide"' : ''} src="${D.gear[c.gear].art}?v=${ART_V}" alt="">` : ICON.of(c.gear)}<b>${esc(D.gear[c.gear].name)}</b><span>${esc(gearLine(c.gear))}</span></div>`);
    if (c.extra) rows.push(`<div class="bt-loot">${ICON.of(c.extra)}<b>${esc(D.items[c.extra].name)}</b><span>Tech Savvy: one more thing inside.</span></div>`);
    return rows.join('');
  };
  const grant = c => { if (c.yen) save.yen += c.yen; if (c.item) addItem(c.item, c.n || 1); if (c.gear) addGear(c.gear); if (c.extra) addItem(c.extra, 1); persist(); };
  /* Resolve the room the party just walked into. Returns 'up' | 'leave' | 'over' to end the floor, else nothing. */
  async function room(floor, n, say) {
    const T = 'assets/femc/bg/tartarus-treasure.webp', AP = 'assets/femc/bg/tartarus-access-point.webp';
    // tartarus.js's rooms (and its event scenes; the stairs on hidden floors and in Monad).
    if (TT && TT.rooms[n.type] && (n.type !== 'stairs' || TT.ownsStairs(floor))) return TT.rooms[n.type](ttCtx(floor, say), floor, n);
    if (n.type === 'shadow' && !n.cleared) {
      // Kasumi's Light Feet: sometimes the party can slip past (Solar chooses).
      const tpl = TP();
      if (tpl.lightFeet && !n.slipChecked) {
        n.slipChecked = true;
        if (rand() < tpl.lightFeet.v) {
          const v = await roomPanel({ bg: floor.bg, cls: 'event', kicker: `${floor.label} · ${floor.block}`, title: 'LIGHT FEET', name: 'light-feet',
            body: '<p>The Shadows haven’t noticed. Kasumi’s footwork says you could slip right past them.</p>', buttons: [{ v: 'slip', label: 'Slip past', pink: true }, { v: 'fight', label: 'Fight anyway' }] });
          if (v === 'slip') { n.cleared = true; n.slipped = true; mark('light-feet'); say('empty'); return null; }
        }
      }
      const r = await fight(floor, { group: n.group, strong: n.strong });
      if (r === 'over' || r === 'savepoint') return r;
      if (r === 'win') { n.cleared = true; const t = roster().find(m => run.tired[m.id] && run.fights[m.id] === D.progression.tiredAfter); say(t ? 'tired' : 'win', { name: t && t.name }); }
      else { MAP.retreat(run.map); say('escape'); }
      return null;
    }
    if (n.type === 'chest' && !n.opened) {
      sfx('unlock'); say('chest');
      n.opened = true; grant(n.chest);
      await roomPanel({ bg: T, cls: 'chest', kicker: `${floor.label} · ${floor.block}`, title: 'TREASURE', body: lootHtml(n.chest), name: 'chest' });
      mark('chest-open');
      return null;
    }
    if (n.type === 'locked' && !n.opened) {
      const keys = save.items.tartarus_key || 0, pickOk = !!TP().lockpick && !run.map.picked;
      const v = await roomPanel({ bg: T, cls: 'chest locked', kicker: `${floor.label} · ${floor.block}`, title: 'LOCKED CHEST', name: 'locked',
        body: `<p>An iron-banded chest with an old brass lock. ${keys ? `You have ${keys} Tartarus Key${keys > 1 ? 's' : ''}.` : 'Mayoido Antiques sells Tartarus Keys.'}</p>`,
        buttons: (pickOk ? [{ v: 'pick', label: 'Pick the lock', pink: true, small: 'Lockpick · once a floor' }] : []).concat([{ v: 'open', label: 'Use a Tartarus Key', pink: !pickOk, off: !keys }, { v: 'no', label: 'Leave it' }]), fuuka: navLine('locked') });
      if (v === 'pick' && pickOk) {
        run.map.picked = true; n.opened = true; grant(n.chest); sfx('unlock'); mark('lockpick'); mark('locked-open');
        await roomPanel({ bg: T, cls: 'chest', kicker: 'Lockpick', title: 'RARE TREASURE', body: lootHtml(n.chest), name: 'chest-rare' });
      } else if (v === 'open' && keys) {
        save.items.tartarus_key--; if (!save.items.tartarus_key) delete save.items.tartarus_key;
        n.opened = true; grant(n.chest); sfx('unlock'); mark('locked-open');
        await roomPanel({ bg: T, cls: 'chest', kicker: 'The lock gives way', title: 'RARE TREASURE', body: lootHtml(n.chest), name: 'chest-rare' });
      }
      return null;
    }
    if (n.type === 'shrine' && !n.used) {
      // Recovery Party (Jaemin; the nightOrchid hook): a small shrine in an empty room.
      n.used = true; sfx('heal'); mark('night-orchid');
      carryEach(u => { u.hp = Math.min(u.maxHp, Math.round(u.hp + u.maxHp * 0.3)); u.sp = Math.min(u.maxSp, Math.round(u.sp + u.maxSp * 0.3)); });
      await roomPanel({ bg: floor.bg, cls: 'clock', kicker: 'Night Orchid', title: 'A SMALL SHRINE', body: '<p>Night orchids around a little stone shrine. Everyone recovers 30% of their HP and SP.</p>', name: 'shrine' });
      return null;
    }
    if (n.type === 'clock' && !n.used) {
      n.used = true; rest(); sfx('heal'); mark('map-clock');
      await roomPanel({ bg: floor.bg, cls: 'clock', kicker: 'A clock in the dark', title: 'THE CLOCK', body: '<p>It chimes once. Everyone’s HP and SP are fully restored, and no one is tired anymore.</p>', fuuka: navLine('clock'), name: 'clock' });
      return null;
    }
    if (n.type === 'access') {
      tip('access');
      const firstTouch = save.reached !== floor.id;
      const better = !save.reached || D.floors.findIndex(f => f.id === save.reached) <= run.fi;
      if (better) { save.reached = floor.id; persist(); }
      if (firstTouch) sfx('unlock');
      // Hanni's Tea Time, Ann's Snack Break, Junkyu's Hug List (once per access point).
      const tpa = TP(), notes = [];
      if (!n.restored && (tpa.teaTime || tpa.snackBreak || tpa.hugList)) {
        n.restored = true;
        let hurt = null; carryEach(u => { if (!hurt || u.hp / u.maxHp < hurt.hp / hurt.maxHp) hurt = u; }, false);
        carryEach(u => {
          if (tpa.teaTime) { u.hp = Math.min(u.maxHp, Math.round(u.hp + u.maxHp * tpa.teaTime.v)); u.sp = Math.min(u.maxSp, Math.round(u.sp + u.maxSp * tpa.teaTime.v)); }
          if (tpa.snackBreak) u.sp = Math.min(u.maxSp, Math.round(u.sp + u.maxSp * tpa.snackBreak.v));
          if (tpa.hugList && hurt && u.mid === hurt.mid) u.hp = u.maxHp;
        });
        if (tpa.teaTime) notes.push('Hanni’s Tea Time: everyone +15% HP and SP.');
        if (tpa.snackBreak) notes.push('Ann’s Snack Break: everyone +10% SP.');
        if (tpa.hugList && hurt) notes.push(`Junkyu’s Hug List: ${hurt.name} is fully healed.`);
        sfx('heal'); mark('access-perks');
      }
      for (;;) {
        const mood = run.mood && run.mood.fi === run.fi + 1 ? MOODS.find(m => m[0] === run.mood.stat) : null;
        const extraBtn = tpa.moodPick ? [{ v: 'mood', label: 'Pick a mood', small: mood ? `Next floor: ${mood[1]}` : 'Yunjin · sad, angry or shoes' }] : [];
        const v = await roomPanel({ bg: AP, cls: 'access', kicker: `${floor.label} · ${floor.block}`, title: 'ACCESS POINT', name: 'access',
          body: `<p>${better ? `Progress saved. Next time you can start from <b>${esc(floor.label)}</b>.` : 'A green terminal hums quietly.'}</p>${notes.map(t => `<p class="bt-perknote">${esc(t)}</p>`).join('')}`,
          buttons: BR ? [{ v: 'stay', label: 'Keep climbing', pink: true }, { v: 'menu', label: 'Menu', small: 'Party · Equipment · Items' }, { v: 'tree', label: 'Skills', small: `Haenim · ${save.pts} SP` }].concat(extraBtn, [{ v: 'leave', label: 'Leave Tartarus' }])
            : [{ v: 'stay', label: 'Keep climbing', pink: true }, { v: 'equip', label: 'Equip' }, { v: 'party', label: 'Party' }, { v: 'tree', label: 'Haenim’s Tree', small: `${save.pts} SP` }].concat(extraBtn, [{ v: 'leave', label: 'Leave Tartarus' }]),
          fuuka: navLine('access') });
        if (v === 'mood') {
          // Yunjin's Sad, Angry or Shoes: a mood for the next floor's fights.
          const m = await roomPanel({ bg: AP, cls: 'access', kicker: 'Yunjin · “Sad, angry, or shoes?”', title: 'PICK A MOOD', name: 'mood',
            body: '<p>The mood lasts for every fight on the next floor.</p>', buttons: MOODS.map(([st, nm, what]) => ({ v: st, label: nm, small: what })).concat([{ v: 'back', label: 'Back' }]) });
          if (m && m !== 'back') { run.mood = { fi: run.fi + 1, stat: m }; mark('mood-' + m); sfx('ok'); }
          continue;
        }
        if (v === 'equip') { await new Promise(r => equipScreen(r)); continue; }
        if (v === 'party') { await new Promise(r => partyScreen(r)); continue; }
        if (v === 'menu') { await fieldMenu(save.party.length || hoAvail().length > 1 ? 'party' : 'equip'); continue; }
        if (v === 'tree') { await new Promise(r => treeScreen(r)); continue; }
        if (v === 'leave') { mark('leave'); return 'leave'; }
        return null;
      }
    }
    if (n.type === 'stairs') {
      if (floor.top && HO) {
        // The life sim decides when blocks open: a full moon has to happen on its night, and higher blocks wait for their date.
        const op = D.ops.find(o => o.id === floor.op), done = opCleared(op.id), open = done && floor.bi < hoBlockCap();
        const v = await roomPanel({ bg: op.arena, cls: 'barrier', kicker: `Top of ${floor.block}`, title: open ? 'THE BARRIER IS OPEN' : 'THE BARRIER', name: 'barrier',
          body: `<p>${open ? 'The way up is open.' : done ? 'The way up is sealed. Tartarus hasn’t opened any higher yet.' : `The way up is sealed. Something waits on the other side for the full moon.`}</p>`,
          buttons: open ? [{ v: 'up', label: 'Go up', pink: true }, { v: 'no', label: 'Not yet' }] : [{ v: 'leave', label: 'Leave Tartarus' }, { v: 'no', label: 'Back to the map', pink: true }],
          fuuka: navLine(open ? 'barrierOpen' : 'barrier') });
        if (v === 'leave') { mark('leave'); return 'leave'; }
        return v === 'up' ? 'up' : null;
      }
      if (floor.top) {
        const op = D.ops.find(o => o.id === floor.op), done = opCleared(op.id);
        const v = await roomPanel({ bg: op.arena, cls: 'barrier', kicker: `Top of ${floor.block}`, title: done ? 'THE BARRIER IS OPEN' : 'THE BARRIER', name: 'barrier',
          body: `<p>${done ? `You already beat <b>${esc(op.name)}</b>. The way up is open.` : `The way up is sealed. <b>${esc(op.name)}</b> waits on the other side of the full moon.`}</p><p class="bt-brief"><b>${esc(op.arcana)}</b>${esc(op.brief)}<small>Recommended level ${op.lvl} · the clock heals you first</small></p>`,
          buttons: done ? [{ v: 'up', label: 'Go up', pink: true }, { v: 'again', label: 'Fight it again' }, { v: 'no', label: 'Not yet' }] : [{ v: 'up', label: 'Face the full moon', pink: true }, { v: 'no', label: 'Not yet' }],
          fuuka: navLine(done ? 'barrierOpen' : 'barrier') });
        if (v === 'again') { run.refight = true; return 'up'; }
        return v === 'up' ? 'up' : null;
      }
      const next = D.floors[run.fi + 1];
      const v = await roomPanel({ bg: floor.bg, cls: 'stairs', kicker: `${floor.label} · ${floor.block}`, title: 'STAIRS', name: 'stairs',
        body: `<p>The stairs lead up to <b>${esc(next.label)}</b>${next.block !== floor.block ? `, into <b>${esc(next.block)}</b>` : ''}.</p>`,
        buttons: [{ v: 'up', label: `Go up to ${next.label}`, pink: true }, { v: 'no', label: 'Not yet' }], fuuka: navLine('stairs') });
      return v === 'up' ? 'up' : null;
    }
    if (n.type === 'event' && !n.used) {
      n.used = true;
      const left = D.memories.filter(m => !save.memories.includes(m.id) && !(HO && (HO.request.fragments || []).includes(m.id)));
      if ((!HO || HO.request.fragmentsOpen) && left.length && rand() < D.events.memoryChance) { await memoryFound(left[Math.floor(rand() * left.length)]); return null; }
      const l = D.events.lines[Math.floor(rand() * D.events.lines.length)];
      mark('event-line');
      await roomPanel({ bg: floor.bg, cls: 'event', kicker: `${floor.label} · ${floor.block}`, title: '…', body: '', fuuka: l, name: 'event' });
      return null;
    }
    if (n.type === 'empty' && !n.visitedOnce) { n.visitedOnce = true; if (rand() < 0.3) say('empty'); }
    return null;
  }
  /* Items outside battle: heal, revive, SP, or a Traesto Gem out of Tartarus. */
  async function fieldItems() {
    if (BR) {
      // Story fights: the field menu, on its Items tab (use items, check the team, equipment, Personas).
      return fieldMenu('items', { onFloor: true });
    }
    for (;;) {
      const units = fieldUnits();
      const ids = Object.keys(save.items).filter(k => save.items[k] > 0 && D.items[k].use !== 'battle' && D.items[k].type !== 'key');
      const v = await roomPanel({ bg: D.floors[run.fi].bg, cls: 'items', kicker: 'Items', title: 'ITEMS', name: 'items',
        body: `<div class="bt-itemlist">${ids.length ? ids.map(k => `<button type="button" class="bt-btn bt-itemrow" data-v="item:${k}">${ICON.of(k)}<b>${esc(D.items[k].name)}</b><span>${esc(D.items[k].desc)}</span><em>×${save.items[k]}</em></button>`).join('') : '<p>Nothing you can use here.</p>'}</div>
          <div class="bt-map-party small">${units.map(u => `<div class="bt-mp"><i class="av fcb">${fimg(u.mid, member(u.mid).faces.idle)}</i><div><b>${esc(u.name)}<small>${u.hp}/${u.maxHp} HP · ${u.sp}/${u.maxSp} SP</small></b><span class="bar hp"><i style="width:${u.hp / u.maxHp * 100}%"></i></span><span class="bar sp"><i style="width:${u.sp / u.maxSp * 100}%"></i></span></div></div>`).join('')}</div>`,
        buttons: [{ v: 'back', label: 'Back to the map', pink: true }] });
      if (!v || v === 'back' || !v.startsWith('item:')) return null;
      const id = v.slice(5), it = D.items[id];
      if (it.type === 'escape') { save.items[id]--; persist(); mark('traesto'); return 'leave'; }
      let tgt = null;
      if (['ally', 'dead'].includes(it.target)) {
        const t = await roomPanel({ bg: D.floors[run.fi].bg, cls: 'items', kicker: it.name, title: 'WHO?', name: 'item-target',
          body: '', buttons: units.map(u => ({ v: u.mid, label: `${u.name} · ${u.hp}/${u.maxHp}` })).concat([{ v: 'back', label: 'Cancel' }]) });
        if (!t || t === 'back') continue;
        tgt = t;
      }
      useFieldItem(id, tgt, units);
    }
  }
  function useFieldItem(id, tgt, units) {
    const it = D.items[id];
    const c = run.carry || (run.carry = Object.fromEntries(units.map(u => [u.mid, { hp: u.hp, sp: u.sp, th: u.th }])));
    units.forEach(u => { if (!c[u.mid]) c[u.mid] = { hp: u.hp, sp: u.sp, th: u.th }; });
    const fm = TP().fieldMedicine, amt = (u, v) => (v <= 1 ? u.maxHp * v : v) * (fm ? 1 + fm.v : 1); // Mercy's Field Medicine
    const apply = u => {
      const k = c[u.mid];
      if (it.type === 'heal' || it.type === 'revive') k.hp = Math.min(u.maxHp, Math.round(k.hp + amt(u, it.hp)));
      if (it.type === 'sp') k.sp = Math.min(u.maxSp, k.sp + it.sp);
      if (it.type === 'spPct') k.sp = Math.min(u.maxSp, Math.round(k.sp + u.maxSp * it.sp));
      if (it.type === 'full') { k.hp = u.maxHp; k.sp = u.maxSp; }
    };
    if (it.target === 'allies') units.forEach(apply); else { const u = units.find(x => x.mid === tgt); if (u) apply(u); }
    save.items[id]--; if (!save.items[id]) delete save.items[id];
    sfx('heal'); mark('field-item');
    persist();
  }
  /* A memory fragment: the card, the charm that rings, and a skill point for Haenim's tree. */
  async function memoryFound(m) {
    save.memories.push(m.id);
    if (HS) HS.frags.push(m.id);
    save.pts += D.progression.memoryPoints;
    persist();
    sfx('unlock'); mark('memory'); mark('memory-' + m.id);
    const charm = { Runners: 'bell', strangers: 'jade', Hoax: 'star' }[m.world];
    const bg = await new Promise(r => { const i = new Image(); i.onload = () => r(m.wide || m.img); i.onerror = () => r(D.memoryPlaceholder ? D.memoryPlaceholder(m.id) : ''); i.src = m.img; });
    music.world(m.world); // the fragment's world song, softly, while its card is up
    await roomPanel({ bg, cls: 'memory', kicker: `Memory fragment · ${m.world}`, title: esc(m.title).toUpperCase(), name: 'memory',
      body: `<div class="bt-memcard"><img src="${m.img}" alt="${esc(m.title)}"></div><p class="bt-memtext">${esc(m.text)}</p><p class="bt-memcharm">${ART.charm(charm)}<span>Haenim’s ${esc(charm)} rings. <b>+${D.progression.memoryPoints} skill point</b></span></p>`,
      fuuka: navLine('memory') });
    music.endWorld();
  }

  /* ════════════════════════════════════════════════════
     BATTLE
     ════════════════════════════════════════════════════ */
  let B = null, BT = null, navSaid = new Set(), navTimer = null, summoned = new Set(), curPerks = {}, stat0 = { allout: false, ko: false }, perkSeen = new Set();
  const freshAff = new Set(), discovered = new Set(); // affinities just learned (their plate cell flips once); weaknesses announced this session

  /* Story-fight rules (handoff mode; spec.rules). interruptAt: end with 'interrupt' when this round starts. interruptHp: when
     Solar drops below this share of her HP. interruptFoeHp: when any Shadow does (only the bosses count when the fight has
     one, so a memory floor's lesser Shadows can't cut it short). interruptOnKill: when any Shadow falls.
     roundsMax: end with 'phase' after this many rounds (the finale's Last Call). */
  function ruleEnd(spec, at) {
    const R = spec.rules;
    if (!R || !B) return null;
    if (R.interruptAt && B.S.round >= R.interruptAt) return 'interrupt';
    if (R.fleeAt && B.S.round >= R.fleeAt && B.foes().some(f => !f.dead)) return 'fled'; // a rare Shadow runs
    if (R.roundsMax && B.S.round > R.roundsMax) return 'phase';
    if (at !== 'act') return null;
    const solar = B.party()[0];
    if (R.interruptHp && solar && solar.hp < solar.maxHp * R.interruptHp) return 'interrupt';
    const watched = B.foes().some(f => f.boss) ? B.foes().filter(f => f.boss) : B.foes();
    if (R.interruptFoeHp && watched.some(f => !f.dead && f.hp < f.maxHp * R.interruptFoeHp)) return 'interrupt';
    if (R.interruptOnKill && B.foes().some(f => f.dead)) return 'interrupt';
    return null;
  }
  /* spec: { group, bg, label, block, boss, reaper, music, nav, heat, op, solo (Solar alone), rules (story fights, above) } */
  async function battle(spec) {
    screen = 'battle';
    const fx = treeFx();
    // Test hook: window.__btGroup forces an enemy group.
    const group = (window.__btGroup && !spec.boss) ? window.__btGroup.slice() : spec.group.slice();
    const kinds = group.map(k => k.split('@')[0]);
    if (fx.autoAnalyze) kinds.forEach(k => { if (D.enemies[k].gimmick) return; const kn = save.known[k] || (save.known[k] = {}); D.affinityOrder.forEach(el => { kn[el] = true; }); });
    const RL = spec.rules || null;
    const partyUnits = buildParty(run && run.carry);
    // Bond perks (build.js): story fights only (practice has no links). Third Eye: Shadows fought before start analyzed.
    const perks = BLD && HO && !(RL && RL.noPerks) ? BLD.battlePerks(save, hoAvail()) : {};
    curPerks = perks;
    if (perks.thirdEye) kinds.forEach(k => { const d = D.enemies[k]; const kn = save.known[k]; if (!d || d.gimmick || !kn || !Object.keys(kn).length) return; D.affinityOrder.forEach(el => { kn[el] = true; }); });
    // Tonight's extras: Yunjin's mood for this floor, Jihoon's Almighty Hoon after a strong win, Danielle's The Folder (missionBriefing), the Moon's curse.
    const startBuffs = [], mods = Object.assign({}, fx.mods);
    if (run && run.mood && run.mood.fi === run.fi) { if (run.mood.stat === 'crit') mods.crit = (mods.crit || 0) + 15; else startBuffs.push(run.mood.stat); }
    if (run && run.hoon) { startBuffs.push('atk'); run.hoon = false; }
    if (TT && run && !spec.op && !RL) TT.battleMods(run, startBuffs); // a moon shrine's blessing, a trap's snare
    if (spec.op && perks.missionBriefing) startBuffs.push({ stat: 'atk', turns: perks.missionBriefing.v });
    const foeHpMult = run && run.curse ? 1 + run.curse : 1;
    if (run) run.curse = 0;
    B = E.create({ party: spec.solo ? partyUnits.slice(0, 1) : partyUnits, enemies: group, mods, known: save.known, rand, items: save.items, heat: spec.heat || 0, ctx: { op: spec.op && spec.op.id },
      diff: RL && RL.edmg ? () => Object.assign({}, diff(), { edmg: diff().edmg * RL.edmg }) : diff, protect: !!(RL && RL.protect),
      perks, names: BLD ? BLD.names() : {}, startBuffs, foeHpMult, bondArts: BDS && HO && !(RL && RL.noPerks) ? BDS.arts(save) : [] });
    if (RL && RL.setup) RL.setup(B);
    navSaid = new Set(); summoned = new Set(); thSeen = new Set(); barkN = new Map(); barkAt = 0; barkQ = []; barkRun = 0;
    curSpec = spec; blog = []; lastTgt = {}; focusId = null;
    blogAdd(`${spec.label} · ${spec.block}${spec.boss && !spec.reaper ? ' · Full Moon' : spec.reaper ? ' · The Reaper' : spec.strong ? ' · Strong Shadows' : ''} · ${diff().name}`, 'sys');
    buildBattle(spec);
    root.classList.add('bt-in-battle');
    music.play(spec.music || 'battle', { restart: true });
    await stills(theurgyStills());
    await intro(spec, kinds);
    if (fx.openBuff) await play(B.openBuff(fx.openBuff));
    if (B.start) await play(B.start());
    nav(spec.nav, spec.navVars || {});
    // A boss on the field: someone in the party says so.
    if (spec.boss || spec.reaper) { const who = B.party().filter(p => !p.dead && p !== B.leader()); bark(who.length ? who[Math.floor(Math.random() * who.length)] : B.leader(), 'boss', {}, { force: true }); }
    B.party().forEach(p => { if (p.tired) nav('tired', { name: p.name }, { once: true }); });
    // Rush turns itself off for fights it isn't allowed in (bosses by default).
    if (rushOn && !rushAllowed(spec)) stopRush(spec.boss || spec.reaper ? 'rushBoss' : 'rushNo');
    paintRush();
    if (B.party().length > 1) tip('tactics');
    if ((marks['battle-start'] || 0) >= 2 && rushAllowed(spec) && !rushOn) tip('rush');
    mark('battle-start');
    if (spec.op) mark('boss-' + spec.op.id);
    let guard = 0, ended = null;
    stat0 = { allout: false, ko: false };
    while (!B.outcome() && guard++ < 800) {
      const turn = B.nextTurn();
      if ((ended = ruleEnd(spec, 'turn'))) break;
      const u = B.U(turn.actor);
      setActive(u);
      await play(turn.events);
      if ((ended = ruleEnd(spec, 'act')) || B.outcome()) break;
      if (!turn.canAct) { await sleep(300); continue; }
      if (u.side === 'enemy') {
        let n = 0;
        do { await sleep(n ? 250 : 380); await play(turn.forced && !n ? B.forcedAct() : B.enemyAct()); n++; } while (B.S.oneMore && !B.outcome() && !u.dead && n < 3);
      } else await partyTurn(u, turn.forced);
      dangerCheck();
      rushGuard();
      syncAll();
      if ((ended = ruleEnd(spec, 'act'))) break;
    }
    if (ended) {
      // A story fight that ends on its own terms (an interrupt, or a phase of the finale running out).
      blogAdd(ended === 'interrupt' ? 'The fight stops.' : ended === 'fled' ? 'It got away!' : 'Something changes.', 'sys');
      if (ended === 'fled') { nav('fled'); B.foes().forEach(f => { const e = BT.enemies.get(f.id); if (e && !f.dead) e.classList.add('tt-fleeing'); }); }
      setActive(null); hideMenu();
      B.party().forEach(p => { save.th[p.mid] = Math.round(p.th); });
      if (run) run.carry = Object.fromEntries(B.party().map(p => [p.mid, { hp: p.dead ? 1 : p.hp, sp: p.sp, th: p.th }]));
      persist();
      mark('rule-' + ended);
      await sleep(900);
      return { result: ended, rew: null, boss: !!spec.boss };
    }
    const result = B.outcome() || 'lose';
    const rating = { allout: stat0.allout, rounds: B.S.round, ko: stat0.ko || B.party().some(p => p.dead) };
    blogAdd(result === 'win' ? 'Victory!' : result === 'escaped' ? 'Got away.' : 'Solar has fallen…', 'sys');
    const lastFighter = BT.fighter.dataset.id;
    setActive(null);
    hideMenu();
    B.party().forEach(p => { save.th[p.mid] = Math.round(p.th); });
    if (run) run.carry = Object.fromEntries(B.party().map(p => [p.mid, { hp: p.dead ? 1 : p.hp, sp: p.sp, th: p.th }]));
    persist();
    if (result === 'win') {
      nav(spec.reaper ? 'reaperWin' : spec.boss ? 'bossWin' : 'win');
      // A victory line (a romance partner's banter, on that route), varied from fight to fight.
      if (!banterAny('win')) { const up = B.party().filter(p => !p.dead); if (up.length) bark(up[Math.floor(Math.random() * up.length)], 'win', {}, { force: true }); }
      B.party().filter(p => !p.dead).forEach(p => { const c = BT.cards.get(p.id); if (c) setFace(c.querySelector('.face img'), p.mid, member(p.mid).faces.win); });
      fighterWin(lastFighter);
      await sleep(1300);
    } else if (result === 'lose') { nav('solarDown'); sfx('ko'); await sleep(1500); }
    else await sleep(700);
    // (Kat's note: no finish card flashes after a fight is won. The real All-Out finish cards still play during battle.)
    const fh = curPerks.freshHarvest;
    return { result, rew: result === 'win' ? E.rewards(B, rand, fh ? { drop: fh.v } : {}) : null, boss: !!spec.boss, rating };
  }

  function buildBattle(floor) {
    const el = show(`${ART.defs()}
      <div class="bt-bg" style="background-image:url('${floor.bg}')"></div><div class="bt-floor"></div><div class="bt-shade"></div>
      <header class="bt-top">
        <div class="bt-floorlabel"><b>${esc(floor.label)}</b><span>${esc(floor.block)}<em><br>${floor.boss && !floor.reaper ? 'Full Moon Operation' : 'Tartarus'}</em></span></div>
        <ol class="bt-order" aria-label="Turn order"></ol>
        <div class="bt-tools">${tools('battle')}</div>
      </header>
      <div class="bt-field" role="group" aria-label="Battlefield"><div class="bt-fighter" hidden><img alt="" draggable="false"></div></div>
      <div class="bt-party" role="group" aria-label="Party"></div>
      <div class="bt-cmd" hidden><div class="bt-who"><img alt=""><div class="tag"><b></b><span></span></div></div><div class="bt-cmd-body"></div></div>
      <div class="bt-log" role="status" aria-live="polite"></div>
      <div class="bt-nav" hidden></div>
      <div class="bt-rushtag" aria-hidden="true"><b>RUSH</b><span>R to stop</span></div>
      <div class="bt-barks" aria-live="polite"></div><div class="bt-fx"></div><div class="bt-cut"></div><div class="bt-flash"></div><div class="bt-dim"></div>`, `bt-battle${floor.boss ? ' boss' : ''}${floor.reaper ? ' reaper' : ''}`);
    BT = {
      root: el, field: el.querySelector('.bt-field'), fighter: el.querySelector('.bt-fighter'), party: el.querySelector('.bt-party'), cmd: el.querySelector('.bt-cmd'),
      body: el.querySelector('.bt-cmd-body'), who: el.querySelector('.bt-who'), log: el.querySelector('.bt-log'), nav: el.querySelector('.bt-nav'),
      fx: el.querySelector('.bt-fx'), cut: el.querySelector('.bt-cut'), barks: el.querySelector('.bt-barks'), flash: el.querySelector('.bt-flash'), order: el.querySelector('.bt-order'),
      enemies: new Map(), cards: new Map(), bg: floor.bg
    };
    wireTools(el);
    if (FX) { FX.attach(el, { speed }); FX.preload(floor.bg); }
    // Decode every still this battle might show now, so cut-ins never hitch on first show.
    stills([SUMMON_DIR + 'solar-evoker.webp'].concat(B.party().map(p => finishArt(p.mid)), B.party().map(p => D.personas[p.personaId].art), theurgyStills()), 0);
    // Every mood a card or the results can switch to, so a face never pops in blank.
    stills(B.party().flatMap(p => Object.values(member(p.mid).faces).map(f => pimg(p.mid, f))), 0);
    if (!save.awakened) { stills(AWAKEN.map(f => SUMMON_DIR + f + '.webp'), 0); prepClip('awakening'); }
    stills(B.party().filter(p => hasField(p.mid)).map(p => fieldPose(p.mid)).concat(B.party().flatMap(p => evokeFrames(p.mid) || [])), 0);
    // Fighter pose frames and chibi brawl frames go in the pose controller's cache (it only shows a frame once it has loaded).
    B.party().filter(p => FIGHTER_POSES[p.mid] || CHIBI[p.mid]).forEach(p => [...(FIGHTER_POSES[p.mid] ? posedFrames(p.mid) : []), ...(brawlFrames(p.mid) || [])].forEach(src => { if (!shadowFrames.has(src)) { const im = new Image(); im.src = src; shadowFrames.set(src, im); } }));
    // Bond cut-ins: both portraits (and any bond art) decoded ahead.
    stills((B.S.bondArts || []).filter(a => B.party().some(p => p.mid === a.partner)).flatMap(a => [pimg(a.partner, a.face || member(a.partner).faces.win), ...thArt(a)]).concat([pimg('solar', 'happy')]), 0);
    B.foes().forEach(u => addEnemy(u));
    B.party().forEach(u => {
      const m = member(u.mid);
      const c = document.createElement('button');
      c.type = 'button';
      c.className = 'bt-card';
      c.dataset.id = u.id;
      c.style.setProperty('--mc', m.color);
      c.innerHTML = `<span class="face fcb">${fimg(u.mid, m.faces.idle)}</span>
        <span class="nm"><span>${esc(u.name)}</span><small${u.persona.length > 9 ? ' class="long"' : ''}>${esc(u.persona)}</small></span>
        <span class="bt-bar hp"><span>HP</span><span class="track"><i class="g"></i><i class="f"></i></span><b></b></span>
        <span class="bt-bar sp"><span>SP</span><span class="track"><i class="g"></i><i class="f"></i></span><b></b></span><span class="bt-th" title="Theurgy"><i></i></span><span class="st"></span><span class="pulse" aria-hidden="true"></span><span class="aura" aria-hidden="true"><b></b><i></i><i></i><i></i><i></i><i></i></span><span class="thtag" aria-hidden="true">Theurgy ready</span>`;
      c.addEventListener('mousedown', e => e.preventDefault());
      c.addEventListener('click', () => { if (ctl && ctl.pickValue) ctl.pickValue(u.id); });
      c.addEventListener('pointerenter', () => { if (ctl && ctl.hoverValue) ctl.hoverValue(u.id); });
      BT.party.appendChild(c);
      BT.cards.set(u.id, c);
    });
    syncAll();
    sizeField();
  }
  // The hit flash's mask lives in a CSS variable, which resolves against battle.css, not the page: give it an absolute URL.
  const absUrl = u => { try { return new URL(u, document.baseURI).href; } catch (e) { return u; } };
  // Pose sheets use equal canvases so changing an action never changes the field layout.
  // The same controller runs the fighter on the battlefield (BT.fighter): its frames are full URLs (_poses.src).
  const shadowFrames = new Map();
  function setShadowFrame(el, n) {
    const frames = el._shadowPoses?.frames, slug = frames && frames[n];
    if (!slug) return;
    const loaded = shadowFrames.get(slug);
    if (!loaded?.complete || !loaded.naturalWidth) return; // Keep the last frame while slow art loads.
    const src = el._shadowPoses.src ? slug : sart(slug), img = el.querySelector('.sh-pic img, img.posed');
    if (!img) return;
    img.src = src;
    el.dataset.pose = String(n);
    el.querySelector('.flash')?.style.setProperty('--src', `url('${absUrl(src)}')`);
  }
  function restShadow(el) {
    if (!el._shadowPoses || el._shadowAction) return;
    const states = el._shadowPoses.states;
    const state = el.classList.contains('dead') ? 'defeat' : el.classList.contains('down') ? 'down' : el.classList.contains('won') ? 'win' : 'idle';
    setShadowFrame(el, (states[state] || [0])[0]);
  }
  /* Hold one pose until the next action or rest (the fighter's Evoker frame while the summon plays). */
  function holdPose(el, state) {
    const n = el?._shadowPoses?.states[state];
    if (!n) return;
    el._shadowToken = (el._shadowToken || 0) + 1; el._shadowAction = true;
    setShadowFrame(el, n[0]);
  }
  function releasePose(el) { if (!el?._shadowPoses) return; el._shadowToken = (el._shadowToken || 0) + 1; el._shadowAction = false; restShadow(el); }
  /* The fighter on the battlefield, when it's this unit and it has a pose sheet. */
  const posedFighter = u => { const box = BT && BT.fighter; return box && u && !box.hidden && box.dataset.id === u.id && box._shadowPoses ? box : null; };
  async function animateShadow(el, state, ms) {
    const poses = el?._shadowPoses, sequence = poses?.states[state];
    if (!sequence?.length) return;
    const token = (el._shadowToken || 0) + 1;
    el._shadowToken = token; el._shadowAction = true;
    const frames = FX?.reduced() || perf() ? [sequence[sequence.length - 1]] : sequence;
    for (const frame of frames) {
      if (el._shadowToken !== token || !el.isConnected || el.classList.contains('dead')) return;
      setShadowFrame(el, frame);
      await sleep(ms / frames.length);
    }
    if (el._shadowToken === token) { el._shadowAction = false; restShadow(el); }
  }
  /* The finale's lantern windows (until Kat's art: FEMC-ART-TODO.md, "Lantern windows"): a paper lantern in a dark wood frame,
     glowing in its world's color, a girl asleep in the window. The glass pane only shows when it's out of reach (battle.css).
     `key` keeps the gradient ids unique per copy (the field and the turn order draw it at once). */
  const LANTERN_TINT = { R: ['#ffc94a', '#fff3c4'], S: ['#3fd6a0', '#d8fff0'], H: ['#ff6fae', '#ffe1ef'] };
  function lanternSvg(world, key, cls = 'sh lantern-svg', label = '') {
    const [c, l] = LANTERN_TINT[world] || LANTERN_TINT.R, k = 'ln' + String(key).replace(/\W/g, '');
    return `<svg class="${cls}" viewBox="0 0 200 270" ${label ? `role="img" aria-label="${esc(label)}"` : 'aria-hidden="true"'} style="--lc:${c}">
      <defs><radialGradient id="${k}p" cx="50%" cy="54%" r="62%"><stop offset="0" stop-color="${l}"/><stop offset=".55" stop-color="${c}"/><stop offset="1" stop-color="#3a1408"/></radialGradient>
      <radialGradient id="${k}w" cx="50%" cy="62%" r="70%"><stop offset="0" stop-color="#fffbe8"/><stop offset=".6" stop-color="${l}"/><stop offset="1" stop-color="${c}"/></radialGradient>
      <linearGradient id="${k}g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#cfe6ff" stop-opacity=".34"/><stop offset=".5" stop-color="#7d93c4" stop-opacity=".16"/><stop offset="1" stop-color="#1b2550" stop-opacity=".5"/></linearGradient></defs>
      <g class="ln-body">
        <circle cx="100" cy="12" r="8" fill="none" stroke="#2a1810" stroke-width="4"/><path d="M100 20v10" stroke="#2a1810" stroke-width="4"/>
        <path d="M58 30h84l14 20H44z" fill="#2a1810" stroke="${c}" stroke-width="2" stroke-linejoin="round"/>
        <rect class="ln-paper" x="40" y="48" width="120" height="170" rx="18" fill="url(#${k}p)" stroke="#2a1810" stroke-width="5"/>
        <path d="M44 78h112M42 108h116M42 158h116M44 188h112" stroke="#2a1810" stroke-opacity=".35" stroke-width="2"/>
        <rect class="ln-win" x="60" y="74" width="80" height="118" rx="6" fill="url(#${k}w)" stroke="#2a1810" stroke-width="6"/>
        <path d="M100 74v118M60 116h80" stroke="#2a1810" stroke-opacity=".55" stroke-width="2.5"/>
        <g class="ln-girl" fill="#1d0c10" fill-opacity=".88">
          <ellipse cx="100" cy="187" rx="32" ry="4"/>
          <path d="M91 123c-12 3-19 22-19 44 0 11 3 19 10 20l3-27c1-14 7-24 15-28z"/>
          <path d="M80 187c-4-18 0-34 12-42l22-9c8 0 11 10 7 20l-2 31z"/>
          <circle cx="103" cy="129" r="12"/>
        </g>
        <path d="M44 218h112l-14 18H58z" fill="#2a1810" stroke="${c}" stroke-width="2" stroke-linejoin="round"/>
        <path d="M100 236v16" stroke="${c}" stroke-width="3"/><circle cx="100" cy="254" r="4" fill="${c}"/>
        <path d="M94 256l-3 12M100 258v12M106 256l3 12" stroke="${c}" stroke-width="2" stroke-linecap="round"/>
      </g>
      <g class="ln-glass"><rect x="30" y="2" width="140" height="266" rx="10" fill="url(#${k}g)" stroke="#cfe6ff" stroke-opacity=".7" stroke-width="3"/>
        <path d="M52 40l46-30M48 92l92-62M60 250l90-60" stroke="#fff" stroke-opacity=".38" stroke-width="5" stroke-linecap="round"/></g>
    </svg>`;
  }
  // Turn-order icons: the lanterns' own window, story foes' portrait, Shadow art (a crop), the generic blob for SVG-only Shadows.
  function orderIcon(u) {
    const d = D.enemies[u.kind] || {};
    const art = d.img && (window.FEMC_SHADOW_ART || {})[d.img];
    if (d.gimmick === 'lantern' && !art) return lanternSvg(d.world, 'o' + u.id, 'oi-ln' + (u.unreachable ? ' far' : ''));
    if (d.pic) return `<img class="oi" src="${d.pic}" alt="" style="object-position:50% 22%">`;
    // Bosses: a close crop near the top (their heads); everyday Shadows: most of the figure.
    if (art) return `<img class="oi art" src="${sart(art.poses ? art.poses.frames[0] : d.img)}" alt="" style="${d.gimmick === 'train' ? '--of:54% 18%;--oz:3.8' : d.boss || d.story ? '' : '--of:50% 45%;--oz:1.35'}">`;
    return '';
  }
  function addEnemy(u) {
    const d = D.enemies[u.kind];
    const el = document.createElement('div');
    el.className = 'bt-enemy';
    if (d.cls) el.classList.add(d.cls); // tartarus.js: 'golden' rare Shadows, 'guardian' block guardians
    el.dataset.id = u.id;
    let body;
    const art = d.img && (window.FEMC_SHADOW_ART || {})[d.img];
    // The finale's train takes the field (battle.css .trainyard): big, with its lantern windows along it. Set here, before
    // any art branch, so the layout holds however the fight starts (the art adds its own aspect ratio, --ar, below).
    if (d.gimmick === 'train') { el.classList.add('train'); BT.field.classList.add('trainyard'); }
    if (d.gimmick === 'lantern') {
      // A lantern window on the train's flank (the train's own layout places it: battle.css .trainyard). Drawn in code until
      // it has Shadow art (`img`), which then takes the art branch below with the same classes and place.
      el.classList.add('lantern', 'ln-' + (d.world || 'R'));
      el.style.setProperty('--lo', B.foes().filter(f => D.enemies[f.kind].gimmick === 'lantern').indexOf(u) - 1);
    }
    if (d.gimmick === 'lantern' && !art) {
      el.style.setProperty('--w', `${Math.round((d.h || 150) * 200 / 270)}px`);
      body = lanternSvg(d.world, u.id, 'sh lantern-svg', u.name);
    } else if (d.pic) {
      // Story fights: a portrait or a memory card instead of Shadow art (the finale's Wren and lanterns).
      const h = d.h || 220;
      el.style.setProperty('--w', `${Math.round(h * (d.picW || 1) / (d.picH || 1))}px`);
      el.classList.add('pic');
      if (d.capfall) el.classList.add('capfall');
      if (d.gimmick === 'lantern') el.classList.add('lantern');
      body = `<div class="sh sh-pic idle-${d.idle || 'breathe'}"><img src="${d.pic}" alt="${esc(u.name)}" draggable="false" width="${d.picW || 1}" height="${d.picH || 1}"><i class="flash" style="--src:url('${absUrl(d.pic)}')"></i></div>`;
    } else if (art) {
      const h = (d.h || 220) * (art.poses?.scale || 1);
      el.style.setProperty('--w', `${Math.round(h * art.w / art.h)}px`);
      if (d.phoneK) el.style.setProperty('--pk', d.phoneK); // a wide boss drawn a little smaller on phones (battle.css)
      if (art.small) el.classList.add('soft');
      if (d.gimmick === 'train') BT.field.style.setProperty('--ar', (art.w / art.h).toFixed(4));
      if (art.poses) {
        el._shadowPoses = art.poses;
        art.poses.frames.forEach(slug => {
          if (!shadowFrames.has(slug)) { const img = new Image(); img.src = sart(slug); shadowFrames.set(slug, img); }
        });
      }
      const src = sart(art.poses ? art.poses.frames[0] : d.img);
      body = `<div class="sh sh-pic idle-${d.idle || 'breathe'}"><img src="${src}" alt="${esc(u.name)}" draggable="false" width="${art.w}" height="${art.h}"><i class="flash" style="--src:url('${absUrl(src)}')"></i></div>`;
    } else {
      const sv = ART.shadow(d.svg);
      el.style.setProperty('--w', `${sv.w * (d.size || 1)}px`);
      body = `<svg class="sh" viewBox="${sv.vb}" role="img" aria-label="${esc(u.name)}">${sv.svg}</svg>`;
    }
    if (d.veil) el.classList.add('veiled');
    el.innerHTML = `${d.veil ? '<div class="bt-veil"></div>' : ''}<div class="bt-tags"></div>${body}<div class="bt-ehp"><i class="g"></i><i class="f"></i></div>`;
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
    setBar(el.querySelector('.bt-ehp'), hp / u.maxHp);
    el.classList.toggle('down', !!u.down && !u.dead);
    el.classList.toggle('bound', !!(u.ail && u.ail.id === 'bind') && !u.dead);
    el.dataset.ail = u.ail && !u.dead ? u.ail.id : '';
    el.classList.toggle('charging', !!(u.charge || u.charged) && !u.dead);
    el.classList.toggle('hidden', !!u.hidden && !u.dead);
    const shield = B.shieldUp(u) && !u.dead;
    el.classList.toggle('shielded', shield);
    if (u.veil) el.style.setProperty('--veil', D.elements[u.veil].color);
    const tags = [];
    const kn = B.known(u.kind);
    if (u.down && !u.dead) tags.push('<span class="bt-tag down">Down</span>');
    if (u.ail && !u.dead) tags.push(ailTag(u.ail));
    if (u.veil && !u.dead) tags.push(`<span class="bt-tag veil" style="--veil:${D.elements[u.veil].color}">Veil · ${D.elements[u.veil].name}</span>`);
    if (u.gate && !u.dead) tags.push(kn[u.gate] ? `<span class="bt-tag veil" style="--veil:${D.elements[u.gate].color}">Only ${D.elements[u.gate].name}</span>` : '<span class="bt-tag">Gate · ?</span>');
    if (u.weakEl && !u.dead) tags.push(kn[u.weakEl] ? `<span class="bt-tag veil" style="--veil:${D.elements[u.weakEl].color}">Weak · ${D.elements[u.weakEl].name}</span>` : '<span class="bt-tag">Weak · ?</span>');
    if (u.empower && !u.dead) tags.push(`<span class="bt-tag drive">Drive ×${u.empower}</span>`);
    if (u.hidden && !u.dead) tags.push('<span class="bt-tag">Hidden</span>');
    if (u.heard && !u.dead) tags.push('<span class="bt-tag heard" title="Hear the Room: it’s charging its strongest move. Solar’s first hit on it crits.">Heard</span>');
    if (u.noSolar > 0 && !u.dead) tags.push(`<span class="bt-tag rule" title="Heaven’s Door: it can’t target Solar">Rule <em>${u.noSolar}</em></span>`);
    if (shield) tags.push('<span class="bt-tag shield">Shielded</span>');
    el.classList.toggle('unreachable', !!u.unreachable && !u.dead);
    if (u.unreachable && !u.dead) tags.push('<span class="bt-tag">Out of reach</span>');
    tags.push(...buffChips(u, u.dead, 'span'));
    el.querySelector('.bt-tags').innerHTML = tags.join('');
    restShadow(el);
  }
  /* An HP/SP bar: the fill (.f) moves at once, the ghost (.g) lingers behind a loss, then drains to meet it (transform only).
     On a gain the ghost jumps ahead and the fill grows into it. */
  function setBar(track, p) {
    if (!track) return;
    p = Math.max(0, Math.min(1, p || 0));
    const prev = track._p == null ? p : track._p, f = track.querySelector('.f'), g = track.querySelector('.g');
    track._p = p;
    if (f) f.style.transform = `scaleX(${p})`;
    if (g) { g.classList.toggle('now', p >= prev); g.style.transform = `scaleX(${p})`; }
  }
  /* Buff/debuff levels on a card or a Shadow: ▲▲ (up to the cap of 3) and the turns left (none for a lasting one). */
  const STAT_NAME = { atk: 'Attack', def: 'Defense', agi: 'Agility' };
  function buffChips(u, dead = u.dead, tag = 'i') {
    if (dead) return [];
    return ['atk', 'def', 'agi'].filter(k => u.buffs[k]).map(k => {
      const v = u.buffs[k], lv = Math.min(D.buffRules.cap, Math.abs(v)), t = u.buffT[k], lasting = t >= 90;
      const title = `${STAT_NAME[k]} ${v > 0 ? 'up' : 'down'} ${lv} level${lv > 1 ? 's' : ''}${lasting ? ', lasting' : `, ${t} turn${t === 1 ? '' : 's'} left`}`;
      return tag === 'i' ? `<i class="bf ${v > 0 ? 'up' : 'dn'} lv${lv}${lasting ? ' last' : ''}" title="${title}" data-buff="${k}${v}">${buffIco(k, v)}<b>${(v > 0 ? '▲' : '▼').repeat(lv)}</b>${lasting ? '' : `<sub>${t}</sub>`}</i>`
        : `<span class="bt-tag bf ${v > 0 ? 'up' : 'dn'} lv${lv}" title="${title}" data-buff="${k}${v}">${buffIco(k, v)}<b>${(v > 0 ? '▲' : '▼').repeat(lv)}</b>${lasting ? '' : `<em>${t}</em>`}</span>`;
    });
  }
  const ailTag = a => { const d = D.ailments[a.id]; return `<span class="bt-tag ail" style="--c:${d.color}" title="${esc(d.desc)}">${stIco(a.id)}<span>${esc(d.name)}</span><em>${a.t}</em></span>`; };
  function paintCard(u, o = {}) {
    const c = BT.cards.get(u.id); if (!c) return;
    const hp = o.hp != null ? o.hp : u.hp, sp = o.sp != null ? o.sp : u.sp, dead = o.dead != null ? o.dead : u.dead;
    const [h, s] = c.querySelectorAll('.bt-bar');
    setBar(h.querySelector('.track'), hp / u.maxHp);
    h.querySelector('b').textContent = hp;
    h.classList.toggle('low', hp / u.maxHp < 0.3);
    c.classList.toggle('danger', !dead && hp / u.maxHp < 0.3);
    setBar(s.querySelector('.track'), sp / u.maxSp);
    s.querySelector('b').textContent = sp;
    const th = c.querySelector('.bt-th');
    if (th) { th.querySelector('i').style.transform = `scaleX(${Math.min(100, u.th || 0) / 100})`; th.classList.toggle('full', (u.th || 0) >= 100 && !dead); c.classList.toggle('th-ready', (u.th || 0) >= 100 && !dead); }
    c.classList.toggle('dead', !!dead);
    c.classList.toggle('boosted', u.boost > 1);
    c.dataset.boost = u.boost;
    const st = [];
    if (u.down && !dead) st.push('<i class="dw">DOWN</i>');
    if (u.guard) st.push('<i class="gd">GUARD</i>');
    if (u.ail && !dead) { const d = D.ailments[u.ail.id]; st.push(`<i class="ail" style="--c:${d.color}" title="${esc(d.name)}" aria-label="${esc(d.name)}">${stIco(u.ail.id)}<sub>${u.ail.t}</sub></i>`); }
    const tac = tacticOf(u);
    if (tac !== 'direct' && !dead) st.push(`<i class="tc" title="${esc(D.tactics[tac].name)}">${esc(D.tactics[tac].short.toUpperCase())}</i>`);
    if (u.tired && !dead) st.push('<i class="tired" title="Tired: weaker, and may lose turns">TIRED</i>');
    if (u.orgia > 0 && !dead) st.push(`<i class="up">ORGIA ${u.orgia}</i>`);
    st.push(...buffChips(u, dead));
    if (u.ward && !dead) st.push('<i class="ward" title="Protective Suzu: nothing can hurt them until their next turn">WARD</i>');
    if (u.taunt > 0 && !dead) st.push(`<i class="aggro" title="Drawing every single-target attack (${u.taunt} turn${u.taunt === 1 ? '' : 's'} left)">AGGRO<sub>${u.taunt}</sub></i>`);
    if (!dead && B.flanking(u)) st.push('<i class="flank" title="Off Angle Flank: big evasion and +30% crit while someone else draws aggro">FLANK</i>');
    if (!dead && B.kitsuneOn(u)) st.push(`<i class="kit" title="Kitsune Rush: moves first, +50% agility and accuracy, costs halved">FOX<sub>${B.S.kitsune}</sub></i>`);
    if (!dead && u.undying > 0) st.push(`<i class="ward" title="Undying Love: can’t drop below 1 HP">UNDYING<sub>${u.undying}</sub></i>`);
    if (!dead && u.valkyrie > 0) st.push(`<i class="up" title="Valkyrie: single-target heals reach the whole party, +4 SP a turn">VALK<sub>${u.valkyrie}</sub></i>`);
    if (!dead && u.bondWith) st.push(`<i class="ward" title="Warding Bond: Solar takes half of the damage">BOND<sub>${u.bondT}</sub></i>`);
    if (!dead && u.sanct) st.push('<i class="ward" title="Sanctuary: can’t be targeted until their next turn">SANCT</i>');
    if (!dead && u.charge2) st.push('<i class="up" title="Titanic Kiss: the next magic attack deals 2.5×">KISS</i>');
    if (!dead && u.papillon) st.push('<i class="ward" title="Papillon Heart: the next hit does nothing">PAPILLON</i>');
    c.querySelector('.st').innerHTML = st.join('');
    c.classList.toggle('ailing', !!(u.ail && !dead));
    c.dataset.ail = u.ail && !dead ? u.ail.id : '';
    c.setAttribute('aria-label', `${u.name}: HP ${hp} of ${u.maxHp}, SP ${sp} of ${u.maxSp}${dead ? ', knocked out' : ''}${u.ail && !dead ? ', ' + D.ailments[u.ail.id].name : ''}`);
  }
  function syncAll() {
    if (!BT) return;
    B.foes().forEach(u => { if (!BT.enemies.has(u.id)) addEnemy(u); paintEnemy(u); const el = BT.enemies.get(u.id); if (u.dead && !el.classList.contains('dead')) el.classList.add('dead', 'gone'); });
    B.party().forEach(u => paintCard(u));
    paintFighter();
    paintOrder();
  }
  function paintOrder() {
    const cur = B.S.cur;
    const ids = [cur && cur.id].concat(B.upcoming(curPerks.editMode ? 8 : 7)).filter(Boolean); // Judy's Edit Mode: one turn further
    BT.order.innerHTML = ids.map((id, i) => {
      const u = B.U(id); if (!u) return '';
      const oi = u.side === 'enemy' ? orderIcon(u) : '';
      return `<li class="${u.side === 'enemy' ? 'enemy' + (oi ? ' art' : '') : 'party fcb'}${i === 0 ? ' now' : ''}${u.down ? ' down' : ''}${u.side === 'party' && (u.th || 0) >= 100 && !u.dead ? ' th' : ''}" title="${esc(u.name)}">${u.side === 'party' ? fimg(u.mid, member(u.mid).faces.idle) : oi}</li>`;
    }).join('');
  }
  function setActive(u) {
    BT.cards.forEach(c => c.classList.remove('active'));
    BT.enemies.forEach(e => e.classList.remove('acting'));
    if (u && u.side === 'party') BT.cards.get(u.id).classList.add('active');
    if (!u || u.side === 'party') { if (BT.fighter.dataset.id !== (u?.id || '')) endFieldEvoke(); BT.fighter.dataset.id = u?.id || ''; }
    paintFighter();
    paintOrder();
  }
  function paintFighter() {
    const box = BT.fighter, u = B.U(box.dataset.id);
    const visible = !!u && hasField(u.mid) && !u.dead && !u.down;
    box.hidden = !visible;
    if (!visible) return;
    const img = box.querySelector('img:not(.evk)');
    if (img.dataset.mid !== u.mid) {
      img.dataset.mid = u.mid;
      box._shadowToken = (box._shadowToken || 0) + 1; box._shadowAction = false; box.classList.remove('won');
      box._shadowPoses = FIGHTER_POSES[u.mid] ? { src: true, frames: posedFrames(u.mid), states: FIGHTER_STATES } : null;
      img.classList.toggle('posed', !!box._shadowPoses);
      box.style.setProperty('--pz', FIGHTER_POSES[u.mid] || 1);
      delete box.dataset.pose;
      img.style.visibility = 'hidden';
      img.onload = () => { img.style.visibility = 'visible'; };
      img.onerror = () => { img.style.visibility = 'hidden'; };
      img.alt = `${u.name}, battle stance`;
      img.src = fieldPose(u.mid);
      if (box._shadowPoses) box.dataset.pose = '0';
    }
  }
  /* A won fight: the last fighter on the field (or the first one standing who has field art) strikes the victory pose. */
  function fighterWin(lastId) {
    const up = B.party().filter(p => !p.dead && !p.down && hasField(p.mid));
    const u = up.find(p => p.id === lastId) || up[0];
    if (!u) return;
    BT.fighter.dataset.id = u.id;
    paintFighter();
    const box = BT.fighter;
    if (!box._shadowPoses) return;
    box.classList.add('won');
    releasePose(box);
    mark('fighter-win');
  }
  function log(text, cls = '') { if (cls !== 'say') blogAdd(text, cls); BT.log.textContent = text; clearTimeout(log.t); log.t = setTimeout(() => { if (BT) BT.log.textContent = ''; }, 2200 * textHold() / Math.min(speed(), 2)); }

  /* ── Fuuka ────────────────────────────────────────── */
  // Fuuka's lines for story fights that only this file knows (the finale's train: which targets can break; vars.tip).
  const NAV_LOCAL = { finaleTrain: ['{tip}', 'neutral'] };
  function nav(key, vars = {}, { once = false } = {}) {
    const line = D.nav[key] || NAV_LOCAL[key];
    if (!line || !BT) return;
    if (curSpec && curSpec.rules && curSpec.rules.noNav) return;
    if (once && navSaid.has(key)) return;
    navSaid.add(key);
    const text = String(pickOne(line[0])).replace(/\{(\w+)\}/g, (_, k) => (vars[k] != null ? vars[k] : ''));
    BT.nav.innerHTML = `<div class="pic fcb">${fimg(NAVI.id, navFace(line[1] || 'neutral'))}</div><p><b>${esc(NAVI.name)}</b><span></span></p>`;
    const typed = typeInto(BT.nav.querySelector('p span'), text);
    BT.nav.hidden = false;
    BT.nav.classList.remove('out');
    void BT.nav.offsetWidth;
    BT.nav.style.animation = 'none'; void BT.nav.offsetWidth; BT.nav.style.animation = '';
    clearTimeout(navTimer);
    const nv = BT.nav;
    navTimer = setTimeout(() => { nv.classList.add('out'); setTimeout(() => { if (nv.classList.contains('out')) nv.hidden = true; }, 300); }, (2900 * textHold() + typed) / Math.min(speed(), 3));
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
    if (!ST().numbers) { n = null; if (!label) return; }
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
    const art = FX.artFor && FX.artFor(kind, o);
    if (art) mark('fx-art-' + art); // Kat's sheet for it (art/fx/, 5F) plays instead of the code effect
    return FX.play(kind, fxAt(id), Object.assign({ track: () => { if (!BT || !(BT.enemies.has(id) || BT.cards.has(id))) return null; const b = fxAt(id); return b.w > 0 ? b : null; } }, o)) || 0;
  }
  // Signature skills with their own effect (data.js skills[].fx → fx.js).
  const SIG_FX = new Set(['corkscrew', 'galearrow', 'fastball', 'fleche', 'salvo', 'lance', 'bite', 'haymaker', 'moonstatic', 'goblinfire', 'aperture', 'crescent', 'serpent', 'club', 'theia', 'shell']);
  /* A hit's effect; a crit also gets the crit sheet over the target when it exists, its peak on the hit's own impact. */
  function fxHit(e) {
    const t = fxHitKind(e);
    if (e.crit && !e.insta && FX && FX.hasArt && FX.hasArt('crit')) fxPlay('crit', e.tgt, { delay: Math.max(0, t - 140) / 1000 });
    return t;
  }
  function fxHitKind(e) {
    // heavy (5G): a -ma / -dyne / all-foe damage skill tries the element's <kind>-heavy sheet (fx.js artFor: crit, then heavy, then plain).
    const sk0 = D.skills[e.skill], heavy = !!(sk0 && sk0.type === 'dmg' && (sk0.target === 'all' || /dyne$/.test(e.skill)));
    // by (5G): a party member's own sheet for this element (<kind>-<mid>, fx.js artFor tries it first).
    const src = B.U(e.src), el = e.el, o = { crit: e.crit, heavy, by: (src && src.side === 'party' && src.mid) || undefined, color: (D.elements[el] || {}).color };
    if (e.skill === 'golden_rope') { const c = BT.cards.get(e.src), R = BT.root.getBoundingClientRect(); if (c) { const r = c.getBoundingClientRect(); o.from = { x: r.left + r.width * 0.4 - R.left, y: r.top - R.top }; } return fxPlay('rope', e.tgt, o); }
    if (e.insta) return fxPlay(el === 'light' ? 'light' : 'dark', e.tgt, Object.assign(o, { holy: el === 'light' }));
    if (e.theurgy) { const look = (B.U(e.src) && member(B.U(e.src).mid).theurgy.look) || el; return fxPlay(look === 'sun' ? 'light' : (D.elements[look] ? look : 'almighty'), e.tgt, Object.assign(o, { holy: look === 'sun' })); }
    const sg = D.skills[e.skill];
    if (sg && sg.fx && SIG_FX.has(sg.fx)) return fxPlay(sg.fx, e.tgt, o);
    if (String(e.skill || '').startsWith('bond_')) return fxPlay(el === 'light' ? 'light' : D.elements[el] ? el : 'almighty', e.tgt, Object.assign(o, { holy: el === 'light', crit: true }));
    if (e.skill === 'kunai_flick') { const t = fxPlay('kunai', e.tgt, Object.assign(o, { keen: e.keen })); if (e.flank) fxPlay('flank', e.tgt); return t; }
    if (e.flank) fxPlay('flank', e.tgt);
    if (['golden_tether', 'heavens_rope'].includes(e.skill)) { const c = BT.cards.get(e.src), R = BT.root.getBoundingClientRect(); if (c) { const r = c.getBoundingClientRect(); o.from = { x: r.left + r.width * 0.4 - R.left, y: r.top - R.top }; } return fxPlay('rope', e.tgt, o); }
    if (['daybreak', 'morning_glory', 'high_noon'].includes(e.skill) || el === 'light') return fxPlay('light', e.tgt, o);
    if (src && src.side === 'enemy' && el === 'almighty') return fxPlay('almighty', e.tgt, o);
    return fxPlay(D.elements[el] ? el : 'strike', e.tgt, o);
  }
  /* Shadow death: dissolve into ash (canvas) while a CSS mask wipes the art away; the mask falls last. */
  function deathFx(id) {
    const en = BT.enemies.get(id);
    if (!en || en.classList.contains('dead')) return;
    en.classList.remove('down', 'charging', 'hit', 'targeted');
    en._shadowToken = (en._shadowToken || 0) + 1;
    en._shadowAction = false;
    setShadowFrame(en, (en._shadowPoses?.states.defeat || [0])[0]);
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
  function flash(pink, k = 1) { // k: strength (a third when a crit sheet already carries the flash)
    BT.flash.classList.toggle('pink', !!pink);
    BT.flash.style.setProperty('--fk', k);
    BT.flash.classList.remove('go'); void BT.flash.offsetWidth; BT.flash.classList.add('go');
  }
  function shake(big) {
    if (!ST().shake) return;
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
    // The hub stamp for a first Persona (stamps.js also reads save.feats.summon).
    if (u.mid === 'solar' && !(save.feats && save.feats.summon)) { save.feats = Object.assign(save.feats || {}, { summon: 1 }); try { if (window.parent !== window && window.parent.FemcStamps) window.parent.FemcStamps.award('p3s-persona'); } catch (err) {} }
    if (u.mid === 'solar' && !save.awakened) {
      save.awakened = true; persist();
      await awakening(BT.root, sleep);
      return;
    }
    const mode = rushActive() ? 'off' : (save.cutins || 'first');
    // A posed fighter on the field (2026-10-21, Kat): the Evoker frame holds in view first, the glass breaks beside
    // the figure instead of over it, and the spell frame follows (playOne). Reduced motion keeps the old quick version.
    const fp = posedFighter(u), side = !!fp && !!FX && !FX.reduced();
    if (mode === 'off' || (mode === 'first' && !first)) {
      sfx('summon');
      if (await fieldEvoke(u, side)) return;
      if (side) { await sleep(EVOKE_HOLD); sideGlass(fp); sfx('evoker'); mark('side-glass'); await sleep(260); return; }
      flash(true); await sleep(180); return;
    }
    if (side) {
      mark('evoke-hold');
      // An Evoker sheet (Solar) plays on the figure itself: raised, the shot as the cut-in breaks beside her, lowered.
      if (await fieldEvoke(u, true, () => evoker(u, skillName, fp))) return;
      await sleep(EVOKE_HOLD);
    }
    await evoker(u, skillName, side ? fp : null);
  }
  /* How long the fighter's Evoker frame stays up before the glass breaks (ms at speed 1; sleep() scales it). */
  const EVOKE_HOLD = 500;
  /* And the spell (or weapon) frame after it, while the skill's effect plays. */
  const SPELL_HOLD = 1200;
  /* A small burst of glass beside the fighter (summons that skip the cut-in): light breaking at the Evoker, off the figure. */
  function sideGlass(box) {
    if (!FX || FX.reduced() || perf()) { flash(true); return; }
    const R = BT.root.getBoundingClientRect(), r = box.getBoundingClientRect();
    const s = Math.round(Math.max(120, Math.min(r.height * 0.75, R.width * 0.3)));
    const layer = document.createElement('div');
    layer.className = 'bt-sideglass';
    const x = Math.max(0, Math.min(R.width - s, r.right - R.left - s * 0.12)), y = Math.max(0, r.top - R.top + r.height * 0.04);
    Object.assign(layer.style, { left: `${Math.round(x)}px`, top: `${Math.round(y)}px`, width: `${s}px`, height: `${s}px` });
    BT.cut.appendChild(layer);
    const c = document.createElement('canvas'); c.width = c.height = s;
    const g = c.getContext('2d'), gr = g.createRadialGradient(s * 0.18, s * 0.38, 0, s * 0.18, s * 0.38, s * 0.85);
    [[0, 'rgba(255,255,255,.95)'], [0.25, 'rgba(150,205,255,.75)'], [0.55, 'rgba(255,79,158,.4)'], [1, 'rgba(40,20,80,0)']].forEach(([o, col]) => gr.addColorStop(o, col));
    g.fillStyle = gr; g.fillRect(0, 0, s, s);
    FX.shatter(layer, c, { cx: s * 0.12, cy: s * 0.38 }).then(() => layer.remove());
  }
  /* The Evoker sheet on the battlefield (data.js member.evoker.frames: raised, the shot, lowered), for the summons that
     skip the cut-in (repeats, Off, Rush). The frames sit over the stance at the stance figure's own height; this returns
     once the shot lands and the follow-through finishes by itself. false: nothing to play (no sheet, no figure on the
     field, frames not decoded yet, reduced motion), and the caller does the plain flash. */
  let evokeTok = 0;
  const evokeFrames = mid => { const f = ((member(mid) || {}).evoker || {}).frames; return f && f.length >= 3 ? f : null; };
  function endFieldEvoke() {
    evokeTok++;
    const box = BT && BT.fighter;
    if (!box) return;
    box.classList.remove('evoking-f');
    const ov = box.querySelector('img.evk');
    if (ov) ov.remove();
  }
  async function fieldEvoke(u, side = false, during = null) {
    const frames = evokeFrames(u.mid), box = BT && BT.fighter;
    if (!frames || !box || box.hidden || box.dataset.id !== u.id || !FX || FX.reduced()) return false;
    const base = box.querySelector('img:not(.evk)');
    if (!base || !base.complete || !base.naturalWidth || !frames.every(f => { const im = still(f).im; return im.complete && im.naturalWidth; })) return false;
    const tok = ++evokeTok;
    const r = base.getBoundingClientRect(), k = Math.min(r.width / base.naturalWidth, r.height / base.naturalHeight);
    let ov = box.querySelector('img.evk');
    if (!ov) { ov = document.createElement('img'); ov.className = 'evk'; ov.alt = ''; ov.draggable = false; box.appendChild(ov); }
    ov.style.height = `${Math.round(base.naturalHeight * k)}px`;
    box.classList.add('evoking-f');
    const show = i => { ov.src = frames[i]; ov.dataset.f = i; mark('field-evoke-' + i); };
    show(0);
    await sleep(side ? EVOKE_HOLD : 170);
    if (tok !== evokeTok) return true;
    show(1);
    if (during) await during(); else { if (side) sideGlass(box); else flash(true); sfx('evoker'); }
    const tail = (async () => { await sleep(300); if (tok === evokeTok) show(2); await sleep(280); if (tok === evokeTok) { endFieldEvoke(); mark('field-evoke-done'); } })();
    if (side) await tail; // the spell frame comes after the follow-through, not hidden under it
    return true;
  }
  async function evoker(u, skillName, fp = null) {
    const m = member(u.mid), per = D.personas[u.personaId] || D.personas[m.persona], reduced = !FX || FX.reduced() || perf(), solar = u.mid === 'solar';
    // A close-up Evoker shot (Solar's, or a member's evoker.shot) fills the cut-in; everyone else gets their face and the prop.
    const ev = m.evoker || {}, shotSrc = solar ? SUMMON_DIR + 'solar-evoker.webp' : ev.shot || null;
    await stills((shotSrc ? [shotSrc, per.art] : [per.art, pimg(u.mid, m.faces.idle), EVOKER_ART]).concat(evokeFrames(u.mid) || []), 900);
    const wrap = document.createElement('div');
    wrap.className = `bt-evoke${solar ? ' solar' : ''}`;
    wrap.style.setProperty('--spd', speed());
    // A summon clip (data.clips.summon) replaces Solar's Evoker still when it's loaded and ready.
    const sclip = solar && !reduced && prepClip('summon');
    const useS = sclip && await sclip.ready(250);
    const shot = shotSrc
      ? `<div class="bt-evk-shot"${ev.pos ? ` style="--op:${ev.pos};--opm:${ev.posPhone || ev.pos}"` : ''}>${useS ? '' : `<img src="${shotSrc}" alt="">`}</div>`
      : `<div class="bt-evk-band" style="--c:${m.color}">${fimg(u.mid, m.faces.idle, '', 'face')}<img class="gun" src="${EVOKER_ART}" alt=""></div>`;
    // With an Evoker sheet: after the glass breaks, the full-body shot stands beside the Persona, then the Evoker lowers.
    const body = !fp && evokeFrames(u.mid) && !reduced && evokeFrames(u.mid).every(f => { const im = still(f).im; return im.complete && im.naturalWidth; }) ? evokeFrames(u.mid) : null;
    wrap.innerHTML = `<div class="bt-evk-light"></div><img class="per" src="${per.art}" alt="">${body ? `<div class="bt-evk-body"><img data-i="1" src="${body[1]}" alt=""><img data-i="2" src="${body[2]}" alt=""></div>` : ''}<b class="bt-evk-name"><span class="pn">${esc(per.name.toUpperCase())}</span><small>${esc(skillName)}</small></b>${shot}`;
    if (useS) { const v = sclip.v; v.className = 'bt-evk-video'; try { v.currentTime = 0; } catch (err) {} wrap.querySelector('.bt-evk-shot').appendChild(v); v.play().catch(() => {}); mark('evoke-clip'); }
    // With the fighter on the field the cut-in starts at the figure's right edge, so the figure stays in view.
    const sideX = fp ? Math.max(0, Math.round(fp.getBoundingClientRect().right - BT.root.getBoundingClientRect().left)) : 0;
    if (sideX) { wrap.classList.add('side'); wrap.style.left = `${sideX}px`; mark('evoke-side'); }
    // The prop art falls back to the code-drawn Evoker if it can't load.
    const gun = wrap.querySelector('.bt-evk-band .gun');
    if (gun) { gun.onerror = () => { gun.onerror = null; gun.src = EVOKER_SVG; mark('evoker-svg'); }; if (gun.complete && !gun.naturalWidth) gun.onerror(); }
    BT.cut.appendChild(wrap);
    BT.root.classList.add('evoking');
    // The Evoker at the temple (batch 37b): the band's face is drawn far bigger than the band (it shows the eyes), so the
    // temple is about 0.56 face-widths left of the face's centre. The muzzle goes there, but never so far left that the gun
    // leaves the cut-in (it starts at the fighter's edge with a 48px fade); then the face moves right to keep the muzzle at
    // its temple. The SVG fallback is the same element, so it sits in the same spot.
    if (gun) {
      const band = wrap.querySelector('.bt-evk-band'), fc = band && band.querySelector('.fc');
      if (fc && band.offsetWidth) {
        const bw = band.offsetWidth, fw = fc.offsetWidth * focusOf(u.mid, m.faces.idle).s / 100, gw = gun.offsetWidth || 130;
        const muzzle = Math.max(bw / 2 - fw * 0.56, gw + (wrap.classList.contains('side') ? 56 : 16));
        band.style.setProperty('--zx', `${Math.round(muzzle + fw * 0.56)}px`);
        gun.style.right = `${Math.round(bw - muzzle)}px`;
        mark('evoker-temple');
      }
    }
    sfx('click');
    mark('evoke');
    mark('evoke-' + u.mid);
    if (shotSrc && !solar) mark('evoke-shot');
    await sleep(reduced ? 140 : 320);
    const sh = wrap.querySelector('.bt-evk-shot, .bt-evk-band');
    sfx('evoker');
    mark('evoke-crack');
    if (!reduced) {
      const R = BT.root.getBoundingClientRect();
      let cx, cy, extras;
      if (shotSrc) {
        const im = sh.querySelector('img'), cb = im ? coverBox(im) : { x: 0, y: 0, w: BT.root.clientWidth, h: BT.root.clientHeight };
        const at = ev.at || [51.5, 18]; // the Evoker's muzzle at the temple, in % of the shot
        cx = cb.x + cb.w * at[0] / 100; cy = cb.y + cb.h * at[1] / 100;
        extras = [{ el: sh, clip: [[0, 6], [100, 0], [100, 94], [0, 100]], fill: '#05060c', cover: true }];
      } else {
        const g = sh.querySelector('.gun').getBoundingClientRect();
        cx = g.right - R.left - g.width * 0.02; cy = g.top - R.top + g.height * 0.32;
        extras = [{ el: sh, clip: [[0, 18], [100, 0], [100, 82], [0, 100]], fill: '#14070f', edge: m.color }];
      }
      let snap = FX.snapshot(BT.root, { bg: BT.bg, extras });
      if (sideX) { // only the part of the battle the cut-in covers breaks
        const part = document.createElement('canvas'); part.width = Math.max(1, snap.width - sideX); part.height = snap.height;
        part.getContext('2d').drawImage(snap, -sideX, 0); snap = part; cx = Math.max(0, cx - sideX);
      }
      sh.remove();
      wrap.classList.add('broke');
      FX.shatter(wrap, snap, { cx, cy });
      mark('evoke-shatter');
    } else { sh.remove(); wrap.classList.add('broke'); flash(); }
    if (solar && !per.form) glitchName(wrap.querySelector('.pn'));
    if (body) { mark('evoke-body'); await sleep(520); wrap.classList.add('follow'); mark('evoke-follow'); await sleep(380); }
    else await sleep(reduced ? 600 : 900);
    wrap.classList.add('out');
    BT.root.classList.remove('evoking');
    await sleep(200);
    wrap.remove();
  }

  /* The one-time cinematic: Solar's Persona awakening. Stills 01→05 with Ken Burns crossfades (the glass breaks between
     03 and 04), still 06, then Kat's video (data.clips.awakening) crossfades in and plays to the end; it holds on the last
     frame while HAENIM glitches in and "…thou art I." shows. Without the video (error, slow load, reduced motion,
     Performance mode) it's the stills-only version. Skip with the button, Enter or Esc, even mid-video.
     host: where to draw it; wait: a sleep that respects battle speed (and the screenshot freeze). */
  function awakening(host, wait = ms => new Promise(r => setTimeout(r, ms / speed()))) {
    const reduced = !FX || FX.reduced();
    const prevCtl = ctl;
    const clip = reduced ? null : prepClip('awakening');
    const t0 = performance.now();
    return new Promise(resolve => {
      let done = false, video = null;
      const el = document.createElement('div');
      el.className = `bt-awaken${reduced ? ' reduced' : ''}`;
      el.style.setProperty('--spd', speed());
      const caps = ['', '', 'I am thou…', '…thou art I.', '', ''];
      el.innerHTML = AWAKEN.map((f, i) => `<div class="bt-awk-f" data-i="${i}"><img src="${SUMMON_DIR}${f}.webp" alt=""></div>`).join('') +
        `<div class="bt-awk-v"></div><p class="bt-awk-cap"></p><b class="bt-awk-name"><span class="pn">H̷A̵E̶N̸I̴M</span><small>해님 · Lady Sun</small></b>
         <button type="button" class="bt-tool bt-awk-skip"><span>Skip ›</span></button>`;
      host.appendChild(el);
      const frames = [...el.querySelectorAll('.bt-awk-f')], cap = el.querySelector('.bt-awk-cap'), vbox = el.querySelector('.bt-awk-v');
      const finish = () => { if (done) return; done = true; if (video) { try { video.pause(); } catch (e) {} } el.classList.add('out'); ctl = prevCtl; setTimeout(() => { el.remove(); if (video) video.remove(); }, 350); mark('awaken-done'); resolve(); };
      el.querySelector('.bt-awk-skip').addEventListener('click', () => { sfx('back'); mark('awaken-skip'); finish(); });
      ctl = { kind: 'cinematic', move() {}, pick: () => { mark('awaken-skip'); finish(); }, back: () => { mark('awaken-skip'); finish(); } };
      mark('awaken');
      const caption = t => { cap.textContent = t; cap.classList.toggle('on', !!t); };
      const showFrame = (i, capText = caps[i]) => {
        frames.forEach((f, j) => f.classList.toggle('on', j === i));
        frames[i].classList.add('kb' + (i % 2));
        caption(capText);
        mark('awaken-' + (i + 1));
      };
      (async () => {
        await stills(AWAKEN.map(f => SUMMON_DIR + f + '.webp'), 1500);
        sfx('summon');
        for (let i = 0; i < AWAKEN.length && !done; i++) {
          if (i === 3 && !reduced && !perf()) {
            // 03 → 04: the glass breaks over frame 03 and frame 04 is behind it.
            const im = frames[2].querySelector('img'), r = el.getBoundingClientRect();
            const snap = document.createElement('canvas'), k = 1; // shards are motion-blurred anyway: DPR 1 is plenty
            snap.width = Math.round(r.width * k); snap.height = Math.round(r.height * k);
            const g = snap.getContext('2d'), ib = im.getBoundingClientRect();
            if (im.complete && im.naturalWidth) { const kk = Math.max(ib.width / im.naturalWidth, ib.height / im.naturalHeight); g.drawImage(im, ib.left - r.left + (ib.width - im.naturalWidth * kk) / 2, ib.top - r.top + (ib.height - im.naturalHeight * kk) / 2, im.naturalWidth * kk, im.naturalHeight * kk); }
            sfx('evoker');
            frames[2].classList.remove('on');
            frames[2].style.visibility = 'hidden';
            showFrame(3, clip ? '' : caps[3]);
            frames[3].classList.add('snap');
            FX.shatter(el, snap, { cx: r.width * 0.5, cy: r.height * 0.32 });
            mark('awaken-shatter');
            await wait(1500);
            continue;
          }
          if (i === 5 && clip) {
            showFrame(5, '');
            await wait(900);
            if (done) break;
            const ok = await clip.ready(Math.max(250, (clip.c.maxWait || 2500) - (performance.now() - t0)));
            if (ok && !done) {
              // Crossfade 06 into the video and let it play to the end; then hold on its last frame.
              video = clip.v;
              video.className = 'bt-awk-video';
              try { video.currentTime = 0; } catch (e) {}
              vbox.appendChild(video);
              const ended = new Promise(r => { video.addEventListener('ended', r, { once: true }); setTimeout(r, ((video.duration || 7) + 1.5) * 1000); });
              const p = video.play();
              const playing = p && p.then ? await p.then(() => true, () => false) : true;
              if (playing && !done) {
                el.classList.add('video');
                mark('awaken-video');
                if (frozen) { video.pause(); }
                await ended;
                if (done) break;
                if (clip.c.last) vbox.style.backgroundImage = `url('${clip.c.last}')`;
                el.classList.add('held', 'named');
                mark('awaken-hold');
                glitchName(el.querySelector('.pn'));
                caption('…thou art I.');
                await wait(2400);
                break;
              }
              video.remove(); video = null;
            }
            mark('awaken-fallback');
            caption(caps[3]);
            el.classList.add('named'); glitchName(el.querySelector('.pn'));
            await wait(2000);
            break;
          }
          showFrame(i);
          if (i === 5) { el.classList.add('named'); glitchName(el.querySelector('.pn')); }
          await wait(i === 5 ? 2000 : 1250);
        }
        finish();
      })();
    });
  }
  /* A soft, pre-blurred backdrop for full-screen cards: drawn once to a tiny canvas (no CSS blur filter at runtime). */
  const blurCache = new Map();
  function softBg(src) {
    if (blurCache.has(src)) return blurCache.get(src);
    const e = still(src), im = e.im;
    if (!im.complete || !im.naturalWidth) return src;
    try {
      const c = document.createElement('canvas'), w = 48, h = Math.max(1, Math.round(48 * im.naturalHeight / im.naturalWidth));
      c.width = w; c.height = h;
      const g = c.getContext('2d');
      g.filter = 'blur(1.5px)';
      g.drawImage(im, 0, 0, w, h);
      g.filter = 'none';
      g.fillStyle = 'rgba(8,2,6,.45)'; g.fillRect(0, 0, w, h);
      const url = c.toDataURL('image/png');
      blurCache.set(src, url);
      return url;
    } catch (err) { return src; }
  }
  /* Theurgy cut-in, P3R-style, built from whatever art the member has (data.js theurgy: img / focus / layers / sheet /
     video, per Persona form via theurgy.forms; the engine's event carries the current form's choice):
       - a strike sheet: the character's wind-up → strike → follow-through over the backdrop (the layers' bg, else the
         still, pushed back and darkened; the Persona rises behind if there's a layer), impact on the strike, then a
         diagonal wipe to the finished cut-in as the closing shot;
       - layers: the bg sweeps in, the Persona rises and scales up behind, the character slides in from the side, impact;
       - a still: it slides in on a diagonal mask, pans and zooms, light sweeps, impact;
       - a sequence (several panels): see playSeq above; the first panel slides in on the same mask;
       - nothing: a stylized cut-in from the portrait and Persona art in the member's color.
     Every version: the element's particles (fx.js stream, drawn over the cut-in), a flash and a screen shake on impact,
     the Theurgy name in the house style. Persona cut-ins setting: Always / 1st per battle (later ones and Off get a short
     band version) / Off; Rush always gets the short one; reduced motion gets a short fade with no movement. Battle speed
     scales every beat (sleep() and the CSS --spd). Test marks: theurgy-final, theurgy-strike, theurgy-impact, theurgy-done. */
  const WHEEL_TXT = { bless: ['BLESSING', 'The Shadows heal'], curse: ['CURSE', 'Ailments rain down'], frenzy: ['FRENZY', 'Strength acts again, harder'], reverse: ['REVERSAL', 'Every buff flips'],
    fall: ['FORTUNE’S FALL', 'Fortune knocks itself Down'], jackpot: ['JACKPOT', 'The party heals and regains SP'], spark: ['SPARK', 'Lightning on everyone'] };
  const thSrc = x => (x && typeof x === 'object' ? x.src : x) || null;
  // Every image a Theurgy presentation can show (decoded ahead so the cut-in never pops in).
  const thArt = T => (T ? [T.img, ...(T.layers ? ['bg', 'persona', 'char'].map(k => thSrc(T.layers[k])) : []), ...((T.sheet && T.sheet.frames) || []), ...(T.sequence || []).map(thSrc)].filter(Boolean) : []);
  /* A multi-frame cut-in (a Theurgy's or a bond's `sequence`: [{ src, focus, pan, hit }] or plain paths; data.js comment above
     TH): quick crossfading panels, each with its own slow zoom and pan (P3R), every panel framed on its own focus. The impact
     lands on the strike panel (`hit`, else the middle one), where the name comes in; the last panel holds for the lines and
     the closing punch. Only the full version plays it: the short band (Off, Rush, repeats) and reduced motion show the last
     panel as a still (the entry's img, which should be that panel). Test marks: <kind>-seq-<i>, <kind>-seq-hit. */
  const SEQ_STEP = 640;
  const seqOf = (e, style) => (style === 'full' && Array.isArray(e.sequence) && e.sequence.length >= 2 ? e.sequence.map(f => (f && typeof f === 'object' ? f : { src: f })) : null);
  // Showtime extras per panel (bonds.js comment): zoom (start scale, --z / --z2), and say lines drawn over the panels.
  const seqHtml = (seq, focus) => `<div class="th-seq">${seq.map((f, i) => { const [x, y] = f.focus || focus || [50, 40], [px, py] = f.pan || [i % 2 ? -2.5 : 2.5, 0];
    const z = +f.zoom > 0 ? `;--z:${+f.zoom};--z2:${(+f.zoom + 0.06).toFixed(2)}` : '';
    return `<div class="th-sf${i === seq.length - 1 ? ' last' : ''}${f.hit ? ' hit' : ''}" data-i="${i}" style="--fx:${x}%;--fy:${y}%;--px:${px}%;--py:${py}%${z};z-index:${i + 1}"><img src="${thSrc(f.src)}" alt=""></div>`; }).join('')}</div>`;
  // A line: [who, text, side]; side 'l' / 'r' puts it on that side of the screen (default: Solar left, the partner right).
  const seqSays = seq => seq.map((f, i) => (!f.say ? [] : Array.isArray(f.say[0]) ? f.say : [f.say]).map((x, k) => { const who = x[0] === 'solar' ? 'solar' : 'partner';
    return { i, k, who, side: ['l', 'r'].includes(x[2]) ? x[2] : who === 'solar' ? 'l' : 'r', text: String(x[1] || '') }; })).flat().filter(x => x.text);
  const sayHtml = (says, names) => (says.length ? `<div class="th-says" aria-hidden="true">${says.map(x => `<p class="th-say ${x.who === 'solar' ? 's' : 'p'} ${x.side}${x.k ? ' late' : ''}" data-i="${x.i}"><em>${esc(x.who === 'solar' ? names[1] : names[0])}</em>${esc(x.text)}</p>`).join('')}</div>` : '');
  /* Plays the panels (the cut-in already has f-in); strike(): the impact on the strike panel. Resolves on the last panel
     with { skipped }. Each panel holds f.ms (else SEQ_STEP, the strike panel 160 ms more), scaled by battle speed; its say
     lines show while it's up, its sfx plays and a `shake` panel shakes as it comes in. skippable (bond Showtimes): a tap
     or Enter / Space jumps to the strike panel (the impact lands once), then the last panel. Marks: <kind>-seq-skip. */
  async function playSeq(w, seq, tag, strike, { skippable = false } = {}) {
    const frames = [...w.querySelectorAll('.th-sf')], at = seq.findIndex(f => f.hit), hit = at >= 0 ? at : Math.floor((seq.length - 1) / 2);
    const says = [...w.querySelectorAll('.th-say')], last = frames.length - 1;
    let struck = false, skip = false, wake = null;
    const nap = ms => new Promise(r => { wake = r; sleep(ms).then(r); });
    const show = i => {
      const f = seq[i] || {};
      frames[i].classList.add('go'); mark(`${tag}-seq-${i}`);
      says.forEach(x => x.classList.toggle('on', +x.dataset.i === i));
      if (f.sfx) sfx(f.sfx);
      if (i === hit && !struck) { struck = true; w.classList.add('q-hit'); mark(`${tag}-seq-hit`); strike(); }
      else if (f.shake) shake(false);
    };
    const onSkip = ev => {
      if (skip || !w.isConnected) return;
      if (ev.type === 'keydown' && ![' ', 'Enter', 'z', 'Z'].includes(ev.key)) return;
      if (ev.type === 'pointerdown' && ev.target && ev.target.closest && ev.target.closest('.bt-tool, button')) return;
      if (ev.type === 'keydown') { ev.preventDefault(); ev.stopPropagation(); }
      skip = true; mark(`${tag}-seq-skip`); if (wake) wake();
    };
    if (skippable) { document.addEventListener('keydown', onSkip, true); document.addEventListener('pointerdown', onSkip, true); w.classList.add('can-skip'); }
    try {
      for (let i = 0; i <= last; i++) {
        if (skip) {
          // Skipped: straight to the strike panel (if it hasn't played), a beat on it, then the last panel.
          if (!struck) { show(hit); await sleep(520); }
          if (last !== hit) show(last);
          break;
        }
        show(i);
        if (i < last) { const f = seq[i] || {}; await nap(+f.ms > 0 ? +f.ms : i === hit ? SEQ_STEP + 160 : SEQ_STEP); }
      }
    } finally {
      if (skippable) { document.removeEventListener('keydown', onSkip, true); document.removeEventListener('pointerdown', onSkip, true); w.classList.remove('can-skip'); }
    }
    w.classList.add('q-hit', 'q-last');
    return { skipped: skip };
  }
  // How long a sequence's panels take at 1x (for the particle stream under them).
  const seqMs = seq => seq.slice(0, -1).reduce((a, f, i) => a + (+f.ms > 0 ? +f.ms : f.hit ? SEQ_STEP + 160 : SEQ_STEP), 0);
  let thSeen = new Set();
  async function theurgyCut(e) {
    const u = B.U(e.src), m = member(u.mid), per = D.personas[u.personaId] || D.personas[m.persona];
    hideMenu();
    mark('theurgy'); mark('theurgy-' + u.mid);
    const first = !thSeen.has(u.id);
    thSeen.add(u.id);
    const reduced = !FX || FX.reduced(), setting = save.cutins || 'first';
    const style = reduced ? 'fade' : rushActive() || setting === 'off' || (setting === 'first' && !first) ? 'short' : 'full';
    const L = e.layers || null, sheet = style === 'full' && e.sheet && e.sheet.frames && e.sheet.frames.length >= 3 ? e.sheet.frames : null;
    const seq = seqOf(e, style);
    const kind = L ? 'layers' : seq ? 'seq' : e.img ? 'cut' : 'styl';
    const look = e.look === 'sun' ? 'sun' : e.look;
    await stills([...thArt({ img: e.img, layers: L, sheet: sheet && { frames: sheet }, sequence: seq }), per.art, pimg(u.mid, m.faces.idle)], style === 'full' ? 1200 : 500);
    const clip = kind === 'cut' && style === 'full' && e.video && prepClip(e.video);
    const useClip = clip && await clip.ready(600);
    const [fx, fy] = e.focus || [50, 40];
    const w = document.createElement('div');
    w.className = `bt-theurgy kind-${kind} st-${style}${sheet ? ' has-sheet' : ''} look-${e.look}${e.unveiled ? ' unveiled' : ''}${reduced ? ' reduced' : ''}`;
    w.style.cssText = `--c:${m.color};--spd:${speed()};--fx:${fx}%;--fy:${fy}%`;
    w.dataset.mid = u.mid;
    if (e.form) w.dataset.form = e.form;
    const piece = (x, cls) => { const o = typeof x === 'object' ? x : {}; return `<div class="th-pl ${cls}" style="--x:${o.x || 0}%;--y:${o.y || 0}%;--s:${o.s || 1}"><img src="${thSrc(x)}" alt=""></div>`; };
    const final = kind === 'layers'
      ? `<img class="th-bg" src="${thSrc(L.bg)}" alt="">${L.persona ? piece(L.persona, 'th-lper') : ''}${L.char ? piece(L.char, 'th-lchar') : ''}`
      : kind === 'seq' ? seqHtml(seq, e.focus)
      : kind === 'cut' ? `<div class="th-cut">${useClip ? '' : `<img class="th-img" src="${e.img}" alt="">`}</div>`
        : `<div class="th-bgc"></div><div class="th-lines"></div><img class="th-per" src="${per.art}" alt=""><div class="th-band fcb">${fimg(u.mid, m.faces.idle, '', 'th-face')}</div>`;
    const back = sheet && (L ? thSrc(L.bg) : e.img);
    const prelude = sheet ? `<div class="th-prelude"><div class="th-back">${back ? `<img src="${back}" alt="">` : ''}</div>${L && L.persona ? piece(L.persona, 'th-lper') : ''}<div class="th-lines"></div>
      <div class="th-strike">${sheet.map((f, i) => `<img class="th-f" data-i="${i}" src="${f}" alt="">`).join('')}</div></div>` : '';
    w.innerHTML = `<div class="th-stage">${prelude}<div class="th-final">${final}<div class="th-sweep"></div>${look === 'sun' ? '<div class="th-burst"></div><div class="th-rays"></div>' : ''}</div></div>
      <div class="th-stripes" aria-hidden="true"><i></i><i></i></div>
      <b class="th-name"><small>Theurgy${per.form ? ' · ' + esc(per.name) : ''}</small>${esc(e.name.toUpperCase())}</b><p class="th-line">“${esc(m.lines.theurgy || m.lines.finish)}”</p>`;
    if (useClip) { const v = clip.v; v.className = 'th-img th-video'; try { v.currentTime = 0; } catch (err) {} w.querySelector('.th-cut').appendChild(v); v.play().catch(() => {}); }
    BT.cut.appendChild(w);
    BT.root.classList.add('evoking', 'th-fx');
    document.documentElement.classList.add('bt-cutin'); // a tip waiting on screen steps aside until it's over
    sfx('summon');
    log(`${u.name}: “${m.lines.theurgy || m.lines.finish}”`, 'say');
    blogAdd(`${u.name}: Theurgy · ${e.name}!`, 'pf');
    mark('theurgy-' + style); mark('theurgy-kind-' + kind);
    const stage = () => w.getBoundingClientRect();
    // The impact: a flash, a shake, and the element's burst where the art's focus is (fx.js, drawn over the cut-in).
    const impact = (big, at) => {
      flash(look !== 'sun');
      if (big) shake(true);
      sfx(look === 'sun' || look === 'light' ? 'light' : 'almighty');
      if (!FX || perf()) return;
      const r = stage(), R = BT.root.getBoundingClientRect(), x = r.left - R.left + r.width * at[0], y = r.top - R.top + r.height * at[1];
      const fk = look === 'sun' ? 'light' : look === 'heal' ? 'heal' : D.elements[look] ? look : 'almighty';
      // Light already blooms white: it stays battle-sized so it doesn't wash out the art; the rest go full-screen.
      FX.play(fk, { x, y, w: r.width * 0.6, h: r.height * 0.8, big: fk !== 'light' && fk !== 'heal' }, { holy: look === 'sun', crit: true });
    };
    if (style === 'fade') {
      // Reduced motion: the finished art fades in and out; nothing moves, flashes or shakes.
      await sleep(1100);
    } else if (style === 'short') {
      await sleep(620);
      flash(look !== 'sun');
      sfx(look === 'sun' || look === 'light' ? 'light' : 'almighty');
      await sleep(120);
    } else {
      if (FX && !perf()) FX.stream(look, { dur: sheet ? 3.3 : 2.7 });
      if (sheet) {
        w.classList.add('p-in'); mark('theurgy-prelude');
        await sleep(140);
        w.classList.add('p-wind'); mark('theurgy-windup');
        await sleep(430);
        w.classList.add('p-strike'); mark('theurgy-strike');
        impact(true, phone() ? [0.62, 0.42] : [0.5, 0.45]); // out along the strike, past the figure
        await sleep(400);
        w.classList.add('p-follow'); mark('theurgy-follow');
        await sleep(470);
      }
      w.classList.add('f-in');
      const beside = [fx < 50 ? Math.min(0.85, fx / 100 + 0.3) : Math.max(0.15, fx / 100 - 0.3), 0.6];
      if (seq) { if (FX && !perf()) FX.stream(look, { dur: seq.length * SEQ_STEP / 1000 * 0.8 }); await playSeq(w, seq, 'theurgy', () => impact(true, beside)); }
      mark('theurgy-final');
      await sleep(sheet ? 450 : seq ? 650 : kind === 'layers' ? 1050 : kind === 'cut' ? 700 : 900);
      w.classList.add('f-hit'); mark('theurgy-impact');
      // Kat's Theurgy burst sheet (5F) replaces the CSS burst and rays when it exists; tinted to the element, Solar's sun untinted.
      if (FX && !perf() && FX.hasArt && FX.hasArt('theurgy-burst')) {
        w.classList.add('has-fx'); mark('fx-art-theurgy-burst');
        const r = stage(), R = BT.root.getBoundingClientRect();
        FX.play('theurgy-burst', { x: r.left - R.left + r.width * fx / 100, y: r.top - R.top + r.height * fy / 100, w: r.width * 0.6, h: r.height * 0.8, big: true },
          { tint: look === 'sun' ? null : (D.elements[look] || {}).color || m.color });
      }
      // Beside the face, toward the Persona's side of the art, so the burst never sits on someone's face.
      impact(!sheet && !seq, beside);
      await sleep(sheet ? 1300 : 1600);
    }
    w.classList.add('out');
    BT.root.classList.remove('evoking');
    await sleep(260);
    BT.root.classList.remove('th-fx');
    document.documentElement.classList.remove('bt-cutin');
    w.remove();
    if (useClip) { try { clip.v.pause(); } catch (err) {} clip.v.remove(); }
    mark('theurgy-done');
  }
  /* A bond perk firing (engine event 'perk'). Assists (friends outside the party) and Solar's own passives get a P5-style
     portrait cut-in; the Persona cut-in setting decides how often (always / the first time per friend each battle / off, and
     never during Rush). quiet perks only log and pop a label. */
  const PERK_FACE = l => { const w = BLD && BLD.WHO[l]; return `${D.portraits}${l}/${w ? w.face : 'neutral'}.webp?v=${V()}`; };
  /* A link whose portraits aren't drawn yet (Danielle, Jaemin, Chenle, 2026-10-22) cuts in as a silhouette: the life sim's
     portrait index (portraits/index.js, loaded by femc-game.html, the frame's parent) has no faces for it. Once Kat's files
     are in and the index lists them, the portrait shows. Without an index to ask (the practice page), the face is tried. */
  const PERK_INDEX = () => { try { return window.FEMC_PORTRAITS || (window.parent !== window && window.parent.FEMC_PORTRAITS) || null; } catch (e) { return null; } };
  const perkFaceHtml = l => { const ix = PERK_INDEX(); return ix && !(ix[l] || []).length ? '<div class="pk-face fcb sil" aria-hidden="true"></div>' : `<div class="pk-face fcb"><img src="${PERK_FACE(l)}" alt=""></div>`; };
  async function perkCut(e) {
    const who = (BLD && BLD.WHO[e.link]) || { name: e.link }, tgt = e.tgt && B.U(e.tgt);
    blogAdd(`${who.name}: ${e.name}${e.assist ? ' (assist)' : ''}${e.what ? ` · ${e.what}` : ''}`, 'perk');
    mark('perk'); mark('perk-' + e.key); if (e.assist) mark('assist');
    const anchorId = (tgt && tgt.id) || (B.leader() && B.leader().id);
    if (e.quiet) { if (anchorId) popup(anchorId, { label: e.name.toUpperCase(), lcls: 'buff' }); await sleep(260); return; }
    const mode = rushActive() ? 'off' : (save.cutins || 'first'), first = !perkSeen.has(e.link);
    perkSeen.add(e.link);
    if (e.assist && first) tip('perk');
    if (mode === 'off' || (mode === 'first' && !first) || e.follow && !first) { banner(e.name, { sub: `${who.name}${e.assist ? ' · Assist' : ''}` }); await sleep(380); return; }
    const reduced = !FX || FX.reduced();
    const el = document.createElement('div');
    el.className = `bt-perkcut${reduced ? ' reduced' : ''}${e.assist ? ' assist' : ''}`;
    el.style.setProperty('--spd', speed());
    el.innerHTML = `<div class="pk-band">${perkFaceHtml(e.link)}<p><small>${e.assist ? 'Assist' : e.by ? 'Bond' : 'Bond · ' + esc(who.name)}</small><b>${esc(e.name)}</b><em>${esc(who.name)}</em></p></div>`;
    BT.cut.appendChild(el);
    sfx('summon');
    mark('perk-cut'); mark('perk-cut-' + e.link);
    await sleep(reduced ? 520 : 900);
    el.classList.add('out');
    await sleep(200);
    el.remove();
  }
  /* ── Battle lines (data.js party[].lines, text barks) ──────────────────
     Situations: allyDown / allyLow (another member, {name}), solarHurt, weak, downed, boss, win, thReady. Each member says each
     one a set number of times per fight (LINE_CAP) and never on top of another line (a short gap), so the field doesn't fill
     with talk. Romance banter (data.js party[].banter: { key: [{ r: rank, l: [their line, Solar's reply] }] }) plays instead
     when that partner is on the romance route at that rank (save.bondsLove / save.bonds, from the life sim). A line shows as
     a small speech bubble over the speaker's card and goes in the battle log. Story fights with rules.noNav stay quiet. */
  let barkN = new Map(), barkAt = 0;
  const LINE_CAP = { weak: 1, allyLow: 1, allyDown: 2, solarHurt: 1, downed: 1, boss: 1, win: 1, thReady: 1, banter: 1 };
  const barkOk = () => !!BT && !(curSpec && curSpec.rules && (curSpec.rules.noNav || curSpec.rules.noBarks));
  /* Lines wait their turn (2026-10-21, Kat: they vanished too fast): one bubble at a time, each up for ~1.5 s plus 60 ms a
     character (at least 2.5 s at speed 1, never under BARK_FLOOR at any speed), the clock stopping while a summon or
     Theurgy cut-in is over the field (the bubble hides and comes back). The log gets the line at once, as before. */
  let barkQ = [], barkRun = 0;
  const BARK_FLOOR = 1800;
  const barkMs = text => Math.max(BARK_FLOOR, Math.max(2500, 1500 + 60 * String(text).length) * textHold() / Math.min(speed(), 3));
  const barkCovered = () => !!BT && (BT.root.classList.contains('evoking') || document.documentElement.classList.contains('bt-cutin') || !!BT.cut.querySelector('.bt-evoke, .bt-awaken, .bt-sideglass'));
  function say(u, text) {
    if (!BT || !u) return;
    blogAdd(`${u.name}: “${text}”`, 'say');
    barkQ.push([u, text]);
    if (!barkRun) runBarks();
  }
  async function runBarks() {
    const run = ++barkRun, bt = BT;
    const tick = () => new Promise(r => setTimeout(r, 100));
    while (barkQ.length && BT === bt && run === barkRun) {
      while ((frozen || paused || barkCovered()) && BT === bt) await tick();
      const [u, text] = barkQ.shift();
      if (BT !== bt) break;
      const b = showBark(u, text);
      mark('bark-shown');
      let left = barkMs(text);
      while (left > 0 && BT === bt && run === barkRun) {
        const hide = frozen || paused || barkCovered();
        b.style.visibility = barkCovered() ? 'hidden' : '';
        await tick();
        if (!hide) left -= 100;
      }
      b.classList.add('out'); setTimeout(() => b.remove(), 260);
      await new Promise(r => setTimeout(r, 180));
    }
    if (run === barkRun) barkRun = 0;
  }
  function showBark(u, text) {
    BT.barks.querySelectorAll(`[data-u="${u.id}"]`).forEach(x => x.remove());
    const c = BT.cards.get(u.id), R = BT.root.getBoundingClientRect();
    const b = document.createElement('div');
    b.className = 'bt-bark';
    b.dataset.u = u.id;
    b.style.setProperty('--c', (member(u.mid) || {}).color || '#ff4f9e');
    b.innerHTML = `<b>${esc(u.name)}</b><span>${esc(text)}</span>`;
    BT.barks.appendChild(b);
    if (c) {
      const r = c.getBoundingClientRect(), w = b.offsetWidth;
      b.style.left = `${Math.max(8, Math.min(R.width - w - 8, r.left - R.left + r.width * 0.12))}px`;
      let top = r.top - R.top - 8;
      // Never under Fuuka's panel (on phones it sits right above the cards): go above it instead.
      const nv = BT.nav && !BT.nav.hidden && !BT.nav.classList.contains('out') ? BT.nav.getBoundingClientRect() : null;
      if (nv && nv.width && top > nv.top - R.top && top - b.offsetHeight < nv.bottom - R.top) top = nv.top - R.top - 6;
      // Two lines at once (an exchange): stack them instead of covering one another.
      const left = parseFloat(b.style.left), w2 = b.offsetWidth;
      BT.barks.querySelectorAll('.bt-bark:not(.out)').forEach(o => { if (o === b) return; const q = o.getBoundingClientRect(), ql = q.left - R.left, qt = q.top - R.top;
        if (left < ql + q.width && left + w2 > ql && top > qt && top - b.offsetHeight < qt + q.height) top = qt - 6; });
      b.style.top = `${Math.max(8 + b.offsetHeight, top)}px`;
    } else b.classList.add('free');
    return b;
  }
  function bark(u, key, vars = {}, { force = false } = {}) {
    if (!barkOk() || !u || u.side !== 'party' || u.dead || u.assistOf) return false;
    const pool = ((member(u.mid) || {}).lines || {})[key];
    if (!pool) return false;
    const k = u.mid + ':' + key, n = barkN.get(k) || 0, now = performance.now();
    if (n >= (LINE_CAP[key] || 1) || (!force && now - barkAt < 900 / Math.min(speed(), 3))) return false;
    barkN.set(k, n + 1); barkAt = now;
    say(u, String(pickOne(pool)).replace(/\{(\w+)\}/g, (_, x) => (vars[x] != null ? vars[x] : '')));
    mark('bark'); mark('bark-' + key); mark('bark-' + u.mid + '-' + key);
    return true;
  }
  /* A romance partner's banter: only on the romance route, only from the rank each line needs, and not while the link is reversed. */
  const loveRank = mid => ((save.bondsLove || []).includes(mid) && !(save.bondsRev || []).includes(mid) ? +((save.bonds || {})[mid]) || 0 : 0);
  function banterRow(mid, key) { const b = (member(mid) || {}).banter, r = loveRank(mid); if (!b || !r || !b[key]) return null; const rows = b[key].filter(x => r >= x.r); return rows.length ? pickOne(rows).l : null; }
  function banter(u, key) {
    const L = B.leader(), row = barkOk() && u && !u.dead && L && !L.dead && u !== L ? banterRow(u.mid, key) : null;
    if (!row) return false;
    const k = u.mid + ':banter-' + key;
    if ((barkN.get(k) || 0) >= LINE_CAP.banter) return false;
    barkN.set(k, 1); barkAt = performance.now();
    say(u, row[0]);
    if (!L.dead) say(L, row[1]); // queued: Solar's reply follows once their line has been read
    mark('banter'); mark('banter-' + key); mark('banter-' + u.mid + '-' + key);
    return true;
  }
  const banterAny = key => B.party().filter(p => !p.dead && p !== B.leader()).some(p => banter(p, key));
  /* After a hit lands (playOne 'hit'): weakness, Solar's crit (banter), Solar hurt, an ally low or down, a member knocked down. */
  function hitLines(e, t, src, onEnemy) {
    if (!barkOk() || e.quiet || e.self) return;
    const L = B.leader(), others = ex => B.party().filter(p => !p.dead && p !== ex).sort(() => Math.random() - 0.5); // whoever's free says it, not always the same one
    const someone = (ex, key, vars) => { const pool = others(ex).filter(p => p !== L).concat(others(ex).includes(L) ? [L] : []); return pool.some(p => bark(p, key, vars)); };
    if (onEnemy) {
      if (src && src.side === 'party' && !src.assistOf && e.aff === 'weak' && e.amount > 0) bark(src, 'weak');
      if (src && src === L && e.crit && e.amount > 0) banterAny('crit');
      return;
    }
    if (e.killed) { if (t !== L) someone(t, 'allyDown', { name: t.name }); return; }
    if (e.downed && e.amount > 0) bark(t, 'downed');
    if (t === L && e.amount > 0 && (e.amount >= t.maxHp * 0.25 || e.hp / e.maxHp < 0.4)) { if (!banterAny('hurt')) others(L).some(p => bark(p, 'solarHurt')); }
    else if (t !== L && e.amount > 0 && e.hp / e.maxHp < 0.3) someone(t, 'allyLow', { name: t.name });
  }

  /* ── Bond cut-in (engine event 'bond'; bonds.js). Built like a Theurgy's (theurgyCut, the same classes and beats): a
     still (img), a sequence of panels (bond.sequence, playSeq), layers or a strike sheet when Kat's art arrives (bond.img /
     bond.sheet / bond.layers), and until then a
     stylized cut-in made of both portraits on a split diagonal in both colors, both Personas behind, and a knot between
     them (a heart for a romance version). Both lines play: the partner's, then Solar's reply. Settings: Always and 1st per
     battle get the full one (each bond is once per battle anyway); Off and Rush a short band; reduced motion a fade. Battle
     speed scales every beat. Test marks: bond, bond-<id>, bond-full|short|fade, bond-kind-*, bond-final, bond-impact, bond-done. */
  const LOOK_FX = { sun: 'light', jade: 'ice', star: 'almighty' };
  async function bondCut(e) {
    const L = B.U(e.solar), P = B.U(e.partner), mp = member(P.mid), ms = member('solar');
    hideMenu();
    mark('bond'); mark('bond-' + e.id); if (e.love) mark('bond-love');
    // The hub stamp for a first bond skill (stamps.js in the life sim reads save.feats too, in case the frame can't reach it).
    save.feats = Object.assign(save.feats || {}, { bond: (save.feats && save.feats.bond || 0) + 1 });
    try { if (window.parent !== window && window.parent.FemcStamps) window.parent.FemcStamps.award('p3s-bond'); } catch (err) {}
    const reduced = !FX || FX.reduced(), setting = save.cutins || 'first';
    const style = reduced ? 'fade' : rushActive() || setting === 'off' ? 'short' : 'full';
    const Lr = e.layers || null, sheet = style === 'full' && e.sheet && e.sheet.frames && e.sheet.frames.length >= 3 ? e.sheet.frames : null;
    // Settings → Bond Showtimes: Still only plays the version's img (its short-version still) as a single still.
    const seq = ST().showtimes === 'still' ? null : seqOf(e, style);
    const says = seq ? seqSays(seq) : [];
    const kind = Lr ? 'layers' : seq ? 'seq' : e.img ? 'cut' : 'duo';
    const perS = D.personas[L.personaId] || D.personas.haenim, perP = D.personas[P.personaId] || D.personas[mp.persona];
    const fS = e.love ? 'happy' : ms.faces.idle, fP = e.face || (e.love ? 'happy' : mp.faces.win);
    await stills([...thArt({ img: e.img, layers: Lr, sheet: sheet && { frames: sheet }, sequence: seq }), perS.art, perP.art, pimg('solar', fS), pimg(P.mid, fP)], style === 'full' ? 1200 : 500);
    const [fx, fy] = e.focus || [50, 42];
    const look = e.look || ['almighty', 'sun'], c1 = (e.colors || [])[0] || ms.color, c2 = (e.colors || [])[1] || mp.color;
    const w = document.createElement('div');
    w.className = `bt-theurgy bt-bond kind-${kind} st-${style}${sheet ? ' has-sheet' : ''}${says.length ? ' has-say' : ''} look-${look[0]}${e.love ? ' love' : ''}${reduced ? ' reduced' : ''}`;
    w.style.cssText = `--c:${c2};--c2:${c1};--spd:${speed()};--fx:${fx}%;--fy:${fy}%`;
    w.dataset.bond = e.id; w.dataset.mid = P.mid;
    const piece = (x, cls) => { const o = typeof x === 'object' ? x : {}; return `<div class="th-pl ${cls}" style="--x:${o.x || 0}%;--y:${o.y || 0}%;--s:${o.s || 1}"><img src="${thSrc(x)}" alt=""></div>`; };
    const knot = e.love ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-8.5-5.3-8.5-11.3A4.7 4.7 0 0 1 12 6.6a4.7 4.7 0 0 1 8.5 3.1C20.5 15.7 12 21 12 21z" fill="#ff8cc0" stroke="#fff" stroke-width="1.6"/></svg>'
      : '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="12" r="5.6" fill="none" stroke="#fff" stroke-width="2.4"/><circle cx="15" cy="12" r="5.6" fill="none" stroke="#ffd36b" stroke-width="2.4"/></svg>';
    const final = kind === 'layers' ? `<img class="th-bg" src="${thSrc(Lr.bg)}" alt="">${Lr.persona ? piece(Lr.persona, 'th-lper') : ''}${Lr.char ? piece(Lr.char, 'th-lchar') : ''}`
      : kind === 'seq' ? seqHtml(seq, e.focus)
      : kind === 'cut' ? `<div class="th-cut"><img class="th-img" src="${e.img}" alt=""></div>`
        : `<div class="bd-bg"></div><div class="th-lines"></div><img class="bd-per s" src="${perS.art}" alt=""><img class="bd-per p" src="${perP.art}" alt="">
          <div class="bd-band s fcb">${fimg('solar', fS, '', 'th-face')}</div><div class="bd-band p fcb">${fimg(P.mid, fP, '', 'th-face')}</div><div class="bd-knot">${knot}</div>`;
    const back = sheet && (Lr ? thSrc(Lr.bg) : e.img);
    const prelude = sheet ? `<div class="th-prelude"><div class="th-back">${back ? `<img src="${back}" alt="">` : ''}</div><div class="th-lines"></div>
      <div class="th-strike">${sheet.map((f, i) => `<img class="th-f" data-i="${i}" src="${f}" alt="">`).join('')}</div></div>` : '';
    const line = e.line || [mp.lines.shift, ms.lines.shift];
    w.innerHTML = `<div class="th-stage">${prelude}<div class="th-final">${final}<div class="th-sweep"></div><div class="th-burst"></div>${look.includes('sun') ? '<div class="th-rays"></div>' : ''}</div></div>
      <div class="th-stripes" aria-hidden="true"><i></i><i></i></div>
      <b class="th-name"><small>Bond · Solar & ${esc(mp.name)}${e.love ? ' · ♥' : ''}</small>${esc(e.name.toUpperCase())}</b>
      <p class="th-line bd-l1">“${esc(line[0])}”<em>${esc(mp.name)}</em></p><p class="th-line bd-l2">“${esc(line[1])}”<em>Solar</em></p>
      ${sayHtml(says, [mp.name, 'Solar'])}${seq ? '<span class="th-skip" aria-hidden="true">Tap · Enter ▸ skip</span>' : ''}`;
    BT.cut.appendChild(w);
    BT.root.classList.add('evoking', 'th-fx');
    document.documentElement.classList.add('bt-cutin');
    sfx('summon');
    blogAdd(`Bond: Solar & ${mp.name} · ${e.name}${e.love ? ' ♥' : ''}`, 'pf');
    if (says.length) says.forEach(x => blogAdd(`${x.who === 'solar' ? 'Solar' : mp.name}: “${x.text}”`, 'say'));
    else { blogAdd(`${mp.name}: “${line[0]}”`, 'say'); blogAdd(`Solar: “${line[1]}”`, 'say'); }
    mark('bond-' + style); mark('bond-kind-' + kind); if (says.length) mark('bond-showtime');
    const impact = big => {
      flash(!look.includes('sun')); if (big) shake(true); sfx(look.includes('sun') ? 'light' : 'almighty');
      if (!FX || perf()) return;
      const r = w.getBoundingClientRect(), R = BT.root.getBoundingClientRect(), x = r.left - R.left + r.width * 0.5, y = r.top - R.top + r.height * 0.45;
      look.forEach((k, i) => { const fk = LOOK_FX[k] || (D.elements[k] ? k : 'almighty'); setTimeout(() => FX.play(fk, { x: x + (i ? 60 : -60), y, w: r.width * 0.5, h: r.height * 0.7, big: fk !== 'light' }, { holy: k === 'sun', crit: true }), i * 140 / speed()); });
    };
    if (style === 'fade') await sleep(1200);
    else if (style === 'short') { await sleep(700); impact(false); await sleep(140); }
    else {
      const dur = seq ? 2.9 + seqMs(seq) / 1000 : sheet ? 3.4 : 2.9;
      if (FX && !perf()) { look.forEach(k => FX.stream(k === 'jade' ? 'jade' : k, { dur, n: 0.6 })); if (e.love) FX.stream('love', { dur, n: 0.7 }); }
      if (sheet) {
        w.classList.add('p-in'); await sleep(140);
        w.classList.add('p-wind'); await sleep(430);
        w.classList.add('p-strike'); impact(true); await sleep(400);
        w.classList.add('p-follow'); await sleep(470);
      }
      w.classList.add('f-in');
      const ran = seq ? await playSeq(w, seq, 'bond', () => impact(true), { skippable: true }) : null;
      mark('bond-final');
      await sleep(kind === 'duo' ? 1150 : seq ? (ran.skipped ? 380 : 650) : 800);
      w.classList.add('f-hit'); mark('bond-impact');
      impact(!sheet && !seq);
      await sleep(ran && ran.skipped ? 1100 : 1700);
    }
    w.classList.add('out');
    BT.root.classList.remove('evoking');
    await sleep(260);
    BT.root.classList.remove('th-fx');
    document.documentElement.classList.remove('bt-cutin');
    w.remove();
    [L, P].forEach(u => paintCard(u));
    mark('bond-done');
  }
  /* Fortune's wheel: a spinning wheel that lands on the outcome. */
  async function wheelCut(e) {
    const keys = Object.keys(WHEEL_TXT), i = keys.indexOf(e.outcome), n = keys.length;
    const w = document.createElement('div');
    w.className = 'bt-wheel';
    w.style.setProperty('--spd', speed());
    w.style.setProperty('--land', `${-(i * 360 / n) - 180 / n - 360 * 4}deg`);
    w.innerHTML = `<div class="wh"><div class="disc">${keys.map((k, j) => `<span style="--a:${j * 360 / n}deg">${WHEEL_TXT[k][0]}</span>`).join('')}</div><i class="ptr"></i></div><b class="wt">${WHEEL_TXT[e.outcome][0]}<small>${WHEEL_TXT[e.outcome][1]}</small></b>`;
    BT.cut.appendChild(w);
    nav('wheel', {}, { once: true });
    sfx('summon');
    mark('wheel'); mark('wheel-' + e.outcome);
    await sleep(1500);
    sfx('onemore');
    await sleep(500);
    w.classList.add('out');
    setTimeout(() => w.remove(), 300 / speed());
  }
  async function bigWord(text, { sub = '', gold = false, band = null, ms = 900 } = {}) {
    const w = document.createElement('div');
    w.className = 'bt-onemore';
    w.innerHTML = `${band ? `<div class="bt-band fcb">${fimg(band[0], band[1])}</div>` : ''}<div class="bt-big${gold ? ' gold' : ''}">${text}${sub ? `<small>${esc(sub)}</small>` : ''}</div>`;
    w.querySelectorAll('.bt-band, .bt-band img, .bt-big').forEach(x => { x.style.animationDuration = `${ms / speed()}ms`; });
    BT.cut.appendChild(w);
    await sleep(ms * 0.85);
    setTimeout(() => w.remove(), 300);
  }

  /* One line of the battle log for a hit event. */
  function hitLine(e, t, src) {
    const who = src && src !== t && !e.quiet ? `${src.name} → ` : '';
    if (e.quiet) return `${t.name} succumbed to poison.`;
    if (e.self) return `${t.name} fell over!`;
    if (e.shield) return `${who}${t.name}: shielded`;
    if (e.aff === 'repel' && !e.reflected) return `${who}${t.name}: REPEL`;
    if (e.insta) return `${who}${t.name}: ${e.killed ? 'instant kill!' : t.boss ? 'immune' : 'NULL'}`;
    if (e.aff === 'null') return `${who}${t.name}: NULL`;
    if (e.aff === 'drain') return `${who}${t.name} drained ${e.amount}`;
    const tags = [e.aff === 'weak' ? 'WEAK' : e.aff === 'resist' ? 'resist' : '', e.crit ? 'CRITICAL' : '', e.reflected ? 'reflected' : '', e.downed ? 'Down' : '', e.killed ? (t.side === 'enemy' ? 'defeated' : 'KO') : ''].filter(Boolean);
    return `${who}${t.name} −${e.amount}${tags.length ? ` · ${tags.join(' · ')}` : ''}`;
  }

  /* ── Event playback ───────────────────────────────── */
  async function play(evs) {
    for (let i = 0; i < evs.length; i++) await playOne(evs[i], evs[i + 1]);
    syncAll();
  }
  async function playOne(e, next) {
    const U = id => B.U(id);
    switch (e.t) {
      case 'round': paintOrder(); blogAdd(`Round ${e.n}`, 'round'); break;
      case 'use': {
        const u = U(e.src);
        mark('use-' + e.skill);
        if (u.side === 'enemy') {
          const el = BT.enemies.get(u.id); if (el) { el.classList.remove('acting'); void el.offsetWidth; el.classList.add('acting'); }
          banner(e.name, { el: e.el, enemy: true, sub: u.name });
          log(`${u.name} used ${e.name}.`, 'eu');
          const ms = e.skill === 'tremble' ? 500 : 650;
          await Promise.all([sleep(ms), animateShadow(el, E.PHYS.has(e.el) ? 'attack' : 'cast', ms)]);
        } else {
          paintCard(u);
          const fp = posedFighter(u), act = E.PHYS.has(e.el) ? 'attack' : 'cast';
          if (e.summon && !e.charmed) { if (fp) { holdPose(fp, 'evoke'); mark('fighter-evoke'); } await summonCut(u, e.name); if (fp) { animateShadow(fp, act, SPELL_HOLD); mark('fighter-' + act); } banner(e.name, { el: e.el, sub: u.persona }); const sg = D.skills[e.skill]; if (sg && sg.fx && sg.type !== 'dmg' && SIG_FX.has(sg.fx)) e.tgts.forEach(id => fxPlay(sg.fx, id)); }
          else if (e.charmed) { banner(e.name, { el: 'charm', sub: `${u.name} · Charmed` }); await sleep(300); }
          else { const c = BT.cards.get(u.id); c.classList.remove('hit'); banner('Attack', { el: e.el, sub: u.name }); if (fp) { animateShadow(fp, 'attack', 700); mark('fighter-attack'); } await sleep(260); }
          log(`${u.name}: ${e.name}`, 'pu');
        }
        if (D.ailments[e.el]) sfx('ail');
        if (D.elements[e.el] && e.tgts.length) sfx(E.PHYS.has(e.el) ? 'hit' : (['fire', 'ice', 'elec', 'wind', 'light', 'almighty'].includes(e.el) ? e.el : 'hit'));
        break;
      }
      case 'hit': {
        const t = U(e.tgt), onEnemy = t.side === 'enemy', src = U(e.src);
        blogAdd(hitLine(e, t, src), onEnemy ? 'pf' : 'ef');
        if (e.quiet) { if (onEnemy) { paintEnemy(t, { hp: 0 }); deathFx(e.tgt); mark('kill'); } await sleep(500); break; }
        if (e.self) { popup(e.tgt, { label: 'FALL!', lcls: 'weak' }); paintEnemy(t); sfx('down'); mark('fortune-fall'); await sleep(600); break; }
        if (e.shield) { fxPlay('miss', e.tgt); popup(e.tgt, { label: 'SHIELDED', lcls: 'null' }); nav('shielded', {}, { once: true }); sfx('miss'); mark('shielded'); await sleep(420); break; }
        if (e.aff === 'repel' && !e.reflected) { fxPlay(e.el, e.tgt, { small: true }); popup(e.tgt, { label: 'REPEL', lcls: 'repel' }); if (src.side === 'party') nav('repel', {}, { once: true }); sfx('miss'); await sleep(420); break; }
        const lead = e.warded ? fxPlay('suzu', e.tgt, { small: true }) : e.aff === 'null' ? fxPlay('miss', e.tgt) : fxHit(e);
        if (lead > 40) await sleep(lead);
        if (e.insta && e.warded) { await sleep(420); break; }
        if (e.insta) {
          if (e.killed) { popup(e.tgt, { label: e.el === 'light' ? 'BANISHED!' : 'INSTANT KILL!', lcls: 'weak' }); flash(e.el !== 'light'); shake(true); sfx('crit'); nav('insta'); mark('insta'); paintEnemy(t, { hp: 0 }); deathFx(e.tgt); mark('kill'); }
          else { popup(e.tgt, { label: t.boss ? 'IMMUNE' : 'NULL', lcls: 'null' }); sfx('miss'); }
          await sleep(650);
          break;
        }
        const el = onEnemy ? BT.enemies.get(e.tgt) : BT.cards.get(e.tgt);
        if (el && onEnemy && e.aff === 'weak' && e.amount > 0) {
          // Weakness: a yellow ring bursts off the Shadow (or Kat's weak sheet) and the moment holds for a beat (hit-stop).
          if (FX && FX.hasArt && FX.hasArt('weak')) fxPlay('weak', e.tgt);
          else { el.insertAdjacentHTML('beforeend', '<i class="bt-wburst" aria-hidden="true"></i>'); const wb = el.lastElementChild; setTimeout(() => wb.remove(), 700); }
          el.classList.add('hitstop'); await sleep(85); el.classList.remove('hitstop');
        }
        if (el && e.amount > 0 && e.aff !== 'drain') { el.classList.remove('hit'); void el.offsetWidth; el.classList.add('hit'); if (onEnemy) animateShadow(el, 'hurt', 360); else { const fp = posedFighter(t); if (fp && !e.killed) { animateShadow(fp, 'hurt', 420); mark('fighter-hurt'); } } setTimeout(() => el.classList.remove('hit'), 420); }
        const label = e.keen ? 'CRITICAL ×3.5!' : e.crit ? 'CRITICAL!' : (AFF_WORD[e.aff] || '');
        const lcls = e.crit ? 'crit' : e.aff;
        if (e.warded) { popup(e.tgt, { label: 'WARD', lcls: 'buff' }); mark('warded'); }
        else if (e.aff === 'null') popup(e.tgt, { label: 'NULL', lcls: 'null' });
        else if (e.aff === 'drain') popup(e.tgt, { label: 'DRAIN', lcls: 'drain', n: e.amount, cls: 'heal' });
        else popup(e.tgt, { n: e.amount, label, lcls, cls: `${onEnemy ? '' : 'party'} ${e.crit ? 'crit' : ''} ${e.aff === 'weak' ? 'big' : ''}` });
        if (onEnemy) paintEnemy(t, { hp: e.hp }); else paintCard(t, { hp: e.hp, dead: e.killed });
        if (e.crit) { shake(true); flash(false, FX && FX.hasArt && FX.hasArt('crit') ? 1 / 3 : 1); sfx('crit'); }
        else if (e.aff === 'weak') { shake(false); flash(true); sfx('weak'); }
        else if (e.amount) sfx('hit');
        if (e.downed) { sfx('down'); if (onEnemy) { const en = BT.enemies.get(e.tgt); en.classList.add('down'); tip('down'); } }
        if (e.shatter) { popup(e.tgt, { label: 'SHATTER!', lcls: 'crit' }); fxPlay('shatter', e.tgt); sfx('shatter'); nav('shatter'); mark('shatter'); }
        if (src && src.side === 'party' && onEnemy) {
          if (e.crit) nav('crit'); else if (e.aff === 'weak') { nav('weak'); mark('weak'); }
          else if (['null', 'drain', 'resist'].includes(e.aff)) nav(e.aff, {}, { once: true });
        }
        if (!onEnemy && e.aff === 'weak') { nav('hurt', { name: t.name }); const img = BT.cards.get(t.id).querySelector('.face img'); setFace(img, t.mid, member(t.mid).faces.hurt); setTimeout(() => { if (!t.dead) setFace(img, t.mid, member(t.mid).faces.idle); }, 1600); }
        if (e.killed) {
          if (onEnemy) { deathFx(e.tgt); mark('kill'); }
          else { stat0.ko = true; sfx('ko'); setFace(BT.cards.get(t.id).querySelector('.face img'), t.mid, member(t.mid).faces.ko); if (t !== B.leader()) nav('ko', { name: t.name }); log(`${t.name} was knocked out!`); }
        }
        hitLines(e, t, src, onEnemy);
        await sleep(next && next.t === 'hit' && !e.crit ? 240 : (e.aff === 'weak' || e.crit ? 700 : 460));
        break;
      }
      case 'miss':
        blogAdd(`${U(e.tgt).name}: ${e.hidden ? 'can’t be seen' : e.immune ? 'immune' : e.ail && e.has ? 'no effect' : 'miss'}`, 'miss');
        if (e.hidden) { popup(e.tgt, { label: 'CAN’T SEE IT', lcls: 'miss' }); nav('hidden', {}, { once: true }); sfx('miss'); mark('hidden-miss'); await sleep(420); break; }
        popup(e.tgt, { label: e.immune ? 'IMMUNE' : e.ail ? (e.has ? 'NO EFFECT' : 'MISS') : 'MISS', lcls: 'miss' }); sfx('miss'); if (e.insta) mark('insta-miss'); await sleep(420); break;
      case 'thReady': {
        // The gauge just filled: a gold sweep and a chime on the card (once), Fuuka's line the first time in a battle.
        const t = U(e.tgt), c = BT.cards.get(t.id);
        bark(t, 'thReady');
        paintCard(t); tip('theurgy'); blogAdd(`${t.name}’s Theurgy is ready.`, 'sys'); sfx('thready');
        if (c) { c.classList.remove('th-flash'); void c.offsetWidth; c.classList.add('th-flash'); setTimeout(() => c.classList.remove('th-flash'), 1300); }
        if (!navSaid.has('th-first')) { navSaid.add('th-first'); nav('theurgyReady', { name: t.name }); }
        mark('th-ready'); break;
      }
      case 'theurgy': await theurgyCut(e); break;
      case 'bond': await bondCut(e); break;
      case 'bondRest': { const t = U(e.tgt); popup(e.tgt, { label: 'CATCHING BREATH', lcls: 'buff' }); log(`${t.name} is catching their breath after the bond.`); mark('bond-rest'); await sleep(420); break; }
      case 'orgia': popup(e.tgt, { label: 'ORGIA MODE', lcls: 'buff' }); paintCard(U(e.tgt)); await sleep(300); break;
      case 'orgiaEnd': popup(e.tgt, { label: 'ORGIA OFF', lcls: 'debuff' }); paintCard(U(e.tgt)); break;
      case 'tiredSkip': { const t = U(e.tgt); tip('fatigue'); popup(e.tgt, { label: 'TIRED…', lcls: 'miss' }); log(`${t.name} is too tired to move…`); mark('tired-skip'); await sleep(520); break; }
      case 'gate': { const t = U(e.tgt); paintEnemy(t); nav('gate', { el: D.elements[e.el].name }); mark('gate-found'); await sleep(300); break; }
      case 'gateShift': { const t = U(e.tgt); paintEnemy(t); popup(e.tgt, { label: 'SHIFT!', lcls: 'ail', style: '--c:#ff8cc0' }); nav('gateShift'); mark('gate-shift'); await sleep(450); break; }
      case 'shiftWeak': { const t = U(e.tgt); paintEnemy(t); popup(e.tgt, { label: 'WEAKNESS SHIFTED', lcls: 'ail', style: '--c:#ffd36b' }); nav('emperorShift'); mark('emperor-shift'); await sleep(450); break; }
      case 'composure': { const t = U(e.tgt); paintEnemy(t); popup(e.tgt, { label: 'COMPOSURE BROKEN', lcls: 'weak' }); nav('composure'); mark('composure'); await sleep(500); break; }
      case 'sermon': nav('sermon', {}, { once: true }); mark('sermon'); break;
      case 'penance': nav('penance', {}, { once: true }); mark('penance'); break;
      case 'empower': { const t = U(e.tgt); paintEnemy(t); popup(e.tgt, { label: `DRIVE ×${e.n}`, lcls: 'debuff' }); if (e.judgment || !navSaid.has('judgment')) nav('judgment', {}, { once: true }); mark('empower'); await sleep(e.judgment ? 500 : 300); break; }
      case 'drive': { const t = U(e.tgt); paintEnemy(t); popup(e.tgt, { label: 'LOST ITS DRIVE', lcls: 'weak' }); nav('drive'); sfx('down'); mark('drive-lost'); await sleep(600); break; }
      case 'hide': { const t = U(e.tgt); paintEnemy(t); popup(e.tgt, { label: 'VANISHED', lcls: 'miss' }); nav('hidden'); mark('hermit-hide'); await sleep(500); break; }
      case 'found': { const t = U(e.tgt); paintEnemy(t); fxPlay('light', e.tgt, { small: true }); popup(e.tgt, { label: 'FOUND IT!', lcls: 'buff' }); nav('found'); mark('hermit-found'); await sleep(300); break; }
      case 'flushed': { const t = U(e.tgt); paintEnemy(t); popup(e.tgt, { label: 'FLUSHED OUT!', lcls: 'buff' }); nav('flushed'); mark('hermit-flushed'); await sleep(300); break; }
      case 'wheel': await wheelCut(e); break;
      case 'frenzy': popup(e.tgt, { label: 'FRENZY!', lcls: 'debuff' }); paintEnemy(U(e.tgt)); mark('frenzy'); await sleep(400); break;
      case 'dispel': { e.tgts.forEach(id => { popup(id, { label: e.n ? 'DISPELLED' : 'NO EFFECT', lcls: e.n ? 'buff' : 'miss' }); const t = U(id); if (t.side === 'party') paintCard(t); else paintEnemy(t); }); sfx('cure'); mark('dispel-' + e.kind); await sleep(420); break; }
      case 'ail': {
        const t = U(e.tgt), d = D.ailments[e.id];
        fxPlay(e.id === 'bind' ? 'bind' : e.id, e.tgt);
        popup(e.tgt, { label: d.name.toUpperCase() + '!', lcls: 'ail', style: `--c:${d.color}` });
        tip('status');
        if (t.side === 'party') paintCard(t); else paintEnemy(t);
        sfx('ail');
        if (e.back) nav('shockBack', { name: t.name });
        else if (e.id === 'bind') nav('bind');
        else nav((t.side === 'party' ? 'ally_' : 'foe_') + e.id, { name: t.name });
        log(`${t.name} ${e.id === 'bind' ? 'is bound by the golden rope' : 'is afflicted with ' + d.name}!`);
        mark('ail'); mark('ail-' + e.id); mark((t.side === 'party' ? 'ally-ail-' : 'foe-ail-') + e.id);
        if (t.side === 'party') { const img = BT.cards.get(t.id).querySelector('.face img'); setFace(img, t.mid, member(t.mid).faces.hurt); setTimeout(() => { if (!t.dead) setFace(img, t.mid, member(t.mid).faces.idle); }, 1400); }
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
        if (e.amount > 0 || e.sp) blogAdd(`${t.name} ${e.amount > 0 ? `+${e.amount} HP` : ''}${e.amount > 0 && e.sp ? ' ' : ''}${e.sp ? `+${e.sp} SP` : ''}`, 'heal');
        if (e.amount > 0) { popup(e.tgt, { n: e.amount, cls: 'heal' + (t.side === 'party' ? ' party' : '') }); if (!(next && next.t === 'heal' && next.tgt === e.tgt)) fxPlay('heal', e.tgt); }
        if (e.sp) popup(e.tgt, { n: `+${e.sp} SP`, cls: 'sp' });
        if (t.side === 'party') paintCard(t, { hp: e.hp, sp: e.spNow != null ? e.spNow : undefined, dead: false }); else paintEnemy(t, { hp: e.hp });
        sfx('heal');
        await sleep(next && next.t === 'heal' ? 160 : 420);
        break;
      }
      case 'revive': { const t = U(e.tgt); blogAdd(`${t.name} is back up!`, 'heal'); const c = BT.cards.get(t.id); fxPlay('revive', e.tgt); c.classList.remove('dead'); setFace(c.querySelector('.face img'), t.mid, member(t.mid).faces.idle); popup(e.tgt, { label: 'REVIVED', lcls: 'buff' }); mark('revive'); await sleep(300); break; }
      case 'buff': {
        const t = U(e.tgt);
        const lv = Math.min(D.buffRules.cap, Math.abs(e.v || 0));
        blogAdd(`${t.name}: ${STAT_SHORT[e.stat]} ${e.dir > 0 ? 'up' : 'down'}${lv ? ` (${(e.v > 0 ? '▲' : '▼').repeat(lv)}${e.lasting ? ', lasting' : `, ${e.turns} turns`})` : ''}${e.capped ? ' · at the cap' : ''}`, e.dir > 0 ? 'buff' : 'debuff');
        popup(e.tgt, { label: e.capped ? `${STAT_SHORT[e.stat]} MAX` : `${STAT_SHORT[e.stat]} ${lv ? (e.v > 0 ? '▲' : '▼').repeat(lv) : '–'}`, lcls: (e.v || e.dir) > 0 ? 'buff' : 'debuff' });
        mark('buff-lv' + lv); if (e.capped) mark('buff-cap');
        fxPlay('buff', e.tgt, { dir: e.dir, stat: e.stat });
        if (t.side === 'party') paintCard(t); else paintEnemy(t);
        sfx('buff');
        await sleep(next && next.t === 'buff' ? 120 : 380);
        break;
      }
      case 'buffEnd': { const t = U(e.tgt); if (t.side === 'party') paintCard(t); else paintEnemy(t); break; }
      // ── The skill system's moves (Kat's skills and the passives)
      case 'ward': { const t = U(e.tgt); fxPlay('suzu', e.tgt); popup(e.tgt, { label: 'WARD', lcls: 'buff' }); paintCard(t); nav('ward', {}, { once: true }); sfx('cure'); mark('ward'); await sleep(next && next.t === 'ward' ? 140 : 420); break; }
      case 'wardEnd': { const t = U(e.tgt); if (t.side === 'party') paintCard(t); break; }
      case 'taunt': {
        const t = U(e.tgt);
        fxPlay('veneer', e.tgt); popup(e.tgt, { label: e.veneer ? 'PUBLIC VENEER' : 'AGGRO', lcls: 'buff' }); paintCard(t); sfx('guard');
        nav('taunt', { name: t.name }); mark('taunt'); await sleep(450);
        if (e.flank) { B.party().filter(p => !p.dead && p !== t).forEach(p => { fxPlay('flank', p.id, { small: true }); paintCard(p); }); nav('flank', { name: t.name }); mark('flank-on'); await sleep(300); }
        break;
      }
      case 'tauntEnd': { const t = U(e.tgt); B.party().forEach(p => paintCard(p)); log(`${t.name} isn’t drawing attention anymore.`); break; }
      case 'drawn': { popup(e.tgt, { label: 'DRAWN IN', lcls: 'ail', style: '--c:#ff8cc0' }); mark('drawn'); await sleep(260); break; }
      case 'kitsune': {
        e.tgts.forEach(id => fxPlay('kitsune', id));
        sfx('summon'); nav('kitsune'); mark('kitsune');
        await bigWord('KITSUNE RUSH', { sub: `${e.turns} turns · first to move · costs halved`, gold: true, ms: 950 });
        B.party().forEach(p => paintCard(p)); paintOrder();
        break;
      }
      case 'kitsuneEnd': banner('Kitsune Rush fades'); blogAdd('Kitsune Rush ends.', 'sys'); B.party().forEach(p => paintCard(p)); mark('kitsune-end'); break;
      case 'counter': { const a = U(e.src); popup(e.src, { label: 'COUNTER!', lcls: 'crit' }); nav('counter', { name: a.name }); log(`${a.name} counters!`); sfx('guard'); mark('counter'); await sleep(320); break; }
      case 'endure': { const t = U(e.tgt); popup(e.tgt, { label: 'ENDURE!', lcls: 'buff' }); nav('endure', { name: t.name }); paintCard(t); sfx('cure'); mark('endure'); await sleep(420); break; }
      case 'bluff': { const t = U(e.tgt); fxPlay('bluff', e.tgt); popup(e.tgt, { label: 'BLUFF CALLED', lcls: 'weak' }); paintEnemy(t); nav('bluff'); mark('bluff'); await sleep(480); break; }
      case 'thGain': { const t = U(e.tgt); popup(e.tgt, { n: `+${e.n} TH`, cls: 'sp' }); paintCard(t); break; }
      case 'reveal': {
        // A weakness found by hitting it: a small banner now, and the cell flips over the next time its plate shows.
        freshAff.add(e.kind + ':' + e.el);
        if (e.aff === 'weak' && !discovered.has(e.kind + ':' + e.el)) {
          discovered.add(e.kind + ':' + e.el);
          const d = document.createElement('div');
          d.className = 'bt-disc';
          d.innerHTML = `<span>${ART.icon(e.el)}<b>Weakness discovered!</b><small>${esc(D.enemies[e.kind] ? D.enemies[e.kind].name : '')} · ${esc(D.elements[e.el].name)}</small></span>`;
          BT.cut.appendChild(d); setTimeout(() => d.remove(), 1700 / Math.min(speed(), 2)); mark('weak-found');
        }
        break;
      }
      case 'onemore': {
        const u = U(e.src);
        sfx('onemore');
        if (u.side === 'party') { tip('onemore'); await bigWord('1 MORE!', { band: [u.mid, member(u.mid).faces.idle], ms: 950 }); log(`${u.name}: “${member(u.mid).lines.onemore}”`, 'say'); blogAdd(`${u.name} gets One More!`, 'pf'); mark('onemore'); }
        else { blogAdd(`${u.name} gets One More.`, 'ef'); banner('1 More', { enemy: true, sub: u.name }); await sleep(500); }
        break;
      }
      case 'alloutReady': tip('allout'); blogAdd('All foes are Down!', 'sys'); nav('allDown'); sfx('onemore'); await bigWord('ALL DOWN', { sub: 'They’re wide open', ms: 900 }); break;
      case 'allout': stat0.allout = true; await allOutSequence(e); break;
      case 'perk': await perkCut(e); break;
      case 'status': { const t = U(e.tgt); if (t) { popup(e.tgt, { label: e.label, lcls: e.cls || 'buff' }); if (t.side === 'party') paintCard(t); } blogAdd(`${t ? t.name : ''}: ${e.label}`, 'buff'); mark('status-' + String(e.label).toLowerCase().replace(/\s+/g, '-')); await sleep(300); break; }
      case 'heard': { const t = U(e.tgt); if (t) paintEnemy(t); mark('heard'); break; }
      case 'shift': {
        const a = U(e.src), b = U(e.tgt);
        sfx('summon');
        await bigWord('SHIFT', { sub: `${a.name} → ${b.name} · ×${e.boost} power`, gold: true, band: [b.mid, member(b.mid).faces.idle], ms: 900 });
        if (e.sp) popup(e.tgt, { n: `+${e.sp} SP`, cls: 'sp' });
        log(`${a.name}: “${member(a.mid).lines.shift}”`, 'say'); blogAdd(`Shift: ${a.name} → ${b.name}`, 'pf');
        nav('shift');
        mark('shift');
        break;
      }
      case 'guard': { const u = U(e.src); log(`${u.name} guards.`); paintCard(u); popup(e.src, { label: 'GUARD', lcls: 'buff' }); sfx('guard'); await sleep(360); break; }
      case 'item': { const u = U(e.src); banner(e.name, { el: 'item', sub: u.name }); log(`${u.name} used ${e.name}.`); await sleep(420); break; }
      case 'escape': if (e.ok) { blogAdd('Escaped!', 'sys'); sfx('escape'); nav('escape'); await bigWord('ESCAPED', { ms: 800 }); } else { nav('escapeFail'); log('Couldn’t escape!'); await sleep(500); } break;
      case 'telegraph': { const u = U(e.src); paintEnemy(u); BT.enemies.get(u.id).classList.add('charging'); nav(e.charge ? 'charge' : 'telegraph'); log(e.charge ? `${u.name} is powering up…` : `${u.name} is gathering moonlight…`); sfx('summon'); await sleep(900); mark('telegraph'); break; }
      case 'veil': {
        const u = U(e.tgt);
        const kn = save.known[u.kind] || (save.known[u.kind] = {}); kn[e.el] = true;
        paintEnemy(u);
        nav('veil', { el: D.elements[e.el].name });
        await sleep(350);
        break;
      }
      case 'summon': {
        nav(e.kind === 'hanged' ? 'effigies' : 'summon');
        await bigWord(e.kind === 'hanged' ? 'THE EFFIGIES' : 'CALL OF THE MIRROR', { sub: e.kind === 'hanged' ? 'Puppets hang from the halo' : 'Mirror Maidens appear', ms: 900 });
        e.ids.forEach(id => addEnemy(B.U(id)));
        sizeField();
        mark('summon-adds');
        await sleep(500);
        break;
      }
      case 'standup': { const u = U(e.tgt); if (u.side === 'enemy') { paintEnemy(u); log(`${u.name} got back up.`); await sleep(380); } else { paintCard(u); blogAdd(`${u.name} got back up.`); } break; }
      case 'msg': log(e.text, 'sys'); await sleep(e.src ? 500 : 200); break;
      case 'analyze': break;
      default: break;
    }
  }

  async function allOutSequence(e) {
    const actor = B.U(e.src);
    await stills([finishArt(actor.mid)], 600);
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
    // The brawl (P3 chibi brawl): each fighter pops in and out of the cloud at a few spots, cycling their chibi sheet's
    // action frames (data-f, cycled below) with a small jitter (CSS). Without chibi art: the pose sheet's weapon swing and
    // spell pose; without either (Ken): the darkened portrait silhouette.
    const sils = parts.map((p, i) => { const fs = brawlFrames(p.mid), ch = !!CHIBI[p.mid]; return fs
      ? [0, 1].map(k => { const j = (i + k * 2) % 4, f = (i * 2 + k * 3) % fs.length; return `<img class="sil pose${ch ? ' chibi' : ''}${(i + k) % 2 ? ' flip' : ''}" src="${fs[f]}" data-mid="${p.mid}" data-f="${f}" alt="" style="--pz:${ch ? 1 : FIGHTER_POSES[p.mid]};${ch ? '--x' : 'left'}:${[6, 66, 28, 80][j]}%;top:${[4, 0, 46, 40][j]}%;animation-delay:${(i * 0.19 + k * 0.5).toFixed(2)}s">`; }).join('')
      : `<img class="sil" src="${pimg(p.mid, member(p.mid).faces.idle)}" alt="" style="left:${[8, 64, 30, 78][i % 4]}%;top:${[2, 0, 58, 50][i % 4]}%;animation-delay:${i * 0.22}s">`; }).join('');
    const words = ['BAM!', 'POW!', 'WHAM!', 'SMASH!'].map((w, i) => `<b style="left:${[2, 70, 18, 66][i]}%;top:${[10, 6, 74, 70][i]}%;animation-delay:${0.1 + i * 0.22}s">${w}</b>`).join('');
    const stars = [0, 1, 2, 3, 4, 5].map(i => `<span class="star" style="left:${[14, 84, 48, 0, 94, 40][i]}%;top:${[78, 30, -6, 44, 74, 92][i]}%;animation-delay:${-i * 0.15}s">${ART.icon('allout')}</span>`).join('');
    // Kat's looping cloud sheet (art/fx/allout-cloud.webp, 5F) replaces the CSS puffs when it has loaded.
    const cloudArt = FX && FX.artSrc && FX.artSrc('allout-cloud');
    const cloud = cloudArt ? `<div class="cloud art" style="background-image:url('${cloudArt}')" data-f="0"></div>` : `<div class="cloud ol">${puffs}</div><div class="cloud">${puffs}</div>`;
    if (cloudArt) mark('fx-art-allout-cloud');
    wrap.innerHTML = `<div class="bt-speedlines"></div><div class="bt-dust">${cloud}${sils}${words}${stars}</div>`;
    const fr = BT.field.getBoundingClientRect(), rr = BT.root.getBoundingClientRect();
    const dust = wrap.querySelector('.bt-dust');
    dust.style.left = `${fr.left - rr.left + fr.width / 2}px`;
    dust.style.top = `${fr.top - rr.top + fr.height * 0.62}px`;
    BT.cut.appendChild(wrap);
    sfx('allout');
    shake(true);
    mark('allout-dust');
    // Frames cycle (preloaded with the field poses); reduced motion holds each figure's first frame.
    // The cloud sheet steps its six frames at the same beat (frame 1 held under reduced motion).
    const cloudEl = wrap.querySelector('.cloud.art');
    const flick = FX && FX.reduced() ? 0 : setInterval(() => {
      wrap.querySelectorAll('.sil.pose').forEach(im => { const fs = brawlFrames(im.dataset.mid), f = (+im.dataset.f + 1) % fs.length; im.dataset.f = f; im.src = fs[f]; });
      if (cloudEl) { const f = (+cloudEl.dataset.f + 1) % 6; cloudEl.dataset.f = f; cloudEl.style.backgroundPosition = `${(f % 3) * 50}% ${Math.floor(f / 3) * 100}%`; }
    }, Math.round(170 / speed()));
    await sleep(500); shake(true); await sleep(500); shake(true); await sleep(500);
    clearInterval(flick);
    wrap.innerHTML = '';
    // P3R finish card of whoever triggered it (the line is in Kat's art), wiped in full screen.
    const fin = document.createElement('div');
    fin.className = 'bt-finish card';
    fin.style.setProperty('--spd', speed());
    const card = finishArt(actor.mid);
    fin.innerHTML = `<div class="bk" style="background-image:url('${softBg(card)}')"></div><i class="wipe"></i><i class="wipe w2"></i><img src="${card}" alt="${esc(actor.name)}: All-Out Attack finish">`;
    wrap.appendChild(fin);
    flash();
    mark('allout-finish');
    await sleep(1500);
    wrap.remove();
    blogAdd(`All-Out Attack! ${e.hits.map(h => `${B.U(h.tgt).name} −${h.amount}${h.killed ? ' (defeated)' : ''}`).join(', ')}`, 'pf');
    e.hits.forEach((h, i) => setTimeout(() => {
      const t = B.U(h.tgt);
      const lands = fxPlay('strike', h.tgt, { crit: true });
      if (FX && FX.hasArt && FX.hasArt('crit')) fxPlay('crit', h.tgt, { delay: Math.max(0, lands - 140) / 1000 });
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
    BT.enemies.forEach(el => { el.classList.remove('targeted', 'targetable', 'focus'); const p = el.querySelector('.bt-plate'); if (p) p.remove(); });
    BT.cards.forEach(c => c.classList.remove('targeted', 'targetable'));
    markField(null);
  }
  /* Affinity markers on the field for the highlighted skill's element (P3R-style): a bouncing WEAK tag and a ground ring on a
     known weakness, a colored tag and a dimmed Shadow on a bad target, "?" where it's unknown. Only what the party has learned. */
  const AMK_CLS = ['amk-weak', 'amk-bad', 'amk-unk'];
  function markField(el) {
    if (!BT) return;
    const mult = Math.round(1.5 * ((B && B.S.mods && B.S.mods.weakMult) || 1) * 100) / 100;
    BT.enemies.forEach((en, id) => {
      en.classList.remove(...AMK_CLS);
      en.querySelectorAll('.bt-amk, .bt-amk-ring').forEach(x => x.remove());
      const f = el && B && B.U(id);
      if (!f || !markable(f)) return;
      const tg = affTag(f, el);
      if (!tg) return;
      const k = tg[1], cls = k === 'weak' ? 'amk-weak' : k === 'unk' ? 'amk-unk' : 'amk-bad';
      en.classList.add(cls);
      en.insertAdjacentHTML('beforeend', `<div class="bt-amk k-${k}" aria-hidden="true"><b>${tg[0]}${k === 'weak' ? `<small> ×${mult}</small>` : ''}</b></div>${k === 'weak' ? '<i class="bt-amk-ring" aria-hidden="true"></i>' : ''}`);
    });
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
  /* A slanted list in the command panel. items: { v, label, icon, right, rcls, tag: [text, cls], why, desc, off, offWhy, cls, wide }
     onKey(e, item): return a value to resolve with (e.g. the skill list's ←→ target switch). onOther(v): a click on something that
     isn't in the list (a Shadow, in the skill list); return a value to resolve with. A Rush toggle resolves any open menu with RUSH. */
  const tagHtml = t => (t ? `<em class="mk ${t[1]}">${t[0]}</em>` : '');
  function listMenu({ items, cls = '', back = false, title = '', start = 0, onSel = null, name = 'list', onKey = null, onOther = null }) {
    return new Promise(resolve => {
      BT.body.innerHTML = `${title ? `<p class="bt-hint bt-mtitle">${title}</p>` : ''}<ul class="bt-menu ${cls}">${items.map((it, i) => `<li style="--i:${i}" class="${it.wide ? 'wide' : ''}"><button type="button" class="bt-mi ${it.cls || ''}${it.off ? ' off' : ''}" data-v="${esc(it.v)}"${it.off ? ' aria-disabled="true"' : ''}>${it.iconHtml || (it.icon ? ART.icon(it.icon) : '')}<span>${esc(it.label)}</span>${it.right || it.tag || it.why ? `<span class="r ${it.rcls || ''}">${it.why ? `<em class="why">${esc(it.why)}</em>` : tagHtml(it.tag)}${it.right || ''}</span>` : ''}</button></li>`).join('')}</ul>
        <p class="bt-desc"></p>${back ? '<button type="button" class="bt-back" data-back>‹ Back</button>' : ''}<p class="bt-hint">↑↓ choose · Enter confirm${back ? ' · Esc back' : ''}</p>`;
      const ul = BT.body.querySelector('.bt-menu'), btns = [...ul.querySelectorAll('.bt-mi')], desc = BT.body.querySelector('.bt-desc');
      let i = Math.max(0, Math.min(start, items.length - 1));
      // scroll: keep the pick in view (keys, pad). A mouse hover never scrolls, so nothing moves under the pointer.
      const paint = (scroll = true) => {
        listIdx = i;
        btns.forEach((b, j) => b.classList.toggle('sel', j === i));
        desc.innerHTML = items[i].desc || '';
        const b = btns[i], li = b.parentElement;
        if (scroll && ul.scrollHeight > ul.clientHeight) { if (li.offsetTop < ul.scrollTop) ul.scrollTop = li.offsetTop - 4; else if (li.offsetTop + li.offsetHeight > ul.scrollTop + ul.clientHeight) ul.scrollTop = li.offsetTop + li.offsetHeight - ul.clientHeight + 8; }
        if (onSel) onSel(items[i]);
      };
      const done = v => { if (ctl === me) ctl = null; if (menuAbort === abort) menuAbort = null; resolve(v); };
      const abort = v => done(v);
      const grid = cls.includes('root') && phone() ? 2 : 1;
      const me = ctl = {
        kind: 'menu', grid, items,
        move(d) { i = (i + d + items.length * 4) % items.length; sfx('move'); paint(); },
        pick() { const it = items[i]; if (it.off) { sfx('back'); desc.innerHTML = `<b>Can’t</b>${esc(it.offWhy || 'Not now.')}`; return; } sfx('ok'); done(it.v); },
        back: back ? () => { sfx('back'); done(null); } : null,
        key: onKey ? e => { const v = onKey(e, items[i]); if (v === undefined) return false; done(v); return true; } : null,
        pickValue(v) { const j = items.findIndex(it => it.v === v); if (j < 0) { const r = onOther && onOther(v); if (r !== undefined) done(r); return; } i = j; paint(); this.pick(); },
        hoverValue(v) { const j = items.findIndex(it => it.v === v); if (j < 0 || j === i) return; i = j; paint(false); }
      };
      menuAbort = abort;
      btns.forEach((b, j) => {
        b.addEventListener('mousedown', ev => ev.preventDefault());
        b.addEventListener('pointerenter', () => { if (i !== j && ctl === me) { i = j; paint(false); } });
        b.addEventListener('click', () => { if (ctl === me) { i = j; paint(false); ctl.pick(); } });
      });
      const bb = BT.body.querySelector('[data-back]');
      if (bb) { bb.addEventListener('mousedown', ev => ev.preventDefault()); bb.addEventListener('click', () => { if (ctl === me && ctl.back) ctl.back(); }); }
      paint();
      mark('menu');
      mark('menu-' + name);
    });
  }

  // A skill's cost for this member right now (Kitsune Rush halves it; Double Tap makes the first one free).
  function costText(u, sk) {
    if (!sk.cost) return '';
    const c = B && B.costOf ? B.costOf(u, sk) : { sp: sk.cost.sp || 0, hp: sk.cost.hp || 0 };
    if (sk.cost.sp) return c.sp ? `${c.sp} SP` : 'FREE';
    return c.hp ? `${Math.round(u.maxHp * c.hp / 100)} HP` : 'FREE';
  }
  /* What the party knows about element el on foe f (only from Analyze or from hitting it, like P3R): a tag
     ['WEAK', 'weak'] … ['?', 'unk'], or null for a normal hit or a non-elemental skill. */
  const AFF_TAG = { weak: ['WEAK', 'weak'], resist: ['RESIST', 'resist'], null: ['NULL', 'null'], drain: ['DRAIN', 'drain'], repel: ['REPEL', 'repel'] };
  function affTag(f, el) {
    if (!f || !el || !D.elements[el] || el === 'almighty') return null;
    if (B.shieldUp(f)) return ['SHIELD', 'null'];
    if (!B.known(f.kind)[el]) return ['?', 'unk'];
    return AFF_TAG[f.aff[el] || 'normal'] || null;
  }
  /* The Shadow the skill list marks against: the one picked with ←→ (or tapped), else this member's last target, else the first. */
  const markable = f => !f.dead && !f.hidden;
  function focusFoe(u) {
    const pool = B.foes().filter(markable);
    return pool.find(f => f.id === focusId) || pool.find(f => f.id === lastTgt[u.mid]) || pool[0] || null;
  }
  function showFocus(f, el) {
    clearTargets();
    if (!f || !el) return;
    markField(el);
    const en = BT.enemies.get(f.id);
    if (en) { en.classList.add('targeted', 'focus'); en.insertAdjacentHTML('beforeend', plate(f, el)); }
  }
  function plate(u, el) {
    const k = B.known(u.kind);
    const affs = D.affinityOrder.map(x => {
      const a = k[x] ? (u.aff[x] || 'normal') : null, fresh = a && freshAff.delete(u.kind + ':' + x);
      return `<span class="bt-aff ${a ? (a === 'normal' ? '' : a) : 'unk'}${x === el ? ' cur' : ''}${fresh ? ' flip' : ''}" title="${D.elements[x].name}">${ART.icon(x)}<em>${a ? AFF_SHORT[a] : '?'}</em></span>`;
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

  /* Choose a target. spec.target: one | all | ally | allies | dead | self | shift | scan. Resolves with an id, 'all', null (back)
     or RUSH. With Remember cursor on, it opens on this member's last target if it's still there. */
  /* The finale: what can be broken and why it matters (mechanics only). */
  function reachNote(f) {
    const g = (D.enemies[f.kind] || {}).gimmick;
    if (f.unreachable) return '<br><em class="bt-reach">Out of reach: behind glass. Attacks can’t touch it.</em>';
    if (g === 'lantern') return '<br><em class="bt-reach ok">Breakable: breaking it weakens the train.</em>';
    if (g === 'train' && B.foes().some(x => !x.dead && !x.unreachable && (D.enemies[x.kind] || {}).gimmick === 'lantern')) return '<br><em class="bt-reach">Break a lit lantern to weaken it.</em>';
    return '';
  }
  function pickTarget(u, spec, title) {
    const t = spec.target;
    if (t === 'self') return Promise.resolve(u.id);
    let items = [];
    const L = letters();
    const foeItem = f => {
      const tg = affTag(f, spec.el);
      return { v: f.id, label: f.name + L[f.id], icon: null, tag: tg, desc: `<b>${esc(f.name + L[f.id])}</b>${f.down ? 'Down. ' : ''}${f.ail ? esc(D.ailments[f.ail.id].name) + '. ' : ''}HP ${Math.round(f.hp / f.maxHp * 100)}%${tg ? ` · ${esc(D.elements[spec.el].name)}: ${tagHtml(tg)}` : ''}${reachNote(f)}` };
    };
    const allyItem = p => ({ v: p.id, label: p.name, right: p.dead ? 'KO' : `${p.ail ? D.ailments[p.ail.id].name.toUpperCase() + ' · ' : ''}${p.hp}/${p.maxHp}`, rcls: 'hp', desc: `<b>${esc(p.name)}</b>${esc(p.persona)} · SP ${p.sp}/${p.maxSp}${p.ail ? ' · ' + esc(D.ailments[p.ail.id].name) : ''}` });
    const aliveFoes = B.foes().filter(f => !f.dead), party = B.party();
    const allDesc = () => aliveFoes.map(f => { const tg = affTag(f, spec.el); return `${esc(f.name + L[f.id])}${tg ? ` ${tagHtml(tg)}` : ''}`; }).join(' · ');
    if (t === 'one') items = aliveFoes.map(foeItem);
    else if (t === 'scan') items = aliveFoes.map(f => Object.assign(foeItem(f), { tag: null })).concat(party.map(p => Object.assign(allyItem(p), { right: 'Persona', rcls: '' })));
    else if (t === 'all' || t === 'rand') items = [{ v: 'all', label: t === 'rand' ? 'Random foes' : 'All foes', desc: `<b>${t === 'rand' ? 'Random foes' : 'All foes'}</b>${allDesc()}` }];
    else if (t === 'allies') items = [{ v: 'all', label: 'Whole party', desc: party.filter(p => !p.dead).map(p => p.name).join(', ') }];
    else if (t === 'ally') items = party.filter(p => !p.dead).map(allyItem);
    else if (t === 'dead') items = party.filter(p => p.dead).map(allyItem);
    else if (t === 'shift') items = party.filter(p => B.canShiftTo(p)).map(p => Object.assign(allyItem(p), { desc: `<b>${esc(p.name)}</b>takes the One More with ×${B.S.mods.shiftMult} power.` }));
    if (!items.length) return Promise.resolve(null);
    const memo = ['one', 'scan'].includes(t) ? u.mid : ['ally', 'dead'].includes(t) ? u.mid + ':ally' : null;
    const start = memo && ST().remember ? Math.max(0, items.findIndex(x => x.v === lastTgt[memo])) : 0;
    const highlight = it => {
      clearTargets();
      if (['one', 'all', 'rand'].includes(t) && ['dmg', 'insta'].includes(spec.type)) markField(spec.el);
      const set = it.v === 'all' ? (t === 'all' || t === 'rand' ? aliveFoes.map(f => f.id) : party.filter(p => !p.dead).map(p => p.id)) : [it.v];
      items.forEach(x => { const el = BT.enemies.get(x.v) || BT.cards.get(x.v); if (el) el.classList.add('targetable'); });
      set.forEach(id => {
        const en = BT.enemies.get(id), c = BT.cards.get(id);
        if (en) { en.classList.add('targeted'); en.insertAdjacentHTML('beforeend', plate(B.U(id), spec.el)); }
        if (c) c.classList.add('targeted');
      });
    };
    return listMenu({ items, back: true, cls: 'small', title: title || 'Choose a target', start, onSel: highlight, name: 'target' }).then(v => {
      clearTargets();
      if (memo && v && v !== RUSH && v !== 'all') { lastTgt[memo] = v; if (memo === u.mid) focusId = null; }
      return v;
    });
  }

  function rootItems(u) {
    const it = [];
    const canShift = B.S.oneMore && B.party().some(p => B.canShiftTo(p));
    const foe = focusFoe(u), wt = affTag(foe, u.weapon);
    if (B.canTheurgy(u)) { const T = B.theurgyDef(u); it.push({ v: 'theurgy', label: 'Theurgy', icon: 'allout', cls: 'theurgy', wide: true, right: esc(T.name), desc: `<b>${esc(T.name)}</b>${esc(T.desc)}${T.unveiled ? ' Unveiled: stronger, always knocks Down, and heals the party.' : ''}` }); }
    if (canShift) it.push({ v: 'shift', label: 'Shift', icon: 'shift', cls: 'shift', wide: true, desc: `<b>Shift</b>Pass the One More to someone who hasn’t gone yet. They hit ×${B.S.mods.shiftMult} harder.` });

    const usable = Object.keys(B.S.items).filter(k => B.S.items[k] > 0 && D.items[k].use !== 'field');
    it.push(
      { v: 'attack', label: 'Attack', icon: u.weapon, tag: wt && wt[1] !== 'unk' ? wt : null, desc: `<b>Attack</b>${D.elements[u.weapon].name} attack with your weapon (power ${u.atk}${u.whits ? `, ${u.whits[0]} hits` : ''}).${E.PHYS.has(u.weapon) ? ' Can crit.' : ''}${wt && foe ? ` vs ${esc(foe.name)}: ${tagHtml(wt)}` : ''}` },
      { v: 'skill', label: 'Skill', icon: 'skill', desc: `<b>${esc(u.persona)}</b>Use a Persona skill. Magic costs SP, physical skills cost HP.` },
      ...bondItem(u),
      { v: 'item', label: 'Item', icon: 'item', off: !usable.length, why: usable.length ? '' : 'NONE', offWhy: 'You have no items you can use in battle.', desc: '<b>Item</b>' + (usable.map(k => `${D.items[k].name} ×${B.S.items[k]}`).join(' · ') || 'Nothing usable.') },
      { v: 'guard', label: 'Guard', icon: 'guard', desc: '<b>Guard</b>Halve damage and cover your weakness until your next turn.' },
      { v: 'analyze', label: 'Analyze', icon: 'analyze', desc: '<b>Analyze</b>Fuuka scans a Shadow’s affinities and status, or check an ally’s Persona. Free action.' },
      { v: 'tactics', label: 'Tactics', icon: 'tactics', off: B.party().length < 2, why: B.party().length < 2 ? 'ALONE' : '', offWhy: 'No one else to give orders to.', desc: '<b>Tactics</b>' + (B.party().filter(p => p.mid !== 'solar').map(p => `${esc(p.name)}: ${esc(D.tactics[tacticOf(p)].short)}`).join(' · ') || 'Solar is alone.') + '. Free action.' },
      { v: 'escape', label: 'Escape', icon: 'escape', wide: true, off: B.S.boss && !B.S.reaper, why: B.S.boss && !B.S.reaper ? 'FULL MOON' : '', offWhy: 'There’s no escape from the full moon!', desc: B.S.reaper ? '<b>Escape</b>Run from the Reaper. It’s hard to get away, but it’s your best chance.' : B.S.boss ? '<b>Escape</b>There’s no escape from the full moon!' : '<b>Escape</b>Try to run. Easier when Shadows are Down.' }
    );
    // Story fights (handoff mode) can limit the commands (the prologue: Attack and Guard only) and rename them (the finale's Hold).
    const R = curSpec && curSpec.rules;
    if (R) return it.filter(x => (!R.cmds || R.cmds.includes(x.v)) && !(R.noEscape && x.v === 'escape'))
      .map(x => (R.labels && R.labels[x.v] ? Object.assign({}, x, { label: R.labels[x.v], desc: String(x.desc || '').replace(/^<b>[^<]*<\/b>/, `<b>${R.labels[x.v]}</b>`) }) : x));
    return it;
  }
  const cursorOf = u => save.cursor[u.mid] || (save.cursor[u.mid] = {});
  const startAt = (items, v) => Math.max(0, items.findIndex(x => x.v === v));
  async function commandMenu(u) {
    const cur = cursorOf(u);
    let last = ST().remember ? cur.root : null;
    for (;;) {
      showWho(u, B.S.oneMore ? '1 MORE!' : '');
      mark('command');
      const items = rootItems(u);
      if (items.some(x => x.v === 'shift')) tip('shift');
      const c = await listMenu({ items, cls: 'root', start: startAt(items, last) });
      if (c === RUSH) return RUSH;
      last = c;
      if (c !== 'theurgy' && c !== 'shift') cur.root = c;
      if (c === 'theurgy') return { type: 'theurgy' };
      if (c === 'attack') { const t = await pickTarget(u, { target: 'one', el: u.weapon }, 'Attack → choose a Shadow'); if (t === RUSH) return RUSH; if (t) return { type: 'attack', target: t }; }
      else if (c === 'skill') { const r = await skillMenu(u); if (r) return r; }
      else if (c === 'bond') { const r = await bondMenu(u); if (r === RUSH) return RUSH; if (r) return r; }
      else if (c === 'item') { const r = await itemMenu(u); if (r) return r; }
      else if (c === 'guard') return { type: 'guard' };
      else if (c === 'escape') return { type: 'escape' };
      else if (c === 'shift') { const t = await pickTarget(u, { target: 'shift' }, 'Shift → pass the turn'); if (t === RUSH) return RUSH; if (t) return { type: 'shift', to: t }; }
      else if (c === 'analyze') { const t = await pickTarget(u, { target: 'scan' }, 'Analyze → choose'); if (t === RUSH) return RUSH; if (t) { const ev = await analyzePanel(t); if (ev && ev.length) await play(ev); } }
      else if (c === 'tactics') { const r = await tacticsMenu(); if (r === RUSH) return RUSH; if (tacticOf(u) !== 'direct') return null; }
    }
  }
  /* Bond skills (bonds.js; rules in engine.js bondInfo). The root menu's Bond: shown when Solar and an unlocked partner are
     both in the party (on either one's turn), greyed with the reason when none can go right now. */
  const bondList = u => (B && B.bondsFor ? B.bondsFor(u) : []);
  function bondItem(u) {
    const list = bondList(u);
    if (!list.length) return [];
    const ok = list.filter(b => b.ok);
    return [{ v: 'bond', label: 'Bond', icon: 'bond', cls: 'bond', off: !ok.length, why: ok.length ? '' : (list.every(b => b.used) ? 'USED' : 'NOT NOW'), offWhy: list.map(b => `${b.art.name}: ${b.why}`).join(' '),
      right: ok.length ? `${ok.length}` : '', desc: `<b>Bond</b>Solar and a partner together. Both pay the SP and both use their turn; once per battle each. ${list.map(b => esc(b.art.name)).join(' · ')}` }];
  }
  async function bondMenu(u) {
    for (;;) {
      const list = bondList(u);
      if (!list.length) return null;
      const items = list.map(b => {
        const a = b.art, pm = member(a.partner);
        return { v: a.id, label: a.name, iconHtml: `<span class="bt-bondico${a.love ? ' love' : ''}" style="--c:${a.colors[1]}">${ART.icon(a.love ? 'charm' : 'bond')}</span>`, right: `${a.sp} SP ×2`, off: !b.ok, why: b.ok ? '' : b.used ? 'USED' : b.sp ? 'LOW SP' : 'NOT NOW', offWhy: b.why,
          desc: `<b>${esc(a.name)}${a.love ? ' ♥' : ''}</b>Solar & ${esc(pm.name)}. ${esc(a.desc)} <span class="vs">Both pay ${a.sp} SP; ${esc(u.mid === 'solar' ? pm.name : 'Solar')} uses up their next turn.</span>${b.ok ? '' : ` <em class="why">${esc(b.why)}</em>`}` };
      });
      const v = await listMenu({ items, back: true, cls: 'small', title: 'Bond → with whom?', name: 'bond' });
      if (v === RUSH) return RUSH;
      if (v == null) return null;
      const a = list.find(b => b.art.id === v).art;
      mark('bond-pick');
      const one = a.target === 'one' || a.steps.some(st => (st.target || a.target) === 'one');
      const t = one ? await pickTarget(u, { target: 'one', el: a.steps[0].el, type: 'dmg' }, `${a.name} → choose`) : 'all';
      if (t === RUSH) return RUSH;
      if (t != null) return { type: 'bond', bond: v, target: t };
    }
  }
  /* Tactics: pick a member, then their tactic. A free action; if the current member stops being Direct they act at once. */
  async function tacticsMenu() {
    let start = 0;
    for (;;) {
      const mates = B.party().filter(p => p.mid !== 'solar');
      if (!mates.length) return null;
      const items = mates.map(p => ({ v: p.mid, label: p.name, right: esc(D.tactics[tacticOf(p)].short), rcls: tacticOf(p) === 'direct' ? '' : 'hp', desc: `<b>${esc(p.name)}</b>${esc(D.tactics[tacticOf(p)].name)}: ${esc(D.tactics[tacticOf(p)].desc)}` }));
      const who = await listMenu({ items, back: true, cls: 'small', title: 'Tactics → who?', start, name: 'tactics' });
      if (who === RUSH) return RUSH;
      if (who == null) return null;
      start = items.findIndex(x => x.v === who);
      const cur = save.tactics[who] || 'direct';
      const titems = TACTIC_ORDER.map(k => ({ v: k, label: D.tactics[k].name, icon: 'tactics', right: k === cur ? '✓' : '', desc: `<b>${esc(D.tactics[k].name)}</b>${esc(D.tactics[k].desc)}` }));
      const pickT = await listMenu({ items: titems, back: true, cls: 'small', title: `${esc(member(who).name)} → tactic`, start: TACTIC_ORDER.indexOf(cur), name: 'tactic' });
      if (pickT === RUSH) return RUSH;
      if (pickT) {
        if (pickT === 'direct') delete save.tactics[who]; else save.tactics[who] = pickT;
        persist();
        B.party().forEach(p => paintCard(p));
        nav('tactics');
        log(`${member(who).name}: ${D.tactics[pickT].name}.`, 'sys');
        mark('tactic-set'); mark('tactic-' + pickT);
      }
    }
  }
  /* Skills, each marked against the selected Shadow with what the party knows (WEAK / RESIST / NULL / DRAIN / REPEL / ?).
     ←→ (or LB/RB, or tapping a Shadow) changes which Shadow; its affinity plate shows the highlighted skill's element. */
  async function skillMenu(u) {
    const cur = cursorOf(u);
    let last = ST().remember ? cur.skill : null;
    for (;;) {
      const deadCount = B.party().filter(p => p.dead).length, foe = focusFoe(u), foes = B.foes().filter(markable), L = letters();
      const items = u.skills.map(id => {
        const sk = D.skills[id], once = !!(sk.once && B.usedOnce(u, id)), pay = B.canPay(u, sk), noDead = sk.target === 'dead' && !deadCount;
        const hostile = ['one', 'all', 'rand'].includes(sk.target) && ['dmg', 'insta'].includes(sk.type);
        const tg = hostile ? affTag(foe, sk.el) : null, need = sk.cost && sk.cost.hp ? 'HP' : 'SP';
        const offWhy = once ? 'Once per battle, and it’s been used.' : noDead ? 'No one needs reviving.' : !pay ? `Not enough ${need}: it costs ${costText(u, sk)} and ${u.name} has ${need === 'HP' ? u.hp : u.sp}.` : '';
        return { v: id, label: sk.name, icon: sk.el, iconHtml: sk.icon ? skIcon(id) : null, tag: tg, right: costText(u, sk), rcls: sk.cost && sk.cost.hp ? 'hp' : '', off: once || !pay || noDead, why: once ? 'USED' : noDead ? 'NO KO' : !pay ? `LOW ${need}` : '', offWhy, el: hostile ? sk.el : null,
          desc: `<b>${esc(sk.name)}</b>${esc(sk.desc)}${tg && foe ? ` <span class="vs">vs ${esc(foe.name + L[foe.id])}: ${tagHtml(tg)}</span>` : ''}${offWhy ? ` <em class="why">${esc(offWhy)}</em>` : ''}` };
      });
      const title = `${esc(u.persona)} · SP ${u.sp}/${u.maxSp}${foe ? ` <span class="vs">vs <b>${esc(foe.name + L[foe.id])}</b>${foes.length > 1 ? ' <i>‹ ›</i>' : ''}</span>` : ''}`;
      const s = await listMenu({
        items, back: true, cls: 'small scroll', title, start: startAt(items, last), name: 'skill',
        onSel: it => showFocus(foe, it.el),
        onKey: e => {
          if ((e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') || foes.length < 2) return undefined;
          const j = foes.indexOf(foe);
          return { focus: foes[(j + (e.key === 'ArrowLeft' ? -1 : 1) + foes.length) % foes.length].id };
        },
        onOther: v => (foes.some(f => f.id === v) ? { focus: v } : undefined)
      });
      clearTargets();
      if (s === RUSH) return RUSH;
      if (s && s.focus) { focusId = s.focus; last = items[listIdx] && items[listIdx].v; sfx('move'); mark('skill-focus'); continue; }
      if (s == null) return null;
      last = s; cur.skill = s;
      const sk = D.skills[s];
      const t = await pickTarget(u, sk, `${sk.name} → choose`);
      if (t === RUSH) return RUSH;
      if (t != null) return { type: 'skill', skill: s, target: t };
    }
  }
  async function itemMenu(u) {
    const cur = cursorOf(u);
    let last = ST().remember ? cur.item : null;
    for (;;) {
      const deadCount = B.party().filter(p => p.dead).length;
      const items = Object.keys(D.items).filter(id => D.items[id].use !== 'field' && (B.S.items[id] > 0 || D.startItems[id] != null)).map(id => {
        const it = D.items[id], n = B.S.items[id] || 0, noDead = it.target === 'dead' && !deadCount;
        return { v: id, label: it.name, icon: 'item', right: `×${n}`, off: !n || noDead, why: !n ? 'NONE' : noDead ? 'NO KO' : '', offWhy: !n ? 'None left.' : 'No one needs reviving.', desc: `<b>${esc(it.name)}</b>${esc(it.desc)}${!n ? ' <em class="why">None left.</em>' : noDead ? ' <em class="why">No one needs reviving.</em>' : ''}` };
      });
      if (!items.length) return null;
      const v = await listMenu({ items, back: true, cls: 'small scroll', title: 'Items', start: startAt(items, last), name: 'items' });
      if (v === RUSH) return RUSH;
      if (v == null) return null;
      last = v; cur.item = v;
      const tt = D.items[v].target;
      const t = await pickTarget(u, { target: tt === 'foes' ? 'all' : tt }, `${D.items[v].name} → choose`);
      if (t === RUSH) return RUSH;
      if (t != null) return { type: 'item', item: v, target: t };
    }
  }
  function statusLine(u, immune) {
    const a = u.ail && D.ailments[u.ail.id];
    return `<div class="bt-status">${a ? `<span class="bt-tag ail" style="--c:${a.color}">${stIco(u.ail.id)}<span>${esc(a.name)}</span><em>${u.ail.t}</em></span><p>${esc(a.desc)} ${u.ail.t} turn${u.ail.t === 1 ? '' : 's'} left.</p>` : '<p><b>Status</b> No ailments.</p>'}${immune && immune.length ? `<p class="imm">Immune to ${immune.map(x => esc(D.ailments[x].name)).join(', ')}.</p>` : ''}</div>`;
  }
  function analyzePanel(id) {
    const u = B.U(id);
    return new Promise(res => {
      let html;
      let evs = [];
      if (u.side === 'enemy') {
        evs = B.analyze(id);
        blogAdd(`Fuuka analyzed ${u.name}.`, 'sys');
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
        const per = D.personas[u.personaId];
        mark('persona-view');
        html = `<div class="bt-pv"><img src="${per.art}" alt=""><div>
          <h2><small>Persona · ${esc(per.arcana)} · ${esc(u.name)}</small>${esc(per.name)}</h2>
          <div class="bt-affs">${D.affinityOrder.map(x => { const a = per.aff[x] || 'normal'; return `<span class="bt-aff ${a === 'normal' ? '' : a}">${ART.icon(x)}<em>${AFF_SHORT[a]}</em>${D.elements[x].name}</span>`; }).join('')}</div>
          <ul class="bt-chips">${u.skills.map(s => `<li>${skIcon(s)}<span>${esc(D.skills[s].name)}</span></li>`).join('')}</ul>
          <p class="note">${esc(per.blurb || '')}</p>
          ${statusLine(u)}
          <p class="note">St ${u.st} · Ma ${u.ma} · En ${u.en} · Ag ${u.ag} · Lu ${u.lu}</p></div></div>`;
      }
      const p = document.createElement('div');
      p.className = 'bt-panel';
      p.innerHTML = `<div class="bt-card-lg">${html}<div class="bt-actbar"><button type="button" class="bt-btn pink"><span>Close</span></button></div></div>`;
      BT.root.appendChild(p);
      const close = () => { p.remove(); res(evs); };
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
      p.innerHTML = `<div class="bt-prompt-inner"><div class="bt-faces">${parts.map(x => `<div class="fcb">${fimg(x.mid, member(x.mid).faces.idle)}</div>`).join('')}</div>
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
      rushGuard();
      let tac = tacticOf(u), action = null;
      if (tac === 'direct' && !rushActive()) {
        if (!said) { log(`${u.name}: “${member(u.mid).lines.turn}”`, 'say'); said = true; }
        action = await commandMenu(u);
        hideMenu();
        if (action === RUSH) action = null;
        tac = tacticOf(u);
      }
      if (!action && rushActive()) {
        // Rush: everyone (Solar too) follows their Tactic, or just attacks.
        action = rushAction(u);
        showWho(u, tac === 'direct' ? 'Rush' : `Rush · ${D.tactics[tac].short}`);
        BT.body.innerHTML = '';
        await sleep(160);
        hideMenu();
        mark('rush-act'); mark('rush-act-' + u.mid);
      } else if (!action) {
        // Tactics: the member acts on their own.
        action = B.autoAction(u, tac === 'direct' ? 'free' : tac);
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
        const go = rushActive() ? true : await alloutPrompt(u);
        if (go) { await play(B.allOut()); return; }
        await play(B.declineAllOut());
      }
      if (B.S.shifted) { B.S.shifted = false; u = B.S.cur; log(`${u.name}: “${member(u.mid).lines.turn}”`, 'say'); continue; }
      if (B.S.oneMore && B.S.cur === u && !u.dead) continue;
      return;
    }
  }

  async function intro(floor, group) {
    const el = document.createElement('div');
    if (floor.reaper) {
      el.className = 'bt-moon reaper';
      el.innerHTML = `<div><p>${esc(floor.label)} · something followed you</p><h2>THE REAPER</h2></div>`;
      el.style.animationDuration = `${2600 / speed()}ms`;
      BT.root.appendChild(el);
      sfx('ko');
      await sleep(2200);
    } else if (floor.boss) {
      el.className = 'bt-moon';
      const bosses = [...new Set(group)].map(k => D.enemies[k]).filter(d => d.boss);
      const op = floor.op;
      el.innerHTML = `<div><p>Full moon · ${esc(op ? op.arcana : bosses[0].arcana)}</p><h2>${esc((op ? op.name : bosses.map(d => d.name).join(' & ')).toUpperCase())}</h2><small>${esc(floor.block)}</small></div>`;
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
    const tp = TP(), fx = treeFx(), share = tp.dugout ? tp.dugout.v : D.progression.benchShare; // Junpei's Dugout: 80%
    const rows = D.party.filter(usable).map(m => {
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
    if (HS) rows.forEach(r => { if (r.inP && r.got) HS.exp[r.m.id] = (HS.exp[r.m.id] || 0) + r.got; });
    return { rows, ups, any: rows.some(r => r.ups), pts: ups * D.progression.pointsPerLevel };
  }
  /* Results: EXP and level-ups, yen and drops, fatigue. Loops through the tree / party / equipment screens until Continue. */
  async function results(o) {
    const g = gainExp(o.rew.exp);
    persist();
    if (g.any) mark('levelup');
    let first = true;
    for (;;) {
      const go = await resultsScreen(o, g, first);
      first = false;
      if (go === 'tree') { await new Promise(r => treeScreen(r)); continue; }
      if (go === 'party') { await new Promise(r => partyScreen(r)); continue; }
      if (go === 'equip') { await new Promise(r => equipScreen(r)); continue; }
      if (go === 'menu') { await fieldMenu('party'); continue; }
      return go;
    }
  }
  function resultsScreen(o, g, first) {
    screen = 'results';
    root.classList.remove('bt-in-battle');
    music.play('floor');
    if (first && g.any) setTimeout(() => sfx('level'), 500);
    return new Promise(res => {
      const rows = g.rows.filter(r => r.inP).map((r, i) => {
        const m = r.m, b = r.before.stats, a = r.after, pct = Math.round(r.exp / need(r.lvl) * 100);
        const gains = r.ups ? ['hp', 'sp', 'st', 'ma', 'en', 'ag', 'lu'].filter(k => a[k] > b[k]).map(k => `<span>${k.toUpperCase()} <b>+${a[k] - b[k]}</b></span>`).join('') : '';
        const learned = r.ups ? E.skillsFor(m.id, save, r.lvl).filter(x => !E.skillsFor(m.id, save, r.before.lvl).includes(x) && !((save.forgot || {})[m.id] || []).includes(E.rootOf(x))) : [];
        const tired = run && run.tired && run.tired[m.id];
        return `<div class="bt-res-row${tired ? ' tired' : ''}" style="animation-delay:${0.15 + i * 0.08}s"><div class="pic fcb">${fimg(m.id, tired ? m.faces.ko : m.faces.win)}</div>
          <div><b>${esc(m.name)}<small>Lv ${r.lvl}</small></b>${r.ups ? '<span class="bt-lvup">LEVEL UP!</span>' : ''}${(o.nowTired || []).includes(m.id) ? '<span class="bt-tiredtag">TIRED</span>' : ''}
          <div class="bt-expbar"><i style="width:${pct}%"></i></div>${gains ? `<div class="bt-gains">${gains}</div>` : ''}${learned.length ? `<div class="bt-gains learn">Learned ${learned.map(x => `<b>${esc(D.skills[x].name)}</b>`).join(', ')}</div>` : ''}</div></div>`;
      }).join('') + (g.rows.some(r => !r.inP) ? `<div class="bt-bench"><small>Bench · +${g.rows.find(r => !r.inP).got} EXP</small>${g.rows.filter(r => !r.inP).map(r => `<span${r.ups ? ' class="up"' : ''}><i class="av fcb">${fimg(r.m.id, r.m.faces.idle)}</i>${esc(r.m.name)} <b>Lv ${r.lvl}${r.ups ? ' ↑' : ''}</b></span>`).join('')}</div>` : '');
      const extra = [];
      if (o.rew.yen) extra.push(`<span class="yen">${ICON.svg('yen')}+${yen(o.rew.yen)}</span>`);
      Object.entries(o.rew.drops || {}).forEach(([k, n]) => extra.push(`<span class="drop">${ICON.of(k)}${esc(D.materials[k].name)}${n > 1 ? ` ×${n}` : ''}</span>`));
      if (g.pts) extra.push(`<span class="pts">+${g.pts} Skill Points</span>`);
      if (o.bonus) extra.push(`<span class="pts">+${o.bonus} Full-moon bonus</span>`);
      if (o.op && o.first) extra.push(`<span class="pts">Shops restocked · tier ${shopTier()}</span>`);
      if (o.shuffle) { const rc = o.shuffle.res.fx.card && ICON && ICON.revCard ? ICON.revCard(o.shuffle.res.fx.card, { cls: 'bt-res-card' }) : '';
        extra.push(`<span class="shuf${o.shuffle.res.penalty ? ' pen' : ''}${rc ? ' has-card' : ''}">${rc}<em>Shuffle Time · ${esc(o.shuffle.card.name)}: ${esc(o.shuffle.res.lines.join(', '))}</em></span>`); }
      (o.notes || []).forEach(n => extra.push(`<span class="perk">${esc(n)}</span>`));
      const el = show(`<div class="bt-res"><div>
          <h1 class="bt-res-title"><small>${esc(o.title)}</small>RESULTS</h1>
          <div class="bt-res-exp"><small>EXP</small>+${o.rew.exp}</div>
          <div class="bt-res-extra" style="margin-top:18px">${extra.join('')}</div>
          <div class="bt-res-btns">
            <button type="button" class="bt-btn pink" data-go="next"><span>${esc(o.back || 'Continue')}</span></button>
            <button type="button" class="bt-btn" data-go="tree"><span>${BR ? 'Skills' : 'Haenim’s Tree'}</span><small>${save.pts} SP</small></button>
            ${BR ? '<button type="button" class="bt-btn" data-go="menu"><span>Menu</span><small>Party · Equipment</small></button>' : `<button type="button" class="bt-btn" data-go="party"><span>Party</span><small>${save.party.length + 1} / 4</small></button>
            <button type="button" class="bt-btn" data-go="equip"><span>Equip</span></button>`}
          </div></div>
        <div class="bt-res-list">${rows}</div></div>`, 'bt-results');
      el.querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', () => { sfx('ok'); res(b.dataset.go); }));
      buttonNav(el, { start: save.pts > 0 && first && g.pts ? 1 : 0 });
      mark('results');
    });
  }

  /* ════════════════════════════════════════════════════
     HAENIM'S SKILL TREE
     Story fights: the field menu's Skills tab (menu.js) is the sun. Practice mode keeps this screen: the same sun (sun.js draws
     it), the same rules (engine.js treeState / treeBuy), a free Refund all, and the party trees left to the story.
     ════════════════════════════════════════════════════ */
  function treeScreen(onClose) {
    if (BR) { fieldMenu('skills').then(() => { save = loadSaveFromBridge() || save; onClose(); }); return; }
    screen = 'tree';
    root.classList.remove('bt-in-battle');
    if (onClose === hub) music.play('title'); else music.play('floor');
    const SUN = window.FemcSun, all = E.treeNodes();
    let cur = null, just = null, formBusy = false;
    const frags = () => E.fragSet(save);
    const st = n => E.treeState(save, n.id, frags());
    // Start on the first node you can buy.
    cur = (all.find(n => st(n) === 'avail') || all[0]).id;
    const label = n => (st(n) === 'hidden' ? '? ? ?' : n.name);
    const rayOf = n => (n.center ? { name: 'Unveiled', world: 'The crown' } : SUN.groupOf(n.id) || {});
    const render = () => {
      screen = 'tree';
      const fx = treeFx();
      const node = E.treeNode(cur), s0 = st(node), afford = save.pts >= node.cost, why = E.treeWhy(save, node.id, frags()), ray = rayOf(node);
      const btn = s0 === 'own' ? 'Unlocked' : s0 === 'avail' ? (afford ? `Unlock · ${node.cost} SP` : `Need ${node.cost} SP`) : s0 === 'taken' ? 'Not chosen' : s0 === 'hidden' ? 'A memory first' : 'Locked';
      const el = show(`${ART.defs()}<img class="bt-tree-art" src="${D.personas.haenim.art}" alt="">
        <div class="bt-tree-head"><button type="button" class="bt-tool" data-act="back"><span>‹ Back</span></button>
          <h1>HAENIM<small>해님 · Fool</small></h1>
          <div class="bt-pts"><span><small>Skill Points</small>${save.pts}</span></div></div>
        <div class="bt-sun sun-vp">${SUN.html({ state: id => E.treeState(save, id, frags()), sel: cur, base: 'bt-sn' })}</div>
        <div class="bt-tree-foot"><div><h3>${esc(label(node))}<small>${esc(ray.name || '')} · ${esc(ray.world || '')} · ${node.cost} SP${node.choice ? ' · choose one' : ''}${node.memory ? ' · memory' : ''}${node.keystone ? ' · keystone' : ''}</small></h3><p>${s0 === 'hidden' ? '' : esc(node.desc)}${why ? ` <em>${esc(why)}</em>` : ''}</p></div>
          <div class="btns"><button type="button" class="bt-btn pink" data-act="buy"${s0 !== 'avail' || !afford ? ' disabled' : ''}><span>${btn}</span></button>
          <button type="button" class="bt-btn" data-act="refund"${E.treeSpent(save) ? '' : ' disabled'}><span>Refund all</span><small>Practice: free</small></button></div>
          <ul class="bt-chips bt-tree-skills"><li class="lbl"><span>Haenim knows</span></li>${solarSkills(fx).map(id => `<li>${skIcon(id)}<span>${esc(D.skills[id].name)}</span></li>`).join('')}</ul></div>`, 'bt-tree');
      SUN.mount(el.querySelector('.bt-sun'), cur);
      el.querySelectorAll('[data-hn]').forEach(b => {
        b.addEventListener('click', () => {
          const id = b.dataset.hn;
          if (id === cur) buy(); else { cur = id; sfx('move'); just = null; render(); }
        });
      });
      el.querySelector('[data-act="back"]').addEventListener('click', close);
      el.querySelector('[data-act="buy"]').addEventListener('click', buy);
      el.querySelector('[data-act="refund"]').addEventListener('click', () => { E.treeRespec(save); persist(); sfx('back'); just = null; mark('tree-refund'); render(); });
      ctl = {
        kind: 'tree',
        key(e) {
          if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) return false;
          const nx = SUN.move(cur, e.key);
          if (nx !== cur) { cur = nx; sfx('move'); just = null; render(); }
          return true;
        },
        move() {}, pick: buy, back: close
      };
      if (just) el.querySelector(`[data-hn="${just}"]`)?.classList.add('just');
      mark('tree');
    };
    function buy() {
      if (formBusy) return;
      const n = E.treeNode(cur);
      const r = E.treeBuy(save, n.id, frags());
      if (!r.ok) { sfx('back'); return; }
      persist();
      sfx('unlock');
      just = n.id;
      mark('tree-buy');
      render();
      (async () => {
        formBusy = true; ctl = null;
        await resolvePending(['solar']);
        if (r.form) await formUnlocked(r.form);
        for (const f of checkForms()) await formUnlocked(f);
        formBusy = false; render();
      })();
    }
    function close() { if (formBusy) return; sfx('back'); ctl = null; onClose(); }
    render();
  }
  // The story's battle save after the field menu closed (it may have changed in the life sim).
  const loadSaveFromBridge = () => { try { return fromRaw(BR.battleSave()); } catch (e) { return null; } };

  /* ── Eight slots: the "forget which?" choice (P3). A member who has learned a ninth skill picks one to forget; picking the new
     one means not learning it. A forgotten skill's line never comes back on its own. ── */
  const pendingOf = mid => { try { return E.kitFor(mid, save).pending; } catch (e) { return []; } };
  function forgetScreen(mid) {
    return new Promise(resolve => {
      const m = member(mid), kit = E.kitFor(mid, save), fresh = kit.pending[0];
      if (!fresh) { resolve(null); return; }
      const list = kit.slots.concat([fresh]);
      let armed = null;
      const prevScreen = screen;
      screen = 'forget';
      const render = () => {
        const el = show(`<div class="bt-forget"><p class="bt-kicker">${esc(m.name)} · ${esc(perOf(mid).name)} · ${D.skillSlots} skill slots</p>
          <h1>FORGET A SKILL?</h1>
          <p class="bt-forget-lead">${esc(m.name)} wants to learn <b>${esc(D.skills[fresh].name)}</b>, but ${esc(perOf(mid).name)} already holds ${D.skillSlots}. Choose one to forget. A forgotten skill won’t come back by itself.</p>
          <ul class="bt-forget-list">${list.map((id, j) => { const sk = D.skills[id]; return `<li><button type="button" class="bt-btn bt-forget-b${id === fresh ? ' new' : ''}${armed === id ? ' armed' : ''}" data-f="${id}"><span>${skIcon(id)}${esc(sk.name)}${id === fresh ? ' <em>NEW</em>' : ''}</span><small>${armed === id ? (id === fresh ? 'Press again: don’t learn it' : 'Press again to forget it') : esc(sk.desc || '')}</small></button></li>`; }).join('')}</ul></div>`, 'bt-tree bt-forgetscr');
        el.querySelectorAll('[data-f]').forEach(b => b.addEventListener('click', () => {
          const id = b.dataset.f;
          if (armed !== id) { armed = id; sfx('move'); render(); ctlFocus(`[data-f="${id}"]`); return; }
          E.forgetSkill(save, mid, id); persist(); sfx('back'); mark('forget'); mark('forget-' + id);
          blogAdd(`${m.name} forgot ${D.skills[id].name}.`, 'sys');
          screen = prevScreen; resolve(id);
        }));
        buttonNav(el, { start: Math.max(0, list.indexOf(armed || fresh)) });
        mark('forget-screen');
      };
      render();
    });
  }
  let resolving = false;
  async function resolvePending(ids = D.party.filter(usable).map(m => m.id)) {
    if (resolving) return;
    resolving = true;
    try { for (const id of ids) { let guard = 0; while (pendingOf(id).length && guard++ < 12) await forgetScreen(id); } } finally { resolving = false; }
  }

  /* ════════════════════════════════════════════════════
     PERSONA VIEW (with Haenim's forms and the evolutions)
     ════════════════════════════════════════════════════ */
  const userName = id => (member(id) || {}).name || (id ? id[0].toUpperCase() + id.slice(1) : '');
  const affRow = aff => `<div class="bt-affs">${D.affinityOrder.map(x => { const a = aff[x] || 'normal'; return `<span class="bt-aff ${a === 'normal' ? '' : a}">${ART.icon(x)}<em>${AFF_SHORT[a]}</em>${D.elements[x].name}</span>`; }).join('')}</div>`;
  const formLock = f => {
    const u = D.personas[f].unlock || {};
    if (u.node === 'unveiled') return 'All three keystones and a full moon cleared';
    const b = D.tree.find(x => x.nodes.some(n => n.id === u.node));
    return b ? `The ${b.name} ray’s keystone (${b.world})` : '';
  };
  function personaScreen(onClose, start = 0) {
    if (BR) { fieldMenu('personas').then(onClose); return; }
    screen = 'personas';
    root.classList.remove('bt-in-battle');
    // One page per user: Haenim first, then S.E.E.S., then Fuuka's navigator.
    const list = Object.entries(D.personas).filter(([, p]) => !p.form && !Object.values(D.personas).some(q => q.evolves && D.personas[q.evolves] === p) && !(member(p.user) && !usable(member(p.user))));
    let i = Math.min(start, list.length - 1), fi = Math.max(0, ['haenim'].concat(E.formsList()).indexOf(save.form));
    const forms = ['haenim'].concat(E.formsList());
    const render = () => {
      screen = 'personas';
      const [id, base] = list[i];
      const evolved = base.evolves && save.evo[base.user];
      const p = id === 'haenim' ? perOf('solar') : evolved ? D.personas[base.evolves] : base;
      const ev = base.evolves && D.personas[base.evolves];
      const inParty = roster().some(m => m.persona === id) || id === 'haenim';
      const skills = member(base.user) ? (base.user === 'solar' ? solarSkills() : E.kitFor(base.user, save).slots) : [];
      const evoWhen = base.evolve ? (base.evolve.lvl ? `at Lv ${base.evolve.lvl}` : `after ${D.ops.find(o => o.id === base.evolve.op).name}`) : '';
      const formsHtml = id === 'haenim' ? `<div class="bt-forms"><p class="bt-forms-h">Forms <em>Prototype preview</em><span>In the full game these are route endings. Here, a keystone on Haenim’s tree unlocks one.</span></p>
        <div class="bt-forms-row">${forms.map((f, j) => {
          const fp = D.personas[f], ok = E.formUnlocked(save, f), on = (save.form || 'haenim') === f;
          return `<button type="button" class="bt-form${ok ? '' : ' lock'}${on ? ' on' : ''}${j === fi ? ' sel' : ''}" data-form="${f}" style="--c:${fp.color || '#ff4f9e'}"><img src="${fp.art}" alt=""><b>${esc(fp.name)}</b><small>${ok ? esc(fp.theme || 'Base form') : esc(formLock(f))}</small>${on ? '<i>IN USE</i>' : ''}</button>`;
        }).join('')}</div></div>` : '';
      const el = show(`<div class="bt-tree-head"><button type="button" class="bt-tool" data-act="back"><span>‹ Back</span></button><h1>PERSONAS<small>${i + 1} / ${list.length}</small></h1></div>
        <div class="bt-pview${id === 'haenim' ? ' haenim' : ''}">
          <div class="bt-pv-art"><img src="${p.art}" alt="${esc(p.name)}"></div>
          <div class="bt-card-lg"><h2><small>${esc(p.arcana)} · ${esc(userName(p.user))}${inParty ? ' · in the party' : ''}</small>${esc(p.name)}${p.ko ? ` <span style="color:var(--gold);font-size:.6em">${esc(p.ko)}</span>` : ''}</h2>
            ${affRow(p.aff)}
            ${skills.length ? `<ul class="bt-chips">${skills.map(s => `<li>${skIcon(s)}<span>${esc(D.skills[s].name)}</span></li>`).join('')}</ul>` : ''}
            <p class="note">${esc(p.blurb || '')}</p>
            ${p.lean ? `<p class="note">Stat lean: ${Object.entries(p.lean).map(([k, v]) => `${k.toUpperCase()} +${v}`).join(' · ')}${p.sig ? ` · Signature: <b>${esc(D.skills[p.sig].name)}</b>` : ''}</p>` : ''}
            ${ev && !evolved ? `<div class="bt-evo"><img src="${ev.art}" alt=""><p><b>Evolves into ${esc(ev.name)} ${esc(evoWhen)}</b>${esc(ev.blurb || '')}</p></div>` : ''}
            ${evolved ? `<div class="bt-evo done"><img src="${base.art}" alt=""><p><b>Evolved from ${esc(base.name)}</b>${p.bonus ? Object.entries(p.bonus).map(([k, v]) => `${k.toUpperCase()} +${v}`).join(' · ') : ''}</p></div>` : ''}
            ${formsHtml}
            <div class="bt-res-btns"><button type="button" class="bt-btn" data-act="prev"><span>‹ Prev</span></button><button type="button" class="bt-btn pink" data-act="next"><span>Next ›</span></button>${id === 'haenim' ? '<button type="button" class="bt-btn" data-act="awaken"><span>Replay awakening</span></button>' : ''}${evolved ? '<button type="button" class="bt-btn" data-act="evo"><span>Replay evolution</span></button>' : ''}</div>
          </div></div>`, 'bt-tree bt-personas');
      el.querySelector('[data-act="back"]').addEventListener('click', close);
      el.querySelector('[data-act="prev"]').addEventListener('click', () => step(-1));
      el.querySelector('[data-act="next"]').addEventListener('click', () => step(1));
      el.querySelectorAll('[data-form]').forEach(b => b.addEventListener('click', () => { fi = forms.indexOf(b.dataset.form); pickForm(); }));
      const aw = el.querySelector('[data-act="awaken"]');
      if (aw) aw.addEventListener('click', async () => { sfx('ok'); if (FX) FX.setSpeed(speed); await awakening(el); render(); });
      const evb = el.querySelector('[data-act="evo"]');
      if (evb) evb.addEventListener('click', async () => { sfx('ok'); await evolution({ mid: base.user, from: id, to: base.evolves }); render(); });
      ctl = {
        kind: 'personas',
        key(e) {
          if (id !== 'haenim') return false;
          if (e.key === 'ArrowUp' || e.key === 'ArrowDown') { fi = (fi + (e.key === 'ArrowUp' ? -1 : 1) + forms.length) % forms.length; sfx('move'); render(); return true; }
          return false;
        },
        move: d => step(d), pick: () => (id === 'haenim' ? pickForm() : step(1)), back: close
      };
      mark('personas');
      if (id === 'haenim') mark('personas-forms');
    };
    function pickForm() {
      const f = forms[fi];
      if (!E.formUnlocked(save, f)) { sfx('back'); render(); return; }
      save.form = f; persist(); sfx('unlock'); mark('form-' + f); render();
    }
    const step = d => { i = (i + d + list.length) % list.length; sfx('move'); render(); };
    function close() { sfx('back'); ctl = null; onClose(); }
    render();
  }

  /* The evolution moment: the old Persona, a light burst, the new one, and its name. */
  function evolution(e) {
    const from = D.personas[e.from], to = D.personas[e.to], who = userName(e.mid);
    const prevScreen = screen, prevCtl = ctl;
    ctl = null;
    return new Promise(async resolve => {
      await stills([from.art, to.art], 1500);
      screen = 'evolution';
      root.classList.remove('bt-in-battle');
      const before = Object.assign({}, save, { evo: Object.assign({}, save.evo, { [e.mid]: false }) });
      const learned = member(e.mid) ? E.skillsFor(e.mid, save).filter(x => !E.skillsFor(e.mid, before).includes(x)) : [];
      const affs = D.affinityOrder.filter(x => (to.aff[x] || 'normal') !== (from.aff[x] || 'normal')).map(x => `${D.elements[x].name}: ${AFF_SHORT[from.aff[x] || 'normal']} → ${AFF_SHORT[to.aff[x] || 'normal']}`);
      const gains = [].concat(to.bonus ? Object.entries(to.bonus).map(([k, v]) => `${k.toUpperCase()} +${v}`) : [], affs, learned.map(x => `Learned ${D.skills[x].name}`), e.mid === 'fuuka' ? ['Fuuka’s scan now maps a whole floor'] : []);
      const el = show(`<div class="bt-evx-rays"></div><div class="bt-evx-glow"></div>
        <img class="bt-evx-old" src="${from.art}" alt=""><img class="bt-evx-new" src="${to.art}" alt=""><div class="bt-evx-burst"></div>
        <div class="bt-evx-txt"><p class="bt-kicker">${esc(who)} · Persona evolution</p><h1>${esc(to.name.toUpperCase())}</h1>
          <p class="sub">${esc(from.name)} evolved into ${esc(to.name)}!</p>
          ${gains.length ? `<ul class="bt-chips">${gains.map(g => `<li><span>${esc(g)}</span></li>`).join('')}</ul>` : ''}
          <div class="row"><button type="button" class="bt-btn pink"><span>Continue</span></button></div></div>
        <button type="button" class="bt-tool bt-evx-skip"><span>Skip ›</span></button>`, 'bt-evx');
      el.style.setProperty('--spd', speed());
      sfx('summon');
      mark('evolution'); mark('evolution-' + e.to);
      tip('evolutions');
      const tm = [setTimeout(() => { sfx('evoker'); flash2(el); mark('evolution-burst'); }, 2100 / speed()), setTimeout(() => { sfx('unlock'); el.classList.add('named'); mark('evolution-named'); }, 2700 / speed())];
      const done = () => { tm.forEach(clearTimeout); ctl = prevCtl; screen = prevScreen; resolve(); };
      el.querySelector('.bt-evx-txt .bt-btn').addEventListener('click', () => { sfx('ok'); done(); });
      el.querySelector('.bt-evx-skip').addEventListener('click', () => { sfx('back'); done(); });
      ctl = { kind: 'cinematic', move() {}, pick: () => { sfx('ok'); done(); }, back: () => { sfx('back'); done(); } };
    });
  }
  function flash2(host) { const f = document.createElement('div'); f.className = 'bt-flash go'; host.appendChild(f); setTimeout(() => f.remove(), 500); }
  /* A new Haenim form was earned. */
  function formUnlocked(f) {
    const p = D.personas[f];
    ctl = null;
    return new Promise(async resolve => {
      await stills([p.art], 1200);
      screen = 'form-unlock';
      root.classList.remove('bt-in-battle');
      const el = show(`<div class="bt-evx-rays"></div><img class="bt-evx-new" src="${p.art}" alt="" style="opacity:1;transform:none"><div class="bt-evx-txt" style="opacity:1">
          <p class="bt-kicker">New form · prototype preview</p><h1>${esc(p.name.toUpperCase())}</h1><p class="sub">${esc(p.blurb)}</p>
          <ul class="bt-chips"><li><span>${esc(p.theme)}</span></li>${p.sig ? `<li>${skIcon(p.sig)}<span>${esc(D.skills[p.sig].name)}</span></li>` : ''}</ul>
          <div class="row"><button type="button" class="bt-btn pink" data-v="use"><span>Use this form</span></button><button type="button" class="bt-btn" data-v="later"><span>Later</span></button></div></div>`, 'bt-evx named form');
      sfx('unlock'); mark('form-unlocked'); mark('form-unlocked-' + f);
      tip('forms');
      const done = v => { if (v === 'use') { save.form = f; persist(); mark('form-' + f); } ctl = null; resolve(); };
      el.querySelectorAll('[data-v]').forEach(b => b.addEventListener('click', () => { sfx('ok'); done(b.dataset.v); }));
      buttonNav(el, { back: () => done('later') });
    });
  }

  /* ════════════════════════════════════════════════════
     FULL MOON OPERATIONS
     ════════════════════════════════════════════════════ */
  let opsSel = null;
  function opsScreen() {
    screen = 'ops';
    root.classList.remove('bt-in-battle');
    music.play('title');
    const avg = Math.round(roster().reduce((s, m) => s + lvOf(m.id), 0) / roster().length);
    const firstOpen = D.ops.findIndex(o => !opCleared(o.id));
    if (opsSel == null) opsSel = Math.max(0, firstOpen);
    const render = () => {
      const op = D.ops[opsSel], ok = opUnlocked(opsSel), done = opCleared(op.id);
      const bosses = op.group.map(k => D.enemies[k]);
      const el = show(`<div class="bt-ops-bg" style="background-image:url('${op.arena}')"></div><div class="bt-ops-shade"></div>
        <div class="bt-tree-head"><button type="button" class="bt-tool" data-act="back"><span>‹ Back</span></button><h1>FULL MOON<small>Operations · ${save.ops.cleared.length} / ${D.ops.length}</small></h1><div class="bt-pts"><span><small>Party Lv</small>${avg}</span></div></div>
        <div class="bt-ops">
          <ol class="bt-ops-list">${D.ops.map((o, j) => { const u = opUnlocked(j), c = opCleared(o.id); return `<li><button type="button" class="bt-op${j === opsSel ? ' sel' : ''}${c ? ' done' : ''}${u ? '' : ' lock'}" data-i="${j}">
            <span class="moon">${c ? '✓' : u ? j + 1 : ICON.svg('room-locked', '#5a4a6a')}</span><b>${esc(u ? o.name : '???')}<small>${esc(u ? o.place : 'Clear the one before it')}</small></b><em>Lv ${o.lvl}</em></button></li>`; }).join('')}</ol>
          <div class="bt-op-detail${ok ? '' : ' lock'}">
            <div class="bt-op-art">${ok ? bosses.map((d, j) => { const a = (window.FEMC_SHADOW_ART || {})[d.img]; return a ? `<img src="${sart(d.img)}" alt="${esc(d.name)}" style="--j:${j}">` : ''; }).join('') : '<span class="q">?</span>'}</div>
            <div class="bt-card-lg"><h2><small>${esc(op.arcana)} · ${esc(op.place)}</small>${esc(ok ? op.name : 'Sealed')}</h2>
              <p class="note">${esc(ok ? op.brief : 'Clear the previous operation to learn what waits here.')}</p>
              <p class="bt-op-meta"><span>Recommended Lv <b>${op.lvl}</b></span><span>Your party Lv <b class="${avg >= op.lvl ? 'ok' : avg >= op.lvl - 3 ? 'meh' : 'bad'}">${avg}</b></span>${done ? '<span class="ok">Cleared · replayable</span>' : ''}</p>
              <div class="bt-res-btns"><button type="button" class="bt-btn pink" data-act="go"${ok ? '' : ' disabled'}><span>${done ? 'Replay operation' : 'Start operation'}</span><small>Clock heal first</small></button><button type="button" class="bt-btn" data-act="party"><span>Party</span></button><button type="button" class="bt-btn" data-act="equip"><span>Equip</span></button></div>
            </div></div>
        </div>`, 'bt-tree bt-opsscr');
      el.querySelector('[data-act="back"]').addEventListener('click', close);
      el.querySelectorAll('[data-i]').forEach(b => b.addEventListener('click', () => { const j = +b.dataset.i; if (j === opsSel) start(); else { opsSel = j; sfx('move'); render(); } }));
      el.querySelector('[data-act="go"]').addEventListener('click', start);
      el.querySelector('[data-act="party"]').addEventListener('click', () => { sfx('ok'); partyScreen(opsScreen); });
      el.querySelector('[data-act="equip"]').addEventListener('click', () => { sfx('ok'); equipScreen(opsScreen); });
      ctl = { kind: 'ops', grid: 1, move(d) { opsSel = (opsSel + (d > 0 ? 1 : -1) + D.ops.length) % D.ops.length; sfx('move'); render(); }, pick: start, back: close };
      mark('ops');
    };
    async function start() {
      if (!opUnlocked(opsSel)) { sfx('back'); return; }
      sfx('ok');
      ctl = null;
      const op = D.ops[opsSel];
      mark('op-start-' + op.id);
      await fullMoon(op);
      if (opCleared(op.id) && opsSel < D.ops.length - 1 && !opCleared(D.ops[opsSel + 1].id)) opsSel++;
      opsScreen();
    }
    function close() { sfx('back'); ctl = null; hub(); }
    render();
  }

  /* ════════════════════════════════════════════════════
     PAULOWNIA MALL: the shops
     ════════════════════════════════════════════════════ */
  const SHOP_ORDER = ['police', 'aohige', 'bebluev', 'mayoido'];
  function mallScreen(onClose, start = 0) {
    screen = 'mall';
    root.classList.remove('bt-in-battle');
    music.play('shop');
    const el = show(`<div class="bt-mall-bg"></div><div class="bt-mall-shade"></div>
      <div class="bt-tree-head"><button type="button" class="bt-tool" data-act="back"><span>‹ Back</span></button><h1>PAULOWNIA MALL<small>Iwatodai · after school</small></h1><div class="bt-pts"><span><small>Money</small>${yen(save.yen)}</span></div></div>
      <div class="bt-mall">${SHOP_ORDER.map((id, j) => { const sh = D.shops[id]; return `<button type="button" class="bt-btn bt-store" data-shop="${id}" style="--c:${sh.color};--j:${j}">
        <span class="front"><img src="${sh.bg}" alt=""></span><span class="lbl"><b>${esc(sh.name)}</b><small>${esc(sh.sub)}</small><em>${esc(sh.who)}</em></span></button>`; }).join('')}</div>
      <p class="bt-hub-hint bt-mall-hint">Shops stock better gear after each full moon you clear (tier ${shopTier()} of 7). Mayoido buys the materials Shadows drop.</p>`, 'bt-tree bt-mallscr');
    el.querySelector('[data-act="back"]').addEventListener('click', () => { sfx('back'); ctl = null; onClose(); });
    el.querySelectorAll('[data-shop]').forEach(b => b.addEventListener('click', () => { sfx('ok'); shopScreen(b.dataset.shop, () => mallScreen(onClose, SHOP_ORDER.indexOf(b.dataset.shop))); }));
    buttonNav(el, { back: () => { sfx('back'); ctl = null; onClose(); }, start });
    mark('mall');
  }
  /* One line describing a piece of gear. */
  function gearLine(id) {
    const g = D.gear[id]; if (!g) return '';
    const out = [];
    if (g.slot === 'weapon') out.push(`ATK ${g.atk}`); if (g.slot === 'armor') out.push(`DEF ${g.def}`);
    if (g.el) out.push(`${D.elements[g.el].name} attacks`);
    if (g.hits) out.push(`${g.hits[0]} hits`);
    if (g.crit) out.push(`Crit +${g.crit}%`);
    if (g.acc) out.push(`Accuracy ${g.acc > 0 ? '+' : ''}${g.acc}`);
    if (g.ail) out.push(`May inflict ${D.ailments[g.ail.id].name}`);
    if (g.stats) out.push(Object.entries(g.stats).map(([k, v]) => `${k.toUpperCase()} +${v}`).join(' '));
    if (g.aff) out.push(Object.entries(g.aff).map(([k, v]) => `${v === 'null' ? 'Nulls' : 'Resists'} ${D.elements[k].name}`).join(', '));
    if (g.nullAil) out.push(`Prevents ${g.nullAil.map(a => D.ailments[a].name).join(' & ')}`);
    if (g.desc) out.push(g.desc);
    return out.join(' · ');
  }
  const priceOf = id => (D.items[id] || D.gear[id] || D.materials[id] || {}).price || 0;
  const nameOf = id => (D.items[id] || D.gear[id] || D.materials[id] || {}).name || id;
  const whoCan = id => { const g = D.gear[id]; if (!g) return []; return D.party.filter(m => usable(m) && (g.slot !== 'weapon' || (g.wtype === m.wtype && (!g.owner || g.owner === m.id)))); };
  function shopScreen(id, onClose) {
    const shop = D.shops[id];
    screen = 'shop';
    root.classList.remove('bt-in-battle');
    music.play('shop');
    let tab = 'buy', i = 0, who = 0, line = pickOne(shop.lines.hi), mood = 'neutral', entered = false;
    const keeper = shop.portrait;
    const members = D.party.filter(usable);
    const buyList = () => {
      const t = shopTier();
      if (shop.stock) return shop.stock.filter(x => (D.items[x] ? D.items[x].tier : D.gear[x].tier) <= t);
      if (shop.sells.includes('weapon')) {
        const m = members[who];
        return Object.keys(D.gear).filter(x => { const g = D.gear[x]; return !g.rare && g.tier >= 1 && g.tier <= t && ((g.slot === 'weapon' && g.wtype === m.wtype && (!g.owner || g.owner === m.id)) || g.slot === 'armor'); })
          .sort((a, b) => (D.gear[a].slot === 'armor') - (D.gear[b].slot === 'armor') || D.gear[a].tier - D.gear[b].tier);
      }
      if (shop.sells.includes('acc')) return Object.keys(D.gear).filter(x => D.gear[x].slot === 'acc' && !D.gear[x].rare && D.gear[x].tier <= t).sort((a, b) => D.gear[a].tier - D.gear[b].tier || D.gear[a].price - D.gear[b].price);
      return [];
    };
    const sellList = () => Object.keys(save.mats).filter(k => save.mats[k] > 0).concat(Object.keys(save.gear.owned).filter(k => spare(k) > 0 && D.gear[k].tier > 0));
    const sellPrice = x => (D.materials[x] ? D.materials[x].price : Math.round(priceOf(x) * D.progression.sellRate));
    const owned = x => (D.items[x] ? save.items[x] || 0 : D.materials[x] ? save.mats[x] || 0 : (save.gear.owned[x] || 0));
    const render = () => {
      const list = tab === 'buy' ? buyList() : sellList();
      i = Math.max(0, Math.min(i, list.length - 1));
      const cur = list[i];
      const detail = cur ? (() => {
        const g = D.gear[cur];
        let cmp = '';
        if (g) {
          cmp = `<div class="bt-cmp">${whoCan(cur).filter(m => g.slot === 'weapon' || m.id === members[who].id || !shop.sells.includes('weapon') || true).slice(0, 9).map(m => {
            const nowId = eqOf(m.id)[g.slot], now = D.gear[nowId];
            const k = g.slot === 'weapon' ? 'atk' : g.slot === 'armor' ? 'def' : null;
            const d = k && now ? g[k] - now[k] : null;
            const inP = m.id === 'solar' || save.party.includes(m.id);
            return `<span class="${inP ? 'in' : ''}"><i class="av fcb">${fimg(m.id, m.faces.idle)}</i><b>${esc(m.name)}</b>${d != null ? `<em class="${d > 0 ? 'up' : d < 0 ? 'dn' : ''}">${d > 0 ? '+' : ''}${d} ${k.toUpperCase()}</em>` : `<em>${nowId ? esc(D.gear[nowId].name) : 'empty'}</em>`}</span>`;
          }).join('')}</div>`;
        }
        const desc = D.items[cur] ? D.items[cur].desc : D.materials[cur] ? D.materials[cur].desc : gearLine(cur);
        return `<div class="bt-shop-detail">${ICON.of(cur, 'big')}<div><b>${esc(nameOf(cur))}</b><p>${esc(desc)}</p>${cmp}</div></div>`;
      })() : `<div class="bt-shop-detail"><p>${tab === 'buy' ? 'Nothing for sale right now.' : 'You have nothing to sell.'}</p></div>`;
      const el = show(`<div class="bt-mall-bg"></div><div class="bt-mall-shade"></div>
        <div class="bt-tree-head"><button type="button" class="bt-tool" data-act="back"><span>‹ Back</span></button><h1>${esc(shop.name.toUpperCase())}<small>${esc(shop.sub)}</small></h1><div class="bt-pts"><span><small>Money</small>${yen(save.yen)}</span></div></div>
        <div class="bt-shop" style="--c:${shop.color}">
          <div class="bt-shop-keeper">
            <div class="front"><img src="${shop.bg}" alt="${esc(shop.name)}"></div>
            ${keeper ? `<img class="keeper${entered ? '' : ' enter'}" src="${pimg(keeper, mood)}" alt="${esc(shop.who)}">` : ''}
            <div class="bubble"><b>${esc(shop.who)}</b>${esc(line)}</div>
          </div>
          <div class="bt-shop-main">
            <div class="bt-shop-tabs">${shop.buys ? `<button type="button" class="bt-tool${tab === 'buy' ? ' on' : ''}" data-tab="buy"><span>Buy</span></button><button type="button" class="bt-tool${tab === 'sell' ? ' on' : ''}" data-tab="sell"><span>Sell</span></button>` : ''}
              ${shop.sells.includes('weapon') && tab === 'buy' ? `<div class="bt-shop-who">${members.map((m, j) => `<button type="button" class="${j === who ? 'on' : ''}${m.id === 'solar' || save.party.includes(m.id) ? ' in' : ''}" data-who="${j}" title="${esc(m.name)}"><i class="av fcb">${fimg(m.id, m.faces.idle, m.name)}</i></button>`).join('')}</div>` : ''}</div>
            <ul class="bt-shop-list">${list.map((x, j) => `<li><button type="button" class="bt-shop-row${j === i ? ' sel' : ''}" data-j="${j}">${ICON.of(x)}<b>${esc(nameOf(x))}<small>${esc(D.gear[x] ? gearLine(x) : '')}</small></b><em>${tab === 'buy' ? yen(priceOf(x)) : yen(sellPrice(x))}</em><span class="own">${tab === 'buy' ? `Have ${owned(x)}` : `×${D.gear[x] ? spare(x) : owned(x)}`}</span></button></li>`).join('')}</ul>
            ${detail}
            <div class="bt-shop-btns"><button type="button" class="bt-btn pink" data-act="deal"${cur ? '' : ' disabled'}><span>${tab === 'buy' ? (cur ? `Buy · ${yen(priceOf(cur))}` : 'Buy') : (cur ? `Sell · ${yen(sellPrice(cur))}` : 'Sell')}</span></button>${tab === 'sell' && cur && D.materials[cur] && save.mats[cur] > 1 ? `<button type="button" class="bt-btn" data-act="dealall"><span>Sell all ×${save.mats[cur]}</span></button>` : ''}
              <p class="bt-hint">↑↓ choose · Enter ${tab} · ${shop.buys ? 'Tab buy/sell · ' : ''}${shop.sells.includes('weapon') ? '←→ who · ' : ''}Esc back</p></div>
          </div>
        </div>`, 'bt-tree bt-shopscr');
      entered = true;
      el.querySelector('[data-act="back"]').addEventListener('click', close);
      el.querySelectorAll('[data-j]').forEach(b => b.addEventListener('click', () => { const j = +b.dataset.j; if (j === i) deal(); else { i = j; sfx('move'); render(); } }));
      el.querySelectorAll('[data-tab]').forEach(b => b.addEventListener('click', () => { tab = b.dataset.tab; i = 0; sfx('move'); render(); }));
      el.querySelectorAll('[data-who]').forEach(b => b.addEventListener('click', () => { who = +b.dataset.who; i = 0; sfx('move'); render(); }));
      const dl = el.querySelector('[data-act="deal"]'); if (dl) dl.addEventListener('click', deal);
      const da = el.querySelector('[data-act="dealall"]'); if (da) da.addEventListener('click', () => deal(true));
      const row = el.querySelector('.bt-shop-row.sel'); if (row && row.scrollIntoView) row.scrollIntoView({ block: 'nearest' });
      ctl = {
        kind: 'shop', shop: id, tab, list,
        key(e) {
          if (e.key === 'Tab' && shop.buys) { tab = tab === 'buy' ? 'sell' : 'buy'; i = 0; sfx('move'); render(); return true; }
          if ((e.key === 'ArrowLeft' || e.key === 'ArrowRight') && shop.sells.includes('weapon') && tab === 'buy') { who = (who + (e.key === 'ArrowLeft' ? -1 : 1) + members.length) % members.length; i = 0; sfx('move'); render(); return true; }
          if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') return true;
          return false;
        },
        move(d) { if (!list.length) return; i = (i + (d > 0 ? 1 : -1) + list.length) % list.length; sfx('move'); render(); },
        pick: () => deal(), back: close,
        setWho(j) { who = j; i = 0; render(); }, setTab(t) { tab = t; i = 0; render(); }, select(x) { const j = list.indexOf(x); if (j >= 0) { i = j; render(); } }
      };
      mark('shop'); mark('shop-' + id);
    };
    function deal(all = false) {
      const list = tab === 'buy' ? buyList() : sellList(), x = list[i];
      if (!x) return;
      if (tab === 'buy') {
        const p = priceOf(x);
        if (save.yen < p) { sfx('back'); line = shop.lines.poor; mood = 'sad'; render(); return; }
        save.yen -= p;
        if (D.items[x]) addItem(x); else addGear(x);
        sfx('unlock'); line = pickOne(shop.lines.buy); mood = 'happy'; mark('buy'); mark('buy-' + x);
      } else {
        const n = all && D.materials[x] ? save.mats[x] : 1, p = sellPrice(x) * n;
        if (D.materials[x]) { save.mats[x] -= n; if (!save.mats[x]) delete save.mats[x]; } else { save.gear.owned[x]--; if (!save.gear.owned[x]) delete save.gear.owned[x]; }
        save.yen += p;
        sfx('unlock'); line = shop.lines.sold || pickOne(shop.lines.buy); mood = 'happy'; mark('sell');
      }
      persist();
      render();
    }
    function close() { sfx('back'); ctl = null; onClose(); }
    render();
  }

  /* ════════════════════════════════════════════════════
     EQUIPMENT: weapon, armor and accessory per member
     ════════════════════════════════════════════════════ */
  const SLOTS = [['weapon', 'Weapon'], ['armor', 'Armor'], ['acc', 'Accessory']];
  function equipScreen(onClose, startMid = null, { extra = [], solo = false } = {}) {
    if (BR) { fieldMenu('equip', { extra, solo }).then(onClose); return; }
    screen = 'equip';
    root.classList.remove('bt-in-battle');
    const mates = D.party.filter(m => solo ? m.id === 'solar' : usable(m) || extra.includes(m.id)).sort((a, b) => ((b.id === 'solar' || save.party.includes(b.id)) - (a.id === 'solar' || save.party.includes(a.id))));
    let mi = Math.max(0, mates.findIndex(m => m.id === startMid)), si = 0, mode = 'slot', li = 0;
    const cands = (mid, slot) => {
      const m = member(mid), cur = eqOf(mid)[slot];
      const ids = Object.keys(D.gear).filter(x => { const g = D.gear[x]; if (g.slot !== slot) return false; if (slot === 'weapon' && (g.wtype !== m.wtype || (g.owner && g.owner !== mid))) return false; if (g.tier === 0) return x === D.startGear[mid][slot]; return spare(x) > 0 || x === cur; });
      ids.sort((a, b) => (D.gear[b].atk || D.gear[b].def || D.gear[b].price || 0) - (D.gear[a].atk || D.gear[a].def || D.gear[a].price || 0));
      return slot === 'acc' ? [null].concat(ids) : ids;
    };
    const unitWith = (mid, slot, id) => {
      const eq = Object.assign({}, eqOf(mid), slot ? { [slot]: id } : {});
      const tmp = Object.assign({}, save, { gear: { owned: save.gear.owned, eq: Object.assign({}, save.gear.eq, { [mid]: eq }) } });
      return E.buildUnit(mid, tmp, {});
    };
    const render = () => {
      const m = mates[mi], mid = m.id, eq = eqOf(mid), slot = SLOTS[si][0];
      const list = mode === 'pick' ? cands(mid, slot) : [];
      li = Math.max(0, Math.min(li, list.length - 1));
      const now = unitWith(mid), prev = mode === 'pick' ? unitWith(mid, slot, list[li]) : now;
      const stat = (k, label) => { const a = Math.round(now[k]), b = Math.round(prev[k]), d = b - a; return `<div><span>${label}</span><b>${b}</b>${d ? `<em class="${d > 0 ? 'up' : 'dn'}">${d > 0 ? '+' : ''}${d}</em>` : ''}</div>`; };
      const affNow = Object.entries(prev.aff).filter(([, a]) => a !== 'normal');
      const el = show(`<div class="bt-tree-head"><button type="button" class="bt-tool" data-act="back"><span>‹ Back</span></button><h1>EQUIPMENT<small>${esc(m.name)}</small></h1><div class="bt-pts"><span><small>Money</small>${yen(save.yen)}</span></div></div>
        <div class="bt-equip" style="--c:${m.color}">
          <ul class="bt-eq-mates">${mates.map((x, j) => `<li><button type="button" class="${j === mi ? 'on' : ''}${x.id === 'solar' || save.party.includes(x.id) ? ' in' : ''}" data-m="${j}"><i class="av fcb">${fimg(x.id, x.faces.idle)}</i><b>${esc(x.name)}<small>Lv ${lvOf(x.id)}</small></b></button></li>`).join('')}</ul>
          <div class="bt-eq-who"><img class="port" src="${pimg(mid, m.faces.idle)}" alt=""><img class="per" src="${perOf(mid).art}" alt="">
            <div class="bt-eq-stats">${stat('maxHp', 'HP')}${stat('maxSp', 'SP')}${stat('st', 'St')}${stat('ma', 'Ma')}${stat('en', 'En')}${stat('ag', 'Ag')}${stat('lu', 'Lu')}${stat('atk', 'ATK')}${stat('def', 'DEF')}</div>
            <div class="bt-eq-aff">${affNow.map(([el, a]) => `<span class="bt-aff ${a}">${ART.icon(el)}<em>${AFF_SHORT[a]}</em></span>`).join('')}${prev.nullAil.length ? `<span class="imm">No ${prev.nullAil.map(a => D.ailments[a].name).join(', ')}</span>` : ''}</div></div>
          <div class="bt-eq-slots">
            ${SLOTS.map(([k, label], j) => { const g = D.gear[eq[k]]; return `<button type="button" class="bt-eq-slot${j === si ? ' sel' : ''}${mode === 'pick' && j === si ? ' open' : ''}" data-s="${j}"><small>${label}</small>${g ? ICON.of(eq[k]) : ICON.svg('room-empty')}<b>${g ? esc(g.name) : '—'}<span>${g ? esc(gearLine(eq[k])) : 'Nothing equipped'}</span></b></button>`; }).join('')}
            ${mode === 'pick' ? `<ul class="bt-eq-list">${list.map((x, j) => { const g = x && D.gear[x]; return `<li><button type="button" class="bt-eq-item${j === li ? ' sel' : ''}${x === eq[slot] ? ' cur' : ''}" data-l="${j}">${g ? ICON.of(x) : ICON.svg('room-empty')}<b>${g ? esc(g.name) : 'Remove'}<span>${g ? esc(gearLine(x)) : 'Take it off'}</span></b><em>${x === eq[slot] ? 'E' : g && g.tier ? `×${spare(x)}` : ''}</em></button></li>`; }).join('')}</ul>` : `<p class="bt-hint">${list.length || 'Enter'} to change · buy gear at the Police Box and Be Blue V</p>`}
          </div>
        </div>
        <p class="bt-hint bt-eq-hint">↑↓ choose · Enter ${mode === 'pick' ? 'equip' : 'change'} · ←→ member · Esc back</p>`, 'bt-tree bt-equipscr');
      el.querySelector('[data-act="back"]').addEventListener('click', back);
      el.querySelectorAll('[data-m]').forEach(b => b.addEventListener('click', () => { mi = +b.dataset.m; mode = 'slot'; sfx('move'); render(); }));
      el.querySelectorAll('[data-s]').forEach(b => b.addEventListener('click', () => { const j = +b.dataset.s; if (mode === 'pick' && j === si) { mode = 'slot'; } else { si = j; mode = 'pick'; li = Math.max(0, cands(mid, SLOTS[si][0]).indexOf(eqOf(mid)[SLOTS[si][0]])); } sfx('ok'); render(); }));
      el.querySelectorAll('[data-l]').forEach(b => b.addEventListener('click', () => { li = +b.dataset.l; equip(); }));
      ctl = {
        kind: 'equip', mode, mid, slot, list,
        key(e) {
          if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { mi = (mi + (e.key === 'ArrowLeft' ? -1 : 1) + mates.length) % mates.length; mode = 'slot'; sfx('move'); render(); return true; }
          return false;
        },
        move(d) { const s = d > 0 ? 1 : -1; if (mode === 'pick') { li = (li + s + list.length) % list.length; } else si = (si + s + SLOTS.length) % SLOTS.length; sfx('move'); render(); },
        pick() { if (mode === 'pick') equip(); else { mode = 'pick'; li = Math.max(0, cands(mid, slot).indexOf(eq[slot])); sfx('ok'); render(); } },
        back,
        api: { member: id => { mi = mates.findIndex(x => x.id === id); mode = 'slot'; render(); }, open: j => { si = j; mode = 'pick'; li = 0; render(); }, choose: x => { const L = cands(mates[mi].id, SLOTS[si][0]); li = L.indexOf(x); if (li >= 0) equip(); } }
      };
      mark('equip');
    };
    function equip() {
      const m = mates[mi], slot = SLOTS[si][0], x = cands(m.id, slot)[li];
      const eq = save.gear.eq[m.id] || (save.gear.eq[m.id] = Object.assign({}, D.startGear[m.id]));
      eq[slot] = x || null;
      persist(); sfx('unlock'); mark('equip-set'); mark('equip-' + slot);
      mode = 'slot';
      render();
    }
    function back() { if (mode === 'pick') { mode = 'slot'; sfx('back'); render(); return; } sfx('back'); ctl = null; onClose(); }
    render();
  }

  /* ════════════════════════════════════════════════════
     MEMORIES: the fragments Solar has found
     ════════════════════════════════════════════════════ */
  function memoriesScreen(onClose) {
    if (BR) { fieldMenu('journal').then(onClose); return; }
    screen = 'memories';
    music.play('mementos');
    root.classList.remove('bt-in-battle');
    const worlds = ['Runners', 'strangers', 'Hoax'], charm = { Runners: 'bell', strangers: 'jade', Hoax: 'star' };
    const all = D.memories;
    const el = show(`<div class="bt-tree-head"><button type="button" class="bt-tool" data-act="back"><span>‹ Back</span></button><h1>MEMORIES<small>${save.memories.length} / ${all.length} fragments</small></h1></div>
      <div class="bt-mems">${worlds.map(w => `<section><h3>${ART.charm(charm[w])}${esc(w)}<small>${all.filter(m => m.world === w && save.memories.includes(m.id)).length} / ${all.filter(m => m.world === w).length}</small></h3>
        <div class="bt-mem-grid">${all.filter(m => m.world === w).map(m => save.memories.includes(m.id)
          ? `<button type="button" class="bt-btn bt-mem" data-mem="${m.id}"><img src="${m.img}" alt="${esc(m.title)}" loading="lazy"><b>${esc(m.title)}</b></button>`
          : '<div class="bt-mem lock"><span>?</span></div>').join('')}</div></section>`).join('')}</div>
      <p class="bt-hub-hint" style="text-align:center">Fragments turn up in Tartarus event rooms. Each one gives Haenim’s tree a skill point.</p>`, 'bt-tree bt-memscr');
    el.querySelector('[data-act="back"]').addEventListener('click', () => { sfx('back'); ctl = null; onClose(); });
    el.querySelectorAll('[data-mem]').forEach(b => b.addEventListener('click', () => {
      const m = all.find(x => x.id === b.dataset.mem);
      sfx('ok');
      const p = document.createElement('div');
      p.className = 'bt-panel bt-memview';
      p.innerHTML = `<div class="bt-card-lg"><img src="${m.wide || m.img}" alt=""><h2><small>${esc(m.world)}</small>${esc(m.title)}</h2><p class="note">${esc(m.text)}</p><div class="bt-actbar"><button type="button" class="bt-btn pink"><span>Close</span></button></div></div>`;
      el.appendChild(p);
      const prev = ctl;
      const close = () => { p.remove(); ctl = prev; };
      p.querySelector('button').addEventListener('click', () => { sfx('back'); close(); });
      p.addEventListener('click', ev => { if (ev.target === p) close(); });
      ctl = { kind: 'panel', move() {}, pick: close, back: close };
      mark('memory-view');
    }));
    buttonNav(el, { back: () => { sfx('back'); ctl = null; onClose(); } });
    mark('memories');
  }

  /* ════════════════════════════════════════════════════
     SAVE DATA: the autosave (KEY, written after every change), three manual slots (KEY-slot1..3) and a backup code.
     Loading a slot or a code replaces progress only; this device's settings stay (PREFS).
     ════════════════════════════════════════════════════ */
  const SLOT_KEY = n => `${KEY}-slot${n}`;
  const withPrefs = s => { PREFS.forEach(k => { if (save[k] !== undefined) s[k] = JSON.parse(JSON.stringify(save[k])); }); return s; };
  function readSlot(n) {
    try { const x = JSON.parse(localStorage.getItem(SLOT_KEY(n)) || 'null'); return x && x.save && fromRaw(x.save) ? x : null; } catch (e) { return null; }
  }
  const saveLine = s => {
    const f = s.reached && D.floors.find(x => x.id === s.reached), ops = ((s.ops || {}).cleared || []).length;
    return `Lv ${s.lvl} · ${f ? `${f.label} (${f.block})` : 'From the bottom'} · ${ops} full moon${ops === 1 ? '' : 's'} · ${yen(s.yen || 0)}`;
  };
  const when = t => { try { return new Date(t).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }); } catch (e) { return ''; } };
  const exportCode = () => 'FEMCBT4.' + btoa(unescape(encodeURIComponent(JSON.stringify(save))));
  /* A pasted backup: our code (FEMCBT<v>.<base64>) or plain save JSON. → a clean save, or null. */
  function parseCode(text) {
    const t = String(text || '').trim();
    if (!t) return null;
    let json = t;
    if (!t.startsWith('{')) { try { json = decodeURIComponent(escape(atob(t.replace(/^FEMCBT\d*\./, '').replace(/\s+/g, '')))); } catch (e) { return null; } }
    try { return fromRaw(JSON.parse(json)); } catch (e) { return null; }
  }
  function adopt(s) { save = withPrefs(s); normalize(save); persist(); applyPerf(); }
  function slotsScreen(onClose) {
    screen = 'slots';
    root.classList.remove('bt-in-battle');
    let armed = null, msg = '', code = '';
    const render = (focus = null) => {
      screen = 'slots';
      const slots = [1, 2, 3].map(readSlot);
      const btn = (act, label, { pink = false, off = false, small = '' } = {}) => `<button type="button" class="bt-btn${pink ? ' pink' : ''}${act === 'reset' ? ' danger' : ''}" data-act="${act}"${off ? ' disabled' : ''}><span>${armed === act ? 'Press again to confirm' : label}</span>${small ? `<small>${small}</small>` : ''}</button>`;
      const el = show(`<div class="bt-tree-head"><button type="button" class="bt-tool" data-act="back"><span>‹ Back</span></button><h1>SAVE DATA<small>Autosave · 3 slots · backup</small></h1></div>
        <div class="bt-slots">
          <section class="bt-slot auto"><h3>Autosave<small>Saved after every change</small></h3><p>${esc(saveLine(save))}</p><p class="sub">${save.runs} run${save.runs === 1 ? '' : 's'} · ${save.memories.length} memories · ${esc(diff().name)}</p></section>
          ${slots.map((x, j) => `<section class="bt-slot${x ? '' : ' empty'}"><h3>Slot ${j + 1}<small>${x ? esc(when(x.at)) : 'Empty'}</small></h3><p>${x ? esc(saveLine(x.save)) : 'Nothing saved here yet.'}</p>
            <div class="row">${btn('save' + (j + 1), x ? 'Overwrite' : 'Save here', { pink: !x })}${btn('load' + (j + 1), 'Load', { off: !x })}</div></section>`).join('')}
          <section class="bt-slot wide"><h3>Backup code<small>Copy it somewhere safe. Paste one here to restore it.</small></h3>
            <textarea class="bt-code" spellcheck="false" autocomplete="off" aria-label="Backup code" placeholder="Press “Show my code”, or paste a code here">${esc(code)}</textarea>
            <div class="row">${btn('export', 'Show my code')}${btn('copy', 'Copy', { off: !code })}${btn('import', 'Load this code')}${btn('reset', 'Reset save')}</div></section>
        </div>
        <p class="bt-slot-msg" role="status">${msg ? esc(msg) : 'Loading a slot or a code replaces your progress. Settings stay as they are on this device.'}</p>`, 'bt-tree bt-slotscr');
      const ta = el.querySelector('.bt-code');
      ta.addEventListener('input', () => { code = ta.value; armed = null; const c = el.querySelector('[data-act="copy"]'); if (c) c.disabled = !code; });
      el.querySelectorAll('[data-act]').forEach(b => b.addEventListener('click', () => act(b.dataset.act)));
      const btns = [...el.querySelectorAll('.bt-btn:not(:disabled)')];
      buttonNav(el, { back: close, start: Math.max(0, btns.findIndex(b => b.dataset.act === focus)) });
      mark('slots');
    };
    function act(a) {
      if (a === 'back') { close(); return; }
      const confirmFirst = /^(save[1-3]|load[1-3]|import|reset)$/.test(a) && !(a.startsWith('save') && !readSlot(+a.slice(4)));
      if (confirmFirst && armed !== a) { armed = a; msg = ''; sfx('move'); render(a); return; }
      armed = null;
      if (a.startsWith('save')) {
        const n = +a.slice(4);
        try { localStorage.setItem(SLOT_KEY(n), JSON.stringify({ at: Date.now(), save })); msg = `Saved to slot ${n}.`; sfx('unlock'); mark('slot-save'); }
        catch (e) { msg = 'Couldn’t save: the browser’s storage is full or blocked.'; sfx('back'); }
      } else if (a.startsWith('load')) {
        const n = +a.slice(4), x = readSlot(n);
        if (x) { adopt(fromRaw(x.save)); msg = `Loaded slot ${n}: ${saveLine(save)}.`; sfx('unlock'); mark('slot-load'); }
      } else if (a === 'export') { code = exportCode(); msg = 'This is your whole save as text. Copy it somewhere safe.'; sfx('ok'); mark('slot-export'); }
      else if (a === 'copy') {
        const done = ok => { msg = ok ? 'Copied.' : 'Couldn’t copy automatically: select the code and copy it.'; render('copy'); if (!ok) { const ta = app.querySelector('.bt-code'); if (ta) { ta.focus(); ta.select(); } } };
        try { navigator.clipboard.writeText(code).then(() => done(true), () => done(false)); } catch (e) { done(false); }
        mark('slot-copy');
        return;
      } else if (a === 'import') {
        const s2 = parseCode(code);
        if (!s2) { msg = 'That code didn’t work. Make sure you pasted all of it.'; sfx('back'); mark('slot-import-bad'); }
        else { adopt(s2); msg = `Backup loaded: ${saveLine(save)}.`; sfx('unlock'); mark('slot-import'); }
      } else if (a === 'reset') {
        adopt(fresh()); msg = 'Save reset. Slots and settings are untouched.'; sfx('back'); mark('reset');
      }
      render(a);
    }
    function close() { sfx('back'); ctl = null; onClose(); }
    render();
  }

  /* ════════════════════════════════════════════════════
     HANDOFF MODE: fights the life sim (femc-game.html) hands over (FEMC-GAME-HANDOFF.md)
     kind 'tartarus': a hub with only what makes sense tonight (no operations list, no mall, no save slots), the climb
       starting at the newest open block, the life sim's floor cap respected, "Return to the dorm" at the hub or any access
       point. kind 'operation': that full moon, straight away. kind 'scripted': the story fights in SCRIPTS below.
     Floors show the life sim's numbers (calendar.js floorCaps: Thebel up to 16F, Arqa up to 36F, …), so "best floor" agrees.
     ════════════════════════════════════════════════════ */
  let HS = null; // this handoff: what Solar brought in, and what changed since
  const hoAvail = () => (HO ? ['solar'].concat((HO.request.available || []).filter(id => id !== 'solar' && member(id))) : D.party.filter(m => !m.searcher).map(m => m.id));
  const hoTired = () => (HO && ['tired', 'sick'].includes(HO.request.condition) ? { solar: true } : {});
  // calendar.js floorCaps, in order; block b of the prototype's Tartarus opens with the b-th cap.
  // = each climbable block's top floor (16, 36, 64, 92, 118, 144, 172); Monad's floors are opened one by one (tartarus.js floorOpen).
  const HO_CAPS = D.blocks.filter(b => !b.secret).map(b => b.floors[b.floors.length - 1]);
  function hoBlockCap() { const mf = +(HO && HO.request.maxFloor) || 0; let b = 0; HO_CAPS.forEach((c, i) => { if (mf >= c) b = i; }); return Math.min(b, D.blocks.length - 1); }
  // The entrance of the newest block that's open: its date has come and the full moon below it is cleared.
  function hoStartFi() {
    let b = 0;
    for (let k = 1; k <= hoBlockCap(); k++) if (opCleared(D.blocks[k - 1].op)) b = k; else break;
    return Math.max(0, D.floors.findIndex(f => f.bi === b));
  }
  function hoBegin() {
    const R = HO.request;
    // Floors carry their real numbers since 2026-10-25 (data.js blocks[].floors): nothing to relabel.
    // The life sim owns the party, money, items, gear, operations and fragments. Unknown ids are skipped.
    const avail = hoAvail();
    catchUpRecruits(save, avail, 'available');
    const chosen = save.preparation?.handoff === HO.id ? save.party : R.party;
    save.party = (chosen || []).filter(id => id !== 'solar' && member(id) && avail.includes(id)).slice(0, 3);
    save.items = {};
    Object.entries(R.items || {}).forEach(([k, n]) => { if (D.items[k] && n > 0) save.items[k] = Math.floor(n); });
    if (typeof R.yen === 'number') save.yen = Math.max(0, Math.round(R.yen));
    (R.gear || []).forEach(g => { if (D.gear[g] && !(save.gear.owned[g] > 0)) save.gear.owned[g] = 1; });
    save.ops.cleared = (R.bossesCleared || []).filter(id => D.ops.some(o => o.id === id));
    // Fragments Solar found in the life sim feed Haenim's tree here too (a skill point each, once).
    (R.fragments || []).forEach(f => { if (D.memories.some(m => m.id === f) && !save.memories.includes(f)) { save.memories.push(f); save.pts += D.progression.memoryPoints; } });
    // Link ranks open the party trees' tiers and, at MAX, evolve a signature skill (engine.js linkRank).
    const ranks = (R.social && R.social.ranks) || null;
    if (ranks) D.party.forEach(m => { if (m.id !== 'solar' && ranks[m.id] != null) save.ranks[m.id] = Math.min(10, +ranks[m.id] || 0); });
    // Every link's rank feeds the bond perks (build.js); a reversed link pauses its perks. Rank gifts (a naginata, a skill point) land once.
    // Bond skills (bonds.js): the links on their romance route, and today's date (a bond's last day).
    const gifts = BLD ? BLD.syncBonds(save, ranks || {}, (R.social && R.social.reversed) || [], (R.social && Array.isArray(R.social.romance)) ? R.social.romance : null, (HO.date && HO.date.md) || null) : [];
    delete save.forceForm;
    if (save.reached) { const i = D.floors.findIndex(f => f.id === save.reached), f = D.floors[i]; if (i < 0 || (f.secret ? !(TT && TT.floorOpen(ttCtx(f), f)) : f.bi > hoBlockCap())) save.reached = null; }
    E.formsList().forEach(f => { if (!save.forms.includes(f) && E.formUnlocked(Object.assign({}, save, { forms: [] }), f)) save.forms.push(f); });
    HS = { items0: Object.assign({}, save.items), yen0: save.yen, exp: {}, frags: [], bosses: [], floor: 0, entered: false, scripted: false, finished: false, gifts, plumes: 0 };
    // Night kits from bonds (Fuuka's bento, Ken's bead, Sunoo's soul): only good tonight, never sent back.
    // Night-only dishes the life sim packed (request.kits: Shinjiro's Kitchen Duty leftovers).
    if (HO.kind === 'tartarus' && R.kits) Object.entries(R.kits).forEach(([k, n]) => { if (D.items[k] && n > 0) { save.items[k] = (save.items[k] || 0) + n; mark('night-kit-' + k); } });
    if (BLD && HO.kind === 'tartarus') { const ctx = BLD.ctxOf(save, hoAvail()); BLD.PERKS.forEach(p => { if (p.fx.nightKit && ['own', 'party', 'assist'].includes(BLD.perkState(p, ctx))) Object.entries(p.fx.nightKit).forEach(([k, n]) => { if (D.items[k]) { save.items[k] = (save.items[k] || 0) + n; mark('night-kit-' + k); } }); }); }
    persist();
    mark('handoff-' + HO.kind);
  }
  function hoHub() {
    screen = 'hub';
    root.classList.remove('bt-in-battle');
    music.play('title');
    const R = HO.request, start = D.floors[hoStartFi()];
    const cont = save.reached && D.floors.findIndex(f => f.id === save.reached) > hoStartFi() && D.floors.find(f => f.id === save.reached);
    const top = D.floors.filter(f => f.bi === hoBlockCap()).pop();
    const mates = hoAvail().length > 1;
    const el = show(`<div class="bt-hub-copy">
        <p class="bt-kicker">${esc(HO.date ? `${HO.date.md} ${HO.date.weekday || ''}` : '')} · The Dark Hour<span class="bt-diff d-${esc(ST().difficulty)}" title="Difficulty (change it in Settings)">${esc(diff().name)}</span></p>
        <h1>TARTARUS<small>${esc(R.title && R.title !== 'Tartarus' ? R.title : 'Tonight’s climb')}</small></h1>
        <div class="bt-hub-menu">
          ${cont ? `<button type="button" class="bt-btn pink" data-go="cont"><span>Continue from ${esc(cont.label)}</span><small>Access point · ${esc(cont.block)}</small></button>` : ''}
          <button type="button" class="bt-btn${cont ? '' : ' pink'}" data-go="run"><span>${start.fi === 0 && start.bi === 0 ? 'Enter Tartarus' : `Enter at ${esc(start.label)}`}</span><small>${esc(start.block)} · open up to ${esc(top.label)}</small></button>
          <button type="button" class="bt-btn bt-menu-btn" data-go="menu"><span>Menu</span><small>${mates ? `Party ${save.party.length + 1}/4 · ` : ''}Personas · Equipment · Items</small></button>
          <div class="bt-hub-row"><button type="button" class="bt-btn" data-go="tree"><span>Skills</span><small>Haenim · ${save.pts} SP</small></button><button type="button" class="bt-btn" data-go="dorm"><span>Return to the dorm</span><small>Not tonight</small></button></div>
        </div>
        <p class="bt-hub-hint">${esc(NAVI.name)} is navigating. ${R.condition === 'tired' || R.condition === 'sick' ? 'Solar is already tired; she’ll fight below her best tonight.' : 'Climb as far as you like, then leave at an access point.'}</p>
      </div>
      <div class="bt-hub-fig" aria-hidden="true"><i class="band"></i><img src="assets/femc/profile/femc.webp?v=${V()}" alt=""></div>
      ${hubSolar(`<p class="bt-meta"><span class="bt-yen">${ICON.svg('yen')}${yen(save.yen)}</span> · best ${esc(R.bestFloor ? `${R.bestFloor}F` : 'none yet')} · ${save.ops.cleared.length} full moon${save.ops.cleared.length === 1 ? '' : 's'} cleared</p>`)}
      <div class="bt-top" style="justify-content:flex-end"><button type="button" class="bt-tool" data-go="dorm"><span>‹ Return to the dorm</span></button><div class="bt-tools" style="margin-left:8px">${tools()}</div></div>`, 'bt-hub bt-hub-ho');
    wireTools(el);
    el.querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', () => {
      const go = b.dataset.go;
      if (go === 'run') { sfx('ok'); startRun(start.id); }
      else if (go === 'cont') { sfx('ok'); startRun(save.reached); }
      else if (go === 'tree') { sfx('ok'); treeScreen(hub); }
      else if (go === 'party') { sfx('ok'); partyScreen(hub); }
      else if (go === 'personas') { sfx('ok'); personaScreen(hub); }
      else if (go === 'equip') { sfx('ok'); equipScreen(hub); }
      else if (go === 'memories') { sfx('ok'); memoriesScreen(hub); }
      else if (go === 'menu') { fieldMenu(mates ? 'party' : 'equip').then(hub); }
      else if (go === 'dorm') { sfx('back'); hoFinish(HS.entered ? 'win' : 'retreat'); }
    }));
    buttonNav(el, { back: () => openSettings() });
    menuKey(el, () => fieldMenu(mates ? 'party' : 'equip').then(hub));
    mark('hub'); mark('hub-ho');
  }
  /* The result for the life sim (FEMC-GAME-HANDOFF.md `result`). */
  function hoResult(outcome, extra = {}) {
    const R = HO.request;
    const r = { outcome, exp: {}, levels: {}, yenDelta: Math.round(save.yen - HS.yen0), items: {}, gear: [], fragments: HS.frags.slice(), bossesCleared: HS.bosses.slice() };
    if (outcome !== 'interrupt') Object.entries(HS.exp).forEach(([k, n]) => { if (n > 0) r.exp[k] = n; });
    hoAvail().forEach(id => { r.levels[id] = lvOf(id); });
    new Set(Object.keys(HS.items0).concat(Object.keys(save.items))).forEach(k => { if (D.items[k] && D.items[k].night) return; const d = (save.items[k] || 0) - (HS.items0[k] || 0); if (d) r.items[k] = d; });
    r.gear = [...new Set((R.gear || []).concat(Object.keys(save.gear.owned).filter(k => save.gear.owned[k] > 0 && D.gear[k] && D.gear[k].tier > 0)))];
    if (HO.kind === 'tartarus') {
      r.fatigue = HS.entered ? (['tired', 'sick'].includes(R.condition) ? 'sick' : 'tired') : (R.condition || 'good');
      r.floorsReached = HS.floor || 0;
      if (HS.plumes) r.plumes = HS.plumes; // Velvet Plumes from vaults, guardians, rare Shadows and hidden rooms (core.js applyResult)
    } else if (HO.kind === 'operation' && !HS.scripted && outcome !== 'interrupt') r.fatigue = R.condition === 'sick' ? 'sick' : 'tired';
    return Object.assign(r, extra);
  }
  function hoFinish(outcome, extra = {}) {
    if (!HS || HS.finished) return;
    HS.finished = true;
    ctl = null;
    delete save.preparation;
    persist();
    const result = hoResult(outcome, extra);
    window.__hoResult = result;
    mark('handoff-done');
    screen = 'handoff';
    root.classList.remove('bt-in-battle');
    music.play(null);
    const word = { win: HO.kind === 'tartarus' ? 'Back to the dorm' : 'The moon is quiet', lose: 'The hour closes', retreat: 'Not tonight', interrupt: '…' }[outcome] || 'Back to the dorm';
    show(`<div><p class="bt-kicker">${esc(HO.date ? HO.date.md : '')} · The Dark Hour</p><h1>${esc(word.toUpperCase())}</h1></div>`, 'bt-over bt-ho-done');
    // The life sim takes it from here: it records the result, fades this frame out and picks the story up on the next line.
    setTimeout(() => { if (!window.__hoStay) BR.finish(result); }, Math.round(650 / Math.min(speed(), 4)));
  }

  /* ── Scripted story fights. Each entry → a list of battle specs, run in order (game over: retry, or back to the dorm).
     A spec can add `join: [ids]` (a searcher who has just awakened is put in the party for that fight). Segment 1 of a
     two-part memory floor ends with 'interrupt' (the scene then plays the awakening) and can't be lost. ── */
  const BGP = 'assets/femc/bg/';
  const TBG = i => D.blocks[Math.min(i, D.blocks.length - 1)].bg;
  const SEG1 = (at, foeHp = 0.5) => ({ protect: true, noEscape: true, interruptAt: at, interruptFoeHp: foeHp, interruptHp: 0.35 });
  // A memory floor: one boss (plus any Shadows at its side: pass an array, boss first), two segments when someone awakens
  // mid-fight (seg 1 interrupts, seg 2 has them in the party).
  // Music: Mementos while getting ready, Danger Zone for the fight (or another key: Haechan's mirror match is a rival fight).
  const memoryFloor = (boss, bg, block, who, at = 4, tune = 'danger') => R => (R.segment === 1
    ? [{ group: [].concat(boss), bg, label: 'Tartarus', block, boss: true, music: tune, prep: 'mementos', noResults: true, title: R.title || block, rules: SEG1(at) }]
    : [{ group: [].concat(boss), bg, label: 'Tartarus', block, boss: true, music: tune, prep: 'mementos', title: R.title || block, join: who ? [who] : [], rules: { noEscape: true, startHp: R.segment === 2 ? 0.5 : 1 } }]);
  const SCRIPTS = {
    // 4/6, the prologue. Segment 1: two Maya, Attack and Guard only; ends 'interrupt' when round 3 starts, when Solar drops
    // below half her HP, or when a Maya falls. Segment 2: the Evoker works, the second Maya is weak to Light, Solar can't lose.
    'prologue-1': R => (R.segment === 2
      ? [{ group: ['maya_lost'], bg: BGP + 'tartarus-scene.webp', label: 'Tartarus', block: 'First Floor', solo: true, title: 'Tartarus · First Floor',
          rules: { protect: true, noNav: true, noEscape: true, cmds: ['attack', 'skill', 'guard', 'item', 'theurgy'] } }]
      : [{ group: ['maya', 'maya_lost'], bg: BGP + 'tartarus-scene.webp', label: 'Tartarus', block: 'First Floor', solo: true, noResults: true,
          rules: { protect: true, noNav: true, cmds: ['attack', 'guard'], interruptAt: 3, interruptHp: 0.5, interruptOnKill: true } }]),
    // 4/9: the first fight on purpose, on the dorm roof.
    magician: () => [{ group: ['magician'], bg: BGP + 'iwatodaidorm-roof-night.webp', label: 'Full Moon', block: 'Iwatodai Dorm · Roof', boss: true, music: 'boss',
      op: { id: 'magician', name: 'The Magician', arcana: 'I · Magician' }, title: 'Full Moon · The Magician', rules: { noEscape: true } }],
    // 12/2: no P3 boss. The train runs through the tower and can't be targeted; its guards can. Beat the guards.
    'tartarus-memory': () => [{ group: ['memory_car', 'seeker@42', 'knight@43'], bg: TBG(6), label: 'Full Moon', block: 'Tartarus · A Floor That Isn’t There', boss: true, music: 'boss',
      op: { id: 'tartarus-memory', name: 'The Sleeper Car', arcana: 'XVIII · Moon' }, title: 'Full Moon · Tartarus',
      rules: { noEscape: true, setup: b => b.foes().forEach(f => { if (f.kind === 'memory_car') { f.unreachable = true; f.scenery = true; } }) } }],
    // Memory floors (story-act4/5). Simplified: one boss each; the awakening's segment 2 has the searcher in the party.
    'memory-hoax': memoryFloor(['ballot_box', 'group_chat'], BGP + 'tartarus-lobby.webp', 'A Gym That Isn’t Here', 'jihoon', 4),
    'memory-runners': memoryFloor('flash_shadow', TBG(5), 'A Hallway at 3 A.M.', 'minji', 3),
    'memory-strangers': memoryFloor(['tide_shadow', 'fishmonger'], BGP + 'tartarus-coffins.webp', 'The Last Ferry', null),
    'memory-runners-2': memoryFloor('party_shadow', TBG(4), 'The First Party', null),
    'memory-jungwon': memoryFloor('veil_poster', TBG(6), 'Two Floors at Once', 'jungwon', 3),
    'memory-haechan': memoryFloor('fox_shadow', TBG(6), 'Mirror Match', 'haechan', 3, 'villain')
  };
  // Story fights the battle game doesn't know yet: a Shadow group from the newest open block. The scene's designer notes can
  // ask for an interrupt ("interrupt … turn N", "half HP"); segment 1 can't be lost.
  function genericScript(R) {
    const b = D.blocks[hoBlockCap()], notes = String(R.notes || '');
    const wantsInterrupt = /interrupt/i.test(notes) && R.segment !== 2;
    const turn = notes.match(/turn (\d+)/i);
    return [{ group: (b.strong[0] || b.pool[0]).slice(), bg: b.bg, label: R.title || 'Tartarus', block: b.name, boss: false, music: 'danger', title: R.title || b.name,
      rules: wantsInterrupt ? SEG1(turn ? +turn[1] + 1 : 4, /half/i.test(notes) ? 0.5 : 0) : { noEscape: true } }];
  }
  // Preparation is deliberately separate from battle(): nothing can take a turn before Begin.
  function prepareBattle(spec) {
    const required = spec.join || [], level = Math.max(...spec.group.map(kind => E.enemyBase(kind).lvl));
    if (spec.prep) music.play(spec.prep);
    if (HO) { save.preparation = { handoff: HO.id }; persist(); }
    return new Promise(resolve => {
      let started = false;
      const render = () => {
        screen = 'preparation'; root.classList.remove('bt-in-battle');
        const members = spec.solo ? [D.party[0]] : roster();
        const el = show(`<div class="bt-room-bg" style="background-image:url('${spec.bg}')"></div><div class="bt-room-shade"></div>
          <div class="bt-room-in"><p class="bt-kicker">Battle preparation</p><h1>GET READY</h1>
          <div class="bt-room-body"><p>${esc(spec.title || spec.block || spec.label)} · Recommended level ${level}</p>
          <p>${spec.solo ? 'Solar fights alone. You can review her equipment before starting.' : 'Review your party and equipment before starting.'}</p>
          <ul class="bt-prep-list">${members.map(m => { const eq = eqOf(m.id); return `<li><b>${esc(m.name)} <small>Lv ${lvOf(m.id)}${required.includes(m.id) ? ' · Required' : ''}</small></b><span>${esc(D.gear[eq.weapon]?.name || '—')} · ${esc(D.gear[eq.armor]?.name || '—')}</span></li>`; }).join('')}</ul></div>
          <div class="row">${spec.solo ? '' : '<button type="button" class="bt-btn" data-prep="party"><span>Party</span></button>'}
          <button type="button" class="bt-btn" data-prep="equip"><span>Equipment</span></button>
          <button type="button" class="bt-btn pink" data-prep="begin"><span>Begin battle</span></button></div></div>`, 'bt-room bt-preparation');
        el.querySelector('[data-prep="party"]')?.addEventListener('click', () => { if (!started) partyScreen(render, { required }); });
        el.querySelector('[data-prep="equip"]').addEventListener('click', () => { if (!started) equipScreen(render, 'solar', { extra: required, solo: !!spec.solo }); });
        el.querySelector('[data-prep="begin"]').addEventListener('click', () => { if (started) return; started = true; ctl = null; persist(); sfx('ok'); resolve(); });
        buttonNav(el);
        mark('preparation');
      };
      render();
    });
  }
  /* One story battle with game over handling. Returns 'win' | 'interrupt' | 'phase' | 'escaped' | 'lose'. */
  async function hoFight(spec) {
    if (spec.join && spec.join.length) {
      const joining = spec.join.filter(id => member(id));
      const level = Math.max(...spec.group.map(kind => E.enemyBase(kind).lvl));
      catchUpRecruits(save, joining, 'awakening', level);
      save.party = [...new Set(joining.concat(save.party))].slice(0, 3);
      persist();
    }
    if (spec.rules && spec.rules.startHp && spec.rules.startHp < 1 && run && !run.carry) {
      // The second half of an interrupted fight: the Shadow picks up where it was (it starts hurt).
      spec = Object.assign({}, spec, { rules: Object.assign({}, spec.rules, { setup: b => b.foes().forEach(f => { f.hp = Math.round(f.maxHp * spec.rules.startHp); }) }) });
    }
    for (;;) {
      if (spec.boss || spec.join?.length) await prepareBattle(spec);
      const snap = JSON.stringify({ items: save.items, th: save.th, carry: run && run.carry });
      const out = await battle(Object.assign({ heat: 0, nav: 'boss' }, spec));
      if (out.result === 'win') {
        if (!spec.noResults) await afterWin(out, { title: spec.title || spec.block, back: 'Continue', story: true });
        else if (out.rew && out.rew.exp) { gainExp(out.rew.exp); save.yen += out.rew.yen || 0; persist(); }
        return 'win';
      }
      if (out.result !== 'lose') return out.result;
      const c = await gameOver();
      if (c === 'retry') { const s2 = JSON.parse(snap); save.items = s2.items; save.th = s2.th; if (run) run.carry = s2.carry; persist(); continue; }
      return 'lose';
    }
  }
  async function hoScripted() {
    const R = HO.request, id = R.op === 'finale' || R.script === 'finale' ? 'finale' : (R.op && SCRIPTS[R.op]) ? R.op : R.script || R.op;
    HS.scripted = true;
    run = newRun({ ops: true });
    mark('script-' + id + (R.segment ? '-' + R.segment : ''));
    if (id === 'finale') return hoFinale();
    const specs = (SCRIPTS[id] || genericScript)(R);
    let out = 'win';
    for (const spec of specs) { out = await hoFight(spec); if (out !== 'win') break; }
    const opId = specs[0] && specs[0].op && specs[0].op.id;
    if (out === 'win' && opId) HS.bosses.push(opId);
    run = null;
    hoFinish(out === 'phase' || out === 'escaped' ? 'win' : out);
  }
  /* 3/6 (1/30 until the year ran to March), Wren's Shadow: the Last Train (story-act6 hands it over in three segments; with no segment all three play).
     1. Last Call: Wren never attacks; every turn she asks (Charm, Fear, Distress). Hold (Guard) and answer, or strike her:
        striking shortens the phase and isn't punished. It ends when her resolve breaks (four rounds) or she falls.
     2. No Stops: the train and three lantern windows, one sleeping Solar in each. Only the lanterns of the locked route can
        be broken (the segment's notes "route lock RUNNERS/STRANGERS/HOAX/STAY" or "route TRUE", else request.routeFlags
        route-R/S/H/stay/true, else request.route). Each one broken weakens the train; Stay can break none (the hardest).
     3. End of the Line: Solar alone, in her route's form (Sunna / Mazu / Nike, Haenim on Stay); Wren takes no actions and
        Solar can't lose. With no segment, (Take her hand.) is offered when request.trueReady.
     result.flags: { 'wren-struck-first': true } in a full (no-segment) run if Wren was struck; in segments the scene records it.
     result.choice: 'hand' | 'defeat' (full run only). */
  function finaleRoute() {
    const R = HO.request, notes = String(R.notes || '');
    const m = /route lock (RUNNERS|STRANGERS|HOAX|STAY)|route (TRUE)/i.exec(notes);
    if (m) return { RUNNERS: 'R', STRANGERS: 'S', HOAX: 'H', STAY: 'stay', TRUE: 'true' }[(m[1] || m[2]).toUpperCase()];
    const f = R.routeFlags || [];
    for (const [flag, r] of [['route-true', 'true'], ['route-R', 'R'], ['route-S', 'S'], ['route-H', 'H'], ['route-stay', 'stay']]) if (f.includes(flag)) return r;
    const r = String(R.route || '').toLowerCase();
    return { r: 'R', runners: 'R', s: 'S', strangers: 'S', h: 'H', hoax: 'H', stay: 'stay', true: 'true' }[r] || 'true';
  }
  async function hoFinale() {
    const R = HO.request, seg = +R.segment || 0, bg = BGP + 'darkhour-station-platform.webp', block = 'Iwatodai Station · Platform';
    const route = finaleRoute();
    const open = { R: ['lantern_r'], S: ['lantern_s'], H: ['lantern_h'], stay: [] }[route] || ['lantern_r', 'lantern_s', 'lantern_h'];
    const flags = {};
    const done = (outcome, extra = {}) => { run = null; return hoFinish(outcome, Object.assign(Object.keys(flags).length ? { flags } : {}, extra)); };
    if (!seg || seg === 1) {
      if (!seg) await message('LAST CALL', 'Wren is on the bench with her ticket in both hands. Midnight is a minute away and so is the train. She doesn’t want to fight you. She wants you to stay.');
      const p1 = await hoFight({ group: ['wren_call'], bg, label: 'Last Call', block, boss: true, music: 'finale-call', noResults: true, op: { id: 'finale', name: 'Last Call', arcana: 'Jester' },
        rules: { protect: true, noNav: true, noEscape: true, labels: { guard: 'Hold' }, roundsMax: 4 } });
      const w = B && B.foes().find(f => f.kind === 'wren_call');
      // In segments, the scene records its own choice (story-act6); only a full run reports it.
      if (!seg && w && w.hp < w.maxHp) flags['wren-struck-first'] = true;
      if (p1 === 'lose') return done('lose');
      if (seg === 1) return done('win');
      await message('NO STOPS', 'The train comes in with no lights in the lead car. Three windows glow along its side, and in each one a girl who looks like you is asleep.');
    }
    if (!seg || seg === 2) {
      // Fuuka's opening tip says only which lanterns can break and that breaking them weakens the train.
      const LCOL = { lantern_r: 'gold', lantern_s: 'jade', lantern_h: 'pink' };
      const tip = open.length === 3 ? 'All three lanterns can be broken. Each one you break weakens the train!'
        : open.length ? `Only the ${LCOL[open[0]]} lantern can be broken. Break it to weaken the train!`
          : 'The lanterns are all behind glass. Focus on the train!';
      const p2 = await hoFight({ group: ['last_train', 'lantern_r', 'lantern_s', 'lantern_h'], bg, label: 'No Stops', block, boss: true, music: 'finale-train', title: 'The Last Train', nav: 'finaleTrain', navVars: { tip },
        op: { id: 'finale', name: 'The Last Train', arcana: 'XVIII · Moon' },
        rules: { noEscape: true, setup: b => b.foes().forEach(f => { if (/^lantern_/.test(f.kind) && !open.includes(f.kind)) { f.unreachable = true; f.aff = Object.fromEntries(D.affinityOrder.map(el => [el, 'null'])); } }) } });
      mark('finale-route-' + route);
      if (p2 !== 'win') return done('lose');
      if (seg === 2) return done('win');
    }
    let choice = null;
    if (!seg) {
      const hand = !!R.trueReady || route === 'true';
      const v = await roomPanel({ bg, cls: 'event finale', kicker: 'End of the Line', title: 'WREN', name: 'finale-choice',
        body: '<p>The cap falls. Her hair comes down, long and black, and she is small and scared and she is you. The others fade out of the green. It’s just the two of you on the platform.</p>',
        buttons: (hand ? [{ v: 'hand', label: '(Take her hand.)', pink: true }] : []).concat([{ v: 'end', label: 'End it.', pink: !hand }]) });
      if (v === 'hand') { mark('finale-hand'); HS.bosses.push('finale'); return done('win', { choice: 'hand' }); }
      choice = 'defeat';
    }
    // Phase 3 in the route's form of Haenim (only for this fight; the battle save's chosen form comes back after).
    const form = { R: 'haenim-sunna', S: 'haenim-mazu', H: 'haenim-nike' }[route] || 'haenim';
    save.forceForm = form;
    const p3 = await hoFight({ group: ['wren_last'], bg, label: 'End of the Line', block, boss: true, music: 'finale-last', solo: true, noResults: true, op: { id: 'finale', name: 'End of the Line', arcana: 'Jester' },
      rules: { protect: true, noNav: true, noEscape: true, cmds: ['attack', 'skill', 'theurgy'] } });
    delete save.forceForm; persist();
    if (p3 === 'win') HS.bosses.push('finale');
    return done(p3 === 'win' ? 'win' : 'lose', choice ? { choice } : {});
  }
  async function hoOperation() {
    const R = HO.request, ids = [].concat(R.ops || R.op || []);
    if (ids.some(id => SCRIPTS[id] || id === 'finale') || !ids.some(id => D.ops.some(o => o.id === id))) return hoScripted();
    let out = 'win';
    for (const id of ids) {
      const op = D.ops.find(o => o.id === id);
      if (!op) continue;
      const r = await fullMoon(op);
      if (r !== 'win') { out = 'lose'; break; }
      HS.bosses.push(op.id);
    }
    hoFinish(out);
  }
  function hoStart() {
    hoBegin();
    if (HO.kind === 'operation') return hoOperation();
    if (HO.kind === 'scripted') return hoScripted();
    hub();
  }

  /* ── FPS meter (?fps=1) ───────────────────────────── */
  if (params.get('fps') === '1') {
    const m = document.createElement('div');
    m.className = 'bt-fps';
    document.body.appendChild(m);
    let last = performance.now(), acc = 0, n = 0, worst = 0;
    const tick = t => { const d = t - last; last = t; acc += d; n++; worst = Math.max(worst, d); if (acc > 500) { m.textContent = `${Math.round(1000 * n / acc)} fps · avg ${(acc / n).toFixed(1)}ms · worst ${worst.toFixed(0)}ms${FX && FX.quality ? ' · fx ' + FX.quality() : ''}`; acc = 0; n = 0; worst = 0; } requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  }

  /* ── Boot ─────────────────────────────────────────── */
  window.FemcBattle = {
    get B() { return B; }, get save() { return save; }, get run() { return run; }, get ctl() { return ctl; },
    get settings() { return save.settings; }, get blog() { return blog; }, get rushOn() { return rushActive(); }, get paused() { return paused; }, get frozen() { return frozen; },
    openSettings: k => openSettings(k), openHelp: t => openHelp(t), openLog, toggleRush, exportCode, parseCode, diff,
    screen: () => screen, marks, freeze() { frozen = true; if (FX) FX.pause(); }, unfreeze() { frozen = false; if (FX) FX.resume(); },
    awakening: () => awakening(app.firstElementChild || app),
    get handoff() { return HO; }, get hs() { return HS; }, hoFinish: (o, x) => hoFinish(o, x), tt: f => ttCtx(f || D.floors[0]), climb: id => startRun(id || null), get mapLine() { return mapLine; }, // tests
    reloadSave() { save = loadSave(); }, settingsChanged, get embedded() { return !!BR; },
    playEvents: evs => play(evs), // tests: play engine-shaped events through the real presentation (battle lines, cut-ins)
    music: { state: () => music.state(), play: (k, o) => music.play(k, o), world: n => music.world(n), endWorld: () => music.endWorld() }
  };
  if (FX) FX.setSpeed(speed);
  if (HO) { hoStart(); try { BR.ready(); } catch (e) {} } else hub();
})();
