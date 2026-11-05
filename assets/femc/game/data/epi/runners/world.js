/* The Runners epilogue's world (FEMC-EPILOGUE-PLAN.md section 3). Batch 3 (2026-10-28): the real world for weeks 1-2
   (12/1-12/14); batch 4 (2026-10-28) adds week 3 (12/15-12/20) and the act's end in story-w3.js and people-w3.js. Loaded on demand by epilogue.js after calendar.js;
   every file in this folder merges into FEMC_EPI_WORLDS.runners (none overwrites another's lists), so load order doesn't matter:
     world.js      this file: title, money, routes, places (bg rules, home / school, activities, music), practice, variants, cast
     glitches.js   the glitch schedule and pools          people.js   home bonds (R.bonds) and texts (R.texts)
     story-w1.js   week 1's story events (12/1-12/7)      story-w2.js week 2's story events (12/9-12/14) and routines
     story-w3.js   week 3 and the final (12/14 late-12/20) people-w3.js week 3's hangouts, routines and texts
   Shape (epilogue.js documents each field):
     title       the end card's "EPILOGUE · title" (still the place name until Kat names it)
     money       the wallet in this world: { code, sign, start, locale } (yen stays with the year)
     routes      first match wins for the lean (from: romance / xmas / ranks / flags in the year), the last is the default;
                 open: who can pick it at the crossroads (lean: the year leans this way; bond: closeness at least n;
                 noFlag: flags that close it). lockAfter: the night the route locks, P5R-style (the 12/7 crossroads)
     places      bg rules (places.js shape: [place prefix, day image, evening image]; more specific first), weatherFx, home /
                 school (the morning and late screens), activities (Go Out: { id, name, place, bg, slots, days, cost, stats,
                 text }), music (moods for this world: the epi-r-* moods, Kat's song picks, below)
     practice    the team's practice days (After Class is practice, not Go Out): { days, slot, from, to, skip, place, bg, stats }
     variants    lines for the day screens (core.js vary(): morning.school / .off / .exam, late, stayIn, practice)
     cast        names for speakers without a link of their own (scene names; no portraits yet: FEMC-ART-TODO)
     events / routines / bonds / texts   in the story and people files
   Snow days (Nov 3 2026, Kat: more realism; invented, no story change): seven `variants` lines tagged { weather: ['snow'] }
   (morning school x2 / off / exam, practice, late, stayIn: the lake-effect walk, FINALS in the car frost, Hanni on the porch,
   the library line, Doyoung's cold hands, the sill, the street erased) and places.snowDay.note for the phone's forecast.
   Places that don't have their own art yet borrow the nearest existing background (FEMC-ART-TODO "The epilogue: Runners"
   lists the real ones; FEMC-ART-WIRING says which rule each replaces). */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).runners ||= {});
  delete R.stub;
  Object.assign(R, {
    title: 'Syracuse',
    // The Equinox card after the act (epilogue.js finish; batch 9): `line` under the title, a route's own line in its place,
    // and one line per other world (where someone is holding a gap; the private plan §8).
    equinox: { line: 'Every universe.', routes: { haechan: 'He said every world. He meant this one first.', minji: 'Somewhere, a camera is still rolling.', cover: 'Two hands held hers before his did.' },
      echoes: [
        'Incheon · Yunjin wakes on a bedroom floor that isn’t hers, one hand closed on nothing.',
        'Hanlim · At 2 a.m., Cherry’s phone opens an old group chat by itself.',
        'Iwatodai · A room in the dorm is still made up. At midnight, its light comes on.'
      ] },
    money: { code: 'USD', sign: '$', start: 200, locale: 'en-US' },
    routes: [
      { id: 'haechan', name: 'Haechan', from: { romance: ['haechan'], xmas: ['haechan'] }, open: { lean: true, bond: { haechan: 4 }, noFlag: ['epi-r-stem-deleted'] } },
      { id: 'minji', name: 'Minji', from: { romance: ['minji'], xmas: ['minji'] }, open: { lean: true, bond: { minji: 4 } } },
      { id: 'cover', name: 'The cover', open: { always: true } }
    ],
    lockAfter: '12/7',
    // The time pass (C1): quiet nights where Late Night lists people with a `slots: ['late']` hangout, above Sleep (epilogue.js
    // late()). Not 12/5 (the night before Regionals), 12/6 (Regionals), fight nights or nights with a late story scene.
    lateOpen: ['12/3', '12/8', '12/9', '12/10', '12/11', '12/12', '12/13', '12/15', '12/17',
      '12/22', '12/23', '12/25', '12/26', '12/29', '12/30'], // Manhattan's quiet nights (the Manhattan pass, Nov 5 2026)
    places: {
      bg: [
        ['Syracuse · Alpha Phi House · Her Room', 'epi-r-her-room', 'epi-r-her-room-night'],   // batch 77
        ["Syracuse · Alpha Phi House · Hanni and Hyein's Room", 'epi-r-hanni-hyein-room', 'epi-r-hanni-hyein-room'], // batch 77: fairy-lit dusk, both slots
        ['Syracuse · Alpha Phi House · Kitchen', 'epi-r-alpha-kitchen', null],
        // The stairs are indoors (the house's own art is outside, in the snow); batch 77: the second landing, day and night.
        ['Syracuse · Alpha Phi House · Stairs', 'epi-r-alpha-landing', 'epi-r-alpha-landing-night'],
        // Stand-ins (Nov 3): each copies the rule below it until its art comes (FEMC-ART-TODO 23; FEMC-ART-WIRING "23").
        ['Syracuse · Alpha Phi House · Living Room', 'epi-r-alpha-living', 'epi-r-alpha-living'],  // Kat's art, Nov 4 (lamp-lit; both slots)
        ['Syracuse · Alpha Phi House · Dining Room', 'epi-r-alpha-living', 'epi-r-alpha-living'],  // the same room (both slots)
        ['Syracuse · Alpha Phi House · Porch', 'flashback-alphaphi-house', null],  // stand-in → epi-r-alpha-porch-night (FEMC-ART-TODO 23L; home pass, epi-r-porch)
        ['Syracuse · Alpha Phi House', 'flashback-alphaphi-house', null],
        ['Syracuse · Sigma Chi House · Holiday Party', 'epi-r-sigma-holiday', 'epi-r-sigma-holiday'],
        ['Syracuse · Sigma Chi House · Kitchen', 'epi-r-sigma-kitchen', null],
        ['Syracuse · Sigma Chi House · His Room', 'epi-r-sigma-his-room', 'epi-r-sigma-his-room'], // batch 77: night art, both slots
        ['Syracuse · Sigma Chi House · Living Room', 'flashback-frat-party', null],       // stand-in → epi-r-sigma-living (day; evening null)
        ['Syracuse · Sigma Chi House · Back Porch', 'flashback-frat-party', null],        // stand-in → epi-r-sigma-porch (day; evening null)
        ['Syracuse · Sigma Chi House', 'flashback-frat-party', null],
        ['Syracuse · The Quad', 'epi-r-quad-day', 'flashback-syracuse-quad'],
        ['Syracuse · The Valley', 'epi-r-valley', null],
        ['Syracuse · Football Complex', 'epi-r-football', 'epi-r-football'],
        ['Syracuse · Marshall Street · Café', 'epi-r-marshall-cafe', null],
        ['Syracuse · Marshall Street', 'epi-r-marshall-st', 'epi-r-marshall-st'],
        ['Syracuse · Bird Library', 'epi-r-bird-library', null],
        ['Syracuse · Lecture Hall', 'epi-r-lecture-hall', null],
        ['Syracuse · Archbold Gym', 'epi-r-lecture-hall', null],  // stand-in → epi-r-finals-gym (FEMC-ART-TODO 23M; home pass, epi-r-last-final)
        ['Syracuse · Hall of Languages', 'epi-r-music-room', 'epi-r-music-room'],
        ['Syracuse · Honors Dorm', 'epi-r-minji-room', 'epi-r-minji-room'],
        ['Syracuse · eSports Lab', 'epi-r-esports-lab', null],
        ['Syracuse · Studio 4B · Hallway', 'epi-r-studio-stairs', 'epi-r-studio-stairs'],     // batch 77: the back stairs, night-lit, both slots
        ['Syracuse · Studio 4B', 'epi-r-studio-4b', null],
        ['Syracuse · Language Arts Rooftop · Snow', 'epi-r-rooftop-night-snow', 'epi-r-rooftop-night-snow'],
        ['Syracuse · Language Arts Rooftop', 'epi-r-rooftop-night', 'epi-r-rooftop-night'],
        ['Syracuse · Regionals · Green Room', 'epi-r-regionals-green-room', 'epi-r-regionals-green-room'],  // Kat's art, Nov 4 (windowless)
        ['Syracuse · Regionals · The Van', 'epi-r-regionals-van', 'epi-r-regionals-van'],  // Kat's art, Nov 4 (night)
        ['Syracuse · Regionals · Loading Dock', 'epi-r-regionals-dock', null],  // Kat's art, Nov 4 (day; dims in the evening)
        ['Syracuse · Regionals · After the Final', 'epi-r-regionals-after', 'epi-r-regionals-after'],  // Kat's art, Nov 4 (house lights)
        ['Syracuse · Regionals', 'epi-r-regionals', null],
        // The Manhattan pass (Nov 5 2026): every place borrows a picture until its own art comes (FEMC-ART-TODO 33; FEMC-ART-WIRING "33").
        ['Syracuse · The Car', 'epi-s-car', 'epi-s-car-night'],                         // → epi-r-car (33M)
        ['Manhattan · The Lee Apartment · Her Room', 'elegant-bedroom', 'elegant-bedroom'], // → epi-r-nyc-her-room (33E)
        ['Manhattan · The Lee Apartment · Kitchen', 'epi-s-lee-kitchen', 'epi-s-lee-kitchen'], // → epi-r-nyc-kitchen (33D)
        ['Manhattan · The Lee Apartment · Living Room', 'kirijo-flat', 'kirijo-flat'],    // → epi-r-nyc-living (33C, the piano)
        ['Manhattan · The Lee Apartment · Dining Room', 'epi-s-dining-room', 'epi-s-dining-room'], // → epi-r-nyc-dining (33F)
        ['Manhattan · The Lee Apartment · Hall', 'epi-s-study', 'epi-s-study'],          // → epi-r-nyc-hall (33G, the photos)
        ['Manhattan · The Lee Apartment · Study', 'epi-s-study', 'epi-s-study'],         // → epi-r-nyc-hall (33G)
        ['Manhattan · The Lee Apartment · Roof Terrace', 'rooftop-citynight', 'rooftop-citynight'], // → epi-r-nyc-terrace (33H)
        ['Manhattan · The Lee Apartment', 'kirijo-flat', 'kirijo-flat'],
        ['Manhattan · The Building · Lobby', 'hotel-lobby', 'hotel-lobby'],              // → epi-r-nyc-lobby (33A)
        ['Manhattan · The Building · Service Elevator', 'hotel-lobby', 'hotel-lobby'],   // → epi-r-nyc-service (33B)
        ['Manhattan · Lee Foundation Reception', 'hotel-lobby', 'hotel-lobby'],          // → epi-r-nyc-reception (33L)
        ['Manhattan · Upper East Side', 'outside-daytime-neighborhood', 'outside-night'], // → epi-r-nyc-street / -street-night (33I)
        ['Manhattan · Her Old School', 'outside-school', 'outside-school'],             // → epi-r-nyc-school (33J)
        ['Manhattan · Central Park', 'park-2-winter', 'park-2-winter'],                  // → epi-r-nyc-park (33K)
        ['Manhattan · Madison Avenue · Café', 'chagall-cafe-inside', 'chagall-cafe-inside'],
        ['Manhattan · Penn Station', 'station-concourse-busy', 'station-concourse-evening'], // → epi-r-nyc-penn (33N)
        ['Manhattan · Subway', 'subway-populated', 'subway'],                            // → epi-r-nyc-subway (33O)
        ['Manhattan', 'outside-daytime-neighborhood', 'outside-night'],
        ['Syracuse', 'flashback-syracuse-quad', null]
      ],
      weatherFx: { outdoor: ['epi-r-valley', 'epi-r-football', 'flashback-syracuse-quad', 'flashback-alphaphi-house', 'epi-r-rooftop-night', 'epi-r-rooftop-night-snow', 'epi-r-quad-day', 'epi-r-marshall-st',
        'epi-r-regionals-dock', 'epi-r-sigma-porch'], sealed: [],
        // '$': that image only (weather.js), so the Regionals hall (and the stand-ins on it) show nothing but its loading dock snows.
        none: ['epi-r-regionals$', 'epi-r-regionals-green-room', 'epi-r-regionals-van', 'epi-r-regionals-after'] },
      // The phone forecast's note on a snow day (ui.js forecastHtml; Nov 3 2026).
      snowDay: { note: 'Lake-effect snow off Ontario. The paths are salted. The hill is not.' },
      home: { place: 'Syracuse · Alpha Phi House · Her Room', bg: 'epi-r-her-room',
        // The home screen by time of day (Nov 3 2026; epilogue.js homeView, FEMC-ART-TODO 23I-23K): a slug shows once it's in
        // viewsReady (its art in assets/femc/bg); until then the screen keeps `bg`, dimmed in the evening and at night.
        views: { day: 'epi-r-home-day', evening: 'epi-r-home-evening', night: 'epi-r-home-night' }, viewsReady: [] },
      school: { place: 'Syracuse · The Quad', bg: 'epi-r-quad-day' },
      // The Manhattan pass (Nov 5 2026; epilogue.js phaseNow): from 12/21 the home screen is her room in the Lee apartment, the
      // place name Manhattan, no school, and the day screens read variants.nyc first.
      phases: [{ from: '12/21', name: 'Manhattan', school: null, variants: 'nyc',
        home: { place: 'Manhattan · The Lee Apartment · Her Room', bg: 'elegant-bedroom' } }],
      activities: [
        { id: 'epi-r-coffee', until: '12/20', name: 'Coffee on Marshall Street', place: 'Syracuse · Marshall Street · Café', bg: 'epi-r-marshall-cafe', slots: ['after', 'evening'], cost: 7, stats: { charm: 1 },
          text: "A corner table, a coffee she let go cold, and a whole street of people who had no idea where she'd been." },
        { id: 'epi-r-library', until: '12/20', name: 'Study at Bird Library', place: 'Syracuse · Bird Library', bg: 'epi-r-bird-library', slots: ['after', 'evening'], cost: 0, stats: { knowledge: 1 },
          text: "Three hours in a carrel with a syllabus that had kept going without her. She caught up on most of it." },
        { id: 'epi-r-vod', until: '12/20', name: 'VOD review in the lab', place: 'Syracuse · eSports Lab', bg: 'epi-r-esports-lab', slots: ['after', 'evening'], cost: 0, stats: { proficiency: 1 },
          text: "Headphones on, the lab empty except for the hum, her own Kiriko on the screen at quarter speed, every cleanse she'd been half a second late on. There were fewer than there used to be. A year of reading a room in the dark did that." },
        { id: 'epi-r-books', until: '12/20', name: 'The used bookstore', place: 'Syracuse · Marshall Street', bg: 'epi-r-marshall-st', slots: ['after'], cost: 12, stats: { knowledge: 1, kindness: 1 },
          text: "The bookstore on Marshall Street smelled like radiator heat and old paper. She came out with a paperback nobody had assigned her and a bag she'd let the man behind the counter talk her into, because he'd seemed so sure." },
        { id: 'epi-r-valley', until: '12/20', name: 'Walk through the valley', place: 'Syracuse · The Valley', bg: 'epi-r-valley', slots: ['after'], cost: 0, stats: { courage: 1 },
          text: "By daylight the valley was just grass under snow, crossed and recrossed by a thousand people on their way to somewhere else. She walked it anyway, slow, all the way past the tree that leaned too far to the right, and didn't stop." },
        { id: 'epi-r-dining', until: '12/20', name: 'Late dinner at the dining hall', place: 'Syracuse · Dining Hall', bg: 'epi-r-marshall-cafe', slots: ['evening'], cost: 9, stats: { kindness: 1, charm: 1 }, // stand-in bg → epi-r-dining-hall (FEMC-ART-TODO 23H); slots / cost / stats were inside this comment until Nov 5
          text: "A tray, a table by the window, and a freshman she half recognised who sat down across from her because every other seat was taken and then talked for forty minutes about a lab partner. She let him. It was nice to be the one listening." },
        // Manhattan (the Manhattan pass, Nov 5 2026): from 12/21 (winter break, so every day is a day off).
        { id: 'epi-r-nyc-coffee', from: '12/21', name: 'Coffee on Madison', place: 'Manhattan · Madison Avenue · Café', bg: 'chagall-cafe-inside', slots: ['after', 'evening'], cost: 9, stats: { charm: 1 },
          text: "A café on Madison where a latte cost nine dollars and came with a cookie nobody asked for. She sat in the window and watched the Upper East Side walk its dogs in coats that matched the dogs' coats, and nobody looked twice at her, which here was the whole point of the neighborhood." },
        { id: 'epi-r-nyc-park', from: '12/21', name: 'Walk in Central Park', place: 'Manhattan · Central Park', bg: 'park-2-winter', slots: ['after'], cost: 0, stats: { courage: 1 },
          text: "The park in late December was all bare branches and joggers who'd made it a personality. She walked the reservoir loop with her hands in her pockets and the skyline going gray behind the trees, and it was the first time in a week she'd been somewhere big enough to feel small in." },
        { id: 'epi-r-nyc-books', from: '12/21', name: 'The bookstore on Lexington', place: 'Manhattan · Upper East Side', bg: 'bookworms-inside', slots: ['after'], cost: 18, stats: { knowledge: 1 },
          text: "The bookstore on Lexington had a cat, a radiator, and a man behind the counter who'd sold her her first Agatha Christie at nine and didn't remember her at all. She bought a paperback anyway. She didn't tell him." },
        { id: 'epi-r-nyc-subway', from: '12/21', name: 'Ride the subway downtown', place: 'Manhattan · Subway', bg: 'subway-populated', slots: ['after', 'evening'], cost: 3, stats: { courage: 1, kindness: 1 },
          text: "The 6 downtown and back, for no reason, because she'd never once been allowed to take it alone as a kid and she could now. A man played a saw at Union Square. She gave him five dollars she'd meant to spend on something else and didn't regret it." },
        { id: 'epi-r-nyc-games', from: '12/21', name: 'Queue from her old desk', place: 'Manhattan · The Lee Apartment · Her Room', bg: 'elegant-bedroom', slots: ['evening'], cost: 0, stats: { proficiency: 1 },
          text: "Her old desk, her old chair, a laptop on a stack of school yearbooks and a ranked queue at midnight on the East Coast server. She played four games as Kiriko in the room where she'd first learned the game existed. She won three. The fourth, she'd say later, was the tank's fault." }
      ],
      /* ♪ MUSIC: Kat's song picks (FEMC-EPILOGUE-PLAN.md, revision 1); an epi-r-* mood still marked ♪ PLACEHOLDER plays a stand-in P3 track. To set one,
         replace its value with a file in assets/femc/music/ (no extension) or an 'assets/audio/…' path, like world-runners. */
      // The everyday screens (morning, Go Out, evening, late) play this world's own songs, never the Persona tracks (Kat, 2026-10-30).
      screens: { school: 'epi-r-day', class: 'epi-r-day', after: 'epi-r-day', evening: 'epi-r-evening', dorm: 'epi-r-late' },
      music: {
        'epi-r-day': ['ring-ring', 'tip-toe', 'boyfriend', 'that-way', 'assets/audio/Camo-Runners.mp3'], // the everyday screens by day (the theme comes round last, so it doesn't follow the opening)
        'epi-r-evening': ['affection', 'wantchu', 'you-nct-dream', 'past-life', 'assets/audio/Camo-Runners.mp3'], // evenings
        'epi-r-late': ['wyn', 'grey-rain', 'assets/audio/rose-3am.mp3', 'nowhere-nobody'], // late nights
        'epi-r-home': 'ring-ring', // the first morning back (soft, home, snow)
        'epi-r-team': ['cashy', 'dollar-bratz'], // the lab, practice, the team's week (Wish by Camo isn't in the folder yet)
        'epi-r-confession': 'grey-rain', // the recording confession (tension, nothing pretty)
        'epi-r-moon': 'black-out-days', // the full moon that passes (12/4)
        'epi-r-party': ['heaven-and-back', 'twenty-three', 'yummy', 'self-destruct'], // Sigma's Friday parties
        'epi-r-regionals': ['miss-the-rage', 'cashy', 'dollar-bratz', 'we-r-who-we-r'], // Regionals, arrival and the opening bracket
        'epi-r-match': ['lights-out', 'miss-the-rage'], // the hard middle and the final
        'epi-r-closure': 'affection', // Minji's closure
        'epi-r-studio': 'not-enough', // the studio, on her terms
        'epi-r-danielle': 'you-chase-atlantic', // Danielle (the threat)
        'epi-r-romance': ['assets/audio/chanmina-ashell.mp3', 'wantchu'], // Haechan, when it's warm
        'epi-r-sisters': 'boyfriend', // the girls, the cover
        // Week 3 (batch 4):
        'epi-r-finals': 'assets/audio/rose-3am.mp3', // finals week, the snow that goes up
        'epi-r-verdict': 'past-life', // Mark's verdict (the Sigma kitchen, the back porch)
        'epi-r-bleed': 'nowhere-nobody', // week 3's dread: the butterfly, the stopped clocks
        'epi-r-half': 'nothing-could-break-me', // the half-present pulls (around the four fights) and the pull itself
        'epi-r-holiday': ['bad-idea', 'that-way', 'tia-tamera', 'kill-the-lights'], // the Sigma holiday party (12/19)
        'epi-r-footage': 'you-nct-dream', // Danielle's footage, two in the morning
        'epi-r-snow': 'tip-toe', // the first snow, the last morning
        // Revision 1's own moods:
        'epi-r-return': 'novocaine',           // queen Solar's back: 12/1, her first afternoon on campus (epi-r-five-days)
        'epi-r-faceoff': ['pretty-girls', 'lonely-at-the-top'], // Danielle, the face-off: the print on the second landing (12/11)
        'epi-r-spice': ['shut-me-up', 'cyber-sex'] // the spice scenes: the side gate (Haechan 3), the studio kiss
        // The rooftop final plays world-runners (Kat's pick, the world's own song).
      }
    },
    // The team's practices (Mon/Tue/Thu/Sat; Doyoung gives them Monday 12/8 after Regionals). A story event or routine in that
    // slot comes first; an event that consumes the slot means no practice that day.
    // The time pass (Nov 5 2026, FEMC-RUNNERS-EPI-EXPANSION C3): after Regionals, 12/9 and 12/13 are optional (a choice in Go Out:
    // practice for the stat, or see someone). The 20th's practice is the story event epi-r-last-practice (story-time.js).
    practice: { days: [1, 2, 4, 6], slot: 'after', from: '12/1', to: '12/20', skip: ['12/6', '12/8'], optional: ['12/9', '12/13'], place: 'Syracuse · eSports Lab', bg: 'epi-r-esports-lab', stats: { proficiency: 1 }, title: 'Practice' },
    cast: {
      doyoung: 'Doyoung', olivia: 'Olivia', haerin: 'Haerin', jeno: 'Jeno', renjun: 'Renjun', johnny: 'Johnny', jisung: 'Jisung',
      yerim: 'Yerim', chungha: 'Chungha', chaeyeon: 'Chaeyeon', sakura: 'Sakura', eunchae: 'Eunchae', kazuha: 'Kazuha', chaewon: 'Chaewon',
      dad: 'Dad', han: 'Ms. Han', mom: 'Mom', caster: 'Caster', suesports: '@SUesports', suanon: 'SUanon',
      // The Manhattan pass (Nov 5 2026): minor voices, no portraits (shown by name only). Parties: Alpha (sophie, grace: the
      // seniors; tess, nora: Danielle's friends; ellie: the pledge), Sigma (kai: the playlist), students (dev: saw her Kiriko;
      // maya, priya: Media and Society; tyler, marcus: Jaehyun's teammates; bree: wants a session), the alum (whitfield).
      // Manhattan: marco (the front desk), mrsoh (the housekeeper), mrkwon / mrskwon (Christmas Eve), velvet (the reception's
      // nine-year-old), reporter, kaplan (the parents' New Year's Eve hosts).
      sophie: 'Sophie', grace: 'Grace', tess: 'Tess', nora: 'Nora', ellie: 'Ellie', kai: 'Kai', dev: 'Dev', maya: 'Maya', priya: 'Priya',
      tyler: 'Tyler', marcus: 'Marcus', bree: 'Bree', whitfield: 'Mrs. Whitfield',
      marco: 'Marco', mrsoh: 'Mrs. Oh', mrkwon: 'Mr. Kwon', mrskwon: 'Mrs. Kwon', velvet: 'Girl in velvet', reporter: 'Reporter', kaplan: 'Mrs. Kaplan', theo: 'Theo'
    },
    // This world's own faces (core.js worldFace): Solar's home look and the outfits drawn for Runners (FEMC-ART-WIRING).
    faces: { solar: 'solar-runners', sakura: 'sakura-runners', eunchae: 'eunchae-runners', kazuha: 'kazuha-runners', chaewon: 'chaewon-runners', haechan: 'haechan-runners',
      // Kat's realistic-style Runners set (batch 95): Runners-only, so the main game keeps their year faces.
      mark: 'mark-runners', minji: 'minji-runners', hanni: 'hanni-runners', hyein: 'hyein-runners', danielle: 'danielle-runners', jaemin: 'jaemin-runners',
      doyoung: 'doyoung-runners', olivia: 'olivia-runners', haerin: 'haerin-runners', chenle: 'chenle-runners', jaehyun: 'jaehyun-runners', jeno: 'jeno-runners',
      dad: 'jaesang-runners', mom: 'solji-runners',
      jisung: 'jisung-runners', renjun: 'renjun-runners', yerim: 'yerim-runners' }, // Solar's parents, Jaesang and Solji
    // Event outfits (core.js eventFaces; FEMC-ART-WIRING "Extras"): an event's `faces: '<key>'` swaps these in for its scenes only.
    // Kat's realistic Runners outfits (batch 102), back from the parked list in the new style; Jisung's sweater is new.
    eventFaces: {
      'runners-holiday': { solar: 'solar-runners-holiday', haechan: 'haechan-runners-holiday', hanni: 'hanni-runners-holiday', hyein: 'hyein-runners-holiday',
        minji: 'minji-runners-holiday', mark: 'mark-runners-holiday', jaehyun: 'jaehyun-runners-holiday', chenle: 'chenle-runners-holiday',
        jaemin: 'jaemin-runners-holiday', danielle: 'danielle-runners-holiday', jisung: 'jisung-runners-holiday' }, // epi-r-holiday (12/19, the Sigma party)
      'runners-regionals': { solar: 'solar-runners-regionals', minji: 'minji-runners-regionals', olivia: 'olivia-runners-regionals', haerin: 'haerin-runners-regionals',
        chenle: 'chenle-runners-regionals' } // epi-r-regionals-1 / -2 (12/6-12/7)
    },
    variants: {
      // Manhattan (the Manhattan pass; epilogue.js line() reads nyc.<path> first once places.phases' Manhattan phase starts).
      nyc: {
        morning: {
          off: ["Morning on the eleventh floor. Mrs. Oh's radio in the kitchen, the radiators doing nothing because the building ran on a system nobody had explained to her in eighteen years, and four hundred windows across the street, most of them still dark.",
            "She woke up and didn't know which ceiling it was for a second. Then the light told her: gray, high, Fifth Avenue light, the park a rumor at the end of the street.",
            { weather: ['snow'], t: "Snow on the terrace planters and on the park, the city gone quiet under it the way only a city that never was quiet could. Somebody on the street below was already shoveling, rhythmically, like a heartbeat." }]
        },
        late: ["Late. The apartment ticked and settled around her, eleven rooms of it, every one of them dark but hers.",
          "The building at night: an elevator somewhere going up, the hum of a city that didn't believe in sleep, and her phone face down on the window seat, lit every few minutes from underneath."],
        stayIn: ["She stayed in. The apartment was big enough to be alone in three different ways, and she tried two of them.",
          "She stayed in her room with the door shut and the curtains open, the way she always had, the building across the street doing its four hundred small lives in its windows."]
      },
      morning: {
        school: ["Class at nine. The quad was salted into gray paths, and everyone she passed looked like they'd slept four hours, which was December's whole look.",
          "Morning. Snow on the steps, a line out the door of the coffee cart, and a lecture hall that smelled like wet coats.",
          "Media and Society, then a walk across the quad with her hood up. The bell tower said a time she didn't believe. She checked her phone anyway. Twice.",
          { weather: ['snow'], t: "Lake-effect again. The snow came in off the lake sideways, and the walk to class was one long argument between the plows and everybody's boots. She lost it twice before she got to class." },
          { weather: ['snow'], t: "Fresh snow over yesterday's gray. Somebody had written FINALS in the frost on every car on Walnut, which was either a prank or a cry for help." }],
        off: ["No class. The house slept late, the radiators knocking like they had somewhere to be.",
          "A weekend morning. Somebody downstairs was making pancakes, badly, and narrating it.",
          { weather: ['snow'], t: "No class, and no plows yet. Walnut was one smooth white sheet, and Hanni was on the porch in pajamas and snow boots announcing to nobody that she was going to build something." }],
        exam: ["Finals. The whole campus walked like it was carrying something heavy and trying not to show it.",
          { weather: ['snow'], t: "Finals, in the snow. A line of people outside the library before it opened, everyone's breath going up in front of them like small engines." }]
      },
      practice: ["Practice. Doyoung's clipboard, Olivia's laugh a full second before anyone else's, Haerin saying nothing and hitting every shot, Minji's cap backwards. Scrims until her wrists ached. She made her calls and they listened.",
        "Practice ran long. Two scrims, one VOD, and Doyoung's voice going flat on the third mistake, which was worse than shouting. Chenle wrote something down every time she cleansed. She didn't ask what.",
        "The lab, the hum, the blue light. She played like someone who'd spent a year learning when to step in front of a hit, which, she supposed, she had.",
        { weather: ['snow'], t: "Practice, with coats steaming on the backs of the chairs and snow melting into gray puddles under the desks. \"Your hands'll warm up,\" Doyoung said, \"or you'll learn to play cold.\" Both happened." }],
      late: ["The house went quiet in pieces: a door, a shower, music through the wall, then nothing.",
        "Late. Snow ticking at the window, her phone face down on the desk, the house asleep around her.",
        { weather: ['snow'], t: "Late. Snow piling up silent on the sill, the window gone white at the corners, the radiator pretending it could keep up." },
        "The radiator knocked twice and settled. Somewhere downstairs a door at the end of the second landing closed, softly, the way you close a door when you want people to know you're being quiet."],
      stayIn: ["She stayed in. Blanket, desk lamp, the radiator, and nobody asking her anything.",
        { weather: ['snow'], t: "She stayed in. Outside, the snow was erasing the street one car at a time, and she let it." }]
    }
  });
  // The story, people and routine files push into these; never replace them here.
  R.events ||= []; R.routines ||= []; R.bonds ||= {}; R.links ||= {};
})();
