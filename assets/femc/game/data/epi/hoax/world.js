/* The HOAX epilogue's world (FEMC-EPILOGUE-PLAN.md section 4). Batch 5 (2026-10-28): the whole act, Thursday 12/21/2023 to
   the gym at midnight on Friday 1/12/2024 (the calendar runs to 1/13; the final `ends` the act). Hanlim, winter break, then the
   make-up exams and the impeachment hearing. Loaded on demand by epilogue.js after calendar.js; every file in this folder merges
   into FEMC_EPI_WORLDS.hoax (none overwrites another's lists), so load order doesn't matter (the scene checker loads them
   alphabetically, this file last):
     world.js      this file: title, money, routes, places (bg rules, home / school, activities, music), duty, variants, cast
     glitches.js   the glitch schedule and pools          people.js        Jungwon, Jihoon, Cherry, the council; the act's texts
     people-crew.js the other home bonds' hangouts        story-w1.js      week 1 (12/21-12/27): home, the retreat, Christmas
     story-w2.js   week 2 (12/28-1/3) and the routines    story-w3.js      week 3 (1/4-1/9): the clocks, back to school
     story-end.js  1/10-1/12: the hearing and the gym at midnight (the final)
   Shape: as data/epi/runners/world.js (its header documents every field; epilogue.js the engine side).
   The routes: Jungwon (his romance or Christmas pick in the year), Jihoon's redemption (his), the council (everyone else; always
   open). The 12/24 evening event is the Christmas Eve choice (the crossroads: options gated by { ifRouteOpen }); the route
   locks that night (lockAfter). At home she is Jungwon's girlfriend on every route (Kat's HOAX ruling 5); Jihoon's route never
   makes him her boyfriend, it makes him the friend who chooses differently.
   Places that don't have their own art yet borrow the nearest existing background (FEMC-ART-TODO "The epilogue: HOAX" lists the
   real ones; FEMC-ART-WIRING says which rule each replaces). */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).hoax ||= {});
  delete R.stub;
  Object.assign(R, {
    title: 'Hanlim',
    // The Equinox card after the act (epilogue.js finish; batch 9): `line` under the title, a route's own line in its place,
    // and one line per other world (where someone is holding a gap; the private plan §8).
    equinox: { line: 'Every universe.', routes: { jungwon: 'He didn’t let go. He knew whose voice it was, and he didn’t let go.', jihoon: 'Someone chose differently. It counted.', council: 'The gym lights are still on.' },
      echoes: [
        'Syracuse · Hyein starts a text that says drink water, to no one, and doesn’t finish it.',
        'Incheon · The old radio on the annex sill catches two seconds of a school bell.',
        'Iwatodai · A room in the dorm is still made up. At midnight, its light comes on.'
      ] },
    money: { code: 'KRW', sign: '₩', start: 50000, locale: 'ko-KR' },
    routes: [
      { id: 'jungwon', name: 'Jungwon', from: { romance: ['jungwon'], xmas: ['jungwon'] }, open: { lean: true, bond: { jungwon: 3 } } },
      { id: 'jihoon', name: 'Jihoon', from: { romance: ['jihoon'], xmas: ['jihoon'] }, open: { lean: true, bond: { jihoon: 3 } } },
      { id: 'council', name: 'The council', open: { always: true } }
    ],
    lockAfter: '12/24',
    places: {
      bg: [
        ['Hanlim · Home · Her Room', 'epi-h-her-room', 'epi-h-her-room-night'],            // batch 77
        ['Hanlim · Home', 'epi-h-kim-house-day', 'epi-h-kim-house'],                      // batch 77: by day; batch 65: lamp-lit, snowing outside (evening)
        ['Hanlim · School · Council Room', 'epi-h-council-room', null],
        ['Hanlim · School · Classroom', 'epi-h-classroom-exam', null],
        ['Hanlim · School · Gym at Midnight', 'epi-h-gym-midnight', 'epi-h-gym-midnight'],
        ['Hanlim · School · Gym · Hearing', 'epi-h-gym-hearing', null],                    // batch 77: the hearing day (epi-h-hearing)
        ['Hanlim · School · Gym', 'flashback-hamlim-gym', null],
        ['Hanlim · School · Rooftop', 'rooftop-day-winter', 'gekkoukan-rooftop-night'],
        ['Hanlim · School · Library', 'school-library', null],
        ['Hanlim · School', 'flashback-hamlim-hallway', null],
        ["Hanlim · Yeobo's · After Closing", 'flashback-yeobos-cafe', null],
        ["Hanlim · Yeobo's", 'yeobos-cafe', null],
        ["Hanlim · Jihoon's House · Porch", 'epi-h-jihoon-porch', 'epi-h-jihoon-porch'],     // batch 77: night, both slots
        ["Hanlim · Jihoon's House", 'epi-h-jihoon-house', 'epi-h-jihoon-house'],             // batch 65: night, one lamp (every scene there is evening or late)
        ["Hanlim · Jungwon's Street", 'outside-daytime-neighborhood', 'outside-night'],
        ['Hanlim · Winter Street', 'epi-h-winter-street-day', 'epi-h-winter-street'],       // batch 77: by day; batch 65: night in the snow
        ['Hanlim · Christmas Lights', 'epi-h-christmas-lights', 'epi-h-christmas-lights'], // batch 77: every scene is evening
        ['Hanlim · Library', 'school-library', null],
        ['Hanlim · Karaoke', 'paulownia-karaoke', null],
        ['Hanlim · Arcade', 'gamepanic-inside', null],
        ['Hanlim · Ice Rink', 'park-2-winter', null],
        ['Hanlim · The Park', 'park-2-winter', null],
        ['Hanlim · The Party · Outside', 'outside-nightdistrict', null],
        ['Hanlim · The Party', 'epi-h-party', 'epi-h-party'],                               // batch 65: night
        ["Hanlim · Jungwon's Car", 'outside-night', null],
        ['Hanlim', 'outside-daytime-neighborhood', 'outside-night']
      ],
      weatherFx: { outdoor: ['outside-daytime-neighborhood', 'outside-night', 'park-2-winter', 'epi-h-christmas-lights', 'epi-h-jihoon-porch', 'epi-h-winter-street', 'rooftop-day-winter', 'gekkoukan-rooftop-night', 'outside-nightdistrict'],
        sealed: ['paulownia-karaoke'], none: [] },
      home: { place: 'Hanlim · Home · Her Room', bg: 'epi-h-her-room' },
      school: { place: 'Hanlim · School', bg: 'flashback-hamlim-hallway' },
      activities: [
        { id: 'epi-h-yeobos', name: "Hang out at Yeobo's", place: "Hanlim · Yeobo's", bg: 'yeobos-cafe', slots: ['after', 'evening'], cost: 6500, stats: { charm: 1 },
          text: "Two drinks, the table by the window, and the radiator doing its best against the door every time it opened. Sunoo's grandmother put a croissant on the table she hadn't ordered and walked off before she could pay for it, which was the whole point." },
        { id: 'epi-h-study', name: "Study at Yeobo's", place: "Hanlim · Yeobo's", bg: 'yeobos-cafe', slots: ['after', 'evening'], cost: 4500, stats: { knowledge: 1 },
          text: "One americano, three hours, and a stack of calculus notes for exams she'd technically already missed. Some of it went in. She decided that counted." },
        { id: 'epi-h-machine', name: 'The vending machine', place: 'Hanlim · Winter Street', bg: 'epi-h-winter-street-day', slots: ['after', 'evening'], cost: 1500, stats: { courage: 1 },
          text: "She stood in front of the row of machines outside the convenience store with a thousand-won note and a coin and pressed the button for barley tea, on principle. The third machine from the left thought about it, hummed, and dropped a can. Pink and black. Claw marks for a logo. It didn't even stock them. She put it in her other pocket and walked home with one hand on each." },
        { id: 'epi-h-nana', name: 'Walk Nana', place: 'Hanlim · The Park', bg: 'park-2-winter', slots: ['after', 'evening'], cost: 0, stats: { kindness: 1 },
          text: "Nana walked her, mostly. Forty minutes of a very large white dog deciding which snowbanks were enemies, three strangers who stopped to tell her he looked like a cloud, and one tiny dog across the park that Nana stared at with the deep personal interest of someone who had a history. She held the leash with both hands." },
        { id: 'epi-h-arcade', name: 'The arcade', place: 'Hanlim · Arcade', bg: 'gamepanic-inside', slots: ['after', 'evening'], cost: 5000, stats: { proficiency: 1 },
          text: "Five thousand won in tokens and a rhythm game she was annoyingly good at now, for reasons she couldn't explain to anyone here. A kid behind her filmed her last song. She let him." },
        { id: 'epi-h-karaoke', name: 'Karaoke', place: 'Hanlim · Karaoke', bg: 'paulownia-karaoke', slots: ['evening'], cost: 12000, stats: { charm: 1, courage: 1 },
          text: "One hour in the small room with the broken tambourine, by herself, which was either very sad or very healthy. She sang the emo song twice. Nobody could stop her." },
        { id: 'epi-h-rink', name: 'The ice rink', place: 'Hanlim · Ice Rink', bg: 'park-2-winter', slots: ['after'], cost: 8000, stats: { courage: 1 },
          text: "Rented skates a half size too big, the outdoor rink by the park, and a lot of the wall. By the end of the hour she'd let go of it twice on purpose. Cherry would have laughed at her. Cherry would also have held her hand the whole way round." },
        { id: 'epi-h-library', name: 'The library', place: 'Hanlim · Library', bg: 'school-library', slots: ['after'], cost: 0, stats: { knowledge: 1 },
          text: "The town library's study room, four tables, a heater that clicked, and a calculus textbook she opened at chapter six with the grim determination of someone who had been told by a boy with dimples that chapter six was 'fine, actually.'" }
      ],
      /* ♪ MUSIC: Kat's song picks (FEMC-EPILOGUE-PLAN.md, revision 1); an epi-h-* mood still marked ♪ PLACEHOLDER plays a stand-in P3 track. To set one,
         replace its value with a file in assets/femc/music/ (no extension) or an 'assets/audio/…' path, like world-hoax. */
      music: {
        'epi-h-home': 'cardigan', // home, Nana, her mom at the door (soft, a little funny)
        'epi-h-goofy': 'everybody-talks', // the council and the crew being idiots (the retreat story, the group chats)
        'epi-h-forum': 'tongue-tied', // the forum, Eunchae's channel, the motion going up
        'epi-h-romance': 'assets/audio/ENHYPEN-moonstruck.mp3', // Jungwon, when it's warm
        'epi-h-eve': 'assets/audio/arianagrande-someonelikeu.mp3', // Christmas Eve (the choice)
        'epi-h-christmas': 'touch-tank', // Christmas Day at the Kims'
        'epi-h-seance': 'colorblind', // the Hate Club séance (a joke until it isn't)
        'epi-h-party': ['crazy-kids', 'brooklynbloodpop', 'cha-ching', 'we-r-who-we-r'], // the winter-break party
        'epi-h-jihoon': 'cigarette-daydreams', // Jihoon, when the act drops (the porch, the drawer)
        'epi-h-newyear': ['i-like-you', 'everybody-talks', 'impatient'], // New Year's Eve and the livestream
        'epi-h-dread': 'moonlight', // weeks 2-3, unsettling (the notes, the clocks)
        'epi-h-half': 'anthems-for-a-seventeen-year-old-girl', // the half-present pulls (around the four fights)
        'epi-h-exam': 'teenage-losers', // make-up exams
        'epi-h-hearing': 'nail', // the impeachment hearing
        'epi-h-snow': 'evergreen' // snow days, the quiet before the end
        // The gym at midnight plays world-hoax (Kat's pick, the world's own song).
      }
    },
    // Council duty: after school on school days once term is back (1/8-1/12). Exam days skip it (epilogue.js practiceNow), and a
    // story event or routine in that slot comes first, so in practice it's the odd afternoon in the council room.
    practice: { days: [1, 2, 3, 4, 5], slot: 'after', from: '1/8', to: '1/12', place: 'Hanlim · School · Council Room', bg: 'epi-h-council-room', stats: { kindness: 1 }, title: 'Council duty', music: 'epi-h-goofy' },
    cast: {
      mom: 'Mom', dad: 'Dad', eunchae: 'Eunchae', kazuha: 'Kazuha', chaewon: 'Chaewon', sakura: 'Sakura',
      advisor: 'The advisor', principal: 'The principal', hayoon: 'Do Hayoon', halmeoni: "Sunoo's grandmother", jwmom: 'Mrs. Yang',
      clerk: 'Clerk', school: 'Hanlim High School', stream: 'Hanlim Unfiltered', forum: 'Hanlim Forum', council: 'The council',
      bleed: 'A voice', hcvoice: 'Haechan'
    },
    // This world's own faces (core.js worldFace): Solar's HOAX look, the four's HOAX outfits and Solar's parents (FEMC-ART-WIRING).
    faces: { solar: 'solar-hoax', sakura: 'sakura-hoax', eunchae: 'eunchae-hoax', kazuha: 'kazuha-hoax', chaewon: 'chaewon-hoax', mom: 'kim-mom', dad: 'kim-dad', jungwon: 'jungwon-hoax' },
    variants: {
      morning: {
        school: ["Hanlim at eight, snow on the gate, and a whole building full of people with opinions about where the council had been.",
          "Uniform, cardigan, the VP pin, the walk past Jungwon's street with her hands in her sleeves. The school looked exactly the same, which felt like a personal insult.",
          "The hallway smelled like floor wax and wet coats. Three first-years stopped talking when she walked past, then started again, louder."],
        off: ["Winter break. Her mom was already up, which meant the kitchen was already a negotiation.",
          "No school. The heating ticked, the street outside was white, and her phone had forty notifications she wasn't reading yet.",
          "Nana was on her feet. Nana weighed about as much as she did. The morning could wait until he decided it couldn't."],
        exam: ["Make-up exams. The classroom was half empty and twice as quiet, and everyone in it had missed something for a reason they weren't saying.",
          "Exam day. Pencil, eraser, student ID, the calculus formulas written on the inside of her eyelids, she hoped."]
      },
      practice: ["Council duty. Heeseung's clipboard, Sunoo's laminator, Jake reading the forum out loud in a newscaster voice until Jungwon took his phone, and a whiteboard with PROM written on it and nothing underneath.",
        "An hour in the council room, sorting sign-up sheets nobody had touched since the week they'd vanished. Niki ate three of the bake-sale leftovers out of the freezer and lived.",
        "Duty. The long table, the radiator, the bake-sale tin locked in the bottom drawer where Heeseung could see it. Jungwon answered six emails in the time it took her to staple one packet. She stapled it very well."],
      late: ["Her phone buzzed twice and stopped: the group chat, deciding whether it was still awake.",
        "Late. The apartment block's lights went out one window at a time, and Nana sighed at the foot of her bed like he'd had a long day too.",
        "The heating clicked off. Somewhere down the street a car door shut, and she listened to it the way she used to listen for footsteps on a dormitory stair, and then made herself stop."],
      stayIn: ["She stayed in. Blanket, heated floor, a drama she wasn't really watching, and a very large dog on most of the sofa."]
    }
  });
  // The story, people and routine files push into these; never replace them here.
  R.events ||= []; R.routines ||= []; R.bonds ||= {}; R.links ||= {};
})();
