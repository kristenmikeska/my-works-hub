/* The strangers epilogue's glitches (FEMC-EPILOGUE-PLAN.md 2.3 and section 5). Batch 7 (2026-10-28). Loaded on demand with
   the world (epilogue.js). glitch.js's header documents every field; the shape is data/epi/runners/glitches.js's.
   The most dangerous of the three worlds, so the glitches carry real consequences, and they escalate:
     week 1 (2/17-2/23)  stage 0, then 1 from 2/20: the annex radio catches two seconds of a school bell; barley tea gone cold in
                         her hands at midnight; a song from the dark kitchen; the tide an hour wrong, once, for the girl who has
                         never been wrong about a tide.
     week 2 (2/24-3/2)   stage 2: Daeboreum's moon goes green for a breath and both boys see it; the hammer that falls and the
                         round that doesn't go off; fight 1 at the harbor.
     week 3 (3/3-3/9)    stage 3 (others see what's left behind): faces in the yellow dust, her reflection in an armband, two
                         seconds of a P3 song in a karaoke room, the tide standing still in front of the fishermen, a call that
                         gets through, every clock in the Lee house at 12:00, the old radio singing a warning; fights 2 and 3.
     week 4 (3/10-3/16)  stage 4 from 3/12 (she flickers at dinner in front of the house on 3/11, which sets it early): fight 4
                         on the mudflats, then the bottom of the tide.
   Her constant here is both boys. Thin places: the annex, the harbor, the mudflats. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).strangers ||= {});
  R.glitch = {
    floors: { '2/17': 0, '2/20': 1, '2/24': 2, '3/3': 3, '3/12': 4 },
    thin: ['Annex', 'Harbor', 'Mudflats'],
    constant: ['haechan', 'jungwon'],
    chance: [0, 0.1, 0.18, 0.3, 0.45],
    ambient: {
      1: [{ kind: 'sound', sound: 'static' }, { kind: 'clock' }],
      2: [{ kind: 'tint' }, { kind: 'sound', sound: 'piano' }, { kind: 'face' }, { kind: 'sound', sound: 'p3' }],
      3: [{ kind: 'weather', mode: 'hold' }, { kind: 'tear' }, { kind: 'phone' }, { kind: 'name' }],
      4: [{ kind: 'tear' }, { kind: 'tint' }, { kind: 'name' }, { kind: 'weather', mode: 'hold' }]
    }
  };
  R.glitches = [
    // In scenes (inline: the scene says where). Week 1:
    { id: 'epi-s-g-bell', kind: 'sound', sound: 'static', inline: true },     // 2/17 late, the step: the annex radio catches a school bell
    { id: 'epi-s-g-tea', kind: 'clock', inline: true },                       // 2/19 late, the seventh stair: the tea goes cold at 00:00
    { id: 'epi-s-g-hum', kind: 'sound', sound: 'piano', inline: true },       // 2/20 late: a song from the dark kitchen, nobody there
    { id: 'epi-s-g-tables', kind: 'clock', inline: true },                    // 2/21, the quay: her tide is an hour wrong
    // Week 2:
    { id: 'epi-s-g-moon', kind: 'tint', inline: true },                       // 2/24 (full moon), Wolmido: the moon goes green
    { id: 'epi-s-g-gun', kind: 'tear', inline: true },                        // 2/27, the market: the hammer falls; nothing fires
    { id: 'epi-s-g-alone', kind: 'tear', inline: true },                      // 2/28 midnight, fight 1 (the harbor)
    // Week 3:
    { id: 'epi-s-g-mask', kind: 'face', inline: true },                       // 3/4, the dust: a masked girl at a crossing
    { id: 'epi-s-g-reflection', kind: 'name', inline: true },                 // 3/4, the dust: her reflection wears the armband
    { id: 'epi-s-g-karaoke', kind: 'sound', sound: 'p3', inline: true },      // 3/5, karaoke: the machine plays a song it doesn't have
    { id: 'epi-s-g-unseen', kind: 'tint', inline: true },                     // 3/5 midnight, fight 2 (the fish market)
    { id: 'epi-s-g-tide', kind: 'weather', mode: 'hold', inline: true },      // 3/6, the mudflats: the tide stands still
    { id: 'epi-s-g-call', kind: 'sound', sound: 'static', inline: true },     // 3/7 late: the call that gets through
    { id: 'epi-s-g-clocks', kind: 'clock', inline: true },                    // 3/8 morning: every clock in the house at 12:00
    { id: 'epi-s-g-molihua', kind: 'sound', sound: 'piano', inline: true },   // 3/8 late: the old radio sings a warning
    { id: 'epi-s-g-unheard', kind: 'weather', mode: 'hold', inline: true },   // 3/9 midnight, fight 3 (the Lee house)
    // Week 4:
    { id: 'epi-s-g-dinner', kind: 'tear', inline: true },                     // 3/11, dinner: she flickers in front of the house
    { id: 'epi-s-g-contact', kind: 'tear', inline: true },                    // 3/14 midnight, fight 4 (the mudflats)
    { id: 'epi-s-g-evoke', kind: 'hands', inline: true },                     // 3/16, the final: (Evoke.)
    { id: 'epi-s-g-pull', kind: 'name', inline: true },                       // 3/16, the final: Haenim's name, the pull
    { id: 'epi-s-g-stop', kind: 'weather', mode: 'hold', inline: true },      // 3/16, the final: the tide stops and doesn't start
    // On the day's screens (the schedule).
    { id: 'epi-s-g-sting', kind: 'sound', sound: 'piano', from: '2/17', to: '2/19', at: 'late', place: 'Lee House' }, // a Velvet Room note at home
    { id: 'epi-s-g-date', kind: 'date', md: '4/6', day: '2/25' },             // the date card flickers to Iwatodai
    { id: 'epi-s-g-name', kind: 'name', day: '2/26', at: 'morning' },
    { id: 'epi-s-g-thread', kind: 'phone', name: 'Junpei', from: '3/1', to: '3/3', slot: 'late' }, // a dead thread: typing, no message
    { id: 'epi-s-g-station', kind: 'map', from: '3/3', to: '3/5', slot: 'evening' }, // Go Out shows Iwatodai Station, greyed
    { id: 'epi-s-g-hud', kind: 'clock', day: '3/5', at: 'late' },             // the HUD at 12:00 AM the night of the second pull
    { id: 'epi-s-g-aki', kind: 'phone', name: 'Akihiko', from: '3/10', to: '3/11', slot: 'late' }, // typing, then nothing
    { id: 'epi-s-g-opens', kind: 'map', day: '3/13', slot: 'after', lines: [  // stage 4: the station card opens
      { n: "The doors opened on a platform that wasn't there. Iwatodai Station in the late afternoon, the monorail humming overhead, the smell of the bay, and a departure board flipping through names she could read without trying, in a language nobody in her house could." },
      { n: "Somewhere past the ticket gates a dog barked once, the way a dog barks at the door when it knows whose footsteps those are. On the bench by the stairs someone had left a baseball cap upside down, the way a boy who never once stopped talking left things when he meant to come straight back for them, and she didn't go and look at it, because she already knew it would still be warm." },
      { n: "Then the doors closed, and she was standing at the bottom of the Lee house garden with her hand out toward the annex step, and the tide was going out under the house, and on the back step the two fish went round and round in their bucket as if nothing in the world had happened." }
    ] }
  ];
})();
