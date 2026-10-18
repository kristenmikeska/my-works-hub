/* Akihiko Sanada · XVII The Star. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'akihiko', name: 'Akihiko Sanada', short: 'Akihiko', arcana: 'Star', numeral: 'XVII', from: 'Persona 3',
  kind: 'sees',
  romance: 'canon',
  starts: '4/20',
  home: { area: 'Gekkoukan High', spot: 'Boxing Club', slot: 'after', days: [1, 2, 3, 4, 5, 6],
          hint: 'After school, Monday to Saturday, at the boxing club.' },
  approach: "Akihiko is on the bench by the boxing club ring with his ribs taped under his shirt, glaring at a heavy bag he isn't allowed to touch, and he sits up straighter when he sees you in the doorway.",
  cast: { kondo: 'Kondo' },
  invite: {
    ask: ["you free? i need someone to time me", "river. 20 min. i'll go easy on you. probably", "hagakure? i'm buying. i need protein and a witness", "found a new drill. you're going to hate it. come", "the bag's not talking back. you busy?", "the first-years are scared of me. come be less scary at them"],
    ok: ["good. bring water", "knew you'd say yes", "meet you out front. don't stretch without me"],
    no: ["next time then. i'm holding you to it", "fine. i'll do your reps for you", "ok. five tomorrow? your call"]
  },
  hangouts: [
    [
      { n: "Akihiko had cleared out a shelf of the boxing club's ancient fridge, which had previously held somebody's forgotten bento from what Solar suspected was the previous school year, and lined it with protein shakes in four colors, like a man setting out a tasting menu at a restaurant nobody would ever want to go to." },
      { s: 'akihiko', f: 'happy', t: "Blind test. You tell me which one's best. I've been arguing with myself about it for a week." },
      { n: "She drank from each one with her eyes shut, because he insisted on the eyes shut, and he watched her face the whole time with the total, unblinking concentration he usually saved for the heavy bag." },
      { choose: [
        { t: "The pink one. It tastes like a strawberry somebody described over the phone.", notes: 3, then: [
          { s: 'akihiko', f: 'happy', t: "Ha! That's mine too. I knew it." },
          { n: "He said it like they had passed a test together, which, she supposed, they had." }
        ] },
        { t: "They all taste like chalk.", notes: 2, then: [
          { s: 'akihiko', f: 'serious', t: "They're supposed to. The chalk is the protein." },
          { n: "That was not, she was almost certain, how protein worked." }
        ] },
        { t: "(Point at the green one to see what happens.)", notes: 1, then: [
          { s: 'akihiko', f: 'surprised', t: "The green one? Really?" },
          { s: 'akihiko', f: 'neutral', t: "...Okay. I respect it. I don't understand it, but I respect it." }
        ] }
      ] },
      { n: "He wrote the result on a strip of white tape and stuck it to the fridge door, PINK, SOLAR AGREES, in blunt square capitals, and it stayed there for weeks, curling at the corners, going gray at the edges from everybody's thumbs. It was the first place her name had been written down here by somebody who wasn't a teacher. She didn't tell him that. It was a fridge." }
    ],
    [
      { n: "It was raining at five, the kind of rain that was barely more than the air being damp on purpose, and Akihiko ran in it like it wasn't there and Solar ran in it like it was personally inconvenient, which it was." },
      { n: "Somewhere around the second bridge he caught her doing it, her eyes going lamppost to bench to lamppost, her lips moving a little, the way they did when she didn't know they were." },
      { s: 'akihiko', f: 'neutral', t: "What are you counting?" },
      { s: 'solar', f: 'neutral', t: "Benches. Fourteen so far." },
      { s: 'akihiko', f: 'happy', t: "Okay. Sprint the next three benches. Walk one. Go." },
      { choose: [
        { t: "(Sprint.)", notes: 3, then: [
          { n: "She sprinted, and he sprinted beside her, and at the third bench he yelled walk like a man calling time on a round, and they walked, gasping, in the rain, and then he said go again. It was the strangest interval training she had ever done, and she suspected it was the only kind that would ever have worked on her." }
        ] },
        { t: "You're turning my thing into your thing.", notes: 2, then: [
          { s: 'akihiko', f: 'happy', t: "Yeah. It's a good thing." },
          { n: "She sprinted anyway, mostly so he wouldn't see her face." }
        ] },
        { t: "Can I just count them?", notes: 1, then: [
          { s: 'akihiko', f: 'neutral', t: "Sure. You count, I'll sprint." },
          { n: "He did, by himself, three benches out and three back, and jogged up to her soaked and grinning, and she counted him too." }
        ] }
      ] },
      { n: "By the time they got back to the dorm the rain had stopped and the sky over the bay had gone the color of the inside of a shell, and the count was forty-one benches, and he asked her for the number at the front door like it mattered, so she gave it to him." }
    ]
  ],
  ranks: [
    { after: '4/20', title: '1: stopwatch', place: 'Gekkoukan High · Boxing Club', time: 'After School', scene: [
      { n: "It had rained all morning, the fine gray spring rain that didn't so much fall as hang around, and by the time school let out it had given up and left everything smelling of wet concrete and cherry blossoms that people had stepped on. The boxing club was at the back of the grounds past the pool, a long low room with high windows and a floor that creaked, and it smelled like tape and rubber mats and the specific sourness of other people's effort." },
      { n: "Akihiko was on the bench by the ring with his shirt buttoned all the way up over his taped ribs, which he hated, and his hands flat on his knees, which he hated more, watching two first-years work the heavy bag with the face of a dog watching somebody else eat its dinner." },
      { n: "Eleven days since the roof. The doctor had said three weeks. Mitsuru had said three weeks in a voice that made it four. The five o'clock runs had turned into five o'clock walks, him striding along the river very upright and very carefully like a man carrying a full glass of water, her running loops ahead and doubling back, and every time she came back to him he asked for her time, and every time she didn't know it, and it was clearly killing him." },
      { s: 'akihiko', f: 'happy', t: "You came." },
      { register: 'akihiko' },
      { s: 'akihiko', f: 'neutral', t: "Sit. Or don't sit. Watch these two and tell me what's wrong with them." },
      { s: 'kondo', t: "Senpai, we can hear you." },
      { s: 'akihiko', f: 'neutral', t: "Good. Elbows." },
      { n: "Solar sat at the other end of the bench, because there was a bench and that was what you did with benches, and watched. The bag jumped and swung on its chain. The first-years were sweating through their shirts and trying very hard to look like they weren't being watched by a girl, and failing, which did nothing for their elbows." },
      { choose: [
        { t: "The tall one drops his hands after he hits.", notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: "...Yeah. He does." },
          { n: "He looked at her sideways, quick, the way he'd looked at the ash on the tiles that first night, like two pieces of a puzzle had gone click somewhere he couldn't see." },
          { s: 'akihiko', f: 'happy', t: "Kondo. Hands. She saw it from the bench." }
        ] },
        { t: "They look fine to me.", notes: 1, then: [
          { s: 'akihiko', f: 'serious', t: "They look fine to everybody. That's the problem with fine." }
        ] },
        { t: "(Watch Akihiko watching them instead.)", notes: 2, then: [
          { n: "He was leaning forward without knowing it, his shoulders rolling a little with every punch he wasn't allowed to throw, his jaw going tight on the hits that landed wrong. She thought, not for the first time, that he was the least still person she had ever met, and then remembered that she hadn't met very many people, as far as she knew, which took some of the shine off it." }
        ] }
      ] },
      { s: 'akihiko', f: 'serious', t: "I can't hit anything. I can't run. I can't spar. I can't even hold the mitts, because apparently holding the mitts is \"using your torso.\"" },
      { s: 'akihiko', f: 'neutral', t: "But nobody said anything about this." },
      { n: "He took a wooden ruler out of his bag, a school ruler, thirty centimeters, with somebody's initials gouged into the end, and held it up by the top between his finger and thumb, dangling, the way a magician holds up a card he wants you to remember." },
      { s: 'akihiko', f: 'happy', t: "Reaction test. I drop it, you catch it. Where your fingers land is your score. Lower's better." },
      { s: 'akihiko', f: 'neutral', t: "Club record's six centimeters. It's mine." },
      { choose: [
        { t: "(Hold out your hand.)", notes: 3, then: [
          { n: "She held her thumb and finger open at the bottom of the ruler. He let go without warning, which she had expected, and her hand closed before she'd decided anything, the same way it had closed around a cold grip on a cold floor two weeks ago. Four centimeters." },
          { s: 'akihiko', f: 'surprised', t: "...Four." },
          { s: 'akihiko', f: 'serious', t: "Again." }
        ] },
        { t: "What happens if I beat it?", notes: 2, then: [
          { s: 'akihiko', f: 'happy', t: "Then I'll finally have something to do for the next ten days." },
          { n: "He dropped it mid-sentence, which she suspected was the point of talking, and she caught it at four." }
        ] },
        { t: "Isn't this for children?", notes: 1, then: [
          { s: 'akihiko', f: 'neutral', t: "Everything's for children if you do it wrong." },
          { n: "She caught it anyway, at four centimeters, mostly to make a point, and the point made itself a good deal louder than she'd meant it to." }
        ] }
      ] },
      { n: "He made her go five times. She didn't go above four once. He made the first-years go, and they went at nine and eleven, and one of them missed it entirely and it clattered on the floor, and then Akihiko held the ruler out to her, top first, and put his own hand underneath, and she understood that the senpai with the cracked ribs and the club record was asking to be tested by the transfer student, in front of his juniors, with total seriousness." },
      { n: "She dropped it. He caught it at five and a half. He looked at his own fingers like they had betrayed him personally." },
      { s: 'akihiko', f: 'serious', t: "Best of seven." },
      { s: 'kondo', t: "Senpai, you said best of three when it was us—" },
      { s: 'akihiko', f: 'serious', t: "Bag, Kondo." },
      { n: "Later, when the first-years had gone and the light through the high windows had gone long and orange across the mats, he sat with the ruler across his knees and turned it over, end to end, end to end." },
      { s: 'akihiko', f: 'neutral', t: "You catch things like you're expecting somebody to drop them on you." },
      { n: "It wasn't a question. She noticed that he had been careful to make it not a question, and that he had left a space after it anyway, about the size of an answer, in case she wanted to put one there." },
      { choose: [
        { t: "I don't know where I learned it.", notes: 3, then: [
          { s: 'akihiko', f: 'neutral', t: "Okay." },
          { n: "That was all. Okay. Not where do you think, not maybe if you try, not any of the things people said when they wanted the answer more than you did. He just nodded, like she'd read him her time on a lap, and filed it somewhere behind his eyes, and moved on. She sat with that for longer than she sat with anything else that day." }
        ] },
        { t: "Maybe I was a goalkeeper.", notes: 2, then: [
          { s: 'akihiko', f: 'happy', t: "Ha. Maybe." },
          { s: 'akihiko', f: 'neutral', t: "We'll find out." },
          { n: "He said it the way he'd said it on the stairs about running, like finding out was a thing you could just go and do at five in the morning, and she almost believed him." }
        ] },
        { t: "Do you always ask this many questions?", notes: 1, then: [
          { s: 'akihiko', f: 'surprised', t: "That wasn't a question." },
          { s: 'akihiko', f: 'neutral', t: "...But okay. I'll stop." },
          { n: "He did stop. She hadn't expected him to, and the quiet he left behind was somehow worse than the question would have been." }
        ] }
      ] },
      { s: 'akihiko', f: 'neutral', t: "Doctor says ten more days. Then I'm running again. Properly." },
      { s: 'akihiko', f: 'happy', t: "Until then you run for me. I'll walk. You tell me your times." },
      { s: 'solar', f: 'neutral', t: "I don't have a watch." },
      { n: "He dug around in his bag and came up with a stopwatch, an old silver one on a frayed red cord, the kind of thing a club inherits rather than buys, and put it in her hand and closed her fingers over it with his, briefly, the way you'd close someone's hand around their change." },
      { s: 'akihiko', f: 'neutral', t: "Now you do." },
      { n: "It was warm from his bag. It clicked when she pressed it, a small clean sound, like something starting. She put it in her blazer pocket and did not think about the fact that it was the first thing anyone here had given her that wasn't something to wear or sleep in or fight with." },
      { n: "It was a stopwatch. She was being ridiculous." }
    ] },

    { after: '4/30', title: '2: personal best', place: 'Iwatodai · Riverside', time: 'After School', scene: [
      { n: "The doctor said yes on Thursday morning. Mitsuru said yes to running and no to everything else, slowly, in two separate sentences, so there would be no confusion about which was which. Akihiko heard yes." },
      { n: "Golden Week had started the day before with a holiday nobody at the dorm had done anything with, and the riverside after school was full of the slack-shouldered ease of people with more days off coming, old men on benches, a little kid wobbling along on training wheels, a couple sharing a can of something on the steps. The wind came off the water warm for the first time that year and smelled like cut grass and, underneath, a little like the sea." },
      { n: "Akihiko was stretching against the railing in a gray hoodie with the sleeves shoved up, bouncing on his toes, and he had the look of a man who had been let out of a very small room." },
      { s: 'akihiko', f: 'happy', t: "Bridge and back. Four kilometers. No pacing, no walking, nobody's carrying a glass of water." },
      { s: 'akihiko', f: 'neutral', t: "You've got the stopwatch?" },
      { n: "She had the stopwatch. She'd had it every morning for ten days, around her neck on its frayed red cord, and every morning she had come back to him on the path and read him her splits, and he had nodded at each one like it was a stock price, and she had gotten, against every instinct she had, faster." },
      { s: 'akihiko', f: 'serious', t: "You might beat me today. You know that, right? I've been off three weeks." },
      { s: 'akihiko', f: 'happy', t: "I'm not going to let you." },
      { choose: [
        { t: "Then don't.", notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: "...Ha." },
          { n: "Something came on behind his face all at once, the way stadium lights come on, row by row and then everything, and she realized she had said the one thing in the only language he really spoke." }
        ] },
        { t: "I'll go easy on you.", notes: 2, then: [
          { s: 'akihiko', f: 'serious', t: "Don't you dare." },
          { n: "He looked genuinely wounded, like she'd offered to cut his food up for him." }
        ] },
        { t: "Can we just jog?", notes: 1, then: [
          { s: 'akihiko', f: 'neutral', t: "We can. You can." },
          { s: 'akihiko', f: 'happy', t: "I'm not going to." }
        ] }
      ] },
      { n: "She pressed the button. They went." },
      { n: "The first kilometer was his. He went out too fast, the way she'd known he would, three weeks of stored-up stillness coming out of him all at once, and she let him have it and held her pace and counted the lampposts, which she would have done anyway. The second kilometer was closer. Around the bridge she could hear him breathing, and it was the first time she had ever heard him breathe at all." },
      { n: "On the way back, with the bridge behind them and the water throwing the late sun up into her eyes, she drew level with him, and he looked across at her, and she looked back, and neither of them said anything because there wasn't the air for it, and for the length of one lamppost she wasn't anybody in particular. She was just fast." },
      { choose: [
        { t: "(Go. Everything you have.)", notes: 3, then: [
          { n: "She went. Her legs filed a complaint and she overruled it. She lost by a step, maybe less, a stride and a breath, and it was the best she had felt in twenty-four days." },
          { s: 'akihiko', f: 'surprised', t: "...That was close." },
          { s: 'akihiko', f: 'happy', t: "That was really close!" },
          { n: "He said it like it was the best news he'd had all month, which, from a man who had just very nearly been beaten by the person he was teaching, it apparently was." }
        ] },
        { t: "(Stay exactly level with him.)", notes: 2, then: [
          { n: "She matched him, step for step, all the way to the lamppost they'd started at, and they crossed it together, and he laughed with no breath left to laugh with." },
          { s: 'akihiko', f: 'happy', t: "Tie. I'm calling that a tie. Rematch tomorrow." }
        ] },
        { t: "(Ease off and let him have it.)", notes: 1, then: [
          { n: "She eased off. It was a small thing, barely half a step, the kind of politeness her body seemed to know how to do without asking her. He finished ahead and turned around already frowning." },
          { s: 'akihiko', f: 'serious', t: "You let up." },
          { s: 'akihiko', f: 'neutral', t: "Don't do that. Not for me. I'd rather lose." }
        ] }
      ] },
      { n: "They sat on the river steps afterward with their legs out in front of them like two things somebody had dropped. He produced a protein shake from his bag, warm, because it had been in his bag, and drank half of it and held out the rest without asking if she wanted it, and she took it without saying whether she did, and it tasted like chalk that had heard about vanilla once." },
      { s: 'akihiko', f: 'neutral', t: "Okay. Twenty-four days. What do you know so far?" },
      { s: 'solar', f: 'surprised', t: "About what?" },
      { s: 'akihiko', f: 'neutral', t: "About you. Not before. Just here. What have you figured out?" },
      { n: "Nobody had asked her that way. People asked what she remembered, gently, like it was a cut they wanted a look at. Nobody asked what she'd figured out, like she was a case that was still open and she was the one working it." },
      { choose: [
        { t: "The window seat on the monorail. Consommé chips. Running, apparently.", notes: 3, then: [
          { s: 'akihiko', f: 'happy', t: "That's three. Four, if the chips count separately." }
        ] },
        { t: "I run. Apparently.", notes: 2, then: [
          { s: 'akihiko', f: 'happy', t: "You run. That's one." }
        ] },
        { t: "Not much.", notes: 1, then: [
          { s: 'akihiko', f: 'neutral', t: "Not much isn't nothing. They're different." }
        ] }
      ] },
      { s: 'akihiko', f: 'neutral', t: "Keep a list. That's what I'd do." },
      { s: 'akihiko', f: 'neutral', t: "Where I grew up you didn't have much that was just yours. Lots of kids. One bathroom. So you kept track. This is mine, this is mine. Even if it was only a thing you liked." },
      { n: "He said it to the river, lightly, the way you'd mention the weather in a town you used to live in, and he didn't look at her while he said it, and she understood that it had cost him something anyway and that she wasn't supposed to notice. She didn't ask where he'd grown up. He hadn't asked her either." },
      { s: 'akihiko', f: 'happy', t: "Shinji used to keep his list under the mattress. He'd eat my—" },
      { n: "He stopped. Not for long. Just a small catch, the kind of hitch a runner takes over a crack in the pavement, and then he was going again." },
      { s: 'akihiko', f: 'neutral', t: "Old friend. He's around. He's... around." },
      { n: "She didn't push. It seemed like the least she could do, given that he never had, and she had the odd feeling, sitting on those warm steps with the shake going warmer in her hands, that they had just made some sort of trade without either of them saying what for." },
      { s: 'akihiko', f: 'neutral', t: "Five tomorrow?" },
      { n: "It was a question. She noticed that too. He could have said it the way he said everything else, like the sun was coming up and so was he, and instead there was a small rise at the end of it, a door left open." },
      { s: 'solar', f: 'happy', t: "Five." },
      { n: "On the walk back he matched her pace without saying so, which on legs like his must have felt like walking through water, and she put it on the list. She didn't decide what it was a list of." }
    ] },

    { after: '5/11', title: '3: the brake', place: 'Gekkoukan High · Boxing Club', time: 'After School', scene: [
      { n: "Two days after the monorail it was still raining, the warm sideways rain of May that came in off the bay and found its way under every umbrella in Iwatodai, and the boxing club's high windows were fogged so thick the whole room felt like the inside of a jar somebody had breathed into." },
      { n: "Akihiko was hitting the heavy bag. He'd been cleared for that too, finally, that morning, which was two days too late to have gotten him on the train, and he was hitting it with the grim, dedicated energy of a man making up for lost time with interest." },
      { s: 'akihiko', f: 'neutral', t: "Hey. Hold the bag?" },
      { n: "She held the bag. It hit her through the leather every time he hit it, a dull thud that went up her arms and into her back teeth, and he talked between combinations in short bursts, the way he breathed." },
      { s: 'akihiko', f: 'serious', t: "Mitsuru said you didn't hesitate. On the train." },
      { s: 'akihiko', f: 'serious', t: "Front car. The brake. She said you just went." },
      { n: "Jab, jab, the bag swinging into her shoulder. She had gone. She remembered the front car rattling and the green city going past much too fast and the lights of the other train coming up out of the dark ahead of them, and Junpei yelling, and Yukari not yelling, which was worse, and her own hand on a lever she didn't know the name of, and the noise after." },
      { n: "It hadn't felt like not hesitating. It had felt like standing a long way back from her own body and watching it do something sensible." },
      { choose: [
        { t: "I hesitated. Nobody saw it.", notes: 3, then: [
          { n: "He stopped hitting. The bag swung back between them on its chain and he caught it with one glove and held it still." },
          { s: 'akihiko', f: 'neutral', t: "...Yeah?" },
          { s: 'akihiko', f: 'serious', t: "I think that's the whole job. Doing it anyway where nobody can see." }
        ] },
        { t: "Somebody had to pull it.", notes: 2, then: [
          { s: 'akihiko', f: 'happy', t: "Ha. Yeah. Somebody did." },
          { s: 'akihiko', f: 'serious', t: "I'd have liked it to be me." }
        ] },
        { t: "You'd have done it faster.", notes: 1, then: [
          { s: 'akihiko', f: 'serious', t: "Maybe. Doesn't matter. I wasn't there." },
          { n: "He hit the bag hard enough that it pushed her back half a step." }
        ] }
      ] },
      { s: 'akihiko', f: 'serious', t: "I sat in the station with Mitsuru and listened to the whole thing on the radio. I could hear you calling it." },
      { s: 'akihiko', f: 'neutral', t: "I'm not going to lie to you. When she made you leader, I wanted it. I'm a third-year. I've been going in there for a year." },
      { s: 'akihiko', f: 'happy', t: "But you called it right. Every time. So." },
      { n: "So. He left it there like a glove on a bench and went back to the bag, and the matter was apparently closed, which was the most gracious thing she had ever seen anybody do with their pride, and he'd done it in under ten seconds without once looking at her." },
      { s: 'solar', f: 'neutral', t: "It's strange. I can decide for four people in the dark. Last week I stood in a drugstore for twenty minutes and couldn't pick a shampoo." },
      { s: 'akihiko', f: 'neutral', t: "That's different. On the train, people need you to. Shampoo's just you." },
      { s: 'akihiko', f: 'serious', t: "...You're allowed to take twenty minutes on the shampoo. Nobody's dying." },
      { n: "She laughed, short and surprised, and it came up out of her the way his did, like he'd reached in and found it there, and the bag creaked on its chain between them." },
      { n: "When he was done he worked the gloves off with his teeth and, without looking, without warning, tossed a water bottle at her from across the room, the way he did, the way he'd been doing every morning on the river for five weeks." },
      { n: "She caught it without looking either. One hand, at her shoulder, before she'd turned her head. It landed in her palm like it had been on its way there for a long time." },
      { s: 'akihiko', f: 'surprised', t: "How'd you know that was coming?" },
      { s: 'solar', f: 'neutral', t: "You always do that." },
      { n: "It came out easy and certain, the way you'd say the sky was up, and he grinned, pleased, like she'd caught him at something, and she should have been pleased too." },
      { n: "Except that it hadn't felt like five weeks. For one second, with the cold bottle in her hand and the rain running down the high windows, it had felt like years, like being thrown things across a room by someone who knew she would catch them was one of the oldest facts she owned, older than the tiles, and she couldn't have told you where it was kept." },
      { n: "Five weeks, she told herself. Five weeks of five a.m. was a long time. That was all it was." },
      { n: "She drank half the water and threw the bottle back, harder than she meant to, and he caught it against his chest with a small oof and looked delighted about it." },
      { s: 'akihiko', f: 'neutral', t: "I'm going to the strip after this. There's a guy I keep trying to drag back to the dorm. He keeps saying no." },
      { s: 'akihiko', f: 'neutral', t: "Shinji. I mentioned him." },
      { choose: [
        { t: "Maybe he'll say yes eventually.", notes: 3, then: [
          { s: 'akihiko', f: 'serious', t: "He will. I'm more stubborn than he is." },
          { s: 'akihiko', f: 'sad', t: "...I used to be, anyway." }
        ] },
        { t: "(Don't ask about him.)", notes: 2, then: [
          { n: "She didn't ask. He looked at her a second longer than the not-asking needed, like he'd noticed it, like he was adding it to something he kept somewhere." },
          { s: 'akihiko', f: 'neutral', t: "Thanks." }
        ] },
        { t: "Do you want company?", notes: 1, then: [
          { s: 'akihiko', f: 'neutral', t: "...Not this time. He'd hate it. He'd hate it less than he'd say, but." },
          { s: 'akihiko', f: 'happy', t: "Thanks, though." }
        ] }
      ] },
      { n: "He walked her as far as the shoe lockers, which was further than either of them was going, and then stood under the overhang shrugging his bag up onto his shoulder and looking out at the rain like it was an opponent he respected." },
      { s: 'akihiko', f: 'happy', t: "Five tomorrow. If it's still raining, we run anyway." },
      { s: 'akihiko', f: 'neutral', t: "...If you want." },
      { n: "He'd added it afterward, like a tag on a gift, and she had the feeling he'd had to remember to. She kept it anyway. She put it on the list." }
    ] },

    { todo: 'Rank 4 (see plot doc §5 and §9).' },
    { todo: 'Rank 5 (see plot doc §5 and §9).' },
    { todo: 'Rank 6 (see plot doc §5 and §9).' },
    { todo: 'Rank 7 (see plot doc §5 and §9).' },
    { todo: 'Rank 8 (see plot doc §5 and §9).' },
    { todo: 'Rank 9 (see plot doc §5 and §9).' },
    { todo: 'Rank 10 (see plot doc §5 and §9).' }
  ]
});
