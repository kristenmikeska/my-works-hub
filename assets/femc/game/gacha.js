/* Persona 3: Solstice · the gacha, both kinds (roadmap section 7 batch D, Kat's pick). No real money, ever: yen, Capsule Tickets
   and Velvet Plumes only, all earned by playing.

   ── The capsule machine (Paulownia Mall · Capsule Corner; places.js activity `capsule`, `gacha: 'capsule'`) ──
     One turn: ¥500 or one Capsule Ticket (an item, data in build.js: Tartarus drops one now and then, Shuffle Time's Hierophant
     gives one or two). Odds are shown on the machine (CAP.odds). Pity: Super Rare or better at least every CAP.pitySR turns,
     an Ultra at least every CAP.pityUR turns; both counters are on the machine. Prizes:
       Common: field items and Tarot Dust. Rare: a cast keychain (only people Solar has met; a new one before any repeat),
       a phone case, a better item. Super Rare: a capsule accessory (build.js gear, `gacha: 'capsule'`), a sealed Revelation
       card, a rarer case. Ultra: the Golden Sun Keyring, the gold case, a ★5 card, Soma.
     Repeats (keychains and cases you already have) become Capsule Stars; ten stars trade for a ticket.
   ── Velvet Room draws (Paulownia Mall · The Velvet Room, `gacha: 'velvet'`, from 4/8) ──
     Elizabeth deals three cards face down; pick one. ¥3,000 or 3 Velvet Plumes (Elizabeth's Compendium Credit, rank 2:
     25% less yen and one plume less). Odds VEL.odds; Super Rare or better every VEL.pitySR draws, Ultra every VEL.pityUR.
     Prizes: skill cards (build.js SKILL_CARDS, by how far the year has gone), Velvet Thread, ★4/★5 Revelation cards and
     Elizabeth's rare gear (build.js, `gacha: 'velvet'`).
     Velvet Plumes: +1 a Tartarus night, +3 a full moon won (core.js applyResult → afterFight), and +1 for every Compendium
     entry, claimed from Elizabeth (S.registered; claimed ids in S.gacha.credited).
   Save: S.gacha (core.js fresh; gs() fills a missing or older one): { v, plumes, stars, pulls, draws, pity: { cap: { sr, ur },
     vel: { sr, ur } }, keys: { id: copies }, cases: [ids], caseOn, credited: [ids], last }. Prizes land where the rest of the
     game keeps them: items in S.inventory, gear / materials / skill cards / Revelation cards in S.battleSave (build.js rules).
   Menu → Collection (menu.js) shows the keychains (by set), the phone cases (equip one: the phone wears it) and both
   machines' counters. Tests: FemcGacha.rng can be replaced with a seeded function; tests/femc_extras.py. */
window.FemcGacha = (() => {
  const G = window.FemcGame;
  if (!G) return null;
  const UI = () => window.FemcGameUI, D = () => window.FEMC_BATTLE_DATA, B = () => window.FemcBuild;
  const S = () => G.S;
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const yen = n => `¥${Math.round(n || 0).toLocaleString('en-US')}`;
  const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const api = { rng: Math.random };
  const R = () => api.rng();
  const pick = a => a[Math.floor(R() * a.length)];

  /* ── Data ── */
  const RARITY = {
    C: { name: 'Common', stars: 1, color: '#f7f2f5' }, R: { name: 'Rare', stars: 2, color: '#6ab0ff' },
    SR: { name: 'Super Rare', stars: 3, color: '#c58bff' }, UR: { name: 'Ultra', stars: 4, color: '#ffd36b' }
  };
  const CAP = { price: 500, odds: { C: 0.6, R: 0.3, SR: 0.085, UR: 0.015 }, pitySR: 10, pityUR: 60, stars: { C: 0, R: 1, SR: 2, UR: 5 }, starsPerTicket: 10 };
  const VEL = { price: 3000, plumes: 3, odds: { R: 0.7, SR: 0.25, UR: 0.05 }, pitySR: 5, pityUR: 30 };
  // Keychains, by set. Solar is always in the machine; everyone else once she has met them (no spoilers from a capsule).
  const SETS = [
    { id: 'sees', name: 'S.E.E.S.', color: '#4b9bff', ids: ['solar', 'akihiko', 'yukari', 'junpei', 'mitsuru', 'fuuka', 'aigis', 'ken', 'koromaru', 'shinjiro'] },
    { id: 'old', name: 'Old Friends', color: '#ff4f9e', ids: ['haechan', 'jungwon', 'jihoon', 'minji', 'hanni', 'hyein', 'yunjin', 'mark', 'jaehyun', 'cherry', 'sunoo', 'junkyu'] },
    { id: 'new', name: 'New Friends', color: '#7dffc0', ids: ['ann', 'kasumi', 'haru', 'kuromi', 'mymelody', 'rio', 'saori', 'kiriko'] }
  ];
  const CASES = [
    { id: 'sakura', name: 'Sakura Phone Case', r: 'R', desc: 'Pale pink with falling petals.' },
    { id: 'featherman', name: 'Featherman R Case', r: 'R', desc: 'Red, loud and heroic. Ken approves.' },
    { id: 'koro', name: 'Paw Print Case', r: 'R', desc: 'White, with a trail of little paws.' },
    { id: 'moonlight', name: 'Moonlight Case', r: 'SR', desc: 'Midnight navy and a silver crescent.' },
    { id: 'velvet', name: 'Velvet Case', r: 'SR', desc: 'The exact blue of a room with no doors.' },
    { id: 'gold', name: 'Golden Sun Case', r: 'UR', desc: 'Gold all over. Impossible to lose in a bag.' }
  ];
  const CAP_C = [['item', 'medicine', 2], ['item', 'snuff_soul', 1], ['item', 'patra_gem', 1], ['item', 'revival_bead', 1], ['item', 'dis_poison', 2], ['mat', 'tarot_dust', 6]];
  const CAP_R_ITEMS = [['item', 'bead', 1], ['item', 'chewing_soul', 1], ['item', 'revival_bead', 2], ['mat', 'tarot_dust', 14]];
  const capGear = r => Object.keys(D().gear).filter(k => D().gear[k].gacha === 'capsule' && (r === 'UR' ? k === 'cap_gold_sun' : k !== 'cap_gold_sun'));
  const velGear = () => Object.keys(D().gear).filter(k => D().gear[k].gacha === 'velvet' && D().gear[k].tier <= 2 + (S().tartarus.bosses || []).length);
  const LINES = {
    capHi: ['A wall of capsule machines hums by the escalator. One of them has a hand-written sign: NEW KEYCHAINS!', 'The machine’s dome is full of little plastic moons.', 'A kid at the next machine is on his ninth turn. He looks very calm about it.'],
    velHi: ['“Ah, Solar. Shall we see what the cards think of you today?”', '“I have shuffled the deck twice and dusted it once. It is ready when you are.”', '“The cards are not gambling. Gambling is when one does not know the odds. I have written them down for you.”'],
    velPick: ['“Interesting. Very interesting.”', '“The card chose you as much as you chose it. That is how this works. I think.”', '“Please do not tell my master how much I enjoy this.”'],
    velClaim: ['“Your Compendium has grown. Every new page is worth a plume to me, and I always pay my debts.”'],
    velBroke: ['“The Velvet Room does not extend credit. Except to friends. Even then, only a little.”']
  };

  /* ── State ── */
  function fresh() { return { v: 1, plumes: 0, stars: 0, pulls: 0, draws: 0, pity: { cap: { sr: 0, ur: 0 }, vel: { sr: 0, ur: 0 } }, keys: {}, cases: [], caseOn: null, credited: [], last: null }; }
  function gs() {
    const s = S();
    const f = fresh();
    if (!s.gacha || typeof s.gacha !== 'object') s.gacha = f;
    const g = s.gacha;
    Object.keys(f).forEach(k => { if (g[k] === undefined || (f[k] !== null && (g[k] === null || typeof g[k] !== typeof f[k]))) g[k] = f[k]; });
    ['cap', 'vel'].forEach(k => { g.pity[k] = Object.assign({ sr: 0, ur: 0 }, g.pity[k] || {}); });
    if (!Array.isArray(g.cases)) g.cases = []; if (!Array.isArray(g.credited)) g.credited = [];
    return g;
  }
  const tickets = () => S().inventory.capsule_ticket || 0;
  const bsave = () => G.ensureBattleSave();

  /* ── Rules ── */
  function rollTier(odds) {
    let x = R();
    const keys = Object.keys(odds);
    for (const k of keys.slice().reverse()) { if (x < odds[k]) return k; x -= odds[k]; }
    return keys[0];
  }
  // A rarity with pity. kind: 'cap' | 'vel'. Pity counts turns since the last SR+ / UR, and the turn that would reach the limit is lifted.
  function rarity(kind) {
    const cfg = kind === 'cap' ? CAP : VEL, p = gs().pity[kind];
    let r = rollTier(cfg.odds);
    if (p.ur + 1 >= cfg.pityUR) r = 'UR';
    else if (r !== 'UR' && r !== 'SR' && p.sr + 1 >= cfg.pitySR) r = 'SR';
    p.ur = r === 'UR' ? 0 : p.ur + 1;
    p.sr = r === 'UR' || r === 'SR' ? 0 : p.sr + 1;
    return r;
  }
  const keyEligible = id => id === 'solar' || G.isMet(id);
  const keyName = id => (id === 'solar' ? 'Solar' : (G.LINKS[id]?.short || G.name(id)));
  const keySet = id => SETS.find(st => st.ids.includes(id));
  // Give a prize; returns { r, kind, id, name, desc, n, dup, stars }.
  function grant(r, p) {
    const g = gs(), out = { r, kind: p[0], id: p[1], n: p[2] || 1 };
    if (p[0] === 'item') { G.D.battle.items[p[1]] && (S().inventory[p[1]] = (S().inventory[p[1]] || 0) + out.n); const it = D().items[p[1]]; out.name = it.name + (out.n > 1 ? ` ×${out.n}` : ''); out.desc = it.desc; }
    else if (p[0] === 'mat') { const b = bsave(); b.mats[p[1]] = (b.mats[p[1]] || 0) + out.n; out.name = `${D().materials[p[1]].name} ×${out.n}`; out.desc = D().materials[p[1]].desc; }
    else if (p[0] === 'gear') { const b = bsave(); b.gear.owned[p[1]] = (b.gear.owned[p[1]] || 0) + 1; const ge = D().gear[p[1]]; out.name = ge.name; out.desc = window.FemcBattleSave ? window.FemcBattleSave.gearLine(p[1]) : ge.desc; out.slot = ge.slot; }
    else if (p[0] === 'key') {
      g.keys[p[1]] = (g.keys[p[1]] || 0) + 1; out.name = `${keyName(p[1])} keychain`; out.set = keySet(p[1]).name; out.desc = `${keySet(p[1]).name} set · ${setCount(keySet(p[1]))}/${keySet(p[1]).ids.length}`;
      if (g.keys[p[1]] > 1) { out.dup = true; out.stars = CAP.stars[r]; g.stars += out.stars; }
    } else if (p[0] === 'case') {
      const c = CASES.find(x => x.id === p[1]); out.name = c.name; out.desc = c.desc;
      if (g.cases.includes(c.id)) { out.dup = true; out.stars = CAP.stars[r]; g.stars += out.stars; } else g.cases.push(c.id);
    } else if (p[0] === 'card') {
      const Bd = B(), b = bsave(), c = Bd.rollCard(R, { tier: 2 + (S().tartarus.bosses || []).length, r: p[2] === 5 ? 5 : null, minR: p[2] || 3 }), res = Bd.addCard(b, c);
      out.n = 1; out.name = res.card ? `${Bd.cardName(c)} ★${c.r}` : `Tarot Dust ×${res.dust}`; out.desc = res.card ? 'A Revelation card. Equip it from the menu’s Cards tab.' : 'The card box was full, so it became dust.';
    } else if (p[0] === 'skill') {
      const b = bsave(); b.skillCards = b.skillCards || {}; b.skillCards[p[1]] = (b.skillCards[p[1]] || 0) + 1;
      out.name = `Skill card: ${D().skills[p[1]].name}`; out.desc = `${D().skills[p[1]].desc || ''} Teach it from the menu’s Cards tab.`;
    }
    return out;
  }
  function setCount(st) { const g = gs(); return st.ids.filter(id => g.keys[id] > 0).length; }
  const setDone = st => setCount(st) === st.ids.length;
  // What the capsule holds, for a rarity.
  function capPrize(r) {
    const g = gs();
    if (r === 'C') return pick(CAP_C);
    if (r === 'R') {
      const x = R();
      if (x < 0.7) {
        const ok = SETS.flatMap(st => st.ids).filter(keyEligible), fresh = ok.filter(id => !(g.keys[id] > 0));
        return ['key', fresh.length ? pick(fresh) : pick(ok)];
      }
      if (x < 0.85) { const cs = CASES.filter(c => c.r === 'R'), nw = cs.filter(c => !g.cases.includes(c.id)); return ['case', pick(nw.length ? nw : cs).id]; }
      return pick(CAP_R_ITEMS);
    }
    const owned = k => (bsave().gear.owned[k] || 0) > 0 || S().gear.includes(k);
    if (r === 'SR') {
      const x = R(), gear = capGear('SR').filter(k => !owned(k)), cs = CASES.filter(c => c.r === 'SR' && !g.cases.includes(c.id));
      if (x < 0.45 && gear.length) return ['gear', pick(gear)];
      if (x < 0.65 && cs.length) return ['case', pick(cs).id];
      if (x < 0.85) return ['card', null, 4];
      return pick([['item', 'bead_chain', 1], ['item', 'chewing_soul', 2]]);
    }
    const x = R();
    if (!owned('cap_gold_sun') && x < 0.4) return ['gear', 'cap_gold_sun'];
    if (!g.cases.includes('gold') && x < 0.65) return ['case', 'gold'];
    if (x < 0.85) return ['card', null, 5];
    return ['item', 'soma', 1];
  }
  const capCan = how => (how === 'ticket' ? tickets() > 0 : S().yen >= CAP.price);
  /* One turn of the machine. how: 'yen' | 'ticket'. Returns the prize (see grant) or null. */
  function pull(how = 'yen') {
    if (!capCan(how)) return null;
    if (how === 'ticket') { S().inventory.capsule_ticket -= 1; if (!S().inventory.capsule_ticket) delete S().inventory.capsule_ticket; }
    else S().yen -= CAP.price;
    const g = gs(), r = rarity('cap'), prize = grant(r, capPrize(r));
    g.pulls += 1; g.last = { at: S().day, r, name: prize.name };
    if (prize.kind === 'key') prize.complete = setDone(keySet(prize.id)) && !prize.dup;
    G.save();
    return prize;
  }
  function tradeStars() { const g = gs(); if (g.stars < CAP.starsPerTicket) return false; g.stars -= CAP.starsPerTicket; S().inventory.capsule_ticket = tickets() + 1; G.save(); return true; }

  /* Velvet Room. */
  const credit = () => { const l = G.perkOn('velvetCredit'); return l ? l[0].fx.velvetCredit : null; };
  const velCost = () => { const c = credit(); return { yen: Math.round(VEL.price * (1 - (c ? c.pct : 0) / 100)), plumes: Math.max(1, VEL.plumes - (c ? c.plumes : 0)), credit: !!c }; };
  const velCan = how => (how === 'plumes' ? gs().plumes >= velCost().plumes : S().yen >= velCost().yen);
  const skillTier = () => Math.min(3, Math.floor((S().tartarus.bosses || []).length / 2));
  function velPrize(r) {
    const SK = B().SKILL_CARDS, t = skillTier();
    if (r === 'R') return R() < 0.8 ? ['skill', pick(SK[t])] : ['mat', 'velvet_thread', 1];
    if (r === 'SR') { const x = R(); return x < 0.45 ? ['skill', pick(SK[Math.min(3, t + 1)])] : x < 0.75 ? ['card', null, 4] : ['mat', 'velvet_thread', 3]; }
    const owned = k => (bsave().gear.owned[k] || 0) > 0 || S().gear.includes(k), gear = velGear().filter(k => !owned(k));
    if (gear.length && R() < 0.6) return ['gear', pick(gear)];
    return R() < 0.6 ? ['card', null, 5] : ['skill', pick(SK[3])];
  }
  /* One of Elizabeth's draws. how: 'yen' | 'plumes'. Returns the prize, or null. */
  function draw(how = 'yen') {
    if (!velCan(how)) return null;
    const c = velCost(), g = gs();
    if (how === 'plumes') g.plumes -= c.plumes; else S().yen -= c.yen;
    const r = rarity('vel'), prize = grant(r, velPrize(r));
    g.draws += 1; g.last = { at: S().day, r, name: prize.name, velvet: true };
    G.save();
    return prize;
  }
  const unclaimed = () => (S().registered || []).filter(id => !gs().credited.includes(id));
  function claim() { const g = gs(), n = unclaimed(); n.forEach(id => g.credited.push(id)); g.plumes += n.length; if (n.length) { G.toast('perk', `Velvet Plumes +${n.length} (Compendium pages)`); G.save(); } return n.length; }
  /* Plumes from the Dark Hour (core.js applyResult). */
  function afterFight(kind, outcome) {
    const n = kind === 'tartarus' && ['win', 'retreat'].includes(outcome) ? 1 : kind === 'operation' && outcome === 'win' ? 3 : 0;
    if (!n) return 0;
    gs().plumes += n; G.toast('perk', `Velvet Plume${n > 1 ? 's' : ''} +${n}`);
    return n;
  }

  /* ── Drawing things ── */
  const starsHtml = r => `<span class="g-ga-stars" aria-label="${RARITY[r].name}">${'★'.repeat(RARITY[r].stars)}</span>`;
  function keyFace(id) {
    const src = G.portrait(id, 'happy') || G.portrait(id, 'neutral') || (id === 'solar' ? `${G.base}assets/femc/portraits/solar/happy.webp` : null);
    return src ? `<img src="${src}" alt="">` : `<b>${esc(keyName(id)[0] || '?')}</b>`;
  }
  // An acrylic keychain: ring, chain, a round charm with the face, rimmed in the set's color.
  function keychain(id, own = true) {
    const st = keySet(id);
    return `<span class="g-key${own ? '' : ' lock'}" style="--c:${st.color}"><i class="g-key-ring"></i><i class="g-key-chain"></i><span class="g-key-face">${own ? keyFace(id) : '<b>?</b>'}</span></span>`;
  }
  function prizeArt(p) {
    if (p.kind === 'key') return keychain(p.id);
    if (p.kind === 'case') return `<span class="g-case-art" data-case="${p.id}"><i></i></span>`;
    const ICON = window.FemcIcons;
    if (p.kind === 'card') return `<span class="g-ga-cardart">✦</span>`;
    if (p.kind === 'skill') return ICON ? ICON.svg('star', '#6ab0ff', 'g-ga-ico') : '';
    return ICON ? ICON.of(p.id, 'g-ga-ico') : '';
  }
  function prizeCard(p) {
    return `<div class="g-ga-prize r-${p.r}" style="--rc:${RARITY[p.r].color}"><div class="g-ga-art">${prizeArt(p)}</div>
      <div class="g-ga-what">${starsHtml(p.r)}<small>${RARITY[p.r].name}</small><b>${esc(p.name)}</b><p>${esc(p.desc || '')}</p>
      ${p.dup ? `<p class="g-ga-dup">Already had one: +${p.stars} Capsule Star${p.stars === 1 ? '' : 's'}.</p>` : ''}${p.complete ? `<p class="g-ga-done">Set complete: ${esc(keySet(p.id).name)}!</p>` : ''}</div></div>`;
  }
  const oddsHtml = odds => `<ul class="g-ga-odds">${Object.entries(odds).map(([k, v]) => `<li style="--rc:${RARITY[k].color}">${starsHtml(k)} ${RARITY[k].name} <b>${(v * 100).toFixed(v * 100 % 1 ? 1 : 0)}%</b></li>`).join('')}</ul>`;
  const SPARKS = n => Array.from({ length: n }, (_, i) => `<i style="--a:${Math.round(i * 360 / n)}deg;--d:${70 + (i % 3) * 22}px"></i>`).join('');
  let skip = false;
  const wait = ms => new Promise(res => { const t0 = Date.now(); const tick = () => (skip || Date.now() - t0 >= ms ? res() : setTimeout(tick, 30)); tick(); });

  /* ── The capsule machine ── */
  function openCapsule(done) {
    gs();
    let busy = false;
    const o = UI().overlay(`<div class="g-ga g-cap"><div class="g-st-head"><h2>Capsule Corner<small>Paulownia Mall</small></h2><button type="button" class="g-btn small" data-close>Leave</button></div>
      <p class="g-shop-say g-ga-say">${esc(LINES.capHi[S().day % LINES.capHi.length])}</p>
      <div class="g-cap-stage">
        <div class="g-cap-machine" aria-hidden="true">
          <div class="g-cap-dome">${Array.from({ length: 14 }, (_, i) => `<i class="g-cap-ball" style="--x:${8 + (i * 37) % 78}%;--y:${30 + (i * 23) % 56}%;--h:${['#ff8cc0', '#6ab0ff', '#f7f2f5', '#c58bff', '#7dffc0', '#ffd36b'][i % 6]};--t:${(i % 5) * .07}s"></i>`).join('')}</div>
          <div class="g-cap-body"><span class="g-cap-label">KEYCHAINS<br>&amp; MORE</span><span class="g-cap-slot"></span><button type="button" class="g-cap-handle" tabindex="-1" aria-hidden="true"><i></i></button><span class="g-cap-chute"></span></div>
          <div class="g-cap-drop"><span class="g-cap-capsule"><i class="top"></i><i class="bot"></i></span><span class="g-cap-spark">${SPARKS(12)}</span></div>
        </div>
        <div class="g-cap-side"><div class="g-ga-result" aria-live="polite"></div><div class="g-ga-info"></div></div>
      </div>
      <div class="g-row g-ga-btns"></div></div>`, 'g-ga-ov g-cap-ov', () => { skip = true; done?.(); });
    const $ = q => o.el.querySelector(q);
    const paint = () => {
      const g = gs(), p = g.pity.cap;
      $('.g-ga-info').innerHTML = `${oddsHtml(CAP.odds)}
        <p class="g-ga-pity">Super Rare or better within <b>${CAP.pitySR - p.sr}</b> turn${CAP.pitySR - p.sr === 1 ? '' : 's'} · an Ultra within <b>${CAP.pityUR - p.ur}</b>.</p>
        <p class="g-ga-own"><span>Tickets <b>${tickets()}</b></span><span>Capsule Stars <b>${g.stars}</b>/${CAP.starsPerTicket}</span><span>Turns <b>${g.pulls}</b></span></p>
        <p class="g-note small">Repeat keychains and cases turn into Capsule Stars. Tickets drop in Tartarus and from Shuffle Time.</p>`;
      $('.g-ga-btns').innerHTML = `<button type="button" class="g-btn pink" data-pull="yen"${capCan('yen') && !busy ? '' : ' disabled'}><span>Turn · ${yen(CAP.price)}</span></button>
        <button type="button" class="g-btn" data-pull="ticket"${capCan('ticket') && !busy ? '' : ' disabled'}><span>Use a ticket (${tickets()})</span></button>
        ${g.stars >= CAP.starsPerTicket ? `<button type="button" class="g-btn small" data-trade${busy ? ' disabled' : ''}><span>Trade ${CAP.starsPerTicket} stars for a ticket</span></button>` : ''}
        <span class="g-yen g-ga-yen">${yen(S().yen)}</span>`;
      o.el.querySelectorAll('[data-pull]').forEach(b => b.addEventListener('click', () => turn(b.dataset.pull)));
      $('[data-trade]')?.addEventListener('click', () => { if (tradeStars()) { G.sfx('femc-rankup'); $('.g-ga-say').textContent = 'The machine spits out a fresh ticket.'; paint(); } });
      UI().paintHud?.();
    };
    async function turn(how) {
      if (busy || !capCan(how)) return;
      busy = true; skip = false; o.el.dataset.locked = '1';
      const prize = pull(how);
      if (!prize) { busy = false; delete o.el.dataset.locked; return paint(); }
      paint();
      const m = $('.g-cap-machine'), res = $('.g-ga-result');
      res.innerHTML = ''; m.className = 'g-cap-machine';
      m.style.setProperty('--rc', RARITY[prize.r].color);
      o.el.querySelector('.g-cap-stage').addEventListener('click', () => { skip = true; }, { once: true });
      G.sfx('femc-click');
      if (!reduced()) {
        void m.offsetWidth; m.classList.add('turn'); await wait(950);
        G.sfx('femc-hover'); m.classList.add('drop'); await wait(800);
        m.classList.add('pop'); G.sfx(prize.r === 'SR' || prize.r === 'UR' ? 'femc-rankup' : 'femc-note'); await wait(650);
      } else G.sfx('femc-note');
      m.classList.add('shown', `r-${prize.r}`);
      res.innerHTML = prizeCard(prize);
      $('.g-ga-say').textContent = prize.r === 'UR' ? 'The whole machine lights up gold. People turn to look.' : prize.r === 'SR' ? 'A purple capsule. That’s a good one.' : prize.dup ? 'One she already has. Still cute.' : 'Pop. Something small and new.';
      busy = false; delete o.el.dataset.locked; paint();
      o.el.querySelector('[data-pull]:not([disabled])')?.focus({ preventScroll: true });
    }
    paint();
    return o;
  }

  /* ── The Velvet Room ── */
  function openVelvet(done) {
    gs();
    let busy = false;
    const bg = G.background('The Velvet Room', 'Daytime'), pic = G.portrait('elizabeth', 'happy');
    const o = UI().overlay(`<div class="g-ga g-vel"${bg ? ` style="--pic:url('${bg}')"` : ''}><div class="g-st-head"><h2>The Velvet Room<small>Elizabeth’s cards</small></h2><button type="button" class="g-btn small" data-close>Leave</button></div>
      <div class="g-shop-top">${pic ? `<img src="${pic}" alt="">` : ''}<p class="g-shop-say g-ga-say">${esc(LINES.velHi[S().day % LINES.velHi.length])}</p></div>
      <div class="g-vel-table" aria-live="polite"></div><div class="g-ga-result" aria-live="polite"></div><div class="g-ga-info"></div>
      <div class="g-row g-ga-btns"></div></div>`, 'g-ga-ov g-vel-ov', () => { skip = true; done?.(); });
    const $ = q => o.el.querySelector(q);
    const say = t => { $('.g-ga-say').textContent = t; };
    const paint = () => {
      const g = gs(), p = g.pity.vel, c = velCost(), n = unclaimed().length;
      $('.g-ga-info').innerHTML = `${oddsHtml(VEL.odds)}
        <p class="g-ga-pity">Super Rare or better within <b>${VEL.pitySR - p.sr}</b> draw${VEL.pitySR - p.sr === 1 ? '' : 's'} · an Ultra within <b>${VEL.pityUR - p.ur}</b>.</p>
        <p class="g-ga-own"><span>Velvet Plumes <b>${g.plumes}</b></span><span>Draws <b>${g.draws}</b></span>${c.credit ? '<span class="g-ga-credit">Compendium Credit: 25% off, one plume less</span>' : ''}</p>
        <p class="g-note small">Plumes: one for every Tartarus night, three for a full moon won, one for every new Compendium page.</p>`;
      $('.g-ga-btns').innerHTML = `<button type="button" class="g-btn pink" data-draw="yen"${velCan('yen') && !busy ? '' : ' disabled'}><span>Draw · ${yen(c.yen)}${c.credit ? ` <s>${yen(VEL.price)}</s>` : ''}</span></button>
        <button type="button" class="g-btn" data-draw="plumes"${velCan('plumes') && !busy ? '' : ' disabled'}><span>Draw · ${c.plumes} Plume${c.plumes === 1 ? '' : 's'}</span></button>
        ${n ? `<button type="button" class="g-btn small" data-claim${busy ? ' disabled' : ''}><span>Show her the Compendium (+${n})</span></button>` : ''}
        <span class="g-yen g-ga-yen">${yen(S().yen)}</span>`;
      o.el.querySelectorAll('[data-draw]').forEach(b => b.addEventListener('click', () => deal(b.dataset.draw)));
      $('[data-claim]')?.addEventListener('click', () => { if (claim()) { G.sfx('femc-rankup'); say(LINES.velClaim[0]); paint(); } });
    };
    async function deal(how) {
      if (busy) return;
      if (!velCan(how)) { say(LINES.velBroke[0]); return; }
      busy = true; skip = false; paint();
      const table = $('.g-vel-table');
      $('.g-ga-result').innerHTML = '';
      table.innerHTML = `<div class="g-vel-hand${reduced() ? ' calm' : ''}">${[0, 1, 2].map(i => `<button type="button" class="g-vel-card" data-i="${i}" style="--i:${i}" aria-label="Card ${i + 1}"><span class="in"><span class="back"><i></i></span><span class="face"></span></span></button>`).join('')}</div><p class="g-note small">Pick a card.</p>`;
      say('Elizabeth fans three cards across the table, face down.');
      G.sfx('femc-hover');
      const cards = [...table.querySelectorAll('.g-vel-card')];
      setTimeout(() => cards[1].focus({ preventScroll: true }), 40);
      cards.forEach(cd => cd.addEventListener('click', async () => {
        if (cd.dataset.done || table.dataset.picked) return;
        table.dataset.picked = '1';
        o.el.dataset.locked = '1';
        const prize = draw(how);
        if (!prize) { busy = false; delete o.el.dataset.locked; table.innerHTML = ''; return paint(); }
        cd.querySelector('.face').innerHTML = `<span class="g-vel-face r-${prize.r}" style="--rc:${RARITY[prize.r].color}">${starsHtml(prize.r)}<b>${esc(RARITY[prize.r].name)}</b></span>`;
        cards.forEach(x => x.classList.toggle('other', x !== cd));
        cd.classList.add('chosen'); G.sfx('femc-click');
        await wait(reduced() ? 60 : 380);
        cd.classList.add('up', `r-${prize.r}`); G.sfx(prize.r === 'R' ? 'femc-note' : 'femc-rankup');
        await wait(reduced() ? 60 : 650);
        $('.g-ga-result').innerHTML = prizeCard(prize);
        say(pick(LINES.velPick));
        delete table.dataset.picked; table.querySelector('.g-note')?.remove();
        busy = false; delete o.el.dataset.locked; paint();
      }));
    }
    paint();
    return o;
  }

  /* ── Menu → Collection (menu.js calls these) ── */
  function collectionHtml() {
    const g = gs();
    const sets = SETS.map(st => {
      const n = setCount(st);
      return `<section class="g-col-set" style="--c:${st.color}"><h3>${esc(st.name)} <small>${n}/${st.ids.length}${n === st.ids.length ? ' · complete' : ''}</small></h3>
        <ul class="g-keys">${st.ids.map(id => { const own = g.keys[id] > 0, known = keyEligible(id); return `<li class="${own ? 'own' : ''}" title="${own ? esc(keyName(id)) + (g.keys[id] > 1 ? ` ×${g.keys[id]}` : '') : known ? 'Not yet' : '???'}">${keychain(id, own)}<small>${own || known ? esc(keyName(id)) : '???'}</small></li>`; }).join('')}</ul></section>`;
    }).join('');
    const cases = CASES.map(c => { const own = g.cases.includes(c.id), on = g.caseOn === c.id; return `<li><button type="button" class="g-col-case${on ? ' on' : ''}" data-case-pick="${own ? c.id : ''}"${own ? '' : ' disabled'}><span class="g-case-art" data-case="${own ? c.id : 'none'}"><i></i></span><b>${own ? esc(c.name) : '???'}</b><small>${own ? (on ? 'On her phone' : 'Put it on') : RARITY[c.r].name}</small></button></li>`; }).join('');
    return `<p class="g-note">Keychains and phone cases from the capsule machine at Paulownia Mall. Elizabeth’s Velvet Room is down the same hall.</p>
      <div class="g-col-stats"><span>Capsule turns <b>${g.pulls}</b></span><span>Tickets <b>${tickets()}</b></span><span>Capsule Stars <b>${g.stars}</b></span><span>Velvet draws <b>${g.draws}</b></span><span>Velvet Plumes <b>${g.plumes}</b></span></div>
      ${sets}<section class="g-col-set"><h3>Phone cases <small>${g.cases.length}/${CASES.length}</small></h3><ul class="g-col-cases">${cases}${g.caseOn ? '<li><button type="button" class="g-col-case" data-case-pick="off"><span class="g-case-art" data-case="none"><i></i></span><b>Plain</b><small>Take it off</small></button></li>' : ''}</ul></section>`;
  }
  function wireCollection(el, rerender) {
    el.querySelectorAll('[data-case-pick]').forEach(b => b.addEventListener('click', () => {
      const id = b.dataset.casePick; if (!id) return;
      gs().caseOn = id === 'off' ? null : id; G.save(); G.sfx('femc-click'); rerender(`[data-case-pick="${id}"]`);
    }));
  }
  const phoneCase = () => (S().gacha && S().gacha.caseOn) || null;
  /* From the Go Out list (ui.js doActivity). */
  function open(kind, done) { return kind === 'velvet' ? openVelvet(done) : openCapsule(done); }

  return Object.assign(api, { RARITY, CAP, VEL, SETS, CASES, fresh, gs, pull, draw, claim, unclaimed, tradeStars, afterFight, velCost, rarity, setCount, setDone, keyEligible, tickets, open, openCapsule, openVelvet, collectionHtml, wireCollection, phoneCase, keychain });
})();
