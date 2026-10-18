/* FEMC battle: all content. Rules live in engine.js, screens in battle.js.
   Art: assets/femc/battle/art/personas/<slug>.webp and art/shadows/<slug>.webp (png also works).
   Anything without art falls back to its tarot card (Personas) or an SVG from shadows.js (Shadows). */
window.FEMC_BATTLE_DATA = (() => {
  const ELEMENTS = {
    slash:  { label: 'Slash',  phys: true },
    strike: { label: 'Strike', phys: true },
    pierce: { label: 'Pierce', phys: true },
    fire:   { label: 'Fire' },
    ice:    { label: 'Ice' },
    elec:   { label: 'Elec' },
    wind:   { label: 'Wind' },
    light:  { label: 'Light' },
    dark:   { label: 'Dark' },
    almighty: { label: 'Almighty' }
  };

  // cost: SP, or hp (a share of max HP) for physical skills. target: one | all | ally | allies | self.
  const SKILLS = {
    attack:      { name: 'Attack', el: 'slash', power: 40, target: 'one', crit: .08 },
    agi:         { name: 'Agi', el: 'fire', power: 50, cost: 4, target: 'one', desc: 'Light Fire damage to one foe.' },
    agilao:      { name: 'Agilao', el: 'fire', power: 90, cost: 8, target: 'one', desc: 'Medium Fire damage to one foe.' },
    maragi:      { name: 'Maragi', el: 'fire', power: 45, cost: 10, target: 'all', desc: 'Light Fire damage to all foes.' },
    bufu:        { name: 'Bufu', el: 'ice', power: 50, cost: 4, target: 'one', desc: 'Light Ice damage to one foe.' },
    zio:         { name: 'Zio', el: 'elec', power: 50, cost: 4, target: 'one', desc: 'Light Elec damage to one foe.' },
    garu:        { name: 'Garu', el: 'wind', power: 50, cost: 3, target: 'one', desc: 'Light Wind damage to one foe.' },
    mudo:        { name: 'Mudo', el: 'dark', power: 50, cost: 5, target: 'one', desc: 'Light Dark damage to one foe.' },
    daybreak:    { name: 'Daybreak', el: 'light', power: 60, cost: 6, target: 'one', desc: 'Light damage to one foe. Haenim’s own dawn.' },
    dawnbreaker: { name: 'Dawnbreaker', el: 'light', power: 70, cost: 14, target: 'all', desc: 'Light damage to all foes.' },
    goldenRope:  { name: 'Golden Rope', el: 'strike', power: 75, hp: .10, target: 'one', crit: .1, bind: .3, desc: 'Medium Strike damage. 30% chance to Bind.' },
    sonicPunch:  { name: 'Sonic Punch', el: 'strike', power: 70, hp: .08, target: 'one', crit: .15, desc: 'Medium Strike damage to one foe.' },
    cleave:      { name: 'Cleave', el: 'slash', power: 70, hp: .07, target: 'one', crit: .12, desc: 'Medium Slash damage to one foe.' },
    lunge:       { name: 'Lunge', el: 'pierce', power: 55, hp: .06, target: 'one', crit: .1 },
    dia:         { name: 'Dia', heal: 60, cost: 4, target: 'ally', desc: 'Restore a little HP to one ally.' },
    diarama:     { name: 'Diarama', heal: 140, cost: 10, target: 'ally', desc: 'Restore a lot of HP to one ally.' },
    media:       { name: 'Media', heal: 50, cost: 9, target: 'allies', desc: 'Restore a little HP to the party.' },
    marin:       { name: 'Marin Karin', el: 'almighty', power: 0, cost: 5, target: 'one', bind: .45, desc: 'Chance to Bind one foe.' }
  };

  const PERSONAS = {
    haenim:     { name: 'Haenim', arcana: 'Fool', user: 'solar', tarot: 'fool', evolved: '???', glitch: true,
                  blurb: 'A Persona that answers to Solar alone. Her name never comes through clean on the first call.' },
    polydeuces: { name: 'Polydeuces', arcana: 'Emperor', user: 'akihiko', tarot: 'emperor', evolved: 'Caesar' },
    io:         { name: 'Io', arcana: 'Lovers', user: 'yukari', tarot: 'lovers', evolved: 'Isis' },
    hermes:     { name: 'Hermes', arcana: 'Magician', user: 'junpei', tarot: 'magician', evolved: 'Trismegistus' }
  };

  // aff: weak | resist | null | drain | repel per element.
  const PARTY = [
    { id: 'solar', name: 'Solar', persona: 'haenim', hp: 120, sp: 80, str: 9, mag: 10, end: 8, agi: 9,
      aff: { light: 'resist', dark: 'weak' }, skills: ['agi', 'daybreak', 'goldenRope', 'dia'], portrait: 'solar' },
    { id: 'akihiko', name: 'Akihiko', persona: 'polydeuces', hp: 130, sp: 50, str: 11, mag: 7, end: 9, agi: 11,
      aff: { elec: 'resist', ice: 'weak' }, skills: ['zio', 'sonicPunch'], portrait: 'akihiko' },
    { id: 'yukari', name: 'Yukari', persona: 'io', hp: 100, sp: 75, str: 6, mag: 11, end: 7, agi: 10,
      aff: { wind: 'resist', elec: 'weak' }, skills: ['garu', 'dia', 'media'], portrait: 'yukari' },
    { id: 'junpei', name: 'Junpei', persona: 'hermes', hp: 140, sp: 45, str: 12, mag: 7, end: 10, agi: 7,
      aff: { fire: 'resist', wind: 'weak' }, skills: ['agi', 'cleave'], portrait: 'junpei' }
  ];

  const ITEMS = {
    medicine:    { name: 'Medicine', heal: 50, target: 'ally', desc: 'Restore 50 HP to one ally.' },
    snuffSoul:   { name: 'Snuff Soul', sp: 25, target: 'ally', desc: 'Restore 25 SP to one ally.' },
    revivalBead: { name: 'Revival Bead', revive: .5, target: 'fallen', desc: 'Revive a fallen ally with half HP.' }
  };
  const START_ITEMS = { medicine: 4, snuffSoul: 2, revivalBead: 1 };

  // img: art slug in art/shadows (optional), h: display height in px, svg: fallback drawing in shadows.js.
  const SHADOWS = {
    maya:     { name: 'Cowardly Maya', arcana: 'Magician', hp: 60, str: 6, mag: 6, end: 5, agi: 6, exp: 20,
                aff: { fire: 'weak', light: 'weak' }, skills: ['attack', 'agi'], img: 'cowardly-maya', h: 150, svg: 'maya' },
    hand:     { name: 'Dancing Hand', arcana: 'Magician', hp: 70, str: 7, mag: 8, end: 6, agi: 9, exp: 26,
                aff: { ice: 'weak', elec: 'resist' }, skills: ['zio', 'marin'], img: 'dancing-hand', h: 170, svg: 'hand' },
    tiara:    { name: 'Muttering Tiara', arcana: 'Priestess', hp: 65, str: 4, mag: 10, end: 6, agi: 8, exp: 28,
                aff: { strike: 'weak', ice: 'drain' }, skills: ['bufu', 'garu'], img: 'muttering-tiara', h: 140, svg: 'tiara' },
    eagle:    { name: 'Venus Eagle', arcana: 'Lovers', hp: 80, str: 8, mag: 9, end: 7, agi: 13, exp: 32,
                aff: { elec: 'weak', pierce: 'weak', wind: 'null' }, skills: ['garu', 'lunge'], img: 'venus-eagle', h: 180, svg: 'eagle' },
    drive:    { name: 'Rampage Drive', arcana: 'Chariot', hp: 110, str: 12, mag: 4, end: 11, agi: 7, exp: 38,
                aff: { elec: 'weak', slash: 'resist', pierce: 'resist' }, skills: ['attack', 'lunge'], img: 'rampage-drive', h: 170, svg: 'drive' },
    book:     { name: 'Spurious Book', arcana: 'Hermit', hp: 75, str: 4, mag: 12, end: 6, agi: 10, exp: 34,
                aff: { fire: 'weak', dark: 'drain', light: 'weak' }, skills: ['mudo', 'agi'], img: 'spurious-book', h: 130, svg: 'book' },
    snake:    { name: 'Lustful Snake', arcana: 'Lovers', hp: 90, str: 10, mag: 8, end: 8, agi: 11, exp: 36,
                aff: { ice: 'weak', fire: 'resist' }, skills: ['attack', 'marin', 'agi'], img: 'lustful-snake', h: 190, svg: 'snake' },
    priestess: { name: 'Arcana Priestess', arcana: 'Priestess', hp: 620, str: 12, mag: 14, end: 12, agi: 12, exp: 300, boss: true,
                aff: { fire: 'weak', ice: 'drain', light: 'resist', dark: 'resist' },
                skills: ['bufu', 'garu', 'mudo', 'maBufu'], img: 'priestess-shadow', h: 340, svg: 'priestess', acts: 2 }
  };
  SKILLS.maBufu = { name: 'Mabufu', el: 'ice', power: 45, cost: 0, target: 'all' };

  // A floor is a list of possible encounters; one is picked at random.
  const FLOORS = [
    { name: 'Thebel 1F', fights: [['maya', 'maya'], ['maya', 'tiara']] },
    { name: 'Thebel 2F', fights: [['hand', 'maya'], ['tiara', 'tiara', 'maya']] },
    { name: 'Thebel 3F', fights: [['eagle', 'hand'], ['book', 'maya', 'maya']] },
    { name: 'Thebel 4F', fights: [['drive', 'tiara'], ['snake', 'book'], ['eagle', 'eagle']] },
    { name: 'Thebel 5F — Guardian', fights: [['priestess']], boss: true }
  ];

  // Music per screen. Each list is tried in order, so a missing file falls back to one already on the site.
  const music = {
    hub:     ['color-your-night', 'iwatodai-dorm'],
    battle:  ['its-going-down-now', 'mass-destruction'],
    boss:    ['master-of-shadow', 'burn-my-dread'],
    results: ['tartarus-thebel', 'tranquility'],
    clear:   ['full-moon-full-life', 'sun']
  };

  // Fuuka's navigator lines. A {name} is filled in when it makes sense.
  const FUUKA = {
    start:    ['Enemies ahead! Be careful, everyone.', 'I’m picking up Shadows. Get ready!', 'Here they come!'],
    boss:     ['This one’s different… it’s a lot stronger than the others. Please be careful!'],
    weak:     ['That’s its weakness! Keep going!', 'It’s down! Now’s your chance!', 'Nice! You found its weakness!'],
    resist:   ['It’s resisting that. Try something else.', 'That didn’t do much…'],
    absorb:   ['No! It absorbed that attack!', 'It’s getting stronger from that!'],
    allDown:  ['They’re all down! Go for it!', 'Everyone, now! All-out attack!'],
    lowHp:    ['{name}, you’re hurt! Heal up!', '{name}’s in danger!'],
    partyHit: ['Watch out! It’s targeting your weakness!', '{name}, hang in there!'],
    analyze:  ['Let me take a look…', 'Analyzing… okay, here’s what I found.'],
    win:      ['We did it! Great job, everyone.', 'All clear. Nice work!'],
    bossWin:  ['You did it… The Guardian’s gone. I can sense the way up!'],
    lose:     ['No… everyone, please get up!'],
    bound:    ['It can’t move! Take advantage of it!']
  };

  // Haenim's tree: one point per level. `needs` must be learned first.
  const TREE = [
    { id: 'vigor',      name: 'Morning Vigor', desc: '+20 max HP.', stat: { hp: 20 } },
    { id: 'clarity',    name: 'Clear Sky', desc: '+15 max SP.', stat: { sp: 15 } },
    { id: 'agilao',     name: 'Agilao', desc: 'Agi grows into Agilao.', needs: 'vigor', learn: 'agilao', replace: 'agi' },
    { id: 'diarama',    name: 'Diarama', desc: 'Dia grows into Diarama.', needs: 'clarity', learn: 'diarama', replace: 'dia' },
    { id: 'rope',       name: 'Tighter Rope', desc: 'Golden Rope binds 50% of the time.', needs: 'vigor', flag: 'rope' },
    { id: 'sunrise',    name: 'Sunrise', desc: 'Restore 5% HP at the start of each of Solar’s turns.', needs: 'clarity', flag: 'sunrise' },
    { id: 'dawn',       name: 'Dawnbreaker', desc: 'Light damage to all foes.', needs: ['agilao', 'diarama'], learn: 'dawnbreaker' },
    { id: 'morningStar',name: 'Morning Star', desc: 'Light skills deal 25% more damage.', needs: 'dawn', flag: 'morningStar' }
  ];

  // EXP needed for the next level: grows each level.
  const expFor = lv => Math.round(60 * Math.pow(lv, 1.35));
  const growth = { hp: 12, sp: 6, str: 1, mag: 1, end: 1, agi: 1 };

  return { ELEMENTS, SKILLS, PERSONAS, PARTY, ITEMS, START_ITEMS, SHADOWS, FLOORS, music, FUUKA, TREE, expFor, growth, START_LEVEL: 3 };
})();
