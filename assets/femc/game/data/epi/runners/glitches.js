/* The Runners epilogue's glitches. STAND-IN DEMO (epilogue batch 2, 2026-10-27): a few of each kind on the stand-in days, so
   the engine can be seen; batches 3-4 replace the schedule with the real one (FEMC-EPILOGUE-PLAN.md section 3, "Glitch
   schedule"). Loaded on demand with the world (epilogue.js). glitch.js's header documents every field:
     glitch     floors (the stage from each date on), thin (place text that pushes the stage one higher), constant (speakers
                who do the same once they've talked to her that day), chance (ambient roll per stage), ambient (pools by stage)
     glitches   the schedule: { id, kind, ...spec } with gates (day / days / from / to, slot, at, stage, moon, weather, place,
                route, flag, noFlag, ifYear), or scene + line to insert it into a scene */
(window.FEMC_EPI_WORLDS ||= {}).runners = Object.assign(window.FEMC_EPI_WORLDS.runners || {}, {
  glitch: {
    floors: { '12/1': 0, '12/8': 2, '12/15': 3, '12/19': 4 },
    thin: ['Rooftop', 'Studio 4B', 'Sigma House'],
    constant: ['haechan'],
    chance: [0, 0.12, 0.2, 0.3, 0.45],
    ambient: {
      1: [{ kind: 'sound', sound: 'static' }, { kind: 'clock' }],
      2: [{ kind: 'tint' }, { kind: 'sound', sound: 'p3' }, { kind: 'face' }],
      3: [{ kind: 'weather', mode: 'rise' }, { kind: 'tear' }, { kind: 'phone' }, { kind: 'name' }],
      4: [{ kind: 'tear' }, { kind: 'tint' }, { kind: 'name' }, { kind: 'map' }]
    }
  },
  glitches: [
    { id: 'epi-r-g-wake', kind: 'tint', scene: 'epi-r-stub-home', line: 2 },
    { id: 'epi-r-g-hands', kind: 'hands', scene: 'epi-r-stub-home', line: 3 },
    { id: 'epi-r-g-sting', kind: 'sound', sound: 'p3', day: '12/1', slot: 'late' },
    { id: 'epi-r-g-thread', kind: 'phone', day: '12/2', slot: 'late' },
    { id: 'epi-r-g-moon', kind: 'clock', moon: true, slot: 'late' },
    { id: 'epi-r-g-date', kind: 'date', md: '4/6', day: '12/5' },
    { id: 'epi-r-g-hang', kind: 'weather', mode: 'hold', day: '12/8', at: 'out' },
    { id: 'epi-r-g-name', kind: 'name', day: '12/9', at: 'morning' },
    { id: 'epi-r-g-station', kind: 'map', days: ['12/11', '12/12', '12/13'] },
    { id: 'epi-r-g-tear', kind: 'tear', day: '12/12', slot: 'late' },
    { id: 'epi-r-g-rise', kind: 'weather', mode: 'rise', day: '12/15', at: 'morning' },
    { id: 'epi-r-g-face', kind: 'face', day: '12/16', at: 'out' },
    { id: 'epi-r-g-open', kind: 'map', stage: 4, from: '12/19', open: true }
  ]
});
