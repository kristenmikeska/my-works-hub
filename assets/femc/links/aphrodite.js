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
