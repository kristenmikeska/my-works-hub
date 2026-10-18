/* Ken Amada · VIII Justice. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Big sister / little brother only. Ranks 1–5 come before 10/4; anything in them that assumes 10/4 hasn't happened yet
   sits in an { ifFlag: 'october-fourth' } branch (then = played late, after 10/4). The 10/4 story event should set that flag. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'ken', name: 'Ken Amada', short: 'Ken', arcana: 'Justice', numeral: 'VIII', from: 'Persona 3',
  kind: 'sees',
  romance: null,
  starts: '8/10',
  home: { area: 'shrine', spot: 'Playground', slot: 'after', days: [0, 2, 4, 6],
          hint: 'After school or in the daytime on Sunday, Tuesday, Thursday and Saturday, at the Naganaki Shrine playground.' },
  approach: "A boy of ten or eleven is at the edge of the Naganaki Shrine playground with a long pole wrapped in white tape, working through the same thrust over and over with grim, careful form, and when he notices you watching he stops, straightens, and bows very correctly.",
  cast: { yuto: 'Yuto', yutomom: "Yuto's Mother", nurse: 'Nurse' },
  invite: {
    ask: ["Solar-san, are you free right now? Koromaru wants to go for a walk. I also want to go for a walk.", "Excuse me for texting suddenly. I'm at the shrine. If you're not busy, could you watch my form?", "Solar-san. Are you busy? This isn't urgent. It is a little bit urgent.", "I have a coupon for two juices at the shrine vending machine. That isn't a real coupon. I'll buy you one anyway.", "Would you come to the playground? The big kids are on the swings again. I'm not going to say anything. I'd just like a witness.", "Solar-san, do you have time? I'd like to ask your opinion about something. It's not about Featherman."],
    ok: ["Thank you very much. I'll wait by the torii.", "Okay! I mean, understood. See you soon.", "Thank you. Koromaru says thank you too. He didn't say it, but he's wagging."],
    no: ["I understand. Please don't worry about it.", "That's okay. I'll practice by myself. I'm used to it.", "Understood. Another time, then. Good luck with your work, Solar-san."]
  },
  hangouts: [
    [
      { n: "The vending machine at the bottom of the shrine steps was old and hummed like something thinking, and Ken stood in front of it with a palm full of coins, counting them twice, the way he counted everything, as if a coin might have wandered off between the first count and the second." },
      { s: 'ken', f: 'serious', t: "I'm buying. You helped me last time. It's only fair." },
      { s: 'ken', f: 'neutral', t: "Also, you should drink more water than you do. Mitsuru-san said so. She said it to Junpei-san, but I think it applies to everyone." },
      { n: "He bought two cans of something peach-flavored and gave her one with both hands, the way you hand over something important, and then sat on the bottom step beside her and drank his in small exact sips with his feet not quite flat on the ground." },
      { choose: [
        { t: "Thank you, Ken. This is the good kind.", notes: 3, then: [
          { s: 'ken', f: 'happy', t: "I know. I tested all of them. In June. Before I moved in." },
          { n: "He said it like a researcher presenting findings, and Solar believed every word." }
        ] },
        { t: "Next time's on me.", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "Okay. That's fair too." },
          { n: "He thought about it. He added, carefully, that next time she should get the peach, and she said she would." }
        ] },
        { t: "You didn't have to spend your allowance on me.", notes: 1, then: [
          { s: 'ken', f: 'serious', t: "It's not an allowance. It's my money. I can decide what to do with it." },
          { n: "His ears had gone red. Solar said she was sorry, and meant it, and he accepted the apology with great dignity and a small slurp of peach." }
        ] }
      ] },
      { n: "They finished their cans at the same time without trying to, and Ken took hers and his to the recycling bin and put them in the right hole, the cans one and not the bottles one, and checked that they'd gone all the way down, and came back and sat again, as if the errand had earned him another five minutes of not having to be anywhere. Solar didn't move either. It was a good step. The stone was warm. Some days that was the whole plan." }
    ],
    [
      { n: "Koromaru had opinions about the walk, which were that it should go to the river, and Ken had opinions about the walk, which were that it should go around the block twice and home, and Koromaru won, as he generally did, by sitting down at the corner and declining to move until Ken gave up." },
      { s: 'ken', f: 'neutral', t: "He's not being disobedient. He's very smart. He just has a different plan." },
      { s: 'koromaru', f: 'happy', t: "Woof!" },
      { n: "At the river Koromaru found a stick of tremendous length and carried it sideways, so that everyone on the path had to step around him, and he looked back at them every few meters with his ears up, checking that they'd seen." },
      { choose: [
        { t: "Throw the stick for him.", notes: 3, then: [
          { n: "Solar threw it. Koromaru went after it like he'd been fired from something, and brought it back, and dropped it at Ken's feet instead of hers, and Ken threw it, badly, and laughed, really laughed, for a second, before he remembered to stop." }
        ] },
        { t: "Ask Ken how long he's known Koromaru.", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "Since spring. I used to come to the shrine after school. He was always there. He was the only one who was always there." },
          { n: "He said it to the river. Koromaru leaned against his leg." }
        ] },
        { t: "(Walk a little behind and let them go ahead.)", notes: 1, then: [
          { n: "Solar dropped back. Ken looked over his shoulder for her almost immediately, and slowed down, and didn't say anything, and waited until she'd caught up before he walked on." }
        ] }
      ] },
      { n: "On the way home Ken held the leash in both hands and Koromaru walked exactly beside him without being asked, tail going, the stick abandoned somewhere on the riverbank, and the evening came down slow and blue over the water, and nobody, for the length of the walk, was the youngest of anything." }
    ],
    [
      { n: "Ken was doing his homework at the long table in the dining room, everything squared off, pencils in a row by length, eraser at the top right corner like a paperweight. He had a math worksheet in front of him and a face like a man reading a ransom note." },
      { s: 'ken', f: 'serious', t: "Solar-san. Could you check this one? Only to check. I already know the answer. I just want to see if you get the same one." },
      { n: "It was a word problem about two trains leaving two stations at two different speeds. Solar looked at it for a long moment and felt something cold go down the back of her neck, which was ridiculous, because it was a fifth-grade worksheet." },
      { choose: [
        { t: "(Work it out with him, step by step.)", notes: 3, then: [
          { n: "She pulled out the chair beside him and they did it together, Ken writing, Solar pointing, and he got there a step before she did and looked up at her with his chin lifted, pleased and trying not to be, and she let him have it." }
        ] },
        { t: "What answer did you get?", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "...I didn't get one yet. I lied. I'm sorry." },
          { n: "He said it very formally, owning it, and then pushed the worksheet an inch toward her, and she pulled her chair in." }
        ] },
        { t: "I hate trains in word problems.", notes: 1, then: [
          { s: 'ken', f: 'happy', t: "Everyone hates trains in word problems. The teacher says it builds character." },
          { s: 'ken', f: 'neutral', t: "...Can you still help, though?" }
        ] }
      ] },
      { n: "The trains met at forty-two kilometers. Ken wrote it in the box with a flourish and drew a line under it, and then, in the margin, very small, a tiny train with a tiny face, and Solar pretended not to see it, and he pretended she hadn't, and they moved on to the next one, which was about apples, which was easier on everyone." }
    ]
  ],
  ranks: [
    { after: '8/10', title: '1: form', place: 'Naganaki Shrine · Playground', time: 'Daytime', music: 'day', scene: [
      { n: "The shrine in the afternoon heat was a white place. White gravel, white sky, the stone steps giving off heat like an oven door left open, and the cicadas in the big camphor tree going so loud and so steady that after a while they stopped being a sound and became the air itself, something you breathed. The playground behind the main hall was empty. The slide was too hot to touch. The swings hung perfectly still on their chains." },
      { n: "Except for a boy at the edge of the gravel, with a pole." },
      { n: "It was nearly twice his height, a length of bamboo wrapped in white tape, and he was working through the same motion over and over, step and thrust and draw back, step and thrust and draw back, his whole small body bent to it with a seriousness that was almost painful to look at. His shirt was dark with sweat down the back. Under the bench, in the only shade, a white dog lay with his chin on his paws and watched him with an air of professional supervision." },
      { n: "Solar knew him slightly. Ken Amada, fifth grade, who had moved into the dorm with one suitcase and a box of books and a backpack he carried everywhere, who said *excuse me* to everyone including the dog, and who ate dinner sitting so straight that Junpei had asked if he had a board down his shirt, and Ken had said no, very politely, and kept sitting exactly the same way." },
      { n: "He saw her. He stopped mid-thrust, set the butt of the pole on the ground, stood up straight, and bowed, a real bow, from the waist." },
      { s: 'ken', f: 'neutral', t: "Solar-san. Good afternoon. Please don't mind me. I'm almost finished." },
      { register: 'ken' },
      { choose: [
        { t: "Don't stop on my account. Keep going.", notes: 3, then: [
          { s: 'ken', f: 'neutral', t: "...Okay. Thank you." },
          { n: "He seemed surprised to be told to keep going, rather than to stop, rather than to rest or drink water or come inside, and he went back to it with his shoulders a little straighter, as if somebody had finally taken him at his word." }
        ] },
        { t: "What are you practicing?", notes: 2, then: [
          { s: 'ken', f: 'serious', t: "Thrusts. Mitsuru-san said my form was acceptable." },
          { s: 'ken', f: 'neutral', t: "Acceptable isn't good. So I'm practicing." }
        ] },
        { t: "Aren't you hot? Do you want a drink?", notes: 1, then: [
          { s: 'ken', f: 'serious', t: "I'm fine. I'm not a child." },
          { n: "He was dripping. He turned his back to her, very deliberately, and drank half a bottle of water from his bag in one go, and then turned around again as if that hadn't happened." }
        ] }
      ] },
      { n: "She sat on the bench, on the end that wasn't in the sun. The dog shifted to lean against her ankle without opening his eyes. She watched Ken work, step and thrust and draw back, and somewhere around the tenth repetition her body started to notice things before she did, the way it did, the way it had on the first night with the cold gun on the cold floor." },
      { n: "His back foot. Every time he pushed off, it turned in a few degrees, and the force went sideways out of him instead of forward, into the gravel, and the tip of the pole drifted left. It was such a small thing. It was so obviously the thing. She didn't know how she knew." },
      { choose: [
        { t: "Your back foot turns in when you push.", notes: 3, then: [
          { n: "Ken stopped. He looked down at his foot as if it belonged to someone who'd been lying to him. Then he set it, straight, and pushed, and the pole went out true, and the tip didn't drift at all." },
          { s: 'ken', f: 'serious', t: "...It's better." },
          { s: 'ken', f: 'neutral', t: "How did you know that?" },
          { s: 'solar', f: 'neutral', t: "I don't know. I just saw it." },
          { n: "He accepted that without any fuss at all, the way kids accept things adults have stopped being able to, and did it again, and again, and each time it went straight." }
        ] },
        { t: "(Say nothing. Let him find it himself.)", notes: 2, then: [
          { n: "She said nothing. On the twentieth thrust he stumbled, and looked down, and frowned at his foot for a long time, and set it straight himself, and pushed, and the pole went true. He glanced at her, quick, to see if she'd seen. She had." }
        ] },
        { t: "You're doing great!", notes: 1, then: [
          { s: 'ken', f: 'neutral', t: "Thank you." },
          { n: "He said it with a small, polite smile, the one you give a teacher who has said something nice to the whole class, and Solar watched him file her under *people who say you're doing great*, and wished, very much, that she'd said something else." }
        ] }
      ] },
      { n: "When he finally stopped, he sat on the other end of the bench with the pole across his knees and the dog between them, and drank the rest of his water, and looked out at the empty swings." },
      { s: 'ken', f: 'neutral', t: "I'm the youngest. In there. Everybody has to look after me. Mitsuru-san tells people where to stand so they're in front of me. I've seen her do it." },
      { s: 'ken', f: 'serious', t: "I don't want anyone to have to look after me. I want to be someone who's useful. I'm in fifth grade. That's not a child. That's almost a sixth grader." },
      { n: "He said *almost a sixth grader* with total conviction, as if it were a rank in an army, and Solar did not laugh, and it was one of the harder things she'd done that week." },
      { n: "He told her the dog was Koromaru, and that Koromaru used to belong to the priest here, and that the priest had died in the spring, and that Koromaru still came to the steps in the evenings. He said it the way you'd read something off a sign. Then he stood up and dug in his pocket and came out with a fistful of coins." },
      { s: 'ken', f: 'neutral', t: "You helped me. I'd like to buy you a juice. The machine at the bottom of the steps has a peach one. It's the best one. I've tested all of them." },
      { choose: [
        { t: "(Let him buy it.)", notes: 3, then: [
          { s: 'solar', f: 'happy', t: "Thank you, Ken. Peach, please." },
          { n: "He went down the steps two at a time, and counted his coins twice at the machine, and came back up with a can in each hand, and gave hers to her with both hands, very carefully, the way you'd give someone something important. She drank it. It was the best one. He had tested all of them." }
        ] },
        { t: "Let's trade. You buy mine and I'll buy yours.", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "...That works out the same." },
          { s: 'solar', f: 'neutral', t: "It's more fun." },
          { n: "He considered this with visible suspicion, and then decided it was, and they went down together and stood at the machine and bought each other peach." }
        ] },
        { t: "I'm the senpai. I'll buy.", notes: 1, then: [
          { n: "Ken's face did something small and crushed, and then smoothed over, politely, into something that said *of course*, and he put his coins back in his pocket, one at a time." },
          { s: 'ken', f: 'neutral', t: "Thank you very much, Solar-san." }
        ] }
      ] },
      { n: "They sat on the shrine steps with the cans sweating in their hands. Ken's phone was in his shirt pocket, and hanging out of the top of the pocket on a short cord was a strap, a little plastic charm of a red bird's head with a visor, bright and cheap and well loved, the paint worn off the beak." },
      { n: "He saw her see it. He tucked it into the pocket, fast, all the way down, and put his hand flat over it." },
      { s: 'ken', f: 'neutral', t: "That's... a classmate gave me that. As a joke." },
      { n: "Solar said nothing. She drank her peach. Ken watched her not say anything for a while, and something in his shoulders unlocked by a quarter turn, and when they stood to go he said, looking at the gravel, that if she happened to be free some other time she could come and check his foot again. In case it went back to turning in. Feet did that. He'd read about it." },
      { n: "She said she'd come. He nodded once, satisfied, like a contract had been signed. Koromaru walked between them all the way down the steps, and at the bottom he looked back up at the shrine, at the empty offering box, for a long moment, and then trotted on to catch up." }
    ] },

    { after: '8/19', title: '2: featherman', place: 'Paulownia Mall · Shop Windows', time: 'Daytime', music: 'city', scene: [
      { n: "The text had said *I need to run an errand at the mall and I'd like a second opinion*, and nothing else, and Solar found him on the mall's upper level standing in front of a toy shop window with his backpack on both shoulders and his hands at his sides, very straight, like a boy waiting to be called into the principal's office." },
      { n: "The window was full of Featherman. Phoenix Ranger Featherman R, five figures in a row on a little stage of fake rock, red in the middle with his arms out in a pose, and a sign in gold lettering that said LIMITED EDITION COMPLETE SET and a price that made Solar blink. Inside the shop, a mother was trying to drag a crying four-year-old away from a shelf of the same thing in a smaller size." },
      { s: 'ken', f: 'neutral', t: "Good afternoon, Solar-san. Thank you for coming." },
      { s: 'ken', f: 'serious', t: "It's for a classmate's little brother. For his birthday. I'm buying it for him. I have the money. I saved it." },
      { s: 'ken', f: 'neutral', t: "But everyone in there is... small. It would look strange. A fifth grader. Buying that." },
      { n: "The four-year-old in the shop had gone from crying to screaming. Ken watched him through the glass with an expression of deep, private sympathy that he tried, and failed, to make look like disapproval." },
      { choose: [
        { t: "I'll buy it. For me. I love Featherman.", notes: 3, then: [
          { s: 'ken', f: 'surprised', t: "...You do?" },
          { s: 'solar', f: 'happy', t: "Huge fan. Wait here." },
          { n: "She went in. She did not know anything about Featherman. She found she didn't need to. She walked up to the counter with the complete set in her arms and told the clerk, warmly, at length, that she'd been waiting for this all summer, that the red one was her favorite, that she was eighteen and had no shame about it whatsoever, and her face did it all on its own, bright and easy and utterly convincing, a whole person put on like a coat, and she watched herself do it from somewhere slightly behind her own eyes and thought, *oh, I'm good at this*, and didn't like how good." }
        ] },
        { t: "Nobody's going to care if you buy it.", notes: 2, then: [
          { s: 'ken', f: 'serious', t: "I'll care." },
          { n: "He said it so simply that there was nothing to argue with. Solar held out her hand for his money. He looked at it for a long moment, and then counted it into her palm, every coin, twice." }
        ] },
        { t: "Is it really for a classmate's little brother?", notes: 1, then: [
          { s: 'ken', f: 'serious', t: "Yes." },
          { n: "His ears went red to the tips. Solar decided she had asked one question too many, and held out her hand for his money, and he gave it to her without a word." }
        ] }
      ] },
      { n: "Afterward they sat on a bench by the fountain in the central atrium with the shopping bag in Ken's lap. He'd paid her back, exactly, down to the last ten-yen coin, and now he sat with both hands on top of the bag as if it might try to leave." },
      { s: 'ken', f: 'neutral', t: "...It's for me." },
      { s: 'ken', f: 'neutral', t: "I watch it on Sunday mornings. Seven-thirty. In the lounge, with the volume on three, before anyone's up. I know it's for little kids. I know." },
      { s: 'ken', f: 'sad', t: "My mother used to watch it with me. She liked the yellow one. She said the yellow one was the only one who thought before she jumped." },
      { n: "He said it to the bag. It was the first time Solar had heard him mention his mother, and he said it in the past tense, cleanly, without a catch, the way you'd say something you had practiced saying until it stopped catching." },
      { choose: [
        { t: "Who's your favorite?", notes: 3, then: [
          { s: 'ken', f: 'happy', t: "Red. Obviously." },
          { s: 'ken', f: 'serious', t: "He protects people. That's his whole job. He doesn't ask if they deserve it first. He just gets in front of them." },
          { n: "He said it with the total seriousness of a theologian, and Solar nodded, and filed it, without knowing yet what she was filing it under." }
        ] },
        { t: "Can I watch it with you on Sunday?", notes: 2, then: [
          { s: 'ken', f: 'surprised', t: "You'd have to be up at seven." },
          { s: 'solar', f: 'neutral', t: "I'm up at five. Akihiko." },
          { s: 'ken', f: 'happy', t: "...Okay. You can sit on the left. The right is my side." }
        ] },
        { t: "Your mom sounds like she was great.", notes: 1, then: [
          { s: 'ken', f: 'neutral', t: "She was." },
          { n: "That was all. He looked at the fountain. After a while he asked if she wanted to see the figures, and she understood that she'd been politely escorted away from something, and let herself be." }
        ] }
      ] },
      { n: "They walked back to the dorm in the long gold light of late afternoon with the bag swinging from Ken's hand, and halfway there he started telling her about Featherman, all of it, the villains and the robots and the episode where Red lost his memory, and he told it in a breathless unbroken stream like water out of a pipe that had been shut off for a long time, and she didn't interrupt once." },
      { ifFlag: 'october-fourth', then: [
        { n: "The dorm steps were empty when they got back. Ken looked at them anyway, a quick look, the way you check a stove you already know you turned off, and then went up them two at a time without saying anything, the bag held tight against his chest." }
      ], else: [
        { n: "Shinjiro was sitting on the dorm steps when they got back, in his long coat in spite of the heat, with Koromaru's head on his knee, scratching behind the dog's ears with two fingers and looking at nothing." },
        { n: "Ken stopped talking. Not slowly. All at once, mid-word, like a radio switched off. His whole body went still and correct." },
        { s: 'ken', f: 'neutral', t: "Good afternoon, Aragaki-san." },
        { s: 'shinjiro', f: 'neutral', t: "...Yeah." },
        { n: "Shinjiro looked at the bag, and at Ken, and at Solar, and then back at the dog. Ken walked up the steps past him, giving him exactly as much room as the steps allowed and not a centimeter less, and went inside, and the door shut behind him with a small, precise click." },
        { n: "Shinjiro kept scratching the dog. He didn't watch the door. He very carefully didn't watch the door. Solar, going up past him, saw that his hand on Koromaru's ear had stopped moving, and stayed stopped, until she was inside." }
      ] },
      { n: "Ken was waiting for her in the hall, by the stairs, with the bag held against him." },
      { s: 'ken', f: 'serious', t: "Solar-san. Please don't tell anyone. About the show. About any of it." },
      { choose: [
        { t: "Tell them what? It's my figure set.", notes: 3, then: [
          { s: 'ken', f: 'happy', t: "...Right. It's yours. You're a huge fan." },
          { n: "He almost smiled. He went up the stairs with the bag, which was his, and which was hers, and which both of them would defend to the death as hers if it came to it." }
        ] },
        { t: "(Cross your heart.)", notes: 2, then: [
          { n: "She drew an X over her heart with one finger. Ken watched her do it with grave attention, as if checking the angle, and nodded." }
        ] },
        { t: "Junpei would love it, you know.", notes: 1, then: [
          { s: 'ken', f: 'serious', t: "That's exactly why." },
          { n: "He went upstairs. Solar had to admit he had a point." }
        ] }
      ] },
      { n: "On Sunday at seven-thirty she came down in her running clothes and the lounge was dim and the television was on with the volume on three, and Ken was on the right side of the couch with his knees pulled up, and he didn't look around, but he moved over, a little, toward the right, though there was already plenty of room on the left." }
    ] },

    { after: '8/29', title: '3: my family', place: 'Iwatodai Dorm · Dining Room', time: 'Daytime', music: 'dorm', scene: [
      { n: "Ken's homework was laid out across one end of the long dining table like evidence at a trial. Math worksheets in one stack, kanji drills in another, a science report with a pressed leaf taped to the cover, all of it finished, all of it squared off, pencils lined up beside it by length. He'd asked her to come and check his kanji. He'd said *check* as if it were a formality, and she'd said yes, and now she was sitting next to him, checking kanji that didn't need checking." },
      { n: "There was one more sheet. It was at the bottom of the pile, half under his elbow, and she wouldn't have seen it except that he kept looking at it the way you look at a phone you're waiting to ring. A composition sheet, four hundred little squares in a grid. In the first squares, in his careful pencil, a title. *My Family.* The other three hundred and ninety-something squares were empty." },
      { s: 'ken', f: 'neutral', t: "That one's due too. Everyone in my class is writing about their mother's cooking. Or going to the beach. Or their grandmother's house." },
      { s: 'ken', f: 'neutral', t: "My mother died two years ago. Everyone at school knows. The teacher said I could write about someone else if I wanted. A friend. Someone I admire." },
      { s: 'ken', f: 'serious', t: "I don't want to write about someone else." },
      { choose: [
        { t: "Then write about her anyway.", notes: 3, then: [
          { n: "Ken looked at her for a long moment, the kind of look kids give you when you've said the thing they were waiting for an adult to say so they'd be allowed to do it." },
          { s: 'ken', f: 'neutral', t: "...The teacher said I *could*. She didn't say I had to." },
          { s: 'solar', f: 'neutral', t: "So you can." }
        ] },
        { t: "You could write about the dorm.", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "The dorm isn't a family." },
          { n: "He thought about it, with his pencil against his lip." },
          { s: 'ken', f: 'neutral', t: "...It's a little bit a family. It's a strange one. I'd have to explain the dog." }
        ] },
        { t: "You don't have to do it today.", notes: 1, then: [
          { s: 'ken', f: 'serious', t: "It's due. I don't leave things." },
          { n: "He said it like a rule he'd made for himself a long time ago, and pulled the sheet out from under his elbow and put it squarely in front of him, as if to prove it." }
        ] }
      ] },
      { n: "His school planner was open on the table beside the sheet, a cheap one with a cartoon rocket on the cover, and when he reached past it for his eraser it flipped forward a few pages on its own, the way planners do, and fell open at October." },
      { n: "One date was circled. Circled twice, in red, so hard the pen had gone through and dented the page underneath. There was nothing written next to it. Just the circle, and the dent, and the small hard silence of it in the middle of a month of nothing." },
      { n: "Ken closed the planner. He didn't hurry. He just closed it, and put it in his backpack, and zipped the backpack, and put it on the chair on his other side, away from her, and picked up his pencil." },
      { s: 'ken', f: 'neutral', t: "It was an accident. When she died. That's what everyone says." },
      { n: "He didn't say whether he was one of everyone. He wrote *My mother* in the first squares of the first line and stopped, with the pencil touching the paper, and didn't write anything else, and Solar watched the pencil not move for a long time." },
      { s: 'ken', f: 'neutral', t: "What about your family, Solar-san? What would you write?" },
      { choose: [
        { t: "I don't remember them. My page would be blank too.", notes: 3, then: [
          { s: 'ken', f: 'surprised', t: "Blank?" },
          { s: 'solar', f: 'neutral', t: "All four hundred squares." },
          { n: "She thought of a book in a blue room, and a page with nothing on it, and a woman in blue holding it up to a lamp. She didn't tell Ken about that. He looked at his own sheet, and then at her, and something in his face changed, as if he'd found out they were in the same class." },
          { s: 'ken', f: 'neutral', t: "...Then we both have a blank page." }
        ] },
        { t: "I think I had a lot of people. I just can't see their faces.", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "That's worse, I think. Having them and not seeing them." },
          { s: 'ken', f: 'neutral', t: "I can see hers. I just can't get her onto the paper." }
        ] },
        { t: "I'd make something up. Nobody would know.", notes: 1, then: [
          { s: 'ken', f: 'serious', t: "You would know." },
          { n: "He said it without any judgment at all, as a matter of fact, and went back to his sheet, and she sat there feeling like she'd been graded." }
        ] }
      ] },
      { ifFlag: 'october-fourth', then: [
        { n: "Somebody had left a plate of rice balls under plastic wrap at the end of the table, the way somebody in the dorm always seemed to lately. Ken looked at it for a while. Then he reached over and took one, and ate it in small careful bites, and wiped his fingers on a napkin, and picked up his pencil again." }
      ], else: [
        { n: "There was a clatter from the kitchen, the sound of a pan going onto a burner, and Shinjiro came through the doorway behind them with a bag of groceries, and Ken's pencil stopped. His free arm came up and lay flat across the composition sheet, covering it, and his whole face went polite and closed, like a shop at night with the shutter down." },
        { n: "Shinjiro didn't look at them. He cooked. The kitchen filled with the smell of onions in butter, and then something with soy, and twenty minutes later he came through again and set a plate of omelette rice down at the end of the table, in between them and nowhere near either of them, and went upstairs without a word." },
        { n: "Ken looked at the plate for a long time. He didn't touch it. Solar ate half. When she pushed the rest toward him, he pushed it back, very gently, with one finger, and said nothing, and kept his arm over the sheet until the footsteps on the stairs had stopped." }
      ] },
      { n: "He started writing. Slowly at first, then less slowly. Solar didn't read it. She did her own homework beside him, a page of classical Japanese she was bad at in a way that felt personal, and listened to his pencil, the scratch and pause and scratch of it, and once, a long pause, and a breath, and the eraser." },
      { s: 'ken', f: 'neutral', t: "Solar-san. Is it okay to write about someone who isn't here? Like they're still here? In the present tense?" },
      { choose: [
        { t: "That's who you're supposed to write about.", notes: 3, then: [
          { n: "Ken nodded slowly. He erased something, and wrote it again, and Solar saw, without meaning to, that he had changed *made* to *makes*." }
        ] },
        { t: "I think it's the only way they stay.", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "...That's what I thought. I just wanted to check." }
        ] },
        { t: "Your teacher won't mind.", notes: 1, then: [
          { s: 'ken', f: 'serious', t: "I'm not writing it for the teacher." }
        ] }
      ] },
      { n: "He filled three hundred and eighty squares. He counted them, at the end, with the tip of his pencil, and then sat back and looked at the sheet with an expression Solar couldn't read, and didn't try to. She'd caught one line, upside down, while he was counting. *On my birthday she writes my name on the omelette rice in ketchup, and one year she spelled it wrong on purpose to see if I would notice, and I noticed.*" },
      { n: "He put the sheet in a clear folder, and the folder in his backpack, and stood up, and bowed to her from the waist." },
      { s: 'ken', f: 'neutral', t: "Thank you for checking my kanji, Solar-san. It was very helpful." },
      { n: "She hadn't checked a single one. She said he was welcome. He went upstairs, and she sat alone at the long table for a while afterward with her classical Japanese, not doing it, thinking about a page with four hundred squares, and about how it would feel to fill one in the present tense, if she ever found out who to write about." }
    ] },

    { todo: 'Rank 4' }, { todo: 'Rank 5' }, { todo: 'Rank 6' }, { todo: 'Rank 7' }, { todo: 'Rank 8' }, { todo: 'Rank 9' }, { todo: 'Rank 10' }
  ]
});
