/* Social stats, conditions and the party for femc-game.html.
   Five P5-style social stats, each with fifteen ranks (rank 1 to 15, since 2026-11-14; Kat: "like P5X, maybe even higher
   later") named in the game's own voice. `at` is the points needed for each rank; `ranks` names them. Adding ranks later is
   just data: append a name to `ranks` and a threshold to `at` (same length), and every screen follows. Anything in the game
   that says `needs: { knowledge: 3 }` means rank 3 ("Well-Read") or better; an `ifStat` line works the same way. The order
   here is the order on the Status screen's radar.
   Tuning: a year of class alone (listening, answering, exams) is about 110 Knowledge, Tartarus nights and full moons about
   60 Courage. In a simulated year (tests/femc_stats.py), a playthrough that spends about half its free time on links ends
   near 750 points and tops out about three stats at rank 5; a link-heavy one ends near 530 and tops out one. Ranks 1-5 are
   unchanged (all five take 800, like Persona) and stay the "first playthrough" ladder: stamps and achievements that say
   "max a stat" mean rank 5. Ranks 6-15 are New Game+ territory (stats carry over, core.js newGamePlus): a focused stat gains
   roughly 200-300 a year, so rank 15 (1300; Knowledge 1540, about 1.2-1.33x the others since class feeds it every day) takes
   four or five playthroughs and can't be reached in one.
   Rewards (`rewards`: the rank each kind unlocks at; core.js statReward / statTiers, shown on the Status screen):
     5   title: the stat's `title` (cosmetics.js tt-stat-<id>, pool: false) lands in the Wardrobe (granted on load too), and
         with it the stat's `wall`paper (cosmetics.js wp-stat-<id>, pool: false; Kat's art, Nov 14).
     8   job: +jobPct% pay at every job whose stat (`jobStat` below; else the job's first stat) is at rank 8 (core.js jobPay,
         listed as a perk in the Jobs app).
     10  choices: scene options with `needs: { <stat>: 10 }, hide: true` appear (hidden until then; scene.js), tagged with the stat.
     12  exam: exam standing + examPts (core.js examResult); Knowledge 12 also lights the right answer in class (ui.js classPeriod).
     15  battle: the stat's `battle` perk in story fights (handoff social.statPerks; battle.js): Knowledge skills cost 10% less
         SP, Courage +5% crit, Proficiency luckier Shuffle Time (build.js deal `lucky`), Charm 10% off the battle stock
         at the life sim's shops (core.js shopDiscount; story only by nature), Kindness heals the party 10% HP after each won fight in Tartarus.
   Where the points come from (activities, books, the dorm at night, class, exams, jobs, link choices, bond perks) is listed in
   FEMC-REVAMP-ROADMAP.md section 7 ("Five social stats").
   alias: old stat ids that still work anywhere a stat id is read (data written for P3P's three: `academics` is Knowledge).
   legacy: the P3P ladders saves were made with (Academics / Charm / Courage, six ranks), for the one-time migration in
   core.js migrateStats. Never edit them; they describe old saves. */
window.FEMC_GAME_STATS = {
  stats: {
    knowledge: { name: 'Knowledge', color: '#7fb6ff', title: 'tt-stat-knowledge', wall: 'wp-stat-knowledge', battle: 'Skills cost 10% less SP',
      ranks: ['Clueless', 'Bookish', 'Well-Read', 'Brilliant', 'Luminary', 'Polymath', 'Walking Encyclopedia', 'Prodigy', 'Mastermind', 'Valedictorian', 'Savant', 'Oracle', 'Sage', 'Omniscient', 'Galaxy Brain'],
      at: [0, 20, 65, 125, 200, 280, 380, 490, 610, 740, 880, 1030, 1190, 1360, 1540] },
    courage: { name: 'Courage', color: '#ffd36b', title: 'tt-stat-courage', wall: 'wp-stat-courage', battle: '+5% critical chance for the party',
      ranks: ['Skittish', 'Steady', 'Gutsy', 'Fearless', 'Unflinching', 'Daredevil', 'Lionhearted', 'Ironclad', 'Dauntless', 'Bulletproof', 'Unstoppable', 'Stormproof', 'Titan', 'Folk Hero', 'Fear Is Afraid of Her'],
      at: [0, 15, 45, 90, 150, 220, 300, 390, 490, 600, 720, 850, 990, 1140, 1300] },
    proficiency: { name: 'Proficiency', color: '#7dffc0', title: 'tt-stat-proficiency', wall: 'wp-stat-proficiency', battle: 'Luckier Shuffle Time: higher cards, a better shot at a Major Arcana',
      ranks: ['All Thumbs', 'Handy', 'Capable', 'Deft', 'Virtuoso', 'Jack of All Trades', 'Artisan', 'Golden Hands', 'Ace', 'Maestro', 'Wunderkind', 'Miracle Worker', 'Grandmaster', 'Living Legend', 'Can Fix Anything'],
      at: [0, 15, 45, 90, 150, 220, 300, 390, 490, 600, 720, 850, 990, 1140, 1300] },
    charm: { name: 'Charm', color: '#ff8cc0', title: 'tt-stat-charm', wall: 'wp-stat-charm', battle: '10% off battle gear and items (Police Box, Aohige, Be Blue V, Mayoido)',
      ranks: ['Wallflower', 'Noticed', 'Magnetic', 'Radiant', 'Main Character', 'It Girl', 'Trendsetter', 'Silver-Tongued', 'Heartthrob', 'Showstopper', 'Cover Star', 'Icon', 'Superstar', 'Phenomenon', 'The Whole Movie'],
      at: [0, 15, 45, 90, 150, 220, 300, 390, 490, 600, 720, 850, 990, 1140, 1300] },
    kindness: { name: 'Kindness', color: '#c9a0ff', title: 'tt-stat-kindness', wall: 'wp-stat-kindness', battle: 'The party heals 10% HP after every won fight in Tartarus',
      ranks: ['Polite', 'Thoughtful', 'Warmhearted', 'Devoted', 'Heart of Gold', 'Kindred Spirit', 'Open Arms', 'Safe Harbor', 'Lifeline', 'Guardian Angel', "Everyone's Person", 'Ray of Sunshine', 'Saint', 'Beloved', 'Heart of the World'],
      at: [0, 15, 45, 90, 150, 220, 300, 390, 490, 600, 720, 850, 990, 1140, 1300] }
  },
  // The rank each reward unlocks at (see the header). firstMax: the rank "max a stat" stamps and the radar's first scale mean.
  rewards: {
    title: 5, job: 8, choices: 10, exam: 12, battle: 15, firstMax: 5,
    jobPct: 20,
    // The stat each job's rank-8 bonus follows (a job not listed uses its first stat in jobs.js).
    jobStat: { bookworms: 'knowledge', konbini: 'courage', tutor: 'knowledge', respawn: 'proficiency', fishmarket: 'courage', yeobos: 'charm',
      flowers: 'kindness', chagall: 'charm', hagakure: 'proficiency', amulets: 'kindness' },
    // Exam score points for each stat at the exam rank (Knowledge the most); five at 12 is +34, near the top of the board.
    examPts: { knowledge: 14, other: 5 }
  },
  start: { knowledge: 0, courage: 0, proficiency: 0, charm: 0, kindness: 0 },
  alias: { academics: 'knowledge' },
  legacy: {
    academics: { to: 'knowledge', at: [0, 20, 55, 100, 155, 230] },
    charm: { to: 'charm', at: [0, 15, 30, 45, 70, 100] },
    courage: { to: 'courage', at: [0, 15, 30, 45, 70, 100] },
    // Old rank (1-6) -> new rank (1-5), so every old gate (rank 2 or 3) still passes after the move, and an old MAX is a new MAX.
    rankMap: [1, 2, 3, 3.5, 4, 5]
  },
  startYen: 3000,
  // Solar's condition. Tartarus leaves her Tired; going again while Tired makes her Sick.
  // doze: chance of nodding off in class (no class gains). gain: multiplier on social stat gains.
  conditions: {
    great: { name: 'Great', color: '#7dffc0', doze: 0, gain: 1.5, desc: 'Rested and sharp. Stat gains are better today.' },
    good: { name: 'Good', color: '#fff4f9', doze: 0, gain: 1, desc: 'Nothing to complain about.' },
    tired: { name: 'Tired', color: '#ffd36b', doze: 0.5, gain: 0.7, desc: 'Last night in Tartarus caught up with her. Rest tonight, or tomorrow will be worse.' },
    sick: { name: 'Sick', color: '#ff6b6b', doze: 0.8, gain: 0.5, noTartarus: true, desc: 'Run down. No Tartarus until she gets some rest.' }
  },
  // Who can be in the Tartarus party, and from when (battle ids from assets/femc/battle/data.js where they exist).
  // `navigator` members support from the back. `leaves` is the last day they're available.
  party: [
    { id: 'solar', name: 'Solar', joins: '4/6', leader: true },
    { id: 'yukari', name: 'Yukari', joins: '4/9' },
    { id: 'junpei', name: 'Junpei', joins: '4/18' },
    { id: 'akihiko', name: 'Akihiko', joins: '5/11' },
    { id: 'mitsuru', name: 'Mitsuru', joins: '6/12' },
    { id: 'aigis', name: 'Aigis', joins: '7/25' },
    { id: 'ken', name: 'Ken', joins: '8/7' },
    { id: 'koromaru', name: 'Koromaru', joins: '8/7' },
    { id: 'shinjiro', name: 'Shinjiro', joins: '8/7', leaves: '10/3' },
    { id: 'jihoon', name: 'Jihoon', joins: '10/17', flag: 'awake-jihoon' },
    { id: 'minji', name: 'Minji', joins: '10/31', flag: 'awake-minji' },
    { id: 'jungwon', name: 'Jungwon', joins: '11/28', flag: 'awake-jungwon' },
    { id: 'haechan', name: 'Haechan', joins: '12/5', flag: 'awake-haechan' }
  ],
  navigators: [
    { id: 'mitsuru', from: '4/9', to: '6/11' },
    { id: 'fuuka', from: '6/12' }
  ],
  partySize: 4
};
