/* Sebastian · 0 The Fool. Arrives on the 6/8 full moon. Format notes are at the top of akihiko.js. */
FemcSocial.define({
  id: 'sebastian', name: 'Sebastian', short: 'Sebastian', arcana: 'Fool', numeral: '0', from: 'Stardew Valley',
  arrives: '6/8',
  home: { place: 'Paulownia Mall · Game Panic', slot: 1, days: [2, 4, 6], hint: 'Evenings on Tuesdays, Thursdays and Saturdays, under the Game Panic awning. Especially if it is raining.' },
  approach: "A guy in a black hoodie is losing at an arcade machine in the back of Game Panic, with the air of someone who would rather be in a basement.",
  invite: {
    ask: ["hey. you free?", "want to hang out? no pressure", "got a new campaign idea. come over?", "its raining. awning?", "game panic. the cabinet in the back is free for once", "found a frog. unrelated. you around?", "bored. want to beat me at something", "arcade? i have like 40 coins and nobody to lose them to"],
    ok: ["cool. see you soon", "ok. ill be under the awning", "nice. ill save you the good stool"],
    no: ["no worries", "ok. another time", "thats fine. the rain will still be here"]
  },
  hangouts: [
    [
      { n: "Rain again, steady and warm, the awning ticking like a clock. Sebastian was leaning on the wall with his hood up, watching the street go silver, and he moved over about four inches when she ducked in, which for him was practically a speech." },
      { s: 'sebastian', f: 'neutral', t: "Rain smells different here. Like metal. And fried food. And bus." },
      { choose: [
        { t: "What does it smell like at home?", notes: 3, then: [
          { s: 'sebastian', f: 'neutral', t: "Mud. Pine trees. The lake. The mountain, if the wind's coming down off it." },
          { s: 'sebastian', f: 'happy', t: "...I didn't know I knew that until just now." }
        ] },
        { t: "Bus is a smell?", notes: 2, then: [{ s: 'sebastian', f: 'happy', t: "Bus is the strongest smell. Bus is winning." }] },
        { t: "I hadn't noticed.", notes: 1, then: [{ s: 'sebastian', f: 'neutral', t: "Yeah. You live here. You stop noticing." }] }
      ] },
      { n: "They stood there until the gutters stopped running. Across the street a takoyaki stall pulled its shutter halfway down, and for a minute the whole street smelled exactly the way he'd said." }
    ],
    [
      { n: "Inside Game Panic it was all noise and blue light and the smell of hot plastic. Sebastian had claimed the fighting cabinet in the back corner, the one nobody used because the stick stuck, and was losing to the computer with total, silent dignity." },
      { s: 'sebastian', f: 'neutral', t: "The stick sticks. That's my excuse. Want to play?" },
      { n: "He slid a coin across the control panel without looking at her." },
      { choose: [
        { t: "(Play to win.)", notes: 3, then: [
          { n: "She won. Twice. The second time with a combo she was fairly sure was an accident." },
          { s: 'sebastian', f: 'happy', t: "...Okay. Okay. Again. I'm not mad. I'm learning." }
        ] },
        { t: "(Let him win.)", notes: 1, then: [{ s: 'sebastian', f: 'serious', t: "You stopped blocking. I saw that. Don't do that. That's worse than losing." }] },
        { t: "Show me how the stick sticks.", notes: 2, then: [{ s: 'sebastian', f: 'neutral', t: "You have to pull it like it owes you money. Here." }] }
      ] },
      { n: "They played until the coins ran out, and then stood behind a pair of middle schoolers for a while, not saying anything, silently judging their technique, which turned out to be better than theirs." }
    ],
    [
      { n: "The rain had stopped, and Sebastian wasn't under the awning. He was crouched by the gutter behind the mall with his hood down and his phone held out as a flashlight, very, very still." },
      { s: 'sebastian', f: 'serious', t: "Don't step there. There's one by your shoe." },
      { n: "There was. A tiny brown frog, no bigger than a coin, sitting in a puddle like it had paid rent on it." },
      { choose: [
        { t: "How many so far?", notes: 3, then: [
          { s: 'sebastian', f: 'happy', t: "Five. Maybe four. One of them might be the same guy twice. He moves around a lot." },
          { n: "He said it with the gravity of a scientist reporting results. Solar crouched down beside him and helped count. They got to seven." }
        ] },
        { t: "(Crouch down and look.)", notes: 2, then: [{ n: "She crouched beside him. The frog looked at both of them and did absolutely nothing, magnificently. Sebastian made a small, pleased sound through his nose." }] },
        { t: "Do frogs bite?", notes: 1, then: [{ s: 'sebastian', f: 'neutral', t: "No. They're the most polite animal there is. Unlike geese." }] }
      ] },
      { s: 'sebastian', f: 'neutral', t: "...You're the first person who hasn't asked me why." },
      { n: "It hadn't occurred to her that there was anything to ask. That, apparently, had been the right answer." }
    ],
    [
      { n: "He had a notebook open on his knee under the awning and was filling a page with small, cramped handwriting and a drawing of something with too many teeth. A campaign, he said without looking up, for his friends back home. For whenever." },
      { s: 'sebastian', f: 'neutral', t: "I need a name for this guy. He's a lich. Undead wizard. Very old, very evil. Everything I come up with sounds like a metal band." },
      { choose: [
        { t: "Gerald.", notes: 3, then: [
          { s: 'sebastian', f: 'surprised', t: "...Gerald." },
          { s: 'sebastian', f: 'happy', t: "A lich called Gerald. That's horrifying. That's the most horrifying thing I've ever heard. I'm using it." }
        ] },
        { t: "Something with a lot of Xs.", notes: 2, then: [{ s: 'sebastian', f: 'neutral', t: "Xaxxoth. Yeah. See, that's a metal band. Thanks, though." }] },
        { t: "Lord Frog.", notes: 1, then: [{ s: 'sebastian', f: 'serious', t: "No. Frogs are never the villain. That's a rule." }] }
      ] },
      { n: "He wrote something down. Then he drew a tiny cardigan on the thing with too many teeth and tilted the notebook so she could see, and the corner of his mouth was doing the thing it did when he was trying very hard not to look pleased." }
    ],
    [
      { n: "A whole middle-school club had poured into Game Panic at once, in matching windbreakers, shrieking, and by the time Solar got there the arcade was a wall of noise and elbows. Sebastian was outside under the awning with his hood all the way up and both hands jammed in his pocket, looking like a cat somebody had put in a bath." },
      { s: 'sebastian', f: 'neutral', t: "There were twenty of them. One asked if I was a high schooler. I didn't know what to say. I said no." },
      { choose: [
        { t: "(Lean on the wall next to him and say nothing.)", notes: 3, then: [{ n: "She leaned on the wall. He leaned on the wall. Inside, a twelve-year-old screamed in victory. Out here the evening was blue and cool and nobody needed anything from anybody, and after a while his shoulders came down from around his ears." }] },
        { t: "Want to go somewhere quieter?", notes: 2, then: [{ s: 'sebastian', f: 'neutral', t: "This is quieter. This is fine. Just... stay out here a minute." }] },
        { t: "They're just kids.", notes: 1, then: [{ s: 'sebastian', f: 'serious', t: "Kids are the worst kind of crowd. They ask follow-up questions." }] }
      ] },
      { n: "When the club finally filed out, he went back in, put a coin in the fighting cabinet, and stepped aside to let her play first. It was, she was starting to understand, his version of thank you." }
    ]
  ],
  // After rank MAX on the romance route, each visit plays the next date in order (then they rotate).
  dates: [
    { title: 'sashimi', place: 'Port Island Station', music: 'joy', scene: [
      { n: "Back in Pelican Town, Sebastian had told her once under the awning, sashimi was his favorite food in the world. You got it at the saloon. Gus made it out of whatever Willy had caught that morning, sliced thick and laid on a plate with a sprig of something, and it was always good, and it was always, very slightly, carp." },
      { n: "Solar had looked at him for a long moment and then informed him that he was currently living in Japan." },
      { n: "So on a cold gray afternoon they were standing outside a conveyor-belt sushi place by Port Island Station, the kind with a long counter shaped like a racetrack and little colored plates going around and around under domed plastic lids, and Sebastian had his hood up and both hands in his hoodie pocket and was looking through the window like it was a dungeon he hadn't rolled high enough to enter." },
      { s: 'sebastian', f: 'neutral', t: "It moves. The food moves. Nobody told me the food was going to move." },
      { n: "Inside it was warm and loud, steam and vinegar and the hiss of the tea taps at every seat, and the chef behind the counter shouted a welcome at them so loudly and so cheerfully that Sebastian physically flinched and then, for the rest of the meal, sat with his shoulder turned very slightly toward him, like a man keeping an eye on a large friendly dog." },
      { choose: [
        { t: "(Order for him, so he doesn't have to talk to the chef.)", notes: 3, then: [
          { n: "She ordered for both of them, tuna, salmon, yellowtail, mackerel, and he sat beside her in silent and enormous gratitude, which in Sebastian looked like his knee pressing against hers under the counter and staying there." }
        ] },
        { t: "(Make him order. He can do this.)", notes: 2, then: [
          { n: "He ordered. It took him three tries to get the chef's attention and he said tuna, please, to the counter rather than to the chef, and the chef roared HAI in response, and Sebastian jumped so hard he hit his knee." },
          { s: 'sebastian', f: 'flustered', t: "...Okay. That was a lot. But I did it. I'm counting it." }
        ] },
        { t: "(Grab plates off the belt for him as they go by.)", notes: 2, then: [
          { n: "She grabbed plates off the belt as they passed. He watched her do it with the respect of a man watching somebody else land a perfect combo on the sticky cabinet." }
        ] }
      ] },
      { n: "He ate the first piece of tuna and went completely still. He didn't say anything. He just sat there chewing with his eyes fixed on the conveyor belt, slowly, very slowly, and she understood that he was having some kind of experience and that it would be rude to interrupt." },
      { s: 'sebastian', f: 'surprised', t: "...Oh." },
      { s: 'sebastian', f: 'happy', t: "This is it. This is what it was supposed to be. Gus has been lying to me my entire life." },
      { n: "He ate fourteen plates. He stacked them neatly beside him in a tower, color-coded, and kept glancing at the tower with quiet pride, like it was a high score. When the bill came he wouldn't let her touch it. He'd been working at the repair shop near the port where he'd found the bike, cash, a few hours a week, and he counted it out onto the counter coin by coin while the chef watched with enormous patience." },
      { n: "There was one piece left, on the last plate, salmon, glistening. They both looked at it. They both reached for it at the same time and stopped." },
      { choose: [
        { t: "(Pick it up and feed it to him.)", notes: 3, then: [
          { n: "She held it out on her chopsticks. He looked at it. He looked at her. His ears went red under his hair, and he leaned in and took it, and then sat there chewing with his face doing several things at once, none of which he had any control over." },
          { s: 'sebastian', f: 'flustered', t: "...Okay. Okay. That's. Okay. Cool." }
        ] },
        { t: "Rock, paper, scissors.", notes: 2, then: [
          { n: "He threw rock. She threw paper. He looked at his own fist like it had betrayed him personally, and then pushed the plate toward her anyway, because, he said, a deal was a deal, and also because he wanted her to have it." }
        ] },
        { t: "(Let him have it.)", notes: 2, then: [
          { s: 'sebastian', f: 'serious', t: "No. You found this place. You get the last one. That's a rule." },
          { s: 'solar', t: "Since when?" },
          { s: 'sebastian', f: 'happy', t: "Since now. I'm the DM. I make the rules." }
        ] }
      ] },
      { n: "They walked back toward the monorail in the cold, the sky already going dark at five, the station lights coming on one by one. He walked on the outside, by the road. She noticed. He pretended it was an accident for the whole length of the street." },
      { s: 'sebastian', f: 'happy', t: "I'm going to tell Gus about this. When I get back. He's going to be so mad." },
      { s: 'solar', t: "You can't tell Gus about Port Island." },
      { s: 'sebastian', f: 'neutral', t: "I'll say it was a dream. A really good dream. With moving food. And you." }
    ] },
    { title: 'the rogue', place: 'Iwatodai Dorm · Lounge', music: 'joy', scene: [
      { n: "A one-shot, he'd called it. Just the two of them, one evening, a side quest off the main Solarion campaign, because Abigail and Sam were stuck in Pelican Town and he had, he said, some material he wanted to test. He said test the way somebody says it when they mean something else." },
      { n: "He'd taken over the lounge coffee table. Notebook, maps, a pencil worn down to a stub, the twenty-sided die, and a little cardboard screen he'd folded out of a cereal box so she couldn't see his notes. He sat behind it with his hood down for once and his hair falling in his eyes, and when she sat down across from him he cleared his throat, which he never did." },
      { s: 'sebastian', f: 'neutral', t: "Solarion. You're in a city. Rain, obviously. Night. For three days now somebody's been following you. Every street, every tavern. In a hood." },
      { s: 'sebastian', f: 'serious', t: "Tonight you finally corner him in an alley. He's a rogue. He's sort of... lurking. What do you do?" },
      { n: "She looked at the boy behind the cereal box. He looked very hard at his notes." },
      { choose: [
        { t: "Solarion pulls back the rogue's hood.", notes: 3, then: [
          { s: 'sebastian', f: 'flustered', t: "...Roll for it." },
          { n: "She rolled a twenty. He looked at the die for a long time." },
          { s: 'sebastian', f: 'flustered', t: "The rogue has... dark hair. In his eyes. He looks like he hasn't slept in a while. He's sort of relieved you caught him. He's been trying to work up the nerve to say something for three days." }
        ] },
        { t: "Solarion asks him why he's been following her.", notes: 3, then: [
          { s: 'sebastian', f: 'neutral', t: "He says he wasn't following you. He was going the same way. Every day. For three days." },
          { s: 'sebastian', f: 'flustered', t: "...That's a lie. Roll insight. Actually don't. It's a lie. You know it's a lie." }
        ] },
        { t: "Solarion offers him some of her bread.", notes: 2, then: [
          { s: 'sebastian', f: 'surprised', t: "...Nobody ever does that." },
          { s: 'sebastian', f: 'happy', t: "He takes it. He's been hungry for a while. He's not great at asking for things." }
        ] }
      ] },
      { n: "His phone had started buzzing about ten minutes in. It was face-down on the table. It kept buzzing. He kept ignoring it with the same set jaw he used on the sticky arcade stick, until she reached over and turned it face-up." },
      { phone: [
        { from: 'abigail', t: 'is it happening' },
        { from: 'abigail', t: 'seb is it happening RIGHT NOW' },
        { from: 'sam', t: 'is he doing the rogue' },
        { from: 'abigail', t: 'HES DOING THE ROGUE' },
        { from: 'sam', t: 'the rogue is SEB. the rogue has ALWAYS been seb' },
        { from: 'sebastian', t: 'im turning my phone off' },
        { from: 'abigail', t: 'solar if ur reading this. make him roll charisma. he has a 6' }
      ], contact: 'solarion chronicles' },
      { s: 'sebastian', f: 'flustered', t: "...I'm turning my phone off. I'm doing it. Watch me." },
      { n: "He did not turn his phone off. He put it under a cushion, which was not the same, and which they both knew, and went back behind the cereal box with his ears burning." },
      { s: 'sebastian', f: 'serious', t: "The rogue asks if he can travel with you. Permanently. He's not good in a fight. He's okay with locks. He knows a lot about frogs." },
      { choose: [
        { t: "Solarion says yes. Obviously.", notes: 3, then: [
          { s: 'sebastian', f: 'surprised', t: "...You don't want to roll for it?" },
          { s: 'solar', t: "No roll needed." },
          { n: "He recognized it. She watched him recognize it, November coming back across the coffee table at him, and his whole face went soft and helpless, and he put the pencil down." }
        ] },
        { t: "Solarion makes him roll for it.", notes: 2, then: [
          { n: "He rolled. It came up one. He stared at it, stricken." },
          { s: 'sebastian', f: 'sad', t: "...The rogue trips. In the alley. On nothing." },
          { s: 'solar', t: "Solarion catches him." },
          { s: 'sebastian', f: 'flustered', t: "That's not in the rules. ...Okay. Okay. She catches him." }
        ] }
      ] },
      { n: "He folded the cereal-box screen flat, and closed the notebook, and came around the coffee table, and sat down on the floor beside her with his back against the couch and his shoulder against hers, and leaned his head on her, heavy and warm, his hair tickling her neck." },
      { s: 'sebastian', f: 'happy', t: "...Session over. Same time next week." },
      { n: "Under the cushion, the phone kept buzzing for a long time. Neither of them got it." }
    ] },
    { title: 'breakdown', place: 'Port Island · Coastal Road', music: 'night', scene: [
      { n: "The bike died on the coastal road at a quarter past seven, three kilometers past the last streetlight, with a cough and a shudder and a smell of hot metal, and rolled to a stop on the shoulder with the bay black and endless on one side and the dark hill on the other." },
      { n: "Sebastian sat on it for a long moment without moving. Then he took off his helmet and said a word she'd never heard him say, very calmly, to the sky." },
      { s: 'sebastian', f: 'serious', t: "It's the carburetor. It's always the carburetor. I knew it was going to be the carburetor." },
      { s: 'sebastian', f: 'neutral', t: "Hold your phone up. I need light. Over here. Lower. Okay." },
      { n: "It was cold. The real cold, the coastal kind that came up off the water and through every layer she had on, and she stood beside the bike with her phone held out like a flashlight while he crouched down with the borrowed tools spread on a rag, his breath steaming, his fingers going stiff and slow and black with grease." },
      { choose: [
        { t: "(Hold the light steady. Don't say anything.)", notes: 3, then: [
          { n: "She held the light steady and didn't say anything, for twenty minutes, while he worked. Every so often he said a little more, lower, there, and she moved it, and she realized after a while that this was the most at ease she had ever seen him, crouched in the cold in the dark with his hands inside a machine, saying almost nothing." }
        ] },
        { t: "Do you actually know what you're doing?", notes: 2, then: [
          { s: 'sebastian', f: 'neutral', t: "Mostly. My mom built a whole house. I can build half a motorcycle. It's genetic." },
          { s: 'sebastian', f: 'serious', t: "...The other half is guessing." }
        ] },
        { t: "(Pull a hairpin out of your hair and hand it to him.)", notes: 3, then: [
          { s: 'sebastian', f: 'surprised', t: "...That's exactly what I needed. How did you know that's what I needed?" },
          { s: 'solar', t: "You were staring at my hair." },
          { s: 'sebastian', f: 'flustered', t: "That's... a separate thing. But yes. Give it." }
        ] }
      ] },
      { n: "It still wouldn't start. He said it needed to cool down, and there was nothing to do but wait, so they sat on the guardrail with their backs to the road and their feet hanging over the slope down to the water, and there was a vending machine, impossibly, glowing by a bus stop thirty meters back, and she bought two cans of hot corn soup." },
      { n: "He looked at the can with deep suspicion. Soup, in a can, hot, out of a machine. Then he drank it and his entire posture changed, like a cat in front of a heater, and he finished it and shook the can to get the last kernels out and looked at her with the betrayed expression of a man who has been denied something wonderful for his entire life." },
      { s: 'sebastian', f: 'happy', t: "Your world has hot soup in vending machines. And you just... live here. Like it's normal." },
      { n: "Then he went quiet. He turned the empty can in his black fingers and looked down at the bike, standing on the shoulder in the dark." },
      { s: 'sebastian', f: 'sad', t: "I can't take it with me. In January. I'll leave it at the shop. The old guy said he'd keep it running." },
      { s: 'sebastian', f: 'sad', t: "I finally fix something, and I don't get to keep it." },
      { choose: [
        { t: "You get to keep that you fixed it.", notes: 3, then: [
          { s: 'sebastian', f: 'surprised', t: "..." },
          { s: 'sebastian', f: 'neutral', t: "Yeah. I guess I do. I'm going to fix mine. When I get home. The one in the garage. I've been saying I would for three years." },
          { s: 'sebastian', f: 'happy', t: "Sam's going to lose his mind." }
        ] },
        { t: "(Kiss him. His nose is cold.)", notes: 3, then: [
          { n: "She kissed him on the guardrail. His nose was freezing against her cheek and he tasted of corn soup and he made a small, startled sound and then put his hand, very carefully, on the side of her face, which left, she discovered later, a thumbprint of engine grease on her jaw that she didn't wash off until morning." },
          { s: 'sebastian', f: 'flustered', t: "...That's the best thing that's ever happened on the side of a road." }
        ] }
      ] },
      { n: "The engine caught on the fourth try, roaring in the dark, and he whooped, actually whooped, a sound she'd never heard come out of him, and it echoed off the hill. They rode back slowly. She held on. The lights of the city came up ahead of them across the water, and she pressed her cheek against the back of his jacket and felt him laughing, still, all the way home." }
    ] },
    { title: 'hibernation', place: 'Paulownia Mall', music: 'tender', scene: [
      { n: "He wasn't under the awning. She found him behind the mall, at the canal, where he'd let the first frog go in June. He was lying on his stomach on the cold concrete at the edge of the water with his chin on his folded arms, looking at the mud." },
      { s: 'sebastian', f: 'neutral', t: "They're down there. In the mud. Under the leaves. They don't freeze. Their hearts almost stop and they just... wait." },
      { s: 'sebastian', f: 'neutral', t: "Some of them stop breathing completely. For months. Then it gets warm and they wake up like nothing happened." },
      { n: "He said it with the solemn care of somebody reporting the results of an experiment. The canal was gray and still, a skin of ice at the edges, a single dead leaf turning slowly on the surface. There was nothing to see at all. He'd been looking at it, he admitted, for about forty minutes." },
      { choose: [
        { t: "(Lie down next to him on the cold concrete.)", notes: 3, then: [
          { n: "She lay down next to him, on her stomach, chin on her arms, the cold coming up through her coat at once. He didn't say anything about it. He moved over, about four inches, the way he had under the awning the very first time, and then, after a while, back again, until their shoulders touched." }
        ] },
        { t: "Seb, you're going to get pneumonia.", notes: 2, then: [
          { s: 'sebastian', f: 'neutral', t: "Frogs don't get pneumonia. I'm being a frog." },
          { n: "She looked at him. He looked at the mud. After a minute she lay down too, because it was that or stand over him like a disappointed parent, and she had a strong feeling he'd had enough of those." }
        ] }
      ] },
      { s: 'sebastian', f: 'sad', t: "I won't see them wake up. In spring. I'll be gone." },
      { s: 'sebastian', f: 'sad', t: "It's the first winter I know exactly where spring's going to happen. And it's going to happen without me." },
      { n: "He said it to the water, the way he said all the true things, the way he'd said the green hour ends at the end of January under the awning in October, to the puddles. She looked at the side of his face, pale with the cold, his hair falling in his eyes, the tip of his nose going pink." },
      { choose: [
        { t: "I'll come check on them in March. I'll text you.", notes: 3, then: [
          { s: 'sebastian', f: 'surprised', t: "...You'd do that? Through the crystal thing?" },
          { s: 'solar', t: "Every week. Until they wake up." },
          { s: 'sebastian', f: 'happy', t: "Send pictures. Even if it's just mud. Especially if it's just mud." }
        ] },
        { t: "Then we name them now. So they're ours.", notes: 3, then: [
          { s: 'sebastian', f: 'happy', t: "...Okay. That one by the drain is Gerald." },
          { s: 'solar', t: "You can't see any of them." },
          { s: 'sebastian', f: 'serious', t: "I know where Gerald is. Gerald is under that leaf. The one next to Gerald is also Gerald. It's a family name." }
        ] }
      ] },
      { n: "They named eleven frogs they couldn't see. It got dark. The mall's back lights came on, flat and orange, and somewhere on the other side of the wall the arcade was going, faint music and a fanfare when somebody won, and her elbows had gone numb on the concrete a long time ago." },
      { n: "He rolled onto his side, finally, facing her, his head on his arm, and looked at her for a while in the orange light without saying anything. It was the look he gave the rain. The look she'd seen on his face in June, before he knew her name." },
      { s: 'sebastian', f: 'neutral', t: "I used to hate winter. Back home. Nothing to do. Everybody inside. Everybody in everybody's business." },
      { s: 'sebastian', f: 'happy', t: "I like the winter here." },
      { n: "He kissed her there, lying on the cold concrete by the canal, carefully, his cold hand finding hers between them. When they finally got up her coat was ruined, and his hoodie was ruined, and somewhere under the mud eleven frogs were very slowly not breathing, waiting, with their hearts almost stopped, for something warm." }
    ] }
  ],
  // P3's Christmas Eve: on 12/24 evening, if Solar is romancing several people (rank 9+), she picks one; this plays.
  christmas: { place: 'Paulownia Mall · Game Panic', scene: [
    { n: "It wasn't raining. That was the first thing. For the first time since June she ducked under the Game Panic awning and the street beyond it was not silver and running but white, snow coming down slow and fat in the light from the arcade sign, the pavement already soft with it, the whole street muffled and strange." },
    { n: "Sebastian was there, of course, in his usual spot against the wall, hood up, a small flat box held against his chest under his arm to keep it dry. He was watching the snow the way he watched the rain. When she came in, he didn't move over four inches. He moved over all the way, so there was a space against the wall exactly her size, already warm." },
    { s: 'sebastian', f: 'neutral', t: "It's not raining." },
    { s: 'solar', t: "I noticed." },
    { s: 'sebastian', f: 'happy', t: "I think I like this more. Don't tell the rain." },
    { n: "In Pelican Town, he told her, the twenty-fifth of winter was the Feast of the Winter Star. The whole town went to the square and ate too much, and everybody drew a name a week before and bought that person a secret present, and he'd gone every single year since he was a kid and drawn somebody he barely talked to, and bought them something safe from the general store, and stood at the back." },
    { s: 'sebastian', f: 'serious', t: "This is the first year I didn't draw a name. I just knew who." },
    { s: 'sebastian', f: 'flustered', t: "It's not very good. Open it anyway." },
    { n: "It was a frog. Carved out of a single piece of pale wood, about the size of her palm, sitting the way the first frog had sat in his cupped hands in June, a little hunched, a little surprised. One of its eyes was very slightly bigger than the other. It had been sanded so smooth it felt warm." },
    { s: 'sebastian', f: 'sad', t: "My mom's a carpenter. I watched her do this my whole life and never once asked her to show me. I borrowed a knife from the guy at the bike shop. It took eleven tries. There are ten bad frogs in a bag in my room." },
    { s: 'sebastian', f: 'neutral', t: "I'm going to ask her. When I get back. To show me properly." },
    { choose: [
      { t: "(Give him an umbrella. Clear plastic, with green frogs printed on it.)", notes: 3, then: [
        { n: "He opened it right there under the awning, which you weren't supposed to do, and looked up through the clear dome at all the little green frogs printed on it, with the snow landing on top and sliding off." },
        { s: 'sebastian', f: 'happy', t: "So I can stand out in it on purpose. Instead of under things." },
        { s: 'sebastian', f: 'flustered', t: "...That's the nicest thing anybody's ever thought about me." }
      ] },
      { t: "(Give him a smooth black stone from the gem shop. Obsidian.)", notes: 3, then: [
        { s: 'sebastian', f: 'surprised', t: "...How did you know that? That's my favorite. I've never told anybody that. Not even Abby." },
        { s: 'solar', t: "You stop at that shop window every time we walk past." },
        { n: "He turned it over and over in his fingers, the black glass catching the arcade light. Then he put it in his hoodie pocket, and kept his hand in there with it, and she could tell from the shape of his fist that he was holding it." }
      ] },
      { t: "(Give him a twenty-sided die. Clear, with a tiny green frog set inside it.)", notes: 2, then: [
        { s: 'sebastian', f: 'happy', t: "There's a frog in it. There's a frog in the die. I'm going to roll only with this one. Abby's going to say it's cursed." },
        { s: 'sebastian', f: 'neutral', t: "It's not cursed. It's blessed. By Gerald." }
      ] }
    ] },
    { n: "His phone buzzed. And again. He sighed, a long, put-upon sigh from somewhere deep in the hoodie, and turned it so she could see." },
    { phone: [
      { from: 'abigail', t: 'MERRY WINTER STAR' },
      { from: 'sam', t: 'merry winter star from the saloon 🎸 gus says hi. well. gus says who are u texting' },
      { from: 'abigail', t: 'did he give it to u yet. the frog. did he give u the frog' },
      { from: 'abigail', t: 'he made TEN BAD ONES. he showed me the bad ones. one has no face' },
      { from: 'sebastian', t: 'go away' },
      { from: 'sam', t: 'merry winter star solar!! take care of him' },
      { from: 'abigail', t: 'shes not taking care of him. hes taking care of her. hes been practicing' }
    ], contact: 'solarion chronicles' },
    { s: 'sebastian', f: 'flustered', t: "...I didn't practice. I don't know what she's talking about." },
    { n: "They stood under the awning and watched the snow fill up the street. A couple went past holding a cake box between them. The arcade doors slid open and shut, letting out blue light and noise and a gust of warm air that smelled of hot plastic, the same as it always had, every Tuesday and Thursday and Saturday since June." },
    { s: 'sebastian', f: 'sad', t: "I stood at the back of everything my whole life. The beach, with the jellies. The feast. Every room. I thought that was just who I was." },
    { s: 'sebastian', f: 'neutral', t: "And then I fell through the floor of the universe and the first person I met stood under this awning with me and didn't ask me anything." },
    { choose: [
      { t: "I'll stand anywhere you want. Front, back, under the awning.", notes: 3, then: [
        { s: 'sebastian', f: 'happy', t: "...Front. With you. I'd stand at the front." },
        { s: 'sebastian', f: 'flustered', t: "That's the scariest thing I've ever said. I'm going to need a minute." }
      ] },
      { t: "You moved over four inches. That was a lot, for you.", notes: 3, then: [
        { s: 'sebastian', f: 'surprised', t: "...You noticed that?" },
        { s: 'solar', t: "I noticed everything." },
        { s: 'sebastian', f: 'happy', t: "It was a lot. It was basically a speech. I'm glad somebody heard it." }
      ] }
    ] },
    { n: "He pulled his hood down. He looked at her, close, the snow behind him and the arcade sign blinking pink and blue over both of them, his hair falling in his eyes the way it always did, and for once he didn't look away, at the street, at the puddles, at anything." },
    { n: "He kissed her under the awning, slow and careful and a little clumsy, her carved frog held between them in both their hands, the snow coming down beyond the edge of the canvas in a soft white curtain so that for a moment there was nothing outside it at all, no street, no city, no other world waiting at the end of January. Just the awning. Just the two of them under it, out of the weather." },
    { s: 'sebastian', f: 'happy', t: "...Merry Winter Star, Solar." },
    { s: 'solar', t: "You like the snow here." },
    { s: 'sebastian', f: 'flustered', t: "I like everything here. That's the problem." },
    { n: "He kissed her again, quicker, like he'd decided the problem could wait, and then pulled his hood back up, and moved over to make room for her against the warm wall, and they stood there until the arcade closed, watching the street go white, not saying anything, which with Sebastian had always been the most anyone could ask for." }
  ] },
  romance: true,
  cast: { abigail: 'Abigail', sam: 'Sam', junpei: 'Junpei', noctis: 'Noctis' },
  threads: { solarion: { name: 'solarion chronicles', members: ['sebastian', 'abigail', 'sam'] } },
  texts: [
    { id: 'seb-1a', rank: 1, days: 1, slot: 1, msgs: [
      { from: 'sebastian', t: 'hey. its sebastian. from the rain' },
      { from: 'sebastian', t: 'the frog is ok btw. i put him in the canal' }
    ], reply: [
      { t: 'Good. Tell him I said hi.', notes: 3, then: [{ from: 'sebastian', t: 'he says ribbit. which means hi. probably' }] },
      { t: 'You checked on a frog?', notes: 2, then: [{ from: 'sebastian', t: 'yeah. frogs are important' }] }
    ] },
    { id: 'seb-2a', rank: 2, days: 1, slot: 1, msgs: [
      { from: 'sebastian', t: 'still thinking about your name' },
      { from: 'sebastian', t: "it's the main character in my game. solarion. i wrote it like 3 years ago" },
      { from: 'sebastian', t: 'thats so weird' }
    ], reply: [
      { t: 'Maybe I was meant to play.', notes: 3, then: [{ from: 'sebastian', t: 'yeah. maybe you were' }] },
      { t: 'What does Solarion do?', notes: 2, then: [{ from: 'sebastian', t: 'saves the world. mostly by being stubborn' }, { from: 'sebastian', t: 'so. yeah. tracks' }] }
    ] },
    { id: 'solarion-3', thread: 'solarion', rank: 3, days: 1, msgs: [
      { sys: 'abigail added you to "solarion chronicles"' },
      { from: 'abigail', t: 'ok we found a way to text across worlds. dont ask. i think its the purple crystal' },
      { from: 'sam', t: 'SOLARION RETURNS 🎸' },
      { from: 'sebastian', t: "you guys can't just add people" },
      { from: 'abigail', t: 'we just did seb' },
      { from: 'sam', t: 'shes canonically the main character now' }
    ], reply: [
      { t: 'Next session, same time?', then: [{ from: 'sam', t: 'YES' }, { from: 'abigail', t: 'seb is already writing it' }, { from: 'sebastian', t: 'i am not' }, { from: 'sebastian', t: '(i am)' }] },
      { t: 'I want a sword next time.', then: [{ from: 'abigail', t: 'a WOMAN of TASTE' }] }
    ] },
    { id: 'seb-4a', rank: 4, days: 1, slot: 1, msgs: [
      { from: 'sebastian', t: 'sorry for unloading all that family stuff on you' }
    ], reply: [
      { t: "You didn't unload. You shared.", notes: 3, then: [{ from: 'sebastian', t: '...ok' }, { from: 'sebastian', t: 'thanks' }] },
      { t: 'Anytime, Seb.', notes: 2, then: [{ from: 'sebastian', t: '🐸' }] }
    ] },
    { id: 'solarion-4', thread: 'solarion', rank: 4, before: 7, days: 2, slot: 1, msgs: [
      { from: 'sam', t: 'ok SESSION TWO. by text. seb says it counts' },
      { from: 'abigail', t: 'it counts if the dm says it counts. thats the law' },
      { from: 'sebastian', t: 'it counts' },
      { from: 'sebastian', t: 'last time you all made it out of the dragon cave. you walk three days through the swamp of ash. its raining' },
      { from: 'abigail', t: 'its always raining with u' },
      { from: 'sam', t: 'my bard plays a song about how wet he is 🎸' },
      { from: 'sebastian', t: 'nobody can hear it over the rain' },
      { from: 'sebastian', t: 'you reach a bridge. a troll lives under it. he wants a toll. 3 gold each' },
      { from: 'abigail', t: 'i have 2 gold and a cool rock' },
      { from: 'sebastian', t: 'solarion. what do you do' },
      { ask: [
        { t: 'Solarion challenges the troll to a riddle contest.', notes: 3, then: [
          { from: 'sebastian', t: 'oh no' },
          { from: 'sebastian', t: 'nobody ever does riddles. hold on' },
          { from: 'sebastian', t: 'the troll asks. what has a neck but no head' },
          { from: 'abigail', t: 'A BOTTLE' },
          { from: 'sebastian', t: 'abby its not your turn' },
          { from: 'sebastian', t: 'rolled int for you. 18. solarion gets it instantly. the troll weeps with joy and lets everyone cross. he gives you his hat' },
          { from: 'sam', t: 'SOLARION GETS THE HAT' }
        ] },
        { t: "Solarion pays for everyone.", notes: 2, then: [
          { from: 'sebastian', t: 'the troll takes 9 gold. he is now the richest troll in the swamp' },
          { from: 'abigail', t: 'shes so generous 🥺' },
          { from: 'sam', t: 'shes so BROKE now' }
        ] },
        { t: 'Solarion kicks the troll off the bridge.', notes: 1, then: [
          { from: 'sebastian', t: 'rolled for you. 3' },
          { from: 'sebastian', t: 'the troll does not move. the troll is offended. the troll writes your name down in a little book' },
          { from: 'sam', t: 'LMAOOO' },
          { from: 'abigail', t: 'that troll is coming back. i can feel it' }
        ] }
      ] },
      { from: 'sebastian', t: 'past the bridge is a clearing. in the middle sits a frog the size of a horse. he is wearing a crown' },
      { from: 'sam', t: 'seb' },
      { from: 'abigail', t: 'SEB' },
      { from: 'sebastian', t: 'what' },
      { from: 'sam', t: 'its always a frog with u' },
      { from: 'sebastian', t: 'the frog king regards solarion with ancient eyes' },
      { ask: [
        { t: 'Solarion bows to the frog king.', notes: 3, then: [
          { from: 'sebastian', t: 'the frog king is moved. no one has bowed to him in 400 years' },
          { from: 'abigail', t: 'she BOWED. hes going to be unbearable about this for a week' },
          { from: 'sebastian', t: 'i will be normal about it' }
        ] },
        { t: 'Solarion asks the frog king for directions.', notes: 2, then: [
          { from: 'sebastian', t: 'the frog king points north with one long finger. then he says ribbit. which is a blessing' }
        ] },
        { t: "Solarion tries on the frog king's crown.", notes: 1, then: [
          { from: 'sebastian', t: 'the crown is extremely slimy. the frog king is not angry. just disappointed' },
          { from: 'sam', t: 'thats worse' }
        ] }
      ] },
      { sys: 'sam renamed the group "frog king fan club 🐸"' },
      { from: 'sebastian', t: 'no' },
      { sys: 'sebastian renamed the group "solarion chronicles"' },
      { from: 'sebastian', t: 'the frog king offers solarion one gift for the road. a sword. a map of the swamp. or one of his sons, a very small frog, as a companion' },
      { ask: [
        { t: 'The very small frog.', notes: 3, then: [
          { from: 'sebastian', t: '...' },
          { from: 'sebastian', t: 'correct answer' },
          { from: 'sebastian', t: 'the small frog climbs onto solarions shoulder. he has 1 hp and infinite loyalty' },
          { from: 'abigail', t: 'seb is SMILING right now. i know it' },
          { from: 'sebastian', t: 'session over. same time next week' }
        ] },
        { t: 'The sword.', notes: 2, then: [
          { from: 'abigail', t: 'a WOMAN of TASTE' },
          { from: 'sebastian', t: 'the sword hums faintly when its near frogs. no reason' },
          { from: 'sebastian', t: 'session over. same time next week' }
        ] },
        { t: 'The map.', notes: 2, then: [
          { from: 'sebastian', t: 'practical. solarion would' },
          { from: 'sam', t: 'boooo take the frog' },
          { from: 'sebastian', t: 'session over. same time next week' }
        ] }
      ] }
    ] },
    { id: 'seb-5a', rank: 5, days: 1, slot: 1, msgs: [
      { from: 'sebastian', t: 'you held on really tight' },
      { from: 'sebastian', t: 'on the bike' },
      { from: 'sebastian', t: 'not complaining. just noting' }
    ], reply: [
      { t: 'You drive like a maniac.', notes: 2, then: [{ from: 'sebastian', t: 'i drive like a guy who has been waiting years for an empty road' }] },
      { t: 'I liked holding on.', notes: 3, then: [{ from: 'sebastian', t: '...' }, { from: 'sebastian', t: 'ok' }, { from: 'sebastian', t: 'cool. me too. i mean. cool' }] }
    ] },
    { id: 'seb-6a', rank: 6, days: 1, slot: 1, msgs: [
      { from: 'sebastian', t: 'did you finish it' },
      { from: 'sebastian', t: 'the game' },
      { from: 'sebastian', t: 'did you find the secret ending' }
    ], reply: [
      { t: 'The frog ending?', notes: 3, then: [{ from: 'sebastian', t: 'YES' }, { from: 'sebastian', t: 'nobody ever finds the frog ending' }] },
      { t: "There's a secret ending?", notes: 2, then: [{ from: 'sebastian', t: 'talk to the frog. three times' }] }
    ] },
    { id: 'solarion-7', thread: 'solarion', rank: 7, before: 10, days: 2, slot: 1, msgs: [
      { from: 'abigail', t: 'ok i need to talk to solar without seb' },
      { from: 'sebastian', t: 'im literally in the chat' },
      { from: 'abigail', t: 'without seb EMOTIONALLY' },
      { from: 'sam', t: 'solar is it true. he made you a GAME' },
      { from: 'sebastian', t: 'its not a game its a text adventure' },
      { from: 'sam', t: 'thats a GAME seb' },
      { from: 'abigail', t: 'ive known him since we were kids and he has never made me a game. not once' },
      { ask: [
        { t: 'It has a secret frog ending.', notes: 3, then: [
          { from: 'sam', t: 'OF COURSE IT DOES' },
          { from: 'abigail', t: 'wait you FOUND it?? nobody ever finds his secret stuff' },
          { from: 'sebastian', t: 'she found it' }
        ] },
        { t: "It's really good. He's really good at this.", notes: 3, then: [
          { from: 'sebastian', t: '...' },
          { from: 'sebastian', t: 'ok stop' },
          { from: 'abigail', t: 'hes typing and deleting. i can SEE it' }
        ] },
        { t: 'Maybe he just likes me better.', notes: 2, then: [
          { from: 'abigail', t: 'WOW' },
          { from: 'sam', t: 'she went for the THROAT' },
          { from: 'sebastian', t: 'i like everyone equally. which is not much' }
        ] }
      ] },
      { from: 'sam', t: 'ALSO. abby says you fixed a MOTORCYCLE' },
      { from: 'sam', t: 'you said youd fix your bike for like three years' },
      { from: 'sebastian', t: 'different bike' },
      { from: 'sebastian', t: 'and i had motivation' },
      { from: 'abigail', t: 'what motivation' },
      { from: 'sebastian', t: 'roads. empty ones' },
      { from: 'abigail', t: 'mhm' },
      { ask: [
        { t: 'He drives like a maniac.', notes: 2, then: [
          { from: 'sam', t: 'HE DOES' },
          { from: 'abigail', t: 'he went through my moms flower bed once. she still brings it up' }
        ] },
        { t: 'He drives fine. I held on.', notes: 3, then: [
          { from: 'abigail', t: 'you HELD ON' },
          { from: 'sam', t: '👀' },
          { from: 'sebastian', t: 'its a motorcycle. thats how motorcycles work' },
          { from: 'abigail', t: 'mhm. mhm.' }
        ] },
        { t: '🐸', notes: 1, then: [
          { from: 'sebastian', t: '🐸' },
          { from: 'sam', t: 'what does that MEAN' },
          { from: 'abigail', t: 'theyre speaking frog now. weve lost them' }
        ] }
      ] },
      { sys: 'abigail renamed the group "seb has a heart (confirmed)"' },
      { from: 'sebastian', t: 'im leaving this chat' },
      { from: 'sam', t: 'you wont' },
      { from: 'sebastian', t: 'i wont' },
      { sys: 'sebastian renamed the group "solarion chronicles"' },
      { from: 'abigail', t: 'ok real question. next time we fall through. what are we playing' },
      { ask: [
        { t: 'Seb runs the City of Coffins. All of us.', notes: 3, then: [
          { from: 'sebastian', t: 'yeah ok. i can do that' },
          { from: 'sebastian', t: 'ill write a goblin part for junpei' },
          { from: 'abigail', t: 'THE GOBLIN RETURNS' },
          { from: 'sam', t: 'bring snacks solar. real ones. not the weird jelly ones' }
        ] },
        { t: 'Rematch with the frog king.', notes: 2, then: [
          { from: 'sebastian', t: 'the frog king is not a boss fight. hes a friend' },
          { from: 'sam', t: 'seb has a whole frog lore bible. this is known' }
        ] },
        { t: "Something where Seb's character has to talk about his feelings.", notes: 1, then: [
          { from: 'sebastian', t: 'no' },
          { from: 'abigail', t: 'YES' },
          { from: 'sam', t: 'campaign of the CENTURY' }
        ] }
      ] }
    ] },
    { id: 'seb-8a', rank: 8, days: 1, slot: 1, msgs: [
      { from: 'sebastian', t: "i don't know how to go back to the basement after this" },
      { from: 'sebastian', t: "after having somewhere i actually wanted to be" }
    ], reply: [
      { t: "You'll have somewhere. Even back home.", notes: 3, then: [{ from: 'sebastian', t: 'yeah?' }, { from: 'sebastian', t: 'i hope so' }] },
      { t: "I don't want you to go either.", notes: 3, then: [{ from: 'sebastian', t: '...' }, { from: 'sebastian', t: 'dont say that. i cant handle it' }, { from: 'sebastian', t: 'say it again tomorrow though' }] }
    ] },
    { id: 'seb-9r', rank: 9, route: 'romance', days: 1, slot: 1, msgs: [
      { from: 'sebastian', t: 'im kind of terrible at this' },
      { from: 'sebastian', t: 'but im really glad its you' }
    ], reply: [
      { t: "You're not terrible at it.", notes: 3, then: [{ from: 'sebastian', t: 'ok youre biased. but ill take it' }] },
      { t: "I'm glad it's you too.", notes: 3, then: [{ from: 'sebastian', t: '🐸💙' }] }
    ] },
    { id: 'seb-9f', rank: 9, route: 'friend', days: 1, slot: 1, msgs: [
      { from: 'sebastian', t: 'best friend. huh' },
      { from: 'sebastian', t: "never had one i didn't grow up with" }
    ], reply: [
      { t: "You've got one now.", notes: 3, then: [{ from: 'sebastian', t: 'yeah. i do' }] },
      { t: 'Sam and Abigail better not be jealous.', notes: 2, then: [{ from: 'sebastian', t: 'abby already made you a character sheet. ur fine' }] }
    ] }
  ],
  ranks: [
    { after: '6/9', title: '1: frog', place: 'Paulownia Mall · Game Panic', scene: [
      { n: "It was pouring. Warm, heavy June rain that came straight down like someone had turned on a faucet, and everyone on the street had either run for cover or given up. Solar had run for cover. The awning outside Game Panic was the closest thing." },
      { n: "There was already somebody under it." },
      { n: "A tall guy in a black hoodie with the hood half up, shaggy black hair falling over one eye, leaning against the wall with his arms folded, watching the rain like it was the best thing on television. He didn't look up when she ducked in beside him. He didn't move to make room. He just existed, very quietly, the way the rain did." },
      { n: "They stood there for a few minutes not talking. Then he crouched down, suddenly, and picked something up off the wet pavement in both hands." },
      { n: "A frog. A small, very surprised green frog, which had apparently been sitting in a puddle at the edge of the awning, and which now sat in his cupped palms blinking at both of them." },
      { s: 'sebastian', f: 'neutral', t: "...He was going to get stepped on." },
      { choose: [
        { t: "He's cute.", notes: 3, then: [
          { s: 'sebastian', f: 'happy', t: "...Yeah. He is." },
          { n: "He said it like it surprised him, that somebody else agreed. Like he was used to people thinking frogs were gross." }
        ] },
        { t: "Where are you going to put him?", notes: 2, then: [{ s: 'sebastian', f: 'neutral', t: "There's a canal behind the mall. Frogs like canals. I think. I'm assuming. I'm not from here." }] }
      ] },
      { s: 'sebastian', f: 'flustered', t: "I'm Sebastian. I'm, uh. Not from here. You probably figured that." },
      { s: 'sebastian', f: 'neutral', t: "I was in my basement. In Pelican Town. Writing code. Then it was green and there were coffins and now I'm standing under an arcade with a frog." },
      { n: "He said it flatly, like listing the steps of a bad day, and Solar laughed before she could stop herself. He looked at her, startled. Then the corner of his mouth went up." },
      { choose: [
        { t: "That's the most normal story I've heard all month.", notes: 3, then: [{ s: 'sebastian', f: 'happy', t: "...Yeah, I've been getting that impression. This place is weird." }] },
        { t: "Pelican Town?", notes: 2, then: [{ s: 'sebastian', f: 'neutral', t: "Small town. Very small. Everybody knows everybody. I spend most of my time in my room so I don't have to." }] }
      ] },
      { n: "When the rain thinned out, they walked to the canal behind the mall together, and he crouched by the water and let the frog go, very carefully, and watched it swim away. Then he stood up and put his hands back in his hoodie pocket and said, \"I like the rain here,\" to nobody in particular, and went home." }
    ] },

    { after: '6/23', title: '2: solarion', place: 'Paulownia Mall · Game Panic', scene: [
      { n: "Rain again. He was under the awning again. He nodded at her when she came in, a small, quiet nod, like they had an arrangement now. They kind of did." },
      { s: 'sebastian', f: 'neutral', t: "I never got your name. Last time." },
      { s: 'solar', t: "Solar." },
      { n: "He went very still." },
      { s: 'sebastian', f: 'surprised', t: "...Solar. Like. Solar." },
      { s: 'sebastian', f: 'serious', t: "Okay, this is going to sound insane. Back home, I run a game. A tabletop thing, with my friends. Dice and character sheets. Very nerdy. It's called Solarion Chronicles." },
      { s: 'sebastian', f: 'neutral', t: "Solarion's the main character. I wrote her, like, three years ago. A wanderer from another world who keeps ending up in places she doesn't belong." },
      { choose: [
        { t: "That's a little on the nose.", notes: 3, then: [{ s: 'sebastian', f: 'happy', t: "It's SO on the nose. It's offensively on the nose." }] },
        { t: "What happens to her?", notes: 2, then: [{ s: 'sebastian', f: 'happy', t: "She saves everyone. Mostly by being too stubborn to leave. That's her whole thing." }] }
      ] },
      { n: "He looked at her sideways, frowning, like she was a bug in a program he couldn't track down." },
      { s: 'sebastian', f: 'flustered', t: "You want to play? Sometime? I've got the rules in my head. I could run a session. Just us." },
      { n: "He said it fast, like he'd talked himself into it and wanted to get it out before he could talk himself out." },
      { choose: [
        { t: "I'd love to.", notes: 3, then: [
          { s: 'sebastian', f: 'flustered', t: "...Cool. Cool. Okay. I'll write something." },
          { n: "He looked away immediately, at the rain, but she could see him smiling at it." }
        ] },
        { t: "Only if I can play Solarion.", notes: 3, then: [{ s: 'sebastian', f: 'happy', t: "Obviously you're playing Solarion. Who else would play Solarion." }] }
      ] }
    ] },

    { after: '7/14', title: '3: game night', place: 'Iwatodai Dorm · Lounge', scene: [
      { n: "They came through on a Tuesday, during the green hour, landing in the middle of the dorm's front garden in a tangle of limbs and complaining. A girl with bright purple hair and a sword. A guy with spiky blond hair and a skateboard. Sebastian, apparently, had told them about the game." },
      { register: 'abigail' },
      { register: 'sam' },
      { s: 'abigail', f: 'happy', t: "Seb! We found you! I told you he'd be somewhere with a basement, Sam." },
      { s: 'sam', f: 'surprised', t: "There's no basement! He's just in a dorm! Seb, you're living in a DORM?" },
      { n: "So game night happened in the lounge. Sebastian sat at the head of the coffee table with a notebook full of maps he'd drawn from memory. Abigail and Sam played their usual characters. Solar played Solarion. And Junpei, who had wandered downstairs for a snack, sat down, demanded a character, and was assigned a goblin." },
      { s: 'junpei', f: 'surprised', t: "Why am I a goblin?" },
      { s: 'sebastian', f: 'neutral', t: "You have goblin energy." },
      { choose: [
        { t: "(Roll to attack the dragon.)", notes: 3, then: [
          { n: "She rolled a twenty. Sam screamed. Abigail screamed. Sebastian, at the head of the table, sat back in his chair and stared at her like she'd done something genuinely impossible." },
          { s: 'sebastian', f: 'surprised', t: "...Solarion slays the dragon. In one hit. On her first session. That's never happened." }
        ] },
        { t: "(Roll to befriend the dragon.)", notes: 3, then: [
          { n: "She rolled a nineteen. The dragon, Sebastian decided after a long pause, became her loyal companion and was named Frog." },
          { s: 'abigail', f: 'surprised', t: "SEB. You've never let ANYONE befriend the dragon." },
          { s: 'sebastian', f: 'neutral', t: "Nobody's ever tried." }
        ] }
      ] },
      { n: "They played until three in the morning. Abigail and Sam faded at dawn, the way the visitors did, still arguing about loot. Sebastian sat in the empty lounge afterward with his notebook, very quietly, writing something down." },
      { s: 'sebastian', f: 'happy', t: "...They've never liked a new player before. Ever. You're like, the first." }
    ] },

    { after: '7/28', title: '4: the basement', music: 'tender', place: 'Iwatodai · Riverside', scene: [
      { n: "He'd asked to walk. Not at the arcade. Somewhere quiet. They ended up by the river in the evening, the heat starting to lift off the water, cicadas going, a few joggers passing. One of them was Akihiko, who waved and kept running." },
      { s: 'sebastian', f: 'neutral', t: "Back home I live in my mom's basement. She's a carpenter. She built the whole house." },
      { s: 'sebastian', f: 'sad', t: "My stepdad's a scientist. He's fine, I guess. My half-sister Maru's a genius. Everyone loves her. She's good at everything, and she's nice, and she's always home for dinner." },
      { s: 'sebastian', f: 'sad', t: "And I'm the guy in the basement. The one nobody quite knows what to do with." },
      { n: "He said it without self-pity. Just a fact, laid down like a card on a table. Solar knew the shape of it. The house that wasn't quite yours. The family that loved you a little carefully, the way you'd handle something that might break." },
      { choose: [
        { t: "I've never had a house that felt like mine.", notes: 3, then: [
          { s: 'sebastian', f: 'sad', t: '...Yeah?' },
          { n: "She told him. Not everything. Enough. He listened like it was the first time anyone had ever told him anything true." }
        ] },
        { t: "Do they know you feel like that?", notes: 2, then: [{ s: 'sebastian', f: 'neutral', t: "No. I don't tell people things. It's kind of my whole deal." }] }
      ] },
      { s: 'sebastian', f: 'serious', t: "I keep saying I'm going to leave. Get on my bike and ride to the city and never come back." },
      { s: 'sebastian', f: 'sad', t: "And then I fall through a hole in the universe and end up in a city anyway, and I'm not even happy about it. I just miss my stupid basement." },
      { n: "He laughed at himself, quietly, and kicked a pebble into the river. Solar didn't say anything. She bumped his shoulder with hers. He bumped back." }
    ] },

    { after: '8/18', title: '5: motorcycle', music: 'sun', place: 'Port Island · Coastal Road', scene: [
      { n: "He'd found a motorcycle. Or, he'd found the bones of one, rusting behind a repair shop near the port, and he'd been working on it for three weeks with borrowed tools, and tonight it ran." },
      { s: 'sebastian', f: 'happy', t: "Get on. I've got a spare helmet. It's terrible. It's the only one." },
      { choose: [
        { t: "Is this safe?", notes: 2, then: [{ s: 'sebastian', f: 'neutral', t: "No. Get on." }] },
        { t: "(Get on.)", notes: 3, then: [{ n: "She got on. She put her arms around him because there was nothing else to hold onto. He went very still for a second, and then kicked the engine on, and the whole world became noise." }] }
      ] },
      { n: "They rode along the coastal road out past the port, the city lights on one side and the black water on the other, the warm summer wind tearing at everything. It was the fastest she had ever moved in her life. She held on very, very tight." },
      { n: "They passed a pier where a boy with spiky black hair was sitting at the very end, fishing, alone, under a single streetlight. He raised a hand lazily as they went by, like a prince waving at a parade." },
      { n: "Sebastian pulled over at the end of the road, where it ran out at a cliff over the water. He cut the engine. The silence was enormous. The bay below was full of lights." },
      { s: 'sebastian', f: 'happy', t: "...This is the thing I wanted. Back home. Just. Riding until the road ends. With somebody." },
      { choose: [
        { t: "So you got it.", notes: 3, then: [
          { s: 'sebastian', f: 'surprised', t: '...' },
          { s: 'sebastian', f: 'sad', t: "Yeah. I guess I did. In the wrong universe. Figures." }
        ] },
        { t: "(Stay holding on, even with the engine off.)", notes: 3, then: [
          { n: "She didn't let go. The engine was off and they weren't moving and she didn't let go. He noticed. He didn't say anything. He just leaned back, very slightly, into her." }
        ] }
      ] }
    ] },

    { after: '9/8', title: '6: text adventure', place: 'Iwatodai Dorm · Lounge', scene: [
      { n: "He'd been coding on Junpei's old laptop for two weeks. He wouldn't say what. He'd shoo everyone away from the screen with a hand without looking up." },
      { n: "Then one evening he set the laptop down in front of her on the lounge table and stepped back, hands in his hoodie, very carefully not looking at her." },
      { s: 'sebastian', f: 'flustered', t: "It's not done. It's probably buggy. Don't judge me." },
      { n: "The screen was black, with a single line of green text and a blinking cursor." },
      { n: "SOLARION CHRONICLES: THE CITY OF COFFINS. You are SOLAR. You live in a dorm with very strange people. It is raining. Under an arcade awning, there is a FROG. What do you do?" },
      { choose: [
        { t: "(Type: PICK UP FROG.)", notes: 3, then: [
          { n: "YOU PICK UP THE FROG. The frog looks at you with great respect. A tall boy in a hoodie, standing nearby, looks at you with something like respect too. He is pretending he isn't. He is bad at pretending." },
          { s: 'sebastian', f: 'flustered', t: "...Okay, that last line was a joke. Mostly." }
        ] },
        { t: "(Type: TALK TO BOY IN HOODIE.)", notes: 3, then: [
          { n: "THE BOY IN THE HOODIE DOES NOT LIKE TALKING. He talks to you anyway. This surprises him more than it surprises you." },
          { s: 'sebastian', f: 'flustered', t: "...I should not have written that one. Close the laptop." }
        ] }
      ] },
      { n: "She played the whole thing. It took an hour. It was full of little jokes about the dorm and the arcade and the rain, and it had a secret ending if you talked to the frog three times, and in the secret ending Solarion got to go home, wherever home was, and found someone waiting for her there." },
      { n: "When she looked up, he was sitting on the floor against the couch with his hood up, watching her play the whole time. He'd seen every choice she made." }
    ] },

    { after: '9/29', title: '7: moonlight jellies', music: 'tender', place: 'Port Island · Pier', scene: [
      { n: "There was a night every year in Pelican Town, he told her, when the moonlight jellies came. The whole town went down to the beach, and somebody put a candle on a boat, and the jellyfish came up from the deep water, hundreds of them, glowing blue and green, all passing by the shore at once on their way somewhere else." },
      { s: 'sebastian', f: 'neutral', t: "I've gone every year. I never told anyone I like it. I just stand at the back." },
      { n: "They were on the pier at the edge of Port Island. Late September, warm still, the water black. And then, just past the end of the pier, something glowed." },
      { n: "Then something else. Then a dozen. Then a hundred, rising up out of the dark water, soft blue lights pulsing slowly like hearts, drifting past the pier in a long, glowing river." },
      { s: 'sebastian', f: 'surprised', t: "...No way. No way. They're here. They followed me." },
      { choose: [
        { t: "Maybe they came to see you.", notes: 3, then: [{ s: 'sebastian', f: 'happy', t: "...That's the dumbest, nicest thing anyone has ever said to me." }] },
        { t: "(Sit at the edge of the pier.)", notes: 3, then: [{ n: "She sat at the edge with her feet hanging over the glowing water. After a minute he sat down next to her, closer than he usually let himself sit, and they watched them go by." }] }
      ] },
      { s: 'sebastian', f: 'sad', t: "I always stand at the back. At home. I don't know how to be in the front of anything." },
      { s: 'sebastian', f: 'flustered', t: "But I'd sit at the front with you. Here. I wouldn't mind." },
      { n: "The jellies kept coming. Blue and green, lighting up the underside of the pier, lighting up his face, which was doing something very soft and very unguarded that he clearly didn't know it was doing." }
    ] },

    { after: '10/20', title: '8: wanting to stay', music: 'tender', place: 'Paulownia Mall · Game Panic', scene: [
      { n: "October rain, cold this time. The awning. The arcade lights flickering. Sebastian was already there, the way he always was, hood up, but he wasn't watching the rain. He was looking at the ground." },
      { s: 'sebastian', f: 'sad', t: "Elizabeth told me. The green hour ends at the end of January. Everyone goes home." },
      { s: 'sebastian', f: 'sad', t: "I spent my whole life wanting to leave home. And now I get to go back, and the only thing I can think about is that I don't want to." },
      { s: 'sebastian', f: 'serious', t: "That's the worst possible thing that could happen to a person like me. Wanting to stay somewhere." },
      { choose: [
        { t: "Why is that the worst thing?", notes: 3, then: [
          { s: 'sebastian', f: 'sad', t: "Because then you have to admit you need something. Somebody. And they can leave. Or you can." },
          { n: "He said it to the puddles. He said it like he'd been carrying it for years, and only just found out how heavy it was." }
        ] },
        { t: "I don't want you to leave either.", notes: 3, then: [
          { s: 'sebastian', f: 'surprised', t: '...' },
          { s: 'sebastian', f: 'sad', t: "Don't. You can't just say that. I can't do anything with that." },
          { n: "He didn't sound angry. He sounded like someone holding something too hot to put down." }
        ] }
      ] },
      { n: "A frog hopped out of the puddle at the edge of the awning. They both looked at it. Sebastian laughed, small and wet, and crouched down, and held out his hand. It hopped into his palm like it had been waiting for him." }
    ] },

    { after: '11/17', title: '9: roll for it', place: 'Iwatodai Dorm · Lounge', scene: [
      { n: "November, late. The lounge was empty. He'd brought his notebook and a single twenty-sided die, and he set the die on the coffee table between them." },
      { s: 'sebastian', f: 'serious', t: "I'm bad at saying things. You know that. So I'm going to do this the only way I know how." },
      { s: 'sebastian', f: 'flustered', t: "Solarion, a wanderer from another world, finds a quiet guy in a hoodie who likes frogs and doesn't talk to anybody. They become friends. And the quiet guy has to ask her something." },
      { s: 'sebastian', f: 'serious', t: "What are they? What is this?" },
      { route: [
        { t: "She's in love with him. No roll needed.", route: 'romance', notes: 3, then: [
          { s: 'sebastian', f: 'surprised', t: '...' },
          { s: 'sebastian', f: 'flustered', t: "...No roll needed." },
          { n: "He put his notebook down. He looked at her for a very long time, hood down for once, hair in his eyes. Then he leaned across the coffee table and kissed her, carefully, like he'd been running the scenario in his head for months and was still somehow surprised it worked." },
          { s: 'sebastian', f: 'happy', t: "...Critical success." }
        ] },
        { t: "She's his best friend. In every campaign.", route: 'friend', notes: 3, then: [
          { s: 'sebastian', f: 'happy', t: "...Every campaign. Yeah. I like that. I like that a lot." },
          { n: "He wrote it in his notebook, right there, very seriously: SOLARION'S BEST FRIEND: THE GUY IN THE HOODIE. PERMANENT. Then he underlined it twice." }
        ] }
      ] }
    ] },

    { after: '12/15', title: '10: the frog sketch', place: 'Paulownia Mall · Game Panic', scene: [
      { n: "December, and it was raining, of course. Cold winter rain on the arcade awning. He was waiting under it in his hoodie with something flat wrapped in a plastic bag, to keep it dry." },
      { n: "It was a drawing. A pencil sketch of a frog, sitting on a rainy pavement under an arcade awning, looking up at something out of frame. It was very good. In the corner, very small, it was signed: for solarion. from the guy under the awning." },
      { s: 'sebastian', f: 'flustered', t: "I don't draw much. It's not great. It's the first frog. The one from the beginning." },
      { ifRoute: 'friend', then: [
        { choose: [
          { t: "I'll hang it on my wall.", notes: 3, then: [{ s: 'sebastian', f: 'happy', t: "...Cool. I mean. Good. That's where it should go." }] },
          { t: "I'll keep it until you come back.", notes: 3, then: [{ s: 'sebastian', f: 'serious', t: "Then I'll have to come back. Wherever back is. Okay. Deal." }] }
        ] },
        { n: "They stood under the awning until the rain stopped, the way they always did. When it did, he said, \"I like the rain here,\" the same way he'd said it in June, and this time he was looking at her when he said it." }
      ] },
      { ifRoute: 'romance', then: [
        { s: 'sebastian', f: 'flustered', t: "I wanted you to have something from me. Something I made. Because I don't know how to say most things out loud." },
        { choose: [
          { t: "You just said it.", notes: 3, then: [
            { s: 'sebastian', f: 'happy', t: "...Yeah. I guess I did." },
            { n: "He pulled his hood down, and stepped out from under the awning into the rain, and held his hand out for her to follow. She did. They stood in the rain together, soaked, until neither of them could feel their fingers." }
          ] },
          { t: "(Kiss him under the awning.)", notes: 3, then: [
            { s: 'sebastian', f: 'surprised', t: '...' },
            { s: 'sebastian', f: 'happy', t: "...I really, really like the rain here." }
          ] }
        ] },
        { n: "In the secret ending of the text adventure, he told her later, Solarion goes home and someone is waiting for her. He'd written it in September. He'd known, even then, who it was supposed to be." }
      ] }
    ] }
  ]
});
