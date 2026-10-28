/* The HOAX epilogue's glitches. STAND-IN DEMO (epilogue batch 2, 2026-10-27): a few on the stand-in days, so the engine can be
   seen; batch 5 replaces them with the real schedule (FEMC-EPILOGUE-PLAN.md section 4). Same shape as
   data/epi/runners/glitches.js; glitch.js's header documents every field. */
(window.FEMC_EPI_WORLDS ||= {}).hoax = Object.assign(window.FEMC_EPI_WORLDS.hoax || {}, {
  glitch: {
    floors: { '12/21': 0, '12/28': 2, '1/4': 3, '1/11': 4 },
    thin: ['Gym', 'Council Room', "Yeobo's"],
    constant: ['jungwon'],
    chance: [0, 0.12, 0.2, 0.3, 0.45],
    ambient: {
      1: [{ kind: 'sound', sound: 'static' }, { kind: 'clock' }],
      2: [{ kind: 'sound', sound: 'p3' }, { kind: 'tint' }, { kind: 'phone' }],
      3: [{ kind: 'weather', mode: 'rise' }, { kind: 'face' }, { kind: 'tear' }],
      4: [{ kind: 'tear' }, { kind: 'name' }, { kind: 'tint' }]
    }
  },
  glitches: [
    { id: 'epi-h-g-clock', kind: 'clock', scene: 'epi-h-stub-home', line: 2 },
    { id: 'epi-h-g-thread', kind: 'phone', day: '12/22', slot: 'late' },
    { id: 'epi-h-g-moon', kind: 'tint', moon: true, slot: 'late' },
    { id: 'epi-h-g-station', kind: 'map', from: '12/28', to: '12/30' },
    { id: 'epi-h-g-date', kind: 'date', md: '12/24', day: '12/31' },
    { id: 'epi-h-g-rise', kind: 'weather', mode: 'rise', from: '1/4', at: 'morning' }
  ]
});
