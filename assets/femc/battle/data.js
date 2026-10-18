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
  /* The searchers' Personas aren't designed yet (Kat): a veiled silhouette in the member's color stands in for the art. */
  const unnamedArt = color => 'data:image/svg+xml,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600"><defs><radialGradient id="g" cx="50%" cy="38%" r="55%"><stop offset="0" stop-color="${color}" stop-opacity=".55"/><stop offset="1" stop-color="${color}" stop-opacity="0"/></radialGradient></defs><ellipse cx="200" cy="250" rx="190" ry="250" fill="url(#g)"/><path d="M200 70c-38 0-64 30-64 70 0 28 12 50 30 62-58 18-96 72-106 150l-16 190h312l-16-190c-10-78-48-132-106-150 18-12 30-34 30-62 0-40-26-70-64-70z" fill="#140812" stroke="${color}" stroke-width="5" stroke-opacity=".8"/><text x="200" y="400" fill="${color}" font-family="Georgia, serif" font-size="120" text-anchor="middle" opacity=".7">?</text></svg>`);
  const personas = {
    haenim: { name: 'Haenim', ko: '해님', arcana: 'Fool', art: A + 'haenim.webp', aff: { light: 'resist', dark: 'weak' }, user: 'solar',
      blurb: 'Lady Sun. A girl who hides by shining. She carries a bell, a jade ring and a star pin from three lives Solar can’t remember.' },
    'haenim-sunna': { name: 'Sunna', form: true, base: 'haenim', arcana: 'Fool · Runners', art: A + 'haenim-sunna.webp', user: 'solar', color: '#ffd36b',
      unlock: { branch: 'bell' }, aff: { light: 'null', wind: 'resist', dark: 'weak' }, lean: { ag: 4, ma: 2, sp: 15 }, sig: 'encore', theme: 'Support · Speed · Light',
      blurb: 'The runner under stage lights. Support and speed, and an Encore that lights up the whole field.' },
    'haenim-mazu': { name: 'Mazu', form: true, base: 'haenim', arcana: 'Fool · strangers', art: A + 'haenim-harbor.webp', user: 'solar', color: '#5fe0b0',
      unlock: { branch: 'jade' }, aff: { ice: 'null', light: 'resist', elec: 'weak' }, lean: { st: 2, lu: 4, ma: 1 }, sig: 'low_tide', theme: 'Ice · Precision · Crits',
      blurb: 'The sea goddess who protects the people waiting on the docks. Cold, exact, and she never misses a tide.' },
    'haenim-nike': { name: 'Nike', form: true, base: 'haenim', arcana: 'Fool · Hoax', art: A + 'haenim-nike.webp', user: 'solar', color: '#ff8cc0',
      unlock: { branch: 'star' }, aff: { light: 'resist', wind: 'resist', dark: 'weak' }, lean: { st: 3, en: 2, hp: 20 }, sig: 'victory_lap', theme: 'Buffs · Almighty',
      blurb: 'Winged Victory. Everyone fights harder when she’s on the field.' },
    'haenim-unveiled': { name: 'Haenim, Unveiled', form: true, base: 'haenim', arcana: 'Fool · ???', art: A + 'haenim-unveiled.webp', user: 'solar', color: '#fff2b0',
      unlock: { branches: ['bell', 'jade', 'star'], op: true }, aff: { light: 'null', dark: 'resist', ice: 'resist', wind: 'resist' }, lean: { st: 2, ma: 3, en: 2, ag: 2, lu: 2, hp: 15, sp: 10 },
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
    // Searchers who awaken (Act IV–V). Persona names and art are Kat's to design; placeholders until then.
    'p-jihoon': { name: 'Persona (unnamed)', arcana: 'Hoax', art: unnamedArt('#7dd3ff'), aff: { wind: 'resist', elec: 'weak' }, user: 'jihoon', placeholder: true, blurb: 'Jihoon’s Persona. Huge, loud, laughing. Its name is still being written.' },
    'p-minji': { name: 'Persona (unnamed)', arcana: 'Runners', art: unnamedArt('#ffe6a8'), aff: { light: 'resist', dark: 'weak' }, user: 'minji', placeholder: true, blurb: 'Minji’s Persona. It came out of a flash. Its name is still being written.' },
    'p-jungwon': { name: 'Persona (unnamed)', arcana: 'strangers · Hoax', art: unnamedArt('#9fe8ff'), aff: { ice: 'resist', fire: 'weak' }, user: 'jungwon', placeholder: true, blurb: 'Jungwon’s Persona. Very still, very exact. Its name is still being written.' },
    'p-haechan': { name: 'Persona (unnamed)', arcana: 'Runners · strangers', art: unnamedArt('#ff9a3d'), aff: { elec: 'resist', ice: 'weak' }, user: 'haechan', placeholder: true, blurb: 'Haechan’s Persona. It refuses to lose. Its name is still being written.' },
    juno: { name: 'Juno', arcana: 'Priestess', art: A + 'juno.webp', aff: {}, user: 'fuuka', blurb: 'Fuuka’s awakened Persona. Her scans now map a whole Tartarus floor at once.' }
  };

  /* Theurgy art. img: a full-screen still (only Solar's exists so far); video: an animated clip, if Kat makes one.
     Members without img get a stylized cut-in made from their portrait and Persona art. */
  const TH = 'assets/femc/battle/art/theurgy/';

  /* Party at level 5. Growth is added per level above 5. (Portrait crops: faceFocus above.)
     wtype: weapon type (gear.js below). learn: [level, skill, replaces?] for the base Persona.
     theurgy: the ultimate move (type: dmg | support | orgia). th: what fills this member's gauge faster (multipliers). sig: signature skills. */
  const party = [
    { id: 'solar', name: 'Solar', persona: 'haenim', weapon: 'pierce', wtype: 'naginata', color: '#ff4f9e',
      base: { hp: 92, sp: 62, st: 8, ma: 10, en: 7, ag: 9, lu: 9 }, growth: { hp: 7, sp: 5, st: 0.8, ma: 1, en: 0.7, ag: 0.8, lu: 0.8 },
      skills: ['agi', 'daybreak', 'golden_rope', 'dia'], learn: [[14, 'agilao', 'agi'], [20, 'diarama', 'dia'], [26, 'maragion']], sig: ['golden_rope', 'daybreak'],
      theurgy: { name: 'Rise and Shine', type: 'dmg', el: 'almighty', weakEl: 'light', look: 'sun', target: 'all', power: 175, down: 0.55, img: TH + 'solar-rise-and-shine.webp', video: 'theurgy_solar',
        desc: 'Haenim lifts her veil and the sun pours out. Massive Light/Almighty damage to all foes; it may knock them Down (a Light weakness always does).' },
      role: 'Leader · Light · Golden Rope', faces: { idle: 'serious', win: 'happy', hurt: 'surprised', ko: 'sad' },
      lines: { turn: 'Let’s go, Haenim.', onemore: 'Again.', shift: 'Your turn!', allout: 'Now. Everyone!', finish: 'Rise and shine.', theurgy: 'Look at me. Rise and shine.' } },
    { id: 'akihiko', name: 'Akihiko', persona: 'polydeuces', weapon: 'strike', wtype: 'gloves', color: '#ff9a3d',
      base: { hp: 100, sp: 44, st: 11, ma: 7, en: 8, ag: 12, lu: 6 }, growth: { hp: 8, sp: 3, st: 1, ma: 0.6, en: 0.8, ag: 1, lu: 0.5 },
      skills: ['zio', 'sonic_punch'], learn: [[8, 'tarunda'], [12, 'zionga', 'zio'], [16, 'kill_rush'], [19, 'mazio'], [21, 'rakunda']], sig: ['sonic_punch', 'kill_rush', 'tarunda'], th: { ail: 1.5, buff: 1.4 },
      theurgy: { name: 'Lightning Cadenza', type: 'dmg', el: 'elec', look: 'elec', target: 'one', power: 58, multi: [5, 5], down: 0.35, ail: { id: 'shock', chance: 0.35 }, desc: 'A five-punch flurry wrapped in lightning. Heavy Elec damage to one foe; may Shock it.' },
      role: 'Elec · Strike · Fast', faces: { idle: 'serious', win: 'happy', hurt: 'surprised', ko: 'sad' },
      lines: { turn: 'Let’s see what you’ve got.', onemore: 'Not done yet!', shift: 'Over to you!', finish: 'That’s how it’s done!', theurgy: 'Here’s my full power!' } },
    { id: 'yukari', name: 'Yukari', persona: 'io', weapon: 'pierce', wtype: 'bow', color: '#ff8cc0',
      base: { hp: 84, sp: 70, st: 6, ma: 11, en: 6, ag: 10, lu: 9 }, growth: { hp: 6, sp: 6, st: 0.5, ma: 1, en: 0.6, ag: 0.9, lu: 0.8 },
      skills: ['garu', 'dia', 'media'], learn: [[8, 'patra'], [12, 'garula', 'garu'], [15, 'dekunda'], [18, 'magaru'], [20, 'recarm']], sig: ['media', 'dia'], th: { heal: 1.6 },
      theurgy: { name: 'Cadenza', type: 'support', heal: 1, cure: true, buffs: ['agi', 'def'], look: 'heal', desc: 'Isis’s song. Fully heals the party, cures ailments, and raises agility and defense.' },
      role: 'Wind · Healer', faces: { idle: 'serious', win: 'neutral', hurt: 'surprised', ko: 'sad' },
      lines: { turn: 'I’ve got your back.', onemore: 'One more!', shift: 'Take it!', finish: 'Hmph. Serves you right!', theurgy: 'Everyone, hold on!' } },
    { id: 'junpei', name: 'Junpei', persona: 'hermes', weapon: 'slash', wtype: 'greatsword', color: '#7fb6ff',
      base: { hp: 110, sp: 40, st: 12, ma: 7, en: 9, ag: 7, lu: 7 }, growth: { hp: 9, sp: 3, st: 1, ma: 0.5, en: 0.9, ag: 0.6, lu: 0.6 },
      skills: ['agi', 'cleave'], learn: [[9, 'rakukaja'], [12, 'agilao', 'agi'], [15, 'power_slash', 'cleave'], [19, 'maragi']], sig: ['cleave', 'power_slash'], th: { crit: 1.6 },
      theurgy: { name: 'Brave Blade', type: 'dmg', el: 'slash', look: 'slash', target: 'one', power: 300, crit: 100, sure: true, down: 0.5, desc: 'One huge swing. Severe Slash damage to one foe; always a critical hit.' },
      role: 'Fire · Slash · Tank', faces: { idle: 'serious', win: 'happy', hurt: 'surprised', ko: 'sad' },
      lines: { turn: 'Watch this!', onemore: 'Heh, too easy!', shift: 'Go for it!', finish: 'Clutch hitter, baby!', theurgy: 'Home run, baby!' } },
    { id: 'mitsuru', name: 'Mitsuru', persona: 'penthesilea', weapon: 'pierce', wtype: 'rapier', color: '#ff5b5b',
      base: { hp: 90, sp: 68, st: 8, ma: 12, en: 7, ag: 10, lu: 7 }, growth: { hp: 7, sp: 5, st: 0.7, ma: 1.1, en: 0.7, ag: 0.9, lu: 0.6 },
      skills: ['bufu', 'marin_karin', 'tarukaja'], learn: [[12, 'bufula', 'bufu'], [15, 'dekaja'], [17, 'mabufu'], [20, 'me_patra']], sig: ['marin_karin', 'bufu', 'bufula'], th: { ail: 1.6 },
      theurgy: { name: 'Bufudyne Execution', type: 'dmg', el: 'ice', look: 'ice', target: 'all', power: 150, down: 0.4, ail: { id: 'freeze', chance: 0.35 }, desc: 'Artemisia’s judgment. Heavy Ice damage to all foes; may Freeze them.' },
      role: 'Ice · Charm · Support', faces: { idle: 'neutral', win: 'neutral', hurt: 'surprised', ko: 'sad' },
      lines: { turn: 'Leave it to me.', onemore: 'Excellent.', shift: 'Your opening.', finish: 'Execution!', theurgy: 'Bow before the ice.' } },
    { id: 'aigis', name: 'Aigis', persona: 'palladion', weapon: 'pierce', wtype: 'gun', color: '#ffd36b',
      base: { hp: 112, sp: 40, st: 12, ma: 6, en: 11, ag: 8, lu: 6 }, growth: { hp: 9, sp: 3, st: 1, ma: 0.5, en: 1, ag: 0.7, lu: 0.5 },
      skills: ['twin_shot', 'cleave', 'tarunda'], learn: [[12, 'rakukaja'], [16, 'arrow_rain'], [20, 'matarunda', 'tarunda']], sig: ['twin_shot', 'arrow_rain'],
      theurgy: { name: 'Orgia Mode', type: 'orgia', el: 'pierce', look: 'pierce', target: 'rand', power: 46, multi: [4, 6], turns: 3, desc: 'Limiters off. A storm of fire to random foes, then for 3 turns her attacks hit twice and her attack is up.' },
      role: 'Gunfire · Pierce · Debuff', faces: { idle: 'serious', win: 'happy', hurt: 'surprised', ko: 'sad' },
      lines: { turn: 'Engaging the enemy.', onemore: 'Target is down.', shift: 'Handing over.', finish: 'Hostiles eliminated.', theurgy: 'Orgia Mode, activate.' } },
    { id: 'ken', name: 'Ken', persona: 'nemesis', weapon: 'pierce', wtype: 'spear', color: '#ffb36b',
      base: { hp: 80, sp: 64, st: 7, ma: 11, en: 6, ag: 9, lu: 10 }, growth: { hp: 6, sp: 5, st: 0.6, ma: 1, en: 0.6, ag: 0.8, lu: 0.9 },
      skills: ['zio', 'hama', 'dia'], learn: [[12, 'zionga', 'zio'], [14, 'media'], [17, 'hamaon', 'hama'], [20, 'rakukaja']], sig: ['hama', 'hamaon', 'dia'], th: { heal: 1.3 },
      theurgy: { name: 'Kala’s Judgment', type: 'dmg', el: 'light', look: 'light', target: 'all', power: 140, down: 0.4, heal: 0.3, desc: 'The spear of retribution. Heavy Light damage to all foes, and the party heals 30%.' },
      role: 'Elec · Light · Healer', faces: { idle: 'serious', win: 'happy', hurt: 'sad', ko: 'sad' },
      lines: { turn: 'I can do this!', onemore: 'Got it!', shift: 'Go ahead!', finish: 'Did you see that?!', theurgy: 'This is my justice!' } },
    { id: 'koromaru', name: 'Koromaru', persona: 'cerberus', weapon: 'slash', wtype: 'knife', color: '#e8e8f0',
      base: { hp: 88, sp: 52, st: 10, ma: 9, en: 7, ag: 13, lu: 9 }, growth: { hp: 7, sp: 4, st: 0.9, ma: 0.8, en: 0.7, ag: 1.1, lu: 0.8 },
      skills: ['agi', 'mudo', 'rampage'], learn: [[12, 'agilao', 'agi'], [15, 'double_fangs'], [18, 'mudoon', 'mudo'], [21, 'maragion']], sig: ['mudo', 'mudoon', 'rampage'], th: { kill: 1.6 },
      theurgy: { name: 'Hellfire Howl', type: 'dmg', el: 'fire', look: 'fire', target: 'all', power: 150, down: 0.4, ail: { id: 'fear', chance: 0.35 }, desc: 'Cerberus’s three-headed howl. Heavy Fire damage to all foes; may terrify them.' },
      role: 'Fire · Dark · Speed', faces: { idle: 'serious', win: 'happy', hurt: 'sad', ko: 'sad' },
      lines: { turn: 'Woof!', onemore: 'Arf arf!', shift: '*nudges you*', finish: 'Awoooo!', theurgy: 'AWOOOOO!' } },
    { id: 'shinjiro', name: 'Shinjiro', persona: 'castor', weapon: 'strike', wtype: 'axe', color: '#c43b3b', acc: -6,
      base: { hp: 124, sp: 34, st: 15, ma: 5, en: 10, ag: 5, lu: 5 }, growth: { hp: 10, sp: 2, st: 1.3, ma: 0.4, en: 0.9, ag: 0.4, lu: 0.4 },
      skills: ['assault_dive', 'fatal_end'], learn: [[14, 'rakunda'], [18, 'heat_wave']], sig: ['fatal_end', 'assault_dive'], th: { hurt: 2 },
      theurgy: { name: 'Castor’s Charge', type: 'dmg', el: 'strike', look: 'strike', target: 'one', power: 340, sure: true, crit: 30, down: 0.6, desc: 'Castor runs it down. Colossal Strike damage to one foe; it never misses.' },
      role: 'Heavy strike · Low accuracy', faces: { idle: 'neutral', win: 'happy', hurt: 'surprised', ko: 'sad' },
      lines: { turn: 'Tch. Fine.', onemore: 'Stay down.', shift: 'Your turn.', finish: 'Heh. Not bad.', theurgy: 'Get outta my way.' } }
  ];
  /* Searchers who fight (life sim only, after they awaken: searcher: true keeps them out of the prototype's own screens).
     Personas pending Kat's design: placeholder stats and skills, no finish art (their portrait stands in). */
  party.push(
    { id: 'jihoon', name: 'Jihoon', persona: 'p-jihoon', weapon: 'strike', wtype: 'gloves', color: '#7dd3ff', searcher: true,
      base: { hp: 104, sp: 46, st: 11, ma: 8, en: 9, ag: 9, lu: 8 }, growth: { hp: 8, sp: 3.5, st: 1, ma: 0.7, en: 0.8, ag: 0.8, lu: 0.7 },
      skills: ['garu', 'sonic_punch', 'tarukaja'], learn: [[24, 'garula', 'garu'], [28, 'magaru'], [32, 'kill_rush']], sig: ['sonic_punch', 'garula'], th: { buff: 1.4, hurt: 1.3 },
      theurgy: { name: 'Light of Your Life', type: 'dmg', el: 'wind', look: 'wind', target: 'all', power: 150, down: 0.4, desc: 'Loud, vain and enormous. Heavy Wind damage to all foes.' },
      role: 'Wind · Strike · Buffs', faces: { idle: 'serious', win: 'happy', hurt: 'surprised', ko: 'sad' },
      lines: { turn: 'Watch me. Everybody watch me.', onemore: 'Again! I’m on fire!', shift: 'Sol, you’re up!', finish: 'Light of your life, baby!', theurgy: 'Look at me. LOOK AT ME.' } },
    { id: 'minji', name: 'Minji', persona: 'p-minji', weapon: 'pierce', wtype: 'bow', color: '#ffe6a8', searcher: true,
      base: { hp: 84, sp: 68, st: 7, ma: 11, en: 7, ag: 10, lu: 10 }, growth: { hp: 6, sp: 5.5, st: 0.6, ma: 1, en: 0.6, ag: 0.9, lu: 0.9 },
      skills: ['hama', 'dia', 'tarunda'], learn: [[26, 'media'], [30, 'diarama', 'dia'], [34, 'hamaon', 'hama']], sig: ['hama', 'dia'], th: { heal: 1.4 },
      theurgy: { name: 'Final Cut', type: 'dmg', el: 'light', look: 'light', target: 'all', power: 140, down: 0.45, heal: 0.25, desc: 'One perfect frame. Heavy Light damage to all foes, and the party heals 25%.' },
      role: 'Light · Healer', faces: { idle: 'serious', win: 'happy', hurt: 'surprised', ko: 'sad' },
      lines: { turn: 'I’ve got you in frame.', onemore: 'Rolling!', shift: 'Your shot.', finish: 'Cut. Print.', theurgy: 'Look at the camera.' } },
    { id: 'jungwon', name: 'Jungwon', persona: 'p-jungwon', weapon: 'pierce', wtype: 'rapier', color: '#9fe8ff', searcher: true,
      base: { hp: 92, sp: 60, st: 9, ma: 11, en: 8, ag: 11, lu: 8 }, growth: { hp: 7, sp: 4.5, st: 0.8, ma: 1, en: 0.7, ag: 1, lu: 0.7 },
      skills: ['bufu', 'rakunda', 'rakukaja'], learn: [[30, 'bufula', 'bufu'], [34, 'mabufu']], sig: ['bufu', 'bufula'], th: { ail: 1.3, crit: 1.3 },
      theurgy: { name: 'Perfect Composure', type: 'dmg', el: 'ice', look: 'ice', target: 'all', power: 150, down: 0.4, ail: { id: 'freeze', chance: 0.3 }, desc: 'The angrier he gets, the more polite. Heavy Ice damage to all foes; may Freeze.' },
      role: 'Ice · Precision · Debuffs', faces: { idle: 'serious', win: 'happy', hurt: 'surprised', ko: 'sad' },
      lines: { turn: 'Excuse me.', onemore: 'Pardon me. Again.', shift: 'After you.', finish: 'Thank you for your patience.', theurgy: 'Please. Stay down.' } },
    { id: 'haechan', name: 'Haechan', persona: 'p-haechan', weapon: 'slash', wtype: 'knife', color: '#ff9a3d', searcher: true,
      base: { hp: 96, sp: 52, st: 11, ma: 9, en: 8, ag: 12, lu: 9 }, growth: { hp: 7.5, sp: 4, st: 1, ma: 0.8, en: 0.7, ag: 1.1, lu: 0.8 },
      skills: ['zio', 'cleave', 'rakunda'], learn: [[38, 'zionga', 'zio'], [42, 'mazio'], [44, 'power_slash', 'cleave']], sig: ['cleave', 'zionga'], th: { crit: 1.4, kill: 1.3 },
      theurgy: { name: 'Every Universe', type: 'dmg', el: 'elec', look: 'elec', target: 'all', power: 155, down: 0.45, ail: { id: 'shock', chance: 0.3 }, desc: 'He doesn’t lose. Heavy Elec damage to all foes; may Shock.' },
      role: 'Elec · Slash · Speed', faces: { idle: 'serious', win: 'happy', hurt: 'surprised', ko: 'sad' },
      lines: { turn: 'Yeah, yeah. I got it.', onemore: 'Again. Obviously.', shift: 'Go, princess.', finish: 'Told you.', theurgy: 'Every single universe.' } }
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
      aff: { fire: 'weak', strike: 'weak', dark: 'null', light: 'resist' }, skills: ['bash', 'e_agilao', 'e_rakunda'], ai: 'random', exp: 300, img: 'corrupt-tower', h: 200, idle: 'sway', svg: 'maiden', effigy: true,
      note: 'A puppet of the Hanged Man. While it stands, it shields its master.' }),

    // ── Story fights for the life sim (femc-game.html hands them over; battle.js handoff mode). Not in any Tartarus pool or op.
    // pic: a full image path instead of a Shadow slug (picW/picH: its size), for fights that use portraits or memory cards.
    // still: what the log says when the unit spends its turn doing nothing (skill `still`).
    maya_lost: { name: 'Cowardly Maya', arcana: 'Magician', lvl: 3, hp: 54, st: 7, ma: 5, en: 4, ag: 6, lu: 4, story: true,
      aff: { light: 'weak', fire: 'weak', dark: 'resist' }, skills: ['bash', 'tremble'], ai: 'coward', exp: 60, img: 'maya', h: 150, idle: 'breathe', svg: 'maya',
      note: 'The one that hung back. It flinches from light.' },
    magician: Object.assign(S(7, { hp: 3.2, ma: 1.1 }), { name: 'Arcana Magician', arcana: 'Magician', boss: true, story: true,
      aff: { light: 'weak', dark: 'null', fire: 'resist' }, skills: ['lunge', 'e_agi', 'e_maragi', 'e_tarunda'], ai: 'random', exp: 520, yen: 1200,
      img: 'magical-magus', h: 300, idle: 'float', svg: 'priestess', alloutResist: 0.7, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock'],
      note: 'The first full moon. It climbed the dorm wall and it is waiting on the roof.' }),
    memory_car: Object.assign(S(44, { hp: 6.4 }), { name: 'The Sleeper Car', arcana: 'Moon', boss: true, story: true,
      aff: { light: 'weak', dark: 'null', ice: 'resist', strike: 'resist' }, skills: ['e_mabufula', 'e_mazionga', 'still'], ai: 'carriage', exp: 0, yen: 0,
      still: 'The train runs past without touching the floor. Every window has someone asleep in it.',
      img: 'rampage-drive', h: 300, idle: 'sway', svg: 'priestess', alloutResist: 0.6, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock'],
      note: 'A carriage that runs through the tower where there are no rails. It can’t be reached; its guards can.' }),
    // Memory floors (Act IV–V). Mechanics are kept simple; see SCRIPTS in battle.js.
    ballot_box: Object.assign(S(37, { hp: 6, ma: 1.2, en: 1.2 }), { name: 'The Ballot Box', arcana: 'Hoax', boss: true, story: true,
      aff: { fire: 'weak', strike: 'resist', dark: 'null' }, skills: ['e_mazionga', 'e_agilao', 'e_ominous', 'e_tarunda'], ai: 'random', exp: 4200, yen: 5000,
      img: 'laughing-table', h: 300, idle: 'sway', svg: 'priestess', alloutResist: 0.6, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock'],
      note: 'A ballot box the size of a car, swallowing every memory anyone has of her.' }),
    flash_shadow: Object.assign(S(39, { hp: 5.6, ma: 1.25, ag: 1.2 }), { name: 'The Flash', arcana: 'Runners', boss: true, story: true,
      aff: { dark: 'weak', light: 'drain', elec: 'resist' }, skills: ['e_zionga', 'e_evil_touch', 'e_evil_smile', 'e_mazionga'], ai: 'random', exp: 4600, yen: 5200,
      img: 'nice-guy', h: 300, idle: 'float', svg: 'priestess', alloutResist: 0.6, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock'],
      note: 'A hallway at three in the morning, and a camera flash that won’t stop going off.' }),
    tide_shadow: Object.assign(S(42, { hp: 6.4, ma: 1.25, en: 1.2 }), { name: 'The Tide', arcana: 'strangers', boss: true, story: true,
      aff: { elec: 'weak', ice: 'drain', fire: 'resist' }, skills: ['e_bufudyne', 'e_mabufula', 'e_rakunda'], ai: 'random', exp: 5200, yen: 6000,
      img: 'calm-pesce', h: 280, idle: 'sway', svg: 'priestess', alloutResist: 0.6, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock'],
      note: 'The deck of the last ferry, tilting. The water wants her.' }),
    party_shadow: Object.assign(S(43, { hp: 6, st: 1.2, ma: 1.2 }), { name: 'The First Party', arcana: 'Runners', boss: true, story: true,
      aff: { wind: 'weak', fire: 'resist', dark: 'null' }, skills: ['e_maragion', 'e_sexy_dance', 'e_power_slash', 'e_tarunda'], ai: 'random', exp: 5400, yen: 6200,
      img: 'soul-dancer', h: 300, idle: 'sway', svg: 'priestess', alloutResist: 0.6, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock'],
      note: 'Music through a wall, and a Shadow that goes for her guests.' }),
    veil_poster: Object.assign(S(44, { hp: 6.2, ma: 1.25 }), { name: 'Veil and Poster', arcana: 'strangers · Hoax', boss: true, story: true, gimmick: 'emperor',
      aff: {}, shifts: ['fire', 'ice', 'elec', 'wind', 'light'], skills: ['e_bufula', 'e_agilao', 'e_marin_karin', 'e_mabufula'], ai: 'random', exp: 5600, yen: 6400,
      img: 'trance-twins', h: 300, idle: 'float', svg: 'priestess', alloutResist: 0.6, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock'],
      note: 'Two floors at once. Its weakness swaps every turn.' }),
    fox_shadow: Object.assign(S(46, { hp: 5.8, ma: 1.2, ag: 1.3 }), { name: 'The Mirror Fox', arcana: 'Runners · strangers', boss: true, story: true,
      aff: { light: 'weak', dark: 'resist' }, skills: ['e_zionga', 'e_agilao', 'e_dia', 'e_tarukaja'], ai: 'random', exp: 6000, yen: 7000,
      img: 'nekomata', h: 260, idle: 'sway', svg: 'priestess', alloutResist: 0.6, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock'],
      note: 'It moves the way she moves, a beat early.' }),
    wren_call: Object.assign(S(50, { hp: 2.2 }), { name: 'Wren', arcana: 'Jester', boss: true, story: true, gimmick: 'wren',
      aff: {}, skills: ['w_stay', 'w_wait', 'w_choose'], ai: 'wren_ask', exp: 0, yen: 0,
      pic: 'assets/femc/portraits/wren/sad.webp', picW: 887, picH: 828, h: 360, idle: 'breathe', svg: 'maya', alloutResist: 0.5, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock', 'poison', 'distress'],
      note: 'She doesn’t attack. She asks. Hold, and answer her, or don’t.' }),
    last_train: Object.assign(S(52, { hp: 7, ma: 1.2, st: 1.2, en: 1.15 }), { name: 'The Last Train', arcana: 'Moon', boss: true, acts: 2, story: true, gimmick: 'train',
      aff: { light: 'weak', dark: 'drain' }, skills: ['e_megidola', 'e_mabufula', 'e_mazionga', 'e_heat_wave', 'e_evil_smile'], ai: 'random', exp: 14000, yen: 0,
      img: 'wren-shadow-last-train', h: 390, idle: 'float', svg: 'priestess', alloutResist: 0.6, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock'],
      note: 'No stops. Three lantern windows, three sleeping lives. Break a lantern and the train weakens.' }),
    lantern_r: Object.assign(S(50, { hp: 1.3, en: 1.1 }), { name: 'Lantern · Runners', arcana: 'Sun', boss: true, story: true, gimmick: 'lantern', world: 'R',
      aff: { light: 'weak', dark: 'null' }, skills: ['e_dia', 'still'], ai: 'lantern', exp: 0, yen: 0, still: 'In the lantern, a sleeping Solar turns over. Snow on a campus somewhere.',
      pic: 'assets/femc/memories/runners-campus.webp', picW: 560, picH: 560, h: 150, idle: 'float', svg: 'maya', alloutResist: 0.8, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock', 'poison', 'distress'] }),
    lantern_s: Object.assign(S(50, { hp: 1.3, en: 1.1 }), { name: 'Lantern · strangers', arcana: 'Sun', boss: true, story: true, gimmick: 'lantern', world: 'S',
      aff: { light: 'weak', dark: 'null' }, skills: ['e_dia', 'still'], ai: 'lantern', exp: 0, yen: 0, still: 'In the lantern, a sleeping Solar turns over. Salt air, a harbor at low tide.',
      pic: 'assets/femc/memories/strangers-harbor.webp', picW: 560, picH: 560, h: 150, idle: 'float', svg: 'maya', alloutResist: 0.8, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock', 'poison', 'distress'] }),
    lantern_h: Object.assign(S(50, { hp: 1.3, en: 1.1 }), { name: 'Lantern · Hoax', arcana: 'Sun', boss: true, story: true, gimmick: 'lantern', world: 'H',
      aff: { light: 'weak', dark: 'null' }, skills: ['e_dia', 'still'], ai: 'lantern', exp: 0, yen: 0, still: 'In the lantern, a sleeping Solar turns over. A pin on a blazer, a count still going.',
      pic: 'assets/femc/memories/hoax-president-pin.webp', picW: 560, picH: 560, h: 150, idle: 'float', svg: 'maya', alloutResist: 0.8, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock', 'poison', 'distress'] }),
    wren_last: Object.assign(S(50, { hp: 0.9 }), { name: 'Wren', arcana: 'Jester', boss: true, story: true, capfall: true,
      aff: {}, skills: ['still'], ai: 'still', exp: 0, yen: 0, still: 'Wren doesn’t fight back.',
      pic: 'assets/femc/portraits/wren/serious.webp', picW: 887, picH: 828, h: 380, idle: 'breathe', svg: 'maya', alloutResist: 1, ailImmune: ['charm', 'fear', 'bind', 'freeze', 'shock', 'poison', 'distress'],
      note: 'The cap is gone. Her hair is down. She looks like you.' })
  };

  /* ── Tartarus: seven blocks, three floors each, a full moon at the top of each block.
     Each floor is a node map (map.js). pool: Shadow groups; strong: rarer, tougher groups. The last floor's stairs lead to the
     block's full-moon operation (`op`); once that's cleared the barrier stays open. */
  const blocks = [
    { id: 'thebel', name: 'Thebel', bg: BG + 'tartarus-scene.webp', color: '#7dffc0', op: 'priestess', floors: ['2F', '4F', '6F'],
      pool: [['maya', 'maya', 'maya'], ['maya', 'slime', 'maya'], ['hand', 'beetle', 'hand'], ['snake', 'beetle', 'slime'], ['hand', 'snake'], ['table', 'maya', 'slime'], ['cupid', 'table', 'hand']],
      strong: [['cupid', 'twins@8'], ['table', 'beetle', 'snake'], ['magus@8', 'cupid']], tiers: [[0, 3], [2, 5], [3, 7]] },
    { id: 'arqa', name: 'Arqa', bg: BG + 'arya.webp', color: '#ff8cc0', op: 'empress', floors: ['9F', '12F', '15F'],
      pool: [['venus', 'cupid@10', 'hand@10'], ['magus', 'papillon'], ['twins', 'venus'], ['papillon', 'pesce'], ['magus', 'twins', 'cupid@10'], ['pesce', 'venus', 'papillon']],
      strong: [['pesce@14', 'magus@13'], ['twins@14', 'papillon@13', 'venus@13']], tiers: [[0, 2], [1, 4], [2, 6]] },
    { id: 'yabbashah', name: 'Yabbashah', bg: BG + 'tartarus-yabbashah.webp', color: '#ff5b5b', op: 'hierophant', floors: ['18F', '21F', '24F'],
      pool: [['dice', 'relic'], ['mother', 'dice'], ['hablerie', 'balance'], ['relic', 'mother', 'dice'], ['balance', 'hablerie', 'relic'], ['mother', 'balance']],
      strong: [['mother@19', 'balance@19'], ['hablerie@19', 'dice@19', 'relic@19']], tiers: [[0, 2], [1, 4], [2, 5]] },
    { id: 'tziah', name: 'Tziah', bg: BG + 'tartarus-tziah.webp', color: '#c9d6ff', op: 'lovers', floors: ['27F', '30F', '33F'],
      pool: [['dancer', 'king'], ['turret', 'bambino'], ['pot', 'dancer'], ['king', 'turret', 'bambino'], ['pot', 'bambino', 'dancer'], ['king', 'pot']],
      strong: [['turret@24', 'pot@24'], ['dancer@24', 'king@24', 'bambino@24']], tiers: [[0, 2], [1, 4], [2, 5]] },
    { id: 'harabah', name: 'Harabah', bg: BG + 'harabah.webp', color: '#ffd36b', op: 'chariot', floors: ['36F', '39F', '42F'],
      pool: [['drive', 'giant'], ['beast', 'niceguy'], ['basalt', 'drive'], ['giant', 'beast', 'drive'], ['niceguy', 'basalt', 'beast'], ['giant', 'niceguy']],
      strong: [['giant@29', 'basalt@29'], ['drive@29', 'beast@29', 'niceguy@29']], tiers: [[0, 2], [1, 4], [2, 5]] },
    { id: 'adamah', name: 'Adamah', bg: BG + 'adamah.webp', color: '#b07bff', op: 'hermit', floors: ['45F', '48F', '51F'],
      pool: [['knight', 'machine'], ['castle', 'tower'], ['knight', 'tower'], ['machine', 'castle', 'knight'], ['tower', 'machine', 'castle'], ['knight', 'beast@31']],
      strong: [['castle@34', 'tower@34'], ['seeker@33']], tiers: [[0, 2], [1, 4], [2, 5]] },
    { id: 'empyrean', name: 'Empyrean', bg: BG + 'empyrean.webp', color: '#fff2b0', op: 'fortune', floors: ['54F', '57F', '60F'],
      pool: [['knight@35', 'tower@35'], ['machine@36', 'castle@35'], ['giant@35', 'dancer@35', 'pot@35'], ['seeker', 'knight@35'], ['basalt@36', 'turret@36', 'bambino@36']],
      strong: [['seeker@39', 'tower@38'], ['seeker@38', 'seeker@38']], tiers: [[0, 2], [1, 3], [2, 4]] }
  ];
  /* Floors, in climbing order. id: f + number (2F → f2). access: chance of an access point (the first floor of a block always has one). */
  const floors = [];
  blocks.forEach((b, bi) => b.floors.forEach((label, fi) => {
    const t = b.tiers[fi];
    floors.push({ id: 'f' + parseInt(label, 10), label, block: b.name, blockId: b.id, bi, fi, bg: b.bg, color: b.color,
      pool: b.pool.slice(t[0], t[1] + 1), strong: b.strong, nav: fi === 0 ? 'block_' + b.id : 'floor', top: fi === b.floors.length - 1, op: fi === b.floors.length - 1 ? b.op : null,
      access: fi === 0 ? 1 : 0.6, layers: 5 + Math.min(2, Math.floor(bi / 2)) });
  }));

  /* Full Moon Operations, in order. Each unlocks when the one before it is cleared; all can be replayed.
     arena: the battle background. lvl: the level the fight is tuned for. */
  const ops = [
    { id: 'priestess', name: 'The Priestess', arcana: 'II · Priestess', place: 'The Monorail', arena: BG + 'darkhour-monorail.webp', group: ['priestess'], lvl: 10,
      brief: 'A full-moon Shadow has taken over the monorail. Her veil only lets one element through at a time.' },
    { id: 'empress', name: 'Empress & Emperor', arcana: 'III · IV · Empress & Emperor', place: 'Gekkoukan High', arena: BG + 'darkhour-gekkoukan-gate.webp', group: ['empress', 'emperor'], lvl: 15,
      brief: 'Two Shadows at the school gate. The Empress lets exactly one element through, and only a scan reveals it. The Emperor’s weakness won’t sit still.' },
    { id: 'hierophant', name: 'The Hierophant', arcana: 'V · Hierophant', place: 'Shirakawa Boulevard', arena: BG + 'hotel-outside.webp', group: ['hierophant'], lvl: 20,
      brief: 'He preaches buffs onto himself and penance onto you, and none of it wears off. Bring Dekaja and Dekunda.' },
    { id: 'lovers', name: 'The Lovers', arcana: 'VI · Lovers', place: 'The hotel lobby', arena: BG + 'hotel-lobby.webp', group: ['lovers'], lvl: 25,
      brief: 'A Shadow made of heartbreak. She charms everyone she can. Patra Gems and Rose Barrettes will save you.' },
    { id: 'chariot', name: 'Chariot & Justice', arcana: 'VII · VIII · Chariot & Justice', place: 'Moonlight Bridge', arena: BG + 'moonlightbridge.webp', group: ['chariot', 'justice'], lvl: 30,
      brief: 'The Chariot grows stronger every round Justice stands. Justice heals it and banishes with Hamaon. Take Justice down first.' },
    { id: 'hermit', name: 'The Hermit', arcana: 'IX · Hermit', place: 'Outside Tartarus', arena: BG + 'tartarus-fromadistance.webp', group: ['hermit'], lvl: 35,
      brief: 'It hides in the static. Analyze to pin it down, or hit everyone to flush it out.' },
    { id: 'fortune', name: 'Fortune & Strength', arcana: 'X · XI · Fortune & Strength', place: 'Moonlight Bridge', arena: BG + 'moonlightbridge.webp', group: ['fortune', 'strength'], lvl: 39,
      brief: 'The wheel spins every turn: blessings, curses, or a frenzy for Strength. Bring Fortune down and the luck runs out.' },
    { id: 'hanged', name: 'The Hanged Man', arcana: 'XII · Hanged Man', place: 'Iwatodai, the Dark Hour', arena: BG + 'darkhour-iwatodai-street.webp', group: ['hanged'], lvl: 43,
      brief: 'It hides behind its effigies. While any of them stand, nothing touches it. Knock them all Down, then go for the Hanged Man.' }
  ];

  /* Node map settings (map.js). steps: when the Reaper comes. weights: how often each room appears in the middle layers. */
  const map = {
    reaperSteps: 22, reaperWarn: 5, clockChance: 0.55, lockedChance: 0.45,
    weights: { shadow: 5, chest: 2, event: 1.5, empty: 1.2 },
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
  const memories = [
    ['runners-campus', 'Runners', 'A Campus at Dusk', 'Brick paths, cold air, a bell tower. She knows the way to a building she’s never seen.'],
    ['runners-energy-drink', 'Runners', 'An Energy Drink', 'Sweet, fizzy, way too much caffeine. Someone always handed her one before a race.'],
    ['runners-hoodie', 'Runners', 'An Oversized Hoodie', 'The sleeves cover her hands. It isn’t hers. She wore it anyway.'],
    ['runners-monitor', 'Runners', 'A Glowing Monitor', 'A screen at three in the morning, and a message she never sent.'],
    ['runners-trophy', 'Runners', 'A Trophy', 'Gold plastic, a little crooked. She remembers the weight of it more than the win.', true],
    ['runners-3am', 'Runners', '3 A.M.', 'The hour when the house is asleep and she finally isn’t pretending.', true],
    ['runners-stadium', 'Runners', 'Stadium Lights', 'The roar of a crowd, and one voice in it she could pick out anywhere.', true],
    ['runners-phone', 'Runners', 'A Phone Lighting Up', 'A name on the screen. Her thumb knows it. She doesn’t.', true],
    ['strangers-harbor', 'strangers', 'The Harbor', 'Salt wind, ferry horns, the smell of rain on concrete.'],
    ['strangers-jade-ring', 'strangers', 'A Jade Ring', 'Green and cold on a red cord. Someone tied it around her neck and didn’t let go.'],
    ['strangers-lanterns', 'strangers', 'Lanterns', 'A string of red lanterns over a narrow street. Somebody waited under them.'],
    ['strangers-rabbit-socks', 'strangers', 'Rabbit Socks', 'Silly little socks with ears. She laughs before she knows why.'],
    ['strangers-needle', 'strangers', 'A Needle and Thread', 'Careful stitches on a hem. A date she didn’t pick, coming closer.', true],
    ['strangers-ferry', 'strangers', 'The Last Ferry', 'The deck rocks under her feet. She almost didn’t get on.', true],
    ['strangers-discman', 'strangers', 'A Discman', 'One earbud for her, one for someone else. The song skips at the same spot every time.', true],
    ['hoax-croissant', 'Hoax', 'A Croissant', 'Flaky, buttery, eaten too fast between two things she was late for.'],
    ['hoax-ladder', 'Hoax', 'A Ladder', 'Climbing up to hang a banner, everyone watching from below.'],
    ['hoax-leash', 'Hoax', 'A Leash', 'A tug at the other end, and a dog that’s always happy to see her.'],
    ['hoax-poster', 'Hoax', 'A Campaign Poster', 'Her own face, smiling a smile she had to practice.'],
    ['hoax-debate-stage', 'Hoax', 'The Debate Stage', 'Bright lights, a podium, and the person everyone needs her to be.', true],
    ['hoax-president-pin', 'Hoax', 'A President’s Pin', 'Small and heavy. She wasn’t sure she wanted to win.', true],
    ['hoax-crane-game', 'Hoax', 'A Crane Game', 'The claw slips again. Someone beside her keeps feeding it coins anyway.', true],
    // Awarded by searcher links (life sim). No art yet: battle.js / the game's journal draw a placeholder card from the title
    // until assets/femc/memories/<id>.webp exists, then the real card shows up on its own.
    ['runners-rooftop', 'Runners', 'A Rooftop', 'Gravel under her shoes, the whole city lit up below, and someone who followed her up the stairs.'],
    ['strangers-suture-kit', 'strangers', 'A Suture Kit', 'Curved needles, small scissors. Her hands know what to do before she does.'],
    ['strangers-low-tide', 'strangers', 'Low Tide', 'Mud to the horizon under sodium lights. Bad coffee in a car, waiting for it to turn.'],
    ['hoax-group-chat', 'Hoax', 'A Group Chat', 'Two in the morning, a name changed to something stupid, and everyone still awake for her.'],
    ['hoax-math-homework', 'Hoax', 'Math Homework', 'Neat working in somebody else’s handwriting, explained twice, patiently.']
  ].map(([id, world, title, text, wide]) => ({ id, world, title, text, img: MEM + id + '.webp', wide: wide ? MEM + id + '-wide.webp' : null }));
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

  /* Music per screen. A floor can override `battle` with its own `music` key. Swap files here. */
  const M = 'assets/femc/music/';
  const music = {
    title: M + 'color-your-night.mp3',       // the entrance / hub
    battle: M + 'its-going-down-now.mp3',     // regular fights
    boss: M + 'master-of-shadow.mp3',         // full-moon bosses and the Reaper
    floor: M + 'tartarus-thebel.mp3',         // the node map, results, skill tree
    shop: M + 'paulownia-mall.mp3',           // Paulownia Mall
    victory: M + 'full-moon-full-life.mp3',   // operation complete
    gameover: null,
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
    rushNo: ['Rush is off for this kind of fight. You can change that in Settings.', 'neutral']
  };

  /* Difficulty (Settings). pdmg: party damage, edmg: Shadow damage, heal: party healing, reaper: the Reaper hunts you on the
     node map, strong: how much more often Strong Shadow rooms appear. Changeable any time. */
  const difficulty = {
    story: { name: 'Story', pdmg: 1.3, edmg: 0.6, heal: 1, reaper: false, strong: 1, desc: 'For the story. You hit 30% harder, Shadows hit 40% softer, and the Reaper never comes.' },
    normal: { name: 'Normal', pdmg: 1, edmg: 1, heal: 1, reaper: true, strong: 1, desc: 'The intended balance.' },
    hard: { name: 'Hard', pdmg: 1, edmg: 1.4, heal: 0.75, reaper: true, strong: 2, desc: 'Shadows hit 40% harder, healing is 25% weaker, and Strong rooms turn up twice as often.' }
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
    { id: 'forms', name: 'Haenim’s forms', text: 'Master a whole branch of Haenim’s tree to unlock one of her forms (Sunna, Mazu, Nike), each with its own affinities and a signature skill. Master all three and clear a full moon for the unveiled form. Switch forms on the Personas screen.' },
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

  /* Haenim's tree: three charms, three worlds. Each node needs the one above it. effect keys are read by engine.js (treeFx).
     Mastering a branch (every node) unlocks that world's form of Haenim (see personas, form: true). */
  const tree = [
    { id: 'bell', name: 'Bell', world: 'Runners', who: 'Kiriko', color: '#ffd36b', theme: 'Support · Healing · Buffs', form: 'haenim-sunna',
      blurb: 'A gold bell from Kiriko. It rings like the end of a race.',
      nodes: [
        { id: 'bell1', name: 'Gold Bell', cost: 1, desc: '+15 max SP. Dia heals 40% more.', effect: { sp: 15, healMult: 1.4 } },
        { id: 'bell2', name: 'Media', cost: 1, desc: 'Learn Media: heal the whole party.', effect: { learn: 'media' } },
        { id: 'bell3', name: 'Marakukaja', cost: 2, desc: 'Learn Marakukaja: party defense up.', effect: { learn: 'marakukaja' } },
        { id: 'bell4', name: 'Recarm', cost: 2, desc: 'Learn Recarm: revive a fallen ally.', effect: { learn: 'recarm' } },
        { id: 'bell5', name: 'Runner’s High', cost: 3, desc: 'After each of Solar’s turns the party heals 6% HP. Media becomes Mediarama. Unlocks Sunna.', effect: { regen: 0.06, upgrade: ['media', 'mediarama'] } }
      ] },
    { id: 'jade', name: 'Jade', world: 'strangers', who: 'Incheon', color: '#5fe0b0', theme: 'Precision · Crits · Ice', form: 'haenim-mazu',
      blurb: 'A jade ring on a red cord. Cold, exact, and never let go.',
      nodes: [
        { id: 'jade1', name: 'Jade Ring', cost: 1, desc: '+2 St. Critical rate +8%.', effect: { st: 2, crit: 8 } },
        { id: 'jade2', name: 'Bufu', cost: 1, desc: 'Learn Bufu: ice damage to one foe.', effect: { learn: 'bufu' } },
        { id: 'jade3', name: 'Red Cord', cost: 2, desc: 'Golden Rope binds 25% more often and crits more.', effect: { bind: 0.25, ropeCrit: 12 } },
        { id: 'jade4', name: 'Bufula', cost: 2, desc: 'Learn Bufula: heavier ice damage.', effect: { learn: 'bufula', upgrade: ['bufu', 'bufula'] } },
        { id: 'jade5', name: 'Cold Read', cost: 3, desc: 'Every foe’s affinities are known at the start of battle. Weakness damage +25% for the party. Unlocks Mazu.', effect: { autoAnalyze: true, weakMult: 1.25 } }
      ] },
    { id: 'star', name: 'Star', world: 'Hoax', who: 'Hamlim', color: '#ff8cc0', theme: 'Leadership · Party buffs · Rally', form: 'haenim-nike',
      blurb: 'A star pin from the campaign. Everyone looks to her when she wears it.',
      nodes: [
        { id: 'star1', name: 'Star Pin', cost: 1, desc: '+2 Ag and +10 max HP.', effect: { ag: 2, hp: 10 } },
        { id: 'star2', name: 'Matarukaja', cost: 1, desc: 'Learn Matarukaja: party attack up.', effect: { learn: 'matarukaja' } },
        { id: 'star3', name: 'Rally', cost: 2, desc: 'Learn Rally: party attack, defense and agility up, and +6 SP each.', effect: { learn: 'rally' } },
        { id: 'star4', name: 'Campaign Trail', cost: 2, desc: 'Shift boost rises from +25% to +50%, and the receiver regains 5 SP.', effect: { shiftMult: 1.5, shiftSp: 5 } },
        { id: 'star5', name: 'Victory Speech', cost: 3, desc: 'All-Out Attacks hit 50% harder. The party starts each battle with attack up. Unlocks Nike.', effect: { alloutMult: 1.5, openBuff: 'atk' } }
      ] }
  ];

  const progression = {
    startLevel: 5,
    expToNext: lvl => 20 + 5 * lvl * lvl,
    expFor: lvl => Math.round(0.55 * lvl * lvl + 6 * lvl + 30), // a Shadow's EXP when data doesn't say
    yenFor: lvl => Math.round(14 + lvl * 7),
    dropChance: 0.35,
    pointsPerLevel: 2,
    bossBonusPoints: 2,
    memoryPoints: 1, // each memory fragment gives Haenim's tree a skill point
    heat: 0.3, // each full climb to the top makes Tartarus Shadows this much stronger (and worth more EXP)
    benchShare: 0.6, // members sitting out still get this share of the EXP
    tiredAfter: 6, // fights in a row before a member gets Tired (until a Clock or leaving Tartarus)
    tired: { stat: 0.9, skip: 0.08 }, // Tired: stats ×0.9, and an 8% chance to lose a turn
    strongMult: { exp: 1.6, yen: 1.6 },
    sellRate: 0.5 // shops buy gear back at half price (Mayoido only)
  };

  return { portraits: P, faceFocus, elements, affinityOrder, skills, ailments, tactics, attack, personas, party, defaultParty, theurgyGain, items, startItems, startYen, materials,
    gear, startGear, shops, enemies, blocks, floors, ops, map, events, memories, memoryPlaceholder, music, clips, navigator, nav, tree, progression, difficulty, glossary, tips };
})();
