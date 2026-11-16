/* Persona 3: Equinox · Mrs. Oka (Empress). Link data for femc-equinox-game.html; replaces her stub in ../links.js (same id).
   Format: link fields in assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written so far: ranks 1-2 (rank 1 opens 4/13, rank 2 opens 4/20, both after school at her house; rank 2 reads the
   4/16 supper flags and branches on eqx-tanabe, eqx-tale and Akihiko's / Jungwon's ranks). Rank 3 (from 6/1, after school at her house; branches on eqx-last-grain, eqx-hunted, eqx-stage, eqx-mitsuru-watch,
   Mitsuru's rank) holds her first link ask, to Solar: tally asks.solar.night (+ cakes / choose), flags eqx-oka-night-stayed,
   eqx-oka-night-mine; cosmetic eqx-oka-ate-own. Speaker hanni appears (post-eqx-hunted, waiting at the gate). Ranks 4-10 to come.
   Rank 2 holds no ask (she starts one and stops). Speaker without a portrait: hayashi.
   Her house isn't a Go Out area yet: `home` is the stub's stand-in on the Iwatodai Strip, and the scene uses stand-in
   backgrounds (BG comments mark the art it wants). No portrait art yet (speaker `mrsoka`, face 'neutral').
   Flags this file sets: none. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'mrsoka', name: 'Mrs. Oka', short: 'Mrs. Oka', arcana: 'Empress', numeral: 'III', from: 'Iwatodai', kind: 'native',
  romance: null, starts: '4/9', lodging: 'boarding',
  home: { area: 'okahouse', spot: 'The Kitchen', slot: 'after', days: [0, 1, 2, 3, 4, 5, 6],
          hint: 'Afternoons at the boarding house on the river side of Iwatodai, where the kettle is always on.' },
  approach: "Down on the river side, past the shrine, there's an old wooden house behind a low gate, and a woman in an apron and white cotton gloves kneeling under the persimmon tree in the garden, who looks up as you pass as if she'd been expecting you since lunch.",
  cast: { mrsoka: 'Mrs. Oka', hayashi: 'Mr. Hayashi' },
  ranks: [
    { after: '4/13', title: '1: loose thread', place: 'Iwatodai · The Oka Boarding House', time: 'After School', music: 'tender', scene: [
      { bg: 'eqx-oka-gate' },
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

      { place: 'The Oka Boarding House · Kitchen', time: 'After School', bg: 'eqx-oka-kitchen', soft: true },
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

      { place: 'Iwatodai · The Oka Boarding House', time: 'After School', bg: 'eqx-oka-gate', soft: true },
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
    ] },
    { after: '4/20', title: '2: darning', place: 'Iwatodai · The Oka Boarding House', time: 'After School', music: 'tender', scene: [
      { bg: 'eqx-oka-gate' },
      { n: "She lifted the latch from the street side without thinking about it this time, which she noticed only after, standing in the garden with the gate knocking softly shut behind her, the way you notice you've learned someone's phone number by heart." },
      { n: "The garden was full of the smell of something frying. The persimmon tree had come all the way into leaf in a week, dense and glossy and dark, and still there wasn't a bird in it. Under it, the well, the moss, the four pale lines. She didn't look at them for long. She'd decided on the walk over that she wasn't going to look at them for long." },
      { n: "There were shoes on the step. Not one pair. Five, six, lined up neatly at the edge of the boards, toes to the garden: men's shoes, old ones, black and brown and one pair of rubber boots with fish scales dried on the toes." },
      { n: "Mrs. Oka opened the door before Solar reached it, as if she'd seen her from the window, and stood on the threshold, not past it, with a wooden spoon in one gloved hand and her face doing the slow lit thing, the lamp in the window." },
      { s: 'mrsoka', f: 'happy', t: "There she is. And on a weekday, with homework, I can see it in your bag. Come in, come in. Mind the boots. Mr. Hayashi will leave them there." },
      { ifFlag: 'eqx-supper-stayed', then: [
        { s: 'mrsoka', f: 'happy', t: "You were such good company the other night, child. I haven't laughed like that in years. I don't think you've ever told a story so well in your life. You'll have to tell it again, you'll have forgotten half." },
        { n: "Solar smiled and said something. She couldn't have said what story. She'd tried, all week, to remember anything at all about that supper past the first cup of tea, and every time she tried it was like reaching into a drawer and finding it smooth and empty and lined with paper." }
      ] },
      { ifFlag: 'eqx-supper-mine', then: [
        { s: 'mrsoka', f: 'neutral', t: "*Up to me.* I've been thinking about that, you know, all week. I said it to myself at the sink. Up to me. Isn't it a lovely thing to be able to say." },
        { s: 'mrsoka', f: 'happy', t: "Well, it's up to you whether you have tea, then. And I'll make it anyway, and you can decide when it's in front of you." }
      ] },
      { ifCount: { of: ['eqx-supper-stayed', 'eqx-supper-mine'], max: 0 }, then: [
        { s: 'mrsoka', f: 'neutral', t: "Your place is still laid. At the end of the table. I said I'd keep it, and I have." },
        { n: "She said it as if it were a kindness, and it was, probably, and the back of Solar's neck went tight anyway, all at once, the way it had on the stool when the needle came up past her collarbone." }
      ] },

      { place: 'The Oka Boarding House · Kitchen', time: 'After School', bg: 'eqx-oka-kitchen', soft: true },
      { n: "The kitchen was full. That was what the shoes had meant. At the long table, on the cushions down both sides, there were six old men, in cardigans and work jackets and one in a fishing vest, eating. Bowls of rice, a plate of fried fish, pickles, the tin of rice cakes open in the middle of the table and half empty. They were eating the way boys eat, heads down, without talking, steadily, as if it were the first meal they'd had in a long time and they'd been told it might be taken away." },
      { n: "They looked up when she came in. All six. At the same moment, the way people look up at a sound. Then they looked down again and went on eating." },
      { s: 'mrsoka', f: 'happy', t: "My gentlemen from the pier. They come at four now, every day. Don't mind them. They don't mind you. Do you, gentlemen?" },
      { n: "Nobody answered her. One of them, the one in the fishing vest, round-faced, with a little paunch pushing at the buttons of a vest that had clearly fit him a few weeks ago, lifted his bowl to her in a kind of salute, and she put another spoon of rice in it, and patted his shoulder twice with her gloved hand, and he smiled up at her with his mouth full like a child." },
      { s: 'mrsoka', f: 'neutral', t: "More, Mr. Hayashi? You'll stay for more?" },
      { s: 'hayashi', t: "...I'll stay a bit longer. If it's no trouble." },
      { s: 'mrsoka', f: 'happy', t: "No trouble at all. It's never any trouble. That's what a kitchen's for." },
      { ifRank: { akihiko: 2 }, then: [
        { n: "Hayashi. The fisherman on the pier had said the name, chewing on it like a joke between him and someone else: *Hayashi went first. Hayashi's put on two kilos.* Solar looked at the round face over the bowl, and the vest straining, and the fork going up and down, and thought of one old man left alone on the end of a pier with a radio and a cool box, saying *I told her no*." }
      ] },
      { n: "Mrs. Oka didn't sit with them. She never sat, Solar realized; she moved round the table behind them, filling bowls, setting down cups, and each man's tea was different, green for one and barley for another and something dark and smoky for the one in the work jacket, and she never once asked which." },
      { s: 'mrsoka', f: 'neutral', t: "Now. You. Not at the table, the table's for the gentlemen. Come and sit by me at the end of the counter. I've got a job for you, if you'll have it. Something for your hands." },

      { n: "The job was darning. There was a basket on the end of the counter, a deep old one with a lid, full of mending: socks, a man's work shirt with the elbow out, a child's cardigan, a tea towel, all neatly folded with the holes facing up. And on top, a wooden darning egg, smooth and dark from years of hands, and a card of white cotton thread, and a needle already threaded." },
      { s: 'mrsoka', f: 'neutral', t: "Do you darn? No. Nobody your age darns. You throw things away. I don't blame you. But it's a nice thing to know, child. Holes come for everybody." },
      { s: 'mrsoka', f: 'neutral', t: "You put the egg inside, under the hole, so. And you go across, and across, and across, all the threads lying down side by side. And then you go *through* them, over and under, like weaving. And the hole's still there. It's just got something in it now." },
      { choose: [
        { t: "(Try it. Go slowly.)", notes: 3, then: [
          { n: "She tried it. The sock was a man's, gray wool, gone through at the heel. She put the egg inside and stretched the wool over it and went across, and across, and Mrs. Oka watched her hands and said nothing, which was its own approval, and when she started going through, over and under, she felt her shoulders come down, the way they'd come down at the button. Her hands knew this. Some kitchen, some life, some woman beside her doing it faster." },
          { s: 'mrsoka', f: 'happy', t: "There. Look at that. You've got the patience for it. Most people don't. Most people want it finished." }
        ] },
        { t: "Whose are all these?", notes: 2, then: [
          { s: 'mrsoka', f: 'neutral', t: "Oh, everybody's. The gentlemen's. The lady from the dry cleaner. That's a little boy's, from the house at the end. People leave them on the step." },
          { s: 'mrsoka', f: 'neutral', t: "I don't charge. What would I charge for? I like to have something in my hands. And everybody comes back for their things, you see. Sooner or later. Everybody comes back." }
        ] },
        { t: "I'll make a mess of it.", notes: 1, then: [
          { s: 'mrsoka', f: 'neutral', t: "Then you'll make a mess of it, and I'll unpick it, and you'll do it again. That's all mending is. Doing it again." },
          { n: "She said it so warmly that Solar picked up the needle before she'd decided to." }
        ] }
      ] },
      { n: "Mrs. Oka took a mending of her own out from the bottom of the basket and sat down on the other stool, close, so their elbows nearly touched. A glove. One of her own, the thin white cotton, the spare of a pair. She put the darning egg into the fingers of it, one at a time, and turned it to the light." },
      { n: "Solar watched her do it. She couldn't help it. The glove on the egg was empty, and the hand holding it was gloved, the same white cotton, and for a second there were two of them in the lamplight, the glove and the hand, one full and one not, and she found she was looking at the empty one more carefully than she'd ever looked at anything." },
      { n: "All four fingertips were worn through. Not the way her own tights wore through, thin and then gone. Each one had a small neat hole right at the very tip, the same size, and round each hole the threads of the cotton weren't frayed in, the way they'd fray from rubbing on a table or a broom. They were pushed out. Splayed outward, all of them, in a little ring, like the edge of a hole in paper where something has been pressed through from the inside." },
      // CG: eqx-darning — a woman's hands in thin white cotton gloves darning the fingertip of a spare white glove stretched over a dark wooden darning egg, close, lamplight, a teenage girl's hands beside them with a gray sock on another egg.
      { s: 'mrsoka', f: 'neutral', t: "Rough hands. I told you. Long nails, my mother had them, I've got them. I wear through the ends faster than I can mend them." },
      { s: 'mrsoka', f: 'happy', t: "I'd cut them, but then where would I be? A woman needs something to open jars with." },
      { n: "She laughed, the short warm embarrassed laugh, and went across, and across, and through, over and under, very fast and very small, and closed the first hole in about the time it took Solar to breathe out." },
      { choose: [
        { t: "(Keep your eyes on your own sock.)", notes: 3, then: [
          { n: "She looked at her own work. She made herself. Across, and through, over and under, and the gray wool closed over the wooden egg a thread at a time, and beside her the white thread went in and out of the white glove so fast it hissed, and she did not look, and did not look, and the tight place in the back of her neck went all the way down her spine and sat at the base of it like a stone." }
        ] },
        { t: "Don't you ever take them off? The gloves?", notes: 1, then: [
          { s: 'mrsoka', f: 'neutral', t: "In the bath." },
          { s: 'mrsoka', f: 'happy', t: "And not always then. Old habits. You'll laugh at me." },
          { n: "Solar didn't laugh. Mrs. Oka didn't seem to need her to. She bit the thread off close to the glove with her front teeth, one clean snap, and started on the next finger." }
        ] },
        { t: "You're very quick.", notes: 2, then: [
          { s: 'mrsoka', f: 'neutral', t: "I've had a lot of practice. A very, very long time of practice." },
          { s: 'mrsoka', f: 'neutral', t: "When you've done a thing that many times your hands do it without you. You could put me to sleep and I'd go on darning." }
        ] }
      ] },
      { ifEvent: 'eqx-tanabe', then: [
        { s: 'mrsoka', f: 'sad', t: "I heard about that poor man. At the guesthouse." },
        { n: "She said it softly, to the glove. Behind them the old men went on eating; nobody at the table looked up." },
        { s: 'mrsoka', f: 'sad', t: "Mr. Tanabe. He used to come by on his way to his shift, some evenings, for a rice cake. Just the one. The plain ones; he didn't like the sweet bean. Such a lonely man. He told me he still set out two cups at night. Out of habit." },
        { s: 'mrsoka', f: 'worried', t: "I sent a box round, after. To the guesthouse. Grief wants feeding, child. It's the first thing it forgets, and the first thing it needs." },
        { s: 'mrsoka', f: 'sad', t: "...I hope somebody ate them." },
        { choose: [
          { t: "I don't know if anyone did.", notes: 2, then: [
            { s: 'mrsoka', f: 'neutral', t: "No. Well. It's the thought, they say." },
            { n: "She smoothed the glove flat on her knee, twice, with the side of her hand, the way she'd smoothed the lapel." }
          ] },
          { t: "You knew him?", notes: 2, then: [
            { s: 'mrsoka', f: 'neutral', t: "I know everybody on this side of the river, child. Everybody comes past my gate, sooner or later. He had his ring on the wrong hand. His wife's, he said. I always notice hands." }
          ] }
        ] }
      ], else: [
        { s: 'mrsoka', f: 'neutral', t: "That night manager at the Kirijo place comes by, some evenings. On his way to his shift. For one rice cake, just the one, the plain kind, he doesn't like the sweet bean." },
        { s: 'mrsoka', f: 'neutral', t: "A widower. Wears his ring on the wrong hand; his wife's, he says. He told me he still sets out two cups at night. Out of habit." },
        { s: 'mrsoka', f: 'sad', t: "I told him that's what love is, child. Setting out the cup. Waiting up. I said she'd be glad to know somebody was still waiting up." },
        { ifRank: { jungwon: 1 }, then: [
          { n: "She said it kindly. She said it the way you'd say anything true and sad over a piece of mending, and Solar thought of Jungwon in the council room saying *one of these nights he's going to get up in time*, and didn't know why the two sentences wanted to stand next to each other, and didn't let them." }
        ], else: [
          { n: "She said it kindly. She said it the way you'd say anything true and sad over a piece of mending, and Solar thought of a man she'd never met setting out a cup for nobody in a little room at night, and waiting up, and the thought went through her cold, and she didn't know why, and put it down." }
        ] }
      ] },

      { n: "The light went long in the window. The old men finished, one by one, and set down their chopsticks, and sat. They didn't get up. They sat at the table with their hands in their laps and their bowls empty in front of them, looking at nothing in particular, contented, like men on a bench in the sun, and Mrs. Oka went round behind them and filled their cups again, and none of them moved to go." },
      { ifEvent: 'eqx-tale', then: [
        { n: "She was humming. Solar heard it start somewhere behind her, at the stove, low, with her mouth closed, and she knew it before the third note. Three up. Two down. A long one. The tune from the veranda, from Ken's ears and the carp streamers. The tune from Haechan's tape. The tune from the water at the bottom of the Well." },
        { n: "None of the old men turned round. One of them, the one in the work jacket, had closed his eyes, and was nodding very slightly, in time." }
      ], else: [
        { n: "She was humming at the stove, low, the nothing-tune, the one with no shape, the sound of someone who'd been alone in a kitchen long enough to forget anyone might hear. None of the old men turned round. One of them, the one in the work jacket, had closed his eyes, and was nodding very slightly, as if there were a beat in it only he could hear." }
      ] },
      { n: "Solar finished the heel. It wasn't good. It was lumpy at one edge and she'd pulled one row too tight, so the wool puckered. But the hole was gone. She held it up. Mrs. Oka came and looked at it over her shoulder, close, sugar and steamed rice and the cupboard smell, and made a small sound of real pleasure, as if she'd been given something." },
      { s: 'mrsoka', f: 'happy', t: "Look at that. That'll hold. That'll hold for years. Mr. Kondo will never know a girl did that for him." },
      { s: 'mrsoka', f: 'neutral', t: "You keep the egg. No, keep it, I've got three. Take it back to that dorm of yours. You've got a house full of children who go through their socks, I should think." },
      { choose: [
        { t: "Thank you. I'll use it.", notes: 3, then: [
          { s: 'mrsoka', f: 'happy', t: "You will. I can tell. You've got mending hands." },
          { n: "She put the darning egg into Solar's palm and closed Solar's fingers over it with her own gloved ones, and held them closed a moment, warm and heavy, and Solar felt, through the cotton, through the shape of the wood, something at the tips of the fingers holding hers that was harder than fingertips, and smaller, and pressed, very gently, four places at once, and was gone." }
        ] },
        { t: "I couldn't. It's yours.", notes: 1, then: [
          { s: 'mrsoka', f: 'neutral', t: "Everything in this house is mine. I can give away what I like. That's the one good thing about having nobody." },
          { n: "She put it in Solar's blazer pocket herself, the way you'd put a sweet in a child's pocket at a door, and patted the pocket flat, twice." }
        ] }
      ] },

      { place: 'Iwatodai · The Oka Boarding House', time: 'Evening', bg: 'eqx-oka-gate', soft: true },
      { n: "She walked Solar to the door and stopped on the threshold, as she always did, one hand on the frame. Behind her, down the hall, through the kitchen door, Solar could see the end of the long table and the old men still sitting at it in the lamplight, their backs to her, not talking, not moving to go." },
      { n: "Her own place was laid at the far end of it. She saw that only now. A cushion. A bowl, upside down. A cup, upside down on a little tray." },
      { s: 'mrsoka', f: 'neutral', t: "Next time—" },
      { n: "She stopped. She smiled, at herself, the embarrassed one, and shook her head, and put the gloved hand flat against her own apron, as if she'd caught a word on its way out and was holding it in." },
      { s: 'mrsoka', f: 'happy', t: "No. Never mind. I was going to say something. It'll keep." },
      { s: 'mrsoka', f: 'neutral', t: "Things keep, in this house. You'd be surprised how long." },
      { choose: [
        { t: "Goodnight, Mrs. Oka.", notes: 2, then: [
          { s: 'mrsoka', f: 'happy', t: "Goodnight, child. Mind the latch. It's on your side." }
        ] },
        { t: "What were you going to say?", notes: 2, then: [
          { s: 'mrsoka', f: 'neutral', t: "Oh, nothing. Something an old woman says. You'll hear it soon enough." },
          { s: 'mrsoka', f: 'happy', t: "Go on. Before they count heads." }
        ] },
        { t: "(Wave from the gate.)", notes: 1, then: [
          { n: "She waved from the gate. Mrs. Oka waved back, the small flutter at shoulder height, and didn't step out onto the step, and didn't close the door, and was still standing in it at the corner, a dark shape in a lit frame." }
        ] }
      ] },
      { n: "The river came back two steps outside the gate, all at once, the hush and the cold and a dog barking somewhere upstream, frantic, on and on, as if it had been barking for an hour and nobody had listened." },
      { n: "It was dark. Her phone said half past seven. She'd gone in at four. She stood on the river road and put her hand in her blazer pocket, round the smooth wooden egg, and held it, and it was warm, warmer than her hand, as if it had been held a long time by someone else, and she walked back to the dorm the long way, the bright way, past the shops, and didn't look at the river." },
      { n: "On the dorm's front step, Koromaru was waiting for her. Not lying across the mat. Standing, in the middle of the step, legs set, his eyes on her blazer pocket. He didn't growl. He just stood there, and didn't let her past, until she took the darning egg out and put it down on the wall by the gate, and stepped away from it, and then he came and pushed his whole head into her stomach, hard, and stayed there." }
    ] },
    { after: '6/1', title: '3: let it rest', place: 'Iwatodai · The Oka Boarding House', time: 'After School', music: 'tender', scene: [
      { bg: 'eqx-oka-gate' },
      // BG: oka-boarding-house-garden-rain — the same garden in the rainy season, the persimmon tree dense and dark with small hard green fruit, blue hydrangeas heavy with water round the old stone well, rain beaded on its moss-furred cap, a low wooden gate.
      { n: "The rainy season had come in the way it always came, not as weather so much as a change in the air's whole idea of itself, and by the first week of June the river road smelled of wet stone and cut grass and the river, and everything on it had gone soft at the edges, the walls and the gates and the shop awnings, as if the town had been left out overnight and was slowly being absorbed." },
      { ifEvent: 'eqx-hunted', then: [
        { n: "Hanni had walked her down. That was the rule now, Mitsuru's, in red under the word on the whiteboard: twos, after dark, anywhere. It wasn't dark. Hanni had come anyway, with her umbrella and her arms folded, and she stopped at the gate as if the gate were the edge of a cliff, and wouldn't go one step past it." },
        { s: 'hanni', f: 'serious', t: "I'm not coming in. I'm going to stand here. I'm going to stand right here, Sol, by this exact post, and if you're not out by dark I'm coming in after you, and I don't care whose house it is." },
        { n: "She said it loud enough to carry to the house. Solar thought, briefly, that was the point." }
      ] },
      { n: "She lifted the latch from the street side. The persimmon tree had fruit on it now, small and hard and green, dozens of them, tucked up under the leaves like fists, and still not a bird, not one, though the tree next door over the wall was full of sparrows arguing. Round the well somebody had planted hydrangeas. Or they'd always been there and Solar hadn't seen them. They were blue, a deep, bruised, rainy blue, heavy with water, leaning in toward the stone cap from all sides as if listening at it." },
      { n: "Mrs. Oka was on the step, just inside the door, never on the step, with a dish towel over her shoulder and flour to the wrists of her gloves." },
      { ifEvent: 'eqx-last-grain', then: [
        { n: "She looked smaller. That was the first thing. Not thinner; nothing about Mrs. Oka would ever be thin. Smaller, the way people look smaller in the week after a funeral, as if grief had taken a few centimeters off all the way round. Her eyes were red at the rims. She'd done her hair anyway, the gray plait pinned up neatly, and she smiled when she saw Solar, the whole slow lamp of it, and the lamp was only a little dimmer than before." },
        { s: 'mrsoka', f: 'sad', t: "There she is. Oh, there she is. Come in, child. Come in out of the wet. I'm making them. I can't stop making them. My hands don't know he's gone, you see. They just go on." }
      ], else: [
        { s: 'mrsoka', f: 'happy', t: "There she is. Oh, good, you've come on a tin day. I'm doing the tin for Monday. Come and do it with me, I'll teach you. It's time somebody learned it who isn't me." }
      ] },
      { ifEvent: 'eqx-hunted', then: [
        { s: 'mrsoka', f: 'neutral', t: "And your friend won't come in. No, I can see she won't. Twos, I hear. Very sensible. I'll send her out a cup." },
        { n: "She did. She sent it out on a tray with a rice cake beside it, and Solar watched from the kitchen window as Hanni took the cup politely, both hands, with a little bow, and waited until the door had shut, and poured the whole thing into the gutter, and put the rice cake in the pocket of her raincoat without looking at it, the way you'd pocket something to throw away somewhere it couldn't follow you home." }
      ] },

      { place: 'The Oka Boarding House · Kitchen', time: 'After School', bg: 'eqx-oka-kitchen', soft: true },
      { n: "The kitchen was warm and close and full of the sound of rain on the tiles, and it smelled the way it always smelled, sugar and steamed rice and, under them, faint, the cupboard. On the long counter there was a board, a big one, pale wood scrubbed almost white, and beside it a wooden bowl, and beside that a bin." },
      { ifEvent: 'eqx-shoes', then: [
        { n: "The fathers were upstairs. They'd been upstairs all day, Mrs. Oka said, softly, the three of them in one room with the door shut, and she'd taken trays up and brought them down again full. She said it the way you'd say it about anyone's grief. She said it fondly." }
      ], else: [ { ifEvent: 'eqx-table-op', then: [
        { n: "The parents were out. Mitsuru's men had taken all six of them into town for the afternoon, and the house had the particular hush of a house whose family has just gone out, still warm from them, a cardigan on a hook, a pair of reading glasses folded on the windowsill." }
      ] } ] },
      { n: "She'd never noticed the bin. It stood at the end of the counter by the wall, a tall wooden thing with a lid, old, dark, the kind of bin a farmhouse kept rice in for a whole winter, with a scoop hung on a nail beside it. No label. No shop's name. Mrs. Oka lifted the lid and dipped the scoop in, and it came up white." },
      { s: 'mrsoka', f: 'neutral', t: "Rice flour. I do my own. The shop kind's coarse, you can feel it on your tongue. This is how my mother did it, and hers before her. Fine as fine. Put your hand in. Go on. Feel it." },
      { choose: [
        { t: "(Put your hand in the bin.)", notes: 3, then: [
          { n: "She put her hand in. It was softer than flour should be, softer than anything, finer than talc, so fine it seemed to go into the creases of her knuckles before she'd touched it, and it was warm. Not warm from the kitchen. Warm the way a bed is warm when someone's only just got out of it." },
          { s: 'mrsoka', f: 'happy', t: "There. You see? Like silk. Nobody believes me till they've had their hands in it." }
        ] },
        { t: "Where do you grind it?", notes: 2, then: [
          { s: 'mrsoka', f: 'neutral', t: "Oh, out the back. At night, mostly. It's slow work and the nights are long, and I don't sleep much. Never have. My mother used to say I'd sleep when I was dead." },
          { n: "She laughed, the short warm embarrassed one, and held the scoop out, and Solar took it, because there was no way not to." }
        ] },
        { t: "(Let her pour it. Keep your hands at your sides.)", notes: 2, then: [
          { n: "She kept her hands where they were. Mrs. Oka didn't seem to notice; she poured the flour into the bowl herself, a soft white heap, and it went on settling after she'd stopped, slowly, the way snow settles on a sill, and a breath of it hung in the warm air between them and didn't come down." }
        ] }
      ] },
      { n: "Water from the kettle, not quite boiling. A pinch of sugar. Mrs. Oka worked it with a wooden paddle until it came together, shaggy, steaming, and then she tipped it out onto the board, and stood back, and looked at Solar, and waited." },
      { s: 'mrsoka', f: 'neutral', t: "Now your hands. The heel of them. Push it away from you, so. Fold it back. Turn it a little. Push. Fold. Turn. And again. Don't be gentle, child. It doesn't want gentle. It wants to be worked till it gives in." },
      { n: "The dough was hot on her palms. It was soft and heavy and a little damp and it gave under the heel of her hand and then came back, slowly, against it, the way a cheek gives under a thumb. Push. Fold. Turn. Her hands found the shape of it before she did. Some kitchen, some life. Rain on the roof, a radio, a woman's hip against her shoulder, the board knocking softly on the counter with every push." },
      { n: "Mrs. Oka stood beside her and didn't help, and started to hum." },
      { ifEvent: 'eqx-hunted', then: [
        { n: "And Solar's hands stopped." },
        { n: "Not all at once. They went on for one more push, one more fold, and then the rhythm of it reached her, the sound of it, which she hadn't been listening to because she'd been making it: the soft wet slap and push of something heavy and pale being worked on a wooden board, over and over, patient, under a woman humming, three up, two down, a long one." },
        { n: "She'd heard it on a coffee table in the lounge with forty people round her. She'd heard Hyein get up and go out of the room very fast. She'd heard Haechan say *I thought it was the river*." },
        { n: "Her hands were in it. Her hands were in the dough to the wrist, warm, and her heart was going so hard she could feel it in the dough, and Mrs. Oka was humming beside her at the counter, cheerful, unhurried, the way you'd hum in your own kitchen on a wet afternoon with nobody listening." },
        { choose: [
          { t: "(Keep going. Push. Fold. Turn.)", notes: 3, then: [
            { n: "She kept going. She made her hands do it. Push, fold, turn, and her own rhythm on the board under the humming, the exact sound from the tape, so that if anyone had been taping this kitchen from a laundry room across town tonight they'd have heard it, and she didn't stop, because stopping would have meant something, and she didn't want Mrs. Oka to look round and ask her what." }
          ] },
          { t: "(Take your hands out. Go to the sink.)", notes: 2, then: [
            { n: "She took her hands out of it and went to the sink and ran the tap, hot, and held her hands under it, and the dough came off her fingers in soft white strings and went down the drain, and the humming behind her didn't stop and didn't change and didn't miss a note." },
            { s: 'mrsoka', f: 'neutral', t: "That's right. Rest it. It needs to rest, and so do you. You're not used to work like that, are you. City hands." }
          ] }
        ] }
      ], else: [
        { n: "Three up. Two down. A long one. Solar knew it now; she'd known it since May, since the veranda and the carp streamers. She found her hands were keeping time with it, push on the third note, fold on the long one, and she didn't know how long they'd been doing that, and she couldn't make them stop without stopping altogether." },
        { s: 'mrsoka', f: 'happy', t: "There. Hear that? You've got the beat of it. That's the whole trick. It's not strength. It's keeping time." }
      ] },
      { n: "They let it rest under a damp cloth on the board, a soft white mound, and Mrs. Oka made tea, and it rained, and the cloth over the dough rose and fell very slightly in the warm kitchen, the way dough does, the way a sheet does over somebody asleep." },
      { ifFlag: 'eqx-mitsuru-watch', then: [
        { n: "Solar looked at the watch on her wrist. Mitsuru's father's, too big, the crease of somebody else's wrist pale against hers. Twenty past four. She'd come in at ten to four. She would have sworn on anything that an hour had gone. She looked at it again a minute later, and it said twenty past four, and the second hand was going round, steadily, and she put her hand over the face and didn't look again." }
      ] },
      { n: "Then the shaping. Mrs. Oka pinched off a piece no bigger than a walnut and flattened it on her gloved palm and put a spoon of red bean in the middle and drew the edges up round it, quick, with her fingertips, and pinched it shut and rolled it once and set it down on the tray, round and white and perfect, as if it had always been that shape." },
      { s: 'mrsoka', f: 'neutral', t: "You close it all the way, so nothing gets out. Nothing in, nothing out. If you leave a gap it splits when it steams." },
      { s: 'mrsoka', f: 'neutral', t: "Everybody's come out a little different, you know. I could tell you whose hands made every one in that tin, if I had a mind to. Everybody leaves something of themselves in it." },
      { ifEvent: 'eqx-last-grain', then: [
        { n: "In the front room, through the screens, Solar could see the long table. Every cushion straight. Every place cleared. Except the end one, nearest the kitchen, where a cushion had been left and a cloth folded square on top of it, white, the way you'd fold a napkin, and a bowl turned upside down beside the cloth." },
        { s: 'mrsoka', f: 'sad', t: "I can't bring myself to clear his place. Isn't that foolish. He'll not be wanting it." },
        { s: 'mrsoka', f: 'sad', t: "...He never once said no to me. Not once, in four months. You don't know how rare that is, child. How rare and how dear." }
      ] },
      { n: "Solar made twelve. The first four were lumpy and one split on the tray. By the ninth they were nearly round. Mrs. Oka made sixty in the same time and didn't seem to be hurrying, and when the tray was full she took the twelfth one of Solar's off the end, the best one, and set it on a saucer by itself, and slid the saucer down the counter to her." },
      { s: 'mrsoka', f: 'happy', t: "That one's yours. Your own. Eat it here, where I can see your face. I always like to see the face when somebody eats the first one they made." },
      { choose: [
        { t: "(Eat it.)", notes: 3, flag: 'eqx-oka-ate-own', then: [
          { n: "She ate it. It was still warm. It was the best thing she'd ever eaten in her life, in any of her lives, soft and sweet and faintly salt, the red bean dark and smooth, and the skin of it so fine it seemed to melt before her teeth were through it, and under the sweetness, at the very back, very faint, something she couldn't name, that made her want another one so badly her hands ached." },
          { n: "She didn't like that. She noticed she didn't like it. She smiled at Mrs. Oka with her mouth full, and Mrs. Oka watched her face with an expression of such complete and tender satisfaction that Solar looked down at the saucer and didn't look up for a while." }
        ] },
        { t: "Can I take it home? For later.", notes: 2, then: [
          { s: 'mrsoka', f: 'neutral', t: "Of course you can. Things are better the second day, some things. Here." },
          { n: "She wrapped it in a square of white paper and twisted the ends, like a sweet, and put it in Solar's blazer pocket herself, and patted the pocket flat, twice." }
        ] },
        { t: "You have it. You've been on your feet all afternoon.", notes: 2, then: [
          { s: 'mrsoka', f: 'neutral', t: "Me? Oh, I never eat my own. Never have. You lose the taste for it, making it. I just like to see it go." },
          { n: "She put it in the tin with the others, on the top, in the corner, where it would be the first one anyone took." }
        ] }
      ] },

      { place: 'The Oka Boarding House · Upstairs', time: 'Evening', bg: 'iwatodaidorm-hallway', soft: true },
      // BG: oka-boarding-house-upstairs (as rank 1) — the same dark upstairs corridor, rain on the end window, a lamp lit low in the passage.
      { n: "She asked for help carrying the clean sheets up. That was all. A basket of them, folded and still warm from the iron, and Solar took one handle and Mrs. Oka the other, and they went up the stairs together, and the stairs didn't creak, any of them, which Solar noticed now that she knew what a house that creaked sounded like." },
      { n: "Eight doors. Eight rooms down the one side of the dark corridor, the rain loud on the window at the far end. Mrs. Oka knocked once on each frame with one knuckle as she passed, soft, the way you'd touch a child's head going by." },
      { ifEvent: 'eqx-stage', then: [
        { n: "Four of them had shoes outside now. Sneakers, a pair of slippers with ears, a pair of ballet flats lined up toe to the wall with a dancer's neatness. The girls' rooms. Music coming faintly through one door, and someone laughing at something on a phone, and Solar felt her shoulders come down a centimeter, as if a house could only be so frightening with a girl laughing in it." }
      ] },
      { n: "The end room was open." },
      { n: "It was the only door in the corridor standing open, slid back a hand's width, and inside there was the same futon turned down, the same tray by the pillow, the same cup upside down on the tray, the same nothing, no dust. And laid across the foot of the futon, folded, a cotton yukata, indigo, with a pattern of small white cranes. It was her size. She could see it was her size from the door." },
      { ifRank: { mitsuru: 1 }, then: [
        { n: "The end room. Mitsuru on the motorcycle in April, the long way past this house at nine at night, and a light coming on behind one of the upstairs screens as they passed, the end one, and nobody at the window." }
      ] },
      { n: "The window looked down into the garden, onto the persimmon tree, and the well under it, and the blue hydrangeas leaning in round the cap with the rain beading on the moss." },
      // CG: eqx-end-room — an upstairs room in an old Japanese house on a rainy evening, a futon turned down, a cup upside down on a tray by the pillow, an indigo cotton yukata with small white cranes folded at its foot, a window onto a garden with a persimmon tree.
      { s: 'mrsoka', f: 'neutral', t: "This one's yours. It's been yours since April. I knew the minute I made it up which of you it was for." },
      { s: 'mrsoka', f: 'happy', t: "Feel the futon. Go on. Proper cotton, not like those dorm things. I air it every day. You'd sleep like a baby in it. Like you've never slept." },
      { n: "Solar didn't feel the futon. She stood in the doorway with the basket handle still in one hand and looked at the yukata with the cranes, folded, waiting, and Mrs. Oka stood just behind her, close, not touching, sugar and rice and the cupboard, and the rain came down on the window at the end of the corridor, and down on the well, and down." },
      { s: 'mrsoka', f: 'neutral', t: "Stay tonight." },
      { s: 'mrsoka', f: 'neutral', t: "Just the one night, child. The rain's set in. I'll do you a breakfast you'll tell your grandchildren about. You've been carrying that whole dorm on your back since April, I see it on you, I see it every time you come up my path. One night where nobody needs anything from you. Just one." },
      { n: "It was the kindest thing anyone had said to her in weeks. She felt it go into her, warm, under the ribs, and sit down there, the way the dough had sat under its cloth, and rise." },
      { choose: [
        { t: "(Stay.)", notes: 3, tally: { cakes: 1, 'asks.solar.night': 'yes' }, flag: 'eqx-oka-night-stayed', then: [
          { n: "She said yes. She heard herself say it, and it was easy, it was the easiest thing she'd said all year, and Mrs. Oka made a small sound of real pleasure, as if she'd been given something, and put a gloved hand on her back between the shoulder blades, warm and heavy, and left it there a moment." },
          { n: "She remembered the yukata. The cotton cool on her arms, the cranes. She remembered the futon, which was everything Mrs. Oka had said it would be. She remembered a soft knock on the doorframe, once, with one knuckle, and a voice saying *goodnight, child*, and the rain." },
          { n: "Then it was morning." },
          { n: "Gray light through the paper screen. The rain stopped. A smell of grilled fish and rice coming up the stairs. She lay on her back and looked at the ceiling and tried to find the night, the red, the hour that had stood in the middle of every night of her life since she was seventeen, and there was nothing. Not a dream. Not waking. Not the red. She'd been awake for every Dark Hour since the first one. She had slept through this one like a child, like a stone, and she didn't know where she'd been while she did it." },
          { n: "The cup on the tray by her pillow was the right way up. It was full of tea, gone cold, with a skin on it. She hadn't poured it. She hadn't turned it over." },
          { ifFlag: 'eqx-mitsuru-watch', then: [
            { n: "The watch on her wrist said seven minutes past six. Her phone said ten past twelve. She stared at them both until she understood. It had stopped at midnight, the way it stopped in the red. And it hadn't started again until six. As if the hour had been six hours long, in this room. As if, in this room, it had only just ended." }
          ] },
          { ifEvent: 'eqx-hunted', then: [
            { n: "Hanni was on the step outside the gate. Sitting on it, in Mitsuru's yellow raincoat, with her knees up and her arms round them and Koromaru lying across her feet, and her phone in her hand with the screen gone dark. She'd been there since nine. She didn't say anything when Solar came out. She stood up and looked at her face for a long time, and then put her arms round her, hard, raincoat and all, and didn't let go until Koromaru started to whine." }
          ], else: [
            { n: "Her phone had thirty-one missed calls. Twenty-six of them were Hanni. When she got up the hill at a quarter to seven Hanni was on the dorm steps in a blanket, asleep sitting up against the door, and woke when Solar touched her shoulder, and looked at her, and burst into tears, and was furious, and then made her eat a second breakfast in the dorm kitchen, watching every bite, as if the first one didn't count." }
          ] }
        ] },
        { t: "I can't. They count heads at the dorm.", notes: 2, tally: { 'asks.solar.night': 'no' }, then: [
          { n: "Something went over Mrs. Oka's face, so fast Solar wasn't sure she'd seen it. Not anger. A flicker, the way a lamp flickers when somebody opens a door in another room. Then it was gone, and she was smiling, and the corridor felt, very slightly, a degree colder than it had." },
          { s: 'mrsoka', f: 'neutral', t: "Of course. Of course they do. Somebody has to count you." },
          { s: 'mrsoka', f: 'happy', t: "The room'll keep. I'll keep it made up. Take an umbrella, at least. Bring it back another day, and then you'll have to come back, won't you." },
          { n: "The umbrella was oiled paper on bamboo, old, the handle worn smooth and dark by hands. Solar walked home under it in the rain. At the dorm gate Koromaru stood up on the step and showed his teeth at it, not at her, at the umbrella, until she folded it and leaned it in the rack outside the gate and went in without it. In the morning, the rack was empty." }
        ] },
        { t: "That's mine to decide. And not tonight.", notes: 2, tally: { choose: 1, 'asks.solar.night': 'choose' }, flag: 'eqx-oka-night-mine', then: [
          { n: "Mrs. Oka went still. The way she'd gone still at the gate in April, at the end of the table, like a cat at a window when something moves outside it, perfectly still and perfectly attentive, and for one second Solar couldn't hear the rain at all." },
          { s: 'mrsoka', f: 'neutral', t: "Yours to decide." },
          { s: 'mrsoka', f: 'happy', t: "Well. Then you'll decide. And the room will be here, whenever you do. Rooms are patient. They're the most patient things in a house." },
          { n: "She went down the stairs ahead of Solar, humming, and at the bottom she handed Solar her bag, and her blazer, and didn't offer an umbrella, and Solar walked home in the rain with her hair plastered to her face and was glad of it, of the cold, of every drop. At the corner she looked back. There was a light on upstairs in the boarding house. The end room. She hadn't seen anybody go up." }
        ] }
      ] },
      { ifCount: { of: ['eqx-oka-night-stayed'], max: 0 }, then: [
        { n: "On the dorm's front step Koromaru was waiting. He came to her and smelled her hands, both of them, very thoroughly, the palms and between the fingers and the creases of the knuckles, where the flour had got in and the tap hadn't got it out. Then he sat down in front of her and looked up at her face and made a small sound, high, in his throat, that she'd never heard him make. Not a growl. The sound a dog makes at a door that won't open." }
      ] }
    ] }
  ]
});
