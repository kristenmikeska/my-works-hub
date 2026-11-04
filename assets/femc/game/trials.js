/* Persona 3: Solstice · Velvet Trials (2026-11-01, Kat's boss-rush approval; design in FEMC-BOSS-RUSH.md). A challenge mode in
   the Velvet Room, P5X battle-rush style: rows of boss refights for a score, a rank and special rewards. Story only (never
   the epilogue). The fights go through the ordinary handoff as kind 'trial' (battle trials-battle.js plays them); nothing
   here touches story progress, Tartarus, the bosses-beaten records or yen.
   ── What's open ──
     The button shows once any boss is beaten (`beaten()`): full moons won this playthrough (S.tartarus.bosses, D.ops only; New
     Game+ counts every full moon, since the year before won them all), block guardians (battle save tt.guardians, plus any
     whose floor is at or under late.top, the climb's high-water mark New Game+ keeps), superbosses (tt.supers, late.zenith),
     and every boss this save line has seen here before (`seen`, carried by New Game+). Bosses not beaten show as ???.
   ── Trials (TRIALS) ──
     Seven fixed rows of 3-4 bosses, each boss lifted to the trial's level `lvl` if it's below it (escorts by the same step),
     never lowered. A trial opens when all its bosses are beaten; its name shows once one is. `rec` is the party level it's
     tuned for (tests/femc_bossrush.py sim). Between fights 25% HP / SP back (`HEAL`), and the trial's own `kit` (the life
     sim's items never go in).
   ── The Featured Trial ──
     Each game week (Sunday start, like core.js weekOf) one open trial with a modifier (MODS: Bare Hands, Shuffled Hearts,
     Critical Moon, Glass Moon), seeded by runId + week. Score ×1.2 and rank ×1.1 for the trouble.
   ── Duels ──
     Any beaten boss alone, at Solar's level or its own, whichever is higher.
   ── Score and rank (`score`) ──
     Per fight: 500 for the win, up to 200 for speed (full at or under `par` rounds, nothing at twice it), 300 if nobody was
     knocked out; plus 100 a fight × the party's HP share at the end. Rank by the share of the most: S .90, A .75, B .60, else C.
     Only a full clear ranks. Best records per trial, per Duel boss and per week's Featured Trial.
   ── Rewards ──
     One-time per trial and rank (reaching a rank pays every rank below it not yet paid): PAY. Weekly and capped: the Featured
     Trial pays FEAT by its best rank this week (only the difference when it improves); Duels pay one plume a win, DUEL_CAP a
     week. Looks (`pool: false`, drawn in CSS, added to cosmetics.js ITEMS here): LOOKS. No stamps (achievements.js stays).
   ── Save ──
     S.gacha.trials = { v, seen [boss ids], best { trialId | 'duel:<boss>': { rank, score, rounds, ms, day } }, paid { trialId:
     [ranks] }, feat { '<runId>:<week>': { rank, score, paid } }, wk { key, duels }, looks [ids], runs, clears, last }. New Game+
     keeps it (core.js newGamePlus). A trial in progress is just the pending handoff: a reload reopens the fight, which asks to
     start over or abandon (no reward).
   Tests: tests/femc_bossrush.py. */
window.FemcTrials = (() => {
  const G = window.FemcGame;
  if (!G) return null;
  const D = () => window.FEMC_BATTLE_DATA, S = () => G.S, UI = () => window.FemcGameUI, GA = () => window.FemcGacha, B = () => window.FemcBuild;
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const live = () => { const s = S(); return !!(s && s.started && !s.epi && s.phase !== 'title' && GA()); };
  const HEAL = 0.25, RANKS = ['C', 'B', 'A', 'S'], DUEL_CAP = 2;
  const KIT_LOW = { medicine: 4, snuff_soul: 3, revival_bead: 1, bead: 1 }, KIT = { bead: 2, chewing_soul: 2, revival_bead: 2, patra_gem: 1 };
  const TRIALS = [
    { id: 'moons1', no: 'I', name: 'The First Moons', lvl: 27, rec: 30, kit: KIT_LOW, bosses: ['priestess', 'empress', 'hierophant', 'lovers'] },
    { id: 'wardens1', no: 'II', name: 'The Lower Wardens', lvl: 48, rec: 40, kit: KIT_LOW, bosses: ['guard_thebel', 'guard_arqa', 'guard_yabbashah', 'guard_tziah'] },
    { id: 'moons2', no: 'III', name: 'The Waning Moons', lvl: 45, rec: 48, kit: KIT, bosses: ['chariot', 'hermit', 'fortune', 'hanged'] },
    { id: 'wardens2', no: 'IV', name: 'The Upper Wardens', lvl: 56, rec: 52, kit: KIT, bosses: ['guard_harabah', 'guard_adamah', 'guard_empyrean'] },
    { id: 'deep', no: 'V', name: 'The Deep', lvl: 72, rec: 62, kit: KIT, bosses: ['guard_monad', 'guard_monad_deep', 'guard_monad_waltz'] },
    { id: 'doors', no: 'VI', name: 'The Sealed Doors', lvl: 60, rec: 66, kit: KIT, bosses: ['super_abbess', 'super_procession', 'super_cavalier'] },
    { id: 'heights', no: 'VII', name: 'The Heights', lvl: 80, rec: 99, kit: KIT, bosses: ['guard_raqia', 'guard_zebul', 'guard_araboth', 'super_eclipse'] }
  ];
  const MODS = [
    { id: 'bare', name: 'Bare Hands', desc: 'No items at all.' },
    { id: 'shuffle', name: 'Shuffled Hearts', desc: 'Every Shadow’s weaknesses are dealt out again. Analyze starts blank.' },
    { id: 'crit', name: 'Critical Moon', desc: 'Critical hits come about twice as often, on both sides.' },
    { id: 'glass', name: 'Glass Moon', desc: 'Shadows have a fifth less HP and hit 30% harder.' }
  ];
  const PAY = { C: { plumes: 1, mat: ['guardian_crest', 1] }, B: { plumes: 2, mat: ['velvet_thread', 2] }, A: { plumes: 3, card: 4 }, S: { plumes: 4, card: 5 } };
  const FEAT = { C: 1, B: 2, A: 3, S: 4 };
  // Looks only these trials give (cosmetics.js kinds; drawn in CSS, no image art).
  const LOOKS = [
    ['tr-tt-challenger', 'title', 'Challenger Title', 'SR', 'Rose on black, a card held up to the light. For a first Velvet Trial cleared.', { title: ['#ff4f9e', '#14070f'] }],
    ['tr-wp-checker', 'wallpaper', 'Velvet Checker', 'SR', 'A pink and black floor from a room with no doors. For rank A on three Velvet Trials.',
      { css: 'conic-gradient(from 45deg, #ff4f9e 0 25%, #14070f 0 50%, #ff4f9e 0 75%, #14070f 0) 0 0 / 56px 56px, #14070f' }],
    ['tr-bui-rose', 'battleui', 'Trial Rose Battle', 'UR', 'Hot rose and ink, the colours of a hard week. For rank S on a Featured Trial.', { pal: 'trialrose' }],
    ['tr-tt-champion', 'title', 'Champion Title', 'UR', 'Blush pink on midnight, every card face up. For rank S on every Velvet Trial.', { title: ['#ffd6e8', '#14070f'] }]
  ];
  if (window.FemcCosmetics && Array.isArray(window.FemcCosmetics.ITEMS)) {
    const C = window.FemcCosmetics;
    if (C.PAL && !C.PAL.trialrose) C.PAL.trialrose = ['#ff2a75', '#ff6fa3', '#ffd0e0', '#0d0408'];
    LOOKS.forEach(([id, kind, name, r, desc, more]) => { if (!C.byId(id)) C.ITEMS.push(Object.assign({ id, kind, name, r, desc, pool: false }, more)); });
  }
  const LINES = {
    hi: ['Shall we test what you have become? I keep a few old opponents close, for exactly this.', 'My master permits a little sport between cards. Pick a trial, and do try to look elegant.', 'Every Shadow you have felled left an echo with me. I can call them back, one after another.'],
    none: ['Fell a great Shadow first. I can only call back the ones you have already beaten.'],
    win: ['Splendid. I shall write that down in silver.', 'You make it look like a dance. I am a little jealous.'],
    lose: ['Ah. The cards were unkind. They usually are, the first time.']
  };

  /* ── State ── */
  function tr() {
    const g = GA().gs();
    let t = g.trials;
    if (!t || typeof t !== 'object') t = g.trials = {};
    t.v = 1;
    if (!Array.isArray(t.seen)) t.seen = [];
    ['best', 'paid', 'feat'].forEach(k => { if (!t[k] || typeof t[k] !== 'object' || Array.isArray(t[k])) t[k] = {}; });
    if (!Array.isArray(t.looks)) t.looks = [];
    if (!t.wk || typeof t.wk !== 'object') t.wk = {};
    t.runs = +t.runs || 0; t.clears = +t.clears || 0;
    Object.keys(t.paid).forEach(k => { if (!Array.isArray(t.paid[k])) t.paid[k] = []; });
    return t;
  }
  const week = () => Math.floor((S().day + 1) / 7); // core.js weekOf
  const wkKey = () => `${S().runId || 'run'}:${week()}`;
  function wk() { const t = tr(), k = wkKey(); if (t.wk.key !== k) t.wk = { key: k, duels: 0 }; t.wk.duels = +t.wk.duels || 0; return t.wk; }
  const bs = () => S().battleSave || S().battleCarry || null;
  const hash = str => { let h = 2166136261; for (const ch of String(str)) h = Math.imul(h ^ ch.charCodeAt(0), 16777619); return h >>> 0; };

  /* ── Bosses ── */
  let CAT = null;
  function catalogue() {
    if (CAT) return CAT;
    const d = D(), out = {};
    d.ops.forEach(o => { out[o.id] = { id: o.id, type: 'op', name: o.name, lvl: Math.max(...o.group.map(k => d.enemies[k].lvl)), group: o.group.slice(), bg: o.arena, op: { id: o.id, name: o.name, arcana: o.arcana }, par: o.group.length > 1 ? 7 : 6 }; });
    d.floors.forEach(f => {
      if (f.guardian && d.enemies[f.guardian] && !out[f.guardian]) { const e = d.enemies[f.guardian]; out[f.guardian] = { id: f.guardian, type: 'guard', name: e.name, lvl: e.lvl, group: [f.guardian], bg: f.bg, floor: f.gameFloor, par: f.ngp ? 10 : 5 }; }
      if (f.superboss && d.enemies[f.superboss] && !out[f.superboss]) { const e = d.enemies[f.superboss]; out[f.superboss] = { id: f.superboss, type: 'super', name: e.name, lvl: e.lvl, group: [f.superboss].concat(e.escort || []), bg: f.bg, floor: f.gameFloor, par: f.superboss === 'super_tiger' ? 16 : 9 }; }
    });
    return (CAT = out);
  }
  // A group lifted to level `to` (the boss's own level and its escorts' by the same step); never lowered.
  function lift(boss, to) {
    const up = Math.max(0, Math.round(to - boss.lvl)), d = D();
    return boss.group.map(k => { const [kind, at] = String(k).split('@'); const L = at ? +at : d.enemies[kind].lvl; return up || at ? `${kind}@${L + up}` : kind; });
  }
  function beaten() {
    const s = S(), C = catalogue(), b = bs() || {}, tt = b.tt || {}, late = b.late || {}, out = new Set(), t = tr();
    D().ops.forEach(o => { if ((s.ngp || 0) > 0 || (s.tartarus && s.tartarus.bosses || []).includes(o.id)) out.add(o.id); });
    (tt.guardians || []).forEach(fid => { const f = D().floors.find(x => x.id === fid); if (f && f.guardian) out.add(f.guardian); });
    const top = +late.top || 0;
    Object.values(C).forEach(x => { if (x.type === 'guard' && x.floor && top > x.floor) out.add(x.id); });
    (tt.supers || []).forEach(k => out.add(k));
    if (late.zenith) out.add('super_tiger');
    t.seen.forEach(k => { if (C[k]) out.add(k); });
    out.forEach(k => { if (!t.seen.includes(k)) t.seen.push(k); });
    return out;
  }
  const anyBeaten = () => live() && beaten().size > 0;
  const solarLv = () => { const b = bs(); return (b && b.lvl) || 1; };
  function trialState(T, have = beaten()) {
    const n = T.bosses.filter(k => have.has(k)).length;
    return { open: n === T.bosses.length, any: n > 0, n };
  }
  const openTrials = (have = beaten()) => TRIALS.filter(T => trialState(T, have).open);
  function featured(have = beaten()) {
    const list = openTrials(have); if (!list.length) return null;
    const h = hash(wkKey());
    return { T: list[h % list.length], mod: MODS[(h >>> 8) % MODS.length] };
  }

  /* ── The request (battle trials-battle.js) ── */
  function fightOf(id, to) {
    const x = catalogue()[id];
    return { group: lift(x, to), bg: x.bg, name: x.name, par: x.par, op: x.op || null };
  }
  function request(kind, id) {
    if (kind === 'duel') {
      const x = catalogue()[id];
      return { id: 'duel:' + id, name: `Duel · ${x.name}`, kicker: 'Velvet Duel', duel: true, featured: false, mod: null, heal: 0, kit: KIT, fights: [fightOf(id, Math.max(x.lvl, solarLv()))] };
    }
    const F = kind === 'featured' ? featured() : null, T = F ? F.T : TRIALS.find(t => t.id === id);
    if (!T) return null;
    return { id: T.id, name: `Trial ${T.no} · ${T.name}`, kicker: F ? 'Featured Trial · this week' : 'Velvet Trial', duel: false, featured: !!F, mod: F ? { ...F.mod } : null,
      heal: HEAL, kit: F && F.mod.id === 'bare' ? {} : { ...T.kit }, fights: T.bosses.map(k => fightOf(k, T.lvl)) };
  }
  function start(kind, id) {
    const s = S();
    if (!live() || (s.handoff && s.handoff.status === 'pending')) return false;
    if (kind === 'duel' ? !beaten().has(id) : kind === 'featured' ? !featured() : !trialState(TRIALS.find(t => t.id === id) || { bosses: ['?'] }).open) return false;
    const req = request(kind, id);
    G.save();
    UI().battleCard({ kind: 'trial', title: req.name, desc: req.mod ? `${req.mod.name}: ${req.mod.desc}` : 'A Velvet Trial.', forced: true, trial: req }, { ctx: { type: 'trial' }, snap: null }, null, 'trial');
    return true;
  }

  /* ── Score ── */
  function score(T, t) {
    const n = (T.fights || []).length || 1;
    let sc = 0;
    (t.fights || []).forEach((f, i) => { const par = (T.fights[i] && T.fights[i].par) || 6; sc += 500 + Math.round(200 * clamp((2 * par - (f.rounds || 0)) / par, 0, 1)) + (f.ko ? 0 : 300); });
    sc += Math.round(100 * n * clamp(+t.hp || 0, 0, 1));
    let pct = sc / (1100 * n);
    if (T.mod) { sc = Math.round(sc * 1.2); pct = Math.min(1, pct * 1.1); }
    return { score: sc, pct: +pct.toFixed(3), rank: pct >= 0.9 ? 'S' : pct >= 0.75 ? 'A' : pct >= 0.6 ? 'B' : 'C' };
  }
  const better = (a, b) => !b || RANKS.indexOf(a.rank) > RANKS.indexOf(b.rank) || (a.rank === b.rank && a.score > b.score);

  /* ── After the fight (core.js applyResult, kind 'trial'): records and rewards. Returns the results summary. ── */
  function apply(h, r) {
    const T = (h.request && h.request.trial) || null, t = (r && r.trial) || null, st = tr(), s = S();
    const sum = { outcome: r.outcome, yen: 0, items: [], fragments: [], bosses: [], exp: {}, simulated: !!r.simulated, trial: null };
    if (!T) return sum;
    beaten(); // the bosses seen so far are written down (New Game+ keeps them)
    const res = { id: T.id, name: T.name, kicker: T.kicker, mod: T.mod ? T.mod.name : null, duel: !!T.duel, featured: !!T.featured, of: T.fights.length,
      cleared: (t && t.cleared) || 0, outcome: (t && t.outcome) || (r.simulated ? 'void' : 'lose'), rounds: (t && t.rounds) || 0, kos: (t && t.kos) || 0, hp: (t && t.hp) || 0, ms: (t && t.ms) || 0, got: [], newBest: false };
    sum.trial = res;
    if (!t || t.id !== T.id || t.abandoned || t.outcome === 'abandoned') { res.outcome = t && t.outcome === 'gaveup' ? 'gaveup' : t ? 'abandoned' : res.outcome; st.last = res; return sum; }
    st.runs++;
    if (t.outcome !== 'clear') { st.last = res; return sum; }
    st.clears++;
    Object.assign(res, score(T, t));
    const rec = { rank: res.rank, score: res.score, rounds: res.rounds, ms: res.ms, day: s.day };
    const g = GA().gs(), got = res.got;
    const plumes = n => { if (n > 0) { g.plumes += n; got.push(`+${n} Velvet Plume${n === 1 ? '' : 's'}`); } };
    if (T.featured) {
      const k = wkKey(), f = st.feat[k] || (st.feat[k] = { rank: null, score: 0, paid: 0 });
      if (better(rec, f.rank ? f : null)) { res.newBest = true; f.rank = rec.rank; f.score = rec.score; }
      const owe = FEAT[f.rank] - (f.paid || 0); if (owe > 0) { plumes(owe); f.paid = FEAT[f.rank]; }
      if (res.rank === 'S') look('tr-bui-rose', got);
      // Old weeks' records shrink to the last eight.
      Object.keys(st.feat).sort((a, b) => (+b.split(':').pop()) - (+a.split(':').pop())).slice(8).forEach(x => { if (x !== k) delete st.feat[x]; });
    } else if (T.duel) {
      const key = T.id; if (better(rec, st.best[key])) { res.newBest = true; st.best[key] = rec; }
      const w = wk(); if (w.duels < DUEL_CAP) { w.duels++; plumes(1); } else got.push(`No plumes: the Duels’ ${DUEL_CAP} a week are paid`);
    } else {
      if (better(rec, st.best[T.id])) { res.newBest = true; st.best[T.id] = rec; }
      const paid = st.paid[T.id] || (st.paid[T.id] = []);
      const bb = s.battleSave || G.ensureBattleSave(), tier = Math.min(7, 2 + TRIALS.findIndex(x => x.id === T.id));
      RANKS.slice(0, RANKS.indexOf(res.rank) + 1).forEach(rk => {
        if (paid.includes(rk)) return;
        paid.push(rk);
        const p = PAY[rk];
        plumes(p.plumes);
        if (p.mat && bb && D().materials[p.mat[0]]) { bb.mats[p.mat[0]] = (bb.mats[p.mat[0]] || 0) + p.mat[1]; got.push(`${D().materials[p.mat[0]].name} ×${p.mat[1]}`); }
        if (p.card && bb && B()) { const c = B().rollCard(Math.random, { tier, r: p.card, minR: p.card }), rr = B().addCard(bb, c); got.push(rr.card ? `${B().cardName(c)} ★${c.r}` : `Tarot Dust ×${rr.dust} (the card box was full)`); }
      });
      look('tr-tt-challenger', got);
      const ranked = rk => TRIALS.filter(x => st.best[x.id] && RANKS.indexOf(st.best[x.id].rank) >= RANKS.indexOf(rk)).length;
      if (ranked('A') >= 3) look('tr-wp-checker', got);
      if (ranked('S') === TRIALS.length) look('tr-tt-champion', got);
    }
    st.last = res;
    return sum;
  }
  function look(id, got) {
    const st = tr(), C = window.FemcCosmetics;
    if (st.looks.includes(id) || !C || !C.byId(id)) return;
    st.looks.push(id); C.grantItem(id); got.push(`New look: ${C.byId(id).name}`);
  }

  /* ── Screens ── */
  const fmtMs = ms => { const s = Math.round((ms || 0) / 1000); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };
  const badge = (rank, cls = '') => `<b class="g-tr-rank r-${rank || 'none'}${cls ? ' ' + cls : ''}">${rank || '–'}</b>`;
  const head = (title, sub, say) => { const pic = G.portrait('elizabeth', 'happy'); return `<div class="g-st-head"><h2>${esc(title)}<small>${esc(sub)}</small></h2><button type="button" class="g-btn small" data-close><span>Back</span></button></div>
      <div class="g-shop-top">${pic ? `<img src="${pic}" alt="">` : ''}<p class="g-shop-say g-tr-say">${esc(say)}</p></div>`; };
  let again = null;
  function open(done) {
    if (!live()) return null;
    const have = beaten(), st = tr(), w = wk(), F = featured(have), bg = G.background('The Velvet Room', 'Daytime');
    const say = have.size ? LINES.hi[S().day % LINES.hi.length] : LINES.none[0];
    const C = catalogue();
    const fb = F ? st.feat[wkKey()] : null;
    const card = T => {
      const ts = trialState(T, have), b = st.best[T.id], paid = st.paid[T.id] || [];
      return `<li class="g-tr-card${ts.open ? '' : ' shut'}" data-tr="${T.id}">
        <p class="g-tr-top"><span class="g-tr-no">Trial ${T.no}</span><b>${ts.any ? esc(T.name) : 'Sealed'}</b>${badge(b && b.rank)}</p>
        <ol class="g-tr-slots">${T.bosses.map(k => `<li class="${have.has(k) ? '' : 'q'}">${have.has(k) ? esc(C[k].name) : '???'}</li>`).join('')}</ol>
        <p class="g-tr-meta">${T.bosses.length} fights · tuned for Lv ${T.rec}${b ? ` · best ${b.score.toLocaleString()} in ${b.rounds} turns` : ''}</p>
        <p class="g-tr-pay">${RANKS.map(rk => `<span class="${paid.includes(rk) ? 'got' : ''}" title="${esc(payLine(rk))}">${rk}</span>`).join('')}<small>First clear at each rank: C 1 · B 2 · A 3 · S 4 plumes, plus a material (C, B) or a card (A ★4, S ★5)</small></p>
        <div class="g-row"><button type="button" class="g-btn${ts.open ? ' pink' : ''} small" data-tr-go="${T.id}"${ts.open ? '' : ' disabled'}><span>${ts.open ? 'Begin' : `Beat its bosses first (${ts.n} / ${T.bosses.length})`}</span></button></div></li>`;
    };
    const duels = [...have].filter(k => C[k]).sort((a, b) => C[a].lvl - C[b].lvl);
    const o = UI().overlay(`<div class="g-ga g-tr"${bg ? ` style="--pic:url('${bg.url}')"` : ''}>${head('Velvet Trials', 'The Velvet Room · old opponents, called back', say)}
      <p class="g-ga-own"><span>Velvet Plumes <b>${GA().gs().plumes}</b></span><span>Trials cleared <b>${TRIALS.filter(T => st.best[T.id]).length} / ${TRIALS.length}</b></span><span>Duels this week <b>${w.duels} / ${DUEL_CAP}</b></span></p>
      <section class="g-tr-feat${F ? '' : ' shut'}"><p class="g-kicker">Featured Trial · this week</p>
        ${F ? `<p class="g-tr-top"><span class="g-tr-no">Trial ${F.T.no}</span><b>${esc(F.T.name)}</b>${badge(fb && fb.rank)}</p>
          <p class="g-tr-mod"><b>${esc(F.mod.name)}</b> ${esc(F.mod.desc)}</p>
          <p class="g-tr-meta">Score ×1.2. This week’s best pays C 1 · B 2 · A 3 · S 4 plumes (once, the difference when you improve)${fb && fb.paid ? `: ${fb.paid} paid` : ''}. Rank S here once: a battle theme.</p>
          <div class="g-row"><button type="button" class="g-btn pink small" data-tr-feat><span>Take the Featured Trial</span></button></div>`
          : '<p class="g-note">Open any trial (beat all of its bosses) and Elizabeth will feature one each week, with a twist.</p>'}</section>
      <p class="g-kicker">Trials</p><ul class="g-tr-list">${TRIALS.map(card).join('')}</ul>
      <p class="g-kicker">Duels</p><p class="g-note small">One boss, at Solar’s level or its own. A plume a win, ${DUEL_CAP} a week.</p>
      <div class="g-tr-duels">${duels.map(k => { const b = st.best['duel:' + k]; return `<button type="button" class="g-btn small" data-tr-duel="${k}"><span>${esc(C[k].name)}</span>${b ? badge(b.rank, 'mini') : ''}</button>`; }).join('') || '<p class="g-note">Nothing yet.</p>'}</div>
      <p class="g-note small g-tr-rules">No EXP, yen or spoils in here, and nothing outside changes. Between a trial’s fights everyone gets 25% of their HP and SP back; the trial brings its own items. Rank by score: S 90% of the best possible, A 75%, B 60%, else C.</p></div>`, 'g-ga-ov g-tr-ov', () => done?.());
    const go = (kind, id) => { G.sfx('femc-click'); o.el.dataset.locked = '1'; if (!start(kind, id)) { delete o.el.dataset.locked; } };
    o.el.querySelectorAll('[data-tr-go]').forEach(b => b.addEventListener('click', () => go('trial', b.dataset.trGo)));
    o.el.querySelector('[data-tr-feat]')?.addEventListener('click', () => go('featured'));
    o.el.querySelectorAll('[data-tr-duel]').forEach(b => b.addEventListener('click', () => go('duel', b.dataset.trDuel)));
    setTimeout(() => (o.el.querySelector('[data-tr-feat]') || o.el.querySelector('[data-tr-go]:not([disabled])') || o.el.querySelector('[data-tr-duel]') || o.el.querySelector('[data-close]'))?.focus({ preventScroll: true }), 40);
    return o;
  }
  function payLine(rk) { const p = PAY[rk]; return `${p.plumes} plume${p.plumes > 1 ? 's' : ''}${p.mat ? ` + ${D().materials[p.mat[0]]?.name || p.mat[0]}` : ''}${p.card ? ` + a ★${p.card} card` : ''}`; }

  /* The result screen (ui.js resultsCard for kind 'trial'). done: back to ui.js (resumePending → reopen). */
  function results(h, sum, done) {
    const t = sum.trial || tr().last || {}, clear = t.outcome === 'clear';
    const word = clear ? 'Trial complete' : t.outcome === 'gaveup' ? 'Given up' : t.outcome === 'abandoned' || t.outcome === 'void' ? 'Set down' : 'Defeated';
    const say = clear ? LINES.win[(t.score || 0) % LINES.win.length] : LINES.lose[0];
    const o = UI().overlay(`<div class="g-tr-res${clear ? ' clear' : ''}">
      <p class="g-kicker">${esc(t.kicker || 'Velvet Trial')}${t.mod ? ` · ${esc(t.mod)}` : ''}</p>
      <h2 class="g-res-word">${esc(word)}<small>${esc(t.name || '')}</small></h2>
      <div class="g-tr-res-main">${clear ? `${badge(t.rank, 'big')}<div class="g-tr-score"><b>${(t.score || 0).toLocaleString()}</b><small>score${t.newBest ? ' · <i>new best</i>' : ''}</small></div>` : `<div class="g-tr-score"><b>${t.cleared || 0} / ${t.of || 0}</b><small>fights won</small></div>`}</div>
      ${clear ? `<ul class="g-tr-stats"><li><span>Turns</span><b>${t.rounds}</b></li><li><span>Knockouts</span><b>${t.kos ? `${t.kos} fight${t.kos === 1 ? '' : 's'}` : 'none'}</b></li><li><span>HP left</span><b>${Math.round((t.hp || 0) * 100)}%</b></li><li><span>Time</span><b>${fmtMs(t.ms)}</b></li></ul>` : '<p class="g-note">No reward this time. Nothing outside the Velvet Room changed.</p>'}
      ${(t.got || []).length ? `<ul class="g-gains">${t.got.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}
      <p class="g-tr-say2">“${esc(say)}”</p>
      <div class="g-row"><button type="button" class="g-btn pink" data-tr-back>Back to the trials ▸</button>${!t.featured && !t.duel && t.id ? '<button type="button" class="g-btn" data-tr-again>Try again</button>' : ''}</div></div>`, 'g-tr-res-ov', () => done());
    o.el.dataset.locked = '1';
    o.el.querySelector('[data-tr-back]').addEventListener('click', () => { again = null; o.close(); });
    o.el.querySelector('[data-tr-again]')?.addEventListener('click', () => { again = { kind: 'trial', id: t.id }; o.close(); });
    return o;
  }
  // After a trial's results (ui.js resumePending): the Velvet Room and the trials again (or the same trial straight away).
  function reopen() {
    const a = again; again = null;
    if (!live()) return;
    setTimeout(() => {
      GA().open('velvet', () => UI().run());
      if (a) { if (!start(a.kind, a.id)) open(); } else open();
    }, 60);
  }

  /* ── The Velvet Room's button (gacha.js openVelvet) ── */
  function velvetButtons() {
    if (!anyBeaten()) return '';
    const F = featured(), fb = F ? tr().feat[wkKey()] : null;
    return `<button type="button" class="g-btn small" data-tr-open><span>Velvet Trials${F && !fb ? ' · Featured' : ''}</span></button>`;
  }
  function wireVelvet(el, repaint) { el.querySelector('[data-tr-open]')?.addEventListener('click', () => { G.sfx('femc-click'); open(() => repaint?.()); }); }

  return { TRIALS, MODS, PAY, FEAT, LOOKS, DUEL_CAP, HEAL, tr, beaten, catalogue, lift, featured, request, start, score, apply, results, reopen, open, velvetButtons, wireVelvet, anyBeaten, trialState };
})();
