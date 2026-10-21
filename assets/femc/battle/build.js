/* FEMC building systems (Kat's picks, roadmap sections 7 and 8): Solar's twelve naginatas, Revelation-style cards, Shuffle Time
   and the link perks ("bonds"). Data and rules only, no DOM. Loaded after data.js (it adds to window.FEMC_BATTLE_DATA) and
   before engine.js, in femc-game.html and femc-battle.html. It lives apart from data.js on purpose, so other work on data.js
   (new Shadows, encounters) merges cleanly.
   Save fields (save.js normalize): cards { list, eq: { mid: { slot: uid } }, uid }, wref { gearId: refine 0-5 },
   pboost { mid: { st|ma|en|ag|lu: n } } (Persona boosts from Shuffle Time), skillCards { skillId: n }, taught { mid: [skillIds] },
   bonds { linkId: rank } and bondsRev [linkIds] (the life sim's ranks; a reversed link pauses its perks), bondGifts [perk ids].
   window.FemcBuild: naginatas (NAG), cards (stat lines, rolls, level/refine/dismantle, equip, set counts), unitBonus (what
   cards, weapon refines and Persona boosts add to a fighter: engine.js statsFor / buildUnit), weapon refines, Shuffle Time
   (due, deal, apply) and perks (status, the battle's active perks, MAX skills, gifts, daily checks). */
window.FemcBuild = (() => {
  const D = window.FEMC_BATTLE_DATA;
  if (!D) return null;
  const pick = (R, a) => a[Math.floor(R() * a.length)];
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  /* ══════════ Materials (Shadows, Shuffle Time and dismantled cards give them; Mayoido buys them) ══════════ */
  Object.assign(D.materials, {
    tarot_dust: { name: 'Tarot Dust', price: 20, icon: 'mat-ash', tint: '#b07bff', build: true, desc: 'Violet grit left behind when a card is shuffled too hard. Levels Revelation cards and refines weapons.' },
    velvet_thread: { name: 'Velvet Thread', price: 240, icon: 'mat-feather', tint: '#6ab0ff', build: true, desc: 'A blue thread from a room with no doors. Refines cards and weapons.' }
  });

  /* ══════════ Solar's naginatas (Kat's SolarWeapons.png, cut into art/weapons/) ══════════
     Each is its own weapon with a bonus that matches its look (bonus: the unit-bonus vocabulary below). src: where it comes
     from. Refining (+1 to +5, wref) raises ATK 6% a step and the bonus 15% a step. */
  const WART = 'assets/femc/battle/art/weapons/';
  const NAG = [
    // id, art, name, tier, atk, price (0: not sold), bonus, look/desc, sources
    ['nag_ivory', 'ivory-heart', 'Ivory Heart', 2, 52, 2600, { heal: 20 }, 'Pearls, lace and a little gold locket. Solar’s healing is 20% stronger.', ['Police Box (tier 2)']],
    ['nag_ice', 'ice-crystal', 'Ice Crystal', 2, 55, 0, { el: { ice: 20 }, freeze: 10 }, 'Snowflakes on a frosted blade. Ice skills deal 20% more, and Freeze lands 10% more often.', ['The Priestess (first clear)', 'Shuffle Time · Swords']],
    ['nag_bamboo', 'bamboo-panda', 'Bamboo Grove', 3, 64, 4600, { el: { wind: 15 }, hpRegen: 3 }, 'Green bamboo, a jade bead and a sleepy panda. Wind skills +15%, and she regains 3% HP each turn.', ['Police Box (tier 3)', 'Shuffle Time · Swords']],
    ['nag_mint', 'mint-flowers', 'Mint Blossom', 3, 62, 0, { spRegen: 4, heal: 10 }, 'A mint ribbon, white flowers and a strawberry charm. 4 SP back each turn, and healing +10%.', ['Tartarus chests (Arqa and up)', 'Shuffle Time · Swords']],
    ['nag_lock', 'crimson-lock', 'Crimson Lock', 3, 66, 0, { bind: 20, ail: 15 }, 'A padlock and its key on a crimson shaft. The Golden Rope binds 20% more often; her ailments land 15% more.', ['Locked chests (Arqa and up)', 'Shuffle Time · Swords']],
    ['nag_moon', 'moon-and-stars', 'Moon and Stars', 4, 82, 0, { el: { light: 20 }, insta: 10 }, 'Navy lacquer, a crescent and a ringed planet. Light skills +20%; Hama lands 10% more often.', ['The Lovers (first clear)', 'Shuffle Time · Swords']],
    ['nag_fox', 'autumn-fox', 'Autumn Fox', 4, 84, 0, { crit: 12, critX: 20 }, 'Maple leaves and a fox charm. Critical rate +12%, and critical hits deal 20% more.', ['Kiriko’s bond (rank 6)']],
    ['nag_kitty', 'pink-kitty', 'Pink Kitty', 4, 80, 0, { heal: 25, nullAil: ['charm'] }, 'A pink ribbon, a kitty charm and an apple. Healing +25%, and Solar can’t be Charmed.', ['Kuromi’s bond (rank 7)']],
    ['nag_rose', 'black-rose', 'Black Rose', 5, 104, 0, { el: { dark: 20 }, crit: 8, insta: 10 }, 'Red roses, a skull and a chain. Dark skills +20%, crits +8%, Mudo lands 10% more often.', ['Astarion’s bond (rank 8)']],
    ['nag_butterfly', 'violet-butterfly', 'Violet Butterfly', 5, 100, 11000, { evade: 12, stats: { ag: 4 }, th: 20 }, 'Lavender silk and a blue butterfly. +4 Ag, big evasion, and her Theurgy fills 20% faster.', ['Mayoido Antiques (tier 5)', 'Shuffle Time · Swords']],
    ['nag_prism', 'iridescent-orb', 'Prism Orb', 6, 124, 0, { el: { almighty: 20 }, stats: { ma: 4 } }, 'A holographic blade and a ringed orb. +4 Ma, and Almighty damage +20% (Rise and Shine too).', ['Fortune & Strength (first clear)', 'Shuffle Time · Swords']],
    ['nag_dragon', 'dragon', 'Silver Dragon', 7, 160, 24000, { phys: 12, stats: { st: 5 } }, 'Black lacquer and a silver dragon. The strongest of the twelve: +5 St and physical damage +12%.', ['Mayoido Antiques (tier 7)', 'The Hanged Man (first clear)']]
  ];
  const bonusText = b => {
    const out = [];
    Object.entries(b.el || {}).forEach(([el, v]) => out.push(`${D.elements[el] ? D.elements[el].name : el} +${Math.round(v)}%`));
    if (b.phys) out.push(`Physical +${Math.round(b.phys)}%`); if (b.heal) out.push(`Healing +${Math.round(b.heal)}%`);
    if (b.crit) out.push(`Crit +${Math.round(b.crit)}%`); if (b.critX) out.push(`Crit damage +${Math.round(b.critX)}%`);
    if (b.spRegen) out.push(`${Math.round(b.spRegen)} SP a turn`); if (b.hpRegen) out.push(`${Math.round(b.hpRegen)}% HP a turn`);
    if (b.bind) out.push(`Bind +${Math.round(b.bind)}%`); if (b.ail) out.push(`Ailments +${Math.round(b.ail)}%`); if (b.freeze) out.push(`Freeze +${Math.round(b.freeze)}%`);
    if (b.insta) out.push(`Instant kills +${Math.round(b.insta)}%`); if (b.evade) out.push(`Evasion +${Math.round(b.evade)}`); if (b.th) out.push(`Theurgy +${Math.round(b.th)}%`);
    if (b.nullAil) out.push(`No ${b.nullAil.map(a => D.ailments[a].name).join(', ')}`);
    return out.join(' · ');
  };
  const TINT = { nag_ivory: '#fff2d6', nag_ice: '#9fe8ff', nag_bamboo: '#5fe0b0', nag_mint: '#a8ffd8', nag_lock: '#d2324f', nag_moon: '#5a6ad0', nag_fox: '#ff8a3d', nag_kitty: '#ff8cc0', nag_rose: '#c43b3b', nag_butterfly: '#c9b8ff', nag_prism: '#e0d0ff', nag_dragon: '#c9d0dc' };
  NAG.forEach(([id, art, name, tier, atk, price, bonus, desc, src]) => {
    D.gear[id] = { name, slot: 'weapon', wtype: 'naginata', atk, tier, price, rare: !price || tier >= 5, nag: true, art: WART + art + '.webp', bonus, src, look: desc, tint: TINT[id],
      stats: bonus.stats || undefined, nullAil: bonus.nullAil || undefined, desc: bonusText(bonus) };
  });
  // Police Box stocks the two early ones (practice mode's shop lists non-rare gear of the shop's tier); Mayoido the two rare ones.
  if (D.shops.mayoido) D.shops.mayoido.stock = D.shops.mayoido.stock.concat(['nag_butterfly', 'nag_dragon']);
  // Locked chests can hold Crimson Lock; Shuffle Time's Swords and the bosses below give the rest.
  if (D.map && D.map.chest) D.map.chest.lockedRare = D.map.chest.lockedRare.concat(['nag_lock']);
  const BOSS_WEAPON = { priestess: 'nag_ice', lovers: 'nag_moon', fortune: 'nag_prism', hanged: 'nag_dragon' };
  const CHEST_WEAPON = { id: 'nag_mint', chance: 0.06, fromBlock: 1 };

  /* Weapon refining (any weapon above the starters): +1 … +5 with materials. */
  const WREF = { max: 5, atk: 0.06, bonus: 0.15, dust: [8, 14, 20, 28, 40], thread: [1, 1, 2, 2, 3], yen: [400, 900, 1800, 3200, 5200], arcana: [0, 0, 0, 1, 1] };
  const wrefOf = (save, id) => clamp(+((save.wref || {})[id]) || 0, 0, WREF.max);
  function wrefCost(save, id) {
    const g = D.gear[id], r = wrefOf(save, id);
    if (!g || g.slot !== 'weapon' || !(g.tier > 0) || r >= WREF.max) return null;
    const k = 1 + g.tier * 0.15;
    const c = { tarot_dust: Math.round(WREF.dust[r] * k), velvet_thread: WREF.thread[r], yen: Math.round(WREF.yen[r] * k / 100) * 100 };
    if (WREF.arcana[r]) c.arcana_fragment = WREF.arcana[r];
    return c;
  }
  const canPay = (save, cost, yenNow) => Object.entries(cost).every(([k, n]) => (k === 'yen' ? (yenNow != null ? yenNow : save.yen) >= n : (save.mats[k] || 0) >= n));
  const payCost = (save, cost) => Object.entries(cost).forEach(([k, n]) => { if (k === 'yen') return; save.mats[k] -= n; if (!save.mats[k]) delete save.mats[k]; });
  /* Refine a weapon. yen is paid by the caller when the life sim owns the money (opts.payYen); returns { ok, why, lvl }. */
  function refineWeapon(save, id, { yenNow = null, payYen = null } = {}) {
    const c = wrefCost(save, id);
    if (!c) return { ok: false, why: 'Fully refined.' };
    if (!canPay(save, c, yenNow)) return { ok: false, why: 'Not enough materials or yen.' };
    payCost(save, c);
    if (payYen) payYen(c.yen); else save.yen -= c.yen;
    save.wref = save.wref || {};
    save.wref[id] = wrefOf(save, id) + 1;
    return { ok: true, lvl: save.wref[id], cost: c };
  }
  const weaponAtk = (save, id) => { const g = D.gear[id]; return g ? Math.round(g.atk * (1 + WREF.atk * wrefOf(save, id))) : 0; };

  /* ══════════ Revelation-style cards (P5X) ══════════
     Six slots by position; each card has a main stat (by slot) and up to four random substats. Two and four cards of one set
     give a bonus. Rarity ★3 / ★4 / ★5 sets the max level (6 / 8 / 10) and the starting substats (1 / 2 / 3). Levels cost
     Tarot Dust and yen; refines (R1 to R3) cost Velvet Thread, yen and, for R3, an Arcana Fragment, and add or raise a substat.
     Card art doesn't exist yet: the UI draws each face in code. A set's `img` is the hook for Kat's art (FEMC-ART-NEXT.md
     section 4): set it to an image path once the file exists, and the face shows it. */
  const STATS = {
    hp: { n: 'HP', main: [24, 32, 40], sub: [[6, 9], [8, 12], [10, 15]] },
    sp: { n: 'SP', main: [12, 16, 20], sub: [[3, 5], [4, 6], [5, 8]] },
    st: { n: 'St', sub: [[1, 1], [1, 2], [1, 2]] }, ma: { n: 'Ma', sub: [[1, 1], [1, 2], [1, 2]] }, en: { n: 'En', sub: [[1, 1], [1, 2], [1, 2]] },
    ag: { n: 'Ag', sub: [[1, 1], [1, 2], [1, 2]] }, lu: { n: 'Lu', sub: [[1, 1], [1, 2], [1, 2]] },
    hpP: { n: 'HP', pct: true, main: [5, 6, 7] }, spP: { n: 'SP', pct: true, main: [5, 6, 7] },
    stP: { n: 'St', pct: true, main: [4, 5, 6] }, maP: { n: 'Ma', pct: true, main: [4, 5, 6] }, enP: { n: 'En', pct: true, main: [4, 5, 6] },
    agP: { n: 'Ag', pct: true, main: [4, 5, 6] }, luP: { n: 'Lu', pct: true, main: [4, 5, 6] },
    crit: { n: 'Crit', pts: true, main: [3, 4, 5], sub: [[1, 2], [1, 2], [2, 3]] },
    critX: { n: 'Crit damage', pct: true, main: [8, 10, 12], sub: [[3, 4], [3, 5], [4, 6]] },
    heal: { n: 'Healing', pct: true, main: [6, 8, 10], sub: [[2, 3], [3, 4], [3, 5]] },
    th: { n: 'Theurgy fill', pct: true, main: [6, 8, 10], sub: [[2, 3], [3, 4], [3, 5]] },
    evade: { n: 'Evasion', pts: true, sub: [[1, 2], [2, 3], [2, 3]] },
    phys: { n: 'Physical dmg', pct: true, main: [6, 8, 10] },
    fire: { n: 'Fire dmg', pct: true, el: true, main: [6, 8, 10] }, ice: { n: 'Ice dmg', pct: true, el: true, main: [6, 8, 10] },
    elec: { n: 'Elec dmg', pct: true, el: true, main: [6, 8, 10] }, wind: { n: 'Wind dmg', pct: true, el: true, main: [6, 8, 10] },
    light: { n: 'Light dmg', pct: true, el: true, main: [6, 8, 10] }, dark: { n: 'Dark dmg', pct: true, el: true, main: [6, 8, 10] },
    almighty: { n: 'Almighty dmg', pct: true, el: true, main: [6, 8, 10] }
  };
  const SUBS = ['hp', 'sp', 'st', 'ma', 'en', 'ag', 'lu', 'crit', 'critX', 'heal', 'th', 'evade'];
  const SLOTS = [
    { id: 'crown', n: 'I', name: 'Crown', mains: ['hp'] },
    { id: 'heart', n: 'II', name: 'Heart', mains: ['sp'] },
    { id: 'hand', n: 'III', name: 'Hand', mains: ['stP', 'maP', 'enP'] },
    { id: 'path', n: 'IV', name: 'Path', mains: ['agP', 'luP', 'hpP', 'spP'] },
    { id: 'mirror', n: 'V', name: 'Mirror', mains: ['phys', 'fire', 'ice', 'elec', 'wind', 'light', 'dark', 'almighty', 'heal'] },
    { id: 'fate', n: 'VI', name: 'Fate', mains: ['crit', 'critX', 'heal', 'th', 'hpP'] }
  ];
  /* Sets: themed on Solar's worlds and on Persona. two / four: unit-bonus vocabulary. glyph: the face drawn in code. */
  const SETS = {
    bell: { name: 'Fox Bell', world: 'Runners', color: '#ffd36b', glyph: 'bell', subject: 'a gold bell on a fox charm', two: { heal: 12 }, four: { heal: 8, spRegen: 4 }, t2: 'Healing +12%', t4: 'Healing +8% more, and 4 SP back every turn' },
    stadium: { name: 'Snow Stadium', world: 'Runners', color: '#9fd3ff', glyph: 'stadium', subject: 'a stadium under snow', two: { agP: 6 }, four: { quick: 1, openBuff: ['atk'] }, t2: 'Ag +6%', t4: 'Acts first on turn 1 and starts with attack up' },
    headset: { name: 'Glow Headset', world: 'Runners', color: '#ff8cc0', glyph: 'headset', subject: 'a gaming headset glowing', two: { crit: 5 }, four: { th: 25, critX: 10 }, t2: 'Crit +5%', t4: 'Theurgy fills 25% faster; crit damage +10%' },
    jade: { name: 'Jade Cord', world: 'strangers', color: '#5fe0b0', glyph: 'ring', subject: 'a jade ring on a red cord', two: { el: { ice: 12 } }, four: { ail: 15, bind: 15 }, t2: 'Ice +12%', t4: 'Ailments and binds land 15% more often' },
    crane: { name: 'Harbor Crane', world: 'strangers', color: '#7fd6c9', glyph: 'crane', subject: 'a harbor crane at dawn', two: { hpP: 8 }, four: { endure: 1, def: 6 }, t2: 'HP +8%', t4: 'Endure one knockout blow a battle; +6 defense' },
    needle: { name: 'Red Thread', world: 'strangers', color: '#ff5b5b', glyph: 'needle', subject: 'a sewing needle with red thread', two: { critX: 12 }, four: { crit: 6, down: 15 }, t2: 'Crit damage +12%', t4: 'Crit +6%; +15% damage to Down foes' },
    pin: { name: 'Star Pin', world: 'Hoax', color: '#ffb35c', glyph: 'star', subject: 'a star pin on a blazer', two: { dmg: 6 }, four: { partyOpen: ['atk'] }, t2: 'Damage +6%', t4: 'The whole party starts each battle with attack up' },
    ballot: { name: 'Ballot Box', world: 'Hoax', color: '#c9b8ff', glyph: 'ballot', subject: 'a ballot box with ribbons', two: { luP: 8, ail: 8 }, four: { distressDebuff: 30 }, t2: 'Lu +8%, ailments +8%', t4: 'Her debuffs also Distress the target (30%)' },
    croissant: { name: 'Council Croissant', world: 'Hoax', color: '#f2c27a', glyph: 'croissant', subject: 'a croissant on a council desk', two: { spP: 10 }, four: { costCut: 15 }, t2: 'SP +10%', t4: 'Skills cost 15% less SP' },
    evoker: { name: 'Velvet Evoker', world: 'Persona', color: '#4b9bff', glyph: 'evoker', subject: 'an Evoker on velvet', two: { maP: 6 }, four: { magic: 12 }, t2: 'Ma +6%', t4: 'Magic skills deal 12% more' },
    moon: { name: 'Full Moon', world: 'Persona', color: '#fff2b0', glyph: 'moon', subject: 'a full moon over Tartarus', two: { hpP: 6, enP: 4 }, four: { boss: 15 }, t2: 'HP +6%, En +4%', t4: '+15% damage to bosses' },
    butterfly: { name: 'Blue Butterfly', world: 'Persona', color: '#6ab0ff', glyph: 'butterfly', subject: 'a blue butterfly', two: { evade: 6 }, four: { thStart: 20 }, t2: 'Evasion +6', t4: 'Theurgy +20 at the start of every battle' },
    coffin: { name: 'Green Coffin', world: 'Persona', color: '#7dffc0', glyph: 'coffin', subject: 'a coffin under green light', two: { el: { dark: 12 } }, four: { insta: 12, down: 12 }, t2: 'Dark +12%', t4: 'Instant kills +12%; +12% damage to Down foes' }
  };
  Object.values(SETS).forEach(s => { s.img = null; }); // Kat's card art: 'assets/femc/battle/art/cards/<set>.webp' once it exists
  const CARD = { maxLvl: { 3: 6, 4: 8, 5: 10 }, growth: 0.15, refineMain: 0.05, maxRef: 3, cap: 160,
    lvlDust: (c) => (4 + c.lvl * 3) * (c.r - 2), lvlYen: (c) => 80 * c.lvl * (c.r - 2),
    refThread: [1, 2, 3], refYen: [500, 1500, 3500], refArcana: [0, 0, 1], dismantle: { 3: 6, 4: 14, 5: 30 } };
  D.cards = { stats: STATS, subs: SUBS, slots: SLOTS, sets: SETS, rules: CARD };

  const slotDef = id => SLOTS.find(s => s.id === id);
  const subRoll = (R, stat, r) => { const [a, b] = STATS[stat].sub[r - 3]; return a + Math.floor(R() * (b - a + 1)); };
  /* A new card. opts: { set, slot, r (rarity), tier (1-7: higher tiers roll better rarities) }. */
  function rarityRoll(R, tier = 1) {
    const x = R(), five = 0.02 + 0.02 * tier, four = five + 0.18 + 0.04 * tier;
    return x < five ? 5 : x < four ? 4 : 3;
  }
  function rollCard(R, { set = null, slot = null, r = null, tier = 1, minR = 3 } = {}) {
    const rr = Math.max(minR, r || rarityRoll(R, tier));
    const s = slot || pick(R, SLOTS).id, sd = slotDef(s);
    const main = pick(R, sd.mains);
    const pool = SUBS.filter(k => k !== main && !(STATS[main].pct && k === main.replace(/P$/, '')));
    const subs = [];
    for (let i = 0; i < rr - 2; i++) { const k = pick(R, pool.filter(x => !subs.some(y => y[0] === x))); subs.push([k, subRoll(R, k, rr)]); }
    return { u: 0, set: set || pick(R, Object.keys(SETS)), slot: s, r: rr, lvl: 1, ref: 0, main, subs, lock: false, spent: 0, isNew: true };
  }
  const mainValue = c => Math.round(STATS[c.main].main[c.r - 3] * (1 + CARD.growth * (c.lvl - 1)) * (1 + CARD.refineMain * c.ref));
  const cardName = c => `${SETS[c.set] ? SETS[c.set].name : c.set} · ${slotDef(c.slot) ? slotDef(c.slot).name : c.slot}`;
  const statLine = (k, v) => { const s = STATS[k]; return s ? `${s.n} +${v}${s.pct ? '%' : ''}` : `${k} +${v}`; };
  const ensureCards = save => { if (!save.cards || typeof save.cards !== 'object') save.cards = { list: [], eq: {}, uid: 0 }; return save.cards; };
  function addCard(save, c) {
    const C = ensureCards(save);
    if (C.list.length >= CARD.cap) { // the box is full: it turns straight into dust
      const dust = CARD.dismantle[c.r] || 6; save.mats.tarot_dust = (save.mats.tarot_dust || 0) + dust; return { dust };
    }
    C.uid = (C.uid || 0) + 1; c.u = C.uid; C.list.push(c); return { card: c };
  }
  const cardById = (save, u) => (ensureCards(save).list.find(c => c.u === +u) || null);
  const wearerOf = (save, u) => { const eq = ensureCards(save).eq; return Object.keys(eq).find(mid => Object.values(eq[mid] || {}).includes(+u)) || null; };
  function equipCard(save, mid, u) {
    const c = cardById(save, u); if (!c) return false;
    const C = ensureCards(save), was = wearerOf(save, u);
    if (was) Object.keys(C.eq[was]).forEach(s => { if (C.eq[was][s] === c.u) delete C.eq[was][s]; });
    (C.eq[mid] || (C.eq[mid] = {}))[c.slot] = c.u;
    c.isNew = false;
    return true;
  }
  function unequipCard(save, mid, slot) { const e = ensureCards(save).eq[mid]; if (e) delete e[slot]; }
  const equippedCards = (save, mid) => { const e = ensureCards(save).eq[mid] || {}; return SLOTS.map(s => cardById(save, e[s.id])).filter(Boolean); };
  function levelCost(c) { if (c.lvl >= CARD.maxLvl[c.r]) return null; return { tarot_dust: CARD.lvlDust(c), yen: CARD.lvlYen(c) }; }
  function refineCost(c) { if (c.ref >= CARD.maxRef) return null; const o = { velvet_thread: CARD.refThread[c.ref] + (c.r === 5 ? 1 : 0), yen: CARD.refYen[c.ref] }; if (CARD.refArcana[c.ref]) o.arcana_fragment = CARD.refArcana[c.ref]; return o; }
  function levelCard(save, u, { yenNow = null, payYen = null } = {}) {
    const c = cardById(save, u); if (!c) return { ok: false, why: 'No such card.' };
    const cost = levelCost(c); if (!cost) return { ok: false, why: 'Max level.' };
    if (!canPay(save, cost, yenNow)) return { ok: false, why: 'Not enough Tarot Dust or yen.' };
    payCost(save, cost); if (payYen) payYen(cost.yen); else save.yen -= cost.yen;
    c.lvl++; c.spent = (c.spent || 0) + cost.tarot_dust;
    return { ok: true, lvl: c.lvl };
  }
  function refineCard(save, u, R = Math.random, { yenNow = null, payYen = null } = {}) {
    const c = cardById(save, u); if (!c) return { ok: false, why: 'No such card.' };
    const cost = refineCost(c); if (!cost) return { ok: false, why: 'Fully refined.' };
    if (!canPay(save, cost, yenNow)) return { ok: false, why: 'Not enough Velvet Thread, Arcana Fragments or yen.' };
    payCost(save, cost); if (payYen) payYen(cost.yen); else save.yen -= cost.yen;
    c.ref++;
    let gained;
    if (c.subs.length < 4) {
      const pool = SUBS.filter(k => k !== c.main && !c.subs.some(y => y[0] === k));
      const k = pick(R, pool); const v = subRoll(R, k, c.r); c.subs.push([k, v]); gained = [k, v, true];
    } else { const s = pick(R, c.subs); const v = subRoll(R, s[0], c.r); s[1] += v; gained = [s[0], v, false]; }
    return { ok: true, ref: c.ref, gained };
  }
  function dismantleCard(save, u) {
    const C = ensureCards(save), c = cardById(save, u);
    if (!c) return { ok: false, why: 'No such card.' };
    if (c.lock) return { ok: false, why: 'It’s locked.' };
    const was = wearerOf(save, u); if (was) unequipCard(save, was, c.slot);
    C.list = C.list.filter(x => x.u !== c.u);
    const dust = CARD.dismantle[c.r] + Math.floor((c.spent || 0) / 2), thread = c.ref ? c.ref : 0;
    save.mats.tarot_dust = (save.mats.tarot_dust || 0) + dust;
    if (thread) save.mats.velvet_thread = (save.mats.velvet_thread || 0) + thread;
    return { ok: true, dust, thread };
  }
  /* What one card adds, as unit-bonus entries. */
  function cardBonus(c) {
    const out = { stat: {}, pct: {} };
    const add = (k, v) => { const s = STATS[k]; if (!s) return; if (/P$/.test(k)) out.pct[k.replace(/P$/, '')] = (out.pct[k.replace(/P$/, '')] || 0) + v; else out.stat[k] = (out.stat[k] || 0) + v; };
    add(c.main, mainValue(c));
    c.subs.forEach(([k, v]) => add(k, v));
    return out;
  }
  const setCounts = (save, mid) => equippedCards(save, mid).reduce((o, c) => { o[c.set] = (o[c.set] || 0) + 1; return o; }, {});

  /* ══════════ The unit bonus: what cards, weapon bonuses (refined) and Persona boosts add to one fighter ══════════
     flat: hp sp st ma en ag lu; pct: hp sp st ma en ag lu (percent); and percents/points: crit, critX, heal, th, evade, phys,
     magic, dmg, boss, down, el { el: % }, spRegen, hpRegen (% of max HP), thStart, ail, bind, freeze, insta, def, costCut,
     distressDebuff, endure, quick, openBuff [stats], partyOpen [stats], nullAil [ids]. */
  function emptyBonus() { return { flat: {}, pct: {}, el: {}, crit: 0, critX: 0, heal: 0, th: 0, evade: 0, phys: 0, magic: 0, dmg: 0, boss: 0, down: 0, spRegen: 0, hpRegen: 0, thStart: 0, ail: 0, bind: 0, freeze: 0, insta: 0, def: 0, costCut: 0, distressDebuff: 0, endure: false, quick: false, openBuff: [], partyOpen: [], nullAil: [], sets: [] }; }
  const NUM = ['crit', 'critX', 'heal', 'th', 'evade', 'phys', 'magic', 'dmg', 'boss', 'down', 'spRegen', 'hpRegen', 'thStart', 'ail', 'bind', 'freeze', 'insta', 'def', 'costCut', 'distressDebuff'];
  function addBonus(b, src, k = 1) {
    if (!src) return b;
    NUM.forEach(x => { if (src[x]) b[x] += src[x] * k; });
    Object.entries(src.el || {}).forEach(([e, v]) => { b.el[e] = (b.el[e] || 0) + v * k; });
    Object.entries(src.stats || {}).forEach(([s, v]) => { b.flat[s] = (b.flat[s] || 0) + v; });
    ['hp', 'sp', 'st', 'ma', 'en', 'ag', 'lu'].forEach(s => { if (src[s + 'P']) b.pct[s] = (b.pct[s] || 0) + src[s + 'P']; });
    if (src.endure) b.endure = true; if (src.quick) b.quick = true;
    (src.openBuff || []).forEach(s => b.openBuff.push(s)); (src.partyOpen || []).forEach(s => b.partyOpen.push(s)); (src.nullAil || []).forEach(s => b.nullAil.push(s));
    return b;
  }
  function unitBonus(save, mid, weaponId = null) {
    const b = emptyBonus();
    if (!save) return b;
    // Cards: mains, substats, then the set bonuses.
    equippedCards(save, mid).forEach(c => {
      const cb = cardBonus(c);
      Object.entries(cb.stat).forEach(([k, v]) => {
        if (['hp', 'sp', 'st', 'ma', 'en', 'ag', 'lu'].includes(k)) b.flat[k] = (b.flat[k] || 0) + v;
        else if (STATS[k] && STATS[k].el) b.el[k] = (b.el[k] || 0) + v;
        else if (NUM.includes(k)) b[k] += v;
      });
      Object.entries(cb.pct).forEach(([k, v]) => { b.pct[k] = (b.pct[k] || 0) + v; });
    });
    Object.entries(setCounts(save, mid)).forEach(([set, n]) => {
      const s = SETS[set]; if (!s) return;
      if (n >= 2) { addBonus(b, s.two); b.sets.push([set, 2]); }
      if (n >= 4) { addBonus(b, s.four); b.sets.push([set, 4]); }
    });
    // The weapon's own bonus, scaled by its refine.
    const g = weaponId && D.gear[weaponId];
    if (g && g.bonus) { const k = 1 + WREF.bonus * wrefOf(save, weaponId); const nb = Object.assign({}, g.bonus); delete nb.stats; delete nb.nullAil; addBonus(b, nb, k); (g.bonus.nullAil || []).forEach(a => b.nullAil.push(a)); }
    // Persona boosts (Shuffle Time's Major Arcana).
    Object.entries((save.pboost || {})[mid] || {}).forEach(([s, v]) => { b.flat[s] = (b.flat[s] || 0) + v; });
    return b;
  }

  /* ══════════ Skill cards (Shuffle Time's Magician): teach one Persona one skill (it then follows the eight-slot rule) ══════════ */
  const SKILL_CARDS = [
    ['agi', 'bufu', 'zio', 'garu', 'dia', 'tarukaja', 'rakukaja', 'sukukaja', 'mudo', 'hama', 'patra', 'tarunda'],
    ['agilao', 'bufula', 'zionga', 'garula', 'media', 'rakunda', 'sukunda', 'mudo', 'hama', 'dekunda', 'marin_karin'],
    ['maragion', 'mabufula', 'mazionga', 'magarula', 'mediarama', 'diarama', 'mudoon', 'hamaon', 'matarukaja', 'marakunda', 'evil_smile', 'dekaja'],
    ['agidyne', 'bufudyne', 'ziodyne', 'garudyne', 'diarahan', 'debilitate', 'heat_riser', 'me_patra', 'recarm']
  ];
  function teachable(save, mid, skill) {
    const E = window.FemcBattleEngine;
    if (!D.skills[skill] || !E) return { ok: false, why: 'Unknown skill.' };
    const known = E.skillsFor(mid, save);
    if (known.includes(skill)) return { ok: false, why: 'Already known.' };
    const r = E.rootOf(skill);
    const same = known.find(x => E.rootOf(x) === r);
    if (same && E.tierOf(same) >= E.tierOf(skill)) return { ok: false, why: `${D.skills[same].name} is already stronger.` };
    return { ok: true };
  }
  function teach(save, mid, skill) {
    const t = teachable(save, mid, skill);
    if (!t.ok) return t;
    if (!(save.skillCards && save.skillCards[skill] > 0)) return { ok: false, why: 'No card left.' };
    save.skillCards[skill]--; if (!save.skillCards[skill]) delete save.skillCards[skill];
    (save.taught || (save.taught = {}));
    (save.taught[mid] || (save.taught[mid] = [])).push(skill);
    if (window.FemcBattleEngine) window.FemcBattleEngine.unforget(save, mid, skill);
    return { ok: true };
  }

  /* ══════════ Shuffle Time (P3P) ══════════
     After a won fight in Tartarus: always after an All-Out finish, a top rating (won in two rounds with no one down), a
     Strong group, the Reaper or a full moon; otherwise a set chance. The cards show face up, flip, shuffle, and you pick one.
     Minor Arcana: Cups heal, Coins give yen, Swords give gear (the high ones Solar's naginatas), Wands give EXP. Major Arcana:
     Revelation cards, skill cards, Persona boosts, materials, the Sun. Rare penalty cards add risk. */
  const SH = {
    chance: 0.25, strong: 0.25, hand: 4, majorChance: 0.4, penalty: 0.07, penaltyHard: 0.1,
    suits: {
      cups: { name: 'Cups', color: '#7fe3ff', what: 'heal' }, coins: { name: 'Coins', color: '#ffd36b', what: 'yen' },
      swords: { name: 'Swords', color: '#e8e8f0', what: 'gear' }, wands: { name: 'Wands', color: '#7dffc0', what: 'EXP' }
    },
    majors: [
      { id: 'fool', num: '0', name: 'The Fool', out: 'card' }, { id: 'magician', num: 'I', name: 'The Magician', out: 'skillcard' },
      { id: 'priestess', num: 'II', name: 'The Priestess', out: 'boost', stat: 'ma' }, { id: 'empress', num: 'III', name: 'The Empress', out: 'card', minR: 4 },
      { id: 'chariot', num: 'VII', name: 'The Chariot', out: 'boost', stat: 'ag' }, { id: 'justice', num: 'VIII', name: 'Justice', out: 'boost', stat: 'en' },
      { id: 'hermit', num: 'IX', name: 'The Hermit', out: 'mats' }, { id: 'fortune', num: 'X', name: 'Fortune', out: 'boost', stat: 'lu' },
      { id: 'strength', num: 'XI', name: 'Strength', out: 'boost', stat: 'st' }, { id: 'temperance', num: 'XIV', name: 'Temperance', out: 'dust' },
      { id: 'star', num: 'XVII', name: 'The Star', out: 'card', minR: 4, five: 0.5 }, { id: 'sun', num: 'XIX', name: 'The Sun', out: 'sun' }
    ],
    penalties: [
      { id: 'death', num: 'XIII', name: 'Death', out: 'reaper', text: 'The Reaper is 6 steps closer.' },
      { id: 'tower', num: 'XVI', name: 'The Tower', out: 'tower', text: 'Everyone loses a quarter of their HP.' },
      { id: 'devil', num: 'XV', name: 'The Devil', out: 'devil', text: 'A tenth of tonight’s yen is gone.' },
      { id: 'moon', num: 'XVIII', name: 'The Moon', out: 'moon', text: 'The next Shadows are tougher (+25% HP).' }
    ],
    boostCap: 10
  };
  D.shuffle = SH;
  /* Is Shuffle Time due after this win? info: { allout, rounds, ko, strong, reaper, boss, practice, story } */
  function shuffleDue(info, R = Math.random) {
    if (info.story) return null;
    if (info.boss || info.reaper) return 'boss';
    if (info.allout) return 'allout';
    if (info.rounds <= 2 && !info.ko) return 'rating';
    if (info.strong && R() < SH.chance + SH.strong) return 'strong';
    return R() < SH.chance ? 'chance' : null;
  }
  const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
  /* A hand. ctx: { tier (1-7), extra (Kiriko's Good Fortune), hard, boss } */
  function deal(R, { tier = 1, extra = 0, hard = false, boss = false, practice = false } = {}) {
    const n = SH.hand + extra, hand = [];
    let pen = 0, majors = 0;
    for (let i = 0; i < n; i++) {
      if (!boss && pen < 1 && R() < (hard ? SH.penaltyHard : SH.penalty)) { const p = pick(R, SH.penalties); hand.push({ kind: 'penalty', id: p.id, num: p.num, name: p.name, out: p.out, text: p.text }); pen++; continue; }
      if (majors < (boss ? 2 : 1) && R() < (boss ? 0.75 : SH.majorChance)) {
        // Practice mode has no card menu: its Major Arcana are the non-card ones.
        const m = pick(R, SH.majors.filter(x => !practice || !['card', 'skillcard'].includes(x.out)));
        hand.push({ kind: 'major', id: m.id, num: m.num, name: m.name, out: m.out, stat: m.stat, minR: m.minR, five: m.five }); majors++; continue;
      }
      const suit = pick(R, Object.keys(SH.suits));
      const rank = clamp(1 + Math.floor(R() * R() * 10) + (boss ? 3 : 0) + Math.floor(tier / 3), 1, 10);
      hand.push({ kind: 'minor', suit, rank, num: ROMAN[rank], name: `${ROMAN[rank]} of ${SH.suits[suit].name}` });
    }
    // Shuffle so the penalty isn't always first.
    for (let i = hand.length - 1; i > 0; i--) { const j = Math.floor(R() * (i + 1)); [hand[i], hand[j]] = [hand[j], hand[i]]; }
    return hand;
  }
  /* What a card does, in words (before it's applied). */
  function cardText(c, ctx = {}) {
    if (c.kind === 'penalty') return c.text;
    if (c.kind === 'minor') {
      if (c.suit === 'cups') return `The party recovers ${10 + c.rank * 5}% HP and SP.`;
      if (c.suit === 'coins') return `Yen, more for a higher card.`;
      if (c.suit === 'swords') return c.rank >= 8 ? 'A weapon. Maybe one of Solar’s naginatas.' : 'A weapon or armor for the party.';
      return `+${c.rank * 10}% EXP from this fight.`;
    }
    return { card: c.minR ? `A Revelation card (★${c.minR} or better).` : 'A Revelation card.', skillcard: 'A skill card: teach a Persona a new skill.', boost: `Persona boost: +1 ${String(c.stat).toUpperCase()} to someone in the party.`,
      mats: 'Velvet Thread and Tarot Dust.', dust: 'A pile of Tarot Dust.', sun: 'A full heal, and every Theurgy gauge +25.' }[c.out] || '';
  }
  /* Apply a picked card. Changes to the battle save happen here; the rest comes back as effects for the battle page:
     { heal (fraction HP+SP), expMult, reaper (steps closer), hpLoss (fraction), curse (next fight's Shadows +25% HP), th }.
     ctx: { R, tier (1-7), party (mids), yen (for the Devil), yenNow (the life sim's money, story fights) }. Returns { lines, fx }. */
  function applyShuffle(save, c, ctx) {
    const R = ctx.R || Math.random, tier = clamp(ctx.tier || 1, 1, 7), lines = [], fx = {};
    const addMat = (k, n) => { save.mats[k] = (save.mats[k] || 0) + n; lines.push(`${D.materials[k].name} ×${n}`); };
    const party = (ctx.party || ['solar']).filter(Boolean);
    if (c.kind === 'penalty') {
      if (c.out === 'reaper') fx.reaper = 6;
      if (c.out === 'tower') fx.hpLoss = 0.25;
      if (c.out === 'moon') fx.curse = 0.25;
      if (c.out === 'devil') { const lose = Math.round(Math.max(0, save.yen) * 0.1); save.yen -= lose; fx.yenLost = lose; lines.push(`−¥${lose.toLocaleString('en-US')}`); }
      lines.unshift(c.text);
      return { lines, fx, penalty: true };
    }
    if (c.kind === 'minor') {
      if (c.suit === 'cups') { fx.heal = (10 + c.rank * 5) / 100; lines.push(`HP and SP +${10 + c.rank * 5}%`); }
      if (c.suit === 'coins') { const y = Math.round(c.rank * (70 + 110 * tier) * (0.9 + R() * 0.2) / 10) * 10; save.yen += y; fx.yen = y; lines.push(`+¥${y.toLocaleString('en-US')}`); }
      if (c.suit === 'wands') { fx.expMult = c.rank / 10; lines.push(`EXP +${c.rank * 10}%`); }
      if (c.suit === 'swords') {
        const ownNag = id => (save.gear.owned[id] || 0) > 0;
        const nagPool = Object.keys(D.gear).filter(id => D.gear[id].nag && (D.gear[id].src || []).some(s => /Shuffle Time/.test(s)) && D.gear[id].tier <= tier + 1 && !ownNag(id));
        let got = null;
        if (nagPool.length && (c.rank >= 9 || (c.rank >= 7 && R() < 0.4))) got = pick(R, nagPool);
        if (!got) {
          const who = pick(R, party), m = D.party.find(x => x.id === who) || D.party[0], t = clamp(tier + (c.rank >= 6 ? 1 : 0), 1, 7);
          const pool = Object.keys(D.gear).filter(id => { const g = D.gear[id]; return !g.rare && g.tier === t && (g.slot === 'armor' || (g.slot === 'weapon' && g.wtype === m.wtype)); });
          got = pool.length ? pick(R, pool) : null;
        }
        if (got) { save.gear.owned[got] = (save.gear.owned[got] || 0) + 1; fx.gear = got; lines.push(D.gear[got].name + (D.gear[got].nag ? ' (one of Solar’s naginatas!)' : '')); }
        else { const y = c.rank * 200; save.yen += y; fx.yen = y; lines.push(`+¥${y}`); }
      }
      return { lines, fx };
    }
    // Major Arcana
    if (c.out === 'card') {
      const r = c.five && R() < c.five ? 5 : null;
      const card = rollCard(R, { tier: tier + 1, r, minR: c.minR || 3 });
      const res = addCard(save, card);
      fx.card = res.card || null;
      lines.push(res.card ? `Revelation card: ${cardName(card)} ★${card.r}` : `The card box is full: +${res.dust} Tarot Dust instead`);
    }
    if (c.out === 'skillcard') {
      const pool = SKILL_CARDS[clamp(Math.floor((tier - 1) / 2), 0, SKILL_CARDS.length - 1)];
      const sk = pick(R, pool);
      save.skillCards = save.skillCards || {}; save.skillCards[sk] = (save.skillCards[sk] || 0) + 1;
      fx.skillCard = sk; lines.push(`Skill card: ${D.skills[sk].name}`);
    }
    if (c.out === 'boost') {
      const who = pick(R, party);
      save.pboost = save.pboost || {}; const b = save.pboost[who] || (save.pboost[who] = {});
      if ((b[c.stat] || 0) < SH.boostCap) { b[c.stat] = (b[c.stat] || 0) + 1; fx.boost = [who, c.stat]; lines.push(`${(D.party.find(m => m.id === who) || {}).name || who}’s Persona: ${c.stat.toUpperCase()} +1`); }
      else addMat('tarot_dust', 15);
    }
    if (c.out === 'mats') { addMat('velvet_thread', 1 + (tier >= 4 ? 1 : 0)); addMat('tarot_dust', 8 + tier * 2); }
    if (c.out === 'dust') addMat('tarot_dust', 16 + tier * 4);
    if (c.out === 'sun') { fx.heal = 1; fx.th = 25; lines.push('A full heal; Theurgy +25'); }
    return { lines, fx };
  }

  /* ══════════ Bond perks (FEMC-LINK-PERKS.md, with Kat's answers) ══════════
     [link, rank, name, type, fx, description, stub]. type: battle (a fighter's: they must be in the party; a searcher's work as an
     Assist until they join; a non-fighter's always apply) | assist (cut-in, from outside the party) | tartarus (the node map) |
     daily (the life sim) | max (a passive or a skill Solar learns). fx keys are read by engine.js (battle), battle.js (Tartarus)
     and core.js (daily). stub: why it isn't built yet (it waits on a system that doesn't exist). */
  const P = [
    // ── S.E.E.S.
    ['akihiko', 2, 'Roadwork', 'daily', { weekly: 'roadwork', stat: { courage: 2 }, dow: 1 }, 'Once a week (Mondays), a morning run with him gives +2 Courage without using any free time.'],
    ['akihiko', 3, 'Jab-Cross', 'battle', { jab: { chance: 0.3, hi: 0.5, hiRank: 6, power: 40 } }, 'When Solar hits a weakness, Akihiko follows up with a free Strike jab to the same foe (30%; 50% from rank 6).'],
    ['akihiko', 6, 'Cover Me', 'battle', { cover: {} }, 'Once per battle, when a hit would drop Solar below 25% HP, Akihiko steps in front and takes it at half damage.'],
    ['akihiko', 8, 'All Night', 'tartarus', { allNight: 2 }, 'The party can fight 2 more battles in a row before anyone gets Tired.'],
    ['akihiko', 10, 'Corner Man', 'max', { cornerMan: {} }, 'Once per battle, when Solar is knocked Down she’s back on her feet at once, and her next attack is a guaranteed crit.'],
    ['yukari', 2, 'Fan Club', 'daily', { areaStat: { area: 'gekkoukan', stat: { charm: 1 } } }, '+1 Charm on every activity at Gekkoukan.'],
    ['yukari', 4, 'Second Opinion', 'battle', { secondOpinion: {} }, 'Once per battle, if Solar ends a turn with an ailment, Yukari cures it for free.'],
    ['yukari', 6, 'First Aid Kit', 'tartarus', { firstAid: 0.1 }, 'After each win, the party member with the lowest HP recovers 10%.'],
    ['yukari', 8, 'Second Wind', 'battle', { secondWind: { below: 0.4 } }, 'Once per battle, when everyone in the party is under 40% HP, Yukari casts a free Media.'],
    ['yukari', 10, 'Wind at Your Back', 'max', { windAtBack: { heal: 0.15 } }, 'Solar’s heals restore 15% more and give the target agility up.'],
    ['junpei', 2, 'Bro Discount', 'daily', { discount: { acts: ['wildduck', 'hagakure'], pct: 30 }, actStat: { hagakure: { knowledge: 1 } } }, 'Wild-Duck Burger and Hagakure cost 30% less, and Hagakure gives +1 Knowledge.'],
    ['junpei', 4, 'Clutch Hitter', 'battle', { clutch: { crit: 10 } }, 'Junpei’s crit rate is +10% when the party is under half HP or the fight passes turn 5.'],
    ['junpei', 6, 'Pinch Hitter', 'battle', { pinchHitter: {} }, 'Once per battle, when Solar Shifts to Junpei, his next physical attack is a guaranteed crit.'],
    ['junpei', 8, 'Dugout', 'tartarus', { dugout: 0.8 }, 'Members on the bench earn 80% of the EXP instead of 60%.'],
    ['junpei', 10, 'Grand Slam', 'max', { learn: 'grand_slam' }, 'Solar learns Grand Slam: heavy Strike damage to one foe, always a crit against a Down foe.'],
    ['mitsuru', 2, 'Study Hall', 'daily', { studyHall: { stat: { knowledge: 1 }, exam: { knowledge: 2 } } }, 'Studying at the dorm gives +1 Knowledge (+2 in exam weeks).'],
    ['mitsuru', 4, 'Company Card', 'daily', { shopOff: { shop: 'police', kinds: ['weapon', 'armor'], pct: 10 } }, 'Police Box weapons and armor cost 10% less.'],
    ['mitsuru', 6, 'Shatter', 'battle', { shatterUp: { dmg: 0.25, freeze: 1 } }, 'Physical hits on a Frozen foe deal 25% more damage, and the party’s Freeze lasts one extra turn.'],
    ['mitsuru', 8, 'Field Report', 'tartarus', { fieldReport: {} }, 'The way to the stairs is marked on the node map from the moment the party arrives on a floor.'],
    ['mitsuru', 10, 'Frozen Verdict', 'max', { learn: 'frozen_verdict' }, 'Solar learns Frozen Verdict: medium Ice damage to all foes with a high chance to Freeze.'],
    ['fuuka', 2, 'Experimental Bento', 'tartarus', { nightKit: { night_bento: 1 } }, 'Each night Solar brings a bento that restores 30% SP to the party once.'],
    ['fuuka', 4, 'Oracle Ping', 'tartarus', { oraclePing: {} }, 'Chests and event rooms are marked on the node map from the start of each floor.'],
    ['fuuka', 6, 'Third Eye', 'assist', { thirdEye: {} }, 'Shadows the party has fought before start each battle fully analyzed.'],
    ['fuuka', 8, 'Steady Signal', 'assist', { steadySignal: { every: 3, heal: 0.05 } }, 'Every third round, Fuuka restores 5% HP to the whole party.'],
    ['fuuka', 10, 'Oracle Link', 'max', { oracleLink: {} }, 'Once per battle, when the party is in trouble, Fuuka steps in with a full party heal, full SP for one member, or a party-wide Me Patra.'],
    ['aigis', 2, 'Learning Mode', 'daily', { learningMode: { kindness: 1 } }, '+1 Kindness from every link hangout (not rank scenes).'],
    ['aigis', 4, 'Bodyguard Protocol', 'battle', { bodyguard: { chance: 0.3 } }, 'Aigis takes single-target hits aimed at Solar 30% of the time.'],
    ['aigis', 7, 'Sentry Mode', 'tartarus', { sentry: 3 }, 'Once per night, when the Reaper arrives, Aigis holds it off and it loses track of the party for 3 steps.'],
    ['aigis', 10, 'Papillon Heart', 'max', { papillon: {} }, 'When Solar Guards, the next hit on her does no damage, and she gets One More.'],
    ['ken', 2, 'Featherman Fan', 'daily', { actStat: { cinema: { courage: 1 }, arcade: { courage: 1 } } }, 'The movie theater and Game Panic give +1 Courage.'],
    ['ken', 4, 'Justice Bolt', 'battle', { justiceBolt: { light: 0.15, insta: 10 } }, 'With Ken in the party, Light skills do 15% more damage and instant kills land 10% more often.'],
    ['ken', 6, 'Emergency Kit', 'tartarus', { nightKit: { kit_bead: 1 } }, 'Each night starts with a free Revival Bead.'],
    ['ken', 8, 'Little Brother’s Cheer', 'assist', { littleBrother: { below: 0.3, power: 45 } }, 'Once per battle, when Solar drops below 30% HP, Ken casts a free Dia on her.'],
    ['ken', 10, 'Featherman Strike', 'max', { learn: 'featherman_strike' }, 'Solar learns Featherman Strike: medium Light damage to all foes, and a guaranteed Down on a Light weakness.'],
    ['koromaru', 2, 'Walkies', 'daily', { weekly: 'walkies', stat: { kindness: 2 }, dow: 4 }, 'Once a week (Thursdays), an evening walk with him gives +2 Kindness without using any free time.'],
    ['koromaru', 4, 'Good Nose', 'tartarus', { goodNose: 1 }, 'One extra chest on every floor.'],
    ['koromaru', 6, 'Hellhound Hunt', 'battle', { hellhound: { insta: 15 } }, 'The party’s instant-kill skills (Mudo, Hama) land 15% more often against Down foes.'],
    ['koromaru', 10, 'Good Dog', 'max', { goodDog: { hp: 0.05, sp: 0.05 } }, 'Every time Solar defeats a foe, she recovers 5% HP and SP.'],
    ['shinjiro', 2, 'Kitchen Duty', 'daily', { kitchenDuty: 1 }, 'Cooking with him becomes an evening activity at the dorm (+3 Proficiency), and the leftovers come along on the next Tartarus night: a dish that heals the party 20%.'],
    ['shinjiro', 3, 'Heavy Hand', 'battle', { heavyHand: { dmg: 0.15 } }, 'Shinjiro’s attacks on Down foes never miss (a Down foe can’t dodge anyway), and they hit 15% harder.'],
    ['shinjiro', 5, 'Back Alley Rules', 'battle', { backAlley: { chance: 0.25 } }, 'When a foe hits Solar, Shinjiro may counter it for free (25%).'],
    ['shinjiro', 10, 'Hard Way Home', 'max', { hardWay: { dmg: 0.4, below: 0.3 } }, 'Below 30% HP, Solar’s physical damage is +40% and she can’t be knocked Down.'],
    // ── Visitors
    ['kiriko', 2, 'Omikuji Pull', 'daily', { omikuji: {} }, 'Drawing a fortune at the shrine is free, and the Great Blessing comes up twice as often.'],
    ['kiriko', 4, 'Fox Spirit', 'tartarus', { foxSpirit: 0.2 }, 'Taking the stairs heals the party 20% HP.'],
    ['kiriko', 6, 'Swift Step', 'assist', { swiftStep: { below: 0.25, heal: 0.3 }, gift: 'nag_fox' }, 'Once per battle, when an ally drops below 25% HP, Kiriko blinks in and heals them 30%. She also gives Solar the Autumn Fox naginata.'],
    ['kiriko', 8, 'Good Fortune', 'battle', { goodFortune: 1 }, 'Shuffle Time shows one extra card.'],
    ['kiriko', 10, 'Protective Suzu', 'max', { learn: 'protective_suzu', suzuHalf: 0.5 }, 'Solar learns Protective Suzu even without the Bell branch, and it costs her half the SP: the party can’t be hurt until their next turn, and every ailment is cured.'],
    ['mercy', 2, 'House Call', 'daily', { freeAct: ['clinic'], shopOff: { shop: 'aohige', pct: 10 } }, 'Clinic visits are free, and Aohige Pharmacy is 10% off.'],
    ['mercy', 4, 'Blue Beam', 'battle', { blueBeam: {} }, 'The first heal Solar casts each battle also gives the target attack up.'],
    ['mercy', 6, 'Field Medicine', 'tartarus', { fieldMedicine: 0.3 }, 'Healing items restore 30% more.'],
    ['mercy', 8, 'Resurrect', 'assist', { resurrect: { hp: 0.5 } }, 'Once per battle, the first ally to fall is revived with 50% HP at the end of that turn.'],
    ['mercy', 10, 'Valkyrie', 'max', { learn: 'valkyrie' }, 'Solar learns Valkyrie (once per battle): for 3 turns, her single-target heals reach the whole party and she regains 4 SP a turn.'],
    ['sebastian', 2, 'Rain Check', 'daily', { rainCheck: 1 }, 'On rainy days, every social stat gain is +1.'],
    ['sebastian', 4, 'Optimize', 'battle', { optimize: { cut: 0.1 } }, 'Solar’s skills cost 10% less SP.'],
    ['sebastian', 7, 'Back Roads', 'tartarus', { backRoads: {} }, 'Once per floor, the party can skip one room and move two steps, and the Reaper’s counter doesn’t move.'],
    ['sebastian', 10, 'Save Point', 'max', { savePoint: {} }, 'Once per night, if the party falls, they wake at the last access point with items and EXP kept instead of a Game Over.'],
    ['aphrodite', 2, 'Glow Up', 'daily', { actStat: { bathhouse: { charm: 2 } } }, 'The bathhouse gives +2 more Charm.'],
    ['aphrodite', 4, 'Kiss', 'assist', { kiss: { share: 0.3 } }, 'Each battle, Solar is bonded to the ally with the lowest HP. Whenever Solar heals anyone, that ally also gets 30% of the heal.'],
    ['aphrodite', 7, 'Back Off!', 'assist', { backOff: { chance: 0.5 } }, 'Once per battle, the first foe to land a physical hit on Solar is shoved back and loses its next turn (50%).'],
    ['aphrodite', 10, 'Undying Love', 'max', { learn: 'undying_love' }, 'Solar learns Undying Love (once per battle): for 2 turns, Solar and one ally can’t drop below 1 HP.'],
    ['astarion', 2, 'Lockpick', 'tartarus', { lockpick: 1 }, 'Once per floor, a locked chest opens without a Tartarus Key.'],
    ['astarion', 4, 'Sneak Attack', 'assist', { sneak: { crit: 15 } }, 'Solar’s attacks on foes that haven’t acted yet this battle crit 15% more often.'],
    ['astarion', 6, 'A Little Taste', 'battle', { taste: { drain: 0.05 } }, 'Solar’s physical attacks restore HP equal to 5% of the damage they deal.'],
    ['astarion', 8, 'Expensive Taste', 'daily', { matSell: 0.2, gift: 'nag_rose' }, 'Mayoido Antiques pays 20% more for materials. He also leaves Solar the Black Rose naginata.'],
    ['astarion', 10, 'Fangs Out', 'max', { learn: 'fangs_out' }, 'Solar learns Fangs Out: medium Almighty damage to one foe, and Solar recovers HP equal to half of it.'],
    ['cloud', 2, 'Mercenary Rates', 'daily', { jobPay: { all: 10 } }, 'Every part-time job pays 10% more.'],
    ['cloud', 4, 'Limit Break', 'battle', { limitBreak: { th: 5 } }, 'Solar’s Theurgy gauge gains +5 every time she takes damage.'],
    ['cloud', 7, 'Buster Sword', 'assist', { buster: { dmg: 0.2 } }, 'The party’s physical attacks on Down foes deal 20% more damage.'],
    ['cloud', 10, 'Cross-Slash', 'max', { learn: 'cross_slash' }, 'Solar learns Cross-Slash: heavy Slash damage to one foe, and it may Bind it.'],
    ['judy', 2, 'Edit Mode', 'assist', { editMode: 1 }, 'The turn-order strip shows one turn further ahead (Shadows’ HP bars and buffs are always on show already).'],
    ['judy', 4, 'Tech Savvy', 'tartarus', { techSavvy: 1 }, 'Locked chests roll one extra item.'],
    ['judy', 6, 'Editing Bay', 'daily', { dormStat: { proficiency: 1 } }, 'Evening activities at the dorm (studying, reading, cooking, the garden, the desk, walking Koromaru) give +1 Proficiency.'],
    ['judy', 8, 'Hotwire', 'assist', { hotwire: { th: 10 } }, 'A Shift also gives the receiver +10 Theurgy.'],
    ['judy', 10, 'Feel Everything', 'max', { feelEverything: { sp: 3 } }, 'Solar’s crits and weakness hits each restore 3 SP.'],
    ['noctis', 2, 'Fishing Trip', 'daily', { actStat: { pier: { proficiency: 2 } }, actLine: { pier: 'Noctis had brought two rods and no bait and an unshakable belief that the bay owed him a fish. It took an hour and a borrowed bucket of shrimp, but she landed one first, and he made her hold it up for a photo.' } }, 'Walking the pier with him becomes fishing: +2 Proficiency.'],
    ['noctis', 4, 'Power Nap', 'daily', { powerNap: 1 }, 'Resting at the dorm makes Solar Great the next day, not just Good.'],
    ['noctis', 7, 'Warp-Strike', 'assist', { warpStrike: {} }, 'Solar’s first attack each battle always goes first and can’t miss.'],
    ['noctis', 10, 'Armiger', 'max', { armiger: { pct: 0.2 } }, 'While Solar’s Theurgy gauge is full, each of her attacks adds a phantom-sword hit for +20% Almighty damage.'],
    ['shadowheart', 2, 'Guidance', 'daily', { guidance: 1 }, 'Once a week, Solar can retry a wrong answer in class.'],
    ['shadowheart', 4, 'Sanctuary', 'assist', { sanctuary: { below: 0.2 } }, 'Once per battle, the first ally to fall below 20% HP can’t be targeted until their next turn.'],
    ['shadowheart', 6, 'Night Orchid', 'tartarus', { nightOrchid: 0.3 }, 'One empty room on each floor becomes a small shrine that restores 30% HP and SP.'],
    ['shadowheart', 8, 'Spirit Guardians', 'assist', { spiritGuardians: { power: 24 } }, 'Foes that hit Solar with a physical attack take light Light damage back.'],
    ['shadowheart', 10, 'Warding Bond', 'max', { learn: 'warding_bond' }, 'Solar learns Warding Bond: for 3 turns, one ally takes half damage and Solar takes the other half.'],
    ['leon', 2, 'First Aid Spray', 'tartarus', { nightKit: { aid_spray: 1 } }, 'Each night starts with one First Aid Spray that heals the whole party 40%.'],
    ['leon', 4, 'Knife Parry', 'battle', { knifeParry: { chance: 0.4 } }, 'When Solar Guards, physical hits are parried for no damage 40% of the time.'],
    ['leon', 6, 'Roundhouse', 'assist', { roundhouse: { power: 30 } }, 'Once per battle, when Solar knocks a foe Down, Leon cuts in with a roundhouse that hits every other foe for light Strike damage.'],
    ['leon', 8, 'Mission Briefing', 'tartarus', { missionBriefing: 3 }, 'Full-moon operations start with the party’s attack up for 3 turns.'],
    ['leon', 10, 'Suplex', 'max', { learn: 'suplex' }, 'Solar learns Suplex: heavy Strike damage to one foe, always a crit against a Down foe.'],
    ['rohan', 2, 'Speed Reader', 'daily', { speedReader: 1 }, 'Books take one fewer night to finish (at least one).'],
    ['rohan', 4, 'Heaven’s Door', 'assist', { heavensDoor: { turns: 3 } }, 'Once per battle, Rohan writes a rule into one Shadow: it can’t target Solar for 3 turns.'],
    ['rohan', 7, 'Sketch the Floor', 'tartarus', { sketchFloor: {} }, 'Floors Solar has cleared before start with the whole map revealed on later climbs.'],
    ['rohan', 10, 'No! I Refuse!', 'max', { noRefuse: {} }, 'Once per battle, Solar flatly refuses one ailment or instant kill, and it fails.'],
    ['widowmaker', 2, 'Infra-Sight', 'tartarus', { infraSight: {} }, 'Every Shadow room on the floor is shown, with strong groups marked.'],
    ['widowmaker', 4, 'Venom Mine', 'assist', { venomMine: { chance: 0.5 } }, 'Each battle, one random foe starts Poisoned (50%).'],
    ['widowmaker', 6, 'Grappling Hook', 'tartarus', { grapple: 2 }, 'Escaping a normal fight always works, and the Reaper loses 2 extra steps afterward.'],
    ['widowmaker', 8, 'Headshot', 'battle', { headshot: { crit: 10 } }, 'Solar’s Pierce attacks (her naginata) crit 10% more often.'],
    ['widowmaker', 10, 'Widow’s Kiss', 'max', { learn: 'widows_kiss' }, 'Solar learns Widow’s Kiss: severe Pierce damage to one foe. It ignores Resist and always crits a foe that hasn’t acted this round.'],
    // ── Searchers
    ['hanni', 2, 'Mom Mode', 'daily', { momMode: 1 }, 'Once a week, Solar wakes up Good instead of Tired after a Tartarus night (there’s fruit waiting).'],
    ['hanni', 4, 'Tea Time', 'tartarus', { teaTime: 0.15 }, 'Access points restore 15% HP and SP.'],
    ['hanni', 6, 'Grounded', 'assist', { grounded: ['fear', 'distress'] }, 'Solar can’t be inflicted with Fear or Distress.'],
    ['hanni', 10, 'Tether', 'max', { tether: { above: 0.5 } }, 'While Solar is above 50% HP, no single hit can knock her out. She holds on at 1 HP.'],
    ['hyein', 2, 'Fit Check', 'daily', { weekendCharm: 1 }, '+1 Charm on every activity on weekends.'],
    ['hyein', 4, 'Tailor Made', 'daily', { shopOff: { shop: 'police', kinds: ['armor'], pct: 15 }, solarDef: 5 }, 'Police Box armor costs 15% less, and every armor Solar wears gets +5 defense.'],
    ['hyein', 5, 'Spotlight', 'assist', { spotlight: { chance: 0.2 } }, 'Foes are 20% less likely to target Solar.'],
    ['hyein', 7, 'Sewing Machine', 'daily', { sewingMachine: 1 }, 'Sewing with her becomes an evening activity at Solar’s desk: +3 Proficiency and +1 Charm.'],
    ['hyein', 10, 'Showstopper', 'max', { learn: 'runway' }, 'Solar learns Showstopper (Runway): for 2 turns, every foe targets Solar. She gets defense up, and each hit she takes fills her Theurgy.'],
    ['jaehyun', 2, 'It’s a Schedule', 'daily', { schedule: 1 }, 'Once a week, Solar can fit two activities into one After School slot.'],
    ['jaehyun', 4, 'Audible', 'battle', {}, 'Once per battle, Solar can swap a party member for someone on the bench without using a turn.', 'Waits on party switching in battle.'],
    ['jaehyun', 6, 'Wear Layers', 'daily', { wearLayers: 1 }, 'Going to Tartarus while Tired leaves Solar Tired, not Sick (once a week).'],
    ['jaehyun', 8, 'Blindside Block', 'assist', { blindside: { over: 0.3 } }, 'Once per battle, the first hit that would take more than 30% of Solar’s HP is cut in half.'],
    ['jaehyun', 10, 'Field General', 'max', { fieldGeneral: { step: 0.1 } }, 'Shifts chain through the whole party, and each pass adds another +10% damage.'],
    ['minji', 2, 'Golden Hour', 'daily', { goldenHour: { areas: ['port', 'portisland'], stat: { charm: 1 } } }, 'On clear days, after-school activities on Port Island give +1 Charm.'],
    ['minji', 3, 'Crosshair Sync', 'battle', { crosshair: { crit: 15 } }, 'Kat’s perk. The party’s crit rate is up (+15%) against knocked-down enemies.'],
    ['minji', 5, 'Duo Cohesion', 'battle', { duo: { power: 34 } }, 'Kat’s perk. Paired with Solar: a guaranteed follow-up from Minji when Solar lands a crit or a support heal.'],
    ['minji', 8, 'Behind the Lens', 'battle', { behindLens: {} }, 'Kat’s perk. Once per battle, surviving a lethal blow leaves Solar at 1 HP and triggers an automatic counter-snipe.'],
    ['minji', 10, 'Cut, Print', 'max', { cutPrint: { heal: 0.1 } }, 'Once per battle, when Solar crits a Down foe, she gets One More even if she already had one, and the party heals 10%.'],
    ['mark', 2, 'Warm-Up', 'daily', { actStat: { karaoke: { charm: 2, courage: 1 } } }, 'Karaoke gives +2 Charm and +1 Courage.'],
    ['mark', 4, 'Count-In', 'assist', { countIn: ['agi'] }, 'The party starts each battle with agility up.'],
    ['mark', 6, 'Setlist', 'tartarus', { setlist: 1 }, 'The node map shows one extra layer ahead.'],
    ['mark', 8, 'Harmony', 'assist', { harmony: { dmg: 0.25 } }, 'When two party members hit the same weakness back to back, the second hit deals 25% more damage.'],
    ['mark', 10, 'Key Change', 'max', { keyChange: { th: 30, dmg: 0.2 } }, 'After Rise and Shine, Solar’s Theurgy gauge restarts at 30%, and the party’s next attacks deal 20% more damage.'],
    ['haechan', 2, 'Cut the Fluff', 'battle', { cutFluff: { ail: 0.1 } }, 'Kat’s perk. Every foe’s status openings (the ailments that land on it) are revealed at once in Analyze, and the party’s ailments land 10% more often.'],
    ['haechan', 4, 'Recruitment Pitch', 'daily', { pitch: { stat: { charm: 1 } } }, 'Once a day, Solar gets a hint on a class question, and +1 Charm when she gets it right.'],
    ['haechan', 5, 'Loud About It', 'battle', { loud: { dmg: 0.5 } }, 'When a foe crits Solar, Haechan’s next attack on that foe deals 50% more damage.'],
    ['haechan', 7, 'Bait and Punish', 'battle', { baitPunish: { chance: 0.5, dmg: 0.5 } }, 'Kat’s perk. When a foe tries an ailment on the party, the target counters (50%), and the team’s counters deal 50% more damage.'],
    ['haechan', 10, 'Hear the Room', 'max', { hearRoom: {} }, 'Each round, Solar sees which foe is charging its strongest move, and her first hit on that foe always crits.'],
    ['yunjin', 2, 'Taxi Driver Coffee', 'daily', { actStat: { vending: { courage: 1 } }, weeklyCure: { act: 'vending', cond: 'tired' } }, 'The vending machine gives +1 Courage, and once a week its coffee clears Tired.'],
    ['yunjin', 4, 'Prada Swing', 'assist', { prada: { power: 28, down: 0.3 } }, 'Once per battle, when a foe crits Solar, Yunjin swings back: light Strike damage, with a 30% chance to knock it Down.'],
    ['yunjin', 6, 'Sticker Code', 'tartarus', { stickerCode: {} }, 'Shadow rooms get a sticker: green if the party knows something they’re weak to, red if not.'],
    ['yunjin', 8, 'Sad, Angry or Shoes', 'tartarus', { moodPick: {} }, 'At each access point, Solar picks a mood for the next floor: Sad (defense up), Angry (attack up), Plotting (crits up) or Shoes (agility up).'],
    ['yunjin', 10, 'Ride or Die', 'max', { rideOrDie: {} }, 'Once per battle, when an ally falls, Solar gets a free turn right away, and her next revive heals in full.'],
    ['jungwon', 2, 'Tutor Session', 'daily', { jobPay: { tutor: 25 }, studyAny: { knowledge: 1 } }, 'The tutoring job pays 25% more, and studying anywhere gives +1 Knowledge.'],
    ['jungwon', 4, 'Order of Business', 'battle', { orderBiz: { turns: 1 } }, 'Debuffs from Solar and Jungwon last one extra turn.'],
    ['jungwon', 6, 'Motion Denied', 'battle', { motionDenied: {} }, 'Once per battle, when a foe buffs itself, Jungwon strips it off at once.'],
    ['jungwon', 8, 'Stewardship', 'tartarus', { stewardship: 0.15 }, 'Yen from battles is +15%.'],
    ['jungwon', 10, 'Polite Fury', 'max', { politeFury: { dmg: 0.15, max: 3 } }, 'Each time an ally takes a crit or a weakness hit, Solar’s next skill deals 15% more damage (stacks 3 times).'],
    ['jihoon', 2, 'Hype Man', 'battle', { hypeMan: { turns: 2 } }, 'Jihoon’s buffs on Solar last 2 extra turns.'],
    ['jihoon', 4, 'Pilates Partner', 'daily', { weekly: 'pilates', stat: { proficiency: 2, courage: 1 }, dow: 6 }, 'Once a week (Saturdays), pilates with him gives +2 Proficiency and +1 Courage without using any free time.'],
    ['jihoon', 6, 'Main Character', 'battle', { mainChar: { below: 0.5 } }, 'While Solar is under half HP, foes go after Jihoon instead (he insists).'],
    ['jihoon', 8, 'Almighty Hoon', 'tartarus', { almightyHoon: 'atk' }, 'After beating a strong Shadow group, the party starts the next fight with attack up.'],
    ['jihoon', 10, 'Center Stage', 'max', { centerStage: { dmg: 0.2, th: 10 } }, 'At full HP, Solar deals 20% more damage, and every One More she earns gives the party +10 Theurgy.'],
    ['junkyu', 2, '#teamsolar', 'daily', { teamSolar: 1 }, 'The first hangout each week, with anyone, gives +1 ♪.'],
    ['junkyu', 4, 'Ice Pack', 'assist', { icePack: ['shock', 'freeze', 'poison'] }, 'Once per battle, Shock, Freeze or Poison on Solar wears off at the end of that turn.'],
    ['junkyu', 6, 'Hug List', 'tartarus', { hugList: 1 }, 'At each access point, the most hurt party member is fully healed.'],
    ['junkyu', 8, 'Keeping Count', 'assist', { keepCount: { n: 5 } }, 'Every heal or buff Solar gives an ally adds to a counter. At 5, the party gets a free Media.'],
    ['junkyu', 10, 'Big Hug', 'max', { learn: 'big_hug' }, 'Solar learns Big Hug (once per battle, low SP): fully heals one ally and cures all their ailments.'],
    ['sunoo', 2, 'Seven Croissants', 'daily', { freeAct: ['chagall'], actStat: { chagall: { kindness: 1 } } }, 'Coffee at Chagall Café is free and gives +1 Kindness.'],
    ['sunoo', 4, 'Peacemaker', 'assist', { peacemaker: ['charm', 'fear'] }, 'Charm and Fear on the party wear off a turn sooner.'],
    ['sunoo', 6, 'Takeout Box', 'tartarus', { nightKit: { kit_soul: 1 } }, 'Each night starts with a free Chewing Soul.'],
    ['sunoo', 8, 'Staff Shift', 'daily', { jobPay: { yeobos: 25 }, jobStat: { yeobos: { kindness: 1 } } }, 'Yeobo’s Cafe shifts pay 25% more and give +1 Kindness.'],
    ['sunoo', 10, 'Sunny Side', 'max', { sunnySide: { light: 0.15, heal: 0.05 } }, 'The party’s Light damage is +15%, and everyone recovers 5% HP at the start of each battle.'],
    ['cherry', 2, 'Back Row', 'daily', { backRow: { stat: { courage: 1 } } }, 'Solar is half as likely to doze off in class, and when she does she still gets +1 Courage.'],
    ['cherry', 4, 'Mean on Purpose', 'assist', { meanPurpose: { chance: 0.2 } }, 'Solar’s debuffs also Distress the foe (20%).'],
    ['cherry', 6, 'On Ice', 'battle', { onIce: {} }, 'Solar resists Ice and gets agility up for the first turn of every battle.'],
    ['cherry', 8, 'Try Me', 'assist', { tryMe: {} }, 'Once per battle, an attack aimed at Solar while she’s Down is cancelled, and the attacker is Distressed.'],
    ['cherry', 10, 'Bestie Clause', 'max', { bestie: { dmg: 0.2 } }, 'Solar’s crits on a debuffed foe Distress it, and Distressed foes take 20% more crit damage.'],
    // ── Other links
    ['rio', 2, 'Practice Swing', 'daily', {}, 'Club practice gives +1 Courage and +1 Proficiency.', 'Waits on clubs (the hook is places.js clubs).'],
    ['rio', 4, 'Second Serve', 'assist', { secondServe: {} }, 'Once per battle, if Solar’s attack misses, she gets an immediate retry.'],
    ['rio', 6, 'Stamina', 'battle', { stamina: { hp: 0.08, win: 0.05 } }, 'Solar gets +8% max HP, and the party recovers 5% HP after every win.'],
    ['rio', 10, 'Match Point', 'max', { matchPoint: { below: 0.2 } }, 'Solar always crits a foe under 20% HP.'],
    ['saori', 2, 'Quiet Corner', 'daily', { actStat: { library: { knowledge: 1 } } }, 'Studying in the library gives +1 Knowledge.'],
    ['saori', 5, 'Margin Notes', 'battle', { marginNotes: {} }, 'Analyze is already free; once per battle, Solar’s first Analyze reads every foe on the field at once.'],
    ['saori', 7, 'Bookmark', 'tartarus', { bookmark: {} }, 'Leaving with a Traesto Gem keeps the progress since the last access point.'],
    ['saori', 10, 'Quiet Strength', 'max', { quietStrength: { heal: 0.2 } }, 'When Solar is the only one standing, she gets attack, defense and agility up and recovers 20% HP (once per battle).'],
    ['ann', 2, 'Model Discount', 'daily', { shopOff: { shop: 'bebluev', pct: 15 }, shopStat: { bebluev: { charm: 1 } } }, 'Be Blue V is 15% off, and shopping there gives +1 Charm.'],
    ['ann', 4, 'Whip Crack', 'assist', { whipCrack: { up: 0.15 } }, 'The party’s Charm and Bind land 15% more often.'],
    ['ann', 6, 'Carmen’s Heat', 'assist', { carmen: { fire: 0.15 } }, 'The party’s Fire damage is +15%.'],
    ['ann', 8, 'Snack Break', 'tartarus', { snackBreak: 0.1 }, 'Reaching an access point restores 10% SP to the party.'],
    ['ann', 10, 'Titanic Kiss', 'max', { learn: 'titanic_kiss' }, 'Solar learns Titanic Kiss: the party’s next magic attack deals 2.5× damage.'],
    ['haru', 2, 'Garden Patch', 'daily', { actStat: { schoolgarden: { kindness: 1, proficiency: 1 }, roofgarden: { kindness: 1, proficiency: 1 } } }, 'Tending a garden (the school’s rooftop garden or the dorm roof) gives +1 Kindness and +1 Proficiency more.'],
    ['haru', 4, 'Milady’s Salute', 'assist', { milady: { power: 22 } }, 'After an All-Out Attack, Haru follows up with a grenade shell: light Almighty damage to all foes.'],
    ['haru', 7, 'Fresh Harvest', 'tartarus', { freshHarvest: 0.15 }, 'Shadows drop materials 15% more often.'],
    ['haru', 10, 'Bloom', 'max', { bloom: { turns: 3, heal: 0.1 } }, 'The first damage Solar takes each battle is halved, and she heals 10% at the end of each of her first 3 turns.'],
    ['kasumi', 2, 'Morning Stretch', 'daily', { weekly: 'stretch', stat: { proficiency: 2 }, dow: 2 }, 'Once a week (Tuesdays), a morning routine with her gives +2 Proficiency without using any free time.'],
    ['kasumi', 4, 'Floor Routine', 'assist', { floorRoutine: { evade: 10 } }, 'Solar dodges physical attacks 10% more often.'],
    ['kasumi', 6, 'Perfect Ten', 'battle', { perfectTen: {} }, 'Each crit Solar lands raises her agility one step (up to the stack limit).'],
    ['kasumi', 8, 'Light Feet', 'tartarus', { lightFeet: 0.3 }, '30% chance to slip past a Shadow room without a fight (Solar chooses).'],
    ['kasumi', 10, 'Pirouette', 'max', { learn: 'pirouette' }, 'Solar learns Pirouette: medium Pierce damage to all foes, and she dodges the next attack aimed at her.'],
    ['kuromi', 2, 'Grudge Notebook', 'assist', { grudge: { dmg: 0.25 } }, 'A Shadow that knocks out a party member takes 25% more damage from Solar for the rest of the battle.'],
    ['kuromi', 4, 'Troublemaker', 'daily', { actStat: { alley: { courage: 2 } } }, 'Cutting through the back alley gives +2 Courage and never goes badly.'],
    ['kuromi', 7, 'Rival’s Dare', 'tartarus', { rivalsDare: 2, gift: 'nag_kitty' }, 'Strong Shadow groups give double EXP. She also gives Solar the Pink Kitty naginata, as a dare.'],
    ['kuromi', 10, 'Payback', 'max', { payback: { th: 10, dmg: 0.3 } }, 'When Solar takes a crit or a weakness hit, she gets +10 Theurgy, and her next attack deals 30% more damage.'],
    ['mymelody', 3, 'Almond Pound Cake', 'daily', { weekly: 'poundcake', cond: 1, dow: 3 }, 'Once a week, Solar’s condition improves one step.'],
    ['mymelody', 6, 'Sweet Nature', 'assist', { sweetNature: ['charm'] }, 'Charm on the party wears off at once.'],
    ['mymelody', 10, 'Melody Hug', 'max', { melodyHug: {} }, 'Solar’s heals also give defense up.'],
    ['elizabeth', 2, 'Compendium Credit', 'daily', {}, 'Velvet Room draws cost less.', 'Waits on the Velvet Room draws.'],
    ['elizabeth', 4, 'Velvet Key', 'battle', { gift: 'pts' }, '+1 skill point for Haenim’s tree.'],
    ['elizabeth', 7, 'Sunday Best', 'daily', { sundayBest: 1 }, 'On Sundays, every social stat gain is +1.'],
    ['elizabeth', 10, 'Megidolaon', 'max', { learn: 'megidolaon' }, 'Solar learns Megidolaon: heavy Almighty damage to all foes (expensive).'],
    ['wren', 2, 'Timetable', 'tartarus', { timetable: 4 }, 'The Reaper’s step counter is shown exactly, and it arrives 4 steps later.'],
    ['wren', 4, 'Porter’s Tip', 'tartarus', { portersTip: 0.15 }, 'Yen from Tartarus is +15%.'],
    ['wren', 7, 'Waiting Room', 'battle', { waitingRoom: { heal: 0.1 } }, 'When Solar Guards, she recovers 10% HP and SP.'],
    ['wren', 10, 'Through Ticket', 'max', { throughTicket: {} }, 'Once per night, Solar can take the stairs from any room she’s already visited on a floor.']
  ];
  const PERKS = P.map(([link, rank, name, type, fx, desc, stub]) => ({ id: `${link}-${rank}`, link, rank, name, type, fx: fx || {}, desc, stub: stub || null, kat: /^Kat’s perk/.test(desc) }));
  D.perks = PERKS;
  /* MAX skills (and Kiriko's Protective Suzu tie-in). */
  Object.assign(D.skills, {
    grand_slam: { name: 'Grand Slam', el: 'strike', type: 'dmg', target: 'one', power: 118, cost: { hp: 14 }, crit: 10, critDown: true, desc: 'Junpei’s swing. Heavy strike damage to one foe; always a critical against a Down foe.' },
    frozen_verdict: { name: 'Frozen Verdict', el: 'ice', type: 'dmg', target: 'all', power: 70, cost: { sp: 22 }, ail: { id: 'freeze', chance: 0.45 }, desc: 'Mitsuru’s verdict. Medium ice damage to all foes, with a high chance to Freeze.' },
    featherman_strike: { name: 'Featherman Strike', el: 'light', type: 'dmg', target: 'all', power: 70, cost: { sp: 20 }, desc: 'Ken’s finisher. Medium light damage to all foes; a Light weakness always goes Down.' },
    valkyrie: { name: 'Valkyrie', el: 'heal', type: 'valkyrie', target: 'self', turns: 3, once: true, cost: { sp: 20 }, desc: 'Once per battle. For 3 turns, Solar’s single-target heals reach the whole party and she regains 4 SP a turn.' },
    undying_love: { name: 'Undying Love', el: 'heal', type: 'undying', target: 'ally', turns: 2, once: true, cost: { sp: 24 }, desc: 'Once per battle. For 2 turns, Solar and one ally can’t drop below 1 HP.' },
    fangs_out: { name: 'Fangs Out', el: 'almighty', type: 'dmg', target: 'one', power: 78, cost: { sp: 16 }, drain: 0.5, desc: 'Medium Almighty damage to one foe; Solar recovers HP equal to half of it.' },
    cross_slash: { name: 'Cross-Slash', el: 'slash', type: 'dmg', target: 'one', power: 118, cost: { hp: 14 }, crit: 8, ail: { id: 'bind', chance: 0.4 }, desc: 'Heavy slash damage to one foe; it may Bind it.' },
    warding_bond: { name: 'Warding Bond', el: 'support', type: 'bond', target: 'ally', turns: 3, cost: { sp: 14 }, desc: 'For 3 turns, one ally takes half damage and Solar takes the other half.' },
    suplex: { name: 'Suplex', el: 'strike', type: 'dmg', target: 'one', power: 122, cost: { hp: 14 }, critDown: true, desc: 'Leon’s suplex. Heavy strike damage to one foe; always a critical against a Down foe.' },
    widows_kiss: { name: 'Widow’s Kiss', el: 'pierce', type: 'dmg', target: 'one', power: 150, cost: { hp: 16 }, noResist: true, critFresh: true, desc: 'Severe pierce damage to one foe. Ignores Resist; always crits a foe that hasn’t acted this round.' },
    runway: { name: 'Showstopper', el: 'support', type: 'taunt', target: 'self', turns: 2, def: 1, thOnHit: 8, cost: { sp: 16 }, icon: 'sk-veneer', desc: 'Hyein’s runway. For 2 turns every foe targets Solar; her defense rises and each hit she takes fills her Theurgy.' },
    big_hug: { name: 'Big Hug', el: 'heal', type: 'heal', target: 'ally', full: true, cureAll: true, once: true, power: 999, cost: { sp: 8 }, desc: 'Once per battle. Fully heals one ally and cures all their ailments.' },
    titanic_kiss: { name: 'Titanic Kiss', el: 'support', type: 'charge', target: 'allies', mult: 2.5, cost: { sp: 18 }, desc: 'The party’s next magic attack deals 2.5× damage.' },
    pirouette: { name: 'Pirouette', el: 'pierce', type: 'dmg', target: 'all', power: 66, cost: { hp: 14 }, crit: 6, dodgeNext: true, desc: 'Medium pierce damage to all foes; Solar dodges the next attack aimed at her.' },
    megidolaon: { name: 'Megidolaon', el: 'almighty', type: 'dmg', target: 'all', power: 140, cost: { sp: 48 }, desc: 'Heavy Almighty damage to all foes.' }
  });
  ['grand_slam', 'frozen_verdict', 'featherman_strike', 'valkyrie', 'undying_love', 'fangs_out', 'cross_slash', 'warding_bond', 'suplex', 'widows_kiss', 'runway', 'big_hug', 'titanic_kiss', 'pirouette', 'megidolaon'].forEach(k => { D.skills[k].id = k; });
  /* Night-only items (perk kits): used up or gone by morning. */
  Object.assign(D.items, {
    kit_bead: { name: 'Ken’s Revival Bead', type: 'revive', target: 'dead', hp: 0.5, price: 0, tier: 99, icon: 'revive', use: 'both', night: true, desc: 'From Ken’s emergency kit. Revives a fallen ally with half their HP. Only good tonight.' },
    kit_soul: { name: 'Sunoo’s Chewing Soul', type: 'sp', target: 'ally', sp: 50, price: 0, tier: 99, icon: 'soul', use: 'both', night: true, desc: 'From Sunoo’s takeout box. Restores 50 SP to one ally. Only good tonight.' },
    night_bento: { name: 'Fuuka’s Bento', type: 'spPct', target: 'allies', sp: 0.3, price: 0, tier: 99, icon: 'soul', use: 'both', night: true, desc: 'Experimental. Restores 30% SP to the whole party. Probably.' },
    aid_spray: { name: 'First Aid Spray', type: 'heal', target: 'allies', hp: 0.4, price: 0, tier: 99, icon: 'medicine', use: 'both', night: true, desc: 'Leon’s spray. Heals the whole party 40%.' },
    night_leftovers: { name: 'Shinjiro’s Leftovers', type: 'heal', target: 'allies', hp: 0.2, price: 0, tier: 99, icon: 'medicine', use: 'both', night: true, desc: 'From the dorm kitchen, in a box with Solar’s name on it. Heals the whole party 20%. Only good tonight.' }
  });
  // Fuuka's lines for the new systems, the glossary and one-time tips.
  Object.assign(D.nav, {
    shuffle: [['Shuffle Time! Pick a card, quick!', 'The cards are turning… pick one!'], 'happy'],
    shufflePenalty: ['Oh no, that one was upside down…', 'sad'],
    perk: ['{name}’s here!', 'happy']
  });
  D.glossary.push(
    { id: 'shuffle', name: 'Shuffle Time', text: 'After some wins (an All-Out finish, a fast clean fight, Strong Shadows, the Reaper, a full moon, or just luck) the cards spin and you pick one. Cups heal, Coins give yen, Swords give gear (the high ones Solar’s naginatas), Wands give EXP. Major Arcana give Revelation cards, skill cards, Persona boosts and materials. An upside-down card is a penalty.' },
    { id: 'cards', name: 'Revelation cards', text: 'Each fighter has six card slots (I Crown to VI Fate). A card has a main stat and up to four substats; two or four cards of one set add a set bonus. Level cards with Tarot Dust, refine them with Velvet Thread, lock the ones you love and dismantle the rest for dust. Menu → Cards.' },
    { id: 'bonds', name: 'Bond perks', text: 'Every link earns named perks as it ranks up: Battle perks (fighters in the party), Assists (cut-ins from friends outside the party), Tartarus perks, Daily perks, and a MAX skill or passive. A reversed link pauses its perks. Menu → Bonds.' }
  );
  D.tips.shuffle = ['shuffle', 'Shuffle Time! Watch the cards, then pick one. Upside-down ones are bad news.'];
  D.tips.perk = ['bonds', 'A friend just helped from outside the party! Bond perks are in the menu’s Bonds tab.'];

  /* Who each link is, for cut-ins in the battle frame (the life sim's link files aren't loaded there): name, portrait face. */
  const WHO = {};
  [['akihiko', 'Akihiko', 'happy'], ['yukari', 'Yukari', 'neutral'], ['junpei', 'Junpei', 'happy'], ['mitsuru', 'Mitsuru', 'neutral'], ['fuuka', 'Fuuka', 'happy'],
    ['aigis', 'Aigis', 'happy'], ['ken', 'Ken', 'happy'], ['koromaru', 'Koromaru', 'happy'], ['shinjiro', 'Shinjiro', 'neutral'], ['kiriko', 'Kiriko', 'happy'],
    ['mercy', 'Mercy', 'happy'], ['sebastian', 'Sebastian', 'happy'], ['aphrodite', 'Aphrodite', 'happy'], ['astarion', 'Astarion', 'happy'], ['cloud', 'Cloud', 'serious'],
    ['judy', 'Judy', 'happy'], ['noctis', 'Noctis', 'neutral'], ['shadowheart', 'Shadowheart', 'serious'], ['leon', 'Leon', 'serious'], ['rohan', 'Rohan', 'serious'],
    ['widowmaker', 'Widowmaker', 'serious'], ['hanni', 'Hanni', 'happy'], ['hyein', 'Hyein', 'happy'], ['jaehyun', 'Jaehyun', 'happy'], ['minji', 'Minji', 'happy'],
    ['mark', 'Mark', 'neutral'], ['haechan', 'Haechan', 'happy'], ['yunjin', 'Yunjin', 'happy'], ['jungwon', 'Jungwon', 'serious'], ['jihoon', 'Jihoon', 'happy'],
    ['junkyu', 'Junkyu', 'happy'], ['sunoo', 'Sunoo', 'happy'], ['cherry', 'Cherry', 'neutral'], ['rio', 'Rio', 'happy'], ['saori', 'Saori', 'neutral'],
    ['ann', 'Ann', 'happy'], ['haru', 'Haru', 'happy'], ['kasumi', 'Kasumi', 'happy'], ['kuromi', 'Kuromi', 'happy'], ['mymelody', 'My Melody', 'happy'],
    ['elizabeth', 'Elizabeth', 'happy'], ['wren', 'Wren', 'neutral']].forEach(([id, name, face]) => { WHO[id] = { name, face }; });

  /* ── Perk rules ── */
  const fighter = id => D.party.some(m => m.id === id && id !== 'solar');
  const isSearcher = id => !!(D.party.find(m => m.id === id) || {}).searcher;
  const perksOf = link => PERKS.filter(p => p.link === link);
  const perkById = id => PERKS.find(p => p.id === id) || null;
  /* own (earned and working) | party (earned; its fighter must be in the party) | assist (a searcher's battle perk working as an
     Assist before they join) | paused (the link is reversed) | rank (not yet) | stub (not built yet). ctx: { bonds, rev, joined } */
  function perkState(p, ctx = {}) {
    if (p.stub) return 'stub';
    const r = +((ctx.bonds || {})[p.link]) || 0;
    if (r < p.rank) return 'rank';
    if ((ctx.rev || []).includes(p.link)) return 'paused';
    if (p.type === 'battle' && fighter(p.link)) {
      if ((ctx.joined || []).includes(p.link)) return 'party';
      return isSearcher(p.link) ? 'assist' : 'rank';
    }
    return 'own';
  }
  const ctxOf = (save, joined = []) => ({ bonds: (save && save.bonds) || {}, rev: (save && save.bondsRev) || [], joined });
  /* The battle's active perks: { fxKey: Object.assign({ perk, link, name, by (a fighter who must be in the party) | null }, params) }. */
  function battlePerks(save, joined = []) {
    const ctx = ctxOf(save, joined), out = {};
    PERKS.forEach(p => {
      const st = perkState(p, ctx);
      if (!['own', 'party', 'assist'].includes(st)) return;
      Object.entries(p.fx).forEach(([k, v]) => {
        if (['gift', 'learn', 'nightKit'].includes(k) || p.type === 'daily' && k !== 'solarDef') return; // daily perks are core.js's (it reads PERKS itself)
        out[k] = Object.assign({ perk: p.id, link: p.link, name: p.name, type: p.type, by: st === 'party' ? p.link : null, assist: st === 'assist' || p.type === 'assist', rank: (ctx.bonds || {})[p.link] || 0 }, typeof v === 'object' && !Array.isArray(v) ? v : { v });
      });
    });
    return out;
  }
  const hasPerk = (save, id, joined = []) => { const p = perkById(id); return !!p && ['own', 'party', 'assist'].includes(perkState(p, ctxOf(save, joined))); };
  /* Skills Solar keeps from MAX links (engine.js skillsFor). */
  const bondSkills = save => PERKS.filter(p => p.fx.learn && perkState(p, ctxOf(save)) === 'own').map(p => p.fx.learn);
  /* One-time gifts from reaching a rank (a naginata, a skill point). Returns what was granted. */
  function grantGifts(save) {
    const got = [];
    save.bondGifts = Array.isArray(save.bondGifts) ? save.bondGifts : [];
    PERKS.forEach(p => {
      const g = p.fx.gift;
      if (!g || save.bondGifts.includes(p.id) || ((save.bonds || {})[p.link] || 0) < p.rank) return;
      save.bondGifts.push(p.id);
      if (g === 'pts') { save.pts = (save.pts || 0) + 1; got.push({ perk: p.id, pts: 1 }); }
      else if (D.gear[g]) { save.gear.owned[g] = (save.gear.owned[g] || 0) + 1; got.push({ perk: p.id, gear: g }); }
    });
    return got;
  }
  /* The life sim's link ranks into the battle save (and the reversed ones). love: the links on their romance route, and date:
     today's "m/d" (bonds.js: romance versions of the bond skills, and a bond's last day). Both are left alone when not given. */
  function syncBonds(save, ranks = {}, reversed = [], love = null, date = null) {
    const b = {};
    Object.entries(ranks || {}).forEach(([k, r]) => { const n = Math.min(10, Math.floor(+r || 0)); if (n > 0) b[k] = n; });
    save.bonds = b; save.bondsRev = (reversed || []).filter(x => typeof x === 'string');
    if (Array.isArray(love)) save.bondsLove = love.filter(x => typeof x === 'string');
    if (typeof date === 'string') save.bondDate = date;
    return grantGifts(save);
  }
  /* Perks a link unlocked at exactly this rank (the rank-up toast). */
  const perksAt = (link, rank) => PERKS.filter(p => p.link === link && p.rank === rank);
  const TYPE_NAME = { battle: 'Battle', assist: 'Assist', tartarus: 'Tartarus', daily: 'Daily', max: 'MAX' };

  return {
    NAG, BOSS_WEAPON, CHEST_WEAPON, WREF, wrefOf, wrefCost, refineWeapon, weaponAtk, bonusText, canPay,
    STATS, SLOTS, SETS, CARD, rollCard, rarityRoll, mainValue, cardName, statLine, addCard, cardById, wearerOf, equipCard, unequipCard, equippedCards,
    levelCost, refineCost, levelCard, refineCard, dismantleCard, cardBonus, setCounts, ensureCards,
    emptyBonus, addBonus, unitBonus, SKILL_CARDS, teachable, teach,
    SH, shuffleDue, deal, cardText, applyShuffle,
    PERKS, perksOf, perkById, perkState, ctxOf, battlePerks, hasPerk, bondSkills, grantGifts, syncBonds, perksAt, TYPE_NAME, fighter, WHO,
    names: () => Object.fromEntries(Object.entries(WHO).map(([k, v]) => [k, v.name]))
  };
})();
