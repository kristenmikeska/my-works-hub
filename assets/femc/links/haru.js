/* Haru Okumura · III The Empress. Arrives on the 6/8 full moon. Format notes are at the top of akihiko.js.
   Strangers echo: Haru's arranged engagement, and the Solar in another world who was promised to someone she didn't choose. */
FemcSocial.define({
  id: 'haru', name: 'Haru Okumura', short: 'Haru', arcana: 'Empress', numeral: 'III', from: 'Persona 5',
  arrives: '6/8',
  home: { place: 'Gekkoukan High · Rooftop Garden', slot: 0, days: [1, 2, 4, 5], hint: 'After school on Mondays, Tuesdays, Thursdays and Fridays, on the Gekkoukan roof.' },
  approach: "A girl with soft brown hair is kneeling among the rooftop planters, speaking to a tomato plant very seriously and very kindly.",
  invite: { ask: ["Are you free? I baked far too much! 🌸", "Would you like to help in the garden today?", "I just roasted a new blend. Come taste it?"], ok: "Wonderful! I'll put the kettle on.", no: "Next time, then! 🌸" },
  romance: true,
  cast: { ann: 'Ann', makoto: 'Makoto', shinjiro: 'Shinjiro', akihiko: 'Akihiko' },
  texts: [
    { id: 'haru-1a', rank: 1, days: 1, slot: 1, msgs: [
      { from: 'haru', t: 'Good evening, Solar-chan! This is Haru. 🌱' },
      { from: 'haru', t: 'The tomatoes are doing much better already. I talked to them for an hour. Fufu.' }
    ], reply: [
      { t: 'What did you talk about?', notes: 3, then: [{ from: 'haru', t: 'Mostly encouragement. And a little bit about you.' }] },
      { t: "I'll bring water tomorrow.", notes: 2, then: [{ from: 'haru', t: 'Thank you! They will be so pleased. 🍅' }] }
    ] },
    { id: 'haru-2a', rank: 2, days: 1, slot: 1, msgs: [
      { from: 'haru', t: 'I have completed my market research on Wild-Duck Burger.' },
      { from: 'haru', t: 'Conclusion: I would like to go again. For further research.' }
    ], reply: [
      { t: "Strictly for research.", notes: 3, then: [{ from: 'haru', t: 'Strictly! Fufu. Saturday?' }] },
      { t: 'You just like the fries.', notes: 2, then: [{ from: 'haru', t: '...I will neither confirm nor deny.' }] }
    ] },
    { id: 'haru-4a', rank: 4, days: 1, slot: 1, msgs: [
      { from: 'haru', t: 'Thank you for listening today. About the engagement.' },
      { from: 'haru', t: "I've never said those things out loud to anyone who understood." }
    ], reply: [
      { t: 'You never have to marry someone you didn\'t choose.', notes: 3, then: [{ from: 'haru', t: '...I am going to write that down and keep it in my wallet.' }] },
      { t: "I'm always here, Haru.", notes: 3, then: [{ from: 'haru', t: '🌷' }] }
    ] },
    { id: 'haru-6a', rank: 6, days: 1, slot: 1, msgs: [
      { from: 'haru', t: "I keep thinking about what you said. That it's all right to love him and be angry at him at the same time." },
      { from: 'haru', t: 'I think I needed permission. Isn\'t that silly?' }
    ], reply: [
      { t: "It's not silly. You have it.", notes: 3, then: [{ from: 'haru', t: 'Thank you, Solar-chan. Truly.' }] },
      { t: 'I needed it too, once.', notes: 3, then: [{ from: 'haru', t: 'Then we will give it to each other. As many times as we need.' }] }
    ] },
    { id: 'haru-7a', rank: 7, days: 1, slot: 1, msgs: [
      { from: 'haru', t: 'Was I too much last night? With the axe?' },
      { from: 'haru', t: 'Makoto always says I get a little "enthusiastic."' }
    ], reply: [
      { t: 'You were incredible.', notes: 3, then: [{ from: 'haru', t: 'Oh! Fufu. Thank you. I was rather incredible, wasn\'t I.' }] },
      { t: 'You were terrifying. I loved it.', notes: 3, then: [{ from: 'haru', t: 'Both can be true! 💐' }] }
    ] },
    { id: 'haru-8a', rank: 8, days: 1, slot: 1, msgs: [
      { from: 'haru', t: 'Akihiko-senpai says Shinjiro-senpai\'s nurse let him smell the soup.' },
      { from: 'haru', t: 'She said his heart rate went up a little. I choose to believe he liked it.' }
    ], reply: [
      { t: 'He did. I know he did.', notes: 3, then: [{ from: 'haru', t: 'Then I will make it every week until he can taste it.' }] },
      { t: 'You\'re so kind, Haru.', notes: 2, then: [{ from: 'haru', t: 'I learned it from people like you.' }] }
    ] },
    { id: 'haru-9r', rank: 9, route: 'romance', days: 1, slot: 1, msgs: [
      { from: 'haru', t: 'I have never chosen anyone before.' },
      { from: 'haru', t: 'I chose you. It feels like the first real decision I have ever made.' }
    ], reply: [
      { t: 'I choose you too, Haru.', notes: 3, then: [{ from: 'haru', t: '🌹' }, { from: 'haru', t: 'Goodnight, Solar.' }] },
      { t: "It was a good decision.", notes: 3, then: [{ from: 'haru', t: 'The best one. Fufu.' }] }
    ] },
    { id: 'haru-9f', rank: 9, route: 'friend', days: 1, slot: 1, msgs: [
      { from: 'haru', t: 'Best friends! I have only had one before. I will try very hard to be a good one.' }
    ], reply: [
      { t: 'You already are.', notes: 3, then: [{ from: 'haru', t: 'Oh! Then I will try to be even better. Watch out. 🌻' }] },
      { t: 'Bring coffee and you\'re perfect.', notes: 3, then: [{ from: 'haru', t: 'That is a very easy standard. Fufu.' }] }
    ] }
  ],
  ranks: [
    { after: '6/10', title: '1: the planters', place: 'Gekkoukan High · Rooftop', scene: [
      { n: "Gekkoukan's roof had planters along the south fence that nobody had touched in years. Cracked terracotta, dry soil, a few brown stalks that might once have been something. Solar had never thought about them. Nobody had." },
      { n: "On Wednesday afternoon, somebody was watering them." },
      { n: "A girl in a uniform from some other school, a dark blazer with a red plaid skirt, kneeling on the concrete in the June heat with a plastic watering can she'd clearly found in a supply closet, talking to the soil in a soft, encouraging voice, like a nurse with a patient." },
      { n: "Short, fluffy hair, a little curled at the ends. A pink scarf, somehow, in this heat. She looked up when the door clanged and smiled at Solar so warmly and so immediately that Solar almost looked behind herself to check who it was for." },
      { s: 'haru', f: 'happy', t: 'Oh! Hello! I hope I\'m not intruding. They looked so thirsty.' },
      { choose: [
        { t: "Who are you talking to?", notes: 2, then: [{ s: 'haru', f: 'happy', t: 'The tomatoes. Or, the tomatoes they will be, if I can convince them. Plants respond to kindness, you know. People think that\'s silly, but it\'s true.' }] },
        { t: "You're not from Gekkoukan.", notes: 3, then: [
          { s: 'haru', f: 'surprised', t: '...No. I\'m not. I woke up on this roof two days ago in the middle of the night. Everything was green. There were coffins.' },
          { s: 'haru', f: 'sad', t: 'I didn\'t know what else to do, so I started gardening. Isn\'t that strange?' }
        ] }
      ] },
      { s: 'haru', f: 'happy', t: "I'm Haru Okumura. I go to Shujin Academy, in Tokyo. Which does not appear to exist here." },
      { n: "She said it pleasantly, the way you'd mention a slight change in the weather. Her hands, Solar noticed, were trembling very slightly on the watering can." },
      { choose: [
        { t: "(Kneel down and help her.)", notes: 3, then: [
          { n: "Solar knelt on the hot concrete and took a handful of the dry soil and broke it up with her fingers, the way she'd seen people do on television. Haru watched her for a moment, and then her shoulders came down, all at once, like a held breath let go." },
          { s: 'haru', f: 'happy', t: '...Thank you. Gently, like that. Yes.' }
        ] },
        { t: "Are you all right?", notes: 2, then: [
          { s: 'haru', f: 'sad', t: "I'm frightened, if I'm honest. But the plants need me. It helps to be needed." }
        ] }
      ] },
      { n: "They worked until the bell rang below them. Haru knew the names of everything, the soil and the roots and the little green weeds that weren't really weeds. She explained it all in her soft, delighted voice, and Solar didn't understand half of it, and found she didn't care." },
      { s: 'haru', f: 'happy', t: "Will you come back? Tomorrow? I would like the tomatoes to meet you properly." },
      { n: "Solar said yes. On the stairs she realized she had dirt under her nails and a smile on her face, and that she couldn't remember the last time she'd had either." }
    ] },

    { after: '6/24', title: '2: big bang burger', place: 'Port Island Station · Wild-Duck Burger', scene: [
      { n: "Haru had never eaten fast food in her life. She'd announced this on the roof on Monday with the gravity of a confession, and Solar had immediately decided that this was a problem that needed fixing." },
      { n: "Wild-Duck Burger by Port Island Station was loud and bright and smelled like fryer oil, and Haru stood in front of the menu board with her hands clasped and her eyes very wide, like a child at a museum." },
      { s: 'haru', f: 'happy', t: "My father's company owns a burger chain, you know. Big Bang Burger. I've never been allowed to eat there." },
      { s: 'haru', f: 'serious', t: "So this is research. Competitive analysis. I'm taking notes." },
      { n: "She had, in fact, brought a notebook. She took notes on the fries." },
      { choose: [
        { t: "Get the biggest burger. For science.", notes: 3, then: [
          { s: 'haru', f: 'happy', t: "For science! Yes!" },
          { n: "The biggest burger was called the Mallard Mountain. It had four patties. Haru ate the entire thing with a knife and fork, delicately, and then asked if she could have another." }
        ] },
        { t: "Your father owns a burger chain?", notes: 2, then: [{ s: 'haru', f: 'sad', t: "He owns many things. He's very busy. I don't see him much." }] }
      ] },
      { n: "She talked about Big Bang Burger's menu in enormous detail. The Big Bang Challenge. The galactic theme. The mascot. She clearly knew everything about a place she'd never been allowed to set foot in, the way you know everything about a house you can see from the street." },
      { s: 'haru', f: 'sad', t: "I used to walk past them on the way home from school and look in the windows. All the students eating together, laughing. I wanted that so badly." },
      { n: "Solar knew that window. She'd stood outside it in a dozen cities. She didn't say so. She just slid her fries across the table." },
      { s: 'haru', f: 'surprised', t: "...You're giving me your fries?" },
      { choose: [
        { t: "That's what friends do here.", notes: 3, then: [
          { s: 'haru', f: 'blushing', t: '...Friends.' },
          { n: "She said the word carefully, like she was holding something delicate she'd been given without asking." }
        ] },
        { t: "You need more data.", notes: 2, then: [{ s: 'haru', f: 'happy', t: "Ah! Of course! For research. Thank you, Solar-chan." }] }
      ] },
      { n: "Solar-chan. It came out of her naturally, like she'd been saying it for years. Solar didn't correct her. She decided she liked it." }
    ] },

    { after: '7/8', title: '3: coffee', place: 'Iwatodai Dorm · Kitchen', scene: [
      { n: "Haru had discovered the dorm kitchen, and the dorm kitchen would never be the same." },
      { n: "She'd arrived on Saturday morning with a paper bag of coffee beans from a shop in Paulownia she'd spent an hour interrogating, a hand grinder she'd bought on the spot, and a glass pour-over contraption that looked like a lab experiment. She set them out on the counter with the reverence of someone setting up an altar." },
      { s: 'haru', f: 'happy', t: "There's a café in my neighborhood back home. The owner taught me. It's very calming, if you do it properly." },
      { n: "She ground the beans slowly. The whole kitchen filled with the smell of it, dark and warm and a little like chocolate, and people started drifting downstairs one by one like cartoon characters following a scent." },
      { s: 'shinjiro', f: 'neutral', t: "...What is that." },
      { n: "Shinjiro stood in the doorway in a gray t-shirt and his beanie, looking at the pour-over setup with the deep suspicion of a man whose kitchen had been invaded." },
      { s: 'haru', f: 'happy', t: "Good morning! I'm Haru. Would you like a cup? I'm told it's quite good." },
      { choose: [
        { t: "Shinji, she's a friend. Be nice.", notes: 2, then: [{ s: 'shinjiro', f: 'neutral', t: "I'm always nice." }] },
        { t: "Try it, Shinjiro-senpai.", notes: 3, then: [{ s: 'shinjiro', f: 'neutral', t: "...Fine. One." }] }
      ] },
      { n: "He tried it. He stood very still. He tried it again." },
      { s: 'shinjiro', f: 'surprised', t: "...Where'd you learn to do this?" },
      { s: 'haru', f: 'happy', t: "A café. And practice. And a lot of patience." },
      { s: 'shinjiro', f: 'neutral', t: "Patience. Yeah. That's the trick with everything." },
      { n: "They talked for an hour. Him about broth, her about roast profiles, both of them nodding very seriously at each other like diplomats from two neighboring countries. Solar sat at the table with her coffee and watched two of the gentlest, most guarded people she knew discover they spoke the same language." },
      { s: 'haru', f: 'happy', t: "Solar-chan. How is it? Your cup?" },
      { choose: [
        { t: "Best coffee I've ever had.", notes: 3, then: [{ s: 'haru', f: 'blushing', t: "Oh! Fufu. That's very kind." }] },
        { t: "I usually drink canned coffee from the vending machine.", notes: 2, then: [
          { s: 'haru', f: 'surprised', t: "...Oh, Solar-chan. Oh no. We have so much work to do." },
          { s: 'shinjiro', f: 'neutral', t: "Same with her cooking. She's a project." }
        ] }
      ] }
    ] },

    { after: '7/22', title: '4: the engagement', music: 'tender', place: 'Gekkoukan High · Rooftop', scene: [
      { n: "The tomatoes had come in. Small and hard and green, but there, a dozen of them, hanging off vines that had been dead brown sticks a month ago. Haru was sitting on the concrete next to them with her knees drawn up, not looking at them." },
      { n: "She'd been quiet all week. Not her normal quiet, the soft, contented hum of someone happy to be busy. A different one. Heavy." },
      { s: 'haru', f: 'sad', t: "Solar-chan. May I tell you something unpleasant?" },
      { s: 'haru', f: 'sad', t: "At home, I'm engaged. To a man named Sugimura. My father arranged it. For the company. I've met him four times. He's very rude to waiters." },
      { s: 'haru', f: 'serious', t: "I didn't choose him. Nobody asked me. My father signed something, and now my whole life is decided, and I'm expected to smile about it." },
      { n: "She smiled while she said it. A perfect, pleasant, practiced smile, the kind you'd wear to a dinner party where you hated everyone. Solar watched it and felt something cold go down her back, because she knew that smile, and she didn't know how she knew it." },
      { n: "A cream dress. A smile her mother chose. A man she was promised to. The sea. Someone sleeping across the hall. None of it was hers, and all of it was, the way Elizabeth had said, in the elevator, in the blue." },
      { choose: [
        { t: "I think I know what that feels like.", notes: 3, then: [
          { s: 'haru', f: 'surprised', t: '...You do?' },
          { n: "Solar told her what she could. Not much. A feeling, mostly. A version of herself somewhere else, in a cream dress, with her whole life decided. Haru listened like it was the most important thing anyone had ever told her." },
          { s: 'haru', f: 'sad', t: "...Then you understand. Oh, Solar-chan. You actually understand." }
        ] },
        { t: "You don't have to smile about it. Not here.", notes: 3, then: [
          { s: 'haru', f: 'sad', t: '...' },
          { n: "The smile stayed for a second longer. Then it went, all at once, and underneath it her face was tired and young and angry, and she let it be that way, for once, in front of someone." },
          { s: 'haru', f: 'serious', t: "...I hate him. I hate all of it. I've never said that out loud." }
        ] }
      ] },
      { s: 'haru', f: 'neutral', t: "Up here, nobody's decided anything for me. Not the tomatoes. Not you." },
      { s: 'haru', f: 'blushing', t: "It's the first time in my life I've felt like my choices were my own." },
      { n: "She picked one of the small green tomatoes, too early, and held it in her palm, and laughed at herself for picking it. Then she gave it to Solar, solemnly, like a ring." }
    ] },

    { after: '8/12', title: '5: crepes with ann', music: 'sun', place: 'Paulownia Mall · Crepe Stand', scene: [
      { n: "Ann had insisted. Ann, upon learning that there was another Phantom Thief in Iwatodai, a whole other girl from home, had made a sound like a kettle and demanded an immediate summit at the crepe stand." },
      { s: 'ann', f: 'happy', t: "HARU! Oh my god! You're here too!" },
      { s: 'haru', f: 'happy', t: "Ann-chan! Oh, I'm so glad! I thought I was the only one!" },
      { n: "They hugged in the middle of the mall, two girls in two different uniforms from a school that didn't exist, and the sock-shop lady looked out to check on them again, and Solar bought three crepes and stood back and let them have it." },
      { s: 'ann', f: 'happy', t: "Sunflare, you didn't tell me you knew Haru!" },
      { s: 'haru', f: 'surprised', t: "Sunflare? Is that your codename? Solar-chan, you have a codename?" },
      { choose: [
        { t: "Ann gave it to me.", notes: 2, then: [{ s: 'haru', f: 'happy', t: "It's perfect. Ann always has the best taste." }] },
        { t: "Apparently I'm a Phantom Thief now.", notes: 3, then: [{ s: 'haru', f: 'happy', t: "Of course you are. You stole my whole rooftop garden. Fufu." }] }
      ] },
      { n: "They talked about home for an hour. About a café with good curry, and a cat called Morgana who was not, apparently, a cat, and a boy with glasses they both clearly adored in a way Solar decided not to ask about. About Makoto, who had come through for one night and planned the next six months of the dorm's training schedule with Mitsuru before fading at dawn." },
      { s: 'ann', f: 'sad', t: "Futaba says she's getting close. To a way home. For me first, I think. Then Haru." },
      { s: 'haru', f: 'sad', t: '...Oh.' },
      { n: "Haru put her crepe down. She looked at Solar, and then away, and then back at Solar again, the way you look at a door you know you'll have to walk through eventually." },
      { choose: [
        { t: "That's good news. Isn't it?", notes: 2, then: [{ s: 'haru', f: 'sad', t: "It is. It should be. I'm very happy for Ann-chan." }] },
        { t: "(Take Haru's hand under the table.)", notes: 3, then: [
          { n: "Haru's hand was cold. She held on. Ann, across the table, noticed, and said nothing, and smiled into her crepe with an expression of enormous, unbearable delight." }
        ] }
      ] }
    ] },

    { after: '9/2', title: '6: father', music: 'tender', place: 'Gekkoukan High · Rooftop', scene: [
      { n: "September. The tomatoes were red now. Haru picked them one at a time and set them in a basket and didn't say anything for a long while. The wind off the bay was cooler than it had been. Summer was turning." },
      { s: 'haru', f: 'sad', t: "Before I fell through, my father died." },
      { n: "She said it to the basket. Plainly. Like reading it off a card." },
      { s: 'haru', f: 'sad', t: "In the middle of a press conference. In front of everyone. Someone did it to him. It wasn't an accident." },
      { s: 'haru', f: 'serious', t: "He wasn't a good man, Solar-chan. He hurt people for his company. He sold me to Sugimura like a building. And I'm so angry at him. And I miss him so much I can't breathe." },
      { n: "She said it all very evenly, and then she stopped, and her hands stopped, and the basket sat between them full of red tomatoes she'd grown herself." },
      { choose: [
        { t: "You're allowed to love him and be angry at him.", notes: 3, then: [
          { s: 'haru', f: 'surprised', t: '...Both?' },
          { s: 'haru', f: 'sad', t: "Both. At the same time. Is that allowed?" },
          { n: "Solar nodded. Haru looked at her for a long moment, and then put her face in her hands and cried, finally, properly, for the first time since she'd fallen through, and Solar sat next to her and put an arm around her shoulders and let her." }
        ] },
        { t: "My parents died when I was little.", notes: 3, then: [
          { s: 'haru', f: 'surprised', t: '...Oh, Solar-chan.' },
          { n: "Haru reached over and took both of Solar's hands in hers, dirt and all, and held them, and they sat with it together, two girls who'd been left by the people who were supposed to stay." }
        ] }
      ] },
      { s: 'haru', f: 'neutral', t: "Thank you. For letting me be ugly about it." },
      { n: "She wasn't ugly about it. She'd never been ugly about anything. But Solar understood what she meant, and didn't argue, and helped her carry the tomatoes down." }
    ] },

    { after: '9/23', title: '7: milady', place: 'Gekkoukan High · Rooftop · The Dark Hour', scene: [
      { n: "Midnight. The green hour. The school roof washed in that sick, swollen light, and something crawling up the side of the building toward the garden, black and dripping and full of grasping hands." },
      { n: "Haru was standing between it and her tomatoes. She was not wearing her uniform. She was in something black and elegant, a long-coated outfit with a wide-brimmed hat and a mask, and she was holding an axe that was taller than she was, and she was smiling." },
      { s: 'haru', f: 'serious', t: "Solar-chan! Stay behind me, please. It wants my garden." },
      { s: 'haru', f: 'serious', t: "It cannot have my garden." },
      { choose: [
        { t: "I'm right beside you, Haru.", notes: 3, then: [{ s: 'haru', f: 'happy', t: "Fufu. Then let's be rude to it together." }] },
        { t: "Is that an AXE?", notes: 2, then: [{ s: 'haru', f: 'happy', t: "It's a very nice axe!" }] }
      ] },
      { n: "What happened next, Solar would describe later to Akihiko as 'extremely educational.' Haru swung the axe like it weighed nothing, cheerful, precise, terrifying, and something rose behind her, an enormous figure in a red dress and a crown, and the shadow did not get within a meter of a single tomato." },
      { n: "At one point Haru produced a grenade launcher from somewhere. Solar did not ask from where." },
      { n: "When it was over, the shadow was smoke and the roof was quiet, and Haru stood in the middle of her garden, breathing hard, axe resting on her shoulder, hair a mess, face flushed, looking happier than Solar had ever seen her." },
      { s: 'haru', f: 'happy', t: "Was that too much? Makoto says I get a little enthusiastic." },
      { choose: [
        { t: "That was incredible.", notes: 3, then: [{ s: 'haru', f: 'blushing', t: "Oh! Thank you. I think so too, honestly." }] },
        { t: "You're terrifying, and I love it.", notes: 3, then: [{ s: 'haru', f: 'blushing', t: "...Both at once? Fufu. That's what you said I was allowed to be." }] }
      ] },
      { n: "She knelt and checked every tomato plant, one by one, gently, while the green faded out of the sky. Not one had been touched." }
    ] },

    { after: '10/14', title: '8: harvest', place: 'Iwatodai Dorm · Kitchen', scene: [
      { n: "October, and the garden on the roof had done more than anyone expected. Tomatoes and cucumbers and peppers and a squash that Junpei had named Gerald. Haru brought them down to the dorm in three trips." },
      { n: "The dorm had been quiet since the beginning of the month. Shinjiro was at Tatsumi Memorial. He hadn't woken. Nobody cooked anymore. The kitchen had been dark for two weeks, and everyone had been eating convenience store food standing up." },
      { n: "Haru turned the lights on. She put on an apron she'd found on a hook, gray and plain, Shinjiro's, and stood at his stove for a long time without moving." },
      { s: 'haru', f: 'sad', t: "He taught me how he does the broth. Before. He said patience is the trick with everything." },
      { choose: [
        { t: "Let's make it together. For him.", notes: 3, then: [{ s: 'haru', f: 'happy', t: "...Yes. Let's." }] },
        { t: "(Hand her a knife and an onion.)", notes: 3, then: [
          { n: "Haru took them. She cut the onion thin, then thinner, the way he'd shown both of them, and smiled at the cutting board like it had said something kind." }
        ] }
      ] },
      { n: "They made his soup. They made rice, and pickles from the cucumbers, and roasted Gerald, who turned out to be delicious. One by one the dorm came downstairs, drawn by the smell the way they used to be, Junpei and Yukari and Mitsuru and Ken and Koromaru, and finally Akihiko, who stood in the doorway and looked at the stove and had to go back into the hallway for a minute." },
      { s: 'akihiko', f: 'sad-3', t: "...It smells exactly right." },
      { n: "They ate together. It was the first time in two weeks that anyone had laughed at dinner. Haru packed a container of the soup into a bag, and the next day Akihiko took it to the hospital, and the nurse let him hold it near Shinjiro's bed so he could smell it." },
      { s: 'haru', f: 'blushing', t: "Solar-chan. I want to tell you something, and I'm going to say it badly." },
      { s: 'haru', f: 'blushing', t: "I've never belonged anywhere. Not my school. Not my house. Not my father's company. And tonight, in this kitchen, I belonged." },
      { n: "She said it into the steam from the pot, and her face was pink, and Solar didn't know if it was the heat." }
    ] },

    { after: '11/11', title: '9: my own choice', place: 'Gekkoukan High · Rooftop Garden', scene: [
      { n: "November. The garden was going to sleep. Haru had covered the beds with straw, carefully, tucking them in like children, and the roof was cold and gray and full of the smell of turned earth." },
      { n: "Futaba had texted Haru that morning. The way home was open. Ann had gone already. Haru's turn would come at the end of the year, when the green hour closed for good." },
      { s: 'haru', f: 'neutral', t: "My whole life, other people have decided what I am. My father. Sugimura. The company." },
      { s: 'haru', f: 'serious', t: "So I am going to decide something myself. Right now. And I need you to tell me what you want, Solar-chan, not what you think I want to hear." },
      { s: 'haru', f: 'blushing', t: "What are we?" },
      { route: [
        { t: "I'm in love with you, Haru.", route: 'romance', notes: 3, then: [
          { s: 'haru', f: 'surprised', t: '...' },
          { s: 'haru', f: 'blushing', t: "Oh. Oh, good. Me too. I chose you. You're the first thing I have ever chosen." },
          { n: "She took Solar's face in her cold, gloved hands, carefully, like it was something fragile from the garden, and kissed her on the cold roof with the straw-covered beds all around them, sleeping." }
        ] },
        { t: "You're my best friend. I'll choose you every time.", route: 'friend', notes: 3, then: [
          { s: 'haru', f: 'happy', t: "...Best friends. Yes. That's a very good choice. My own choice." },
          { n: "She hugged Solar so hard her hat fell off, and they both laughed, and the wind took the hat halfway across the roof, and they chased it together." }
        ] }
      ] }
    ] },

    { after: '12/9', title: '10: solar roast', place: 'Iwatodai Dorm · Kitchen', scene: [
      { n: "December. The first snow had fallen overnight, and the dorm windows were fogged, and the kitchen smelled like coffee, the good kind, the kind that made people come downstairs in their pajamas without being called." },
      { n: "Haru had a paper bag on the counter. Hand-labeled, in her careful, rounded writing. She slid it across to Solar without a word." },
      { n: "It said: Solar Roast. And underneath, smaller: Dark, a little sweet, warmer than you expect." },
      { s: 'haru', f: 'happy', t: "I asked the shop in Paulownia if I could blend my own. I've been trying for a month. That one is right." },
      { s: 'haru', f: 'blushing', t: "When I go home, I'm going to make it at the café. I'll put it on the menu. People will drink it in Tokyo and not know it's named after a girl from another world." },
      { ifRoute: 'friend', then: [
        { choose: [
          { t: "I'll make it every morning.", notes: 3, then: [{ s: 'haru', f: 'happy', t: "Properly, please. Slowly. With patience." }] },
          { t: "Make sure Sugimura never gets a cup.", notes: 3, then: [{ s: 'haru', f: 'happy', t: "Fufu. He's not getting anything of mine ever again. Not even coffee." }] }
        ] },
        { n: "They drank the first cup of Solar Roast together at the kitchen table with the snow coming down outside, and it was dark and a little sweet and warmer than she expected, and Haru watched her drink it with her chin in her hands like she was watching a garden come up." }
      ] },
      { ifRoute: 'romance', then: [
        { s: 'haru', f: 'blushing', t: "Every morning, I'll make a cup of it. And every morning, I'll think of you. In every world, I'll have a little bit of you." },
        { choose: [
          { t: "Then I'll make you one every morning too.", notes: 3, then: [{ s: 'haru', f: 'happy', t: "Two cups. Two worlds. The same coffee. That's a sort of marriage, isn't it? The kind I'd actually choose." }] },
          { t: '(Kiss her.)', notes: 3, then: [
            { s: 'haru', f: 'surprised', t: '...!' },
            { s: 'haru', f: 'blushing', t: "...That was sweeter than the coffee. Don't tell the coffee." }
          ] }
        ] },
        { n: "The snow kept falling. The coffee went cold. Neither of them noticed until Junpei came down for breakfast and loudly asked why the kitchen smelled so good and why they were both so red." }
      ] }
    ] }
  ]
});
