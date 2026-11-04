/* Persona 3: Solstice · Echoes (2026-10-27, Kat's Persona-collecting design). Data and rules only, no DOM but one small
   style block for the card face; loaded in both pages after tartarus.js (and art/echoes/index.js). The menu, the Velvet Room's
   fusion and the Echo Compendium are drawn by assets/femc/game/echoes-ui.js.

   ── What an Echo is ──
     Haenim stays Solar's Persona. Solar alone (never a party member) has a second slot: an Echo, a collectible sub-Persona
     (P5X-style). The equipped Echo (engine.js buildUnit → layer()):
       - adds its skills to the ones she can use in a fight (after her eight slots and her form's signature; never in a slot),
       - adds its one passive to her sun's passives (the same keys, then the same caps: engine.js PASSIVE_CAP),
       - layers its resistances and weaknesses on Haenim's: only on an element where Haenim (her form, gear and sun) has no
         affinity at all, and a null / repel / drain from an Echo counts as a plain resist. Haenim's own weakness never goes.
     It has no stats of its own. An Echo is swapped in the menu's Personas tab, outside a fight.
   ── The four myth sets (12 each) and the secret one ──
     strangers: Korean myth · Runners: Greek myth (a nod to the frat letters) · HOAX: modern urban legends · Persona 3:
     Japanese myth. Every Echo has an arcana (the 21 of P3's year), a base level (spread over the year) and three skills:
     one at its base level, one 3 levels later and its own signature 6 levels later. The searchers' Personas (Dalnim, Hyeonmu,
     Dokkaebi, Theia), S.E.E.S.'s and Haenim's forms are never Echoes. Samjogo (World) is the secret reward for the four sets
     (milestone 'all'; 18 each since 2026-11-03).
   ── More sets (2026-11-03) ──
     Three more of Kat's worlds, 12 each, found in Tartarus, Shuffle Time and fusion (no story gift): Delicate (fairy tales),
     Havenbrook (Chinese myth), Petal & Thorn (Celtic and fae lore). Stay (hearth and home, 12) is gated (SETS.stay.gate): it
     drops, deals and fuses only once save.epis has 'stay' (setOpen / isOpen / openable), and gives Brownie as a gift then.
     Arcana milestones count the ungated sets only; 'every' (every set) pays plumes, a ★5 card and the Every Universe title.
   ── Balance (FEMC-REVAMP-LORE.md) ──
     An Echo's damage skill never beats her rays: one target at most 96 power in all (hits × power; High Noon is 128), all
     foes at most 60, and a signature's budget rises with the Echo's base level (SIG_CAP). No -dyne spells, no full heals,
     no stats. audit() lists anything over the line (tests/femc_echoes.py runs it).
   ── Growth ──
     The equipped Echo takes the fight's EXP (battle.js afterWin → gainExp; P3's expToNext curve) and learns its next skills.
     Up to two inherited skills ride along (fusion).
   ── Fusion (the Velvet Room, echoes-ui.js) ──
     Two Echoes → one. Different arcana: chart(a, b) (a simplified P3-style arcana-pair chart); the same arcana: another Echo
     of that arcana. The result is the lowest Echo of the result arcana whose base level is at least the parents' average + 1
     (else that arcana's highest); never a parent, never Samjogo; its base level must be at most Solar's. It inherits 1
     skill (2 when the parents' levels add up to 50 or more). A link's rank in the result's arcana (the highest among links of
     that arcana, up to 10) adds bonus EXP: expToNext(level) × rank × 0.25 (RANK_EXP).
   ── The Compendium ──
     Every Echo Solar gets is registered (es.reg[id] = a snapshot { lvl, exp, inh }); Register again to save a stronger one.
     A registered Echo can be summoned again for yen (summonCost) when its level is at most Solar's. Stock: 12 (STOCK); a new
     Echo that arrives with the stock full is registered and summonable, but no copy is kept.
   ── Rewards ──
     +1 Velvet Plume per Echo registered (Elizabeth's claim button, with the Compendium credit: gacha.js claim, ids 'echo:<id>'),
     and MILESTONES (each arcana, each set, the four worlds, every Echo) paid once by echoes-ui.js on the game page (plumes, Revelation cards,
     Boutique looks / titles, Samjogo).
   ── Ways to get them ──
     Shuffle Time (build.js deal: a Major Arcana is an Echo card SH.echoChance of the time, story only), Tartarus (tartarus.js
     loot: golden Shadows 30%, vaults 15%, hidden rooms 20%, story only), fusion, summoning, and four story gifts (GIFTS: the first
     full moon cleared, and three memory fragments of each world).
   ── Save (battle save `echo`, normalize below; old saves start empty, then GIFTS) ──
     { v: 1, list: [{ u, id, lvl, exp, inh: [skill ids] }], on: uid | null, uid, reg: { id: { lvl, exp, inh, day } }, miles: [ids],
       gifts: [ids], news: [{ t, id }] (for the game page's toasts), fused, summons }.
   ── Art ──
     art(id): Kat's art/echoes/<id>.webp once tools/femc-echoes.py lists it in art/echoes/index.js (FEMC_ECHO_ART), else the
     stand-in (`standin`: an existing Shadow's art that fits the myth), else a tarot card of its arcana with its name (cardHtml). */
window.FemcEchoes = (() => {
  const D = window.FEMC_BATTLE_DATA;
  if (!D) return null;
  const E = () => window.FemcBattleEngine, BLD = () => window.FemcBuild;
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* ── Arcana (P3's year), their numerals and tarot files (assets/femc/tarot/<file>.webp) ── */
  const ARCANA = [['Fool', '0', 'fool'], ['Magician', 'I', 'magician'], ['Priestess', 'II', 'priestess'], ['Empress', 'III', 'empress'], ['Emperor', 'IV', 'emperor'],
    ['Hierophant', 'V', 'hierophant'], ['Lovers', 'VI', 'lovers'], ['Chariot', 'VII', 'chariot'], ['Justice', 'VIII', 'justice'], ['Hermit', 'IX', 'hermit'],
    ['Fortune', 'X', 'fortune'], ['Strength', 'XI', 'strength'], ['Hanged Man', 'XII', 'hangedman'], ['Death', 'XIII', 'death'], ['Temperance', 'XIV', 'temperance'],
    ['Devil', 'XV', 'devil'], ['Tower', 'XVI', 'tower'], ['Star', 'XVII', 'star'], ['Moon', 'XVIII', 'moon'], ['Sun', 'XIX', 'sun'], ['Judgement', 'XX', 'judgement']]
    .map(([name, num, file], i) => ({ name, num, file, i }));
  const WORLD = { name: 'World', num: 'XXI', file: null, i: 21 };
  const arc = name => ARCANA.find(a => a.name === name) || (name === 'World' ? WORLD : null);
  const SETS = {
    strangers: { name: 'strangers', myth: 'Korean myth', color: '#5fe0b0', blurb: 'Gods, ghosts and guardians from the old Korean stories.' },
    runners: { name: 'Runners', myth: 'Greek myth', color: '#ffd36b', blurb: 'Greek gods and monsters. Every letter over a frat-house door came from somewhere.' },
    hoax: { name: 'HOAX', myth: 'Urban legends', color: '#c58bff', blurb: 'Stories everybody has heard and nobody can prove.' },
    p3: { name: 'Persona 3', myth: 'Japanese myth', color: '#6ab0ff', blurb: 'Gods and yokai of the Japan Solar wakes up in.' },
    // 2026-11-03: three more of Kat's worlds (found in Tartarus, Shuffle Time and fusion; no story gift) and Stay (GATE).
    delicate: { name: 'Delicate', myth: 'Fairy tales', color: '#ff4f8b', blurb: 'Mirrors, masks and bargains. The fairy tales of a girl who grew up in a castle.' },
    havenbrook: { name: 'Havenbrook', myth: 'Chinese myth', color: '#ff8a4c', blurb: 'Street-corner gods and underworld guards. The east side has its own rules, and so do they.' },
    petal: { name: 'Petal & Thorn', myth: 'Celtic and fae lore', color: '#ff7aa8', blurb: 'The Fair Folk: beautiful, bargaining and sharp. Even petals can cut.' },
    stay: { name: 'Stay', myth: 'Hearth and home', color: '#ffc0d8', blurb: 'House spirits and doorway gods from all over: the ones who keep a home a home.', gate: 'stay', gateWhy: 'Opens after the Stay epilogue.' }
  };
  const SET_ORDER = ['strangers', 'runners', 'hoax', 'p3', 'delicate', 'havenbrook', 'petal', 'stay'];
  // The year's four (the 'all' milestone, Samjogo) and the sets an epilogue world opens (save.epis, engine.js epiDone).
  const FIRST_FOUR = ['strangers', 'runners', 'hoax', 'p3'];

  /* ── Balance lines ── */
  const CAP = { one: 96, all: 60 };
  const SIG_CAP = lvl => ({ one: lvl < 12 ? 52 : lvl < 22 ? 64 : lvl < 34 ? 76 : lvl < 46 ? 86 : 94, all: lvl < 22 ? 36 : lvl < 40 ? 46 : 56 });
  const STOCK = 12, RANK_EXP = 0.25, INHERIT_MAX = 2;

  /* ── Signature skills (one each; ids ec_*; registered in D.skills so the engine, menus and icons treat them as skills) ── */
  const sig = (id, o) => { D.skills[id] = Object.assign({ id, echo: true, desc: '' }, o); return id; };

  /* ── The Echoes. e(id, name, native, set, arcana, lvl, aff, passive, [skill1, skill2, signature], myth, lore, standin, look)
     aff: { el: 'resist' | 'weak' } (layered on Haenim's, see the header). passive: [name, desc, fx]. look: the art prompt's
     description (FEMC-ART-TODO.md). standin: a Shadow's art slug in art/shadows/ (null: the tarot card). ── */
  const ECHOES = [];
  const e = (id, name, native, set, arcana, lvl, aff, passive, skills, myth, lore, standin, look) => {
    const [s1, s2, s3] = skills;
    ECHOES.push({ id, name, native, set, arcana, lvl, aff, passive: { name: passive[0], desc: passive[1], fx: passive[2] }, learn: [[lvl, s1], [lvl + 3, s2], [lvl + 6, s3]],
      myth, lore, standin: standin || null, look });
  };

  // ── strangers: Korean myth ──
  e('jangseung', 'Jangseung', '장승', 'strangers', 'Hierophant', 4, { strike: 'resist', wind: 'weak' }, ['Village Gate', 'Guarding restores a little more HP.', { guardHeal: 0.03 }],
    ['rakukaja', 'dia', sig('ec_gate_posts', { name: 'Gate Posts', el: 'support', type: 'buff', target: 'allies', stat: 'def', cost: { sp: 11 }, desc: 'The two posts at the village gate stand watch. Raises the party’s defense.' })],
    'Carved guardian posts that stood in pairs at the edge of a village, a General of Heaven and a General of Earth, keeping sickness and bad spirits out.',
    'Two painted faces at the edge of town. Nobody passes without being looked at.', null,
    'a pair of tall carved wooden village-guardian totem posts with fierce grinning painted faces, tall black hats, red and black paint, standing side by side and joined by a straw rope hung with white paper charms');
  e('imugi', 'Imugi', '이무기', 'strangers', 'Hermit', 8, { ice: 'resist', elec: 'weak' }, ['A Thousand Years', 'Regains 2 SP each turn.', { spRegen: 2 }],
    ['bufu', 'sukunda', sig('ec_coil_rise', { name: 'Coil and Rise', el: 'ice', type: 'dmg', target: 'one', power: 52, cost: { sp: 7 }, ail: { id: 'bind', chance: 0.15 }, desc: 'The serpent rises a little closer to being a dragon. Light ice damage to one foe; may Bind it.' })],
    'A great serpent that must live a thousand years and catch a wish-granting pearl fallen from heaven before it can become a dragon.',
    'It has been waiting a very long time. It is patient with her too.', 'raja-naga',
    'a huge pale jade-green serpent coiled around a mountain stream rock, tiny horn buds that are not yet dragon horns, reaching up toward a glowing white pearl falling from the sky, mist around it');
  e('gumiho', 'Gumiho', '구미호', 'strangers', 'Lovers', 11, { fire: 'resist', ice: 'weak' }, ['Fox Bead', 'Her ailments land a little more often.', { ailUp: 0.06 }],
    ['marin_karin', 'agi', sig('ec_fox_bead', { name: 'Fox Bead', el: 'fire', type: 'dmg', target: 'one', power: 52, cost: { sp: 7 }, drain: 0.2, desc: 'The bead passes from mouth to mouth and takes something with it. Light fire damage to one foe; Solar recovers HP equal to a fifth of it.' })],
    'A nine-tailed fox who lived a thousand years and can take a woman’s shape. In some tellings she eats hearts; in others she only wants to become human.',
    'She knows what it is like to wear a face for other people.', null,
    'a beautiful fox woman in a white and red hanbok with nine flowing white fox tails fanned behind her, fox ears, a glowing blue fox bead floating above her palm, sly smile');
  e('haetae', 'Haetae', '해태', 'strangers', 'Justice', 15, { fire: 'resist', ice: 'weak' }, ['Horn of Judgement', 'A small chance (8%) to strike back when hit.', { counter: 0.08 }],
    ['rakunda', 'sonic_punch', sig('ec_horn_verdict', { name: 'Horn Verdict', el: 'strike', type: 'dmg', target: 'one', power: 64, cost: { hp: 9 }, crit: 6, debuffOnHit: 'def', desc: 'Haetae butts the one in the wrong. Medium strike damage to one foe; lowers its defense.' })],
    'A lion-like beast with a single horn that can tell right from wrong and butts the guilty; its statues guard Gyeongbokgung Palace against fire.',
    'It looked at her for a long time and decided she was not lying.', 'barong',
    'a stone-and-flesh lion-dog beast with curly green-gold mane, a single horn on its forehead, bells on its collar, scales on its legs, sitting proudly like a palace guardian statue');
  e('chilseong', 'Chilseong', '칠성', 'strangers', 'Star', 19, { elec: 'resist', fire: 'weak' }, ['Seven Stars', 'A little more evasion (+4).', { evade: 4 }],
    ['zionga', 'media', sig('ec_big_dipper', { name: 'Big Dipper', el: 'elec', type: 'dmg', target: 'rand', power: 9, multi: [7, 7], cost: { sp: 12 }, desc: 'Seven stars fall, one after another. Light electric damage to random foes, seven times.' })],
    'The seven stars of the Big Dipper, worshipped as gods of long life and children; mothers set out a bowl of clean water for them at night.',
    'Seven lights that remember everyone born under them.', null,
    'seven small star spirits in white shaman robes and tall hats holding hands in the shape of the Big Dipper, each with a glowing star on its chest, a bowl of clean water below them');
  e('samsin', 'Samsin Halmeoni', '삼신할머니', 'strangers', 'Empress', 23, { wind: 'resist', fire: 'weak' }, ['Birth Spirit', 'Regains 3% HP each turn.', { hpRegen: 0.03 }],
    ['diarama', 'media', sig('ec_samsin_hand', { name: 'Samsin’s Hand', el: 'heal', type: 'heal', target: 'allies', power: 50, cureAll: true, cost: { sp: 20 }, desc: 'The grandmother who gives every baby its blue birthmark. Restores HP to the party and cures their ailments.' })],
    'The grandmother goddess of birth who brings children into the world and watches over them until they are grown; the blue spot on a baby’s back is where she patted it to hurry it out.',
    'She pats Solar’s back like she has done it before. Maybe three times.', 'hariti',
    'a kind old grandmother goddess in a white hanbok and a white headscarf, holding a bundle of rice stalks and a baby wrapped in silk, soft blue light around her hands');
  e('bulgasari', 'Bulgasari', '불가사리', 'strangers', 'Strength', 27, { slash: 'resist', pierce: 'resist', elec: 'weak' }, ['Iron Appetite', 'Her physical attacks deal 6% more.', { physUp: 0.06 }],
    ['heat_wave', 'rakukaja', sig('ec_iron_eater', { name: 'Iron Eater', el: 'strike', type: 'dmg', target: 'one', power: 76, cost: { hp: 11 }, crit: 6, drain: 0.2, desc: 'It eats the weapons thrown at it. Heavy strike damage to one foe; Solar recovers HP equal to a fifth of it.' })],
    'A monster made from grains of rice that ate every needle, spoon and blade in the land and grew too big to kill. Its name means “cannot be killed”.',
    'It ate the last thing that tried to stop it. It is still hungry.', null,
    'a hulking bear-like monster with an elephant trunk, rhino eyes, cow tail and tiger legs, its hide made of melted iron plates, spoons and needles stuck in its back, chewing a sword');
  e('bari', 'Bari Gongju', '바리공주', 'strangers', 'Priestess', 31, { ice: 'resist', fire: 'weak' }, ['The Long Road', 'Regains 3 SP each turn.', { spRegen: 3 }],
    ['recarm', 'me_patra', sig('ec_flower_of_life', { name: 'Flower of Life', el: 'heal', type: 'revive', target: 'dead', power: 75, cost: { sp: 18 }, desc: 'Bari brings back the flowers that revive the dead. Revives a fallen ally with most of their HP.' })],
    'The seventh daughter, thrown away at birth for not being a son, who walked to the underworld for the water and flowers that could save the parents who abandoned her, and became the goddess who guides the dead.',
    'She went back for people who did not come for her. She does not ask Solar to understand.', 'kikuri-hime',
    'a young shaman princess in a layered white, red, blue and yellow shaman robe, carrying a bowl of glowing water and a branch of white flowers of life, walking barefoot, determined');
  e('yongwang', 'Yongwang', '용왕', 'strangers', 'Emperor', 36, { ice: 'resist', elec: 'weak' }, ['Sea Palace', 'Her ice skills deal 10% more.', { boost: { ice: 1.1 } }],
    ['mabufula', 'bufula', sig('ec_east_sea', { name: 'East Sea', el: 'ice', type: 'dmg', target: 'all', power: 46, cost: { sp: 17 }, ail: { id: 'freeze', chance: 0.1 }, desc: 'The Dragon King lifts the East Sea. Medium ice damage to all foes; may Freeze.' })],
    'The dragon king who rules the sea from a palace beneath the waves; fishermen pray to him for calm water, and in one old story he sends a turtle to fetch a rabbit’s liver.',
    'The sea is his and he is lending it.', 'kohryu',
    'a coiling blue-green sea dragon king wearing a royal king’s crown and red dragon robe, whiskers flowing, holding a jade pearl, waves and a sunken palace roof below');
  e('saja', 'Jeoseung Saja', '저승사자', 'strangers', 'Death', 41, { elec: 'resist', wind: 'weak' }, ['The Ledger', 'Ailing foes take 8% more damage from her.', { ailDmg: 0.08 }],
    ['mudoon', 'evil_smile', sig('ec_name_called', { name: 'Name Called', el: 'dark', type: 'insta', target: 'one', chance: 42, cost: { sp: 16 }, desc: 'He reads the foe’s name from his ledger. A good chance to kill one foe instantly; bosses are immune.' })],
    'The messenger of the afterlife in a black gat hat and black hanbok who comes with a list of names to lead the dead away; if your name is called, you go.',
    'He has her name somewhere. He keeps turning the page.', null,
    'a tall pale grim reaper in a long black hanbok and a wide black gat hat with bead strings, holding an open ledger of names, deathly calm face, wisps of grey smoke');
  e('gameunjang', 'Gameunjang Agi', '가믄장아기', 'strangers', 'Fortune', 46, { wind: 'resist', ice: 'weak' }, ['My Own Luck', 'Her crit chance +5%.', { critUp: 5 }],
    ['debilitate', 'heat_riser', sig('ec_own_fortune', { name: 'Her Own Fortune', el: 'almighty', type: 'dmg', target: 'one', power: 90, cost: { sp: 18 }, desc: 'She lives by her own luck. Almighty damage to one foe.' })],
    'The youngest daughter of a Jeju shaman song who told her parents she lived by her own fortune, not theirs, was thrown out for it, made her own luck and became the goddess of fortune.',
    'The one who said it out loud: my life is my own. Solar keeps her close.', 'lakshmi',
    'a confident young woman in a plain black hanbok with a gold-thread skirt, a gourd of rice spilling gold coins at her feet, a road behind her, chin raised, defiant warm smile');
  e('bonghwang', 'Bonghwang', '봉황', 'strangers', 'Sun', 51, { fire: 'resist', ice: 'weak' }, ['Phoenix Rising', 'Her Theurgy starts each battle at 10.', { thStart: 10 }],
    ['maragion', 'mediarama', sig('ec_phoenix_dance', { name: 'Phoenix Dance', el: 'fire', type: 'dmg', target: 'all', power: 56, cost: { sp: 22 }, partyHeal: 0.06, desc: 'The phoenix dances once and the court is warm. Medium fire damage to all foes; the party heals a little.' })],
    'The phoenix of Korean palaces, appearing only in times of peace and a wise ruler; its paired feathers are sewn on the king’s robes.',
    'It only comes when things are about to be all right. It came for her.', null,
    'a radiant Korean phoenix with five-coloured plumage (red, blue, yellow, white, black), a long flowing tail of flame feathers, wings spread, perched on a paulownia branch');

  // ── Runners: Greek myth ──
  e('dionysus', 'Dionysus', 'Διόνυσος', 'runners', 'Fool', 5, { wind: 'resist', ice: 'weak' }, ['Party Never Ends', '2 SP back on each One More.', { momentum: 2 }],
    ['marin_karin', 'tarukaja', sig('ec_bacchanal', { name: 'Bacchanal', el: 'charm', type: 'ailment', target: 'all', ail: { id: 'charm', chance: 0.3 }, cost: { sp: 12 }, desc: 'The party spills into the hall. May Charm every foe.' })],
    'God of wine, theatre and the party that gets out of hand; his followers danced in the hills until the city came looking for them.',
    'Every frat house thinks it invented him. The letters over the door are older than they look.', null,
    'a lazy grinning young god with ivy and grapes in his curly hair, a leopard skin over one shoulder, a golden wine cup raised, a thyrsus staff topped with a pine cone, party lights behind');
  e('hebe', 'Hebe', 'Ἥβη', 'runners', 'Temperance', 9, { ice: 'resist', elec: 'weak' }, ['Cupbearer', 'Regains 2% HP each turn.', { hpRegen: 0.02 }],
    ['dia', 'patra', sig('ec_ambrosia', { name: 'Ambrosia', el: 'heal', type: 'heal', target: 'ally', power: 80, cost: { sp: 7 }, desc: 'She pours the cup that keeps the gods young. Restores a lot of HP to one ally.' })],
    'Goddess of youth and cupbearer to the gods on Olympus, pouring the nectar that kept them young forever.',
    'She tops up everyone’s cup at the party and somehow never drinks.', 'apsaras',
    'a young goddess in a flowing white and pale gold chiton pouring glowing nectar from a golden jug into a cup, flowers in her hair, light and graceful, an eagle feather at her shoulder');
  e('pegasus', 'Pegasus', 'Πήγασος', 'runners', 'Chariot', 13, { wind: 'resist', elec: 'weak' }, ['Winged', 'She acts a little sooner in the turn order.', { haste: 0.05 }],
    ['garu', 'sukukaja', sig('ec_skyward', { name: 'Skyward', el: 'wind', type: 'dmg', target: 'one', power: 64, cost: { sp: 9 }, selfBuff: 'agi', desc: 'Pegasus climbs, then dives. Medium wind damage to one foe, then Solar’s agility rises.' })],
    'The winged horse who sprang from Medusa’s neck, struck the spring of the Muses from a mountain with his hoof, and carried Bellerophon until the hero flew too high.',
    'He will carry her anywhere except too close to the gods.', null,
    'a white winged horse rearing mid-air, great feathered wings spread, a gold bridle, a spring of water bursting from the rock under its hooves, starlight on its mane');
  e('minotaur', 'Minotaur', 'Μινώταυρος', 'runners', 'Strength', 16, { strike: 'resist', wind: 'weak' }, ['Cornered', 'She deals 8% more while badly hurt.', { lowHpUp: 0.08 }],
    ['sonic_punch', 'rakunda', sig('ec_labyrinth_charge', { name: 'Labyrinth Charge', el: 'strike', type: 'dmg', target: 'one', power: 64, acc: 88, cost: { hp: 10 }, crit: 8, desc: 'Head down, horns first, through every wall. Medium strike damage to one foe; not always accurate.' })],
    'The bull-headed son of Crete’s queen, shut in the Labyrinth Daedalus built until Theseus followed Ariadne’s thread to him.',
    'Kept in the middle of a maze for what he was born as. He does not trust exits.', 'minotaur-iv',
    'a towering bull-headed man with heavy horns, a bronze double axe, a broken chain on one wrist, standing in a stone labyrinth corridor, a red thread trailing across the floor');
  e('eros', 'Eros', 'Ἔρως', 'runners', 'Lovers', 20, { pierce: 'resist', fire: 'weak' }, ['Golden Arrow', 'Her crit chance +4%.', { critUp: 4 }],
    ['twin_shot', 'tarunda', sig('ec_lovestruck', { name: 'Lovestruck', el: 'pierce', type: 'dmg', target: 'one', power: 64, cost: { hp: 9 }, crit: 6, ail: { id: 'charm', chance: 0.3 }, desc: 'A golden arrow; whatever it hits forgets it was fighting. Medium pierce damage to one foe; may Charm it.' })],
    'The god of desire with his bow: a gold arrow to make you love, a lead one to make you run. He fell for Psyche himself and had to earn her back.',
    'He has shot everyone in her dorm at least once. He will not say who is next.', 'devoted-cupid',
    'a beautiful winged youth with white feathered wings and a golden bow, one gold-tipped arrow and one lead-tipped arrow in his quiver, a playful smirk, rose petals drifting');
  e('icarus', 'Icarus', 'Ἴκαρος', 'runners', 'Tower', 24, { wind: 'resist', fire: 'weak' }, ['Too Close', 'Her hits on a weakness deal 6% more.', { weakUp: 0.06 }],
    ['garula', 'sukukaja', sig('ec_wax_wings', { name: 'Wax Wings', el: 'wind', type: 'dmg', target: 'one', power: 76, cost: { sp: 11 }, lowHpBonus: 0.3, desc: 'Higher, then the drop. Heavy wind damage to one foe; it hits harder the more hurt Solar is.' })],
    'The boy whose father built him wings of feathers and wax and warned him not to fly too near the sun. He did anyway.',
    'His father told him exactly how high to go. Solar knows the feeling.', 'raphael',
    'a young man with huge wings of feathers held together by melting wax, falling and reaching upward toward a blazing sun at the same time, feathers scattering, a sea far below');
  e('themis', 'Themis', 'Θέμις', 'runners', 'Justice', 29, { elec: 'resist', wind: 'weak' }, ['The Scales', 'Her buffs last a turn longer.', { buffTurns: 1 }],
    ['hamaon', 'marakukaja', sig('ec_divine_law', { name: 'Divine Law', el: 'light', type: 'dmg', target: 'one', power: 76, cost: { sp: 11 }, debuffOnHit: 'atk', desc: 'Themis weighs the foe and finds it wanting. Heavy light damage to one foe; lowers its attack.' })],
    'The titaness of divine law and order, who sat beside Zeus with her scales and spoke the oracles before Apollo did.',
    'She does not care who started it. She cares what is fair.', 'balance',
    'a tall serene titaness in a white peplos and gold laurel crown, blindfolded, holding bronze scales in one hand and a scroll of law in the other, columns behind her');
  e('charon', 'Charon', 'Χάρων', 'runners', 'Death', 33, { ice: 'resist', fire: 'weak' }, ['The Obol', 'Her first skill each turn costs 10% less.', { firstCut: 0.1 }],
    ['mudoon', 'rakunda', sig('ec_last_crossing', { name: 'Last Crossing', el: 'dark', type: 'dmg', target: 'one', power: 76, cost: { sp: 11 }, ail: { id: 'fear', chance: 0.2 }, desc: 'The ferry does not come back. Heavy dark damage to one foe; may cause Fear.' })],
    'The ferryman who poles the dead across the river Styx for the coin left in their mouths; those who cannot pay wander the shore.',
    'He asked her for the coin. She did not have one. He let her stay on the shore.', null,
    'a gaunt hooded ferryman in a ragged dark cloak standing in a narrow black boat, holding a long pole, a lantern hanging from the prow, glowing coin eyes, a misty river');
  e('hecate', 'Hecate', 'Ἑκάτη', 'runners', 'Magician', 37, { fire: 'resist', pierce: 'weak' }, ['Crossroads', 'Her magic deals 6% more.', { magicUp: 0.06 }],
    ['maragion', 'agilao', sig('ec_three_torches', { name: 'Three Torches', el: 'fire', type: 'dmg', target: 'rand', power: 28, multi: [3, 3], cost: { sp: 14 }, desc: 'Three torches, three roads. Fire damage to random foes, three times.' })],
    'Goddess of crossroads, witchcraft and the dark of the moon, carrying torches; she lit Demeter’s way through the dark to find Persephone.',
    'She stands where three roads meet and never tells you which one is right.', 'hecate',
    'a triple goddess, three graceful faces looking three ways, a dark violet robe with a crescent moon, a torch in each of her hands, black hounds at her feet, a crossroads sign');
  e('prometheus', 'Prometheus', 'Προμηθεύς', 'runners', 'Hanged Man', 42, { fire: 'resist', ice: 'weak' }, ['Stolen Fire', 'Her fire skills deal 10% more.', { boost: { fire: 1.1 } }],
    ['agilao', 'matarukaja', sig('ec_stolen_fire', { name: 'Stolen Fire', el: 'fire', type: 'dmg', target: 'all', power: 56, cost: { sp: 20 }, partyBuff: ['atk'], desc: 'He gives the fire away. Medium fire damage to all foes; the party’s attack rises.' })],
    'The titan who stole fire from the gods for humans and was chained to a rock, an eagle eating his liver every day, until Heracles set him free.',
    'He would do it again. He says so every time the eagle comes.', 'surt',
    'a muscular titan in broken chains, holding a fennel stalk with a blazing flame high over his head, an eagle circling, a rocky mountainside, defiant expression');
  e('pandora', 'Pandora', 'Πανδώρα', 'runners', 'Star', 47, { elec: 'resist', ice: 'weak' }, ['What Was Left', 'Once a battle, she stays on her feet at 1 HP.', { endure: true }],
    ['mediarama', 'dekunda', sig('ec_jar_opened', { name: 'The Jar Opened', el: 'almighty', type: 'dmg', target: 'all', power: 54, cost: { sp: 22 }, desc: 'Everything comes out of the jar at once. Almighty damage to all foes.' })],
    'The first woman, given a sealed jar by the gods and told never to open it; when she did, every trouble flew into the world, and only hope stayed inside.',
    'She is sorry. She also thinks they should not have handed her the jar.', 'cloudgirl-pot',
    'a young woman in a pale blue chiton holding an open painted Greek jar, dark shapes of troubles spilling out and swirling away, a single small glowing light of hope still inside the jar');
  e('eos', 'Eos', 'Ἠώς', 'runners', 'Sun', 52, { ice: 'resist', elec: 'weak' }, ['Rosy-Fingered', 'Regains 3% HP each turn.', { hpRegen: 0.03 }],
    ['mediarama', 'heat_riser', sig('ec_dawn_gates', { name: 'Dawn Gates', el: 'light', type: 'dmg', target: 'all', power: 56, cost: { sp: 22 }, partyHeal: 0.05, desc: 'Dawn opens the gates of the sky. Medium light damage to all foes; the party heals a little.' })],
    'Titaness of the dawn, who opens the gates of heaven each morning with rosy fingers so her brother Helios can drive the sun across the sky.',
    'She is always up before Solar. She is always up before everyone.', 'sati',
    'a radiant winged dawn goddess in saffron and rose robes, rose-pink fingers opening golden gates in the sky, a chariot of pale horses behind her, sunrise colours');

  // ── HOAX: urban legends ──
  e('fan_death', 'Fan Death', '선풍기 사망', 'hoax', 'Fool', 3, { wind: 'resist', fire: 'weak' }, ['Timer On', 'A little more evasion (+4).', { evade: 4 }],
    ['garu', 'sukunda', sig('ec_sealed_room', { name: 'Sealed Room', el: 'wind', type: 'dmg', target: 'one', power: 52, cost: { sp: 6 }, ail: { id: 'distress', chance: 0.2 }, desc: 'It was on all night with the windows shut. Light wind damage to one foe; may Distress it.' })],
    'The Korean belief that sleeping in a closed room with an electric fan running can kill you; fans there still come with timers.',
    'Everyone knows it is not real. Everyone still sets the timer.', null,
    'a spooky-cute living electric desk fan spirit with a ghostly pale face in the fan guard, cable tail, a glowing timer dial, gusts of cold wind with paper flying, in a dark bedroom');
  e('bunshinsaba', 'Bunshinsaba', '분신사바', 'hoax', 'Priestess', 7, { elec: 'resist', wind: 'weak' }, ['Ask a Question', 'Her debuffs last a turn longer.', { debuffTurns: 1 }],
    ['tarunda', 'mudo', sig('ec_spirit_pen', { name: 'Spirit Pen', el: 'dark', type: 'dmg', target: 'one', power: 52, cost: { sp: 7 }, ail: { id: 'fear', chance: 0.15 }, desc: 'The pen moves by itself and writes the foe’s name. Light dark damage to one foe; may cause Fear.' })],
    'A Korean schoolyard séance: two students hold one pen over paper, chant “bunshinsaba”, and wait for a spirit to write the answer.',
    'Somebody is always pushing the pen. Nobody ever admits it.', 'laughing-table',
    'a ghostly schoolgirl spirit with long black hair over her face in an old school uniform, two pairs of hands holding one red pen over a sheet of paper with circled letters, candle light');
  e('hook_man', 'Hook Man', null, 'hoax', 'Lovers', 12, { slash: 'resist', elec: 'weak' }, ['Lovers’ Lane', 'Her crit chance +4%.', { critUp: 4 }],
    ['cleave', 'rakunda', sig('ec_scratch', { name: 'Scratch on the Door', el: 'slash', type: 'dmg', target: 'one', power: 30, multi: [2, 2], cost: { hp: 8 }, crit: 8, desc: 'Two scrapes down the car door. Light slash damage to one foe, twice.' })],
    'A couple parked on a dark road hear on the radio that a killer with a hook for a hand has escaped; they drive off, and find the hook hanging from the door handle.',
    'Every story about him starts with two people who should have gone home earlier.', null,
    'a tall shadowy man in a long raincoat with a gleaming steel hook for a hand, face hidden in shadow, standing beside a parked old car at night, red tail lights, radio static');
  e('men_in_black', 'Men in Black', null, 'hoax', 'Hierophant', 17, { pierce: 'resist', wind: 'weak' }, ['The Official Story', 'She can’t be Charmed.', { nullAil: ['charm'] }],
    ['sukunda', 'dekaja', sig('ec_neuralyzer', { name: 'Flash of Forgetting', el: 'support', type: 'ailment', target: 'all', ail: { id: 'disorient', chance: 0.3 }, cost: { sp: 14 }, desc: 'A flash, and nobody remembers what they were doing. May Disorient every foe.' })],
    'Men in black suits who visit witnesses after a UFO sighting and make sure they never talk about it again.',
    'They have told her nothing happened three times. She has started taking notes.', 'trance-twins',
    'two identical men in black suits, black ties and dark sunglasses with pale faces, one holding up a small silver flashing device, a black car behind them, a strange light in the sky');
  e('headless_rider', 'Headless Rider', null, 'hoax', 'Chariot', 21, { fire: 'resist', ice: 'weak' }, ['Full Throttle', 'Her physical attacks deal 6% more.', { physUp: 0.06 }],
    ['agilao', 'sukukaja', sig('ec_hellride', { name: 'Ring Road', el: 'strike', type: 'dmg', target: 'one', power: 64, acc: 92, cost: { hp: 10 }, crit: 6, desc: 'The bike comes out of the dark with nobody’s head on top. Medium strike damage to one foe.' })],
    'A headless rider on a black motorcycle seen on highways late at night, looking for the head he lost in a crash.',
    'He has been going in circles on the same ring road since before she was born.', 'hell-biker',
    'a headless motorcyclist in a black leather jacket on a black motorcycle with blue ghost-fire wheels, a helmet tucked under one arm, speeding along a dark highway, neon trails');
  e('shadow_people', 'Shadow People', null, 'hoax', 'Hermit', 26, { pierce: 'resist', fire: 'weak' }, ['Corner of the Eye', 'Better evasion (+6).', { evade: 6 }],
    ['mudo', 'sukunda', sig('ec_sleep_paralysis', { name: 'Foot of the Bed', el: 'dark', type: 'dmg', target: 'one', power: 76, cost: { sp: 11 }, ail: { id: 'bind', chance: 0.2 }, desc: 'The figure standing at the foot of the bed. Heavy dark damage to one foe; may Bind it.' })],
    'Dark human-shaped figures glimpsed at the edge of vision or standing at the foot of the bed during sleep paralysis; they vanish when you look straight at them.',
    'They only stand there. That is the worst part.', 'maya',
    'tall featureless human silhouettes made of smoky black shadow, one wearing a brimmed hat, standing at the foot of a bed in a dark bedroom, faint glowing eyes, edges dissolving');
  e('hitchhiker', 'The Vanishing Hitchhiker', null, 'hoax', 'Temperance', 30, { wind: 'resist', strike: 'weak' }, ['Just Up the Road', 'Regains 2% HP each turn.', { hpRegen: 0.02 }],
    ['diarama', 'me_patra', sig('ec_wet_seat', { name: 'Wet Seat', el: 'support', type: 'buff', target: 'ally', stat: ['def', 'agi'], cost: { sp: 12 }, desc: 'The passenger is gone and the seat is still wet. Raises one ally’s defense and agility.' })],
    'A driver picks up a young woman on a lonely road and drives her home; at the door she is gone, and her family says she died on that road years ago.',
    'She always asks to be taken home. She never says which one.', 'regent',
    'a translucent young woman in a rain-soaked white dress with a thumb raised on a dark country road, headlights shining through her, rain, a lonely road sign');
  e('bloody_mary', 'Bloody Mary', null, 'hoax', 'Moon', 34, { elec: 'resist', pierce: 'weak' }, ['Say It Three Times', 'Ailing foes take 8% more damage from her.', { ailDmg: 0.08 }],
    ['mudoon', 'evil_smile', sig('ec_mirror_mirror', { name: 'In the Glass', el: 'dark', type: 'dmg', target: 'one', power: 86, cost: { sp: 12 }, desc: 'She looks back out of the mirror. Heavy dark damage to one foe.' })],
    'Say her name three times into a mirror in the dark and a woman’s bleeding face appears in the glass; a sleepover dare for generations.',
    'She only shows up when someone is brave enough to ask. Solar asked.', 'carmen',
    'a pale ghost woman in a tattered red Victorian gown reaching out of a cracked bathroom mirror, candle light, long dark hair, red tears, spooky but elegant');
  e('jersey_devil', 'Jersey Devil', null, 'hoax', 'Devil', 39, { wind: 'resist', ice: 'weak' }, ['Thirteenth Child', 'Her critical hits deal 10% more.', { critAdd: 0.1 }],
    ['garula', 'matarunda', sig('ec_pine_barrens', { name: 'Pine Barrens', el: 'wind', type: 'dmg', target: 'all', power: 46, cost: { sp: 17 }, ail: { id: 'fear', chance: 0.12 }, desc: 'A scream from the pines, then wings. Medium wind damage to all foes; may cause Fear.' })],
    'The thirteenth child of Mother Leeds, born with hooves, wings and a horse’s head, who flew up the chimney and has haunted New Jersey’s Pine Barrens since 1735.',
    'It just wanted to be left alone in the woods. Fair.', 'belphegor',
    'a winged creature with a horse-like head, bat wings, goat hooves, a forked tail and glowing red eyes, perched on a pine branch at night, screaming, pine forest');
  e('black_eyed', 'Black-Eyed Children', null, 'hoax', 'Death', 43, { ice: 'resist', elec: 'weak' }, ['Can We Come In?', 'Foes that are Down take 8% more damage from her.', { downUp: 0.08 }],
    ['mudoon', 'marakunda', sig('ec_let_us_in', { name: 'Let Us In', el: 'dark', type: 'dmg', target: 'all', power: 56, cost: { sp: 20 }, ail: { id: 'fear', chance: 0.15 }, desc: 'They just want to come in. Medium dark damage to all foes; may cause Fear.' })],
    'Pale children with completely black eyes who knock at night and politely, insistently ask to be let in.',
    'Do not let them in. Do not ask why. Just do not.', null,
    'two pale children in old-fashioned hoodies standing at a front door at night, eyes completely black, polite blank smiles, porch light flickering, one small hand knocking');
  e('mothman', 'Mothman', null, 'hoax', 'Tower', 48, { wind: 'resist', fire: 'weak' }, ['Omen', '2 SP back when she hits a weakness.', { weakSp: 2 }],
    ['mazionga', 'debilitate', sig('ec_red_eyes', { name: 'Red Eyes', el: 'elec', type: 'dmg', target: 'all', power: 56, cost: { sp: 20 }, ail: { id: 'shock', chance: 0.12 }, desc: 'Red eyes over the bridge, then the lights go out. Medium electric damage to all foes; may Shock.' })],
    'A winged man-sized creature with glowing red eyes seen around Point Pleasant, West Virginia, in 1966–67, just before the Silver Bridge collapsed.',
    'Some say he causes the disaster. Others say he comes to warn you. Nobody listens either way.', 'venuseagle',
    'a tall grey-brown winged humanoid with huge moth wings patterned with eye spots and two big glowing red eyes, standing on a steel bridge girder at night, sparks of electricity');
  e('elevator_game', 'Elevator Game', '엘리베이터 게임', 'hoax', 'Judgement', 53, { strike: 'resist', pierce: 'weak' }, ['The Fifth Floor', 'Her crit chance on a Down or ailing foe +8%.', { critIf: 8 }],
    ['mediarama', 'heat_riser', sig('ec_other_world', { name: 'The Other World', el: 'almighty', type: 'dmg', target: 'rand', power: 22, multi: [4, 4], cost: { sp: 20 }, desc: 'Up, down, up… and the doors open on another world. Almighty damage to random foes, four times.' })],
    'An internet ritual: ride an elevator alone to floors 4, 2, 6, 2 and 10, let a woman get on at 5, and the doors open on another world.',
    'It works best alone, at night, when you would rather be anywhere else. She found a way back. Most do not.', null,
    'a haunted elevator spirit: an open elevator car glowing red inside, a faceless woman in white standing in it, the floor buttons lit in the order 4 2 6 2 10, a red cross-shaped light beyond the doors');

  // ── Persona 3: Japanese myth ──
  e('zashiki', 'Zashiki-warashi', '座敷童子', 'p3', 'Fortune', 4, { wind: 'resist', elec: 'weak' }, ['House Luck', 'Regains 2 SP each turn.', { spRegen: 2 }],
    ['dia', 'patra', sig('ec_house_spirit', { name: 'House Spirit', el: 'heal', type: 'heal', target: 'allies', power: 32, cost: { sp: 8 }, desc: 'A house with a zashiki-warashi never falls on hard times. Restores a little HP to the whole party.' })],
    'A child spirit who lives in the back rooms of old houses, playing pranks; a house she lives in prospers, and when she leaves, its luck goes with her.',
    'She moved into the dorm before anyone noticed. Junpei blames her for the missing pudding.', null,
    'a small child spirit with a bob haircut in a red kimono, rosy cheeks, holding a temari ball, peeking from behind a sliding paper door, tiny glowing footprints on tatami');
  e('kappa', 'Kappa', '河童', 'p3', 'Temperance', 6, { ice: 'resist', fire: 'weak' }, ['Full Dish', 'Guarding restores a little more HP.', { guardHeal: 0.03 }],
    ['bufu', 'rakukaja', sig('ec_river_pull', { name: 'River Pull', el: 'ice', type: 'dmg', target: 'one', power: 52, cost: { sp: 7 }, ail: { id: 'bind', chance: 0.2 }, desc: 'Pulled under at the river’s edge. Light ice damage to one foe; may Bind it.' })],
    'A river imp with a water-filled dish on its head; bow to it and it bows back, spilling the water and losing its strength. Loves cucumbers and sumo.',
    'Very polite. Do not let it challenge you to sumo.', null,
    'a green turtle-shelled river imp with a beak and a water-filled dish on top of its head, webbed hands holding a cucumber, bowing politely on a riverbank, reeds and water');
  e('nekomata', 'Nekomata', '猫又', 'p3', 'Devil', 10, { fire: 'resist', wind: 'weak' }, ['Twin Tails', 'Her crit chance +4%.', { critUp: 4 }],
    ['agi', 'marin_karin', sig('ec_twin_tails', { name: 'Twin Tails', el: 'slash', type: 'dmg', target: 'one', power: 26, multi: [2, 2], cost: { hp: 7 }, crit: 10, desc: 'Two tails, two swipes. Light slash damage to one foe, twice; crits often.' })],
    'A cat who lives so long its tail splits in two; it walks on its hind legs, talks, and can make the dead dance.',
    'Koromaru does not trust her. She finds this delightful.', 'nekomata',
    'a mischievous cat woman standing on her hind legs with a forked double tail, cat ears, a short kimono, holding a paper lantern with blue ghost fire, sly grin');
  e('tengu', 'Tengu', '天狗', 'p3', 'Magician', 14, { wind: 'resist', elec: 'weak' }, ['Mountain Wind', 'Her wind skills deal 10% more.', { boost: { wind: 1.1 } }],
    ['garula', 'sukukaja', sig('ec_feather_fan', { name: 'Feather Fan', el: 'wind', type: 'dmg', target: 'one', power: 64, cost: { sp: 9 }, debuffOnHit: 'agi', desc: 'One sweep of the feather fan. Medium wind damage to one foe; lowers its agility.' })],
    'Long-nosed mountain goblins in mountain-monk clothes with feather fans that whip up storms; proud, tricky, and the teachers of Japan’s greatest swordsmen.',
    'He thinks very highly of himself and is mostly right.', null,
    'a red-faced long-nosed tengu in yamabushi mountain-monk robes with a small black cap, black bird wings, tall one-toothed geta, waving a large feather fan that whips up a storm');
  e('shisa', 'Shisa', 'シーサー', 'p3', 'Chariot', 18, { fire: 'resist', elec: 'weak' }, ['Open Mouth, Closed Mouth', 'A small chance (8%) to strike back when hit.', { counter: 0.08 }],
    ['sonic_punch', 'rakukaja', sig('ec_rooftop_guard', { name: 'Rooftop Guard', el: 'strike', type: 'dmg', target: 'one', power: 64, cost: { hp: 9 }, crit: 4, tauntSelf: 2, desc: 'The lion-dog on the roof leaps down. Medium strike damage to one foe, and for 2 turns Solar draws every single-target attack.' })],
    'Okinawan lion-dogs set in pairs on rooftops and gates, one mouth open to scare off evil, one closed to keep good luck in.',
    'One barks, one keeps quiet. Between them nothing gets past the door.', 'shiisaa',
    'a terracotta-orange Okinawan lion-dog guardian with a curly mane and a wide open fanged mouth, one paw on a ball, perched on a red-tiled rooftop');
  e('oni', 'Oni', '鬼', 'p3', 'Strength', 22, { strike: 'resist', ice: 'weak' }, ['Iron Club', 'Her physical attacks deal 6% more.', { physUp: 0.06 }],
    ['heat_wave', 'tarukaja', sig('ec_kanabo', { name: 'Kanabō', el: 'strike', type: 'dmg', target: 'one', power: 76, cost: { hp: 11 }, crit: 10, desc: 'An iron club with studs. Heavy strike damage to one foe.' })],
    'Horned ogres with iron clubs who come down from the mountains; on Setsubun people throw roasted beans at them, shouting “Demons out, luck in!”',
    'He has been hit with beans every February for a thousand years. He is over it. Mostly.', 'oni',
    'a huge red-skinned oni with two horns, wild hair, a tiger-skin loincloth, swinging a studded iron kanabo club, roasted beans bouncing off him');
  e('raijin', 'Raijin', '雷神', 'p3', 'Tower', 25, { elec: 'resist', wind: 'weak' }, ['Thunder Drums', 'Her electric skills deal 10% more.', { boost: { elec: 1.1 } }],
    ['zionga', 'mazionga', sig('ec_thunder_drums', { name: 'Thunder Drums', el: 'elec', type: 'dmg', target: 'rand', power: 19, multi: [3, 4], cost: { sp: 13 }, ail: { id: 'shock', chance: 0.06 }, desc: 'He beats the drums on his back. Electric damage to random foes, 3 to 4 times; each may Shock.' })],
    'The god of thunder, a demon riding the storm clouds and beating a ring of drums; children are told to cover their belly buttons or he will eat them.',
    'He likes Akihiko. He likes anyone who hits things.', null,
    'a muscular blue-grey thunder god with horns and wild hair riding a black storm cloud, a ring of taiko drums arched on his back, drumsticks raised, lightning everywhere');
  e('yuki_onna', 'Yuki-onna', '雪女', 'p3', 'Empress', 28, { ice: 'resist', fire: 'weak' }, ['Cold Breath', 'Her Freeze lands 8% more often.', { freezeUp: 0.08 }],
    ['mabufula', 'bufula', sig('ec_white_breath', { name: 'White Breath', el: 'ice', type: 'dmg', target: 'one', power: 76, cost: { sp: 11 }, ail: { id: 'freeze', chance: 0.2 }, desc: 'She breathes on them once. Heavy ice damage to one foe; may Freeze it.' })],
    'A pale woman in white who appears in snowstorms; her breath freezes travellers, but she spared one young man, made him promise never to tell, and married him.',
    'She kept her side of the promise. He did not.', 'skadi',
    'a pale snow woman with very long black hair in a white kimono that fades into falling snow, blue lips, breathing a white frost mist, a snowstorm around her');
  e('kaguya', 'Kaguya-hime', 'かぐや姫', 'p3', 'Moon', 32, { wind: 'resist', strike: 'weak' }, ['Five Tasks', 'Her crit chance on a Down or ailing foe +6%.', { critIf: 6 }],
    ['hamaon', 'mediarama', sig('ec_moon_robe', { name: 'Robe of Feathers', el: 'light', type: 'dmg', target: 'all', power: 46, cost: { sp: 18 }, partyHeal: 0.05, desc: 'The robe of feathers from the moon. Light damage to all foes; the party heals a little.' })],
    'A tiny girl found glowing inside a bamboo stalk who grew into a princess, set her five suitors impossible tasks, and went home to the moon in a robe that made her forget the earth.',
    'She knows what it is like to have somewhere else to go home to.', 'kaguya',
    'a moon princess in a layered Heian-era junihitoe kimono and a robe of white feathers, long black hair, floating up out of a glowing cut bamboo stalk toward a full moon');
  e('daisoujou', 'Daisoujou', '大僧正', 'p3', 'Hanged Man', 38, { elec: 'resist', fire: 'weak' }, ['Stillness', 'Regains 3 SP each turn.', { spRegen: 3 }],
    ['mediarama', 'hamaon', sig('ec_meditation', { name: 'Stillness', el: 'heal', type: 'heal', target: 'allies', power: 40, cureAll: true, cost: { sp: 20 }, desc: 'He does not move; the party does. Restores HP to the party and cures their ailments.' })],
    'Buddhist monks who became living mummies (sokushinbutsu) through years of fasting and meditation, still revered in their temples.',
    'He has been sitting very still for a very long time. He thinks Solar should try it.', 'daisoujou',
    'a serene mummified Buddhist monk seated in lotus position in rich gold and green robes and a tall hat, prayer beads in his hands, a soft halo, temple incense smoke');
  e('enma', 'Enma', '閻魔', 'p3', 'Judgement', 45, { fire: 'resist', wind: 'weak' }, ['The Ledger of Deeds', 'She deals 6% more to bosses.', { bossUp: 0.06 }],
    ['mudoon', 'debilitate', sig('ec_final_verdict', { name: 'Final Verdict', el: 'light', type: 'dmg', target: 'one', power: 86, cost: { sp: 13 }, debuffOnHit: 'def', desc: 'He reads out the foe’s deeds. Heavy light damage to one foe; lowers its defense.' })],
    'The king of hell and judge of the dead, who reads each soul’s deeds from his ledger and decides where it goes; liars have their tongues pulled out.',
    'He has read hers. All three. He has not said anything yet.', 'koumokuten',
    'a stern red-faced king of hell in Chinese-style judge’s robes and a square official’s crown with the character for king, holding a ledger and a flat baton, seated behind a judgement desk');
  e('susanoo', 'Susano-o', '須佐之男', 'p3', 'Emperor', 50, { wind: 'resist', ice: 'weak' }, ['Storm God', 'Her crit chance +5%.', { critUp: 5 }],
    ['magarula', 'power_slash', sig('ec_kusanagi', { name: 'Kusanagi', el: 'slash', type: 'dmg', target: 'one', power: 94, cost: { hp: 13 }, crit: 10, desc: 'The sword from the eight-headed serpent’s tail. Heavy slash damage to one foe; crits often.' })],
    'The storm god, Amaterasu’s wild brother, thrown out of heaven for wrecking it, who slew the eight-headed serpent Yamata-no-Orochi and found the sword Kusanagi in its tail.',
    'The sun’s troublemaker brother. He gets along with Haenim surprisingly well.', 'sh1-susano-o',
    'a wild-haired storm god in ancient Japanese armor and a flowing cape, holding the sword Kusanagi high, storm winds and rain, the shadow of an eight-headed serpent behind him');

  // ── More for the first four sets (2026-11-03, Kat: +6 each) ──
  e('cheoyong', 'Cheoyong', '처용', 'strangers', 'Magician', 7, { wind: 'resist', elec: 'weak' }, ['Cheoyong’s Song', 'Regains 2 SP each turn.', { spRegen: 2 }],
    ['garu', 'patra', sig('ec_cheoyong_dance', { name: 'Cheoyong’s Dance', el: 'fear', type: 'ailment', target: 'all', ail: { id: 'fear', chance: 0.25 }, cost: { sp: 10 }, desc: 'He sings and dances in the doorway, and what came in to do harm backs out. May Fear every foe.' })],
    'The Dragon King’s son who came home to find the plague spirit beside his wife, and instead of raging sang and danced in the doorway until it begged forgiveness; his face was painted on gates against sickness ever after.',
    'He answered the worst night of his life with a song. She can respect that.', null,
    'a calm young man in a wide-sleeved red court robe and a black court hat with a peony on it, dancing with his arms spread in a doorway, a painted red mask-like face, a cowering grey spirit shrinking away behind him');
  e('ungnyeo', 'Ungnyeo', '웅녀', 'strangers', 'Temperance', 14, { strike: 'resist', fire: 'weak' }, ['Mugwort and Garlic', 'Regains 2% HP each turn.', { hpRegen: 0.02 }],
    ['dia', 'rakukaja', sig('ec_hundred_days', { name: 'A Hundred Days', el: 'heal', type: 'heal', target: 'allies', power: 40, cost: { sp: 10 }, desc: 'She waited in the dark until she came out someone new. Restores some HP to the party.' })],
    'The bear who stayed a hundred days in a dark cave eating only mugwort and garlic to become a woman, while the tiger gave up; she became the mother of Dangun, the first king.',
    'The one who stayed in the dark long enough to come out changed.', null,
    'a strong gentle woman in a plain white hanbok with a bear pelt hood over her hair, round bear ears, holding a bundle of mugwort and garlic bulbs, stepping out of a dark cave mouth into soft light');
  e('bulgae', 'Bulgae', '불개', 'strangers', 'Moon', 25, { fire: 'resist', ice: 'weak' }, ['Eclipse', 'Foes that are Down take 8% more damage from her.', { downUp: 0.08 }],
    ['agilao', 'sukunda', sig('ec_bite_the_moon', { name: 'Bite the Moon', el: 'fire', type: 'dmg', target: 'one', power: 38, multi: [2, 2], cost: { sp: 11 }, desc: 'The fire dogs bite, and spit it out because it burns. Fire damage to one foe, twice.' })],
    'Fire dogs sent by the king of a dark land to steal the sun and the moon; the sun is too hot and the moon too cold to hold, so they bite and let go, and that bite is an eclipse.',
    'They keep trying for something too bright to carry. She knows the feeling.', null,
    'two fierce black fire dogs with manes and tails of red flame leaping up together, one biting the edge of a glowing silver crescent moon, sparks falling, a dark sky');
  e('mago', 'Mago Halmi', '마고할미', 'strangers', 'Strength', 34, { strike: 'resist', wind: 'weak' }, ['Mountain Shaper', 'Her physical attacks deal 6% more.', { physUp: 0.06 }],
    ['heat_wave', 'rakukaja', sig('ec_mountain_shaper', { name: 'Mountain Shaper', el: 'strike', type: 'dmg', target: 'all', power: 46, cost: { hp: 15 }, desc: 'She sets down an apron of earth and it becomes a range. Medium strike damage to all foes.' })],
    'The giant grandmother of the beginning who carried earth and stones in her skirt and shaped the mountains and islands; where she stepped there are valleys, and where she rested there are hills.',
    'Big enough to make a country with her hands, and she still sits down to rest.', null,
    'a gigantic kind old grandmother goddess in a white and earth-brown hanbok, carrying rocks and soil in the lifted hem of her skirt, tiny mountains and islands forming where the earth falls, clouds around her shoulders');
  e('cheonyeo', 'Cheonyeo Gwisin', '처녀귀신', 'strangers', 'Hanged Man', 44, { ice: 'resist', fire: 'weak' }, ['Unfinished', 'She deals 8% more while low on HP.', { lowHpUp: 0.08 }],
    ['mudoon', 'bufula', sig('ec_long_hair', { name: 'Long Hair', el: 'dark', type: 'dmg', target: 'one', power: 84, cost: { sp: 13 }, ail: { id: 'bind', chance: 0.12 }, desc: 'Black hair spills across the floor and holds on. Heavy dark damage to one foe; may Bind it.' })],
    'The maiden ghost of Korean tales in a white sobok with long loose black hair, a young woman who died with something left undone and lingers until someone hears her out.',
    'She only wants somebody to listen all the way to the end.', null,
    'a pale young woman ghost in a plain white mourning hanbok, very long loose black hair falling past her knees and pooling on the floor, a sad still face, a faint cold mist and a single white flower in her hand');
  e('haemosu', 'Haemosu', '해모수', 'strangers', 'Chariot', 54, { elec: 'resist', ice: 'weak' }, ['Son of Heaven', 'Her crit chance +5%.', { critUp: 5 }],
    ['zionga', 'mazionga', sig('ec_five_dragons', { name: 'Five-Dragon Chariot', el: 'elec', type: 'dmg', target: 'all', power: 56, cost: { sp: 22 }, desc: 'He comes down from the sky every morning on a chariot drawn by five dragons. Heavy electric damage to all foes.' })],
    'The son of heaven who rode down each morning on a chariot drawn by five dragons, with a crow-feather crown and a sword of light, and went back up each night; father of Jumong in the old Buyeo and Goguryeo tales.',
    'Five dragons every morning. He never once arrived quietly.', null,
    'a radiant young sky god in white and gold armour and a crown of black crow feathers, standing in a chariot pulled by five coiling dragons of five colours through the clouds, lightning around the wheels');

  e('atalanta', 'Atalanta', 'Ἀταλάντη', 'runners', 'Chariot', 6, { pierce: 'resist', ice: 'weak' }, ['Fleet Foot', 'A small chance (5%) to act again sooner.', { haste: 0.05 }],
    ['twin_shot', 'sukukaja', sig('ec_golden_apples', { name: 'Golden Apples', el: 'pierce', type: 'dmg', target: 'one', power: 48, cost: { hp: 6 }, crit: 6, desc: 'She only stopped running for the apples. Light pierce damage to one foe; a good chance of a critical hit.' })],
    'The huntress who would only marry a man who could outrun her, and beat them all, until Hippomenes rolled three golden apples across her path and she stopped for each one.',
    'Nobody caught her. She stopped because she wanted to.', null,
    'an athletic young huntress in a short white running chiton and laced sandals, a bow on her back, sprinting mid-stride with her hair streaming, three golden apples rolling in front of her');
  e('tyche', 'Tyche', 'Τύχη', 'runners', 'Fortune', 18, { wind: 'resist', elec: 'weak' }, ['Turn of Luck', 'Her crit chance +4%.', { critUp: 4 }],
    ['garu', 'sukukaja', sig('ec_tyches_wheel', { name: 'Tyche’s Wheel', el: 'almighty', type: 'dmg', target: 'one', power: 60, cost: { sp: 10 }, desc: 'The wheel goes round and lands on someone. Almighty damage to one foe.' })],
    'The goddess of fortune and the luck of cities, crowned with city walls, holding a horn of plenty and a ship’s rudder, sometimes blindfolded and standing on a rolling ball.',
    'Luck is not a plan. She likes it anyway.', null,
    'a graceful goddess in a gold and white chiton wearing a crown shaped like city walls, holding a cornucopia spilling coins and fruit and a ship’s rudder, balancing barefoot on a rolling golden wheel');
  e('morpheus', 'Morpheus', 'Μορφεύς', 'runners', 'Moon', 27, { wind: 'resist', strike: 'weak' }, ['Shapes of Sleep', 'Her ailments land a little more often.', { ailUp: 0.06 }],
    ['marin_karin', 'garula', sig('ec_dream_shapes', { name: 'Dream Shapes', el: 'dark', type: 'dmg', target: 'one', power: 72, cost: { sp: 11 }, ail: { id: 'charm', chance: 0.15 }, desc: 'He wears the face you most want to see. Dark damage to one foe; may Charm it.' })],
    'The god of dreams who takes human shapes in sleep, a son of Hypnos with silent black wings; he wears the faces of people the dreamer loves to carry the gods’ messages.',
    'He always shows up looking like someone she misses.', null,
    'a beautiful pale young god with silent dark feathered wings on his shoulders, half his face a soft mask that shifts between faces, holding poppies, drifting asleep on the air, a starry night haze');
  e('iris', 'Iris', 'Ἶρις', 'runners', 'Priestess', 31, { elec: 'resist', wind: 'weak' }, ['Messenger', 'Regains 2 SP each turn.', { spRegen: 2 }],
    ['mediarama', 'zionga', sig('ec_rainbow', { name: 'Seven Colours', el: 'almighty', type: 'dmg', target: 'rand', power: 10, multi: [7, 7], cost: { sp: 14 }, desc: 'The rainbow comes down in seven bands. Light almighty damage to random foes, seven times.' })],
    'The rainbow goddess who carries messages between the gods and people, with golden wings and a pitcher of water from the river Styx; the rainbow is the road she runs on.',
    'Always carrying something from one world to another. Never keeping any of it.', null,
    'a swift young goddess with iridescent rainbow-coloured wings and a flowing chiton that shifts through every colour, holding a golden pitcher and a herald’s staff, running along a rainbow arc');
  e('medusa', 'Medusa', 'Μέδουσα', 'runners', 'Devil', 39, { pierce: 'resist', slash: 'weak' }, ['Stone Gaze', 'Ailing foes take 8% more damage from her.', { ailDmg: 0.08 }],
    ['evil_smile', 'mudoon', sig('ec_stone_gaze', { name: 'Stone Gaze', el: 'dark', type: 'dmg', target: 'all', power: 46, cost: { sp: 18 }, ail: { id: 'bind', chance: 0.15 }, desc: 'Everyone who looks stays where they are. Medium dark damage to all foes; may Bind them.' })],
    'The Gorgon with snakes for hair whose gaze turns people to stone; in some tellings she was a priestess cursed for what was done to her, and her head was later set on Athena’s shield.',
    'They made her a monster for something that was done to her. Solar does not look away.', null,
    'a fierce beautiful Gorgon woman with a crown of living green snakes for hair, glowing gold eyes, scaled shoulders, a bronze shield on her arm, stone statues of warriors frozen around her feet');
  e('sisyphus', 'Sisyphus', 'Σίσυφος', 'runners', 'Emperor', 50, { strike: 'resist', wind: 'weak' }, ['One More Time', 'A small chance (8%) to strike back when hit.', { counter: 0.08 }],
    ['heat_wave', 'rakukaja', sig('ec_the_boulder', { name: 'The Boulder', el: 'strike', type: 'dmg', target: 'one', power: 92, cost: { hp: 13 }, desc: 'It comes back down, every time, and he pushes it up again. Heavy strike damage to one foe.' })],
    'The clever king of Corinth who cheated death twice and was sentenced to roll a boulder up a hill forever, watching it roll back down each time it neared the top.',
    'He keeps going. That is the whole story, and somehow it is enough.', null,
    'a muscular bearded king in a torn royal cloak and a cracked crown, shoulder braced against an enormous round boulder, pushing it up a steep rocky slope, sweat and dust, determined grin');

  e('hanako', 'Hanako-san', 'トイレの花子さん', 'hoax', 'Magician', 5, { ice: 'resist', fire: 'weak' }, ['Third Stall', 'A little more evasion (+4).', { evade: 4 }],
    ['bufu', 'sukunda', sig('ec_third_stall', { name: 'Third Stall', el: 'ice', type: 'dmg', target: 'one', power: 50, cost: { sp: 6 }, desc: 'Knock three times and ask if she’s there. Light ice damage to one foe.' })],
    'The ghost of the third stall in the girls’ toilets on the third floor of a school: knock three times, ask “Hanako-san, are you there?”, and a small voice answers.',
    'Every school has one. Every school swears theirs is the real one.', null,
    'a small ghostly schoolgirl with a neat black bob haircut, a white blouse and a red pinafore skirt, peeking out from behind a half-open school bathroom stall door, pale face, a faint cold glow');
  e('polybius', 'Polybius', null, 'hoax', 'Fortune', 15, { elec: 'resist', strike: 'weak' }, ['Insert Coin', 'Her ailments land a little more often.', { ailUp: 0.06 }],
    ['zio', 'tarunda', sig('ec_game_over', { name: 'Game Over', el: 'elec', type: 'dmg', target: 'rand', power: 20, multi: [3, 3], cost: { sp: 12 }, ail: { id: 'disorient', chance: 0.1 }, desc: 'The screen flashes and nobody remembers the high score. Electric damage to random foes, three times; may Disorient.' })],
    'An arcade cabinet said to have appeared in Portland in 1981, made players sick and forgetful, drew men in black who collected data from it, and then vanished; nobody has ever found one.',
    'Everyone knows someone who played it. Nobody has played it.', null,
    'a haunted black 1980s arcade cabinet with the word POLYBIUS on its marquee, its screen a swirling hypnotic vector spiral, glowing joystick hands reaching out of the coin slot, scanlines and static');
  e('slender_man', 'Slender Man', null, 'hoax', 'Hanged Man', 23, { pierce: 'resist', fire: 'weak' }, ['Always Behind You', 'Her crit chance on a Down or ailing foe +6%.', { critIf: 6 }],
    ['evil_smile', 'rakunda', sig('ec_too_many_arms', { name: 'Too Many Arms', el: 'pierce', type: 'dmg', target: 'rand', power: 19, multi: [4, 4], cost: { hp: 12 }, desc: 'He is in the back of every photo. Pierce damage to random foes, four times.' })],
    'An internet legend born on a forum in 2009: an impossibly tall faceless man in a black suit who stands at the back of photographs near the woods, with long arms, or tendrils, behind him.',
    'Made up on purpose, and it got loose anyway.', null,
    'an impossibly tall thin faceless man in a black suit and tie with a blank white head, long black tendrils curling from his back, standing at the edge of a misty forest, slightly out of focus like an old photo');
  e('kuchisake', 'Kuchisake-onna', '口裂け女', 'hoax', 'Lovers', 32, { slash: 'resist', pierce: 'weak' }, ['Am I Pretty?', 'Her crit chance +5%.', { critUp: 5 }],
    ['marin_karin', 'cleave', sig('ec_am_i_pretty', { name: 'Am I Pretty?', el: 'slash', type: 'dmg', target: 'one', power: 76, cost: { hp: 10 }, ail: { id: 'fear', chance: 0.15 }, desc: 'There is no right answer. Heavy slash damage to one foe; may Fear it.' })],
    'The slit-mouthed woman of 1970s Japanese and Korean school rumours who wears a surgical mask and asks children “Am I pretty?”; there is no safe answer, only tricks like answering “You’re average.”',
    'A question with no right answer. Solar has been asked a few of those.', null,
    'a tall woman in a long beige trench coat with long black hair, a white surgical mask over her mouth, beautiful sharp eyes, holding a large pair of scissors behind her back, under a flickering street lamp');
  e('chupacabra', 'Chupacabra', null, 'hoax', 'Strength', 41, { strike: 'resist', ice: 'weak' }, ['Night Feeder', 'Her physical attacks deal 6% more.', { physUp: 0.06 }],
    ['double_fangs', 'sonic_punch', sig('ec_goat_sucker', { name: 'Goat Sucker', el: 'pierce', type: 'dmg', target: 'one', power: 80, cost: { hp: 10 }, drain: 0.2, desc: 'Something got into the farm again. Heavy pierce damage to one foe; Solar recovers HP equal to a fifth of it.' })],
    'The “goat-sucker” first reported in Puerto Rico in 1995: a spiny, grey, kangaroo-legged creature that drained livestock of blood; later sightings were mostly mangy coyotes, and nobody believes that either.',
    'Half the sightings were dogs. The other half won’t say.', null,
    'a spiny grey reptilian creature crouched on powerful kangaroo-like hind legs, a row of quills down its back, big glowing red eyes and long fangs, a broken farm fence and moonlight behind it');
  e('backrooms', 'The Backrooms', null, 'hoax', 'Hermit', 51, { elec: 'resist', wind: 'weak' }, ['No-Clip', 'Better evasion (+6).', { evade: 6 }],
    ['mazionga', 'sukunda', sig('ec_level_zero', { name: 'Level 0', el: 'almighty', type: 'dmg', target: 'all', power: 56, cost: { sp: 22 }, ail: { id: 'disorient', chance: 0.1 }, desc: 'Yellow carpet, buzzing lights, no doors. Almighty damage to all foes; may Disorient.' })],
    'A 2019 internet legend: if you clip out of reality in the wrong place you fall into endless empty office rooms of damp yellow carpet, mono-yellow wallpaper and buzzing fluorescent lights.',
    'Rooms that go on forever and are not anywhere. Nobody has found the way out, so nobody can say.', null,
    'an eerie humanoid figure made of empty yellow office rooms, its body walls of mono-yellow wallpaper and damp carpet, a buzzing fluorescent light panel for a face, endless doorless corridors folding behind it');

  e('kodama', 'Kodama', '木霊', 'p3', 'Priestess', 8, { wind: 'resist', fire: 'weak' }, ['Old Tree', 'Regains 2% HP each turn.', { hpRegen: 0.02 }],
    ['dia', 'garu', sig('ec_mountain_echo', { name: 'Mountain Echo', el: 'wind', type: 'dmg', target: 'one', power: 50, cost: { sp: 6 }, desc: 'Call into the mountains and something calls back. Light wind damage to one foe.' })],
    'Spirits who live in very old trees; the echo that answers in the mountains is their voice, and cutting down a tree with a kodama in it brings bad luck.',
    'The original echo. It answers when she calls.', null,
    'a small pale tree spirit with a round white head, simple hollow eyes and mouth, a little leafy body, sitting on the root of an enormous ancient cedar tree with a shimenawa rope around it, tiny glowing moss lights');
  e('tanuki', 'Bake-danuki', '化け狸', 'p3', 'Fool', 16, { strike: 'resist', pierce: 'weak' }, ['Leaf on the Head', '2 SP back on each One More.', { momentum: 2 }],
    ['sonic_punch', 'marin_karin', sig('ec_leaf_trick', { name: 'Leaf Trick', el: 'strike', type: 'dmg', target: 'one', power: 60, cost: { hp: 8 }, ail: { id: 'disorient', chance: 0.2 }, desc: 'A leaf on the head and it is someone else entirely. Strike damage to one foe; may Disorient it.' })],
    'The shapeshifting raccoon dog of Japanese folklore, a cheerful trickster who puts a leaf on its head to change shape, drums on its round belly and turns leaves into money that later turns back.',
    'He tricks people for fun and pays for dinner with leaves. Solar laughs anyway.', null,
    'a round cheerful tanuki in a straw hat and a little straw raincoat, a green leaf on its head, holding a sake flask and a promissory note, drumming on its round belly, puffs of transformation smoke around it');
  e('kamaitachi', 'Kamaitachi', '鎌鼬', 'p3', 'Death', 30, { wind: 'resist', ice: 'weak' }, ['First Cut', 'Her first hit each battle deals 8% more.', { firstCut: 0.08 }],
    ['garula', 'cleave', sig('ec_sickle_wind', { name: 'Sickle Wind', el: 'slash', type: 'dmg', target: 'rand', power: 25, multi: [3, 3], cost: { hp: 11 }, desc: 'Three weasels ride the wind: one trips, one cuts, one heals the cut. Slash damage to random foes, three times.' })],
    'Weasels riding a whirlwind with sickle claws: in the old telling three come together, the first knocks you down, the second cuts, the third salves the wound, so the cut never bleeds.',
    'They cut and they patch it up. Very polite, very sharp.', null,
    'three sleek weasels riding a spiralling whirlwind, their front paws long curved sickle blades, the third holding a little pot of salve, leaves and dust caught in the wind');
  e('baku', 'Baku', '獏', 'p3', 'Hermit', 36, { elec: 'resist', fire: 'weak' }, ['Eat the Dream', 'She can’t be Feared.', { nullAil: ['fear'] }],
    ['me_patra', 'mudo', sig('ec_dream_eater', { name: 'Dream Eater', el: 'dark', type: 'dmg', target: 'one', power: 76, cost: { sp: 11 }, drain: 0.2, desc: 'It eats the bad dream and leaves the night. Dark damage to one foe; Solar recovers HP equal to a fifth of it.' })],
    'A chimera with an elephant’s trunk, a tiger’s legs and an ox’s tail that eats nightmares; children woken by a bad dream call “Baku, come eat my dream” three times.',
    'Call it three times and the bad dream is gone. She has called it.', null,
    'a gentle chimera beast with an elephant’s trunk and tusks, a bear-like body, tiger legs and an ox tail, inhaling a swirl of dark nightmare smoke from a sleeping child’s pillow, stars on its hide');
  e('jorogumo', 'Jorōgumo', '絡新婦', 'p3', 'Lovers', 42, { pierce: 'resist', fire: 'weak' }, ['Silk', 'Her ailments land a little more often.', { ailUp: 0.06 }],
    ['marin_karin', 'mudoon', sig('ec_silk_bind', { name: 'Silk Bind', el: 'support', type: 'ailment', target: 'all', ail: { id: 'bind', chance: 0.3 }, cost: { sp: 14 }, desc: 'A biwa plays at the waterfall and the threads go out. May Bind every foe.' })],
    'A spider that becomes a beautiful woman at four hundred years old, luring travellers to a waterfall with biwa music and binding them in silk; at Jōren Falls she is a guardian who once spared a woodcutter.',
    'Beautiful, patient, a little dangerous. She asks nothing yet.', null,
    'an elegant woman in a black and gold kimono with a spider pattern, long black hair, six thin golden spider legs fanning from her back, playing a biwa while silk threads glisten around her at a misty waterfall');
  e('benzaiten', 'Benzaiten', '弁才天', 'p3', 'Star', 47, { ice: 'resist', elec: 'weak' }, ['Flowing Water', 'Regains 3 SP each turn.', { spRegen: 3 }],
    ['mediarama', 'mabufula', sig('ec_biwa_song', { name: 'Biwa Song', el: 'ice', type: 'dmg', target: 'all', power: 56, cost: { sp: 20 }, partyHeal: 0.05, desc: 'The goddess of music plays and the river answers. Heavy ice damage to all foes; the party heals a little.' })],
    'The goddess of music, eloquence, water and everything that flows, one of the Seven Lucky Gods, playing a biwa; she came to Japan from India’s Sarasvati and has her shrines on islands.',
    'Everything that flows: water, music, words. She approves of Solar’s singing.', 'sarasvati',
    'a serene beautiful goddess in flowing white and sea-green robes and a jewelled crown, playing a golden biwa lute, seated on a white dragon’s coil above rippling water, lotus petals drifting');

  // ── delicate: Fairy tales (2026-11-03) ──
  e('frog_prince', 'The Frog Prince', 'Froschkönig', 'delicate', 'Fool', 5, { ice: 'resist', fire: 'weak' }, ['Golden Ball', 'Guarding restores a little more HP.', { guardHeal: 0.03 }],
    ['bufu', 'dia', sig('ec_well_water', { name: 'Well Water', el: 'ice', type: 'dmg', target: 'one', power: 48, cost: { sp: 6 }, desc: 'He fetched the golden ball from the bottom of the well. Light ice damage to one foe.' })],
    'The Grimm tale of a princess who drops her golden ball into a well and promises a frog anything to get it back; he holds her to it, and the spell breaks when she finally loses her temper with him.',
    'He was a prince the whole time. Nobody looked twice.', null,
    'a dapper green frog with a tiny golden crown sitting on the stone rim of an old well, holding a shining golden ball, a half-visible ghost of a handsome prince shimmering behind him');
  e('pied_piper', 'The Pied Piper', 'Rattenfänger von Hameln', 'delicate', 'Magician', 9, { wind: 'resist', elec: 'weak' }, ['The Tune', 'Her ailments land a little more often.', { ailUp: 0.06 }],
    ['garu', 'marin_karin', sig('ec_follow_the_tune', { name: 'Follow the Tune', el: 'charm', type: 'ailment', target: 'all', ail: { id: 'charm', chance: 0.25 }, cost: { sp: 12 }, desc: 'Everyone who hears it follows. May Charm every foe.' })],
    'The piper in a coat of many colours who led the rats out of Hamelin with his pipe, and, when the town refused to pay him, played again and led its children away.',
    'Everyone follows the music. The question is where it’s going.', null,
    'a tall thin piper in a harlequin coat of red and yellow patches and a feathered hat, playing a long silver pipe, a crowd of little shadow figures dancing after him down a cobbled street');
  e('little_mermaid', 'The Little Mermaid', 'Den lille Havfrue', 'delicate', 'Lovers', 13, { ice: 'resist', elec: 'weak' }, ['Her Voice', 'Regains 2 SP each turn.', { spRegen: 2 }],
    ['bufu', 'media', sig('ec_sea_foam', { name: 'Sea Foam', el: 'ice', type: 'dmg', target: 'one', power: 60, cost: { sp: 8 }, desc: 'She traded her voice for a chance. Ice damage to one foe.' })],
    'Andersen’s mermaid who gives her voice to the sea witch for legs and a chance at a human soul; every step feels like knives, and at dawn she becomes sea foam rather than hurt the one she loves.',
    'She paid for it with her voice. Solar knows what a voice costs.', 'ganga',
    'a beautiful young mermaid with long red hair and a shimmering teal tail, one hand at her silent throat, a glowing pearl of her voice floating in a sea witch’s shell, sea foam rising around her');
  e('red_shoes', 'The Red Shoes', 'De røde Sko', 'delicate', 'Chariot', 17, { fire: 'resist', ice: 'weak' }, ['Dance On', 'A small chance (5%) to act again sooner.', { haste: 0.05 }],
    ['agi', 'sukukaja', sig('ec_cant_stop', { name: 'Can’t Stop Dancing', el: 'strike', type: 'dmg', target: 'rand', power: 20, multi: [3, 3], cost: { hp: 9 }, desc: 'Once they are on, the shoes keep going. Strike damage to random foes, three times.' })],
    'Andersen’s girl who wore red shoes to church and could not stop dancing in them, through fields and forests, day and night, until she begged to be free of them.',
    'Shoes that never let you stop performing. She has owned a pair.', 'soul-dancer',
    'a pair of glossy red ballet shoes dancing on their own with a ghostly dancing girl rising out of them in a white dress, mid-pirouette, ribbons whirling, a trail of red light');
  e('rumpelstiltskin', 'Rumpelstiltskin', 'Rumpelstilzchen', 'delicate', 'Fortune', 21, { elec: 'resist', wind: 'weak' }, ['Guess My Name', 'Her crit chance +4%.', { critUp: 4 }],
    ['zio', 'tarunda', sig('ec_straw_to_gold', { name: 'Straw to Gold', el: 'almighty', type: 'dmg', target: 'one', power: 60, cost: { sp: 10 }, desc: 'He spins it overnight, and the price comes later. Almighty damage to one foe.' })],
    'The little man who spun straw into gold for a miller’s daughter in exchange for her firstborn, and would only let her off if she could guess his name.',
    'Everything turns on a name. Whose it is, and who gets to say it.', null,
    'a wiry little imp-like man with a long beard and a pointed cap, hunched at a spinning wheel turning straw into glowing threads of gold, a mischievous grin, piles of straw and gold coins');
  e('snow_queen', 'The Snow Queen', 'Snedronningen', 'delicate', 'Empress', 25, { ice: 'resist', fire: 'weak' }, ['Mirror Splinter', 'Her Freeze lands 8% more often.', { freezeUp: 0.08 }],
    ['bufula', 'mabufu', sig('ec_ice_palace', { name: 'Ice Palace', el: 'ice', type: 'dmg', target: 'all', power: 46, cost: { sp: 17 }, ail: { id: 'freeze', chance: 0.1 }, desc: 'The halls are endless and beautiful and cold. Medium ice damage to all foes; may Freeze.' })],
    'Andersen’s queen of snow who carries off a boy with a splinter of the devil’s mirror in his eye and heart, to her palace of ice, until his friend walks across the world to bring him home.',
    'A splinter in the eye makes everything look cold. Someone walked all the way to fix it.', 'skadi',
    'a tall regal queen made of snow and ice in a white fur gown and a crown of icicles, a glittering shard of mirror floating by her hand, a sleigh of white horses and an ice palace behind her');
  e('magic_mirror', 'The Magic Mirror', 'Spieglein an der Wand', 'delicate', 'Priestess', 29, { pierce: 'resist', strike: 'weak' }, ['Cannot Lie', 'Her crit chance on a Down or ailing foe +6%.', { critIf: 6 }],
    ['hama', 'rakunda', sig('ec_who_is_fairest', { name: 'Who Is Fairest', el: 'light', type: 'dmg', target: 'one', power: 76, cost: { sp: 11 }, desc: 'It only ever tells the truth. Heavy light damage to one foe.' })],
    'The queen’s mirror in Snow White that cannot lie: asked every day who is the fairest of them all, it answers truthfully, and the day the answer changes is the day the story begins.',
    'Two faces in the glass, and both of them are hers.', null,
    'an ornate oval gold-framed magic mirror with a calm pale mask-like face floating inside the glass, glowing green-white light, a second shadowy face just behind the first, thorny gold filigree');
  e('nightingale', 'The Nightingale', 'Nattergalen', 'delicate', 'Star', 33, { wind: 'resist', ice: 'weak' }, ['The Real Song', 'Regains 3% HP each turn.', { hpRegen: 0.03 }],
    ['mediarama', 'garula', sig('ec_real_song', { name: 'The Real Song', el: 'heal', type: 'heal', target: 'allies', power: 50, cureAll: true, cost: { sp: 20 }, desc: 'The real bird sings, and Death gives the crown back. Restores HP to the party and cures their ailments.' })],
    'Andersen’s plain little nightingale whose song moved an emperor to tears; replaced by a jewelled mechanical bird, it came back anyway when he lay dying and sang Death away.',
    'The real one, not the jewelled copy. It came back when it mattered.', null,
    'a small plain brown nightingale singing with its head thrown back on a blossoming branch, glowing notes of light pouring out, a broken jewelled clockwork bird lying below it');
  e('bluebeard', 'Bluebeard', 'Barbe bleue', 'delicate', 'Devil', 38, { slash: 'resist', fire: 'weak' }, ['The Locked Room', 'Ailing foes take 8% more damage from her.', { ailDmg: 0.08 }],
    ['power_slash', 'evil_smile', sig('ec_forbidden_key', { name: 'The Forbidden Key', el: 'slash', type: 'dmg', target: 'one', power: 84, cost: { hp: 11 }, debuffOnHit: 'def', desc: 'The one door she was told not to open. Heavy slash damage to one foe; lowers its defense.' })],
    'Perrault’s rich nobleman with a blue beard who gives his new wife every key to his castle and forbids her one small room; the key comes back stained, and she is saved at the last moment.',
    'Every key but one. The one is always the point.', 'captain-kidd',
    'a towering elegant nobleman in a dark velvet doublet with a long glossy blue beard, a ring of iron keys at his belt, holding up one small key stained red, a locked door behind him');
  e('rapunzel', 'Rapunzel', null, 'delicate', 'Tower', 43, { strike: 'resist', slash: 'weak' }, ['Let Down Your Hair', 'A little more evasion (+5).', { evade: 5 }],
    ['garula', 'sukukaja', sig('ec_golden_braid', { name: 'Golden Braid', el: 'strike', type: 'dmg', target: 'one', power: 80, cost: { hp: 11 }, ail: { id: 'bind', chance: 0.15 }, desc: 'Twenty ells of braid come down from the tower. Heavy strike damage to one foe; may Bind it.' })],
    'The girl locked in a tower with no door by the witch who raised her, who let down her long golden hair as a ladder; her hair was cut off and she found her own way out.',
    'A tower with no door, built by someone who called it love. She climbed down anyway.', null,
    'a young woman leaning from the window of a tall doorless stone tower, an enormous golden braid spilling down the walls and coiling like a rope, a pair of scissors glinting in her other hand');
  e('thirteenth_fairy', 'The Thirteenth Fairy', 'Die dreizehnte Fee', 'delicate', 'Death', 48, { elec: 'resist', fire: 'weak' }, ['The Uninvited', 'Foes that are Down take 8% more damage from her.', { downUp: 0.08 }],
    ['mudoon', 'matarunda', sig('ec_spindle', { name: 'The Spindle', el: 'dark', type: 'dmg', target: 'all', power: 56, cost: { sp: 20 }, desc: 'Everyone in the castle falls asleep at once. Heavy dark damage to all foes.' })],
    'The fairy the king did not invite to the christening, because he only had twelve golden plates; she came anyway and cursed the princess to prick her finger on a spindle.',
    'Leave someone out and they still come to the party. Just not as a guest.', null,
    'a striking fairy in a black and violet-grey gown with tall moth wings, a crown of thorns and briar roses, holding a spindle with a single drop of light on its point, a sleeping castle wrapped in thorns behind her');
  e('firebird', 'The Firebird', 'Жар-птица', 'delicate', 'Sun', 53, { fire: 'resist', ice: 'weak' }, ['Burning Feather', 'Her crit chance +5%.', { critUp: 5 }],
    ['maragion', 'mediarama', sig('ec_firebird_feather', { name: 'Firebird Feather', el: 'fire', type: 'dmg', target: 'one', power: 90, cost: { sp: 14 }, partyHeal: 0.05, desc: 'One feather lights a whole room. Heavy fire damage to one foe; the party heals a little.' })],
    'The glowing bird of Russian fairy tales that steals the tsar’s golden apples; a single tail feather lights a dark room, and catching her starts every quest.',
    'One feather and the whole dark room lights up.', null,
    'a magnificent firebird with glowing orange, gold and crimson plumage, a long peacock-like tail of flaming feathers, wings spread wide, a single golden apple in her talons, embers drifting');

  // ── Havenbrook: Chinese myth (2026-11-03) ──
  e('tudigong', 'Tudigong', '土地公', 'havenbrook', 'Hierophant', 4, { strike: 'resist', wind: 'weak' }, ['Corner Shrine', 'Guarding restores a little more HP.', { guardHeal: 0.03 }],
    ['rakukaja', 'dia', sig('ec_block_watch', { name: 'Block Watch', el: 'support', type: 'buff', target: 'allies', stat: 'agi', cost: { sp: 11 }, desc: 'The god of the neighbourhood knows every alley. Raises the party’s agility.' })],
    'The earth god of one neighbourhood, a small bearded old man with a staff and a gold ingot, whose little shrine sits at street corners and village gates; he knows everyone on his block.',
    'Every block has one. He knows who comes and goes.', null,
    'a small kindly white-bearded old earth god in a red and gold official’s robe and hat, leaning on a gnarled staff and holding a gold ingot, standing in front of a tiny incense-lit corner shrine by a chain-link fence');
  e('nian', 'Nian', '年', 'havenbrook', 'Strength', 8, { strike: 'resist', fire: 'weak' }, ['New Year Beast', 'Her physical attacks deal 5% more.', { physUp: 0.05 }],
    ['sonic_punch', 'tarunda', sig('ec_firecrackers', { name: 'Firecracker Night', el: 'fire', type: 'dmg', target: 'rand', power: 16, multi: [3, 3], cost: { sp: 10 }, desc: 'Red paper, drums and firecrackers: the beast hates all three. Fire damage to random foes, three times.' })],
    'The horned beast that came down from the mountains every New Year’s Eve to eat crops and people, until the villagers learned it feared the colour red, loud drums and firecrackers.',
    'The whole street gets loud at once and the thing backs off. Good to know.', 'wildbeast',
    'a big lion-like horned beast with a red and gold shaggy mane and a single horn, wide fierce eyes, crouching among red paper lanterns and strings of exploding firecrackers');
  e('yue_lao', 'Yue Lao', '月老', 'havenbrook', 'Lovers', 12, { elec: 'resist', wind: 'weak' }, ['Tied Together', '2 SP back on each One More.', { momentum: 2 }],
    ['marin_karin', 'zio', sig('ec_red_thread', { name: 'Red Thread', el: 'charm', type: 'ailment', target: 'one', ail: { id: 'charm', chance: 0.5 }, cost: { sp: 8 }, desc: 'He ties one end to your ankle and the other to someone’s. A good chance to Charm one foe.' })],
    'The old man under the moon who ties an invisible red thread between the ankles of people fated to be together; it can stretch or tangle, but never break.',
    'A thread that tangles but doesn’t break. She has felt it pull.', null,
    'a cheerful old man with a long white beard in pale robes sitting under a full moon, reading a book of names, a basket of red silk threads beside him, one red thread trailing away across the scene');
  e('jiangshi', 'Jiangshi', '僵尸', 'havenbrook', 'Hanged Man', 16, { ice: 'resist', fire: 'weak' }, ['Talisman', 'She can’t be Feared.', { nullAil: ['fear'] }],
    ['mudo', 'sukunda', sig('ec_hopping_corpse', { name: 'Hopping Corpse', el: 'strike', type: 'dmg', target: 'one', power: 30, multi: [2, 2], cost: { hp: 8 }, drain: 0.2, desc: 'It hops in, arms out, and takes a breath from you. Strike damage to one foe, twice; Solar recovers HP equal to a fifth of it.' })],
    'The stiff “hopping corpse” of Chinese folklore in Qing official robes, arms held straight out, that drains the life-breath of the living; a yellow paper talisman on its forehead holds it still.',
    'Stiff, stubborn, and it keeps coming back. Paper on the forehead helps.', null,
    'a stiff pale jiangshi corpse in a dark Qing dynasty official’s robe and round hat, arms stretched straight forward, mid-hop, a yellow paper talisman with red writing hanging over its face');
  e('meng_po', 'Meng Po', '孟婆', 'havenbrook', 'Temperance', 20, { ice: 'resist', elec: 'weak' }, ['Soup of Forgetting', 'Regains 2 SP each turn.', { spRegen: 2 }],
    ['me_patra', 'media', sig('ec_forgetting_soup', { name: 'Five-Flavour Soup', el: 'support', type: 'ailment', target: 'all', ail: { id: 'disorient', chance: 0.3 }, cost: { sp: 14 }, desc: 'One bowl and the last life is gone. May Disorient every foe.' })],
    'The old lady of forgetting who waits on the Bridge of Helplessness in the underworld and serves every soul a bowl of soup that wipes its last life away before it is born again.',
    'Everyone drinks it eventually. Solar asks for a little longer.', null,
    'a calm old woman in grey and white robes standing on a stone bridge over a misty dark river, ladling steaming soup from a large pot into a small bowl, lanterns along the bridge');
  e('zhong_kui', 'Zhong Kui', '钟馗', 'havenbrook', 'Justice', 24, { slash: 'resist', elec: 'weak' }, ['Demon Queller', 'She deals 6% more to bosses.', { bossUp: 0.06 }],
    ['cleave', 'rakunda', sig('ec_demon_queller', { name: 'Demon Queller', el: 'slash', type: 'dmg', target: 'one', power: 76, cost: { hp: 10 }, crit: 6, desc: 'He was turned away for his face and came back to hunt demons. Heavy slash damage to one foe.' })],
    'The scholar who topped the imperial exams but was refused his title for his ugly face, took his own life in protest, and was made king of ghosts; his fierce portrait is hung on doors to scare demons off.',
    'Turned away for his face. Came back and did the job anyway.', 'koumokuten',
    'a fierce bearded demon-hunter in a red scholar-official’s robe and black winged hat, wild eyes and a huge black beard, raising a sword, a small demon cowering under his boot, a bat flying at his shoulder');
  e('bai_suzhen', 'Bai Suzhen', '白素贞', 'havenbrook', 'Priestess', 28, { ice: 'resist', elec: 'weak' }, ['Thousand-Year Pearl', 'Regains 2% HP each turn.', { hpRegen: 0.02 }],
    ['bufula', 'mediarama', sig('ec_flood_the_temple', { name: 'Flood the Temple', el: 'ice', type: 'dmg', target: 'all', power: 46, cost: { sp: 17 }, desc: 'She raised the river against the monk who kept her husband. Medium ice damage to all foes.' })],
    'Lady White Snake, a snake spirit who took human form, married a young man by West Lake and ran a medicine shop; when a monk locked her husband away she flooded his temple, and was sealed under a pagoda.',
    'She broke every rule for the person she chose. They sealed her for it.', 'lustful-snake',
    'a graceful woman in white silk robes with a white snake coiled around her arms, long black hair with a silver pin, standing on rising lake waves, a pagoda and willow trees behind her');
  e('caishen', 'Caishen', '财神', 'havenbrook', 'Fortune', 33, { elec: 'resist', ice: 'weak' }, ['Ingot', 'Her crit chance +5%.', { critUp: 5 }],
    ['zionga', 'sukukaja', sig('ec_gold_ingots', { name: 'Gold Ingots', el: 'almighty', type: 'dmg', target: 'rand', power: 24, multi: [3, 3], cost: { sp: 15 }, desc: 'A rain of gold, if you’re lucky. Almighty damage to random foes, three times.' })],
    'The god of wealth, welcomed on the fifth day of the New Year with firecrackers and offerings, often riding a black tiger and holding a gold ingot; every shop has his picture by the till.',
    'Picture by every till on the east side. Money moves, and so does he.', null,
    'a jolly god of wealth in rich red and gold robes and a tall official’s hat, riding a black tiger, holding up a gleaming gold ingot, coins and strings of cash spilling around him');
  e('guan_yu', 'Guan Yu', '关羽', 'havenbrook', 'Chariot', 37, { slash: 'resist', pierce: 'weak' }, ['Peach Garden Oath', 'A small chance (8%) to strike back when hit.', { counter: 0.08 }],
    ['power_slash', 'rakukaja', sig('ec_crescent_blade', { name: 'Green Dragon Blade', el: 'slash', type: 'dmg', target: 'all', power: 46, cost: { hp: 15 }, desc: 'The oath sworn in the peach garden, kept to the end. Medium slash damage to all foes.' })],
    'The red-faced general of the Three Kingdoms who swore brotherhood with Liu Bei and Zhang Fei in a peach garden and never broke it; he is worshipped as the god of loyalty by police and gangs alike.',
    'Both sides of the law light incense for him. Loyalty is loyalty.', 'kaiden-musha',
    'a towering red-faced general with a long black beard in green robes over gold armour, holding a huge crescent-bladed glaive with a green dragon head, peach blossoms falling around him');
  e('change', 'Chang’e', '嫦娥', 'havenbrook', 'Moon', 42, { ice: 'resist', fire: 'weak' }, ['Elixir', 'A little more evasion (+5).', { evade: 5 }],
    ['mabufula', 'diarama', sig('ec_moon_palace', { name: 'Moon Palace', el: 'light', type: 'dmg', target: 'all', power: 56, cost: { sp: 20 }, desc: 'She drank the elixir and floated up to the cold palace on the moon. Heavy light damage to all foes.' })],
    'The archer Hou Yi’s wife who drank the elixir of immortality and floated up to the moon, where she lives in the cold Guanghan Palace with a jade rabbit; she is honoured at the Mid-Autumn Festival.',
    'She got away, all the way to the moon. It is quiet up there.', null,
    'a beautiful moon goddess in flowing white and pale pink silk ribbons floating upward toward a huge full moon, a white jade rabbit in her arms, an empty elixir bottle drifting below');
  e('ox_horse', 'Ox-Head and Horse-Face', '牛头马面', 'havenbrook', 'Judgement', 47, { strike: 'resist', fire: 'weak' }, ['Underworld Guards', 'Foes that are Down take 8% more damage from her.', { downUp: 0.08 }],
    ['mudoon', 'heat_wave', sig('ec_hell_gate', { name: 'Gate of Hell', el: 'strike', type: 'dmg', target: 'one', power: 86, cost: { hp: 12 }, debuffOnHit: 'def', desc: 'Two guards, one door, nobody slips past. Heavy strike damage to one foe; lowers its defense.' })],
    'The two guardians of the underworld, one with an ox’s head and one with a horse’s face, who fetch the souls of the dead and bring them before the judges; nobody gets past them twice.',
    'Two guards who never take a night off. She respects a good crew.', null,
    'two hulking underworld guards side by side, one with a bull’s head holding a trident, one with a horse’s face holding a chain and spear, both in black armour with red sashes, a hell gate behind them');
  e('nezha', 'Nezha', '哪吒', 'havenbrook', 'Tower', 52, { fire: 'resist', ice: 'weak' }, ['Wind Fire Wheels', 'A small chance (5%) to act again sooner.', { haste: 0.05 }],
    ['maragion', 'sonic_punch', sig('ec_wind_fire_wheels', { name: 'Wind Fire Wheels', el: 'fire', type: 'dmg', target: 'one', power: 92, cost: { sp: 14 }, desc: 'The boy god who fought the Dragon King rides in on burning wheels. Heavy fire damage to one foe.' })],
    'The rebel boy god who fought the Dragon King’s son, gave his flesh back to his parents to pay for it, and was rebuilt from lotus roots; he rides wind-fire wheels with a fire-tipped spear and a red sash.',
    'He paid for his fights with everything and came back anyway, out of lotus root.', null,
    'a fierce young boy god with two hair buns, a red silk sash floating around him, standing on two blazing wheels of wind and fire, a fire-tipped spear in one hand and a golden ring in the other');

  // ── Petal & Thorn: Celtic and fae folklore (2026-11-03) ──
  e('wisp', 'Will-o’-the-Wisp', null, 'petal', 'Fool', 6, { fire: 'resist', ice: 'weak' }, ['Lead Astray', 'A little more evasion (+4).', { evade: 4 }],
    ['agi', 'sukunda', sig('ec_marsh_light', { name: 'Marsh Light', el: 'fire', type: 'dmg', target: 'one', power: 48, cost: { sp: 6 }, ail: { id: 'disorient', chance: 0.15 }, desc: 'A light on the bog that is never where it looks. Light fire damage to one foe; may Disorient it.' })],
    'The flickering lights over bogs and marshes that lead travellers off the path; in Ireland it is a trickster’s lantern, in other places a soul that heaven and hell both turned away.',
    'Pretty, bright, and always a little further off.', 'jack-o-lantern',
    'a small floating flame spirit with a mischievous face inside a pale blue-green flame, carrying a tiny lantern, hovering over a misty bog with reeds and dark water, little trails of light behind it');
  e('puca', 'Púca', null, 'petal', 'Magician', 10, { wind: 'resist', pierce: 'weak' }, ['Shapeshift', 'Her crit chance +4%.', { critUp: 4 }],
    ['garu', 'tarunda', sig('ec_wild_ride', { name: 'Wild Ride', el: 'wind', type: 'dmg', target: 'one', power: 52, cost: { sp: 7 }, desc: 'It takes you on its back and through the night whether you like it or not. Wind damage to one foe.' })],
    'The shapeshifting goblin of Irish folklore that appears as a black horse, goat, hare or man with glowing eyes, takes riders on wild night rides, and can be a menace or bring luck; Samhain is its night.',
    'Horse, hare, goat, boy. It picks a face and dares her to guess.', null,
    'a sleek black horse-like shapeshifter with glowing golden eyes and curling goat horns, a wild mane, half-turning into a dark-haired grinning boy at one shoulder, a hare silhouette in the moonlit grass');
  e('selkie', 'Selkie', null, 'petal', 'Hanged Man', 14, { ice: 'resist', elec: 'weak' }, ['Sealskin', 'Regains 2% HP each turn.', { hpRegen: 0.02 }],
    ['bufu', 'dia', sig('ec_sealskin', { name: 'Sealskin', el: 'ice', type: 'dmg', target: 'one', power: 60, cost: { sp: 8 }, desc: 'She finds her skin and goes back to the sea. Ice damage to one foe.' })],
    'Seal people of the northern isles who shed their skins to dance on the shore as humans; whoever hides a selkie’s skin keeps her on land, until the day she finds it.',
    'Someone hid her skin and called it a home. She found it.', null,
    'a beautiful dark-eyed woman on a rocky moonlit shore half wrapped in a grey silver sealskin cloak, wet black hair, sea spray, a seal’s head shape in the hood, looking back toward the waves');
  e('banshee', 'Banshee', 'Bean Sídhe', 'petal', 'Death', 18, { wind: 'resist', strike: 'weak' }, ['Keening', 'Ailing foes take 8% more damage from her.', { ailDmg: 0.08 }],
    ['evil_smile', 'garu', sig('ec_keen', { name: 'Keen', el: 'wind', type: 'dmg', target: 'all', power: 36, cost: { sp: 12 }, ail: { id: 'fear', chance: 0.15 }, desc: 'Her wail carries across the hills. Wind damage to all foes; may Fear them.' })],
    'The fairy woman of Irish families whose keening wail at night warns that someone of the house will die; she combs her long hair and washes clothes in the stream.',
    'She cries before anything happens, and somehow that is a kindness.', null,
    'a pale fairy woman with very long silver-white hair streaming in the wind, a grey hooded cloak, red-rimmed eyes, her mouth open in a keening wail, holding a silver comb, misty hills behind her');
  e('kelpie', 'Kelpie', null, 'petal', 'Chariot', 22, { ice: 'resist', elec: 'weak' }, ['Bridle', 'Her physical attacks deal 5% more.', { physUp: 0.05 }],
    ['sonic_punch', 'bufula', sig('ec_dragged_under', { name: 'Dragged Under', el: 'ice', type: 'dmg', target: 'one', power: 72, cost: { sp: 10 }, ail: { id: 'bind', chance: 0.12 }, desc: 'Get on its back and you can’t get off. Ice damage to one foe; may Bind it.' })],
    'The water horse of Scottish lochs that waits by the shore, beautiful and tame-looking; whoever climbs on sticks fast to its hide and is carried into the deep, unless they take its bridle.',
    'Beautiful, gentle-looking, and you can’t get off. She has met the type.', null,
    'a beautiful wet black water horse with a mane of dripping water weed, wild glowing eyes, rising out of a dark loch, a silver bridle hanging loose, waves curling around its legs');
  e('changeling', 'Changeling', 'Síofra', 'petal', 'Moon', 27, { elec: 'resist', fire: 'weak' }, ['Left in the Cradle', 'Her crit chance on a Down or ailing foe +6%.', { critIf: 6 }],
    ['marin_karin', 'zionga', sig('ec_swapped', { name: 'Swapped', el: 'dark', type: 'dmg', target: 'one', power: 70, cost: { sp: 10 }, ail: { id: 'charm', chance: 0.15 }, desc: 'Someone else wearing a familiar face. Dark damage to one foe; may Charm it.' })],
    'The fairy child left in a cradle in place of a stolen human baby; it looks right but is not, and grows strange, hungry and old-eyed, and fairies want their own back too.',
    'Looks right, isn’t. The people who love you notice.', null,
    'an eerie fairy child with too-old glittering eyes and pointed ears sitting in a wooden cradle, wrapped in a human baby’s blanket, a crown of foxglove flowers, a shadowy fairy hand reaching from the window');
  e('brigid', 'Brigid', 'Brigit', 'petal', 'Star', 31, { fire: 'resist', ice: 'weak' }, ['Brigid’s Well', 'Regains 3% HP each turn.', { hpRegen: 0.03 }],
    ['mediarama', 'agilao', sig('ec_brigids_flame', { name: 'Brigid’s Flame', el: 'heal', type: 'heal', target: 'allies', power: 45, cureAll: true, cost: { sp: 20 }, desc: 'The fire at Kildare that never went out. Restores HP to the party and cures their ailments.' })],
    'The goddess of poetry, healing and the forge, whose holy fire at Kildare was kept burning for centuries; her day, Imbolc, is the first day of spring, and her cross is woven from rushes.',
    'Poetry, healing and metalwork: making, mending, saying it out loud.', null,
    'a warm radiant goddess with flowing red hair and a green cloak, a perpetual flame burning above one palm and a woven rush cross in the other, a holy well and a blacksmith’s anvil beside her');
  e('aengus', 'Aengus', 'Aengus Óg', 'petal', 'Lovers', 35, { wind: 'resist', pierce: 'weak' }, ['Four Kisses', 'Her ailments land a little more often.', { ailUp: 0.06 }],
    ['marin_karin', 'garula', sig('ec_kiss_birds', { name: 'Kiss Birds', el: 'wind', type: 'dmg', target: 'rand', power: 19, multi: [4, 4], cost: { sp: 14 }, desc: 'His four kisses turn into birds and circle his head. Wind damage to random foes, four times.' })],
    'The young god of love and poetry whose kisses became four birds that circled his head; he fell in love with a girl from a dream and found her as a swan, and flew away with her as one.',
    'He fell for someone he only saw in a dream, and went and found her.', 'devoted-cupid',
    'a handsome golden-haired young god in a green and gold cloak, four small glowing birds circling his head, holding a golden harp, two white swans flying behind him over a lake');
  e('cailleach', 'Cailleach', null, 'petal', 'Hermit', 40, { ice: 'resist', fire: 'weak' }, ['Long Winter', 'Her Freeze lands 8% more often.', { freezeUp: 0.08 }],
    ['mabufula', 'rakunda', sig('ec_long_winter', { name: 'Long Winter', el: 'ice', type: 'dmg', target: 'all', power: 50, cost: { sp: 18 }, ail: { id: 'freeze', chance: 0.12 }, desc: 'She washes her plaid in the whirlpool and the land goes white. Ice damage to all foes; may Freeze.' })],
    'The Veiled One, the old hag of winter in Irish and Scottish lore who shaped the hills with stones dropped from her apron and rules the dark half of the year with a staff that freezes the ground.',
    'She rules the dark half of the year and doesn’t apologise for it.', null,
    'a tall ancient hag goddess with a blue-tinged face and one piercing eye, long white hair, wrapped in a grey plaid, holding a staff that frosts the ground, stones falling from her apron, snowy hills');
  e('morrigan', 'The Morrígan', 'Mór-Ríoghain', 'petal', 'Fortune', 44, { pierce: 'resist', elec: 'weak' }, ['Washer at the Ford', 'Her critical hits deal 10% more.', { critAdd: 0.1 }],
    ['mudoon', 'matarunda', sig('ec_crow_of_battle', { name: 'Crow of Battle', el: 'pierce', type: 'dmg', target: 'all', power: 52, cost: { hp: 14 }, desc: 'Crows over the field: she already knows how it ends. Pierce damage to all foes.' })],
    'The phantom queen of fate and battle who flies over the field as a crow and is seen washing the armour of those about to die at a river ford; she offered Cú Chulainn her love and he refused her.',
    'She tells you how it ends. It is up to you what you do about it.', null,
    'a striking dark queen in a black feathered cloak with crow wings spreading from her shoulders, a crown of black feathers, red eyes, kneeling at a river ford washing silver armour, crows circling above');
  e('lugh', 'Lugh', 'Lugh Lámhfhada', 'petal', 'Sun', 49, { elec: 'resist', ice: 'weak' }, ['Many Skills', 'Her crit chance +5%.', { critUp: 5 }],
    ['zionga', 'sukukaja', sig('ec_spear_of_lugh', { name: 'Spear of Lugh', el: 'elec', type: 'dmg', target: 'one', power: 90, cost: { sp: 13 }, desc: 'The spear that never misses, crackling with lightning. Heavy electric damage to one foe.' })],
    'The shining god of every skill, who was let into the hall of Tara only because he could do everything; his spear of lightning never misses, and Lughnasadh, the harvest festival, is his.',
    'Good at everything and still had to argue his way through the door.', null,
    'a shining young sun god in gold and white armour with a radiant halo, long fair hair, holding a great spear crackling with lightning, a sling at his belt, a harp on his back');
  e('wild_hunt', 'The Wild Hunt', null, 'petal', 'Judgement', 54, { wind: 'resist', ice: 'weak' }, ['The Hunt Rides', 'She deals 6% more to bosses.', { bossUp: 0.06 }],
    ['magarula', 'heat_riser', sig('ec_wild_hunt', { name: 'The Wild Hunt', el: 'wind', type: 'dmg', target: 'all', power: 56, cost: { sp: 22 }, partyBuff: ['agi'], desc: 'The host rides across the winter sky and sweeps everything up. Heavy wind damage to all foes; the party’s agility rises.' })],
    'The ghostly host of fairy riders and hounds that sweeps across the winter sky in northern European folklore, led by a fairy king; anyone who sees it is swept up, or sent home changed.',
    'The whole court of the Fair Folk riding at once. Better to ride with them than in front of them.', null,
    'a spectral fairy king on a pale horse leading a storm of ghostly riders and white hounds across a winter night sky, antlered crown, a hunting horn raised, cloaks streaming into clouds and stars');

  // ── Stay: Hearth and home (2026-11-03; opens after the Stay epilogue, GATE) ──
  e('brownie', 'Brownie', null, 'stay', 'Fool', 7, { strike: 'resist', pierce: 'weak' }, ['Bowl of Cream', 'Guarding restores a little more HP.', { guardHeal: 0.03 }],
    ['dia', 'rakukaja', sig('ec_overnight', { name: 'Overnight', el: 'heal', type: 'heal', target: 'allies', power: 40, cost: { sp: 10 }, desc: 'By morning the house is tidy and nobody saw who did it. Restores some HP to the party.' })],
    'The small shaggy house spirit of Scotland who does the chores at night in exchange for a bowl of cream by the hearth; thank it with clothes and it leaves for good.',
    'Does the work and never wants to be thanked for it.', null,
    'a small shaggy brown house spirit in a ragged little coat, big kind eyes, sweeping a farmhouse kitchen floor by the glowing hearth at night, a bowl of cream waiting on the stone');
  e('domovoi', 'Domovoi', 'Домовой', 'stay', 'Emperor', 11, { fire: 'resist', ice: 'weak' }, ['Master of the House', 'A small chance (6%) to strike back when hit.', { counter: 0.06 }],
    ['agi', 'rakunda', sig('ec_stove_corner', { name: 'Stove Corner', el: 'fire', type: 'dmg', target: 'one', power: 52, cost: { sp: 7 }, desc: 'He lives behind the stove and does not like strangers. Light fire damage to one foe.' })],
    'The house spirit of Slavic homes, a little bearded old man who lives behind the stove and looks after the family and its animals; when a family moved, they carried embers to bring him along.',
    'When the family moved, they carried him in a shovel of embers.', null,
    'a small grumpy bearded old house spirit covered in soft grey hair, wearing a red peasant shirt and bast shoes, sitting behind a big whitewashed brick stove with glowing embers, a cat beside him');
  e('tomte', 'Tomte', null, 'stay', 'Hermit', 15, { ice: 'resist', fire: 'weak' }, ['Farm Watch', 'Regains 2 SP each turn.', { spRegen: 2 }],
    ['bufu', 'sukukaja', sig('ec_winter_rounds', { name: 'Winter Rounds', el: 'ice', type: 'dmg', target: 'one', power: 60, cost: { sp: 8 }, desc: 'He walks the farm every winter night while everyone sleeps. Ice damage to one foe.' })],
    'The small grey-bearded guardian of Swedish farms in a red cap who walks the barns on winter nights; he is easily offended and wants his bowl of porridge with butter on top.',
    'Walks the rounds every night so the others can sleep.', null,
    'a small old gnome-like farm guardian with a long white beard and a pointed red cap, a grey wool coat and a lantern, walking through a snowy farmyard at night with stars and a red barn behind');
  e('kikimora', 'Kikimora', 'Кикимора', 'stay', 'Moon', 19, { elec: 'resist', wind: 'weak' }, ['Night Spinning', 'Her ailments land a little more often.', { ailUp: 0.06 }],
    ['zio', 'marin_karin', sig('ec_night_spinning', { name: 'Night Spinning', el: 'elec', type: 'dmg', target: 'rand', power: 20, multi: [3, 3], cost: { sp: 12 }, desc: 'Something spins in the dark while the house sleeps. Electric damage to random foes, three times.' })],
    'The Slavic house spirit who spins at night and makes noise; to a messy house she is a nuisance who tangles the thread, to a tidy one a helper who looks after the hens.',
    'A nuisance or a help, depending on how you treat the house.', null,
    'a thin small woman spirit with a long nose and wild dark hair under a headscarf, spinning glowing thread on a spindle by a moonlit window at night, tangled threads and a hen asleep nearby');
  e('lares', 'Lares', null, 'stay', 'Hierophant', 24, { strike: 'resist', elec: 'weak' }, ['Household Shrine', 'Regains 2% HP each turn.', { hpRegen: 0.02 }],
    ['media', 'rakukaja', sig('ec_lararium', { name: 'Lararium', el: 'support', type: 'buff', target: 'allies', stat: ['def', 'agi'], cost: { sp: 14 }, desc: 'The little gods by the door watch everyone who lives here. Raises the party’s defense and agility.' })],
    'The Roman guardian gods of the household, two dancing youths with drinking horns painted in the family shrine by the hearth, given a little of every meal and a garland on feast days.',
    'They get a bit of every meal and they watch the door. A fair deal.', null,
    'two young dancing Roman household gods in short belted tunics, each raising a drinking horn and a little bowl, standing in a painted family shrine niche with a garland and a small flame below');
  e('bes', 'Bes', null, 'stay', 'Strength', 28, { strike: 'resist', ice: 'weak' }, ['Ugly on Purpose', 'Her physical attacks deal 6% more.', { physUp: 0.06 }],
    ['sonic_punch', 'tarukaja', sig('ec_bes_dance', { name: 'Bes’s Dance', el: 'strike', type: 'dmg', target: 'one', power: 76, cost: { hp: 10 }, debuffOnHit: 'def', desc: 'He pulls his scariest face and dances bad spirits out of the house. Heavy strike damage to one foe; lowers its defense.' })],
    'The Egyptian household protector, a stocky lion-maned dwarf god with his tongue out, who danced, played music and pulled faces to scare evil away from homes, mothers and children.',
    'Pulls the scariest face he has so the kids can sleep.', null,
    'a stocky muscular dwarf god with a lion’s mane and beard, tongue sticking out, a tall feathered crown, playing a tambourine and dancing, holding a knife, Egyptian painted columns behind him');
  e('taweret', 'Taweret', null, 'stay', 'Empress', 32, { ice: 'resist', elec: 'weak' }, ['Guarded Bed', 'Regains 3% HP each turn.', { hpRegen: 0.03 }],
    ['mediarama', 'rakukaja', sig('ec_taweret_ward', { name: 'Taweret’s Ward', el: 'heal', type: 'heal', target: 'allies', power: 50, cureAll: true, cost: { sp: 20 }, desc: 'The fierce mother goddess stands over every bed in the house. Restores HP to the party and cures their ailments.' })],
    'The Egyptian goddess who protected mothers and children, a pregnant hippopotamus standing upright with lion’s paws and a crocodile’s tail, fierce so the people she guards don’t have to be.',
    'Fierce so the people she guards don’t have to be.', null,
    'a protective Egyptian goddess with the head and body of a standing hippopotamus, lion paws and a crocodile tail, a gold headdress with plumes, resting her paw on a protective sa amulet, a sleeping child behind her');
  e('vesta', 'Vesta', null, 'stay', 'Star', 36, { fire: 'resist', ice: 'weak' }, ['The Flame Kept', 'Her Theurgy starts each battle at 8.', { thStart: 8 }],
    ['agilao', 'mediarama', sig('ec_eternal_flame', { name: 'Eternal Flame', el: 'fire', type: 'dmg', target: 'all', power: 46, cost: { sp: 17 }, partyHeal: 0.05, desc: 'The fire in the round temple that must never go out. Medium fire damage to all foes; the party heals a little.' })],
    'The Roman goddess of the hearth, whose sacred fire in her round temple in the Forum was tended day and night by the Vestal Virgins; if it went out, the city was in danger.',
    'One fire that never goes out, so everyone knows where home is.', null,
    'a serene veiled goddess in a long white stola, holding a shallow bowl with a bright steady flame, standing in a round columned temple with a sacred hearth fire burning behind her');
  e('cardea', 'Cardea', null, 'stay', 'Lovers', 41, { pierce: 'resist', wind: 'weak' }, ['Hawthorn Branch', 'A little more evasion (+5).', { evade: 5 }],
    ['marin_karin', 'hamaon', sig('ec_hinge', { name: 'The Hinge', el: 'pierce', type: 'dmg', target: 'one', power: 84, cost: { hp: 11 }, ail: { id: 'bind', chance: 0.15 }, desc: 'She opens what is shut and shuts what is open. Heavy pierce damage to one foe; may Bind it.' })],
    'The Roman goddess of door hinges who opens what is shut and shuts what is open; she guarded babies’ rooms with a branch of hawthorn, and Janus, the god of doors, loved her.',
    'Which doors open, and which ones stay shut: that is her whole job.', null,
    'a graceful young Roman goddess in a pale rose stola, holding a flowering hawthorn branch and a large ornate bronze door key, standing in a half-open doorway with light spilling through');
  e('janus', 'Janus', null, 'stay', 'Judgement', 45, { elec: 'resist', strike: 'weak' }, ['Two Faces', 'Her crit chance on a Down or ailing foe +6%.', { critIf: 6 }],
    ['zionga', 'dekaja', sig('ec_both_ways', { name: 'Both Ways', el: 'almighty', type: 'dmg', target: 'one', power: 86, cost: { sp: 16 }, desc: 'One face looks back and one looks ahead, at the same time. Almighty damage to one foe.' })],
    'The two-faced Roman god of doors, gates and beginnings, looking back at the past and ahead to the future at once; January is his month, and every prayer started with his name.',
    'One face looks back, one looks ahead. Both of them are honest.', null,
    'a dignified Roman god with two bearded faces looking in opposite directions, one older and one younger, holding a key and a staff, standing in a great arched gateway, a sunrise on one side and a sunset on the other');
  e('eostre', 'Eostre', 'Ēostre', 'stay', 'Sun', 50, { wind: 'resist', ice: 'weak' }, ['First Light', 'Her crit chance +5%.', { critUp: 5 }],
    ['mediarama', 'garula', sig('ec_spring_dawn', { name: 'Spring Dawn', el: 'light', type: 'dmg', target: 'all', power: 56, cost: { sp: 22 }, partyHeal: 0.06, desc: 'The first light after the long winter. Heavy light damage to all foes; the party heals a little.' })],
    'The Anglo-Saxon goddess of dawn and spring that Bede wrote gave her name to a spring month and later to Easter; hares, eggs and the returning light are hers in later folklore.',
    'The light coming back after a long winter, a little earlier every day.', null,
    'a radiant spring goddess with long flowing hair woven with blossoms, a pale gold and green gown, a white hare at her feet, holding a glowing egg of light, a sunrise and blossoming trees behind her');
  e('gabija', 'Gabija', null, 'stay', 'Temperance', 54, { fire: 'resist', wind: 'weak' }, ['Covered Embers', 'Regains 3 SP each turn.', { spRegen: 3 }],
    ['maragion', 'mediarama', sig('ec_banked_fire', { name: 'Banked Fire', el: 'fire', type: 'dmg', target: 'one', power: 92, cost: { sp: 14 }, partyHeal: 0.05, desc: 'Embers covered with ash at night so the fire is still there in the morning. Heavy fire damage to one foe; the party heals a little.' })],
    'The Lithuanian goddess of the hearth fire; families covered the embers with ash each night so she could rest and not wander, and fed her a pinch of salt and bread.',
    'Covered up at night so she is still there in the morning.', null,
    'a warm young hearth goddess made of soft firelight in a white and red Lithuanian folk dress and amber beads, cupping glowing embers in her hands, bread and salt on a wooden table, a stork at the window');

  // ── The secret one: everything registered ──
  e('samjogo', 'Samjogo', '삼족오', 'secret', 'World', 55, { fire: 'resist', ice: 'resist', wind: 'resist' }, ['Three Feet', 'Her Theurgy starts each battle at 15, and her crit chance +5%.', { thStart: 15, critUp: 5 }],
    ['mediarama', 'heat_riser', sig('ec_three_legged_sun', { name: 'Three-Legged Sun', el: 'almighty', type: 'dmg', target: 'all', power: 56, cost: { sp: 26 }, partyBuff: ['atk'], desc: 'One foot in each life, and it never falls. Almighty damage to all foes; the party’s attack rises.' })],
    'The three-legged crow that lives in the sun, painted on Goguryeo tomb walls and known in Japan as Yatagarasu, the crow that guided the first emperor. One bird, three feet.',
    'One foot in each of her lives. It has never once fallen over.', null,
    'a majestic black three-legged crow with glossy feathers edged in gold, wings spread inside a blazing golden sun disc, each of its three feet gripping a different charm: a gold bell, a jade ring on a red cord, and a star pin');

  const byId = id => ECHOES.find(x => x.id === id) || null;
  const SECRET = 'samjogo';
  const isSecret = x => x && x.set === 'secret';
  const collectable = () => ECHOES.filter(x => !isSecret(x));
  /* A gated set (Stay) only drops, deals and fuses once its epilogue world is finished (battle save `epis`); before that its
     Compendium tiles stay ??? with SETS[k].gateWhy. Without a save (a stray call) gated sets stay shut. */
  const curSave = () => (typeof window !== 'undefined' && window.FemcBattle && window.FemcBattle.save) || (typeof window !== 'undefined' && window.FemcGame && window.FemcGame.S && window.FemcGame.S.battleSave) || null;
  const setOpen = (s, k) => { const g = SETS[k] && SETS[k].gate; return !g || !!(s && Array.isArray(s.epis) && s.epis.includes(g)); };
  const isOpen = (s, x) => !!x && setOpen(s, x.set);
  const openable = s => collectable().filter(x => isOpen(s, x));
  const nativeName = x => (x.native && x.native !== x.name ? x.native : '');

  /* ── Art ── */
  const ART_DIR = 'assets/femc/battle/art/echoes/';
  const ART_V = 1;
  const ready = id => Array.isArray(window.FEMC_ECHO_ART) && window.FEMC_ECHO_ART.includes(id);
  function art(id) {
    const x = byId(id); if (!x) return null;
    if (ready(id)) return `${ART_DIR}${id}.webp?v=${(window.FEMC_ECHO_ART_V || ART_V)}`;
    return x.standin ? `assets/femc/battle/art/shadows/${x.standin}.webp` : null;
  }
  const artKind = id => (ready(id) ? 'own' : byId(id) && byId(id).standin ? 'standin' : 'card');
  const tarotOf = name => { const a = arc(name); return a && a.file ? `assets/femc/tarot/${a.file}.webp` : null; };
  /* An Echo's picture: its art, or its arcana's tarot card with its name on a band (World has a drawn card). known: false = a
     locked Compendium tile (the card back, no name). */
  function cardHtml(id, { cls = '', known = true } = {}) {
    const x = byId(id); if (!x) return '';
    style();
    const set = SETS[x.set] || { color: '#fff2b0' }, a = arc(x.arcana);
    if (!known) return `<span class="ec-pic ec-locked ${cls}" style="--ec:${set.color}"><i>${esc(a ? a.num : '?')}</i><b>???</b></span>`;
    const src = art(id);
    if (src) return `<span class="ec-pic ec-art ${cls}" style="--ec:${set.color}"><img src="${src}" alt="${esc(x.name)}" loading="lazy" draggable="false"></span>`;
    const t = tarotOf(x.arcana);
    return `<span class="ec-pic ec-card ${cls}" style="--ec:${set.color}">${t ? `<img src="${t}" alt="" loading="lazy" draggable="false">` : `<svg viewBox="0 0 100 150" aria-hidden="true"><rect x="3" y="3" width="94" height="144" rx="6" fill="#120a24" stroke="#ffd36b" stroke-width="3"/><circle cx="50" cy="66" r="30" fill="#ffd36b"/><circle cx="50" cy="66" r="38" fill="none" stroke="#ffd36b" stroke-width="2" stroke-dasharray="4 5"/><path d="M38 64c4-8 20-8 24 0-4 2-8 3-12 3s-8-1-12-3zM44 70v12M50 70v14M56 70v12" stroke="#120a24" stroke-width="3" fill="#120a24"/><text x="50" y="128" fill="#ffd36b" font-family="Georgia,serif" font-size="13" text-anchor="middle">XXI</text></svg>`}<b>${esc(x.name)}</b></span>`;
  }
  let styled = false;
  function style() {
    if (styled || typeof document === 'undefined') return; styled = true;
    const el = document.createElement('style'); el.id = 'ec-card-style';
    el.textContent = `.ec-pic{position:relative;display:block;aspect-ratio:2/3;border-radius:8px;overflow:hidden;background:radial-gradient(circle at 50% 38%,color-mix(in srgb,var(--ec) 34%,transparent),transparent 70%),#0e0a1c;box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--ec) 70%,transparent)}
.ec-pic img{width:100%;height:100%;object-fit:contain;display:block}.ec-pic.ec-card img{object-fit:cover;filter:saturate(.9)}.ec-pic svg{width:100%;height:100%;display:block}
.ec-pic.ec-card b{position:absolute;left:0;right:0;bottom:8%;padding:.25em .3em;background:rgba(10,6,22,.82);color:#fff4f9;font:700 .78em/1.15 Georgia,serif;text-align:center;letter-spacing:.02em;border-top:1px solid var(--ec);border-bottom:1px solid var(--ec)}
.ec-pic.ec-locked{display:grid;place-items:center;background:repeating-linear-gradient(135deg,#140c26 0 8px,#1b1132 8px 16px);color:color-mix(in srgb,var(--ec) 80%,#fff)}
.ec-pic.ec-locked i{font:700 1.6em Georgia,serif;font-style:normal;opacity:.7}.ec-pic.ec-locked b{position:absolute;bottom:10%;left:0;right:0;text-align:center;font-size:.8em;opacity:.8}`;
    document.head.appendChild(el);
  }

  /* ── Skills ── */
  const need = L => D.progression.expToNext(L);
  const learnedAt = (x, L) => x.learn.filter(([l]) => l <= L).map(([, s]) => s);
  const learnSet = x => x.learn.map(([, s]) => s);
  function skillsOf(inst) {
    const x = byId(inst.id); if (!x) return [];
    return [...new Set(learnedAt(x, inst.lvl).concat((inst.inh || []).filter(s => D.skills[s])))];
  }
  /* What a skill does at most to one foe (power × hits) and to all foes, for the balance lines. */
  function reach(id) {
    const s = D.skills[id]; if (!s || s.type !== 'dmg') return { one: 0, all: 0 };
    const hits = s.multi ? s.multi[1] : 1, p = (s.power || 0) * hits;
    return s.target === 'all' ? { one: 0, all: p } : { one: p, all: 0 };
  }
  /* Everything over the balance lines (an empty list is a pass). */
  function audit() {
    const bad = [], hn = (D.skills.high_noon || { power: 128 }).power;
    ECHOES.forEach(x => {
      x.learn.forEach(([, s], i) => {
        const sk = D.skills[s];
        if (!sk) { bad.push(`${x.id}: unknown skill ${s}`); return; }
        const r = reach(s), cap = i === 2 ? SIG_CAP(x.lvl) : CAP;
        if (r.one > Math.min(cap.one, CAP.one, hn * 0.75)) bad.push(`${x.id}: ${s} one-target ${r.one} > ${Math.min(cap.one, CAP.one)}`);
        if (r.all > Math.min(cap.all, CAP.all)) bad.push(`${x.id}: ${s} all-foe ${r.all} > ${Math.min(cap.all, CAP.all)}`);
        if (sk.full) bad.push(`${x.id}: ${s} is a full heal`);
      });
      const fx = x.passive.fx;
      ['critUp', 'evade'].forEach(k => { if ((fx[k] || 0) > 6) bad.push(`${x.id}: passive ${k} ${fx[k]}`); });
      ['physUp', 'magicUp', 'weakUp', 'ailDmg', 'lowHpUp', 'bossUp', 'downUp', 'ailUp', 'freezeUp', 'counter', 'haste', 'critAdd', 'firstCut'].forEach(k => { if ((fx[k] || 0) > 0.1) bad.push(`${x.id}: passive ${k} ${fx[k]}`); });
      if ((fx.hpRegen || 0) > 0.03 || (fx.spRegen || 0) > 3) bad.push(`${x.id}: regen too high`);
      Object.values(fx.boost || {}).forEach(m => { if (m > 1.1) bad.push(`${x.id}: boost ${m}`); });
      Object.values(x.aff).forEach(a => { if (!['resist', 'weak'].includes(a)) bad.push(`${x.id}: affinity ${a}`); });
    });
    return bad;
  }

  /* ── Save ── */
  const obj = v => v && typeof v === 'object' && !Array.isArray(v);
  const freshEs = () => ({ v: 1, list: [], on: null, uid: 0, reg: {}, miles: [], gifts: [], news: [], fused: 0, summons: 0 });
  function es(s) {
    if (!obj(s.echo)) s.echo = freshEs();
    const o = s.echo;
    if (!Array.isArray(o.list)) o.list = [];
    o.list = o.list.filter(i => obj(i) && byId(i.id) && i.u > 0);
    const seenU = new Set();
    o.list = o.list.filter(i => (seenU.has(i.u) ? false : (seenU.add(i.u), true)));
    o.list.forEach(i => {
      const x = byId(i.id);
      i.lvl = Math.max(x.lvl, Math.min(99, Math.floor(+i.lvl || x.lvl)));
      i.exp = Math.max(0, Math.floor(+i.exp || 0));
      i.inh = [...new Set((Array.isArray(i.inh) ? i.inh : []).filter(k => D.skills[k] && !learnSet(x).includes(k)))].slice(0, INHERIT_MAX);
    });
    o.uid = Math.max(+o.uid || 0, ...o.list.map(i => i.u), 0);
    if (!o.list.some(i => i.u === o.on)) o.on = null;
    if (!obj(o.reg)) o.reg = {};
    Object.keys(o.reg).forEach(id => {
      const r = o.reg[id], x = byId(id);
      if (!x || !obj(r)) { delete o.reg[id]; return; }
      r.lvl = Math.max(x.lvl, Math.min(99, Math.floor(+r.lvl || x.lvl))); r.exp = Math.max(0, Math.floor(+r.exp || 0));
      r.inh = [...new Set((Array.isArray(r.inh) ? r.inh : []).filter(k => D.skills[k] && !learnSet(x).includes(k)))].slice(0, INHERIT_MAX);
    });
    ['miles', 'gifts'].forEach(k => { if (!Array.isArray(o[k])) o[k] = []; o[k] = [...new Set(o[k].filter(v => typeof v === 'string'))]; });
    if (!Array.isArray(o.news)) o.news = [];
    o.news = o.news.filter(n => obj(n) && typeof n.t === 'string').slice(-12);
    ['fused', 'summons'].forEach(k => { if (!(o[k] >= 0)) o[k] = 0; });
    o.v = 1;
    return o;
  }
  /* save.js normalize calls this: the fields, then any story gift that's due (old saves past the first full moon get the
     starter straight away). */
  function normalize(s) { es(s); gifts(s); return s; }
  const owned = s => es(s).list;
  const instOf = (s, u) => owned(s).find(i => i.u === +u) || null;
  const equipped = s => { const o = es(s); return o.on ? instOf(s, o.on) : null; };
  function equip(s, u) { const i = instOf(s, u); if (!i) return { ok: false, why: 'Solar doesn’t have that Echo.' }; es(s).on = i.u; return { ok: true, inst: i }; }
  function unequip(s) { es(s).on = null; return { ok: true }; }
  const isRegistered = (s, id) => !!es(s).reg[id];
  const regCount = s => Object.keys(es(s).reg).length;
  /* Register (or re-register) an Echo: the Compendium keeps a snapshot of it. Returns true the first time. */
  function register(s, inst, day = null) {
    const o = es(s), first = !o.reg[inst.id];
    o.reg[inst.id] = { lvl: inst.lvl, exp: inst.exp || 0, inh: (inst.inh || []).slice(), day: first ? day : ((o.reg[inst.id] || {}).day ?? day) };
    return first;
  }
  /* A new Echo for Solar. via: shuffle | tartarus | fusion | summon | gift. Returns { inst (null when the stock is full), id,
     isNew (first time registered), full, line (a results line) }. */
  function add(s, id, { via = 'gift', lvl = null, exp = 0, inh = [], day = null } = {}) {
    const x = byId(id); if (!x) return null;
    const o = es(s);
    const full = o.list.length >= STOCK;
    const inst = { u: ++o.uid, id, lvl: Math.max(x.lvl, Math.min(99, lvl || x.lvl)), exp: Math.max(0, exp || 0), inh: (inh || []).filter(k => D.skills[k] && !learnSet(x).includes(k)).slice(0, INHERIT_MAX) };
    const isNew = !o.reg[id];
    if (isNew || via === 'fusion') register(s, inst, day);
    if (!full) o.list.push(inst); else o.uid--;
    if (via !== 'fusion' && via !== 'summon') o.news.push({ t: via, id, isNew, full });
    o.news = o.news.slice(-12);
    const line = `Echo: ${x.name} (${x.arcana}${isNew ? ', new' : ''})${full ? ' · the stock is full: registered in the Compendium' : ''}`;
    return { inst: full ? null : inst, id, isNew, full, line };
  }
  function remove(s, u) { const o = es(s); o.list = o.list.filter(i => i.u !== +u); if (o.on === +u) o.on = null; }

  /* ── In battle: the layer on Solar's unit (engine.js buildUnit asks for it) ── */
  function layerOf(s) {
    if (!s || !obj(s.echo)) return null;
    const inst = equipped(s); if (!inst) return null;
    const x = byId(inst.id);
    return { inst, echo: x, id: x.id, name: x.name, skills: skillsOf(inst), passive: x.passive.fx, aff: x.aff };
  }
  /* Affinities: an Echo's only land where Haenim (persona, gear, sun) has none, and never stronger than a resist. */
  function layerAff(aff, echoAff) {
    const out = [];
    Object.entries(echoAff || {}).forEach(([el, a]) => {
      if (aff[el] && aff[el] !== 'normal') return;
      aff[el] = a === 'weak' ? 'weak' : 'resist'; out.push(el);
    });
    return out;
  }

  /* ── Growth ── */
  function levelUp(inst, exp) {
    const x = byId(inst.id), before = inst.lvl, had = skillsOf(inst);
    inst.exp = (inst.exp || 0) + Math.max(0, Math.round(exp));
    while (inst.lvl < 99 && inst.exp >= need(inst.lvl)) { inst.exp -= need(inst.lvl); inst.lvl++; }
    if (inst.lvl >= 99) inst.exp = 0;
    const learned = skillsOf(inst).filter(k => !had.includes(k));
    return { inst, echo: x, before, after: inst.lvl, ups: inst.lvl - before, learned };
  }
  /* The equipped Echo takes a fight's EXP. Returns null with no Echo, else the level-up and a results note. */
  function gainExp(s, exp) {
    const inst = equipped(s); if (!inst || !(exp > 0)) return null;
    const r = levelUp(inst, exp);
    r.note = `Echo · ${r.echo.name} +${Math.round(exp)} EXP${r.ups ? ` · Lv ${r.after}!` : ''}${r.learned.length ? ` · learned ${r.learned.map(k => D.skills[k].name).join(', ')}` : ''}`;
    return r;
  }

  /* ── Fusion ── */
  /* The arcana-pair chart (simplified P3-style): the same arcana stay themselves; two different arcana give the one their
     numbers point to, never either parent's. Symmetric, so the menu can draw it as a table. */
  function chart(a, b) {
    const A = arc(a), B = arc(b); if (!A || !B || A.i > 20 || B.i > 20) return null;
    if (A.i === B.i) return A.name;
    const n = ARCANA.length, lo = Math.min(A.i, B.i), hi = Math.max(A.i, B.i);
    let r = (lo + hi + 1 + ((hi - lo) % 3)) % n;
    while (r === lo || r === hi) r = (r + 1) % n;
    return ARCANA[r].name;
  }
  /* The Echo two others fuse into (ids; P3's rule on base levels). */
  function fuseResult(aId, bId, s = undefined) {
    const a = byId(aId), b = byId(bId); if (!a || !b || isSecret(a) || isSecret(b)) return null;
    const ra = chart(a.arcana, b.arcana); if (!ra) return null;
    const pool = (s === undefined ? collectable() : openable(s)).filter(x => x.arcana === ra && x.id !== a.id && x.id !== b.id).sort((p, q) => p.lvl - q.lvl);
    if (!pool.length) return null;
    return pool;
  }
  const inheritN = (A, B) => (A.lvl + B.lvl >= 50 ? 2 : 1);
  /* A fusion preview. opts: { solarLvl, ranks: { arcana: link rank }, links: { arcana: link name }, inherit: [skill ids] }.
     Returns { ok, why, a, b, arcana, result: { id, lvl, exp, bonusExp, rank, link, skills, inheritable, inheritN, inh, consumesEquipped } }. */
  function preview(s, uA, uB, { solarLvl = s.lvl, ranks = {}, links = {}, inherit = null } = {}) {
    const A = instOf(s, uA), B = instOf(s, uB);
    if (!A || !B) return { ok: false, why: 'Pick two Echoes.' };
    if (A.u === B.u) return { ok: false, why: 'An Echo can’t fuse with itself.' };
    const pool = fuseResult(A.id, B.id, s), ra = chart(byId(A.id).arcana, byId(B.id).arcana);
    if (!pool) return { ok: false, why: `Nothing answers ${byId(A.id).name} and ${byId(B.id).name} together.`, arcana: ra };
    const target = Math.floor((A.lvl + B.lvl) / 2) + 1;
    const pick = pool.find(x => x.lvl >= target) || pool[pool.length - 1];
    const rank = Math.max(0, Math.min(10, +ranks[ra] || 0));
    const bonusExp = Math.round(need(pick.lvl) * rank * RANK_EXP);
    const own = learnSet(pick);
    const inheritable = [...new Set(skillsOf(A).concat(skillsOf(B)))].filter(k => !own.includes(k) && D.skills[k]);
    const n = Math.min(inheritN(A, B), INHERIT_MAX, inheritable.length);
    const inh = (Array.isArray(inherit) ? inherit.filter(k => inheritable.includes(k)) : inheritable).slice(0, n);
    // The result as it will be: base level, the arcana bonus EXP on top.
    const sim = { u: 0, id: pick.id, lvl: pick.lvl, exp: 0, inh };
    if (bonusExp) levelUp(sim, bonusExp);
    const res = { id: pick.id, lvl: sim.lvl, exp: sim.exp, base: pick.lvl, bonusExp, rank, link: links[ra] || null, skills: skillsOf(sim), inheritable, inheritN: n, inh,
      consumesEquipped: [A.u, B.u].includes(es(s).on), isNew: !isRegistered(s, pick.id) };
    if (pick.lvl > solarLvl) return { ok: false, why: `Solar needs to be level ${pick.lvl} to hold ${pick.name}.`, a: A, b: B, arcana: ra, result: res };
    return { ok: true, a: A, b: B, arcana: ra, result: res };
  }
  /* Fuse for real (the same preview, then the parents go and the result arrives). Returns { ok, inst, isNew, preview }. */
  function fuse(s, uA, uB, opts = {}) {
    const p = preview(s, uA, uB, opts);
    if (!p.ok) return { ok: false, why: p.why, preview: p };
    remove(s, uA); remove(s, uB);
    const r = add(s, p.result.id, { via: 'fusion', lvl: p.result.lvl, exp: p.result.exp, inh: p.result.inh, day: opts.day ?? null });
    es(s).fused++;
    return { ok: true, inst: r.inst, isNew: p.result.isNew, preview: p };
  }

  /* ── The Compendium: summoning a registered Echo again ── */
  const summonCost = L => Math.round((L * L * 4 + L * 60 + 300) / 100) * 100;
  function summonWhy(s, id, solarLvl = s.lvl) {
    const r = es(s).reg[id]; if (!r) return 'Not registered yet.';
    if (r.lvl > solarLvl) return `Solar needs to be level ${r.lvl}.`;
    if (owned(s).length >= STOCK) return `Solar can only hold ${STOCK} Echoes.`;
    return '';
  }
  /* pay(cost) → true when paid (the caller's money). Returns { ok, why, inst, cost }. */
  function summon(s, id, pay, solarLvl = s.lvl) {
    const why = summonWhy(s, id, solarLvl); if (why) return { ok: false, why };
    const r = es(s).reg[id], cost = summonCost(r.lvl);
    if (!pay(cost)) return { ok: false, why: 'Not enough yen.', cost };
    const res = add(s, id, { via: 'summon', lvl: r.lvl, exp: r.exp, inh: r.inh });
    es(s).summons++;
    return { ok: true, inst: res.inst, cost };
  }

  /* ── Milestones (paid by echoes-ui.js on the game page; claimed ids in es.miles) ── */
  const COS = { strangers: 'ec-wp-dancheong', runners: 'ec-tt-laurel', hoax: 'ec-wp-static', p3: 'ec-tt-torii', all: 'ec-tt-samjogo',
    delicate: 'ec-tt-mirror', havenbrook: 'ec-tt-lantern', petal: 'ec-tt-briar', stay: 'ec-tt-hearth', every: 'ec-tt-every' };
  /* An arcana counts the ungated sets only (so the year's milestones never wait on an epilogue); 'all' is the year's four
     sets (Samjogo, as before; id kept so old claims hold); 'every' is every Echo of every set, Stay's included. */
  const MILESTONES = [].concat(
    ARCANA.map(a => { const ids = collectable().filter(x => x.arcana === a.name && !SETS[x.set].gate).map(x => x.id); return { id: `arc:${a.name}`, kind: 'arcana', name: `${a.num} · ${a.name}`, ids, reward: { plumes: ids.length >= 3 ? 3 : 2, card: 4 } }; }),
    SET_ORDER.map(k => ({ id: `set:${k}`, kind: 'set', name: `${SETS[k].name} · ${SETS[k].myth}`, ids: collectable().filter(x => x.set === k).map(x => x.id), reward: { plumes: 5, card: 5, cos: COS[k] } })),
    [{ id: 'all', kind: 'all', name: 'The four worlds', ids: collectable().filter(x => FIRST_FOUR.includes(x.set)).map(x => x.id), reward: { plumes: 10, echo: SECRET, cos: COS.all } },
      { id: 'every', kind: 'every', name: 'Every Echo', ids: collectable().map(x => x.id), reward: { plumes: 15, card: 5, cos: COS.every } }]
  ).filter(m => m.ids.length);
  function milestones(s) {
    const o = es(s);
    return MILESTONES.map(m => { const have = m.ids.filter(id => o.reg[id]).length; return { m, have, total: m.ids.length, done: have >= m.ids.length, claimed: o.miles.includes(m.id) }; });
  }
  const dueMilestones = s => milestones(s).filter(x => x.done && !x.claimed).map(x => x.m);
  const creditIds = s => Object.keys(es(s).reg).map(id => `echo:${id}`);

  /* ── Drops ── */
  /* Shuffle Time (build.js deal): an Echo for a tier (1–7) of the year, weighted toward the top of what the tier allows. */
  function shufflePick(R, tier = 1, s = curSave()) {
    const top = 6 + Math.max(1, Math.min(7, tier)) * 7, pool = openable(s).filter(x => x.lvl <= top);
    if (!pool.length) return null;
    const w = pool.map(x => 1 + x.lvl / top), sum = w.reduce((a, b) => a + b, 0);
    let r = R() * sum;
    for (let i = 0; i < pool.length; i++) { r -= w[i]; if (r <= 0) return pool[i]; }
    return pool[pool.length - 1];
  }
  function shuffleCard(R, tier, s = curSave()) {
    const x = shufflePick(R, tier, s); if (!x) return null;
    const a = arc(x.arcana);
    return { kind: 'major', id: a.file, num: a.num, name: x.name, out: 'echo', echo: x.id, arcana: x.arcana };
  }
  /* Tartarus (tartarus.js loot): something Solar can hold now (base level up to hers + 3), unregistered ones first. */
  function dropPick(R, s) {
    const L = (s && s.lvl) || 5, pool = openable(s).filter(x => x.lvl <= L + 3);
    if (!pool.length) return null;
    const fresh = pool.filter(x => !isRegistered(s, x.id)), from = fresh.length && R() < 0.7 ? fresh : pool;
    return from[Math.floor(R() * from.length)].id;
  }

  /* ── Story gifts (gated light): the first full moon cleared, then three memory fragments of a world. ── */
  const GIFTS = [
    { id: 'starter', echo: 'zashiki', why: 'After the first full moon', ok: s => (((s.ops || {}).cleared) || []).length >= 1 },
    { id: 'runners', echo: 'hebe', why: 'Three Runners memories', ok: s => worldCount(s, 'Runners') >= 3 },
    { id: 'strangers', echo: 'imugi', why: 'Three strangers memories', ok: s => worldCount(s, 'strangers') >= 3 },
    { id: 'hoax', echo: 'bunshinsaba', why: 'Three Hoax memories', ok: s => worldCount(s, 'Hoax') >= 3 },
    { id: 'stay', echo: 'brownie', why: 'After the Stay epilogue', ok: s => setOpen(s, 'stay') }
  ];
  const memWorld = id => { const m = (D.memories || []).find(x => x.id === id); return m ? m.world : null; };
  const worldCount = (s, w) => (s.memories || []).filter(id => memWorld(id) === w).length;
  function gifts(s) {
    const o = es(s), got = [];
    GIFTS.forEach(g => { if (o.gifts.includes(g.id) || !g.ok(s)) return; o.gifts.push(g.id); const r = add(s, g.echo, { via: 'gift' }); if (r) got.push(r); });
    return got;
  }
  const takeNews = s => (obj(s.echo) && Array.isArray(s.echo.news) ? s.echo.news.splice(0) : []);

  /* ── Words ── */
  const AFF_WORD = { resist: 'Resists', weak: 'Weak to' };
  function affLine(x) {
    const by = { resist: [], weak: [] };
    Object.entries(x.aff).forEach(([el, a]) => by[a] && by[a].push(D.elements[el] ? D.elements[el].name : el));
    return ['resist', 'weak'].filter(k => by[k].length).map(k => `${AFF_WORD[k]} ${by[k].join(', ')}`).join(' · ');
  }

  return { ECHOES, SETS, SET_ORDER, FIRST_FOUR, setOpen, isOpen, openable, ARCANA, WORLD, CAP, SIG_CAP, STOCK, RANK_EXP, INHERIT_MAX, MILESTONES, GIFTS, SECRET, COS,
    byId, arc, isSecret, collectable, nativeName, art, artKind, tarotOf, cardHtml, ready, learnedAt, learnSet, skillsOf, reach, audit, need,
    es, normalize, owned, instOf, equipped, equip, unequip, isRegistered, regCount, register, add, remove, layerOf, layerAff, levelUp, gainExp,
    chart, fuseResult, inheritN, preview, fuse, summonCost, summonWhy, summon, milestones, dueMilestones, creditIds, shufflePick, shuffleCard, dropPick,
    gifts, takeNews, affLine, worldCount };
})();
