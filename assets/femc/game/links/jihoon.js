/* Park Jihoon · ? Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Searcher, canon romance (Hoax). Solar Kim's best friend since preschool, in love with her since middle school (everyone knew
   but her). Cocky, mean, mock-royal ("the almighty Hoon", "such a powerful figure like myself", "fan behavior"), does pilates,
   calls Nana "my son", always the first one at her door with ice cream. Where HOAX leaves off he has confessed (the gift bag and
   the letter), they had a short fling after the homecoming curb, he was exposed over the note and the recording, she is dating
   Jungwon (who won the election and made her his vice president), and Jihoon has gone back to old habits. The game keeps that
   thread non-graphic: named, owned, never shown. Nothing here decides Hoax's own canon (plot doc §9).
   Lodging (Kat's ruling, 2026-10-20): he lives at the Kirijo guesthouse by the station. Every dorm scene here is a visit.
   His crossing (9/19, the Strip, the ice cream that won't melt) is a story event; rank 1 is a later conversation on the dorm steps,
   after dinner he wasn't invited to. He awakens on 10/17 (story); ranks 5+ come after.
   Fragment: hoax-crane-game (rank 4, plot doc §8 H6). Romance turn at rank 8.
   Texting voice: lowercase with Capitalized Random Words, hashtags (#brocken), "Skank" / "ungrateful rug" as affection.
   Arcana: the stub has '?' (searcher arcana are an open question for Kat, plot doc §16.6).
   Ranks 11-15 (maxRank 15; meter ranks, 2026-10-22 batch): 2/3 the dorm's front steps (Setsubun), 2/10 Game Panic
   (Hyunsuk), 2/17 the Paulownia Mall flower stall (Mrs. Okada), 2/24 the Iwatodai Station bench, 2/28 the dorm's front
   steps. A cheap instant camera he buys in February runs through all five (the polaroid string Solar has at home stops
   in September). HOAX current canon (Ch 99): at home he'd gone back to old habits; here he hasn't gone looking (rank 9),
   and February is about going home to it, named and never shown. The route is locked by then: each rank has one key
   passage branched by heading (H / S+R / stay / true; rank 14 groups S, R and stay) and an ending branched by romance /
   friendship (ifRoute); every path's best answers total 12 notes. stretchHangouts: three February hangouts for a meter
   a rank scene didn't fill. Living content for these ranks (afterRank 11-15 texts, a late night, a routine):
   data/living-r15-jihoon.js. afterMax plays between rank 10 and rank 11 and after 15. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'jihoon', name: 'Park Jihoon', short: 'Jihoon', arcana: 'Hunger', numeral: '', from: 'Hoax',
  kind: 'searcher', world: 'H', romance: 'canon', maxRank: 15,
  starts: '9/19', gate: { H: 3 },
  home: { area: 'mall', spot: 'Game Panic', slot: 'after', days: [0, 1, 3, 5, 6],
          hint: 'After school and on days off, at Game Panic, losing to a crane game on purpose. Not on purpose.' },
  approach: "There's a tall boy in a navy blazer at the crane game by Game Panic's door, feeding it coins with the grim focus of a king trying to win back his throne, and he says your name without turning around, like you're late.",
  cast: { okada: 'Mrs. Okada' },
  invite: {
    ask: [
      "SOL. come outside. i am Outside. this is a Summons",
      "the crane game is Mocking me. as my loyal Subject u are obligated to avenge me",
      "r u free or r u busy being Mysterious and Tragic. pick one",
      "i bought ice cream. Do Not ask why. come eat it before i do, ungrateful rug",
      "ur roommate akihiko thinks he can out plank Me. come witness a Legend",
      "bored. entertain me. its Literally ur only job",
      "the almighty Hoon requests ur presence. this is not a Request"
    ],
    ok: ["FINALLY. took u long enough skank", "obviously. who could resist Me", "knew it. fan behavior"],
    no: ["wow ok. #brocken", "fine. i'll Suffer. alone. like a Martyr", "ok but ur missing out on Greatness"]
  },
  hangouts: [
    [
      { n: "Game Panic's crane game had a new prize in it, a lumpy white plush dog with silly legs and one ear inside out, and Jihoon had decided it looked exactly like his son and that he would not be leaving the mall without it, as a matter of family honor." },
      { s: 'jihoon', f: 'serious', t: "Don't talk to me. I'm in the zone. Greatness requires silence, and you've never once been silent in your life." },
      { choose: [
        { t: "(Stay silent. Very loudly.)", notes: 3, then: [
          { n: "She stood beside him radiating silence with her whole body until he cracked and laughed and the claw dropped the dog three centimeters from the chute." },
          { s: 'jihoon', f: 'happy', t: "That was YOU. That was sabotage. I'm telling Nana. He'll take my side. He always takes my side." }
        ] },
        { t: "It's rigged. They're all rigged.", notes: 2, then: [
          { s: 'jihoon', f: 'serious', t: "I know it's rigged. I'm not playing the claw. I'm playing the guy who rigged it. Psychologically. And I'm winning. He just doesn't know yet." }
        ] },
        { t: "Let me try.", notes: 2, then: [
          { s: 'jihoon', f: 'surprised', t: "You? Your hand-eye coordination is a hate crime. Okay. Go. Embarrass yourself. I'll hold your bag and film it for the group chat." },
          { n: "She missed. He looked deeply, visibly relieved, and then pretended he hadn't been filming." }
        ] }
      ] },
      { n: "He went back to the counter for one last coin. He called it the last coin twice, to make it binding, and the claw came down and caught the dog by its middle and carried it all the way over the chute without opening. For a second neither of them moved. Then he hit the glass with both hands." },
      { cg: 'link-jihoon-crane' },
      { n: "He pulled it out of the prize door and held it between them, absurdly pleased, one soft ear folded over his thumb. Solar put her hand under its paws. It was heavier than it looked, and warm from the lights inside the machine, and he didn't let go until she had it." },
      { s: 'jihoon', f: 'neutral', t: "Don't thank me. It's not for you. It's for Nana. You're just the courier." },
      { cg: null }
    ],
    [
      { n: "He'd found the one convenience store in Iwatodai that sold the right brand of ice cream sandwich, which he said was a sign from God, who was clearly a fan, and they were eating them on the low wall outside it in the cold, which was his idea of a balanced diet." },
      { s: 'jihoon', f: 'neutral', t: "You're eating it from the wrong end. You always eat it from the wrong end. It's like watching someone put on a shirt backwards and then go to a funeral in it." },
      { choose: [
        { t: "(Turn it around. For him.)", notes: 3, then: [
          { s: 'jihoon', f: 'happy', t: "Thank you. Thank you. My blood pressure just went down eleven points. Pilates and you doing what I say. That's my whole wellness routine." }
        ] },
        { t: "(Keep eating it from the wrong end, maintaining eye contact.)", notes: 3, then: [
          { s: 'jihoon', f: 'serious', t: "Monster. You're a monster. I've known you were a monster since preschool. I just thought you'd grow out of it. Like your bangs." },
          { s: 'solar', f: 'neutral', t: "What's wrong with my bangs?" },
          { s: 'jihoon', f: 'neutral', t: "Nothing, now. I'm talking about the first time. Tragic. Your mom still has the pictures. I've seen them. I've seen them more than once, on purpose." }
        ] }
      ] }
    ],
    [
      { n: "He'd walked over from the guesthouse at seven in the morning to do pilates on the dorm roof, because the guesthouse roof, he said, didn't have the right energy, on a yoga mat he'd borrowed from Yukari under circumstances nobody would explain, in the wind, with the grave dignity of a man who had been told by a website that his core was a temple." },
      { s: 'jihoon', f: 'serious', t: "Don't laugh. This is how I maintain this body. You think this happens by accident? You think God just hands out shoulders like these?" },
      { choose: [
        { t: "(Get on the mat with him.)", notes: 3, then: [
          { n: "She lasted forty seconds in the plank before her arms filed a formal complaint. He lasted three minutes and then collapsed sideways onto the mat and lay there staring at the sky, extremely pleased, gasping." },
          { s: 'jihoon', f: 'happy', t: "Light of your disgusting life. Say it. Say it while I can't breathe, it'll mean more." }
        ] },
        { t: "Akihiko-senpai is watching you from the door.", notes: 2, then: [
          { s: 'jihoon', f: 'surprised', t: "Is he judging me or respecting me? I genuinely can't tell with him. His face only does one thing. It's like talking to a very handsome fridge." },
          { n: "Akihiko was, it turned out, timing him." }
        ] }
      ] }
    ]
  ],
  stretchHangouts: [
    [
      { n: "Game Panic had gone pink for February. Every crane game on the floor had been restocked with plush hearts, red and pink and one sickly lavender, all of them with the same stitched smile, piled up behind the glass like a landslide of feelings nobody had asked for." },
      { s: 'jihoon', f: 'serious', t: "No. Absolutely not. I don't do hearts. Hearts are for amateurs and Sunghoon. I'm not putting a single coin into that machine. I have standards. I have a reputation in this mall." },
      { n: "He'd put four coins into it by the time she'd finished taking her coat off. He said that didn't count, because he was aiming for the lavender one, and the lavender one wasn't a heart, it was a cry for help." },
      { choose: [
        { t: "(Take the joystick and win him the ugliest one.)", notes: 3, then: [
          { n: "It took her eleven tries and most of her change. The lavender heart came up by one stubby arm and swung over the chute and dropped in, and he looked at it in the prize door for a long time without picking it up." },
          { s: 'jihoon', f: 'neutral', t: "That's the worst thing anyone's ever given me. I'm keeping it forever. I'm going to be buried with it. Don't tell Asahi." }
        ] },
        { t: "(Stand behind him and say *heart* every time the claw drops.)", notes: 2, then: [
          { s: 'jihoon', f: 'serious', t: "Stop. Stop it. You're getting into my head. My head is a fortress." },
          { n: "She said it again. He missed again. He laughed so suddenly he had to hold on to the machine." }
        ] },
        { t: "Just admit you want one.", notes: 1, then: [
          { s: 'jihoon', f: 'neutral', t: "I want nothing. I'm a monk. I'm a very handsome monk with a coin problem." }
        ] }
      ] }
    ],
    [
      { place: 'Iwatodai · Riverside', time: 'After School' },
      { n: "He'd bought two cups of hot amazake from the old man with the cart by the bridge and was walking the river path in his coat, unbuttoned, in February, with the wind coming up off the water like it had a personal grudge against him." },
      { s: 'jihoon', f: 'neutral', t: "Buttons are for people with weak constitutions. I run hot. It's a medical fact. Doctors have remarked on it." },
      { n: "His ears were the color of the amazake cups, which were red. His free hand was in his pocket so deep it was nearly at his knee." },
      { choose: [
        { t: "(Stop him. Button his coat, top to bottom, while he complains.)", notes: 3, then: [
          { n: "She did it one button at a time, slowly, on purpose, while he held both cups above his head and told the river he was being oppressed. At the top button she turned his collar up. He stopped talking. He looked down at her with the expression of a man who'd been tucked in." },
          { s: 'jihoon', f: 'happy-2', t: "...This changes nothing. I'm still running hot. It's just warmer now. Unrelated." }
        ] },
        { t: "(Put your cold hand on the back of his neck.)", notes: 2, then: [
          { s: 'jihoon', f: 'surprised', t: "SOL. That's ASSAULT. With a deadly HAND." },
          { n: "He buttoned the coat himself, all the way up, glaring at her, and drank his amazake with his chin tucked into the collar like a turtle with a grudge." }
        ] },
        { t: "You're going to get sick.", notes: 1, then: [
          { s: 'jihoon', f: 'neutral', t: "I don't get sick. I get dramatic. It looks the same from the outside." }
        ] }
      ] }
    ],
    [
      { place: 'Iwatodai Dorm · Rooftop', time: 'After School' },
      { n: "The rematch had been postponed since October for reasons Jihoon described as scheduling and Akihiko described as *he keeps not showing up,* and now it was February and there was frost on the roof and two mats laid out side by side on it, and Junpei was refereeing from inside the stairwell door, with the door mostly shut." },
      { s: 'junpei', f: 'happy', t: "Four minutes! It's freezing and they're still going! I can't feel my stopwatch hand! This is the dumbest thing I've ever loved!" },
      { s: 'jihoon', f: 'serious', t: "Sol. Talk to me. Tell me something mean about him. Something I can use." },
      { s: 'akihiko', f: 'neutral', t: "Talking still uses your core." },
      { s: 'jihoon', f: 'serious', t: "My core has been training for five months. My core has seen things." },
      { choose: [
        { t: "(Lie down on the frost between them and plank too.)", notes: 3, then: [
          { n: "She lasted a minute and twenty, which was better than September by a whole minute, and when she went down Jihoon looked over at her flat on the mat and grinned so wide his arms shook, and held on, and held on, and lasted seven minutes and four seconds, and Akihiko, at seven and five, went down on purpose. She saw him do it. Jihoon didn't. She decided he never would." },
          { s: 'jihoon', f: 'happy', t: "HISTORY. Write it down. Junpei, write it down. Junpei, open the door and write it down." }
        ] },
        { t: "He's never once lost to you. He's being nice.", notes: 2, then: [
          { s: 'jihoon', f: 'surprised', t: "Nice? NICE? Senpai. Are you being nice to me? Look at me. Don't you dare be nice to me." },
          { s: 'akihiko', f: 'happy', t: "...I'm not being nice." },
          { n: "He was a little bit. Jihoon could tell. He held on another minute out of pure outrage and lost anyway, and was happier about it than he'd been about winning anything all month." }
        ] },
        { t: "It's below zero. Please come inside.", notes: 1, then: [
          { s: 'jihoon', f: 'neutral', t: "Inside is for people who've given up. I'll come inside when I'm a legend. Twenty more seconds. Thirty. A minute." }
        ] }
      ] }
    ]
  ],
  ranks: [
    { after: '9/20', title: '1: the unopened tub', place: 'Iwatodai Dorm · Front', time: 'Evening', music: 'night', scene: [
      { n: "Mitsuru had found him a room at the Kirijo guesthouse by the station, with a key and a futon and a view of the tracks, and he had come back to the dorm for dinner anyway, uninvited, and stayed. Solar found him on the front steps afterward, with his elbows on his knees and a tub of ice cream between his feet. The porch light was on. He hadn't taken the lid off." },
      { n: "She'd heard him in the kitchen earlier, arguing with Junpei about the curry, loudly, winning, and now the quiet was so complete she stopped with her hand still on the door. Solar didn't know him, and still somehow knew that for Park Jihoon this was a medical event." },
      { register: 'jihoon' },
      { choose: [
        { t: "(Sit down next to him.)", notes: 3, then: [
          { n: "She sat down on the step beside him. Not close. The stone was cold through her skirt. He didn't look at her. He moved his feet over, a few centimeters, to make room for hers, which she understood was a whole sentence." }
        ] },
        { t: "Are you okay?", notes: 2, then: [
          { s: 'jihoon', f: 'neutral', t: "Wow. Look at you. Concerned. You've never asked me that in your life. You usually just ask where your ice cream is." },
          { s: 'jihoon', f: 'sad', t: "...No. Obviously not. I'm devastated. Look at me. This is a devastated face. It's still a very handsome face, but it's devastated." }
        ] },
        { t: "(Bring out the ice cream.)", notes: 3, then: [
          { n: "He'd refused to take the tub to the guesthouse. It lived in the dorm freezer, he'd told Mitsuru, because it was hers, and nobody had argued with him, because nobody had known how. She brought it out with two spoons, still hard as a rock though it had sat in a boy's arms all night in a city that turned green, and set it on the step between them." },
          { s: 'jihoon', f: 'surprised', t: "..." },
          { s: 'jihoon', f: 'neutral', t: "That's MY move. That's my whole brand. You can't steal my brand. I'll sue. I'll win, too. I'm very likeable in court." }
        ] }
      ] },
      { s: 'jihoon', f: 'neutral', t: "Do you know what it's like? To come round a corner at the girl you've known since preschool, and have her look at you like you're a guy handing out flyers?" },
      { s: 'jihoon', f: 'serious', t: "I know you. I know you're scared of needles. I know you can't add to save your life. I know you cry at every rom-com, even the bad ones, especially the bad ones. I know your perfume. I could find you in the dark with it. I have." },
      { s: 'jihoon', f: 'sad', t: "And you looked at me like I was a stranger asking for directions. Me. The almighty Hoon. Reduced to directions." },
      { n: "He laughed, short and wet, and scrubbed the heel of his hand across his eyes like he was annoyed at them for doing it without permission." },
      { s: 'jihoon', f: 'neutral', t: "I was on my way to your house. With the large tub. Don't ask me why. It doesn't matter why. I was on my way, because apparently that's what I do, even when..." },
      { s: 'jihoon', f: 'neutral', t: "...Whatever. I was on my way. And then the street was green, and you were standing in it, and you didn't know me." },
      { choose: [
        { t: "I'm sorry.", notes: 2, then: [
          { s: 'jihoon', f: 'serious', t: "Don't apologize to me. You never apologize to me. You tell me to shut up and then you steal my fries. Stop it. It's creepy." }
        ] },
        { t: "Tell me something about me. Anything.", notes: 3, then: [
          { s: 'jihoon', f: 'neutral', t: "Anything. Okay. Easy. I'm a font of knowledge." },
          { s: 'jihoon', f: 'neutral', t: "You walk your dog at six-thirty in the morning because you like the birds. You'd never admit that. You say it's for the exercise." },
          { s: 'jihoon', f: 'happy', t: "His name is Nana. He's huge and fluffy and his legs look stupid, and he loves me more than he loves you. That's not an opinion. That's been documented." },
          { n: "Something went through her at *Nana*, warm and heavy and soft, like a big animal leaning its whole weight against her shins. She didn't know the name. She knew the weight." }
        ] },
        { t: "(Take a spoonful of the ice cream and don't say anything.)", notes: 3, then: [
          { n: "She took a spoonful. It was cookies and cream. She'd known it would be before the lid came off." },
          { s: 'jihoon', f: 'neutral', t: "...Yeah. Of course. Of course that's the part of you that survived. Not me. The ice cream. Unbelievable." }
        ] }
      ] },
      { s: 'jihoon', f: 'serious', t: "Okay. Here's the new rule." },
      { s: 'jihoon', f: 'serious', t: "You don't get to be rid of me this easily. I'll be so annoying you'll have to remember me just to file a complaint." },
      { s: 'jihoon', f: 'happy', t: "Last time it took you fourteen years to notice anything about me. I'm not waiting fourteen years. I do pilates. I'm efficient." },
      { n: "He stood up, and stretched like a cat that owned the building, and held out a hand to pull her up off the cold step, and she took it, and his hand closed around hers the way you'd close a door you'd closed ten thousand times, without looking, and she had to stand there for a second after he let go." }
    ] },

    { after: '9/27', title: '2: the plank', place: 'Iwatodai Dorm · Rooftop', time: 'After School', scene: [
      { n: "Akihiko had made the mistake, on Wednesday, of mentioning to Jihoon that he did a four-minute plank every morning, and Jihoon had heard this the way a dog hears the word *walk,* and now it was Sunday afternoon and he'd come over from the guesthouse with a yoga mat under his arm and the dorm roof had become an arena." },
      { n: "Two mats. Two boys, side by side on their forearms, perfectly straight, perfectly still, staring at the concrete like it had insulted their families. Junpei was refereeing from a deck chair with a stopwatch and a bag of chips. Yukari had come up to hang laundry and stayed, in the doorway, with the expression of a woman watching two dogs try to share a single stick." },
      { s: 'junpei', f: 'happy', t: "Five minutes! Ladies and gentlemen, we are at five minutes! This is historic! This is the Olympics of not moving!" },
      { s: 'jihoon', f: 'serious', t: "Sol. Sol. Talk to me. I need a distraction. Tell me I'm better than him. Lie if you have to. Especially if you have to." },
      { s: 'akihiko', f: 'serious', t: "Talking uses your core." },
      { s: 'jihoon', f: 'serious', t: "MY CORE IS FINE. MY CORE IS A TEMPLE. PEOPLE WORSHIP AT IT." },
      { choose: [
        { t: "You're better than him.", notes: 2, then: [
          { s: 'akihiko', f: 'serious', t: "She's lying. She does that when she wants someone to keep going." },
          { s: 'jihoon', f: 'surprised', t: "How do YOU know that? You've known her five months. I've known her FOURTEEN YEARS. I have seniority. I have tenure." },
          { s: 'akihiko', f: 'neutral', t: "...She does, though." },
          { s: 'jihoon', f: 'serious', t: "I KNOW she does. I invented knowing that." }
        ] },
        { t: "Akihiko-senpai is better than you.", notes: 3, then: [
          { s: 'jihoon', f: 'surprised', t: "BETRAYAL. In my own— in his own home. Fine. That's fine. I'm writing it down." },
          { n: "He held on another ninety seconds out of pure spite, his whole body shaking like a bridge in an earthquake, and she watched him do it and laughed until her stomach hurt, and somewhere in the laugh she knew she'd done this to him before, said exactly the wrong thing to make him hold on longer, a hundred times, on purpose." }
        ] },
        { t: "(Sit on Jihoon's back.)", notes: 3, then: [
          { n: "She sat on his back. He made a sound like a stepped-on accordion, and held, and held, and Akihiko glanced over with real, startled respect, and then she felt the plank go out of him all at once and they both went down on the mat in a heap." },
          { s: 'jihoon', f: 'happy', t: "That doesn't count. That was a hostile intervention. You're heavy, by the way. I'm not being mean, I'm being medical. I want a rematch. I want the UN." }
        ] }
      ] },
      { n: "Akihiko won. Akihiko always won. He held it for seven minutes and then got up and offered Jihoon a hand off the mat and a protein shake, pink, and Jihoon took both with the face of a deposed monarch accepting a surrender he hadn't offered." },
      { s: 'jihoon', f: 'neutral', t: "He's fine. He's fine. I don't like him, but he's fine. His shirts are too small on purpose. I respect it. I hate it." },
      { s: 'jihoon', f: 'neutral', t: "He looks at you like you're a stopwatch he's scared he'll drop. I don't trust that in a guy. I trust guys who look at you like you owe them money. That's honest." },
      { s: 'solar', f: 'neutral', t: "How does a guy look at me usually?" },
      { s: 'jihoon', f: 'serious', t: "Like you're going to steal their fries. Which you are. Which you do. Which is why only I'm allowed near you at restaurants." },
      { n: "Afterward, when Akihiko had gone down to shower and Junpei had gone down to tell everyone, at length, what they'd missed, Jihoon lay flat on his back on the mat in the cold with his arms out like a starfish and looked at the sky." },
      { s: 'jihoon', f: 'neutral', t: "I haven't done it since I got here. Pilates. A week. I talk about it so much you'd think I'd never miss a day. Ask the group chat. They'd pay money for me to miss a day." },
      { s: 'jihoon', f: 'sad', t: "And then I got here and I just. Didn't. I lay on that guesthouse futon every morning and looked at the ceiling. It felt stupid. Keeping my core a temple when you didn't know my name." },
      { s: 'jihoon', f: 'neutral', t: "...I wasn't really doing it at home either. Lately. I wasn't doing a lot of things lately. Don't make the face. Forget I said that. You're good at forgetting, apparently." },
      { choose: [
        { t: "Your core's still a temple.", notes: 3, then: [
          { s: 'jihoon', f: 'happy', t: "IT IS. Thank you. Somebody gets it. Somebody finally respects the temple. Finally a fan with taste." },
          { n: "He sat up so fast the mat slid. He looked, for a second, exactly like himself, which she knew without knowing how she knew." }
        ] },
        { t: "Do it tomorrow morning. I'll time you.", notes: 3, then: [
          { s: 'jihoon', f: 'surprised', t: "..." },
          { s: 'jihoon', f: 'neutral', t: "Six-thirty. On this roof. I'll walk over. You'll be late. You're always late to my things. Be late anyway. Just come." }
        ] }
      ] },
      { n: "He drank half the protein shake and made a face and gave her the other half without asking if she wanted it, and she drank it, and it was disgusting, and it was the second time in a week someone had handed her the rest of something like it was obviously hers." },
      { s: 'jihoon', f: 'neutral', t: "Rematch Wednesday. Tell him. I'll be ready. I'll have trained in my mind, which is my strongest muscle, after all the other ones." }
    ] },

    { after: '10/7', title: '3: father jihoon', place: 'Paulownia Mall · Central Atrium', time: 'After School', scene: [
      { n: "Paulownia Mall's fountain was doing its loud, ordinary thing, throwing water up at the glass roof so the whole atrium smelled faintly of chlorine and pretzels, and Jihoon was sitting on its rim with his phone held up to her face, scrolling, with the absolute focus of a man presenting evidence in court." },
      { s: 'jihoon', f: 'happy', t: "Okay. This one. Look at this one. Look at his face. Look at his little legs. Tell me that's not the most beautiful creature God ever made, after me." },
      { n: "A dog. An enormous, impossibly fluffy white dog with a grin like a sofa cushion, sitting on a kitchen floor wearing a paper party hat, looking at the camera with the profound dignity of someone who did not consent to the hat." },
      { s: 'jihoon', f: 'happy', t: "You made the hat. It's a cone. You couldn't make a cone. It's a triangle you stapled to a different triangle and then cried about." },
      { s: 'jihoon', f: 'neutral', t: "This one, he's sleeping on your face. This one, he's sleeping on MY face, which he's only done once, and it was the best day of my life. This one, he's eating your homework. Honestly, he did you a favor. You'd done it wrong." },
      { choose: [
        { t: "(Keep scrolling. Don't stop.)", notes: 3, then: [
          { n: "She took the phone out of his hand and kept scrolling, and he let her, and leaned in beside her on the fountain rim to narrate, and it went on for six hundred photographs. Nana in a yard. Nana in a bathtub. Nana with his head out a car window and Jihoon's elbow in the corner of the frame, and the car was his, she knew it was his, she knew it smelled like fries, and she had never been in a car in her life, here." },
          { s: 'jihoon', f: 'neutral', t: "...You're doing the face. You do this face when you see him. Like he's a cake. You've never once made that face at me, and I'm much better looking." }
        ] },
        { t: "Why are you his father?", notes: 3, then: [
          { s: 'jihoon', f: 'serious', t: "Because your parents say I'm basically their kid. So legally that makes him my son. That's how families work. Look it up." },
          { s: 'jihoon', f: 'happy', t: "He's my son. In my heart. In the eyes of the law, probably. He loves me. You're just the woman he lives with." }
        ] },
        { t: "He looks like Koromaru.", notes: 1, then: [
          { s: 'jihoon', f: 'surprised', t: "He looks NOTHING like Koromaru. Koromaru is a professional. Nana is a disaster in a fur coat. Take that back before he hears you. He has very good hearing for a disaster." }
        ] }
      ] },
      { n: "Across the atrium, Koromaru, who had followed them all the way from the dorm without being invited and was sitting very correctly by the bench where Junpei had left him, looked over at the sound of his name with polite interest." },
      { s: 'jihoon', f: 'serious', t: "Don't look at me like that. I'm not replacing anybody." },
      { s: 'jihoon', f: 'neutral', t: "...Okay, he's a very good boy. He's a very good boy. Don't tell Nana. Nana's the jealous type. He gets it from his mother." },
      { n: "He got up and went and crouched in front of Koromaru and talked to him for five full minutes in a low earnest voice she couldn't hear, about, she suspected, Nana, and Koromaru listened to the whole thing and then put a paw on his knee, and Jihoon came back looking like someone had given him a medal." },
      { s: 'jihoon', f: 'neutral', t: "He gets it. He's got a person too. Somebody who's somewhere he can't get to. I could tell. We're basically the same, me and that dog. Tragic, loyal, unbelievably handsome." },
      { choose: [
        { t: "Do you miss him? Nana?", notes: 3, then: [
          { s: 'jihoon', f: 'sad', t: "Every day. I don't even know if it's been days. My phone says it's still the same night. My stomach says it's been a month." },
          { s: 'jihoon', f: 'neutral', t: "He's probably fine. Your mom's probably feeding him. ...Okay, your mom's probably at work. He's probably feeding himself. He's resourceful. He gets that from me." },
          { s: 'jihoon', f: 'serious', t: "I'm not going back without you. Just so you know. He'd never forgive me. He'd sit on me until I died." }
        ] },
        { t: "(Lean your head on his shoulder.)", notes: 3, then: [
          { n: "She put her head on his shoulder. He went rigid like a man who'd been told a bee had landed on him. Then, slowly, he relaxed, and put his chin on top of her head, and said, very quietly, that her hair smelled wrong, that it was the dorm shampoo, that it was cheap and he hated it, and that it was fine, and that he'd get used to it." }
        ] }
      ] },
      { place: "Iwatodai Dorm · Solar's Room", time: 'Late Night', soft: true },
      { n: "He sent her the rest at midnight. All of them. Her phone went off on the pillow like a slot machine paying out." },
      { phone: [
        { from: 'jihoon', t: "sent u 40 more pics of our Son" },
        { from: 'jihoon', t: "[image]" },
        { from: 'jihoon', t: "this one is Art. frame it" },
        { from: 'solar', t: "HES SO FLUFFY WHAT" },
        { from: 'solar', t: "why is he wearing a hat. who did this to him" },
        { from: 'jihoon', t: "Do Not question the Hat. u made the hat" },
        { from: 'solar', t: "i would NEVER make a hat that ugly" },
        { from: 'jihoon', t: "u Did and u were Proud" },
        { from: 'jihoon', t: "go to sleep skank. Father Jihoon has spoken" },
        { from: 'solar', t: "ASDFGHJKL GOODNIGHT" }
      ], contact: 'jihoney' },
      { n: "She looked at what she'd typed. All capitals, a fistful of letters, the way her thumbs had wanted to do it. She hadn't told them to. She put the phone face down on her chest and laughed at the ceiling like an idiot, alone, in the dark." }
    ] },

    { after: '10/11', title: '4: the crane game', place: 'Paulownia Mall · Game Panic', time: 'After School', music: 'city', scene: [
      { n: "He'd been feeding the crane game for forty minutes. She'd stopped counting the coins at three thousand yen, which had taken a while, because he'd been changing them in small batches at the counter as if that made it less, and the girl at the counter had started greeting him by name." },
      { s: 'jihoon', f: 'serious', t: "It's an investment. You don't understand investments. Your parents would respect this. They love me. They've loved me longer than they've loved you, probably." },
      { n: "The prize was a plush sun with a face. Round, yellow, a little lopsided, with a stitched smile and two pink cheeks, wedged in the corner of the glass case under three penguins and a bear. He'd seen it the second they walked in and stopped so suddenly she'd walked into him." },
      { s: 'jihoon', f: 'neutral', t: "It's your poster. It's literally your poster. The sun with the face. I came over that Sunday and there were posters on every surface of your room and you screamed when I sat on one. I didn't even crease it. Much." },
      { s: 'jihoon', f: 'neutral', t: "I'm not leaving it in there. It's yours. It's in jail. I don't leave things that are yours in jail." },
      { n: "The claw came down. Caught the sun by one ray. Lifted it. Swung it over the chute, wobbling, the whole case seeming to hold its breath. And let go. The sun dropped back onto the penguins and lay there, smiling at the ceiling." },
      { n: "He put another coin in. He didn't even look at her. He just put another coin in, and his jaw was set, and there was a groove between his eyebrows she'd seen before, somewhere, in a different light, over a different glass case, and her chest went tight." },
      { n: "The claw slipping. The claw slipping again. Someone beside her feeding it coins anyway, and anyway, and anyway, with the same set jaw, in a mall that smelled of caramel corn instead of pretzels, in a blazer the same navy as this one, while she stood beside him holding a cup of tokens and telling him to give up and not meaning it at all." },
      { fragment: 'hoax-crane-game' },
      { n: "The star on Haenim's sash ticked, a tiny sound, a pin on a desk." },
      { choose: [
        { t: "You've done this before. For me.", notes: 3, then: [
          { s: 'jihoon', f: 'surprised', t: "..." },
          { s: 'jihoon', f: 'neutral', t: "Sixty-two times. Sixty-two times, at the mall at home, for a stupid little dog keychain. You said it looked like Nana. It did not look like Nana. Nana has dignity. I got it on sixty-three." },
          { s: 'jihoon', f: 'serious', t: "You put it on your bag and you never took it off. You never said thank you, either. You just put it on your bag like it was tribute. Which, fine. It was." }
        ] },
        { t: "Give up. It's rigged.", notes: 2, then: [
          { s: 'jihoon', f: 'neutral', t: "You always say that." },
          { s: 'jihoon', f: 'neutral', t: "You never mean it. You're saying it right now and you don't mean it. I can tell. Your left eyebrow. It's a terrible liar. Worse than you." }
        ] },
        { t: "(Take over the joystick.)", notes: 3, then: [
          { n: "She put her hand over his on the joystick. He let her steer. It didn't help, at all, the claw still slipped, but he laughed for the first time in forty minutes, and the girl at the counter looked over, and smiled, and quietly went and opened the back of the machine." }
        ] }
      ] },
      { n: "He got it on the next try, or the girl at the counter got it for him, depending on who you asked afterward, and he held it up in the noise and the lights of Game Panic like a fish he'd caught with his bare hands in a river full of lesser men." },
      { s: 'jihoon', f: 'happy', t: "HA. HA. Light of your disgusting life. Say it." },
      { s: 'solar', f: 'neutral', t: "Light of my disgusting life." },
      { n: "He stopped laughing. He looked at her with the sun hanging out of his fist by one ray. She'd said it in exactly the voice she used to say it. Flat. Bored. Like she was reading it off a cereal box. Her voice. Her old voice. He put the sun into her arms and turned around and walked very fast to the bathroom and was gone for six minutes, and when he came back he said there'd been a line, and there hadn't." }
    ] },

    { after: '10/18', title: '5: rightfully my job', place: 'Iwatodai Dorm · Lounge', time: 'Night', music: 'tender', scene: [
      { n: "The night after the tower he didn't come to the mall. He didn't text. He didn't go back to the guesthouse, either. He was on the lounge sofa at the dorm when she came down at nine, under Junpei's spare blanket, with his phone face down on his chest and his arm over his eyes, and he didn't take the arm away when she sat down on the other end." },
      { n: "She'd been there. In the floor full of ballot boxes that breathed, under a banner with her own face on it, when the thing at the top of the stairs had opened its slot like a mouth and he'd gone white, and swayed, and started, very quietly, to forget. She'd watched it happen. She'd watched him look at her and frown like she was a word on the tip of his tongue." },
      { n: "And then she'd watched him laugh, a big ugly furious laugh straight up into the green, and something had stood up behind him out of nowhere, grinning, swinging something heavy, and the ballot boxes had gone over like dominoes." },
      { s: 'jihoon', f: 'neutral', t: "Don't." },
      { s: 'jihoon', f: 'neutral', t: "Don't say it was cool. Junpei said it was cool. Junpei says everything's cool. I'm going to throw up if one more person who isn't me says it was cool." },
      { choose: [
        { t: "It wasn't cool. It was terrifying.", notes: 3, then: [
          { s: 'jihoon', f: 'neutral', t: "...Thank you." },
          { s: 'jihoon', f: 'neutral', t: "Thank you. Yeah. It was." }
        ] },
        { t: "(Pull his feet into your lap.)", notes: 3, then: [
          { n: "She pulled his feet into her lap, socks and all, the way you'd pull a blanket over someone, and he didn't take his arm off his eyes, but his whole body went loose all at once, like a string had been cut." }
        ] },
        { t: "It was a little bit cool.", notes: 1, then: [
          { s: 'jihoon', f: 'serious', t: "I hate you." },
          { s: 'jihoon', f: 'neutral', t: "...It was a little bit cool. I'm allowed to say it. You're not." }
        ] }
      ] },
      { s: 'jihoon', f: 'serious', t: "It said I could stop." },
      { s: 'jihoon', f: 'neutral', t: "That thing. It said I didn't have to remember you anymore. That it'd stop hurting. That I could go home to a night where you were just a girl from school I used to know, and I'd be fine, I'd be totally fine, I'd have so much free time." },
      { s: 'jihoon', f: 'sad', t: "And the worst part is it sounded nice. It sounded like every bad idea I've ever had. I know that voice, Sol. I've said yes to that voice. More than once. Lately." },
      { s: 'jihoon', f: 'sad', t: "And I started to. I started to. You were standing right there and I was looking at you and your name was going." },
      { n: "He took his arm off his face. His eyes were red. He looked at the ceiling." },
      { s: 'jihoon', f: 'serious', t: "And I thought, absolutely not. Who's going to bring you ice cream? Junkyu? Junkyu doesn't even have a car." },
      { s: 'jihoon', f: 'neutral', t: "As your best friend it is rightfully my job. To remember you. That's the job. Somebody's got to do the job, and it's me, it's always been me, I'm number one, Cherry can fight me. Cherry will fight me. I'll win. I do pilates." },
      { s: 'jihoon', f: 'neutral', t: "...Did I look cool, though. Be honest. When the thing came up. Be completely honest. Be slightly dishonest if you need to." },
      { choose: [
        { t: "You looked terrifying.", notes: 3, then: [
          { s: 'jihoon', f: 'happy', t: "Terrifying is cool. Terrifying is the coolest kind of cool. Thank you. I can sleep now. On your couch. It's my couch now." }
        ] },
        { t: "You looked like you.", notes: 3, then: [
          { s: 'jihoon', f: 'neutral', t: "...What does that mean." },
          { s: 'solar', f: 'neutral', t: "Loud. Laughing. Not letting go of something you'd decided was yours." },
          { s: 'jihoon', f: 'sad', t: "...Yeah. Yeah, okay. That's me. That's literally me. You've known me for one month and you've got me exactly. That's so annoying. That's so you." }
        ] }
      ] },
      { choose: [
        { t: "You're number one.", notes: 3, then: [
          { s: 'jihoon', f: 'surprised', t: "..." },
          { s: 'jihoon', f: 'happy', t: "Say that again. Say it into my phone. I need it on record. I'm making it my ringtone. Cherry is going to lose her mind." }
        ] },
        { t: "Thank you for keeping me.", notes: 3, then: [
          { s: 'jihoon', f: 'neutral', t: "Don't thank me. That's weird. You never thank me. You just steal my fries and tell me to shut up." },
          { n: "But he reached out without looking and grabbed her hand off the sofa cushion and held it, hard, on his chest, over his heart, the way you'd hold onto a railing on a ship, and he didn't let go for a long time." }
        ] }
      ] },
      { n: "Mitsuru came down at eleven to check the doors, and found them both asleep on the sofa, his feet in her lap and her hand still on his chest, and turned the lamp off, and did not, Yukari reported the next day, say a single word about it, or send him back to the guesthouse, which was the most frightening thing anyone had ever seen her do." }
    ] },

    { after: '10/26', title: '6: rivals', place: 'Paulownia Mall · Game Panic', time: 'After School', music: 'city', scene: [
      { n: "There was an air hockey table at the back of Game Panic that nobody played because the fan underneath it had died sometime in the nineties and the puck dragged like it was moving through soup, and that, apparently, was where the two of them had decided to settle it." },
      { n: "Settle what, nobody could say. Jihoon on one side, sleeves pushed up, mallet held like a weapon. Jungwon on the other, blazer buttoned, mallet held like a fountain pen. Jungwon hadn't been invited. He'd turned up anyway, the minute Jihoon had, the way he'd been turning up wherever Jihoon was all week, politely, without explanation. Both of them smiling. Neither of them meaning it." },
      { s: 'jungwon', f: 'happy', t: "First to seven, then? Unless you'd prefer five. Some people prefer five." },
      { s: 'jihoon', f: 'serious', t: "Don't do the dimples at me, Yang. Save them for the faculty." },
      { n: "Solar sat on the skee-ball lane next door with a cup of tokens and watched them play the slowest, most vicious game of air hockey in the history of the world. Jungwon played like he played everything, precise angles off the wall, the puck going exactly where he'd decided. Jihoon played like he was trying to break the table, and the table, and Jungwon, in that order." },
      { s: 'jihoon', f: 'serious', t: "Sol. Sol. Who are you rooting for." },
      { s: 'jungwon', f: 'neutral', t: "You don't have to answer that." },
      { s: 'jihoon', f: 'serious', t: "She does have to answer that. That's what rooting is. It's a whole concept. Look it up in one of your four hundred textbooks." },
      { choose: [
        { t: "Jihoon.", notes: 3, then: [
          { s: 'jihoon', f: 'happy', t: "HA. Did you hear that? Write it in your little minutes." },
          { n: "He scored. Off the wall. Badly. It went in anyway. Jungwon looked at the puck in the slot for a second and then bowed his head to Solar, very slightly, like a gentleman accepting the verdict of a court he'd suspected was rigged." }
        ] },
        { t: "The table. I'm rooting for the table.", notes: 2, then: [
          { s: 'jungwon', f: 'happy', t: "That's fair. The table's suffered the most." },
          { s: 'jihoon', f: 'serious', t: "That's a cop-out. That's a political answer. You sound like him. That's the worst thing I've ever said to you and I've said a lot." }
        ] },
        { t: "(Don't answer. Feed tokens into the skee-ball.)", notes: 2, then: [
          { n: "She didn't answer. Both boys glanced at her, and then at each other, and for one second they were exactly the same person, waiting for the same thing, and both of them saw it, and both of them hated it." }
        ] }
      ] },
      { n: "Jungwon won. Seven to six. He laid his mallet on the table very neatly and thanked Jihoon for the game, and Jihoon said a word to him that Mitsuru would have confiscated, and Jungwon smiled like he'd been given a compliment and went off to buy everyone a drink." },
      { n: "He came back with three cans from the vending machine by the door. He held one out to Solar first, and one to Jihoon second, without a word, and stood there with his own, waiting, very close to Solar's shoulder, the way you'd stand next to someone in a crowd you didn't trust." },
      { n: "Jihoon looked at the can. He looked at where Jungwon was standing. He looked at it for a long time. Then he took the can." },
      { s: 'jihoon', f: 'neutral', t: "...Thanks, Yang." },
      { s: 'jungwon', f: 'neutral', t: "You're very welcome, Park." },
      { s: 'jihoon', f: 'serious', t: "Don't. I said thanks. That's the most you get. That's the most anyone's ever gotten." },
      { n: "Jungwon went to return his mallet to the counter, which did not need doing, and stood there doing it with his back half turned, watching them in the reflection of a dead cabinet's screen. Jihoon saw him do it. He smiled at the screen, sharp, and didn't wave." },
      { s: 'jihoon', f: 'neutral', t: "He's not here for the air hockey. He's here because I'm here. He's been doing it all week. Wherever I go, there's Yang, being polite at me." },
      { s: 'solar', f: 'neutral', t: "Why do you hate him?" },
      { s: 'jihoon', f: 'neutral', t: "Because he's good at things. Because he's polite. Because he irons his tie. Because he looks at you like he's taking notes." },
      { s: 'jihoon', f: 'serious', t: "And because at home he won. The election, first. You ran against him because your parents wanted it and Cherry dared you, and you lost, obviously, and then he picked you as his vice president like you were a prize at a fair. And you told him you couldn't. And then you did it anyway. Which is the most you thing that's ever happened." },
      { s: 'jihoon', f: 'neutral', t: "...And then he won the other thing too. He's your boyfriend, Sol. At home. Since some bake sale. That's the most humiliating sentence I've ever said out loud, and I've said a lot of sentences." },
      { s: 'jihoon', f: 'neutral', t: "I wanted you to hear it from me. So it'd be told right. With contempt." },
      { n: "She looked past him, at Jungwon's back in the dead screen, at the careful way he was not turning around. Something in her chest tilted, very slightly, like a glass set down on a table that wasn't level." },
      { s: 'solar', f: 'neutral', t: "Why does he hate you?" },
      { s: 'jihoon', f: 'sad', t: "...Ask him." },
      { s: 'jihoon', f: 'neutral', t: "No. Don't. He'll tell you. He'll tell you exactly, in order, with dates. He's that kind of guy." },
      { s: 'jihoon', f: 'serious', t: "And I don't get to decide who looks at you. I know. I KNOW. You've told me. Like a hundred times. You'd tell me right now if you remembered, you'd do the eyebrow." },
      { choose: [
        { t: "(Do the eyebrow.)", notes: 3, then: [
          { n: "She did the eyebrow. She had no idea which eyebrow it was. Her face found it on its own, the left one, a very slight and devastating lift, and he looked at it and put both hands over his face and groaned like a man who had been shot in a movie." },
          { s: 'jihoon', f: 'happy', t: "THERE it is. God. I missed that. I hate it. I missed it so much." }
        ] },
        { t: "You don't get to decide.", notes: 3, then: [
          { s: 'jihoon', f: 'neutral', t: "I know." },
          { s: 'jihoon', f: 'neutral', t: "I'm still going to bring you ice cream either way. Just so we're clear. Nobody decides that but me. Not even the president." }
        ] }
      ] }
    ] },

    { after: '11/7', title: '7: hate club', place: 'Paulownia Mall · Arcade', time: 'Evening', music: 'city', scene: [
      { n: "Since Halloween the arcade at Paulownia Mall had been louder than it had any right to be, because there were now four more of them, and every one of them talked at once." },
      { n: "Junkyu, small and round-faced, who had hugged her around the middle in the middle of the green street the night he came through and had not, as far as she could tell, fully stopped hugging her since. Asahi, who sat on the back of a bench with his hood up saying the meanest possible thing about everything in a voice so quiet you had to lean in to be insulted. Hyunsuk, who laughed at Asahi's every word like it was a tremendous gift, and kept one eye on Jihoon the whole time, the way you'd watch a pot. Jaehyuk, who said *please* and *thank you* to the change machine, and had asked Jihoon twice already whether he'd been sleeping, and whom everyone, she'd noticed, went quiet for when he actually talked." },
      { n: "And Jihoon, in the middle of it, loudest, with one arm around her neck like she was a trophy he'd won and was refusing to give back." },
      { s: 'junkyu', f: 'happy', t: "Sol! Sol, do you need ice cream and hugs? I already did the hug. Jihoon has the ice cream money." },
      { s: 'jihoon', f: 'serious', t: "I do NOT have the ice cream money. I've spent the ice cream money. I've invested the ice cream money in a crane game. Do Not question my portfolio." },
      { s: 'asahi', f: 'neutral', t: "He's been investing in that crane game for a month. It's the worst portfolio in Asia. Nobody asked, by the way. Nobody ever asks." },
      { s: 'hyunsuk', f: 'happy', t: "LMAO. Asahi. Asahi." },
      { s: 'jaehyuk', f: 'neutral', t: "Please don't say *LMAO* out loud, Hyunsuk." },
      { n: "She knew the chat. It had gone off on her desk in September like a smoke alarm, a whole room of strangers being loud at her in capitals. *Park Jihoon Hate Club.* Jihoon claimed he'd named it himself, to save everyone time. Asahi said that was a lie. Jihoon said Asahi was jealous of his branding." },
      { s: 'jihoon', f: 'happy', t: "Look at this. Look at all of them. All these losers, here, because of you. You're welcome, Sol. I'm the reason. I texted them all first. I'm a leader. Some would say a visionary." },
      { s: 'asahi', f: 'neutral', t: "He did not text us all first. He texted the group chat twenty-four times in capitals. Then he texted it about pilates." },
      { choose: [
        { t: "Thank you. All of you. For coming.", notes: 3, then: [
          { n: "It went very quiet. Even the arcade seemed to dip. Asahi looked at her from under his hood like a cat that had been unexpectedly picked up." },
          { s: 'asahi', f: 'neutral', t: "...Okay, that's weird. She's never thanked anyone in her life. She's thanked Junkyu maybe twice." },
          { s: 'junkyu', f: 'happy', t: "Three times! I keep count!" },
          { s: 'jihoon', f: 'neutral', t: "Leave her alone. She's allowed to be weird. She's been through a lot. She's been to a whole other school. With uniforms that don't even suit her." }
        ] },
        { t: "Is the club for hating him, or for him?", notes: 3, then: [
          { s: 'hyunsuk', f: 'happy', t: "Both. Mostly hating. A little bit for." },
          { s: 'jaehyuk', f: 'neutral', t: "It was for you, actually. Originally. It was for when you were sad. He just named it." },
          { n: "Jihoon's arm around her neck went very tight, and then let go, and he walked off to the crane game without a word, and everyone pretended not to have noticed his ears." }
        ] },
        { t: "(Hug Junkyu back. Properly.)", notes: 2, then: [
          { n: "She hugged Junkyu back, properly, both arms, and he made a sound like a kettle and held on, and over his shoulder she saw Jihoon watching with the face of someone watching his own dog greet somebody else first." },
          { s: 'jihoon', f: 'serious', t: "Unbelievable. In front of me. I'm standing right here. I'm very tall. You can't miss me." }
        ] }
      ] },
      { n: "At the station, while the others went through the gate in a loose noisy knot, Hyunsuk hung back by the ticket machines with his hands in his blazer pockets, and waited until Jihoon was out of earshot, which with Jihoon took a while." },
      { s: 'hyunsuk', f: 'neutral', t: "Hey. He's doing better. Here. Than at home. I'm not going to explain that. It's his to explain." },
      { s: 'hyunsuk', f: 'serious', t: "Just, if he gets weird, text me. Not Jaehyuk. Jaehyuk'll make a pamphlet." },
      { n: "He held out his hand for her phone and opened her contacts to put his number in, and stopped, because it was already there. *geniusuk.* He looked at it for a second longer than he needed to, and gave the phone back, and went through the gate after the others without another word." },
      { n: "Jihoon was waiting on the other side. He fell into step beside her on the platform and bumped her shoulder with his, on purpose, the way you'd knock on a door you knew was open." },
      { s: 'jihoon', f: 'neutral', t: "They're all scared. Just so you know. They're being loud because they're scared. Junkyu cried in the bathroom the first night. Asahi made Hyunsuk sleep on his floor." },
      { s: 'jihoon', f: 'serious', t: "I'm not scared. I'm the only one who's not scared. Someone has to be the strong one, and obviously it's going to be the one with the body." },
      { s: 'solar', f: 'neutral', t: "You're the most scared." },
      { s: 'jihoon', f: 'neutral', t: "...Okay, I see you got your mouth back before your memory. Great. Love that for me." }
    ] },

    { after: '11/21', title: '8: the quiet part', place: 'Iwatodai Dorm · Rooftop', time: 'Night', music: 'night', scene: [
      { n: "He'd brought ice cream to the dorm roof in November, which was insane, and two spoons, and a blanket he'd taken from the dorm's linen cupboard, which he said was technically Mitsuru's, which made it technically fine, which made no sense at all." },
      { n: "The wind was coming off the bay sharp enough to cut. They sat with their backs against the water tank and the blanket over their knees and the tub between them going nowhere, frozen hard as a stone the way it had been every single day since he'd come through, and they ate it anyway, scraping the top." },
      { s: 'jihoon', f: 'neutral', t: "It doesn't melt. Did you notice? It's been in the dorm freezer and my backpack and your desk for two months and it hasn't melted once. I've eaten a third of it. It keeps being the same amount." },
      { s: 'jihoon', f: 'neutral', t: "I think it's waiting for something." },
      { s: 'solar', f: 'neutral', t: "For what?" },
      { s: 'jihoon', f: 'serious', t: "For me to say the thing. Properly. Up here, where nobody can hear me but you and the seagulls, and the seagulls don't count." },
      { n: "He didn't look at her. He scraped the spoon across the top of the ice cream very carefully, like he was trying to write something on it." },
      { s: 'jihoon', f: 'neutral', t: "Here's the thing about me, Sol. Here's my whole thing. I say everything loud. Everything. I say I'm the light of your life. I say I'm your number one. I say I'm the father of your dog. I typed *I am the fucking light of your disgusting life* in the group chat, in front of everybody, so nobody would ever think I meant it." },
      { s: 'jihoon', f: 'serious', t: "That's the trick. If you say the quiet part loud enough, it stops being a part at all. It's just a bit. It's just Jihoon." },
      { s: 'jihoon', f: 'sad', t: "Except it stopped working. This year. A guy who irons his tie started looking at you, and I got so jealous I couldn't see, and I said it quiet, at your front door, like an idiot. And I gave you a bag with a letter in it. *If u wanted a clue, it's the world.* I wrote that. Me. I'm a poet. Nobody knows." },
      { s: 'jihoon', f: 'neutral', t: "And you were nice about it. You were so nice about it. You're always nice about it. And then there was a curb, outside a gym, and you kissed me. And for about a week I thought..." },
      { s: 'jihoon', f: 'sad', t: "And then I did something stupid. Several stupid things. You found out about the first one, and you stopped looking at me like that, and you picked him. You didn't even pick him to hurt me. You just looked happier. That's worse." },
      { n: "The wind took the edge of the blanket and lifted it and dropped it. Somewhere below, a train went over the bridge, all lit up." },
      { s: 'jihoon', f: 'neutral', t: "And now you don't remember any of it. Not him. Not the curb. Not the stupid things. I could tell you anything up here. I could tell you you picked me." },
      { s: 'jihoon', f: 'serious', t: "...I thought about it. For like a week. I'm not a good person, Sol. I'm just a loud one." },
      { s: 'jihoon', f: 'sad', t: "So here it is, quiet. I meant all of it. Every single dumb thing. Since middle school. Everybody knew. Junkyu knew. The lunch ladies knew. You were the only one who didn't." },
      { route: [
        { t: "I know. I always heard it.", route: 'romance', notes: 3, then: [
          { s: 'jihoon', f: 'surprised', t: "..." },
          { n: "It came out of her certain, a thing she'd always known and never said, the way you know the shape of your own front door in the dark. She didn't remember. She didn't need to. Her whole body had been listening to him say it loud for fourteen years." },
          { s: 'jihoon', f: 'happy-2', t: "You— since when. Since WHEN. Did you just— are you messing with me right now? On the ROOF? In NOVEMBER? After that whole speech?" },
          { s: 'solar', f: 'neutral', t: "I need you to not be a dick for like three seconds." },
          { n: "The words came out of her fully formed, from somewhere else, from a curb outside a gym with lights strung in its windows and bugs in the air. She leaned in and kissed him, quickly, to shut him up, and he went absolutely silent for the longest stretch of time she'd ever known him to, which was about four seconds." },
          { s: 'jihoon', f: 'happy-2', t: "...No fucking way." },
          { s: 'jihoon', f: 'happy', t: "I'm going to need you to do that again so I can be sure it wasn't the wind. For science. For the record. For me." }
        ] },
        { t: "You're my best friend. That's not a bit either.", route: 'friend', notes: 3, then: [
          { s: 'jihoon', f: 'neutral', t: "..." },
          { s: 'jihoon', f: 'neutral', t: "No. It's not." },
          { n: "He looked at her for a long time in the dark. Then he nodded, once, the way you'd nod at a call you'd known the ref was going to make, and was glad he'd made it fairly." },
          { s: 'jihoon', f: 'happy', t: "Okay. Good. That's still number one. Yang can have whatever's number two. Number two is for nerds." },
          { s: 'jihoon', f: 'neutral', t: "I'm still going to say it loud, though. I'm not stopping. You'll just have to know I mean it." }
        ] }
      ] },
      { n: "When they went down, the ice cream tub was lighter. She could feel it. He could too. He held it up to the stairwell light and looked at it for a long time, frowning, and then put the lid back on very gently, like it might wake up." }
    ] },

    { after: '12/12', title: '9: little brother', place: 'Paulownia Mall · Shop Windows', time: 'After School', music: 'city', scene: [
      { n: "December had come to Paulownia Mall the way it came to every mall in the world, all at once and with no warning, so that one day there were pumpkins and the next there were silver bells and a tree in the atrium twice the height of the fountain, and a speaker hidden somewhere in it playing the same four Christmas songs on a loop that had already started to get into people's teeth." },
      { n: "Jihoon was shopping for Nana." },
      { s: 'jihoon', f: 'serious', t: "He needs a coat. It's winter at home. Probably. Maybe. I don't know what month it is at home. But it's winter here, and I'm not taking any chances with my son." },
      { s: 'solar', f: 'neutral', t: "He's a dog. He has fur. He's mostly fur." },
      { s: 'jihoon', f: 'neutral', t: "That's exactly what someone who doesn't love him would say. Disgusting. Write that down so I can show him later." },
      { n: "The pet shop on the second floor had a rack of dog coats in every color and three of them were large enough for a dog the size of a sofa, and he held each one up in turn against Solar, because she was, he said, approximately Nana-shaped, and squinted at her like a tailor who'd been asked to work with very poor materials." },
      { choose: [
        { t: "The red one.", notes: 2, then: [
          { s: 'jihoon', f: 'neutral', t: "Too Christmas. He'll look like he works at a department store. My son does not have a job. My son is a prince." }
        ] },
        { t: "The yellow one. With the little sun on the back.", notes: 3, then: [
          { s: 'jihoon', f: 'surprised', t: "..." },
          { s: 'jihoon', f: 'neutral', t: "Of course you picked the sun one. Of course you did." },
          { n: "He bought it. He didn't even look at the price. He held it against his chest at the register like it was already full of dog." }
        ] },
        { t: "(Try one on yourself.)", notes: 3, then: [
          { n: "She put the blue one on over her blazer. It didn't close. It came down to her ribs. She stood in the middle of the pet shop in a dog coat with her arms out, and he laughed so hard he had to sit on a bag of kibble, and the shop assistant took a photo for the store's bulletin board." }
        ] }
      ] },
      { n: "On the way out they passed the window of Be Blue V, all silver and glass and little velvet boxes, and he slowed down, which he never did, and looked in, and kept walking, and then stopped and came back and looked again." },
      { n: "Junkyu had tagged along, because Junkyu always tagged along, and he was holding the coat bag like a baby, and had already asked twice if he could be Nana's godfather, and been told twice by Jihoon that the position was filled, by Jihoon, who was also the father, and that it was a very exclusive family." },
      { s: 'junkyu', f: 'sad', t: "Can I at least be the uncle?" },
      { s: 'jihoon', f: 'neutral', t: "...Fine. Uncle. Probationary uncle. Cherry's already his aunt. She appointed herself. I didn't sign off on it. Nobody signs off on Cherry." },
      { n: "Junkyu went ahead to look at the tree, swinging the bag, and Jihoon walked beside her down the long bright row of shop windows without saying anything for a while, which, with him, was its own kind of announcement." },
      { s: 'jihoon', f: 'neutral', t: "When we're home. I'm going to buy you something stupid for Christmas. Like I always do. And you're going to buy me something stupid. And then we're going to argue about whose was stupider, and I'll win, because I'm a better arguer and a worse shopper." },
      { s: 'jihoon', f: 'serious', t: "And everybody's going to want things from you. Your parents want more extracurriculars. Yang wants you at his meetings. The council wants a vice president. Cherry wants you at her side at all times, like a weapon." },
      { s: 'jihoon', f: 'neutral', t: "I'm not going to ask you for anything. I just want you to know that. Everybody else wants the vice president. I'll take whoever's in the car." },
      { s: 'jihoon', f: 'serious', t: "...Also. I should tell you something before you remember it on your own. Because you'll remember it, and I want to have said it first, out loud, like a man, instead of you finding it in your head like a hair in your soup." },
      { s: 'jihoon', f: 'sad', t: "I wasn't okay. At home. Before the green. I'd gone back to some stuff. Old stuff. Stuff we all swore we'd never touch again, the whole club, after... after a really bad year." },
      { s: 'jihoon', f: 'neutral', t: "You kept coming to get me. Even when I didn't deserve it. Especially then. You'd show up at my door and I'd be the worst version of me, and you'd come back anyway. That's the thing about you. You always come back anyway. It's a terrible quality. It's my favorite one." },
      { s: 'jihoon', f: 'neutral', t: "Here there's nothing. I haven't gone looking. That's new. Don't make it a thing." },
      { choose: [
        { t: "I'll keep coming to get you.", notes: 3, then: [
          { s: 'jihoon', f: 'serious', t: "Don't." },
          { s: 'jihoon', f: 'sad', t: "...Okay. Do. But maybe this time I'll already be at the door. Waiting. With a coat on. Like a normal person who's going somewhere good." }
        ] },
        { t: "Why are you telling me now?", notes: 2, then: [
          { s: 'jihoon', f: 'neutral', t: "Because here I'm a guy who brings you ice cream and fights Akihiko on mats. That's it. That's all you know." },
          { s: 'jihoon', f: 'sad', t: "I wanted you to know the other guy exists. Before you meet him. So you don't think I lied to you. I lied to everybody else. Not you. Well. Not about this." }
        ] },
        { t: "(Take his hand. Don't say anything.)", notes: 3, then: [
          { n: "She took his hand in the middle of the mall, under the silver bells, and didn't say anything, and he looked down at their hands like somebody had handed him a live bird, and then held on, and kept walking, and didn't say anything either, loudly." }
        ] }
      ] },
      { ifRoute: 'romance', then: [
        { n: "He bumped her shoulder with his. Then, like he'd thought better of it, he laced his fingers through hers, in the middle of the mall, in front of the Christmas tree, and swung their hands a little, and didn't say anything about it, loudly." },
        { s: 'jihoon', f: 'happy', t: "Light of your disgusting life." },
        { s: 'solar', f: 'neutral', t: "Light of my disgusting life." },
        { s: 'jihoon', f: 'happy-2', t: "...Yeah. Okay. I'm going to need a minute. Don't look at me. I'm having a moment. It's a very attractive moment." }
      ], else: [
        { n: "He bumped her shoulder with his, on purpose, hard enough to make her stagger into a display of scented candles, and then caught her by the back of her blazer before she could take any down with her." },
        { s: 'jihoon', f: 'happy', t: "Light of your disgusting life." },
        { s: 'solar', f: 'neutral', t: "Light of my disgusting life." },
        { s: 'jihoon', f: 'happy', t: "Correct. Gold star. Nana's proud of you. I'm indifferent." }
      ] }
    ] },

    { after: '1/16', title: '10: the light of your life', place: 'Iwatodai Dorm · Front', time: 'Night', music: 'tender', scene: [
      { n: "The front steps of the dorm, in the dark, in January. It was colder than it had been in September by a whole other season, and the stone came up through her skirt like the cold off a lake, and he was sitting exactly where he'd sat that first night, elbows on his knees, the tub of ice cream on the step beside him, having walked over from the guesthouse in a coat he'd refused to button because buttoning was for people with weak constitutions." },
      { n: "It was nearly empty. They'd eaten it all winter. A spoonful at a time, on the roof, in the lounge, at the dorm kitchen table at two in the morning while Mitsuru pretended not to hear them. It had never melted, and it had never run out, and tonight, when she sat down beside him and looked into it, there was exactly one spoonful left." },
      { s: 'jihoon', f: 'neutral', t: "I think that's it. I think that's the last one." },
      { s: 'jihoon', f: 'neutral', t: "Whatever it was waiting for, I think it's done waiting." },
      { n: "He held out the spoon. Handle first. To her." },
      { choose: [
        { t: "(Eat it.)", notes: 3, then: [
          { n: "She ate it. Cookies and cream. It was the best and worst spoonful of ice cream she'd ever had, and halfway through it something came up through her the way the cold came up through the step, all at once, from the ground." }
        ] },
        { t: "(Split it. Half each.)", notes: 3, then: [
          { n: "She split it with the edge of the spoon, carefully, exactly, and fed him half, and ate half, and halfway through her half something came up through her the way the cold came up through the step, all at once, from the ground." }
        ] }
      ] },
      { n: "A preschool, and a boy she had apparently never once been rid of since. A tub of ice cream on her doorstep and a boy shoving it into her arms and going straight past her into her kitchen for spoons, yelling about where his beloved was, taking the stairs two at a time to wake her dog. A string of polaroids, hundreds of them, their whole lives in little squares, hikes and road trips and her family's parties where every aunt asked if he was her boyfriend. A letter tied to a ribbon. *if u wanted a clue, it's the world.* A needle and a boy holding her hand through it, telling her it'd be fine, telling her she looked like a ghost. A curb, a gym full of lights, her own voice telling him not to be a dick for three seconds." },
      { n: "And the rest. She had all of it, all at once, the way you have a song. A bedroom door she knocked on three times. A fist going into a wall beside her head, not into her, and the hole it left. An alley with smoke in it. A phone lighting up at midnight with capitals that didn't spell anything, all of them meaning *come over*, all of them meaning *sorry*." },
      { n: "His voice, under all of it. Not this one, here, careful on a cold step. The loud one. In her ear on the phone, in the group chat, across a classroom, in front of her house. Every day of her life." },
      { s: 'solar', f: 'neutral', t: "...Jihoon." },
      { n: "It wasn't how she'd been saying it for four months. Polite, careful, like a name off a list. It came out flat and tired and exactly right, the way you'd say the name of someone who'd been in your house so long he'd worn a groove in your sofa." },
      { s: 'jihoon', f: 'surprised', t: "..." },
      { n: "He looked at her face, and kept looking, the way he'd looked at it on the Strip in September for the joke that wasn't there. This time he found something. She watched him find it. She watched him understand that it was all there, the good and the rest, and that she was still sitting on the step." },
      { s: 'jihoon', f: 'sad', t: "...You remember the bad stuff too. Don't you." },
      { choose: [
        { t: "All of it. I'm still here.", notes: 3, then: [
          { s: 'jihoon', f: 'sad', t: "..." },
          { s: 'jihoon', f: 'sad', t: "Yeah. Yeah, you are. You always are. That's the problem with you. It's the best problem anybody's ever had." }
        ] },
        { t: "(Punch his arm. Not gently.)", notes: 3, then: [
          { n: "She punched his arm, hard, the way she'd apparently been punching him for fourteen years, with a fist that knew exactly where to land." },
          { s: 'jihoon', f: 'surprised', t: "OW. Okay. Yeah. That's fair. That's the most fair thing that's ever happened to me." }
        ] }
      ] },
      { s: 'solar', f: 'neutral', t: "Park Jihoon. You absolute idiot. You came through a hole in the world with a tub of ice cream." },
      { n: "He laughed. He laughed so hard he had to put his head down on his knees, and the laugh turned into something else halfway through, and then back into a laugh, and she put her arm around him and held on and let him do both." },
      { s: 'jihoon', f: 'happy', t: "Of course I did. Of course I did. As your best friend it is RIGHTFULLY MY JOB." },
      { ifRoute: 'romance', then: [
        { s: 'jihoon', f: 'happy-2', t: "And as your— whatever I am now. As that, too. I don't know the word. I'll think of a loud one. Something with a crown in it." },
        { n: "He kissed her on the cold step with ice cream on his mouth, and it was stupid and sticky and freezing and the best thing that had ever happened on those steps, and somewhere upstairs, through a window, Junpei cheered, and was audibly hit with a pillow." }
      ], else: [
        { s: 'jihoon', f: 'neutral', t: "Number one. Still. Forever. Write it down. Get it notarized." },
        { n: "He put the empty tub on his head like a crown. She took a picture. Somewhere upstairs, through a window, Junpei cheered, and was audibly hit with a pillow." }
      ] },
      { s: 'jihoon', f: 'neutral', t: "Hey. You're the light of my disgusting life. Did you know that?" },
      { s: 'jihoon', f: 'neutral', t: "That was the quiet part. Said quiet. Don't get used to it. I have a reputation." }
    ] },

    { after: '2/3', title: '11: demons out', place: 'Iwatodai Dorm · Front', time: 'After School', music: 'joy', scene: [
      { n: "Setsubun at the dorm meant Fuuka had bought three bags of roasted soybeans and printed out the rules, and Ken had read the rules twice and taken them very seriously, and somebody had to be the demon." },
      { n: "Jihoon had volunteered before anyone finished the sentence. He'd walked over from the guesthouse already wearing it, a red paper oni mask from the convenience store with yellow horns and a mouth full of cardboard teeth, pushed up on top of his head like sunglasses, and a cheap instant camera hanging round his neck on a strap, bright blue plastic, the kind tourists bought at the station and lost by the end of the week." },
      { s: 'jihoon', f: 'happy', t: "Obvious casting. Look at me. I'm the only one here with the bone structure for villainy. Junpei tried out. Junpei's a demon in his own heart, but on the outside he's a damp golden retriever." },
      { s: 'junpei', f: 'serious', t: "I didn't TRY OUT. Nobody tried out. You just showed up in the mask!" },
      { s: 'jihoon', f: 'neutral', t: "That's how you get a part, Iori. Commitment. You wouldn't understand. You've never committed to anything except that hat." },
      { n: "He pulled the mask down. The voice that came out from behind the cardboard teeth was enormous and delighted and very bad at being scary, and Ken threw the first handful with a shout of *oni wa soto!* so sincere that Koromaru barked at the demon on principle, and the demon fell down the front steps backward with a scream and lay on the cold path with his arms out like he'd been shot." },
      { s: 'jihoon', f: 'happy', t: "He GOT me. The child got me. Avenge me, Sol. Or throw things at me. Either. Both is fine." },
      { choose: [
        { t: "(Throw a whole handful at him. Hard. Demons out.)", notes: 3, then: [
          { n: "She threw it overhand, the whole fistful, from the top step, and it went off the front of the mask like hail off a car, and he rolled over on the path howling about betrayal and assault and a fourteen-year friendship, and Ken laughed so hard he had to sit down on the steps." },
          { s: 'jihoon', f: 'surprised', t: "That one had INTENT. That one had fourteen years of intent in it. Ken, did you see that? That was personal." }
        ] },
        { t: "(Throw them at Junpei instead.)", notes: 2, then: [
          { s: 'junpei', f: 'surprised', t: "WHY ME? I'm not even the— I'm on YOUR side!" },
          { s: 'jihoon', f: 'happy', t: "Finally. A woman of taste. I've been saying this since September." }
        ] },
        { t: "(Take the camera off his neck. Get the demon on film.)", notes: 3, then: [
          { n: "She lifted the strap off over his horns while he was still lying on the path and took his picture, the demon flat on his back on the cold concrete with beans all round him like confetti, and the camera made a loud mechanical whirr and spat the square out into her hand." },
          { s: 'jihoon', f: 'neutral', t: "Give that back. That's mine. That's my camera and my face. Both of them are very expensive." }
        ] }
      ] },
      { n: "Afterward the beans were everywhere, in the gravel, in the gutter, in the hood of his coat, and Ken had gone inside to sweep the entry with the seriousness of a priest, and Jihoon sat on the top step with the mask pushed up and the camera in his lap and a square of film in his hand that was slowly turning from gray to something." },
      { s: 'jihoon', f: 'neutral', t: "You throw them out the door and you shut it and that's it. The bad stuff's outside. Fuuka says. Very neat system. Somebody should've told me about it years ago." },
      { n: "He wasn't joking. She knew the difference now. It sat in her chest the way most things about him sat there since January, all of it at once, the good and the rest, the way you'd have a whole song and not just the chorus." },
      { ifHeading: 'H', then: [
        { s: 'jihoon', f: 'neutral', t: "At home I'm the demon. Ask anyone. Ask Cherry. Ask Hyunsuk. Ask your mom, actually, no, your mom loves me, don't ask your mom." },
        { s: 'jihoon', f: 'sad', t: "There's a drawer in my room. You know the one. I know exactly which one it is from here, from a different universe, with my eyes shut. I've been thinking about the drawer. I'm not going to lie to you about thinking about it." },
        { s: 'jihoon', f: 'serious', t: "So when we go home. The first day. You're coming over with a whole bag of these, and you're throwing them at me, and then at the drawer. That's the deal. Don't make it weird. It's a cultural practice." },
        { choose: [
          { t: "(Hold out your hand. Make him shake on it. A whole bag.)", notes: 3, then: [
            { n: "He shook. His hand was cold and gritty with bean dust and he held on a beat too long, the way he did when something counted and he couldn't say so." },
            { s: 'jihoon', f: 'neutral', t: "A whole bag. The big one. Not the snack size. If you show up with the snack size I'm telling Nana." }
          ] },
          { t: "(Throw one bean at him now. Practice.)", notes: 3, then: [
            { n: "It bounced off his forehead. He didn't flinch. He picked it up off the step and looked at it and put it in his coat pocket, very carefully, like a coin for a vending machine he hadn't found yet." },
            { s: 'jihoon', f: 'neutral', t: "Good aim. For you. Keep practicing. You've got a month." }
          ] },
          { t: "What's in the drawer, Jihoon?", notes: 2, then: [
            { s: 'jihoon', f: 'neutral', t: "You know what's in the drawer, Sol. You knew before I did. You always know before I do. It's your worst quality." }
          ] }
        ] }
      ], else: [{ ifHeading: ['S', 'R'], then: [
        { s: 'jihoon', f: 'neutral', t: "You're not coming with me. I know. I've known since Christmas. You did the face. The going-somewhere face." },
        { s: 'jihoon', f: 'serious', t: "So who's going to throw things at your demons where you're going? You can't throw. You throw like a chair. Somebody has to stand in a doorway and do it for you, and it's supposed to be me, and I'm going to be in the wrong country. The wrong whole universe." },
        { s: 'jihoon', f: 'sad', t: "And who's throwing them at mine. That's the other thing. Don't answer that. It wasn't a question. It was a demon talking." },
        { choose: [
          { t: "(Put a handful of beans in your coat pocket. For there.)", notes: 3, then: [
            { n: "She scooped them off the step, grit and all, and put them in her pocket and zipped it, and he watched her do it like she'd signed something." },
            { s: 'jihoon', f: 'neutral', t: "...Okay. Fine. You'll have to throw them yourself. Aim high. Demons are tall. I'm a very tall demon." }
          ] },
          { t: "Hyunsuk will. And Jaehyuk. And Cherry, hard.", notes: 3, then: [
            { s: 'jihoon', f: 'neutral', t: "Cherry will throw the whole bag. Bag included. At my head." },
            { s: 'jihoon', f: 'sad', t: "...Yeah. Yeah, they will. They're a terrible group of people. I love them. Don't ever tell them I said that, I'll deny it in court." }
          ] },
          { t: "I'm sorry I'm going.", notes: 2, then: [
            { s: 'jihoon', f: 'serious', t: "Don't. Don't apologize. You never apologize to me. If you start now I'll think I'm dying." }
          ] }
        ] }
      ], else: [{ ifHeading: 'stay', then: [
        { s: 'jihoon', f: 'neutral', t: "You're staying. Here. With the boxer and the dog and the girl who prints out rules. I know. I'm not mad. I'm a little mad." },
        { s: 'jihoon', f: 'sad', t: "I'm going to be throwing these at myself next year. In my own house. Alone. Like a lunatic. Hyunsuk's going to film it and put it in the chat and nobody's going to know why I'm crying at a holiday." },
        { s: 'jihoon', f: 'serious', t: "Who's going to come get me, Sol. That's the actual question. You always came to get me. Who's going to do the job?" },
        { choose: [
          { t: "You are. You're going to come get yourself.", notes: 3, then: [
            { s: 'jihoon', f: 'neutral', t: "That's the worst plan I've ever heard." },
            { s: 'jihoon', f: 'neutral', t: "...It's a good plan. I hate it. I'm going to do it anyway, out of spite, so you were right from a different universe. That's how much I hate it." }
          ] },
          { t: "(Throw one at him. Then one at the gate. Then one at the whole street.)", notes: 3, then: [
            { n: "She threw them one at a time, slowly, out into the street, until the bag was empty, and he watched every one land like she was clearing a road for him, and didn't say anything, loudly." }
          ] },
          { t: "Hyunsuk will.", notes: 2, then: [
            { s: 'jihoon', f: 'neutral', t: "Hyunsuk can't come get anybody. He's five foot nothing. He'd need a stepladder to come get me." }
          ] }
        ] }
      ], else: [
        { s: 'jihoon', f: 'neutral', t: "You're going everywhere at once. Yang explained it. With a diagram. I asked him to stop, and he made a second diagram." },
        { s: 'jihoon', f: 'serious', t: "So that's three houses' worth of demons. Three front doors. I'm going to need a bigger bag. I'm going to need a truck." },
        { s: 'jihoon', f: 'sad', t: "And I only get one of you. The rest of you belongs to people I'm never going to meet. I don't share. I've never shared anything in my life. Ask Junkyu about the fries." },
        { choose: [
          { t: "You get the one who throws like a chair.", notes: 3, then: [
            { s: 'jihoon', f: 'happy', t: "...Yeah. Okay. That's the best one. That's the original. The others are knockoffs." }
          ] },
          { t: "(Pour half the bag into his hands. Share.)", notes: 3, then: [
            { n: "She poured half into his cupped hands, carefully, so none of it spilled, and he looked at the little pile like it was a lesson he was going to be very bad at." },
            { s: 'jihoon', f: 'neutral', t: "This is sharing? This is horrible. Do people do this on purpose?" }
          ] },
          { t: "You'll learn.", notes: 2, then: [
            { s: 'jihoon', f: 'neutral', t: "I'll learn. Write that down. It's the first time I've ever said it about anything." }
          ] }
        ] }
      ] }] }] },
      { n: "The square of film in his hand had finished turning. She leaned over to look. It was blurry and overexposed and tilted, and in the middle of it was a girl on a step with her arm still out, mid-throw, laughing with her whole face, in a way she hadn't known her face could laugh here." },
      { s: 'jihoon', f: 'neutral', t: "That's going on the string." },
      { n: "She knew the string. A gift bag on her desk at home, in a room in a house in a town she could see now when she closed her eyes. Hundreds of polaroids on a ribbon, their whole lives in little squares, every one of them taken by him, and every one of them stopping at September." },
      { s: 'jihoon', f: 'serious', t: "There's a hole in it. Five months long. I'm not having a hole in it. I bought the camera on Monday. I've been taking them all week. Mostly of Koromaru. He's very photogenic. He knows his angles." },
      { choose: [
        { t: "(Let him take another. Look at the camera this time.)", notes: 3, then: [
          { n: "She looked straight down the lens. He took it, and took the mask off for it, which she noticed, and the camera whirred, and he held the new square against his chest while it developed, the way you'd hold something warm." }
        ] },
        { t: "(Take the camera back. Get one of him without the mask.)", notes: 3, then: [
          { s: 'jihoon', f: 'surprised', t: "No. No, no. I'm not ready. My hair is a crime scene. My— fine. FINE. Get my left side." },
          { n: "She got his right side. He was laughing in it. He looked at the square when it came out and said it was the worst picture anyone had ever taken of him, and put it in his inside pocket, and didn't give it back." }
        ] },
        { t: "Five months is a long hole.", notes: 2, then: [
          { s: 'jihoon', f: 'neutral', t: "It's a long hole. I'm a very fast photographer. I'll have it filled by March. I'll have it overflowing." }
        ] }
      ] },
      { ifRoute: 'romance', then: [
        { n: "He pulled the mask back down over his face, and then, like he'd thought of something better, took it off his own head and put it on hers, and pulled it down over her eyes, and in the red paper dark she felt him lean in and kiss the demon on the forehead, right between the horns." },
        { s: 'jihoon', f: 'happy-2', t: "Oni wa soto. That's for the demon. Fuku wa uchi. That one's for you. That's how it works. I read Fuuka's printout." },
        { choose: [
          { t: "(Push the mask up. Kiss him back, properly.)", notes: 3, then: [
            { n: "She pushed the mask up into her hair and kissed him on the top step, in the cold, in front of the whole street and Ken's broom and a gutter full of beans, and he went silent for his customary four seconds, and then a fifth, which was a record." },
            { s: 'jihoon', f: 'happy-2', t: "...Luck in. Definitely luck in. Fuuka's system works. I'm writing her a review." }
          ] },
          { t: "(Keep the mask on. Growl at him.)", notes: 3, then: [
            { n: "She growled. He screamed, a real scream, high, and fell off the step into the beans, and lay there laughing up at the girl in the demon mask with his hand over his heart, and said she'd never been more beautiful, and that it was upsetting." }
          ] }
        ] }
      ], else: [
        { n: "He took the mask off his own head and put it on hers, and pulled it down over her face, and patted the top of it twice, very hard, like a man closing a car door." },
        { s: 'jihoon', f: 'happy', t: "Now you're the demon. Ken! KEN. She's the demon now. Get the bag. Get the BIG bag." },
        { choose: [
          { t: "(Chase him all the way to the gate.)", notes: 3, then: [
            { n: "She chased him. He ran screaming down the path with his coat flapping open, and Ken came out with the bag, and Koromaru came out because Ken did, and the demon was driven from the house in a hail of beans by an eleven-year-old, a dog and her own best friend, and was very happy about it." }
          ] },
          { t: "(Throw the last bean at the back of his head.)", notes: 3, then: [
            { n: "It got him. Right on the crown. He stopped at the gate and turned round very slowly with his hand on the spot, and pointed at her, and said *that's the one I'll remember*, and she knew he would." }
          ] }
        ] }
      ] }
    ] },

    { after: '2/10', title: '12: two-twelve', place: 'Paulownia Mall · Game Panic', time: 'After School', music: 'city', scene: [
      { n: "There was a calculus textbook propped open on top of the crane game at Game Panic, held flat with a can of melon soda, and Jihoon was standing in front of the machine feeding it coins without looking at the claw at all, reading upside down, with his lips moving." },
      { n: "He saw her and slammed the book shut so fast the soda can went over. Hyunsuk, on the bench by the racing games with his hood up and a bag of chips, caught the can without looking up from his phone, as though he'd been waiting all afternoon to do exactly that." },
      { s: 'jihoon', f: 'serious', t: "I wasn't reading. I was using it as a weight. For the soda. It's a very heavy book. It's the only thing in this dimension heavy enough." },
      { s: 'jihoon', f: 'neutral', t: "And for the record, if Yang tells you I did page two-twelve, he's lying. Yang lies. He's a politician. Nobody does page two-twelve. Page two-twelve is a myth they tell children." },
      { s: 'hyunsuk', f: 'neutral', t: "He did two-twelve. And two-thirteen. He did two-thirteen in the bath. The page is still wavy." },
      { s: 'jihoon', f: 'surprised', t: "SUK. You're supposed to be on my SIDE. You're my whole SIDE." },
      { n: "He'd made flashcards. She found them when he turned his back, in his coat pocket, a thick stack held together with a hair tie that was definitely hers. Game Panic prize tickets, the long orange kind, with a question written on the front of each in his blocky capitals and the answer on the back in pencil, so small it was almost shy." },
      { choose: [
        { t: "(Quiz him. Right here, in front of the crane game.)", notes: 3, then: [
          { n: "She quizzed him. He got the first four right and was so unbearable about it that two middle-schoolers at the air hockey table stopped playing to watch. He got the fifth wrong, and argued with the ticket, and lost to the ticket, and wrote the right answer on the back again himself, harder, so it couldn't argue next time." },
          { s: 'jihoon', f: 'happy', t: "Four out of five. That's eighty percent. That's a B. I have never in my life gotten a B on purpose." }
        ] },
        { t: "You did do it. You absolute nerd.", notes: 2, then: [
          { s: 'jihoon', f: 'neutral', t: "Allegedly. Prove it. You can't prove it. The bath ate the evidence." },
          { s: 'hyunsuk', f: 'happy', t: "I have a picture of the evidence." }
        ] },
        { t: "(Feed the crane game while he answers. Distract him.)", notes: 3, then: [
          { n: "She fed the crane game while he answered, so the claw swung over the prizes every time he had to think, and he kept looking at it and losing his place, and getting it anyway, louder, like a man shouting directions over traffic." },
          { s: 'jihoon', f: 'serious', t: "You're doing this on purpose. You're training me under combat conditions. That's actually smart. I hate that it's smart." }
        ] }
      ] },
      { n: "Hyunsuk went to buy more chips. On his way past he knocked his shoulder into Solar's, not hard, and said very quietly, with his eyes on the vending machine, that it had been two years since he'd seen Jihoon this boring, and that it was great, and that if she told anyone he'd said so he'd deny it in a voice she'd never heard before." },
      { ifHeading: 'H', then: [
        { s: 'jihoon', f: 'neutral', t: "Eight o'clock. The morning we get back. Row three. Yang in row one not turning round, like a guy in a movie who knows there's a bomb." },
        { s: 'jihoon', f: 'serious', t: "And before the green they were going to throw me out. You know that. The whole school knew. I was a problem with a uniform on." },
        { s: 'jihoon', f: 'neutral', t: "So I'm walking into that hall clean, and I'm sitting down behind you, and I'm passing. Not for him. For me. And then I'm looking at the back of his head for the whole second half, very hard, until he feels it." },
        { choose: [
          { t: "(Write *row 3* on one of his tickets. Under it, *pass.*)", notes: 3, then: [
            { n: "She wrote it on the back of the stack, small, and put the hair tie back round them, and he took them out of her hand and read it without saying anything and put the whole stack in the inside pocket of his coat, over his heart, like a passport." }
          ] },
          { t: "I'll copy off you for once.", notes: 3, then: [
            { s: 'jihoon', f: 'happy', t: "You will NOT. You'll copy off Jaehyuk like a normal person. Jaehyuk's a saint. I'm a demon with a B." },
            { s: 'jihoon', f: 'neutral', t: "...You can look. A little. Once. If you're stuck. I'll leave my arm off the paper." }
          ] },
          { t: "They won't throw you out.", notes: 2, then: [
            { s: 'jihoon', f: 'neutral', t: "They might. That's fine. I'll be thrown out with a B. They'll have to put it on the letter." }
          ] }
        ] }
      ], else: [{ ifHeading: ['S', 'R'], then: [
        { s: 'jihoon', f: 'neutral', t: "You won't be in row three. I know. Your seat's going to be empty. Some teacher's going to read your name and nobody's going to say *here,* and then she's going to say it again." },
        { s: 'jihoon', f: 'serious', t: "So I'm going to pass it anyway. Somebody has to sit next to your empty seat and not fail. I'm your stunt double. I'm doing the hard part so you don't have to." },
        { s: 'jihoon', f: 'sad', t: "And when they ask me where you are, I'll say somewhere better. Not *gone.* Somewhere better. I've been practicing it. On the bath." },
        { choose: [
          { t: "(Write your name on a ticket. Give it to him for the seat.)", notes: 3, then: [
            { n: "She wrote *Solar* on the back of a ticket in the round fast hand that wasn't quite her handwriting here and was exactly her handwriting there, and he looked at it for a long moment and put it at the very back of the stack, behind all the answers, where it wouldn't get bent." },
            { s: 'jihoon', f: 'neutral', t: "...I'll put it on your desk. Face down. So nobody copies off it. You can't add." }
          ] },
          { t: "Say it to me. Practice.", notes: 3, then: [
            { s: 'jihoon', f: 'neutral', t: "...Somewhere better." },
            { n: "His voice did something on the second word. He coughed, loudly, and said the arcade was dusty, and fed the crane game a coin it hadn't asked for." }
          ] },
          { t: "You don't have to pass for me.", notes: 2, then: [
            { s: 'jihoon', f: 'serious', t: "I'm not. I'm passing for me. You're just in the room. Like always." }
          ] }
        ] }
      ], else: [{ ifHeading: 'stay', then: [
        { s: 'jihoon', f: 'neutral', t: "You're staying here. So I'm sitting it next to nobody. In row three. With your name on the seating chart like a ghost." },
        { s: 'jihoon', f: 'serious', t: "And everybody's going to look at me, because I'm the one who'd know. Cherry's going to look at me. Your mom's going to call me. I have to be a guy who can answer the phone." },
        { s: 'jihoon', f: 'sad', t: "You can't be that guy if you're throwing your life in a drawer. So. Calculus. It's a stupid reason to do calculus. It's the only one I've ever had." },
        { choose: [
          { t: "Tell my mom I'm happy. In those words.", notes: 3, then: [
            { s: 'jihoon', f: 'neutral', t: "In those words. She's going to cry. She's going to make me stay for dinner. I'm going to eat your share." },
            { s: 'jihoon', f: 'sad', t: "...I'll tell her. I'll tell her right." }
          ] },
          { t: "(Take a ticket. Write *answer the phone* on it.)", notes: 3, then: [
            { n: "She wrote it on the front, where the question went. He turned it over to look for the answer on the back. There wasn't one. He put it in the stack anyway, right at the top, so it'd be the first thing he saw." }
          ] },
          { t: "You'll be that guy.", notes: 2, then: [
            { s: 'jihoon', f: 'neutral', t: "I'll be that guy. I'll be a worse version of that guy, with better hair. That's still that guy." }
          ] }
        ] }
      ], else: [
        { s: 'jihoon', f: 'neutral', t: "You'll be in row three. And somewhere else at the same time. And somewhere else. Yang says it's fine. Yang says it like a weather report. Yang knows nothing about anything except numbers." },
        { s: 'jihoon', f: 'serious', t: "So I'm passing for the you in row three. The other yous can fail on their own time. I don't know them. I'm not responsible for their grades." },
        { s: 'jihoon', f: 'sad', t: "And this one. Here. Yang says here goes quiet after. Like a song ending. So nobody here's ever going to know I did page two-twelve in a bath. That's tragic. That's the most tragic thing in the whole arrangement." },
        { choose: [
          { t: "I'll know. Every version of me will know.", notes: 3, then: [
            { s: 'jihoon', f: 'happy', t: "Every version. Good. Spread the word. Tell all of you. Tell the one in the other house first, she sounds like she needs good news." }
          ] },
          { t: "(Take his picture with the textbook. For the string.)", notes: 3, then: [
            { n: "She took the camera off his neck and got him holding the book up beside his face like a trophy fish, and he looked at the square while it turned and said it was proof, and that proof outlasted everything, even songs." }
          ] },
          { t: "Hyunsuk knows.", notes: 2, then: [
            { s: 'hyunsuk', f: 'neutral', t: "I know. I'm telling everyone. Every universe." }
          ] }
        ] }
      ] }] }] },
      { n: "The crane game, which had been ignored for twenty minutes and clearly felt it, chose that moment to close its claw on a small plush calculator with a face and carry it all the way to the chute and drop it in, without anyone touching the joystick." },
      { s: 'jihoon', f: 'surprised', t: "..." },
      { s: 'jihoon', f: 'neutral', t: "That's a sign. That's God. God's a fan. I've always said so." },
      { choose: [
        { t: "(Take a polaroid of him holding it up.)", notes: 3, then: [
          { n: "She got him holding the calculator up beside his face, grinning, the textbook under his other arm, the crane game lit up behind him like a stage, and the square came out and he shook it, which you weren't supposed to do, and which he did anyway because he said it was faster, which it wasn't." }
        ] },
        { t: "(Give it to Hyunsuk. He earned it.)", notes: 3, then: [
          { n: "She gave it to Hyunsuk, who looked at it, and at her, and put it in his hood without a word, and Jihoon said that was theft from a sacred machine, and Hyunsuk said *I'll allow it,* and put his hood up over it." }
        ] },
        { t: "God's a fan of calculus, apparently.", notes: 2, then: [
          { s: 'jihoon', f: 'neutral', t: "God's a fan of me. Calculus is just how I'm communicating with him this month." }
        ] }
      ] },
      { ifRoute: 'romance', then: [
        { n: "On the way out he took her hand at the door, like he'd done it a thousand times, and then, halfway down the escalator, lifted it and looked at her knuckles like he was checking her work." },
        { s: 'jihoon', f: 'neutral', t: "Quiz me on the way home. All of them. If I get them all right you have to say it. The thing. In the voice." },
        { choose: [
          { t: "(Quiz him the whole way. Say it at the station when he gets them all.)", notes: 3, then: [
            { n: "He got them all. He got the last one right by shouting it on the platform, and an old man applauded, and she said it, flat, bored, like reading it off a cereal box, *light of my disgusting life,* and he put his forehead down on her shoulder in the middle of Iwatodai Station and stayed there until the train came." }
          ] },
          { t: "(Kiss his knuckles back. Then quiz him.)", notes: 3, then: [
            { n: "She kissed his knuckles, the right hand, where a wall at home had left the skin thin and shiny, and he went very quiet, the true quiet, and then got the next three questions wrong in a row, and said it was her fault, and didn't let go." }
          ] }
        ] }
      ], else: [
        { n: "On the way out he hooked his arm round her neck, the way he had in November in the arcade, like a trophy he was refusing to give back, and steered her toward the escalator without looking where he was going." },
        { s: 'jihoon', f: 'neutral', t: "Quiz me on the way home. If I get them all, you're buying ice cream. The good kind. The kind that melts. I want to watch it melt. I've earned it." },
        { choose: [
          { t: "(Quiz him the whole way. Buy the ice cream.)", notes: 3, then: [
            { n: "He got them all, except one, which he claimed was a misprint on a ticket he'd written himself. She bought it anyway. They ate it on the low wall by the station and it melted down both their wrists, and he looked at the drips with enormous satisfaction, like a man watching rain after a drought." }
          ] },
          { t: "(Quiz him on the wrong subject. Ask him about Nana.)", notes: 3, then: [
            { n: "She asked him what Nana's favorite toy was, and how many times he'd fallen in the pool, and what his middle name should be, and Jihoon got every single one right, instantly, at volume, and said it was the best exam he'd ever sat." }
          ] }
        ] }
      ] }
    ] },

    { after: '2/17', title: '13: pansies', place: 'Paulownia Mall · Flower Stall', time: 'After School', music: 'tender', scene: [
      { n: "The flower stall by the fountain had gone from red roses to whatever was left over, the way it did every year in the week after the fourteenth, and Mrs. Okada was sitting on her stool with her arms folded watching a very tall boy in a navy coat bend over her buckets like he was choosing a puppy." },
      { s: 'okada', t: "He's been here twenty minutes. He asked me which ones were the toughest. I said the pansies. He asked me if I was sure. I've been selling flowers for thirty-one years." },
      { s: 'jihoon', f: 'serious', t: "And I respect that. I respect your career. I'm just asking a follow-up question as a consumer." },
      { n: "They were winter pansies, in a tray of small plastic pots, yellow and purple and one that was so dark it was almost black, all of them with those faces pansies had, the little dark centers like somebody had smudged a thumb in the middle of each one." },
      { s: 'jihoon', f: 'neutral', t: "They're for the windowsill. At the guesthouse. Next to my valentines. The valentines need company. They're very lonely. There's only two of them." },
      { choose: [
        { t: "(Help him choose. Take it seriously.)", notes: 3, then: [
          { n: "She took it seriously. She lifted each pot and looked at the underneath, the way you were supposed to, for roots coming out of the holes, and he watched her do it and went very still, because she'd done it exactly the way somebody else used to do it, and she knew who, and didn't say so." }
        ] },
        { t: "(Pick the ugliest one. The almost-black one.)", notes: 3, then: [
          { s: 'jihoon', f: 'surprised', t: "That one? That one looks like a bruise. That one looks like it's been through things." },
          { s: 'jihoon', f: 'neutral', t: "...Yeah. Okay. That one. It's got character. It's like me. Everyone else is going to want the yellow ones." }
        ] },
        { t: "Pansies? You?", notes: 2, then: [
          { s: 'jihoon', f: 'serious', t: "Pansies are tough. Mrs. Okada said. They survive snow. They're the pilates of flowers." },
          { s: 'okada', t: "I didn't say that last part." }
        ] }
      ] },
      { n: "He paid for two pots, the almost-black one and a yellow one, and Mrs. Okada wrapped them in newspaper and told him to water them at the soil, not on the leaves, and not at night, and he nodded at every instruction like a man memorizing a phone number." },
      { n: "Then they sat on the rim of the fountain with the pots between them, and he didn't say anything for a while, and Solar knew why he'd asked which ones were toughest. She'd known since the cold step in January. There was a porch at home, and a row of pots along the front of it, and a boy who watered them every evening after school with a hose that didn't reach the end, so he had to do the last two with a cup." },
      { n: "Everybody knew the rule. You didn't bring it up. Not the flowers, not whose they'd been, not the house. If he wanted it said, he said it. She sat with her hands in her lap and waited, the way she'd apparently waited for him for fourteen years, at doors." },
      { s: 'jihoon', f: 'neutral', t: "Nobody's watering them." },
      { s: 'jihoon', f: 'sad', t: "If it's still the same night at home, they're fine. If it's not. If it's been five months there too. They're dead, Sol. Every one. I left them. I never leave them. I didn't leave them when—" },
      { n: "He stopped. He looked at the pansies in their newspaper. He didn't finish it, and she didn't make him." },
      { ifHeading: 'H', then: [
        { s: 'jihoon', f: 'neutral', t: "So when we get back. If they're dead. You're coming with me to the garden center. The bad one by the highway with the parrot. And we're buying all new ones, and you're going to stand on the porch with the hose and get it on my shoes. Like always." },
        { s: 'jihoon', f: 'serious', t: "And you're not going to say anything about it. Like always. That's the part I need. The not saying." },
        { choose: [
          { t: "(Nod. Don't say anything. Like always.)", notes: 3, then: [
            { n: "She nodded. She didn't say anything. He looked at her not saying anything for a long time, and then put his shoulder against hers on the fountain rim and left it there, heavy, the whole weight of him, like a door finally allowed to close." }
          ] },
          { t: "I'll get it on your shoes on purpose.", notes: 3, then: [
            { s: 'jihoon', f: 'happy', t: "You always did it on purpose. I always knew. I always let you. That's the whole friendship. That's the foundation." }
          ] },
          { t: "Maybe they're fine.", notes: 2, then: [
            { s: 'jihoon', f: 'neutral', t: "Maybe. Pansies are tough. Mrs. Okada said. Thirty-one years." }
          ] }
        ] }
      ], else: [{ ifHeading: ['S', 'R'], then: [
        { s: 'jihoon', f: 'neutral', t: "And you won't be there to get it on my shoes. You'll be somewhere with somebody else's garden. Somebody else's porch. Somebody else is going to stand next to you while you water things." },
        { s: 'jihoon', f: 'serious', t: "So here's what you do. Wherever you are. Find a flower. Any flower. A stupid one. A rich-people flower or an American flower, I don't care. Look at it for one second and think *Jihoon's are probably fine.*" },
        { s: 'jihoon', f: 'sad', t: "You can't send me a picture. I know. I'll know anyway. I'll be on the porch with the cup and I'll just know." },
        { choose: [
          { t: "(Take the yellow pansy. Promise to find a flower.)", notes: 3, then: [
            { n: "She took the yellow one off the rim and held it in her lap in its newspaper, and he looked at it in her hands and then away, quickly, at the fountain, which was suddenly very interesting." },
            { s: 'jihoon', f: 'neutral', t: "Water it at the soil. Not the leaves. Not at night. Mrs. Okada said. Don't make me tell you twice from another universe." }
          ] },
          { t: "Jihoon's are probably fine.", notes: 3, then: [
            { s: 'jihoon', f: 'neutral', t: "...Say it once a day. Wherever you are. I'll be able to tell if you skip one." },
            { s: 'jihoon', f: 'sad', t: "That's not a joke. I really will. I've always been able to tell." }
          ] },
          { t: "I'm sorry, Jihoon.", notes: 2, then: [
            { s: 'jihoon', f: 'serious', t: "Stop apologizing. Twice in one month. People are going to think you like me." }
          ] }
        ] }
      ], else: [{ ifHeading: 'stay', then: [
        { s: 'jihoon', f: 'neutral', t: "I'm going home. You're not. So I'll water them. Every evening. With the cup for the last two. I'll get it on my own shoes. It's going to be very sad and very wet." },
        { s: 'jihoon', f: 'serious', t: "And you're taking one of these. The ugly one. You're putting it on that dorm roof with Fuuka's tomatoes, and you're keeping it alive, because I'm not having nothing of mine left here. Not one thing. That's unacceptable." },
        { choose: [
          { t: "(Take the almost-black one. Hold it like it's breakable.)", notes: 3, then: [
            { n: "She took it in both hands. He watched her hold it, and nodded, once, like a man handing over keys to a house he'd lived in a long time." },
            { s: 'jihoon', f: 'neutral', t: "Soil. Not leaves. Not at night. If it dies I'll feel it. I'll feel it in my bones and I'll write you a very angry letter you'll never get." }
          ] },
          { t: "I'll keep it alive. Promise.", notes: 3, then: [
            { s: 'jihoon', f: 'neutral', t: "You can't keep anything alive. You killed a cactus in sixth grade. A cactus, Sol. They're built for neglect." },
            { s: 'jihoon', f: 'sad', t: "...Keep this one alive. Just this one." }
          ] },
          { t: "Take both home with you.", notes: 2, then: [
            { s: 'jihoon', f: 'neutral', t: "No. One goes, one stays. That's fair. I've never been fair in my life. Let me have this." }
          ] }
        ] }
      ], else: [
        { s: 'jihoon', f: 'neutral', t: "You'll be home. With me. Somehow. And somewhere else, Yang says. And here goes quiet, Yang says, like a song ending. Yang says a lot of things in a very calm voice that I want to put in a bin." },
        { s: 'jihoon', f: 'serious', t: "So these won't matter. These two. In a month nobody here's going to remember a guy bought pansies. They'll just be on a windowsill. Being tough. For nobody." },
        { s: 'jihoon', f: 'sad', t: "I'm buying them anyway. That's stupid. Tell me it's stupid." },
        { choose: [
          { t: "It's not stupid. They'll still be tough.", notes: 3, then: [
            { s: 'jihoon', f: 'neutral', t: "...Yeah. They'll be tough for nobody. That's the toughest you can be. That's pro level." }
          ] },
          { t: "(Write your names on the pots. Both of them. So someone knows.)", notes: 3, then: [
            { n: "She borrowed Mrs. Okada's marker and wrote on the side of each pot, his name on one and hers on the other, and he read them and swapped them, so his was on the yellow one and hers was on the bruise, and said that was more accurate, and she didn't argue." }
          ] },
          { t: "It's a little stupid.", notes: 2, then: [
            { s: 'jihoon', f: 'happy', t: "Thank you. Finally, honesty. I'm still buying them." }
          ] }
        ] }
      ] }] }] },
      { n: "Mrs. Okada, who had been pretending very hard to rearrange a bucket of carnations, leaned over and put a third pot on the fountain rim between them without a word. A small white one. Not for sale, it said on the label, in her handwriting. She went back to her stool and looked at the ceiling." },
      { choose: [
        { t: "(Thank her. Bow properly.)", notes: 3, then: [
          { n: "She bowed. Jihoon bowed too, a beat later and much too low, the way he'd apparently been taught by someone a long time ago, and Mrs. Okada waved them both off with her hand and said pansies were tough, that was all, and that boys who asked follow-up questions usually needed them." }
        ] },
        { t: "(Get the camera out. One of him with all three.)", notes: 3, then: [
          { n: "He held all three pots up against his chest like a family photo, ugly one in the middle, and the camera whirred, and in the square he wasn't doing a face at all. He looked at it for a long time. He didn't say it was the worst picture anyone had taken of him." }
        ] },
        { t: "She likes you.", notes: 2, then: [
          { s: 'jihoon', f: 'neutral', t: "Everyone likes me. It's a burden. Older women especially. I remind them of someone handsome." }
        ] }
      ] },
      { ifRoute: 'romance', then: [
        { n: "He carried all three pots back to the station in a stack against his chest, with his chin on top of the white one, and when they got to the barriers he stopped and turned round and, because his hands were full, leaned down and kissed her very carefully over the top of the flowers, so as not to crush anything." },
        { s: 'jihoon', f: 'happy-2', t: "That's the most delicate thing I've ever done. I'm exhausted. Tell no one. I'm a brute. Officially." },
        { choose: [
          { t: "(Take the top pot so he can do it properly.)", notes: 3, then: [
            { n: "She took the white one off the stack. He looked at his newly free hand, and at her, and put it on the side of her face, and kissed her properly by the ticket barriers while a station attendant became extremely interested in a timetable." }
          ] },
          { t: "(Kiss the black pansy too. For fairness.)", notes: 3, then: [
            { n: "She leaned down and kissed the ugly one. He stared at her. Then he laughed so hard he nearly dropped all three, and said that the black one was going to be unbearable now, and that he knew how it felt." }
          ] }
        ] }
      ], else: [
        { n: "He carried all three pots back to the station in a stack against his chest with his chin on top of the white one, walking very slowly so as not to spill soil, and complained the whole way that being a gardener was beneath him, and didn't let her carry a single one." },
        { s: 'jihoon', f: 'neutral', t: "Don't help. Helping is for people who think I can't do it. I can do it. I'm the strongest man in this universe. Everybody says so. Akihiko's been very quiet about it." },
        { choose: [
          { t: "(Walk backward in front of him, guiding him round people.)", notes: 3, then: [
            { n: "She walked backward the whole length of the mall saying *left, left, kid, stroller, left,* and he followed her voice like a ship following a lighthouse, and didn't bump into a single person, and said it was because he had excellent instincts." }
          ] },
          { t: "(Carry his textbook instead. He brought it again.)", notes: 3, then: [
            { n: "He'd brought the calculus book again, under one arm, behind the pots. She took it. He let her. He said that was different, a book wasn't help, a book was a loan, and that she should try reading it while she had it, since she'd never once read one of his." }
          ] }
        ] }
      ] }
    ] },

    { after: '2/24', title: '14: no', place: 'Iwatodai Station · Bench', time: 'After School', music: 'night', scene: [
      { phone: [
        { from: 'jihoon', t: 'come to the station' },
        { from: 'jihoon', t: 'Now. not an Emergency' },
        { from: 'jihoon', t: 'Its Fine. come anyway' }
      ], contact: 'jihoney' },
      { n: "He was on the bench at the end of the platform where nobody ever sat because the wind came straight down the tracks into it, with his coat open and his hands jammed in his pockets up to the wrists and one knee going up and down, up and down, fast, like a sewing machine." },
      { n: "He saw her coming and didn't get up. He didn't do a bit. That was how she knew, before he'd said anything at all, that he'd texted her *not an emergency* because it was one." },
      { s: 'jihoon', f: 'neutral', t: "Hey. Sit. Don't do the face. I can see you getting ready to do the face." },
      { s: 'jihoon', f: 'neutral', t: "There was a guy. Behind the arcade on the Strip. Where the bins are. I was cutting through. I don't even know why I was cutting through. I know why I was cutting through." },
      { s: 'jihoon', f: 'serious', t: "He asked if I wanted a better night. That's how they say it. I know that sentence. I know it in two languages and I've only ever been to one country. And I looked at him for one second too long, Sol. One second. You know what one second is? It's a yes with its shoes still on." },
      { s: 'jihoon', f: 'sad', t: "And then I said no. And I walked. Here. I walked here and I sat down and my leg won't stop doing this." },
      { choose: [
        { t: "(Sit down close. Put your knee against his until it stops.)", notes: 3, then: [
          { n: "She sat and pressed her knee against his, firm, the whole side of her leg against the whole side of his, and didn't say anything, and it kept going, and kept going, and then after a long time it slowed, and then it stopped, and he breathed out like a man setting down something he'd been carrying up a lot of stairs." }
        ] },
        { t: "I'm proud of you.", notes: 2, then: [
          { s: 'jihoon', f: 'serious', t: "Don't. Don't be proud of me. If you're proud of me I'll do something stupid just to ruin it. That's how I work. I'm a very simple machine." },
          { s: 'jihoon', f: 'neutral', t: "...Be a little proud. Quietly. Don't look at me while you do it." }
        ] },
        { t: "(Get two hot cans from the machine. Put one in his hands.)", notes: 3, then: [
          { n: "She came back from the vending machine with two cans of hot milk tea and pried his hand out of his pocket and closed it round one. His fingers were white with cold. He held the can without drinking it, both hands, the way you'd hold onto a railing on a boat." },
          { s: 'jihoon', f: 'neutral', t: "...Milk tea. You hate milk tea. You got yourself milk tea so I wouldn't feel weird. That's psychotic. Thank you." }
        ] }
      ] },
      { n: "A train came in and went out again. Nobody got off at their end. The wind came down the tracks after it, cold enough to hurt, and he didn't button his coat, and she didn't tell him to." },
      { s: 'jihoon', f: 'neutral', t: "Five months. I haven't gone looking here. Not once. I told you in December and it was true and it's still true. It's the longest since before sophomore year. You know what that means? It means I can. I didn't know I could." },
      { s: 'jihoon', f: 'sad', t: "And then a guy behind some bins asks me one question and I'm right back in it, like it was waiting for me in the alley the whole five months, eating a sandwich, being patient." },
      { ifHeading: 'H', then: [
        { s: 'jihoon', f: 'serious', t: "And at home it's not a guy behind some bins. It's everywhere. It's my drawer. It's the cafeteria. It's Hyunsuk's stupid group of— it's people I like. It's in my phone. It's in my car. I'm going home to a whole city of guys behind bins." },
        { s: 'jihoon', f: 'sad', t: "And you're going to be there. Which is good. Which is the worst part. Because I know exactly what I did to you, last time. I remember it. The wall. The— I remember all of it. And you'll come get me anyway. You'll come get me and I'll be the worst version of me and you'll come back anyway." },
        { choose: [
          { t: "Then be at the door before I get there.", notes: 3, then: [
            { s: 'jihoon', f: 'neutral', t: "...With a coat on. Like a normal person going somewhere good. I said that. In December. I remember saying it." },
            { s: 'jihoon', f: 'neutral', t: "Okay. Before. I'll be at the door before." }
          ] },
          { t: "Tell Jaehyuk. Let him make the pamphlet.", notes: 3, then: [
            { s: 'jihoon', f: 'surprised', t: "The PAMPHLET. Oh my God. He'll laminate it." },
            { s: 'jihoon', f: 'neutral', t: "...Yeah. Okay. I'll read the pamphlet. I'll read the whole pamphlet. Out loud. To Asahi, who'll hate it." }
          ] },
          { t: "You said no today. You'll say it there.", notes: 2, then: [
            { s: 'jihoon', f: 'neutral', t: "Today I had a bench. There I've got a drawer. But okay. Maybe. I'll say it to the drawer." }
          ] }
        ] }
      ], else: [{ ifHeading: ['S', 'R', 'stay'], then: [
        { s: 'jihoon', f: 'serious', t: "And you won't be there. Do you get that? I'm going back to the whole city of guys behind bins and you're going to be somewhere else, being happy, which I want, which I want so much I can't breathe, and nobody's coming to the door." },
        { s: 'jihoon', f: 'sad', t: "You always came to the door. Even when I didn't deserve it. Especially then. I'm going to be standing in my room listening for it, Sol. I'm going to be listening for you knocking for the rest of my life." },
        { choose: [
          { t: "Then text Hyunsuk. Every time. Before the drawer.", notes: 3, then: [
            { s: 'jihoon', f: 'neutral', t: "Hyunsuk's going to get so many texts. Hyunsuk's going to have to change his number." },
            { s: 'jihoon', f: 'sad', t: "...Okay. Before the drawer. Suk first. He'll come. He's short but he'll come." }
          ] },
          { t: "You said no today, without me knocking. You'll say it there.", notes: 3, then: [
            { s: 'jihoon', f: 'surprised', t: "..." },
            { s: 'jihoon', f: 'neutral', t: "I did. Didn't I. You weren't even there. You were at school. I said no and you were at school learning nothing." }
          ] },
          { t: "I'm sorry I won't be there.", notes: 2, then: [
            { s: 'jihoon', f: 'serious', t: "Don't. That's three times this month. You're breaking the system. Go be happy. That's the job now. That's your rightful job." }
          ] }
        ] }
      ], else: [
        { s: 'jihoon', f: 'serious', t: "And you'll be there. You'll be home. And somewhere else, and somewhere else, Yang says. Can you be at a door in three universes at once? Is that a thing you can do now? Because I'm going to need you at mine." },
        { s: 'jihoon', f: 'sad', t: "And I remember what I did to you, last time, at the door. The wall. All of it. You'll come get me anyway. That's the scariest thing about you. You always come back anyway. I don't know what I'm supposed to do with that." },
        { choose: [
          { t: "Be at the door before me. That's what you do with it.", notes: 3, then: [
            { s: 'jihoon', f: 'neutral', t: "...With a coat on. Before. I said that. In December." },
            { s: 'jihoon', f: 'neutral', t: "Okay. I'll be the one at the door. You can be in the other universes. I'll hold this one." }
          ] },
          { t: "You hold this one. I'll handle the others.", notes: 3, then: [
            { s: 'jihoon', f: 'happy', t: "Deal. I've got the best one anyway. The others get the knockoffs." }
          ] },
          { t: "You said no today.", notes: 2, then: [
            { s: 'jihoon', f: 'neutral', t: "I did. Once. Behind some bins. Not exactly a statue's worth." }
          ] }
        ] }
      ] }] },
      { n: "He took the camera off his neck. He looked at it for a while in his lap, turning it over, and then held it out to her, strap first." },
      { s: 'jihoon', f: 'neutral', t: "Take one. Of me. Right now. On this stupid bench, with my coat open, looking like this. So I remember what no looks like. It's not very handsome. It's important anyway." },
      { choose: [
        { t: "(Take it. Don't tell him to smile.)", notes: 3, then: [
          { n: "She took it. He didn't smile. He looked straight down the lens, tired and white-knuckled and unbuttoned in the wind, and the camera whirred, and the square came out and slowly turned into a boy on a bench who had said no." }
        ] },
        { t: "(Take one of both of you instead. Arm out. Cheek to cheek.)", notes: 3, then: [
          { n: "She held the camera out at arm's length and put her cheek against his, cold against cold, and took it, and the square came out with half of his face cut off and most of hers, and both of them in it, and he said it was a terrible photograph, the worst one he owned, and that he was keeping it anyway." }
        ] },
        { t: "You look fine.", notes: 2, then: [
          { s: 'jihoon', f: 'neutral', t: "I look like a guy who said no. That's better than fine. Take the picture." },
          { n: "She took it." }
        ] }
      ] },
      { n: "He looked at the square a long time while it turned. Then he put it in the inside pocket of his coat with the flashcards, over his heart, and patted it once, flat." },
      { s: 'jihoon', f: 'neutral', t: "That one's not for the string. That one's for my wallet. That one's for the next guy behind the bins." },
      { ifRoute: 'romance', then: [
        { n: "He buttoned his coat. All of it, top to bottom, without being asked, while she watched, and when he got to the top he looked at her like he expected applause, and then didn't wait for it, and put his arm round her and pulled her in against his side on the bench where the wind couldn't get at either of them." },
        { s: 'jihoon', f: 'sad', t: "I'm not going to kiss you right now. I want to. I'm not going to. I want it to be on a good day. Not on a no day." },
        { choose: [
          { t: "(Lean your head on his shoulder. Wait for a good day.)", notes: 3, then: [
            { n: "She leaned on him. He put his chin on top of her head. They watched two more trains come and go, and on the third he kissed the top of her head, very quickly, and said that didn't count, that was a technicality, that was for the no." }
          ] },
          { t: "Every day you say no is a good day.", notes: 3, then: [
            { s: 'jihoon', f: 'surprised', t: "..." },
            { n: "He looked at her for a long time. Then he leaned in and kissed her, carefully, on the cold bench, like someone who'd been told something true and didn't trust his hands with it yet." },
            { s: 'jihoon', f: 'happy-2', t: "...That's cheating. That's a loophole. I'm allowing it." }
          ] }
        ] }
      ], else: [
        { n: "He buttoned his coat. All of it, top to bottom, without being asked, and stood up, and held out a hand to pull her up off the cold bench, the way he had in September on the dorm steps, and she took it, and he didn't let go until they were up the stairs and out into the evening." },
        { s: 'jihoon', f: 'neutral', t: "Walk me back to the guesthouse. Not because I need it. Because Asahi will want to see you. Asahi won't say so. Asahi never says anything." },
        { choose: [
          { t: "(Walk him all the way to the guesthouse door. Wait till he's in.)", notes: 3, then: [
            { n: "She walked him to the door. He went in. He came back out to say goodnight properly. He went in again. Through the glass she watched him stop in the lobby beside Asahi, who looked up and didn't say anything and moved his feet off the other half of the sofa, which was, she understood, a whole sentence." }
          ] },
          { t: "(Hook your arm through his. Make him tell you about Nana the whole way.)", notes: 3, then: [
            { n: "He told her about Nana the whole way, at volume, every crime and every triumph, and by the guesthouse he was himself again, or nearly, loud and furious about a sock Nana had eaten in 2019, and at the door he said goodnight like a king dismissing court and went in without looking back, which meant he was okay." }
          ] }
        ] }
      ] }
    ] },

    { after: '2/28', title: '15: the string', place: 'Iwatodai Dorm · Front', time: 'Afternoon', music: 'tender', scene: [
      { n: "The last Sunday in February came in soft, the first day in weeks you could stand outside without your teeth hurting, and Jihoon was sitting on the dorm's front steps in the thin sun with a ball of red string, a pair of Fuuka's scissors, a box of tiny wooden clothespins he'd bought at the hundred-yen shop, and every polaroid he'd taken this month, laid out on the step in rows like a hand of cards." },
      { n: "And a tub of ice cream. A new one. Cookies and cream, from the convenience store on the corner, with the lid off. It was melting at the edges in the sun, the way ice cream was supposed to, and he kept looking at it, pleased, like it was doing something clever." },
      { s: 'jihoon', f: 'neutral', t: "Sit. Don't touch anything. There's a system. The system is chronological. The system is also me deciding." },
      { n: "Koromaru on the path, being very photogenic. Ken asleep on the lounge sofa with a Featherman figure on his chest. Mitsuru, from behind, reading on the stairs; he said he'd been terrified the whole time. Junpei mid-sneeze. Akihiko mid-plank on the dorm roof, scowling at the lens like it owed him a rematch. Hyunsuk asleep in a guesthouse armchair with his hood over his whole face. A plush calculator. Three pots of pansies. A girl on a step with her arm out, laughing." },
      { s: 'jihoon', f: 'neutral', t: "The one at home stops in September. I'm not having a hole. This goes on the end of it. It joins up. Like it never stopped." },
      { choose: [
        { t: "(Help him peg them on. Get the order wrong on purpose.)", notes: 3, then: [
          { n: "She clipped the pansies before the calculator. He took it off and moved it. She clipped Junpei before Mitsuru. He moved it. She did it six more times and he moved every one and said she was a menace to history, and they were both grinning the whole time, and the string got longer down the steps in the sun." }
        ] },
        { t: "There isn't one of you in here. Not one.", notes: 3, then: [
          { s: 'jihoon', f: 'surprised', t: "...There's the bench one. That's in my wallet. That doesn't go on." },
          { n: "She took the camera off the step and took one of him before he could argue, sitting on the steps in the sun with the string across his knees and red fluff on his sleeve, and the square came out, and she pegged it on the very end, last, after everything." },
          { s: 'jihoon', f: 'neutral', t: "...Fine. That's fair. That's the signature. Every artist signs it at the end." }
        ] },
        { t: "(Read the dates he's written on the bottoms.)", notes: 2, then: [
          { n: "He'd dated every one, in his blocky capitals, along the white strip at the bottom. Under the one of her mid-throw, under the date, very small, he'd written *luck in.* She didn't say anything about it. He saw her see it, and looked at the street." }
        ] }
      ] },
      { n: "When it was done it was nearly as long as the steps, red string and little squares turning in the breeze, and he held one end and she held the other, and for a second neither of them said anything about where it was going." },
      { ifHeading: 'H', then: [
        { s: 'jihoon', f: 'neutral', t: "It goes home. In the gift bag. On your desk. You tie it on the end of the old one, and it goes all the way round your room, twice, and then you've got the whole thing, start to now, no holes." },
        { s: 'jihoon', f: 'serious', t: "And then I'm taking a new one, the first morning. Exam morning. Row three. You looking like a ghost because you didn't eat breakfast, and Yang will have told you to eat breakfast. He'll have it in writing." },
        { choose: [
          { t: "(Coil it up. Put it in your coat, over your heart, like his flashcards.)", notes: 3, then: [
            { n: "She coiled it round her hand carefully, so the squares lay flat, and put the whole thing in the inside pocket of her coat. He watched her do it and put his hand over his own inside pocket, where the bench one was, without seeming to know he'd done it." },
            { s: 'jihoon', f: 'neutral', t: "...Good. Now we've both got one. That's matching. Don't tell Cherry. She'll want one. She'll want a bigger one." }
          ] },
          { t: "Row three. Eight o'clock. I'll eat breakfast.", notes: 3, then: [
            { s: 'jihoon', f: 'happy', t: "You won't. You'll eat a granola bar on the walk and drop half of it. I'll bring a second one. I always bring a second one. You never noticed." },
            { s: 'solar', f: 'neutral', t: "I noticed." },
            { s: 'jihoon', f: 'surprised', t: "..." }
          ] },
          { t: "It's going to look stupid going round my room twice.", notes: 2, then: [
            { s: 'jihoon', f: 'neutral', t: "It's going to look incredible. It's going to look like a crime board. Your mom's going to think you're investigating me." }
          ] }
        ] }
      ], else: [{ ifHeading: ['S', 'R'], then: [
        { s: 'jihoon', f: 'neutral', t: "You're taking it. Don't argue. I know you can't take the other one. It's in a house you're not going back to. So this one's yours instead. It starts in a different place. That's fine. Mine started at preschool. Yours can start with a demon." },
        { s: 'jihoon', f: 'serious', t: "And when somebody there asks, some guy, whoever he is, whoever's lucky enough to be standing in your room asking who the idiot in the mask is, you say *that's number one.* In the voice. The bored one. And let him wonder." },
        { choose: [
          { t: "(Take it. Coil it round your wrist so it can't be lost.)", notes: 3, then: [
            { n: "She wound it round her wrist and up her forearm, squares and all, like a bracelet nobody had ever made before, and he looked at her arm and nodded, very slowly, like a man signing off on a building he'd designed." },
            { s: 'jihoon', f: 'neutral', t: "Good. Don't take it off in the shower. Actually, take it off in the shower. They'll warp. I learned that with calculus." }
          ] },
          { t: "That's number one.", notes: 3, then: [
            { n: "She said it in the voice. Flat. Bored. Like reading it off a cereal box. He shut his eyes for a second, the whole of his face going still, the way it had on the steps in January." },
            { s: 'jihoon', f: 'sad', t: "...Yeah. That's the one. Say it exactly like that. Don't improve it. It's perfect. It's always been perfect." }
          ] },
          { t: "What will you have, then?", notes: 2, then: [
            { s: 'jihoon', f: 'neutral', t: "The bench one. In my wallet. And the old string, at your house. I'll ask your mom. She'll let me. She loves me more than you." }
          ] }
        ] }
      ], else: [{ ifHeading: 'stay', then: [
        { s: 'jihoon', f: 'neutral', t: "It stays here. With you. In this world, with your boxer and your dog and your Fuuka. It's a this-world string. It doesn't go home." },
        { s: 'jihoon', f: 'serious', t: "Except one. I'm taking one." },
        { n: "He unclipped the first square. The girl on the step, arm out, mid-throw, laughing. He looked at it for a long time, and then put it in his wallet, behind the bench one, and closed the wallet, very carefully." },
        { s: 'jihoon', f: 'sad', t: "For the hole. At home. The string's going to stop in September and then have this one, by itself, at the end, and a big gap. And everybody who sees it is going to ask, and I'm going to say *that's where she went.* And they're going to think I'm being dramatic. And I'll be being exactly the right amount of dramatic." },
        { choose: [
          { t: "(Take one of you both. For the gap. So it isn't by itself.)", notes: 3, then: [
            { n: "She took it at arm's length, cheeks together, the way she had on the bench, and this time got all of both of them, and held it out to him. He looked at it a long time and put it in the wallet beside the other one, so it wasn't by itself." },
            { s: 'jihoon', f: 'neutral', t: "...Two. Okay. Two's better. Two's a love language. Shut up." }
          ] },
          { t: "Tell them I'm happy. Tell them the right amount dramatic.", notes: 3, then: [
            { s: 'jihoon', f: 'neutral', t: "The right amount. I'll stand on a chair. I'll tell the whole cafeteria." },
            { s: 'jihoon', f: 'sad', t: "...I'll tell them right. I promise. I'll tell it right." }
          ] },
          { t: "Take more than one.", notes: 2, then: [
            { s: 'jihoon', f: 'neutral', t: "No. One. If I take more I'll start a new string, and then I'll never stop, and Hyunsuk will have to stage an intervention. Another one." }
          ] }
        ] }
      ], else: [
        { s: 'jihoon', f: 'neutral', t: "Cut it in three. No. Four. One for home, one for each of the places I don't get to go, and one for here. Yang says here goes quiet. Fine. Then it can go quiet on a wall, not in a drawer." },
        { s: 'jihoon', f: 'serious', t: "And the other yous get a demon on their wall and don't know why. Good. Let them wonder. Let them wonder their whole lives who that handsome idiot in the horns was." },
        { choose: [
          { t: "(Cut it into four. Give him the scissors for the last cut.)", notes: 3, then: [
            { n: "She made three cuts. He made the last one, with Fuuka's scissors, very straight, his tongue between his teeth. Four short strings on the step. He tied a knot in the end of each one so the squares couldn't slide off, which nobody had told him to do." },
            { s: 'jihoon', f: 'neutral', t: "...There. Now nobody can take them off. Not even a whole universe going quiet. I've knotted it. That's binding." }
          ] },
          { t: "The one for here stays on the dorm steps. Where you sat.", notes: 3, then: [
            { s: 'jihoon', f: 'surprised', t: "On the steps? Outside? It'll get rained on." },
            { s: 'jihoon', f: 'neutral', t: "...Yeah. Okay. The steps. It'll get rained on and fade and that's the point. That's actually the point. You're smarter than you look, which is a low bar, which you cleared." }
          ] },
          { t: "Four's a lot of demons.", notes: 2, then: [
            { s: 'jihoon', f: 'neutral', t: "It's the right amount of demons. Fuuka's printout was very clear. More demons, more luck." }
          ] }
        ] }
      ] }] }] },
      { n: "The ice cream had gone soft all the way through. He held the tub out to her, spoon first, the way he had on the step in January, and she took a spoonful, and it was cookies and cream and it was melting, the ordinary way, down the side of the spoon and onto her fingers." },
      { s: 'jihoon', f: 'neutral', t: "X reason. You never told me. In January. What size." },
      { s: 'jihoon', f: 'neutral', t: "I bought family size. Just so you know. Family size. I didn't ask. I just knew." },
      { choose: [
        { t: "Family size is right.", notes: 3, then: [
          { s: 'jihoon', f: 'happy-2', t: "...Of course it's right. I invented the system. I've never been wrong once. Write that down too. Get it on the string." }
        ] },
        { t: "(Eat another spoonful. Let it melt on your fingers. Don't wipe it.)", notes: 3, then: [
          { n: "She let it drip. He watched it run down her wrist, and laughed, quietly, and didn't hand her a napkin, and after a minute she realized he was crying a little, the way you'd cry at something going exactly right." }
        ] },
        { t: "It's melting.", notes: 2, then: [
          { s: 'jihoon', f: 'neutral', t: "I know. Isn't it great? It's supposed to. Everything's supposed to. That's how you know it's real." }
        ] }
      ] },
      { ifRoute: 'romance', then: [
        { s: 'jihoon', f: 'neutral', t: "Okay. Quiet part. Ready? I'm only doing this once in this universe. I'm saving the loud version for home." },
        { s: 'jihoon', f: 'sad', t: "Since preschool. Since the first day, when you threw up on my shoes and I gave you my juice. I'm not over you and I'm never getting over you and I've stopped trying, because it's not a bit, and it was never a bit, and I'm—" },
        { s: 'jihoon', f: 'happy-2', t: "I'm the light of your disgusting life. I've decided. It's official. You don't get a vote." },
        { choose: [
          { t: "(Kiss him with ice cream on your mouth. Like the step in January.)", notes: 3, then: [
            { n: "She kissed him. It was stupid and sticky and cold and sweet, and the string was across both their laps, and the breeze turned all the little squares over at once like a crowd looking round, and upstairs a window opened, and Junpei cheered, and was audibly hit with a pillow, and neither of them looked up." },
            { s: 'jihoon', f: 'happy-2', t: "...Family size. Definitely family size. I'm never wrong." }
          ] },
          { t: "You were always going to get a vote. I vote yes.", notes: 3, then: [
            { s: 'jihoon', f: 'surprised', t: "..." },
            { n: "He went silent for four seconds. Then five. Then six, which was the longest she'd ever known him to, and in the seventh he put his forehead against hers on the warm step and held it there, and said, very quietly, *motion carried,* in an accent that was obviously Jungwon's, and then *don't ever tell him I said that,* and she laughed into his mouth." }
          ] }
        ] }
      ], else: [
        { s: 'jihoon', f: 'neutral', t: "Okay. Quiet part. Ready? I'm only doing this once in this universe. I'm saving the loud version for the group chat." },
        { s: 'jihoon', f: 'sad', t: "You're my best friend. Since the first day of preschool, when you threw up on my shoes and I gave you my juice. You're number one. You've always been number one. Nobody else even got a number." },
        { choose: [
          { t: "Number one. Get it notarized.", notes: 3, then: [
            { s: 'jihoon', f: 'happy', t: "Notarized. Laminated. Framed. Jaehyuk can make it a pamphlet." },
            { n: "He put the empty tub on his head like a crown, and she took one more picture, the last one, the king on the steps with a melted crown and a string across his lap, and clipped it on the very end, after his signature, and he said that was the best one on the whole string, and for once he didn't say it was of him." }
          ] },
          { t: "(Punch his arm. Then hug him. Hard. In that order.)", notes: 3, then: [
            { n: "She punched his arm, with the fist that knew exactly where, and then hugged him, hard, both arms round his neck, the string crushed between them, and he made an outraged noise into her hair about the polaroids, about the system, about the archive, and didn't let go, and didn't let go, and didn't let go." },
            { s: 'jihoon', f: 'happy', t: "...Rightfully my job. Still. Forever. Even this." }
          ] }
        ] }
      ] },
      { n: "When she went in, he stayed on the step a while in the last of the sun with the ice cream finished and the camera in his lap, and she watched him from the lounge window. He took one more picture. Of the empty step beside him, where she'd been sitting. He didn't put it on the string. He looked at it for a long time, and then put it in his wallet, with the others." }
    ] }

  ],

  afterMax: [
    { title: 'six-thirty', place: 'Iwatodai · Riverside', time: 'Early Morning', scene: [
      { n: "He was outside the dorm at six-thirty in the morning, honking. He didn't have a car. He'd walked over from the guesthouse and was honking with his mouth, two short honks, exactly the way he honked outside her house on the mornings he actually showed up, which were not all of them." },
      { s: 'jihoon', f: 'happy', t: "Your ride's here. Your ride is walking. Your ride has no car and incredible legs. Let's go. The birds are up. I'm up. It's a miracle. Witness it." },
      { n: "They walked the river path with Koromaru, who had decided he was Nana's understudy, and Jihoon narrated the birds incorrectly, with total confidence, and she let him." },
      { choose: [
        { t: "(Throw the ball for Koromaru.)", notes: 3, then: [
          { s: 'jihoon', f: 'neutral', t: "Good throw. For you. Nana would never bring it back. Nana would sit on it and look at you like you'd insulted his family. Koromaru's a professional." }
        ] },
        { t: "You missed a lot of mornings, at home.", notes: 3, then: [
          { s: 'jihoon', f: 'neutral', t: "I did. I know. You posted about it. To shame me. It worked, by the way. It took a hole in the universe, but it worked." },
          { s: 'jihoon', f: 'happy-2', t: "I'm here now. Two honks. Once is rude. Three's desperate. Two's a love language. Shut up." }
        ] }
      ] }
    ] },
    { title: 'x reason', place: 'Iwatodai Dorm · Lounge', time: 'Night', scene: [
      { n: "A tub of ice cream on the lounge table. A new one. It melted, a little, at the edges, the way ice cream was supposed to. A sticky note on the lid in his blocky capitals. *X REASON = ?*" },
      { s: 'jihoon', f: 'neutral', t: "I need to know what size to buy. That's the whole system. You tell me the reason, I bring the right size. I've been running this system since we were kids. It's flawless. It's my legacy." },
      { choose: [
        { t: "No reason. I just wanted you here.", notes: 3, then: [
          { s: 'jihoon', f: 'happy-2', t: "...That's not a reason. That's a family size. That's a family size reason. I'm going back out. Don't move." }
        ] },
        { t: "Exams.", notes: 2, then: [
          { s: 'jihoon', f: 'neutral', t: "Medium. Exams are a medium. I'm not going to argue. You're going to fail anyway. That's a large, actually. Give it back." }
        ] }
      ] },
      { ifRomance: 'jihoon', then: [
        { n: "They ate it on the sofa with one spoon, which he said was more efficient, which it was not, and he walked back to the guesthouse at midnight humming, very loudly, so the whole street would know." }
      ], else: [
        { n: "They ate it on the sofa with two spoons, and fought over the cookie bits, and he won, and gave them back, and said that was charity, and that she should be grateful, ungrateful rug." }
      ] }
    ] }
  ],

  christmas: { place: 'Paulownia Mall · Central Atrium', time: 'Evening', scene: [
    { n: "Christmas Eve, and the mall was snowing indoors, little white paper flakes from a machine above the tree, and Jihoon was standing under it with two gift bags and the face of a man about to win an argument he'd started." },
    { s: 'jihoon', f: 'happy', t: "Okay. Okay. On three. Stupidest gift wins. I'm going to win. I've been planning this since November. One, two—" },
    { n: "Hers was a keychain from the crane game, a small lopsided dog, because she'd lost on purpose until it came out. His was a keychain from the crane game, a small lopsided sun, because he'd lost on purpose until it came out." },
    { s: 'jihoon', f: 'surprised', t: "..." },
    { s: 'jihoon', f: 'neutral', t: "How much did you spend." },
    { s: 'solar', f: 'neutral', t: "Don't." },
    { choose: [
      { t: "(Put his on your bag. Never take it off.)", notes: 3, then: [
        { s: 'jihoon', f: 'happy-2', t: "You did that last time. You did that exactly last time. Oh my God. I'm going to cry under a paper snow machine. This is so beneath me." }
      ] },
      { t: "(Put yours on his keys. Next to the car key he can't use.)", notes: 3, then: [
        { s: 'jihoon', f: 'happy', t: "Now Nana's in the car. Now Nana's always in the car. Merry Christmas, Sol. You're still ugly. Merry Christmas." }
      ] }
    ] }
  ] }
});
