/* FEMC battle prototype: all content lives here so new Personas, skills, Shadows, floors and tree nodes are data edits.
   Loaded by femc-battle.html before engine.js and battle.js. Nothing here touches the main FEMC game (kg-femc-game). */
window.FEMC_BATTLE_DATA = (() => {
  const P = 'assets/femc/portraits/';

  /* Elements in P3R order. `phys` ones cost HP and can crit. */
  const elements = {
    slash: { name: 'Slash', phys: true, color: '#e8e8f0' },
    strike: { name: 'Strike', phys: true, color: '#ffc979' },
    pierce: { name: 'Pierce', phys: true, color: '#9fd3ff' },
    fire: { name: 'Fire', color: '#ff6b3d' },
    ice: { name: 'Ice', color: '#7fe3ff' },
    elec: { name: 'Elec', color: '#ffe14d' },
    wind: { name: 'Wind', color: '#5dffa0' },
    light: { name: 'Light', color: '#fff2b0' },
    dark: { name: 'Dark', color: '#c07bff' },
    almighty: { name: 'Almighty', color: '#ff8cc0' }
  };
  const affinityOrder = ['slash', 'strike', 'pierce', 'fire', 'ice', 'elec', 'wind', 'light', 'dark'];

  /* Skills. type: dmg | heal | revive | buff | debuff | special. target: one | all | ally | allies | dead | self.
     cost: { sp } or { hp: percent of max HP } (physical). power is the base for the damage/heal formula in engine.js. */
  const skills = {
    // Party
    agi: { name: 'Agi', el: 'fire', type: 'dmg', target: 'one', power: 40, cost: { sp: 4 }, desc: 'Light fire damage to one foe.' },
    bufu: { name: 'Bufu', el: 'ice', type: 'dmg', target: 'one', power: 42, cost: { sp: 5 }, ail: { id: 'freeze', chance: 0.12 }, desc: 'Light ice damage to one foe. Small chance to Freeze.' },
    bufula: { name: 'Bufula', el: 'ice', type: 'dmg', target: 'one', power: 72, cost: { sp: 9 }, desc: 'Medium ice damage to one foe.' },
    zio: { name: 'Zio', el: 'elec', type: 'dmg', target: 'one', power: 40, cost: { sp: 4 }, ail: { id: 'shock', chance: 0.12 }, desc: 'Light electric damage to one foe. Small chance to Shock.' },
    garu: { name: 'Garu', el: 'wind', type: 'dmg', target: 'one', power: 38, cost: { sp: 3 }, desc: 'Light wind damage to one foe.' },
    daybreak: { name: 'Daybreak', el: 'light', type: 'dmg', target: 'one', power: 56, cost: { sp: 8 }, desc: 'A dawn-colored flare. Medium light damage to one foe.' },
    golden_rope: { name: 'Golden Rope', el: 'strike', type: 'dmg', target: 'one', power: 58, cost: { hp: 9 }, crit: 6, ail: { id: 'bind', chance: 0.3, rope: true }, desc: 'The rope from the myth. Medium strike damage; may Bind the foe for a turn.' },
    sonic_punch: { name: 'Sonic Punch', el: 'strike', type: 'dmg', target: 'one', power: 56, cost: { hp: 8 }, crit: 4, desc: 'Medium strike damage to one foe.' },
    cleave: { name: 'Cleave', el: 'slash', type: 'dmg', target: 'one', power: 52, cost: { hp: 6 }, crit: 4, desc: 'Medium slash damage to one foe.' },
    twin_shot: { name: 'Twin Shot', el: 'pierce', type: 'dmg', target: 'one', power: 32, multi: [2, 2], cost: { hp: 7 }, crit: 6, desc: 'Two quick shots. Light pierce damage to one foe, twice.' },
    rampage: { name: 'Rampage', el: 'strike', type: 'dmg', target: 'rand', power: 30, multi: [2, 3], cost: { hp: 9 }, crit: 4, desc: 'Light strike damage to random foes, 2 to 3 times.' },
    assault_dive: { name: 'Assault Dive', el: 'strike', type: 'dmg', target: 'one', power: 76, acc: 84, cost: { hp: 9 }, crit: 8, desc: 'Heavy strike damage to one foe. Not very accurate.' },
    fatal_end: { name: 'Fatal End', el: 'strike', type: 'dmg', target: 'one', power: 98, acc: 72, cost: { hp: 13 }, crit: 14, desc: 'A crushing blow. Severe strike damage to one foe, but it often misses.' },
    hama: { name: 'Hama', el: 'light', type: 'insta', target: 'one', chance: 30, cost: { sp: 8 }, desc: 'Light. A chance to banish one foe instantly. Much better against a Light weakness.' },
    mudo: { name: 'Mudo', el: 'dark', type: 'insta', target: 'one', chance: 30, cost: { sp: 8 }, desc: 'Dark. A chance to kill one foe instantly. Much better against a Dark weakness or a foe in Fear.' },
    marin_karin: { name: 'Marin Karin', el: 'charm', type: 'ailment', target: 'one', ail: { id: 'charm', chance: 0.5 }, cost: { sp: 6 }, desc: 'Inflicts Charm on one foe. Charmed foes may attack their friends or heal yours.' },
    tarukaja: { name: 'Tarukaja', el: 'support', type: 'buff', target: 'ally', stat: 'atk', cost: { sp: 6 }, desc: "Raises one ally's attack for 3 turns." },
    tarunda: { name: 'Tarunda', el: 'support', type: 'debuff', target: 'one', stat: 'atk', cost: { sp: 6 }, desc: "Lowers one foe's attack for 3 turns." },
    dia: { name: 'Dia', el: 'heal', type: 'heal', target: 'ally', power: 45, cost: { sp: 4 }, desc: 'Restores a little HP to one ally.' },
    media: { name: 'Media', el: 'heal', type: 'heal', target: 'allies', power: 34, cost: { sp: 9 }, desc: 'Restores a little HP to the whole party.' },
    mediarama: { name: 'Mediarama', el: 'heal', type: 'heal', target: 'allies', power: 60, cost: { sp: 14 }, desc: 'Restores a lot of HP to the whole party.' },
    recarm: { name: 'Recarm', el: 'heal', type: 'revive', target: 'dead', power: 50, cost: { sp: 12 }, desc: 'Revives a fallen ally with half their HP.' },
    marakukaja: { name: 'Marakukaja', el: 'support', type: 'buff', target: 'allies', stat: 'def', cost: { sp: 10 }, desc: "Kiriko's bell: raises the party's defense for 3 turns." },
    matarukaja: { name: 'Matarukaja', el: 'support', type: 'buff', target: 'allies', stat: 'atk', cost: { sp: 10 }, desc: "Raises the party's attack for 3 turns." },
    rally: { name: 'Rally', el: 'support', type: 'buff', target: 'allies', stat: ['atk', 'def', 'agi'], sp: 6, cost: { sp: 18 }, desc: 'The campaign speech. Raises party attack, defense and agility, and restores 6 SP to everyone.' },

    // Shadows
    bash: { name: 'Bash', el: 'strike', type: 'dmg', target: 'one', power: 30, desc: '' },
    lunge: { name: 'Lunge', el: 'slash', type: 'dmg', target: 'one', power: 34, desc: '' },
    peck: { name: 'Peck', el: 'pierce', type: 'dmg', target: 'one', power: 32, desc: '' },
    horn: { name: 'Grave Horn', el: 'pierce', type: 'dmg', target: 'one', power: 40, desc: '' },
    e_agi: { name: 'Agi', el: 'fire', type: 'dmg', target: 'one', power: 36, desc: '' },
    e_garu: { name: 'Garu', el: 'wind', type: 'dmg', target: 'one', power: 36, desc: '' },
    e_zio: { name: 'Zio', el: 'elec', type: 'dmg', target: 'one', power: 36, ail: { id: 'shock', chance: 0.1 }, desc: '' },
    e_bufu: { name: 'Bufu', el: 'ice', type: 'dmg', target: 'one', power: 38, ail: { id: 'freeze', chance: 0.08 }, desc: '' },
    e_marin_karin: { name: 'Marin Karin', el: 'charm', type: 'ailment', target: 'one', ail: { id: 'charm', chance: 0.4 }, desc: '' },
    e_poisma: { name: 'Poisma', el: 'poison', type: 'ailment', target: 'one', ail: { id: 'poison', chance: 0.55 }, desc: '' },
    e_evil_touch: { name: 'Evil Touch', el: 'fear', type: 'ailment', target: 'one', ail: { id: 'fear', chance: 0.45 }, desc: '' },
    e_ominous: { name: 'Ominous Words', el: 'distress', type: 'ailment', target: 'all', ail: { id: 'distress', chance: 0.3 }, desc: '' },
    e_bufula: { name: 'Bufula', el: 'ice', type: 'dmg', target: 'one', power: 54, desc: '' },
    e_mabufu: { name: 'Mabufu', el: 'ice', type: 'dmg', target: 'all', power: 30, desc: '' },
    e_dia: { name: 'Dia', el: 'heal', type: 'heal', target: 'ally', power: 40, desc: '' },
    e_media: { name: 'Media', el: 'heal', type: 'heal', target: 'allies', power: 28, desc: '' },
    e_tarunda: { name: 'Tarunda', el: 'support', type: 'debuff', target: 'one', stat: 'atk', desc: '' },
    e_rakukaja: { name: 'Rakukaja', el: 'support', type: 'buff', target: 'ally', stat: 'def', desc: '' },
    e_tarukaja: { name: 'Tarukaja', el: 'support', type: 'buff', target: 'ally', stat: 'atk', desc: '' },
    tremble: { name: 'Trembling…', el: 'none', type: 'special', target: 'self', desc: '' },
    gather: { name: 'Gather Moonlight', el: 'none', type: 'special', target: 'self', desc: '' },
    lunar_tide: { name: 'Lunar Tide', el: 'almighty', type: 'dmg', target: 'all', power: 66, sure: true, desc: '' },
    call_mirrors: { name: 'Call of the Mirror', el: 'none', type: 'special', target: 'self', desc: '' }
  };

  /* Status ailments (one at a time per unit, like P3). turns: [min, max] of the afflicted unit's own turns.
     noAct: loses its turns. Golden Rope's Bind lasts one turn. Bosses list what they shrug off in ailImmune. */
  const ailments = {
    charm: { name: 'Charm', color: '#ff7ac8', turns: [2, 3], desc: 'Charmed: may attack its own side or heal the other.' },
    fear: { name: 'Fear', color: '#a98bff', turns: [2, 3], desc: 'Afraid: may cower and lose its turn, or run. Mudo nearly always lands.' },
    freeze: { name: 'Freeze', color: '#9fe8ff', turns: [2, 2], noAct: true, desc: 'Frozen solid: can’t act. The next physical hit is a guaranteed critical and shatters the ice.' },
    shock: { name: 'Shock', color: '#ffe14d', turns: [1, 2], noAct: true, desc: 'Shocked: can’t act. Touching it with a physical attack may shock the attacker.' },
    poison: { name: 'Poison', color: '#b36bff', turns: [3, 3], desc: 'Poisoned: loses HP at the start of each turn.' },
    distress: { name: 'Distress', color: '#ff9a3d', turns: [2, 3], desc: 'Distressed: critical hits land far more often.' },
    bind: { name: 'Bind', color: '#ffd36b', turns: [1, 1], noAct: true, desc: 'Bound by the golden rope: can’t act this turn.' }
  };

  /* Party tactics (P3P). Solar is always Direct. The AI for each lives in engine.js (autoAction). */
  const tactics = {
    direct: { name: 'Direct Command', short: 'Direct', desc: 'You choose every action.' },
    free: { name: 'Act Freely', short: 'Free', desc: 'Exploits known weaknesses, heals when someone is hurt, buffs for bosses.' },
    heal: { name: 'Heal/Support', short: 'Support', desc: 'Keeps everyone healthy, cures and buffs first. Attacks only when there’s nothing to fix.' },
    assault: { name: 'Full Assault', short: 'Assault', desc: 'Hits as hard as possible with the best skill, whatever it costs.' },
    conserve: { name: 'Conserve SP', short: 'Conserve', desc: 'Never spends SP. Uses the weapon and physical skills.' }
  };

  /* Basic attack power per weapon; it's a physical hit that costs nothing. */
  const attack = { name: 'Attack', type: 'dmg', target: 'one', power: 30, crit: 2 };

  /* Personas. art: transparent webp in art/personas/. evolves: the stronger form (not used in battle yet; shown in the Persona view).
     Only the four party Personas fight in this prototype; the rest are here so the roster is ready. */
  const A = 'assets/femc/battle/art/personas/';
  const personas = {
    haenim: { name: 'Haenim', ko: '해님', arcana: 'Fool', art: A + 'haenim.webp', aff: { light: 'resist', dark: 'weak' }, user: 'solar',
      blurb: 'Lady Sun. A girl who hides by shining. She carries a bell, a jade ring and a star pin from three lives Solar can\u2019t remember.' },
    polydeuces: { name: 'Polydeuces', arcana: 'Emperor', art: A + 'polydeuces.webp', aff: { elec: 'resist', ice: 'weak' }, user: 'akihiko', evolves: 'caesar', blurb: 'The boxer twin. All fists and lightning.' },
    caesar: { name: 'Caesar', arcana: 'Emperor', art: A + 'caesar.webp', aff: { elec: 'resist', ice: 'weak' }, user: 'akihiko', blurb: 'Akihiko\u2019s awakened Persona, holding the world in one hand.' },
    io: { name: 'Io', arcana: 'Lovers', art: A + 'io.webp', aff: { wind: 'resist', elec: 'weak' }, user: 'yukari', evolves: 'isis', blurb: 'A maiden on a great bull. Healing and wind.' },
    isis: { name: 'Isis', arcana: 'Lovers', art: A + 'isis.webp', aff: { wind: 'resist', elec: 'weak' }, user: 'yukari', blurb: 'Yukari\u2019s awakened Persona.' },
    hermes: { name: 'Hermes', arcana: 'Magician', art: A + 'hermes.webp', aff: { fire: 'resist', wind: 'weak' }, user: 'junpei', evolves: 'trismegistus', blurb: 'The winged messenger. Fire and blades.' },
    trismegistus: { name: 'Trismegistus', arcana: 'Magician', art: A + 'trismegistus.webp', aff: { fire: 'resist', wind: 'weak' }, user: 'junpei', blurb: 'Junpei\u2019s awakened Persona.' },
    penthesilea: { name: 'Penthesilea', arcana: 'Empress', art: A + 'penthesilea.webp', aff: { ice: 'resist', fire: 'weak' }, user: 'mitsuru', evolves: 'artemisia', blurb: 'The Amazon queen. Ice and grace.' },
    artemisia: { name: 'Artemisia', arcana: 'Empress', art: A + 'artemisia.webp', aff: { ice: 'resist', fire: 'weak' }, user: 'mitsuru', blurb: 'Mitsuru\u2019s awakened Persona.' },
    castor: { name: 'Castor', arcana: 'Hierophant', art: A + 'castor.webp', aff: { strike: 'resist' }, user: 'shinjiro', blurb: 'The rider twin. Shinjiro can barely hold it back.' },
    nemesis: { name: 'Nemesis', arcana: 'Justice', art: A + 'nemesis.webp', aff: { light: 'null', dark: 'weak' }, user: 'ken', evolves: 'kala-nemi', blurb: 'Retribution with a spear.' },
    'kala-nemi': { name: 'Kala-Nemi', arcana: 'Justice', art: A + 'kala-nemi.webp', aff: { light: 'null', dark: 'weak' }, user: 'ken', blurb: 'Ken\u2019s awakened Persona.' },
    cerberus: { name: 'Cerberus', arcana: 'Strength', art: A + 'cerberus.webp', aff: { fire: 'null', ice: 'weak' }, user: 'koromaru', blurb: 'The three-headed guardian, loyal to the end.' },
    palladion: { name: 'Palladion', arcana: 'Chariot', art: A + 'palladion.webp', aff: { pierce: 'resist', elec: 'weak' }, user: 'aigis', evolves: 'athena', blurb: 'A golden shield-goddess with wings like blades.' },
    athena: { name: 'Athena', arcana: 'Chariot', art: A + 'athena.webp', aff: { pierce: 'resist', elec: 'weak' }, user: 'aigis', blurb: 'Aigis\u2019s awakened Persona.' },
    lucia: { name: 'Lucia', arcana: 'Priestess', art: A + 'lucia.webp', aff: {}, user: 'fuuka', evolves: 'juno', blurb: 'Fuuka\u2019s navigator Persona. She sees every Shadow\u2019s heart.' },
    juno: { name: 'Juno', arcana: 'Priestess', art: A + 'juno.webp', aff: {}, user: 'fuuka', blurb: 'Fuuka\u2019s awakened Persona.' }
  };

  /* Party at level 5. Growth is added per level above 5 (everyone levels with Solar).
     face: [x%, y%] focus point for the HUD crop of the portrait. */
  const party = [
    { id: 'solar', name: 'Solar', persona: 'haenim', weapon: 'pierce', color: '#ff4f9e',
      base: { hp: 92, sp: 62, st: 8, ma: 10, en: 7, ag: 9, lu: 9 }, growth: { hp: 7, sp: 5, st: 0.8, ma: 1, en: 0.7, ag: 0.8, lu: 0.8 },
      skills: ['agi', 'daybreak', 'golden_rope', 'dia'], face: [52, 26], role: 'Leader · Light · Golden Rope', faces: { idle: 'serious', win: 'happy', hurt: 'surprised', ko: 'sad' },
      lines: { turn: 'Let’s go, Haenim.', onemore: 'Again.', shift: 'Your turn!', allout: 'Now. Everyone!', finish: 'Rise and shine.' } },
    { id: 'akihiko', name: 'Akihiko', persona: 'polydeuces', weapon: 'strike', color: '#ff9a3d',
      base: { hp: 100, sp: 44, st: 11, ma: 7, en: 8, ag: 12, lu: 6 }, growth: { hp: 8, sp: 3, st: 1, ma: 0.6, en: 0.8, ag: 1, lu: 0.5 },
      skills: ['zio', 'sonic_punch'], face: [42, 26], role: 'Elec · Strike · Fast', faces: { idle: 'serious', win: 'happy', hurt: 'surprised', ko: 'sad' },
      lines: { turn: 'Let’s see what you’ve got.', onemore: 'Not done yet!', shift: 'Over to you!', finish: 'That\u2019s how it\u2019s done!' } },
    { id: 'yukari', name: 'Yukari', persona: 'io', weapon: 'pierce', color: '#ff8cc0',
      base: { hp: 84, sp: 70, st: 6, ma: 11, en: 6, ag: 10, lu: 9 }, growth: { hp: 6, sp: 6, st: 0.5, ma: 1, en: 0.6, ag: 0.9, lu: 0.8 },
      skills: ['garu', 'dia', 'media'], face: [48, 34], role: 'Wind · Healer', faces: { idle: 'serious', win: 'neutral', hurt: 'surprised', ko: 'sad' },
      lines: { turn: 'I’ve got your back.', onemore: 'One more!', shift: 'Take it!', finish: 'Hmph. Serves you right!' } },
    { id: 'junpei', name: 'Junpei', persona: 'hermes', weapon: 'slash', color: '#7fb6ff',
      base: { hp: 110, sp: 40, st: 12, ma: 7, en: 9, ag: 7, lu: 7 }, growth: { hp: 9, sp: 3, st: 1, ma: 0.5, en: 0.9, ag: 0.6, lu: 0.6 },
      skills: ['agi', 'cleave'], face: [52, 36], role: 'Fire · Slash · Tank', faces: { idle: 'serious', win: 'happy', hurt: 'surprised', ko: 'sad' },
      lines: { turn: 'Watch this!', onemore: 'Heh, too easy!', shift: 'Go for it!', finish: 'Clutch hitter, baby!' } },
    { id: 'mitsuru', name: 'Mitsuru', persona: 'penthesilea', weapon: 'pierce', color: '#ff5b5b',
      base: { hp: 90, sp: 68, st: 8, ma: 12, en: 7, ag: 10, lu: 7 }, growth: { hp: 7, sp: 5, st: 0.7, ma: 1.1, en: 0.7, ag: 0.9, lu: 0.6 },
      skills: ['bufu', 'marin_karin', 'tarukaja'], face: [50, 28], role: 'Ice · Charm · Support', faces: { idle: 'neutral', win: 'neutral', hurt: 'surprised', ko: 'sad' },
      lines: { turn: 'Leave it to me.', onemore: 'Excellent.', shift: 'Your opening.', finish: 'Execution!' } },
    { id: 'aigis', name: 'Aigis', persona: 'palladion', weapon: 'pierce', color: '#ffd36b',
      base: { hp: 112, sp: 40, st: 12, ma: 6, en: 11, ag: 8, lu: 6 }, growth: { hp: 9, sp: 3, st: 1, ma: 0.5, en: 1, ag: 0.7, lu: 0.5 },
      skills: ['twin_shot', 'cleave', 'tarunda'], face: [40, 29], role: 'Gunfire · Pierce · Debuff', faces: { idle: 'serious', win: 'happy', hurt: 'surprised', ko: 'sad' },
      lines: { turn: 'Engaging the enemy.', onemore: 'Target is down.', shift: 'Handing over.', finish: 'Hostiles eliminated.' } },
    { id: 'ken', name: 'Ken', persona: 'nemesis', weapon: 'pierce', color: '#ffb36b',
      base: { hp: 80, sp: 64, st: 7, ma: 11, en: 6, ag: 9, lu: 10 }, growth: { hp: 6, sp: 5, st: 0.6, ma: 1, en: 0.6, ag: 0.8, lu: 0.9 },
      skills: ['zio', 'hama', 'dia'], face: [50, 32], role: 'Elec · Light · Healer', faces: { idle: 'serious', win: 'happy', hurt: 'sad', ko: 'sad' },
      lines: { turn: 'I can do this!', onemore: 'Got it!', shift: 'Go ahead!', finish: 'Did you see that?!' } },
    { id: 'koromaru', name: 'Koromaru', persona: 'cerberus', weapon: 'slash', color: '#e8e8f0',
      base: { hp: 88, sp: 52, st: 10, ma: 9, en: 7, ag: 13, lu: 9 }, growth: { hp: 7, sp: 4, st: 0.9, ma: 0.8, en: 0.7, ag: 1.1, lu: 0.8 },
      skills: ['agi', 'mudo', 'rampage'], face: [40, 25], role: 'Fire · Dark · Speed', faces: { idle: 'serious', win: 'happy', hurt: 'sad', ko: 'sad' },
      lines: { turn: 'Woof!', onemore: 'Arf arf!', shift: '*nudges you*', finish: 'Awoooo!' } },
    { id: 'shinjiro', name: 'Shinjiro', persona: 'castor', weapon: 'strike', color: '#c43b3b', acc: -6,
      base: { hp: 124, sp: 34, st: 15, ma: 5, en: 10, ag: 5, lu: 5 }, growth: { hp: 10, sp: 2, st: 1.3, ma: 0.4, en: 0.9, ag: 0.4, lu: 0.4 },
      skills: ['assault_dive', 'fatal_end'], face: [52, 42], role: 'Heavy strike · Low accuracy', faces: { idle: 'neutral', win: 'happy', hurt: 'surprised', ko: 'sad' },
      lines: { turn: 'Tch. Fine.', onemore: 'Stay down.', shift: 'Your turn.', finish: 'Heh. Not bad.' } }
  ];
  /* The party before anyone picks one (and for old saves): Solar plus these three. */
  const defaultParty = ['akihiko', 'yukari', 'junpei'];

  const items = {
    medicine: { name: 'Medicine', type: 'heal', target: 'ally', hp: 50, desc: 'Restores 50 HP to one ally.' },
    snuff_soul: { name: 'Snuff Soul', type: 'sp', target: 'ally', sp: 20, desc: 'Restores 20 SP to one ally.' },
    revival_bead: { name: 'Revival Bead', type: 'revive', target: 'dead', hp: 0.5, desc: 'Revives a fallen ally with half their HP.' },
    patra_gem: { name: 'Patra Gem', type: 'cure', target: 'ally', cures: ['charm', 'fear', 'distress', 'freeze', 'shock', 'bind'], desc: 'Cures Charm, Fear, Distress, Freeze and Shock on one ally.' },
    dis_poison: { name: 'Dis-Poison', type: 'cure', target: 'ally', cures: ['poison'], desc: 'Cures Poison on one ally.' }
  };
  const startItems = { medicine: 4, snuff_soul: 2, revival_bead: 2, patra_gem: 2, dis_poison: 2 };

  /* Shadows.
     img: a slug in art/shadows/ (sizes come from art/shadows/index.js, made by tools/femc-shadows.py). Swapping in a bigger
          render is just replacing the file and re-running the tool. h: display height in px on desktop.
     svg: fallback drawing from shadows.js, used when there's no img (or the file is missing from the index).
     idle: CSS idle loop for img art: breathe | sway | crawl | float.
     ai: coward | weakest | buffer | exploit | healer | priestess (engine.js). */
  const enemies = {
    maya: { name: 'Cowardly Maya', arcana: 'Magician', lvl: 3, hp: 54, st: 7, ma: 5, en: 4, ag: 6, lu: 4,
      aff: { fire: 'weak', dark: 'resist' }, skills: ['bash', 'tremble'], ai: 'coward', exp: 55, img: 'maya', h: 150, idle: 'breathe', svg: 'maya',
      note: 'A timid Shadow that drifts near the entrance. It trembles more than it fights.' },
    slime: { name: 'Grudge Slime', arcana: 'Moon', lvl: 4, hp: 78, st: 8, ma: 5, en: 6, ag: 4, lu: 3,
      aff: { fire: 'weak', slash: 'resist', pierce: 'resist' }, skills: ['bash', 'e_tarunda', 'e_poisma'], ai: 'weakest', exp: 60, img: 'slime', h: 190, idle: 'breathe', svg: 'maya',
      note: 'It oozes toward whoever looks weakest. Blades sink right in and do nothing.' },
    hand: { name: 'Dancing Hand', arcana: 'Magician', lvl: 4, hp: 70, st: 9, ma: 6, en: 5, ag: 9, lu: 5,
      aff: { elec: 'weak', slash: 'resist', dark: 'null' }, skills: ['lunge', 'e_tarunda', 'e_ominous'], ai: 'weakest', exp: 62, img: 'dancinghand', h: 270, idle: 'sway', svg: 'hand',
      note: 'Sways like it hears music no one else does. Goes for whoever looks hurt.' },
    beetle: { name: 'Grave Beetle', arcana: 'Chariot', lvl: 5, hp: 105, st: 10, ma: 5, en: 9, ag: 4, lu: 4,
      aff: { wind: 'weak', strike: 'resist', pierce: 'resist', fire: 'null' }, skills: ['horn', 'e_rakukaja'], ai: 'buffer', exp: 80, img: 'gravebeetle', h: 165, idle: 'crawl', svg: 'beetle',
      note: 'Its shell is carved like a headstone. Hardens its friends before it charges.' },
    snake: { name: 'Lustful Snake', arcana: 'Lovers', lvl: 5, hp: 76, st: 9, ma: 8, en: 5, ag: 10, lu: 6,
      aff: { strike: 'weak', pierce: 'null', fire: 'resist' }, skills: ['lunge', 'e_agi', 'e_poisma', 'e_marin_karin'], ai: 'weakest', exp: 74, img: 'lustful-snake', h: 240, idle: 'sway', svg: 'hand',
      note: 'A coil around an ankh. It strikes at whoever is bleeding, and its venom poisons or charms.' },
    venus: { name: 'Venus Eagle', arcana: 'Lovers', lvl: 6, hp: 82, st: 8, ma: 10, en: 5, ag: 12, lu: 6,
      aff: { elec: 'weak', wind: 'repel', pierce: 'resist' }, skills: ['peck', 'e_garu', 'e_zio'], ai: 'exploit', exp: 88, img: 'venuseagle', h: 200, idle: 'float', svg: 'venus',
      note: 'A preening raptor. It studies the party and aims for their weaknesses.' },
    table: { name: 'Laughing Table', arcana: 'Hermit', lvl: 6, hp: 112, st: 7, ma: 10, en: 7, ag: 5, lu: 5,
      aff: { pierce: 'weak', ice: 'drain', fire: 'resist' }, skills: ['e_bufu', 'e_dia', 'e_media'], ai: 'healer', exp: 92, img: 'laughing-table', h: 230, idle: 'breathe', svg: 'table',
      note: 'Set for a dinner no one came to. It giggles while it mends the other Shadows.' },
    cupid: { name: 'Devoted Cupid', arcana: 'Lovers', lvl: 6, hp: 80, st: 8, ma: 9, en: 5, ag: 11, lu: 7,
      aff: { wind: 'weak', fire: 'resist', light: 'null' }, skills: ['peck', 'e_tarukaja', 'e_marin_karin'], ai: 'buffer', exp: 84, img: 'devoted-cupid', h: 210, idle: 'float', svg: 'maiden',
      note: 'Shoots arrows and cheers on its friends. Knock it out of the air first.' },
    magus: { name: 'Magical Magus', arcana: 'Magician', lvl: 7, hp: 92, st: 6, ma: 12, en: 6, ag: 9, lu: 6,
      aff: { strike: 'weak', fire: 'resist', dark: 'null' }, skills: ['e_agi', 'e_zio', 'e_bufu', 'e_marin_karin'], ai: 'exploit', exp: 96, img: 'magical-magus', h: 250, idle: 'float', svg: 'maiden',
      note: 'A robed caster that knows every element. It hunts for weak points and charms the careless.' },
    twins: { name: 'Trance Twins', arcana: 'Hermit', lvl: 7, hp: 116, st: 11, ma: 6, en: 8, ag: 6, lu: 5,
      aff: { fire: 'weak', strike: 'resist', dark: 'resist' }, skills: ['lunge', 'e_tarunda', 'e_evil_touch'], ai: 'weakest', exp: 98, img: 'trance-twins', h: 220, idle: 'sway', svg: 'hand',
      note: 'Two robed Shadows moving as one. They gang up on the weakest and whisper terrors.' },
    maiden: { name: 'Mirror Maiden', arcana: 'Priestess', lvl: 8, hp: 150, st: 8, ma: 11, en: 7, ag: 10, lu: 6,
      aff: { fire: 'weak', ice: 'null', light: 'resist' }, skills: ['e_bufu', 'e_tarukaja'], ai: 'buffer', exp: 120, svg: 'maiden', size: 0.85,
      note: 'An SVG-only Shadow (no art yet): the fallback path.' },
    priestess_add: { name: 'Devoted Cupid', arcana: 'Priestess', lvl: 8, hp: 140, st: 8, ma: 11, en: 7, ag: 10, lu: 6,
      aff: { wind: 'weak', ice: 'null', light: 'resist' }, skills: ['e_bufu', 'e_tarukaja'], ai: 'buffer', exp: 120, img: 'devoted-cupid', h: 190, idle: 'float', svg: 'maiden',
      note: "The Priestess's attendants. They pour their strength into her." },
    priestess: { name: 'Arcana Priestess', arcana: 'Priestess', lvl: 10, hp: 980, st: 10, ma: 13, en: 10, ag: 8, lu: 8, boss: true,
      aff: { fire: 'resist', elec: 'resist', wind: 'resist', ice: 'null', light: 'resist', dark: 'null' },
      veil: ['fire', 'elec', 'wind'], skills: ['e_bufula', 'e_mabufu', 'e_tarunda', 'gather', 'lunar_tide', 'call_mirrors'],
      ai: 'priestess', exp: 700, img: 'priestess-shadow', h: 300, idle: 'float', svg: 'priestess', size: 1.5, alloutResist: 0.55, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock'], summon: ['priestess_add', 'priestess_add'],
      note: "A full-moon Shadow. Her veil changes color every turn, and only that element gets through. She gathers moonlight before her strongest attack: Guard!" }
  };

  /* One run = these floors in order. pool: possible enemy groups (one is picked per run). clock: a full heal before that floor.
     music: a key in `music` for this floor's battle (default 'battle'). */
  const floors = [
    { id: 'f1', label: '2F', block: 'Thebel', bg: 'assets/femc/bg/tartarus-scene.webp', pool: [['maya', 'maya', 'maya'], ['maya', 'slime', 'maya']], nav: 'f1', loot: { medicine: 1 } },
    { id: 'f2', label: '5F', block: 'Arqa', bg: 'assets/femc/bg/arya.webp', pool: [['hand', 'beetle', 'hand'], ['snake', 'beetle', 'slime']], nav: 'f2', loot: { snuff_soul: 1, dis_poison: 1 } },
    { id: 'f3', label: '9F', block: 'Harabah', bg: 'assets/femc/bg/harabah.webp', pool: [['venus', 'table', 'hand'], ['cupid', 'magus', 'twins']], nav: 'f3', loot: { medicine: 1, revival_bead: 1, patra_gem: 1 } },
    { id: 'boss', label: 'Full Moon', block: 'The Monorail', bg: 'assets/femc/bg/darkhour-monorail.webp', pool: [['priestess']], nav: 'boss', boss: true, clock: true, music: 'boss' }
  ];
  /* Music per screen. A floor can override `battle` with its own `music` key. Swap files here. */
  const M = 'assets/femc/music/';
  const music = {
    title: M + 'color-your-night.mp3',       // the entrance / hub
    battle: M + 'its-going-down-now.mp3',     // regular fights
    boss: M + 'master-of-shadow.mp3',         // full-moon boss
    floor: M + 'tartarus-thebel.mp3',         // results, skill tree and the clock between floors
    victory: M + 'full-moon-full-life.mp3',   // operation complete
    gameover: null,
    alt: { tartarus: M + 'master-of-tartarus.mp3', classic: M + 'mass-destruction.mp3' }
  };

  /* Fuuka. Strings can be arrays (one is picked); {name} and {el} are filled in. face is her portrait. */
  const navigator = { id: 'fuuka', name: 'Fuuka', faces: ['neutral', 'happy', 'surprised', 'sad'] };
  const nav = {
    f1: ['Three Cowardly Maya! If you’re not sure what they’re weak to, try Analyze.', 'neutral'],
    f2: ['The big one looks tough. I’ll scan them as you go.', 'neutral'],
    f3: ['Careful, these ones aim for your weak points!', 'surprised'],
    boss: ['That’s a full-moon Shadow! Its veil keeps changing color. Hit it with the matching element!', 'surprised'],
    weak: [['That’s its weakness!', 'Bullseye! It’s down!', 'That’s its weak point!'], 'happy'],
    crit: [['Critical hit! It’s down!', 'What a hit!'], 'happy'],
    allDown: ['They’re all down! Now’s our chance!', 'surprised'],
    null: [['That won’t work on it!', 'No effect! Try something else.'], 'sad'],
    repel: ['It reflected that! Careful!', 'surprised'],
    drain: ['It absorbed that! Don’t use that element!', 'surprised'],
    resist: [['It resists that. Try another element.', 'Not very effective...'], 'neutral'],
    shift: [['Nice hand-off!', 'Great teamwork!'], 'happy'],
    hurt: ['{name}, that’s your weakness! Be careful!', 'surprised'],
    danger: ['{name}, your HP is low! Heal up!', 'surprised'],
    ko: ['{name}’s down! Use a Revival Bead!', 'sad'],
    solarDown: ['Solar...!', 'sad'],
    telegraph: ['It’s gathering power! Guard, everyone!', 'surprised'],
    veil: ['Its veil turned {el}! It’s weak to {el} now!', 'neutral'],
    summon: ['More Shadows! It called for help!', 'surprised'],
    bind: ['It’s bound! It can’t move!', 'happy'],
    last: ['Just one left!', 'neutral'],
    win: [['We did it! Great job, everyone!', 'All clear! Nice work!'], 'happy'],
    bossWin: ['The full-moon Shadow is gone... You did it, Solar!', 'happy'],
    escape: ['We got away!', 'neutral'],
    escapeFail: ['Couldn’t get away!', 'sad'],
    analyze: ['Scan complete! Here’s what I found.', 'neutral'],
    clock: ['The clock’s chime... everyone’s fully healed.', 'happy'],
    // Status ailments. foe_* when a Shadow is afflicted, ally_* when one of us is.
    foe_charm: ['It’s charmed! It might turn on its friends!', 'happy'],
    foe_fear: ['It’s terrified! Mudo should finish it!', 'happy'],
    foe_freeze: [['It’s frozen solid! Hit it with something physical!', 'Frozen! One good hit will shatter it!'], 'happy'],
    foe_shock: ['It’s shocked! Careful, touching it might shock you too!', 'neutral'],
    foe_poison: ['It’s poisoned. It’ll wear down on its own.', 'neutral'],
    foe_distress: ['It’s in distress! Go for critical hits!', 'happy'],
    ally_charm: ['{name}, snap out of it! A Patra Gem will help!', 'surprised'],
    ally_fear: ['{name} is terrified... A Patra Gem can calm them down.', 'sad'],
    ally_freeze: ['{name} is frozen! Watch out for physical attacks!', 'surprised'],
    ally_shock: ['{name} is shocked and can’t move!', 'surprised'],
    ally_poison: ['{name}’s been poisoned! Use a Dis-Poison!', 'surprised'],
    ally_distress: ['{name} is in distress! They’re open to critical hits!', 'surprised'],
    shatter: ['The ice shattered! Critical hit!', 'happy'],
    shockBack: ['{name} got shocked touching it!', 'surprised'],
    cured: [['All better!', 'That’s better. Back in the fight!'], 'happy'],
    insta: ['It vanished in one hit!', 'happy'],
    fled: ['It ran away!', 'neutral'],
    tactics: ['Got it. I’ll pass the orders along.', 'neutral']
  };

  /* Haenim's tree: three charms, three worlds. Each node needs the one above it. effect keys are read by battle.js (applyTree). */
  const tree = [
    { id: 'bell', name: 'Bell', world: 'Runners', who: 'Kiriko', color: '#ffd36b', theme: 'Support · Healing · Buffs',
      blurb: 'A gold bell from Kiriko. It rings like the end of a race.',
      nodes: [
        { id: 'bell1', name: 'Gold Bell', cost: 1, desc: '+15 max SP. Dia heals 40% more.', effect: { sp: 15, healMult: 1.4 } },
        { id: 'bell2', name: 'Media', cost: 1, desc: 'Learn Media: heal the whole party.', effect: { learn: 'media' } },
        { id: 'bell3', name: 'Marakukaja', cost: 2, desc: 'Learn Marakukaja: party defense up.', effect: { learn: 'marakukaja' } },
        { id: 'bell4', name: 'Recarm', cost: 2, desc: 'Learn Recarm: revive a fallen ally.', effect: { learn: 'recarm' } },
        { id: 'bell5', name: 'Runner’s High', cost: 3, desc: 'After each of Solar’s turns the party heals 6% HP. Media becomes Mediarama.', effect: { regen: 0.06, upgrade: ['media', 'mediarama'] } }
      ] },
    { id: 'jade', name: 'Jade', world: 'strangers', who: 'Incheon', color: '#5fe0b0', theme: 'Precision · Crits · Ice',
      blurb: 'A jade ring on a red cord. Cold, exact, and never let go.',
      nodes: [
        { id: 'jade1', name: 'Jade Ring', cost: 1, desc: '+2 St. Critical rate +8%.', effect: { st: 2, crit: 8 } },
        { id: 'jade2', name: 'Bufu', cost: 1, desc: 'Learn Bufu: ice damage to one foe.', effect: { learn: 'bufu' } },
        { id: 'jade3', name: 'Red Cord', cost: 2, desc: 'Golden Rope binds 25% more often and crits more.', effect: { bind: 0.25, ropeCrit: 12 } },
        { id: 'jade4', name: 'Bufula', cost: 2, desc: 'Learn Bufula: heavier ice damage.', effect: { learn: 'bufula' } },
        { id: 'jade5', name: 'Cold Read', cost: 3, desc: 'Every foe’s affinities are known at the start of battle. Weakness damage +25% for the party.', effect: { autoAnalyze: true, weakMult: 1.25 } }
      ] },
    { id: 'star', name: 'Star', world: 'Hoax', who: 'Hamlim', color: '#ff8cc0', theme: 'Leadership · Party buffs · Rally',
      blurb: 'A star pin from the campaign. Everyone looks to her when she wears it.',
      nodes: [
        { id: 'star1', name: 'Star Pin', cost: 1, desc: '+2 Ag and +10 max HP.', effect: { ag: 2, hp: 10 } },
        { id: 'star2', name: 'Matarukaja', cost: 1, desc: 'Learn Matarukaja: party attack up.', effect: { learn: 'matarukaja' } },
        { id: 'star3', name: 'Rally', cost: 2, desc: 'Learn Rally: party attack, defense and agility up, and +6 SP each.', effect: { learn: 'rally' } },
        { id: 'star4', name: 'Campaign Trail', cost: 2, desc: 'Shift boost rises from +25% to +50%, and the receiver regains 5 SP.', effect: { shiftMult: 1.5, shiftSp: 5 } },
        { id: 'star5', name: 'Victory Speech', cost: 3, desc: 'All-Out Attacks hit 50% harder. The party starts each battle with attack up.', effect: { alloutMult: 1.5, openBuff: 'atk' } }
      ] }
  ];

  const progression = {
    startLevel: 5,
    expToNext: lvl => 20 + 5 * lvl * lvl,
    pointsPerLevel: 2,
    bossBonusPoints: 2,
    heat: 0.3, // each boss clear makes Shadows this much stronger (and worth more EXP)
    benchShare: 0.6 // members sitting out still get this share of the EXP
  };

  return { portraits: P, elements, affinityOrder, skills, ailments, tactics, attack, personas, party, defaultParty, items, startItems, enemies, floors, music, navigator, nav, tree, progression };
})();
