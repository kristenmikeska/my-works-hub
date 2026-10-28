/* The Runners epilogue's world data. STAND-IN (epilogue batch 1, 2026-10-27): just enough to enter, live a day, save and load.
   The real world (home bonds, story, glitches, Regionals…) comes in batches 3–4 (FEMC-EPILOGUE-PLAN.md section 8).
   Loaded on demand by epilogue.js after calendar.js. Shape (epilogue.js documents each field):
     title       the end card's "EPILOGUE · title" (stand-in until Kat names it)
     money       the wallet in this world: { code, sign, start, locale } (yen stays with the year)
     routes      the act's routes, first match wins for the lean (from: romance / xmas / ranks / flags in the year), the last
                 is the default; lockAfter: the night the route locks (P5R-style, quietly)
     places      bg rules (same as places.js bg), weatherFx for these backgrounds, home / school (the morning and late
                 screens), activities (Go Out: { id, name, place, bg, slots, cost, stats, text })
     variants    lines for the day screens (core.js vary(): morning.school / .off / .exam, late, stayIn)
     events      story events, the same format as data/story-*.js
     links       home bonds by id (batch 3); routines: everyday-life entries (daily-life.js format) */
(window.FEMC_EPI_WORLDS ||= {}).runners = Object.assign(window.FEMC_EPI_WORLDS.runners || {}, {
  stub: true,
  title: 'Syracuse',
  money: { code: 'USD', sign: '$', start: 200, locale: 'en-US' },
  routes: [
    { id: 'haechan', name: 'Haechan', from: { romance: ['haechan'], xmas: ['haechan'] } },
    { id: 'minji', name: 'Minji', from: { romance: ['minji'], xmas: ['minji'] } },
    { id: 'cover', name: 'The cover' }
  ],
  lockAfter: '12/7',
  places: {
    bg: [
      ['Syracuse · Alpha Phi House', 'flashback-alphaphi-house', null],
      ['Syracuse · The Quad', 'flashback-syracuse-quad', null],
      ['Syracuse · Marshall Street', 'flashback-syracuse-quad', null],
      ['Syracuse · The Library', 'flashback-syracuse-quad', null],
      ['Syracuse', 'flashback-syracuse-quad', null]
    ],
    weatherFx: { outdoor: ['flashback-syracuse-quad'], sealed: [], none: [] },
    home: { place: 'Syracuse · Alpha Phi House', bg: 'flashback-alphaphi-house' },
    school: { place: 'Syracuse · The Quad', bg: 'flashback-syracuse-quad' },
    activities: [
      { id: 'epi-r-coffee', name: 'Coffee on Marshall Street', place: 'Syracuse · Marshall Street', bg: 'flashback-syracuse-quad', slots: ['after', 'evening'], cost: 7, stats: { charm: 1 },
        text: "A corner table, a coffee she let go cold, and a whole street of people who had no idea where she'd been." },
      { id: 'epi-r-library', name: 'Study at the library', place: 'Syracuse · The Library', bg: 'flashback-syracuse-quad', slots: ['after', 'evening'], cost: 0, stats: { knowledge: 1 },
        text: "Three hours in a carrel with a syllabus that had kept going without her. She caught up on most of it." }
    ]
  },
  variants: {
    morning: {
      school: ["Class at nine. The quad was salted into gray paths, and everyone she passed looked like they'd slept four hours, which was December's whole look.",
        "Morning. Snow on the steps, a line out the door of the coffee cart, and a lecture hall that smelled like wet coats."],
      off: ["No class. The house slept late, the radiators knocking like they had somewhere to be.",
        "A weekend morning. Somebody downstairs was making pancakes, badly, and narrating it."],
      exam: ["Finals. The whole campus walked like it was carrying something heavy and trying not to show it."]
    },
    late: ["The house went quiet in pieces: a door, a shower, music through the wall, then nothing.",
      "Late. Snow ticking at the window, her phone face down on the desk, the house asleep around her."],
    stayIn: ["She stayed in. Blanket, desk lamp, the radiator, and nobody asking her anything."]
  },
  events: [
    { id: 'epi-r-stub-home', date: '12/1', slot: 'early', title: 'home', place: 'Syracuse · Alpha Phi House', time: 'Morning', scene: [
      { music: 'world-runners' },
      { n: "Snow on the sill. Syracuse, the first of December, and the house already loud under her floor." },
      { n: "She was home. The rest of it was still being written." },
      { choose: [{ t: '(Get up.)' }, { t: '(Five more minutes.)' }] }
    ] }
  ],
  links: {},
  routines: []
});
