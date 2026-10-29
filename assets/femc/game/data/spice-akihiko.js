/* The spice batch, Akihiko (2026-10-24; Kat's ruling in CLAUDE.md and the lore bible: real tension, making out, sneaking
   into rooms, waking up together, the morning after; every scene cuts away before anything graphic). Loaded after the
   crush files. Formats: late nights core.js lateNightDue (FEMC_GAME_LINK_EXTRAS), moments core.js "Crushes", the morning
   after core.js glowIs. Housing: he's in the dorm, one floor up from her (living-nights.js aki-ln-landing); Mitsuru's room
   and the command room are on the fourth floor.
   Gating: only his romance route ('romance' / crush 'dating') gets the rooms and the nights; the summer's 'puppy' and
   'almost' get the almosts (the shirt, the door). Another romance at the same time (Haechan's rank 8, say) doesn't lock or
   soften anything here (Kat, 2026-10-24: both hold until the ending); where it shows, it's in ifTaken fallout lines, honest
   and torn, nobody a villain.
   Late nights (kind 'dorm'):
     sp-aki-ln-door      almost, 7/24-8/31, after the tower: walked to her door; Junpei's door opens
     sp-aki-ln-curfew    rank 7 romance, 9/2-12/20, quiet: the midnight knock, "tomorrow's strategy" (flag sp-aki-curfew)
     sp-aki-ln-roof      rank 7 romance, 9/3-10/3, quiet: the dorm roof after curfew, both sneaking up
     sp-aki-ln-caught    after the knock, 9/6-2/28, quiet: Mitsuru on the stairs, him behind the door (glow caught)
     sp-aki-ln-storm     rank 7 romance, 9/2-11/30, rain: the power cut, he checks on everyone and her last
     sp-aki-ln-upstairs  after being caught, 9/10-2/28, after the tower: she sneaks up to his room; morning on his floor
     sp-aki-ln-stay      rank 9 romance, 11/8-12/20, quiet: his room, the cut-away, breakfast (glow night)
     sp-aki-ln-snowed    rank 10 romance, 1/6-2/28, year goes on: her radiator, his blanket, the run he skips (glow night)
     sp-aki-ln-boxes     rank 14 romance, 2/27-3/4, year goes on: his room half packed, the last nights
   Moments: sp-aki-shirt (puppy/almost/dating, the laundry room), sp-aki-wraps (dating, taping her hands after practice),
   sp-aki-monorail (dating, the morning crush), sp-aki-equipment (dating, the boxing club's equipment room). Texts and the
   day-after lines are at the bottom. */
(() => {
  const W = window, X = (W.FEMC_GAME_LINK_EXTRAS ||= {});
  const add = (id, list) => { (X[id] ||= {}).lateNights = [...((X[id] || {}).lateNights || []), ...list]; };
  const C = W.FEMC_GAME_CRUSH, P = C.phases;
  const A = ph => ({ akihiko: ph });
  const ROOM = { place: "Iwatodai Dorm · Solar's Room", bg: 'solar-dormroom-night' };
  const HIS = { place: "Iwatodai Dorm · Akihiko's Room", bg: 'akihiko-bedroom' };
  // She's also on someone else's romance route (Haechan by name): the honest line, then the scene carries on.
  const torn = (hc, other) => ({ ifTaken: 'akihiko', then: [{ ifRomance: 'haechan', then: hc, else: other }] });

  add('akihiko', [
    /* ── Summer, almost: the door. ── */
    { id: 'sp-aki-ln-door', kind: 'dorm', rank: 5, crush: A(['almost']), after: '7/24', until: '8/31', when: 'tartarus', place: 'Iwatodai Dorm · 2F Hallway', bg: 'iwatodaidorm-hallway', time: 'Night · 1 AM', music: 'night', scene: [
      { n: "Back from the tower at one, with the green gone out of the sky and the heat come straight back into the building like it had only stepped out for a cigarette, and he walked her to her door, which was not on the way to his, which was a floor up, which they both knew and neither of them mentioned." },
      { n: "He'd taken a hit on the eleventh floor that she'd watched land. He was moving like it hadn't. At her door he stopped, and she stopped, and the hallway light did the thing it did in August where it buzzed like an insect trapped inside the glass, and his shirt was stuck to him in a long dark stripe down the middle of his back, and she was not looking at that." },
      { s: 'akihiko', f: 'neutral', t: "Left side. You kept it up all night. Every floor. I noticed." },
      { s: 'solar', f: 'neutral', t: "You noticed my left side." },
      { s: 'akihiko', f: 'blushing', t: "Your guard. Your left guard. I noticed your— that's not— your guard was good." },
      { n: "He was standing very close, the way he stood in the ring, close enough to read the next thing coming, and she could smell the tower on him, cold metal and ozone and under it the plain warm smell of him, soap and sweat and the tape on his hands, and he looked down at her mouth, and then, visibly, with real effort, at her forehead, as if her forehead were a referee." },
      { choose: [
        { t: "(Don't move. Let him decide.)", notes: 2, then: [
          { n: "She didn't move. He didn't either, for a long second, and then he did, an inch, his hand coming up to the doorframe beside her head, and she felt the warmth of his arm through the air before it got there, and her whole body went quiet and ready in a way it had never once gone in the tower." },
          { n: "Down the hall a door opened. Junpei, in boxers and a baseball cap and nothing else, holding an empty glass, stopped dead in his own doorway and looked at the two of them, and at the hand on the doorframe, and at the glass in his own hand, as if the glass might explain." },
          { s: 'junpei', f: 'surprised', t: "...Water. I'm getting water. I'm a guy getting water. I see nothing. I'm a ghost." },
          { n: "He walked backwards into his room and shut the door without getting any water at all. Akihiko took his hand off the doorframe like it was hot. She put her face in her hands and laughed into them, helplessly, silently, bent double, and he stood there red to the collar saying *it's not funny* over and over in a whisper that was laughing too, and in the end he said goodnight to her doorframe and went up the stairs two at a time, and missed one, and she heard it." }
        ] },
        { t: "Goodnight, senpai. Ice your ribs.", notes: 2, then: [
          { s: 'akihiko', f: 'surprised', t: "...You saw that." },
          { s: 'solar', f: 'neutral', t: "I see everything on your left side." },
          { n: "She shut the door on his face going red, and leaned on the back of it, and listened to him stand on the other side for one, two, three seconds, not going, and then go, slowly, up the stairs, and she slid down the door until she was sitting on the floor in the dark with the heat and the buzzing light under the door and her heart going like she'd climbed all twelve floors twice." }
        ] }
      ] }
    ] },

    /* ── Kat's favourite, part one: after curfew. ── */
    { id: 'sp-aki-ln-curfew', kind: 'dorm', rank: 7, route: 'romance', after: '9/2', until: '12/20', when: 'quiet', ...ROOM, time: 'Night · 12 AM', music: 'romance', scene: [
      { ifAfter: '10/4', then: [{ ifBefore: '10/25', then: [
        { n: "October had been quiet in the wrong way. The kitchen had been quiet. He came back from the hospital most nights with the visitor's sticker still on his coat and went straight up the stairs, and she'd stopped waiting up for him, mostly, and was lying awake not waiting up for him when, at twelve exactly, somebody knocked." }
      ], else: [
        { n: "Midnight. Curfew had been eleven. The dorm had gone to bed in its usual order, Ken first, then Fuuka, then Junpei loudly, then Mitsuru's door on the fourth floor, the last click of the night, and she was lying on top of her covers with a textbook open on her stomach not reading it when somebody knocked." }
      ] }], else: [
        { n: "Midnight. Curfew had been eleven. The dorm had gone to bed in its usual order, Ken first, then Fuuka, then Junpei loudly, then Mitsuru's door on the fourth floor, the last click of the night, and she was lying on top of her covers with a textbook open on her stomach not reading it when somebody knocked." }
      ] },
      { n: "Two knocks. Quiet, square, evenly spaced, the knock of a man who'd thought about how to knock on the way down the stairs and decided on two. She knew whose before she'd sat up. She opened the door in her sleep shirt and her socks, and he was standing in the hallway in a gray T-shirt and track pants with a spiral notebook held against his chest like a shield." },
      { s: 'akihiko', f: 'serious', t: "Tomorrow. Tartarus. I've been thinking about the formation. Strategy. I wanted to talk about tomorrow's strategy." },
      { s: 'solar', f: 'neutral', t: "At midnight." },
      { s: 'akihiko', f: 'serious', t: "It's very important strategy." },
      { n: "He said it with a completely straight face, which lasted until she looked at the notebook, and then at him, and raised one eyebrow by perhaps a millimeter, and then his face went the way his face went, all at once, from the collar up, and he stood there in her doorway at midnight burning like a stove ring and not leaving." },
      { s: 'akihiko', f: 'blushing', t: "...I did actually draw some diagrams." },
      { n: "He had. She let him in, and shut the door behind him with the care of somebody closing a door on an exam room, and he sat on the very edge of her bed as if it might go off, and opened the notebook on his knee, and there they were: little circles with initials in them, arrows, a box labeled SHADOW, and in the margin, small, in his blunt square capitals, *ask her about the left side*." },
      { s: 'akihiko', f: 'neutral', t: "So. Junpei goes in first. He always goes in first, it's the only thing he's reliable about. Then you, here. Then me—" },
      { n: "She sat down next to him to look. The mattress tipped them together. His arm was against hers from the shoulder to the elbow, warm through the thin cotton, and she watched him lose his place on the page, physically lose it, his finger stopping on an arrow and staying there like it had forgotten where the arrow went." },
      { s: 'solar', f: 'neutral', t: "And then you." },
      { s: 'akihiko', f: 'blushing', t: "Then me. Yeah. I go. Where you are. That's. That's the whole strategy, really. I could have just said that." },
      { choose: [
        { t: "(Close the notebook. Gently. On his finger.)", notes: 2, then: [
          { n: "She closed it on his finger. He looked down at it, trapped, and laughed, low, the real laugh, the one that came out of his chest when he'd been hit and thought it was fair, and she took the notebook off his knee and put it on the floor and he let her, and then there was nothing on his knee and nothing between them and he turned, finally, and looked at her, close, the way he looked at the bag before the first punch of the night." },
          { n: "He kissed her like he did everything, all the way, no feints. His hand came up to her jaw, rough at the knuckles from the tape and very careful, and she grabbed a fistful of his T-shirt to keep him there, and he made a sound into her mouth that she would think about in class for the rest of the week, and somewhere in the middle of it they stopped being two people sitting on the edge of a bed and became two people lying across it, his elbow braced by her head so as not to put his weight on her, which was so exactly like him she laughed against his mouth." },
          { s: 'akihiko', f: 'blushing', t: "What. What's funny." },
          { s: 'solar', f: 'happy', t: "You're spotting me." },
          { s: 'akihiko', f: 'happy', t: "...I am, aren't I. Ha. Force of habit. Do you want me to stop?" },
          { s: 'solar', f: 'flustered', t: "Don't you dare." }
        ] },
        { t: "You came down a whole floor for this.", notes: 2, then: [
          { s: 'akihiko', f: 'blushing', t: "Twenty-two stairs. I counted them. I counted them twice. On the second time I nearly went back up." },
          { s: 'solar', f: 'neutral', t: "Why didn't you?" },
          { s: 'akihiko', f: 'neutral', t: "Because I'd already counted them twice. I'm not counting them a third time to go back up. That's a waste of stairs." },
          { n: "That was the whole of his reasoning, and it was also, she understood, the most romantic thing anybody had ever said to her in this world, and she took his face in both her hands and kissed him for it, and the notebook slid off his knee and hit the floor with a slap like a referee's hand on the canvas, and neither of them went to pick it up." }
        ] }
      ] },
      { n: "He left at one. He was very firm about it. He said *one* at twelve-forty, and at twelve-fifty, and at one he stood up and stood at the door with his hand on the handle and his hair wrecked and the collar of his T-shirt stretched where she'd had hold of it, and said it again, *one*, like a man reading his own sentence aloud to make it binding." },
      { s: 'akihiko', f: 'neutral', t: "Five. Tomorrow. Out front." },
      { s: 'solar', f: 'happy', t: "I know where out front is." },
      { s: 'akihiko', f: 'blushing', t: "I know you know. I'm saying it so I'll go." },
      { n: "He went. She lay back on the bed in the dark with the notebook still on her floor, open now, to the page with the little circles, and the one that said S had an arrow beside it and the one that said A had an arrow pointing at the S, and in the margin, *ask her about the left side*, and she lay there grinning at the ceiling until her face hurt, and did not sleep at all, and was out front at five." },
      { flag: 'sp-aki-curfew' }
    ] },

    /* ── Sneaking up together: the roof after curfew. ── */
    { id: 'sp-aki-ln-roof', kind: 'dorm', rank: 7, route: 'romance', after: '9/3', until: '10/3', when: 'quiet', place: 'Iwatodai Dorm · Rooftop', bg: 'iwatodaidorm-roof-night', time: 'Night · 1 AM', music: 'romance', scene: [
      { phone: [{ from: 'akihiko', t: 'roof' }, { from: 'akihiko', t: 'bring the blanket. the blue one' }, { from: 'akihiko', t: 'socks. the stairs are loud in shoes' }], contact: 'Akihiko' },
      { n: "The roof door was meant to be locked after ten. It had a lock. It also had a doorstop that someone had painted the same green as the door, so you'd never see it unless you knew, and she had known since July without ever being told, and when she pushed the door open with her hip at ten past one he was already out there, sitting with his back against the water tank and his knees up, and he looked round at the sound of the door like a boy caught out of bed, which was exactly what he was." },
      { n: "September nights still held the day's heat in the concrete. She spread the blanket and sat down on it next to him, and he took the end of it and pulled it round both their shoulders even though neither of them was cold, because, he said, that was what the blanket was for, and she didn't argue with him, because she didn't want to." },
      { s: 'akihiko', f: 'neutral', t: "I used to come up here alone. To think. Three years. I never once thought about anything." },
      { s: 'akihiko', f: 'blushing', t: "Now I think about this. Every night. I've thought about this exact thing every night since the roof at school. You, the blanket, the tank. I planned it. Is that weird? That's weird." },
      { choose: [
        { t: "(Lie back on the blanket. Pull him down with you.)", notes: 2, then: [
          { n: "She lay back on the warm concrete and took him down with her by the front of his T-shirt, and he came, and the sky was a dark orange over the city and the stars were the few the city allowed, and he kissed her under them slowly, with nowhere to be at five for once in his life, propped on one forearm with his other hand spread flat on her stomach over her shirt, just resting there, warm, like he was keeping count of her breathing and losing it." },
          { s: 'akihiko', f: 'blushing', t: "Your heart's going. I can feel it. It's at about a hundred and forty." },
          { s: 'solar', f: 'flustered', t: "Are you timing my heart rate?" },
          { s: 'akihiko', f: 'happy', t: "...Yes. Sorry. It's a good number. It's a really good number." }
        ] },
        { t: "It's not weird. Kiss me where you planned it.", notes: 2, then: [
          { s: 'akihiko', f: 'surprised', t: "...Right. Okay. Right here, actually. By the tank. You'd be sitting where you're sitting." },
          { n: "He showed her. It turned out he'd planned it in some detail, the hand at the back of her neck, the tilt, the precise angle so the water tank would block the view from Mitsuru's window if Mitsuru, for some reason, at one in the morning, looked out, and he executed it exactly as planned and then, very clearly, ran out of plan, and what came after the plan was better, and much less tidy, and they lost the blanket entirely." }
        ] }
      ] },
      { n: "They went down at three, in their socks, the stairs held in a silence so careful it felt like holding a full glass of water, and on the third floor landing they heard a door, and froze, his hand flat on her back, and it was only the building settling, and he breathed out a laugh into her hair so quietly it was mostly air, and kissed her once more on the landing as if the landing were also on the plan." }
    ] },

    /* ── Kat's favourite, part two: almost caught. ── */
    { id: 'sp-aki-ln-caught', kind: 'dorm', rank: 7, route: 'romance', flag: 'sp-aki-curfew', after: '9/6', until: '2/28', when: 'quiet', ...ROOM, time: 'Night · 1 AM', music: 'romance', scene: [
      { n: "He'd stopped bringing the notebook. That had been the first thing to go. Then the knock had gone from two to one, and then to a sort of fingertip tap on the wood, a code that wasn't a code, and tonight he hadn't knocked at all, he'd just opened her door a crack at ten to one and said her name into the dark like a question, and she'd said his back like the answer, and he'd come in and shut it behind him with the slow care of a man disarming something." },
      { n: "Now he was on her bed with his back against the wall and she was in his lap, more or less, her knees either side of his hips and the duvet slipping, and his hands were inside the back of her sleep shirt, flat and warm against her spine, not going anywhere, just there, holding, as if her back were something he'd been told to keep upright and was taking very seriously, and she was kissing the side of his neck where it met his jaw and he had stopped being able to form sentences about two minutes ago." },
      { s: 'akihiko', f: 'blushing', t: "...Solar. Solar. Hang on—" },
      { n: "Footsteps. Slippers, on the stairs above, coming down from the fourth floor. Measured, unhurried, the walk of a woman who had been in the command room until one in the morning and had decided she'd earned a cup of tea. Every person in the dorm knew that walk. It was the sound the building made when it was about to be held accountable." },
      { n: "They looked at each other, in the dark, a foot apart, with their mouths still open." },
      { s: 'akihiko', f: 'surprised', t: "Mitsuru." },
      { n: "He moved like the tower. She'd never seen anybody get off a bed that fast who wasn't being thrown off it. In one movement he was up and across the room and flat against the wall beside her door, on the hinge side, exactly where it would swing back to hide him, his back pressed to the wallpaper, his arms at his sides, his T-shirt rucked up on one side where her hand had been, his chest going up and down like he'd done the stairs at a sprint, which, in a sense, he had." },
      { n: "The slippers reached her landing. They stopped. A thin line of light came under the door, a flashlight, held low. And then, because of course, because it was Mitsuru, a knock, two, precise, the same weight as his." },
      { s: 'mitsuru', f: 'neutral', t: "Solar? I'm sorry to wake you. I thought I heard voices." },
      { n: "She opened the door eight inches. Exactly eight. She held it there with her whole body, her shoulder against the edge and her bare foot braced against the bottom, and on the other side of the wood, less than a hand's width from her, Akihiko Sanada was standing perfectly still with his eyes shut, like a boy playing hide and seek who believes that if he can't see you, you can't see him." },
      { s: 'solar', f: 'neutral', t: "Sorry. Phone. I was. On the phone." },
      { s: 'mitsuru', f: 'neutral', t: "At one in the morning." },
      { s: 'solar', f: 'neutral', t: "...Different time zone." },
      { n: "It was the worst lie she had ever told in any world. She felt it come out of her mouth and lie down on the floor between them and die. Mitsuru looked at her for a long moment over the flashlight, at her hair, which she could only imagine, and at her sleep shirt, which was on backwards, she realized, and had been on backwards since about twelve-thirty, and her face did nothing at all." },
      { s: 'mitsuru', f: 'neutral', t: "I see." },
      { s: 'mitsuru', f: 'neutral', t: "Akihiko's door is open, and his light is on, and he isn't in his room. If you happen to see him on your call, perhaps you could tell him that the strategy meeting is at seven." },
      { s: 'mitsuru', f: 'neutral', t: "Seven in the evening. Not one in the morning." },
      { s: 'mitsuru', f: 'neutral', t: "Goodnight, Solar." },
      { n: "The slippers went on down the stairs, toward the kitchen, at exactly the same unhurried pace, and she shut the door, and turned the lock, and turned round, and he opened his eyes." },
      { choose: [
        { t: "(Laugh. Into his chest. Try very hard not to.)", notes: 2, then: [
          { n: "She didn't make it two steps. She walked straight into him and put her face in the middle of his chest and laughed into his T-shirt with her whole body, silently, helplessly, shaking with it, her fists in the cotton, and he caught her and held on and she felt him start to go too, his ribs jumping under her cheek, his chin on the top of her head, the two of them standing against the wall in the dark, shaking, making absolutely no sound, the kind of laughing that hurts because you can't let it out, and every time one of them nearly stopped the other one didn't, and it started again." },
          { s: 'akihiko', f: 'blushing', t: "Different time zone." },
          { s: 'solar', f: 'flustered', t: "Stop. Stop it. I'll die." },
          { s: 'akihiko', f: 'happy', t: "Your shirt's on backwards. She saw. She definitely saw. It's got the label—" },
          { n: "She put her hand over his mouth. He kissed her palm. That was it for both of them, and they slid down the wall together and sat on her floor in the dark with their legs tangled, wheezing, until the slippers came back up the stairs ten minutes later, unhurried, with the faint clink of a teacup, and went past her door without stopping, and went on up to the fourth floor, and the last click of the night came from up there." }
        ] },
        { t: "(Kiss him. Right there. She's gone.)", notes: 2, then: [
          { n: "She crossed the room and kissed him where he stood, flat against her wall with his eyes just open, and he made a sound like a man who'd taken a body shot and been happy about it, and his hands came up into her hair, and she could feel his heart under her palm going so hard it was practically knocking, and they didn't stop until they heard the slippers coming back up, with a teacup, and then they had to stop, because she started to laugh against his mouth and couldn't, and he started too, into her neck, and they held each other up against the wallpaper shaking with it, silently, like two people trying to hide in a very small closet." }
        ] }
      ] },
      { s: 'akihiko', f: 'serious', t: "I have to get back up there. Past her floor. She's going to be listening." },
      { s: 'solar', f: 'happy', t: "Twenty-two stairs." },
      { s: 'akihiko', f: 'happy', t: "Twenty-two stairs. In the dark. In socks. Past Mitsuru. Ha." },
      { s: 'akihiko', f: 'neutral', t: "...Worth it. For the record. Every one of them." },
      { n: "He went at two. She heard nothing. Not a stair, not a door, not a breath, and she lay in bed and was very impressed, and then, faintly, from somewhere above, there was a thump, and a word Akihiko Sanada did not say in front of first-years, and then nothing, and she pulled the duvet over her head and laughed into the pillow until she fell asleep." },
      { flag: 'sp-aki-caught' },
      { glow: 'akihiko:caught' }
    ] },

    /* ── A storm night: the power goes, and he checks on everyone. ── */
    { id: 'sp-aki-ln-storm', kind: 'dorm', rank: 7, route: 'romance', after: '9/2', until: '11/30', when: 'rain', ...ROOM, time: 'Night · 12 AM', music: 'tender', scene: [
      { n: "The power went at midnight with a sound like the whole building had been unplugged, which it had, and the rain, which had been going all evening, suddenly got very loud now there was nothing else to hear, and somewhere below a door opened and Junpei's voice said *okay, nobody panic* in a tone of extreme panic." },
      { n: "Ten minutes later there was a flashlight under her door. It had already been to every other door, she could tell. She'd heard it go up and down the hall, the soft knocks and the low voice, *you okay? you've got a light?*, Fuuka's door and Yukari's door and the room at the end, and now it was outside hers and it wasn't knocking. It was waiting." },
      { s: 'akihiko', f: 'neutral', t: "...Everyone else is fine. I checked. You're the last one." },
      { s: 'solar', f: 'neutral', t: "Am I on purpose?" },
      { s: 'akihiko', f: 'blushing', t: "Completely on purpose. Can I come in? The flashlight's dying. That's a real reason. I have a real reason." },
      { n: "He came in with the flashlight dying in his hand and sat on the floor with his back against her bed, because sitting on the bed in the dark seemed to him to require a level of nerve he hadn't brought down with him, and she slid down off the bed and sat on the floor next to him, and the flashlight gave up, and it was black, total, the rain coming down the window in sheets and the wind leaning on the glass." },
      { n: "In the dark she found she could hear him better. His breathing. The small creak of his shoulder when he moved it. And then his hand, on the floor between them, finding hers in the dark with no hurry at all, and turning it over, and his thumb going slowly along the inside of her wrist, over and over, the way you'd tape a hand, except there was no tape, there was only his thumb and her pulse under it, getting louder, and the rain." },
      { choose: [
        { t: "(Climb into his lap. In the dark it's easy.)", notes: 2, then: [
          { n: "In the dark it was easy. She climbed over and settled into his lap facing him with her knees on the floorboards either side of him and her arms round his neck, and he made a small surprised sound and then his arms came round her waist and pulled her in until there was no air left between them, and the lightning went off outside and showed her his face for half a second, eyes shut, open-mouthed, completely gone, and then the dark came back and she kissed him in it." },
          { s: 'akihiko', f: 'blushing', t: "I'm not usually. Like this. In the dark. I'm usually fine in the dark." },
          { s: 'solar', f: 'happy', t: "You're fine now." },
          { s: 'akihiko', f: 'blushing', t: "I'm not fine now. I'm the furthest from fine I've ever been. It's great." }
        ] },
        { t: "(Lean your head on his shoulder. Count the thunder.)", notes: 2, then: [
          { n: "She leaned her head on his shoulder and counted the seconds from the lightning to the thunder out loud, and he counted with her, and they got to four, and to three, and to two, and on two he turned his face into her hair and kissed the top of her head, and on one he kissed her temple, and when the storm was right on top of them and there was no gap at all between the light and the sound he kissed her mouth, and she stopped counting, and so did he, and the power came back at two and the light came on in her room and they both shut their eyes against it at once and swore at it, together, and laughed." }
        ] }
      ] },
      { n: "He stayed until the rain eased off, which was nearly four. He was asleep sitting up against her bed when it did, his head tipped back on the mattress, one hand still holding hers on the floor, and she put her blanket over him and didn't wake him, and at four-thirty his watch beeped and he woke up instantly, like the tower, and looked around her room with the face of a man who has no idea how he's come to be standing in a church, and saw her, and smiled, all the way, and went red, all the way, and fled." }
    ] },

    /* ── She sneaks up to him. After the tower, she can't sleep. ── */
    { id: 'sp-aki-ln-upstairs', kind: 'dorm', rank: 7, route: 'romance', flag: 'sp-aki-caught', after: '9/10', until: '2/28', when: 'tartarus', ...HIS, time: 'Night · 2 AM', music: 'romance', scene: [
      { n: "Two in the morning and the tower was still in her hands. It always took a while to leave. She lay in bed with her arms still feeling the weight of the naginata and her heart still running the twelfth floor, and after the third time she'd caught herself listening for a door that wasn't going to knock, she got up, and put on her socks, and went to do it herself." },
      { n: "Twenty-two stairs. She counted, which she realized halfway up she had caught from him like a cold. The ninth creaked. The fourteenth creaked worse. On the landing she stood in the dark outside Mitsuru's floor and listened to the building breathe, and nobody was coming down from anywhere, and she went along his hallway with her heart in her mouth, past Junpei snoring through his door like a small engine, to the door with the light still on under it." },
      { n: "She didn't knock. She tapped, with her fingertips, his own code back at him. The light under the door moved. There was a silence on the other side that went on long enough to be him freezing in the middle of a push-up, and then the door opened, and it was him, of course, in shorts and nothing else, his chest still going from whatever count he'd been doing, his hair wet at the temples, and he looked at her standing in his hallway in her socks and her sleep shirt, the right way round this time, and his face did something she wanted to keep." },
      { s: 'akihiko', f: 'surprised', t: "...You came up." },
      { s: 'solar', f: 'neutral', t: "You always come down. I thought I'd save you the stairs." },
      { s: 'akihiko', f: 'blushing', t: "That's. Yeah. Get in. Get in before Junpei rolls over." },
      { n: "His room was very him. Blue bedspread pulled tight enough to bounce a coin off. A pair of dumbbells on the rug in the exact spot you'd trip over them. A gym bag. The red gloves on the floor by the desk, laces knotted together. Everything squared off and sorted and folded except the bed, where he'd clearly been lying staring at the ceiling before he'd given up and started doing push-ups, the same as her, the same tower, the same twelve floors still running in him." },
      { s: 'akihiko', f: 'neutral', t: "I can't sleep after either. I never could. Three years I've just been doing push-ups at two in the morning like an idiot." },
      { s: 'solar', f: 'happy', t: "How many tonight?" },
      { s: 'akihiko', f: 'blushing', t: "Two hundred and twelve. I lost count when you knocked. I'd have kept going. I'd have done a thousand." },
      { choose: [
        { t: "(Push him down on the bed. Gently. He lets you.)", notes: 2, then: [
          { n: "She put two fingers on his bare chest, which was hot, and still damp, and pushed, very lightly, and he went down backwards onto his own tight-made bed like she'd thrown a punch he'd decided to take, and lay there looking up at her with his arms out, laughing at the ceiling, and she climbed on and kissed the laugh off him, and his hands came up and found the backs of her thighs and held on, and the tower went out of both of them, finally, like air out of a tire, and something else came in where it had been." }
        ] },
        { t: "(Get into his bed. Pull the covers up. Wait for him.)", notes: 2, then: [
          { n: "She walked past him and got into his bed and pulled his covers up to her chin and lay there, and he stood in the middle of his own room looking at her in his bed for a long time, his hands opening and closing at his sides like he didn't know what he was meant to do with them, and then he turned off the light, and in the dark she felt the mattress go down and his arm come round her waist from behind and his face go into the back of her neck, and his whole body let go against her all at once, a long breath out, like a fighter on the stool when the bell goes." },
          { s: 'akihiko', f: 'neutral', t: "...Okay. This is better than push-ups." }
        ] }
      ] },
      { n: "She meant to go back down at three. She meant it at three-thirty too." },
      { place: "Iwatodai Dorm · Akihiko's Room", time: 'Early Morning', bg: 'akihiko-bedroom', music: 'tender' },
      { n: "His watch went off at four-thirty. She felt him wake, all at once, the way he did, every muscle in him switching on at the same time like the lights in a gym, and then she felt him not get up. He lay there. She opened her eyes and he was on his side, propped on his elbow, looking at her in the gray light, his hair standing up on one side, a crease from the pillow down his cheek, the watch still beeping on his wrist, and he hadn't turned it off, and he didn't seem to know it was going." },
      { s: 'akihiko', f: 'neutral', t: "You talk in your sleep. Did you know that? You said *left*. Twice." },
      { s: 'solar', f: 'flustered', t: "I did not." },
      { s: 'akihiko', f: 'happy', t: "You did. I'm keeping it. Go back to sleep. I'll run. When I'm back you have to be gone, though. Junpei gets up at seven to steal my protein." },
      { n: "He kissed her forehead and got up and dressed in the dark and was gone at a quarter to five, and she lay in his bed in the smell of him for another hour pretending to sleep, and at a quarter to six she went down the twenty-two stairs in her socks with her hair everywhere and his gray club hoodie, which she had taken off the back of his chair without asking, and on the ninth stair from the bottom she met Aigis coming up." },
      { s: 'aigis', f: 'neutral', t: "Good morning, Solar. You are on the wrong floor." },
      { s: 'solar', f: 'neutral', t: "...Good morning, Aigis." },
      { s: 'aigis', f: 'happy', t: "I will file this under not my business. It is a large file. I have been told it is the most important file." },
      { glow: 'akihiko:sneak' }
    ] },

    /* ── The night: his room, and the morning after. Cuts away. ── */
    { id: 'sp-aki-ln-stay', kind: 'dorm', rank: 9, route: 'romance', after: '11/8', until: '12/20', when: 'quiet', ...HIS, time: 'Night · 1 AM', music: 'romance', scene: [
      { n: "November had got into the building through the window frames. His room was colder than hers, because he slept with the window open an inch on principle, a principle he'd never been able to explain to her, and she was sitting cross-legged on his bed in his club hoodie with her hands up the sleeves, and he was sitting at the other end with his back against the wall, and they'd been talking about nothing for an hour, the formation, the first-years, Junpei's new hat, and somewhere in the last ten minutes they had both stopped listening to what the other one was saying and started listening to something else." },
      { n: "He stopped mid-sentence. She didn't know which sentence. He looked at her across the bed with the desk lamp making half his face gold and the other half dark, and the look had nothing in it at all that was a joke, or a count, or a plan." },
      { s: 'akihiko', f: 'neutral', t: "Stay." },
      { s: 'akihiko', f: 'blushing', t: "Tonight. Not— I mean stay. If you want. I'm asking. I've been trying to ask for about an hour. I kept talking about Junpei's hat." },
      torn([
        { n: "There was Haechan. There was a whole conversation that belonged to Akihiko about that, in daylight, with her face, and he would get every word of it, or he'd had it already; she wasn't going to make it smaller by having it in her head in his bed. And Akihiko was asking her now, in his cold room, with his ears going red, and she loved him. That was true. That was the one thing in any of her worlds she'd never had to check." }
      ], [
        { n: "There was someone else, in this world, and that was a conversation that belonged to Akihiko, in daylight, with her face, and he'd get all of it, or he'd had it. He was asking her now anyway. She loved him. That was true, and it wasn't the only true thing, and he'd never once asked her to pretend it was." }
      ]),
      { choose: [
        { t: "(Unzip the hoodie. Slowly. Hold his eyes.)", notes: 3, then: [
          { n: "She took her hands out of the sleeves and found the zip at her throat and pulled it down, slowly, all the way, not looking away from him once, and he watched it go the way he watched a combination coming, with his whole body, very still, and when it was all the way down he came across the bed to her on his knees and stopped, an inch from her, and didn't touch her." },
          { s: 'akihiko', f: 'blushing', t: "Are you sure." },
          { s: 'solar', f: 'neutral', t: "I'm sure." },
          { s: 'akihiko', f: 'blushing', t: "...Okay. Okay. Me too. I've been sure since a roof." }
        ] },
        { t: "(Go to him. Take his face in your hands. Say yes.)", notes: 3, then: [
          { n: "She crossed the bed to him and took his face in her hands, the cold of his cheeks and the heat coming up under it, and said *yes* against his mouth before she kissed it, and felt him hear it, the whole length of him, like a bell somebody had struck from the inside." },
          { s: 'akihiko', f: 'blushing', t: "Yes like— you're sure." },
          { s: 'solar', f: 'happy', t: "Akihiko." },
          { s: 'akihiko', f: 'blushing', t: "Right. Yes. Sorry. I'm checking. I'll stop checking." }
        ] }
      ] },
      { n: "He kissed her like it was the first time, which it wasn't, and like it was the last, which it wasn't either, with his hands in her hair and then at her waist and then lifting the hem of his own hoodie off over her head with a care so total it was almost funny, the way you'd lift the lid off a pot to see if it was done, and she pulled his T-shirt up and he did the rest one-handed, and somewhere in the middle of the bed and the cold and the warm, he reached up without looking and switched off the desk lamp, and the last thing she saw was the window, open its one inch on its principle, and the streetlight through it, and his shoulder, and then she didn't need to see anything at all." },
      { place: 'Iwatodai Dorm · Dining Room', time: 'Morning', bg: 'iwatodaidorm-diningroom', music: 'joy' },
      { n: "Breakfast was a crime scene, and Akihiko was the only person in the room who didn't know it." },
      { n: "He'd been out for his run. Of course he had. He'd come back and showered and then, unprecedentedly, made breakfast, for everyone, which he had never once done in three years in this building: a mountain of scrambled eggs, enough toast to shingle a roof, a tower of chicken breast on a plate in the middle of the table like a trophy. He was standing at the stove in an apron that said KISS THE COOK, which belonged to nobody and had lived in the drawer since before any of them, and he was whistling." },
      { n: "Akihiko Sanada did not whistle. Nobody in the building had ever heard him whistle. Koromaru, under the table, had his ears straight up." },
      { s: 'akihiko', f: 'happy', t: "Morning! Morning, Fuuka. Morning, Koro. Good boy. Junpei, eggs. Have more eggs. Have mine." },
      { n: "He put his own plate in front of Junpei. Junpei looked at the plate. He looked at Akihiko, at the stove, whistling. Then very slowly, the way a man turns round in a horror film, he looked across the table at Solar, who was eating her toast in very small bites with her hair down over the side of her neck and her eyes on the toast." },
      { n: "She watched it happen on his face. The whole thing, start to finish, like a slot machine coming up three in a row." },
      { s: 'junpei', f: 'surprised', t: "...No." },
      { s: 'junpei', f: 'surprised', t: "No. No no no. Dude. DUDE. He made EGGS. He's WHISTLING—" },
      { n: "Yukari kicked him under the table so hard the whole table moved and the chicken tower swayed. Fuuka, who had not worked anything out at all, said *I think it's really nice that senpai made breakfast!* with total sincerity. Mitsuru turned the page of her newspaper without looking up from it, and said nothing, so precisely and for so long that the nothing became its own announcement." },
      { s: 'akihiko', f: 'neutral', t: "What? I made eggs. People make eggs. What's he yelling about?" },
      { ifTaken: 'akihiko', then: [{ ifRomance: 'haechan', then: [
        { n: "Haechan came down last. He stood in the doorway for one second with his hood up and looked at the eggs, and at the whistling, and at her, and she watched him put it together faster than Junpei had and without any noise at all, the way he heard rooms. He didn't say anything. He took a plate, and some toast, and sat down two seats from her, and slid the salt across to her without being asked, the way he did, and ate. It sat in her chest all morning, the salt. Nobody was a villain at that table. That was what made it hard to swallow." }
      ] }] },
      { choose: [
        { t: "(Ask Akihiko for more eggs. Sweetly. Watch Junpei die.)", then: [
          { s: 'solar', f: 'happy', t: "Could I have some more eggs, senpai?" },
          { s: 'akihiko', f: 'happy', t: "Ha! Course. Anything. Have all of them." },
          { n: "He piled her plate. Junpei put his forehead down on the table next to his stolen eggs and stayed there. Yukari said *I live here* to the ceiling, quietly, the way you'd say a prayer." }
        ] },
        { t: "(Keep your eyes on the toast. Survive.)", then: [
          { n: "She ate her toast. She ate all of it, in small bites, looking at nothing, while Junpei made a sound like a kettle and Akihiko asked him if he was all right and offered him a protein shake, and she survived breakfast, technically, and on the monorail afterward Akihiko held the strap above her head and was still, very quietly, whistling." }
        ] }
      ] },
      { glow: 'akihiko' }
    ] },

    /* ── Winter: her radiator dies, his blanket, the run he skips. ── */
    { id: 'sp-aki-ln-snowed', kind: 'dorm', rank: 10, route: 'romance', flag: 'year-goes-on', after: '1/6', until: '2/28', when: 'quiet', ...ROOM, time: 'Night · 12 AM', music: 'romance', scene: [
      { n: "Her radiator died on the coldest night of January, and it did it the way everything in that building died, with a long knock and a sigh and then nothing, and by midnight she could see her own breath in her room and was lying under every blanket she owned in two pairs of socks and his club hoodie, which she had stopped pretending was on loan." },
      { phone: [{ from: 'solar', t: 'my radiator is dead' }, { from: 'akihiko', t: 'on my way' }, { from: 'solar', t: 'its midnight' }, { from: 'akihiko', t: 'i know what time it is' }, { from: 'akihiko', t: 'im bringing the blanket' }], contact: 'Akihiko' },
      { n: "He came down with his own duvet over his shoulder like a sack of rice and a hot-water bottle in one hand and the wrench from the boiler room in the other, and spent eleven minutes on his knees in front of her radiator with the wrench, swearing at it under his breath, very politely, as if it were a referee, before he admitted defeat and stood up and looked at the bed, and at her in it, and at the duvet over his shoulder." },
      { s: 'akihiko', f: 'blushing', t: "It's not fixable. Tonight. I'll get Mitsuru to call somebody. Tonight, though. Tonight's just. It's very cold." },
      { s: 'solar', f: 'happy', t: "So get in." },
      { s: 'akihiko', f: 'blushing', t: "...Right. For warmth. It's a practical—" },
      { s: 'solar', f: 'happy', t: "Akihiko. Get in the bed." },
      { n: "He got in the bed. With both duvets on top and the hot-water bottle at their feet and his arms round her and her cold nose in the warm hollow of his throat, which made him yelp, and then laugh, and then hold her tighter, the bed was the warmest place in the city, and they stopped talking about the radiator, and then stopped talking, and the snow went on falling past the window in the streetlight, slow and fat and silent, and she didn't notice when it stopped." },
      { choose: [
        { t: "(Kiss him until neither of you is cold.)", notes: 2, then: [
          { n: "She kissed him until neither of them was cold, which didn't take as long as January wanted it to, and then went on after, unhurried, under the two duvets in the dark, with all the time in the world, and his hands were warm now everywhere they went, and there was nowhere he wasn't careful, and nowhere she wanted him to be, and the radiator stayed dead, and nobody in that bed missed it." }
        ] },
        { t: "(Fall asleep on him. Let him have you.)", notes: 2, then: [
          { n: "She fell asleep on his chest, more or less mid-sentence, with his heart under her ear going slow and steady as a clock, and the last thing she felt was his hand in her hair and the deep breath he let out when he realized she was asleep, like a man who'd been holding something heavy for a long time and had finally been allowed to put it down." }
        ] }
      ] },
      { place: "Iwatodai Dorm · Solar's Room", time: 'Early Morning', bg: 'solar-dormroom-day', music: 'tender' },
      { n: "His watch went off at four-thirty. She felt him wake up all at once, the way he always did, and she waited for the bed to tip and the cold to come in where he'd been." },
      { cg: 'romance-akihiko-snow-morning' },
      { n: "It didn't. He reached over her, turned the watch off on his own wrist without looking at it, and put his arm back exactly where it had been, and his face back in her hair, and lay still." },
      { s: 'solar', f: 'surprised', t: "...You're not running." },
      { s: 'akihiko', f: 'neutral', t: "It's snowing." },
      { s: 'solar', f: 'neutral', t: "You ran in a typhoon. In September. Junpei filmed it." },
      { s: 'akihiko', f: 'neutral', t: "Yeah." },
      { s: 'akihiko', f: 'happy', t: "...I'm not running today. Three years and I've never once not. I'm not today. Don't make a thing of it. Go back to sleep." },
      { n: "She went back to sleep, and made a thing of it in her heart, privately, enormously, for the rest of her life." },
      { place: 'Iwatodai Dorm · Lounge', time: 'Morning', bg: 'iwatodaidorm-livingroom', music: 'joy' },
      { n: "By eight the whole dorm knew. It wasn't her. It wasn't him. It was the front step, which had a perfect unbroken blanket of fresh snow on it at seven when Junpei went out to get the paper for Mitsuru, no footprints, none, for the first time since anybody could remember, and Junpei had stood on the threshold in his slippers looking at the unbroken snow like a detective looking at a body." },
      { s: 'junpei', f: 'serious', t: "Senpai didn't run." },
      { s: 'junpei', f: 'serious', t: "Senpai. Didn't. Run. Somebody call a doctor. Somebody call his MOM. Fuuka, check his room—" },
      { s: 'yukari', f: 'neutral', t: "Nobody is checking his room, Junpei." },
      { n: "Yukari said it to her coffee. Then she looked up, across the lounge, at Solar coming down the stairs with wet hair and two pairs of socks on and a gray hoodie that came down to her knees, and Yukari's eyebrows went up, slowly, both of them, all the way, and stayed there, and she didn't say a single other word, and didn't have to." },
      { glow: 'akihiko' }
    ] },

    /* ── The last nights: his room half packed. ── */
    { id: 'sp-aki-ln-boxes', kind: 'dorm', rank: 14, route: 'romance', flag: 'year-goes-on', after: '2/27', until: '3/4', when: 'quiet', ...HIS, time: 'Night · 1 AM', music: 'tender', scene: [
      { n: "There were boxes. That was the first thing. She'd known there would be, he'd told her, the university dorm in April, the gloves and the dumbbells and the three years of protein shakers, and still she stood in his doorway at one in the morning in her socks and looked at the boxes stacked against his wall, labeled in his blunt square capitals, BOOKS, GYM, GYM 2, MISC (GYM), and felt it go into her like cold water." },
      { n: "He was sitting on his stripped mattress with a roll of tape in his hand, not taping anything. He looked up. He didn't say *you came up*. He didn't need to anymore. He moved over." },
      { ifHeading: 'stay', then: [
        { s: 'akihiko', f: 'neutral', t: "It's twenty minutes on the train. I timed it. I'll run it. I'll be back here so often Mitsuru will charge me rent." },
        { s: 'akihiko', f: 'blushing', t: "You're staying. I still can't— you're staying. I keep saying it out loud when nobody's in here. Like an idiot." }
      ], else: [
        { s: 'akihiko', f: 'neutral', t: "I'm packing boxes. You're not packing anything. You don't have anything to pack. That's the part I keep getting stuck on." },
        { s: 'akihiko', f: 'sad', t: "Don't. I'm not asking. I said whatever you decide and I meant it. I'm just. Taping boxes. Badly. Come here." }
      ] },
      { choose: [
        { t: "(Take the tape out of his hand. Push him back on the bare mattress.)", notes: 2, then: [
          { n: "She took the tape out of his hand and dropped it in GYM 2 and pushed him backwards onto the bare mattress, which creaked, and climbed on, and he looked up at her with his arms out and his face doing everything at once, laughing and not, and she kissed him with the whole year in it, the ruler and the bread and the umbrella and the roof and twenty-two stairs in the dark, and he kissed her back the same way, as if they'd both decided at the same second to spend everything they had left tonight, all at once, all of it." }
        ] },
        { t: "(Help him tape the boxes. Slowly. Make it last.)", notes: 2, then: [
          { n: "She helped him tape the boxes. It took a very long time, because every time she held a flap down for him he kissed her, and every time he tore the tape she kissed him, and by GYM 2 they had stopped taping entirely and were sitting on the floor between the boxes with his back against MISC (GYM) and her in his lap and the tape stuck to her sock, and neither of them had any intention of finishing, and both of them knew it, and that was the point." }
        ] }
      ] },
      { n: "She fell asleep in his arms on the bare mattress under his coat, because the duvet was already in a box, and the last thing she heard was him, very quietly, counting the boxes out loud in the dark, and getting to the end, and starting again, as if a number that kept going was a kind of promise." }
    ] }
  ]);

  /* ── Moments (crush.js format): the almosts and the days. ── */
  C.moments.push(
    // Post-workout: he changes his shirt and she loses her sentence. Smug, for once.
    { id: 'sp-aki-shirt', who: 'akihiko', crush: A(['puppy', 'almost', 'dating']), slot: 'evening', after: '7/24', until: '10/2',
      place: 'Iwatodai Dorm · Laundry Room', time: 'Evening', bg: 'iwatodaidorm-laundryroom', scene: [
        { n: "She was folding towels. It was her week on the towels, Mitsuru's rota said so in Mitsuru's handwriting, and she was standing at the folding table in the laundry room with the machine going behind her and a towel in her hands, and he came in from his evening run soaked to the skin, the way he came back from every run in that heat, like he'd been pulled out of the bay." },
        { s: 'akihiko', f: 'neutral', t: "Is that one going? Can I put this in with it?" },
        { s: 'solar', f: 'neutral', t: "It's towels. Throw it in. So, I was going to ask you, the formation on Saturday, if Yukari's going to be at the back then I think I should probably be—" },
        { n: "He peeled his shirt off over his head in one movement, the way you'd pull off a wet sock, and threw it into the machine, and stood there in the doorway of the laundry room in his running shorts with his chest going and the light from the tube on him, every line of him put there by three years of five in the mornings, the old tape marks pale against his ribs, a bead of sweat going down the middle of his stomach, slowly, in no hurry, the way she wasn't, apparently, going to be finishing her sentence." },
        { n: "She stood there with the towel. She had been saying something. It was important, she remembered that it had been important. It had been about Yukari. Or Saturday. She had no idea what Saturday was." },
        { n: "He waited. He reached past her for a dry shirt off the pile on the dryer, a clean one of his, and didn't put it on. He just held it. And then, slowly, she watched it dawn on him, what had happened to her sentence, and where it had gone, and his face did something she had never once seen it do in any light, in any room: it went smug." },
        { s: 'akihiko', f: 'happy', t: "...You stopped talking." },
        { s: 'solar', f: 'flustered', t: "I did not stop talking." },
        { s: 'akihiko', f: 'happy', t: "You stopped in the middle of *be*. You said *I should probably be* and then you looked at me and you stopped. Ha!" },
        { s: 'akihiko', f: 'happy', t: "I'm going to remember this. I'm going to think about this every time Junpei beats me at anything." },
        { ifCrush: A('dating'), then: [
          { choose: [
            { t: "(Drop the towel. Put your hand flat on his stomach. Watch the smug go.)", then: [
              { n: "She dropped the towel. She put her hand flat on his stomach, low, right where the bead of sweat had been going, and his whole body jumped under it like she'd touched a live wire, and the smug went off his face like a light, and his mouth opened, and nothing came out of it at all." },
              { s: 'solar', f: 'happy', t: "You stopped talking." },
              { s: 'akihiko', f: 'blushing', t: "That's. That's not— that's cheating—" },
              { n: "She kissed him against the dryer, which was warm and going, and he held onto the edges of it behind him like a man holding the ropes, and the clean shirt fell on the floor and stayed there, and when Junpei came in ten minutes later with his own laundry they were folding towels, both of them, very fast, very badly, on opposite sides of the table, and Akihiko still didn't have a shirt on." },
              { s: 'junpei', f: 'neutral', t: "...You guys are folding the same towel." }
            ] },
            { t: "(Pick the towel back up. Say nothing. Let him have this one.)", then: [
              { n: "She let him have it. She picked the towel back up and folded it into a very precise square and handed it to him, and he took it, still grinning, and put the shirt on finally, and it was on backwards, and she didn't tell him, and he wore it like that all through dinner, and every time he caught her looking at it he grinned again." }
            ] }
          ] }
        ], else: [
          { n: "She threw the towel at his face. He caught it, of course he caught it, one hand, without looking, and that made it worse, and she walked out of the laundry room with her face on fire and went upstairs and lay face down on her bed and said a word into the pillow that she'd never once said out loud in this dorm, and downstairs, faintly, through two floors, she heard him laugh." }
        ] }
      ] },

    // Taping her hands, after practice, months after the first time.
    { id: 'sp-aki-wraps', who: 'akihiko', crush: A('dating'), slot: 'after', schoolOnly: true, after: '9/8', until: '12/12',
      place: 'Gekkoukan High · Boxing Club', time: 'After School', bg: 'gekkoukan-boxing-club', cast: { kondo: 'Kondo' }, scene: [
        { n: "The first-years had gone. The club smelled the way it always smelled after practice, of canvas and rubber and sweat gone cold, and the heater in the corner was ticking, and he was sitting on the edge of the ring with the red wraps in his lap, the faded ones, the ones from June, rolling them up tight between his palms." },
        { s: 'akihiko', f: 'neutral', t: "Hand." },
        { n: "Same word. Same as June. She held out her right hand and he took it by the wrist and turned it over, and it was not the same as June, not in any way, because in June she hadn't known yet what his hands felt like anywhere else, and now she did, and so did he, and they both knew the other one knew, and the room went very quiet around that." },
        { n: "Three times round the wrist. He didn't count out loud this time. His thumb held the tension flat against the inside of her arm where the skin was thin and her pulse was right there under it, and she could see him feel it, the speed of it, the way his eyes went still and his jaw moved once. Across the back of the hand. Between the fingers, little finger first. Slower than June. Much slower. As if he were trying to make it take all afternoon." },
        { n: "Nobody was breathing properly. She could hear the heater and the wrap going round, the soft rasp of the cotton, and under it his breath, held, let out, held, and hers doing the same thing, out of time with his and then, without either of them deciding, in time." },
        { s: 'akihiko', f: 'neutral', t: "...Too tight?" },
        { s: 'solar', f: 'neutral', t: "No." },
        { s: 'akihiko', f: 'neutral', t: "You'd say." },
        { s: 'solar', f: 'neutral', t: "I'd say." },
        { n: "He finished the right. He smoothed the end down with his thumb and didn't let go of her hand. He turned it over, palm up, and looked at the inside of her wrist where the wrap began, the strip of bare skin above it, and bent his head and kissed it, there, once, on the pulse, slowly, with his eyes shut, like a man signing something he'd read all the way through." },
        { choose: [
          { t: "(Hold out the other hand. Don't say anything.)", then: [
            { n: "She held out the left. He looked up at her, and whatever he saw made him swallow, and he took it and started again, three times round, and this time when he got to the end he kissed the inside of that wrist too, and then her palm, and then she had her wrapped hands in his hair and he was standing up off the ring apron and she was backed against the corner post with the rope at her shoulder blades, and he was kissing her the way he hit the bag at the end of a session when nobody was watching, all of it, nothing held back, his hands either side of her on the top rope." }
          ] },
          { t: "(Pull him in by the collar with your wrapped hand.)", then: [
            { n: "She hooked her wrapped fingers into the collar of his T-shirt and pulled, and he came, the way he'd come into a clinch, all at once, and she kissed him on the edge of the ring with her taped hand fisted in his shirt, and he made a sound into her mouth like he'd been hit somewhere he'd forgotten he had, and his arm went round her waist and lifted her clean off the canvas and up onto the apron so she was taller than him, and he kissed her from below with his head tipped back and his eyes shut." }
          ] }
        ] },
        { n: "The door went. A first-year, Kondo, the small earnest one with the haircut, back for the phone he'd left on the bench, standing in the doorway with his mouth open looking at his captain with a girl in the corner of the ring." },
        { s: 'kondo', t: "I. Phone. My phone, senpai. Sorry, senpai." },
        { s: 'akihiko', f: 'serious', t: "Fifty skips, Kondo." },
        { s: 'kondo', t: "...Now, senpai?" },
        { s: 'akihiko', f: 'serious', t: "Outside. In the corridor. Count them out loud. All fifty." },
        { n: "Kondo took his phone and went and did fifty skips in the corridor, counting out loud, very fast, in a voice that cracked on thirty, and Akihiko listened to every one of them with his forehead on her shoulder, shaking, and when Kondo got to fifty and his footsteps went off down the corridor at a run, Akihiko said *good form* into her collarbone, and she laughed so hard she had to hold onto the rope." }
      ] },

    // The morning crush: rain, the monorail, his hand at her back.
    { id: 'sp-aki-monorail', who: 'akihiko', crush: A('dating'), slot: 'early', schoolOnly: true, weather: ['rain'], after: '9/3', until: '11/28',
      place: 'Iwatodai Station · Monorail', time: 'Early Morning', bg: 'train-car-inside', scene: [
        { n: "Rain, and the whole of Iwatodai on the same monorail with its umbrellas. They got on last and got pushed to the back, against the door that didn't open on this side, and the carriage kept filling until there was no space between anybody, and she ended up with her back against the glass and Akihiko in front of her with his forearm braced on the door above her head, a wall between her and everybody, which he did in crowds without thinking, and which he was very much thinking about now." },
        { n: "The train lurched out of the station. He swayed into her. He was warm through his blazer and damp at the shoulders and so close she could see a cut on his jaw from shaving in a hurry, and his free hand, the one that wasn't holding the door, found the small of her back under the hem of her blazer, flat, just there, holding her steady against the sway, over her shirt, the heat of it going right through." },
        { s: 'akihiko', f: 'blushing', t: "...Crowded." },
        { s: 'solar', f: 'neutral', t: "Very." },
        { n: "His thumb moved. Once. A small slow line along the dip of her spine, through the cotton, and back. Nobody in the carriage could see it. A salaryman's newspaper was against Akihiko's shoulder and a first-year's umbrella was dripping on her shoe and nobody in the whole steaming carriage could see his thumb going along her back, slowly, over and over, all the way across the bay, and she stood very straight against the glass and looked at his collar and did not breathe properly once between Iwatodai and Port Island." },
        { n: "At the station he stepped back to let her off first, and his face was perfectly normal, and his ears were the color of a postbox, and he said *see you at lunch* to the platform, and walked into a pillar." }
      ] },

    // The equipment room: mats, jump ropes, the door.
    { id: 'sp-aki-equipment', who: 'akihiko', crush: A('dating'), slot: 'after', schoolOnly: true, after: '10/26', until: '12/19',
      place: 'Gekkoukan High · Boxing Club', time: 'After School', bg: 'gekkoukan-boxing-club', scene: [
        { n: "The boxing club's equipment room was a cupboard with ambitions: a narrow slot behind the ring stacked to the ceiling with folded mats, crates of jump ropes, a broken speed bag, the smell of thirty years of rubber. He'd sent her in to get the focus mitts. Then he'd come in after her to help her find them. They were on the hook by the door, at eye level, in plain sight, and he had walked straight past them." },
        { s: 'akihiko', f: 'neutral', t: "...They're not here." },
        { s: 'solar', f: 'neutral', t: "They're on the hook. Behind you." },
        { s: 'akihiko', f: 'blushing', t: "I know they're on the hook." },
        { n: "He pulled the door to behind him, not shut, just to, and the room went dim and narrow and full of him, and she had her back to the stack of mats, which gave, softly, when he leaned in, and he kissed her with one hand on the mats by her head and the other at her hip, and the mats sighed behind her like something breathing out, and outside the door the first-years were doing their rounds on the bags, thud, thud, thud, a rhythm going on without him." },
        { n: "She got her hands up under the back of his T-shirt. His skin was hot from the warm-up and he flinched at her cold fingers and then leaned into them, and she felt him laugh into her mouth, and then not laugh, his breath going ragged, his forehead dropping to hers, and somewhere on the other side of the door the thudding stopped." },
        { s: 'akihiko', f: 'serious', t: "...They stopped." },
        { s: 'solar', f: 'happy', t: "You stopped calling the rounds." },
        { s: 'akihiko', f: 'surprised', t: "I stopped calling the rounds." },
        { n: "He grabbed the focus mitts off the hook and went out like a man going into the ring, red to the hairline, his T-shirt untucked at the back, and shouted *TIME* at the first-years so loudly that two of them jumped, and *again, from the top, what are you all looking at*, and she stayed in the equipment room a full minute with her back against the mats, fixing her hair in the dark by feel, before she came out with an armful of jump ropes nobody had asked for." }
      ] }
  );

  /* ── Texts, late: spicier now (by phase). ── */
  const T = W.FEMC_GAME_TEXTS;
  if (T) {
    const ak = t => ({ from: 'akihiko', t });
    (T.ambient ||= []).push(
      { id: 'sp-tx-aki-form', thread: 'akihiko', from: '7/26', to: '8/30', slot: 'late', crush: A(['almost']), msgs: [
        ak('you looked good tonight'), ak('your form'), ak('i mean your form looked good. on the eleventh floor'), ak('that came out wrong')
      ], reply: [
        { t: 'which part came out wrong', crush: A(1), then: [ak('...'), ak('none of it'), ak("that's the problem. goodnight")] },
        { t: 'u looked good too', crush: A(1), then: [ak('my form?'), ak('...'), ak("i'm going to do push-ups now. a lot of them")] }
      ] },
      { id: 'sp-tx-aki-stairs', thread: 'akihiko', from: '9/5', to: '10/3', slot: 'late', crush: A('dating'), msgs: [
        ak('are you awake'), ak("i'm on the stairs"), ak('the ninth one creaks. i found out the hard way'), ak('coming down?')
      ], reply: [
        { t: 'door is unlocked', then: [ak('...'), ak('ok'), ak("i'm skipping the ninth")] },
        { t: 'go to bed sanada', then: [ak('i am in bed'), ak('i lied. i was on the stairs'), ak("i'm going back up. slowly. so you can change your mind")] }
      ] },
      { id: 'sp-tx-aki-notes', thread: 'akihiko', from: '10/26', to: '12/18', slot: 'late', crush: A('dating'), msgs: [
        ak("i've got tomorrow's strategy"), ak('notes. diagrams'), ak('come up and look at them')
      ], reply: [
        { t: "that's not what that means and u know it", then: [ak('i know'), ak('come up anyway'), ak('there are actual diagrams. i drew a shadow')] },
        { t: 'on my way', then: [ak('skip the ninth stair'), ak('and the fourteenth'), ak('i counted')] }
      ] },
      { id: 'sp-tx-aki-hoodie', thread: 'akihiko', from: '1/7', to: '2/24', slot: 'late', crush: A('dating'), msgs: [
        ak('you have my hoodie'), ak("i'm not asking for it back"), ak("i'm saying i know where it is. and i'm thinking about it")
      ], reply: [
        { t: "it's on me rn", then: [ak('...'), ak('that was a mean thing to send'), ak("i'm putting my phone in a drawer")] },
        { t: 'come get it', then: [ak("that's even meaner"), ak('give me four minutes')] }
      ] }
    );
  }

  /* ── The day after (core.js glowIs): the school and the dorm notice. ── */
  const G1 = 'akihiko';
  const add2 = C.add;
  add2('chatter.morning', [
    { t: "Is it me or is Sanada-senpai smiling? At nothing? On purpose?", glow: G1, crush: A('dating') },
    { t: "He said good morning to the vice-principal. The vice-principal looked frightened.", glow: G1, crush: A('dating') }
  ]);
  add2('lunch.clear', [
    { t: "Lunch on the roof. Maki looked at her over a carton of milk for a long time and said *you're glowing*, and Sonoda said *she's glowing*, and Solar said she'd slept well, and Maki said *that's not what glowing means* and wrote something in the margin of Sonoda's English notebook.", glow: G1, crush: A('dating') }
  ]);
  add2('lunch.rain', [
    { t: "Lunch in the corridor, rain on the glass. Ōta from the fan club walked past her, stopped, walked back, looked at her face very carefully, and went away again without a word, at speed, in the direction of the club room.", glow: G1, crush: A('dating') }
  ]);
  add2('classQuiet', [
    { t: "The lesson went by in warm pieces. Twice the teacher said her name and twice she came back from somewhere very far away with a stair in it, and the second time Maki leaned forward and whispered *you are glowing like a lamp, it's disgusting, I'm happy for you*.", glow: G1, crush: A('dating') }
  ]);
  add2('home', [
    { t: "Home. Fuuka, at the dining table, looked up from her laptop and said *you look really happy today, leader!*, and then, because Fuuka was Fuuka, *did something nice happen?*, and Yukari, beside her, made a sound into her tea like a kettle reaching the boil.", glow: G1, crush: A('dating') }
  ]);
  add2('evening.sub', [
    { t: "Yukari is on the sofa. She looks at you. She keeps looking at you. She says nothing at all, with her whole face. What now?", glow: G1, crush: A('dating') },
    { t: "Junpei is on the sofa with a small spiral notebook with a baseball on the cover, writing in it very fast. He covers it when you come in. What now?", glow: 'akihiko:caught', crush: A('dating') }
  ]);
  add2('late.plain', [
    { t: "She lay in bed and could still feel the stairs in her calves, twenty-two of them, and somewhere above her a floor creaked, once, as if someone up there was lying awake thinking about the same number.", glow: G1, crush: A('dating') }
  ]);
})();
