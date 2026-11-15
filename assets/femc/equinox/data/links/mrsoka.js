/* Persona 3: Equinox · Mrs. Oka (Empress). Link data for femc-equinox-game.html; replaces her stub in ../links.js (same id).
   Format: link fields in assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written so far: rank 1 (opens 4/13, after school, at her house). Ranks 2-10 to come.
   Her house isn't a Go Out area yet: `home` is the stub's stand-in on the Iwatodai Strip, and the scene uses stand-in
   backgrounds (BG comments mark the art it wants). No portrait art yet (speaker `mrsoka`, face 'neutral').
   Flags this file sets: none. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'mrsoka', name: 'Mrs. Oka', short: 'Mrs. Oka', arcana: 'Empress', numeral: 'III', from: 'Iwatodai', kind: 'native',
  romance: null, starts: '4/9', lodging: 'boarding',
  home: { area: 'strip', spot: 'The Oka Boarding House', slot: 'after', days: [0, 1, 2, 3, 4, 5, 6],
          hint: 'Afternoons at the boarding house on the river side of Iwatodai, where the kettle is always on.' },
  approach: "Down on the river side, past the shrine, there's an old wooden house behind a low gate, and a woman in an apron and white cotton gloves kneeling under the persimmon tree in the garden, who looks up as you pass as if she'd been expecting you since lunch.",
  cast: { mrsoka: 'Mrs. Oka' },
  ranks: [
    { after: '4/13', title: '1: loose thread', place: 'Iwatodai · The Oka Boarding House', time: 'After School', music: 'tender', scene: [
      { bg: 'outside-daytime-neighborhood' },
      // BG: oka-boarding-house-garden — the garden of an old wooden Japanese house in spring afternoon light, a persimmon tree in new leaf, an old stone well beside it with a heavy round stone cap furred with moss, a low wooden gate.
      { n: "She hadn't meant to go back. She'd come out of the school gates meaning the long way round to the dorm, along the river, because the river was in the sun at that hour, and she'd turned left past the shrine instead of right, and walked the street with the dry cleaner on it, and stopped at a low wooden gate, and stood there with her bag on her shoulder, and only then thought, *oh*." },
      { n: "The persimmon tree had more leaves than on Friday, small and new and so green they looked wet. Under it, on a folded cushion on the grass, there was a woman on her knees, pulling weeds out of the bed round its roots and dropping them into a basket, and humming to herself without any particular tune, the way you hum when you've been alone in a garden long enough to forget anyone might hear." },
      { n: "She was wearing the white cotton gloves. Green now, at the fingertips, from the earth." },
      { n: "She looked up. And it happened again, the thing that had happened in the kitchen: her whole face lit, slowly and completely, from the mouth up, the way a window lights when somebody inside has been waiting up with the lamp." },
      { s: 'mrsoka', f: 'neutral', t: "Well, there she is. I said to myself this morning, she'll come back on her own, that one. She's the kind." },
      { s: 'mrsoka', f: 'neutral', t: "Come in, child. Oh, you'll have to let yourself in, the latch is on your side. It's always been on that side. I've never minded. People like to let themselves in." },
      { n: "The latch was on the street side of the gate. A plain iron hook in an iron eye, worn smooth by years of hands. From inside the garden there was no way to reach it at all." },
      { choose: [
        { t: "(Lift the latch and go in.)", notes: 3, then: [
          { n: "She lifted the hook. The gate swung in on its own weight, easy, oiled, without a sound, and she stepped through, and behind her it swung back and settled against the post with a small wooden knock, as if the house had said *there*." }
        ] },
        { t: "Isn't that the wrong way round?", notes: 2, then: [
          { s: 'mrsoka', f: 'neutral', t: "Probably. Whoever built it had his own ideas. But I've never once wanted to keep anybody out, and nobody's ever wanted to keep me in, so it's done no harm." },
          { n: "She laughed at herself, a short, warm, embarrassed laugh, and Solar lifted the hook and went in, and felt silly for having asked." }
        ] },
        { t: "I was just passing.", notes: 1, then: [
          { s: 'mrsoka', f: 'neutral', t: "Of course you were. Everybody's just passing. That's how all my best visitors start." },
          { n: "She went back to her weeds and didn't look up again, and waited, and after a moment Solar lifted the hook herself." }
        ] }
      ] },
      { n: "Up close the garden smelled of turned earth and, faintly, of something sweet, sugar or warm rice, though every window in the house was shut. The river was thirty steps away. She'd heard it from the gate, the low wet hush of it going past. Two steps inside the garden she couldn't hear it at all." },
      { n: "The well sat where it had sat on Friday, a round lip of old gray stone by the trunk of the tree, with its heavy cap on. Most of the cap was furred with moss, thick and dark and soft. At one edge it wasn't. At one edge there were still four long lines scraped clean down to the stone, side by side, the width of a hand. They looked paler than she remembered. Cleaner. As if they'd been gone over." },
      { choose: [
        { t: "What's in the well?", notes: 2, then: [
          { s: 'mrsoka', f: 'neutral', t: "Water, once, I'm told. Nothing now. It was dry when I came, and I had it capped, oh, years ago. Children fall down wells." },
          { s: 'mrsoka', f: 'neutral', t: "You'd be amazed how many stories start with a child and a well. I wasn't going to have one start in my garden." },
          { n: "She said it fondly, pulling a long pale root out of the soft earth and shaking it off, and laid the root in her basket as carefully as if it were something she meant to cook." }
        ] },
        { t: "(Put a hand on the cap.)", notes: 1, then: [
          { n: "She put her palm flat on the stone, on the part with moss on it, because she wanted to know. It was cold. Not the cool of stone in shade. Cold all the way through, the cold of a cellar step, and it was the only cold thing in a garden that had been in the sun all afternoon. She took her hand back and put it in her blazer pocket and kept it there." },
          { s: 'mrsoka', f: 'neutral', t: "Mind your fingers on that. It's very heavy. It took four men to set it, and they all complained." }
        ] },
        { t: "(Help her with the weeds instead.)", notes: 3, then: [
          { n: "She put her bag down on the grass and knelt on the other side of the bed and started pulling the small things with two leaves, the way her mother had shown her once, in some garden, in some life. Mrs. Oka watched her hands for a moment and then went on with her own side, and neither of them said anything for a while, and it was nice. It was the nicest silence she'd been in since she woke up at the bottom of anything." },
          { s: 'mrsoka', f: 'neutral', t: "You've done this before." },
          { s: 'solar', f: 'neutral', t: "A long time ago." },
          { s: 'mrsoka', f: 'neutral', t: "Hands remember. Hands remember everything. It's the rest of us that forgets." }
        ] }
      ] },
      { n: "The persimmon tree hung over both of them, new leaves moving a little in a wind she couldn't feel down here. There were no birds in it. She looked for them, after a while, because a tree like that in April should have been full of sparrows arguing, and there weren't any, not one, not in the tree or on the wall or on the roof of the house. Only the leaves, moving, and the woman beside her humming her nothing-tune under her breath." },
      { s: 'mrsoka', f: 'neutral', t: "It's a good tree. It fruits like you wouldn't believe. Too much for one old woman, every autumn, and the birds won't touch them. They go soft on the branch and drop." },
      { s: 'mrsoka', f: 'neutral', t: "Come inside, now. You've been at school all day and you've had nothing, I can see it on you. I'll put the kettle on." },

      { place: 'The Oka Boarding House · Kitchen', time: 'After School', bg: 'iwatodaidorm-kitchen', soft: true },
      // BG: oka-boarding-house-kitchen — a warm old-fashioned Japanese farmhouse kitchen with a long wooden counter, steam from a pot, a tin of rice cakes on the counter, a window onto a garden with a persimmon tree.
      { n: "She took her gardening gloves off at the back step. Underneath were the others. The thin white cotton ones, clean, buttoned at the wrist. She put the green-tipped pair over the edge of a bucket to dry and went in ahead of Solar, and at the kitchen doorway, at the line where the pale boards began, she stopped, and turned round, and waited, smiling, with her hands folded on her apron." },
      { n: "Solar had forgotten. For a second she stood in the hall and didn't know what she was being waited for, and then she did, and something in the back of her neck went tight and stayed tight, for no reason, the way it went tight in a lift when a stranger got in and stood a little too near." },
      { s: 'solar', f: 'neutral', t: "...Please. Go in." },
      { s: 'mrsoka', f: 'neutral', t: "Thank you, child." },
      { n: "The kitchen was spotless. That was what she noticed, coming in after her. On Friday it had been a working kitchen, flour on the board and a pot ticking and a tray of something cooling. Today the long counter was scrubbed bare and pale and dry, the board was hung on its hook, the oven was cold, the sink was empty. Nobody had baked in here today. Nobody had cooked. And the tin with the cranes on it was on the counter by the kettle, lid off, packed full to the brim with small white rice cakes in neat rows, soft and fresh as if they'd been made an hour ago." },
      { n: "There was flour on Mrs. Oka's cuffs. Past the gloves, up the wrists, a fine pale dust on the sleeves of her cardigan. She filled the kettle with her back to Solar and didn't seem to know it was there." },
      { s: 'mrsoka', f: 'neutral', t: "Take one, take one. They're best the first day. Tomorrow they're only good." },
      { ifFlag: 'eqx-oka-ricecake', then: [
        { s: 'mrsoka', f: 'neutral', t: "You liked the last one. I watched you. You had a little cry about it and pretended you hadn't." }
      ] },
      { choose: [
        { t: "(Take one.)", notes: 2, then: [
          { n: "It was the same. Warm, which it couldn't be, and soft, and plain and sweet and so exactly right that she had to look at the window for a second. She ate it in three bites. Mrs. Oka didn't watch her eat, very deliberately, the way you don't watch a hungry child who's been taught it's rude to be hungry, and when she'd finished there was a cup of tea at her elbow that she hadn't seen being poured." }
        ] },
        { t: "I'm all right, thank you.", notes: 2, then: [
          { s: 'mrsoka', f: 'neutral', t: "You're all right. Of course you are. Look at you, all right from head to toe." },
          { n: "She didn't push. She put the lid back on the tin with both gloved hands and set the tea down at Solar's elbow instead, made the way Solar took it, without asking, which she'd known she would, and still it made the back of her neck go tight again." }
        ] },
        { t: "Did you make these today?", notes: 1, then: [
          { s: 'mrsoka', f: 'neutral', t: "Every day. I told you. Whether anyone comes or not." },
          { n: "Solar looked at the cold oven, and the dry board on its hook, and the clean sink, and didn't say anything. Mrs. Oka followed her eyes round the kitchen with great interest, as though seeing it for the first time herself, and then smiled at her, and poured the tea." }
        ] }
      ] },
      { n: "They sat at the end of the counter on two high stools, with the garden in the window and the steam going up off the cups, and Mrs. Oka asked about school and really listened, with her chin on her gloved hand, the way nobody over twenty in Iwatodai had listened to Solar in a year. She asked the second question, the one people forget to ask." },
      { n: "Then she reached across and took hold of Solar's lapel, and Solar went very still." },
      { s: 'mrsoka', f: 'neutral', t: "Look at that. Hanging by a thread. You'll lose that by Thursday, and then where will you be? Hold still. No, keep it on, it's quicker. I've got a needle in my apron. I've always got a needle in my apron." },
      // CG: eqx-oka-button — a middle-aged woman in an apron and thin white cotton gloves sewing a loose button back onto the blazer of a girl in a school uniform, close, the girl sitting very still on a kitchen stool, a window full of persimmon leaves behind them.
      { n: "She stood close to sew it. Close enough that Solar could smell her: sugar, and steamed rice, and under that something older and drier, like the inside of a coat that's been in a cupboard all winter. She worked quickly and well. She held the cloth with two fingers of her left hand and the needle with her right, and the thread went in and out, in and out, and her gloved knuckles brushed Solar's collarbone through the shirt every time the needle came up." },
      { n: "The fingertips of the gloves had been darned. All of them. Over and over, in white thread on white cotton, small careful patches on patches, as if she wore through them every week." },
      { s: 'mrsoka', f: 'neutral', t: "I wear through them. Rough hands. My mother had them too. You can't do anything about the hands you're given, child, you can only cover them up nicely and get on." },
      { n: "Her hand was very warm through the cloth. Heavier than it looked, when it rested for a second on Solar's shoulder to steady itself. Solar sat on the stool with her own hands flat on her knees and her shoulders locked and her breath held without having decided to hold it, and the feeling, whatever it was, went on being only in her body, and her head went on saying, quite reasonably, *she's sewing on a button*." },
      { choose: [
        { t: "(Hold still and let her.)", notes: 3, then: [
          { n: "She held still. It took a long time, or it felt like a long time, and Mrs. Oka hummed while she worked, low, close to her ear, the same tuneless little hum from the garden, and Solar's shoulders came down a quarter of an inch at a time on their own, the way they used to at a kitchen table a long way away when somebody fixed her hair before school. She didn't let them. They came down anyway." }
        ] },
        { t: "I can do it myself.", notes: 1, then: [
          { s: 'mrsoka', f: 'neutral', t: "I'm sure you can. You look like a girl who's done everything herself for a long time." },
          { s: 'mrsoka', f: 'neutral', t: "That's why I'm doing it. Somebody ought to. Hold still." },
          { n: "She didn't stop. She didn't hurry, either. The needle went in and out, and Solar held still, because there was nothing else to do with a needle that close to her, and because, somewhere under the tight place in her neck, she didn't want to do anything else." }
        ] },
        { t: "Does your family live here too?", notes: 2, then: [
          { s: 'mrsoka', f: 'neutral', t: "Oh, I never had any of my own. Never had the luck." },
          { s: 'mrsoka', f: 'neutral', t: "I've fed a great many, though. You'd be surprised how many. I've lost count. That's almost the same thing, isn't it, after enough years?" },
          { n: "She said it lightly, threading the needle through one last time, and Solar didn't know what to say to it, so she didn't say anything, and Mrs. Oka didn't seem to need her to." }
        ] }
      ] },
      { n: "She knotted the thread and bent her head and bit it off. Clean, with one snap, close to the cloth. Then she smoothed the lapel flat with the side of her hand, twice, and stepped back, and looked at the button with real satisfaction, and then at Solar, the same way." },
      { s: 'mrsoka', f: 'neutral', t: "There. Now you look looked after." },
      { s: 'mrsoka', f: 'neutral', t: "And your mother, child? Does she know where you are?" },
      { n: "It came so easily after the button that it went in under everything before Solar could put anything in its way. Her mother. Which one. All three of them were somewhere very far from a kitchen in Iwatodai, and none of them knew where she was, and she'd known that every morning since she woke up and had not, once, let herself say it in a sentence." },
      { choose: [
        { t: "Which one?", notes: 2, then: [
          { n: "She'd meant it as a joke. It didn't come out as one. Mrs. Oka didn't laugh at it, and didn't ask what she meant. She only nodded, slowly, as if *which one* were a perfectly ordinary answer, and she'd heard it before." },
          { s: 'mrsoka', f: 'neutral', t: "More than one. Well. Lucky girl. And every one of them a long way off." },
          { s: 'mrsoka', f: 'neutral', t: "Never mind. You've got me down the road. That's not nothing." }
        ] },
        { t: "No. She doesn't.", notes: 3, then: [
          { s: 'mrsoka', f: 'neutral', t: "Oh, child." },
          { n: "She put one gloved hand on top of Solar's head, very lightly, the way you'd test whether bread had risen, and left it there for a second, and took it away. It was such a small thing. It was nothing. Solar looked hard at the window and the persimmon leaves and waited for her throat to come back." },
          { s: 'mrsoka', f: 'neutral', t: "Somebody always knows where you are. Even when it doesn't feel like it. That's what I've always found." }
        ] },
        { t: "(Change the subject. Ask about the rooms upstairs.)", notes: 1, then: [
          { s: 'mrsoka', f: 'neutral', t: "The rooms! Yes. Oh, you're right, I wanted to ask you. Come and look. You can tell me if they'll do." },
          { n: "She didn't seem to mind at all that the question had been stepped round. She seemed, if anything, pleased, as if Solar had passed something." }
        ] }
      ] },

      { place: 'The Oka Boarding House · Upstairs', time: 'After School', bg: 'iwatodaidorm-hallway', soft: true },
      // BG: oka-boarding-house-upstairs — the upstairs corridor of an old wooden Japanese house, dark polished boards, a row of closed paper-and-wood sliding doors down one side, late afternoon light from one window at the end.
      { n: "Kirijo-san had said more were coming, Mrs. Oka said, going up the stairs ahead of her, and she wanted the rooms to be right for them. Children from far away needed a proper bed and a proper window. She'd made them all up. Would Solar have a look and tell her honestly if they'd do." },
      { n: "The upstairs was one long corridor of dark polished boards with a row of sliding doors down one side, eight of them, all shut, and a window at the far end with the afternoon going gold in it. It smelled of clean cotton and old wood and nothing else at all. No dust. A house with eight empty rooms and no dust." },
      { n: "At the first door Mrs. Oka stopped, and knocked on the frame with one knuckle, softly, the way you'd knock on a bathroom door in a house you've lived in alone for years. Then she stood back and folded her hands." },
      { s: 'mrsoka', f: 'neutral', t: "Would you? I don't go in where I haven't been asked. It's a silly habit. My mother was the same." },
      { choose: [
        { t: "It's your house.", notes: 1, then: [
          { s: 'mrsoka', f: 'neutral', t: "Even so." },
          { n: "She went on standing there, smiling, perfectly patient, and it became clear, after a while, that she would go on standing there until the sun went down, and Solar slid the door open." }
        ] },
        { t: "(Open the door for her.)", notes: 3, then: [
          { n: "She slid it open. It ran smooth and silent in its track, as if it were opened every day." }
        ] }
      ] },
      { n: "A small tatami room with a window onto the river side. A futon laid out in the middle of the floor, made up with a white sheet and a quilt with a pattern of small blue waves, turned back at one corner as if someone were expected to get into it tonight. A low tray by the pillow with a teacup on it, upside down, waiting. Nothing else. No hangers in the cupboard, no picture on the wall." },
      { n: "Mrs. Oka didn't go in. She looked past Solar's shoulder from the corridor, at the turned-down quilt, with an expression of deep and simple contentment." },
      { s: 'mrsoka', f: 'neutral', t: "Will it do?" },
      { choose: [
        { t: "It's lovely. Whoever gets it will be lucky.", notes: 3, then: [
          { s: 'mrsoka', f: 'neutral', t: "That's all I want to hear. That's all anybody needs, really, a clean bed and somebody glad they came." }
        ] },
        { t: "Who's it for?", notes: 2, then: [
          { s: 'mrsoka', f: 'neutral', t: "Whoever comes." },
          { n: "She said it with such easy certainty that for a moment it sounded less like *whoever happens to come* and more like a name she already had written down somewhere." }
        ] },
        { t: "(Open the next door too.)", notes: 2, then: [
          { n: "She went down the corridor and opened the next one, and Mrs. Oka followed her and knocked first, softly, on that frame too, a half-step behind her hand. The same room. The same futon, the same wave-pattern quilt turned down at the same corner, the same cup upside down on the same tray. And the next. And the next, all eight, one after another, eight beds made up for eight people nobody had named yet, waiting, in a house so quiet she could hear the quilts." }
        ] }
      ] },
      { n: "At the end of the corridor the window looked down into the garden. From up here she could see the whole of it: the bed she'd weeded, the basket, the gardening gloves drying on the bucket with their green fingertips hanging down, the persimmon tree, and under it the round gray cap of the well, with its four pale lines at one edge, catching the low sun like scratches on a record." },
      { n: "She looked at it for longer than she meant to. When she turned round Mrs. Oka was watching her look, from the far end of the corridor, by the stairs, with her gloved hands folded on her apron and her head a little on one side." },

      { place: 'Iwatodai · The Oka Boarding House', time: 'After School', bg: 'outside-daytime-neighborhood', soft: true },
      { n: "At the back step Mrs. Oka put a rice cake into her hand wrapped in a square of paper, still warm, and another one beside it, for the dog, she said, who wouldn't eat it, but you never knew, dogs changed their minds about people sometimes, given time." },
      { s: 'mrsoka', f: 'neutral', t: "Off you go, now. The light's going. They'll be counting heads at that dorm of yours, and I won't be the one who kept you." },
      { choose: [
        { t: "Thank you for the button.", notes: 3, then: [
          { s: 'mrsoka', f: 'neutral', t: "Thank you for the weeds. And the company. It's a big house for one." },
          { s: 'mrsoka', f: 'neutral', t: "You know where the latch is." }
        ] },
        { t: "Can I come back?", notes: 3, then: [
          { s: 'mrsoka', f: 'neutral', t: "Can you come back. Listen to her." },
          { s: 'mrsoka', f: 'neutral', t: "Child, you never have to ask me that. Not once. The door's open. It's only ever been open." }
        ] },
        { t: "(Just wave.)", notes: 1, then: [
          { n: "She waved. Mrs. Oka waved back, a small gloved flutter at shoulder height, like a mother at a school gate." }
        ] }
      ] },
      { n: "She stayed in the doorway. Solar noticed that at the gate, lifting the hook from the street side, looking back: Mrs. Oka on the threshold of her own front door, not past it, one hand on the frame, watching her go, with the house dark and warm behind her and the garden between them and the persimmon tree moving in a wind that still didn't reach the ground. She was still there at the corner. Solar didn't look back again after the corner." },
      { n: "The river came back two steps outside the gate, all at once, the hush of it, and a bird somewhere, and the dry cleaner's steam press, and a bicycle bell, as if she'd come up out of water." },
      { n: "It was dark by the time she got to the dorm. Properly dark, streetlights on, the lounge windows lit gold, Junpei's voice coming through the glass. She stood on the step and looked at her phone and found it was a quarter to seven. She'd gone in at four. She'd have said an hour. She'd have sworn to it." },
      { n: "There hadn't been a clock anywhere in that house. She went back over every room in her head, on the step, and couldn't find one." },
      { n: "She unwrapped the second rice cake for Koromaru inside the door, where he was lying across the mat with his chin on his paws, and held it out on her palm. He sniffed it once. Then he got up, and went and lay down on the far side of the hall, facing her, and didn't take his eyes off her hand until she'd thrown it away." }
    ] }
  ]
});
