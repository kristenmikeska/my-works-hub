/* Phone texts for femc-game.html. A text arrives the first time the day reaches its `date` (and `slot`, if given)
   while its conditions hold: flag (a story flag is set), rank ({ link: n }), met ([ids]).
   thread: conversation id; threads: display names. reply: Solar's answer options ({ t, notes, link } gives that link ♪).
   Link invitations ("free right now?") come from each link's `invite` data, not from here. */
window.FEMC_GAME_TEXTS = {
  threads: { yukari: 'Yukari', junpei: 'Junpei', akihiko: 'Akihiko', mitsuru: 'Mitsuru', sees: 'S.E.E.S. (no seniors)' },
  texts: [
    { id: 't-0408-yukari', thread: 'yukari', date: '4/8', slot: 'evening', msgs: [
      { from: 'yukari', t: 'hey. it’s yukari. mitsuru-senpai gave me your number, which, apparently you have a phone now' },
      { from: 'yukari', t: 'so did you survive day one or' }
    ], reply: [
      { t: 'barely. everyone stared', link: 'yukari', notes: 2, then: [{ from: 'yukari', t: 'that’s because akihiko-senpai NODDED at you. in public. you’re done for' }] },
      { t: 'i survived. thank you for walking me', link: 'yukari', notes: 3, then: [{ from: 'yukari', t: '...it was on the way. but. you’re welcome' }] }
    ] },
    { id: 't-0411-junpei', thread: 'junpei', date: '4/11', msgs: [
      { from: 'junpei', t: 'yo!! its junpei. from the store. the chips guy' },
      { from: 'junpei', t: 'ok so nobody believes me about the coffins. like NOBODY. my own homeroom laughed at me' },
      { from: 'junpei', t: 'u saw it right?? tell me u saw it' }
    ], reply: [
      { t: 'i saw it', then: [{ from: 'junpei', t: 'THANK you. ur my only witness. we’re like. bonded now' }] },
      { t: 'saw what', then: [{ from: 'junpei', t: 'SOLAR' }, { from: 'junpei', t: 'ok that was cold. respect' }] }
    ] },
    { id: 't-0419-sees', thread: 'sees', date: '4/19', flag: 'joined-junpei', msgs: [
      { from: 'junpei', t: 'welcome to the official S.E.E.S. group chat!!!! (seniors not invited)' },
      { from: 'yukari', t: 'junpei you can’t just make a group chat and call it official' },
      { from: 'junpei', t: 'i literally just did' },
      { from: 'yukari', t: 'also solar and mitsuru-senpai and akihiko-senpai are ALL seniors' },
      { from: 'junpei', t: '...ok solar is an honorary junior' }
    ], reply: [
      { t: 'i accept this honor', then: [{ from: 'junpei', t: 'LEGEND' }, { from: 'yukari', t: 'don’t encourage him' }] },
      { t: '(Leave it on read.)', silent: true, then: [{ from: 'junpei', t: 'she left us on read. she’s so cool' }] }
    ] },
    { id: 't-0425-akihiko', thread: 'akihiko', date: '4/25', slot: 'evening', msgs: [
      { from: 'akihiko', t: 'five tomorrow?' },
      { from: 'akihiko', t: 'it’s sunday. that’s not an excuse' }
    ], reply: [
      { t: 'five.', link: 'akihiko', notes: 2, then: [{ from: 'akihiko', t: 'good' }] },
      { t: 'it is literally an excuse', link: 'akihiko', notes: 1, then: [{ from: 'akihiko', t: 'five thirty then. final offer' }] }
    ] },
    { id: 't-0502-sees', thread: 'sees', date: '5/2', msgs: [
      { from: 'junpei', t: 'GOLDEN WEEK BABY' },
      { from: 'junpei', t: 'movie night at the dorm. i’m picking' },
      { from: 'yukari', t: 'absolutely not' }
    ] },
    { id: 't-0510-yukari', thread: 'yukari', date: '5/10', msgs: [
      { from: 'yukari', t: 'you ok after last night?' },
      { from: 'yukari', t: 'you looked kind of far away on the platform' }
    ], reply: [
      { t: 'just tired', link: 'yukari', notes: 1, then: [{ from: 'yukari', t: 'ok. get some sleep. i mean it' }] },
      { t: 'i thought i saw someone', link: 'yukari', notes: 2, then: [{ from: 'yukari', t: 'during the dark hour?? like awake?' }, { from: 'yukari', t: '...probably the light. it does weird stuff. but tell me if it happens again ok' }] }
    ] }
  ]
};
