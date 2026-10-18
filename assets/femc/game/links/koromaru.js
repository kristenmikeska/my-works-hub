/* Koromaru · XI Strength. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'koromaru', name: 'Koromaru', short: 'Koromaru', arcana: 'Strength', numeral: 'XI', from: 'Persona 3',
  kind: 'sees',
  romance: null,
  starts: '8/10',
  home: { area: 'shrine', spot: 'Steps', slot: 'evening', days: [1, 3, 5],
          hint: 'Evenings on Monday, Wednesday and Friday, on the shrine steps, when somebody takes him for his walk.' },
  approach: "A white dog with a red collar is sitting at the very top of the shrine steps with his back to the street, perfectly still, facing the shuttered house behind the offering hall, and one ear turns toward you before the rest of him does.",
  invite: null,
  cast: { caretaker: 'Shrine Caretaker' },
  hangouts: [
    [
      { n: "Somebody had left a tennis ball on the shrine playground, bald and gray and soft as a peach, and Koromaru found it the way he found everything, instantly and with total moral certainty that it was his. He brought it to Solar on the bench and set it down on her shoe, and backed up two steps, and lowered his front half into the gravel with his tail going, and looked at her with his red eyes like she was the most important person in Iwatodai, which, for the next twenty minutes, she was." },
      { choose: [
        { t: "(Throw it as far as you can.)", notes: 3, then: [
          { n: "She threw it as far as she could, which turned out to be farther than she expected, over the swings and the low wall and into the azaleas, and he went after it like he'd been fired from something, a white streak through the dusk, and came back with it and three leaves and a look of enormous pride, and dropped all four on her shoe." }
        ] },
        { t: "(Fake the throw.)", notes: 2, then: [
          { n: "She faked the throw. He did not move. He looked at her hand, and then at her face, with the patient disappointment of a teacher who has seen this trick from every student in every year, and she laughed out loud and threw it properly, and he forgave her before it landed." }
        ] },
        { t: "(Roll it gently across the gravel.)", notes: 1, then: [
          { n: "She rolled it gently. He watched it come all the way to his paws and stop, and looked up at her as if to ask whether she was feeling all right, and then picked it up and carried it a little way off and lay down with it, politely, to give her time to think about what she'd done." }
        ] }
      ] },
      { n: "They played until the lamps came on along the path and the gravel went blue. On the way home he carried the ball the whole way in his mouth, very carefully, like a waiter with a full tray, and when they got to the dorm he put it in his bowl, and nobody was allowed to touch it for a week." }
    ],
    [
      { n: "It had been decided, at some point and by nobody in particular, that Koromaru needed a bath, and it had been decided by Koromaru, much more definitely, that he did not. The fight happened in the dorm's back courtyard with a hose and a bucket and a bottle of dog shampoo that smelled aggressively of green apples. Junpei held the hose. Yukari held the shampoo and an opinion. Solar was assigned the dog." },
      { s: 'junpei', f: 'happy', t: "Okay. Okay. On three. One. Two..." },
      { s: 'yukari', f: 'surprised', t: "Junpei, don't count, he knows what counting is!" },
      { n: "He did know what counting was. By two he had gone completely limp in Solar's arms, a dead weight of white fur, the way a toddler goes limp in a supermarket, and at three he exploded out of them and shook himself in a full circle, and the courtyard and everyone in it was soaked before a single drop had come out of the hose." },
      { choose: [
        { t: "(Get down on your knees in the puddle and just do it.)", notes: 3, then: [
          { n: "She knelt in the puddle and got him by the collar and her other arm around his chest, and talked to him the whole time, low, nonsense, good boy, almost done, that's it, and he stood there trembling with his ears flat and his eyes full of betrayal and let her, and when it was over he pressed his whole soaked body against her chest as if she'd saved him from it." }
        ] },
        { t: "(Turn the hose on Junpei.)", notes: 2, then: [
          { s: 'junpei', f: 'surprised', t: "HEY. Hey! Traitor! Leader's a traitor!" },
          { n: "Koromaru, watching from under the bench, barked twice in what was unmistakably approval, and came out, and let Yukari wash him while everyone was distracted. Strategy, Solar thought. Or luck. With him it was hard to tell." }
        ] },
        { t: "(Try to reason with him.)", notes: 1, then: [
          { n: "She crouched and explained to him, calmly, about cleanliness and the dorm couch. He listened to every word. Then he went and lay down in a flowerbed." }
        ] }
      ] },
      { n: "Afterward he ran laps of the lounge for ten minutes to get the bath off, rubbing his face along the rug and under the couch cushions while Mitsuru looked on with an expression of great restraint, and he smelled like green apples for three days, and he seemed to hold all of them personally responsible, and he slept on Solar's feet that night anyway." }
    ],
    [
      { n: "Evenings in the lounge, Koromaru did rounds. It was the only word for it. He went from person to person like a night nurse on a ward, Akihiko's shin, Fuuka's knee, the end of the couch where Junpei's sock was, a pause by the armchair to check that Mitsuru's hand would come down to the top of his head, which it always did, without her looking up from her book. Then he'd stand in the middle of the rug and survey them, all of them, like he was counting." },
      { n: "Tonight, at the end of the rounds, he came and stood in front of Solar, where she was sitting on the floor with her back against the couch, and looked at her for a while with his head on one side." },
      { choose: [
        { t: "(Pat the floor beside you.)", notes: 3, then: [
          { n: "She patted the rug. He considered it. Then he turned around twice and lay down, not beside her but across her legs, his whole warm weight settling over her shins with a long sigh, like a man getting into a bath, and put his chin on her knee and shut his eyes." }
        ] },
        { t: "Did I pass?", notes: 2, then: [
          { n: "He sneezed, which might have been yes. Then he lay down against her side, which was definitely yes." }
        ] },
        { t: "(Keep reading.)", notes: 1, then: [
          { n: "She kept reading. He waited, very politely. Then he went and lay on Akihiko's feet instead, and looked back at her once over his shoulder, as if to say she knew where to find him." }
        ] }
      ] },
      { n: "The heater ticked. Somebody laughed at the TV. On the rug, his flank went up and down against her, slow and steady, and she found her own breathing had matched it without asking her, and she stayed like that until her legs went to sleep, and then a while after, because she didn't want to be the one to move." }
    ]
  ],
  ranks: [
    { after: '8/10', title: '1: the lead', place: 'Iwatodai Dorm · Front', time: 'Evening', scene: [
      { music: 'evening' },
      { n: "Koromaru's lead hung on a hook by the front door, red, like his collar, a little frayed at the loop where somebody's hand had held it for years before any of them had. He had come to live at the dorm in August, along with Ken, and a great deal of paperwork Mitsuru didn't discuss, and he had settled into the place the way water settles into a dent, as if there had always been a white dog-shaped space in the front hall waiting for him." },
      { n: "It was Ken who asked her. He was standing by the hook with the lead in both hands and his school bag still on his back, looking up at her with the face of somebody who had rehearsed this." },
      { s: 'ken', f: 'neutral', t: "Solar-san. Excuse me. Are you busy this evening?" },
      { s: 'ken', f: 'neutral', t: "Koromaru goes out at seven. He's very particular about it. I'd take him, but Mitsuru-san says I'm not allowed out after dark by myself, which is reasonable, I suppose. Given the circumstances." },
      { s: 'ken', f: 'serious', t: "And Junpei-san forgot him on Tuesday. He stood by the door for an hour." },
      { n: "Koromaru, at the sound of his name, came around the corner from the lounge at a trot, nails clicking on the floor, and sat down at Solar's feet and looked up at her, red-eyed and calm, the way you'd look at a taxi you'd been told would be arriving." },
      { choose: [
        { t: "Of course I'll take him.", notes: 3, then: [
          { s: 'ken', f: 'happy', t: "Thank you! He likes the shrine. You don't have to steer. He knows the way better than anybody." },
          { n: "Ken handed her the lead with both hands, formally, like a diploma, and Koromaru stood up before she'd even taken it." }
        ] },
        { t: "Why me?", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "Because he looked at you. When you came in. He doesn't look at everyone." },
          { n: "She didn't know what to say to that, so she took the lead." }
        ] },
        { t: "Does he bite?", notes: 1, then: [
          { s: 'ken', f: 'serious', t: "Only Shadows." },
          { n: "He said it with perfect seriousness, as a fact about the dog, and Koromaru yawned enormously, showing every tooth, which did not help." }
        ] }
      ] },
      { register: 'koromaru' },
      { place: 'Naganaki Shrine', time: 'Evening' },
      { n: "Everybody in Iwatodai knew the white dog from the shrine steps. Solar had known him since the spring, a little, the way you know a landmark, a shape at the top of the stone stairs on the way to somewhere else, always facing the same direction. She hadn't known the whole of it, until Ken told her in the front hall in a small careful voice, that the old priest who'd lived behind the offering hall had died, and that afterward the dog had stayed, every day, for a very long time, on the top step, waiting for somebody to come home who wasn't going to." },
      { n: "He didn't pull. He walked half a body's length ahead of her the whole way, his curled tail going like a flag, stopping exactly where he meant to stop, at a lamppost, at a crack in the pavement, at a vending machine whose smell he seemed to have strong feelings about, and starting again exactly when he'd finished. It was the most decided walk she'd ever been taken on. The August evening was thick and slow and loud with cicadas, the heat coming up off the road in soft waves, and the shrine at the end of it was dim and green and smelled of cedar and old incense and dust." },
      { n: "At the top of the steps he sat down. Not to rest. He sat with his back to the street and his face toward the little house behind the offering hall, its shutters closed, a broom still leaning by the door that nobody had moved, and he went completely still." },
      { choose: [
        { t: "(Sit down a step below him.)", notes: 3, then: [
          { n: "She sat down one step below him, so she wasn't in his way and wasn't in his eyeline, and put the lead loose on the stone. After a while his ear turned toward her. After a longer while he leaned, very slightly, so that his flank touched her shoulder through her shirt, warm, and stayed." }
        ] },
        { t: "(Sit beside him and look where he's looking.)", notes: 2, then: [
          { n: "She sat beside him and looked at the house too, at the shutters and the broom. There wasn't anything to see. That was the thing, she thought. You looked anyway." }
        ] },
        { t: "Koromaru. Come on. Let's go home.", notes: 1, then: [
          { n: "He didn't move. He didn't look at her. His tail went once on the stone, politely, the way you'd nod at someone talking to you on a train, and then was still again." },
          { n: "She sat down. It seemed to be what you did." }
        ] }
      ] },
      { n: "They sat there a long time. The cicadas wound down one by one in the trees. Somewhere below them a bicycle bell rang on the street, and a woman called a child in for dinner, and the child didn't come. The sky over the roof of the offering hall went from orange to violet to the deep blue of the inside of a bottle, and Solar, who also didn't know where she'd come from or who she was waiting for, found it easier than she'd expected to sit very still on a stone step with someone who understood that you didn't have to explain it." },
      { s: 'koromaru', f: 'neutral', t: "Wuff." },
      { n: "When the lamps along the path flickered on, he stood up. He shook himself, a long shake that started at his ears and went all the way down to the tip of his tail, and turned around, and looked at her, and then at the steps going down." },
      { choose: [
        { t: "(Let him lead the way home.)", notes: 3, then: [
          { n: "She let him lead. He took her home a different way from the way they'd come, longer, past the playground and the little bridge, and she understood somewhere around the bridge that she was being shown something, the route of somebody's evening that had been walked a thousand times, and that she was being allowed onto it." }
        ] },
        { t: "Ready?", notes: 2, then: [
          { s: 'koromaru', f: 'happy', t: "Arf!" },
          { n: "He went down the steps two at a time, looking back at every landing to make sure she was coming." }
        ] },
        { t: "(Pick up the lead and start walking.)", notes: 1, then: [
          { n: "She started down the steps. He followed, a little behind, which was wrong, and she felt it, and couldn't have said how." }
        ] }
      ] },
      { n: "Ken was waiting in the front hall when they got back, pretending he wasn't, with a book open upside down. Koromaru went to him first, and leaned on his legs, and then came back to Solar and sat on her feet for one second, a heavy warm weight, before he went and drank his entire bowl of water in one go, like a man home from work." }
    ] },
    { after: '8/20', title: '2: the end with the plum', place: 'Naganaki Shrine', time: 'Evening', scene: [
      { music: 'joy' },
      { n: "The dorm had bought dog food. Somebody had looked up what you were supposed to feed a dog and bought the most expensive bag in the pharmacy, with a picture of a golden retriever on it running across a meadow in slow motion, and Koromaru had sniffed it, and looked up at the person holding the bowl, and walked away, and that had been the end of the dog food as far as he was concerned." },
      { n: "Solar had brought a handful in her pocket anyway, on the theory that he might feel differently in the open air. At the top of the steps she held it out on her palm. He sniffed it with great courtesy. Then he sat down and looked at the shuttered house, as if she had said something embarrassing and he was giving her a moment to collect herself." },
      { choose: [
        { t: "(Go and get him something better.)", notes: 3, then: [
          { n: "She went down to the convenience store at the bottom of the hill. He watched her go from the top step, and was still watching when she came back, which she noticed, and which did something to her chest she didn't examine." }
        ] },
        { t: "(Sit down and wait him out.)", notes: 2, then: [
          { n: "She sat and waited him out. He was much, much better at it than she was. After twenty minutes she got up and went down the hill to the convenience store, and he watched her go with what she could only describe as satisfaction." }
        ] },
        { t: "(Eat a piece yourself to show him it's fine.)", notes: 1, then: [
          { n: "She ate one. It tasted exactly like the bag looked, golden and meadowy and like cardboard somebody had been very nice to. He watched her chew with an expression of deep and tender pity. She went down to the convenience store." }
        ] }
      ] },
      { n: "She didn't know what to buy a dog. She stood in front of the rice balls for a long time under the cold white light, salmon and tuna and kelp and pickled plum, and in the end her hand went to the plum one by itself, the way it sometimes did with things, and she let it." },
      { n: "When she unwrapped it on the steps, he changed. His ears came forward. He stood up. He didn't snatch, he didn't beg, he just stood and waited, trembling a little all over, his eyes on her hands, and when she broke off the end, the end with the plum in it, the sour red heart, and held it out, he took it out of her fingers so gently she barely felt his teeth." },
      { n: "He didn't eat it. He carried it to the top step, and put it down there on the stone, facing the shuttered house. He looked at it. He looked at the house. Then he lay down and ate it very slowly, in small bites, with his eyes half shut, like an old man in a café who has ordered the same thing every morning for thirty years." },
      { choose: [
        { t: "(Let him do it his way. Don't watch too closely.)", notes: 3, then: [
          { n: "She looked away, at the trees, at the lamps, at nothing, to give him his privacy, the way you'd look away from someone saying grace at a table where nobody else was. When she looked back he'd finished, and was licking the stone where it had been, carefully, all of it." }
        ] },
        { t: "(Offer him the rest of the rice ball.)", notes: 2, then: [
          { n: "She held out the rest. He looked at it and then at her, and didn't take it. It was the end he'd wanted. Only the end. She ate the rest herself, and it was sour and salty and good, and he watched every bite like he was making sure it went to the right place." }
        ] },
        { t: "You can eat it here, silly.", notes: 1, then: [
          { n: "He didn't look up. Some things weren't hers to correct, she realized, about a second after she'd tried to correct one." }
        ] }
      ] },
      { ifFlag: 'shinjiro-coma', then: [
        { n: "Back at the dorm she went to the kitchen to wash the rice off her fingers, and opened the cupboard where the dog food lived, and found a strip of paper taped to the inside of the door in blunt, square handwriting that wasn't anyone's she knew well enough to name, and then was." },
        { n: "*NOT THIS. RICE + EGG, LITTLE BROTH. END OF THE ONIGIRI W/ PLUM. THE OLD MAN USED TO.*" },
        { n: "It had been there for weeks, probably. Nobody had seen it. He'd put it where only the person standing in front of the dog food, wondering what to do, would ever find it. Solar stood there with the cupboard open and the tap running for a long time, until the water had gone cold over her hands and she'd forgotten what she'd come in to wash off." },
        { choose: [
          { t: "(Leave it exactly where it is.)", notes: 3, then: [
            { n: "She left it there. She shut the cupboard very carefully, the way you'd shut a door on someone sleeping." }
          ] },
          { t: "(Copy it out for Ken.)", notes: 2, then: [
            { n: "She copied it out on the back of a receipt, word for word, for Ken, and left the original where it was. Ken took the copy and read it and folded it into quarters and put it in his breast pocket, behind his student ID, and said thank you without looking up." }
          ] },
          { t: "(Take it down and keep it.)", notes: 1, then: [
            { n: "She started to peel it off, and stopped halfway, and pressed the tape back down with her thumb. It wasn't hers to keep. It was the dog's." }
          ] }
        ] }
      ], else: [
        { n: "Footsteps on the stone behind her, heavy, unhurried. Koromaru's tail started going before she'd even turned around." },
        { s: 'shinjiro', f: 'neutral', t: "Tch. He's not gonna eat that crap from the bag." },
        { n: "Shinjiro Aragaki came up the last steps with his hands in the pockets of his long coat and a plastic container under one arm, and stopped when he saw the rice ball wrapper in her lap, and the dog licking the stone. Something went across his face, quick, and was gone." },
        { s: 'shinjiro', f: 'neutral', t: "Huh. You gave him the end." },
        { s: 'solar', f: 'neutral', t: "The plum end. My hand picked it." },
        { s: 'shinjiro', f: 'neutral', t: "Old man used to do that. Every night, right here. Gave him the sour bit and ate the rest himself. Dog's got no sense. Loves it." },
        { choose: [
          { t: "How do you know that?", notes: 2, then: [
            { s: 'shinjiro', f: 'neutral', t: "Used to come by. Before. Whatever." },
            { n: "He said whatever like a door shutting, and crouched down, and opened the container, and the smell of rice and egg and broth came up warm into the cooling evening, and Koromaru, who had just eaten, looked at it like he'd been starving for a week." }
          ] },
          { t: "(Move over on the step to make room for him.)", notes: 3, then: [
            { n: "She moved over. He looked at the space a second too long, like it was a thing he wasn't sure he was allowed, and then sat in it, heavily, his knees up, and opened the container, and the smell of rice and egg and broth came up warm into the cooling evening." },
            { s: 'shinjiro', f: 'happy', t: "...Don't tell anybody I sat." }
          ] },
          { t: "You've been feeding him?", notes: 1, then: [
            { s: 'shinjiro', f: 'neutral', t: "Somebody had to. Don't make it a thing." },
            { n: "She didn't make it a thing. He crouched and opened the container anyway, and the smell of rice and egg came up warm into the evening." }
          ] }
        ] },
        { s: 'shinjiro', f: 'neutral', t: "Rice and egg. Little bit of broth. Not the bag. And the end of the onigiri with the plum, if you're getting one. That's it. That's the whole manual." },
        { n: "He said it to the dog, not to her, but it was meant for her, and they both knew it, and he left before she could say anything about it, his coat swinging, his hand going down once to the top of Koromaru's head on the way past without his looking." }
      ] },
      { n: "On the walk home, Koromaru walked so close to her leg that his shoulder bumped her knee every few steps. She bought two plum rice balls at the convenience store at the bottom of the hill. One for tonight. One, she told herself, for nothing, for the fridge, in case. He watched her put it in her bag with the air of a dog who had heard the words in case before and knew exactly what they meant." }
    ] },
    { after: '8/30', title: '3: nobody on the bench', place: 'Naganaki Shrine', time: 'Evening', scene: [
      { music: 'mystery' },
      { n: "Summer had started to come loose at the edges. The evenings were still hot, but the heat had stopped meaning it, and there was a smell in the air at dusk now, faint and green-gold, like something drying out somewhere. The cicadas had changed their song. The loud daytime ones were dying off and the evening ones had come in, the ones that sounded like somebody running a wet finger around the rim of a glass, high and sad and on and on." },
      { n: "Koromaru took her to the playground behind the shrine instead of the steps. That was new. He went straight past the offering hall without stopping, nose low, tail level, the way he walked in Tartarus, which she had seen, and which was a completely different dog." },
      { n: "There was a bench at the edge of the playground under the big ginkgo, an ordinary wooden bench with the green paint peeling, and a plaque on the back nobody could read anymore, and nobody on it." },
      { n: "He stopped ten meters short. Every hair along his spine stood up in a white ridge. He barked at the bench, once, deep in his chest, a sound she had only ever heard him make at Shadows, and then again, and then went still, one forepaw lifted, staring at the empty seat." },
      { choose: [
        { t: "(Stand beside him and look at the bench too.)", notes: 3, then: [
          { n: "She stood beside him and looked. The bench. The peeling paint. The ginkgo leaves on the seat, one, two, three, a fourth turning over by itself in no wind she could feel. The back of her neck went cold in a way that had nothing to do with the evening. She didn't move, and she didn't pull him back, and she didn't tell him there was nothing there, because she was the last person alive who could tell anyone that." }
        ] },
        { t: "Who's there?", notes: 2, then: [
          { n: "Her own voice sounded strange in the playground, too loud and too careful. Nobody answered. The swings didn't move. The fourth ginkgo leaf on the seat turned over by itself, in no wind she could feel." }
        ] },
        { t: "(Pull him away from it.)", notes: 1, then: [
          { n: "She pulled on the lead. He didn't budge. He was much stronger than he looked, she remembered, a dog who carried a knife in his teeth on full-moon nights. He leaned against the pull and kept looking, and she stopped pulling, because it was clearly going to happen whether she held the lead or not." }
        ] }
      ] },
      { n: "Then his hackles went down." },
      { n: "All at once, like a hand had smoothed them. His ears came up. His tail, which had been stiff and still, began to go, slowly at first, and then all the way, the whole back half of him going with it, and he walked forward to the bench at an easy trot and sat down beside it, at the place where a person's knees would be, and tilted his head up, and back, a little, the way he did when Mitsuru's hand came down on the top of his head without her looking." },
      { s: 'koromaru', f: 'happy', t: "Wuff." },
      { n: "There was nobody on the bench. Solar looked very hard. There was nobody on the bench." },
      { choose: [
        { t: "(Sit down on the other end of the bench.)", notes: 3, then: [
          { n: "She went and sat down on the far end of it, carefully, leaving the near end empty, the end where his head was tilted, and folded her hands in her lap. The wood was warm. Warmer than it should have been, at this time of evening, under a tree. She didn't think about that. She sat there with whoever it was, or wasn't, and let the dog have his visit." }
        ] },
        { t: "(Stay standing. Wait.)", notes: 2, then: [
          { n: "She stayed where she was and waited. It seemed rude to interrupt. That was the strangest part, afterward, that rude was the word that came to her, and not frightened." }
        ] },
        { t: "Koromaru. Come here.", notes: 1, then: [
          { n: "He looked at her, and his tail went once, kindly, and he didn't come. He came when he was ready, a few minutes later, and when he did he walked past her without stopping, as if she'd been the one who wasn't there." }
        ] }
      ] },
      { n: "It went on for maybe five minutes. Koromaru sat by the bench and wagged, and sometimes lifted his nose, and once made a low, contented grumble in his throat, the noise he made in the lounge when someone found the place behind his ear. The evening cicadas sang their wet-glass song. And then he stood, and shook himself, ears to tail, and looked up at the empty air above the bench one more time, and turned, and trotted back to her as if nothing had happened at all, and nudged her hand with his nose to say they were going now." },
      { n: "She didn't ask. Nobody in this city had ever been able to explain anything that happened to her, least of all her, and she found she wasn't going to ask the dog to be the first. Things were here that shouldn't be. She was one of them. She had a feeling she'd been kinder about it, just now, than anybody had managed to be about her, and that he'd taught her how." },
      { n: "At the top of the steps she looked back. The bench was empty under the ginkgo. The leaves lay still on the seat. Koromaru didn't look back, which was, she thought, its own kind of answer, and she followed him down into the warm street with her skin prickling all the way home." }
    ] },
    { after: '9/10', title: '4: translation', place: 'Naganaki Shrine', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "Aigis came on the walk. She hadn't been invited. She was simply standing by the front door when Solar came down with the lead, in her uniform, with her hands folded in front of her and the overhead light shining off the joints at her wrists, and when Solar opened the door Aigis walked through it with them, as if that had always been the arrangement." },
      { s: 'aigis', f: 'neutral', t: "I have been assigned to accompany you." },
      { s: 'solar', f: 'neutral', t: "By who?" },
      { s: 'aigis', f: 'neutral', t: "By me." },
      { n: "September had cooled overnight, the first evening you could feel the season turn, the air with a clean edge on it and the sky over the bay going a hard, clear lavender. Aigis walked on Solar's left and Koromaru walked ahead, and every now and then he looked back over his shoulder, not at Solar, but at Aigis, with a particular expression Solar hadn't seen on him before, attentive and slightly put-upon, like a man in a conversation with someone who kept interrupting." },
      { s: 'aigis', f: 'neutral', t: "He walks half a body ahead of you on the flat and half a body behind you on the stairs. Did you know this?" },
      { choose: [
        { t: "I'd noticed. I didn't know why.", notes: 3, then: [
          { s: 'aigis', f: 'neutral', t: "On the flat he goes first to see what is coming. On the stairs he goes behind in case you fall." },
          { s: 'aigis', f: 'neutral', t: "That is my assessment. It is also, I believe, his." }
        ] },
        { t: "He's just a dog, Aigis.", notes: 1, then: [
          { s: 'aigis', f: 'neutral', t: "Is that so?" },
          { n: "She said it without any edge at all, a genuine question, and Koromaru looked back at both of them over his shoulder with what Solar could only describe as disappointment, and she found she had no answer for either of them." }
        ] },
        { t: "You've been watching him.", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "I have been watching both of you. It is the same pattern." },
          { n: "Solar didn't ask what she meant. She had a feeling she knew, and that she wouldn't like it said out loud." }
        ] }
      ] },
      { n: "At the top of the steps he sat in his place, facing the shuttered house, and Aigis stood beside him with her hands folded, absolutely still, and for a moment they looked like a pair of shrine guardians, the white dog and the girl with the metal wrists, the two least-blinking creatures in Iwatodai, both of them keeping watch over a door that wasn't going to open." },
      { n: "Koromaru made a sound. Not a bark. A long, low run of small sounds in his throat, rising and falling, almost like speech, directed at the house." },
      { ifRank: { aigis: 1 }, then: [
        { s: 'aigis', f: 'neutral', t: "He is telling the house about his day." },
        { s: 'solar', f: 'surprised', t: "You can understand him?" },
        { s: 'aigis', f: 'neutral', t: "Yes. He is not complicated. That is not an insult. It is the highest compliment I know how to give." },
        { s: 'aigis', f: 'neutral', t: "He says the old man smelled of incense and pickled plums and the oil he put on the hinges in winter. He says the old man talked to him every evening about nothing, and that it was the best part of the day." },
        { s: 'aigis', f: 'neutral', t: "He says you smell of the dorm, and of rain, and of something else he does not have a word for. Something from a long way down the line. He says he does not mind it." },
        { n: "Solar didn't move. The skin on her arms had come up all at once under her sleeves." },
        { s: 'aigis', f: 'neutral', t: "I do not have a word for it either. I have been looking for one since July." }
      ], else: [
        { s: 'aigis', f: 'neutral', t: "He is saying something." },
        { s: 'solar', f: 'surprised', t: "Can you understand him?" },
        { s: 'aigis', f: 'neutral', t: "Yes." },
        { n: "She didn't go on. Solar waited, and Aigis kept looking at the dog with her head tilted, listening, the evening light catching in her blue eyes like water in a bowl." },
        { s: 'aigis', f: 'neutral', t: "I do not think it is mine to repeat. He is not talking to us. He is talking to the house." },
        { s: 'aigis', f: 'neutral', t: "But he said your name, once. In the way he says it. I do not know how to describe that. I will think about it." }
      ] },
      { choose: [
        { t: "(Crouch down beside him and listen.)", notes: 3, then: [
          { n: "She crouched beside him on the cool stone and listened, to the small rising and falling sounds, and didn't understand a word of it, and understood it anyway, the shape of it, the way you understand a lullaby in a language you don't speak. When he was done he turned his head and pressed his cold nose into the hollow under her ear, once, briefly, like he was signing his name." }
        ] },
        { t: "What does Aigis think he's waiting for?", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "I do not think he is waiting anymore. I think he is visiting. There is a difference. It took me some time to learn it." },
          { n: "She said it so simply that it took Solar the whole walk home to feel it land." }
        ] },
        { t: "Ask him if he wants to go home.", notes: 1, then: [
          { s: 'aigis', f: 'neutral', t: "He would not understand the question. He is already at home. He is also at home at the dorm. He does not think this is a contradiction." },
          { s: 'aigis', f: 'neutral', t: "I am beginning to think he may be right." }
        ] }
      ] },
      { n: "On the way down, Aigis walked half a body behind them on the stairs, Solar noticed, the whole way to the street. Koromaru noticed too. He looked back at her on the last landing, and his tail went once, approving, the way a senior officer nods at a recruit who has done something right without being told." }
    ] },
    { after: '9/24', title: '5: thunder', place: 'Naganaki Shrine', time: 'Evening', scene: [
      { music: 'night' },
      { n: "The storm came in off the bay faster than the forecast had promised, the way they did in September, a dark wall sliding over the water with the lights of Port Island going out behind it one by one. They were at the top of the shrine steps when the first drops hit, fat and warm and far apart, each one landing on the stone with a sound like a coin, and by the time Solar had said they should go, it was too late to go anywhere." },
      { n: "They ran for the offering hall. The eaves were deep and old and the rain came down off them in a solid silver curtain, roaring on the tiles above, and inside the curtain there was a dry strip of wooden floor the width of a bench that smelled of cedar and dust and a hundred years of incense, and that was where they ended up, the girl and the dog, soaked to the skin, pressed against the wall." },
      { n: "Then the thunder came, right over them, a crack like the sky being split down the middle with an axe, and Koromaru, who fought Shadows twice his size with a knife in his teeth, who stood in front of Ken on full-moon nights without a second's thought, went flat against her legs and shook." },
      { n: "He shook all over. She could feel it through her wet skirt, a fine hard trembling that went from his nose to his tail and didn't stop. His ears were pinned back against his skull. His eyes had gone wide and wet and showed white at the edges. He pressed his whole weight into her shins, as if he could get inside her if he pushed hard enough." },
      { choose: [
        { t: "(Get down on the floor and hold him.)", notes: 3, then: [
          { n: "She slid down the wall onto the floorboards and gathered him into her lap, all of him, wet and heavy and shaking, and put her arms around his chest and her chin on top of his head, and held on. He let her. He tucked his face into the crook of her elbow and stayed there." }
        ] },
        { t: "(Put your hand on his back and keep it there.)", notes: 2, then: [
          { n: "She put her hand flat on his back between his shoulders and kept it there, steady, while the thunder went over, and felt him push up into her palm a little, the way you'd lean into a wall to make sure it was still standing." }
        ] },
        { t: "It's just thunder. You're okay.", notes: 1, then: [
          { n: "He didn't believe her. He had no reason to. The next crack came and he flinched so hard his head hit her knee, and she got down on the floor with him after that, because the words hadn't done anything, and her arms might." }
        ] }
      ] },
      { n: "It went on a long time. The rain roared. The thunder walked away across the city and came back and walked away again. Her phone buzzed twice in her wet pocket and she didn't look at it. It had been doing that lately, buzzing at strange hours with messages from numbers she didn't know, messages that knew her, and she had started to dread the sound of it the way he dreaded the sky." },
      { n: "She thought, sitting there with forty-odd pounds of terrified dog in her lap and the water dripping off the end of her nose, that it was strange how much easier it was to hold something that was scared than to be scared yourself. You knew exactly what to do with your arms. You knew you were needed. Nobody needed anything from you when it was your own heart going like that." },
      { s: 'koromaru', f: 'sad', t: "...Whine." },
      { choose: [
        { t: "I'm scared of things too. Different things.", notes: 3, then: [
          { n: "She said it into the fur on top of his head, very quietly, under the noise of the rain, where no one could hear it. He turned his face up out of her elbow and licked her chin, once, thoroughly, which was the most anyone had ever said back to her about it." }
        ] },
        { t: "(Hum something until it passes.)", notes: 3, then: [
          { n: "She hummed. She didn't know what. A tune came up out of somewhere and she let it, low and slow, a song she didn't know the words to and had never heard anyone else sing. His ears came up off his skull, a little, at the sound of it. He stopped shaking somewhere around the second time through." }
        ] },
        { t: "(Count the seconds between the flash and the thunder.)", notes: 2, then: [
          { n: "She counted out loud between the flash and the crack, one, two, three, four, and the numbers got bigger as the storm moved off, five, seven, eleven. He didn't understand the numbers. He understood her voice getting calmer with each one, and his shaking got smaller to match it." }
        ] }
      ] },
      { n: "A light came bobbing up the steps through the rain. A flashlight, held very carefully, and under it a yellow raincoat and a pair of yellow boots and, under the hood, Ken, with a second umbrella clutched under his arm and an expression of enormous responsibility." },
      { s: 'ken', f: 'serious', t: "Solar-san! Koromaru! I brought umbrellas. Mitsuru-san said I could come as long as I stayed on the main road, and the steps are technically connected to the main road, so." },
      { s: 'ken', f: 'neutral', t: "Oh. You're very wet." },
      { s: 'ken', f: 'neutral', t: "He's scared of thunder, you know. He doesn't let anybody see. He must really like you." },
      { n: "Koromaru, hearing his name, lifted his head out of her lap and looked at Ken, and his tail thumped once on the floorboards, and he didn't get up. He stayed where he was until the rain thinned to a drizzle, and then to a mist, and then to just the eaves dripping in the dark. Then he climbed out of her lap like nothing had happened, and shook himself all over both of them, and trotted down the steps ahead of Ken's flashlight with his tail up, the bravest dog in the world, who had never been scared of anything in his life." }
    ] },
    { after: '10/9', title: '6: facing the door', place: 'Iwatodai Dorm · Front', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "Since that night at the start of October, Koromaru had slept in the front hall." },
      { n: "Not on the rug in the lounge, where he'd slept since August. Not on anyone's feet. On the bare tiles inside the front door, on his stomach, with his chin on his paws and his face to the door, and every time it opened his head came up and his ears came forward, and every time it was someone else his head went back down, slowly, onto his paws, without a sound." },
      { n: "Nobody moved him. Nobody had the heart. People stepped over him in the mornings with their shoes in their hands. Ken brought him his water there. At night the hall was dark and cold and smelled of rain on the doormat and somebody's sneakers, and he lay in it, facing the door, and didn't come in." },
      { n: "Solar came down at seven with the lead. He lifted his head. He looked at the lead in her hand, and then at the door, and put his head back down on his paws." },
      { choose: [
        { t: "(Sit down on the tiles beside him.)", notes: 3, then: [
          { n: "She sat down on the cold tiles beside him with her back against the shoe cupboard and her knees up, facing the door too. He didn't look at her. After a while he shifted, a few centimeters, so that his side was against her hip." }
        ] },
        { t: "Come on. Just to the shrine.", notes: 1, then: [
          { n: "He didn't move. She stood there holding the lead out like an apology nobody wanted, and then let her arm drop, and sat down on the tiles next to him, because she couldn't think of anything else." }
        ] },
        { t: "(Hang the lead back on its hook.)", notes: 2, then: [
          { n: "She hung it back on the hook, and sat down on the tiles beside him. His tail moved, once, on the floor. It might have been thank you. It might have been nothing." }
        ] }
      ] },
      { n: "They sat there a long time. The lounge behind them was quiet. Everything in the dorm was quiet now. There was a pan on the back burner in the kitchen that nobody used and nobody washed and nobody moved, and a coat on the rack by the door that nobody wore and nobody took down, a long coat, dark, with the hem gone pale where it had swung against the backs of somebody's boots, and Koromaru lay right under it." },
      { n: "When she finally stood up and opened the door, it was to let some air in, nothing more. But he got up. He went out past her onto the step and stood there with his nose lifted, smelling the evening, and then he looked back at her, and went down the path, and she grabbed the lead off the hook and went after him." },
      { place: 'Tatsumi Memorial Hospital', time: 'Evening', bg: 'hospital-outside' },
      { n: "He didn't go to the shrine. He went the other way, down the hill and along the road and over the crossing, steady and certain, half a body ahead of her, and she knew where they were going long before they got there, and let him." },
      { n: "Tatsumi Memorial sat at the end of its long drive with most of its windows lit, white and square and humming faintly the way hospitals do, as if the building itself were on some kind of machine. Koromaru went up the drive and stopped at the bottom of the front steps, where a sign with a crossed-out dog on it said what everybody already knew, and sat down, and looked up." },
      { n: "Not at the door. Up. At the third floor. At one window, she thought, though she couldn't have said how she knew which one, a window with the curtain half drawn and a pale lamp on somewhere behind it." },
      { s: 'koromaru', f: 'sad', t: "...Awoo." },
      { n: "It wasn't loud. It was the smallest howl she'd ever heard, more breath than voice, the kind of sound you make when you know nobody's going to answer and you make it anyway. A nurse coming out through the automatic doors stopped on the top step and looked down at him, and then at Solar, and her face did something soft, and she went back inside without saying anything about the sign." },
      { choose: [
        { t: "(Sit down on the steps with him and look up too.)", notes: 3, then: [
          { n: "She sat on the bottom step beside him and looked up at the window too, the pale lamp, the half-drawn curtain, and didn't say anything, because the only true things to say were the things nobody could say yet. His shoulder found hers. They sat there and looked at the light together, a girl and a dog on a hospital's front steps, and the evening went cold around them, and neither of them minded." }
        ] },
        { t: "He'll wake up.", notes: 2, then: [
          { n: "She said it out loud, to the dog, because she couldn't say it to anybody else. He didn't look at her. His ear turned toward her voice and stayed there, listening, as if he wanted to hear her say it again, so she did." }
        ] },
        { t: "We can't go in, Koromaru.", notes: 1, then: [
          { n: "He knew. He hadn't asked to go in. He'd only asked to be here. She sat down next to him, and felt foolish, and stayed." }
        ] }
      ] },
      { n: "They stayed until the lamp in the window went out for the night. Then he stood, and shook, and turned for home on his own, and she followed." },
      { n: "In the dorm kitchen she found the pan on the back burner, and took it down, and washed it, which nobody had done, and made rice and egg and a little broth in it, the way the note had said, the way the manual went, and set the bowl down in the front hall next to him. He looked at it, and looked at her, and ate it slowly, all of it, still facing the door. Then he put his chin on her shoe and closed his eyes, and that was where she slept that night too, on the tiles in the hall with her back against the shoe cupboard, until Mitsuru came down at two and put a blanket over both of them and didn't say a word." }
    ] },
    { after: '10/23', title: '7: the one who stayed', place: 'Naganaki Shrine', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "Ken came on the walk. He didn't ask. He was standing by the front door in his jacket when she came down with the lead, with his school bag still on and his face very neat and closed, the way a child's face goes when it has decided to be an adult about something and is holding the decision very carefully in both hands so it won't spill." },
      { s: 'ken', f: 'neutral', t: "Mitsuru-san said I could come if I'm with you. If that's all right. I'll be quiet." },
      { n: "He was quiet. He was quiet all the way up the hill, walking beside her with his hands in his jacket pockets and his eyes on the pavement. It was late October, the evenings short and cold now and smelling of woodsmoke and wet leaves, and the shrine's ginkgo had gone a gold so bright it looked lit from inside, dropping its fan-shaped leaves on the steps one by one, a slow yellow rain. Koromaru didn't walk half a body ahead tonight. He walked beside Ken, so close his shoulder brushed the boy's knee with every step, and he didn't once look back at Solar to see if she was coming." },
      { n: "At the top of the steps Koromaru didn't sit in his place. He sat at Ken's feet, and leaned on Ken's shins with his whole weight, and stayed there." },
      { choose: [
        { t: "(Sit down on the step and wait for Ken to sit too.)", notes: 3, then: [
          { n: "She sat down on the cold stone and didn't say anything. After a while, Ken sat down too, carefully, a little way off, and Koromaru moved with him without getting up, shuffling his backside along the step so that he was still leaning on the boy, and Ken put one hand on his back and left it there." }
        ] },
        { t: "Ken. Are you all right?", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "Yes, thank you." },
          { n: "He said it the way you'd answer a teacher. Then he sat down on the step, carefully, and put his hand on the dog's back, and didn't take it away." }
        ] },
        { t: "He's picked you tonight.", notes: 2, then: [
          { s: 'ken', f: 'sad', t: "...I don't know why." },
          { n: "He sat down on the step as if his legs had decided before he had, and put his hand on Koromaru's back." }
        ] }
      ] },
      { s: 'ken', f: 'neutral', t: "He belonged to the priest. Here. Before. Did you know that?" },
      { s: 'ken', f: 'neutral', t: "And the priest died, and he waited. Everybody says that. He waited for a really long time. Even though he knew. Dogs know. They can smell it." },
      { s: 'ken', f: 'sad', t: "He waited anyway. And then he came and lived with us. And he loved Shinjiro-san, he loved him more than anybody, you could see it, and then because of me..." },
      { n: "He stopped. His hand had closed in the fur on Koromaru's back, tight, a small fist. Koromaru didn't flinch. He leaned harder." },
      { s: 'ken', f: 'sad', t: "It should have been me. It was supposed to be me. That night. And it wasn't, and now Koromaru sleeps in the hall, and it's my fault, and he still walks next to me. Why does he still walk next to me?" },
      { n: "It came out of him in one breath, high and fast, and at the end of it his voice cracked straight down the middle, the way a child's voice does, and he put his face in his sleeve. Solar's whole body went toward him before she'd decided anything, and stopped, and waited, because it wasn't her he was leaning on." },
      { choose: [
        { t: "(Don't answer. Watch what Koromaru does.)", notes: 3, then: [
          { n: "She didn't answer. Koromaru did. He turned and put his front paws up on the boy's lap, both of them, heavy, and pushed his face in under Ken's arm, into the sleeve, into the crying, and licked whatever he could reach, chin and wrist and the wet sleeve itself, thoroughly, steadily, without stopping, until Ken made a sound that was halfway to a laugh and halfway to something else and put both arms around the dog's neck and held on." }
        ] },
        { t: "Because he doesn't think it's your fault.", notes: 2, then: [
          { s: 'ken', f: 'sad', t: "How do you know?" },
          { s: 'solar', f: 'neutral', t: "Look at him." },
          { n: "Ken looked. Koromaru had put his front paws up on the boy's lap and was looking right back at him, from very close, with his red eyes steady and his tail going slowly on the stone, and Ken put his arms around his neck and held on." }
        ] },
        { t: "It isn't your fault, Ken.", notes: 2, then: [
          { s: 'ken', f: 'sad', t: "Everybody says that. You don't know." },
          { n: "He was right. She didn't. Koromaru put his front paws up on Ken's lap and pushed his nose under the boy's arm, insistent, and Ken, after a long moment, put both arms around his neck and held on, and that was an answer she couldn't have given." }
        ] }
      ] },
      { n: "They sat there until the gold had gone out of the ginkgo and it was just a tree in the dark. Ken cried a little more, quietly, into the dog, and then stopped, and wiped his face on his sleeve, and was ten again, and a little embarrassed, and very tired." },
      { s: 'ken', f: 'neutral', t: "Solar-san. You won't tell anyone? That I cried?" },
      { choose: [
        { t: "I won't. He won't either.", notes: 3, then: [
          { s: 'ken', f: 'happy', t: "...He's very good at secrets." },
          { n: "Koromaru, hearing himself discussed, sneezed, and Ken laughed properly for the first time in what she realized had been weeks." }
        ] },
        { t: "Everyone in the dorm has cried since October, Ken.", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "Even Mitsuru-san?" },
          { n: "Solar thought about the blanket at two in the morning, and the hand that had tucked it in, and how long it had stayed on her shoulder after. She didn't answer. Ken seemed to find that answer enough." }
        ] },
        { t: "There's nothing wrong with crying.", notes: 1, then: [
          { s: 'ken', f: 'neutral', t: "I know. I read that. I still don't want anyone to know." },
          { n: "He said it so reasonably that she had to look away to keep her face straight." }
        ] }
      ] },
      { n: "On the walk home Koromaru went between them, half a body ahead on the flat, half a body behind on the stairs, looking back at each of them in turn, counting, the way he did in the lounge. Ken held the lead. Solar let him. At the dorm door Koromaru went in ahead of them, and walked straight past the front hall, past the coat on its hook and the tiles where he'd been sleeping, and into the lounge, and lay down on the rug at the foot of the couch where Ken always sat. He looked over his shoulder at the boy. Ken went and sat down." }
    ] },
    { after: '11/13', title: '8: carry', place: 'Naganaki Shrine', time: 'Evening', scene: [
      { music: 'night' },
      { n: "The shrine had strung paper lanterns from the gate to the offering hall for the children's festival, and nobody had taken them down yet, and there was a stack of folding tables under a blue tarp by the playground, and somebody had swept the steps that afternoon so hard the stone looked new. November had come in cold and stayed cold. The ginkgo was nearly bare, and the leaves it had dropped lay in a gold drift at the bottom of the steps, and Koromaru went through them like a plow, kicking them up for the joy of it, and that was how he found the glass." },
      { n: "He yelped. Just once, sharp and high, a sound she'd never heard him make in a fight, and pulled his front paw up against his chest and stood on three legs in the leaves. When she got to him there was blood on the gold, a lot of it, bright and shocking, and under the leaves the neck of a broken bottle somebody had left there from some other night." },
      { choose: [
        { t: "(Get down and hold the paw. Press.)", notes: 3, then: [
          { n: "She went down on her knees in the leaves and took the paw in her hand and pressed, hard, with her thumb over the pad where it was coming from, and he whined and let her. Her body knew how to do this. Her body seemed to know how to do a lot of things. She didn't stop to wonder where it had learned." }
        ] },
        { t: "(Check for more glass first.)", notes: 2, then: [
          { n: "She swept the leaves back with her sleeve to see, and found two more pieces, and threw them into the dark, and then took his paw and pressed, and he whined and let her." }
        ] },
        { t: "(Call the dorm.)", notes: 1, then: [
          { n: "She got her phone out with her hands shaking and then put it away again, because by the time anyone came he'd have lost more than he should, and took his paw and pressed, and he whined and let her." }
        ] }
      ] },
      { n: "She tore the bottom off her school shirt for a bandage, which she would remember afterward as the least sensible thing she had ever done with a school uniform, and wrapped it tight, and it went red through the middle almost at once. He couldn't put the paw down. He tried, and flinched, and looked at her, confused, as if the ground had done something to him on purpose." },
      { n: "So she picked him up." },
      { n: "He was much heavier than he looked. He was all muscle and stubbornness and bone, and he didn't like being carried, and he stiffened against her chest, and then, at the bottom of the steps, he gave up and went soft, his chin over her shoulder and his bad paw held up against her collarbone and his breath warm and fast against her neck. It was a long way back to the dorm. Her arms started burning at the first corner. By the bridge they'd gone past burning into something else, a deep shaking ache all the way into her back, and she shifted him and kept walking. She didn't put him down. It didn't occur to her as a possibility." },
      { place: 'Iwatodai Dorm · Lounge', time: 'Night' },
      { n: "The dorm had been quiet since the first week of November. Not the quiet of people asleep. The other kind, the kind with a shape to it, that everybody walked carefully around. Mitsuru had been away for some days, and come back, and had been very busy since, and very composed, and nobody had said anything to her about anything, because there wasn't anything you could say that would have fit." },
      { n: "It was Mitsuru who was in the lounge when Solar came through the door with blood on her shirt and a dog in her arms. She was in the armchair with papers in her lap, in a black sweater, and she looked up, and stood, and the papers went onto the floor, and she didn't look at them." },
      { s: 'mitsuru', f: 'surprised', t: "Put him on the table. Here. Gently. Hold his head." },
      { n: "She came back from the kitchen with the first-aid kit and a bowl of warm water and knelt by the coffee table and unwrapped the shirt-bandage, and looked at the cut, and cleaned it, and her hands were completely steady. Solar held Koromaru's head against her chest and watched Mitsuru's hands, because it was easier than watching the paw, and they were the steadiest thing in the room, long and pale and very sure, and then she looked up at Mitsuru's face, which wasn't." },
      { s: 'mitsuru', f: 'neutral', t: "It isn't deep. It looks worse than it is. Paws bleed." },
      { s: 'mitsuru', f: 'neutral', t: "He'll limp for a day and be insufferable about it for a week." },
      { choose: [
        { t: "(Say nothing. Let her work.)", notes: 3, then: [
          { n: "Solar said nothing. Mitsuru wrapped the paw in clean gauze, round and round, tight and neat, and taped it, and smoothed the tape down with her thumb more times than it needed, and the room was quiet except for the dog's breathing and the tape and the radiator." }
        ] },
        { t: "You're good at this.", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "I was taught. A long time ago." },
          { n: "She didn't say by whom. Her thumb went on smoothing the tape down, more times than it needed." }
        ] },
        { t: "Thank you, Mitsuru-senpai.", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "Thank him. He let me." },
          { n: "She smoothed the tape down with her thumb, more times than it needed." }
        ] }
      ] },
      { n: "When she was done, Koromaru lifted his head off Solar's chest and looked at Mitsuru for a long moment, with his red eyes, close, the way he'd looked at the empty bench. Then he leaned over and licked her wrist, once, slowly, where the sleeve of the black sweater ended." },
      { n: "Mitsuru went very still. She looked down at her wrist. She didn't move it away." },
      { s: 'mitsuru', f: 'sad', t: "...Thank you." },
      { n: "She said it to the dog, so quietly that it was barely there, and her face didn't change, and her eyes did, and Solar looked at the paw, at the neat white gauze, at anything, and kept her arms around Koromaru, and let Mitsuru have the thing she was having without anyone having to see it." },
      { choose: [
        { t: "(Stay. Keep holding him.)", notes: 3, then: [
          { n: "She stayed where she was. Mitsuru stayed where she was, kneeling by the coffee table, one hand resting on the dog's side. Neither of them said anything for a long time. It was, Solar thought later, the longest she had ever been in a room with Mitsuru Kirijo without either of them performing anything." }
        ] },
        { t: "I'll take him up.", notes: 2, then: [
          { n: "She lifted him off the table. Mitsuru's hand stayed on his side until the last second, and then let go, and went to the papers on the floor." }
        ] },
        { t: "Are you all right, Mitsuru-senpai?", notes: 1, then: [
          { s: 'mitsuru', f: 'neutral', t: "Quite all right. Thank you." },
          { n: "The door was shut again, just like that, quietly, from the inside. Solar knew better. She'd done it herself too many times not to." }
        ] }
      ] },
      { n: "That night Koromaru limped up the stairs on three legs, refusing to be carried again, as a point of honor, and lay down outside Mitsuru's door instead of his own spot, and stayed there till morning. Nobody mentioned it. At breakfast Mitsuru put a piece of her own salmon in his bowl when she thought no one was looking. Everyone was looking. Nobody said a word." }
    ] },
    { after: '12/4', title: '9: whose dog', place: 'Naganaki Shrine', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "The first frost had come in the night, and it was still on the shrine at dusk, a fine white fur on the railings and the stone lanterns and the ropes, so that the whole place looked dusted with sugar, and the cold came up off the steps through the soles of her shoes and settled in her ankles. Koromaru's breath smoked. His paw had healed weeks ago, leaving a small bald pink line on the pad, and he'd stopped limping and started showing it off, holding it up to people for sympathy he no longer needed." },
      { n: "There was a woman at the top of the steps with a broom. An old woman in a quilted jacket and a headscarf, small and bent, sweeping the frost off the stone in short brisk strokes, and when Koromaru came up the last step she stopped sweeping, and stared, and dropped the broom." },
      { s: 'caretaker', t: "Koro-chan? Koro-chan! Oh. Oh, look at you." },
      { n: "He went to her. Not like he went to people in the dorm. He went to her the way you go to someone who knew you before, low and wriggling, his whole body curving into a C, his tail going so hard it knocked him off balance, making small high sounds in his throat she'd never heard from him, and the old woman got down on her knees on the frosted stone, which must have hurt, and took his face in both her mittens." },
      { s: 'caretaker', t: "You're so fat! Who's feeding you? You're so fat and so clean. Who's been looking after you?" },
      { s: 'caretaker', t: "I look after the shrine now. Since the priest. The committee asked me. I live just behind, with my daughter. I looked for you, you know. Every day for months. And then you were gone, and I thought... well. I thought the worst." },
      { n: "She looked up at Solar then, for the first time, with the dog's face still in her hands, and her eyes were wet and very sharp." },
      { s: 'caretaker', t: "You're the one feeding him?" },
      { choose: [
        { t: "All of us. The dorm on the hill. He lives with us.", notes: 3, then: [
          { s: 'caretaker', t: "The dorm. Well. Well, well." },
          { n: "She looked at Koromaru for a long time, and then at Solar, as if measuring her for something, a coat, a job, a fate." }
        ] },
        { t: "Mostly. Him and some friends.", notes: 2, then: [
          { s: 'caretaker', t: "Mostly. Hm. That's honest." },
          { n: "She seemed to like that. She looked at Solar for a long time, as if measuring her for something." }
        ] },
        { t: "He found us, really.", notes: 2, then: [
          { s: 'caretaker', t: "That's him. That's him exactly. The priest always said he didn't own that dog. He said the dog picked him." },
          { n: "She looked at Solar for a long time, as if measuring her for something." }
        ] }
      ] },
      { s: 'caretaker', t: "He's the shrine's dog, you know. He was born here, practically. The priest would have wanted him here. I could take him. I've got the room, and my daughter likes dogs, and he could sit on his step every day. Every day, not just when somebody walks him." },
      { s: 'caretaker', t: "He could come home." },
      { n: "Solar's whole body went cold, colder than the frost, from the inside out, and she understood with a terrible clarity that it was not her decision, and that she would have given almost anything for it to be, and that she was standing on a frosted step with someone kind asking for the thing she loved to come home, and that she didn't get to say no just because it was hers." },
      { n: "Home. Everyone wanted to know where things belonged. People had crossed impossible distances this autumn to tell her where she belonged, and been so kind about it, and so sure, and she'd stood in front of every one of them feeling exactly like this." },
      { choose: [
        { t: "(Let go of the lead. Let him choose.)", notes: 3, then: [
          { n: "She opened her hand. The lead fell on the frosted stone with a soft slap. She didn't call him. She didn't say anything at all. She stood there with her hands empty at her sides and her heart going much too fast and let it be his." }
        ] },
        { t: "He lives with us now.", notes: 2, then: [
          { n: "It came out harder than she meant, and the old woman's eyebrows went up, and Solar heard herself, and swallowed, and let the lead go slack in her hand, so it would be his choice and not her grip." }
        ] },
        { t: "Maybe he should stay here, then.", notes: 1, then: [
          { n: "She said it because it was the polite thing, the right thing, the thing you said when someone older asked you for something, and it came out of her mouth like a stone, and she hated every word of it, and let the lead go slack." }
        ] }
      ] },
      { n: "Koromaru looked at the old woman. He looked at the shuttered house, its frosted roof, the broom on the stone. He looked at Solar." },
      { n: "Then he walked out of the old woman's mittens, not unkindly, the way you'd get up from a table where you'd had a good meal with an old friend, and came back across the step, and sat down on Solar's feet. Both of them. All of his weight. He leaned back against her shins and looked up at the old woman with his tail sweeping the frost off the stone behind him in a slow fan, and that was all." },
      { n: "The old woman laughed. It came out of her wet and surprised, and she wiped her eyes with the back of her mitten." },
      { s: 'caretaker', t: "Oh, you. You always did know your own mind. He did that to the priest, you know. Sat on his feet. Years ago, on this step. He just walked up the hill one day and sat on his feet and that was that." },
      { s: 'caretaker', t: "Well. You'd better bring him to visit. Not just on the walks. Properly. New Year's, at least. I'll save him the end of my rice ball." },
      { choose: [
        { t: "We'll come. I promise.", notes: 3, then: [
          { s: 'caretaker', t: "Good. A promise at a shrine counts double. Don't forget it." },
          { n: "She picked up her broom and went back to sweeping, and Solar stood with the dog on her feet and the frost going into her ankles, and couldn't move for a while, and didn't want to." }
        ] },
        { t: "The end with the plum?", notes: 3, then: [
          { s: 'caretaker', t: "How did you know that?" },
          { s: 'solar', f: 'neutral', t: "He told me." },
          { n: "The old woman looked at her, and at the dog, and didn't laugh, and nodded slowly, like someone who had lived next to a shrine for a long time and had stopped being surprised by what got told to whom." }
        ] },
        { t: "Thank you for looking for him.", notes: 2, then: [
          { s: 'caretaker', t: "Somebody had to. Somebody always has to, with that one." },
          { n: "She picked up her broom and went back to sweeping, a little harder than before." }
        ] }
      ] },
      { n: "On the walk home Solar kept her hand on the top of his head the whole way, which meant walking bent slightly sideways, which looked ridiculous, and she didn't care. She was thinking about choosing. About how he'd done it, which wasn't the way she'd have expected, not running from the old life into the new, not tearing anything, just getting up from one table and sitting down at another, and taking the first with him, the whole way, warm in his mouth like the end of a rice ball. She didn't know if people could do that. She thought about it for a long time. She thought, maybe, he'd shown her that you could." }
    ] },
    { after: '1/5', title: '10: ema', place: 'Naganaki Shrine', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "The shrine still looked like New Year's. The big straw rope over the offering hall had been replaced with a fresh one, thick and gold and bristling, and the pine-and-bamboo arrangements by the gate were still standing, and the rack by the hall where people hung their wish plaques was so crowded with them now that they overlapped, hundreds of small wooden boards with the year's tiger painted on one side and people's handwriting on the other, clacking against each other in the cold wind like a wooden wind chime." },
      { n: "It was very cold, a dry, clear, bright cold that made the stars over the shrine look sharp enough to cut yourself on, and Koromaru wore the little quilted coat Fuuka had bought him, which he hated, and which he wore with the dignity of a general made to wear a paper hat at a party. The old caretaker had kept her word. There was a rice ball end waiting for him on the top step, on a saucer, under a cloth, with his name written on a scrap of paper weighted down by a pebble. He ate it facing the house. Then he came and sat on Solar's feet." },
      { n: "She'd bought a plaque. She hadn't meant to. She'd stood in front of the shrine office window with her money in her hand and the shrine maiden looking at her, and bought one, and now she was sitting on the cold step with it on her knee and a pen in her hand, and no idea what to write." },
      { n: "Everybody else's wishes were easy to read, if you looked. Pass the entrance exams. Find a good husband. Grandma's hip. Make the team. Hers was blank. It was the same blankness as the page Elizabeth kept showing her, the same blankness as the box on her school forms where her surname should have gone. She was getting used to it, she thought. That was the frightening part." },
      { choose: [
        { t: "(Write a wish for him instead.)", notes: 3, then: [
          { n: "She turned the plaque over, to the side with the picture, and then back, and wrote, not for herself, for him. *For Koromaru. A long life. A full bowl. The end with the plum. And someone to wait for who always comes back.*" },
          { n: "She read it over. Her eyes stung, in the cold. She didn't cross anything out." }
        ] },
        { t: "(Write nothing. Hang it blank.)", notes: 2, then: [
          { n: "She hung it blank. It looked strange on the rack among all the full ones, clean and bare. Then Koromaru stood up on his hind legs, his paws on the rack, and looked at it, and sneezed on it, and that, she decided, would have to count as handwriting." }
        ] },
        { t: "(Write: I want to know where I'm from.)", notes: 2, then: [
          { n: "She wrote it, and looked at it, and it was true, and it wasn't the whole truth, and she didn't know what the whole truth was. She hung it on the rack anyway. It clacked against somebody's grandmother's hip, and somebody's entrance exams, and became one of a hundred, which was a kind of comfort." }
        ] }
      ] },
      { n: "She sat back down on the step. Koromaru leaned on her. Below them the town was full of lit windows, and up the hill the dorm was lit too, every window in it, the busiest it had ever been, full of people from this world and other ones, eating out of each other's bowls." },
      { s: 'solar', f: 'neutral', t: "I don't know what happens at the end of this month." },
      { n: "She said it to him because she couldn't say it to anybody else, the same way she'd said he'll wake up on the hospital steps. Everybody in the dorm had some piece of it. Nobody had all of it. Least of all her." },
      { s: 'solar', f: 'neutral', t: "Wherever I end up. Whatever happens. Somebody will feed you right. I'll make sure. Rice and egg. The plum end. I'll write it down." },
      { s: 'koromaru', f: 'neutral', t: "Wuff." },
      { choose: [
        { t: "(Put your forehead against his.)", notes: 3, then: [
          { n: "She bent down and put her forehead against his, the cold fur and the hard warm skull under it, and shut her eyes, and he held still for her, which he did not do for anyone, and breathed slowly against her face, smelling of rice and the cold and the green-apple shampoo that never quite washed out. They stayed like that a long time. Long enough. That was the thing about him. With him it was always long enough." }
        ] },
        { t: "You'd be okay. You always are.", notes: 2, then: [
          { n: "He looked at her as if to say that was very much beside the point, and leaned harder, and she put her arms around his neck in the stupid quilted coat and held on." }
        ] },
        { t: "(Laugh at yourself for saying this to a dog.)", notes: 1, then: [
          { n: "She laughed at herself, out loud, at the idea of saying it to a dog, and the laugh came out wrong and wet, and he looked up at her steadily with his red eyes as if to point out that there was nothing funny about it, and that he had understood every word." }
        ] }
      ] },
      { n: "On the way down she looked over at the playground, at the bench under the ginkgo. It was bare and dark, the tree just bones now, frost on the seat. Nobody on it. Koromaru looked too. He didn't bark. He didn't stop. His tail went once, just once, as they passed, the way you'd nod to a neighbor on your way home, someone you'd see again tomorrow, and that was all." },
      { n: "He walked half a body ahead of her on the flat, and half a body behind on the steps, the whole way down, the whole way home." }
    ] }
  ],
  afterMax: [
    { place: 'Naganaki Shrine', time: 'Evening', scene: [
      { music: 'night' },
      { n: "It snowed. Not much, not the deep kind, just enough to cover everything once, lightly, a white sheet laid over the shrine and the steps and the playground like a cloth over a table, and when Solar and Koromaru came up the hill in the evening it was still falling, slow and fat and silent, out of a sky the color of a pearl." },
      { n: "He had never seen snow before. Or he had, and had forgotten, or he remembered and it still delighted him, it was impossible to tell. At the bottom of the steps he stopped dead and looked at it. Then he put his nose in it. Then he sneezed, violently, and leapt straight up in the air with all four feet off the ground, like a lamb, and came down running." },
      { n: "He tore around the shrine grounds in great looping circles, kicking up white spray, plowing his face through the drifts by the stone lanterns, biting at the falling flakes with a click of teeth, coming back to her every few laps to check that she was seeing this, and then off again, a white dog in white snow, visible only by his red collar and his red eyes and the sheer noise of his happiness." },
      { choose: [
        { t: "(Run with him.)", notes: 3, then: [
          { n: "She ran with him. She hadn't meant to. Her body went, the way it did, and she was running in circles around a shrine in the snow in her school shoes, slipping, laughing, her breath going up in clouds, and he ran beside her, barking, delighted, as if this was the thing he'd been trying to teach her all along, and she had finally, finally gotten it." }
        ] },
        { t: "(Throw a handful of snow for him to catch.)", notes: 2, then: [
          { n: "She threw a handful up in the air. He caught it, all of it, in one snap, and looked completely baffled when it disappeared in his mouth, and looked at her accusingly, and demanded another, and another, and she threw snow for him until her fingers stopped working." }
        ] },
        { t: "(Stand under the eaves and watch.)", notes: 1, then: [
          { n: "She stood under the eaves and watched, with her hands in her pockets and the snow catching on her eyelashes, and he came back every few laps to bark at her to come out, and the fourth time she did." }
        ] }
      ] },
      { n: "Afterward they sat on the top step, which she'd brushed off with her sleeve, and looked down at the grounds. The snow was full of tracks now, loops and circles and wild zigzags, his paws and her shoes, all tangled up together, two sets everywhere, crossing and recrossing so many times you couldn't tell anymore where either of them had started." },
      { n: "She looked at that for a long time. She didn't know why it mattered to her so much. It just did. Two sets. Everywhere she'd been tonight, somebody had been with her, and there was proof, written in the snow, until morning." },
      { n: "Koromaru, panting, steaming, his face crusted white, put his chin on her knee and shut his eyes. The snow kept falling. It began, very gently, to fill in the tracks, one by one, starting with the ones farthest away." }
    ] },
    { place: 'Iwatodai Dorm · Kitchen', time: 'Night', scene: [
      { music: 'dorm' },
      { n: "It was late, after midnight, and the dorm was asleep, all of it, every room full, the guests and the residents and the ones who were both, and the kitchen was dark except for the light over the stove. Solar was at the counter with a pen and a piece of card, and Koromaru was lying on her feet, because wherever she went in the kitchen at night he lay on her feet, on the theory, she assumed, that something might fall." },
      { n: "She was writing it down. She'd said she would." },
      { n: "*KOROMARU. Rice + egg, a little broth, in the small pan (the one on the back burner, it's his). NOT the bag. End of the onigiri with the plum, if you're getting one. He eats it facing the door. Let him.*" },
      { n: "*Walk at seven. He leads on the flat. He goes behind on the stairs. Don't steer, he knows the way.*" },
      { n: "*He's scared of thunder. Don't tell anyone. Sit on the floor with him.*" },
      { n: "*There's a lady at the shrine who saves him a rice ball. Take him at New Year's. You promised. (I promised.)*" },
      { n: "*He sleeps in the hall when someone's missing. Don't move him. Sit with him.*" },
      { n: "She stopped. She looked at that last line for a long time, and the stove light hummed, and the dog on her feet breathed slowly in his sleep." },
      { choose: [
        { t: "(Add one more line, and stick it on the fridge.)", notes: 3, then: [
          { n: "*He's the bravest one of us. He chose us. Be worth it.*" },
          { n: "She stuck it to the fridge with the magnet shaped like a cabbage, next to a Hagakure menu with Junpei's order circled three times, and Mitsuru's chore rota, and a drawing Ken had done of all of them in colored pencil in which she had very long legs. It looked like it belonged there. It looked like it had always been there." }
        ] },
        { t: "(Fold it and put it in your pocket.)", notes: 2, then: [
          { n: "She folded it into quarters and put it in her pocket, to keep for now, until she knew who to give it to. It sat there against her hip like something warm. She'd know when. She thought she'd know." }
        ] },
        { t: "(Read it to him.)", notes: 2, then: [
          { n: "She read it to him, quietly, all of it, in the dark kitchen. He didn't wake up. His tail moved once against the floor at the word plum, which she decided was approval, and she stuck the card on the fridge under the cabbage magnet." }
        ] }
      ] },
      { n: "She didn't know if it was a goodbye. It didn't have to be. It could just be instructions, the kind you leave for someone feeding your dog while you're away for a weekend, the kind every house had on its fridge. Maybe that was all it was." },
      { n: "She turned off the stove light. Koromaru got up off her feet, stretched, front end and then back end, yawned enormously, and padded out ahead of her into the dark hall, half a body ahead on the flat, and waited at the foot of the stairs to go up behind her, in case she fell." }
    ] }
  ]
});
