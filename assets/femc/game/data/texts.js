/* Phone texts for femc-game.html. A text arrives the first time the day reaches its `date` (and `slot`, if given)
   while its conditions hold: flag (a story flag is set), rank ({ link: n }), met ([ids]).
   thread: conversation id; threads: display names. reply: Solar's answer options ({ t, notes, link } gives that link ♪).
   Link invitations ("free right now?") come from each link's `invite` data, not from here. */
window.FEMC_GAME_TEXTS = {
  // Group threads (`groups`, plus any thread where two or more people besides Solar write) show each sender's name over their
  // bubble (ui.js openPhone). The searchers' groups also start each line with the sender's handle ("hyein: ", "jihoney: "),
  // as the story's own phone scenes do: the phone shows that handle under the name and drops it from the bubble. Lines like
  // "hanni added jihoon and you to a group" show as the chat's own notices. Arrival flags (arrived-<id>, story-act4.js) gate
  // texts on who has actually crossed.
  groups: ['sees', 'sisters', 'searchparty', 'hateclub'],
  threads: { yukari: 'Yukari', junpei: 'Junpei', akihiko: 'Akihiko', mitsuru: 'Mitsuru', sees: 'S.E.E.S. (no seniors)',
    sisters: 'hanni, hyein', searchparty: "sol's search party", hateclub: 'PARK JIHOON HATE CLUB' },
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
    ] },

    // ── The searchers, day to day (Act IV onward). School-day texts arrive at lunch or in the afternoon. ──
    { id: 't-0914-sisters', thread: 'sisters', date: '9/14', slot: 'lunch', flag: 'arrived-hanni', msgs: [
      { from: 'hyein', t: 'hyein: sol. SOL. the bakery lady gave us free rolls bc hanni bowed too much' },
      { from: 'hanni', t: 'hanni: i bowed the correct amount' },
      { from: 'hyein', t: 'hyein: what time do u get out of jail (school)' }
    ], reply: [
      { t: '3:30. bring me a roll or dont come back', link: 'hyein', notes: 2, then: [{ from: 'hyein', t: 'hyein: RUDE' }, { from: 'hyein', t: 'hyein: ok saving u the best one' }] },
      { t: 'omg u guys are so embarrassing lol', link: 'hanni', notes: 2, then: [{ from: 'hanni', t: "hanni: we're YOUR embarrassing!!" }] }
    ] },
    { id: 't-0917-hyein', thread: 'hyein', date: '9/17', slot: 'afternoon', flag: 'arrived-hyein', msgs: [
      { from: 'hyein', t: 'emergency' },
      { from: 'hyein', t: 'does japan have dry shampoo' },
      { from: 'hyein', t: 'asking for me. obviously' }
    ], reply: [
      { t: 'check my room. top shelf. ur welcome', link: 'hyein', notes: 3, then: [{ from: 'hyein', t: 'u DO remember' }, { from: 'hyein', t: 'wait no u just own dry shampoo' }, { from: 'hyein', t: 'ok it still counts. im counting it' }] },
      { t: 'why would i know that', link: 'hyein', notes: 1, then: [{ from: 'hyein', t: 'bc u steal MINE. constantly. for years' }, { from: 'hyein', t: 'ok that one hurt me personally' }] }
    ] },
    { id: 't-0924-jihoon', thread: 'jihoon', date: '9/24', slot: 'lunch', flag: 'arrived-jihoon', msgs: [
      { from: 'jihoon', t: 'sol what does the sign with the bird on it mean' },
      { from: 'jihoon', t: 'am i going the right way' },
      { from: 'jihoon', t: 'dont answer that. i am Obviously going the right way. i was born going the right way' }
    ], reply: [
      { t: 'wrong way lol', link: 'jihoon', notes: 2, then: [{ from: 'jihoon', t: 'I KNEW that' }, { from: 'jihoon', t: 'i was testing u. u passed. barely' }] },
      { t: 'where r u even going', link: 'jihoon', notes: 1, then: [{ from: 'jihoon', t: 'the almighty hoon does not explain himself to commoners' }, { from: 'jihoon', t: 'arcade' }] }
    ] },
    { id: 't-0925-searchparty', thread: 'searchparty', date: '9/25', slot: 'afternoon', flag: 'arrived-jihoon', msgs: [
      { from: 'hanni', t: 'hanni added jihoon and you to a group' },
      { from: 'hanni', t: "hanni named the group \"sol's search party\"" },
      { from: 'jihoon', t: 'jihoon: Who Gave Her The Power To Name Things' },
      { from: 'hyein', t: "hyein: she's social chair. it's literally her job" },
      { from: 'jihoon', t: 'jihoon: of WHAT' },
      { from: 'hyein', t: 'hyein: of PARTIES' },
      { from: 'jihoon', t: 'jihoon: ok fine. im staying' }
    ], reply: [
      { t: 'why am i in this', then: [{ from: 'hanni', t: "hanni: ur the guest of honor!!!" }, { from: 'jihoon', t: 'jihoon: ur the search' }] },
      { t: 'im literally in class rn', then: [{ from: 'jihoon', t: 'jihoon: Skipping Is A Sport, Sol' }, { from: 'hanni', t: 'hanni: DO NOT listen to him' }] }
    ] },
    { id: 't-1002-minji', thread: 'minji', date: '10/2', slot: 'lunch', flag: 'arrived-minji', msgs: [
      { from: 'minji', t: "can i film the station tonight. at sunset. you don't have to be in it" },
      { from: 'minji', t: "(asking 20 times. that was 1)" }
    ], reply: [
      { t: 'u can film me. 2 through 20 approved', link: 'minji', notes: 3, then: [{ from: 'minji', t: 'ok' }, { from: 'minji', t: 'ok. noted. thank you' }] },
      { t: 'only if u buy me a melon soda', link: 'minji', notes: 2, then: [{ from: 'minji', t: 'deal. two.' }] }
    ] },
    { id: 't-1003-sees', thread: 'sees', date: '10/3', flag: 'arrived-jihoon', msgs: [
      { from: 'junpei', t: 'ok so i added some people. house is FULL. its basically a dorm now' },
      { from: 'yukari', t: 'junpei it was already a dorm' },
      { from: 'hanni', t: 'hi everyone!!! :) thank u for having us' },
      { from: 'jihoon', t: 'Why Am I Here. I Live At The Guesthouse' },
      { from: 'junpei', t: 'ur here every meal bro' },
      { from: 'jihoon', t: 'that is called being a guest. look it up' }
    ], reply: [
      { t: 'he never leaves lol', then: [{ from: 'jihoon', t: 'SOL' }, { from: 'junpei', t: 'LMAOOO' }] },
      { t: '(Leave it on read.)', silent: true, then: [{ from: 'hanni', t: 'she left us all on read!! iconic' }] }
    ] },
    { id: 't-1007-sisters', thread: 'sisters', date: '10/7', slot: 'afternoon', flag: 'arrived-hanni', msgs: [
      { from: 'hyein', t: 'hyein: ok so the boxer just jogged past the bakery' },
      { from: 'hyein', t: 'hyein: shirtless' },
      { from: 'hanni', t: 'hanni: he was NOT shirtless he was in a hoodie' },
      { from: 'hyein', t: 'hyein: he was shirtless in spirit' }
    ], reply: [
      { t: 'omg leave him ALONE', then: [{ from: 'hyein', t: "hyein: so u admit there's a him" }, { from: 'hanni', t: 'hanni: hyein' }] },
      { t: '(Leave it on read.)', silent: true, then: [{ from: 'hyein', t: 'hyein: she left us on read' }, { from: 'hanni', t: "hanni: that's a yes" }] }
    ] },
    { id: 't-1012-yunjin', thread: 'yunjin', date: '10/12', flag: 'arrived-yunjin', msgs: [
      { from: 'yunjin', t: 'babe the konbini here has a whole SHELF of onigiri' },
      { from: 'yunjin', t: "im buying all of them. i'm feeding the cult" }
    ], reply: [
      { t: 'the cult says thank u', link: 'yunjin', notes: 2, then: [{ from: 'yunjin', t: 'the cult is welcome' }, { from: 'yunjin', t: 'the cult better share with the boxer he looks hungry all the time' }] },
      { t: 'get me the salmon one', link: 'yunjin', notes: 3, then: [{ from: 'yunjin', t: 'already got u three' }, { from: 'yunjin', t: 'i know u babe' }] }
    ] },
    { id: 't-1015-jungwon', thread: 'jungwon', date: '10/15', slot: 'lunch', flag: 'arrived-jungwon', msgs: [
      { from: 'jungwon', t: "good afternoon. i've left the corrected worksheet with mitsuru." },
      { from: 'jungwon', t: "question four was close. please don't take that as encouragement." }
    ], reply: [
      { t: 'omg ur so annoying lol', link: 'jungwon', notes: 2, then: [{ from: 'jungwon', t: "i've been told." }] },
      { t: 'did u eat lunch', link: 'jungwon', notes: 3, then: [{ from: 'jungwon', t: 'when would i have had time to do that.' }, { from: 'jungwon', t: "...i'll eat something." }] }
    ] },
    { id: 't-1026-jaehyun', thread: 'jaehyun', date: '10/26', slot: 'lunch', flag: 'arrived-jaehyun', msgs: [
      { from: 'jaehyun', t: 'Results are up today, I\'m told.' },
      { from: 'jaehyun', t: 'How did you do.' }
    ], reply: [
      { t: 'ranked obviously. ur welcome', link: 'jaehyun', notes: 2, then: [{ from: 'jaehyun', t: 'Good.' }, { from: 'jaehyun', t: "Don't let it go to your head." }] },
      { t: 'how do u even know when results are', link: 'jaehyun', notes: 1, then: [{ from: 'jaehyun', t: 'I read the schedule by the fridge.' }, { from: 'jaehyun', t: "It's on the fridge, Solar." }] }
    ] },
    { id: 't-1102-hateclub', thread: 'hateclub', date: '11/2', slot: 'afternoon', flag: 'arrived-crew', msgs: [
      { from: 'junkyu', t: 'junkyute: SOL!!! the guesthouse has a BATH. like a BIG one' },
      { from: 'asahi', t: 'asanoonecares: junkyu has been in it for an hour' },
      { from: 'hyunsuk', t: "geniusuk: we're worried about his fingers" },
      { from: 'jaehyuk', t: "jaehyukkie: Please hydrate if you're in there that long, Junkyu." },
      { from: 'jihoon', t: 'jihoney: Grave Sin. Hogging The Bath. I Will Remember This' }
    ], reply: [
      { t: 'HEHEHEHE junkyu ur a PRUNE', link: 'junkyu', notes: 2, then: [{ from: 'junkyu', t: "junkyute: im a HAPPY prune!!! :D" }] },
      { t: '-salute- carry on soldier', link: 'junkyu', notes: 1, then: [{ from: 'asahi', t: "asanoonecares: oh great she's encouraging him" }] }
    ] },
    { id: 't-1106-sisters', thread: 'sisters', date: '11/6', slot: 'lunch', flag: 'arrived-haechan', msgs: [
      { from: 'hyein', t: 'hyein: so are we going to TALK about it' },
      { from: 'hanni', t: 'hanni: no' },
      { from: 'hyein', t: "hyein: he's in the DORM hanni. he's on the TOP FLOOR" },
      { from: 'hanni', t: "hanni: and we're not talking about it" }
    ], reply: [
      { t: 'talk about what??', then: [{ from: 'hanni', t: 'hanni: nothing!! eat ur lunch!!' }, { from: 'hyein', t: 'hyein: (him)' }] },
      { t: '(Leave it on read.)', silent: true, then: [{ from: 'hyein', t: "hyein: she's ignoring us" }, { from: 'hanni', t: 'hanni: good' }] }
    ] },
    { id: 't-1110-haechan', thread: 'haechan', date: '11/10', slot: 'afternoon', flag: 'arrived-haechan', msgs: [
      { from: 'haechan', t: 'rain at 4' },
      { from: 'haechan', t: "ur umbrella's by the door. not in ur bag" }
    ], reply: [
      { t: 'how do u know its gonna rain', link: 'haechan', notes: 2, then: [{ from: 'haechan', t: 'i looked up' }] },
      { t: 'omg ok mom', link: 'haechan', notes: 3, then: [{ from: 'haechan', t: 'careful, princess' }] }
    ] },
    { id: 't-1115-hateclub', thread: 'hateclub', date: '11/15', flag: 'arrived-cherry', msgs: [
      { from: 'cherry', t: 'cherryblossoms: SOLAR KIM' },
      { from: 'cherry', t: 'cherryblossoms: why is sunghoon here. why is he HERE. why is he at the cafe in an APRON' },
      { from: 'jihoon', t: 'jihoney: Cherry Has Seen The Prince' },
      { from: 'asahi', t: 'asanoonecares: oh goodie' }
    ], reply: [
      { t: 'HEHEHEHE go get him wife', link: 'cherry', notes: 3, then: [{ from: 'cherry', t: 'cherryblossoms: i love u bitch' }] },
      { t: 'whos sunghoon', link: 'cherry', notes: 1, then: [{ from: 'cherry', t: 'cherryblossoms: ...' }, { from: 'cherry', t: "cherryblossoms: ur so lucky i love u" }] }
    ] },
    { id: 't-1120-mark', thread: 'mark', date: '11/20', slot: 'lunch', flag: 'arrived-mark', msgs: [
      { from: 'mark', t: "hey sol!! hope school's ok" },
      { from: 'mark', t: 'got u one of the strawberry ones from the station bakery for tmrw' },
      { from: 'mark', t: 'asked hanni if u like them. she wouldnt tell me lol. guessed' }
    ], reply: [
      { t: 'omg thank u', link: 'mark', notes: 2, then: [{ from: 'mark', t: 'ofc!! anytime' }] },
      { t: 'why did u ask hanni', link: 'mark', notes: 1, then: [{ from: 'mark', t: 'old habit' }, { from: 'mark', t: 'sry. ill just ask u' }] }
    ] },
    { id: 't-1207-sisters', thread: 'sisters', date: '12/7', slot: 'lunch', flag: 'awake-haechan', msgs: [
      { from: 'hyein', t: 'hyein: he ran up 200 floors' },
      { from: 'hyein', t: 'hyein: for u' },
      { from: 'hanni', t: 'hanni: hyein' },
      { from: 'hyein', t: "hyein: IM JUST STATING FACTS. FACTUALLY" }
    ], reply: [
      { t: 'it was like 180 actually', then: [{ from: 'hyein', t: 'hyein: oh my GOD' }, { from: 'hanni', t: 'hanni: sol' }] },
      { t: 'stop', then: [{ from: 'hyein', t: "hyein: she said stop and not no" }, { from: 'hanni', t: "hanni: hyein i will take ur phone" }] }
    ] },
    { id: 't-1209-jungwon', thread: 'jungwon', date: '12/9', slot: 'afternoon', flag: 'awake-jungwon', msgs: [
      { from: 'jungwon', t: "i'm told you didn't eat lunch." },
      { from: 'jungwon', t: "i'm not going to say anything about it." },
      { from: 'jungwon', t: "there's a croissant in your bag." }
    ], reply: [
      { t: 'WON~ :D', link: 'jungwon', notes: 3, then: [{ from: 'jungwon', t: '...' }, { from: 'jungwon', t: "where did you get that." }] },
      { t: 'u didnt eat lunch either', link: 'jungwon', notes: 2, then: [{ from: 'jungwon', t: "that isn't the point." }, { from: 'jungwon', t: 'there are two croissants in your bag.' }] }
    ] }
  ]
};
