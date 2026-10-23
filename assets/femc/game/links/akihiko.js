/* Akihiko Sanada · XVII The Star. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Structure: a meter link to rank 15 (maxRank). Ranks 1-10 run April to December (rank 10 is the P3 MAX: perks, trees, the
   Christmas rules). The romance can start at rank 7 (9/1, a choice at the end that sets route 'romance'; not offered on
   Shinjiro's romance route) or at rank 9 (11/2, the route choice, which for a couple from rank 7 becomes "does it still
   hold"). Ranks 11-15 are February (2/1, 2/6, 2/12, 2/19, 2/26), each branched by the locked route (heading: 'stay' / the
   three worlds R, S, H / 'true') and by romance or friendship. afterMax plays between rank 10 and rank 11's date and after
   15; stretchHangouts fill the meter in February. His living world for this stretch (the Gekkoukan buzz routines, texts,
   a February late night) is data/living-r15-akihiko.js. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'akihiko', name: 'Akihiko Sanada', short: 'Akihiko', arcana: 'Star', numeral: 'XVII', from: 'Persona 3',
  kind: 'sees',
  romance: 'canon', maxRank: 15,
  starts: '4/20',
  home: { area: 'Gekkoukan High', spot: 'Boxing Club', slot: 'after', days: [1, 2, 3, 4, 5, 6],
          hint: 'After school, Monday to Saturday, at the boxing club.' },
  // School's shut on the breaks, so he's at the dorm in the evenings (rank 6 is a summer-break roof scene on 8/10).
  summerHome: { area: 'dorm', spot: 'Rooftop', slot: 'evening', days: [0, 1, 2, 3, 4, 5, 6],
                hint: 'Summer evenings, on the dorm roof, when the heat finally lets go of the concrete.' },
  winterHome: { area: 'dorm', spot: 'Lounge', slot: 'evening', days: [0, 1, 2, 3, 4, 5, 6],
                hint: 'Winter break evenings, in the dorm lounge, with the heater and a protein shake.' },
  approach: "Akihiko is on the bench by the boxing club ring with his ribs taped under his shirt, glaring at a heavy bag he isn't allowed to touch, and he sits up straighter when he sees you in the doorway.",
  cast: { kondo: 'Kondo', fanclub: 'Fan Club Girl', ota: 'Ōta', maki: 'Maki', sonoda: 'Sonoda' },
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
  // February, rank 10+ (core.js stretchHangouts): time together while the meter fills between ranks 11-15.
  stretchHangouts: [
    [
      { place: 'Iwatodai · Riverside', time: 'Early Morning' },
      { n: "Five o'clock in February was a different animal from five o'clock in any other month. Black, still, and so cold that the air felt solid, like running through something that had been poured, and every bench along the river had grown a skin of frost overnight that glittered under the streetlights as if somebody had gone along the path with a sieve of salt." },
      { s: 'akihiko', f: 'happy', t: "Coldest morning of the year. I checked. We're the only two people out here. Possibly the only two people awake in the prefecture." },
      { s: 'solar', f: 'neutral', t: "That's not the brag you think it is." },
      { s: 'akihiko', f: 'happy', t: "It's exactly the brag I think it is." },
      { n: "By the second bridge her lungs had stopped hurting and started burning, which was better, and the sky over the bay had gone from black to the color of pencil lead, and he was doing his counting voice under his breath, benches, she realized, he was counting the benches, which was her thing, and which he had apparently taken without asking, sometime in the last ten months, and kept." },
      { choose: [
        { t: "(Sprint the frosted stretch. Leave him behind.)", notes: 3, then: [
          { n: "She went, and the frost cracked under her shoes like sugar, and for six benches she was ahead of him and the whole river was hers, and then he came past her at the seventh with his breath going up like a train's, grinning, and she caught him at the ninth, and they came into the bridge level, gasping, and neither of them would call it." }
        ] },
        { t: "(Write your time in the frost on the railing.)", notes: 3, then: [
          { n: "At the bridge she wrote it with one finger in the frost on the railing, the minutes and the seconds, small and neat, and he leaned over her shoulder and read it and wrote his underneath, and then, after thinking about it, drew a very bad sun in the corner, and they left it there for the morning to find and melt." }
        ] },
        { t: "(Slow down. Watch the sun come up.)", notes: 2, then: [
          { n: "She slowed, and then stopped at the rail, and he came back for her, frowning, and then saw what she was looking at and stopped frowning. Gray to silver to gold, all at once, the way it only ever does over water." }
        ] }
      ] },
      { ifRoute: 'romance', then: [
        { n: "On the walk back he took her hands, both of them, and held them between his inside his jacket, against his chest, where it was warm, and walked backwards like that for twenty meters with her hands there, very seriously, as if it were part of the cool-down, until a man delivering newspapers on a bicycle went by and looked at them, and he let go, and went red, and took them again at the corner." }
      ], else: [
        { n: "On the walk back he gave her his gloves without asking, because hers were thin, and wore his hands in his armpits for the rest of the way like a penguin, and said he was fine, and said it again at the door, through his teeth, and she made him hold his hands round a mug of tea in the kitchen for ten minutes before he was allowed to take his shoes off." }
      ] }
    ],
    [
      { place: 'Gekkoukan High · Boxing Club', time: 'After School' },
      { n: "The boxing club after practice, the first-years gone home with their towels over their heads, the heater ticking under the high windows and losing, and Akihiko sitting on the edge of the ring holding out two rolls of hand wraps to her, one in each hand, with a very particular look on his face." },
      { s: 'akihiko', f: 'neutral', t: "In June I did yours. Nobody's ever done mine. I do my own. Always have, since I was nine." },
      { s: 'akihiko', f: 'blushing', t: "It's not a tournament. It's nothing. I just wanted to see if you remembered how." },
      { n: "She took his right hand by the wrist and turned it palm down, businesslike, the way he'd turned hers in June, and hooked the loop over his thumb. His hand was huge and rough and very still, and he didn't help, which she suspected was taking everything he had." },
      { choose: [
        { t: "(Count it out loud. Three times round the wrist.)", notes: 3, then: [
          { n: "One, two, three. She said it the way he had in June, low, one pass laid down over the last so neatly it looked printed, and he went quiet so that hers could be the only count in the room, and when she smoothed the end down flat with her thumb he looked at it for a long time the way you look at your own name in somebody else's handwriting." },
          { s: 'akihiko', f: 'happy', t: "...That's better than mine." },
          { s: 'solar', f: 'neutral', t: "I had a good coach." }
        ] },
        { t: "(Do it perfectly. Exactly the way he showed you.)", notes: 3, then: [
          { n: "She did it perfectly, over and under and across and back, and he watched every pass with the absorbed, careful face of a man watching somebody defuse something, and when she was done he made a fist and opened it and made a fist again and said nothing, and then hit the heavy bag with it, once, a flat clean crack, and turned round to her looking about twelve years old." }
        ] },
        { t: "(Do it badly on purpose, to see what he does.)", notes: 2, then: [
          { n: "She did it badly on purpose, loose over the knuckles, crooked at the thumb, and he looked down at it and his whole body leaned toward fixing it and he did not fix it. He sat on his free hand. He said *elbow* once, to nobody, and then hit the bag with it anyway, crooked, and it held." }
        ] }
      ] },
      { ifRoute: 'romance', then: [
        { n: "When she'd done the left too he didn't hit anything. He put both wrapped hands on either side of her face, very lightly, the way you'd hold something you'd been told not to drop, and kissed her once in the middle of the empty ring, and then said, quite seriously, that that had been against club rules, and that he'd make a note of it." }
      ], else: [
        { n: "When she'd done the left too he held the mitts and made her hit, and she hit, and the sound came out flat and sharp, and he said *there*, and *again*, and she went again, and the heater ticked, and it was, for twenty minutes, exactly the same as June except that everything was different." }
      ] }
    ],
    [
      { place: 'Iwatodai Dorm · Lounge', time: 'Evening' },
      { n: "Ken had a notebook open on the lounge table and a pencil behind his ear and the expression of a boy who'd been working up to something for a week. Akihiko was on the floor in front of him, cross-legged, with Koromaru's head in his lap, being interviewed." },
      { s: 'ken', f: 'serious', t: "After you graduate, I'll need a plan. A training plan. For when nobody's checking. Written down." },
      { s: 'akihiko', f: 'neutral', t: "Somebody'll be checking." },
      { s: 'ken', f: 'serious', t: "But in case. Written down." },
      { n: "So they wrote it down. Akihiko dictated, in his rapid, thorough, round-by-round voice, push-ups and roadwork and rest days that he said were mandatory in a tone that suggested he'd never personally taken one, and Ken wrote it all in careful, slanting capitals, and Solar sat on the arm of the sofa and was consulted on everything as if she were the club doctor." },
      { choose: [
        { t: "(Write the rest days in yourself. In pen. Underlined.)", notes: 3, then: [
          { n: "She took the pencil and then thought better of it and took a pen out of her own pocket and wrote *REST DAY* across every Sunday for the next three months, underlined twice. Akihiko looked at it and opened his mouth and she looked at him and he closed it. Ken looked from one to the other and wrote, very small, at the bottom of the page, *Solar-san says*." }
        ] },
        { t: "(Put Koromaru in charge of enforcement.)", notes: 3, then: [
          { s: 'ken', f: 'happy', t: "...Koromaru. Can you do that?" },
          { s: 'koromaru', f: 'happy', t: "Woof!" },
          { n: "He took the job very seriously. He took it, in fact, that same night, and was found at a quarter to five the next morning lying across Ken's door, as if somebody had told him what time roadwork started, and Akihiko, coming down the hall in his running clothes, stood over him for a long moment and then said *good boy* in a voice that didn't quite work." }
        ] },
        { t: "(Add a page at the back. Snacks.)", notes: 2, then: [
          { n: "She added a page at the back headed *SNACKS*, and Akihiko dictated eleven different kinds of protein, and Ken wrote them all down, and then under them, unprompted, *(ice cream on Sundays)*, and looked up at both of them daring them to argue, and neither of them did." }
        ] }
      ] },
      { n: "When it was done Ken read the whole plan back aloud from the top, in his clear careful voice, and closed the notebook, and held it against his chest the way you hold something you've been handed rather than something you've made, and went up to bed without saying goodnight, which was how she knew." }
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
      // The romance can start here (rank-15 batch, 2026-10-21): one option sets the route, the other leaves it to rank 9.
      // Not offered while Solar is on Shinjiro's romance route; there the scene ends as it always did.
      { ifRomance: 'shinjiro', then: [
        { s: 'akihiko', f: 'blushing', t: "...Class. We should go to class." },
        { n: "He took the stairs two at a time. She followed slower, one hand on the cold rail, her face hot, and decided very firmly on the second landing that it was the wind, and on the first landing that it wasn't, and by the time she reached her classroom she had stopped deciding anything at all." }
      ], else: [
        { choose: [
          { t: "(Catch his hand before he can take it back.)", route: 'romance', notes: 3, then: [
            { n: "She caught it. His hand was still at her ear, his knuckles cold from the railing, and she put hers over it and held it there against the side of her face, and felt him stop breathing, the whole of him, the way he stopped at the top of a lap before he let the air go, and then felt him remember how." },
            { s: 'akihiko', f: 'surprised', t: "..." },
            { s: 'solar', f: 'neutral', t: "It's not the wind. In case you were wondering." },
            { s: 'akihiko', f: 'blushing', t: "...I wasn't wondering. I was hoping. That's different. I've been hoping since about April." },
            { s: 'akihiko', f: 'blushing', t: "The ruler. Four centimeters. I thought, oh no." },
            { n: "He didn't do anything else. He didn't kiss her, he didn't say anything that needed a second sentence after it, he just turned his hand over under hers so that it was holding hers instead, rough from the tape and warm now, and they stood at the railing with the wind going straight through both of them while the second bell went, and then the end of the second bell, and the stairwell below them went quiet the way stairwells do when everybody else is already where they're supposed to be." },
            { s: 'akihiko', f: 'blushing', t: "We're late. I've never been late. Not once. Three years." },
            { s: 'solar', f: 'happy', t: "How does it feel?" },
            { s: 'akihiko', f: 'blushing', t: "Great. Terrible. Great." },
            { n: "He let go of her hand at the stairwell door, because there was a first-year on the stairs, and took it again on the landing, where there wasn't, for exactly one flight, and let go at the bottom like a man finishing a set, and went down the corridor to his classroom very fast without looking back. She stood at the bottom of the stairs with her face hot. She didn't decide anything about the wind on any landing at all. She'd already decided." }
          ] },
          { t: "(Let him go red. Don't say anything.)", notes: 3, then: [
            { s: 'akihiko', f: 'blushing', t: "...Class. We should go to class." },
            { n: "He took the stairs two at a time. She followed slower, one hand on the cold rail, her face hot, and decided very firmly on the second landing that it was the wind, and on the first landing that it wasn't, and by the time she reached her classroom she had stopped deciding anything at all." }
          ] }
        ] }
      ] }
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
      // A couple since rank 7 (9/1) gets his question as what it is now: does it still hold, with all of them in the house.
      { ifRoute: 'romance', then: [
        { s: 'akihiko', f: 'blushing', t: "I know what you said. On the school roof. In September. I've been living off it for two months." },
        { s: 'akihiko', f: 'serious-3', t: "But that was before any of them came up the stairs. Before anybody stood in the lounge and said home to you like it was your name. I'm not asking you to take it back. I'd never ask you that." },
        { s: 'akihiko', f: 'sad-2', t: "I'm asking if it still holds. Now. With all of them in the house." },
        { n: "He said it to the can, and then, because that was cowardly and he knew it, he made himself look up and say it again with his eyes, and she watched it cost him, the whole of it, a boy who would walk into a ring with anybody asking one question he couldn't block." },
        { choose: [
          { t: "It holds.", notes: 3, then: [
            { s: 'solar', f: 'neutral', t: "It holds. They came for me. I know they did. It still holds." },
            { s: 'akihiko', f: 'surprised', t: "..." },
            { s: 'akihiko', f: 'blushing', t: "...Okay. Okay. I." },
            { n: "He put the can down on the ledge. He picked it up again. He put it down, and left it there, like a man who'd finally found somewhere to put his hands and didn't trust himself with anything else in them." }
          ] },
          { t: "(Take his hand. Put it in your coat pocket with yours.)", notes: 3, then: [
            { n: "She didn't say anything. She took his hand off the cold can, which was taking the heat out of it, and put it in her own coat pocket with hers, and left them there, and looked at him." },
            { s: 'akihiko', f: 'blushing', t: "...That's my move. I do that." },
            { s: 'solar', f: 'neutral', t: "I learned it from somebody." }
          ] }
        ] },
        { cg: 'romance-akihiko-rooftop' },
        { s: 'akihiko', f: 'blushing', t: "I told you. The ruler. I fell first, and I'm still falling, and I keep thinking somebody's going to tell me I have to stop." },
        { s: 'solar', f: 'happy', t: "Nobody's telling you that." },
        { s: 'akihiko', f: 'blushing', t: "Good. I'm fast. I'd only lose them anyway." },
        { n: "He leaned down until his forehead rested against hers, and stayed there, his breath warm and coffee-bitter in the cold between them, his eyes closed, and he didn't do anything else at all. He just stayed. It was the most decided she had ever seen him be about anything that wasn't a punch." },
        { cg: null },
        { n: "They stayed up there until the coffee was ice and the last lit window on the girls' floor went dark below them, and he didn't let go of her hand once, not even when she shivered, which she did on purpose twice to see what he'd do. What he did was turn the collar of her coat up with his free hand, one side and then the other, and look at the moon as if that had always been the plan." }
      ], else: [
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
    ] },
    // ── Ranks 11-15: February. Free attendance for the third years; he graduates on 3/5. Every rank branches by the locked
    //    route (stay: she's staying; R / S / H: she leaves in March; true: restraint) and by romance / best friend. ──
    { after: '2/1', title: '11: the same question', place: 'Gekkoukan High · Shoe Lockers', time: 'After School', scene: [
      { n: "February came in hard and bright and mean, the kind of cold that didn't bother with snow, and on the first day of it the third floor of Gekkoukan went quiet. Free attendance. Half the desks in every third-year classroom empty, their owners at cram school or at entrance exams or at home under a kotatsu calling it cram school, and the ones who came in anyway came in with scarves up to their eyes and flashcards on rings, and left the minute the bell let them." },
      { n: "Solar came in anyway. So, she'd been told by three separate people before lunch, did Sanada-senpai, every single day, which nobody could understand, since as far as anyone knew he had nothing left to sit for, and since he spent every lesson looking out of the window at the track like a dog at a closed door." },
      { n: "There were four of them at the shoe lockers when she came down. The same four. Seven months older and in winter scarves, and the hair clips the same, which she found she was oddly glad about, the way you're glad about a shop that hasn't changed its sign. The one in front was called Ōta. Solar had learned it sometime in the autumn without ever meaning to, the way you learn the name of a weather system." },
      { s: 'ota', t: "Solar-senpai. We're sorry. We know it's free attendance. We know you probably have somewhere to be." },
      { s: 'ota', t: "We just have to ask. One more time. Properly. Because it's February, and he graduates in March, and we have to know what we're dealing with before the fourteenth." },
      { ifRoute: 'romance', then: [
        { s: 'ota', t: "Is it true? You and Akihiko-senpai?" },
        { n: "It was the same question. The same lockers, the same four faces, the same bright hungry patience, and she felt it again, the click in another room, her chin starting up a fraction and her mouth getting ready to curve, the good face, the hallway face, sliding toward her like a coat somebody was holding out for her to step into. It was right there. It had always been right there." },
        { choose: [
          { t: "(Leave the coat where it is. Answer with your own face.)", notes: 3, then: [
            { s: 'solar', f: 'neutral', t: "Yes." },
            { n: "That was all. No smile to go with it, nothing warm and easy and well-made, just her face, the one she had at five in the morning, telling them. It felt like stepping out of a warm room without a jacket. It felt, she noticed, completely fine." },
            { n: "Nobody said anything for a second. Then the smallest of them, at the back, burst into tears, all at once and with tremendous dignity, and Ōta put an arm round her without looking and kept her eyes on Solar." },
            { s: 'ota', t: "...Okay. Thank you. For saying it like that. Nobody ever says anything to us like that." }
          ] },
          { t: "Ask him.", notes: 2, then: [
            { s: 'ota', t: "We did. Yesterday. At the gate." },
            { s: 'ota', t: "He said yes so loudly the whole baseball team turned around. Then he said sorry. Then he said yes again." },
            { n: "Solar had nothing to say to that. Her face, she noticed, had already decided what to do on its own, and it wasn't the hallway one." }
          ] },
          { t: "(Put the hallway face on. Just to see if it still fits.)", notes: 1, then: [
            { n: "She reached for it. It was there. It went on the way it always had, smooth and warm and somebody else's, and she stood behind it and said something kind and vague about how busy he was this term, and the four of them looked back at her with a sort of patient pity, because they'd heard, everybody had heard, and the face didn't fit over that anymore. It was like a coat from a winter when she'd been smaller." }
          ] }
        ] }
      ], else: [
        { s: 'ota', t: "Is it true you're not? Because people say you're the only one he runs with. And Hiyori saw you at the hospital in October, with him. And he lets you hold the bag. Nobody holds the bag." },
        { n: "It was nearly the same question. The same lockers, the same four faces, the same bright hungry patience, and she felt it again, the click in another room, her chin starting up a fraction and her mouth getting ready to curve, the good face, the hallway face, sliding toward her like a coat somebody was holding out for her to step into. It was right there. It had always been right there." },
        { choose: [
          { t: "(Leave the coat where it is.) He's my best friend. That's the whole thing.", notes: 3, then: [
            { s: 'solar', f: 'neutral', t: "He's my best friend. That's the whole thing. It's not a small thing." },
            { n: "No smile with it. Just her face, the five a.m. one, telling them, and it felt like stepping out of a warm room without a jacket, and it felt, she noticed, completely fine." },
            { s: 'ota', t: "...Okay. We believe you. Nobody's ever said it to us like that." },
            { s: 'ota', t: "Then you're the only person in this school who can tell us what he actually likes. Not protein. Everybody gives him protein." }
          ] },
          { t: "Ask him.", notes: 2, then: [
            { s: 'ota', t: "We did. He said best friend like it was a rank. Like there was a belt for it." },
            { n: "There was, Solar thought, probably a belt for it. He'd probably made it himself." }
          ] },
          { t: "(Put the hallway face on. Just to see if it still fits.)", notes: 1, then: [
            { n: "She reached for it. It was there. It went on the way it always had, smooth and warm and somebody else's, and she stood behind it and said something kind and vague about how busy he was this term, and the four of them looked back at her with a sort of patient pity, as if they could see the edges of it now too. It was like a coat from a winter when she'd been smaller." }
          ] }
        ] }
      ] },
      { n: "When she turned around he was at the end of the row of lockers with his bag over one shoulder and his scarf in his hand, and he had, obviously, been standing there for some time. Some things didn't change. She found she didn't want them to." },
      { s: 'akihiko', f: 'neutral', t: "You didn't do the face." },
      { choose: [
        { t: "I didn't need it.", notes: 3, then: [
          { s: 'akihiko', f: 'happy', t: "...Yeah. I saw." },
          { n: "He said it the way he said *there* when she threw one right, as if she'd landed something clean and he'd been in the corner for it, and the four girls by the lockers watched him say it and looked at each other and didn't say a word." }
        ] },
        { t: "(Give him the bench one instead.)", notes: 3, then: [
          { n: "She gave him the bench face. Three more benches, shut up, five in the morning. He saw it, and went red from the collar up, exactly the way he had at the dorm door in July, and the four girls by the lockers saw him go red, and one of them made a small high sound like a kettle just starting." }
        ] },
        { t: "How long were you standing there?", notes: 2, then: [
          { s: 'akihiko', f: 'neutral', t: "Since the first senpai." },
          { s: 'akihiko', f: 'blushing', t: "I was going to come over. Then I thought, she's got it. So I didn't." }
        ] }
      ] },
      { place: 'Gekkoukan High · Boxing Club', time: 'After School' },
      { n: "The boxing club had a new captain. A second-year, handed the key in January in front of everybody with a short speech that Akihiko had written on an index card and then not used, who now ran practice in a loud, careful voice and glanced at the bench every few minutes, because Akihiko was on it." },
      { n: "He'd handed over. He was on free attendance. He had told the club, the captain, the coach and Mitsuru, in that order, that he would only be watching, and he was sitting on the bench by the ring with his hands flat on his knees exactly the way he had in April with his ribs taped, glaring at the heavy bag he had decided he wasn't allowed to touch, and it was clearly killing him." },
      { s: 'kondo', t: "Senpai. You said you'd only watch." },
      { s: 'akihiko', f: 'serious', t: "I am only watching." },
      { s: 'kondo', t: "You're watching very loud." },
      { n: "Kondo had stopped dropping his hands after he hit sometime around November. He'd started dropping his elbow instead. Akihiko had seen it from the doorway, Solar could tell, and had sat down on the bench anyway with the face of a man holding a full glass of water at arm's length and waiting for somebody to take it off him." },
      { choose: [
        { t: "(Get the ruler out of his bag. Test the first-years, the way he used to.)", notes: 3, then: [
          { n: "The ruler was where it always was, in the side pocket, thirty centimeters with somebody's initials gouged into the end. She held it up by the top between her finger and thumb, the way a magician holds up a card, and the first-years lined up without being told, and she dropped it without warning, which they had not expected, and they caught it at nine and ten and twelve, and one of them missed it entirely and it clattered on the floor." },
          { s: 'akihiko', f: 'surprised', t: "...You do it like me." },
          { s: 'solar', f: 'neutral', t: "I learned it from somebody." },
          { n: "He sat back on the bench and watched her do his job, hands still flat on his knees, and the look on his face was one she'd have paid a great deal of money for a photograph of, and found she didn't need one." }
        ] },
        { t: "Kondo. Elbow.", notes: 3, then: [
          { s: 'kondo', t: "...Senpai. She sounds like you." },
          { s: 'akihiko', f: 'happy', t: "Ha! She does. Elbow, Kondo." },
          { n: "Kondo fixed his elbow. Akihiko didn't get up. He sat on his hands instead, both of them, literally, the way you'd sit on a dog that wanted to go after a cat, and looked at her sideways like they were in on something together, which they were." }
        ] },
        { t: "(Sit on the bench beside him. Hands flat on your knees.)", notes: 2, then: [
          { n: "She sat at the other end of the bench and put her hands flat on her knees exactly the way he had his. He looked at her hands. He looked at his. He laughed once, through his nose, and they sat like that for twenty minutes, two people not coaching, very hard, while the first-years sweated and tried not to be looked at." }
        ] }
      ] },
      { place: 'Gekkoukan High · Front Gate', time: 'Evening' },
      { n: "It was dark by five now and colder by the minute. At the door the new captain had asked him, very formally, with a bow, whether he'd come back in July for the summer tournament and sit in the corner. Akihiko had said yes before the bow was finished." },
      { ifHeading: 'stay', then: [
        { n: "They walked down the hill under the streetlights with their breath going up white, and he talked about July the whole way, who'd fight at which weight, what Kondo had to fix by then, in the bright happy blow-by-blow of a man planning something he was going to be there for." },
        { s: 'akihiko', f: 'happy', t: "The corner. Me, in the corner. Kondo's going to hate it. I'm going to be unbearable." },
        { s: 'akihiko', f: 'neutral', t: "...You didn't like the lights. At the tournament. I remember." },
        { choose: [
          { t: "You still owe me a seat in the back. Where it's dark.", notes: 3, then: [
            { s: 'akihiko', f: 'surprised', t: "...You remember that?" },
            { s: 'solar', f: 'neutral', t: "You said next year. Like it was a place on a map." },
            { s: 'akihiko', f: 'happy', t: "It is. It's July. Back row, left side, by the fire door. I'll save it with my bag." },
            { n: "Next year. He said it the way he'd said it in July, easily, a known distance, somewhere you could run to before breakfast, and this time she didn't have to not correct him. She just let it be true, and walked down the hill inside it." }
          ] },
          { t: "I'll sit in the front. Under the lights. I'll count for you.", notes: 3, then: [
            { s: 'akihiko', f: 'surprised', t: "Under the lights?" },
            { s: 'solar', f: 'neutral', t: "I'll bring a hat." },
            { n: "He laughed so hard he had to stop walking and put a hand on the wall, and said that was the best thing he'd heard all year, a hat, and then, when he'd stopped, looked at her for a second longer than the joke needed, like someone who'd been handed a time on a lap that was better than he'd thought she had in her." }
          ] },
          { t: "Go. They need you.", notes: 2, then: [
            { s: 'akihiko', f: 'neutral', t: "They don't need me. They need somebody to watch them very loud." },
            { s: 'akihiko', f: 'happy', t: "...Which is me. Okay. Fine." }
          ] }
        ] }
      ], else: [
        { ifHeading: 'true', then: [
          { n: "At the gate she stopped, for no reason she could have given, and looked back up the hill at the school. The lit windows on the second floor and the dark ones on the third, the gym roof, the track, the line of the fence against a sky going from blue to nothing. She found she was counting the windows. She found she didn't want to stop." },
          { s: 'akihiko', f: 'neutral', t: "What?" },
          { choose: [
            { t: "Drop the ruler for me. One more time.", notes: 3, then: [
              { n: "He didn't ask why. He took it out of his bag right there under the streetlight and held it up by the top, and she held her finger and thumb open at the bottom, and he let go without warning, which she had expected, and her hand closed before she'd decided anything." },
              { s: 'akihiko', f: 'happy', t: "Four. Still four." },
              { s: 'solar', f: 'neutral', t: "Still four." },
              { n: "She didn't know why she'd needed to know that. She held the ruler a second longer than she needed to before she gave it back, and he let her, and didn't ask." }
            ] },
            { t: "(Count the windows. All of them. Out loud.)", notes: 3, then: [
              { n: "She counted, out loud, under her breath, the way she did, and he stood at the gate in the cold beside her and counted with her without being asked, and they got different numbers, and argued about whether the gym counted, and counted again, and got different numbers again, and he said that was fine, that meant they'd have to come back and check." }
            ] },
            { t: "Nothing. Come on.", notes: 1, then: [
              { n: "He came on. He looked back once, at the windows, the way you look back at something somebody else was looking at, and didn't see anything, and caught her up." }
            ] }
          ] }
        ], else: [
          { n: "They walked down the hill under the streetlights, and he was halfway into a sentence about July, Kondo's elbow, which weight the new captain ought to fight at, when it stopped. Not him. The sentence. She heard it stop. She watched it go through him like a hand on a brake lever, the way it had on the school roof in September, and she knew exactly which two words he'd been about to say and what they'd run into." },
          { s: 'akihiko', f: 'neutral', t: "...Kondo's going to be fine. That's all I was going to say." },
          { choose: [
            { t: "Say it anyway. Next year.", notes: 3, then: [
              { s: 'akihiko', f: 'sad-2', t: "..." },
              { s: 'akihiko', f: 'neutral', t: "Next year I'm in the corner. There's a seat at the back, left side, by the fire door. It's dark there. I'd have saved it for you." },
              { s: 'akihiko', f: 'serious-3', t: "That's not me asking. That's just where the seat is." },
              { n: "She put it on the list. It was a strange thing to put there, a seat in a gym in July that she was never going to sit in, and she put it there anyway, carefully, the way you put away something somebody gave you that doesn't fit, because they gave it to you." }
            ] },
            { t: "(Walk on the side the wind's coming from.)", notes: 3, then: [
              { n: "She moved round him to the bay side, where the wind was. He noticed, and frowned, and moved round her back. She moved again. They went the whole way down the hill like that, swapping sides in the cold like two people doing a drill neither of them would name, until by the bottom they were laughing too hard to keep it up, and the sentence about July was somewhere back up the hill, where they'd left it." }
            ] },
            { t: "Kondo's going to be great.", notes: 2, then: [
              { s: 'akihiko', f: 'happy', t: "He is. He's going to drop his elbow for a year. Then he's going to be great." }
            ] }
          ] }
        ] }
      ] },
      { ifRoute: 'romance', then: [
        { n: "At the bottom of the hill he took her hand and put it in his coat pocket with his, where it was warm, and where four second-years at the bike racks by the gate could see it, and she suspected, from the color of his ears, that that was at least half the point." }
      ], else: [
        { n: "At the bottom of the hill he bumped her shoulder with his, hard enough that she had to put a hand out to the wall, which was the most Akihiko thing he could possibly have done, and four second-years at the bike racks watched it happen and looked, she thought, very slightly relieved." }
      ] }
    ] },

    { after: '2/6', title: '12: the whole team', place: 'Iwatodai · Riverside', time: 'After School', scene: [
      { n: "It was Akihiko's idea, which meant nobody had agreed to it and everybody was there. Saturday, half a day of school, and at two o'clock the whole of S.E.E.S. was standing on the river path in whatever they owned that could be called running clothes, in a cold so clean it made your teeth ache, while he walked up and down in front of them like a coach before a final." },
      { s: 'akihiko', f: 'happy', t: "Last roadwork. My last one as a student here. Bridge and back. Everybody runs. Nobody walks. Koro, you can walk." },
      { n: "Koromaru did not walk. Koromaru had been waiting for this his whole life. Ken had double-knotted his shoes and set his face. Aigis was in her uniform, because she said running clothes were for people who could get cold. Fuuka had been given the stopwatch, and a bicycle, and a whistle she had not been told how to use and was clearly afraid of. Yukari had come in a white coat that was nobody's idea of running clothes and was saying so to anyone who'd listen. Mitsuru had said no at breakfast, in two separate sentences, and was standing at the end of the line in a tracksuit with the Kirijo crest on it, stretching, saying nothing at all." },
      { n: "And Junpei was on the bench. Lying on it, face up, arms crossed over his chest, like a man laid out for his own funeral." },
      { s: 'junpei', f: 'sad', t: "I'm not running. I'm being a supportive presence. From this bench. It's a very important role." },
      { s: 'akihiko', f: 'serious', t: "Up." },
      { choose: [
        { t: "(Take the front. Set a pace the back can hold.)", notes: 3, then: [
          { n: "She went out at the front and set it. Slow enough for Ken, fast enough that Akihiko wouldn't yell, which was a narrow strip of road to find, and she found it without thinking, the way she'd found a brake lever in May, and the whole team strung out behind her along the water. Akihiko ran at the back, herding. When she looked round at the first bridge he wasn't watching the team. He was watching her lead it." }
        ] },
        { t: "(Drag Junpei off the bench by the ankle.)", notes: 3, then: [
          { s: 'junpei', f: 'surprised', t: "Leader! Betrayal! In front of everyone!" },
          { s: 'akihiko', f: 'happy', t: "Good form." },
          { n: "Junpei came off the bench in one long slide and lay on the path where he'd landed, considering his options, and Koromaru sat on his chest, and that settled it." }
        ] },
        { t: "(Race Akihiko from the start. Leave them all behind.)", notes: 2, then: [
          { n: "She went. He went, grinning, for about two hundred meters, before he remembered he was the coach and dropped back yelling *pace, PACE*, and she was alone at the front with nobody to race, which was, Yukari told her at the bridge, not team building, that was just her." }
        ] }
      ] },
      { n: "By the second bridge the team was a line, and by the turn the line was a smear, Ken grimly upright, Aigis not breathing hard because she didn't, Fuuka ringing her bell at people who weren't in the way, Mitsuru in fourth place without having seemed to try, and Junpei somewhere in the far distance, a small blue shape going steadily the wrong color." },
      { ifRoute: 'romance', then: [
        { n: "Afterward, on the grass by the bridge, Akihiko made everyone stretch, and stretched next to her, and somewhere around the hamstrings they ended up doing it in time without meaning to, reach and hold and breathe, his shoulder a hand's width from hers, and Yukari, upside down over her own knees, saw." },
        { s: 'yukari', f: 'serious', t: "Oh my god. They're stretching in sync. They're doing it on purpose. I'm going to throw up in the river." },
        { s: 'junpei', f: 'happy', t: "Senpai. Senpai. Real talk. Man to man. I know you've got a girlfriend. Everybody knows. The fan club put out a statement." },
        { s: 'junpei', f: 'happy', t: "But you love me more, though. Right? I was here first." },
        { s: 'akihiko', f: 'neutral', t: "You weren't here first. She was on a floor in April. You were in a convenience store." },
        { s: 'junpei', f: 'sad', t: "That's not a no." },
        { choose: [
          { t: "He loves you a normal amount, Junpei.", notes: 3, then: [
            { s: 'junpei', f: 'surprised', t: "A NORMAL amount?" },
            { s: 'akihiko', f: 'happy', t: "That's accurate." },
            { n: "Junpei lay down flat on the grass and announced he wasn't getting up, and Koromaru lay down on Junpei, and Yukari took a photograph for evidence, of what she didn't say." }
          ] },
          { t: "(Take Akihiko's hand. Hold it up where Yukari can see.)", notes: 3, then: [
            { n: "She took his hand and held it up between them like the winner of a round, at Yukari. Akihiko went red to the ears and let her. Yukari made a long noise of total disgust and grabbed Fuuka's arm and said *Fuuka, look, look at them*, and Fuuka looked, and said they were sweet." },
            { s: 'yukari', f: 'blushing', t: "That's worse, Fuuka. Sweet is worse." }
          ] },
          { t: "Answer him, senpai.", notes: 2, then: [
            { s: 'akihiko', f: 'neutral', t: "No." },
            { s: 'junpei', f: 'surprised', t: "No you won't answer, or no you don't—" },
            { s: 'akihiko', f: 'happy', t: "Bridge again. Go." }
          ] }
        ] }
      ], else: [
        { n: "Afterward, on the grass by the bridge, Akihiko made everyone stretch, and stretched next to her, and somewhere around the hamstrings they ended up doing it in time without meaning to, reach and hold and breathe, the way they'd done it on this path every morning since the spring, and Yukari, upside down over her own knees, saw." },
        { s: 'yukari', f: 'serious', t: "You two are the most exhausting best friends I have ever seen in my life. You stretch in sync. It's like watching a mirror do yoga. I'm so disgusted." },
        { s: 'junpei', f: 'happy', t: "Okay, but senpai. Real talk. Man to man. She's your best friend. Fine. Great. I support it." },
        { s: 'junpei', f: 'happy', t: "But you love me more, though. Right? I was your best friend first. Since April. I carried your bag that time." },
        { s: 'akihiko', f: 'neutral', t: "You carried it to the wrong floor." },
        { choose: [
          { t: "He's allowed two. It's in the rules.", notes: 3, then: [
            { s: 'akihiko', f: 'happy', t: "I'm allowed two." },
            { s: 'junpei', f: 'serious', t: "RANKED, though. In what order. I need to know the order." },
            { s: 'akihiko', f: 'neutral', t: "Bridge again. Go." }
          ] },
          { t: "(Put Junpei in a headlock. Gently.)", notes: 3, then: [
            { n: "She put him in a headlock, gently, from behind, the way Akihiko had shown her in June, and Akihiko watched her do it with enormous professional approval and said her form was good, and Junpei, folded in half, said he could see the whole friendship from down here and it was a cult." }
          ] },
          { t: "I'm the best friend. You're the mascot.", notes: 2, then: [
            { s: 'junpei', f: 'surprised', t: "The MASCOT?" },
            { s: 'akihiko', f: 'happy', t: "Ha! That's. Yeah. That's it exactly." }
          ] }
        ] }
      ] },
      { place: 'Iwatodai Dorm · Dining Room', time: 'Evening' },
      { n: "Dinner was Akihiko's too, which was the part everyone had been afraid of. Mitsuru had left a note on the fridge asking the rest of the household, very politely, to eat late tonight, and the team had the long table to itself for once. He had made, with Ken's help and against Fuuka's gentle advice, a pot of chicken and rice that he said was a recipe, and that tasted, Yukari said, like a recipe somebody had described to him over the phone, and everybody had seconds anyway, because they'd run eight kilometers, and because he'd made it." },
      { ifFlag: 'shinji-awake', then: [], else: [
        { n: "He'd made it in the big pot. Nobody said anything about the big pot. It sat on the stove where it always sat, and at some point in the evening somebody, without anybody seeing who, had set one extra bowl beside it, washed and dry and upside down." }
      ] },
      { s: 'akihiko', f: 'neutral', t: "Times. Fuuka. Everybody's times." },
      { s: 'fuuka', f: 'sad', t: "I wrote them on my hand. On the bicycle. I can't read my hand." },
      { n: "She held her hand out across the table. It was covered in numbers in blue pen, sideways and running into each other, and Solar, who had been reading her own handwriting in margins for ten months, took it and turned it toward the light." },
      { choose: [
        { t: "(Read them out slowest to fastest. Make every one sound like a win.)", notes: 3, then: [
          { n: "She read them slowest to fastest, and made every one sound like a personal best, which for most of them it was, and the table cheered each one like a horse coming in, and when she got to Ken's he went pink and sat up very straight and didn't say anything for the rest of the meal, and didn't stop smiling either." }
        ] },
        { t: "(Knock a minute off Junpei's. He'll never know.)", notes: 3, then: [
          { n: "Junpei's came out a minute faster than it had any right to be. He punched the air. Akihiko looked at her across the table. He knew. She watched him know. He said nothing at all, and gave Junpei the last of the rice." }
        ] },
        { t: "(Read only Mitsuru's. Slowly.)", notes: 2, then: [
          { n: "Mitsuru had beaten everyone but the two of them, by a good margin, without seeming to try. She accepted the table's astonishment with a small nod." },
          { s: 'mitsuru', f: 'neutral', t: "I had a good coach. In my first year. He made me run in the rain." }
        ] }
      ] },
      { ifHeading: 'stay', then: [
        { n: "It was Ken who said it, over the last of the rice, the way kids say things, straight out, with no idea there was anything underneath." },
        { s: 'ken', f: 'neutral', t: "Who's going to make us run when Akihiko-senpai's gone?" },
        { n: "The table went quiet. Not the bad quiet, the other kind. Akihiko looked at his bowl. Mitsuru looked at Solar. So, one at a time, did everyone else." },
        { s: 'mitsuru', f: 'neutral', t: "I imagine that's been settled." },
        { choose: [
          { t: "Five o'clock. Everyone. Monday.", notes: 3, then: [
            { s: 'junpei', f: 'surprised', t: "MONDAY?" },
            { s: 'akihiko', f: 'happy', t: "Ha! You heard her." },
            { n: "Junpei put his forehead down on the table and left it there. Akihiko sat back with his chin on his hand and looked at her across the bowls like a man watching the best round of his life from the corner, and didn't try to hide it, and didn't need to, in that room." }
          ] },
          { t: "(Look at Akihiko. Let him answer.)", notes: 3, then: [
            { s: 'akihiko', f: 'neutral', t: "She is. She's been leading since May. I just ran next to her and took the credit." },
            { n: "He said it simply, a time on a lap, and went back to his rice, and Ken looked at Solar the way he'd looked at Akihiko all year, and she felt it land somewhere under her ribs, a small, warm, enormous weight, and kept it." }
          ] },
          { t: "Only Junpei.", notes: 2, then: [
            { s: 'junpei', f: 'sad', t: "Why is it always only Junpei." },
            { s: 'yukari', f: 'neutral', t: "You know why." }
          ] }
        ] }
      ], else: [
        { ifHeading: 'true', then: [
          { n: "Fuuka had brought her camera down, the little silver one, and after dinner she stood on a chair at the end of the table and made everybody squeeze into one end of the dining room for a photograph, which took eleven minutes, because Koromaru wouldn't face the right way and Junpei kept doing something with his fingers behind Ken's head." },
          { s: 'fuuka', f: 'happy', t: "Everybody look here! Akihiko-senpai, you don't have to flex. Akihiko-senpai. Senpai." },
          { choose: [
            { t: "Take another one. Just in case.", notes: 3, then: [
              { n: "Fuuka took another. Then, because Solar asked, another, and another, until Yukari asked what the case was, exactly, and Solar said she didn't know, which was true. Fuuka took one more anyway. It was blurred, everybody laughing at once at something Junpei had said, Akihiko's arm a smear across the frame, and it was the best of them." }
            ] },
            { t: "(Stand in the middle. Don't blink.)", notes: 3, then: [
              { n: "She stood in the middle, and didn't blink, and felt them pressing in on both sides, Yukari's elbow and Ken's shoulder and Akihiko's hand at her back and the warm weight of the dog against her shins, and held still the whole long second of the flash as though she were trying to be the one who remembered it." }
            ] },
            { t: "(Make Akihiko stop flexing.)", notes: 2, then: [
              { n: "She put a hand on his arm. He stopped flexing. He started again the moment she took it away, and Fuuka took the picture anyway, and he looked, in it, like a man who'd won something." }
            ] }
          ] }
        ], else: [
          { n: "It was Ken who said it, over the last of the rice, the way kids say things, straight out, with no idea there was anything underneath." },
          { s: 'ken', f: 'neutral', t: "Will we still do this? Next year? The run?" },
          { n: "The table went quiet. Not for long. Just long enough. A month ago nobody in this building would have heard anything under that question, and now everybody did, all at once, and every one of them very carefully didn't look at Solar, all together, which was its own way of looking." },
          { s: 'akihiko', f: 'neutral', t: "Yes. Every Saturday. Bridge and back. Junpei's going to lead it." },
          { s: 'junpei', f: 'surprised', t: "I'm WHAT?" },
          { choose: [
            { t: "(Tell Ken yes. Make it sound like a promise.)", notes: 3, then: [
              { s: 'solar', f: 'neutral', t: "They will. Every Saturday. And I'll know if they don't." },
              { s: 'ken', f: 'neutral', t: "...How?" },
              { s: 'solar', f: 'neutral', t: "I'll know." },
              { n: "Ken believed her. She watched him believe her, the way kids do, all the way down, and it was the hardest thing she did all day, and she did it without her voice moving once." }
            ] },
            { t: "(Put your hand on Ken's head. Don't say anything.)", notes: 3, then: [
              { n: "She put her hand on his head, the way Akihiko did after a good round, and left it there, and Ken didn't shake it off, which he always did, and Koromaru came round the table and lay down across both their feet as if somebody had sent for him." }
            ] },
            { t: "(Ask for seconds. Let the noise come back.)", notes: 2, then: [
              { n: "She held out her bowl for seconds. Akihiko filled it too full, on purpose, and Junpei said that was favoritism, and Yukari said obviously, and the noise came back the way water comes back into a footprint on a beach." }
            ] }
          ] }
        ] }
      ] },
      { ifRoute: 'romance', then: [
        { n: "On the stairs, much later, when everyone had gone up, he stopped her on the landing one step below her, so that for once they were the same height, the way he had in November, and kissed her forehead, quickly, like a man signing his name, and said *good run*, and went on up two at a time. She stood on the landing with her hand on the cold rail the way she had then, except that this time she knew exactly what her face was doing." }
      ], else: [
        { n: "On the stairs, much later, he took the last rice ball off the plate she was carrying up for later, without breaking stride, and ate it in two bites going round the landing, and said *good run* with his mouth full, and she threw the napkin at the back of his head, and he caught it over his shoulder without looking. Of course he did." }
      ] }
    ] },

    { after: '2/12', title: '13: her desk', place: 'Gekkoukan High · Classroom', time: 'After School', scene: [
      { n: "Two days before Valentine's the whole school smelled faintly of chocolate, the way a house smells of a cake somebody is hiding, and the third floor was nearly empty. Free attendance had thinned her homeroom to nine people by lunch, and by the last bell to four, and by the time the radiators started knocking at half past three, to her, and Maki and Sonoda, who sat behind her and had spent the whole year being kind about the blank after her name on the register without once mentioning it." },
      { n: "Then Akihiko put his head round the door." },
      { s: 'akihiko', f: 'neutral', t: "So this is it. I've never been in here. Three years. I've never once been in this room." },
      { n: "He came in the way he went into any room he hadn't been in, checking the corners first, the windows, the door at the back, the way you look for the exits in a gym before a fight. Then he asked which desk was hers. She pointed. He sat down at the one in front of it, backwards, his arms folded on the back of the chair and his chin on his arms, and looked at her desk, and then at her, and then out of the window, at whatever it was she looked at every day." },
      { n: "Maki and Sonoda, who had been about to go home, did not go home. They sat back down at their desks very slowly, the way people sit down at the cinema when the lights go." },
      { ifRoute: 'romance', then: [
        { s: 'maki', t: "Okay. Sorry. We have to. How long? Sonoda says the culture festival. I say before. There's a juice on it." },
        { s: 'sonoda', t: "There's a juice on it." },
        { choose: [
          { t: "Since a roof.", notes: 3, then: [
            { s: 'maki', t: "Which roof?" },
            { s: 'solar', f: 'neutral', t: "A windy one." },
            { s: 'akihiko', f: 'blushing', t: "It was very windy." },
            { n: "He said it like that explained everything, and to him, she suspected, it did. Maki and Sonoda looked at each other. Neither of them had won the juice. They seemed, on the whole, delighted about it." }
          ] },
          { t: "(Don't say anything. Let your face say it.)", notes: 3, then: [
            { n: "She didn't say anything. Her face did. Maki looked at it for a long second, and then at Sonoda, and held out her hand, palm up, without a word, and Sonoda dug a coin out of his blazer and put it in her hand like a man settling a debt of honor, though the bet, as far as Solar could tell, had been about something else entirely." }
          ] },
          { t: "Ask him. He's right there.", notes: 2, then: [
            { s: 'akihiko', f: 'blushing', t: "...A while. It was windy." },
            { s: 'maki', t: "That's not a date, senpai, that's weather." }
          ] }
        ] }
      ], else: [
        { s: 'maki', t: "Okay. Sorry. We have to. Are you two actually, really, just friends? Sonoda says nobody gets up at five in the morning for a friend. There's a juice on it." },
        { s: 'sonoda', t: "There's a juice on it." },
        { choose: [
          { t: "Really, actually, best friends. Pay up, Sonoda.", notes: 3, then: [
            { s: 'sonoda', t: "Nobody gets up at five for a FRIEND." },
            { s: 'akihiko', f: 'neutral', t: "I do." },
            { s: 'akihiko', f: 'happy', t: "I'd get up at four. I have. She wasn't awake. I waited." },
            { n: "Sonoda paid, with the air of a man who'd been robbed and didn't know by whom. Maki kept the coin on her desk the whole time they were there, face up, like a trophy." }
          ] },
          { t: "(Look at Akihiko. Look at Maki. Shrug.)", notes: 3, then: [
            { n: "She shrugged. Akihiko shrugged at the exact same moment, in exactly the same way, without looking at her, and Maki looked from one to the other and said that was the most best-friends thing she'd ever seen and also deeply upsetting, and Sonoda paid her the juice money without being asked." }
          ] },
          { t: "Ask him. He's right there.", notes: 2, then: [
            { s: 'akihiko', f: 'happy', t: "Best friend. It's a real position. There's only one of it." }
          ] }
        ] }
      ] },
      { n: "When they'd finally gone, with one last long look from the doorway, he turned back to her desk and put his hand flat on it, the way you'd put a hand on a horse." },
      { s: 'akihiko', f: 'neutral', t: "Show me something. Anything. What you do in here all day." },
      { choose: [
        { t: "(Show him the margin of your notebook. A column of numbers, all year.)", notes: 3, then: [
          { n: "She hadn't meant to show anyone. She turned the notebook round anyway and pushed it across the desk. Down the margin of every page, in small pencil, from the end of April to that morning, a column of numbers. Every split he'd ever asked her for on the river, she'd written down again afterward, in class, under the history and the chemistry and a drawing of the window." },
          { s: 'akihiko', f: 'surprised', t: "..." },
          { n: "He turned the pages slowly. He read them like a letter. Somewhere in June he stopped and put his finger on one, and she knew which one, because it was the first morning she'd come in under twenty minutes to the bridge and back, and she'd underlined it twice." },
          { s: 'akihiko', f: 'neutral', t: "You got fast in June." },
          { s: 'solar', f: 'neutral', t: "I know. I was there." }
        ] },
        { t: "(Show him the window. The track, and the monorail past it.)", notes: 3, then: [
          { n: "She pointed. From her desk, if you leaned, you could see the end of the track and the corner of the fence and, past it, the monorail crossing to Port Island every eleven minutes, silver and soundless at this distance, like a needle going through cloth. He leaned. He watched one whole crossing." },
          { s: 'akihiko', f: 'neutral', t: "You can see the track from here." },
          { s: 'solar', f: 'neutral', t: "I can see you run laps at lunch. Every day." },
          { s: 'akihiko', f: 'blushing', t: "...Every day?" },
          { s: 'solar', f: 'neutral', t: "You lead with your shoulders when you're tired." }
        ] },
        { t: "(Make him do a page of your maths homework.)", notes: 2, then: [
          { n: "He was terrible at it. He was terrible at it with total commitment, the way he did everything, and got an answer of seven for a question whose answer was a graph, and defended the seven for some time." }
        ] }
      ] },
      { place: 'Gekkoukan High · Rooftop', time: 'Evening' },
      { n: "On the stairs up to the roof they met Ōta coming down. She stopped dead on the landing with her bag held in front of her in both hands like a shield, and looked at him, and then, for slightly longer, at Solar." },
      { s: 'ota', t: "Senpai. Tomorrow. The shoe lockers. Eight o'clock. Will you be there?" },
      { n: "Akihiko looked at Solar. Ōta watched him do it, and Solar watched Ōta watch, and saw something go across the girl's face that wasn't jealousy, quite, more like somebody checking a map and finding the road had been where they'd thought it was all along." },
      { choose: [
        { t: "He'll be there. He'll be early.", notes: 3, then: [
          { s: 'ota', t: "...Thank you, senpai." },
          { n: "She bowed. Not to him. To Solar. Then she went on down the stairs at a run, the way you run when you've got news, and Akihiko watched her go with the face of a man who'd just been traded." }
        ] },
        { t: "(Let him answer.)", notes: 2, then: [
          { s: 'akihiko', f: 'neutral', t: "I'll be there. I'm always there. It's my shoe locker." }
        ] },
        { t: "Bring a bag. He won't have room.", notes: 3, then: [
          { s: 'ota', t: "We've measured. We're bringing two." },
          { n: "She said it with total seriousness and went on down the stairs, and Akihiko stood very still on the step for a moment, absorbing the word *measured*, and then looked at Solar with real fear, and she laughed so hard she had to sit down on the stairs." }
        ] }
      ] },
      { n: "The roof was empty. The wind was the February kind, thin and steady, coming straight off the water, and it got under her collar and pulled her hair loose from its pins, the way it had in September, and she saw him see it, and not reach for it, and then reach for it." },
      { ifHeading: 'stay', then: [
        { s: 'akihiko', f: 'neutral', t: "What are you going to do? In April?" },
        { n: "Nobody had asked her that. Everybody had asked her what she'd chosen, before, and what she'd remembered, and whether she was sure, and nobody had ever once asked what came after, here, on an ordinary Monday, as if the after was a place she was allowed to have plans in." },
        { s: 'akihiko', f: 'neutral', t: "There's a gym in Port Island that wants somebody for the kids' class. Saturdays. And Mitsuru's got something she won't tell me about yet, which means it's something." },
        { s: 'akihiko', f: 'happy', t: "You don't have to know yet. You're allowed twenty minutes on the shampoo." },
        { choose: [
          { t: "I'll find out. Here.", notes: 3, then: [
            { s: 'akihiko', f: 'neutral', t: "...Yeah. Here." },
            { n: "He said it back to her like a word he was checking the weight of, and found it was exactly the weight she'd said it at, and put his hands in his pockets and looked out at the bay with the face of a man who had nowhere else on earth he needed to be." }
          ] },
          { t: "Twenty minutes. Maybe twenty-five.", notes: 3, then: [
            { s: 'akihiko', f: 'happy', t: "Take thirty. Nobody's dying." },
            { s: 'solar', f: 'neutral', t: "That's a whole April." },
            { s: 'akihiko', f: 'neutral', t: "So take a whole April. I'll be out front at five either way." }
          ] },
          { t: "Something with a stopwatch.", notes: 2, then: [
            { s: 'akihiko', f: 'happy', t: "Ha. Good. That's a start. That's a whole career." }
          ] }
        ] }
      ], else: [
        { ifHeading: 'true', then: [
          { n: "She was counting again. The lights coming on across the bay, the monorail's windows, the cranes at the harbor with their red lamps on top. She didn't know she was doing it until he asked." },
          { s: 'akihiko', f: 'neutral', t: "What are you counting?" },
          { choose: [
            { t: "Everything. Help me.", notes: 3, then: [
              { n: "He didn't ask why. He leaned on the fence beside her and counted with her, the cranes and the boats and the windows on the hotel at the end of the bay, out loud, in his blunt counting voice, one, two, three, the way he counted reps, and they got different numbers, and argued, and started again, and the light went while they were doing it." }
            ] },
            { t: "(Stop counting. Just look.)", notes: 3, then: [
              { n: "She stopped. It was harder than she'd thought. She made herself look at the whole bay at once, the way you'd look at a face, and he stood next to her and looked too, and didn't ask at what." }
            ] },
            { t: "Nothing.", notes: 1, then: [
              { s: 'akihiko', f: 'neutral', t: "Okay." },
              { n: "He let it be nothing. He was good at that now." }
            ] }
          ] }
        ], else: [
          { s: 'akihiko', f: 'neutral', t: "I keep wanting to show you things. The good bench at the station. The window at Hagakure where the steam doesn't fog. The back of the gym where you can hear the sea if the wind's right." },
          { s: 'akihiko', f: 'sad-2', t: "Like there's a list. And I'm running out of February to get through it." },
          { choose: [
            { t: "Show me all of them. We've got time.", notes: 3, then: [
              { s: 'akihiko', f: 'serious', t: "...Okay. Tomorrow. Five. The bench first." },
              { n: "We've got time. She'd said it, and she knew exactly how much, to the day, and so did he, and neither of them said the number. He started planning a route out loud, there on the roof, eight places in the right order, like a man drawing up a training schedule for something he meant to win." }
            ] },
            { t: "Show me one. The best one. Now.", notes: 3, then: [
              { n: "He thought about it for a long time, with his whole face, the way he thought about a combination. Then he took her by the wrist to the corner of the roof by the water tank, where the fence had a gap the width of a hand, and stood her in it, and from there, and only from there, you could see the whole bay at once, both bridges, the island, the lights coming on all along the far shore in one long string." },
              { s: 'akihiko', f: 'neutral', t: "First year. I found it the week I joined the club. I've never shown anybody." },
              { s: 'akihiko', f: 'neutral', t: "Now it's yours too. That's how it works. I don't make the rules." }
            ] },
            { t: "You already showed me most of them.", notes: 2, then: [
              { s: 'akihiko', f: 'surprised', t: "...Did I?" },
              { s: 'solar', f: 'neutral', t: "Since April. You just didn't say that's what you were doing." }
            ] }
          ] }
        ] }
      ] },
      { ifRoute: 'romance', then: [
        { n: "He kissed her by the fence before they went down, quickly, because the roof door was right there and it had a window in it, and then again, less quickly, because nobody was looking through it, and the wind took her hair and he left it where it went." }
      ], else: [
        { n: "Before they went down he gave her his scarf, because hers was thinner and he'd been looking at it with disapproval all afternoon, and wound it twice round her neck like a man wrapping a hand, and tucked the end in, and said *there*. On the stairs, Maki and Sonoda, who had not gone home after all, watched them come down, and looked at each other, and didn't say anything, which was its own sentence." }
      ] }
    ] },

    { after: '2/19', title: '14: the banner', place: 'Gekkoukan High · Boxing Club', time: 'After School', scene: [
      { n: "They came at four in a delegation, the four of them in a line with Ōta at the front holding something folded in her arms like a flag at a funeral, and the whole boxing club stopped what it was doing, because nobody who wasn't in the boxing club had ever come into the boxing club on purpose, and certainly not four second-years in hair clips walking in step." },
      { n: "Akihiko was at the heavy bag. He saw them in the mirror. He did not stop hitting the bag. He hit it, if anything, harder, with the total focus of a man who has decided that if he doesn't turn around this isn't happening." },
      { s: 'ota', t: "Solar-senpai. Could we have a minute. It's official." },
      { n: "The thing in her arms was the banner. Solar knew it before Ōta had it unfolded, the bedsheet from July, SANADA-SENPAI in pink letters that ran downhill at the end because whoever was painting had run out of sheet. It had been washed since. Not well." },
      { ifRoute: 'romance', then: [
        { s: 'ota', t: "The Akihiko Sanada Fan Club met on Wednesday. We voted. Eleven to four. Hiyori abstained, because she was crying." },
        { s: 'ota', t: "We're not disbanding. We want to be very clear about that. We're re-chartering." },
        { n: "She turned the banner round. At the downhill end, squeezed onto the hem in smaller letters in a slightly different pink, so tight against the edge that the last two went round onto the back, somebody had added *& SOLAR-SENPAI*." },
        { s: 'ota', t: "It's the Akihiko Sanada and Solar Fan Club now. We'd like you to have the banner. For safekeeping. We feel it's right. We've felt it since about October, honestly. We were just being stubborn." },
        { n: "Behind her, the heavy bag had stopped. Akihiko was standing with his gloves at his sides and the bag swinging gently back and forth in front of him like a pendulum, red from the collar to the hairline, and the entire boxing club was looking at him, and Kondo had both hands over his mouth." },
        { choose: [
          { t: "(Take the banner. Bow, properly, to all four of them.)", notes: 3, then: [
            { n: "She took it in both arms and bowed, low and properly, the way you'd bow to somebody's family. When she straightened up two of the four were crying and Ōta wasn't, quite, and the boxing club, without anybody starting it, applauded, and Akihiko said *stop that* to all of them in a voice that came out about an octave higher than he meant it to." }
          ] },
          { t: "Can I be treasurer?", notes: 3, then: [
            { s: 'ota', t: "...You'd want to be in it?" },
            { s: 'solar', f: 'happy', t: "I've been in it since April. I just didn't have a hair clip." },
            { n: "Ōta looked at her for a long second. Then she took the clip out of her own hair, a small plastic star, and held it out, and Solar bent her head and let her put it in, right there in front of the whole club, and Akihiko made a noise like he'd taken one in the ribs." }
          ] },
          { t: "This is the most embarrassing thing that's ever happened to him.", notes: 2, then: [
            { s: 'ota', t: "We know. That was part of the vote." }
          ] }
        ] }
      ], else: [
        { s: 'ota', t: "The Akihiko Sanada Fan Club met on Wednesday. We voted. It was unanimous. Hiyori voted twice, because she was emotional." },
        { s: 'ota', t: "We'd like to offer you the position of honorary president." },
        { s: 'ota', t: "You know him better than anybody in this school. Nobody argued. And somebody has to keep the banner, after. We'd like it to be somebody he'd actually let near it." },
        { n: "Behind her, the heavy bag had stopped. Akihiko was standing with his gloves at his sides and the bag swinging gently back and forth in front of him like a pendulum, red from the collar to the hairline, and the entire boxing club was looking at him, and Kondo had both hands over his mouth." },
        { choose: [
          { t: "(Accept. Bow, properly, to all four of them.)", notes: 3, then: [
            { n: "She took the banner in both arms and bowed, low and properly, the way you'd bow to somebody's family. When she straightened up two of the four were crying and Ōta wasn't, quite, and the boxing club, without anybody starting it, applauded, and Akihiko said *stop that* to all of them in a voice that came out about an octave higher than he meant it to." }
          ] },
          { t: "Only if he's allowed to resign as the subject.", notes: 3, then: [
            { s: 'ota', t: "That isn't in the charter." },
            { s: 'akihiko', f: 'serious', t: "I'd like to see the charter." },
            { s: 'ota', t: "No." },
            { n: "She said it so pleasantly and so finally that the whole boxing club laughed, and Akihiko turned back to the bag like a man returning to a fight he understood, and Ōta handed Solar the banner with the air of somebody passing on a crown." }
          ] },
          { t: "I'll want the spreadsheet.", notes: 2, then: [
            { s: 'ota', t: "...How do you know about the spreadsheet?" },
            { s: 'solar', f: 'neutral', t: "I'm honorary president." }
          ] }
        ] }
      ] },
      { n: "When they'd gone, and the club had been yelled back to work, and the banner lay folded on the bench between them like a sleeping animal, he sat down at the other end of it and pulled his gloves off with his teeth and didn't look at her." },
      { s: 'akihiko', f: 'blushing', t: "I'm going to need you to never tell anyone about that. Including me." },
      { choose: [
        { t: "(Hang it on the club wall. Right over the ring.)", notes: 3, then: [
          { n: "He said absolutely not. Then he held the stepladder. Then he went up the stepladder himself because she was doing the left corner wrong, and they hung it together from two hooks above the ring where he'd won three tournaments, crooked, running downhill, and Kondo saluted it, and Akihiko threw a glove at Kondo, and kept looking up at it all afternoon when he thought nobody could see, which everybody could." }
        ] },
        { t: "(Fold it smaller. Put it in your bag. It's yours now.)", notes: 3, then: [
          { n: "She folded it down to the size of a lunchbox, corner to corner, the way you fold a flag, and put it in her bag, and zipped the bag, and patted it. He watched her do it with his gloves in his lap and an expression she couldn't read and filed away to read later." },
          { s: 'akihiko', f: 'blushing', t: "...You're keeping it." },
          { s: 'solar', f: 'neutral', t: "For safekeeping. It's official." }
        ] },
        { t: "Are you okay? That was a lot.", notes: 2, then: [
          { s: 'akihiko', f: 'blushing', t: "I've been punched in the face by the regional champion. That was worse. This was worse than that." }
        ] }
      ] },
      { place: 'Iwatodai Strip · Hagakure', time: 'Evening' },
      { n: "Hagakure in February was steam and noise and the windows running on the inside, the noren stiff with cold every time somebody came in under it, and the old man behind the counter set two bowls down in front of them with the same solemn care he'd set down every bowl since April, as if every one were the first." },
      { n: "She watched him do it this time. That was the difference. Ten months of the egg turning up in her bowl and she had never once seen him move it, and tonight she watched, she kept her eyes on his chopsticks from the minute the bowls came down, and he knew she was watching, and did it anyway, slowly, right in front of her, the egg out of his bowl and into hers, and looked her in the eye while he did it." },
      { s: 'akihiko', f: 'neutral', t: "Protein." },
      { choose: [
        { t: "(Put it back in his bowl. Say it back to him.)", notes: 3, then: [
          { s: 'solar', f: 'neutral', t: "Protein." },
          { s: 'akihiko', f: 'sad-2', t: "..." },
          { n: "He looked down at it. She knew what he was looking at. She'd known since August, a long table and a little girl stealing her brother's egg every night and her brother letting her. He looked at it for a long time. Then he laughed, wet at the edges, the way he had on the dorm roof in the summer, and ate it in two bites, and said it was the best egg he'd ever had, and that she was never allowed to do that again, and that she should do it again." }
        ] },
        { t: "(Cut it in half. Half each.)", notes: 3, then: [
          { n: "She cut it in half with the side of her chopsticks and slid one half back into his bowl. He looked at it for longer than an egg deserved, and this time she could read it, and didn't need to file it anywhere." },
          { s: 'akihiko', f: 'neutral', t: "...Okay. Half. Half's fair." }
        ] },
        { t: "(Eat it. Like always.)", notes: 2, then: [
          { n: "She ate it, like always, and he went back to his bowl with the faint private satisfaction of a man watching a plan go off without a hitch, and she let him have it. It was his plan. It had been working since April." }
        ] }
      ] },
      { ifHeading: 'stay', then: [
        { s: 'akihiko', f: 'neutral', t: "Spring tournament's in May. The club's coming here after, win or lose. I already told the old man." },
        { s: 'akihiko', f: 'happy', t: "You're coming. You're sitting there. That stool. It's got your shape in it now." },
        { choose: [
          { t: "Every year. Same stool.", notes: 3, then: [
            { n: "The old man, who had not appeared to be listening to anything, set down two glasses of water in front of them that nobody had asked for, and said *every year* to the counter, gruffly, and went back to his pot, and Akihiko looked so pleased he forgot to eat for a full minute." }
          ] },
          { t: "(Put your hand over his on the counter.)", notes: 3, then: [
            { n: "She put her hand over his on the worn wood of the counter, by the soy sauce, in front of the old man and a salaryman and the baseball game on the radio, and left it there, and he turned his hand over under hers without looking, the way he did on the roof, and went on eating left-handed, badly, rather than move it." }
          ] },
          { t: "I'm paying next time.", notes: 2, then: [
            { s: 'akihiko', f: 'happy', t: "You can try. He won't take your money. He's never taken my money from you." }
          ] }
        ] }
      ], else: [
        { ifHeading: 'true', then: [
          { n: "The old man set down a third egg in front of her that nobody had ordered. Just set it down, halved, on a small dish, and didn't look at her, and went back to his pot." },
          { n: "She didn't know why her eyes stung. The steam, probably. It was very steamy in there." },
          { s: 'akihiko', f: 'neutral', t: "...You okay?" },
          { choose: [
            { t: "(Eat it slowly. All of it.)", notes: 3, then: [
              { n: "She ate it slowly, every bite, the way you read the last page of a book you've liked, and he watched her do it and didn't ask again, and when she was done he said *best bowl yet*, the way he always did, and she said it back, and both of them meant it." }
            ] },
            { t: "Remember this one. The best bowl.", notes: 3, then: [
              { s: 'akihiko', f: 'happy', t: "Every one's the best bowl." },
              { s: 'solar', f: 'neutral', t: "This one, though." },
              { s: 'akihiko', f: 'neutral', t: "...Okay. This one." },
              { n: "He looked round the place properly then, the counter and the steam and the old man's back and the radio, the way he looked round a gym before a fight, because she'd asked him to, without asking why." }
            ] },
            { t: "I'm fine.", notes: 1, then: [
              { s: 'akihiko', f: 'neutral', t: "Okay." },
              { n: "He let her be fine. He was good at it now. He was good at it and he hated it, and she could see both." }
            ] }
          ] }
        ], else: [
          { n: "On the walk back they passed the station, the bench by the vending machines, the platform lights coming on one at a time in the cold, and he walked past it slower than he needed to, and she let him." },
          { s: 'akihiko', f: 'neutral', t: "I'm not going to say anything sad. I decided on the way here. It's a rule now." },
          { choose: [
            { t: "Say one sad thing. You're allowed one.", notes: 3, then: [
              { s: 'akihiko', f: 'sad-2', t: "..." },
              { s: 'akihiko', f: 'sad', t: "I'm going to miss the egg." },
              { n: "It was the saddest thing anyone had ever said to her, and she laughed so hard she had to hold on to the railing, and he laughed too, helplessly, bent over, at the stupidest saddest sentence in the world, and they stood at the station in the cold holding on to each other's sleeves until a salaryman on the platform looked over with real concern." }
            ] },
            { t: "(Hold on to his sleeve the rest of the way.)", notes: 3, then: [
              { n: "She took hold of his sleeve, the cuff of his coat, the way a kid does in a crowd, and held on to it all the way back to the dorm, and he didn't say anything about it, and he didn't say anything sad either. He kept his rule. He walked the whole way at her pace, which on legs like his must have been like walking through water, and she put it on the list, the way she had in April." }
            ] },
            { t: "Good. Me neither.", notes: 2, then: [
              { n: "Neither of them did. They talked about Kondo's elbow the whole way home, at length, with demonstrations, and it was, she thought, the bravest conversation she'd ever had." }
            ] }
          ] }
        ] }
      ] },
      { ifRoute: 'romance', then: [
        { n: "On the dorm steps he kissed her, brief and cold-nosed and tasting of pork broth, which she told him, and he said that was the most romantic thing anyone had ever said to him, and meant it, and went inside first so she wouldn't see his face." }
      ], else: [
        { n: "On the dorm steps he held the door, the way he always did, and as she went through it he said to the back of her head, very fast, *honorary president, though*, and laughed all the way up the stairs, and she could hear him still laughing two floors up." }
      ] }
    ] },

    { after: '2/26', title: '15: five', place: 'Gekkoukan High · Boxing Club', time: 'After School', music: 'tender', scene: [
      { ifRoute: 'romance', then: [{ cg: 'link-akihiko-r15' }] },
      { n: "His locker in the boxing club had his name on it on a strip of white tape gone gray at the edges from three years of everybody's thumbs, and on the last Friday in February, a week before graduation, he emptied it." },
      { n: "Three rolls of tape. A protein shake two months out of date, which he looked at with real regret. A single hand wrap with no partner. A towel that should have been burned. A photograph, face down on the top shelf. And the ruler, thirty centimeters, with somebody's initials gouged into the end." },
      { n: "He took everything out one thing at a time and looked at it and put it in a cardboard box, slowly, the way he'd unwound her wraps in June, as if there was something in each one worth keeping. The club worked around them and very carefully didn't watch." },
      { cg: null },
      { choose: [
        { t: "(Hand him things out of the locker one at a time.)", notes: 3, then: [
          { n: "She handed him things, one at a time, and he took each one and looked at it and told her what it was, the tape from the first tournament, the towel from the second, as if he were reading her his record. The photograph she handed him face down, the way she'd found it. He turned it over. Three kids on a concrete step in the sun, two boys and a girl in the middle with a gap in her teeth and her hand on the smaller boy's head like a crown. He looked at it a long time. He didn't put it in the box. He put it in the inside pocket of his blazer, and buttoned the pocket." }
        ] },
        { t: "(Take the ruler before he can give it away.)", notes: 3, then: [
          { n: "He'd been going to give it to Kondo. She could see it in his hand, the little turn toward the ring he'd already started. She took it out of his fingers before he finished turning." },
          { s: 'akihiko', f: 'surprised', t: "That's the club's." },
          { s: 'solar', f: 'neutral', t: "Then the club can ask me for it." },
          { s: 'akihiko', f: 'happy', t: "Ha! Kondo. You heard her." },
          { s: 'kondo', t: "I didn't hear anything, senpai." }
        ] },
        { t: "(Sit on the bench and watch. Like April.)", notes: 2, then: [
          { n: "She sat on the bench at the end of the ring and watched him, the way she had on the first day, when he'd had his ribs taped and his hands flat on his knees, and it was the same bench and the same high windows and the same smell of tape and rubber mats and other people's effort, and it was nothing like the first day at all." }
        ] }
      ] },
      { n: "When the box was full the new captain clapped his hands twice, and the whole club stopped and lined up in front of the ring, eleven of them in tracksuits, and Kondo stepped out of the line holding a can of white paint and a brush like a man carrying a sword he wasn't sure about." },
      { n: "On the wall by the door there was a board. The club's records, white paint on black, started by somebody a long time ago and added to by everybody since, weights and times and titles, and halfway down, in Akihiko's own square capitals from his first year, REACTION · SANADA · 6 CM." },
      { n: "Under it, still wet, there was a new line. REACTION · SOLAR · 4 CM. No surname. There hadn't been room, Kondo said, which was a lie, and everybody knew it was a lie, and nobody said so." },
      { s: 'kondo', t: "Honorary. She's not a member. But she beat it. On the first day. We were all there." },
      { choose: [
        { t: "(Touch the paint. It's still wet.)", notes: 3, then: [
          { n: "She touched it. It came off white on her fingertip, a small smudge in the tail of the R, and she stood there looking at her finger and thinking how many places her name was written down here now, after a year. A register, with nothing after it. A notebook margin. A banner's hem, in the wrong pink. A wall. She hadn't asked for any of them. Somebody had just picked up a pen." }
        ] },
        { t: "(Bow to the club. Low. Properly.)", notes: 3, then: [
          { n: "She bowed to them, all eleven, low and properly, the way you bow to a team you've been allowed to stand with, and they bowed back, ragged, all at different speeds, and Kondo dropped the brush, and it was the most dignified thing she'd ever seen anybody do in a room that smelled that strongly of feet." }
        ] },
        { t: "It should only say his. I'm not a member.", notes: 2, then: [
          { s: 'akihiko', f: 'serious', t: "It says the record. You're the record. That's how records work." }
        ] }
      ] },
      { place: 'Iwatodai · Riverside', time: 'Evening' },
      { n: "They walked the river without running, which was rare enough that she noticed it, the way she had in July, and so did he, and neither of them said so. The plum trees along the bank were still black sticks. The water was low and gray and slow, and the cold came up off it into their faces, and the streetlights along the path came on one after another ahead of them as they walked, as if somebody up the river were lighting the way." },
      { ifFlag: 'shinji-awake', then: [], else: [
        { n: "He'd go to the hospital after, he said. He went every day. He was going to tell Shinji about the paint, and about Kondo dropping the brush, and about the egg, all of it, round by round." }
      ] },
      { ifRoute: 'romance', then: [
        { s: 'akihiko', f: 'blushing', t: "I've been practicing what I'm going to say. On graduation. At the gate, when you come out." },
        { s: 'akihiko', f: 'blushing', t: "I've got it down to four words. Then it grows back. Every time I get it down, it grows back." },
        { choose: [
          { t: "(Kiss him. Before it grows back.)", notes: 3, then: [
            { n: "She kissed him on the river path, in front of an old man with a dog in a coat, who looked politely at the water. His hands came up to her face cold and then weren't cold, and when she stepped back he'd forgotten all four words, she could see it, and he looked delighted about it." },
            { s: 'akihiko', f: 'blushing', t: "...Gone. All of them. Thanks." }
          ] },
          { t: "(Lean into his side. Let him practice on the river.)", notes: 3, then: [
            { n: "She leaned into his side and looked at the water and let him. He said them to the river, the four words, too quiet for her to hear, which she suspected was the point, and the river took them and went on being a river." },
            { s: 'solar', f: 'neutral', t: "How'd it go?" },
            { s: 'akihiko', f: 'blushing', t: "The river liked it. I think. Hard to tell with rivers." }
          ] },
          { t: "Tell me now. I'll act surprised.", notes: 2, then: [
            { s: 'akihiko', f: 'neutral', t: "No. You'd be bad at it. You'd do the face." },
            { s: 'solar', f: 'neutral', t: "Which face?" },
            { s: 'akihiko', f: 'blushing', t: "The real one. That's why." }
          ] }
        ] }
      ], else: [
        { s: 'akihiko', f: 'neutral', t: "Graduation morning. I want somebody to time me. One lap. My first run as somebody who doesn't go to school here anymore." },
        { s: 'akihiko', f: 'neutral', t: "It's stupid. I know it's stupid." },
        { choose: [
          { t: "Best friend times it. That's the rule. I just made it up.", notes: 3, then: [
            { s: 'akihiko', f: 'surprised', t: "...That's my line." },
            { s: 'solar', f: 'happy', t: "I know." },
            { n: "He laughed, wet and loud, at the river, and bumped her shoulder so hard she had to grab the railing, and said that was the best rule anybody had ever made up, and that he was taking it back, and that she could keep it." }
          ] },
          { t: "(Bump his shoulder. Hard enough he has to grab the railing.)", notes: 3, then: [
            { n: "She bumped him, hard, the way he always bumped her, and he had to put a hand out to the railing, and stood there holding it with a look of utter astonishment, and then of pure joy, like a man whose student had finally landed the one he'd been teaching all year." }
          ] },
          { t: "Only if you don't let me win.", notes: 2, then: [
            { s: 'akihiko', f: 'happy', t: "I've never once let you win." },
            { s: 'solar', f: 'neutral', t: "April. The ruler. Five and a half." },
            { s: 'akihiko', f: 'surprised', t: "...That was the ruler. That's not winning. That's physics." }
          ] }
        ] }
      ] },
      { ifHeading: 'stay', then: [
        { s: 'akihiko', f: 'neutral', t: "Five tomorrow?" },
        { n: "He asked it the way he'd asked it in April, on the river steps, with the small rise at the end, a door left open. Ten months. He'd only ever stopped asking when the world gave him a reason to, and every time he'd started again. She had never once said no." },
        { choose: [
          { t: "Five. And the day after. And every day after that.", notes: 3, then: [
            { s: 'akihiko', f: 'happy', t: "That's not how five works." },
            { s: 'solar', f: 'neutral', t: "It's how I'm doing it." },
            { n: "He looked at her for a long time in the last of the light, and then nodded, once, the way he did when she read him a time on a lap, a good one, a personal best, and put it away somewhere behind his eyes to keep." }
          ] },
          { t: "(Take the stopwatch out. Start it. Don't stop it.)", notes: 3, then: [
            { n: "She took it out of her pocket, the old silver one on its frayed red cord, and pressed it. It clicked, a small clean sound, like something starting. She put it back in her pocket, running." },
            { s: 'akihiko', f: 'surprised', t: "What are you timing?" },
            { s: 'solar', f: 'neutral', t: "I'll tell you when it's done." },
            { s: 'akihiko', f: 'happy', t: "...When's it done?" },
            { s: 'solar', f: 'neutral', t: "It isn't." }
          ] },
          { t: "Five-fifteen. Final offer.", notes: 2, then: [
            { s: 'akihiko', f: 'happy', t: "Five." },
            { s: 'solar', f: 'neutral', t: "Five." }
          ] }
        ] }
      ], else: [
        { ifHeading: 'true', then: [
          { n: "At the bridge she stopped and took the stopwatch out of her pocket and put it in his hand." },
          { s: 'solar', f: 'neutral', t: "Time me. One lap. Bridge and back. Don't tell me the number." },
          { s: 'akihiko', f: 'surprised', t: "Why not?" },
          { s: 'solar', f: 'neutral', t: "I don't know. Keep it. Just keep it." },
          { choose: [
            { t: "(Run. Everything you have.)", notes: 3, then: [
              { n: "She ran. Everything she had, the whole lap, the lampposts going by and the cold tearing at her lungs and her legs filing their complaints and being overruled, and when she came back to him under the lamp at the bridge he was looking down at the stopwatch with a face she couldn't read." },
              { n: "He didn't tell her. She didn't ask. He tore a strip of white tape off the roll in his pocket and wrote the number on it in his blunt square capitals, and folded it in half so she couldn't see, and put it in his wallet, behind his student card, like something that mattered." }
            ] },
            { t: "(Run it with him. Step for step. Let him time you both.)", notes: 3, then: [
              { n: "She took his wrist, and he understood, and they ran it together, step for step, bridge and back, the way they'd run it ten thousand times, his breath and hers going up white in the same rhythm, and at the end he stopped the watch and looked at it and laughed, out of breath, and didn't say the number, and put the watch in her hand with his hand closed over it, so that neither of them could see." }
            ] },
            { t: "Never mind. Let's just walk.", notes: 1, then: [
              { n: "They walked. He gave her the stopwatch back at the dorm without a word, and she put it on the shelf above her desk, and didn't look at it." }
            ] }
          ] }
        ], else: [
          { n: "At the bridge she took the stopwatch out of her pocket. The old silver one on its frayed red cord, a club's, inherited, not bought, that had been round her neck every morning since April. She held it out to him." },
          { choose: [
            { t: "(Give it back. It's the club's.)", notes: 3, then: [
              { n: "He looked at it in her hand. Then he did what he'd done in April, exactly, as if he'd been waiting ten months to do it again. He put his hand over hers and closed her fingers round it, briefly, the way you'd close someone's hand around their change." },
              { s: 'akihiko', f: 'neutral', t: "It's not the club's. It's yours. It goes where you go." },
              { s: 'akihiko', f: 'serious-3', t: "That's not me asking for anything. That's just where it lives now." },
              { n: "She put it back in her pocket. It was warm from her hand. It clicked when she pressed it, a small clean sound, and she didn't press it." }
            ] },
            { t: "Text me at five. Wherever I am. Even if it doesn't go through.", notes: 3, then: [
              { s: 'akihiko', f: 'sad-2', t: "..." },
              { s: 'akihiko', f: 'neutral', t: "I was always going to. I'm warning you now." },
              { n: "He said it lightly, the way he'd say rain tomorrow, we run anyway, and his hand found hers on the cold railing and didn't hold it, exactly. Just rested there. Just let her know where it was." }
            ] },
            { t: "(Put it away. Run the last stretch home.)", notes: 2, then: [
              { n: "She put it away and ran, and he came after her, and they raced the last stretch to the dorm in the dark like it was April, and she lost by a stride, maybe less, and he turned round at the step with both arms up and then saw her face and lowered them, slowly, and didn't say anything at all." }
            ] }
          ] }
        ] }
      ] },
      { n: "Later, upstairs, she lay on her bed in the dark with the window cold beside her and went through the list. Not a real one. She'd never written it down. She went through it anyway, the way he went through rounds, one at a time, from the beginning. A stopwatch on a red cord. Four centimeters. A crooked wrap. A face for five in the morning. An egg. Red gloves. A line of wet paint." },
      { n: "Somewhere near the end of it she noticed that she couldn't tell anymore which things on it she'd figured out about herself and which things were just him, and that she didn't mind. It was a long list. She'd been here a year. She fell asleep before she got to the end of it, which was, she thought, as the dark took her, the right way for it to go." }
    ] }
  ],
  // After rank 10: between rank 10 and rank 11's date, and after rank 15 (core.js afterMax; entries can carry flags / noFlags).
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
        { ifFlag: 'shinji-awake', then: [
          { s: 'akihiko', f: 'happy', t: "Best friend picture. I'm sending it to Shinji. He can tell me it's a bad picture. He can do that now." },
          { n: "He sent it. She watched the little bar go across and finish, to a phone on a hospital side table with a beanie folded beside it, and a minute later his pocket buzzed once, and he looked, and laughed out loud on the bridge, and wouldn't show her what it said, and ran the whole way back a half step ahead of her, as if daring her to catch him, which she did." }
        ], else: [
          { s: 'akihiko', f: 'happy', t: "Best friend picture. I'm sending it to Shinji. He can look at it when he wakes up." },
          { n: "He sent it. She watched the little bar go across and finish, to a phone in a drawer at a hospital, and didn't say anything, and he ran the whole way back a half step ahead of her, as if daring her to catch him, which she did." }
        ] }
      ] }
    ] },
    { place: 'Tatsumi Memorial Hospital', time: 'Evening', noFlags: ['shinji-awake'], scene: [
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
  // Christmas Eve (12/24), romance route: played from the 12/24 picker (story-act6.js a6-christmas-eve, core.js christmasOptions).
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
    { s: 'akihiko', f: 'neutral', t: "But wherever you are. Whatever happens in March. I'm texting you at five. Every day." },
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
