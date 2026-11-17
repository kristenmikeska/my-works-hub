/* Persona 3: Equinox · Park Jihoon · Hunger. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1–8 (rank 1 from 4/13, rank 2 from 4/21, both Game Panic; rank 2 ends at the photo booth and branches on
   eqx-tanabe and eqx-jihoon-plush). Ranks 9–15 still to write.
   Rank 7 (after 11/1, '7: the shelf': Game Panic → Naganaki's side-hall offering shelf → the shrine steps): the crane is
   unplugged and restocked all white rice-cake plush, facing out (reads eqx-jihoon-plush); day 200 fell on 10/23 (branches
   dead.shinjiro: Shinjiro fed him once in June, "three people… all three of them dead"; else Junpei's capitals); reads
   ifChoice asks.jihoon (wrist). The Hate Club cameo: Junkyu's hundred-yen coin for the box; Asahi: "say one for the
   grandma at the bakery… he said yes to her" (hateclub rank 3's yes). The shelf has 22 things now; Tanabe's crossword is up there, folded by Jungwon (never said).
   A white paper fold appears at the end of the shelf. Sets eqx-jihoon-shelf (Tanabe's rice ball left on the shelf, on top
   of the fold or with the fold dropped in the incense burner, where it doesn't burn and then isn't there); else he keeps it.
   Jungwon stops outside his door every night after the chain. Reads eqx-door-hoax-3, eqx-seams (else station 73, 39 to go),
   the kiss flags (ifCount). He gives notice: next time he'll ask "what am I, here", in the right lighting.
   Rank 8 (after 12/3, '8: the right lighting': Game Panic (the crane taken away) → the dorm lounge → (ifEvent eqx-persimmon:
   the hill road) → Game Panic after closing → the photo booth): he visits Mrs. Kim (kim-mom) with Cherry's melon bread and
   barley tea; "Sit there. Where I can see you." / "Does your mother know where you are." / "I'll know, then." She sleeps
   sitting up; he doesn't touch her back; Mr. Kim, a mandarin, two pats. Reads dead.shinjiro (plate on the chair), dead.aigis
   (Hyein's white ribbon), eqx-jihoon-vest, ifChoice asks.jihoon. He helps the attendant close on Fridays (tokens, since June).
   A plain strip, his fist holding the curtain shut in frame four, nothing behind it. ROUTE CHOICE ({ route }): "You're the
   one I'm watching for." (romance: the booth in the dark, his room, waking at dawn; windowsill reads eqx-jihoon-shelf;
   Jungwon on the kitchen step with two cups of barley tea, one made twice, and an egg sandwich for Jihoon) / "You're Park
   Jihoon. My oldest friend…" (friend: a bunny strip of worst faces, mopping, "a lifetime contract"). In the romance dawn, a
   choice: kiss / "That's yours" (flag eqx-choose-jihoon, tally choose +1) / hidden-style "Stay. Please. Here, with me." (flag
   eqx-asked-jihoon, tally asked +1, cakes +1; should join story-act4.js ASKED, and eqx-choose-jihoon MINE, like round 2's).
   Rank 4 (after 6/30, '4: worse lighting': Game Panic → the dark photo booth in a mall blackout → the fountain): reads
   ifChoice asks.jihoon (yes: wrist bare, Cherry writes the number on her own arm, he went into the pharmacy alone "just to
   say hi"; choose: he writes it himself; no: a second tally "days since you said no"), ifBefore 7/15. Two soft knocks on the
   booth wall in the dark; the curtain open a hand's width after. Sets eqx-jihoon-dark-kiss (optional).
   Rank 5 (after 8/18, '5: a guy': Game Panic with the Hate Club → the service alley → his guesthouse room): reads
   eqx-three-breakfasts, ifChoice none. A gloved man says "Park Jihoon-ssi?" in Korean and leaves a paper fold on a bin
   ("You'll stay a while, won't you"); it's warm, fine flour. Sets eqx-jihoon-fold-opened (Solar opens it) and
   eqx-jihoon-room (she turns off the lamp; cut away; awake in the red, Cherry's one knock, out the kitchen at five past
   Jungwon's lit door).
   Rank 6 (after 10/7, '6: under the clock': Port Island Station concourse): branches ifEvent eqx-1023 (Mr. Kim stopped
   after the steps; Jihoon keeps the station list alone; + eqx-seams) else Mr. Kim present (kim-dad, "Does your mother
   know?"); reads ifChoice asks.jihoon. His ask lands: not "nobody watching me fall" but nobody watching *for* him (Mrs.
   Kim at the kitchen window). Sets eqx-floor-jihoon (always; his ask floor), eqx-jihoon-vest (Solar sees the navy vest
   under the far clock; only without eqx-seams), eqx-jihoon-watched (she watches him into the station drugstore). Rank 3 (from 6/1, Game Panic, the strip, the canal; branches on
   eqx-hate-club, eqx-last-grain, eqx-jihoon-roof) records his ask: tally asks.jihoon (+ cakes / choose), flag
   eqx-jihoon-canal-kiss. Rank 2 flag (nothing reads it yet): eqx-jihoon-booth-kiss.
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
    ] },
    { after: '6/1', title: '3: cough drops', place: 'Paulownia Mall · Game Panic', time: 'After School', music: 'city', scene: [
      { bg: 'gamepanic-inside' },
      { n: "He wasn't playing anything. That was how she knew something was wrong before she'd got past the ticket counter: Park Jihoon, in an arcade, with a pocket full of coins, sitting on the bench by the crane machines with his elbows on his knees and Nana Two's head poking out of the front of his jacket, not playing anything at all, watching other people lose." },
      { n: "He saw her and his face did the thing, the big easy grin he'd been wearing since he was six, the one that came on like a light in a fridge, and she watched it come on and watched it not quite reach, and he saw her watch it, and let it go." },
      { s: 'jihoon', f: 'neutral', t: "Hey. Don't sit down. We're going somewhere." },
      { s: 'solar', f: 'neutral', t: "Where?" },
      { s: 'jihoon', f: 'neutral', t: "Pharmacy. On the strip. I need cough drops." },
      { n: "He said it flatly, the way you'd say *I need to go to the dentist*. Then he pushed his left sleeve up a few inches with his thumb and turned the inside of his wrist toward her, the way you'd show someone a ticket." },
      { ifBefore: '7/15', then: [
        { n: "There was a number on it in blue ballpoint, small and neat, two digits, written that morning and already a little smudged at one edge where his watch strap had been. Under it, fainter, yesterday's, one less, half washed off. Under that, the ghost of the day before." }
      ], else: [
        { n: "There was a number on it in blue ballpoint, small and neat, three digits now, written that morning and already a little smudged at one edge where his watch strap had been. Under it, fainter, yesterday's, one less, half washed off. Under that, the ghost of the day before." }
      ] },
      { s: 'jihoon', f: 'neutral', t: "Cherry checks it at breakfast. Like a nurse. She takes my wrist and looks at it and then she lets go and passes me the jam. Every morning. She's never said one word about it." },
      { s: 'jihoon', f: 'serious', t: "I've got a sore throat. Actually. A real one. It's the damp. And there's one pharmacy on the strip and I've walked past it every day since April, and I can't go in there by myself, and I'm not going to stop having a throat." },
      { s: 'jihoon', f: 'neutral', t: "So you're going to come and watch me buy cough drops. That's the date. Don't say it's romantic. It's the least romantic thing I've ever asked anybody." },
      { choose: [
        { t: "It's a little romantic.", notes: 3, then: [
          { s: 'jihoon', f: 'happy', t: "...It's *so* not. Shut up. Get your umbrella." },
          { n: "He was grinning again by the escalator, and this time it went all the way up." }
        ] },
        { t: "(Hold out your hand for his wrist. Look at the number like Cherry does.)", notes: 3, then: [
          { n: "She held out her hand and he put his wrist in it, after a second, and she looked at the number the way Cherry did, closely, gravely, a nurse with a chart, and then let go." },
          { s: 'solar', f: 'neutral', t: "Pass the jam." },
          { s: 'jihoon', f: 'happy', t: "...Oh, I hate you. That's so good. Don't ever do that in front of her, she'll think we're a team." }
        ] },
        { t: "(Just get up and go.)", notes: 2, then: [
          { n: "She just got up and went, and he caught up with her at the escalator, and didn't thank her, and walked very close all the way to the station, so close their umbrellas kept knocking, and he didn't move his." }
        ] }
      ] },

      { place: 'Iwatodai · The Strip', time: 'Afternoon', bg: 'iwatodai-strip-rain', soft: true },
      { n: "The strip in the rain was all shutters and puddles and the soft hiss of bicycles going by with their riders holding umbrellas one-handed, which was illegal, and which everybody did. The pharmacy was halfway down, between the bookshop and a shop that sold only socks: a narrow front with a green cross over the door and a faded poster of a woman with a cold, and in the window, a stuffed frog in a nurse's cap that had been there so long it had gone pale on the sunny side." },
      // BG: aohigepharmacy-outside is used for the front; an inside view (a narrow aisle, an old woman at the counter with a TV) would be its own background.
      { bg: 'aohigepharmacy-outside' },
      { n: "He stopped across the street from it. Not on purpose; his feet did it. He stood under his umbrella on the opposite curb and looked at the green cross and the frog for a long time, with the rain running off the edge of the umbrella in a ring around him like bars." },
      { s: 'jihoon', f: 'neutral', t: "...It's not even the kind of place. I want to say that. It's not like there's anything in there I'd want. It's an old lady and a TV and some cough drops and a frog." },
      { s: 'jihoon', f: 'serious', t: "It's that I'd be in a pharmacy. Me. Standing in the aisle. Looking at the boxes. And some part of me would be reading them. Not for the cough drops. Just reading. The way you read a menu in a place you've already eaten." },
      { s: 'jihoon', f: 'sad', t: "I've been that guy in a pharmacy. I don't want to find out if I still am." },
      { choose: [
        { t: "Then don't read anything. Look at me. I'll read the boxes.", notes: 3, then: [
          { s: 'jihoon', f: 'surprised', t: "...You'll read the boxes." },
          { s: 'solar', f: 'neutral', t: "I'll find the cough drops. You look at the frog." },
          { n: "He laughed, once, as if it had been knocked out of him, and closed his umbrella, and crossed the street." }
        ] },
        { t: "(Close your umbrella. Step under his. Wait.)", notes: 3, then: [
          { n: "She closed her own umbrella and stepped in under his, close, her shoulder against his chest, and didn't say anything, and didn't pull, and just stood there with him in the ring of rain until he took a breath that went all the way down." },
          { s: 'jihoon', f: 'neutral', t: "...Okay. Okay. You're very bad at being a crowd, you know. You're just one person. That's terrible crowd technique." }
        ] }
      ] },
      { n: "The bell over the door rang when they went in. The old woman behind the counter didn't look up from her television, where a man in a headband was cooking something on a hot plate and shouting about it. The shop was two aisles wide and smelled of camphor and dust and the rubber of hot-water bottles, and it was so small that from the door you could see every shelf in it at once." },
      { n: "Jihoon stood just inside the door with his hands in his jacket pockets. She felt him look. She felt the exact second his eyes went down the left aisle, past the plasters and the eye drops, toward the back, where the boxes were plainer and the shelf was behind glass, and she felt him make them come back." },
      { n: "She went down the right aisle and found the cough drops, honey-lemon, the yellow tin, and came back and put them in his hand, and he looked at them in his hand like he'd won them out of a machine." },
      { s: 'jihoon', f: 'neutral', t: "...Honey-lemon. That's. Yeah. That's the right ones." },
      { n: "He paid. His hand was shaking. Not much; just enough that the coins rang a little on the glass of the counter, and the old woman looked up from her television for the first time, at him, at his hand, at his face, and something went across her face that was old and tired and kind, and she put the tin in a little paper bag and folded the top over twice and gave him two cough drops extra, loose, from a jar by the till, without saying anything, and went back to the man with the hot plate." },
      { n: "Outside, under the green cross, in the rain, he leaned his back against the shop window next to the frog and opened the bag and put one of the loose cough drops in his mouth and stood there with his eyes shut." },
      { s: 'jihoon', f: 'happy-2', t: "...That's the worst thing I've ever done. I've done some bad things. That was the worst. I want a medal. I want a parade." },
      { choose: [
        { t: "(Clap. Three times. Like a parade.)", notes: 3, then: [
          { n: "She clapped, three times, slowly, under the green cross, and a woman going past with a shopping bag looked at them both like they were mad, and Jihoon opened his eyes and laughed so hard he had to bend over with his hands on his knees, the real one, the one from when they were six." }
        ] },
        { t: "(Take his shaking hand. Hold it till it stops.)", notes: 3, then: [
          { n: "She took his hand, the one that had rung the coins on the glass, and held it in both of hers, and it went on shaking for a while and then it didn't, and he watched it stop the way he'd watch a crane come down over a prize, very still, not daring to breathe." },
          { s: 'jihoon', f: 'neutral', t: "...Thanks. That's. Yeah. Thanks." }
        ] }
      ] },

      { place: 'Paulownia Mall · Canal', time: 'Evening', bg: 'paulownia-canal', soft: true },
      // BG: paulownia-canal stands in for a canal walk at dusk after rain, the lamps just coming on.
      { n: "The rain had stopped by the time they got back to Port Island. The canal behind the mall was full and fast and brown, and the lamps along it had just come on, one after another, in a line, and every one of them was doubled in the water and broken up by the current and put back together again, over and over, gold on brown." },
      { n: "They sat on the low wall with their feet hanging over the water. He had Nana Two on his knee, facing the canal, as if the dog should get to see it too. He was eating the cough drops one after another, honey-lemon, like candy, and he'd given her one without asking, and they both smelled of it." },
      { ifEvent: 'eqx-hate-club', then: [
        { s: 'jihoon', f: 'neutral', t: "The guys asked where I was going. I said the pharmacy. You should've seen Hyunsuk's face. Like I'd said I was going to rob a bank." },
        { s: 'jihoon', f: 'happy', t: "Then Junkyu said *bring me back some of the good tissues*, like it was normal. Like I was just a guy going to a shop. I nearly cried in front of Asahi. I'd never have lived it down." }
      ] },
      { ifEvent: 'eqx-last-grain', then: [
        { n: "He took something out of his inside pocket, behind the half of the photo strip. The rice ball. Mr. Tanabe's. Still in its cling film, gone hard as a stone and gray all through now, the seaweed black. He held it on his palm and looked at it." },
        { s: 'jihoon', f: 'sad', t: "Two now. Two people who fed me. The night manager and the guy at the end of the table who never said no." },
        { s: 'jihoon', f: 'neutral', t: "I can't eat rice. I tried yesterday. I got it as far as my mouth. Cherry took the bowl off me and gave me toast like I was Ken." }
      ], else: [
        { n: "He took something out of his inside pocket, behind the half of the photo strip. The rice ball. Mr. Tanabe's. Still in its cling film, gone hard as a stone and gray at the edges. He held it on his palm and looked at it, and then put it back, carefully, as if it were still warm." },
        { s: 'jihoon', f: 'neutral', t: "Don't. I know. I'll know when to stop carrying it. I'll know because I'll stop." }
      ] },
      { n: "He was quiet for a while. A boat went by, a little one, a tourist thing with its lights on and nobody in it but the man steering, and its wake slapped the wall below their feet and broke up all the lamps in the water, and they came back together, slowly." },
      { s: 'jihoon', f: 'neutral', t: "I've been thinking about something. I've been thinking about it every day and I want to say it to you before I say it to anybody else, because you're the only one whose answer I'll actually listen to." },
      { s: 'jihoon', f: 'neutral', t: "I could stay here. When this is over. Whatever over is. I could just not go back." },
      { s: 'jihoon', f: 'serious', t: "Here, nobody's watching. That's what I keep coming back to. At home, if I fall, somebody's filming it. Somebody's posting it. My mom finds out from somebody else's mom in the line at the bakery. The whole school reads it with the spelling wrong. Every time I go down there's a crowd." },
      { s: 'jihoon', f: 'sad', t: "Here I could fall all I like and nobody would ever know. I could go into that pharmacy any day I wanted and the old lady would give me two extra and go back to her show. Nobody would watch. I keep thinking that like it's good news. Like it's the best news I've ever had." },
      { s: 'jihoon', f: 'neutral', t: "...So tell me. Tell me I can stay. If you say it, I'll stop thinking about it and just do it. That's how it works with me. You know that. You've known that since we were six." },
      { n: "He wasn't looking at her. He was looking at the lamps in the water, broken up and put back, broken up and put back. The dog on his knee looked at them too, with its stitched face that had never done anything wrong in its life. The cough drop clicked against his teeth. He was waiting the way he waited at the crane game, with his whole body, as if the answer might come down over the pile and pick something up." },
      // CG: eqx-cough-drops — a canal at dusk after rain, a line of lamps doubled and broken in fast water, a boy in a jacket on the low wall with a white dog plush on his knee and a little paper pharmacy bag in his hand, a girl beside him, both looking at the water.
      { choose: [
        { t: "Then stay. Nobody here will watch you fall.", notes: 3, tally: { cakes: 1, 'asks.jihoon': 'yes' }, then: [
          { n: "He let out a breath that went all the way down, and his shoulders came down with it, and for a second he looked younger than she'd ever seen him, younger than the old mall, younger than six." },
          { s: 'jihoon', f: 'happy', t: "...Okay. Okay. Yeah. Nobody's watching. Okay." },
          { n: "He put his arm round her and pulled her into his side and kissed her temple, hard, quickly, the way you'd kiss someone for good news, and then sat there with his cheek on her hair and the dog on his knee and the lamps in the water, easy, all of him easy, and he didn't take another cough drop, and he didn't look at his wrist." }
        ] },
        { t: "You can't stay somewhere just because nobody can see you there.", notes: 2, tally: { 'asks.jihoon': 'no' }, then: [
          { s: 'jihoon', f: 'sad', t: "...Yeah. I know. I asked anyway." },
          { n: "He took another cough drop. His hand was steady this time; it was the rest of him that wasn't. He held the dog a little tighter on his knee and looked at the water and didn't say anything for a long time, and when he did his voice was perfectly normal, cheerful even, the big easy fridge-light voice, and she hated it." },
          { s: 'jihoon', f: 'neutral', t: "You're right. You're always right. Fifty-fifty I'd have done something stupid with it anyway." }
        ] },
        { t: "That's yours to think about. Not mine to answer.", notes: 2, tally: { choose: 1, 'asks.jihoon': 'choose' }, then: [
          { s: 'jihoon', f: 'serious', t: "...That's the worst thing you could have said. You know that. You know I wanted the other thing." },
          { s: 'solar', f: 'neutral', t: "I know." },
          { n: "He looked at her for a long time. Then he looked down at his own wrist, at the number in blue ballpoint, smudged at one edge, and pushed his sleeve back down over it, slowly, as if he were putting it away somewhere he'd have to go and get it himself." },
          { s: 'jihoon', f: 'neutral', t: "...Okay. Mine. It's heavy. It's really heavy. I'm going to have to carry it round like the rice ball." }
        ] }
      ] },
      { ifFlag: 'eqx-jihoon-roof', then: [
        { n: "The lamps along the canal were all lit now. He looked at them, and at her, and his mouth went sideways." },
        { s: 'jihoon', f: 'neutral', t: "...It's not as good as the roof. The lighting. I want to be honest. I've had better." },
        { s: 'solar', f: 'neutral', t: "Is that a complaint?" },
        { s: 'jihoon', f: 'happy', t: "It's a review. Four stars. I'm going to kiss you anyway. I'm not asking. I'm warning you. It's a public service." }
      ], else: [
        { n: "The lamps along the canal were all lit now. He looked at them, and at her, and his mouth went sideways." },
        { s: 'jihoon', f: 'neutral', t: "...You remember what I said. In the arcade. Ask me again somewhere with better lighting." },
        { s: 'jihoon', f: 'neutral', t: "This is pretty okay lighting. It's not the best lighting. I'm still looking for the best lighting. I'm saying it's in the running." }
      ] },
      { choose: [
        { t: "(Kiss him. Honey-lemon.)", notes: 3, flag: 'eqx-jihoon-canal-kiss', then: [
          { n: "She kissed him. He tasted of honey-lemon and the rain, and he made a sound low in his throat like a man who'd been holding his breath under water, and his free hand came up to her jaw, and the other one kept hold of the dog, out of loyalty, so that she had a white plush ear against her collarbone the whole time, and he was laughing into it by the end." },
          { s: 'jihoon', f: 'neutral', t: "...He's going to know. Your boyfriend. He always knows. He's going to look at me at breakfast tomorrow and he's going to know exactly what we did and exactly what flavor it was." },
          { s: 'jihoon', f: 'sad', t: "And he's going to pass me the egg sandwich. He's always going to pass me the egg sandwich. I'm the scandal. I know my job." }
        ] },
        { t: "(Put your head on his shoulder instead.)", notes: 2, then: [
          { n: "She put her head on his shoulder instead, and he let out a breath, and put his cheek on her hair, and the dog sat on his knee facing the water, and the three of them watched the lamps until the last boat had gone by." },
          { s: 'jihoon', f: 'neutral', t: "...Yeah. This is good too. This is maybe better. Don't tell anyone I said that, I have a reputation." }
        ] }
      ] },
      { n: "He walked her to the monorail. At the gates he took the yellow tin out of the paper bag and put it in her blazer pocket, the whole thing, and kept only the bag, folded small, and put that in his inside pocket, behind the half of the photo strip and the rice ball, where he kept the things he couldn't throw away." },
      { s: 'jihoon', f: 'neutral', t: "For your throat. It's the damp. Everybody's getting it." },
      { n: "At the corner he looked back, the way he always did, every time, in every world, to check she was still where he'd left her. She was. She stayed till he'd gone, and then a while after, with a tin of cough drops in her pocket like a thing she'd won." }
    ] },
    { after: '6/30', title: '4: worse lighting', place: 'Paulownia Mall · Game Panic', time: 'After School', music: 'city', scene: [
      { bg: 'gamepanic-inside' },
      { n: "The rain had been coming down on Port Island since lunch the way it only came down at the very end of June, not falling so much as standing in the air in long gray ropes, and Paulownia Mall had filled up with everybody who'd been caught in it: salarymen shaking out umbrellas by the escalator, schoolgirls in wet socks, an old man in the food court reading the same page of a newspaper for an hour. Game Panic had never been so full. Every cabinet was taken. The carpet smelled of warm battery and wet shoes." },
      { n: "Jihoon was at the crane machine, of course, but not playing it. He was leaning on it with one elbow, talking to two middle-schoolers about technique with the gravity of a man giving a lecture at a university, and the middle-schoolers were writing it down, actually writing it, on the back of a receipt, and Nana Two was zipped into the front of his jacket with only its face showing, presiding." },
      { s: 'jihoon', f: 'happy', t: "—and you never chase it. You hear me? The claw's not your friend. The claw's a cat. You let it think it was its idea." },
      { n: "He saw her over their heads, and the lecture ended mid-sentence. He gave the middle-schoolers a hundred-yen coin each, like a man tipping valets, and came round the machine wiping his hands on his jeans." },
      { s: 'jihoon', f: 'neutral', t: "I have students now. I've founded a school. It's very exclusive. You have to be under fourteen and terrible." },
      { n: "He pushed his left sleeve up without being asked. It was a habit now, she understood, the way you'd show a ticket at a gate you went through every day, and he held his wrist out to her between them, inside up." },
      { ifChoice: { 'asks.jihoon': 'yes' }, then: [
        { n: "There was nothing on it. Clean skin, the blue veins, a faint gray ghost of ink from a week ago that hadn't quite washed out of the creases." },
        { s: 'jihoon', f: 'happy', t: "Didn't write it. Haven't since the canal. Didn't need to. You said. Nobody's watching, nobody's counting, I'm a free man." },
        { s: 'jihoon', f: 'neutral', t: "Cherry's doing it now. On her arm. Her own arm. She took my pen at breakfast on Monday and wrote the number on herself and gave the pen back and didn't say anything. She's been doing it every day. I've got the free arm and she's got the number." },
        { n: "He laughed. It was a good laugh, a real one, easy all the way down, and it landed on the carpet between them like a dropped coin, and rolled, and Solar watched it go under the crane machine where neither of them could reach it." }
      ] },
      { ifChoice: { 'asks.jihoon': 'choose' }, then: [
        { n: "The number was there, in blue ballpoint, but heavier than in June. Gone over twice, three times, the way you go over a word on a form you want to be sure somebody can read." },
        { s: 'jihoon', f: 'neutral', t: "I write it myself now. Every morning. In the mirror. Cherry's been demoted. She's allowed to read it. She's not allowed to hold the pen." },
        { s: 'jihoon', f: 'serious', t: "It's heavier when it's your own handwriting. Nobody tells you that. It's like carrying your own bag." }
      ] },
      { ifChoice: { 'asks.jihoon': 'no' }, then: [
        { n: "The number was there, in blue ballpoint, two lines of it now. The day count on top, and under it, smaller, a second number, single digits, that she didn't understand until he grinned at her." },
        { s: 'jihoon', f: 'happy', t: "That one's how many days since you told me no. I'm keeping a tally. I'm very mature about it." },
        { n: "He said it in the big easy voice, the fridge-light voice, and she hated it exactly as much as she had on the canal wall, and he knew she did, and kept the sleeve up a beat longer than he needed to, so she'd have to look." }
      ] },
      { ifBefore: '7/15', then: [
        { s: 'jihoon', f: 'neutral', t: "Hundred's on the fifteenth. Two weeks. Cherry's making a cake. She thinks I don't know. She's been coming home smelling of eggs." }
      ], else: [
        { s: 'jihoon', f: 'neutral', t: "Three digits now. Did you know nobody makes a fuss about a hundred and one? A hundred, there's a cake coming, apparently, in theory. A hundred and one, you're just a guy." }
      ] },
      { choose: [
        { t: "(Take his wrist. Turn it to the light. Look at it properly.)", notes: 3, then: [
          { n: "She took his wrist in both hands and turned it under the light from the rhythm game and looked, closely, the way Cherry did, the way you'd look at a ticket you weren't sure was real. He let her. He stood there in the noise with his arm in her hands and his face doing nothing at all, carefully, and when she let go he pulled the sleeve down slowly, as if he were tucking something in." }
        ] },
        { t: "You don't have to show me every time.", notes: 2, then: [
          { s: 'jihoon', f: 'neutral', t: "I know. I want to. It's the only thing I've got that's going up." }
        ] },
        { t: "Your students are watching.", notes: 2, then: [
          { n: "They were. The middle-schoolers had stopped playing and were staring at the two of them over the top of the crane machine with the frank, delighted horror of boys who had just worked out that their teacher had a girlfriend. Jihoon turned and pointed at them, and they ducked." },
          { s: 'jihoon', f: 'happy', t: "Eyes on the claw! Class is in session!" }
        ] }
      ] },
      { n: "The thunder came then. Not a roll, a crack, one enormous flat sound right over the roof of the mall as if something had been dropped on it from a height, and every light in Game Panic went out." },
      { dark: true },
      { n: "All of them. The cabinets, the ceiling, the change machine, the neon over the door, the rhythm game in the corner mid-scream. The noise went with them. That was the strange part. For a whole second there was no sound in the arcade at all, none, a silence so complete it rang, and then the middle-schoolers whooped, and somebody laughed, and out in the mall a child started to cry, and the only light anywhere was the little green running man over the fire exit, standing very still in his little green box." },
      { n: "She felt Jihoon's hand find hers in the dark before she'd decided to reach for it. Warm, damp, his fingers threading through hers and closing." },
      { s: 'jihoon', f: 'neutral', t: "...Oh. Oh, that's perfect. Worse lighting. I said I'd find it. I didn't know I'd have to break the whole mall." },
      { s: 'solar', f: 'neutral', t: "Jihoon." },
      { s: 'jihoon', f: 'happy', t: "This way. Mind the stool. I know where everything is in here. I could do this place blind. I basically live in it." },
      { place: 'Paulownia Mall · Photo Booth', time: 'After School', bg: 'paulownia-photo-booth', soft: true },
      { dark: true },
      { n: "He took her into the photo booth. She knew it was the photo booth by the curtain, the stiff plastic weight of it brushing her shoulder, and by the bench behind her knees, and by the smell, which was the chemical smell from April and his soap and the rain on both of them. The ring light was dead. The screen was dead. Inside with the curtain drawn it was so dark she couldn't see her own hand, and the rain was loud on the roof above the arcade, and somewhere outside an attendant was shouting in Japanese for everybody to stay where they were." },
      { s: 'jihoon', f: 'neutral', t: "This is it. The worst-lit place in the building. I'm calling it. I've done my research." },
      { n: "His voice was very close. His knee was against hers on the little bench. She felt him turn toward her in the dark rather than saw it, the warmth of his face coming nearer, his breath, honey-lemon, he'd been eating the cough drops again." },
      { s: 'jihoon', f: 'neutral', t: "...I can't see my wrist. Do you know how weird that is? I look at it like forty times a day. I can't see it. I can't see anything. It's just you." },
      { choose: [
        { t: "(Kiss him in the dark.)", notes: 3, flag: 'eqx-jihoon-dark-kiss', then: [
          { n: "She found his face with her hand first, his jaw, the corner of his mouth, and kissed him there, and then properly, and he made a low sound like someone setting down something heavy he'd carried up a lot of stairs, and his hand came up into her hair." },
          { n: "It was different in the dark. In the booth in April he'd been funny about it, and on the canal wall he'd been careful, and in the dark he was neither. He kissed her slowly and then not slowly, his free hand on her waist through her wet shirt, pulling her in until she was half across his lap on the narrow bench with the curtain swaying against her back and Nana Two squashed between them with its stitched face pressed to her collarbone, and neither of them stopped to move it." },
          { n: "She could feel his heart through his jacket. Going hard. Going so hard she put her hand flat over it, and he laughed into her mouth, shaky, and didn't stop." },
          { s: 'jihoon', f: 'neutral', t: "...Nobody can see us. Nobody in the whole world can see us right now. I think that's the most— I think that's—" },
          { n: "He didn't finish. She didn't let him." }
        ] },
        { t: "(Find his wrist in the dark. Put your thumb over the place where the number is.)", notes: 3, then: [
          { n: "She found his wrist, and pushed the sleeve back, and put her thumb flat on the inside of it, over the place where the number would be, where it should be, or wasn't, and held it there. He went completely still. She could feel his pulse under her thumb, going fast, and then, slowly, while she held it, less fast." },
          { s: 'jihoon', f: 'neutral', t: "...You're counting it. You're counting my pulse. That's so much worse than Cherry." },
          { n: "But he leaned his forehead down onto her shoulder in the dark and left it there, and she kept her thumb where it was, and they sat like that in the noise of the rain until he kissed her neck, once, just under her ear, very lightly, the way you'd sign something." }
        ] },
        { t: "Jihoon. Somebody'll open the curtain.", notes: 2, then: [
          { s: 'jihoon', f: 'neutral', t: "Nobody's opening anything. They can't see the curtain. They can't see their own feet. We're invisible. We're ghosts." },
          { n: "He didn't move closer. He stayed where he was, his knee against hers, and found her hand on the bench and held it, and she heard him smiling, which you could, it turned out, in the dark, if you'd known someone long enough." },
          { s: 'jihoon', f: 'happy', t: "But fine. Fine. You're the responsible one. I'll just sit here in the dark holding hands like a guy in a movie from the fifties. Very respectful. I'm being so respectful right now." }
        ] }
      ] },
      { n: "Something knocked on the side of the booth." },
      { n: "Two knocks. Soft. Knuckles on the thin plastic wall, just behind her head, so close she felt them in her teeth more than heard them. Polite. The way you'd knock on a bathroom door you thought might be engaged." },
      { n: "Jihoon stopped breathing. She felt him stop, the whole length of him, his hand closing on hers so hard her rings bit." },
      { n: "Nobody said anything. Outside the booth the arcade was a dark room full of people talking quietly, the attendant still calling out, a middle-schooler doing a ghost noise and being told to shut up. Inside the booth there was the rain on the roof and the two of them not breathing and, a hand's width from the back of her neck through a sheet of plastic, nothing. Nothing at all. Not a shuffle. Not a breath. Something standing very still and waiting to be told *come in*." },
      { s: 'jihoon', f: 'neutral', t: "...Cleaner." },
      { n: "He whispered it. He didn't believe it. Neither of them moved toward the curtain, and neither of them said *who is it*, and Solar thought of Hanni's rota taped to the dorm door, Mitsuru's initials at the bottom, the rule in Hanni's round handwriting that everybody in the household knew by heart now: *nobody opens a door in the red*. It wasn't the red. It was four in the afternoon in a shopping mall. She didn't open it anyway." },
      { bg: 'gamepanic-inside' },
      { dark: false },
      { n: "The lights came back all at once with a thump like a held breath let go. Every cabinet in Game Panic woke up screaming its attract mode at the same time, the rhythm game, the drums, the fighting game, the crane machine's fanfare, so loud after the silence that people outside in the mall laughed, and the ring light in the booth came on white and hard and showed her Jihoon's face a few inches from hers, pale, his eyes on the curtain." },
      { n: "The curtain was open. Not much. A hand's width, at the edge, where it didn't quite meet the wall. She'd felt it swing shut behind her when they came in. She'd felt it against her back the whole time." },
      { n: "Beyond the gap there was the arcade, lit and loud and ordinary, the middle-schoolers already fighting over the drum game, the attendant halfway up a stepladder at the far end resetting the change machine. Nobody near the booth. Nobody had been near the booth." },
      { s: 'jihoon', f: 'happy', t: "...Okay! Okay. Power's back. Great. That was fun. That was a fun little blackout. Let's get a drink. Let's get a drink right now, somewhere with a lot of windows." },
      { place: 'Paulownia Mall · Fountain', time: 'After School', bg: 'paulownia-mall', soft: true },
      { n: "They sat on the edge of the fountain on the ground floor with two cans from the vending machine and the rain still coming down on the glass roof three floors above them like gravel on a tin, and the mall all round them restarting itself, escalators clunking back into motion, the shutters going up, a man on a ladder fixing a sign. Jihoon drank half his can in one go and held the cold of it against the side of his neck." },
      { s: 'jihoon', f: 'neutral', t: "We don't go through the lobby. At the guesthouse. Did Cherry tell you? Since Tanabe-san. Nobody's said anything. We all just go round by the kitchen. Jungwon checks the new night guy's chain at eleven. Every night. The new guy thinks he's in love with him." },
      { s: 'jihoon', f: 'serious', t: "I'm scared of doors. I'm saying it out loud so it's said. Me. I've been kicked out of better places than this. I've climbed in windows. And I'm scared of a knock." },
      { choose: [
        { t: "So am I.", notes: 3, then: [
          { s: 'jihoon', f: 'surprised', t: "...You are?" },
          { s: 'solar', f: 'neutral', t: "Everybody is. Hyein nearly opened one. In April." },
          { n: "He looked at her for a long time. Then he put his can down on the fountain's edge and took her hand, the one with the rings, and turned it over, and looked at the little red dents his grip had left in her fingers in the booth, and rubbed them with his thumb, one at a time, as if he could rub them out." },
          { s: 'jihoon', f: 'sad', t: "Sorry. I squeezed. I didn't know I was squeezing." }
        ] },
        { t: "You didn't open it. That's the part I saw.", notes: 3, then: [
          { s: 'jihoon', f: 'neutral', t: "...You and Jungwon. You hear things the same way. It's creepy. Does he do the voice too?" },
          { n: "But his shoulders came down. She watched them come down, an inch, and stay." }
        ] },
        { t: "(Don't answer. Lean against his shoulder.)", notes: 2, then: [
          { n: "She leaned against him. His shoulder was wet through the jacket and very warm under the wet, and after a second he put his cheek on top of her head, and they sat there on the edge of the fountain like that while a cleaner, a real one, in a gray uniform and yellow rubber gloves, mopped round their feet without looking at them." }
        ] }
      ] },
      { s: 'jihoon', f: 'neutral', t: "Here's the thing I keep thinking. At home if a guy knocks on a door it's a guy. It's somebody's dad, it's the police, it's a guy who knows a guy. Something you can see coming. You've got a plan for it. I always had a plan for it." },
      { s: 'jihoon', f: 'serious', t: "Here there's nobody. That was the whole point. Nobody watching, nobody coming. And then something knocks, politely, and there's still nobody there." },
      { s: 'jihoon', f: 'neutral', t: "I don't know which one I'm more scared of. Somebody watching me fall, or nobody watching and something knocking anyway." },
      { n: "He laughed at himself, short, and crushed the can in his hand, and didn't throw it at the bin; he got up and put it in, carefully, and came back and sat down closer than before." },
      { ifChoice: { 'asks.jihoon': 'yes' }, then: [
        { s: 'jihoon', f: 'neutral', t: "I went into the pharmacy on my own last week, by the way. The strip one. With the frog. Just to say hi to the old lady. I didn't buy anything. I didn't even look at the back. I just went in and said hi and came out. See? Nobody watching. Nothing happened. It's fine. I'm fine." },
        { n: "He said it like good news. He said it like a man showing you a ten-thousand-yen note he'd found in the street, and she smiled at him, and something in her stomach turned over, once, slowly, like a card." }
      ] },
      { ifChoice: { 'asks.jihoon': 'choose' }, then: [
        { s: 'jihoon', f: 'neutral', t: "I walk past the pharmacy every day now. On purpose. I decided. Nobody told me to. I walk past it and I look at the frog and I keep walking. It's my thing. It's my own stupid thing." }
      ] },
      { ifChoice: { 'asks.jihoon': 'no' }, then: [
        { s: 'jihoon', f: 'neutral', t: "I go the long way round now. Past the bookshop. Avoid the frog. You said no, so I'm being good, see? Look at me being so good. You'd be proud. You'd be so proud you'd hate it." }
      ] },
      { n: "He took the photo strip out of his inside pocket. His half. Frames three and four, a little soft now at the corners from being carried. He didn't look at four. He held it with his thumb over the edge of the frame, over the gap in the curtain, the way you'd keep a thumb over a cut." },
      { s: 'jihoon', f: 'neutral', t: "I should throw this out. Cherry says throw it out. I'm not throwing it out. Three's the best picture anybody ever took of me. I just don't look at four." },
      { choose: [
        { t: "Give four to me. I'll keep it.", notes: 2, then: [
          { s: 'jihoon', f: 'serious', t: "No. Absolutely not. I'm not giving you the haunted one. What kind of guy gives his girl the haunted one." },
          { n: "He heard himself say *his girl* about a second after he said it. He didn't take it back. He went pink across the cheekbones, slowly, the way the sky goes, and looked at the fountain very hard." }
        ] },
        { t: "(Fold it so only three shows. Give it back.)", notes: 3, then: [
          { n: "She took it off him and folded it along the line between the frames, sharp, so only three showed, the two of them in the white light in the booth, whatever had happened in three, and gave it back. He looked at it folded. He put it back in his pocket folded." },
          { s: 'jihoon', f: 'neutral', t: "...Yeah. That's the version. That's the official version now." }
        ] }
      ] },
      { n: "The rain had slackened by the time they went out, and the monorail was running again, and the platform was crowded with all the people the mall had been keeping, and at the gates he stopped, and stood with his hands in his pockets, and rocked on his heels the way he did." },
      { s: 'jihoon', f: 'neutral', t: "For the record. Worse lighting. I delivered. You can't say I didn't deliver." },
      { s: 'jihoon', f: 'happy', t: "Next time I'm picking somewhere with a lock on the door. And no walls. Just a field. A big open field with nothing in it for miles. I'll see anything coming." },
      { n: "He grinned and turned and went, and at the corner he looked back, the way he always did, every time, in every world, to check she was still where he'd left her. She was. She stayed there till he'd gone, and then a while after, with the rain coming in soft under the platform roof, and didn't once look at the glass of the ticket machines beside her, where the lights of the platform were held and doubled, and the people waiting, and her." }
    ] },
    { after: '8/18', title: '5: a guy', place: 'Paulownia Mall · Game Panic', time: 'After School', music: 'city', scene: [
      { bg: 'gamepanic-inside' },
      { n: "August had got into Game Panic and couldn't get out. The air conditioning was on full and losing; it dripped from a vent over the dance machine into a bucket somebody had put there in July, *plink*, *plink*, under the screaming of the cabinets, and the carpet was warm as a dog's belly, and every middle-schooler on Port Island seemed to have come in out of the heat at once and stayed." },
      { n: "She heard Jihoon before she saw him. Everybody did. He was in the back half of the arcade, where the Hate Club had taken over four machines and a bench, and he was standing on the bench, on it, both feet, narrating Junkyu's losing streak at the racing game in the voice of a sports commentator having a breakdown." },
      { s: 'jihoon', f: 'happy', t: "—and he's coming into the final corner, ladies and gentlemen, he's in ninth place out of eight, I don't know how that's mathematically possible, nobody knows, scientists are baffled—" },
      { s: 'junkyu', f: 'neutral', t: "There are nine cars. You can't count. There are nine cars." },
      { s: 'hyunsuk', f: 'happy', t: "There's eight cars and a ghost. You're losing to the ghost, man." },
      { n: "Asahi, at the end of the bench, said something very quiet in Japanese that made Hyunsuk laugh so hard he had to hold onto the cabinet. Junkyu had a paper bag of plain toast on the cabinet beside the steering wheel and was eating it a slice at a time between races, the way he'd been eating, Solar had heard, since the end of July, since the boarding house, since the table. Jaehyuk sat on the bench behind him reading the racing game's high-score list as if it were a document." },
      { n: "Jihoon saw her. He jumped down off the bench, and the boys turned round in a row like a family of meerkats, and Hyunsuk said *ohhh* low and long, the universal sound, and Jihoon pointed at him without looking." },
      { s: 'jihoon', f: 'neutral', t: "Don't. I'll tell her about the thing. The thing with the bathroom in Busan." },
      { s: 'hyunsuk', f: 'serious', t: "...Okay. Nobody saw anything. Hi, Solar. Lovely weather." },
      { n: "It was good to watch. That was what she kept thinking, standing there with the AC dripping into the bucket behind her. It was good, the four of them here, the noise of them, Jihoon in the middle of it being loud. And she watched him do it and saw, the way you'd see a crack in a cup you'd been drinking from for a week, the old thing come back into his face. The bit. The almighty Hoon. He had an audience again, and he was doing the show." },
      { ifEvent: 'eqx-three-breakfasts', then: [
        { n: "He was doing it harder since the breakfast. Since Mrs. Kim had put her chopsticks down at the long table and said his name, just his name, *Park Jihoon*, in the voice of a woman reading it off a list of boys sent to the office, and then hadn't looked at him again. He'd laughed about it on the walk home. He'd laughed about it a lot." }
      ] },
      { s: 'jihoon', f: 'neutral', t: "Day one-thirty-something, before you ask. I've stopped saying the exact one out loud. The boys make it a song." },
      { s: 'jaehyuk', f: 'neutral', t: "It's a good song. It has a bridge." },
      { s: 'hyunsuk', f: 'happy', t: "Hyunsuk's cousin's guy's never gonna find him, that's the bridge—" },
      { n: "Jaehyuk put a hand flat over Hyunsuk's mouth without looking up from the high-score list. It was very fast, and very practiced, and the whole bench went quiet for exactly as long as it took, and then Jihoon laughed, too loud, and the noise came back." },
      { s: 'jihoon', f: 'happy', t: "It's fine. It's a joke. It's the oldest joke we've got. Come on. I need air. I'm going to die of carpet." },
      { place: 'Paulownia Mall · Service Alley', time: 'Evening', bg: 'portisland-back-alley-night', music: 'eerie', soft: true },
      // BG: paulownia-service-alley-dusk — the narrow service alley behind a shopping mall at a hot summer dusk: bins, stacked crates, a dripping AC unit, a fire door propped open with a brick, a strip of orange sky at the far end where the alley meets the street.
      { n: "The fire door at the back of the arcade let out onto the service alley behind the mall, and the heat came up off the concrete like a hand on the face. It was the end of the day. The sky at the end of the alley was orange over the street, and the alley itself was already in shadow, bins and stacked crates and the big AC units of every shop in the mall dripping onto the concrete in a row, and it smelled of hot rubbish and frying oil and, faintly, under it, the sea." },
      { n: "Jihoon kicked the brick back into the door so it wouldn't shut on them and leaned against the wall with his eyes closed and his hands in his pockets." },
      { s: 'jihoon', f: 'neutral', t: "...They're great. They're so great. I love them. I'm so tired." },
      { s: 'jihoon', f: 'serious', t: "Four months. Four months, nobody watching. And then they came through on a red light at two in the morning holding a bag of chips and I've been on since. Like a light in a fridge. Somebody opens the door, there I am." },
      { choose: [
        { t: "You don't have to be on with me.", notes: 3, then: [
          { s: 'jihoon', f: 'neutral', t: "I know. That's why I came out here. That's why I dragged you into an alley. Very romantic. Smell that. That's the smell of romance." },
          { n: "But his voice had gone down. The bit had gone out of it, the way it did, like a hand taken off a switch." }
        ] },
        { t: "They came for you, Jihoon. Not for the show.", notes: 2, then: [
          { s: 'jihoon', f: 'sad', t: "...Yeah. I know they did. That's the worst part. They came through a hole in the world for a guy who keeps a rice ball in his pocket." }
        ] },
        { t: "(Stand next to him against the wall. Shoulder to shoulder.)", notes: 2, then: [
          { n: "She leaned on the wall beside him, shoulder to his shoulder, and closed her eyes too, and for a minute they stood like that in the hot alley with the AC units dripping and the street noise far off at the end, two people with their eyes shut, not performing anything for anybody." }
        ] }
      ] },
      { n: "A man was standing at the far end of the alley, by the bins." },
      { n: "She hadn't seen him come. He was just there, where the alley met the street, against the orange, the way a thing is suddenly in a photograph you've looked at a hundred times. An ordinary man. Forties, a short-sleeved white shirt, gray trousers, the kind of man who drove a taxi or sold insurance or did both. Neat. He was wearing white cotton gloves, the thin kind, the kind taxi drivers wore, and he was holding them clasped in front of him, the way you'd stand at a funeral." },
      { n: "He was looking at Jihoon." },
      { n: "He came down the alley. Not fast. Not slow. Unhurried, the way you'd walk toward a friend you were meeting and were a little early for, and the light from the street went behind him and his face went into shadow and stayed there, the way faces do, ordinarily, against a bright sky." },
      { n: "He stopped two meters off and bowed. A small bow, a polite one." },
      { n: "Then he said, in Korean, in a soft, friendly, completely Seoul voice, *Park Jihoon-ssi?*" },
      { n: "Jihoon opened his eyes. Solar felt every muscle in his body arrive at the same place at once, the way an animal's does." },
      { n: "*Somebody said you were looking,* the man went on, kindly. *Back in May. Asking around.* He unclasped his gloved hands. In one of them, held out on the flat of his palm, the way a pharmacist hands you a powder, was a little paper fold. White. Neat. The size of a stamp. *For later. No charge. You'll stay a while, won't you. Nobody here will mind.*" },
      // CG: eqx-a-guy — a hot dusk service alley behind a mall, a neat man in a white short-sleeved shirt and thin white cotton gloves holding out a tiny folded paper on his flat palm, his face in shadow against an orange street, a boy against the wall and a girl half in front of him.
      { choose: [
        { t: "(Step in front of Jihoon.)", notes: 3, then: [
          { n: "She stepped in front of him. She didn't decide to. Her body did it before she'd finished understanding what the paper was, one step to the side, so that she was between the white glove and Jihoon's chest, and she felt Jihoon's hand close on the back of her shirt, a fistful of it, hard, and hold on." }
        ] },
        { t: "He isn't looking. Not any more.", notes: 3, then: [
          { n: "She said it in Korean. Her own voice surprised her: steady, cold, her HOAX mother's voice at a door to a man selling something. The man in the gloves turned his head toward her, unhurried, and she still couldn't see his face, and she felt him smile anyway, the way you feel the sun come out on the back of your neck." }
        ] },
        { t: "(Take Jihoon's wrist. Hold on.)", notes: 2, then: [
          { n: "She took Jihoon's wrist. Inside up. Her fingers over the place where the number was, or wasn't. His pulse was going like something trying to get out of a box. She held on, and he didn't pull away, and he didn't look at her; he was looking at the paper." }
        ] }
      ] },
      { n: "The man waited. He waited with the patience of somebody who had all the time in the world and didn't mind spending it here, in this alley, on this. Then, when nobody moved, he set the little paper fold down on the lid of the nearest bin, carefully, squaring it with one gloved fingertip so it sat neat, and bowed again, and turned, and walked back up the alley toward the street." },
      { n: "He walked out into the orange light, into the crowd going past the alley's mouth on the pavement, and was a white shirt among white shirts, and then wasn't anything." },
      { n: "Jihoon didn't move for a long time. Neither did she. The AC units dripped. Somewhere inside the arcade, faint through the propped door, the racing game played its little victory tune for somebody who wasn't Junkyu." },
      { s: 'jihoon', f: 'neutral', t: "...There's no guy here." },
      { s: 'jihoon', f: 'neutral', t: "I looked. In May. I'm not proud of it. I looked everywhere. There's no guy. There's nobody who knows a guy. There's nobody who's heard of anybody." },
      { s: 'jihoon', f: 'serious', t: "And he knew my name. He knew how to say it. He said it like a nurse." },
      { n: "He was looking at the paper on the bin lid. White, folded, square. A little thing. The size of a stamp. She could see him looking at it, the way he'd looked down the left aisle of the pharmacy in June, past the plasters, toward the glass at the back, and she could see him make his eyes come back, and then see them go again." },
      { choose: [
        { t: "(Pick it up. Open it.)", notes: 2, flag: 'eqx-jihoon-fold-opened', then: [
          { n: "She picked it up before he could. It weighed nothing. She unfolded it on her palm the way you'd open a note in class, corner by corner, with Jihoon saying *don't* behind her very quietly, once, and not stopping her." },
          { n: "It was flour." },
          { n: "A pinch of it. White, fine, finer than any flour she'd ever touched, finer than talc, and warm, faintly, as if it had been kept in somebody's pocket against their body for a long time. It smelled sweet. Not of anything. Just sweet, at the very back, the way a warm room smells when you come in from the cold." },
          { s: 'jihoon', f: 'surprised', t: "...Is that— that's flour. That's just flour." },
          { n: "He laughed. It came out of him cracked down the middle. He laughed and put his hand over his mouth and kept laughing behind it, bent over against the wall, and she stood there with a stranger's gift open on her palm and didn't laugh at all, and when the breeze came down the alley off the sea she turned her hand over and let it take the flour, and it went, in a little white breath, and didn't settle anywhere she could see." }
        ] },
        { t: "(Sweep it off the bin into the drain.)", notes: 3, then: [
          { n: "She swept it off the lid with the back of her hand into the gutter grate below, and it fell between the bars, white, and was gone, and she didn't look to see if it opened on the way down. Jihoon watched it go. He let out a breath that went on so long she thought he'd run out." },
          { s: 'jihoon', f: 'neutral', t: "...You didn't even look. You didn't even want to know what it was." },
          { s: 'solar', f: 'neutral', t: "No." },
          { s: 'jihoon', f: 'sad', t: "I did. I wanted to know so much. That's the bit I'll think about. Not him. That." }
        ] },
        { t: "(Leave it. Take his hand. Go back inside.)", notes: 3, then: [
          { n: "She left it. She took his hand and pulled, and he came off the wall like something unstuck, and she walked him back through the propped fire door into the cold and the noise without looking back at the bin, and he didn't look back either, and she knew what it cost him because his hand in hers was soaking." },
          { n: "At the door she kicked the brick away. It shut behind them with a heavy click. Neither of them said anything about the paper sitting out there in the alley on its own, neat, square, waiting, and for the rest of the evening she caught him looking at the fire door, now and then, the way you'd look at a phone you were sure was about to ring." }
        ] }
      ] },
      { place: 'Kirijo Guesthouse · Kitchen Door', time: 'Night', bg: 'kirijo-guesthouse-night', music: 'night', soft: true },
      { n: "He didn't want to go home. He said so at the monorail, and on the walk from the station, and at the corner of the guesthouse street, and each time he said it he kept walking toward home anyway, with her hand still in his, as if his feet had their own opinion." },
      { n: "At the guesthouse they went round to the kitchen door. Everybody did. Cherry's paper doily was still taped over the glass, white lace, the kitchen light coming through it onto the step in little flowers. Jihoon stopped with his hand on the door." },
      { s: 'jihoon', f: 'neutral', t: "...Come up. Not for— just come up. Just for a bit. I don't want to sit in my room with the window and think about him standing in it." },
      { s: 'jihoon', f: 'serious', t: "And your boyfriend's door is the third one on the left and he's going to hear us on the stairs because he hears everything, and I'm not pretending he won't. I'm just asking anyway." },
      { place: "Kirijo Guesthouse · Jihoon's Room", time: 'Night', bg: 'kirijo-flat', music: 'romance', soft: true },
      // BG: kirijo-guesthouse-room-night — a small plain guest room at night: a single bed against the wall, a window with the curtain half drawn on a hot summer street, a desk lamp, a white plush dog on the pillow, a photo strip tucked into the mirror frame.
      { n: "His room was small and plain and smelled of him, soap and cough drops and the sweet chemical ghost of the arcade, and it was the messiest room in the guesthouse by a distance, clothes on the chair and the floor and the end of the bed, but the windowsill was clean. The windowsill was the only clean thing in the room. On it, in a row, like things on an altar: the hard gray rice ball in its cling film; the pharmacy's paper bag, folded small; and, propped against the glass, his half of the photo strip, folded along the line so only three showed." },
      { n: "He saw her see them. He didn't say anything. He went and drew the curtain across the window, all the way, and checked the edges, and turned on the desk lamp instead of the ceiling light, so the room went small and gold." },
      { s: 'jihoon', f: 'neutral', t: "...Better lighting. Medium lighting. I'm working my way back up." },
      { n: "They sat on his bed because there was nowhere else to sit. Nana Two was on the pillow. He moved it to the desk, facing the wall, very seriously, *he doesn't need to see this*, and she laughed, and he turned round from the desk and looked at her laughing on his bed in the lamplight, and stopped smiling, and came back, slowly, and sat down closer, and kissed her." },
      { n: "His hands were shaking. She felt it on her jaw. She took one of them and held it against her face and kept her own hand over it until it stopped, the way she had outside the pharmacy in June, and he kissed her through it, and somewhere in it the shaking went out of him and something else came in, and he pressed her back onto the bed with his weight, slow, deliberate, careful of her the whole way down as if she might go out from under him like the floor of a dream." },
      { n: "Down the hall, a door opened, and closed. Footsteps on the stairs going down; the kitchen tap; a glass filled; the footsteps coming back up. They passed his door. They didn't stop. Neither of them breathed until they'd gone." },
      { s: 'jihoon', f: 'neutral', t: "...He knows. He knows exactly. He's going to pass me the egg sandwich at breakfast with a face like a saint." },
      { s: 'jihoon', f: 'sad', t: "I'm not sorry. I want to be sorry. I'm the scandal. I'm just— I'm so tired of being the only thing in the room nobody's watching for." },
      { choose: [
        { t: "(Reach over and turn off the lamp.)", notes: 3, flag: 'eqx-jihoon-room', then: [
          { n: "She reached past him and turned off the lamp." },
          { n: "In the dark he said her name, once, not the way he said it in the arcade, not Sol, not *Solar Kim*, just her name, low, as if he were checking it still worked. Then his mouth was on her throat and her hands were under the hem of his shirt, on the warm skin of his back, his spine, the long muscle either side of it jumping under her palms, and his breath went ragged against her collarbone, and outside on the hot street a bicycle bell rang twice and went on by, and the room was dark, and nobody, anywhere, was watching." },
          { place: "Kirijo Guesthouse · Jihoon's Room", time: 'The Red Hour', bg: 'kirijo-flat', music: 'darkhour', soft: true },
          { n: "When the red came at midnight she was still there. She felt it before she saw it: the hum of the fridge downstairs stopping, the street going silent mid-car, the line of light under the door going from yellow to the color of the inside of an eyelid. Jihoon was asleep against her back with one arm over her waist and his face in her hair, and he didn't wake. His arm tightened, once, in his sleep, the way a hand closes on a cuff at a crossing." },
          { n: "Somebody knocked on the door. Once. A knuckle. Then Cherry's voice, very low, from the hall." },
          { s: 'cherry', f: 'neutral', t: "...It's me. One knock. I'm not coming in. Is he okay." },
          { s: 'solar', f: 'neutral', t: "He's okay. He's asleep." },
          { n: "A long pause on the other side of the door. Solar could hear her not saying a dozen things." },
          { s: 'cherry', f: 'neutral', t: "...Okay. Okay. Good. Don't go out the front. Go out the kitchen in the morning. The new guy's a gossip." },
          { n: "Her footsteps went away down the hall in the red. Jihoon slept through all of it, his breath slow and warm on the back of Solar's neck, and she lay awake in the color of the inside of an eyelid and watched the curtain, and the curtain didn't move, and at five, when the light came back gray, she slid out from under his arm without waking him and went down the back stairs in her socks with her shoes in her hand." },
          { n: "The third door on the left was open a few inches. The light inside was on. It had been on all night, she thought; she didn't know how she knew. She went past it without looking in, and on the step outside the kitchen door, under the lace, she stood in the cool and put her shoes on with her hands not quite steady and didn't know what she felt, except all of it, at once." }
        ] },
        { t: "(Stay till he sleeps. Sit on the floor by the bed, his hand in yours.)", notes: 3, then: [
          { n: "She slid down off the bed and sat on the floor with her back against the frame, and reached up behind her, and found his hand on the mattress, and held it. He lay on his side looking down at the top of her head in the lamplight for a long time." },
          { s: 'jihoon', f: 'neutral', t: "...This is so much worse. You know that. You on the floor holding my hand like a nurse. This is going to wreck me." },
          { s: 'solar', f: 'neutral', t: "Go to sleep, Jihoon." },
          { n: "He did. It took a long time. She felt it happen in his hand, the grip going loose one finger at a time, and then not loose at all: at the very edge of sleep his fingers closed on hers, hard, and held, the way a hand closes on a cuff at a crossing. She sat there till eleven with the lamp on and her arm going numb, and then she untangled it, very slowly, and put Nana Two back on the pillow facing him, and turned the lamp off, and went out by the kitchen." }
        ] },
        { t: "Not tonight. Walk me down.", notes: 2, then: [
          { n: "He closed his eyes. Then he nodded, against her forehead, and sat up, and laughed a little, unsteadily, and pushed his hair back with both hands." },
          { s: 'jihoon', f: 'neutral', t: "...Yeah. Yeah. You're right. You're always right. It's horrible. Come on." },
          { n: "He walked her down the back stairs and out through the kitchen. On the step under the lace he kissed her once more, short, and stood in the doorway with the kitchen light behind him and watched her all the way to the corner, and when she looked back he was still there, a dark shape in a lit door, not moving, making sure, until she'd gone round it." }
        ] }
      ] }
    ] },
    { after: '10/7', title: '6: under the clock', place: 'Port Island Station · Under the Clock', time: 'After School', music: 'tender', scene: [
      { bg: 'gamepanic-inside' },
      { n: "He wasn't at Game Panic. Asahi was at the crane machine on his own, playing it without any interest, the way you'd keep a seat warm for somebody, and when he saw Solar he took one hand off the stick and pointed, without a word, at the floor, and then sideways, toward the station, and went back to the claw." },
      { place: 'Port Island Station · Central Concourse', time: 'After School', bg: 'station-concourse-evening', soft: true },
      // BG: portisland-station-clock — a big station concourse on an autumn afternoon, a tall old-fashioned clock on a post in the middle of the floor, a low bench beneath it, crowds going past in long coats, light slanting through high windows.
      { n: "October had come into the station before it came anywhere else. It came in through the doors with the crowds, on their coats, the first coats of the year, and on the wind that pushed in every time the doors slid open, and it smelled of rain on the platforms and roasted chestnuts from a cart by the north exit. The big clock stood in the middle of the concourse on its iron post, old-fashioned, with a white face and black hands and a second hand that ticked, actually ticked, you could hear it if you stood under it between trains." },
      { ifEvent: 'eqx-1023', then: [
        { n: "Jihoon was on the bench under the clock. On his own. He had a plastic folder on his knee, labelled in Jungwon's square handwriting, and a pencil behind his ear, and a thermos between his feet, and he wasn't looking at the folder. He was looking at the exit." },
        { s: 'jihoon', f: 'neutral', t: "He stopped. Mr. Kim. After the steps. He came back up out of that hole and he sat at the table at the dorm and he didn't say *she's gone ahead* any more. He didn't say anything. He gave me the folder. He didn't say keep going. He didn't say stop." },
        { s: 'jihoon', f: 'neutral', t: "So I'm doing the list. Station sixty-one. I've got fifty-one to go. Somebody should finish it. Somebody should be under every clock at least once. In case." },
        { ifEvent: 'eqx-seams', then: [
          { s: 'jihoon', f: 'sad', t: "...She's back. I know she's back. I saw her on the stairs at the dorm, sitting up, asleep. I still come. Tuesdays. I don't know why. I think I just like knowing somebody's here, under the clock, in case anybody comes looking for anybody." }
        ] }
      ], else: [
        { n: "Jihoon was on the bench under the clock, and beside him, in his fleece, with his reading glasses on the end of his nose and a plastic folder on his knee labelled in Jungwon's square handwriting, was Mr. Kim." },
        { n: "Jihoon had a thermos. He was holding it in both hands between his knees the way you'd hold something for someone who'd asked you to, and Mr. Kim's car keys were on the bench between them, and every few seconds Mr. Kim's hand went to them without his looking, and turned them over, and let them go." },
        { s: 'kim-dad', f: 'happy', t: "Solar-ya! Look. Look at this one. Look at the clock. Two minutes fast. Two minutes! She'd hate that. She'd go and find a man about it." },
        { s: 'jihoon', f: 'neutral', t: "Station thirty-four. We're making great time. We've got a system." },
        { s: 'kim-dad', f: 'neutral', t: "He turned up at the gate on Monday. Seven in the morning. *I'll carry the bag, sir.* I said, does your mother know where you are. He said, no, sir, she never does. So I let him carry the bag." },
        { n: "Mr. Kim said it fondly. He said it the way he'd say a thing about a stray he'd started feeding. Jihoon looked at the thermos very hard and went red to the ears." },
        { n: "Solar looked at the exit. She couldn't help it. A hundred and twelve stations, and under every clock in every one of them, Mr. Kim waiting for one train in each direction for his wife to come through the barrier annoyed about how long he'd taken. And Mrs. Kim in Mrs. Oka's garden, on a Saturday, with her back to the house, taking in the sheets, the knot of her apron sitting on a line down her spine." },
        { n: "She didn't say anything. Jungwon hadn't said anything. She sat down on the end of the bench beside Jihoon and the three of them looked at the exit together." },
        { s: 'kim-dad', f: 'neutral', t: "Next one's due in four minutes. Up and down. One each way. That's the rule. Then we go to thirty-five. You can come to thirty-five if you like, Solar-ya. It's got a noodle stand. She likes a noodle stand." },
        { n: "The train came in from the island. The barrier beeped and beeped, a hundred people coming through it at once in their new coats, and Mr. Kim stood up, and took his glasses off, and looked at every face, every single one, his lips moving, and sat down again when they'd gone, and put his glasses back on." },
        { s: 'kim-dad', f: 'neutral', t: "Not this one. She'll be on a slow one. She always takes the slow one so she can complain about it." },
        { n: "He got up to cross to the other side for the down train, with the folder under his arm and the keys in his fist, and patted Jihoon's shoulder on the way past, twice, without looking, the way you'd pat a car you trusted." }
      ] },
      { n: "Jihoon unscrewed the thermos. It was barley tea. He poured some into the lid and held it out to her and she drank it and gave it back and he drank from the same side, without making a joke about it, which was how she knew how tired he was." },
      { s: 'jihoon', f: 'neutral', t: "She never liked me. Your mom. You know that. Everybody knows that. I'm the kid from the next building who ate all the snacks and broke the TV remote and grew up into a forum thread." },
      { s: 'jihoon', f: 'neutral', t: "Every time I came over, since we were six, she'd watch me from the kitchen. Not like a mom watches. Like a guard. Like I was going to put a spoon in my pocket. Every time. She'd stand at the sink with her back to the window and her arms folded and just watch me, the whole time, until I left." },
      { s: 'jihoon', f: 'sad', t: "...She's the only grown-up who ever looked straight at me for longer than a second. Did you know that? My dad looks at the TV. My mom looks at her phone. Teachers look at the file. Your mom looked at *me*. Like I was worth guarding against." },
      { s: 'jihoon', f: 'neutral', t: "At breakfast in August she said my name and then she didn't look at me again for the whole meal. Everybody thought that was the bad part. It wasn't. The bad part was I'd been waiting for it. I was so glad. I sat there with my face all burnt going, oh, thank God. Somebody's watching." },
      { choose: [
        { t: "She'd hate that you're here. Carrying the bag.", notes: 3, then: [
          { s: 'jihoon', f: 'happy', t: "*So* much. She'd be furious. She'd come through that barrier and see me under the clock and her whole face would go like a door slamming." },
          { s: 'jihoon', f: 'neutral', t: "That's why I'm here. If she comes through, I want the first thing she sees to be me. I want her to be so annoyed. I want her to have to look at me." }
        ] },
        { t: "She watched you because she knew you'd come back.", notes: 2, then: [
          { s: 'jihoon', f: 'surprised', t: "...That's a very generous reading of a woman who once checked my pockets at the door." },
          { s: 'jihoon', f: 'sad', t: "But okay. Okay. I'll take that one. I'll put it in my pocket with the rice ball." }
        ] },
        { t: "(Don't say anything. Watch the exit with him.)", notes: 2, then: [
          { n: "She didn't say anything. She watched the exit with him. The barrier beeped and stopped and beeped. After a while he leaned over until his shoulder was against hers, and stayed, and they watched the faces come through together, everyone in the world but the one." }
        ] }
      ] },
      { n: "He put the lid back on the thermos and turned it in his hands." },
      { s: 'jihoon', f: 'neutral', t: "I worked something out. Sitting here. You get a lot of time to think under a clock. It's practically a monastery." },
      { s: 'jihoon', f: 'serious', t: "All year I've been going, nobody's watching. Nobody's watching me fall. Like it's the best thing I ever got. Like somebody gave it to me in a box with a bow on it. And I took it. I said thank you. I carried it around like a prize." },
      { s: 'jihoon', f: 'serious', t: "It's not that nobody's watching me fall. It's that nobody's watching *for* me. There's a difference. I didn't know there was a difference till she went on the bridge and there was nobody at the kitchen window." },
      { ifChoice: { 'asks.jihoon': 'yes' }, then: [
        { s: 'jihoon', f: 'sad', t: "You said stay. On the canal. You said nobody here will watch you fall. You were right. That's the thing. You were completely right. Nobody does. Nobody's watched me do anything since August except Cherry's arm." },
        { s: 'jihoon', f: 'neutral', t: "I don't blame you. I asked you to say it. I asked you exactly how to say it. I'm just telling you what I got." }
      ] },
      { ifChoice: { 'asks.jihoon': 'choose' }, then: [
        { s: 'jihoon', f: 'neutral', t: "You gave it back to me. On the canal. *That's yours.* I hated you for like a week. And it turned out it was mine. It's mine whether I fall or not. And I'm the only one who can carry it under a clock." },
        { s: 'jihoon', f: 'sad', t: "It's so heavy, Sol. I carry it here every day and set it down on this bench and pick it back up. Nobody else can. That's what mine means." }
      ] },
      { ifChoice: { 'asks.jihoon': 'no' }, then: [
        { s: 'jihoon', f: 'neutral', t: "You said no. On the canal. You said you can't stay somewhere just because nobody can see you there. I made a tally of how many days since. I was being a dick about it." },
        { s: 'jihoon', f: 'sad', t: "I stopped the tally on the twenty-fourth. You were the only one watching. You were watching the whole time. You just weren't watching the way I wanted." }
      ] },
      { n: "Solar sat with it under the clock, the second hand ticking over them, and understood it the way you understand a word you've been saying wrong for years: suddenly, completely, a little embarrassed. It had never been the falling. That wasn't what this town held out to him in its gloved hand. It held out the other thing. A place where he could go down as far as he liked, and nobody would come, and nobody would stand at a window with her arms folded, and nobody would ever have to be annoyed with him again." },
      { n: "*Stay where nobody's watching.* She could hear it. She could hear exactly how kind it sounded." },
      { flag: 'eqx-floor-jihoon' },
      { ifEvent: 'eqx-seams', else: [
        { n: "That was when she saw the vest." },
        { n: "At the far exit. Across the concourse, through the crowd, under the other clock, the small one over the south doors. Navy. Quilted. Over a gray sweater. A woman's back, short, brisk, black hair cut blunt at the shoulder, standing still in a river of people going past her, facing the doors, as if she were waiting for somebody who'd taken too long." },
        { n: "Solar didn't breathe. The woman didn't turn round. The crowd closed over her and opened again, and she was still there, still facing away, perfectly still, and there was something about the way the vest sat on her shoulders, a little high, a little loose, like a coat on the back of a chair, and Solar knew, the way she'd known in the garden, without seeing it, where the seam was." },
        // CG: eqx-under-the-clock — a busy station concourse in autumn seen from a bench beneath a tall old clock: a boy with a thermos looking the other way, and far across the crowd under a second, smaller clock, the back of a short woman in a navy quilted vest, standing perfectly still while everyone flows past her.
        { choose: [
          { t: "(Stand up. Stand where he can't see the far exit.)", notes: 3, flag: 'eqx-jihoon-vest', then: [
            { n: "She stood up. She didn't decide to; she was up, stepping in front of the bench as if she wanted to stretch, putting her body between Jihoon's eyes and the south doors, and she stood there with her back to the clock and her heart going like a fist on a door, and looked at him, and smiled, the brightest one she had." },
            { s: 'jihoon', f: 'surprised', t: "...What. What is it. You've got a face." },
            { s: 'solar', f: 'neutral', t: "Nothing. My leg went to sleep." },
            { n: "He looked at her for a long moment. He didn't believe her. He let her have it anyway, which was the kindest thing anybody did for her all month. When she sat back down and looked, the south doors were just doors, and the small clock was just a clock, and nobody was standing under it at all." }
          ] },
          { t: "(Take his hand. Don't look again.)", notes: 3, flag: 'eqx-jihoon-vest', then: [
            { n: "She took his hand on the bench between them and held it and looked at the floor, at the tiles, at the gum on the tiles, at anything, and didn't look up again, and he felt something come into her grip and closed his fingers over it without asking what it was." },
            { s: 'jihoon', f: 'neutral', t: "...Okay. Okay. I've got you. Whatever it is. I've got it." },
            { n: "When she made herself look again the south doors were just doors. The small clock said the same time as the big one. Nobody was standing under it." }
          ] },
          { t: "(Keep watching it. Somebody has to.)", notes: 2, flag: 'eqx-jihoon-vest', then: [
            { n: "She kept watching. She made herself. She watched the back of the navy vest under the small clock with Jihoon talking beside her about noodle stands and didn't look away, didn't blink, the way Cherry watched a mirror, the way you'd watch a door you knew something was behind, and the woman stood there, and stood there, waiting." },
            { n: "Then the down train came in and the crowd came through the barrier in a wave and when it had passed the woman was gone, and nobody had come through the south doors to meet her, and Solar realized her own hands were folded in her lap, tight, one over the other, like somebody at a funeral, and made them come apart." }
          ] }
        ] }
      ] },
      { n: "Jihoon stood up. He put the thermos down on the bench and wiped his palms on his jeans and looked across the concourse at the little drugstore by the east exit. White light, a green cross, rows of shelves you could see through the glass. People going in and out of it with their umbrellas." },
      { s: 'jihoon', f: 'neutral', t: "I need cough drops. Actual cough drops. It's October, everybody's got a throat." },
      { s: 'jihoon', f: 'serious', t: "I'm going to go in on my own. You stay here. Under the clock. And watch me. The whole way there and the whole way back. Don't come. Don't look away. Just watch." },
      { s: 'jihoon', f: 'neutral', t: "I want to know what it's like. Doing it with somebody watching *for* me. Not *at* me. For." },
      { choose: [
        { t: "(Watch him the whole way. Don't look away once.)", notes: 3, flag: 'eqx-jihoon-watched', then: [
          { n: "She watched him. She sat on the bench under the clock with the second hand ticking over her head and watched Park Jihoon cross the concourse with his hands in his pockets, in and out of the crowd, a head taller than most of it, and go in under the green cross, and stand inside the door, and she watched his head turn, once, toward the back of the shop, and stop, and come back." },
          { n: "He found the cough drops. He paid. Through the glass she saw the girl at the till say something and him laugh. He came out with a little paper bag in his hand and stood outside the door, and looked across the whole concourse straight at the clock, at her, and she was there, watching, and she saw it land on him from fifty meters away, the way you see a gust hit a flag." },
          { n: "He walked back. He didn't hurry. When he got to the bench he sat down hard, like his knees had given out a step early, and held the bag on his knee, and didn't say anything for a long time." },
          { s: 'jihoon', f: 'sad', t: "...You didn't look away. I checked. Four times. I kept checking. You didn't look away once." },
          { s: 'jihoon', f: 'neutral', t: "That's it. That's the whole thing. That's all I wanted, apparently. I'm such a cheap date." }
        ] },
        { t: "(Go with him anyway.)", notes: 2, then: [
          { n: "She got up and went with him anyway. He stopped in the middle of the concourse and looked at her, exasperated, and something under the exasperation that she didn't have a word for, and then he sighed and held out his hand, and she took it, and they went in together under the green cross and bought honey-lemon and came out." },
          { s: 'jihoon', f: 'neutral', t: "...You're very bad at instructions. You know that? I gave you one instruction. Sit. Watch. It's what you'd tell a dog." },
          { s: 'jihoon', f: 'sad', t: "Thanks. I mean it. Next time sit, though. I want to know if I can." }
        ] },
        { t: "(Turn round on the bench. Let him do it on his own.)", notes: 2, then: [
          { n: "She turned round on the bench, deliberately, so she was facing the platforms, and put her hands in her lap, and didn't watch. He stood there for a second behind her. She could feel him looking at the back of her head." },
          { s: 'jihoon', f: 'neutral', t: "...Oh. Okay. That's. Okay. That's the other version. That's the hard version." },
          { n: "She heard him walk away across the tiles. She counted. She got to four hundred and twelve before he sat back down beside her with a paper bag on his knee and his breath coming fast, and neither of them said anything, and after a while he put a cough drop in her hand without looking at her, like a coin in a slot." }
        ] }
      ] },
      { ifEvent: 'eqx-1023', else: [
        { n: "Mr. Kim came back across the concourse from the down platform with the folder under his arm, shaking his head, cheerful, as if the train had personally let him down." },
        { s: 'kim-dad', f: 'neutral', t: "Not that one either. She's dawdling. Thirty-five! Noodles! Park Jihoon, the bag." },
        { n: "Jihoon picked up the bag. He held out his free hand to help Mr. Kim with the folder and Mr. Kim gave it to him, and then stopped, with the keys in his fist, and looked at Jihoon over his glasses, properly, the way you'd look at a boy who'd come to the door for your daughter." },
        { s: 'kim-dad', f: 'neutral', t: "...Does your mother know where you are?" },
        { s: 'jihoon', f: 'neutral', t: "No, sir." },
        { s: 'kim-dad', f: 'neutral', t: "Hm. Mine does. Mine always knows where you are. She'll be furious." },
        { n: "He walked off toward the platforms, and Jihoon stood there holding the folder, with his mouth open a little, as if he'd been handed something much heavier than a folder, and then he went after him." }
      ] },
      { n: "At the barrier he stopped and turned round, the way he always did, every time, in every world, to check she was still where he'd left her." },
      { n: "She was under the clock. She was watching. He saw it, and lifted the paper bag at her like a toast, and went through." },
      { n: "She sat there a while after, under the second hand. The big clock ticked. The doors slid open and shut and let October in. At the far end of the concourse the small clock over the south doors said the right time, and there was nobody under it, and she watched it anyway, until the next train, and the one after that, in case anybody came looking for anybody." }
    ] },
    { after: '11/1', title: '7: the shelf', place: 'Paulownia Mall · Game Panic', time: 'After School', music: 'city', scene: [
      { bg: 'gamepanic-inside' },
      { n: "November had come into Game Panic on everybody's coats and stayed, a damp-wool smell under the warm battery of the carpet, and the bucket under the dripping vent by the dance machine had finally been taken away and had left a pale ring on the floor where it had stood all summer. The rhythm game was screaming at nobody. The fighting-game booth was full of middle-schoolers in scarves. And the crane machine by the door had a sheet of printer paper taped across its glass, OUT OF ORDER in black marker, and its plug lay on the carpet beside it, curled up like a tail." },
      { n: "It was lit anyway. Its little lights ran round and round the frame, pink and white, and inside, over the pile, the claw hung at the top of its wire, perfectly still, the way a thing hangs when it's waiting rather than broken." },
      { n: "Jihoon was on the step of the dance machine with Nana Two zipped into his jacket and his elbows on his knees, not playing anything, looking at it." },
      { s: 'jihoon', f: 'neutral', t: "They restocked it. Tuesday. The attendant opened the back and tipped a whole new bag in and taped the sign back on, like feeding a fish in a tank you've stopped liking." },
      { s: 'jihoon', f: 'serious', t: "Look at the pile. Go on. I've been looking at it for an hour, you can look at it for one second." },
      { n: "She looked. The bears were gone, and the cartoon frogs, and the knockoff cats with the wrong number of whiskers. The pile was white. All of it. A hundred round white plush rice cakes the size of a fist, stitched smiles, stitched eyes closed in contentment, heaped against the glass with every single one of them facing out." },
      { ifFlag: 'eqx-jihoon-plush', then: [
        { n: "Hers was still in her bag. She knew exactly where without touching it, against the lining, against her textbooks, the way you know where a sore tooth is. The dust had gone through four books now. She'd stopped trying to brush it off." }
      ], else: [
        { n: "She thought of the one he'd fished out of the prize flap in April, small and warm and smiling, and where it had gone, and didn't ask." }
      ] },
      { s: 'jihoon', f: 'neutral', t: "Nobody plays it. Nobody's touched it since it went white. My students walk round it on the way to the drums like it's a dog that bit somebody. My whole school. Won't go near it." },
      { s: 'jihoon', f: 'flustered', t: "Two hundred was the twenty-third, by the way. Since you're about to look at my wrist." },
      { ifFlag: 'dead.shinjiro', then: [
        { n: "He said it to the carpet. She knew what else the twenty-third had been, and so did he, and neither of them said it for a while." },
        { s: 'jihoon', f: 'sad', t: "I wrote it on my wrist in the morning. Two, oh, oh. Cherry was going to do a thing at dinner. And then it was the night, and nobody looked at anybody's wrist for a week, and I was glad. Isn't that disgusting. I was glad nobody saw it." },
        { s: 'jihoon', f: 'sad', t: "He fed me once. Did you know that? In June. I came to the dorm to walk Cherry home and it was pouring, and he put a plate in front of me at the end of the table and didn't say anything. Rice and some kind of fish. Just put it down. Like mail." },
        { s: 'jihoon', f: 'neutral', t: "That's three. Three people in this town who put food in front of me without asking why I was there. All three of them dead. And I'm walking round with one of them in my pocket like a stone." }
      ], else: [
        { s: 'jihoon', f: 'neutral', t: "Two, oh, oh. I wrote it on my wrist in the morning. Cherry was going to do a thing at dinner. Then it was the night, and the fathers, and nobody looked at anybody's wrist for about a week, and I was glad. That's disgusting, right? I was glad nobody saw it." },
        { s: 'jihoon', f: 'happy', t: "Your cook lived, though. The one in the long coat. Junpei put it in the group chat in capitals with eleven exclamation marks and a picture of a frying pan. I barely know the guy. I read it four times." }
      ] },
      { ifChoice: { 'asks.jihoon': 'yes' }, then: [
        { n: "He pushed his sleeve up anyway, out of habit, and the inside of his wrist was bare, clean skin and blue veins. The number lived on Cherry's forearm now, in her blue ballpoint, two hundred and something, and Solar had seen her writing it bigger every week, as if she were afraid it would stop being legible from across a room." }
      ] },
      { ifChoice: { 'asks.jihoon': 'choose' }, then: [
        { n: "He pushed his sleeve up anyway, out of habit. Two hundred and something, in his own hand, gone over three times, heavy as a signature on a form you're scared someone will say isn't yours." }
      ] },
      { ifChoice: { 'asks.jihoon': 'no' }, then: [
        { n: "He pushed his sleeve up anyway, out of habit. The day count in blue, and under it, where the second tally had been in June, a little scribbled-out smudge where he'd stopped keeping it." }
      ] },
      { choose: [
        { t: "(Look at the crane. Then at him. Only at him.)", notes: 3, then: [
          { n: "She looked at the white pile for exactly as long as he'd asked and then turned her back on it and looked at him instead, at the tired grin, the nick under his jaw where he'd shaved badly that morning, and he saw her do it, and something in his shoulders let go about an inch." },
          { s: 'jihoon', f: 'neutral', t: "...Yeah. Okay. Better view. I'll give you that one." }
        ] },
        { t: "Let's go somewhere it isn't.", notes: 3, then: [
          { s: 'jihoon', f: 'neutral', t: "That's the plan. That's exactly the plan. I've had it since April. I've just been carrying it around." }
        ] },
        { t: "Two hundred. I'm glad, Jihoon. Late, but glad.", notes: 2, then: [
          { s: 'jihoon', f: 'surprised', t: "...You said glad in an arcade again. That's twice. People are going to talk." },
          { s: 'jihoon', f: 'sad', t: "Okay. I'll take it late. Late still goes on the wrist." }
        ] }
      ] },
      { s: 'jihoon', f: 'neutral', t: "Come on. The shrine. The little shelf where people leave things. Somebody said that, once. In April. On a bench." },
      { n: "The Hate Club came in out of the drizzle as they were getting up, all four, shaking their umbrellas over the doormat in a row like a family of wet birds, and stopped when they saw him standing. Hyunsuk opened his mouth. Jaehyuk put a hand flat over it without looking, the way he had in August, and then took it away again, because Jihoon was already talking." },
      { s: 'jihoon', f: 'neutral', t: "Shrine. I'm going to the shrine. Don't make it a thing." },
      { s: 'hyunsuk', f: 'surprised', t: "...Are you getting married? Is this— is she proposing? Is that what this is?" },
      { s: 'junkyu', f: 'neutral', t: "Shut up. Here." },
      { n: "Junkyu dug in his pocket and came out with a hundred-yen coin and held it out on his flat palm, gravely, the way you'd hand somebody the ring at a wedding. For the box, he said. For whatever. Jihoon looked at the coin a long second and took it." },
      { s: 'asahi', f: 'neutral', t: "...Say one for the grandma at the bakery. The one with the gloves. He said yes to her. He won't tell you what." },
      { n: "Junkyu went red and pushed Asahi into the drum game, not hard, and Asahi let himself be pushed, and the four of them went off to the back half of the arcade arguing, and didn't once look at the white pile in the crane by the door. Jihoon stood with the coin in his fist and watched them go, the way you'd watch your own family cross a road." },
      { s: 'jihoon', f: 'sad', t: "...They came through a hole in the world for me and now they're scared of a claw machine. I did that. I brought them to a town where the claw machines are scary." },
      { n: "She had. With his hand closed round something in his pocket. She hadn't known he'd kept it, the word, the address. She should have. He kept everything." },

      { place: 'Naganaki Shrine · The Side Hall', time: 'Evening', bg: 'naganaki-shrine-autumn', music: 'tender', soft: true },
      // BG: naganaki-shrine-offering-shelf — the side hall of a small hilltop shrine at November dusk: a narrow plank shelf under the eaves crowded with small left things (a stopped wristwatch, child's mittens, a chipped teacup, a folded crossword), a stone incense burner on the path, gold ginkgo leaves on the gravel, one lantern just lit.
      { n: "Naganaki at dusk in November smelled of wet gravel and cold incense and the bitter green of the ginkgo by the gate, which had turned all at once that week and was dropping gold on the steps in drifts the old woman at the amulet stall swept, and swept, and gave up on. The lanterns were coming on along the path. Nobody was there. In November nobody ever was; the shrine belonged to the crows and the cold and whoever had something to put down." },
      { n: "The shelf was under the eaves of the side hall, round the back, where the wind didn't reach. Solar had walked past it a hundred times last year without once looking. A plank of old dark wood on two iron brackets, about the height of a hand, and on it the things people left." },
      { n: "There were more than there used to be. That was the first thing. Last year there'd been a few coins, a doll with a cracked face, a cup of sake gone to dust. Now the shelf was full end to end, a small crowd standing shoulder to shoulder in the lantern light: a man's wristwatch, stopped; a child's mittens on a string; a teacup with a chip out of the rim; a single house slipper; a rice bowl with its lid on; a photograph turned face down; a folded newspaper open to a crossword half done in pencil. A town's worth of people saying goodbye to somebody without saying who." },
      { n: "Jihoon stood in front of it with his hands in his pockets, and she watched him count. Under his breath, lips moving, the way Cherry counted, the way he'd caught it off Cherry like a cold." },
      { s: 'jihoon', f: 'neutral', t: "Twenty-two. There were nine in May. I came up in May, did you know that? I didn't do it. I stood here like a tourist and bought a fortune and it said *wait*, so I thought, okay. Fine. I'll wait." },
      { n: "He reached out and touched the crossword with one finger. Soft gray pencil, a small square old man's hand, and the clue it had stopped at was fourteen across." },
      { s: 'jihoon', f: 'sad', t: "...That's his. Tanabe-san's. From the lobby. Somebody brought it up here." },
      { n: "He didn't ask who. He looked at the folds, which had been pressed flat, corners together, edges squared, the way exactly one person at the guesthouse folded anything at all." },
      { s: 'jihoon', f: 'neutral', t: "Jungwon. Of course. He never said. He just walked up here on his own and put it down and never told a single person. That's so him I could scream." },
      { n: "Then he took it out of his pocket." },
      { n: "She'd seen it in pieces all year, a corner of cling film, a shape behind his hand, but she hadn't seen it whole since the bench outside Game Panic in April. It was gray all the way through now, hard as a pebble from a river, the seaweed gone black and papery, the cling film clouded soft at the twist where his thumb had worried it for six and a half months. It looked like nothing. It looked like something you'd find in the gutter and step over. He held it on his palm in the lantern light like it was the heaviest thing in the prefecture." },
      { ifFlag: 'dead.shinjiro', then: [
        { s: 'jihoon', f: 'sad', t: "For three of them. I'm putting it down for three of them, it's all I've got. He'd hate that it's rice. He'd say it's past saving and throw it in the bin and make me a new one without looking at me." },
        { s: 'jihoon', f: 'sad', t: "...He'd be right. He'd be so right. I'd eat it." }
      ], else: [
        { s: 'jihoon', f: 'neutral', t: "I said I'd know when to stop carrying it. I'd know because I'd stop. I didn't stop. So I'm doing it the other way round. I'm going to put it down and find out afterward if I knew." }
      ] },
      { n: "He lifted it toward the shelf. And stopped." },
      { n: "At the far end, past the rice bowl, in a gap between the face-down photograph and the slipper where there'd been nothing a second ago, or where she just hadn't looked, there was a little paper fold. White. Square. The size of a stamp. Squared to the edge of the plank with somebody's fingertip, neat, the way the man in the white gloves had squared his on the lid of a bin in August." },
      { n: "Jihoon saw it at the same moment she did. She felt him see it, the way you feel a step that isn't there. The rice ball stopped in the air between his hand and the wood." },
      { n: "The lanterns hummed. Down the hill a car went by on the wet road, and then it was quiet enough to hear the ginkgo leaves coming down onto the gravel one at a time, like somebody counting." },
      { s: 'jihoon', f: 'neutral', t: "...It's for me. It's a shelf for leaving things, and somebody left me something. That's funny. That's actually really funny." },
      { n: "He wasn't laughing." },
      // CG: eqx-the-shelf — a narrow wooden offering shelf under shrine eaves at dusk, crowded with small left things in lantern light; a boy's hand holding a gray, stone-hard rice ball in clouded cling film just above the plank, and at the far end of the shelf a tiny white paper fold squared neatly to the edge.
      { choose: [
        { t: "(Put your hand under his. Set it down together, right on top of the fold.)", notes: 3, flag: 'eqx-jihoon-shelf', then: [
          { n: "She put her hand under his, her palm against the back of his hand, the way you'd steady a cup somebody was carrying too full, and he let her, and they set it down together. Not at the near end. At the far end. Right on top of the little white fold, so it was underneath and you couldn't see it any more: a gray stone on a white square, a paperweight on somebody's letter." },
          { n: "He took his hand away. It was shaking, not much. He looked at it, and put it in his empty pocket, and kept it there." },
          { s: 'jihoon', f: 'neutral', t: "...Sit on that, then. Whoever. Sit on that for a bit." }
        ] },
        { t: "(Take the fold. Drop it in the incense burner. Then step back and let him do it alone.)", notes: 3, flag: 'eqx-jihoon-shelf', then: [
          { n: "She picked the fold up off the shelf without opening it, walked to the stone burner in the middle of the path and dropped it in, onto the gray ash where somebody's sticks had burned down to nothing that morning. It didn't catch. It lay on the ash, white and square and perfectly clean, and she didn't watch it. She went back and stood a step behind him, where he could feel her and not see her, and waited." },
          { n: "He did it on his own. It took a long time. He set the rice ball at the near end, beside the crossword, and moved it a centimeter left so the two weren't touching, and took his hand away, and put it back, and took it away." },
          { n: "When they passed the burner on the way down she looked in. Ash. Gray. Nothing white in it anywhere." }
        ] },
        { t: "You don't have to put it down. It's yours. Keep it.", notes: 2, then: [
          { n: "He looked at her. Then at the rice ball in his hand, and at the little white square waiting at the end of the shelf, and his face did something grateful and ashamed at once." },
          { s: 'jihoon', f: 'sad', t: "...Yeah. Okay. Not here. Not next to that." },
          { n: "He put it back in his pocket and kept his hand round it there all the way down the steps, the way you'd keep a hand on your wallet in a crowd. Neither of them looked back at the shelf. Neither of them had to." }
        ] }
      ] },

      { place: 'Naganaki Shrine · The Steps', time: 'Evening', bg: 'naganaki-shrine-night', music: 'tender', soft: true },
      { n: "They sat on the long stone steps under the gate with the town going blue below them. The monorail went over the bay lit up like a string of beads somebody was pulling slowly through their fingers. The river was black. On the river side of town, low down, where Aigis said the count went quiet, one window was yellow, a kitchen window, square and warm, and Solar didn't look at it, and felt it not being looked at the whole time, like a hand on the back of her neck." },
      { ifFlag: 'eqx-jihoon-shelf', then: [
        { s: 'jihoon', f: 'neutral', t: "My pocket's so light. That's stupid. It weighed, like, eighty grams. I keep putting my hand in to check and there's nothing in there but lint and one cough drop." },
        { s: 'jihoon', f: 'sad', t: "...I'm going to keep checking for about a year, aren't I." }
      ], else: [
        { s: 'jihoon', f: 'neutral', t: "Still in there. I'm going to carry it till it turns into a diamond. That's how diamonds work. Pressure and time and a guy who can't let go of anything." }
      ] },
      { s: 'jihoon', f: 'neutral', t: "Can I tell you a thing about your boyfriend. It's not a mean thing. I wish it was a mean thing." },
      { s: 'jihoon', f: 'serious', t: "He checks the chain at eleven. You know that, everybody knows that. Then he walks down the hall and stops outside my door. Every night. He doesn't knock. He just stands there till he hears me move. A cough, the bed, anything. Then he goes." },
      { s: 'jihoon', f: 'sad', t: "I lie there like a kid pretending to be asleep, and I think, he's watching for me. Him. The guy whose— the guy I've been a scandal at for two years. He stands outside my door every night like somebody's dad." },
      { ifEvent: 'eqx-door-hoax-3', then: [
        { s: 'jihoon', f: 'neutral', t: "And in the gym. That night. Him in the doorway not saying come back with his whole face. I said two's enough. I meant it. I just didn't know one of the two was going to be him." }
      ] },
      { choose: [
        { t: "He's always watched for you. Since we were six.", notes: 3, then: [
          { s: 'jihoon', f: 'sad', t: "...Don't. Don't make him nice. I can't fight a nice guy. I've been trying for twelve years and he keeps passing me egg sandwiches." }
        ] },
        { t: "Does that make it worse?", notes: 2, then: [
          { s: 'jihoon', f: 'serious', t: "So much worse. I want him to hate me. Hate's easy. You know where you are with hate. You can stand in it like a doorway." },
          { s: 'jihoon', f: 'sad', t: "He doesn't hate me. He stands outside my door. What am I supposed to do with that. Where am I supposed to put it." }
        ] },
        { t: "(Don't say anything. Lean into his shoulder.)", notes: 2, then: [
          { n: "She leaned into his shoulder. The jacket was cold on the outside and warm an inch in, and Nana Two's ear was squashed between them, and after a second he put his cheek on top of her head and blew out a breath into her hair that went on a long time, the way you'd let air out of something that had been holding its shape too hard." }
        ] }
      ] },
      { ifEvent: 'eqx-seams', then: [
        { s: 'jihoon', f: 'neutral', t: "Your mom's back. At the dorm. In the armchair. Cherry told me. I haven't gone. I don't know how to walk into a room she's in and not be the kid with the spoon in his pocket." },
        { s: 'jihoon', f: 'serious', t: "I'll go. Don't make that face. I'm going. I just need to buy something to bring that isn't stupid." }
      ], else: [
        { s: 'jihoon', f: 'neutral', t: "Station seventy-three on Saturday. Mr. Kim doesn't come any more. I go anyway. Thirty-nine to go. Somebody should be under every clock at least once. I keep saying that like it's a plan." }
      ] },
      { ifCount: { of: ['eqx-jihoon-roof', 'eqx-jihoon-booth-kiss', 'eqx-jihoon-canal-kiss', 'eqx-jihoon-dark-kiss', 'eqx-jihoon-room'], min: 1 }, then: [
        { n: "He kissed her on the steps. Not the way he did in arcades and booths, like he was getting away with something. Slowly, and cold, his mouth cold and then not, his hand coming up to the side of her face and staying there while the lanterns hummed over them, and when she shivered he unzipped his jacket without stopping and pulled her hands inside it, flat against his ribs through his shirt, where he was warm, where his heart was going much faster than the rest of him was letting on." },
        { s: 'jihoon', f: 'flustered', t: "...Your hands are like ice. That's assault. I'm reporting you to the shrine." },
        { n: "He didn't let go of them. He held them there against his ribs inside his jacket with his own hands over the outside, and Nana Two looked up at the two of them from the zip with his stitched face that had never done anything wrong in his life." }
      ], else: [
        { n: "He took her hand off her knee and put it in his jacket pocket with his, the empty pocket or the other one, and held it there, and didn't say anything about it, which for Park Jihoon was a speech." }
      ] },
      { s: 'jihoon', f: 'serious', t: "Sol. Next time I'm going to ask you something. Not now. I'm telling you now so you can't say I ambushed you. I'm a gentleman. I give notice." },
      { s: 'solar', f: 'neutral', t: "Ask me what?" },
      { s: 'jihoon', f: 'neutral', t: "What I am. Here. I know what I am at home. I'm the scandal, I'm the thread on the forum, I'm the guy your mom checks the pockets of. I want to know what I am here. Where nobody's keeping the score." },
      { s: 'jihoon', f: 'flustered', t: "Don't answer. I'm going to ask somewhere with the right lighting. Not better, not worse. Right. I'm still looking for it." },
      { n: "They went down the steps together into the town. At the bottom, where the shrine road met the street, he went left toward the guesthouse and she went right toward the dorm, and she stopped at the corner and turned round, and he was already turned round, half a street away, in the lamplight, the way he always was, every time, in every world, to check she was still where he'd left her." },
      { n: "She was. He lifted his hand, the one that had been in his pocket all year round a stone, and it was empty, or it wasn't, and she couldn't tell from there, and it didn't matter. It was up. That was the thing she kept." }
    ] },
    { after: '12/3', title: '8: the right lighting', place: 'Paulownia Mall · Game Panic', time: 'After School', music: 'city', scene: [
      { bg: 'gamepanic-inside' },
      { n: "December had put tinsel on Game Panic, one sagging silver rope along the top of the change machine and a plastic wreath on the fire door that somebody had hung upside down and nobody had fixed, and the rhythm game had a Christmas song in it now that it played at full volume to nobody, sleigh bells over a drum machine, over and over, the way a child sings the one line it knows." },
      { n: "The crane machine was gone. There was a pale rectangle on the carpet by the door where it had stood, cleaner than the carpet round it, with four little dents at the corners." },
      { n: "Jihoon was standing in it. In the clean rectangle, exactly, in his coat, with a paper bag from Cherry's bakery in one hand and his thermos in the other and Nana Two's head poking out of his zip, like a man waiting for a bus in a place where there used to be a stop." },
      { s: 'jihoon', f: 'neutral', t: "They took it away on Monday. Two guys with a trolley. Normal guys. I watched the whole time. I checked their hands. Bare hands. Calluses. One of them had a wedding ring and a plaster on his thumb. I nearly hugged him." },
      { s: 'jihoon', f: 'serious', t: "Don't take your coat off. We're going to your house." },
      { s: 'solar', f: 'neutral', t: "The dorm?" },
      { s: 'jihoon', f: 'neutral', t: "Your mom's house. Wherever your mom is, that's your house. That's the rule. I didn't make the rule. Every Korean mother in history made the rule." },
      { s: 'jihoon', f: 'flustered', t: "I've got melon bread. Cherry says melon bread's neutral. Cherry says nobody ever had a fight over a melon bread. I've got barley tea. I've got a clean shirt on. I ironed it. With a pan. Jungwon showed me." },
      { choose: [
        { t: "You ironed a shirt with a pan.", notes: 2, then: [
          { s: 'jihoon', f: 'serious', t: "With a *hot* pan. On the kitchen table. On a towel. He timed it. It's very scientific. Don't touch the collar, the collar's a crime scene." }
        ] },
        { t: "(Fix his collar.)", notes: 3, then: [
          { n: "She reached up and fixed his collar, which had a faint brown triangle pressed into one point of it, and he stood very still with his chin up and let her, the way you'd stand for a mother at a school gate, and his ears went red from the bottom up." },
          { s: 'jihoon', f: 'flustered', t: "...Okay. Okay. Is it bad? It's bad. Don't tell me. Tell me after." }
        ] },
        { t: "She'll like that you came, Jihoon.", notes: 3, then: [
          { s: 'jihoon', f: 'neutral', t: "No she won't. She'll hate it. That's fine. That's the point. I want her to have to look at me for a whole visit." }
        ] }
      ] },

      { place: 'Iwatodai Dorm · Lounge', time: 'Afternoon', bg: 'iwatodaidorm-livingroom', music: 'tender', soft: true },
      { n: "The lounge in December smelled of the radiator, of dust burning off the coils the way it did the first week they were on, and of soup, and of too many people having lived in one room for a week. Somebody had left a basket of folded laundry on the stairs. The TV was on low, a cooking show, a man in a headband making something on a hot plate and shouting about it, and in the armchair by the window, with a blanket over her knees and her back very straight, not touching the chair, was Mrs. Kim." },
      { ifFlag: 'dead.shinjiro', then: [
        { n: "By the kitchen door, the plain chair. Nobody sat in it. There was a plate on it, covered with cling film, chopsticks laid across the top, and Jihoon's eyes went to it and stayed there one second too long and came away." }
      ] },
      { ifFlag: 'dead.aigis', then: [
        { n: "Hyein was on the stairs with a book she wasn't reading, a white ribbon round her wrist, and she looked up when the door opened, quick, the way everybody in the dorm looked up at doors now, and saw who it was, and looked down again." }
      ] },
      { n: "Mrs. Kim's eyes came off the television. She looked at Solar. Then past Solar, at the boy in the doorway with the paper bag." },
      { s: 'kim-mom', f: 'neutral', t: "...Park Jihoon." },
      { n: "She said it the way she'd said it at the long table in August, like a name read off a list of boys sent to the office. Solar felt him stop breathing beside her. Then breathe, deliberately, like a man reminding himself how." },
      { s: 'jihoon', f: 'neutral', t: "Ma'am." },
      { s: 'kim-mom', f: 'neutral', t: "Sit there. Where I can see you." },
      { n: "She meant the end of the couch, across from her, in the window light. He sat. Straight-backed, knees together, the bakery bag on his lap with both hands on it, the way he must have sat in the vice principal's office at Hanlim a dozen times, except that in the vice principal's office, Solar thought, he'd have been grinning." },
      { ifFlag: 'eqx-jihoon-vest', then: [
        { n: "Solar thought of a navy quilted vest under a station clock in October, and the back of it, and the way it had sat on the shoulders, and put the thought somewhere she couldn't reach it, and sat down on the arm of the couch beside him." }
      ] },
      { n: "He held out the bag. Mrs. Kim took it and looked inside and took out the melon bread and turned it over, inspecting the bottom, the way she'd inspected every bought thing Solar had ever brought home." },
      { s: 'kim-mom', f: 'neutral', t: "Who made this." },
      { s: 'jihoon', f: 'neutral', t: "Cherry." },
      { s: 'kim-mom', f: 'neutral', t: "Hm. Too much sugar on the top." },
      { n: "She ate all of it. Slowly, in small pieces, tearing them off with her fingers, without taking her eyes off him once. He poured barley tea from the thermos into its lid and held it out with both hands, and she took it with both hands, and their fingers didn't touch, and she drank it and gave it back and he poured her another." },
      { s: 'kim-mom', f: 'neutral', t: "He says you were under the clock. Every Tuesday. Even after." },
      { s: 'jihoon', f: 'neutral', t: "Somebody had to finish the list, ma'am." },
      { s: 'kim-mom', f: 'neutral', t: "Who meets under a clock. What kind of person meets under a clock." },
      { s: 'jihoon', f: 'neutral', t: "Mr. Kim, ma'am." },
      { n: "Something went across her face. Not a smile. The place a smile would have been, if she'd let it. She looked at him over the rim of the tea, and Solar knew the look, she'd grown up under it: the look from the kitchen sink, arms folded, back to the window, watching a boy from the next building who might, at any moment, put a spoon in his pocket." },
      { s: 'kim-mom', f: 'neutral', t: "Your mother. Does she know where you are." },
      { s: 'jihoon', f: 'neutral', t: "No, ma'am." },
      { s: 'kim-mom', f: 'neutral', t: "Hm." },
      { n: "A long pause. The man on the television shouted about his hot plate. The radiator ticked." },
      { s: 'kim-mom', f: 'neutral', t: "I'll know, then." },
      { n: "That was all. She went back to the television. Jihoon sat on the end of the couch with the empty bakery bag in his lap and didn't move, and Solar, on the arm beside him, watched his face do nothing at all, carefully, for a very long time, the way you'd hold a full glass across a room." },
      { choose: [
        { t: "(Slide down onto the couch next to him. Put your hand flat on his knee.)", notes: 3, then: [
          { n: "She slid down off the arm into the seat beside him and put her hand flat on his knee and left it there. He didn't look at it. His hand came down over hers, after a while, and pressed, once, hard, and stayed." }
        ] },
        { t: "(Go and make more tea. Leave him with her.)", notes: 3, then: [
          { n: "She got up and went into the kitchen and filled the kettle, slowly, and stood at the counter while it boiled with her back to the doorway, and listened. Nobody said anything in the lounge for four minutes. When she came back with the pot Jihoon had moved to the floor, to the side of the armchair, not at Mrs. Kim's feet, where Mr. Kim slept, but near, and he was holding the corner of her blanket so it wouldn't slip, and she was letting him." }
        ] },
        { t: "Mom. He bought the melon bread with his own money.", notes: 2, then: [
          { s: 'kim-mom', f: 'neutral', t: "I know he did. It had the price on. He didn't take it off. A boy who steals takes the price off." },
          { n: "Jihoon made a sound like he'd been hit very gently in the stomach and looked at the window for a long time." }
        ] }
      ] },
      { n: "She fell asleep sitting up. In the middle of the cooking show, between one shout and the next, her chin went down an inch and her eyes closed and she stayed bolt upright in the armchair with the empty tea lid in her hands, asleep, her back not touching anything, and her mouth moved a little, as if she were telling somebody something, and no sound came out." },
      { n: "Jihoon took the lid out of her fingers. He did it the way you'd take a cup from a sleeping child, one finger at a time. The blanket slid. He caught it, and lifted it back over her knees, and his hand went up to tuck it round her shoulders, and stopped, an inch off, and came back down. He'd heard. Everybody had heard. Nobody touched their backs." },
      { n: "He sat back down on the floor by the chair instead, with his arms round his knees, and stayed there, watching her sleep, until Mr. Kim came in from the konbini at five with a bag of mandarins and his reading glasses on his head and stopped in the doorway and looked at the two of them." },
      { n: "Mr. Kim didn't say anything. He came and sat down on the floor at his wife's feet, in his place, and gave Jihoon a mandarin, and patted his shoulder twice, without looking, the way you'd pat a car you trusted." },
      { ifEvent: 'eqx-persimmon', then: [
        { place: 'Iwatodai · The Hill Road', time: 'Evening', bg: 'outside-night', music: 'night', soft: true },
        { n: "They walked down the hill in the early dark. Neither of them took the river road. Nobody took the river road now. Since the teacher. Since the persimmon tree, and the frost, and his glasses folded on the ground under him like he'd taken them off to sleep." },
        { s: 'jihoon', f: 'neutral', t: "Saori told Cherry and Cherry told me. I saw him once in the strip pharmacy. The frog one. He said good afternoon to the frog. Out loud. Like a gentleman." },
        { s: 'jihoon', f: 'sad', t: "...I liked him for that. I didn't even know his name till the assembly." }
      ] },

      { place: 'Paulownia Mall · Game Panic', time: 'Night', bg: 'gamepanic-inside', music: 'night', soft: true },
      { n: "Game Panic closed at ten. At nine fifty-five the attendant, the slow man with the mop who was paid by the hour, saw Jihoon at the door and lifted his chin at him and went on mopping, and Jihoon took his coat off and hung it on the fire door's upside-down wreath and picked up the second mop from the corner like a man going to his own job." },
      { s: 'jihoon', f: 'neutral', t: "Fridays, I help him close. He pays me in tokens. I've been doing it since June. Don't tell anybody, I have a reputation as a guy who's never held a mop." },
      { n: "The attendant turned off the overheads at ten and left the cabinets running on their attract screens and went into the back to count the change with the door shut. The arcade went dark in the middle and bright at the edges, every machine glowing in its own color into the empty room like a ring of people holding candles, and the rhythm game played its sleigh bells to nobody, softer now, the volume turned down for the night." },
      { s: 'jihoon', f: 'neutral', t: "...Okay. This is it. I've been looking all year. Better lighting, worse lighting, medium lighting. This is the right lighting." },
      { s: 'solar', f: 'neutral', t: "It's an empty arcade at night." },
      { s: 'jihoon', f: 'neutral', t: "It's where I'm the only thing anybody's ever looked at me for. Crane machines and dart boards. And it's empty. And you're in it." },
      { place: 'Paulownia Mall · Photo Booth', time: 'Night', bg: 'paulownia-photo-booth', soft: true },
      { n: "He took her to the booth. The curtain, the bench, the little screen, the ring light coming on as they sat down, hard and white and kind, taking every mistake off their faces. He fed it his tokens. He picked the frame without asking: not the bunnies. A plain one, white, no border at all." },
      { n: "Then he reached behind them and took a fistful of the curtain where it didn't quite meet the wall, and pulled it shut, and held it. His whole hand. Knuckles white. He held it shut through all four countdowns and didn't once look away from the screen." },
      { n: "The strip came out of the slot warm. He held it up between them in the white light." },
      { n: "One: the two of them, not smiling, just looking. Two: him laughing at something she'd said. Three: her looking at him and not the camera. Four: the same, and at the very edge of the frame, where the curtain met the wall, a hand. His. A fist full of plastic, holding the gap shut. Nothing behind it. Nothing at all." },
      // CG: eqx-right-lighting — inside a photo booth at night, a plain white-bordered four-frame strip held up in hard ring light; in the fourth frame a boy's fist at the edge clenched on the curtain, holding the gap shut, and nothing behind it.
      { s: 'jihoon', f: 'neutral', t: "...There. Four. That's me in four. That's the first time I've been in four." },
      { n: "He didn't put it in his pocket. He held it, looking at it, and the ring light hummed, and the sleigh bells came very faintly through the curtain, and he turned on the little bench until his knee was against hers and looked at her instead." },
      { s: 'jihoon', f: 'serious', t: "I gave notice. On the steps. I'm asking now. What am I. Here. Not the scandal. Not the thread. Not the kid with the spoon. Here, where nobody's keeping the score, what am I to you." },
      { ifChoice: { 'asks.jihoon': 'yes' }, then: [
        { s: 'jihoon', f: 'sad', t: "You told me once nobody here would watch me fall. You were right. It turns out I don't want to fall, I want somebody to see me not fall. That's so much less cool. Answer me anyway." }
      ] },
      { ifChoice: { 'asks.jihoon': 'choose' }, then: [
        { s: 'jihoon', f: 'neutral', t: "You gave me the heavy thing back on the canal and I carried it under a clock for two months. I'm not giving you this one to carry. I just want to know. Answer me anyway." }
      ] },
      { ifChoice: { 'asks.jihoon': 'no' }, then: [
        { s: 'jihoon', f: 'neutral', t: "You told me no on the canal and you were the only one watching the whole time. I want to know what you were watching. Answer me anyway." }
      ] },
      { route: [
        { t: "You're the one I'm watching for.", route: 'romance', notes: 3, then: [
          { n: "He didn't move. The ring light hummed. She watched it land on him the way she'd watched it land outside the drugstore in October from fifty meters away, like a gust hitting a flag, except this time she was four inches off and could see every part of it: his mouth opening, and not saying anything, and closing; his eyes going wet and him not letting them; the hand still holding the strip coming up off his knee and not knowing where to go." },
          { s: 'jihoon', f: 'flustered', t: "...Say it again. No. Don't. Don't say it again, I'll ruin it. I'll do a bit. I can feel a bit coming. Help me." },
          { n: "She kissed him so he couldn't do the bit." },
          { n: "He made a sound against her mouth like somebody setting down something heavy at the top of a lot of stairs, and the strip fell out of his hand onto the bench, and his hands came up into her hair, both of them, and he kissed her back the way he never had in an arcade, not like he was getting away with something. Like he'd been let in. The ring light clicked off on its timer and they didn't notice, and it was dark in the booth with the curtain shut and the sleigh bells coming through it, and he pulled her across his lap on the narrow bench, and Nana Two was squashed between them again, and neither of them moved him." },
          { s: 'jihoon', f: 'neutral', t: "...Nobody's watching. Nobody in the whole world." },
          { s: 'solar', f: 'neutral', t: "I'm watching." },
          { s: 'jihoon', f: 'flustered', t: "Yeah. Yeah, you are. That's— okay. That's the best one. That's the best version of that sentence there's ever been." },
          { s: 'jihoon', f: 'neutral', t: "Come home with me. Not like August. Not because I'm scared of a window. Because I want you to." },

          { place: "Kirijo Guesthouse · Jihoon's Room", time: 'Early Morning', bg: 'kirijo-flat', music: 'romance', soft: true },
          // BG: kirijo-guesthouse-room-winter-morning — the same small plain guest room on a December dawn: frost on the window glass, gray light, a single bed with the blanket pushed back, a white plush dog on the desk facing the wall, a clean windowsill with a few small kept things in a row.
          { n: "She woke because the light had changed. Gray and thin, coming through a window with frost on it in ferns from the corners, and the room was cold everywhere except where he was, which was all along her back, his arm over her waist and his breath slow on the back of her neck, and the radiator under the window knocking, once, twice, like somebody wanting to be let in, and then settling into its ordinary tick." },
          { n: "Nana Two was on the desk facing the wall. He'd done it again in the dark, she remembered, laughing, *he doesn't need to see this*, before the lamp went off and the laughing stopped." },
          { ifFlag: 'eqx-jihoon-shelf', then: [
            { n: "The windowsill had changed. The rice ball was gone from it; it was on a shelf up the hill under a lantern, where she'd helped put it. The folded pharmacy bag was still there, and his half of the April strip folded to three, and beside them, propped against the frost, last night's: four plain frames, his fist in the last one." }
          ], else: [
            { n: "The windowsill was the same. The gray stone of the rice ball in its clouded wrap, the pharmacy bag folded small, his half of the April strip folded to three. And propped against the frost beside them, last night's: four plain frames, his fist in the last one." }
          ] },
          { n: "He wasn't asleep. She felt it. He'd been awake a while, very still, the way you hold still when a bird has landed on you." },
          { s: 'jihoon', f: 'neutral', t: "...I watched you sleep. Is that creepy. That's creepy. I was watching *for* you. There's a difference. I've decided there's a difference." },
          { s: 'jihoon', f: 'sad', t: "I could stay. You know. When there's a door. If there's a door. I could just not go through it. Here, with you, where I'm not the thread. I'm only saying it because it's six in the morning and you can't see my face." },
          { choose: [
            { t: "(Turn over. Kiss him instead of answering.)", notes: 3, then: [
              { n: "She turned over under his arm so she could see his face, which was red and creased from the pillow and absolutely unguarded, and kissed him instead of answering, slow, and he let it be the answer for now, and she felt him decide to let it, and loved him a little for that, and didn't say so." }
            ] },
            { t: "That's yours, Jihoon. It isn't mine to answer.", notes: 2, flag: 'eqx-choose-jihoon', tally: { choose: 1 }, then: [
              { s: 'jihoon', f: 'sad', t: "...Yeah. I knew you'd say that. You always give me the heavy thing back. It's very annoying. It's the reason I'm still alive, probably. Don't tell anyone." }
            ] },
            { t: "Stay. Please. Here, with me.", notes: 3, flag: 'eqx-asked-jihoon', tally: { asked: 1, cakes: 1 }, then: [
              { n: "He went completely still. Then he pulled her in so hard against his chest she couldn't breathe for a second, his face in her hair, and laughed into it, shaky, the laugh from the canal wall in June, easy all the way down." },
              { s: 'jihoon', f: 'flustered', t: "...Okay. Okay. Yeah. You asked. You asked me. Nobody ever asks me to stay anywhere. They ask me to leave. Okay." },
              { n: "The radiator knocked twice under the window, politely, and went quiet." }
            ] }
          ] },
          { place: 'Kirijo Guesthouse · Kitchen Door', time: 'Early Morning', bg: 'kirijo-guesthouse-day', music: 'tender', soft: true },
          { n: "They went down the back stairs at half past six with their shoes in their hands and out through the kitchen, and on the step outside the door, under Cherry's lace doily, in his school coat, with two cups of barley tea steaming in the cold, sat Jungwon." },
          { n: "He didn't get up. He held one cup up to Solar without looking at her, and she took it, and it was hot all the way through, made exactly the way she drank it, and he must have been sitting there with it for a while, because he'd made it twice; the first one was on the step beside him, full and cold." },
          { s: 'jungwon', f: 'neutral', t: "...You're cold. Drink it." },
          { n: "He said it in Korean, the way he said things to her when he didn't want the rest of the world in the sentence. Then he reached into his coat and took out an egg sandwich in cling film and held it up behind him to Jihoon, still without turning round." },
          { n: "Jihoon looked at the sandwich. He took it. He stood on the kitchen step with it in his hand, in his crumpled ironed shirt, and his face did about five things." },
          { s: 'jihoon', f: 'neutral', t: "...See? Saint. I told you. I'm going to die of it." },
          { s: 'jungwon', f: 'neutral', t: "Breakfast is at seven. You're both late for it already." },
          { n: "He stood up and took his cold cup and went in past them through the kitchen door, and the lace swung behind him, and Solar stood on the step with the hot tea in both hands and felt every part of it at once, the warm and the cold and the boy at her shoulder and the boy who'd just gone in, and didn't know what she felt, except all of it, and drank the tea, because he'd made it, because he'd made it twice." }
        ] },
        { t: "You're Park Jihoon. My oldest friend. Nobody gets to be that but you.", route: 'friend', notes: 3, then: [
          { n: "He didn't move for a second. She watched it land, the way you watch a ball go over the net and drop on the line, and she watched him decide whether it was in." },
          { s: 'jihoon', f: 'neutral', t: "...Oldest." },
          { s: 'jihoon', f: 'neutral', t: "Oldest friend. That's a title. You know that's a title, right? That's the one nobody can take off me. Not Jungwon. Not anybody's mom. Not even you, now. You said it out loud. In a booth. There's a witness." },
          { n: "He looked at the strip in his hand. Then he laughed, and it came out of him a little wet and cracked down the middle and then, at the end, real, the laugh from the old mall with the broken stool, when they were six." },
          { s: 'jihoon', f: 'flustered', t: "Okay. Okay. I'm fine. I'm actually fine. That's the weird part. I thought I'd be— I'm fine. It's a good answer. It's the true one. I can tell when you're lying and you're not." },
          { s: 'jihoon', f: 'neutral', t: "One more strip. A stupid one. Bunnies. I want one where we're both making the worst face we've got." },
          { n: "They did. Four frames of the worst faces either of them had, the bunnies round the edge, him cross-eyed in two, her with her tongue out in three, both of them laughing too hard to hold a face in four, and he held the curtain shut the whole time with one fist without seeming to notice he was doing it, and tore that strip in half too, along the perforation, and gave her the half with three and four." },
          { place: 'Paulownia Mall · Game Panic', time: 'Night', bg: 'gamepanic-inside', soft: true },
          { n: "They mopped the rest of the floor together while the cabinets glowed. He did the half by the drums and she did the half by the door, and they met in the middle at the clean rectangle where the crane had been, and he stood in it and leaned on his mop and looked at her across the dark." },
          { s: 'jihoon', f: 'neutral', t: "I'm still going to look back. At the corner. Every time. That's not a romance thing. That was never a romance thing. That's a me thing. I've done it since before I knew what either of those were." },
          { s: 'jihoon', f: 'sad', t: "...Just so you know what you're signing up for. Oldest friend. It's a lifetime contract. There's no door out of it." }
        ] }
      ] },
      { n: "Later, she would think the walk was the part that mattered. The monorail at night or the hill road at dawn, his hands in his pockets, the strip in one of them; the corner where the street split; him going one way and her the other; and her stopping, and turning, and him already turned, half a street off, under the lamp, the way he always was, every time, in every world." },
      { n: "She was where he'd left her. She lifted her hand. He lifted his. Nobody else was on the street, and nobody needed to be." }
    ] }
  ]
});
