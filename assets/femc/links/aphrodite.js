/* Aphrodite · XIX The Sun. Arrives on the 7/7 full moon. Format notes are at the top of akihiko.js.
   Kat's Easter egg: Kat mains Aphrodite in Smite (mid and solo, 20+ stars, a 5–7 KDA). Aphrodite can feel that
   devotion from another world. Typing "love birds" once she's met releases her doves (stamp: Mid Lane Goddess). */
FemcSocial.define({
  id: 'aphrodite', name: 'Aphrodite', short: 'Aphrodite', arcana: 'Sun', numeral: 'XIX', from: 'Smite',
  arrives: '7/7',
  home: { place: 'Port Island Station', slot: 0, days: [0, 6], hint: 'Daytime on weekends, wherever there is shopping near Port Island Station.' },
  approach: "The whole concourse has gone strangely quiet around a woman in white and gold, and she is looking straight at you.",
  invite: {
    ask: ["Little sun. Your goddess requests your presence.", "I am bored and beautiful. Come fix the first one.", "Come. I have something to show you.",
      "Little sun. The station is full of people who do not appreciate me. Come and appreciate me.",
      "I have found a shop that sells only pink things. I require a witness.",
      "Your goddess is at the station. Your goddess is waiting. Your goddess is becoming impatient.",
      "There is a new flavor in the vending machine. We must investigate it together.",
      "Come out, little sun. The weather is beautiful. I made it so. (I did not. But it is.)"],
    ok: ["Of course you said yes. They always do.", "Wonderful. I will be by the ticket gates, being radiant.", "Good. Hurry. I am being stared at and I want you to see it."],
    no: ["...No one says no to me. How novel.", "Very well. I shall be adored by strangers instead. It is not the same.", "Hmph. I forgive you. Eventually. Possibly by dinner."]
  },
  hangouts: [
    [
      { n: "The pigeons outside Port Island Station had found Aphrodite within a week, the way pigeons found anyone who sat still near food, and on weekend afternoons she held court on the bench by the bus stop with a bag of bread crusts and an expression of profound disappointment." },
      { s: 'aphrodite', f: 'serious', t: "Little sun, look at them. Gray. Lumpy. Grumbling. This is what your world has instead of doves." },
      { s: 'aphrodite', f: 'neutral', t: "My doves are as white as sea foam. My doves do not fight over a crust like drunk sailors." },
      { choose: [
        { t: "They're doing their best.", notes: 3, then: [
          { s: 'aphrodite', f: 'sad', t: "...They are, aren't they. Poor lumpy things." },
          { n: "She emptied the whole bag in one generous swoop, and a hundred pigeons came down on the bus stop at once, and an old woman waiting for the 4:15 told them both off." }
        ] },
        { t: "That one's kind of pretty.", notes: 2, then: [{ s: 'aphrodite', f: 'surprised', t: "The one with the green neck? ...Hm. Yes. Iridescent. I'll allow it. You may be my favorite, sir." }] },
        { t: "They're rats with wings.", notes: 1, then: [{ s: 'aphrodite', f: 'serious', t: "Don't say that. They can hear you. Every bird is a little bit mine, little sun, even the ugly ones." }] }
      ] },
      { n: "When they got up to leave, one green-necked pigeon followed them as far as the ticket gates, and Aphrodite told everybody in earshot that she had a new admirer." }
    ],
    [
      { n: "There was a perfume counter on the ground floor of the department store by the station, all glass and gold trim and saleswomen in white gloves, and Aphrodite had decided it was the closest thing in Iwatodai to a proper temple." },
      { s: 'aphrodite', f: 'happy', t: "Smell this one. No, this one. No, give it back, that one's for heartbreak, you're too young." },
      { s: 'aphrodite', f: 'neutral', t: "Every bottle is a promise, little sun. This one promises you'll be remembered. This one promises you'll be forgiven. This one promises a man named Hiroshi will finally call. It's lying." },
      { choose: [
        { t: "Which one would you pick for me?", notes: 3, then: [
          { s: 'aphrodite', f: 'happy', t: "Oh, I have been waiting for you to ask." },
          { n: "She went through eleven bottles, sniffing her own wrist and then Solar's, frowning, discarding, and in the end she chose none of them, and announced that Solar already smelled like sunlight and clean laundry and that nobody in the building could improve on it." }
        ] },
        { t: "Which one's yours?", notes: 2, then: [{ s: 'aphrodite', f: 'serious', t: "None of them, darling. I don't wear perfume. I am the perfume." }] },
        { t: "(Sneeze.)", notes: 1, then: [
          { n: "Solar sneezed, enormously, three times, and a saleswoman handed her a tissue with the expression of someone who saw this every day." },
          { s: 'aphrodite', f: 'happy', t: "Bless you. Literally. That one was from me." }
        ] }
      ] },
      { n: "They left with a handful of tiny sample vials the saleswomen kept pressing into Aphrodite's hands, for reasons none of them could have explained." }
    ],
    [
      { n: "A boy with an acoustic guitar had set up by the east exit, singing love songs in a thin, earnest voice to an open case with three coins in it, and Aphrodite had stopped dead in front of him like she'd been summoned." },
      { s: 'aphrodite', f: 'serious', t: "His second verse is a lie. Nobody waits forever. They wait about eight months and then they get a cat." },
      { s: 'aphrodite', f: 'neutral', t: "But the chorus. Little sun, the chorus is true. He's singing it to someone." },
      { choose: [
        { t: "Who's he singing it to?", notes: 3, then: [
          { s: 'aphrodite', f: 'happy', t: "A girl from his cram school. Ponytail. She has no idea. Isn't it wonderful? One kiss on his forehead and I could fix the whole thing." },
          { n: "Solar talked her out of it. It took the entire song." }
        ] },
        { t: "(Put a coin in the case.)", notes: 2, then: [{ n: "Solar dropped in a hundred yen. Aphrodite had nothing to drop in, so she leaned down and told the boy his chorus was perfect instead, and he turned the color of a stoplight and forgot the words." }] },
        { t: "Tell him about the second verse.", notes: 1, then: [{ s: 'aphrodite', f: 'happy', t: "I couldn't possibly. He's so young. Let him find out about the cat on his own." }] }
      ] },
      { n: "By the time they left, the case had nine coins in it and a crepe someone had set there for no reason at all, and the boy was singing the chorus twice." }
    ],
    [
      { n: "It was raining, the hard, straight-down kind of rain that turned the plaza outside Port Island Station into a shallow lake, and Aphrodite was standing just inside the doors with her arms folded, refusing to go out in it." },
      { s: 'aphrodite', f: 'serious', t: "I don't get wet. It isn't done. In four thousand years I have never once been rained on." },
      { s: 'aphrodite', f: 'neutral', t: "Somebody always brings an umbrella. Or a cloak. Or a small army to hold up a canopy." },
      { choose: [
        { t: "(Hold your umbrella over her.)", notes: 3, then: [
          { n: "Solar opened her umbrella, a cheap clear plastic one from the convenience store, and held it up over the goddess, which meant holding it very high, and getting most of her own left side soaked in the process." },
          { s: 'aphrodite', f: 'happy', t: "A canopy. Of sorts. Oh, this is perfectly adequate, little sun. Higher." }
        ] },
        { t: "We could wait it out.", notes: 2, then: [
          { s: 'aphrodite', f: 'neutral', t: "Yes. We'll wait. I am extremely good at waiting to be served." },
          { n: "They watched the rain from the doors for half an hour while she reviewed the umbrellas of passers-by like gowns at a ball." }
        ] },
        { t: "Just run for it.", notes: 1, then: [
          { s: 'aphrodite', f: 'surprised', t: "RUN? In THIS?" },
          { n: "She did not run for it." }
        ] }
      ] },
      { n: "Afterward, buying peach juice at the machine by the gates, she found a single raindrop on her sleeve and studied it with an expression of scandalized wonder, like it was a souvenir." }
    ],
    [
      { n: "There was a row of capsule toy machines by the south exit, twenty of them, blinking and rattling, and Aphrodite had discovered that for two hundred yen a machine would give you a small plastic egg with a mystery inside. Solar's coins had been funding the research." },
      { s: 'aphrodite', f: 'happy', t: "You pay. You turn. You hope. Sometimes you get the cat in the little hat and sometimes you get the same frog three times. That's love, little sun." },
      { s: 'aphrodite', f: 'serious', t: "I have gotten the frog three times." },
      { choose: [
        { t: "(Turn the crank yourself.)", notes: 3, then: [
          { n: "Solar turned the crank. The capsule rolled out. It was the cat in the little hat, a pink hat, and Aphrodite shrieked loudly enough that a station attendant came over to check on them." },
          { s: 'aphrodite', f: 'happy', t: "You BLESSED child. I knew there was a reason I kept you." }
        ] },
        { t: "Trade the frogs with someone.", notes: 2, then: [{ s: 'aphrodite', f: 'neutral', t: "Trade? Give away a gift from fate? ...How many frogs do they want for one cat." }] },
        { t: "Maybe you're meant to have the frog.", notes: 1, then: [{ s: 'aphrodite', f: 'serious', t: "Don't. Don't make it a lesson." }] }
      ] },
      { n: "One way or another, by the end of the afternoon the cat in the little hat was swinging from the strap of Aphrodite's bag. The three frogs went home with Solar, who was told to love them. It was phrased as an order." }
    ]
  ],
  // After rank MAX on the romance route, each visit plays the next date in order (then they rotate).
  // MAX lands just before Christmas, so the dates run through the winter, December into January.
  dates: [
    { title: 'a thousand yen', place: 'Port Island Station · Central Concourse', music: 'joy', scene: [
      { n: "The perfume counter in the department store by the station had hired Aphrodite for three weekends in December, to stand at the end of the glass in a white blouse and hand out samples, and in three weekends they had sold more perfume than in the whole of the year before, and nobody in the store could explain it, and the manager had cried a little when she handed over the envelope." },
      { n: "There was a thousand yen in it. One bill. Aphrodite had been carrying it around for a week like a relic, taking it out to look at it, holding it up to the light. Her name was misspelled on the front of the envelope, one katakana wrong. She'd kept the envelope too." },
      { s: 'aphrodite', f: 'serious', t: "Little sun. Today I am taking you on a date. A mortal one. With my wages." },
      { s: 'aphrodite', f: 'neutral', t: "In four thousand years nobody has ever paid me for anything. They gave me things. Temples. Wars. Doves. Never once a single bill in an envelope with my name spelled wrong on the front." },
      { s: 'aphrodite', f: 'happy', t: "I am going to spend every yen of it on you. It will be extremely romantic and I will not be taking criticism." },
      { choose: [
        { t: "Every yen? You should save some.", notes: 1, then: [
          { s: 'aphrodite', f: 'serious', t: "Save it? For what? For WHAT, little sun? I'm immortal. Saving is for people with deadlines." }
        ] },
        { t: "I accept. Spend it on me.", notes: 3, then: [
          { s: 'aphrodite', f: 'happy', t: "Finally. Someone who knows how to receive. You have no idea how rare it is." }
        ] }
      ] },
      { n: "The first hundred and twenty went into the vending machine by the ticket gates, which gave up a can of peach juice, the pink one, and she presented it to Solar with both hands and a small bow, the exact bow Solar had given her in July, copied perfectly, like she'd practiced it in a mirror. She probably had. She could see herself in mirrors." },
      { n: "Two hundred went into the capsule toy machines by the south exit. She was hunting the frog. She said Solar's three frogs needed a fourth, for balance, that a family of three frogs was a tragedy waiting to happen, and she turned the crank with her eyes shut and her lips moving, and the capsule rolled out, and it was the cat in the little hat, a blue hat this time, and she looked at it with deep betrayal." },
      { s: 'aphrodite', f: 'surprised', t: "Fate is mocking me. I have been mocked by fate. I wanted the frog." },
      { choose: [
        { t: "Keep the cat. Now yours has a friend.", notes: 3, then: [
          { s: 'aphrodite', f: 'happy', t: "...A friend. Two cats in two little hats." },
          { n: "She clipped the blue one to her bag strap beside the pink one, and stood back to look at them, and adjusted their hats, which did not adjust." }
        ] },
        { t: "(Spend your own two hundred. Get her the frog.)", notes: 2, then: [
          { n: "Solar fed in her own coins and turned. It was the frog. Of course it was the frog. Aphrodite took it from her with an expression of profound suspicion and then, slowly, delight." },
          { s: 'aphrodite', f: 'flustered', t: "You're not supposed to pay. This is MY date. ...Thank you. Don't do it again." }
        ] }
      ] },
      { n: "The boy with the guitar was at the east exit, still singing the same chorus. She dropped three hundred yen into his case, one coin at a time so that they clinked, and told him the second verse was getting better, which it was not. He went red to the ears. He'd been singing the chorus twice since September. He sang it three times now." },
      { n: "That left three hundred and eighty yen. She counted it twice on her palm, frowning, her gold nails very bright against the dull coins, and then marched Solar to the takoyaki stand outside the station and bought a box of six for three hundred and fifty, and stood in the cold plaza holding it with an air of sacred responsibility." },
      { s: 'aphrodite', f: 'serious', t: "Thirty yen. I am down to thirty yen. So this is poverty. It's thrilling." },
      { n: "She ate one, to see, and declared octopus a sea creature of questionable intentions, and then fed the other five to Solar one at a time, blowing on each of them first, much too hard, with total concentration, holding the toothpick like a quill, while commuters went around them both and stared." },
      { choose: [
        { t: "You have to have another one.", notes: 2, then: [
          { s: 'aphrodite', f: 'neutral', t: "I had one. An octopus looked at me. Once was enough." }
        ] },
        { t: "(Feed the last one to her.)", notes: 3, then: [
          { n: "Solar took the toothpick and held the last one out, and Aphrodite looked at it, and at her, and leaned down and took it, and chewed with great dignity, and then discovered, in horror, that it was still extremely hot inside, and fanned her own mouth with one hand for a full minute while Solar laughed so hard she had to hold on to the railing." },
          { s: 'aphrodite', f: 'flustered', t: "You did that on purpose. That's a crime against a deity. I'll forgive you by dinner." }
        ] }
      ] },
      { n: "At the gates she stopped and opened her hand and looked at what was left on her palm, three ten-yen coins, dull and brown, and then closed Solar's fingers over them, one by one, as though she were handing over something with a royal crest on it." },
      { s: 'aphrodite', f: 'happy', t: "There. All of it. Every yen. I've given you everything I own, little sun. Do you understand how romantic that is? Mortals do it all the time. I had no idea." }
    ] },
    { title: 'mid lane', place: 'Paulownia Mall · Game Panic', music: 'joy', scene: [
      { n: "Yukari had brought her. That was the first thing Solar learned, walking into Game Panic on a Sunday afternoon past the claw machines and the crowd around the dance game, and finding the goddess of love at a fighting game cabinet in the back with her hair tied up and her sleeves pushed to the elbow, and Yukari standing behind her with her arms folded and the face of a girl who had made a monster and was only now beginning to understand it." },
      { s: 'yukari', f: 'serious', t: "I showed her the game. Once. To kill time. Forty minutes ago." },
      { s: 'yukari', f: 'neutral', t: "She's beaten everyone in the building. There's a boy from another school who's been in the bathroom for ten minutes." },
      { s: 'aphrodite', f: 'happy', t: "Little sun! Come and watch. They see the pink and they think I'm a pushover. They are wrong. They are being wrong in a very satisfying way." },
      { n: "She was playing the smallest, pinkest character on the roster, a girl in a frilled dress with a parasol, and she was playing her like a war crime. She didn't mash buttons. She waited. She stood in the corner of the screen doing nothing at all, smiling, while the other player grew more and more confident, and then, all at once, in one long beautiful string of inputs, she took him apart." },
      { choose: [
        { t: "That's how you fight in the other world. Wait, then everything at once.", notes: 3, then: [
          { s: 'aphrodite', f: 'surprised', t: "...You know how I fight?" },
          { s: 'solar', t: "You told me. Mid and solo." },
          { s: 'aphrodite', f: 'flustered', t: "Don't say it in public, I'll start glowing, I'll blind the little archer." },
          { s: 'yukari', f: 'neutral', t: "Too late." }
        ] },
        { t: "Yukari, what does she win?", notes: 2, then: [
          { s: 'yukari', f: 'neutral', t: "Nothing. You don't win anything. You just win." },
          { s: 'aphrodite', f: 'happy', t: "Which is the purest form, little archer. Nobody hands you a golden apple. You just stand there being right." }
        ] }
      ] },
      { n: "Then she stood up, and pressed the coin she'd been saving into Solar's hand, and pointed across the aisle. A light-gun game, two plastic pistols on curly cables, zombies, a logo dripping something red. Two players." },
      { s: 'aphrodite', f: 'serious', t: "No more fighting each other. Today I play beside you. In the other world you played me. Now I play with you. Your lane, little sun." },
      { n: "She was terrible at it. Spectacularly terrible. She held the plastic gun like a bouquet and fired at the ceiling to reload and screamed every single time a zombie came around a corner, which was every four seconds, and Solar, laughing, keeping them both alive, felt an odd old familiarity in her hands, like a habit from somewhere else, the habit of guarding someone who was all power and no defense." },
      { choose: [
        { t: "(Cover her. Take every zombie on her side too.)", notes: 3, then: [
          { n: "Solar shot everything on both halves of the screen. Aphrodite stopped shooting entirely and just stood behind her with the gun lowered, watching her, glowing very faintly, with an expression that made a boy at the next cabinet lose a life without noticing." },
          { s: 'aphrodite', f: 'flustered', t: "Soul Partner. You do it here too. Without any link at all." }
        ] },
        { t: "Yukari. Take her gun.", notes: 2, then: [
          { s: 'yukari', f: 'surprised', t: "...Me?" },
          { n: "Yukari took it. Yukari, it turned out, was archery club, and did not miss. They got all the way to the last stage with the goddess cheering behind them like a stadium." },
          { s: 'aphrodite', f: 'happy', t: "My archer and my little sun. I have never been so well defended in my life. Ares should see this." }
        ] }
      ] },
      { n: "They lost to the final boss. Nobody minded. Yukari went to the machine and came back with three cans of peach juice without being asked, which Aphrodite noticed, and was moved by, and said so, at length, until Yukari went pink and told her to just drink it." },
      { s: 'yukari', f: 'blushing', t: "It's a drink. It's not an offering. Stop looking at me like that." },
      { n: "On the way out Aphrodite stopped at the fighting game one more time. The high score table had seven places and every one of them read APH, three letters, all the machine allowed, which she had been very upset about. The boy from the other school was standing in front of it with his hands in his pockets, studying it, the way you'd study a scar." }
    ] },
    { title: 'the competition', place: 'Naganaki Shrine', scene: [
      { n: "Naganaki Shrine was quiet on weekday afternoons in winter. A gravel path, a red gate, an offering box worn smooth at the edges, a great old tree with a rope tied around its middle and paper lightning bolts hanging from the rope, and a small sign in English that Aphrodite read out loud, slowly, and then stood in front of with her arms folded." },
      { s: 'aphrodite', f: 'serious', t: "So this is the competition." },
      { n: "She had asked to come. She'd asked the way she asked for everything, by announcing it, but there had been something careful underneath, like a cat approaching another cat's yard." },
      { s: 'aphrodite', f: 'neutral', t: "Who lives here? What do they do? Are they beautiful? Be honest, little sun. I can take it." },
      { choose: [
        { t: "A kami. A local god. Nobody's completely sure which.", notes: 3, then: [
          { s: 'aphrodite', f: 'surprised', t: "Nobody's SURE? They built a whole house for someone and they don't know who?" },
          { s: 'aphrodite', f: 'neutral', t: "...That's very romantic, actually. That's love without the details." }
        ] },
        { t: "Kiriko says it's a fox god. It likes fried tofu.", notes: 2, then: [
          { s: 'aphrodite', f: 'neutral', t: "Fried tofu. That's all it asks? How undemanding. I'm almost jealous. Nobody has ever satisfied me with tofu." }
        ] }
      ] },
      { n: "She did everything wrong, beautifully. She clapped before she bowed and bowed before she rang the bell and rang the bell so hard it clanged like a ship in fog, and an old woman sweeping the steps stopped sweeping to watch. She threw her five-yen coin into the box like a dart. Then she stood at the front of the shrine with her hands together and her eyes closed for so long that Solar began to wonder whether a goddess could fall asleep praying to another god." },
      { s: 'aphrodite', f: 'neutral', t: "I told them I was here. It's polite. Professional courtesy." },
      { s: 'aphrodite', f: 'happy', t: "And I told them to look after you while I'm on their ground. I was very clear. I said please. I never say please." },
      { n: "The wooden prayer plaques hung on a rack beside the main hall, a whole wall of them clacking softly in the wind, and she found them the way she found anything to do with love, instantly, like a dowsing rod. She read them all. Out loud. In a whisper Solar suspected she believed was discreet." },
      { s: 'aphrodite', f: 'happy', t: "Pass the entrance exam. Pass the entrance exam. Let Mother's surgery go well. Pass the... oh. Oh, this one. Please let Nao-kun notice me before graduation." },
      { s: 'aphrodite', f: 'serious', t: "I could do this in an afternoon. One kiss on Nao-kun's forehead." },
      { choose: [
        { t: "Don't. Let her do it herself. Like Yukari.", notes: 3, then: [
          { s: 'aphrodite', f: 'sad', t: "...Like the little archer." },
          { n: "She looked at the plaque for a long time, at the careful handwriting, at the small heart in the corner that had been rubbed out and drawn again. Then she touched it, very lightly, with one finger, not a kiss, nothing, just a touch, the way you'd touch a sleeping animal." },
          { s: 'aphrodite', f: 'neutral', t: "Fine. Courage, then. Only courage. The rest she does herself." }
        ] },
        { t: "Is that allowed? It's their shrine.", notes: 2, then: [
          { s: 'aphrodite', f: 'serious', t: "Hm. Jurisdiction. You're right. It would be like walking into someone's temple and moving their furniture." },
          { n: "She looked at the plaque with real longing, and left it alone, and Solar was fairly sure it cost her more than the whole fight on the bridge." }
        ] }
      ] },
      { n: "Solar bought them each a fortune from the box by the counter, a hundred yen, the paper rolled tight. Hers said small blessing. Aphrodite unrolled hers and read it and went completely, terribly still." },
      { s: 'aphrodite', f: 'surprised', t: "Great curse." },
      { s: 'aphrodite', f: 'serious', t: "It says great curse. Under love it says do not expect it this year. Under travel it says delays. I am going to burn this building to the ground." },
      { n: "Solar showed her where you tie the bad ones, on the wire rack by the tree, so that the god keeps the bad luck and you don't have to carry it home, and Aphrodite tied hers in a knot so vicious and so elaborate that it looked like a small declaration of war." },
      { s: 'aphrodite', f: 'flustered', t: "Do not expect love this year. Ha. Too late, little shrine. Much too late. It's standing right here holding my bag." },
      { n: "Before they left she bought a plaque of her own, and wrote on it with the felt pen on its string, in that old alphabet with all the little triangles, and hung it on the very front of the rack in the middle, where it would be the first thing anyone saw. Solar couldn't read a word of it. She was fairly sure that was the point. As they walked away the letters seemed to shift a little in the wind, like they were rearranging themselves into something, and Aphrodite took her hand and pulled her down the steps before she could see what." }
    ] },
    { title: 'sea foam', place: 'Port Island · Seaside Park', music: 'tender', scene: [
      { n: "It was January, and the sea off Port Island was the color of a filing cabinet. A tanker sat out in the bay doing nothing. The wind came in flat and steady, smelling of diesel and salt, and the strip of beach below the promenade, the one nobody used after September, had frozen into gray ridges, with a crust of old foam along the line where the tide had given up." },
      { n: "Aphrodite stood at the edge of it in her borrowed coat and looked at the foam for a long time." },
      { s: 'aphrodite', f: 'neutral', t: "That's where I'm from. Did you know? Not this sea. A warmer one. But that. The foam." },
      { s: 'aphrodite', f: 'neutral', t: "I wasn't born, exactly. I just stood up out of it one morning, fully grown, already beautiful, already everything. There was a scallop shell. It's a long story and most of it is unsuitable." },
      { choose: [
        { t: "So nobody ever held you. When you were small.", notes: 3, then: [
          { s: 'aphrodite', f: 'surprised', t: "..." },
          { s: 'aphrodite', f: 'sad', t: "...I was never small. I came out finished. Everyone who ever touched me was already in love with me. Nobody ever held me just because I was theirs." },
          { n: "She said it the way she'd said it by the river in September, plainly, without any glow, and then looked shocked, as though she'd only now heard it out loud." }
        ] },
        { t: "Do you miss it? The warm sea?", notes: 2, then: [
          { s: 'aphrodite', f: 'neutral', t: "I don't miss things. I'm a goddess." },
          { s: 'aphrodite', f: 'sad', t: "...I miss the color. The blue of a vein in a wrist. You'd like it. You'd still be cold, though. You're always cold." }
        ] }
      ] },
      { n: "She was always telling Solar she was cold. She was usually right. Solar's hands were in her pockets and her nose had gone numb and the wind was finding the gap between her scarf and her collar, and the goddess, who did not feel weather, who had never once been rained on, noticed this the way she noticed everything about her, all at once." },
      { n: "She unwound her own scarf, pink, a gift from a shopkeeper who hadn't known why, and wound it twice around Solar's neck on top of Solar's own, and tucked the ends in, and then left her hands there on either side of Solar's throat. Warm. Very warm. Warmer than a person." },
      { s: 'aphrodite', f: 'sad', t: "Little sun. Since the link, I can feel things in you. Not thoughts. Weather. There's a cold place in you. Very old. There's a bridge in it." },
      { n: "Solar didn't move. The tanker didn't move. Somewhere behind them on the promenade a man was walking a dog and talking to it in a high, happy voice, and Solar listened to him very carefully, for a long time, because it was easier than the other thing." },
      { choose: [
        { t: "My parents. I was little. I don't really talk about it.", notes: 3, then: [
          { s: 'aphrodite', f: 'neutral', t: "Then don't. I don't need you to talk. I only wanted you to know that I know." },
          { s: 'aphrodite', f: 'sad', t: "Everyone I touch is warm. You were the first one who was cold. I didn't know what to do with that. I still don't. I just keep putting scarves on it." }
        ] },
        { t: "(Lean into her hands.)", notes: 3, then: [
          { n: "Solar leaned forward, only slightly, until her forehead rested against the goddess's collarbone, and the warm hands slid around to the back of her neck and stayed there. Aphrodite went completely still, the way you go still when a bird lands on you, and didn't say anything, and didn't glow, and held her." }
        ] }
      ] },
      { n: "When she finally let go, there was a shell on the sand at their feet that hadn't been there before. A scallop, small and white and ribbed, completely out of place on a gray Japanese beach in January, with a little sea foam drying in its curve." },
      { s: 'aphrodite', f: 'flustered', t: "Don't look at me like that. I didn't do it on purpose. It happens when I get emotional. It's mortifying. Pick it up." },
      { n: "Solar picked it up. It was warm, too." },
      { s: 'aphrodite', f: 'neutral', t: "There. Now you have one. Something to stand up out of. For whenever you need to start again." }
    ] }
  ],
  // P3's Christmas Eve: on 12/24 evening, if Solar is romancing several people (rank 9+), she picks one; this plays.
  christmas: { place: 'Port Island Station · Central Concourse', scene: [
    { n: "Christmas Eve in Japan, Aphrodite had discovered, was not a family holiday. It wasn't a religious one either, not in any way she recognized. It was a night for lovers. The whole country had simply decided, at some point, without consulting her, that one night a year belonged to couples, and then strung up the lights and booked the restaurants and lit the station like a jewelry box." },
    { s: 'aphrodite', f: 'happy', t: "Little sun. They made me a holiday. An entire nation. It's the temple I asked for. It only took them five months, and it's made of fried chicken." },
    { n: "She'd been standing in the concourse since four, apparently, watching. Couples came through the gates in pairs, holding hands in each other's coat pockets, carrying cake boxes, and every one of them that passed her slowed a little without knowing why, leaned a little closer to whoever they were with, and kept walking. She didn't seem to be doing it on purpose. It just came off her, on this night, like heat off a stove." },
    { choose: [
      { t: "You're making them all fall in love again.", notes: 2, then: [
        { s: 'aphrodite', f: 'neutral', t: "Not again. Still. I'm reminding them they already are. It's different. I learned that from tea." }
      ] },
      { t: "Are you working tonight?", notes: 3, then: [
        { s: 'aphrodite', f: 'surprised', t: "...Working?" },
        { s: 'aphrodite', f: 'flustered', t: "Oh. Oh, I suppose I am. I didn't mean to. It's a reflex. It's my night." },
        { n: "She took a breath and, visibly, the way you'd turn down a stove, stopped. The couple nearest the gate, who had been leaning toward each other, straightened up and looked puzzled, and then laughed and leaned in again anyway, on their own." },
        { s: 'aphrodite', f: 'happy', t: "Look at that. They didn't need me. Tonight I'm off duty. Tonight I'm only yours." }
      ] }
    ] },
    { place: 'Iwatodai · Riverside', time: 'Night', music: 'tender' },
    { n: "It had started to snow. They walked the river path, the same route as September, the one the silver-haired boy ran in the mornings, and it was dark and empty and the snow came down slowly through the lamps and landed on the black water and vanished, and Aphrodite kept stopping to look up into it, with snow catching in her hair and on her eyelashes and an expression of scandalized delight." },
    { s: 'aphrodite', f: 'surprised', t: "It's landing on me. It's landing directly on me. Four thousand years and nobody has ever dared." },
    { choose: [
      { t: "(Give her the umbrella. Pink. You've been carrying it all night.)", notes: 3, then: [
        { n: "It was pink and sheer with a ruffle around the edge, the most ridiculous umbrella in the shop on the second floor of Paulownia, and Solar had been carrying it furled all evening like a sword, and now she opened it and held it out." },
        { s: 'aphrodite', f: 'surprised', t: "..." },
        { s: 'aphrodite', f: 'flustered', t: "A canopy. My own canopy. You remembered. The rain, in the summer." },
        { n: "She took it in both hands and held it over herself, and then, after a moment, tilted it so it covered them both, which meant holding it very low, and letting her own shoulder fill up with snow, which she didn't seem to notice at all." }
      ] },
      { t: "(Give her a dove. A small glass one, for a tree.)", notes: 3, then: [
        { s: 'aphrodite', f: 'happy', t: "Oh. Oh, it's white. Properly white. Not gray. Not lumpy. Sea foam white." },
        { n: "She held it up to a streetlamp so the light came through it and threw a small white shape across her face, and she looked at it the way she had once looked at a can of peach juice." },
        { s: 'aphrodite', f: 'neutral', t: "I'll put it somewhere the pigeons can see it. As an example." }
      ] }
    ] },
    { ifRank: { aphrodite: 10 }, then: [
      { n: "A few days ago she had given Solar a golden apple with writing on it that rearranged itself, the most famous piece of fruit in history. That had been the grand gesture." },
      { s: 'aphrodite', f: 'flustered', t: "This is the small one. Don't laugh." }
    ], else: [
      { s: 'aphrodite', f: 'flustered', t: "Now mine. Don't laugh." }
    ] },
    { n: "It was a scarf. Pink, obviously. Hand-knitted, badly, in a stitch that changed its mind about halfway along, with one end noticeably wider than the other and a small hole near the middle that had been sewn shut with a different pink. It was the ugliest thing Solar had ever seen a goddess hold." },
    { s: 'aphrodite', f: 'neutral', t: "The little archer taught me. Three weeks. I'm not good at things I can't simply be. It turns out you have to do them. Over and over. With your hands. It's very humbling. I hated it." },
    { s: 'aphrodite', f: 'sad', t: "I made it anyway. I wanted to give you something I made, and not something I am." },
    { choose: [
      { t: "It's perfect.", notes: 2, then: [
        { s: 'aphrodite', f: 'serious', t: "It is absolutely not perfect, little sun. There's a hole. I'm aware of the hole." },
        { s: 'aphrodite', f: 'happy', t: "...But say it again." }
      ] },
      { t: "(Put it on. Right now. Over the scarf you're already wearing.)", notes: 3, then: [
        { n: "Solar wound it around her neck on top of everything else she had on, so that she was now mostly scarf, and the goddess watched her do it and laughed, the real laugh, not the radiant one, with a small honk at the end that she would have been mortified to know about." }
      ] }
    ] },
    { n: "They stood on the riverbank with the snow coming down around them. Across the water the lights of Port Island were soft and gold, and a train went over the bridge, and the goddess of love, on her own night, in her own temple of fried chicken and illuminated stations, did not make a single stranger fall in love with anybody. She only kissed Solar, once, slowly, with snow on her lips and her warm hands on Solar's cold face, like it was the only spell she'd ever learned." },
    { s: 'aphrodite', f: 'happy', t: "Merry Christmas, little sun. Happy lovers' night. I'm told it's a holiday." }
  ] },
  romance: true,
  cast: { yukari: 'Yukari', ares: 'Ares' },
  // Olympus: Aphrodite's group chat with Yukari, from rank 5 (after Ares has come and gone at rank 4).
  threads: {
    elizabeth: { name: 'Elizabeth', members: ['elizabeth'] },
    olympus: { name: 'OLYMPUS 💕', members: ['aphrodite', 'yukari'] }
  },
  texts: [
    { id: 'eliz-7-7', thread: 'elizabeth', rank: 0, before: 99, days: 0, date: '7/7', slot: 1, msgs: [
      { from: 'elizabeth', t: 'Good evening, Solar. Tonight the moon has brought several guests at once.' },
      { from: 'elizabeth', t: 'One of them is a goddess. She is already complaining about the lack of temples.' },
      { from: 'elizabeth', t: 'Another prefers the night, and the hotel curtains closed. I would bring a scarf.' }
    ] },
    { id: 'aph-1a', rank: 1, days: 1, slot: 1, msgs: [
      { from: 'aphrodite', t: 'Little sun. Your mortal device is very small and my nails are very long.' },
      { from: 'aphrodite', t: 'Nevertheless I am using it. You may feel honored.' }
    ], reply: [
      { t: 'Deeply honored, goddess.', notes: 3, then: [{ from: 'aphrodite', t: 'Good. Correct. I like you.' }] },
      { t: 'Try the voice-to-text button.', notes: 2, then: [{ from: 'aphrodite', t: 'IT HEARS ME. IT HEARS EVERYTHING. I AM IN LOVE WITH IT' }] }
    ] },
    { id: 'aph-3a', rank: 3, days: 1, slot: 1, msgs: [
      { from: 'aphrodite', t: 'Your archer friend is immune to me. IMMUNE.' },
      { from: 'aphrodite', t: 'This has never happened in four thousand years.' }
    ], reply: [
      { t: "Yukari's like that.", notes: 2, then: [{ from: 'aphrodite', t: 'I respect her enormously and I am also furious.' }] },
      { t: 'Maybe love needs a little more than a kiss.', notes: 3, then: [{ from: 'aphrodite', t: '...Hm. Blasphemy. Possibly correct. Do not tell anyone.' }] }
    ] },
    { id: 'aph-5a', rank: 5, days: 1, slot: 1, msgs: [
      { from: 'aphrodite', t: 'I am still thinking about it. Twenty-some stars, little sun.' },
      { from: 'aphrodite', t: 'Mid AND solo. Do you know how rare that is? Most of my worshippers are cowards who sit in the back.' },
      { from: 'aphrodite', t: 'And you almost never died. You were magnificent. In some other world, you were magnificent.' }
    ], reply: [
      { t: 'I had a very good goddess.', notes: 3, then: [{ from: 'aphrodite', t: 'Yes. You did. Obviously.' }, { from: 'aphrodite', t: 'Thank you, little sun. 💕' }] },
      { t: 'Five to seven KDA, I think.', notes: 3, then: [{ from: 'aphrodite', t: 'OBSCENE. I am so proud I could start a war.' }] }
    ] },
    { id: 'olympus-1', thread: 'olympus', rank: 5, before: 8, days: 3, slot: 1, msgs: [
      { sys: 'Aphrodite created the group "OLYMPUS 💕"' },
      { from: 'aphrodite', t: 'Welcome to Olympus. It is smaller than I remember.' },
      { from: 'yukari', t: 'why am i here' },
      { from: 'aphrodite', t: 'Because you are the only mortal who has ever told me no, little archer. I require your expertise.' },
      { from: 'yukari', t: "ok that's kind of flattering" },
      { from: 'yukari', t: 'expertise in what' },
      { from: 'aphrodite', t: 'Saying no to a god of war.' },
      { ask: [
        { t: 'Is this about Ares?', notes: 3, then: [
          { from: 'aphrodite', t: 'It is ALWAYS about Ares. It has been about Ares since the Bronze Age.' },
          { from: 'yukari', t: 'wait the giant in armor?? junpei said there was a giant in armor behind the station' },
          { from: 'aphrodite', t: 'Yes. Large. Chains. Emotionally, a catapult.' }
        ] },
        { t: 'Hi Yukari.', notes: 1, then: [
          { from: 'yukari', t: 'hi solar. do you know what this is' },
          { from: 'aphrodite', t: 'It is about Ares. Keep up, both of you.' }
        ] },
        { t: '💕', notes: 2, then: [
          { from: 'aphrodite', t: 'Thank you, little sun. The correct response. Now. Ares.' }
        ] }
      ] },
      { from: 'aphrodite', t: 'I have been composing what I will say to him if he ever comes back.' },
      { from: 'aphrodite', t: 'Draft one. "Darling, I have outgrown you, the way a girl outgrows a pony."' },
      { from: 'yukari', t: 'oh my god' },
      { from: 'aphrodite', t: 'Draft two. "You are a sword with a mustache and I deserve a poet."' },
      { from: 'yukari', t: 'does he have a mustache' },
      { from: 'aphrodite', t: 'Spiritually.' },
      { from: 'aphrodite', t: 'Little sun. Which draft.' },
      { ask: [
        { t: 'Neither. You already said no. I was there.', notes: 3, then: [
          { from: 'aphrodite', t: '...' },
          { from: 'aphrodite', t: "I did, didn't I." },
          { from: 'yukari', t: 'wait you ALREADY dumped him??' },
          { from: 'aphrodite', t: 'In an alley. Behind the station. It was very dignified. I sat on a crate.' },
          { from: 'yukari', t: 'iconic honestly' }
        ] },
        { t: 'Draft one. The pony is devastating.', notes: 2, then: [
          { from: 'aphrodite', t: 'It IS devastating. I wept while writing it. Beautifully.' }
        ] },
        { t: 'Draft two. Poets are better.', notes: 2, then: [
          { from: 'aphrodite', t: 'Poets ARE better. They write things down. Ares signs his name with an axe.' }
        ] }
      ] },
      { sys: 'Aphrodite added "Ares ⚔️" to the group' },
      { sys: 'Ares ⚔️ could not be added. This number is not in service.' },
      { from: 'aphrodite', t: '...Ah.' },
      { from: 'aphrodite', t: 'Of course. He is a world away. For a moment I forgot.' },
      { from: 'yukari', t: 'are you ok?' },
      { from: 'aphrodite', t: 'I am a goddess. I am always ok. I am simply, at this moment, also lying face down on a bench at the station.' },
      { ask: [
        { t: "I'm coming to the station.", notes: 3, then: [
          { from: 'aphrodite', t: 'You do not have to.' },
          { from: 'aphrodite', t: 'Bring peach juice.' },
          { from: 'yukari', t: "i'm coming too. this is the most interesting thing that's happened all week" }
        ] },
        { t: 'You already did the hard part.', notes: 3, then: [
          { from: 'aphrodite', t: 'The hard part was supposed to be beautiful. It was mostly a crate.' },
          { from: 'yukari', t: 'the crate was the beautiful part' }
        ] },
        { t: 'Yukari, say something encouraging.', notes: 1, then: [
          { from: 'yukari', t: 'uhh' },
          { from: 'yukari', t: "you look really pretty when you're sad?" },
          { from: 'aphrodite', t: 'I KNOW. Thank you, little archer.' }
        ] }
      ] },
      { from: 'aphrodite', t: 'This was a very good meeting of Olympus. Far better than the real ones. Nobody threw a thunderbolt.' },
      { from: 'yukari', t: 'is that normal for you guys' },
      { from: 'aphrodite', t: 'Tuesdays.' }
    ] },
    { id: 'aph-6a', rank: 6, days: 1, slot: 1, msgs: [
      { from: 'aphrodite', t: 'I said too much today.' },
      { from: 'aphrodite', t: 'Goddesses do not say too much. We say exactly enough, beautifully.' }
    ], reply: [
      { t: 'You said exactly enough.', notes: 3, then: [{ from: 'aphrodite', t: '...Beautifully?' }, { from: 'aphrodite', t: 'Say beautifully.' }] },
      { t: "It's okay to be lonely.", notes: 3, then: [{ from: 'aphrodite', t: 'Not for me. But perhaps, with you, a little.' }] }
    ] },
    { id: 'aph-8a', rank: 8, days: 1, slot: 1, msgs: [
      { from: 'aphrodite', t: 'I bound my soul to yours last night. Do you understand what that means?' },
      { from: 'aphrodite', t: 'It means you are not allowed to die. Ever. I forbid it.' }
    ], reply: [
      { t: 'Yes, goddess.', notes: 3, then: [{ from: 'aphrodite', t: 'Good. Obedient. Lovely.' }] },
      { t: "Same goes for you.", notes: 3, then: [{ from: 'aphrodite', t: '...I am immortal, little sun.' }, { from: 'aphrodite', t: 'But I will promise anyway.' }] }
    ] },
    { id: 'aph-9r', rank: 9, route: 'romance', days: 1, slot: 1, msgs: [
      { from: 'aphrodite', t: 'I have been loved by gods and kings and heroes and an embarrassing number of shepherds.' },
      { from: 'aphrodite', t: 'None of them saw me. You see me. It is extremely inconvenient and I adore you for it.' }
    ], reply: [
      { t: 'I adore you too.', notes: 3, then: [{ from: 'aphrodite', t: '💕💕💕' }, { from: 'aphrodite', t: 'Forgive the emojis. I am overcome.' }] },
      { t: 'Shepherds?', notes: 2, then: [{ from: 'aphrodite', t: 'It was a different time. Do not ask about the shepherds.' }] }
    ] },
    { id: 'aph-9f', rank: 9, route: 'friend', days: 1, slot: 1, msgs: [
      { from: 'aphrodite', t: 'I have decided. You are my favorite mortal. In all of history.' },
      { from: 'aphrodite', t: 'Achilles is weeping somewhere. Let him.' }
    ], reply: [
      { t: 'I accept this honor.', notes: 3, then: [{ from: 'aphrodite', t: 'Of course you do. You have excellent taste.' }] },
      { t: 'Poor Achilles.', notes: 2, then: [{ from: 'aphrodite', t: 'He had a whole war. He will be fine.' }] }
    ] }
  ],
  ranks: [
    { after: '7/11', title: '1: an offering', place: 'Port Island Station · Central Concourse', scene: [
      { n: "There was a goddess at Port Island Station, and she was furious about it." },
      { n: "She was standing in the middle of the central concourse on a Saturday afternoon, in a flowing pink and gold gown that had no business being anywhere near public transport, her golden hair coming down her back in waves, glowing, actually glowing, very faintly, like someone had turned her brightness up a few notches past everyone else's. People were walking around her. Some were staring. Most were pretending not to, the way people did with everything strange in Iwatodai." },
      { s: 'aphrodite', f: 'serious', t: "You. Mortal. Yes, you, with the headphones." },
      { n: "Solar looked behind her. There was nobody behind her." },
      { s: 'aphrodite', f: 'serious', t: "Where are the temples? I have walked for an entire day and I have not seen a single altar. Not one statue. Nobody has so much as left me a pigeon." },
      { choose: [
        { t: "Who are you supposed to be?", notes: 1, then: [{ s: 'aphrodite', f: 'serious', t: "Supposed to BE? I am Aphrodite. Goddess of love and beauty. You have heard of me. Everyone has heard of me. Don't be rude." }] },
        { t: "We don't really do temples here.", notes: 2, then: [{ s: 'aphrodite', f: 'surprised', t: "...No temples. No temples at all? How do you people love anything?" }] },
        { t: "(Bow, slightly.)", notes: 3, then: [
          { n: "The goddess stared at her. Then her whole face lit up, brighter, actually brighter, like a lamp on a dimmer." },
          { s: 'aphrodite', f: 'happy', t: "Oh! Oh, finally. Someone with manners. I could kiss you. I won't, it would ruin you for everyone else. But I could." }
        ] }
      ] },
      { s: 'aphrodite', f: 'neutral', t: "I require an offering. It's customary. It's been a very long day and nobody has given me anything." },
      { n: "Solar had four hundred yen and a vending machine six feet away. She bought a can of peach juice, the pink one, because it matched the dress, and held it out." },
      { n: "Aphrodite looked at the can like Solar had handed her a pearl. She took it in both hands. She opened it, eventually, after Solar showed her how, and took a sip, and closed her eyes." },
      { s: 'aphrodite', f: 'happy', t: "...Oh. That's lovely. That's genuinely lovely. Nobody has ever offered me anything pink." },
      { choose: [
        { t: "It matched your dress.", notes: 3, then: [{ s: 'aphrodite', f: 'happy', t: "It DID. You noticed. Oh, I like you. I'm keeping you. What do they call you, little mortal?" }] },
        { t: "You're welcome, goddess.", notes: 2, then: [{ s: 'aphrodite', f: 'happy', t: "Goddess. Yes. Say it again, but louder, so the commuters hear." }] }
      ] },
      { n: "She called Solar 'little sun' before the afternoon was out. She explained, airily, that it was because of the name, and because Solar was small, and because she gave off a very particular kind of warmth that Aphrodite, as an expert in warmth, felt qualified to comment on." },
      { n: "When Solar left, the goddess was sitting on a bench by the ticket gates with her peach juice, receiving the stares of the evening commuters like tribute." }
    ] },

    { after: '7/25', title: '2: worship', place: 'Paulownia Mall', scene: [
      { n: "Aphrodite had discovered shopping, and shopping had discovered Aphrodite, and Paulownia Mall would never recover." },
      { n: "She swept through it on a Saturday like it was a temple built in her honor, which, she informed Solar, it essentially was. People brought offerings here. They worshipped beauty. They spent enormous amounts of money on things that made them feel lovely. It was, she said, extremely close to correct." },
      { s: 'aphrodite', f: 'serious', t: "Little sun. This mirror is a terrible liar. I look far better than this." },
      { choose: [
        { t: "The mirror's fine. You're just very bright.", notes: 3, then: [{ s: 'aphrodite', f: 'happy', t: "...That's true. I'm overexposing it. You're very clever." }] },
        { t: "You look perfect.", notes: 2, then: [{ s: 'aphrodite', f: 'happy', t: "I know. I wanted to hear you say it." }] }
      ] },
      { n: "She tried on everything. She bought nothing, because she had no money, because she had never once in four thousand years needed money. Shopkeepers kept giving her things anyway. Scarves. A pair of sunglasses. A free crepe from the stand Ann loved. Nobody seemed entirely sure why they'd done it." },
      { s: 'aphrodite', f: 'neutral', t: "This is what it used to be like, you know. People giving me things. Loving me without knowing why." },
      { s: 'aphrodite', f: 'sad', t: "Back home there's a war that never ends. Gods fighting gods in a field forever. It's all very dramatic and very loud and nobody brings me peach juice." },
      { n: "She said it lightly. She was holding the free scarf in both hands, very tightly." },
      { choose: [
        { t: "You can stay as long as you want.", notes: 3, then: [{ s: 'aphrodite', f: 'sad', t: "Oh, little sun. I don't think it's up to me. But thank you for saying it." }] },
        { t: "Tell me about the war.", notes: 2, then: [
          { s: 'aphrodite', f: 'serious', t: "Lanes. Towers. Lots of very angry gods. I'm quite good at it, actually. I'm better than people expect. They see the pink and they underestimate me." },
          { n: "She smiled a smile with teeth in it, and Solar decided never to underestimate her." }
        ] }
      ] }
    ] },

    { after: '8/8', title: '3: matchmaking', music: 'sun', place: 'Paulownia Mall · Fountain', scene: [
      { n: "Aphrodite had decided that the girls of Iwatodai Dorm were tragically under-loved, and that this was a problem she was personally qualified to fix." },
      { n: "Her first target was Yukari." },
      { register: 'yukari' },
      { s: 'yukari', f: 'surprised', t: "...Solar, who is this, and why is she sparkling at me?" },
      { s: 'aphrodite', f: 'happy', t: "Little archer. You have a heart like a locked box. I can open it. One kiss on the forehead and you'll fall for the first worthy person you see." },
      { s: 'yukari', f: 'serious', t: "Absolutely not." },
      { s: 'aphrodite', f: 'surprised', t: "...I beg your pardon?" },
      { s: 'yukari', f: 'neutral', t: "I'll fall in love when I want to, with who I want to. Not because some goddess kissed my forehead in a mall." },
      { n: "There was a long, crackling silence. Aphrodite's glow flickered, like a light about to go out. Solar honestly thought for a second that Yukari might be smote." },
      { choose: [
        { t: "Yukari's right, you know.", notes: 3, then: [
          { s: 'aphrodite', f: 'sad', t: '...' },
          { s: 'aphrodite', f: 'serious', t: "...She is. Isn't she. How irritating." }
        ] },
        { t: "Maybe try someone else?", notes: 1, then: [{ s: 'aphrodite', f: 'serious', t: "No. No, I don't want someone else. I want to understand why THIS one said no." }] }
      ] },
      { s: 'aphrodite', f: 'surprised', t: "Four thousand years. Nobody has ever refused me. Not gods. Not kings." },
      { s: 'aphrodite', f: 'happy', t: "Little archer. I think I respect you more than anyone I've met in a century." },
      { s: 'yukari', f: 'blushing', t: "...Okay, that's weird, but thank you?" },
      { n: "Yukari left. Aphrodite sat on the edge of the fountain and watched the water for a long time, quiet for the first time since Solar had met her." },
      { s: 'aphrodite', f: 'sad', t: "If love isn't something I can give people, little sun, then what is it?" },
      { n: "It was, Solar thought, a very good question. She didn't have an answer. She sat down next to the goddess and they looked at the fountain together, two people who had both, for very different reasons, never been very sure." }
    ] },

    { after: '8/22', title: '4: ares', place: 'Port Island Station · Back Alley', scene: [
      { n: "He came through on a hot night in late August. Solar heard about it from three different people before she saw him: a giant in black armor, wrapped in chains, eyes like coals, stalking through the back streets of Port Island asking every person he passed where the goddess of love was." },
      { n: "He found them behind the station. Aphrodite went very still when she saw him, the way the air goes still before a storm." },
      { register: 'ares' },
      { s: 'ares', f: 'neutral', t: "There you are. You left the battlefield." },
      { s: 'aphrodite', f: 'serious', t: "I didn't leave anything, darling. I was taken. There's a difference." },
      { s: 'ares', f: 'sad', t: "Come back. The war needs you. I need you." },
      { n: "He said I need you like a command, the way he'd say charge or hold the line. Aphrodite looked at him with an expression Solar had never seen on her face before. Tired. Old. Very, very old." },
      { s: 'aphrodite', f: 'sad', t: "You need me the way you need a sword. Something lovely to hold while you break things." },
      { choose: [
        { t: "(Stand beside Aphrodite.)", notes: 3, then: [
          { n: "Solar stepped up next to her. She didn't say anything. She didn't need to. Ares looked down at her, all eight feet of armor and fury, and Solar looked back, and something passed over his face that might have been surprise." },
          { s: 'ares', f: 'surprised', t: "...A mortal. Standing next to you." },
          { s: 'aphrodite', f: 'happy', t: "Yes. She does that. Isn't it extraordinary?" }
        ] },
        { t: "She doesn't want to go.", notes: 3, then: [
          { s: 'ares', f: 'serious', t: "She doesn't get to decide." },
          { s: 'aphrodite', f: 'serious', t: "...Actually, darling, I think I do. For once." }
        ] }
      ] },
      { n: "He went. Not because Solar asked him to, and not because he was defeated, but because Aphrodite told him to, quietly, with a goddess's full weight behind the words. He faded at the end of the alley like the others always did. He didn't look back." },
      { n: "Aphrodite stood there for a long moment. Then she sat down on an overturned crate in her impossible gown and put her face in her hands." },
      { s: 'aphrodite', f: 'sad', t: "Thousands of years. And I've never once told him no." },
      { n: "Solar sat down on the crate next to her. Neither of them said anything. Somewhere a train went over, rattling the windows, and the goddess of love leaned her head on a mortal's shoulder and, for a while, didn't sparkle at all." }
    ] },

    { after: '9/5', title: '5: soul partner', place: 'Port Island Station · The Dark Hour', scene: [
      { n: "The green hour, on the station roof. A shadow had come out of the tracks, a long many-legged thing that clicked and hissed, and Aphrodite had been there, because Aphrodite was always somewhere she wasn't supposed to be, and so had Solar." },
      { s: 'aphrodite', f: 'happy', t: "Little sun. Hold still. I'm going to do something intimate." },
      { n: "She touched two fingers to Solar's chest, right over her heart, and a thread of pink light ran between them, warm and humming, and Solar felt something she'd never felt before. Not love, exactly. Something like being seen all the way through, and liked anyway." },
      { s: 'aphrodite', f: 'serious', t: "Soul Partner. You're linked to me now. When I heal, you heal. When I fight, you're stronger." },
      { n: "They fought the shadow together. Aphrodite was devastating. Doves of light that screamed down out of the green sky. A kiss that left the thing reeling. A shove of pure force, Back off, darling, that sent it flying into the tracks. And Solar, linked, felt every move a half-second before it happened." },
      { n: "When it was over, Aphrodite stood in the green light breathing hard, glowing brighter than Solar had ever seen her, and stared at Solar with an expression of complete astonishment." },
      { s: 'aphrodite', f: 'surprised', t: "...Oh. Oh, I can feel it now. Through the link." },
      { s: 'aphrodite', f: 'flustered', t: "In another world, you're one of mine. A worshipper. A devoted one. More than twenty stars of devotion, little sun. That's not worship. That's practically marriage." },
      { s: 'aphrodite', f: 'happy', t: "Mid lane. And solo. You played me in the hardest places, against the angriest gods, and you almost never died. Five kills for every death. Seven, some days. That's obscene. That's magnificent." },
      { choose: [
        { t: "I had a very good goddess.", notes: 3, then: [
          { s: 'aphrodite', f: 'flustered', t: '...' },
          { s: 'aphrodite', f: 'happy', t: "Oh, you flatterer. You perfect, devoted, unkillable little flatterer." },
          { n: "She laughed, delighted and glowing, and the doves of light wheeled overhead, and the green hour faded around them like the end of a song." }
        ] },
        { t: "That's why the link felt so easy.", notes: 3, then: [{ s: 'aphrodite', f: 'happy', t: "Of course it did. You've been bound to me for years. You just didn't remember." }] }
      ] }
    ] },

    { after: '9/26', title: '6: loved by everyone', music: 'tender', place: 'Iwatodai · Riverside', scene: [
      { n: "September, the evening going purple over the river. Aphrodite had wanted to see where Solar ran in the mornings, with the silver-haired boy, and so they'd walked the whole route slowly, the goddess in a borrowed coat over her gown, stopping to look at everything." },
      { s: 'aphrodite', f: 'neutral', t: "Little sun. Can I tell you something that a goddess shouldn't say?" },
      { s: 'aphrodite', f: 'neutral', t: "Everyone has always loved me. Gods. Mortals. Everyone. They can't help it. It's what I am." },
      { s: 'aphrodite', f: 'sad', t: "And I've never known if any of them actually liked me. Me. Not the glow. Not the power. Just me, sitting on a bench, being petty about a mirror." },
      { n: "She said it plainly, without any glow at all. She just looked like a tired woman by a river, and that was somehow the most beautiful Solar had ever seen her." },
      { choose: [
        { t: "I like you. The petty one on the bench.", notes: 3, then: [
          { s: 'aphrodite', f: 'surprised', t: '...You do?' },
          { s: 'aphrodite', f: 'flustered', t: "The petty one. The one who complains. Oh, that's... that's the nicest thing anyone's said to me in four thousand years." }
        ] },
        { t: "That sounds lonely.", notes: 3, then: [{ s: 'aphrodite', f: 'sad', t: "It's the loneliest thing in the world, little sun. Being loved by everyone and known by no one." }] }
      ] },
      { n: "They walked the rest of the way to the bridge without talking. The goddess held Solar's hand at some point. Solar didn't notice exactly when. It just felt like it had always been there." }
    ] },

    { after: '10/17', title: '7: watching', place: 'Iwatodai Dorm · Lounge', scene: [
      { n: "October. The dorm was grieving. Shinjiro was in Tatsumi Memorial, not waking. Everybody was moving carefully, the way people do in a house where something has broken, talking quietly, holding doors for each other." },
      { n: "Aphrodite had come to visit, because Solar had stopped coming to the station, and she sat on the arm of the lounge couch in her coat and watched everyone with an expression Solar couldn't read." },
      { n: "Akihiko came downstairs at nine and sat in the armchair and stared at nothing. Yukari brought him tea without asking. Junpei sat next to him and talked about baseball, for an hour, badly, and Akihiko didn't say anything, and didn't leave either. Mitsuru, on the stairs, watched them all with her arms crossed so tight her knuckles were white." },
      { s: 'aphrodite', f: 'neutral', t: "Little sun. What is this? What are they doing?" },
      { choose: [
        { t: "Taking care of each other.", notes: 3, then: [{ s: 'aphrodite', f: 'surprised', t: "Nobody's kissing anyone. Nobody's declaring anything. And it's... it's so loud. I can feel it from here." }] },
        { t: "This is what love looks like here.", notes: 3, then: [{ s: 'aphrodite', f: 'surprised', t: "...Oh." }] }
      ] },
      { s: 'aphrodite', f: 'neutral', t: "I thought love was a spark. A kiss. A golden apple and a war." },
      { s: 'aphrodite', f: 'sad', t: "This is just... tea. And bad baseball talk. And sitting in the same room when it hurts." },
      { s: 'aphrodite', f: 'sad', t: "Four thousand years, and I didn't know." },
      { n: "She went quiet. Then she got up, very carefully, and went to the kitchen, and came back with a cup of tea she'd made badly, too much sugar, and set it in front of Mitsuru on the stairs without a word, and sat down next to her." },
      { n: "Mitsuru looked at it. Then at the goddess. Then, after a long moment, she picked it up and drank it." }
    ] },

    { after: '11/7', title: '8: undying love', place: 'Moonlight Bridge · The Dark Hour', scene: [
      { n: "November, the green hour, and it was bad. Something enormous on Moonlight Bridge, something that made the cables scream and the air taste like copper, and Solar had been knocked off her feet and was lying on the cold bridge looking up at it coming, and she couldn't get up." },
      { n: "Then there was pink light. Everywhere. A dome of it, warm and humming, over her and over the goddess kneeling beside her with both hands on her chest." },
      { s: 'aphrodite', f: 'serious', t: "Undying Love. Neither of us can die while this lasts. I won't allow it." },
      { s: 'aphrodite', f: 'serious', t: "Get up, little sun. Get up. I'm not losing my favorite mortal to some ugly thing on a bridge." },
      { choose: [
        { t: "(Get up.)", notes: 3, then: [{ n: "Solar got up. Inside the pink light she felt invincible. Not like she couldn't be hurt. Like being hurt didn't matter, because someone had decided she was worth keeping." }] },
        { t: "You're not allowed to die either.", notes: 3, then: [{ s: 'aphrodite', f: 'happy', t: "I'm immortal, darling. But I accept your terms." }] }
      ] },
      { n: "They won. They won together, the goddess and the girl, inside a dome of pink light on a bridge over black water. When the green faded and the dome went with it, Aphrodite sat down on the pavement and laughed and laughed, glowing like a sunrise, with her gown torn and her hair a disaster." },
      { s: 'aphrodite', f: 'happy', t: "I have never once used that for a mortal. Never. Not for a hero. Not for a king." },
      { s: 'aphrodite', f: 'flustered', t: "I used it on you without thinking. My whole soul. Just, reached out and grabbed you." },
      { n: "She stopped laughing. She looked at Solar on the cold bridge with an expression of complete, frightened astonishment." },
      { s: 'aphrodite', f: 'surprised', t: "...Oh. Oh no. Little sun. I think I've done something I've never done before." }
    ] },

    { after: '11/28', title: '9: what am i to you, little sun', place: 'Port Island Station · Central Concourse', scene: [
      { n: "The end of November. The station again, the central concourse, the same spot where she'd first stood demanding a temple. Aphrodite had picked it on purpose. She was dressed in ordinary clothes for the first time, jeans and a pink sweater someone at the mall had given her for free, and she still glowed, faintly, and she still made people stare." },
      { n: "She'd bought two cans of peach juice. She handed one to Solar." },
      { s: 'aphrodite', f: 'flustered', t: "An offering. From me. To you. That's backwards. I don't care." },
      { s: 'aphrodite', f: 'serious', t: "I have loved a thousand people because I couldn't help it. I need to know if this is different. If you're different." },
      { s: 'aphrodite', f: 'sad', t: "What am I to you, little sun?" },
      { route: [
        { t: "I love you. Not the goddess. You.", route: 'romance', notes: 3, then: [
          { s: 'aphrodite', f: 'surprised', t: '...' },
          { n: "For the first time since Solar had met her, she didn't glow. Not at all. Her face went completely unguarded, ordinary, human, a woman in a pink sweater in a train station hearing the one thing she'd waited four thousand years to hear." },
          { s: 'aphrodite', f: 'flustered', t: "...Me. Oh, little sun. Me too. I chose you. I didn't have to. I chose you." },
          { n: "She kissed Solar in the middle of Port Island Station, and the whole concourse, every commuter, every student, every tired salaryman, stopped for one second without knowing why, and felt, very briefly, entirely loved." }
        ] },
        { t: "You're my best friend. The petty one on the bench.", route: 'friend', notes: 3, then: [
          { s: 'aphrodite', f: 'flustered', t: "...Best friend. A goddess with a best friend. How deeply undignified." },
          { s: 'aphrodite', f: 'happy', t: "I love it. I love it so much, little sun. Nobody has ever just been my friend." },
          { n: "She hugged Solar so hard the peach juice spilled, and they both laughed, and the commuters stared, and Aphrodite, for once, didn't notice anybody but the girl in front of her." }
        ] }
      ] }
    ] },

    { after: '12/19', title: '10: to the sun', place: 'Paulownia Mall · Christmas Tree', scene: [
      { n: "December. Paulownia's atrium had a Christmas tree three stories tall, all gold and white and pink lights, and Aphrodite had declared it acceptable as a temple, finally, after five months of complaints." },
      { n: "She was sitting on the rim of the planter at its base, glowing in the reflected light, holding something in both hands." },
      { s: 'aphrodite', f: 'neutral', t: "There's an old story about me. A golden apple. It said: to the fairest. Three goddesses fought over it, and I won it, and it started a war." },
      { n: "She opened her hands. A golden apple. Real gold, warm, glowing faintly pink at the edges. There was writing on it, in old Greek letters that rearranged themselves as Solar looked, until she could read them." },
      { n: "To the sun." },
      { ifRoute: 'friend', then: [
        { s: 'aphrodite', f: 'happy', t: "It's yours. My little sun. Not the fairest. The warmest. That's better. I've decided it's better." },
        { choose: [
          { t: "I'll keep it forever.", notes: 3, then: [{ s: 'aphrodite', f: 'happy', t: "You'd better. It's the only thing I've ever given away that I didn't want back." }] },
          { t: "No wars over this one.", notes: 3, then: [{ s: 'aphrodite', f: 'happy', t: "None. I'll smite anyone who tries. Lovingly." }] }
        ] },
        { n: "They sat under the tree until the mall closed. The goddess talked about home, about the endless battlefield, about how she'd fight better now, knowing what love actually looked like. Tea, she said. Bad baseball. Sitting in the same room when it hurts." }
      ] },
      { ifRoute: 'romance', then: [
        { s: 'aphrodite', f: 'flustered', t: "Not the fairest. The warmest. The only one I ever chose. Gods, I sound like a love song. I invented love songs. I'm allowed." },
        { choose: [
          { t: "I'm yours, goddess.", notes: 3, then: [
            { s: 'aphrodite', f: 'flustered', t: "...And I'm yours. Every world, every war. Little sun." },
            { n: "She kissed her under the three-story tree, and the lights flickered, all of them, all at once, pink, like the whole mall had blushed." }
          ] },
          { t: "(Kiss her.)", notes: 3, then: [
            { s: 'aphrodite', f: 'surprised', t: '...!' },
            { s: 'aphrodite', f: 'flustered', t: "...Undying Love wasn't nearly strong enough a name for it. I'm renaming it after you." }
          ] }
        ] },
        { n: "The tree stayed pink until New Year's. The mall management never figured out why." }
      ] }
    ] }
  ]
});
