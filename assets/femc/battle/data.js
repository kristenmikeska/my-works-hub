/* FEMC battle prototype: all content lives here so new Personas, skills, Shadows, floors, gear, shops and tree nodes are data edits.
   Loaded by femc-battle.html before engine.js and battle.js. Nothing here touches the main FEMC game (kg-femc-game).

   P3R accuracy notes (what I was unsure of, so Kat can correct it):
   - Shadow affinities follow P3/P3R as best I remember. Confident: Polydeuces/Caesar weak Ice, resist Elec; Io/Isis weak Elec,
     resist Wind; Penthesilea/Artemisia weak Fire, resist Ice; Palladion/Athena weak Elec. Less sure: Hermes/Trismegistus
     (weak Wind?), Nemesis/Kala-Nemi (null Light, weak Dark?), Cerberus (null Fire and Dark, weak Light?), Castor (no weakness?).
   - Tartarus Shadows: names come from Kat's art (all real P3 Shadows), but their exact arcana, floors and affinities are my best
     guess, especially Calm Pesce, Change Relic, Slipping Hablerie, Secret Bambino, Cloudgirl Pot, Nice Guy and Autonomic Basalt.
   - Full-moon bosses: the gimmicks are the prototype's own (as asked); affinities are approximate. I left off the full-moon
     dates because I wasn't sure which night each one fell on.
   - Learnsets: early skills match what I remember of P3R (Zio/Sonic Punch, Garu/Dia, Agi/Cleave, Bufu/Marin Karin, Zio/Hama/Dia,
     Agi/Mudo); the exact levels are approximations tuned for this prototype's pace.
   - Weapon names are inspired by P3 gear but are not a copy of the real shop lists. */
window.FEMC_BATTLE_DATA = (() => {
  const P = 'assets/femc/portraits/';
  const BG = 'assets/femc/bg/';

  /* Face focus for every portrait the battle UI crops (measured on the art, all moods share one framing unless noted).
     x: centre of the face, % of the image width. y: the eye line, % of the image height. s: eyes-to-chin, % of the image width
     (the zoom: a crop scales the art so this distance fills a set share of the frame). ar: image height / width.
     alt: a mood drawn with a different framing. battle.js turns these into CSS vars (--fx --fy --fs --ar) for .fc images. */
  const faceFocus = {
    solar: { x: 45.8, y: 41.4, s: 22.3, ar: 0.946 },
    akihiko: { x: 29, y: 44.6, s: 25.4, ar: 1.018 },
    yukari: { x: 39, y: 42.9, s: 25, ar: 1.132 },
    junpei: { x: 62, y: 44, s: 24, ar: 1.094 },
    mitsuru: { x: 49, y: 37.6, s: 24.5, ar: 1.007 },
    aigis: { x: 39.7, y: 39.9, s: 23.5, ar: 1.023 },
    ken: { x: 47, y: 42.1, s: 24.8, ar: 1.096 },
    koromaru: { x: 34, y: 36, s: 27, ar: 1.064 },
    shinjiro: { x: 65.6, y: 48.4, s: 26, ar: 1.047, alt: { sad: { x: 64, y: 33, s: 27 } } },
    fuuka: { x: 35, y: 38, s: 33, ar: 1.593 },
    kurosawa: { x: 34.5, y: 38.7, s: 27.7, ar: 1.007 },
    elizabeth: { x: 72, y: 47.8, s: 25, ar: 1.218 }
  };

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

  /* Skills. type: dmg | insta | ailment | heal | revive | buff | debuff | cure | dispel | special.
     target: one | all | rand | ally | allies | dead | self. cost: { sp } or { hp: percent of max HP } (physical).
     power is the base for the damage/heal formula in engine.js. Optional: multi [min,max] hits, crit bonus, acc, ail {id,chance},
     partyBuff [stats] (applied to the user's side first), partyHeal (fraction of max HP after the hit), lasting (buffs never wear off). */
  const skills = {
    // ── Party: magic
    agi: { name: 'Agi', el: 'fire', type: 'dmg', target: 'one', power: 40, cost: { sp: 4 }, desc: 'Light fire damage to one foe.' },
    agilao: { name: 'Agilao', el: 'fire', type: 'dmg', target: 'one', power: 74, cost: { sp: 8 }, desc: 'Medium fire damage to one foe.' },
    agidyne: { name: 'Agidyne', el: 'fire', type: 'dmg', target: 'one', power: 112, cost: { sp: 14 }, desc: 'Heavy fire damage to one foe.' },
    maragi: { name: 'Maragi', el: 'fire', type: 'dmg', target: 'all', power: 34, cost: { sp: 10 }, desc: 'Light fire damage to all foes.' },
    maragion: { name: 'Maragion', el: 'fire', type: 'dmg', target: 'all', power: 58, cost: { sp: 16 }, desc: 'Medium fire damage to all foes.' },
    bufu: { name: 'Bufu', el: 'ice', type: 'dmg', target: 'one', power: 42, cost: { sp: 5 }, ail: { id: 'freeze', chance: 0.12 }, desc: 'Light ice damage to one foe. Small chance to Freeze.' },
    bufula: { name: 'Bufula', el: 'ice', type: 'dmg', target: 'one', power: 74, cost: { sp: 9 }, ail: { id: 'freeze', chance: 0.12 }, desc: 'Medium ice damage to one foe. Small chance to Freeze.' },
    bufudyne: { name: 'Bufudyne', el: 'ice', type: 'dmg', target: 'one', power: 112, cost: { sp: 15 }, ail: { id: 'freeze', chance: 0.15 }, desc: 'Heavy ice damage to one foe. May Freeze.' },
    mabufu: { name: 'Mabufu', el: 'ice', type: 'dmg', target: 'all', power: 36, cost: { sp: 10 }, ail: { id: 'freeze', chance: 0.08 }, desc: 'Light ice damage to all foes.' },
    mabufula: { name: 'Mabufula', el: 'ice', type: 'dmg', target: 'all', power: 58, cost: { sp: 16 }, ail: { id: 'freeze', chance: 0.1 }, desc: 'Medium ice damage to all foes.' },
    zio: { name: 'Zio', el: 'elec', type: 'dmg', target: 'one', power: 40, cost: { sp: 4 }, ail: { id: 'shock', chance: 0.12 }, desc: 'Light electric damage to one foe. Small chance to Shock.' },
    zionga: { name: 'Zionga', el: 'elec', type: 'dmg', target: 'one', power: 74, cost: { sp: 8 }, ail: { id: 'shock', chance: 0.12 }, desc: 'Medium electric damage to one foe. Small chance to Shock.' },
    ziodyne: { name: 'Ziodyne', el: 'elec', type: 'dmg', target: 'one', power: 112, cost: { sp: 14 }, ail: { id: 'shock', chance: 0.15 }, desc: 'Heavy electric damage to one foe. May Shock.' },
    mazio: { name: 'Mazio', el: 'elec', type: 'dmg', target: 'all', power: 34, cost: { sp: 10 }, ail: { id: 'shock', chance: 0.08 }, desc: 'Light electric damage to all foes.' },
    mazionga: { name: 'Mazionga', el: 'elec', type: 'dmg', target: 'all', power: 58, cost: { sp: 16 }, ail: { id: 'shock', chance: 0.1 }, desc: 'Medium electric damage to all foes.' },
    garu: { name: 'Garu', el: 'wind', type: 'dmg', target: 'one', power: 38, cost: { sp: 3 }, desc: 'Light wind damage to one foe.' },
    garula: { name: 'Garula', el: 'wind', type: 'dmg', target: 'one', power: 72, cost: { sp: 7 }, desc: 'Medium wind damage to one foe.' },
    magaru: { name: 'Magaru', el: 'wind', type: 'dmg', target: 'all', power: 34, cost: { sp: 9 }, desc: 'Light wind damage to all foes.' },
    magarula: { name: 'Magarula', el: 'wind', type: 'dmg', target: 'all', power: 58, cost: { sp: 15 }, desc: 'Medium wind damage to all foes.' },
    daybreak: { name: 'Daybreak', el: 'light', type: 'dmg', target: 'one', power: 56, cost: { sp: 8 }, desc: 'A dawn-colored flare. Medium light damage to one foe.' },
    hama: { name: 'Hama', el: 'light', type: 'insta', target: 'one', chance: 30, cost: { sp: 8 }, desc: 'Light. A chance to banish one foe instantly. Much better against a Light weakness.' },
    hamaon: { name: 'Hamaon', el: 'light', type: 'insta', target: 'one', chance: 45, cost: { sp: 15 }, desc: 'Light. A good chance to banish one foe instantly.' },
    mudo: { name: 'Mudo', el: 'dark', type: 'insta', target: 'one', chance: 30, cost: { sp: 8 }, desc: 'Dark. A chance to kill one foe instantly. Much better against a Dark weakness or a foe in Fear.' },
    mudoon: { name: 'Mudoon', el: 'dark', type: 'insta', target: 'one', chance: 45, cost: { sp: 15 }, desc: 'Dark. A good chance to kill one foe instantly.' },
    // ── Party: physical
    golden_rope: { name: 'Golden Rope', el: 'strike', type: 'dmg', target: 'one', power: 58, cost: { hp: 9 }, crit: 6, ail: { id: 'bind', chance: 0.3, rope: true }, desc: 'The rope from the myth. Medium strike damage; may Bind the foe for a turn.' },
    sonic_punch: { name: 'Sonic Punch', el: 'strike', type: 'dmg', target: 'one', power: 56, cost: { hp: 8 }, crit: 4, desc: 'Medium strike damage to one foe.' },
    kill_rush: { name: 'Kill Rush', el: 'strike', type: 'dmg', target: 'one', power: 36, multi: [2, 3], cost: { hp: 11 }, crit: 6, desc: 'Light strike damage to one foe, 2 to 3 times.' },
    heat_wave: { name: 'Heat Wave', el: 'strike', type: 'dmg', target: 'all', power: 52, cost: { hp: 14 }, crit: 4, desc: 'Medium strike damage to all foes.' },
    cleave: { name: 'Cleave', el: 'slash', type: 'dmg', target: 'one', power: 52, cost: { hp: 6 }, crit: 4, desc: 'Medium slash damage to one foe.' },
    power_slash: { name: 'Power Slash', el: 'slash', type: 'dmg', target: 'one', power: 84, cost: { hp: 10 }, crit: 6, desc: 'Heavy slash damage to one foe.' },
    vorpal_blade: { name: 'Vorpal Blade', el: 'slash', type: 'dmg', target: 'all', power: 72, cost: { hp: 16 }, crit: 6, desc: 'Heavy slash damage to all foes.' },
    double_fangs: { name: 'Double Fangs', el: 'slash', type: 'dmg', target: 'one', power: 44, multi: [2, 2], cost: { hp: 8 }, crit: 6, desc: 'Light slash damage to one foe, twice.' },
    twin_shot: { name: 'Twin Shot', el: 'pierce', type: 'dmg', target: 'one', power: 32, multi: [2, 2], cost: { hp: 7 }, crit: 6, desc: 'Two quick shots. Light pierce damage to one foe, twice.' },
    arrow_rain: { name: 'Arrow Rain', el: 'pierce', type: 'dmg', target: 'all', power: 48, cost: { hp: 13 }, crit: 4, desc: 'Medium pierce damage to all foes.' },
    myriad_shots: { name: 'Myriad Shots', el: 'pierce', type: 'dmg', target: 'rand', power: 46, multi: [3, 5], cost: { hp: 16 }, crit: 8, desc: 'Medium pierce damage to random foes, 3 to 5 times.' },
    rampage: { name: 'Rampage', el: 'strike', type: 'dmg', target: 'rand', power: 30, multi: [2, 3], cost: { hp: 9 }, crit: 4, desc: 'Light strike damage to random foes, 2 to 3 times.' },
    assault_dive: { name: 'Assault Dive', el: 'strike', type: 'dmg', target: 'one', power: 76, acc: 84, cost: { hp: 9 }, crit: 8, desc: 'Heavy strike damage to one foe. Not very accurate.' },
    fatal_end: { name: 'Fatal End', el: 'strike', type: 'dmg', target: 'one', power: 98, acc: 72, cost: { hp: 13 }, crit: 14, desc: 'A crushing blow. Severe strike damage to one foe, but it often misses.' },
    // ── Party: support
    marin_karin: { name: 'Marin Karin', el: 'charm', type: 'ailment', target: 'one', ail: { id: 'charm', chance: 0.5 }, cost: { sp: 6 }, desc: 'Inflicts Charm on one foe. Charmed foes may attack their friends or heal yours.' },
    tarukaja: { name: 'Tarukaja', el: 'support', type: 'buff', target: 'ally', stat: 'atk', cost: { sp: 6 }, desc: "Raises one ally's attack for 3 turns." },
    rakukaja: { name: 'Rakukaja', el: 'support', type: 'buff', target: 'ally', stat: 'def', cost: { sp: 6 }, desc: "Raises one ally's defense for 3 turns." },
    sukukaja: { name: 'Sukukaja', el: 'support', type: 'buff', target: 'ally', stat: 'agi', cost: { sp: 6 }, desc: "Raises one ally's agility for 3 turns." },
    tarunda: { name: 'Tarunda', el: 'support', type: 'debuff', target: 'one', stat: 'atk', cost: { sp: 6 }, desc: "Lowers one foe's attack for 3 turns." },
    rakunda: { name: 'Rakunda', el: 'support', type: 'debuff', target: 'one', stat: 'def', cost: { sp: 6 }, desc: "Lowers one foe's defense for 3 turns." },
    sukunda: { name: 'Sukunda', el: 'support', type: 'debuff', target: 'one', stat: 'agi', cost: { sp: 6 }, desc: "Lowers one foe's agility for 3 turns." },
    matarunda: { name: 'Matarunda', el: 'support', type: 'debuff', target: 'all', stat: 'atk', cost: { sp: 12 }, desc: "Lowers every foe's attack for 3 turns." },
    marakunda: { name: 'Marakunda', el: 'support', type: 'debuff', target: 'all', stat: 'def', cost: { sp: 12 }, desc: "Lowers every foe's defense for 3 turns." },
    dekaja: { name: 'Dekaja', el: 'support', type: 'dispel', target: 'all', dispel: 'buffs', cost: { sp: 10 }, desc: 'Removes every buff on the foes, even ones that never wear off.' },
    dekunda: { name: 'Dekunda', el: 'support', type: 'dispel', target: 'allies', dispel: 'debuffs', cost: { sp: 10 }, desc: 'Removes every debuff on the party.' },
    dia: { name: 'Dia', el: 'heal', type: 'heal', target: 'ally', power: 45, cost: { sp: 4 }, desc: 'Restores a little HP to one ally.' },
    diarama: { name: 'Diarama', el: 'heal', type: 'heal', target: 'ally', power: 95, cost: { sp: 8 }, desc: 'Restores a lot of HP to one ally.' },
    media: { name: 'Media', el: 'heal', type: 'heal', target: 'allies', power: 34, cost: { sp: 9 }, desc: 'Restores a little HP to the whole party.' },
    mediarama: { name: 'Mediarama', el: 'heal', type: 'heal', target: 'allies', power: 60, cost: { sp: 14 }, desc: 'Restores a lot of HP to the whole party.' },
    recarm: { name: 'Recarm', el: 'heal', type: 'revive', target: 'dead', power: 50, cost: { sp: 12 }, desc: 'Revives a fallen ally with half their HP.' },
    patra: { name: 'Patra', el: 'heal', type: 'cure', target: 'ally', cures: ['charm', 'fear', 'distress', 'freeze', 'shock', 'bind'], cost: { sp: 4 }, desc: 'Cures Charm, Fear, Distress, Freeze and Shock on one ally.' },
    me_patra: { name: 'Me Patra', el: 'heal', type: 'cure', target: 'allies', cures: ['charm', 'fear', 'distress', 'freeze', 'shock', 'bind'], cost: { sp: 8 }, desc: 'Cures Charm, Fear, Distress, Freeze and Shock on the whole party.' },
    marakukaja: { name: 'Marakukaja', el: 'support', type: 'buff', target: 'allies', stat: 'def', cost: { sp: 10 }, desc: "Kiriko's bell: raises the party's defense for 3 turns." },
    matarukaja: { name: 'Matarukaja', el: 'support', type: 'buff', target: 'allies', stat: 'atk', cost: { sp: 10 }, desc: "Raises the party's attack for 3 turns." },
    rally: { name: 'Rally', el: 'support', type: 'buff', target: 'allies', stat: ['atk', 'def', 'agi'], sp: 6, cost: { sp: 18 }, desc: 'The campaign speech. Raises party attack, defense and agility, and restores 6 SP to everyone.' },
    // ── Haenim's form signatures (prototype preview)
    encore: { name: 'Encore', el: 'light', type: 'dmg', target: 'all', power: 50, cost: { sp: 14 }, partyHeal: 0.08, partyBuff: ['agi'], desc: 'Sunna takes a bow. Light damage to all foes, then the party heals 8% and gets faster.' },
    low_tide: { name: 'Low Tide', el: 'ice', type: 'dmg', target: 'one', power: 34, multi: [3, 4], cost: { sp: 16 }, ail: { id: 'freeze', chance: 0.18 }, desc: 'Mazu pulls the sea back. Ice damage to one foe, 3 to 4 times. Each wave may Freeze.' },
    victory_lap: { name: 'Victory Lap', el: 'almighty', type: 'dmg', target: 'one', power: 62, cost: { sp: 20 }, partyBuff: ['atk'], desc: 'Nike raises the party’s attack, then strikes one foe with Almighty force.' },
    sunrise: { name: 'Sunrise', el: 'light', type: 'dmg', target: 'all', power: 64, cost: { sp: 22 }, partyHeal: 0.1, partyBuff: ['atk'], desc: 'The veil is gone. Light damage to all foes; the party heals 10% and gets stronger.' },

    // ── The skill system: higher tiers (each one upgrades its lower tier in place: see `chains` below)
    garudyne: { name: 'Garudyne', el: 'wind', type: 'dmg', target: 'one', power: 110, cost: { sp: 13 }, desc: 'Heavy wind damage to one foe.' },
    maragidyne: { name: 'Maragidyne', el: 'fire', type: 'dmg', target: 'all', power: 84, cost: { sp: 24 }, desc: 'Heavy fire damage to all foes.' },
    mabufudyne: { name: 'Mabufudyne', el: 'ice', type: 'dmg', target: 'all', power: 84, cost: { sp: 24 }, ail: { id: 'freeze', chance: 0.12 }, desc: 'Heavy ice damage to all foes. May Freeze.' },
    maziodyne: { name: 'Maziodyne', el: 'elec', type: 'dmg', target: 'all', power: 84, cost: { sp: 24 }, ail: { id: 'shock', chance: 0.12 }, desc: 'Heavy electric damage to all foes. May Shock.' },
    magarudyne: { name: 'Magarudyne', el: 'wind', type: 'dmg', target: 'all', power: 84, cost: { sp: 22 }, desc: 'Heavy wind damage to all foes.' },
    diarahan: { name: 'Diarahan', el: 'heal', type: 'heal', target: 'ally', full: true, power: 999, cost: { sp: 16 }, desc: 'Fully restores one ally’s HP.' },
    mediarahan: { name: 'Mediarahan', el: 'heal', type: 'heal', target: 'allies', full: true, power: 999, cost: { sp: 30 }, desc: 'Fully restores the whole party’s HP.' },
    samarecarm: { name: 'Samarecarm', el: 'heal', type: 'revive', target: 'dead', power: 100, cost: { sp: 24 }, desc: 'Revives a fallen ally with all their HP.' },
    heat_riser: { name: 'Heat Riser', el: 'support', type: 'buff', target: 'ally', stat: ['atk', 'def', 'agi'], cost: { sp: 22 }, desc: "Raises one ally's attack, defense and agility by one level each." },
    debilitate: { name: 'Debilitate', el: 'support', type: 'debuff', target: 'one', stat: ['atk', 'def', 'agi'], cost: { sp: 22 }, desc: "Lowers one foe's attack, defense and agility by one level each." },
    provoke: { name: 'Provoke', el: 'support', type: 'taunt', target: 'self', turns: 3, cost: { sp: 8 }, icon: 'sk-veneer', desc: 'Draws aggro: every single-target attack goes to the user for 3 turns.' },
    evil_smile: { name: 'Evil Smile', el: 'fear', type: 'ailment', target: 'all', ail: { id: 'fear', chance: 0.35 }, cost: { sp: 12 }, desc: 'Inflicts Fear on all foes. Mudo nearly always lands on a frightened foe.' },
    // Signature finals (a party member's link at MAX evolves one signature skill: `ptrees` max)
    sonic_blitz: { name: 'Sonic Blitz', el: 'strike', type: 'dmg', target: 'one', power: 64, multi: [2, 2], cost: { hp: 13 }, crit: 14, desc: 'Akihiko’s fastest combination. Heavy strike damage to one foe, twice. Crits often.' },
    home_run: { name: 'Home Run', el: 'slash', type: 'dmg', target: 'one', power: 150, cost: { hp: 16 }, crit: 20, desc: 'Swing for the fences. Severe slash damage to one foe; crits often.' },
    niflheim: { name: 'Niflheim', el: 'ice', type: 'dmg', target: 'one', power: 150, cost: { sp: 22 }, ail: { id: 'freeze', chance: 0.2 }, desc: 'Severe ice damage to one foe. May Freeze.' },
    triple_down: { name: 'Triple Down', el: 'pierce', type: 'dmg', target: 'one', power: 46, multi: [3, 3], cost: { hp: 14 }, crit: 8, desc: 'Three rounds, no wasted motion. Medium pierce damage to one foe, three times.' },
    samsara: { name: 'Samsara', el: 'light', type: 'insta', target: 'all', chance: 38, cost: { sp: 28 }, desc: 'Light. A good chance to banish every foe at once. Bosses are immune.' },
    die_for_me: { name: 'Die for Me!', el: 'dark', type: 'insta', target: 'all', chance: 38, cost: { sp: 28 }, desc: 'Dark. A good chance to kill every foe at once; frightened foes almost never survive. Bosses are immune.' },
    gods_hand: { name: 'God’s Hand', el: 'strike', type: 'dmg', target: 'one', power: 165, acc: 86, cost: { hp: 18 }, crit: 10, desc: 'Severe strike damage to one foe. Not always accurate.' },
    gigantic_fist: { name: 'Gigantic Fist', el: 'strike', type: 'dmg', target: 'one', power: 125, acc: 90, cost: { hp: 15 }, crit: 8, desc: 'Heavy strike damage to one foe.' },
    showstopper: { name: 'Showstopper', el: 'wind', type: 'dmg', target: 'one', power: 140, cost: { sp: 20 }, selfBuff: 'atk', desc: 'Everyone look at him. Severe wind damage to one foe, then his attack goes up a level.' },
    salvation: { name: 'Salvation', el: 'heal', type: 'heal', target: 'allies', full: true, cureAll: true, power: 999, cost: { sp: 44 }, desc: 'Fully restores the whole party’s HP and cures every ailment.' },
    diamond_dust: { name: 'Diamond Dust', el: 'ice', type: 'dmg', target: 'one', power: 150, cost: { sp: 22 }, ail: { id: 'freeze', chance: 0.25 }, desc: 'Severe ice damage to one foe. May Freeze.' },
    thunder_reign: { name: 'Thunder Reign', el: 'elec', type: 'dmg', target: 'one', power: 150, cost: { sp: 22 }, ail: { id: 'shock', chance: 0.25 }, desc: 'Severe electric damage to one foe. May Shock.' },
    // Haenim's trunk: Daybreak and the Golden Rope grow with her
    morning_glory: { name: 'Morning Glory', el: 'light', type: 'dmg', target: 'one', power: 88, cost: { sp: 12 }, desc: 'Daybreak, brighter. Heavy light damage to one foe.' },
    high_noon: { name: 'High Noon', el: 'light', type: 'dmg', target: 'one', power: 128, cost: { sp: 18 }, desc: 'The sun at its highest. Severe light damage to one foe.' },
    golden_tether: { name: 'Golden Tether', el: 'strike', type: 'dmg', target: 'one', power: 86, cost: { hp: 11 }, crit: 8, ail: { id: 'bind', chance: 0.32, rope: true }, desc: 'The rope holds. Heavy strike damage to one foe; may Bind it for a turn.' },
    heavens_rope: { name: 'Heaven’s Rope', el: 'strike', type: 'dmg', target: 'one', power: 66, multi: [2, 2], cost: { hp: 14 }, crit: 10, ail: { id: 'bind', chance: 0.3, rope: true }, desc: 'The rope let down from the sky, from the old story. Heavy strike damage to one foe, twice; each lash may Bind.' },
    // The searchers' Persona skills (Dalnim, Hyeonmu, Dokkaebi, Theia).
    waning_moon: { name: 'Waning Moon', el: 'dark', type: 'dmg', target: 'one', power: 64, cost: { sp: 8 }, ail: { id: 'fear', chance: 0.15 }, icon: 'sk-crescent', fx: 'crescent', desc: 'Dalnim’s crescent blade. Medium dark damage to one foe; may cause Fear.' },
    serpent_coil: { name: 'Serpent Coil', el: 'ice', type: 'dmg', target: 'one', power: 58, cost: { sp: 9 }, ail: { id: 'bind', chance: 0.3 }, icon: 'sk-serpent', fx: 'serpent', desc: 'The serpent wraps and the tortoise holds. Medium ice damage to one foe; may Bind it for a turn.' },
    goblin_club: { name: 'Goblin Club', el: 'strike', type: 'dmg', target: 'one', power: 64, cost: { hp: 10 }, crit: 8, ail: { id: 'disorient', chance: 0.2 }, icon: 'sk-club', fx: 'club', desc: 'Dokkaebi brings the club down, laughing. Medium strike damage to one foe; may Disorient it.' },
    clear_sight: { name: 'Clear Sight', el: 'light', type: 'dmg', target: 'one', power: 58, cost: { sp: 8 }, icon: 'sk-theia', fx: 'theia', desc: 'Theia looses an arrow of light at what she sees. Medium light damage to one foe.' },
    undertow: { name: 'Undertow', el: 'ice', type: 'dmg', target: 'one', power: 96, cost: { sp: 16 }, ail: { id: 'bind', chance: 0.35, rope: true }, desc: 'The harbor pulls. Heavy ice damage to one foe; it may be Bound by the tide.' },
    mandate: { name: 'Mandate', el: 'support', type: 'buff', target: 'allies', stat: ['atk', 'def', 'agi'], thGain: 15, cost: { sp: 32 }, desc: 'She won. Party attack, defense and agility up a level each, and every Theurgy gauge fills by 15.' },
    // ── Kat's skills (Haenim's tree). Each has its own icon (icons.js sk-*) and effect (fx.js).
    protective_suzu: { name: 'Protective Suzu', el: 'heal', type: 'ward', target: 'allies', cost: { sp: 36 }, icon: 'sk-suzu', fx: 'suzu',
      desc: 'The bell rings once. Until each ally’s next turn nothing can hurt them, and every ailment on the party is cured.' },
    kunai_flick: { name: 'Kunai Flick', el: 'pierce', type: 'dmg', target: 'one', power: 34, cost: { hp: 5 }, crit: 10, critX: 3.5, critIf: true, icon: 'sk-kunai', fx: 'kunai',
      desc: 'A flick of the wrist. Light pierce damage to one foe. Against a debuffed or ailing foe, or a weak spot, it crits far more often and a crit hits ×3.5.' },
    kitsune_rush: { name: 'Kitsune Rush', el: 'almighty', type: 'kitsune', target: 'allies', turns: 3, once: true, cost: { sp: 40 }, icon: 'sk-kitsune', fx: 'kitsune',
      desc: 'Ultimate, once per battle. For 3 turns the party moves first, agility and accuracy up 50%, and every HP/SP cost is halved.' },
    public_veneer: { name: 'Public Veneer', el: 'support', type: 'taunt', target: 'self', turns: 3, def: 2, counter: 0.4, cost: { sp: 14 }, icon: 'sk-veneer', fx: 'veneer',
      desc: 'The smile for the cameras. For 3 turns every single-target attack goes to Solar; her defense rises two levels and she may counter.' },
    call_the_bluff: { name: 'Call the Bluff', el: 'support', type: 'bluff', target: 'one', cost: { sp: 16 }, icon: 'sk-bluff', fx: 'bluff',
      desc: 'Strips every buff from one foe (even ones that never wear off) and Disorients it for a turn: it may stumble, and swings wide when it doesn’t.' },
    // ── Signature skills: one per fighter, bought in their own tree's tier 2 (`ptrees`). Each has its own icon (icons.js sk-*)
    //    and its own effect (fx.js, played by battle.js fxHit). Extra flags (engine.js): downBonus (a Down foe takes that much
    //    more), lowHpBonus (hits harder the more hurt the user is), debuffOnHit (a stat down on whatever it hit), scan (reveals
    //    every affinity of whatever it hit), tauntSelf (the user draws every single-target attack for that many turns).
    corkscrew: { name: 'Corkscrew Thunder', el: 'strike', type: 'dmg', target: 'one', power: 34, multi: [3, 3], cost: { hp: 12 }, crit: 8, ail: { id: 'shock', chance: 0.12 }, icon: 'sk-corkscrew', fx: 'corkscrew',
      desc: 'Akihiko’s three-punch combination, finished with a twist of lightning. Light strike damage to one foe, three times; each punch may Shock.' },
    gale_arrow: { name: 'Gale Arrow', el: 'pierce', type: 'dmg', target: 'one', power: 66, cost: { hp: 9 }, crit: 8, partyHeal: 0.08, icon: 'sk-galearrow', fx: 'galearrow',
      desc: 'An arrow carried on Io’s wind. Medium pierce damage to one foe; the gust it leaves heals the party a little.' },
    fastball: { name: 'Fastball', el: 'fire', type: 'dmg', target: 'one', power: 72, cost: { sp: 9 }, downBonus: 0.5, icon: 'sk-fastball', fx: 'fastball',
      desc: 'Junpei winds up and throws heat. Medium fire damage to one foe; a Down foe takes 50% more.' },
    glacial_fleche: { name: 'Glacial Flèche', el: 'pierce', type: 'dmg', target: 'one', power: 40, multi: [2, 2], cost: { hp: 10 }, crit: 8, ail: { id: 'freeze', chance: 0.15 }, icon: 'sk-fleche', fx: 'fleche',
      desc: 'Two lunges, the second one colder. Light pierce damage to one foe, twice; each may Freeze it.' },
    missile_salvo: { name: 'Missile Salvo', el: 'pierce', type: 'dmg', target: 'all', power: 40, multi: [2, 2], cost: { hp: 13 }, crit: 4, icon: 'sk-salvo', fx: 'salvo',
      desc: 'Every launcher she has, all at once. Light pierce damage to all foes, twice.' },
    justice_lance: { name: 'Lance of Justice', el: 'light', type: 'dmg', target: 'one', power: 74, cost: { sp: 10 }, drain: 0.3, icon: 'sk-lance', fx: 'lance',
      desc: 'Ken throws his spear and the light follows it. Medium light damage to one foe; he recovers HP equal to a third of it.' },
    three_heads: { name: 'Three Heads', el: 'slash', type: 'dmg', target: 'one', power: 28, multi: [3, 3], cost: { hp: 10 }, crit: 10, ail: { id: 'fear', chance: 0.12 }, icon: 'sk-bite', fx: 'bite',
      desc: 'One bite for each of Cerberus’s heads. Light slash damage to one foe, three times; each may frighten it.' },
    haymaker: { name: 'Haymaker', el: 'strike', type: 'dmg', target: 'one', power: 112, acc: 82, cost: { hp: 12 }, crit: 10, lowHpBonus: 0.6, icon: 'sk-haymaker', fx: 'haymaker',
      desc: 'All his weight behind one swing. Heavy strike damage to one foe; the more hurt Shinjiro is, the harder it lands.' },
    moon_static: { name: 'Moonlit Static', el: 'elec', type: 'dmg', target: 'all', power: 48, cost: { sp: 14 }, downBonus: 0.5, ail: { id: 'shock', chance: 0.1 }, icon: 'sk-moonstatic', fx: 'moonstatic',
      desc: 'Dalnim’s moon hums with static. Light electric damage to all foes; a foe already Down takes 50% more.' },
    black_tortoise: { name: 'Black Tortoise', el: 'support', type: 'buff', target: 'allies', stat: 'def', tauntSelf: 2, cost: { sp: 14 }, icon: 'sk-shell', fx: 'shell',
      desc: 'Hyeonmu’s shell closes over everyone. The party’s defense rises, and for 2 turns Jungwon draws every single-target attack.' },
    goblin_fire: { name: 'Goblin Fire', el: 'fire', type: 'dmg', target: 'rand', power: 30, multi: [3, 4], cost: { sp: 12 }, icon: 'sk-goblinfire', fx: 'goblinfire',
      desc: 'Dokkaebibul: blue goblin lights dancing over the field. Light fire damage to random foes, 3 to 4 times.' },
    focus_pull: { name: 'Focus Pull', el: 'pierce', type: 'dmg', target: 'one', power: 60, cost: { hp: 8 }, crit: 8, debuffOnHit: 'agi', scan: true, icon: 'sk-aperture', fx: 'aperture',
      desc: 'Minji racks focus onto one foe. Medium pierce damage; its agility drops a level, and every affinity it has is revealed.' },
    // ── The sun (Haenim's radial tree, 2026-10-25): new actives. Effects reuse fx.js kinds (fx); icons fall back to the element.
    sun_thrust: { name: 'Sun Thrust', el: 'pierce', type: 'dmg', target: 'one', power: 62, cost: { hp: 8 }, crit: 8, fx: 'fleche',
      desc: 'The naginata, straight and bright. Medium pierce damage to one foe.' },
    flare_thrust: { name: 'Flare Thrust', el: 'pierce', type: 'dmg', target: 'one', power: 104, cost: { hp: 12 }, crit: 10, fx: 'fleche',
      desc: 'A thrust with the sun behind it. Heavy pierce damage to one foe.' },
    solstice_edge: { name: 'Solstice Edge', el: 'pierce', type: 'dmg', target: 'one', power: 145, cost: { hp: 16 }, crit: 12, fx: 'fleche',
      desc: 'The longest day in one cut. Severe pierce damage to one foe; crits often.' },
    gather_light: { name: 'Gather Light', el: 'support', type: 'charge', target: 'self', phys: true, mult: 2, cost: { sp: 10 }, fx: 'buff',
      desc: 'She draws the sun into the blade. Her next physical skill or attack deals double damage.' },
    concentrate: { name: 'Concentrate', el: 'support', type: 'charge', target: 'self', mult: 2, cost: { sp: 12 }, fx: 'buff',
      desc: 'She goes very still. Her next magic skill deals double damage.' },
    bewitch: { name: 'Bewitch', el: 'charm', type: 'ailment', target: 'one', ail: { id: 'charm', chance: 0.45 }, cost: { sp: 8 }, fx: 'charm',
      desc: 'A fox’s smile. May Charm one foe.' },
    fox_mask: { name: 'Fox Mask', el: 'fear', type: 'ailment', target: 'all', ail: { id: 'fear', chance: 0.3 }, cost: { sp: 12 },
      desc: 'The mask slips, and what’s under it isn’t her face. May inflict Fear on every foe.' },
    fox_fang: { name: 'Fox Fang', el: 'pierce', type: 'dmg', target: 'one', power: 92, cost: { hp: 12 }, crit: 10, critX: 2.4, critIf: true, fx: 'bite',
      desc: 'Heavy pierce damage to one foe. Against an ailing or debuffed foe, or a weak spot, it crits far more often and a crit hits ×2.4.' },
    kitsunebi: { name: 'Kitsunebi', el: 'fire', type: 'dmg', target: 'all', power: 50, cost: { sp: 16 }, ail: { id: 'disorient', chance: 0.2 }, fx: 'goblinfire',
      desc: 'Fox lights over the field. Medium fire damage to all foes; each may be Disoriented.' },
    spring_rain: { name: 'Spring Rain', el: 'ice', type: 'dmg', target: 'all', power: 48, cost: { sp: 18 }, partyHeal: 0.08,
      desc: 'Cold rain, warm afterward. Medium ice damage to all foes, then the party heals 8%.' },

    // ── Shadows
    bash: { name: 'Bash', el: 'strike', type: 'dmg', target: 'one', power: 30, desc: '' },
    lunge: { name: 'Lunge', el: 'slash', type: 'dmg', target: 'one', power: 34, desc: '' },
    peck: { name: 'Peck', el: 'pierce', type: 'dmg', target: 'one', power: 32, desc: '' },
    horn: { name: 'Grave Horn', el: 'pierce', type: 'dmg', target: 'one', power: 40, desc: '' },
    e_agi: { name: 'Agi', el: 'fire', type: 'dmg', target: 'one', power: 36, desc: '' },
    e_garu: { name: 'Garu', el: 'wind', type: 'dmg', target: 'one', power: 36, desc: '' },
    e_zio: { name: 'Zio', el: 'elec', type: 'dmg', target: 'one', power: 36, ail: { id: 'shock', chance: 0.1 }, desc: '' },
    e_bufu: { name: 'Bufu', el: 'ice', type: 'dmg', target: 'one', power: 38, ail: { id: 'freeze', chance: 0.08 }, desc: '' },
    e_agilao: { name: 'Agilao', el: 'fire', type: 'dmg', target: 'one', power: 60, desc: '' },
    e_garula: { name: 'Garula', el: 'wind', type: 'dmg', target: 'one', power: 58, desc: '' },
    e_zionga: { name: 'Zionga', el: 'elec', type: 'dmg', target: 'one', power: 60, ail: { id: 'shock', chance: 0.1 }, desc: '' },
    e_bufula: { name: 'Bufula', el: 'ice', type: 'dmg', target: 'one', power: 56, desc: '' },
    e_bufudyne: { name: 'Bufudyne', el: 'ice', type: 'dmg', target: 'one', power: 84, ail: { id: 'freeze', chance: 0.12 }, desc: '' },
    e_ziodyne: { name: 'Ziodyne', el: 'elec', type: 'dmg', target: 'one', power: 84, ail: { id: 'shock', chance: 0.12 }, desc: '' },
    e_maragi: { name: 'Maragi', el: 'fire', type: 'dmg', target: 'all', power: 30, desc: '' },
    e_maragion: { name: 'Maragion', el: 'fire', type: 'dmg', target: 'all', power: 46, desc: '' },
    e_magaru: { name: 'Magaru', el: 'wind', type: 'dmg', target: 'all', power: 30, desc: '' },
    e_magarula: { name: 'Magarula', el: 'wind', type: 'dmg', target: 'all', power: 46, desc: '' },
    e_mazio: { name: 'Mazio', el: 'elec', type: 'dmg', target: 'all', power: 30, desc: '' },
    e_mazionga: { name: 'Mazionga', el: 'elec', type: 'dmg', target: 'all', power: 46, ail: { id: 'shock', chance: 0.08 }, desc: '' },
    e_mabufu: { name: 'Mabufu', el: 'ice', type: 'dmg', target: 'all', power: 30, desc: '' },
    e_mabufula: { name: 'Mabufula', el: 'ice', type: 'dmg', target: 'all', power: 46, ail: { id: 'freeze', chance: 0.06 }, desc: '' },
    e_hama: { name: 'Hama', el: 'light', type: 'insta', target: 'one', chance: 22, desc: '' },
    e_hamaon: { name: 'Hamaon', el: 'light', type: 'insta', target: 'one', chance: 30, desc: '' },
    e_mudo: { name: 'Mudo', el: 'dark', type: 'insta', target: 'one', chance: 22, desc: '' },
    e_megido: { name: 'Megido', el: 'almighty', type: 'dmg', target: 'all', power: 44, sure: true, desc: '' },
    e_megidola: { name: 'Megidola', el: 'almighty', type: 'dmg', target: 'all', power: 78, sure: true, desc: '' },
    e_megidolaon: { name: 'Megidolaon', el: 'almighty', type: 'dmg', target: 'all', power: 130, sure: true, desc: '' },
    e_heat_wave: { name: 'Heat Wave', el: 'strike', type: 'dmg', target: 'all', power: 42, desc: '' },
    e_herculean: { name: 'Herculean Strike', el: 'strike', type: 'dmg', target: 'one', power: 84, desc: '' },
    e_kill_rush: { name: 'Kill Rush', el: 'strike', type: 'dmg', target: 'one', power: 30, multi: [2, 3], desc: '' },
    e_vorpal: { name: 'Vorpal Blade', el: 'slash', type: 'dmg', target: 'all', power: 50, desc: '' },
    e_power_slash: { name: 'Power Slash', el: 'slash', type: 'dmg', target: 'one', power: 70, desc: '' },
    e_arrow_rain: { name: 'Arrow Rain', el: 'pierce', type: 'dmg', target: 'all', power: 40, desc: '' },
    e_holy_arrow: { name: 'Holy Arrow', el: 'pierce', type: 'dmg', target: 'one', power: 62, desc: '' },
    e_marin_karin: { name: 'Marin Karin', el: 'charm', type: 'ailment', target: 'one', ail: { id: 'charm', chance: 0.4 }, desc: '' },
    e_sexy_dance: { name: 'Sexy Dance', el: 'charm', type: 'ailment', target: 'all', ail: { id: 'charm', chance: 0.28 }, desc: '' },
    e_poisma: { name: 'Poisma', el: 'poison', type: 'ailment', target: 'one', ail: { id: 'poison', chance: 0.55 }, desc: '' },
    e_poison_mist: { name: 'Poison Mist', el: 'poison', type: 'ailment', target: 'all', ail: { id: 'poison', chance: 0.35 }, desc: '' },
    e_evil_touch: { name: 'Evil Touch', el: 'fear', type: 'ailment', target: 'one', ail: { id: 'fear', chance: 0.45 }, desc: '' },
    e_evil_smile: { name: 'Evil Smile', el: 'fear', type: 'ailment', target: 'all', ail: { id: 'fear', chance: 0.3 }, desc: '' },
    e_ominous: { name: 'Ominous Words', el: 'distress', type: 'ailment', target: 'all', ail: { id: 'distress', chance: 0.3 }, desc: '' },
    e_dia: { name: 'Dia', el: 'heal', type: 'heal', target: 'ally', power: 40, desc: '' },
    e_diarama: { name: 'Diarama', el: 'heal', type: 'heal', target: 'ally', power: 90, desc: '' },
    e_media: { name: 'Media', el: 'heal', type: 'heal', target: 'allies', power: 28, desc: '' },
    e_mediarama: { name: 'Mediarama', el: 'heal', type: 'heal', target: 'allies', power: 52, desc: '' },
    e_tarunda: { name: 'Tarunda', el: 'support', type: 'debuff', target: 'one', stat: 'atk', desc: '' },
    e_rakunda: { name: 'Rakunda', el: 'support', type: 'debuff', target: 'one', stat: 'def', desc: '' },
    e_rakukaja: { name: 'Rakukaja', el: 'support', type: 'buff', target: 'ally', stat: 'def', desc: '' },
    e_tarukaja: { name: 'Tarukaja', el: 'support', type: 'buff', target: 'ally', stat: 'atk', desc: '' },
    e_matarunda: { name: 'Matarunda', el: 'support', type: 'debuff', target: 'all', stat: 'atk', desc: '' },
    e_marakunda: { name: 'Marakunda', el: 'support', type: 'debuff', target: 'all', stat: 'def', desc: '' },
    e_masukunda: { name: 'Masukunda', el: 'support', type: 'debuff', target: 'all', stat: 'agi', desc: '' },
    e_sermon_up: { name: 'Sermon of Glory', el: 'support', type: 'buff', target: 'self', stat: ['atk', 'def', 'agi'], lasting: true, desc: '' },
    e_sermon_down: { name: 'Sermon of Penance', el: 'support', type: 'debuff', target: 'all', stat: ['atk', 'def'], lasting: true, desc: '' },
    tremble: { name: 'Trembling…', el: 'none', type: 'special', target: 'self', desc: '' },
    gather: { name: 'Gather Moonlight', el: 'none', type: 'special', target: 'self', desc: '' },
    lunar_tide: { name: 'Lunar Tide', el: 'almighty', type: 'dmg', target: 'all', power: 66, sure: true, desc: '' },
    call_mirrors: { name: 'Call of the Mirror', el: 'none', type: 'special', target: 'self', desc: '' },
    hide: { name: 'Fade Into Static', el: 'none', type: 'special', target: 'self', desc: '' },
    wheel: { name: 'Wheel of Fortune', el: 'none', type: 'special', target: 'self', desc: '' },
    judgment: { name: 'Judgment', el: 'none', type: 'special', target: 'self', desc: '' },
    call_effigies: { name: 'Hang the Effigies', el: 'none', type: 'special', target: 'self', desc: '' },
    power_charge: { name: 'Power Charge', el: 'none', type: 'special', target: 'self', desc: '' },
    shift_weak: { name: 'Shift', el: 'none', type: 'special', target: 'self', desc: '' },
    chains: { name: 'Rattling Chains', el: 'none', type: 'special', target: 'self', desc: '' },
    // Story fights for the life sim (handoff mode only): Wren asks instead of attacking; `still` is a turn spent doing nothing.
    w_stay: { name: '“Stay with me.”', el: 'charm', type: 'ailment', target: 'one', ail: { id: 'charm', chance: 0.5 }, desc: '' },
    w_wait: { name: '“Wait for the next one.”', el: 'fear', type: 'ailment', target: 'one', ail: { id: 'fear', chance: 0.5 }, desc: '' },
    w_choose: { name: '“You don’t have to choose.”', el: 'distress', type: 'ailment', target: 'one', ail: { id: 'distress', chance: 0.55 }, desc: '' },
    still: { name: '…', el: 'none', type: 'special', target: 'self', desc: '' }
  };

  Object.keys(skills).forEach(k => { skills[k].id = k; });

  /* Status ailments (one at a time per unit, like P3). turns: [min, max] of the afflicted unit's own turns.
     noAct: loses its turns. Golden Rope's Bind lasts one turn. Bosses list what they shrug off in ailImmune. */
  const ailments = {
    charm: { name: 'Charm', color: '#ff7ac8', turns: [2, 3], desc: 'Charmed: may attack its own side or heal the other.' },
    fear: { name: 'Fear', color: '#a98bff', turns: [2, 3], desc: 'Afraid: may cower and lose its turn, or run. Mudo nearly always lands.' },
    freeze: { name: 'Freeze', color: '#9fe8ff', turns: [2, 2], noAct: true, desc: 'Frozen solid: can’t act. The next physical hit is a guaranteed critical and shatters the ice.' },
    shock: { name: 'Shock', color: '#ffe14d', turns: [1, 2], noAct: true, desc: 'Shocked: can’t act. Touching it with a physical attack may shock the attacker.' },
    poison: { name: 'Poison', color: '#b36bff', turns: [3, 3], desc: 'Poisoned: loses HP at the start of each turn.' },
    distress: { name: 'Distress', color: '#ff9a3d', turns: [2, 3], desc: 'Distressed: critical hits land far more often.' },
    bind: { name: 'Bind', color: '#ffd36b', turns: [1, 1], noAct: true, desc: 'Bound by the golden rope: can’t act this turn.' },
    disorient: { name: 'Disorient', color: '#ffb3e6', turns: [1, 1], desc: 'Disoriented: half the time it stumbles and loses its turn; when it does act it swings wide and often misses.' }
  };
  /* Buffs and debuffs stack (P5-style) up to this many levels; casting again adds a level and refreshes the 3 turns.
     atk: damage dealt per level (index = level), def: damage taken per level, agi: accuracy/evasion points per level. */
  const buffRules = { cap: 3, turns: 3, atk: [1, 1.25, 1.45, 1.6], atkDown: [1, 0.75, 0.62, 0.55], def: [1, 0.8, 0.68, 0.6], defDown: [1, 1.2, 1.35, 1.5], agi: 8 };
  /* Skills that upgrade in place: learning a later skill in a chain replaces the earlier one in the same slot.
     (A level learn's own `replaces` still works; this covers the tree and the party trees too.) */
  const chains = [
    ['agi', 'agilao', 'agidyne'], ['maragi', 'maragion', 'maragidyne'], ['bufu', 'bufula', 'bufudyne'], ['mabufu', 'mabufula', 'mabufudyne'],
    ['zio', 'zionga', 'ziodyne'], ['mazio', 'mazionga', 'maziodyne'], ['garu', 'garula', 'garudyne'], ['magaru', 'magarula', 'magarudyne'],
    ['hama', 'hamaon'], ['mudo', 'mudoon'], ['dia', 'diarama', 'diarahan'], ['media', 'mediarama', 'mediarahan'], ['recarm', 'samarecarm'], ['patra', 'me_patra'],
    ['tarukaja', 'matarukaja'], ['rakukaja', 'marakukaja'], ['tarunda', 'matarunda'], ['rakunda', 'marakunda'],
    ['cleave', 'power_slash'], ['arrow_rain', 'myriad_shots'], ['daybreak', 'morning_glory', 'high_noon'], ['golden_rope', 'golden_tether', 'heavens_rope'],
    ['sun_thrust', 'flare_thrust', 'solstice_edge']
  ];
  const skillSlots = 8; // P3: eight skills per Persona; a ninth asks which one to forget

  /* Party tactics (P3P). Solar is always Direct. The AI for each lives in engine.js (autoAction). */
  const tactics = {
    direct: { name: 'Direct Command', short: 'Direct', desc: 'You choose every action.' },
    free: { name: 'Act Freely', short: 'Free', desc: 'Exploits known weaknesses, heals when someone is hurt, buffs for bosses, uses Theurgy when it’s ready.' },
    heal: { name: 'Heal/Support', short: 'Support', desc: 'Keeps everyone healthy, cures and buffs first. Attacks only when there’s nothing to fix.' },
    assault: { name: 'Full Assault', short: 'Assault', desc: 'Hits as hard as possible with the best skill, whatever it costs.' },
    conserve: { name: 'Conserve SP', short: 'Conserve', desc: 'Never spends SP. Uses the weapon and physical skills.' }
  };

  /* Basic attack. Its power is the equipped weapon's atk (this is the bare-hands fallback). */
  const attack = { name: 'Attack', type: 'dmg', target: 'one', power: 30, crit: 2 };

  /* Personas. art: transparent webp in art/personas/. evolve: { lvl } or { op } (a full-moon operation cleared) turns it into
     `evolves`. bonus: stats the evolved form adds. learn: [level, skill, replaces?] once that Persona is the active one.
     Haenim's route forms (form: true) are a prototype preview: unlock, aff, lean (stat bonuses) and sig (signature skill). */
  const A = 'assets/femc/battle/art/personas/';
  /* A veiled silhouette in a member's color, for a Persona whose art isn't in yet (unused since the searchers' art came in). */
  const unnamedArt = color => 'data:image/svg+xml,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600"><defs><radialGradient id="g" cx="50%" cy="38%" r="55%"><stop offset="0" stop-color="${color}" stop-opacity=".55"/><stop offset="1" stop-color="${color}" stop-opacity="0"/></radialGradient></defs><ellipse cx="200" cy="250" rx="190" ry="250" fill="url(#g)"/><path d="M200 70c-38 0-64 30-64 70 0 28 12 50 30 62-58 18-96 72-106 150l-16 190h312l-16-190c-10-78-48-132-106-150 18-12 30-34 30-62 0-40-26-70-64-70z" fill="#140812" stroke="${color}" stroke-width="5" stroke-opacity=".8"/><text x="200" y="400" fill="${color}" font-family="Georgia, serif" font-size="120" text-anchor="middle" opacity=".7">?</text></svg>`);
  const personas = {
    haenim: { name: 'Haenim', ko: '해님', arcana: 'Fool', art: A + 'haenim.webp', aff: { light: 'resist', dark: 'weak' }, user: 'solar',
      blurb: 'Lady Sun. A girl who hides by shining. She carries a bell, a jade ring and a star pin from three lives Solar can’t remember.' },
    'haenim-sunna': { name: 'Sunna', form: true, base: 'haenim', arcana: 'Fool · Runners', art: A + 'haenim-sunna.webp', user: 'solar', color: '#ffd36b',
      unlock: { node: 'bell-key' }, aff: { light: 'null', wind: 'resist', dark: 'weak' }, lean: { ag: 4, ma: 2, sp: 15 }, sig: 'encore', theme: 'Support · Speed · Light',
      blurb: 'The runner under stage lights. Support and speed, and an Encore that lights up the whole field.' },
    'haenim-mazu': { name: 'Mazu', form: true, base: 'haenim', arcana: 'Fool · strangers', art: A + 'haenim-harbor.webp', user: 'solar', color: '#5fe0b0',
      unlock: { node: 'jade-key' }, aff: { ice: 'null', light: 'resist', elec: 'weak' }, lean: { st: 2, lu: 4, ma: 1 }, sig: 'low_tide', theme: 'Ice · Precision · Crits',
      blurb: 'The sea goddess who protects the people waiting on the docks. Cold, exact, and she never misses a tide.' },
    'haenim-nike': { name: 'Nike', form: true, base: 'haenim', arcana: 'Fool · Hoax', art: A + 'haenim-nike.webp', user: 'solar', color: '#ff8cc0',
      unlock: { node: 'star-key' }, aff: { light: 'resist', wind: 'resist', dark: 'weak' }, lean: { st: 3, en: 2, hp: 20 }, sig: 'victory_lap', theme: 'Buffs · Almighty',
      blurb: 'Winged Victory. Everyone fights harder when she’s on the field.' },
    'haenim-unveiled': { name: 'Haenim, Unveiled', form: true, base: 'haenim', arcana: 'Fool · ???', art: A + 'haenim-unveiled.webp', user: 'solar', color: '#fff2b0',
      unlock: { node: 'unveiled' }, aff: { light: 'null', dark: 'resist', ice: 'resist', wind: 'resist' }, lean: { st: 2, ma: 3, en: 2, ag: 2, lu: 2, hp: 15, sp: 10 },
      sig: 'sunrise', theurgy: { mult: 1.4, down: 1, heal: 0.3 }, theme: 'True ending preview · Everything',
      blurb: 'The sun you can look at. A glimpse of the true ending: a little of every route, and a Theurgy that doesn’t hold back.' },
    polydeuces: { name: 'Polydeuces', arcana: 'Emperor', art: A + 'polydeuces.webp', aff: { elec: 'resist', ice: 'weak' }, user: 'akihiko', evolves: 'caesar', evolve: { lvl: 24 }, blurb: 'The boxer twin. All fists and lightning.' },
    caesar: { name: 'Caesar', arcana: 'Emperor', art: A + 'caesar.webp', aff: { elec: 'null', ice: 'weak' }, user: 'akihiko', bonus: { st: 3, ma: 2, en: 2, hp: 20 },
      learn: [[24, 'mazionga', 'mazio'], [28, 'ziodyne', 'zionga'], [32, 'heat_wave']], blurb: 'Akihiko’s awakened Persona, holding the world in one hand.' },
    io: { name: 'Io', arcana: 'Lovers', art: A + 'io.webp', aff: { wind: 'resist', elec: 'weak' }, user: 'yukari', evolves: 'isis', evolve: { lvl: 22 }, blurb: 'A maiden on a great bull. Healing and wind.' },
    isis: { name: 'Isis', arcana: 'Lovers', art: A + 'isis.webp', aff: { wind: 'null', elec: 'weak' }, user: 'yukari', bonus: { ma: 3, ag: 2, sp: 20 },
      learn: [[22, 'diarama', 'dia'], [25, 'mediarama', 'media'], [28, 'magarula', 'magaru'], [31, 'me_patra', 'patra']], blurb: 'Yukari’s awakened Persona.' },
    hermes: { name: 'Hermes', arcana: 'Magician', art: A + 'hermes.webp', aff: { fire: 'resist', wind: 'weak' }, user: 'junpei', evolves: 'trismegistus', evolve: { lvl: 24 }, blurb: 'The winged messenger. Fire and blades.' },
    trismegistus: { name: 'Trismegistus', arcana: 'Magician', art: A + 'trismegistus.webp', aff: { fire: 'null', wind: 'weak' }, user: 'junpei', bonus: { st: 3, ma: 2, hp: 25 },
      learn: [[24, 'maragion', 'maragi'], [28, 'agidyne', 'agilao'], [32, 'vorpal_blade']], blurb: 'Junpei’s awakened Persona.' },
    penthesilea: { name: 'Penthesilea', arcana: 'Empress', art: A + 'penthesilea.webp', aff: { ice: 'resist', fire: 'weak' }, user: 'mitsuru', evolves: 'artemisia', evolve: { lvl: 22 }, blurb: 'The Amazon queen. Ice and grace.' },
    artemisia: { name: 'Artemisia', arcana: 'Empress', art: A + 'artemisia.webp', aff: { ice: 'null', fire: 'weak' }, user: 'mitsuru', bonus: { ma: 3, ag: 2, sp: 20 },
      learn: [[22, 'mabufula', 'mabufu'], [26, 'bufudyne', 'bufula'], [30, 'marakunda']], blurb: 'Mitsuru’s awakened Persona.' },
    castor: { name: 'Castor', arcana: 'Hierophant', art: A + 'castor.webp', aff: { strike: 'resist' }, user: 'shinjiro', blurb: 'The rider twin. Shinjiro can barely hold it back.' },
    nemesis: { name: 'Nemesis', arcana: 'Justice', art: A + 'nemesis.webp', aff: { light: 'null', dark: 'weak' }, user: 'ken', evolves: 'kala-nemi', evolve: { lvl: 24 }, blurb: 'Retribution with a spear.' },
    'kala-nemi': { name: 'Kala-Nemi', arcana: 'Justice', art: A + 'kala-nemi.webp', aff: { light: 'null', elec: 'resist', dark: 'weak' }, user: 'ken', bonus: { ma: 3, st: 2, hp: 20 },
      learn: [[24, 'mazionga'], [27, 'diarama', 'dia'], [30, 'mediarama', 'media']], blurb: 'Ken’s awakened Persona.' },
    cerberus: { name: 'Cerberus', arcana: 'Strength', art: A + 'cerberus.webp', aff: { fire: 'null', dark: 'null', light: 'weak' }, user: 'koromaru', blurb: 'The three-headed guardian, loyal to the end.' },
    palladion: { name: 'Palladion', arcana: 'Chariot', art: A + 'palladion.webp', aff: { pierce: 'resist', elec: 'weak' }, user: 'aigis', evolves: 'athena', evolve: { lvl: 28 }, blurb: 'A golden shield-goddess with wings like blades.' },
    athena: { name: 'Athena', arcana: 'Chariot', art: A + 'athena.webp', aff: { pierce: 'null', strike: 'resist', elec: 'weak' }, user: 'aigis', bonus: { st: 3, en: 3, hp: 30 },
      learn: [[28, 'myriad_shots', 'arrow_rain'], [31, 'marakukaja']], blurb: 'Aigis’s awakened Persona.' },
    lucia: { name: 'Lucia', arcana: 'Priestess', art: A + 'lucia.webp', aff: {}, user: 'fuuka', evolves: 'juno', evolve: { op: 'lovers' }, blurb: 'Fuuka’s navigator Persona. She sees every Shadow’s heart.' },
    // The searchers' Personas (Kat's picks, 2026-10-20). Ids stay 'p-<member>' so saves keep working.
    'p-jihoon': { name: 'Dokkaebi', ko: '도깨비', arcana: 'Hunger', art: A + 'dokkaebi.webp', aff: { wind: 'resist', elec: 'weak' }, user: 'jihoon',
      blurb: 'The goblin of the old stories, laughing with a club over his shoulder. Cross him and he’s mean; stay on his side and he’s yours for life.' },
    'p-minji': { name: 'Theia', arcana: 'Moon', art: A + 'theia.webp', aff: { light: 'resist', dark: 'weak' }, user: 'minji',
      blurb: 'The titaness of sight and shining light, the one who sees. Her bow is drawn on whatever’s hiding.' },
    'p-jungwon': { name: 'Hyeonmu', ko: '현무', arcana: 'Hierophant', art: A + 'hyeonmu.webp', aff: { ice: 'resist', fire: 'weak' }, user: 'jungwon',
      blurb: 'The Black Tortoise of the North: winter, ice and a guardian that doesn’t move. A tortoise and a serpent, two beings in one body.' },
    'p-haechan': { name: 'Dalnim', ko: '달님', arcana: 'Universe', art: A + 'dalnim.webp', aff: { dark: 'resist', elec: 'resist', light: 'weak' }, user: 'haechan',
      blurb: 'Lord Moon. In the old tale, Haenim and Dalnim are the sister and brother who became the sun and the moon. He keeps the sky she leaves.' },
    juno: { name: 'Juno', arcana: 'Priestess', art: A + 'juno.webp', aff: {}, user: 'fuuka', blurb: 'Fuuka’s awakened Persona. Her scans now map a whole Tartarus floor at once.' }
  };

  /* Theurgy presentation (battle.js theurgyCut; art made with tools/femc-theurgy.py). Each `theurgy` can carry:
       img:    the full-screen cut-in still. Played P3R-style: a diagonal mask slides it in, it pans and zooms, light sweeps.
       focus:  [x%, y%] of the face in img (phones crop to a band around it; the impact burst lands near it).
       layers: { bg, persona, char } pieces cut apart: the bg sweeps in, the Persona rises behind, the character slides in.
               persona/char can be { src, x, y, s } to nudge a piece (x/y in % of the frame, s a scale).
       sheet:  { frames: [wind-up, strike, follow-through] } a 3-panel strike sheet: the character's motion over the backdrop
               (the layers' bg, else img), then the finished cut-in (layers, else img) as the closing shot.
       sequence: [{ src, focus, pan, hit }, ...] (or plain paths) several full-screen panels played as quick crossfades, each
               with a slow zoom and pan (pan: [x%, y%] it drifts from) on its own focus; the impact lands on the `hit` panel
               (else the middle one) and the last one holds. Full version only: set img (and focus) to the last panel, which
               the short band and reduced motion show. Bonds take it too (bonds.js).
       video:  a data.clips key, played in place of img when it's ready.
       forms:  { personaId: { name, img, focus, sheet, ... } } a different look and name per Persona form (Haenim's forms).
               Mechanics always stay the base entry's (and the form's own `theurgy` boost in personas).
     Nobody needs any of it: without art, a stylized cut-in is built from the portrait and Persona art in the member's color. */
  const TH = 'assets/femc/battle/art/theurgy/';
  const sheet3 = slug => ({ frames: [0, 1, 2].map(i => `${TH}${slug}-${i}.webp`) });

  /* Party at level 5. Growth is added per level above 5. (Portrait crops: faceFocus above.)
     wtype: weapon type (gear.js below). learn: [level, skill, replaces?] for the base Persona.
     theurgy: the ultimate move (type: dmg | support | orgia). th: what fills this member's gauge faster (multipliers). sig: signature skills. */
  const party = [
    { id: 'solar', name: 'Solar', persona: 'haenim', weapon: 'pierce', wtype: 'naginata', color: '#ff4f9e',
      base: { hp: 92, sp: 62, st: 8, ma: 10, en: 7, ag: 9, lu: 9 }, growth: { hp: 7, sp: 5, st: 0.8, ma: 1, en: 0.7, ag: 0.8, lu: 0.8 },
      skills: ['agi', 'daybreak', 'golden_rope', 'dia'], learn: [[14, 'agilao', 'agi'], [20, 'diarama', 'dia'], [26, 'maragion']], sig: ['golden_rope', 'daybreak'],
      theurgy: { name: 'Rise and Shine', type: 'dmg', el: 'almighty', weakEl: 'light', look: 'sun', target: 'all', power: 175, down: 0.55, img: TH + 'solar-haenim.webp', focus: [57, 46], sheet: sheet3('solar-strike-b'), video: 'theurgy_solar',
        // Kat's two strike sheets: the star-pinned one (a) is Nike's; the red-tasseled naginata (b) plays for the other forms.
        forms: {
          'haenim-sunna': { name: 'Golden Hour', img: TH + 'solar-sunna.webp', focus: [41, 43] },
          'haenim-mazu': { name: 'Spring Tide', img: TH + 'solar-mazu.webp', focus: [45, 35] },
          'haenim-nike': { name: 'Landslide', img: TH + 'solar-nike.webp', focus: [56, 39], sheet: sheet3('solar-strike-a') },
          'haenim-unveiled': { name: 'Unveiled', img: TH + 'solar-unveiled.webp', focus: [52, 48] }
        },
        desc: 'Haenim lifts her veil and the sun pours out. Massive Light/Almighty damage to all foes; it may knock them Down (a Light weakness always does).' },
      // Evoker summon sheet (Kat's 3 full-body panels: Evoker raised, the shot, Evoker lowered): played on the battlefield figure
      // and in the summon cut-in (battle.js evoker / fieldEvoke). Any member can get one; without it nothing changes.
      evoker: { frames: [0, 1, 2].map(i => `assets/femc/battle/art/summon/solar-evoke-${i}.webp`) },
      role: 'Leader · Light · Golden Rope', faces: { idle: 'serious', win: 'happy', hurt: 'surprised', ko: 'sad' },
      lines: { turn: 'Let’s go, Haenim.', onemore: 'Again.', shift: 'Your turn!', allout: 'Now. Everyone!', finish: 'Rise and shine.', theurgy: 'Look at me. Rise and shine.', allyDown: ["{name}! Stay with me.", "No. Not you. Get up, {name}."], allyLow: ["{name}, hang on. I’ve got you.", "Fall back, {name}. I mean it."], weak: ["Found it.", "There it is."], downed: ["Ow. Rude.", "I’m fine. I’m fine."], boss: ["Okay. Big one.", "Eyes up, everyone. This one’s different."], win: ["Good work, everyone.", "That’s that.", "Rise and shine."], thReady: ["Haenim’s ready.", "Hold on. I’ve got something."] } },
    { id: 'akihiko', name: 'Akihiko', persona: 'polydeuces', weapon: 'strike', wtype: 'gloves', color: '#ff9a3d',
      base: { hp: 100, sp: 44, st: 11, ma: 7, en: 8, ag: 12, lu: 6 }, growth: { hp: 8, sp: 3, st: 1, ma: 0.6, en: 0.8, ag: 1, lu: 0.5 },
      skills: ['zio', 'sonic_punch'], learn: [[8, 'tarunda'], [12, 'zionga', 'zio'], [16, 'kill_rush'], [19, 'mazio'], [21, 'rakunda']], sig: ['sonic_punch', 'kill_rush', 'tarunda', 'corkscrew'], th: { ail: 1.5, buff: 1.4 },
      theurgy: { name: 'Lightning Cadenza', type: 'dmg', el: 'elec', look: 'elec', target: 'one', power: 58, multi: [5, 5], down: 0.35, ail: { id: 'shock', chance: 0.35 }, img: TH + 'akihiko.webp', focus: [48, 50], sheet: sheet3('akihiko-strike'), desc: 'A five-punch flurry wrapped in lightning. Heavy Elec damage to one foe; may Shock it.' },
      evoker: { shot: 'assets/femc/battle/art/summon/akihiko-evoker.webp', at: [42.9, 29.6], pos: '45% 30%', posPhone: '45% 25%' }, // Kat's close-up (FEMC-ART-TODO 4A): battle.js evoker
      role: 'Elec · Strike · Fast', faces: { idle: 'serious', win: 'happy', hurt: 'surprised', ko: 'sad' },
      lines: { turn: 'Let’s see what you’ve got.', onemore: 'Not done yet!', shift: 'Over to you!', finish: 'That’s how it’s done!', theurgy: 'Here’s my full power!', allyDown: ["{name}! Damn it!", "Hang in there, {name}. We’re finishing this."], allyLow: ["{name}, fall back! I’ll cover you.", "Don’t push it, {name}."], solarHurt: ["Solar! You okay?", "Hey! Eyes on me. I’ve got your flank."], weak: ["There’s the opening!", "Ha! Felt that one, didn’t you?"], downed: ["Tch. Just a slip.", "That all you’ve got?"], boss: ["Now this is a real fight.", "Finally. Something worth training for."], win: ["Good workout.", "Not bad. Same time tomorrow?", "That’s how it’s done!"], thReady: ["I’m all warmed up!", "Let me go all out!"] },
      banter: {crit: [{r: 6, l: ["Nice! That’s… yeah. That’s my partner.", "Say that slower next time."]}, {r: 9, l: ["You’ve been training without me.", "Maybe I’ve been watching you train."]}], hurt: [{r: 6, l: ["Hey! You’re bleeding. After this, you’re sitting down.", "Bossy."]}, {r: 9, l: ["Breathe. I’m right here.", "I know. That’s why I’m not worried."]}], win: [{r: 6, l: ["Not bad, partner. Walk you back?", "It’s the same dorm, Akihiko."]}, {r: 9, l: ["You were incredible tonight.", "You were watching me again."]}]} },
    { id: 'yukari', name: 'Yukari', persona: 'io', weapon: 'pierce', wtype: 'bow', color: '#ff8cc0',
      base: { hp: 84, sp: 70, st: 6, ma: 11, en: 6, ag: 10, lu: 9 }, growth: { hp: 6, sp: 6, st: 0.5, ma: 1, en: 0.6, ag: 0.9, lu: 0.8 },
      skills: ['garu', 'dia', 'media'], learn: [[8, 'patra'], [12, 'garula', 'garu'], [15, 'dekunda'], [18, 'magaru'], [20, 'recarm']], sig: ['media', 'dia', 'gale_arrow'], th: { heal: 1.6 },
      theurgy: { name: 'Cadenza', type: 'support', heal: 1, cure: true, buffs: ['agi', 'def'], look: 'heal', img: TH + 'yukari.webp', focus: [45, 47], sheet: sheet3('yukari-strike'), desc: 'Isis’s song. Fully heals the party, cures ailments, and raises agility and defense.' },
      evoker: { shot: 'assets/femc/battle/art/summon/yukari-evoker.webp', at: [48.5, 30.5], pos: '48% 30%', posPhone: '52% 25%' }, // Kat's close-up (batch 55): battle.js evoker
      role: 'Wind · Healer', faces: { idle: 'serious', win: 'neutral', hurt: 'surprised', ko: 'sad' },
      lines: { turn: 'I’ve got your back.', onemore: 'One more!', shift: 'Take it!', finish: 'Hmph. Serves you right!', theurgy: 'Everyone, hold on!', allyDown: ["{name}! No, no, no…", "Hang on, {name}! I’m coming!"], allyLow: ["{name}, stay behind me. I’ll patch you up.", "You look awful, {name}. Hold still."], solarHurt: ["Solar! Don’t you dare go down!", "Hey, careful! I can only heal so fast!"], weak: ["Bullseye!", "Got it!"], downed: ["Ow! Seriously?!", "Ugh, that’s embarrassing."], boss: ["Okay… that one’s huge.", "Everybody stay together, okay?"], win: ["Phew. We did it.", "Hmph. Serves you right!", "Everyone okay? Good."], thReady: ["Isis is ready. Just say the word.", "I can feel it. Leave it to me!"] } },
    { id: 'junpei', name: 'Junpei', persona: 'hermes', weapon: 'slash', wtype: 'greatsword', color: '#7fb6ff',
      base: { hp: 110, sp: 40, st: 12, ma: 7, en: 9, ag: 7, lu: 7 }, growth: { hp: 9, sp: 3, st: 1, ma: 0.5, en: 0.9, ag: 0.6, lu: 0.6 },
      skills: ['agi', 'cleave'], learn: [[9, 'rakukaja'], [12, 'agilao', 'agi'], [15, 'power_slash', 'cleave'], [19, 'maragi']], sig: ['cleave', 'power_slash', 'fastball'], th: { crit: 1.6 },
      theurgy: { name: 'Brave Blade', type: 'dmg', el: 'slash', look: 'slash', target: 'one', power: 300, crit: 100, sure: true, down: 0.5, img: TH + 'junpei.webp', focus: [51, 47], sheet: sheet3('junpei-strike'), desc: 'One huge swing. Severe Slash damage to one foe; always a critical hit.' },
      evoker: { shot: 'assets/femc/battle/art/summon/junpei-evoker.webp', at: [51, 19.5], pos: '45% 25%', posPhone: '54% 20%' }, // Kat's close-up (batch 55): battle.js evoker
      role: 'Fire · Slash · Tank', faces: { idle: 'serious', win: 'happy', hurt: 'surprised', ko: 'sad' },
      lines: { turn: 'Watch this!', onemore: 'Heh, too easy!', shift: 'Go for it!', finish: 'Clutch hitter, baby!', theurgy: 'Home run, baby!', allyDown: ["{name}?! Dude, get up!", "Aw man, {name}! Hang in there!"], allyLow: ["{name}, take a breather. I got this!", "Yo, {name}, you’re lookin’ rough!"], solarHurt: ["Whoa, Solar! You good?!", "Hey! Nobody hits our leader!"], weak: ["Right in the sweet spot!", "Booyah!"], downed: ["Ow, ow, ow… that’s a foul!", "I’m good! I’m good… I think."], boss: ["Uh… is it just me, or is that thing huge?", "Big game, huh? Bring it on!"], win: ["Clutch hitter, baby!", "The ace comes through again!", "Heh. Too easy."], thReady: ["Bases loaded, baby!", "Time for the big swing!"] } },
    { id: 'mitsuru', name: 'Mitsuru', persona: 'penthesilea', weapon: 'pierce', wtype: 'rapier', color: '#ff5b5b',
      base: { hp: 90, sp: 68, st: 8, ma: 12, en: 7, ag: 10, lu: 7 }, growth: { hp: 7, sp: 5, st: 0.7, ma: 1.1, en: 0.7, ag: 0.9, lu: 0.6 },
      skills: ['bufu', 'marin_karin', 'tarukaja'], learn: [[12, 'bufula', 'bufu'], [15, 'dekaja'], [17, 'mabufu'], [20, 'me_patra']], sig: ['marin_karin', 'bufu', 'bufula', 'glacial_fleche'], th: { ail: 1.6 },
      theurgy: { name: 'Bufudyne Execution', type: 'dmg', el: 'ice', look: 'ice', target: 'all', power: 150, down: 0.4, ail: { id: 'freeze', chance: 0.35 }, img: TH + 'mitsuru.webp', focus: [49, 40], sheet: sheet3('mitsuru-strike'), desc: 'Artemisia’s judgment. Heavy Ice damage to all foes; may Freeze them.' },
      evoker: { shot: 'assets/femc/battle/art/summon/mitsuru-evoker.webp', at: [40.5, 25], pos: '42% 30%', posPhone: '39% 25%' }, // Kat's close-up (batch 55): battle.js evoker
      role: 'Ice · Charm · Support', faces: { idle: 'neutral', win: 'neutral', hurt: 'surprised', ko: 'sad' },
      lines: { turn: 'Leave it to me.', onemore: 'Excellent.', shift: 'Your opening.', finish: 'Execution!', theurgy: 'Bow before the ice.', allyDown: ["{name}! …I won’t forgive this.", "Hold on, {name}. We’ll end this quickly."], allyLow: ["{name}, fall back and recover.", "Don’t be reckless, {name}."], solarHurt: ["Solar, are you all right?", "Our leader is hurt. Focus, everyone!"], weak: ["Brilliant.", "As expected."], downed: ["Hmph… a lapse in focus.", "I won’t make that mistake twice."], boss: ["This is the real threat. Stay sharp.", "Everyone, formation. Now."], win: ["Execution complete.", "Well done, all of you.", "Excellent work."], thReady: ["Artemisia is ready.", "Allow me to end this."] } },
    { id: 'aigis', name: 'Aigis', persona: 'palladion', weapon: 'pierce', wtype: 'gun', color: '#ffd36b',
      base: { hp: 112, sp: 40, st: 12, ma: 6, en: 11, ag: 8, lu: 6 }, growth: { hp: 9, sp: 3, st: 1, ma: 0.5, en: 1, ag: 0.7, lu: 0.5 },
      skills: ['twin_shot', 'cleave', 'tarunda'], learn: [[12, 'rakukaja'], [16, 'arrow_rain'], [20, 'matarunda', 'tarunda']], sig: ['twin_shot', 'arrow_rain', 'missile_salvo'],
      theurgy: { name: 'Orgia Mode', type: 'orgia', el: 'pierce', look: 'pierce', target: 'rand', power: 46, multi: [4, 6], turns: 3, img: TH + 'aigis.webp', focus: [51, 45], sheet: sheet3('aigis-strike'), desc: 'Limiters off. A storm of fire to random foes, then for 3 turns her attacks hit twice and her attack is up.' },
      evoker: { shot: 'assets/femc/battle/art/summon/aigis-evoker.webp', at: [49, 23], pos: '50% 30%', posPhone: '54% 25%' }, // Kat's close-up (batch 55): battle.js evoker
      role: 'Gunfire · Pierce · Debuff', faces: { idle: 'serious', win: 'happy', hurt: 'surprised', ko: 'sad' },
      lines: { turn: 'Engaging the enemy.', onemore: 'Target is down.', shift: 'Handing over.', finish: 'Hostiles eliminated.', theurgy: 'Orgia Mode, activate.', allyDown: ["{name} is down. Engaging protective measures.", "I will not let that happen again."], allyLow: ["{name}, your vital signs are low. Please retreat.", "Covering {name}."], solarHurt: ["Solar is injured. I must protect her.", "Priority target: whatever hurt Solar."], weak: ["Weak point confirmed.", "Direct hit."], downed: ["Balance compromised. Recalibrating.", "A minor malfunction."], boss: ["High-threat Shadow detected.", "Adjusting combat parameters. Engaging."], win: ["Hostiles eliminated.", "Mission complete. Everyone is safe.", "All clear."], thReady: ["Orgia Mode is available.", "Power output at maximum."] } },
    { id: 'ken', name: 'Ken', persona: 'nemesis', weapon: 'pierce', wtype: 'spear', color: '#ffb36b',
      base: { hp: 80, sp: 64, st: 7, ma: 11, en: 6, ag: 9, lu: 10 }, growth: { hp: 6, sp: 5, st: 0.6, ma: 1, en: 0.6, ag: 0.8, lu: 0.9 },
      skills: ['zio', 'hama', 'dia'], learn: [[12, 'zionga', 'zio'], [14, 'media'], [17, 'hamaon', 'hama'], [20, 'rakukaja']], sig: ['hama', 'hamaon', 'dia', 'justice_lance'], th: { heal: 1.3 },
      theurgy: { name: 'Kala’s Judgment', type: 'dmg', el: 'light', look: 'light', target: 'all', power: 140, down: 0.4, heal: 0.3, img: TH + 'ken.webp', focus: [53, 62], sheet: sheet3('ken-strike'), desc: 'The spear of retribution. Heavy Light damage to all foes, and the party heals 30%.' },
      role: 'Elec · Light · Healer', faces: { idle: 'serious', win: 'happy', hurt: 'sad', ko: 'sad' },
      lines: { turn: 'I can do this!', onemore: 'Got it!', shift: 'Go ahead!', finish: 'Did you see that?!', theurgy: 'This is my justice!', allyDown: ["{name}! I’ll fight for both of us!", "Please, {name}, get up!"], allyLow: ["{name}, I’ll heal you right away!", "Stay back, {name}. I’ve got this!"], solarHurt: ["Solar! Are you okay?!", "I won’t let them hurt you, Solar!"], weak: ["I got it!", "Just like Featherman!"], downed: ["I-I’m fine! Really!", "That won’t stop me!"], boss: ["It’s huge… but I’m not scared!", "This is it. I can do this."], win: ["We did it! Did you see?", "Justice wins!", "I’m… I’m not tired at all."], thReady: ["I’m ready! This is my justice!", "Let me handle this one!"] } },
    { id: 'koromaru', name: 'Koromaru', persona: 'cerberus', weapon: 'slash', wtype: 'knife', color: '#e8e8f0',
      base: { hp: 88, sp: 52, st: 10, ma: 9, en: 7, ag: 13, lu: 9 }, growth: { hp: 7, sp: 4, st: 0.9, ma: 0.8, en: 0.7, ag: 1.1, lu: 0.8 },
      skills: ['agi', 'mudo', 'rampage'], learn: [[12, 'agilao', 'agi'], [15, 'double_fangs'], [18, 'mudoon', 'mudo'], [21, 'maragion']], sig: ['mudo', 'mudoon', 'rampage', 'three_heads'], th: { kill: 1.6 },
      theurgy: { name: 'Hellfire Howl', type: 'dmg', el: 'fire', look: 'fire', target: 'all', power: 150, down: 0.4, ail: { id: 'fear', chance: 0.35 }, img: TH + 'koromaru.webp', focus: [46, 48], sheet: sheet3('koromaru-strike'), desc: 'Cerberus’s three-headed howl. Heavy Fire damage to all foes; may terrify them.' },
      role: 'Fire · Dark · Speed', faces: { idle: 'serious', win: 'happy', hurt: 'sad', ko: 'sad' },
      lines: { turn: 'Woof!', onemore: 'Arf arf!', shift: '*nudges you*', finish: 'Awoooo!', theurgy: 'AWOOOOO!', allyDown: ["*whimpers*", "Arf! Arf arf!"], allyLow: ["*nudges {name}*", "*growls, guarding {name}*"], solarHurt: ["*barks fiercely*", "*plants himself in front of Solar*"], weak: ["Arf!", "*wags proudly*"], downed: ["*yelps*", "*shakes it off*"], boss: ["*growls low*", "*hackles up*"], win: ["Awoooo!", "*happy tail wags*", "Woof!"], thReady: ["Grrr… AWOO!", "*eyes blazing*"] } },
    { id: 'shinjiro', name: 'Shinjiro', persona: 'castor', weapon: 'strike', wtype: 'axe', color: '#c43b3b', acc: -6,
      base: { hp: 124, sp: 34, st: 15, ma: 5, en: 10, ag: 5, lu: 5 }, growth: { hp: 10, sp: 2, st: 1.3, ma: 0.4, en: 0.9, ag: 0.4, lu: 0.4 },
      skills: ['assault_dive', 'fatal_end'], learn: [[14, 'rakunda'], [18, 'heat_wave']], sig: ['fatal_end', 'assault_dive', 'haymaker'], th: { hurt: 2 },
      theurgy: { name: 'Castor’s Charge', type: 'dmg', el: 'strike', look: 'strike', target: 'one', power: 340, sure: true, crit: 30, down: 0.6, img: TH + 'shinjiro.webp', focus: [42, 49], sheet: sheet3('shinjiro-strike'), desc: 'Castor runs it down. Colossal Strike damage to one foe; it never misses.' },
      evoker: { shot: 'assets/femc/battle/art/summon/shinjiro-evoker.webp', at: [24, 24], pos: '10% 30%', posPhone: '28% 25%' }, // Kat's close-up (FEMC-ART-TODO 4A): battle.js evoker
      role: 'Heavy strike · Low accuracy', faces: { idle: 'neutral', win: 'happy', hurt: 'surprised', ko: 'sad' },
      lines: { turn: 'Tch. Fine.', onemore: 'Stay down.', shift: 'Your turn.', finish: 'Heh. Not bad.', theurgy: 'Get outta my way.', allyDown: ["{name}… Tch. Get back up.", "Damn it. Not on my watch."], allyLow: ["{name}, quit bein’ stupid and fall back.", "You look like hell, {name}. Back off."], solarHurt: ["Oi. You alright?", "Hey. Don’t make me worry."], weak: ["Heh. Got it.", "Found the soft spot."], downed: ["Tch… cheap shot.", "That all?"], boss: ["Big one. Stay outta my way.", "Heh. This one’s mine."], win: ["Heh. Not bad.", "Done. Let’s go home.", "Tch. Finally."], thReady: ["Castor’s itchin’ to go.", "Stand back. I’m not holdin’ it in."] },
      banter: {crit: [{r: 6, l: ["…Heh. Not bad.", "From you, that’s practically a speech."]}], hurt: [{r: 6, l: ["Oi. Who said you could get hit like that?", "Sorry. Next time I’ll ask."]}, {r: 9, l: ["Don’t make me worry like that.", "Then stay close."]}], win: [{r: 6, l: ["Eat somethin’ when we get back. I’ll make it.", "You’re cooking? For me?"]}]} }
  ];
  /* Searchers who fight (life sim only, after they awaken: searcher: true keeps them out of the prototype's own screens).
     Their Personas: Dokkaebi, Theia, Hyeonmu and Dalnim. No finish art yet (their portrait stands in). */
  party.push(
    { id: 'jihoon', name: 'Jihoon', persona: 'p-jihoon', weapon: 'strike', wtype: 'gloves', color: '#7dd3ff', searcher: true,
      base: { hp: 104, sp: 46, st: 11, ma: 8, en: 9, ag: 9, lu: 8 }, growth: { hp: 8, sp: 3.5, st: 1, ma: 0.7, en: 0.8, ag: 0.8, lu: 0.7 },
      skills: ['garu', 'sonic_punch', 'tarukaja', 'goblin_club'], learn: [[24, 'garula', 'garu'], [28, 'magaru'], [32, 'kill_rush']], sig: ['sonic_punch', 'garula', 'goblin_club', 'goblin_fire'], th: { buff: 1.4, hurt: 1.3 },
      theurgy: { name: 'Light of Your Life', type: 'dmg', el: 'wind', look: 'wind', target: 'all', power: 150, down: 0.4, img: TH + 'jihoon.webp', focus: [50, 42], sheet: sheet3('jihoon-strike'), desc: 'Loud, vain and enormous. Heavy Wind damage to all foes.' },
      role: 'Wind · Strike · Buffs', faces: { idle: 'serious', win: 'happy', hurt: 'surprised', ko: 'sad' },
      lines: { turn: 'Watch me. Everybody watch me.', onemore: 'Again! I’m on fire!', shift: 'Sol, you’re up!', finish: 'Light of your life, baby!', theurgy: 'Look at me. LOOK AT ME.', allyDown: ["{name}?! Nobody falls while the almighty Hoon is here!", "Get up, {name}. That’s a royal order."], allyLow: ["{name}, you look terrible. Stand behind greatness.", "Fall back, {name}. I’ll be iconic for both of us."], solarHurt: ["SOL. Who touched you? Name them.", "Hey! Only I get to bully her!"], weak: ["Astonishing. I’m astonishing.", "A weak spot? I wouldn’t know. I don’t have one."], downed: ["A Grave Sin. Against ME.", "I’m fine. I’m gorgeous and fine."], boss: ["Oh, finally. A worthy audience.", "Big guy. Bigger ego than mine? Doubt it."], win: ["Light of your life, baby!", "You may applaud.", "The almighty Hoon remains undefeated."], thReady: ["Everybody look at me. Seriously.", "Dokkaebi’s laughing. Bad news for them."] },
      banter: {crit: [{r: 6, l: ["Okay, that was almost as good as me. Almost.", "Almost? I’ll take it."]}], hurt: [{r: 6, l: ["Hey. Ungrateful rug. You good? …Don’t make it a thing.", "Wasn’t going to."]}], win: [{r: 6, l: ["Admit it. You missed fighting next to me.", "Don’t push it, Park Jihoon."]}, {r: 9, l: ["Best duo in every world. Obviously.", "Obviously."]}]} },
    { id: 'minji', name: 'Minji', persona: 'p-minji', weapon: 'pierce', wtype: 'bow', color: '#ffe6a8', searcher: true,
      base: { hp: 84, sp: 68, st: 7, ma: 11, en: 7, ag: 10, lu: 10 }, growth: { hp: 6, sp: 5.5, st: 0.6, ma: 1, en: 0.6, ag: 0.9, lu: 0.9 },
      skills: ['hama', 'dia', 'tarunda', 'twin_shot', 'clear_sight'], learn: [[26, 'media'], [30, 'diarama', 'dia'], [34, 'hamaon', 'hama']], sig: ['hama', 'dia', 'clear_sight', 'focus_pull'], th: { heal: 1.4 },
      theurgy: { name: 'Final Cut', type: 'dmg', el: 'light', look: 'light', target: 'all', power: 140, down: 0.45, heal: 0.25, img: TH + 'minji.webp', focus: [45, 60], sheet: sheet3('minji-strike'), desc: 'One perfect frame. Heavy Light damage to all foes, and the party heals 25%.' },
      role: 'Light · Healer', faces: { idle: 'serious', win: 'happy', hurt: 'surprised', ko: 'sad' },
      lines: { turn: 'I’ve got you in frame.', onemore: 'Rolling!', shift: 'Your shot.', finish: 'Cut. Print.', theurgy: 'Look at the camera.', allyDown: ["{name}! That’s not the shot. Get up!", "Stay in frame, {name}. Please."], allyLow: ["{name}, step back. I’ve got you covered.", "Hold on, {name}. Healing."], solarHurt: ["Sol! You okay? Talk to me.", "Hey. Nobody touches my lead."], weak: ["Clean hit.", "Got the angle."], downed: ["Okay… blooper reel.", "Ow. Cut, cut."], boss: ["That’s a big set piece.", "Wide shot. Everybody careful."], win: ["Cut. Print.", "That’s a wrap.", "GG."], thReady: ["I’ve got the shot lined up.", "Theia sees everything. Ready."] },
      banter: {crit: [{r: 6, l: ["Can I keep that one? I’m keeping that one.", "You didn’t even film it."]}], hurt: [{r: 6, l: ["Sol. Hey. Eyes on me. You’re okay.", "I’m okay. Keep talking."]}], win: [{r: 6, l: ["duo diff. ;]", "Did you just say a winky face out loud?"]}, {r: 9, l: ["Hold still. The light’s good.", "Are you filming?"]}]} },
    { id: 'jungwon', name: 'Jungwon', persona: 'p-jungwon', weapon: 'pierce', wtype: 'rapier', color: '#9fe8ff', searcher: true,
      base: { hp: 92, sp: 60, st: 9, ma: 11, en: 8, ag: 11, lu: 8 }, growth: { hp: 7, sp: 4.5, st: 0.8, ma: 1, en: 0.7, ag: 1, lu: 0.7 },
      skills: ['bufu', 'rakunda', 'rakukaja', 'serpent_coil'], learn: [[30, 'bufula', 'bufu'], [34, 'mabufu']], sig: ['bufu', 'bufula', 'serpent_coil', 'black_tortoise'], th: { ail: 1.3, crit: 1.3 },
      theurgy: { name: 'Perfect Composure', type: 'dmg', el: 'ice', look: 'ice', target: 'all', power: 150, down: 0.4, ail: { id: 'freeze', chance: 0.3 }, img: TH + 'jungwon.webp', focus: [50, 37], sheet: sheet3('jungwon-strike'), desc: 'The angrier he gets, the more polite. Heavy Ice damage to all foes; may Freeze.' },
      evoker: { shot: 'assets/femc/battle/art/summon/jungwon-evoker.webp', at: [51.5, 23.5], pos: '50% 30%', posPhone: '55% 25%' }, // Kat's close-up (batch 55): battle.js evoker
      role: 'Ice · Precision · Debuffs', faces: { idle: 'serious', win: 'happy', hurt: 'surprised', ko: 'sad' },
      lines: { turn: 'Excuse me.', onemore: 'Pardon me. Again.', shift: 'After you.', finish: 'Thank you for your patience.', theurgy: 'Please. Stay down.', allyDown: ["{name}, please stay down. I’ll handle this.", "That was unnecessary. I’ll be addressing it."], allyLow: ["{name}, please step back. That’s a suggestion.", "Have you eaten today, {name}? …Later. Fall back."], solarHurt: ["Are you hurt? Please don’t say “fine.”", "I’d like a word with whoever did that."], weak: ["Noted.", "As I thought."], downed: ["How rude.", "Pardon me. A moment."], boss: ["Let’s be precise about this.", "Everyone, please keep your composure."], win: ["Thank you for your patience.", "That concludes it.", "Well done. Truly."], thReady: ["Hyeonmu is ready, if you’ll allow me.", "Please stand back."] },
      banter: {crit: [{r: 6, l: ["That was very efficient.", "Was that a compliment?"]}], hurt: [{r: 6, l: ["Excuse me. I’ll be taking that one personally.", "Politely, I hope."]}, {r: 9, l: ["Please don’t do that again. I’m asking nicely.", "You’re always asking nicely."]}], win: [{r: 6, l: ["Have you eaten? I’m asking. For once, I’m the one asking.", "Look at you, taking care of me."]}, {r: 9, l: ["You were remarkable. I’m saying it formally.", "Now say it informally."]}]} },
    { id: 'haechan', name: 'Haechan', persona: 'p-haechan', weapon: 'slash', wtype: 'knife', color: '#ff9a3d', searcher: true,
      base: { hp: 96, sp: 52, st: 11, ma: 9, en: 8, ag: 12, lu: 9 }, growth: { hp: 7.5, sp: 4, st: 1, ma: 0.8, en: 0.7, ag: 1.1, lu: 0.8 },
      skills: ['zio', 'cleave', 'rakunda', 'waning_moon'], learn: [[38, 'zionga', 'zio'], [40, 'mudo'], [42, 'mazio'], [44, 'power_slash', 'cleave']], sig: ['cleave', 'zionga', 'waning_moon', 'moon_static'], th: { crit: 1.4, kill: 1.3 },
      theurgy: { name: 'Every Universe', type: 'dmg', el: 'elec', look: 'elec', target: 'all', power: 155, down: 0.45, ail: { id: 'shock', chance: 0.3 },
        img: TH + 'haechan.webp', focus: [48, 40], sheet: sheet3('haechan-strike'),
        layers: { bg: TH + 'haechan-bg.webp', persona: { src: TH + 'haechan-persona.webp', x: 14, y: -6, s: 0.92 }, char: { src: TH + 'haechan-char.webp', x: -8 } },
        desc: 'He doesn’t lose. Heavy Elec damage to all foes; may Shock.' },
      evoker: { shot: 'assets/femc/battle/art/summon/haechan-evoker.webp', at: [41.5, 27], pos: '42% 30%', posPhone: '45% 25%' }, // Kat's close-up (batch 55): battle.js evoker
      role: 'Elec · Dark · Slash', faces: { idle: 'serious', win: 'happy', hurt: 'surprised', ko: 'sad' },
      lines: { turn: 'Yeah, yeah. I got it.', onemore: 'Again. Obviously.', shift: 'Go, princess.', finish: 'Told you.', theurgy: 'Every single universe.', allyDown: ["{name}. Get up. That’s not a request.", "Oh, come on. {name}, up."], allyLow: ["{name}, you’re doing the thing where you pretend you’re fine.", "Back off, {name}. I’ve got it."], solarHurt: ["Princess. Look at me. You good?", "Agasshi. Stay behind me for once."], weak: ["Heard that one coming.", "Wow. That easy?"], downed: ["Okay. Ow.", "I meant to do that."], boss: ["Huh. Loud one.", "Okay. Everybody stop talking."], win: ["Told you.", "That’s it? Okay.", "Light work."], thReady: ["Dalnim’s awake.", "Hold on. My turn to be loud."] },
      banter: {crit: [{r: 6, l: ["Wow. Okay. Show-off.", "You love it."]}, {r: 9, l: ["PRINCESS. Did you SEE that? Everybody saw that.", "Everybody heard you, too."]}], hurt: [{r: 6, l: ["You’re doing the thing where you pretend it didn’t hurt.", "It didn’t. Much."]}, {r: 9, l: ["Hey. Look at me. Not them. Me.", "…Okay. I’m looking."]}], win: [{r: 6, l: ["Told you. We’re good at this.", "“We”?"]}, {r: 9, l: ["Every universe, huh.", "Don’t get sappy on me."]}]} }
  );
  /* The party before anyone picks one (and for old saves): Solar plus these three. */
  const defaultParty = ['akihiko', 'yukari', 'junpei'];

  /* Theurgy gauge (0 to 100): base gains per event, scaled by a member's `th` multipliers. It carries over between battles. */
  const theurgyGain = { weak: 9, crit: 9, kill: 4, heal: 7, buff: 5, ail: 7, sig: 10, hurt: 3 };

  /* Items. use: battle | field | both (field = from the map or the hub). tier: when shops start selling it (1 + ops cleared).
     icon: one of the item icons in icons.js. */
  const items = {
    medicine: { name: 'Medicine', type: 'heal', target: 'ally', hp: 60, price: 150, tier: 1, icon: 'medicine', use: 'both', desc: 'Restores 60 HP to one ally.' },
    bead: { name: 'Bead', type: 'heal', target: 'ally', hp: 9999, price: 1200, tier: 3, icon: 'bead', use: 'both', desc: 'Fully restores one ally’s HP.' },
    bead_chain: { name: 'Bead Chain', type: 'heal', target: 'allies', hp: 0.5, price: 2600, tier: 5, icon: 'bead', use: 'both', desc: 'Restores half of everyone’s HP.' },
    snuff_soul: { name: 'Snuff Soul', type: 'sp', target: 'ally', sp: 20, price: 700, tier: 1, icon: 'soul', use: 'both', desc: 'Restores 20 SP to one ally.' },
    chewing_soul: { name: 'Chewing Soul', type: 'sp', target: 'ally', sp: 50, price: 1800, tier: 4, icon: 'soul', use: 'both', desc: 'Restores 50 SP to one ally.' },
    soma: { name: 'Soma', type: 'full', target: 'allies', price: 9000, tier: 3, icon: 'soma', use: 'both', desc: 'Fully restores the whole party’s HP and SP.' },
    revival_bead: { name: 'Revival Bead', type: 'revive', target: 'dead', hp: 0.5, price: 800, tier: 1, icon: 'revive', use: 'both', desc: 'Revives a fallen ally with half their HP.' },
    patra_gem: { name: 'Patra Gem', type: 'cure', target: 'ally', cures: ['charm', 'fear', 'distress', 'freeze', 'shock', 'bind'], price: 200, tier: 1, icon: 'gem', use: 'battle', desc: 'Cures Charm, Fear, Distress, Freeze and Shock on one ally.' },
    dis_poison: { name: 'Dis-Poison', type: 'cure', target: 'ally', cures: ['poison'], price: 100, tier: 1, icon: 'antidote', use: 'battle', desc: 'Cures Poison on one ally.' },
    dekaja_gem: { name: 'Dekaja Gem', type: 'dispel', target: 'foes', dispel: 'buffs', price: 500, tier: 2, icon: 'gem', use: 'battle', desc: 'Strips every buff from the Shadows, even the ones that never wear off.' },
    dekunda_gem: { name: 'Dekunda Gem', type: 'dispel', target: 'allies', dispel: 'debuffs', price: 500, tier: 2, icon: 'gem', use: 'battle', desc: 'Removes every debuff on the party.' },
    traesto_gem: { name: 'Traesto Gem', type: 'escape', target: 'none', price: 400, tier: 1, icon: 'gem', use: 'field', desc: 'Warps the party out of Tartarus from anywhere. Progress since the last access point is lost.' },
    tartarus_key: { name: 'Tartarus Key', type: 'key', target: 'none', price: 1500, tier: 1, icon: 'key', use: 'field', desc: 'An old brass key. Opens one locked chest in Tartarus.' }
  };
  /* What a brand-new save starts with. */
  const startItems = { medicine: 4, snuff_soul: 2, revival_bead: 2, patra_gem: 2, dis_poison: 2 };
  const startYen = 2000;

  /* Materials: Shadows drop them; Mayoido Antiques buys them. */
  const materials = {
    shadow_ash: { name: 'Shadow Ash', price: 40, icon: 'mat-ash', desc: 'Black flakes that never quite settle.' },
    mask_shard: { name: 'Blue Mask Shard', price: 90, icon: 'mat-mask', desc: 'A chip of a Shadow’s blue mask. Still cold.' },
    crimson_lacquer: { name: 'Crimson Lacquer', price: 160, icon: 'mat-lacquer', desc: 'Peeled from Yabbashah’s carved walls.' },
    mirror_shard: { name: 'Mirror Shard', price: 250, icon: 'mat-mirror', desc: 'A sliver of Tziah. Your face looks a second late in it.' },
    rusted_cog: { name: 'Rusted Cog', price: 380, icon: 'mat-cog', desc: 'From a Shadow built like a machine.' },
    stone_heart: { name: 'Stone Heart', price: 520, icon: 'mat-stone', desc: 'Warm, and it beats if you wait long enough.' },
    moon_feather: { name: 'Moonlit Feather', price: 700, icon: 'mat-feather', desc: 'Drifted down from the top of the tower.' },
    arcana_fragment: { name: 'Arcana Fragment', price: 2500, icon: 'mat-arcana', desc: 'What a full-moon Shadow leaves behind.' }
  };

  /* ── Equipment ─────────────────────────────────────
     slot: weapon | armor | acc. Weapons: wtype must match the member's; atk is the Attack command's power.
     Optional on any gear: el (the attack's element), crit, acc, ail {id, chance}, hits [min,max] (attack hits), stats {st,ma,en,ag,lu,hp,sp},
     aff {el: resist|null} (armor/accessories), nullAil [ids], spRegen / hpRegen (per own turn, SP or fraction of max HP), thMult.
     tier: when the shops stock it (1 + full-moon operations cleared). Tier 0 is the gear everyone starts with. */
  const W_ATK = [30, 44, 60, 78, 98, 120, 145, 172];
  const W_PRICE = [0, 900, 2000, 3800, 6200, 9500, 14000, 20000];
  const weaponNames = {
    naginata: ['Practice Naginata', 'Steel Naginata', 'Tomoe Naginata', 'Kikkō Naginata', 'Iwatōshi', 'Moon Reaper', 'Hōzōin Glaive', 'Daybreak Glaive'],
    gloves: ['Leather Gloves', 'Brass Knuckles', 'Iron Fists', 'Kaiser Knuckles', 'Cestus', 'Titan Fists', 'Champion Gloves', 'Caesar’s Cestus'],
    bow: ['Practice Bow', 'Short Bow', 'Composite Bow', 'Yumi', 'Siren Bow', 'Moon Bow', 'Artemis Bow', 'Gandiva'],
    greatsword: ['Practice Sword', 'Zweihänder', 'Claymore', 'Flamberge', 'Nodachi', 'Muramasa', 'Executioner', 'Masakado'],
    rapier: ['Rapier', 'Épée', 'Estoc', 'Saber', 'Colichemarde', 'Tizona', 'Joyeuse', 'Fleuret Glacial'],
    gun: ['Finger Rounds', '9mm Rounds', 'Gatling Arm', 'Rail Rounds', 'Plasma Arm', 'Orgia Cannon', 'Palladion Arm', 'Athena’s Aegis'],
    spear: ['Toy Spear', 'Short Spear', 'Trident', 'Halberd', 'Partisan', 'Brionac', 'Longinus', 'Gungnir'],
    knife: ['Combat Knife', 'Tantō', 'Kodachi', 'Hell Fang', 'Wolf’s Bane', 'Cerberus Fang', 'Orthrus Fang', 'Underworld Fang'],
    axe: ['Lead Pipe', 'Iron Club', 'War Hammer', 'Battle Axe', 'Great Axe', 'Bardiche', 'Labrys', 'Castor’s Wrath']
  };
  /* Small per-type touches so weapons aren't just numbers. */
  const weaponTouch = {
    naginata: { 3: { crit: 4 }, 6: { stats: { ag: 2 } } }, gloves: { 2: { acc: 4 }, 5: { crit: 5 } }, bow: { 3: { acc: 6 }, 6: { stats: { ma: 2 } } },
    greatsword: { 3: { crit: 6 }, 6: { crit: 8 } }, rapier: { 2: { acc: 5 }, 5: { ail: { id: 'freeze', chance: 0.1 } } }, gun: { 0: { hits: [2, 2] } },
    spear: { 3: { stats: { lu: 2 } }, 6: { crit: 6 } }, knife: { 2: { crit: 5 }, 5: { ail: { id: 'fear', chance: 0.1 } } }, axe: { 0: { acc: -4 }, 4: { crit: 8 } }
  };
  const ARMOR = [['Gekkoukan Uniform', 4], ['Chain Vest', 10], ['Riot Vest', 17], ['Battle Coat', 25], ['Kevlar Jacket', 34], ['Ceramic Armor', 44], ['Cyber Plate', 55], ['Soul Mail', 67]];
  const A_PRICE = [0, 700, 1600, 3000, 5000, 8000, 12000, 17000];
  const gear = {};
  Object.entries(weaponNames).forEach(([wt, names]) => names.forEach((name, t) => {
    const atk = wt === 'gun' ? Math.round(W_ATK[t] * 0.62) : W_ATK[t];
    gear[`${wt}${t}`] = Object.assign({ name, slot: 'weapon', wtype: wt, atk, tier: t, price: W_PRICE[t] }, (weaponTouch[wt] || {})[t] || {}, wt === 'gun' ? { hits: [2, 2] } : {});
  }));
  ARMOR.forEach(([name, def], t) => { gear[`armor${t}`] = { name, slot: 'armor', def, tier: t, price: A_PRICE[t] }; });
  Object.assign(gear, {
    // Special armor (Mayoido, locked chests)
    frost_coat: { name: 'Frost Coat', slot: 'armor', def: 20, aff: { ice: 'resist' }, tier: 3, price: 4200, rare: true },
    insulated_vest: { name: 'Insulated Vest', slot: 'armor', def: 20, aff: { elec: 'resist' }, tier: 3, price: 4200, rare: true },
    fireproof_suit: { name: 'Fireproof Suit', slot: 'armor', def: 30, aff: { fire: 'resist' }, tier: 4, price: 6500, rare: true },
    gale_cloak: { name: 'Gale Cloak', slot: 'armor', def: 30, aff: { wind: 'resist' }, tier: 4, price: 6500, rare: true },
    // Element weapons (Mayoido, locked chests): the Attack command takes that element.
    sun_naginata: { name: 'Sun Naginata', slot: 'weapon', wtype: 'naginata', atk: 76, el: 'light', tier: 3, price: 7000, rare: true },
    thunder_fist: { name: 'Thunder Fist', slot: 'weapon', wtype: 'gloves', atk: 76, el: 'elec', tier: 3, price: 7000, rare: true },
    gale_bow: { name: 'Gale Bow', slot: 'weapon', wtype: 'bow', atk: 76, el: 'wind', tier: 3, price: 7000, rare: true },
    blaze_blade: { name: 'Blaze Blade', slot: 'weapon', wtype: 'greatsword', atk: 76, el: 'fire', tier: 3, price: 7000, rare: true },
    ice_rapier: { name: 'Glacial Rapier', slot: 'weapon', wtype: 'rapier', atk: 76, el: 'ice', tier: 3, price: 7000, rare: true },
    // Accessories (Be Blue V)
    power_ring: { name: 'Power Ring', slot: 'acc', icon: 'ring', stats: { st: 3 }, tier: 1, price: 1500 },
    magic_ring: { name: 'Magic Ring', slot: 'acc', icon: 'ring', stats: { ma: 3 }, tier: 1, price: 1500 },
    guard_ring: { name: 'Guard Ring', slot: 'acc', icon: 'ring', stats: { en: 3 }, tier: 1, price: 1500 },
    speed_ring: { name: 'Speed Ring', slot: 'acc', icon: 'ring', stats: { ag: 3 }, tier: 1, price: 1500 },
    lucky_charm: { name: 'Lucky Charm', slot: 'acc', icon: 'charm', stats: { lu: 3 }, tier: 1, price: 1300 },
    rose_barrette: { name: 'Rose Barrette', slot: 'acc', icon: 'barrette', nullAil: ['charm'], tier: 2, price: 2400 },
    calm_amulet: { name: 'Calm Amulet', slot: 'acc', icon: 'amulet', nullAil: ['fear', 'distress'], tier: 2, price: 2200 },
    antidote_charm: { name: 'Antidote Charm', slot: 'acc', icon: 'charm', nullAil: ['poison'], tier: 2, price: 1800 },
    holy_cross: { name: 'Holy Cross', slot: 'acc', icon: 'amulet', aff: { light: 'null' }, tier: 3, price: 3500 },
    black_earring: { name: 'Black Earring', slot: 'acc', icon: 'earring', aff: { dark: 'null' }, tier: 3, price: 3500 },
    sp_bangle: { name: 'Spirit Bangle', slot: 'acc', icon: 'bangle', spRegen: 3, tier: 3, price: 5000, desc: 'Restores 3 SP at the start of each turn.' },
    power_bangle: { name: 'Power Bangle', slot: 'acc', icon: 'bangle', stats: { st: 6 }, tier: 4, price: 6000 },
    magic_bangle: { name: 'Magic Bangle', slot: 'acc', icon: 'bangle', stats: { ma: 6 }, tier: 4, price: 6000 },
    sniper_scope: { name: 'Sniper Scope', slot: 'acc', icon: 'scope', crit: 10, tier: 4, price: 5500 },
    vitality_belt: { name: 'Vitality Belt', slot: 'acc', icon: 'belt', stats: { hp: 40 }, hpRegen: 0.04, tier: 5, price: 9000, desc: '+40 max HP. Restores 4% HP at the start of each turn.' },
    theurgy_charm: { name: 'Sunburst Charm', slot: 'acc', icon: 'sun', thMult: 1.35, tier: 5, price: 9500, desc: 'The Theurgy gauge fills 35% faster.' },
    star_brooch: { name: 'Star Brooch', slot: 'acc', icon: 'star', stats: { st: 4, ma: 4, en: 4, ag: 4, lu: 4 }, tier: 6, price: 15000, rare: true }
  });
  /* Each member starts with tier 0 of their weapon and the school uniform. */
  const startGear = Object.fromEntries(party.map(m => [m.id, { weapon: `${m.wtype}0`, armor: 'armor0', acc: null }]));

  /* Shops on the hub (Paulownia Mall). sells: what kinds appear. bg: storefront art. portrait: shopkeeper (only Kurosawa has one).
     stock: explicit ids; otherwise everything of that kind up to the current tier. buys: materials it buys. */
  const shops = {
    police: { name: 'Police Box', sub: 'Weapons & armor', who: 'Officer Kurosawa', portrait: 'kurosawa', bg: BG + 'policestation-outside.webp', color: '#7fb6ff', sells: ['weapon', 'armor'],
      lines: { hi: ['…You’re out late. I won’t ask why. Take a look.', 'Stay out of trouble. And if you can’t, be ready for it.'], buy: ['Use it well.', 'Hm. Good choice.'], poor: 'You don’t have enough money for that.', bye: 'Be careful out there.' } },
    aohige: { name: 'Aohige Pharmacy', sub: 'Medicine', who: 'The pharmacist', bg: BG + 'aohigepharmacy-outside.webp', color: '#7dffc0', sells: ['item'],
      stock: ['medicine', 'snuff_soul', 'revival_bead', 'patra_gem', 'dis_poison', 'bead', 'dekunda_gem', 'chewing_soul', 'bead_chain'],
      lines: { hi: ['Welcome! Feeling run down? I’ve got just the thing.', 'Ah, a student. Stocking up for a club trip?'], buy: ['Take care of yourself!', 'Thank you very much!'], poor: 'Ah… that’s a little more than you have.', bye: 'Get some rest, okay?' } },
    bebluev: { name: 'Be Blue V', sub: 'Accessories', who: 'The shop clerk', bg: BG + 'bebluev-outside.webp', color: '#6ab0ff', sells: ['acc'],
      lines: { hi: ['Welcome to Be Blue V! Everything here has a little power in it.', 'Looking for something to wear? These stones are said to protect you.'], buy: ['It suits you!', 'May it bring you luck.'], poor: 'Oh, you’re a bit short…', bye: 'Come back soon!' } },
    mayoido: { name: 'Mayoido Antiques', sub: 'Rare goods · buys materials', who: 'The antique dealer', bg: BG + 'mayoidoantiques-outside.webp', color: '#ffd36b', sells: ['item', 'rare'],
      stock: ['tartarus_key', 'traesto_gem', 'dekaja_gem', 'soma', 'sun_naginata', 'thunder_fist', 'gale_bow', 'blaze_blade', 'ice_rapier', 'frost_coat', 'insulated_vest', 'fireproof_suit', 'gale_cloak', 'star_brooch'],
      buys: true,
      lines: { hi: ['Hm? A customer at this hour… I trade in strange things. And I buy them, too.', 'Those bits you bring back from the dark… they fetch a price here.'], buy: ['A fine eye.', 'That one has a story.'], sold: 'Hmhm. A pleasure.', poor: 'Not enough, I’m afraid.', bye: 'Until next time.' } }
  };

  /* Shadows.
     img: a slug in art/shadows/ (sizes come from art/shadows/index.js, made by tools/femc-shadows.py). h: display height in px.
     svg: fallback drawing from shadows.js, used when there's no img. idle: breathe | sway | crawl | float.
     ai: coward | weakest | buffer | exploit | healer | random | a boss gimmick (engine.js). gimmick: see engine.js GIMMICKS.
     exp/yen default from the level (progression.expFor / yenFor). drop: material id (chance progression.dropChance).
     A group can write 'kind@lvl' to use a Shadow at a higher level (stats scale with it). */
  const S = (lvl, k = {}) => ({ lvl, hp: Math.round((26 + lvl * 13.5) * (k.hp || 1)), st: +(4 + lvl * 0.95 * (k.st || 1)).toFixed(1), ma: +(4 + lvl * 0.95 * (k.ma || 1)).toFixed(1),
    en: +(3 + lvl * 0.7 * (k.en || 1)).toFixed(1), ag: +(4 + lvl * 0.8 * (k.ag || 1)).toFixed(1), lu: +(3 + lvl * 0.5 * (k.lu || 1)).toFixed(1) });
  const enemies = {
    // ── Thebel (Lv 3–8)
    maya: { name: 'Cowardly Maya', arcana: 'Magician', lvl: 3, hp: 54, st: 7, ma: 5, en: 4, ag: 6, lu: 4,
      aff: { fire: 'weak', dark: 'resist' }, skills: ['bash', 'tremble'], ai: 'coward', exp: 55, img: 'maya', h: 150, idle: 'breathe', svg: 'maya', drop: 'shadow_ash',
      note: 'A timid Shadow that drifts near the entrance. It trembles more than it fights.' },
    slime: { name: 'Grudge Slime', arcana: 'Moon', lvl: 4, hp: 78, st: 8, ma: 5, en: 6, ag: 4, lu: 3,
      aff: { fire: 'weak', slash: 'resist', pierce: 'resist' }, skills: ['bash', 'e_tarunda', 'e_poisma'], ai: 'weakest', exp: 60, img: 'slime', h: 190, idle: 'breathe', svg: 'maya', drop: 'shadow_ash',
      note: 'It oozes toward whoever looks weakest. Blades sink right in and do nothing.' },
    hand: { name: 'Dancing Hand', arcana: 'Magician', lvl: 4, hp: 70, st: 9, ma: 6, en: 5, ag: 9, lu: 5,
      aff: { elec: 'weak', slash: 'resist', dark: 'null' }, skills: ['lunge', 'e_tarunda', 'e_ominous'], ai: 'weakest', exp: 62, img: 'dancinghand', h: 270, idle: 'sway', svg: 'hand', drop: 'shadow_ash',
      note: 'Sways like it hears music no one else does. Goes for whoever looks hurt.' },
    beetle: { name: 'Grave Beetle', arcana: 'Chariot', lvl: 5, hp: 105, st: 10, ma: 5, en: 9, ag: 4, lu: 4,
      aff: { wind: 'weak', strike: 'resist', pierce: 'resist', fire: 'null' }, skills: ['horn', 'e_rakukaja'], ai: 'buffer', exp: 80, img: 'gravebeetle', h: 165, idle: 'crawl', svg: 'beetle', drop: 'shadow_ash',
      note: 'Its shell is carved like a headstone. Hardens its friends before it charges.' },
    snake: { name: 'Lustful Snake', arcana: 'Lovers', lvl: 5, hp: 76, st: 9, ma: 8, en: 5, ag: 10, lu: 6,
      aff: { strike: 'weak', pierce: 'null', fire: 'resist' }, skills: ['lunge', 'e_agi', 'e_poisma', 'e_marin_karin'], ai: 'weakest', exp: 74, img: 'lustful-snake', h: 240, idle: 'sway', svg: 'hand', drop: 'shadow_ash',
      note: 'A coil around an ankh. It strikes at whoever is bleeding, and its venom poisons or charms.' },
    table: { name: 'Laughing Table', arcana: 'Hermit', lvl: 6, hp: 112, st: 7, ma: 10, en: 7, ag: 5, lu: 5,
      aff: { pierce: 'weak', ice: 'drain', fire: 'resist' }, skills: ['e_bufu', 'e_dia', 'e_media'], ai: 'healer', exp: 92, img: 'laughing-table', h: 230, idle: 'breathe', svg: 'table', drop: 'mask_shard',
      note: 'Set for a dinner no one came to. It giggles while it mends the other Shadows.' },
    cupid: { name: 'Devoted Cupid', arcana: 'Lovers', lvl: 7, hp: 92, st: 8, ma: 9, en: 5, ag: 11, lu: 7,
      aff: { wind: 'weak', fire: 'resist', light: 'null' }, skills: ['peck', 'e_tarukaja', 'e_marin_karin'], ai: 'buffer', exp: 96, img: 'devoted-cupid', h: 210, idle: 'float', svg: 'maiden', drop: 'mask_shard',
      note: 'Shoots arrows and cheers on its friends. Knock it out of the air first.' },
    // ── Arqa (Lv 9–13)
    venus: Object.assign(S(9, { ma: 1.1, ag: 1.2 }), { name: 'Venus Eagle', arcana: 'Lovers',
      aff: { elec: 'weak', wind: 'repel', pierce: 'resist' }, skills: ['peck', 'e_garu', 'e_zio', 'e_garula'], ai: 'exploit', img: 'venuseagle', h: 200, idle: 'float', svg: 'venus', drop: 'mask_shard',
      note: 'A preening raptor. It studies the party and aims for their weaknesses.' }),
    magus: Object.assign(S(10, { ma: 1.2, st: 0.7 }), { name: 'Magical Magus', arcana: 'Magician',
      aff: { strike: 'weak', fire: 'resist', dark: 'null' }, skills: ['e_agi', 'e_zio', 'e_bufu', 'e_agilao', 'e_marin_karin'], ai: 'exploit', img: 'magical-magus', h: 250, idle: 'float', svg: 'maiden', drop: 'mask_shard',
      note: 'A robed caster that knows every element. It hunts for weak points and charms the careless.' }),
    twins: Object.assign(S(11, { hp: 1.15, st: 1.1 }), { name: 'Trance Twins', arcana: 'Hermit',
      aff: { fire: 'weak', strike: 'resist', dark: 'resist' }, skills: ['lunge', 'e_kill_rush', 'e_tarunda', 'e_evil_touch'], ai: 'weakest', img: 'trance-twins', h: 220, idle: 'sway', svg: 'hand', drop: 'mask_shard',
      note: 'Two robed Shadows moving as one. They gang up on the weakest and whisper terrors.' }),
    papillon: Object.assign(S(10, { ma: 1.1, ag: 1.3, hp: 0.85 }), { name: 'Whimsical Papillon', arcana: 'Lovers',
      aff: { fire: 'weak', wind: 'null', elec: 'resist' }, skills: ['e_garu', 'e_magaru', 'e_marin_karin', 'e_poison_mist'], ai: 'random', img: 'whimsical-papillon', h: 210, idle: 'float', svg: 'venus', drop: 'mask_shard',
      note: 'Hearts on butterfly wings. It flits through the party scattering charm and poison.' }),
    pesce: Object.assign(S(12, { hp: 1.25, en: 1.2, ma: 1.05 }), { name: 'Calm Pesce', arcana: 'Hanged Man',
      aff: { elec: 'weak', ice: 'resist', fire: 'resist' }, skills: ['e_bufula', 'e_mabufu', 'e_rakukaja', 'e_dia'], ai: 'buffer', img: 'calm-pesce', h: 180, idle: 'float', svg: 'maya', drop: 'mask_shard',
      note: 'A great fish of lacquer and scripture. It swims through the air as if Tartarus were the sea.' }),
    // ── Yabbashah (Lv 14–18)
    dice: Object.assign(S(14, { hp: 0.9, ag: 1.2, lu: 1.6 }), { name: 'Bronze Dice', arcana: 'Fortune',
      aff: { wind: 'weak', slash: 'resist', strike: 'resist', pierce: 'resist' }, skills: ['bash', 'e_zionga', 'e_ominous', 'e_mudo'], ai: 'random', img: 'bronze-dice', h: 170, idle: 'float', svg: 'maya', drop: 'crimson_lacquer',
      note: 'A die that rolls itself. Whatever it lands on, someone gets hurt. Blades and fists clang off it.' }),
    relic: Object.assign(S(15, { en: 1.3, ma: 1.1 }), { name: 'Change Relic', arcana: 'Hermit',
      aff: { elec: 'weak', light: 'null', dark: 'null', pierce: 'resist' }, skills: ['e_hama', 'e_mudo', 'e_mazio', 'e_media'], ai: 'healer', img: 'change-relic', h: 240, idle: 'breathe', svg: 'maiden', drop: 'crimson_lacquer',
      note: 'A shrine statue that prays for the other Shadows. Light and Dark pass right through it.' }),
    mother: Object.assign(S(16, { ma: 1.2, hp: 1.1 }), { name: 'Elegant Mother', arcana: 'Empress',
      aff: { fire: 'weak', ice: 'resist', light: 'resist' }, skills: ['e_bufula', 'e_mabufu', 'e_marin_karin', 'e_mediarama'], ai: 'healer', img: 'elegant-mother', h: 230, idle: 'sway', svg: 'maiden', drop: 'crimson_lacquer',
      note: 'Draped in a mourning cloak. She soothes her children and charms anyone who stares.' }),
    hablerie: Object.assign(S(17, { st: 1.1, ag: 1.1 }), { name: 'Slipping Hablerie', arcana: 'Devil',
      aff: { light: 'weak', dark: 'null', strike: 'resist' }, skills: ['lunge', 'e_poison_mist', 'e_sexy_dance', 'e_kill_rush'], ai: 'random', img: 'slipping-hablerie', h: 210, idle: 'sway', svg: 'hand', drop: 'crimson_lacquer',
      note: 'All mouth and tongue. It talks you into terrible decisions, then poisons you for listening.' }),
    balance: Object.assign(S(17, { en: 1.2, ma: 1.1 }), { name: 'Fierce Balance', arcana: 'Justice',
      aff: { dark: 'weak', light: 'null', ice: 'resist', elec: 'resist' }, skills: ['e_hama', 'e_zionga', 'e_tarukaja', 'e_rakukaja'], ai: 'buffer', img: 'balance', h: 220, idle: 'sway', svg: 'maiden', drop: 'crimson_lacquer',
      note: 'A cross holding the scales. It weighs each of you and finds you wanting.' }),
    // ── Tziah (Lv 19–23)
    dancer: Object.assign(S(19, { ag: 1.3, ma: 1.1 }), { name: 'Soul Dancer', arcana: 'Lovers',
      aff: { strike: 'weak', wind: 'resist', light: 'null' }, skills: ['e_garula', 'e_sexy_dance', 'e_marin_karin', 'e_magaru'], ai: 'exploit', img: 'soul-dancer', h: 250, idle: 'sway', svg: 'maiden', drop: 'mirror_shard',
      note: 'A pair waltzing to music only they hear. Watch them too long and you start dancing along.' }),
    king: Object.assign(S(20, { st: 1.2, hp: 1.2 }), { name: 'Positive King', arcana: 'Emperor',
      aff: { ice: 'weak', elec: 'resist', strike: 'resist' }, skills: ['bash', 'e_herculean', 'e_tarukaja', 'e_matarunda'], ai: 'buffer', img: 'positive-king', h: 250, idle: 'breathe', svg: 'maya', drop: 'mirror_shard',
      note: 'A jolly little king with a scepter that hits much harder than it looks.' }),
    turret: Object.assign(S(21, { st: 1.15, en: 1.35, ag: 0.6 }), { name: 'Arcane Turret', arcana: 'Chariot',
      aff: { elec: 'weak', slash: 'resist', pierce: 'resist', fire: 'resist' }, skills: ['e_arrow_rain', 'e_holy_arrow', 'e_power_slash'], ai: 'random', img: 'arcane-turret', h: 150, idle: 'crawl', svg: 'beetle', drop: 'mirror_shard',
      note: 'A tank with a golden face. Its volleys rake the whole party.' }),
    bambino: Object.assign(S(21, { ma: 1.2, hp: 0.9 }), { name: 'Secret Bambino', arcana: 'Hanged Man',
      aff: { fire: 'weak', dark: 'null', ice: 'resist' }, skills: ['e_mudo', 'e_evil_smile', 'e_agilao', 'e_poisma'], ai: 'random', img: 'secret-bambino', h: 230, idle: 'float', svg: 'maiden', drop: 'mirror_shard',
      note: 'A rose with a little face where the bloom should be. It laughs at the dying.' }),
    pot: Object.assign(S(22, { ma: 1.2, en: 1.1 }), { name: 'Cloudgirl Pot', arcana: 'Temperance',
      aff: { elec: 'weak', ice: 'drain', wind: 'resist' }, skills: ['e_mabufula', 'e_bufula', 'e_mediarama', 'e_marin_karin'], ai: 'healer', img: 'cloudgirl-pot', h: 230, idle: 'float', svg: 'table', drop: 'mirror_shard',
      note: 'Long blue hair pouring out of a jar. It mends the others and freezes whatever comes close.' }),
    // ── Harabah (Lv 24–28)
    drive: Object.assign(S(24, { st: 1.2, ag: 1.2 }), { name: 'Rampage Drive', arcana: 'Chariot',
      aff: { elec: 'weak', strike: 'resist', pierce: 'resist', wind: 'null' }, skills: ['e_kill_rush', 'e_heat_wave', 'e_power_slash'], ai: 'weakest', img: 'rampage-drive', h: 190, idle: 'float', svg: 'venus', drop: 'rusted_cog',
      note: 'A rider fused to its machine. It never brakes.' }),
    giant: Object.assign(S(25, { st: 1.25, hp: 1.3, ag: 0.8 }), { name: 'Order Giant', arcana: 'Justice',
      aff: { dark: 'weak', light: 'null', slash: 'resist', ice: 'resist' }, skills: ['e_herculean', 'e_power_slash', 'e_hama', 'e_tarukaja'], ai: 'buffer', img: 'order-giant', h: 280, idle: 'breathe', svg: 'hand', drop: 'rusted_cog',
      note: 'An armored judge with an enormous blade. It hands down sentences one swing at a time.' }),
    beast: Object.assign(S(26, { st: 1.3, ag: 1.1 }), { name: 'Wild Beast', arcana: 'Strength',
      aff: { ice: 'weak', fire: 'resist', strike: 'resist' }, skills: ['e_kill_rush', 'e_herculean', 'e_evil_smile'], ai: 'weakest', img: 'wildbeast', h: 170, idle: 'crawl', svg: 'beetle', drop: 'rusted_cog',
      note: 'A lion with a blue mask hung from its jaw like a trophy.' }),
    niceguy: Object.assign(S(26, { st: 1.3, hp: 1.2, en: 1.1 }), { name: 'Nice Guy', arcana: 'Strength',
      aff: { wind: 'weak', strike: 'null', slash: 'resist' }, skills: ['e_herculean', 'e_heat_wave', 'e_tarukaja'], ai: 'buffer', img: 'nice-guy', h: 240, idle: 'breathe', svg: 'maya', drop: 'stone_heart',
      note: 'Half silver, half shadow, all muscle. It flexes before every punch.' }),
    basalt: Object.assign(S(27, { en: 1.5, hp: 1.3, ag: 0.6 }), { name: 'Autonomic Basalt', arcana: 'Strength',
      aff: { strike: 'weak', pierce: 'null', slash: 'resist', fire: 'resist', ice: 'resist' }, skills: ['bash', 'e_heat_wave', 'e_rakukaja', 'e_marakunda'], ai: 'buffer', img: 'autonomic-basalt', h: 210, idle: 'breathe', svg: 'beetle', drop: 'stone_heart',
      note: 'A boulder wearing a pink masquerade mask. Only a hammer gets through.' }),
    // ── Adamah (Lv 29–33)
    knight: Object.assign(S(29, { st: 1.2, ag: 1.15 }), { name: 'Intrepid Knight', arcana: 'Chariot',
      aff: { ice: 'weak', pierce: 'resist', elec: 'resist' }, skills: ['e_power_slash', 'e_vorpal', 'e_tarukaja'], ai: 'weakest', img: 'intrepid-knight', h: 240, idle: 'float', svg: 'venus', drop: 'stone_heart',
      note: 'A knight riding a bone dragon. It charges whoever looks ready to fall.' }),
    machine: Object.assign(S(30, { st: 1.25, en: 1.3 }), { name: 'Steel Machine', arcana: 'Chariot',
      aff: { elec: 'weak', slash: 'resist', pierce: 'resist', strike: 'resist' }, skills: ['e_power_slash', 'e_heat_wave', 'e_rakukaja'], ai: 'buffer', img: 'steel-machine', h: 270, idle: 'breathe', svg: 'hand', drop: 'stone_heart',
      note: 'A giant robot straight off a Saturday-morning show. Weapons barely scratch it.' }),
    castle: Object.assign(S(31, { en: 1.4, hp: 1.35, ma: 1.1 }), { name: 'Solid Castle', arcana: 'Tower',
      aff: { wind: 'weak', strike: 'null', slash: 'resist', pierce: 'resist', fire: 'resist' }, skills: ['e_maragion', 'e_mazionga', 'e_marakunda'], ai: 'random', img: 'solid-castle', h: 260, idle: 'breathe', svg: 'table', drop: 'moon_feather',
      note: 'A whole fortress shrunk down and set walking. Its cannons cover every angle.' }),
    tower: Object.assign(S(32, { ma: 1.25, en: 1.1 }), { name: 'Corrupt Tower', arcana: 'Tower',
      aff: { light: 'weak', dark: 'null', fire: 'resist', elec: 'resist' }, skills: ['e_mudo', 'e_maragion', 'e_ominous', 'e_ziodyne'], ai: 'exploit', img: 'corrupt-tower', h: 260, idle: 'sway', svg: 'maiden', drop: 'moon_feather',
      note: 'A bishop stacked on a king stacked on a crown. It preaches ruin.' }),
    // ── Empyrean (Lv 34–38): mostly stronger versions, plus the Death Seeker
    seeker: Object.assign(S(36, { hp: 1.6, ma: 1.3, st: 1.2, en: 1.2 }), { name: 'Death Seeker', arcana: 'Death',
      aff: { light: 'null', dark: 'null', fire: 'resist', ice: 'resist', elec: 'resist', wind: 'resist' }, skills: ['e_mudo', 'e_megidola', 'e_evil_smile', 'e_ziodyne', 'e_bufudyne'], ai: 'exploit', img: 'death-seeker', h: 220, idle: 'float', svg: 'maiden', drop: 'moon_feather',
      note: 'A black mask trailing crimson ribbons and eyes on stalks. It has no weakness at all.' }),
    maiden: { name: 'Mirror Maiden', arcana: 'Priestess', lvl: 8, hp: 150, st: 8, ma: 11, en: 7, ag: 10, lu: 6,
      aff: { fire: 'weak', ice: 'null', light: 'resist' }, skills: ['e_bufu', 'e_tarukaja'], ai: 'buffer', exp: 120, svg: 'maiden', size: 0.85,
      note: 'An SVG-only Shadow (no art yet): the fallback path.' },

    // ── The Reaper: appears if you linger on a floor. Near-hopeless; run.
    reaper: Object.assign(S(66, { hp: 3.2, st: 1.4, ma: 1.4, en: 1.4, ag: 1.5 }), { name: 'The Reaper', arcana: 'Death', boss: true, reaper: true,
      aff: { slash: 'resist', strike: 'resist', pierce: 'resist', fire: 'resist', ice: 'resist', elec: 'resist', wind: 'resist', light: 'null', dark: 'null' },
      skills: ['chains', 'e_megidola', 'e_megidolaon', 'e_ziodyne', 'e_bufudyne', 'e_maragion', 'e_mazionga'], ai: 'reaper', exp: 30000, yen: 20000, img: 'reaper', h: 280, idle: 'float', svg: 'maiden',
      ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock', 'poison', 'distress'], alloutResist: 0.3, drop: 'arcana_fragment', dropChance: 1,
      note: 'Chains rattle when it walks. It hunts anyone who lingers in Tartarus. Run.' }),

    // ── Full-moon bosses
    priestess_add: { name: 'Devoted Cupid', arcana: 'Priestess', lvl: 8, hp: 140, st: 8, ma: 11, en: 7, ag: 10, lu: 6,
      aff: { wind: 'weak', ice: 'null', light: 'resist' }, skills: ['e_bufu', 'e_tarukaja'], ai: 'buffer', exp: 120, img: 'devoted-cupid', h: 190, idle: 'float', svg: 'maiden',
      note: "The Priestess's attendants. They pour their strength into her." },
    priestess: { name: 'Arcana Priestess', arcana: 'Priestess', lvl: 10, hp: 1650, st: 11, ma: 19.5, en: 10, ag: 9, lu: 8, boss: true,
      aff: { slash: 'resist', strike: 'resist', pierce: 'resist', fire: 'resist', elec: 'resist', wind: 'resist', ice: 'null', light: 'resist', dark: 'null' },
      veil: ['fire', 'elec', 'wind'], skills: ['e_bufula', 'e_mabufu', 'e_tarunda', 'gather', 'lunar_tide', 'call_mirrors'],
      ai: 'priestess', gimmick: 'priestess', exp: 700, yen: 3000, img: 'priestess-shadow', h: 300, idle: 'float', svg: 'priestess', size: 1.5, alloutResist: 0.55, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock'], summon: ['priestess_add', 'priestess_add'], drop: 'arcana_fragment', dropChance: 1,
      note: "A full-moon Shadow. Her veil changes color every turn, and only that element gets through. She gathers moonlight before her strongest attack: Guard!" },
    empress: Object.assign(S(15, { hp: 3.8, ma: 1.2, en: 1.1 }), { name: 'Arcana Empress', arcana: 'Empress', boss: true,
      aff: {}, gates: ['fire', 'ice', 'elec', 'wind', 'light'], skills: ['e_mabufula', 'e_bufula', 'e_marin_karin', 'e_sexy_dance', 'e_media'],
      ai: 'empress', gimmick: 'empress', exp: 900, yen: 2500, img: 'empress-shadow', h: 300, idle: 'breathe', svg: 'priestess', alloutResist: 0.6, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock'], drop: 'arcana_fragment', dropChance: 1,
      note: 'She nulls everything except one element, and only Fuuka’s analysis can tell which. When she gets back up after a Down, it changes.' }),
    emperor: Object.assign(S(15, { hp: 3.8, st: 1.12, en: 1.1 }), { name: 'Arcana Emperor', arcana: 'Emperor', boss: true,
      aff: {}, shifts: ['slash', 'strike', 'pierce', 'fire', 'ice', 'elec', 'wind'], skills: ['e_herculean', 'e_heat_wave', 'e_power_slash', 'e_tarukaja', 'e_rakunda'],
      ai: 'emperor', gimmick: 'emperor', exp: 900, yen: 2500, img: 'emperor-shadow', h: 320, idle: 'sway', svg: 'priestess', alloutResist: 0.6, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock'], drop: 'arcana_fragment', dropChance: 1,
      note: 'His weakness shifts every turn; everything else glances off. Re-scan him whenever Fuuka says it moved.' }),
    hierophant: Object.assign(S(20, { hp: 13.5, ma: 2.05, en: 1.15, ag: 1.2 }), { name: 'Arcana Hierophant', arcana: 'Hierophant', boss: true,
      aff: { wind: 'weak', fire: 'resist', ice: 'resist', elec: 'resist', light: 'null', dark: 'null' }, skills: ['e_sermon_up', 'e_sermon_down', 'e_mazionga', 'e_ziodyne', 'e_megido', 'e_hamaon'],
      ai: 'hierophant', gimmick: 'hierophant', exp: 1800, yen: 4000, img: 'hierophant-shadow', h: 320, idle: 'breathe', svg: 'priestess', alloutResist: 0.6, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock'], drop: 'arcana_fragment', dropChance: 1,
      note: 'A preacher on a throne with two crosses. His sermons buff him and curse you, and they never wear off. Dekaja, Dekunda, or knock him Down to break them.' }),
    lovers: Object.assign(S(25, { hp: 13, ma: 1.6, ag: 1.3 }), { name: 'Arcana Lovers', arcana: 'Lovers', boss: true, acts: 2,
      aff: { ice: 'weak', fire: 'resist', wind: 'resist', light: 'null', dark: 'resist' }, skills: ['e_marin_karin', 'e_sexy_dance', 'e_maragion', 'e_agilao', 'e_holy_arrow', 'e_mediarama'],
      ai: 'lovers', gimmick: 'lovers', exp: 2600, yen: 5000, img: 'lovers-shadow', h: 240, idle: 'float', svg: 'priestess', alloutResist: 0.6, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock'], drop: 'arcana_fragment', dropChance: 1,
      note: 'A bleeding heart with wings. She turns your friends against you. Charmed allies heal her. Patra and Rose Barrettes help.' }),
    chariot: Object.assign(S(30, { hp: 6.6, st: 1.35, en: 1.3 }), { name: 'Arcana Chariot', arcana: 'Chariot', boss: true,
      aff: { elec: 'weak', strike: 'resist', slash: 'resist', pierce: 'resist' }, skills: ['e_herculean', 'e_heat_wave', 'e_kill_rush', 'power_charge'],
      ai: 'chariot', gimmick: 'chariot', exp: 2400, yen: 4500, img: 'chariot-shadow', h: 300, idle: 'breathe', svg: 'priestess', alloutResist: 0.6, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock'], drop: 'arcana_fragment', dropChance: 1,
      note: 'A walking fortress. Every round Justice lives, it gets stronger. Take Justice down first.' }),
    justice: Object.assign(S(30, { hp: 3.2, ma: 1.3, ag: 1.15 }), { name: 'Arcana Justice', arcana: 'Justice', boss: true,
      aff: { dark: 'weak', light: 'null', ice: 'resist', elec: 'resist' }, skills: ['judgment', 'e_hamaon', 'e_mazionga', 'e_diarama', 'e_tarukaja'],
      ai: 'justice', gimmick: 'justice', exp: 2000, yen: 3500, img: 'justice-shadow', h: 260, idle: 'float', svg: 'priestess', alloutResist: 0.6, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock'],
      note: 'A winged mace with a judge’s helm. It empowers the Chariot, heals it, and banishes with Hamaon.' }),
    hermit: Object.assign(S(35, { hp: 8.3, ma: 1.28, ag: 1.25 }), { name: 'Arcana Hermit', arcana: 'Hermit', boss: true, acts: 2,
      aff: { fire: 'weak', elec: 'drain', ice: 'resist', dark: 'null' }, skills: ['hide', 'e_mazionga', 'e_ziodyne', 'e_poison_mist', 'e_ominous', 'e_bufudyne'],
      ai: 'hermit', gimmick: 'hermit', exp: 3800, yen: 7000, img: 'hermit-shadow', h: 300, idle: 'sway', svg: 'priestess', alloutResist: 0.6, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock'], drop: 'arcana_fragment', dropChance: 1,
      note: 'It hides in the static. Single-target attacks can’t find it until Fuuka’s Analyze pins it down, and attacks on everyone flush it out.' }),
    fortune: Object.assign(S(38, { hp: 6.4, ma: 1.35, lu: 2 }), { name: 'Arcana Fortune', arcana: 'Fortune', boss: true,
      aff: { elec: 'weak', wind: 'resist', light: 'null', dark: 'null' }, skills: ['wheel', 'e_mazionga', 'e_magarula', 'e_mudo'],
      ai: 'fortune', gimmick: 'fortune', exp: 3400, yen: 6000, img: 'fortune-shadow', h: 240, idle: 'float', svg: 'priestess', alloutResist: 0.6, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock'], drop: 'arcana_fragment', dropChance: 1,
      note: 'A golden sphinx with a wheel on its back. Every turn it spins, and anything can happen, good or bad.' }),
    strength: Object.assign(S(38, { hp: 8, st: 1.45, en: 1.3 }), { name: 'Arcana Strength', arcana: 'Strength', boss: true,
      aff: { ice: 'weak', strike: 'resist', slash: 'resist', fire: 'resist' }, skills: ['e_herculean', 'e_kill_rush', 'e_heat_wave', 'power_charge', 'e_tarukaja'],
      ai: 'strength', gimmick: 'strength', exp: 3400, yen: 6000, img: 'strength-shadow', h: 300, idle: 'breathe', svg: 'priestess', alloutResist: 0.6, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock'],
      note: 'A woman caged in roses. When the wheel favors her, she hits twice as hard.' }),
    hanged: Object.assign(S(42, { hp: 6.6, ma: 1.2, st: 1.2, en: 1.2 }), { name: 'Arcana Hanged Man', arcana: 'Hanged Man', boss: true, acts: 2,
      aff: { light: 'weak', dark: 'null', elec: 'resist', ice: 'resist' }, skills: ['call_effigies', 'e_megidola', 'e_mazionga', 'e_mabufula', 'e_evil_smile'],
      ai: 'hanged', gimmick: 'hanged', exp: 5200, yen: 9000, img: 'hanged-man-shadow', h: 300, idle: 'float', svg: 'priestess', alloutResist: 0.6, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock'], summon: ['effigy', 'effigy', 'effigy'], drop: 'arcana_fragment', dropChance: 1,
      note: 'Hung from a halo of wings. While any of its effigies are standing, nothing can touch it. Knock them all Down (or out), then strike.' }),
    effigy: Object.assign(S(38, { hp: 1.5, en: 1.1 }), { name: 'Hanging Effigy', arcana: 'Hanged Man',
      aff: { fire: 'weak', strike: 'weak', dark: 'null', light: 'resist' }, skills: ['bash', 'e_agilao', 'e_rakunda'], ai: 'random', exp: 300, img: 'hanging-effigy', h: 200, idle: 'sway', svg: 'maiden', effigy: true,
      note: 'A puppet of the Hanged Man. While it stands, it shields its master.' }),

    // ── Story fights for the life sim (femc-game.html hands them over; battle.js handoff mode). Not in any Tartarus pool or op.
    // pic: a full image path instead of a Shadow slug (picW/picH: its size), for fights that use portraits or memory cards.
    // still: what the log says when the unit spends its turn doing nothing (skill `still`).
    maya_lost: { name: 'Cowardly Maya', arcana: 'Magician', lvl: 3, hp: 54, st: 7, ma: 5, en: 4, ag: 6, lu: 4, story: true,
      aff: { light: 'weak', fire: 'weak', dark: 'resist' }, skills: ['bash', 'tremble'], ai: 'coward', exp: 60, img: 'maya', h: 150, idle: 'breathe', svg: 'maya',
      note: 'The one that hung back. It flinches from light.' },
    magician: Object.assign(S(7, { hp: 3.2, ma: 1.1 }), { name: 'Arcana Magician', arcana: 'Magician', boss: true, story: true,
      aff: { light: 'weak', dark: 'null', fire: 'resist' }, skills: ['lunge', 'e_agi', 'e_maragi', 'e_tarunda'], ai: 'random', exp: 520, yen: 1200,
      img: 'arcana-magician', h: 272, phoneK: 0.82, idle: 'float', svg: 'priestess', alloutResist: 0.7, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock'],
      note: 'The first full moon. It climbed the dorm wall and it is waiting on the roof.' }),
    memory_car: Object.assign(S(44, { hp: 6.4 }), { name: 'The Sleeper Car', arcana: 'Moon', boss: true, story: true,
      aff: { light: 'weak', dark: 'null', ice: 'resist', strike: 'resist' }, skills: ['e_mabufula', 'e_mazionga', 'still'], ai: 'carriage', exp: 0, yen: 0,
      still: 'The train runs past without touching the floor. Every window has someone asleep in it.',
      img: 'memory-sleeper-car', h: 300, idle: 'sway', svg: 'priestess', alloutResist: 0.6, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock'],
      note: 'A carriage that runs through the tower where there are no rails. It can’t be reached; its guards can.' }),
    // Memory floors (Act IV–V). Mechanics are kept simple; see SCRIPTS in battle.js.
    ballot_box: Object.assign(S(37, { hp: 6, ma: 1.2, en: 1.2 }), { name: 'The Ballot Box', arcana: 'Hoax', boss: true, story: true,
      aff: { fire: 'weak', strike: 'resist', dark: 'null' }, skills: ['e_mazionga', 'e_agilao', 'e_ominous', 'e_tarunda'], ai: 'random', exp: 4200, yen: 5000,
      img: 'memory-ballot-box', h: 300, idle: 'sway', svg: 'priestess', alloutResist: 0.6, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock'],
      note: 'A ballot box the size of a car, swallowing every memory anyone has of her.' }),
    flash_shadow: Object.assign(S(39, { hp: 5.6, ma: 1.25, ag: 1.2 }), { name: 'The Flash', arcana: 'Runners', boss: true, story: true,
      aff: { dark: 'weak', elec: 'resist' }, skills: ['e_zionga', 'e_evil_touch', 'e_evil_smile', 'e_mazionga'], ai: 'random', exp: 4600, yen: 5200,
      img: 'memory-flash', h: 300, idle: 'float', svg: 'priestess', alloutResist: 0.6, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock'],
      note: 'A hallway at three in the morning, and a camera flash that won’t stop going off.' }),
    tide_shadow: Object.assign(S(42, { hp: 6.4, ma: 1.25, en: 1.2 }), { name: 'The Tide', arcana: 'strangers', boss: true, story: true,
      aff: { elec: 'weak', ice: 'drain', fire: 'resist' }, skills: ['e_bufudyne', 'e_mabufula', 'e_rakunda'], ai: 'random', exp: 5200, yen: 6000,
      img: 'memory-tide', h: 280, idle: 'sway', svg: 'priestess', alloutResist: 0.6, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock'],
      note: 'The deck of the last ferry, tilting. The water wants her.' }),
    party_shadow: Object.assign(S(43, { hp: 6, st: 1.2, ma: 1.2 }), { name: 'The First Party', arcana: 'Runners', boss: true, story: true,
      aff: { wind: 'weak', fire: 'resist', dark: 'null' }, skills: ['e_maragion', 'e_sexy_dance', 'e_power_slash', 'e_tarunda'], ai: 'random', exp: 5400, yen: 6200,
      img: 'memory-party', h: 300, idle: 'sway', svg: 'priestess', alloutResist: 0.6, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock'],
      note: 'Music through a wall, and a Shadow that goes for her guests.' }),
    veil_poster: Object.assign(S(44, { hp: 6.2, ma: 1.25 }), { name: 'Veil and Poster', arcana: 'strangers · Hoax', boss: true, story: true, gimmick: 'emperor',
      aff: {}, shifts: ['fire', 'ice', 'elec', 'wind', 'light'], skills: ['e_bufula', 'e_agilao', 'e_marin_karin', 'e_mabufula'], ai: 'random', exp: 5600, yen: 6400,
      img: 'memory-veil-poster', h: 300, idle: 'float', svg: 'priestess', alloutResist: 0.6, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock'],
      note: 'Two floors at once. Its weakness swaps every turn.' }),
    fox_shadow: Object.assign(S(46, { hp: 5.8, ma: 1.2, ag: 1.3 }), { name: 'The Mirror Fox', arcana: 'Runners · strangers', boss: true, story: true,
      aff: { light: 'weak', dark: 'resist' }, skills: ['e_zionga', 'e_agilao', 'e_dia', 'e_tarukaja'], ai: 'random', exp: 6000, yen: 7000,
      img: 'memory-mirror-fox', h: 260, idle: 'sway', svg: 'priestess', alloutResist: 0.6, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock'],
      note: 'It moves the way she moves, a beat early.' }),
    // Memory-floor Shadows that fight beside the boss (New Adds pose sheets): the Hoax floor and the strangers floor.
    group_chat: Object.assign(S(36, { hp: 1.1, ma: 1.2, ag: 1.2 }), { name: 'The Group Chat', arcana: 'Hoax', story: true,
      aff: { elec: 'weak', wind: 'resist', dark: 'null' }, skills: ['e_garula', 'e_magarula', 'e_evil_smile', 'e_ominous'], ai: 'exploit', drop: 'moon_feather',
      img: 'memory-group-chat', h: 240, idle: 'float', svg: 'maya',
      note: 'A hundred speech bubbles with teeth, all talking at once. It piles on whatever you’re weak to.' }),
    fishmonger: Object.assign(S(41, { hp: 1.3, st: 1.2, en: 1.25, ag: 0.85 }), { name: 'The Fishmonger', arcana: 'strangers', story: true,
      aff: { fire: 'weak', ice: 'null', slash: 'resist', pierce: 'resist' }, skills: ['e_power_slash', 'e_bufula', 'e_mabufula', 'e_rakukaja'], ai: 'weakest', drop: 'moon_feather',
      img: 'memory-fishmonger', h: 260, idle: 'float', svg: 'table',
      note: 'Fish-market crates iced shut and stacked into a body, with a white mask for a face. Blades skid off it.' }),
    wren_call: Object.assign(S(50, { hp: 2.2 }), { name: 'Wren', arcana: 'Jester', boss: true, story: true, gimmick: 'wren',
      aff: {}, skills: ['w_stay', 'w_wait', 'w_choose'], ai: 'wren_ask', exp: 0, yen: 0,
      img: 'wren-shadow-phase1', h: 360, phoneK: 0.6, idle: 'breathe', svg: 'maya', alloutResist: 0.5, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock', 'poison', 'distress'],
      note: 'She doesn’t attack. She asks. Hold, and answer her, or don’t.' }),
    last_train: Object.assign(S(52, { hp: 7, ma: 1.2, st: 1.2, en: 1.15 }), { name: 'The Last Train', arcana: 'Moon', boss: true, acts: 2, story: true, gimmick: 'train',
      aff: { light: 'weak', dark: 'drain' }, skills: ['e_megidola', 'e_mabufula', 'e_mazionga', 'e_heat_wave', 'e_evil_smile'], ai: 'random', exp: 14000, yen: 0,
      img: 'wren-shadow-last-train', h: 390, idle: 'float', svg: 'priestess', alloutResist: 0.6, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock'],
      note: 'No stops. Three lantern windows, three sleeping lives. Break a lantern and the train weakens.' }),
    lantern_r: Object.assign(S(50, { hp: 1.3, en: 1.1 }), { name: 'Lantern · Runners', arcana: 'Sun', boss: true, story: true, gimmick: 'lantern', world: 'R',
      aff: { light: 'weak', dark: 'null' }, skills: ['e_dia', 'still'], ai: 'lantern', exp: 0, yen: 0, still: 'In the lantern, a sleeping Solar turns over. Snow on a campus somewhere.',
      img: 'memory-lantern-runners', h: 150, idle: 'float', svg: 'maya', alloutResist: 0.8, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock', 'poison', 'distress'] }),
    lantern_s: Object.assign(S(50, { hp: 1.3, en: 1.1 }), { name: 'Lantern · strangers', arcana: 'Sun', boss: true, story: true, gimmick: 'lantern', world: 'S',
      aff: { light: 'weak', dark: 'null' }, skills: ['e_dia', 'still'], ai: 'lantern', exp: 0, yen: 0, still: 'In the lantern, a sleeping Solar turns over. Salt air, a harbor at low tide.',
      img: 'memory-lantern-strangers', h: 150, idle: 'float', svg: 'maya', alloutResist: 0.8, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock', 'poison', 'distress'] }),
    lantern_h: Object.assign(S(50, { hp: 1.3, en: 1.1 }), { name: 'Lantern · Hoax', arcana: 'Sun', boss: true, story: true, gimmick: 'lantern', world: 'H',
      aff: { light: 'weak', dark: 'null' }, skills: ['e_dia', 'still'], ai: 'lantern', exp: 0, yen: 0, still: 'In the lantern, a sleeping Solar turns over. A pin on a blazer, a council room light still on.',
      img: 'memory-lantern-hoax', h: 150, idle: 'float', svg: 'maya', alloutResist: 0.8, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock', 'poison', 'distress'] }),
    wren_last: Object.assign(S(50, { hp: 0.9 }), { name: 'Wren', arcana: 'Jester', boss: true, story: true, capfall: true,
      aff: {}, skills: ['still'], ai: 'still', exp: 0, yen: 0, still: 'Wren doesn’t fight back.',
      img: 'wren-shadow-phase3', h: 380, idle: 'breathe', svg: 'maya', alloutResist: 1, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock', 'poison', 'distress'],
      note: 'The cap is gone. Her hair is down. She looks like you.' })
  };

  /* ── Tartarus: seven blocks you climb, plus Monad (secret), a full moon at the top of each of the seven.
     Floors carry their real P3 numbers (2F … 172F; Monad 176F … 254F), the same numbers the life sim's calendar opens by date
     (calendar.js floorCaps): a block's floors open together on its date, and its top waits for its full moon. Each floor
     is a node map (map.js); its rooms come from tartarus.js (room types, puzzles, events, loot).
     A block's identity: color + tint (its palette on the map), pool / strong (its Shadows: a floor gets a sliding window of
     the pool, so the mix turns over as you climb), rooms (how often each room type turns up, ×1 when not listed), guardian
     ({ at: [floor numbers], kind }: a mini-boss that stands between the stairs and the rest of that floor), lvl (the level
     its rare Shadows and loot are tuned for). The last floor's stairs lead to the block's full-moon operation (`op`); once
     that's cleared the barrier stays open. Monad (`secret`) is only found through a cracked wall at the very top. */
  const blocks = [
    { id: 'thebel', name: 'Thebel', bg: BG + 'tartarus-scene.webp', color: '#7dffc0', tint: '#1d6b4a', op: 'priestess', lvl: 6,
      floors: [2, 4, 6, 8, 11, 13, 16], guardian: { at: [11], kind: 'guard_thebel' },
      rooms: { chest: 1.3, event: 1.2, rest: 1.3, puzzle: 1.1, trap: 0.5, vault: 0.6, rare: 0.8, altar: 0.4 },
      pool: [['maya', 'maya', 'maya'], ['maya', 'slime', 'maya'], ['hand', 'beetle', 'hand'], ['snake', 'beetle', 'slime'], ['hand', 'snake'], ['table', 'maya', 'slime'], ['cupid', 'table', 'hand']],
      strong: [['cupid', 'twins@8'], ['table', 'beetle', 'snake'], ['magus@8', 'cupid']] },
    { id: 'arqa', name: 'Arqa', bg: BG + 'arya.webp', color: '#ff8cc0', tint: '#7a1f4f', op: 'empress', lvl: 12,
      floors: [17, 20, 23, 26, 29, 31, 33, 36], guardian: { at: [29], kind: 'guard_arqa' },
      rooms: { puzzle: 1.6, event: 1.3, chest: 1.1, rest: 1, trap: 0.8, altar: 0.8 },
      pool: [['venus', 'cupid@10', 'hand@10'], ['magus', 'papillon'], ['twins', 'venus'], ['papillon', 'pesce'], ['magus', 'twins', 'cupid@10'], ['pesce', 'venus', 'papillon']],
      strong: [['pesce@14', 'magus@13'], ['twins@14', 'papillon@13', 'venus@13']] },
    { id: 'yabbashah', name: 'Yabbashah', bg: BG + 'tartarus-yabbashah.webp', color: '#ff5b5b', tint: '#6b1010', op: 'hierophant', lvl: 17,
      floors: [37, 41, 45, 48, 52, 55, 58, 61, 64], guardian: { at: [52], kind: 'guard_yabbashah' },
      rooms: { trap: 1.7, vault: 1.3, shadow: 1.1, strong: 1.2, rest: 0.8, puzzle: 0.8 },
      pool: [['dice', 'relic'], ['mother', 'dice'], ['hablerie', 'balance'], ['relic', 'mother', 'dice'], ['balance', 'hablerie', 'relic'], ['mother', 'balance']],
      strong: [['mother@19', 'balance@19'], ['hablerie@19', 'dice@19', 'relic@19']] },
    { id: 'tziah', name: 'Tziah', bg: BG + 'tartarus-tziah.webp', color: '#c9d6ff', tint: '#3a4a7a', op: 'lovers', lvl: 22,
      floors: [65, 69, 73, 76, 80, 83, 86, 89, 92], guardian: { at: [80], kind: 'guard_tziah' },
      rooms: { puzzle: 1.5, crack: 1.8, event: 1.2, rare: 1.1, trap: 1 },
      pool: [['dancer', 'king'], ['turret', 'bambino'], ['pot', 'dancer'], ['king', 'turret', 'bambino'], ['pot', 'bambino', 'dancer'], ['king', 'pot']],
      strong: [['turret@24', 'pot@24'], ['dancer@24', 'king@24', 'bambino@24']] },
    { id: 'harabah', name: 'Harabah', bg: BG + 'harabah.webp', color: '#ffd36b', tint: '#6b4a10', op: 'chariot', lvl: 27,
      floors: [93, 97, 101, 105, 109, 112, 115, 118], guardian: { at: [109], kind: 'guard_harabah' },
      rooms: { shadow: 1.2, strong: 1.4, vault: 1.5, altar: 1.3, puzzle: 0.8 },
      pool: [['drive', 'giant'], ['beast', 'niceguy'], ['basalt', 'drive'], ['giant', 'beast', 'drive'], ['niceguy', 'basalt', 'beast'], ['giant', 'niceguy']],
      strong: [['giant@29', 'basalt@29'], ['drive@29', 'beast@29', 'niceguy@29']] },
    { id: 'adamah', name: 'Adamah', bg: BG + 'adamah.webp', color: '#b07bff', tint: '#3e1a6b', op: 'hermit', lvl: 32,
      floors: [119, 123, 127, 131, 135, 138, 141, 144], guardian: { at: [135], kind: 'guard_adamah' },
      rooms: { rare: 1.8, trap: 1.3, crack: 1.3, event: 1.1, rest: 0.9 },
      pool: [['knight', 'machine'], ['castle', 'tower'], ['knight', 'tower'], ['machine', 'castle', 'knight'], ['tower', 'machine', 'castle'], ['knight', 'beast@31']],
      strong: [['castle@34', 'tower@34'], ['seeker@33']] },
    { id: 'empyrean', name: 'Empyrean', bg: BG + 'empyrean.webp', color: '#fff2b0', tint: '#7a6a2a', op: 'fortune', lvl: 37,
      floors: [145, 149, 153, 157, 160, 163, 166, 169, 172], guardian: { at: [160], kind: 'guard_empyrean' },
      rooms: { strong: 1.5, altar: 1.6, rare: 1.3, vault: 1.2, trap: 1.1 },
      pool: [['knight@35', 'tower@35'], ['machine@36', 'castle@35'], ['giant@35', 'dancer@35', 'pot@35'], ['seeker', 'knight@35'], ['basalt@36', 'turret@36', 'bambino@36']],
      strong: [['seeker@39', 'tower@38'], ['seeker@38', 'seeker@38']] },
    // Monad: the secret block above the tower's top (a cracked wall on 172F leads in, once the date opens it: 204F on 11/4,
    // 230F on 12/3, 254F on 1/1). No full moon at its top; its last stairs end at a sealed door.
    { id: 'monad', name: 'Monad', bg: BG + 'tartarus-monad.webp', color: '#6ab0ff', tint: '#0b2a5c', op: null, lvl: 47, secret: true,
      floors: [176, 184, 192, 204, 212, 222, 230, 238, 246, 254], guardian: { at: [204, 246], kind: 'guard_monad' },
      rooms: { strong: 1.8, vault: 1.5, crack: 1.4, rare: 1.4, trap: 1.3, rest: 1.2, altar: 1.2, chest: 0.8 },
      pool: [['seeker@44', 'knight@45'], ['castle@45', 'tower@46'], ['giant@46', 'basalt@46', 'machine@45'], ['seeker@47', 'seeker@46'], ['dancer@47', 'pot@47', 'turret@46'], ['tower@48', 'castle@48'], ['beast@48', 'drive@48', 'niceguy@48'], ['seeker@50', 'tower@49', 'knight@49']],
      strong: [['seeker@52', 'seeker@51'], ['castle@52', 'tower@52', 'knight@51']] }
  ];
  /* Floors, in climbing order (Monad last). id: f + number (16F → f16). access: chance of an access point (the first floor of a
     block always has one). top: the block's last floor (its barrier). last: the top of the climb (172F). */
  const floors = [];
  blocks.forEach((b, bi) => b.floors.forEach((n, fi) => {
    const N = b.floors.length, P = b.pool.length, win = Math.max(2, Math.ceil(P * 0.6)), at = N > 1 ? Math.round(fi * (P - win) / (N - 1)) : 0;
    const top = fi === N - 1;
    floors.push({ id: 'f' + n, label: n + 'F', gameFloor: n, block: b.name, blockId: b.id, bi, fi, bg: b.bg, color: b.color, tint: b.tint,
      pool: b.pool.slice(at, at + win), strong: b.strong, nav: fi === 0 ? 'block_' + b.id : 'floor', top, op: top ? b.op : null,
      access: fi === 0 ? 1 : 0.55, layers: b.secret ? 7 : 5 + Math.min(2, Math.floor(bi / 2)), rooms: b.rooms || {}, lvl: b.lvl,
      guardian: b.guardian && b.guardian.at.includes(n) ? b.guardian.kind : null, secret: !!b.secret, last: !b.secret && top && bi === blocks.filter(x => !x.secret).length - 1 });
  }));
  /* Saves from before 2026-10-25 (three floors a block: f2 f4 f6 · f9 f12 f15 · … · f54 f57 f60). The life sim showed them as
     game floors; save.js (tv 2) moves an access point there to the same game floor, which is a floor of the new list. */
  const oldFloors = { ids: [['f2', 'f4', 'f6'], ['f9', 'f12', 'f15'], ['f18', 'f21', 'f24'], ['f27', 'f30', 'f33'], ['f36', 'f39', 'f42'], ['f45', 'f48', 'f51'], ['f54', 'f57', 'f60']],
    caps: [16, 36, 64, 92, 118, 144, 172] };

  /* Full Moon Operations, in order. Each unlocks when the one before it is cleared; all can be replayed.
     arena: the battle background. lvl: the level the fight is tuned for. */
  const ops = [
    { id: 'priestess', name: 'The Priestess', arcana: 'II · Priestess', place: 'The Monorail', arena: BG + 'darkhour-monorail.webp', group: ['priestess'], lvl: 10,
      brief: 'A full-moon Shadow has taken over the monorail. Her veil only lets one element through at a time.' },
    { id: 'empress', name: 'Empress & Emperor', arcana: 'III · IV · Empress & Emperor', place: 'Gekkoukan High', arena: BG + 'darkhour-gekkoukan-gate.webp', group: ['empress', 'emperor'], lvl: 15,
      brief: 'Two Shadows at the school gate. The Empress lets exactly one element through, and only a scan reveals it. The Emperor’s weakness won’t sit still.' },
    { id: 'hierophant', name: 'The Hierophant', arcana: 'V · Hierophant', place: 'Shirakawa Boulevard', arena: BG + 'darkhour-hotel-outside.webp', group: ['hierophant'], lvl: 20,
      brief: 'He preaches buffs onto himself and penance onto you, and none of it wears off. Bring Dekaja and Dekunda.' },
    { id: 'lovers', name: 'The Lovers', arcana: 'VI · Lovers', place: 'The hotel lobby', arena: BG + 'darkhour-hotel-lobby.webp', group: ['lovers'], lvl: 25,
      brief: 'A Shadow made of heartbreak. She charms everyone she can. Patra Gems and Rose Barrettes will save you.' },
    { id: 'chariot', name: 'Chariot & Justice', arcana: 'VII · VIII · Chariot & Justice', place: 'Moonlight Bridge', arena: BG + 'darkhour-moonlight-bridge.webp', group: ['chariot', 'justice'], lvl: 30,
      brief: 'The Chariot grows stronger every round Justice stands. Justice heals it and banishes with Hamaon. Take Justice down first.' },
    { id: 'hermit', name: 'The Hermit', arcana: 'IX · Hermit', place: 'Outside Tartarus', arena: BG + 'tartarus-fromadistance.webp', group: ['hermit'], lvl: 35,
      brief: 'It hides in the static. Analyze to pin it down, or hit everyone to flush it out.' },
    { id: 'fortune', name: 'Fortune & Strength', arcana: 'X · XI · Fortune & Strength', place: 'Moonlight Bridge', arena: BG + 'darkhour-moonlight-bridge.webp', group: ['fortune', 'strength'], lvl: 39,
      brief: 'The wheel spins every turn: blessings, curses, or a frenzy for Strength. Bring Fortune down and the luck runs out.' },
    { id: 'hanged', name: 'The Hanged Man', arcana: 'XII · Hanged Man', place: 'Iwatodai, the Dark Hour', arena: BG + 'darkhour-iwatodai-street.webp', group: ['hanged'], lvl: 43,
      brief: 'It hides behind its effigies. While any of them stand, nothing touches it. Knock them all Down, then go for the Hanged Man.' }
  ];

  /* Node map settings (map.js). steps: when the Reaper comes. weights: how often each room appears in the middle layers
     (a block's `rooms` multiplies them; `max` caps each type on a floor). The new room types (2026-10-25) are tartarus.js's. */
  const map = {
    reaperSteps: 22, reaperWarn: 5, clockChance: 0.35, lockedChance: 0.35,
    weights: { shadow: 5, chest: 1.6, event: 1.2, empty: 1, trap: 0.8, puzzle: 0.9, rest: 0.6, vault: 0.5, rare: 0.45, altar: 0.25 },
    max: { chest: 2, event: 2, trap: 2, puzzle: 1, rest: 1, vault: 1, rare: 1, altar: 1 },
    crackChance: 0.4, shortcutChance: 0.45,
    strongChance: 0.18,
    // Chest contents by block index: yen range, item ids, gear tier offset. Locked chests roll twice on the better table.
    chest: { yen: [[120, 360], [400, 900], [700, 1500], [1100, 2200], [1600, 3000], [2200, 4000], [3000, 5200]],
      items: [['medicine', 'medicine', 'snuff_soul', 'patra_gem', 'dis_poison', 'revival_bead'], ['medicine', 'snuff_soul', 'revival_bead', 'patra_gem', 'dekaja_gem'],
        ['bead', 'snuff_soul', 'revival_bead', 'dekunda_gem', 'dekaja_gem'], ['bead', 'chewing_soul', 'revival_bead', 'tartarus_key'], ['bead', 'chewing_soul', 'bead_chain', 'revival_bead'],
        ['bead_chain', 'chewing_soul', 'soma', 'revival_bead'], ['bead_chain', 'soma', 'chewing_soul', 'revival_bead']],
      gearChance: 0.22, lockedRare: ['sun_naginata', 'thunder_fist', 'gale_bow', 'blaze_blade', 'ice_rapier', 'frost_coat', 'insulated_vest', 'fireproof_suit', 'gale_cloak', 'theurgy_charm', 'sp_bangle', 'star_brooch'] }
  };

  /* Event rooms: usually a line from Fuuka, sometimes (memoryChance) a memory fragment Solar didn't know she had. */
  const events = {
    memoryChance: 0.3,
    lines: [
      ['This room feels… quiet. Too quiet. Let’s keep moving.', 'neutral'],
      ['I can hear something far above us. Like a clock that’s running slow.', 'neutral'],
      ['Solar, your readings flickered just now. Are you okay?', 'surprised'],
      ['The walls are shifting again. Tartarus never looks the same twice.', 'neutral'],
      ['Everyone’s doing great. I’m keeping an eye on all of you.', 'happy'],
      ['There’s a coffin here… no, it’s empty. That’s strange.', 'sad'],
      ['Junpei, please stop poking things. …That goes for you too, Koromaru.', 'neutral'],
      ['I picked up a signal that doesn’t belong here. It sounded like a phone ringing.', 'surprised'],
      ['Akihiko-senpai says he could climb all night. Please don’t.', 'happy'],
      ['Solar, Haenim reacted to something in this room. Does it feel familiar?', 'neutral']
    ]
  };
  /* Memory fragments: square cards in assets/femc/memories/<id>.webp (wide: a 16:9 <id>-wide.webp exists for the big view).
     Add a new card by adding a line here. world: Runners | strangers | Hoax (which charm rings). */
  const MEM = 'assets/femc/memories/';
  // Memories only a scene can give (Tartarus events, cracks, vaults and the simulated drops skip them).
  const NO_DROP = ['runners-lake'];
  const memories = [
    ['runners-campus', 'Runners', 'A Campus at Dusk', 'Brick paths, cold air, a bell tower. She knows the way to a building she’s never seen.'],
    ['runners-energy-drink', 'Runners', 'An Energy Drink', 'Sweet, fizzy, way too much caffeine. Someone always handed her one without asking what she wanted.'],
    ['runners-hoodie', 'Runners', 'An Oversized Hoodie', 'The sleeves cover her hands. It isn’t hers. She wore it anyway.'],
    ['runners-monitor', 'Runners', 'A Glowing Monitor', 'A screen at three in the morning, and a message she never sent.'],
    ['runners-trophy', 'Runners', 'A Trophy', 'Gold plastic, a little crooked. She remembers the weight of it more than the win.', true],
    ['runners-3am', 'Runners', '3 A.M.', 'The hour when the house is asleep and she finally isn’t pretending.', true],
    ['runners-stadium', 'Runners', 'Stadium Lights', 'The roar of a crowd, and one voice in it she could pick out anywhere.', true],
    ['runners-phone', 'Runners', 'A Phone Lighting Up', 'A name on the screen. Her thumb knows it. She doesn’t.', true],
    ['strangers-harbor', 'strangers', 'The Harbor', 'Salt wind, ferry horns, the smell of rain on concrete.'],
    ['strangers-jade-ring', 'strangers', 'A Jade Ring', 'Green and cold on her right hand. She turns it a quarter turn when she’s counting.'],
    ['strangers-lanterns', 'strangers', 'Lanterns', 'A string of red lanterns over a narrow street. Somebody waited under them.'],
    ['strangers-rabbit-socks', 'strangers', 'Rabbit Socks', 'Silly little socks with ears. She laughs before she knows why.'],
    ['strangers-needle', 'strangers', 'A Needle and Thread', 'Careful stitches on a hem. A date she didn’t pick, coming closer.', true],
    ['strangers-ferry', 'strangers', 'The Last Ferry', 'A faded blue terminal, a white ferry at the ramp. A camel coat at the top of it.', true],
    ['strangers-discman', 'strangers', 'A Discman', 'A cracked lid, an old disc inside, batteries dead for years. He opens it to show her anyway.', true],
    ['hoax-croissant', 'Hoax', 'A Croissant', 'Flaky, buttery, eaten too fast between two things she was late for.'],
    ['hoax-ladder', 'Hoax', 'A Ladder', 'Climbing up to hang a banner, everyone watching from below.'],
    ['hoax-leash', 'Hoax', 'A Leash', 'A tug at the other end, and a dog that’s always happy to see her.'],
    ['hoax-poster', 'Hoax', 'A Campaign Poster', 'Her own face, smiling a smile she had to practice.'],
    ['hoax-debate-stage', 'Hoax', 'The Debate Stage', 'Bright lights, a podium, and the person everyone needs her to be.', true],
    ['hoax-president-pin', 'Hoax', 'A President’s Pin', 'Small and heavy. She wasn’t sure she wanted to win.', true],
    ['hoax-crane-game', 'Hoax', 'A Crane Game', 'The claw slips again. Someone beside her keeps feeding it coins anyway.', true],
    // Awarded by searcher links (life sim). No art yet: battle.js / the game's journal draw a placeholder card from the title
    // until assets/femc/memories/<id>.webp exists, then the real card shows up on its own.
    ['runners-rooftop', 'Runners', 'A Rooftop', 'A ladder nobody else uses, a ledge, the whole campus lit up below, and someone who climbed it first and never looked back to see if she’d follow.'],
    ['strangers-suture-kit', 'strangers', 'A Suture Kit', 'Curved needles, small scissors. Her hands know what to do before she does.'],
    ['strangers-low-tide', 'strangers', 'Low Tide', 'Mud to the horizon under sodium lights. Bad coffee in a car, waiting for it to turn.'],
    ['hoax-group-chat', 'Hoax', 'A Group Chat', 'Two in the morning, a name changed to something stupid, and everyone still awake for her.'],
    ['hoax-math-homework', 'Hoax', 'Math Homework', 'Neat working in somebody else’s handwriting, explained twice, patiently.'],
    // Late Runners memory (Kat's ruling 2026-10-27): camping comes back, from Mark's rank 10 or Jaehyun's (whichever is first;
    // both set flag mem-camp). Link-only: never a random drop (NO_DROP), so it can't surface before its place in the year.
    ['runners-lake', 'Runners', 'No Service', 'Four days in the woods and not one bar of signal. A lake so cold it stopped her heart, somebody laughing beside her in it. Then a phone held out to her in the cold, and a voice she knew.'],
    // Batch 51: the fish market's last shift (job-scenes.js) and the Hoax memory floor (story-act4.js a4-jihoon-awakens).
    ['strangers-barley-tea', 'strangers', 'Barley Tea', 'A cup on a low wooden table, steaming in the morning light. There was always some on the stove.'],
    ['hoax-ballot-box', 'Hoax', 'The Ballot Box', 'Folded slips on a gym table under string lights, all of them waiting to be counted.']
  ].map(([id, world, title, text, wide]) => ({ id, world, title, text, img: MEM + id + '.webp', wide: wide ? MEM + id + '-wide.webp' : null, noDrop: NO_DROP.includes(id) }));
  /* A stand-in card for a memory whose art doesn't exist yet (an SVG data URL with the title, in the world's colors).
     battle.js and the game's journal swap it in when a memory image fails to load. */
  const memoryPlaceholder = id => {
    const m = memories.find(x => x.id === id) || { title: String(id || '').replace(/^[a-z]+-/, '').replace(/-/g, ' '), world: '' };
    const c = { Runners: ['#2a0d1e', '#ff8cc0'], strangers: ['#0d1f26', '#7fd6c9'], Hoax: ['#1c1530', '#ffd36b'] }[m.world] || ['#1a1020', '#fff4f9'];
    const x = t => String(t).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
    const words = String(m.title).split(' '), lines = [];
    words.forEach(w => { const l = lines[lines.length - 1]; if (l && (l + ' ' + w).length <= 14) lines[lines.length - 1] = l + ' ' + w; else lines.push(w); });
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560"><rect width="560" height="560" fill="${c[0]}"/><rect x="22" y="22" width="516" height="516" fill="none" stroke="${c[1]}" stroke-width="3" opacity=".6"/>`
      + `<text x="280" y="120" fill="${c[1]}" font-family="Georgia, serif" font-size="26" letter-spacing="6" text-anchor="middle" opacity=".8">${x(String(m.world).toUpperCase())}</text>`
      + lines.map((l, i) => `<text x="280" y="${300 - (lines.length - 1) * 30 + i * 60}" fill="#fff4f9" font-family="Georgia, serif" font-style="italic" font-size="50" text-anchor="middle">${x(l)}</text>`).join('')
      + `<text x="280" y="470" fill="${c[1]}" font-family="Georgia, serif" font-size="22" text-anchor="middle" opacity=".7">memory fragment</text></svg>`;
    return 'data:image/svg+xml,' + encodeURIComponent(svg);
  };

  /* Music per screen. A key is one file or a rotation (a list): each time the key starts it takes the next file, never the
     one that just played (battle.js keeps the place in localStorage, so the rotation carries over from fight to fight).
     world: Solar's world songs (the hub's own files), played softly over a memory fragment's card. Swap files here. */
  const M = 'assets/femc/music/', AU = 'assets/audio/';
  const music = {
    title: M + 'basement.mp3',                // the entrance / hub (the Tartarus lobby)
    battle: [M + 'wiping-all-out.mp3', M + 'mass-destruction.mp3', M + 'wiping-all-out.mp3', M + 'its-going-down-now.mp3'], // regular fights: Wiping All Out is the main theme
    danger: M + 'danger-zone.mp3',            // Strong Shadows, the Reaper, memory-floor bosses
    boss: M + 'calamity.mp3',                 // full-moon bosses
    villain: M + 'blooming-villain.mp3',      // rival fights (Haechan's mirror match; Strega, if they come)
    p5: [M + 'last-surprise.mp3', M + 'break-out-of.mp3'], // fights with the Persona 5 cast (none yet)
    'finale-call': M + 'nyx.mp3',             // 3/6: Last Call
    'finale-train': M + 'period.mp3',         // 3/6: No Stops (the Last Train)
    'finale-last': M + 'burn-my-dread-last-battle.mp3', // 3/6: End of the Line
    floor: M + 'tartarus-thebel.mp3',         // the node map, results, skill tree
    mementos: M + 'mementos.mp3',             // memory floors (before the fight) and the Memories screen
    shop: M + 'paulownia-mall.mp3',           // Paulownia Mall
    victory: M + 'full-moon-full-life.mp3',   // operation complete
    gameover: null,
    world: {
      runners: [AU + 'Camo-Runners.mp3', AU + 'chanmina-ashell.mp3', AU + 'rose-3am.mp3'],
      strangers: [AU + 'EthelCain-Strangers.mp3', AU + 'EthelCain-Crush.mp3', AU + 'CocteauTwins-SeaSwallowMe.mp3'],
      hoax: [AU + 'TaylorSwift-Hoax.mp3', AU + 'arianagrande-someonelikeu.mp3']
    },
    alt: { tartarus: M + 'master-of-tartarus.mp3', classic: M + 'mass-destruction.mp3' }
  };

  /* Cinematic clips (Kat's videos). Each key is a moment; a clip plays where it fits and falls back to the stills if it can't.
     src: full-size, small: for phones / Performance mode, last: a still of the final frame (held while the title comes in).
     Ready for Kat's next clips: add `summon: { src, small }` (Solar's Evoker flash, used in place of the Evoker still) and
     `theurgy_solar: { src, small }` (an animated Rise and Shine; Solar's theurgy.video already points at this key). */
  const V = 'assets/femc/battle/art/summon/video/';
  const clips = {
    awakening: { src: V + 'haenim-rises.mp4', small: V + 'haenim-rises-540.mp4', last: V + 'haenim-rises-last.webp', after: 5, maxWait: 2500 }
  };

  /* Fuuka. Strings can be arrays (one is picked); {name}, {el}, {n} are filled in. face is her portrait. */
  const navigator = { id: 'fuuka', name: 'Fuuka', faces: ['neutral', 'happy', 'surprised', 'sad'] };
  const nav = {
    floor: [['Shadows ahead. I’ll scan them as you go.', 'More of them on this floor. Stay sharp!'], 'neutral'],
    block_thebel: ['Thebel. The first block. If you’re not sure what they’re weak to, try Analyze.', 'neutral'],
    block_arqa: ['Arqa. These ones aim for your weak points. Careful!', 'surprised'],
    block_yabbashah: ['Yabbashah… the walls look like they’re bleeding. The Shadows here are tougher.', 'surprised'],
    block_tziah: ['Tziah. It’s all mirrors. Don’t let the reflections distract you.', 'neutral'],
    block_harabah: ['Harabah. Heavy hitters ahead. Keep your guard up!', 'surprised'],
    block_adamah: ['Adamah. I can barely see the top from here.', 'neutral'],
    block_empyrean: ['Empyrean… we’re near the top. Everything up here is dangerous.', 'surprised'],
    boss: ['That’s a full-moon Shadow! Watch how it fights. There’s always a trick.', 'surprised'],
    priestess: ['That’s a full-moon Shadow! Its veil keeps changing color. Hit it with the matching element!', 'surprised'],
    empress: ['Two of them! The Empress only lets one element through. Let me analyze her!', 'surprised'],
    hierophant: ['He’s preaching… and it’s making him stronger! We need Dekaja!', 'surprised'],
    lovers: ['Don’t look into her eyes! She’ll charm you!', 'surprised'],
    chariot: ['The Chariot is drawing power from Justice! Take Justice out first!', 'surprised'],
    hermit: ['It vanished into the static! Analyze to find it!', 'surprised'],
    fortune: ['That wheel… anything could happen. Be ready!', 'surprised'],
    hanged: ['It’s shielded by those effigies! Knock them all down first!', 'surprised'],
    reaper: [['That’s… no. Run! Please, just run!', 'Its readings are off the scale. RUN!'], 'sad'],
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
    charge: ['It’s charging up a huge attack! Guard!', 'surprised'],
    veil: ['Its veil turned {el}! It’s weak to {el} now!', 'neutral'],
    gate: ['Found it! The Empress only takes {el} right now!', 'happy'],
    gateShift: ['The Empress changed! I need to scan her again!', 'surprised'],
    emperorShift: ['The Emperor’s weakness moved! Scan him again!', 'surprised'],
    sermon: ['His sermon made him stronger… and it won’t wear off!', 'surprised'],
    penance: ['That curse isn’t fading! Dekunda would clear it!', 'surprised'],
    composure: ['He lost his composure! His blessings are gone!', 'happy'],
    judgment: ['Justice is pouring power into the Chariot!', 'surprised'],
    drive: ['Without Justice, the Chariot’s slowing down!', 'happy'],
    hidden: ['I can’t see it! Analyze, or hit everyone at once!', 'surprised'],
    found: ['There! I’ve got it pinned. Hit it now!', 'happy'],
    flushed: ['You flushed it out!', 'happy'],
    wheel: ['The wheel’s spinning…!', 'neutral'],
    shielded: ['It’s shielded! The effigies are protecting it!', 'sad'],
    exposed: ['The effigies are down! It’s wide open!', 'happy'],
    effigies: ['It hung up more effigies!', 'surprised'],
    summon: ['More Shadows! It called for help!', 'surprised'],
    bind: ['It’s bound! It can’t move!', 'happy'],
    last: ['Just one left!', 'neutral'],
    win: [['We did it! Great job, everyone!', 'All clear! Nice work!'], 'happy'],
    bossWin: ['The full-moon Shadow is gone... You did it, Solar!', 'happy'],
    reaperWin: ['You… you beat it? I don’t believe it…', 'surprised'],
    escape: ['We got away!', 'neutral'],
    escapeFail: ['Couldn’t get away!', 'sad'],
    analyze: ['Scan complete! Here’s what I found.', 'neutral'],
    clock: ['The clock’s chime... everyone’s fully healed.', 'happy'],
    tired: ['{name} looks exhausted… a Clock or a trip home would help.', 'sad'],
    theurgyReady: ['{name}’s ready! Let it rip!', 'happy'],
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
    tactics: ['Got it. I’ll pass the orders along.', 'neutral'],
    // The node map
    mapStart: ['I’ll guide you from here. The stairs are somewhere ahead.', 'neutral'],
    mapScan: ['Scanning… I’ve marked what I can see.', 'neutral'],
    mapScanJuno: ['Juno can see the whole floor. Here’s everything!', 'happy'],
    reaperNear: ['Something’s coming… I don’t like this. Let’s find the stairs.', 'surprised'],
    reaperCame: ['It’s here! The Reaper! Get to the stairs, now!', 'sad'],
    access: ['An access point. Your progress is saved. We can head home from here.', 'happy'],
    chest: [['A treasure chest!', 'Ooh, something shiny!'], 'happy'],
    locked: ['It’s locked. A Tartarus Key would open it.', 'neutral'],
    stairs: ['The stairs! Ready to go up?', 'neutral'],
    barrier: ['The way up is sealed. A full-moon Shadow is waiting at the top of this block.', 'surprised'],
    barrierOpen: ['The barrier’s open. We beat this one already.', 'happy'],
    memory: ['Solar…? Haenim’s charm is ringing.', 'surprised'],
    empty: [['Nothing here.', 'Just an empty corridor.'], 'neutral'],
    // Rush (auto-battle)
    rushOn: ['Rush! I’ll keep an eye on everyone’s HP.', 'happy'],
    rushStop: ['{name} is hurt! I’m taking you off Rush.', 'surprised'],
    rushBoss: ['This one’s too dangerous to rush. You take it from here.', 'surprised'],
    rushNo: ['Rush is off for this kind of fight. You can change that in Settings.', 'neutral'],
    // The skill system's moves
    ward: ['The bell! Nothing can touch you right now!', 'happy'],
    taunt: ['{name} is drawing their attention!', 'surprised'],
    flank: ['They’re all looking at {name}. Hit them from the side!', 'happy'],
    kitsune: ['Everyone’s so fast…! Go, go!', 'happy'],
    bluff: ['Its buffs are gone, and it’s reeling!', 'happy'],
    counter: ['{name} hit back!', 'happy'],
    endure: ['{name} held on!', 'surprised']
  };

  /* Difficulty (Settings). pdmg: party damage, edmg: Shadow damage, heal: party healing, reaper: the Reaper hunts you on the
     node map, strong: how much more often Strong Shadow rooms appear. Changeable any time. */
  const difficulty = {
    story: { name: 'Story', pdmg: 1.3, edmg: 0.6, heal: 1, reaper: false, strong: 1, desc: 'For the story. You hit 30% harder, Shadows hit 40% softer, and the Reaper never comes.' },
    normal: { name: 'Normal', pdmg: 1, edmg: 1, heal: 1, reaper: true, strong: 1, desc: 'The intended balance.' },
    hard: { name: 'Hard', pdmg: 0.9, edmg: 1.55, heal: 0.7, reaper: true, strong: 2, tough: true, desc: 'You hit 10% softer, Shadows hit 55% harder, healing is 30% weaker, and Strong rooms turn up twice as often.' },
    expert: { name: 'Expert', pdmg: 0.8, edmg: 1.8, heal: 0.6, reaper: true, strong: 3, tough: true, desc: 'You hit 20% softer, Shadows hit 80% harder, healing is 40% weaker, and Strong rooms turn up three times as often.' },
    merciless: { name: 'Merciless', pdmg: 0.7, edmg: 2.2, heal: 0.5, reaper: true, strong: 4, tough: true, desc: 'For people who want to suffer. You hit 30% softer, Shadows hit more than twice as hard, healing is halved, and Strong rooms are everywhere.' }
  };

  /* The "?" glossary (help panel) and Fuuka's one-time tips. Statuses and tactics are listed from ailments/tactics. */
  const glossary = [
    { id: 'down', name: 'Down', text: 'Hit a Shadow’s weakness, or land a critical, and it falls Down. A Downed foe can’t act until it gets back up on its next turn. Guarding cancels a weakness.' },
    { id: 'onemore', name: 'One More', text: 'Knock a foe Down and you get One More: another action right away. Chain weaknesses to keep the turn going.' },
    { id: 'shift', name: 'Shift', text: 'During a One More you can pass the turn to someone who hasn’t gone yet in this chain. They hit harder (×1.25, more with Haenim’s Star branch). Use it to reach a weakness the current member can’t hit.' },
    { id: 'allout', name: 'All-Out Attack', text: 'When every Shadow is Down, the whole party piles in. Big damage to all foes, and the finish card of whoever started it. You can say “Not yet” to keep your One More instead.' },
    { id: 'theurgy', name: 'Theurgy', text: 'Each member’s gold gauge fills from hitting weaknesses, landing crits, healing, buffing and taking hits. When it’s full, Theurgy appears at the top of their menu: an ultimate move that doesn’t cost SP. The gauge carries between fights.' },
    { id: 'status', name: 'Statuses', list: 'ailments', text: 'Ailments wear off on their own after a few turns. Patra Gems and Patra cure most of them; Dis-Poison cures poison.' },
    { id: 'tactics', name: 'Tactics', list: 'tactics', text: 'Choose how each member fights: Direct lets you pick every action; the others act on their own using only affinities you’ve learned. Change them from the Party screen or the battle menu (free action).' },
    { id: 'fatigue', name: 'Fatigue', text: 'Fight six times in a row and a member gets Tired: weaker stats and the odd lost turn. A Clock room, the clock before a full moon, or leaving Tartarus fixes it.' },
    { id: 'reaper', name: 'The Reaper', text: 'Linger too long on one floor and the Reaper comes, and it hunts you room by room. It’s far stronger than anything else here. Find the stairs, or run if it catches you. Story difficulty keeps it away.' },
    { id: 'access', name: 'Access points', text: 'Green terminals that save your progress. Next time you can start from the highest one you’ve touched, and you can leave Tartarus from any of them.' },
    { id: 'evolutions', name: 'Evolutions', text: 'Some Personas evolve when their user reaches a level, or after a full moon: Polydeuces into Caesar, Io into Isis, and more. An evolved Persona is stronger and learns new skills.' },
    { id: 'forms', name: 'Haenim’s forms', text: 'Three rays of Haenim’s sun end in a keystone that unlocks one of her forms (Healer: Sunna, Mage: Mazu, Support: Nike), each with its own affinities and a signature skill. All three and a full moon cleared open the crown: Haenim, Unveiled. Switch forms on the Personas screen.' },
    { id: 'skills', name: 'Skills', text: 'A Persona holds eight skills. Solar keeps every skill she learns in her skill list and swaps any of them into her eight slots outside battle (Skills → Skill list); a friend learning a ninth asks which one to forget. Skills upgrade in place: Agi becomes Agilao in the same slot. Haenim’s sun and each friend’s tree live in the menu’s Skills tab; a friend’s tiers open at link ranks 2, 4, 7 and 9, and at MAX one signature skill evolves.' },
    { id: 'buffs', name: 'Buffs and debuffs', text: 'They stack up to three levels (▲▲▲). Casting the same one again adds a level and refreshes it to 3 turns. Dekaja and Call the Bluff strip a foe’s buffs; Dekunda clears the party’s debuffs.' },
    { id: 'analyze', name: 'Analyze', text: 'A free action: Fuuka reveals a Shadow’s affinities and status. What you learn (by Analyze or by hitting it) is remembered, and the skill list marks each skill WEAK, RESIST, NULL, DRAIN or REPEL against the selected Shadow; “?” means you haven’t found out yet.' },
    { id: 'rush', name: 'Rush', text: 'Auto-battle for easy fights: everyone attacks (members with a Tactic follow it) at double speed. It stops by itself when someone gets hurt or on fights it isn’t allowed in (see Settings). Press R or the Rush button.' }
  ];
  const tips = {
    down: ['down', 'It’s Down! Hit a weakness or land a crit and they fall over. You get One More!'],
    onemore: ['onemore', 'One More means another action, right now. Keep chaining weaknesses!'],
    shift: ['shift', 'You can Shift! Pass your One More to someone who hasn’t gone yet. They hit harder.'],
    allout: ['allout', 'They’re all Down! Time for an All-Out Attack!'],
    theurgy: ['theurgy', 'A Theurgy gauge is full! It’s at the top of their menu, and it costs no SP.'],
    status: ['status', 'Ailments! Check the ? panel for what each one does. Patra Gems cure most of them.'],
    tactics: ['tactics', 'You can give orders with Tactics, from the menu or the Party screen. Direct means you choose.'],
    fatigue: ['fatigue', 'Someone’s Tired. A Clock room or a trip home will fix it.'],
    reaper: ['reaper', 'The Reaper hunts anyone who lingers. Don’t stay on one floor too long!'],
    access: ['access', 'Access points save your progress. You can start from here next time.'],
    evolutions: ['evolutions', 'A Persona evolved! Evolved Personas are stronger and learn new skills.'],
    forms: ['forms', 'A new form for Haenim! You can switch forms on the Personas screen.'],
    rush: ['rush', 'Easy fight? Press R (or the Rush button) and the party fights on its own.']
  };

  /* ── Haenim's sun (the skill system: Kat's picks 2026-10-20, made a radial sun 2026-10-25). Lives in the field menu's Skills
     tab (menu.js, drawn by sun.js); rules in engine.js. Lady Sun (sun1) is the core; the rest of the Sun trunk is the corona ring
     around it. Six rays are build paths: Striker (her naginata), Trickster (the fox), Mage (Jade: strangers, keystone Mazu),
     Healer (Bell: Runners, keystone Sunna), Guard (the Veil) and Support (Star: Hoax, keystone Nike). Each ray ends in a keystone
     at its tip; where two rays meet, hybrid nodes need a node from each. Unveiled crowns the sun at the top.
     Every node id from the old five-branch tree is still here (moved onto a ray), so saves keep every node they bought.
     Node: { id, name, cost (skill points), needs: [all of], any: [one of], lvl (Solar's level), choice (pick one of the nodes
     sharing it), memory (a fragment id: hidden until it's found), keystone (a ray's tip; `form` awakens one of her forms; a
     keystone without a form refunds on a respec), at (where sun.js draws it: [ring, lane] along its ray, or { a: degrees, r }),
     desc, fx }.
     fx (engine.js treeFx): stats (st ma en ag lu hp sp), learn (a skill; a later tier in its chain upgrades in place), healMult,
     party-wide: crit, bind, ropeCrit, weakMult, critMult, shiftMult, shiftSp, shiftTh, alloutMult, regen, openBuff, autoAnalyze,
     flank; and Solar's own passives (engine.js PASSIVE, capped there): counter, spRegen, hpRegen, resist, quick, firstFree,
     endure, critUp, evade, haste, firstCut, weakUp, ailUp, followUp, openBuff [self], partyOpen [party], ailDmg, lowHpUp, physUp,
     magicUp, thStart, buffTurns, debuffTurns, weakSp, critAdd, critIf, ailTurns, freezeUp, guardHeal, corona, guardianBell,
     nullAil, momentum, boost { el: mult }. */
  const tree = [
    { id: 'sun', core: true, name: 'Sun', world: 'Haenim', color: '#ffb35c', theme: 'Her own growth · Daybreak · the Golden Rope',
      blurb: 'Lady Sun herself. Every ray starts here; Daybreak and the golden rope grow brighter around her.',
      nodes: [
        { id: 'sun1', name: 'Lady Sun', cost: 1, at: { a: 0, r: 0 }, desc: '+10 max HP and +8 max SP. Every ray starts here.', fx: { hp: 10, sp: 8 } },
        { id: 'sun2', name: 'Morning Glory', cost: 2, needs: ['sun1'], at: { a: 150, r: 1.3 }, desc: 'Daybreak becomes Morning Glory (same slot): heavy light damage.', fx: { learn: 'morning_glory' } },
        { id: 'sun3', name: 'Golden Tether', cost: 2, needs: ['sun1'], at: { a: 30, r: 1.3 }, desc: 'The Golden Rope becomes the Golden Tether (same slot): heavier, binds more often.', fx: { learn: 'golden_tether' } },
        { id: 'sun4', name: 'Sunlit Will', cost: 2, needs: ['sun2', 'sun3'], at: { a: 90, r: 1.3 }, desc: '+2 Ma, +2 En and +12 max SP.', fx: { ma: 2, en: 2, sp: 12 } },
        { id: 'sun5', name: 'High Noon', cost: 3, needs: ['sun2'], lvl: 30, at: { a: 210, r: 1.3 }, desc: 'Morning Glory becomes High Noon (same slot): severe light damage.', fx: { learn: 'high_noon' } },
        { id: 'sun6', name: 'Heaven’s Rope', cost: 3, needs: ['sun3'], lvl: 30, at: { a: 330, r: 1.3 }, desc: 'The Tether becomes Heaven’s Rope (same slot): two heavy lashes, each may Bind.', fx: { learn: 'heavens_rope' } },
        { id: 'sun7', name: 'Zenith', cost: 3, needs: ['sun5', 'sun6'], lvl: 40, at: { a: 270, r: 1.3 }, desc: '+3 St, Ma, En, Ag and Lu, +25 max HP and +15 max SP.', fx: { st: 3, ma: 3, en: 3, ag: 3, lu: 3, hp: 25, sp: 15 } }
      ] },
    { id: 'striker', ray: true, angle: 0, name: 'Striker', world: 'Naginata', color: '#ff5d7e', theme: 'Physical · Crits · Follow-ups',
      blurb: 'Her own naginata. Nobody taught her to hold it like that.',
      nodes: [
        { id: 'st1', name: 'Naginata Form', cost: 1, needs: ['sun1'], at: [1, 0], desc: '+2 St and +12 max HP.', fx: { st: 2, hp: 12 } },
        { id: 'st2', name: 'Sun Thrust', cost: 1, needs: ['st1'], at: [2, 0], desc: 'Learn Sun Thrust: medium pierce damage to one foe.', fx: { learn: 'sun_thrust' } },
        { id: 'st3', name: 'Follow Through', cost: 2, needs: ['st2'], at: [3, 0], desc: 'After her single-target hits, a 20% chance her blade follows with a free strike.', fx: { followUp: 0.2 } },
        { id: 'st4a', name: 'Brute Force', cost: 2, needs: ['st3'], choice: 'striker', at: [4, -1], desc: 'Choice: her physical skills and attacks hit 15% harder.', fx: { physUp: 0.15 } },
        { id: 'st4b', name: 'Keen Edge', cost: 2, needs: ['st3'], choice: 'striker', at: [4, 1], desc: 'Choice: her critical rate rises by 12%.', fx: { critUp: 12 } },
        { id: 'st5', name: 'Flare Thrust', cost: 2, any: ['st4a', 'st4b'], at: [5, 0], desc: 'Sun Thrust becomes Flare Thrust (same slot): heavy pierce damage.', fx: { learn: 'flare_thrust' } },
        { id: 'st-m1', name: 'Last Lap', cost: 2, needs: ['st5'], memory: 'runners-trophy', at: [6, -1], desc: 'Below a third of her HP, Solar hits 30% harder.', fx: { lowHpUp: 0.3 } },
        { id: 'st6', name: 'Gather Light', cost: 2, needs: ['st5'], at: [6, 0], desc: 'Learn Gather Light: her next physical skill or attack deals double damage.', fx: { learn: 'gather_light' } },
        { id: 'veil5', name: 'Quick Draw', cost: 2, needs: ['st5'], at: [6, 1], desc: 'Evoker trick: Solar always acts first on the first turn of a battle.', fx: { quick: true } },
        { id: 'st8', name: 'Pressure Point', cost: 2, needs: ['st6'], at: [7, -1], desc: 'Her critical hits deal 30% more.', fx: { critAdd: 0.3 } },
        { id: 'st7', name: 'Solstice Edge', cost: 3, needs: ['st6'], lvl: 40, at: [7, 0], desc: 'Flare Thrust becomes Solstice Edge (same slot): severe pierce damage; crits often.', fx: { learn: 'solstice_edge' } },
        { id: 'st-key', name: 'Daystar', cost: 3, needs: ['st7'], keystone: true, at: [8, 0], desc: 'Keystone: her physical skills hit 15% harder, her follow-up chance rises by 10%, and she starts every battle with attack up.', fx: { physUp: 0.15, followUp: 0.1, openBuff: ['atk'] } }
      ] },
    { id: 'trickster', ray: true, angle: 60, name: 'Trickster', world: 'Fox', color: '#b98cff', theme: 'Ailments · Crits · Binds',
      blurb: 'A fox’s habits: the smile, the feint, the knife she flicks without looking.',
      nodes: [
        { id: 'tr1', name: 'Fox Tail', cost: 1, needs: ['sun1'], at: [1, 0], desc: '+2 Lu and +2 Ag.', fx: { lu: 2, ag: 2 } },
        { id: 'bell3', name: 'Kunai Flick', cost: 2, needs: ['tr1'], at: [2, 0], desc: 'Learn Kunai Flick: light pierce damage; ×3.5 crits on a debuffed or ailing foe, or a weak spot.', fx: { learn: 'kunai_flick' } },
        { id: 'tr2', name: 'Bewitch', cost: 2, needs: ['bell3'], at: [3, 0], desc: 'Learn Bewitch: may Charm one foe.', fx: { learn: 'bewitch' } },
        { id: 'jade3', name: 'Red Cord', cost: 2, needs: ['tr2'], at: [4, 0], desc: 'The Golden Rope and its upgrades bind 25% more often and crit more.', fx: { bind: 0.25, ropeCrit: 12 } },
        { id: 'jade-m2', name: 'Fine Stitch', cost: 2, needs: ['jade3'], memory: 'strangers-needle', at: [4, 1.1], desc: 'Binds from the Golden Rope, its upgrades and Undertow last 2 turns.', fx: { bindTurns: 2 } },
        { id: 'tr3a', name: 'Sly Grin', cost: 2, needs: ['jade3'], choice: 'trickster', at: [5, -1], desc: 'Choice: her ailments land 12% more often.', fx: { ailUp: 0.12 } },
        { id: 'tr3b', name: 'Opportunist', cost: 2, needs: ['jade3'], choice: 'trickster', at: [5, 1], desc: 'Choice: she hits an ailing foe 25% harder.', fx: { ailDmg: 0.25 } },
        { id: 'tr4', name: 'Fox Mask', cost: 2, any: ['tr3a', 'tr3b'], at: [6, 0], desc: 'Learn Fox Mask: may inflict Fear on every foe.', fx: { learn: 'fox_mask' } },
        { id: 'tr5', name: 'Nimble Fingers', cost: 2, needs: ['tr4'], at: [7, -1], desc: '+2 Ag, and she moves 15% sooner in the turn order.', fx: { ag: 2, haste: 0.15 } },
        { id: 'veil6', name: 'Double Tap', cost: 3, needs: ['tr4'], at: [7, 0], desc: 'Evoker trick: the first skill Solar uses in each battle costs nothing.', fx: { firstFree: true } },
        { id: 'tr-m1', name: 'Lantern Trick', cost: 2, needs: ['tr4'], memory: 'strangers-lanterns', at: [7, 1], desc: 'Her ailments (all but Bind) last a turn longer.', fx: { ailTurns: 1 } },
        { id: 'tr-key', name: 'Sunshower', cost: 3, needs: ['veil6'], keystone: true, at: [8, 0], desc: 'Keystone: a fox’s wedding. Her ailments land 15% more often, and she hits ailing foes 20% harder.', fx: { ailUp: 0.15, ailDmg: 0.2 } }
      ] },
    { id: 'mage', ray: true, angle: 120, name: 'Mage', world: 'Jade', who: 'strangers', color: '#6fc8ff', theme: 'Ice · Magic · Weakness reading', form: 'haenim-mazu',
      blurb: 'A jade ring on her right hand. Cold, exact; she turns it a quarter turn when she’s counting.',
      nodes: [
        { id: 'jade1', name: 'Jade Ring', cost: 1, needs: ['sun1'], at: [1, 0], desc: '+2 St. Party critical rate +8%.', fx: { st: 2, crit: 8 } },
        { id: 'jade2', name: 'Bufu', cost: 1, needs: ['jade1'], at: [2, 0], desc: 'Learn Bufu: ice damage to one foe.', fx: { learn: 'bufu' } },
        { id: 'mg1', name: 'Cold Focus', cost: 2, needs: ['jade2'], at: [3, 0], desc: '+3 Ma and +10 max SP; her magic skills hit 10% harder.', fx: { ma: 3, sp: 10, magicUp: 0.1 } },
        { id: 'jade4a', name: 'Cold Read', cost: 2, needs: ['mg1'], choice: 'jade', at: [4, -1], desc: 'Choice: every foe’s affinities are known at the start of battle, and weakness damage is 25% higher for the party.', fx: { autoAnalyze: true, weakMult: 1.25 } },
        { id: 'jade4b', name: 'Cut Deep', cost: 2, needs: ['mg1'], choice: 'jade', at: [4, 1], desc: 'Choice: the party’s critical hits deal ×2 instead of ×1.6.', fx: { critMult: 2 } },
        { id: 'jade5', name: 'Bufula', cost: 2, any: ['jade4a', 'jade4b'], at: [5, 0], desc: 'Bufu becomes Bufula (same slot): heavier ice damage.', fx: { learn: 'bufula' } },
        { id: 'mg2', name: 'Agidyne', cost: 3, needs: ['jade5'], lvl: 34, at: [6, -1], desc: 'Her Agi line becomes Agidyne (same slot): heavy fire damage.', fx: { learn: 'agidyne' } },
        { id: 'jade6', name: 'Mabufula', cost: 2, needs: ['jade5'], at: [6, 0], desc: 'Learn Mabufula: medium ice damage to all foes.', fx: { learn: 'mabufula' } },
        { id: 'jade-m1', name: 'Undertow', cost: 3, needs: ['jade5'], memory: 'strangers-harbor', at: [6, 1], desc: 'Learn Undertow: heavy ice damage to one foe, and the tide may Bind it.', fx: { learn: 'undertow' } },
        { id: 'mg3', name: 'Concentrate', cost: 2, needs: ['jade6'], at: [7, -1], desc: 'Learn Concentrate: her next magic skill deals double damage.', fx: { learn: 'concentrate' } },
        { id: 'jade7', name: 'Bufudyne', cost: 3, needs: ['jade6'], lvl: 32, at: [7, 0], desc: 'Bufula becomes Bufudyne (same slot): heavy ice damage.', fx: { learn: 'bufudyne' } },
        { id: 'mg4', name: 'Resonance', cost: 2, needs: ['jade6'], at: [7, 1], desc: 'Hitting a weakness gives her back 3 SP (once a skill), and her weakness damage is 10% higher.', fx: { weakSp: 3, weakUp: 0.1 } },
        { id: 'jade-key', name: 'Mazu', cost: 3, needs: ['jade7'], keystone: true, form: 'haenim-mazu', at: [8, 0], desc: 'Keystone: Haenim’s strangers form, Mazu. Ice, precision and her Low Tide.', fx: {} }
      ] },
    { id: 'healer', ray: true, angle: 180, name: 'Healer', world: 'Bell', who: 'Runners', color: '#ffd36b', theme: 'Healing · Regen · Revival · Speed', form: 'haenim-sunna',
      blurb: 'A gold bell from Kiriko. It rings like the end of a race.',
      nodes: [
        { id: 'bell1', name: 'Gold Bell', cost: 1, needs: ['sun1'], at: [1, 0], desc: '+15 max SP. Haenim’s healing is 25% stronger.', fx: { sp: 15, healMult: 1.25 } },
        { id: 'bell2', name: 'Diarama', cost: 1, needs: ['bell1'], at: [2, 0], desc: 'Dia becomes Diarama (same slot): a lot of HP to one ally.', fx: { learn: 'diarama' } },
        { id: 'hl1', name: 'Soft Landing', cost: 2, needs: ['bell2'], at: [3, 0], desc: 'Solar regains 4% of her HP at the start of each of her turns.', fx: { hpRegen: 0.04 } },
        { id: 'bell4a', name: 'Recarm', cost: 2, needs: ['hl1'], choice: 'bell', at: [4, -1], desc: 'Choice: learn Recarm, revive a fallen ally with half their HP.', fx: { learn: 'recarm' } },
        { id: 'bell4b', name: 'Runner’s High', cost: 2, needs: ['hl1'], choice: 'bell', at: [4, 1], desc: 'Choice: after each of Solar’s turns the party regains 6% HP.', fx: { regen: 0.06 } },
        { id: 'bell5', name: 'Mediarama', cost: 2, any: ['bell4a', 'bell4b'], at: [5, 0], desc: 'Learn Mediarama: a lot of HP to the whole party.', fx: { learn: 'mediarama' } },
        { id: 'hl2', name: 'Me Patra', cost: 1, needs: ['bell5'], at: [6, -1], desc: 'Learn Me Patra: cure Charm, Fear, Distress, Freeze and Shock on the whole party.', fx: { learn: 'me_patra' } },
        { id: 'bell6', name: 'Protective Suzu', cost: 3, needs: ['bell5'], at: [6, 0], desc: 'Learn Protective Suzu: the party can’t be hurt until their next turn, and every ailment is cured.', fx: { learn: 'protective_suzu' } },
        { id: 'bell-m2', name: 'Samarecarm', cost: 2, needs: ['bell5'], memory: 'runners-rooftop', at: [6, 1], desc: 'Learn Samarecarm (or Recarm becomes it, same slot): revive with full HP.', fx: { learn: 'samarecarm' } },
        { id: 'bell-m1', name: 'Kitsune Rush', cost: 4, needs: ['bell6'], memory: 'runners-stadium', at: [7, -1], desc: 'Ultimate: learn Kitsune Rush. For 3 turns the party moves first, +50% agility and accuracy, HP/SP costs halved.', fx: { learn: 'kitsune_rush' } },
        { id: 'bell7', name: 'Diarahan', cost: 3, needs: ['bell6'], lvl: 32, at: [7, 0], desc: 'Diarama becomes Diarahan (same slot): fully heals one ally.', fx: { learn: 'diarahan' } },
        { id: 'hl3', name: 'Cooldown Lap', cost: 2, needs: ['bell6'], at: [7, 1], desc: 'Her healing is 20% stronger, and she regains 2 SP at the start of each turn.', fx: { healMult: 1.2, spRegen: 2 } },
        { id: 'bell-key', name: 'Sunna', cost: 3, needs: ['bell7'], keystone: true, form: 'haenim-sunna', at: [8, 0], desc: 'Keystone: Haenim’s Runners form, Sunna. Support and speed, and her Encore.', fx: {} }
      ] },
    { id: 'guard', ray: true, angle: 240, name: 'Guard', world: 'Veil', color: '#8fb8ff', theme: 'Counters · Endurance · Taunts',
      blurb: 'What the veil hides: the habits she doesn’t remember learning.',
      nodes: [
        { id: 'veil1', name: 'Counterstrike', cost: 1, needs: ['sun1'], at: [1, 0], desc: 'Solar has a 15% chance to hit back when a Shadow strikes her alone.', fx: { counter: 0.15 } },
        { id: 'gd1', name: 'Iron Posture', cost: 1, needs: ['veil1'], at: [2, 0], desc: '+3 En and +20 max HP.', fx: { en: 3, hp: 20 } },
        { id: 'veil2', name: 'Morning Dew', cost: 2, needs: ['gd1'], at: [3, -1], desc: 'Solar regains 3 SP at the start of each of her turns.', fx: { spRegen: 3 } },
        { id: 'star3', name: 'Public Veneer', cost: 2, needs: ['gd1'], at: [3, 0], desc: 'Learn Public Veneer: single-target attacks go to Solar for 3 turns; her defense rises and she may counter.', fx: { learn: 'public_veneer' } },
        { id: 'veil3', name: 'Off Angle Flank', cost: 2, needs: ['star3'], at: [4, 0], desc: 'Passive: while someone in the party draws aggro (Public Veneer, Provoke), everyone else gets big evasion and +30% critical rate.', fx: { flank: true }, icon: 'sk-flank' },
        { id: 'veil4a', name: 'Veil of Dusk', cost: 2, needs: ['veil3'], choice: 'veil', at: [5, -1], desc: 'Choice: Solar is no longer weak to Dark (in every form): she resists it.', fx: { resist: 'dark' } },
        { id: 'veil4b', name: 'High Counter', cost: 2, needs: ['veil3'], choice: 'veil', at: [5, 1], desc: 'Choice: Solar’s counter chance rises by 15% more.', fx: { counter: 0.15 } },
        { id: 'gd2', name: 'Marakukaja', cost: 2, any: ['veil4a', 'veil4b'], at: [6, 0], desc: 'Learn Marakukaja: the party’s defense up a level.', fx: { learn: 'marakukaja' } },
        { id: 'gd-m1', name: 'Hold the Podium', cost: 2, needs: ['gd2'], memory: 'hoax-debate-stage', at: [6, 1], desc: 'When Solar Guards she regains 8% of her HP and 4 SP.', fx: { guardHeal: 0.08 } },
        { id: 'gd3', name: 'Sidestep', cost: 2, needs: ['gd2'], at: [7, -1], desc: 'Big evasion for Solar (+12).', fx: { evade: 12 } },
        { id: 'veil7', name: 'Endure', cost: 3, needs: ['gd2'], lvl: 30, at: [7, 0], desc: 'Once per battle, a blow that would knock Solar out leaves her at 1 HP.', fx: { endure: true } },
        { id: 'gd4', name: 'Bastion', cost: 2, needs: ['gd2'], at: [7, 1], desc: 'Solar starts every battle with defense up.', fx: { openBuff: ['def'] } },
        { id: 'gd-key', name: 'Corona', cost: 3, needs: ['veil7'], keystone: true, at: [8, 0], desc: 'Keystone: while Solar stands, the party takes 10% less damage, and her counter chance rises by 10%.', fx: { corona: 0.1, counter: 0.1 } }
      ] },
    { id: 'support', ray: true, angle: 300, name: 'Support', world: 'Star', who: 'Hoax', color: '#ff8cc0', theme: 'Buffs · Debuffs · Shift · All-Out', form: 'haenim-nike',
      blurb: 'A star pin from the campaign. Everyone looks to her when she wears it.',
      nodes: [
        { id: 'star1', name: 'Star Pin', cost: 1, needs: ['sun1'], at: [1, 0], desc: '+2 Ag and +10 max HP.', fx: { ag: 2, hp: 10 } },
        { id: 'star2', name: 'Matarukaja', cost: 1, needs: ['star1'], at: [2, 0], desc: 'Learn Matarukaja: party attack up a level.', fx: { learn: 'matarukaja' } },
        { id: 'sp1', name: 'Talking Points', cost: 2, needs: ['star2'], at: [3, 0], desc: 'The first skill she uses on each of her turns costs 25% less (a One More pays in full).', fx: { firstCut: 0.25 } },
        { id: 'star4a', name: 'Campaign Trail', cost: 2, needs: ['sp1'], choice: 'star', at: [4, -1], desc: 'Choice: Shift’s boost rises from ×1.25 to ×1.5, and the one who takes it regains 5 SP.', fx: { shiftMult: 1.5, shiftSp: 5 } },
        { id: 'star4b', name: 'Rally', cost: 2, needs: ['sp1'], choice: 'star', at: [4, 1], desc: 'Choice: learn Rally: party attack, defense and agility up a level, and +6 SP each.', fx: { learn: 'rally' } },
        { id: 'star5', name: 'Call the Bluff', cost: 2, any: ['star4a', 'star4b'], at: [5, 0], desc: 'Learn Call the Bluff: strip every buff from a foe and Disorient it for a turn.', fx: { learn: 'call_the_bluff' } },
        { id: 'star-m2', name: 'Group Chat', cost: 2, any: ['star4a', 'star4b'], memory: 'hoax-group-chat', at: [5, 1.2], desc: 'Whoever takes a Shift also gains 15 Theurgy.', fx: { shiftTh: 15 } },
        { id: 'sp2', name: 'Long Speech', cost: 2, needs: ['star5'], at: [6, -1], desc: 'Buffs she casts last a turn longer, and so do debuffs she puts on foes.', fx: { buffTurns: 1, debuffTurns: 1 } },
        { id: 'star6', name: 'Landslide', cost: 2, needs: ['star5'], at: [6, 0], desc: 'All-Out Attacks hit 50% harder.', fx: { alloutMult: 1.5 } },
        { id: 'sp3', name: 'Debilitate', cost: 3, needs: ['star5'], lvl: 34, at: [6, 1], desc: 'Learn Debilitate: one foe’s attack, defense and agility down a level.', fx: { learn: 'debilitate' } },
        { id: 'star-m1', name: 'Mandate', cost: 3, needs: ['sp2'], memory: 'hoax-president-pin', at: [7, -1], desc: 'Learn Mandate: party attack, defense and agility up a level, and every Theurgy gauge +15.', fx: { learn: 'mandate' } },
        { id: 'star7', name: 'Opening Statement', cost: 3, needs: ['star6'], lvl: 30, at: [7, 0], desc: 'The party starts every battle with attack up a level.', fx: { openBuff: 'atk' } },
        { id: 'sp4', name: 'Heat Riser', cost: 2, needs: ['sp3'], at: [7, 1], desc: 'Learn Heat Riser: one ally’s attack, defense and agility up a level.', fx: { learn: 'heat_riser' } },
        { id: 'star-key', name: 'Nike', cost: 3, needs: ['star7'], keystone: true, form: 'haenim-nike', at: [8, 0], desc: 'Keystone: Haenim’s Hoax form, Nike. Buffs, Almighty force and her Victory Lap.', fx: {} }
      ] },
    // Where two rays meet: each hybrid needs one node on each side (`between` names the rays; drawn in the gap between them).
    { id: 'hybrid', hybrid: true, name: 'Hybrids', world: 'Where rays meet', color: '#ffe9a8', theme: 'Two paths at once',
      blurb: 'Where two of her habits cross, something new.',
      nodes: [
        { id: 'hy-st-tr1', name: 'Pounce', cost: 2, needs: ['st3', 'tr2'], between: ['striker', 'trickster'], at: { a: 30, r: 4.6 }, desc: 'Her critical rate rises by 15% against a Down or ailing foe.', fx: { critIf: 15 } },
        { id: 'hy-st-tr2', name: 'Fox Fang', cost: 3, needs: ['st6', 'tr4'], between: ['striker', 'trickster'], at: { a: 30, r: 7.1 }, desc: 'Learn Fox Fang: heavy pierce damage; against an ailing or debuffed foe, or a weak spot, it crits far more often.', fx: { learn: 'fox_fang' } },
        { id: 'hy-tr-mg1', name: 'Frostbite', cost: 2, needs: ['tr2', 'mg1'], between: ['trickster', 'mage'], at: { a: 90, r: 4.6 }, desc: 'Her Freeze chance rises by 15%.', fx: { freezeUp: 0.15 } },
        { id: 'hy-tr-mg2', name: 'Kitsunebi', cost: 3, needs: ['tr4', 'jade6'], between: ['trickster', 'mage'], at: { a: 90, r: 7.1 }, desc: 'Learn Kitsunebi: fire damage to all foes; each may be Disoriented.', fx: { learn: 'kitsunebi' } },
        { id: 'hy-mg-hl1', name: 'Still Water', cost: 2, needs: ['mg1', 'hl1'], between: ['mage', 'healer'], at: { a: 150, r: 4.6 }, desc: 'Solar regains 3 SP at the start of each of her turns.', fx: { spRegen: 3 } },
        { id: 'hy-mg-hl2', name: 'Spring Rain', cost: 3, needs: ['jade6', 'bell6'], between: ['mage', 'healer'], at: { a: 150, r: 7.1 }, desc: 'Learn Spring Rain: ice damage to all foes, then the party heals 8%.', fx: { learn: 'spring_rain' } },
        { id: 'hy-hl-gd1', name: 'First-Aid Tin', cost: 2, needs: ['hl1', 'gd1'], between: ['healer', 'guard'], at: { a: 210, r: 4.6 }, desc: '+2 En; Solar regains 3% of her HP at the start of each turn.', fx: { en: 2, hpRegen: 0.03 } },
        { id: 'hy-hl-gd2', name: 'Guardian Bell', cost: 3, needs: ['bell6', 'gd2'], between: ['healer', 'guard'], at: { a: 210, r: 7.1 }, desc: 'Once per battle, the first ally (or Solar) who would fall stays up with 1 HP.', fx: { guardianBell: true } },
        { id: 'hy-gd-sp1', name: 'Security Detail', cost: 2, needs: ['star3', 'sp1'], between: ['guard', 'support'], at: { a: 270, r: 4.6 }, desc: 'The party starts every battle with defense up.', fx: { partyOpen: ['def'] } },
        { id: 'hy-gd-sp2', name: 'Poker Face', cost: 2, needs: ['gd2', 'star6'], between: ['guard', 'support'], at: { a: 270, r: 7.1 }, desc: 'Solar can’t be Charmed or made afraid.', fx: { nullAil: ['charm', 'fear'] } },
        { id: 'hy-sp-st1', name: 'Opening Act', cost: 2, needs: ['sp1', 'st3'], between: ['support', 'striker'], at: { a: 330, r: 4.6 }, desc: 'Her Theurgy gauge starts every battle 20% full.', fx: { thStart: 20 } },
        { id: 'hy-sp-st2', name: 'Momentum', cost: 2, needs: ['star6', 'st6'], between: ['support', 'striker'], at: { a: 330, r: 7.1 }, desc: 'Each time Solar earns a One More, she regains 4 SP.', fx: { momentum: 4 } }
      ] }
  ];
  /* The crown: Haenim, Unveiled. Needs all three form keystones and the story moment that already gated the form (a full moon cleared). */
  const treeCenter = { id: 'unveiled', name: 'Unveiled', cost: 5, needs: ['bell-key', 'jade-key', 'star-key'], op: true, keystone: true, form: 'haenim-unveiled', center: true, at: { a: 270, r: 9.9 },
    desc: 'The sun you can look at. Needs Sunna, Mazu and Nike, and a full moon cleared. Unlocks Haenim, Unveiled.', fx: {} };

  /* ── Party trees (deeper since 2026-10-25): five tiers for each S.E.E.S. member and each searcher who fights, the same depth for
     everyone. Tier 1 is open at once; tiers 2-5 open at Social Link ranks 2, 4, 7 and 9 (ptreeRanks), and each needs something
     bought in the tier before it (or anything higher). Tier 3 holds the signature skill; tiers 4 and 5 are a choice of two.
     Their own points come from their level (progression.partyPts). At MAX (rank 10) a signature skill evolves on its own
     (max: { from: chain root, to }). Old node ids (tiers 1, 3 and 4 here) never changed, so saves keep what they bought.
     Node fx: stats, learn, crit, acc, healMult, aff { el: resist }, boost { el: mult }, and the passives engine.js PASSIVE lists
     (counter, evade, endure, spRegen, hpRegen, haste, quick, followUp, openBuff, partyOpen, weakUp, ailUp, ailDmg, lowHpUp, physUp,
     magicUp, bossUp, thStart, buffTurns, debuffTurns, weakSp, critAdd, freezeUp, corona, guardianBell, nullAil…). */
  const ptrees = {
    akihiko: { tiers: [
      [{ id: 'ak1', name: 'Roadwork', cost: 1, desc: '+2 St, +2 Ag and +15 max HP.', fx: { st: 2, ag: 2, hp: 15 } }, { id: 'ak2', name: 'Counterpunch', cost: 1, desc: '15% chance to hit back when a Shadow strikes him alone.', fx: { counter: 0.15 } },
        { id: 'ak7', name: 'Footwork', cost: 1, desc: '+1 Ag and a little evasion (+8).', fx: { ag: 1, evade: 8 } }],
      [{ id: 'ak8', name: 'Jab', cost: 2, desc: 'A 20% chance of a quick follow-up punch after his single-target hits.', fx: { followUp: 0.2 } }, { id: 'ak9', name: 'Morning Run', cost: 1, desc: 'He regains 3% of his HP at the start of each turn.', fx: { hpRegen: 0.03 } },
        { id: 'ak10', name: 'Speed Bag', cost: 2, desc: 'He starts every battle with agility up.', fx: { openBuff: ['agi'] } }],
      [{ id: 'ak3', name: 'Ziodyne', cost: 1, desc: 'His Zio line becomes Ziodyne (same slot).', fx: { learn: 'ziodyne' } }, { id: 'ak4', name: 'Main Event', cost: 2, desc: 'Critical rate +10%.', fx: { crit: 10 } }, { id: 'ak6', name: 'Corkscrew Thunder', cost: 2, desc: 'Learn Corkscrew Thunder, his signature: three punches and a twist of lightning.', fx: { learn: 'corkscrew' } }],
      [{ id: 'ak5a', name: 'Maziodyne', cost: 3, desc: 'His Mazio line becomes Maziodyne (same slot).', fx: { learn: 'maziodyne' } }, { id: 'ak5b', name: 'Shadow Boxing', cost: 3, desc: 'Big evasion, and his counter chance rises by 10%.', fx: { evade: 20, counter: 0.1 } }],
      [{ id: 'ak11', name: 'Title Fight', cost: 3, desc: 'Bosses take 20% more from him, and his critical rate rises by 5%.', fx: { bossUp: 0.2, crit: 5 } }, { id: 'ak12', name: 'Combination', cost: 3, desc: 'His follow-up chance rises by 15%, and his crits hit 30% harder.', fx: { followUp: 0.15, critAdd: 0.3 } }]],
      max: { from: 'sonic_punch', to: 'sonic_blitz', name: 'Sonic Blitz' } },
    yukari: { tiers: [
      [{ id: 'yu1', name: 'Archery Club', cost: 1, desc: '+2 Ma and +15 max SP.', fx: { ma: 2, sp: 15 } }, { id: 'yu2', name: 'Mediarama', cost: 1, desc: 'Media becomes Mediarama (same slot).', fx: { learn: 'mediarama' } },
        { id: 'yu7', name: 'Steady Aim', cost: 1, desc: 'Accuracy +8 and critical rate +4%.', fx: { acc: 8, crit: 4 } }],
      [{ id: 'yu8', name: 'Bedside Manner', cost: 2, desc: 'Her healing is 15% stronger, and she regains 2 SP at the start of each turn.', fx: { healMult: 1.15, spRegen: 2 } }, { id: 'yu9', name: 'Tailwind', cost: 2, desc: 'The party starts every battle with agility up.', fx: { partyOpen: ['agi'] } },
        { id: 'yu10', name: 'Sharpshooter', cost: 1, desc: 'She hits a weakness 15% harder.', fx: { weakUp: 0.15 } }],
      [{ id: 'yu3', name: 'Diarahan', cost: 1, desc: 'Her Dia line becomes Diarahan (same slot): a full heal.', fx: { learn: 'diarahan' } }, { id: 'yu4', name: 'Healing Light', cost: 2, desc: 'Her healing is 30% stronger.', fx: { healMult: 1.3 } }, { id: 'yu6', name: 'Gale Arrow', cost: 2, desc: 'Learn Gale Arrow, her signature: an arrow on the wind that heals the party a little.', fx: { learn: 'gale_arrow' } }],
      [{ id: 'yu5a', name: 'Samarecarm', cost: 3, desc: 'Recarm becomes Samarecarm (same slot): revive with full HP.', fx: { learn: 'samarecarm' } }, { id: 'yu5b', name: 'Magarudyne', cost: 3, desc: 'Her Magaru line becomes Magarudyne (same slot).', fx: { learn: 'magarudyne' } }],
      [{ id: 'yu11', name: 'Guardian Angel', cost: 3, desc: 'Once per battle a knockout blow leaves her at 1 HP, and she regains 3% HP each turn.', fx: { endure: true, hpRegen: 0.03 } }, { id: 'yu12', name: 'Gale Force', cost: 3, desc: 'Her wind skills hit 30% harder, and her magic 10% harder.', fx: { boost: { wind: 1.3 }, magicUp: 0.1 } }]],
      max: { from: 'media', to: 'mediarahan', name: 'Mediarahan' } },
    junpei: { tiers: [
      [{ id: 'jp1', name: 'Batting Practice', cost: 1, desc: '+2 St and +20 max HP.', fx: { st: 2, hp: 20 } }, { id: 'jp2', name: 'Provoke', cost: 1, desc: 'Learn Provoke: he draws every single-target attack for 3 turns.', fx: { learn: 'provoke' } },
        { id: 'jp7', name: 'Pinch Hitter', cost: 1, desc: 'Below a third of his HP he hits 25% harder.', fx: { lowHpUp: 0.25 } }],
      [{ id: 'jp8', name: 'Rally Cap', cost: 2, desc: 'His Theurgy gauge starts every battle 20% full.', fx: { thStart: 20 } }, { id: 'jp9', name: 'Hot Streak', cost: 2, desc: 'A 15% chance of a follow-up swing after his single-target hits.', fx: { followUp: 0.15 } },
        { id: 'jp10', name: 'Tarukaja', cost: 1, desc: 'Learn Tarukaja: one ally’s attack up a level.', fx: { learn: 'tarukaja' } }],
      [{ id: 'jp3', name: 'Agidyne', cost: 1, desc: 'His Agi line becomes Agidyne (same slot).', fx: { learn: 'agidyne' } }, { id: 'jp4', name: 'Clutch Hitter', cost: 2, desc: 'Critical rate +12%.', fx: { crit: 12 } }, { id: 'jp6', name: 'Fastball', cost: 2, desc: 'Learn Fastball, his signature: fire to one foe, 50% more on a Down foe.', fx: { learn: 'fastball' } }],
      [{ id: 'jp5a', name: 'Maragidyne', cost: 3, desc: 'His Maragi line becomes Maragidyne (same slot).', fx: { learn: 'maragidyne' } }, { id: 'jp5b', name: 'Endure', cost: 3, desc: 'Once per battle, a knockout blow leaves him at 1 HP.', fx: { endure: true } }],
      [{ id: 'jp11', name: 'Grand Slam', cost: 3, desc: 'His physical skills hit 15% harder, and his crits 20% harder.', fx: { physUp: 0.15, critAdd: 0.2 } }, { id: 'jp12', name: 'Comeback Kid', cost: 3, desc: 'He regains 5% HP each turn and has a 15% chance to counter.', fx: { hpRegen: 0.05, counter: 0.15 } }]],
      max: { from: 'cleave', to: 'home_run', name: 'Home Run' } },
    mitsuru: { tiers: [
      [{ id: 'mi1', name: 'Fencing Form', cost: 1, desc: '+2 Ma and +2 Ag.', fx: { ma: 2, ag: 2 } }, { id: 'mi2', name: 'Bufula', cost: 1, desc: 'Bufu becomes Bufula (same slot).', fx: { learn: 'bufula' } },
        { id: 'mi7', name: 'Poise', cost: 1, desc: 'Accuracy +6 and a little evasion (+6).', fx: { acc: 6, evade: 6 } }],
      [{ id: 'mi8', name: 'Executioner', cost: 2, desc: 'She hits an ailing foe (a frozen one most of all) 20% harder.', fx: { ailDmg: 0.2 } }, { id: 'mi9', name: 'Cold Front', cost: 2, desc: 'Her Freeze chance rises by 12%.', fx: { freezeUp: 0.12 } },
        { id: 'mi10', name: 'Matarunda', cost: 2, desc: 'Learn Matarunda: every foe’s attack down a level.', fx: { learn: 'matarunda' } }],
      [{ id: 'mi3', name: 'Mabufula', cost: 1, desc: 'Mabufu becomes Mabufula (same slot).', fx: { learn: 'mabufula' } }, { id: 'mi4', name: 'Frost Edge', cost: 2, desc: 'Her ice skills hit 25% harder.', fx: { boost: { ice: 1.25 } } }, { id: 'mi6', name: 'Glacial Flèche', cost: 2, desc: 'Learn Glacial Flèche, her signature: two freezing lunges.', fx: { learn: 'glacial_fleche' } }],
      [{ id: 'mi5a', name: 'Mabufudyne', cost: 3, desc: 'Her Mabufu line becomes Mabufudyne (same slot).', fx: { learn: 'mabufudyne' } }, { id: 'mi5b', name: 'Marakunda', cost: 3, desc: 'Learn Marakunda: lower every foe’s defense.', fx: { learn: 'marakunda' } }],
      [{ id: 'mi11', name: 'Absolute Zero', cost: 3, desc: 'Her magic hits 15% harder.', fx: { magicUp: 0.15 } }, { id: 'mi12', name: 'The Kirijo Line', cost: 3, desc: 'The party starts every battle with defense up, and her buffs and debuffs last a turn longer.', fx: { partyOpen: ['def'], buffTurns: 1, debuffTurns: 1 } }]],
      max: { from: 'bufu', to: 'niflheim', name: 'Niflheim' } },
    aigis: { tiers: [
      [{ id: 'ai1', name: 'Firmware Update', cost: 1, desc: '+2 St, +2 En and +20 max HP.', fx: { st: 2, en: 2, hp: 20 } }, { id: 'ai2', name: 'Provoke', cost: 1, desc: 'Learn Provoke: she draws every single-target attack for 3 turns.', fx: { learn: 'provoke' } },
        { id: 'ai7', name: 'Targeting', cost: 1, desc: 'Accuracy +8 and critical rate +4%.', fx: { acc: 8, crit: 4 } }],
      [{ id: 'ai8', name: 'Auto Repair', cost: 1, desc: 'She regains 4% of her HP at the start of each turn.', fx: { hpRegen: 0.04 } }, { id: 'ai9', name: 'Covering Fire', cost: 2, desc: 'A 15% chance of a follow-up burst after her single-target hits.', fx: { followUp: 0.15 } },
        { id: 'ai10', name: 'Shield Mode', cost: 2, desc: 'She starts every battle with defense up.', fx: { openBuff: ['def'] } }],
      [{ id: 'ai3', name: 'Myriad Shots', cost: 1, desc: 'Arrow Rain becomes Myriad Shots (same slot).', fx: { learn: 'myriad_shots' } }, { id: 'ai4', name: 'Armor Plating', cost: 2, desc: 'Resists Slash.', fx: { aff: { slash: 'resist' } } }, { id: 'ai6', name: 'Missile Salvo', cost: 2, desc: 'Learn Missile Salvo, her signature: every launcher at once, at every foe.', fx: { learn: 'missile_salvo' } }],
      [{ id: 'ai5a', name: 'Marakukaja', cost: 3, desc: 'Learn Marakukaja (or Rakukaja becomes it, same slot): party defense up.', fx: { learn: 'marakukaja' } }, { id: 'ai5b', name: 'Endure', cost: 3, desc: 'Once per battle, a knockout blow leaves her at 1 HP.', fx: { endure: true } }],
      [{ id: 'ai11', name: 'Overdrive', cost: 3, desc: 'Her physical skills hit 15% harder, and she moves 10% sooner.', fx: { physUp: 0.15, haste: 0.1 } }, { id: 'ai12', name: 'Aegis', cost: 3, desc: 'While she stands, the party takes 8% less damage.', fx: { corona: 0.08 } }]],
      max: { from: 'twin_shot', to: 'triple_down', name: 'Triple Down' } },
    ken: { tiers: [
      [{ id: 'ke1', name: 'Spear Drills', cost: 1, desc: '+2 Ma and +2 Lu.', fx: { ma: 2, lu: 2 } }, { id: 'ke2', name: 'Zionga', cost: 1, desc: 'Zio becomes Zionga (same slot).', fx: { learn: 'zionga' } },
        { id: 'ke7', name: 'Study Hall', cost: 1, desc: '+10 max SP; he regains 1 SP each turn.', fx: { sp: 10, spRegen: 1 } }],
      [{ id: 'ke8', name: 'Righteous', cost: 2, desc: 'He hits a weakness 12% harder.', fx: { weakUp: 0.12 } }, { id: 'ke9', name: 'Kendo Footwork', cost: 1, desc: 'A little evasion (+8).', fx: { evade: 8 } },
        { id: 'ke10', name: 'Pure Heart', cost: 2, desc: 'He can’t be Charmed or made afraid.', fx: { nullAil: ['charm', 'fear'] } }],
      [{ id: 'ke3', name: 'Hamaon', cost: 1, desc: 'Hama becomes Hamaon (same slot).', fx: { learn: 'hamaon' } }, { id: 'ke4', name: 'Mediarama', cost: 2, desc: 'Media becomes Mediarama (same slot).', fx: { learn: 'mediarama' } }, { id: 'ke6', name: 'Lance of Justice', cost: 2, desc: 'Learn Lance of Justice, his signature: light damage that heals him.', fx: { learn: 'justice_lance' } }],
      [{ id: 'ke5a', name: 'Diarahan', cost: 3, desc: 'His Dia line becomes Diarahan (same slot).', fx: { learn: 'diarahan' } }, { id: 'ke5b', name: 'Ziodyne', cost: 3, desc: 'His Zio line becomes Ziodyne (same slot).', fx: { learn: 'ziodyne' } }],
      [{ id: 'ke11', name: 'Ultimate Justice', cost: 3, desc: 'His light skills hit 25% harder.', fx: { boost: { light: 1.25 } } }, { id: 'ke12', name: 'Grown Up', cost: 3, desc: 'His healing is 20% stronger, and he regains 3% HP each turn.', fx: { healMult: 1.2, hpRegen: 0.03 } }]],
      max: { from: 'hama', to: 'samsara', name: 'Samsara' } },
    koromaru: { tiers: [
      [{ id: 'ko1', name: 'Fetch', cost: 1, desc: '+2 Ag and +2 Lu.', fx: { ag: 2, lu: 2 } }, { id: 'ko2', name: 'Agilao', cost: 1, desc: 'Agi becomes Agilao (same slot).', fx: { learn: 'agilao' } },
        { id: 'ko7', name: 'Good Boy', cost: 1, desc: '+20 max HP.', fx: { hp: 20 } }],
      [{ id: 'ko8', name: 'Pack Hunt', cost: 2, desc: 'A 20% chance of a follow-up bite after his single-target hits.', fx: { followUp: 0.2 } }, { id: 'ko9', name: 'Scent of Fear', cost: 2, desc: 'His ailments land 10% more often.', fx: { ailUp: 0.1 } },
        { id: 'ko10', name: 'Guard Dog', cost: 2, desc: '15% chance to bite back when a Shadow strikes him alone.', fx: { counter: 0.15 } }],
      [{ id: 'ko3', name: 'Mudoon', cost: 1, desc: 'Mudo becomes Mudoon (same slot).', fx: { learn: 'mudoon' } }, { id: 'ko4', name: 'Pack Instinct', cost: 2, desc: 'Critical rate +10%.', fx: { crit: 10 } }, { id: 'ko6', name: 'Three Heads', cost: 2, desc: 'Learn Three Heads, his signature: three bites that may frighten a foe.', fx: { learn: 'three_heads' } }],
      [{ id: 'ko5a', name: 'Maragidyne', cost: 3, desc: 'His Maragi line becomes Maragidyne (or he learns it).', fx: { learn: 'maragidyne' } }, { id: 'ko5b', name: 'Evil Smile', cost: 3, desc: 'Learn Evil Smile: Fear on every foe.', fx: { learn: 'evil_smile' } }],
      [{ id: 'ko11', name: 'Hellhound', cost: 3, desc: 'His fire skills hit 25% harder, and he hits ailing foes 15% harder.', fx: { boost: { fire: 1.25 }, ailDmg: 0.15 } }, { id: 'ko12', name: 'Loyal to the End', cost: 3, desc: 'Once per battle, the first of the party who would fall stays up with 1 HP.', fx: { guardianBell: true } }]],
      max: { from: 'mudo', to: 'die_for_me', name: 'Die for Me!' } },
    shinjiro: { tiers: [
      [{ id: 'sh1', name: 'Street Fighter', cost: 1, desc: '+3 St and +25 max HP.', fx: { st: 3, hp: 25 } }, { id: 'sh2', name: 'Provoke', cost: 1, desc: 'Learn Provoke: he draws every single-target attack for 3 turns.', fx: { learn: 'provoke' } },
        { id: 'sh7', name: 'Thick Skin', cost: 1, desc: '+2 En.', fx: { en: 2 } }],
      [{ id: 'sh8', name: 'Back Alley', cost: 2, desc: 'Below a third of his HP he hits 30% harder.', fx: { lowHpUp: 0.3 } }, { id: 'sh9', name: 'Short Fuse', cost: 2, desc: '15% chance to hit back when a Shadow strikes him alone.', fx: { counter: 0.15 } },
        { id: 'sh10', name: 'Home Cooking', cost: 1, desc: 'He regains 4% of his HP at the start of each turn.', fx: { hpRegen: 0.04 } }],
      [{ id: 'sh3', name: 'Steady Swing', cost: 1, desc: 'Accuracy +12.', fx: { acc: 12 } }, { id: 'sh4', name: 'Endure', cost: 2, desc: 'Once per battle, a knockout blow leaves him at 1 HP.', fx: { endure: true } }, { id: 'sh6', name: 'Haymaker', cost: 2, desc: 'Learn Haymaker, his signature: it lands harder the more hurt he is.', fx: { learn: 'haymaker' } }],
      [{ id: 'sh5a', name: 'Gigantic Fist', cost: 3, desc: 'Learn Gigantic Fist: heavy strike damage to one foe.', fx: { learn: 'gigantic_fist' } }, { id: 'sh5b', name: 'Counterstrike', cost: 3, desc: '25% chance to hit back when a Shadow strikes him alone.', fx: { counter: 0.25 } }],
      [{ id: 'sh11', name: 'Berserker', cost: 3, desc: 'His physical skills hit 20% harder.', fx: { physUp: 0.2 } }, { id: 'sh12', name: 'Big Brother', cost: 3, desc: 'While he stands, the party takes 8% less damage.', fx: { corona: 0.08 } }]],
      max: { from: 'fatal_end', to: 'gods_hand', name: 'God’s Hand' } },
    jihoon: { tiers: [
      [{ id: 'jh1', name: 'Center Stage', cost: 1, desc: '+2 St and +15 max HP.', fx: { st: 2, hp: 15 } }, { id: 'jh2', name: 'Matarukaja', cost: 1, desc: 'Tarukaja becomes Matarukaja (same slot): the whole party.', fx: { learn: 'matarukaja' } },
        { id: 'jh7', name: 'Crowd Pleaser', cost: 1, desc: 'His Theurgy gauge starts every battle 15% full.', fx: { thStart: 15 } }],
      [{ id: 'jh8', name: 'Goblin Grin', cost: 2, desc: 'His ailments land 10% more often.', fx: { ailUp: 0.1 } }, { id: 'jh9', name: 'Encore', cost: 2, desc: 'A 15% chance of a follow-up swing after his single-target hits.', fx: { followUp: 0.15 } },
        { id: 'jh10', name: 'Spotlight Hog', cost: 2, desc: 'Buffs he casts last a turn longer.', fx: { buffTurns: 1 } }],
      [{ id: 'jh3', name: 'Look At Me', cost: 1, desc: 'Learn Provoke: everybody watch him (for 3 turns, every single-target attack does).', fx: { learn: 'provoke' } }, { id: 'jh4', name: 'Magarula', cost: 2, desc: 'His Magaru line becomes Magarula (or he learns it).', fx: { learn: 'magarula' } }, { id: 'jh6', name: 'Goblin Fire', cost: 2, desc: 'Learn Goblin Fire, his second signature: blue goblin lights at random foes.', fx: { learn: 'goblin_fire' } }],
      [{ id: 'jh5a', name: 'Magarudyne', cost: 3, desc: 'His Magaru line becomes Magarudyne (or he learns it).', fx: { learn: 'magarudyne' } }, { id: 'jh5b', name: 'Heat Riser', cost: 3, desc: 'Learn Heat Riser: one ally’s attack, defense and agility up a level.', fx: { learn: 'heat_riser' } }],
      [{ id: 'jh11', name: 'Main Character', cost: 3, desc: 'The party starts every battle with attack up.', fx: { partyOpen: ['atk'] } }, { id: 'jh12', name: 'Goblin King', cost: 3, desc: 'His physical skills hit 15% harder, and his crits 20% harder.', fx: { physUp: 0.15, critAdd: 0.2 } }]],
      max: { from: 'garu', to: 'showstopper', name: 'Showstopper' } },
    minji: { tiers: [
      [{ id: 'mj1', name: 'Rolling', cost: 1, desc: '+2 Ma and +15 max SP.', fx: { ma: 2, sp: 15 } }, { id: 'mj2', name: 'Media', cost: 1, desc: 'Learn Media: heal the whole party.', fx: { learn: 'media' } },
        { id: 'mj7', name: 'Viewfinder', cost: 1, desc: 'Accuracy +8.', fx: { acc: 8 } }],
      [{ id: 'mj8', name: 'Exposure', cost: 2, desc: 'She hits a weakness 15% harder.', fx: { weakUp: 0.15 } }, { id: 'mj9', name: 'Soft Focus', cost: 2, desc: 'Her healing is 15% stronger.', fx: { healMult: 1.15 } },
        { id: 'mj10', name: 'Me Patra', cost: 1, desc: 'Learn Me Patra: cure Charm, Fear, Distress, Freeze and Shock on the whole party.', fx: { learn: 'me_patra' } }],
      [{ id: 'mj3', name: 'Diarama', cost: 1, desc: 'Dia becomes Diarama (same slot).', fx: { learn: 'diarama' } }, { id: 'mj4', name: 'Hamaon', cost: 2, desc: 'Hama becomes Hamaon (same slot).', fx: { learn: 'hamaon' } }, { id: 'mj6', name: 'Focus Pull', cost: 2, desc: 'Learn Focus Pull, her second signature: a shot that slows a foe and reads every affinity.', fx: { learn: 'focus_pull' } }],
      [{ id: 'mj5a', name: 'Mediarama', cost: 3, desc: 'Her Media line becomes Mediarama (or she learns it).', fx: { learn: 'mediarama' } }, { id: 'mj5b', name: 'Samarecarm', cost: 3, desc: 'Learn Samarecarm: revive with full HP.', fx: { learn: 'samarecarm' } }],
      [{ id: 'mj11', name: 'Golden Hour', cost: 3, desc: 'The party starts every battle with agility up, and she regains 2 SP each turn.', fx: { partyOpen: ['agi'], spRegen: 2 } }, { id: 'mj12', name: 'Long Exposure', cost: 3, desc: 'Debuffs she puts on foes last a turn longer, and her light skills hit 20% harder.', fx: { debuffTurns: 1, boost: { light: 1.2 } } }]],
      max: { from: 'dia', to: 'salvation', name: 'Salvation' } },
    jungwon: { tiers: [
      [{ id: 'jw1', name: 'Etiquette', cost: 1, desc: '+2 Ag and +2 Ma.', fx: { ag: 2, ma: 2 } }, { id: 'jw2', name: 'Bufula', cost: 1, desc: 'Bufu becomes Bufula (same slot).', fx: { learn: 'bufula' } },
        { id: 'jw7', name: 'Posture', cost: 1, desc: '+2 En and +15 max HP.', fx: { en: 2, hp: 15 } }],
      [{ id: 'jw8', name: 'Shell', cost: 2, desc: 'He starts every battle with defense up.', fx: { openBuff: ['def'] } }, { id: 'jw9', name: 'Order', cost: 2, desc: 'Debuffs he puts on foes last a turn longer.', fx: { debuffTurns: 1 } },
        { id: 'jw10', name: 'Composed', cost: 1, desc: 'He can’t be made afraid or Distressed.', fx: { nullAil: ['fear', 'distress'] } }],
      [{ id: 'jw3', name: 'Marakunda', cost: 1, desc: 'Rakunda becomes Marakunda (same slot): every foe.', fx: { learn: 'marakunda' } }, { id: 'jw4', name: 'Poise', cost: 2, desc: 'Critical rate +10%.', fx: { crit: 10 } }, { id: 'jw6', name: 'Black Tortoise', cost: 2, desc: 'Learn Black Tortoise, his second signature: the party’s defense up while he draws the attacks.', fx: { learn: 'black_tortoise' } }],
      [{ id: 'jw5a', name: 'Bufudyne', cost: 3, desc: 'His Bufu line becomes Bufudyne (same slot).', fx: { learn: 'bufudyne' } }, { id: 'jw5b', name: 'Debilitate', cost: 3, desc: 'Learn Debilitate: one foe’s attack, defense and agility down a level.', fx: { learn: 'debilitate' } }],
      [{ id: 'jw11', name: 'North Wind', cost: 3, desc: 'His ice skills hit 25% harder, and his Freeze chance rises by 10%.', fx: { boost: { ice: 1.25 }, freezeUp: 0.1 } }, { id: 'jw12', name: 'Guardian of the North', cost: 3, desc: 'While he stands the party takes 8% less damage, and he may counter (15%).', fx: { corona: 0.08, counter: 0.15 } }]],
      max: { from: 'bufu', to: 'diamond_dust', name: 'Diamond Dust' } },
    haechan: { tiers: [
      [{ id: 'hc1', name: 'Showoff', cost: 1, desc: '+2 St and +2 Ag.', fx: { st: 2, ag: 2 } }, { id: 'hc2', name: 'Zionga', cost: 1, desc: 'Zio becomes Zionga (same slot).', fx: { learn: 'zionga' } },
        { id: 'hc7', name: 'Stage Presence', cost: 1, desc: 'He moves 10% sooner in the turn order.', fx: { haste: 0.1 } }],
      [{ id: 'hc8', name: 'Moonwalk', cost: 2, desc: 'A little evasion (+8).', fx: { evade: 8 } }, { id: 'hc9', name: 'Ad-Lib', cost: 2, desc: 'A 15% chance of a follow-up slash after his single-target hits.', fx: { followUp: 0.15 } },
        { id: 'hc10', name: 'Lunar Charge', cost: 2, desc: 'Hitting a weakness gives him back 3 SP (once a skill).', fx: { weakSp: 3 } }],
      [{ id: 'hc3', name: 'Mazionga', cost: 1, desc: 'His Mazio line becomes Mazionga (or he learns it).', fx: { learn: 'mazionga' } }, { id: 'hc4', name: 'Quick Wit', cost: 2, desc: 'Big evasion.', fx: { evade: 15 } }, { id: 'hc6', name: 'Moonlit Static', cost: 2, desc: 'Learn Moonlit Static, his second signature: lightning on every foe, harder on a Down one.', fx: { learn: 'moon_static' } }],
      [{ id: 'hc5a', name: 'Ziodyne', cost: 3, desc: 'His Zio line becomes Ziodyne (same slot).', fx: { learn: 'ziodyne' } }, { id: 'hc5b', name: 'Power Slash', cost: 3, desc: 'Cleave becomes Power Slash (same slot).', fx: { learn: 'power_slash' } }],
      [{ id: 'hc11', name: 'Eclipse', cost: 3, desc: 'His electric skills hit 20% harder, and his magic 10% harder.', fx: { boost: { elec: 1.2 }, magicUp: 0.1 } }, { id: 'hc12', name: 'Night Shift', cost: 3, desc: 'A 15% chance to counter, and a little more evasion (+6).', fx: { counter: 0.15, evade: 6 } }]],
      max: { from: 'zio', to: 'thunder_reign', name: 'Thunder Reign' } }
  };
  const ptreeRanks = [0, 2, 4, 7, 9]; // the link rank each tier needs; MAX (rank 10) evolves the signature skill
  const ptreeChoice = [false, false, false, true, true]; // tiers that are a choice of two

  const progression = {
    startLevel: 5,
    expToNext: lvl => 20 + 5 * lvl * lvl,
    expFor: lvl => Math.round(0.55 * lvl * lvl + 6 * lvl + 30), // a Shadow's EXP when data doesn't say
    yenFor: lvl => Math.round(14 + lvl * 7),
    dropChance: 0.35,
    pointsPerLevel: 2,
    bossBonusPoints: 2,
    memoryPoints: 1, // each memory fragment gives Haenim's tree a skill point
    partyPts: lvl => Math.max(0, Math.floor((lvl - 4) / 3)), // a party member's own tree points come from their level (12 at Lv 40; a whole tree is 19, about Lv 61)
    respecFee: { solar: 100, party: 150, min: 500 }, // the Velvet Room rewrites a tree for yen: per point refunded (at least `min`)
    heat: 0.3, // each full climb to the top makes Tartarus Shadows this much stronger (and worth more EXP)
    benchShare: 0.6, // members sitting out still get this share of the EXP
    tiredAfter: 6, // fights in a row before a member gets Tired (until a Clock or leaving Tartarus)
    tired: { stat: 0.9, skip: 0.08 }, // Tired: stats ×0.9, and an 8% chance to lose a turn
    strongMult: { exp: 1.6, yen: 1.6 },
    sellRate: 0.5 // shops buy gear back at half price (Mayoido only)
  };

  return { portraits: P, faceFocus, elements, affinityOrder, skills, ailments, tactics, attack, personas, party, defaultParty, theurgyGain, items, startItems, startYen, materials,
    gear, startGear, shops, enemies, blocks, floors, oldFloors, ops, map, events, memories, memoryPlaceholder, music, clips, navigator, nav, tree, treeCenter, ptrees, ptreeRanks, ptreeChoice, chains, buffRules, skillSlots, progression, difficulty, glossary, tips };
})();
