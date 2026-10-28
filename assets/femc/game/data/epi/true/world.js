/* The true ending's coda (FEMC-EPILOGUE-PLAN.md 2.5 and section 6; epilogue batch 8, 2026-10-28). On the true route she went
   home to all three worlds at once, so the coda visits all three: a small day in each, about three weeks after the return,
   each ending on that world's holding-on moment (the one route where all three literally happen). S.E.E.S. forgot the year
   (the ending); Solar and the searchers kept it. No half-present fights: there's no one on the other side to fight beside.
   Between the worlds, one line of Iwatodai: Akihiko slowing at a bench on his run, not knowing why.
   Files (all merge into FEMC_EPI_WORLDS.true): calendar.js (three days, each wearing its world's date), world.js (this file),
   glitches.js, story.js (the six scenes). Shape: data/epi/runners/world.js's header. Places borrow the three worlds' own
   stand-in backgrounds (the same rules as their epilogues). */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).true ||= {});
  Object.assign(R, {
    title: 'Every world',
    money: { code: 'JPY', sign: '¥', start: 0, locale: 'ja-JP' },
    routes: [{ id: 'coda', name: 'Every world', open: { always: true } }],
    places: {
      bg: [
        ['Syracuse · Alpha Phi House · Her Room', 'pink-bedroom', null],
        ['Syracuse · Alpha Phi House', 'flashback-alphaphi-house', null],
        ['Syracuse · Language Arts Rooftop', 'rooftop-citynight', null],
        ['Syracuse · The Quad', 'flashback-syracuse-quad', null],
        ['Syracuse', 'flashback-syracuse-quad', null],
        ['Incheon · The Lee House · Garden', 'flashback-lee-house', null],
        ['Incheon · The Lee House', 'flashback-lee-house', null],
        ['Incheon · Harbor', 'flashback-incheon-harbor', null],
        ['Incheon', 'flashback-incheon-harbor', null],
        ['Hanlim · School · Gym at Midnight', 'flashback-hamlim-gym', null],
        ['Hanlim · School · Gym', 'flashback-hamlim-gym', null],
        ['Hanlim · School · Council Room', 'gekkoukan-student-council', null],
        ['Hanlim · School', 'flashback-hamlim-hallway', null],
        ['Hanlim', 'outside-daytime-neighborhood', 'outside-night'],
        ['Iwatodai Station · Bench', 'station-platform-day', null],
        ['Iwatodai', 'iwatodai-station', null]
      ],
      weatherFx: { outdoor: ['flashback-syracuse-quad', 'rooftop-citynight', 'flashback-incheon-harbor', 'station-platform-day', 'outside-daytime-neighborhood', 'outside-night'], sealed: [], none: [] },
      home: { place: 'Syracuse · Alpha Phi House · Her Room', bg: 'pink-bedroom' },
      activities: [],
      /* ♪ MUSIC PLACEHOLDERS (Kat picks the real songs). The three holding-on scenes play the world songs (world-runners,
         world-strangers, world-hoax); these four moods are stand-in P3 tracks until then. */
      music: {
        'epi-tr-snow': 'tender-feeling',      // ♪ PLACEHOLDER: Syracuse, the first snow, the girls
        'epi-tr-kitchen': 'deep-breath-reload', // ♪ PLACEHOLDER: Incheon, the full kitchen, the house's evening
        'epi-tr-hanlim': 'my-homie',          // ♪ PLACEHOLDER: Hanlim, a Friday, the council and the crew
        'epi-tr-bench': 'tranquility'         // ♪ PLACEHOLDER: Iwatodai, the bench on Akihiko's run (between the worlds)
      }
    },
    cast: { mrsbang: 'Mrs. Bang', mroh: 'Mr. Oh', sunoo: 'Sunoo', heeseung: 'Heeseung' },
    variants: { morning: { off: ['Morning.'], school: ['Morning.'] }, late: ['Night.'], stayIn: ['She stayed in.'] }
  });
  R.events ||= []; R.routines ||= []; R.bonds ||= {}; R.links ||= {};
})();
