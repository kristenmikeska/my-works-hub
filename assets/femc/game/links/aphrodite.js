/* Aphrodite · XIX Sun. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Visitor (Smite), second wave (7/7). Mentor and older sister; she names Solar "little sun" on the first day, not knowing
   about Haenim. The ending she runs from: being loved by everyone and held by no one. Adoration doesn't anchor her, so
   she's going faint in a crowd of admirers (rank 2).
   Rank 4: Ares comes through after the 8/6 moon. Rank 5 is Kat's matchmaking: a goddess asks a mortal for dating advice,
   and Solar's strangers flashback (two families at war, a truce sealed with a marriage). No fragment there.
   Rank 7 sits after 10/4 and stays vague about what happened on the bridge.
   Cast-only speakers: busker. afterMax: scenes for after rank 10 (engine support pending). */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'aphrodite', name: 'Aphrodite', short: 'Aphrodite', arcana: 'Sun', numeral: 'XIX', from: 'Smite',
  kind: 'visitor',
  romance: null,
  starts: '7/9',
  home: { area: 'portisland', spot: 'Central Concourse', slot: 'after', days: [0, 3, 6],
          hint: 'After school on Wednesdays, and in the daytime on weekends, holding court on the concourse at Port Island Station.' },
  approach: "The whole concourse at Port Island Station has gone strangely quiet around a woman in white and gold, and she is looking straight at you, as if you're late.",
  cast: { busker: 'Boy with a Guitar' },
  invite: {
    ask: [
      "Little sun. Your goddess requests your presence.",
      "I am bored and beautiful. Come and fix the first one.",
      "The station is full of people who adore me and none of them are you. Come.",
      "I have found a shop that sells only pink things. I require a witness.",
      "There is a new flavor in the vending machine. We must investigate it together. As sisters.",
      "Your goddess is at the station. Your goddess is waiting. Your goddess is becoming impatient."
    ],
    ok: ["Of course you said yes. They always do.", "Wonderful. I will be by the ticket gates, being radiant.", "Good. Hurry. I am being stared at and I want you to see it."],
    no: ["...No one says no to me. How novel. Again.", "Very well. I shall be adored by strangers instead. It is not the same.", "Hmph. I forgive you. Eventually. Possibly by dinner."]
  },
  hangouts: [
    [
      { n: "The pigeons outside Port Island Station had found Aphrodite within a week, the way pigeons find anyone who looks like she might be carrying bread, and she had bought a bag of rice crackers from the kiosk with money Solar didn't ask about and was sitting on a bench feeding them one crumb at a time with a look of profound disappointment." },
      { s: 'aphrodite', f: 'neutral', t: "Little sun, look at them. Gray. Lumpy. Grumbling. This is what your world has instead of doves. My doves are as white as sea foam. My doves do not fight over a crust like drunk sailors." },
      { choose: [
        { t: "They're doing their best.", notes: 3, then: [
          { s: 'aphrodite', f: 'sad', t: "...They are, aren't they. Poor lumpy things." },
          { n: "She emptied the whole bag in one generous swoop, and a hundred pigeons came down on the bench in a gray roaring wave, and she sat in the middle of it with her arms up like a woman in a fountain, laughing." }
        ] },
        { t: "That one's kind of pretty. The one with the green neck.", notes: 2, then: [
          { s: 'aphrodite', f: 'happy', t: "Hm. Yes. Iridescent. I'll allow it. You may be my favorite, pigeon. Don't let it go to your head." }
        ] },
        { t: "They're rats with wings.", notes: 1, then: [
          { s: 'aphrodite', f: 'serious', t: "Don't say that. They can hear you. Every bird is a little bit mine, little sun. Even the ugly ones. Especially the ugly ones." }
        ] }
      ] },
      { n: "When they got up to leave, the green-necked pigeon followed them as far as the ticket gates, walking, with great dignity, like a very small courtier." }
    ],
    [
      { n: "There was a perfume counter on the ground floor of the department store by the station, all glass and gold and mirrors, and Aphrodite had found it on her second day and had been back every day since, and the saleswomen had stopped trying to sell her anything and simply handed her the testers as she passed, like offerings." },
      { s: 'aphrodite', f: 'happy', t: "Smell this one. No, this one. No, give it back, that one's for heartbreak, you're too young. Every bottle is a promise, little sun. This one promises you'll be remembered. This one promises you'll be forgiven." },
      { choose: [
        { t: "Which one would you pick for me?", notes: 3, then: [
          { s: 'aphrodite', f: 'happy', t: "Oh, I have been waiting for you to ask." },
          { n: "She went through eleven bottles, sniffing her own wrist and then Solar's, frowning, discarding, and in the end she didn't choose any of them. She took Solar's wrist and held it to her own nose and closed her eyes." },
          { s: 'aphrodite', f: 'neutral', t: "...No. None of these. You already smell like somewhere. Rain, and something sweet, and something cold underneath, like iron. I won't cover it. I'd be ashamed." }
        ] },
        { t: "Which one's yours?", notes: 2, then: [
          { s: 'aphrodite', f: 'neutral', t: "None of them, darling. I don't wear perfume. I am the perfume." }
        ] },
        { t: "(Sneeze.)", notes: 1, then: [
          { n: "Solar sneezed, enormously, three times, and a saleswoman handed her a tissue with the expression of someone who saw this a lot." },
          { s: 'aphrodite', f: 'happy', t: "Bless you. Literally. That one was from me." }
        ] }
      ] }
    ],
    [
      { n: "It was raining, the hard straight-down kind that turned the plaza outside the station into a shallow lake, and Aphrodite was standing just inside the doors looking out at it with the outraged disbelief of someone who has been told the bridge is closed." },
      { s: 'aphrodite', f: 'serious', t: "I don't get wet. It isn't done. In four thousand years I have never once been rained on. Somebody always brings an umbrella. Or a cloak. Or a small army to hold up a canopy." },
      { choose: [
        { t: "(Hold your umbrella over her.)", notes: 3, stat: { kindness: 1 }, then: [
          { n: "Solar opened her umbrella, a cheap clear plastic one from the convenience store with a bent rib, and held it up over the goddess's head, which meant holding it rather high, and they went out into the rain like that, Solar getting completely soaked down one side." },
          { s: 'aphrodite', f: 'happy', t: "A canopy. Of sorts. Oh, this is perfectly adequate, little sun. Higher. No, that's good. You're the best army I've ever had." }
        ] },
        { t: "Have you tried getting rained on? On purpose?", notes: 2, then: [
          { n: "Aphrodite looked at her. Then at the rain. Then, very slowly, like someone lowering herself into a cold bath, she stepped out under it and turned her face up." },
          { s: 'aphrodite', f: 'surprised', t: "...Oh. Oh, it's cold. It's so cold. Why does nobody tell you it's lovely?" }
        ] }
      ] },
      { n: "By the time they reached the monorail her hair was ruined and she was laughing so hard she had to hold on to the railing, and three businessmen offered her their umbrellas at once, and she turned them all down, which Solar suspected she had never done in her life." }
    ]
  ],
  ranks: [
    { after: '7/9', title: '1: an offering', place: 'Port Island Station · Central Concourse', scene: [
      { music: 'city' },
      { n: "There was a goddess at Port Island Station, and she was furious about it." },
      { n: "She was standing in the middle of the central concourse on a hot Saturday afternoon in a flowing dress of white and pale gold, with a sash of pink at the waist and gold at her wrists and in her hair, which went down her back in waves the color of honey held up to a window. She was very beautiful. That wasn't quite the word. She was beautiful the way a bright light is bright: it was hard to look at anything else, and slightly hard to look at her." },
      { n: "And the whole concourse had arranged itself around her without meaning to. People had slowed. A salaryman had walked into a pillar. A ring of commuters stood at a respectful distance, staring, holding their phones, the way you'd stand around a celebrity or an accident. Nobody went close." },
      { s: 'aphrodite', f: 'serious', t: "You. Mortal. Yes, you, with the bag. The one who isn't staring." },
      { n: "Solar looked behind her. There was nobody behind her." },
      { s: 'aphrodite', f: 'serious', t: "Where are the temples? I have walked for an entire day and I have not seen a single altar. Not one shrine. Not even a rock with a little garland on it." },
      { choose: [
        { t: "Who are you supposed to be?", notes: 1, then: [
          { s: 'aphrodite', f: 'surprised', t: "Supposed to BE? I am Aphrodite. Goddess of love and beauty. You've heard of me. Everyone has heard of me. People write songs." }
        ] },
        { t: "We don't really do temples here.", notes: 2, then: [
          { s: 'aphrodite', f: 'surprised', t: "...No temples. None at all? How do you people love anything?" }
        ] },
        { t: "(Bow, slightly.)", notes: 3, then: [
          { n: "The goddess stared at her. Then her whole face lit up, actually brighter, like somebody had turned a lamp up a notch." },
          { s: 'aphrodite', f: 'happy', t: "Oh! Oh, finally. Someone with manners. I could kiss you. I won't, it would ruin you for everyone else." }
        ] }
      ] },
      { s: 'aphrodite', f: 'neutral', t: "Aphrodite. Of the war that never ends, the one with the lanes and the towers and all the very angry gods. I was standing in the middle of it, being magnificent, and then it went green and every single mortal turned into a coffin, which I took personally." },
      { register: 'aphrodite' },
      { s: 'aphrodite', f: 'neutral', t: "And there was a little thing in the street. A girl, in a porter's coat far too big for her, the only creature awake. She didn't stare. She didn't kneel. She just pointed at this station and said, \"Go where everybody passes through. They'll all see you there.\"" },
      { s: 'aphrodite', f: 'neutral', t: "And then she apologized to me. Nobody apologizes to me, little mortal. They beg. They bargain. It's different. I turned to ask what she meant, and she was gone." },
      { s: 'aphrodite', f: 'happy', t: "She was right, though. They do all see me here. Thousands. All day." },
      { ifMet: ['wren'], then: [
        { n: "Solar thought of the station bench, and a girl who apologized to everything, the rain and the pigeons and the trains. Iwatodai, not Port Island. Different station. She told herself that twice." }
      ] },
      { s: 'aphrodite', f: 'neutral', t: "I require an offering. It's customary. It's been a very long day and nobody has given me anything. They look and they look and they don't come any closer." },
      { n: "Solar had four hundred yen and a vending machine six feet away. She bought a can of peach juice, the pink kind with a cartoon peach on the label, because it was the closest thing to an offering the machine had, and held it out with both hands." },
      { n: "Aphrodite looked at the can like Solar had handed her a pearl. She took it in both hands. She opened it with some difficulty and a small swear, and drank, and closed her eyes." },
      { s: 'aphrodite', f: 'happy', t: "...Oh. That's lovely. That's genuinely lovely. Nobody's ever offered me anything pink." },
      { choose: [
        { t: "It matched your sash.", notes: 3, then: [
          { s: 'aphrodite', f: 'happy', t: "It DID. You noticed. Oh, I like you. I'm keeping you. What do they call you, little mortal?" },
          { s: 'solar', f: 'neutral', t: "Solar." },
          { s: 'aphrodite', f: 'surprised', t: "Solar. The sun. Of course it is. You came walking out of a crowd of gray like a little sun." },
          { s: 'aphrodite', f: 'happy', t: "Little sun. That's what I'll call you. I name things. It's one of my few duties." }
        ] },
        { t: "You're welcome, goddess.", notes: 2, then: [
          { s: 'aphrodite', f: 'happy', t: "Goddess. Yes. Say it again, but louder, so the commuters hear." }
        ] }
      ] },
      { n: "She called Solar little sun four more times before the afternoon was out. Solar didn't tell her. Didn't tell her about the Evoker, or the green, or the Persona that came up out of her like dawn and whose name she still couldn't hold. A goddess had looked at her across a crowded station and said little sun, and it had gone into her like a hook, and she didn't know why, and she wanted, very badly, for no one to explain it." },
      { n: "When Solar left, the goddess was sitting on a bench by the ticket gates with her peach juice, receiving the stares of the evening rush like tribute, glowing faintly, alone in the middle of a crowd of thousands, and she lifted the can in a small salute as Solar went through the gate, and Solar, against all her instincts, waved back." }
    ] },

    { after: '7/22', title: '2: worship', place: 'Paulownia Mall · Shop Windows', scene: [
      { music: 'city' },
      { n: "Aphrodite had discovered shopping, and shopping had discovered Aphrodite, and Paulownia Mall would never entirely recover. She swept through it on a Saturday like it was a temple built in her honor, which, she informed Solar, it essentially was, since everyone in it was looking at her." },
      { n: "They were. Shop girls came out from behind counters. A child pointed and was hushed. A woman holding a dress against herself in a mirror saw Aphrodite pass behind her and slowly, without seeming to know she was doing it, put the dress back." },
      { s: 'aphrodite', f: 'serious', t: "Little sun. This mirror is a terrible liar. I look far better than this." },
      { choose: [
        { t: "The mirror's fine. You're just very bright.", notes: 3, then: [
          { s: 'aphrodite', f: 'happy', t: "...That's true. I'm overexposing it. You're very clever." }
        ] },
        { t: "You look perfect.", notes: 1, then: [
          { s: 'aphrodite', f: 'neutral', t: "I know. I wanted to hear you say it. It's not as nice as I thought it would be." }
        ] },
        { t: "It's not lying. Look closer.", notes: 2, then: [
          { n: "Aphrodite looked closer. Solar watched her see it, and watched her face go very still." }
        ] }
      ] },
      { n: "Because in the mirror the goddess was not quite all there. The gold at her wrists was there. The dress was there. But her edges, at the hem, at her fingertips, at the very ends of her hair, were going through, the way a reflection goes through on a shop window at dusk, so that you could see the racks of clothes behind her through her own hand." },
      { s: 'aphrodite', f: 'sad', t: "...Oh. That's what the red-haired woman meant. With the paper. \"Faint.\" I thought she was being rude." },
      { s: 'aphrodite', f: 'sad', t: "But I don't understand. Look at them, little sun. Look at all of them. Every person in this building is looking at me. I've been adored by more people this week than some gods get in a century." },
      { s: 'aphrodite', f: 'sad', t: "How can I be faint? I'm the most looked-at thing in the world." },
      { n: "Solar had heard Elizabeth explain it in the velvet elevator, in her soft careful voice: a bond anchors them. Not being seen. Being held on to. And she looked at the ring of shop girls and children and the woman with the dress, all of them looking, none of them a single step closer, and she understood something about the goddess that she suspected nobody in four thousand years had bothered to." },
      { choose: [
        { t: "They're looking. Nobody's holding on.", notes: 3, then: [
          { s: 'aphrodite', f: 'surprised', t: "..." },
          { n: "Aphrodite looked at the crowd for a long moment, and the crowd looked back, and for the first time Solar saw her see what it was: a circle. A clearing. A space everybody was keeping, very carefully, around her." },
          { s: 'aphrodite', f: 'sad', t: "...Yes. That's what it's always been, hasn't it. Everyone looks. Nobody comes close enough to touch. You'd think a goddess of love would have noticed." }
        ] },
        { t: "(Take her arm. Like a sister would, shopping.)", notes: 3, then: [
          { n: "Solar took her arm. Just tucked her own hand into the crook of the goddess's elbow, the way you'd take a friend's arm on a crowded street so you don't lose each other, and turned her gently away from the mirror and toward the next shop." },
          { n: "Aphrodite went completely still. She looked down at the hand on her arm as if she had never in her life seen one there. Then she looked at the mirror as they passed it, and Solar looked too, and her hand on the goddess's arm was solid, and so was the arm, and so, slowly, from the elbow outward, like ink soaking into paper, was the rest of her." }
        ] },
        { t: "Maybe being looked at isn't the same as being loved.", notes: 2, then: [
          { s: 'aphrodite', f: 'serious', t: "Those are the same thing, little sun. That's the whole point of me." },
          { s: 'aphrodite', f: 'sad', t: "...Aren't they?" }
        ] }
      ] },
      { s: 'aphrodite', f: 'neutral', t: "Back home there's a war that never ends. Gods fighting gods, in a field, forever. Ten of us at a time. It's all very dramatic and nobody ever wins for long." },
      { s: 'aphrodite', f: 'neutral', t: "And I'm good at it. I'm much better than anyone expects. But they don't pick me to win, little sun. They pick me because it's lovely to have me there. A goddess of love on the field. Like flowers on a coffin." },
      { s: 'aphrodite', f: 'sad', t: "I was standing in the middle of it, being lovely, and I thought, if I stand here one more thousand years being looked at, I'll turn into a statue. And then it went green." },
      { n: "She bought nothing. She had no money and had never once, Solar suspected, needed any. But the shop girl at the last store pressed a silk scarf into her hands for free, pale pink, and Aphrodite held it all the way home in both fists, and didn't let go of Solar's arm once, and when they got to the monorail she looked down at her own hands on the scarf in the window's reflection and they were solid, all the way to the ends, and she laughed, quietly, like someone who'd found something she'd lost under a sofa a very long time ago." }
    ] },

    { after: '8/5', title: '3: little archer', place: 'Paulownia Mall · Central Atrium', scene: [
      { music: 'joy' },
      { n: "Aphrodite had decided that the girls of Iwatodai Dorm were tragically under-loved, and that this was a personal insult to her and possibly to the universe, and that she would be fixing it. Immediately. Starting today. With or without permission." },
      { n: "Her first target was Yukari, who had made the mistake of meeting Solar for crepes by the mall fountain, and who now sat on the rim of it with her crepe halfway to her mouth, staring up at a goddess who had come out of nowhere, glowing, and was looking down at her with enormous, loving, terrible focus." },
      { s: 'yukari', f: 'surprised', t: "...Solar. Who is this, and why is she sparkling at me?" },
      { s: 'aphrodite', f: 'happy', t: "Little archer. You have a heart like a locked box. I can see it from here. I can open it. One kiss on the forehead and you'll be in love by Tuesday. Pick anyone. Pick that boy with the cap who follows you around. Pick the silver one. I'm not fussy." },
      { s: 'yukari', f: 'serious', t: "Absolutely not." },
      { s: 'aphrodite', f: 'surprised', t: "...I beg your pardon?" },
      { s: 'yukari', f: 'serious', t: "I'll fall in love when I want to. With who I want to. Not because some goddess kissed my forehead in a shopping mall. Thanks, though. Sort of." },
      { n: "There was a long, crackling silence. Aphrodite's glow flickered, like a lamp in a storm. Solar braced, a little, for something terrible. A curse. A plague of pigeons." },
      { choose: [
        { t: "Yukari's right, you know.", notes: 3, then: [
          { s: 'aphrodite', f: 'neutral', t: "...She is. Isn't she. How irritating." }
        ] },
        { t: "Maybe try someone else?", notes: 1, then: [
          { s: 'aphrodite', f: 'serious', t: "No. No, I don't want someone else. I want to understand why THIS one said no." }
        ] },
        { t: "(Hand Yukari a napkin. Say nothing.)", notes: 2, then: [
          { n: "Solar handed Yukari a napkin, because there was cream on her chin, and Yukari took it with great dignity, and the goddess watched this small exchange with an expression of total confusion, as if she'd seen two people speak fluently in a language she'd been told didn't exist." }
        ] }
      ] },
      { s: 'aphrodite', f: 'neutral', t: "Four thousand years. Nobody has ever refused me. Not gods. Not kings. Not a single hero on a single ship." },
      { s: 'aphrodite', f: 'happy', t: "Little archer. I think I respect you more than anyone I've met in a century." },
      { s: 'yukari', f: 'blushing', t: "...Okay. That's weird. But thank you?" },
      { n: "Yukari left soon after, with her crepe and a backward look at Solar that said we will be discussing this, and Aphrodite sat down on the rim of the fountain in her impossible gold, and watched the water fall for a long time without saying anything, which Solar had not known she could do." },
      { s: 'aphrodite', f: 'sad', t: "Little sun. If love isn't something I can give people. If they can just... say no, and choose for themselves, and be right to." },
      { s: 'aphrodite', f: 'sad', t: "Then what is it? What am I for?" },
      { choose: [
        { t: "Maybe love is the part they choose. You can't give that. Only they can.", notes: 3, then: [
          { s: 'aphrodite', f: 'neutral', t: "...Then I've been giving people the wrong thing. For four thousand years. A kiss on the forehead and a fever. That isn't love. That's weather." },
          { s: 'aphrodite', f: 'neutral', t: "Oh, I don't like this at all. Sit closer. I need someone to be smug at." }
        ] },
        { t: "I don't know. I don't think anyone does.", notes: 2, then: [
          { s: 'aphrodite', f: 'happy', t: "You're supposed to say I do, little sun. You're supposed to make me feel better." },
          { s: 'aphrodite', f: 'neutral', t: "...No. You're not. That's what I like about you. You never do what you're supposed to." }
        ] }
      ] },
      { n: "It was, Solar thought, a very good question, and she didn't have an answer, and she sat down on the fountain rim next to the goddess, and they watched the water come down together, and the circle of staring shoppers stood a little way off, as always, and for once Aphrodite didn't seem to notice them at all." }
    ] },

    { after: '8/19', title: '4: ares', place: 'Port Island Station · Back Alley', time: 'Evening', scene: [
      { music: 'night' },
      { n: "He came through on the night of the moon at the start of August, the night the train crossed the bridge, and Solar heard about him from three different people before she saw him. A tall man, the girl at the station kiosk said, in armor. Armor, the old man at the shoe-repair stall said, with chains on it, black and red, smelling of smoke. A god, Aphrodite said, on the phone, in a voice Solar had never heard her use. Not angry. Not frightened. Very, very careful, like someone carrying a full cup." },
      { s: 'aphrodite', f: 'neutral', t: "Little sun. Come to the station. Behind it. Don't bring anyone. Bring yourself. That's an order from your goddess, and a request from... from me." },
      { n: "He found them behind the station, in the narrow alley where the restaurants put out their bins, in the heat and the smell of fish and old oil. Aphrodite went very still when she saw him come around the corner, the way the air goes still before a storm, and Solar, without thinking, moved half a step closer to her side." },
      { n: "He was enormous. Black armor and red cloth and chains wrapped around his arms like other men wore watches, and a face that looked as though it had been carved for the specific purpose of looking down at people from a great height. He looked at Aphrodite. Only at her. As if the alley were empty." },
      { s: 'ares', f: 'serious', t: "There you are. You left the battlefield." },
      { s: 'aphrodite', f: 'neutral', t: "I didn't leave anything, darling. I was taken. There's a difference. I was always going to be taken, eventually. I'm surprised it took this long." },
      { s: 'ares', f: 'serious', t: "Come back. The war needs you." },
      { s: 'ares', f: 'neutral', t: "I need you." },
      { n: "He said I need you the way he'd have said charge, or hold the line. Like an order. Like something that had never once in four thousand years needed to be said as anything else." },
      { s: 'aphrodite', f: 'sad', t: "You need me the way you need a sword, Ares. Something lovely to hold while you break things." },
      { s: 'ares', f: 'serious', t: "That's not—" },
      { s: 'aphrodite', f: 'serious', t: "We are on opposite sides of that field, darling. We have been since the beginning. Every single match. You chain me and I kiss you and we both pretend it's strategy. It's not a love story. It's a very long war with very good lighting." },
      { choose: [
        { t: "(Stand beside her. Don't say anything.)", notes: 3, then: [
          { n: "Solar stepped up next to her and stood there, in her school uniform, in the alley, beside a goddess, in front of a god of war. She didn't say anything. She didn't need to. Ares looked down at her for the first time, slowly, like a man noticing that a pebble he'd been about to kick was looking back." },
          { s: 'ares', f: 'neutral', t: "...A mortal. Standing next to you. Not kneeling." },
          { s: 'aphrodite', f: 'happy', t: "Yes. She does that. Isn't it extraordinary? Nobody's stood next to me in a thousand years. They kneel in front of me or they fight across from me." }
        ] },
        { t: "She doesn't want to go.", notes: 2, then: [
          { s: 'ares', f: 'serious', t: "She doesn't get to decide. Gods don't decide. We are what we are." },
          { s: 'aphrodite', f: 'neutral', t: "...Actually, darling. I think I do. For once." }
        ] },
        { t: "(Wait. Watch her face.)", notes: 2, then: [
          { n: "Solar waited, and watched Aphrodite's face, and saw something there she hadn't expected at all, under the anger, under the brightness. It wasn't contempt. It was the face of someone looking at a house she used to live in and can't go back into." }
        ] }
      ] },
      { s: 'aphrodite', f: 'neutral', t: "No, Ares. Not like this. Not as your sword. Go. Find somewhere to be. Come and find me when you have something to say to me that isn't an order." },
      { n: "He went. Not because Solar had asked him to, and not because he'd been beaten, but because Aphrodite had told him to, and something in the way she'd said it had gone into him like a blade between plates of armor. He turned in the alley, slowly, chains clinking, and walked away toward the harbor without looking back, and at the corner he stopped, one hand on the wall, as if he were going to turn around, and didn't." },
      { n: "Aphrodite stood there for a long moment. Then she sat down on an overturned crate, in her impossible gold, among the bins." },
      { s: 'aphrodite', f: 'sad', t: "Four thousand years. And I've never once told him no." },
      { s: 'aphrodite', f: 'sad', t: "The worst part, little sun, is that I didn't want him to go." },
      { choose: [
        { t: "Then he'll come back. He stopped at the corner.", notes: 3, then: [
          { s: 'aphrodite', f: 'surprised', t: "He did? He stopped?" },
          { s: 'solar', f: 'neutral', t: "Hand on the wall. Like he was going to turn around." },
          { s: 'aphrodite', f: 'neutral', t: "...Ares has never once in his life stopped at a corner. He goes through corners. He goes through walls." }
        ] },
        { t: "You can not want him to go and still say no.", notes: 3, then: [
          { s: 'aphrodite', f: 'neutral', t: "Can you? Is that allowed? Both at once?" },
          { s: 'solar', f: 'neutral', t: "I think it's most of what people do." }
        ] },
        { t: "He's terrifying.", notes: 1, then: [
          { s: 'aphrodite', f: 'happy', t: "Isn't he? It's his best feature. Don't tell him I said so." }
        ] }
      ] },
      { n: "Solar sat on the crate next to her. Neither of them said anything for a while. A train went over somewhere above them, shaking dust down from the girders, and the goddess flinched, very slightly, and Solar put a hand on her back, between her shoulder blades, and left it there, and felt her breathing, and felt it slowly, slowly, come back down." }
    ] },

    { after: '9/2', title: '5: dating advice', place: 'Iwatodai Strip · Hagakure', time: 'Evening', scene: [
      { place: 'Port Island Station · Central Concourse', time: 'Daytime' },
      { music: 'joy' },
      { n: "It took Aphrodite eleven days to ask, and when she did it was in the most humiliating possible way, which was to say quietly, on a bench, without glowing, with her hands folded in her lap like a schoolgirl outside the principal's office." },
      { s: 'aphrodite', f: 'neutral', t: "Little sun. I need advice. From you. Don't look at me like that. I'm aware of how this sounds." },
      { s: 'aphrodite', f: 'neutral', t: "He came back. Ares. He's been standing outside the station every evening for a week, at the bottom of the steps, in full armor, not coming in. The station master thinks he's a very committed performance artist. Yesterday he brought me a flower." },
      { s: 'aphrodite', f: 'flustered', t: "It was a flower he'd pulled out of a municipal planter. Roots and all. With the dirt. He held it out to me like a severed head." },
      { s: 'aphrodite', f: 'sad', t: "And I don't know what to do. I've made a thousand people fall in love with a kiss. I've never once had to do it the slow way. I've never had to... ask. Little sun, how do mortals ask?" },
      { choose: [
        { t: "Badly. With dirt on the roots.", notes: 3, then: [
          { s: 'aphrodite', f: 'surprised', t: "..." },
          { s: 'aphrodite', f: 'happy', t: "...Oh. Oh, that's horrible. That's wonderful. So it was a good flower." },
          { s: 'solar', f: 'neutral', t: "It was a great flower." }
        ] },
        { t: "You eat dinner. Somewhere loud. Where neither of you can make a speech.", notes: 3, then: [
          { s: 'aphrodite', f: 'surprised', t: "Dinner. Just dinner. Not a feast, not a sacrifice, not a war council." },
          { s: 'solar', f: 'neutral', t: "Ramen." },
          { s: 'aphrodite', f: 'neutral', t: "I don't know what that is, and I'm already afraid of it." }
        ] },
        { t: "Why are you asking me?", notes: 1, then: [
          { s: 'aphrodite', f: 'neutral', t: "Because you're the only one who's ever stood next to me instead of in front. I assume you know something I don't." }
        ] }
      ] },
      { place: 'Iwatodai Strip · Hagakure', time: 'Evening' },
      { music: 'city' },
      { n: "So it was Hagakure, on a Wednesday night, at the counter, in the steam, because it was loud and small and there was nowhere to make a speech, and because the owner had looked at a man in black armor with chains on his arms and a woman glowing faintly gold and said \"two?\" in exactly the same tone he used for salarymen, and set down two glasses of water, and gone back to his broth." },
      { n: "Solar sat at the far end of the counter with her own bowl, three stools down, close enough to hear and far enough to pretend she couldn't. That had been the deal. Aphrodite had insisted on a chaperone. Ares had not been consulted." },
      { n: "It was terrible, at first. Ares sat bolt upright on the stool as if it might attack him. Aphrodite talked too much, brightly, about the weather, about pigeons, about the station master. Ares said yes and no. He held his chopsticks like two small spears. He got broth on his armor. Aphrodite laughed, too high, and stopped." },
      { n: "And then, somewhere in the second bowl, he said something. Solar didn't catch it. Something short, and low, and Aphrodite went quiet and looked at him, and he looked at the broth, and said it again, slower, and Solar heard it this time. That he'd never once seen her eat. In four thousand years. He hadn't known she liked noodles." },
      { n: "Aphrodite said, very quietly, that she hadn't known either. And she laughed, a real one, low, and he looked up at the sound of it like a man hearing his name called across a field." },
      { n: "And Solar, three stools down, in the steam and the noise, felt the restaurant go very quiet around her, and very far away." },
      { bg: 'flashback-incheon-harbor' },
      { music: 'mystery' },
      { n: "A different restaurant. On the water, a long window full of black sea and the lights of cranes. A long table, white cloth, too many glasses. Two families at it, one on each side, the way two armies sit on either side of a field, and nobody eating." },
      { n: "Her father at the head of one side, polishing his glasses with a handkerchief, slowly, over and over, which meant he was angry and would never once let it reach his voice. And across the table, in a perfect dark suit, a young man who smiled at her with two deep dimples and said something to her in a voice so polite it was like a door being closed very gently in her face, and touched the watch at his wrist, and looked at her like she was a contract." },
      { n: "She'd understood then, very clearly, sitting very straight with her hair pinned up and every man at the table looking at her: she wasn't the bride. She was the truce. Two families at war, and somebody had to be the thing they signed it on. And it wasn't a love story. It was a war with very good lighting. She had a feeling, from somewhere further on, that it hadn't stayed only that. She didn't know how she knew." },
      { n: "Something on a red cord at her throat. Green and cold. She'd turned it, under the table, like counting." },
      { bg: null },
      { music: 'city' },
      { n: "The steam came back. The noise. The owner shouting an order to the back. Solar found she had both hands flat on the counter on either side of her bowl, and her heart going like she'd run up the hundred and twelve shrine steps, and something on her chest, under her blouse, where there was nothing, cold, like a ring on a cord." },
      { n: "Three stools down, Aphrodite was leaning very slightly toward a god of war. Not touching. Not glowing. Just leaning. And he, carefully, as though handling a bird, had taken a piece of chashu off his own bowl with his terrible spear-grip and put it in hers. Without asking. Without speaking. Just because she'd looked at it." },
      { choose: [
        { t: "(Leave money on the counter and go. Let them have it.)", notes: 3, then: [
          { n: "Solar put a thousand yen under her glass and slipped off the stool and out through the curtain into the warm night, and on the Strip outside she stood under the streetlight for a minute with her hand pressed flat over her own sternum, over the place where nothing hung, and breathed." },
          { n: "Two families at war. A marriage to end it. She didn't know whose families. She didn't know whose war. She knew, with her whole body, that the difference between that table and this counter was that here, nobody had been made to sit down." }
        ] },
        { t: "(Stay. Finish your ramen. Watch.)", notes: 2, then: [
          { n: "She stayed and finished her ramen and watched them in the mirror behind the counter, a goddess and a god of war, hunched over noodles in a cheap shop on the Strip, finally, after four thousand years, having a conversation, and the cold thing on her chest slowly went warm again." }
        ] }
      ] },
      { n: "Aphrodite called her at midnight. She didn't say hello. She said, in a voice like someone who'd run a long way, \"He walked me to the monorail. He didn't kiss me. He bowed. Little sun, he BOWED. Nobody has ever bowed and meant it.\" And then she said, quieter, \"I'm going to see him again. On purpose. The slow way. I don't know how to do the slow way. Will you tell me?\" And Solar, lying in the dark, said she didn't know how either. That nobody did. That you just ate dinner and found out." }
    ] },

    { after: '9/19', title: '6: loved by everyone', place: 'Iwatodai · Riverside', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "September, and the evening going purple over the river. Aphrodite had wanted to see where Solar ran in the mornings, which Solar did at five, and which the goddess found barbaric, and had insisted on seeing anyway, at seven in the evening, at a stroll." },
      { n: "She'd left the gold off. Just the white dress, and her hair in a braid Mercy had done for her, and the pink scarf from the shop girl. She looked, almost, like someone. A tall woman by a river. People still turned to look. Fewer. They looked away sooner." },
      { s: 'aphrodite', f: 'neutral', t: "Little sun. Can I tell you something a goddess shouldn't say?" },
      { s: 'aphrodite', f: 'neutral', t: "Everyone has always loved me. Gods. Mortals. Kings. Everyone. They can't help it. It's what I am. It comes off me like heat off a stone." },
      { s: 'aphrodite', f: 'sad', t: "And I've never known if any of them actually liked me. Me. Not the glow. Not the power. Just me, sitting on a bench, being petty about pigeons." },
      { n: "She said it plainly, without any glow at all. She just looked like a tired woman by a river, and that was the strangest thing Solar had ever seen her be." },
      { choose: [
        { t: "I like you. The petty one on the bench.", notes: 3, then: [
          { s: 'aphrodite', f: 'surprised', t: "The petty one. The one who complains about the rain." },
          { s: 'aphrodite', f: 'happy', t: "Oh, that's... that's the nicest thing anyone's said to me in four thousand years, and it's an insult. I'm going to keep it next to the peach juice." }
        ] },
        { t: "That sounds lonely.", notes: 2, then: [
          { s: 'aphrodite', f: 'sad', t: "It's the loneliest thing in the world, little sun. Being loved by everyone and held by no one." }
        ] },
        { t: "Ares likes you. Not the glow.", notes: 2, then: [
          { s: 'aphrodite', f: 'flustered', t: "Ares doesn't know what he likes. Ares put chashu in my bowl." },
          { s: 'aphrodite', f: 'neutral', t: "...He put chashu in my bowl. I keep thinking about it. That's not a normal thing to keep thinking about." }
        ] }
      ] },
      { s: 'aphrodite', f: 'neutral', t: "You know, you do it too." },
      { n: "Solar looked at her." },
      { s: 'aphrodite', f: 'neutral', t: "Not the glow. The other thing. You walk into a room and you're so... composed. So bright and polite and finished. Hair up. Shoulders back. Every answer right. People look at you and think, there, she's fine, she's the sun, nobody needs to worry about the sun." },
      { s: 'aphrodite', f: 'serious', t: "I know that trick, little sun. I invented that trick. You shine so nobody can look straight at you." },
      { n: "Something went through Solar like a cold hand. The river went on going by, purple and gold. Somewhere inside her, very far down, a veil she had never seen and always worn moved, as if in a wind." },
      { choose: [
        { t: "...I don't know how to stop.", notes: 3, then: [
          { s: 'aphrodite', f: 'neutral', t: "Neither do I. But I'm learning. Slowly. On a bench. With pigeons." },
          { s: 'aphrodite', f: 'happy', t: "We'll learn together. Big sister and little sun. The two most dazzling liars in Iwatodai." }
        ] },
        { t: "That's not true.", notes: 1, then: [
          { s: 'aphrodite', f: 'neutral', t: "Mm. See? Perfect answer. Perfectly composed. You didn't even blink." },
          { s: 'aphrodite', f: 'happy', t: "I'll wait. I'm very old. I'm extremely good at waiting for people to stop lying to me." }
        ] },
        { t: "Takes one to know one.", notes: 2, then: [
          { s: 'aphrodite', f: 'happy', t: "It does. That's why I picked you out of a crowd of thousands. Dazzling recognizes dazzling." }
        ] }
      ] },
      { n: "They walked the rest of the way to the bridge without talking. At some point the goddess took Solar's hand, and swung it a little, like a girl, and didn't let go until the streetlights came on, and when Solar looked down at their hands in the orange light they were both entirely, ordinarily solid, and neither of them was glowing at all." }
    ] },

    { after: '10/10', title: '7: watching', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
      { music: 'dorm' },
      { n: "After the night on the bridge the dorm went quiet in a way it had never been quiet. Not the quiet of people asleep. The quiet of people who are being careful with each other, moving around a room as if somebody in it were sleeping and they didn't want to wake them, when nobody was." },
      { n: "There was someone missing from the kitchen. That was the simplest way to say it, and nobody said it. Somebody had stopped coming down at six to make breakfast. Nobody had taken over. They just stood in the kitchen doorway in the mornings now and looked at the stove, and then went out and bought bread." },
      { n: "Aphrodite had come to visit because Solar had stopped coming to the station. She hadn't been told why. She'd arrived at the door in the gold, glowing, ready to be annoyed, and had stopped on the threshold, and looked at the lounge, and turned the glow off, all at once, like someone taking off a hat in a church." },
      { n: "She sat on the arm of the couch and watched. Akihiko came downstairs at nine and sat in the armchair and stared at nothing. Yukari brought him a cup of tea without asking and set it by his hand and went back to her homework. Junpei sat on the floor with his back against Akihiko's chair and talked about baseball, terribly, for an hour, about nothing, to nobody, until Akihiko, very slowly, started to answer. Ken fell asleep sitting up on the far end of the couch and Koromaru got up onto it and lay across his feet. Mitsuru came down at ten and stood in the doorway for a long time and didn't come in." },
      { s: 'aphrodite', f: 'surprised', t: "Little sun. What is this? What are they doing?" },
      { choose: [
        { t: "Taking care of each other.", notes: 3, then: [
          { s: 'aphrodite', f: 'neutral', t: "Nobody's kissing anyone. Nobody's declaring anything. Nobody's even touching." },
          { s: 'aphrodite', f: 'surprised', t: "And it's so loud. I can feel it from here. I've never felt anything like it. It's like standing next to a bonfire." }
        ] },
        { t: "This is what love looks like here.", notes: 3, then: [
          { s: 'aphrodite', f: 'sad', t: "...Oh." },
          { s: 'aphrodite', f: 'neutral', t: "I thought love was a spark. A kiss. A golden apple and a war." },
          { s: 'aphrodite', f: 'sad', t: "This is just... tea. And bad baseball talk. And sitting in the same room when it hurts." }
        ] }
      ] },
      { s: 'aphrodite', f: 'sad', t: "Four thousand years, and I didn't know. I was the goddess of it. And I didn't know it could look like this." },
      { n: "She went quiet. Then she got up, very carefully, so the couch didn't creak, and went into the kitchen. Solar heard the kettle. She came back with a cup of tea and walked across the lounge and set it down on the little table beside the doorway, where Mitsuru was standing. She didn't say anything. She didn't glow. She just set it down, and went back to the couch." },
      { n: "Mitsuru looked at the cup. Then at the goddess. Then, after a long moment, she came in from the doorway, and sat down on the very edge of the armchair across from Akihiko, and picked up the tea, and drank it." },
      { n: "Aphrodite didn't say anything about it. But her hand found Solar's on the arm of the couch, and held on, hard, the whole rest of the night, and Solar let her, and in the reflection in the dark window there was a whole room of people sitting very still together, and none of them was alone in it." },
      { choose: [
        { t: "Thank you for staying.", notes: 3, then: [
          { s: 'aphrodite', f: 'neutral', t: "Where else would I go, little sun? This is the warmest room in the world." }
        ] },
        { t: "(Lean your head on her shoulder.)", notes: 3, then: [
          { n: "Solar leaned her head on the goddess's shoulder. Aphrodite went still, and then put her cheek on the top of Solar's head, the way an older sister does on a long train ride, and they stayed like that until the clock on the wall said eleven fifty-nine, and then twelve, and then the lights went out, and nobody in the room moved, because nobody had to." }
        ] }
      ] }
    ] },

    { after: '11/7', title: '8: undying love', place: 'Moonlight Bridge · The Dark Hour', time: 'The Dark Hour', scene: [
      { dark: true },
      { music: 'mystery' },
      { n: "November, the green hour, and it was bad. Something on Moonlight Bridge that wasn't on any of Fuuka's charts, something that had come up out of the black water under the span and climbed the cables like a vine and was waiting there at the top, enormous, made of hands. The rest of the party had gone the long way round to cut it off. Solar had gone the short way, because it was faster, because she always did." },
      { n: "It caught her on the span. A sweep of black hands across the road and her feet went out from under her and the Evoker went skidding away across the asphalt toward the rail, and she was on her back on the bridge looking up at the green moon with the breath knocked out of her and the thing coming down the cable toward her, hand over hand, without any hurry at all." },
      { n: "Then there was pink light. Everywhere. A dome of it, warm and humming, over her and over the woman standing above her with her arms spread and her hair loose and lifting in a wind that wasn't blowing anywhere else on the bridge." },
      { s: 'aphrodite', f: 'serious', t: "Undying Love. Neither of us can die while this lasts. I won't allow it." },
      { s: 'aphrodite', f: 'serious', t: "Get up, little sun. Get up. I'm not losing my favorite mortal to some ugly thing on a bridge. I refuse. It's beneath both of us." },
      { choose: [
        { t: "(Get up. Go for the Evoker.)", notes: 3, then: [
          { n: "Solar got up. Inside the pink light she felt invincible. Not like she couldn't be hurt. Like being hurt didn't matter, because someone had decided, for her, without asking, that she wasn't allowed to be lost. She ran for the rail and scooped up the Evoker and turned and put it to her temple in one movement." }
        ] },
        { t: "You're not allowed to die either.", notes: 2, then: [
          { s: 'aphrodite', f: 'happy', t: "I'm immortal, darling. But I accept your terms. Now GET UP." },
          { n: "Solar got up, and ran for the rail, and scooped up the Evoker, and turned, and put it to her temple." }
        ] }
      ] },
      { summon: 'haenim' },
      { n: "Haenim came up out of her into the pink light, veiled, gold and blush, the sun crown of ribbons and pins, and for a second the two lights met over the bridge, the goddess's pink and the Persona's gold, and mixed, and the whole span lit up like dawn had come four hours early." },
      { n: "They won. Together, the goddess and the girl and the thing that came up out of the girl, inside a dome of pink on a bridge over black water. Doves of light came screaming down out of the green sky like a hailstorm. The rope went out and caught. When it was over, and the thing was smoke drifting off the cables, they were both sitting on the asphalt against the rail, out of breath, and Aphrodite was laughing, and then she wasn't." },
      { s: 'aphrodite', f: 'surprised', t: "...Little sun. Your... your other self. The one with the veil." },
      { s: 'aphrodite', f: 'happy', t: "She's a sun. Isn't she. A girl who became the sun. I called you little sun the first day, in the station. I didn't know. I swear by my own name I didn't know." },
      { s: 'aphrodite', f: 'neutral', t: "I was right, though. I'm always right about names. It's one of my few duties." },
      { n: "Then she went quiet. She looked down at her own hands, which were shaking very slightly, gold at the wrists, solid to the fingertips." },
      { s: 'aphrodite', f: 'sad', t: "I've never once used that for a mortal. Undying Love. Never. Not for a hero. Not for a king. Not for a man on a ship who prayed to me every night for ten years." },
      { s: 'aphrodite', f: 'neutral', t: "I used it on you without thinking. Just reached out and grabbed you. With my whole self." },
      { s: 'aphrodite', f: 'neutral', t: "That's it, isn't it. That's what it is. Not the looking. The grabbing. You hold on before you've decided to." },
      { choose: [
        { t: "You held on to me.", notes: 3, then: [
          { s: 'aphrodite', f: 'sad', t: "I held on to you. Four thousand years and I've never held on to anything. I didn't know my hands knew how." },
          { n: "She took Solar's hand, there on the cold bridge, and held it in both of hers, hard, the way you hold something that nearly went over a rail." }
        ] },
        { t: "So go home and hold on to Ares.", notes: 3, then: [
          { s: 'aphrodite', f: 'surprised', t: "..." },
          { s: 'aphrodite', f: 'flustered', t: "Little sun. We're sitting on a bridge covered in monster ash and you're giving me romantic advice. You're the worst. You're my favorite. Both." }
        ] },
        { t: "Thank you.", notes: 2, then: [
          { s: 'aphrodite', f: 'neutral', t: "Don't thank a goddess. It makes her suspicious. Just stay alive. That's the offering I want now." }
        ] }
      ] },
      { n: "Far off, down the bay, somewhere out past the last lights, a train whistle went, long and low. Aphrodite's head came up at it like a deer's. She didn't let go of Solar's hand. She held it tighter, and said nothing, and they sat against the rail until the green drained out of the sky all at once and the bridge was only a bridge again, with traffic on it, and two women sitting on its walkway in the cold, holding hands, whom nobody looked at twice." }
    ] },

    { after: '12/1', title: '9: soul partner', place: 'Port Island Station · Central Concourse', scene: [
      { music: 'tender' },
      { n: "The end of November. The station again, the central concourse, the same spot where she'd first stood glowing and furious in July. She was standing there again now, in the gold, but not glowing. Holding two cans of peach juice." },
      { n: "The crowd still parted around her. Less than it had. People still looked. Some of them nodded now. The old man from the shoe-repair stall said good morning to her every day, and the girl at the kiosk knew what she'd buy before she asked, and a small boy who waited for his school bus at the north exit had given her a drawing of a dove, very badly, in crayon, and she had kept it in her sash for a month." },
      { s: 'aphrodite', f: 'neutral', t: "An offering. From me. To you. That's backwards. I don't care." },
      { s: 'aphrodite', f: 'neutral', t: "I'm going home, little sun. When the doors open. Ares asked me. Properly. Not an order. A question. At Hagakure. He's become a regular. The owner calls him \"armor-san.\"" },
      { s: 'aphrodite', f: 'neutral', t: "He asked if I'd come home and stand on his side of the field. Not as his sword. Just... next to him. Not in front, not across. Next to." },
      { s: 'aphrodite', f: 'happy', t: "I told him I'd think about it. I made him wait three whole days. It was the best three days of my life." },
      { choose: [
        { t: "What did you tell him?", notes: 2, then: [
          { s: 'aphrodite', f: 'happy', t: "I told him yes, obviously. I'm the goddess of love, little sun. I'm not an idiot." },
          { s: 'aphrodite', f: 'neutral', t: "...I'm a little bit of an idiot. I told him yes and then I cried in the noodle shop. The owner gave me extra egg." }
        ] },
        { t: "I'm so happy for you.", notes: 3, then: [
          { s: 'aphrodite', f: 'surprised', t: "...You are. I can feel it. You're actually happy. For me. Not because I made you be." },
          { s: 'aphrodite', f: 'neutral', t: "Nobody's ever been happy for me before. They've been happy at me. It's different." }
        ] }
      ] },
      { s: 'aphrodite', f: 'neutral', t: "But before I go, I need to know something. I've loved a thousand people because I couldn't help it. I need to know if this is different. If you're different." },
      { s: 'aphrodite', f: 'neutral', t: "What am I to you, little sun?" },
      { choose: [
        { t: "My big sister. The bossy kind.", notes: 3, then: [
          { n: "For the first time since Solar had met her, she didn't glow. Not at all. Her face went completely unguarded, the way it had on the bridge, the way a face goes when the person behind it isn't arranging it for anyone." },
          { s: 'aphrodite', f: 'sad', t: "...A sister. Oh, little sun. I've had sisters. Goddesses. We tried to kill each other over an apple." },
          { s: 'aphrodite', f: 'happy', t: "This is much better. I'm going to be extremely bossy. I'm going to criticize your eyeliner across dimensions." }
        ] },
        { t: "My best friend. The petty one on the bench.", notes: 3, then: [
          { s: 'aphrodite', f: 'happy', t: "...Best friend. A goddess with a best friend. How deeply undignified." },
          { s: 'aphrodite', f: 'happy', t: "I love it. I love it so much. Nobody has ever just been my friend. They always want something. You only ever wanted me to get rained on." }
        ] },
        { t: "The first person who held on to me here.", notes: 2, then: [
          { s: 'aphrodite', f: 'neutral', t: "No. You held on to me first, little sun. In the mall. By the mirror. I was going through and you took my arm." },
          { s: 'aphrodite', f: 'happy', t: "I'll let you think it was me, though. Goddesses need their little legends." }
        ] }
      ] },
      { s: 'aphrodite', f: 'neutral', t: "Come here. Hold still. I'm going to do something intimate." },
      { n: "She touched two fingers to Solar's chest, over her heart, over the place where Solar sometimes, at night, felt a cold ring on a cord that wasn't there, and a thread of pink light ran between them, thin as a hair, and went warm." },
      { s: 'aphrodite', f: 'neutral', t: "Soul Partner. It's a little thing I do. When I heal, you heal. When you're hurt, I feel it. I've only ever bound it to people for a battle. A few minutes. An afternoon." },
      { s: 'aphrodite', f: 'neutral', t: "I don't know if it'll hold across the gap. Between my world and whichever ones are yours. I've decided it will. I've decided very firmly." },
      { n: "Solar couldn't say anything. She stood in the middle of Port Island Station with a goddess's fingers on her heart and a thread of light going out from her chest into someone else's, and the whole concourse, every commuter, every schoolgirl, every man in a suit, slowed down and looked, and for once, for the first time in her life, she didn't care at all who was looking." }
    ] },

    { after: '12/19', title: '10: to the sun', place: 'Paulownia Mall · Central Atrium', time: 'Evening', scene: [
      { place: 'Paulownia Mall · Central Atrium', time: 'Evening', bg: 'portisland-christmas' },
      { music: 'tender' },
      { n: "December. The atrium had a Christmas tree three stories tall, gold and white and pink, which the mall management swore up and down had been ordered in gold and white only, and which had arrived with pink in it, and nobody could explain the invoice." },
      { n: "She was sitting on the rim of the planter at its base, glowing in the reflected light, in white and gold, holding something in both hands in her lap, the way you'd hold a bird you'd caught that you meant to let go." },
      { s: 'aphrodite', f: 'neutral', t: "There's an old story about me. A golden apple. It had words on it, written by someone who wanted a war. To the fairest. Three goddesses fought over it, and a mortal boy had to choose, and he chose me, and a city burned." },
      { s: 'aphrodite', f: 'sad', t: "I was very proud of that for a very long time. I was the fairest. A whole city burned to say so." },
      { s: 'aphrodite', f: 'neutral', t: "I've been thinking about it all month. About what I'd write on it now, if I could." },
      { cg: 'link-aphrodite-r10' },
      { n: "She opened her hands. A golden apple. Real gold, warm, glowing faintly pink at the edges. There was writing on it, small and curling, in a script Solar didn't know, and then, as she looked, in one she did." },
      { n: "To the sun." },
      { s: 'aphrodite', f: 'happy', t: "It's yours. My little sun. Not the fairest. The warmest. That's better. I've decided it's better. Nobody's ever started a war over warm." },
      { choose: [
        { t: "I'll keep it forever.", notes: 3, then: [
          { s: 'aphrodite', f: 'neutral', t: "You'd better. It's the only thing I've ever given away that I didn't want back." }
        ] },
        { t: "No wars over this one.", notes: 2, then: [
          { s: 'aphrodite', f: 'happy', t: "None. I'll smite anyone who tries. Lovingly. With doves." }
        ] }
      ] },
      { s: 'aphrodite', f: 'neutral', t: "I came here running from being looked at, little sun. Being everybody's and nobody's. A goddess in a field being lovely while the war went on around her." },
      { s: 'aphrodite', f: 'neutral', t: "I'm going back to the same field. The same war. It'll never end. Gods don't get endings, we get seasons. But I'm going to stand next to someone in it. And I'm going to let him hold on. And I'm going to hold back." },
      { s: 'aphrodite', f: 'serious', t: "And you're going to do the same, little sun. Wherever you go. Whichever life. You're going to let somebody look straight at you, without the shine, and you're not going to flinch. Promise your sister." },
      { choose: [
        { t: "I promise.", notes: 3, then: [
          { s: 'aphrodite', f: 'neutral', t: "Liar. A beautiful liar. You don't know if you can." },
          { s: 'aphrodite', f: 'happy', t: "But you said it, and I heard it, and I'm a goddess, so now it's a little bit true. That's how it works. I just decided." }
        ] },
        { t: "I'll try.", notes: 3, then: [
          { s: 'aphrodite', f: 'happy', t: "Good. Honest. That's better than a promise. I'll take try. I'll take try every day." }
        ] },
        { t: "You first.", notes: 2, then: [
          { s: 'aphrodite', f: 'happy', t: "Oh, I'm already doing it. Look at me. I'm sitting in a shopping mall crying in front of a Christmas tree. I've never been less dazzling in my life." }
        ] }
      ] },
      { n: "They sat under the tree until the mall closed. The goddess talked about home, the endless field and the towers and the very angry gods, and about Ares, who had learned to make ramen, badly, on a camp stove, and who called her to the monorail every evening and bowed, every single time, and meant it every single time." },
      { cg: null },
      { n: "When the security guard came to tell them it was closing, Aphrodite stood up and kissed Solar on the forehead, lightly, the way she'd once offered to kiss Yukari, the way she'd kissed a thousand mortals into a fever. Nothing happened. No fever. No spell. Just a kiss on the forehead from a woman who loved her, which was, Solar thought, walking home with a golden apple in her coat pocket warm against her hip, the strongest magic she had seen all year." }
    ] }
  ],
  afterMax: [
    { title: 'the busker', place: 'Port Island Station · Central Concourse', scene: [
      { music: 'city' },
      { n: "A boy with an acoustic guitar had set up by the east exit, singing love songs in a thin, earnest voice to a crowd of nobody, with his case open at his feet and three coins in it." },
      { s: 'aphrodite', f: 'neutral', t: "His second verse is a lie. Nobody waits forever. They wait about eight months and then they get a cat." },
      { s: 'aphrodite', f: 'happy', t: "But the chorus. Little sun, the chorus is true. He's singing it to someone. A girl from his cram school. Ponytail. She has no idea. One kiss on his forehead and she'd—" },
      { choose: [
        { t: "Let him do it the slow way.", notes: 3, then: [
          { s: 'aphrodite', f: 'neutral', t: "...The slow way. With dirt on the roots." },
          { s: 'aphrodite', f: 'happy', t: "Fine. FINE. But I'm allowed to listen. A goddess can listen." }
        ] },
        { t: "(Put a coin in the case.)", notes: 2, then: [
          { n: "Solar dropped in a hundred yen. Aphrodite had nothing to drop in, so she leaned down and tucked the pink silk scarf into the case, folded, and the boy stopped mid-chorus and stared at her, and went red to the ears, and started the song again from the top, louder." }
        ] }
      ] },
      { s: 'busker', t: "Um. Thank you. That one's, um. For somebody." },
      { s: 'aphrodite', f: 'happy', t: "I know, darling. Sing it to her. Badly. Out loud. It's the only way that works. I have it on good authority." }
    ] },
    { title: 'sea foam', place: 'Port Island · Pier', scene: [
      { place: 'Port Island · Pier', time: 'Daytime' },
      { music: 'tender' },
      { n: "Aphrodite wanted to see the sea. She'd been born from it, she said, from the foam, and she hadn't stood next to any sea since July, and it was getting to be an embarrassment." },
      { n: "The bay at the end of the Port Island pier was gray and choppy and smelled of diesel and cold, and was not, by any standard, the sea she was used to. She stood at the very end of the pier with her hair coming loose in the wind and looked at it for a long time." },
      { s: 'aphrodite', f: 'neutral', t: "It's ugly. It's gray. It's got a shopping bag in it. I love it." },
      { choose: [
        { t: "(Stand next to her at the very edge.)", notes: 3, then: [
          { n: "Solar went to the very edge and stood next to her, close to the drop, closer than she ever stood to water if she could help it, and didn't know why her legs went heavy and cold doing it, and stood there anyway, and the goddess, without looking, put an arm around her shoulders and held on." }
        ] },
        { t: "(Stay a step back from the edge.)", notes: 2, then: [
          { s: 'aphrodite', f: 'neutral', t: "You don't like the edge. I've noticed. Come stand behind me, then. I'll be the edge. I'm very good at being in front of things." }
        ] }
      ] },
      { s: 'aphrodite', f: 'neutral', t: "When I go home, I'm going to stand at the edge of my own sea and think of this ugly gray one. And the girl who stood next to it even though she was scared. I could tell you were scared. You went all composed." }
    ] }
  ]
});
