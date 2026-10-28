/* The HOAX epilogue's glitches (FEMC-EPILOGUE-PLAN.md section 4, "Glitch schedule"). Batch 5 (2026-10-28). Loaded on demand
   with the world (epilogue.js). glitch.js's header documents every field; the shape is data/epi/runners/glitches.js's.
   The movements, comedy → unsettling → real:
     week 1 (12/21-12/27)  funny-eerie, stage 0, then 1 from the full-moon week: the haunted vending machine that only ever drops
                           one can (the one she carries and never opens), an autocorrect to a Japanese word, the séance at the full
                           moon (the Hate Club decide Kazuha did it). Only Solar thinks any of it isn't funny.
     week 2 (12/28-1/3)    unsettling, stage 2: two seconds of a P3 track under the party's music; the green frame in Eunchae's
                           New Year's Eve livestream (the comments notice) and the cut to Yunjin; the sticky notes in her own
                           handwriting that she didn't write (Jungwon sees one, and knows); a dead thread; fight 1.
     week 3 (1/4-1/12)     real, stage 3 from 1/4 (others see the residue: every clock at Yeobo's at 12:00, the snow going up past
                           the exam-room window; Jungwon sees her flicker, then Jihoon, who pretends he didn't), stage 4 from the
                           hearing (1/11: the whole school sees), the gym at midnight.
   Her constant here is Jungwon. Thin places: the gym, the council room, Yeobo's after closing. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).hoax ||= {});
  R.glitch = {
    floors: { '12/21': 0, '12/26': 1, '12/28': 2, '1/4': 3, '1/11': 4 },
    thin: ['Gym', 'Council Room', 'After Closing'],
    constant: ['jungwon'],
    chance: [0, 0.1, 0.18, 0.3, 0.45],
    ambient: {
      1: [{ kind: 'sound', sound: 'static' }, { kind: 'clock' }],
      2: [{ kind: 'tint' }, { kind: 'sound', sound: 'p3' }, { kind: 'sound', sound: 'piano' }, { kind: 'face' }],
      3: [{ kind: 'weather', mode: 'rise' }, { kind: 'tear' }, { kind: 'phone' }, { kind: 'name' }],
      4: [{ kind: 'tear' }, { kind: 'tint' }, { kind: 'name' }, { kind: 'map' }]
    }
  };
  R.glitches = [
    // In scenes (inline: the scene says where). Week 1, comedy:
    { id: 'epi-h-g-wake', kind: 'clock', inline: true },                         // 12/21, the first morning: her alarm clock at 12:00
    { id: 'epi-h-g-autocorrect', kind: 'sound', sound: 'static', inline: true }, // 12/21-23, her phone autocorrects to a Japanese word
    { id: 'epi-h-g-vending', kind: 'sound', sound: 'piano', inline: true },      // 12/23, the haunted vending machine drops the same can
    { id: 'epi-h-g-planchette', kind: 'tint', inline: true },                    // 12/27 (full moon), the séance spells its word
    // Week 2, unsettling:
    { id: 'epi-h-g-party', kind: 'sound', sound: 'p3', inline: true },           // 12/29, the party's music drops to P3 for two seconds
    { id: 'epi-h-g-frame', kind: 'tint', inline: true },                         // 12/31, the green frame in the livestream
    { id: 'epi-h-g-yunjin', kind: 'face', who: 'yunjin', f: 'neutral', inline: true }, // 12/31, the stream cuts to Yunjin for a second
    { id: 'epi-h-g-notes', kind: 'name', inline: true },                         // 12/31 late, the sticky notes in her handwriting
    { id: 'epi-h-g-alone', kind: 'tear', inline: true },                         // 1/2 midnight, fight 1 (the council room)
    // Week 3, real:
    { id: 'epi-h-g-flicker', kind: 'tint', inline: true },                       // 1/4, Jungwon sees her flicker
    { id: 'epi-h-g-clocks', kind: 'clock', inline: true },                       // 1/5, every clock at Yeobo's stops at 12:00
    { id: 'epi-h-g-unseen', kind: 'tint', inline: true },                        // 1/5 midnight, fight 2 (Yeobo's after closing)
    { id: 'epi-h-g-jihoon', kind: 'sound', sound: 'piano', inline: true },       // 1/6-7, Jihoon sees it and pretends he didn't
    { id: 'epi-h-g-upward', kind: 'weather', mode: 'rise', inline: true },       // 1/8, snow falls upward past the exam-room window
    { id: 'epi-h-g-unheard', kind: 'weather', mode: 'hold', inline: true },      // 1/9 midnight, fight 3 (the school): the snow hangs
    { id: 'epi-h-g-evoke', kind: 'hands', inline: true },                        // 1/11, the hearing: (Evoke.)
    { id: 'epi-h-g-hearing', kind: 'tear', inline: true },                       // 1/11, she flickers in front of the whole school
    { id: 'epi-h-g-gym', kind: 'tear', inline: true },                           // 1/12 midnight, fight 4 (one second of contact)
    { id: 'epi-h-g-pull', kind: 'name', inline: true },                          // 1/12, the gym: Haenim's name, the pull
    // On the day's screens (the schedule).
    { id: 'epi-h-g-sting', kind: 'sound', sound: 'piano', from: '12/21', to: '12/23', at: 'late', place: 'Home' }, // a Velvet Room note at home
    { id: 'epi-h-g-date', kind: 'date', md: '4/6', day: '12/28' },               // the date card flickers to Iwatodai
    { id: 'epi-h-g-name', kind: 'name', day: '12/30', at: 'morning' },
    { id: 'epi-h-g-thread', kind: 'phone', name: 'Mitsuru', from: '1/1', to: '1/3', slot: 'late' }, // a dead thread: typing, no message
    { id: 'epi-h-g-station', kind: 'map', from: '1/4', to: '1/6', slot: 'evening' }, // Go Out shows Iwatodai Station, greyed
    { id: 'epi-h-g-hud', kind: 'clock', day: '1/5', at: 'late' },                // the HUD at 12:00 AM the night of the second pull
    { id: 'epi-h-g-aki', kind: 'phone', name: 'Akihiko', from: '1/9', to: '1/10', slot: 'late' }, // typing, then nothing
    { id: 'epi-h-g-opens', kind: 'map', day: '1/11', slot: 'evening', lines: [   // stage 4: the station card opens
      { n: "The doors opened on a platform that wasn't there. Iwatodai Station at dusk, the monorail humming overhead, the smell of the bay, and a departure board flipping through names she could read without trying." },
      { n: "Somewhere past the ticket gates a dog barked once, the way a dog barks at the door when it knows whose footsteps those are. On the bench by the stairs someone had left a red scarf folded very neatly, the way a boy who boxed in the mornings folded things, and she didn't go and look at it, because she already knew it would still be warm." },
      { n: "Then the doors closed, and she was standing outside the convenience store on Winter Street with her hand out toward the third vending machine from the left, and it was snowing, and the machine was humming like it was very pleased with itself." }
    ] }
  ];
})();
