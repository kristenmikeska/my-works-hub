/* Social stats, conditions and the party for femc-game.html.
   Social stats use P3P's three, with P3P's rank names. `at` is the points needed for each rank (rank 1 to 6).
   Anything in the game that says `needs: { academics: 3 }` means rank 3 ("Above Average") or better. */
window.FEMC_GAME_STATS = {
  stats: {
    academics: { name: 'Academics', color: '#7fb6ff', ranks: ['Slacker', 'Average', 'Above Average', 'Smart', 'Intelligent', 'Genius'], at: [0, 20, 55, 100, 155, 230] },
    charm: { name: 'Charm', color: '#ff8cc0', ranks: ['Plain', 'Unpolished', 'Confident', 'Smooth', 'Popular', 'Charismatic'], at: [0, 15, 30, 45, 70, 100] },
    courage: { name: 'Courage', color: '#ffd36b', ranks: ['Timid', 'Ordinary', 'Determined', 'Tough', 'Brave', 'Badass'], at: [0, 15, 30, 45, 70, 100] }
  },
  start: { academics: 0, charm: 0, courage: 0 },
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
