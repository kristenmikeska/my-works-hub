/* The HOAX epilogue's world data. STAND-IN (epilogue batch 1, 2026-10-27): just enough to enter, live a day, save and load.
   The real world comes in batch 5 (FEMC-EPILOGUE-PLAN.md section 8). Same shape as data/epi/runners/world.js (see its header).
   Loaded on demand by epilogue.js after calendar.js. */
(window.FEMC_EPI_WORLDS ||= {}).hoax = Object.assign(window.FEMC_EPI_WORLDS.hoax || {}, {
  stub: true,
  title: 'Hanlim',
  money: { code: 'KRW', sign: '₩', start: 50000, locale: 'ko-KR' },
  routes: [
    { id: 'jungwon', name: 'Jungwon', from: { romance: ['jungwon'], xmas: ['jungwon'] } },
    { id: 'jihoon', name: 'Jihoon', from: { romance: ['jihoon'], xmas: ['jihoon'] } },
    { id: 'council', name: 'The council' }
  ],
  lockAfter: '12/24',
  places: {
    bg: [
      ['Hanlim · Home', 'pink-bedroom-2', null],
      ['Hanlim · School', 'flashback-hamlim-hallway', null],
      ["Hanlim · Yeobo's", 'yeobos-cafe', null],
      ['Hanlim', 'outside-daytime-neighborhood', 'outside-night']
    ],
    weatherFx: { outdoor: ['outside-daytime-neighborhood', 'outside-night'], sealed: [], none: [] },
    home: { place: 'Hanlim · Home', bg: 'pink-bedroom-2' },
    school: { place: 'Hanlim · School', bg: 'flashback-hamlim-hallway' },
    activities: [
      { id: 'epi-h-yeobos', name: "Hang out at Yeobo's", place: "Hanlim · Yeobo's", bg: 'yeobos-cafe', slots: ['after', 'evening'], cost: 6500, stats: { charm: 1 },
        text: "Two drinks, the table by the window, and the radiator doing its best against the door every time it opened." },
      { id: 'epi-h-study', name: "Study at Yeobo's", place: "Hanlim · Yeobo's", bg: 'yeobos-cafe', slots: ['after', 'evening'], cost: 4500, stats: { knowledge: 1 },
        text: "One americano, three hours, and a stack of notes for exams she'd technically already missed." }
    ]
  },
  variants: {
    morning: {
      school: ["Hanlim at eight, snow on the gate, and a building full of people with opinions about where the council had been."],
      off: ["Winter break. Her mom was already up, which meant the kitchen was already a negotiation.",
        "No school. The heating ticked, the street outside was white, and her phone had forty notifications she wasn't reading yet."],
      exam: ["Make-up exams. The classroom was half empty and twice as quiet."]
    },
    late: ["Her phone buzzed twice and stopped: the group chat, deciding whether it was still awake.",
      "Late. The apartment block's lights went out one window at a time."],
    stayIn: ["She stayed in. Blanket, heated floor, a drama she wasn't really watching."]
  },
  events: [
    { id: 'epi-h-stub-home', date: '12/21', slot: 'early', title: 'home', place: 'Hanlim · Home', time: 'Morning', scene: [
      { music: 'world-hoax' },
      { n: "Hanlim, the twenty-first of December. Winter break, officially. Her phone already had opinions about it." },
      { n: "She was home. The rest of it was still being written." }
    ] }
  ],
  links: {},
  routines: []
});
