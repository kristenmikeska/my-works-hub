/* Persona 3: Equinox · Mrs. Oka (Empress). Link data for femc-equinox-game.html; replaces her stub in ../links.js (same id).
   Format: link fields in assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written so far: ranks 1-2 (rank 1 opens 4/13, rank 2 opens 4/20, both after school at her house; rank 2 reads the
   4/16 supper flags and branches on eqx-tanabe, eqx-tale and Akihiko's / Jungwon's ranks). Rank 3 (from 6/1, after school at her house; branches on eqx-last-grain, eqx-hunted, eqx-stage, eqx-mitsuru-watch,
   Mitsuru's rank) holds her first link ask, to Solar: tally asks.solar.night (+ cakes / choose), flags eqx-oka-night-stayed,
   eqx-oka-night-mine; cosmetic eqx-oka-ate-own. Speaker hanni appears (post-eqx-hunted, waiting at the gate).
   Written: ranks 1-6. Every rank from 4 ends with one of her asks to Solar (Solar's own asks, asks.solar.*, escalating):
   Rank 4 (from 7/2, after school: out the back, then the kitchen; branches on eqx-stage, eqx-last-grain): salting plums under
   river stones she lifts one-handed, red shiso staining her gloves, a covered hand mill out the back, Nozomi alive (or his
   place), Chaewon's warm floor; Solar writes her own name on a crock (Mrs. Oka never writes). Ask "You'll be here next summer":
   tally asks.solar.plums (yes + cakes / no / choose + choose), flags eqx-oka-plums-yes, eqx-oka-plums-mine (she pockets the label).
   Rank 5 (from 8/3, daytime in the summer break: the garden; branches on eqx-hunted, eqx-last-grain, eqx-wake, eqx-shoes,
   eqx-table-op): drying the plums, no insects, the cicadas stop at the wall, Nozomi "would have stayed for ever", the binned
   wake boxes; before 8/25 six futons and a man's armchair aired "for family". Ask "You'll stay till the persimmons": tally
   asks.solar.persimmons, flags eqx-oka-persimmon-yes (the green persimmon ripens overnight on her sill), eqx-oka-persimmon-mine;
   cosmetic eqx-oka-told-shinji (Solar names Shinjiro as the one who binned the boxes; nothing reads it). Speaker junpei.
   Rank 6 (from 9/29, after school: the veranda, the kitchen; branches on eqx-empty-chair, eqx-1122): hoshigaki strings under the
   eaves ("the sugar comes out white, like flour"), the fathers (Mr. Kim, speaker kim-dad), one white apron of three on her;
   the slip "Your mothers *had* such different hands" (before 11/22), "Sol-ah" in Miseon's voice. Ask "You'll stay till
   spring": tally asks.solar.spring, flags eqx-oka-spring-yes (she kisses her forehead), eqx-oka-spring-mine.
   No ask floor for her (she's the tiger); rank 6 sets no floor flag.
   Written: ranks 1-8.
   Rank 7 (from 10/28, after school: the garden with every shoji out, the kitchen, upstairs; Hanni at the gatepost; branches on
   eqx-lease, eqx-persimmon, eqx-girls-left, dead.shinjiro / eqx-oka-told-shinji / eqx-shinji-lived, dead.aigis + Aigis's rank 6,
   eqx-1122, eqx-oka-night-stayed): re-papering the screens with rice paste from her bin; Kazuha's warning about the end room;
   four holes in its old paper pushed out from inside; she knows the count of Shinjiro's cuts; a parcel of the mothers' clothes
   with new white seams down the back. Ask "Say it's yours" (the end room): tally asks.solar.room (yes + cakes / no / choose +
   choose), flags eqx-oka-room-yes, eqx-oka-room-mine; cosmetic eqx-oka-parcel (carried up the hill; gone from the shed by morning).
   Rank 8 "one sound short" (from 11/25, after school: the veranda; Yunjin at the gatepost; branches on eqx-persimmon (before: Mr. Edogawa at her
   table, speaker edogawa, "the children told it how"; after: the house empty, the bough), ifAfter 12/1 (the mothers at the dorm)):
   the hoshigaki bloom white like flour, packed in a red-corded box "for New Year, don't open it before"; she knows how the
   mothers sleep now; if told they lost the tale she starts it in Solji's voice. Her hands stay gloved. Ask the name ("Oka-san…
   one sound short"): tally asks.solar.name, flags eqx-oka-name-yes, eqx-oka-name-mine; cosmetic eqx-oka-edogawa-asked,
   eqx-oka-tale-told. `closes: '12/21'` + `farewell` (the card turns over; tiger stripes on its back). Ranks 9-10 to come.
   Rank 2 holds no ask (she starts one and stops). Speaker without a portrait: hayashi.
   Her house isn't a Go Out area yet: `home` is the stub's stand-in on the Iwatodai Strip, and the scene uses stand-in
   backgrounds (BG comments mark the art it wants). No portrait art yet (speaker `mrsoka`, face 'neutral').
   Flags this file sets: see the rank notes above (none before rank 4). */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'mrsoka', name: 'Mrs. Oka', short: 'Mrs. Oka', arcana: 'Empress', numeral: 'III', from: 'Iwatodai', kind: 'native',
  romance: null, starts: '4/9', closes: '12/21', lodging: 'boarding',
  // closes (Nov 16): after the 12/21 reveal she can't be met (12/22 her house stands empty). core.js plays `farewell` the
  // morning after `closes` if the link stopped short of rank 10. Ranks 9-10, when written, must open before 12/21.
  farewell: [
    { n: "She didn't go down to the river side. Nobody did. Nobody had to." },
    { n: "She knew it the way she'd always known a link, in her chest, under the breastbone, where all of them sat like cards in a hand. One of them had turned over in the night. The Empress. The mother. Round and kind and floury at the edges, and on its back, where the pattern should have been, there were stripes." },
    { n: "She lay in the gray before morning with her hand flat on her own chest, over the place, and counted the others, one by one, the way Aigis had taught the house to; and they were all still there, face up, every one she had left; and she didn't turn over the one that had turned, and didn't look at its back again." }
  ],
  home: { area: 'okahouse', spot: 'The Kitchen', slot: 'after', days: [0, 1, 2, 3, 4, 5, 6],
          hint: 'Afternoons at the boarding house on the river side of Iwatodai, where the kettle is always on.' },
  approach: "Down on the river side, past the shrine, there's an old wooden house behind a low gate, and a woman in an apron and white cotton gloves kneeling under the persimmon tree in the garden, who looks up as you pass as if she'd been expecting you since lunch.",
  cast: { mrsoka: 'Mrs. Oka', hayashi: 'Mr. Hayashi', junpei: 'Junpei', chaewon: 'Chaewon', 'kim-dad': 'Mr. Kim', hanni: 'Hanni', kazuha: 'Kazuha', yunjin: 'Yunjin', edogawa: 'Mr. Edogawa' },
  ranks: [
    { after: '4/13', title: '1: loose thread', place: 'Iwatodai · The Oka Boarding House', time: 'After School', music: 'tender', scene: [
      { bg: 'eqx-oka-garden' },
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
    ] },
    { after: '7/2', title: '4: salt', place: 'Iwatodai · The Oka Boarding House', time: 'After School', music: 'tender', scene: [
      { bg: 'eqx-oka-gate' },
      { n: "July came in wet and stayed wet for its first two days, and then on the Friday it gave up, all at once, and the sun came out over the river road so hard and white that the puddles steamed and the shop awnings dripped and every gate on the street smelled of hot wood. The hydrangeas round the well in Mrs. Oka's garden had started going brown at the edges, the way paper goes brown held too near a flame." },
      { ifEvent: 'eqx-stage', then: [
        { n: "There was music coming out of an upstairs window. A phone speaker, tinny, a song she half knew from a life where she'd heard it in a dorm hallway, and over it a girl's voice counting in Korean, *five, six, seven, eight*, and four pairs of feet hitting the old boards at once, so that the whole house seemed to nod. The house had feet in it now. It sounded almost like a house." }
      ] },
      { n: "Nobody came to the door. She lifted the latch from the street side and let herself in and stood on the path, and the river's hush went out behind her like a light, and then a voice came round the side of the house, warm, a little out of breath." },
      { s: 'mrsoka', f: 'happy', t: "Round the back, child! I've got my hands full. Mind the drainpipe, it's loose." },

      { place: 'The Oka Boarding House · Out the Back', time: 'After School', bg: 'eqx-oka-garden', soft: true },
      // BG: oka-boarding-house-back — the narrow back yard of an old wooden Japanese house in summer shade: deep eaves, a row of brown glazed crocks with wooden lids and a round river stone on each, an old stone hand mill under a tarp, a back door, a high wall.
      { n: "Out the back was a strip of beaten earth between the house and the high rear wall, in deep shade under the eaves, cool after the street the way a cellar is cool. Along the wall under the eaves stood a row of crocks. Brown glazed earthenware, waist-high, eight of them, each with a wooden lid, and on each lid a round gray river stone, smooth, the size of a baby's head." },
      { n: "At the end of the row, under a blue tarp weighted at the corners with bricks, there was something squat and round that she could see the shape of and didn't ask about. A handle stuck out from under the tarp's edge, wooden, worn dark and smooth by a great many years of one hand." },
      { n: "Mrs. Oka was kneeling on a folded cushion in front of the crocks with an enormous earthenware bowl in her lap, full of purple leaves. A wide straw hat. The white gloves. She looked up, and her face did the slow lamp." },
      { s: 'mrsoka', f: 'happy', t: "There she is. You've come on salting day. Plums, child. Ume. Do you know them? No, of course not, city girl. You know them in a box at the shop." },
      { s: 'mrsoka', f: 'neutral', t: "Come and lift that lid for me. The first one. Go on. I want to show you what three weeks does." },
      { n: "Solar crouched in front of the first crock and took hold of the stone. It didn't move. She got both hands under it and her knees under her and lifted, and it came up off the lid so heavy that her wrists bent back, and she staggered half a step and set it down on the earth with a thump she felt in her teeth." },
      { n: "Mrs. Oka reached past her to the second crock and lifted that stone off its lid with one gloved hand, the way you'd lift a loaf off a counter, and set it down beside Solar's, and didn't seem to notice she'd done it." },
      { n: "Under the lids the plums sat packed in their crocks, yellow-green and pale, and over them, risen up from nowhere, a clear liquid the color of weak tea, still and gold, right up to the brim." },
      { s: 'mrsoka', f: 'neutral', t: "Salt and a stone and the dark. That's all. Three weeks and look, they've given up all their water. They don't want to. Nothing does. But everything gives it up in the end, if the stone's heavy enough and you leave it long enough in the dark." },
      { choose: [
        { t: "That's a little grim, Mrs. Oka.", notes: 2, then: [
          { s: 'mrsoka', f: 'happy', t: "Grim! It's pickling, child. My mother did it, and hers before her." },
          { s: 'mrsoka', f: 'neutral', t: "You salt a thing and you press it and you wait, and at the end of it, it keeps. A hundred years, some of them. There's nothing grim about keeping." }
        ] },
        { t: "(Look into the crock.)", notes: 2, then: [
          { n: "She leaned over the crock. It smelled sour and sweet and clean, like the inside of a mouth before you've said anything, and the gold liquid lay so still that she could see herself on it, dark against the bright square of sky between the eaves, her hair falling forward." },
          { n: "Then Mrs. Oka's face, beside hers. On the liquid, over her shoulder, close, smiling, the straw hat's brim a dark ring round it. Solar hadn't heard her move. She hadn't heard the cushion or the gravel or anything. She didn't look round. She looked at the two faces on the gold until Mrs. Oka's went away again, and then she sat back on her heels and breathed." }
        ] },
        { t: "(Put the stone back yourself. Both hands.)", notes: 3, then: [
          { n: "She put it back. Both hands, knees bent, the stone against her stomach, and set it on the lid without letting it drop, and her wrists ached for the rest of the afternoon, a deep dull ache like the start of a cold." },
          { s: 'mrsoka', f: 'happy', t: "Strong arms. Good. You'd be surprised how many people can't lift that one. You'd be surprised how many don't try." }
        ] }
      ] },
      { s: 'mrsoka', f: 'neutral', t: "Now the shiso. This is the bit I like. Watch." },
      { n: "She took a fistful of the purple leaves out of the bowl and scattered salt over them from a cup and began to rub, hard, the heels of her gloved hands grinding the leaves against the bowl's rough side, and the leaves went dark and limp and wet, and a juice came out of them, black-purple, like an old bruise. She squeezed the dark mass in both fists till the juice ran out between her fingers. Threw the juice away in the gutter. Then she dropped the wrung leaves into a dish of the gold liquid from the crock, and stirred." },
      { n: "It went red. Not slowly. All at once, the moment the leaves touched the liquid, a bright clean blooming red that spread out from them through the dish like ink through water. The red of the inside of a cheek. The red of a cut, the second before it bleeds." },
      // CG: eqx-oka-shiso — close on two hands in white cotton gloves, the fingertips stained bright red, squeezing a dark fistful of purple shiso leaves over an earthenware bowl, red liquid running between the fingers, in the shade of old eaves.
      { n: "The fingertips of her gloves had gone red with it. All ten. Up to the first knuckle, as if she'd dipped them." },
      { s: 'solar', f: 'neutral', t: "Your gloves." },
      { s: 'mrsoka', f: 'happy', t: "I'll bleach them. I've bleached them a hundred times. Every July, the same. My mother used to say you could tell a good housewife by her July hands." },
      { choose: [
        { t: "(Rub the next batch yourself, so she doesn't have to.)", notes: 3, then: [
          { n: "She took the bowl. Mrs. Oka let her, and sat back on her heels and watched, and told her harder, harder than that, it doesn't want gentle; and Solar rubbed, and the salt bit into the soft skin between her fingers, and the juice came out black and ran down her wrists, and when she squeezed it out and dropped the leaves into the gold they bloomed red under her hands." },
          { n: "Her palms were purple. Then, when she rinsed them in the dish, red, a deep stain in every crease and under every nail, the lines of her hands drawn out in it like a map." },
          { s: 'mrsoka', f: 'happy', t: "Look at your hands. Now you've got the color of it. That'll be in your nails till August." },
          { s: 'mrsoka', f: 'neutral', t: "Now you're one of mine. Everybody who's ever done the shiso with me has had red hands for a month. I can always tell, on the street. I always know who's been in my kitchen." }
        ] },
        { t: "Why not take the gloves off for this?", notes: 1, then: [
          { s: 'mrsoka', f: 'neutral', t: "And get my hands stained? Child, the gloves are so my hands don't stain." },
          { n: "She laughed, the short warm embarrassed laugh, and went on rubbing, and Solar watched the red come up through the white cotton finger by finger." },
          { s: 'mrsoka', f: 'neutral', t: "Besides. Nobody wants to see an old woman's hands." }
        ] },
        { t: "(Hold the bowl steady for her.)", notes: 2, then: [
          { n: "She held it. Mrs. Oka's hands worked over the rim between hers, close, quick, warm through the cloth where they brushed her, and once, squeezing the leaves, they closed so hard that the juice spat out over the edge onto Solar's wrist, cold, and ran down inside her sleeve, and Mrs. Oka said *oh, look what I've done*, and dabbed at it with the hem of her apron, and it didn't come off." }
        ] }
      ] },

      { place: 'The Oka Boarding House · Kitchen', time: 'After School', bg: 'eqx-oka-kitchen', soft: true },
      { n: "They washed up at the kitchen sink. The water ran pink and then clear off Solar's hands and the stain stayed exactly where it was. Mrs. Oka didn't wash her gloves. She dried them on a towel, red tips and all, and put the kettle on." },
      { ifEvent: 'eqx-last-grain', then: [
        { n: "In the front room, through the open screens, the long table was cleared and wiped. At the end nearest the kitchen the folded white cloth still lay on its cushion, the bowl upside down beside it, and on the cloth now, on a little saucer, one pickled plum, red and wrinkled, set exactly in the middle." },
        { s: 'mrsoka', f: 'sad', t: "He liked the sour ones. He'd make a face like a baby and then hold out his hand for another. I put the first of the year there for him. Isn't that silly. He'll not be wanting it." }
      ], else: [
        { n: "There was a boy at the long table in the front room, through the open screens. A third-year from school she knew by sight, round-faced, with a belly he patted the way you'd pat a good dog, eating his way steadily through a bowl of rice with a plate of pickles at his elbow, alone at a table set for sixteen, perfectly happy. He lifted his chopsticks at Solar in a salute without stopping chewing." },
        { n: "He called Mrs. Oka *Mother* when she put another bowl down beside him. It was a joke. It was a joke with so little left in it that Solar couldn't find where the joke was." },
        { s: 'mrsoka', f: 'happy', t: "Nozomi-kun. My best boy. The only one who ever asks for more. You've no idea what that's worth to a cook, child. Most people want to be asked. He asks." },
        { n: "Nozomi held up his empty bowl, in proof, and Mrs. Oka filled it, and patted his shoulder twice with her red-tipped glove, and left a faint pink print on his white school shirt that he didn't notice and nobody mentioned." }
      ] },
      { ifEvent: 'eqx-stage', then: [
        { n: "Feet on the stairs. A girl came into the kitchen doorway in a T-shirt dark with sweat and a towel round her neck, tall, her hair scraped back, breathing like she'd been counting for an hour, and stopped when she saw Solar, and bowed a little, the way you bow to someone who's famous in a world you're not from." },
        { s: 'chaewon', f: 'neutral', t: "Sorry. Water. Mrs. Oka, the floor upstairs is warm again. In the middle of the big room. Like someone's been lying on it." },
        { s: 'mrsoka', f: 'neutral', t: "Old houses keep the day in their boards, dear. It's only the sun." },
        { n: "Chaewon looked at the window. It was shut, and the big room upstairs faced the river side, where the sun didn't reach till evening. She looked at Solar, once, very straight, and filled her glass, and went back up." }
      ] },
      { n: "Mrs. Oka had brought the eighth crock in from the back. The small one, at the end of the row, which had been empty. She'd washed it and dried it and set it on the counter, and now she layered plums into it with a wooden spoon, pale ones from the gold, and the red leaves over them, and more plums, and more leaves, and poured the red liquid over all of it until it shone." },
      { n: "Then she laid a strip of white paper on the counter beside it, and a brush, and an ink stone, and a stick of ink, and ground the ink with a little water, round and round, patient, and held the brush out to Solar, handle first." },
      { s: 'mrsoka', f: 'neutral', t: "Write your name on it. Your own hand. I like to know whose is whose." },
      { n: "Solar took the brush. She hadn't held one since school, one school, some school. She wrote her name in the characters she used here, slowly, and the ink went into the paper soft and black and spread a hair's width at the edges of every stroke, and Mrs. Oka watched her do it with her chin on her red-tipped glove and an attention Solar had only ever seen Aigis give anything: every stroke, every lift of the brush, the pressure, the angle, the way her wrist turned at the end of the last line." },
      { s: 'solar', f: 'neutral', t: "Don't you label yours?" },
      { s: 'mrsoka', f: 'happy', t: "I know mine." },
      { n: "She pasted the label on the lid with a dab of rice paste and smoothed it flat with the side of her hand, twice, the way she'd smoothed the lapel in April, and looked at it with real satisfaction, and then at Solar, the same way." },
      { s: 'mrsoka', f: 'neutral', t: "There. That's yours. Not this year; they want a whole year in the dark before they're any good. Next summer, we'll take the stone off together and see what they've become." },
      { s: 'mrsoka', f: 'neutral', t: "You'll be here next summer, won't you, child?" },
      { n: "She asked it the way you'd ask whether someone took sugar. She'd already turned to the stove." },
      { choose: [
        { t: "I'll be here.", notes: 3, tally: { cakes: 1, 'asks.solar.plums': 'yes' }, flag: 'eqx-oka-plums-yes', then: [
          { n: "Mrs. Oka turned round. She put her gloved hand flat over Solar's on the lid of the crock and pressed, gently, warm and heavy, the weight of it going down through Solar's hand into the lid and the plums and the red, as if she were the stone. Then she took her hand away and lifted a river stone off the windowsill, one-handed, and set it on the lid, on the label, on Solar's name." },
          { s: 'mrsoka', f: 'happy', t: "There. Now it's sealed. Now it'll keep." }
        ] },
        { t: "I won't be here next summer.", notes: 2, tally: { 'asks.solar.plums': 'no' }, then: [
          { n: "The flicker. Fast, there and gone, the lamp in the next room when somebody opens a door. The kitchen was a degree colder after it than it had been before, and the kettle, which had been just about to sing, didn't." },
          { s: 'mrsoka', f: 'neutral', t: "No? Well. Then I'll keep it for you. Things keep, in this house. Your name will be on it either way." },
          { n: "She set the stone on the lid herself. On the label. On the name." }
        ] },
        { t: "I'll decide that next summer.", notes: 2, tally: { choose: 1, 'asks.solar.plums': 'choose' }, flag: 'eqx-oka-plums-mine', then: [
          { n: "Mrs. Oka went still. At the stove, with her back to Solar, the cat-at-a-window stillness, and for one second there wasn't a sound in the kitchen at all, not the kettle, not the feet upstairs, not the radio in the house next door, nothing." },
          { s: 'mrsoka', f: 'happy', t: "Next summer. Listen to her. Making plans." },
          { n: "She came back to the counter. She slid one gloved fingernail under the edge of the label and peeled it off the lid, carefully, without tearing it, Solar's name in Solar's hand, and folded it in half and in half again and put it in the pocket of her apron, and patted the pocket flat, twice." },
          { s: 'mrsoka', f: 'neutral', t: "Then I'll keep this safe till you've decided. Your own hand. I'd hate for it to get wet." }
        ] }
      ] },
      { place: 'Iwatodai · The Oka Boarding House', time: 'Evening', bg: 'eqx-oka-gate', soft: true },
      { n: "At the back step she put a pickled plum into Solar's palm wrapped in a square of paper, last year's, she said, wrinkled and dark, for your throat, for when the weather turns. It sat in her red hand like a small dried heart." },
      { n: "The river came back two steps outside the gate. The heat came back with it, and a radio in somebody's window, and the traffic on the bridge road, all at once, as if somebody had taken their hands off her ears." },
      { n: "She didn't eat the plum. She put it on the windowsill in her room, in its paper, and lay on her bed in the dark with her stained hands on her stomach and couldn't stop thinking about the crock. Down there on the river side, in the cool under the eaves or in that spotless kitchen, under a stone she could barely lift, in the dark, with her name on it in her own hand, or in an apron pocket, folded small; a year's worth of something giving up its water, slowly, because it didn't have a choice, because the stone was heavy enough and there was nothing to do in the dark but wait." }
    ] },
    { after: '8/3', title: '5: the dew', place: 'Iwatodai · The Oka Boarding House', time: 'Daytime', music: 'tender', scene: [
      { bg: 'eqx-oka-gate' },
      { n: "August sat on the river road like a hand. By two in the afternoon the asphalt was soft at the edges and the air above it shook, and the cicadas in every tree along the bank had got so loud it was a pressure more than a sound, a weight on the inside of the ears that went all the way down into the teeth." },
      { ifEvent: 'eqx-hunted', then: [
        { n: "Junpei walked her down. He was doing his rounds anyway, he said, which was true: he did them twice a day now, the whole river side, with a towel round his neck and a frog-covered notebook full of a grid of names and house numbers, ticking each one as he passed, and he'd stopped making jokes about it some time in the last week without anybody seeing him stop." },
        { n: "He stopped at Mrs. Oka's gate like it was a wall." },
        { s: 'junpei', f: 'serious', t: "Five o'clock. I'm back past this post at five. If you're not standing right here I'm coming in, and I'm bringing Koromaru, and he does *not* like her, and honestly? Same, dude. Same." }
      ] },
      { n: "She lifted the latch. The cicadas stopped at the wall." },
      { n: "Not faded. Stopped, at the line of the gate, as if the sound were a sheet hung over the street and she'd stepped behind it. Behind her, in the plane trees on the road, they went on screaming. In here the persimmon tree stood heavy and dark and green over the well, and there wasn't one cicada in it, not one, and the silence under it was the thick sweet silence of the inside of a closed car." },
      { n: "The garden was full of trays. Round bamboo trays, flat and wide, laid across sawhorses in rows down the whole length of the grass in the full sun, and on every tray the plums from the crocks, laid out one by one with space round each, red now, a deep wrinkled red, drying, with a fine white crust of salt coming up on their skins like frost." },
      { n: "Sugar and salt and fruit, in August, in the sun. And not a fly on them. Not one wasp. Not an ant on any leg of any sawhorse. Solar stood on the path and looked for them, the way she'd looked for the birds in April, and found nothing at all moving in the whole bright garden except one woman in a wide straw hat at the end of the rows, turning plums." },
      { ifEvent: 'eqx-last-grain', then: [
        { n: "Her apron was gray today, not white. A plain gray cotton one, ironed, with the strings tied in a neat bow at the back. For him, Solar understood. The way you'd wear a black armband." }
      ] },
      { s: 'mrsoka', f: 'happy', t: "There she is. In the worst of the heat, too. Come here, under the hat, there's room. Come and turn with me. It's the second day. They want turning twice, or they dry flat on the bottom." },
      // CG: eqx-oka-trays — a summer garden in hard afternoon light, rows of round bamboo trays on sawhorses covered in drying red plums crusted with salt, a heavy dark persimmon tree over an old capped well, a woman in a wide straw hat and white gloves bent over the trays, no insects, no birds, nothing moving.
      { n: "She showed her. You picked each plum up between finger and thumb and turned it over and set it back in exactly its place, so its other cheek got the sun. That was all. Three days in the sun, three nights out under the sky." },
      { n: "The plums were hot. Hot as skin, hotter, and wrinkled, and they gave a little under her thumb, the way the pad of a fingertip gives, and the salt came off on her fingers and the red came off with it, and after a row her hands were pink to the first knuckle again, over the last of the July stain." },
      { s: 'mrsoka', f: 'neutral', t: "The sun dries them by day. At night they stay out, and the dew comes down on them, and softens them again. That's the secret. Dry and soft, dry and soft, three times over, and between the two they turn into themselves." },
      { s: 'mrsoka', f: 'neutral', t: "People think you just leave them in the sun. You don't. You have to leave them out in the dark, too. That's the part nobody likes to do." },
      { ifEvent: 'eqx-last-grain', then: [
        { n: "They turned the second row in silence. Then the third. The sun went over the top of the tree and stood straight over the garden, and the shadows went small and hard under the trays." },
        { s: 'mrsoka', f: 'sad', t: "He asked me, you know. Nozomi-kun. On the Sunday, the last one. Could he help me with the drying when they came out." },
        { s: 'mrsoka', f: 'sad', t: "I said wait till they're out. You always think there's more time, with a boy like that. You think he'll be at that table for ever." },
        { s: 'mrsoka', f: 'neutral', t: "He'd have stayed for ever, too. Some people are made for a house like this. You can tell the minute they sit down." },
        { n: "She turned a plum over. Set it down in its place, exactly. Turned the next." },
        { ifEvent: 'eqx-wake', then: [
          { s: 'mrsoka', f: 'neutral', t: "Somebody threw my boxes away, after the wake. Did you know? Twelve boxes, for the mourners. I found them in the bins behind the hall the next morning. All twelve. Not one opened." },
          { n: "She didn't sound angry. She said it to the plums, mildly, the way you'd mention that it might rain." },
          { s: 'mrsoka', f: 'neutral', t: "Somebody who loves you all very much, I expect. People do strange things for love." },
          { choose: [
            { t: "It was Shinjiro.", notes: 1, flag: 'eqx-oka-told-shinji', then: [
              { s: 'mrsoka', f: 'happy', t: "The boy with the coat. Of course it was. He cooks, doesn't he." },
              { s: 'mrsoka', f: 'neutral', t: "Cooks are jealous of each other, child. It's a terrible thing. I'll send him a box of his own, so he knows there are no hard feelings." },
              { n: "She smiled at the plum in her fingers. Solar's stomach went over, once, slowly, and she didn't know why, and she wished, very much, that she could take the name back out of the hot air between them and put it in her pocket." }
            ] },
            { t: "I don't know who it was.", notes: 2, then: [
              { s: 'mrsoka', f: 'neutral', t: "No. Well. It doesn't matter. It was the thought, they say." },
              { n: "She looked at Solar under the brim of the hat for a second longer than the sentence needed. Then she turned the next plum." }
            ] },
            { t: "(Say nothing. Turn the next plum.)", notes: 3, then: [
              { n: "She turned the next plum. And the next. She kept her eyes on her own fingers and the red salt on them, and beside her Mrs. Oka didn't turn anything at all for a while; she only watched Solar's hands, the way she'd watched them on the brush, every movement, as if learning them." }
            ] }
          ] }
        ] }
      ] },
      { ifEvent: 'eqx-shoes', then: [
        { n: "On the veranda, in the shade, the three fathers sat in a row on the edge of the boards with their shoes off and their hands between their knees, watching the trays the way men watch a fire, and none of them had said a word since she came in. Mrs. Oka took them iced barley tea on a tray and closed each man's fingers round his glass with her own, and they let her." }
      ], else: [ { ifEvent: 'eqx-table-op', then: [
        { n: "The mothers were in the garden. All three, in borrowed sun hats, turning plums at the far trays: Solji with her reading glasses on, doing it carefully and slightly wrong, and Mrs. Kim telling her so, and showing her, and doing it slightly wrong herself, and Miseon in the shade at the end of the last row saying nothing and doing it exactly right. They were laughing. Solar stood with a hot plum in her fingers and watched them laugh in Mrs. Oka's garden, three women in three white hats under a tree with no birds in it, and tried to remember another time she'd seen all three of them in one place in the sun, before this week, and couldn't, because there wasn't one." },
        { s: 'mrsoka', f: 'happy', t: "Aren't they lovely. I said they'd come. Didn't I say? I felt it in my knees." }
      ], else: [
        { n: "Upstairs, over the rail of the second-floor veranda, six futons hung airing in the sun. In pairs. Two and two and two, side by side, white, the kind with a pattern of small blue waves, beating very slightly against the rail in a wind that didn't reach the garden." },
        { n: "And on the grass by the back step, in the full sun, there was an armchair. A big soft Western armchair in old brown leather, worn pale on the arms, the kind of chair a man reads his paper in. It hadn't been in the house before. Solar had been in every downstairs room. She couldn't imagine how it had come through the gate, or who'd carried it." },
        { s: 'solar', f: 'neutral', t: "Are more people coming?" },
        { s: 'mrsoka', f: 'happy', t: "Family's coming. I feel it in my knees, like rain." },
        { s: 'solar', f: 'neutral', t: "Whose family?" },
        { s: 'mrsoka', f: 'neutral', t: "Oh, somebody's. There's always somebody's family coming, in a house like this. I like to be ready. You never know who'll want a chair." }
      ] } ] },
      { n: "They finished the last tray. Mrs. Oka straightened up with a hand on the small of her back and looked down the rows of drying plums with the same satisfaction she'd turned on the button in April, and on Solar, and then she looked up, at the persimmon tree, at the hard green fruit hanging under its leaves like fists." },
      { s: 'mrsoka', f: 'neutral', t: "Tonight's the last night for these. They stay out for the dew, all night. Somebody ought to sit up with them, the last night. My mother always did, with a lamp." },
      { n: "She looked at Solar. She opened her mouth. Then she shook her head at herself and laughed, the embarrassed one, and put a gloved hand flat on her apron." },
      { s: 'mrsoka', f: 'neutral', t: "No. Twos. I know, I know. I won't ask." },
      { n: "She reached up instead, without going on her toes, and twisted one of the green persimmons off its stem, small and hard and heavy, and held it out on her palm." },
      { s: 'mrsoka', f: 'neutral', t: "These'll be ready in October. Best thing in this garden, and I don't even make them. I just wait for them. The birds won't touch them, so they're all mine, every year, and every year it's too many for one." },
      { s: 'mrsoka', f: 'happy', t: "You'll stay till the persimmons, won't you? You've never had one off this tree." },
      { choose: [
        { t: "I'll stay till the persimmons.", notes: 3, tally: { cakes: 1, 'asks.solar.persimmons': 'yes' }, flag: 'eqx-oka-persimmon-yes', then: [
          { s: 'mrsoka', f: 'happy', t: "There. That's settled, then." },
          { n: "She put the green persimmon into Solar's hand and folded her fingers over it with her own, warm and heavy through the cotton." },
          { s: 'mrsoka', f: 'neutral', t: "Keep that one. On your windowsill. Watch it, and when it goes soft, you'll know it's time to come." }
        ] },
        { t: "I don't know where I'll be in October.", notes: 2, tally: { 'asks.solar.persimmons': 'no' }, then: [
          { n: "The flicker. In the hot garden, for one second, Solar felt cold on the back of her neck, as if a door had opened behind her onto a cellar." },
          { s: 'mrsoka', f: 'neutral', t: "Nobody does, child. That's what October's for." },
          { n: "She put the persimmon in her own apron pocket instead. Solar watched the pocket. It didn't bulge the way a pocket with a persimmon in it should." }
        ] },
        { t: "October's mine to worry about.", notes: 2, tally: { choose: 1, 'asks.solar.persimmons': 'choose' }, flag: 'eqx-oka-persimmon-mine', then: [
          { n: "Still. The cat at the window. Under the brim of the straw hat her eyes didn't blink, and the heat stood round the two of them in the silent garden like water in a glass." },
          { ifCount: { of: ['eqx-supper-mine', 'eqx-oka-night-mine', 'eqx-oka-plums-mine'], min: 1 }, then: [
            { s: 'mrsoka', f: 'neutral', t: "Yours. You do keep saying that, don't you. Every time I ask you anything." },
            { s: 'mrsoka', f: 'happy', t: "I don't mind. I like a girl who knows what's hers. It makes it so much easier to know what isn't." }
          ], else: [
            { s: 'mrsoka', f: 'happy', t: "Yours. Well. That's a nice thing to have, at your age. Something that's yours." }
          ] },
          { n: "She set the green persimmon down on the edge of the nearest tray among the red plums, where it sat, hard and bright and out of place, and left it there." }
        ] }
      ] },
      { place: 'Iwatodai · The Oka Boarding House', time: 'Evening', bg: 'eqx-oka-gate', soft: true },
      { ifEvent: 'eqx-hunted', then: [
        { n: "Junpei was at the gatepost at four fifty-nine, by his watch, which he showed her. He'd been there since four forty. He'd done the rest of the rounds at a jog, he said, to be early, and he was red in the face and soaked through and he didn't care." },
        { n: "He didn't look at the house. He looked over the wall, at the trays, at the rows and rows of red plums in the low gold light, crusted white, untouched." },
        { s: 'junpei', f: 'serious', t: "...Dude. Not one fly. In *August*. Over sugar." },
        { n: "He took the frog notebook out of his back pocket and wrote something in it, small, in the margin beside the grid, and didn't show her what, and they walked up the hill in the cicadas without talking, the whole way, and at the top he bought them both a melon soda from the machine and drank his standing up, all of it, in one go, as if he'd been very thirsty for a very long time." }
      ], else: [
        { n: "The cicadas came back two steps outside the gate, so loud after the garden that she flinched. She walked up the hill in them with her pink hands in her pockets, and didn't look back." }
      ] },
      { ifFlag: 'eqx-oka-persimmon-yes', then: [
        { n: "She put the green persimmon on her windowsill that night, beside last month's plum in its paper. Hard and green, a little fist, the stem still sharp from the twist." },
        { n: "In the morning it was orange. Soft all the way through, heavy, shining, the skin gone thin as paper and sweet-smelling, as if two months had passed on the sill overnight while she slept, and when she touched it with one finger it gave, like something that had stopped resisting." }
      ] }
    ] },
    { after: '9/29', title: '6: bloom', place: 'Iwatodai · The Oka Boarding House', time: 'After School', music: 'tender', scene: [
      { bg: 'eqx-oka-gate' },
      { n: "October was three days off and the air knew it. It came down the river road in the afternoon with an edge on it for the first time, thin, clean, smelling of cold water and the first fallen leaves, and every shop on the street had put out something orange, and over Mrs. Oka's wall the persimmon tree had gone heavy and bright with fruit, every bough bent down with it, as if the tree had been holding its breath all summer and let it out all at once." },
      { ifEvent: 'eqx-empty-chair', then: [
        { n: "Haechan walked her to the corner. He did that now without being asked, the way he'd done it in September, and stood under the post-office lamp with his hands in his jacket and his eyes on the gate the whole time she was in, and she knew it without looking back, the way you know where the sun is with your eyes shut." }
      ], else: [
        { n: "Jaehyun walked her down. He was going anyway; he went every afternoon now, straight from school, to sit at the long table beside his father and not talk about it. He held the gate for her and went in ahead, the way you'd go into a hospital room ahead of someone to check what kind of day it was." }
      ] },
      { n: "On the grass under the tree the windfalls lay where they'd dropped, split open, soft, dark orange going brown, sweet-smelling in the cool. Nothing was touching them. Not a wasp. Not an ant. In September, under fallen fruit." },
      { place: 'The Oka Boarding House · Veranda', time: 'After School', bg: 'eqx-oka-garden', soft: true },
      // BG: oka-boarding-house-veranda-autumn — the long wooden veranda of an old Japanese house in thin autumn afternoon light, rows and rows of peeled orange persimmons hanging on strings from the eaves like a bead curtain, a basket of whole fruit and a pile of curled peel on the boards, the persimmon tree heavy with fruit beyond.
      { n: "Mrs. Oka was on the veranda, sitting on the edge of the boards with a basket of persimmons at her knee and a small knife, peeling. She did it in one long curl every time, round and round, the orange peel coming away unbroken and dropping onto a pile at her feet like sleeping things, and the fruit underneath was paler and wet and glistening." },
      { n: "When she'd peeled one she tied it by its stem to a length of string with two turns of her gloved fingers, and when a string had ten or twelve on it, one below another, she stood and hung it from a nail under the eaves. There were dozens of strings already. The whole front of the veranda was curtained with them, rows and rows of pale orange fruit hanging in the thin light, turning very slightly on their strings, all together." },
      { n: "She was wearing a white apron. A new one, crisp, the bow tied neat at the back. One of the three from the hooks by the back door, the three she'd hung there in September, one for each of the mothers. Solar looked past her through the open screens to the kitchen. Two on the hooks." },
      { s: 'mrsoka', f: 'happy', t: "There she is. And just in time, I've a hundred to do and two hands. Sit. Here. Take a string." },
      { ifEvent: 'eqx-empty-chair', then: [
        { n: "The house behind her was very quiet. The fathers had gone up the hill to the dorm with their suitcases, and the front room's long table was cleared and wiped and set, every place, sixteen, for nobody." },
        { s: 'mrsoka', f: 'sad', t: "It's so quiet now. You'd never think three grown men made so little noise, but you notice when it's gone. I keep laying for them. My hands don't know." }
      ], else: [
        { n: "The fathers were on the veranda with her. That was the first thing, after the strings. Mr. Kim sat cross-legged at the far end in his fleece with a tangle of string in his lap and three persimmons tied on it crookedly, his tongue between his teeth, concentrating. Taejoon sat on the step below the boards in his shirtsleeves holding a string with one fruit on it, and he'd been holding it, Solar thought, for a long time; his hand had forgotten it was there. Jaesang was at the long table inside, through the screens, with papers in front of him that he wasn't reading and his phone face down beside them." },
        { n: "Jaehyun went in and sat beside him, and Jaesang put his hand on the back of his son's neck without looking up from the papers, and left it there." },
        { s: 'kim-dad', f: 'neutral', t: "Solar-ya. Look. Look at these. Does this look right to you? It doesn't look right." },
        { s: 'mrsoka', f: 'happy', t: "It looks perfect, Mr. Kim. Every one different. That's how you tell the house made them." },
        { s: 'kim-dad', f: 'sad', t: "She'd have liked these. My wife. She'd have said they look like the bead curtain at that noraebang by the station, the one with the broken machine. She'd have said it to embarrass me." },
        { n: "Mrs. Oka put her knife down and reached across and laid her gloved hand on the back of his neck, the way she'd done at the long table the evening after the bridge, and Mr. Kim's eyes closed, and his shoulders came down." },
        { s: 'mrsoka', f: 'neutral', t: "She *will* like them. There, there. They'll be ready by New Year. She'll be home by New Year. You'll see. You'll show her which ones are yours." },
        { n: "Taejoon, on the step, didn't move. But his hand closed on the string he was holding, slowly, until the persimmon on it swung." }
      ] },
      { n: "Solar took a string. Mrs. Oka showed her the knot, two turns round the T of the stem and through, and she tied the first one wrong and the second one right, and hung her string at the end of a row, under the eaves, beside one that had been hanging a week." },
      { n: "The week-old ones were different. Darker, smaller, their skins gone tough and leathery and the deep orange of a lamp turned low. Mrs. Oka reached up and took one between her gloved thumb and fingers, still on its string, and squeezed it. Gently. All the way round, slowly, the way you'd knead the back of somebody's neck." },
      { s: 'mrsoka', f: 'neutral', t: "You have to do this every few days. Squeeze them. Soft, mind. It breaks them up inside, so they go soft all the way through instead of just on the outside. Otherwise they go hard in the middle and they're no good to anybody." },
      { s: 'mrsoka', f: 'neutral', t: "And then in a few weeks the sugar comes out on them. All over. White, like a bloom. Like flour. People see it and think they've gone bad. They haven't. It's only all the sweetness inside coming out to the skin." },
      // CG: eqx-oka-hoshigaki — an old wooden veranda curtained with rows of peeled orange persimmons hanging on strings from the eaves, a woman in a white apron and white cotton gloves reaching up to squeeze one gently between finger and thumb, thin autumn light, a heavy persimmon tree behind.
      { choose: [
        { t: "(Squeeze one yourself. Gently.)", notes: 3, then: [
          { n: "She reached up and took one of the week-old fruit between her fingers and squeezed, softly, all the way round. It was cool. It gave under her fingers with a slow, deep, yielding softness, the give of something that had stopped resisting a while ago and was only being polite about it, and something inside it moved under the skin." },
          { s: 'mrsoka', f: 'happy', t: "That's it. That's the touch. You've got good hands for it. Mending hands." }
        ] },
        { t: "How long till they're ready?", notes: 2, then: [
          { s: 'mrsoka', f: 'neutral', t: "New Year. Thereabouts. They can't be hurried. Nothing good can be hurried, child." },
          { s: 'mrsoka', f: 'neutral', t: "That's the whole art of it. Hang them up and wait. Everything comes to the one who waits." }
        ] },
        { t: "(Leave them. Tie another string instead.)", notes: 1, then: [
          { n: "She didn't touch them. She took a fresh persimmon out of the basket and peeled it, badly, in five pieces of peel instead of one, and tied it on, and felt Mrs. Oka watching the peel come off in her hands, every piece, all the way down to the wet orange underneath." }
        ] }
      ] },
      { place: 'The Oka Boarding House · Kitchen', time: 'After School', bg: 'eqx-oka-kitchen', soft: true },
      { n: "She went in to help with the tea. That was all. Mrs. Oka asked, and she went, and at the kitchen door she stood on the line where the pale boards began and waited to be asked in, and was asked, and went in, and only then noticed she'd done it." },
      { n: "The kitchen was warm and close and smelled the way it always smelled, sugar and steamed rice, and under them the cupboard. The tin on the counter was full. On the shelf above the stove, the splinter in the old wood had been sanded smooth." },
      { n: "Mrs. Oka set out cups. Five, then, after looking at the number for a moment, three more, and then she put the three back." },
      { ifEvent: 'eqx-1122', then: [
        { s: 'mrsoka', f: 'sad', t: "And your mothers, child. How are they? How are their hands? I sent soup, you know. Up to the big house. For the cold." },
        { s: 'mrsoka', f: 'neutral', t: "Somebody poured it away. At the bottom of the steps. I saw." },
        { s: 'mrsoka', f: 'happy', t: "Never mind. Never mind. People do strange things when they're frightened. I'll send more." }
      ], else: [
        { s: 'mrsoka', f: 'neutral', t: "Your mothers had such different hands. Did you ever notice?" },
        { n: "She said it pouring water on the leaves, with her back to Solar, easily, the way you'd talk about the weather." },
        { s: 'mrsoka', f: 'neutral', t: "The American one's, so soft. She never did a day's washing in her life with those hands. The quiet one's, all knuckle, and the ring always turned round to the inside so it wouldn't catch. And Mrs. Kim's, always cold. Always cold, poor thing, even at the stove." },
        { n: "*Had.* It went into Solar under the ribs and stayed there, a small cold coin." },
        { choose: [
          { t: "Have.", notes: 2, then: [
            { n: "Mrs. Oka turned round with the pot in her hands, surprised, and then her face crumpled, kindly, at herself." },
            { s: 'mrsoka', f: 'sad', t: "Have. Of course. Have. Listen to me." },
            { s: 'mrsoka', f: 'neutral', t: "It's the waiting, child. It turns everything into the past tense, if you let it. You mustn't let it. I mustn't." }
          ] },
          { t: "How do you know what their hands were like?", notes: 1, then: [
            { s: 'mrsoka', f: 'neutral', t: "I held them, child. Every one of them, at that counter, with their hands in the flour beside mine." },
            { s: 'mrsoka', f: 'happy', t: "You learn a person's hands, making rice cakes together. You learn everything about them. I could tell you whose hands made every one in that tin." },
            { n: "She'd said that in June, too, at the board, with the rain on the roof. Solar remembered it word for word. She hadn't, at the time, thought it was a sentence anybody would need to remember." }
          ] },
          { t: "(Say nothing. Watch her face.)", notes: 3, then: [
            { n: "She didn't say anything. She watched Mrs. Oka's face when she turned round with the pot, and it was a kind face, a tired one, a little sad, round and soft at the jaw, the face of a woman in her fifties who'd been feeding three frightened men for a week, exactly what it looked like." },
            { n: "Exactly. To the line. Solar looked at it the way Aigis looked at things, and for a second, at the hinge of the jaw, just under the ear, she thought there was a fold. The kind of fold a sheet makes when it's been pulled straight over something not quite the shape of a bed." },
            { n: "Then Mrs. Oka smiled, and it was gone, and there was only a face." }
          ] }
        ] }
      ] },
      { n: "She put a cup in Solar's hands and closed Solar's fingers round it with her own, and held them, warm and heavy through the cotton, a moment longer than she needed to." },
      { s: 'mrsoka', f: 'neutral', t: "You'll stay till spring, won't you, child." },
      { n: "Not a question. Hardly even asking. The way you'd remind somebody of a thing they'd already agreed to and had perhaps forgotten." },
      { ifEvent: 'eqx-empty-chair', then: [
        { s: 'mrsoka', f: 'neutral', t: "This house is so quiet now. Come down every day. Till spring. Till the persimmons are done and the plums are ready and the tree's in leaf again. That's all I want. A girl in the house till spring." }
      ], else: [
        { s: 'mrsoka', f: 'neutral', t: "Those men need a daughter at that table. They need somebody to come down that path every day so they know there's still something to get up for. Till spring. Till their wives are home and the tree's in leaf again. Then we'll see." }
      ] },
      { choose: [
        { t: "I'll stay till spring.", notes: 3, tally: { cakes: 1, 'asks.solar.spring': 'yes' }, flag: 'eqx-oka-spring-yes', then: [
          { n: "Mrs. Oka let go of her hands. She lifted both of hers and took Solar's face between them, lightly, the way you'd hold a bowl, and leaned up and kissed her forehead." },
          { n: "Her lips were dry and cool and soft, and for one second, close, there was nothing but the smell of her, sugar and rice and the cupboard, the inside of a coat that had been hung up a very long time; and then she stepped back, and Solar's forehead was cold where she'd been, a small round cold, like a coin left on the skin." },
          { s: 'mrsoka', f: 'happy', t: "There. Till spring. I'll hold you to it." }
        ] },
        { t: "I can't promise you that.", notes: 2, tally: { 'asks.solar.spring': 'no' }, then: [
          { n: "The flicker. Longer, this time. Long enough that Solar saw it: not anger, nothing like anger; something behind the face looking out of it, the way a cat looks out of a dark doorway, patient, interested, and then pulling back in." },
          { s: 'mrsoka', f: 'neutral', t: "No. Well. Spring's a long way off. Things change their minds, between now and spring." },
          { s: 'mrsoka', f: 'happy', t: "Drink your tea, child. It's getting cold." }
        ] },
        { t: "Spring's mine to decide. When it comes.", notes: 2, tally: { choose: 1, 'asks.solar.spring': 'choose' }, flag: 'eqx-oka-spring-mine', then: [
          { n: "Still. All the way still, in the warm kitchen, with the cup between them and her gloved hands round Solar's, and for one long second Solar couldn't hear anything at all: not the kettle, not the river, not Mr. Kim on the veranda, not her own heart." },
          { s: 'mrsoka', f: 'happy', t: "When it comes. Yes." },
          { s: 'mrsoka', f: 'neutral', t: "Rooms are patient, child. So are persimmons, hanging on their strings. So am I." },
          { n: "She let go of Solar's hands, one finger at a time." }
        ] }
      ] },
      { place: 'Iwatodai · The Oka Boarding House', time: 'Evening', bg: 'eqx-oka-gate', soft: true },
      { n: "The light was going when she left. Mrs. Oka saw her to the door and stopped on the threshold, as she always did, one gloved hand on the frame, and behind her the strings of persimmons hung in the dusk under the eaves, rows and rows of them, dark now against the lit screens, turning very slightly, together, in no wind." },
      { s: 'mrsoka', f: 'neutral', t: "Mind the step, Sol-ah." },
      { n: "Solar stopped on the path." },
      { n: "It was Miseon's voice. Not like it. It. The low one, the one with the lights off, the voice that had said those two syllables to her on the stairs of a house in Incheon a thousand times, going down to breakfast, coming in late, *Sol-ah*, a little rough at the end the way Miseon's voice was always rough at the end of a word she loved; and it had come out of the round kind face on the threshold as easily as if it had always lived there." },
      { n: "Mrs. Oka smiled at her. Her own voice again. Warm, a little embarrassed." },
      { s: 'mrsoka', f: 'happy', t: "That's what she calls you, isn't it? The quiet one. I heard her, at the table. I hope you don't mind. It's such a nice sound to have in a house." },
      { choose: [
        { t: "Don't call me that.", notes: 1, then: [
          { s: 'mrsoka', f: 'neutral', t: "No? Well. I won't, then." },
          { n: "A pause, on the threshold, in the dusk, while the persimmons turned." },
          { s: 'mrsoka', f: 'happy', t: "Not again." }
        ] },
        { t: "It's hers.", notes: 2, then: [
          { s: 'mrsoka', f: 'happy', t: "Of course it is, child. Of course it's hers." },
          { s: 'mrsoka', f: 'neutral', t: "I'm only keeping it warm." }
        ] },
        { t: "(Don't answer. Walk to the gate.)", notes: 2, then: [
          { n: "She didn't answer. She walked down the path to the gate without turning round, with her back to the house and the threshold and the voice, every step the same length, the way Aigis walked a corridor, and lifted the latch, and went out, and let it fall." }
        ] }
      ] },
      { n: "The river came back two steps outside the gate, cold, rushing, high with the week's rain, and the first leaves going down it in the dark." },
      { ifEvent: 'eqx-empty-chair', then: [
        { n: "Haechan was under the post-office lamp. He took one look at her face and didn't ask. He fell in on her river side and walked her up the hill with his shoulder against hers, close, the whole way, and at the top, under the dorm's front light, he said, in Korean, very low, *you've got that look*, and she said *what look*, and he said *the one you used to get at the bottom of the stairs*, and she didn't answer that either." }
      ], else: [
        { n: "Jaehyun caught her up at the corner, out of breath; he'd seen her go and come after her without his shoes properly on. He walked beside her up the hill and didn't ask, and halfway up, under the lamp at the second house, he said, to the road, *Dad asked her today how long she thought it'd be. She said not long now. Then she said, she always did take her time getting ready. That's Mom's. That's a thing Mom says about herself, word for word. He didn't notice. I did.*" }
      ] },
      { n: "That night, in bed, in the dark, she said her own name to herself in her mothers' voices. She did it sometimes, when she couldn't sleep; she'd done it all year, the way you'd touch three photographs. *Solar*, in Solji's, bright, a little impatient, the way she called up the stairs. *Solar-ya*, in Mrs. Kim's, sharp and fond. And then *Sol-ah*." },
      { n: "She tried it three times. Low, rough at the end, the lights off." },
      { n: "Every time, it came back to her in the kitchen voice. Warm. A little embarrassed. Standing on a threshold, not past it, one hand on the frame, keeping it warm." }
    ] },
    // Rank 7 (Nov 16): new paper. From 10/28 (after the fathers moved out, 10/26), after school; Solar goes as Mitsuru's eyes
    // (10/9 "watch her hands"), Hanni at the gatepost. Late plays branch on dead.shinjiro / eqx-shinji-lived (+ eqx-oka-told-shinji),
    // eqx-1122 (mothers home), dead.aigis (+ Aigis rank 6, where she said "mind you're standing in the right doorway"),
    // eqx-persimmon / eqx-girls-left (Edogawa found 12/9, the girls gone). Clues, deniable: four holes in the end room's old
    // paper pushed out from inside (the glove holes of rank 2); she knows the number of Shinjiro's cuts; the mothers' clothes
    // washed with new white stitching down the back. Ask: the end room, "say it's yours".
    { after: '10/28', title: '7: new paper', place: 'Iwatodai · The Oka Boarding House', time: 'After School', music: 'tender', scene: [
      { bg: 'eqx-oka-gate' },
      { n: "Nobody from the dorm went down to the river side any more unless they had to. Nobody had said so. It had happened the way water finds the low part of a floor, without anyone deciding, and by the end of October the river road had a particular emptiness to it in the afternoons, the dry cleaner's steam going up into nothing, the shrine steps swept for nobody, the wind coming down off the water with the first real cold in it and pushing dead leaves along the gutters in little running crowds." },
      { ifEvent: 'eqx-lease', then: [
        { n: "Solar had to. Mitsuru had asked her, in the command room, with the two pieces of paper under the lamp. *When you're at that table, watch her hands.* So she went to the table, and watched them. That was what she told herself on the walk down, every time, and it was true, and it wasn't the whole of it, and she knew that too." }
      ] },
      { n: "Hanni walked her. She stopped at the gate the way she'd stopped in June, at the exact same post, as if she'd marked it, and folded her arms in her coat." },
      { s: 'hanni', f: 'serious', t: "Same post. Same rules. Except it's dark at five now, so you're out by half four, and if you're not out by half four I'm not coming in after you, I'm coming in *through* that hedge, and I'm bringing everyone." },
      { s: 'hanni', f: 'neutral', t: "...Watch her hands, Sol. Mitsuru's not the only one who'd like to know." },
      { n: "Solar lifted the latch from the street side. The gate swung in on its own weight, without a sound, and knocked shut behind her, *there*, and the river went, two steps in, the way it always went." },
      { place: 'The Oka Boarding House · Garden', time: 'After School', bg: 'eqx-oka-garden', soft: true },
      // BG: oka-garden-shoji — the garden of an old wooden Japanese house in late-autumn afternoon light, every paper screen taken out of the house and laid across sawhorses on the grass or leaned against the veranda, the rooms behind standing open like a doll's house, a bare-leaved persimmon tree still hung with orange fruit over a capped stone well.
      { n: "The house was open." },
      { n: "That was the first thing, and it stopped her on the path. Every paper screen had been taken out of its track, every one, the front room's and the kitchen's and the long row along the veranda and, she saw, looking up, the upstairs ones too, and the house stood with all its rooms showing, the way a doll's house stands with its front swung back: the long table, the stove, the stairs, the eight small rooms upstairs side by side with their futons rolled, all lit flat and gray by the low afternoon, all empty. She'd never seen into it all at once before. It looked smaller. It looked like a drawing of a house." },
      { n: "The screens were in the garden. Laid flat across sawhorses on the grass in rows, the way the plum trays had been in August, and leaned along the veranda edge, dozens of them, their old paper yellow and brittle and spotted and, here and there, torn." },
      { ifEvent: 'eqx-persimmon', then: [
        { n: "The persimmon tree had lost all its leaves. The last of the fruit hung on the bare black boughs like lamps nobody had lit. On the lowest bough, the one that reached out over the path, there was a band of bark rubbed pale and raw all the way round, the width of a rope, and Solar looked at it once, and then didn't look at the tree again." }
      ], else: [
        { n: "The persimmon tree had lost nearly all its leaves. The fruit was still on it, dozens, bright and heavy on the bare black boughs, so that the tree looked like something hung with lamps for a festival nobody had come to. Under it the windfalls lay split and softening in the cold, and nothing touched them." }
      ] },
      { n: "Mrs. Oka was at the far row with a bucket and a wide flat brush, wetting down the old paper on a screen, slow strokes, the water darkening it as it went. Her gloves were the thin white cotton still, darned at the tips, wet to the knuckle." },
      { s: 'mrsoka', f: 'happy', t: "There she is. Oh, you've come on a good day. A terrible day, look at the mess, but a good day. Every year before the cold, child. New paper. The house has to see the winter through new eyes. My mother always said." },
      { s: 'mrsoka', f: 'neutral', t: "And it's quiet enough now, isn't it. No gentlemen to trip over. I lay three places at night, still, out of habit, and then I put them away again. It gives my hands something to do." },
      { ifFlag: 'eqx-girls-left', then: [
        { n: "Upstairs, through the open front of the house, Solar could see the big tatami room where the girls had rehearsed. Swept. Bare. Four futons rolled in a row against the wall, and no sound at all from anywhere in the house." }
      ], else: [
        { n: "On the veranda, cross-legged, a girl in a cardigan with her hair pinned up was peeling the old paper off a screen with her fingernails, very slowly, in strips, the way you'd peel a label off a jar you wanted to keep. Kazuha. She looked up and smiled at Solar, small and polite, and went back to it." },
        { s: 'kazuha', f: 'neutral', t: "She says we can each do our own room's screens. Mine has a moth in it. In the paper. Flat, dried, from some other summer. I'm trying to get it out whole." },
        { n: "Mrs. Oka went inside to fill the bucket. Kazuha didn't look up. She went on peeling, strip by strip, and spoke to the paper, in English, very low." },
        { s: 'kazuha', f: 'serious', t: "The end room. The one nobody has. Look at its screen before you paste anything. None of us go in there. None of us have ever gone in there." },
        { n: "Then Mrs. Oka was back on the step with the full bucket, and Kazuha was saying something in Japanese about rehearsal and getting up, and bowing, and going in, the moth lifted out whole on the flat of her palm like something she meant to bury." }
      ] },
      { s: 'mrsoka', f: 'neutral', t: "Come and do this one with me. It's the easiest part. Wet it, wait, and it comes away by itself. Old paper wants to come off. You only have to let it." },
      { n: "She showed her. The water went into the old paper and the paper went dark and soft and slack, and after a minute you could take an edge between your fingers and lift, and it came away from the wooden lattice in one long wet sheet, heavy, gray, clinging a little at each crosspiece and then letting go with a small sucking sound, the way a plaster comes off skin." },
      { choose: [
        { t: "(Peel it slowly, so it comes off in one piece.)", notes: 3, then: [
          { n: "She did it slowly. All the way down the screen, easing it off each crosspiece of the lattice in turn, until she was holding it in both hands, a whole wet gray skin of a screen, cold and heavy and dripping on her shoes; and Mrs. Oka watched her do it with her head on one side and made a small pleased sound, as if Solar had done something rarer than she knew." },
          { s: 'mrsoka', f: 'happy', t: "In one. Look at that. Hardly anyone gets it off in one. They're always in such a hurry." }
        ] },
        { t: "Why every year?", notes: 2, then: [
          { s: 'mrsoka', f: 'neutral', t: "Because it gets old, child. It goes yellow and thin and it lets the cold through. Everything does, if you leave it up long enough." },
          { s: 'mrsoka', f: 'happy', t: "And because I like to. I like a house in new paper. It's like a new face. All the light comes through soft and even, and nobody can see in." }
        ] },
        { t: "(Tear it off in strips. Get it done.)", notes: 1, then: [
          { n: "She tore it. It came away in wet gray rags that stuck to her fingers and to the lattice and to each other, and she had to pick the last of it off the crosspieces with her nails, and Mrs. Oka didn't say anything about it at all, only took the rags from her, one by one, and laid them in the bucket, smoothing each one flat on the water first, as if it might be wanted." }
        ] }
      ] },
      { n: "They did six. Then eight. The stripped lattices stood along the veranda in a row, bare wooden grids with the afternoon coming through them in squares, and the house behind them stood open to the cold, and the cold went in and stood in all its rooms, and Mrs. Oka hummed while she worked, the nothing-tune, low, with her mouth closed." },
      { ifFlag: 'dead.shinjiro', then: [
        { s: 'mrsoka', f: 'sad', t: "I sent boxes to the hall, for the boy who cooked. Twelve. For the mourners." },
        { ifFlag: 'eqx-oka-told-shinji', then: [
          { s: 'mrsoka', f: 'neutral', t: "I'd sent him one of his own in August, you know. Like I said I would, so he'd know there were no hard feelings. I don't think he ate that one either." },
          { n: "She said it mildly, to the lattice, wiping the wood down with her wet cloth. Solar's hands stopped on the paper she was lifting. She'd given her the name. In the hot garden, in August, with the plums. She'd given her the name, and wished she could put it back in her pocket, and hadn't been able to." }
        ], else: [
          { s: 'mrsoka', f: 'neutral', t: "Somebody threw them all away again. Behind your dorm, this time. Twelve boxes, never opened. Somebody who loves you all very much. People do strange things for love." }
        ] }
      ], else: [ { ifFlag: 'eqx-shinji-lived', then: [
        { s: 'mrsoka', f: 'worried', t: "And the boy who cooks. I hear he was hurt, on that terrible night. Three lines, somebody said. Across here." },
        { n: "She drew them on herself with one wet gloved finger, across her own chest over the apron, from the shoulder down. One. Two. Three. Neat, and close together, and slanting, and exactly the length of a hand." },
        { s: 'mrsoka', f: 'sad', t: "Poor boy. Well. They'll heal. Lines do, mostly." },
        { n: "Solar went on lifting the wet paper. She didn't look up. She thought about who could have said, and how many lines, and where; and that nobody outside the dorm had seen under the bandage but the Group's doctor and Akihiko and Aigis; and she couldn't think of a way the number could have walked down the hill to the river side on its own." }
      ] } ] },
      { ifFlag: 'dead.aigis', then: [
        { ifRank: { aigis: 6 }, then: [
          { s: 'mrsoka', f: 'sad', t: "And the girl who counted. I heard. Oh, child. I heard." },
          { s: 'mrsoka', f: 'sad', t: "She stood in the right doorway in the end, didn't she. I told her to mind. I said, they all look the same from the outside." },
          { n: "She said it gently. She said it the way you'd say anything true and sad over a bucket of water, and Solar's hands went still on the lattice and stayed still, and Mrs. Oka didn't seem to notice, and wrung out her cloth." }
        ], else: [
          { s: 'mrsoka', f: 'sad', t: "And the girl who counted. The one with the ribbon. I heard. Oh, child, I'm sorry. She was so very careful. Careful people go in after things. They can't help it." }
        ] }
      ] },
      { n: "The end room's screen was last. Mrs. Oka carried it out from the house herself, holding it in front of her like a tray, and laid it across the sawhorses nearest the well, and stood back from it." },
      { n: "It was older than the others. Yellower. And near the bottom of it, low, at the height a person's hand would be if they were kneeling on the floor inside the room, there were four holes in the paper. In a row. Small, round, the same size, a finger's width apart." },
      { n: "The paper round each one wasn't torn in. It was pushed out. Splayed outward, every one, in a little ring of fibers standing up toward the garden, toward Solar, like the edge of a hole in a glove where something has been pressed through from the inside." },
      // CG: eqx-oka-shoji — an old yellowed paper screen laid across sawhorses beside a capped stone well, four small holes in a row near its bottom edge with the paper splayed outward around each, a woman's wet white-gloved hand resting on the wooden frame beside them, late gray light.
      { s: 'mrsoka', f: 'happy', t: "Children. There's always one. They can't help it, can they, a nice tight paper screen, they have to put a finger through. I never mind. My mother said a house with no holes in its paper is a house nobody's ever been little in." },
      { choose: [
        { t: "There aren't any children here.", notes: 1, then: [
          { s: 'mrsoka', f: 'neutral', t: "No. Not now." },
          { n: "She looked at the holes. Fondly. The way you'd look at pencil marks on a doorframe." },
          { s: 'mrsoka', f: 'neutral', t: "There's always been one somewhere in a house, child. You just have to wait long enough." }
        ] },
        { t: "(Put your finger to one of the holes.)", notes: 2, then: [
          { n: "She put her fingertip to the nearest one, from the outside, the garden side. It didn't fit. The hole was narrower than her finger and the splayed paper round it pricked at her skin, dry, stiff, as if it had been pushed through a long time ago and set like that. She took her hand back. Behind her, very close, Mrs. Oka had stopped humming." }
        ] },
        { t: "(Wet it down quickly. Get it off.)", notes: 2, then: [
          { n: "She took the brush out of the bucket and wet the whole screen in long fast strokes, top to bottom, until the paper went dark and slack and the four holes sank into the wet and closed up and were only four soft gray dimples, and then not even that. Mrs. Oka watched the water go over them. She didn't stop her." },
          { s: 'mrsoka', f: 'neutral', t: "Good girl. Get it all off. It comes away so much easier wet." }
        ] }
      ] },
      { place: 'The Oka Boarding House · Kitchen', time: 'After School', bg: 'eqx-oka-kitchen', soft: true },
      { n: "The paste was rice. Of course it was. Mrs. Oka made it at the stove in a small pan from a scoop out of the tall dark bin at the end of the counter, flour and water stirred over a low flame until it went thick and white and glossy, and the kitchen with its open sides was cold enough that the steam off the pan stood up straight, and the paste smelled the way the whole house smelled, sweet and warm and, under that, the cupboard." },
      { s: 'mrsoka', f: 'neutral', t: "Thin, mind. Just along the wood. The paper does the rest. You lay it on and it shrinks as it dries, tighter and tighter, till you could play it like a drum." },
      { n: "They pasted in the garden in the last of the light. Brush along the lattice, white and thin. Lay the new paper over, a long roll of it, white as a sheet, and smooth it down with the side of the hand from the middle out. Trim. Then Mrs. Oka filled her mouth with water from a cup and sprayed it over the paper in a fine mist, the old way, the way Solar had seen a grandmother do it in some film in some life, and the paper went dappled and soft, and then, as they watched, in the cold air, began to tighten, all over, with a faint creaking like ice on a pond." },
      { n: "The new screens stood along the veranda, bright, taut, the low sun coming through them gold and even. You couldn't see the lattice for the light. You couldn't see anything through them at all." },
      { s: 'mrsoka', f: 'happy', t: "There. New eyes. Every child gets one, you know. One hole. In a new screen. For luck. Go on. I won't tell." },
      { choose: [
        { t: "(Poke one hole. Low, in the corner.)", notes: 3, then: [
          { n: "She put one finger through, low in the corner of the nearest screen. The new paper gave with a small clean pop, like the skin on hot milk, and she drew her finger back, and there it was, a neat round hole with the gold light coming through it in a single coin." },
          { s: 'mrsoka', f: 'happy', t: "There. Now it knows there's a child in the house." }
        ] },
        { t: "I'm not a child.", notes: 2, then: [
          { s: 'mrsoka', f: 'neutral', t: "No. No, you're not, are you. I keep forgetting. You've been grown up for a very long time." },
          { s: 'mrsoka', f: 'happy', t: "That's all right. I'll keep it for you. The hole. I'll leave a place for it." }
        ] },
        { t: "(Leave the paper whole.)", notes: 2, then: [
          { n: "She didn't touch it. She stood back with her hands at her sides and the paste drying on her fingers, and Mrs. Oka looked at her, and at the whole screen, smooth and taut and gold, and smiled, and didn't say anything, and touched the paper herself, lightly, with one gloved fingertip, at the height of Solar's eyes, not hard enough to go through." }
        ] }
      ] },
      { ifEvent: 'eqx-1122', then: [
        { s: 'mrsoka', f: 'happy', t: "And your mothers home. Didn't I say? I said to Mr. Kim, by New Year. And they weren't even that long. Things come home, child. You only have to keep the place laid." }
      ], else: [
        { s: 'mrsoka', f: 'neutral', t: "They'll be home soon, your mothers. I feel it in my knees. And when they are, they'll want their own things round them. That's the first thing anybody wants." }
      ] },
      { n: "She'd made up a parcel. It sat on the end of the counter, wrapped in brown paper and tied with string in a neat cross, and she put her gloved hand on it and slid it toward Solar along the scrubbed wood." },
      { s: 'mrsoka', f: 'neutral', t: "Their things. That they left here. I've washed them all and folded them and mended what wanted mending. The American one's cardigan. The cream one. Mrs. Kim's vest. The quiet one's gray one. They'd come apart a little. Things do, if they're worn hard." },
      { n: "The string had a loop at the top for carrying. The brown paper had come untucked at one corner, and through the gap Solar could see a fold of cream wool, soft, clean; and running across the fold, very small and close and even, a line of new stitching in white thread, the kind of seam you'd sew down the middle of a back." },
      { place: 'The Oka Boarding House · Upstairs', time: 'After School', bg: 'iwatodaidorm-hallway', soft: true },
      { n: "The end room's screen went back last. Mrs. Oka carried it up the stairs herself, and Solar went behind her, and at the top of the stairs, at the end of the long corridor of dark boards, with the new paper glowing in all the doors down one side like a row of lamps, Mrs. Oka stopped at the empty track of the end room, and didn't go in, and stood with the screen held in front of her, waiting." },
      { n: "The room was the same as in June. A futon made up on the floor with the blue-wave quilt turned back at one corner. A cup upside down on a tray by the pillow. On the quilt, folded, the indigo yukata with the white cranes, in Solar's size." },
      { ifFlag: 'eqx-oka-night-stayed', then: [
        { s: 'mrsoka', f: 'neutral', t: "You slept in it once, child. The only one who ever has. I've not changed the sheets. I know I should. I keep meaning to." }
      ] },
      { s: 'mrsoka', f: 'neutral', t: "The gentlemen's rooms I'll let again, to whoever comes. The girls' too, in time. That's what rooms are for." },
      { s: 'mrsoka', f: 'neutral', t: "Not this one. Say it's yours, child. Just say it, and I'll never let it to anyone as long as I live. It's been yours since April. It only wants you to say so." },
      { n: "She stood in the corridor with the bright new screen held up in front of her like a door she hadn't decided to close, and the room behind the empty track was dim and cold and waiting, and the cup on the tray was upside down, and Solar could smell the cupboard smell from where she stood, faintly, coming out of the room, as if the room were the inside of the coat." },
      { choose: [
        { t: "It's mine. Keep it for me.", notes: 3, tally: { cakes: 1, 'asks.solar.room': 'yes' }, flag: 'eqx-oka-room-yes', then: [
          { n: "Mrs. Oka let her breath out. Solar hadn't known she'd been holding it. She fitted the screen into its track with both gloved hands and slid it shut, softly, all the way, until it met the post with a small wooden knock; and the new paper glowed gold in the doorway, taut, without a mark on it." },
          { s: 'mrsoka', f: 'happy', t: "There. Kept." },
          { n: "She put her palm flat against the paper for a moment, the way you'd rest a hand on a sleeping child's back, and the paper took the shape of it, faintly, and held the shape, after she'd taken her hand away." }
        ] },
        { t: "I've got a room. At the dorm.", notes: 2, tally: { 'asks.solar.room': 'no' }, then: [
          { n: "The flicker. In the long dim corridor it was worse than in the kitchen; for a second every screen down the row seemed to darken by a shade, all together, as if a cloud had gone over the sun outside, though the sky at the window was clear." },
          { s: 'mrsoka', f: 'neutral', t: "So you have. With your name on the door and everybody counting. Of course you have." },
          { s: 'mrsoka', f: 'happy', t: "I'll put the screen back all the same. It'll keep. Rooms wait better than people." }
        ] },
        { t: "Where I sleep is mine to decide.", notes: 2, tally: { choose: 1, 'asks.solar.room': 'choose' }, flag: 'eqx-oka-room-mine', then: [
          { n: "Still. The cat at the window. In the corridor with the new screen in her hands, and the gold light coming through it onto her apron in a square, and for a moment the whole house was so quiet that Solar could hear the paper on the screen tightening as it dried, a tiny creaking, like something very slowly drawing a breath." },
          { s: 'mrsoka', f: 'happy', t: "Yours to decide. Yes." },
          { s: 'mrsoka', f: 'neutral', t: "Then I'll leave it open, child. And you decide which side of it you're on." },
          { n: "She leaned the screen against the wall beside the track, and left the room without a door, open to the corridor, the quilt turned back, the cup upside down, waiting." }
        ] }
      ] },
      { place: 'Iwatodai · The Oka Boarding House', time: 'Evening', bg: 'eqx-oka-gate', soft: true },
      { n: "She left at twenty-five past four with the parcel. She hadn't decided to take it; Mrs. Oka had put the loop of string over her fingers at the back step and closed her hand round it, warm and damp through the cotton, and then she was on the path with it, and the gate was knocking shut behind her, and the river came back, cold and loud and going by in the dusk with the last leaves on it." },
      { n: "Hanni was at the post. She looked at Solar's face first, and then at the parcel, and then at the corner of brown paper that had come loose, and the cream wool showing through it, and the line of white thread." },
      { choose: [
        { t: "(Carry it up the hill.)", notes: 2, flag: 'eqx-oka-parcel', then: [
          { n: "Hanni didn't say anything. She held out both hands, and Solar gave it to her, and Hanni carried it up the whole hill held out away from her body, by the string, at arm's length, the way you'd carry something you'd found dead in a garden. At the dorm she didn't take it in. She put it on the bench in the bike shed, and went back out, and stood looking at it from the door of the shed for a while, and then came in and washed her hands at the kitchen sink for a long time." },
          { n: "In the morning the bench in the shed was empty. Nobody had moved it. Nobody said they had." }
        ] },
        { t: "(Set it down on the step outside her gate.)", notes: 2, then: [
          { n: "She turned round and put it down on the step outside the gate, on the street side, neatly, the way you'd leave something on a step for someone to find. Hanni watched her do it and didn't say anything, and took her hand, and they went up the hill. At the corner Solar looked back. The parcel was gone from the step. The gate was shut. Nobody had opened it." }
        ] }
      ] },
      { n: "That night from the dorm roof, with the town red at midnight and everyone in the house in their coffins and the hum in the soles of her feet, Solar looked down the hill to the river side, where the lamps lit nothing and Aigis could never hear, and there, at the end of the dark, where there should have been no light at all, there was one: an upstairs window, small and square, glowing gold and even through new paper, the way a lamp glows in a room where somebody has been waiting up." }
    ] },
    // Rank 8 (Nov 16): one sound short. From 11/25 (the mothers back since 11/22), after school, Yunjin at the gatepost. Before 12/9
    // (eqx-persimmon not played): Mr. Edogawa at her table on a Thursday, being told "the part about the children in the tree"
    // (the girls told the tiger how to climb); Solar can ask him to walk back with her (he stays: "it's only tea"; 11/10 and
    // 12/9 hold). After 12/9: the house empty, the girls gone, the bough. The hoshigaki have bloomed white "like flour".
    // Deniable cruelty, up close and with no witness: she knows how the mothers sleep since the field; if Solar says they've
    // lost the tale, she offers to tell it "in whichever voice you like" and starts it in Solji's. Her hands stay gloved (12/21
    // owns the hands). Ask: the name, "Oka-san… one sound short": asks.solar.name.
    { after: '11/25', title: '8: one sound short', place: 'Iwatodai · The Oka Boarding House', time: 'After School', music: 'tender', scene: [
      { bg: 'eqx-oka-gate' },
      { n: "The cold had come all the way in. It sat on the river road in the afternoons like something that had decided to live there, gray and still and smelling of iron and woodsmoke and the river, and the river itself had gone the color of a spoon, and moved under it slowly, as if it were thinking about stopping. There had been frost on the shrine steps at eight that morning and there was frost on them still at three, in the shade, white along the edge of every stone." },
      { n: "Yunjin walked her down. She hadn't said much since the Second Hill, since the garden at low tide and the wave; she walked with her hands in the pockets of her long coat and her chin in her scarf and her eyes on everything, checking doors, the way she checked every door now. At the gate she stopped at Hanni's post without being told it was Hanni's post." },
      { s: 'yunjin', f: 'serious', t: "I'll be here. Don't eat anything. Don't drink anything she pours. I mean it, Sol. Not even to be polite." },
      { s: 'yunjin', f: 'neutral', t: "...I know. You'll be polite. Just don't swallow." },
      { place: 'The Oka Boarding House · Veranda', time: 'After School', bg: 'eqx-oka-garden', soft: true },
      { ifEvent: 'eqx-persimmon', then: [
        { n: "The garden was white. Frost on the grass that the sun never reached now, frost on the well's cap, a fine white rime along the bare black boughs of the persimmon tree, which had nothing on it any more, not a fruit, not a leaf. The lowest bough, the one over the path, had a pale raw band worn round it the width of a rope. Somebody had tied a strip of white paper there, folded in zigzags, the kind you see at shrines. It moved a little in a wind that didn't reach the ground." },
        { n: "The house was quiet in a way it hadn't been even after the fathers left. The upstairs windows were dark, every one; the girls had gone to the guesthouse with their suitcases and their speaker and the moth in its envelope, all together, and hadn't looked back, Kazuha said after, *because if we look back she'll wave*. There were no shoes on the step. There was only Mrs. Oka on the veranda in a brown wool cardigan, alone, with her gloves on." },
        { s: 'mrsoka', f: 'sad', t: "There she is. Oh, there she is. I didn't think anyone would come any more. Not after. Come and sit, child, there's nobody to mind you now. There's nobody at all." },
        { s: 'mrsoka', f: 'sad', t: "He said he'd stay the night, you know. Mr. Edogawa. I asked him, it was so late and so cold, and he said yes. He wanted to hear the end." },
        { s: 'mrsoka', f: 'neutral', t: "He never did, poor man. I'd only got as far as the tree." },
        { choose: [
          { t: "(Say nothing. Sit down on the far end of the veranda.)", notes: 2, then: [
            { n: "She sat at the far end of the boards, with the length of the veranda between them, and Mrs. Oka looked at the distance, measuring it, and smiled, as if it were a perfectly reasonable distance, as if she'd have chosen it herself." }
          ] },
          { t: "What happens at the end?", notes: 1, then: [
            { s: 'mrsoka', f: 'neutral', t: "Oh, you know the end, child. Everybody knows the end. The rope, and the sky, and the sun and the moon." },
            { s: 'mrsoka', f: 'happy', t: "It's the middle people forget. That was the part he wanted." }
          ] },
          { t: "I'm sorry.", notes: 2, then: [
            { s: 'mrsoka', f: 'sad', t: "Are you, dear. That's kind. You're always kind. Nobody else has said it." },
            { n: "She looked up at the bough with the paper on it for a long moment, and then down at her own gloved hands in her lap, and turned them over, palms up, and then back." }
          ] }
        ] }
      ], else: [
        { n: "The persimmon tree had nothing left on it but a few fruit at the very top, too high to reach, gone dark and soft and translucent on the bare boughs like stained glass, and the frost had got into the grass under it and stayed. Upstairs, through the new screens, came the thump and slide of feet: the girls, in the big room, counting, five, six, seven, eight, and then a burst of laughing, and then counting again." },
        { n: "There were shoes on the step. A pair of old brown lace-ups, cracked at the toes, set neatly side by side. Through the open kitchen door Solar could see the long table, and at the end of it, with a cup of tea in both hands and a scarf wound three times round his neck and his glasses pushed up on his forehead, Mr. Edogawa." },
        { s: 'mrsoka', f: 'happy', t: "There she is. Look who's come, Mr. Edogawa. One of yours." },
        { s: 'edogawa', f: 'neutral', t: "Solar-kun! Ehehe. Caught. It isn't Tuesday, I know, I know. She said Thursdays too, now. She said there's so much of it, Tuesdays alone wouldn't do." },
        { s: 'edogawa', f: 'neutral', t: "We've got to the tree. Do you know the tree? Of course you do. The children are up the tree, by the well, and the tiger's at the bottom, looking up, and it can't climb. And it asks them, very politely, how did you get all the way up there?" },
        { n: "His eyes were bright. Too bright, the way they'd been in the nurse's office with the books in a fan, and the tea in his hands was full to the brim and hadn't been drunk, and the steam off it went straight up, and the kitchen round him was very warm." },
        { s: 'edogawa', f: 'neutral', t: "And this is the part, Solar-kun. The part nobody tells. Mrs. Oka knows it. The children *tell* it. The boy tells it a lie, oil your hands, and it slips. But the little girl, the sister, she laughs at it, and she tells it the truth. Take an axe, she says, and cut steps. And it does. Isn't that marvelous? The children told it how." },
        { s: 'mrsoka', f: 'neutral', t: "Children always do, in the end. They can't help it. Somebody asks them a question nicely enough, and they want so much to answer." },
        { choose: [
          { t: "Sir. Walk back up the hill with me. It's getting dark.", notes: 2, flag: 'eqx-oka-edogawa-asked', then: [
            { s: 'edogawa', f: 'neutral', t: "Ehehe. Next week, Solar-kun. Next week. She hasn't got to the end." },
            { s: 'edogawa', f: 'neutral', t: "A student asked me not to come at all, you know. The other week. It was the nicest thing a student has ever said to me. I came anyway. It's only tea." },
            { n: "He lifted the cup to her, full, in a little salute, the way Nozomi used to lift his bowl, and didn't drink from it." }
          ] },
          { t: "(Watch Mrs. Oka's hands while he talks.)", notes: 2, then: [
            { n: "She watched them. Gloved, gray wool now for winter, darned at every fingertip, folded on the apron while Mr. Edogawa talked; and when he got to the axe, and the steps cut in the bark, the right one lifted, very slightly, and the fingers of it moved against the left palm in a small slow stroking, back and forth, the way you'd stroke a cat, or test an edge." }
          ] },
          { t: "It's only a story, sir.", notes: 1, then: [
            { s: 'edogawa', f: 'neutral', t: "That's what I said! That's exactly what I said to her. And she said, *only*, Mr. Edogawa? She said, there's no such thing as only." }
          ] }
        ] },
        { n: "Mrs. Oka took the full cup out of his hands, gently, and replaced it with another, fuller, and patted his shoulder twice with her gloved hand, and he smiled up at her like a boy. Then she came out onto the veranda to Solar, and slid the kitchen screen shut behind her, softly, until it met the post; and the new paper glowed between them and the kitchen, and Mr. Edogawa was a shape on it, sitting very still, holding his tea." }
      ] },
      { n: "The persimmons on their strings had changed." },
      { n: "They hung under the eaves where they'd hung since September, dozens of strings, rows and rows, but they were small now, half the size, dark, shriveled, the deep brown-orange of a lamp turned almost all the way down, and every one of them was white. A fine white bloom all over them, soft as dust, dense as frost, so that the whole front of the veranda was curtained with small white things hanging very still in the cold." },
      { s: 'mrsoka', f: 'happy', t: "Look. Didn't I tell you? The sugar's come out. All of it, all the way through. It took them nine weeks." },
      { s: 'mrsoka', f: 'neutral', t: "They're ready to come down. For New Year. Come and help me. You've got good hands for it, I've always said." },
      // CG: eqx-oka-bloom — rows of small shriveled dried persimmons hanging on strings under the eaves of an old wooden veranda, every one dusted thick and white as flour, a woman's gray wool-gloved hand cupping one from beneath, frost on the boards, bone-white winter light.
      { n: "She showed her. You took each one off its string, gently, by the stem, and held it in your palm, and rubbed it all over with the flat of your thumb, round and round, slowly, so the white came up thicker; and then you laid it in the lacquered box on the boards between two sheets of paper, and took the next. The fruit was cold and heavy for its size and gave under the thumb, very slightly, the way a closed eyelid gives, and the white came off on Solar's fingers, soft, dry, fine as talc, and got into the creases of her knuckles and the edges of her nails." },
      { s: 'mrsoka', f: 'neutral', t: "People see the white and think they've gone bad. They haven't. That's only what was inside them, all along, coming out to the skin. You can't stop it. You only have to wait." },
      { n: "They worked down a string, and another. The box filled in layers: paper, fruit, paper. Mrs. Oka's gloves were white to the wrist with it. So were Solar's hands. She looked at them in her lap and for a second didn't know them; they looked like somebody else's hands, gloved." },
      { s: 'mrsoka', f: 'neutral', t: "And how are they. Your mothers." },
      { n: "She asked it to the fruit in her palm, rubbing, round and round." },
      { s: 'mrsoka', f: 'neutral', t: "Does the American one sleep on her front now? She'll have to, I should think, for a while. And Mrs. Kim sitting up, with all those pillows. Three won't be enough. She'll want four, and somebody on the floor beside her." },
      { s: 'mrsoka', f: 'sad', t: "And the quiet one. I wonder if she still minds gloves. She was always so good about my gloves, before." },
      { n: "Solar's thumb stopped on the persimmon. She hadn't told her. She'd never told anyone on this side of the hill. She went through it, fast, under her breath, the way Aigis went through a census: the Kirijo ward in Tatsumi, the doctors, Mitsuru's men, the dorm, the girls who came up the hill some evenings, any of them, all of them, anybody could have said. Anybody. It was a small town and people talked. She held on to that." },
      { choose: [
        { t: "They're getting better.", notes: 2, then: [
          { s: 'mrsoka', f: 'happy', t: "Of course they are. Of course. Mothers do. It's what we're for." },
          { s: 'mrsoka', f: 'neutral', t: "And did they come back, child? All of them? Everything they took with them?" },
          { n: "Solar didn't answer that. Mrs. Oka didn't seem to need her to. She laid the fruit in the box, and smoothed the paper over it, twice, with the side of her white hand." }
        ] },
        { t: "They can't remember the story. The one they used to tell me.", notes: 2, flag: 'eqx-oka-tale-told', then: [
          { n: "It was out before she'd decided to say it, and she heard it go, and couldn't have it back. Mrs. Oka's thumb went on round the fruit in her palm, slow, round and round." },
          { s: 'mrsoka', f: 'sad', t: "Oh, child. Not any of them? Not the rope, or the sky? Not even the tiger?" },
          { s: 'mrsoka', f: 'neutral', t: "Well. Never mind. Never mind. I remember it. I'll tell it to you. Any night you like, any night at all. In whichever voice you like." },
          { n: "And then, without any change at all in her face, without any pause, with her eyes on the white fruit in her palm, she started." },
          { s: 'mrsoka', f: 'neutral', t: "*Okay, baby. Once upon a time, a long, long time ago, there was a mom, and she had two kids, Haenim and Dalnim—*" },
          { n: "Solji. Not like her. Her. The bright, tired, bedside voice, English, the Korean names set into it like stones in a ring, the way she'd said them every night in a room in New York with the radiator knocking; the little lift on *baby*; the breath before *once*." },
          { choose: [
            { t: "Stop.", notes: 1, then: [
              { n: "Mrs. Oka stopped. Mid-word. Exactly, the way a radio stops when you turn it off, and looked up from the fruit with her own face, mild and warm, a little embarrassed." },
              { s: 'mrsoka', f: 'happy', t: "Too soon? Of course. Too soon. Another night." },
              { s: 'mrsoka', f: 'neutral', t: "She always skipped the tiger, didn't she, that one. I won't. When you're ready." }
            ] },
            { t: "(Let her go on. Listen.)", notes: 2, then: [
              { n: "She let her. She sat on the cold boards with the white on her hands and listened to her mother's voice tell her the story of the sun and the moon out of the mouth of a woman rubbing persimmons, the hills and the rice cakes and the mother walking home, and it was right, every word of it, every breath, better than she remembered it, and somewhere under her ribs something that had been tight since April went loose and warm and terrible." },
              { n: "At the tiger, Mrs. Oka stopped. Exactly where Solji used to stop. And looked up." },
              { s: 'mrsoka', f: 'happy', t: "That's where she'd stop, isn't it. Every night. I won't. Not when it's my turn." }
            ] }
          ] }
        ] },
        { t: "Who told you how they sleep?", notes: 1, then: [
          { s: 'mrsoka', f: 'neutral', t: "Oh, the girls hear things. And the Group's men come by for a rice cake on the way to their shifts. And Mr. Kim, before. People tell me things, child. They always have. I've that sort of face." },
          { n: "She turned her face up to Solar to show her the sort, round and kind and tired, and held it there, perfectly still, a little too long, the way you'd hold up a photograph for someone to look at closely." }
        ] }
      ] },
      { n: "The last string came down. The box was full. Mrs. Oka fitted the lid on with both white hands and tied it with a red cord, in a bow, and set it on Solar's knees, and the weight of it was surprising, as if there were more in it than fruit." },
      { s: 'mrsoka', f: 'happy', t: "For New Year. For your table up the hill. Don't open it before. They want the whole of the dark first." },
      { n: "Then she sat back on her heels on the boards, with the empty strings hanging bare under the eaves above them, and the light going, and the frost coming back up the grass from the well as the sun went off it, and she looked at Solar for a while without saying anything. Fondly. The way she'd looked at the button in April, and the sock, and the label on the crock." },
      { s: 'mrsoka', f: 'neutral', t: "The girls call me Oka-san. Everybody does, here. The gentlemen, the man at the rice shop. Did you ever notice it's very nearly the word?" },
      { s: 'mrsoka', f: 'neutral', t: "Okaasan. Only one sound short. I've always thought that was a sort of joke somebody made, a long time ago, for a woman who never had any of her own. To have to hear it every day with one sound missing." },
      { s: 'mrsoka', f: 'neutral', t: "Would you say it? Just the once. The whole of it. Nobody ever has." },
      { n: "She asked it so quietly, so plainly, kneeling on the cold boards in her brown cardigan with her white-dusted hands folded in her lap, that it went in under everything, the way the question about her mother had gone in on the stool in April. And Solar felt her own mouth begin to make the shape. Felt it, the way you feel a yawn coming, from the back of the throat, warm, before she'd decided anything at all." },
      { choose: [
        { t: "...Okaasan.", notes: 3, tally: { cakes: 1, 'asks.solar.name': 'yes' }, flag: 'eqx-oka-name-yes', then: [
          { n: "It came out soft. It came out the way it would have come out at a kitchen door in some life, coming in late, calling down the stairs; and Mrs. Oka closed her eyes." },
          { n: "She didn't say anything for a long moment. She knelt with her eyes shut and her face turned up a little, toward nothing, like someone standing in the first sun after a long winter, and the frost came up the grass, and inside the house, behind the screen, nothing moved." },
          { s: 'mrsoka', f: 'happy', t: "...There. That's all. Once is all it takes." },
          { n: "She opened her eyes. She reached out and laid one white hand against Solar's cheek, the wool rough and cold and dusted, and left it there, and Solar's mouth, where the word had been, tasted of sugar." }
        ] },
        { t: "I've got mothers. Three of them. They're home.", notes: 2, tally: { 'asks.solar.name': 'no' }, then: [
          { n: "The flicker. And this time Solar was looking right at her when it came, and it wasn't in her face at all. It was in the strings. Every bare string under the eaves swung, once, all together, the whole length of the veranda, toward the house, as if something had drawn a long breath in through the screens." },
          { s: 'mrsoka', f: 'neutral', t: "Three. So you have. And all of them home." },
          { s: 'mrsoka', f: 'happy', t: "Lucky girl. I said so in April, didn't I. Every one of them a long way off. And look. Not so far now." }
        ] },
        { t: "That word's mine to give. I'll give it to who I choose.", notes: 2, tally: { choose: 1, 'asks.solar.name': 'choose' }, flag: 'eqx-oka-name-mine', then: [
          { n: "Still. All the way still, on her knees on the boards, her white hands in her lap; and for one long second the garden was so silent that Solar could hear the frost, actually hear it, a faint crisp ticking in the grass as it came up toward the house from the well." },
          { s: 'mrsoka', f: 'happy', t: "Yours to give. Yes. Of course it is." },
          { s: 'mrsoka', f: 'neutral', t: "Then I'll wait for it. I'm very good at waiting, child. Ask anyone who's ever sat at my table." }
        ] }
      ] },
      { place: 'Iwatodai · The Oka Boarding House', time: 'Evening', bg: 'eqx-oka-gate', soft: true },
      { n: "She saw her to the door, and stopped on the threshold, one white hand on the frame. Behind her the house was dark except the kitchen, and the new paper of the kitchen screen glowed yellow in the dusk." },
      { ifEvent: 'eqx-persimmon', else: [
        { n: "On the paper there was still the shape of a man sitting at the end of a long table, very still, with a cup in his hands. He hadn't moved. Solar couldn't remember seeing him move once, the whole time she'd been on the veranda." }
      ], then: [] },
      { s: 'mrsoka', f: 'neutral', t: "Mind the frost on the path, child. And mind the box. It's heavier than it looks. Things are." },
      { n: "Yunjin was at the post. She looked at the box first, with the red cord on it, and then at Solar's hands, white to the wrist, and her jaw went tight, and she took her scarf off without a word and wrapped Solar's hands in it, both of them, box and all, the way you'd wrap something to keep it from touching anything else, and they walked up the hill like that." },
      { n: "At the dorm Solar washed them at the kitchen sink. Hot water, soap, the nail brush from the windowsill. The white came off her palms and the backs of her hands and the tops of her fingers, easily, the way flour does. It didn't come out of the creases. Every knuckle, every line of every finger, the edges of her nails: a fine white line, as if somebody had drawn her hands with chalk and not quite rubbed it out." },
      { ifAfter: '12/1', then: [
        { n: "Miseon was at the kitchen table behind her, with tea, in a fleece of Mitsuru's that came down to her knees. Solar turned round from the sink with her wet hands held up in front of her, and Miseon looked at them, at the white in the lines of them, and went still, one second, the cup an inch from her mouth, the way she went still at gloves." },
        { n: "Then she put the cup down, and got up, and took Solar's hands in hers, and turned them over under the light, and began to work at the creases with her thumbs, one knuckle at a time, without a word, very hard, the way you'd scrub at something on a child before anyone else could see it; and Solar stood and let her, and didn't tell her where it was from, and the lacquered box sat on the counter by the kettle with its red cord tied in a bow, and nobody in the house went near it." }
      ], else: [
        { n: "She held them up under the kitchen light and looked at them for a long time. The mothers were still across the bay in the Kirijo ward in Tatsumi, behind glass, with their stitches in; she'd been to see them that morning. Miseon had looked at Mitsuru's riding gloves in the corridor and gone still, one second, and turned the ring on her finger once, all the way round." },
        { n: "Solar dried her hands. She went up to bed with the white still in the lines of them and slept with them outside the covers, open, palms up, the way you'd sleep with something on your hands you didn't want on the sheets; and the lacquered box sat on the counter by the kettle with its red cord tied in a bow, and nobody in the house went near it." }
      ] }
    ] }
  ]
});
