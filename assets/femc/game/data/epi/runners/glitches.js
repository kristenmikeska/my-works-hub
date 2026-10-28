/* The Runners epilogue's glitches (FEMC-EPILOGUE-PLAN.md section 3, "Glitch schedule"). Batch 3 (2026-10-28): weeks 1-2;
   batch 4 adds week 3 (12/15-12/20) here. Loaded on demand with the world (epilogue.js). glitch.js's header documents every
   field:
     glitch     floors (the stage from each date on), thin (place text that pushes the stage one higher), constant (speakers
                who do the same once they've talked to her that day), chance (ambient roll per stage), ambient (pools by stage)
     glitches   the schedule: { id, kind, ...spec } with gates (day / days / from / to, slot, at, stage, moon, weather, place,
                route, flag, noFlag, ifYear). inline: true entries only play where a scene calls them ({ glitch: '<id>' }).
   The movements: week 1 is normal (stage 0, then 1 from Regionals; one deniable thing a day at most, only Solar); week 2 is
   wrong (stage 2 from the studio: Haechan notices once, on playback, and explains it away; the party freezes on 12/12 and he
   sees it). Week 3 is bleeding (batch 4): stage 3 from 12/15 (others see the residue: the snow going up, the stopped clocks;
   Haechan stops explaining it away; Mark sees her go thin), stage 4 from 12/19 (the party's midnight, Danielle's camera, the
   roof); Go Out's station card opens on 12/19. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).runners ||= {});
  R.glitch = {
    floors: { '12/1': 0, '12/6': 1, '12/9': 2, '12/15': 3, '12/19': 4 },
    thin: ['Language Arts Rooftop', 'Studio 4B', 'Sigma Chi House · Stairs'],
    constant: ['haechan'],
    chance: [0, 0.1, 0.18, 0.3, 0.45],
    ambient: {
      1: [{ kind: 'sound', sound: 'static' }, { kind: 'clock' }],
      2: [{ kind: 'tint' }, { kind: 'sound', sound: 'p3' }, { kind: 'face' }, { kind: 'sound', sound: 'piano' }],
      3: [{ kind: 'weather', mode: 'rise' }, { kind: 'tear' }, { kind: 'phone' }, { kind: 'name' }],
      4: [{ kind: 'tear' }, { kind: 'tint' }, { kind: 'name' }, { kind: 'map' }]
    }
  };
  R.glitches = [
    // In scenes (inline: the scene says where).
    { id: 'epi-r-g-wake', kind: 'tint', inline: true },                         // 12/1, the first morning back
    { id: 'epi-r-g-thumbs', kind: 'sound', sound: 'static', inline: true },     // 12/1, her thumbs type a Gekkoukan word
    { id: 'epi-r-g-moon', kind: 'clock', inline: true },                        // 12/4 midnight: 12:00 AM, the green moon
    { id: 'epi-r-g-junpei', kind: 'face', who: 'junpei', f: 'happy', inline: true }, // 12/6, a face in the Regionals crowd
    { id: 'epi-r-g-evoke', kind: 'hands', inline: true },                       // 12/7, the hard middle: (Evoke.)
    { id: 'epi-r-g-room', kind: 'sound', sound: 'p3', inline: true },           // 12/9, the room under her voice on playback
    { id: 'epi-r-g-freeze', kind: 'weather', mode: 'hold', inline: true },      // 12/12, the party stops for one second
    { id: 'epi-r-g-yunjin', kind: 'face', who: 'yunjin', f: 'neutral', inline: true }, // 12/12-14, the girl in the yellow puffer
    // On the day's screens (the schedule).
    { id: 'epi-r-g-sting', kind: 'sound', sound: 'p3', from: '12/1', to: '12/3', at: 'late', place: 'Alpha Phi' }, // a P3 sting in the house
    { id: 'epi-r-g-date', kind: 'date', md: '4/6', day: '12/8' },               // the Monday after: the date card flickers to Iwatodai
    { id: 'epi-r-g-name', kind: 'name', day: '12/10', at: 'morning' },
    { id: 'epi-r-g-thread', kind: 'phone', name: 'Fuuka', from: '12/11', to: '12/13', slot: 'late' }, // a dead thread: typing, no message
    { id: 'epi-r-g-station', kind: 'map', from: '12/11', to: '12/13', slot: 'evening' }, // Go Out shows Iwatodai Station for one evening
    // Week 3 (batch 4): bleeding. In scenes:
    { id: 'epi-r-g-alone', kind: 'tear', inline: true },                        // 12/14 midnight, the first pull (fight 1)
    { id: 'epi-r-g-upward', kind: 'weather', mode: 'rise', inline: true },      // 12/15, the snow goes up and the whole quad sees it
    { id: 'epi-r-g-kitchen', kind: 'tint', inline: true },                      // 12/16, she goes thin at the Sigma sink; Mark sees
    { id: 'epi-r-g-butterfly', kind: 'sound', sound: 'piano', inline: true },   // 12/17, the blue butterfly (a Velvet Room note)
    { id: 'epi-r-g-clocks', kind: 'clock', inline: true },                      // 12/18, every clock in the Alpha house at 12:00
    { id: 'epi-r-g-midnight', kind: 'tear', inline: true },                     // 12/19, the toast at midnight (fight 4)
    { id: 'epi-r-g-pull', kind: 'name', inline: true },                         // 12/20, the rooftop: Haenim's name, the pull
    // On the day's screens:
    { id: 'epi-r-g-hud', kind: 'clock', day: '12/16', at: 'late' },             // the HUD reads 12:00 AM the night of the second pull
    { id: 'epi-r-g-aki', kind: 'phone', name: 'Akihiko', from: '12/17', to: '12/18', slot: 'late' }, // a dead thread: typing, then nothing
    { id: 'epi-r-g-opens', kind: 'map', day: '12/19', slot: 'after', lines: [    // stage 4: the station card opens
      { n: "The doors opened on a platform that wasn't there. Iwatodai Station at dusk, the monorail's hum, the smell of the sea off the bay, a departure board flipping through names she could read without trying." },
      { n: "At the far end of the platform, a bench, empty, the light lying across it in long bars. Something small and soft-edged rested on the slats where the light fell. She didn't walk down to see what it was. She knew the shape of a cap." },
      { n: "Then the doors closed, and she was standing at the bus shelter on Marshall Street with her hand out, as if she'd been about to touch something, and the snow was coming down, and a boy in an SU beanie asked if she was okay." }
    ] }
  ];
})();
