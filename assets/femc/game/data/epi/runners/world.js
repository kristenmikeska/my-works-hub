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
    places: {
      bg: [
        ['Syracuse · Alpha Phi House · Her Room', 'epi-r-her-room', 'epi-r-her-room-night'],   // batch 77
        ["Syracuse · Alpha Phi House · Hanni and Hyein's Room", 'epi-r-hanni-hyein-room', 'epi-r-hanni-hyein-room'], // batch 77: fairy-lit dusk, both slots
        ['Syracuse · Alpha Phi House · Kitchen', 'epi-r-alpha-kitchen', null],
        // The stairs are indoors (the house's own art is outside, in the snow); batch 77: the second landing, day and night.
        ['Syracuse · Alpha Phi House · Stairs', 'epi-r-alpha-landing', 'epi-r-alpha-landing-night'],
        ['Syracuse · Alpha Phi House', 'flashback-alphaphi-house', null],
        ['Syracuse · Sigma Chi House · Holiday Party', 'epi-r-sigma-holiday', 'epi-r-sigma-holiday'],
        ['Syracuse · Sigma Chi House · Kitchen', 'epi-r-sigma-kitchen', null],
        ['Syracuse · Sigma Chi House · His Room', 'epi-r-sigma-his-room', 'epi-r-sigma-his-room'], // batch 77: night art, both slots
        ['Syracuse · Sigma Chi House', 'flashback-frat-party', null],
        ['Syracuse · The Quad', 'epi-r-quad-day', 'flashback-syracuse-quad'],
        ['Syracuse · The Valley', 'flashback-syracuse-quad', null],
        ['Syracuse · Football Complex', 'flashback-syracuse-quad', null],
        ['Syracuse · Marshall Street · Café', 'chagall-cafe-inside', null],
        ['Syracuse · Marshall Street', 'epi-r-marshall-st', 'epi-r-marshall-st'],
        ['Syracuse · Bird Library', 'school-library', null],
        ['Syracuse · Lecture Hall', 'epi-r-lecture-hall', null],
        ['Syracuse · Hall of Languages', 'gekkoukan-classroom-day', 'gekkoukan-classroom-evening'],
        ['Syracuse · Honors Dorm', 'green-bedroom', null],
        ['Syracuse · eSports Lab', 'epi-r-esports-lab', null],
        ['Syracuse · Studio 4B · Hallway', 'epi-r-studio-stairs', 'epi-r-studio-stairs'],     // batch 77: the back stairs, night-lit, both slots
        ['Syracuse · Studio 4B', 'epi-r-studio-4b', null],
        ['Syracuse · Language Arts Rooftop · Snow', 'epi-r-rooftop-night-snow', 'epi-r-rooftop-night-snow'],
        ['Syracuse · Language Arts Rooftop', 'epi-r-rooftop-night', 'epi-r-rooftop-night'],
        ['Syracuse · Regionals', 'epi-r-regionals', null],
        ['Syracuse', 'flashback-syracuse-quad', null]
      ],
      weatherFx: { outdoor: ['flashback-syracuse-quad', 'flashback-alphaphi-house', 'epi-r-rooftop-night', 'epi-r-rooftop-night-snow', 'epi-r-quad-day', 'epi-r-marshall-st'], sealed: [], none: ['epi-r-regionals'] },
      home: { place: 'Syracuse · Alpha Phi House · Her Room', bg: 'epi-r-her-room' },
      school: { place: 'Syracuse · The Quad', bg: 'epi-r-quad-day' },
      activities: [
        { id: 'epi-r-coffee', name: 'Coffee on Marshall Street', place: 'Syracuse · Marshall Street · Café', bg: 'chagall-cafe-inside', slots: ['after', 'evening'], cost: 7, stats: { charm: 1 },
          text: "A corner table, a coffee she let go cold, and a whole street of people who had no idea where she'd been." },
        { id: 'epi-r-library', name: 'Study at Bird Library', place: 'Syracuse · Bird Library', bg: 'school-library', slots: ['after', 'evening'], cost: 0, stats: { knowledge: 1 },
          text: "Three hours in a carrel with a syllabus that had kept going without her. She caught up on most of it." },
        { id: 'epi-r-vod', name: 'VOD review in the lab', place: 'Syracuse · eSports Lab', bg: 'epi-r-esports-lab', slots: ['after', 'evening'], cost: 0, stats: { proficiency: 1 },
          text: "Headphones on, the lab empty except for the hum, her own Kiriko on the screen at quarter speed, every cleanse she'd been half a second late on. There were fewer than there used to be. A year of reading a room in the dark did that." },
        { id: 'epi-r-books', name: 'The used bookstore', place: 'Syracuse · Marshall Street', bg: 'epi-r-marshall-st', slots: ['after'], cost: 12, stats: { knowledge: 1, kindness: 1 },
          text: "The bookstore on Marshall Street smelled like radiator heat and old paper. She came out with a paperback nobody had assigned her and a bag she'd let the man behind the counter talk her into, because he'd seemed so sure." },
        { id: 'epi-r-valley', name: 'Walk through the valley', place: 'Syracuse · The Valley', bg: 'flashback-syracuse-quad', slots: ['after'], cost: 0, stats: { courage: 1 },
          text: "By daylight the valley was just grass under snow, crossed and recrossed by a thousand people on their way to somewhere else. She walked it anyway, slow, all the way past the tree that leaned too far to the right, and didn't stop." },
        { id: 'epi-r-dining', name: 'Late dinner at the dining hall', place: 'Syracuse · Marshall Street · Café', bg: 'chagall-cafe-inside', slots: ['evening'], cost: 9, stats: { kindness: 1, charm: 1 },
          text: "A tray, a table by the window, and a freshman she half recognised who sat down across from her because every other seat was taken and then talked for forty minutes about a lab partner. She let him. It was nice to be the one listening." }
      ],
      /* ♪ MUSIC: Kat's song picks (FEMC-EPILOGUE-PLAN.md, revision 1); an epi-r-* mood still marked ♪ PLACEHOLDER plays a stand-in P3 track. To set one,
         replace its value with a file in assets/femc/music/ (no extension) or an 'assets/audio/…' path, like world-runners. */
      music: {
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
    practice: { days: [1, 2, 4, 6], slot: 'after', from: '12/1', to: '12/20', skip: ['12/6', '12/8'], place: 'Syracuse · eSports Lab', bg: 'epi-r-esports-lab', stats: { proficiency: 1 }, title: 'Practice' },
    cast: {
      doyoung: 'Doyoung', olivia: 'Olivia', haerin: 'Haerin', jeno: 'Jeno', renjun: 'Renjun', johnny: 'Johnny', jisung: 'Jisung',
      yerim: 'Yerim', chungha: 'Chungha', chaeyeon: 'Chaeyeon', sakura: 'Sakura', eunchae: 'Eunchae', kazuha: 'Kazuha', chaewon: 'Chaewon',
      dad: 'Dad', mom: 'Mom', caster: 'Caster', suesports: '@SUesports'
    },
    // This world's own faces (core.js worldFace): Solar's home look and the outfits drawn for Runners (FEMC-ART-WIRING).
    faces: { solar: 'solar-runners', sakura: 'sakura-runners', eunchae: 'eunchae-runners', kazuha: 'kazuha-runners', chaewon: 'chaewon-runners' },
    variants: {
      morning: {
        school: ["Class at nine. The quad was salted into gray paths, and everyone she passed looked like they'd slept four hours, which was December's whole look.",
          "Morning. Snow on the steps, a line out the door of the coffee cart, and a lecture hall that smelled like wet coats.",
          "Media and Society, then a walk across the quad with her hood up. The bell tower said a time she didn't believe. She checked her phone anyway. Twice."],
        off: ["No class. The house slept late, the radiators knocking like they had somewhere to be.",
          "A weekend morning. Somebody downstairs was making pancakes, badly, and narrating it."],
        exam: ["Finals. The whole campus walked like it was carrying something heavy and trying not to show it."]
      },
      practice: ["Practice. Doyoung's clipboard, Olivia's laugh a full second before anyone else's, Haerin saying nothing and hitting every shot, Minji's cap backwards. Scrims until her wrists ached. She made her calls and they listened.",
        "Practice ran long. Two scrims, one VOD, and Doyoung's voice going flat on the third mistake, which was worse than shouting. Chenle wrote something down every time she cleansed. She didn't ask what.",
        "The lab, the hum, the blue light. She played like someone who'd spent a year learning when to step in front of a hit, which, she supposed, she had."],
      late: ["The house went quiet in pieces: a door, a shower, music through the wall, then nothing.",
        "Late. Snow ticking at the window, her phone face down on the desk, the house asleep around her.",
        "The radiator knocked twice and settled. Somewhere downstairs a door at the end of the second landing closed, softly, the way you close a door when you want people to know you're being quiet."],
      stayIn: ["She stayed in. Blanket, desk lamp, the radiator, and nobody asking her anything."]
    }
  });
  // The story, people and routine files push into these; never replace them here.
  R.events ||= []; R.routines ||= []; R.bonds ||= {}; R.links ||= {};
})();
