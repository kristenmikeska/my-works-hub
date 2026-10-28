/* The Stay epilogue's glitches (FEMC-EPILOGUE-PLAN.md 2.5; epilogue batch 8, 2026-10-28). The reverse of the other worlds:
   nothing of the Dark Hour comes into a home she left; the homes she left come into Iwatodai. The kinds are the same
   (glitch.js documents them), pointed the other way: the date card flickers to a date in Syracuse or Hanlim (`year`), a
   two-second bleed is a world song (`src`) instead of a P3 track, a face in a crowd is Hanni's, a dead thread is the girls',
   and Go Out's extra card is a street in another world, greyed until stage 4.
   The movements: 3/24-3/28 normal (0, then 1 from the hanami: only Solar notices); 3/29-3/31 wrong (2: the threads, the 4 a.m.
   call, her constant explains it away); 4/1-4/3 bleeding (3: the charms ring in front of everyone, the clocks stop, the
   others see the residue); 4/4-4/6 (4: it happens in front of people; the platform; the final).
   Her constant is Akihiko (Shinjiro on his route; he talks to her from the hospital). Thin places: the dorm roof, the
   station platform, the searchers' rooms. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).stay ||= {});
  const SONG = { runners: 'assets/audio/Camo-Runners.mp3', strangers: 'assets/audio/EthelCain-Strangers.mp3', hoax: 'assets/audio/TaylorSwift-Hoax.mp3' };
  R.glitch = {
    floors: { '3/24': 0, '3/27': 1, '3/29': 2, '4/1': 3, '4/4': 4 },
    thin: ['Iwatodai Dorm · Rooftop', 'Iwatodai Station · Platform', "Haechan's Room", "Hyein's Room", "Yunjin's Room", "Hanni's Room"],
    constant: ['akihiko', 'shinjiro'],
    chance: [0, 0.1, 0.18, 0.28, 0.4],
    ambient: {
      1: [{ kind: 'sound', sound: 'piano' }, { kind: 'clock' }],
      2: [{ kind: 'sound', sound: 'p3', src: SONG.runners }, { kind: 'face', who: 'hyein', f: 'happy' }, { kind: 'sound', sound: 'static' }, { kind: 'tint' }],
      3: [{ kind: 'phone', name: 'Yunjin' }, { kind: 'sound', sound: 'p3', src: SONG.strangers }, { kind: 'face', who: 'jungwon', f: 'neutral' }, { kind: 'name', label: 'Charm', names: ['BELL', 'B̷E̵L̶L', 'JADE', 'J̴A̸D̵E', 'STAR', 'S̶T̷A̵R', '…'] }],
      4: [{ kind: 'tear' }, { kind: 'sound', sound: 'p3', src: SONG.hoax }, { kind: 'name', label: 'Charm', names: ['BELL', 'JADE', 'STAR', 'B̷J̴S̶', '…'] }]
    }
  };
  const HOME_DOOR = { kind: 'map', name: 'Marshall Street · Syracuse', bg: 'flashback-syracuse-quad', note: 'It’s snowing there.', lines: [ // stage 4: it opens
      { n: "The card opened onto snow. Marshall Street at dusk, the café's window steamed, the orange banners on the lampposts lifting in the wind, a girl in a puffer coat laughing at something on her phone with her whole face. It was December there. It was always going to be December there." },
      { n: "Solar stood in it for one breath. Nobody looked at her. That was the whole of it: a street that had gone on without her, perfectly, and a world that would have made room for her in a second if she'd gone back, and hadn't been asked to." },
      { n: "Then she was on the Iwatodai Strip in the spring, with her hand out, as if she'd been about to touch a door, and a petal on her sleeve, and a man from the pharmacy asking if she was all right. She said she was. She almost was." }
  ] };
  R.glitches = [
    // In scenes (inline: story.js says where; each once).
    { id: 'epi-st-g-hanni', kind: 'face', who: 'hanni', f: 'happy', inline: true },                 // 3/27, a face in the hanami crowd
    { id: 'epi-st-g-girls', kind: 'phone', name: 'hanni, hyein', inline: true },                    // 3/29 midnight, the girls' thread: typing
    { id: 'epi-st-g-camo', kind: 'sound', sound: 'p3', src: SONG.runners, inline: true },          // 3/29, two seconds of the Runners song
    { id: 'epi-st-g-tide', kind: 'sound', sound: 'p3', src: SONG.strangers, inline: true },        // 3/30, 4 a.m., the landline: the strangers song
    { id: 'epi-st-g-hoax', kind: 'sound', sound: 'p3', src: SONG.hoax, inline: true },             // 3/31, the chat that renames itself: the HOAX song
    { id: 'epi-st-g-alone', kind: 'tear', inline: true },                                          // 3/31 midnight, the first pull (fight 1)
    { id: 'epi-st-g-bell', kind: 'name', label: 'Charm · Bell', names: ['B̷E̵L̶L', 'BE▓L', '鈴', 'BELL'], inline: true },  // 4/1, the charms ring
    { id: 'epi-st-g-jade', kind: 'name', label: 'Charm · Jade', names: ['J̴A̸D̵E', 'JA░E', '玉', 'JADE'], inline: true },
    { id: 'epi-st-g-star', kind: 'name', label: 'Charm · Star', names: ['S̶T̷A̵R', 'ST▒R', '星', 'STAR'], inline: true },
    { id: 'epi-st-g-unseen', kind: 'tint', inline: true },                                         // 4/2 midnight (fight 2)
    { id: 'epi-st-g-clocks', kind: 'clock', inline: true },                                        // 4/3, every clock in the dorm at 12:00
    { id: 'epi-st-g-unheard', kind: 'tear', inline: true },                                        // 4/4 midnight (fight 3)
    { id: 'epi-st-g-witness', kind: 'tint', ms: 1600, inline: true },                              // 4/5, Hagakure: she goes thin in front of everyone
    { id: 'epi-st-g-home', kind: 'hands', t: '(Go home.)', inline: true },                         // 4/5, a choice she didn't write
    { id: 'epi-st-g-platform', kind: 'tear', inline: true },                                       // 4/5 midnight, the platform (fight 4)
    { id: 'epi-st-g-pull', kind: 'name', label: 'Persona', names: ['H̷A̵E̶N̸I̷M̵', 'HAE▓█M', 'HAENIM', 'H̴A̷E̸N̶I̵M', 'HAENIM'], inline: true }, // 4/6, the pull
    // On the day's screens:
    { id: 'epi-st-g-date-r', kind: 'date', md: '12/9', year: 2025, day: '3/29' },                  // the date card flickers to a Tuesday in Syracuse
    { id: 'epi-st-g-date-h', kind: 'date', md: '1/4', year: 2024, day: '4/2' },                    // and to a Thursday in Hanlim
    { id: 'epi-st-g-yunjin', kind: 'phone', name: 'Yunjin', from: '3/30', to: '3/31', slot: 'late' }, // a thread from a house by the sea: typing, nothing
    { id: 'epi-st-g-jungwon', kind: 'phone', name: 'Jungwon', read: 'Read 12:00 AM', msg: '.', day: '4/3', slot: 'late' },
    { id: 'epi-st-g-hud', kind: 'clock', day: '4/2', at: 'morning' },                              // the HUD at 12:00 the morning before the clocks stop
    { id: 'epi-st-g-street', ...HOME_DOOR, from: '4/1', to: '4/3', slot: ['after', 'evening'] },   // Go Out: a street in Syracuse, greyed
    { id: 'epi-st-g-door', ...HOME_DOOR, day: '4/4', slot: 'after', open: true, note: 'The doors are open.' } // stage 4: it opens
  ];
})();
