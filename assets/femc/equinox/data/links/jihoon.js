/* Persona 3: Equinox · Park Jihoon · Hunger. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1–2 (rank 1 from 4/13, rank 2 from 4/21, both Game Panic; rank 2 ends at the photo booth and branches on
   eqx-tanabe and eqx-jihoon-plush). Ranks 3–15 still to write. Rank 2 flag (nothing reads it yet): eqx-jihoon-booth-kiss.
   Shape: the stub fields from assets/femc/equinox/data/links.js (this file wins over the stub, core.js indexLinks).
   Flag: eqx-jihoon-plush (rank 1, Solar keeps the prize from the crane game). Nothing reads it yet.
   HOAX canon carries (the triangle stays open, his habits named and never shown). Solstice's ranks are shared memory. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'jihoon', name: 'Park Jihoon', short: 'Jihoon', arcana: 'Hunger', numeral: '', from: 'Hoax', kind: 'searcher',
  world: 'H', romance: 'canon', maxRank: 15, starts: '4/8', lodging: 'guesthouse',
  home: { area: 'mall', spot: 'Game Panic', slot: 'after', days: [0, 1, 3, 5, 6],
          hint: 'After school and on days off, at Game Panic, losing to a crane game on purpose. Not on purpose.' },
  ranks: [
    { after: '4/13', title: '1: free prize', place: 'Paulownia Mall · Game Panic', time: 'After School', music: 'city', scene: [
      { bg: 'gamepanic-inside' },
      { n: "Game Panic at four in the afternoon was the same as it had been every afternoon of the last year, which was its own small miracle: the carpet that smelled like a warm battery, the rhythm game in the corner screaming at nobody, two middle-schoolers in the fighting-game booth hissing at each other in a dialect of pure contempt, and every machine in the place flashing its attract mode into the dim like a crowd of people all trying to catch your eye at once." },
      { n: "Park Jihoon was at the crane game by the door, with his forehead against the glass." },
      { n: "Not leaning. Resting. The whole weight of his head on the machine, his eyes shut, one hand still on the joystick, like a man who had prayed at an altar for a long time and been told no and was now just having a little lie down on it." },
      { n: "Inside the machine, in a pile of cheap plush, lay a big white fluffy dog with a pink felt tongue. It looked, if you squinted and loved somebody very much, a little bit like Nana." },
      { s: 'jihoon', f: 'neutral', t: "Don't. Don't say it. I know how it looks." },
      { s: 'jihoon', f: 'sad', t: "Four thousand eight hundred yen. That's how it looks. That's my son in there and they want four thousand eight hundred yen for him and they still won't give him to me." },
      { choose: [
        { t: "That's not your son. Your son is a Samoyed and he's at home.", notes: 2, then: [
          { s: 'jihoon', f: 'serious', t: "Spiritually it's my son. In this town, it's the closest thing to my son. You'd crawl into that machine for him and you know it." },
          { n: "She didn't say anything. She would, a little. He saw her not say it and looked enormously vindicated." }
        ] },
        { t: "(Put a hundred-yen coin in the slot.)", notes: 3, then: [
          { n: "She put a coin in. The machine played its little fanfare, delighted to be paid again. Jihoon lifted his head off the glass and looked at her as if she'd just walked into a burning building after him." },
          { s: 'jihoon', f: 'happy', t: "You came. You came *and you brought money*. That's fan behavior. That's real fan behavior. I'm touched. Move over. I'm driving." }
        ] },
        { t: "How many times have you tried?", notes: 2, then: [
          { s: 'jihoon', f: 'neutral', t: "Forty-eight. It's not about the number. It's about the journey." },
          { s: 'jihoon', f: 'sad', t: "...The journey's been bad, Solar." }
        ] }
      ] },
      { n: "He drove. She stood beside him and watched the claw swing out over the pile, shivering on its wire, and settle, and drop, and close round the white dog's head with every appearance of commitment, and lift it two inches, and let it go, with the gentle regret of a claw that had never meant it." },
      { s: 'jihoon', f: 'serious', t: "See? *See?* It touched him. It had him. That machine has a cruel heart." },
      { s: 'jihoon', f: 'neutral', t: "Okay. Okay. Your turn. You've got the luck. You were born with the luck. I've watched you win things at festivals since we were four. It's disgusting." },
      { n: "He didn't move away from the joystick when she took it. He moved behind her. She felt it before she understood it: the warmth of him at her back, his chest an inch from her shoulders, his hand coming down over hers on the stick, his chin by her ear. The glass in front of them gave it all back to her, dim, overlaid on the pile of plush: the two of them in the reflection, standing like that, his face beside hers, watching her, not the claw." },
      { s: 'jihoon', f: 'neutral', t: "Left. Little more. Little more. Stop. No, that's a lie, keep going. There." },
      { choose: [
        { t: "(Let him steer.)", notes: 3, then: [
          { n: "She let him. His hand moved hers on the stick, a nudge at a time, and his breath went in and out by her ear, slow, much slower than his voice, which was still going, *left, there, no, there*, as if the voice were one person and the rest of him was another one who had come to the arcade for a completely different reason." }
        ] },
        { t: "I know how to work a crane game, Jihoon.", notes: 2, then: [
          { s: 'jihoon', f: 'happy', t: "I know you do. I taught you. At the old mall. The one with the broken stool. You were six." },
          { n: "He didn't move his hand. He didn't move at all. She could feel him not moving, carefully, all down her back." }
        ] },
        { t: "(Lean back against him. Just a little.)", notes: 3, then: [
          { n: "She leaned back. An inch. Enough that her shoulder blades met his chest and stayed there, and she felt him stop breathing for a full second against her back, and then start again, deliberately, like a man reminding himself how." },
          { s: 'jihoon', f: 'neutral', t: "...That's cheating. You're cheating. I'm going to lose and it's going to be your fault and I'll love it." }
        ] }
      ] },
      { n: "The claw dropped. It closed. It lifted the white dog by one ear clear off the pile, swinging, swinging, all the way across to the chute, and at the very lip of it, so close she could see the stitching on its tongue, it opened its fingers, slowly, the way you'd let go of somebody's hand at a gate." },
      { n: "The dog fell back on the pile, face down. Jihoon made a sound like he'd been shot. He put his forehead back on the glass." },
      { s: 'jihoon', f: 'sad', t: "Forty-nine." },
      { place: 'Paulownia Mall · Game Panic', time: 'After School', bg: 'gamepanic-inside', soft: true },
      { n: "They sat on the step of the dance machine afterward, the one nobody had danced on since February, with two cans from the vending machine. He had his elbows on his knees and the can hanging from two fingers between them, the way he'd held the ice cream tub on the dorm steps a year ago, the night she didn't know him, and the arcade flashed red and blue across his face and made him look younger, or tireder, she couldn't decide." },
      { s: 'jihoon', f: 'neutral', t: "Every day since the red. I've been counting. On my hand, under the table, like a kid." },
      { s: 'solar', f: 'neutral', t: "Counting what?" },
      { s: 'jihoon', f: 'neutral', t: "Days since the last one. You know what. Don't make me say it in an arcade. It's a family establishment." },
      { n: "She knew what. At home, the other home, the one with Hanlim and the forum and the hearing, he'd gone back to old habits after the note and the recording, the way water goes back down the hill it came up. Everyone knew. Nobody said. She'd said, once, and he'd laughed at her in a way she still thought about." },
      { s: 'jihoon', f: 'neutral', t: "Not on purpose. I'm not being brave or whatever. There's just nothing here. No guy. Nobody who knows a guy. Nobody who's heard of anybody who knows a guy. I looked. Don't make that face. I looked the way you look for a vending machine in a new building." },
      { s: 'jihoon', f: 'neutral', t: "And nobody's watching. That's the other thing. No forum. No anonymous account with my name spelled wrong. Nobody at the guesthouse knows about the note. Cherry knows and she won't. Your boyfriend knows and he's too polite to." },
      { s: 'jihoon', f: 'happy', t: "It's great. It's like being dead, but there's ramen." },
      { n: "He said it as a joke. He was good at jokes. It landed wrong anyway, on the dirty arcade carpet between their feet, and lay there, and neither of them picked it up." },
      { choose: [
        { t: "Don't say that.", notes: 3, then: [
          { s: 'jihoon', f: 'neutral', t: "Why? It's funny. It's a good line. I'm the almighty Hoon. I don't do sincere." },
          { s: 'solar', f: 'serious', t: "Jihoon." },
          { s: 'jihoon', f: 'sad', t: "...Okay. I won't say it. I'll think it very quietly. You won't even know." }
        ] },
        { t: "Every day's good. I'm glad.", notes: 3, then: [
          { s: 'jihoon', f: 'surprised', t: "..." },
          { s: 'jihoon', f: 'neutral', t: "Wow. Look at you. Glad. In public. Write it down, someone, write it down, Solar Kim said she was glad about me in a Japanese arcade." },
          { n: "But he looked at the can in his hand for a long time after he said it, and turned it round twice, and didn't drink from it." }
        ] },
        { t: "(Take the can out of his fingers. Drink from it. Give it back.)", notes: 2, then: [
          { n: "She took the can out of his fingers and drank from it and gave it back. He looked at the can, and at her, and at the place on the rim where her mouth had been, and then drank from exactly that place, very deliberately, holding her eye the whole time, like a man making a point at a dinner party." },
          { s: 'jihoon', f: 'happy', t: "Indirect. Everybody saw. That's a scandal. Junpei's going to need a whole new page." }
        ] }
      ] },
      { s: 'jihoon', f: 'neutral', t: "The thing is, I could live here. That's the bit I don't say. Nobody here's watching me fall. I could fall all I like. Nobody'd film it. Nobody'd post it with a sad song on it." },
      { s: 'jihoon', f: 'serious', t: "...That's not a good thing to want. I know that. I'm not stupid. I'm only stupid about you, and crane games." },
      { n: "He looked over at her then, the arcade light going red and blue over his face, and the bit went out of it, all at once, the way it had in the lounge at two in the morning on the seventh, like a light switched off in a window. What was under it was a boy who'd grown up beside her, who'd had her for about five minutes once, after a homecoming, and had been paying for it ever since, and had come anyway." },
      { n: "He leaned in. Not much. Enough that she could count his eyelashes in the light from the rhythm game. Enough that it was a decision. He looked at her mouth, once." },
      { choose: [
        { t: "(Meet him halfway.)", notes: 3, then: [
          { n: "She leaned in too. For a second there was no space between them at all, only his breath, and the smell of the vending-machine soda on it, and the rhythm game screaming PERFECT! PERFECT! at nobody in the corner, and his hand coming up to her jaw, light, the way you'd touch something in a shop you'd been told not to." },
          { n: "He stopped. A centimeter off. She felt him stop, the whole effort of it, in his fingers on her jaw." },
          { s: 'jihoon', f: 'sad', t: "...Not here. Not in an arcade. Not the first time in a new world. I've got *some* class. Not a lot. Some." },
          { s: 'jihoon', f: 'neutral', t: "Ask me again somewhere with better lighting." }
        ] },
        { t: "(Turn your face. Put your forehead on his shoulder instead.)", notes: 3, then: [
          { n: "She turned her face at the last second and put her forehead on his shoulder instead, and stayed there. He froze. Then he laughed, very quietly, into her hair, and put his hand on the back of her head the way you'd put a hand on a dog that had come to you in the rain." },
          { s: 'jihoon', f: 'neutral', t: "Yeah. Okay. Coward. Me too. We're both cowards. Perfect couple. Don't tell your boyfriend I said couple." }
        ] },
        { t: "Jihoon. Jungwon's at the guesthouse.", notes: 2, then: [
          { s: 'jihoon', f: 'neutral', t: "I know where he is. He's at the guesthouse counting forks. I know exactly where everybody is. That's the whole problem with me." },
          { n: "He sat back. He didn't look hurt. He looked like a man who'd heard the answer he'd heard every time, and had come anyway, and would come again, and he smiled at her, crooked, and finished the can." }
        ] }
      ] },
      { n: "They got up. The arcade was emptying, the middle-schoolers gone, the attendant pushing a mop round the far end with the slowness of a man paid by the hour. On the way to the door Jihoon put his hand flat on the crane machine's glass as they passed, like you'd touch a gravestone, and said goodbye to his son." },
      { n: "Behind them, the machine played its fanfare." },
      { n: "They both turned round. Nobody was at it. The attendant was at the far end with the mop. The coin slot was dark. And in the glass box, the claw was moving, on its own, out over the pile, smoothly, with none of the shiver it had had all afternoon, as if it had always known exactly where it was going and had only been waiting until nobody was holding the stick." },
      { n: "It dropped. It closed. It lifted something small and white, not the dog, from somewhere at the very back of the pile where neither of them had seen anything, and carried it across without a wobble, and let it go over the chute. It fell with a soft thump into the prize door." },
      { s: 'jihoon', f: 'surprised', t: "...Did you see that? Tell me you saw that." },
      { s: 'jihoon', f: 'happy', t: "It likes me. Finally. Fifty tries and it caves when I'm walking away. That's every relationship I've ever had." },
      { n: "He crouched and put his hand in the flap and came out with it. A little plush the size of a fist. Round and white, soft as a cheek, with a stitched smile and two stitched eyes closed in contentment. A rice cake. A plush rice cake, the cute kind they put on keyrings, with a little paper tag on a string that said nothing at all." },
      { n: "He put it in her hand. It was soft, and very slightly warm, as if it had been sitting somewhere warm a long time, and when she rubbed her thumb across its face a fine pale dust came away on her skin. Powdery. Like it had been kept in a bag of flour." },
      { s: 'jihoon', f: 'happy', t: "Present. From the almighty. Don't say I never gave you anything." },
      { choose: [
        { t: "(Keep it. Put it in your bag.)", notes: 3, flag: 'eqx-jihoon-plush', then: [
          { n: "She put it in her bag. He watched her do it with enormous satisfaction. Later, at the dorm, she found the white dust had gone through the lining onto her textbook, a little pale smudge in the shape of a thumb, and it wouldn't brush off, and she couldn't have said why she didn't throw it out." }
        ] },
        { t: "(Give it back to him.)", notes: 2, then: [
          { s: 'jihoon', f: 'neutral', t: "No. It's yours. I've got rules. When a machine gives you a gift you pass it on. It's the circle of life." },
          { n: "But he took it anyway, when she held it out, and put it in his jacket pocket, and kept his hand in there round it the whole way to the station, as if it might get cold." }
        ] },
        { t: "(Put it back in the prize flap and walk away.)", notes: 2, then: [
          { n: "She put it back through the flap. It sat in the chute behind the little plastic door, round and white and smiling with its eyes shut, and Jihoon stared at her as if she'd kicked a puppy." },
          { s: 'jihoon', f: 'serious', t: "That was a *free prize*. What's wrong with you. You don't put back free prizes. It's bad luck." },
          { n: "At the door she looked back once. The flap was empty." }
        ] }
      ] },
      { n: "He walked her to the monorail. He talked the whole way, about Cherry stealing his fries and Mr. Tanabe at the guesthouse giving him extra rice and the Hate Club, who weren't here, who he would never admit to missing, who he missed so loudly she could hear it in every sentence that wasn't about them. At the gates he stopped, and put his hands in his pockets, and rocked on his heels." },
      { s: 'jihoon', f: 'neutral', t: "Wednesday. I'll be there. Losing. You should come watch. It's very moving. People weep." },
      { n: "He grinned at her, the slow party grin, and turned, and walked off toward the guesthouse whistling something off-key, and didn't look back until the corner, where he did, the way he always did, every time, in every world, as if checking she was still where he'd left her." }
    ] },
    { after: '4/21', title: '2: better lighting', place: 'Paulownia Mall · Game Panic', time: 'After School', music: 'city', scene: [
      { bg: 'gamepanic-inside' },
      { n: "Game Panic at four was the same as Game Panic at any hour, which was to say it was the inside of a pinball machine with a carpet, every cabinet shouting at once and the light coming off the screens in colors that didn't exist outside, and she found him by the crane game, of course, in the same spot, with the same posture, both hands on the cabinet's glass and his forehead nearly on it, like a man at an aquarium trying to reason with a shark." },
      { n: "The white dog was still in there. It had moved. It was nearer the chute now by maybe a hand's width, tipped over on its side with its paws in the air, looking, if anything, smug." },
      { s: 'jihoon', f: 'neutral', t: "Hundred and twelve. Don't talk to me. I'm in a relationship with this machine and it's at a delicate stage." },
      { choose: [
        { t: "(Feed it a coin for him.)", notes: 3, then: [
          { n: "She put a coin in without asking. He looked at the coin slot, and at her, and at the coin slot again, with the expression of a man watching someone else pay for his drinks at his own birthday." },
          { s: 'jihoon', f: 'happy', t: "Oh, you're *invested* now. Okay. Okay. Pressure. I love pressure. Pressure's the only thing I'm good at." }
        ] },
        { t: "A hundred and twelve tries. You could have bought a real dog.", notes: 2, then: [
          { s: 'jihoon', f: 'serious', t: "I *have* a real dog. He's in another world. This is his representative. Show some respect." }
        ] },
        { t: "(Stand behind him the way he stood behind you.)", notes: 3, then: [
          { n: "She came up behind him and put her hands on the cabinet on either side of his, not touching him, just there, so that he was inside the shape of her arms, and he went very still with his hand on the joystick, and the claw hung over the dog, swaying a little." },
          { s: 'jihoon', f: 'neutral', t: "...Oh, that's a dirty trick. That's my trick. You can't use my trick on me, I'm the one who invented it." }
        ] }
      ] },
      { n: "He moved the claw. Left, forward, a hair back, and she watched his face while he did it, and his face did the thing it only did here, at a crane game or a pool table or a dart board, the thing she'd seen at the old mall when she was six and it was the only place on earth he'd ever been quiet: his whole self in his eyes and his hands, nothing left over for being anybody." },
      { n: "The claw came down. It took the white dog round the middle, and lifted, and the dog came up, and swung, and hung there over the chute with its paws in the air, and the claw opened the way it always did, a fraction too early, the cheat built into the machine, and the dog dropped." },
      { n: "Into the chute. Bounced once off the edge of the hole and went in." },
      { n: "He didn't move. He stood with his hand still on the joystick and stared at the empty place in the pile where the dog had been. Then he crouched, slowly, like a much older man, and put his hand through the little flap, and brought it out holding the dog, and looked at it." },
      { s: 'jihoon', f: 'surprised', t: "...Hundred and thirteen." },
      { s: 'jihoon', f: 'happy-2', t: "HUNDRED AND THIRTEEN! Sol! SOL! Look at my son! He's home!" },
      { n: "He held it up over his head with both hands like a cup at a final. Two boys at the drum game looked round. He didn't care. He turned in a full circle with it, and then put it under his chin, against his throat, the way you'd hold a puppy, and his eyes were wet, and he would deny it until he died, and she would let him." },
      { choose: [
        { t: "Congratulations. It looks just like him.", notes: 3, then: [
          { s: 'jihoon', f: 'happy', t: "It looks *exactly* like him. Look at the face. That's a face that's never done anything wrong in its life. That's Nana's whole face." },
          { s: 'jihoon', f: 'sad', t: "...He's going to be so mad at me. I left without saying bye. I always say bye to him. I say bye to him when I go to the bathroom." }
        ] },
        { t: "(Clap. Slowly. Like the end of a film.)", notes: 2, then: [
          { n: "She clapped, slow and solemn, and he bowed to her, to the drum game boys, to the claw, deeply, from the waist, and the drum game boys, for some reason, clapped too." }
        ] }
      ] },
      { ifFlag: 'eqx-jihoon-plush', then: [
        { s: 'jihoon', f: 'neutral', t: "You still got the other one? The rice cake?" },
        { s: 'solar', f: 'neutral', t: "In my bag." },
        { s: 'jihoon', f: 'neutral', t: "Huh. Does it still do the dust thing? Cherry says I'm imagining it. Cherry says it was a dirty claw machine and I should wash my hands." },
        { n: "She didn't tell him the dust had gone through two textbooks now, and that it came up fresh on her fingers every time she touched the thing, as if it had been put back in the flour overnight." }
      ] },

      { n: "They sat on the bench outside after, in the mall's long glass afternoon, with the dog between them and two cans of something orange and a bag of the fried things from the stand by the fountain that he'd paid for with the last of his coins. He ate like he always ate, fast and talking. She watched his hands." },
      { ifEvent: 'eqx-tanabe', then: [
        { n: "He had his hoodie on, the gray one, though it was warm, and every so often he put his hand in the front pocket and left it there for a second, round something, and took it out again." },
        { n: "She knew what it was. Everyone at the guesthouse knew. They didn't say. A rice ball in cling film, days old now, gone hard as a stone and gray at the edges, that he'd taken off the shelf under the lobby counter on Thursday morning and put in his pocket and not taken out since." },
        { s: 'jihoon', f: 'neutral', t: "Don't. I know. It's disgusting. Cherry's already done the speech. Jungwon did a quieter one, which was worse." },
        { s: 'jihoon', f: 'sad', t: "He made one every night at eight. For two weeks. For me. Not for the others. He didn't ask why I was there or what I'd done or if I was okay. He just put it on the counter like it was my mail." },
        { s: 'jihoon', f: 'sad', t: "...Nobody's ever done that. At home. Not my dad, not anybody. I'm the guy people hide the good stuff from." },
        { choose: [
          { t: "Keep it as long as you need.", notes: 3, then: [
            { s: 'jihoon', f: 'neutral', t: "Yeah? That's not the speech." },
            { s: 'solar', f: 'neutral', t: "I don't have a speech." },
            { n: "He looked at her, and then down at his pocket, and put his hand back in it, round the hard little thing in its wrapping, and left it there this time, and she saw his shoulders come down." }
          ] },
          { t: "Give it to me. I'll put it somewhere good.", notes: 2, then: [
            { s: 'jihoon', f: 'serious', t: "Where's somewhere good. Name me one good place in this town." },
            { s: 'solar', f: 'neutral', t: "The shrine. The little shelf where people leave things." },
            { n: "He thought about it for a long time. Then he took it out and looked at it in his palm, the gray rice in the creased cling film, and didn't give it to her. He put it back. But he said *the shrine* under his breath, once, like a man memorizing an address." }
          ] },
          { t: "(Say nothing. Put your hand on his arm.)", notes: 3, then: [
            { n: "She put her hand on his arm, just above the wrist, over the sleeve, and left it there. He didn't look at it. He went on eating fried things one-handed and talking about the dog, and his arm under her hand was perfectly still the whole time, the way you keep still when a bird lands on you." }
          ] }
        ] }
      ], else: [
        { s: 'jihoon', f: 'neutral', t: "Guy at the guesthouse makes me a rice ball. Every night. At eight. The night manager. Old guy, gray jacket, does the crossword in pencil." },
        { s: 'jihoon', f: 'neutral', t: "He doesn't ask me anything. Doesn't ask where I'm from, why I'm up, if I'm okay. He just puts it on the counter like it's my mail. Salted salmon. The good seaweed, the crispy kind, in the separate wrapper so it doesn't go soft." },
        { s: 'jihoon', f: 'happy', t: "I bow at him. Like a grandson. Like, the full bow. Jungwon thinks it's hilarious. Jungwon's been doing it too now, which ruins it." },
        { s: 'jihoon', f: 'sad', t: "...Nobody does that at home. Feeds me without a reason. I'm the guy people hide the good stuff from." }
      ] },
      { n: "He crumpled the empty bag and threw it at the bin and missed and went and put it in by hand, and sat down again closer than before." },
      { s: 'jihoon', f: 'neutral', t: "Every day since the red, by the way. Clean. Cherry's counting, to the day. Cherry counts in the shower, she told me, like that's a normal thing for a person to say." },
      { s: 'jihoon', f: 'neutral', t: "I'm not trying. That's the weird part. At home I'm always *trying*. Here I just don't, and then it's a day, and then it's another day." },
      { s: 'jihoon', f: 'serious', t: "...There's a pharmacy on the strip. Little one. The old lady behind the counter doesn't look up from her TV. I walked past it twice on Tuesday. Didn't go in. Just walked past it. Twice." },
      { s: 'jihoon', f: 'neutral', t: "And I thought, nobody here would ever know. If I did. Nobody's watching. No forum. No dad. No council. I could fall flat on my face in the middle of Paulownia Mall and the only person who'd write it down is Jungwon, in his little book, and he'd use a code." },
      { s: 'jihoon', f: 'serious', t: "I could fall all I like here. That's what I keep thinking. That's the nicest thing anybody's ever said to me and it's a building saying it." },
      { choose: [
        { t: "I'd know.", notes: 3, then: [
          { n: "He went still. Not his usual still, the poised one. The other kind." },
          { s: 'jihoon', f: 'neutral', t: "...Yeah. You would." },
          { s: 'jihoon', f: 'happy', t: "Ugh. That's so annoying. That's the most annoying thing you could've said. You've ruined the whole fantasy. Thanks." },
          { n: "He said thanks like he meant it, and looked away fast, and kicked the bench leg, and didn't walk past the pharmacy that night. She knew because Cherry texted her at eleven: *he came straight home. what did you say to him.*" }
        ] },
        { t: "You walked past it. Twice. That's the part I heard.", notes: 3, then: [
          { s: 'jihoon', f: 'surprised', t: "...Oh. Huh." },
          { s: 'jihoon', f: 'neutral', t: "That's a very Jungwon way of hearing it. Has he been teaching you? Is there a manual?" },
          { n: "But he was smiling, a little, at the floor, and he put his hand on the dog's head between them and rubbed one of its ears between his finger and thumb, the way you'd do to a real one." }
        ] },
        { t: "Do you want me to walk the strip with you? So you don't have to do it alone.", notes: 2, then: [
          { s: 'jihoon', f: 'neutral', t: "No. Yes. No." },
          { s: 'jihoon', f: 'serious', t: "Not because I'd go in. Because then it'd be a thing. Because then I'd be the guy who needs walking past a pharmacy. I'd rather be the guy who did it twice and lived." },
          { s: 'jihoon', f: 'happy', t: "But ask me again next week. Maybe I'll be a worse guy by then." }
        ] }
      ] },

      { n: "He stood up. He tucked the dog into the front of his jacket with its head poking out at the zip, which made him look like a kangaroo with a past, and held out his hand to pull her up, and when she took it he didn't let go." },
      { s: 'jihoon', f: 'neutral', t: "Come on. I made a promise. I keep, like, a third of my promises. This one's in the third." },
      { s: 'solar', f: 'neutral', t: "What promise?" },
      { s: 'jihoon', f: 'happy', t: "Better lighting." },

      { place: 'Paulownia Mall · Photo Booth', time: 'After School', bg: 'paulownia-photo-booth', soft: true },
      { n: "The photo booth was at the far end of the arcade by the ticket counter, pink and white and plastered with stickers of girls making peace signs, with a curtain that only went most of the way across. He held it open for her with a bow. Inside it was the size of a phone box, with a little bench and a screen and a ring light that came on as they sat down and filled the whole box with a hard, flattering white, the kind of light that took ten years and every mistake off your face." },
      { s: 'jihoon', f: 'happy-2', t: "See? Better lighting. Look at us. We look like we've never done anything." },
      { n: "He fed it coins. The screen asked them to pick a frame and he picked the worst one, cartoon bunnies, without consulting her, and the countdown began, a cheerful recorded voice in Japanese counting down from three, and he put his arm round her shoulders for the first one like a dad at a graduation, and stuck his tongue out for the second, and the light flashed, and flashed." },
      { s: 'jihoon', f: 'neutral', t: "...Two more." },
      { n: "He'd stopped joking. The voice counted. He was looking at her, not at the screen, in the hard white light, from about four inches away, the way he'd looked at her in the arcade on the thirteenth with his hand over hers on the joystick and said *not here*." },
      { s: 'jihoon', f: 'neutral', t: "You can ask me now. If you want. I said ask me again somewhere with better lighting. This is the best lighting in the building. I checked." },
      { s: 'jihoon', f: 'serious', t: "...Your boyfriend's back at the guesthouse eating my egg sandwiches, by the way. I'm not forgetting that. I'm just saying the light's good." },
      { choose: [
        { t: "(Kiss him in the flash.)", notes: 3, flag: 'eqx-jihoon-booth-kiss', then: [
          { n: "She kissed him on *two*. He'd been ready for *one*, and it threw him, and he made a startled sound against her mouth, and then his hand came up to the back of her neck, under her hair, and he kissed her back slow and deliberate, like a man who'd been told the clock was running and decided to ignore it on principle." },
          { n: "The light flashed. Neither of them noticed. The voice said something cheerful about the last picture. He didn't stop for that one either." },
          { n: "When he pulled back he was pink to the ears in the white light, and grinning, the real one, not the party one, and he pointed at her." },
          { s: 'jihoon', f: 'happy', t: "*You* kissed *me*. Note that. For the record. I'm the victim here. I came in here for bunnies." }
        ] },
        { t: "(Put your forehead against his. Not the kiss. Not yet.)", notes: 3, then: [
          { n: "She leaned in and put her forehead against his, and held it there, and didn't go the last inch. He let out a breath that shook a little. The light flashed. He didn't move. The voice counted down the last one, and the light flashed again, and they were still like that, foreheads together, eyes shut, in the best lighting in the building." },
          { s: 'jihoon', f: 'neutral', t: "...Okay. Okay. That's fair. That's actually worse. I'm going to be thinking about that for a week." }
        ] },
        { t: "Not here either. Ask me somewhere with worse lighting.", notes: 2, then: [
          { s: 'jihoon', f: 'surprised', t: "...*Worse* lighting." },
          { s: 'jihoon', f: 'happy', t: "Oh, you're good. Oh, I hate you. Okay. Worse lighting. I'll find the worst-lit place in this whole town. I'll find a cupboard." },
          { n: "The light flashed on him laughing with his head back against the booth wall, and on her watching him do it." }
        ] }
      ] },
      { n: "The strip came out of the slot warm, still smelling of the chemical, four frames in a column with the bunnies round the edges. He held it up between them in the arcade light." },
      { n: "One: his arm round her, both of them grinning like idiots. Two: his tongue out, her laughing. Three: whatever had happened in three, which she'd remember." },
      { n: "Four." },
      { n: "In four the curtain behind them wasn't shut. It was drawn back a hand's width at the edge, where it didn't quite meet the wall, and in the gap there was the dark of the arcade, and in the dark, at about the height of a hand on a curtain, there was something white. A blur. The ring light had caught it at the very edge of the frame and washed it out to almost nothing, a pale smudge with four soft points to it, like the fingers of a glove." },
      // CG: eqx-booth-strip — a four-frame photo-booth strip with cartoon bunny borders held up in an arcade, a boy and a girl in the first three frames, and in the fourth, in the gap at the edge of the booth's curtain, a small washed-out white shape at hand height.
      { s: 'jihoon', f: 'neutral', t: "...Cleaner. They wear the white gloves. They go round wiping the screens." },
      { s: 'jihoon', f: 'neutral', t: "Must've been checking if it was free." },
      { n: "He said it easily. He said it like it was nothing, and it was probably nothing, and he tore the strip in half down the middle with great care along the perforation, and gave her the half with the first two, and kept the half with three and four, and put it in the inside pocket of his jacket, behind the dog." },
      { choose: [
        { t: "Give me the other half.", notes: 2, then: [
          { s: 'jihoon', f: 'neutral', t: "No. You've got the good ones. The tongue one is art." },
          { n: "He didn't give it to her. He walked her out of the arcade with his hand on the small of her back, and on the way past the ticket counter she looked for a cleaner, and there wasn't one, not in the arcade or on the escalator or anywhere on the whole second floor. Only the screens, all shouting, and every one of them smeared." }
        ] },
        { t: "(Look back at the booth.)", notes: 2, then: [
          { n: "She looked back. The curtain hung straight now, all the way across, and the little light inside had gone off, and there was nobody near it, and the screens on every cabinet in the arcade were greasy with fingerprints, the way they always were, the way they'd been all afternoon." }
        ] },
        { t: "(Keep your half. Say nothing.)", notes: 1, then: [
          { n: "She put her half in her pocket. She didn't say anything. Neither did he, for longer than he'd been quiet all afternoon." }
        ] }
      ] },
      { n: "He walked her to the monorail with the dog's head poking out of his jacket, and talked the whole way about what he'd name it, Nana Two, Nana Junior, Mr. Nana, and at the gates he stopped and put his hand flat on his jacket pocket, over the half of the strip, the way she'd seen him put it on the rice ball, and said goodbye to her in a voice that was almost serious." },
      { s: 'jihoon', f: 'neutral', t: "Thanks for coming. To watch me win. Nobody ever comes to watch me win. They only come when I lose." },
      { n: "At the corner he looked back, the way he always did, every time, in every world, to check she was still where he'd left her. She was. She stayed there until he'd gone, and then a while after." }
    ] }
  ]
});
