/* Yang Jungwon · V The Hierophant. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Searcher, canon romance (Hoax + strangers). One boy carrying two lives: Hanlim's overworked student council president
   who forgets to eat and tutors everyone but himself (Hoax), and the heir with formal speech, his brother's watch,
   no scent and a face that goes still when he's actually pleased (strangers). The tell in both: the angrier he gets,
   the more polite. He knows two of her surnames and keeps almost saying one. Every rank lets Solar lean (tally
   jungwon.H / jungwon.S, plot doc §9, §12). His crossing (10/14, council room door, "It's you.") is a story event; rank 1
   is the first afternoon after it. He awakens on 11/28 (story); ranks 7+ come after.
   Fragments: hoax-president-pin (rank 6, plot doc §8 H8), hoax-math-homework (rank 8, ★ new card, §8 H9).
   HOAX canon (Kat's ruling 2026-10-20, hoax skill; HOAX leaves off in exam week before winter break, Ch 99): the election
   has already happened. He was re-elected (president "of two years"), chose Solar as his vice president, she told him she
   couldn't be, and they started dating. He never speaks of a count still to come; "that night" is exam week. Maeumi is a
   small male dog; Nana is Solar's big fluffy one. strangers: the heir, formal speech, the brother's watch, the fiancé.
   He says plainly that he is one person from two places (rank 3) and that he shares one of them with Donghyuck (rank 4).
   Current strangers canon (Kat's ruling 2026-10-20; strangers leaves off at Ch 65, early February): the engagement began as a
   contract and isn't one to him anymore; Solar has told him she doesn't know about the wedding; he has spoken to her in banmal
   a handful of times (never in this game); he knows the brother's watch fit his brother and that "it never fit me" was a lie;
   he and Donghyuck have saved each other more than once and are still not friends. The game names none of the war.
   Housing: Kirijo guesthouse by the station; the dorm kitchen and the dorm steps are visits.
   Romance stays non-explicit: hands, foreheads, a kiss (rank 10). No banmal from him here (Kat's call, §16.13).
   Romance turn at rank 8, before Christmas. Arcana Hierophant is v1's; searcher arcana are open (§16.6).
   Ranks 11-15 (maxRank 15; meter ranks, 2026-10-21 batch): 2/2 council room, 2/9 the guesthouse lobby (Jihoon, Cherry,
   Sunoo; their Act IV arrivals always play before February), 2/16 council room (the day after the handover; Mitsuru), 2/23 Port Island pier
   (Yunjin and Donghyuck cameo, gated), 3/1 council room. The route is locked by then: each rank has one key passage
   branched by heading (H / S / R / stay / true) and an ending branched by romance / friendship; every path's best
   answers total 12 notes. stretchHangouts: three February hangouts for a meter a rank scene didn't fill.
   Living content for these ranks (afterRank 11-15 texts, late nights, a routine): data/living-r15-jungwon.js.
   afterMax plays between rank 10 and rank 11 and after 15; christmas is the 12/24 story picker's scene. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'jungwon', name: 'Yang Jungwon', short: 'Jungwon', arcana: 'Hierophant', numeral: 'V', from: 'Hoax · strangers',
  kind: 'searcher', world: 'HS', romance: 'canon', maxRank: 15,
  starts: '10/14', gate: { H: 4, S: 3 },
  home: { area: 'gekkoukan', spot: 'Student Council Room', slot: 'after', days: [1, 2, 3, 4, 5],
          hint: 'After school on weekdays, in the student council room, long after the meeting ends.' },
  approach: "The light in the student council room is still on long after the meeting ended. A boy in a navy blazer that isn't Gekkoukan's is sitting under the bulletin board with a red pen, and he looks up at the door like he's been expecting a vote.",
  cast: {},
  invite: {
    ask: ["are you free. the council room has heat and nobody in it", "i need someone to check my math. it's right. i need someone to tell me it's right", "i haven't eaten. sunoo would want me to tell someone. i'm telling you", "are you busy. i'm not. that's concerning", "your president left me the budget. come be a witness", "i made a schedule. there's a gap at 4:00. it's labeled solar", "the vending machine on 3 has melon pan now. i made a formal request. it worked"],
    ok: ["ok. i'll clear your end of the table", "good. 4:00. i wrote it down", "ok. i already got you a drink. it's getting warm"],
    no: ["ok. i'll be here anyway", "that's fine. i have eleven other things", "ok. i'll move you to tomorrow. in pencil"]
  },
  hangouts: [
    [
      { n: "Mitsuru had, in what Solar suspected was either trust or surrender, given him the club binders. All of them. Twenty-two clubs, twenty-two binders, fanned out across the long table in an order that made sense to nobody but him, tabbed in colors from a pack he had very clearly gone out and bought with his own money." },
      { s: 'jungwon', f: 'neutral', t: "Read me the totals. Only the totals. I'll tell you when to stop." },
      { choose: [
        { t: "(Read them like election results.)", notes: 3, tally: { 'jungwon.H': 1 }, then: [
          { n: "She read the kendo club's total like a winning number at a podium. He didn't laugh. His mouth did something at one corner that was much worse than laughing, and by the photography club he'd had to put his pen down." },
          { s: 'jungwon', f: 'happy', t: "Stop. No. Keep going. I hate it. Keep going." }
        ] },
        { t: "(Read them exactly, to the yen.)", notes: 2, tally: { 'jungwon.S': 1 }, then: [
          { s: 'jungwon', f: 'neutral', t: "Thank you. You don't round." },
          { n: "He said it the way someone else might say *you have nice hands*, and wrote the next figure down very neatly." }
        ] },
        { t: "Isn't this Mitsuru's job?", notes: 1, then: [
          { s: 'jungwon', f: 'serious', t: "It's everyone's job. That's the part nobody tells you." }
        ] }
      ] },
      { n: "They finished at six. Every binder balanced except the occult club's, which was off by exactly six hundred and sixty-six yen, and he looked at it for a long moment and then wrote, in very small letters in the margin, *no.*" }
    ],
    [
      { n: "She'd started bringing food. It wasn't a decision, per se. It was more that she kept finding herself at the bakery by the station with two croissants in a paper bag and no memory of deciding on the second one." },
      { place: 'Gekkoukan High · Student Council Room', time: 'Evening' },
      { cg: 'link-jungwon-croissant' },
      { n: "Tonight the windows were blue by the time she got there, and he had fallen asleep over the budget with his cheek in his hand and his pen still touching the page. The desk lamp was on. She took the croissant out of the bag and set it beside his wrist, carefully, where he'd find it before the next column of figures." },
      { cg: null },
      { n: "The paper rustled. He opened his eyes, looked at the pastry without quite lifting his head, and picked his pen up again." },
      { s: 'jungwon', f: 'neutral', t: "Thank you. After this page." },
      { n: "Three pages later the croissant was still there." },
      { choose: [
        { t: "(Take the pen out of his hand.)", notes: 3, then: [
          { n: "She took the pen. He looked at his empty hand like it had defected, and then at her, and then, with enormous dignity, at the croissant." },
          { s: 'jungwon', f: 'flustered', t: "Fine. Fine. You're worse than Sunoo. You're worse than Sunoo at home and you're worse than Sunoo here." },
          { n: "He ate it in four bites. She gave the pen back. He didn't pick it up again for almost a whole minute, which she decided to count." }
        ] },
        { t: "That's what you said three pages ago.", notes: 2, then: [
          { s: 'jungwon', f: 'serious', t: "And I meant it three pages ago." }
        ] },
        { t: "(Eat yours loudly, at him.)", notes: 2, then: [
          { n: "She ate hers as loudly as a person can eat bread, which is not very, and he lasted until her second bite before he set the pen down with the sigh of a man conceding a count." }
        ] }
      ] },
      { n: "Afterward he brushed the crumbs off the budget into his palm and carried them to the bin, carefully, and she watched him do it and thought somebody, somewhere, had raised him to leave every room cleaner than he found it, and had never once mentioned he was allowed to sit down." }
    ],
    [
      { n: "He was rehearsing a speech when she came in, standing at the head of the long table with one hand flat on it, addressing twelve empty chairs and a potted plant on the subject of cafeteria pricing." },
      { s: 'jungwon', f: 'serious', t: "Don't stop me. I have four minutes left and I lose the thread if I stop." },
      { choose: [
        { t: "(Sit in the front row and nod at everything, very gravely.)", notes: 3, tally: { 'jungwon.H': 1 }, then: [
          { n: "She nodded at the part about fair pricing and the part about vegetarian options and, gravely, at the part about the vending machine on the third floor, and somewhere around the vending machine he started trying not to smile and lost." },
          { s: 'jungwon', f: 'happy', t: "You're a terrible audience. You're the best audience I've ever had. Both. You've always been both." }
        ] },
        { t: "Boo.", notes: 2, then: [
          { s: 'jungwon', f: 'surprised', t: "Did you just boo me?" },
          { n: "He finished the speech anyway, louder, glaring at her over the plant like it was a debate, and it was the best she'd heard him do it." }
        ] },
        { t: "Who's it for? You don't go here.", notes: 1, then: [
          { s: 'jungwon', f: 'sad', t: "I know. Habit." },
          { n: "He sat down. He didn't finish it." }
        ] }
      ] }
    ],
    [
      { n: "Someone had to carry the box of old ballots down to the storeroom, and Jungwon, who could not allow anything to be decided by anything less than a fair and transparent process, proposed rock-paper-scissors." },
      { n: "He lost. He proposed best of three. He lost. He proposed, with a face like a closed door, best of eleven." },
      { s: 'jungwon', f: 'flustered', t: "You're reading me. Stop reading me. You've always read me. It's unsporting." },
      { choose: [
        { t: "(Throw rock. You've thrown rock every single time.)", notes: 3, then: [
          { n: "She threw rock. He threw scissors, again, because he'd been so certain she'd switch that he'd switched himself, and he stared at his own hand like it had testified against him." },
          { s: 'jungwon', f: 'flustered', t: "I overthought it. I've never in my life underthought something." }
        ] },
        { t: "Let's just carry it together.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "That's not a process." },
          { s: 'jungwon', f: 'happy', t: "...It's a good process. Motion carried." }
        ] }
      ] },
      { n: "He carried the box. He insisted. Going down the stairs ahead of her he looked like somebody quietly glad to have lost at something that didn't matter, for once, in front of someone who wouldn't write it down." }
    ],
    [
      { n: "He walked her home. He always walked her home, to the gate of the dorm and not one step past it, and then turned round and walked the whole way back to the guesthouse by the station, which was out of his way in every direction, and which he described, when she pointed this out, as a route." },
      { place: 'Iwatodai Dorm · Front Steps', time: 'Evening' },
      { ifEvent: 'a4-there-you-are', else: [
        { n: "Junpei was on the steps with a convenience-store bag and a cap on backward, and he looked up at the two of them with the open delight of a man who had been bored for an hour and had just been handed a show." },
        { s: 'junpei', f: 'happy', t: "Yo, Student Council! You coming in? There's curry. It's mostly okay." },
        { s: 'jungwon', f: 'happy', t: "Thank you, no. It isn't my house. Good evening, Iori-san." },
        { choose: [
          { t: "You could come in. Just for curry.", notes: 3, then: [
            { s: 'jungwon', f: 'neutral', t: "I'd have to be invited by someone who lives here." },
            { s: 'solar', f: 'neutral', t: "I live here." },
            { s: 'jungwon', f: 'flustered', t: "...Then another night. When I've brought something. One doesn't arrive at a house empty-handed." }
          ] },
          { t: "Goodnight, Jungwon. Thank you for the route.", notes: 3, tally: { 'jungwon.H': 1 }, then: [
            { s: 'jungwon', f: 'flustered', t: "...It's on my way." },
            { s: 'junpei', f: 'happy', t: "Dude, the station's the other way." }
          ] }
        ] },
        { n: "He bowed at the gate and went, and wound his watch on the corner without looking back, and Junpei watched him go and said, to nobody, that he'd never once seen a guy walk that straight on purpose." }
      ], then: [
      { n: "Tonight there was somebody on the dorm steps already. Hood up, elbows on his knees, a can of something black and bitter going cold beside his shoe. He didn't get up. He looked at the two of them coming up the path with the flat, patient interest of a man watching a delivery he hadn't ordered." },
      { s: 'jungwon', f: 'happy', t: "Good evening, Donghyuck." },
      { s: 'haechan', f: 'neutral', t: "Young master. You're on my step." },
      { s: 'jungwon', f: 'happy', t: "It's Kirijo-san's step. You live on it. That's different." },
      { n: "The dimples were all the way out. Haechan's face did nothing at all. The two of them looked at each other across a meter of cold concrete with the particular courtesy of men who had, somewhere, in some other city, decided a long time ago exactly how much they were each worth, and had lately been made to revise the figure, and neither of them had forgiven the other for it." },
      { choose: [
        { t: "(Sit down on the step between them.)", notes: 3, tally: { 'jungwon.S': 1 }, then: [
          { n: "She sat on the step between them, which was the only place left, and put her bag on her knees, and waited. Neither of them moved. Neither of them could, now, without it looking like losing." },
          { s: 'jungwon', f: 'neutral', t: "...I'll say goodnight here, then." },
          { s: 'haechan', f: 'neutral', t: "Mm. Watch the road. It's dark. Very dangerous. For a guy who tutors." },
          { n: "Jungwon bowed to her, and only to her, and went down the path at an even, unhurried pace, and wound his watch at the gate without looking back." }
        ] },
        { t: "Be nice. Both of you.", notes: 2, then: [
          { s: 'jungwon', f: 'happy', t: "I'm always nice." },
          { s: 'haechan', f: 'neutral', t: "That's his problem." },
          { n: "For one second, very briefly, both of them nearly laughed, at the same thing, and both of them heard the other one nearly do it, and stopped." }
        ] },
        { t: "Goodnight, Jungwon. Thank you for the route.", notes: 3, tally: { 'jungwon.H': 1 }, then: [
          { s: 'jungwon', f: 'flustered', t: "...It's on my way." },
          { s: 'haechan', f: 'neutral', t: "It is not on his way." },
          { s: 'jungwon', f: 'flustered', t: "Nobody asked you." },
          { n: "He went. Halfway down the path she heard him say, to the dark, very politely, *goodnight, Donghyuck*, and from the step behind her, flat as a closed door, *night, Yang*, and it was the most either of them had said to the other all week." }
        ] }
      ] }
      ] }
    ]
  ],
  stretchHangouts: [
    [
      { n: "Somebody had left a paper cup of roasted soybeans on the council room windowsill after Setsubun, the way somebody always did, and Jungwon was sitting in front of it counting them out onto a sheet of scrap paper in rows of five, with the face of a man conducting an audit." },
      { s: 'jungwon', f: 'neutral', t: "You eat one for every year of your age. For luck. I asked Fuuka-ssi. She was very clear about it." },
      { s: 'jungwon', f: 'serious', t: "I've eaten eighteen. I'm trying to decide whether to eat four more." },
      { choose: [
        { t: "Eat twenty-two. Both of you need the luck.", notes: 3, then: [
          { n: "He ate four more, one at a time, very seriously, and then after a moment one more, and when she raised her eyebrows he said that one was for her, in case she'd lost count of a year somewhere. She said she was eighteen everywhere. He said that was exactly what a person would say right before finding out they'd been short a year all along." }
        ] },
        { t: "(Eat one off his paper. Then another.)", notes: 2, then: [
          { s: 'jungwon', f: 'flustered', t: "Those were counted. Those were audited. You've put me in deficit." },
          { n: "He recounted the whole sheet. She ate another one while he was doing it. He started again." }
        ] },
        { t: "Isn't that cheating?", notes: 1, then: [
          { s: 'jungwon', f: 'neutral', t: "It's bookkeeping. There's a difference. I've built two lives on it." }
        ] }
      ] }
    ],
    [
      { n: "The vending machine outside the gym sold hot drinks in February that came out so hot nobody could hold them, and he'd bought two, and was holding both, one in each bare hand, wincing slightly, as though it were a test of character he'd decided to pass." },
      { s: 'jungwon', f: 'neutral', t: "One's for you. I've been keeping it warm. I've also been keeping my hands warm. It's efficient." },
      { n: "His gloves were in his blazer pocket. She could see the fingers sticking out of it. He had, she understood, given his gloves to the cans." },
      { choose: [
        { t: "(Take your can. Then put his gloves on him, one hand at a time.)", notes: 3, then: [
          { n: "She took the can and fished the gloves out of his pocket and held the first one open, and he looked at it, and at her, as though she'd done something enormously improper in a public corridor." },
          { s: 'solar', f: 'neutral', t: "May I?" },
          { s: 'jungwon', f: 'flustered', t: "...That's my line." },
          { n: "But he put his hand in. Then the other one. She buttoned the little strap at each wrist, and he stood very still for it, and drank his coffee afterward with his gloves on, which made it difficult, and didn't complain once." }
        ] },
        { t: "(Swap. Give him your gloves. They won't fit.)", notes: 2, then: [
          { n: "They didn't fit. They came to the middle of his palms and made his fingers look like a cartoon's. He wore them anyway, all the way to the station, holding the can between two fingertips, with the dignity of a man in full formal dress." }
        ] },
        { t: "Why don't you just wear your gloves?", notes: 1, then: [
          { s: 'jungwon', f: 'neutral', t: "Then the cans would get cold. I'd have failed at the whole errand." }
        ] }
      ] }
    ],
    [
      { n: "He'd made her an entrance exam. A whole one, the national kind the other third-years were sitting that month at desks all across the city, copied out by hand from a book he'd borrowed from the library, forty questions with a cover sheet and a box for her name and a time limit written across the top in red." },
      { s: 'jungwon', f: 'neutral', t: "I know you're not sitting it. Nobody here thinks you are. I made it anyway." },
      { s: 'jungwon', f: 'neutral', t: "In case." },
      { choose: [
        { t: "(Sit it. Properly. Timed.)", notes: 3, then: [
          { n: "She sat it. He timed it with the watch that didn't run, by counting under his breath, which was more accurate, he said, than any watch. He marked it in red when she was done. Small ticks. A circle around a flipped sign. In the margin, tiny, *you knew this*, and an arrow." },
          { s: 'jungwon', f: 'neutral', t: "You'd have passed. I want that on record. Somewhere, in some version of this, you got in." }
        ] },
        { t: "(Write your name in the box. Only your first name.)", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "That's the only part anyone ever gets wrong. You got it right." }
        ] },
        { t: "In case of what?", notes: 1, then: [
          { s: 'jungwon', f: 'neutral', t: "I don't know. I wind my watch in case. I've stopped needing to know of what." }
        ] }
      ] }
    ]
  ],
  ranks: [
    { after: '10/15', title: '1: minutes', place: 'Gekkoukan High · Student Council Room', time: 'After School', scene: [
      { n: "The first afternoon after a boy had come through the student council room and looked at her like a ballot he'd been counting all night, Solar went back to the student council room, because she couldn't think about anything else and had decided, around fourth period, that she might as well not think about it somewhere specific." },
      { n: "Mitsuru had given him a key. Mitsuru had said, in the lounge, very evenly, that she would rather know where he was than where he wasn't, and that he had offered to proofread the athletic budget in exchange for a desk, and that she had accepted, and that she did not want to discuss why she had accepted. Junpei had wanted to discuss it a great deal." },
      { n: "He was at the long table with his back very straight and his sleeves pushed exactly to the elbow. Navy blazer, a crest she didn't know. Dark hair a little too long at the front. A red pen, and a notebook, and he was writing in it steadily with the focus of a person taking down every word of a meeting, and there was nobody else in the room." },
      { n: "He stood up when she came in. Not quickly. Correctly, the way you'd stand for a teacher, and bowed, a precise short bow from the waist, and when he came up out of it his face had a smile on it with two deep dimples, sweet and polite and absolutely nothing behind them at all." },
      { s: 'jungwon', f: 'happy', t: "Good afternoon. Would you like to sit down?" },
      { register: 'jungwon' },
      { n: "The night he came through he'd said *it's you*, and the floor had gone out from under his voice, and then he'd looked at her face and watched her not know him, and something had happened behind his eyes like a door closing quietly in a long hallway. And then he'd gotten polite. He'd gotten more polite every minute after that, until by the time Mitsuru arrived he was the most courteous person Solar had ever met in her life, and she'd understood, without knowing how, that it was the worst thing that could have happened to his face." },
      { choose: [
        { t: "(Sit across from him.)", notes: 3, then: [
          { n: "She sat across the table. He sat when she sat, not before. He capped the red pen and laid it parallel to the edge of the notebook, and folded his hands, and waited, the way a person waits who has a great deal of practice waiting for other people to finish deciding things." }
        ] },
        { t: "You don't have to be polite to me.", notes: 2, then: [
          { s: 'jungwon', f: 'happy', t: "I'm not being anything. I'm being normal." },
          { n: "The dimples deepened. She had the strongest feeling she'd just made it worse." }
        ] },
        { t: "What are you writing? There's nobody here.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "Minutes." },
          { s: 'jungwon', f: 'neutral', t: "I take minutes. When I don't know what else to do with my hands, I take minutes. It's a meeting if I say it is." }
        ] }
      ] },
      { s: 'jungwon', f: 'neutral', t: "Have you eaten?" },
      { n: "It was such a strange question to be asked by him, of all people, that she laughed before she could decide not to, and he looked at her laughing like he was watching someone walk across a bridge he'd been told was out." },
      { s: 'solar', f: 'happy', t: "Why is that funny? Why is it funny that you asked me that?" },
      { s: 'jungwon', f: 'happy', t: "Because people usually ask me. Constantly. I have a friend who asks me eleven times a day. I don't answer him." },
      { s: 'jungwon', f: 'happy', t: "You used to ask too. You were meaner about it." },
      { n: "He said it lightly. He touched the watch on his left wrist while he said it, a heavy steel watch, too old for him, too big for him, and she saw that the second hand wasn't moving. It had stopped. It sat on the eleven like it was waiting to be let go." },
      { n: "Her math homework was in her bag. She knew it was in her bag because she'd been carrying it around for two days like a stone, and she took it out, because she needed to do something with her hands too, and he looked at it upside down across the table and his whole face changed." },
      { s: 'jungwon', f: 'serious', t: "...Number four. You carried the sign wrong." },
      { s: 'solar', f: 'flustered', t: "I didn't—" },
      { s: 'jungwon', f: 'serious', t: "You did. You always carry it wrong. You do it right in your head and then you write it down and something in your hand gets nervous and flips it. You did it on the—" },
      { n: "He stopped. He capped and uncapped the pen. The dimples were gone, and what was left of his face was very still and very young." },
      { s: 'jungwon', f: 'sad', t: "I'm sorry. That was rude." },
      { choose: [
        { t: "Show me. Where I flip it.", notes: 3, tally: { 'jungwon.H': 1 }, then: [
          { n: "He came around the table and sat beside her, not too close, and took the worksheet, and talked her through number four in a low, even, patient voice, and when she did it right he didn't say anything. He just put a small neat tick in the margin in red, the kind of tick that took up exactly as much room as it needed to." },
          { n: "She looked at the tick for much longer than it deserved. Somebody had made that tick on her homework before. She knew the shape of it like her own handwriting." }
        ] },
        { t: "You don't have to apologize. I'm the one who doesn't—", notes: 3, tally: { 'jungwon.S': 1 }, then: [
          { s: 'jungwon', f: 'sad', t: "Please don't." },
          { n: "He said it so quietly, so formally, with such perfect courtesy, that it landed like a door shut in her face, and she understood that he'd meant it to stop the sentence before she could finish it, and that he'd been afraid of the end of it." },
          { s: 'jungwon', f: 'neutral', t: "You don't have to finish that. I heard it the first time. Thank you." }
        ] },
        { t: "Were you this annoying at home?", notes: 2, then: [
          { s: 'jungwon', f: 'surprised', t: "..." },
          { s: 'jungwon', f: 'happy', t: "Worse. You'd know. You told me so, in front of the whole school, into a microphone." }
        ] }
      ] },
      { n: "When she left, the sun had gone long and orange across the table. He stood when she stood. He bowed when she bowed, even though she'd only done it because he had, and she saw him open the notebook again before she was out the door." },
      { n: "She looked back once through the little window. He'd written something at the top of the page. *Present:* and his own name, in neat print, and then hers, and a surname in front of it that he'd crossed out so thoroughly with the red pen that the paper had torn." }
    ] },

    { after: '10/24', title: '2: two presidents', place: 'Gekkoukan High · Student Council Room', time: 'After School', scene: [
      { n: "Midterms were over, and the school had the tired, scrubbed feeling of a building that had just been made to sit a test itself. Mitsuru was in the council room when Solar got there, which happened about as often as a solar eclipse, standing at the window with a folder held against her chest, and across the table from her, standing too, because she was standing, was Jungwon." },
      { n: "They were talking about the athletic budget. They were talking about it the way two people play a game of chess at a park table while the old men watch, slowly, courteously, each of them giving the other just enough room to make a mistake." },
      { s: 'mitsuru', f: 'neutral', t: "Your revisions are thorough. Thorough enough that I'm going to have to explain to the kendo club why their new bogu came out of the photography club's film budget." },
      { s: 'jungwon', f: 'happy', t: "The photography club hasn't bought film since March. They use their phones. I checked their receipts. They were very happy to show me." },
      { s: 'mitsuru', f: 'neutral', t: "...I see." },
      { n: "Mitsuru looked at Solar in the doorway with an expression that might, in someone less disciplined, have been the beginning of an eye-roll, and then looked back at Jungwon with something else entirely, something cool and level and almost kind." },
      { s: 'mitsuru', f: 'neutral', t: "Were you elected? Where you're from?" },
      { s: 'jungwon', f: 'neutral', t: "Two years running. The first time nobody stood against me." },
      { s: 'jungwon', f: 'neutral', t: "This year, someone decided to run against me." },
      { n: "His eyes moved to Solar and away so fast she might have imagined it. Mitsuru didn't imagine it. Mitsuru, Solar was fairly sure, had never imagined anything in her life." },
      { s: 'mitsuru', f: 'neutral', t: "And the other thing? You're someone's heir. It's in how you stand." },
      { n: "The room got very quiet. Jungwon smiled, and the dimples came back, sweet and deep and empty, and he bowed his head very slightly to her the way you'd bow to someone at a funeral." },
      { s: 'jungwon', f: 'happy', t: "You're very perceptive, Kirijo-san. So are you." },
      { s: 'mitsuru', f: 'neutral', t: "Did you choose it?" },
      { s: 'jungwon', f: 'happy', t: "No. Did you?" },
      { n: "Mitsuru held his eyes for a long second. Then she set the folder on the table, squared it with two fingers, and went to the door, and on her way past Solar she touched her elbow, lightly, which she had done exactly once before, on the night of the armband." },
      { s: 'mitsuru', f: 'neutral', t: "Don't let him audit you. He'll find something." },
      { n: "When she was gone, Jungwon sat down very slowly, like a man setting down something heavy he'd been told not to let anyone see him carry." },
      { s: 'jungwon', f: 'neutral', t: "I like her." },
      { n: "Yukari went past the open door with her bag on her shoulder, and slowed, and leaned back into the frame to look at him the way she looked at a new transfer student, with her chin up and her eyebrows ready." },
      { s: 'yukari', f: 'neutral', t: "So you're the other student council president." },
      { s: 'jungwon', f: 'happy', t: "Good afternoon. Your ribbon's out of dress code." },
      { s: 'yukari', f: 'surprised', t: "...Excuse me?" },
      { s: 'jungwon', f: 'happy', t: "Section four, paragraph two. Ribbons should be the school issue. That's a nicer one. I'd keep it. I'd just keep it in my bag on inspection days." },
      { n: "Yukari opened her mouth, closed it, looked at Solar with an expression of profound betrayal, as if Solar had personally brought him here to do this, and went away down the corridor at speed. A moment later they heard her voice from the stairwell saying, to someone, *at a school he doesn't even GO to.*" },
      { s: 'jungwon', f: 'flustered', t: "...That was rude of me. I'll apologize. I can't help it. My hands want a clipboard." },
      { s: 'jungwon', f: 'happy', t: "That was the most frightening conversation I've had this year, and I've had several." },
      { choose: [
        { t: "You were more polite the angrier you got.", notes: 3, then: [
          { s: 'jungwon', f: 'surprised', t: "..." },
          { s: 'jungwon', f: 'neutral', t: "Who told you that?" },
          { s: 'solar', f: 'neutral', t: "Nobody. I watched it happen." },
          { s: 'jungwon', f: 'neutral', t: "...Yes. Well. You always did. You used to tell me it was the most annoying thing about me." }
        ] },
        { t: "You ran against someone. The second time.", notes: 3, tally: { 'jungwon.H': 1 }, then: [
          { s: 'jungwon', f: 'neutral', t: "Someone ran against me. There's a difference. I didn't ask her to." },
          { s: 'jungwon', f: 'serious', t: "Her posters were on every corner of every hallway by Monday morning. Her friends hung them. I had to walk past her face to get to my own office." },
          { s: 'solar', f: 'neutral', t: "Who won?" },
          { s: 'jungwon', f: 'neutral', t: "I did. And then I chose her as my vice president, which she told me, at some volume, she could not possibly be." },
          { s: 'jungwon', f: 'happy', t: "She is. She's very bad at following my agenda. The bake sale was entirely her idea." },
          { n: "He said *her* the way you'd set down a cup you were afraid of chipping, and didn't look at Solar at all while he said it, which was how she knew exactly who he meant, and that he was waiting to see whether she did." }
        ] },
        { t: "You're both somebody's heir.", notes: 3, tally: { 'jungwon.S': 1 }, then: [
          { s: 'jungwon', f: 'sad', t: "Somebody's what's left, in my case." },
          { n: "He touched the watch. The second hand sat on the eleven." },
          { s: 'jungwon', f: 'happy', t: "I'm sorry. That's not a conversation to have over committee minutes. Would you like some tea? The kettle in here is terrible. I've grown fond of it." }
        ] }
      ] },
      { n: "He made the tea in the terrible kettle, and it was terrible, and they drank it anyway, and he showed her how to read the athletic budget in a way that made it look less like a wall of numbers and more like a map of who in the school wanted what and why. It was the most useful thing anyone had taught her since April. She didn't tell him that. She had a feeling she'd told him things like that before, and that he'd kept them somewhere." }
    ] },

    { after: '10/29', title: '3: delivered late', place: 'Gekkoukan High · Student Council Room', time: 'After School', scene: [
      { n: "He was sitting with his phone face-up on the table in front of him, not touching it, the way you'd sit with a letter you couldn't make yourself open, and every few minutes it buzzed, once, and lit up, and he looked at it without moving his head." },
      { s: 'jungwon', f: 'neutral', t: "They keep coming in." },
      { s: 'jungwon', f: 'neutral', t: "All from the same night. All stamped within the same hour. Eleven fifty-eight. Twelve-oh-three. Twelve forty-one. Today one came in stamped with a date I've never seen. Not wrong. Just one I don't recognize." },
      { s: 'jungwon', f: 'serious', t: "In these messages, Sunoo thinks I've been gone an hour. Heeseung thinks it's been a night. Niki thinks I've been gone a week and he's taken my seat at lunch." },
      { s: 'jungwon', f: 'neutral', t: "I don't know who's right. I've stopped asking my watch." },
      { n: "He turned the phone around so she could see. A group chat. Its name made her laugh out loud before she could stop it." },
      { phone: [
        { from: 'sunoo', t: "sunshinesunoo: jungwon did u eat" },
        { from: 'sunoo', t: "sunshinesunoo: jungwon" },
        { from: 'sunoo', t: "sunshinesunoo: ur gonna pass out in the middle of an exam if u dont eat SOMETHING jungwon" },
        { from: 'niki', t: "rikiniki: hes not answering bc hes busy being mean somewhere else" },
        { from: 'heeseung', t: "heeeseung: niki" },
        { from: 'niki', t: "rikiniki: what. thats literally the name of the gc" },
        { from: 'jungwon', t: "jungwongarden: i'm fine." },
        { from: 'sunoo', t: "sunshinesunoo: THAT'S NOT AN ANSWER TO THE QUESTION" }
      ], contact: 'jungwon is mean · 11:58 PM' },
      { s: 'solar', f: 'happy', t: "*Jungwon is mean?*" },
      { s: 'jungwon', f: 'flustered', t: "I didn't name it." },
      { s: 'jungwon', f: 'neutral', t: "I asked them to change it nineteen times. Niki changed it to *JUNGWON IS MEAN (AFFECTIONATE)* once. Then back." },
      { n: "His last message, the *i'm fine.*, full stop and all, had a little gray word under it. *Sending.* It had said *Sending,* he told her, for nine days." },
      { n: "Under it, while she watched, a new one came in. It was stamped twelve forty-one. It was from someone called *jakeyy*, and it was just two lines, and Jungwon read them and put his hand flat on the table beside the phone, very carefully, like you'd put a hand on a table on a moving train." },
      { phone: [
        { from: 'jake', t: "jakeyy: we miss u jungwon" },
        { from: 'jake', t: "jakeyy: exams r at 8. ur never late to anything. we'll save u a seat" }
      ], contact: 'jungwon is mean · 12:41 AM' },
      { s: 'jungwon', f: 'neutral', t: "They're going to save me a seat." },
      { s: 'jungwon', f: 'neutral', t: "Heeseung will put his bag on the chair next to his and tell the proctor it's taken, very politely, until the proctor gives up. He's done it before. He was my vice president for two years. He's still better at being one than I am at being anything." },
      { choose: [
        { t: "Then you'll have somewhere to sit.", notes: 3, then: [
          { s: 'jungwon', f: 'neutral', t: "Yes. I suppose I will." },
          { n: "He said it like a man who'd never before considered that a seat could be kept for him rather than assigned, and found the idea mildly alarming, and wanted it very much." }
        ] },
        { t: "What were you doing? That night.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "Walking from the cafe to the school. To get my notes. I'd left them in the council room the night before an exam. I don't leave things. I'd left them." },
          { s: 'jungwon', f: 'sad', t: "I think I wanted a reason to be somewhere alone for ten minutes. I got one. It's been a month." }
        ] }
      ] },
      { n: "There was a second phone beside the first one. She hadn't noticed it, which she suspected was the point. Older, black, a folding one with a stub of an antenna, the kind nobody she'd ever seen at Gekkoukan carried, and its little outside screen was dark." },
      { s: 'solar', f: 'neutral', t: "That one doesn't buzz." },
      { s: 'jungwon', f: 'neutral', t: "No. Nobody on that one texts. They call, or they come to the door. It hasn't rung." },
      { s: 'jungwon', f: 'neutral', t: "I'd rather you heard this from me in a sentence than worked it out from my hands, so. I'm one person from two places." },
      { s: 'jungwon', f: 'neutral', t: "In one I'm eighteen, and I'm the president of a school council at a school you'd find very strict, and I have a dog the size of a loaf of bread. In the other I'm twenty-two, and I keep my family's books, and I'm—" },
      { n: "He stopped. He squared the two phones so their edges lined up, the new one and the old one, side by side, like exhibits." },
      { s: 'jungwon', f: 'neutral', t: "The second one is harder to say in a council room." },
      { s: 'jungwon', f: 'neutral', t: "Both of them are me. I've checked. I skip breakfast in both. I wind the same watch. And you're in both of them, which is the only reason I've stopped worrying that one of them is a dream." },
      { choose: [
        { t: "Which one are you right now?", notes: 3, then: [
          { s: 'jungwon', f: 'neutral', t: "The one who's being asked. That's the honest answer." },
          { s: 'jungwon', f: 'happy', t: "The diplomatic answer is both, thank you for your question, and I'll have a written response by Friday." }
        ] },
        { t: "You're allowed to be both. I'm three.", notes: 3, tally: { 'jungwon.S': 1 }, then: [
          { s: 'jungwon', f: 'surprised', t: "..." },
          { s: 'jungwon', f: 'flustered', t: "Yes. You are. I keep forgetting that I'm the simple case." },
          { n: "He said it with perfect courtesy, and his ears went red anyway, the way they did when something got past the courtesy before he could stop it at the door." }
        ] },
        { t: "(Turn the old phone face up, so it isn't alone.)", notes: 2, then: [
          { n: "She turned it face up. It was a stupid thing to do. He looked at it lying there beside the other one for a long moment, and then he moved them a centimeter closer together, and didn't say anything at all." }
        ] }
      ] },
      { choose: [
        { t: "Tell them you ate. Type it.", notes: 3, tally: { 'jungwon.H': 1 }, then: [
          { n: "He looked at her. He looked at the phone. He typed it very slowly, *i ate*, which was true, because she'd watched him eat half a melon pan at lunch under protest, and sent it, and the little gray word came up underneath it." },
          { s: 'jungwon', f: 'neutral', t: "*Sending.*" },
          { s: 'jungwon', f: 'neutral', t: "I'm going to watch it until it changes." },
          { n: "He did. She stayed and watched it with him. It didn't change. It didn't need to, she thought. He'd told someone something true, and it was out there in the line somewhere, on its way." }
        ] },
        { t: "Did you eat?", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "Now there are twelve." }
        ] },
        { t: "Do you want to go home?", notes: 2, then: [
          { s: 'jungwon', f: 'flustered', t: "That's a very large question to ask at four in the afternoon." },
          { s: 'jungwon', f: 'flustered', t: "Yes. No. Not without— Yes." },
          { n: "He put the phone face down. The answer stayed in the room like a fourth person." }
        ] }
      ] },
      { n: "There was a knock at the open door, which was ridiculous, because the door was open, and a tall boy in a different school's blazer was leaning in the frame with his hands in his pockets and the face of someone who'd come to look at a rival's car." },
      { s: 'jihoon', f: 'neutral', t: "Oh. It's you." },
      { s: 'jungwon', f: 'happy', t: "Park Jihoon. How lovely. You're looking well." },
      { s: 'jihoon', f: 'serious', t: "Don't do the dimples at me, Yang. I can see right through the dimples. I've been seeing through the dimples since first year." },
      { s: 'jihoon', f: 'neutral', t: "Sol. The crane game at the mall ate four hundred yen and I need a witness to my suffering. Come on. You're the only witness I trust." },
      { n: "Jungwon's smile didn't move by a millimeter. It got, if anything, sweeter. She'd learned by now what that meant." },
      { s: 'jungwon', f: 'happy', t: "Please go. I wouldn't want to keep you from a crisis." },
      { s: 'jihoon', f: 'neutral', t: "Wow. See? *Wouldn't want to keep you.* That's how you know he hates me." },
      { n: "She went. In the doorway she looked back. He'd turned the phone face up again, and was looking at it, and his hand was on the watch, and he didn't look up." },
      { n: "Ten minutes later, from the far side of the courtyard, she glanced back at the school and saw a navy blazer coming out through the gate behind them at an even, unhurried pace, a long way back, as if its owner simply happened to be going to the mall too. Jihoon saw it at the same moment. He didn't say anything. He walked a little faster for a block, and then, as if he'd decided he wasn't going to give Yang the satisfaction, a little slower." }
    ] },

    { after: '11/6', title: '4: sea bream', place: 'Iwatodai Dorm · Kitchen', time: 'Late Night', music: 'tender', scene: [
      { n: "Somebody was cooking at midnight. Not in the Dark Hour; after it, when the green had drained out of the windows and the dorm had gone back to being a dorm. She smelled it from the stairs. Kombu and soy and sake, and something seared in a dry pan until the skin blistered." },
      { n: "He was alone in the kitchen with his sleeves rolled to the elbow and a white towel tucked into the waistband of his school trousers, and there was a fish on the cutting board, a sea bream, pink and silver, that she had no idea how he'd gotten, and he was taking it apart with Shinjiro's old knife in long, unhurried, absolutely precise strokes, the way you'd turn the pages of a book you'd read many times." },
      { n: "He didn't live here. He had a room at the guesthouse by the station, with a kitchen that a polite woman locked at nine, and Mitsuru, asked, had said the dorm's was his after midnight on one condition, which was that he wash up, which she had added would make him the first. He'd walked over with the fish in a cooler bag and a clay pot under his arm like a man delivering something to an embassy." },
      { n: "He didn't look up. He didn't stop." },
      { s: 'jungwon', f: 'neutral', t: "The fish market by the pier opens at four. The man there was very surprised to see a high school student. I told him I was buying for my family." },
      { s: 'jungwon', f: 'neutral', t: "It wasn't a lie. Exactly." },
      { n: "He laid a fillet aside, skin down, and wiped the blade on the towel, and held the knife out to her across the counter, handle first, with a small polite inclination of the head, like a man offering a guest the first cup." },
      { s: 'jungwon', f: 'neutral', t: "Would you like to do the other side?" },
      { choose: [
        { t: "(Take the knife.)", notes: 3, tally: { 'jungwon.S': 1 }, then: [
          { n: "She took it. Her hand closed on the handle and adjusted, a small shift of the grip, and she didn't do that, she'd never done that, and she watched her own hands turn the fish over and find the backbone and go in along it like they'd been taught by someone very short in rubber boots who had no patience at all." },
          { n: "She was faster than him. Not much. Enough. When she lifted the second fillet clean off the bone there was a thin pale line across her left palm, so faint she'd never once noticed it, and he was looking at it." },
          { s: 'jungwon', f: 'neutral', t: "...Yes." },
          { n: "That was all he said. His face had gone completely still. No dimples. Nothing at all, and she knew, without knowing how she knew, that this was what it looked like when he was happy." }
        ] },
        { t: "I don't know how.", notes: 2, then: [
          { s: 'jungwon', f: 'sad', t: "You do." },
          { s: 'jungwon', f: 'neutral', t: "But that's all right. Watch me, then. You can tell me when I do it wrong. You will." }
        ] },
        { t: "Who taught you to cook?", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "Nobody. I taught myself. At night. It's the only time the kitchen's empty." },
          { s: 'jungwon', f: 'neutral', t: "It's the only thing I do that nobody grades." }
        ] }
      ] },
      { n: "The rice went into a heavy clay pot she'd never seen in the dorm and would never see again, with the kombu and the fillets laid over it skin up, and he turned the flame down so low it was barely a blue ring, and stood watching it with his arms folded and his hand around his own left wrist." },
      { n: "Footsteps on the stairs. Akihiko came in in a T-shirt and track pants, with his hair flat on one side from the pillow, for water, the way he came down for water every night at one, and stopped in the doorway, and looked at the counter, and at the knife in Jungwon's hand." },
      { n: "Something went across his face and stayed there. Solar knew that knife. Everyone in the dorm knew that knife. It had lived in the drawer by the stove since the first week of October and nobody had touched it." },
      { s: 'jungwon', f: 'flustered', t: "...I'm sorry. Is this someone's? I should have asked. I'll put it back." },
      { s: 'akihiko', f: 'serious', t: "It's Shinji's." },
      { n: "He didn't say anything else for a moment. He looked at the fish, and the two neat fillets, and the pot, and the low blue flame, the whole careful midnight business of somebody making food for somebody else in a kitchen that had been very quiet since October." },
      { s: 'akihiko', f: 'neutral', t: "No. Use it. He'd want somebody to. He'd hate that it's been sitting in a drawer." },
      { s: 'akihiko', f: 'neutral', t: "...He'd have something to say about your grip. Don't take it personally." },
      { n: "He got his water. He stood for a second longer at the sink with the glass in his hand, looking at the dark window, and then went back up without another word, and Jungwon stood holding the knife and looking at the doorway he'd gone through, and then bowed to it, very slightly, the way you'd bow in a room where someone had died." },
      { n: "Someone else went past the door a minute later, on the way to the back stairs, in a black hoodie with the hood up. He didn't come in. He slowed in the doorway just long enough to look at the fish, and the pot, and the knife, and Jungwon, in that order, the way you'd read a menu you had no intention of ordering from." },
      { s: 'jungwon', f: 'neutral', t: "Donghyuck." },
      { s: 'haechan', f: 'neutral', t: "Yang." },
      { s: 'haechan', f: 'happy', t: "Midnight fish. Very normal. Lock your door, agasshi, the young master's cooking." },
      { n: "Then he was gone, down toward the laundry room, his steps not hurrying at all, and Jungwon laid the next fillet down skin-side up with a precision that was, she thought, very slightly louder than it had been before." },
      { s: 'jungwon', f: 'neutral', t: "He'll have told you he has two lives. He's right. So do I. I'd only ask you not to assume they're the same two." },
      { s: 'jungwon', f: 'neutral', t: "We have one in common. It's the one where we're not friends." },
      { s: 'solar', f: 'neutral', t: "Your watch stopped." },
      { s: 'jungwon', f: 'neutral', t: "When I came through. Eleven fifty-eight and some seconds." },
      { s: 'jungwon', f: 'sad', t: "It was my brother's. There's a link taken out so it fits me. He gave it to me the night he went, and told me it had never fit him. It had. I've only lately found out how much he lied to me." },
      { s: 'jungwon', f: 'neutral', t: "I wind it every night anyway. In case." },
      { choose: [
        { t: "In case of what?", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "I don't know. I've never been good at in case. I prefer to have a plan." },
          { s: 'jungwon', f: 'serious', t: "Winding it is the plan." }
        ] },
        { t: "(Don't ask about the brother.)", notes: 3, then: [
          { n: "She didn't ask. She felt him notice she didn't ask, felt it the way you feel the temperature change when someone opens a window behind you, and his shoulders came down half an inch." },
          { s: 'jungwon', f: 'neutral', t: "Thank you." }
        ] },
        { t: "Yang Jungwon-ssi.", notes: 3, tally: { 'jungwon.S': 1 }, then: [
          { n: "It came out of her formal and pointed and a little cold, a name with all its edges filed sharp, and she had no idea why she'd said it like that or where she'd learned to." },
          { s: 'jungwon', f: 'surprised', t: "..." },
          { s: 'jungwon', f: 'neutral', t: "You only call me that when you're trying to make me angry." },
          { s: 'jungwon', f: 'happy', t: "It always works. Please don't stop." }
        ] }
      ] },
      { n: "They ate it at the kitchen table at one in the morning with the overhead light off and the stove light on, out of two bowls he'd found at the back of a cupboard. It was the best thing she had ever eaten. She knew it with her whole body." },
      { s: 'solar', f: 'happy', t: "...It's terrible." },
      { n: "She had no idea why she said it. It came out like a line she'd been handed. He put his chopsticks down and looked at her for a long time across the table, and then he laughed, quietly, into his hand, the first real laugh she'd heard out of him, and his ears went red." },
      { s: 'jungwon', f: 'flustered', t: "Yes. Thank you. That's exactly what you say." },
      { n: "In the morning the pot was gone. Both bowls were washed and set upside down on the rack, which nobody in this dorm had done in their lives." }
    ] },

    { after: '11/13', title: '5: the corner', place: 'Naganaki Shrine', time: 'After School', music: 'sun', scene: [
      { n: "There was an old man at Naganaki who played baduk on a folding board under the big tree by the offering box, every afternoon from three to five, against whoever would sit down, and nobody ever sat down, because he won in forty moves and then explained to you, gently, at length, why." },
      { n: "Jungwon sat down. Solar watched from the steps with a can of canned coffee warming her hands while the old man lost, slowly, then quickly, and then sat back on his stool with an expression of pure, delighted outrage, and asked Jungwon who had taught him." },
      { s: 'jungwon', f: 'happy', t: "Myself, sir. Against myself. At night." },
      { s: 'jungwon', f: 'neutral', t: "It's the only way to make sure your opponent is taking it seriously." },
      { n: "The old man went off to buy them all a drink and complain about it to the shrine cat. Jungwon cleared the board, every stone back in its bowl, black and white, and then looked up at her on the steps and tipped his head at the empty stool." },
      { n: "Before he went, he'd looked at the two of them, the boy in the navy blazer and the girl in the Gekkoukan one, and asked, with the frankness of a man who had outlived the need for tact, whether they were courting." },
      { s: 'jungwon', f: 'happy', t: "We're colleagues, sir. She's my vice president." },
      { n: "He'd said it with the dimples, sweet and immediate, and the old man had laughed so hard he'd had to hold the tree." },
      { choose: [
        { t: "Colleagues?", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "It's the most accurate word I'm allowed to use in front of old men at shrines. The accurate words are different in each place, and none of them are for strangers." },
          { s: 'jungwon', f: 'neutral', t: "In one of them you ran against me first. That part's still true everywhere." }
        ] },
        { t: "(Say nothing. Let the old man laugh.)", notes: 3, then: [
          { n: "She said nothing. Jungwon looked at her sideways, quick, to see what her face was doing, and found it doing nothing, and looked back at the board with the faint, private satisfaction of someone who'd been given exactly the silence he'd hoped for." }
        ] }
      ] },
      { s: 'jungwon', f: 'neutral', t: "Would you play?" },
      { choose: [
        { t: "I don't know how.", notes: 2, then: [
          { s: 'jungwon', f: 'sad', t: "No. I don't suppose you do. Not here." },
          { s: 'jungwon', f: 'neutral', t: "Sit anyway. Put a stone wherever you like. It's very hard to do it wrong in the first five moves. It's very easy after that." }
        ] },
        { t: "(Sit down and take the black stones.)", notes: 3, then: [
          { n: "She sat and took the black bowl without thinking about it, and he watched her take it, and the corner of his mouth moved." }
        ] }
      ] },
      { n: "She didn't know the game. Her hands didn't care. Somewhere around the twentieth stone she stopped trying to think and let them, and they went to the lower right corner, again and again, small cold stones clicking down onto the grid, building something she couldn't see the shape of until it closed." },
      { n: "Four of his white stones were inside it. She'd taken them. She hadn't known she was doing it. He looked at the corner for a very long time." },
      { s: 'jungwon', f: 'serious', t: "You always go to the corner. You build there where nobody's looking and you let me have the whole middle of the board, and I think I'm winning, and I'm not." },
      { s: 'jungwon', f: 'neutral', t: "Atari. That's what it's called when a group has one way out left. It's polite. It means one more and it's gone." },
      { s: 'jungwon', f: 'happy', t: "You never say it. You just do it. Very rude." },
      { choose: [
        { t: "A room over the water.", notes: 3, tally: { 'jungwon.S': 1 }, then: [
          { n: "Cold glass, and lights in the dark on the other side of it, and a long bridge going out across black water, lit along its whole length like a necklace somebody had dropped. She could see it. She could see it more clearly than the shrine." },
          { s: 'jungwon', f: 'neutral', t: "From my window you can see your house. Across the water. I've stood there a lot." },
          { s: 'jungwon', f: 'neutral', t: "Somebody taught you the corner on an old board when you were very small. Not me. You'd know better than I would who." }
        ] },
        { t: "And at home? The other home?", notes: 3, tally: { 'jungwon.H': 1 }, then: [
          { s: 'jungwon', f: 'neutral', t: "At the other one you don't play baduk. You play a crane game at the mall for forty minutes and lose and call it an investment." },
          { s: 'jungwon', f: 'sad', t: "I didn't come with you. I'm not invited to that one. I heard about it. Everyone hears about everything." }
        ] },
        { t: "I'm sorry. For being rude.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "Don't be. It's the most honest thing about the way you play." }
        ] }
      ] },
      { n: "The old man came back with three cans of hot corn soup, which he seemed to believe was a drink, and looked at the board, and at the corner, and at Solar, and sat down heavily on the steps and said something about the young these days that sounded mostly like admiration." },
      { n: "Jungwon put the stones away one by one. He did it slowly. When he was done he left one black stone on the board, in the corner, where she'd put her last one, and stood, and bowed to the old man, and to her." },
      { s: 'jungwon', f: 'neutral', t: "Thank you for the game." },
      { n: "On the walk down the steps he counted them under his breath. She didn't think he knew he was doing it. A hundred and twelve. It was her habit, she realized. Not his. He'd caught it from her, somewhere, a long time ago, and kept it." }
    ] },

    { after: '11/20', title: '6: the pin', place: 'Gekkoukan High · Student Council Room', time: 'After School', scene: [
      { n: "He wasn't working. That was the first thing. The binders were stacked at the end of the table, squared, untouched, and the red pen was capped, and he was sitting with his blazer open and his hands flat on the table in front of him like a man waiting for a verdict he'd already read in the jury's faces." },
      { n: "On the lapel of the navy blazer, the way it always was, was a small enamel pin. Blue and gold. A single word on it, very small, in neat capitals. She'd seen it every day for a month and never really looked." },
      { s: 'jungwon', f: 'neutral', t: "There are exams in the morning. At home. I think." },
      { s: 'jungwon', f: 'sad', t: "I keep telling myself it's still the night before, at home. I left the cafe to get my notes from the council room, and opened the door, and it was this one, and I've been here a month. Niki's texts don't agree with me about what night it is. I've stopped asking which of us is right. In mine, my parents are still waiting up. Sunoo is still asking if I ate." },
      { s: 'jungwon', f: 'sad', t: "My mother told me to wait till I got home. In front of a bake sale. I haven't gone home. It's the first time I've ever disobeyed her, and I didn't even do it on purpose." },
      { n: "He took the pin off. It took him a second, his fingers clumsy on the catch in a way his fingers were never clumsy, and then he set it on the table between them and pushed it a few centimeters toward her with one finger, the way you'd move a stone on a board." },
      { n: "He reached into the inside pocket of the blazer and took out two folded sheets of paper, soft at the creases from being carried, and laid them on the table side by side, and squared them. His handwriting. The same neat slanted print. One was a page and a half. The other was four lines." },
      { s: 'jungwon', f: 'neutral', t: "Results day. One for winning. One for losing. I wrote them both the night before. I always write both." },
      { s: 'jungwon', f: 'neutral', t: "I read the short one. I've carried the long one ever since. The losing one's longer. I had more to say." },
      { choose: [
        { t: "(Read the losing one.)", notes: 3, tally: { 'jungwon.H': 1 }, then: [
          { n: "She unfolded it. It thanked the school. It thanked the council. It thanked his friends by name, all six, Niki last with a note in the margin, *(he'll be happy).* And then, in the last paragraph, it congratulated the winner, and said the winner had run a better campaign than anyone had expected, including him, and that the school was lucky, and that he'd be in the second row, and that he'd clap first." },
          { n: "The winner wasn't named. There was a blank where the name went. He'd left it blank so he wouldn't have to write it, and then he'd won, and never had to, and kept it anyway." }
        ] },
        { t: "(Read the winning one.)", notes: 2, then: [
          { n: "Four lines. *Thank you. I'll keep working. I'm grateful for the opposition. I'll try to deserve this.* That was all. Under the last line, in a different pen, added later, smaller: *and I'd like to name my vice president.*" }
        ] },
        { t: "(Don't read either.)", notes: 2, tally: { 'jungwon.S': 1 }, then: [
          { n: "She didn't touch them. He watched her not touch them, and something in his shoulders came down, like a man who'd been braced to be read out loud and had been spared it." }
        ] }
      ] },
      { s: 'jungwon', f: 'neutral', t: "Nobody asked me if I wanted it. The first time. My name was on the form before I knew there was a form. It's like that in the other place too. You inherit what's still standing." },
      { s: 'jungwon', f: 'serious', t: "And you. Someone put your name on that ballot too, didn't they. You don't remember. I do. You looked like you were going to be sick in the assembly hall." },
      { n: "She picked up the pin. It was small and absurdly heavy, heavier than enamel had any right to be, and her thumb found the catch on the back without looking, the way it would find the catch on something she'd held a hundred times, turning it over and over at night, deciding whether she wanted it." },
      { fragment: 'hoax-president-pin' },
      { n: "The star on Haenim's sash ticked, once. A tiny metal sound, like a pin dropped on a desk in an empty room." },
      { s: 'solar', f: 'sad', t: "I didn't want to win." },
      { n: "It came out of her before she knew it was in her. He looked at her like she'd read aloud a sentence from his own diary." },
      { s: 'jungwon', f: 'sad', t: "...No. I know. You didn't." },
      { s: 'jungwon', f: 'serious', t: "And then I made you my vice president anyway, in front of everyone, and you told me you couldn't possibly be. You were right to be angry. The others told me it was a good idea. I'm supposed to be smarter than that." },
      { choose: [
        { t: "Did I stay angry?", notes: 2, tally: { 'jungwon.H': 1 }, then: [
          { s: 'jungwon', f: 'neutral', t: "For about four minutes." },
          { s: 'jungwon', f: 'happy', t: "And then less. Your posters were ridiculous, by the way. I kept one. It's in my desk drawer, face down, so it can't look at me." }
        ] },
        { t: "Do you want me to keep it? The pin?", notes: 3, then: [
          { s: 'jungwon', f: 'neutral', t: "I want you to hold it. That's not the same as keeping." },
          { s: 'jungwon', f: 'neutral', t: "Give it back before the end. Or don't. You'll decide. You always do, in the end, even when everyone thinks they've decided for you." }
        ] }
      ] },
      { n: "Outside the window the sky was going the dark blue of four-thirty in November, and the lights were coming on across the courtyard one by one. He watched them come on. His hand went to the watch and stayed there." },
      { s: 'jungwon', f: 'serious', t: "Something keeps talking to me. In the Dark Hour. When I'm walking back to the guesthouse." },
      { s: 'jungwon', f: 'serious', t: "It's very courteous. It offers to let me forget the morning. The exams, and the house with the lights on, and my mother's voice through a door, and whatever's waiting on the other side of any of it. It says I've done enough." },
      { s: 'jungwon', f: 'sad', t: "It says I could forget you too, and it would stop hurting, the way you are now. Not knowing me." },
      { n: "He said it in the same even, formal voice he'd use to read out a budget line. He didn't look at her. His knuckles on the watch had gone white." },
      { choose: [
        { t: "What did you tell it?", notes: 3, then: [
          { s: 'jungwon', f: 'happy', t: "I said, *No, thank you.*" },
          { s: 'jungwon', f: 'happy', t: "It was the most polite I've ever been in my life. You'd have been frightened." }
        ] },
        { t: "You have done enough. And you're not allowed to forget me.", notes: 3, then: [
          { s: 'jungwon', f: 'surprised', t: "..." },
          { s: 'jungwon', f: 'neutral', t: "Is that a motion?" },
          { s: 'solar', f: 'neutral', t: "It's an order." },
          { s: 'jungwon', f: 'flustered', t: "...Seconded. Carried. I'm writing it down." },
          { n: "He did. In the minutes. She watched him do it, and the hand that wasn't writing let go of the watch." }
        ] }
      ] },
      { n: "She left with the pin in her blazer pocket. All the way home she kept her hand around it. It was small, and heavy, and she still wasn't sure she wanted it, and for the first time that didn't feel like a problem she had to solve tonight." }
    ] },

    { after: '12/1', title: '7: maeumi', place: 'Naganaki Shrine', time: 'After School', music: 'sun', scene: [
      { n: "The first of December was cold and clean and blue, the kind of day that made Naganaki's steps look whiter than they were, and Jungwon was sitting on the top one with Koromaru, who had decided at some point in the last week that Jungwon was his, and Jungwon was talking to the dog in a low, careful, extremely formal voice." },
      { n: "She stopped three steps down, because she could hear what he was saying, and because he hadn't heard her yet, which had never happened before." },
      { s: 'jungwon', f: 'serious', t: "...and I said things to you that I'm not going to repeat, because repeating them would be a second offense. You were in front of my house. You hadn't done anything. Your dog was bigger than mine and very friendly and I was tired and late and I'd been awake since four." },
      { s: 'jungwon', f: 'serious', t: "None of that is an excuse. I'm listing it so you know I've thought about it. I've thought about it a great deal. I'm sorry. I should have said so at the time. Instead I said it weeks later, in a nurse's office, to a girl I thought was asleep, and I spent the whole campaign before that being—" },
      { n: "Koromaru licked his ear. He stopped, and closed his eyes, and let out a breath that went white." },
      { s: 'jungwon', f: 'neutral', t: "...Thank you. That's very gracious. I don't think you understood the terms." },
      { choose: [
        { t: "He understood. He's a good judge of character.", notes: 3, then: [
          { s: 'jungwon', f: 'surprised', t: "..." },
          { s: 'jungwon', f: 'flustered', t: "How long have you been standing there?" },
          { s: 'solar', f: 'neutral', t: "Since *you were in my road.*" },
          { s: 'jungwon', f: 'flustered', t: "That's nearly all of it." }
        ] },
        { t: "Who was that apology for?", notes: 3, tally: { 'jungwon.H': 1 }, then: [
          { s: 'jungwon', f: 'neutral', t: "Someone with a very big, very happy, very white dog. On the first morning of school. At home." },
          { s: 'jungwon', f: 'neutral', t: "I said it to her once already. Late, and badly. I'd like to say it properly. I've been practicing it on him for a week. He accepts it every time. He's terrible at negotiation." }
        ] }
      ] },
      { n: "She sat down on the step beside him. Koromaru moved over to put his chin on her knee, which was, she thought, fair." },
      { s: 'solar', f: 'neutral', t: "In September I heard a boy's voice up here. Saying a dog's name. Then nobody was here." },
      { s: 'solar', f: 'serious', t: "*Maeumi.*" },
      { n: "He went so still that Koromaru lifted his head." },
      { s: 'jungwon', f: 'surprised', t: "That's my dog." },
      { s: 'jungwon', f: 'neutral', t: "He's very small. He gets out. He was out the night I left. I was calling him at the end of our road and then I was calling him somewhere I didn't recognize, and the steps were whiter, and there were more of them." },
      { s: 'jungwon', f: 'serious', t: "I thought I'd dreamed it." },
      { n: "He looked down at his hands. They were cold, and very clean, and the left one had a fresh scrape across the back of it that hadn't been there a week ago. She knew where it had come from. She'd been there, on Saturday, in the tower, when something had stood up behind him out of the gap like a bridge built in a single night, and he'd raised one arm without looking and every Shadow on the floor had stopped." },
      { s: 'jungwon', f: 'neutral', t: "I haven't missed. In there. Not once. Junpei asked me where I learned to aim like that. I told him a range, abroad. He thought I was joking." },
      { s: 'jungwon', f: 'neutral', t: "I'm a very bad liar to people I like. I don't know how you manage it." },
      { choose: [
        { t: "Apologize to me. The real one. I'll accept it for her.", notes: 3, then: [
          { n: "He looked at her for a long time. Then he turned on the step so he was facing her properly, and bowed, from the shoulders, the way you'd bow to someone you'd wronged and intended to keep facing, and said it all again, every word, to her this time, and it was better the second time, because it wasn't practice." },
          { s: 'solar', f: 'neutral', t: "Accepted." },
          { s: 'jungwon', f: 'neutral', t: "...You can't accept it for her." },
          { s: 'solar', f: 'neutral', t: "Watch me." }
        ] },
        { t: "You don't have to apologize to me. I don't remember it.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "I know. That's why I'm practicing on the dog." },
          { s: 'jungwon', f: 'serious', t: "I'd like to do it properly. To someone who remembers. Even if it's only you, later." }
        ] }
      ] },
      { n: "At the bottom of the steps Ken was waiting with Koromaru's leash wound around his hand and his school bag on his back and the expression of a fifth-grader who had been sent to collect a dog and found the dog had a social life." },
      { s: 'ken', f: 'neutral', t: "He's supposed to be home by five. He has a schedule." },
      { s: 'jungwon', f: 'happy', t: "I apologize. I kept him. It was entirely my fault. He was helping me with something." },
      { s: 'ken', f: 'neutral', t: "...With what?" },
      { s: 'jungwon', f: 'neutral', t: "An apology. He was very patient." },
      { n: "Ken looked at him for a long, measuring moment, a small serious boy weighing a much taller serious boy, and then nodded, once, like a colleague, and clipped the leash on, and Koromaru went with him looking back over his shoulder at Jungwon the whole way down the street." },
      { s: 'jungwon', f: 'happy', t: "I like him. He has a schedule. I respect a schedule." },
      { n: "They walked down the steps together with Koromaru trotting ahead and stopping on every landing to make sure they were still coming. He counted under his breath. So did she. They came out at the bottom on the same number." }
    ] },

    { after: '12/9', title: '8: math homework', place: 'Gekkoukan High · Library', time: 'After School', music: 'tender', scene: [
      { n: "Finals were in five days. The library had the hush of a hospital waiting room, every table taken by someone bent over a textbook with the posture of a person being slowly crushed, and Jungwon had claimed the one table by the radiator by being there at three-fifteen every day for a week until everyone else gave up." },
      { n: "He'd made her a worksheet. By hand. Twenty problems in his neat, slanted, slightly too-small print, building from easy to cruel, and she'd done them, and now he was correcting them in red." },
      { n: "Two tables over, Jihoon was pretending to study. He'd been pretending to study since three-thirty. He had a textbook open in front of him that belonged to Junpei and was upside down, and every few minutes he looked up over it at the back of Jungwon's head with the expression of a man watching a rival's car be parked in his space." },
      { s: 'jungwon', f: 'neutral', t: "He's been there forty minutes." },
      { s: 'solar', f: 'neutral', t: "I know." },
      { s: 'jungwon', f: 'happy', t: "His book's upside down. I'm not going to tell him. I'd like to see how long it lasts." },
      { n: "It lasted another twenty minutes, until Fuuka sat down across from Jihoon with her own books and very kindly turned his textbook the right way up without a word, and Jihoon turned the color of a postbox, and Jungwon didn't laugh, at all, in a way that took up most of his face." },
      { n: "She watched his pen move. A small tick. A small tick. A small neat circle around the place in number fourteen where her hand had gotten nervous and flipped the sign. A note in the margin, tiny, *you knew this,* and a little arrow." },
      { n: "The worksheet in front of her went double. There was another one under it, a different paper, a different school's letterhead, the corners soft from being carried around in a bag for days, every problem covered in this exact red, these exact ticks, the same tiny notes, *you knew this, you knew this, you knew this,* and someone sitting across from her at a table that wasn't this one, very patiently, at eleven at night, saying she wasn't bad at it, she was just afraid of it, and those were different things." },
      { fragment: 'hoax-math-homework' },
      { n: "The star on Haenim's sash ticked, a small bright sound she felt in her back teeth." },
      { s: 'solar', f: 'surprised', t: "You did this before." },
      { s: 'jungwon', f: 'neutral', t: "Every week. Since the election." },
      { s: 'jungwon', f: 'serious', t: "You were so annoyed about it. That I was better at it. That I'd offered. That I was right. You said I looked after everyone in the school beautifully and never once let anyone look after me." },
      { s: 'jungwon', f: 'neutral', t: "You were right. I was going to tell you that. I was going to tell you that after exams." },
      { s: 'jungwon', f: 'sad', t: "There was a competition, too. I didn't finish practicing for it. I've never lost one. I don't know what this counts as." },
      { n: "He put the red pen down. Very carefully. Parallel to the edge of the worksheet. His hand stayed on the table next to it, flat, the fingers spread, an inch from hers." },
      { route: [
        { t: "(Put your hand over his.)", route: 'romance', notes: 3, then: [
          { n: "She put her hand over his. Just that. Her palm on the back of his hand on a library table with forty people in the room not looking at them. His fingers went still under hers, and then, very slowly, the way you'd turn over a card you weren't sure you were allowed to see, he turned his hand over, and held on." },
          { s: 'jungwon', f: 'flustered', t: "...This is a library." },
          { s: 'solar', f: 'flustered', t: "I know." },
          { s: 'jungwon', f: 'flustered', t: "I'm noting it for the minutes. I'm not going to stop you. I'm only noting it." },
          { n: "His ears had gone red to the tips. His face was absolutely still, no dimples, nothing, and she'd learned to read it backward. He was happier than she'd ever seen him. He didn't let go until the librarian rang the closing bell." },
          // The crush batch (2026-10-23): a build-up she lived through.
          { ifCrushed: { jungwon: 'crush' }, then: [
            { n: "Her hand had been ahead of her since a cup of tea in October with one and a half sugars in it, and had waited, very politely, for the rest of her to catch up." }
          ] }
        ] },
        { t: "(Pick up the pen and correct his notes.)", route: 'friend', notes: 3, stat: { knowledge: 1 }, then: [
          { n: "She picked up the red pen and leaned over his own notebook, the one with his study schedule in it, and circled the place where he'd scheduled himself nine hours a day and no lunch, and wrote in the margin in her own messier hand, *you knew this.*" },
          { s: 'jungwon', f: 'surprised', t: "..." },
          { s: 'jungwon', f: 'happy', t: "That's insubordination." },
          { s: 'solar', f: 'happy', t: "That's tutoring." },
          { n: "He looked at the circle for a long time. Then he took the pen back, and drew a line through one of the nine hours, and wrote *lunch* beside it, and showed her, like a student turning in homework, and she gave it a tick." }
        ] }
      ] },
      { n: "On the walk to the station he carried both their bags without asking, and she let him, and somewhere near the vending machines he said, to the sidewalk, that she'd gotten eighteen out of twenty, and that eighteen was very good, and that he'd only taken off for the sign." }
    ] },

    { after: '1/12', title: '9: keep looking at me', place: 'Gekkoukan High · Student Council Room', time: 'After School', scene: [
      { n: "Third term had started on a Friday, which Jungwon had found personally offensive, and now it was the Tuesday after, and the council room's radiator was clanking like someone trapped inside it, and he was sitting in the dark with the light off and the blinds open, watching the snow come down over the courtyard." },
      { n: "She turned the light on. He winced, and let her." },
      { s: 'jungwon', f: 'neutral', t: "Everyone's asking you." },
      { s: 'jungwon', f: 'neutral', t: "Sunoo asks you. Jihoon asks you in the loudest possible way. Cherry asks you with her arms folded. The girls from your other school ask you on the roof with drinks that don't exist yet. Your brother doesn't ask, which is his way of asking." },
      { s: 'jungwon', f: 'serious', t: "In one place there are exams in the morning and my parents waiting up, and you're my vice president, and you're mine, and I still haven't asked you everything I should have. In the other there's a date in spring that neither of us picked, and I'm standing at the end of it, and somewhere along the way I stopped minding. You told me you don't know. I'd rather you didn't know than lied to me." },
      { n: "He turned the watch on his wrist so the face was against the inside of his arm, where he couldn't see it." },
      { s: 'jungwon', f: 'neutral', t: "I'm not going to ask you." },
      { n: "He opened the minutes book. The one he'd been keeping since October. He turned it to the first page, where the date was written in his neat print, and *Present:*, and his own name, and then hers, with the surname in front of it torn out of the paper by the red pen." },
      { s: 'jungwon', f: 'neutral', t: "I never know what to write. I have two of your surnames. Neither of them is mine to choose. Every meeting I write *Solar* and leave a gap and it looks like a typo." },
      { s: 'jungwon', f: 'neutral', t: "Would you sign it? Just once. Whatever you'd sign. I'll stop leaving the gap." },
      { choose: [
        { t: "(Sign it Kim Solar.)", notes: 3, tally: { 'jungwon.H': 2 }, then: [
          { n: "She took the red pen and wrote it in the gap, *Kim*, in a hand that wasn't quite her handwriting here and was exactly her handwriting somewhere else, round and a little hurried, like it had signed a hundred forms in a school office while somebody waited." },
          { s: 'jungwon', f: 'neutral', t: "...Yes. That's how you sign it. You put a little tail on the M. You always did." }
        ] },
        { t: "(Sign it Lee Solar.)", notes: 3, tally: { 'jungwon.S': 2 }, then: [
          { n: "She took the red pen and wrote it in the gap, *Lee*, small and upright and completely unreadable, the signature of someone who had learned very young that people would keep whatever she wrote down." },
          { s: 'jungwon', f: 'neutral', t: "...Yes. That's how you sign it. As if you'd rather nobody could read it." }
        ] },
        { t: "(Leave the gap. Sign only Solar.)", notes: 3, then: [
          { n: "She wrote *Solar* in the gap, by itself, and nothing in front of it, and handed the pen back." },
          { s: 'jungwon', f: 'happy', t: "...That's fair. That's the most honest minute in the whole book." }
        ] }
      ] },
      { s: 'jungwon', f: 'neutral', t: "Because it's your life. It's the only thing in either place that's actually yours. I'd like at least one person to treat it that way." },
      { choose: [
        { t: "Then what do you want? You never say.", notes: 3, then: [
          { s: 'jungwon', f: 'neutral', t: "No. I don't." },
          { n: "He looked at her across the table, and for once he didn't look away first, and his face wasn't polite and wasn't still. It was just tired, and open, and eighteen, or twenty-two, or both, she couldn't tell and didn't think he could either." },
          { s: 'jungwon', f: 'serious', t: "I would like you to keep looking at me. Wherever you go. However it ends. That's all. That's the whole list." }
        ] },
        { t: "Thank you.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "Don't thank me. I'm not giving you anything. I'm just not taking it." }
        ] }
      ] },
      { ifRoute: 'romance', then: [
        { n: "She came around the table. He watched her come. When she stood in front of his chair he looked up at her with the snow-light on the side of his face, and she put her forehead down against his, very carefully, the way you'd set something down on a surface you weren't sure would hold." },
        { n: "He didn't move. He breathed out, once, slow, and the breath was shaking, and she felt the shake go through her too." },
        { s: 'jungwon', f: 'flustered', t: "...I'm not noting this one." },
        { s: 'solar', f: 'flustered', t: "No?" },
        { s: 'jungwon', f: 'flustered', t: "No. Some things don't go in the minutes. I'm told." }
      ], else: [
        { n: "She came around the table and sat on the edge of it beside his chair, the way she'd never have been allowed to sit on a table at the other school, and swung her feet, and watched the snow with him." },
        { s: 'jungwon', f: 'happy', t: "That's against at least two rules." },
        { s: 'solar', f: 'neutral', t: "Note it." },
        { s: 'jungwon', f: 'happy', t: "I'm noting that my best friend sat on the table and I didn't say anything. That's going in. That's a historic record." }
      ] },
      { ifHeading: 'H', then: [
        { s: 'jungwon', f: 'neutral', t: "At home you said there was something you'd tell me after exams. I've been very patient about it. I'd like that noted. I'm still waiting." }
      ] },
      { n: "When she left, he turned the light off again. Through the little window she saw him turn the watch back around, face up, and look at it, and wind it, the way he did every night, in case." }
    ] },

    { after: '1/22', title: '10: you look like you', place: 'Gekkoukan High · Rooftop', time: 'After School', music: 'sun', scene: [
      { n: "The roof of Gekkoukan in late January was all wind and white sky, the snow from last week gone gray in the corners, and the whole of Port Island laid out across the water like a model somebody had built to scale and then left out in the cold. He was at the fence with his blazer buttoned and his hands in his coat pockets, and he heard the door and didn't turn around, and she understood that he'd been waiting to hear it." },
      { n: "She took the pin out of her pocket. She'd carried it every day since November. The enamel had gone warm and the catch had worn a little groove in the lining of her blazer, and she held it out on her flat palm the way you'd hold out something for a horse." },
      { n: "He looked at it. He didn't take it." },
      { s: 'jungwon', f: 'neutral', t: "I decided something. About the morning. Whichever morning I wake up in." },
      { s: 'jungwon', f: 'neutral', t: "I'm going to eat breakfast. Before the exam, before my phone, before my mother says a single word through the door. Sitting down. At a table. All of it." },
      { s: 'jungwon', f: 'serious', t: "Sunoo will faint. It's the only thing about that morning I get to decide, so I decided it. You'd tell me it's a very small thing to decide. You'd be right. It's still mine." },
      { s: 'jungwon', f: 'neutral', t: "You held it." },
      { s: 'solar', f: 'neutral', t: "You said to." },
      { s: 'jungwon', f: 'neutral', t: "I said to decide." },
      { choose: [
        { t: "I decided. It's yours. You can want it now, if you want.", notes: 3, tally: { 'jungwon.H': 1 }, then: [
          { s: 'jungwon', f: 'surprised', t: "..." },
          { n: "He took it. He turned it over. He pinned it back on his lapel, where it had always been, and his fingers weren't clumsy this time, and when it was on he looked down at it for a second like it was somebody else's pin he'd decided to borrow on purpose." },
          { s: 'jungwon', f: 'happy', t: "I might. I'll let you know. After exams." }
        ] },
        { t: "(Pin it on him yourself.)", notes: 3, tally: { 'jungwon.S': 1 }, then: [
          { n: "She stepped in and pinned it on him herself, carefully, her cold fingers fumbling the catch on the navy wool, and he stood absolutely still while she did it, the way he'd stand still for a tailor, or a priest, or a photographer at a dinner neither of them had chosen." },
          { s: 'jungwon', f: 'neutral', t: "...Thank you." },
          { s: 'jungwon', f: 'sad', t: "Nobody's ever put anything on me that I was allowed to take off." }
        ] }
      ] },
      { s: 'jungwon', f: 'neutral', t: "When I first came through the door, I kept thinking you looked like someone. On the street. On the stairs. A girl with her collar up on a bench at the station, once. I'd turn around and think, *that's her*, and it never was." },
      { s: 'jungwon', f: 'serious', t: "I was wrong. You don't look like someone." },
      { s: 'jungwon', f: 'neutral', t: "You look like you." },
      { n: "He said it plainly. No dimples. No *would you like to sit down.* Just the words, set down one after another like stones on a board, and she felt something she'd been holding since October let go in her chest, the way your hand lets go of a railing when the boat finally stops moving." },
      { ifRoute: 'romance', then: [
        { n: "She kissed his cheek. Once, quickly, on the cold skin just above where a dimple would have been if he'd been being polite, and he wasn't." },
        { n: "He made a very small sound, almost nothing, like a breath let out in a held room, and his hand came up and covered the place where she'd kissed him, as if to keep it from blowing away in the wind." },
        { s: 'jungwon', f: 'flustered', t: "...Motion carried." },
        { s: 'solar', f: 'happy', t: "Nobody seconded it." },
        { s: 'jungwon', f: 'flustered', t: "I'm seconding it now. I'm seconding it for the rest of my life. Please be quiet. I'm committing this to memory." },
        { n: "Then he took his hand away from his cheek, and looked at her for a second longer than he'd ever let himself, no dimples, no minutes, nothing to hold, and leaned in and kissed her properly, briefly, carefully, on the mouth, the way you'd sign something you had read every word of first." },
        { s: 'jungwon', f: 'flustered', t: "...That one's not going in the minutes either." },
        { ifHeading: 'H', then: [
          { s: 'jungwon', f: 'flustered', t: "You kissed me first. At home. On results day, on a stage, after you'd made everyone leave. I've been trying to even the count ever since." }
        ] }
      ], else: [
        { n: "She held out her hand. He looked at it, and took it, and they shook, very formally, on the roof in the wind, like two presidents at the end of a summit, and neither of them let go when a handshake would have ended." },
        { s: 'jungwon', f: 'happy', t: "Motion carried." },
        { s: 'solar', f: 'neutral', t: "What motion?" },
        { s: 'jungwon', f: 'happy', t: "That I keep you. As a friend. In both places. Whatever morning it is. It was unanimous. I counted." }
      ] },
      { n: "They stayed until the light went. Going down, he held the stairwell door for her, the way he held every door, and on the landing he stopped, and took his watch off, and wound it, and put it back on, and looked at it." },
      { n: "It still said eleven fifty-eight. He didn't seem to mind tonight. He looked at it like a man looking at a train timetable for a trip he'd decided, finally, to take." }
    ] },

    /* ── Ranks 11–15 (February to 3/1). The route is locked; every rank branches by heading (H, S, R, stay, true) in one
       key passage and by romance / friendship at the end. Each path's best answers: 12 notes (four choices, best 3). ── */
    { after: '2/2', title: '11: two books', place: 'Gekkoukan High · Student Council Room', time: 'After School', scene: [
      { n: "February at Gekkoukan meant free attendance for the third-years, which meant the whole top floor had gone quiet in the way a house goes quiet the morning after a party, half the desks empty, the radiators clanking for nobody, and Solar came in anyway, every day, and couldn't have told anyone why if they'd asked. Nobody asked. Mitsuru came in too." },
      { n: "The council room light was on. It was always on. He was at the long table with his blazer buttoned against the cold and two books open in front of him, side by side, squared to the edge of the wood, and he was writing in one and then the other, back and forth, like a man keeping two sets of accounts and trying very hard not to let them find out about each other." },
      { n: "One was the minutes book. She knew it by now, the soft cover and the red pen and the corners gone round from being carried in a bag since October. The other she'd never seen. Black leather, small enough for the inside pocket of a coat, a ribbon marker, the gilt on the page edges worn away at the exact place a thumb would go. It looked like it belonged to someone much older than a boy in a school blazer. It looked like it belonged to somebody's father." },
      { s: 'jungwon', f: 'neutral', t: "Good afternoon. You don't have to be here. It's free attendance." },
      { s: 'solar', f: 'neutral', t: "Neither do you. You don't even go here." },
      { s: 'jungwon', f: 'happy', t: "I've been made aware. Iori-san made me aware at the shoe lockers this morning, at some volume." },
      { s: 'jungwon', f: 'neutral', t: "February has twenty-eight days. I've scheduled twenty-six of them. I'm leaving two blank on principle. Sunoo says people need blank days. I'm told it's healthy." },
      { n: "He turned both books around on the table, together, so their spines lined up and they faced her, the way he'd once laid two phones side by side like exhibits." },
      { s: 'jungwon', f: 'neutral', t: "I keep you in both of these. I thought you should see how." },
      { choose: [
        { t: "(Read the red one.)", notes: 3, then: [
          { n: "The red one was the whole month in his slanted, too-small print, every day ruled into the same neat boxes, and she was in nearly all of them. *Tue. Calculus, Solar, ch. 7 (she'll say she's done it. she hasn't).* *Lunch (Solar). 12:30. Eat.* *Thu. Sunoo says I'm not allowed to plan the 14th.* And under that, in the same pen, smaller, *have planned the 14th.*" },
          { n: "The margins argued with him. *Eat*, in his hand, crossed out, and *eat* again beside it, firmer, and once, near the bottom, in a round hurried writing she recognized with her wrist before she recognized it with her eyes, *WON EAT SOMETHING!!!* and a frowning face with its tongue out." },
          { s: 'jungwon', f: 'flustered', t: "You wrote that. Not here. In the planner I had at home. It came through with me. I copied it over so I wouldn't lose it." }
        ] },
        { t: "(Read the black one.)", notes: 3, then: [
          { n: "The black one had almost nothing in it. That was the first thing. A page a week, and on most weeks a single line in ink, in a hand so formal it looked engraved, and every time her name came up it came up whole, a surname in front and an honorific behind, like a name on a place card at a table she hadn't chosen to sit at. *Dinner. The Lee house. Seven.* *A fitting, ten o'clock (arranged).*" },
          { n: "One entry was in pencil. Only one, in the whole book, on a page in late January. Three words. *Ask her again.* Nothing after them, as if he'd written it down to remind himself and then hadn't been able to decide when." },
          { s: 'jungwon', f: 'neutral', t: "Everything in that one is written by other people. I just hold the pen." }
        ] },
        { t: "Why do you need two?", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "Because they don't agree about you. One of them thinks you're my vice president and that you'll be late. The other one thinks you're an appointment." },
          { s: 'jungwon', f: 'serious', t: "They're both wrong. Only one of them knows it." }
        ] }
      ] },
      { n: "He took the black book back, and closed it over his thumb, and then, after a moment, as though he'd lost an argument with himself, opened it again, to March." },
      { ifHeading: 'H', then: [
        { n: "March in the black book was empty. Not blank the way February had been blank, a day here and there on principle, but empty, every page, as though he'd stopped writing in it on one particular night in December and hadn't been able to make himself pick the pen back up." },
        { n: "March in the red book was full. *3/6. The station.* And on the line for the seventh, for whatever morning they'd all go home to, in his tidiest print, *Exams (if they haven't happened yet), 8:00. Seat (Heeseung).* And below that, smaller, as if he'd been afraid the page would hear him, *Solar. VP. Row 3.*" },
        { s: 'jungwon', f: 'neutral', t: "You picked the one where you ran against me. I've been told it was the hardest door to find. I didn't know it was hidden. I thought it was just the one I lived in." },
        { s: 'jungwon', f: 'sad', t: "In the other house there'll be a chair at a dinner. I'll be the only person at that table who knows why it's empty. I've decided not to write that down." },
        { choose: [
          { t: "(Take a pencil. Write *I chose* on the first page of March, in the black book.)", notes: 3, then: [
            { n: "She wrote it in pencil, so it could be rubbed out if anyone ever had to, small and upright, the way a different hand of hers wrote things in a different house. He looked at it for a long time. He didn't touch it." },
            { s: 'jungwon', f: 'neutral', t: "...In pencil." },
            { s: 'solar', f: 'neutral', t: "So it's mine." },
            { s: 'jungwon', f: 'neutral', t: "Yes. That's exactly why." }
          ] },
          { t: "(Write *EAT BREAKFAST!!* in the red one, on the seventh.)", notes: 3, then: [
            { n: "She wrote it under *Row 3*, in the round hurried hand, two exclamation points and an underline that went off the edge of the box, and he read it upside down, and his ears went red to the tips." },
            { s: 'jungwon', f: 'flustered', t: "I already decided that. In January. On a roof. You were there." },
            { s: 'solar', f: 'neutral', t: "Now it's in the minutes." },
            { s: 'jungwon', f: 'flustered', t: "...Now it's in the minutes." }
          ] },
          { t: "Will you miss the other house?", notes: 2, then: [
            { s: 'jungwon', f: 'sad', t: "I'll be the other house. That's the part I can't make fit on a page." }
          ] }
        ] }
      ], else: [{ ifHeading: 'S', then: [
        { n: "March in the black book was full. Since December he'd been writing it in as it came, in ink, the way it would have been dictated to him, and there it was, the whole month, a dinner and a fitting and a car at nine, and on a page much further on than either of them was looking, a date in spring, circled once, by a hand that wasn't his." },
        { n: "March in the red book had one line in it. *VP:* and nothing after. He'd meant to write a word there and hadn't, and the pen had rested on the paper long enough to leave a small red dot, like something had bled through from the other side." },
        { s: 'jungwon', f: 'neutral', t: "You picked the house where everything's already written down. I'm not going to argue with you. I'd only like you to know one thing before you get there." },
        { s: 'jungwon', f: 'serious', t: "It was a contract when my father signed it. It isn't, to me. You told me you don't know. I would much rather you didn't know than wrote something you didn't mean in somebody else's ink." },
        { choose: [
          { t: "(Take a pencil. Write *I don't know* under the circled date.)", notes: 3, then: [
            { n: "She wrote it under the circle in pencil, small and upright and unreadable to anyone who didn't already know what it said. He read it anyway. He didn't rub it out. He closed the book over it the way you'd close a door very quietly on a room where somebody was asleep." },
            { s: 'jungwon', f: 'happy', t: "Thank you. That's the first thing in this book I'm glad of." }
          ] },
          { t: "(Turn back to January. Write *ask her again* over his pencil, in ink.)", notes: 3, then: [
            { n: "She found the page and went over his three pencil words in ink, so they'd stay, and turned the book around and pushed it back at him across the table." },
            { s: 'jungwon', f: 'surprised', t: "..." },
            { s: 'jungwon', f: 'neutral', t: "That's an order." },
            { s: 'solar', f: 'neutral', t: "It's a suggestion." },
            { s: 'jungwon', f: 'neutral', t: "From you they're the same thing. I asked once. You answered honestly. I'll ask again when you've decided. Not before." }
          ] },
          { t: "Who circled it?", notes: 2, then: [
            { s: 'jungwon', f: 'neutral', t: "Two men at a dinner, over a white porcelain bottle. Neither of them was me. Neither of them was you." }
          ] }
        ] }
      ], else: [{ ifHeading: 'R', then: [
        { n: "March in both books had the same entry, on the same line, on the sixth. *Solar,* and a dash, in red in one and in black in the other, and nothing after either dash, and after that, in both of them, nothing at all." },
        { s: 'jungwon', f: 'neutral', t: "You're going somewhere neither of these has pages for. On the sixth I go home to two places and you won't be in either of them. I've been practicing writing the seventh without you after it." },
        { s: 'jungwon', f: 'neutral', t: "I'm not good at it. I'm good at nearly everything that involves a pen." },
        { choose: [
          { t: "(Write where you're going, after the dash.)", notes: 3, then: [
            { n: "She took the red pen and wrote it after the dash in her own round hand, the name of a city in a country neither of his lives had ever put him in, and he looked at the word like it was in a language he was going to learn anyway, out of spite." },
            { s: 'jungwon', f: 'happy', t: "Thank you. Now it's a forwarding address. I'm very good with those." }
          ] },
          { t: "(Write *thank you* after the dash in the black one.)", notes: 3, then: [
            { n: "She wrote it in pencil, in the small upright hand, and he looked at it and then at her with his face gone completely still, the way she'd learned to read backward." },
            { s: 'jungwon', f: 'neutral', t: "That's not an appointment." },
            { s: 'solar', f: 'neutral', t: "No." },
            { s: 'jungwon', f: 'neutral', t: "...It's the only thing in there that isn't." }
          ] },
          { t: "Is Donghyuck in either of those?", notes: 2, then: [
            { s: 'jungwon', f: 'happy', t: "No. I keep him in my head, where he can't get at the stationery." }
          ] }
        ] }
      ], else: [{ ifHeading: 'stay', then: [
        { n: "March in both books had the same line, on the sixth, in red in one and in black in the other, the only entry the two of them had ever agreed on. *Solar. Here.*" },
        { s: 'jungwon', f: 'sad', t: "Both of them lose you. The exam hall and the dinner. I've been trying to work out which one of me minds more. It's a tie. I counted twice." },
        { s: 'jungwon', f: 'neutral', t: "I'm glad it's here. I want that in writing. I've put it in writing. Twice." },
        { choose: [
          { t: "(Write *here* under his, in both books, in your own hand.)", notes: 3, then: [
            { n: "She wrote it twice, round in the red book and upright in the black one, without meaning to change her hand between them and changing it anyway, and he watched her do it and didn't say anything about which was which." },
            { s: 'jungwon', f: 'neutral', t: "Now it's unanimous." }
          ] },
          { t: "(Close both books. Put your hand flat on top of them.)", notes: 3, then: [
            { n: "She closed them, the red one and the black one, one on top of the other, and put her hand flat on the pile, and he looked at her hand for a long moment and then put his own beside it, not touching, on the cover of the black one, as if they were both swearing to something in a court." }
          ] },
          { t: "Are you angry?", notes: 2, then: [
            { s: 'jungwon', f: 'happy', t: "I'm being very polite about it. You know what that means." },
            { s: 'jungwon', f: 'neutral', t: "It isn't at you." }
          ] }
        ] }
      ], else: [
        { n: "March in both books was full of her. Every day of it, in pencil in the red one and in ink in the black one, *Solar*, and *Solar*, and *Solar*, down the page, like a man practicing a signature he'd been told he would need." },
        { s: 'jungwon', f: 'neutral', t: "All of it at once, I'm told. I'll wake up in two rooms, and you'll be in both of them, and in a third I've never seen. And this one." },
        { s: 'jungwon', f: 'serious', t: "Nobody knows what happens to this one. Kirijo-san won't guess. I asked her. I don't know how to keep minutes for a room that might not be a room afterward." },
        { choose: [
          { t: "(Write today's date in both books, and sign it. So it happened.)", notes: 3, then: [
            { n: "She wrote the date twice and signed under it twice, and he blotted both with the side of his hand, very carefully, like evidence." },
            { s: 'jungwon', f: 'neutral', t: "There. Whatever happens to the room, the second of February happened. I've got two witnesses. Both of them are you." }
          ] },
          { t: "(Write everything here down the margin. The kettle. Junpei's volume. Koromaru on the steps.)", notes: 3, then: [
            { n: "She ran out of margin. He turned the page for her. She ran out of that one too, and he took the pen and added *Mitsuru-san, the athletic budget* at the bottom, in red, and *the terrible kettle* under it, and then, after a pause, *I liked it here.*" }
          ] },
          { t: "You'll have me twice.", notes: 2, then: [
            { s: 'jungwon', f: 'flustered', t: "I'm aware. I've been aware since December. I've been trying very hard not to look greedy about it in front of anybody." }
          ] }
        ] }
      ] }] }] }] },
      { n: "She'd picked up the red pen at some point without noticing, and was turning it in her fingers, and he wanted it back. She watched him want it back. She watched him start to reach for it and stop, his hand open over the table halfway between them, the way you'd stop at the edge of somebody else's garden." },
      { s: 'jungwon', f: 'neutral', t: "May I?" },
      { n: "In the red book there were a hundred places where a version of him had just taken the pen out of her hand mid-sentence to fix a sign she'd flipped, and she'd smacked his wrist, and he'd fixed it anyway. She could feel that smack in her palm, the way she felt most things from the other places now, in the hand before the head. She could feel this too. The hand stopped in the air. Asking." },
      { choose: [
        { t: "(Give it to him. Make him notice he asked.)", notes: 3, then: [
          { s: 'solar', f: 'neutral', t: "You asked." },
          { s: 'jungwon', f: 'neutral', t: "...In one of them I learned to. Late. Very late, and from you." },
          { s: 'jungwon', f: 'happy', t: "In the other one you'd have hit me by now." }
        ] },
        { t: "(Hold on to it. Make him take it, the way the other one would.)", notes: 3, then: [
          { n: "She held on. He looked at her, and at the pen, and something in his face changed register the way a car changes gear, and he took it out of her fingers with no ceremony at all, the way a boy at a school she could almost picture would have, and she smacked his wrist, and he laughed, surprised, into his other hand." },
          { s: 'jungwon', f: 'happy', t: "There. That's how that goes." }
        ] },
        { t: "Which one of you is asking?", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "Both. One of us learned it from you. The other one learned it from never being asked." }
        ] }
      ] },
      { ifRoute: 'romance', then: [
        { n: "He wrote one more line before he closed the red book. He saw her not see it, and turned the book a quarter turn on the table so it faced her, and waited, with his hands folded, the way he'd waited the first afternoon." },
        { n: "*Tue 2/2. Present: Yang Jungwon, Solar. Item: she came in on free attendance. She didn't have to.*" },
        { choose: [
          { t: "(Write *neither did you* underneath.)", notes: 3, then: [
            { n: "She wrote it, and he read it, and put his hand over hers on the page, flat, warm, the pen still in her fingers, and left it there, and neither of them said anything about it for the length of a whole paragraph of minutes nobody would ever read." },
            { s: 'jungwon', f: 'flustered', t: "...Seconded." }
          ] },
          { t: "(Take his hand across the table, between the two books.)", notes: 3, then: [
            { n: "She reached across between the red book and the black one and took his hand, and he went still, all of him, the stillness that meant the opposite of what it looked like, and then turned his hand over under hers and held on, in a cold room in February with the radiator clanking for nobody, as if one of his lives had finally caught up with the other." }
          ] }
        ] }
      ], else: [
        { n: "He wrote one more line before he closed the red book, and turned it a quarter turn so she could read it, and waited, very straight, for her verdict." },
        { n: "*Tue 2/2. Present: Yang Jungwon, Solar. Item: the vice president came in on free attendance. Motion to make it a habit.*" },
        { choose: [
          { t: "(Second it.)", notes: 3, then: [
            { s: 'jungwon', f: 'happy', t: "Carried. You're very easy to govern. Nobody at home would believe it." }
          ] },
          { t: "(Amend it. *So does the president.*)", notes: 3, then: [
            { n: "She wrote the amendment in the margin and he read it with the expression of a man discovering a clause he hadn't drafted in his own constitution." },
            { s: 'jungwon', f: 'flustered', t: "That's out of order. ...Carried. As amended. Don't look at me like that." }
          ] }
        ] }
      ] },
      { n: "When she left he was still at the table, both books open again, side by side, writing in one and then the other. She stopped in the doorway. He'd stopped trying, she saw, to keep them from finding out about each other. He'd laid the ribbon of the black one across the open page of the red." }
    ] },

    { after: '2/9', title: '12: the guesthouse', place: 'Kirijo Guesthouse', time: 'After School', music: 'joy', scene: [
      { n: "The Kirijo guesthouse by the station had a lobby that had been built to impress visiting executives and had, since October, been quietly annexed by Hanlim High School. Nobody had voted on it. It had simply happened, the way weather happens, one student at a time, until the low glass tables were buried in textbooks and the potted palm by the elevator was wearing somebody's beanie and the polite woman at the front desk had stopped looking up when anyone screamed." },
      { n: "Jungwon had texted at three. *revision session. lobby. 4:00. attendance is mandatory.* And a minute later, *for you it's mandatory. for jihoon it's a suggestion he'll ignore.*" },
      { n: "Jihoon was not ignoring it. Jihoon was lying full length on the lobby sofa with a calculus textbook open face down on his chest like a little tent, which, he explained without opening his eyes, was how he absorbed it." },
      { s: 'jihoon', f: 'neutral', t: "Sol. Thank God. Tell him. Tell him I'm not doing calculus in a hotel lobby in another dimension. It's not covered. I've read the policy." },
      { s: 'jungwon', f: 'happy', t: "Good afternoon, Solar. Nobody's phone agrees about what morning we're going home to, so I've picked the one with the exam in it. Calculus, at eight. And I am not going to sit two rows away and watch either of you fail it in a world where I can't do anything about it." },
      { s: 'jungwon', f: 'neutral', t: "Sit. Chapter seven. Park Jihoon, page two-twelve." },
      { s: 'jihoon', f: 'serious', t: "Why am I even invited. You hate me. It's the one thing about you I respect." },
      { s: 'jungwon', f: 'neutral', t: "So you'd be somewhere I could see you." },
      { n: "He said it pleasantly, with both dimples, and turned a page, and Jihoon looked at the dimples for a long second and then lay back down under his textbook, and nobody in the lobby mistook any of it for a truce." },
      { s: 'jihoon', f: 'serious', t: "Don't page-number me, Yang. I can feel you page-numbering me. It's like being looked at by a calculator." },
      { n: "Cherry was in the armchair by the window with her boots on the glass table and a bottle of black nail polish, doing her left hand with the concentration of a surgeon and the posture of a woman who had decided to fail with dignity." },
      { s: 'cherry', f: 'neutral', t: "Hi, wife. Ignore them. He's been like this since the elevator. He tutored the elevator. It's doing really well." },
      { n: "And Sunoo came out of the back with a tray, because the polite woman let him use the kitchen until nine if he left her one, and on the tray were croissants, a dozen, every one of them with a heart piped on it in red icing, some of the hearts better than others." },
      { ifBefore: '2/14', then: [
        { s: 'sunoo', f: 'happy', t: "I'm testing! For Sunday! Don't eat the ones on the left, the ones on the left are ugly. Jungwon, eat one. Eat one. You've had nothing since the vending machine." }
      ], else: [
        { s: 'sunoo', f: 'happy', t: "I'm testing! For White Day! It's not early, it's CORRECT. Don't eat the ones on the left, they're ugly. Jungwon, eat one. You've had nothing since the vending machine." }
      ] },
      { choose: [
        { t: "(Sit next to Jungwon. Open to chapter seven like a good vice president.)", notes: 3, then: [
          { n: "She sat. He slid the book across already open to the right page, and a pencil already sharpened, and took a croissant off the tray without looking and put it on a napkin in front of her, and then, when she looked at him, took a second one for himself, as if she'd said something." },
          { n: "He explained limits with the croissant. As the knife approached the edge of the plate, he said, and stopped the knife a hair from the rim, and made her say what happened, and she said it, and he said *yes,* very quietly, the way he said it when she'd done something right, and Jihoon reached over and ate the limit." }
        ] },
        { t: "(Sit on Jihoon. Gently. He'll do page two-twelve.)", notes: 3, then: [
          { n: "She sat on him. Not gently. He made a noise like a deflating mattress and the textbook slid off his chest onto the marble, and Cherry, without looking up from her nails, said *good*." },
          { s: 'jihoon', f: 'surprised', t: "I'm being MURDERED. In a LOBBY. In front of a PALM." },
          { s: 'jungwon', f: 'happy', t: "That's very effective. Thank you, Solar. Please get off him now." },
          { n: "He said it so pleasantly, so sweetly, with both dimples, that she got off at once. Jihoon, rubbing his ribs, looked from the dimples to her and back with the dawning delight of a man who'd found something he could use." },
          { s: 'jihoon', f: 'happy-2', t: "Oh, he HATED that. Look at him. Look how polite he is. Do it again." }
        ] },
        { t: "I'm with Jihoon. It's a hotel.", notes: 2, then: [
          { s: 'jungwon', f: 'flustered', t: "It's a guesthouse." },
          { s: 'jihoon', f: 'happy', t: "SEE. He can't even let that go. That's who you're defending." }
        ] }
      ] },
      { n: "He tutored beautifully. She'd known that already, the way she knew most things about him now, in her hands first and her head a long way after, but it was different to watch him do it to a room. He didn't raise his voice. He never told anyone they were wrong. He just asked the question one step before the place where you'd gone wrong, and waited, and waited, until you walked yourself back to it and found it there, and then he said *yes* like it had been your idea." },
      { n: "By five Jihoon had done three problems correctly and hated it, visibly, the way you'd hate a dog that had learned to open your fridge, because it meant Yang's way worked, and he was unbearable about it anyway. By half past, Cherry had done one, on the back of her hand, in nail polish, and refused to show her working. Jungwon checked it anyway. It was right. He looked at it for a long moment, at the black numbers drying on her knuckles, and said that it was the most structurally sound answer he'd seen all week." },
      { ifHeading: 'H', then: [
        { s: 'jihoon', f: 'neutral', t: "Row three. You sit in row three, behind me, and you copy off Jaehyuk, and he lets you because he's a saint, and then you get a B and act like you were robbed." },
        { s: 'jungwon', f: 'neutral', t: "She doesn't copy off anyone. Not anymore." },
        { s: 'jihoon', f: 'serious', t: "Not ANYMORE. Listen to him. Like he's her parole officer." },
        { n: "Nobody said the rest of it. That some morning, whichever one it turned out to be, they'd all be sitting in a hall, all of them, her too, in row three, in a uniform with a skirt in winter, and the clock on the wall would say eight, and it would be as if none of this had happened except that it had. Jihoon put his hand flat on the top of her head on his way past to the croissants, heavily, the way you'd put a paperweight on something that might blow away, and left it there a second too long." },
        { choose: [
          { t: "(Do problem eleven. Get it right. Out loud, at Jihoon.)", notes: 3, then: [
            { n: "She did it out loud, every step, at Jihoon, and got it right, and Jungwon didn't say *yes*. He didn't need to. He just put a small red tick in the margin, the one that took up exactly as much room as it needed, and Jihoon booed, and then, very quietly, while Jungwon wasn't looking, gave her a thumbs up under the table, and when Jungwon looked anyway, turned it, slowly, into a different finger." }
          ] },
          { t: "(Copy off Jihoon. Make sure Jungwon sees.)", notes: 3, then: [
            { s: 'jungwon', f: 'happy', t: "Solar." },
            { s: 'solar', f: 'neutral', t: "Mm?" },
            { s: 'jungwon', f: 'happy', t: "His is wrong." },
            { s: 'jihoon', f: 'surprised', t: "It is NOT. ...Is it? Where? Don't page-number me. Don't— where?" }
          ] },
          { t: "I'm going to fail it anyway.", notes: 2, then: [
            { s: 'jungwon', f: 'serious', t: "You're not. You never have. You're afraid of it. Those are different things." }
          ] }
        ] }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'jihoon', f: 'neutral', t: "You know she's not even going to be in the exam, Yang. She's going to the other one. The one with the boats and the dinners and the—" },
        { s: 'cherry', f: 'serious', t: "Jihoon." },
        { s: 'jihoon', f: 'neutral', t: "What. I'm saying it. Somebody has to say it. He's making her do chapter seven for a test she's not going to be at." },
        { s: 'jungwon', f: 'sad', t: "In case." },
        { n: "He said it to the textbook. Two words, very politely. Jihoon looked at him for a long moment, and whatever he'd been going to say next he didn't, and instead he picked up the ugliest croissant off the left side of the tray and ate it in two bites, angrily, which was, Solar understood, the nicest thing he was able to do right then." },
        { choose: [
          { t: "(Do problem eleven anyway. Get it right, for a row three you won't sit in.)", notes: 3, then: [
            { n: "She did it, every step, and got it right, and Jungwon put the small red tick in the margin, and Cherry leaned over to see it and said *my WIFE*, and nobody said anything about the exam after that, and the tick sat on the page like a seat somebody had saved." }
          ] },
          { t: "(Throw the textbook at Jihoon.)", notes: 3, then: [
            { n: "It hit him in the chest, where it had been sitting all afternoon, and he caught it, and looked at her over it with his eyes gone bright and furious, and then laughed, the real one, too loud for a lobby, and Cherry threw her nail polish cap at both of them." },
            { s: 'jihoon', f: 'happy', t: "There she is. THERE she is. Okay. Okay. Two-twelve. I'll do two-twelve. For the record I'm doing it under protest and grief." }
          ] },
          { t: "He's right. I won't be there.", notes: 2, then: [
            { s: 'jungwon', f: 'neutral', t: "I know. Do it anyway. I'd like you to have it. It's the only thing I can send with you." }
          ] }
        ] }
      ], else: [
        { ifHeading: 'R', then: [
          { s: 'jihoon', f: 'neutral', t: "You know she's not even going to be IN the exam, Yang. She's going to the American one. The snow and the sorority and the guy with the— whatever. Not row three. Not any row." }
        ], else: [{ ifHeading: 'stay', then: [
          { s: 'jihoon', f: 'neutral', t: "You know she's not even going to be IN the exam, Yang. She's staying. Here. In the lobby dimension. She's going to do chapter seven for fun, forever, with the protein people." }
        ], else: [
          { s: 'jihoon', f: 'neutral', t: "You know she doesn't even need this, Yang. She's going to be in row three and on a boat and in some American dorm, all at once. She doesn't need chapter seven. She needs to cheat off herself." }
        ] }] },
        { s: 'cherry', f: 'serious', t: "Jihoon." },
        { s: 'jihoon', f: 'neutral', t: "What. I'm saying it. Somebody has to. He's making her do chapter seven like it's a normal Tuesday." },
        { s: 'jungwon', f: 'sad', t: "In case." },
        { n: "He said it to the textbook, very politely, the way he'd say a budget line. Jihoon opened his mouth and shut it and picked the ugliest croissant off the left side of the tray and ate it in two bites, angrily, which was, Solar understood, the nicest thing he could do right then." },
        { choose: [
          { t: "(Do problem eleven anyway. Get it right.)", notes: 3, then: [
            { n: "She did it, every step, and got it right, and Jungwon put the small neat red tick in the margin, and Cherry leaned over to see it and said *my WIFE*, and the tick sat on the page like a seat somebody had decided to save anyway." }
          ] },
          { t: "(Throw the textbook at Jihoon.)", notes: 3, then: [
            { n: "It hit him in the chest, where it had been sitting all afternoon, and he caught it and looked at her over it with his eyes gone bright, and then laughed, the real one, too loud for a lobby, and Cherry threw her nail polish cap at both of them." },
            { s: 'jihoon', f: 'happy', t: "There she is. Okay. Two-twelve. Under protest and grief. Write that down, Yang." }
          ] },
          { t: "He's right.", notes: 2, then: [
            { s: 'jungwon', f: 'neutral', t: "I know. Do it anyway. It's the only thing I'm good at sending." }
          ] }
        ] }
      ] }] },
      { place: 'Kirijo Guesthouse · Front', time: 'Evening', soft: true },
      { n: "He walked her out at six. The station lights were on and the cold had come down hard the way it did in February, all at once, as if somebody had opened a door to a room that had been shut all winter, and he stood on the guesthouse steps without his coat with his hands in his blazer pockets, and his breath went up white, and he didn't go back in." },
      { s: 'jungwon', f: 'sad', t: "I tell myself it's the night before an exam at home. I've told myself that since September. Whatever night it really is, my mother will be at the kitchen table with the light on. Not for me. For the morning." },
      { s: 'jungwon', f: 'neutral', t: "Maeumi will be asleep on my bed, because nobody's told him not to. He knows nobody's going to tell him. He's very small and he has never once in his life been wrong about a loophole." },
      { choose: [
        { t: "Show me him.", notes: 3, then: [
          { n: "He had the photograph ready so fast that she knew he'd had it ready for weeks. A very small dog in a knitted sweater the color of a fire engine, sitting on a stack of math textbooks with the expression of a tiny furious bureaucrat." },
          { s: 'jungwon', f: 'happy', t: "My mother says the sweater's undignified. He wears it every day. I've told him it's an act of resistance. He's on my side." }
        ] },
        { t: "Tell me about the light in the kitchen.", notes: 3, then: [
          { s: 'jungwon', f: 'neutral', t: "It's on all night. You can see it from the end of the road. You used to see it." },
          { s: 'jungwon', f: 'serious', t: "I'd stand under it and decide what to say through the door. I always said what they wanted to hear. It was safer. You were the first person I ever said the other thing to." },
          { n: "He said it in the same voice he'd used for chapter seven, very evenly, and the breath went up white out of him, and she understood that the voice was the point, that it was the only voice he'd been allowed to use in that kitchen." }
        ] },
        { t: "Did you eat a croissant? An actual one?", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "One and a half. Jihoon ate the limit." }
        ] }
      ] },
      { ifRoute: 'romance', then: [
        { n: "He took his right hand out of his pocket. There was an index card in it, folded in half, soft at the crease, and he looked at it, and looked at her, and put it back, and took it out again." },
        { ifBefore: '2/14', then: [
          { s: 'jungwon', f: 'flustered', t: "Sunoo wrote down what I should say on Sunday. I'm not supposed to read it before Sunday. I've read it eleven times." }
        ], else: [
          { s: 'jungwon', f: 'flustered', t: "Sunoo wrote down what I should say on White Day. I'm not supposed to read it before White Day. I've read it eleven times." }
        ] },
        { choose: [
          { t: "(Take the card out of his hand and read it.)", notes: 3, then: [
            { n: "She read it under the guesthouse lamp. It was in Sunoo's handwriting, with hearts over the i's, and it was terrible, and it was perfect, and at the bottom, in Jungwon's slanted print, someone had crossed out one of Sunoo's lines and written a different one, and it was the different one she'd remember." },
            { s: 'jungwon', f: 'flustered', t: "You weren't supposed to— that's not— I'm going to have to write a whole new one now." },
            { s: 'solar', f: 'happy', t: "Don't. Say that one. When it's time. I'll act surprised." },
            { s: 'jungwon', f: 'flustered', t: "You can't act. You've never once been able to act." }
          ] },
          { t: "(Kiss his cheek before he can read it again.)", notes: 3, then: [
            { n: "She kissed his cheek, quickly, on the cold skin above the place a dimple would have gone, and he went absolutely still on the guesthouse step, and the card slid out of his fingers and fell between them face down, and neither of them picked it up for a long moment, and then both of them did at once and knocked heads." },
            { s: 'jungwon', f: 'flustered', t: "...That wasn't on the card." }
          ] }
        ] },
        { n: "He went back in for his coat after that, because she made him, and walked her home the whole way, which was the route, and at the crossing by the station his hand found hers inside her pocket, where it was warmer, and stayed there until the dorm road." }
      ], else: [
        { n: "He walked her as far as the station, which was the route, and then past it, which wasn't, and at the dorm road he stopped, and took a croissant out of his blazer pocket wrapped in a napkin, a left-side one, an ugly one, and held it out." },
        { s: 'jungwon', f: 'neutral', t: "Sunoo said to give you the best one. I gave you the one that looked the most like it was trying." },
        { choose: [
          { t: "That's the best one, then.", notes: 3, then: [
            { s: 'jungwon', f: 'happy', t: "That's what I told him. He said I was being philosophical about pastry. I'm putting it in the minutes as a win." }
          ] },
          { t: "(Split it. Give him the bigger half.)", notes: 3, then: [
            { n: "She split it, badly, and gave him the bigger half, and he looked at it as if he'd been handed a vote he hadn't expected to win, and ate it on the corner under the streetlight in four careful bites, and said, with his mouth full, that it was a very good croissant, for an ugly one." }
          ] }
        ] }
      ] },
      { n: "From the dorm steps she looked back. He was still on the corner, very straight, under the light, the way he always waited until she was inside, and when the door shut behind her she knew without looking that he was winding his watch." }
    ] },

    { after: '2/16', title: '13: the key', place: 'Gekkoukan High · Student Council Room', time: 'After School', scene: [
      { n: "The council room had changed hands, and you could tell. Mitsuru had given it over on Monday, to a second-year with a ponytail and a clipboard she held like a riot shield, and it had taken four minutes, and somehow in those four minutes the whole room had become somebody else's. A new mug by the terrible kettle with a cartoon cat on it. A pink pencil case open at the president's end of the table, every pen in it a different color. The whiteboard wiped clean of Mitsuru's handwriting and written over in a round, nervous one. *WELCOME NEW COUNCIL!! FIRST MEETING THURS!!*" },
      { n: "Jungwon's end of the table was bare. He'd cleared it himself. His binders were in a cardboard box by the door, squared, taped, labeled in his own print, and on the empty wood in front of him, in the exact center of where his things had been, there was a key. Small, brass, on a cheap plastic tag that said COUNCIL 2 in marker gone gray with handling. Mitsuru had given it to him in October so she'd always know where he was." },
      { s: 'jungwon', f: 'neutral', t: "I'm returning it. I've been sitting here for forty minutes deciding how." },
      { s: 'jungwon', f: 'neutral', t: "I've never handed anything over. Not once, in either place. I thought it would be simple. It's a key." },
      { n: "Mitsuru came in without knocking, because for two years she hadn't needed to, and stopped a step inside the door, because now she did. She was in her coat. She'd come, Solar suspected, to look at the room one more time while nobody was in it, and had found the two of them in it, and was too well brought up to turn around and leave." },
      { s: 'mitsuru', f: 'neutral', t: "Yang. Solar." },
      { s: 'jungwon', f: 'happy', t: "Kirijo-san. Good afternoon. I have something of yours." },
      { n: "He stood when she came in, of course he did, and held the key out to her on his flat palm, the way he'd once pushed a pin across this same table, and Mitsuru looked at it for a long moment and didn't take it." },
      { s: 'mitsuru', f: 'sad', t: "It isn't mine anymore. Nothing in here is. That's what Monday was." },
      { s: 'mitsuru', f: 'neutral', t: "Give it to her yourself. Tomorrow, properly. She's terrified of you, so be kind about it." },
      { s: 'jungwon', f: 'neutral', t: "I've never done it. Handed something over." },
      { s: 'mitsuru', f: 'sad', t: "No. I didn't think you had. Neither had I, until Monday. I timed it. I don't recommend timing it." },
      { n: "They looked at each other across the bare end of the table, two people who'd each been told what they were before they could read, and something went between them that Solar wasn't part of and didn't need to be. Then Mitsuru touched the back of the president's chair with two fingers, once, the way you'd touch a horse you used to ride, and went to the door, and on her way past she touched Solar's elbow, which made three times now, and Solar was counting." },
      { s: 'mitsuru', f: 'neutral', t: "He's going to make a speech. Stop him." },
      { s: 'jungwon', f: 'flustered', t: "...I was going to make a speech." },
      { choose: [
        { t: "(Hold out your hand. Make him practice on you.)", notes: 3, then: [
          { n: "She held out her hand, palm up. He looked at it, and at the key, and then, because he was him, straightened his blazer, and came round the table, and stood in front of her, and bowed, a precise short bow from the waist, and laid the key in her palm as though it weighed a great deal." },
          { s: 'jungwon', f: 'neutral', t: "Thank you for the use of the room. It's been an honor to serve a school I don't attend." },
          { s: 'solar', f: 'neutral', t: "Again. Faster." },
          { n: "He did it again. And again. By the fourth time he'd got it under a minute and his ears had gone red, and by the fifth she'd started bowing back, and they stood in the middle of somebody else's council room handing a brass key back and forth like a pair of very formal idiots until she laughed and he made her start over because she'd laughed." }
        ] },
        { t: "What were you going to say?", notes: 3, then: [
          { n: "He took an index card out of his blazer pocket. Of course he had an index card. He read it to her in the voice he used for assemblies, the bright, booming one that didn't sound like him at all and was the only voice she'd ever heard him use without being afraid of it." },
          { s: 'jungwon', f: 'happy', t: "Esteemed incoming council. I've been a guest in this room since October. I've proofread your athletic budget, alphabetized your archive and corrected one ribbon. I leave the kettle in your care. It's terrible. Love it anyway." },
          { s: 'solar', f: 'neutral', t: "That's the whole thing?" },
          { s: 'jungwon', f: 'neutral', t: "There's a second side. I've been told to stop before the second side." }
        ] },
        { t: "Just give it to her. It's a key.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "It's never just a key. In my experience it's never once been just a key." }
        ] }
      ] },
      { n: "He sat down again. He put the key back in the center of the bare wood and looked at it, and then, without seeming to decide to, unbuckled the watch on his left wrist and laid it beside the key. Steel, heavy, too old for him. The second hand on the eleven, where it had sat since October." },
      { s: 'jungwon', f: 'sad', t: "My brother would be very good at this. Handing over. He'd make a speech and everyone would cry, and then he'd take them all out to eat and not let anyone pay." },
      { s: 'jungwon', f: 'neutral', t: "He never had to. He went, and I got everything. In one of my houses that's what *heir* means. Whatever's left standing." },
      { s: 'jungwon', f: 'serious', t: "He gave me this the night he went. I told you he said it had never fit him, and that I'd only lately found out that wasn't true." },
      { s: 'jungwon', f: 'neutral', t: "It fit him. I've seen the photographs. It sat on his wrist like it had been made there. He took a link out so it would fit me, and told me it had never fit him, so I'd believe it had always been mine." },
      { s: 'jungwon', f: 'neutral', t: "It's the kindest lie anyone's ever told me. I'd like to tell you one true thing in exchange. I feel I owe somebody one." },
      { choose: [
        { t: "(Let him.)", notes: 3, then: [
          { s: 'jungwon', f: 'serious', t: "I don't want to give anything back. Not this key. Not this room. Not the afternoons. Not you." },
          { s: 'jungwon', f: 'sad', t: "I'm going to anyway. Both of me were raised to. I wanted one person to know it's a lie when I do it politely." }
        ] },
        { t: "Tell me something true about him instead.", notes: 3, then: [
          { s: 'jungwon', f: 'neutral', t: "He couldn't cook. He bought a cookbook on a school trip to Osaka, secondhand, with a red cover, and translated the whole thing in pencil in the margins, and never made a single thing in it." },
          { s: 'jungwon', f: 'neutral', t: "I made all of it. That's where the fish came from. The sea bream, with the rice. He'd written *don't stir* beside it. To me, by name. Years before I could reach the stove." },
          { n: "She thought of the clay pot on the dorm stove at one in the morning, and the flame turned down to a blue ring, and him standing over it with his arms folded and his hand around his own wrist, not stirring. She'd eaten something his brother had left him and called it terrible. He'd said *that's exactly what you say.*" }
        ] },
        { t: "You don't owe me anything.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "That's exactly what he'd have said. It's how I know it isn't true." }
        ] }
      ] },
      { ifHeading: 'H', then: [
        { s: 'jungwon', f: 'neutral', t: "At Hanlim I've never handed anything over either. I took the vice presidency off Heeseung and gave it to you without asking either of you, into a microphone, in front of the whole school. It's the only thing I've ever given away. I gave it to the girl who'd just run against me." },
        { s: 'jungwon', f: 'neutral', t: "In the other house you were handed to me. At a dinner, like a key. I'd much rather be the one you weren't handed." },
        { n: "He turned the watch over on the table, face down, the way he'd once turned it against the inside of his wrist so he wouldn't have to look at it." },
        { choose: [
          { t: "(Pick up the key. Put it in his hand. *Vice president, reporting.*)", notes: 3, then: [
            { s: 'jungwon', f: 'surprised', t: "..." },
            { s: 'jungwon', f: 'happy', t: "That's not how a handover works." },
            { s: 'solar', f: 'neutral', t: "It is at Hanlim." },
            { s: 'jungwon', f: 'happy', t: "...It is now. Noted. I'll amend the bylaws when we're home." }
          ] },
          { t: "(Turn his watch back over. Face up.)", notes: 3, then: [
            { n: "She turned it over. The second hand on the eleven, the steel gone warm from his wrist. He looked at it for a while, and then at her hand still resting beside it." },
            { s: 'jungwon', f: 'neutral', t: "You always do that. Turn things back over. At home you turned my phone over at lunch so I'd have to look at Sunoo's texts." }
          ] },
          { t: "Did Heeseung forgive you?", notes: 2, then: [
            { s: 'jungwon', f: 'neutral', t: "He brings me lunch. That's how he says it. He's been saying it every day for months." }
          ] }
        ] }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'jungwon', f: 'neutral', t: "In the other house nothing is handed over. It's inherited, or it's arranged. I was inherited. You were arranged. Nobody asked either of us, at first. I've asked you since. You told me you didn't know. That's the first line of it anyone let you write yourself." },
        { s: 'jungwon', f: 'serious', t: "On the sixth you're going home to a house where people have decided things for you since before you could walk. I can't move the date. Nothing here moves it. I'd like to be the one person in that house who hands you back to yourself, every time. Even when it's inconvenient. Especially then." },
        { choose: [
          { t: "(Put the key in his hand and close his fingers over it. *Then start with this.*)", notes: 3, then: [
            { n: "She folded his fingers down over the brass one at a time. His hand was cold. It always was, in this room. He let her, and then looked at his own closed fist like it belonged to someone who'd been given something he'd been told he wasn't allowed." },
            { s: 'jungwon', f: 'neutral', t: "...That's yours, though. I'm meant to be handing it back." },
            { s: 'solar', f: 'neutral', t: "I know. I'm practicing on you." }
          ] },
          { t: "Do you mean it, Yang Jungwon-ssi?", notes: 3, then: [
            { s: 'jungwon', f: 'neutral', t: "You're trying to make me angry." },
            { s: 'solar', f: 'neutral', t: "No. I'm asking." },
            { s: 'jungwon', f: 'serious', t: "...Yes. I mean it. I've never meant anything more in a council room, and I've meant a great many things in council rooms." }
          ] },
          { t: "You can't hand me anything. I'm not yours.", notes: 2, then: [
            { s: 'jungwon', f: 'neutral', t: "No. That's the point. I'm practicing." }
          ] }
        ] }
      ], else: [{ ifHeading: 'R', then: [
        { s: 'jungwon', f: 'neutral', t: "You're handing both of me back at once. Very efficiently. I'd admire it in anybody else." },
        { s: 'jungwon', f: 'sad', t: "You're going to a city neither of me has ever stood in, where Donghyuck is. One of him. I'm sure he'll be very—" },
        { n: "He stopped. He smiled, with both dimples, sweet and immediate and deep, which was how she knew exactly how much it was costing him." },
        { s: 'jungwon', f: 'happy', t: "I hope he's kind to you. I've never in my life wanted to say a sentence less, and I mean every word of it." },
        { choose: [
          { t: "(Put the key in his hand. *Practice on me, then. Hand me over.*)", notes: 3, then: [
            { n: "He stood. He bowed. He got as far as *thank you for the use of* and stopped, and stood there in the middle of somebody else's council room with the key in his hand and his mouth closed, and couldn't do it, and didn't pretend he could." },
            { s: 'jungwon', f: 'neutral', t: "...I'll need more practice. I'll have it done by the sixth. I'm very good at deadlines." }
          ] },
          { t: "I'll miss both of you. That's my true thing. Now we're even.", notes: 3, then: [
            { s: 'jungwon', f: 'surprised', t: "..." },
            { s: 'jungwon', f: 'neutral', t: "Then we're even. I'll write it down that way. Even." },
            { n: "He didn't write it down. He sat with his hand flat on the table beside the watch and didn't write anything for a long time." }
          ] },
          { t: "Be nice about Donghyuck.", notes: 2, then: [
            { s: 'jungwon', f: 'happy', t: "I'm being extremely nice. Listen to how nice I'm being." }
          ] }
        ] }
      ], else: [{ ifHeading: 'stay', then: [
        { s: 'jungwon', f: 'neutral', t: "Kirijo-san handed this room over in four minutes. On the sixth I'm going to hand you over to this house. To her, and Akihiko-san, and the terrible kettle and Iori-san's volume and the dog who thinks I'm his." },
        { s: 'jungwon', f: 'serious', t: "I don't think I'll be able to time it." },
        { choose: [
          { t: "(Put the key in his hand. *You're not handing me over. I'm staying. There's a difference.*)", notes: 3, then: [
            { s: 'jungwon', f: 'neutral', t: "...Yes. There is. One of them is a process. The other one's a decision." },
            { s: 'jungwon', f: 'neutral', t: "I'm glad it's a decision. I'd like that on record. I'm a little less glad than I'm saying. That's also on record." }
          ] },
          { t: "(Turn his watch face up. Wind it for him.)", notes: 3, then: [
            { n: "She wound it, the little crown cold and ridged under her thumb, the way she'd watched him do it every night since October. It didn't start. She hadn't thought it would." },
            { s: 'solar', f: 'sad', t: "In case." },
            { s: 'jungwon', f: 'sad', t: "...In case." }
          ] },
          { t: "Will you be all right?", notes: 2, then: [
            { s: 'jungwon', f: 'happy', t: "I'll be very polite about it." }
          ] }
        ] }
      ], else: [
        { s: 'jungwon', f: 'flustered', t: "You're going home to everyone at once. Including me. Both of me. I've never once in my life been handed something I wanted. I don't know what my face does." },
        { s: 'jungwon', f: 'serious', t: "And this room. Nobody can tell me what happens to this room." },
        { choose: [
          { t: "(Put the key in his hand. *Practice receiving, then.*)", notes: 3, then: [
            { n: "He looked down at the key in his hand, and then up at her, and his face went completely still, no dimples, nothing, the stillness she'd learned to read backward." },
            { s: 'solar', f: 'happy', t: "That. That's what your face does." }
          ] },
          { t: "(Turn his watch face up. Wind it for him.)", notes: 3, then: [
            { n: "She wound it, the little crown cold and ridged under her thumb. It didn't start. She hadn't thought it would. He watched her hands the whole time, as if he were memorizing a recipe." },
            { s: 'jungwon', f: 'neutral', t: "In case." }
          ] },
          { t: "I know what your face does.", notes: 2, then: [
            { s: 'jungwon', f: 'flustered', t: "That's very unfair. You've had months." }
          ] }
        ] }
      ] }] }] }] },
      { ifRoute: 'romance', then: [
        { n: "He picked up the watch to put it back on, and his fingers, which were never clumsy, fumbled the buckle, once, and he looked at the buckle as though it had defected." },
        { s: 'jungwon', f: 'flustered', t: "...May I ask you to?" },
        { choose: [
          { t: "(Buckle it for him.)", notes: 3, then: [
            { n: "She buckled it, slowly, the steel warm, his pulse under her thumb doing something it would never have done in front of anyone at a dinner. He didn't look at the watch. He looked at her doing it. When it was done she kept her hand there a second longer, and so did he." }
          ] },
          { t: "(Hold his wrist a second before the watch goes back on.)", notes: 3, then: [
            { n: "She held his bare wrist, just that, the pale band of skin where the watch had been since before she knew him, and he went still all over, and then turned his hand and laced his fingers through hers on the table beside the key, and they sat like that, in somebody else's room, until the light went." }
          ] }
        ] }
      ], else: [
        { n: "He picked up the watch to put it back on, and his fingers, which were never clumsy, fumbled the buckle, once, and he glared at it with great dignity." },
        { choose: [
          { t: "(Buckle it for him. Badly, on purpose.)", notes: 3, then: [
            { n: "She did it one hole too tight. He noticed at once. He didn't fix it. He said it was perfectly comfortable in the voice he used to tell Yukari her ribbon was out of dress code, and wore it like that until he got to the door." }
          ] },
          { t: "(Make him promise to eat lunch tomorrow. Before the speech.)", notes: 3, then: [
            { s: 'jungwon', f: 'flustered', t: "That's not related." },
            { s: 'solar', f: 'neutral', t: "Promise." },
            { s: 'jungwon', f: 'happy', t: "...Promise. Lunch, then speech. You're worse than Sunoo. You've always been worse than Sunoo." }
          ] }
        ] }
      ] },
      { n: "When she left, the key was still in the middle of the bare wood, and the watch was back on his wrist, and he was writing on a fresh index card in his slanted print, and she could tell from the way his mouth moved that it was a speech, and that he was trying very hard to keep it short, and that it wasn't going to be." }
    ] },

    { after: '2/23', title: '14: the other coat', place: 'Port Island · Pier', time: 'Evening', music: 'night', scene: [
      { n: "He'd asked her by text, in full sentences, whether she would be willing to walk with him after school to the pier on Port Island, and he'd signed it with his whole name, which he had never once done, and she'd read it on the monorail three times and then sent back a keysmash, and then, a minute later, because she could feel which register he'd written in, *yes. i'd like that.*" },
      { n: "He was waiting at the end of the pier. He wasn't in the blazer." },
      { n: "She'd never seen him out of it. Once at midnight in a kitchen, in his shirtsleeves with a towel tucked in his waistband, but that didn't count. Now he was in a long camel coat, cashmere, buttoned to the throat, the kind of coat that cost more than the dorm's refrigerator and knew it, and black leather gloves, and the steel watch showing in the gap between glove and cuff. He stood at the rail with his back to the city and his face to the water, and for one second, before he heard her, he looked like a man she'd been seated beside at a very long dinner and hadn't been allowed to speak to." },
      { s: 'jungwon', f: 'neutral', t: "Good evening. Thank you for coming." },
      { s: 'jungwon', f: 'neutral', t: "You've had the president for four months. I thought you should have the other one for an hour. He's worse company. He doesn't make jokes. He asks questions he already knows the answers to." },
      { n: "He had two cans of hot corn soup from the machine at the foot of the pier, one in each gloved hand, and gave her one, and kept the other, and didn't open it. The water was the gray of an old knife, and the wind came off it with the particular cold of the sea in February, salt and diesel and something rotten and clean underneath, and the gulls on the bollards all faced the same way, into it, as though they'd been told to." },
      { choose: [
        { t: "(Look at him properly. The coat. The gloves. How he's standing.)", notes: 3, then: [
          { n: "She looked. He let her. He stood very still and allowed himself to be looked at, which she understood was a thing he'd practiced, at dinners, in front of men deciding what he was worth, and then she watched him notice that she wasn't deciding anything, and his shoulders came down a centimeter inside the expensive coat." },
          { s: 'jungwon', f: 'neutral', t: "You've never looked at this one like that. As if he might be interesting." }
        ] },
        { t: "You don't smell like anything.", notes: 3, then: [
          { s: 'jungwon', f: 'surprised', t: "..." },
          { s: 'jungwon', f: 'neutral', t: "Deliberately. You noticed the first night, in that house. You said it was the strangest thing about me." },
          { s: 'jungwon', f: 'happy', t: "The other one wears whatever Sunoo bought him for his birthday. It's called *Morning Dew*. I hate it. I wear it every day." }
        ] },
        { t: "Hi, Yang Jungwon-ssi.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "You're trying to make me angry." },
          { s: 'solar', f: 'neutral', t: "Is it working?" },
          { s: 'jungwon', f: 'neutral', t: "I've been angry since October. In this coat it's very hard to tell." }
        ] }
      ] },
      { s: 'jungwon', f: 'neutral', t: "Would you stand back from the edge? You can't swim. In either place, as far as I've ever been told." },
      { n: "A man came up the pier behind them with a fishing rod over his shoulder and a cooler banging against his knee, reeking of cheap shochu at five in the afternoon, and walked into her, hard, on purpose or near enough, so the soup sloshed hot over her glove, and said something about girls who stood where people wanted to be, in the kind of Japanese she'd learned not to hear from men at stations." },
      { n: "Jungwon didn't move. That was the first thing. He didn't step between them or raise his voice or take his hand out of his pocket. He turned his head, that was all, and looked at the man, and smiled, both dimples, sweet as a child's, and asked him in beautiful, formal, faintly accented Japanese whether he had perhaps lost his footing, and whether he was hurt, and whether there was anyone they might call for him, and whether he'd like to apologize to the young lady now, or after a moment's reflection, at his own convenience." },
      { n: "Every word of it was perfectly polite. Each one was politer than the last. By the third question the man had stopped swaying. By the fourth he'd apologized to Solar, twice, and then once to Jungwon, for reasons he plainly couldn't have explained, and gone back down the pier a great deal faster than he'd come up it, and didn't look back, and left the cooler." },
      { n: "She'd seen him angry before. She'd seen him polite to Mitsuru, and to Jihoon, and to Donghyuck on the dorm steps. She'd never seen it from this side, from inside the coat, aimed. It was the most frightening thing she'd seen all year, and she had seen the tower." },
      { ifFlag: ['arrived-yunjin', 'arrived-haechan'], then: [
        { n: "From a bollard a little way back somebody started a slow, rasping clap." },
        { s: 'yunjin', f: 'happy', t: "That was a scream with manners. I heard every single manner." },
        { n: "Yunjin was sitting on the bollard in the yellow puffer with the hood up and her boots swinging, and beside her, standing, with his hands in his jacket and his face doing nothing at all, was Donghyuck, who had very obviously been dragged down here to look at a sea that wasn't the right one and had found something better to look at." },
        { s: 'haechan', f: 'neutral', t: "Don't clap. It encourages him." },
        { s: 'jungwon', f: 'neutral', t: "Donghyuck." },
        { s: 'haechan', f: 'happy', t: "Young master. Nice coat. Very low-key. Nobody'll ever guess." },
        { s: 'jungwon', f: 'happy', t: "Thank you. I'm sure nobody's ever said that to you." },
        { n: "Yunjin slid off the bollard and hooked her arm through Haechan's before either of them could say anything that would have to be answered, and steered him away up the pier, and over her shoulder, in the gravel that was all that was left of her voice, she told Solar to call her if the young master started reciting the family tree." },
        { s: 'yunjin', f: 'neutral', t: "Come on, babe. They're having a register." }
      ] },
      { n: "When it was quiet again he stood at the rail with his gloved hands on the cold iron and looked across the water at the lights coming on along the far shore, one at a time, and she understood he wasn't looking at Iwatodai." },
      { ifHeading: 'S', then: [
        { s: 'jungwon', f: 'neutral', t: "From my window at home you can see your house across the water. I've stood there a great deal." },
        { s: 'jungwon', f: 'serious', t: "When you go home, everything that stopped starts again. The date in spring hasn't moved. Nothing here moves it. I'll be at the end of it. I'd like you to know what's at the end of it before you get there." },
        { s: 'jungwon', f: 'serious', t: "It's me. That's all. Not a contract. Not my father, or yours. Just a man in a coat who is going to ask you, every time, whether you want to be standing where you're standing." },
        { s: 'jungwon', f: 'neutral', t: "Your collar's down. The wind's coming off the water. May I?" },
        { choose: [
          { t: "(Let him.)", notes: 3, then: [
            { n: "He turned her collar up with his gloved fingers, carefully, all the way round, the way you'd dress a wound on somebody you didn't want to hurt, and didn't let his hands stay one second longer than the collar needed, and she felt every one of the seconds they didn't." }
          ] },
          { t: "I still don't know. About the date.", notes: 3, then: [
            { s: 'jungwon', f: 'neutral', t: "I know. I'd rather not know with you than know with anybody else." },
            { n: "Then he turned her collar up anyway, because he'd asked, and she hadn't said no, and that, in that house, was a kind of yes he had learned never to take for granted." }
          ] },
          { t: "You don't have to ask.", notes: 2, then: [
            { s: 'jungwon', f: 'neutral', t: "Yes, I do. That's the whole point of me." }
          ] }
        ] }
      ], else: [{ ifHeading: 'H', then: [
        { s: 'jungwon', f: 'neutral', t: "In the other house there's a date in spring that two men picked over a white porcelain bottle. You turned it down by going somewhere nobody arranged. You don't even remember all of what you turned down. That's the best part." },
        { s: 'jungwon', f: 'neutral', t: "I'll be the only person in Hanlim who knows. I'm never going to bring it up. Unless you ask me in this coat." },
        { s: 'jungwon', f: 'neutral', t: "Your collar's down. The wind's coming off the water. May I?" },
        { choose: [
          { t: "(Let him.)", notes: 3, then: [
            { n: "He turned her collar up with his gloved fingers, carefully, all the way round, and then, being the other one too, flicked her on the forehead with one leather fingertip, very lightly, for standing in the wind like an idiot. She hit his arm. He looked delighted." }
          ] },
          { t: "Do you mind? That I didn't pick that one?", notes: 3, then: [
            { s: 'jungwon', f: 'neutral', t: "I'm wearing its coat. I'd only mind if you'd picked it because somebody told you to." },
            { s: 'jungwon', f: 'happy', t: "Nobody's ever been able to tell you anything. It's your worst quality. I'd vote for it again." }
          ] },
          { t: "Are you sad?", notes: 2, then: [
            { s: 'jungwon', f: 'neutral', t: "In this coat, a little. In the other one I'm insufferable about it." }
          ] }
        ] }
      ], else: [{ ifHeading: 'R', then: [
        { s: 'jungwon', f: 'neutral', t: "From my window at home I could see your house across the water. Now you're going across a much bigger one, to a city with snow on the windowsills, where neither of me has ever been." },
        { s: 'jungwon', f: 'sad', t: "There's a date in spring in the other house. It won't have you at the end of it. I don't know what it'll have. I find I don't want to know without you." },
        { s: 'jungwon', f: 'neutral', t: "Your collar's down. The wind's coming off the water. May I?" },
        { choose: [
          { t: "(Let him.)", notes: 3, then: [
            { n: "He turned her collar up with his gloved fingers, all the way round, slowly, as if he were memorizing the job for later, for when there'd be nobody's collar to turn, and stepped back exactly one pace when he'd finished, the correct distance, and stayed there." }
          ] },
          { t: "Come and visit. In the snow.", notes: 3, then: [
            { s: 'jungwon', f: 'surprised', t: "..." },
            { s: 'jungwon', f: 'happy', t: "I'll look into the route. I'm very good with routes. You know what I mean by routes." }
          ] },
          { t: "It's not fair.", notes: 2, then: [
            { s: 'jungwon', f: 'neutral', t: "No. Most things in that house aren't. This is the first one I'm glad about anyway." }
          ] }
        ] }
      ], else: [{ ifHeading: 'stay', then: [
        { s: 'jungwon', f: 'happy', t: "This is the water you're keeping. It's very gray. It smells like a fish market and somebody's cooler. I approve." },
        { s: 'jungwon', f: 'neutral', t: "There's a date in spring in the other house that won't have you at the end of it, and an exam in the other, whichever morning it turns out to be, that won't have you in row three. Both of me have to go home and be polite about that." },
        { s: 'jungwon', f: 'neutral', t: "Your collar's down. The wind's coming off the water. May I?" },
        { choose: [
          { t: "(Let him.)", notes: 3, then: [
            { n: "He turned her collar up with his gloved fingers, carefully, all the way round, and smoothed it flat at the back of her neck, and said, to the collar, very quietly, that this world had better look after her properly, and that he'd be checking, somehow." }
          ] },
          { t: "Be polite about it with me. Here. For an hour.", notes: 3, then: [
            { s: 'jungwon', f: 'neutral', t: "...That's the most generous thing anyone's ever offered me. An hour of being polite about it in company." },
            { n: "He opened his soup at last. They drank it at the rail, side by side, being polite about it, until the cans went cold." }
          ] },
          { t: "I'm sorry.", notes: 2, then: [
            { s: 'jungwon', f: 'neutral', t: "Please don't be. It's the first thing anyone's chosen in front of me without asking my father." }
          ] }
        ] }
      ], else: [
        { s: 'jungwon', f: 'neutral', t: "You'll have this water and the other one and somewhere with snow on the windowsills, all at once. You'll have the house across the water, and the date, and me at the end of it, and the other me in row three, and you'll be in all of it at the same time." },
        { s: 'jungwon', f: 'serious', t: "I don't know what happens to the date when you're in three places. I've decided not to be afraid of it until I'm standing in front of it with you." },
        { s: 'jungwon', f: 'neutral', t: "Your collar's down. The wind's coming off the water. May I?" },
        { choose: [
          { t: "(Let him.)", notes: 3, then: [
            { n: "He turned her collar up with his gloved fingers, carefully, all the way round, and then stood looking at it as if checking his work against the version of her he'd see on the other side, and nodded, once, satisfied with both." }
          ] },
          { t: "You'll be at the end of it. That's enough.", notes: 3, then: [
            { s: 'jungwon', f: 'surprised', t: "..." },
            { s: 'jungwon', f: 'flustered', t: "Please don't say things like that to me in this coat. I don't have the face for them in this coat." }
          ] },
          { t: "Are you scared?", notes: 2, then: [
            { s: 'jungwon', f: 'neutral', t: "Very politely." }
          ] }
        ] }
      ] }] }] }] },
      { n: "He opened his soup. He drank it standing at the rail in a coat that cost more than the dorm's refrigerator, from a can that cost a hundred and twenty yen, very slowly, with every appearance of a man taking a formal tea." },
      { s: 'jungwon', f: 'neutral', t: "In this coat I'd never have let you see me eat a rice ball on a staircase. I'd never have let you see me hungry at all. I'm trying to decide if that was good manners or cowardice." },
      { choose: [
        { t: "(Clink your can against his. *Cowardice.*)", notes: 3, then: [
          { n: "The cans clinked, a dull tinny sound swallowed by the wind at once. He looked at his can, and at hers, and then laughed, quietly, the real one, into his gloved hand, and the gulls on the bollards turned their heads all together, as if they'd never once heard anything like it from a coat like that." },
          { s: 'jungwon', f: 'happy', t: "Yes. I thought so. I just wanted it seconded." }
        ] },
        { t: "Which coat do you like better?", notes: 3, then: [
          { s: 'jungwon', f: 'neutral', t: "The one you're looking at. That's always the answer. It's the only answer I've ever been sure of in either of them." }
        ] },
        { t: "Can we go back? I'm cold.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "Of course. I should have noticed first. In this coat I always notice first." }
        ] }
      ] },
      { ifRoute: 'romance', then: [
        { n: "He took off his right glove. He did it slowly, finger by finger, and put the glove in his coat pocket, and held out his bare hand to her in the cold, palm up, the way a man at a very long dinner might hold out his hand to a woman he'd been seated beside and had, at last, been allowed to speak to." },
        { s: 'jungwon', f: 'neutral', t: "May I?" },
        { choose: [
          { t: "(Take off your glove too. Then take his hand.)", notes: 3, then: [
            { n: "She took her glove off with her teeth, which made him close his eyes as if in pain, and put her bare hand in his, and his fingers closed round hers, cold and then not cold, and he didn't say anything at all, and his face went still, all the way, the way it only ever went when he was happier than he knew what to do with." }
          ] },
          { t: "(Say yes. Out loud. So he hears it.)", notes: 3, then: [
            { s: 'solar', f: 'flustered', t: "Yes." },
            { n: "He took her hand as if the word had been a key, and held it, and walked her back down the pier like that, his bare hand around hers in the wind, past the abandoned cooler and the gulls and the fishermen, at an even, unhurried pace, the way you'd walk somebody down an aisle you'd chosen." }
          ] }
        ] }
      ], else: [
        { n: "He offered her his arm. Formally, the elbow crooked, the way you'd offer it to someone at a very long dinner to walk them through to the next room, and stood there with it out in the wind and waited, with absolute seriousness, to see what she'd do with it." },
        { choose: [
          { t: "(Take it like a lady at a very long dinner.)", notes: 3, then: [
            { n: "She took it with enormous dignity, and he walked her back down the pier like a man escorting a minister, past the abandoned cooler and the gulls, and nodded gravely to a fisherman, and the fisherman nodded back, bewildered, and she laughed so hard by the end of the pier she had to hold the rail." }
          ] },
          { t: "(Take it like a vice president. Bump his shoulder.)", notes: 3, then: [
            { n: "She hooked her arm through his and shoved him with her shoulder, the way somebody in a different uniform would have, and the camel coat lurched sideways a step, and he looked down at her with an expression of profound betrayal and didn't let go of her arm." },
            { s: 'jungwon', f: 'happy', t: "That's not how this coat works." },
            { s: 'solar', f: 'happy', t: "It is now." }
          ] }
        ] }
      ] },
      { n: "At the foot of the pier he stopped under the streetlight, and took something out of his coat pocket, and she saw the blue and gold of the enamel, and watched him fix the small pin to the lapel of the camel coat, where it looked absurd, a school badge on a coat like that. He looked down at it. He left it there." }
    ] },

    { after: '3/1', title: '15: adjourned', place: 'Gekkoukan High · Student Council Room', time: 'After School', music: 'tender', scene: [
      { n: "He'd borrowed the council room for one hour. In writing, on a form, from the new president, who'd said yes before he'd finished the sentence and then gone pink to the ears and fled. It was hers now, and you could tell, the cartoon cat mug and the colored pens and the whiteboard full of a round nervous hand, but the long table was clear at his end, and on it were two cups of tea from the terrible kettle, and a paper bag folded over at the top, and the minutes book." },
      { n: "The first of March had come in mild, the first mild day all year. The window was open a crack. The air that came through it smelled of wet earth and something green on its way, and the radiator had finally stopped clanking, as if it, too, had been told the meeting was nearly over." },
      { s: 'jungwon', f: 'neutral', t: "Thank you for coming. This is the last meeting. I've kept these minutes since the fifteenth of October. I'd like to close them properly." },
      { s: 'jungwon', f: 'neutral', t: "You're the only other member. Quorum is you." },
      { n: "He opened the book to the first page. The red pen. The neat slanted print. *Present:*, and his own name, and then hers, and in front of it a surname crossed out so thoroughly that the paper had torn, and under that, in January, in a different hand, her own signature in the gap." },
      { choose: [
        { t: "(Let him read it all out. Every meeting.)", notes: 3, then: [
          { n: "He read it all. The budget and the binders and the occult club's six hundred and sixty-six yen. *November sixth. Sea bream. She said it was terrible.* *February second. She came in on free attendance.* He read every item in the same even voice, not hurrying, the way you'd read the names on a memorial, and she sat across the table and listened to five months of her own life read back to her by the only person who'd written it down." }
        ] },
        { t: "(Take the book. Read the last page first.)", notes: 3, then: [
          { n: "She turned to the back. The last page had today's date on it, and *Present: Yang Jungwon, Solar*, and below it a single word, *Item:*, and then nothing at all, the line left empty, and the pen marks around it where he'd started to write something several times and stopped." },
          { s: 'jungwon', f: 'flustered', t: "You always read the end first. At home you read the last page of my agenda in the first minute of every meeting and then ignored the rest." }
        ] },
        { t: "Skip to the end.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "No. I've never skipped anything in my life. I'm not going to start at the last meeting." }
        ] }
      ] },
      { s: 'jungwon', f: 'neutral', t: "There's one more item. A motion." },
      { ifHeading: 'H', then: [
        { n: "He unfolded the top of the paper bag. Inside, on a napkin, was a croissant, a little crushed from his bag, with a heart piped on it in red icing, and in the heart, in Sunoo's careful hand, two letters. *VP.*" },
        { s: 'jungwon', f: 'neutral', t: "The motion is that the vice president come home." },
        { s: 'jungwon', f: 'neutral', t: "Whatever morning it is when we get back. Exams, or after them. Row three either way. I won't look at you. I'll look at you. My mother will be at the kitchen table and Maeumi will be on my bed and Sunoo will ask me whether I've eaten, and I'll say yes, and it'll be true, because I'll have sat down at a table and eaten all of it." },
        { s: 'jungwon', f: 'neutral', t: "Sunoo is going to tell the school it was a council retreat. He's a terrible liar. They'll believe him anyway. Your mother won't. I've prepared remarks." },
        { s: 'jungwon', f: 'happy', t: "In one house I was arranged for you. You picked the one where I wasn't. I'm going to spend the rest of my life being very quietly smug about that, at a polite volume." },
        { choose: [
          { t: "(Second the motion.)", notes: 3, then: [
            { s: 'solar', f: 'neutral', t: "Seconded." },
            { s: 'jungwon', f: 'neutral', t: "All in favor." },
            { n: "They both raised a hand. He counted. He counted twice. He wrote *carried, unanimous* in the red pen and underlined it, and then split the croissant exactly in half and gave her the bigger half, which she'd known he would." }
          ] },
          { t: "(Amend it. *And the president eats breakfast.*)", notes: 3, then: [
            { s: 'jungwon', f: 'neutral', t: "That's already decided. I decided it in January." },
            { s: 'solar', f: 'happy', t: "Now it's in the minutes." },
            { s: 'jungwon', f: 'flustered', t: "...So moved. As amended. You'd have made a terrible president. You're a perfect vice president. I've always said so. Mostly to myself." }
          ] },
          { t: "What if I'm bad at it? Being home?", notes: 2, then: [
            { s: 'jungwon', f: 'happy', t: "You'll be late and disorganized and you'll argue with my agenda. That's what being good at it looks like. I've checked." }
          ] }
        ] }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'jungwon', f: 'neutral', t: "The motion is that we go home to the date and find out what it is when we get there." },
        { s: 'solar', f: 'sad', t: "I don't know what it is." },
        { s: 'jungwon', f: 'neutral', t: "Noted. It's the most honest minute in the book. I'm writing it down exactly the way you said it." },
        { n: "He did. *She doesn't know.* In red, very neat, with nothing after it. Then he set the pen down parallel to the edge of the page and folded his hands." },
        { s: 'jungwon', f: 'serious', t: "There's a word I've said to you only a handful of times, in that house, in a register I almost never use with you. I'm not going to say it in a borrowed room at a school I don't attend. I'd like to say it somewhere it can't be mistaken for anything else." },
        { choose: [
          { t: "(Second the motion.)", notes: 3, then: [
            { s: 'solar', f: 'neutral', t: "Seconded." },
            { s: 'jungwon', f: 'neutral', t: "All in favor." },
            { n: "They both raised a hand. He looked at the two hands for a long moment, his and hers, in the mild air from the window, and then wrote *carried* in the minutes, and under it, smaller, *(neither of us knows what it is. both of us voted for it anyway.)*" }
          ] },
          { t: "(Say *I still don't know*, and raise your hand anyway.)", notes: 3, then: [
            { n: "She raised her hand. He looked at it like a man reading his own name on a ballot he hadn't expected to be on." },
            { s: 'jungwon', f: 'neutral', t: "That's the only kind of yes I've ever wanted from you. The kind that knows it doesn't know." }
          ] },
          { t: "Say the word now.", notes: 2, then: [
            { s: 'jungwon', f: 'neutral', t: "No. Not here. You'd only ever think it was the room." }
          ] }
        ] }
      ], else: [{ ifHeading: 'R', then: [
        { s: 'jungwon', f: 'sad', t: "The motion is that the vice president go somewhere I've never been, and that I don't follow, and that I'm gracious about it." },
        { n: "He took the minutes book and, very carefully, along a ruler he'd brought for exactly this, tore out the first page. October fifteenth. *Present.* His name, and hers, and the torn place where a surname had been. He folded it once and held it out to her across the table." },
        { s: 'jungwon', f: 'neutral', t: "Wherever you're going, somebody should have a record that you were here first. Before anyone else wrote you down." },
        { choose: [
          { t: "(Second the motion.)", notes: 3, then: [
            { s: 'solar', f: 'neutral', t: "Seconded." },
            { s: 'jungwon', f: 'neutral', t: "All in favor." },
            { n: "They both raised a hand. He wrote *carried* in the minutes, and then sat looking at the word for a long time, the red pen still touching the page, as if he'd forgotten what you did next after a motion carried, which he had never once forgotten in his life." }
          ] },
          { t: "(Vote against it. Make him count.)", notes: 3, then: [
            { s: 'jungwon', f: 'surprised', t: "..." },
            { s: 'jungwon', f: 'neutral', t: "One in favor. One against. The chair breaks the tie." },
            { s: 'jungwon', f: 'sad', t: "...Carried. I'm sorry. I'm the chair. I've always been the chair. Thank you for voting against it. I'll keep that too." }
          ] },
          { t: "Will you be all right?", notes: 2, then: [
            { s: 'jungwon', f: 'happy', t: "I'll be gracious. I said so in the motion. It's binding." }
          ] }
        ] }
      ], else: [{ ifHeading: 'stay', then: [
        { s: 'jungwon', f: 'neutral', t: "The motion is that the vice president stay, and that I go home, and that both of us mean it." },
        { n: "He closed the minutes book and pushed it across the table to her with one finger, the way he'd once pushed a pin, all five months of it, the red pen clipped inside the cover." },
        { s: 'jungwon', f: 'neutral', t: "Somebody here should keep the minutes. Kirijo-san would, but she'd correct my grammar, and she'd be right." },
        { choose: [
          { t: "(Second the motion.)", notes: 3, then: [
            { s: 'solar', f: 'neutral', t: "Seconded." },
            { s: 'jungwon', f: 'neutral', t: "All in favor." },
            { n: "They both raised a hand. He didn't count. It was the first motion all year he hadn't counted. He just looked at her hand in the air in the mild light, and nodded, once, as though that settled something in more than one place." }
          ] },
          { t: "(Take the book. Write the next item yourself.)", notes: 3, then: [
            { n: "She opened it to the last page and wrote under *Item:* in her own hand, slowly, so it would be legible, which it wasn't. *the president is allowed to sit down.* He read it upside down. He didn't say anything. He sat back in his chair, actually back, his shoulders against the wood, for the first time since October." }
          ] },
          { t: "I don't want you to go.", notes: 2, then: [
            { s: 'jungwon', f: 'neutral', t: "I know. I'm not in any hurry. I wanted you to know that. I've never been in any hurry at all." }
          ] }
        ] }
      ], else: [
        { s: 'jungwon', f: 'neutral', t: "The motion is everything. That the vice president go home to all of it at once, and that I be in two of the rooms, and that this one be remembered by somebody, even if only on paper." },
        { s: 'jungwon', f: 'neutral', t: "I'll keep the book. You'll be everywhere. You won't need a record. This room might." },
        { choose: [
          { t: "(Second the motion.)", notes: 3, then: [
            { s: 'solar', f: 'neutral', t: "Seconded." },
            { s: 'jungwon', f: 'neutral', t: "All in favor." },
            { n: "They both raised a hand. He counted, and then, very gravely, raised his other hand too, and counted that, and wrote *carried, three to one, the chair voting twice, once for each house* and dared her with his eyebrows to object." }
          ] },
          { t: "(Sign the last page with all three of your names.)", notes: 3, then: [
            { n: "She took the red pen and signed the last page three times, one under another. Two of the names had the same surname and weren't the same name at all, and the third was round and hurried with a little tail on the M. He read all three upside down and didn't say anything for a while." },
            { s: 'jungwon', f: 'neutral', t: "That's the first time anyone's ever given me all of them. I'll keep them in order." }
          ] },
          { t: "Will you remember this? Here?", notes: 2, then: [
            { s: 'jungwon', f: 'neutral', t: "I've written it down. Twice. I'll remember it if I have to read it off the page every morning for the rest of my life." }
          ] }
        ] }
      ] }] }] }] },
      { n: "He knocked twice on the table with his knuckles, the way he'd knocked on the long table in the other council room a hundred times, she could hear it, she'd been there, and looked at her over the minutes book with the red pen poised." },
      { s: 'jungwon', f: 'neutral', t: "Is there any other business?" },
      { choose: [
        { t: "There's other business. Did you eat?", notes: 3, then: [
          { s: 'jungwon', f: 'neutral', t: "Breakfast. Sitting down. At the guesthouse table. All of it. Rice and an egg and soup, and the polite woman watched me the whole time as if I might bolt." },
          { s: 'jungwon', f: 'happy', t: "I've been practicing. Every morning since the roof. I wanted to be good at it before it counted." }
        ] },
        { t: "(Knock twice on the table yourself, before he can.)", notes: 3, then: [
          { s: 'jungwon', f: 'surprised', t: "That's the chair's job." },
          { s: 'solar', f: 'happy', t: "I'm the vice. The chair looked tired." },
          { s: 'jungwon', f: 'happy', t: "...The chair was tired. The chair thanks the vice." }
        ] },
        { t: "No other business.", notes: 2, then: [
          { s: 'jungwon', f: 'sad', t: "No. There never is, at the end. That's how you know it's the end." }
        ] }
      ] },
      { ifRoute: 'romance', then: [
        { cg: 'link-jungwon-r15' },
        { n: "He wrote the time the meeting closed. Then he capped the red pen and put it down, parallel to the edge of the page, and stood, and came around the table in the Gekkoukan blazer he'd borrowed for the afternoon so nobody would have to explain him to a teacher, and sat down in the chair beside hers instead of the one across from it. The sun had got low while they weren't looking. It came in orange through the window and lay across the table and the minutes book and the side of his face, and he put his chin on his hand, the way she had hers, and looked at her from a foot away for long enough that she started to smile." },
        { ifHeading: 'H', then: [
          { s: 'jungwon', f: 'flustered', t: "Sunoo planned the croissant. I want to be honest. I planned this part myself. I've never planned anything less well." }
        ] },
        { cg: null },
        { s: 'jungwon', f: 'neutral', t: "May I?" },
        { choose: [
          { t: "(Yes.)", notes: 3, then: [
            { n: "He leaned in and kissed her, briefly, carefully, the way he'd done it on the roof in January, the way you'd sign something you'd read every word of first, and when he sat back his ears had gone red to the tips and his face was completely still, no dimples, nothing at all, which was the happiest she'd ever seen it." },
            { s: 'jungwon', f: 'flustered', t: "...That's not going in the minutes." }
          ] },
          { t: "(Lean in and kiss him first.)", notes: 3, then: [
            { n: "She leaned in and kissed him before he'd finished asking, briefly, and felt him go absolutely still against her, and then laugh, once, through his nose, against her mouth, as though he'd been outvoted in a meeting he'd been hoping all along to lose." },
            { s: 'jungwon', f: 'flustered', t: "Out of order. Completely out of order. ...Carried." }
          ] }
        ] }
      ], else: [
        { n: "He wrote the time the meeting closed. Then he capped the red pen and stood, and held out his hand across the table, the way he had on the roof in January, two presidents at the end of a summit, and then, before she could take it, drew it back an inch and looked at it with a frown." },
        { s: 'jungwon', f: 'flustered', t: "I'm told friends hug. At the end of things. I've never done it on purpose." },
        { choose: [
          { t: "(Hug him.)", notes: 3, then: [
            { n: "She came round the table and hugged him, and he stood rigid for exactly one second, like a man being fitted for a suit, and then put his arms around her very carefully, as though following written instructions, and then less carefully, and then held on." },
            { s: 'jungwon', f: 'flustered', t: "...That's going in the minutes. As a historic record." }
          ] },
          { t: "(Shake his hand. Then don't let go.)", notes: 3, then: [
            { n: "She took his hand and shook it, once, very formally, and then didn't let go, and neither did he, and they stood there in somebody else's council room holding on long past the end of any handshake, until he gave up and laughed and pulled her into the hug anyway." }
          ] }
        ] }
      ] },
      { n: "On the way out he stopped at the door, and turned the light off, and in the dimness took his watch off and wound it and put it back on, the way he did every night, in case. It still said eleven fifty-eight. He looked at it, and then at the room, and then at her, and didn't seem to mind." },
      { n: "The last line in the minutes, she found out later, because he showed her, said *Adjourned, 4:51 p.m.* And under it, in pencil, so it could be rubbed out if anyone ever had to, *(not really).*" }
    ] }
  ],

  afterMax: [
    { title: "yeobo's", place: "Iwatodai Strip · Yeobo's Cafe", time: 'After School', scene: [
      { n: "The cafe was there. She saw it from the end of the strip, wedged between the ramen shop and a shuttered pachinko place with its windows fogged gold, and beside her Jungwon stopped walking so suddenly a man behind them had to step around him." },
      { s: 'jungwon', f: 'surprised', t: "...It's never here on a Thursday." },
      { n: "Inside, Sunoo was behind the counter in an apron, and looked up, and his whole face lit like a shop sign." },
      { s: 'sunoo', f: 'happy', t: "He's eating! He's out in public and he's going to eat! Solar, I could kiss you!" },
      { s: 'jungwon', f: 'flustered', t: "Please don't kiss her." },
      { choose: [
        { t: "Two croissants. And whatever he's pretending he doesn't want.", notes: 3, then: [
          { s: 'sunoo', f: 'happy', t: "Coming right up! Name for the order?" },
          { s: 'solar', f: 'neutral', t: "Solar." },
          { n: "Sunoo's pen stopped. Then he wrote it, very carefully, and underlined it twice, and handed the slip to Jungwon instead of her, and Jungwon put it in his pocket." }
        ] },
        { t: "He'll have what he always has.", notes: 3, then: [
          { s: 'jungwon', f: 'neutral', t: "I don't always have anything." },
          { s: 'sunoo', f: 'happy', t: "He always has the americano and then steals half her croissant. Coming right up!" }
        ] }
      ] },
      { ifRomance: 'jungwon', then: [
        { n: "He stole half her croissant. She let him. Under the table, his knee rested against hers, very lightly, as if it had arrived there by an oversight he did not intend to correct." }
      ], else: [
        { n: "He stole half her croissant. She stole it back. Sunoo watched them from behind the counter with his chin in his hand like a man watching his favorite drama." }
      ] }
    ] },
    { title: 'twelve-thirty', place: 'Gekkoukan High · Rooftop', time: 'Lunchtime', scene: [
      { n: "He'd put it in his schedule. She'd seen it. In the little grid on the inside cover of his notebook, in red, between *budget, athletics* and *council minutes, draft*: 12:30 to 12:55, *lunch (Solar).*" },
      { s: 'jungwon', f: 'happy', t: "Twenty-five minutes. I'm told that's normal. Sunoo says normal people take a whole hour. I'm working up to it." },
      { n: "He'd brought a bento. He'd made it. Rolled egg, cut so evenly it looked printed, rice, a little pickled radish, and two of the small octopus-shaped sausages, which he moved to her side of the box without comment." },
      { choose: [
        { t: "You cut the sausages into octopuses.", notes: 3, then: [
          { s: 'jungwon', f: 'flustered', t: "It's efficient. The legs cook faster." },
          { n: "It was not efficient. They both knew it was not efficient." }
        ] },
        { t: "(Eat, and time him eating too.)", notes: 3, then: [
          { n: "He ate the entire thing in twenty-three minutes and looked so pleased with himself about the two spare minutes that she didn't tell him he'd spent them watching her." }
        ] }
      ] }
    ] }
  ],

  christmas: { place: 'Iwatodai Strip', time: 'Evening', scene: [
    { n: "It was snowing on the strip, big slow flakes that came down past the ramen shop's lanterns and the karaoke sign and settled on the shoulders of everyone walking past with their shopping, and Jungwon was standing under the awning of the bookstore with a paper bag in one hand and the expression of a man who had planned this to the minute and been ambushed by weather." },
    { s: 'jungwon', f: 'neutral', t: "I had a schedule. The snow wasn't on it." },
    { s: 'jungwon', f: 'flustered', t: "Merry Christmas. I didn't know what to get you. I made a list. I crossed everything off it. This was the only thing left." },
    { n: "Inside the bag was a scarf. Plain, dark, very warm. Folded into it was a small card in his neat slanted print. *You never wear one. Please wear this one.*" },
    { choose: [
      { t: "(Put it on. Then put it around both of you.)", notes: 3, then: [
        { cg: 'romance-jungwon-christmas' },
        { n: "It was long enough. He'd measured, she realized. He'd bought it long enough on purpose, and stood there with the other end around his own neck and snow on his hair looking like a man caught in the middle of a crime he'd committed very carefully." }
      ] },
      { t: "(Give him yours: a pocket watch-stand, so he can set the watch down at night.)", notes: 3, then: [
        { s: 'jungwon', f: 'surprised', t: "..." },
        { s: 'jungwon', f: 'flustered', t: "So I'd stop sleeping with it on." },
        { s: 'jungwon', f: 'flustered', t: "How did you know I sleep with it on." }
      ] }
    ] },
    { s: 'jungwon', f: 'happy', t: "Merry Christmas, Solar." },
    { n: "They walked the length of the strip twice, slowly, because neither of them wanted to be the one to say the walk was over." }
  ] }
});
