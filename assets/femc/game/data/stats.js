/* Social stats, conditions and the party for femc-game.html.
   Five P5-style social stats, each with five ranks (rank 1 to 5) named in the game's own voice. `at` is the points needed
   for each rank. Anything in the game that says `needs: { knowledge: 3 }` means rank 3 ("Well-Read") or better; an `ifStat`
   line works the same way. The order here is the order on the Status screen's radar.
   Tuning: a year of class alone (listening, answering, exams) is about 110 Knowledge, Tartarus nights and full moons about
   60 Courage. In a simulated year (tests/femc_stats.py), a playthrough that spends about half its free time on links ends
   near 750 points and maxes about three stats; a link-heavy one ends near 530 and maxes one. All five take 800, like
   Persona. Knowledge's ladder is longer because class feeds it every day.
   Where the points come from (activities, books, the dorm at night, class, exams, jobs, link choices, bond perks) is listed in
   FEMC-REVAMP-ROADMAP.md section 7 ("Five social stats").
   alias: old stat ids that still work anywhere a stat id is read (data written for P3P's three: `academics` is Knowledge).
   legacy: the P3P ladders saves were made with (Academics / Charm / Courage, six ranks), for the one-time migration in
   core.js migrateStats. Never edit them; they describe old saves. */
window.FEMC_GAME_STATS = {
  stats: {
    knowledge: { name: 'Knowledge', color: '#7fb6ff', ranks: ['Clueless', 'Bookish', 'Well-Read', 'Brilliant', 'Luminary'], at: [0, 20, 65, 125, 200] },
    courage: { name: 'Courage', color: '#ffd36b', ranks: ['Skittish', 'Steady', 'Gutsy', 'Fearless', 'Unflinching'], at: [0, 15, 45, 90, 150] },
    proficiency: { name: 'Proficiency', color: '#7dffc0', ranks: ['All Thumbs', 'Handy', 'Capable', 'Deft', 'Virtuoso'], at: [0, 15, 45, 90, 150] },
    charm: { name: 'Charm', color: '#ff8cc0', ranks: ['Wallflower', 'Noticed', 'Magnetic', 'Radiant', 'Main Character'], at: [0, 15, 45, 90, 150] },
    kindness: { name: 'Kindness', color: '#c9a0ff', ranks: ['Polite', 'Thoughtful', 'Warmhearted', 'Devoted', 'Heart of Gold'], at: [0, 15, 45, 90, 150] }
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
