/* The strangers epilogue's glitches. STAND-IN DEMO (epilogue batch 2, 2026-10-27): a few on the stand-in days, so the engine
   can be seen; fence-free (no canon). The real schedule comes with the world, after the private pickup point (batch 7).
   Same shape as data/epi/runners/glitches.js; glitch.js's header documents every field. */
(window.FEMC_EPI_WORLDS ||= {}).strangers = Object.assign(window.FEMC_EPI_WORLDS.strangers || {}, {
  glitch: {
    floors: { '2/17': 0, '2/24': 2, '3/3': 3, '3/15': 4 },
    thin: ['Harbor', 'Annex', 'Wolmido'],
    constant: ['haechan', 'jungwon'],
    chance: [0, 0.12, 0.2, 0.3, 0.45],
    ambient: {
      1: [{ kind: 'sound', sound: 'piano' }, { kind: 'clock' }],
      2: [{ kind: 'tint' }, { kind: 'sound', sound: 'static' }, { kind: 'face' }],
      3: [{ kind: 'weather', mode: 'hold' }, { kind: 'phone' }, { kind: 'tear' }],
      4: [{ kind: 'tear' }, { kind: 'name' }, { kind: 'weather', mode: 'hold' }]
    }
  },
  glitches: [
    { id: 'epi-s-g-bell', kind: 'sound', sound: 'piano', scene: 'epi-s-stub-home', line: 2 },
    { id: 'epi-s-g-tide', kind: 'weather', mode: 'hold', day: '2/18', at: 'out' },
    { id: 'epi-s-g-moon', kind: 'tint', moon: true, slot: 'late' },
    { id: 'epi-s-g-clock', kind: 'clock', day: '2/25', at: 'morning' },
    { id: 'epi-s-g-face', kind: 'face', from: '3/3', at: 'out' }
  ]
});
