/* Persona 3: Equinox · Park Jihoon · Hunger. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: rank 1 only (from 4/13, Game Panic at Paulownia Mall, after school or a day off). Ranks 2–15 still to write.
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
    ] }
  ]
});
