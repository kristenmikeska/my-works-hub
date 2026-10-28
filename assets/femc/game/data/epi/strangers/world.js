/* The strangers epilogue's world data. STAND-IN (epilogue batch 1, 2026-10-27): just enough to enter, live a day, save and load.
   The real world is built after the manuscript passes the private pickup point (batch 7; FEMC-EPILOGUE-PLAN.md section 5).
   Nothing here is canon-dependent: no story beyond one quiet morning. Same shape as data/epi/runners/world.js (see its header).
   Loaded on demand by epilogue.js after calendar.js. */
(window.FEMC_EPI_WORLDS ||= {}).strangers = Object.assign(window.FEMC_EPI_WORLDS.strangers || {}, {
  stub: true,
  title: 'Incheon',
  money: { code: 'KRW', sign: '₩', start: 100000, locale: 'ko-KR' },
  routes: [
    { id: 'haechan', name: 'Haechan', from: { romance: ['haechan'], xmas: ['haechan'], flags: ['hc-lean-S'] } },
    { id: 'jungwon', name: 'Jungwon', from: { romance: ['jungwon'], xmas: ['jungwon'] } },
    { id: 'family', name: 'Family' }
  ],
  lockAfter: '2/23',
  places: {
    bg: [
      ['Incheon · The Lee House', 'flashback-lee-house', null],
      ['Incheon · Fish Market', 'flashback-fish-market', null],
      ['Incheon · Harbor', 'flashback-incheon-harbor', null],
      ['Incheon', 'flashback-incheon-harbor', null]
    ],
    weatherFx: { outdoor: ['flashback-incheon-harbor', 'flashback-fish-market'], sealed: [], none: [] },
    home: { place: 'Incheon · The Lee House', bg: 'flashback-lee-house' },
    activities: [
      { id: 'epi-s-market', name: 'The fish market', place: 'Incheon · Fish Market', bg: 'flashback-fish-market', slots: ['after'], cost: 8000, stats: { kindness: 1 },
        text: "Ice, shouting, and a woman behind a stall who put an extra handful in the bag without being asked." },
      { id: 'epi-s-harbor', name: 'Walk the harbor', place: 'Incheon · Harbor', bg: 'flashback-incheon-harbor', slots: ['after', 'evening'], cost: 0, stats: { courage: 1 },
        text: "Wind off the water, gulls, and the cranes standing over everything like they'd been told to wait." }
    ]
  },
  variants: {
    morning: {
      school: ["Before light, the house was already moving: the kitchen first, then the stairs."],
      off: ["Before light, the house was already moving: the kitchen first, then the stairs.",
        "Morning. Cold coming off the windows, and somewhere below her, a kettle."]
    },
    late: ["The house went quiet the way it always did, all at once, as if somebody had told it to."],
    stayIn: ["She stayed in. The heated floor, a book she didn't read, the window going dark."]
  },
  events: [
    { id: 'epi-s-stub-home', date: '2/17', slot: 'early', title: 'home', place: 'Incheon · The Lee House', time: 'Morning', scene: [
      { music: 'world-strangers' },
      { n: "Before light. The house was quiet in the way it only was in winter, and her room was exactly where she'd left it." },
      { n: "She was home. The rest of it was still being written." }
    ] }
  ],
  links: {},
  routines: []
});
