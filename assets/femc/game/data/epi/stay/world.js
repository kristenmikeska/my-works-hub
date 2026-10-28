/* The Stay epilogue's world (FEMC-EPILOGUE-PLAN.md 2.5 and section 6; epilogue batch 8, 2026-10-28): the reverse epilogue.
   Iwatodai is home now, and the signals come FROM the three worlds: dead threads from Syracuse, a call from a house by the
   sea, a Hanlim chat that renames itself, Haenim's three charms ringing. The four half-present fights run backwards: she's
   pulled into home places in the three worlds where the people there can't see her, and in the last one the ones who went
   home flicker into Iwatodai (battle.js EPI_WORLDS.stay; the party per fight is `fightParty` below, epilogue.js partyFor).
   Loaded on demand by epilogue.js; every file in this folder merges into FEMC_EPI_WORLDS.stay (none overwrites another's lists):
     calendar.js   3/24-4/6/2010, spring break          glitches.js  the reverse glitch schedule
     world.js      this file                              people.js    S.E.E.S. as home bonds, routines, texts (writer B)
     story.js      the sixteen story events (writer A)
   It's the cheapest world: Iwatodai's own places, people and art. `places.bg` is a few rules of its own (the searchers'
   rooms in the dorm, the three worlds' places the fights pull her into) in front of the main game's rules; the music moods
   and screens are the main game's plus the epi-st-* placeholders below. Shape: data/epi/runners/world.js's header. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).stay ||= {});
  const MAIN = window.FEMC_GAME_PLACES || { bg: [], weatherFx: { outdoor: [], sealed: [], none: [] } };
  Object.assign(R, {
    title: 'Iwatodai',
    // The Equinox card after the act (epilogue.js finish; batch 9): `line` under the title, a route's own line in its place,
    // and one line per other world (where someone is holding a gap; the private plan §8).
    equinox: { line: 'Every universe.', routes: { akihiko: 'He held on. Something still came loose.', shinjiro: 'One hand, as hard as it could.', sees: 'It took all of them. For now, it was enough.' },
      echoes: [
        'Syracuse · On a rooftop in the snow, a phone’s timer is still running.',
        'Incheon · The tide stops, once, and starts again.',
        'Hanlim · A boy checks his coat pocket for a can that isn’t there.'
      ] },
    // Yen, like the year (a separate wallet: the year's own yen is untouched while she's here).
    money: { code: 'JPY', sign: '¥', start: 20000, locale: 'ja-JP' },
    // The lean follows the ending's variant (Shinjiro first, as the ending decides it); the crossroads (3/28) can still turn it.
    routes: [
      { id: 'shinjiro', name: 'Shinjiro', from: { xmas: ['shinjiro'], flags: ['stay-shinjiro'] }, open: { lean: true, bond: { shinjiro: 4 } } }, // batch 9: 4, like Akihiko (it was 5)
      { id: 'akihiko', name: 'Akihiko', from: { xmas: ['akihiko'], flags: ['stay-akihiko'], romance: ['akihiko'] }, open: { lean: true, bond: { akihiko: 4 } } },
      { id: 'sees', name: 'S.E.E.S.', open: { always: true } }
    ],
    lockAfter: '3/28',
    // The half-present fights, reversed (epilogue.js partyFor): fight 1 alone in Syracuse; 2 with Haechan and Jungwon at the
    // harbor in Incheon (they can't see her); 3 with Jungwon and Jihoon in Hanlim's gym (they see her, can't hear her);
    // 4 at Iwatodai Station with Akihiko, and the two of them flickering in for one round. Shinjiro never fights.
    fightParty: { 1: ['solar'], 2: ['solar', 'haechan', 'jungwon'], 3: ['solar', 'jungwon', 'jihoon'], 4: ['solar', 'akihiko', 'haechan', 'jungwon'] },
    places: {
      bg: [
        ["Iwatodai Dorm · Haechan's Room", 'haechan-bedroom', null],
        ["Iwatodai Dorm · Hyein's Room", 'pink-bedroom-2', null],
        ["Iwatodai Dorm · Hanni's Room", 'pink-bedroom-2', null],
        ["Iwatodai Dorm · Yunjin's Room", 'pink-bedroom', null],
        // The three worlds (the fights pull her there; stand-ins until FEMC-ART-TODO's bleed battlefields exist).
        ['Syracuse · Studio 4B', 'epi-r-studio-4b', null],
        ['Syracuse', 'flashback-syracuse-quad', null],
        ['Incheon · Harbor', 'flashback-incheon-harbor', null],
        ['Incheon', 'flashback-incheon-harbor', null],
        ['Hanlim · School · Gym at Midnight', 'epi-h-gym-midnight', 'epi-h-gym-midnight'],
        ['Hanlim · School · Gym', 'flashback-hamlim-gym', null],
        ['Hanlim', 'flashback-hamlim-hallway', null],
        ...MAIN.bg
      ],
      weatherFx: MAIN.weatherFx,
      seasons: MAIN.seasons || {},
      home: { place: "Iwatodai Dorm · Solar's Room", bg: 'solar-dormroom-day' },
      school: { place: 'Iwatodai Dorm · Lounge', bg: 'iwatodaidorm-livingroom' },
      activities: [
        { id: 'epi-st-chagall', name: 'Coffee at Chagall Café', place: 'Paulownia Mall · Chagall Café', bg: 'chagall-cafe-inside', slots: ['after', 'evening'], cost: 600, stats: { charm: 1 },
          text: "A window seat, a Pheromone Coffee she didn't trust, and the mall going by outside in its spring clothes. Nobody here needed her to be anybody. It was a strange thing to get used to, and she was getting used to it." },
        { id: 'epi-st-bookworms', name: 'Browse at Bookworms', place: 'Iwatodai Strip · Bookworms', bg: 'bookworms-inside', slots: ['after'], cost: 800, stats: { knowledge: 1 },
          text: "The old couple's shop smelled of paper and green tea. She came out with a secondhand book on a subject she'd never once been told to study, and the old man's assurance that she'd like it." },
        { id: 'epi-st-hagakure', name: 'Ramen at Hagakure', place: 'Iwatodai Strip · Hagakure', bg: 'hagakure-ramen', slots: ['evening'], cost: 900, stats: { courage: 1 },
          text: "The counter, the steam, the chef who remembered her order and didn't ask where the boy in the beanie had gone. She finished the bowl. All of it. It felt like an answer to something." },
        { id: 'epi-st-shrine', name: 'Walk to Naganaki Shrine', place: 'Naganaki Shrine', bg: 'naganaki-shrine-spring', slots: ['after'], cost: 0, stats: { kindness: 1 },
          text: "The shrine in spring: the playground empty, the first petals on the steps, an old woman sweeping them into a pile that the wind kept taking back. Solar held the dustpan. Neither of them said anything for twenty minutes, and it was one of the better conversations she'd had all week." },
        { id: 'epi-st-seaside', name: 'Walk the seaside park', place: 'Port Island · Seaside Park', bg: 'port-island-seaside-park', slots: ['after', 'evening'], cost: 0, stats: { courage: 1 },
          text: "Wind off the bay, joggers, a boy throwing a ball for a dog that wasn't Koromaru and kept looking at her like it knew one. The water was just water. She checked anyway." },
        { id: 'epi-st-karaoke', name: 'Karaoke at Paulownia Mall', place: 'Paulownia Mall · Karaoke', bg: 'paulownia-karaoke', slots: ['evening'], cost: 1200, stats: { charm: 1, proficiency: 1 },
          text: "One hour, alone, the room's disco ball going round for nobody. She sang the songs she knew from this world, and skipped past the ones she knew from the others, and only twice caught her thumb going back." }
      ],
      /* ♪ MUSIC: Kat's song picks (FEMC-EPILOGUE-PLAN.md, revision 1); an epi-st-* mood still marked ♪ PLACEHOLDER plays a stand-in P3 track. To set one,
         replace its value with a file in assets/femc/music/ (no extension) or an 'assets/audio/…' path. The three world songs
         don't play as scene music here: they come through as two-second bleeds (glitches.js epi-st-g-camo / -tide / -hoax). */
      music: {
        'epi-st-home': 'iwatodai-dorm', // Kat's pick: keeps the P3 dorm theme. the dorm after the year, the first ordinary mornings
        'epi-st-spring': 'everything-is-romantic', // spring-break days out, the hanami
        'epi-st-rooms': 'ghost-of-you', // the searchers' rooms, still full of their things
        'epi-st-thread': 'did-i-tell-u-that-i-miss-u', // dead threads from home lighting up at midnight
        'epi-st-charms': 'tower-of-memories', // Haenim's charms ringing on their own
        'epi-st-residue': 'assets/audio/phoebebridgers-waitingroom.mp3', // the stopped clocks; S.E.E.S. in the command room again
        'epi-st-half': 'black-out-days', // the reverse pulls (around the four fights)
        'epi-st-romance': 'picture-you', // Akihiko or Shinjiro, when it's warm
        'epi-st-witness': 'i-know-the-end', // it happens in front of everyone (4/5)
        'epi-st-last': 'what-if-i-miss-you', // the last day of spring break
        'epi-st-held': 'i-know-the-end'         // the final, one year to the night
      }
    },
    cast: { nurse: 'Night nurse', teacher: 'Teacher' },
    variants: {
      morning: {
        off: ["Spring break. The dorm woke up in the wrong order: Akihiko first, then the kettle, then Koromaru, then everyone else, complaining.",
          "Morning. Light on the lounge floor in long bars, the TV on for nobody, Junpei's shoes in the middle of the hall where somebody would trip on them.",
          "No school, no operation, no tower. The day just sat there in front of her, open, asking nothing. She was still learning what to do with that."],
        school: ["Morning. The dorm, the kettle, the long bars of light on the lounge floor."]
      },
      late: ["The dorm settled around her one door at a time. At midnight nothing happened, the way nothing happened now, and she listened to it not happen until she fell asleep.",
        "Late. The bay out the window, a ship's light, the clock on her desk going past twelve without stopping. She watched it go past, every night, the way you check a lock.",
        "Somebody's music through the wall, turned low. Then nobody's. The quiet afterward was the ordinary kind, mostly."],
      stayIn: ["She stayed in. Her room, the window open a crack for the spring air, a book face down on her chest, and the house going on around her without needing a thing from her."]
    }
  });
  R.events ||= []; R.routines ||= []; R.bonds ||= {}; R.links ||= {};
})();
