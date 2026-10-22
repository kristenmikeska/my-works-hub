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
    ['nag_rose', 'black-rose', 'Black Rose', 5, 104, 0, { el: { dark: 20 }, crit: 8, insta: 10 }, 'Red roses, a skull and a chain. Dark skills +20%, crits +8%, Mudo lands 10% more often.', ['The Hermit (first clear)', 'Shuffle Time · Swords']],
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
    if (b.costCut) out.push(`SP costs −${Math.round(b.costCut)}%`); if (b.def) out.push(`Defense +${Math.round(b.def)}`);
    if (b.down) out.push(`vs Down +${Math.round(b.down)}%`); if (b.yen) out.push(`Battle yen +${Math.round(b.yen)}%`);
    return out.join(' · ');
  };
  const TINT = { nag_ivory: '#fff2d6', nag_ice: '#9fe8ff', nag_bamboo: '#5fe0b0', nag_mint: '#a8ffd8', nag_lock: '#d2324f', nag_moon: '#5a6ad0', nag_fox: '#ff8a3d', nag_kitty: '#ff8cc0', nag_rose: '#c43b3b', nag_butterfly: '#c9b8ff', nag_prism: '#e0d0ff', nag_dragon: '#c9d0dc' };
  NAG.forEach(([id, art, name, tier, atk, price, bonus, desc, src]) => {
    D.gear[id] = { name, slot: 'weapon', wtype: 'naginata', atk, tier, price, rare: !price || tier >= 5, nag: true, art: WART + art + '.webp', bonus, src, look: desc, tint: TINT[id],
      stats: bonus.stats || undefined, nullAil: bonus.nullAil || undefined, desc: bonusText(bonus) };
  });

  /* ══════════ Haechan's knives (Kat's haechan-weapons.png, cut into art/weapons/haechan-*.webp by tools/femc-cards.py) ══════════
     The same system as the naginatas (bonus, refine, art, look, sources), but only Haechan can hold them (`owner`; every
     equip list and shop checks fits()). The Starter replaces his plain Combat Knife as the weapon he starts with (tier 0:
     always his, never refined; old saves holding the Combat Knife keep it until they swap). FEMC-ART-TODO.md appendix, weapon sheets. */
  const HK = [
    ['hk_starter', 'starter', 'Black Tactical', 0, 32, 0, { crit: 3 }, 'A plain black tactical knife, his since before any of this. Crit +3%.', ['Haechan’s own (he starts with it)']],
    ['hk_harbor', 'harbor-watch', 'Harbor Watch', 3, 64, 4400, { stats: { en: 3 }, hpRegen: 3 }, 'Rust-red steel, a rope-wrapped grip, an anchor guard and a sea-glass pommel. +3 En, and he regains 3% HP each turn.', ['Police Box (tier 3)', 'Shuffle Time · Swords']],
    ['hk_mixdown', 'mixdown', 'Mixdown', 4, 80, 0, { th: 25, spRegen: 3 }, 'A waveform etched down the blade, a fader for a guard and a headphone jack on the cord. His Theurgy fills 25% faster, and 3 SP back each turn.', ['Haechan’s bond (rank 7)']],
    ['hk_widow', 'widows-kiss', 'Widow’s Kiss', 4, 84, 0, { crit: 14, critX: 18 }, 'Violet steel, a grappling-line grip and a scope lens in the pommel. Crit +14%, and critical hits deal 18% more.', ['Locked chests (Arqa and up)', 'Shuffle Time · Swords']],
    ['hk_disc', 'old-disc', 'Old Disc', 5, 102, 0, { evade: 10, stats: { lu: 4 }, el: { elec: 15 } }, 'Black steel behind a scuffed, silver disc. +4 Lu, better evasion, and Elec skills +15% (Dalnim’s static).', ['Chariot & Justice (first clear)', 'Shuffle Time · Swords']],
    ['hk_sunlight', 'neo-sunlight', 'Neo Sunlight', 6, 128, 15000, { el: { light: 20 }, stats: { ma: 3 }, crit: 5 }, 'A neon-green edge and a guard of sun rays; his name means full of sunlight. +3 Ma, Light +20%, crit +5%.', ['Mayoido Antiques (tier 6)', 'Shuffle Time · Swords']]
  ];
  const HK_TINT = { hk_starter: '#6b6f7a', hk_harbor: '#c2553a', hk_mixdown: '#c9d0dc', hk_widow: '#9a6bff', hk_disc: '#d8e4ff', hk_sunlight: '#7dff6a' };
  /* ══════════ Jungwon's rapiers, Jihoon's gloves, Minji's bows (Kat's <name>-weapons.png, batch 22; FEMC-ART-TODO.md appendix, weapon sheets) ══════════
     The same system as Haechan's knives: owner-only, a starter that replaces their plain tier-0 weapon, refines, art and a
     look. Extra bonus keys these use: acc (copied to the gear's own acc: gearLine shows it, refines don't scale it), yen (+% battle yen while he fights). */
  const JW = [
    ['jw_starter', 'starter', 'Plain Silver', 0, 32, 0, { acc: 4 }, 'A plain silver rapier, kept polished like a council pin. Accuracy +4.', ['Jungwon’s own (he starts with it)']],
    ['jw_mandate', 'mandate', 'Mandate', 3, 64, 4400, { costCut: 10, stats: { ma: 3 } }, 'Navy and gold, a council-crest guard and a gold star pin. +3 Ma, and his skills cost 10% less SP.', ['Police Box (tier 3)', 'Shuffle Time · Swords']],
    ['jw_maeumi', 'maeumi', 'Maeumi', 4, 80, 0, { heal: 20, hpRegen: 3 }, 'Cream and brown, a white flower and a tiny dog-paw charm on the guard. Healing +20%, and he regains 3% HP each turn.', ['Jungwon’s bond (rank 6)']],
    ['jw_jade', 'jade-heir', 'Jade Heir', 4, 84, 0, { stats: { ag: 3 }, evade: 8, crit: 8 }, 'A jade-green swept guard and a red cord tassel: old money. +3 Ag, better evasion, crit +8%.', ['Locked chests (Arqa and up)', 'Shuffle Time · Swords']],
    ['jw_tortoise', 'black-tortoise', 'Black Tortoise', 4, 82, 0, { el: { ice: 20 }, freeze: 12, stats: { en: 3 } }, 'A tortoise-shell guard, a serpent up the grip and frost down the blade (Hyeonmu). +3 En, Ice +20%, Freeze +12%.', ['The Hierophant (first clear)', 'Shuffle Time · Swords']],
    ['jw_hyphen', 'hyphen', 'Hyphen', 6, 128, 15000, { el: { dark: 20 }, crit: 10, critX: 15 }, 'Crimson and black, two halves joined by a bar and a blood-red gem. Dark +20%, crit +10%, and critical hits deal 15% more.', ['Mayoido Antiques (tier 6)', 'Shuffle Time · Swords']]
  ];
  const JH = [
    ['jh_starter', 'starter', 'Plain Black', 0, 32, 0, { phys: 3 }, 'Plain black fingerless gloves. Physical +3%.', ['Jihoon’s own (he starts with them)']],
    ['jh_varsity', 'varsity', 'Varsity', 3, 64, 4400, { stats: { ag: 3 }, evade: 6, th: 15 }, 'Leather and a jacket patch: a big red J, a crown, a pennant and a baseball. +3 Ag, better evasion, Theurgy +15%.', ['Police Box (tier 3)', 'Shuffle Time · Swords']],
    ['jh_bestfriend', 'best-friend', 'Best Friend', 4, 80, 0, { def: 8, hpRegen: 4 }, 'A white fluffy-dog patch and a gold bow, for Nana. Defense +8, and he regains 4% HP each turn.', ['Jihoon’s bond (rank 6)']],
    ['jh_capitalized', 'capitalized', 'Capitalized', 4, 84, 0, { critX: 25, stats: { st: 3 } }, 'Gold knuckle plates spelling HOAX, loud and full of himself. +3 St, and critical hits deal 25% more.', ['Locked chests (Arqa and up)', 'Shuffle Time · Swords']],
    ['jh_goblin', 'goblin-club', 'Goblin Club', 5, 104, 11000, { phys: 12, el: { wind: 15 }, stats: { st: 3 } }, 'Gold studs and a red-and-gold sash, a nod to Dokkaebi. +3 St, Physical +12%, Wind +15%.', ['Mayoido Antiques (tier 5)', 'Shuffle Time · Swords']],
    ['jh_treasure', 'treasure', 'Treasure', 6, 126, 0, { stats: { lu: 5 }, yen: 15, crit: 5 }, 'Sky-blue with gold jewel studs, like a treasure chest. +5 Lu, crit +5%, and battle yen +15% while he fights.', ['Fortune & Strength (first clear)', 'Shuffle Time · Swords']]
  ];
  const MJ = [
    ['mj_starter', 'starter', 'Plain Recurve', 0, 32, 0, { acc: 4 }, 'A plain recurve bow. Accuracy +4.', ['Minji’s own (she starts with it)']],
    ['mj_bunny', 'bunny', 'Bunny', 3, 66, 0, { evade: 10, stats: { ag: 3 } }, 'Soft Y2K blue, a bunny-ear tip, ribbons and a bunny charm. +3 Ag and big evasion.', ['Empress & Emperor (first clear)', 'Shuffle Time · Swords']],
    ['mj_finalcut', 'final-cut', 'Final Cut', 3, 64, 4400, { down: 20, th: 10 }, 'Limbs made of film reels and a clapperboard charm. 20% more damage to foes that are Down, Theurgy +10%.', ['Police Box (tier 3)', 'Shuffle Time · Swords']],
    ['mj_muse', 'muse', 'Muse', 4, 80, 0, { heal: 20, spRegen: 3 }, 'Pale gold, with a camera-lens charm. Healing +20%, and 3 SP back each turn.', ['Minji’s bond (rank 5)']],
    ['mj_hitscan', 'hitscan', 'Hitscan', 4, 84, 0, { crit: 14, acc: 10 }, 'A sleek esports bow with a glowing crosshair sight. Crit +14%, Accuracy +10.', ['Locked chests (Arqa and up)', 'Shuffle Time · Swords']],
    ['mj_theia', 'theia', 'Theia', 5, 102, 11000, { el: { light: 20 }, insta: 10, stats: { ma: 3 } }, 'White-gold with aperture rings, like her Persona. +3 Ma, Light +20%, and Hama lands 10% more often.', ['Mayoido Antiques (tier 5)', 'Shuffle Time · Swords']]
  ];
  const OWN_TINT = { jw_starter: '#c9d0dc', jw_mandate: '#2a3a8c', jw_maeumi: '#d9b48a', jw_jade: '#4fbf7f', jw_tortoise: '#9fe8ff', jw_hyphen: '#c4203b',
    jh_starter: '#3a3a40', jh_varsity: '#c4203b', jh_bestfriend: '#f4f0e8', jh_capitalized: '#e0b040', jh_goblin: '#b8202a', jh_treasure: '#7dc4ff',
    mj_starter: '#7a5236', mj_bunny: '#9fc8ff', mj_finalcut: '#9aa0aa', mj_muse: '#e8cf8a', mj_hitscan: '#3a7dff', mj_theia: '#fff2d6' };
  /* ══════════ S.E.E.S.'s own weapons (Kat's <name>-weapons.jpeg, batch 23; FEMC-ART-TODO.md appendix, weapon sheets) ══════════
     Seven more sets on the searchers' system: owner-only, a starter that replaces the plain tier-0 one, refines, art, a look.
     Each set: the Police Box (tier 3 or 4), Mayoido, a full moon's first clear, a link-rank gift (a perk's `gift` below),
     locked chests and Shuffle Time's Swords while the owner is in the party. Shinjiro's only make sense while he's with the
     party (8/7–10/3): his are the Police Box and Mayoido (both only list a weapon while its owner is around: core.js
     shopStock), the Hermit (9/5), his rank-5 gift and Shuffle Swords, and never the locked chests. Aigis's arm guns hit
     twice like every gun (atk is the gun scale, about 0.62 of the others; `hits` is set below). Akihiko's gloves and Aigis's
     arm guns are landscape art (artWide), like Jihoon's gloves. Koromaru's knives are cut upright like Haechan's. */
  const AK = [
    ['ak_starter', 'starter', 'Old Reds', 0, 32, 0, { crit: 3 }, 'Red leather, black cuffs, white laces: the first pair he ever bought, laced the same way every morning. Crit +3%.', ['Akihiko’s own (he starts with them)']],
    ['ak_champion', 'red-champion', 'Red Champion', 3, 64, 4400, { stats: { st: 3 }, critX: 15 }, 'Glossy red and gold, a crowned C on the fist and a title belt round the cuff. +3 St, and critical hits deal 15% more.', ['Police Box (tier 3)', 'Shuffle Time · Swords']],
    ['ak_belt', 'gold-belt', 'Gold Belt', 4, 82, 0, { phys: 12, def: 6 }, 'Black and gold, CHAMP across the knuckles and a championship belt at the wrist. Physical +12%, Defense +6.', ['Empress & Emperor (first clear)', 'Shuffle Time · Swords']],
    ['ak_wolf', 'silver-wolf', 'Silver Wolf', 4, 80, 0, { crit: 10, down: 15 }, 'Brushed silver with a wolf’s head on each fist, fur cuffs and claws. Crit +10%, and 15% more damage to foes that are Down.', ['Akihiko’s bond (rank 6)']],
    ['ak_lightning', 'lightning', 'Lightning', 5, 104, 0, { el: { elec: 20 }, stats: { ag: 3 } }, 'Royal blue with gold bolts, crackling at the laces: Polydeuces’s static. +3 Ag, and Elec skills +20%.', ['Locked chests (Tziah and up)', 'Shuffle Time · Swords']],
    ['ak_midnight', 'midnight', 'Midnight', 6, 126, 15000, { el: { elec: 15 }, crit: 8, spRegen: 3 }, 'Galaxy purple with a crescent moon and star charms: the Dark Hour in a pair of gloves. Elec +15%, crit +8%, and 3 SP back each turn.', ['Mayoido Antiques (tier 6)', 'Shuffle Time · Swords']]
  ];
  const YK = [
    ['yk_starter', 'starter', 'Lacquered Yumi', 0, 32, 0, { acc: 4 }, 'A plain lacquered bow with a red grip wrap and a little tassel. Accuracy +4.', ['Yukari’s own (she starts with it)']],
    ['yk_feather', 'feather', 'Feather', 3, 64, 4400, { el: { wind: 15 }, evade: 6 }, 'Mint-green wings for limbs, with feathers and jade beads on the string. Wind skills +15%, and better evasion.', ['Police Box (tier 3)', 'Shuffle Time · Swords']],
    ['yk_heart', 'pink-heart', 'Pink Heart', 4, 80, 0, { heal: 15, nullAil: ['charm'] }, 'Pink ribbons, heart-shaped tips and dangling heart charms. Healing +15%, and she can’t be Charmed.', ['The Lovers (first clear)', 'Shuffle Time · Swords']],
    ['yk_sakura', 'sakura', 'Sakura', 4, 80, 0, { heal: 20, hpRegen: 3 }, 'A blossoming cherry branch strung with a bell and a pink tassel. Healing +20%, and she regains 3% HP each turn.', ['Yukari’s bond (rank 6)']],
    ['yk_moon', 'moon', 'Crescent Moon', 5, 102, 0, { el: { wind: 15 }, crit: 10, stats: { ag: 3 } }, 'Night-blue lacquer, crescent tips and star charms on a ribbon. +3 Ag, Wind +15%, and crit +10%.', ['Locked chests (Tziah and up)', 'Shuffle Time · Swords']],
    ['yk_angel', 'angel', 'Angel', 6, 124, 15000, { heal: 25, spRegen: 4, stats: { ma: 3 } }, 'White wings, gold filigree and pearl chains with a little cross: Isis’s blessing. +3 Ma, healing +25%, and 4 SP back each turn.', ['Mayoido Antiques (tier 6)', 'Shuffle Time · Swords']]
  ];
  const JP = [
    ['jp_starter', 'starter', 'Old Reliable', 0, 32, 0, { crit: 3 }, 'A plain steel sword with a blue grip and a baseball-glove charm. Crit +3%.', ['Junpei’s own (he starts with it)']],
    ['jp_bat', 'baseball-bat', 'Slugger', 3, 66, 0, { critX: 20, stats: { st: 3 } }, 'A wooden bat with red stitching, a batting-helmet charm and two baseballs on chains. +3 St, and critical hits deal 20% more.', ['The Priestess (first clear)', 'Shuffle Time · Swords']],
    ['jp_katana', 'katana', 'Katana', 3, 64, 4400, { crit: 10, acc: 4 }, 'Black and red lacing, a red tassel and a little samurai-helmet charm. Crit +10%, and Accuracy +4.', ['Police Box (tier 3)', 'Shuffle Time · Swords']],
    ['jp_flame', 'flame', 'Hermes Flame', 4, 82, 0, { el: { fire: 20 }, th: 15 }, 'A blade of living fire with a winged-sandal charm: Hermes’s. Fire skills +20%, and his Theurgy fills 15% faster.', ['Junpei’s bond (rank 6)']],
    ['jp_neon', 'neon', 'Neon', 5, 104, 0, { crit: 8, critX: 12, spRegen: 3 }, 'Cyan-and-violet neon tubing, glowing star charms and a pair of dog tags. Crit +8%, crit damage +12%, and 3 SP back each turn.', ['Locked chests (Tziah and up)', 'Shuffle Time · Swords']],
    ['jp_cleaver', 'cleaver', 'Trickster', 6, 128, 15000, { phys: 15, stats: { st: 4 } }, 'A huge graffiti-tagged cleaver: hazard tape, a chain, a skull and a baseball. +4 St, and Physical +15%.', ['Mayoido Antiques (tier 6)', 'Shuffle Time · Swords']]
  ];
  const MT = [
    ['mt_starter', 'starter', 'Fencing Foil', 0, 32, 0, { acc: 4 }, 'A plain silver rapier with a black grip and a black tassel, from her fencing club. Accuracy +4.', ['Mitsuru’s own (she starts with it)']],
    ['mt_ice', 'ice-crystal', 'Diamond Dust', 3, 64, 4400, { el: { ice: 15 }, freeze: 8 }, 'A blade of clear ice with a snowflake guard and snowflake charms. Ice skills +15%, and Freeze lands 8% more often.', ['Police Box (tier 3)', 'Shuffle Time · Swords']],
    ['mt_queen', 'snow-queen', 'Snow Queen', 4, 84, 0, { el: { ice: 20 }, freeze: 12, stats: { ma: 3 } }, 'An ice crown for a guard, lilac ribbons and star charms. +3 Ma, Ice +20%, and Freeze +12%.', ['The Hierophant (first clear)', 'Shuffle Time · Swords']],
    ['mt_rose', 'rose', 'Thorned Rose', 4, 80, 0, { crit: 10, ail: 10 }, 'A thorned blade, red roses at the guard and a black ribbon with blood-red drops. Crit +10%, and her ailments land 10% more often.', ['Mitsuru’s bond (rank 6)']],
    ['mt_gold', 'gold-filigree', 'Gold Filigree', 5, 102, 0, { costCut: 12, th: 15, stats: { ma: 3 } }, 'A gold filigree basket hilt dripping with pearls and tassels: old Kirijo money. +3 Ma, SP costs −12%, and Theurgy +15%.', ['Locked chests (Tziah and up)', 'Shuffle Time · Swords']],
    ['mt_crest', 'kirijo-crest', 'Kirijo Crest', 6, 128, 15000, { el: { ice: 20 }, crit: 8, critX: 15 }, 'Black and crimson with the Kirijo crest on a silver shell guard. Ice +20%, crit +8%, and critical hits deal 15% more.', ['Mayoido Antiques (tier 6)', 'Shuffle Time · Swords']]
  ];
  const AG = [
    ['ag_starter', 'starter', 'Starter Model', 0, 20, 0, { acc: 4 }, 'Her standard-issue arm: grey plating, a P3 decal and a little tassel charm. Accuracy +4.', ['Aigis’s own (she starts with it)']],
    ['ag_gold', 'gold-plated', 'Gold Plated', 3, 40, 4400, { stats: { lu: 3 }, crit: 6 }, 'White and gold filigree, brass gears, an amber core and a heart locket on a ribbon. +3 Lu, and crit +6%.', ['Police Box (tier 3)', 'Shuffle Time · Swords']],
    ['ag_heart', 'papillon-heart', 'Papillon Heart', 4, 50, 0, { def: 6, hpRegen: 3 }, 'Pink and crimson, a big bow, a heart jewel and heart charms. Defense +6, and she regains 3% HP each turn.', ['Aigis’s bond (rank 7)']],
    ['ag_wing', 'angelic-wing', 'Angelic Wing', 5, 63, 0, { evade: 10, stats: { ag: 3 }, crit: 6 }, 'Pearl-white plating, a wing along the forearm and a blue core. +3 Ag, big evasion, and crit +6%.', ['Locked chests (Tziah and up)', 'Shuffle Time · Swords']],
    ['ag_cannon', 'siege-cannon', 'Siege Cannon', 5, 64, 0, { phys: 15, stats: { st: 3 } }, 'A gatling barrel, an ammo belt, hazard stripes and a padlock. +3 St, and Physical +15%.', ['Chariot & Justice (first clear)', 'Shuffle Time · Swords']],
    ['ag_butterfly', 'velvet-butterfly', 'Velvet Butterfly', 6, 78, 15000, { th: 20, crit: 8, stats: { ma: 3 } }, 'Midnight violet with glowing butterfly wings and ribbon charms. +3 Ma, crit +8%, and her Theurgy fills 20% faster.', ['Mayoido Antiques (tier 6)', 'Shuffle Time · Swords']]
  ];
  const KM = [
    ['km_starter', 'starter', 'Trusty Knife', 0, 32, 0, { crit: 3 }, 'A plain steel knife with red and black tassels, carried in his mouth. Crit +3%.', ['Koromaru’s own (he starts with it)']],
    ['km_bone', 'bone', 'Bone', 3, 64, 4400, { stats: { st: 3 }, hpRegen: 3 }, 'A blade carved from bone, a beast’s skull for a guard, bones on cords. +3 St, and he regains 3% HP each turn.', ['Police Box (tier 3)', 'Shuffle Time · Swords']],
    ['km_flame', 'flame', 'Cerberus Flame', 4, 80, 0, { el: { fire: 20 }, crit: 6 }, 'A blade of flame with a gold-tasselled ribbon: Cerberus’s. Fire skills +20%, and crit +6%.', ['Koromaru’s bond (rank 6)']],
    ['km_tag', 'collar-tag', 'Collar Tag', 4, 84, 0, { evade: 8, stats: { ag: 3 }, crit: 6 }, 'A leather-wrapped grip, a studded collar and two dog tags: P3 and S.E.E.S. +3 Ag, better evasion, and crit +6%.', ['Locked chests (Yabbashah and up)', 'Shuffle Time · Swords']],
    ['km_shrine', 'shrine-bell', 'Shrine Bell', 5, 104, 0, { el: { dark: 15 }, insta: 10 }, 'Black and gold with shrine bells, a red-and-white rope and paper streamers, for Naganaki Shrine. Dark +15%, and Mudo lands 10% more often.', ['The Hanged Man (first clear)', 'Shuffle Time · Swords']],
    ['km_kunai', 'kunai', 'Kunai', 6, 126, 15000, { crit: 12, critX: 15 }, 'A black kunai with a ring pommel and black ribbons: quick in, quick out. Crit +12%, and critical hits deal 15% more.', ['Mayoido Antiques (tier 6)', 'Shuffle Time · Swords']]
  ];
  const SJ = [
    ['sj_starter', 'starter', 'Old Hatchet', 0, 32, 0, { acc: 4 }, 'A plain, notched axe with a taped grip and a frayed tassel. It steadies his swing: Accuracy +4.', ['Shinjiro’s own (he starts with it)']],
    ['sj_steel', 'black-steel', 'Black Steel', 4, 84, 6200, { phys: 12, crit: 6 }, 'Black steel, spikes, a skull and red chains: the back-alley look. Physical +12%, and crit +6%.', ['Police Box (tier 4)', 'Shuffle Time · Swords']],
    ['sj_cleaver', 'kitchen-cleaver', 'Kitchen Cleaver', 5, 100, 0, { crit: 8, hpRegen: 4 }, 'A kitchen cleaver with brass fittings, a ladle charm and a red-and-white cord. Crit +8%, and he regains 4% HP each turn.', ['Shinjiro’s bond (rank 5)']],
    ['sj_chain', 'chain', 'Chained', 5, 104, 0, { stats: { en: 3 }, def: 8, hpRegen: 3 }, 'A rusted double axe wrapped in chain, a padlock and a shackle hanging off it. +3 En, Defense +8, and he regains 3% HP each turn.', ['The Hermit (first clear)', 'Shuffle Time · Swords']],
    ['sj_ember', 'ember', 'Ember', 6, 126, 15000, { phys: 10, el: { fire: 15 }, critX: 15 }, 'Charred iron with embers still glowing in the cracks. Physical +10%, Fire +15%, and critical hits deal 15% more.', ['Mayoido Antiques (tier 6)', 'Shuffle Time · Swords']],
    ['sj_moonlit', 'moonlit', 'Moonlit', 6, 130, 0, { crit: 10, el: { dark: 15 }, stats: { lu: 3 } }, 'A crescent-moon blade full of stars, blue ribbons and moon charms. +3 Lu, crit +10%, and Dark +15%.', ['Shuffle Time · Swords (while he’s in the party)']]
  ];
  Object.assign(OWN_TINT, {
    ak_starter: '#c43b3b', ak_champion: '#e0303a', ak_belt: '#e0b040', ak_wolf: '#c9d0dc', ak_lightning: '#3a7dff', ak_midnight: '#6a4acb',
    yk_starter: '#a0603a', yk_feather: '#9fe8c8', yk_heart: '#ff8cc0', yk_sakura: '#ffc0d8', yk_moon: '#2a3a8c', yk_angel: '#fff2d6',
    jp_starter: '#c9d0dc', jp_bat: '#b07a40', jp_katana: '#c4203b', jp_flame: '#ff8a3d', jp_neon: '#5ff0ff', jp_cleaver: '#9aa0aa',
    mt_starter: '#c9d0dc', mt_ice: '#9fe8ff', mt_queen: '#c9b8ff', mt_rose: '#c4203b', mt_gold: '#e0b040', mt_crest: '#8a1830',
    ag_starter: '#c9d0dc', ag_gold: '#e0b040', ag_heart: '#ff6a9a', ag_wing: '#f4f0e8', ag_cannon: '#6b6f7a', ag_butterfly: '#8a6aff',
    km_starter: '#c9d0dc', km_bone: '#e8dcc0', km_flame: '#ff6a2a', km_tag: '#9aa0aa', km_shrine: '#e0b040', km_kunai: '#3a3a40',
    sj_starter: '#9aa0aa', sj_steel: '#3a3a40', sj_cleaver: '#c9d0dc', sj_chain: '#a0603a', sj_ember: '#ff6a2a', sj_moonlit: '#6ab0ff'
  });
  // What the drop and gift lines call a set ("one of Haechan’s knives!").
  const SET_NOUN = { knife: 'knives', rapier: 'rapiers', gloves: 'pairs of gloves', bow: 'bows', greatsword: 'swords', gun: 'arm guns', axe: 'axes' };
  const OWNED = [[HK, 'haechan', 'knife', HK_TINT], [JW, 'jungwon', 'rapier', OWN_TINT], [JH, 'jihoon', 'gloves', OWN_TINT], [MJ, 'minji', 'bow', OWN_TINT],
    [AK, 'akihiko', 'gloves', OWN_TINT], [YK, 'yukari', 'bow', OWN_TINT], [JP, 'junpei', 'greatsword', OWN_TINT], [MT, 'mitsuru', 'rapier', OWN_TINT],
    [AG, 'aigis', 'gun', OWN_TINT], [KM, 'koromaru', 'knife', OWN_TINT], [SJ, 'shinjiro', 'axe', OWN_TINT]];
  OWNED.forEach(([list, owner, wtype, tints]) => list.forEach(([id, art, name, tier, atk, price, bonus, desc, src]) => {
    D.gear[id] = { name, slot: 'weapon', wtype, owner, atk, tier, price, rare: tier > 0 && (!price || tier >= 5), named: true, art: WART + owner + '-' + art + '.webp', bonus, src, look: desc, tint: tints[id],
      artWide: wtype === 'gloves' || wtype === 'gun' || undefined, hits: wtype === 'gun' ? [2, 2] : undefined, acc: bonus.acc || undefined, stats: bonus.stats || undefined, nullAil: bonus.nullAil || undefined, desc: bonusText(bonus) };
    if (tier === 0 && D.startGear && D.startGear[owner]) D.startGear[owner].weapon = id;
  }));
  NAG.forEach(([id]) => { D.gear[id].named = true; });
  /* Who can hold a piece of gear: a weapon of their type, and a named one only by its owner. */
  const fits = (g, mid) => { const m = D.party.find(x => x.id === mid); return !!(g && m) && (g.slot !== 'weapon' || (g.wtype === m.wtype && (!g.owner || g.owner === mid))); };
  // "(one of Solar’s naginatas!)" / "(one of Haechan’s knives!)" for drops and gifts.
  const namedTag = id => { const g = D.gear[id]; return !g || !g.named ? '' : g.owner ? ` (one of ${(D.party.find(x => x.id === g.owner) || {}).name || g.owner}’s ${SET_NOUN[g.wtype] || 'weapons'}!)` : ' (one of Solar’s naginatas!)'; };
  // Old saves: each owner's plain tier-0 weapon swaps for their own starter (save.js normalizeBuild).
  const STARTER_SWAP = Object.fromEntries(OWNED.map(([list, owner, wtype]) => [owner, [wtype + '0', list[0][0]]]));
  /* Battle yen from weapons (Jihoon's Treasure): the sum of `yen` on the weapons the fighters in `mids` hold, refines included. */
  function yenBonus(save, mids) {
    let v = 0;
    (mids || []).forEach(mid => { const eq = Object.assign({}, D.startGear[mid], ((save.gear || {}).eq || {})[mid] || {}), g = D.gear[eq.weapon];
      if (g && g.bonus && g.bonus.yen && fits(g, mid)) v += g.bonus.yen * (1 + WREF.bonus * wrefOf(save, eq.weapon)); });
    return v;
  }

  // Police Box stocks the early ones (practice mode's shop lists non-rare gear of the shop's tier); Mayoido the rare ones.
  if (D.shops.mayoido) D.shops.mayoido.stock = D.shops.mayoido.stock.concat(['nag_butterfly', 'nag_dragon', 'hk_sunlight', 'jw_hyphen', 'jh_goblin', 'mj_theia',
    'ak_midnight', 'yk_angel', 'jp_cleaver', 'mt_crest', 'ag_butterfly', 'km_kunai', 'sj_ember']);
  // Locked chests can hold Crimson Lock and Widow's Kiss; Shuffle Time's Swords and the bosses below give the rest.
  // Batch 23: one for each of S.E.E.S. but Shinjiro (a chest can open long after he's gone). map.js rollChest takes tier <= block + 2.
  if (D.map && D.map.chest) D.map.chest.lockedRare = D.map.chest.lockedRare.concat(['nag_lock', 'hk_widow', 'jw_jade', 'jh_capitalized', 'mj_hitscan',
    'ak_lightning', 'yk_moon', 'jp_neon', 'mt_gold', 'ag_wing', 'km_tag']);
  // The Black Rose was Astarion's rank-8 gift until his link was removed (2026-10-21); it's the Hermit's now.
  // A first clear can leave more than one (Fortune: Solar's Prism Orb and Jihoon's Treasure).
  // Batch 23: each of S.E.E.S. has one too, from a full moon they're there for (Shinjiro: the Hermit, 9/5, before he leaves).
  const BOSS_WEAPON = { priestess: ['nag_ice', 'jp_bat'], empress: ['mj_bunny', 'ak_belt'], hierophant: ['jw_tortoise', 'mt_queen'], lovers: ['nag_moon', 'yk_heart'],
    chariot: ['hk_disc', 'ag_cannon'], hermit: ['nag_rose', 'sj_chain'], fortune: ['nag_prism', 'jh_treasure'], hanged: ['nag_dragon', 'km_shrine'] };
  const bossWeapons = op => [].concat(BOSS_WEAPON[op] || []);
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
     Faces: icons.js revCard draws the frame, rarity, slot plate and marks around a set's `img` (Kat's art, below); a set
     without one falls back to its code-drawn glyph. */
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
  // Kat's card art (batch 23, her card-<world>-<subject> paintings, cut by tools/femc-cards.py revcard): every set has one.
  // CARD_ART_V: bump with battle.js ART_V when the cards are re-cut (the menu and gacha don't see ART_V).
  const CARD_ART_V = 20;
  Object.entries(SETS).forEach(([id, s]) => { s.img = `assets/femc/battle/art/cards/${id}.webp?v=${CARD_ART_V}`; });
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
      { id: 'star', num: 'XVII', name: 'The Star', out: 'card', minR: 4, five: 0.5 }, { id: 'sun', num: 'XIX', name: 'The Sun', out: 'sun' },
      { id: 'hierophant', num: 'V', name: 'The Hierophant', out: 'ticket' }
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
        const m = pick(R, SH.majors.filter(x => !practice || !['card', 'skillcard', 'ticket'].includes(x.out)));
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
      mats: 'Velvet Thread and Tarot Dust.', dust: 'A pile of Tarot Dust.', sun: 'A full heal, and every Theurgy gauge +25.', ticket: 'Capsule Tickets for the machine at Paulownia Mall.' }[c.out] || '';
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
        // Named weapons: Solar's naginatas always; someone's own (Haechan's knives) only while they're in the party.
        const nagPool = Object.keys(D.gear).filter(id => { const g = D.gear[id]; return g.named && (!g.owner || party.includes(g.owner)) && (g.src || []).some(s => /Shuffle Time/.test(s)) && g.tier <= tier + 1 && !ownNag(id); });
        let got = null;
        if (nagPool.length && (c.rank >= 9 || (c.rank >= 7 && R() < 0.4))) got = pick(R, nagPool);
        if (!got) {
          const who = pick(R, party), m = D.party.find(x => x.id === who) || D.party[0], t = clamp(tier + (c.rank >= 6 ? 1 : 0), 1, 7);
          const pool = Object.keys(D.gear).filter(id => { const g = D.gear[id]; return !g.rare && g.tier === t && (g.slot === 'armor' || (g.slot === 'weapon' && fits(g, m.id))); });
          got = pool.length ? pick(R, pool) : null;
        }
        if (got) { save.gear.owned[got] = (save.gear.owned[got] || 0) + 1; fx.gear = got; lines.push(D.gear[got].name + namedTag(got)); }
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
    // The Hierophant: Capsule Tickets (items, so they ride home with the night's other items; gacha.js spends them).
    if (c.out === 'ticket') { const n = 1 + (tier >= 4 ? 1 : 0); save.items = save.items || {}; save.items.capsule_ticket = (save.items.capsule_ticket || 0) + n; fx.tickets = n; lines.push(`Capsule Ticket ×${n}`); }
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
    ['akihiko', 6, 'Cover Me', 'battle', { cover: {}, gift: 'ak_wolf' }, 'Once per battle, when a hit would drop Solar below 25% HP, Akihiko steps in front and takes it at half damage. He also brings out his Silver Wolf gloves (one of his six pairs).'],
    ['akihiko', 8, 'All Night', 'tartarus', { allNight: 2 }, 'The party can fight 2 more battles in a row before anyone gets Tired.'],
    ['akihiko', 10, 'Corner Man', 'max', { cornerMan: {} }, 'Once per battle, when Solar is knocked Down she’s back on her feet at once, and her next attack is a guaranteed crit.'],
    ['akihiko', 15, 'Five, Every Day', 'daily', { weekly: 'fiveeveryday', stat: { courage: 1, kindness: 1 }, dow: 3 }, 'Once a week (Wednesdays), the five o’clock run together: +1 Courage and +1 Kindness, without using any free time.'],
    ['yukari', 2, 'Fan Club', 'daily', { areaStat: { area: 'gekkoukan', stat: { charm: 1 } } }, '+1 Charm on every activity at Gekkoukan.'],
    ['yukari', 4, 'Second Opinion', 'battle', { secondOpinion: {} }, 'Once per battle, if Solar ends a turn with an ailment, Yukari cures it for free.'],
    ['yukari', 6, 'First Aid Kit', 'tartarus', { firstAid: 0.1, gift: 'yk_sakura' }, 'After each win, the party member with the lowest HP recovers 10%. She also brings out her Sakura bow (one of her six).'],
    ['yukari', 8, 'Second Wind', 'battle', { secondWind: { below: 0.4 } }, 'Once per battle, when everyone in the party is under 40% HP, Yukari casts a free Media.'],
    ['yukari', 10, 'Wind at Your Back', 'max', { windAtBack: { heal: 0.15 } }, 'Solar’s heals restore 15% more and give the target agility up.'],
    ['junpei', 2, 'Bro Discount', 'daily', { discount: { acts: ['wildduck', 'hagakure'], pct: 30 }, actStat: { hagakure: { knowledge: 1 } } }, 'Wild-Duck Burger and Hagakure cost 30% less, and Hagakure gives +1 Knowledge.'],
    ['junpei', 4, 'Clutch Hitter', 'battle', { clutch: { crit: 10 } }, 'Junpei’s crit rate is +10% when the party is under half HP or the fight passes turn 5.'],
    ['junpei', 6, 'Pinch Hitter', 'battle', { pinchHitter: {}, gift: 'jp_flame' }, 'Once per battle, when Solar Shifts to Junpei, his next physical attack is a guaranteed crit. He also brings out his Hermes Flame sword (one of his six).'],
    ['junpei', 8, 'Dugout', 'tartarus', { dugout: 0.8 }, 'Members on the bench earn 80% of the EXP instead of 60%.'],
    ['junpei', 10, 'Grand Slam', 'max', { learn: 'grand_slam' }, 'Solar learns Grand Slam: heavy Strike damage to one foe, always a crit against a Down foe.'],
    ['mitsuru', 2, 'Study Hall', 'daily', { studyHall: { stat: { knowledge: 1 }, exam: { knowledge: 2 } } }, 'Studying at the dorm gives +1 Knowledge (+2 in exam weeks).'],
    ['mitsuru', 4, 'Company Card', 'daily', { shopOff: { shop: 'police', kinds: ['weapon', 'armor'], pct: 10 } }, 'Police Box weapons and armor cost 10% less.'],
    ['mitsuru', 6, 'Shatter', 'battle', { shatterUp: { dmg: 0.25, freeze: 1 }, gift: 'mt_rose' }, 'Physical hits on a Frozen foe deal 25% more damage, and the party’s Freeze lasts one extra turn. She also brings out her Thorned Rose rapier (one of her six).'],
    ['mitsuru', 8, 'Field Report', 'tartarus', { fieldReport: {} }, 'The way to the stairs is marked on the node map from the moment the party arrives on a floor.'],
    ['mitsuru', 10, 'Frozen Verdict', 'max', { learn: 'frozen_verdict' }, 'Solar learns Frozen Verdict: medium Ice damage to all foes with a high chance to Freeze.'],
    ['fuuka', 2, 'Experimental Bento', 'tartarus', { nightKit: { night_bento: 1 } }, 'Each night Solar brings a bento that restores 30% SP to the party once.'],
    ['fuuka', 4, 'Oracle Ping', 'tartarus', { oraclePing: {} }, 'Chests and event rooms are marked on the node map from the start of each floor.'],
    ['fuuka', 6, 'Third Eye', 'assist', { thirdEye: {} }, 'Shadows the party has fought before start each battle fully analyzed.'],
    ['fuuka', 8, 'Steady Signal', 'assist', { steadySignal: { every: 3, heal: 0.05 } }, 'Every third round, Fuuka restores 5% HP to the whole party.'],
    ['fuuka', 10, 'Oracle Link', 'max', { oracleLink: {} }, 'Once per battle, when the party is in trouble, Fuuka steps in with a full party heal, full SP for one member, or a party-wide Me Patra.'],
    ['aigis', 2, 'Learning Mode', 'daily', { learningMode: { kindness: 1 } }, '+1 Kindness from every link hangout (not rank scenes).'],
    ['aigis', 4, 'Bodyguard Protocol', 'battle', { bodyguard: { chance: 0.3 } }, 'Aigis takes single-target hits aimed at Solar 30% of the time.'],
    ['aigis', 7, 'Sentry Mode', 'tartarus', { sentry: 3, gift: 'ag_heart' }, 'Once per night, when the Reaper arrives, Aigis holds it off and it loses track of the party for 3 steps. She also fits her Papillon Heart arm (one of her six).'],
    ['aigis', 10, 'Papillon Heart', 'max', { papillon: {} }, 'When Solar Guards, the next hit on her does no damage, and she gets One More.'],
    ['ken', 2, 'Featherman Fan', 'daily', { actStat: { cinema: { courage: 1 }, arcade: { courage: 1 } } }, 'The movie theater and Game Panic give +1 Courage.'],
    ['ken', 4, 'Justice Bolt', 'battle', { justiceBolt: { light: 0.15, insta: 10 } }, 'With Ken in the party, Light skills do 15% more damage and instant kills land 10% more often.'],
    ['ken', 6, 'Emergency Kit', 'tartarus', { nightKit: { kit_bead: 1 } }, 'Each night starts with a free Revival Bead.'],
    ['ken', 8, 'Little Brother’s Cheer', 'assist', { littleBrother: { below: 0.3, power: 45 } }, 'Once per battle, when Solar drops below 30% HP, Ken casts a free Dia on her.'],
    ['ken', 10, 'Featherman Strike', 'max', { learn: 'featherman_strike' }, 'Solar learns Featherman Strike: medium Light damage to all foes, and a guaranteed Down on a Light weakness.'],
    ['koromaru', 2, 'Walkies', 'daily', { weekly: 'walkies', stat: { kindness: 2 }, dow: 4 }, 'Once a week (Thursdays), an evening walk with him gives +2 Kindness without using any free time.'],
    ['koromaru', 4, 'Good Nose', 'tartarus', { goodNose: 1 }, 'One extra chest on every floor.'],
    ['koromaru', 6, 'Hellhound Hunt', 'battle', { hellhound: { insta: 15 }, gift: 'km_flame' }, 'The party’s instant-kill skills (Mudo, Hama) land 15% more often against Down foes. He also brings out his Cerberus Flame knife (one of his six).'],
    ['koromaru', 10, 'Good Dog', 'max', { goodDog: { hp: 0.05, sp: 0.05 } }, 'Every time Solar defeats a foe, she recovers 5% HP and SP.'],
    ['shinjiro', 2, 'Kitchen Duty', 'daily', { kitchenDuty: 1 }, 'Cooking with him becomes an evening activity at the dorm (+3 Proficiency), and the leftovers come along on the next Tartarus night: a dish that heals the party 20%.'],
    ['shinjiro', 3, 'Heavy Hand', 'battle', { heavyHand: { dmg: 0.15 } }, 'Shinjiro’s attacks on Down foes never miss (a Down foe can’t dodge anyway), and they hit 15% harder.'],
    ['shinjiro', 5, 'Back Alley Rules', 'battle', { backAlley: { chance: 0.25 }, gift: 'sj_cleaver' }, 'When a foe hits Solar, Shinjiro may counter it for free (25%). He also brings out his Kitchen Cleaver axe (one of his six).'],
    ['shinjiro', 10, 'Hard Way Home', 'max', { hardWay: { dmg: 0.4, below: 0.3 } }, 'Below 30% HP, Solar’s physical damage is +40% and she can’t be knocked Down.'],
    ['shinjiro', 15, 'Up to the Knuckle', 'daily', { weekly: 'uptoknuckle', stat: { kindness: 2 }, dow: 0 }, 'Once a week (Sundays), Solar cooks from the recipe card: +2 Kindness, without using any free time.'],
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
    ['judy', 2, 'Edit Mode', 'assist', { editMode: 1 }, 'The turn-order strip shows one turn further ahead (Shadows’ HP bars and buffs are always on show already).'],
    ['judy', 4, 'Tech Savvy', 'tartarus', { techSavvy: 1 }, 'Locked chests roll one extra item.'],
    ['judy', 6, 'Editing Bay', 'daily', { dormStat: { proficiency: 1 } }, 'Evening activities at the dorm (studying, reading, cooking, the garden, the desk, walking Koromaru) give +1 Proficiency.'],
    ['judy', 8, 'Hotwire', 'assist', { hotwire: { th: 10 } }, 'A Shift also gives the receiver +10 Theurgy.'],
    ['judy', 10, 'Feel Everything', 'max', { feelEverything: { sp: 3 } }, 'Solar’s crits and weakness hits each restore 3 SP.'],
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
    ['hanni', 15, 'Good Things', 'daily', { weekly: 'goodthings', stat: { kindness: 1, charm: 1 }, dow: 0 }, 'Once a week (Sundays), Hanni’s one good thing a day: +1 Kindness and +1 Charm, without using any free time.'],
    ['hyein', 2, 'Fit Check', 'daily', { weekendCharm: 1 }, '+1 Charm on every activity on weekends.'],
    ['hyein', 4, 'Tailor Made', 'daily', { shopOff: { shop: 'police', kinds: ['armor'], pct: 15 }, solarDef: 5 }, 'Police Box armor costs 15% less, and every armor Solar wears gets +5 defense.'],
    ['hyein', 5, 'Spotlight', 'assist', { spotlight: { chance: 0.2 } }, 'Foes are 20% less likely to target Solar.'],
    ['hyein', 7, 'Sewing Machine', 'daily', { sewingMachine: 1 }, 'Sewing with her becomes an evening activity at Solar’s desk: +3 Proficiency and +1 Charm.'],
    ['hyein', 10, 'Showstopper', 'max', { learn: 'runway' }, 'Solar learns Showstopper (Runway): for 2 turns, every foe targets Solar. She gets defense up, and each hit she takes fills her Theurgy.'],
    ['hyein', 15, 'Standing Order', 'daily', { weekly: 'standingorder', stat: { charm: 2 }, dow: 6 }, 'Once a week (Saturdays), a fitting with Hyein: +2 Charm, without using any free time.'],
    ['jaehyun', 2, 'It’s a Schedule', 'daily', { schedule: 1 }, 'Once a week, Solar can fit two activities into one After School slot.'],
    ['jaehyun', 4, 'Audible', 'battle', {}, 'Once per battle, Solar can swap a party member for someone on the bench without using a turn.', 'Waits on party switching in battle.'],
    ['jaehyun', 6, 'Wear Layers', 'daily', { wearLayers: 1 }, 'Going to Tartarus while Tired leaves Solar Tired, not Sick (once a week).'],
    ['jaehyun', 8, 'Blindside Block', 'assist', { blindside: { over: 0.3 } }, 'Once per battle, the first hit that would take more than 30% of Solar’s HP is cut in half.'],
    ['jaehyun', 10, 'Field General', 'max', { fieldGeneral: { step: 0.1 } }, 'Shifts chain through the whole party, and each pass adds another +10% damage.'],
    ['minji', 2, 'Golden Hour', 'daily', { goldenHour: { areas: ['port', 'portisland'], stat: { charm: 1 } } }, 'On clear days, after-school activities on Port Island give +1 Charm.'],
    ['minji', 3, 'Crosshair Sync', 'battle', { crosshair: { crit: 15 } }, 'Kat’s perk. The party’s crit rate is up (+15%) against knocked-down enemies.'],
    ['minji', 5, 'Duo Cohesion', 'battle', { duo: { power: 34 }, gift: 'mj_muse' }, 'Kat’s perk. Paired with Solar: a guaranteed follow-up from Minji when Solar lands a crit or a support heal. She also brings out her Muse bow (one of her six).'],
    ['minji', 8, 'Behind the Lens', 'battle', { behindLens: {} }, 'Kat’s perk. Once per battle, surviving a lethal blow leaves Solar at 1 HP and triggers an automatic counter-snipe.'],
    ['minji', 10, 'Cut, Print', 'max', { cutPrint: { heal: 0.1 } }, 'Once per battle, when Solar crits a Down foe, she gets One More even if she already had one, and the party heals 10%.'],
    ['minji', 15, 'That’s a Wrap', 'daily', { weekly: 'thatsawrap', stat: { proficiency: 1, charm: 1 }, dow: 4 }, 'Once a week (Thursdays), the day’s footage with Minji: +1 Proficiency and +1 Charm, without using any free time.'],
    ['mark', 2, 'Warm-Up', 'daily', { actStat: { karaoke: { charm: 2, courage: 1 } } }, 'Karaoke gives +2 Charm and +1 Courage.'],
    ['mark', 4, 'Count-In', 'assist', { countIn: ['agi'] }, 'The party starts each battle with agility up.'],
    ['mark', 6, 'Setlist', 'tartarus', { setlist: 1 }, 'The node map shows one extra layer ahead.'],
    ['mark', 8, 'Harmony', 'assist', { harmony: { dmg: 0.25 } }, 'When two party members hit the same weakness back to back, the second hit deals 25% more damage.'],
    ['mark', 10, 'Key Change', 'max', { keyChange: { th: 30, dmg: 0.2 } }, 'After Rise and Shine, Solar’s Theurgy gauge restarts at 30%, and the party’s next attacks deal 20% more damage.'],
    ['mark', 15, 'Title Track', 'daily', { weekly: 'titletrack', stat: { courage: 1, proficiency: 1 }, dow: 1 }, 'Once a week (Mondays), a song with Mark: +1 Courage and +1 Proficiency, without using any free time.'],
    ['haechan', 2, 'Cut the Fluff', 'battle', { cutFluff: { ail: 0.1 } }, 'Kat’s perk. Every foe’s status openings (the ailments that land on it) are revealed at once in Analyze, and the party’s ailments land 10% more often.'],
    ['haechan', 4, 'Recruitment Pitch', 'daily', { pitch: { stat: { charm: 1 } } }, 'Once a day, Solar gets a hint on a class question, and +1 Charm when she gets it right.'],
    ['haechan', 5, 'Loud About It', 'battle', { loud: { dmg: 0.5 } }, 'When a foe crits Solar, Haechan’s next attack on that foe deals 50% more damage.'],
    ['haechan', 7, 'Bait and Punish', 'battle', { baitPunish: { chance: 0.5, dmg: 0.5 }, gift: 'hk_mixdown' }, 'Kat’s perk. When a foe tries an ailment on the party, the target counters (50%), and the team’s counters deal 50% more damage. He also brings out his Mixdown knife (one of his six).'],
    ['haechan', 10, 'Hear the Room', 'max', { hearRoom: {} }, 'Each round, Solar sees which foe is charging its strongest move, and her first hit on that foe always crits.'],
    ['haechan', 15, 'Room Tone', 'daily', { weekly: 'roomtone', stat: { charm: 1, proficiency: 1 }, dow: 5 }, 'Once a week (Fridays), one side of the headphones each: +1 Charm and +1 Proficiency, without using any free time.'],
    ['yunjin', 2, 'Taxi Driver Coffee', 'daily', { actStat: { vending: { courage: 1 } }, weeklyCure: { act: 'vending', cond: 'tired' } }, 'The vending machine gives +1 Courage, and once a week its coffee clears Tired.'],
    ['yunjin', 4, 'Prada Swing', 'assist', { prada: { power: 28, down: 0.3 } }, 'Once per battle, when a foe crits Solar, Yunjin swings back: light Strike damage, with a 30% chance to knock it Down.'],
    ['yunjin', 6, 'Sticker Code', 'tartarus', { stickerCode: {} }, 'Shadow rooms get a sticker: green if the party knows something they’re weak to, red if not.'],
    ['yunjin', 8, 'Sad, Angry or Shoes', 'tartarus', { moodPick: {} }, 'At each access point, Solar picks a mood for the next floor: Sad (defense up), Angry (attack up), Plotting (crits up) or Shoes (agility up).'],
    ['yunjin', 10, 'Ride or Die', 'max', { rideOrDie: {} }, 'Once per battle, when an ally falls, Solar gets a free turn right away, and her next revive heals in full.'],
    ['jungwon', 2, 'Tutor Session', 'daily', { jobPay: { tutor: 25 }, studyAny: { knowledge: 1 } }, 'The tutoring job pays 25% more, and studying anywhere gives +1 Knowledge.'],
    ['jungwon', 4, 'Order of Business', 'battle', { orderBiz: { turns: 1 } }, 'Debuffs from Solar and Jungwon last one extra turn.'],
    ['jungwon', 6, 'Motion Denied', 'battle', { motionDenied: {}, gift: 'jw_maeumi' }, 'Once per battle, when a foe buffs itself, Jungwon strips it off at once. He also brings out his Maeumi rapier (one of his six).'],
    ['jungwon', 8, 'Stewardship', 'tartarus', { stewardship: 0.15 }, 'Yen from battles is +15%.'],
    ['jungwon', 10, 'Polite Fury', 'max', { politeFury: { dmg: 0.15, max: 3 } }, 'Each time an ally takes a crit or a weakness hit, Solar’s next skill deals 15% more damage (stacks 3 times).'],
    ['jungwon', 15, 'Motion Carried', 'daily', { weekly: 'motioncarried', stat: { knowledge: 2 }, dow: 2 }, 'Once a week (Tuesdays), the minutes kept together: +2 Knowledge, without using any free time.'],
    ['jihoon', 2, 'Hype Man', 'battle', { hypeMan: { turns: 2 } }, 'Jihoon’s buffs on Solar last 2 extra turns.'],
    ['jihoon', 4, 'Pilates Partner', 'daily', { weekly: 'pilates', stat: { proficiency: 2, courage: 1 }, dow: 6 }, 'Once a week (Saturdays), pilates with him gives +2 Proficiency and +1 Courage without using any free time.'],
    ['jihoon', 6, 'Main Character', 'battle', { mainChar: { below: 0.5 }, gift: 'jh_bestfriend' }, 'While Solar is under half HP, foes go after Jihoon instead (he insists). He also brings out his Best Friend gloves (one of his six pairs).'],
    ['jihoon', 8, 'Almighty Hoon', 'tartarus', { almightyHoon: 'atk' }, 'After beating a strong Shadow group, the party starts the next fight with attack up.'],
    ['jihoon', 10, 'Center Stage', 'max', { centerStage: { dmg: 0.2, th: 10 } }, 'At full HP, Solar deals 20% more damage, and every One More she earns gives the party +10 Theurgy.'],
    ['jihoon', 15, 'Number One', 'daily', { weekly: 'numberone', stat: { courage: 2 }, dow: 3 }, 'Once a week (Wednesdays), Jihoon reminds everyone who’s number one: +2 Courage, without using any free time.'],
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
    // The late Runners arrivals (2026-10-22). Their perks reuse hooks that were unassigned since the 2026-10-21 removals.
    ['danielle', 2, 'Line Items', 'daily', { matSell: 0.2 }, 'Mayoido Antiques pays 20% more for materials. She audits the counter while you sell.'],
    ['danielle', 4, 'First Look', 'assist', { sneak: { crit: 15 } }, 'Solar’s attacks on foes that haven’t acted yet this battle crit 15% more often.'],
    ['danielle', 6, 'Open Door', 'tartarus', { lockpick: 1 }, 'Once per floor, a locked chest opens without a Tartarus Key.'],
    ['danielle', 8, 'The Folder', 'tartarus', { missionBriefing: 3 }, 'Full-moon operations start with the party’s attack up for 3 turns.'],
    ['danielle', 10, 'Read Faster', 'max', { warpStrike: {} }, 'Solar’s first attack each battle always goes first and can’t miss.'],
    ['jaemin', 2, 'The Pitch', 'daily', { jobPay: { all: 10 } }, 'Every part-time job pays 10% more.'],
    ['jaemin', 4, 'Hype Man', 'assist', { limitBreak: { th: 5 } }, 'Solar’s Theurgy gauge gains +5 every time she takes damage.'],
    ['jaemin', 6, 'Recovery Party', 'tartarus', { nightOrchid: 0.3 }, 'One empty room on each floor becomes a small rest stop that restores 30% HP and SP.'],
    ['jaemin', 8, 'Sleep It Off', 'daily', { powerNap: 1 }, 'Resting at the dorm makes Solar Great the next day, not just Good.'],
    ['jaemin', 10, 'Afterparty', 'max', { armiger: { pct: 0.2 } }, 'While Solar’s Theurgy gauge is full, each of her attacks adds an encore hit for +20% Almighty damage.'],
    ['chenle', 2, 'Respectfully, Though', 'daily', { guidance: 1 }, 'Once a week, Solar can retry a wrong answer in class.'],
    ['chenle', 4, 'Bubble', 'assist', { sanctuary: { below: 0.2 } }, 'Once per battle, the first ally to fall below 20% HP can’t be targeted until their next turn.'],
    ['chenle', 6, 'Hold the Corner', 'battle', { knifeParry: { chance: 0.4 } }, 'When Solar Guards, physical hits are blocked for no damage 40% of the time.'],
    ['chenle', 8, 'On My Call', 'assist', { buster: { dmg: 0.2 } }, 'The party’s physical attacks on Down foes deal 20% more damage.'],
    ['chenle', 10, 'Just Eat', 'max', { learn: 'just_eat' }, 'Solar learns Just Eat (once per battle, low SP): restores a lot of HP to the whole party and cures their ailments.'],
    // ── Other links
    ['rio', 2, 'Practice Swing', 'daily', { clubStat: { 'club-tennis': { courage: 1, proficiency: 1 } } }, 'Tennis club practice gives +1 Courage and +1 Proficiency.'],
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
    ['elizabeth', 2, 'Compendium Credit', 'daily', { velvetCredit: { pct: 25, plumes: 1 } }, 'Velvet Room draws cost 25% less yen and one Velvet Plume less.'],
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
  /* MAX skills (and Kiriko's Protective Suzu tie-in). fangs_out, cross_slash, warding_bond and suplex belonged to links removed
     on 2026-10-21 (Astarion, Cloud, Shadowheart, Leon): no perk teaches them now, but an old save may have them learned, so they stay. */
  Object.assign(D.skills, {
    grand_slam: { name: 'Grand Slam', el: 'strike', type: 'dmg', target: 'one', power: 118, cost: { hp: 14 }, crit: 10, critDown: true, desc: 'Junpei’s swing. Heavy strike damage to one foe; always a critical against a Down foe.' },
    frozen_verdict: { name: 'Frozen Verdict', el: 'ice', type: 'dmg', target: 'all', power: 70, cost: { sp: 22 }, ail: { id: 'freeze', chance: 0.45 }, desc: 'Mitsuru’s verdict. Medium ice damage to all foes, with a high chance to Freeze.' },
    featherman_strike: { name: 'Featherman Strike', el: 'light', type: 'dmg', target: 'all', power: 70, cost: { sp: 20 }, desc: 'Ken’s finisher. Medium light damage to all foes; a Light weakness always goes Down.' },
    valkyrie: { name: 'Valkyrie', el: 'heal', type: 'valkyrie', target: 'self', turns: 3, once: true, cost: { sp: 20 }, desc: 'Once per battle. For 3 turns, Solar’s single-target heals reach the whole party and she regains 4 SP a turn.' },
    undying_love: { name: 'Undying Love', el: 'heal', type: 'undying', target: 'ally', turns: 2, once: true, cost: { sp: 24 }, desc: 'Once per battle. For 2 turns, Solar and one ally can’t drop below 1 HP.' },
    fangs_out: { name: 'Fangs Out', el: 'almighty', type: 'dmg', target: 'one', power: 78, cost: { sp: 16 }, drain: 0.5, desc: 'Medium Almighty damage to one foe; Solar recovers HP equal to half of it.' },
    cross_slash: { name: 'Cross-Slash', el: 'slash', type: 'dmg', target: 'one', power: 118, cost: { hp: 14 }, crit: 8, ail: { id: 'bind', chance: 0.4 }, desc: 'Heavy slash damage to one foe; it may Bind it.' },
    warding_bond: { name: 'Warding Bond', el: 'support', type: 'bond', target: 'ally', turns: 3, cost: { sp: 14 }, desc: 'For 3 turns, one ally takes half damage and Solar takes the other half.' },
    suplex: { name: 'Suplex', el: 'strike', type: 'dmg', target: 'one', power: 122, cost: { hp: 14 }, critDown: true, desc: 'Heavy strike damage to one foe; always a critical against a Down foe.' },
    widows_kiss: { name: 'Widow’s Kiss', el: 'pierce', type: 'dmg', target: 'one', power: 150, cost: { hp: 16 }, noResist: true, critFresh: true, desc: 'Severe pierce damage to one foe. Ignores Resist; always crits a foe that hasn’t acted this round.' },
    runway: { name: 'Showstopper', el: 'support', type: 'taunt', target: 'self', turns: 2, def: 1, thOnHit: 8, cost: { sp: 16 }, icon: 'sk-veneer', desc: 'Hyein’s runway. For 2 turns every foe targets Solar; her defense rises and each hit she takes fills her Theurgy.' },
    big_hug: { name: 'Big Hug', el: 'heal', type: 'heal', target: 'ally', full: true, cureAll: true, once: true, power: 999, cost: { sp: 8 }, desc: 'Once per battle. Fully heals one ally and cures all their ailments.' },
    titanic_kiss: { name: 'Titanic Kiss', el: 'support', type: 'charge', target: 'allies', mult: 2.5, cost: { sp: 18 }, desc: 'The party’s next magic attack deals 2.5× damage.' },
    pirouette: { name: 'Pirouette', el: 'pierce', type: 'dmg', target: 'all', power: 66, cost: { hp: 14 }, crit: 6, dodgeNext: true, desc: 'Medium pierce damage to all foes; Solar dodges the next attack aimed at her.' },
    megidolaon: { name: 'Megidolaon', el: 'almighty', type: 'dmg', target: 'all', power: 140, cost: { sp: 48 }, desc: 'Heavy Almighty damage to all foes.' },
    just_eat: { name: 'Just Eat', el: 'heal', type: 'heal', target: 'allies', power: 70, cureAll: true, once: true, cost: { sp: 10 }, desc: 'Chenle’s arrangement. Once per battle: restores a lot of HP to the whole party and cures their ailments.' }
  });
  ['grand_slam', 'frozen_verdict', 'featherman_strike', 'valkyrie', 'undying_love', 'fangs_out', 'cross_slash', 'warding_bond', 'suplex', 'widows_kiss', 'runway', 'big_hug', 'titanic_kiss', 'pirouette', 'megidolaon', 'just_eat'].forEach(k => { D.skills[k].id = k; });
  /* Night-only items (perk kits): used up or gone by morning. aid_spray was a removed link's kit (2026-10-21); kept so an old
     night in progress still knows it. */
  Object.assign(D.items, {
    kit_bead: { name: 'Ken’s Revival Bead', type: 'revive', target: 'dead', hp: 0.5, price: 0, tier: 99, icon: 'revive', use: 'both', night: true, desc: 'From Ken’s emergency kit. Revives a fallen ally with half their HP. Only good tonight.' },
    kit_soul: { name: 'Sunoo’s Chewing Soul', type: 'sp', target: 'ally', sp: 50, price: 0, tier: 99, icon: 'soul', use: 'both', night: true, desc: 'From Sunoo’s takeout box. Restores 50 SP to one ally. Only good tonight.' },
    night_bento: { name: 'Fuuka’s Bento', type: 'spPct', target: 'allies', sp: 0.3, price: 0, tier: 99, icon: 'soul', use: 'both', night: true, desc: 'Experimental. Restores 30% SP to the whole party. Probably.' },
    aid_spray: { name: 'First Aid Spray', type: 'heal', target: 'allies', hp: 0.4, price: 0, tier: 99, icon: 'medicine', use: 'both', night: true, desc: 'Heals the whole party 40%.' },
    night_leftovers: { name: 'Shinjiro’s Leftovers', type: 'heal', target: 'allies', hp: 0.2, price: 0, tier: 99, icon: 'medicine', use: 'both', night: true, desc: 'From the dorm kitchen, in a box with Solar’s name on it. Heals the whole party 20%. Only good tonight.' }
  });
  /* ══════════ Gacha prizes (gacha.js runs the capsule machine and the Velvet Room draws in the life sim) ══════════
     Capsule Tickets are an item (Tartarus drops one now and then, and Shuffle Time's Hierophant), so they travel between the
     life sim's bag and the battle like any other item. The gear below is never sold: capsules and Elizabeth's cards only. */
  Object.assign(D.items, {
    capsule_ticket: { name: 'Capsule Ticket', type: 'key', target: 'none', price: 0, tier: 99, icon: 'star', use: 'field', gacha: true, desc: 'One free turn of the capsule machine at Paulownia Mall.' }
  });
  Object.assign(D.gear, {
    // Capsule machine (Super Rare and up)
    cap_koro_charm: { name: 'Koro-chan Charm', slot: 'acc', icon: 'charm', stats: { lu: 4, ag: 2 }, tier: 2, price: 0, rare: true, gacha: 'capsule', desc: 'A tiny felt Koromaru on a bell.' },
    cap_feather_pin: { name: 'Featherman Pin', slot: 'acc', icon: 'star', stats: { st: 3, en: 3 }, crit: 4, tier: 3, price: 0, rare: true, gacha: 'capsule', desc: 'Ken would trade anything for it.' },
    cap_jack_frost: { name: 'Frosty Hairclip', slot: 'acc', icon: 'barrette', nullAil: ['freeze'], stats: { ma: 3 }, tier: 3, price: 0, rare: true, gacha: 'capsule', desc: 'Hee-ho.' },
    cap_moon_locket: { name: 'Moon Locket', slot: 'acc', icon: 'amulet', spRegen: 2, stats: { ma: 2, lu: 2 }, tier: 4, price: 0, rare: true, gacha: 'capsule', desc: 'A crescent that opens on nothing. Restores 2 SP each turn.' },
    cap_gold_sun: { name: 'Golden Sun Keyring', slot: 'acc', icon: 'sun', stats: { st: 3, ma: 3, en: 3, ag: 3, lu: 3 }, thMult: 1.15, tier: 5, price: 0, rare: true, gacha: 'capsule', desc: 'The capsule machine’s jackpot. Theurgy fills 15% faster.' },
    // Elizabeth's cards (rare gear)
    vel_ribbon: { name: 'Velvet Ribbon', slot: 'acc', icon: 'barrette', spRegen: 4, stats: { ma: 4 }, tier: 4, price: 0, rare: true, gacha: 'velvet', desc: 'The exact blue of the Velvet Room. Restores 4 SP each turn.' },
    vel_butterfly: { name: 'Blue Butterfly Brooch', slot: 'acc', icon: 'star', stats: { ag: 6, lu: 4 }, crit: 6, tier: 5, price: 0, rare: true, gacha: 'velvet', desc: 'It flutters when nobody is looking.' },
    vel_key: { name: 'Contract Key', slot: 'acc', icon: 'amulet', nullAil: ['charm', 'fear', 'distress'], stats: { en: 5 }, tier: 5, price: 0, rare: true, gacha: 'velvet', desc: 'A small silver key on a blue cord.' },
    vel_compendium: { name: 'Pocket Compendium', slot: 'acc', icon: 'bangle', stats: { st: 5, ma: 5, en: 5, ag: 5, lu: 5 }, tier: 6, price: 0, rare: true, gacha: 'velvet', desc: 'Elizabeth’s smallest book, lent indefinitely.' },
    vel_coat: { name: 'Attendant’s Coat', slot: 'armor', def: 64, stats: { en: 4 }, tier: 6, price: 0, rare: true, gacha: 'velvet', desc: 'Blue, impeccably pressed, and surprisingly warm.' }
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
    ['mercy', 'Mercy', 'happy'], ['sebastian', 'Sebastian', 'happy'], ['aphrodite', 'Aphrodite', 'happy'],
    ['judy', 'Judy', 'happy'], ['rohan', 'Rohan', 'serious'],
    ['widowmaker', 'Widowmaker', 'serious'], ['hanni', 'Hanni', 'happy'], ['hyein', 'Hyein', 'happy'], ['jaehyun', 'Jaehyun', 'happy'], ['minji', 'Minji', 'happy'],
    ['mark', 'Mark', 'neutral'], ['haechan', 'Haechan', 'happy'], ['yunjin', 'Yunjin', 'happy'], ['jungwon', 'Jungwon', 'serious'], ['jihoon', 'Jihoon', 'happy'],
    ['junkyu', 'Junkyu', 'happy'], ['sunoo', 'Sunoo', 'happy'], ['cherry', 'Cherry', 'neutral'], ['rio', 'Rio', 'happy'], ['saori', 'Saori', 'neutral'],
    ['ann', 'Ann', 'happy'], ['haru', 'Haru', 'happy'], ['kasumi', 'Kasumi', 'happy'], ['kuromi', 'Kuromi', 'happy'], ['mymelody', 'My Melody', 'happy'],
    ['elizabeth', 'Elizabeth', 'happy'], ['wren', 'Wren', 'neutral'],
    // No portraits yet (2026-10-22): battle.js shows a silhouette until portraits/index.js lists their faces.
    ['danielle', 'Danielle', 'happy'], ['jaemin', 'Jaemin', 'happy'], ['chenle', 'Chenle', 'neutral']].forEach(([id, name, face]) => { WHO[id] = { name, face }; });

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
    // Up to rank 15 (the links that go there): bonds.js's third tier and love15, and the rank-15 perks.
    Object.entries(ranks || {}).forEach(([k, r]) => { const n = Math.min(15, Math.floor(+r || 0)); if (n > 0) b[k] = n; });
    save.bonds = b; save.bondsRev = (reversed || []).filter(x => typeof x === 'string');
    if (Array.isArray(love)) save.bondsLove = love.filter(x => typeof x === 'string');
    if (typeof date === 'string') save.bondDate = date;
    return grantGifts(save);
  }
  /* Perks a link unlocked at exactly this rank (the rank-up toast). */
  const perksAt = (link, rank) => PERKS.filter(p => p.link === link && p.rank === rank);
  const TYPE_NAME = { battle: 'Battle', assist: 'Assist', tartarus: 'Tartarus', daily: 'Daily', max: 'MAX' };

  return {
    NAG, HK, JW, JH, MJ, AK, YK, JP, MT, AG, KM, SJ, OWNED, STARTER_SWAP, yenBonus, bossWeapons, fits, namedTag, BOSS_WEAPON, CHEST_WEAPON, WREF, wrefOf, wrefCost, refineWeapon, weaponAtk, bonusText, canPay,
    STATS, SLOTS, SETS, CARD, rollCard, rarityRoll, mainValue, cardName, statLine, addCard, cardById, wearerOf, equipCard, unequipCard, equippedCards,
    levelCost, refineCost, levelCard, refineCard, dismantleCard, cardBonus, setCounts, ensureCards,
    emptyBonus, addBonus, unitBonus, SKILL_CARDS, teachable, teach,
    SH, shuffleDue, deal, cardText, applyShuffle,
    PERKS, perksOf, perkById, perkState, ctxOf, battlePerks, hasPerk, bondSkills, grantGifts, syncBonds, perksAt, TYPE_NAME, fighter, WHO,
    names: () => Object.fromEntries(Object.entries(WHO).map(([k, v]) => [k, v.name]))
  };
})();
