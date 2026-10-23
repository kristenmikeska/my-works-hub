/* The living world (2026-10-21): who lives where, Solar's birthday, and the build-up before each full-moon operation.
   Story events use the story files' format (story-act1.js header). They're small and fixed to their dates; `consumes`
   spends the slot they play in (a lunch scene takes lunch's place), and never a free one (After School, the evening),
   except the birthday party, which is the evening. Everything after 12/21 waits for the flag 'year-goes-on'.
   FEMC_GAME_LODGING is Kat's housing ruling (FEMC-REVAMP-LORE.md): only these searchers live in the dorm. Late-night
   scenes (data/living-nights.js) hold to it: a guesthouse resident's late night is a visit that ends, a walk, or a call. */
window.FEMC_GAME_LODGING = {
  dorm: ['hanni', 'hyein', 'yunjin', 'haechan'],
  guesthouse: ['minji', 'jungwon', 'jihoon', 'jaehyun', 'mark', 'cherry', 'junkyu', 'asahi', 'hyunsuk', 'jaehyuk', 'sunoo', 'heeseung', 'sunghoon', 'jay', 'jake', 'niki',
    'danielle', 'jaemin', 'chenle'], // the late Runners arrivals (2026-10-22)
  // S.E.E.S. live in the dorm (Shinjiro from 8/7, Ken and Koromaru from 8/7, Aigis from Yakushima).
  sees: ['akihiko', 'mitsuru', 'yukari', 'junpei', 'fuuka', 'aigis', 'ken', 'koromaru', 'shinjiro']
};

(window.FEMC_GAME_EVENTS ||= []).push(
  /* ── Solar's birthday, 6/24 (canon). Nobody knew it but the enrollment form. ── */
  { id: 'lw-birthday-morning', date: '6/24', slot: 'early', consumes: true, title: 'a normal wednesday', place: 'Iwatodai Dorm · Dining Room', time: 'Early Morning', scene: [
    { music: 'joy' },
    { n: "Something was wrong with breakfast. Solar couldn't have said what. The rice was rice and the rain was rain, the same gray June rain it had been for two weeks, but everybody at the table was being normal so hard that the air had gone tight with it, like a room where someone has just stopped talking about you." },
    { n: "Junpei said good morning to her twice. Yukari kicked him under the table the second time. Fuuka had a smear of something white on her sleeve that looked very much like frosting and kept her arm under the table for the entire meal, and Akihiko, who never missed a run, came back from his with no sweat on him at all and a paper bag he put behind the umbrella stand as if it were contraband." },
    { s: 'junpei', f: 'happy', t: "So! Big day today! I mean. A day. Today's a day. It's a Wednesday. Happy Wedn—" },
    { s: 'yukari', f: 'serious', t: "Junpei, eat your rice." },
    { s: 'mitsuru', f: 'neutral', t: "Solar. I'd like you home by seven this evening, if it's convenient. There's a... matter. A household matter." },
    { choose: [
      { t: "Is everyone okay? You're all being weird.", then: [
        { s: 'akihiko', f: 'surprised', t: "We're fine. Everybody's fine. It's raining. Rain's weird." },
        { n: "He said it to his bowl. Mitsuru closed her eyes briefly, the way she did in the command room when a reading came in worse than she'd hoped, and changed the subject to the athletic budget, at length, until it was time to go." }
      ] },
      { t: "Seven. Okay.", then: [
        { n: "Mitsuru nodded, satisfied, and Junpei let out a breath he'd apparently been holding since six, and Yukari put her face in her hands, and Solar went to school with the distinct feeling that the whole dorm had a secret, and that for once, for the first time since April, it wasn't one she was keeping." }
      ] }
    ] }
  ] },

  { id: 'lw-birthday', date: '6/24', slot: 'evening', consumes: true, title: 'the only other line', place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
    { music: 'joy' },
    { n: "The lounge was dark when she came in at seven. Not off. Dark, deliberately, every lamp out and the curtains drawn against the rain, and she stood in the doorway with her wet umbrella dripping on the mat and her hand already going to her pocket for the Evoker that wasn't there, because a dark room in this building had only ever meant one thing." },
    { n: "Then somebody hissed *NOW*, and somebody else said *I KNOW*, and the lights came on all at once." },
    { bg: 'iwatodaidorm-livingroom-birthday' },
    { cg: 'story-birthday-surprise' },
    { s: 'junpei', f: 'happy', t: "HAPPY BIRTHDAY!" },
    { n: "All of them. Junpei with a party popper he'd set off half a second early, so that the streamers landed on Yukari. Yukari picking them out of her hair and laughing anyway. Akihiko holding the cake out in both hands, every candle already lit, with tremendous seriousness, as if he'd been put in charge of a detonation; it leaned noticeably to the left and said *HAPPY BIRTHDAY SOLAR* in pink icing with the last two letters squeezed small against the edge. Fuuka at his elbow with her hands hovering under the plate, ready to catch it if it tried to escape. Mitsuru by the sofa, very straight, clapping in a measured way. And Koromaru, the white dog from the shrine steps, who did not live here and was certainly not allowed in the lounge, in a paper party hat with paw prints on it, tail going like a flag. Junpei said later he'd been bribed down the hill with a hot dog, and that it was worth it." },
    { ifMet: 'kiriko', then: [{ n: "Kiriko on the arm of the sofa in her hoodie, ringing a little bell she'd brought from the shrine every time anyone said the word birthday." }] },
    { ifMet: 'mercy', then: [{ n: "Mercy by the window with a glass of something and the warm, slightly amused face of a woman who'd been to a great many parties and liked this one." }] },
    { ifMet: 'sebastian', then: [{ n: "Sebastian in the corner by the door, as close to the exit as a person could get while still technically being at a party, holding a wrapped square that was very obviously a CD." }] },
    { s: 'solar', f: 'surprised', t: "...It's my birthday?" },
    { n: "The lounge went quiet. Junpei's second party popper drooped." },
    { cg: null },
    { s: 'mitsuru', f: 'neutral', t: "The twenty-fourth of June. It was on your enrollment form. Date of birth." },
    { s: 'mitsuru', f: 'sad', t: "It was the only other line on it that was filled in. Besides your name. I've looked at that form a great many times." },
    { n: "Solar looked at the cake. At the date in her head, which meant nothing. And then, under that, somewhere much older than her head, something that turned over and sat up and said *yes*, the way your body says yes to a step it knows is there in the dark. It was. It was her birthday. She didn't remember a single one, and she was sure." },
    { s: 'yukari', f: 'neutral', t: "Candles. Before they melt into the icing. Akihiko-senpai's been holding that thing for ten minutes." },
    { s: 'akihiko', f: 'neutral', t: "Fifteen. Make a wish." },
    { choose: [
      { t: "(Close your eyes. Wish for everyone in this room.)", stat: { kindness: 1 }, then: [
        { n: "She closed her eyes. Her body did it before she'd decided, a little tip of the chin, a breath held, the way you do a thing you've done every year of your life. She wished for all of them. It was the only wish she had that was entirely hers, and she blew, and every candle went out at once, and they cheered like she'd won something." }
      ] },
      { t: "(Close your eyes. Wish for nothing. Blow anyway.)", then: [
        { n: "She couldn't think of a wish, the way she couldn't think of one at Tanabata. So she kept the space empty and blew into it, and every candle went out at once, and they cheered anyway, and nobody asked what she'd wished for, and she was grateful to all of them for that in a way she couldn't have explained." }
      ] }
    ] },
    { n: "The cake was lopsided and very good. Fuuka confessed it was her nineteenth attempt, and that attempts one through eighteen were in a bag behind the dorm, and that the crows on the back wall had been very happy all week, and that she was sorry about the crows." },
    { s: 'ikutsuki', f: 'happy', t: "Many happy returns! I'm told I'm not allowed to stay, it's past my bedtime. But I did want to say, Solar, may your year be absolutely... *Solar-powered*. Ha ha!" },
    { n: "The Chairman had come by for exactly long enough to deliver that, and a card, and left, delighted with himself, and the whole lounge waited until the front door shut and then groaned at once, which Solar found she loved more than the joke." },
    { n: "Then the presents. She hadn't known there would be presents. She sat on the sofa with them in her lap like someone had handed her a stack of other people's mail." },
    { s: 'mitsuru', f: 'neutral', t: "It's standard issue. For field leaders. I had it made." },
    { n: "A slim silver ring in a velvet box. Plain, and heavy for its size, and not standard issue in any world." },
    { gift: { from: 'Mitsuru', gear: 'guard_ring' } },
    { s: 'yukari', f: 'blushing', t: "It's from the shrine. For luck. You go up there first every night and come down last. I figured you need it more than anybody." },
    { gift: { from: 'Yukari', gear: 'lucky_charm' } },
    { s: 'junpei', f: 'happy', t: "Mine's practical! Field kit! I made it myself! There's a baseball sticker on it, that's how you know it's mine." },
    { gift: { from: 'Junpei', item: { medicine: 3 } } },
    { s: 'fuuka', f: 'happy', t: "And... the cake. That's mine. And this. It's a recording. The roof at night, before the hour. I thought, you're always up there, but you're always there alone, so. Now you can hear it from anywhere." },
    { gift: { from: 'Fuuka', keepsake: 'a recording of the dorm roof at night' } },
    { ifMet: 'kiriko', then: [{ gift: { from: 'Kiriko', keepsake: 'a birthday omamori (the good paper)' } }] },
    { ifMet: 'mercy', then: [{ gift: { from: 'Mercy', item: { revival_bead: 1 } } }] },
    { ifMet: 'sebastian', then: [{ gift: { from: 'Sebastian', keepsake: 'a burned CD with no tracklist' } }] },
    { ifMet: 'shinjiro', then: [
      { n: "There was a box on the front step when Junpei went out to take the rubbish down. A plain white box, no card, no name. Inside it was a second cake, small and square and perfect, the kind of cake a person makes when they've made a great many and know exactly what they're doing, and Akihiko looked at it for a long moment and then laughed under his breath and didn't say whose it was." },
      { s: 'akihiko', f: 'happy', t: "He'll say he didn't make it. Thank him anyway. It'll drive him crazy." }
    ] },
    { n: "Akihiko gave his last, when everyone else had moved on to arguing about the second slice. He didn't make a speech. He just put it on her knee, a small paper bag, the one from behind the umbrella stand, and looked at the rain on the window while she opened it." },
    { ifRank: { akihiko: 1 }, then: [
      { n: "A new cord for the stopwatch. Red, braided, the frayed one replaced. He'd noticed. Of course he'd noticed. He noticed when she was a tenth of a second slower on the bridge." },
      { s: 'akihiko', f: 'blushing', t: "The old one was going to snap. You'd lose it in the river. That's all." },
      { gift: { from: 'Akihiko', keepsake: 'a red cord for the stopwatch' } }
    ], else: [
      { n: "A pair of running socks, the good kind, gray with a red stripe, and a protein bar on top, which he said was the important part." },
      { s: 'akihiko', f: 'neutral', t: "You run like you're late for something. You'll get blisters. That's all." },
      { gift: { from: 'Akihiko', keepsake: 'running socks (and a protein bar)' } }
    ] },
    { ifCrush: { akihiko: ['noticed', 'crush', 'puppy', 'almost'] }, then: [
      { n: "Of everything in her lap, it was the one she was still holding when the second slice had been argued over and eaten. She noticed that. So, from the doorway, did Yukari, who noticed everything and was saving it." }
    ] },
    { choose: [
      { t: "Thank you. All of you. I didn't know.", stat: { charm: 1 }, then: [
        { s: 'yukari', f: 'neutral', t: "Well. Now you do. Every year. We're putting it on Mitsuru-senpai's fridge schedule." },
        { s: 'mitsuru', f: 'neutral', t: "It's already on it." }
      ] },
      { t: "(Don't say anything. You don't trust your voice.)", then: [
        { n: "She didn't trust her voice, so she didn't use it. She held the ring box and the paper bag and the CD and sat in the middle of all of them while they argued about the last slice, and nobody needed her to say anything, and that, more than the cake, was the present." }
      ] }
    ] },
    { n: "They stayed up too late. Somebody put music on. The rain went on outside, and the cake leaned further and further to the left until Junpei declared it structurally unsound and ate the side that was falling, and it was past midnight before anyone noticed the hour had come and gone and the coffins had not, tonight, felt like anything worth mentioning." },
    { flag: { 'birthday-party': true } }
  ] },

  { id: 'lw-birthday-late', date: '6/24', slot: 'late', consumes: true, title: 'eighteen', place: 'Iwatodai Dorm · Rooftop', time: 'Late Night', bg: 'iwatodaidorm-roof-night', scene: [
    { ifRank: { akihiko: 3 }, then: [
      { n: "The roof at one in the morning, after the rain, everything wet and shining and the city washed clean below it. She'd come up to be alone with it, and he was already there, at the rail, with two cans of something from the machine downstairs, as if he'd known." },
      { s: 'akihiko', f: 'neutral', t: "Eighteen. That's what the form said, too. Eighteen." },
      { s: 'akihiko', f: 'neutral', t: "Does it feel like eighteen?" },
      { choose: [
        { t: "It feels like three lives.", then: [
          { n: "He didn't ask what she meant. He looked at her a long time in the wet streetlight, and then handed her the second can, and they stood at the rail and drank it, and he said, eventually, that three was a lot to carry up the stairs, and that she could put one down here, if she wanted, for a while. He'd watch it." }
        ] },
        { t: "It feels like the first one.", then: [
          { s: 'akihiko', f: 'happy', t: "Then it's a good one. First ones should be." },
          { n: "He tapped his can against hers. It was a small sound and it went a long way across the roof, and she thought she would remember it, and she was right." }
        ] }
      ] }
    ], else: [
      { n: "The roof at one in the morning, after the rain, everything wet and shining and the city washed clean below it. She stood at the rail with a slice of the lopsided cake on a napkin and ate it slowly, with her fingers, and said happy birthday to herself under her breath, to see what it sounded like." },
      { n: "It sounded like somebody else's. And then, after a minute, it didn't. It sounded like hers, a little, the way a coat you've borrowed for a month starts to fall into the shape of your shoulders." }
    ] },
    { n: "She went down at two. On her door somebody had stuck a pink sticky note, at eye level, in four different handwritings. *happy birthday leader* · *happy birthday!!* · *Happy birthday.* · *happy birthday. sleep.*" },
    { ifCrush: { akihiko: ['noticed', 'crush', 'puppy', 'almost'] }, then: [
      { n: "She knew whose the last one was. Square, blunt, pressed so hard into the paper it came through the back. She took the note off the door before anybody else was up, which was a strange thing to do with a sticky note, and did it anyway, and it went in her handbook, where she'd started keeping things." }
    ] }
  ] },

  /* ── Before the full moons: a short build-up on the day (or the morning), consistent with each operation's own scene. ── */
  { id: 'lw-pre-priestess', date: '5/9', slot: 'lunch', consumes: true, title: 'benched', place: 'Gekkoukan High · Rooftop', time: 'Lunch', bg: 'rooftop-day', scene: [
    { music: 'badfeeling' },
    { n: "The moon wasn't up yet. It didn't have to be. Akihiko had been in a mood since breakfast, the particular mood of a man who had been told by a doctor and by Mitsuru, in that order, that he would be sitting tonight's operation out, and he'd found Solar on the roof at lunch and was standing over her bench with his arms folded like a coach at a game he couldn't play in." },
    { s: 'akihiko', f: 'serious', t: "Junpei's on your left tonight. He'll want to go in first. Don't let him. Yukari stays back. You call it early if anything feels wrong. Early. Not late. Late's how people get hurt." },
    { s: 'akihiko', f: 'neutral', t: "And you come home. That's the order. I'm not cleared to give orders, so it's not an order. It's just what's going to happen." },
    { choose: [
      { t: "I'll call it early. Promise.", stat: { courage: 1 }, then: [
        { s: 'akihiko', f: 'neutral', t: "...Good." },
        { n: "He sat down on the end of the bench as if his legs had decided it, and took one of her rice balls without asking, and ate it looking out at the bay, and his shoulders came down half an inch, which was the most she'd seen them come down all week." }
      ] },
      { t: "You hate this.", then: [
        { s: 'akihiko', f: 'sad', t: "I hate sitting in a room while somebody else goes in. I've done it before. I'm not good at it." },
        { n: "He didn't say who'd gone in the last time. He looked at the bay for a while, and then at her, and said that at least tonight it was her, and that he didn't know why that made it better, but it did." }
      ] }
    ] },
    // Crushes (data/crush.js): a line for the phase she's in with him.
    { ifCrush: { akihiko: ['noticed', 'crush', 'puppy', 'almost'] }, then: [
      { n: "All afternoon she found she had his list by heart. Left, back, early, home. She said it under her breath on the stairs and in the corridor and in the last lesson, like a song stuck on its first line, and couldn't have said whether it was for the operation or for the voice that had said it." }
    ] }
  ] },

  { id: 'lw-pre-empress', date: '6/8', slot: 'lunch', consumes: true, title: 'a week', place: 'Gekkoukan High · 2F Hallway', time: 'Lunch', bg: 'school-hallwaysecondfloor', scene: [
    { music: 'badfeeling' },
    { n: "It had rained all morning. Solar ate lunch standing in the second-floor hallway by the window, because Yukari was there, looking across the courtyard at a classroom on the other side where one desk by the window had been empty for a week and somebody had left a pencil case on it, as if the owner might be back after the bell." },
    { s: 'yukari', f: 'sad', t: "A week. In there. At night. Alone." },
    { s: 'yukari', f: 'serious', t: "If it were me, I'd want somebody to come. Even if they were late. Even if they were really, really late." },
    { n: "Akihiko came down the hall with his bag over his shoulder and his gloves already in it, which meant he'd been ready since morning, and stopped beside them, and looked at the empty desk across the courtyard too." },
    { s: 'akihiko', f: 'neutral', t: "Tonight. Stay where I can see you. Both of you." },
    { choose: [
      { t: "We're going to get her out.", stat: { courage: 1 }, then: [
        { s: 'yukari', f: 'neutral', t: "...Yeah. We are." },
        { n: "She said it to the window, and then she straightened up, and the hallway felt different, the way a room does when someone's decided something in it." }
      ] },
      { t: "(Stand with them a while. Don't say anything.)", then: [
        { n: "The three of them stood at the window until the bell went, looking at a desk with a pencil case on it. It wasn't a plan. It was something you did before a plan, and they all knew it, and nobody moved until they had to." }
      ] }
    ] },
    { ifCrush: { akihiko: ['crush', 'puppy', 'almost'] }, then: [
      { n: "*Both of you.* He'd said it to both of them and looked at one. Yukari had noticed which. She didn't say anything about it, because there was a girl missing and it wasn't the day, but on the way back to class she nudged Solar's shoe with her own, once, sideways, which said all of it." }
    ] }
  ] },

  { id: 'lw-pre-hierophant', date: '7/7', slot: 'lunch', consumes: true, title: 'tape', place: 'Gekkoukan High · Rooftop', time: 'Lunch', bg: 'rooftop-day', scene: [
    { music: 'badfeeling' },
    { n: "Akihiko caught her on the stairs to the roof and held his hand out for her wrist without a word, and she gave it to him, because by July that was simply how it went before a full moon. He turned it over. He looked at the tape she'd done that morning herself. He undid it." },
    { s: 'akihiko', f: 'neutral', t: "Too tight on the bone. You'll lose feeling by midnight. Again. Hold still." },
    { n: "He did it over, on the stairwell landing, while second-years went past them with paper Tanabata wishes in their hands and pretended not to look. Firm, even, two turns and a cross, the way he did his own. He didn't look up from it." },
    { s: 'akihiko', f: 'neutral', t: "Did you sleep?" },
    { choose: [
      { t: "Some.", then: [
        { s: 'akihiko', f: 'serious', t: "Some isn't a number." },
        { n: "He tore the tape with his teeth and pressed the end down with his thumb, and held her wrist a second longer than he needed to, checking it, he'd have said, and let go." }
      ] },
      { t: "Did you?", stat: { charm: 1 }, then: [
        { s: 'akihiko', f: 'blushing', t: "...That's not how this works. I ask. You answer." },
        { n: "But he'd gone a little red at the ears, which meant no, and they both knew it, and he pressed the end of the tape down with his thumb and said *go eat something*, gruffly, to the wall behind her." }
      ] }
    ] },
    { ifCrush: { akihiko: ['puppy', 'almost'] }, then: [
      { n: "She counted the turns of the tape after he'd gone, two and a cross, and stood on the landing looking at her own wrist the way you look at a word you've written a hundred times and suddenly can't read. The second-years with their Tanabata wishes had all seen. One of them had a pen out." }
    ] }
  ] },

  { id: 'lw-pre-chariot', date: '8/6', slot: 'after', title: 'two of them', place: 'Iwatodai Dorm · Lounge', time: 'Daytime', bg: 'iwatodaidorm-livingroom', scene: [
    { music: 'badfeeling' },
    { n: "It was too hot to think and nobody was trying. The lounge had every window open and every fan on, and Solar was on the sofa with a cold can against her neck, and she had, she'd begun to notice, two shadows today." },
    { n: "Akihiko on her left, doing push-ups on the floor at the end of the sofa, where he could see the door. Aigis on her right, standing, where she could see the window. Every time Solar got up for anything, both of them got up too." },
    { s: 'aigis', f: 'neutral', t: "Sanada-san. You are also guarding Solar-san. We are duplicating effort." },
    { s: 'akihiko', f: 'neutral', t: "I'm not guarding anyone. I'm doing push-ups." },
    { s: 'aigis', f: 'neutral', t: "You have done one hundred and forty push-ups facing the door through which a threat would enter. I have logged them." },
    { choose: [
      { t: "I'm going to the kitchen. Nobody follow me.", then: [
        { n: "She went to the kitchen. Behind her, two people very carefully did not follow her, and then both arrived in the kitchen doorway at the same moment for unrelated reasons, a glass of water and a routine perimeter check, and stood there side by side looking at her with identical expressions, and she gave up and laughed until she had to sit on the floor." }
      ] },
      { t: "It's tonight, isn't it. You both feel it.", stat: { courage: 1 }, then: [
        { s: 'akihiko', f: 'serious', t: "...Yeah. The bridge. Fuuka says two." },
        { s: 'aigis', f: 'neutral', t: "My priority tonight is unchanged. It is the same as yesterday's. It is you." },
        { n: "Akihiko looked at Aigis. Aigis looked at Akihiko. Something passed between them that was very nearly an agreement, and Akihiko went back to his push-ups, and Aigis went back to the window, and Solar sat between them in the heat with the cold can against her neck and, for the first time all day, felt cool." }
      ] }
    ] },
    { ifCrush: { akihiko: ['puppy', 'almost'] }, then: [
      { s: 'aigis', f: 'neutral', t: "Solar-san. For the record. Your pulse rises by eleven beats per minute each time Sanada-san finishes a set and looks at the sofa. I have logged this as well." },
      { n: "On the floor, Akihiko collapsed onto his face in the middle of a push-up and stayed there. Solar put the cold can against her own forehead instead and held it there for a long time." }
    ] }
  ] },

  { id: 'lw-pre-hermit', date: '9/5', slot: 'lunch', consumes: true, title: 'eleven fifty-eight', place: 'Gekkoukan High · Rooftop', time: 'Lunch', bg: 'rooftop-day', scene: [
    { music: 'badfeeling' },
    { n: "Her phone had been buzzing for a week. Old messages from numbers she didn't know, arriving in the wrong order, girls' group chats and capital letters and someone calling her *wifey*, and she'd started checking it the way you touch a bruise, and at lunch on the roof she checked it four times in ten minutes, and on the fifth Akihiko put his hand over the screen." },
    { s: 'akihiko', f: 'neutral', t: "Full moon tonight. I need you here. Not in there." },
    { s: 'akihiko', f: 'sad', t: "...Sorry. That came out wrong. I don't mean don't read them. I mean read them after. When you're home. Safe. I'll sit with you while you do, if you want. I just want you in one piece first." },
    { choose: [
      { t: "(Put the phone away.)", stat: { courage: 1 }, then: [
        { n: "She put it in her bag and zipped the pocket. He took his hand back slowly, as if he'd been holding something that might fall, and they ate the rest of lunch looking at the sky, which was very blue and had a moon in it already, pale, early, like a coin someone had dropped in the daytime." }
      ] },
      { t: "What if one of them's important?", then: [
        { s: 'akihiko', f: 'neutral', t: "Then it'll still be important at one in the morning. They've waited this long." },
        { n: "He said it gently. He was right, and she hated it a little, and put the phone face down on the bench between them, and he kept one finger on the corner of it for the rest of lunch, lightly, like a paperweight." }
      ] }
    ] },
    { ifCrush: { akihiko: 'dating' }, then: [
      { n: "Under the bench, out of sight of the rest of the roof, his little finger had found hers and hooked round it. He kept it there until the bell, looking at the sky with total innocence, as though his hand were somebody else's business." }
    ], else: [
      { ifCrush: { akihiko: 'almost' }, then: [
        { n: "He didn't take his hand back for a while after that. Neither of them mentioned that it had stopped being on the phone some time ago and was resting, very lightly, on the back of hers." }
      ] }
    ] }
  ] },

  { id: 'lw-pre-fortune', date: '10/4', slot: 'after', title: 'sunday', place: 'Iwatodai Dorm · Lounge', time: 'Daytime', bg: 'iwatodaidorm-livingroom', scene: [
    { music: 'badfeeling' },
    { n: "Sunday, and the rain started at noon and didn't stop. The dorm was too full and too quiet at once. Ken had been sitting on the end of the sofa since breakfast with his school bag on his knees, not doing his homework, very still, the way a small animal goes still when it hears something in the grass." },
    { n: "Akihiko was taping her wrists in the kitchen. He didn't usually do it this early. He did it slowly today, and twice, and when she said it was fine he did the left one a third time anyway." },
    { s: 'akihiko', f: 'neutral', t: "Moonlight Bridge again, Fuuka thinks. I don't like that bridge." },
    { s: 'akihiko', f: 'serious', t: "Whatever happens tonight. If I tell you to get back, you get back. Promise me that one." },
    { n: "On the back step, through the kitchen window, Shinjiro was sitting with his coat on in the rain under the little overhang, not smoking, looking at nothing. Akihiko looked at him through the glass for a long moment, and then down at her wrist, and then didn't say whatever he'd been going to say." },
    { choose: [
      { t: "I promise. If you promise too.", stat: { courage: 1 }, then: [
        { s: 'akihiko', f: 'neutral', t: "...Deal." },
        { n: "He said it fast, too fast, the way you say a thing you don't think you'll need. Then he tore the tape and pressed it down, and went out the back door with two cups of tea, and sat on the step beside Shinjiro in the rain, and neither of them said anything for a long time." }
      ] },
      { t: "(Go and sit with Ken.)", stat: { kindness: 1 }, then: [
        { n: "She sat on the other end of the sofa. Ken didn't look at her. After a while he said, to his bag, that it was raining like the last time, and she asked the last time what, and he said nothing, sorry, nothing, and opened his math workbook to a page and didn't turn it all afternoon. Koromaru came and lay across both their feet and stayed there." }
      ] }
    ] },
    { ifCrush: { shinjiro: 'dating' }, then: [
      { n: "Before they left, Shinjiro stopped her in the front hall and fixed the collar of her jacket, which didn't need fixing, one side and then the other, slowly, with the same care he gave a knot on a bag of rice, and didn't say anything at all, and went out ahead of her into the rain." }
    ], else: [
      { ifCrush: { akihiko: ['noticed', 'crush', 'puppy', 'almost'], shinjiro: ['noticed', 'crush', 'puppy', 'almost'] }, then: [
        { n: "When she went out to the back step to call them in, Shinjiro looked up at her, and then at Akihiko beside him, and said, to her, quietly, *look after him tonight*. Akihiko said *I heard that*. Shinjiro said *good*, and got up, and held the door for both of them." }
      ] }
    ] }
  ] },

  { id: 'lw-pre-hanged', date: '11/3', slot: 'early', consumes: true, title: 'the last one', place: 'Iwatodai Dorm · Front', time: 'Early Morning', bg: 'iwotodaidorm-outside', scene: [
    { music: 'badfeeling' },
    { n: "Culture Day. Flags on the shops, and a cold clean morning, and Akihiko on the front steps at six with his running shoes on and not running, sitting with his elbows on his knees looking down the road toward the station, as if he were waiting for something to come up it." },
    { s: 'akihiko', f: 'neutral', t: "Mitsuru says it's the last one. The twelfth. After tonight, it's supposed to be over." },
    { s: 'akihiko', f: 'serious', t: "I don't believe her. I don't think she believes her." },
    { n: "Inside, behind them, the house was waking up loud. Hanni and Yunjin arguing about rice. Hyein's hairdryer. Jihoon at the gate already, in a hoodie, early, with his name not yet on the whiteboard, shouting good morning up at the building as if it owed him one." },
    { s: 'akihiko', f: 'neutral', t: "There's more of you to look after now. Here. In the house. I keep counting." },
    { choose: [
      { t: "Then count me in. I'm not going anywhere tonight.", stat: { courage: 1 }, then: [
        { s: 'akihiko', f: 'neutral', t: "...Tonight." },
        { n: "He heard the word she'd put in front of it. He didn't comment on it. He stood up, and held out his hand, and pulled her up off the step, and said *run with me, then, one lap*, and they ran one lap of the block in the cold, side by side, and came back to a house full of people who'd already started breakfast without them." }
      ] },
      { t: "(Sit down next to him. Count with him.)", stat: { kindness: 1 }, then: [
        { n: "She sat down. They counted the house out loud, under their breath, every name, every door, and it took a long time, and when they got to the end he said *fourteen*, and she said *fifteen*, and he looked at her, and she said *you*, and he didn't say anything for a while after that." }
      ] }
    ] }
  ] },

  { id: 'lw-pre-train', date: '12/2', slot: 'lunch', consumes: true, title: 'supposed to be over', place: 'Gekkoukan High · Rooftop', time: 'Lunch', bg: 'rooftop-day', scene: [
    { music: 'badfeeling' },
    { n: "Twelve Shadows, twelve full moons, and the last one gone in November. It was supposed to be over. The moon would be full again tonight anyway, and everybody in S.E.E.S. knew it, and nobody had said so at breakfast, which was how Solar knew they were all thinking it." },
    { n: "Fuuka found her on the roof with her laptop clutched to her chest and her face very pale in the white winter light." },
    { s: 'fuuka', f: 'sad', t: "There's nothing on the readings. No Shadow. No big signal. That's what scares me. There's always something. Tonight there's... a hole. Where the something should be." },
    { n: "Akihiko came up the stairs behind her two at a time and stopped when he saw Fuuka's face, and then came and stood on Solar's other side without asking anything, the way he'd been standing, lately, wherever she was." },
    { s: 'akihiko', f: 'neutral', t: "Then we go in and look at the hole. Together. Nobody goes anywhere alone tonight. Not one step." },
    { choose: [
      { t: "Not one step. I heard you.", stat: { courage: 1 }, then: [
        { n: "Fuuka let out a breath. Akihiko didn't. He was looking at the sky over the bay, where nothing was, yet, and he kept looking at it, and his hand found the back of Solar's coat, between her shoulder blades, and stayed there, very lightly, as if to know where she was without having to look." }
      ] },
      { t: "Fuuka. You'll hear it before anyone. That's enough.", stat: { kindness: 1 }, then: [
        { s: 'fuuka', f: 'neutral', t: "...Okay. Okay. I'll listen as hard as I can. I'll listen for you first." },
        { n: "She hugged the laptop tighter and nodded, and some of the color came back into her face, and Akihiko looked at Solar over Fuuka's head the way he looked at her when she'd called a fight right." }
      ] }
    ] }
  ] },

  { id: 'lw-pre-last-train', date: '3/6', slot: 'early', consumes: true, flag: 'year-goes-on', title: 'saturday', place: 'Iwatodai Dorm · Dining Room', time: 'Early Morning', bg: 'iwatodaidorm-diningroom', scene: [
    { music: 'tender' },
    { n: "Everyone came down for breakfast. Everyone. Nobody had said to. S.E.E.S. and the girls and Yunjin and the boy from the top floor, and by seven the visitors from the guesthouse were knocking, and taking their shoes off in the hall, and nobody looked at the whiteboard or the clock, and Mitsuru, for the first time all year, didn't either." },
    { n: "It was too many people for the table. They ate anyway, elbow to elbow, passing things down the line, loud and then suddenly quiet and then loud again, the way a family eats on a day nobody wants to talk about." },
    { n: "Akihiko sat beside her. He didn't run that morning. He put his egg in her bowl without looking, the way he always did, and kept his knee against hers under the table the whole meal, and didn't move it." },
    { s: 'akihiko', f: 'neutral', t: "Tonight. Whatever it is. I'm right behind you. The whole way. That's not me deciding anything for you. That's just where I'll be standing." },
    { choose: [
      { t: "I know. I'll know where to look.", then: [
        { n: "He nodded, once. Across the table somebody started a story, and somebody else said that wasn't how it happened, and the whole household laughed, at once, all of them, and she would remember that laugh longer than anything else about the day." }
      ] },
      { t: "(Lean your shoulder into his. Eat your breakfast.)", then: [
        { n: "She leaned. He took the weight like it was nothing, like it was the easiest thing in the world, and they ate breakfast like that, at a table too small for everyone they loved, on the last ordinary morning, and it was ordinary, and it was enough." }
      ] }
    ] }
  ] }
);
