/* Akihiko Sanada · XVII The Star. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'akihiko', name: 'Akihiko Sanada', short: 'Akihiko', arcana: 'Star', numeral: 'XVII', from: 'Persona 3',
  kind: 'sees',
  romance: 'canon',
  starts: '4/20',
  home: { area: 'Gekkoukan High', spot: 'Boxing Club', slot: 'after', days: [1, 2, 3, 4, 5, 6],
          hint: 'After school, Monday to Saturday, at the boxing club.' },
  // School's shut on the breaks, so he's at the dorm in the evenings (rank 6 is a summer-break roof scene on 8/10).
  summerHome: { area: 'dorm', spot: 'Rooftop', slot: 'evening', days: [0, 1, 2, 3, 4, 5, 6],
                hint: 'Summer evenings, on the dorm roof, when the heat finally lets go of the concrete.' },
  winterHome: { area: 'dorm', spot: 'Lounge', slot: 'evening', days: [0, 1, 2, 3, 4, 5, 6],
                hint: 'Winter break evenings, in the dorm lounge, with the heater and a protein shake.' },
  approach: "Akihiko is on the bench by the boxing club ring with his ribs taped under his shirt, glaring at a heavy bag he isn't allowed to touch, and he sits up straighter when he sees you in the doorway.",
  cast: { kondo: 'Kondo', fanclub: 'Fan Club Girl' },
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
    ],
    [
      { place: 'Iwatodai Strip · Hagakure', time: 'Evening' },
      { n: "Hagakure at seven was steam and noise and the smell of pork bones that had been simmering since before either of them was born, and the counter was so narrow that their elbows touched whether they wanted them to or not, and the old man behind it set two bowls down in front of them with the solemn care of a priest setting something down on an altar." },
      { n: "Akihiko ate the way he ran, fast and with total commitment and occasional noises of approval. Solar ate the way she did most things here, carefully, watching how the person next to her did it first." },
      { n: "Sometime between the broth and her picking up her chopsticks, the soft-boiled egg from his bowl slid into hers. She didn't see him do it. She never saw him do it. It was just there, sitting on her noodles, halved and orange in the middle, like it had always been hers." },
      { s: 'akihiko', f: 'neutral', t: "Protein." },
      { choose: [
        { t: "(Eat it. Don't say anything.)", notes: 3, then: [
          { n: "She ate it. He went back to his bowl with the faint, private satisfaction of a man watching a plan go off without a hitch, and she pretended not to see that either." }
        ] },
        { t: "You need it more than I do.", notes: 2, then: [
          { s: 'akihiko', f: 'serious', t: "I've had eleven eggs today. I'm fine." },
          { s: 'solar', f: 'surprised', t: "Eleven?" },
          { s: 'akihiko', f: 'happy', t: "It's a good number." }
        ] },
        { t: "(Slide half of it back into his bowl.)", notes: 3, then: [
          { n: "She cut it in half with the side of her chopsticks and slid one half back. He looked down at it for a long second, longer than an egg deserved, with an expression she couldn't read and filed away to read later." },
          { s: 'akihiko', f: 'neutral', t: "...Okay. Half." }
        ] }
      ] },
      { n: "The old man refilled their water without being asked. The radio over the counter played a baseball game nobody was listening to. When they left, the cold or the heat or whatever the season was doing hit them in the doorway like a wall, and Akihiko said that was the best bowl yet, which he said every time, and every time he meant it." },
      { ifRoute: 'romance', then: [
        { n: "On the walk home he took her hand, the way he'd started to, without looking at her, like it was a thing his hand did now on its own and he had decided not to stop it." }
      ] }
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

    { after: '6/13', title: '4: hand wraps', place: 'Gekkoukan High · Boxing Club', time: 'After School', scene: [
      { n: "June had turned the boxing club into the inside of a mouth. The rainy season had come in properly that week, warm gray rain that never quite stopped and never quite committed, and somebody had propped the high windows open with old dictionaries, which let in the smell of wet asphalt and the sound of the gutters and absolutely no air." },
      { n: "Practice was over. The first-years had gone home with their towels over their heads. Akihiko was sitting cross-legged in the middle of the ring with a canvas bag open beside him and two rolls of hand wraps in his lap, one black, one a faded red that had probably been a brighter red in some other decade, and he was rolling the black one up tight between his palms with the absorbed, careful face of a man defusing something." },
      { n: "He didn't look up when she came in. He held up the red roll instead, over his shoulder, without turning around, the way he threw water bottles." },
      { s: 'akihiko', f: 'neutral', t: "Get in. Take your blazer off, it's a sauna." },
      { s: 'akihiko', f: 'neutral', t: "You hit like somebody taught you once and then forgot to tell you. I want to fix that before the next full moon." },
      { n: "It had been five days since the school. Since the dark halls and the gym and Fuuka on the floor of it, small and gray and furious at herself for being rescued, and since the walk home afterward through a city that should have been coffins and wasn't, a light on the shrine steps the shape of a fox, a woman in white helping somebody to their feet across the street, a boy under an awning who looked straight at them through the green rain and then didn't. Nobody had said much about it at breakfast. Akihiko had gone running twice the next morning." },
      { n: "She ducked under the ropes. The canvas gave a little under her socks, warm, like something that had been slept on." },
      { s: 'akihiko', f: 'neutral', t: "Hand." },
      { n: "She held out her right hand and he took it by the wrist and turned it palm down, businesslike, and hooked the loop of the wrap over her thumb, and started." },
      { cg: 'romance-akihiko-hand-wraps' },
      { n: "Three times around the wrist. He said it out loud, low, one, two, three, the way he counted reps, and his thumb kept the tension flat against the inside of her arm where the skin was thin. Then across the back of the hand. Then between the fingers, little finger first, each pass laid down over the last one so neatly that it looked printed. His hands were rough and very warm and did not hurry, and they were the only thing in the room that was moving." },
      { n: "She found she had stopped breathing at some point around the second finger and started again around the third, and she hoped very much that he had been too busy counting to notice either." },
      { choose: [
        { t: "(Count with him, under your breath.)", notes: 3, then: [
          { n: "Four, five, six. She didn't mean to. It came out of her the way it always did, a habit she'd found in herself sometime in April and never managed to put down. He heard it. His count went quiet so hers could be the one in the room, and he finished the last pass on her number, and smoothed the end down flat with his thumb." },
          { s: 'akihiko', f: 'happy', t: "Ha. You count everything." },
          { s: 'solar', f: 'neutral', t: "It helps." },
          { s: 'akihiko', f: 'neutral', t: "Yeah. I know." }
        ] },
        { t: "(Watch his hands, so you can do it yourself next time.)", notes: 2, then: [
          { n: "She watched. Over, under, across, back. It looked simple the way the things he did always looked simple, which was to say it looked like a trick somebody had practiced eleven thousand times in an empty room until it stopped looking like anything at all." }
        ] },
        { t: "Why are you really doing this?", notes: 2, then: [
          { s: 'akihiko', f: 'surprised', t: "I told you. Your hands." },
          { n: "He kept wrapping. He didn't look up." },
          { s: 'akihiko', f: 'serious', t: "...And I don't like not having anything to do with mine." }
        ] }
      ] },
      { cg: null },
      { s: 'akihiko', f: 'serious', t: "There are people out there now. In the hour. Fuuka can hear them, she says it's like a radio on in another room." },
      { s: 'akihiko', f: 'serious-3', t: "I keep thinking, somebody's going to find them first. Something. I want it to be us." },
      { n: "He said it to the knot he was tying, flat and certain, and she understood that he meant me, that he would have gone out every night of the week with his ribs still taped and a flashlight if Mitsuru had let him, and that he had already been out at least once without asking her." },
      { s: 'solar', f: 'neutral', t: "You found me first." },
      { s: 'akihiko', f: 'surprised', t: "...Yeah." },
      { n: "He sat back on his heels and looked at her, really looked, for long enough that the rain had time to change its mind about something in the gutter. Then he held out his hand for her left one." },
      { n: "She didn't give it to him. She took the other roll out of his lap instead and tried it herself, hooking the loop over her own thumb, three times around the wrist, which was fine, and then across the back of the hand, which was not fine at all. It went on crooked. It went on loose. It bunched over the knuckles and slid off the little finger and by the time she was trying to go between the fingers it looked less like a wrap and more like something a cat had been given and lost interest in." },
      { n: "It was terrible. It was the first thing in two months that her hands hadn't already known how to do before she asked them, and the relief of it went through her so suddenly and so completely that she laughed out loud in the empty gym, a short ugly bark that surprised them both." },
      { s: 'akihiko', f: 'surprised', t: "What?" },
      { s: 'solar', f: 'happy', t: "I'm bad at it." },
      { s: 'akihiko', f: 'neutral', t: "You're really bad at it." },
      { s: 'solar', f: 'happy', t: "I know. Isn't it great?" },
      { n: "He didn't understand, she could see him not understanding, but he grinned anyway because she was grinning, and then his hands came up to fix it, automatically, already reaching." },
      { choose: [
        { t: "Don't. Tell me how, but don't do it.", notes: 3, then: [
          { n: "His hands stopped in the air between them. For a second he looked like a man who had been told to stand still in the middle of a sprint, every part of him leaning one way and the rest of him refusing. Then he put them flat on his own knees, deliberately, like he was setting down something heavy." },
          { s: 'akihiko', f: 'neutral', t: "...Okay. Undo it. All of it. Start again." },
          { n: "He talked her through it, pass by pass, and twice she got it wrong and he said nothing at all and waited, and the third time she got it right, or right enough, crooked at the knuckle, and he looked at it like it was the best wrap he had ever seen in his life." }
        ] },
        { t: "(Let him fix it.)", notes: 1, then: [
          { n: "He unwound it and did it again in about nine seconds, flat and perfect, matching the right one exactly. She looked at her two hands side by side, identical, his work, and felt something small and familiar sink in her, the specific weight of being handled well. It was perfect. It wasn't hers." }
        ] },
        { t: "(Keep going, badly, on your own.)", notes: 2, then: [
          { n: "She kept going. He watched her get it wrong with the visible suffering of a man watching somebody parallel park, and to his enormous credit he only said elbow twice, and the second time he sat on his hands." }
        ] }
      ] },
      { n: "He held the mitts after that. He stood in front of her in the middle of the ring with his elbows soft and his feet set, and told her to hit, and she hit, and the sound came out apologetic, and he told her to hit like the mitt owed her money, and the sound came out less apologetic. The rain came down harder outside. Somebody's radio was playing in the pool building, faint, a song she almost knew and then didn't." },
      { s: 'akihiko', f: 'serious', t: "From your feet. You're throwing it with your arm. Your arm's the last thing." },
      { choose: [
        { t: "(Turn your hip into it and throw the whole thing.)", notes: 3, then: [
          { n: "It cracked. A real sound, flat and sharp, and the jolt went up through the wrap and her wrist and her shoulder and all the way down to her heels, and for a second she was nothing but the shape of that one punch." },
          { s: 'akihiko', f: 'happy', t: "There! That one. Remember that." }
        ] },
        { t: "(Throw it exactly the way he showed you.)", notes: 2, then: [
          { s: 'akihiko', f: 'neutral', t: "Good form. Now mean it." },
          { n: "She didn't know yet what she meant. She hit it again anyway." }
        ] },
        { t: "Do you ever stop?", notes: 1, then: [
          { s: 'akihiko', f: 'neutral', t: "I stopped for three weeks in April." },
          { s: 'akihiko', f: 'serious', t: "Hated it." }
        ] }
      ] },
      { n: "When she was done her shoulders were shaking and the wraps were soaked through, and he unwound them for her without asking, the left one first, the crooked one, slowly, like there was something in it worth keeping. He rolled it up and put it back in her hand." },
      { s: 'akihiko', f: 'neutral', t: "Keep that. You need your own." },
      { s: 'akihiko', f: 'neutral', t: "Summer tournament's in July. The eleventh. I've won the last two." },
      { s: 'akihiko', f: 'neutral', t: "You don't have to come." },
      { n: "He said you don't have to come in exactly the voice people use when they've thought about it a great deal and want you to come more than they want to want you to, and then he got very busy with the strap on his bag." },
      { choose: [
        { t: "Who's going to wrap your hands?", notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: "...I do my own hands." },
          { s: 'solar', f: 'neutral', t: "Not that day." },
          { n: "He opened his mouth and closed it and looked at the strap of his bag for a long time, and his ears did something she would think about later, in bed, when she should have been sleeping." }
        ] },
        { t: "I'll be there.", notes: 3, then: [
          { s: 'akihiko', f: 'happy', t: "...Yeah? Good. Okay. Good." },
          { n: "He said good three times. She counted." }
        ] },
        { t: "I'll think about it.", notes: 1, then: [
          { s: 'akihiko', f: 'neutral', t: "Sure. No pressure." },
          { n: "There was some pressure. It was all on his face." }
        ] }
      ] },
      { n: "She walked home in the rain with the wet roll in her blazer pocket next to the stopwatch, two red things on cords and loops, and she didn't put it on the list. The list was for things she'd figured out about herself. This was something else, and she didn't have a name for that kind of list yet." }
    ] },
    { after: '7/11', title: '5: the face', place: 'Gekkoukan High · Shoe Lockers', time: 'After School', scene: [
      { n: "He'd won. Of course he'd won. He had won the summer tournament the way the sun rose, early and without any apparent effort and to a great deal of noise, and the noise had mostly come from a block of girls in the third row of the bleachers with a bedsheet painted SANADA-SENPAI in pink letters that ran downhill at the end because whoever was painting had run out of sheet." },
      { n: "Solar had been in the second row, one seat in from the aisle, with her hands still smelling of tape. She hadn't cheered. She'd counted. Forty-one seconds into the final round the other boy's guard had dropped the way Kondo's used to, and she had seen it a half-beat before Akihiko did, and then Akihiko had seen it, and that had been the end of that, and the whole gym had come up out of its seats at once like a flock of birds off a wire." },
      { n: "She hadn't come up. The lights over the ring were the big sodium kind, hot and white and humming, and every time the crowd roared they seemed to get brighter, and somewhere around the second round she'd started to feel them on the back of her neck like a hand. Like being looked at by something with no face. She'd sat very still in the noise with her shoulders up, the way you sit in a dentist's chair, and waited for it to be over, and hadn't been able to say why." },
      { n: "That was three days ago, or a week, she wasn't keeping track. The bedsheet had not gone away. Neither had the girls." },
      { n: "There were four of them at the shoe lockers when she came down after class, a loose half circle of second-years with matching hair clips and the bright, hungry patience of a committee that has already voted." },
      { s: 'fanclub', t: "Excuse me? You're the transfer student. The third-year." },
      { s: 'fanclub', t: "We just wanted to ask. Because people are saying things. Are you dating Akihiko-senpai?" },
      { n: "Something in her went click, small and clean, like a light switch in another room. She felt her face arrange itself before she'd asked it to, her chin coming up a fraction and her mouth curving into a smile so warm and easy and well-made that she could feel the edges of it, the way you feel the seam of a dress, and she knew without knowing how she knew that she had worn this one a hundred times." },
      { choose: [
        { t: "(Smile, and give them exactly what they need to go away happy.)", notes: 3, then: [
          { s: 'solar', f: 'happy', t: "Oh, no, nothing like that. He's teaching me to run. You know what he's like, he can't watch anyone do anything slowly." },
          { s: 'solar', f: 'happy', t: "Honestly, I'm a project. Your banner was great, by the way. He saw it." },
          { s: 'fanclub', t: "He SAW it?" },
          { n: "They went away glowing, all four of them, holding the sentence he saw it between them like something warm they'd been handed through a window. It had taken eleven seconds. She stood at her shoe locker afterward feeling faintly sick and very competent, and couldn't have said which feeling was the stranger one." }
        ] },
        { t: "No. I'm not.", notes: 2, then: [
          { s: 'fanclub', t: "Oh. Okay. Sorry! Sorry. We just. Okay." },
          { n: "They didn't believe her, she could see that, and they went away whispering anyway, but the smile stayed on her face the whole time they did it, polite and pleasant and somebody else's, and she had to take it off afterward by hand." }
        ] },
        { t: "Ask him.", notes: 1, then: [
          { s: 'fanclub', t: "We could never!" },
          { n: "They retreated in a flurry of hair clips. The smile stayed on her face a beat too long after they'd gone, and she noticed it there the way you notice you've left a light on in an empty room." }
        ] }
      ] },
      { n: "When she turned around Akihiko was standing at the end of the row of lockers with his bag over one shoulder and a strip of tape still stuck to the back of his hand, and he had clearly been standing there for some time." },
      { place: 'Iwatodai · Riverside', time: 'Evening' },
      { n: "They walked the river without running, which was rare enough that she noticed it. The heat had finally broken a little. The water was the color of weak tea and full of the sky, and the cicadas had started up in the trees along the bank, a few at a time, testing the season, like an orchestra tuning." },
      { n: "He bought two drinks from the vending machine by the second bridge without asking her what she wanted, and one of them was a protein shake, strawberry, and he handed her the other one. Barley tea. She looked at it for a long second. He'd never once bought her something that wasn't protein." },
      { s: 'akihiko', f: 'neutral', t: "They're not bad kids. The club. They just get loud." },
      { s: 'akihiko', f: 'neutral', t: "I can tell them to leave you alone. If you want. They'd listen." },
      { n: "There it was again, the little tag at the end, if you want, hung on the sentence like a coat on a hook so she could take it or not. She'd started listening for it. She'd started to notice he was getting better at remembering it." },
      { choose: [
        { t: "Don't. I can handle them.", notes: 3, then: [
          { s: 'akihiko', f: 'neutral', t: "Okay." },
          { n: "Just okay. He didn't argue. He drank his shake and looked at the water and let her be someone who could handle it, and she found that she believed it more after he had." }
        ] },
        { t: "You could stop being so famous.", notes: 2, then: [
          { s: 'akihiko', f: 'happy', t: "Ha! I'm working on it. I keep winning, though. It's a problem." }
        ] },
        { t: "Would you? Tell them?", notes: 1, then: [
          { s: 'akihiko', f: 'serious', t: "Tomorrow morning." },
          { n: "He said it so fast and so readily that she felt something in her shoulders go tight, and she didn't know why, and she said never mind, and he said okay, and the okay sat between them for a while like something neither of them knew where to put." }
        ] }
      ] },
      { n: "They walked. A boy on a bicycle went by too close and rang his bell late. Somewhere on the far bank somebody was setting off a single firework, early and illegal, a small pop and a fizz of green that was gone before either of them could point at it." },
      { s: 'akihiko', f: 'neutral', t: "Can I say something weird?" },
      { s: 'solar', f: 'neutral', t: "You're going to anyway." },
      { s: 'akihiko', f: 'neutral', t: "That wasn't your face. At the lockers." },
      { n: "She stopped walking. She didn't decide to. Her feet just quit, there on the path, and he went two steps on before he noticed and came back." },
      { s: 'akihiko', f: 'serious', t: "It was a good face. It was a really good face. Everybody in that hallway bought it." },
      { s: 'akihiko', f: 'neutral', t: "It's just not the one you make at five in the morning when I tell you it's three more benches." },
      { n: "Her stomach turned over once, slowly, like a fish in deep water. She had the strange, swaying sense of someone who'd been walking down a long corridor full of mirrors for a very long time and had just seen, at the very end of it, a door." },
      { choose: [
        { t: "Which one do you like better?", notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: "..." },
          { n: "He went red. It started at his collar and went up all at once, like something being poured, and he looked at the river as though the river had asked." },
          { s: 'akihiko', f: 'blushing', t: "The bench one. Obviously. It's the only one that's ever told me to shut up." }
        ] },
        { t: "I didn't know I had another one.", notes: 3, then: [
          { s: 'akihiko', f: 'sad', t: "...Yeah. I figured." },
          { s: 'akihiko', f: 'neutral', t: "Put it on the list. You've got at least two faces. That's something you know now." },
          { n: "It was the first item on the list that frightened her. She put it on anyway." }
        ] },
        { t: "Everybody has a hallway face.", notes: 2, then: [
          { s: 'akihiko', f: 'neutral', t: "I don't." },
          { s: 'solar', f: 'neutral', t: "No. You really don't." },
          { n: "He took it as a compliment. It was one, mostly. It was also the most frightening thing about him, and she didn't tell him that part." }
        ] }
      ] },
      { n: "He walked her back to the dorm the long way, past the station, where the bench by the vending machines was empty and the platform lights were coming on one by one in the dusk, and he talked about the final round the whole way, every exchange, every combination, the drop of the other boy's guard, in the bright happy blow-by-blow of a man who'd had the best day of his summer and wanted to have it again out loud." },
      { s: 'akihiko', f: 'happy', t: "You saw it before I did. The guard. I saw you see it. You sat up." },
      { s: 'akihiko', f: 'neutral', t: "...You didn't like the lights, did you." },
      { n: "She hadn't told anyone that. She hadn't been sure there was anything to tell. She shook her head, and he nodded, once, like she'd given him a time on a lap, and didn't ask why." },
      { s: 'akihiko', f: 'neutral', t: "Next year I'll get you a seat in the back. Where it's dark." },
      { n: "Next year. He said it like it was a place on a map, a known distance, somewhere you could run to before breakfast. She didn't correct him. At the dorm door she gave him the bench face without trying to, and he saw it, and went red again, and went inside first." }
    ] },
    { after: '8/10', title: '6: miki', place: 'Iwatodai Dorm · Rooftop', time: 'Evening', music: 'tender', scene: [
      { n: "August had a way of refusing to end its days. The sun went down over the bay so slowly you could watch it doing it, and the heat stayed behind after it had gone, coming up off the roof of the dorm in waves you could feel through the soles of your shoes, and the whole of Iwatodai smelled like hot tar and mosquito coils and somebody's barbecue three streets over." },
      { n: "He had skipped the gym. He had skipped dinner, which in Akihiko was the kind of symptom that in other people would have meant a fever. Junpei had made curry from a box and burned the bottom of the pot and stood over it saying it's not burnt, it's well done, in a perfect impression that nobody laughed at because the man he was impersonating wasn't there to hear it." },
      { n: "He was on the roof. She knew before she'd climbed the last flight, because the door at the top was propped open with a dumbbell." },
      { n: "He was sitting with his back against the water tank and his forearms on his knees and his hands hanging, watching the sky over the bay like it was an opponent who had just done something he didn't understand. He didn't look round when the door creaked. He didn't tell her to go away, either, and she sat down a little way off on the warm concrete, close enough to be there, far enough that he could pretend she wasn't." },
      { s: 'akihiko', f: 'sad-2', t: "Shinji's back. In the dorm. He moved in on Friday." },
      { s: 'akihiko', f: 'neutral', t: "I've been trying to get him to come back for two years." },
      { n: "She knew. Everyone knew. Junpei had put it in the group chat with eleven exclamation points, and Mitsuru had replied with a single period, and somehow the period had said more. There was a beanie on the hook by the front door now. There was a second pair of boots by the shoe rack, bigger than everyone's, and the kitchen smelled of real food in the afternoons, onions and soy and something slow, and nobody would say who was cooking it." },
      { choose: [
        { t: "You don't look happy about it.", notes: 3, then: [
          { s: 'akihiko', f: 'sad-3', t: "...You see everything, don't you." },
          { s: 'akihiko', f: 'sad', t: "I should be. I got what I wanted. And he looks at me like he's already said goodbye and he's just waiting for me to catch up." }
        ] },
        { t: "That's good, isn't it?", notes: 1, then: [
          { s: 'akihiko', f: 'sad', t: "It should be. I've wanted it for two years. So why does it feel like I've lost something?" }
        ] },
        { t: "(Wait. He'll say it when he's ready.)", notes: 2, then: [
          { n: "She waited. The sun touched the water and the whole bay lit up at once, orange and gold and too bright to look at, and he looked at it anyway, and after a while, the way people do when you leave them enough quiet, he started to talk." }
        ] }
      ] },
      { s: 'akihiko', f: 'sad', t: "I told you there was someone I couldn't protect." },
      { s: 'akihiko', f: 'sad-2', t: "Her name was Miki. My little sister." },
      { n: "He said it plainly, the way you say a thing you've said to yourself so many times that the words have gone smooth, and never once out loud to anybody, so that the smoothness didn't help at all when it finally came out of your mouth." },
      { s: 'akihiko', f: 'sad-4', t: "We grew up in an orphanage. Me and Miki and Shinji. There was a fire. I was a kid." },
      { s: 'akihiko', f: 'sad-3', t: "I could hear her. I couldn't get to her. Shinji pulled me out. Practically carried me. I fought him the whole way." },
      { n: "The heat came up off the roof. Somewhere below them a door slammed and a TV went on, a game show, a crowd laughing at something. Solar sat very still. She felt it arrive in her body before it arrived anywhere else, a weight in the middle of her chest like a hand pressed flat against a door from the other side." },
      { s: 'akihiko', f: 'sad', t: "She used to steal my egg. At dinner. Every night. She thought I didn't notice." },
      { s: 'akihiko', f: 'sad-2', t: "I always noticed. I just let her." },
      { n: "Solar thought about Hagakure, and the way that every single time they had ended up at that counter after a run, sometime between the broth arriving and her picking up her chopsticks, the soft-boiled egg from his bowl had slid into hers without a word, and he had said protein when she'd looked at him, and she had believed him. She understood, all at once and for the rest of her life, that it had never once been about protein." },
      { choose: [
        { t: "(Stay. Move a little closer, so your shoulders almost touch.)", notes: 3, then: [
          { n: "She moved. Not much. Enough that their shoulders were almost touching, the warmth of him coming off his arm like the warmth off the roof, and she stayed there and didn't say anything, and that seemed to be the right answer." },
          { s: 'akihiko', f: 'sad-4', t: "Thanks. For not telling me it wasn't my fault. Everybody always tells me that." }
        ] },
        { t: "It wasn't your fault.", notes: 1, then: [
          { s: 'akihiko', f: 'sad', t: "I know. I know that. I just don't believe it yet." }
        ] },
        { t: "I don't even know who I'd be grieving.", notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: "..." },
          { n: "It came out of her before she'd looked at it, and once it was out she could see the whole shape of it, and it was enormous. A mother. A father. A friend she'd told everything. Some face she'd loved and couldn't see. She didn't know if any of them were real. She didn't know whether there was anybody she'd lost or only a long white blank where the losing should have been, and she didn't know which of those was worse." },
          { s: 'akihiko', f: 'sad-2', t: "Then somebody's grieving you." },
          { n: "He said it before he'd thought about it, the way he threw bottles, and then she watched it land on his own face, and watched him want to take it back." },
          { s: 'akihiko', f: 'sad-3', t: "Sorry. That was, I didn't mean," },
          { s: 'solar', f: 'sad', t: "No. It's probably true." },
          { n: "They sat with that. Two people who knew exactly how heavy the thing was from opposite ends of it, him with everything he remembered and her with nothing, and for once neither of them had to pretend it weighed less than it did." }
        ] }
      ] },
      { n: "The sun went under. The city came up underneath them in its lights, one district at a time, the station first and the strip after and the long string along the bay, and the heat finally started to let go of the concrete." },
      { s: 'akihiko', f: 'neutral', t: "He's taking something. Shinji. I don't know what. He won't tell me." },
      { s: 'akihiko', f: 'serious-3', t: "I used to think getting stronger meant I'd never have to stand somewhere and listen to somebody I couldn't reach." },
      { s: 'akihiko', f: 'sad', t: "Turns out you can be standing right next to them." },
      { choose: [
        { t: "Then stand next to him anyway.", notes: 3, then: [
          { s: 'akihiko', f: 'sad-3', t: "...Yeah." },
          { s: 'akihiko', f: 'neutral', t: "Yeah. That's the only thing I've got, isn't it." }
        ] },
        { t: "Have you asked him straight out?", notes: 2, then: [
          { s: 'akihiko', f: 'sad', t: "He told me to mind my own business. Then he made me dinner." },
          { s: 'akihiko', f: 'happy', t: "...That's Shinji. That's the whole man, right there." }
        ] },
        { t: "Maybe you can't fix this one.", notes: 2, then: [
          { s: 'akihiko', f: 'sad-4', t: "I know." },
          { n: "He said it very quietly, to his hands, and she understood that he'd known for a long time, and that she was the first person he had said it to." }
        ] }
      ] },
      { n: "Down in the dorm something clattered in the kitchen and somebody swore, low and gravelly and inventive, and then Junpei's voice came up through two floors saying yo, senpai, I'm sorry about the pot, okay, I'll buy a new pot, and the low voice said something short back that made Junpei laugh like a kid." },
      { n: "Akihiko laughed too. Short, surprised, wet at the edges, the laugh of a man who had forgotten for an hour that the world was still down there and had just been reminded, loudly, by a saucepan." },
      { s: 'akihiko', f: 'happy', t: "Come on. If that was the good pot, Shinji's going to kill him, and I want to watch." },
      { n: "He stood and held out his hand. She took it. It was rough from the tape and warm from the roof, and he held on one second longer than it took to pull her up, and then one more, and then let go, and went down the stairs ahead of her two at a time, and she followed with her hand still warm and didn't put it on any list at all." }
    ] },
    { after: '9/1', title: '7: pull me back', place: 'Gekkoukan High · Rooftop', time: 'After School', scene: [
      { n: "September had come in on the tail of a typhoon. It had sat on the bay for a long weekend and thrown everything it had at the city, and then it had gone off up the coast to bother somebody else and left Iwatodai washed and dripping and strangely new, every window clean, every gutter running, the sky so blue and so high that it looked like a set somebody had painted for a play about a nicer town." },
      { n: "The roof caught the wind the storm had left behind. It snapped at the safety fence and got under her skirt and pulled her hair loose from the pins her hands had put it up in that morning without asking her, and it threw the clouds across the sky so fast that they looked late for something." },
      { n: "He was already up there. He was leaning on the railing with his blazer hooked over his shoulder on one finger, and he didn't turn around. He'd started knowing her footsteps sometime over the summer, which she pretended she hadn't noticed, and which he pretended he hadn't started." },
      { s: 'akihiko', f: 'neutral', t: "I used to come up here to clear my head." },
      { s: 'akihiko', f: 'neutral', t: "Now I come up here and hope you'll show up. Which is the opposite of clearing it." },
      { n: "He said it to the sky, easily, like a weather report, and her stomach did a small and very specific thing that it absolutely did not have permission to do." },
      { choose: [
        { t: "Then I'll keep showing up.", notes: 3, then: [
          { s: 'akihiko', f: 'blushing', t: "...Good. Yeah. That's. Good." }
        ] },
        { t: "You could just text me. Like a normal person.", notes: 2, then: [
          { s: 'akihiko', f: 'happy', t: "I do text you. At five. You call that harassment." },
          { s: 'solar', f: 'neutral', t: "It is harassment." },
          { s: 'akihiko', f: 'happy', t: "You answer, though." }
        ] },
        { t: "Who said I came up for you?", notes: 2, then: [
          { s: 'akihiko', f: 'happy', t: "Ha. Fair." },
          { n: "He didn't believe her. She didn't believe her either." }
        ] }
      ] },
      { n: "They stood at the railing. Below them the grounds were full of first-years in their summer shirts chasing a ball somebody had kicked too hard, and past the fence the monorail went across the bridge, silver, soundless at this distance, like a needle going through cloth." },
      { s: 'akihiko', f: 'sad-2', t: "Shinji's taking something. Pills. I saw the bottle." },
      { s: 'akihiko', f: 'serious-3', t: "He goes gray at dinner. He cooks for everybody and he doesn't eat. And he looks at me like he's already decided something, and he isn't going to let me talk him out of it." },
      { n: "She'd seen it. The orange bottle in the pocket of the long coat on the hook. The way he held a ladle in the kitchen like it was the one thing in the world that would do what he told it. The way he fed Koromaru off his own plate when he thought nobody was looking, and the way everybody looked." },
      { choose: [
        { t: "You're scared for him.", notes: 3, then: [
          { s: 'akihiko', f: 'sad-4', t: "..." },
          { s: 'akihiko', f: 'sad-3', t: "Yeah. I am." },
          { n: "It came out small. It came out of him the way water comes out of a bottle you've had upside down for a long time, all at once and then not at all, and he looked surprised to find it had been in there." }
        ] },
        { t: "Maybe he needs you to trust him.", notes: 2, then: [
          { s: 'akihiko', f: 'sad-3', t: "Maybe. I don't know how to trust him and worry about him at the same time. It's like running and standing still." }
        ] },
        { t: "Make him tell you.", notes: 1, then: [
          { s: 'akihiko', f: 'sad', t: "You can't make Shinji do anything. I've been trying since I was six." }
        ] }
      ] },
      { ifRank: { shinjiro: 6 }, then: [
        { n: "Then, with his eyes on the monorail, much too casually, the way he lobbed a water bottle across the boxing club when he didn't want you to see him aim," },
        { s: 'akihiko', f: 'neutral', t: "He lets you in the kitchen." },
        { s: 'akihiko', f: 'happy', t: "Nobody gets in the kitchen. I've been trying to get into that kitchen since I was nine. He hit me with a spoon last week." },
        { ifRomance: 'shinjiro', then: [
          { n: "He didn't say the rest of it. He didn't need to. Two nights ago he'd come down at one in the morning for water, the way he always did, and stopped in the kitchen doorway when he saw who was at the stove, and stood there for a second with his hand on the frame, and gone back up the stairs without the water." },
          { s: 'akihiko', f: 'sad', t: "I'm glad. That it's you. That he's got somebody he lets stand that close." },
          { s: 'akihiko', f: 'sad-2', t: "I'm. Yeah. I'm glad." },
          { n: "He said *glad* twice, which was once too many, and they both heard it, and he looked at the monorail very hard, as if it had said it." },
          { choose: [
            { t: "Akihiko.", notes: 3, then: [
              { s: 'akihiko', f: 'neutral', t: "It's fine. It's good. Don't. It's good." },
              { n: "Then he looked at her, just once, sideways, and something in his face wasn't fine at all and wasn't trying to be, and she felt it go in under her ribs and stay there, warm and unwelcome and absolutely hers, like a second heartbeat she hadn't asked for and couldn't give back." }
            ] },
            { t: "(Don't say anything. Stand a little closer.)", notes: 3, then: [
              { n: "She moved along the railing until her sleeve was against his. He didn't move away. He didn't move toward her either. He just stood there and let it be true that she was there, on his side of the roof, and breathed out through his nose like a man finishing a set." }
            ] },
            { t: "It's not like that.", notes: 1, then: [
              { s: 'akihiko', f: 'neutral', t: "...Okay." },
              { n: "He didn't believe her. She wasn't sure she believed herself, and she wasn't sure which half of it she meant." }
            ] }
          ] }
        ], else: [
          { s: 'akihiko', f: 'neutral', t: "He saves you the end of the pot. The crispy part. He never saved me anything in his life." },
          { choose: [
            { t: "Are you jealous of me or of him?", notes: 3, then: [
              { s: 'akihiko', f: 'blushing', t: "...Of the pot." },
              { n: "He went red from the collar up and stayed red, and she laughed at him, and he let her, and somewhere in the middle of letting her he stopped being embarrassed and just looked pleased that she was laughing, which was worse, and lasted longer." }
            ] },
            { t: "He feeds everyone. I'm just closer to the stove.", notes: 2, then: [
              { s: 'akihiko', f: 'happy', t: "Ha. Sure. That's it." },
              { s: 'akihiko', f: 'neutral', t: "He doesn't stand that close to anyone. Trust me. I've known him since he was taller than me." }
            ] }
          ] }
        ] }
      ] },
      { n: "Her phone buzzed in her blazer pocket. Once, twice. She knew without looking what it would be, and she took it out and looked anyway, the way you press on a bruise." },
      { n: "A number she didn't know. That was the third one now, or the fourth, she'd stopped being able to say for sure. They came late, mostly, when she was half asleep, cheerful and ordinary and old, from people who wrote to her like she was someone they'd known all their lives, asking how she was settling in, whether she'd eaten, whether she'd seen something she'd never heard of. She hadn't answered any of them. She hadn't deleted any of them either. She didn't know what you were supposed to do with a letter addressed to someone who had your face." },
      { n: "She put the phone away. When she looked up he was watching the monorail, very carefully, with the face of a man who was not looking at her phone and very badly wanted to." },
      { s: 'akihiko', f: 'neutral', t: "You don't have to tell me." },
      { s: 'solar', f: 'neutral', t: "What would you do? If it were you?" },
      { s: 'akihiko', f: 'serious', t: "I'd find out who it was. Tonight. I'd call every number back and I'd," },
      { n: "He stopped. She watched him stop. She watched it go through him like a hand on a brake lever, all of his weight leaning one way and something in him pulling the other, and she understood that he was choosing not to finish that sentence, standing there in the wind, and that it was costing him." },
      { s: 'akihiko', f: 'neutral', t: "...That's what I'd do. You're not me." },
      { s: 'akihiko', f: 'neutral', t: "If you want to find out, I'll help. If you don't, I won't ask again." },
      { choose: [
        { t: "I don't know yet. Is that allowed?", notes: 3, then: [
          { s: 'akihiko', f: 'neutral', t: "Yeah. That's allowed." },
          { s: 'akihiko', f: 'happy', t: "You're allowed twenty minutes on the shampoo. Remember?" },
          { n: "She laughed, and the wind took it, and he looked pleased with himself in a way that was almost unbearable, and she let him." }
        ] },
        { t: "Thank you for not finishing that sentence.", notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: "...You noticed that." },
          { s: 'solar', f: 'neutral', t: "I notice when you don't do things. It's very loud." }
        ] },
        { t: "Maybe I don't want to know.", notes: 2, then: [
          { s: 'akihiko', f: 'neutral', t: "Okay." },
          { n: "Just that. He let it be true, at least for today, and she was more grateful for the at least than she could have said." }
        ] }
      ] },
      { n: "He pushed off the railing and turned to face her, and for one second the wind dropped completely, as if it had been called away, and his hair fell flat and the fence stopped rattling and the whole roof went still." },
      { s: 'akihiko', f: 'neutral', t: "Hey. Do something for me." },
      { s: 'akihiko', f: 'sad-2', t: "If something happens. With Shinji. If I go running off somewhere stupid with my head down and my hands up." },
      { s: 'akihiko', f: 'serious-3', t: "Pull me back. Okay? You've got my permission. I'm giving it to you now so you don't have to ask." },
      { n: "It went into her somewhere under the ribs and stayed there. He was a boy who decided things for everybody he loved, who would have stood in front of a train for any one of them without asking them first, and here he was on a windy roof handing her the one thing he never handed anyone, which was the right to decide something for him." },
      { choose: [
        { t: "I promise.", notes: 3, then: [
          { n: "He let out a breath he'd clearly been holding since August. His whole body changed with it, the shoulders coming down, the hands loosening at his sides, the jaw letting go." },
          { s: 'akihiko', f: 'happy', t: "Okay. Okay. Thanks." }
        ] },
        { t: "I'll tackle you if I have to.", notes: 3, then: [
          { s: 'akihiko', f: 'happy', t: "Ha! I'd like to see you try." },
          { s: 'akihiko', f: 'neutral', t: "...But yeah. Do that." }
        ] },
        { t: "And who pulls me back?", notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: "..." },
          { s: 'akihiko', f: 'neutral', t: "Whoever you ask. I'd like it to be me." },
          { s: 'akihiko', f: 'blushing', t: "But you'd have to ask." }
        ] }
      ] },
      { n: "The bell went off below them. The wind came back all at once, as if it had only been waiting for the bell, and blew her hair straight across her face, and he reached over without thinking and hooked it out of her eyes with one finger and tucked it behind her ear, and then realized what he had done, and went red from the collar up, all at once, like a thermometer dropped in hot water." },
      { s: 'akihiko', f: 'blushing', t: "...Class. We should go to class." },
      { n: "He took the stairs two at a time. She followed slower, one hand on the cold rail, her face hot, and decided very firmly on the second landing that it was the wind, and on the first landing that it wasn't, and by the time she reached her classroom she had stopped deciding anything at all." }
    ] },
    { after: '10/10', title: '8: october', place: 'Iwatodai · Riverside', time: 'Early Morning', music: 'tender', scene: [
      { n: "The cold came all at once that year, the way it does by the water. One morning the air was soft, and the next it had teeth, and the trees along the river went yellow overnight like they'd all been told something at the same time and were trying not to show it." },
      { n: "For six days there had been no text at five." },
      { n: "She noticed on the first morning and told herself he was sleeping, because somebody in that dorm should. She noticed on the second and told herself he needed it. By the sixth she was awake at a quarter to five every day anyway, out of a habit she didn't remember agreeing to, lying in the dark with her phone face up on her chest, listening to the dorm not make the sounds it used to make. No door at the end of the hall. No feet on the stairs. No low gravelly voice in the kitchen at seven telling somebody to get out of the way." },
      { n: "On the seventh morning she picked it up." },
      { phone: [
        { from: 'solar', t: 'you up' },
        { from: 'akihiko', t: '...' },
        { from: 'akihiko', t: 'yeah' },
        { from: 'solar', t: 'front door. 15' },
        { from: 'akihiko', t: "i don't think i can run today" },
        { from: 'solar', t: "then we'll walk" }
      ], contact: 'Akihiko Sanada · 4:58 AM' },
      { n: "He came down in a hoodie with the hood up and his hands in the front pocket, and he stopped on the step when he saw her, already there, already stretching against the railing in the dark, and something went across his face that she didn't have a name for and didn't want to name." },
      { n: "They walked. The river was black and slow and smoking faintly in the cold, and the streetlights were still on along the path, and they had the whole of it to themselves except for one old man with a dog in a coat, who nodded at them, and whom they nodded at, the way you nod at someone else who's awake when you shouldn't be." },
      { n: "He kept his hands in his pocket the whole first kilometer. She saw them when he took them out to push his hood back at the bridge. The knuckles were raw. Not the old split tape-gray of the boxing club, layered like rings in a tree. New. Open. Somebody had been hitting something hard enough to break the skin, every night, probably for days." },
      { s: 'akihiko', f: 'sad', t: "I've been in the club at night. Mitsuru made me stop." },
      { s: 'akihiko', f: 'sad-2', t: "I yelled at her. I've never yelled at her. Not once, not since the day she put an Evoker in my hand." },
      { s: 'akihiko', f: 'sad-4', t: "I keep running it. That night. Every version where I'm faster." },
      { choose: [
        { t: "Tell me about him when you were kids. The part I wasn't there for.", notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: "..." },
          { n: "He looked at her like she'd said something in another language, one he used to speak and had forgotten he knew. She'd known Shinji for a season. The kitchen at seven, a long coat on the hook by the door, a voice telling everyone to get out of the way. Akihiko had known him since he was six. Then he looked at the river." },
          { s: 'akihiko', f: 'sad-3', t: "He couldn't cook when we were kids. He taught himself. Because somebody had to." },
          { s: 'akihiko', f: 'sad-2', t: "Burned everything for a year straight. Rice, eggs, everything. We ate it anyway. Miki said it tasted like camping." },
          { ifRank: { shinjiro: 7 }, then: [
            { s: 'solar', f: 'neutral', t: "He told me I cut onions like I was mad at them." },
            { s: 'akihiko', f: 'sad-4', t: "...He said that to me. When I was eight. Word for word." },
            { s: 'akihiko', f: 'sad-3', t: "Guess he only ever had the one complaint." }
          ], else: [
            { s: 'solar', f: 'neutral', t: "He told me to eat something. Every single time he saw me. Like it was hello." },
            { s: 'akihiko', f: 'sad-3', t: "...Yeah. It was. That was the only hello he had." }
          ] },
          { n: "He laughed, wet and broken in the middle, and didn't hide it, and she didn't look away, and the old man's dog in its coat barked once at the far end of the path as though it had heard something funny." }
        ] },
        { t: "You couldn't have changed it.", notes: 1, then: [
          { s: 'akihiko', f: 'sad', t: "That's what everybody says. It's not working yet." }
        ] },
        { t: "(Walk. Don't say anything yet.)", notes: 2, then: [
          { n: "She walked. He walked beside her, and the quiet went on long enough to stop being something either of them was waiting out and start being something they were in together, like weather." }
        ] }
      ] },
      { n: "They stopped on the bridge. The same railing as May, the same view, the bay going from black to the color of pencil lead, the city still mostly dark on the far shore. He put his hands on the cold rail and looked at them there, the knuckles, as though they belonged to somebody he was worried about." },
      { s: 'akihiko', f: 'serious-3', t: "I don't know what to do with this if I can't hit it." },
      { n: "His hands tightened on the rail. She watched them do it. She watched the skin over the knuckles go white and then split again in one place, a bead of red coming up bright in the gray light, and him not noticing, or noticing and not caring, and she thought, very clearly, of a windy roof in September and a boy handing her something he never handed anybody." },
      { n: "If I go running off somewhere stupid with my head down and my hands up." },
      { choose: [
        { t: "(Take his wrists, and take his hands off the rail.)", notes: 3, then: [
          { n: "She took his wrists. He let her. That was the first thing, that he let her, and she felt it in his arms, the moment where all that strength could have gone the other way and chose not to. She lifted his hands off the railing and held them between them, palms down, the way he'd held hers in June to wrap them." },
          { s: 'solar', f: 'serious', t: "You said pull you back. I'm pulling." },
          { s: 'akihiko', f: 'sad-4', t: "..." },
          { s: 'akihiko', f: 'sad-3', t: "...Yeah. Okay. Okay." },
          { n: "He didn't take his hands away. He stood there and let her hold them, and his breath came out of him long and ragged and white in the cold, and then again, slower, like he was matching a count." }
        ] },
        { t: "You don't have to be strong this morning.", notes: 3, then: [
          { s: 'akihiko', f: 'sad-4', t: "..." },
          { s: 'akihiko', f: 'sad-3', t: "That's exactly what he'd say. If he could say anything." },
          { n: "His hands let go of the rail, slowly, one finger at a time, like something being unwrapped." }
        ] },
        { t: "Then let's find something else to hit. Something that hits back softer.", notes: 2, then: [
          { s: 'akihiko', f: 'surprised', t: "...Ha." },
          { s: 'akihiko', f: 'happy', t: "Batting cages open at ten. You're terrible at baseball." },
          { s: 'solar', f: 'neutral', t: "So are you." },
          { s: 'akihiko', f: 'happy', t: "So we'll be terrible together. Okay." }
        ] }
      ] },
      { n: "The sun came up behind the city, the way it does over water, gray to silver to a gold too bright to look at, all at once. He watched it. She watched him watch it." },
      { s: 'akihiko', f: 'sad-2', t: "I go to the hospital after school. Every day. I sit there and I tell him what everybody had for dinner." },
      { s: 'akihiko', f: 'neutral', t: "Koro waits on the steps. The nurses gave up trying to move him." },
      { s: 'akihiko', f: 'sad', t: "Will you come sometime? You don't have to. He'd," },
      { n: "He stopped. He shook his head at himself, small, and started the sentence over the way he'd learned to start them." },
      { s: 'akihiko', f: 'neutral', t: "I'd like it. If you came. That's all. That's the whole thing." },
      { choose: [
        { t: "I'll come today.", notes: 3, then: [
          { s: 'akihiko', f: 'sad-2', t: "...Thanks." },
          { s: 'akihiko', f: 'neutral', t: "Bring something. He hates flowers. He'd want something he could eat. He can't eat. Bring it anyway." }
        ] },
        { t: "I'll come whenever you go.", notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: "Every day?" },
          { s: 'solar', f: 'neutral', t: "Every day you go." },
          { n: "He didn't say anything. He just nodded, hard, twice, at the bay, like it had asked him a question." }
        ] },
        { t: "Ask me again tomorrow.", notes: 1, then: [
          { s: 'akihiko', f: 'neutral', t: "Okay. I will." },
          { n: "He would. She knew he would. She wasn't sure why she'd said it, except that a part of her still flinched at being needed before she'd decided to be, and she didn't like that part, and she'd have to ask it some questions later." }
        ] }
      ] },
      { n: "They walked back as the city woke up around them, shutters going up on the strip, a delivery truck backing out of an alley and beeping at nothing, a girl in a Gekkoukan uniform running for the monorail with toast in her mouth like something out of a comic. The dorm was louder than it had been in the spring, more voices on the stairs, more shoes by the door, more people who needed the bathroom at seven. From outside, with the windows lit and the smell of somebody's breakfast coming under the door, it almost looked like the same place." },
      { s: 'akihiko', f: 'neutral', t: "Five tomorrow?" },
      { s: 'solar', f: 'neutral', t: "Five." },
      { s: 'akihiko', f: 'neutral', t: "We'll walk." },
      { s: 'solar', f: 'neutral', t: "We'll run. You need it." },
      { n: "He laughed. It wasn't the old one. It was the first one since, though, and he looked surprised to hear it come out of himself, and went inside first so she wouldn't see his face, and she stood on the step in the cold a little longer, holding the shape of his wrists in her hands." }
    ] },
    { after: '11/2', title: '9: what am i to you', place: 'Gekkoukan High · Boxing Club', time: 'After School', scene: [
      { n: "November made everything look like a photograph of itself. The light came in low and pale and gold even at lunchtime, slanting through the high windows of the boxing club in long bars that the dust turned slowly in, and the first-years had started wearing their tracksuits over their uniforms, and the radiator under the window knocked twice an hour like somebody wanting to be let in." },
      { n: "He was at the heavy bag. He'd been at the heavy bag a lot lately, not the raw-knuckled October way, not at night, nothing she'd have to take his wrists for. Just steady. Rhythmic. Left, left, right, pivot. The bag swinging on its chain and coming back to him like it had somewhere else to be and kept changing its mind." },
      { n: "There had been a morning last week when her phone hadn't gone off at five. And another two days after. She'd lain there in the dark both times with her heart doing something stupid, and both times she'd gone down at ten past and found him already out front, stretching, and both times he'd looked up at her with a face that was trying very hard to be surprised." },
      { s: 'akihiko', f: 'neutral', t: "Hey. Didn't know if you'd come." },
      { s: 'solar', f: 'neutral', t: "You didn't text." },
      { s: 'akihiko', f: 'neutral', t: "Figured you might have people to see." },
      { n: "People. He meant the voices on the stairs at all hours now, the shoes by the door she didn't know the owners of and then did, the strangers who came through at midnight and looked at her across the lounge like she was a house they'd grown up in that somebody had painted a different color. They said her name like they had been saying it their whole lives. Some of them cried. Some of them were very polite about it, which was worse. All of them knew things about her that she didn't, and every one of them, sooner or later, said the word home." },
      { n: "She hadn't noticed him stepping back. She noticed it now, standing in the doorway with the gold light on the mats, and it went into her like cold water into a shoe." },
      { choose: [
        { t: "I don't want you to stop texting.", notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: "..." },
          { s: 'akihiko', f: 'blushing', t: "...Okay. I won't. Five. Every day. You'll regret this." }
        ] },
        { t: "You don't get to decide that for me.", notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: "I wasn't deciding," },
          { n: "He stopped. He looked at the bag. She watched him run it back, the way he ran rounds back, and find the place where he'd done exactly that." },
          { s: 'akihiko', f: 'sad-2', t: "...Yeah. I was. Sorry. Old habit." }
        ] },
        { t: "(Hold the bag for him, without saying anything.)", notes: 2, stat: { kindness: 1 }, then: [
          { n: "She came in and put her shoulder to the bag. He looked at her over the top of it, and then hit it, and the old dull thud went through her collarbone and rattled her teeth, and it was such a relief to be hit by something familiar that she nearly laughed." }
        ] }
      ] },
      { s: 'akihiko', f: 'neutral', t: "Can I say something tonight? It's going to come out wrong. I need to be somewhere I can't hit anything." },
      { place: 'Iwatodai Dorm · Rooftop', time: 'Night' },
      { n: "The roof at night in November was the coldest place in Iwatodai that you could reach without a ticket. The wind came off the bay with salt in it and nothing to stop it, and the city lay underneath them in its lights, the station and the strip and the long bright string along the water toward the bridge, and above all of it the moon hung two days off full, fat and lopsided and too bright, like a coin somebody had bitten." },
      { n: "He'd brought two cans of hot coffee from the machine by the station and held his between both hands without drinking it. He'd changed his mind about where to stand four times. She'd counted." },
      { s: 'akihiko', f: 'neutral', t: "They knew your name. All of them. Your whole name." },
      { s: 'akihiko', f: 'sad-2', t: "I found you on the floor of that place and I asked you, and you said Solar, and I said Solar what, and you didn't answer, and I said okay. Just Solar." },
      { s: 'akihiko', f: 'sad', t: "I never asked again. I told myself it was because you didn't want me to. That was part of it." },
      { s: 'akihiko', f: 'blushing', t: "The other part was I liked being the one person who didn't need it." },
      { n: "The wind pulled at his hair. He looked at the can in his hands like it might have the rest of the sentence written on it somewhere in small print." },
      { s: 'akihiko', f: 'serious-3', t: "This isn't me asking you for anything. Everybody's asking you for something lately. I can see it on you at breakfast." },
      { s: 'akihiko', f: 'blushing', t: "I just want to know one thing, and then I'll shut up and drink this coffee, which is cold now." },
      { s: 'akihiko', f: 'neutral', t: "What am I to you?" },
      { n: "There it was. The thing underneath every text at five and every bench he'd made her sprint to and every egg in every bowl. She had known it was coming the way you know the bottom of a staircase in the dark, by the feeling of having run out of steps, and she had come up here anyway, and she hadn't let herself think about why she had come up here anyway until this exact second, which she supposed was its own answer." },
      { route: [
        { t: "Someone I've fallen for.", route: 'romance', notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: "..." },
          { s: 'akihiko', f: 'blushing', t: "Oh. Okay. I. Okay." },
          { n: "He looked at her like she'd hit him, and like he'd liked it, and like he had absolutely no idea what anybody was supposed to do with their hands in a situation like this one. He put the can down on the ledge. He picked it up again. He put it down." },
          { cg: 'romance-akihiko-rooftop' },
          { s: 'akihiko', f: 'blushing', t: "I think I fell first. The ruler. Four centimeters. I thought, oh no." },
          { s: 'solar', f: 'happy', t: "That was the first day." },
          { s: 'akihiko', f: 'blushing', t: "I'm fast. You know I'm fast." },
          { n: "He reached over and took her hand, the one that wasn't holding the coffee, and laced his fingers through hers slowly and carefully, like a wrap going on, one pass at a time, and she felt him counting under his breath and didn't say so. His hand was warm. Hers wasn't. He fixed that." },
          { n: "He leaned down until his forehead rested against hers, and stayed there, his breath warm and coffee-bitter in the cold between them, his eyes closed, and he didn't do anything else at all. He just stayed. It was the most decided she had ever seen him be about anything that wasn't a punch." },
          { cg: null },
          { n: "They stayed up there until the coffee was ice and the last lit window on the girls' floor went dark below them, and he didn't let go of her hand once, not even when she shivered, which she did on purpose twice to see what he'd do. What he did was put her hand in his coat pocket with his, and look at the moon as if that had always been the plan." }
        ] },
        { t: "My best friend.", route: 'friend', notes: 3, then: [
          { s: 'akihiko', f: 'happy', t: "...Yeah. Yeah, that's it. That's exactly it." },
          { n: "Something in his face settled, the way a held breath settles when it finally has somewhere to go, and she watched him be relieved and be something else underneath the relief and then decide, visibly, on the relief." },
          { s: 'akihiko', f: 'happy', t: "Best friend. I haven't had one of those since Shinji. Not like this." },
          { s: 'akihiko', f: 'neutral', t: "He'd like you. He'd never say so. He'd just start cooking you things." },
          { s: 'akihiko', f: 'happy', t: "When he wakes up I'm introducing you properly. That's a promise. You'll hate it. He'll hate it. It'll be great." },
          { n: "He bumped her shoulder with his, hard enough that she had to put a hand on the ledge, which was the most Akihiko thing he could possibly have done and he did it with his whole heart. Then he drank his coffee, which was cold, and made a face, and drank the rest anyway." },
          { n: "They stood up there until the moon had moved the width of a finger, talking about nothing, about Junpei's grades and the club's new first-year and a beef bowl place on the strip that Akihiko swore was the best in the prefecture. Before they went in he stole the last of her coffee. She let him." }
        ] }
      ] },
      { n: "On the stairs going down he stopped on the landing and turned around, one step below her, so that for once they were exactly the same height." },
      { s: 'akihiko', f: 'neutral', t: "Whatever you decide. About them. About any of it. I'll still be out front at five." },
      { s: 'akihiko', f: 'neutral', t: "That's not me asking. That's just a fact. Like the weather." },
      { n: "He went down the rest of the stairs without waiting to see her face, which was lucky, because she didn't know what it was doing, and she stood on the landing for a long time after with her hand on the cold rail and the facts of the weather going around and around in her like a song she almost knew." }
    ] },
    { after: '12/1', title: '10: red gloves', place: 'Iwatodai Dorm · Lounge', time: 'Evening', music: 'tender', scene: [
      { n: "December came in quietly, the way it did by the water, gray and soft and smelling of snow that hadn't decided to arrive yet. The dorm had agreed, without anybody calling a meeting, that it was time for lights." },
      { n: "Junpei had strung them across the lounge windows himself, standing on the arm of the couch, badly, so that they sagged in the middle like a smile. Yukari had redone half of them while telling him in detail what was wrong with the other half. Mitsuru had walked past twice without comment and then come back from Paulownia Mall that evening with a second box, which she set on the coffee table and did not mention, and which was already up. The lounge was too full now most nights, and too loud, more coats than hooks, more people than chairs, a language or two she didn't speak going up the stairs, and tonight, by some accident or conspiracy, it was empty." },
      { s: 'yukari', f: 'neutral', t: "We're going to the convenience store. Me and Junpei. Right now. For a really long time." },
      { n: "Yukari said it to the room in general while looking at a very specific point on the wall. Behind her Junpei was making a face that suggested he had been told to keep his mouth shut under penalty of death and was just barely managing it." },
      { s: 'junpei', f: 'happy', t: "So long, leader. Godspeed. Don't do anything I wouldn't—" },
      { s: 'yukari', f: 'serious', t: "Junpei." },
      { n: "The door shut behind them. The lights hummed. Everybody had known, apparently. Everybody had known for some time. Solar was beginning to suspect that she had been the last to know something about herself again, which was getting to be a habit." },
      { n: "Akihiko was sitting on the arm of the couch, holding something wrapped in newspaper. The sports section. The tape was coming off at one corner. It was clearly not the first attempt, or the fifth." },
      { s: 'akihiko', f: 'neutral', t: "I'm not good at this. So I'm just going to hand it to you." },
      { n: "She unwrapped it slowly, because he was watching her do it like a man watching the judges' cards. Inside were boxing gloves. Red. Small, much too small for his hands now, the leather worn soft and pale at the knuckles and cracked across the palms, the laces replaced at least twice with laces that didn't match." },
      { n: "Inside the cuff of the left one, in marker gone brown with age, somebody had written SANADA AKIHIKO in the careful, enormous letters of a child who has just learned to write his own name and doesn't trust anyone else to." },
      { n: "Inside the right one, in a different hand, rounder and smaller and leaning hard to one side, it said MIKI'S TOO." },
      { s: 'akihiko', f: 'sad-2', t: "First pair I ever had. Somebody donated them to the home. They were too big for me. I wore them anyway." },
      { s: 'akihiko', f: 'sad-3', t: "She wrote that when I wasn't looking. I was so mad. I chased her around the yard." },
      { n: "He laughed, quiet, at nothing in the room. They were the only thing he owned from before, she understood. Everything else had burned. She held them in her lap with her hands flat on top of them, very still, like something that might wake up." },
      { s: 'akihiko', f: 'neutral', t: "I want you to have them." },
      { s: 'akihiko', f: 'neutral', t: "Wherever you end up. Here. Somewhere else. Wherever that is. I want something of mine to be there." },
      { s: 'akihiko', f: 'serious-3', t: "That's not me asking for anything. It's just a pair of gloves." },
      { n: "It was not just a pair of gloves. She knew it and he knew it and the lights knew it, humming in their sagging line across the dark window, and outside, over the bay, it had finally started to snow, the first of the year, fat and slow, drifting past the glass like something taking its time on purpose." },
      { n: "She thought about the voices on the stairs. About everybody who'd come through at midnight with her name in their mouths and their arms open and the word home ready, and how every single one of them was right, probably, and how none of them had ever once given her something and then told her she didn't have to want it." },
      { choose: [
        { t: "I'd stay for this.", notes: 3, tally: { here: 1 }, then: [
          { n: "It came out of her quiet and plain, and she heard it land in the room, and so did he." },
          { s: 'akihiko', f: 'surprised', t: "..." },
          { n: "He went very still. Not the coiled stillness of the ring, not the waiting kind. The other kind, the kind she had only seen on him once, on a bridge in October with her hands around his wrists." },
          { s: 'akihiko', f: 'neutral', t: "Don't say that because of me." },
          { s: 'solar', f: 'neutral', t: "I didn't. I said it because of this." },
          { n: "She lifted the gloves an inch off her lap, the way you'd lift a cup to somebody across a table. He looked at them. He looked at her. He didn't say anything else, because he was a man who had spent the whole autumn learning to leave a sentence where somebody else had put it, and this one she had put down herself, and he left it there." }
        ] },
        { t: "They're too important. I can't take them.", notes: 2, then: [
          { s: 'akihiko', f: 'neutral', t: "That's why." },
          { s: 'akihiko', f: 'sad-2', t: "I'm not giving you the stuff that doesn't matter. What would be the point of that." }
        ] },
        { t: "Then I'll bring them out front at five. Every morning. So you know where they are.", notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: "...Every morning?" },
          { s: 'solar', f: 'happy', t: "You'll regret this." },
          { s: 'akihiko', f: 'happy', t: "Ha! That's my line." }
        ] }
      ] },
      { ifRoute: 'romance', then: [
        { s: 'akihiko', f: 'neutral', t: "I used to think getting stronger meant needing nobody." },
        { s: 'akihiko', f: 'blushing', t: "I was wrong. I'm still going to get stronger. But it's so I can stand next to you. That's the whole plan now. It's not a very good plan." },
        { n: "He said it all at once, like a punch thrown before he could talk himself out of it, and then just sat there on the arm of the couch with his ears going red and the lights catching in his hair, waiting, a boy who had won three tournaments looking like he had never in his life been less sure of a round." },
        { choose: [
          { t: "(Kiss him.)", notes: 3, then: [
            { n: "She stood up. The gloves went onto the couch. She stepped in between his knees where he sat on the arm, which put her, for once, a little taller than him, and put one hand flat on his chest, where the tape used to be in April, and felt his heart going under it like something that had made up its mind." },
            { n: "She kissed him. It was brief and a little off-center and it tasted like the hot chocolate Yukari had left on the table, and he made a small sound against her mouth like someone surprised by a good hit, and his hand came up to the back of her neck, warm, careful, as if she might be the one who was hurt." },
            { s: 'akihiko', f: 'blushing', t: "...I've wanted to do that since the ruler." },
            { s: 'solar', f: 'happy', t: "You said the ruler was the first day." },
            { s: 'akihiko', f: 'blushing', t: "I told you. I'm fast." }
          ] },
          { t: "Then stay next to me. Right now. That's a start.", notes: 3, then: [
            { n: "He slid down off the arm of the couch and sat beside her, close, closer than he ever had, his shoulder against hers, and after a moment he leaned his head on her shoulder like he'd been wanting to for months and had finally run out of reasons not to." },
            { n: "His hair smelled like the cold and the gym and the dorm's terrible shampoo. She didn't move. He didn't either. They sat by the window until the lights were the only thing on in the room and the snow had started to stick to the sill, and he held her hand the whole time, his thumb going back and forth across her knuckles, slow, like he was counting something he never wanted to finish counting." }
          ] }
        ] }
      ], else: [
        { s: 'akihiko', f: 'happy', t: "Best friend gets the gloves. That's the rule. I just made it up." },
        { s: 'akihiko', f: 'serious', t: "You know how to use them now. Hands up. Hip into it. Don't throw with your arm." },
        { choose: [
          { t: "I'll take care of them.", notes: 3, then: [
            { s: 'akihiko', f: 'happy', t: "I know you will. You take care of everything." },
            { s: 'akihiko', f: 'neutral', t: "...Let somebody take care of you sometimes, too. That's not advice. That's a drill." }
          ] },
          { t: "Only if you keep training me.", notes: 3, then: [
            { s: 'akihiko', f: 'happy', t: "Deal. Five. Don't be late." },
            { s: 'solar', f: 'neutral', t: "I've never once been late." },
            { s: 'akihiko', f: 'happy', t: "I know. It's very annoying." }
          ] }
        ] },
        { n: "Outside, the snow kept coming, slow and fat, drifting past the lights and settling on the sill one flake at a time." },
        { s: 'akihiko', f: 'happy', t: "Perfect running weather." },
        { n: "She threw a couch cushion at his head. He caught it without looking. Of course he did. Then he threw it back, gently, underhand, the way you'd throw something to someone you knew would catch it, and she caught it without looking either, and they both sat there grinning at nothing like idiots until Junpei and Yukari came back an hour later with nothing from the convenience store at all." }
      ] },
      { n: "Later, upstairs, she put the gloves on the shelf above her desk, beside the stopwatch on its red cord and the crooked roll of hand wraps from June, three red things in a row. She looked at them for a long time with the lamp off. It occurred to her that she had a list after all, a real one, of things that were hers here, and that every single thing on it had been put into her hands by the same person, and that he had never once asked for any of it back." }
    ] }
  ],
  // After MAX (rank 10). Not played by the engine yet: needs a hook that offers these in place of hangouts once a link is maxed.
  afterMax: [
    { place: 'Iwatodai · Riverside', time: 'Early Morning', scene: [
      { phone: [
        { from: 'solar', t: 'you up' },
        { from: 'akihiko', t: "it's 4:51" },
        { from: 'solar', t: 'i know' },
        { from: 'akihiko', t: 'who is this' },
        { from: 'solar', t: 'front door. you have 9 minutes' },
        { from: 'akihiko', t: '...' },
        { from: 'akihiko', t: '2' }
      ], contact: 'Akihiko Sanada · 4:51 AM' },
      { n: "He came out of the dorm in ninety seconds with his hoodie on inside out and one lace trailing, and stopped dead on the step, because she was already there, stretching against the railing in the dark like she'd been awake for an hour and enjoyed every minute of it." },
      { s: 'akihiko', f: 'surprised', t: "...You're early." },
      { s: 'solar', f: 'neutral', t: "You're late." },
      { n: "He laughed, a real one, loud enough to wake the whole second floor, and clapped a hand over his own mouth and kept laughing into it, and she thought she'd get up in the dark a great many more times to hear that." },
      { n: "It had snowed in the night. Not much, a thin white skin over the path and the benches and the railings that their shoes broke through with a sound like paper tearing. The river was black and slow and steaming in the cold, and the streetlights were still on, and the city was asleep on the far side of the water." },
      { n: "She set the pace. He let her. She noticed him letting her for the first kilometer, and somewhere in the second she noticed that he'd stopped letting her, that he was working, breathing hard at her shoulder, keeping up." },
      { s: 'akihiko', f: 'serious', t: "When did you get fast?" },
      { choose: [
        { t: "Sometime in June. You were busy watching my form.", notes: 3, then: [
          { s: 'akihiko', f: 'blushing', t: "I was watching your form." },
          { s: 'solar', f: 'neutral', t: "Sure." },
          { s: 'akihiko', f: 'blushing', t: "...Mostly your form." }
        ] },
        { t: "Race you to the bridge.", notes: 3, then: [
          { s: 'akihiko', f: 'happy', t: "Ha! You're on." },
          { n: "She lost by a stride. Maybe less. He turned around at the railing with both arms up and then saw how close it had been and lowered them slowly, and looked at her the way he looked at an opponent he respected, which from him was very nearly a love letter." }
        ] },
        { t: "(Save your breath. Just run.)", notes: 2, then: [
          { n: "She saved her breath. He looked over at her twice, three times, and grinned at the path ahead like it had told him a joke." }
        ] }
      ] },
      { n: "They stopped on the bridge, the same one, the same railing, and the sky over the bay did the thing it did, gray to silver to gold, all at once, the way it only ever does over water. He handed her his bottle without a word. She drank and handed it back, and he drank after her without wiping it, and she noticed, and he noticed her noticing, and neither of them said anything about that either." },
      { s: 'akihiko', f: 'neutral', t: "You used to run like something was chasing you." },
      { s: 'akihiko', f: 'happy', t: "You don't anymore." },
      { choose: [
        { t: "What do I run like now?", notes: 3, then: [
          { s: 'akihiko', f: 'neutral', t: "Like you know where you're going." },
          { n: "He said it simply, a time on a lap, and didn't seem to notice it was the kind of sentence that could go a lot of ways, and she let it go all of them for a second, there on the bridge, and then let it just be about running." }
        ] },
        { t: "Maybe it got tired.", notes: 2, then: [
          { s: 'akihiko', f: 'happy', t: "Ha. Good. I'll beat it up if it comes back." }
        ] }
      ] },
      { ifRoute: 'romance', then: [
        { n: "He kissed her on the bridge with the sun coming up behind him, both of them red-cheeked and still breathing hard, his hand cold at the back of her neck and then not cold. When he pulled back there was frost in his eyelashes. She told him. He said that was impossible. She showed him on her phone, and he looked at himself for a long astonished moment and then took another picture, the two of them, the bay behind them gone gold." },
        { n: "He made it his lock screen before they were off the bridge, and ran the whole way back with his phone in his hand so he could keep looking at it, which for Akihiko Sanada was very bad form." }
      ], else: [
        { n: "He took a picture of the bay because it was there, and then, after thinking about it for the length of a lamppost, turned the phone around and took one of the two of them, squinting, red-nosed, her hair everywhere. He looked at it for a long time." },
        { s: 'akihiko', f: 'happy', t: "Best friend picture. I'm sending it to Shinji. He can look at it when he wakes up." },
        { n: "He sent it. She watched the little bar go across and finish, to a phone in a drawer at a hospital, and didn't say anything, and he ran the whole way back a half step ahead of her, as if daring her to catch him, which she did." }
      ] }
    ] },
    { place: 'Tatsumi Memorial Hospital', time: 'Evening', scene: [
      { n: "Visiting hours at Tatsumi Memorial ended at eight. Akihiko had been coming every day since October, and the night nurse on the third floor knew him well enough now to just lift her pen and point down the hall without looking up." },
      { n: "Shinjiro looked smaller in the bed than he had ever looked standing up. That was the first thing. The second was the beanie, folded on the side table beside a paper cup of flowers that somebody had brought in spite of being told, and the third was the way Akihiko pulled the chair up to the bed and sat down in it in one easy movement, the way a man sits down at his own kitchen table." },
      { s: 'akihiko', f: 'neutral', t: "Hey. It's me. Junpei failed a chemistry quiz. Mitsuru made him retake it in the lounge with a timer. Ken got a hundred on his. Koro ate a sock. He's fine." },
      { n: "He gave the report like that, quick and flat and thorough, round by round. Then he stopped, and looked at his hands on his knees, and looked up at Solar, who was standing at the foot of the bed with her coat still on." },
      { ifRoute: 'romance', then: [
        { s: 'akihiko', f: 'blushing', t: "And. I brought someone. You've met her. I kept saying I'd bring her properly. So. This is properly." },
        { s: 'akihiko', f: 'blushing', t: "She's my girlfriend, Shinji. That's the first time I've said it out loud to anybody who isn't her." }
      ], else: [
        { s: 'akihiko', f: 'happy', t: "And I brought her. Properly, this time. I told you I would." },
        { s: 'akihiko', f: 'neutral', t: "She's my best friend, Shinji. You'd hate how much she runs. You'd make her eat something." }
      ] },
      { ifRomance: 'shinjiro', then: [
        { n: "Solar held the cold rail at the foot of the bed. She thought about a kitchen in August, steam and onions and a low voice telling her not to rush it. She didn't say any of it. Some things you didn't say in front of the people they were about, even when the people were asleep. Especially then." }
      ] },
      { choose: [
        { t: "(Bow to him, the way you'd bow to somebody's family.)", notes: 3, then: [
          { n: "She bowed, low and properly, the way you bow to someone's family, because he was. When she straightened up Akihiko was looking very hard at the window, and it took him a while to stop." }
        ] },
        { t: "Hi, Shinjiro-senpai. He talks about you every day.", notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: "...I don't talk about him every day." },
          { s: 'solar', f: 'neutral', t: "Every day." },
          { s: 'akihiko', f: 'sad-2', t: "...Yeah. Okay. Every day." }
        ] },
        { t: "(Move the beanie closer to his hand.)", notes: 2, then: [
          { n: "She slid it across the table until it sat by his fingers, where he'd find it first. Akihiko watched her do it and didn't say anything, and didn't need to." }
        ] }
      ] },
      { s: 'akihiko', f: 'sad-3', t: "He'd say I don't deserve you. He wouldn't say it to you. He'd say it to me in the hallway, and then he'd go and make you dinner." },
      { n: "The monitor kept its count. Somewhere down the corridor a cart went by on one squeaking wheel. At five to eight the nurse put her head in, and Akihiko stood and laid two fingers on the back of Shinji's hand, once, like a boxer touching gloves before a round." },
      { place: 'Tatsumi Memorial Hospital', time: 'Night' },
      { n: "He was fine in the room. He was always fine in the room. It was the stairs. He got halfway down the first flight and sat on a step with his elbows on his knees and his hands hanging, and looked at the floor between his feet like it had moved." },
      { s: 'akihiko', f: 'sad-4', t: "Every time I leave I think, this is it. This is the last time. And I just get up and walk out. Every time." },
      { choose: [
        { t: "(Sit beside him and put your hand flat on his back.)", notes: 3, then: [
          { n: "She sat on the step beside him and laid her hand flat between his shoulder blades. She felt him breathe, once, ragged, and then again, slower, as though her hand were a count he could follow." }
        ] },
        { t: "You walk out because you're coming back. That's different.", notes: 3, then: [
          { s: 'akihiko', f: 'sad-2', t: "...Is it?" },
          { s: 'solar', f: 'neutral', t: "It's the whole difference." }
        ] }
      ] },
      { n: "Outside, Koromaru was on the hospital steps, where he always was, a white shape in the dark with his chin on his paws, and he lifted his head when the doors opened and thumped his tail twice on the concrete, and then put his chin back down to keep waiting. Akihiko crouched and scratched him behind the ears for a long time without saying anything. Solar stood with them under the light over the door until the night got too cold to argue with, and then the three of them walked home together, slowly, on the side of the road that was out of the wind." }
    ] }
  ],
  // Christmas Eve (12/24), romance route at MAX. Not played by the engine yet: needs the 12/24 partner pick (plot doc §12).
  christmas: { place: 'Iwatodai Dorm · 2F Hallway', time: 'Evening', scene: [
    { n: "He was at her door. Not the front door. Her door, on the girls' floor, where he was not allowed to be under a rule Mitsuru had written down in April and then, at some point over the summer, laminated, and he was knocking with one knuckle so softly it barely counted as knocking, as if the sound might carry down two floors and wake somebody up." },
    { n: "There was snow in his hair. He had clearly been outside already, and come back in, and climbed the stairs, and then stood here for a while working up to the knocking. Her coat was folded over his arm. Her scarf. Her gloves. All of it, like a waiter with a towel." },
    { s: 'akihiko', f: 'blushing', t: "I know. I know. Mitsuru. Come on, before she hears." },
    { s: 'akihiko', f: 'blushing', t: "Merry Christmas Eve." },
    { n: "They went down the stairs like burglars. The lounge was full, it was always full now, a dozen people and three languages and somebody's card game on the coffee table and the TV on with nobody watching it, and the whole room went quiet in a way that was much louder than talking. Yukari elbowed Junpei so hard before he could open his mouth that all he managed was a small wounded noise and a thumbs up. Somebody whistled. Akihiko walked straight through all of it to the door with his ears going red and his face set like he was walking out to the ring." },
    { place: 'Moonlight Bridge', time: 'Night', music: 'tender' },
    { cg: 'romance-akihiko-christmas' },
    { n: "The snow had been falling since dusk and showed no sign of stopping. It came down slow and fat through the streetlights and settled on the railings and on the shoulders of his coat and in the empty lanes of the bridge, the whole city gone soft and hushed and strange, the way a room is after a party, the way a stage is after everyone has gone home." },
    { n: "He walked her out to the middle, where the view was best, and then stood there with his hands jammed in his pockets saying nothing for long enough that she started to worry, and then pulled out a box wrapped in the sports section with so much tape on it that it was mostly tape." },
    { s: 'akihiko', f: 'blushing', t: "Don't look at the wrapping. I did it eight times." },
    { n: "Inside was a scarf. Red. Soft, very good wool, and long. Absurdly long. It kept coming out of the box and coming out until she was standing there with an armful of it, laughing, and he was red to the ears." },
    { s: 'akihiko', f: 'blushing', t: "The lady in the shop asked how long. I said long. She took me seriously." },
    { n: "He took it out of her arms and wound it around her neck, once, twice, carefully, his knuckles cold against her jaw, tucking the ends in the way he tucked the ends of a wrap before a round. There was still a great deal of scarf left over. He considered it. Then he looped the rest of it around his own neck, so that they stood in the middle of Moonlight Bridge tied together by eleven feet of red wool." },
    { s: 'akihiko', f: 'happy', t: "There. Now it's the right length." },
    { choose: [
      { t: "(Give him the cookbook. One page is folded down. Curry.)", notes: 3, then: [
        { n: "It was a beginner's cookbook, the kind with a photograph for every step, and she had folded down the corner of exactly one page. He opened it straight to it, and looked at the picture of the curry for a long time, snow landing on the page and going clear." },
        { s: 'akihiko', f: 'sad-2', t: "...Somebody has to." },
        { s: 'akihiko', f: 'happy', t: "He's going to be so mad when he wakes up and I can cook." }
      ] },
      { t: "(Give him new hand wraps. You wrote something inside the loop.)", notes: 3, then: [
        { n: "Red, because the old ones were red. Inside the thumb loop of the left one, in small careful marker, she had written 5:00, and under it, smaller, if you want." },
        { s: 'akihiko', f: 'surprised', t: "..." },
        { s: 'akihiko', f: 'blushing', t: "I'm never using these. ...I'm using these every day." }
      ] },
      { t: "(Give him a tub of protein with a bow on it.)", notes: 2, then: [
        { s: 'akihiko', f: 'happy', t: "Is this the matcha one? It's the matcha one. Solar." },
        { n: "He hugged the tub to his chest, and then hugged her with the tub still in his arms, which was uncomfortable for everybody, especially the tub." }
      ] }
    ] },
    { n: "They leaned on the railing, tied together, and watched the snow fall into the black water and disappear, one flake after another, without a sound." },
    { s: 'akihiko', f: 'neutral', t: "In April you walked out of that place like you were already halfway out of the building. I thought, that one's going to bolt the first chance she gets." },
    { s: 'akihiko', f: 'serious-3', t: "I wanted to see if I could keep up." },
    { n: "She thought about April. The cold tiles. A boy with his ribs taped asking her name and taking just Solar for an answer, and walking her up the only stairs on that floor, and never once asking her where she was going." },
    { choose: [
      { t: "I didn't count the steps up here. I count everything. I didn't count these.", notes: 3, then: [
        { s: 'akihiko', f: 'surprised', t: "...You didn't?" },
        { s: 'solar', f: 'neutral', t: "I forgot to. I don't know when I started forgetting." },
        { s: 'akihiko', f: 'blushing', t: "That's the nicest thing anybody's ever said to me, and I don't even understand it." }
      ] },
      { t: "You kept up.", notes: 3, then: [
        { s: 'akihiko', f: 'blushing', t: "Barely." },
        { s: 'solar', f: 'neutral', t: "Barely still counts." },
        { n: "It was his, from the river in April, the first morning, and he recognized it, and his whole face went soft and helpless in the cold." }
      ] }
    ] },
    { s: 'akihiko', f: 'serious-3', t: "I graduate in March. I don't know where I end up after that. Somewhere I'm useful." },
    { s: 'akihiko', f: 'neutral', t: "But wherever you are. Whatever happens in January. I'm texting you at five. Every day." },
    { s: 'akihiko', f: 'blushing', t: "If it doesn't go through, I'll text anyway. I'm warning you now." },
    { n: "Something in her chest went very still at that, and she didn't know why, a little cold place under the warmth like a stone in a shoe, the picture of a phone somewhere lighting up in an empty room with nobody there to read it. Then it was gone, and he was looking at her, and the snow was in his eyelashes." },
    { s: 'solar', f: 'neutral', t: "Is that a promise or a threat?" },
    { s: 'akihiko', f: 'happy', t: "Yes." },
    { n: "He kissed her then, in the middle of the bridge, in the middle of the snow, the scarf pulling them closer every time either of them moved, so that there was nowhere to go but in. His hands were cold on her face. His mouth wasn't. Snow caught on his eyelashes and melted against her cheek, and somewhere across the water a bell began to ring in Port Island, ten slow strokes, and for the first time she could remember, she didn't count them." },
    { cg: null },
    { s: 'solar', f: 'happy', t: "Merry Christmas, Aki." },
    { s: 'akihiko', f: 'blushing', t: "...Say it again tomorrow." },
    { n: "She did. And the day after that, just to watch his ears go red, which they did, every single time." }
  ] }
});
