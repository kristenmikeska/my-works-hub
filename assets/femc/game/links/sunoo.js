/* Sunoo · ? Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Searcher (Hoax), friendship. Kim Sunoo: Jungwon's friend and council secretary, who runs Yeobo's Cafe and insists on doing
   it alone because it's his duty to his grandmother to run her business perfectly; sunshine to everyone, the group's mediator,
   the one who worries out loud about whether Jungwon has eaten, and who told Solar, as Jungwon's friend and hers, that she
   should run. He crossed with Jungwon's friends at Yeobo's on the Strip (11/7 story event 'a4-yeobos', plot doc §7: star 6);
   rank 1 is the first afternoon after, when she comes back alone. The Yeobo's job (data/job-scenes.js) covers training,
   latte art, closing and the red croissant; nothing here repeats those beats.
   Canon used (HOAX): the croissant recommendation, "Name for the order?" / "Solar!", seven croissants and seven coffees,
   "do you think I would be wasting my time?" / "go for it, even if you don't win", the late-night texts ("hey solar its ok!
   i am always here to talk!", "as his friend and yours"), Jungwon fainting, the hallway text, "niki, cut it out already",
   "it would be really quiet if it wasnt for this group of friends", Sunoo wanting to run once and being too shy to give the
   speech, helping her with posters and the speech, sending her shopping with Jungwon on purpose. Nothing here decides Hoax's
   election, homecoming or romances; time back home stays unclear (Kat's ruling).
   Link-local flags (all optional flavor, read only inside this file): sunoo-recommend (r1), sunoo-asked-need (r3),
   sunoo-five-am (r4), sunoo-photo (r5), sunoo-no-smile and sunoo-speech (r6), sunoo-crime (hangout). The last afterMax reads
   the solstice's route-H / route-true flags. Rank dates 8–10 sit earlier than the first draft (12/29, 1/9, 1/17) so the
   after-MAX scenes have room to play before the end of January.
   Texting voice: sunooshine, lowercase, "!!!", "dw", ":)". Arcana: '?' (open question, plot doc §16.6). */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'sunoo', name: 'Kim Sunoo', short: 'Sunoo', arcana: '?', numeral: '', from: 'Hoax',
  kind: 'searcher', world: 'H', romance: null,
  starts: '11/7', gate: { H: 6 },
  home: { area: 'strip', spot: "Yeobo's Cafe", slot: 'after', days: [0, 2, 4, 6],
          hint: "Afternoons behind the counter at Yeobo's Cafe on the Strip, which wasn't on the Strip before November." },
  approach: "There's a café on the Strip that wasn't there in October, wedged between the ramen shop and a shuttered pachinko parlor, with gold-fogged windows and a hand-lettered sign, and the boy behind the counter in a flowered apron waves at you through the glass with both hands like you're his favorite customer.",
  cast: { heeseung: 'Heeseung', sunghoon: 'Sunghoon', jay: 'Jay', jake: 'Jake', niki: 'Niki' },
  invite: {
    ask: [
      "solar!!! r u free? the croissants just came out and they're perfect and nobody's here to see them",
      "hiii :) come by the cafe? i'll make u something new. ur the taste tester",
      "jungwon hasnt eaten. help. please. come to yeobos and sit with him",
      "r u busy? i miss talking to u!! dw if u are!!",
      "slow day at the cafe!! come keep me company!!",
      "i tried a new recipe and it's either amazing or a crime. come decide",
      "niki is sitting on the counter again. i need a witness",
      "the newspaper man SMILED today. at me. come hear about it",
      "sunghoon is 'helping' at the register. please. i'm begging u",
      "it's raining and the windows went all gold and it's too pretty to look at by myself",
      "i saved u the window seat. i'm not asking i'm telling!! (unless ur busy) (dw)",
      "jake brought forty pictures of layla. i've seen all forty. u need to see them"
    ],
    ok: ["YAY!! ill save the window seat!!", "ok!!! :) see u soon!!", "perfect!! ur croissant is waiting!!", "!!!!! ok ok ok putting the kettle on", "yesss. name for the order? (i know it) (i just like asking)"],
    no: ["dw!!! next time!! :)", "thats ok!!! ill save u one for tmrw!!", "no worries!! eat something tho!!", "ok!! drink water!! i'll know if u dont", "aw ok :( ur croissant will wait for u. it's very patient"]
  },
  hangouts: [
    [
      { n: "It was a slow afternoon at Yeobo's. The rain on the Strip had kept everyone home, the gutters running and the shutters of the pachinko place ticking with it, and the café was empty except for an old man reading a newspaper by the window who'd been coming in every day since the café appeared and had never once asked where it came from." },
      { s: 'sunoo', f: 'happy', t: "He's my favorite. He orders the same thing every day and leaves exactly the right tip and never talks. He's like a cat." },
      { s: 'sunoo', f: 'neutral', t: "I asked him once if he remembered what used to be here. Before us. He looked at me for a really long time and said, \"A café.\" And went back to his paper." },
      { n: "Solar looked at the old man. The old man turned a page, very slowly, the way you'd turn a page in a house where someone was sleeping, and didn't look at either of them." },
      { choose: [
        { t: "(Help him wipe down the tables.)", notes: 3, then: [
          { s: 'sunoo', f: 'surprised', t: "Oh! You don't have to— oh, okay. Okay! Thank you!" },
          { n: "He let her. He watched her do it, and redid one table, very quietly, when he thought she wasn't looking, and then didn't redo the next one, which for Sunoo was a kind of surrender." }
        ] },
        { t: "Do you ever take a day off?", notes: 2, then: [
          { s: 'sunoo', f: 'neutral', t: "No! It's my grandmother's. I run it for her. It's my job to run it perfectly." },
          { s: 'sunoo', f: 'sad', t: "...I'm a little tired. Don't tell anyone." }
        ] },
        { t: "Maybe he's been here longer than you.", notes: 1, then: [
          { s: 'sunoo', f: 'surprised', t: "Don't SAY that. That's so creepy. I have to close up alone tonight." },
          { n: "He made her stay until the old man left, and then walked her to the door, and then, after a moment of visible thought, walked her to the corner." }
        ] }
      ] },
      { n: "The rain kept on. The coffee machine ticked as it cooled. Somewhere in the back the radio was playing a ballad very low, and Sunoo hummed along with it under his breath, slightly off, a man in an empty café on a wet afternoon who had decided it was a good afternoon anyway." }
    ],
    [
      { n: "Sunoo was trying a new recipe. That was what he called it. It was a croissant with something orange in the middle that he wouldn't name until she'd tasted it, set on a saucer in the exact center of the counter like evidence." },
      { s: 'sunoo', f: 'happy', t: "Okay! Eat it! Tell me the truth! Be honest! Be nice!" },
      { s: 'solar', f: 'neutral', t: "Which one?" },
      { s: 'sunoo', f: 'serious', t: "Both. At the same time. That's what friends are for." },
      { choose: [
        { t: "It's amazing.", notes: 2, then: [
          { s: 'sunoo', f: 'happy', t: "YAY! It's yuzu! Okay, I'm putting it on the menu. I'm naming it after you. The Solar." },
          { n: "The Solar went on the board in his round handwriting, with a little sun after it, and the newspaper man ordered one without looking up, which Sunoo took as a sign from God." }
        ] },
        { t: "It's a crime. A delicious crime.", notes: 3, flag: { 'sunoo-crime': true }, then: [
          { s: 'sunoo', f: 'happy', t: "That's the best review I've ever gotten. That's going on the sign." },
          { n: "It went on the sign. *A DELICIOUS CRIME,* in his round hand-lettering, with a little sun drawn after it. People ordered it out of curiosity. It sold out by four." }
        ] },
        { t: "There's too much yuzu.", notes: 1, then: [
          { s: 'sunoo', f: 'sad', t: "...There's too much yuzu." },
          { n: "He made another one with less. Then another one with less than that. The fourth one was right, and he knew it was right before she said so, from her face, and he put both fists in the air behind the counter like he'd won something." }
        ] }
      ] }
    ],
    [
      { n: "Niki was sitting on the counter, which he wasn't allowed to do, eating a croissant he hadn't paid for, which he also wasn't allowed to do, and Sunoo was standing in front of him with his hands on his hips like a man who had been here before and knew exactly how it ended." },
      { s: 'sunoo', f: 'serious', t: "Niki. Off. Now. Off the counter." },
      { s: 'niki', f: 'happy', t: "Hyung. Hyung. Solar's here. Hi, Solar. Hyung won't let me have fun." },
      { s: 'niki', f: 'happy-2', t: "Solar. Tell him. Tell him the counter's the best seat. You can see the whole Strip from here. You can see Jungwon pretending he's not walking over." },
      { choose: [
        { t: "(Take Niki's side.)", notes: 2, then: [
          { s: 'sunoo', f: 'surprised', t: "Solar! Not you too!" },
          { n: "Niki stayed on the counter for another four minutes, triumphant, and then got off on his own, and wiped the place he'd been sitting, without being asked, when he thought nobody was watching." }
        ] },
        { t: "(Take Sunoo's side.)", notes: 3, then: [
          { s: 'niki', f: 'sad', t: "...Fine. Fine. Two against one. That's not fair." },
          { s: 'sunoo', f: 'happy', t: "Thank you! Finally! Someone on the side of hygiene!" }
        ] },
        { t: "(Sit on the counter next to him.)", notes: 1, then: [
          { s: 'sunoo', f: 'surprised', t: "..." },
          { s: 'niki', f: 'happy-2', t: "YES. The counter club. We're a club now. Hyung, you can't kick out a club." },
          { s: 'sunoo', f: 'sad', t: "I'm going to tell my grandmother about both of you." }
        ] }
      ] },
      { n: "Jungwon did come in, about a minute later, pretending he hadn't been walking over, and Niki said *told you* with his mouth full, and Sunoo said *niki, cut it out already* in the voice of somebody who'd been saying it since they were children and fully expected to be saying it at their funerals." }
    ],
    [
      { n: "Jake had come in with his phone already out and already open to the right album, which was how Solar knew it was going to be a long afternoon, and he sat down across from her at the window table with the special gentleness of a boy about to show you his firstborn." },
      { s: 'jake', f: 'happy', t: "Okay. This is Layla. This is also Layla. This is Layla when she was small. This is Layla being judgmental. She's not judgmental, she's just thoughtful." },
      { s: 'sunoo', f: 'neutral', t: "He's shown me all of these. Every day. I could pick Layla out of a lineup." },
      { s: 'jake', f: 'happy-2', t: "You could pick her out of a lineup because she's the best one in the lineup, Sunoo." },
      { n: "There were forty of them. Solar counted. Somewhere around thirty, Jake went quieter, and scrolled slower, and stopped on one of the dog asleep in a patch of sun on a kitchen floor, and didn't swipe past it for a while." },
      { s: 'jake', f: 'sad', t: "...I hope somebody's walking her. She gets weird if nobody walks her." },
      { choose: [
        { t: "She sounds like she'd get along with my dog.", notes: 3, then: [
          { s: 'jake', f: 'surprised', t: "Nana! You remember Nana?" },
          { s: 'solar', f: 'neutral', t: "...I don't know. The name was just there." },
          { s: 'jake', f: 'happy', t: "We said our dogs should meet. You said yes. That counts. That's a contract." },
          { n: "Sunoo, behind the counter, had stopped drying the cup in his hands, and started again, and dried it for a lot longer than a cup needed drying." }
        ] },
        { t: "Show me the next one.", notes: 2, then: [
          { s: 'jake', f: 'happy-2', t: "Okay. Okay! This one's my favorite. No, this one." },
          { n: "He showed her the next one, and the one after that, and by the end the sad one had been forty pictures ago, which was, Solar suspected, exactly what he'd needed someone to do." }
        ] },
        { t: "(Look at Sunoo instead.)", notes: 1, then: [
          { n: "Sunoo caught her looking, and made a face like *I know,* and put a second croissant on Jake's plate without being asked, which was the only thing anybody in the room could do about a dog in another world." }
        ] }
      ] }
    ],
    [
      { n: "Sunghoon had been allowed behind the register. Nobody could say who had allowed it. Sunoo had gone into the back for four minutes to check the oven and come out to find him already in an apron, already leaning on one elbow, already telling the two ladies from the bookstore that they had the eyes of women who read a lot of poetry." },
      { s: 'sunghoon', f: 'neutral', t: "Two matcha lattes. On me. Not literally on me. Sunoo, put it on my tab." },
      { s: 'sunoo', f: 'serious', t: "You don't HAVE a tab." },
      { s: 'sunghoon', f: 'neutral', t: "Then open one. In my name. It's a good name. People trust it." },
      { n: "The bookstore ladies, who were somewhere north of sixty and had split one slice of cake every day since November, looked at each other, and then at him, and then laughed so hard one of them had to put her glasses on the counter." },
      { choose: [
        { t: "(Take the register back from him.)", notes: 3, then: [
          { s: 'sunghoon', f: 'surprised', t: "I was building a rapport." },
          { s: 'sunoo', f: 'happy', t: "You were building a TAB. Thank you, Solar. Thank you. You're my hero." }
        ] },
        { t: "Let him. They're having the time of their lives.", notes: 2, then: [
          { s: 'sunoo', f: 'sad', t: "...They are, though. Look at them." },
          { n: "They tipped four hundred yen, which was three hundred and eighty more than they'd ever tipped, and Sunghoon put it in the jar with the satisfaction of a man proving a point, and Sunoo let him, which was its own concession." }
        ] },
        { t: "Sunghoon. Does the flower thing ever work?", notes: 1, then: [
          { s: 'sunghoon', f: 'serious', t: "Every time but once. And the once was your friend, who threatened me with furniture." },
          { s: 'sunoo', f: 'happy', t: "It's never worked. Not one time. He keeps a list. The list is empty." }
        ] }
      ] }
    ],
    [
      { n: "Yeobo's shared a wall with the ramen shop, and the ramen shop's owner had decided, some time in the first week, that this was an act of war. He stood in his doorway in the afternoons with his arms folded and looked at the croissants in the window the way a farmer looks at a fox." },
      { n: "Sunoo had decided to win him over. He did it the only way he knew how, which was with a plate." },
      { s: 'sunoo', f: 'neutral', t: "Okay. You carry. I'll talk. If he yells, you smile. You have a really good smile for people who are yelling." },
      { choose: [
        { t: "(Carry the plate and smile.)", notes: 3, then: [
          { n: "The man didn't yell. He looked at the plate, and at Sunoo, who was bowing so deeply and so many times that it had become a sort of choreography, and at Solar, smiling, and took one croissant, and ate it in the doorway in three bites without changing his face." },
          { n: "The next day there was a bowl of ramen on Yeobo's back step with a lid on it. Nobody had seen it arrive. Sunoo ate half and saved her half, and put a note in the empty bowl when he returned it, in his round hand, with a sun drawn after it." }
        ] },
        { t: "Let me do the talking.", notes: 2, then: [
          { n: "She did the talking. She was polite and warm and said all the right things about neighbors, and the man listened to all of it, and then pointed at Sunoo, still bowing behind her, and said that one could stay." }
        ] },
        { t: "Why do you need him to like you?", notes: 2, then: [
          { s: 'sunoo', f: 'surprised', t: "Because he's the neighbor! You have to be nice to the neighbor. That's the first rule. My grandmother says." },
          { s: 'sunoo', f: 'sad', t: "...And because we're the ones who showed up in his street. Out of nowhere. I'd be mad too." }
        ] }
      ] }
    ]
  ],
  ranks: [
    { after: '11/8', title: '1: name for the order', place: "Iwatodai Strip · Yeobo's Cafe", time: 'After School', music: 'tender', scene: [
      { n: "Nobody could agree on when the café had arrived. Junpei swore it hadn't been there on Friday. Fuuka said she'd felt it at midnight, in the Dark Hour, a whole building tuning in like a radio station, warm and full of voices, and then six signals stepping out of it into the green one after the other, the last one dragging his feet. And on Saturday there it was, wedged between the ramen shop and the shuttered pachinko place, with its windows fogged gold and its hand-lettered sign in a language half the Strip couldn't read." },
      { n: "By the time anyone thought to go and look, one of the boys was already behind the counter in a flowered apron, turning on the coffee machine. That was what Mitsuru kept repeating, later, in the lounge, with real respect. *The building fell through the floor of the world and the first thing he did was open for business.*" },
      { n: "Solar came back on Sunday afternoon, alone, without Jungwon walking her anywhere, and stood across the street for longer than she'd admit to, half expecting it to be gone. It wasn't. The bell over the door went. The boy behind the counter looked up, and his whole face lit like a shop sign switched on at dusk." },
      { s: 'sunoo', f: 'happy', t: "Hello, welcome to the café! What can I get for you today?" },
      { n: "He said it in a voice with its customer polish on, bright and practiced. And then he heard himself say it to her, and his face did something under the brightness, a small quick fold, like a napkin going crooked." },
      { s: 'sunoo', f: 'sad', t: "...Sorry. Habit. You were here yesterday and I still said it like you were new." },
      { s: 'sunoo', f: 'happy', t: "You're not new! You're totally not new. It's fine! What would you like?" },
      { choose: [
        { t: "What do you recommend?", notes: 3, flag: { 'sunoo-recommend': true }, then: [
          { s: 'sunoo', f: 'surprised', t: "..." },
          { s: 'sunoo', f: 'happy', t: "The croissants. They're pretty big in size and loved by our regulars. I made them myself this morning. At five." },
          { n: "He said it carefully, the whole sentence, like a line he'd said before to someone standing in this exact spot and had been waiting a long time to say again." }
        ] },
        { t: "Whatever you think I'd like.", notes: 3, then: [
          { s: 'sunoo', f: 'happy', t: "A croissant. Definitely. You always get a croissant." },
          { s: 'sunoo', f: 'neutral', t: "You got seven once, for all your friends, and seven coffees. You lost at rock paper scissors and you had to pay for everybody. You were so sad about your wallet. You tried so hard not to look sad about your wallet." }
        ] },
        { t: "Just a coffee, please.", notes: 1, then: [
          { s: 'sunoo', f: 'neutral', t: "Okay! One coffee!" },
          { s: 'sunoo', f: 'happy', t: "...And a croissant. On the house. You can't come into Yeobo's and not have a croissant. It's against my grandmother's rules." }
        ] }
      ] },
      { s: 'sunoo', f: 'happy', t: "And the name for the order?" },
      { s: 'solar', f: 'neutral', t: "Solar." },
      { n: "His pen stopped on the order pad. For a second he didn't write anything. Then he wrote it, very slowly, very carefully, in round letters, and underlined it twice, and his eyes had gone bright and he blinked them hard and smiled through it like a man walking into wind." },
      { s: 'sunoo', f: 'happy', t: "Coming right up!" },
      { n: "She took the croissant to the window table. It was warm and enormous and flaky and she ate it too fast, the way she apparently always ate croissants, and somewhere halfway through it she had the strangest feeling that she was late for something. A meeting. A speech. A thing she'd been pushed into and didn't want, and had come in here first, to this café, to ask a stranger behind the counter if she'd be wasting her time." },
      { n: "The feeling went. The croissant didn't. She looked up and found him watching her from behind the till with his chin in his hand, the way you'd watch a plant you'd been told might not survive the winter put out a new leaf." },
      { s: 'sunoo', f: 'neutral', t: "Is it good?" },
      { choose: [
        { t: "It's perfect.", notes: 3, then: [
          { s: 'sunoo', f: 'happy', t: "YAY. Okay. Okay, that's all I needed today. I can close now. I'm not going to close. But I could." }
        ] },
        { t: "I came in here once and asked you for advice. Didn't I.", notes: 3, then: [
          { s: 'sunoo', f: 'surprised', t: "..." },
          { s: 'sunoo', f: 'sad', t: "...You did. You were so nervous. You said sorry three times before you even asked. You thought I'd laugh at you. I didn't laugh." },
          { s: 'sunoo', f: 'happy', t: "I told you to go for it. I'm glad you did. I'm still glad." }
        ] },
        { t: "Why did you open? After all that?", notes: 2, then: [
          { s: 'sunoo', f: 'neutral', t: "Because it's my job. It's my grandmother's café. I'm supposed to run it perfectly for her." },
          { s: 'sunoo', f: 'sad', t: "And if I stopped doing it here, I don't know what I'd be here. Just a boy in a weird town with an apron on." },
          { s: 'sunoo', f: 'happy', t: "This way I'm a boy in a weird town with a café. That's way better. That's practically a business plan." }
        ] }
      ] },
      { n: "He came around the counter to refill her water, which nobody had asked him to do, and stood by the table a moment longer than refilling took, and told her about the guesthouse by the station Mitsuru had found for them, which had a doorman, whom Niki had tried to tip, with a croissant." },
      { register: 'sunoo' },
      { s: 'sunoo', f: 'neutral', t: "Come back tomorrow? Or not tomorrow. Whenever. I'll be here. I'm always here. That's kind of the whole thing about me." },
      { n: "When she left he waved at her through the fogged glass with both hands, like she was a train pulling out, and kept waving until she was past the ramen shop. She turned around once to check. He was still waving." }
    ] },

    { after: '11/15', title: '2: the regulars', place: "Iwatodai Strip · Yeobo's Cafe", time: 'After School', music: 'joy', scene: [
      { n: "In a week, Yeobo's had acquired regulars. Sunoo kept a list of them on a sticky note behind the till, with their orders, in his round hand, and showed it to Solar like a man showing off photographs of his children." },
      { s: 'sunoo', f: 'happy', t: "The newspaper man, Americano, no sugar. The two ladies from the bookstore, matcha latte, split one cake. Fuuka! Hot chocolate, extra marshmallows, she pretends she doesn't want them. Junpei comes in and orders the most expensive thing and then can't afford it and I give it to him anyway." },
      { s: 'sunoo', f: 'neutral', t: "And your senpai with the silver hair came in and asked if we had protein. I said no. He looked so sad. Now I keep a carton of milk for him. Just for him. It has his name on it." },
      { n: "It did. *AKIHIKO-SUNBAE,* on a strip of masking tape, with a small drawing of a boxing glove that looked more like a mitten." },
      { choose: [
        { t: "Where am I on the list?", notes: 3, then: [
          { s: 'sunoo', f: 'surprised', t: "You're not on the list! You don't go on the list." },
          { s: 'sunoo', f: 'neutral', t: "The list is for people I have to remember. I don't have to remember you. I just know." }
        ] },
        { t: "You're good at this.", notes: 2, then: [
          { s: 'sunoo', f: 'flustered', t: "It's just a sticky note." },
          { s: 'sunoo', f: 'happy', t: "...It's a really organized sticky note, though. I'm the secretary. I'm good at lists. It's the only thing I'm allowed to be bossy about." }
        ] },
        { t: "Do you charge Junpei at all?", notes: 1, then: [
          { s: 'sunoo', f: 'serious', t: "I charge him in spirit." },
          { n: "Solar decided, privately, to pay Junpei's tab the next time she was in, and then, looking at the length of the sticky note's Junpei section, decided to think about it." }
        ] }
      ] },
      { n: "The bell went. Four boys in navy blazers and one letterman jacket came in like weather, all at once, loud, and filled the big table at the back with a scraping of chairs and the noise of people who'd known each other so long they no longer needed to finish sentences." },
      { n: "One of them peeled off from the rest, plucked the flower out of the little vase on the counter, and bowed with it, deeply, theatrically, to Solar, the way he had on the day they arrived, and, she was told, on a day at home she didn't remember at all." },
      { s: 'sunghoon', f: 'neutral', t: "Why hello. Again. I'm told you've forgotten me. I'm told it's my fault for not being more memorable." },
      { s: 'heeseung', f: 'neutral', t: "Sunghoon. What did I tell you. Every time. You have no common sense." },
      { choose: [
        { t: "(Take the flower.)", notes: 2, then: [
          { s: 'sunghoon', f: 'surprised', t: "...She took it. Did you see that? She took it. That's never happened." },
          { s: 'sunoo', f: 'serious', t: "She's being POLITE, Sunghoon. It's a POLITE take." }
        ] },
        { t: "Shove it somewhere unpleasant.", notes: 3, then: [
          { s: 'sunghoon', f: 'surprised', t: "..." },
          { n: "The whole table went silent. Then the boy in the letterman jacket put his head down on the table and laughed so hard his shoulders shook." },
          { s: 'jay', f: 'happy', t: "That's what her friend said! The first time! Almost word for word! She doesn't even remember and she still said it!" },
          { s: 'sunghoon', f: 'neutral', t: "...I do like them feisty." },
          { s: 'heeseung', f: 'serious', t: "SIT DOWN." }
        ] },
        { t: "(Put it back in the vase for him.)", notes: 2, then: [
          { s: 'sunghoon', f: 'sad', t: "Rejected. With grace. That's somehow worse." },
          { s: 'jake', f: 'happy', t: "That's the nicest anybody's ever turned you down, man. Frame it." }
        ] }
      ] },
      { n: "The youngest had already found her. He leaned on the counter beside her on his elbows, long-limbed and grinning, with the expression of someone who'd been saving something up all week and had decided this was the moment." },
      { s: 'niki', f: 'happy-2', t: "So. Solar. Is Jungwon coming today, or is he too busy being nervous about seeing you." },
      { s: 'niki', f: 'happy', t: "At home we called you Jungwon's girl. In the chat. Before you even knew who he was. I made that up. I'm very proud of it." },
      { s: 'sunoo', f: 'serious', t: "Niki. Cut it out already." },
      { n: "He said it without looking up from the milk he was steaming, in the voice of somebody who'd been saying it since they were all children, mild and automatic and absolutely final, and Niki, astonishingly, cut it out, and went back to the table, and stole Jake's croissant instead." },
      { choose: [
        { t: "Jungwon's girl?", notes: 2, then: [
          { s: 'sunoo', f: 'flustered', t: "That's— he— Niki thought it was funny because Jungwon yelled at you about a dog. On the first day. Before anybody knew anybody. It's a long story. It's a bad story. Jungwon comes off really bad." },
          { s: 'sunoo', f: 'neutral', t: "He's not like that. He was like that that morning. He was tired. I'm not making excuses. I'm making a little excuse." }
        ] },
        { t: "You're the only one he listens to.", notes: 3, then: [
          { s: 'sunoo', f: 'happy', t: "He listens to Jay! When Jay hits him. And to Heeseung-hyung when hyung uses his dad voice." },
          { s: 'sunoo', f: 'neutral', t: "He listens to me because I don't yell. If you don't yell, people have to get really quiet to hear you. It's a trick. Don't tell him it's a trick." }
        ] },
        { t: "(Let it go. Help him carry the tray.)", notes: 2, then: [
          { n: "She took one side of the tray without asking, and he took the other, and they carried six drinks and a mountain of croissants to the back table between them, and nobody spilled anything, which Sunoo said afterward was a personal best for that table." }
        ] }
      ] },
      { n: "Sunoo, behind the counter afterward, had his face in both hands. When he took them away he was laughing, and there were tears at the corners of his eyes, and he wiped them on his apron and said, to Solar, quietly, that he was sorry about all of them, and that he loved all of them, and that it was so good to have them all in one room again, even this room, even here." },
      { s: 'sunoo', f: 'happy', t: "It would be really quiet without them. I'd hate it. Don't tell them. They'd be unbearable." }
    ] },

    { after: '11/22', title: '3: yours and his', place: "Iwatodai Strip · Yeobo's Cafe", time: 'Afternoon', scene: [
      { n: "Jungwon was at the window table with a stack of papers and a cup of coffee he hadn't touched, and Sunoo was watching him from behind the counter with the expression of a man watching a pot he'd been told not to watch." },
      { s: 'sunoo', f: 'sad', t: "He hasn't eaten. Since yesterday. He says he has. He hasn't. I can tell. His ears go a color." },
      { s: 'sunoo', f: 'neutral', t: "He faints, you know. At home. He's fainted more than once. He gets so busy he forgets he has a body." },
      { n: "He said it without any drama at all, the way you'd mention the weather in a town where the weather was always bad. Then he looked at her sideways, carefully, the way you'd check a bandage." },
      { s: 'sunoo', f: 'neutral', t: "You found him once. In a hallway. You don't remember. You texted me." },
      { s: 'sunoo', f: 'sad', t: "Do you want to see? I still have it. I have all of them. I don't delete anything. Jay says it's a sickness." },
      { choose: [
        { t: "Show me.", notes: 3, then: [
          { n: "He took his phone out of his apron pocket and scrolled for a long time, past things she couldn't read fast enough, past a hundred messages in a group chat whose name she glimpsed and laughed at before she could stop herself, until he found the one he wanted, and turned the screen around." },
          { phone: [
            { from: 'solar', t: "umm hey sunoo i dnt want to bother u but ur friend passed out in the hallway" },
            { from: 'sunoo', t: "omg what??? wait what friend" },
            { from: 'sunoo', t: "wait jungwon right? cus u guys were in the meeting together" },
            { from: 'sunoo', t: "omg thank u for helping him solar" },
            { from: 'sunoo', t: "ill come to the nurses office right now" }
          ], contact: 'solarsystem' },
          { n: "The messages on the right were hers. She knew it the way you know your own coat on a crowded rack. The typos were hers. The *umm* was hers. She'd typed it standing over a boy on a hallway floor, apparently, with her heart going, and been polite about it, because of course she had." }
        ] },
        { t: "I'd rather not know.", notes: 2, then: [
          { s: 'sunoo', f: 'neutral', t: "Okay! Okay. That's allowed." },
          { s: 'sunoo', f: 'happy', t: "You were really good about it, though. That's all you need to know. You stayed till I got there." }
        ] },
        { t: "And you came running.", notes: 3, then: [
          { s: 'sunoo', f: 'flustered', t: "I came WALKING. Very fast. You're not allowed to run in the halls." },
          { s: 'sunoo', f: 'sad', t: "...I ran. I always run when it's him." }
        ] }
      ] },
      { s: 'sunoo', f: 'serious', t: "And he won't let us help. He won't let anyone help. He thinks it's his job to do everything, all of it, alone, perfectly." },
      { choose: [
        { t: "Sounds like someone I know.", notes: 3, then: [
          { s: 'sunoo', f: 'surprised', t: "..." },
          { s: 'sunoo', f: 'sad', t: "...Yeah. It does. It sounds like me with the café." },
          { s: 'sunoo', f: 'happy', t: "Wow. Okay. I didn't need to be read like that on a weekday." }
        ] },
        { t: "What do you want me to do?", notes: 3, then: [
          { s: 'sunoo', f: 'happy', t: "Take him this. And sit with him. He'll eat if you're sitting there. He's too proud to not eat in front of you." }
        ] },
        { t: "He's an adult. Sort of.", notes: 1, then: [
          { s: 'sunoo', f: 'serious', t: "He's the president of a whole school and he thinks lunch is a scheduling conflict." },
          { s: 'sunoo', f: 'neutral', t: "That's not an adult. That's a very well-dressed emergency." }
        ] }
      ] },
      { n: "He put a plate on the counter. A croissant, warm, and a little bowl of soup, and a spoon, set at exactly the angle you'd set a spoon for someone you knew was going to argue." },
      { s: 'sunoo', f: 'neutral', t: "Can I tell you something? I told you to run. At home. Against him. Did you know that?" },
      { s: 'sunoo', f: 'serious', t: "You texted me late. You said sorry for bothering me again. You said maybe you'd just tell your parents you missed the sign-up. And I said go for it. Because he's my best friend and he needed somebody to make him stop doing it alone." },
      { phone: [
        { from: 'sunoo', t: "hey solar its ok! i am always here to talk!" },
        { from: 'sunoo', t: "he barely eats anymore and he's fainted multiple times" },
        { from: 'sunoo', t: "so as his friend and yours i think you should run for pres, solar" }
      ], contact: 'solarsystem · late' },
      { s: 'sunoo', f: 'sad', t: "As his friend and yours. That's what I said. And then I felt bad. Because I didn't really ask what *you* needed. I just thought about what he needed, and I made it sound like it was for you." },
      { choose: [
        { t: "You were looking out for both of us.", notes: 3, then: [
          { s: 'sunoo', f: 'sad', t: "...I was trying. I'm always trying. I try so hard." },
          { s: 'sunoo', f: 'happy', t: "Thank you. Really. Okay. Take him the soup. Make him eat the soup." }
        ] },
        { t: "What do you need, Sunoo?", notes: 3, flag: { 'sunoo-asked-need': true }, then: [
          { s: 'sunoo', f: 'surprised', t: "..." },
          { n: "He looked at her across the counter for a long moment. Nobody, she suspected, had asked him that in a very long time. His mouth opened and closed, like a man reaching for a word in a language he'd only ever read." },
          { s: 'sunoo', f: 'neutral', t: "...A day off. Just one. I'd sleep till ten. I'd let somebody else make the croissants." },
          { s: 'sunoo', f: 'flustered', t: "Don't tell my grandmother. Don't tell anyone. Take him the soup." }
        ] },
        { t: "I'd have run anyway.", notes: 2, then: [
          { s: 'sunoo', f: 'happy', t: "...Yeah. Probably. You were already halfway out the door when you asked me. You just wanted somebody to hold it open." }
        ] }
      ] },
      { n: "She took Jungwon the soup. She sat down across from him and didn't say anything, and he looked at the soup and at her and at Sunoo behind the counter, who was very busily not looking, and sighed like a man conceding a count, and ate it. All of it." },
      { s: 'jungwon', f: 'neutral', t: "He sent you." },
      { s: 'solar', f: 'neutral', t: "He sent me." },
      { s: 'jungwon', f: 'neutral', t: "...It's good soup. Don't tell him." },
      { n: "Sunoo did a small silent dance behind the till that he thought nobody saw. Jungwon saw. He looked at it over the rim of the bowl for a long second, very straight-faced, and then looked down at the soup again, and his ears went a color." }
    ] },

    { after: '11/29', title: '4: five a.m.', place: "Iwatodai Strip · Yeobo's Cafe", time: 'Early Morning', music: 'tender', scene: [
      { n: "He'd told her she could come and watch, if she wanted, if she was up, which she always was, and so at five in the morning she was standing in the back kitchen of a café that had fallen through the floor of the world, in a borrowed apron with flowers on it, with her hands in a bowl of dough." },
      { n: "It was warm in the kitchen. It smelled of butter and yeast and the cold coming in under the back door, and the only light was the one over the counter, yellow, and the radio was on very low, a station that only played old ballads, and Sunoo was humming along with all of them, including the ones he clearly didn't know." },
      { s: 'sunoo', f: 'happy', t: "Fold, turn, fold. Gentle. Like you're folding a letter you don't want anyone to read." },
      { choose: [
        { t: "(Fold it exactly the way he showed you.)", notes: 3, then: [
          { n: "She folded it. Her hands were slow and careful and a little clumsy, and he watched them and didn't correct her once, just nodded, and said *good, good,* in a voice like he was talking to a puppy." },
          { s: 'sunoo', f: 'happy', t: "You're a natural. You're not. But you're trying. That's the same thing at five in the morning." }
        ] },
        { t: "(Fold it badly and make him laugh.)", notes: 2, then: [
          { s: 'sunoo', f: 'surprised', t: "That's not a fold. That's a crime scene." },
          { n: "He laughed so hard he had to put his floury hands on the counter, and left two white handprints there, and didn't wipe them off. They were still there at closing. They were still there the next week." }
        ] },
        { t: "Who folds letters nobody's allowed to read?", notes: 2, then: [
          { s: 'sunoo', f: 'neutral', t: "Everybody. Everybody has one. You just don't send it." },
          { s: 'sunoo', f: 'happy', t: "Mine's in my head. It's mostly to Jungwon. It says EAT, in really big letters, and then a lot of feelings." }
        ] }
      ] },
      { s: 'sunoo', f: 'neutral', t: "It's my grandmother's café. Her cups. Her name on the sign. Her croissants. I just run it." },
      { s: 'sunoo', f: 'sad', t: "Every day. Before school. It's my job to run it perfectly for her. She doesn't ask me to. I just do. If I do it perfectly, nobody has to worry about it. Nobody has to worry about anything." },
      { n: "He folded the dough in silence for a while. The radio played a song about a train station. Outside the back door the Strip was still dark, and very cold, and somewhere a shutter went up with a long iron yawn." },
      { s: 'sunoo', f: 'sad', t: "She's at home. With nobody to open. I keep thinking about it. Jungwon says it's probably still the same night there. Niki says it's been a week. Heeseung-hyung says we shouldn't guess, because guessing makes it worse." },
      { s: 'sunoo', f: 'neutral', t: "But what if she came down this morning and the café was just gone. And there was a hole in the street. And she's standing there in her slippers." },
      { choose: [
        { t: "Nobody knows what time it is there. Maybe she's still asleep.", notes: 3, then: [
          { s: 'sunoo', f: 'sad', t: "...Do you really think so?" },
          { s: 'solar', f: 'neutral', t: "I think nobody can tell you she isn't." },
          { s: 'sunoo', f: 'happy', t: "...Okay. Okay. That's a really good answer. That's a Solar answer. She's asleep. She's dreaming about the café. She does that. She told me." }
        ] },
        { t: "(Put your floury hand on his.)", notes: 3, then: [
          { n: "She put her hand over his on the dough. Both of them floury. He looked at it, and blinked, and didn't say anything, and after a while he started humming again, along with the radio, slightly off." }
        ] },
        { t: "Then make them perfect for her here.", notes: 2, then: [
          { s: 'sunoo', f: 'neutral', t: "...Yeah. Yeah. That's what I'm doing. That's exactly what I'm doing." },
          { n: "He folded the next one with so much care it took him two full minutes, and set it on the tray like it might break, and didn't look up for a while." }
        ] }
      ] },
      { n: "At twenty to six somebody ran past the front window. Silver hair, a gray hoodie, breath going up in clouds, and a pace that didn't change for the hill. He went past. He came back. He stopped at the glass, jogging in place, and looked in, and Sunoo was already at the front door with a carton of milk held out like an offering at a shrine." },
      { s: 'akihiko', f: 'surprised', t: "...You're open?" },
      { s: 'sunoo', f: 'happy', t: "No! But you are. Drink this. You look cold. You're wearing shorts. It's winter." },
      { n: "Akihiko took the milk. He looked past Sunoo, into the yellow light of the back kitchen, at Solar in a flowered apron with flour to her elbows, and something happened at the corner of his mouth that he didn't let finish." },
      { s: 'akihiko', f: 'neutral', t: "Don't let him work you too hard." },
      { s: 'sunoo', f: 'happy', t: "I'd NEVER." },
      { n: "He ran on. Sunoo shut the door on the cold and came back to the counter with a face full of things he was clearly not going to say, and said one of them anyway." },
      { s: 'sunoo', f: 'happy', t: "He looked at you like you were the first croissant out of the oven. I'm just saying. I'm only saying it." },
      { n: "The first tray came out of the oven at six-ten, gold and smoking and enormous, and he put one on a plate and held it out to her before anyone else in the world had eaten one, and watched her eat it too fast, and said it was the best review he'd ever gotten, and she hadn't said a word." },
      { choose: [
        { t: "Same time next week?", notes: 3, flag: { 'sunoo-five-am': true }, then: [
          { s: 'sunoo', f: 'surprised', t: "You'd come back? At FIVE?" },
          { s: 'sunoo', f: 'happy', t: "...Okay. Okay! I'm putting you on the schedule. In pen. You can't erase pen. That's the rule about pen." }
        ] },
        { t: "(Take a second one for the road.)", notes: 2, then: [
          { s: 'sunoo', f: 'happy', t: "Take three. Take one for Fuuka. Don't let Junpei see you. He can smell them through walls." }
        ] }
      ] }
    ] },

    { after: '12/6', title: '5: the photographer', place: "Iwatodai Strip · Yeobo's Cafe", time: 'After School', scene: [
      { n: "Sunoo had a photo on his phone that he showed to everyone. Six boys on the steps of a school she'd never seen, in navy blazers, in the sun, arms around each other's necks, and in the middle, very straight, not quite smiling, a boy who was the only one with his blazer buttoned." },
      { s: 'sunoo', f: 'happy', t: "That's us! Heeseung-hyung, he's the vice president, he's the dad. Jay, he plays football, he's the other dad but meaner. Jake, he's the nice one, you've met Layla's whole photo album. Sunghoon. You've met Sunghoon. I'm so sorry about Sunghoon." },
      { s: 'sunoo', f: 'neutral', t: "Niki. He's the youngest. He's the worst. I love him the most. Don't tell him." },
      { s: 'sunoo', f: 'neutral', t: "And Jungwon. In the middle. Not smiling. He thinks smiling in photos is unprofessional." },
      { choose: [
        { t: "Where are you?", notes: 3, then: [
          { s: 'sunoo', f: 'surprised', t: "Oh! I took it. I'm always taking it." },
          { s: 'sunoo', f: 'sad', t: "...I'm never in any of them, actually. Huh. I never noticed that." },
          { n: "He scrolled back to check. Back and back. The six of them at a table, at a game, at a festival with paper lanterns. Five of them. Always five. He kept scrolling for a while after the point had been made." }
        ] },
        { t: "You all look happy.", notes: 2, then: [
          { s: 'sunoo', f: 'happy', t: "We were. We are. Mostly. Being friends with someone who works too hard is like being friends with a very polite storm." }
        ] },
        { t: "Jungwon's tie is crooked.", notes: 2, then: [
          { s: 'sunoo', f: 'surprised', t: "It is NOT. Let me— oh my gosh, it is. It's a tiny bit crooked." },
          { s: 'sunoo', f: 'happy', t: "I'm never telling him. I'm keeping this forever. This is my leverage." }
        ] }
      ] },
      { s: 'sunoo', f: 'neutral', t: "Can I confess something? Since we're looking at photos. Since you don't remember, so it doesn't count." },
      { s: 'sunoo', f: 'flustered', t: "At home, Jake and I made you go shopping with him. For decorations. For the dance. We said it was because you were both candidates and you'd make a good pair, and we said it in a very innocent voice." },
      { s: 'sunoo', f: 'happy', t: "It was not innocent. We'd planned it. Jungwon wanted to throw a chair at me. I could feel it. From across the table. It was the best day of my life." },
      { ifRomance: 'jungwon', then: [
        { s: 'sunoo', f: 'neutral', t: "And now he looks at you the same way here. Like he's been waiting for you all day and he's embarrassed about it. So I think it worked. I think it worked in two worlds." },
        { s: 'sunoo', f: 'serious', t: "Be gentle with him? He's so bad at being happy. He thinks it's a test he didn't study for." }
      ], else: [
        { s: 'sunoo', f: 'neutral', t: "He looks at you differently here, you know. At home you two were always— it was a competition. Every room. Who talked first. Who got the last word. Here he just watches you walk in. Like you're the one thing in the building he's sure about." }
      ] },
      { n: "He said it without teasing. Sunoo didn't tease, Solar had noticed. Niki teased. Jay teased. Sunoo said the true thing and then looked worried that it might have hurt someone." },
      { choose: [
        { t: "Don't tell him you told me.", notes: 3, then: [
          { s: 'sunoo', f: 'happy', t: "I would NEVER. He'd make it a policy. He'd make a policy against me telling you things." }
        ] },
        { t: "You matchmade your president.", notes: 3, then: [
          { s: 'sunoo', f: 'serious', t: "I'm the secretary. I take minutes. Sometimes you have to make the minutes interesting." }
        ] },
        { t: "Is that bad?", notes: 2, then: [
          { s: 'sunoo', f: 'neutral', t: "No! No, it's good. It's so good. He needs something to wait for that isn't a deadline." },
          { s: 'sunoo', f: 'sad', t: "I just hope nobody gets hurt. Whatever happens. He's so bad at being hurt. He just gets politer." }
        ] }
      ] },
      { n: "He put the phone away. Then took it out again, and looked at the five boys on the steps, and at the empty place on the end where the boy holding the camera would have stood." },
      { choose: [
        { t: "(Take his phone. Take one of him.)", notes: 3, flag: { 'sunoo-photo': true }, then: [
          { s: 'sunoo', f: 'surprised', t: "Wait— what are you— my hair is— I'm in an APRON—" },
          { n: "She took it anyway. Sunoo behind his own counter, mid-protest, flour on one cheek, the gold windows behind him and the sign that said YEOBO'S backwards through the glass, and his face doing three things at once and all of them nice." },
          { n: "He looked at it for a long time. Then he made it his lock screen, very quickly, as if somebody might stop him." },
          { s: 'sunoo', f: 'happy', t: "...That's the first one of me. On my own phone. Ever. Don't laugh." }
        ] },
        { t: "(Pull him into a picture with you.)", notes: 3, flag: { 'sunoo-photo': true }, then: [
          { n: "She took the phone and turned the camera around and held it up at arm's length and pulled him into the frame beside her before he could object, and he stopped objecting halfway, and put his cheek against her hair, and his smile went enormous." },
          { s: 'sunoo', f: 'happy', t: "There! Now I'm in one. With you. That counts. That's going in the album." }
        ] },
        { t: "Next time, I'll take it.", notes: 2, then: [
          { s: 'sunoo', f: 'happy', t: "Promise? You have to stand really far back. We're a lot. We don't fit in a normal frame." }
        ] }
      ] }
    ] },

    { after: '12/13', title: '6: sunshine', place: "Iwatodai Strip · Yeobo's Cafe", time: 'Evening', scene: [
      { n: "It was closing time and the café was empty and Sunoo was sitting on the floor behind the counter with his back against the cabinets and his knees up and his apron still on, not moving, staring at nothing, and he didn't hear the bell go." },
      { n: "She found him there. He looked up at her from the floor and smiled, instantly, a reflex, the way a lamp comes on when you open a door, and then, when she didn't smile back, let it go. It went out of his face slowly, all the way, and what was under it was very tired." },
      { s: 'sunoo', f: 'sad', t: "...Hi. Sorry. I'm just. Sitting. For a minute." },
      { choose: [
        { t: "(Sit on the floor next to him.)", notes: 3, then: [
          { n: "She sat on the floor next to him behind the counter, where the customers couldn't see, among the spare cups and the bags of flour and a broom, and he leaned his head back against the cabinet and closed his eyes." }
        ] },
        { t: "You don't have to smile at me.", notes: 3, flag: { 'sunoo-no-smile': true }, then: [
          { s: 'sunoo', f: 'surprised', t: "..." },
          { s: 'sunoo', f: 'sad', t: "...Nobody's ever said that to me. Not once. Everyone always says, *Sunoo, you're always smiling.* Like it's a compliment." }
        ] },
        { t: "Long day?", notes: 1, then: [
          { s: 'sunoo', f: 'happy', t: "No! Normal day! Totally normal!" },
          { n: "He said it too fast and too bright, and heard himself, and looked at the floor between his shoes, and didn't try again." }
        ] }
      ] },
      { s: 'sunoo', f: 'sad', t: "Everyone calls me sunshine. At home. It's even in my handle. I picked it. I liked it." },
      { s: 'sunoo', f: 'neutral', t: "And it's true. I'm happy, mostly. I like people. I like making them food. I like being the one who makes the room nicer." },
      { s: 'sunoo', f: 'sad', t: "But sometimes I'm just tired, and nobody notices, because sunshine doesn't get tired. Sunshine's just. On." },
      { n: "He said it to the ceiling. Solar sat beside him and felt something in her own chest answer it, low, a chord she knew the shape of. A girl who smiled so bright nobody could look at her directly. A girl who hid by shining." },
      { choose: [
        { t: "I know what that's like.", notes: 3, then: [
          { s: 'sunoo', f: 'neutral', t: "...Yeah. I think you do. I think that's why I liked you, the first time. You were doing it too. At the counter. Smiling like you were holding something heavy." }
        ] },
        { t: "Then be tired. Here. I won't tell.", notes: 3, then: [
          { s: 'sunoo', f: 'sad', t: "..." },
          { n: "He didn't say anything. He just put his head on her shoulder, flour in his hair, and was tired, all the way, for about ten minutes, in the dark café behind the counter, and she didn't say a word the whole time." },
          { s: 'sunoo', f: 'neutral', t: "...Thank you. That was so nice. I'm going to be so normal tomorrow." }
        ] },
        { t: "Does Jungwon know?", notes: 2, then: [
          { s: 'sunoo', f: 'surprised', t: "No! No. He has enough. He'd make it his job. Then I'd have to worry about him worrying about me, and that's just a circle." },
          { s: 'sunoo', f: 'sad', t: "...Somebody in the group has to be the one who's fine. I'm good at it. I volunteered." }
        ] }
      ] },
      { n: "They sat there a while longer. The refrigerator in the pastry case hummed. A scooter went by on the Strip, and its headlight swept across the ceiling above them, and was gone." },
      { s: 'sunoo', f: 'neutral', t: "Can I tell you a secret? A real one. Not a café one." },
      { s: 'sunoo', f: 'flustered', t: "I wanted to run once. For president. Before Jungwon ever did. I wanted it so much." },
      { s: 'sunoo', f: 'sad', t: "And then I thought about the speech. In front of the whole school. All those faces. And I just. Couldn't. I never even signed up. Jake still brings it up. I was a coward with a really nice handwriting." },
      { s: 'sunoo', f: 'happy', t: "That's why I helped you so much. With yours. I practiced it with you for days. I think I was practicing mine. I think I wanted somebody to get up there who was as scared as me, and do it anyway." },
      { choose: [
        { t: "Then give it now. I'll be the whole school.", notes: 3, needs: { courage: 2 }, flag: { 'sunoo-speech': true }, then: [
          { s: 'sunoo', f: 'surprised', t: "Now? Here? On the FLOOR?" },
          { s: 'solar', f: 'neutral', t: "Stand up if you want. I'll clap either way." },
          { n: "He stood up. He brushed the flour off his apron, both sides. He looked out over the empty café, the chairs up on the tables, the gold windows gone dark, the one light left on over the till, as if it were a gym full of people, and opened his mouth, and closed it, and opened it again." },
          { s: 'sunoo', f: 'neutral', t: "Hello. My name is Kim Sunoo. I'm running for... I'm running for..." },
          { s: 'sunoo', f: 'sad', t: "...I can't. I can't, I'm sorry. Not yet. Ask me again. Ask me again some other time and I'll do one more word." },
          { n: "She clapped anyway, from the floor, slow and loud in the empty café, and he put his face in his apron and laughed into it until he had to sit back down." }
        ] },
        { t: "What would your slogan have been?", notes: 3, then: [
          { s: 'sunoo', f: 'flustered', t: "I never got that far! I was too scared to get that far." },
          { s: 'sunoo', f: 'flustered', t: "...Okay. I just made one up. Right now. In my head. \"Sunoo for you.\" With a sun on it. It's so bad. Don't look at me." },
          { s: 'solar', f: 'neutral', t: "I'd have voted for you." },
          { s: 'sunoo', f: 'sad', t: "...You'd have voted for anyone with a sun on it." },
          { s: 'solar', f: 'neutral', t: "That's true. I'd still have voted for you." }
        ] },
        { t: "You weren't a coward. You were a kid.", notes: 2, then: [
          { s: 'sunoo', f: 'neutral', t: "...I was. Thank you. That's a nicer word for it. I'm going to use your word." }
        ] }
      ] },
      { n: "They closed up together. He let her mop. He redid exactly one corner, when he thought she wasn't looking, and then, when he saw her looking, laughed, and gave her the mop back, and didn't redo anything else." }
    ] },

    { after: '12/20', title: '7: strawberries', place: "Iwatodai Strip · Yeobo's Cafe", time: 'Afternoon', music: 'joy', scene: [
      { n: "Sunoo had decided the dorm needed a Christmas cake. A proper one. Sponge and cream and strawberries, the kind every bakery in Iwatodai had in the window by the twentieth with a little plastic Santa on top, except his would be better, he said, because his would be made with love and a frankly unreasonable amount of cream." },
      { s: 'sunoo', f: 'happy', t: "You're on strawberries. Slice them in half. Evenly. Not too evenly. Love evenly." },
      { s: 'solar', f: 'neutral', t: "What's love evenly?" },
      { s: 'sunoo', f: 'happy', t: "You'll know it when you see it." },
      { n: "She sliced strawberries at the counter while he whipped cream by hand, because he didn't trust the machine, his whole arm going, his face pink with effort, singing a Christmas song in a language she half knew under his breath. The café was closed. The sign on the door said so in his round handwriting, with a little drawing of a cake and an apology." },
      { choose: [
        { t: "(Eat a strawberry. Look him in the eye.)", notes: 3, then: [
          { s: 'sunoo', f: 'surprised', t: "SOLAR. That was a cake strawberry!" },
          { s: 'sunoo', f: 'happy', t: "...Okay, eat one more. One more. Then I'm counting." }
        ] },
        { t: "(Slice them all exactly the same.)", notes: 2, then: [
          { s: 'sunoo', f: 'neutral', t: "Oh, those are Jungwon strawberries. Those are so even. He'd love those. I hate them a little." }
        ] },
        { t: "(Take over the whisk so his arm can rest.)", notes: 3, then: [
          { s: 'sunoo', f: 'surprised', t: "You can't— it's a technique— oh. Okay. Oh, you're fast." },
          { n: "She was fast. She didn't know she was fast. He leaned on the counter rubbing his shoulder and watched her with his head tilted, and said, after a while, that she whisked like someone who'd been told off for being slow once and had decided never again, and she didn't ask how he knew that, and he didn't explain." }
        ] }
      ] },
      { s: 'sunoo', f: 'neutral', t: "At home I make a cake for everyone every year. Even the guys who say they don't like cake. Even Jay, who says cake is for children and then eats three slices." },
      { s: 'sunoo', f: 'sad', t: "This year I don't know if I'll be home for it. Or if it's even Christmas there. Nobody can agree what day it is there. Heeseung-hyung made us stop arguing about it at dinner." },
      { s: 'sunoo', f: 'happy', t: "So I'm making it here. For whoever's here. That's the rule. You make the cake for whoever's here." },
      { n: "When it was done it was enormous and lopsided and covered in strawberries sliced, she had to admit, with love evenly, and he stood back from it with his hands on his hips and the face of a man looking at a building he'd built with his own hands." },
      { choose: [
        { t: "It's beautiful.", notes: 3, then: [
          { s: 'sunoo', f: 'happy', t: "It's beautiful because you helped. I'm writing your name on the board. In cream. Co-chef." }
        ] },
        { t: "Put a sun on it.", notes: 3, then: [
          { s: 'sunoo', f: 'surprised', t: "..." },
          { s: 'sunoo', f: 'happy', t: "...Of course. Of course. The sun with the face. You always want the sun to have a face." },
          { n: "He piped one in the middle, in yellow, with a smile and two pink cheeks, and it looked absurd, and it looked exactly right." }
        ] }
      ] },
      { place: 'Iwatodai Dorm · Lounge', time: 'Evening', music: 'dorm' },
      { n: "They carried it to the dorm between them, through the cold, in a box he'd built out of two smaller boxes and a great deal of tape, and Sunoo walked sideways the whole way like a man carrying an organ for transplant, and stopped at every curb to say *step* in a voice of total seriousness." },
      { n: "The lounge was full. It was always full now. People on the couch and the arms of the couch and the floor, a game on the television that nobody was watching, somebody's homework spread across the coffee table under somebody else's feet, and when Sunoo set the cake down in the middle of it the noise stopped like a radio switched off." },
      { s: 'junpei', f: 'surprised', t: "Is that... is that for us? Like, us us? Dude. DUDE." },
      { s: 'mitsuru', f: 'surprised', t: "You made this? By hand? It's... remarkably level. For something that came through a door in the Dark Hour." },
      { s: 'sunoo', f: 'flustered', t: "Thank you, Mitsuru-sunbae! It's not level. It's a little bit not level. Please don't look at the left side." },
      { n: "Koromaru sat down at the edge of the coffee table, very upright, very polite, with his eyes on the cake and his tail going against the floor in a slow hopeful rhythm, and Sunoo got down on his knees in front of him and solemnly explained that cream was not for dogs, and then went into the kitchen and came back with a plain strawberry, and held it out on his flat palm like he'd been taught to by someone who loved dogs very much." },
      { ifMet: ['cherry'], then: [
        { n: "Cherry was the first one to cut a slice, without asking, with the cake server held like a weapon, and ate it standing up, and pointed the server at Sunoo." },
        { s: 'cherry', f: 'neutral', t: "...Fine. It's good. You're still on thin ice for being friends with him." },
        { s: 'sunoo', f: 'happy', t: "That's okay! I like thin ice! You can see the fish!" }
      ] },
      { n: "He didn't eat any. Solar noticed. He stood in the doorway to the lounge with his coat still on and his hands in his sleeves and watched everybody else eat it, watched Junpei take seconds and Fuuka hide a strawberry on her plate to save for last and Akihiko eat his in three bites and look at the rest of it like it was a problem he'd like to solve again." },
      { choose: [
        { t: "(Bring him a slice.)", notes: 3, then: [
          { n: "She brought him a slice, the one with most of the sun on it, and he looked at it and said it was too nice to eat, and she said that was the dumbest thing she'd ever heard a baker say, and he laughed, and ate it, standing up in the doorway in his coat, slowly, for once." }
        ] },
        { t: "Come sit down.", notes: 2, then: [
          { s: 'sunoo', f: 'neutral', t: "In a minute. This is the best part. Watching. You don't get to see this part from behind a counter. You just hear the plates." }
        ] },
        { t: "(Stand in the doorway with him.)", notes: 3, then: [
          { n: "She stood in the doorway with him and didn't say anything. The lounge went on being loud and warm and full in front of them. After a while he bumped her shoulder with his, gently, the way you'd knock on a door you already knew was open." },
          { s: 'sunoo', f: 'happy', t: "Whoever's here. See? That's the rule." }
        ] }
      ] }
    ] },

    { after: '12/29', title: '8: what do you want', place: "Iwatodai Strip · Yeobo's Cafe", time: 'Afternoon', scene: [
      { n: "The last week of the year, and the café's windows were fogged so thick from the inside you couldn't see the Strip at all, just gold, just the shapes of people going past like fish behind frosted glass. Sunoo had made two hot chocolates and sat down across from her at the window table, which he never did during opening hours, and put both elbows on the table and his chin in his hands." },
      { n: "There were three sticky notes on the till behind him that hadn't been there before. She could read them from here. *ASK HER,* in Jay's angry capitals. *pls ask her* in Jake's. And one with no words at all, just a drawing of a croissant with a sad face, which could only have been Niki." },
      { s: 'sunoo', f: 'neutral', t: "Don't read those. Those aren't for you. Those are for me, and I'm ignoring them." },
      { s: 'sunoo', f: 'neutral', t: "Everyone's asked you to come home. I know. Jihoon asked at the arcade. Jungwon didn't ask, which is how he asks. I heard all of it. The guys tell me everything. And the guys want me to ask too. Because you'd say yes to me. Because I'm nice." },
      { s: 'sunoo', f: 'serious', t: "So I'm not going to ask that. I'm going to ask what you want." },
      { s: 'sunoo', f: 'happy', t: "Not what you should do. Not what's best for everyone. What you want. Like if you could order anything off the menu and it was free and nobody would judge you." },
      { n: "He waited. He didn't fill the silence. Sunoo, who filled every silence in every room with warmth and chatter and *thank you so much,* sat across from her with his chin in his hands and let the silence be as long as it needed to be." },
      { choose: [
        { t: "I want to stop being needed for a while.", notes: 3, then: [
          { s: 'sunoo', f: 'sad', t: "...Yeah." },
          { s: 'sunoo', f: 'neutral', t: "Yeah. I get that. I get that so much. That's what I'd order too." },
          { s: 'sunoo', f: 'happy', t: "Okay. Then for the next hour, you're not needed. By anyone. I'm serving you. It's on the house. Drink your chocolate." }
        ] },
        { t: "I want everyone I love in one room.", notes: 3, then: [
          { s: 'sunoo', f: 'surprised', t: "..." },
          { s: 'sunoo', f: 'happy', t: "That's a café. You just described a café. That's the whole dream of a café." },
          { s: 'sunoo', f: 'sad', t: "...It's a really good order. I don't know if we have it. I'm going to look in the back." }
        ] },
        { t: "I don't know. Nobody's ever asked.", notes: 3, then: [
          { s: 'sunoo', f: 'neutral', t: "I know. That's why I'm asking." },
          { s: 'sunoo', f: 'happy', t: "You don't have to know yet. I'll keep asking. Every time you come in. Like the croissants. Name for the order. What you want. Same question, every day, till you know." }
        ] }
      ] },
      { n: "They drank the chocolate. Outside the gold windows the Strip went by. The old newspaper man came in and sat in his chair and opened his paper and didn't look at either of them, and Sunoo didn't get up to serve him for a whole three minutes, which Solar understood was the most rebellious thing he'd ever done." },
      { ifFlag: 'sunoo-asked-need', then: [
        { s: 'solar', f: 'neutral', t: "You asked me. So I get to ask you back. You still want that day off?" },
        { s: 'sunoo', f: 'surprised', t: "...You remembered that?" },
        { s: 'sunoo', f: 'flustered', t: "That was a joke. That was a weekday joke. I can't take a day off. Who'd open? Who'd do the milk for your senpai?" }
      ], else: [
        { s: 'solar', f: 'neutral', t: "Your turn. What do you want?" },
        { s: 'sunoo', f: 'surprised', t: "Me? Oh, I don't— the café's not really about what I want. That's kind of the point of it." }
      ] },
      { choose: [
        { t: "Then I'll open. One day. You sleep.", notes: 3, then: [
          { s: 'sunoo', f: 'surprised', t: "You'd open my grandmother's café? Alone? At SIX?" },
          { s: 'solar', f: 'neutral', t: "I know where the cups are. My hands know." },
          { n: "He looked at her for a long moment, the way you'd look at a key somebody had handed you to a house you'd been locked out of for years, and didn't take it, not yet, but didn't hand it back either." },
          { s: 'sunoo', f: 'neutral', t: "...I'll think about it. I'm going to think about it really hard. That's a lot, for me. You should know that's a lot." }
        ] },
        { t: "Nobody's going to fire you, Sunoo.", notes: 2, then: [
          { s: 'sunoo', f: 'sad', t: "I know. That's the scary part. If nobody fires you, you have to decide to stop by yourself." }
        ] },
        { t: "(Get up and serve the newspaper man for him.)", notes: 2, then: [
          { n: "She got up and made the Americano, no sugar, and brought it to the old man, who looked at her over the top of his paper for the first time since November, and nodded, once, which Sunoo said afterward was basically a standing ovation." }
        ] }
      ] },
      { n: "When she left, the three sticky notes were gone from the till. She didn't see him take them down. She saw them later, folded very small, in the CROISSANT FUND jar, where he put the things he couldn't throw away and didn't want to look at." }
    ] },

    { after: '1/9', title: '9: on the house', place: "Iwatodai Strip · Yeobo's Cafe", time: 'After School', scene: [
      { n: "January, and the café knew it. Things had started going missing. Not stolen. Just gone, the way things go at the end of a dream, a little at a time. The vase on the big table one morning, flower and all. The masking tape off Akihiko's milk carton. The handprints on the counter, which nobody had wiped. Then the regulars themselves, the bookstore ladies and then the newspaper man, who simply stopped coming, as if the Strip had already started to forget there'd ever been a café here." },
      { n: "Sunoo hadn't mentioned it. He'd kept opening. Every morning at six-ten, gold and smoking, the first tray." },
      { ifFlag: 'sunoo-crime', then: [
        { n: "The sign was still there, though. *A DELICIOUS CRIME,* in round letters with a sun after it, propped in the window, a little faded now, as if it were holding on by being stubborn." }
      ] },
      { s: 'sunoo', f: 'happy', t: "Solar! Window seat! It's yours. It's always yours. I'm going to put a sign on it." },
      { n: "He'd made her something. Not on the menu. A small round pastry glazed in yellow, with a sun piped on top, a face on the sun, two pink cheeks." },
      { s: 'sunoo', f: 'neutral', t: "It's a new one. It's a goodbye one. I don't know who it's goodbye from yet. Maybe me. Maybe the café. Maybe you." },
      { s: 'sunoo', f: 'sad', t: "...Whoever goes, it's on the house." },
      { choose: [
        { t: "(Eat it slowly, for once.)", notes: 3, then: [
          { n: "She ate it slowly. For once. Not too fast, not like she was late for anything. Every bite. He watched her do it from behind the counter with his hands folded on the apron and his eyes very bright, and didn't say anything, which was the most Sunoo thing she'd ever seen him not do." }
        ] },
        { t: "What will you do? When the hour ends?", notes: 3, then: [
          { s: 'sunoo', f: 'neutral', t: "Open. At six-ten. Wherever I am. Somebody'll need a croissant." },
          { s: 'sunoo', f: 'happy', t: "If it's home, I'll make one for Grandma. If it's here, I'll make one for whoever's here. It's the same job. It's always the same job." }
        ] },
        { t: "You noticed. The things going missing.", notes: 3, then: [
          { s: 'sunoo', f: 'sad', t: "...The vase was first. I keep putting the flower back. There's no vase to put it in. I keep putting it back anyway." },
          { s: 'sunoo', f: 'neutral', t: "Don't tell the guys. They'll get sad, and then Niki will get mean about being sad, and then I'll have to make something. I'm out of butter." }
        ] }
      ] },
      { s: 'sunoo', f: 'neutral', t: "The guys asked me what you were going to pick. Like I'd know. Like you'd tell me first." },
      { s: 'sunoo', f: 'happy', t: "I said I didn't know, and I said I wasn't going to ask, and Jay called me a coward, and I said I'm a very well-adjusted coward, thank you, I've been one before." },
      { choose: [
        { t: "You'd be the first one I'd tell.", notes: 3, then: [
          { s: 'sunoo', f: 'surprised', t: "..." },
          { s: 'sunoo', f: 'flustered', t: "Don't SAY that, I'm going to cry on the glaze, the glaze is very delicate—" }
        ] },
        { t: "You're not a coward.", notes: 2, then: [
          { s: 'sunoo', f: 'neutral', t: "I'm using your word. I was a kid. Now I'm just a kid who's very polite about what he's scared of." }
        ] },
        { t: "(Don't answer. Finish the pastry.)", notes: 2, then: [
          { n: "She didn't answer. He didn't need her to. He refilled her water, which was full, and went back behind the counter, and that was the conversation." }
        ] }
      ] },
      { s: 'sunoo', f: 'serious', t: "Can I say something as your friend? And his? Like I did before?" },
      { s: 'sunoo', f: 'neutral', t: "Whatever you pick. You don't owe anyone a perfect version of it. Not him. Not us. Not the café. You just pick, and you do it your way, and it's on the house." },
      { n: "He came around the counter and hugged her, quick, floury, the way you'd hug someone on a platform when the doors were about to close, and then went back behind the counter before she could see his face, and started wiping a table that didn't need wiping." }
    ] },

    { after: '1/17', title: '10: solar!', place: "Iwatodai Strip · Yeobo's Cafe", time: 'After School', music: 'tender', scene: [
      { n: "The middle of January. The café was still there. Smaller, somehow. The windows less fogged. The gold less gold. Sunoo behind the counter in his grandmother's apron, turning on the coffee machine as if it were any day at all, and the bell going when she came in, and his face lighting up like a shop sign switched on at dusk, exactly the way it had the first time." },
      { s: 'sunoo', f: 'happy', t: "Hello, welcome to the café! What can I get for you today?" },
      { n: "And she knew him." },
      { n: "A rainy afternoon. A girl she'd been, short and indecisive and nervous, at the front of a nearly empty café, staring at a menu without reading it, trying to work out what would feed six friends who ate a scary amount, and a boy behind the counter who'd recognized her and not said so, who knew his best friend had yelled at her that week, who'd listened to her ask if she'd be wasting her time and told her, kindly, to go for it. Who'd recommended the croissants. Who'd asked her name for the order, and written it down, and smiled." },
      { n: "A phone screen, late, her own thumbs. *sorry to bother u so late again.* A FaceTime call with posters spread across her bedroom floor and his laugh coming out of the speaker, tinny and enormous. A boy on her carpet holding a glue stick like a scalpel, saying *it needs more stars, it always needs more stars,* and being right." },
      { ifFlag: 'sunoo-recommend', then: [
        { n: "*They're pretty big in size and loved by our regulars.* He'd said it to her twice now. Once in each life. Both times like it was the most important sentence he knew." }
      ] },
      { s: 'solar', f: 'neutral', t: "...Seven croissants and seven coffees, please." },
      { n: "His hands stopped on the coffee machine." },
      { s: 'sunoo', f: 'surprised', t: "..." },
      { s: 'sunoo', f: 'sad', t: "...And the name for the order?" },
      { s: 'solar', f: 'happy', t: "Solar!" },
      { n: "She said it the way she'd said it the first time. Bright. Too loud. Happy to be asked. And Sunoo laughed, and the laugh broke in the middle, and he put both hands flat on the counter and bent his head over them and cried, all the way, for once, in front of someone, sunshine with the switch off." },
      { ifFlag: 'sunoo-no-smile', then: [
        { n: "He didn't try to smile through it. She'd told him once he didn't have to, on the floor behind this counter, and he'd kept it, apparently, the way he kept everything, folded small, for when he'd need it." }
      ], else: [
        { n: "He tried to smile through it, out of habit, and the smile didn't hold, and he let it go, and she watched him let it go, which was its own kind of first time." }
      ] },
      { choose: [
        { t: "(Come around the counter and hug him.)", notes: 3, then: [
          { n: "She came around the counter, which customers weren't allowed to do, and hugged him in his grandmother's apron, and he hugged her back so hard he lifted her a little off the floor, flour everywhere, and said into her hair that she was the nicest person he'd ever met, and that she'd been the nicest person he'd ever met the first time too, and that he'd been so worried about her, the whole time, the whole entire time." }
        ] },
        { t: "Thank you for telling me to go for it.", notes: 3, then: [
          { s: 'sunoo', f: 'sad', t: "...You remember that?" },
          { s: 'solar', f: 'neutral', t: "You said even if I didn't win, it'd be a fun experience." },
          { s: 'sunoo', f: 'happy', t: "Was it? Was it fun? Tell me the truth. Be honest. Be nice." },
          { s: 'solar', f: 'neutral', t: "It was the hardest thing I've ever done." },
          { s: 'sunoo', f: 'happy', t: "...That's the same thing. At five in the morning. I promise it's the same thing." }
        ] },
        { t: "You made my posters. You put stars on everything.", notes: 3, then: [
          { s: 'sunoo', f: 'surprised', t: "They NEEDED stars. Everybody said they had me written all over them. Everybody could tell." },
          { s: 'sunoo', f: 'sad', t: "...You remember my stars. Okay. Okay. I can't— give me a second. I need to go stand in the walk-in for a second." }
        ] }
      ] },
      { s: 'sunoo', f: 'neutral', t: "Can I tell you why I liked you? The first time? Heeseung-hyung told you once it was rare. For me to come back from the counter and say somebody was really nice. I say everyone's nice. I don't mean it about everyone." },
      { s: 'sunoo', f: 'happy', t: "You apologized for being indecisive. To the guy at the counter. Nobody does that. And then you said sorry for maybe making my friend look bad, before you even knew who my friend was. You were scared and you were still being careful with everybody." },
      { s: 'sunoo', f: 'neutral', t: "I thought, oh. She's like me. She makes the room nicer and nobody checks if she's tired." },
      { n: "He made seven croissants and seven coffees. There were only two of them in the café. They ate as many as they could at the window table, and wrapped the rest in paper for the dorm, and on the bag, in his round hand, under her name, he drew a sun with a face on it, and two pink cheeks, and a little heart." },
      { ifFlag: 'sunoo-photo', then: [
        { n: "And in the bag, when she got it back to the dorm, tucked between the croissants in a napkin so it wouldn't get buttery, there was a photo, printed small and grainy at the convenience store on the corner, the one she'd taken in December. On the back, in his round hand: *proof i was there. — s.*" }
      ] },
      { s: 'sunoo', f: 'happy', t: "On the house. Always. Wherever." }
    ] }
  ],

  afterMax: [
    { title: 'six-ten', place: "Iwatodai Strip · Yeobo's Cafe", time: 'Early Morning', music: 'tender', scene: [
      { n: "The first tray, gold and smoking, at six-ten. Two aprons. The radio playing old ballads very low, and the cold coming in under the back door, and the Strip outside still blue and empty and asleep." },
      { ifFlag: 'sunoo-five-am', then: [
        { n: "She'd come every week. In pen, he'd said, and he'd meant it; her name was on the little schedule taped inside the cupboard door, every Sunday, in ink, with a star. She'd stopped needing to be shown where anything was a long time ago. He'd stopped watching her hands." },
        { s: 'sunoo', f: 'happy', t: "You're late. You're two minutes late. I was going to call the police." }
      ], else: [
        { n: "She hadn't been back at five since that first time, and he didn't say anything about it, just handed her the flowered apron off its hook as if it had been hanging there waiting for her, which, she suspected, it had." },
        { s: 'sunoo', f: 'happy', t: "You came! At five! On purpose! I'm writing this down." }
      ] },
      { s: 'sunoo', f: 'happy', t: "Fold, turn, fold. Like a letter you don't want anyone to read." },
      { choose: [
        { t: "(Fold it perfectly this time.)", notes: 3, then: [
          { s: 'sunoo', f: 'surprised', t: "...That's a perfect fold. That's my grandmother's fold. Okay. You're hired. Unpaid. Forever." }
        ] },
        { t: "(Hum along with the radio.)", notes: 3, then: [
          { n: "They hummed along, both slightly off, in different directions, and it was the best duet the café had ever heard." }
        ] },
        { t: "(Leave a handprint on the counter, on purpose.)", notes: 3, then: [
          { s: 'sunoo', f: 'surprised', t: "You're— that's my move. You stole my move." },
          { n: "He put his beside it. Two white hands on the dark wood, one big, one small. Neither of them wiped them off." }
        ] }
      ] },
      { n: "At twenty to six the silver-haired runner went by the window, came back, stopped, and took his milk at the door without a word, and raised it to the two of them like a toast, and ran on into the blue." }
    ] },

    { title: 'a day off', place: 'Iwatodai · Riverside', time: 'Afternoon', scene: [
      { ifFlag: 'sunoo-asked-need', then: [
        { n: "He'd closed the café. For a whole afternoon. She'd asked him once what he needed and he'd told her, and then spent weeks pretending he hadn't, and then one morning there it was on the door, in his round hand, with a sun drawn after it: *DAY OFF.* And then *SORRY*. And then, smaller, *NOT SORRY.*" }
      ], else: [
        { n: "It had taken her three visits and a great deal of argument and, finally, the threat of telling Heeseung, to make him do it. But there it was on the door, in his round hand, with a sun drawn after it: *DAY OFF.* And then *SORRY*. And then, smaller, after what had clearly been a long internal debate, *NOT SORRY.*" }
      ] },
      { s: 'sunoo', f: 'happy', t: "I slept till ten. Ten! I didn't know you could do that! I feel like a criminal!" },
      { s: 'sunoo', f: 'neutral', t: "I woke up at five anyway. Out of habit. And then I lay there. And nobody needed anything. And I went back to sleep. Is that what it's like for everyone? All the time?" },
      { choose: [
        { t: "(Lie on the riverbank and do nothing with him.)", notes: 3, then: [
          { n: "They lay on the frozen grass and did nothing for an hour. He kept almost getting up to do something and then lying back down, laughing at himself, and by the end of the hour he'd stopped almost getting up." }
        ] },
        { t: "(Buy him a croissant from someone else's bakery.)", notes: 3, then: [
          { s: 'sunoo', f: 'serious', t: "...It's good. It's very good. I hate it. Mine are better. This is the best day of my life." }
        ] },
        { t: "Who's minding the café?", notes: 1, then: [
          { s: 'sunoo', f: 'sad', t: "Nobody. NOBODY. Why would you say that. I was doing so well." },
          { n: "He lasted eleven more minutes before he went to check it, and she went with him, and the café was exactly where they'd left it, dark and closed and fine, and he put his hand flat on the glass like you'd put a hand on a sleeping dog, and they went back to the river." }
        ] }
      ] },
      { n: "The river went by, slow and gray, with the light lying on it in pieces. A man was fishing off the far bank and catching nothing and didn't seem to mind. Sunoo watched him for a long time with his hands behind his head." },
      { s: 'sunoo', f: 'happy', t: "I'm going to tell my grandmother. When I see her. I'm going to tell her I took a day off and the café didn't fall down. She's going to say she told me so. She's going to be so annoying about it." }
    ] },

    { title: 'sunoo for you', place: "Iwatodai Strip · Yeobo's Cafe", time: 'Evening', scene: [
      { n: "Closing time. Chairs up on the tables. The one light left on over the till, and the gold windows gone dark, and the whole café turned into the inside of a lantern somebody had forgotten to blow out." },
      { n: "Sunoo was standing in the middle of the floor with a folded piece of paper in both hands, the way you'd hold a hymn book, and he'd been standing there when she came in, and he hadn't moved since." },
      { ifFlag: 'sunoo-speech', then: [
        { s: 'sunoo', f: 'neutral', t: "You said to ask me again. I'm asking myself. Sit down. You're the whole school." }
      ], else: [
        { s: 'sunoo', f: 'flustered', t: "Okay. Don't laugh. I wrote a speech. A real one. I was too scared to give one once, at home, and I've been thinking about it ever since. Sit down. You're the whole school." }
      ] },
      { n: "She sat on the counter, which customers weren't allowed to do, and he didn't say anything about it, which was how she knew how nervous he was." },
      { s: 'sunoo', f: 'neutral', t: "Hello. My name is Kim Sunoo. I'm not running for anything." },
      { s: 'sunoo', f: 'neutral', t: "I just wanted to say that I run a café. It's my grandmother's. I'm supposed to run it perfectly, and I don't, and nobody's ever noticed, because I'm very good at smiling." },
      { s: 'sunoo', f: 'sad', t: "And I wanted to say that the people who come in here are the best part of it. And that I'm tired sometimes. And that's okay. And that I'd vote for every single one of you." },
      { s: 'sunoo', f: 'happy', t: "...Sunoo for you. Thank you. That's it. That's the whole speech. Oh my gosh." },
      { choose: [
        { t: "(Stand on the counter and cheer.)", notes: 3, then: [
          { n: "She stood up on the counter and cheered like a whole gym, loud enough that a light came on in the apartment over the ramen shop, and he put both hands over his face and laughed until he had to sit down on the floor, and from the floor, through his hands, said *I did it, I did it, I did a whole speech.*" }
        ] },
        { t: "(Clap slowly, and mean it.)", notes: 3, then: [
          { n: "She clapped, slow and steady, in the empty café, and he stood there and let her, and didn't look away, and didn't make a joke, and didn't smile through it. He just let himself be clapped for. It took a long time. Neither of them minded." }
        ] },
        { t: "You've got my vote.", notes: 3, then: [
          { s: 'sunoo', f: 'surprised', t: "You'd vote for anyone with a sun on it." },
          { s: 'solar', f: 'neutral', t: "There wasn't a sun on it." },
          { s: 'sunoo', f: 'surprised', t: "...There wasn't. I forgot the sun. I gave a whole speech without a sun." }
        ] }
      ] },
      { stat: { courage: 2 } },
      { n: "He folded the paper back up very small and put it in the CROISSANT FUND jar with the other things he didn't throw away, and she saw, on the way out, that he'd drawn a sun on it after all, in the corner, at the last minute, with a face." }
    ] },

    { title: 'the sticky note', place: "Iwatodai Strip · Yeobo's Cafe", time: 'After School', scene: [
      { n: "He'd bought a new pad of sticky notes, yellow, and he was writing on them one at a time at the counter with his tongue between his teeth, and peeling them off, and lining them up along the edge of the till in a careful row, like a man laying out instruments." },
      { s: 'sunoo', f: 'neutral', t: "The regulars. All of them. Their orders. What they like, what they say they like, what they actually like. In case they come back and I'm not here." },
      { s: 'sunoo', f: 'sad', t: "In case they come back and nobody here remembers them. Somebody should. Somebody should know the newspaper man doesn't take sugar." },
      { n: "There was one for the newspaper man. One for the bookstore ladies. One for Fuuka, *pretends she doesn't want the marshmallows, give her the marshmallows.* One for Junpei, *charge in spirit.* One for Akihiko, *milk. cold. no matter what he says it's for.* And one at the end of the row with nothing on it yet." },
      { choose: [
        { t: "Who's the blank one for?", notes: 3, then: [
          { s: 'sunoo', f: 'neutral', t: "You. I can't write it. I keep starting." },
          { s: 'sunoo', f: 'happy', t: "You don't have an order. You have a whole thing. You'd need a bigger note." }
        ] },
        { t: "(Write one for him.)", notes: 3, then: [
          { n: "She took the pen and a fresh note and wrote it while he tried to read it upside down. *Sunoo. Opens at six-ten. Says he's fine. Isn't always. Make him sit down. Make him something for once.*" },
          { s: 'sunoo', f: 'surprised', t: "...That's not a regular. That's me." },
          { s: 'solar', f: 'neutral', t: "You're the most regular person in here." },
          { n: "He put it on the till, at the front, above all the others, and pressed it flat with his thumb twice so it wouldn't come off." }
        ] },
        { t: "Who's going to read them?", notes: 2, then: [
          { s: 'sunoo', f: 'sad', t: "I don't know. Whoever's here. That's the rule." },
          { s: 'sunoo', f: 'neutral', t: "Maybe the café stays. Maybe someone finds it and doesn't know what it is and reads the notes and makes the right coffee anyway. That would be nice. That would be a really nice thing to leave." }
        ] }
      ] },
      { ifMet: ['jihoon'], then: [
        { n: "The bell went. Jihoon put his head in, looked at the row of sticky notes, and at Sunoo, and at Solar, and said loudly to nobody that this was the saddest café he'd ever been in, and then came in and ordered five croissants and stood at the counter reading every single note while he ate them, and didn't say anything else, and left a tip." }
      ] },
      { n: "When she left, the blank one was gone. She didn't see who'd taken it. She found it that night in her own coat pocket, folded in half. Inside, in his round hand, four words and a sun. *solar. whatever she wants. on the house.*" }
    ] },

    { title: 'the last tray', place: "Iwatodai Strip · Yeobo's Cafe", time: 'Early Morning', music: 'tender', scene: [
      { n: "It was the end of January, and the café was the size of a café again, the size of a small warm room on a cold street, nothing more. The windows hardly fogged. The bell over the door was quieter, as if somebody had put a hand around it. The only thing that hadn't gone thin was the smell, butter and yeast and coffee, which came out onto the Strip every morning at six-ten and stopped people on their way to the station." },
      { s: 'sunoo', f: 'neutral', t: "Last tray. I think. I don't know how I know. I just know. It's like knowing the oven's ready." },
      { ifFlag: 'route-H', then: [
        { s: 'sunoo', f: 'happy', t: "You're coming home. I know. Jungwon told us like he was reading the minutes, very calm, and then he went in the walk-in and stood there for five minutes. Jay timed it." },
        { s: 'sunoo', f: 'happy', t: "So this isn't goodbye. This is just. See you at the counter. Same order. Name for the order. I'll be there. I'm always there." },
        { choose: [
          { t: "Save me the window seat.", notes: 3, then: [
            { s: 'sunoo', f: 'happy', t: "I'm putting a sign on it. A real one this time. With a sun. You can't stop me." }
          ] },
          { t: "Take a day off when you get back.", notes: 3, then: [
            { s: 'sunoo', f: 'surprised', t: "Solar. I'll have just gotten BACK." },
            { s: 'sunoo', f: 'happy', t: "...Okay. One. In the first week. I'll write it in pen." }
          ] }
        ] }
      ], else: [
        { ifFlag: 'route-true', then: [
          { s: 'sunoo', f: 'neutral', t: "I don't know where you're going. Nobody does. Jungwon says it's everywhere. He said it like it was a math answer he'd checked twice and still didn't like." },
          { s: 'sunoo', f: 'happy', t: "So I'm going to make you a croissant everywhere. That's my plan. It's a very big plan. It's the biggest plan I've ever had." },
          { choose: [
            { t: "I'll come in. In every one of them.", notes: 3, then: [
              { s: 'sunoo', f: 'sad', t: "...Name for the order?" },
              { s: 'solar', f: 'happy', t: "Solar!" },
              { s: 'sunoo', f: 'happy', t: "Coming right up. Every time. Every single time." }
            ] },
            { t: "(Hug him over the counter.)", notes: 3, then: [
              { n: "She leaned over the counter and hugged him, the case of croissants pressing a cold stripe into her ribs, and he hugged her back with flour on both hands and didn't care about her coat, for once, at all." }
            ] }
          ] }
        ], else: [
          { s: 'sunoo', f: 'sad', t: "You're not coming home with us. I know. You don't have to say it. I could tell from your face when you came in. You do a thing with your eyebrows." },
          { s: 'sunoo', f: 'neutral', t: "That's okay. I said you didn't owe anybody a perfect version. I meant it. I'm the secretary. I don't say things I don't mean. It's in the minutes." },
          { s: 'sunoo', f: 'happy', t: "I'm going to make one every morning anyway. At home. At six-ten. An extra one. For the window seat. Whoever's there gets it. That's the rule." },
          { choose: [
            { t: "Make it a big one.", notes: 3, then: [
              { s: 'sunoo', f: 'happy', t: "They're all big. They're pretty big in size and loved by our regulars." },
              { s: 'sunoo', f: 'sad', t: "...You're my regular. You're the most regular. Okay. I'm fine. I'm totally fine. Eat it before it gets cold." }
            ] },
            { t: "Tell your grandmother about me.", notes: 3, then: [
              { s: 'sunoo', f: 'sad', t: "I'll tell her everything. She'll want to know what you ordered. I'll say a croissant. She'll say of course. Everybody gets a croissant." }
            ] }
          ] }
        ] }
      ] },
      { n: "He took the tray out at six-ten, gold and smoking and enormous, and put one on a plate, and held it out across the counter to her before anyone else in the world had eaten one, the way he had the first morning, and watched her eat it too fast, and said it was the best review he'd ever gotten." },
      { n: "She hadn't said a word. She never needed to. He waved at her through the glass with both hands when she left, like she was a train pulling out, and she turned around at the ramen shop to check, the way she always did, and he was still waving." }
    ] }
  ]
});
