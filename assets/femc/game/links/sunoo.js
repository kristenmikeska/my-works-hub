/* Sunoo · ? Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Searcher (Hoax), friendship. Kim Sunoo: Jungwon's friend and council secretary, who runs Yeobo's Cafe for his grandmother
   and insists on doing it alone because it's his duty to her; sunshine to everyone, the group's mediator, the one who
   worries out loud about whether Jungwon has eaten and who told Solar, as Jungwon's friend and hers, that she should run.
   He crossed with Jungwon's friends at Yeobo's on the Strip (≈11/7, plot doc §7: star 6; a story event); rank 1 is the
   first afternoon after. Canon echoes: the croissant recommendation and "Name for the order?" / "Solar!", "hey solar its ok!
   i am always here to talk!", "niki, cut it out", "jungwon, let us handle it". The rest of his friends (Heeseung, Jake, Jay,
   Sunghoon, Niki) are cameos. Nothing here decides Hoax's election, homecoming or romances.
   Texting voice: sunooshine, lowercase, "!!!", "dw", ":)". Arcana: '?' (open question, plot doc §16.6). */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'sunoo', name: 'Kim Sunoo', short: 'Sunoo', arcana: '?', numeral: '', from: 'Hoax',
  kind: 'searcher', world: 'H', romance: null,
  starts: '11/7', gate: { H: 6 },
  home: { area: 'strip', spot: "Yeobo's Cafe", slot: 'after', days: [0, 2, 4, 6],
          hint: "Afternoons behind the counter at Yeobo's Cafe on the Strip, which wasn't on the Strip before November." },
  approach: "There's a café on the Strip that wasn't there in October, wedged between the ramen shop and a shuttered pachinko parlor, with gold-fogged windows and a hand-lettered sign, and the boy behind the counter in a flowered apron waves at you through the glass with both hands like you're his favorite customer.",
  cast: {},
  invite: {
    ask: ["solar!!! r u free? the croissants just came out and they're perfect and nobody's here to see them", "hiii :) come by the cafe? i'll make u something new. ur the taste tester", "jungwon hasnt eaten. help. please. come to yeobos and sit with him", "r u busy? i miss talking to u!! dw if u are!!", "slow day at the cafe!! come keep me company!!", "i tried a new recipe and it's either amazing or a crime. come decide"],
    ok: ["YAY!! ill save the window seat!!", "ok!!! :) see u soon!!", "perfect!! ur croissant is waiting!!"],
    no: ["dw!!! next time!! :)", "thats ok!!! ill save u one for tmrw!!", "no worries!! eat something tho!!"]
  },
  hangouts: [
    [
      { n: "It was a slow afternoon at Yeobo's. The rain on the Strip had kept everyone home, and the café was empty except for an old man reading a newspaper by the window who'd been coming in every day since the café appeared and had never once asked where it came from." },
      { s: 'sunoo', f: 'happy', t: "He's my favorite. He orders the same thing every day and leaves exactly the right tip and never talks. He's like a cat." },
      { choose: [
        { t: "(Help him wipe down the tables.)", notes: 3, then: [
          { s: 'sunoo', f: 'surprised', t: "Oh! You don't have to— oh, okay. Okay! Thank you!" },
          { n: "He let her. He watched her do it, and redid one table, very quietly, when he thought she wasn't looking, and then didn't redo the next one." }
        ] },
        { t: "Do you ever take a day off?", notes: 2, then: [
          { s: 'sunoo', f: 'neutral', t: "No! It's my grandmother's. I run it for her. It's my job to run it perfectly." },
          { s: 'sunoo', f: 'sad', t: "...I'm a little tired. Don't tell anyone." }
        ] }
      ] }
    ],
    [
      { n: "Sunoo was trying a new recipe. That was what he called it. It was a croissant with something orange in the middle that he wouldn't name until she'd tasted it." },
      { s: 'sunoo', f: 'happy', t: "Okay! Eat it! Tell me the truth! Be honest! Be nice!" },
      { choose: [
        { t: "It's amazing.", notes: 2, then: [
          { s: 'sunoo', f: 'happy', t: "YAY! It's yuzu! Okay, I'm putting it on the menu. I'm naming it after you. The Solar." }
        ] },
        { t: "It's a crime. A delicious crime.", notes: 3, then: [
          { s: 'sunoo', f: 'happy', t: "That's the best review I've ever gotten. That's going on the sign." },
          { n: "It went on the sign. *A DELICIOUS CRIME,* in his round hand-lettering, with a little sun drawn after it. People ordered it out of curiosity. It sold out by four." }
        ] }
      ] }
    ],
    [
      { n: "Niki was sitting on the counter, which he wasn't allowed to do, eating a croissant he hadn't paid for, which he also wasn't allowed to do, and Sunoo was standing in front of him with his hands on his hips." },
      { s: 'sunoo', f: 'serious', t: "Niki. Off. Now. Off the counter." },
      { s: 'niki', f: 'happy', t: "Hyung. Hyung. Solar's here. Hi, Solar. Hyung won't let me have fun." },
      { choose: [
        { t: "(Take Niki's side.)", notes: 2, then: [
          { s: 'sunoo', f: 'surprised', t: "Solar! Not you too!" },
          { n: "Niki stayed on the counter for another four minutes, triumphant, and then got off on his own, and wiped the place he'd been sitting, without being asked, when he thought nobody was watching." }
        ] },
        { t: "(Take Sunoo's side.)", notes: 3, then: [
          { s: 'niki', f: 'sad', t: "...Fine. Fine. Two against one. That's not fair." },
          { s: 'sunoo', f: 'happy', t: "Thank you! Finally! Someone on the side of hygiene!" }
        ] }
      ] }
    ]
  ],
  ranks: [
    { after: '11/8', title: '1: name for the order', place: "Iwatodai Strip · Yeobo's Cafe", time: 'After School', music: 'tender', scene: [
      { n: "Nobody could agree on when the café had arrived. Junpei swore it hadn't been there on Friday. Fuuka said she'd heard it on Saturday night, in the Dark Hour, a whole building tuning in like a radio station, warm and full of voices. And on Sunday morning there it was, wedged between the ramen shop and the shuttered pachinko place, with its windows fogged gold and its hand-lettered sign in a language half the Strip couldn't read, and inside, six boys in navy blazers, very confused, and one of them already behind the counter in a flowered apron, turning on the coffee machine." },
      { n: "He'd gone straight to the coffee machine. That was what Mitsuru kept repeating, later, in the lounge, with real respect. *The building fell through the floor of the world and the first thing he did was open for business.*" },
      { n: "Solar came in on Sunday afternoon. The bell over the door went. The boy behind the counter looked up, and his whole face lit like a shop sign switched on at dusk." },
      { s: 'sunoo', f: 'happy', t: "Hello, welcome to the café! What can I get for you today?" },
      { n: "He said it in a voice with its customer polish on, bright and practiced. And then he heard himself say it to her, and his face did something under the brightness, a small quick fold, like a napkin going crooked." },
      { register: 'sunoo' },
      { s: 'sunoo', f: 'sad', t: "...Sorry. Habit. I know you don't— Jungwon told us. Before we came. He said you might not know us, and to be nice about it, and not to cry." },
      { s: 'sunoo', f: 'happy', t: "I'm not crying! I'm totally fine! What would you like?" },
      { choose: [
        { t: "What do you recommend?", notes: 3, then: [
          { s: 'sunoo', f: 'surprised', t: "..." },
          { s: 'sunoo', f: 'happy', t: "The croissants. They're pretty big in size and loved by our regulars. I made them myself this morning. At five." },
          { n: "He said it carefully, the whole sentence, like a line he'd said before to someone in this exact spot and had been waiting a long time to say again." }
        ] },
        { t: "Whatever you think I'd like.", notes: 3, then: [
          { s: 'sunoo', f: 'happy', t: "A croissant. Definitely. You always get a croissant. You got seven once, for all your friends, and seven coffees. You were so nervous you almost dropped the tray." }
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
      { n: "She took the croissant to the window table. It was warm and enormous and flaky and she ate it too fast, the way she apparently always ate croissants, and somewhere halfway through it she had the strangest feeling that she was late for something. A meeting. A speech. A thing she'd been pushed into and didn't want and had come in here first, to this café, to ask a stranger behind the counter if she'd be wasting her time." },
      { s: 'sunoo', f: 'neutral', t: "Is it good?" },
      { choose: [
        { t: "It's perfect.", notes: 3, then: [
          { s: 'sunoo', f: 'happy', t: "YAY. Okay. Okay, that's all I needed today. I can close now. I'm not going to close. But I could." }
        ] },
        { t: "I came in here once and asked you for advice. Didn't I.", notes: 3, then: [
          { s: 'sunoo', f: 'surprised', t: "..." },
          { s: 'sunoo', f: 'sad', t: "...You did. You were so nervous. You thought I'd laugh at you. I didn't laugh." },
          { s: 'sunoo', f: 'happy', t: "I told you to go for it. I still think you should've. I'm glad you did." }
        ] }
      ] },
      { n: "When she left he waved at her through the fogged glass with both hands, like she was a train pulling out, and kept waving until she was past the ramen shop. She turned around once to check. He was still waving." }
    ] },

    { after: '11/15', title: '2: the regulars', place: "Iwatodai Strip · Yeobo's Cafe", time: 'After School', music: 'joy', scene: [
      { n: "In a week, Yeobo's had acquired regulars. Sunoo kept a list of them on a sticky note behind the till, with their orders, in his round hand, and showed it to Solar like a man showing off photographs of his children." },
      { s: 'sunoo', f: 'happy', t: "The newspaper man, Americano, no sugar. The two ladies from the bookstore, matcha latte, split one cake. Fuuka! Hot chocolate, extra marshmallows, she pretends she doesn't want them. Junpei comes in and orders the most expensive thing and then can't afford it and I give it to him anyway." },
      { s: 'sunoo', f: 'neutral', t: "And Akihiko-sunbae came in and asked if we had protein. I said no. He looked so sad. Now I keep a carton of milk for him." },
      { n: "The bell went. Five boys in navy blazers came in like weather, all at once, loud, and filled the big table at the back with a scraping of chairs and the noise of people who'd known each other so long they no longer needed to finish sentences." },
      { n: "One of them saw Solar at the counter and stood up, and plucked a flower out of the little vase in the middle of the table, and walked over, and bowed, deeply, theatrically, holding it out." },
      { s: 'sunghoon', f: 'neutral', t: "Why hello. I'm pleased to make your acquaintance. Again. I'm told you've forgotten me. I'm told it's my fault for not being more memorable." },
      { n: "Sunoo let out a sigh of profound, ancient disappointment. A taller boy at the table stood up and came over and slapped the back of the flower boy's head, not hard, the way you'd tap a vending machine." },
      { s: 'heeseung', f: 'neutral', t: "What did I tell you. Every time. You have no common sense." },
      { choose: [
        { t: "(Take the flower.)", notes: 2, then: [
          { s: 'sunghoon', f: 'surprised', t: "...She took it. Did you see that? She took it. That's never happened." },
          { s: 'sunoo', f: 'serious', t: "She's being POLITE, Sunghoon. It's a POLITE take." }
        ] },
        { t: "Shove it somewhere unpleasant.", notes: 3, then: [
          { s: 'sunghoon', f: 'surprised', t: "..." },
          { n: "The whole table went silent. Then a boy in a letterman jacket put his head down on the table and laughed so hard his shoulders shook." },
          { s: 'jay', f: 'happy', t: "That's what her friend said! Cherry! At the first meeting! Word for word! She doesn't even remember and she still said it!" },
          { s: 'sunghoon', f: 'neutral', t: "...I do like them feisty." },
          { s: 'heeseung', f: 'serious', t: "SIT DOWN." }
        ] }
      ] },
      { n: "Sunoo, behind the counter, had his face in both hands. When he took them away he was laughing, and there were tears at the corners of his eyes, and he wiped them on his apron and said, to Solar, quietly, that he was sorry about all of them, and that he loved all of them, and that it was so good to have them all in one room again, even this room, even here." },
      { s: 'sunoo', f: 'happy', t: "It'd be really quiet without them. I'd hate it. Don't tell them. They'd be unbearable." }
    ] },

    { after: '11/22', title: '3: yours and his', place: "Iwatodai Strip · Yeobo's Cafe", time: 'Afternoon', scene: [
      { n: "Jungwon was at the window table with a stack of papers and a cup of coffee he hadn't touched, and Sunoo was watching him from behind the counter with the expression of a man watching a pot he'd been told not to watch." },
      { s: 'sunoo', f: 'sad', t: "He hasn't eaten. Since yesterday. He says he has. He hasn't. I can tell. His ears go a color." },
      { s: 'sunoo', f: 'neutral', t: "He faints, you know. At home. Sometimes. He's fainted at school, in front of everybody. He gets so busy he forgets he has a body." },
      { n: "He said it without any drama at all, the way you'd mention the weather in a town where the weather was always bad." },
      { s: 'sunoo', f: 'serious', t: "And he won't let us help. He won't let anyone help. He thinks it's his job to do everything, all of it, alone, perfectly." },
      { choose: [
        { t: "Sounds like someone I know.", notes: 3, then: [
          { s: 'sunoo', f: 'surprised', t: "..." },
          { s: 'sunoo', f: 'sad', t: "...Yeah. It does. It sounds like me with the café." },
          { s: 'sunoo', f: 'happy', t: "Wow. Okay. I didn't need to be read like that on a Sunday." }
        ] },
        { t: "What do you want me to do?", notes: 3, then: [
          { s: 'sunoo', f: 'happy', t: "Take him this. And sit with him. He'll eat if you're sitting there. He's too proud to not eat in front of you." }
        ] }
      ] },
      { n: "He put a plate on the counter. A croissant, warm, and a little bowl of soup, and a spoon, set at exactly the angle you'd set a spoon for someone you knew was going to argue." },
      { s: 'sunoo', f: 'neutral', t: "Can I tell you something? I told you to run. At home. Against him. Did you know that?" },
      { s: 'sunoo', f: 'serious', t: "You came in here and asked me if you'd be wasting your time. And I said go for it. Because he's my best friend and he needed somebody to make him stop doing it alone. And you were nice. You were so nice. I thought, she'll be good for him. Even if she wins." },
      { s: 'sunoo', f: 'sad', t: "As his friend and yours, I said. I said that in the group chat. And then I felt bad. Because I didn't ask what *you* needed. I just thought about what he needed." },
      { choose: [
        { t: "You were looking out for both of us.", notes: 3, then: [
          { s: 'sunoo', f: 'sad', t: "...I was trying. I'm always trying. I try so hard." },
          { s: 'sunoo', f: 'happy', t: "Thank you. Really. Okay. Take him the soup. Make him eat the soup." }
        ] },
        { t: "What do you need, Sunoo?", notes: 3, then: [
          { s: 'sunoo', f: 'surprised', t: "..." },
          { n: "He looked at her across the counter for a long moment. Nobody, she suspected, had asked him that in a very long time. His mouth opened and closed." },
          { s: 'sunoo', f: 'neutral', t: "...A day off. Just one. I'd sleep till ten. I'd let somebody else make the croissants." },
          { s: 'sunoo', f: 'flustered', t: "Don't tell my grandmother. Don't tell anyone. Take him the soup." }
        ] }
      ] },
      { n: "She took Jungwon the soup. She sat down across from him and didn't say anything, and he looked at the soup and at her and at Sunoo behind the counter, who was very busily not looking, and sighed like a man conceding a count, and ate it. All of it. Sunoo did a small silent dance behind the till that he thought nobody saw." }
    ] },

    { after: '11/29', title: '4: five a.m.', place: "Iwatodai Strip · Yeobo's Cafe", time: 'Early Morning', music: 'tender', scene: [
      { n: "He'd told her she could come and watch, if she wanted, if she was up, which she always was, and so at five in the morning she was standing in the back kitchen of a café that had fallen through the floor of the world, in a borrowed apron with flowers on it, with her hands in a bowl of dough." },
      { n: "It was warm in the kitchen. It smelled of butter and yeast and the cold coming in under the back door, and the only light was the one over the counter, yellow, and the radio was on very low, a station that only played old ballads, and Sunoo was humming along with all of them." },
      { s: 'sunoo', f: 'happy', t: "Fold, turn, fold. Gentle. Like you're folding a letter you don't want anyone to read." },
      { choose: [
        { t: "(Fold it exactly the way he showed you.)", notes: 3, then: [
          { n: "She folded it. Her hands were slow and careful and a little clumsy, and he watched them and didn't correct her once, just nodded, and said *good, good,* in a voice like he was talking to a puppy." },
          { s: 'sunoo', f: 'happy', t: "You're a natural. You're not. But you're trying. That's the same thing at five in the morning." }
        ] },
        { t: "(Fold it badly and make him laugh.)", notes: 2, then: [
          { s: 'sunoo', f: 'surprised', t: "That's not a fold. That's a crime scene." },
          { n: "He laughed so hard he had to put his floury hands on the counter, and left two white handprints there, and didn't wipe them off." }
        ] }
      ] },
      { s: 'sunoo', f: 'neutral', t: "My grandmother taught me. When I was nine. She stood me on a stool so I could reach. She'd do this every morning for thirty years." },
      { s: 'sunoo', f: 'sad', t: "Her knees aren't good anymore. She can't stand at the counter all morning like she used to. So I do it. Before school. Every day. It's my job to run it perfectly for her. She doesn't ask me to. I just do." },
      { n: "He folded the dough in silence for a while. The radio played a song about a train station. Outside the back door the Strip was still dark." },
      { s: 'sunoo', f: 'sad', t: "She's at home. With nobody to make the croissants. I keep thinking about it. She's probably fine. It's probably still the same night there. She's probably asleep." },
      { s: 'sunoo', f: 'neutral', t: "But what if it's not. What if she came down this morning and the café was just gone, and there was a hole in the street, and she's standing there in her slippers." },
      { choose: [
        { t: "She's asleep. It's still the same night.", notes: 3, then: [
          { s: 'sunoo', f: 'sad', t: "...Do you really think so?" },
          { s: 'solar', f: 'neutral', t: "Everyone's phone says so. Everyone's watch." },
          { s: 'sunoo', f: 'happy', t: "...Okay. Okay. She's asleep. She's dreaming about the café. She does that. She told me." }
        ] },
        { t: "(Put your floury hand on his.)", notes: 3, then: [
          { n: "She put her hand over his on the dough. Both of them floury. He looked at it, and blinked, and didn't say anything, and after a while he started humming again, along with the radio, slightly off." }
        ] }
      ] },
      { n: "The first tray came out of the oven at six-ten, gold and smoking and enormous, and he put one on a plate and held it out to her before anyone else in the world had eaten one, and watched her eat it too fast, and said it was the best review he'd ever gotten, and she hadn't said a word." }
    ] },

    { after: '12/6', title: '5: hyung', place: "Iwatodai Strip · Yeobo's Cafe", time: 'After School', scene: [
      { n: "Sunoo had a photo on his phone that he showed to everyone. Six boys on the steps of a school she'd never seen, in navy blazers, in the sun, arms around each other's necks, and in the middle, very straight, not quite smiling, a boy who was the only one with his blazer buttoned." },
      { s: 'sunoo', f: 'happy', t: "That's us! Last spring. Heeseung-hyung, he's the vice president, he's the dad. Jay, he plays football, he's the other dad but meaner. Jake, he's the nice one, he has a dog named Layla, he'll show you a hundred pictures if you let him. Sunghoon. You've met Sunghoon. I'm so sorry about Sunghoon." },
      { s: 'sunoo', f: 'neutral', t: "Niki. He's the youngest. He's the worst. I love him the most. Don't tell him." },
      { s: 'sunoo', f: 'neutral', t: "And Jungwon. In the middle. Not smiling. He thinks smiling in photos is unprofessional." },
      { choose: [
        { t: "Where are you?", notes: 3, then: [
          { s: 'sunoo', f: 'surprised', t: "Oh! I took it. I'm always taking it." },
          { s: 'sunoo', f: 'sad', t: "...I'm never in any of them, actually. Huh. I never noticed that." }
        ] },
        { t: "You all look happy.", notes: 2, then: [
          { s: 'sunoo', f: 'happy', t: "We were. We are. Mostly. Being friends with someone who works too hard is like being friends with a very polite storm." }
        ] }
      ] },
      { s: 'sunoo', f: 'neutral', t: "You know he looks at you differently? Here. Jungwon." },
      { s: 'sunoo', f: 'serious', t: "At home you two were always— it was a competition. Every room. Who talked first. Who got the last word. Here he just. Watches you walk in. Like he's been waiting for you all day and he's embarrassed about it." },
      { n: "He said it without teasing. Sunoo didn't tease, Solar had noticed. Niki teased. Jay teased. Sunoo said the true thing and then looked worried that it might have hurt someone." },
      { choose: [
        { t: "Don't tell him you told me.", notes: 3, then: [
          { s: 'sunoo', f: 'happy', t: "I would NEVER. He'd make it a policy. He'd make a policy against me telling you things." }
        ] },
        { t: "Is that bad?", notes: 3, then: [
          { s: 'sunoo', f: 'neutral', t: "No! No, it's good. It's so good. He needs someone to wait for that isn't a deadline." },
          { s: 'sunoo', f: 'sad', t: "I just hope it doesn't hurt him. Whatever happens. He's so bad at being hurt. He just gets politer." }
        ] }
      ] },
      { n: "He put the phone away. Then took it out again, and turned the camera around, and held it up at arm's length, and pulled her into the frame beside him before she could object, his cheek against her hair, his smile enormous." },
      { s: 'sunoo', f: 'happy', t: "There! Now I'm in one. With you. That counts. That's going in the album." }
    ] },

    { after: '12/13', title: '6: sunshine', place: "Iwatodai Strip · Yeobo's Cafe", time: 'Evening', scene: [
      { n: "It was closing time and the café was empty and Sunoo was sitting on the floor behind the counter with his back against the cabinets and his knees up and his apron still on, not moving, staring at nothing, and he didn't hear the bell go." },
      { n: "She found him there. He looked up at her from the floor and smiled, instantly, a reflex, the way a lamp comes on when you open a door, and then, when she didn't smile back, let it go. It went out of his face slowly, all the way, and what was under it was very tired." },
      { s: 'sunoo', f: 'sad', t: "...Hi. Sorry. I'm just. Sitting. For a minute." },
      { choose: [
        { t: "(Sit on the floor next to him.)", notes: 3, then: [
          { n: "She sat on the floor next to him behind the counter, where the customers couldn't see, among the spare cups and the bags of flour and a broom, and he leaned his head back against the cabinet and closed his eyes." }
        ] },
        { t: "You don't have to smile at me.", notes: 3, then: [
          { s: 'sunoo', f: 'surprised', t: "..." },
          { s: 'sunoo', f: 'sad', t: "...Nobody's ever said that to me. Not once. Everyone always says, *Sunoo, you're always smiling.* Like it's a compliment." }
        ] }
      ] },
      { s: 'sunoo', f: 'sad', t: "Everyone calls me sunshine. At home. On my handle, even. I picked it. I liked it." },
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
        ] }
      ] },
      { s: 'sunoo', f: 'neutral', t: "At home I make a cake for everyone every year. Even the guys who say they don't like cake. Even Jay, who says cake is for children and then eats three slices." },
      { s: 'sunoo', f: 'sad', t: "This year I don't know if I'll be home for it. Or if it's even Christmas there. It might be the same night still. Nobody can agree." },
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
      ] }
    ] },

    { after: '1/10', title: '8: what do you want', place: "Iwatodai Strip · Yeobo's Cafe", time: 'Afternoon', scene: [
      { n: "January, and the café's windows were fogged so thick from the inside you couldn't see the Strip at all, just gold, just the shapes of people going past like fish behind frosted glass. Sunoo had made two hot chocolates and sat down across from her at the window table, which he never did during opening hours, and put both elbows on the table and his chin in his hands." },
      { s: 'sunoo', f: 'neutral', t: "Okay. I'm going to ask you something nobody's asked you." },
      { s: 'sunoo', f: 'neutral', t: "Everyone's asked you to come home. I know. Jihoon asked at the arcade. Jungwon didn't ask, which is how he asks. Cherry yelled. Junkyu cried. I heard all of it. The guys tell me everything." },
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
      { n: "They drank the chocolate. Outside the gold windows the Strip went by. The old newspaper man came in and sat in his chair and opened his paper and didn't look at either of them, and Sunoo didn't get up to serve him for a whole three minutes, which Solar understood was the most rebellious thing he'd ever done." }
    ] },

    { after: '1/23', title: '9: on the house', place: "Iwatodai Strip · Yeobo's Cafe", time: 'After School', scene: [
      { n: "A week left, and the café knew it. Things had started going missing. Not stolen. Just gone, the way things go at the end of a dream, a little at a time. The vase on the big table one morning. The sticky note of regulars, then the regulars themselves, the bookstore ladies and then the newspaper man, who simply stopped coming, as if the Strip had already started to forget there'd ever been a café here." },
      { n: "Sunoo hadn't mentioned it. He'd kept opening. Every morning at six-ten, gold and smoking, the first tray." },
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
        ] }
      ] },
      { s: 'sunoo', f: 'serious', t: "Can I say something as your friend? And his? Like I did before?" },
      { s: 'sunoo', f: 'neutral', t: "Whatever you pick. You don't owe anyone a perfect version of it. Not him. Not us. Not the café. You just pick, and you do it your way, and it's on the house." },
      { n: "He came around the counter and hugged her, quick, floury, the way you'd hug someone on a platform when the doors were about to close, and then went back behind the counter before she could see his face, and started wiping a table that didn't need wiping." }
    ] },

    { after: '1/27', title: '10: solar!', place: "Iwatodai Strip · Yeobo's Cafe", time: 'After School', music: 'tender', scene: [
      { n: "Four days left. The café was still there. Smaller, somehow. The windows less fogged. The gold less gold. Sunoo behind the counter in his grandmother's apron, turning on the coffee machine as if it were any day at all, and the bell going when she came in, and his face lighting up like a shop sign switched on at dusk, exactly the way it had the first time." },
      { s: 'sunoo', f: 'happy', t: "Hello, welcome to the café! What can I get for you today?" },
      { n: "And she knew him." },
      { n: "A rainy afternoon. A girl she'd been, short and indecisive and nervous, at the front of a nearly empty café, staring at a menu without reading it, trying to work out what would feed six friends who ate a scary amount, and a boy behind the counter who'd recognized her and not said so, who'd been told she might hate his best friend, who'd listened to her ask if she'd be wasting her time and told her, kindly, to go for it. Who'd recommended the croissants. Who'd asked her name for the order, and written it down, and smiled." },
      { s: 'solar', f: 'neutral', t: "...Seven croissants and seven coffees, please." },
      { n: "His hands stopped on the coffee machine." },
      { s: 'sunoo', f: 'surprised', t: "..." },
      { s: 'sunoo', f: 'sad', t: "...And the name for the order?" },
      { s: 'solar', f: 'happy', t: "Solar!" },
      { n: "She said it the way she'd said it the first time. Bright. Too loud. Happy to be asked. And Sunoo laughed, and the laugh broke in the middle, and he put both hands flat on the counter and bent his head over them and cried, all the way, for once, in front of someone, sunshine with the switch off, and didn't try to smile through it at all." },
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
        ] }
      ] },
      { n: "He made seven croissants and seven coffees. There were only two of them in the café. They ate as many as they could at the window table, and wrapped the rest in paper for the dorm, and on the bag, in his round hand, under her name, he drew a sun with a face on it, and two pink cheeks, and a little heart." },
      { s: 'sunoo', f: 'happy', t: "On the house. Always. Wherever." }
    ] }
  ],

  afterMax: [
    { title: 'six-ten', place: "Iwatodai Strip · Yeobo's Cafe", time: 'Early Morning', scene: [
      { n: "The first tray, gold and smoking, at six-ten. Two aprons. The radio playing old ballads very low." },
      { s: 'sunoo', f: 'happy', t: "Fold, turn, fold. Like a letter you don't want anyone to read." },
      { choose: [
        { t: "(Fold it perfectly this time.)", notes: 3, then: [
          { s: 'sunoo', f: 'surprised', t: "...That's a perfect fold. That's my grandmother's fold. Okay. You're hired. Unpaid. Forever." }
        ] },
        { t: "(Hum along with the radio.)", notes: 3, then: [
          { n: "They hummed along, both slightly off, in different directions, and it was the best duet the café had ever heard." }
        ] }
      ] }
    ] },
    { title: 'a day off', place: 'Iwatodai · Riverside', time: 'Afternoon', scene: [
      { n: "He'd closed the café. For a whole afternoon. The sign on the door said *DAY OFF* in his round hand, with a sun drawn after it, and then *SORRY*, and then, smaller, *NOT SORRY.*" },
      { s: 'sunoo', f: 'happy', t: "I slept till ten. Ten! I didn't know you could do that! I feel like a criminal!" },
      { choose: [
        { t: "(Lie on the riverbank and do nothing with him.)", notes: 3, then: [
          { n: "They lay on the frozen grass and did nothing for an hour. He kept almost getting up to do something and then lying back down, laughing at himself, and by the end of the hour he'd stopped almost getting up." }
        ] },
        { t: "(Buy him a croissant from someone else's bakery.)", notes: 3, then: [
          { s: 'sunoo', f: 'serious', t: "...It's good. It's very good. I hate it. Mine are better. This is the best day of my life." }
        ] }
      ] }
    ] }
  ]
});
