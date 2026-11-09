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
    // The held layer (the Manhattan pass, Nov 5 2026): after the roof the world starts losing track of her. From 12/21 the
    // ambient pool is quieter and removes things instead of adding them (glitch.js erase / late).
    // ramp (Nov 9, Kat: creepier the closer it gets): from each date on, the ambient chance per screen in the held stretch.
    held: { from: '12/21', ramp: { '12/21': 0.35, '12/25': 0.5, '12/28': 0.65, '12/30': 0.8 }, ambient: [{ kind: 'erase' }, { kind: 'late' }, { kind: 'sound', sound: 'static' }, { kind: 'erase' }, { kind: 'tint' }] },
    ambient: {
      1: [{ kind: 'sound', sound: 'static' }, { kind: 'clock' }],
      2: [{ kind: 'tint' }, { kind: 'sound', sound: 'p3' }, { kind: 'face' }, { kind: 'sound', sound: 'piano' }],
      3: [{ kind: 'weather', mode: 'rise' }, { kind: 'tear' }, { kind: 'phone' }, { kind: 'name' }],
      4: [{ kind: 'tear' }, { kind: 'tint' }, { kind: 'name' }, { kind: 'map' }]
    }
  };
  R.glitches = [
    // The held stretch (the Manhattan pass, Nov 5 2026; FEMC-RUNNERS-MANHATTAN-PLAN section 6). Inline: the scenes say where.
    { id: 'epi-r-g-footprints', kind: 'erase', inline: true },                 // 12/20, the roof: the can and her footprints gone
    { id: 'epi-r-g-leftchat', kind: 'phone', name: 'Alpha Phi House', msg: 'Solar left the chat', read: false, time: '3:12 AM', inline: true }, // 12/21
    { id: 'epi-r-g-sign', kind: 'tint', inline: true },                         // 12/21, the highway sign to nowhere
    { id: 'epi-r-g-frame', kind: 'erase', inline: true },                       // 12/22, the frame nobody sent
    { id: 'epi-r-g-reflection', kind: 'late', inline: true },                   // 12/23, her reflection half a second late
    { id: 'epi-r-g-log', kind: 'name', inline: true },                          // 12/24, the second name in the guest log
    { id: 'epi-r-g-photos', kind: 'erase', inline: true },                      // 12/26-28, the gap in the family photos
    { id: 'epi-r-g-floor', kind: 'clock', inline: true },                       // 12/26-28, a floor the elevator shouldn't have
    { id: 'epi-r-g-train', kind: 'sound', sound: 'p3', inline: true },          // 12/26-28, a train under the building at 2 a.m.
    { id: 'epi-r-g-green-train', kind: 'tint', inline: true },                  // 12/29-30, the subway's green train
    { id: 'epi-r-g-marco', kind: 'erase', inline: true },                       // 12/29-30, Marco doesn't know her
    { id: 'epi-r-g-tenth', kind: 'name', inline: true },                        // 12/31, one more name on Marco's list
    { id: 'epi-r-g-album', kind: 'face', inline: true },                        // 12/31, a photo nobody took
    { id: 'epi-r-g-1159', kind: 'clock', inline: true },                        // 12/31, every clock stops at 11:59
    { id: 'epi-r-g-held-out', kind: 'erase', from: '12/22', to: '12/30', at: 'out' },  // Go Out: the place forgets its name
    // The countdown (Nov 9, Kat: "more creepiness and glitches ... as it gets closer and closer to the date"). Screens:
    // one or two a day from Christmas, two or three from the 28th. The date card starts flickering to 1/31 on the 24th.
    { id: 'epi-r-g-m-mom', kind: 'phone', name: 'Mom', msg: 'Who is this?', read: false, time: '12:00 AM', day: '12/23', at: 'late' },
    { id: 'epi-r-g-m-date1', kind: 'date', md: '1/31', day: '12/24' },
    { id: 'epi-r-g-m-clock1', kind: 'clock', day: '12/25', at: 'morning' },
    { id: 'epi-r-g-m-sees', kind: 'phone', name: 'S.E.E.S.', msg: 'Has anyone heard from her?', time: '12:00 AM', day: '12/26', at: 'late' },
    { id: 'epi-r-g-m-name', kind: 'name', day: '12/27', at: 'morning' },
    { id: 'epi-r-g-m-piano', kind: 'sound', sound: 'piano', day: '12/27', at: 'late' },
    { id: 'epi-r-g-m-date2', kind: 'date', md: '1/31', day: '12/28' },
    { id: 'epi-r-g-m-tear1', kind: 'tear', day: '12/28', at: 'late' },
    { id: 'epi-r-g-m-tint', kind: 'tint', day: '12/29', at: 'morning' },
    { id: 'epi-r-g-m-chat', kind: 'phone', name: 'Alpha Phi House', msg: 'Who added this number?', time: '12:00 AM', day: '12/29', at: 'late' },
    { id: 'epi-r-g-m-date3', kind: 'date', md: '1/31', day: '12/30' },
    { id: 'epi-r-g-m-ghost', kind: 'face', who: 'aigis', f: 'neutral', day: '12/30', at: 'morning' },
    { id: 'epi-r-g-m-clock2', kind: 'clock', day: '12/30', at: 'late' },
    { id: 'epi-r-g-m-date4', kind: 'date', md: '1/31', day: '12/31' },
    { id: 'epi-r-g-m-self', kind: 'phone', name: 'Solar Lee', msg: 'count to eleven', read: false, time: '12:00 AM', day: '12/31', at: 'morning' },
    // ...and inside the Manhattan hangouts (inserted before line n; once each).
    { id: 'epi-r-g-m-gym', kind: 'late', scene: 'epi-r-nyc-jaehyun-gym', line: 11 },          // the mirror wall, two Lees
    { id: 'epi-r-g-m-honest', kind: 'tint', scene: 'epi-r-nyc-mom-honest', line: 10 },       // the radiator knocks twice
    { id: 'epi-r-g-m-coffee', kind: 'face', who: 'yukari', f: 'sad', scene: 'epi-r-nyc-haechan-coffee', line: 7 }, // the window table
    { id: 'epi-r-g-m-tape', kind: 'erase', scene: 'epi-r-nyc-jaehyun-tape', line: 12 },      // the black laptop screen
    { id: 'epi-r-g-m-exposure', kind: 'clock', scene: 'epi-r-nyc-minji-call', line: 13 },    // four past midnight
    { id: 'epi-r-g-m-mira', kind: 'tint', scene: 'epi-r-nyc-mom-mira', line: 7 },            // the park a black field
    { id: 'epi-r-g-m-outfits', kind: 'weather', mode: 'hold', scene: 'epi-r-nyc-hyein-outfits', line: 8 }, // the snow stops in the air
    { id: 'epi-r-g-m-bridge', kind: 'sound', sound: 'static', scene: 'epi-r-nyc-haechan-session', line: 16 }, // before the bridge
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
