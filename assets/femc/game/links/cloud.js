/* Cloud Strife · XII Hanged Man. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Visitor (Final Fantasy VII), second wave (7/7). Friendship (v1's romance is cut). He holds on to names; he writes them down.
   The ending he runs from: his own memories, which keep turning out to be someone else's.
   Tifa comes through on the 8/6 moon (rank 3), Aerith a little after (rank 4). Rank 5 is Kat's matchmaking: Solar won't
   choose for him, only makes him say one true thing to each, and gets a Runners flashback (two boys, one party). No fragment.
   Rank 8 (Wall Market) branches on whether Solar has met Aphrodite.
   Cast-only speakers: none. afterMax: scenes for after rank 10 (engine support pending). */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'cloud', name: 'Cloud Strife', short: 'Cloud', arcana: 'Hanged Man', numeral: 'XII', from: 'Final Fantasy VII',
  kind: 'visitor',
  romance: null,
  starts: '7/9',
  home: { area: 'station', spot: 'Taxi Stand', slot: 'after', days: [0, 1, 3, 5],
          hint: 'After school on Mondays, Wednesdays and Fridays, and in the daytime on Sundays, by the taxi stand at Iwatodai Station.' },
  approach: "A blond guy with a sword the size of a door is leaning on a pillar at the Iwatodai Station taxi stand, beside a cardboard sign that says ODD JOBS. ANY JOB.",
  cast: {},
  invite: {
    ask: ["You free?", "Got a job. Could use backup.", "...Want to get food.", "Station. If you're around.", "Moving a fridge. Need someone to hold the door.", "Got paid in rice balls. Too many rice balls."],
    ok: ["Okay.", "Good. Taxi stand.", "...See you there."],
    no: ["...Fine.", "Okay. Another time.", "Understood."]
  },
  hangouts: [
    [
      { n: "Cloud had been paid for moving a vending machine with a box of twenty-four rice balls from the station convenience store, all tuna mayo, and was sitting on the taxi stand bench with the box on his knees looking at it the way a man looks at a mountain he has to climb." },
      { s: 'cloud', f: 'neutral', t: "...Take some. Take a lot." },
      { choose: [
        { t: "(Take one, and sit down next to him.)", notes: 3, then: [
          { n: "She took one and sat down. They ate in silence, the way he liked, watching the taxis pull in and out. After the third one he started, very quietly, to tell her about a town with a reactor in it, and a train yard, and a bar with a pinball machine, and stopped in the middle as if he'd lost the thread, and she waited, and he found it again." }
        ] },
        { t: "Why did you say yes to rice balls?", notes: 2, then: [
          { s: 'cloud', f: 'neutral', t: "He offered. I didn't know how to say no to a man holding a box of rice balls." }
        ] },
        { t: "You could sell them.", notes: 1, then: [
          { s: 'cloud', f: 'neutral', t: "To who. Everybody here can buy them in there." }
        ] }
      ] },
      { n: "By the time the sun went down they'd eaten eleven between them, and he'd given four to the old taxi driver who parked at the front of the rank every evening, and the driver had given him a can of coffee in return, and Cloud looked at the can for a long time as if it were a medal." }
    ],
    [
      { n: "He had a notebook. A small one, cheap, from the hundred-yen shop, and he wrote in it every morning at the taxi stand before anybody came, and closed it fast whenever someone did, and Solar had stopped pretending not to see it." },
      { s: 'cloud', f: 'neutral', t: "...Names. That's all it is. People I met. What they look like. One thing about them." },
      { choose: [
        { t: "Can I see mine?", notes: 3, then: [
          { n: "He looked at her for a long time, and then opened the notebook to the first page, and turned it around. SOLAR, in square careful capitals. Under it: dorm. black hair, always up. bought me a rice ball first day. counts the exits. And under that, added later in different ink: counts the exits because she's scared. not of me." },
          { s: 'cloud', f: 'flustered', t: "...That last part's just a theory." }
        ] },
        { t: "That's a good idea.", notes: 2, then: [
          { s: 'cloud', f: 'neutral', t: "It's not an idea. It's a precaution." }
        ] }
      ] },
      { n: "He put the notebook back in his jacket, inside, against his chest, and buttoned the pocket over it, and patted it once, the way you'd check for keys." }
    ]
  ],
  ranks: [
    { after: '7/9', title: '1: not interested', place: 'Iwatodai Station · Taxi Stand', scene: [
      { music: 'city' },
      { n: "There was a man at Iwatodai Station with a sword the size of a door." },
      { n: "He was leaning against a pillar by the taxi stand with his arms crossed, in a sleeveless navy shirt and a single heavy pauldron on one shoulder, and his hair was blond and stood up in spikes that defied the humidity in a way that seemed almost personal. The sword was strapped to his back. It was enormous. It was taller than Solar. The taxi drivers were giving it a very wide berth." },
      { n: "He had a piece of cardboard propped against his boot. On it, in very neat, square, careful handwriting, somebody had written: ODD JOBS. ANY JOB. And underneath, smaller, as if added after some thought: NO JOB TOO SMALL." },
      { s: 'cloud', f: 'neutral', t: "...You need something?" },
      { choose: [
        { t: "Are you really a mercenary?", notes: 2, then: [
          { s: 'cloud', f: 'neutral', t: "Ex-SOLDIER. First Class. I take whatever pays." },
          { n: "He said it fast and flat, like something rehearsed, like a line he'd said so many times it had stopped meaning anything to him and only worked as a door he could close." }
        ] },
        { t: "That's a big sword.", notes: 3, then: [
          { s: 'cloud', f: 'neutral', t: "Yeah. It is." },
          { n: "He didn't say anything else. But he looked at the sword over his shoulder for a second, oddly, the way you'd look at a coat somebody had lent you and you'd forgotten to give back." }
        ] },
        { t: "Want to get lunch?", notes: 1, then: [
          { s: 'cloud', f: 'neutral', t: "...Not interested." }
        ] }
      ] },
      { s: 'cloud', f: 'neutral', t: "I'm Cloud. Cloud Strife." },
      { n: "He said it the way some people said their name, like it was the one thing they were absolutely sure of. Then he asked hers, and she told him, and he repeated it, carefully, like he was writing it down somewhere inside his head, in ink." },
      { s: 'cloud', f: 'neutral', t: "Solar." },
      { register: 'cloud' },
      { s: 'cloud', f: 'neutral', t: "I woke up on that platform two nights ago. Everything green. People in coffins. I thought I was in the Lifestream. I thought I'd died again." },
      { s: 'cloud', f: 'neutral', t: "There was a kid at the end of the platform. Girl. In a porter's coat. Way too big for her. Cap pulled down. She looked like she was waiting for a train." },
      { s: 'cloud', f: 'neutral', t: "She said, \"This is the end of the line. You can get off here, if you want.\" And then she said sorry. I asked her what for. She didn't answer. When I looked back she wasn't there." },
      { s: 'cloud', f: 'serious', t: "...I wrote her down. I write people down. She's the only one in the book with no name." },
      { ifMet: ['wren'], then: [
        { n: "The end of the platform. Solar looked past him, through the station doors, toward the trains, toward a bench at the far end she could almost see from here, and her stomach did something small and cold, and she told it to stop, and it didn't, quite." }
      ] },
      { choose: [
        { t: "That happens here. The green. Every night.", notes: 2, then: [
          { s: 'cloud', f: 'neutral', t: "...Great. Wonderful. Okay." }
        ] },
        { t: "You're taking it well.", notes: 2, then: [
          { s: 'cloud', f: 'neutral', t: "I've woken up in worse places. I think. It's hard to remember." }
        ] },
        { t: "Why do you write people down?", notes: 3, then: [
          { s: 'cloud', f: 'neutral', t: "...So I know they were real." },
          { n: "He said it before he'd decided to. She saw him hear himself say it. His jaw shut, hard, like a gate, and he looked away at the taxis." }
        ] }
      ] },
      { n: "She bought him a rice ball from the station convenience store, tuna mayo, because he looked like a man who'd forgotten food was a thing you could just go and get. He tried to pay her back with a coin she didn't recognize, heavy and stamped with something that wasn't yen. She told him to keep it. He looked at it in his palm for a moment as if it had told him something, and put it away." },
      { s: 'cloud', f: 'neutral', t: "...Thanks. If you need a job done. I'm here. Taxi stand." },
      { n: "When she looked back from the station doors, he was eating the rice ball very slowly, in small careful bites, and he'd taken out a little notebook and was writing in it with the pen held awkwardly in his gloved hand, and she was fairly sure, from the shape of it on the page, that it was her name." }
    ] },

    { after: '7/23', title: '2: odd jobs', place: 'Paulownia Mall', scene: [
      { music: 'day' },
      { n: "Cloud's mercenary business, it turned out, mostly involved being paid in food." },
      { n: "He'd helped the takoyaki stand owner move a freezer. He'd chased a stray cat out of the bookstore. He'd stood outside a cram school for a whole afternoon because a mother had been worried about a man who kept hanging around the gate, and the man had looked at Cloud and his sword and had not come back. He'd been paid in octopus balls, a paperback, and a bag of mandarins." },
      { s: 'cloud', f: 'neutral', t: "Today it's a lost dog. Somebody's grandmother. The dog, not the grandmother. Will you help?" },
      { choose: [
        { t: "Sure. What's the pay?", notes: 2, then: [
          { s: 'cloud', f: 'neutral', t: "Curry. Homemade. I've been told it's very good." }
        ] },
        { t: "You're asking me for help?", notes: 3, then: [
          { s: 'cloud', f: 'flustered', t: "...Don't make it a thing." },
          { n: "She didn't make it a thing. She noticed, though, that he'd said will you help in the same flat voice as everything else, and that it had cost him something, and that he'd been standing very straight when he said it, like a man reporting for duty." }
        ] }
      ] },
      { place: 'Paulownia Mall · Car Park', time: 'Daytime', bg: 'junkyard-alley' },
      { n: "They found the dog in the car park under the mall, hiding behind a delivery truck, shivering, a little brown thing with a bent ear and a collar with a bell, which had given it away. It wouldn't come to Solar. It wouldn't come to the delivery man. Cloud crouched down on the oily concrete about two meters away, in his pauldron, with the enormous sword dragging on the ground behind him, and didn't move, and didn't call, and didn't reach." },
      { n: "He just waited. For a long time. Long enough that the delivery man left. Long enough that Solar sat down on the curb." },
      { n: "The dog came to him eventually. Inch by inch. It sniffed his glove. It sat down against his knee. He picked it up like it was made of glass, very slowly, one hand under it and one over it, the way you'd lift something you'd been told was precious and weren't sure you were allowed to hold." },
      { s: 'cloud', f: 'neutral', t: "...Easy. Easy. You're okay. You just got lost. It happens." },
      { n: "He didn't sound like a mercenary when he said it. He sounded like someone who'd been lost too, a long time, somewhere much darker than a car park, and had been found by someone who'd waited." },
      { choose: [
        { t: "You're good at this.", notes: 2, then: [
          { s: 'cloud', f: 'neutral', t: "...Not really. I just know what it's like. When everything's loud and you don't know where you are and everybody's reaching for you." }
        ] },
        { t: "(Stay quiet and let him have the moment.)", notes: 3, then: [
          { n: "Solar didn't say anything. Cloud held the dog a while longer than he needed to, in the oily dim of the car park, with his eyes closed and its bell jingling softly against his glove every time it breathed, and it seemed to Solar that the dog was holding him, too, a little." }
        ] }
      ] },
      { n: "The curry was very good. The grandmother made them eat at her kitchen table in a tiny apartment above a tofu shop, with the dog asleep on Cloud's boots, and he ate two bowls and didn't say anything the whole time, but at the end he said thank you to the grandmother in a voice Solar had never heard him use, soft and young and from somewhere else, and the grandmother patted his cheek, and he let her, and went bright red to the tips of his ears." }
    ] },

    { after: '8/8', title: '3: tifa', place: 'Iwatodai · Riverside', scene: [
      { music: 'tender' },
      { n: "The full moon in August brought Tifa Lockhart down onto the riverside path in the middle of the green hour, standing in a puddle of moonlight with her fists up, in a white top and black skirt and gloves, ready to fight a city full of coffins." },
      { n: "By the next afternoon she'd found Cloud, the way, he said, she always found him. Solar met her on a bench by the river, sitting very close to Cloud with her hands folded in her lap, a woman with long dark hair tied low and a face that was kind in a way that had cost her something, and arms that could clearly lift a car." },
      { s: 'tifa', f: 'happy', t: "You must be Solar. Cloud's mentioned you." },
      { s: 'cloud', f: 'neutral', t: "...Once." },
      { s: 'tifa', f: 'happy', t: "Four times. Today. Before lunch." },
      { choose: [
        { t: "Four times?", notes: 2, then: [
          { s: 'cloud', f: 'flustered', t: "She's exaggerating." },
          { s: 'tifa', f: 'happy', t: "I'm really not." }
        ] },
        { t: "It's nice to meet you, Tifa.", notes: 3, then: [
          { s: 'tifa', f: 'happy', t: "You too. Thank you for looking after him. He's terrible at letting people." }
        ] }
      ] },
      { s: 'tifa', f: 'neutral', t: "A girl met me on the path. Little, in a big coat. She said, \"He's at the station. He keeps a list.\" I didn't even say who I was looking for. And then she apologized and walked off into the green like she lived there." },
      { s: 'tifa', f: 'neutral', t: "We grew up together, Cloud and me. In a little town called Nibelheim, up in the mountains. Next door. Our windows faced." },
      { s: 'tifa', f: 'neutral', t: "When we were kids we made a promise at the water tower. Under the stars. If I was ever in trouble, he'd come and save me. Like a hero in a story." },
      { s: 'cloud', f: 'neutral', t: "...I remember the stars." },
      { n: "He said it oddly. Like the stars were the only part of it he was sure of. Tifa looked at him for a long moment with something in her face that was very old and very patient, like a bruise you've stopped noticing until you press on it." },
      { s: 'tifa', f: 'sad', t: "He kept it. More than once. Even when he didn't remember making it. Even when he was remembering it wrong." },
      { choose: [
        { t: "Remembering it wrong?", notes: 2, then: [
          { s: 'tifa', f: 'sad', t: "That's his to tell. When he's ready." },
          { n: "Cloud didn't say anything. He was looking at the river. His hand had come up to the side of his head, near the temple, and stayed there, two fingers pressing, as though holding something in." }
        ] },
        { t: "(Notice the way Tifa looks at him.)", notes: 3, then: [
          { n: "Solar noticed. She noticed, too, that Cloud didn't, and that Tifa had clearly made her peace with him not noticing a long time ago, the way you make your peace with a window that sticks: you stop expecting it to open, and you keep the room nice anyway." }
        ] }
      ] },
      { s: 'tifa', f: 'happy', t: "I run a bar, back home. Seventh Heaven. He drinks there and doesn't pay and pretends it's because he's guarding the place. I let him." },
      { s: 'tifa', f: 'neutral', t: "Mitsuru says I can stay at the flat by the station. She also says I'm faint unless somebody here holds on to me. I told her that's never been a problem. I hold on to him. That counts, doesn't it?" },
      { n: "She said it brightly, like a joke. Solar looked at her hands in her lap, and they were solid, and she looked at Cloud's beside her on the bench, and they were solid, and between them on the wooden slats there were about six inches of space that neither of them had closed, and Solar thought that six inches could be a very long way." }
    ] },

    { after: '8/22', title: '4: aerith', place: 'Paulownia Mall · Flower Stall', scene: [
      { music: 'joy' },
      { n: "There was a new flower stall in Paulownia Mall. A small wooden cart with buckets of flowers that nobody had seen arrive, run by a young woman in a pink dress and a red jacket, with long brown hair in a braid tied with a pink ribbon, who was selling yellow lilies for less than they could possibly cost." },
      { n: "Cloud stopped dead in the walkway when he saw her. Solar walked into his back. It was like walking into a wall with a sword on it." },
      { s: 'aerith', f: 'happy', t: "Oh! Hello again. Want to buy a flower? They're only one gil. Or one of whatever you have here. Yen? I'll take yen." },
      { s: 'cloud', f: 'surprised', t: "...Aerith." },
      { s: 'aerith', f: 'happy', t: "You remembered! I'm so flattered. Did you write me down? You did, didn't you. I can tell. You've got a pen-shaped look." },
      { n: "She smiled at him like the sun coming out, and then turned that smile on Solar, and Solar felt it the way you feel a warm hand on your back, unexpected, kind, a little too knowing." },
      { s: 'aerith', f: 'happy', t: "And you must be the bodyguard's bodyguard. Somebody has to keep him out of trouble. I tried it for a while. He's exhausting. In a sweet way." },
      { choose: [
        { t: "It's a full-time job.", notes: 3, then: [
          { s: 'aerith', f: 'happy', t: "Oh, I know. Does he still do the thing where he says \"not interested\" and then follows you anyway?" },
          { s: 'solar', f: 'neutral', t: "Every time." },
          { s: 'cloud', f: 'flustered', t: "I'm standing right here." }
        ] },
        { t: "How do you know Cloud?", notes: 2, then: [
          { s: 'aerith', f: 'happy', t: "He fell through my church roof once. Into my flowers. I'd been growing them for years and he landed right in the middle and said \"...Hi.\" We've been friends ever since. I made him pay me back. In dates." }
        ] }
      ] },
      { s: 'aerith', f: 'neutral', t: "The little girl in the coat sent me here. She said there'd be people who needed flowers. I said everybody needs flowers. She said, \"Not everybody gets to keep them.\" And then sorry. And then she was gone." },
      { s: 'aerith', f: 'neutral', t: "I liked her. She had sad shoulders. Like you." },
      { n: "Solar didn't know what to say to that. She looked at her own shoulders, which she had pulled back, and up, the way she always did, and Aerith laughed, softly, as if that proved it." },
      { s: 'aerith', f: 'happy', t: "Tifa's here too, isn't she? I could feel it. She's always somewhere close to him. Like the moon." },
      { s: 'aerith', f: 'neutral', t: "We're friends, you know. Tifa and I. People always expect us not to be. Because of him. As if he's a prize at a festival." },
      { n: "Cloud, beside her, had gone completely still. He was looking at Aerith the way he'd looked at the stars by the river when Tifa talked about them: as if he were sure of her, absolutely sure, and sure of nothing else about himself at all." },
      { choose: [
        { t: "He's lucky to have you both.", notes: 3, then: [
          { s: 'aerith', f: 'happy', t: "He is! Tell him that. Tell him every day. He forgets. Not on purpose." }
        ] },
        { t: "Cloud. Say something.", notes: 2, then: [
          { s: 'cloud', f: 'neutral', t: "...It's good to see you. That's... that's all I've got." },
          { s: 'aerith', f: 'happy', t: "That's plenty! That's a whole speech, for you. I'm going to put that in a vase." }
        ] }
      ] },
      { n: "She pressed a yellow lily into Solar's hand before they left, and another into Cloud's, and wouldn't take any money, and when Solar looked back from the escalator Aerith was rearranging her buckets, humming something, and Cloud was still standing in the walkway with the lily held in front of him in his gloved fist like a sword he didn't know how to swing." }
    ] },

    { after: '9/5', title: '5: one true thing', place: 'Iwatodai Station · Taxi Stand', scene: [
      { music: 'tender' },
      { n: "He'd been avoiding both of them for a week. Solar knew because both of them had texted her. Tifa, politely, asking if Cloud was all right, he'd missed dinner at the flat three times. Aerith, less politely, with eleven flower emojis and the words is he HIDING from us??? And he was. At the taxi stand. With his sign and his sword and his notebook and an expression like a man in a siege." },
      { s: 'cloud', f: 'serious', t: "Don't." },
      { s: 'solar', f: 'neutral', t: "I didn't say anything." },
      { s: 'cloud', f: 'serious', t: "You were going to. They both want something from me. I don't know what. I don't know what I'm supposed to... I keep thinking I'm supposed to choose. Like that's what happens. Like in a story." },
      { s: 'cloud', f: 'sad', t: "And I can't. Because I don't know which of my memories of either of them are mine. I remember the water tower and I don't know if I was there. I remember the church and I know I was there and I don't know who I was when I was there." },
      { s: 'cloud', f: 'serious', t: "So. Solar. You tell me. You pick. You're good at reading people. Just tell me which one and I'll do it." },
      { choose: [
        { t: "No.", notes: 3, then: [
          { s: 'cloud', f: 'surprised', t: "...No?" },
          { s: 'solar', f: 'neutral', t: "I'm not choosing for you. Nobody gets to choose for you. That's the whole problem, isn't it? Somebody already did that once." },
          { n: "He stared at her. It went in. She saw it go in, the way you see a key go into a lock, and turn, and catch on something old." }
        ] },
        { t: "You don't have to choose anything.", notes: 2, then: [
          { s: 'cloud', f: 'neutral', t: "That's what everybody says. And then they wait." }
        ] }
      ] },
      { s: 'solar', f: 'neutral', t: "But I'll make you do something else. Go and say one true thing to each of them. Just one. Something you're sure of. Not a promise. Not a choice. Just one thing that's yours." },
      { s: 'cloud', f: 'serious', t: "...That's worse. That's so much worse." },
      { s: 'solar', f: 'neutral', t: "I'll come with you." },
      { place: 'Iwatodai Strip', time: 'Evening' },
      { n: "They were both at the flat by the station when Solar knocked. Tifa was cooking. Aerith was sitting on the counter, which Tifa kept telling her not to do, eating the vegetables as Tifa cut them. They both looked up when the door opened and Cloud came in behind Solar like a man coming into a dentist's office." },
      { n: "And Solar, standing in the little doorway of the little kitchen, with the steam and the knife on the board and the two of them looking at him, felt the floor go out from under her." },
      { bg: 'flashback-frat-party' },
      { dark: true },
      { music: 'mystery' },
      { n: "A party. A house so full of people the walls were sweating. Bass coming up through the floorboards into her shoes. Red cups. A smell of beer and something sweet and somebody's cologne, and lights strung across the ceiling in colors that made everybody look like someone else." },
      { n: "Two boys in one room. One in the kitchen doorway, warm, laughing at something, his whole face open, who looked up when she came in and lit up like he'd been waiting all night for exactly her. And one on the stairs, in the dark, not laughing, not looking, a cup going warm in his hand, who didn't move at all when she came in, which was how she knew he'd seen her first." },
      { n: "And the whole room, it felt like, watching. Waiting to see which way she'd walk. As if that were the only question anybody had ever wanted her to answer. As if she were a door, and they were both standing at it, and somebody else would decide which one got to go through." },
      { n: "She'd walked out onto the porch. Alone. Into the cold. She remembered the cold. She remembered being furious, and not knowing at whom." },
      { bg: null },
      { dark: false },
      { music: 'tender' },
      { n: "The kitchen came back. The steam. Tifa's knife, stopped. Aerith with a piece of carrot halfway to her mouth. Solar had a hand flat on the doorframe and her heart going hard, and she didn't know whose faces those were, the boy in the doorway and the boy on the stairs, she couldn't see them, she could only see how it felt to be stood between them, and it felt like this, exactly like this, like a kitchen full of people waiting for a man to pick." },
      { n: "She didn't want that for them. She didn't want it for him. She'd walked out onto a porch once to get away from it. She stepped back out of the doorway instead, into the hall, and left him standing in the kitchen with his one true thing." },
      { n: "She heard it through the wall. He said it to Tifa first. Not loud. Something about the water tower. That he didn't know if he'd been there, but he knew she had, and that when he couldn't remember who he was, he remembered her window, across from his, with the light on. That it was the one thing in Nibelheim he was sure was real." },
      { n: "There was a long silence. Then Tifa said, very quietly, that she'd always left it on. On purpose. Every night. In case." },
      { n: "And then he said something to Aerith. Solar couldn't hear what. It was short. Aerith laughed, and the laugh broke in the middle, and she said, \"You big idiot, that's the nicest thing you've ever said,\" and then something Solar did hear, later, when she was already at the door, \"That's all any of us get to keep, Cloud. One true thing. It's enough. I promise you it's enough.\"" },
      { choose: [
        { t: "(Wait outside on the step.)", notes: 3, then: [
          { n: "She waited outside on the step in the warm September dark. He came out twenty minutes later and sat down next to her without a word. His face was wet. He didn't wipe it. After a while Tifa came out and sat on his other side. After a while longer, Aerith came out and sat on the step below them, and leaned back against Tifa's knees, and the four of them sat there watching the station lights, not choosing anything at all." }
        ] },
        { t: "(Go home. Let them have the night.)", notes: 2, then: [
          { n: "She went home. On the monorail she sat with her forehead against the window and her phone in her hand, and the phone buzzed, once, and it was Cloud, and it said ok. and then, a minute later: thanks. and then, much later, after midnight: who were the two boys. you went somewhere in the doorway. you looked like i do. She didn't answer. She didn't know." }
        ] }
      ] }
    ] },

    { after: '9/19', title: '6: zack', place: 'Iwatodai Station · Platform', time: 'Evening', scene: [
      { music: 'night' },
      { n: "The headaches were getting worse. Solar found him on the station platform at dusk with his back against a pillar and the heels of both hands pressed hard into his eyes, the way you'd hold a door shut against a wind. The sword was leaning beside him. Commuters were stepping around him the way they stepped around everything here they didn't want to see." },
      { s: 'cloud', f: 'sad', t: "...There's a guy. In my head. Black hair. Big sword. My sword. He's laughing." },
      { s: 'cloud', f: 'sad', t: "He says, embrace your dreams. And then he's gone. And I'm carrying his sword. And I'm wearing his uniform. And I'm telling people his stories like they happened to me." },
      { s: 'cloud', f: 'serious', t: "Solar. I don't think I'm who I think I am. I think I'm walking around in somebody else's life because mine wasn't big enough to carry." },
      { n: "He said it very quietly. Like a confession he'd been afraid of for a long time, said out loud for the first time to see if it would kill him. It didn't. He seemed almost disappointed." },
      { n: "And Solar sat down on the cold platform next to him and felt it land in her like a stone in a pond, the rings going out and out. Somebody else's life. Two surnames in her mouth on the first night, both trying to come up, and she'd kept both behind her teeth. Three, sometimes, at night, though she'd never said so. A hairpin her hands knew how to use and a needle they knew how to hold and a keyboard they knew how to play, and none of them had come with a name attached." },
      { choose: [
        { t: "You're Cloud. That's enough for me.", notes: 3, then: [
          { s: 'cloud', f: 'neutral', t: "...You say that like it's simple." },
          { s: 'solar', f: 'neutral', t: "It's the first thing you told me. Like it was the one thing you were sure of." },
          { n: "He looked at her for a long time. The headache seemed to ease a little. His hands came down from his eyes." }
        ] },
        { t: "Who was he?", notes: 2, then: [
          { s: 'cloud', f: 'neutral', t: "...Zack. His name's Zack. I know that much. I know it the way I know my own. Better." },
          { s: 'cloud', f: 'sad', t: "He was my friend. He did something for me. I don't remember what. I just know I'm only standing here because he isn't." }
        ] },
        { t: "I don't think I'm who I am either.", notes: 3, then: [
          { s: 'cloud', f: 'surprised', t: "..." },
          { s: 'solar', f: 'neutral', t: "I woke up in a tower in April with no name except the first one. My hands know things I never learned. Sometimes I think I'm three people standing very close together." },
          { n: "He turned his head and looked at her, really looked, with those strange bright eyes, and something went across his face that she'd never seen on it before. Not pity. Recognition. The look of one person lost in a forest hearing another one, somewhere off in the trees, call out." },
          { s: 'cloud', f: 'neutral', t: "...Huh. So it's not just me." }
        ] }
      ] },
      { s: 'cloud', f: 'neutral', t: "The night I fell through, I was standing at the edge of something. I don't know what. A drop. A choice. If I went down, I'd find out what was real. All of it. Who I was, under his uniform." },
      { s: 'cloud', f: 'sad', t: "And I didn't want to know. I didn't want to find out there was nothing under it. And then it went green, and a kid in a coat said I could get off here." },
      { s: 'cloud', f: 'neutral', t: "...What would you do. If you were standing at an edge like that. And somebody said you could just get off instead." },
      { choose: [
        { t: "I think I already did get off. I think that's how I got here.", notes: 3, then: [
          { s: 'cloud', f: 'surprised', t: "..." },
          { s: 'cloud', f: 'neutral', t: "...Then we're both on the wrong platform. Okay. At least there's two of us on it." }
        ] },
        { t: "I'd want to know. Even if it was nothing.", notes: 2, then: [
          { s: 'cloud', f: 'neutral', t: "Easy to say." },
          { s: 'solar', f: 'neutral', t: "It isn't. That's why I said it." }
        ] },
        { t: "I don't know.", notes: 1, then: [
          { s: 'cloud', f: 'neutral', t: "...Yeah. Me neither. Good. I'd have hated it if you knew." }
        ] }
      ] },
      { n: "A train came in. People got off. People got on. The doors shut. Cloud didn't move. He sat on the cold platform next to her until the next one came, and the one after that, and when the sky had gone fully dark he said, very quietly, without looking at her, \"Thanks for not saying it'll be okay,\" and stood up, and picked up a sword that might not have been his, and put it on his back anyway, because it was what he had." }
    ] },

    { after: '10/15', title: '7: the voice', place: 'Port Island · Back Streets', time: 'The Dark Hour', scene: [
      { place: 'Port Island · Back Streets · The Dark Hour', time: 'The Dark Hour' },
      { dark: true },
      { music: 'mystery' },
      { n: "The green hour, and Cloud was on his knees in the middle of a street full of coffins with both hands clamped to the sides of his head, and his sword lying on the asphalt beside him like a dropped fork." },
      { n: "Solar had found him because Tifa had called her at 11:58 from the flat, in a voice Solar had never heard her use, high and fast, and said he'd gone out an hour ago and his phone was off and Aerith had a feeling. Solar had gone out with the Evoker. She hadn't told anyone. She'd find out later that Tifa had gone out too, the other way, and Aerith had stayed by the window, and that between the three of them they'd covered half of Port Island." },
      { s: 'cloud', f: 'sad', t: "He's here. He's talking. I can't make him stop." },
      { n: "Solar couldn't hear anything. Just the hum of the green hour, the silence where the city should be, and somewhere far off, a long way down the bay, very faint, the sound of a train." },
      { s: 'cloud', f: 'sad', t: "He says I'm a puppet. That I'm nothing. That none of my memories are real. That I should come with him and stop pretending to be a person. That it'd be so much easier." },
      { s: 'cloud', f: 'sad', t: "He says there's a train. He says I could just get on and never have to remember anything again." },
      { choose: [
        { t: "Cloud. Look at me. What's my name?", notes: 3, then: [
          { s: 'cloud', f: 'sad', t: "...Solar." },
          { s: 'solar', f: 'neutral', t: "And yours?" },
          { s: 'cloud', f: 'neutral', t: "...Cloud. Cloud Strife." },
          { n: "He said it like a rope he was pulling himself up. Hand over hand. Name over name. Tifa. Aerith. The grandmother with the dog. The taxi driver with the coffee. Solar. He said them all, kneeling in the green, in order, like a list in a notebook, and with every one his hands came a little further down from his head." }
        ] },
        { t: "(Hold his face in your hands.)", notes: 3, then: [
          { n: "She knelt in the street and took his face in both hands and made him look at her, and didn't say anything at all. She just stayed. Until his eyes found her. Until they stayed found." },
          { s: 'cloud', f: 'sad', t: "...You're real. You're real, right?" },
          { s: 'solar', f: 'neutral', t: "You wrote me down." },
          { s: 'cloud', f: 'neutral', t: "...First page." }
        ] },
        { t: "He's lying. Whoever he is.", notes: 2, then: [
          { s: 'cloud', f: 'serious', t: "How do you know?" },
          { s: 'solar', f: 'neutral', t: "Because he's telling you to get on a train. Nobody who wants you to be a person tells you to do that." }
        ] }
      ] },
      { n: "Running footsteps on the asphalt. Tifa, coming round the corner at a dead sprint, hair loose, fists up, who saw them and stopped, and saw his face, and came the rest of the way at a walk, and knelt down in the street on his other side without a word and put her hand flat between his shoulder blades." },
      { n: "The voice faded when the green did. Cloud sat on the curb in the ordinary night between them, sweating, shaking, his sword across his knees, while a man who had been a coffin a second earlier walked past with a convenience store bag and gave the three of them a very long look." },
      { s: 'cloud', f: 'neutral', t: "...Every time he tells me I'm nothing, someone reminds me who I am. Tifa. Aerith. Now you." },
      { s: 'cloud', f: 'sad', t: "I keep getting saved by people who don't owe me anything." },
      { s: 'tifa', f: 'neutral', t: "That's not how it works, Cloud. Nobody's keeping score. We just come." },
      { choose: [
        { t: "That's what friends are.", notes: 3, then: [
          { s: 'cloud', f: 'neutral', t: "...Writing that down." }
        ] },
        { t: "You'd do the same for us.", notes: 2, then: [
          { s: 'cloud', f: 'neutral', t: "...Yeah. I would. That one I know." }
        ] }
      ] }
    ] },

    { after: '11/5', title: '8: wall market', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
      { music: 'joy' },
      { n: "It started because Club Escapade was having a costume night, and the bouncer who sometimes paid Cloud in yakitori to stand by the door looking enormous had said, laughing, that the prize was ten thousand yen and he'd pay double to see the sword guy in a dress, and Aerith had heard about it, and that had been the end of everyone's dignity." },
      { ifRank: { aphrodite: 1 }, then: [
        { n: "Aerith had told Tifa. Tifa had, for reasons she refused to explain, told Aphrodite. And Aphrodite had arrived at the dorm with a suitcase of cosmetics and a dress the color of a sunset and an expression of pure holy purpose." },
        { s: 'aphrodite', f: 'happy', t: "Oh, darling. Oh, I know EXACTLY what nobody would expect. Sit. Sit down. Stop looking at the door. The door can't save you." }
      ], else: [
        { n: "Aerith had told Tifa. Tifa had told Yukari. Yukari had told the whole girls' floor of the dorm. And by eight o'clock there was a wig, a dress the color of a sunset, a suitcase of borrowed makeup, and four girls standing over Cloud in the lounge with the expressions of surgeons." }
      ] },
      { n: "Two hours later Cloud Strife was sitting in front of the big mirror in the dorm lounge in a long blue dress, with a wig of long blond hair in two braids, and his face done, delicately, beautifully, in a way that made Junpei walk into the doorframe." },
      { s: 'cloud', f: 'flustered', t: "...I've done this before. I don't know when. But I've done this before." },
      { s: 'aerith', f: 'happy', t: "You HAVE. You did, Cloud. You absolutely did. Oh, I can't believe you remember that. I've been waiting so long for you to remember that." },
      { n: "And he did remember it. Solar watched him. That was the strange thing. He sat in the mirror in the dress and a memory came up into his face, all the way, whole, clear, and it was his. Unmistakably his. Somewhere called Wall Market. Aerith laughing. Tifa in trouble. He'd done this for her. Nobody else had ever done it. Nobody else's story had it in." },
      { s: 'cloud', f: 'surprised', t: "...That was me. That one was me. That's... that's not his. That's mine." },
      { choose: [
        { t: "You look incredible, Cloud.", notes: 2, then: [
          { s: 'cloud', f: 'flustered', t: "...Not interested." },
          { n: "But his ears were bright red under the wig, and he looked at himself in the mirror for a long time with a face like a man finding his own handwriting in a book he'd thought was somebody else's." }
        ] },
        { t: "Of course it was you. Nobody else would agree to this.", notes: 3, then: [
          { s: 'tifa', f: 'happy', t: "She's right. There's no way Zack would've put on the dress. Zack would've talked his way past the door." },
          { s: 'cloud', f: 'neutral', t: "...Zack would've talked his way past the door. Yeah. He would have." },
          { n: "He laughed. Actually laughed, in a wig, in a dress, in a dorm lounge, the first real laugh Solar had ever heard from him, short and surprised, like a sneeze. Aerith clapped her hands over her mouth. Tifa looked away fast, and her eyes were wet." }
        ] },
        { t: "(Take a picture.)", notes: 2, then: [
          { s: 'cloud', f: 'serious', t: "Solar. Delete it." },
          { n: "She did not delete it. Junpei, from the doorway, also took one. Cloud would spend the next two weeks trying to find out where all the copies were. There were nine." }
        ] }
      ] },
      { s: 'aerith', f: 'happy', t: "Okay! Rule for tonight. If anyone at the club asks your name, you have to say a girl's name. A pretty one. Go. Pick." },
      { choose: [
        { t: "Cloudia.", notes: 3, then: [
          { s: 'cloud', f: 'serious', t: "...Absolutely not." },
          { s: 'aerith', f: 'happy', t: "Cloudia! Oh, it's perfect. It's PERFECT. Tifa, write it down. He's not allowed to write it down. We're writing it down." }
        ] },
        { t: "He should pick his own.", notes: 2, then: [
          { s: 'cloud', f: 'neutral', t: "...Thank you. I'm picking nothing. I'm going to stand there and look at people until they leave." },
          { s: 'tifa', f: 'happy', t: "That's literally what you did last time." }
        ] }
      ] },
      { n: "He won the costume contest. He did not smile once. He stood on the little stage at Club Escapade under the lights in the blue dress with his arms folded and an expression of total, murderous dignity, and the crowd lost its mind, and Tifa and Aerith screamed louder than anyone." },
      { n: "On the walk home, still in the dress, heels hooked on two fingers, wig in his other hand, he said, very quietly, \"...That was fun,\" like a man admitting to a crime, and then, after a block, \"It was mine. That whole thing was mine. I want to write it down before it goes.\" And he sat down on a bench on the Strip at midnight in a ball gown and wrote for twenty minutes, and none of them said a word, and Aerith held the streetlight steady with her eyes so he could see the page." }
    ] },

    { after: '11/26', title: '9: the list', place: 'Iwatodai Station · Platform', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "The station, at dusk, in late November. The same platform as the night he'd said I don't think I'm who I think I am. He'd asked her to meet him here. He was already sitting on the bench, with the notebook in his lap, closed, both hands on it." },
      { s: 'cloud', f: 'neutral', t: "I've been writing things down. Every morning. You know that. Names. Faces. One thing." },
      { s: 'cloud', f: 'neutral', t: "It's a different list now. It used to be so I didn't lose people. Now it's so I know which ones are mine. Things I'm sure I did. Things nobody told me I did." },
      { n: "He opened it. The first half of the notebook was names. The second half was a different hand, steadier: the dog in the car park. the grandmother's curry. the water tower — tifa says yes. the church roof — aerith says yes, and that i said hi. the dress. the dress. the dress. the step outside the flat, all four of us." },
      { s: 'cloud', f: 'neutral', t: "Yours is first. On the names list. Every day. I write it first so I'm sure it's there before I write anything else." },
      { s: 'cloud', f: 'neutral', t: "...I need to know what that means. Why it's first. I don't want to get it wrong. I've gotten a lot of things wrong." },
      { choose: [
        { t: "It means I'm your friend. The one you can always find.", notes: 3, then: [
          { s: 'cloud', f: 'neutral', t: "...The one I can always find." },
          { s: 'cloud', f: 'neutral', t: "Yeah. That's it. That's exactly what it is." },
          { n: "He let out a breath that seemed to go on and on, like someone setting down a sword they'd been holding at arm's length for a very long time, and found out they'd been allowed to put it down the whole time." }
        ] },
        { t: "It means I was the first person here who didn't need you to be anyone.", notes: 3, then: [
          { s: 'cloud', f: 'surprised', t: "..." },
          { s: 'cloud', f: 'neutral', t: "...Yeah. You bought me a rice ball. You didn't ask what I was. You asked about the sword." },
          { s: 'cloud', f: 'neutral', t: "Everybody else always wanted SOLDIER. First Class. You just wanted to know if I was hungry." }
        ] },
        { t: "It means you were scared of losing the first person you met.", notes: 2, then: [
          { s: 'cloud', f: 'neutral', t: "...That too. Yeah. That's probably most of it." }
        ] }
      ] },
      { s: 'cloud', f: 'neutral', t: "Tifa's going home. When the doors open. She has the bar. The kids. She said she'd keep the light on." },
      { s: 'cloud', f: 'sad', t: "Aerith says she's going home too. She said she doesn't get to stay long, wherever she goes. She said it like it was fine. I don't know what she meant. She wouldn't tell me." },
      { s: 'cloud', f: 'neutral', t: "And I'm going. I'm going back to that drop. The edge. And I'm going to go down it and find out what's under the uniform. Even if it's nothing much. Even if it's just a kid from Nibelheim who never made SOLDIER." },
      { choose: [
        { t: "A kid from Nibelheim who put on a dress to save his friend.", notes: 3, then: [
          { s: 'cloud', f: 'neutral', t: "...Yeah. Him. He's not nothing. I'm starting to think he's not nothing." }
        ] },
        { t: "Take the notebook with you.", notes: 2, then: [
          { s: 'cloud', f: 'neutral', t: "I'm taking it. I'm taking it everywhere. If I forget my own name I'll open it and it'll say yours, and then mine, and I'll work it out from there." }
        ] }
      ] },
      { n: "A train came in. They didn't get on it. They sat on the bench until the platform lights came on, and he showed her every page, every name, every one true thing, and she read them all, and on the last page, at the bottom, in the steadiest hand of all, he'd written: solar. counts the exits. stays anyway." }
    ] },

    { after: '12/17', title: '10: materia', place: 'Iwatodai Station · Taxi Stand', scene: [
      { music: 'tender' },
      { n: "December. Snow on the taxi stand roof, thin and wet, and the drivers stamping their feet by their open doors. The same pillar where she'd first found him, with his cardboard sign, which had been rained on and dried out so many times it was soft as cloth, and someone, Aerith, had added a flower to the corner in pink marker." },
      { n: "He held out his hand, closed. In his palm, when he opened it, was a glass sphere the size of a marble, green, glowing faintly from somewhere deep inside, the way a firefly glows in a closed jar." },
      { s: 'cloud', f: 'neutral', t: "Materia. Restore. It heals. I've had it for... I don't remember how long. A long time. Since before the bad part." },
      { s: 'cloud', f: 'neutral', t: "I want you to have it. In case I'm not around next time something hurts." },
      { choose: [
        { t: "I'll keep it close. Always.", notes: 3, then: [
          { s: 'cloud', f: 'neutral', t: "Good. That's... good." }
        ] },
        { t: "What happened to \"not interested\"?", notes: 2, then: [
          { s: 'cloud', f: 'flustered', t: "...I lied. Don't tell anyone." }
        ] }
      ] },
      { s: 'cloud', f: 'neutral', t: "That's the first thing on my list I'm sure about. Of everything I have. That one's mine. I bought it. With money I earned. In a town I'm sure I was in. I've checked." },
      { s: 'cloud', f: 'neutral', t: "So I wanted to give you something that was actually mine. Not his. Not borrowed. The rest of what I carry, I'm still finding out." },
      { n: "Solar closed her hand around it. It was warm. Warmer than glass had any right to be, like a pebble that had been sitting in the sun, and it pulsed, very faintly, against her palm, like a second heartbeat." },
      { s: 'cloud', f: 'neutral', t: "I came here running from my own head. Turns out you can't. It comes with you." },
      { s: 'cloud', f: 'neutral', t: "But you can write it down. Bit by bit. The parts you're sure of. And when somebody tells you you're nothing, you open the book." },
      { choose: [
        { t: "And I'm on the first page.", notes: 3, then: [
          { s: 'cloud', f: 'neutral', t: "First page. Every day. Even when I'm back. Even if I forget why." },
          { s: 'cloud', f: 'neutral', t: "...I won't forget why." }
        ] },
        { t: "You're on mine too. If I ever make a list.", notes: 3, then: [
          { s: 'cloud', f: 'surprised', t: "...Yeah?" },
          { s: 'solar', f: 'neutral', t: "Cloud Strife. Big sword. Not interested. Interested." },
          { s: 'cloud', f: 'flustered', t: "...That's accurate. That's annoyingly accurate." }
        ] }
      ] },
      { n: "They stood at the taxi stand in the snow and watched the trains come in, and the taxi driver who always parked at the front of the rank brought them each a can of hot coffee from the machine without being asked, and Cloud thanked him by name, and the driver looked surprised, and pleased, and Cloud took out the notebook and showed him, and there it was, his name, on page four." },
      { n: "The materia glowed in Solar's coat pocket all the way home, warm as a hand, and that night she put it on her desk beside the other small things people had given her that year, a little museum of things people had decided were theirs to give, and lay in bed looking at them in the dark, and thought that she'd never been anywhere, in any life, where so many people had handed her something they were sure of." }
    ] }
  ],
  afterMax: [
    { title: 'free hour', place: 'Iwatodai Station · Taxi Stand', scene: [
      { music: 'day' },
      { n: "There were no jobs today. The cardboard sign said ODD JOBS. ANY JOB. and somebody had added, underneath, in Aerith's handwriting, (TODAY: NONE. HE'S RESTING.), and Cloud was sitting on the taxi stand bench with nothing to do, which he was visibly terrible at." },
      { s: 'cloud', f: 'neutral', t: "...What do people do. With an hour. With nothing in it." },
      { choose: [
        { t: "(Sit with him and do nothing.)", notes: 3, then: [
          { n: "She sat with him and they did nothing for a whole hour, watching taxis, and at the end of it he said, with deep suspicion, \"That was all right,\" and wrote it down." }
        ] },
        { t: "They get ice cream.", notes: 2, then: [
          { s: 'cloud', f: 'neutral', t: "...In December." },
          { s: 'solar', f: 'neutral', t: "Especially in December." },
          { s: 'cloud', f: 'neutral', t: "Okay. Okay. One ice cream. Then I'm writing that down too." }
        ] }
      ] }
    ] },
    { title: 'two wheels', place: 'Iwatodai · Riverside', scene: [
      { music: 'tender' },
      { n: "Sebastian had a motorcycle. Cloud had found out. Cloud had, Solar discovered, very strong feelings about motorcycles, and had spent an entire Saturday at the repair shop by the harbor with Sebastian not talking, the two of them handing each other tools in total silence for six hours, which both of them later described as the best conversation they'd had all year." },
      { s: 'cloud', f: 'neutral', t: "Get on. I'll go slow." },
      { choose: [
        { t: "(Get on.)", notes: 3, then: [
          { n: "He did not go slow. He went along the riverside road at a speed that made the streetlights blur into a single gold line, with Solar holding on and laughing into his back, and at the end of the road he stopped, and cut the engine, and said, over his shoulder, very quietly, \"I've done this before. With you on the back. I'm sure.\" And she said he hadn't. And he said he knew. And that it felt like it anyway. And that he was going to count it." }
        ] },
        { t: "Is this Sebastian's?", notes: 2, then: [
          { s: 'cloud', f: 'neutral', t: "He said I could. He said, \"don't scratch it.\" Then he said, \"actually, scratch it, it builds character.\" I like him." }
        ] }
      ] }
    ] }
  ]
});
