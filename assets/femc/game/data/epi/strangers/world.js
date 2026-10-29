/* The strangers epilogue's world (FEMC-EPILOGUE-PLAN.md section 5; the specifics are in Claude's private notes). Batch 7
   (2026-10-28): the whole act, Sunday 2/17/2013 to the bottom of the tide before light on Saturday 3/16 (the final `ends`).
   Incheon, the Lee house, deep winter into the first yellow dust. Loaded on demand by epilogue.js after calendar.js; every file
   in this folder merges into FEMC_EPI_WORLDS.strangers (none overwrites another's lists), so load order doesn't matter (the
   scene checker loads them alphabetically, this file last):
     world.js       this file: title, money, routes, places (bg rules, home, activities, music), variants, cast, Equinox
     glitches.js    the glitch schedule and pools          people.js       Haechan, Jungwon, Yunjin, Appa, Eomma; the act's texts
     people-crew.js Sunghoon, Jay, Niki, the kitchen, Mr. Oh, the girls; the routines
     story-w1.js    week 1 (2/17-2/23): home, the cover, the step, the night before Daeboreum (the crossroads)
     story-w2.js    week 2 (2/24-3/1): Daeboreum, the hammer, the first pull     story-w3.js  week 3 (3/4-3/9): the dust, the tide
     story-end.js   3/10-3/16: the dinner, the last pull, the bottom of the tide (the final)
   Shape: as data/epi/runners/world.js (its header documents every field; epilogue.js the engine side).
   The routes: Haechan (his romance, Christmas pick or strangers lean in the year), Jungwon (his romance or Christmas pick), the
   family (always open). The 2/23 late event is the crossroads (who she sits with on the night before Daeboreum: options gated
   by { ifRouteOpen }); the route locks that night (lockAfter). Both boys are hers on every route (the book's state: both known,
   neither hidden); the route says whose story comes forward. Both remember the year and both see the glitches: that shared
   secret is their uneasy alliance. They are never friends.
   Canon fence (private plan §4, strangers sync rule 1): nothing here states what the book hasn't printed. Places that don't
   have their own art yet borrow the nearest existing background (FEMC-ART-TODO "The epilogue: strangers" lists the real
   ones; FEMC-ART-WIRING says which rule each replaces). */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).strangers ||= {});
  delete R.stub;
  Object.assign(R, {
    title: 'Incheon',
    // The Equinox card after the act (epilogue.js finish): `line` under the title, a route's own line in its place, and one
    // line per other world (where someone is holding a gap; the private plan §8).
    equinox: { line: 'Every universe.', routes: {
        haechan: 'He kept the left hand. He’s still counting.',
        jungwon: 'Near. He said it once, and the tide heard him.',
        family: 'On the seventh stair, a light is still on.'
      },
      echoes: [
        'Syracuse · On a rooftop in the snow, a phone’s timer is still running.',
        'Hanlim · At 2 a.m., Cherry’s phone opens an old group chat by itself.',
        'Iwatodai · A room in the dorm is still made up. At midnight, its light comes on.'
      ] },
    money: { code: 'KRW', sign: '₩', start: 100000, locale: 'ko-KR' },
    routes: [
      { id: 'haechan', name: 'Haechan', from: { romance: ['haechan'], xmas: ['haechan'], flags: ['hc-lean-S'] }, open: { lean: true, bond: { haechan: 4 } } },
      { id: 'jungwon', name: 'Jungwon', from: { romance: ['jungwon'], xmas: ['jungwon'] }, open: { lean: true, bond: { jungwon: 4 } } },
      { id: 'family', name: 'Family', open: { always: true } }
    ],
    lockAfter: '2/23',
    places: {
      bg: [
        ['Incheon · The Lee House · Her Room', 'epi-s-her-room', 'epi-s-her-room-night'],  // batch 78
        ['Incheon · The Lee House · Kitchen', 'epi-s-lee-kitchen', 'epi-s-lee-kitchen'], // batch 65: lamp-lit, blue at the windows (before light to late)
        ['Incheon · The Lee House · Stairs', 'epi-s-stairs-night', 'epi-s-stairs-night'], // batch 78: every scene is before light to late
        ['Incheon · The Lee House · Study', 'epi-s-study', 'epi-s-study'],               // batch 78: lamp-lit evening, both slots
        ['Incheon · The Lee House · Sunroom', 'botanical-garden-greenhouse', null],
        ['Incheon · The Lee House · Dining Room', 'epi-s-dining-room', 'epi-s-dining-room'], // batch 78: both slots
        ["Incheon · The Lee House · Yunjin's Room", 'epi-s-yunjin-room', null],           // batch 78: the night tint over the lamp-lit room in the evening
        ['Incheon · The Lee House · Annex', 'epi-s-annex-day', 'epi-s-annex'],          // batch 78: by day; batch 65: night
        ['Incheon · The Lee House · Garden', 'epi-s-garden-day', 'epi-s-garden-night'],  // batch 78 (the 3/16 before-light line sets the night art)
        ['Incheon · The Lee House · Gate', 'epi-s-gate-day', 'flashback-lee-house'],     // batch 78: by day; the lantern-lit gate at night
        ['Incheon · The Lee House at Midnight', 'flashback-lee-house', null],
        ['Incheon · The Lee House', 'flashback-lee-house', null],
        ["Incheon · The Yang House · Jungwon's Room", 'epi-s-jungwon-room', null],         // batch 78
        ['Incheon · The Yang House · Kitchen', 'hagakure-kitchen', null],
        ['Incheon · The Yang House', 'hotel-lobby', null],
        ['Incheon · Harbor at Midnight', 'flashback-incheon-harbor', null],
        ['Incheon · Harbor', 'harbor', 'flashback-incheon-harbor'],
        ['Incheon · The Mudflats at Midnight', 'epi-s-mudflats-midnight', 'epi-s-mudflats-midnight'], // batch 78: both slots ('Midnight' reads the day slot)
        ['Incheon · The Mudflats', 'epi-s-harbor-tide', null],                         // batch 65: grey low tide by day
        ['Incheon · Fish Market at Midnight', 'flashback-fish-market', null],
        ['Incheon · Fish Market', 'flashback-fish-market', null],
        ['Incheon · Wolmido · Daeboreum', 'epi-s-daeboreum', 'epi-s-daeboreum'],     // batch 65: the festival night (epi-s-moon)
        ['Incheon · Wolmido', 'epi-s-wolmido', 'epi-s-wolmido-night'],                  // batch 78
        ['Incheon · Chinatown', 'epi-s-chinatown', 'epi-s-chinatown'],                  // batch 78: dusk art, both slots
        ['Incheon · Street in the Dust', 'epi-s-dust', null],                         // batch 65: daytime only
        ['Incheon · Songdo · Café', 'chagall-cafe-inside', null],
        ['Incheon · Songdo', 'paulownia-mall', 'paulownia-mall-night'],
        ['Incheon · Karaoke', 'paulownia-karaoke', null],
        ['Incheon · Bathhouse', 'iwatodai-bathhouse', 'bathhouse-night'],
        ['Incheon · The Bridge', 'moonlightbridge', null],
        ['Incheon · The Car', 'epi-s-car', 'epi-s-car-night'],                          // batch 78: a room with windows for weather
        ['Incheon', 'flashback-incheon-harbor', null]
      ],
      weatherFx: { outdoor: ['epi-s-annex', 'epi-s-harbor-tide', 'epi-s-mudflats-midnight', 'epi-s-garden', 'epi-s-gate-day', 'epi-s-wolmido', 'epi-s-chinatown', 'epi-s-daeboreum', 'epi-s-dust', 'flashback-incheon-harbor', 'harbor', 'flashback-fish-market', 'flashback-lee-house', 'port-island-seaside-park', 'port-island-pier-night', 'shopping-street', 'iwatodai-strip-night', 'moonlightbridge'],
        sealed: ['paulownia-karaoke', 'iwatodai-bathhouse', 'bathhouse-night'], none: [] },
      home: { place: 'Incheon · The Lee House · Her Room', bg: 'epi-s-her-room' },
      activities: [
        { id: 'epi-s-market', name: 'The fish market', place: 'Incheon · Fish Market', bg: 'flashback-fish-market', slots: ['after'], cost: 8000, stats: { kindness: 1 },
          text: "Ice underfoot, men shouting prices over each other, the smell of salt and diesel and cold blood, and a woman behind a flounder tank who looked at her hands, looked at her face, and put an extra one in the bag without being asked. She carried it home for Mrs. Bang like a prize." },
        { id: 'epi-s-harbor', name: 'Walk the harbor', place: 'Incheon · Harbor', bg: 'harbor', slots: ['after', 'evening'], cost: 0, stats: { courage: 1 },
          text: "Wind off the water, gulls, and the cranes standing over everything like they'd been told to wait. She walked the long way round the quay and stayed well back from the edge, the way she always had, and counted the ships at anchor without meaning to. Eleven. She counted again. Eleven." },
        { id: 'epi-s-chinatown', name: 'Jjajangmyeon in Chinatown', place: 'Incheon · Chinatown', bg: 'epi-s-chinatown', slots: ['after', 'evening'], cost: 6000, stats: { charm: 1 },
          text: "Up the red steps, past the paper lanterns, to the place with the cracked sign where the aunties still talked about her in Mandarin as if she couldn't understand it. She answered one of them in Mandarin, very politely, and the whole table laughed so hard the owner brought her dumplings she hadn't ordered." },
        { id: 'epi-s-wolmido', name: 'The Wolmido promenade', place: 'Incheon · Wolmido', bg: 'epi-s-wolmido', slots: ['after', 'evening'], cost: 2000, stats: { kindness: 1 },
          text: "A paper cup of fish cake broth from the cart, the shuttered rides along the promenade, the sea grey and flat beyond the railing. A child fed the gulls a whole bag of shrimp crackers while his mother pretended not to see. She stood beside him and didn't help, which he seemed to understand was a kind of help." },
        { id: 'epi-s-songdo', name: 'Coffee in Songdo', place: 'Incheon · Songdo · Café', bg: 'chagall-cafe-inside', slots: ['after'], cost: 7500, stats: { charm: 1 },
          text: "The glass city across the water, a café with too many plants and a barista who'd been at her old school, a latte she didn't want and a window seat she did. Nobody here knew which house she was from. She stayed an extra hour for that alone." },
        { id: 'epi-s-piano', name: 'Practice piano', place: 'Incheon · The Lee House', bg: 'flashback-lee-house', slots: ['after', 'evening'], cost: 0, stats: { proficiency: 1 },
          text: "An hour at the piano in the front room, the sheltered daughter's hobby and the best alibi in the house. Scales first, then the easy Clementi, then nothing in particular. Mrs. Bang stopped dusting the hall to listen and pretended she'd stopped for some other reason." },
        { id: 'epi-s-bathhouse', name: 'The bathhouse', place: 'Incheon · Bathhouse', bg: 'iwatodai-bathhouse', slots: ['evening'], cost: 9000, stats: { kindness: 1, courage: 1 },
          text: "Hot water to the chin, the ajummas arguing about a drama, a scrub from a woman with forearms like a crane man's who said she had the skin of someone who hadn't slept in a month. She had a boiled egg and a sikhye after and fell asleep on the heated floor with a towel on her head like a lamb. Nobody woke her. Nobody ever did, here." },
        { id: 'epi-s-noraebang', name: 'Noraebang', place: 'Incheon · Karaoke', bg: 'paulownia-karaoke', slots: ['evening'], cost: 15000, stats: { charm: 1, courage: 1 },
          text: "An hour in the small room with the tambourine that only had half its bells. She sang a trot song, badly and on purpose, the way someone she knew sang them well and on purpose, and laughed in the middle of the second verse by herself. Then she sang it again, properly." }
      ],
      /* ♪ MUSIC: Kat's song picks (FEMC-EPILOGUE-PLAN.md, revision 1); an epi-s-* mood still marked ♪ PLACEHOLDER plays a stand-in P3 track. To set one,
         replace its value with a file in assets/femc/music/ (no extension) or an 'assets/audio/…' path, like world-strangers. */
      music: {
        'epi-s-house': 'nice-dream', // the Lee house: the full kitchen, Mrs. Bang, the koi on the back step
        'epi-s-cover': 'every-breath-you-take', // the cover: the fever, Appa on the seventh stair, the lie held
        'epi-s-step': 'linger', // the annex step at night, the three of them
        'epi-s-haechan': 'assets/audio/EthelCain-Crush.mp3', // Haechan, when it's warm
        'epi-s-jungwon': 'soft-spot', // Jungwon, when it's warm
        'epi-s-yunjin': 'staying', // Yunjin and the studio girls (light relief)
        'epi-s-festival': 'assets/audio/CocteauTwins-SeaSwallowMe.mp3', // Daeboreum: the nuts at breakfast, the moon over Wolmido
        'epi-s-danger': ['help-im-alive', 'dont-touch', 'demons'], // men from outside the two houses (the hammer, the gate)
        'epi-s-dust': 'in-this-darkness', // yellow dust: masks, nobody can see faces
        'epi-s-tide': 'nothings-gonna-hurt-you-baby', // the tide standing still
        'epi-s-call': 'somebody', // the call that gets through
        'epi-s-half': 'i-think-my-hearts-gone-rotten', // the half-present pulls (around the four fights)
        'epi-s-family': 'sidelines', // Appa and Eomma, the family's own scenes
        'epi-s-last': 'forever' // the last ordinary day, the quiet before the end
        // The first morning and the bottom of the tide play world-strangers (Kat's pick, the world's own song).
      }
    },
    cast: {
      appa: 'Appa', eomma: 'Eomma', mrsbang: 'Mrs. Bang', auntie: 'Auntie Song', pyo: 'Pyo', mroh: 'Mr. Oh', minseok: 'Minseok',
      mrspark: 'Mrs. Park', seo: 'Inspector Seo', chaewon: 'Chaewon', sakura: 'Sakura', kazuha: 'Kazuha', eunchae: 'Eunchae',
      girls: 'The girls', house: 'The kitchen', man: 'A man', fisherman: 'A fisherman', aunt: 'Aunt Hyesun', radio: 'The radio',
      fkvoice: 'Fuuka'
    },
    // This world's own faces (core.js worldFace): Solar's strangers look, the four's strangers outfits and Solar's parents (FEMC-ART-WIRING).
    faces: { solar: 'solar-strangers', chaewon: 'chaewon-strangers', sakura: 'sakura-strangers', kazuha: 'kazuha-strangers', eunchae: 'eunchae-strangers', appa: 'lee-appa', eomma: 'lee-eomma', haechan: 'haechan-strangers', jungwon: 'jungwon-strangers' },
    // Event outfits (core.js eventFaces; FEMC-ART-WIRING "Extras"): an event's `faces: '<key>'` swaps these in for its scenes only.
    eventFaces: {
      'strangers-daeboreum': { solar: 'solar-strangers-daeboreum', haechan: 'haechan-strangers-daeboreum', jungwon: 'jungwon-strangers-daeboreum', yunjin: 'yunjin-strangers-daeboreum' } // epi-s-moon (2/24, Wolmido)
    },
    variants: {
      morning: {
        school: ["Before light, the house was already moving: the kitchen first, then the stairs, then her father's slippers going down to the paper at half past four.",
          "Morning. Cold coming off the windows, the heated floor ticking under the rug, and somewhere below her, a kettle and Mrs. Bang telling it to hurry up.",
          "The gulls were up before she was. The kitchen calendar, when she went down, had been turned again by somebody who got there first."],
        off: ["Sunday. The house slept in, which in this house meant six. Somebody had put the koi bucket in the sun.",
          "No one needed her anywhere this morning, which had never once happened in this house without somebody deciding it should."]
      },
      late: ["The house went quiet the way it always did, all at once, as if somebody had told it to. Down the garden, a light in the annex. Next door, Yunjin's.",
        "Late. The tide going out under the house; she could feel it in her teeth. Her father's study light was off. That didn't mean he was asleep.",
        "The radiator knocked twice and gave up. Somewhere downstairs a door shut very softly, the way you shut a door in a house where everyone is pretending to sleep."],
      stayIn: ["She stayed in. The heated floor, a book she didn't read, the window going dark over the water, Mrs. Bang knocking once to leave a tray outside the door and not waiting."]
    }
  });
  // The story, people and routine files push into these; never replace them here.
  R.events ||= []; R.routines ||= []; R.bonds ||= {}; R.links ||= {};
})();
