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
     Dokkaebi, Theia), S.E.E.S.'s and Haenim's forms are never Echoes. Samjogo (World) is the secret reward for all 48.
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
     and MILESTONES (each arcana, each myth set, everything) paid once by echoes-ui.js on the game page (plumes, Revelation cards,
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
    p3: { name: 'Persona 3', myth: 'Japanese myth', color: '#6ab0ff', blurb: 'Gods and yokai of the Japan Solar wakes up in.' }
  };
  const SET_ORDER = ['strangers', 'runners', 'hoax', 'p3'];

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
  function fuseResult(aId, bId) {
    const a = byId(aId), b = byId(bId); if (!a || !b || isSecret(a) || isSecret(b)) return null;
    const ra = chart(a.arcana, b.arcana); if (!ra) return null;
    const pool = collectable().filter(x => x.arcana === ra && x.id !== a.id && x.id !== b.id).sort((p, q) => p.lvl - q.lvl);
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
    const pool = fuseResult(A.id, B.id), ra = chart(byId(A.id).arcana, byId(B.id).arcana);
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
  const COS = { strangers: 'ec-wp-dancheong', runners: 'ec-tt-laurel', hoax: 'ec-wp-static', p3: 'ec-tt-torii', all: 'ec-tt-samjogo' };
  const MILESTONES = [].concat(
    ARCANA.map(a => { const ids = collectable().filter(x => x.arcana === a.name).map(x => x.id); return { id: `arc:${a.name}`, kind: 'arcana', name: `${a.num} · ${a.name}`, ids, reward: { plumes: ids.length >= 3 ? 3 : 2, card: 4 } }; }),
    SET_ORDER.map(k => ({ id: `set:${k}`, kind: 'set', name: `${SETS[k].name} · ${SETS[k].myth}`, ids: collectable().filter(x => x.set === k).map(x => x.id), reward: { plumes: 5, card: 5, cos: COS[k] } })),
    [{ id: 'all', kind: 'all', name: 'Every Echo', ids: collectable().map(x => x.id), reward: { plumes: 10, echo: SECRET, cos: COS.all } }]
  ).filter(m => m.ids.length);
  function milestones(s) {
    const o = es(s);
    return MILESTONES.map(m => { const have = m.ids.filter(id => o.reg[id]).length; return { m, have, total: m.ids.length, done: have >= m.ids.length, claimed: o.miles.includes(m.id) }; });
  }
  const dueMilestones = s => milestones(s).filter(x => x.done && !x.claimed).map(x => x.m);
  const creditIds = s => Object.keys(es(s).reg).map(id => `echo:${id}`);

  /* ── Drops ── */
  /* Shuffle Time (build.js deal): an Echo for a tier (1–7) of the year, weighted toward the top of what the tier allows. */
  function shufflePick(R, tier = 1) {
    const top = 6 + Math.max(1, Math.min(7, tier)) * 7, pool = collectable().filter(x => x.lvl <= top);
    if (!pool.length) return null;
    const w = pool.map(x => 1 + x.lvl / top), sum = w.reduce((a, b) => a + b, 0);
    let r = R() * sum;
    for (let i = 0; i < pool.length; i++) { r -= w[i]; if (r <= 0) return pool[i]; }
    return pool[pool.length - 1];
  }
  function shuffleCard(R, tier) {
    const x = shufflePick(R, tier); if (!x) return null;
    const a = arc(x.arcana);
    return { kind: 'major', id: a.file, num: a.num, name: x.name, out: 'echo', echo: x.id, arcana: x.arcana };
  }
  /* Tartarus (tartarus.js loot): something Solar can hold now (base level up to hers + 3), unregistered ones first. */
  function dropPick(R, s) {
    const L = (s && s.lvl) || 5, pool = collectable().filter(x => x.lvl <= L + 3);
    if (!pool.length) return null;
    const fresh = pool.filter(x => !isRegistered(s, x.id)), from = fresh.length && R() < 0.7 ? fresh : pool;
    return from[Math.floor(R() * from.length)].id;
  }

  /* ── Story gifts (gated light): the first full moon cleared, then three memory fragments of a world. ── */
  const GIFTS = [
    { id: 'starter', echo: 'zashiki', why: 'After the first full moon', ok: s => (((s.ops || {}).cleared) || []).length >= 1 },
    { id: 'runners', echo: 'hebe', why: 'Three Runners memories', ok: s => worldCount(s, 'Runners') >= 3 },
    { id: 'strangers', echo: 'imugi', why: 'Three strangers memories', ok: s => worldCount(s, 'strangers') >= 3 },
    { id: 'hoax', echo: 'bunshinsaba', why: 'Three Hoax memories', ok: s => worldCount(s, 'Hoax') >= 3 }
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

  return { ECHOES, SETS, SET_ORDER, ARCANA, WORLD, CAP, SIG_CAP, STOCK, RANK_EXP, INHERIT_MAX, MILESTONES, GIFTS, SECRET, COS,
    byId, arc, isSecret, collectable, nativeName, art, artKind, tarotOf, cardHtml, ready, learnedAt, learnSet, skillsOf, reach, audit, need,
    es, normalize, owned, instOf, equipped, equip, unequip, isRegistered, regCount, register, add, remove, layerOf, layerAff, levelUp, gainExp,
    chart, fuseResult, inheritN, preview, fuse, summonCost, summonWhy, summon, milestones, dueMilestones, creditIds, shufflePick, shuffleCard, dropPick,
    gifts, takeNews, affLine, worldCount };
})();
