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
          { s: 'ken', f: 'serious', t: "...You do?" },
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
          { s: 'ken', f: 'serious', t: "You'd have to be up at seven." },
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
          { s: 'ken', f: 'serious', t: "Blank?" },
          { s: 'solar', f: 'sad', t: "All four hundred squares." },
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

    { after: '9/12', title: '4: waiting', place: 'Naganaki Shrine · Playground', time: 'After School', music: 'evening', scene: [
      { n: "The heat had finally broken, the way it does in September, not all at once but in a series of small retreats, a cooler morning, a breeze in the afternoon that smelled of something other than asphalt, and by the time the sun was going down behind the shrine the air had a faint edge to it, like the first page of a new notebook." },
      { n: "Ken wasn't practicing. The taped pole was leaning against the bench, and Ken was sitting on the bottom step of the main hall with Koromaru's leash looped twice around his wrist, and Koromaru was sitting at the top of the steps, in front of the offering box, facing the doors, perfectly still." },
      { s: 'ken', f: 'neutral', t: "Good evening, Solar-san. Please sit down if you want. We have to wait a few minutes. He does this every day." },
      { n: "Solar sat. Koromaru didn't look around. His ears were up and forward, toward the closed doors of the hall, the way a dog's ears go when he can hear someone coming up the path, and nobody was coming up the path." },
      { s: 'ken', f: 'neutral', t: "The priest used to come out at this time. To close up. Koromaru would sit there and wait for him and they'd walk home together." },
      { s: 'ken', f: 'neutral', t: "He knows. I think he knows. He was there, when it happened. He knows, and he waits anyway." },
      { choose: [
        { t: "(Sit and wait with them. Don't say anything.)", notes: 3, then: [
          { n: "Solar didn't say anything. She sat beside Ken on the cold step and the three of them waited, the boy and the girl at the bottom and the dog at the top, while the light went gold and then orange and then a long soft gray, and a crow complained in the camphor tree, and nobody came out of the doors." }
        ] },
        { t: "Does it make him sad, do you think?", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "I don't think it's sad, exactly. I think it's just what he does. It's his job." },
          { s: 'ken', f: 'neutral', t: "If he stopped, it would be like saying it was over." }
        ] },
        { t: "Should we call him down?", notes: 1, then: [
          { s: 'ken', f: 'serious', t: "No. You have to let him finish." },
          { n: "He said it firmly, almost sharply, and then looked embarrassed by how firmly, and looked back up at the dog." }
        ] }
      ] },
      { n: "After a while Koromaru stood up, and shook himself from his nose to the tip of his tail, the way dogs shake off water, and came down the steps at a trot, and leaned his whole weight against Ken's knees, and Ken put both arms around his neck and his face in the white fur and stayed like that for a moment, and nobody said anything about it." },
      { s: 'koromaru', f: 'sad', t: "*whine*" },
      { s: 'ken', f: 'neutral', t: "I know. Good boy. I know." },
      { n: "They walked down to the gate. The lanterns along the path had come on, and the gravel crunched, and Ken walked with the leash in both hands and his eyes on the ground, and halfway to the gate, without looking up, he asked her something." },
      { s: 'ken', f: 'serious', t: "Solar-san. Do you think it's okay to be angry at someone forever?" },
      { ifFlag: 'october-fourth', then: [
        { s: 'ken', f: 'sad', t: "Even if things are different now. Even if they did something that means you're not supposed to be angry anymore." },
        { n: "He didn't say who. Solar didn't need him to. He was holding the leash so hard his knuckles had gone white." }
      ], else: [
        { s: 'ken', f: 'serious', t: "Even if everybody else has stopped. Even if the person acts like nothing happened. Even if they live in the same building as you and eat breakfast at the same table." },
        { n: "He didn't say who. He said it the way you'd say a sum you'd worked out a long time ago and checked every night since. Solar thought of a boy going silent on the dorm steps, of a pencil stopping, of an arm laid flat over a page." }
      ] },
      { choose: [
        { t: "I think I might be angry at someone I can't remember.", notes: 3, then: [
          { s: 'ken', f: 'serious', t: "...Someone who did something to you?" },
          { s: 'solar', f: 'serious', t: "Someone took everything I had and left me on a floor. I don't know who. Sometimes I'm so angry I can't breathe, and I don't even know where to point it." },
          { n: "It came out of her before she could check it, which was rare, and Ken looked at her with his mouth slightly open, and then nodded, very slowly, like she'd just shown him a scar that matched his." },
          { s: 'ken', f: 'neutral', t: "That's worse. Not knowing where to point it." }
        ] },
        { t: "I think it's okay to be angry as long as you need to.", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "As long as you need to. ...What if you need to forever?" },
          { s: 'solar', f: 'neutral', t: "Then I don't think you'd be asking me." },
          { n: "Ken was quiet the rest of the way to the gate." }
        ] },
        { t: "Being angry forever would be exhausting.", notes: 1, then: [
          { s: 'ken', f: 'serious', t: "It is. I'm very tired." },
          { n: "He said it with such flat, adult weariness that Solar had nothing to answer it with, and he didn't seem to expect anything." }
        ] }
      ] },
      { n: "At the crossing by the gate, with the lights going and the cars coming through in the dusk, Ken stepped up beside her to wait, and without seeming to notice he was doing it, he took a fold of her sleeve between his fingers and held on. Not her hand. Just the sleeve. The way you'd hold on to something on a moving train." },
      { choose: [
        { t: "(Pretend not to notice.)", notes: 3, then: [
          { n: "She looked straight ahead at the crossing light and didn't move her arm at all. The light changed. They crossed. On the other side, Ken let go, and put both hands back on the leash, and looked at the pavement, and she kept looking straight ahead all the way to the next corner, and neither of them ever mentioned it." }
        ] },
        { t: "(Take his hand.)", notes: 2, then: [
          { n: "She reached down and took his hand. He let her, for the length of the crossing, his fingers stiff and surprised in hers, and then on the far side he took it back, politely, and said thank you, as if she'd held a door." }
        ] },
        { t: "Want me to hold the leash?", notes: 1, then: [
          { n: "Ken let go of her sleeve at once, as if it were hot, and his ears went red." },
          { s: 'ken', f: 'neutral', t: "No, thank you. I've got it." }
        ] }
      ] },
      { n: "At the dorm, Koromaru went straight to his water bowl and drank like he'd crossed a desert. Ken unclipped the leash and hung it on its hook and stood there a moment with his hand on it." },
      { s: 'ken', f: 'neutral', t: "He'll go back tomorrow. At the same time. I'll take him." },
      { s: 'ken', f: 'neutral', t: "Somebody should go with him. It shouldn't just be him, waiting." },
      { n: "He went upstairs. Solar stood in the entry with her shoes still on and thought about a dog on the top step facing a closed door, and about how long she had been doing more or less the same thing, and how nobody had walked her home either, until recently." }
    ] },

    { after: '9/26', title: '5: blisters', place: 'Naganaki Shrine · Playground', time: 'After School', music: 'mystery', scene: [
      { n: "It had rained in the morning and the playground was still wet, the gravel dark and shining, the swings dripping, the slide with a long silver stripe of water down the middle of it. The sky had cleared to a hard autumn blue. Ken was at the edge of the gravel with the pole, and he was not doing his practice. He was doing something else." },
      { n: "He was doing it too fast. Step and thrust and draw back, step and thrust and draw back, without the pauses, without resetting his feet, the same motion again and again until it wasn't form anymore, it was just force, his breath coming out of him in short hard sounds with every push, and there was something on the white tape of the pole near his hands that hadn't been there in August, a rust-colored smear, and then another." },
      { n: "Solar was across the gravel before she'd decided to be." },
      { choose: [
        { t: "(Catch the pole mid-thrust and hold it.)", notes: 3, then: [
          { n: "She caught it. Her hand closed on it in the air the way it had closed on a falling ruler and a thrown bottle, without asking her, and the pole stopped dead, and Ken stopped with it, breathing hard, staring at her hand on the tape and then at his own." }
        ] },
        { t: "Ken. Stop. Now.", notes: 2, then: [
          { n: "He didn't stop. He did three more, as if he hadn't heard, and then on the fourth he did, all at once, and stood there with the pole and his chest going up and down, not looking at her." }
        ] },
        { t: "(Wait until he's finished.)", notes: 1, then: [
          { n: "She waited. He didn't finish. He went on and on, and she stood at the edge of the gravel watching a ten-year-old's hands bleed on a bamboo pole, and after the twentieth she couldn't, and crossed the gravel, and he stopped when her shadow fell on him, not before." }
        ] }
      ] },
      { n: "His palms were a mess. Blisters on blisters, the tops torn off two of them, raw and wet and pink. He looked at them as if they were somebody else's homework." },
      { s: 'ken', f: 'neutral', t: "It's fine. It doesn't hurt." },
      { s: 'ken', f: 'serious', t: "It hurts a normal amount." },
      { n: "There was a first-aid kit in her bag, because there was always a first-aid kit in her bag now, because Mitsuru had handed them out in April like hymn books. She sat him on the bench and knelt on the wet gravel in front of him and cleaned his hands with the little packets of antiseptic, and he hissed through his teeth and didn't pull away, and she wrapped them, one and then the other, in gauze, carefully, not too tight, the way her hands seemed to know." },
      { s: 'ken', f: 'neutral', t: "My mother used to do this. When I fell off things. She'd blow on it first." },
      { choose: [
        { t: "(Blow on it first.)", notes: 3, then: [
          { n: "Solar bent and blew, gently, on the raw place on his palm before she put the gauze over it. Ken made a sound, a very small one, that wasn't about the pain, and turned his face away toward the swings, and kept it there until she'd finished both hands." }
        ] },
        { t: "Did she know you'd be this stubborn?", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "She said I got it from her." },
          { s: 'ken', f: 'happy', t: "She said it like it was a bad thing. It wasn't. She was proud." }
        ] },
        { t: "You're too old to need this, right?", notes: 1, then: [
          { s: 'ken', f: 'serious', t: "...Yes." },
          { n: "He looked at his bandaged hands in his lap and didn't say anything else, and Solar wished she could take it back, and couldn't." }
        ] }
      ] },
      { n: "He sat with his wrapped hands in his lap, palms up, like something he'd been given to hold. Koromaru, who had been lying under the slide, came over and put his chin on Ken's knee, carefully, between the hands." },
      { s: 'ken', f: 'neutral', t: "It wasn't an accident. When she died." },
      { s: 'ken', f: 'neutral', t: "Everyone says it was. The papers said a building. I was there. I saw what happened, and it wasn't the building." },
      { s: 'ken', f: 'serious', t: "I saw what did it. I didn't know what it was, then. I know now. I know what it was, and I know whose it was." },
      { n: "He said it to his hands, in a level, careful voice, like a boy reading out a report he'd written and rewritten until there was nothing left in it that could shake. The wind moved the wet swings on their chains. Somewhere down the hill a bus pulled away from a stop." },
      { ifFlag: 'october-fourth', then: [
        { s: 'ken', f: 'sad', t: "It was two years on the fourth." },
        { n: "That was all he said about the fourth. Solar watched him close the subject the way he'd closed his planner at the dining table, without hurrying, completely, and understood that he wasn't going to open it again for a while, maybe not with her, maybe not with anyone." },
        { choose: [
          { t: "(Stay. Don't ask.)", notes: 3, then: [
            { n: "She stayed. She sat down beside him on the bench, on the wet slats, and didn't ask, and after a while he leaned, very slightly, until his shoulder was against her arm, and stayed there." }
          ] },
          { t: "You don't have to tell me anything.", notes: 2, then: [
            { s: 'ken', f: 'neutral', t: "I know. I'm not going to. ...Thank you for saying it." }
          ] },
          { t: "What happened on the fourth?", notes: 1, then: [
            { s: 'ken', f: 'sad', t: "Please don't." },
            { n: "He said it so quietly she almost didn't hear it, and she didn't ask again." }
          ] }
        ] }
      ], else: [
        { s: 'ken', f: 'serious', t: "It'll be two years on the fourth. Of October. I'm going to be ready." },
        { s: 'solar', f: 'neutral', t: "Ready for what?" },
        { n: "Ken looked at her. For a second, something showed in his face, something old and set and terrible, much too big for the face it was in, and then he folded it away, quick and neat, the way you'd fold a letter you didn't want read." },
        { s: 'ken', f: 'neutral', t: "For Tartarus. For the big floors. I don't want to be the one everyone has to stand in front of." },
        { n: "It was a lie. It was a good lie, a careful one, and he'd clearly had it ready, and Solar knew it was a lie the way she knew a step was missing on a dark staircase, in her feet before her head." },
        { choose: [
          { t: "(Let him have the lie. For now.)", notes: 3, then: [
            { n: "She let him have it. She sat down beside him on the wet slats and said Tartarus was a good reason, and he nodded, and didn't look at her, and after a while he leaned, very slightly, until his shoulder was against her arm, and stayed there." }
          ] },
          { t: "Ken. That's not what you meant.", notes: 2, then: [
            { s: 'ken', f: 'serious', t: "It's what I'm saying." },
            { n: "He said it gently and absolutely, the way you'd tell someone a door was locked, and she heard that it was, and that she wasn't going to get through it today by pushing." }
          ] },
          { t: "Whatever it is, you don't have to do it alone.", notes: 2, then: [
            { s: 'ken', f: 'sad', t: "...Yes I do. Some things you do." },
            { n: "He said it so simply, and so certainly, that it frightened her more than anything else he'd said." }
          ] }
        ] }
      ] },
      { n: "When the light started going, he stood up and picked up the pole, carefully, with his wrapped hands, and leaned it against his shoulder. He looked very small with it. He looked like he'd been carrying it a long time." },
      { s: 'ken', f: 'neutral', t: "Solar-san. If I did something bad. Something really bad. Would you still—" },
      { n: "He stopped. He looked at the pole, and at his hands, and at Koromaru, and then up at her, with his chin lifted, as if bracing to be hit." },
      { s: 'ken', f: 'neutral', t: "Never mind. Thank you for the bandages. I'll pay you back for the gauze." },
      { n: "He would not, she decided, be paying her back for the gauze. She walked him home. He let her carry the pole, which he'd never done before, and she carried it all the way, and it was heavier than it looked, much heavier, and she couldn't stop thinking, the whole walk, about what it was for." }
    ] },

    { after: '10/10', title: '6: visiting hours', place: 'Tatsumi Memorial Hospital', time: 'After School', music: 'tender', scene: [
      { n: "The fourth floor of Tatsumi Memorial smelled of disinfectant and the particular dry warmth of air that has been heated too long, and somewhere down the corridor a machine was beeping in a slow, steady rhythm, not alarmed, just counting, the way machines count when they've been told to keep an eye on someone." },
      { n: "Ken was on the bench outside one of the doors. He was in his school uniform, with his backpack on his lap and both arms around it, and he was looking at the door the way Koromaru looked at the doors of the shrine." },
      { n: "A nurse coming out of the next room saw Solar looking, and stopped, and lowered her voice." },
      { s: 'nurse', t: "Are you with him? He's been here every day this week. Straight from school. He sits there until visiting hours are over. He hasn't gone in once." },
      { s: 'nurse', t: "We don't mind. He's very polite. He says good afternoon to everyone." },
      { choose: [
        { t: "(Sit down beside him without a word.)", notes: 3, then: [
          { n: "Solar sat down on the bench beside him. Ken didn't look at her. He moved his backpack an inch, to make room that was already there, and kept looking at the door." }
        ] },
        { t: "Ken. Have you eaten anything today?", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "Lunch. At school. I ate all of it. I'm not being stupid about eating." },
          { s: 'ken', f: 'sad', t: "...Fuuka-san makes porridge at night. I eat that too." }
        ] },
        { t: "Do you want me to take you in?", notes: 1, then: [
          { n: "Ken's arms tightened around the backpack." },
          { s: 'ken', f: 'serious', t: "No. Not yet. Please." }
        ] }
      ] },
      { n: "They sat. The machine down the corridor counted. A cart went past with a squeaking wheel, pushed by an orderly who nodded to Ken like an old acquaintance, and Ken said good afternoon, and the orderly said good afternoon back, and the cart squeaked away." },
      { s: 'ken', f: 'neutral', t: "He's asleep. The doctors say asleep. They say they don't know when." },
      { s: 'ken', f: 'neutral', t: "I went there to—" },
      { n: "He stopped. His mouth stayed open on the shape of the next word, and nothing came out of it, and he shut it." },
      { s: 'ken', f: 'neutral', t: "He knew who I was. The whole time. Since August. He knew, and he lived in the same building, and he cooked dinner, and he let me be cold to him, every day, and he never said." },
      { s: 'ken', f: 'sad', t: "And then he— he got in front of—" },
      { n: "He couldn't do it. He tried twice and his voice wouldn't go past that place, it just stopped there like a train at the end of a line, and he sat with his arms around his backpack and his chin trembling, holding his whole face very still by force, the way she'd seen grown men do it at funerals in films." },
      { s: 'ken', f: 'sad', t: "It should be me in there. That's the only thing that makes sense. It should be me." },
      { choose: [
        { t: "He didn't think so. That's why he did it.", notes: 3, then: [
          { n: "Ken turned and looked at her, really looked, for the first time since she'd sat down, his eyes enormous and wet and furious and lost all at once." },
          { s: 'ken', f: 'sad', t: "That's not fair. That's not *fair*." },
          { s: 'solar', f: 'sad', t: "No. It isn't." },
          { n: "He put his face down into the top of his backpack, and his shoulders went, and Solar put her hand on his back and kept it there, and the nurse at the station down the corridor looked up and then, very kindly, looked away." }
        ] },
        { t: "(Put your arm around him.)", notes: 3, then: [
          { n: "She put her arm around his shoulders. He went stiff, the way he always did, a small soldier at attention, and then he didn't. He leaned into her side and stayed there with his face turned away into her blazer, and she felt him shaking, fine and fast, all the way through, and didn't say anything, and didn't need to." }
        ] },
        { t: "Nobody should be in there. It's not a trade.", notes: 2, then: [
          { s: 'ken', f: 'serious', t: "Everything's a trade. That's what I learned. You do something and something else happens." },
          { s: 'solar', f: 'serious', t: "Then he made his. You don't get to make it for him." },
          { n: "Ken stared at her. Then he looked down at his backpack, and his face crumpled, slowly, and he let it." }
        ] }
      ] },
      { n: "When he could talk again, he unzipped the front pocket of his backpack and took something out and held it in both hands. A small plastic figure. Red. Arms out, in the pose. The one from the middle of the set." },
      { s: 'ken', f: 'neutral', t: "Could you put this in there? On the table. By the bed. I can't go in yet. I'll go in. Just not yet." },
      { s: 'ken', f: 'neutral', t: "He doesn't have to know it's from me. He doesn't have to know what it is. I just want it to be in there." },
      { choose: [
        { t: "(Take it and go in.)", notes: 3, then: [
          { n: "She took it. It was warm from his pocket. She went in." }
        ] },
        { t: "He'll know it's from you.", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "...Okay. Then he'll know." },
          { n: "He put it in her hand and closed her fingers over it with his bandaged ones, very seriously, the way you'd hand over a key." }
        ] },
        { t: "Are you sure you don't want to do it yourself?", notes: 1, then: [
          { s: 'ken', f: 'serious', t: "I'm sure that I'm not ready. I'm sure about that." },
          { n: "He held it out until she took it." }
        ] }
      ] },
      { n: "The room was dim and quiet and smelled of clean sheets. Shinjiro was very still under the white blanket, and his face without the scowl in it looked younger than she'd ever seen it, and there were wires and a tube and the machine at his side counting, slow and steady. She set the little red figure on the bedside table, facing the bed, with its arms out. It looked absurd. It looked exactly right." },
      { n: "When she came out, Ken was standing up, with his backpack on, waiting by the door like someone at a station." },
      { s: 'ken', f: 'neutral', t: "Did he look—" },
      { s: 'solar', f: 'neutral', t: "He looked asleep. Red's on the table. He's facing him." },
      { n: "Ken nodded, once, hard, and bowed to her, and bowed to the nurse at the station, and they went down in the elevator together without saying anything, and outside, on the hospital steps, in the cold clear evening, he took the fold of her sleeve between two bandaged fingers and held on to it all the way to the monorail, and this time neither of them pretended not to notice." }
    ] },

    { after: '10/24', title: '7: the other kid', place: 'Naganaki Shrine · Playground', time: 'After School', music: 'day', scene: [
      { n: "She heard it from the bottom of the shrine steps, before she saw anything. A thin high voice crying the way small kids cry when they've been crying for a while and are getting tired of it, and an older voice, a boy's, saying *give it back* in a tone that meant it was the fifth time, and a third voice, very level, very polite, saying *excuse me*." },
      { n: "By the time she got to the top it was over. Two sixth-graders were walking off fast toward the far gate with their hands in their pockets, looking back over their shoulders, and a very small boy, second grade at most, was sitting on the gravel by the swings with his face blotched and a toy car clutched to his chest, and Ken was standing between him and the gate with his feet set and his hands in fists, bleeding from the nose." },
      { n: "He saw her. He wiped his nose on the back of his hand, looked at the blood, and looked, of all things, embarrassed." },
      { s: 'ken', f: 'neutral', t: "Good afternoon, Solar-san. It's fine. It's mostly over." },
      { choose: [
        { t: "(Check the little boy first.)", notes: 3, then: [
          { n: "She knelt by the little boy, who looked at her with great suspicion and greater relief, and checked his hands and his knees and his car, which was the thing he seemed most worried about, and everything was intact. Behind her she heard Ken let out a breath, and understood that she'd done the thing he'd have done, and that he'd noticed." }
        ] },
        { t: "Ken, your nose—", notes: 2, then: [
          { s: 'ken', f: 'serious', t: "It's fine. Check him. He's the one who was scared." },
          { n: "She checked him. Ken was right. He usually was, about the things he was sure of." }
        ] },
        { t: "Who were those boys? I'll go after them.", notes: 1, then: [
          { s: 'ken', f: 'serious', t: "Please don't. Then it's about them again. It should be about him." },
          { n: "He nodded at the little boy on the gravel. Solar stopped, and turned, and saw what he meant." }
        ] }
      ] },
      { n: "The little boy's mother arrived at a run from the direction of the shopping street, a bag of groceries bouncing on her arm, and swept him up off the gravel, and there was a great deal of crying, briefly, from both of them. Then she turned to Ken, and to his nose, and to Solar standing beside him with a tissue, and put it together the way adults put things together, quickly and a little wrong." },
      { s: 'yutomom', t: "Did your little brother do this? For Yuto? Oh, his poor face. Thank you. Thank you so much. You must be so proud of him." },
      { n: "Ken opened his mouth. Solar got there first. Her face did it on its own, warm and easy and a little rueful, a big sister's face, the face of someone who'd done this before, collecting her brother from playgrounds, apologizing for his nosebleeds, and the voice that came out of her was a voice she'd never used and knew perfectly." },
      { s: 'solar', f: 'happy', t: "He's always like this. I can't take him anywhere. I'm very proud of him." },
      { n: "She felt Ken go still beside her. Not the polite stillness. A different one." },
      { s: 'yuto', t: "He said *excuse me* to them. Before. Like a teacher." },
      { s: 'yutomom', t: "Well. You come by the bakery on the shopping street, both of you, any time, and there's bread. Free. I mean it." },
      { n: "She went, with Yuto on her hip looking back at Ken over her shoulder the whole way to the gate, the toy car held up in one fist like a trophy. Ken watched them go. His nose had nearly stopped. He didn't say anything about the brother thing, and Solar didn't either, and it sat there between them on the gravel, warm, unmentioned, like a cat that had decided to stay." },
      { place: 'Iwatodai · Riverside', time: 'After School' },
      { n: "They walked home the long way, along the river, because Ken said his shirt had blood on it and he'd rather it dried before anyone at the dorm saw. The water was low and brown and slow. The trees along the bank had started to turn, a few at a time, red and then yellow, as if they were checking with each other first." },
      { s: 'ken', f: 'neutral', t: "I didn't hit them. I want you to know that. I didn't hit anyone." },
      { s: 'ken', f: 'neutral', t: "I just stood there. In between. I asked them to give it back, and they didn't, and I didn't move. And one of them hit me, and I still didn't move. And then they got bored." },
      { s: 'ken', f: 'serious', t: "That's what he did. He didn't fight. He just got in between." },
      { n: "He didn't say who. He didn't have to. He said it to the river, very evenly, and walked on, and Solar walked beside him and felt something in her chest pull tight and stay that way, like a stitch in a long run." },
      { choose: [
        { t: "You were very brave today.", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "I wasn't brave. I was scared the whole time. My legs were shaking. You could probably see." },
          { s: 'solar', f: 'serious', t: "That's what brave is, Ken." },
          { n: "He thought about that for a long time. He seemed to file it somewhere careful." }
        ] },
        { t: "You were like him today.", notes: 3, then: [
          { n: "Ken stopped walking. He stood on the river path with blood dried on his upper lip and looked up at her, and his face did several things in a row, quickly, none of which he seemed able to stop." },
          { s: 'ken', f: 'sad', t: "...I don't know if I'm allowed to be." },
          { s: 'solar', f: 'neutral', t: "I don't think anyone gets to decide that but you." },
          { n: "He started walking again. After a while he wiped his eyes on his sleeve, the clean one, quickly, as if it were his nose." }
        ] },
        { t: "Next time, call me. I'll get in between.", notes: 1, then: [
          { s: 'ken', f: 'serious', t: "That's not the point, Solar-san." },
          { s: 'ken', f: 'neutral', t: "The point is someone small was there, and I was there. You weren't. I was." }
        ] }
      ] },
      { s: 'ken', f: 'neutral', t: "...You told her you were my sister." },
      { s: 'solar', f: 'neutral', t: "She assumed. I didn't correct her." },
      { s: 'ken', f: 'neutral', t: "You said you were proud of me. That was part of the lie. I know." },
      { choose: [
        { t: "That part wasn't the lie.", notes: 3, then: [
          { n: "Ken looked down at the path. His ears went red. He walked faster for a few steps, and then slower, until she'd caught up, and then exactly beside her, all the way to the bridge." },
          { s: 'ken', f: 'happy', t: "...Okay." }
        ] },
        { t: "None of it was a lie, really.", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "You're not my sister. That part was." },
          { s: 'solar', f: 'happy', t: "Today I was." },
          { n: "He seemed to accept that as a technicality, which, for Ken, was a high form of approval." }
        ] },
        { t: "It was easier than explaining.", notes: 1, then: [
          { s: 'ken', f: 'neutral', t: "Right. That makes sense." },
          { n: "He said it very reasonably, and walked on, and she heard the small flat place in it where something else could have been, and wished she'd said something else." }
        ] }
      ] },
      { n: "At the dorm he went straight upstairs to change his shirt before anyone could see it, and Solar stood in the entry taking off her shoes and found that her hands were not quite steady, which was strange, because nothing had happened to her. The voice she'd used on the gravel was still in her mouth, the big sister's voice, warm and practiced and sure, and she turned it over like a coin she'd found in a coat she didn't remember owning, and wondered, for the first time in a while, who she'd been practicing on." }
    ] },

    { after: '11/14', title: '8: what I came to do', place: 'Naganaki Shrine · Playground', time: 'After School', music: 'mystery', scene: [
      { n: "It was properly cold now. November had come in with a wind that went through blazers like they were paper, and the camphor tree had dropped half its leaves onto the playground, so that the gravel was brown and gold and crackled underfoot, and Solar could see her breath, faintly, in the shade." },
      { n: "The dorm had been quiet since the beginning of the month, in a way that was different from the quiet in October. Mitsuru didn't come down to dinner some nights. Nobody asked her why. Ken had started leaving the lounge television off on Sunday mornings, and sitting in front of it anyway, at seven-thirty, with the remote in his hand, not pressing anything." },
      { n: "He was practicing again. Solar watched from the gate for a while before he saw her. It was different. Not thrusts. He was setting his feet and holding the pole crosswise in front of him, both hands, and turning, and setting his feet again, over and over, a step to the left, a step to the right, the pole always across, always between. He wasn't attacking anything. He was guarding something that wasn't there." },
      { s: 'ken', f: 'neutral', t: "Good afternoon, Solar-san. I changed my practice. Akihiko-san showed me some of it. The rest I made up." },
      { choose: [
        { t: "You're guarding now. Not attacking.", notes: 3, then: [
          { s: 'ken', f: 'serious', t: "...You saw that? Nobody's noticed. Akihiko-san thought I was just doing it wrong." },
          { n: "He looked at the pole in his hands, and then at her, with the quick surprised respect of a kid who'd been seen exactly." }
        ] },
        { t: "Show me.", notes: 2, then: [
          { n: "He showed her. Step, set, turn, the pole always level, always across his body like a gate. He did it ten times without a mistake and then looked at her for the verdict, and she nodded, and he didn't smile, but he stood up straighter." }
        ] },
        { t: "It's cold. You should've worn a coat.", notes: 1, then: [
          { s: 'ken', f: 'neutral', t: "I'm warm when I'm practicing." },
          { n: "His nose was red. His hands were red. She let it go." }
        ] }
      ] },
      { n: "They sat on the bench with the pole across Ken's knees. Koromaru had found a patch of thin sun on the steps and was lying in it flat on his side like something that had been dropped there. The wind moved the empty swings." },
      { n: "Ken didn't say anything for a long time. Then he said it all at once, the way you'd jump into cold water, before he could stop himself." },
      { s: 'ken', f: 'serious', t: "I went there to kill him." },
      { n: "His voice didn't shake. It was the first time he'd said it out loud, Solar thought, and he had chosen the words a long time ago, and he said them exactly." },
      { s: 'ken', f: 'serious', t: "That night. I'd planned it for two years. I wrote it in my planner. I circled it. I trained every day. I knew where he'd be. I went there to kill him, Solar-san, and I would have." },
      { s: 'ken', f: 'neutral', t: "And he knew. He knew I'd come. He said I should do what I came to do. He didn't run." },
      { s: 'ken', f: 'sad', t: "And then something happened, and he got in front of me instead, and now I have two years and nowhere to put them." },
      { choose: [
        { t: "Thank you for telling me.", notes: 3, then: [
          { n: "Ken looked at her as if she'd said something in a language he hadn't expected her to know." },
          { s: 'ken', f: 'neutral', t: "...That's what you say? Not that I'm terrible?" },
          { s: 'solar', f: 'serious', t: "You were ten and someone killed your mother. You told me the truth. That's what I say." },
          { n: "He stared at the gravel. His jaw worked. He didn't cry. He'd done that already, she thought, a great deal, alone, with the door shut, the way you did." }
        ] },
        { t: "You were a kid. You were grieving.", notes: 2, then: [
          { s: 'ken', f: 'serious', t: "I'm still a kid. I'm still grieving. I still went." },
          { n: "He said it without self-pity, as a correction to the record, and Solar heard that he would not be let off by anyone, least of all himself, and that he didn't want to be." }
        ] },
        { t: "But you didn't do it.", notes: 1, then: [
          { s: 'ken', f: 'sad', t: "Only because he didn't let me. That's not the same as not doing it." },
          { n: "He was right. Solar didn't have anything to say to that, and he didn't seem to expect her to." }
        ] }
      ] },
      { s: 'ken', f: 'neutral', t: "I'm still angry. At him. For my mother. I don't think that's going to stop." },
      { s: 'ken', f: 'neutral', t: "And I want him to wake up. More than anything. I go every day and I want it so much I feel sick." },
      { s: 'ken', f: 'sad', t: "Both. At the same time. Is that allowed? It doesn't feel allowed. It feels like I'm cheating at something." },
      { choose: [
        { t: "It's allowed. I think it's the only honest answer.", notes: 3, then: [
          { s: 'ken', f: 'neutral', t: "...The only honest one." },
          { n: "He turned it over, the way he turned everything over, and Solar watched him put it somewhere and close the lid on it, carefully, like something he meant to come back to." }
        ] },
        { t: "I feel two things at once about almost everything.", notes: 2, then: [
          { s: 'ken', f: 'serious', t: "Really? Even you?" },
          { s: 'solar', f: 'neutral', t: "Especially me." },
          { n: "He seemed to find that enormously comforting, which she found she didn't mind being." }
        ] },
        { t: "Maybe the anger will fade, with time.", notes: 1, then: [
          { s: 'ken', f: 'serious', t: "I don't want it to fade. Then it would be like she didn't matter." },
          { n: "He said it fiercely, and then more quietly, to the pole across his knees, that he just wanted it to stop being the only thing." }
        ] }
      ] },
      { n: "He stood up. He held the pole out to her, butt first, the way you'd hand someone a sword in a film." },
      { s: 'ken', f: 'neutral', t: "Will you practice with me? You attack. I guard. You won't hurt me. I'm good at this part now." },
      { n: "She took it. She found another stick under the camphor tree, a fallen branch of about the right length, and gave him the pole back and kept the branch, and came at him, slowly at first, and then not slowly, and her body knew how to do this too, the angles, the feint, the place to put her weight. Ken met every one. He didn't attack back once. He just set his feet, and turned, and put the pole between her and the empty place behind him, again and again, with his face fixed and fierce and absolutely calm, until the sun went down behind the shrine and the cold came up out of the gravel and they were both breathing hard, and Koromaru, who had woken up to watch, barked once, approvingly, from the steps." },
      { s: 'koromaru', f: 'happy', t: "Woof!" },
      { s: 'ken', f: 'happy', t: "Koromaru says I won." },
      { s: 'solar', f: 'happy', t: "Koromaru's biased." },
      { n: "Ken laughed. It surprised both of them. It came out of him rusty and short, like a door that hadn't been opened in a while, and he looked startled by it, and then he did it again, on purpose, and that one was easier." }
    ] },

    { after: '12/5', title: '9: tall enough', place: 'Iwatodai Dorm · Lounge', time: 'After School', music: 'dorm', scene: [
      { n: "The dorm was so full now that it had stopped feeling like a dorm and started feeling like a house during a holiday, coats on every hook and two coats on some of them, shoes overflowing the rack in the entry and lining up along the wall, voices in every room at once. People Solar's age who said her name the way you'd say the name of a street you grew up on. People who looked at her from across the dining table like she was a photograph they'd carried in a wallet for a long time, and then looked away when she caught them at it." },
      { n: "Ken had found the one quiet corner, which was the doorway between the lounge and the kitchen, and he was standing in it with his back flat against the frame and a pencil in his hand, holding the pencil out to her without a word." },
      { n: "There were marks on the frame already. Three of them, low down, small neat lines in pencil with dates beside them in Ken's careful hand. The first said August. The others were spaced weeks apart. Somebody had been measuring him all autumn, or he'd been measuring himself, standing very straight and reaching up behind his own head." },
      { s: 'ken', f: 'neutral', t: "Could you, please? I can't get it level by myself. It always comes out a little high. I think I cheat without meaning to." },
      { choose: [
        { t: "(Put the book flat on his head and mark it properly.)", notes: 3, then: [
          { n: "She took a paperback off the lounge shelf and laid it flat on top of his head, the way you were supposed to, and held it level, and drew the line along the bottom edge. Ken stood very still under it with his heels against the wood and his chin tucked, like someone being knighted." }
        ] },
        { t: "Stand up straight. No cheating.", notes: 2, then: [
          { s: 'ken', f: 'serious', t: "I'm not cheating. I'm standing normally." },
          { n: "He was on his toes. She waited. He came down off them, slowly, with dignity, and she marked it." }
        ] },
        { t: "Who did the other ones?", notes: 1, then: [
          { s: 'ken', f: 'neutral', t: "Me. They're probably wrong." },
          { n: "He held the pencil out again, a little more insistently, and she took it." }
        ] }
      ] },
      { n: "He stepped away from the frame and turned around to look. The new line was above the August line by a clear finger's width." },
      { s: 'ken', f: 'serious', t: "Two centimeters. That's two centimeters since summer." },
      { s: 'ken', f: 'neutral', t: "My mother used to do this. On the kitchen pillar in our old apartment. She did it every birthday. Someone else lives there now. They probably painted over it." },
      { n: "He wrote the date next to the line, very small, and then stood looking at the four marks, the low one and the three above it, a little ladder going up the frame. From the dining room came a burst of laughter, a girl's voice saying something in a language Solar's ear almost caught, and Ken's eyes went toward it, and then to Solar, and stayed on her." },
      { s: 'ken', f: 'neutral', t: "Solar-san. Those people. They look at you like you're someone they lost." },
      { s: 'ken', f: 'serious', t: "Are you going to go with them? When they go?" },
      { n: "He asked it the way he asked everything, straight and level, looking right at her, like a boy asking the time. It went through her like the November wind through a blazer." },
      { choose: [
        { t: "I don't know yet. That's the truth.", notes: 3, then: [
          { n: "Ken looked at her for a long moment. Then he nodded, once, the way he'd nodded at the end of the river path, filing it." },
          { s: 'ken', f: 'neutral', t: "Okay. Thank you for not lying. Everybody else would have said no." }
        ] },
        { t: "I'm not going anywhere.", notes: 1, then: [
          { s: 'ken', f: 'serious', t: "You don't know that. Please don't say it if you don't know it." },
          { n: "He said it gently, but he said it, and Solar stood there corrected by a fifth grader, and knew he was right." }
        ] },
        { t: "(Measure him again instead of answering.)", notes: 2, then: [
          { n: "She picked up the book again. Ken let her lay it on his head, and stood under it, and said, from under it, very quietly, that that wasn't an answer. She said she knew. He said that was okay. He'd rather have no answer than a wrong one." }
        ] }
      ] },
      { s: 'ken', f: 'neutral', t: "When my mother died, nobody told me anything until it was already over. They thought I was too young. I found out by being there." },
      { s: 'ken', f: 'neutral', t: "So if you're going to go. Wherever. Please don't let me find out by you not being there. That's all. That's the only thing." },
      { choose: [
        { t: "I'll do everything I can to tell you first.", notes: 3, then: [
          { s: 'ken', f: 'neutral', t: "Everything you can. ...That's an honest one too." },
          { n: "He held out his little finger, and then seemed to think that was childish, and started to take it back, and she caught it with hers before he could. He looked at their hooked fingers with great seriousness, and shook once, firmly, like a contract, and let go." }
        ] },
        { t: "You're not too young, Ken. Not for this.", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "I know I'm not. I've been not too young for a long time." },
          { n: "He said it without bitterness, as a plain fact, and that was the worst part." }
        ] },
        { t: "Nobody's going anywhere tonight.", notes: 1, then: [
          { s: 'ken', f: 'neutral', t: "Okay. Tonight's a start." },
          { n: "He said it generously, the way you'd accept a partial payment, and she felt it, and deserved it." }
        ] }
      ] },
      { n: "Somebody called Ken's name from the dining room, Junpei, wanting to know if he'd eaten the last of something, and Ken called back, with great indignation, that he had not, and then lowered his voice and told Solar that he had." },
      { n: "He took the pencil and, before he went, added something next to his new mark, very small. Solar read it after he'd gone. Under the date, in his neat hand, he'd written her name. *Measured by Solar-san.* As if it were a witness signature on a document. As if it would hold up in court." },
      { n: "She stood in the doorway for a while with her thumb on it, between the noise of the lounge and the noise of the kitchen, in the one quiet place in the house, and didn't let herself think about how many doorframes in how many houses she might have stood in like this, and didn't let herself think about it so hard that she thought about it anyway." }
    ] },

    { after: '1/9', title: '10: justice', place: 'Tatsumi Memorial Hospital', time: 'After School', music: 'tender', scene: [
      { n: "It had snowed overnight, a thin dry snow that hadn't settled so much as dusted everything, the hospital roof, the bare trees in the parking lot, the railing of the steps, and the air outside was so cold it hurt to breathe through the nose, and inside, on the fourth floor, the heat came up so fast it made Solar's face sting." },
      { n: "Ken was on the bench. He was in his coat and his school uniform, with his backpack on his knees, as he'd been every day since October. But he was holding a sheet of paper in a clear folder on top of the backpack, and when he saw her he stood up." },
      { s: 'ken', f: 'neutral', t: "Good afternoon, Solar-san. Thank you for coming. I'm going in today." },
      { s: 'ken', f: 'neutral', t: "I'd like you to come in with me. If you don't mind. You don't have to say anything. I'd just like someone to be there who knows." },
      { choose: [
        { t: "Of course. I'm right here.", notes: 3, then: [
          { s: 'ken', f: 'neutral', t: "...Thank you." },
          { n: "He took a breath, the kind you take at the top of a high dive, and put his hand on the door handle, and left it there for a second, and then pushed." }
        ] },
        { t: "What changed?", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "Nothing. I just decided I was tired of the bench." },
          { s: 'ken', f: 'serious', t: "And I grew another centimeter. I measured. By myself, but with the book. Properly." }
        ] },
        { t: "Are you sure you're ready?", notes: 1, then: [
          { s: 'ken', f: 'serious', t: "No. I'm going in anyway." },
          { n: "He said it so exactly like someone else that Solar's breath caught, and he heard it too, and didn't look at her, and opened the door." }
        ] }
      ] },
      { n: "The room was the same. Dim and warm and clean, the machine at the bedside counting slow and steady, the snow-light from the window lying gray across the white blanket. Shinjiro was the same. Very still, and very much younger without the scowl, as if somebody had taken the year off his face along with it." },
      { n: "On the bedside table, facing the bed with its arms out, was a small red plastic figure. Someone had been dusting it. There was a get-well card propped behind it in Fuuka's hand, and a pair of red gloves folded neatly beside it, and a single dog biscuit in a twist of napkin that Solar suspected had been left by the only member of the household who couldn't write." },
      { n: "Ken stood at the end of the bed for a long time. Then he pulled the visitor's chair closer, and sat on the edge of it, very straight, and took the paper out of the folder." },
      { s: 'ken', f: 'neutral', t: "I'm going to read you something. It's for school. It's late. The teacher said I could hand it in late." },
      { n: "It was the composition. Not the one from the summer. Solar could see the squares through the plastic, and the date in the corner, and that every one of the four hundred was full, and then some, a second sheet stapled behind." },
      { s: 'ken', f: 'neutral', t: "\"My Family. By Amada Ken. Fifth grade.\"" },
      { s: 'ken', f: 'neutral', t: "\"My mother makes omelette rice on my birthday and writes my name on it in ketchup. She likes the yellow Featherman best because the yellow one thinks before she jumps. She is not here anymore, but I am writing about her in the present tense because my senpai said that is how they stay.\"" },
      { s: 'ken', f: 'neutral', t: "\"Now I live in a dormitory with high school students and a dog. One of them makes porridge when nobody is eating. One of them runs every morning at five. One of them measured me properly. One of them is in the hospital, because he got in front of me.\"" },
      { n: "His voice held all the way to there. Then it stopped, and he swallowed, and Solar watched him decide, and go on." },
      { s: 'ken', f: 'neutral', t: "\"I am still angry at him. I also want him to wake up. My senpai says I am allowed both. So I am writing both. That is my family. It is a strange one. I have to explain the dog.\"" },
      { n: "He put the paper down on his knees. The machine counted. Outside, a little snow had started again, small and slow, past the window." },
      { s: 'ken', f: 'sad', t: "...Shinjiro-san. I'm still angry. Please wake up anyway." },
      { choose: [
        { t: "(Put your hand on his shoulder.)", notes: 3, then: [
          { n: "She put her hand on his shoulder from behind the chair. He reached up without looking and put his own hand over it, and held it there, hard, and his shoulder under her palm went up and down twice, and then steadied." }
        ] },
        { t: "He heard that. I think he heard all of it.", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "You don't know that." },
          { s: 'solar', f: 'neutral', t: "No. I think it anyway." },
          { n: "Ken nodded. He seemed to decide to think it too." }
        ] },
        { t: "(Stay quiet. It's his.)", notes: 3, then: [
          { n: "Solar stayed by the door and didn't say anything. This one was his. She'd come to be someone who knew, and she knew, and that was the whole job, and she did it, standing very still in the gray snow-light with her hands in her coat pockets, until Ken was ready to stand up." }
        ] }
      ] },
      { cg: 'link-ken-r10' },
      { n: "Outside, on the hospital steps, the snow was falling properly now, big slow flakes coming down through the cold like something being unpacked. Ken stood at the top of the steps with his backpack on and his breath going up white, and then he took off one glove and dug in his coat pocket and held something out to her." },
      { n: "It was the strap. The little red bird's head with the visor, the paint worn off the beak, on its short frayed cord." },
      { s: 'ken', f: 'neutral', t: "It's for you. It's Red's. It's for protecting people." },
      { s: 'ken', f: 'serious', t: "I don't need it anymore. I know how to do it myself now. I want you to have it in case you go somewhere where you need it." },
      { s: 'ken', f: 'neutral', t: "When I'm older I want to be someone like you, Solar-san. Someone who notices when your back foot turns in." },
      { cg: null },
      { choose: [
        { t: "Be someone like you, Ken. You're already very good at it.", notes: 3, then: [
          { n: "Ken looked at her, and then at the snow, and his ears went red, all the way, and stayed that way." },
          { s: 'ken', f: 'happy', t: "...That's what a big sister would say." },
          { s: 'solar', f: 'happy', t: "Yeah. It is." }
        ] },
        { t: "(Take the strap and put it on your phone right now.)", notes: 3, then: [
          { n: "She took it, and took out her phone, and threaded the frayed cord through the little loop at the corner with fingers that were stupid with cold, while Ken watched with total concentration and told her she was doing it wrong, and then that she was doing it right, and then that it looked good there. It did. It looked like it had always been there." }
        ] },
        { t: "You're going to be taller than me someday.", notes: 2, then: [
          { s: 'ken', f: 'serious', t: "Obviously. I'm already two centimeters closer." },
          { s: 'ken', f: 'happy', t: "...Three. I didn't tell you about the third one." }
        ] }
      ] },
      { n: "They walked down the steps together into the snow. At the bottom Ken stopped, and turned, and bowed to her, from the waist, a real bow, the way he'd bowed on the playground in the heat with a pole twice his height and his shirt soaked through. Then he straightened up and took the fold of her sleeve between his fingers, the way he did, and they walked to the monorail like that, through the falling snow, not talking, a boy and his senpai, which was not the same as a brother and sister, and was, she decided, close enough that no one passing them on the street could have told the difference, and close enough that she couldn't either." }
    ] }
  ],
  afterMax: [
    { place: 'Naganaki Shrine · Playground', time: 'Daytime', scene: [
      { n: "The snow had stuck overnight, really stuck, ankle-deep across the whole playground, and the swings had little white caps on their seats and the slide was a smooth white ramp and the camphor tree was holding snow along every branch like something it had been asked to keep safe. Nobody had walked on any of it yet. Ken was standing at the edge of it in his coat and a scarf someone had wound around him three times, looking at the untouched white with the expression of a boy facing a moral dilemma." },
      { s: 'ken', f: 'serious', t: "I was going to practice. But if I practice, I'll ruin it." },
      { s: 'koromaru', f: 'happy', t: "Woof!" },
      { n: "Koromaru did not have a moral dilemma. Koromaru went straight into the middle of it like a dropped stone, and rolled, and came up white to the ears, and sneezed, and did it again." },
      { choose: [
        { t: "(Throw a snowball at Ken.)", notes: 3, then: [
          { n: "She threw it. It hit him in the shoulder with a soft, ridiculous sound, and he looked down at the white mark on his coat, and then up at her, with an expression of the most profound betrayal, and then he bent down, very slowly, and scooped up a double handful, and his face changed, and for the next twenty minutes he was not almost a sixth grader or the youngest of anything or someone who had to be ready. He was ten, and it was snowing, and he had terrible aim, and he was laughing so hard he had to sit down in it." }
        ] },
        { t: "We could build something instead.", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "Build what?" },
          { s: 'solar', f: 'neutral', t: "Red. Arms out." },
          { n: "Ken considered the engineering problem of a snowman with its arms out with great seriousness, for about four seconds, and then started rolling the base, fast, before she could change her mind." }
        ] },
        { t: "Go practice. I'll keep the snow company.", notes: 1, then: [
          { n: "Ken looked at the snow, and at the pole, and at Koromaru rolling in the snow, and put the pole down against the bench, and said he'd practice later, and walked into the white, carefully, in a straight line, leaving the first footprints, and looked back at them, pleased." }
        ] }
      ] },
      { n: "Afterward they sat on the shrine steps with snow melting into the seats of their pants and their hands red and stinging, and Ken bought two cans of hot cocoa from the vending machine at the bottom, counting his coins twice, and gave hers to her with both hands. Koromaru lay across both their feet like a wet rug. The snow came down again, lightly, on top of the snow." },
      { s: 'ken', f: 'happy', t: "I won." },
      { s: 'solar', f: 'happy', t: "You hit me twice. I hit you nineteen times." },
      { s: 'ken', f: 'happy', t: "Koromaru says I won." },
      { n: "Koromaru, consulted, thumped his tail once on her shoe, which she had to admit settled it." }
    ] },
    { place: 'Iwatodai Dorm · Lounge', time: 'Daytime', scene: [
      { n: "Seven-thirty on a Sunday. The dorm was asleep, all of it, every room, even the ones with three people in them now, and the lounge was dim and cold, with the gray winter light coming through the front windows and lying on the floor like something spilled. The television was on with the volume on three." },
      { n: "Ken was on the right side of the couch with a blanket around his shoulders. Solar was on the left with the other half of it. On the screen, five people in colored suits were standing on a cliff in a high wind, and the red one was in the middle, with his arms out, and Ken was mouthing the words along with him without knowing he was doing it." },
      { s: 'ken', f: 'neutral', t: "This is the last episode. Of the season. Red loses his powers in this one and goes back anyway." },
      { s: 'ken', f: 'happy', t: "He always comes back in the last episode. Even when you think he won't. That's the rule." },
      { n: "They watched it. Red lost his powers and went back anyway. The yellow one thought before she jumped, and then jumped. There was a robot, and an explosion, and a long slow shot of the five of them walking away into a sunset that was obviously painted, and Ken let out a breath at the end that he seemed to have been holding since the opening credits." },
      { s: 'ken', f: 'neutral', t: "Solar-san. If you go somewhere. Wherever. I'll still watch on Sundays." },
      { s: 'ken', f: 'neutral', t: "Seven-thirty. You could watch too, wherever you are, if they have it. Or something like it. Then it would be like we're on the same couch. Even if we aren't." },
      { choose: [
        { t: "Seven-thirty. Volume on three.", notes: 3, then: [
          { s: 'ken', f: 'happy', t: "Volume on three. That's very important. Otherwise you wake people up." },
          { n: "He said it with great seriousness, like an instruction he was making sure she'd memorized, and then pulled his half of the blanket a little tighter and leaned, very slightly, until his shoulder was against her arm." }
        ] },
        { t: "I'll sit on the left. The right's your side.", notes: 3, then: [
          { n: "Ken looked at her, and his face did something it hadn't done much in the time she'd known him, which was nothing at all, no bracing, no politeness, no checking. Just a boy on a couch on a Sunday." },
          { s: 'ken', f: 'happy', t: "...You remembered." }
        ] },
        { t: "Wherever I am, I'll find a TV.", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "They might not have Featherman there." },
          { s: 'solar', f: 'neutral', t: "Then I'll find something red." },
          { n: "He thought about it, and decided that was acceptable, and said so." }
        ] }
      ] },
      { n: "The next-episode preview came on, for a season that wouldn't start until spring, and Ken watched every second of it, and then turned the television off, and the lounge was quiet. Somewhere upstairs, someone's alarm went off and was hit. The radiator ticked. Ken didn't get up. Solar didn't either. They sat under the one blanket in the cold gray light with the black screen in front of them reflecting the two of them back, small and side by side, a boy and his senpai on a Sunday, and stayed there, by mutual and unspoken agreement, until somebody came down and asked what they were doing, and they both said, at exactly the same time, nothing." }
    ] }
  ]
});
