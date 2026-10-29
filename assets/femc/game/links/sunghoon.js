/* Sunghoon · Strength (XI). Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines
   in scene.js. Searcher (Hoax · strangers), friendship only (romance: null): he never flirts with Solar (the flower is Cherry's).
   Park Sunghoon is one person carrying two lives, like Jungwon (Kat's ruling, the trio batch):
   - HOAX (canon at Ch 99): eighteen, Hanlim, Jungwon's council; football in the fall and, in secret, figure skating ("not my most
     masculine hobby"); the flirt with the "woman killer" smile who hasn't looked at another girl since Cherry; refers to himself in
     the third person; "a reincarnated prince"; signs notes "- s"; chat handle princehoon, Instagram princesunghoon (the game's
     council chat uses the IG set, as in jungwon.js rank 3); has a car at home (cherry.js rank 4); planning a promposal that will
     be "the most impressive thing". Not official with Cherry; his "soon" stays pending. Never staged here: he decides it has to be
     done at home, properly (rank 6, the 2/14 holiday).
   - strangers (pickup point, deep winter): twenty-three, Jungwon's right hand. Kept oblique: the chair he stands behind, the
     door he watches, "the young master" (S branch, rank 8), "Jungwon-ah" in private (rank 8), the old folding phone nobody texts
     on (rank 2, rank 10 S), the thirty-meter yellow nylon rope he puts in every car and the yellow crane-men's ear defenders in his
     boot (rank 9), a menthol only when leaving a room (ranks 4 and 9), Shin Seung-hun sung like a tax form (rank 7), a precise
     hand with a small knife shown only on an apple (rank 8), hating the word "figure skater" (rank 5, S branch). Never named: the
     war, anyone dead or in danger, his old coach or who drove him to the rink, what the houses are to each other.
   - The two-lives thing is said plainly once (rank 2: eighteen and twenty-three, two phones, things he does the same in both).
   - The one acknowledgment (rank 5, the December rink in Seaside Park from cherry.js rank 5): he lands a jump he shouldn't be
     able to land, looks at his own left leg, and stands there, and doesn't explain. Never named, never repeated.
   - Haechan (rank 4, gated ifFlag arrived-haechan): the other house's man, his mirror; cold, few words; never friends.
   - Kat's fun interactions: Sunghoon behind Jungwon's chair and Jungwon asking him, very politely, to sit (ranks 2, 7, 8, afterMax
     'the file'); the two of them the only people who know both of each other (rank 2). Sunghoon as Junpei's deadpan straight man
     (rank 3's bet, rank 7's karaoke, living routines).
   - The quiet four (Jungwon, Jay, Sunghoon, Niki) inside the loud seven: hangout 2 (Jay and Niki know why he watches doors).
   HOAX telling order: before a5-call-hoax nobody says Solar is Jungwon's girlfriend; rank 1 flinches on "rule one", rank 6
   mentions it lightly only inside { ifEvent: 'a5-call-hoax' }. Time back home is never stated.
   Two worlds by heading: ranks 3-10 each have one key passage branched S / H / R / true / else (stay, bad); afterMax 'the door' too.
   Branches hold lines only, never choices; every rank's best answers total 6 notes on every path.
   Flags this link sets (all by choices in this file) and where they're read:
     shoon-door        r1 she asks what that was, with the door; read r10.
     shoon-sit         r2 she pulls out a chair for him; read r8, afterMax 'the file'.
     shoon-bet-hoon / shoon-bet-junpei  r3 her ruling on Junpei's bet; both read r7.
     shoon-secret      r5 "I didn't see anything."; read r9, afterMax 'night skate'.
     shoon-sign        r6 she draws the promposal sign; read afterMax 'soon'.
     shoon-walked      r9 she walks with him instead of letting him leave; read r10.
   Story flags read: arrived-haechan (r4), arrived-cherry (r2, r6, r10, afterMax 'soon' via flags); events: a5-call-hoax (r6).
   Faces: sunghoon flustered, neutral, sad, serious, surprised only (NO happy: his smile is narrated). Others only from
   portraits/index.js (cherry no flustered; niki no flustered; yukari no happy; koromaru no surprised; mitsuru no flustered).
   Living world (afterRank texts, holidays 1/11 and 2/14, routines, run-ins): data/living-sunghoon.js. He texts lowercase
   except his own name, which is always "Park Sunghoon"; Solar texts lowercase.
   Housing: the Kirijo guesthouse by the station (FEMC_GAME_LODGING), the room next to Jungwon's (cherry.js rank 8). The dorm is
   a visit; visitors are out by eight on school days (rank 4 walks her home at seven fifty-two).
   Arrival: a4-yeobos (11/7), named in storyEvents. Rank 1 is the first visit after it: no "next day", no replay of Yeobo's.
   Arcana Strength (XI) (writer's pick, for Kat to confirm): the hand that holds the lion's jaw closed; quiet controlled force;
   loyalty. Searchers never close: afterMax plays in person to the end.
   Writer inventions: the window table facing the door at Yeobo's; the rental booth man who lets him skate after closing; the
   Hanlim football hoodie as "camouflage" on the ice; Junpei's bet (no third person for a whole bowl) and Junpei's takeout-box
   crown (living); the apple rabbits for Jungwon; the hardware shop's rope; the fan club of Gekkoukan girls outside Yeobo's
   (living-texts.js already has Cherry asking why he has one); the third-person-free essay on Gatsby (hangout). */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'sunghoon', name: 'Park Sunghoon', short: 'Sunghoon', arcana: 'Strength', numeral: 'XI', from: 'Hoax · strangers',
  kind: 'searcher', world: 'HS', romance: null,
  starts: '11/8', gate: { H: 4, S: 3 }, storyEvents: ['a4-yeobos'],
  home: { area: 'strip', spot: "Yeobo's Cafe", slot: 'evening', days: [1, 3, 5, 6],
          hint: "Evenings at Yeobo's, at the window table that faces the door. Sunoo says he's “helping” at the register." },
  approach: "At the window table in Yeobo's, the one that faces the door, a boy with a face like something carved on purpose sits very straight beside a single flower in a vase, ignoring a cooling coffee and looking up every time the bell goes, as if one of these times it's going to be the right person.",
  cast: { heeseung: 'Heeseung', jake: 'Jake' },
  invite: {
    ask: [
      "Park Sunghoon is at the window table. the window table is lonely. so is the window",
      "yeobo's. 7. sunoo says i can't sit here all night without ordering. come and order something so i can sit here all night",
      "i require a witness. junpei has challenged me again",
      "free tonight? i'm told i'm excellent company. i'm the one who told me",
      "the fan club is outside again. i need someone to walk me past them with dignity",
      "come to yeobo's. jungwon hasn't eaten. i can't make him. you can",
      "a prince requests your presence. a prince is bored. come",
      "the usual table. bring nothing. i've already ordered for you. it's the croissant. it's always the croissant",
      "the flower's fresh today. it isn't for you. come and look at it anyway",
      "i've written a speech. i need an audience of one. you're the one. - s"
    ],
    ok: ["good. the table and i will be waiting. mostly the table", "excellent. Park Sunghoon is pleased", "7. don't be late. i'll know. i watch the door", "good. i'll ask sunoo to warm you a croissant. he'll ignore me. warm it yourself"],
    no: ["understood. the prince endures", "fine. the window table and i will be very brave about it", "another night. i'll be in the same chair. i'm always in the same chair", "noted. tragic. carry on"]
  },
  hangouts: [
    [
      { n: "Sunghoon had been allowed behind the register again. Nobody would say who had allowed it. He was in an apron with YEOBO'S on it in looping hand-lettering, leaning on one elbow by the till, and the line, which was four girls in Gekkoukan uniforms and one confused salaryman holding a newspaper, was not moving at all, and nobody in it seemed to mind." },
      { s: 'sunghoon', f: 'neutral', t: "One hot chocolate. On the house. Not literally on the house. Sunoo, put it on my tab." },
      { s: 'sunoo', f: 'serious', t: "You don't HAVE a tab, Sunghoon. You've never had a tab. You have a debt." },
      { s: 'sunghoon', f: 'neutral', t: "Then put it on my debt. Park Sunghoon honors his debts. Eventually. In a previous life I owned land." },
      { choose: [
        { t: "(Take over the register.)", notes: 3, stat: { proficiency: 1 }, then: [
          { n: "She went round the counter and nudged him off the till with her hip, and the line moved in about forty seconds, four hot chocolates and one coffee, black, and the salaryman bowed to her as he left as if she'd personally rescued him from a burning building." },
          { s: 'sunghoon', f: 'serious', t: "You've broken the spell. They were enjoying the spell." },
          { s: 'sunoo', f: 'happy', t: "I was enjoying the money!" }
        ] },
        { t: "(Order something. Make him make it.)", notes: 2, then: [
          { n: "He made it with enormous ceremony and the attention of a watchmaker, and slid it across the counter, and the foam on top had been drawn into something that he said was a heart and that was, unmistakably, a crown." },
          { s: 'sunghoon', f: 'neutral', t: "It's a heart. Royal hearts look like that. Drink it before it abdicates." }
        ] },
        { t: "Sunoo, I'll pay his debt.", notes: 2, then: [
          { n: "Sunoo pulled a sticky note off the side of the till and handed it to her. It was a long sticky note. It had been folded once to fit more on it. Below Junpei's section, which was longer, there was a section headed PRINCE, and at the bottom of that, in Sunoo's round, despairing hand, *one (1) flower vase, broken, during a bow.*" },
          { s: 'solar', f: 'neutral', t: "...Maybe next week." },
          { s: 'sunghoon', f: 'neutral', t: "A wise woman. Debts are better aged. Like wine. Or princes." }
        ] }
      ] }
    ],
    [
      { n: "Niki and Jay had the booth at the back, one plate of fries between them and a war going on over it that neither of them would admit was a war, and Sunghoon had the window table, as ever, and was looking at the door, as ever, and then all three of their phones went at once, and Solar, who was standing between them with a tray, got to read Niki's over his shoulder." },
      { phone: [
        { from: 'niki', t: "rikiniki: hoon is staring at the door again" },
        { from: 'jay', t: "parkjay: hes 4 feet away from u. say it out loud" },
        { from: 'niki', t: "rikiniki: no its funnier in here" },
        { from: 'sunghoon', t: "princesunghoon: Park Sunghoon can see you both" },
        { from: 'niki', t: "rikiniki: whipped" },
        { from: 'jay', t: "parkjay: 💀" }
      ], contact: 'jungwon is mean' },
      { s: 'niki', f: 'happy', t: "He looks every time it goes. Every single time. She's not even coming, bro. You're in love with a door." },
      { choose: [
        { t: "He's not waiting for anyone. He just watches doors.", notes: 3, then: [
          { n: "It was strange, what it did. Niki stopped with a fry halfway to his mouth. Jay looked up. The two of them looked at each other across the plate, very fast, a look that went somewhere she couldn't follow and came back again, and for a second the booth was a lot quieter than a booth with Niki in it had any right to be." },
          { s: 'jay', f: 'neutral', t: "Yeah. He does." },
          { n: "And then Niki stole the last fry and Jay hit him for it, and the booth was loud again, and Sunghoon, at the window, hadn't turned round once, and had heard all of it." }
        ] },
        { t: "(Steal one of their fries.)", notes: 2, then: [
          { s: 'niki', f: 'surprised', t: "THIEF. Jay. Jay, she's a thief." },
          { s: 'jay', f: 'neutral', t: "You ate a customer's croissant on the first day we got here." },
          { s: 'niki', f: 'serious', t: "That was different. That was an emergency." }
        ] },
        { t: "So which one of you is next?", notes: 3, then: [
          { s: 'niki', f: 'serious', t: "Never. Me? Never. I'm too young. I mean... I'm not young. I'm the right age. I'm the exact right age. Stop looking at me like that." },
          { s: 'jay', f: 'happy', t: "What age is that, Niki?" },
          { s: 'niki', f: 'neutral', t: "The right one." }
        ] }
      ] }
    ],
    [
      { n: "She'd had a theory for a week, and on a quiet Wednesday she tested it. She asked Sunoo, in a whisper over the pastry case, to unhook the little bell from over the door and ring it from behind the counter, and Sunoo agreed with an alarming speed that suggested he'd wanted to do it for years." },
      { n: "The bell rang. Sunghoon, at the window table, turned a page of his book and did not look up." },
      { s: 'sunghoon', f: 'neutral', t: "That's not the door. The door has a draft. That came from behind the counter, and nobody's coat came in with it." },
      { choose: [
        { t: "How did you know?", notes: 3, then: [
          { s: 'sunghoon', f: 'neutral', t: "I always know. It's very tiring. Don't tell anyone or they'll want me at parties." },
          { n: "He said it lightly, and turned another page, and she noticed he hadn't read the last one." }
        ] },
        { t: "Sunoo. Again.", notes: 2, then: [
          { n: "Sunoo rang it again, gleefully, and at exactly that moment the real door opened and a woman came in with a pram, and Sunghoon's head turned to the real door before the real bell had finished, as if the other one had never rung at all." },
          { s: 'sunoo', f: 'surprised', t: "That's not FAIR." }
        ] },
        { t: "(Go and open the real door yourself. An inch. Very quietly.)", notes: 3, then: [
          { n: "She went to the door and opened it an inch, slowly, holding the bell still with her other hand so it wouldn't make a sound, and his head turned before the cold reached the table. She closed it again." },
          { s: 'solar', f: 'neutral', t: "Satisfied?" },
          { s: 'sunghoon', f: 'neutral', t: "No. Now I'm going to watch you, too. That's two things. Princes are only issued one pair of eyes." }
        ] }
      ] }
    ],
    [
      { n: "There were six girls in Gekkoukan uniforms outside the window with their noses nearly on the glass, and Sunoo had taped a piece of paper to the inside of it at their eye level that said, in marker, PLEASE DO NOT FEED THE PRINCE." },
      { n: "Sunghoon bowed to them through the glass, slowly, from the waist, hand over his heart. A sound came through the window like a kettle. Sunoo put his face in his hands behind the counter." },
      { s: 'sunghoon', f: 'neutral', t: "They were there before I did anything. Before I was famous here. They just turned up. Fan clubs are like weather." },
      { choose: [
        { t: "Go out and tell them about Cherry.", notes: 3, then: [
          { s: 'sunghoon', f: 'flustered', t: "I did. On Tuesday. Very nobly. They asked who she was, so I described her. For some time." },
          { s: 'sunghoon', f: 'neutral', t: "They started a fan club for her too. Hers is bigger. Hers has a newsletter." }
        ] },
        { t: "(Pull the blind down.)", notes: 2, then: [
          { n: "She pulled the blind. A long collective groan came through the glass, like an audience at a power cut." },
          { s: 'sunghoon', f: 'neutral', t: "Cruel. Necessary. Park Sunghoon forgives you." }
        ] },
        { t: "Do you like it? Being looked at like that?", notes: 3, then: [
          { s: 'sunghoon', f: 'neutral', t: "...In one place it's my job not to be looked at at all." },
          { s: 'sunghoon', f: 'neutral', t: "Here I'm looked at constantly. It's restful. You'd think it'd be the other way round." }
        ] }
      ] }
    ],
    [
      { n: "He was writing an essay. Longhand, on loose-leaf, at the window table, with a fountain pen he must have bought at the mall, because nobody's pockets had come through with anything in them, and he'd titled it, in his backward-leaning prince's hand, *The Great Gatsby: A Reading.*" },
      { s: 'sunghoon', f: 'neutral', t: "There'll be English when I get back. There's always English. Park Sunghoon will not fail English because of a dimension." },
      { s: 'sunghoon', f: 'neutral', t: "Jungwon says I have to call it *The Great Gatsby.* Not *Gatsby.* He corrected Cherry once in the cafeteria and she threw a fork." },
      { choose: [
        { t: "What's your thesis?", notes: 3, then: [
          { s: 'sunghoon', f: 'neutral', t: "He should have gone to the party himself. Instead of throwing it and standing at the window. That was the whole problem. Waiting for someone to come through the door." },
          { n: "He said it and then he heard it, and put the pen down, and looked at the door of Yeobo's, and looked back at the paper, and didn't write anything for a while." }
        ] },
        { t: "(Proofread it.)", notes: 3, then: [
          { n: "She read it. It was good, startlingly good, and every third sentence began *Park Sunghoon would argue,* and she circled every one in pencil, and he watched her do it with the face of a man watching his estate being partitioned." },
          { s: 'sunghoon', f: 'neutral', t: "Leave one. Leave one, as a treat." }
        ] },
        { t: "You're doing homework. In another universe.", notes: 2, then: [
          { s: 'sunghoon', f: 'neutral', t: "Exams are at eight. Somewhere. They always are. You can't trust a dimension to cancel them." }
        ] }
      ] }
    ]
  ],
  ranks: [
    { after: '11/11', title: '1: the window table', place: "Iwatodai Strip · Yeobo's Cafe", time: 'Evening', music: 'joy', scene: [
      { n: "Yeobo's at seven in the evening was a lit box of butter and steam on a dark street, the windows fogged gold from the inside, the pachinko place next door shuttered and the ramen shop on the other side breathing out onto the pavement, and the little bell over the door was having a busy night. Every time it went, the boy at the window table looked up." },
      { n: "He had the table that faced the door. Of course he did. He sat at it the way some people sat for portraits, very straight, one ankle on one knee, a coffee going cold at his elbow, and in a small glass vase in front of him there was a single flower he had apparently brought himself, because Yeobo's vases held sugar packets." },
      { s: 'sunoo', f: 'happy', t: "He's *helping.* That's what he tells people. He helped at the register for nine minutes on Tuesday and three girls from your school cried." },
      { s: 'sunghoon', f: 'neutral', t: "Two of them cried. The third had something in her eye. Park Sunghoon doesn't take credit for allergies." },
      { s: 'sunoo', f: 'serious', t: "He takes credit for the weather, Solar." },
      { s: 'sunghoon', f: 'neutral', t: "Only the good weather." },
      { n: "He stood when she came to the table, the whole long elegant unfolding of it, and bowed, not as deeply as the first day, and pulled out a chair for her. Not the one facing the door. The one across from it, with its back to the room. Then he sat back down in his own, as if that had been decided long before either of them was born." },
      { s: 'sunghoon', f: 'neutral', t: "Solar. You found me. People usually do. It's the flower. It works like a lighthouse." },
      { n: "She hadn't meant to find him. She'd come in for a croissant and Sunoo had pointed. She sat anyway, because her body had sat at a table with this boy before, somewhere, and it knew where its elbows went." },
      { n: "Then the bell went behind her." },
      { n: "She watched it happen to his face. It took less than a second and it took all of him. The prince came off him like a coat dropped on a floor, and what was underneath was pale and flat and absolutely still, his eyes on the door before his head had moved, reading whoever had come in from the shoes up, the hands first, the way you'd count something you needed to count fast. A boy with a crate of milk. Sunoo said *oh, thank you, round the back,* and the boy went round the back." },
      { n: "And Sunghoon picked up his cold coffee and was a prince again, so completely that she wondered for a second if she'd made the other one up." },
      { choose: [
        { t: "What was that?", notes: 3, flag: { 'shoon-door': true }, then: [
          { s: 'sunghoon', f: 'neutral', t: "What was what." },
          { s: 'solar', f: 'neutral', t: "Your face. When the door went." },
          { s: 'sunghoon', f: 'neutral', t: "Park Sunghoon has a great many admirers. One likes to be ready." },
          { n: "He said it beautifully. Then, a beat later, flatter, to the coffee instead of to her, in a voice with no prince in it at all, he added something else." },
          { s: 'sunghoon', f: 'serious', t: "That's the version for the fan club. The other version doesn't have a speech." }
        ] },
        { t: "(Turn round and look at the door yourself.)", notes: 2, then: [
          { n: "She turned. The door, the bell still trembling on its spring, the dark street, nobody. When she turned back he was watching her with an expression she couldn't read, interested and very slightly careful, like a man who'd just watched somebody else do his job." },
          { s: 'sunghoon', f: 'neutral', t: "You check a door like somebody taught you to. Interesting. Park Sunghoon will think about that later. In the bath." }
        ] },
        { t: "Expecting someone?", notes: 3, then: [
          { s: 'sunghoon', f: 'flustered', t: "Not tonight. Not yet." },
          { n: "He touched the flower in the vase, one fingertip on one petal, and turned it a quarter inch so it faced the door." },
          { s: 'sunghoon', f: 'neutral', t: "This isn't for you, by the way. I say that with enormous respect. It's for Cherry Kim. When she's here, it's hers. Until then it's on loan to the vase." }
        ] }
      ] },
      { n: "She didn't know him. She'd been told who he was, the day the booth emptied onto Jungwon, and the name had gone into her and found nothing to hold on to and slid out again. He seemed to know it. He didn't seem to mind. He told her again anyway, the way you'd hand someone back a coat they'd left at your house." },
      { s: 'sunghoon', f: 'neutral', t: "Park Sunghoon. Hanlim. Football in the fall. Something in the winter that we don't discuss. The most charming man on the council, which isn't difficult. You've met the council." },
      { s: 'sunghoon', f: 'neutral', t: "Also a reincarnated prince. Joseon. I don't remember any of it, so you and I already have something in common." },
      { choose: [
        { t: "Which prince?", notes: 3, then: [
          { s: 'sunghoon', f: 'neutral', t: "Unclear. A handsome one. The records were lost in a flood. Very tragic. I've made my peace with it." },
          { s: 'solar', f: 'happy', t: "That's convenient." },
          { s: 'sunghoon', f: 'neutral', t: "History usually is, for princes." }
        ] },
        { t: "You talk about yourself in the third person.", notes: 2, then: [
          { s: 'sunghoon', f: 'neutral', t: "Park Sunghoon is aware." },
          { n: "He waited for her to laugh. When she did, he looked out of the window with the faint, satisfied air of a man who'd been proved right about something small and expected to be proved right about something larger later." }
        ] },
        { t: "(Steal a sip of his coffee.)", notes: 3, then: [
          { n: "She reached across and took it and drank, and it was cold and far too sweet, and he watched her do it without moving a muscle." },
          { s: 'sunghoon', f: 'surprised', t: "...You did that at home. Exactly that. At our table. You'd take Jungwon's and he'd just let you, he'd sit there and let you, and Niki would say—" },
          { n: "He stopped. He put the cup down, squared it on its saucer, and looked at it." },
          { s: 'sunghoon', f: 'serious', t: "Rule one. I didn't say anything. Park Sunghoon is a vault. The vault is closed for the evening." }
        ] }
      ] },
      { n: "At ten to eight the bell went again, and his eyes went to the door again and came back again, and this time she watched him notice her watching, and neither of them said a word about it. When she stood to go he stood too, because apparently he did that, and when she got to the corner by the station she found a napkin in her coat pocket that hadn't been there when she came in, folded once, in a handwriting that leaned back like it was having its picture taken." },
      { n: "*Park Sunghoon was very gracious this evening. You were adequate. Come again. - s*" }
    ] },

    { after: '11/18', title: '2: behind the chair', place: 'Kirijo Guesthouse', time: 'Evening', music: 'tender', scene: [
      { n: "The guesthouse lobby at half past six smelled of floor polish and the heater and somebody's instant miso, and at the low table under the lamp Jungwon was doing her calculus. Not for her. With her, he'd said, very politely, in the tone that meant for her. She had the workbook. He had the pencil. He was holding it the way you'd hold something you were trying very hard not to take off another person." },
      { n: "And behind his chair, standing, arms folded, was Park Sunghoon." },
      { n: "He wasn't doing anything. He was standing a half step behind Jungwon's left shoulder, where, she worked out after a while, he could see the front door and the stairs and the hall to the kitchen without moving his head, and he'd been standing there since she arrived, and showed no sign of ever stopping." },
      { s: 'jungwon', f: 'neutral', t: "Sunghoon. Please sit down." },
      { s: 'sunghoon', f: 'neutral', t: "I'm comfortable." },
      { s: 'jungwon', f: 'neutral', t: "You're standing." },
      { s: 'sunghoon', f: 'neutral', t: "I'm comfortable standing." },
      { s: 'jungwon', f: 'neutral', t: "He's done this for as long as I've known him. In every room. By my count I've asked him to sit four hundred and twelve times." },
      { s: 'jungwon', f: 'happy', t: "Four hundred and thirteen. Sunghoon, I'm asking you very nicely." },
      { n: "*Very nicely,* Solar would learn, was the most dangerous phrase in Yang Jungwon's vocabulary. Sunghoon received it like weather. He sat, eventually, on the arm of the sofa, which was technically sitting, and which faced the door." },
      { choose: [
        { t: "(Hook the empty chair out from the table with your foot. Leave it there.)", notes: 3, flag: { 'shoon-sit': true }, then: [
          { n: "She dragged it out and left it, angled toward him, and went back to question four without a word. Sunghoon looked at the chair for a long time. Then he got off the arm of the sofa and sat in it, right on the edge, facing the door, and Jungwon turned very slowly and looked at Solar as if she'd pulled a coin out of the air." },
          { s: 'jungwon', f: 'surprised', t: "How did you do that?" },
          { s: 'solar', f: 'neutral', t: "I didn't ask." }
        ] },
        { t: "Leave him. He likes it up there.", notes: 2, then: [
          { s: 'sunghoon', f: 'neutral', t: "Thank you, Solar. Finally. An ally on the council." },
          { s: 'jungwon', f: 'neutral', t: "She isn't on the council. Here." },
          { s: 'sunghoon', f: 'neutral', t: "She's on it in spirit. Park Sunghoon has decided." }
        ] },
        { t: "Why do you stand?", notes: 2, then: [
          { s: 'sunghoon', f: 'neutral', t: "Better view." },
          { s: 'jungwon', f: 'neutral', t: "Of what." },
          { s: 'sunghoon', f: 'neutral', t: "Of her getting question four wrong." },
          { n: "She had got question four wrong. Jungwon, with enormous restraint, said nothing at all, and turned the workbook toward her, and put one finger on the line where it had gone wrong, and kept it there." }
        ] }
      ] },
      { n: "At seven Jungwon went upstairs for a different book, the one with the answers in the back, which she wasn't allowed to look at and was going to need. The minute his footsteps had gone round the first landing, Sunghoon sat down properly, in an armchair, and put his feet up on the low table, and took two phones out of his coat." },
      { n: "The first was new and silver and buzzing. He turned it so she could see." },
      { phone: [
        { from: 'niki', t: "rikiniki: hoon where r u" },
        { from: 'sunghoon', t: "princesunghoon: Park Sunghoon is assisting with calculus" },
        { from: 'heeseung', t: "heeeseung: you can't do calculus" },
        { from: 'sunghoon', t: "princesunghoon: morally assisting" },
        { from: 'niki', t: "rikiniki: whipped. for MATH now" }
      ], contact: 'jungwon is mean' },
      { ifFlag: 'arrived-cherry', then: [
        { n: "Under the chat, a second thread had a little number on it that he didn't open in front of her, and didn't need to. The name above it was *cherryblossoms,* and he turned the phone face down when he saw her see it, and his ears did something." }
      ] },
      { n: "The second phone was old and black and folded shut, the kind with a stub of an antenna, and its little outside screen was dark, and he set it on the table beside the first, square, and didn't look at it." },
      { s: 'solar', f: 'neutral', t: "Jungwon has one of those." },
      { s: 'sunghoon', f: 'neutral', t: "Same kind. Same reason. Nobody texts on this one. Somebody would call. It doesn't ring." },
      { s: 'sunghoon', f: 'neutral', t: "He told you. One person from two places. He practised that sentence for a week. Out loud, in the mirror. I'm next door. The walls are paper." },
      { s: 'sunghoon', f: 'neutral', t: "I'm the same. I didn't practise." },
      { n: "He didn't make a speech of it. That was the strange part. Everything else he said came out gift-wrapped, and this came out plain, like a man reading off a label." },
      { s: 'sunghoon', f: 'neutral', t: "In one of them I'm eighteen. Hanlim. Football. The council. A car I'm very proud of. The thing in the winter we don't discuss." },
      { s: 'sunghoon', f: 'serious', t: "In the other I'm twenty-three, and I don't talk this much. I don't talk, mostly. Nobody there has ever heard me call myself a prince." },
      { s: 'solar', f: 'surprised', t: "Not once?" },
      { s: 'sunghoon', f: 'serious', t: "They'd have me looked at." },
      { s: 'sunghoon', f: 'neutral', t: "Things I do in both. I tie my laces twice. I take my coffee too sweet. I stand where I can see the door. And I stand where I can see him." },
      { choose: [
        { t: "Which one of you is talking now?", notes: 3, then: [
          { s: 'sunghoon', f: 'neutral', t: "The one who's allowed to." },
          { n: "He said it lightly. He didn't look at the old phone when he said it, which was how she knew he'd thought about it before." }
        ] },
        { t: "Does he know? That you stand there in both?", notes: 3, then: [
          { s: 'sunghoon', f: 'neutral', t: "He knows. He's the only one who knows both of me." },
          { s: 'sunghoon', f: 'neutral', t: "And I'm the only one who knows both of him. Don't tell him I said so. He'd want to discuss it. He'd bring an agenda." }
        ] },
        { t: "That's a lot of standing.", notes: 2, then: [
          { s: 'sunghoon', f: 'neutral', t: "Princes are very fit. It's all the standing. And the waving." }
        ] }
      ] },
      { n: "Footsteps on the stairs. Sunghoon was on his feet before she'd properly heard them, both phones gone into his coat, the feet off the table, and by the time Jungwon came round the newel post with the answer book under his arm, Park Sunghoon was standing a half step behind the empty chair with his arms folded, as if he hadn't moved all evening and resented the suggestion." },
      { s: 'jungwon', f: 'neutral', t: "Sunghoon. Sit down." },
      { s: 'sunghoon', f: 'neutral', t: "I'm comfortable." },
      { n: "Jungwon looked at Solar. Solar looked at the answer book. Neither of them said a word about it, and question five, it turned out, was worse." }
    ] },

    { after: '11/27', title: '3: the bet', place: 'Iwatodai Strip · Hagakure', time: 'Evening', music: 'joy', scene: [
      { n: "Hagakure at seven was steam and pork bone and the radio behind the counter playing a baseball game nobody was listening to, and Junpei had saved three stools at the end of the counter by putting his cap on one, his bag on another and himself across the third like a man defending a beach." },
      { s: 'junpei', f: 'happy', t: "Leader! You came! Okay. Okay okay okay. You're the judge. You're impartial. You've got that face. That's a judge face." },
      { n: "Sunghoon was on the far stool with his coat still on, reading the menu with the polite skepticism of a man who'd been promised ramen and was waiting to be impressed by it." },
      { s: 'junpei', f: 'neutral', t: "So here's the deal. This guy. Every time he opens his mouth it's *Park Sunghoon this, Park Sunghoon that,* like he's narrating a nature documentary about himself. And there's girls from our school outside that cafe every day like it's a concert. So there's a secret. There's gotta be a secret." },
      { s: 'junpei', f: 'serious', t: "So I bet him. One bowl. If he gets through the whole bowl without saying his own name, I pay, AND I quit asking. If he says it even once, he pays, AND he teaches me the bow." },
      { s: 'sunghoon', f: 'neutral', t: "Park Sunghoon accepts." },
      { s: 'junpei', f: 'surprised', t: "...You can't start yet! The ramen's not even here! Leader, he can't start yet, right?" },
      { n: "The ramen came. Sunghoon broke his chopsticks apart cleanly, laid them across the bowl, and did not say another word." },
      { n: "Not one. Not to the old man behind the counter, who asked if it was good and got a small, perfect nod. Not to Junpei, who tried everything, who asked him what his name was, who asked him who the most handsome man in Iwatodai was, who asked him to spell *prince.* Sunghoon ate with the tidy, unhurried attention of somebody alone in a room, and when Junpei, desperate, asked him who'd win in a fight between him and Akihiko-senpai, he lifted one finger off his chopsticks and pointed it, without looking up, at himself." },
      { s: 'junpei', f: 'surprised', t: "THAT COUNTS. That counts! Pointing is third person! Leader, rule on it!" },
      { choose: [
        { t: "Pointing isn't talking. Sunghoon wins.", notes: 2, flag: { 'shoon-bet-hoon': true }, then: [
          { s: 'junpei', f: 'sad', t: "Betrayed. By my own leader. In my own ramen shop." },
          { n: "Sunghoon inclined his head to her across Junpei's back, a slow, grave, royal half inch, and went on eating." }
        ] },
        { t: "Pointing counts. Junpei wins.", notes: 2, flag: { 'shoon-bet-junpei': true }, then: [
          { s: 'junpei', f: 'happy', t: "YES. YES! Justice! Iwatodai justice!" },
          { n: "Sunghoon put his chopsticks down and looked at her for a long moment, the look of a man sold out by his own court, and then picked them up again and went on eating, in silence, as if out of principle he intended to finish losing properly." }
        ] },
        { t: "(Say nothing. Eat your ramen. Make them both wait.)", notes: 3, then: [
          { n: "She ate. Junpei made a sound like a kettle. Sunghoon, on his other side, made no sound at all, and somewhere near the bottom of the bowl she caught him watching her eat in silence with something that might, in a less statuesque face, have been approval." }
        ] }
      ] },
      { s: 'junpei', f: 'neutral', t: "Seriously, though. Dude. How do you DO that? You went full... you were a different guy. Like a statue. Like the guy in a movie who stands at the back of the room, and you just know the second he moves, something's gonna happen." },
      { ifHeading: 'S', then: [
        { n: "Sunghoon set his bowl down without a sound, and for a second before he answered, the stillness hadn't gone anywhere. It was sitting at the counter with them. And something in Solar, somewhere under her ribs, straightened and stood very quietly against a wall, the way you'd stand in a room where men like that stood by the doors, and she didn't know what room, and her body did." },
        { s: 'sunghoon', f: 'serious', t: "Practice." },
        { n: "Just that, flat, from somewhere a long way down. Then, a beat too late, the prince came back, and straightened his coat." },
        { s: 'sunghoon', f: 'neutral', t: "And good breeding. Obviously." }
      ], else: [
        { ifHeading: 'H', then: [
          { s: 'sunghoon', f: 'neutral', t: "Football. A coach screams at you from two inches away, you learn to be furniture." },
          { s: 'sunghoon', f: 'neutral', t: "And council meetings. Jungwon leaves a silence at the end of every agenda item until somebody confesses something. Usually Niki. We've all been trained." },
          { n: "It was the most he'd said about home all night, and he said it like a boy, quick and easy, a boy with exams in the morning and a group chat that wouldn't stop buzzing in his coat, and for a second Solar could almost smell a gym floor." }
        ], else: [
          { ifHeading: 'R', then: [
            { s: 'sunghoon', f: 'neutral', t: "It's a trick. I'll tell you how, since you're going somewhere neither of me will ever be. Count something. The tiles." },
            { s: 'sunghoon', f: 'neutral', t: "Forty-one on that wall, Junpei. Forty-one and a half. Somebody broke one." },
            { s: 'junpei', f: 'surprised', t: "...Dude. Dude, there's forty-one." }
          ], else: [
            { ifHeading: 'true', then: [
              { s: 'sunghoon', f: 'neutral', t: "You'll find out. One day you'll see both of me in the same week, and you'll know which one was the trick." },
              { s: 'sunghoon', f: 'neutral', t: "Neither. Don't tell Junpei." }
            ], else: [
              { s: 'sunghoon', f: 'neutral', t: "If you're staying here, someone in this city should know how to be quiet. Junpei, it won't be you." },
              { s: 'junpei', f: 'sad', t: "Rude. Accurate. But rude." }
            ] }
          ] }
        ] }
      ] },
      { choose: [
        { t: "Teach him the bow anyway. He's earned something.", notes: 3, then: [
          { n: "Sunghoon stood and showed him once, slow, from the waist, the hand over the heart, the eyes coming up last. Junpei tried it with enormous feeling and hit his forehead on the counter, and the old man behind it turned the baseball up." },
          { s: 'sunghoon', f: 'neutral', t: "Better. You meant it. That's most of it." }
        ] },
        { t: "Junpei, you'd last four seconds.", notes: 2, then: [
          { s: 'junpei', f: 'serious', t: "Four seconds of PURE MYSTERY, Leader." },
          { s: 'sunghoon', f: 'neutral', t: "Three. I counted." }
        ] },
        { t: "Teach me instead.", notes: 3, then: [
          { s: 'sunghoon', f: 'neutral', t: "You already know it." },
          { s: 'solar', f: 'surprised', t: "I do not." },
          { s: 'sunghoon', f: 'neutral', t: "You did it the whole bowl. You didn't say one thing about anything that mattered. You just let it sit there. Park Sunghoon was impressed." },
          { n: "She opened her mouth to argue, and found she had nothing to say that wasn't about something that mattered, and shut it again, and Junpei looked from one of them to the other and said *oh my God, there's two of them now.*" }
        ] }
      ] },
      { n: "He paid for all three bowls. Whatever the ruling, whoever had won, he'd paid for all three before Junpei could get his wallet out, and left the receipt face down on the counter in front of Junpei with something written on the back of it." },
      { n: "*You were close. - s*" },
      { s: 'junpei', f: 'happy', t: "This guy. THIS guy. Leader, I love this guy." }
    ] },

    { after: '12/4', title: '4: the other house', place: 'Iwatodai Dorm · Front', time: 'Evening', music: 'night', scene: [
      { n: "He walked her home from Yeobo's at twenty to eight because, he said, a prince doesn't let a lady walk alone through a city with this many vending machines in it, and because, he didn't say, visitors were out of the dorm by eight on a school night and he liked to be early for things he disliked." },
      { n: "It was cold, the first real cold, the kind that got into the hinges of your jaw. The streetlights on the dorm's road were coming on one at a time ahead of them like somebody walking ahead to open doors, and Sunghoon walked half a step behind her left shoulder, which she had stopped noticing, and then noticed again." },
      { choose: [
        { t: "(Slow down, so he has to walk beside you.)", notes: 3, then: [
          { n: "She slowed. He slowed, exactly as much, and stayed exactly where he was, half a step back, like a shadow that had read the rules." },
          { s: 'sunghoon', f: 'neutral', t: "It's a very good spot. Princes walk behind ladies. It's in a book." },
          { s: 'solar', f: 'neutral', t: "Which book?" },
          { s: 'sunghoon', f: 'neutral', t: "One I'm writing." }
        ] },
        { t: "Why do you always walk there?", notes: 2, then: [
          { s: 'sunghoon', f: 'neutral', t: "So I can see what's coming." },
          { s: 'solar', f: 'neutral', t: "What's coming?" },
          { s: 'sunghoon', f: 'neutral', t: "The dorm. Eventually. At this pace." }
        ] },
        { t: "(Let him.)", notes: 3, then: [
          { n: "She let him. It was like having a wall at her back on a cold street, and the strange thing was that the wall was warm, and the stranger thing was that she'd walked like this before, somewhere, with someone a half step behind her, and had never once had to look round." }
        ] }
      ] },
      { ifFlag: 'arrived-haechan', then: [
        { n: "There was someone on the dorm steps." },
        { n: "Haechan, in a black coat, sitting on the top step with his elbows on his knees and a can of coffee going cold between his boots, the way you'd sit if you'd come out for air and stayed for the street. He looked up when the gate creaked. He looked at Solar. Then he looked past her at the boy half a step behind her shoulder, and something happened to the air in the yard that had nothing to do with December." },
        { n: "Neither of them moved. That was what she'd remember. Two men she'd never once seen in the same place, and they stood exactly the same way, weight on the back foot, hands loose and in plain sight, chins a half degree down, like one man and a mirror that had been told to hate him." },
        { s: 'haechan', f: 'neutral', t: "Park Sunghoon." },
        { s: 'sunghoon', f: 'serious', t: "Lee Donghyuck." },
        { n: "Korean. She understood it with the back half of her head, the half that never explained itself." },
        { s: 'haechan', f: 'neutral', t: "It's seven fifty-two." },
        { s: 'sunghoon', f: 'serious', t: "I can read a clock." },
        { n: "She went up the path between them, and as she passed, both men moved at the same moment, the same half step back, Haechan on the step and Sunghoon at the gate, as if she were a car coming through a junction and they were the lights. Neither of them noticed the other do it. She noticed for both of them." },
        { n: "Sunghoon didn't come up the path. He didn't say anything else to Haechan, and Haechan didn't say anything else to him. He stood at the gate until she had the door open and the light from the hall was on her face, and only then turned and went, and she heard his footsteps go off down the road, even and unhurried, and stop at the corner." }
      ], else: [
        { n: "The dorm steps were empty, the porch light on, the yard all shadow and one bicycle somebody hadn't put away. Sunghoon stopped at the gate and looked at the door, and the windows, and the dark side passage, in that order, the way you'd read a page, and only when he'd read it all the way down did he let her go up the path." },
        { s: 'sunghoon', f: 'neutral', t: "Clear. Goodnight. Park Sunghoon has done his duty." },
        { n: "She heard his footsteps go off down the road, even and unhurried, and stop at the corner." }
      ] },
      { n: "She went up to the second-floor landing and looked out of the window at the end of the hall, because something made her. At the corner, under the streetlight, by the vending machine, Sunghoon was standing with his back to the dorm, lighting a cigarette. Something thin and white. The smoke went up green in the vending machine's glow, and even through the glass she could have sworn she smelled it, menthol, cold and clean, like nothing she'd ever smoked and like somewhere she'd stood." },
      { n: "She'd never seen him smoke. Nobody had, she'd find out. Not at Yeobo's, not on the guesthouse steps. He did it the way some people shut a door behind them, once, after they'd walked out of a room, and only then." },
      { phone: [
        { from: 'solar', t: "i didnt know u smoked" },
        { from: 'sunghoon', t: "only when i leave a room" }
      ], contact: 'Sunghoon' },
      { ifHeading: 'S', then: [
        { phone: [
          { from: 'sunghoon', t: "he stands where i stand. for someone else" },
          { from: 'sunghoon', t: "he'd stand in front of anything for you. i hate that about him most" }
        ], contact: 'Sunghoon' },
        { n: "She read it twice. Her thumb hovered. Somewhere a long way under the dorm, under the city, two men she couldn't see were standing at two doors in the cold, and she couldn't see their faces, and she knew both." }
      ], else: [
        { ifHeading: 'H', then: [
          { phone: [
            { from: 'sunghoon', t: "hanlim doesn't have one of him. i checked" },
            { from: 'sunghoon', t: "it's the best thing about hanlim. go to sleep. exams at 8 somewhere" }
          ], contact: 'Sunghoon' }
        ], else: [
          { ifHeading: 'R', then: [
            { phone: [
              { from: 'sunghoon', t: "wherever ur going he'll be there and i won't" },
              { from: 'sunghoon', t: "tell him nothing from me. he'll know what it means" }
            ], contact: 'Sunghoon' }
          ], else: [
            { ifHeading: 'true', then: [
              { phone: [
                { from: 'sunghoon', t: "ull have both of us. in one of ur lives" },
                { from: 'sunghoon', t: "my condolences" }
              ], contact: 'Sunghoon' }
            ], else: [
              { phone: [
                { from: 'sunghoon', t: "ur staying in a house with him in it" },
                { from: 'sunghoon', t: "he isn't the worst thing that could sit on ur steps. don't tell him i said so. i'll deny it in two languages" }
              ], contact: 'Sunghoon' }
            ] }
          ] }
        ] }
      ] },
      { choose: [
        { t: "(Go back down and stand at the corner with him.)", notes: 3, then: [
          { n: "She was out of the door in her socks and shoes before she'd decided, and he heard her coming twenty meters off and put it out against the side of the vending machine and put the end in his pocket, not on the street, and turned round." },
          { s: 'sunghoon', f: 'neutral', t: "Don't. You'll smell like it. Mitsuru will have me deported. To a fourth dimension." },
          { s: 'sunghoon', f: 'neutral', t: "Go in. It's cold. Park Sunghoon is fine. Park Sunghoon is always fine." },
          { n: "He waited until the door shut behind her. She knew without looking." }
        ] },
        { t: "(Text back: same time friday?)", notes: 3, then: [
          { phone: [
            { from: 'solar', t: "same time friday?" },
            { from: 'sunghoon', t: "Park Sunghoon will consult his schedule" },
            { from: 'sunghoon', t: "yes" }
          ], contact: 'Sunghoon' },
          { n: "Down at the corner the small green glow went out, and he lifted one hand without turning round, at the window, at her, and went." }
        ] },
        { t: "(Watch until he's gone.)", notes: 2, then: [
          { n: "She watched. He finished it slowly, looking down the road the way he'd come, and put it out, and put the end in his pocket, and stood for one more moment in the cold as if listening for something, and went." }
        ] }
      ] }
    ] },

    { after: '12/11', title: '5: the rink', place: 'Port Island · Seaside Park', time: 'Evening', music: 'tender', scene: [
      { n: "*Seaside Park. Nine. Come alone. Tell no one. Bring nothing. - s,* the text had said, which read like the first page of a very bad novel, and from Park Sunghoon could have meant anything at all." },
      { n: "It meant the rink. The long white oval on the grass by the water with its plywood barrier painted with snowmen, the speakers on their poles switched off for the night, half the floodlights dark, the bay beyond it gone black and flat and smelling of salt and cold metal. The rental booth was shuttered except for one window, where an old man in a knitted hat sat eating noodles out of a cup and very deliberately not looking at the ice." },
      { s: 'sunghoon', f: 'neutral', t: "Park Sunghoon has an understanding with the booth man." },
      { n: "He was on the bench lacing black skates that weren't rentals, and he was wearing, over everything, an enormous navy hoodie with HANLIM across the chest and a football number on the back." },
      { s: 'sunghoon', f: 'neutral', t: "Camouflage. If anyone from home sees, I was at football. On ice. For conditioning." },
      { s: 'solar', f: 'neutral', t: "Who's going to see? We're in a different universe." },
      { s: 'sunghoon', f: 'serious', t: "Niki. Niki gets everywhere." },
      { n: "He went out onto the ice the way other people go down their own stairs in the dark, without looking, without holding anything, and took the long curve at the far end so fast and so low and so quiet that she heard the edge before she saw it, a long hiss like a page turning in a big room." },
      { s: 'solar', f: 'surprised', t: "You're a figure skater." },
      { ifHeading: 'S', then: [
        { s: 'sunghoon', f: 'serious', t: "Don't call me that." },
        { n: "It came across the ice flat and cold and fast, and then he was at the barrier in front of her, stopped dead in a spray of shaved ice, and not looking at her." },
        { s: 'sunghoon', f: 'neutral', t: "...Sorry. Skater. Just skater. I hate the other word. I don't know why I hate it here." },
        { n: "He did know. She could see him know it, the way you can see somebody decide not to open a letter." }
      ], else: [
        { ifHeading: 'H', then: [
          { s: 'sunghoon', f: 'flustered', t: "Secret figure skater. Not my most masculine hobby. Tell no one at Hanlim. If Jay finds out, I'll know it was you." },
          { s: 'sunghoon', f: 'neutral', t: "There's a rink at home, by the river. Thursdays. Somebody got stood up there once, and Park Sunghoon happened to be on the ice. A coincidence. I've been there every Thursday for three years. It was still a coincidence." }
        ], else: [
          { ifHeading: 'R', then: [
            { s: 'sunghoon', f: 'neutral', t: "A man who skates. Figures are for accountants." },
            { s: 'sunghoon', f: 'neutral', t: "Wherever you're going, there'll be a rink in a park every winter. I'd bet on it. Go once. Fall over. Think of me." }
          ], else: [
            { ifHeading: 'true', then: [
              { s: 'sunghoon', f: 'neutral', t: "A skater. In secret. You'll find that out about me twice, I expect. Act surprised both times. I like it." }
            ], else: [
              { s: 'sunghoon', f: 'neutral', t: "A skater. If you're staying, you'll need somebody to teach you this, and Cherry and I are both going home. Learn fast." }
            ] }
          ] }
        ] }
      ] },
      { s: 'sunghoon', f: 'neutral', t: "Come out." },
      { choose: [
        { t: "(Let go of the barrier.)", notes: 3, then: [
          { n: "She let go. Her ankles folded inward like wet paper and she didn't fall, because he had both her hands before she could, skating backward in front of her, slow, his grip exact and unbothered, as if keeping a person upright was a thing his hands knew how to do without asking him." },
          { s: 'sunghoon', f: 'neutral', t: "Knees. Bend them. You're a person, not a plank. Look at me, not at your feet. Your feet are fine. Your feet are a disgrace, but they're fine." }
        ] },
        { t: "(Stay on the barrier. Watch him.)", notes: 3, then: [
          { n: "She stayed. He skated for her, or for himself with her there, she couldn't tell which, long clean edges and a spin so fast near the end that he went to a blur and came back out of it as if he'd only blinked, and the booth man, behind his noodles, stopped eating." }
        ] },
        { t: "I'll fall.", notes: 2, then: [
          { s: 'sunghoon', f: 'neutral', t: "Everyone falls. Park Sunghoon has fallen in front of a booth man and three pigeons. Come out." },
          { n: "She came out and fell, almost at once, and he caught her by the elbow without looking, the way you'd catch a glass you'd knocked off a table, and put her back on her feet, and let go." }
        ] }
      ] },
      { n: "Later he went to the far end of the rink alone and stood there with his back to her for a while, under the one floodlight still on, very still. She thought he'd finished. She thought he was looking at the bay." },
      { n: "He wasn't. He pushed off. Three long strokes, building, the hiss rising, and then he turned forward and went up off his left foot, the one jump, she'd learn later, that takes off facing where you're going, and he was in the air for longer than she'd have believed a person could be, turning tight as thread on a spool, three times and a half, and came down on the other foot with his arms out and the edge biting clean and long into the ice, and glided out of it, and stopped." },
      { n: "And then he stood there." },
      { n: "In the middle of the ice, under the floodlight, with his breath going up white, he looked down at his own left leg as if it belonged to somebody else and had just done something it had no business being able to do. He bent it, once, slowly. He straightened it. He stood there for a long time. He didn't look at her, and she didn't know what she was looking at, only that she mustn't say anything, and that it was the quietest she'd ever seen anyone be out loud." },
      { n: "When he came back to the barrier his face was the prince's again, mostly." },
      { s: 'sunghoon', f: 'neutral', t: "You didn't see that." },
      { choose: [
        { t: "I didn't see anything.", notes: 3, flag: { 'shoon-secret': true }, then: [
          { s: 'sunghoon', f: 'neutral', t: "Good." },
          { s: 'sunghoon', f: 'neutral', t: "Neither did I." }
        ] },
        { t: "I saw it. It was beautiful.", notes: 3, then: [
          { s: 'sunghoon', f: 'sad', t: "...Yes. It was." },
          { n: "That was all. He sat down on the bench and unlaced his skates, and didn't say anything else, and didn't need to." }
        ] },
        { t: "What was that?", notes: 2, then: [
          { s: 'sunghoon', f: 'neutral', t: "A jump." },
          { s: 'sunghoon', f: 'neutral', t: "Just a jump." }
        ] }
      ] },
      { n: "He tipped the booth man two thousand yen and a bow, and the booth man tipped his knitted hat, and on the monorail home Sunghoon stood by the doors with his skates over his shoulder on their laces and looked at the black water going by, and said nothing for four stations, and she let him. Her phone buzzed on the walk up from the station." },
      { phone: [
        { from: 'sunghoon', t: "Park Sunghoon was at football tonight" },
        { from: 'sunghoon', t: "for the record" }
      ], contact: 'Sunghoon' }
    ] },

    { after: '12/17', title: '6: soon', place: "Iwatodai Strip · Yeobo's Cafe", time: 'Evening', music: 'joy', scene: [
      { n: "The window table was under napkins. Dozens of them, Yeobo's paper napkins with the little heart printed in the corner, and every one covered in Sunghoon's backward-leaning hand, diagrams, arrows, lists, a sketch of what was either a horse or a very tall dog, and in the middle of it all Sunghoon himself with a pen behind his ear and the face of a general on the eve of a campaign he intended to win by being more beautiful than the enemy." },
      { s: 'niki', f: 'happy-2', t: "He's planning the promposal. He's been planning it since September. At home. And now here. Across DIMENSIONS. Bro's whipped across dimensions." },
      { s: 'sunghoon', f: 'neutral', t: "Niki. Go and eat somebody else's croissant." },
      { n: "Niki went and ate somebody else's croissant. Sunoo threw a dishcloth at him from behind the counter with real violence." },
      { s: 'sunghoon', f: 'neutral', t: "Prom is after the break. At home. Prep starts in January. Park Sunghoon intends to ask Cherry Kim in a manner that will be discussed for generations. It has to be the most impressive thing anyone at Hanlim has ever seen." },
      { s: 'sunghoon', f: 'neutral', t: "So far I have a hundred roses, a skywriter and a horse." },
      { s: 'sunoo', f: 'serious', t: "You have nine hundred yen, Sunghoon." },
      { ifEvent: 'a5-call-hoax', then: [
        { s: 'sunghoon', f: 'neutral', t: "You know now. About Jungwon. Jihoon told you, I hear. At a crane game. Like a gentleman." },
        { s: 'sunghoon', f: 'neutral', t: "Good. Rule one was killing him. He ironed a towel on Tuesday. Twice." }
      ], else: [
        { n: "He glanced at the corner booth where Jungwon usually sat with his red pen, and away again, quickly, the way you'd look away from a sign you'd promised not to read out loud." }
      ] },
      { choose: [
        { t: "She'd hate a horse.", notes: 2, then: [
          { n: "He looked at the horse for a long moment, with real grief, and then drew a single clean line through it." },
          { s: 'sunghoon', f: 'neutral', t: "Goodbye, horse. You'd have been magnificent." }
        ] },
        { t: "Do it on the ice.", notes: 3, then: [
          { n: "He went very still. The pen stopped. Across the table Niki said *what ice* with his mouth full, and nobody answered him." },
          { s: 'sunghoon', f: 'serious', t: "That isn't impressive. That's expensive." }
        ] },
        { t: "Ask her what she wants.", notes: 2, then: [
          { s: 'sunghoon', f: 'flustered', t: "Park Sunghoon does not *ask.*" },
          { s: 'sunghoon', f: 'neutral', t: "...She'd tell me a hundred things. All lies. All to see what I'd do next. That's the best part of her." }
        ] }
      ] },
      { n: "He looked down at the napkins. In the corner of one, under the horse, small, where he'd been doodling without paying attention to his own hand, there was an oval. A long white oval with a barrier round it, and two figures on it, and one of them was very small and had a lot of hair." },
      { n: "The most impressive thing anyone at Hanlim had ever seen. Solar watched him see it. Park Sunghoon, on the ice, in front of all of them, on purpose. Not the hundred roses. The thing in the winter they didn't discuss." },
      { s: 'sunghoon', f: 'serious', t: "That's not impressive. That's a confession." },
      { s: 'solar', f: 'neutral', t: "Isn't that the point?" },
      { ifFlag: 'arrived-cherry', then: [
        { s: 'sunghoon', f: 'flustered', t: "She's at the guesthouse right now. Two floors up from Jungwon. Doing a face mask. She laughs at my texts out loud, she thinks the floor is thicker than it is." }
      ], else: [
        { s: 'sunghoon', f: 'flustered', t: "She's at home. Waiting. She doesn't know she's waiting. She'll be furious about it." }
      ] },
      { ifHeading: 'H', then: [
        { s: 'sunghoon', f: 'neutral', t: "The rink by the river. A Saturday, when the whole school's there. Jay will film it. Niki will make it a meme by lunch. Exams first. Then the break. Then I'll be very brave in January." }
      ], else: [
        { ifHeading: 'S', then: [
          { n: "For a second he looked at the napkin like a man who'd been handed somebody else's mail." },
          { s: 'sunghoon', f: 'serious', t: "The other one of me doesn't ask anybody for anything. He'd watch this from the back of the rink and not breathe." },
          { s: 'sunghoon', f: 'neutral', t: "So I'll do it as this one. This one's allowed." }
        ], else: [
          { ifHeading: 'R', then: [
            { s: 'sunghoon', f: 'neutral', t: "You won't be there. Wherever you're going. Cherry will call you anyway, in some life, in capitals, screaming. Pick up. Tell her it was your idea." }
          ], else: [
            { ifHeading: 'true', then: [
              { s: 'sunghoon', f: 'neutral', t: "You'll be there. You'll be everywhere, apparently. Hold the sign. Don't drop it on the ice." }
            ], else: [
              { s: 'sunghoon', f: 'neutral', t: "You'll hear about it. Cherry will find a way to tell you, from home. She finds a way to everything." }
            ] }
          ] }
        ] }
      ] },
      { choose: [
        { t: "(Take a clean napkin. Draw the sign for him.)", notes: 3, flag: { 'shoon-sign': true }, then: [
          { n: "She drew it in block capitals, because her hands knew how a poster went, CHERRY KIM, and under it, smaller, a question mark that was also a skate, the blade for the curve and the dot for the toe. He watched her do it with his chin on his fist. Then he took the pen, and under her capitals, in his backward-leaning hand, wrote *- s,* and folded the napkin once and put it in his breast pocket, over his heart, without any ceremony at all, which was how she knew he meant it." }
        ] },
        { t: "Then it has to be at home.", notes: 3, then: [
          { s: 'sunghoon', f: 'neutral', t: "Properly. Not in a copy of a café, in a copy of a town. She gets the real rink." },
          { s: 'sunghoon', f: 'neutral', t: "You're very wise for someone who can't skate." }
        ] },
        { t: "Do it here. Tonight. Go and knock.", notes: 1, then: [
          { s: 'sunghoon', f: 'serious', t: "No." },
          { n: "It came out very fast. He seemed surprised by it himself, and then not surprised at all." },
          { s: 'sunghoon', f: 'neutral', t: "Not here. Here's a copy. She gets the real one." }
        ] }
      ] },
      { n: "*Soon,* he wrote at the bottom of the last napkin, and underlined it, and looked at it, and folded it into his pocket with the others. It wasn't a date. It was Park Sunghoon's least specific word, and he wrote it the way other people wrote *forever,* and from the counter, with his mouth full, Niki said *whipped* again, with a tenderness he would have denied under oath." }
    ] },

    { after: '12/26', title: '7: tax form', place: 'Paulownia Mall · Karaoke', time: 'Evening', music: 'night', scene: [
      { n: "Junpei had booked the room for two hours on the strength of a rumor, which he announced at the door like a toast. *The guesthouse says he sings.* The guesthouse, it turned out, was Jake, who had said it to Junpei in the street in passing and then refused to elaborate, looking haunted." },
      { n: "The room was the small one at the end, vinyl sofa, two tambourines, a screen looping an advert for canned coffee, and Sunghoon was on the sofa with the remote, scrolling the Korean catalogue with the face of a man reading terms and conditions." },
      { ifFlag: 'shoon-bet-junpei', then: [
        { s: 'junpei', f: 'happy', t: "And he still owes me from the ramen. I'm collecting. With interest." },
        { s: 'sunghoon', f: 'neutral', t: "The interest is that I came." }
      ], else: [
        { ifFlag: 'shoon-bet-hoon', then: [
          { s: 'junpei', f: 'serious', t: "This is the rematch. I lost the ramen. I will not lose the mic." },
          { s: 'sunghoon', f: 'neutral', t: "You can't lose the mic. You haven't let go of it since we walked in." }
        ] }
      ] },
      { n: "He picked a Shin Seung-hun ballad. He didn't stand. He sat very straight on the vinyl with the mic held exactly level, and when the words came up he sang them." },
      { n: "He sang them like a man reading a tax form. Every note was exactly where it was supposed to be and not one of them had anything in it, and he read the lyrics off the screen in Korean in a steady, beautiful, utterly uninflected voice, as though declaring his income for the year to the state, itemized, line by line, in full, with nothing withheld and nothing felt." },
      { n: "Junpei made a noise. Then he put his hand over his mouth. Then he got his phone out and filmed it, with tears standing in his eyes, the way you'd film a comet." },
      { n: "Halfway through the second verse the door opened and Jungwon came in, coat still on, apologizing very quietly to nobody, and sat down at the far end of the sofa, and before the next line Sunghoon had stood up, mic still level, still singing, and moved to stand behind Jungwon's end of the sofa, in a karaoke booth, with his back to the wall." },
      { s: 'jungwon', f: 'neutral', t: "Sunghoon. It's a sofa. It's a booth. There's nowhere to stand." },
      { n: "Sunghoon finished the line, every syllable accounted for, and lowered the mic one inch." },
      { s: 'sunghoon', f: 'neutral', t: "There's here." },
      { choose: [
        { t: "(Stand up and applaud like it's the national anthem.)", notes: 3, then: [
          { n: "She stood, hand on her heart. Junpei stood too, because she had, still filming, sobbing openly now. Sunghoon received it with a slow bow from the waist that took exactly as long as the last held note, and Jungwon, from the sofa, applauded twice, very politely, and then once more." }
        ] },
        { t: "That was the saddest thing I've ever heard.", notes: 3, then: [
          { s: 'sunghoon', f: 'neutral', t: "Thank you. That's the review I wanted." },
          { s: 'junpei', f: 'sad', t: "It's so sad, Leader. He's not even sad. That's what makes it so sad." }
        ] },
        { t: "(Queue him something worse.)", notes: 2, then: [
          { n: "She queued an idol song with a dance break. He looked at the screen. He stood up. He did the entire choreography, every count, every turn, with no expression on his face at all, and Junpei lay down on the floor." }
        ] }
      ] },
      { s: 'solar', f: 'neutral', t: "Where did you learn to sing like that?" },
      { ifHeading: 'S', then: [
        { s: 'sunghoon', f: 'serious', t: "A room like this. At home. Very late. Men who don't sing, singing, because someone has to." },
        { s: 'sunghoon', f: 'neutral', t: "Somebody has to read the words out properly so the others can feel things. I read them." },
        { n: "Jungwon looked down at his hands, and didn't contradict him, and didn't look up again until the next song had started." }
      ], else: [
        { ifHeading: 'H', then: [
          { s: 'sunghoon', f: 'neutral', t: "Noraebang after the football banquet. Niki picked the song as a punishment. Park Sunghoon took it as a calling." },
          { s: 'jungwon', f: 'neutral', t: "He's sung it at every council social since. The first-years think it's a tradition. It's become one, against my wishes." }
        ], else: [
          { ifHeading: 'R', then: [
            { s: 'sunghoon', f: 'neutral', t: "Where you're going they sing in English. I'd learn one for you. I won't. But I'd think about it, which from me is a great deal." }
          ], else: [
            { ifHeading: 'true', then: [
              { s: 'sunghoon', f: 'neutral', t: "You'll hear it again. At home. Both homes, probably. Try not to cry at the second one. People will talk." }
            ], else: [
              { s: 'sunghoon', f: 'neutral', t: "You'll hear it every December. Junpei's recorded it. He's going to play it at you until you graduate." },
              { s: 'junpei', f: 'happy', t: "And after. I'm gonna play it at my WEDDING." }
            ] }
          ] }
        ] }
      ] },
      { choose: [
        { t: "(Make Jungwon sing.)", notes: 2, then: [
          { s: 'jungwon', f: 'flustered', t: "Absolutely not. With the greatest respect." },
          { n: "He sang one line, under protest, very quietly, sitting down, perfectly in tune, and handed the mic back as if it were hot, and Sunghoon clapped once, from behind the sofa, which made it worse." }
        ] },
        { t: "Sing one with me.", notes: 3, then: [
          { n: "They did a duet. He sang his half exactly as he'd sung the ballad, a tax return in two voices, and she got the harmony wrong on purpose, and he didn't correct her once, which from Park Sunghoon, she understood, was about the highest honor available." }
        ] },
        { t: "(Hand Junpei the mic and let him have the room.)", notes: 3, then: [
          { n: "Junpei sang something loud and badly, with his whole chest, both arms out, missing every high note by a mile and hitting every feeling dead center, and Sunghoon listened with grave courtesy from behind the sofa until the end." },
          { s: 'sunghoon', f: 'neutral', t: "That had something in it. Mine never does." },
          { n: "Junpei, mid-bow, didn't hear him. Solar did." }
        ] }
      ] },
      { n: "On the way out Junpei put an arm round Sunghoon's shoulders, which nobody had ever done, and Sunghoon allowed it, which nobody had ever seen." },
      { s: 'junpei', f: 'happy', t: "Same time next week. Dude. I mean it." },
      { s: 'sunghoon', f: 'neutral', t: "Park Sunghoon will check his schedule." },
      { n: "He checked it. He came." }
    ] },

    { after: '1/6', title: '8: rabbits', place: 'Kirijo Guesthouse · Common Room', time: 'Evening', music: 'tender', scene: [
      { n: "The common room at half past seven in January was the heater ticking and the window gone black and somebody's laundry on a rack by the radiator, and at the long table under the window Jungwon was working through a stack of past papers from a math competition he was not, technically, entered in, in any universe currently available to him. Beside his elbow there was a plate of rice and fish that Heeseung had brought him an hour ago. It hadn't moved." },
      { n: "Sunghoon was in the armchair by the heater with an apple and a small folding knife." },
      { n: "He was peeling it in one long ribbon, turning the apple and not the knife, the peel coming off in a thin red spiral that didn't break, that hung longer and longer from his hand until it touched the floor. Then he quartered it, and cut each quarter, quick and exact, into a rabbit, the peel left on in two little ears, and laid them on a saucer, and got up, and put the saucer at Jungwon's elbow." },
      { n: "Then he said something she didn't understand with her ears. Korean, low, in a register she had never once heard come out of him, no prince in it, no performance, nothing for anybody to look at." },
      { s: 'sunghoon', f: 'serious', t: "Jungwon-ah. Eat." },
      { s: 'jungwon', f: 'neutral', t: "In a minute. Thank you." },
      { s: 'sunghoon', f: 'serious', t: "Now." },
      { n: "Jungwon picked up a rabbit without looking at it and ate it, his eyes still on question nine, and then another, and then he looked up and saw Solar in the doorway, and went a very particular shade of pink." },
      { s: 'jungwon', f: 'flustered', t: "Solar. Good evening. Sunghoon, we have a guest." },
      { s: 'sunghoon', f: 'neutral', t: "She's not a guest." },
      { choose: [
        { t: "Teach me to do that. The apple.", notes: 3, stat: { proficiency: 1 }, then: [
          { n: "He handed her the knife handle-first, and an apple, and stood behind her chair to watch, of course he did." },
          { s: 'sunghoon', f: 'neutral', t: "Turn the apple. Not the knife. The knife stays exactly where it is. Everything else moves." },
          { n: "Her ribbon broke at two inches. His never had, she thought, not once in his life. He didn't say where he'd learned. She didn't ask. When she gave the knife back he wiped it on a napkin and folded it shut and put it in his pocket, where it seemed to belong in a way she didn't like to think about, and didn't." }
        ] },
        { t: "(Eat one of the rabbits.)", notes: 2, then: [
          { s: 'sunghoon', f: 'neutral', t: "Those are his." },
          { n: "He cut her one anyway, from a second apple, with two ears, and put it in her palm, and said *don't tell him,* while Jungwon sat two feet away and heard every word." }
        ] },
        { t: "You called him Jungwon-ah.", notes: 3, then: [
          { n: "Sunghoon went still, the knife held flat on the apple." },
          { s: 'sunghoon', f: 'serious', t: "Not in front of people." },
          { s: 'solar', f: 'neutral', t: "I'm people?" },
          { s: 'sunghoon', f: 'neutral', t: "No. That's the problem." }
        ] }
      ] },
      { ifFlag: 'shoon-sit', then: [
        { n: "When he came back from the heater he didn't go to the armchair. He pulled out the chair beside Jungwon's, across from her, and sat in it, without being asked, facing the door. She looked at him. He looked back." },
        { s: 'sunghoon', f: 'neutral', t: "You started this. With a chair. In November." }
      ] },
      { n: "Jungwon ate four rabbits and then, at question eleven, between one line and the next, went to sleep sitting up, with his pencil still in his hand and his cheek slowly coming to rest on the competition he wasn't entered in." },
      { n: "Sunghoon looked at the back of his head for a long time with an expression she had no name for, the look of a man guarding something that didn't know it needed guarding and wouldn't have allowed it if it did. When he spoke it was barely above the heater." },
      { ifHeading: 'S', then: [
        { s: 'sunghoon', f: 'serious', t: "At home he's the young master. And I'm the one behind the chair. That's all of it." },
        { s: 'sunghoon', f: 'serious', t: "That's all you get. Don't ask for the rest. I'd tell you, and then I'd have to leave the room." }
      ], else: [
        { ifHeading: 'H', then: [
          { s: 'sunghoon', f: 'neutral', t: "At home he forgets lunch, and Heeseung brings him food, and I steal his chips so he notices he's hungry. It's a system. It took years." },
          { s: 'sunghoon', f: 'neutral', t: "Exams at eight. He'll be up at five doing problems nobody set him. Somebody has to cut the apple." }
        ], else: [
          { ifHeading: 'R', then: [
            { s: 'sunghoon', f: 'neutral', t: "You're going somewhere he isn't. So here's the thing nobody tells you about him, for free. He's very bad at being looked after. You have to be rude about it." },
            { s: 'sunghoon', f: 'neutral', t: "You were always very rude about it. I approved." }
          ], else: [
            { ifHeading: 'true', then: [
              { s: 'sunghoon', f: 'neutral', t: "You'll be in both his rooms. Both houses. Then I can sit down sometimes." },
              { s: 'sunghoon', f: 'neutral', t: "Don't tell him I want to." }
            ], else: [
              { s: 'sunghoon', f: 'sad', t: "You're staying. He's going home. Then it's just me again, cutting apples. It was always me. It's fine." },
              { n: "He said *it's fine* exactly the way Jungwon did, full stop and all, and didn't seem to know it." }
            ] }
          ] }
        ] }
      ] },
      { choose: [
        { t: "(Put your coat over his shoulders.)", notes: 3, stat: { kindness: 1 }, then: [
          { n: "She put it round him carefully, the way you'd cover a birdcage, and Jungwon didn't wake, and Sunghoon watched her do it from across the table with his arms folded, and when she sat back down he gave her one slow nod, the kind of nod you'd give somebody who'd done your job correctly." }
        ] },
        { t: "(Stay until he wakes.)", notes: 3, then: [
          { n: "They stayed. The heater ticked. Sunghoon peeled a third apple, for her this time, the ribbon going down and down and not breaking, and neither of them talked, and it was nearly nine before Jungwon lifted his head with the shape of question eleven printed backward on his cheek and said, with great dignity, that he had been resting his eyes." }
        ] },
        { t: "(Slide the papers out from under his hand.)", notes: 2, then: [
          { s: 'sunghoon', f: 'neutral', t: "Brave." },
          { n: "He watched her do it the way you'd watch somebody take a bone away from a sleeping dog. Jungwon's fingers closed on nothing, and he frowned in his sleep, and didn't wake." }
        ] }
      ] },
      { n: "When she left, Sunghoon walked her to the guesthouse door and not one step past it, and it took her until the corner to understand why. Jungwon was asleep at the table. Park Sunghoon did not leave a room with Jungwon asleep in it." }
    ] },

    { after: '1/15', title: '9: thirty meters', place: 'Iwatodai · Riverside', time: 'Evening', music: 'night', scene: [
      { n: "The river in the middle of January was low and black and slow, the edges gone white with frost where the reeds met the water, and the lights of the far bank laid down on it in long broken lines. Sunghoon was on the bench by the path with a plastic bag from the hardware shop on the Strip at his feet, and inside the bag, bright as a road sign in the dark, a coil of yellow nylon rope." },
      { s: 'sunghoon', f: 'neutral', t: "Thirty meters. The man in the shop asked what I needed it for. I said I didn't know. That's true. I've never not known before." },
      { s: 'sunghoon', f: 'neutral', t: "At home I put one of these in every car. Every one. Under the spare. You never know what you'll need to pull out of somewhere." },
      { s: 'sunghoon', f: 'neutral', t: "There are no cars here. It's been bothering me for two months." },
      { n: "There was something else in the bag. A pair of ear defenders, the big yellow kind men wear on cranes and at the docks. He took them out and looked at them and put them down the side of his boot, where they went, apparently, and seemed to feel better." },
      { ifFlag: 'shoon-secret', then: [
        { s: 'sunghoon', f: 'neutral', t: "You never told anyone. About the ice." },
        { s: 'solar', f: 'neutral', t: "I didn't see anything." },
        { s: 'sunghoon', f: 'neutral', t: "You lied for a prince. Park Sunghoon has noticed. Park Sunghoon keeps a list." },
        { s: 'sunghoon', f: 'neutral', t: "It's a short list." }
      ] },
      { choose: [
        { t: "Give it to the dorm. Mitsuru will find a use for it.", notes: 2, then: [
          { s: 'sunghoon', f: 'neutral', t: "She'll label it. She'll label it ROPE. In that handwriting. And it'll be the best-organized rope in two universes." }
        ] },
        { t: "Keep it. You'll find a car.", notes: 3, then: [
          { n: "He looked at the rope in the bag as if somebody had given it back to him after he'd lost it." },
          { s: 'sunghoon', f: 'neutral', t: "I'll find a car." }
        ] },
        { t: "(Take the end and tie a knot in it. Any knot.)", notes: 3, then: [
          { n: "She tied something. He watched her tie it, and then took the end gently out of her hands and undid it and tied it again, his fingers quick and sure in the cold, a loop, a turn, the end passed round and back through, and pulled it, and it held." },
          { s: 'sunghoon', f: 'neutral', t: "Yours slips. This one doesn't. It holds whatever's on the end of it, however much it pulls." }
        ] }
      ] },
      { n: "For a while they watched the river. A train went over the bridge upstream, lit windows in a row, and the sound came to them late across the water." },
      { s: 'sunghoon', f: 'neutral', t: "Two months. I've been both of me for two months. In the same room. The loud one and the other one. Nobody here minds which one turns up." },
      { s: 'sunghoon', f: 'serious', t: "At home I have to be them one at a time again. In the right places. I'm very good at it. I've always been very good at it." },
      { ifHeading: 'S', then: [
        { s: 'sunghoon', f: 'serious', t: "The other one's waiting at home, in the cold. It's always winter there, right now. The harbor doesn't freeze. Everything else does." },
        { n: "He said it to the river. She heard it with a part of her that knew which harbor he meant and couldn't have pointed to it, and felt it anyway, a cold that came up through the bench and settled in her hands and stayed there." }
      ], else: [
        { ifHeading: 'H', then: [
          { s: 'sunghoon', f: 'neutral', t: "At home it's exam week. Forever, apparently. I'll walk into a gym and write my name, and Cherry will be three rows over pretending not to look, and Niki will have renamed the chat something unforgivable." },
          { s: 'sunghoon', f: 'neutral', t: "It's simple there. I miss simple. I didn't know I was allowed to." }
        ], else: [
          { ifHeading: 'R', then: [
            { s: 'sunghoon', f: 'neutral', t: "You're going somewhere with neither of me in it. Good. One of us should get somewhere simple." }
          ], else: [
            { ifHeading: 'true', then: [
              { s: 'sunghoon', f: 'neutral', t: "You'll be in both. You'll see the loud one and the quiet one in the same month. Pretend you don't know me in one of them. It'll be better for my reputation." }
            ], else: [
              { s: 'sunghoon', f: 'sad', t: "You're staying, and I'm going, and I don't know how to do that part. I'm usually the one who stays by the door while everyone else goes through it." }
            ] }
          ] }
        ] }
      ] },
      { n: "He stood up. He took a thin white packet out of his coat, and she knew what it meant now, she'd learned it in December from a landing window. He was about to walk out of the room. Even if the room was a riverbank, and the walls were the dark." },
      { choose: [
        { t: "(Get up and walk with him. Beside him, not behind.)", notes: 3, flag: { 'shoon-walked': true }, then: [
          { n: "She stood and fell in beside him, level with his shoulder, not half a step behind or ahead, and after a few meters he noticed where she was and looked down at her, and slowed, and then didn't light it. He put the packet away. They walked the river to the bridge and back like that, the rope over his shoulder like a sailor's, and he didn't say anything else, and didn't leave." }
        ] },
        { t: "(Take the cigarette out of his fingers.)", notes: 3, then: [
          { n: "She reached out and took it from between his fingers before he'd got the lighter up, and he let her, and stood there with his hand still raised, empty, and looked at it." },
          { s: 'sunghoon', f: 'surprised', t: "...Nobody's ever done that." },
          { s: 'solar', f: 'neutral', t: "Somebody should have." },
          { n: "He sat back down on the bench. After a while she sat beside him. She kept the cigarette. She kept it for a long time, in a coat pocket, and never once thought of throwing it away." }
        ] },
        { t: "(Let him go.)", notes: 1, then: [
          { n: "She let him. He went off along the path toward the bridge with the rope over his shoulder and the small green point of light going ahead of him, and stopped, after a hundred meters, and looked back once, as if checking the door had shut behind him, and went on." }
        ] }
      ] }
    ] },

    { after: '1/24', title: '10: back to the door', place: "Iwatodai Strip · Yeobo's Cafe", time: 'Evening', music: 'tender', scene: [
      { n: "Yeobo's on a late-January evening, the steam on the windows thick enough to write in, and somebody had, from the inside, in a backward-leaning hand: *reserved. - s.* The window table. A winter camellia in the vase, red, fresh that morning. Sunoo behind the counter pretending very hard not to watch." },
      { n: "He was there first, as he always was, in the chair facing the door. When she came in he stood, as he always did. Then he did something he had never once done. He pulled out the chair that faced the door, his chair, and held it for her, and when she didn't move, he went round and sat down in the other one. With his back to the room. With his back to the door." },
      { choose: [
        { t: "(Sit where he's put you.)", notes: 3, then: [
          { n: "She sat. From here the whole café was in front of her, the counter and Sunoo and the pastry case and the door with its little bell, and she understood, sitting in it, that she'd never once seen Yeobo's from this side, because it had never been hers to see from." }
        ] },
        { t: "That's your chair.", notes: 3, then: [
          { s: 'sunghoon', f: 'neutral', t: "Not tonight." },
          { n: "He said it like a man handing over a set of keys, and she sat, and the whole café was in front of her." }
        ] },
        { t: "(Swap them back.)", notes: 1, then: [
          { n: "She swapped them. He stood up, patiently, and swapped them again, like a man resetting a chessboard, and sat down with his back to the door, and waited, and after the third time she gave up and sat where he'd put her." }
        ] }
      ] },
      { cg: 'link-sunghoon-r10' },
      { n: "The bell went behind him. His shoulders did something, a flicker, the whole of him leaning toward a door he couldn't see, and then they did nothing at all. He picked up his coffee." },
      { s: 'sunghoon', f: 'neutral', t: "Who is it?" },
      { s: 'solar', f: 'neutral', t: "A man with an umbrella. He's shaking it all over Sunoo's floor. Sunoo's going to have words with him." },
      { s: 'sunghoon', f: 'neutral', t: "Good. Keep going." },
      { n: "She kept going. Every time the bell rang she told him. A woman with a pram. Two girls from the fan club who saw the back of his head and clutched each other. Junpei, who waved, and then saw the arrangement and stopped dead and backed out onto the pavement, and came in again, just to check, and sat down at the counter very slowly, staring." },
      { ifFlag: 'shoon-door', then: [
        { s: 'sunghoon', f: 'neutral', t: "You asked me. The first night. What that was, with the door." },
        { s: 'sunghoon', f: 'serious', t: "That's what it is. It's me not being able to sit with my back to one. Ever. In either place." },
        { s: 'sunghoon', f: 'neutral', t: "I am now." }
      ], else: [
        { s: 'sunghoon', f: 'serious', t: "I've never sat like this. Back to a door. Not in either place. Not once in my life." },
        { s: 'sunghoon', f: 'neutral', t: "I am now." }
      ] },
      { cg: null },
      { ifFlag: 'shoon-walked', then: [
        { n: "By the river, she thought, he'd let her walk beside him. Not behind. He'd been getting here for a while, an inch of not standing guard at a time, and she'd watched every inch and not known what she was watching." }
      ] },
      { ifHeading: 'S', then: [
        { n: "He took a napkin and wrote on it, not in the prince's hand, in a small square plain hand she'd never seen him use. A phone number." },
        { s: 'sunghoon', f: 'serious', t: "The old phone. At home. Nobody texts on it. If you ever need someone at a door, you call it. I'll come." },
        { n: "He didn't say which door. He didn't say *anything.* He folded the napkin once and put it in her hand and closed her fingers over it, and his hand was very cold and very steady, and then he took it back, and picked up his coffee, as if none of it had happened." }
      ], else: [
        { ifHeading: 'H', then: [
          { s: 'sunghoon', f: 'neutral', t: "At home, when you walk into the council room, Park Sunghoon will stand up. For the vice president. Every time. In front of everyone." },
          { s: 'sunghoon', f: 'neutral', t: "Jungwon will hate it. Niki will make it a bit. I'll keep doing it until you graduate." }
        ], else: [
          { ifHeading: 'R', then: [
            { s: 'sunghoon', f: 'neutral', t: "Where you're going there's neither of me. That's all right. I've thought about it." },
            { s: 'sunghoon', f: 'neutral', t: "If anyone's ever behind you who shouldn't be, think of me, and turn round. That's all I've got for you over there. It's more than it sounds like." }
          ], else: [
            { ifHeading: 'true', then: [
              { s: 'sunghoon', f: 'neutral', t: "You'll have both of me. One will talk too much and one won't talk at all. They'll both stand up when you walk in." },
              { s: 'sunghoon', f: 'neutral', t: "Don't tell them apart out loud. They're sensitive." }
            ], else: [
              { s: 'sunghoon', f: 'neutral', t: "You're staying. I'm going. Someone in this city should watch the door for you, so I've asked Junpei." },
              { s: 'sunghoon', f: 'neutral', t: "God help us both. He said yes before I'd finished the sentence." }
            ] }
          ] }
        ] }
      ] },
      { n: "Then, in the prince's hand, leaning back like it was having its picture taken, he wrote a note on another napkin and turned it round and slid it across." },
      { n: "*Park Sunghoon would like it on the record that he sat with his back to the door, once, in Iwatodai, because Solar was watching it. - s*" },
      { choose: [
        { t: "Thank you, Sunghoon.", notes: 3, then: [
          { s: 'sunghoon', f: 'flustered', t: "Park Sunghoon accepts your—" },
          { n: "He stopped. He started again, and what came out was one word, in Korean, quiet, flat, with nothing in it for anybody to look at, and she didn't know the word, and understood it completely." }
        ] },
        { t: "(Sign it under his.)", notes: 3, then: [
          { n: "She took his pen and wrote, under his, *- s.*" },
          { s: 'sunghoon', f: 'surprised', t: "That's mine." },
          { s: 'solar', f: 'neutral', t: "It's mine too. S." },
          { s: 'sunghoon', f: 'neutral', t: "...Fine. We'll share it. Park Sunghoon is generous. It's well documented." }
        ] },
        { t: "You're going to make me cry in a café.", notes: 2, then: [
          { s: 'sunghoon', f: 'neutral', t: "Not in this café. Sunoo charges for it." }
        ] }
      ] },
      { ifFlag: 'arrived-cherry', then: [
        { n: "The bell went. She looked. She opened her mouth to tell him, and he saw her face before she'd said a word, and his whole body changed, not into the cold one, into something else entirely, something eighteen and terrified." },
        { s: 'sunghoon', f: 'flustered', t: "...Is it?" },
        { s: 'solar', f: 'happy', t: "It's Cherry." },
        { n: "And Park Sunghoon, who had sat with his back to a door for forty minutes for the first time in either of his lives, turned round so fast he knocked the camellia over." }
      ], else: [
        { n: "The bell went. It was Sunoo, coming back in from the bins, and she told him so, and he nodded, and didn't turn round, and they sat there like that, the two of them, until Sunoo started putting chairs up on tables around them very pointedly, and even then they stayed a while." }
      ] }
    ] }
  ],
  afterMax: [
    { title: 'the fan club', place: 'Iwatodai Strip', time: 'Evening', scene: [
      { n: "The fan club had a clipboard now. One of the first-years held it outside Yeobo's in the cold, a list of names in pink pen with a heading, PRINCE SOCIETY (IWATODAI CHAPTER), and at the bottom of the list, in capitals, in a hand Solar knew from the dorm's whiteboard, JUNPEI IORI (HONORARY)." },
      { s: 'junpei', f: 'happy', t: "Leader. Before you say anything. It's research. I'm going in undercover. I'm learning their ways." },
      { n: "Sunghoon came out of the café, and the first-years made a sound, and he signed the clipboard for them, one *- s* at the bottom, with a bow, and then took the pen and very carefully drew a small crown next to Junpei's name." },
      { s: 'sunghoon', f: 'neutral', t: "Honorary members get a crown. It's in the bylaws. I've just written the bylaws." },
      { choose: [
        { t: "(Join too.)", notes: 2, then: [
          { n: "She wrote her name. Sunghoon looked at it upside down for a long moment, and then drew a crown beside hers too, a slightly bigger one, and said nothing at all about it, and Junpei noticed, and was devastated." }
        ] },
        { t: "Junpei, you're a member of a fan club.", notes: 3, then: [
          { s: 'junpei', f: 'serious', t: "HONORARY member. It's different. It's like being a knight." },
          { s: 'sunghoon', f: 'neutral', t: "It's exactly like being a knight. You kneel a lot and nobody pays you." }
        ] }
      ] }
    ] },
    { title: 'the file', place: 'Kirijo Guesthouse', time: 'Evening', scene: [
      { n: "Jungwon was reading at the low table in the lobby with a coffee going cold in front of him, and Sunghoon was behind his chair, arms folded, facing the door, as if it were November again and nothing had ever happened, and Solar came in with a bag of croissants from Sunoo and stopped in the doorway to watch." },
      { s: 'jungwon', f: 'neutral', t: "Sunghoon. Sit." },
      { n: "Not *please.* Not *very nicely.* Just that, without looking up from the page." },
      { n: "And Sunghoon sat. In the chair next to him, straight down, at once, facing the door, but sitting. Jungwon turned a page. Then he stopped, with the page half turned, and looked at the chair, and at Sunghoon in it, and at Solar in the doorway, and back again." },
      { s: 'jungwon', f: 'surprised', t: "...Thank you." },
      { ifFlag: 'shoon-sit', then: [
        { s: 'sunghoon', f: 'neutral', t: "Don't thank me. Thank her. She put a chair out. Two months ago. I've been sitting in it ever since. In my head." }
      ], else: [
        { s: 'sunghoon', f: 'neutral', t: "Don't make it a thing. It's a chair." }
      ] },
      { choose: [
        { t: "(Put a croissant in front of each of them.)", notes: 3, then: [
          { n: "She put them down. Jungwon looked at his, and at Sunghoon, and Sunghoon looked at his, and at Jungwon, and they ate them at exactly the same time, in silence, two men from two places who knew all of each other, and she went and sat on the stairs and watched them do it." }
        ] },
        { t: "Four hundred and fourteen.", notes: 2, then: [
          { s: 'jungwon', f: 'happy', t: "No. I'm closing the file. It was a long file." }
        ] }
      ] }
    ] },
    { title: 'night skate', place: 'Port Island · Seaside Park', time: 'Evening', scene: [
      { n: "The rink after closing again, the booth man asleep in his booth with his knitted hat over his eyes, and Sunghoon teaching her to stop. Just that. Not jumps, not spins, not anything that looked like anything. Stopping." },
      { s: 'sunghoon', f: 'neutral', t: "Toes in. Push out. Not that out. You're stopping, not leaving the country." },
      { ifFlag: 'shoon-secret', then: [
        { s: 'sunghoon', f: 'neutral', t: "And you still haven't seen anything. Ever. On this rink." },
        { s: 'solar', f: 'neutral', t: "Not a thing." },
        { s: 'sunghoon', f: 'neutral', t: "Good. Again. Toes in." }
      ] },
      { choose: [
        { t: "(Stop. Properly. On your own.)", notes: 3, then: [
          { n: "She stopped. Properly, in a little spray of shaved ice, on her own, in the middle of the rink, and stood there amazed at herself with her arms out, and he skated a slow circle round her and stopped beside her, just as cleanly, and didn't say anything, and didn't have to." }
        ] },
        { t: "(Crash into him on purpose.)", notes: 2, then: [
          { n: "He didn't move. She hit him like a bird hitting a window and he took the whole of it without shifting an inch, one hand coming up to her elbow so she didn't bounce off, and looked down at her." },
          { s: 'sunghoon', f: 'neutral', t: "That's also a way of stopping. Not the recommended one." }
        ] }
      ] }
    ] },
    { title: 'soon', place: "Iwatodai Strip · Yeobo's Cafe", time: 'Evening', flags: ['arrived-cherry'], scene: [
      { n: "Cherry was at the window table. Sunghoon was at the window table. Solar was at the window table between them, because Cherry had texted *come to yeobos rn i need a buffer* and Sunghoon had texted *come to yeobo's. Park Sunghoon requires a chaperone,* forty seconds apart." },
      { s: 'cherry', f: 'serious', t: "Why is he looking at me like that." },
      { s: 'sunghoon', f: 'neutral', t: "Like what." },
      { s: 'cherry', f: 'serious', t: "Like I'm a math problem you already know the answer to. Stop it. Sol, make him stop it." },
      { ifFlag: 'shoon-sign', then: [
        { n: "His hand went to his breast pocket, where a napkin had been folded since December, and stayed there, flat, like a man taking an oath, and Solar kicked him under the table, and he took it away again." }
      ] },
      { choose: [
        { t: "He's thinking about something soon.", notes: 3, then: [
          { s: 'cherry', f: 'surprised', t: "..." },
          { s: 'cherry', f: 'serious', t: "Don't say that word in front of me. That word's illegal. He wrote it in my comments in front of the whole school and then didn't explain it for a MONTH." },
          { s: 'sunghoon', f: 'flustered', t: "It's on schedule." },
          { s: 'cherry', f: 'serious', t: "WHAT schedule." }
        ] },
        { t: "(Get up and go and order something. Slowly.)", notes: 2, then: [
          { n: "She went to the counter and ordered very slowly, and Sunoo, who understood everything, made her drink even more slowly, and when she looked back at the window table neither of them was talking, and Cherry was eating Sunghoon's croissant, and he was letting her, and that was the whole conversation." }
        ] }
      ] }
    ] },
    { title: 'the door', place: 'Iwatodai Station · Platform', time: 'Evening', scene: [
      { n: "They were on the platform for no reason, watching the evening trains come in and go out, because he'd said he liked to watch a door that wasn't his to watch, and it turned out a train had a great many." },
      { ifHeading: 'S', then: [
        { s: 'sunghoon', f: 'serious', t: "When we're back, if I see you, at home, in a room, I won't say anything. You'll know why. Don't take it personally." },
        { s: 'sunghoon', f: 'neutral', t: "I'll be at the door. I'm always at the door. Look for the door." }
      ], else: [
        { ifHeading: 'H', then: [
          { s: 'sunghoon', f: 'neutral', t: "When we're back, it's exams, and then the break, and then prom, and then Park Sunghoon on the ice in front of the whole school. You'll be there. You'll be the vice president. You'll have to look official about it." }
        ], else: [
          { ifHeading: 'R', then: [
            { s: 'sunghoon', f: 'neutral', t: "When you're back, wherever that is, take a train sometimes. Stand by the doors. Think of me. Don't get on the wrong one." }
          ], else: [
            { ifHeading: 'true', then: [
              { s: 'sunghoon', f: 'neutral', t: "When we're back, you'll be in both of my places. I've decided to find that convenient. One of me will see you at lunch. The other one will see you at the door." }
            ], else: [
              { s: 'sunghoon', f: 'neutral', t: "When I'm back, you'll be here. On this platform, probably. Watching doors. I taught you that. I'm sorry. It's very tiring." }
            ] }
          ] }
        ] }
      ] },
      { choose: [
        { t: "I'll look for you.", notes: 3, then: [
          { s: 'sunghoon', f: 'neutral', t: "Good. I'll be easy to find. I'm the handsome one." }
        ] },
        { t: "(Watch the next train in with him.)", notes: 3, then: [
          { n: "The next one came in, and the doors opened, and people came out and other people went in, and the doors closed, and neither of them said anything, and it went, and it was, somehow, the best conversation they'd had all week." }
        ] }
      ] }
    ] }
  ]
});
