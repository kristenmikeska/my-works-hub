/* Mark · ? Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Searcher (Runners), friendship only (plot doc §9). Mark Lee: Music major, warm on the surface, the boy who found her on her
   first day already knowing who she was. Two truths in parallel, never collapsed: part of him genuinely likes her, and part of
   him is counting (her voice, her father's door), and he has never been good at telling them apart. The narration never makes
   him a villain or a hero, and nothing here touches the book's truths about him (plot doc §7). His tell: when he's nervous he
   overplays casual and rubs the back of his neck. Name dial: Marky is the default, Mark is for when he's in trouble.
   His crossing (11/18, story-act4 'a4-mark', gated on flag door-R6: four notes on the station piano and she knows the fifth)
   is a story event; rank 1 follows it. If the crossing never played, rank 1 plays the meeting itself.
   Branch on the recorded event, not door-R6: the door may open after the crossing's fixed date. He sleeps at the Kirijo guesthouse by the
   station (plot doc §4, 9/13), like the other searcher boys; he visits the dorm. The Mark/Haechan run-in (rank 4) is handled
   gently: grief with muscle memory, nothing new, nothing mended.
   Reworks v1's runners2.js (bodyguard Mark Lee, "Hyuck", the pencil). Kat's playtest note (63/68): no "jk", no re-asking
   about her father and no canon song "with a gap"; he builds something new from this world instead (r3 'the crossing':
   the four notes he brought, her fifth, and a middle made of the line's station chimes and the monorail over the bay).
   Rank 1's unfinished "my best friend" is deliberate: he checks her face and chooses not to say Haechan's name. Texting voice: markylee, lowercase, "word", "lol", "ofc", ":)", "its not on u". No 'happy'
   portrait exists, so his smiles use neutral. Faces used: neutral, flustered, surprised, serious, sad. Arcana: '?' (open
   question, plot doc §16.6). Rank 9's line "I'd never put my name on something that was yours." is Kat-approved: keep it.
   Choices that echo later (all flags are this link's own):
     mark-not-careful (r1), mark-marky (r1: she says Marky first), mark-game (r1: the fox-girl game; opens a rank 4 option),
     mark-bodyguard (r2: she says his line), mark-paid-own (r2), mark-crossing (r3: hums over the crossing; r9 callback),
     mark-who (r3: who he'd play it for; r10 apology), mark-ask-hyuck (r4; r7 payoff), mark-pencil (r4; r10 she returns it),
     mark-ask-me (r5: "you could have asked me"; r6 he asks), mark-too-much / mark-headphones (r6; r9 callback),
     mark-asked-plan (r6: "did you save mine for last on purpose"), mark-cover (r7; afterMax callback),
     mark-trouble / mark-handed-back (r8; r9 opening), mark-stood-up (r8: Jaehyun), mark-not-yet / mark-sang / mark-ask-again
     (r9; r10 and afterMax payoffs).
   Route awareness (ranks 8 and 10, afterMax): route-R or route-true sets mark-home ("she's coming home"), any other route sets
   mark-away. Each of those scenes sets them itself at the top, so they never depend on another file.
   Rank 10 opens on 1/18, leaving six available evenings for all six after-MAX scenes before the finale. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'mark', name: 'Mark Lee', short: 'Mark', arcana: 'Magician', numeral: '', from: 'Runners',
  kind: 'searcher', world: 'R', romance: null,
  starts: '11/18', gate: { R: 7 },
  home: { area: 'portisland', spot: 'Central Concourse', slot: 'evening', days: [1, 3, 5, 6],
          hint: 'Evenings at Port Island Station, at the public piano with the seagulls painted on it.' },
  approach: "Somebody's playing the public piano in Port Island Station's concourse, the one painted with fat cartoon seagulls, and it isn't one of the three songs children always play on it. A boy with light brown hair falling in his eyes, playing like he's talking to someone who hasn't shown up yet.",
  cast: {},
  invite: {
    ask: [
      "sol!! u free? station piano. i figured out the bridge",
      "hey :) wanna get food? my treat. bodyguard mark lee, reporting for duty",
      "random q. r u busy. i made u a playlist. its only kind of embarrassing",
      "port island tonight? theres a band playing outside the station. theyre bad. its great",
      "need a second opinion on a chord. ur the only one with ears in this whole guesthouse lol",
      "u eat yet? dont lie",
      "ur missing all the good songs!! station. come",
      "the bakery lady saved me the last two sweet breads. one of them is urs. i decided",
      "ok i need someone to tell me if this is actually good or just 2am good",
      "its raining and i have two umbrellas. this is a two umbrella situation. i need a second umbrella person",
      "sol. somebody tuned the seagull piano. like actually tuned it. come hear",
      "free? no pressure. like zero pressure. like negative pressure lol"
    ],
    ok: ["word. see u there :)", "yesss ok. ill save u a seat on the bench", "ok cool cool. 10 min", "lolll ok. meet u at the east gate", "ok!! ill get u something warm. sweet. its night"],
    no: ["all good!! next time", "no worries sol :) its not on u", "ok! text me when u get home tho. it gets dark early", "word. ill play it for the seagulls then", "ok :) ill be here. im kind of always here lol"]
  },
  hangouts: [
    [
      { n: "He'd found a band playing outside Port Island Station, four boys in matching windbreakers with a drum kit missing a cymbal, and he was standing at the front of the tiny crowd nodding along with total sincerity, like they were the best thing he'd ever heard." },
      { s: 'mark', f: 'neutral', t: "They're so bad. Sol. They're so bad. The bassist's half a step flat the whole time. I love them so much." },
      { choose: [
        { t: "(Clap for them. Loudly.)", notes: 3, then: [
          { n: "She clapped. He clapped louder. The band, who had clearly never had two people clap at the same time before, played an encore nobody had asked for, and Mark put a thousand yen in their guitar case and told them they had a real sound." }
        ] },
        { t: "Why do you love them?", notes: 2, then: [
          { s: 'mark', f: 'neutral', t: "Because they don't care that they're bad. They're just playing. Nobody's grading them. I can't remember the last time I played anything nobody was grading." }
        ] },
        { t: "You could tell him about the flat.", notes: 1, then: [
          { s: 'mark', f: 'surprised', t: "And ruin him? Sol. No. He's happy. Look at him. Let the man be flat." }
        ] }
      ] },
      { n: "On the way back through the gates he hummed the bassist's line under his breath, the flat note and all, exactly as wrong as it had been, and when she looked at him he grinned and said that was the best part, you had to keep the best part." }
    ],
    [
      { n: "He'd made her a playlist on a borrowed MP3 player with a cracked screen, and he made her listen to all of it on the station bench with one earbud each, and watched her face the whole time, the way you'd watch someone open a present." },
      { s: 'mark', f: 'neutral', t: "Okay, this next one, wait for the bridge. Wait for it. Wait— there. There! Did you hear that? The key change?" },
      { choose: [
        { t: "I heard it.", notes: 3, then: [
          { s: 'mark', f: 'surprised', t: "You did? Okay. Okay, good. Most people don't. Most people just hear it get louder." }
        ] },
        { t: "You're watching me more than listening.", notes: 2, then: [
          { s: 'mark', f: 'flustered', t: "What? No. I'm— I'm checking your reaction. For research. Music research." },
          { n: "He rubbed the back of his neck. He was, she noted, a terrible liar, and also, possibly, a very good one, and she couldn't tell which he was being." }
        ] }
      ] },
      { n: "There were fourteen songs on it. She counted, later, on the train. He'd written the titles on a strip of paper and rubber-banded it to the player in handwriting so neat it looked typed, and at the bottom, smaller, *(skip 9 if ur sad. its a sad one. i put it in anyway)*." }
    ],
    [
      { n: "Mark was teaching Junpei a song on the dorm lounge's out-of-tune piano, which nobody had played since it was installed, and Junpei was learning it with the slow, delighted incompetence of a man who'd never been taught anything by someone this patient." },
      { s: 'mark', f: 'neutral', t: "No, you're doing great. You're doing great. Just. That's a different key. That's a whole different key, man." },
      { s: 'junpei', f: 'happy', t: "Keys are a social construct, dude." },
      { choose: [
        { t: "(Sit down and play the bass line for Junpei.)", notes: 3, then: [
          { n: "She didn't know how to play. Her hands found it anyway, three notes, low, under Junpei's melody, and it sounded, for about four bars, almost like music. Mark stopped and looked at her hands on the keys like he was writing something down in his head." }
        ] },
        { t: "Teach me too.", notes: 2, then: [
          { s: 'mark', f: 'neutral', t: "Yeah? Okay. Sit. You've got good hands for it. You always said you didn't. You do." }
        ] }
      ] },
      { n: "Junpei made it through the whole song once, start to finish, wrong key and all, and stood up from the bench with both arms in the air like he'd hit a home run, and Mark clapped for him the way he'd clapped for the band at the station, without a single reservation in his body." }
    ],
    [
      { n: "The bakery by the east gate closed at eight, and at five to eight the woman behind the counter, who had a perm like a cloud and no patience for anybody, came out from behind it and handed Mark two sweet breads in a paper bag without a word, and went back in, and pulled the shutter down." },
      { s: 'mark', f: 'neutral', t: "She does that. Every night. I don't know why. I asked her name once and she told me it was none of my business. Then she gave me bread." },
      { s: 'mark', f: 'neutral', t: "Mrs. Hamada. The cleaner told me. The cleaner knows everybody. I know the cleaner." },
      { n: "Of course he did. He'd been here three weeks and he knew the cleaner's name and the baker's name and which of the station staff liked the piano and which one pretended not to, and he wore all of it lightly, like a scarf someone else had knitted him." },
      { choose: [
        { t: "(Give the second one to the cleaner.)", notes: 3, then: [
          { n: "The cleaner was a small woman in a grey uniform pushing her wide mop across the concourse in slow arcs. She took the bread from Solar with both hands and bowed, and then looked past her at Mark, and said something too quick for Solar to catch, and Mark went red to the ears." },
          { s: 'mark', f: 'flustered', t: "She said— it's nothing. She said I finally brought a girl. I don't bring girls. I bring bread. Mostly bread." }
        ] },
        { t: "How do you know everyone already?", notes: 2, then: [
          { s: 'mark', f: 'neutral', t: "You just ask, Sol. People like being asked stuff. Nobody asks anybody anything." },
          { s: 'mark', f: 'neutral', t: "...You'd say that's a skill. At home you'd say it like it was a bad thing. I never figured out if it was." }
        ] },
        { t: "(Split it with him.)", notes: 2, then: [
          { n: "She broke it in half, unevenly, and gave him the bigger half without thinking, and he looked at it for a second like she'd handed him a receipt for something he didn't remember buying." }
        ] }
      ] }
    ],
    [
      { ifMet: ['hanni'], then: [
        { n: "Hanni had come along. She'd said it was for the station's melon soda, which was famously the worst in Port Island, and then she'd sat on the far end of the bench beside the piano drinking it with real dedication while Mark played, and watched him the way you'd watch a dog you were fond of that had once eaten a shoe." },
        { s: 'mark', f: 'neutral', t: "Hanni. Hanni. What was the song. The one Sol always put on in the kitchen. At home. With the— you know. The one with the whistle." },
        { s: 'hanni', f: 'neutral', t: "Ask her." },
        { s: 'mark', f: 'flustered', t: "She doesn't remember, that's why I'm asking you." },
        { s: 'hanni', f: 'neutral', t: "Then ask her what she likes now." },
        { n: "She said it pleasantly. She took a long sip of the worst melon soda in Port Island. Mark laughed, a beat late, and rubbed the back of his neck, and looked at Solar, and for once didn't seem to know what face to do." },
        { choose: [
          { t: "I like the one you played the first night.", notes: 3, then: [
            { s: 'mark', f: 'surprised', t: "..." },
            { s: 'mark', f: 'neutral', t: "That's mine. Kind of. That's not a real song yet." },
            { s: 'hanni', f: 'happy', t: "Then she likes yours. See? You just ask." }
          ] },
          { t: "Whistling songs are a crime.", notes: 2, then: [
            { s: 'hanni', f: 'surprised', t: "Oh, she's back. A little bit. That's exactly what she says." },
            { n: "Hanni said it to Mark, but she was looking at Solar, and her eyes had gone bright and wet at the corners in a way she very quickly took care of with her sleeve." }
          ] }
        ] }
      ], else: [
        { n: "He was trying to remember a song. He had the shape of it and not the name, and he played the shape over and over on the seagull piano, a bright little line with a gap in it where a whistle would go." },
        { s: 'mark', f: 'neutral', t: "You used to put this on in the kitchen. At home. I can't remember what it's called. That's killing me. You'd know." },
        { choose: [
          { t: "I don't. But play it again.", notes: 3, then: [
            { n: "He played it again. She didn't know it. Her foot knew it, tapping, and he watched her foot instead of her face, and grinned like he'd caught something." }
          ] },
          { t: "Whistling songs are a crime.", notes: 2, then: [
            { s: 'mark', f: 'surprised', t: "...Okay. Okay, that's exactly what you'd say. Word for word." }
          ] }
        ] }
      ] }
    ],
    [
      { n: "It was raining sideways under the station awning, the kind of cold November rain that found you whatever you did, and Mark had borrowed a little battery keyboard from a boy at the music shop and was playing it on an upturned crate for anyone who'd stop, with the case of the keyboard open at his feet, and almost nobody stopped, and he didn't seem to mind." },
      { n: "When she got there he was done, crouched over the open case, counting. Coins into little stacks of ten. A hundred-yen stack, a ten-yen stack, one sad fifty on its own. He did it fast and neat, the way someone counts who has done it a lot, and he didn't look up until the last stack was square." },
      { s: 'mark', f: 'neutral', t: "Eight hundred and sixty yen. In the rain. That's actually a really good rain number." },
      { choose: [
        { t: "(Crouch down and count the last stack with him.)", notes: 3, then: [
          { n: "She counted the ten-yen coins out loud with him, one to ten, and they came out at the same number at the same time, and he laughed like that was a trick they'd rehearsed." },
          { s: 'mark', f: 'neutral', t: "Okay. Now it's real. Two people counted it." }
        ] },
        { t: "Why do you count everything?", notes: 2, then: [
          { s: 'mark', f: 'surprised', t: "Do I?" },
          { s: 'mark', f: 'neutral', t: "...Yeah. Probably. I like knowing exactly where I am. Minutes, money, how many people clapped. If I know the number it can't surprise me." },
          { n: "He said it lightly. He put the stacks in his pocket one at a time, and she thought it was one of the truest things he'd said to her, and that he hadn't meant it to be." }
        ] },
        { t: "Give it to the bad band.", notes: 3, then: [
          { s: 'mark', f: 'surprised', t: "...Oh, that's good. That's so good. They need a cymbal." },
          { n: "He tipped the whole thing back into a paper envelope from the bakery and wrote FOR THE CYMBAL on it in his neat capitals, and was, she could tell, already looking forward to their faces." }
        ] }
      ] }
    ]
  ],
  ranks: [
    { after: '11/19', title: '1: four notes', place: 'Port Island Station · Central Concourse', time: 'Evening', music: 'mystery', scene: [
      { n: "Port Island Station at six in the evening was a river of wet umbrellas and tired uniforms, the concourse smelling of rain on concrete and the last sweet bread from the bakery by the east gate, and somewhere underneath the announcements the piano with the seagulls painted on it was playing four notes, over and over, and stopping." },
      { ifEvent: 'a4-mark', then: [
        { n: "He was on the bench again. Light brown hair falling in his eyes every time he looked down at his hands, a navy sweatshirt with two Greek letters across the chest that meant nothing to anybody in Port Island, a pair of clear-framed glasses pushed up into his hair and forgotten there. He saw her coming through the crowd before she reached him and his whole face did something, opened, the way a door opens when someone's been waiting just behind it." },
        { s: 'mark', f: 'neutral', t: "Sol. Hey. You came back. Okay. Cool. Cool cool cool." },
        { register: 'mark' },
        { n: "The first night he'd looked at her across the concourse and said her name like a question, and she'd hummed the fifth note of his song before she'd known she was going to, and he'd turned around on the bench and done a double take, the real kind, the kind people only do in cartoons and train stations, and then he'd known exactly who she was. He'd understood that she didn't recognize him. He'd kept smiling anyway, easy, too easy, and walked her to the monorail as if it were the most ordinary thing in the world." },
        { n: "He'd had time to sit with it now. She could tell. There was a carefulness around his eyes that hadn't been there when he'd first turned around." }
      ], else: [
        { n: "A boy on the bench. Light brown hair falling in his eyes every time he looked down at his hands, a navy sweatshirt with two Greek letters across the chest that meant nothing to anybody in Port Island, a pair of clear-framed glasses pushed up into his hair and forgotten there. He played the four notes and stopped on the chord, like a man getting all the way to his front door and patting his pockets for keys, and played them again, and stopped again." },
        { n: "The fourth time, the fifth note was out of her before she'd decided anything, hummed under her breath, quiet, the way you finish a stranger's sentence on a train." },
        { n: "His hands came off the keys. He turned around on the bench and did a double take, the real kind, the kind people only do in cartoons and train stations, and then his whole face did something, opened, the way a door opens when someone's been waiting just behind it." },
        { s: 'mark', f: 'surprised', t: "...Sol?" },
        { register: 'mark' },
        { n: "She told him she didn't know him. She watched it land. He laughed, easy, too easy, and nodded, and rubbed the back of his neck, and she had the strange impression of a boy deciding, right there on the bench, not to hear what she'd said until later, when he was alone and could afford it." },
        { s: 'mark', f: 'neutral', t: "Yeah. No, yeah. Okay. I'm Mark. I've been here a few nights. They put me in a guesthouse by the station. There's a lady who makes the rice way too soft." }
      ] },
      { s: 'mark', f: 'neutral', t: "So. Uh. They told me. At the dorm. Your friend with the headphones. Fuuka. She explained it. The not-remembering thing." },
      { s: 'mark', f: 'flustered', t: "Which is, like. Wild. That's a wild thing to happen. I'm so sorry, Sol. That's not on you. None of it's on you." },
      { choose: [
        { t: "You don't have to be careful with me.", notes: 3, flag: { 'mark-not-careful': true }, then: [
          { s: 'mark', f: 'neutral', t: "Yeah? Okay. Okay, good, because I'm really bad at careful. I'm much better at normal." },
          { n: "He rubbed the back of his neck, hard, and laughed, and the carefulness went out of him all at once like air out of a tire, and what was underneath was warm, and easy, and wanted very much for her to like him." }
        ] },
        { t: "Who are you to me?", notes: 3, then: [
          { s: 'mark', f: 'neutral', t: "Mark. Mark Lee. Marky, to you, mostly. Mark when I'm in trouble." },
          { s: 'mark', f: 'neutral', t: "I'm your friend. I found you on your first day. You were barefoot under a tree holding these really expensive shoes like they'd done something to you. I gave you the tour. You spent the entire tour staring through the window of the gaming lab. Rude. But fair." }
        ] },
        { t: "Hum it again. Your song.", notes: 3, then: [
          { s: 'mark', f: 'surprised', t: "..." },
          { s: 'mark', f: 'neutral', t: "Yeah? You want to? Okay. Okay, here." }
        ] }
      ] },
      { n: "He played the four notes. She hummed the fifth. It came out of her quiet and sure, a note that had been sitting in her somewhere waiting to be asked for, and the chord he'd been stuck on gave under it and opened into the next one like a door somebody had been leaning on from the other side." },
      { n: "He played the whole thing through with her line in it, start to finish, and it was better, and they both knew it was better, and when it was over he sat back on the bench and looked at her, and for one second, so fast she nearly missed it, he looked at her like a sum he was working out in his head." },
      { n: "Then it was gone, and he was just grinning, and the grin was real too. That was the strange part. Both of them were real." },
      { s: 'mark', f: 'neutral', t: "You can sing. Like, actually. I've said it a hundred times, you downplay it and look at me like I'm being nice. I'm not being nice, Sol. You can really sing." },
      { choose: [
        { t: "I only hummed.", notes: 2, then: [
          { s: 'mark', f: 'neutral', t: "Four notes, dead on, off a chord I hadn't even resolved. That's not only humming. That's a whole thing." }
        ] },
        { t: "Thank you, Marky.", notes: 3, flag: { 'mark-marky': true }, then: [
          { s: 'mark', f: 'surprised', t: "..." },
          { n: "His face did something complicated and quick. Pleasure, and then something under the pleasure, a small sharp flicker, like a man who'd heard the number he'd been hoping for read out and was already doing the next sum." },
          { s: 'mark', f: 'neutral', t: "...Yeah. Yeah, okay. Marky. Good. That's still the same." }
        ] }
      ] },
      { s: 'mark', f: 'neutral', t: "So what do you do here? Like, for fun. When you're not, you know. Fighting monsters at midnight. Which is a sentence I said out loud just now." },
      { choose: [
        { t: "I play a game. There's a fox girl in it.", notes: 3, flag: { 'mark-game': true }, then: [
          { s: 'mark', f: 'surprised', t: "Oh, no way. You still— okay. Okay. Some things just stick, huh." },
          { s: 'mark', f: 'neutral', t: "I don't know anything about it. Honestly. My best friend loves that game. He—" },
          { n: "He stopped. Not the way people stop when they've lost a word. He looked at her, quick, the way you'd check whether a door you were passing was open, and whatever he found in her face settled it. He played a chord with his left hand, loud, for no reason, and smiled at the keys." },
          { s: 'mark', f: 'neutral', t: "Anyway. You're really good at it. Everybody says." },
          { n: "He didn't say the name. Much later she would think about how easily he hadn't, how he'd stepped around it without breaking stride." }
        ] },
        { t: "I'm still finding out.", notes: 3, then: [
          { s: 'mark', f: 'neutral', t: "That's kind of cool, actually. Getting to find out twice." },
          { s: 'mark', f: 'sad', t: "...That came out weird. I meant it nice. I mean it nice." }
        ] },
        { t: "I come and listen to strangers play the piano, apparently.", notes: 2, then: [
          { s: 'mark', f: 'flustered', t: "Stranger. Wow. Okay. Fair. Brutal, but fair. I'll take stranger. Stranger's a start." }
        ] }
      ] },
      { n: "When the chime went for the 6:14 to Iwatodai he looked up at the board like a teacher had caught him passing notes, and went to the vending machines by the pillar, and came back with a can of hot milk tea, and pressed it into her hands before she'd answered whether she wanted one." },
      { s: 'mark', f: 'neutral', t: "Sweet. You like it sweet at night. Text me when you get back, okay? It gets dark so early here." },
      { n: "The can stayed warm the whole ride home. She didn't know what to do with the feeling that somebody had been very glad to see her, and had also, somewhere behind the gladness, been counting." },
      { phone: [
        { from: 'mark', t: "u get back ok?" },
        { from: 'solar', t: "i got back" },
        { from: 'mark', t: "word :)" },
        { from: 'mark', t: "sry if i was weird today" },
        { from: 'mark', t: "i wasnt weird. ok i was a little weird" }
      ], contact: 'markylee' },
      { n: "She looked at *u get back ok?* for a long time, on her bed, with the empty can on the desk, and had the feeling of reading a sentence she'd read before, a lot, in a different light." }
    ] },

    { after: '11/25', title: '2: bodyguard', place: 'Port Island · Back Streets', time: 'Evening', music: 'night', scene: [
      { n: "He walked her home. He'd insisted. He'd insisted with his hands up, cheerfully, the way you'd insist on paying a bill you knew you'd lose the argument over, and walked beside her through the back streets behind Port Island Station with his hands in the pocket of his sweatshirt and his shoulder a careful distance from hers." },
      { s: 'mark', f: 'neutral', t: "It's my job. Bodyguard Mark Lee, reporting for duty. You used to hate that. Then you started saying it before I could." },
      { s: 'mark', f: 'neutral', t: "You'd go, *ugh, here comes bodyguard Mark Lee,* and roll your eyes, and then let me walk you anyway." },
      { choose: [
        { t: "Ugh. Here comes bodyguard Mark Lee.", notes: 3, flag: { 'mark-bodyguard': true }, then: [
          { s: 'mark', f: 'surprised', t: "..." },
          { n: "He stopped on the pavement and laughed, really laughed, his head back, loud enough that a cat on a wall left in disgust." },
          { s: 'mark', f: 'neutral', t: "Okay. Okay, that's— yeah. That's exactly it. You even did the eye roll. You got the eye roll right." }
        ] },
        { t: "Do I need a bodyguard?", notes: 2, then: [
          { s: 'mark', f: 'neutral', t: "No. Never. You've never needed anybody for anything. That's why it's funny." },
          { s: 'mark', f: 'serious', t: "...It's a little bit funny. It's a little bit not." }
        ] },
        { t: "I fight Shadows at midnight, Mark.", notes: 2, then: [
          { s: 'mark', f: 'flustered', t: "Mark. Oh no. Mark. Am I in trouble already? It's been a week." },
          { s: 'mark', f: 'neutral', t: "...I know. I know you do. Fuuka let me listen. Once. I'm never doing that again. I couldn't breathe for three hours." }
        ] }
      ] },
      { n: "The wind came up off the bay between two buildings and went straight down her collar, and she pulled it closed with one hand, and Mark watched her do it, and something went across his face, quick, and was gone." },
      { s: 'mark', f: 'neutral', t: "You had a scarf. At home. Navy, with two little gold suns on it. It was for the cold, I got it for you, it's not a big deal." },
      { s: 'mark', f: 'flustered', t: "I tied it really badly. Outside a ramen place. You said it was crooked and I said that was the style. ...Anyway." },
      { n: "She didn't remember it. Her free hand went to her throat anyway, to the place a knot would have sat, and found nothing there, and stayed a second too long, and he saw that too and looked at the street." },
      { n: "Halfway there the back streets opened out onto a corner with a convenience store glowing on it like a fish tank, and he said *hang on* and was inside before she could answer, and came back out with two steamed buns in a paper bag, already paid for, the receipt already balled up in his pocket." },
      { s: 'mark', f: 'neutral', t: "Pork one's yours. The other one's red bean. I'm not saying you'd hate the red bean. I'm saying I know you." },
      { choose: [
        { t: "(Take it. Say thanks.)", notes: 3, then: [
          { s: 'mark', f: 'neutral', t: "See? Easy. Just say thanks. You could never just say thanks at home, you always had to make it a whole negotiation." },
          { n: "She ate it walking. It was too hot and she burned her tongue and didn't say so, and he watched her not say so, and laughed, and handed her the cold half of a water bottle he'd apparently also bought." }
        ] },
        { t: "(Count out the coins for it and press them into his hand.)", notes: 3, flag: { 'mark-paid-own': true }, then: [
          { n: "She had the right change. She hadn't checked the price. She'd known it somehow, the way you know your own phone number, and she put a hundred and twenty yen into his palm and closed his fingers over it." },
          { s: 'mark', f: 'surprised', t: "..." },
          { s: 'mark', f: 'neutral', t: "Wow. Yeah. That's— yeah. You always did that. I paid for a whole table of barbecue once, at home, everybody's. I posted a picture of you at the grill. I don't think you loved the picture part." },
          { n: "He put the coins in his pocket without counting them, which she would learn later was not like him at all." }
        ] }
      ] },
      { n: "At the corner of the dorm's street Akihiko was coming back from his evening run, slowing, his breath going white, and he saw them and slowed further, and looked at Mark, up and down, once, the way you'd look at a new heavy bag someone had hung in your gym without asking." },
      { s: 'akihiko', f: 'neutral', t: "...Solar." },
      { s: 'mark', f: 'neutral', t: "Hey, man! Mark. Hi. I'm a friend. From her— from home. Big fan of the dorm. Love the dorm." },
      { n: "He held out his hand. Akihiko shook it. It was, Solar noticed, a slightly longer handshake than handshakes usually were, on both sides, and Mark's other hand went to the back of his neck and stayed there." },
      { s: 'akihiko', f: 'neutral', t: "You walked her back." },
      { s: 'mark', f: 'neutral', t: "Yeah! Course. It gets dark so early." },
      { s: 'akihiko', f: 'neutral', t: "...Good." },
      { n: "Akihiko went in. Mark watched the door close behind him and let out a breath and laughed at himself, a little too loudly, the overplayed kind." },
      { s: 'mark', f: 'flustered', t: "He's intense. Is he always that intense? He shook my hand like he was checking it for weapons." },
      { choose: [
        { t: "He's like that with everyone.", notes: 2, then: [
          { s: 'mark', f: 'neutral', t: "Cool. Cool. Totally normal. I'm being so normal." }
        ] },
        { t: "You rubbed your neck the whole time.", notes: 3, then: [
          { s: 'mark', f: 'surprised', t: "..." },
          { s: 'mark', f: 'neutral', t: "...You still clock that. Even now. Huh." },
          { n: "He took his hand down from his neck and put it in his pocket and kept it there, and looked at her for a second with an expression she couldn't read at all, and then smiled, and she couldn't read that either." }
        ] },
        { t: "He said good. That's a lot, from him.", notes: 3, then: [
          { s: 'mark', f: 'surprised', t: "Wait, really? That was a good good?" },
          { s: 'mark', f: 'neutral', t: "Okay. Okay, I'll take it. I'll take a good good. I'm going to think about that good the whole walk back." }
        ] }
      ] },
      { phone: [
        { from: 'mark', t: "home safe? i know ur literally home. i watched u go in" },
        { from: 'mark', t: "ok that sounds bad. i didnt WATCH watch" },
        { from: 'mark', t: "goodnight sol :)" }
      ], contact: 'markylee' }
    ] },

    { after: '12/3', title: '3: the crossing', place: 'Port Island Station · Central Concourse', time: 'Evening', scene: [
      { n: "He had a stopwatch. An actual one, orange plastic, on a cord around his neck like a gym teacher's, bought that morning at the sports shop in the mall for six hundred yen, and when she came across the concourse he held up one finger without looking at her while the departure chime for the 6:40 to Iwatodai played over the speakers, a bright little run of notes like a doorbell with ambitions, and clicked the stopwatch the instant it ended, and wrote something down in a notebook of staff paper propped on the piano lid." },
      { s: 'mark', f: 'neutral', t: "Okay. Sorry. Hi. Four point two seconds. Iwatodai's is four point six. The one at the end of the line is in a completely different key, which, honestly, rude." },
      { s: 'mark', f: 'flustered', t: "Every station here has its own song. Did you know that? You get off the train and the station plays you out the door. Nobody at home would believe me. Nobody at home has a station that plays them anything. Ours just beep at you for being slow." },
      { n: "He'd been at it for days, by the look of the notebook. Every chime on the line written out in his neat small hand with the station's name over it like a title, and in the margins arrows and question marks and, once, underlined twice, the words *THE WATER???*" },
      { s: 'mark', f: 'neutral', t: "So. Don't laugh. The four notes, I brought those with me. Everything after them is from here. I've been building it out of here." },
      { n: "He turned to the seagull piano and played it. The four notes. Her fifth. And then a passage that sounded, impossibly, like the monorail going over the bay at night, the rail humming under it and the lights of the city sliding past the windows, with Iwatodai's chime folded in at one end of it and Port Island's at the other, so that the whole middle of the song was a train leaving one side of the water and arriving at the other." },
      { s: 'mark', f: 'neutral', t: "That's the crossing. It needs a line over it. A voice. Somebody going somewhere." },
      { s: 'mark', f: 'serious', t: "I keep hearing you on it." },
      { choose: [
        { t: "Me?", notes: 2, then: [
          { s: 'mark', f: 'neutral', t: "You. Yeah. Low. A little tired. Like somebody on the last train who knows exactly which stop is hers and isn't in a hurry to get there." }
        ] },
        { t: "(Hum over the crossing.)", notes: 3, flag: { 'mark-crossing': true }, then: [
          { n: "He played the middle again and she hummed over it. Quietly. Eight bars. Her voice found a line between the two chimes like a path she walked every day, one station going out and the other coming in, and Mark sat absolutely still on the bench beside her, not breathing, the way you'd sit still when a bird lands near you." },
          { s: 'mark', f: 'surprised', t: "...Yeah. That. That's what it's for." }
        ] },
        { t: "Why a train?", notes: 3, then: [
          { s: 'mark', f: 'neutral', t: "Because it's the first thing here that made sense to me. You get on one side, you get off the other. Everything in between is just water and lights." },
          { s: 'mark', f: 'serious', t: "And the first night, right here, at midnight, everything stopped. There was a train out on the bridge with every light dead, just sitting there over the water in the green, and it was so quiet I could hear my own watch. I want the crossing to sound like the minute after. When it started moving again." }
        ] }
      ] },
      { n: "Before she could say anything else he'd taken the phone out of his pocket, the cracked one from home whose battery never went down, and was holding it up over the keys like a candle, playing the whole thing once more into it, start to finish, the stopwatch swinging on its cord against his chest." },
      { s: 'mark', f: 'neutral', t: "Also. Kind of related. Kind of not." },
      { n: "He rubbed the back of his neck. He looked at the departure board. He laughed, at nothing, a beat too early." },
      { s: 'mark', f: 'neutral', t: "If I finish it here, it comes with me, right? When we go. Like, if I go home and play it, it's still mine. Nobody there's heard anything like it. Nobody there's ever heard a monorail." },
      { n: "He said it lightly, a joke about trains. Under the joke she watched him do a sum she couldn't see the numbers of: a song nobody had ever heard, from a place nobody could go back to, and somewhere at home a room with the right people in it, and how long it would take to walk from one to the other. And beside the sum, warm, real, the same boy who'd timed a doorbell chime with a stopwatch all afternoon because he couldn't not." },
      { choose: [
        { t: "Who would you play it for?", notes: 3, flag: { 'mark-who': true }, then: [
          { s: 'mark', f: 'neutral', t: "...My mom. Obviously. My professor, maybe. Whoever's in the room." },
          { s: 'mark', f: 'flustered', t: "That's the small answer. I'm going with the small answer tonight. It's a small-answer kind of night." },
          { n: "He meant it. She watched him mean it. She also watched the bigger answer fold itself up very small and go back into a pocket, for later, and she didn't know which one she'd been given." }
        ] },
        { t: "It's yours. Take it.", notes: 3, then: [
          { s: 'mark', f: 'surprised', t: "...Yeah? Even the part you hummed?" },
          { s: 'solar', f: 'neutral', t: "My part's mine. The trains are yours." },
          { s: 'mark', f: 'neutral', t: "Okay. Okay. That's clean. That's really clean. I like clean. I'm writing that down." },
          { n: "He did write it down, at the bottom of the page, under THE WATER???, in his small neat capitals. She didn't see what it said." }
        ] },
        { t: "(Play the four notes for him instead of answering.)", notes: 2, then: [
          { n: "She reached past him and played them, badly, with one finger. He laughed, and played her fifth note back to her, and the question went wherever questions go when nobody picks them up." }
        ] }
      ] },
      { n: "He walked her to the gate and didn't mention home again, the whole way, so carefully that the not mentioning became a third person walking between them with its hands in its pockets." },
      { phone: [
        { from: 'mark', t: "sent u the memo" },
        { from: 'mark', t: "dont listen to it at 2am. its a 2am song. itll get u" },
        { from: 'mark', t: "ok listen to it at 2am" }
      ], contact: 'markylee' },
      { n: "She listened to it at two in the morning. It got her. She didn't text him that, and she had the feeling, lying there with the train crossing the bay quietly into the dark, that he'd counted on her not texting it, and was right." }
    ] },

    { after: '12/9', title: '4: hyuck', place: 'Paulownia Mall · Central Atrium', time: 'Evening', music: 'mystery', scene: [
      { n: "December had turned the mall into a greenhouse, everybody shedding scarves at the doors and the fountain throwing its noise straight up at the glass roof, where it hit and came back down twice as loud and half a second late. Mark was sitting on the lip of the fountain with one earbud in and a notebook of staff paper on his knee, pencil behind his ear, and when he saw her he dropped the pencil, picked it up, dropped it again, and then waved with it like that had been the plan." },
      { s: 'mark', f: 'flustered', t: "Sol. Hey. Hi. I was literally just sitting here. Like a guy. Sitting." },
      { s: 'mark', f: 'neutral', t: "Listen to this room. It's awful in here. The water hits the roof and comes back late. You can hear the slap." },
      { n: "She listened. She couldn't hear the slap. She could hear water and a lot of people and a child somewhere negotiating hard for a pretzel." },
      { s: 'mark', f: 'neutral', t: "Yeah, I can't really either. Not properly. Hyuck would've had it in two seconds. He'd tell you exactly what's wrong with this room and how to fix it and why everyone who built it should be in jail." },
      { n: "He laughed, and the name sat there after the laugh was gone, heavy, like a word he'd bitten down on by accident and kept chewing anyway." },
      { n: "*Hyuck.* It went into her strange and sideways. She knew the boy it belonged to. She'd sat beside him on a dryer at three in the morning more nights than she'd admit to. She knew it as a name for him that belonged to someone else, and she knew, without knowing how she knew, that the someone else was sitting right here, and that it hadn't always been a name that hurt." },
      { choose: [
        { t: "Haechan.", notes: 3, then: [
          { s: 'mark', f: 'neutral', t: "...Yeah." },
          { s: 'mark', f: 'neutral', t: "He's here. I know. He lives at your dorm. I've seen him on the steps. He looked at me like I was a song he's heard too many times." },
          { s: 'mark', f: 'serious', t: "We haven't said anything to each other. We're very good at that. We've had a lot of practice." },
          { s: 'mark', f: 'neutral', t: "Mitsuru put me at the guesthouse and him with you. I didn't ask her to. I think Hanni had a word. Hanni thinks of everything." }
        ] },
        { t: "Your best friend. The one who loves the game.", ifFlag: 'mark-game', notes: 3, then: [
          { s: 'mark', f: 'surprised', t: "..." },
          { s: 'mark', f: 'neutral', t: "You remembered that. I said it for like half a second. I took it back." },
          { s: 'mark', f: 'serious', t: "Yeah. Him. He plays the one you play. The other side of it, he's the one in the back with the long gun, he's— don't tell him I said this. He's really good. He's the best I've ever seen at anything." },
          { n: "He said it to the fountain, not to her, with something in his voice that was pride and wasn't allowed to be anymore." }
        ] },
        { t: "(Sit down. Let him keep talking.)", notes: 3, then: [
          { n: "She sat on the fountain's edge, a careful arm's length away, and said nothing, and he filled the silence the way she'd guessed he would, the way people do when they've been waiting a long time for someone to sit still long enough." },
          { s: 'mark', f: 'serious', t: "My best friend. Was. Is. I don't actually know what the word is right now. Since we were kids." }
        ] }
      ] },
      { s: 'mark', f: 'neutral', t: "We used to make stuff. Together. All the time. I'd play, he'd hear what it was missing. He hears rooms. It's like a curse. He can't turn it off." },
      { s: 'mark', f: 'serious', t: "And then we didn't. And he gets to be mad about that forever, apparently. So." },
      { n: "He let the *so* hang there, unfinished, the way the song at the station had stopped on its chord. She had the feeling that if she hummed the next part of this one, he wouldn't thank her for it." },
      { s: 'mark', f: 'sad', t: "Is he okay? Here?" },
      { n: "He asked it so quietly the fountain nearly took it. Then he heard himself, and shook his head, and put the smile back on like a cap." },
      { choose: [
        { t: "I think so. Most nights.", notes: 3, then: [
          { s: 'mark', f: 'neutral', t: "...Good. That's good." },
          { s: 'mark', f: 'neutral', t: "Don't tell him I asked. He'd be insufferable about it for, like, a year." }
        ] },
        { t: "You should ask him yourself.", notes: 3, flag: { 'mark-ask-hyuck': true }, then: [
          { s: 'mark', f: 'neutral', t: "Yeah. I should." },
          { s: 'mark', f: 'serious', t: "I'm not going to. You know that. You always know that about me. It's very annoying." }
        ] },
        { t: "Why do you call him that?", notes: 2, then: [
          { s: 'mark', f: 'neutral', t: "Because I always have. Since forever. It's his name. It's my name for his name." },
          { s: 'mark', f: 'serious', t: "...Nobody else gets to. That used to be the whole point of it." }
        ] }
      ] },
      { n: "His phone buzzed against the stone. He looked at it, and whatever was on the screen pulled every bit of slump out of his shoulders at once, the way a coach's whistle straightens a whole team." },
      { s: 'mark', f: 'flustered', t: "That's, uh. That's nothing. Delivered late. From home. That's totally nothing. Good seeing you, Sol. Really." },
      { n: "He went off toward the escalators at a pace that was trying very hard to be a stroll. He'd left the pencil on the fountain's edge. It had teeth marks on the end, and MARK written down the side of it in tiny capitals, the way you only label the things you're afraid someone will take." },
      { choose: [
        { t: "(Put the pencil in your pocket. Keep it for him.)", notes: 3, flag: { 'mark-pencil': true }, then: [
          { n: "It was warm from the stone and lighter than it looked. She put it in her coat pocket, where it sat all the way home against her hip, and she didn't text him that she had it, and she didn't know why she didn't." }
        ] },
        { t: "(Leave it where he'll come back for it.)", notes: 2, then: [
          { n: "She left it on the fountain's edge, squared up neat, the way he'd have left it. When she passed through the atrium two days later it was gone, and she found she'd looked for it, and was a little sorry." }
        ] }
      ] }
    ] },

    { after: '12/16', title: '5: the map', place: 'Port Island Station · Central Concourse', time: 'Evening', scene: [
      { n: "He'd brought her an iced coffee at four in the afternoon on Tuesday, and a sparkling water on the dorm steps on Thursday morning, and tonight, at the station, at eight, a can of the pink refresher from the one machine in Port Island that sold anything close to it, and he held it out to her with his face doing the thing where it wanted very much to be thanked and was trying to look like it didn't care." },
      { s: 'mark', f: 'neutral', t: "Refresher. At night. You don't drink coffee late, you'll be up till four." },
      { n: "It was exactly right. Every single one of them had been exactly right, the right drink at the right hour, and she stood in the concourse holding the cold can and felt something that was warm and something that wasn't, both at once, in the same place." },
      { s: 'solar', f: 'neutral', t: "How do you know my drinks?" },
      { s: 'mark', f: 'neutral', t: "I asked. Hanni told me. A while ago. At home." },
      { s: 'mark', f: 'neutral', t: "She knows everything about you. She's like a database. A really nice database who bakes." },
      { n: "He said it easily, proudly almost, the way you'd say you'd done your homework. And it was kind. It was a kind thing to do, to go and ask someone what a girl liked so you could get it right. She knew that." },
      { n: "She also knew, somehow, standing there, that there was another way to know what someone drank. A boy who'd just put a can down beside her on a ledge one night without a word, and never said how he knew, and never asked anyone, because he'd watched. She didn't know who. She knew the difference. She held both of them in her hands at once, the asking and the watching, like two cans of different temperatures." },
      { choose: [
        { t: "Thank you for asking.", notes: 3, then: [
          { s: 'mark', f: 'neutral', t: "Of course. Always. I want to get it right with you. I always want to get it right." },
          { n: "He did. That was true. She could see it was true. It was also true that he was watching her face to see if it had worked." }
        ] },
        { t: "You could have asked me.", notes: 3, flag: { 'mark-ask-me': true }, then: [
          { s: 'mark', f: 'surprised', t: "..." },
          { s: 'mark', f: 'neutral', t: "...Yeah. I could've. Huh." },
          { s: 'mark', f: 'neutral', t: "I think I wanted it to be a surprise. I think I wanted you to go, *how did he know.* That's kind of messed up, right? That's a little messed up." },
          { n: "He laughed at himself, and it wasn't the overplayed laugh. It was smaller, and more honest, and he rubbed his neck after it like it had cost him something." }
        ] },
        { t: "(Drink it. Say nothing.)", notes: 2, then: [
          { n: "She drank it. He watched her drink it. He looked, for a second, exactly like a boy who'd given a girl the right drink and was happy about it, and nothing else, and she let him be that, because some of him was." }
        ] }
      ] },
      { n: "They sat on the bench by the piano until the last train, and he played her three songs she didn't know and one she did. The one she did was nobody's, a jingle from a commercial for dish soap that had been on the station screens all week, and he played it like it was Chopin, with his eyes closed and his whole body leaning into the dramatic parts, until the cleaner pushing her mop past them laughed out loud and Solar did too and couldn't stop." },
      { n: "At the end of the last one he looked at her and said, quietly, that she was easy to talk to, here, easier than at home." },
      { s: 'mark', f: 'neutral', t: "At home you're always watching me like you're doing math. Here you just. Listen." },
      { s: 'mark', f: 'sad', t: "I don't know which one I like better. That's a weird thing to say. Forget I said it." },
      { choose: [
        { t: "(Don't let him take it back.)", notes: 3, then: [
          { n: "She didn't say *okay.* She didn't say anything. She drank the last of the pink refresher and looked at him over the can, and let the thing he'd said stay out on the bench between them where he'd put it, and after a while he stopped trying to pick it back up." },
          { s: 'mark', f: 'neutral', t: "...You never let me take stuff back. Even at home. Especially at home." }
        ] },
        { t: "Forgotten.", notes: 2, then: [
          { s: 'mark', f: 'neutral', t: "Thanks. Cool. Thanks." },
          { n: "He said it like he was grateful, and he was, and he also looked, for a second, a little disappointed that it had been so easy." }
        ] },
        { t: "Maybe I like you better here too.", notes: 3, then: [
          { s: 'mark', f: 'surprised', t: "..." },
          { s: 'mark', f: 'flustered', t: "Okay. Wow. Okay. That's— you can't just say that on a bench. I'm going to be weird about that for a week." },
          { n: "He was weird about it for a week. He texted her a picture of the seagull piano every evening of it, just the piano, no message, as if it would explain itself." }
        ] }
      ] }
    ] },

    { after: '12/22', title: '6: a present', place: 'Iwatodai Dorm · Lounge', time: 'Evening', music: 'joy', scene: [
      { ifFlag: 'mark-ask-me', then: [
        { phone: [
          { from: 'mark', t: "ok. im asking u this time. like u said" },
          { from: 'mark', t: "whats ur favorite color. for real. not what anybody else says" },
          { from: 'solar', t: "i don't know. i'll tell you when i find out" },
          { from: 'mark', t: "thats the most u answer of all time" },
          { from: 'mark', t: "ok. noted. working with it" }
        ], contact: 'markylee' }
      ] },
      { n: "He'd brought presents. For everyone. The whole dorm. He'd come in through the front door with two shopping bags from Paulownia Mall and a Santa hat he'd clearly bought as a joke and then committed to, and he'd gone around the lounge handing them out one at a time, with a little speech for each." },
      { n: "Junpei got a baseball cap. Yukari got hand cream that smelled of cherry blossoms. Fuuka got a tiny screwdriver set in a leather case, which made her gasp. Ken got a book about dogs, and Koromaru got a toy shaped like a fish, and Mitsuru got a very good pen, and looked at it, and at him, and said *thank you* in a voice that suggested she was revising an opinion." },
      { ifMet: ['hanni', 'hyein'], then: [
        { n: "Hanni got a tin of the good tea from the shop by the café that she'd said once, in passing, she liked the look of, and Hyein got a measuring tape in a little leather case, which she pretended not to love for nearly three full seconds." },
        { s: 'hyein', f: 'surprised', t: "Wait. This is actually nice. Why is this actually nice. Hanni, he got me something actually nice." },
        { s: 'hanni', f: 'neutral', t: "He's good at presents." },
        { n: "She said it warmly. She didn't look at the presents when she said it. She looked at Solar." }
      ] },
      { s: 'mark', f: 'neutral', t: "And Sol. Last but not least. Obviously." },
      { ifFlag: 'mark-ask-me', then: [
        { n: "Hers was in plain brown paper with no ribbon at all, the only one in either bag without one, and tucked under the string was a small fan of ribbons, five colors, uncut. *Pick one when you find out,* said the tag." }
      ], else: [
        { n: "Hers was in a small box with a ribbon." }
      ] },
      { n: "Everyone in the lounge was watching. That was, she understood, the point, or one of the points. He'd given everyone else theirs first so that hers would be last, so that everyone would be looking." },
      { n: "Inside was a pair of headphones. Good ones. Over-ear, closed-back, the kind with the soft leather cushions, expensive, the most expensive thing in either bag by a long way, and a little card tucked into the headband in his handwriting. *For the crossing. When you're ready. M.*" },
      { s: 'junpei', f: 'surprised', t: "Duuude. Those are like, studio headphones. Those are nicer than the ones in the electronics shop window." },
      { choose: [
        { t: "These are too much, Mark.", notes: 3, flag: { 'mark-too-much': true }, then: [
          { s: 'mark', f: 'flustered', t: "Mark. Oh no. No, no, they're— it's nothing. They were on sale. Kind of. It's Christmas!" },
          { s: 'mark', f: 'neutral', t: "...You deserve nice things, Sol. You never let anyone give you nice things. Let me. Just this once." }
        ] },
        { t: "(Put them on. In front of everyone.)", notes: 3, flag: { 'mark-headphones': true }, then: [
          { n: "She put them on. The lounge went away. Everything went away, the TV and Junpei and the warm buzz of everyone, into a soft padded silence like the inside of a held breath, and in the silence she could see Mark's face, watching her, lit up, delighted, and something else behind the delight, already looking toward what came next." },
          { n: "She took them off. The lounge came back. He was smiling. Both of the smiles were real. She'd stopped expecting otherwise." }
        ] },
        { t: "Thank you, Marky.", notes: 3, then: [
          { s: 'mark', f: 'neutral', t: "Yeah? You like them? Okay. Okay, good. Good good good." },
          { n: "He let out a breath like he'd been holding it since Paulownia Mall, and sat down on the arm of the sofa next to her, and didn't rub his neck once, which she noticed, and filed." }
        ] }
      ] },
      { n: "Across the lounge, in the doorway, a boy in a black hoodie had stopped on his way to the kitchen and was looking at the headphones in her hands. He didn't say anything. His face did nothing at all, very carefully. Then he went on to the kitchen, and a minute later she heard the back door, and he didn't come back through the lounge that night." },
      { n: "Mark didn't look at the doorway once." },
      { place: 'Iwatodai Dorm · Front', time: 'Night', soft: true },
      { n: "She found him later on the front steps, putting his shoes back on, the Santa hat in his lap with its pompom drooping. The bags were empty and folded flat beside him into neat squares. He'd folded them very small." },
      { s: 'mark', f: 'neutral', t: "Hey. Hi. That went good, right? I think that went good. Mitsuru said thank you. I'm going to be thinking about Mitsuru saying thank you for a month." },
      { choose: [
        { t: "Did you save mine for last on purpose?", notes: 3, flag: { 'mark-asked-plan': true }, then: [
          { s: 'mark', f: 'surprised', t: "..." },
          { s: 'mark', f: 'neutral', t: "...Yeah. I wanted everyone looking. I'm not going to lie about that. I wanted it to be a moment." },
          { s: 'solar', f: 'neutral', t: "Everyone?" },
          { n: "He tied his shoe. He took a long time over it. Double knot." },
          { s: 'mark', f: 'serious', t: "I don't know, Sol. I didn't think about him. I think I didn't think about him on purpose. I think that's a thing I can do." },
          { n: "It was the most honest answer he could have given her, and it answered nothing, and he knew both of those things, and so did she, and they sat on the steps with it for a while like a third bag he'd forgotten to fold." }
        ] },
        { t: "(Sit down next to him. Don't ask.)", notes: 3, then: [
          { n: "She sat. The step was cold through her skirt. He put the Santa hat on her head without asking, sideways, and she let it stay." },
          { s: 'mark', f: 'neutral', t: "You look ridiculous. Merry Christmas." }
        ] },
        { t: "Thank you for coming, Marky.", notes: 2, then: [
          { s: 'mark', f: 'neutral', t: "Of course I came. I bought a hat. You can't buy the hat and not show up." }
        ] }
      ] },
      { n: "She understood something later, lying in bed, with the headphones on the desk in their box: that she couldn't decide if the doorway had been an accident, and that he couldn't either, and that the not deciding was its own kind of answer." }
    ] },

    { after: '12/29', title: "7: meaning isn't the problem", place: 'Port Island Station · Central Concourse', time: 'Evening', music: 'night', scene: [
      { n: "The station between Christmas and New Year was nearly empty, the shops half shuttered, the bakery by the east gate closed with a handwritten sign in the window, a single cleaner pushing a wide mop across the concourse in slow overlapping arcs, and the piano with the seagulls had a plastic cover over it that somebody had forgotten to take off." },
      { n: "Mark was sitting on the bench beside it anyway, with his elbows on his knees and the cover still on, not playing." },
      { s: 'mark', f: 'neutral', t: "They'll let me take the cover off if I ask. I didn't want to ask. I wanted to sit here and not play for once. See what that's like." },
      { s: 'mark', f: 'sad', t: "It's bad. It's really bad. I don't recommend it." },
      { choose: [
        { t: "(Sit down next to him and not play either.)", notes: 3, then: [
          { n: "She sat. She put her hands in her lap, where his were, and the two of them looked at the plastic cover together like it was a television with nothing on, and after a minute he laughed, quietly, at the two of them." },
          { s: 'mark', f: 'neutral', t: "...Okay. It's less bad with two. It's still bad." }
        ] },
        { t: "What's it like?", notes: 2, then: [
          { s: 'mark', f: 'serious', t: "Loud. That's the thing nobody tells you. You stop playing and it's not quiet, it's the opposite. Everything you didn't say all week shows up at once and wants a seat." }
        ] },
        { t: "You could just ask them.", notes: 2, then: [
          { s: 'mark', f: 'neutral', t: "I could. I'm not going to. I'm doing a thing, Sol. Let me do my thing." }
        ] }
      ] },
      { n: "The cleaner went by. The departure board clicked over to a train neither of them was taking." },
      { ifFlag: 'mark-ask-hyuck', then: [
        { s: 'mark', f: 'neutral', t: "Oh. Also. You told me to ask him myself. Hyuck. At the mall." },
        { s: 'mark', f: 'neutral', t: "I didn't ask him anything. But I said hey. On your front steps. Tuesday. I was dropping off a cable for Fuuka, he was coming in." },
        { s: 'mark', f: 'serious', t: "He said hey back. That's it. That's the whole story. That's the most words we've had in— that's a lot of words, for us." },
        { s: 'mark', f: 'flustered', t: "Don't make it a thing. I can see you making it a thing." },
        { n: "She didn't make it a thing. She sat with it, the two of them on the steps of a house one of them lived in now and the other only visited, one going in and one going away, one word each, and thought that it was the saddest thing she'd heard all week, and that he'd told it to her like good news." }
      ] },
      { s: 'mark', f: 'serious', t: "Can I tell you something? And you won't get weird?" },
      { s: 'mark', f: 'neutral', t: "People think I don't mean things. At home. They think I'm a guy who says the nice thing because it's the nice thing to say. I'm very good at the nice thing." },
      { s: 'mark', f: 'serious', t: "But meaning it isn't the problem. I always mean it. Every time. I meant the headphones. I meant the song. I meant every drink." },
      { s: 'mark', f: 'sad', t: "The problem's that I mean other stuff at the same time. And I can't. Get them apart. I've never been able to. It's all just in there together." },
      { n: "He said it to his hands. He said it the way you'd say something you'd been rehearsing in the dark for a long time and had never once planned to say out loud, and when it was out he looked startled at himself, and then frightened, and then, almost immediately, he laughed." },
      { s: 'mark', f: 'flustered', t: "That's so deep. That's way too deep for a train station. Forget I said it. It's the holidays. Everybody gets weird." },
      { choose: [
        { t: "I don't think I can forget it.", notes: 3, then: [
          { s: 'mark', f: 'neutral', t: "...No. You never could. That's the thing about you." },
          { s: 'mark', f: 'serious', t: "You don't forget anything. Except, apparently, me. Which is honestly kind of a relief." },
          { n: "He meant that too. She could tell. It was the strangest thing anyone had said to her all year." }
        ] },
        { t: "Everyone means more than one thing.", notes: 3, then: [
          { s: 'mark', f: 'surprised', t: "..." },
          { s: 'mark', f: 'neutral', t: "Yeah? You think?" },
          { s: 'mark', f: 'neutral', t: "...Okay. That helps. That actually helps. Most people just pick one. They pick which one I meant. Usually the bad one." }
        ] },
        { t: "(Take the cover off the piano.)", notes: 3, flag: { 'mark-cover': true }, then: [
          { n: "She stood and pulled the plastic cover off the piano and folded it, and put it on the bench, and sat back down. He looked at the uncovered keys for a long time." },
          { s: 'mark', f: 'neutral', t: "...You didn't ask." },
          { s: 'solar', f: 'neutral', t: "Nobody was grading you." },
          { n: "He played. Badly, at first, out of tune with himself. Then not. The cleaner stopped mopping to listen, leaning on the handle, and at the end she clapped, once, and went back to it." }
        ] },
        { t: "Which one did you mean when you met me?", notes: 2, then: [
          { s: 'mark', f: 'sad', t: "..." },
          { s: 'mark', f: 'serious', t: "Both. I told you. That's the problem. That's the exact problem." },
          { s: 'mark', f: 'neutral', t: "...Ask me something easier. Ask me my favorite chord. I have a great answer for that one." }
        ] }
      ] },
      { n: "The last train to Iwatodai was announced in a tired recorded voice. He walked her to the gate with his hands in his sweatshirt, and at the gate he said, very quickly, looking at the ticket machine instead of her, *thanks for not getting weird,* and went back to the bench before she could answer." },
      { phone: [
        { from: 'mark', t: "ok i got weird. after. on the bench. for like an hour" },
        { from: 'mark', t: "the cleaner gave me a mandarin" },
        { from: 'mark', t: "her names mrs hamada. different mrs hamada. there are two mrs hamadas at this station. i need u to know that" }
      ], contact: 'markylee' }
    ] },

    { after: '1/7', title: '8: marky', place: 'Port Island · Back Streets', time: 'Evening', scene: [
      { ifFlag: 'route-R', then: [{ flag: { 'mark-home': true, 'mark-away': false } }], else: [
        { ifFlag: 'route-true', then: [{ flag: { 'mark-home': true, 'mark-away': false } }], else: [{ flag: { 'mark-home': false, 'mark-away': true } }] }
      ] },
      { n: "He walked her home again. It had become a thing they did without either of them deciding it, a look at the station exit and a shrug and the two of them falling into step through the cold back streets toward the bay, the windows of the little houses still hung with New Year's pine." },
      { s: 'mark', f: 'neutral', t: "Bodyguard Mark Lee, reporting for—" },
      { ifFlag: 'mark-bodyguard', then: [
        { s: 'solar', f: 'neutral', t: "Ugh." },
        { s: 'mark', f: 'neutral', t: "Wow. You didn't even let me finish. You never let me finish. That's how I know it's you." }
      ], else: [
        { n: "He waited a beat at the end of it, a gap, the way you'd leave a gap for a second voice, and when nothing came he laughed and filled it himself." },
        { s: 'mark', f: 'neutral', t: "—duty. Duty. You used to say the ugh part. It's fine. I'll do both parts." }
      ] },
      { s: 'mark', f: 'neutral', t: "So. March. Everyone's talking about it. Mitsuru says *the sixth* the way my professors say *the final.*" },
      { s: 'mark', f: 'neutral', t: "Are you coming home? To ours, I mean. You don't have to tell me. I'm just— I'm asking. Everyone's asking. I'm one more person asking." },
      { n: "She knew the answer. She'd known it since the longest night of the year, since a station clock with no hands. It sat in her chest, decided, and the deciding didn't make it any easier to say out loud on a dark street to a boy with his hands in his pockets." },
      { choose: [
        { t: "I'm coming home.", ifFlag: 'mark-home', notes: 3, then: [
          { s: 'mark', f: 'surprised', t: "..." },
          { s: 'mark', f: 'neutral', t: "Yeah? Yeah. Okay. Oh, man. Okay." },
          { n: "He stopped on the pavement. He looked up at the sky over the bay, which had nothing in it, and laughed, the real one, the one that came out of him like something let off a leash, and then he looked at her and the other thing was there too, already, small and quick behind his eyes, a door at home that might open." },
          { s: 'mark', f: 'neutral', t: "Hanni's going to cry. Hanni's going to cry so much. I'm going to cry a little. Not in front of you." }
        ] },
        { t: "I'm not coming back, Marky.", ifFlag: 'mark-away', notes: 3, then: [
          { s: 'mark', f: 'sad', t: "..." },
          { s: 'mark', f: 'neutral', t: "Oh." },
          { s: 'mark', f: 'neutral', t: "Okay. No. Okay. That's yours. That's your call. I'm not going to— where? Can I ask where?" },
          { s: 'solar', f: 'neutral', t: "Somewhere you can't follow." },
          { n: "He nodded. He kept nodding a beat too long, the way you keep clapping after everyone else has stopped. She watched the warm boy take it, and she watched the other one take it too, the one who'd been counting, and she watched them both arrive at the same number and not know what to do with it." }
        ] },
        { t: "Do you want me to?", notes: 3, then: [
          { s: 'mark', f: 'neutral', t: "Yeah. Obviously. Yeah." },
          { s: 'mark', f: 'neutral', t: "I like you, Sol. You know that. I've liked you since the tour. You were so rude about the tour." }
        ] },
        { t: "(Don't answer. Keep walking.)", notes: 2, then: [
          { n: "She kept walking. He kept pace. After half a block he said *cool, cool,* to nobody, softly, and she thought he'd probably taken the not-answering and counted it as something, and she couldn't have said as what." }
        ] }
      ] },
      { s: 'mark', f: 'neutral', t: "And, you know, at home, there's always something coming up with your family. Some big dinner. Press, all those people, you're always so stressed about them, you'd need someone there who isn't— I could go. I could be your plus one. Bodyguard Mark Lee, black tie edition. I'd meet everybody. I'd behave. I'd—" },
      { n: "He stopped. Mid-word. He heard where the sentence had gone, the same way she'd watched him hear it on the fountain's edge and at the station piano, and his hand went to the back of his neck and stayed there, and he laughed, and it was the loud one, the overplayed one, too early and too bright." },
      { s: 'mark', f: 'flustered', t: "That's— forget the dinner. I don't know why I said the dinner. I don't even own a tie. I'd have to borrow one from Jaemin and he'd make me pay rent on it." },
      { choose: [
        { t: "Mark.", notes: 3, flag: { 'mark-trouble': true }, then: [
          { n: "She said it flat. Not Marky. Mark. And she watched it land, watched him straighten like a boy whose teacher had said his full name across a classroom." },
          { s: 'mark', f: 'surprised', t: "...Am I in trouble?" },
          { s: 'solar', f: 'neutral', t: "I don't know yet." },
          { s: 'mark', f: 'sad', t: "...Yeah. That's fair. That's the most fair thing you've said to me." }
        ] },
        { t: "Marky.", notes: 3, flag: { 'mark-handed-back': true }, then: [
          { n: "She said it lightly. Handing it back. And she watched him take it, gratefully, like a man who'd been let off a fine, and also watched him notice that it had been handed back, which wasn't the same as never being taken away." },
          { s: 'mark', f: 'neutral', t: "...Yeah. Okay. Thanks, Sol." }
        ] }
      ] },
      { ifFlag: 'mark-marky', then: [
        { n: "She'd called him Marky the second night, at the piano, before she'd known why it was his. She thought about that now, walking. Her mouth had known the name before the rest of her had any idea who it was for, or what it cost to keep." }
      ] },
      { place: 'Iwatodai Dorm · Front', time: 'Night', soft: true },
      { n: "At the dorm steps he stopped, like he always stopped, at the bottom, and didn't come up. He looked up at the building's lit windows, at the lounge, at the shape of somebody in a black hoodie on the roof railing far above, and looked away again, quick." },
      { ifMet: ['jaehyun'], then: [
        { n: "The front door opened before she reached it. Jaehyun came down two steps and stopped on the third, in a quarter-zip with his hands in the front pocket, and looked at Mark the way he looked at everything, already finished thinking about it." },
        { s: 'jaehyun', f: 'neutral', t: "Mark." },
        { s: 'mark', f: 'flustered', t: "Jaehyun. Hey, man. Hey. I was just— she's home. Bodyguard Mark Lee. You know." },
        { s: 'jaehyun', f: 'serious', t: "I know." },
        { n: "Two words, and there was a whole room in them, and Mark stood at the bottom of the steps like a boy outside an office with the door shut. He'd stopped, she noticed, a full step before the first stair, the way you stop at a crosswalk you know too well." },
        { s: 'jaehyun', f: 'neutral', t: "I've got her from here." },
        { n: "It wasn't a question. Nothing Jaehyun said ever was. And Mark, warm, easy, quick Mark, who had an answer for everything, nodded, and said goodnight to her in his normal voice, and went, and she watched him go down the street toward the station with his hands in his sweatshirt and his shoulders up around his ears." },
        { n: "Something in her went hot and flat at once, a feeling with no memory attached to it, only the shape of one. A man deciding, on her behalf, where a conversation ended." },
        { choose: [
          { t: "You don't get to send my friends home.", notes: 3, flag: { 'mark-stood-up': true }, then: [
            { s: 'jaehyun', f: 'serious', t: "He's not—" },
            { n: "He stopped himself. She watched him stop himself, which was its own small event, his jaw doing something, his eyes going down the street after Mark and coming back." },
            { s: 'jaehyun', f: 'neutral', t: "...Fine. You're right. I don't." },
            { n: "He said it like it cost him. He didn't move off the step, either." }
          ] },
          { t: "What did he do?", notes: 3, then: [
            { s: 'jaehyun', f: 'neutral', t: "Ask him." },
            { s: 'jaehyun', f: 'serious', t: "He'll tell you some of it. He's good at some of it." },
            { n: "Then he held the door for her, and she went in under his arm, and the hot flat feeling went in with her and sat on the end of her bed all night like a cat that wasn't hers." }
          ] },
          { t: "(Go in past him without a word.)", notes: 2, then: [
            { n: "She went up the steps and past him and in, and didn't look at him, and heard him stand there on the third step for a long time after the door shut, alone, in the cold, reading the street." }
          ] }
        ] },
        { phone: [
          { from: 'mark', t: "u in?" },
          { from: 'mark', t: "sry about ur brother. hes right to be like that" },
          { from: 'mark', t: "its not on u. none of it" }
        ], contact: 'markylee' }
      ], else: [
        { s: 'mark', f: 'neutral', t: "Text me when you're in. I know you're literally right there. Text me anyway." },
        { choose: [
          { t: "(Text him from the top step.)", notes: 3, then: [
            { phone: [
              { from: 'solar', t: "in" },
              { from: 'mark', t: "word :)" }
            ], contact: 'markylee' },
            { n: "He was still at the bottom of the steps when it arrived, close enough that she heard his phone go, and he laughed at it out loud, and waved without looking up, and went." }
          ] },
          { t: "(Wave from the door.)", notes: 2, then: [
            { n: "She waved. He waved back with his whole arm, like someone on a pier, and kept waving until the door was shut, she could tell, because his shadow was still going on the frosted glass." }
          ] }
        ] }
      ] }
    ] },

    { after: '1/15', title: '9: credited', place: 'Port Island Station · Central Concourse', time: 'Evening', music: 'tender', scene: [
      { ifFlag: 'mark-trouble', then: [
        { n: "He was waiting by the piano, standing, not sitting, and when he saw her he put both hands in his sweatshirt pocket in a way that was very clearly to stop them doing anything else." },
        { s: 'mark', f: 'flustered', t: "Hi. Okay. Before anything. Am I still in trouble? You said you didn't know yet. I've been not knowing since then. It's been a really long time." },
        { s: 'solar', f: 'neutral', t: "I'll let you know." },
        { s: 'mark', f: 'neutral', t: "...Okay. Okay, that's fair. That's so fair. I'm going to play you something anyway." }
      ] },
      { n: "He'd finished it. He told her before she'd sat down, standing up from the bench with his hands out like a man about to catch something, and the concourse was full of the six o'clock crowd and he didn't care, he sat back down and played it for her start to finish, right there, on the piano with the seagulls." },
      { n: "It was beautiful. She hadn't expected it to be beautiful. She'd expected it to be good, because he was good, because everyone said so. She hadn't expected it to sound like someone telling the truth very carefully for four minutes." },
      { n: "Her five notes were in it. Not hidden. Right at the front, the opening, the line the whole thing climbed out of. And in the middle, the crossing, the two stations and the water between them, with the line over it left open for a voice." },
      { ifFlag: 'mark-crossing', then: [
        { s: 'mark', f: 'neutral', t: "The line over the crossing, that's you too. You hummed it on the bench. I went back to the guesthouse and built the whole bridge off what you did. I didn't change a note." }
      ] },
      { s: 'mark', f: 'neutral', t: "Your notes are the hook. I built the whole thing off them. They're credited. Obviously. On everything. Your name." },
      { s: 'mark', f: 'serious', t: "I'd never put my name on something that was yours. I want you to know that. I want you to know I know that matters." },
      { n: "He said it with a strange, careful weight, like a man laying down a stone on purpose where someone else had once tripped, and she didn't know why it mattered so much to him that she hear it. She heard it. She put it away somewhere." },
      { choose: [
        { t: "Why does that matter so much to you?", notes: 3, then: [
          { s: 'mark', f: 'serious', t: "Because it does. Because it should. That's the whole answer, Sol. That's all of the answer there is." },
          { n: "He looked at the keys when he said it, not at her, and she had the feeling of a door being held shut from the other side, politely, by someone who very much wanted her to think it was a wall." }
        ] },
        { t: "(Nod. Let him have said it.)", notes: 3, then: [
          { n: "She nodded. He let out a breath she hadn't seen him take, and nodded back, once, like two people agreeing on a price." }
        ] },
        { t: "I know you wouldn't.", notes: 2, then: [
          { s: 'mark', f: 'sad', t: "..." },
          { s: 'mark', f: 'neutral', t: "...Yeah. Thanks. I'm going to hold onto that one." }
        ] }
      ] },
      { ifFlag: 'mark-headphones', then: [
        { s: 'mark', f: 'neutral', t: "You put the headphones on. In front of everybody. When I gave them to you. I think about that a lot. You just put them on." }
      ], else: [
        { ifFlag: 'mark-too-much', then: [
          { s: 'mark', f: 'neutral', t: "You said the headphones were too much. You were right. They were too much. I wanted them to be too much. I'm working on that." }
        ] }
      ] },
      { s: 'mark', f: 'neutral', t: "Would you sing it? Over the crossing. Not here. At home. For real. In a studio. I know people— I could—" },
      { s: 'mark', f: 'flustered', t: "...You don't have to. You don't have to decide now. You don't have to decide ever. I'm just asking." },
      { choose: [
        { t: "Not yet.", notes: 3, flag: { 'mark-not-yet': true }, then: [
          { s: 'mark', f: 'neutral', t: "Not yet. Okay. Not yet's not no." },
          { s: 'mark', f: 'neutral', t: "...I'll wait. I'm actually pretty good at waiting. I've been waiting on this song since the first night." }
        ] },
        { t: "(Sing over the crossing. Here. Now.)", notes: 3, flag: { 'mark-sang': true }, stat: { courage: 2 }, then: [
          { n: "She sang it. Here, now, in Port Island Station at six in the evening with a hundred strangers going home around them, not loud, not hidden. Eight bars. Her voice found the line under his chords like it had always known where it went, and Mark played under her with his eyes shut and didn't look at her once, which she understood was the only way he could get through it." },
          { n: "When it was over a woman in a raincoat clapped, and then three more people, and Mark opened his eyes and looked at the keys and laughed, wet, surprised, and rubbed his face with both hands." },
          { s: 'mark', f: 'sad', t: "...Yeah. That's what it's for. That's what it was always for." }
        ] },
        { t: "Ask me again when I remember you.", notes: 3, flag: { 'mark-ask-again': true }, then: [
          { s: 'mark', f: 'surprised', t: "..." },
          { s: 'mark', f: 'neutral', t: "...That's smart. That's really smart, Sol. You should know who you're saying yes to." },
          { s: 'mark', f: 'sad', t: "I'd want that too. If I were you." }
        ] }
      ] },
      { n: "He played it one more time after that, quieter, for nobody, with nobody singing over the crossing, and she sat beside him and listened to the empty part, which was, she thought, the part he'd written most carefully of all." },
      { phone: [
        { from: 'mark', t: "i put ur name first" },
        { from: 'mark', t: "on the file. on the sheet music. on everything" },
        { from: 'mark', t: "just so its written down somewhere. by me" }
      ], contact: 'markylee' }
    ] },

    { after: '1/18', title: '10: both', place: 'Port Island Station · Central Concourse', time: 'Evening', music: 'mystery', scene: [
      { ifFlag: 'route-R', then: [{ flag: { 'mark-home': true, 'mark-away': false } }], else: [
        { ifFlag: 'route-true', then: [{ flag: { 'mark-home': true, 'mark-away': false } }], else: [{ flag: { 'mark-home': false, 'mark-away': true } }] }
      ] },
      { n: "The end of the month was coming. Everyone in the dorm was counting, and everyone at the guesthouse, and she suspected Mark had been counting longer than anyone. The station was the same station, the same river of umbrellas, the same last sweet bread from the bakery by the east gate, the same piano with its fat grinning seagulls, and Mark was on the bench playing the four notes, over and over, and stopping on the chord, the way he had the very first night, like a man getting all the way to his front door and patting his pockets for keys." },
      { n: "She hummed the fifth from across the concourse before she reached him. She didn't decide to. It came out of her the way it always had." },
      { n: "And then she remembered him." },
      { n: "A first day. A campus in late summer, heat coming up off the paths and everyone staring, and her under a tree on the grass with a pair of shoes she hated in one hand. A boy who'd stopped in front of her with his hands up, sorry to bother you, and sat down in the grass across from her, and asked if she was famous or something, like he didn't know, and she'd let him not know. A building with a room for everything, and her hands flat on the cold glass of a gaming lab like she could reach through it. *Do I need to tell you my name, or have you already heard?* And him, scratching the back of his head. *Well, yeah, I heard. But it'd still be nice.* And then, *like the solar system?*" },
      { n: "A boy who walked her home. Who texted *u get back ok?* Who meant it. Who was also, somewhere behind his eyes, always, doing a sum." },
      { s: 'solar', f: 'neutral', t: "...You knew who I was. On the first day. Before I said a word." },
      { n: "His hands came off the keys." },
      { s: 'mark', f: 'surprised', t: "..." },
      { s: 'mark', f: 'neutral', t: "...Yeah. I did. Everybody did. You're Jaehyun's sister. You're your dad's daughter. You were all over everybody's phone before you'd unpacked." },
      { s: 'mark', f: 'serious', t: "But I'd have walked up to you anyway. I want you to know that. Even if you'd been nobody. I've thought about it a lot. I think I would have. I think I'd have liked you anyway." },
      { s: 'mark', f: 'sad', t: "I don't know for sure. That's the honest answer. I'll never know for sure. That's what I'm stuck with." },
      { choose: [
        { t: "I think you would have.", notes: 3, then: [
          { s: 'mark', f: 'surprised', t: "..." },
          { s: 'mark', f: 'neutral', t: "...Don't. Don't be nice about it. You're never nice about it. That's how I know when you mean something." },
          { s: 'mark', f: 'sad', t: "...Okay. Thank you. I'm going to pretend you didn't say it and keep it anyway." }
        ] },
        { t: "Neither of us will. That's fair.", notes: 3, then: [
          { s: 'mark', f: 'neutral', t: "That's fair. Yeah. You keep saying that to me. I keep deserving it." }
        ] },
        { t: "(Say nothing. Let him sit with it.)", notes: 2, then: [
          { n: "She said nothing. He sat with it. The station went on around them, the river of umbrellas, the bakery's shutter coming down, and for once he didn't fill the silence, which she thought might have been the hardest thing she'd ever watched him do." }
        ] }
      ] },
      { ifFlag: 'mark-who', then: [
        { s: 'mark', f: 'serious', t: "You asked me who I'd play it for. On the bench, with the stopwatch. I gave you the small answer." },
        { s: 'mark', f: 'sad', t: "It wasn't that small. I'm sorry about the small answer." }
      ] },
      { n: "She stood in front of the piano and looked at him. At the warm open face that wanted so badly to be liked, and was, and at the thing behind it that never stopped counting, and was there too. Both of them. Real. She'd known it on the first night in this station, with a can of milk tea going cold in her hands, before she'd known his name. She knew it now with his whole name, with everything, and it didn't make either of them less true." },
      { ifFlag: 'mark-pencil', then: [
        { n: "She had something in her coat pocket. She'd had it since that afternoon at the mall. She took it out and held it out to him, a pencil with teeth marks on the end and MARK down the side in tiny capitals." },
        { s: 'mark', f: 'surprised', t: "...Oh my God. You kept it. I looked everywhere for that. I thought someone took it." },
        { s: 'solar', f: 'neutral', t: "Nobody took it. I kept it for you." },
        { n: "He turned it over in his fingers, slowly, like it was something much heavier than a pencil, and put it behind his ear, where it had been the day he'd lost it." }
      ] },
      { choose: [
        { t: "Bye, Marky.", notes: 3, then: [
          { s: 'mark', f: 'surprised', t: "..." },
          { s: 'mark', f: 'neutral', t: "...You even say it like you." },
          { ifFlag: 'mark-home', then: [
            { s: 'mark', f: 'neutral', t: "Not bye, though. See you. See you at home. I'll be the guy by the tree. You'll be the girl with the shoes." }
          ], else: [
            { s: 'mark', f: 'sad', t: "Bye, Sol. Take care of yourself, okay? Text me when you get back. Wherever back is." }
          ] }
        ] },
        { t: "Thank you, Mark. For the song.", notes: 3, then: [
          { s: 'mark', f: 'neutral', t: "...Mark. Okay. Okay." },
          { ifFlag: 'mark-home', then: [
            { s: 'mark', f: 'neutral', t: "That's fair. That's the right one. I'll earn the other one back. At home. If you'll let me." }
          ], else: [
            { s: 'mark', f: 'sad', t: "That's fair. That's the right one. I'd have earned the other one back. If there'd been time. I'd have tried really hard." }
          ] }
        ] },
        { t: "(Sit down and play the four notes with him.)", notes: 3, then: [
          { n: "She sat down beside him on the bench and put her hands on the keys and played the four notes, badly, and he played the fifth, and then the chord, and it opened, and they played the whole thing through together, the way they'd never once done at home, and at the end he didn't look at her like a sum. He just looked at her." },
          { s: 'mark', f: 'neutral', t: "...Yeah. Okay. Yeah." }
        ] },
        { t: "Ask me again. The crossing.", ifFlag: 'mark-ask-again', notes: 3, then: [
          { s: 'mark', f: 'surprised', t: "..." },
          { s: 'mark', f: 'neutral', t: "...You remember me now. Okay. So I'm asking. Would you sing it?" },
          { ifFlag: 'mark-home', then: [
            { s: 'solar', f: 'neutral', t: "At home. In a studio. With the door open, and my name on it where I can see it." },
            { s: 'mark', f: 'serious', t: "Door open. Your name where you can see it. Okay. Yeah. Those are the right terms. Those are exactly the right terms." },
            { n: "He said it like he was writing it down. She thought he probably was, somewhere behind his eyes, in neat capitals, and for once she thought that might be a good thing." }
          ], else: [
            { s: 'solar', f: 'neutral', t: "I can't sing it where I'm going, Marky." },
            { s: 'mark', f: 'sad', t: "...Yeah. No. I figured. I think I figured." },
            { s: 'solar', f: 'neutral', t: "Leave it empty. Don't give it to anyone else." },
            { s: 'mark', f: 'serious', t: "...Okay. I won't. It'll just be the train. Eight bars of the train going over the water, every time, and nobody on it. People are going to think I forgot something." },
            { n: "He laughed, and it broke in the middle, and he let it." }
          ] }
        ] }
      ] },
      { n: "The chime went for the last train to Iwatodai. He looked up at the board like a teacher had caught him passing notes, and went to the vending machine by the pillar, and came back, and pressed a can into her hands before she'd said whether she wanted one." },
      { n: "Sweet. Hot. Exactly right. He'd asked, once, a long time ago, in another kitchen, what she liked. He'd remembered. Both of those things were true, and she held the can the whole way home, and it stayed warm." },
      { phone: [
        { from: 'mark', t: "u get back ok?" }
      ], contact: 'markylee' },
      { n: "She looked at it for a long time. Then she typed *i got back,* the way she must have a hundred times, and this time she knew exactly whose sentence it was." }
    ] }
  ],

  afterMax: [
    { title: 'request', place: 'Port Island Station · Central Concourse', time: 'Evening', scene: [
      { n: "The seagull piano. A small crowd now, some evenings. Mrs. Hamada from the bakery with her arms folded at the back, pretending to wait for a train. A boy in a navy sweatshirt playing whatever people asked for, and faking it, cheerfully, when he didn't know it." },
      { s: 'mark', f: 'neutral', t: "Okay, requests. Sol. You get one. Anything. I'll fake it if I don't know it." },
      { choose: [
        { t: "Something nobody's grading.", notes: 3, then: [
          { s: 'mark', f: 'surprised', t: "...Okay. Okay, that's a request." },
          { n: "He played something he made up on the spot, bad and bright and joyful, and got three bars in before he started laughing and couldn't stop, and played it anyway." }
        ] },
        { t: "The four notes.", notes: 3, then: [
          { s: 'mark', f: 'neutral', t: "Always. You know your cue." },
          { n: "He played them. She hummed the fifth. A little girl in a yellow raincoat at the front of the crowd hummed it with her, a beat late and completely sure of herself, and Mark looked at the two of them and played the chord so loud the seagulls practically lifted off the wood." }
        ] },
        { t: "The dish soap song.", notes: 2, then: [
          { s: 'mark', f: 'neutral', t: "Oh, you want the concerto. Okay. Okay. Everybody stand back." },
          { n: "He played it like Chopin again, eyes shut, leaning. Mrs. Hamada at the back did not laugh. Her shoulders did, a little." }
        ] }
      ] }
    ] },
    { title: 'text me when you get back', place: 'Port Island · Back Streets', time: 'Evening', scene: [
      { n: "The walk home. The back streets, the convenience store glowing on its corner, the cat on the wall who had forgiven nobody. His shoulder a careful distance from hers, closer than it used to be, not as close as it wanted to be." },
      { s: 'mark', f: 'neutral', t: "Bodyguard Mark Lee, reporting for—" },
      { choose: [
        { t: "Ugh. Here comes bodyguard Mark Lee.", notes: 3, then: [
          { s: 'mark', f: 'neutral', t: "You got there first. You always get there first." }
        ] },
        { t: "You don't have to walk me.", notes: 3, then: [
          { s: 'mark', f: 'neutral', t: "I know." },
          { s: 'mark', f: 'sad', t: "...I like it, though. It's the one thing I do with you where I'm not thinking about anything else. Just the walk." }
        ] },
        { t: "How many steps is it? You've counted.", notes: 2, then: [
          { s: 'mark', f: 'flustered', t: "I have not—" },
          { s: 'mark', f: 'neutral', t: "Nine hundred and something. It changes. It depends if you're mad at me. You walk faster when you're mad at me." }
        ] }
      ] },
      { n: "At the corner the cat watched them go by with the expression of someone who'd seen this exact walk a dozen times and had opinions about every one of them." }
    ] },
    { title: 'out loud', place: 'Paulownia Mall · Karaoke', time: 'Evening', music: 'joy', scene: [
      { n: "Somebody had booked a karaoke room, and somebody had told somebody, and by the time Solar arrived there were too many people in a room built for four, and a tambourine with half its jingles missing, and Mark in the corner by the machine flipping through the song book with the concentration of a man defusing something." },
      { ifMet: ['hyein'], then: [
        { s: 'hyein', f: 'happy', t: "SOL. Finally. He won't go first. He's a music major and he won't go first. That's like a chef who won't eat." },
        { s: 'mark', f: 'flustered', t: "That's not the same. That's not at all the same. Chefs have to eat." }
      ], else: [
        { s: 'mark', f: 'flustered', t: "Hi. Okay. Nobody will go first and everyone keeps looking at me because I'm the music guy. Being the music guy is a burden, Sol." }
      ] },
      { choose: [
        { t: "(Take the mic and go first.)", needs: { courage: 3 }, notes: 3, then: [
          { n: "She took the mic out of the cradle and pressed a number at random and it was a love song, of course it was, an old one, everybody's, and she sang it straight down the middle with her eyes on the lyrics and her voice low and a little tired, the way it always came out." },
          { n: "Halfway through the second verse she looked up. Mark wasn't watching her like a sum. He was sitting very still on the vinyl bench with the song book open on his knees and his mouth a little open, the way you'd look at someone who'd walked into the room and turned out to be a song you knew." },
          { s: 'mark', f: 'sad', t: "...You went first. You never went first." }
        ] },
        { t: "Duet. You and me.", notes: 3, then: [
          { s: 'mark', f: 'surprised', t: "With you? Like, on purpose?" },
          { n: "He picked a terrible one, a cheerful pop song with a key change he hit like a man jumping a fence, and she took the low part without being asked, and somewhere behind them the tambourine came in on the wrong beat and stayed there, proudly, for the entire song." }
        ] },
        { t: "(Hand him the mic.)", notes: 2, then: [
          { s: 'mark', f: 'neutral', t: "Oh, that's cruel. That's so cruel. Okay. Okay." },
          { n: "He sang well, of course. He sang the way he played, warm and easy and a little performed, and every few lines he looked over to see if she was listening, and she was, and he relaxed by about one degree each time." }
        ] }
      ] }
    ] },
    { title: 'credits', place: 'Port Island Station · Central Concourse', time: 'Evening', scene: [
      { ifFlag: 'route-R', then: [{ flag: { 'mark-home': true, 'mark-away': false } }], else: [
        { ifFlag: 'route-true', then: [{ flag: { 'mark-home': true, 'mark-away': false } }], else: [{ flag: { 'mark-home': false, 'mark-away': true } }] }
      ] },
      { n: "He'd written it out on a napkin from the bakery, because that was what he'd had, in his neat capitals, lined up the way the back of an album lines up. The name of the song, which he hadn't decided on and had written three of and crossed two out. And under it, the credits." },
      { n: "Her name was first. Above his. He'd gone over it twice, the way you go over a line you want to be sure of." },
      { s: 'mark', f: 'neutral', t: "That's how it goes on the real thing. I wanted you to see it before it's real. So you know it was always going to be that way. So it's not a thing I decided later." },
      { ifFlag: 'mark-home', then: [
        { choose: [
          { t: "Put the date on it.", notes: 3, then: [
            { s: 'mark', f: 'surprised', t: "The date?" },
            { s: 'solar', f: 'neutral', t: "So there's a record. Of when you wrote it down." },
            { n: "He looked at her, and then he laughed, small and honest, and wrote it in the corner. The date in this world, a year that hadn't happened yet anywhere else. He signed it, too, and pushed it across the bench to her, and she folded it into her wallet." }
          ] },
          { t: "(Fold it up and give it back to him.)", notes: 2, then: [
            { s: 'mark', f: 'neutral', t: "No, keep it. I'll make another one. I'll make a hundred. I'm going to put your name first on everything for the rest of my life just to be annoying about it." }
          ] }
        ] }
      ], else: [
        { choose: [
          { t: "Keep it. For when I'm gone.", notes: 3, then: [
            { s: 'mark', f: 'sad', t: "..." },
            { s: 'mark', f: 'neutral', t: "Yeah. Okay. I'll put it in the case with the sheet music. Everyone who ever plays it will open the case and the first thing they'll see is your name on a napkin." },
            { s: 'mark', f: 'serious', t: "Nobody's going to know who you are. They're going to have to ask. I'll tell them. Every time. I'm going to be so annoying about it." }
          ] },
          { t: "(Fold it into your wallet anyway.)", notes: 3, then: [
            { n: "She folded it in four and put it in her wallet behind the dorm keycard. She didn't know if a napkin could come with her, where she was going. She thought it was worth finding out." },
            { s: 'mark', f: 'neutral', t: "...If it doesn't make it, I'll know. Somehow. I'll just know." }
          ] }
        ] }
      ] }
    ] },
    { title: 'like the solar system', place: 'Port Island · Pier', time: 'Evening', music: 'night', scene: [
      { n: "The pier at night, the bay black and slapping at the pilings, the lights of Iwatodai across the water strung out like somebody had dropped a necklace. They'd walked further than the station without either of them suggesting it. He was counting the lamps along the railing under his breath and stopped when he noticed she'd noticed." },
      { s: 'mark', f: 'neutral', t: "It's twenty-two. If you were wondering. Twenty-two lamps. One's out." },
      { choose: [
        { t: "Solar. Like the solar system?", notes: 3, then: [
          { s: 'mark', f: 'surprised', t: "..." },
          { s: 'mark', f: 'flustered', t: "Oh, no. No. You remember that? That was the worst thing I've ever said to a girl. I said it in front of a whole building." },
          { s: 'solar', f: 'neutral', t: "My parents aren't space nerds, Marky." },
          { s: 'mark', f: 'neutral', t: "I know. I know. You told me. You said you wished they were that cool." },
          { n: "He laughed into the dark over the water, the real one, and she laughed too, at a joke from another life, two worlds away, that had somehow survived the trip." }
        ] },
        { t: "Which one's out?", notes: 2, then: [
          { s: 'mark', f: 'neutral', t: "Fourteenth from the end. It flickers first. Then it gives up. I've watched it give up three nights running." },
          { s: 'mark', f: 'sad', t: "...I like that one best. Don't ask me why. Okay, ask me why. I don't know why." }
        ] },
        { t: "(Lean on the railing next to him and say nothing.)", notes: 3, then: [
          { n: "She leaned. He leaned. The water slapped at the pilings below them in a rhythm that was almost a rhythm and never quite settled, and she could feel him not counting it, on purpose, beside her, the way you'd feel someone hold their breath." }
        ] }
      ] }
    ] },
    { title: 'two mrs. hamadas', place: 'Port Island Station · Central Concourse', time: 'Evening', scene: [
      { n: "The cleaner had a request. She'd never had one before. She came over with her mop and leaned it on the side of the piano and said it to Solar, not to Mark, very politely, as though Mark were a jukebox and Solar were the one with the coins." },
      { ifFlag: 'mark-cover', then: [
        { n: "She wanted the song from December. The one from the night the cover came off. She'd been humming it, she said, and couldn't get the middle." }
      ], else: [
        { n: "She wanted the song he always played first. The four little notes. She'd been humming it on her rounds, she said, and couldn't get the middle." }
      ] },
      { s: 'mark', f: 'neutral', t: "The middle's the hard part. The middle's Sol's." },
      { ifFlag: 'mark-sang', then: [
        { n: "He didn't ask her. He'd stopped asking. He just played up to the crossing and left the line over it open, and looked at the keys, and waited, the way you'd hold a door." },
        { choose: [
          { t: "(Sing the crossing for her.)", notes: 3, then: [
            { n: "She sang it. Eight bars, low, for a small woman in a grey uniform leaning on a mop, in a station going home around them. Mrs. Hamada closed her eyes for the whole of it, and at the end she clapped once, the way she had in December, and bowed, and took her mop and went." },
            { s: 'mark', f: 'sad', t: "...She's going to hum your part now. All over the station. Every night. That's so— okay. I need a minute." }
          ] },
          { t: "(Hum it, soft, so she can learn it.)", notes: 3, then: [
            { n: "She hummed it slowly, twice, the way you'd teach a child a song, and Mrs. Hamada hummed it back the second time, a little off, and was delighted with herself." }
          ] }
        ] }
      ], else: [
        { choose: [
          { t: "(Hum the middle for her.)", notes: 3, then: [
            { n: "She hummed it, quietly, under his chords, and Mrs. Hamada nodded along with her eyes shut, and when it was done she patted Solar's arm twice, firmly, as if Solar had passed some kind of inspection." },
            { s: 'mark', f: 'neutral', t: "That's the most anyone's ever gotten out of Mrs. Hamada. You know that, right? The bread one doesn't even pat me." }
          ] },
          { t: "(Let Mark play it without the middle.)", notes: 2, then: [
            { n: "He played it with nobody over the crossing. Mrs. Hamada listened to the empty part with her head on one side, and at the end she said, very kindly, that it was a nice song, and that it was missing something, and that he'd find it." },
            { s: 'mark', f: 'sad', t: "...Yeah. I know where it is. It's sitting right here." }
          ] }
        ] }
      ] }
    ] }
  ]
});
