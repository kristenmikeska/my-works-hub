/* The endings (3/7, the last minutes of the last Dark Hour; 1/31 until the year ran to March, 2026-10-21). Revamp story data (femc-game.html).
   One event, 'end-ending', branching on the flags the solstice (12/21) and the finale (3/6) set:
     route-bad → the last stop (the bad ending already played at the solstice; this is its coda)
     route-true + true-final → I am thou        route-R → where it begins       route-S → low tide
     route-H → the unfated life (the secret road) route-stay (or no route at all) → here
   Variants come from Christmas Eve (xmas-<id>) and, for Stay, the solstice (stay-akihiko / stay-shinjiro).
   Each ending closes on an "ENDING · …" card. Home endings are undated and plot-free: she wakes, and nobody says what
   happens next. Time did pass back home while she was gone (since the epilogue plan, 2026-10-27: about ten days, covered by
   a story); the epilogue (epilogue.js) picks up from here. */
(() => {
  const lastHour = [
    { music: 'mystery' },
    { n: "They went up at eleven. All of S.E.E.S., the last time, to the top of everything. Nobody would ever talk about it afterward, not really, not the climb or the top or what was waiting there or what it cost. It was this world's story, and it ended the way this world's story had always been going to end, and Solar was there for all of it, and it wasn't hers to tell." },
    { n: "What she would remember was after. Coming down. The tower behind them. The last few minutes of the last Dark Hour, green and still and enormous, the whole city holding its breath one final time, and the dorm, when they got back to it, standing in the green with every window dark and the front door open." },
    { dark: true }
  ];
  const card = t => ({ n: 'ENDING · ' + t });

  const runners = [
    ...lastHour,
    { n: "There was a door at the end of the second-floor hallway that had never been there. Ordinary. Painted. With a line of light under it, white and cold, and a smell coming through the gap that she knew with her whole body. Snow. Old brick. Sugar cookie." },
    { n: "Hanni and Hyein were waiting by it, in their coats, holding hands. Minji, with her camera. Jaehyun, a step back, watching the hallway the way he watched everything, and when she came up the stairs he moved, without a word, so that he was between her and nothing at all, and for the first time she let him." },
    // The searchers who can be missed (the epilogue's batch 1, 2026-10-27): whoever crossed is at the door too.
    { ifFlag: 'arrived-danielle', then: [{ n: "Danielle, behind them, with her camera on its strap and the lens cap on." }] },
    { ifFlag: ['arrived-jaemin', 'arrived-chenle'], then: [{ n: "Jaemin and Chenle, who'd come late and stayed loud, for once not saying a word." }] },
    { ifFlag: 'arrived-mark', then: [{ n: "And Mark, last, by the window, not asking to stand any nearer than that." }] },
    { n: "S.E.E.S. came up the stairs behind her. She turned round on the top step and looked at them. All of them. In the green. Yukari with her arms crossed so tight it hurt. Junpei crying and pretending it was the hour. Mitsuru, very straight. Ken. Koromaru. Fuuka, smiling, her eyes wet. Aigis, at exactly one arm's length. Akihiko, at the bottom of the stairs, not coming up, his hands in his pockets, letting her go the way he'd promised, by not asking." },
    { n: "She went down three steps and hugged every one of them. It took a long time. The hour waited." },
    // Honest and torn (the crush batch, 2026-10-23): she was with him here, and it was real.
    { ifCrush: { akihiko: 'dating' }, then: [
      { n: "Akihiko was last, because he'd made sure of it, standing a step back so everybody else could go first, the way he'd stood at the back of every line all year. She held onto him in the green until her arms hurt. It had been real. All of it, the river at five and the gloves and the roof, every morning of it, and she wasn't going to let the place she was going make it smaller than it was, not even in her own head. It was real love, in this world. It just wasn't the only world she was." },
      { s: 'akihiko', f: 'sad-2', t: "...Go home. I mean it. I knew the whole time. I'd rather you go knowing I knew." }
    ] },
    { n: "Then she went through." },
    { dark: false },
    { music: 'tender' },
    { music: 'world-runners' },
    { cg: 'ending-runners-home' },
    { n: "It was snowing. That was the first thing. Snow on the sill of a narrow window, and pink curtains, and a single bed in a single room on the second floor, and through the wall a hairdryer going, loud, and Hyein's voice over it, swearing at it. A bell tower out the window, white with frost. A quad nobody had walked on yet. Morning. She couldn't have said which one. It didn't seem to matter." },
    { n: "On the desk, her phone was lighting up. The girls' chat. Forty messages since she'd closed her eyes, and not one of them asked where she'd been. *SNOW DAY.* *shes home. shes ASLEEP. nobody text her* *u literally just texted her* *hanni is making pancakes.* *ok the trip story is: joint retreat w sigma. invite only. no signal. memorize it.* And under the girls, one from Doyoung, no greeting at all: *regionals saturday. you good?*" },
    { ifFlag: 'xmas-haechan', then: [
      { n: "She went out into the hallway in her socks. It went on too long. It always had. And at the end of it, by the stairs, where he couldn't possibly be, where it made no sense at all for him to be at eight in the morning in a sorority house, there he was, leaning on the wall with his hands in his pockets and his headphones round his neck, not looking at her, looking at the snow through the window at the top of the stairs." },
      { n: "He'd come in a different way, over there. She didn't ask how. He didn't say." },
      { n: "At the bottom of a bag she hadn't unpacked since the trip, under everything, there was a jacket that wasn't hers and fit her better. And in her head, all the way to the end, there was a song, and she knew now how it finished. She'd always known. She'd just been waiting for somebody to play her the last bars. There was something low in the middle of it, too, that she still couldn't name, and she could see it on him from the end of the hall, the way you could see weather on a window: he owed her something, and he was going to pay it." },
      { n: "He looked at her. Flat. Then not." },
      { s: 'haechan', f: 'happy', t: "...Morning, princess." }
    ] },
    { ifFlag: 'xmas-minji', then: [
      { n: "Later, in the afternoon, when the snow had stopped and the light had gone long and gold, she walked across the quad to the honors dorm without deciding to. There was a lamppost outside it. It flickered. It had always flickered. Minji was under it with her camera already rolling, cap on frontwards, and when she saw Solar coming she didn't ask. She'd asked twenty times. She'd asked a thousand." },
      { n: "Solar stopped under the lamp. It held steady. And for once, for the first time in any of her lives, she didn't look past the lens, or through it, or away. She looked straight into it, and let it look back, and smiled. Not the practiced one. Hers." }
    ] },
    { ifFlag: 'xmas-haechan', else: [{ ifFlag: 'xmas-minji', else: [
      { n: "Her door banged open. Hanni and Hyein, in pajamas and coats, Hyein holding an iced coffee in the middle of a snowstorm, both of them talking at once, a hundred questions, did you just wake up too, do you remember, why are you looking at us like that, why are you CRYING, Sol, what happened, are you okay, are you fine, don't say you're fine." },
      { n: "She had no intention of answering a single one of them. She took the coffee. She said she was fine. Hyein screamed. Hanni laughed. It was the best morning of her life." }
    ] }] },
    { cg: null },
    { n: "Somewhere very far away, in a dormitory by a bay, there was a room at the end of the girls' hall with the bed made up and a uniform hanging in the wardrobe, pressed, in her size, and nobody had the heart to take the name plate off the door, because there had never been a name on it." },
    { n: "Somewhere further still, a house by the sea, and a gym full of plastic chairs, went on missing her. She would never know it. That was the price, and it was paid quietly, the way the biggest ones are." },
    { n: "And something in her was quieter than it should have been. She noticed it, sometimes, in the mornings, in the mirror, putting her hair up. She knew exactly how to be who they needed now. She could do it perfectly. She did." },
    card('where it begins')
  ];

  const strangers = [
    ...lastHour,
    { n: "There was a door in the dorm kitchen that had never been there. Old. Wooden. With a line of gray light under it, and through the gap, cold, salt, diesel, and the smell of barley tea." },
    { n: "Yunjin was waiting by it, in the red puffer, bouncing on her toes. Haechan and Jungwon stood at either side of the door, a careful distance apart, not looking at each other, the way two men stand outside a room where someone they'd both die for is about to wake up." },
    { n: "S.E.E.S. came into the kitchen behind her. She turned round and looked at them. All of them. In the green, around the table where they'd eaten all year. She hugged every one of them. Akihiko last, at the door to the hallway, who didn't ask, who never asked, who held on for exactly as long as she did and not one second longer, because he'd promised." },
    // Honest and torn (the crush batch, 2026-10-23): she was with him here, and it was real.
    { ifCrush: { akihiko: 'dating' }, then: [
      { n: "She'd loved him. She would go on having loved him, in a house by the sea, on mornings when the tide was out and the gulls were loud, and it would never once feel like a mistake, because it hadn't been one. He'd been real love in a world that was going to let her go. That was all. That was everything." }
    ] },
    { n: "Then she went through." },
    { dark: false },
    { music: 'tender' },
    { music: 'world-strangers' },
    { cg: 'ending-strangers-home' },
    { n: "Low tide. She knew before she opened her eyes. She could feel the sea gone out under the house, the whole bay pulled back to the horizon, the mud shining under the last of the sodium lights, the way she'd always felt it on the nights she couldn't sleep. Her room. Her ceiling. The gray Yonsei sweatshirt on the chair. The jade ring on her right hand, where it had always been." },
    { n: "It was nearly dawn. She went down in her socks, past the onggi jars, to the front steps, with her hair down, and the sky over the harbor was going the color of the inside of a shell, and the lanterns over the gate were still lit, red, and somewhere in the kitchen behind her, Mrs. Bang was making barley tea, and on the back step two fish went round in their bucket under a skin of new ice. Everything was where she'd left it. In this house that never happened by itself. Somebody had kept it that way, on purpose, for days." },
    { ifFlag: 'xmas-haechan', then: [
      { n: "Haechan was on the annex step at the bottom of the garden, the steel door open behind him and the old silver radio on the sill. He had a battered Discman in his hands, the one with the cracked lid, the same old disc still inside it and the batteries dead for years, and he had the earbuds in anyway." },
      { n: "He took them out when she came down the garden." },
      { s: 'solar', f: 'sad', t: "I hate you." },
      { s: 'haechan', f: 'neutral', t: "I know, agasshi." },
      { n: "He looked at her. Hair down. Barefoot. Back. And then his face stopped performing entirely, all of it, the way it only ever did when nobody else could see, and he didn't say anything at all. He didn't have to. He'd already spent her name once, in a hall, in front of everyone, and never asked for it back. So she said his." },
      { s: 'solar', f: 'sad', t: "...Donghyuck-ah." }
    ] },
    { ifFlag: 'xmas-jungwon', then: [
      { n: "Jungwon was at the gate. In the cold, in a dark coat, his hands at his sides, as if he'd been standing there all night, which, she suspected, he had. His watch was running. She could hear it, in the dawn quiet, ticking." },
      { n: "He bowed. Formal. Correct. In the register he always used with her, polite to the point of danger, and he asked, very courteously, whether she had slept." },
      { n: "Then he said one word. In the register he had only ever used with her a handful of times, and never once at a gate, in daylight, where anyone could hear. She would keep it. She would never tell anyone what it was." }
    ] },
    { ifFlag: 'xmas-haechan', else: [{ ifFlag: 'xmas-jungwon', else: [
      { n: "Yunjin was asleep on her bedroom floor when she went back up. Curled up on the rug in a nest of blankets, in borrowed rabbit socks with ears, snoring, as if she'd come in from the room next door in the night and simply refused to leave. And out of the window, down on the road, a car idling, engine running, lights off. A man at the wheel with his hands at ten and two, waiting. He'd always waited." },
      { n: "She got back into bed. She didn't sleep. It was low tide. But for the first time in her life she didn't mind." }
    ] }] },
    { cg: null },
    { n: "Downstairs, a door opened. The study. Somebody had been sitting up in the dark. She heard his slippers on the stairs, slow, and the creak of the seventh stair, and her father's voice, humming something old and flat, the way only fathers hum, coming up to see if she was home, the way, she understood, he had come up every night she hadn't been." },
    { n: "The calendar in the kitchen had moved on without her. Somebody had turned it, every morning she'd been gone, and told the house whatever the house needed to hear, and the house had agreed. Her father had covered for her. She didn't know yet with what. She'd come home to the countdown, shorter than she'd left it. She'd come home to all of it. Somewhere very far away, a pink hallway and a gym full of plastic chairs went on missing her, and a dormitory by a bay kept a room made up, and she would never know." },
    { n: "She knew exactly how to be the daughter this house needed. Hair up. The right smile. She could still do it perfectly. She left her hair down, and went to meet him on the stairs." },
    card('low tide')
  ];

  // The secret road (Kat's ruling 2026-10-21): "the unfated life". Hoax is the one world without Haechan; Solar picks a
  // life nobody arranged for her. Bittersweet, not tragic. He let her go on 12/22 (a6-unfated) and on the platform (3/6,
  // where he gave her the last can); Jungwon is the bridge, the one person who exists both in the life arranged for her
  // (strangers) and in the one she ran into on purpose. The CG and the Christmas variants are unchanged.
  const hoax = [
    ...lastHour,
    { n: "There was a door in the lounge that had never been there, between the television and the stairs, and behind it, through the gap, music. A gym. Hundreds of voices. A dog barking, somewhere further off, at nothing, delighted." },
    { n: "It wasn't pulling. That was the first thing she noticed, and she noticed it with her whole body, the way you notice a sound only once it stops. All year every door had pulled at her like a tide. This one just stood there, a little ajar, with a gym on the other side of it, and waited to see what she'd do." },
    { n: "Jihoon was waiting by it, with Cherry, who had her arm through his and was pretending she didn't. The crew, all four of them, arguing about who went first. The council, all six, around a paper bag of Sunoo's. And Jungwon, a little apart, very straight, his watch running again." },
    { n: "He was the only one of them who had stood in the other place too. She knew that now. In a house by the sea somebody had arranged him for her, at a dinner, over a white porcelain bottle, on a date that was still on a calendar in a kitchen. Here, she'd run against him in front of the whole school and lost, and he'd picked her anyway. Same boy. One of him had been arranged for her, and hadn't stayed an arrangement. The other one she'd walked into on purpose, swearing the whole way." },
    { s: 'jungwon', f: 'neutral', t: "I'd rather be the one you ran against." },
    { n: "He said it very politely, to the door, which she knew by now meant he'd been holding it in for a month. Then, because he was him, he checked his watch, and corrected himself, and said a month and nine days." },
    { n: "S.E.E.S. stood around the lounge in the green, where they'd stood a hundred times. She hugged every one of them. Akihiko last. He didn't ask. He just held on, and let go, exactly when she did." },
    { n: "In her coat pocket, cold against her hip, there was a can. Pink and black, a logo like claw marks, the last one in any world that wasn't his. She didn't take it out. She knew exactly where it was." },
    { n: "Then she went through." },
    { dark: false },
    { music: 'joy' },
    { music: 'world-hoax' },
    { cg: 'ending-hoax-home' },
    { n: "Hanlim. The gym, after hours, half-decorated for something the council had voted on and nobody had finished, blue and silver balloons on every surface, string lights, and on a table by the wall the old ballot box from the election, empty now, with the bake-sale cash tin inside it, the one from the Friday her idea had worked, where somebody had decided it would be safest. Everyone still in the building far too late, the lights on in every window. She was standing in the middle of it in a uniform with an armband on it that nobody here would ever understand, and nobody noticed, because Cherry had already crossed the gym at a dead run and thrown both arms around her neck." },
    { s: 'cherry', f: 'happy', t: "THERE you are. Took you long enough. I've been back like ten minutes and I already hate it here. You look like shit. I love you. Your left wing is lower than your right." },
    { n: "Behind them the door let the rest out in a heap: the crew, still arguing, and Jihoon, and the whole council, Sunoo already crying, Heeseung already on the phone to the advisor, saying *retreat* very firmly, over and over, the way you'd say a password you weren't sure still worked." },
    { n: "Her phone was going off in her pocket. A group chat she'd been in her whole life. Somebody had renamed it in the time she'd been gone. It was now called something so stupid she laughed out loud in the middle of the gym, and wouldn't tell anyone why. At home, Nana would be barking at the door. She could feel it." },
    { n: "Nobody had arranged any of it. Not the gym, not the balloons, not the girl hanging off her neck calling her a dumb bitch with love. Her parents had wanted a candidate and she'd given them one and then, somewhere along the way, without asking anybody, she'd started to want it back. That was the difference. She could feel it under her feet like a floor." },
    { ifFlag: 'xmas-jungwon', then: [
      { n: "Later, after hours, she found him in the council room. Of course she did. Lamplight, the long table, a stack of folders squared to the edge, and the cash tin out of the ballot box open in front of him, every note faced the same way, because he was counting it. Twice. A president and a vice president, and one croissant, on a plate between them, with red icing." },
      { n: "He didn't ask where she'd been. He didn't ask her anything. He lost count, which he had never once done in his life, and started again, and split the croissant in half, exactly, and gave her the larger one, and they sat in the council room and ate it, and she let him finish the count before she kissed his cheek, because she knew him, and he'd have started over. Then she said *Won*, and he lost count again, and didn't start over at all." }
    ] },
    { ifFlag: 'xmas-jihoon', then: [
      { n: "Later, they ended up at the arcade, because they always ended up at the arcade. The crane game. The claw slipping again. Jihoon feeding it coins anyway, complaining the whole time. She reached over his hand and pushed the button, and the claw closed, and held on, the whole way, and a stupid plush dog with Nana's face dropped into the chute." },
      { n: "He gave it to her. He didn't make a joke. Then he made several, very loudly, to cover the fact that he hadn't." },
      { n: "Her phone buzzed against the glass. A boy she'd been dating since a bake sale, asking, in full sentences with full stops, whether she'd eaten. Jihoon saw the name. He looked at the dog in her arms, and at the claw swinging empty over the prizes, and said nothing at all, which from him was the loudest thing there was. Somewhere, in some other year, it had gone the other way. Not in this one." }
    ] },
    { ifFlag: 'xmas-jungwon', else: [{ ifFlag: 'xmas-jihoon', else: [
      { n: "At two in the morning, in her bed, with Nana asleep on her feet, the chat was still going. Cherry, insulting her lovingly, at length, with feeling. Asahi saying something bitter. Jihoon saying he was the light of her disgusting life. And Junkyu, at the bottom, in capital letters, asking if she needed some ice cream and hugs." },
      { n: "She typed back. In capital letters, with a keysmash in the middle, the way her thumbs had always wanted to." }
    ] }] },
    { cg: null },
    { n: "Nothing was decided that night. Not on the screen, not about her. There was a boy counting money in a council room who was hers, and had been since a bake sale, and was the one person in the building who knew where she'd been, and a boy at an arcade who would be feeding a machine coins for her for the rest of his life, and a whole year before this one that she still hadn't told the first boy about. None of it was arranged. All of it was hers to do something about. Somewhere very far away a pink hallway and a house by the sea went on missing her, and a dormitory by a bay kept a room made up with a uniform in her size, and she would never know." },
    { n: "And somewhere, in two places at once, a boy on a roof and a boy on a dryer listened to a song that ended now, and didn't go on past it, and didn't mind. He'd said it was allowed. He'd said it out loud so it would count." },
    { n: "She knew how to be the girl on the poster. The smile. The speech. She could do it perfectly, and some mornings she did. But at the back of her closet, behind the blazer, there was a can nobody in this world had ever seen, and she never opened it, and she never threw it away, and she never once had to explain to anyone why she'd chosen the life she was standing in. It was hers. Nobody had written it. That was the whole of it." },
    card('the unfated life')
  ];

  const stay = [
    ...lastHour,
    { n: "There were no doors. They had all gone through on the platform the night before, one by one, every person who had come for her, and she had stood at every door and watched them go, and now there was only the dorm, green and still, and the people in it." },
    { n: "Her phone buzzed in her pocket. In the hour, where phones didn't work. She took it out. One message. From a thread with two names at the top that her thumb knew." },
    { phone: [{ from: 'hyein', t: "drink water. ttyl" }], contact: 'hanni, hyein' },
    { n: "Then the screen went dark, and when she pressed the button, the thread was gone. Not deleted. Gone. As if the line had finally been cut, gently, from the other end, by somebody who didn't want her to have to." },
    { n: "She went down to the kitchen in the green and drank a glass of water at the sink. Because somebody had told her to. Because it was the last instruction she'd ever get from a girl who loved her and was gone." },
    { dark: false },
    { music: 'ending' },
    { ifFlag: 'stay-shinjiro', then: [], else: [{ ifFlag: 'xmas-shinjiro', then: [], else: [{ cg: 'ending-stay' }] }] },
    { ifFlag: 'stay-shinjiro', then: [{ flag: { 'ending-shinjiro': true } }] },
    { ifFlag: 'xmas-shinjiro', then: [{ flag: { 'ending-shinjiro': true } }] },
    { ifFlag: 'ending-shinjiro', then: [
      { ifFlag: 'shinji-awake', then: [
        { n: "She went to the hospital at dawn. Visiting hours didn't start until ten. The nurse on duty looked at her face and let her in anyway, and said he was up, he was always up by now, he said the ward was too quiet to sleep in, which was a lie, and they both knew it." },
        { n: "Tatsumi Memorial at sunrise. The light coming in through the blinds in long gold bars across the bed. He'd been awake a week, or near enough, and he was propped up against the pillows with the beanie on, crooked, because she'd put it there two days ago and he hadn't let anybody take it off, and he watched her come in the slow way he watched everything now, a beat behind, like a man watching a road from a moving car." },
        { n: "She sat in the chair and took his hand, the way she had at Christmas, and talked to him. About the top of the tower. About the platform. About the doors closing, one by one. She told him everyone had gone home but her. She told him she'd chosen. She told him she'd decided that was his fault too." },
        { n: "He didn't say anything for a long time. He looked at the window, at the bay going from gray to gold, with his jaw set, the way he looked at a pot he didn't trust." },
        { s: 'shinjiro', f: 'neutral', t: "...Tch." },
        { s: 'shinjiro', f: 'sad', t: "...Stupid. ...Staying for a guy who can't... hold a spoon." },
        { s: 'solar', f: 'neutral', t: "I didn't stay for you." },
        { s: 'shinjiro', f: 'neutral', t: "...Good." },
        { n: "Then his fingers closed around hers, slowly, all the way, as hard as the bad hand could manage, which wasn't very hard, which was everything. Not the way a sleeping hand moves. The way a hand holds on when it knows exactly what it's holding, and has decided, against all its better judgment, to keep it." },
        { s: 'shinjiro', f: 'happy', t: "...You eat yet?" },
        { n: "She hadn't. She didn't call the nurse. She sat in the gold light with her hand in his and the sun coming up over the bay and let it be just this, for one more minute, before the rest of the world came in with breakfast." }
      ], else: [
        { n: "She went to the hospital at dawn. Visiting hours didn't start until ten. The nurse on duty looked at her face and let her in anyway." },
        { n: "Tatsumi Memorial at sunrise. The light coming in through the blinds in long gold bars across the bed. The machines breathing. She sat in the chair and took his hand, the way she had at Christmas, and talked to him. About the top of the tower. About the platform. About the doors closing, one by one. She told him everyone had gone home but her. She told him she'd chosen. She told him she'd decided that was his fault too." },
        { n: "Under her hand, his fingers moved. Not once. And then again. And then they closed, slowly, around hers, the way a hand closes around something it's been reaching for in its sleep for a very long time." },
        { n: "She didn't call the nurse. Not yet. She sat in the gold light with her hand in his and the sun coming up over the bay and let it be just this, for one more minute, before the rest of the world came in." }
      ] }
    ], else: [
      { n: "Dawn on the dorm roof. All of them, because nobody could sleep, and somebody had to watch the sun come up on the first morning after the end of everything. Junpei with a plate of the worst breakfast anyone had ever cooked, which everybody ate. Yukari with her arms crossed against the cold, leaning on Fuuka. Mitsuru, at the railing, asking very politely if there were seconds, which made Junpei cry. Ken. Aigis, at exactly one arm's length. Koromaru, on Solar's feet." },
      { ifFlag: 'stay-akihiko', then: [{ flag: { 'ending-akihiko': true } }] },
      { ifFlag: 'xmas-akihiko', then: [{ flag: { 'ending-akihiko': true } }] },
      { ifFlag: 'ending-akihiko', then: [
        { n: "And Akihiko, on the bench by the railing, in his coat, with a bandage on his eyebrow from the top of the tower, his hands loose between his knees. She sat down beside him. She leaned her head on his shoulder, and he put his arm around her, carefully, the way you'd move around a bird that had landed on you, and they watched the sun come up over the bay." },
        { n: "He hadn't asked. He'd never asked. He'd stood on a roof the night before the solstice and refused to be one more person deciding for her, and she'd decided, and here she was." },
        { s: 'solar', f: 'neutral', t: "I'm staying." },
        { n: "He was quiet for a long moment. The sun came up. Then, only then, only after she had, he said it." },
        { s: 'akihiko', f: 'blushing', t: "...Stay." },
        // The crush batch (2026-10-23): the pull, and what she did with it.
        { ifCrushed: { haechan: 'crush' }, then: [
          { n: "Last night, on the platform, a boy with headphones round his neck had stood at a door and not asked her either. In every world she had ever been, he found her, and she'd found him in this one too, and let him go home, and she knew, the way she knew which stair creaked, that in the next one he'd find her again. That was his. This was hers. A roof, and a bench, and a boy who'd waited for her to say it first. It wasn't the consolation. It was her life, and she'd chosen it with her eyes open." }
        ] }
      ], else: [
        { n: "She sat on the bench by the railing with Koromaru's chin on her knee and watched the sun come up over the bay, the first morning she'd ever chosen, and it was very ordinary, and it was hers." }
      ] }
    ] },
    { cg: null },
    { n: "Three worlds lost her for good that morning. A pink hallway. A house by the sea. A gym full of plastic chairs. Somewhere, a father sat up in the dark and polished his glasses, slowly, and a girl texted a number that would never connect again, and a boy on a dryer hummed a song all the way to the end for nobody. She would never know. She would always know." },
    { n: "In the mirror, in the mornings, putting her hair up, or leaving it down, she was a girl with one name and no other. Her Persona came when she called, veiled, steady, the three charms on her sash dark and still, keepsakes on a shelf. Nobody ever filled in the box on her enrollment form. She never asked them to." },
    { n: "She was here. That was the whole of it. It was enough." },
    card('here')
  ];

  const trueEnding = [
    ...lastHour,
    { n: "Three doors at the end of the second-floor hallway, side by side, where there had only ever been a wall. A pink one with light under it that smelled of snow. An old wooden one that smelled of salt and barley tea. A front door with a dog barking behind it at nothing, delighted. None of them would open alone. Elizabeth had said so." },
    { n: "Every one of them was there. Every searcher who'd crossed for her, crowded into the hallway in their coats, Hyein crying already, Jihoon pretending not to, Yunjin holding Minji's hand without either of them having noticed, Jaehyun at the back watching the doors, Cherry at the front, Jungwon and Haechan standing a careful distance apart and, for once, not minding the distance." },
    { n: "And S.E.E.S. On the stairs. All of them. In the green." },
    { n: "She went down to them first. She hugged every one of them, the whole long line, Junpei and Yukari and Mitsuru and Fuuka and Ken and Aigis and Koromaru, and every one of them held on, and every one of them let go." },
    { n: "Akihiko was last. At the bottom of the stairs. He didn't ask. He'd never asked. He looked at her for a long time in the green, the way he'd looked at her on a floor in a tower in April, like two pieces of something had clicked together behind his eyes, and she knew, somehow, that he knew what was going to happen to him. To all of them. To this year. That it would close behind her like water. That they'd wake up tomorrow and not remember the hour, or the tower, or her." },
    { s: 'akihiko', f: 'sad-2', t: "...Go on. Before I do something stupid like ask." },
    // Honest and torn (the crush batch, 2026-10-23): she was with him here, and it was real.
    { ifCrush: { akihiko: 'dating' }, then: [
      { n: "She'd loved him. Here, in this one, for real, all the way through, and she wanted him to have that even if he wasn't going to be allowed to keep it. She told him so, in four words, in his ear, in the green. He nodded against her hair like a man taking a count, and didn't let go until she did." }
    ] },
    { n: "She put something in his hand. She didn't decide to. A scrap of pink ribbon, untied from a ticket that had finally, at the very end, taken ink. He closed his glove around it without looking." },
    { n: "Then she went up the stairs and stood in front of the three doors, and put out both hands, and the hand inside her chest, small and frightened and hers, reached out too." },
    { n: "All three charms rang. The chord. And all three doors opened at once." },
    { dark: false },
    { music: 'hopeful' },
    { cg: 'ending-true' },
    { n: "She woke up." },
    { n: "Three ceilings, in one waking. Snow on a sill, and a hairdryer through a wall. A ship's horn, long and low, and the tide coming in under a house by the sea. A dog barking at nothing in a quiet street, delighted, and a phone going off on a nightstand with forty messages in capital letters." },
    { n: "She knew which was which. She was in all of them. She didn't have to choose. She'd never had to choose. She'd only had to stop being afraid of being all of it at once." },
    { cg: null },
    { n: "In a pink hallway, two girls burst through her door and stopped dead, because she was laughing, in bed, with her hair down, for no reason at all. In a house by the sea, her father came up the stairs in his slippers, humming, and found her on the step with the barley tea already made, and his face broke, and he didn't look away. In a quiet street, a boy on her doorstep held up a tub of ice cream at seven in the morning, and she opened the door before he'd knocked." },
    { n: "In all three mirrors, in all three mornings, she didn't put her hair up. Not yet. She looked at her face for a long time. Softer. More tired. Frightened, a little, all the way through. Hers." },
    { n: "She could look at it now. A sun you could look at." },
    { music: 'ending' },
    { n: "Somewhere very far away, a year closed like water." },
    { n: "In a dormitory by a bay, a group of students woke up on the eighth of March with the strange, heavy feeling of having forgotten something enormous, and couldn't say what, and went to school. A room at the end of the girls' hall stood empty, with no name on the door, and nobody could remember why it had been made up. A dog sat on the front steps of a shrine every morning for a while, waiting for someone, and then, gently, stopped." },
    { n: "And every morning, on his run, Akihiko Sanada slowed down when he passed a certain bench at the far end of Iwatodai Station. The last one, under the timetable. He never knew why. He'd stop, and look at it, and stand there with his breath going up white, feeling like he'd left something there, or someone had." },
    { n: "In the lining of his left glove there was a small scrap of pink ribbon. He didn't know where it had come from. He never took it out." },
    card('I am thou')
  ];

  const badCoda = [
    { music: 'night' },
    { n: "There was no March. Not for her." },
    { n: "Somewhere, a train that never had to arrive went on around and around a line with no end, a hand's width above rails that weren't there, under a moon that didn't move. In the middle window of the lead car, two girls with the same face sat with their heads together, asleep, peaceful, the way the kept were peaceful. Neither of them had to be anybody. Neither of them had to choose." },
    { n: "In a dormitory by a bay, in three houses in three worlds, people stood at the tops of their stairs and waited, and waited, and the hour never ended, so they never stopped." },
    card('the last stop')
  ];

  (window.FEMC_GAME_EVENTS ||= []).push(
    { id: 'end-ending', date: '3/7', slot: 'late', title: 'the last minutes', place: 'Iwatodai Dorm · Lounge', time: 'The Dark Hour', scene: [
      { ifFlag: 'route-bad', then: badCoda, else: [
        { ifFlag: 'true-final', then: trueEnding, else: [
          { ifFlag: 'route-R', then: runners, else: [
            { ifFlag: 'route-S', then: strangers, else: [
              { ifFlag: 'route-H', then: hoax, else: stay }
            ] }
          ] }
        ] }
      ] }
    ] }
  );
})();
