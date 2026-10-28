/* Jay (Park Jongseong) · Temperance (XIV). Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js,
   scene lines in scene.js. Searcher, friendship only (romance: null). Two-world character (Kat's ruling, 2026-10-27), like Jungwon:
   one person carrying two lives. "Jay" is what everyone calls him in both.
   HOAX (Ch 99): eighteen, Hanlim's football star, mutuals with the whole school, blunt ("bro", "dude", 💀 in chat; handles jbird /
   parkjay; the council chat in this game uses the IG set, so he's parkjay there, like Jungwon's rank 3). One thread held back:
   right before all this he told Jungwon something true about Solar; he'd do it again; he's a little sorry. Never said what
   (hinted r6 H, said that far and no further r10 H).
   strangers (pickup point, deep winter): twenty-four, the Yang house's cook. A plant, legitimate squid, goggles, clean work,
   "something nobody eats". The unlit cigarette behind his ear (quit four years ago; one with Jungwon since). A place at KAIST,
   once. A year of Seattle at fifteen. Never says what he cooks there. "The young master" for Jungwon; Haechan as the other
   house's man (r4 S, no relationship stated or implied).
   The one acknowledgment of his strangers hands: rank 5, once, at the cutting board (he opens and closes them, turns them over,
   says "Good knife"); nothing else in the link or the living file touches it.
   Kat's fun interaction: Jay in the dorm kitchen, which is still Shinjiro's (coma from 10/4): the good pot he never touches
   (r1, r4), the fridge note, the knife drawer (r1, afterMax 'the other drawer'), Koromaru across the doorway (r1, r9, hangout),
   Akihiko who can't watch the pot used (r4, r9). He learns Shinjiro through the food: the dish (rice, pork braised, ginger,
   spring onion: the shrine dish on Shinjiro's recipe card; the brief's "stew" is this braise) goes wrong (r6) and right (r9).
   Shinjiro speaks only in afterMax 'thermos' (flags shinji-awake): Tatsumi 3F, a thermos of the strained broth, two cooks, the
   salt. Shinjiro's own afterMax already has a thermos and "less salt", so this one turns it into a cooks' joke instead of
   repeating it.
   Two worlds by heading: ranks 3-10 each have ONE key passage branched S / H / R / true / else (stay, bad): lines only, never
   choices. Before the solstice heading() is only R / S / H, so the true / stay lines in ranks 3-6 are reachable only in an
   audit; they're written to read as leans. afterMax 'the list' branches by heading too.
   HOAX telling order: before a5-call-hoax nobody says Jungwon is her boyfriend here; the one mention (r6 H) is gated
   ifEvent a5-call-hoax. Nothing touches the sophomore-year secret, drugs, Danielle's video or Jihoon's relapse.
   Flags this link sets (all by choices in this file) and where they're read:
     jay-told-name   r1 she names Shinjiro; read r4.
     jay-steps       r5 she talks him through the dish; read r9.
     jay-truth       r6 she tells him it isn't the same; read r9.
     jay-cig         r7 she holds the cigarette; read r7 (end), afterMax 'one cigarette'.
     jay-met-shinji  afterMax 'thermos' (every option); read as noFlags there and flags on 'thermos, again' (later visits).
   Story flags / events read: ifRank shinjiro 9 (r5: the recipe card is in her pocket), ifRank jungwon 3 (r2: she's seen the
   folding phone), ifEvent a5-call-hoax (r6 H), shinji-awake (afterMax flags / noFlags), heading (r3-r10, afterMax 'the list').
   No scene reads more than three distinct ifFlag flags; two choose blocks per scene at most, three options each; each rank's
   best answers total 6 on every path.
   Faces: jay flustered/happy/neutral/sad/serious/surprised; shinjiro happy/neutral/sad/surprised; koromaru happy/neutral/sad/
   serious; ken happy/neutral/sad/serious; niki no flustered; sunghoon no happy; fuuka no serious; yukari no happy.
   Living world (afterRank 1-10, holidays 11/23 and 2/3, routines, run-ins): data/living-jay.js. He texts lowercase, no
   apostrophes, 💀; Solar texts lowercase.
   Housing: the Kirijo guesthouse by the station (FEMC_GAME_LODGING). The dorm kitchen is a visit: three evenings a week, by
   Mitsuru's arrangement (the guesthouse kitchen locks at nine), cooking for whoever's home and carrying the guesthouse's share
   back in containers; out by eight on school days (every dorm scene ends by 7:59). Searchers never close: afterMax plays in
   person to the end.
   Arcana Temperance (writer's pick, for Kat to confirm): the alchemist's card, measuring and mixing and patience; the cook.
   Writer inventions: the HANLIM letterman jacket; Mitsuru's three-nights arrangement and the containers labeled in capitals;
   the dented saucepan; the fishmonger at Port Island and his second box; the football team's end-of-season barbecue and the
   bad-squid bus; Sunoo's grandmother banning Jay from Yeobo's kitchen; "the madam's kitchen" at home (no detail beyond a
   room he doesn't cook in); the line the goggle strap leaves; the guesthouse desk lady and her key; the hot pot in the
   guesthouse lobby; PEOPLE I COOK FOR, the card he gives her at MAX; Let's Be canned coffee as "the right can". */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'jay', name: 'Park Jongseong', short: 'Jay', arcana: 'Temperance', numeral: 'XIV', from: 'Hoax · strangers',
  kind: 'searcher', world: 'HS', romance: null,
  starts: '11/8', gate: { H: 4, S: 3 }, storyEvents: ['a4-yeobos'],
  home: { area: 'dorm', spot: 'Kitchen', slot: 'evening', days: [0, 2, 6],
          hint: "Sunday, Tuesday and Saturday evenings in the dorm kitchen. The guesthouse kitchen locks at nine, so Jay cooks here for whoever's home, and he's gone by eight on school days." },
  approach: "In the dorm kitchen, a boy in a letterman jacket with a sharp jaw and an unlit cigarette tucked behind one ear stands in front of the hooks with his arms folded, looking at a pot he hasn't touched.",
  cast: { heeseung: 'Heeseung', jake: 'Jake', fishmonger: 'Fishmonger' },
  invite: {
    ask: [
      "dinner. dorm kitchen. 6. bring nothing",
      "making too much rice on purpose. come eat it",
      "need a taster. junpei says everything is good. useless",
      "fish market?? the squid guy likes u better than me 💀",
      "free? need someone to carry bags and look scary. u can do one of those",
      "jake wants to come. i said no. u can come",
      "come watch me cut 4kg of onions. its a show. bring tissues",
      "the desk lady gave me a cabbage the size of a dog. help",
      "u eat yet. dont lie",
      "ur dog wont move from the door. come sit with him so i feel less bad",
      "guesthouse lobby. hot pot. sunghoon is giving a speech about it already"
    ],
    ok: ["bet", "6. dont be late", "cool. wear something u dont care about", "good. bring an appetite thats it"],
    no: ["all good", "ur loss. its good tonight", "ok. saving u a plate", "💀 fine"]
  },
  hangouts: [
    [
      { n: "Tuesday in the dorm kitchen smelled of onions going soft in oil, and Jay stood at the stove with his sleeves pushed past the elbow and a dish towel over one shoulder, stirring with one hand and holding a conversation with the dog, who was not holding up his end." },
      { s: 'jay', f: 'neutral', t: "You're not getting any. It's got onion in it. Onion's bad for you. Ask anybody." },
      { n: "Koromaru lay across the doorway on his side with his chin on his paws, the way he'd lain there every evening since October, and didn't lift his head. His eyes went from the pan to the hall and back to the hall." },
      { s: 'jay', f: 'neutral', t: "He does this the whole time. Watches the door like it owes him money." },
      { choose: [
        { t: "(Sit on the floor next to Koromaru.)", notes: 3, stat: { kindness: 1 }, then: [
          { n: "She sat down on the cold tile beside him with her back against the doorframe. After a while Koromaru shifted, without looking at her, until his chin was on her shin instead of his paws. Jay looked down at the two of them and didn't say anything." },
          { n: "Ten minutes later a small dish appeared on the floor by the door. Plain rice, an egg stirred through it, no onion. A cup, measured, levelled flat." },
          { s: 'jay', f: 'neutral', t: "Not for you. For whoever's sitting there. He can share." }
        ] },
        { t: "He's waiting for someone.", notes: 2, then: [
          { s: 'jay', f: 'neutral', t: "Yeah. I figured." },
          { s: 'jay', f: 'sad', t: "I'm not him. I know. I'm just the guy with the pan." }
        ] },
        { t: "Can I stir?", notes: 2, then: [
          { s: 'jay', f: 'neutral', t: "You can stir. Not like that. Like you mean it, but not like you're mad at it." },
          { n: "She stirred like she meant it. He watched for a full minute with his arms folded, and then he nodded, once, and went back to cutting scallions, which she understood was the review." }
        ] }
      ] }
    ],
    [
      { place: 'Kirijo Guesthouse', time: 'Evening' },
      { n: "The guesthouse lobby at seven smelled of floor polish and somebody's instant noodles, and Jay was on the long sofa with his feet up on the low table and his phone face up on his chest, buzzing every few seconds like something trying to get out, which he ignored with the calm of a man who'd been in the same group chat for years." },
      { n: "He tilted the screen so she could read it, without being asked, which she was learning was how he shared things." },
      { phone: [
        { from: 'jake', t: "jakeyy: jay whats dinner sunday" },
        { from: 'jake', t: "jakeyy: jay" },
        { from: 'jake', t: "jakeyy: JAY" },
        { from: 'heeseung', t: "heeeseung: he can see it jake" },
        { from: 'jay', t: "parkjay: food 💀" },
        { from: 'niki', t: "rikiniki: hes so mysterious. a chef. a man of few words" }
      ], contact: 'jungwon is mean · 7:02 PM' },
      { choose: [
        { t: "Tell Jake what's for dinner.", notes: 2, then: [
          { s: 'jay', f: 'neutral', t: "If I tell him he'll tell the dog. The dog's not even here. He'll tell Layla over the phone." },
          { s: 'jay', f: 'happy', t: "It's better if it's a surprise. Everything's better for Jake if it's a surprise. He's built for it." }
        ] },
        { t: "You've been in this chat a long time.", notes: 3, then: [
          { s: 'jay', f: 'neutral', t: "Since we were fifteen. Niki's renamed it like a hundred times. Jungwon asked him to stop like a hundred times." },
          { s: 'jay', f: 'neutral', t: "Nobody's ever left. You can't leave. Heeseung re-adds you. He did it to Sunghoon at two in the morning once. Sunghoon left a voice memo about it." },
          { n: "He said it like a complaint, and turned the volume on the phone down without turning it off, so it went on buzzing against his chest like a second heartbeat." }
        ] },
        { t: "(Type 'its a surprise' from his phone.)", notes: 2, then: [
          { n: "He let her take it. The chat went quiet for exactly as long as it took six people to read three words, and then exploded." },
          { s: 'jay', f: 'happy', t: "Now you've done it. Now Jake's gonna be up all night." }
        ] }
      ] }
    ],
    [
      { place: 'Iwatodai Station · Vending Machines', time: 'Evening' },
      { n: "He had been standing in front of the row of vending machines by the station for nearly ten minutes with his hands in his jacket pockets, reading every can in every slot, top to bottom, the way other people read a menu in a language they didn't trust." },
      { s: 'jay', f: 'neutral', t: "None of these are right." },
      { s: 'solar', f: 'neutral', t: "What's the right one?" },
      { s: 'jay', f: 'neutral', t: "A can you can't get here. Brown. Ugly. Tastes like a bus station at six in the morning. I've had like four a day for years." },
      { choose: [
        { t: "(Buy him the closest one.)", notes: 3, then: [
          { n: "She found one with a brown label and fed the machine coins and it dropped with a clunk. He took it, and cracked it, and drank, and stood there for a moment considering it with total seriousness." },
          { s: 'jay', f: 'neutral', t: "Too sweet. Too clean." },
          { s: 'jay', f: 'happy', t: "...I'll have another one tomorrow, though. Don't tell anyone." }
        ] },
        { t: "Why do you want something that tastes like a bus station?", notes: 2, then: [
          { s: 'jay', f: 'neutral', t: "Because it's the one I drink. You don't pick the thing you like. You pick the thing you've got, and then you like it." }
        ] },
        { t: "(Buy two of the worst-looking ones. One each.)", notes: 2, then: [
          { n: "They drank them standing up by the machines, both of them pulling the same face at the same moment, and he laughed, which was rare enough that a man at the ticket gate looked over." },
          { s: 'jay', f: 'happy', t: "That's disgusting. That's exactly right. How'd you know?" }
        ] }
      ] }
    ],
    [
      { place: 'Iwatodai · Riverside', time: 'After School' },
      { n: "Somebody had left a deflated football in the long grass by the river, and Jay had found it, and pumped it up at the bike shop with the old man's pump while the old man watched, and now he was keeping it in the air on the path with his feet and his knee and the top of his foot, not showing off, just doing it, the way you'd hum." },
      { s: 'jay', f: 'neutral', t: "At home I'm kind of a big deal at this. Don't laugh. Like, a big deal. People know my name who don't know me." },
      { n: "The ball went up off his knee and down onto his foot and stayed there, balanced, as if it had decided to." },
      { choose: [
        { t: "Show me.", notes: 3, stat: { courage: 1 }, then: [
          { n: "He showed her. She kept it up twice before it went into the reeds, and then four times, and then once, badly, off her shin, and he went down the bank after it in his good sneakers without a word of complaint." },
          { s: 'jay', f: 'happy', t: "Four's good. Four's a start. Jake's best is two and he's been trying since middle school." }
        ] },
        { t: "Do you miss it?", notes: 3, then: [
          { s: 'jay', f: 'neutral', t: "The game? Nah." },
          { s: 'jay', f: 'neutral', t: "...The noise. The bleachers. Everybody yelling your name when you didn't even do anything yet. Here nobody knows my name. It's quiet. It's weird how much I don't hate it." }
        ] },
        { t: "(Steal the ball.)", notes: 2, then: [
          { n: "She got a foot to it and it rolled away down the path, and he didn't chase it, just stood with his hands on his hips and looked at her like a coach looks at a freshman who's done something illegal and promising." },
          { s: 'jay', f: 'neutral', t: "Okay. Okay. That's a foul. That's a foul anywhere." }
        ] }
      ] }
    ],
    [
      { place: 'Iwatodai Dorm · Front', time: 'Evening' },
      { n: "Seven fifty-eight, the front step of the dorm, the air gone sharp with evening and the streetlights coming on one by one down toward the station, and Jay on the step with his jacket zipped to the chin and a tower of plastic containers in a bag on each arm, the guesthouse's share, every lid labeled in his angry capitals." },
      { n: "Through the window, Mitsuru was at the lounge table with a folder, not looking at the clock, very specifically not looking at the clock." },
      { s: 'jay', f: 'neutral', t: "Two minutes. I've never been late. Not once. She checks anyway. I respect it." },
      { choose: [
        { t: "(Read the lids.)", notes: 3, then: [
          { n: "STAFF. HEESEUNG (HE KNOWS WHY). NIKI (DO NOT GIVE TO NIKI EARLY). SUNOO (EXTRA). JUNGWON (WATCH HIM EAT IT). And at the bottom of the stack, one with nothing on the lid at all." },
          { s: 'solar', f: 'neutral', t: "Whose is the blank one?" },
          { s: 'jay', f: 'neutral', t: "Whoever's hungry at one in the morning. There's always somebody." }
        ] },
        { t: "Let me carry some.", notes: 2, then: [
          { s: 'jay', f: 'neutral', t: "You live here. You'd have to walk back. That's a whole extra walk." },
          { s: 'jay', f: 'happy', t: "...Carry the top one to the corner. Then go in. Then Mitsuru stops looking at the clock." }
        ] },
        { t: "Go. You'll be late.", notes: 2, then: [
          { s: 'jay', f: 'neutral', t: "I won't be." },
          { n: "He wasn't. He went down the steps at seven fifty-nine exactly, and through the window Solar watched Mitsuru turn one page of her folder, as if that had been the thing she'd been waiting for." }
        ] }
      ] }
    ]
  ],
  ranks: [
    { after: '11/10', title: '1: whose kitchen', place: 'Iwatodai Dorm · Kitchen', time: 'Evening', music: 'dorm', scene: [
      { n: "Fuuka had said at breakfast, in the voice she used for things she'd already agreed to and wasn't sure she should have, that someone from the guesthouse might be using the kitchen some evenings. The guesthouse kitchen locked at nine, and there were a great many of them over there now, and Mitsuru had decided that three nights a week was reasonable if he cooked for whoever was home. Solar had nodded into her rice and hadn't asked who." },
      { n: "At six, coming down the stairs with her hair still wet from the bath, she found out. It was the one from Yeobo's. The sharp jaw, the letterman jacket now hung over the back of a dining chair with HANLIM down one sleeve, the one who had hit Jungwon on the arm hard enough to mean something and then said almost nothing else all afternoon. He was standing in the middle of the kitchen with his arms folded and a grocery bag on the counter he hadn't unpacked, an unlit cigarette tucked behind one ear like a carpenter's pencil, looking at the wall of hooks." },
      { n: "He wasn't looking at the stove. He was looking at the hooks, where the pans hung with their handles out, and at the one on the end, the good pot, heavy and dull with use, that nobody in the dorm had taken down since October." },
      { s: 'jay', f: 'neutral', t: "Hey." },
      { s: 'jay', f: 'neutral', t: "Whose is this." },
      { n: "It wasn't really a question. He said it the way you'd read a name off a mailbox. Behind her, across the doorway, Koromaru lay on his side with his chin on his paws and didn't get up to let her past, the way he hadn't got up for anybody at that door in a month, and his eyes went to the stranger, and then to the hall, and stayed on the hall." },
      { choose: [
        { t: "Shinjiro's. He's in the hospital.", notes: 3, flag: { 'jay-told-name': true }, then: [
          { s: 'jay', f: 'neutral', t: "Okay." },
          { n: "He didn't ask what for. He looked at the pot a little longer, the way you'd look at somebody's coat left on the back of a chair, and then he said the name once, quietly, to himself, as if he were learning where a step was in the dark." },
          { s: 'jay', f: 'neutral', t: "Shinjiro." }
        ] },
        { t: "Everybody's.", notes: 2, then: [
          { s: 'jay', f: 'serious', t: "No it isn't." },
          { s: 'jay', f: 'neutral', t: "Nobody hangs a pot like that unless it's theirs. Handle out. That's somebody who reaches for it without looking." }
        ] },
        { t: "(Look at Koromaru.)", notes: 3, then: [
          { n: "She looked at the dog, and Jay followed her look down to the doorway, to the white dog lying across it like a draft stopper, watching the hall for someone who wasn't coming down it." },
          { s: 'jay', f: 'sad', t: "...Oh." },
          { s: 'jay', f: 'neutral', t: "Yeah. Okay. Got it." }
        ] }
      ] },
      { n: "He took down the dented saucepan from the next hook instead, the cheap one everyone used for instant noodles, and set it on the burner, and after that he didn't look at the good pot again, very carefully, the whole evening." },
      { n: "He cooked without hurry and without a wasted movement, rice from a bag he'd brought over, eggs, a jar of kimchi he unscrewed and smelled and approved of, scallions cut thin on the dorm's warped board with the dorm's cheap knife, and the kitchen began to smell of sesame oil and something sour and hot, and upstairs a door opened, and then another." },
      { s: 'jay', f: 'neutral', t: "Fuuka said you guys eat at like seven." },
      { s: 'solar', f: 'neutral', t: "Whenever. Junpei eats at all of them." },
      { s: 'jay', f: 'happy', t: "Then he's getting fed. Bowls." },
      { n: "She got bowls. Her hands knew which cupboard; his eyes followed them there and filed it away. Junpei appeared in the doorway in his socks with the expression of a man who had followed a smell down two flights of stairs against his better judgment, stepped over Koromaru, who let him, and looked into the pan." },
      { s: 'junpei', f: 'surprised', t: "Dude. Who are you. Are you allowed to be here. Are you making enough." },
      { s: 'jay', f: 'neutral', t: "Jay. Yeah. Yeah." },
      { s: 'junpei', f: 'happy', t: "...I like him. Leader, I like him." },
      { choose: [
        { t: "You hit Jungwon. At the cafe.", notes: 3, then: [
          { s: 'jay', f: 'neutral', t: "Yeah." },
          { s: 'jay', f: 'neutral', t: "He's fine. It's how we say hi. He'd been gone a month, so he got a month's worth." },
          { s: 'jay', f: 'serious', t: "He'd have done it to me. He's got a weird punch. Very polite. Hurts like hell." },
          { n: "She thought of Jungwon standing very straight at the counter at Yeobo's, with the place on his arm where he'd been hit, not rubbing it, and of how he hadn't looked at anyone, and how he'd carried the workbooks home without a word, and for some reason she understood the punch a little better than she understood anything else about that afternoon." }
        ] },
        { t: "Why cook here? The guesthouse has a kitchen.", notes: 2, then: [
          { s: 'jay', f: 'neutral', t: "Locks at nine. The desk lady keeps the key on a string round her neck. I'm not asking her for it." },
          { s: 'jay', f: 'neutral', t: "And there's a lot of us over there. You can't cook for a lot of us on a hot plate. I tried. Sunghoon cried." }
        ] },
        { t: "(Just eat.)", notes: 3, then: [
          { n: "She ate standing at the counter. It was plain and hot and sour in the right place, and he watched her take the first bite without appearing to watch, and then turned back to the stove with something in his shoulders gone a fraction looser, which she would learn was the most anyone ever got out of him." }
        ] }
      ] },
      { n: "At seven fifty-two he washed the dented saucepan and dried it and hung it back on its hook with the handle out, exactly like the one beside it. He wiped the board and the counter and the stove top. He opened the drawer by the stove to put the knife away, and stopped, and looked into it for a second, and shut it again without putting anything in, and put the cheap knife in the other drawer, with the spare chopsticks, as if the first one had already been spoken for." },
      { n: "At seven fifty-eight he had his jacket on and a bag of plastic containers on his arm, the guesthouse's share, every lid labeled in angry capitals." },
      { s: 'jay', f: 'neutral', t: "Sunday." },
      { s: 'solar', f: 'neutral', t: "What's Sunday?" },
      { s: 'jay', f: 'happy', t: "Dinner. I said three nights. That was one." },
      { n: "He stepped over Koromaru on his way out, carefully, without asking him to move. When the front door shut, Koromaru lifted his head and looked at it for a long moment, and then put his chin back down on his paws, facing the hall." }
    ] },

    { after: '11/17', title: '2: two phones', place: 'Iwatodai Strip · Supermarket', time: 'Evening', music: 'city', scene: [
      { n: "The supermarket on the Strip at half past five was the whole neighborhood at once, office workers with one basket and no patience, a grandmother with a list in a plastic sleeve, a recorded voice overhead announcing something about mackerel every ninety seconds, and the cold breath of the refrigerated aisles coming out at you every time you passed one, like a dog checking your hand." },
      { n: "Jay had a basket on each arm and a list on the back of a guesthouse receipt in capitals, and he was weighing a daikon in each hand with the face of a judge who had already reached a verdict and was letting the defense finish out of courtesy." },
      { s: 'jay', f: 'neutral', t: "Eggs. Not those. The ones with the stamp." },
      { s: 'solar', f: 'neutral', t: "What's the stamp mean?" },
      { s: 'jay', f: 'neutral', t: "No idea. Looks official." },
      { n: "His phone hadn't stopped since the automatic doors. It sat in his breast pocket and buzzed against his chest every few seconds, and finally he sighed through his nose, took it out, and held it up for her without comment." },
      { phone: [
        { from: 'jake', t: "jakeyy: jay what r we eating tonight" },
        { from: 'niki', t: "rikiniki: hes at the store w solar hes not gonna answer" },
        { from: 'sunghoon', t: "princesunghoon: Park Sunghoon would like it noted that he does not eat cilantro." },
        { from: 'jay', t: "parkjay: noted 💀" },
        { from: 'jake', t: "jakeyy: thats not an answer to the question jay" }
      ], contact: 'jungwon is mean · 5:41 PM' },
      { choose: [
        { t: "You text exactly the way you talk.", notes: 3, then: [
          { s: 'jay', f: 'neutral', t: "How else would I text." },
          { s: 'jay', f: 'happy', t: "Jungwon uses periods. In the group chat. Full stops, like he's sending a memo to the board of education. Somebody has to balance it out." }
        ] },
        { t: "Answer Jake.", notes: 2, then: [
          { s: 'jay', f: 'neutral', t: "I did. The skull's an answer. It means you'll find out when you find out." }
        ] },
        { t: "(Take a photo of the daikon. Send it to the chat.)", notes: 3, then: [
          { n: "He let her take the phone. She took a photograph of the daikon, very close, very dramatic, and sent it, and the chat went silent for exactly as long as it took six people to look at a radish, and then it went off like a car alarm." },
          { phone: [
            { from: 'jake', t: "jakeyy: WHAT IS THAT" },
            { from: 'heeseung', t: "heeeseung: thats a radish jake" }
          ], contact: 'jungwon is mean · 5:43 PM' },
          { s: 'jay', f: 'happy', t: "See, now that's an answer. You're good at this." }
        ] }
      ] },
      { n: "When he put the phone back she saw the other one. The jacket's inside pocket, left side. An old black folding phone with a stub of antenna, its little outside screen dark, sitting there against his ribs like a stone somebody had put in his coat and he'd decided to keep." },
      { ifRank: { jungwon: 3 }, then: [
        { n: "She had seen one like it before, squared up on a council table beside Jungwon's new one, exactly as quiet." }
      ] },
      { s: 'solar', f: 'neutral', t: "That one doesn't buzz." },
      { s: 'jay', f: 'neutral', t: "Nobody texts on that one." },
      { s: 'jay', f: 'neutral', t: "If they want you, they call. If it's important, they show up. If it's really important, they're already standing behind you when you turn round." },
      { n: "He said it absolutely flat, reaching past her for a block of tofu, and checked the date on it, and put it in the basket." },
      { s: 'jay', f: 'neutral', t: "Whatever. I'll just say it. I'm worse at not saying things than Jungwon is." },
      { s: 'jay', f: 'neutral', t: "I'm two guys. Same guy. In one I'm eighteen and I play football at a school where you get detention for your socks. In the other I'm twenty-four and I cook for a living." },
      { s: 'jay', f: 'neutral', t: "Same face. I checked. Same everything I don't like about it." },
      { s: 'solar', f: 'neutral', t: "What do you cook? In the other one." },
      { s: 'jay', f: 'neutral', t: "Something nobody eats." },
      { n: "He put a bag of onions in the basket. He didn't explain it, and it wasn't a joke the way he said it, and it wasn't quite not one either, and then he'd moved on to the ginger and it was gone, the way a fish goes back under." },
      { s: 'jay', f: 'neutral', t: "There's four of us like that. Me, Jungwon, Niki, Sunghoon. Two lives each. Sunoo and Heeseung and Jake have the one." },
      { s: 'jay', f: 'happy', t: "Don't tell Jake. He'll feel left out. He'll want one." },
      { choose: [
        { t: "I've got three.", notes: 3, then: [
          { s: 'jay', f: 'surprised', t: "..." },
          { s: 'jay', f: 'happy', t: "Yeah. I heard. Show-off." },
          { n: "He said it so dryly that it took her a moment to understand she'd been welcomed into something, and then he handed her the heavier of the two baskets, which she understood, a moment after that, was a mark of respect." }
        ] },
        { t: "Is it hard? Being two people?", notes: 3, then: [
          { s: 'jay', f: 'neutral', t: "It's like having two phones." },
          { s: 'jay', f: 'neutral', t: "One never stops. One never rings. And you keep checking the wrong one." }
        ] },
        { t: "Which one am I talking to?", notes: 2, then: [
          { s: 'jay', f: 'neutral', t: "The one holding the onions." }
        ] }
      ] },
      { n: "He carried everything back. He refused to let her carry anything at all except a single long leek, which he handed her at the door with great ceremony so that, he said, she'd look useful. Twice on the walk his hand went flat against the inside of his jacket, left side, the way you'd check for your keys, and twice there was nothing there to answer it, and he took the hand away and kept walking as if he hadn't checked at all." }
    ] },

    { after: '11/26', title: '3: legitimate squid', place: 'Port Island · Fish Market', time: 'After School', music: 'day', scene: [
      { n: "The fish market on the Port Island side was wet concrete and white styrofoam boxes on crushed ice, men in rubber boots hosing down the floor in long gray fans of water, gulls on the roof beams with their heads tucked in, and the late November wind coming straight off the bay through the open shutters, so that the whole place smelled of salt and diesel and cold, clean ice." },
      { n: "Jay was at the squid. He had been at the squid for some time. He stood over a box of them with his hands in his jacket pockets and his head on one side, looking down at them with the concentration other boys his age gave to a girl across a room, while the fishmonger behind the counter, a short wide man in a rubber apron, watched him with his arms folded." },
      { s: 'jay', f: 'neutral', t: "Look at the eyes. Clear. If they're cloudy, he's been sitting. Press the body. It should come back. If it doesn't come back, it's lying to you." },
      { s: 'fishmonger', t: "...You're the boy from last week." },
      { s: 'jay', f: 'neutral', t: "Yeah. You sold me a bad one." },
      { s: 'fishmonger', t: "I did not." },
      { s: 'jay', f: 'neutral', t: "You did. I'm not mad. I'm just letting you know I know." },
      { n: "The fishmonger looked at him for a long moment, the way one tradesman looks at another across a counter, and then without a word he reached underneath it and brought out a different box." },
      { choose: [
        { t: "(Press one. The way he showed you.)", notes: 3, stat: { proficiency: 1 }, then: [
          { n: "She pressed one, two fingers, gently. It was cold enough to ache, and it came back under her fingers, slowly, like something breathing out. Jay watched her do it and nodded once." },
          { s: 'jay', f: 'neutral', t: "Good. You've got it. Don't let him see, he'll charge you more." }
        ] },
        { t: "How do you know all this?", notes: 2, then: [
          { s: 'jay', f: 'neutral', t: "Practice." },
          { s: 'jay', f: 'neutral', t: "Different practice. Depends who you ask." }
        ] },
        { t: "They're looking at me.", notes: 2, then: [
          { s: 'jay', f: 'neutral', t: "They're dead. They're not looking at anything. That's the whole point of fish." }
        ] }
      ] },
      { ifHeading: 'S', then: [
        { s: 'jay', f: 'neutral', t: "At home I work at a plant. Seafood. Processing. There's a lot of squid." },
        { s: 'jay', f: 'neutral', t: "The squid's legitimate. I want that on the record. Very legitimate squid." },
        { n: "He said it with such a perfectly straight face that the fishmonger, who couldn't possibly have understood a word, looked up anyway, as if he'd heard his trade being defended in a court somewhere." },
        { s: 'jay', f: 'neutral', t: "I wear goggles all day. There's a line on my face at home, up here, from the strap. Here there isn't. I keep touching where it should be." },
        { s: 'jay', f: 'neutral', t: "The young master comes down some days in his good coat. Stands where the floor's dry. Asks if everything's clean." },
        { s: 'jay', f: 'happy', t: "It's always clean." },
        { n: "*The young master.* He said it in a different voice, lower and more careful, the way you'd use a word in a language you'd been raised to be polite in, and it went into her somewhere under the ribs and stayed, and she couldn't have said why it made her want to stand up straighter." }
      ], else: [{ ifHeading: 'H', then: [
        { s: 'jay', f: 'neutral', t: "At home the team does a barbecue after the last game. Every year. It's my job. Coach gives me the card and a look." },
        { s: 'jay', f: 'neutral', t: "First year I bought squid that had been sitting. Whole team sick on the bus home. Heeseung still brings it up. He brought it up at Yeobo's. In this world. A whole other world, and that's what he leads with." },
        { s: 'jay', f: 'happy', t: "Second year I learned. Videos, in the locker room, between drills. Now I can tell you a squid's whole life story from its eyes." },
        { n: "He held one up to the gray light from the shutters by its mantle and looked it in the eye, and then looked, briefly and very seriously, at her, as if to check she was taking notes, and she found she was." }
      ], else: [{ ifHeading: 'R', then: [
        { s: 'jay', f: 'neutral', t: "The girls at your dorm keep saying Syracuse like it's a person they're waiting on." },
        { s: 'jay', f: 'neutral', t: "I looked it up. Lake. Snow sideways. They put ranch on pizza. I'm gonna pray for you." },
        { s: 'jay', f: 'happy', t: "Nah, you'll be fine. You'll eat. Somebody'll feed you. You've got a face people feed." }
      ], else: [{ ifHeading: 'true', then: [
        { s: 'jay', f: 'neutral', t: "Wherever you end up, it sounds like it's gonna be more than one place." },
        { s: 'jay', f: 'happy', t: "So I'll show you the squid twice. Once in goggles. Once with a whole football team throwing up on a bus. You can tell me which one's worse." }
      ], else: [
        { s: 'jay', f: 'neutral', t: "If you end up staying here, this is your fish market. Learn the guy. Learn which days he lies." },
        { s: 'fishmonger', t: "I don't lie." },
        { s: 'jay', f: 'neutral', t: "Tuesdays. He lies Tuesdays." }
      ] }] }] }] },
      { choose: [
        { t: "(Carry the box.)", notes: 3, then: [
          { n: "It was heavier than it looked, ice and squid and water sloshing in the bottom, and so cold through the styrofoam that her forearms went numb in a minute. He let her carry it all the way to the station without offering to take it, which nobody had ever done, and which she found she liked." }
        ] },
        { t: "Teach me to cook it.", notes: 3, then: [
          { s: 'jay', f: 'neutral', t: "Sunday. You're cutting. I'm watching. If you cut toward yourself I'm taking the knife and you're doing dishes for a week." }
        ] },
        { t: "I'm not eating anything with eyes.", notes: 2, then: [
          { s: 'jay', f: 'neutral', t: "It won't have eyes when I'm done with it." },
          { s: 'jay', f: 'happy', t: "That came out wrong. That's true, though." }
        ] }
      ] },
      { n: "On the monorail back across the water, the box of squid on the seat between them sweating ice water onto the floor, he fell asleep sitting perfectly upright with his arms crossed and the cigarette still behind his ear, and didn't wake when the car lurched or when a schoolboy across the aisle stared at the box, and Solar watched the bay go by gray and wrinkled under the low sky and found she'd been holding her breath, a little, the way you do going past somewhere that smells of the sea, and didn't know since when." }
    ] },

    { after: '12/5', title: '4: handle out', place: 'Iwatodai Dorm · Kitchen', time: 'Evening', music: 'dorm', scene: [
      { n: "Saturday, and the kitchen was full of steam. Jay was cooking for the dorm and the guesthouse both, which meant something like twenty people, on four burners, with the dented saucepan and a frying pan and the guesthouse's borrowed rice cooker going on the counter, and he was out of burners, and out of pans, and the window over the sink had fogged solid." },
      { n: "On the end hook, big enough for all of it, the good pot hung where it always hung, with its handle out." },
      { n: "Ken was at the counter with his homework pushed to one side, setting out the plastic containers in rows by lid color with the gravity of a man arranging chess pieces for a tournament. He looked up at the pot, and at the three pans, and at Jay." },
      { s: 'ken', f: 'neutral', t: "Jay-san. Excuse me. Why don't you use the large pot? It would hold everything." },
      { s: 'jay', f: 'neutral', t: "Not mine." },
      { s: 'ken', f: 'serious', t: "He wouldn't mind. I think. He made food in it for everyone. That's what it's for." },
      { ifFlag: 'jay-told-name', then: [
        { s: 'jay', f: 'neutral', t: "Shinjiro, right? Then he can tell me. When he's back." }
      ], else: [
        { s: 'jay', f: 'neutral', t: "What's his name? The pot guy." },
        { s: 'ken', f: 'neutral', t: "Aragaki-san. Shinjiro." },
        { s: 'jay', f: 'neutral', t: "Then he can tell me. When he's back." }
      ] },
      { n: "Ken considered this with ten-year-old severity, and then nodded, and went back to the containers, satisfied in the particular way he was satisfied when someone kept a rule he hadn't known existed but approved of on sight." },
      { n: "Akihiko came in for water in his running clothes, a towel around his neck, and stopped in the doorway with one foot over Koromaru, and took in the steam, and the three pans, and Jay juggling them, and the pot on its hook." },
      { s: 'akihiko', f: 'neutral', t: "Use the pot." },
      { s: 'jay', f: 'neutral', t: "Nah. I'm good." },
      { s: 'akihiko', f: 'serious', t: "It's a pot. Use it." },
      { n: "He crossed the kitchen and reached past Jay and took it off the hook himself, in one movement, and then stood there holding it by the handle. He didn't put it on the stove. He held it in the steam with his jaw set, the way you'd hold something somebody had handed you at a funeral, and the kitchen went quiet except for the oil, and he stood like that for a long ten seconds." },
      { n: "Then he hung it back on its hook. Handle out, carefully, exactly how it had been." },
      { s: 'akihiko', f: 'sad', t: "...Sorry. Never mind." },
      { n: "He went out without the water." },
      { choose: [
        { t: "(Go after Akihiko.)", notes: 2, then: [
          { n: "She caught him on the stairs. He was sitting on the fourth step with his forearms on his knees, looking at his own hands." },
          { s: 'akihiko', f: 'neutral', t: "I'm fine. I just can't watch somebody else— it's stupid. It's a pot." },
          { s: 'solar', f: 'neutral', t: "It's not stupid." },
          { n: "He went up without answering. When she came back down, a glass of water was standing on the bottom stair, full, and Jay was at the stove with his back to the door as if he'd never moved." }
        ] },
        { t: "(Stay. Take the frying pan.)", notes: 3, then: [
          { n: "She took the frying pan off him without asking. He let her. For a while neither of them said anything, and then he poured a glass of water at the sink and went and set it on the bottom stair, and came back." },
          { s: 'jay', f: 'neutral', t: "Some guys you go after. Some guys you leave a glass of water for." }
        ] },
        { t: "He's not ready.", notes: 3, then: [
          { s: 'jay', f: 'neutral', t: "Yeah. Me neither." },
          { s: 'jay', f: 'neutral', t: "Don't tell him I said that. I don't even know him. I'm just in his kitchen." }
        ] }
      ] },
      { ifHeading: 'S', then: [
        { s: 'jay', f: 'neutral', t: "At home there's a kitchen I don't cook in. The madam's. The young master's mother's." },
        { s: 'jay', f: 'neutral', t: "You go in there, you take your hat off. You don't touch her knives. The kid sleeps in a room behind it and she feeds him like he's hers. I eat standing in the doorway when she lets me." },
        { n: "Haechan came in then for a glass of water, in a black hoodie with the sleeves pushed up, and stopped, and looked at the stove, and at Jay, and Jay looked back at him, and for a second the two of them stood across the kitchen regarding each other with the flat, unhurried attention of two dogs from different yards meeting at a fence." },
        { s: 'jay', f: 'neutral', t: "There's enough." },
        { s: 'haechan', f: 'neutral', t: "I ate." },
        { n: "He filled his glass and went back out, stepping over Koromaru without breaking stride. Jay watched the doorway he'd gone through a beat longer than he needed to, then turned the flame down." },
        { s: 'jay', f: 'neutral', t: "Other house. Different kitchen. Everybody's got one they don't go in." }
      ], else: [{ ifHeading: 'H', then: [
        { s: 'jay', f: 'neutral', t: "At home there's a kitchen I'm banned from. Yeobo's. Sunoo's grandma's." },
        { s: 'jay', f: 'neutral', t: "I touched her oven one time. One time. Turned a dial. She still says my name like it's a bad word. Sunoo has to let me in the back door and I have to stand on the mat." },
        { s: 'jay', f: 'happy', t: "So I know about other people's kitchens. You don't touch nothing. You ask. And then you still don't touch it." }
      ], else: [{ ifHeading: 'R', then: [
        { s: 'jay', f: 'neutral', t: "Wherever you're going, I hope somebody's got a pot like that." },
        { s: 'jay', f: 'neutral', t: "A pot somebody gets weird about. That's how you know a kitchen's somebody's. Otherwise it's just a room with a stove." }
      ], else: [{ ifHeading: 'true', then: [
        { s: 'jay', f: 'neutral', t: "You've got a lot of kitchens, it sounds like. More than me." },
        { s: 'jay', f: 'neutral', t: "Hope you're allowed in all of them. Most people only get one. I get one and a doorway." }
      ], else: [
        { s: 'jay', f: 'neutral', t: "If you end up staying, this is your kitchen. That's his pot." },
        { s: 'jay', f: 'neutral', t: "You'll be the one who decides when it comes down. Not me. Not the boxer. You." }
      ] }] }] }] },
      { choose: [
        { t: "You'd like him.", notes: 3, then: [
          { s: 'jay', f: 'neutral', t: "Yeah? He'd hate me." },
          { s: 'jay', f: 'happy', t: "Cooks always hate the next guy. It's a whole thing. It's how you know you're doing it right." }
        ] },
        { t: "(Hang the dish towel on the hook beside the pot.)", notes: 2, then: [
          { n: "She hung it there without thinking about it, and then thought about it, and left it. Jay looked at the towel and the pot side by side on the wall, and didn't say anything, and didn't move it either." }
        ] },
        { t: "You cook like you're apologizing to somebody.", notes: 3, then: [
          { s: 'jay', f: 'surprised', t: "..." },
          { s: 'jay', f: 'neutral', t: "Dude." },
          { s: 'jay', f: 'neutral', t: "Eat your rice." },
          { n: "She ate her rice. He didn't say anything else for ten whole minutes, and when he did, it was about the soy sauce, and his voice was a little rough at the edges in a way that had nothing to do with soy sauce." }
        ] }
      ] },
      { n: "At seven fifty-eight the containers went out the door in two bags, Ken's rows still perfect. The glass on the bottom stair was empty when Solar went up to bed. Nobody said who'd drunk it. The good pot hung on its hook with a dish towel beside it, handle out, and the kitchen smelled of somebody else's cooking, which was not the same thing as smelling of nobody's." }
    ] },

    { after: '12/12', title: '5: good knife', place: 'Iwatodai Dorm · Kitchen', time: 'Evening', music: 'tender', scene: [
      { n: "He was standing at the fridge when she came in, reading the note taped to the door in blunt square capitals. DOG, REAL FOOD, 1 CUP, NOT THE CANNED GARBAGE. He'd read it before. She could tell from the way he read it this time, the way you reread a line in a letter you've already decided you like." },
      { s: 'jay', f: 'happy', t: "This guy. I like this guy." },
      { s: 'jay', f: 'neutral', t: "Junpei says there's a dish. Rice, pork, something. Everybody goes quiet when he talks about it. Fuuka goes quiet. Junpei doesn't go quiet for anything. Junpei talks through movies." },
      { s: 'jay', f: 'neutral', t: "I want to make it. For you guys. Not to replace it. Just so it's in the air again." },
      { ifRank: { shinjiro: 9 }, then: [
        { n: "Her hand had gone to her pocket before she'd decided anything. The inside one, where the card lived. She took it out and laid it on the steel counter between them, flat, under two fingers. An index card, soft at the corners now, written on both sides in blocky capitals pressed hard into the card, a little knuckle drawn badly in the margin, and at the very bottom, underlined twice, *stop poking it.*" },
        { n: "Jay didn't pick it up. He leaned over it with his hands behind his back and read it on the counter, both sides, without touching it, the way you'd read a document under glass in a museum. When he got to the bottom he laughed, once, out through his nose." },
        { s: 'jay', f: 'neutral', t: "Yeah. Okay. I'd have liked this guy." }
      ], else: [
        { n: "There wasn't a recipe. There was the dorm, and the dorm had pieces of it, the way a house has pieces of somebody. Junpei knew the rice, washed until the water ran clear, and said so with enormous authority. Fuuka knew there was ginger. Ken, from the stairs, knew that you didn't lift the lid, and said so as if it were a law of physics." },
        { n: "And Solar found that her hand knew something, laid flat over a pot of rice and water with her thumb pressed to the first joint of her middle finger, up to here, before she could have said where she'd learned it. Jay looked at her hand and wrote it down, on the back of a receipt, in capitals. UP TO THE KNUCKLE." }
      ] },
      { choose: [
        { t: "(Talk him through it, step by step, while he cooks.)", notes: 3, flag: { 'jay-steps': true }, then: [
          { n: "She talked him through it, in order, the way it went. He did exactly what she said, no more, and when she said wash the rice until the water runs clear he washed it until the water ran clear and then held the bowl up to the light to make sure." }
        ] },
        { t: "(Let him work it out himself.)", notes: 2, then: [
          { n: "She sat on the counter and kept quiet. He worked it out. He was slower than she expected, and more careful, and twice he stopped with something in his hand and looked at the wall for a second as if he were listening for a voice in another room." }
        ] },
        { t: "Are you sure about this?", notes: 3, then: [
          { s: 'jay', f: 'neutral', t: "No." },
          { s: 'jay', f: 'neutral', t: "That's how you know it's worth doing. If I was sure I'd be bored." }
        ] }
      ] },
      { n: "He sliced the ginger thin. Then thinner. Thin enough, it turned out, to read through, which was apparently how it went. The dorm's cheap knife with the loose handle went through the root with a small dry sound, again, again, the slices falling over against each other on the board like cards, and then he stopped." },
      { n: "Not suddenly. He put the knife down flat on the board, quietly, and stood with his hands held out in front of him over the counter, and opened them, and closed them, and opened them again, slowly, all ten fingers spread, and turned them over under the kitchen light, palms, backs, palms, the way you'd look at something you'd been handed and weren't sure was yours." },
      { n: "He looked at them for a long time. Long enough that the rice cooker clicked over to warm. Long enough that Koromaru, across the doorway, lifted his head off his paws and looked at him." },
      { s: 'solar', f: 'neutral', t: "Jay?" },
      { s: 'jay', f: 'neutral', t: "Hm." },
      { s: 'jay', f: 'neutral', t: "Nothing. Good knife." },
      { n: "It wasn't a good knife. It was the dorm's worst knife, the one with the loose handle that everyone complained about and nobody replaced. He picked it up again and went on, and the slices came off the ginger as even as pages, and he didn't say anything else about it, and she stood there with the feeling of having walked in on the end of something, a phone call or a prayer, without any idea what it had been about." },
      { ifHeading: 'S', then: [
        { s: 'jay', f: 'neutral', t: "At home people say I do the cleanest work in the country." },
        { s: 'jay', f: 'neutral', t: "I'm not supposed to say that. It's true, though." },
        { s: 'solar', f: 'neutral', t: "Clean how?" },
        { s: 'jay', f: 'neutral', t: "Clean. Nothing in it that shouldn't be there." },
        { s: 'jay', f: 'neutral', t: "I had a place at KAIST once. Science. Then I didn't. Now I'm the best in the country at something nobody's allowed to put on a résumé." },
        { n: "He said it to the ginger, deadpan, and she laughed before she could stop herself, and he looked pleased about that, faintly, around the eyes, as if she'd passed something." }
      ], else: [{ ifHeading: 'H', then: [
        { s: 'jay', f: 'neutral', t: "At home I'm the guy who doesn't miss. Passes. Forty yards on a wet field, I put it right on your chest." },
        { s: 'jay', f: 'neutral', t: "Coach says I'm a perfectionist. I say I just don't like doing stuff twice." },
        { s: 'jay', f: 'happy', t: "Jungwon says it's the same thing. He'd know. He's never done anything once in his life. He does it four times and then he irons it." }
      ], else: [{ ifHeading: 'R', then: [
        { s: 'jay', f: 'neutral', t: "Where you're going, I bet nobody cooks. You'll live on whatever's in the machine at the end of the hall." },
        { s: 'jay', f: 'neutral', t: "Learn one thing. This thing. Then at least once a month somebody eats right." }
      ], else: [{ ifHeading: 'true', then: [
        { s: 'jay', f: 'neutral', t: "You're gonna be in a lot of places at once, sounds like. Learn one dish that works in all of them." },
        { s: 'jay', f: 'happy', t: "Rice. Rice works everywhere. Rice has never once let anybody down." }
      ], else: [
        { s: 'jay', f: 'neutral', t: "If you're staying, you'll make this for them after I'm gone. Make it right." },
        { s: 'jay', f: 'neutral', t: "I'll know. I don't know how. I'll know." }
      ] }] }] }] },
      { choose: [
        { t: "(Taste it off the spoon.)", notes: 3, then: [
          { n: "It wasn't done. It wasn't anything yet, ginger and broth and the start of something, but it was hot and it was close, close enough that the back of her throat went tight for a second for no reason she could name." },
          { s: 'jay', f: 'neutral', t: "Not yet. Don't look like that. Not yet." }
        ] },
        { t: "It smells right.", notes: 2, then: [
          { s: 'jay', f: 'neutral', t: "Smelling right's easy. Smelling right is how it lies to you." }
        ] },
        { t: "Next Saturday. Make it for everyone.", notes: 3, then: [
          { s: 'jay', f: 'neutral', t: "Yeah. Next Saturday. Everyone." },
          { s: 'jay', f: 'neutral', t: "If I screw it up, I screw it up in front of the dog. That's fair." }
        ] }
      ] },
      { n: "At seven fifty-nine he was out the door. On the fridge, under the dog note, he'd taped a page from the little receipt book he wrote his lists in, the steps in his own angry capitals, and at the bottom DON'T LIFT THE LID, underlined once, nowhere near as hard, as if he didn't think he'd earned the second line yet." }
    ] },

    { after: '12/19', title: '6: not the same', place: 'Iwatodai Dorm · Dining Room', time: 'Evening', music: 'dorm', scene: [
      { n: "Exam results had gone up that morning, and the dorm was in the loose, giddy, slightly hysterical mood of a house where everyone had either passed or decided not to talk about it, and Jay had cooked." },
      { n: "He'd cooked it. The rice and the pork and the ginger and the spring onion, in his own pan, not the good one, enough for the whole dining table and the guesthouse besides, and he'd set the bowls out himself, one at every place, and stood at the end of the table with the dish towel over his shoulder and his arms folded while they sat down, like a man watching a penalty kick he'd already taken." },
      { n: "Junpei took the first bite. Yukari took the second. Fuuka, Ken, Akihiko at the end. Koromaru stayed in the doorway with his chin on his paws, and didn't come in, and didn't look up." },
      { n: "There was a silence. Not the silence of people eating. A different one, the silence of a room listening for a voice and not hearing it." },
      { s: 'junpei', f: 'happy', t: "Dude. DUDE. This is— man, this is really good." },
      { s: 'yukari', f: 'neutral', t: "It's really good, Jay." },
      { s: 'fuuka', f: 'happy', t: "It's lovely. Really." },
      { s: 'ken', f: 'neutral', t: "It is very good, Jay-san." },
      { s: 'ken', f: 'sad', t: "...It isn't the same." },
      { n: "The table froze. Yukari's chopsticks stopped halfway. Junpei made a small strangled noise. Akihiko, at the end, had eaten half of his, and put his chopsticks down parallel across the bowl, and was looking at the window." },
      { s: 'jay', f: 'neutral', t: "Yeah. I know." },
      { choose: [
        { t: "Ken's right. It's not the same.", notes: 3, flag: { 'jay-truth': true }, then: [
          { s: 'jay', f: 'neutral', t: "Thank you." },
          { s: 'jay', f: 'neutral', t: "Seriously. Everybody else was gonna let me do it wrong for the rest of my life. Ken and you. That's who I trust now." },
          { n: "Ken sat up very straight with a face that was trying not to be proud of itself and failing at the edges." }
        ] },
        { t: "It's good, Jay. Just good in its own way.", notes: 2, then: [
          { s: 'jay', f: 'neutral', t: "Its own way's wrong, when it's somebody's." },
          { s: 'jay', f: 'neutral', t: "...Thanks, though. I know what you're doing. It's nice." }
        ] },
        { t: "(Eat every grain of it anyway.)", notes: 3, then: [
          { n: "She ate all of it, slowly, every grain, while the table watched her and pretended not to. When she put the bowl down Jay looked at it for a long moment, empty, and nodded, once, the way you'd nod to someone across a room at a funeral." }
        ] }
      ] },
      { n: "Afterwards they washed up, the two of them, Jay washing and Solar drying, the rest of the dorm gone off to the lounge to watch something loud. The window over the sink was black and sweating. His phone buzzed on the windowsill every few seconds. The other one sat beside it, dark." },
      { ifHeading: 'S', then: [
        { s: 'jay', f: 'neutral', t: "Nobody's called. On that one." },
        { s: 'jay', f: 'neutral', t: "Over there, nobody calling means everything's fine. Or that everybody's busy. You don't find out which till someone's at the door." },
        { n: "He turned the old phone face down on the sill with one finger, gently, the way you'd turn down a photograph." },
        { s: 'jay', f: 'neutral', t: "I keep thinking it's my turn to make dinner. Over there. Somebody's eating instant tonight because of me. The kid, probably. He eats anything. He'd have eaten this and said it was the best thing he ever had and then had another one." }
      ], else: [{ ifHeading: 'H', then: [
        { ifEvent: 'a5-call-hoax', then: [
          { s: 'jay', f: 'neutral', t: "So. Jihoon told you. About Jungwon." },
          { s: 'solar', f: 'flustered', t: "...Yeah." },
          { s: 'jay', f: 'neutral', t: "Took him long enough. I'd have said it the first day. That's why the rule's mostly about me." }
        ], else: [
          { s: 'jay', f: 'neutral', t: "Exam week here, huh. At home we were in exam week too. We still are, I guess. Jake's saving everybody seats." }
        ] },
        { s: 'jay', f: 'neutral', t: "There's a thing. From right before. At home." },
        { s: 'jay', f: 'neutral', t: "Not now. I'm not ready to be the guy who said it. Ask me again some other time and I'll probably still say not now." },
        { n: "He scrubbed the same bowl for a long time after that, and she let him, and dried the next one, and the next." }
      ], else: [{ ifHeading: 'R', then: [
        { s: 'jay', f: 'neutral', t: "Where you're going, you're gonna be the one who cooks. I can see it. Two in the morning, all your friends on the floor, and you make something out of nothing in a pot you stole." },
        { s: 'jay', f: 'happy', t: "They'll think you're a genius. Don't tell them it was me. Let them think it was you." }
      ], else: [{ ifHeading: 'true', then: [
        { s: 'jay', f: 'neutral', t: "When you're everywhere at once, does that mean you eat three dinners? Because that's a perk. That's honestly a perk." },
        { s: 'jay', f: 'neutral', t: "Get one of them right, at least. One of them. For me." }
      ], else: [
        { s: 'jay', f: 'neutral', t: "If you stay, I won't be here to fix it. This one. You'll have to." },
        { s: 'jay', f: 'neutral', t: "Don't let it be mine. Let it be his. That's the job." }
      ] }] }] }] },
      { choose: [
        { t: "What do you think is wrong with it?", notes: 3, then: [
          { s: 'jay', f: 'neutral', t: "Too clean." },
          { s: 'jay', f: 'neutral', t: "I cooked it like I cook. Measured. Every slice the same. He doesn't cook like that, I can tell from how you all talk about it. He cooks like it's for somebody in particular, and I cooked it for twenty people and a box." }
        ] },
        { t: "Try again.", notes: 3, then: [
          { s: 'jay', f: 'neutral', t: "Not next week. When I figure out what's wrong. You don't just do it again louder." }
        ] },
        { t: "(Dry the last bowl. Stack it with the others.)", notes: 2, then: [
          { n: "She stacked it. He looked at the stack, eleven bowls, all clean, all upside down on the rack the way the dorm left them, and said nothing, which was the most honest review anything had got all night." }
        ] }
      ] },
      { n: "He took no containers back to the guesthouse that night. There was nothing left to put in them. Everyone had eaten everything. He stood in the dining room doorway at seven fifty-eight with his jacket on and looked at the clean table for a while, as if a full table and an empty one were two different kinds of failure, and then he stepped over Koromaru and went." }
    ] },

    { after: '12/28', title: '7: four years', place: 'Kirijo Guesthouse · Roof', time: 'Night', music: 'night', scene: [
      { n: "Winter break, and the guesthouse roof at ten at night was the coldest place in Iwatodai, a flat gravel square with a low wall and a door that stuck and a view of the whole town laid out in streetlights down to the black of the water, and the wind coming over the wall straight off the bay with nothing in its way." },
      { n: "Jay was on an upturned crate by the water tank with his jacket zipped to the chin and a can of hot coffee from the machine downstairs, unopened, held for the heat. The cigarette was behind his ear, where it always was. She had never once seen him take it down." },
      { s: 'jay', f: 'neutral', t: "Don't tell Heeseung I'm up here. He thinks the roof's a liability. He thinks everything's a liability. He'd put a liability sticker on the moon." },
      { choose: [
        { t: "Are you going to light that?", notes: 2, then: [
          { s: 'jay', f: 'neutral', t: "No." },
          { s: 'jay', f: 'neutral', t: "Never. It's not for lighting." }
        ] },
        { t: "Can I see it?", notes: 3, flag: { 'jay-cig': true }, then: [
          { n: "He looked at her for a second. Then he took it down from behind his ear and held it out between two fingers, and she took it. It was old. The paper had gone a little yellow and soft, like a page that had been read too often, and it weighed almost nothing, and she held it very carefully, the way you'd hold a moth." },
          { s: 'jay', f: 'neutral', t: "Don't drop it. It's older than your phone." },
          { s: 'jay', f: 'neutral', t: "...Keep it tonight. Give it back Sunday. I want to see if I notice." }
        ] },
        { t: "(Sit on the other crate. Say nothing.)", notes: 3, then: [
          { n: "She sat. He didn't say anything either. The town hummed below them, a train went over the bridge in a long line of lit windows, and somewhere down on the Strip somebody was laughing too loud, and it was a while before he spoke, and when he did it was to the town and not to her." }
        ] }
      ] },
      { s: 'jay', f: 'neutral', t: "I quit four years ago. In one of me. Kept one. That one." },
      { s: 'jay', f: 'neutral', t: "The other one of me never started. Football. Coach would kill me. Coach would dig me up and kill me again." },
      { s: 'jay', f: 'neutral', t: "Smoked half of one since. Once. With Jungwon. He coughed for ten minutes and then said thank you, very politely, like I'd passed him the salt." },
      { s: 'jay', f: 'happy', t: "Best night of my life, maybe. Don't tell him. He'll get weird. He'll write it down." },
      { ifHeading: 'S', then: [
        { s: 'jay', f: 'neutral', t: "So you're going home. The house by the sea." },
        { s: 'jay', f: 'neutral', t: "Good." },
        { s: 'jay', f: 'neutral', t: "It's colder there than this. The harbor smells like diesel and ice. You'll hate it for a week and then you won't be able to sleep anywhere else." },
        { s: 'jay', f: 'serious', t: "When you're back, you're gonna know stuff about me you don't know now. Some of it you're not gonna like. That's fine. I'm not asking you to." },
        { s: 'jay', f: 'neutral', t: "Just. You'll see me in goggles. Don't laugh. Everybody laughs the first time. The young master laughed. Once. Never again. He tells people he didn't." }
      ], else: [{ ifHeading: 'H', then: [
        { s: 'jay', f: 'neutral', t: "Hanlim. Good. Yeah." },
        { s: 'jay', f: 'happy', t: "You're gonna walk back in during exam week, and Jungwon's gonna drop his pen. His good pen. I want to be there. I'm gonna film it. Niki's gonna film me filming it." },
        { s: 'jay', f: 'neutral', t: "And then I'm leaving the room, because there's the thing, and I'm a coward about exactly one thing in my whole life, and it's that." }
      ], else: [{ ifHeading: 'R', then: [
        { s: 'jay', f: 'neutral', t: "Syracuse. Huh." },
        { s: 'jay', f: 'neutral', t: "Neither of mine. That's okay. That's honestly okay. You'll be the girl I knew in a different country. Jungwon's gonna be weird about it. Let him." },
        { s: 'jay', f: 'happy', t: "Both of me lose you. That's double. I'm gonna need a minute." },
        { s: 'jay', f: 'neutral', t: "I'm kidding. I'm fine. Send a postcard. I don't know which one of me it goes to. Send two." }
      ], else: [{ ifHeading: 'true', then: [
        { s: 'jay', f: 'neutral', t: "All of it at once. Huh." },
        { s: 'jay', f: 'neutral', t: "So you'll be in both of mine. The plant and the field. The goggles and the bleachers." },
        { s: 'jay', f: 'happy', t: "Then I get you twice. That's a good deal. That's the best deal I ever heard of. I'm not gonna ask how it works. I don't want to jinx it." }
      ], else: [
        { s: 'jay', f: 'neutral', t: "Staying. Okay." },
        { n: "He didn't say anything for a long time. The wind went over the wall. The can of coffee had gone cold in his grip, and he didn't seem to notice." },
        { s: 'jay', f: 'sad', t: "Then I go home without you. Both of me. That's a lot of me without you." },
        { s: 'jay', f: 'neutral', t: "Somebody here better learn the braise right. It better be you. I'm not trusting it to the boxer." }
      ] }] }] }] },
      { choose: [
        { t: "You'll keep it. At home.", notes: 3, then: [
          { s: 'jay', f: 'neutral', t: "I keep it everywhere. That's the point of it." }
        ] },
        { t: "I'm glad you're up here. Not down there being polite.", notes: 3, then: [
          { s: 'jay', f: 'happy', t: "Polite's Jungwon's job. I'm the guy on the roof." },
          { s: 'jay', f: 'neutral', t: "Somebody's always gotta be the guy on the roof." }
        ] },
        { t: "Let's go in. It's freezing.", notes: 2, then: [
          { s: 'jay', f: 'neutral', t: "Five more minutes. You go. Kick the door low, it sticks." }
        ] }
      ] },
      { ifFlag: 'jay-cig', then: [
        { n: "She went down the stairs with the cigarette in her coat pocket, held flat between two fingers so it wouldn't bend, like a key to somewhere she hadn't been yet. Behind her the door stuck, and she kicked it low, and it opened." }
      ], else: [
        { n: "She went down the stairs. Behind her the door stuck, and she kicked it low, and it opened, and through the gap before it closed she saw him put his hand up and touch the cigarette behind his ear, once, lightly, the way you'd check that something was still where you'd left it." }
      ] }
    ] },

    { after: '1/9', title: '8: the loud seven', place: 'Kirijo Guesthouse', time: 'Evening', music: 'joy', scene: [
      { n: "Saturday night, and the guesthouse lobby had been taken over by Hanlim High School's student council and its associates, which is to say seven boys around a portable burner on the low table with a hot pot going on it that the desk lady was pretending, with tremendous dignity, not to be able to see from her desk." },
      { n: "Jay had cooked it. He sat at the head of the table, or the place where a head would have been on a round table, with a ladle, and refused to let anyone else touch the ladle. Heeseung was counting heads. Sunoo was handing round bowls. Jake was explaining something about his dog to nobody in particular. Niki had his chopsticks in the pot before it boiled and got his wrist slapped by Jay without Jay looking. Sunghoon sat very upright and ate one fish cake at a time, as if each one had requested an audience." },
      { n: "And Jungwon, at the end, with his sleeves rolled exactly twice, eating in small precise bites and occasionally, when he thought nobody was looking, laughing at something Sunoo said in a way she'd never seen him laugh anywhere else." },
      { s: 'jake', f: 'happy', t: "Jay. Seriously. Where did you learn to cook like this? You never cooked at home. Did you? You never told us you cooked." },
      { s: 'jay', f: 'neutral', t: "Work." },
      { s: 'jake', f: 'surprised', t: "You don't have a job." },
      { n: "Niki inhaled a piece of fish cake and had to be hit on the back. Sunghoon turned his face very slowly toward the ceiling and held it there, as if receiving a message from above. Jungwon put down his chopsticks, parallel, and folded his hands on the table." },
      { s: 'jungwon', f: 'neutral', t: "He means the cafe. He's been helping at the cafe." },
      { s: 'heeseung', f: 'neutral', t: "He's banned from the cafe." },
      { s: 'sunoo', f: 'happy', t: "He's SO banned from the cafe!" },
      { s: 'sunghoon', f: 'neutral', t: "Park Sunghoon also has a job. Nobody ever asks Park Sunghoon about his job." },
      { s: 'niki', f: 'happy', t: "Skull emoji. Out loud. Skull emoji." },
      { n: "Four of them didn't look at each other, so specifically and so carefully that it was the same as looking. Three of them looked at each other in total confusion. Solar sat in the middle of it, holding her bowl, and felt the room tilt very slightly along a line she couldn't see." },
      { choose: [
        { t: "What's the joke?", notes: 3, then: [
          { s: 'jake', f: 'happy-2', t: "RIGHT? Thank you! Nobody tells me anything!" },
          { s: 'heeseung', f: 'neutral', t: "Nobody tells you anything because you tell Layla everything, and Layla tells your mom." },
          { s: 'jake', f: 'surprised', t: "Layla is a DOG." },
          { s: 'heeseung', f: 'neutral', t: "And yet." }
        ] },
        { t: "(Look at Jungwon.)", notes: 2, then: [
          { n: "Jungwon met her eyes, and held them for a moment with great courtesy, and then passed her the ladle across the table, handle first, which was a thing Jay let nobody do, and Jay let him." },
          { s: 'jungwon', f: 'neutral', t: "There's no joke. Have some tofu." }
        ] },
        { t: "(Laugh. Like you get it.)", notes: 3, then: [
          { n: "She laughed. It came out of her before she'd decided to, at exactly the right moment, as if her body knew the joke even if she didn't, and four heads came round at once to look at her, and Jungwon's face did something very quiet and complicated, and Jay grinned at the pot." },
          { s: 'jay', f: 'happy', t: "See. She gets it. She's always gotten it." }
        ] }
      ] },
      { n: "Later, with the hot pot down to broth and noodles and the burner turned low, Jay got up to fill the kettle at the lobby's little sink, and she went with him, and they stood with their backs to the noise." },
      { ifHeading: 'S', then: [
        { s: 'jay', f: 'neutral', t: "Over there, it's not loud like this. Nobody plays cards. The young master eats standing up, and the rest of us eat when he's done." },
        { n: "Across the lobby Jungwon was laughing at something Sunoo had said, head back, one hand over his mouth, as if he'd been caught at it." },
        { s: 'jay', f: 'neutral', t: "Look at him. Over there he doesn't laugh like that. Here he gets to be eighteen all day. I'm not telling him he's doing it. He'd stop." }
      ], else: [{ ifHeading: 'H', then: [
        { s: 'jay', f: 'neutral', t: "This is it. This is home. Just louder." },
        { s: 'jay', f: 'happy', t: "And worse croissants. And Sunoo's not allowed behind any counter. And nobody's got exams in the morning. Okay, it's better than home. Don't tell Heeseung." }
      ], else: [{ ifHeading: 'R', then: [
        { s: 'jay', f: 'neutral', t: "You'll miss this. Don't lie. Nobody gets seven idiots twice." },
        { s: 'jay', f: 'neutral', t: "Wherever you're going, I hope you get your own seven. Different idiots. Same idea." }
      ], else: [{ ifHeading: 'true', then: [
        { s: 'jay', f: 'neutral', t: "You get this one and the quiet one. Both. The loud table and the one where everybody waits." },
        { s: 'jay', f: 'happy', t: "Lucky. Seriously. Nobody gets both. You're getting both." }
      ], else: [
        { s: 'jay', f: 'neutral', t: "When we go, it's gonna be so quiet over here. You're gonna hear the fridge." },
        { s: 'jay', f: 'neutral', t: "Come sit in the lobby sometimes anyway. The desk lady'll like it. She'll pretend she doesn't." }
      ] }] }] }] },
      { choose: [
        { t: "(Take the last fish cake.)", notes: 3, then: [
          { n: "She went back to the table and took the last fish cake out of the broth while Niki was reaching for it, cleanly, and ate it, and Niki made a sound like a betrayed kettle." },
          { s: 'niki', f: 'surprised', t: "She took it. She TOOK it. Jay, she took the last one." },
          { s: 'jay', f: 'happy', t: "Yeah. She did. I raised her right." }
        ] },
        { t: "Thank you. For feeding everyone.", notes: 3, then: [
          { s: 'jay', f: 'neutral', t: "Somebody's gotta. Sunoo would just bake." },
          { s: 'jay', f: 'neutral', t: "...It's nice. Having a table. Don't make it a thing." }
        ] },
        { t: "(Help Heeseung count heads.)", notes: 2, then: [
          { n: "She helped Heeseung count heads. There were seven, plus her. He counted twice anyway, and then a third time, very quietly, mouthing the numbers, and when he got to the end of the third count he looked, for just a second, enormously relieved." }
        ] }
      ] },
      { n: "When she left, a little after nine, they were still arguing about whose turn it was to wash the pot. Sunghoon was giving a speech. From the front step she could hear it through the glass, and Jay's voice under it, flat and patient, saying *dude, pack it up*, and seven people laughing, four of them at something the other three would never get." }
    ] },

    { after: '1/16', title: '9: up to here', place: 'Iwatodai Dorm · Kitchen', time: 'Evening', music: 'tender', scene: [
      { n: "He'd figured it out. He told her so before he'd even taken his jacket off, standing in the kitchen doorway with a bag of groceries on each arm, while Koromaru lay across his feet and declined to move." },
      { s: 'jay', f: 'neutral', t: "I was cooking it like me. Measured. Every slice the same. That's my thing. That's not his thing." },
      { s: 'jay', f: 'neutral', t: "He measures the rice. Rice, he's exact, everybody says so. The ginger's however he feels that day. Nobody here agrees on the ginger. Fuuka says a thumb. Junpei says a lot. That's how you know." },
      { s: 'solar', f: 'neutral', t: "So how do you feel today?" },
      { s: 'jay', f: 'neutral', t: "Tired." },
      { s: 'jay', f: 'happy', t: "Lots of ginger, then." },
      { ifFlag: 'jay-steps', then: [
        { s: 'jay', f: 'neutral', t: "Don't talk me through it this time. You did last time. I want to know if it's in me or just in you." }
      ] },
      { n: "He cooked slower than she'd ever seen him cook. He washed the rice until the water ran clear and then didn't hold it up to the light. He cut the ginger thick and thin and thick again, by eye, and swore at himself under his breath, and left it. He didn't lift the lid. Twice his hand went toward it and twice he took it away and put it in his pocket instead, and stood there with his hand in his pocket, glaring at the pot, like a man waiting outside a door." },
      { n: "And the kitchen began to smell right. She couldn't have said how she knew. Something in it went into her chest and found a place it had been in before, ginger and broth and rain on shrine steps somewhere a long time ago in a different season, and sat down there." },
      { n: "Across the doorway, Koromaru stood up." },
      { n: "He stood up slowly, the way old dogs do, though he wasn't old, and stretched, front legs and then back legs, and came into the kitchen for the first time any of them had seen since October, his claws ticking on the tile, and sat down at Jay's feet, by the stove, and looked up." },
      { s: 'koromaru', f: 'neutral', t: "...Woof." },
      { s: 'jay', f: 'surprised', t: "..." },
      { s: 'jay', f: 'neutral', t: "Yeah. Hi. Yeah. I know. It's not him. I know." },
      { n: "His voice did something on the last word, and he turned to the stove, and stirred a pot that did not need stirring." },
      { choose: [
        { t: "It's right.", notes: 3, then: [
          { s: 'jay', f: 'neutral', t: "You haven't tasted it." },
          { s: 'solar', f: 'neutral', t: "I don't have to." },
          { n: "He looked at her, and at the dog, and then he got a spoon and handed it to her anyway, because he was who he was, and she tasted it, and it was." }
        ] },
        { t: "(Look at Koromaru.)", notes: 3, then: [
          { n: "She looked at the dog sitting by the stove with his tail flat on the tile and his eyes on the pot, and something in her throat closed and opened again, and she couldn't say anything for a minute, so she didn't." }
        ] },
        { t: "Is it right?", notes: 2, then: [
          { s: 'jay', f: 'neutral', t: "You tell me. I've never had his. I've only had mine." }
        ] }
      ] },
      { n: "Akihiko came down for water. He stopped in the doorway, where the dog wasn't any more, and stood there looking at the empty space on the floor for a long moment before he looked at the kitchen. Jay put a bowl on the counter in front of him without a word." },
      { n: "Akihiko ate standing up. He ate all of it. He washed the bowl himself and set it upside down on the rack, and stood with both hands on the edge of the sink, looking at the black window." },
      { s: 'akihiko', f: 'neutral', t: "...Yeah. That's it." },
      { n: "He went up the stairs fast, two at a time, the way he did in the mornings when he was late for roadwork, and didn't come back down." },
      { ifFlag: 'jay-truth', then: [
        { s: 'jay', f: 'neutral', t: "You told me it was wrong. You and Ken. Everybody else would've let me keep doing it wrong. I owe you for that. I'm not gonna say how much, it's embarrassing." }
      ], else: [
        { s: 'jay', f: 'neutral', t: "Ken told me it was wrong. Ten years old. Scariest food critic I ever met. I owe that kid a pot of something." }
      ] },
      { ifHeading: 'S', then: [
        { s: 'jay', f: 'neutral', t: "When I'm back, I'm gonna make this. Over there. For the kid. He eats anything, but he'd eat this slower." },
        { s: 'jay', f: 'neutral', t: "And I'll make some for the young master and he won't eat it, because he never eats, and I'll leave it on his desk, and in the morning the bowl'll be empty and he'll pretend he doesn't know how." }
      ], else: [{ ifHeading: 'H', then: [
        { s: 'jay', f: 'neutral', t: "I'm making this for the team. End of season. Instead of squid. Nobody throws up on the bus." },
        { s: 'jay', f: 'neutral', t: "I'll tell them it's mine. It's not. I'll know." }
      ], else: [{ ifHeading: 'R', then: [
        { s: 'jay', f: 'neutral', t: "Take it with you. The steps. Wherever." },
        { s: 'jay', f: 'neutral', t: "Nobody there's gonna know whose it is. You will. That's enough. That's what a recipe is, honestly. A thing one person knows whose it is." }
      ], else: [{ ifHeading: 'true', then: [
        { s: 'jay', f: 'neutral', t: "Make it in all of them. Every kitchen you've got." },
        { s: 'jay', f: 'happy', t: "That's a lot of rice. Somebody's gonna have to wash it. I nominate you three times." }
      ], else: [
        { s: 'jay', f: 'neutral', t: "It's yours now. Here. I'm just the guy who borrowed it for a while." },
        { s: 'jay', f: 'neutral', t: "Make it when he's back. Let him tell you what's wrong with it. He'll find something. That's the deal." }
      ] }] }] }] },
      { choose: [
        { t: "When he wakes up, come see him with me.", notes: 3, then: [
          { s: 'jay', f: 'neutral', t: "When he's up. Yeah." },
          { s: 'jay', f: 'neutral', t: "You don't bring a cook food when he can't taste it. That's like— you just don't." },
          { s: 'jay', f: 'neutral', t: "When he's up, I'll bring a thermos. He can tell me what's wrong with it to my face." }
        ] },
        { t: "He'd like you. I mean it this time.", notes: 2, then: [
          { s: 'jay', f: 'neutral', t: "He'd tolerate me. That's better. Liking's cheap." }
        ] },
        { t: "(Wash his pan. Hang it up. Handle out.)", notes: 3, then: [
          { n: "She washed his pan, the dented saucepan, and dried it and hung it on its hook, handle out, beside the good pot, and the two of them hung there side by side on the wall, one heavy and one cheap, and Jay looked at them for a while with his arms folded and didn't say anything at all." }
        ] }
      ] },
      { n: "At seven fifty-nine he went out the front door. Koromaru walked him to it, which he had never done, and stood on the mat, and watched him go down the steps, and then came back and lay down in the kitchen, by the stove, with his chin on his paws, facing the room." }
    ] },

    { after: '1/23', title: '10: the short list', place: 'Iwatodai Dorm · Front', time: 'Evening', music: 'tender', scene: [
      { n: "Seven fifty-seven on a Wednesday, the end of January, and the cold had a hard clean edge to it that made the streetlights look sharper than they were. The front step of the dorm. Jay with his jacket zipped to the chin and the containers in two bags at his feet, and his breath going up white, and no hurry in him at all, which was strange, because Jay had never once in two and a half months been anything but exactly on time." },
      { s: 'jay', f: 'neutral', t: "Got something for you." },
      { n: "He took it out of his inside pocket. Not the phone. An index card, plain white, a little bent at one corner where it had been in his jacket, and written on in his angry capitals, both sides, pressed hard into the card." },
      { n: "On the front, a recipe. Not the braise. His. Rice, day-old. Kimchi, sour, the older the better. Egg. Scallion. Sesame oil, a lot. Soy, a little. *For three in the morning. Any kitchen. Any life. Takes eight minutes. Don't measure anything.* And under that, underlined once, *I MEAN IT. DON'T MEASURE ANYTHING.*" },
      { s: 'jay', f: 'neutral', t: "That's the one I make for me. Nobody else gets that one. That's the whole list. Was the whole list." },
      { choose: [
        { t: "(Turn it over. Read the back.)", notes: 3, then: [
          { n: "On the back, at the top, a heading. PEOPLE I COOK FOR. And under it, a short column, crossed out and rewritten in places, as if it had been drafted. THE KID. THE YOUNG MASTER (MAKE HIM EAT IT). THE TEAM (END OF SEASON). JAKE (DON'T TELL JAKE). A DOG." },
          { n: "And at the bottom, the newest line, in the same hand, a little more careful than the others. *S.*" },
          { s: 'jay', f: 'neutral', t: "It's short. It's supposed to be short. Don't be weird about it." }
        ] },
        { t: "You're on my list too. Whatever my list is.", notes: 3, then: [
          { s: 'jay', f: 'neutral', t: "Yeah? What's on it?" },
          { s: 'solar', f: 'neutral', t: "I don't remember. I'll find out." },
          { s: 'jay', f: 'happy', t: "Put me near the top. Above Junpei. I'll know if you don't." }
        ] },
        { t: "This is the most you've ever said.", notes: 2, then: [
          { s: 'jay', f: 'neutral', t: "Don't get used to it." },
          { s: 'jay', f: 'neutral', t: "I wrote it down so I didn't have to say it. That's cheating. I know. Take it anyway." }
        ] }
      ] },
      { ifHeading: 'S', then: [
        { s: 'jay', f: 'neutral', t: "At home, when you're back at the house by the sea, I'm not gonna be able to come over. You know that, right? Not like this." },
        { s: 'jay', f: 'neutral', t: "There's rules over there about who stands in what kitchen. I'm the young master's man. There's doorways I don't go through." },
        { s: 'jay', f: 'neutral', t: "So that's the card. If you're hungry, make it. If you can't, call the old phone. I'll answer. I always answer that one. It's the only one I always answer." }
      ], else: [{ ifHeading: 'H', then: [
        { s: 'jay', f: 'neutral', t: "At home. When we're back." },
        { s: 'jay', f: 'serious', t: "I told Jungwon something. Right before all this. About you." },
        { s: 'jay', f: 'neutral', t: "It was true. I'd do it again." },
        { s: 'jay', f: 'sad', t: "...I'm a little sorry. That's all you get. You'll find out what. Be mad at me for one week. Max. Then come to the field. I'll be the one not missing." }
      ], else: [{ ifHeading: 'R', then: [
        { s: 'jay', f: 'neutral', t: "You're not gonna be in either of mine. So this is it. This card's the whole thing." },
        { s: 'jay', f: 'neutral', t: "Don't lose it. If you lose it, make it from memory. You've got the memory for it. Whatever else you don't have, you've got that." }
      ], else: [{ ifHeading: 'true', then: [
        { s: 'jay', f: 'neutral', t: "You'll be in both of mine. So you get two of me." },
        { s: 'jay', f: 'happy', t: "One that cooks and one that orders twelve boxes of chicken. Call whichever's closer. They're both gonna pick up." }
      ], else: [
        { s: 'jay', f: 'neutral', t: "We're going. You're not." },
        { s: 'jay', f: 'neutral', t: "So the card stays with you, and the list stays with me, and your name stays on it. Both of me. I'm not crossing anybody off for being in a different world. That's not a reason." }
      ] }] }] }] },
      { choose: [
        { t: "Sunday?", notes: 3, then: [
          { s: 'jay', f: 'neutral', t: "Sunday." },
          { s: 'jay', f: 'happy', t: "Every Sunday. Till they make me stop. Somebody'll have to make me stop." }
        ] },
        { t: "(Hug him.)", notes: 3, then: [
          { n: "She hugged him. He went stiff for a second, the containers rattling in the bags at his feet, his arms out at his sides like a man trying not to drip on a carpet, and then he put one arm round her shoulders, briefly, hard, the way he'd hit Jungwon on the arm at Yeobo's, and let go." },
          { s: 'jay', f: 'flustered', t: "Okay. Okay. Yeah. That's— okay. Mitsuru's watching." },
          { n: "Mitsuru was not watching. Mitsuru was at the lounge window turning a page in her folder with tremendous concentration." }
        ] },
        { t: "Go. It's seven fifty-nine.", notes: 2, then: [
          { s: 'jay', f: 'neutral', t: "I know what time it is. I always know what time it is." },
          { s: 'jay', f: 'neutral', t: "...Thanks. For the kitchen. I know it wasn't yours to give me. You gave it to me anyway." }
        ] }
      ] },
      { n: "He picked up the bags and went down the steps at seven fifty-nine, and at the bottom he turned round, walking backward a few steps toward the station with the containers swinging, and lifted his chin at her, once, the way boys do across a parking lot, and then turned again and went." },
      { n: "She stood on the step with the card in her hand until her fingers went numb. Behind her, through the door, she could hear Koromaru's claws coming down the hall, ticking on the floor, and stopping by her ankles, and the warm weight of him leaning against the back of her legs. She didn't go in for a while. She read the back of the card again. It was a very short list. She was on it." }
    ] }
  ],
  afterMax: [
    { title: 'eight minutes', place: 'Iwatodai Dorm · Kitchen', time: 'Evening', noFlags: ['shinji-awake'], scene: [
      { n: "He made her make it. The three-in-the-morning one, at half past six in the evening, which he said didn't count but would have to do, and he stood behind her at the stove with his arms folded and his chin on her shoulder practically, saying nothing, which was worse than saying something." },
      { s: 'jay', f: 'neutral', t: "You're measuring." },
      { s: 'solar', f: 'neutral', t: "I'm not." },
      { s: 'jay', f: 'neutral', t: "You're measuring with your face. I can see you doing it." },
      { choose: [
        { t: "(Pour the sesame oil without looking.)", notes: 3, then: [
          { n: "She poured without looking. Too much. The kitchen filled up with it, toasted and dark, and Jay breathed in and closed his eyes." },
          { s: 'jay', f: 'happy', t: "Yeah. That's it. That's too much. That's exactly the right too much." }
        ] },
        { t: "How much soy?", notes: 2, then: [
          { s: 'jay', f: 'neutral', t: "Some." },
          { s: 'solar', f: 'neutral', t: "How much is some?" },
          { s: 'jay', f: 'neutral', t: "Less than a lot. More than none. You know. You've always known. Just do it." }
        ] }
      ] },
      { n: "It took eight minutes. It was very good. They ate it out of the pan with two spoons, standing up, while Koromaru sat by the stove with enormous patience and Junpei hovered in the doorway pretending he'd come down for something else." }
    ] },
    { title: 'the other drawer', place: 'Iwatodai Dorm · Kitchen', time: 'Evening', noFlags: ['shinji-awake'], scene: [
      { n: "Jay had the drawer by the stove open. Not his drawer. The other one, the one he'd never once put anything into. He was looking down into it with an expression she hadn't seen on him before, something between a detective and a man who has found someone else's handwriting in his notebook." },
      { s: 'jay', f: 'neutral', t: "Somebody used this. Last night. Late." },
      { n: "The knife lay in the drawer where it always lay. Clean. Dried. The handle wiped. Set down exactly square to the edge of the drawer, as if somebody had put it back with a ruler." },
      { s: 'jay', f: 'neutral', t: "Dried it with a towel. Put it back square. Only one guy I know puts things back square." },
      { s: 'jay', f: 'happy', t: "He walks over here at one in the morning to borrow another cook's knife, and puts it back like he's returning it to a museum, and he thinks nobody knows." },
      { choose: [
        { t: "Are you going to say something to him?", notes: 2, then: [
          { s: 'jay', f: 'neutral', t: "Nah." },
          { n: "But he took a strip of masking tape off the roll by the fridge and wrote on it in capitals and stuck it to the inside of the drawer, where only someone opening it would see. DRY THE HINGE TOO. — J." }
        ] },
        { t: "(Close the drawer. Gently.)", notes: 3, then: [
          { n: "She closed it. Jay watched her do it and nodded, as if she'd answered a question he hadn't asked, and went back to his own knife, the cheap one, in the other drawer." },
          { s: 'jay', f: 'neutral', t: "Yeah. It's not our business. It's his and that guy's." }
        ] }
      ] }
    ] },
    { title: 'the list', place: 'Kirijo Guesthouse · Front', time: 'Evening', noFlags: ['shinji-awake'], scene: [
      { n: "He was sitting on the guesthouse front step with a pen and the back of a receipt, writing a shopping list in capitals for a week that was going to be one of the last ones, and he didn't say so, and neither did she." },
      { s: 'jay', f: 'neutral', t: "Sit. Help. What does Ken eat? He says everything. Nobody eats everything." },
      { ifHeading: 'S', then: [
        { s: 'jay', f: 'neutral', t: "Over there the shopping's different. You go to the market at five in the morning and you don't write anything down. The guys at the stalls know what the house wants." },
        { s: 'jay', f: 'neutral', t: "I'm gonna miss writing it down. That's weird. Nobody misses lists." }
      ], else: [{ ifHeading: 'H', then: [
        { s: 'jay', f: 'neutral', t: "Back home, Jake does the list. It's always just CHICKEN in capitals, and then hearts. Every week. Twelve hearts." },
        { s: 'jay', f: 'happy', t: "I'm gonna let him keep doing it. I'll just go to the store with a second list in my pocket. He doesn't need to know." }
      ], else: [{ ifHeading: 'R', then: [
        { s: 'jay', f: 'neutral', t: "Where you're going, write your own lists. Don't let anybody else do it for you. You'll end up with twelve hearts and no rice." }
      ], else: [
        { s: 'jay', f: 'neutral', t: "Whatever happens. Write it down. Lists are how you know you were somewhere." }
      ] }] }] },
      { choose: [
        { t: "Ken likes the egg ones. With the sweet soy.", notes: 3, then: [
          { n: "Jay wrote it down. KEN — EGG, SWEET SOY. And underlined it, because it was hers." }
        ] },
        { t: "(Write something on the list yourself.)", notes: 2, then: [
          { n: "She took the pen and wrote, at the bottom, in her own small round handwriting that looked nothing like his, *the right can.* He read it, and didn't say anything, and folded the receipt in half and put it in his pocket with the old phone." }
        ] }
      ] }
    ] },
    { title: 'one cigarette', place: 'Kirijo Guesthouse · Roof', time: 'Night', noFlags: ['shinji-awake'], scene: [
      { n: "The guesthouse roof again, the gravel and the water tank and the sticky door, and the whole of Iwatodai below them going quiet for the night one window at a time, and the cold, which had got colder." },
      { ifFlag: 'jay-cig', then: [
        { s: 'jay', f: 'neutral', t: "You gave it back, that time. On the Sunday. I didn't notice it was gone, the whole two days." },
        { s: 'jay', f: 'neutral', t: "That's never happened. I notice it's there every five minutes. I didn't notice once." }
      ], else: [
        { s: 'jay', f: 'neutral', t: "People ask why I keep it. Nobody ever asks why it's this one." }
      ] },
      { choose: [
        { t: "Why this one?", notes: 3, then: [
          { s: 'jay', f: 'neutral', t: "It's the one I didn't smoke." },
          { s: 'jay', f: 'neutral', t: "Every other one, I smoked. This one, I didn't. It's the only proof I've got." }
        ] },
        { t: "(Sit with him. Watch the windows go out.)", notes: 3, then: [
          { n: "They watched the windows go out. He counted them under his breath, the way Heeseung counted heads, and lost count at thirty, and started again, and she didn't tell him he'd lost count, and he didn't tell her he knew." }
        ] }
      ] }
    ] },
    { title: 'thermos', place: 'Tatsumi Memorial Hospital · 3F Ward', time: 'After School', music: 'tender', flags: ['shinji-awake'], noFlags: ['jay-met-shinji'], scene: [
      { n: "Jay stood in the hallway outside the ward for a full minute first, with a thermos under his arm wrapped in a guesthouse towel, standing very straight, the way he stood in the tunnel before a game, she imagined, if she'd ever seen him play, which she hadn't, in this life." },
      { n: "Then he went in. Shinjiro was in the chair by the window, a blanket over his knees, thinner than anyone had wanted him to be. His eyes came round slowly, to the door, to Solar, to the stranger with the thermos, and stayed on the stranger, flat and unreadable and very much awake." },
      { s: 'jay', f: 'neutral', t: "Jay. I've been using your kitchen." },
      { s: 'shinjiro', f: 'neutral', t: "...Heard." },
      { s: 'jay', f: 'neutral', t: "Didn't touch the pot." },
      { s: 'shinjiro', f: 'neutral', t: "...Heard that too." },
      { n: "Jay unwrapped the thermos and unscrewed it and poured, and held the cup out, and waited. It was the broth, only the broth, from the braise, strained clear, the rest of it in a container in his bag for the day they'd let him have it. The room filled up with ginger. Shinjiro took the cup in his left hand and got it to his mouth, slowly, refusing all help with his eyes, and tasted it, frowning at the middle distance as if it had said something about his mother." },
      { s: 'shinjiro', f: 'neutral', t: "...Salt." },
      { s: 'jay', f: 'neutral', t: "Not enough or too much?" },
      { s: 'shinjiro', f: 'neutral', t: "..." },
      { s: 'shinjiro', f: 'happy', t: "...Yes." },
      { s: 'jay', f: 'happy', t: "Fair." },
      { n: "It took Solar a second to understand that she'd just heard a joke, and another second to understand that it was the kind of joke only two cooks could tell each other, and that neither of them was going to explain it to her, ever." },
      { choose: [
        { t: "He made it every Saturday until it was right.", notes: 3, flag: { 'jay-met-shinji': true }, then: [
          { n: "Shinjiro looked at Jay for a long moment over the cup. Jay looked at the window." },
          { s: 'shinjiro', f: 'neutral', t: "...Ginger's right." },
          { n: "That was all. Jay nodded once at the window, as if it had said it." }
        ] },
        { t: "(Step back to the window. Let them have it.)", notes: 3, flag: { 'jay-met-shinji': true }, then: [
          { n: "She went to the window and looked out at the bay going gray, and behind her nobody said anything for a long time, and the not saying went back and forth between them like a ladle passed handle first, and she didn't turn round." }
        ] },
        { t: "Is it right?", notes: 2, flag: { 'jay-met-shinji': true }, then: [
          { s: 'shinjiro', f: 'neutral', t: "...Close." },
          { s: 'jay', f: 'neutral', t: "Close is good. Close is a lot." }
        ] }
      ] },
      { n: "When they left, Jay stood in the hallway with the empty thermos under his arm for a while, looking at nothing, at the wall, at the little sign about visiting hours, the way you'd stand at the edge of a field after a game you'd actually won." },
      { s: 'jay', f: 'neutral', t: "He's gonna want his kitchen back." },
      { s: 'jay', f: 'happy', t: "Good. Good. It's his. I'll just be the guy in the doorway." }
    ] },
    { title: 'thermos, again', place: 'Tatsumi Memorial Hospital · 3F Ward', time: 'After School', music: 'tender', flags: ['shinji-awake', 'jay-met-shinji'], scene: [
      { n: "The second time, Jay didn't stand in the hallway first. He came straight in with the thermos under his arm, wrapped in a guesthouse towel, and nodded at the bed, and the bed nodded back, barely, which from that bed, Solar had been told, was a great deal." },
      { s: 'shinjiro', f: 'neutral', t: "...You again." },
      { s: 'jay', f: 'neutral', t: "Me again." },
      { n: "Jay poured. Shinjiro drank it, all of it, slowly, looking out of the window at the bay, and handed the cup back without a word, and Jay screwed it onto the thermos and wrapped the towel round it again with great care, as if the towel were the part that mattered." },
      { choose: [
        { t: "(Sit on the end of the bed and stay a while.)", notes: 3, then: [
          { n: "She stayed. Nobody said very much. It was the best hour of the week." }
        ] },
        { t: "Same time Saturday?", notes: 2, then: [
          { s: 'jay', f: 'neutral', t: "He doesn't get a vote." },
          { s: 'shinjiro', f: 'neutral', t: "...Saturday." }
        ] }
      ] }
    ] }
  ]
});
