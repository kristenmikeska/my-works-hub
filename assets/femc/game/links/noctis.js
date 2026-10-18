/* Noctis Lucis Caelum · IV Emperor. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Visitor (Final Fantasy XV), third wave (8/6). Friendship (v1's romance is cut). The ending he runs from: the crown and the
   throne. FFXV's ending is felt, never spelled out. Prompto (rank 2) and Ignis (rank 3) cameo; Fuuka helps in the kitchen.
   Rank 6: Noctis and Luna, betrothed by treaty, writing in the notebook Umbra carries; Solar helps him write one honest page,
   and gets a strangers flashback (a countdown to a date she didn't pick). No fragment.
   Rank 4 branches on whether Solar has met Cloud.
   Cast-only speakers: none. afterMax: scenes for after rank 10 (engine support pending). */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'noctis', name: 'Noctis Lucis Caelum', short: 'Noctis', arcana: 'Emperor', numeral: 'IV', from: 'Final Fantasy XV',
  kind: 'visitor',
  romance: null,
  starts: '8/8',
  home: { area: 'port', spot: 'Pier', slot: 'after', days: [0, 2, 3, 6],
          hint: 'After school on Tuesdays and Wednesdays, and in the daytime on weekends, asleep at the end of the Port Island pier with a fishing rod.' },
  approach: "At the very end of the Port Island pier, someone in an expensive black jacket is asleep with a fishing rod between his knees. The line is twitching.",
  cast: {},
  invite: {
    ask: ["fishing?", "u free. pier", "im awake. this is rare. come fish", "u bring snacks i bring rods", "pier. the good spot. hurry before an old guy takes it", "need someone to hold the rod while i nap"],
    ok: ["nice", "cool. end of the pier", "ok. no vegetables in the snacks pls"],
    no: ["ok. more fish for me", "ok. nap instead", "fine. the fish will miss u"]
  },
  hangouts: [
    [
      { n: "Noctis was asleep. This was the default state of Noctis, Solar had learned, the way water was wet. He was asleep against his post at the end of the pier with his rod wedged between his boots and his jacket collar up and his mouth slightly open, and the line was twitching, and he wasn't." },
      { choose: [
        { t: "(Take the rod and fish for him. Let him sleep.)", notes: 3, then: [
          { n: "She took the rod and fished for an hour while he slept beside her, and caught one small silver thing and let it go, and when he finally woke up he looked at her holding his rod and at the bucket and blinked." },
          { s: 'noctis', f: 'neutral', t: "...You fished for me. While I slept." },
          { s: 'noctis', f: 'happy', t: "That's the nicest thing anyone's done for me since Specs cut the crusts off my toast." }
        ] },
        { t: "(Nudge him with your foot.)", notes: 2, then: [
          { s: 'noctis', f: 'neutral', t: "...Five more minutes." },
          { s: 'noctis', f: 'surprised', t: "...Wait. The line. WAIT." },
          { n: "He lost it. He lost it spectacularly, standing up too fast, reeling too hard, and then sat back down against the post and looked at the empty hook with deep, peaceful acceptance." }
        ] }
      ] },
      { s: 'noctis', f: 'neutral', t: "Fish'll be there tomorrow. That's the good thing about fish." }
    ],
    [
      { n: "Noctis had brought snacks. This meant two bags of chips and a box of chocolate cookies and a single sad apple, which Ignis had clearly put in his bag, and which Noctis had placed at the very far end of the pier, on a post, as if exiling it." },
      { s: 'noctis', f: 'neutral', t: "Don't look at the apple. If you look at it, it wins." },
      { choose: [
        { t: "(Eat the apple.)", notes: 2, then: [
          { s: 'noctis', f: 'surprised', t: "...You ate it. On purpose. While I watched." },
          { s: 'noctis', f: 'neutral', t: "Don't tell Specs. If he finds out it got eaten he'll pack two." }
        ] },
        { t: "(Leave the apple for the gulls.)", notes: 3, then: [
          { n: "A gull took it about ten minutes later, the whole thing, in one go, and flew off with it over the bay with enormous effort, and Noctis watched it go with an expression of profound gratitude, like a man watching a friend carry his luggage." }
        ] }
      ] }
    ]
  ],
  ranks: [
    { after: '8/8', title: '1: the pier', place: 'Port Island · Pier', scene: [
      { music: 'day' },
      { n: "At the very end of the Port Island pier, past the bait shop and the bench where the old men played go, there was a boy asleep." },
      { n: "He was sitting with his back against a bollard and a fishing rod propped between his knees, in a black jacket that had clearly cost more than everything Solar owned, black jeans, black boots, a silver ring, black hair falling over his eyes, and he was asleep the way only some people can sleep, in public, in daylight, sitting up, completely, as if it were a skill he'd trained for." },
      { n: "The line jerked. Something had bitten. Something big, from the way the rod bent. He didn't wake up." },
      { choose: [
        { t: "(Grab the rod.)", notes: 3, then: [
          { n: "Solar grabbed the rod and pulled. There was a brief, wild struggle, a silver flash out on the water, and then the line went slack and the hook came up empty, swinging, and dripped on her shoe." },
          { s: 'noctis', f: 'neutral', t: "...Did you just lose my fish?" },
          { s: 'solar', f: 'neutral', t: "You were asleep." },
          { s: 'noctis', f: 'neutral', t: "That's part of the technique." }
        ] },
        { t: "(Wake him up.)", notes: 2, then: [
          { s: 'noctis', f: 'neutral', t: "...Five more minutes." },
          { s: 'noctis', f: 'surprised', t: "...WHAT? Oh. Oh no. Oh no no no." },
          { n: "He was on his feet instantly, wide awake, reeling, swearing quietly, and lost it anyway." }
        ] },
        { t: "(Leave him alone. It's his fish.)", notes: 1, then: [
          { n: "She left him alone. The fish got away on its own, eventually, with the bait. He woke up ten minutes later, looked at the empty hook, looked at her standing there, and sighed like a man who'd been robbed by the sea before." }
        ] }
      ] },
      { s: 'noctis', f: 'neutral', t: "Noctis. I'm, uh. A prince. Of Lucis. Which doesn't exist here, apparently. I've checked. I asked a guy at the bait shop. He sold me worms." },
      { register: 'noctis' },
      { s: 'noctis', f: 'neutral', t: "I fell asleep in the back of the car. Middle of the night. We were driving somewhere I didn't want to go. Woke up standing in a street with everyone turned into coffins and the sky gone green." },
      { s: 'noctis', f: 'neutral', t: "There was a kid at the end of the street. Big coat. Too big. Cap. She looked at me like she knew I was tired. She said, \"It's quiet at the end of the pier. You can sleep there.\" And then she said sorry, and went." },
      { s: 'noctis', f: 'happy', t: "She was right, though. It's real quiet here. Best sleep I've had in months." },
      { ifMet: ['wren'], then: [
        { n: "Solar thought of Wren, who always seemed tired in the same way, the way of somebody who'd been awake for a long time waiting for something to arrive, and who never told anyone to sleep but always seemed to wish they would." }
      ] },
      { choose: [
        { t: "That's a very calm reaction to waking up in another world.", notes: 2, then: [
          { s: 'noctis', f: 'neutral', t: "Panicking doesn't catch fish." }
        ] },
        { t: "A prince?", notes: 3, then: [
          { s: 'noctis', f: 'flustered', t: "Yeah. Don't make it weird. Nobody here knows who I am. It's kind of great. Nobody bows. A guy yelled at me for standing in the wrong place at the station. Best day of my life." }
        ] },
        { t: "Where were you driving that you didn't want to go?", notes: 2, then: [
          { s: 'noctis', f: 'neutral', t: "...Somewhere with a lot of people waiting for me to be someone." },
          { n: "He said it to the water. Then he cast again, badly, and the line landed in a tangle about two meters out, and he looked at it, and didn't fix it." }
        ] }
      ] },
      { n: "She sat down next to him on the end of the pier. He handed her the spare rod without asking if she wanted it, which seemed to be how he made friends. She'd never fished in her life. He didn't explain anything. He just showed her, once, with his hands over hers on the reel, and then leaned back against his bollard and closed his eyes again." },
      { n: "They didn't catch anything. It was the most peaceful hour she'd had since April. When she got up to go he didn't open his eyes, but he lifted one hand an inch off his knee, a sort of wave, and said, \"Same time,\" as if they'd agreed on it, and she found that they had." }
    ] },

    { after: '8/22', title: '2: prompto', place: 'Port Island · Pier', scene: [
      { music: 'joy' },
      { n: "There was a second boy on the pier now. Blond hair swept up, freckles all over, a camera on a strap around his neck, and the energy of a dog that has just been let off the lead at the beach." },
      { s: 'prompto', f: 'happy', t: "Noct! Noct, look at that bird! Look at it! It's HUGE!" },
      { s: 'noctis', f: 'neutral', t: "It's a gull, Prompto." },
      { s: 'prompto', f: 'happy', t: "It's a MAJESTIC gull." },
      { n: "Prompto Argentum had come through on the same moon as Noctis, it turned out, and landed in the fountain at Paulownia Mall, camera first, and spent two weeks sleeping in a capsule hotel and showing everybody in Iwatodai a photograph of Noctis asleep in a car, asking if they'd seen him. A girl in a porter's coat had finally pointed him at the pier. She'd said sorry, he said. He'd said for what. She'd said, \"for the two weeks,\" and gone." },
      { s: 'prompto', f: 'happy', t: "And YOU must be Sol! Noct talks about you! Well. He said \"there's a girl who lost my fish.\" But he said it, like, nicely." },
      { choose: [
        { t: "I'm the fish thief.", notes: 3, then: [
          { s: 'prompto', f: 'happy', t: "LEGENDARY. Can I take your picture? For the album? I'm calling it Noct's Weird Vacation." }
        ] },
        { t: "Nice to meet you, Prompto.", notes: 2, then: [
          { s: 'prompto', f: 'happy', t: "Nice to meet YOU! Smile! Oh, wait, you're already smiling. Perfect. Don't move." }
        ] },
        { t: "He said it nicely?", notes: 2, then: [
          { s: 'noctis', f: 'flustered', t: "I did not." },
          { s: 'prompto', f: 'happy', t: "He did. He smiled. Noct doesn't smile at fish stories. He smiles at fish." }
        ] }
      ] },
      { n: "He took four hundred photos that afternoon. Of the pier, the water, the gulls, the boats, the bait shop sign, the old men playing go, who pretended to hate it and then asked for copies. Of Noctis, asleep, nine times. Of Solar, holding a rod wrong, laughing at something Noctis had said, which she would have sworn she hadn't done." },
      { s: 'prompto', f: 'neutral', t: "Back home, I take pictures of our trip. The four of us. So we remember it. So that if anything happens, there's proof we were all there. Together." },
      { n: "He said it lightly, adjusting a lens, not looking up. Noctis, half asleep against his post, opened his eyes and looked at Prompto for a long moment, and something went across his face, very quick, something Solar couldn't read, and was gone." },
      { choose: [
        { t: "Can I see the ones from your trip?", notes: 3, then: [
          { s: 'prompto', f: 'happy', t: "Yes! Okay! Yes! Nobody ever asks!" },
          { n: "He had some on the camera's tiny screen, from before. Four boys and a big black car on a desert road. Four boys around a campfire. Four boys asleep in a tent, one of them very large, one of them in glasses even asleep, one of them Noctis, mouth open, and the fourth one presumably holding the camera. A man with a scar and a sword, laughing. A dinner on a camp stove that looked better than anything in Iwatodai." },
          { s: 'prompto', f: 'neutral', t: "That's Gladio. He's not here. I think he's mad about it. And that's Specs. He's not here YET. He'll come. He always comes. He'll come and be disappointed in us for eating badly." }
        ] },
        { t: "If anything happens?", notes: 2, then: [
          { s: 'prompto', f: 'happy', t: "Oh, you know. Monsters. Empire stuff. Car trouble. The usual." },
          { n: "He said it too fast, and Noctis closed his eyes again, and didn't say anything, and Solar let it go." }
        ] }
      ] },
      { n: "Before he left Prompto made them stand at the end of the pier, the three of them, and set the camera on a post on a timer, and ran into the frame at the last second and tripped, and the photo came out with him in mid-air, Noctis looking at him, deadpan, and Solar looking at the camera and laughing, really laughing, with the bay behind them. He printed it at the one-hour place by the station and gave her a copy. She put it on her desk. It was, she realized, the first photo she'd been in all year." }
    ] },

    { after: '9/7', title: '3: specs', place: 'Iwatodai Dorm · Kitchen', time: 'Evening', scene: [
      { music: 'dorm' },
      { n: "Ignis Scientia came through on the September moon and, by the following evening, had reorganized the dorm kitchen." },
      { n: "He'd found Noctis at the pier by following, he said, his own sense of disappointment. He'd been told about the dorm by Prompto, and about its kitchen by Noctis, who had said it was \"fine,\" in a tone which Ignis had correctly identified as a cry for help. He'd arrived at the door in an immaculate black shirt and glasses with a bag of groceries in each hand and asked, with great courtesy, to be shown the stove." },
      { s: 'ignis', f: 'serious', t: "The spices are alphabetized. Incorrectly. And someone has been storing the rice next to the oven. I'm not angry. I'm simply going to fix it." },
      { n: "Fuuka was in the kitchen when he came in. Fuuka was always in the kitchen lately, trying, with tremendous courage and very little success, to learn to cook, and she was standing at the counter with a pan of something that had once been an omelette and was now a kind of geology, looking at Ignis the way a person in a sinking boat looks at a lifeguard." },
      { s: 'fuuka', f: 'surprised', t: "Oh! Um. Hello. Sorry. I'm almost done. I mean, I'm... I'm not almost done. I'm not sure it's possible to be done with this." },
      { s: 'ignis', f: 'neutral', t: "May I?" },
      { n: "He looked at the pan. He looked at it for a long, respectful moment, the way you'd look at a painting in a museum that you didn't understand but could tell had been made with feeling." },
      { s: 'ignis', f: 'neutral', t: "The heat's too high. That's all. It's very nearly something. Would you like to try again? I'll stand beside you. I won't touch anything unless you ask." },
      { choose: [
        { t: "You three should cook together. Me too.", notes: 3, then: [
          { s: 'fuuka', f: 'happy', t: "Really? Oh. Oh, I'd like that. If he doesn't mind." },
          { s: 'ignis', f: 'happy', t: "I would mind if you didn't. A kitchen is better with company. That's the first rule. The second rule is never let Noct near the vegetables." }
        ] },
        { t: "Noctis, you never said you had a personal chef.", notes: 2, then: [
          { s: 'noctis', f: 'neutral', t: "He's not a chef. He's Specs. He just cooks better than chefs." },
          { s: 'ignis', f: 'neutral', t: "That's the nicest thing you've said to me in three years, Noct. I'll treasure it." }
        ] }
      ] },
      { n: "It was the best dinner in the history of Iwatodai Dorm. Ignis stood at Fuuka's elbow and talked her through an omelette that came out whole and golden, and Fuuka held it up in the pan as if she'd caught a fish, and Solar chopped things where she was told to, and Noctis sat at the counter and ate everything that wasn't a vegetable and pushed every vegetable to the edge of his plate, and Ignis noticed every single one, and said nothing, and put more on." },
      { n: "Then, halfway through the dishes, Ignis stopped. He stood very still at the stove with a wooden spoon raised. His glasses caught the light." },
      { s: 'ignis', f: 'happy', t: "...I believe I've come up with a new recipe." },
      { s: 'noctis', f: 'neutral', t: "Here we go." },
      { s: 'prompto', f: 'happy', t: "HE SAID IT. Sol, he SAID it. He says it like once a week. You're so lucky." },
      { n: "Late, when the others had gone up, Solar found Ignis alone in the kitchen putting the last of the pans away, in the right order, by size. He didn't turn around when she came in." },
      { s: 'ignis', f: 'neutral', t: "Thank you for keeping him company. He sleeps better than he has in a year. I can tell from his face." },
      { s: 'ignis', f: 'sad', t: "Back home there's a great deal waiting for him. He knows it. He hasn't said so, but he knows. It's in the way he sleeps, in the car. As if he's stocking up." },
      { choose: [
        { t: "What's waiting for him?", notes: 2, then: [
          { s: 'ignis', f: 'neutral', t: "A crown. A throne. A kingdom that needs him. And other things I'd rather not say in a kitchen this nice." }
        ] },
        { t: "He's got you. All three of you.", notes: 3, then: [
          { s: 'ignis', f: 'neutral', t: "He does. He always will. Whatever's coming." },
          { s: 'ignis', f: 'happy', t: "And now, it seems, he has you as well. That's four. Four is a very good number. It fits in a car." }
        ] }
      ] }
    ] },

    { after: '9/19', title: '4: the crown', place: 'Port Island · Pier', scene: [
      { music: 'day' },
      { ifMet: ['cloud'], then: [
        { n: "There was a second sword on the pier today. Cloud Strife was standing next to Noctis at the end of it, both of them looking at the water, both of them with enormous swords, neither of them talking. They seemed to be getting along extremely well." },
        { s: 'cloud', f: 'neutral', t: "...That's a lot of swords." },
        { s: 'noctis', f: 'neutral', t: "That's a big one." },
        { s: 'cloud', f: 'neutral', t: "It's the right size." },
        { s: 'noctis', f: 'neutral', t: "Sure it is." },
        { n: "They compared swords for twenty minutes, almost entirely in silence, by holding them up next to each other. It ended in a draw, and in mutual respect, and in Cloud leaving with a fishing rod Noctis had lent him, which he carried away down the pier like he'd been handed a second, smaller sword." }
      ], else: [
        { n: "Noctis was awake today. That was the first strange thing. He was sitting on the edge of the pier with his legs over the water and his rod lying beside him, not even baited, and he had a sword across his knees, a long black one Solar had never seen, that hadn't been there a second ago and wasn't there a second later when he noticed her looking, as if it had gone back into the air." }
      ] },
      { n: "Then he sat back down at the edge of the pier and didn't fish. He just held the rod across his knees and looked at the water with an expression Solar hadn't seen on him before. Not sleepy. Heavy." },
      { s: 'noctis', f: 'neutral', t: "Back home, I'm supposed to be king. Someday. Soon, maybe. Sooner than anybody wants." },
      { s: 'noctis', f: 'sad', t: "Everybody looks at me like I'm supposed to know what I'm doing. Like I'm supposed to want it. My whole life. Kids at school. Guards. My dad's council. Like the crown was already on me and they were just waiting for me to notice." },
      { s: 'noctis', f: 'neutral', t: "I just want to fish. Is that stupid?" },
      { choose: [
        { t: "It's not stupid to want a quiet life.", notes: 2, then: [
          { s: 'noctis', f: 'neutral', t: "...Tell that to my dad. And the whole kingdom." }
        ] },
        { t: "Maybe a king who likes quiet is a good king.", notes: 3, then: [
          { s: 'noctis', f: 'surprised', t: "...Huh." },
          { s: 'noctis', f: 'neutral', t: "Never thought about it like that. Everybody always talks about the kings who did big things. Wars and walls." },
          { s: 'noctis', f: 'neutral', t: "Nobody ever talks about a king who just made it so people could go fishing." }
        ] },
        { t: "I know what it's like when everyone's waiting for you to be someone.", notes: 3, then: [
          { s: 'noctis', f: 'neutral', t: "...Yeah? You?" },
          { s: 'solar', f: 'neutral', t: "I think so. I think there's a lot of people somewhere waiting for me to be someone. I just don't know who." },
          { n: "He looked at her sideways for a long time, the way you look at someone across a crowded room at a party you both didn't want to come to." },
          { s: 'noctis', f: 'neutral', t: "...That's worse. At least I know who they want." }
        ] }
      ] },
      { s: 'noctis', f: 'neutral', t: "The car I fell asleep in. We were driving to the place where it all starts. Where I'd have to pick it up. Stop being a prince and start being the other thing." },
      { s: 'noctis', f: 'neutral', t: "And I was asleep. On purpose, kind of. I thought, if I sleep, it's not happening yet. And then I woke up here." },
      { choose: [
        { t: "Sleeping doesn't stop the car.", notes: 3, then: [
          { s: 'noctis', f: 'neutral', t: "...No. It doesn't. Specs keeps driving. He always keeps driving. He just turns the radio down so I can sleep." },
          { s: 'noctis', f: 'neutral', t: "That's kind of the nicest thing anybody does for me, actually. Turning the radio down. I never told him I noticed." }
        ] },
        { t: "I'd have slept too.", notes: 2, then: [
          { s: 'noctis', f: 'happy', t: "Yeah? Good. Nap buddies. That's a real thing. I'm making it a real thing." }
        ] },
        { t: "Where's the car now?", notes: 1, then: [
          { s: 'noctis', f: 'neutral', t: "Parked on a road somewhere in my world. With the engine running. Waiting. Probably." }
        ] }
      ] },
      { n: "A fish jumped, out on the gray water, silver and huge, the way they did, as if mocking him. Noctis watched it go in with something almost like fondness." },
      { s: 'noctis', f: 'happy', t: "...Next time." }
    ] },

    { after: '10/3', title: '5: dad', place: 'Port Island · Pier', scene: [
      { music: 'tender' },
      { n: "October, and the pier was cold in the mornings now. Noctis had brought a thermos of something hot that Ignis had made, which was mostly ginger and smelled like being looked after, and they drank it out of the thermos lid, taking turns, sitting on the edge with their legs over the water." },
      { s: 'noctis', f: 'neutral', t: "My dad's the king. Regis. He's tired. All the time. He's been holding up a wall around our whole city for years. Like, literally. With magic. It's killing him. Slowly. Everybody knows. Nobody says." },
      { s: 'noctis', f: 'sad', t: "When I was a kid I thought he just didn't want to spend time with me. He was always busy. Always in meetings. I'd wait up and he wouldn't come." },
      { s: 'noctis', f: 'sad', t: "Turns out he was keeping everyone alive. Including me. Every night I waited up, he was holding the sky up over my bed." },
      { n: "He said it plainly, the way people say things it took them years to understand, and the understanding had cost them something, and they've decided not to mention what. Solar knew that tone. She didn't know from where. A father somewhere, maybe. A man at the head of a table polishing his glasses. A man at a breakfast table not looking up from a phone. She couldn't see a face. She could see the shape of waiting for one." },
      { choose: [
        { t: "He sounds like he loved you very much.", notes: 3, then: [
          { s: 'noctis', f: 'neutral', t: "...Yeah. He did. Does. I didn't always see it." },
          { s: 'noctis', f: 'sad', t: "He's not good at saying stuff. I get it from him. We used to sit in the same room and not talk for an hour and I thought it meant he didn't care. It meant he was tired and he wanted me there anyway." }
        ] },
        { t: "Did you ever get to tell him?", notes: 3, then: [
          { s: 'noctis', f: 'sad', t: "...Not really. Not properly. I keep thinking I'll have time." },
          { s: 'noctis', f: 'sad', t: "The morning we left, he came to the car. He said something. I didn't really listen. I was annoyed about something. I don't even remember what." }
        ] },
        { t: "I don't remember my father.", notes: 2, then: [
          { s: 'noctis', f: 'surprised', t: "...At all?" },
          { s: 'solar', f: 'neutral', t: "Just a feeling. That somebody's sitting up in the dark, waiting." },
          { s: 'noctis', f: 'neutral', t: "...Yeah. That's a dad feeling. I know that one. That's the realest one there is." }
        ] }
      ] },
      { n: "They drank the rest of the thermos in silence. A gull landed on the railing next to them and looked at the thermos with intent, and Noctis looked back at the gull with equal intent, and the gull lost, and left." },
      { s: 'noctis', f: 'neutral', t: "When I get back. If I get back. I'm gonna say something to him. I don't know what. Something. Even if it's dumb." },
      { s: 'noctis', f: 'neutral', t: "Help me think of something? Not now. Sometime. You're good at words. Better than me. Everyone's better than me." },
      { choose: [
        { t: "You don't need good words. Just true ones.", notes: 3, then: [
          { s: 'noctis', f: 'neutral', t: "...Specs says that. He says it about cooking. \"Good ingredients, Noct, not fancy ones.\"" },
          { s: 'noctis', f: 'happy', t: "Okay. True ones. I can probably find one. I'll fish for it." }
        ] },
        { t: "Deal.", notes: 2, then: [
          { s: 'noctis', f: 'happy', t: "Cool. You write it, I'll say it, he'll know it wasn't me. Perfect plan." }
        ] }
      ] }
    ] },

    { after: '10/17', title: '6: the notebook', place: 'Port Island · Pier', scene: [
      { music: 'tender' },
      { n: "There was a dog on the pier." },
      { n: "Not a stray. A small black and white dog with a red scarf tied around its neck, sitting very straight at the end of the pier beside Noctis's bollard, with a notebook in its mouth. A small red notebook, battered, held by the spine, gently, the way a dog holds an egg. It had not been there a minute ago. Solar was nearly sure it had not been anywhere in this world a minute ago." },
      { s: 'noctis', f: 'surprised', t: "...Umbra. Umbra, what are you... how did you even..." },
      { n: "The dog put the notebook down on the pier at Noctis's feet. It looked at him. It looked at Solar, a long, wise, unreadable look, older than a dog's look had any right to be. Then it lay down on the boards, chin on its paws, and waited." },
      { s: 'noctis', f: 'neutral', t: "He carries it. Between me and Luna. Back and forth. Wherever we are. He always finds us. I guess he found me here too. Of course he did." },
      { s: 'noctis', f: 'neutral', t: "Luna's... we've known each other since we were kids. We write to each other in this. Little notes. Stickers. A dog carries it, she's somewhere, I'm somewhere, we never get to be in the same place." },
      { s: 'noctis', f: 'neutral', t: "We're supposed to get married. It's arranged. It's important. For both our countries. A treaty. A wedding to stop a war." },
      { n: "He didn't say it unhappily. He said it the way you'd describe weather. And Solar felt the pier tip under her, very gently, like a boat taking a long slow wave." },
      { bg: 'flashback-incheon-harbor' },
      { dark: true },
      { music: 'mystery' },
      { n: "The back seat of a car, going slowly along a harbor road at night. A driver in front with his hands at ten and two, who never braked hard, who smelled faintly of menthol, who had driven her since she was small. Sodium lights going over the roof of the car one after another, orange, orange, orange, like counting." },
      { n: "And she was counting. In her head. Not the lights. Days. A number she knew without looking it up, that went down by one every morning when she opened her eyes, before she'd remembered her own name. A date set by other people at a long table, for a reason that had nothing to do with her and everything to do with her. A war. A truce. A ring on a red cord at her throat, cold, that she turned with her thumb, counting." },
      { n: "She'd written nothing to anyone about it. There'd been no notebook. Nobody had carried anything back and forth. She'd just sat in the back of the car, counting, very straight, with her hair pinned up, and the number had gone down by one." },
      { bg: null },
      { dark: false },
      { music: 'tender' },
      { n: "The pier came back. The gulls. The dog with the red scarf looking at her very steadily. Noctis was holding the notebook in both hands, not opening it." },
      { s: 'noctis', f: 'neutral', t: "...You okay? You went kind of gray." },
      { choose: [
        { t: "Do you love her?", notes: 3, then: [
          { s: 'noctis', f: 'neutral', t: "...Yeah. I do. Maybe not the way the stories say. Not fireworks. But I do. She's been the one constant thing my whole life. Her and the dog." },
          { s: 'noctis', f: 'sad', t: "She's carrying so much. More than me, even. More than anybody knows. And I'm always scared I won't get there in time." }
        ] },
        { t: "What do you write to her?", notes: 3, then: [
          { s: 'noctis', f: 'flustered', t: "...Dumb stuff. \"I'm fine.\" \"Caught a fish.\" \"Specs made a new recipe.\" Stickers." },
          { s: 'noctis', f: 'sad', t: "Never anything real. I don't know how. She writes real stuff. She writes, \"I'm thinking of you,\" and \"Be well,\" and I write \"Caught a fish.\" Every time." }
        ] }
      ] },
      { s: 'noctis', f: 'neutral', t: "...Sol. Help me write something real. Just once. Before he takes it back." },
      { n: "So they sat at the end of the pier with the notebook open on Noctis's knee between them and Umbra watching, and they wrote. Or he wrote, and she sat beside him, and every time he started \"I'm fine\" she put her finger on the page and he stopped, and crossed it out, and sat there with the pen, and tried again." },
      { n: "It took an hour. The tide turned. It was four lines. Solar didn't read them. He asked her to and she said no, they were Luna's. He wrote the last one very slowly, pressing hard, and when he was done he looked at it for a long time, and then, as if it couldn't be helped, drew a very small fish in the corner." },
      { choose: [
        { t: "That's the realest thing you've ever written.", notes: 3, then: [
          { s: 'noctis', f: 'neutral', t: "...Yeah. It is. I can feel it. It's like a cramp." },
          { s: 'noctis', f: 'happy', t: "She's gonna cry. She's gonna cry and then she's gonna write back something even realer and I'm gonna have to do this again." }
        ] },
        { t: "Nice fish.", notes: 2, then: [
          { s: 'noctis', f: 'happy', t: "It's a sea bass. Obviously. She'll know." }
        ] }
      ] },
      { n: "He closed the notebook and held it out to Umbra, and the dog took it in its mouth, gently, and stood up, and looked at Solar one last time with its old wise eyes, and trotted down the pier toward the land, and somewhere past the bait shop, between one step and the next, it wasn't there anymore. Noctis watched the place where it had gone for a long time. Solar watched her own thumb, which was turning, very slowly, against nothing, a ring that wasn't there." }
    ] },

    { after: '11/7', title: '7: warp', place: 'Iwatodai Strip', time: 'The Dark Hour', scene: [
      { place: 'Iwatodai Strip · Rooftops · The Dark Hour', time: 'The Dark Hour' },
      { dark: true },
      { music: 'mystery' },
      { n: "The green hour, and a Shadow was crossing the rooftops of Iwatodai, huge and many-legged, going from building to building like a spider across a garden, heading for the dorm. Fuuka's voice had said it was fast. Too fast. It would get there before anyone on foot." },
      { n: "Noctis was standing on the roof of the station next to her. She didn't know how he'd got there. She'd heard about the green and the spider on the phone, run out, and found him already on the station roof in his black jacket, awake, wide awake, more awake than she'd ever seen him, with a ring of blue light turning slowly in the air around him, made of swords." },
      { s: 'noctis', f: 'serious', t: "Hold on to me. Don't let go. It's gonna feel like being thrown. Because it is." },
      { choose: [
        { t: "(Hold on.)", notes: 3, then: [
          { n: "She held on. He threw a sword, and then they were wherever the sword was, a flash of blue and a lurch like the world being yanked out from under her feet and put back down a hundred meters further on, and then again, and again." }
        ] },
        { t: "What are you going to do?", notes: 2, then: [
          { s: 'noctis', f: 'serious', t: "Warp. Hold on or you'll get left behind." },
          { n: "She held on. He threw a sword, and then they were wherever the sword was." }
        ] }
      ] },
      { n: "They crossed the whole city that way. Roof to roof to roof, in bursts of blue, the coffins below them in the streets like chess pieces, the moon huge and sick, and they caught the Shadow on the roof of a laundromat two streets from the dorm, and Noctis went at it with swords that came out of nowhere, one after another, a whole armory falling out of the air, and Solar put the Evoker to her head and the rope came out of the sky and caught it, and between the two of them it came apart into smoke and drifted off between the water tanks." },
      { n: "When it was over they were on top of the tallest building in Iwatodai, the business hotel with the water tower, breathing hard, the green going slowly out of the sky. Noctis sat down on the edge with his legs hanging over eleven floors of nothing like it was the end of his pier." },
      { s: 'noctis', f: 'surprised', t: "...You didn't let go. Not once." },
      { s: 'noctis', f: 'neutral', t: "Most people let go. It's a lot, warping. Prompto threw up the first time. Gladio said a word I'm not allowed to repeat. You just held on." },
      { n: "He sounded surprised. Like he'd expected, all his life, to be let go of eventually, and had made his peace with it, and was now going to have to unmake his peace." },
      { choose: [
        { t: "You didn't let go of me either.", notes: 3, then: [
          { s: 'noctis', f: 'neutral', t: "...Yeah. I didn't. Huh." },
          { s: 'noctis', f: 'happy', t: "Good team. We're a good team. Don't tell Gladio. He thinks he's my only good team." }
        ] },
        { t: "You were awake the whole time.", notes: 2, then: [
          { s: 'noctis', f: 'flustered', t: "...Don't tell anyone. They'll expect it." }
        ] }
      ] },
      { s: 'noctis', f: 'neutral', t: "This is what it's for, I think. All of it. The swords. The crown, even. Not sitting on a chair. Getting there in time." },
      { s: 'noctis', f: 'neutral', t: "I always thought being king meant sitting still. Maybe it just means you're the one who gets there in time." }
    ] },

    { after: '11/21', title: "8: what's waiting", place: 'Port Island · Pier', scene: [
      { music: 'tender' },
      { n: "Late November. The pier was almost empty, the water gray and choppy, the wind cold enough to make her eyes water. Noctis was there, but he wasn't fishing, and he wasn't asleep. He was sitting on the edge with his rod beside him unbaited, and he'd been there, the old men said, since dawn." },
      { s: 'noctis', f: 'neutral', t: "Elizabeth came here. The lady with the book. She sat on the edge and fished with my spare rod for an hour without catching anything and she was really happy about it." },
      { s: 'noctis', f: 'neutral', t: "She told me something. About what's waiting for me. Back home. Not all of it. She didn't have to. I sort of already knew." },
      { s: 'noctis', f: 'neutral', t: "There's a reason my dad's tired. There's a reason everyone looks at me like that. There's a reason Luna writes \"be well\" every time like it's a prayer." },
      { n: "He didn't say what it was. He didn't need to. Solar saw it in his face, the shape of something very large and very far off, coming steadily closer, the way you see a ship on the horizon long before you can make out what flag it's flying." },
      { s: 'noctis', f: 'neutral', t: "It's okay. I'm not gonna get on the train. I've seen it. Out on the bridge. Lanterns in the windows. Everybody asleep. I get why people want to." },
      { s: 'noctis', f: 'neutral', t: "Sleeping's the thing I'm best at. I could sleep on that train forever and never be king and never get to the place where it all ends." },
      { s: 'noctis', f: 'serious', t: "But it'd mean Specs and Prompto and Gladio drove there without me. And Luna'd be there, waiting, and I wouldn't come. And my dad would've held up the sky for nothing." },
      { choose: [
        { t: "Whatever it is, you won't face it alone.", notes: 3, then: [
          { s: 'noctis', f: 'neutral', t: "...Yeah. My friends'll be there. Specs. Prompto. Gladio. In the car. With the radio on." },
          { s: 'noctis', f: 'neutral', t: "And now I'll have this. This year. This pier. You. I'll have that too. I'll take it with me." }
        ] },
        { t: "(Sit down beside him and say nothing.)", notes: 3, then: [
          { n: "She sat beside him and said nothing. After a while he leaned against her shoulder, the way he leaned against his bollard when he slept, as if she were something solid he could trust to still be there when he woke up, and closed his eyes, and didn't sleep." }
        ] },
        { t: "You could tell me. If you wanted.", notes: 1, then: [
          { s: 'noctis', f: 'neutral', t: "...Nah. It's mine. It's the one thing that's really mine. I'm gonna carry it myself." }
        ] }
      ] },
      { n: "A fish jumped, out on the gray water, silver and enormous. The one he'd been trying to catch since August. They both watched it go back in." },
      { s: 'noctis', f: 'happy', t: "...Next time." },
      { choose: [
        { t: "Next time.", notes: 3, then: [
          { n: "He looked at her, surprised, and then nodded, once, as if she'd signed something." }
        ] },
        { t: "You'll get him.", notes: 2, then: [
          { s: 'noctis', f: 'neutral', t: "Yeah. Before I go. I have to. It's the one thing on the list I actually want to do." }
        ] }
      ] },
      { n: "He said it the way he always said it. It sounded different. It sounded like a promise someone makes knowing exactly how many next times there are, and deciding to spend one of them on a fish." }
    ] },

    { after: '12/5', title: '9: fishing partner', place: 'Port Island · Pier', scene: [
      { music: 'tender' },
      { n: "December. The first snow, light and wet, falling on the water and vanishing the moment it touched. The pier, the bollard, the boy, the two rods. He'd brought the thermos. Ignis had written on a strip of tape on the lid, in perfect copperplate: For both of you. Drink it while it's hot. Noct, that includes you." },
      { s: 'noctis', f: 'neutral', t: "Okay. I'm bad at this. Words. Specs is good at words. Prompto's good at feelings. Gladio's good at yelling them. I'm good at naps." },
      { s: 'noctis', f: 'neutral', t: "But I came to this world and the best thing in it wasn't the fishing. Which, like. The fishing here's pretty good. It was who was fishing next to me." },
      { s: 'noctis', f: 'neutral', t: "So. What are we? I want to know what to call it. When I tell Luna. In the notebook." },
      { choose: [
        { t: "Best friends. Fishing partners. Forever.", notes: 3, then: [
          { s: 'noctis', f: 'surprised', t: "...Fishing partner. Forever." },
          { s: 'noctis', f: 'happy', t: "Yeah. That's a serious title. That's like a knighthood. Prompto's gonna be so jealous. He's been trying to be my fishing partner for years. He keeps falling in." }
        ] },
        { t: "Two people who'd rather be asleep, being brave anyway.", notes: 3, then: [
          { s: 'noctis', f: 'neutral', t: "...Yeah. That's it. That's us." },
          { s: 'noctis', f: 'happy', t: "I'm gonna write that down. Exactly that. Luna's gonna think you're cool. You are cool. Don't tell her I said that, she'll get jealous." }
        ] },
        { t: "The one who lost your first fish.", notes: 2, then: [
          { s: 'noctis', f: 'happy', t: "Still mad about that. I'm gonna be mad about that in every world." }
        ] }
      ] },
      { s: 'noctis', f: 'neutral', t: "You know what you are to me? You're the year I got to just be a guy. On a pier. Nobody bowing. Nobody waiting. Just a guy who keeps losing the same fish." },
      { s: 'noctis', f: 'neutral', t: "I didn't know I needed that. I think I needed it more than anything. Before." },
      { n: "He didn't say before what. Solar didn't ask. The snow came down on the water, and the water took it, every flake, without a sound, and the two of them sat on the edge with the thermos between them, and he held out his hand, flat, palm down, without looking, the way he did when he wanted the thermos, and she put the thermos in it, and that was a whole conversation." },
      { choose: [
        { t: "(Stay until the snow stops.)", notes: 3, then: [
          { n: "They stayed until the snow stopped, which was a long time. When it did, the whole pier was white except for two dry patches, side by side, where they'd been sitting, and Noctis stood up and looked at them, and took out his phone, and took a picture of the two patches, badly, and sent it to Prompto with no message, and Prompto replied within four seconds with eleven crying emojis." }
        ] },
        { t: "Tell Luna I said hello.", notes: 2, then: [
          { s: 'noctis', f: 'neutral', t: "I will. She'll want to know everything. She'll want your favorite flower. What is it?" },
          { s: 'solar', f: 'neutral', t: "I don't know." },
          { s: 'noctis', f: 'neutral', t: "...Okay. I'll say \"whatever's growing nearest.\" That's kind of you, actually." }
        ] }
      ] }
    ] },

    { after: '12/26', title: '10: the catch', place: 'Port Island · Pier', scene: [
      { music: 'joy' },
      { n: "The day after Christmas, early, freezing, the sun barely up. He'd texted her at five in the morning, which he had never done, which she wasn't aware he was capable of. The text said PIER. NOW. ITS HERE." },
      { n: "She ran the whole way, through the empty Port Island streets in the blue dark, over the frost. When she got to the end of the pier he was standing at the edge with his rod bent nearly in half, braced, both boots set, his face doing something she'd never seen it do, wide awake and furious and delighted all at once." },
      { s: 'noctis', f: 'surprised', t: "Help me. Help me, Sol, it's huge, it's HUGE, it's the one, it's the one from August, I swear it's the one." },
      { choose: [
        { t: "(Grab the rod with him.)", notes: 3, then: [
          { n: "She grabbed the rod with him, her hands over his on the grip, and they fought it together for twenty minutes, hands freezing, laughing, swearing, losing ground and gaining it back, the line singing, the old men from the go bench who'd come early for some reason cheering behind them like it was a sport." }
        ] },
        { t: "Don't let go!", notes: 2, then: [
          { s: 'noctis', f: 'serious', t: "I'm NOT gonna let GO. Grab the—grab it, grab it, both hands—" },
          { n: "She grabbed it. Both hands, over his. They fought it together for twenty minutes, freezing, laughing." }
        ] }
      ] },
      { n: "Then it came up out of the gray water all at once, silver and enormous and thrashing, the biggest fish Solar had ever seen, a fish with opinions, and they hauled it up onto the boards, and Noctis fell over backwards with it in his arms, and lay there on the frosty pier with a fish on his chest, laughing at the sky." },
      { n: "Prompto, who had appeared from nowhere with his camera, the way Prompto did, took forty-one photographs. Ignis, who had appeared behind Prompto with a thermos, the way Ignis did, said that he could do something remarkable with it in a lemon butter. Noctis held it up for a single second, triumphant, shaking." },
      { n: "And then he let it go. He knelt at the edge of the pier and put it back in the water, both hands under it, the way you'd hold something you'd been trusted with, and held it there until it was sure of itself, and it flicked its tail once and went down into the gray and was gone." },
      { s: 'noctis', f: 'neutral', t: "...I didn't want to keep it. I just wanted to catch it once. With you. Now I have." },
      { s: 'ignis', f: 'serious', t: "The lemon butter, Noct." },
      { s: 'noctis', f: 'happy', t: "Make the lemon butter anyway. We'll put it on toast. We'll pretend." },
      { n: "He held something out to her, after, when Ignis and Prompto had gone ahead to start breakfast. A fishing lure. Hand-painted, a little silver fish with a tiny gold crown painted on its head, so small you'd need to look twice." },
      { s: 'noctis', f: 'neutral', t: "Made it. With Specs's paint. Took me a week. The crown kept coming out like a hat." },
      { choose: [
        { t: "I'll keep it on my keychain.", notes: 3, then: [
          { s: 'noctis', f: 'happy', t: "Good. Then you'll always have a reason to go fishing. And think of me. Mostly the fishing." }
        ] },
        { t: "Why a crown?", notes: 3, then: [
          { s: 'noctis', f: 'neutral', t: "Because I'm going home to put one on. For real. I decided. Out here, at like five this morning, when the line went." },
          { s: 'noctis', f: 'neutral', t: "And I wanted the one thing I gave you to have it on, so you'd know I chose it. Nobody put it on me. I painted it myself. Badly." }
        ] }
      ] },
      { s: 'noctis', f: 'neutral', t: "Whatever happens back home. Whatever's coming. I'll remember this pier. And you. And that fish. I'll think about it when it's hard. That I caught it. Eventually. With my fishing partner." },
      { n: "They sat at the end of the pier until the sun came up all the way, sharing the thermos, not talking, gold on the gray water, and Solar held the little crowned fish in her fist in her coat pocket, and thought that it was the heaviest light thing anyone had ever given her, and that she didn't, and wouldn't, ask him why." }
    ] }
  ],
  afterMax: [
    { title: 'the big one', place: 'Port Island · Pier', scene: [
      { music: 'day' },
      { n: "There was, according to the old men on the go bench, an even bigger one. Bigger than the December fish. A legend. Nobody had caught it in thirty years. Noctis had heard this and had not slept since, which for Noctis meant he'd only slept nine hours a night." },
      { s: 'noctis', f: 'serious', t: "It's out there. I can feel it. It's mocking me personally." },
      { choose: [
        { t: "(Bait both rods and settle in.)", notes: 3, then: [
          { n: "They settled in. They didn't catch it. They caught nine small things and one shoe, and Noctis held up the shoe and looked at it with enormous solemnity and said that it was a sign, and that next time it would be the fish, and put the shoe on the bollard as a trophy, where it stayed for the rest of the winter." }
        ] },
        { t: "Maybe some fish are meant to stay legends.", notes: 2, then: [
          { s: 'noctis', f: 'neutral', t: "...That's what Specs said about the dragon. Then Gladio fought it anyway." }
        ] }
      ] }
    ] },
    { title: 'the carrot', place: 'Iwatodai Dorm · Kitchen', scene: [
      { music: 'dorm' },
      { n: "Ignis had made a bet with Noctis. If Noctis ate one carrot, one whole carrot, of his own free will, Ignis would make him the tart from Tenebrae he'd been begging for since September. Noctis had been staring at the carrot on the dorm kitchen counter for twenty minutes." },
      { s: 'noctis', f: 'serious', t: "Sol. Help. It's looking at me." },
      { choose: [
        { t: "(Cut it into very small pieces and hide them in rice.)", notes: 3, then: [
          { s: 'ignis', f: 'neutral', t: "...That's cheating." },
          { s: 'ignis', f: 'happy', t: "That's also exactly what I'd have done. Very well. The tart is yours. Both of yours. You're accomplices." }
        ] },
        { t: "Just eat it, Noctis.", notes: 2, then: [
          { n: "He ate it. He ate it in four bites with his eyes closed, like a man taking medicine, and opened his eyes at the end and announced, with deep betrayal, that it hadn't been that bad, and Ignis had to leave the room for a minute." }
        ] }
      ] }
    ] }
  ]
});
