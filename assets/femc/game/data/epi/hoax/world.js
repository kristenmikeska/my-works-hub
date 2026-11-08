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
     The expansion pass (Nov 5-6 2026; DO-NOT-OPEN-hoax-epilogue-expansion.md): story-days.js (two events, three Nana routines),
     people-late.js and people-crew-late.js (hangouts, mostly Late Night on the `lateOpen` nights below), texts-more.js (texts and
     phone lines). This file gained `lateOpen`, three stand-in bg rules (Front Step, Cherry's Room, Hyunsuk's Car) and Nana lines
     in `variants`; calendar.js fixes every day's weather.
     Second pass (Nov 6 2026, Kat's answers; same audit file): story-party.js (the party's mingle, spliced into epi-h-party),
     story-nana.js (short Nana moments that take no time), people-last.js (the last days' late night and afternoon) and
     texts-nana.js. This file gained 1/11 in `lateOpen`, `practice.optional` 1/12, two stand-in rules (Jihoon's Car, Yeobo's
     Back Door), the party's four cast names and more Nana lines; "about as much as she did" became sixty pounds.
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
    // Late Night hangouts (the expansion pass, Nov 5-6 2026; epilogue.js late()): the quiet nights with no late story scene,
    // where the late screen lists who's still up above Sleep (people-late.js, people-crew-late.js).
    // Second pass (Nov 6 2026, Kat's "open a few more evenings / late nights" for the last days): 1/11 after the late story scene
    // (epilogue.js late() runs once a non-consuming late event has played, so the people list follows it); people-last.js.
    lateOpen: ['12/22', '12/23', '12/25', '12/26', '12/28', '12/30', '1/1', '1/3', '1/4', '1/7', '1/8', '1/10', '1/11'],
    places: {
      bg: [
        ['Hanlim · Home · Her Room', 'epi-h-her-room', 'epi-h-her-room-night'],            // batch 77
        // Second pass (Nov 6 2026): two more stand-ins (ART-ADDS-hoax-2.md). Jihoon's car is only ever Late Night and borrows
        // epi-h-car, already night art; Yeobo's back door is After School only, so its evening is null.
        ["Hanlim · Jihoon's Car", 'epi-h-jihoon-car', 'epi-h-jihoon-car'],                 // art batch 145 (36G)
        ["Hanlim · Yeobo's · Back Door", 'epi-h-yeobos-back', null],                        // art batch 145 (36H)
        // The expansion pass (Nov 5-6 2026): three new places on stand-ins until their art comes (ART-ADDS-hoax.md). Each
        // evening image is already another rule's night art, so nothing is made night-lit that wasn't.
        ['Hanlim · Home · Front Step', 'epi-h-winter-street-day', 'epi-h-front-step-night'],  // art batch 143 (36A) at night; day still the winter street (1/12 After School scene) until a day picture exists
        ["Hanlim · Cherry's Room", 'epi-h-cherry-room', null],                              // art batch 143 (36B)
        ["Hanlim · Hyunsuk's Car", 'epi-h-hyunsuk-car', 'epi-h-hyunsuk-car'],                // art batch 143 (36C)
        ['Hanlim · Home', 'epi-h-kim-house-day', 'epi-h-kim-house'],                      // batch 77: by day; batch 65: lamp-lit, snowing outside (evening)
        ['Hanlim · School · Council Room', 'epi-h-council-room', 'epi-h-council-room-night'], // art batch 144: night (H15)
        ['Hanlim · School · Classroom', 'epi-h-classroom-exam', null],
        ['Hanlim · School · Gym at Midnight', 'epi-h-gym-midnight', 'epi-h-gym-midnight'],
        ['Hanlim · School · Gym · Hearing', 'epi-h-gym-hearing', null],                    // batch 77: the hearing day (epi-h-hearing)
        ['Hanlim · School · Gym', 'flashback-hamlim-gym', null],
        ['Hanlim · School · Rooftop', 'epi-h-rooftop', 'epi-h-rooftop'],
        ['Hanlim · School · Library', 'epi-h-library', null],
        ['Hanlim · School', 'epi-h-hallway', 'epi-h-hallway-night'],                   // art batch 144 (H10, H11); flashback-hamlim-hallway stays for the links / Stay
        ["Hanlim · Yeobo's · After Closing", 'flashback-yeobos-cafe', null],
        ["Hanlim · Yeobo's", 'epi-h-yeobos', 'epi-h-yeobos-night'],                   // art batch 144 (H5, H6); yeobos-cafe stays for the main game
        ["Hanlim · Jihoon's House · Porch", 'epi-h-jihoon-porch', 'epi-h-jihoon-porch'],     // batch 77: night, both slots
        ["Hanlim · Jihoon's House", 'epi-h-jihoon-house', 'epi-h-jihoon-house'],             // batch 65: night, one lamp (every scene there is evening or late)
        ["Hanlim · Jungwon's Street", 'epi-h-jungwon-street-day', 'epi-h-jungwon-street'],
        ['Hanlim · Winter Street', 'epi-h-winter-street-day', 'epi-h-winter-street'],       // batch 77: by day; batch 65: night in the snow
        ['Hanlim · Christmas Lights', 'epi-h-christmas-lights', 'epi-h-christmas-lights'], // batch 77: every scene is evening
        ['Hanlim · Library', 'epi-h-library', null],
        ['Hanlim · Karaoke', 'epi-h-noraebang', 'epi-h-noraebang'],
        ['Hanlim · Arcade', 'epi-h-arcade', 'epi-h-arcade'],
        ['Hanlim · Ice Rink', 'epi-h-ice-rink', null],
        ['Hanlim · The Park', 'epi-h-park', 'epi-h-park-night'],                   // art batch 144: night (H9)
        ['Hanlim · The Party · Outside', 'epi-h-party-outside', 'epi-h-party-outside'],
        ['Hanlim · The Party', 'epi-h-party', 'epi-h-party'],                               // batch 65: night
        ["Hanlim · Jungwon's Car", 'epi-h-car', 'epi-h-car'],
        ['Hanlim', 'epi-h-jungwon-street-day', 'epi-h-jungwon-street']
      ],
      weatherFx: { outdoor: ['epi-h-yeobos-back', 'epi-h-front-step-night', 'epi-h-jungwon-street-day', 'epi-h-jungwon-street', 'epi-h-rooftop', 'epi-h-park', 'epi-h-party-outside', 'outside-daytime-neighborhood', 'outside-night', 'park-2-winter', 'epi-h-christmas-lights', 'epi-h-jihoon-porch', 'epi-h-winter-street', 'rooftop-day-winter', 'gekkoukan-rooftop-night', 'outside-nightdistrict'],
        sealed: ['epi-h-jihoon-car', 'epi-h-hyunsuk-car', 'epi-h-car', 'epi-h-noraebang', 'paulownia-karaoke'], none: [] },
      home: { place: 'Hanlim · Home · Her Room', bg: 'epi-h-her-room' },
      school: { place: 'Hanlim · School', bg: 'epi-h-hallway' },
      activities: [
        { id: 'epi-h-yeobos', name: "Hang out at Yeobo's", place: "Hanlim · Yeobo's", bg: 'epi-h-yeobos', slots: ['after', 'evening'], cost: 6500, stats: { charm: 1 },
          text: "Two drinks, the table by the window, and the radiator doing its best against the door every time it opened. Sunoo's grandmother put a croissant on the table she hadn't ordered and walked off before she could pay for it, which was the whole point." },
        { id: 'epi-h-study', name: "Study at Yeobo's", place: "Hanlim · Yeobo's", bg: 'epi-h-yeobos', slots: ['after', 'evening'], cost: 4500, stats: { knowledge: 1 },
          text: "One americano, three hours, and a stack of calculus notes for exams she'd technically already missed. Some of it went in. She decided that counted." },
        { id: 'epi-h-machine', name: 'The vending machine', place: 'Hanlim · Winter Street', bg: 'epi-h-winter-street-day', slots: ['after', 'evening'], cost: 1500, stats: { courage: 1 },
          text: "She stood in front of the row of machines outside the convenience store with a thousand-won note and a coin and pressed the button for barley tea, on principle. The third machine from the left thought about it, hummed, and dropped a can. Pink and black. Claw marks for a logo. It didn't even stock them. She put it in her other pocket and walked home with one hand on each." },
        { id: 'epi-h-nana', name: 'Walk Nana', place: 'Hanlim · The Park', bg: 'epi-h-park', slots: ['after', 'evening'], cost: 0, stats: { kindness: 1 },
          text: "Nana walked her, mostly. Forty minutes of a very large white Samoyed deciding which snowbanks were enemies, three strangers who stopped to tell her he looked like a cloud, and one tiny dog across the park that Nana stared at with the deep personal interest of someone who had a history. She held the leash with both hands." },
        { id: 'epi-h-arcade', name: 'The arcade', place: 'Hanlim · Arcade', bg: 'epi-h-arcade', slots: ['after', 'evening'], cost: 5000, stats: { proficiency: 1 },
          text: "Five thousand won in tokens and a rhythm game she was annoyingly good at now, for reasons she couldn't explain to anyone here. A kid behind her filmed her last song. She let him." },
        { id: 'epi-h-karaoke', name: 'Karaoke', place: 'Hanlim · Karaoke', bg: 'epi-h-noraebang', slots: ['evening'], cost: 12000, stats: { charm: 1, courage: 1 },
          text: "One hour in the small room with the broken tambourine, by herself, which was either very sad or very healthy. She sang the emo song twice. Nobody could stop her." },
        { id: 'epi-h-rink', name: 'The ice rink', place: 'Hanlim · Ice Rink', bg: 'epi-h-ice-rink', slots: ['after'], cost: 8000, stats: { courage: 1 },
          text: "Rented skates a half size too big, the outdoor rink by the park, and a lot of the wall. By the end of the hour she'd let go of it twice on purpose. Cherry would have laughed at her. Cherry would also have held her hand the whole way round." },
        { id: 'epi-h-library', name: 'The library', place: 'Hanlim · Library', bg: 'epi-h-library', slots: ['after'], cost: 0, stats: { knowledge: 1 },
          text: "The town library's study room, four tables, a heater that clicked, and a calculus textbook she opened at chapter six with the grim determination of someone who had been told by a boy with dimples that chapter six was 'fine, actually.'" }
      ],
      /* ♪ MUSIC: Kat's song picks (FEMC-EPILOGUE-PLAN.md, revision 1); an epi-h-* mood still marked ♪ PLACEHOLDER plays a stand-in P3 track. To set one,
         replace its value with a file in assets/femc/music/ (no extension) or an 'assets/audio/…' path, like world-hoax. */
      // The everyday screens (morning, Go Out, evening, late) play this world's own songs, never the Persona tracks (Kat, 2026-10-30).
      screens: { school: 'epi-h-day', class: 'epi-h-day', after: 'epi-h-day', evening: 'epi-h-evening', dorm: 'epi-h-late' },
      music: {
        'epi-h-day': ['tongue-tied', 'everybody-talks', 'touch-tank', 'crazy-kids', 'colorblind', 'assets/audio/TaylorSwift-Hoax.mp3'], // the everyday screens by day (the theme comes round last, so it doesn't follow the opening)
        'epi-h-evening': ['cigarette-daydreams', 'i-like-you', 'moonlight', 'impatient', 'assets/audio/TaylorSwift-Hoax.mp3'], // evenings
        'epi-h-late': ['evergreen', 'assets/audio/arianagrande-someonelikeu.mp3', 'anthems-for-a-seventeen-year-old-girl'], // late nights
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
    // Second pass (Nov 6 2026): 1/12, the last school day, makes duty a choice at the top of Go Out (`optional`), so its After
    // School is free time (people-last.js); taking duty sets epi-practice-1-12, which nothing reads.
    practice: { days: [1, 2, 3, 4, 5], slot: 'after', from: '1/8', to: '1/12', optional: ['1/12'], place: 'Hanlim · School · Council Room', bg: 'epi-h-council-room', stats: { kindness: 1 }, title: 'Council duty', music: 'epi-h-goofy' },
    cast: {
      mom: 'Mom', dad: 'Dad', eunchae: 'Eunchae', kazuha: 'Kazuha', chaewon: 'Chaewon', sakura: 'Sakura',
      advisor: 'The advisor', principal: 'The principal', hayoon: 'Do Hayoon', halmeoni: "Sunoo's grandmother", jwmom: 'Mrs. Yang',
      clerk: 'Clerk', school: 'Hanlim High School', stream: 'Hanlim Unfiltered', forum: 'Hanlim Forum', council: 'The council',
      bleed: 'A voice', hcvoice: 'Haechan',
      // Second pass (Nov 6 2026), the party's mingle (story-party.js): the host and three Hanlim students, no portraits.
      dohyun: 'Dohyun', yuna: 'Yuna', seoyeon: 'Seoyeon', minho: 'Minho'
    },
    // This world's own faces (core.js worldFace): Solar's HOAX look, the four's HOAX outfits and Solar's parents (FEMC-ART-WIRING).
    faces: { dohyun: 'dohyun-hoax', yuna: 'yuna-hoax', seoyeon: 'seoyeon-hoax', minho: 'minho-hoax', jwmom: 'jwmom-hoax', // FEMC-ART-TODO 41 (Nov 8)
      nana: 'nana-hoax', solar: 'solar-hoax', sakura: 'sakura-hoax', eunchae: 'eunchae-hoax', kazuha: 'kazuha-hoax', chaewon: 'chaewon-hoax', mom: 'kim-mom', dad: 'kim-dad', jungwon: 'jungwon-hoax',
      // Kat's realistic HOAX set (batch 100): HOAX-only, so the main game keeps their year faces. The ENHYPEN boys were drawn in
      // uniform only, so they wear it everywhere.
      jihoon: 'jihoon-hoax', cherry: 'cherry-hoax', asahi: 'asahi-hoax', hyunsuk: 'hyunsuk-hoax', jaehyuk: 'jaehyuk-hoax', junkyu: 'junkyu-hoax',
      heeseung: 'heeseung-hoax', jay: 'jay-hoax', niki: 'niki-hoax', sunghoon: 'sunghoon-hoax', jake: 'jake-hoax', sunoo: 'sunoo-hoax',
      halmeoni: 'halmeoni-hoax', hayoon: 'hayoon-hoax' },
    // At school (any place under 'Hanlim · School', core.js worldFace): the Hanlim uniform for everyone Kat drew one for.
    placeFaces: [['Hanlim · School', { solar: 'solar-hoax-school', jungwon: 'jungwon-hoax-school', jihoon: 'jihoon-hoax-school', cherry: 'cherry-hoax-school',
      asahi: 'asahi-hoax-school', hyunsuk: 'hyunsuk-hoax-school', jaehyuk: 'jaehyuk-hoax-school', junkyu: 'junkyu-hoax-school' }]],
    // Event outfits (core.js eventFaces): Kat's realistic holiday sheets, Oct 31 2026. A scene's `faces: '<key>'` swaps these in.
    eventFaces: {
      'hoax-christmas': { solar: 'solar-hoax-christmas', jungwon: 'jungwon-hoax-christmas', jihoon: 'jihoon-hoax-christmas', cherry: 'cherry-hoax-christmas', kazuha: 'kazuha-hoax-christmas' }, // epi-h-christmas (12/25)
      'hoax-party': { solar: 'solar-hoax-party', jungwon: 'jungwon-hoax-party', jihoon: 'jihoon-hoax-party', cherry: 'cherry-hoax-party' }, // epi-h-party (12/29)
      // epi-h-new-year and epi-h-sebae (1/1): the hanbok, for the whole council
      'hoax-newyear': { solar: 'solar-hoax-newyear', jungwon: 'jungwon-hoax-newyear', jihoon: 'jihoon-hoax-newyear', cherry: 'cherry-hoax-newyear', halmeoni: 'halmeoni-hoax-newyear',
        heeseung: 'heeseung-hoax-newyear', jake: 'jake-hoax-newyear', jay: 'jay-hoax-newyear', niki: 'niki-hoax-newyear', sunghoon: 'sunghoon-hoax-newyear', sunoo: 'sunoo-hoax-newyear' }
    },
    variants: {
      morning: {
        school: ["Hanlim at eight, snow on the gate, and a whole building full of people with opinions about where the council had been.",
          "Uniform, cardigan, the VP pin, the walk past Jungwon's street with her hands in her sleeves. The school looked exactly the same, which felt like a personal insult.",
          "The hallway smelled like floor wax and wet coats. Three first-years stopped talking when she walked past, then started again, louder.",
          "Nana walked her as far as the front door and sat in it like a toll booth, smiling, until she paid him one ear scratch and a promise about later."],
        off: ["Winter break. Her mom was already up, which meant the kitchen was already a negotiation.",
          "No school. The heating ticked, the street outside was white, and her phone had forty notifications she wasn't reading yet.",
          "Nana was on her feet. All sixty pounds of him, warm as a radiator and twice as immovable. The morning could wait until he decided it couldn't.",
          "Nana had stolen one of her socks in the night and was guarding it at the foot of the bed, smiling his Samoyed smile, very proud of the hostage situation.",
          "Nana stood at the bedroom door with his leash in his mouth, the whole leash, the clip hanging off one side of his black-lipped smile like a cigarette, and waited with enormous patience for her to understand the assignment.",
          "Her mom had let Nana out into the yard and he'd come back in with snow packed between every toe, and he was now drying himself, thoroughly, on her duvet, with her in it.",
          // Second pass (Nov 6 2026), Kat: more Nana.
          "She woke with her face in white fur. Somewhere in the night Nana had decided her pillow was his and she was a guest on it, and she lay there a long minute with her nose in the back of his neck, breathing dog, and didn't move him. She never moved him.",
          "Her dad was in the kitchen doorway with his coffee, telling Nana about the weather in full sentences, the way he did, and Nana was listening with his head on one side, the way he did. Neither of them noticed her on the stairs for a while. She let them have it."],
        exam: ["Make-up exams. The classroom was half empty and twice as quiet, and everyone in it had missed something for a reason they weren't saying.",
          "Exam day. Pencil, eraser, student ID, the calculus formulas written on the inside of her eyelids, she hoped.",
          "Nana saw her to the gate in the dark and sat down in the snow on the right side of it, the way he had every school morning since he was a puppy, and didn't get up until she'd turned the corner. She checked. He hadn't.",
          "She said goodbye to Nana at the door three times. He leaned his whole weight on her shins every time, like he could keep her in the house by being heavy enough, and the third time it almost worked."]
      },
      practice: ["Council duty. Heeseung's clipboard, Sunoo's laminator, Jake reading the forum out loud in a newscaster voice until Jungwon took his phone, and a whiteboard with PROM written on it and nothing underneath.",
        "An hour in the council room, sorting sign-up sheets nobody had touched since the week they'd vanished. Niki ate three of the bake-sale leftovers out of the freezer and lived.",
        "Duty. The long table, the radiator, the bake-sale tin locked in the bottom drawer where Heeseung could see it. Jungwon answered six emails in the time it took her to staple one packet. She stapled it very well."],
      late: ["Her phone buzzed twice and stopped: the group chat, deciding whether it was still awake.",
        "Late. The houses down the street went dark one window at a time, and Nana sighed at the foot of her bed like he'd had a long day too.",
        "The heating clicked off. Somewhere down the street a car door shut, and she listened to it the way she used to listen for footsteps on a dormitory stair, and then made herself stop.",
        "Nana climbed up and arranged himself across her feet, a warm white weight, and sighed at her until she turned the light off.",
        "Somewhere in the dark Nana was dreaming, his paws going in little running twitches against her shins and a soft *wuf* coming out of him every few seconds, chasing something across a field she'd never see. She lay still so she wouldn't wake him.",
        "Nana took his half of the bed out of the middle, which was his half, and she curled round the edge of him with one hand buried in his ruff, and the whole house went quiet around the two of them.",
        "Her mom's voice came through the wall, low, saying goodnight to the dog through the door, which she'd done every night since September and thought nobody knew about. Nana thumped his tail on the duvet twice. *Goodnight,* he meant."],
      stayIn: ["She stayed in. Blanket, heated floor, a drama she wasn't really watching, and a very large dog on most of the sofa.",
        "She stayed in and brushed Nana on the living-room floor until there was enough white fur on the rug to build a second, smaller Samoyed, and he fell asleep halfway through, smiling.",
        "She stayed in. Nana lay on the heated floor with all four silly legs in the air and his head upside down, smiling at the ceiling, and every time she laughed at him his tail thumped the boards twice, like he was keeping score.",
        "She stayed in. Nana put his chin on her knee and kept it there through two whole episodes, looking up at her with his black-rimmed eyes every time she laughed, checking it was still her. It was still her. She kept telling him.",
        "She stayed in, and so did her dad, and the two of them sat on the floor on either side of Nana picking dried snow out of his feet and arguing, very gently, about whether he liked it."]
    }
  });
  // The story, people and routine files push into these; never replace them here.
  R.events ||= []; R.routines ||= []; R.bonds ||= {}; R.links ||= {};
})();
