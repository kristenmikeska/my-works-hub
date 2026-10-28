/* Niki · Fortune (X). Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines
   in scene.js. Searcher (Hoax · strangers), friendship only (romance: null). Not a fighter; he never awakens.
   One boy carrying two lives (Kat's ruling: Jay, Niki and Sunghoon are two-world characters, like Jungwon):
   - HOAX (canon at Ch 99): Nishimura Riki, "Niki", the youngest of Jungwon's council crowd at Hanlim, a star athlete (the game
     says basketball, Sunoo's link) and a chaos agent. Named the chat JUNGWON IS MEAN, renamed it "jungwon is POLITE
     (concerning)" here (crush-jungwon), voted for Solar "to watch Jungwon lose" (rank 4, H), calls Maeumi a tiny rat, says
     Jungwon talks like a gma, calls Sunghoon whipped. Heeseung: "you're on your last straw, niki." Cherry keeps asking whether
     he's a freshman; it is never answered (he dodges, hangout 'what year' and rank 9). Chat voice: LMAOOO, -skull-, bruh, ts,
     u / ur / rly / sumn; handle rikiniki. Calls the older boys hyung; plain "Jungwon" in HOAX register.
   - strangers (state when Solar vanished, deep winter): Riki, sixteen, the Yangs' youngest runner. Long-limbed, fast, a cheeky
     kid pretending to be a hard man; thin silver puffer with a duct-taped patch on the right sleeve, big headphones, bananas
     (he folds the peel), vaults gates, whistles when he's cold, black roots and orange ends. Japanese ("I'm Japanese" is his
     excuse there for not reading anything). His grandmother in Osaka sends a Rilakkuma T-shirt every birthday (eleven; not
     allowed to wear them in front of the other runners). A kitchen where Jungwon's mother mothers him: tangerines and the
     capitals game (miss one, owe a tangerine). "Jungwon-hyung" there; Jungwon calls him "Riki". He is what Haechan was at
     sixteen, and Haechan can't look at him for long (rank 8, gated arrived-haechan; Niki calls him hyung). The game keeps all
     of it oblique: "errands", "the house", "the kitchen", the old folding phone ("Nobody texts on that one. It rings. If it
     rings, I run."). Nothing about what the houses are to each other, the war, his parents, or anything at home after.
   - Here: Iwatodai is in Japan. In one life he can't read the signs; here he reads all of them, and the old women at the
     shrine talk to him like a grandson in his grandmother's Osaka accent (rank 2, run-in). The two-lives thing is said plainly
     once (rank 2, Jungwon's model), then lightly. Ages differ: sixteen in one; the other is the freshman question.
   - His hand (the one acknowledgment, rank 5 only): on a vault he lands and counts his right hand's fingers and wiggles all
     ten at Ken. Unexplained; Solar doesn't understand. Never named, never again.
   - The quiet four inside the loud seven: Jungwon, Jay, Sunghoon and Niki carry two lives; Sunoo, Heeseung and Jake don't get
     the jokes (rank 6 cameo, rank 7 H, rank 9 S).
   Kat's fun interactions: Niki with Ken and Koromaru (ranks 3, 5, 8, holiday 12/23, routines, afterMax): the youngest
   everywhere finally has someone younger and is unbearable and protective about it; Ken disapproves; Koromaru adores him.
   Niki as a menace at Game Panic (ranks 1, 4, 6, 10, hangouts, run-in): every high-score table renamed RKI, Junpei's records
   (JUN) taken and trolled, the dance cabinet, the crane game (the one machine he can't beat: it's luck), Chenle's back corner
   (ifEvent a4-twelve, rank 4).
   Arcana Fortune (writer's pick, for Kat to confirm): the wheel, luck, momentum. "I was right." / "You were lucky." / "Same
   thing." (a4-yeobos) is the spine: rank 6 (luck at the crane), rank 10 (the line comes back to Solar).
   Heading (ranks 3-10): one key passage each, branched S / H / R / true / else (stay), lines only, never choices.
   Telling order: before a5-call-hoax nobody says Solar is Jungwon's girlfriend; Niki flinches (rule one, rank 1, rank 4 H).
   After it: rank 6 (Jihoon at the crane, light) and rank 9's door (ifEvent a5-call-hoax). Nothing touches sophomore year,
   drugs, Danielle's video or anything past Ch 99; time back home is never stated.
   Arrival: a4-yeobos (11/7, flag arrived-sunoo), named in storyEvents. Rank 1 is the first visit after it: no "next day".
   Flags this link sets (all by choices in this file) and where they're read:
     niki-sol       r1 she enters SOL on the drum table                    → r10, afterMax 'the table'
     niki-junpei    r1 she gives Junpei's record back (enters JUN)         → r4
     niki-lilongwe  r2 her mouth answers "Lilongwe"                        → r7, afterMax 'tangerines'
     niki-kenrule   r3 she sides with Ken about the wall                   → r5
     niki-vaulted   r5 she vaults the shrine fence herself                 → r8
     niki-osaka     r7 she offers to go to Osaka with him                  → afterMax 'the platform'
   Story flags / events read: arrived-cherry (r9, hangout 'what year'), arrived-haechan (r8), a4-twelve (r4: Chenle),
   a5-call-hoax (r6, r9). No scene reads more than three distinct ifFlag flags.
   Faces: niki happy, happy-2, neutral, sad, serious, surprised (no flustered). Others only from portraits/index.js: ken happy
   neutral sad serious; koromaru happy neutral sad serious; junpei all six; haechan all six; chenle all six; jungwon all six;
   sunoo all six; cherry happy happy-2 neutral sad serious surprised; jay flustered happy neutral sad serious surprised;
   sunghoon flustered neutral sad serious surprised; heeseung all six; jake happy happy-2 neutral sad serious surprised;
   solar flustered happy neutral sad serious surprised. Mrs. Hayashi (cast, no portrait) has no face.
   Living world (afterRank texts, holidays 12/23 and 1/2, routines, run-ins): data/living-niki.js.
   Housing: the Kirijo guesthouse by the station (FEMC_GAME_LODGING); the dorm's front, lounge and kitchen are visits, and
   visitors are out by eight on school days (rank 3, rank 8). Searchers never close: afterMax plays in person to the end.
   Writer inventions: the RKI tables and Niki's LOL slot; Junpei's initials JUN; Mrs. Hayashi and the shrine's sweeping
   women; Niki's Kansai accent (his grandmother's Osaka); the Rilakkuma keychain from the crane, clipped to the old phone;
   the guesthouse wifi renamed JUNGWON IS MEAN 5G; the Osaka fare he's counted and never bought; Ken as his "kouhai". */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'niki', name: 'Nishimura Riki', short: 'Niki', arcana: 'Fortune', numeral: 'X', from: 'Hoax · strangers',
  kind: 'searcher', world: 'HS', romance: null,
  starts: '11/8', gate: { H: 4, S: 3 }, storyEvents: ['a4-yeobos'],
  home: { area: 'mall', spot: 'Game Panic', slot: 'evening', days: [0, 1, 3, 5],
          hint: 'Evenings at Game Panic in Paulownia Mall, on Sundays, Mondays, Wednesdays and Fridays. Follow the noise. Check the high-score tables.' },
  approach: "Every high-score table in Game Panic says the same three letters, RKI, and at the drum game a long-limbed boy in a silver puffer with tape on one sleeve is eating a banana one-handed and playing with the other, and winning.",
  cast: { heeseung: 'Heeseung', jake: 'Jake', hayashi: 'Mrs. Hayashi' },
  invite: {
    ask: [
      "solar. game panic. now. its an emergency (i am bored)",
      "junpei is here trying to take his record back LMAOOO come watch",
      "free?? i need a witness for sumn illegal (dance machine)",
      "the counter guy said i cant sit on the cabinets. come sit on them w me",
      "ken says hes busy. hes 10. what is he busy with. are u busy",
      "i found a crane machine full of rilakkuma. dont ask. just come",
      "bruh everyone at the guesthouse is studying. for WHAT. come save me",
      "jungwon is ironing again. i cant be in the building. game panic?",
      "i have 600 yen and a dream",
      "come lose to me at the shooter. its tradition now. i made it tradition"
    ],
    ok: ["LETS GO", "ok bet. dont be late, i will rename everything while i wait", "yesss. bring snacks. not bananas i have bananas", "ok ok ok. game panic. back corner. wait no thats chenles. front corner"],
    no: ["boooo", "ts so sad. ok", "fine. ill tell the shooter u said hi", "ur on ur last straw (heeseung voice)"]
  },
  hangouts: [
    [
      { n: "On the way through the mall to Game Panic they passed the café by the fountain, where Sunoo and Jake were standing in front of the menu board with Fuuka's little Korean phrasebook open between them, upside down, which was the wrong way round for both languages." },
      { s: 'jake', f: 'happy-2', t: "Niki! Niki. Thank God. Is this one coffee or is this one a dessert. Sunoo thinks it's a dessert. I think it's a coffee that's also a dessert." },
      { s: 'niki', f: 'happy', t: "It's a matcha thing. With cream. It costs eight hundred yen. It's a dessert pretending to be a drink. Like Jake." },
      { s: 'sunoo', f: 'happy', t: "He reads everything. He reads the bus. He read the back of the shampoo to Heeseung-hyung last night. Out loud. All of it." },
      { n: "Niki stood a little taller in the cold air off the fountain, with his hands in his puffer pockets, looking at the board like a man who had been handed a city and didn't intend to give it back. The youngest at every table he'd ever sat at, and here the two older boys were leaning on him like a railing." },
      { choose: [
        { t: "(Ask him to order for you too.)", notes: 3, then: [
          { s: 'niki', f: 'happy-2', t: "Okay. Okay. Everybody line up. I'm ordering for the whole table. This is the best day of my life." },
          { n: "He ordered for all four of them in a fast, easy, faintly sing-song Japanese that made the girl at the till smile like he'd said something kind about her grandmother, and Jake watched him do it with his mouth slightly open." }
        ] },
        { t: "You're enjoying this way too much.", notes: 2, then: [
          { s: 'niki', f: 'neutral', t: "Yeah. Obviously. Let me have one thing. At home I can't even read the—" },
          { n: "He stopped, and looked at Sunoo and Jake, who hadn't noticed anything, and grinned, and said *the vibe*, and ordered." }
        ] },
        { t: "(Read the menu yourself.)", notes: 2, then: [
          { n: "She could read it. She read it out, slowly, every line, and Niki listened with his arms crossed and his face doing something between pride and betrayal." },
          { s: 'niki', f: 'neutral', t: "Okay, rude. I was having a moment." }
        ] }
      ] }
    ],
    [
      { n: "He had a draft folder. It was on the new phone, the one that buzzed, and it was full of comments he had written for other people's posts and couldn't send, because nothing went out from here, and he scrolled them for her on the bench outside Game Panic with the patience of a curator showing a collection." },
      { phone: [
        { from: 'niki', t: "@jungwongarden ur outfit looks like a tax return" },
        { from: 'niki', t: "@princesunghoon whipped" },
        { from: 'niki', t: "@princesunghoon still whipped" },
        { from: 'niki', t: "@jakeyy this pic makes the food look way better than it was" },
        { from: 'niki', t: "@heeeseung i was NOT on my last straw that day and u know it" }
      ], contact: 'rikiniki · drafts' },
      { s: 'niki', f: 'happy-2', t: "Backlog. When we get home I'm posting all of them in one night. Four hundred comments. They're gonna think I died and came back as a bot." },
      { choose: [
        { t: "Write one for me.", notes: 3, then: [
          { n: "He thought about it with enormous seriousness, thumbs hovering, and then typed, and turned the screen round. *@solarkim who is this. never seen her in my life. (kidding) (unless)*" },
          { s: 'niki', f: 'neutral', t: "That's my nicest one. Don't tell anyone." }
        ] },
        { t: "These are mean.", notes: 2, then: [
          { s: 'niki', f: 'happy', t: "They're accurate. Accurate is a kind of nice. Look it up." }
        ] },
        { t: "(Scroll back to the top.)", notes: 2, then: [
          { n: "At the very top, the oldest draft, from the night they'd crossed, was a single comment under a picture of a croissant. *wait for me.* He took the phone back before she could read whose post it was under, and didn't say anything, and put his headphones on." }
        ] }
      ] }
    ],
    [
      { n: "The guesthouse lobby, after dinner, with the council spread across the sofas in the shapes of boys who had eaten too much, and Niki upside down in an armchair with his feet over the back of it and his head hanging off the seat, eating a banana in a position that should not have been possible." },
      { ifFlag: 'arrived-cherry', then: [
        { s: 'cherry', f: 'neutral', t: "Niki. Real question. No bit. What year are you." },
        { s: 'niki', f: 'happy', t: "I'm in high school, Cherry." },
        { s: 'cherry', f: 'serious', t: "WHICH YEAR." },
        { s: 'niki', f: 'happy-2', t: "A good one." },
        { n: "Cherry threw a cushion at him. It was, Solar gathered from the way nobody else even looked up, the fourth cushion of the evening, and the question was older than the cushions." }
      ], else: [
        { s: 'jake', f: 'neutral', t: "Niki. What year are you, actually? I've known you forever and I don't know. Is that weird? That's weird." },
        { s: 'niki', f: 'happy', t: "I'm in high school, Jake." },
        { s: 'jake', f: 'happy-2', t: "...Okay, that's fair." },
        { n: "It wasn't, at all, and Jake seemed to know it wasn't, and let it go anyway, the way he let everything go, with a little shrug that put it down somewhere soft." }
      ] },
      { choose: [
        { t: "(Guess.)", notes: 2, then: [
          { s: 'solar', f: 'neutral', t: "Freshman." },
          { s: 'niki', f: 'neutral', t: "Wow. Okay. Wow. In front of everyone." },
          { n: "He didn't say she was wrong. He didn't say she was right. He finished the banana upside down and folded the peel in three, neatly, like a letter, and the question stayed exactly where it was." }
        ] },
        { t: "Leave him alone. He's the youngest.", notes: 3, then: [
          { s: 'niki', f: 'happy-2', t: "SEE. She gets it. I'm the youngest. That's my year. My year is youngest." },
          { s: 'heeseung', f: 'neutral', t: "That's not a year, Niki." },
          { s: 'niki', f: 'happy', t: "It's a lifestyle, hyung." }
        ] },
        { t: "(Throw a cushion at him too.)", notes: 2, then: [
          { n: "He caught it upside down without looking, which was so annoying that three people applauded." }
        ] }
      ] }
    ],
    [
      { n: "There was a bakery at the bottom of the Strip that did milk rolls, small soft ones in a paper bag of six, and Niki had found it on his second day here and gone back every day since, and every day he bought six and ate one on the bench outside and said, with real grief, that it wasn't the right one." },
      { s: 'niki', f: 'neutral', t: "It's close. It's like ninety percent. It's the ten percent that's killing me." },
      { s: 'niki', f: 'sad', t: "The right one's from a chain. Like a normal chain. You can get it anywhere at home. I used to get it at like five in the morning on the way to— on the way places." },
      { n: "He tore one in half and gave her the bigger half without looking at which half was bigger, which she would come to understand was the most generous thing he knew how to do with food." },
      { choose: [
        { t: "It's really good, though.", notes: 2, then: [
          { s: 'niki', f: 'neutral', t: "Yeah. That's the worst part. It's good and it's wrong." }
        ] },
        { t: "Describe the right one.", notes: 3, then: [
          { s: 'niki', f: 'happy', t: "Softer. Sweeter. It squashes if you look at it. The bag goes see-through from the butter by the time you get to the corner. You eat it walking. You never sit down to eat it. If you sit down it's a different thing." },
          { n: "He was standing up by the end of the sentence. She didn't think he knew he'd stood up." }
        ] },
        { t: "(Eat it walking.)", notes: 2, then: [
          { n: "She stood and ate it walking, two steps up the Strip and two steps back, and he watched her with his chin on his fist and said *closer*, like a coach, and then *no, faster*, and then laughed so hard he had to put the bag down." }
        ] }
      ] }
    ],
    [
      { n: "A middle-schooler in a baseball cap had challenged him to the fighting game, loudly, in front of his friends, and Niki had looked down at him from his full ridiculous height with an expression of such grave tenderness that the kid took a step back." },
      { s: 'niki', f: 'serious', t: "Are you sure. I'm gonna be honest with you. Man to man. I'm really good." },
      { n: "The kid was sure. The coins went in. And Solar watched Niki, who had cleared every table in the building, lose the first round by a sliver, and the second round by less, with the face of a boy concentrating very hard on almost winning." },
      { choose: [
        { t: "You let him win.", notes: 3, then: [
          { s: 'niki', f: 'neutral', t: "I did not. I would never. He was just lucky." },
          { s: 'niki', f: 'happy', t: "...Lucky's a skill. When you're eleven. Look at him. Look at his face. That's his whole year, that face." }
        ] },
        { t: "(Clap for the kid.)", notes: 2, then: [
          { n: "She clapped. The kid's friends clapped. Niki clapped loudest of all, with his hands up over his head, and the kid walked out of Game Panic like he'd been knighted." }
        ] },
        { t: "Rematch him. Properly.", notes: 2, then: [
          { s: 'niki', f: 'happy-2', t: "Next week. When he's cocky. You have to let them get cocky first. It's called a long game. Jungwon taught me that. Don't tell him." }
        ] }
      ] }
    ]
  ],
  ranks: [
    { after: '11/9', title: '1: new high score', place: 'Paulownia Mall · Game Panic', time: 'Evening', music: 'joy', scene: [
      { n: "Game Panic in the evening was a cave of noise at the back of Paulownia Mall, a low ceiling and a carpet the color of a bruise and forty machines all shouting at once in different keys, the drum game's thunder and the racing game's engines and the zombie shooter's moaning, and over all of it, on every cabinet, the high-score tables scrolling in their little pixel lights." },
      { n: "Every one of them said RKI." },
      { n: "She stood just inside the door and read them, one after another. The racing game, RKI from first to seventh. The drum game, RKI. The zombie shooter, RKI eight times, and then, in ninth place, as if left there out of pity, JUN, and under JUN, in tenth, LOL. The guy at the counter was reading a manga with the air of a man who had stopped fighting it two days ago." },
      { n: "At the drum game, a long-limbed boy in a thin silver puffer was playing one-handed, because the other hand was holding a banana. There was a square of silver duct tape on the right sleeve of the puffer, neat, pressed flat, and big headphones round his neck that he wasn't using, and his hair was black at the roots and orange at the ends, and he finished the song on a perfect run without looking, and turned around, and saw her." },
      { s: 'niki', f: 'happy', t: "SOLAR. Finally. Somebody who isn't eleven." },
      { s: 'niki', f: 'happy-2', t: "Look. Look at it. Two days. I've been in this city two days and I own it. Well. I own this room. But if you think about it, this room's basically the city." },
      { s: 'solar', f: 'neutral', t: "Who's JUN?" },
      { s: 'niki', f: 'neutral', t: "No idea. Some guy. The counter guy says he had every record in here for like two years. He says he cried once. On the racing one." },
      { s: 'niki', f: 'happy', t: "I left him one. I'm not a monster. I put LOL under him so he wouldn't be lonely." },
      { n: "She knew whose initials those were. She knew them from the scuffed cap on the dorm's coat hook and from a voice through the floor at one in the morning shouting at a handheld, and she could see it arrive on her face, because Niki's whole expression lit up from the bottom like a slot machine paying out." },
      { s: 'solar', f: 'neutral', t: "That's Junpei." },
      { s: 'niki', f: 'happy-2', t: "The HAT guy? From your dorm? The one who called me *little man* at the door? Oh, this is so much better. This is the best thing that's happened to me in this universe." },
      { n: "He finished the banana and folded the peel in three, neatly, like a letter, and put it in the puffer's pocket, and she had the feeling, watching the care he took over it, that it was a habit from somewhere that had no bins." },
      { choose: [
        { t: "You can't just take a man's records.", notes: 2, then: [
          { s: 'niki', f: 'neutral', t: "I can, actually. That's what records are. They're for taking. If he wanted to keep it he should've been better." },
          { s: 'niki', f: 'happy', t: "Also he called me little man. I'm taller than him. I'm taller than everyone in your dorm except the boxing guy, and the boxing guy doesn't count, he's built different." }
        ] },
        { t: "(Put a coin in the shooter.)", notes: 3, stat: { proficiency: 1 }, then: [
          { n: "She didn't decide to. The coin was in, and the plastic gun was in her hands, and her hands knew it, the weight and the kick and where to look before anything moved, the way your feet know a staircase in the dark. She cleared the first stage without blinking. Then the second. She stopped breathing somewhere in the third." },
          { n: "She didn't beat him. She came second, between RKI and RKI, and Niki had stopped chewing a long time before that." },
          { s: 'niki', f: 'surprised', t: "WHAT. Since when. Since WHEN are you good at this." },
          { s: 'solar', f: 'neutral', t: "I don't know." },
          { s: 'niki', f: 'serious', t: "You never came to the arcade. At home. You were always at Yeobo's doing homework with—" },
          { n: "He stopped. The drum game behind him played its attract music to nobody. He put both hands up, palms out, like a man backing away from a dog he'd been warned about." },
          { s: 'niki', f: 'neutral', t: "With people. Doing homework with people. Rule one. I didn't say anything. You didn't hear anything." }
        ] },
        { t: "Is that a guesthouse banana?", notes: 2, then: [
          { s: 'niki', f: 'happy', t: "I take one every morning. The man at the desk counts them. He knows it's me. I know he knows. We have a thing." },
          { s: 'niki', f: 'neutral', t: "Yesterday he put two out. Like a dare. I took both. Today there were three. I don't know where this ends, Solar." }
        ] }
      ] },
      { n: "He beat the drum record again, because apparently he could do that whenever he liked, and when the table came up and the three blinking letters waited for their initials he stepped back from the cabinet and pointed at the joystick like he was handing her a microphone." },
      { s: 'niki', f: 'neutral', t: "You do it. I'm bored of my own name." },
      { s: 'niki', f: 'happy-2', t: "Don't tell anyone I said that. I'll deny it. I'll rename every table in here *I DENY IT.* That's eight letters. I'll find a way." },
      { choose: [
        { t: "(Enter SOL.)", notes: 3, flag: { 'niki-sol': true }, then: [
          { n: "S. O. L. The table took it with a little electronic fanfare, and there it sat, first place, in a column of RKI, like a flag on a hill somebody else had already climbed." },
          { s: 'niki', f: 'neutral', t: "SOL. Okay. Okay, that's fine. That's a good one. Short. It sounds like you're about to say something and then you don't." },
          { s: 'niki', f: 'happy', t: "I'm not taking it back. That one's yours. I could. I'm just choosing not to. Write that down." }
        ] },
        { t: "(Enter JUN. Give it back to him.)", notes: 2, flag: { 'niki-junpei': true }, then: [
          { n: "J. U. N. First place. The table played its fanfare for a boy who was, at that moment, almost certainly asleep on the dorm sofa with a game paused on his chest." },
          { s: 'niki', f: 'sad', t: "You're so nice it's actually disgusting." },
          { s: 'niki', f: 'happy-2', t: "...Wait. He's gonna think he did it. He's gonna come in here and see it and think he's back. Oh, that's evil. That's more evil than anything I did. I respect it so much." }
        ] },
        { t: "(Enter RKI. It's his.)", notes: 2, then: [
          { s: 'niki', f: 'happy', t: "Correct. You're learning." },
          { s: 'niki', f: 'happy-2', t: "That's every slot on this machine. Every one. You know what that's called? A dynasty. I'm a dynasty. Somebody tell Jungwon." }
        ] }
      ] },
      { n: "He walked her out through the atrium, past the fountain with its coins and its cold blue light, talking the whole way about the racing game's handling, and at the low rail round the fountain's edge, where everyone else walked round, he put one hand on it and went over it sideways in a single unthinking movement, like water going over a stone, and landed on the other side without breaking his sentence." },
      { s: 'niki', f: 'neutral', t: "Jungwon's gonna ask you if I was annoying." },
      { s: 'solar', f: 'neutral', t: "Were you?" },
      { s: 'niki', f: 'happy', t: "Tell him I was SO annoying. He likes being right about me. It's like, the one thing I do for him." },
      { n: "He was gone up the escalator before she could decide whether that was a joke, taking the steps two at a time against nobody, and she stood by the fountain in the noise of the mall and found she was smiling at a rail." }
    ] },

    { after: '11/16', title: '2: two places', place: 'Naganaki Shrine', time: 'Evening', music: 'tender', scene: [
      { n: "Naganaki Shrine at dusk in late November was cold coming up out of the stone, the lanterns along the path just lit and the trees gone black against a sky the color of weak tea, and three old women in quilted vests were sweeping leaves off the steps with long twig brooms in the slow, untroubled rhythm of people who had swept these steps for forty years and intended to sweep them for forty more." },
      { n: "In the middle of them, on the third step, with a net bag of mikan on his knees, sat Niki, being talked at." },
      { n: "They talked to him like a grandson. She heard it before she was close enough to hear the words, the particular music of it, the scolding that was really petting. And he talked back to them in a Japanese she hadn't heard from him at the arcade, softer at the edges, rising and falling like a shopping street, an old woman's accent from somewhere a long way west of here, and the old women loved it. They loved it so much they kept giving him fruit." },
      { s: 'hayashi', t: "Riki-chan, you'll catch your death. Where's your hat? And look at this jacket. There's tape on it." },
      { s: 'niki', f: 'neutral', t: "It's a style, obaa-chan." },
      { s: 'hayashi', t: "It's tape." },
      { n: "She gave him another mikan as a punishment. He took it with a little bow from where he sat, and saw Solar on the path, and lit up, and patted the stone beside him." },
      { s: 'niki', f: 'happy', t: "Solar. Sit. They think you're my sister. Let them. It's working for me." },
      { n: "She sat. The step was so cold it went straight through her skirt. Mrs. Hayashi, who was the smallest and the fiercest of the three, looked her over, and said something about her not eating enough either, and put a mikan in her lap too, and went back to sweeping." },
      { n: "Along the shrine's wooden rack the ema hung in rows, the little wooden plaques people wrote their wishes on, clacking softly against each other in the wind. Niki leaned back on his elbows and read them aloud, the nearest ones, without being asked, in a bored voice that wasn't bored at all." },
      { s: 'niki', f: 'neutral', t: "This one wants to pass the high school entrance exam. This one wants her son to call. This one wants a dog. Same, dude." },
      { s: 'niki', f: 'neutral', t: "This one just says *please*. That's it. Just *please*. Respect." },
      { s: 'solar', f: 'neutral', t: "You can read all of these." },
      { s: 'niki', f: 'neutral', t: "Yeah." },
      { n: "He peeled the mikan with his thumb, in one long spiral, carefully, the way he'd folded the banana peel." },
      { s: 'niki', f: 'neutral', t: "That's the weird part." },
      { s: 'niki', f: 'serious', t: "Okay. I'm gonna say this once, because Jungwon says if you're gonna tell someone a thing you tell them in a sentence, and if he gets to be the mature one about this I'm gonna lose my mind." },
      { s: 'niki', f: 'neutral', t: "I'm one guy. From two places. Same as him." },
      { s: 'niki', f: 'neutral', t: "In one of them I go to Hanlim, and I'm the youngest at the table, and everybody tells me to get off the counter. Don't ask what year I'm in. Cherry asks me like every day. It's a whole thing now. I'm keeping it going for her." },
      { s: 'niki', f: 'neutral', t: "In the other one I'm sixteen, and I run errands for Jungwon-hyung's family." },
      { n: "He said *errands* the way you'd put a lid on a pot." },
      { s: 'niki', f: 'neutral', t: "And there I can't read anything. Signs, menus, forms, nothing. I'm Japanese, I say. Like it's an excuse. It is an excuse. Everyone just reads stuff to me." },
      { s: 'niki', f: 'sad', t: "And then here I can read every sign in the whole city. And everyone talks to me like that. Like her. I don't know what to do with it. I keep reading the vending machines. Like, all of them. On purpose." },
      { n: "He took two phones out of the puffer and laid them on the step between them, side by side, like exhibits. A new one, with a cracked corner, which buzzed while she looked at it. And an old folding one, scuffed silver, with a sticker half picked off the back, which didn't." },
      { s: 'solar', f: 'neutral', t: "That one doesn't buzz." },
      { s: 'niki', f: 'neutral', t: "Nobody texts on that one. It rings. If it rings, I run. That's the whole job." },
      { s: 'niki', f: 'happy', t: "It hasn't rung. So I'm on vacation. First one ever. I'm doing great at it." },
      { choose: [
        { t: "Which one's the real you?", notes: 2, then: [
          { s: 'niki', f: 'neutral', t: "Both. Duh. I eat bananas in both. I'm the youngest in both. Everybody yells my name in both." },
          { s: 'niki', f: 'happy', t: "Pretty sure that's what real means. Being yelled at in two languages." }
        ] },
        { t: "Does Jungwon know you call him hyung over there?", notes: 3, then: [
          { s: 'niki', f: 'happy-2', t: "He calls me *Riki* over there. Like a teacher. Like I'm in trouble. I'm always a little bit in trouble over there." },
          { s: 'niki', f: 'happy', t: "Here I call him Jungwon and he hates it and he can't say anything, because Sunoo-hyung's watching. It's the best." },
          { s: 'niki', f: 'neutral', t: "The guys don't know. Sunoo-hyung and Jake-hyung and Heeseung-hyung. They think I'm just this." },
          { n: "He waved a hand at the whole of himself, the puffer, the tape, the orange ends of his hair, the mikan peel spiraling off his knee, as if it were a very small amount of person." }
        ] },
        { t: "(Take a mikan off his pile.)", notes: 2, then: [
          { n: "She took one. Mrs. Hayashi, without turning round, said loudly that it was good to see a girl with an appetite, and Niki laughed so suddenly he nearly fell off the step." }
        ] }
      ] },
      { s: 'niki', f: 'happy', t: "Okay. Game. I say a country, you say the capital. You miss, you owe me a mikan. Tangerine. Whatever." },
      { s: 'niki', f: 'neutral', t: "A lady taught me. In a kitchen. She mothers me. I let her." },
      { s: 'niki', f: 'neutral', t: "France." },
      { s: 'solar', f: 'neutral', t: "Paris." },
      { s: 'niki', f: 'neutral', t: "Baby one. Australia." },
      { s: 'solar', f: 'neutral', t: "...Sydney?" },
      { s: 'niki', f: 'happy-2', t: "WRONG. Canberra. You owe me. Okay. Malawi." },
      { choose: [
        { t: "(Say the first thing in your mouth.)", notes: 3, flag: { 'niki-lilongwe': true }, then: [
          { s: 'solar', f: 'neutral', t: "Lilongwe." },
          { n: "It came out before she'd decided to say anything, the way a hand finds the light switch in a house you used to live in. She didn't know where Malawi was. She didn't know she knew a word like that. Her mouth did." },
          { n: "Niki stopped peeling. He looked at her for a long time, with the mikan half undressed in his hand and the old women's brooms going on behind them, *shff, shff*, on the stone." },
          { s: 'niki', f: 'serious', t: "...You always got that one." },
          { s: 'niki', f: 'neutral', t: "Nobody gets that one. You always got that one." },
          { n: "He put the whole peeled mikan in her hand, which was against the rules, and didn't explain, and she didn't ask, because she had the feeling that if she asked he'd have to say where, and he'd already decided not to." }
        ] },
        { t: "I have no idea.", notes: 2, then: [
          { s: 'niki', f: 'neutral', t: "Lilongwe. You owe me two." },
          { n: "The word sat in her mouth after he'd said it like a coin she'd spent once already, somewhere, on something she couldn't remember buying." }
        ] },
        { t: "Is Malawi even a real place?", notes: 2, then: [
          { s: 'niki', f: 'happy-2', t: "Ha! You said that last time too. Word for word. Same face." },
          { n: "Then his own face did something, very quickly, like a shutter, and he looked at the ema instead of at her." },
          { s: 'niki', f: 'neutral', t: "Lilongwe. Two mikan. I'm keeping count." }
        ] }
      ] },
      { n: "When it got too dark to sweep, Mrs. Hayashi chased them off the steps with the broom, not hard, and they went down the long stair toward the street with the lanterns coming on behind them, and Niki didn't take the last six steps at all. He went over the low stone wall beside them instead, one hand, sideways, and landed on the pavement below, and started whistling." },
      { n: "He whistled when he was cold, she'd learn. He was cold now. He whistled the whole way to the corner, some tune she almost knew, and when she caught him up he was holding the old phone, not looking at it, just holding it, the way you'd hold a stone you'd picked up on a beach." }
    ] },

    { after: '11/25', title: '3: senpai', place: 'Iwatodai Dorm · Front', time: 'Evening', music: 'dorm', scene: [
      { n: "Six forty, already full dark, the streetlamp outside the dorm buzzing and the air with that wet cold in it that came up off the river at night and got into your sleeves, and on the front step Ken in a padded jacket zipped to the chin was clipping Koromaru's lead to his collar with the solemn care of a boy defusing something." },
      { n: "Niki came up the street from the station with a paper bag of milk rolls for Fuuka, who'd asked about them, and stopped at the bottom of the step, and looked at Ken, and looked at Ken some more." },
      { s: 'ken', f: 'neutral', t: "Good evening. Visitors are out by eight on school days. I'm informing you in advance." },
      { s: 'niki', f: 'neutral', t: "It's six forty." },
      { s: 'ken', f: 'serious', t: "That's why it's in advance." },
      { s: 'niki', f: 'neutral', t: "How old are you." },
      { s: 'ken', f: 'neutral', t: "Ten." },
      { n: "Niki turned round to Solar, slowly, with his whole face opening up like a door in a gale." },
      { s: 'niki', f: 'happy-2', t: "Solar. He's TEN." },
      { s: 'niki', f: 'happy', t: "I'm the oldest. Me. I'm the oldest guy on this step. Do you know how long I've waited for this. My whole life. Both of them. Kid. Call me senpai." },
      { s: 'ken', f: 'serious', t: "You're not a student at any school I know of." },
      { s: 'niki', f: 'happy', t: "I'm a senpai of life." },
      { n: "Koromaru, who had been sitting on the step being clipped, got up, and walked down to Niki, and sniffed his shoes, and his knees, and the bag of milk rolls, and then lay down on the pavement and rolled over and showed him his whole white belly, right there in the street, in November." },
      { s: 'koromaru', f: 'happy', t: "Woof!" },
      { s: 'ken', f: 'neutral', t: "...He doesn't do that for Junpei-san." },
      { s: 'niki', f: 'happy-2', t: "Because Junpei-san is JUN and he cried on the racing game." },
      { n: "They walked Koromaru to the river together, the three of them and the dog, Ken holding the lead in both hands like the reins of something much bigger, and Niki not on the pavement at all but on the knee-high wall that ran along the river path, walking it heel to toe with his arms out, in the dark, above the black water, talking the whole time." },
      { s: 'ken', f: 'serious', t: "That's dangerous." },
      { s: 'niki', f: 'happy', t: "That's why it's fun, kouhai." },
      { s: 'ken', f: 'serious', t: "I'm not your kouhai. Solar-san. Please tell him to get down." },
      { choose: [
        { t: "Ken's right. Get down.", notes: 2, flag: { 'niki-kenrule': true }, then: [
          { n: "Niki looked at her with a betrayal so total it was nearly operatic, and then got down, and walked on the pavement beside Ken with his hands in his pockets, sulking enormously." },
          { s: 'ken', f: 'happy', t: "Thank you, Solar-san." },
          { n: "Koromaru walked the rest of the way pressed against Niki's leg anyway, as though to make it clear whose side the dog was on, whatever the rules said." }
        ] },
        { t: "(Get up on the wall too.)", notes: 3, stat: { courage: 1 }, then: [
          { s: 'ken', f: 'serious', t: "Solar-san!" },
          { n: "She wobbled on the second step. Niki's hand was at her elbow before she'd finished wobbling, not holding, just there, the way you'd put a hand near a glass you thought might go over, and he walked backwards in front of her the whole length of the wall without once looking where he was going." },
          { n: "Ken held the lead and walked below them on the pavement with tremendous dignity, a crossing guard for two people who had refused to cross anything properly." }
        ] },
        { t: "Ken, why don't you hold his hand?", notes: 2, then: [
          { n: "Ken considered it with real seriousness, and then reached up, and took Niki's hand, firmly, the way a crossing guard takes a small child's, and Niki walked the rest of the wall like that, one hand held by a ten-year-old, so delighted he could barely breathe." },
          { s: 'niki', f: 'happy-2', t: "This is the best day of my life. I have to stop saying that. It keeps being true." }
        ] }
      ] },
      { n: "At the end of the river path, under the bridge lights, Niki jumped down off the wall and crouched to scratch Koromaru behind the ears, and stayed crouched, and for a moment he wasn't talking, which Solar was beginning to understand was rare enough to be worth noticing." },
      { ifHeading: 'S', then: [
        { s: 'niki', f: 'neutral', t: "Where I'm from, the other one, I'm the youngest guy in the whole house. Everybody sends me. *Riki, go. Riki, run. Riki, don't eat that, it's for the guests.*" },
        { s: 'niki', f: 'neutral', t: "And Jungwon-hyung's mom gives me tangerines like I'm five. Peels them first sometimes. I let her. You don't say no to her." },
        { n: "He looked up at Ken, who was standing very straight with the lead, ten years old and pretending, with every bone in his small body, to be older than that. Niki looked at him the way you'd look at a photograph of somewhere you used to live." },
        { s: 'niki', f: 'neutral', t: "Nobody's ever been younger than me. Not in that house." }
      ], else: [
        { ifHeading: 'H', then: [
          { s: 'niki', f: 'neutral', t: "At home I'm the baby. Heeseung-hyung says I'm on my last straw like four times a day. That's a lot of straws. Sunoo-hyung makes me get off the counter. Jay-hyung hits me. Not hard. Kind of hard." },
          { s: 'niki', f: 'happy', t: "Nobody's ever been younger than me. Nobody. Not at the table, not in the chat, not on the team. And now there's him." },
          { n: "He looked up at Ken, who was standing very straight with the lead, ten years old and pretending with every bone in his small body to be older than that, and his face went soft in a way it did not seem to know it was going." }
        ], else: [
          { ifHeading: 'R', then: [
            { s: 'niki', f: 'neutral', t: "Wherever you end up, I'm gonna be the youngest somewhere. That's like, my whole deal. Everywhere I go." },
            { s: 'niki', f: 'happy', t: "Here I'm not. Here I'm a senpai of life. Let me have it while I've got it, okay? Don't take it from me." },
            { n: "He said it lightly, scratching the dog, and didn't look at her, and she had the odd feeling she'd been forgiven for something she hadn't done yet." }
          ], else: [
            { ifHeading: 'true', then: [
              { s: 'niki', f: 'neutral', t: "Everywhere I go I'm the baby. Both places. You've seen me in both, you know. You just don't know you have." },
              { s: 'niki', f: 'happy', t: "You'll remember both. And then you'll know I'm the baby twice. Oh no. That's so embarrassing for me. Don't remember that part." },
              { n: "He looked up at Ken, ten years old and pretending with every bone in his body to be older, and grinned, and didn't say the rest." }
            ], else: [
              { s: 'niki', f: 'neutral', t: "Somebody should be the big brother around here. When we go home. Junpei's not doing it. Junpei's a big brother like a dog is a big brother." },
              { s: 'niki', f: 'neutral', t: "I'll teach him stuff. While I'm here. Then you do it. After." },
              { n: "He said *after* the way you'd step over a crack in the pavement, without looking down, and went on scratching the dog." }
            ] }
          ] }
        ] }
      ] },
      { n: "They walked back. At the dorm step Ken checked the watch on his wrist under the streetlamp and turned it toward Niki like a referee showing a card." },
      { s: 'ken', f: 'serious', t: "Seven fifty. You have ten minutes." },
      { s: 'niki', f: 'neutral', t: "I'm not even a visitor. I'm outside. I'm on the street." },
      { s: 'ken', f: 'serious', t: "You're inside the property line. I checked." },
      { choose: [
        { t: "Ken, he can stay until eight.", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "Until eight. Not eight-oh-one." },
          { s: 'niki', f: 'happy', t: "Eight-oh-one is when I'm at my most dangerous." },
          { n: "He left at seven fifty-nine, at a dead run, to make a point, and Ken watched him go with his arms folded and an expression Solar would have described, on anyone older, as fond." }
        ] },
        { t: "(Race him to the corner.)", notes: 3, then: [
          { n: "She had a head start. It didn't matter. He went past her at the bike rack by going over it instead of round, and was standing under the corner streetlamp with his hands in his pockets, not even breathing hard, by the time she got there, and Koromaru came barreling after them both, off the lead, with Ken shouting, and none of them made it back to the step before eight, and Ken wrote it down." }
        ] },
        { t: "Come back Sunday.", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "Koromaru walks at four on Sundays. Not four-fifteen." },
          { s: 'niki', f: 'happy-2', t: "He's giving me a schedule. Solar. My kouhai is giving me a schedule." }
        ] }
      ] },
      { s: 'niki', f: 'happy', t: "Bye, kouhai." },
      { s: 'ken', f: 'serious', t: "I'm not your kouhai." },
      { n: "When he'd gone, Ken stood on the step for a moment with the lead loose in his hand, looking down the dark street after him." },
      { s: 'ken', f: 'neutral', t: "Solar-san. Is he always like that?" },
      { s: 'solar', f: 'neutral', t: "I think so." },
      { s: 'ken', f: 'serious', t: "...Koromaru likes him." },
      { s: 'ken', f: 'neutral', t: "I'll allow it." }
    ] },

    { after: '12/3', title: '4: dance dance', place: 'Paulownia Mall · Game Panic', time: 'Evening', music: 'city', scene: [
      { n: "Junpei had found out who RKI was." },
      { n: "He was standing in the middle of Game Panic in his cap with his arms spread wide, like a man who had come home to find his house rearranged by burglars with better taste than him, and Niki was sitting on top of the dance cabinet, where he was absolutely not allowed to sit, with his legs dangling, eating a banana." },
      { s: 'junpei', f: 'surprised', t: "TEN. Ten slots! On the shooter! And who's LOL? Who's LOL, man? Is LOL you?" },
      { s: 'niki', f: 'happy', t: "LOL is a state of mind, Junpei-san." },
      { s: 'junpei', f: 'serious', t: "Don't *Junpei-san* me. You called me Stupei in the lobby. Who told you Stupei?" },
      { s: 'niki', f: 'happy-2', t: "Everyone. It's like a public utility." },
      { ifFlag: 'niki-junpei', then: [
        { s: 'junpei', f: 'neutral', t: "And somebody gave me my drum record back. JUN, first place. Anonymous. I nearly cried, man. I thought I'd done it in my sleep." },
        { n: "He looked at Niki. Niki looked at Solar. Junpei followed his eyes, slowly, to Solar, and his whole face fell in like a cake." },
        { s: 'junpei', f: 'sad', t: "...Leader? It was YOU? That's worse! That's charity! I don't want charity, I want my RECORDS!" }
      ], else: [
        { s: 'junpei', f: 'sad', t: "Two years, Leader. Two years I held the racing game. I had a ritual. I had a lucky hat. This is the lucky hat." }
      ] },
      { s: 'junpei', f: 'serious', t: "Dance machine. You and me. Right now. Winner takes the drum table." },
      { s: 'niki', f: 'happy-2', t: "Oh, you don't want that." },
      { s: 'junpei', f: 'serious', t: "I absolutely want that." },
      { ifEvent: 'a4-twelve', then: [
        { n: "From the back corner of the arcade, where the bead curtain hung over the row of PCs, came a soft dry voice that didn't look up from its screen." },
        { s: 'chenle', f: 'neutral', t: "He leans left before every jump. Watch his left shoulder." },
        { s: 'niki', f: 'surprised', t: "HEY. Back corner guy. That's illegal. You can't scout me." },
        { s: 'chenle', f: 'neutral', t: "I'm not scouting. I'm observing. You've been very loud for three weeks. It's a lot of data." },
        { n: "Junpei looked at the back corner as if a saint had spoken from a cloud, and rolled his left shoulder, and nodded once, gravely, to nobody." }
      ] },
      { n: "They got on the pads. The machine counted them in with a voice like a game show host who had taken something, and the song started, and the arrows came up the screen, and for the first thirty seconds Junpei was, genuinely, not bad, sweating and grinning and stamping like a man killing cockroaches in time." },
      { n: "Niki didn't look at the screen at all after the first ten seconds. He looked at Junpei, and at Solar, and at the ceiling, and talked, the entire time, while his feet did something long and fast and impossible underneath him, like a horse that had learned to tap-dance." },
      { choose: [
        { t: "(Cheer for Junpei.)", notes: 2, then: [
          { n: "She cheered for Junpei. Loudly. Junpei heard it and his whole body straightened like a plant in the sun, and he lost anyway, by a lot, but he lost with his chin up, and when it was over he pointed at her across the arcade and said *that's my LEADER*, to everyone, including the counter guy." }
        ] },
        { t: "(Cheer for Niki.)", notes: 2, then: [
          { n: "She cheered for Niki, and Niki, who had been winning already, did the last section facing backwards, which should not have been possible, and Junpei looked at her over his shoulder with the expression of a man watching his own dog run off with the mailman." },
          { s: 'junpei', f: 'sad', t: "Leader. Leader. Not you too." }
        ] },
        { t: "(Get on the second pad and wreck it for both of them.)", notes: 3, stat: { courage: 1 }, then: [
          { n: "There was a second pad. She got on it. She was terrible, truly terrible, her feet arriving at each arrow a full second after it had left, and Niki started laughing so hard in the middle of a run that he missed four in a row, and then six, and then just stood there on the pad with his hands on his knees, wheezing, while the arrows sailed past him." },
          { n: "Junpei won. Junpei won by default, sweating and bewildered, and stood on his pad with both arms in the air as the machine cheered for him, and didn't care at all how it had happened." },
          { s: 'junpei', f: 'happy', t: "I'M BACK. Leader! I'm BACK!" }
        ] }
      ] },
      { n: "Afterwards Niki sat on the step of the dance cabinet with his elbows on his knees and his headphones round his neck, breathing hard for the first time since she'd met him, a water bottle hanging from two fingers, and Junpei went to the counter to buy them all a soda with the air of a man paying a debt." },
      { ifHeading: 'S', then: [
        { s: 'niki', f: 'neutral', t: "Over there I run. Not for a team. Just run. Gates, walls, stairs, the back of places." },
        { s: 'niki', f: 'neutral', t: "There's no scoreboard. You only win if nobody notices you were there. That's the whole game. The best ones, nobody ever knew they were fast." },
        { s: 'niki', f: 'happy', t: "This is way better. Here everyone notices. There's a TABLE. With my NAME on it. Ten times." },
        { n: "He said it laughing, and then he wasn't, quite, and drank the water instead of saying whatever came next." }
      ], else: [
        { ifHeading: 'H', then: [
          { s: 'niki', f: 'happy', t: "At Hanlim I'm on the court every day. I'm a star. Like, objectively. There's a banner. Jay-hyung says it's a small banner. It's a normal banner." },
          { s: 'niki', f: 'happy-2', t: "Oh. I voted for you. In the election. To watch Jungwon lose. It was the best idea I ever had." },
          { s: 'solar', f: 'neutral', t: "Did he?" },
          { n: "Niki opened his mouth. Then he closed it, with a click, and put a hand flat over it, and looked at her over his fingers with enormous, delighted, guilty eyes." },
          { s: 'niki', f: 'neutral', t: "Rule one. Nope. Not telling you how it went. Jungwon would kill me. Politely. With a form." }
        ], else: [
          { ifHeading: 'R', then: [
            { s: 'niki', f: 'neutral', t: "Wherever you're going, they better have one of these. A dance one. Then at least you'll be bad at something that's fun." },
            { s: 'niki', f: 'happy', t: "Not that I'm, like, sad about it. I'm not. You don't go where we are. That's fine. I'll be famous in your memory anyway. Somehow. I'll find a way in." }
          ], else: [
            { ifHeading: 'true', then: [
              { s: 'niki', f: 'happy', t: "When you're back, you'll come watch me play. Both. You'll watch me play, and you'll watch me run, and you'll be the only one who's seen both. Besides Jungwon." },
              { s: 'niki', f: 'neutral', t: "And he doesn't count. He watches like a dad at a recital. He brings notes." }
            ], else: [
              { s: 'niki', f: 'neutral', t: "When I go back I'm gonna tell everyone there's a girl in Japan who wrecked me on the dance machine." },
              { s: 'niki', f: 'neutral', t: "They're gonna ask who. I'm gonna say *nobody you know.* And they'll think I made you up." },
              { n: "He drank the water. He didn't say what he'd think." }
            ] }
          ] }
        ] }
      ] },
      { choose: [
        { t: "(Bump his shoulder with yours.)", notes: 3, then: [
          { n: "She bumped his shoulder. He bumped back, harder, because he was sixteen or a freshman or both, and nearly knocked her off the step, and caught her sleeve, and they sat there like that until Junpei came back with three cans of something purple." }
        ] },
        { t: "You were showing off.", notes: 2, then: [
          { s: 'niki', f: 'happy-2', t: "I'm always showing off. It's not a mode. It's me. There's no off switch. Jungwon's looked." }
        ] },
        { t: "(Hand him the rest of your drink.)", notes: 2, then: [
          { n: "He took it without a word and finished it in one go and handed her back the empty can like a gift, and she found she'd been given one." }
        ] }
      ] },
      { n: "When they left, the racing game's table, the one Junpei had held for two years, had a new name in first place. Junpei hadn't noticed yet. Solar did. It said STP, and below it, in second, RKI, and Niki was walking ahead of her through the atrium with his hands in his pockets, whistling, not looking back, with the air of a boy who had given something away and would deny it to the grave." }
    ] },

    { after: '12/10', title: '5: ten', place: 'Naganaki Shrine', time: 'Evening', music: 'day', scene: [
      { n: "The shrine in December after dark was a pool of lamplight in a black wood, the gravel frosted at the edges where the light didn't reach, and Ken's breath going up in small white clouds as he worked through his form by the playground with the long taped pole, thrust, step, thrust, while Koromaru sat at the top of the steps facing the old house behind the shrine, the way he did at this hour, waiting for somebody." },
      { n: "Niki had sat down next to the dog. He hadn't asked why Koromaru waited there, and he didn't ask now; he just sat on the cold top step with his knees up and one hand resting on the white back, and the dog let him, and Ken, between thrusts, kept looking over at the two of them as if a sum wasn't adding up the way he'd been taught." },
      { n: "Then Niki got up, because sitting still was apparently a muscle he could only use for about four minutes, and walked over to the low wooden fence round the playground, waist-high, and put one hand on the top rail." },
      { s: 'niki', f: 'happy', t: "Kouhai. Lesson time. Put the stick down." },
      { s: 'ken', f: 'serious', t: "It's a spear. And that's a shrine fence." },
      { s: 'niki', f: 'neutral', t: "It's a playground fence." },
      { s: 'ken', f: 'serious', t: "It's on shrine grounds. That makes it a shrine fence." },
      { ifFlag: 'niki-kenrule', then: [
        { s: 'ken', f: 'neutral', t: "And Solar-san agrees with me. She said so. About the wall. By the river." },
        { s: 'niki', f: 'sad', t: "She said that ONCE. You can't build a whole legal system on once." }
      ] },
      { n: "He showed Ken anyway. Hand on the rail, weight over the hand, legs together and sideways, over, and down, light as a cat coming off a table, and Koromaru came down the steps in three bounds and went over the fence after him, delighted, ears flat, and then back, and then over again, as if this were the best game anyone had ever invented and he couldn't believe nobody had told him." },
      { s: 'koromaru', f: 'happy', t: "Woof!" },
      { s: 'ken', f: 'serious', t: "Koromaru. Not you too." },
      { s: 'niki', f: 'happy-2', t: "Your dog gets it. Your dog's a natural. Come on. One. Then you can go back to stabbing the air." },
      { n: "Ken put the spear down very carefully against the swing frame, the way you'd put down something you might need to pick up again in a hurry, and went to the fence, and put his hand on the rail where Niki's had been, and looked at it, and looked at Solar." },
      { choose: [
        { t: "(Stand on the far side to spot him.)", notes: 3, stat: { kindness: 1 }, then: [
          { n: "She went round to the far side and stood with her hands out, not touching, ready. Ken looked at her hands and seemed to decide something. He went over. Not light, not like a cat, but clean, and he landed on both feet and didn't need her hands at all, and stood there with his fists clenched and his chin up and his face doing absolutely nothing, which on Ken meant almost everything." },
          { s: 'ken', f: 'happy', t: "...For the record, I disapprove." }
        ] },
        { t: "Ken, you don't have to.", notes: 2, then: [
          { s: 'ken', f: 'serious', t: "I know. I want to. For the record, I disapprove." },
          { n: "He went over, with a kind of grim care, like someone signing a form they'd read twice, and landed, and Niki cheered as if he'd won a championship." }
        ] },
        { t: "(Vault it yourself first, to show him.)", notes: 2, flag: { 'niki-vaulted': true }, then: [
          { n: "She went over it before she'd thought about it. Not well. Her coat caught, and she landed like a dropped bag, but she landed, on the frosted gravel, on both feet, and turned round, and Niki was screaming." },
          { s: 'niki', f: 'happy-2', t: "SOLAR. SOLAR VAULTED A SHRINE FENCE. KEN, WRITE THAT DOWN." },
          { n: "Ken, white-faced, took a small notebook out of his jacket and did. Then he went over himself, cleanly, as if he'd been shown the way by a person he now had to be better than." }
        ] }
      ] },
      { n: "Niki went over once more, for the joy of it, fast, one hand, and this time he didn't land and turn and talk. He landed, and stood, and looked at his right hand." },
      { n: "He opened it, and closed it. Opened it. He touched each fingertip to his thumb in turn, little finger last, and his lips moved, counting, and then he held both hands up in front of him in the lamplight, fingers spread, and wiggled all ten of them at Ken like a magician showing he had nothing up his sleeves." },
      { s: 'ken', f: 'neutral', t: "What are you doing?" },
      { s: 'niki', f: 'happy', t: "Checking." },
      { s: 'ken', f: 'neutral', t: "Checking what?" },
      { s: 'niki', f: 'happy-2', t: "That they're all there." },
      { n: "He laughed. It was a short, strange laugh, too high, the laugh of someone who'd been handed something they'd stopped expecting and didn't know where to put it down, and Solar stood by the fence in the cold and didn't understand it at all, and her chest went tight anyway, the way it did sometimes for no reason she could find." },
      { choose: [
        { t: "Are you okay?", notes: 2, then: [
          { s: 'niki', f: 'happy', t: "I'm great. I'm SO great. That's the problem." },
          { n: "He didn't explain the problem. He shoved both hands in his puffer pockets, and took them out again, as if he wanted them where he could see them." }
        ] },
        { t: "(Hold up your own ten fingers.)", notes: 3, then: [
          { n: "She held up her hands too, all ten, spread in the lamplight. He looked at them for a long second. Then he laughed again, properly this time, the loud one, and pressed his palms flat to hers, like a high five that had stopped halfway." },
          { s: 'niki', f: 'happy', t: "Show-off." }
        ] },
        { t: "(Don't ask.)", notes: 2, then: [
          { n: "She didn't ask. He noticed her not asking, she could see him notice, and something in his shoulders came down half an inch, and he went and picked up Ken's spear for him and handed it back with both hands, the way Ken handed things." }
        ] }
      ] },
      { ifHeading: 'S', then: [
        { s: 'niki', f: 'neutral', t: "Over there I go over stuff all day. Gates, walls. The trick is you don't think about the landing. You think about the landing, you land wrong." },
        { s: 'niki', f: 'neutral', t: "Jungwon-hyung says don't run where people can see. So I run where people can see. Kidding. Mostly." },
        { n: "He said it to Ken, not to her, the way you'd hand down a tool, and Ken listened to it like it was a rule, which, Solar thought, it probably was, somewhere." }
      ], else: [
        { ifHeading: 'H', then: [
          { s: 'niki', f: 'happy', t: "At home Coach says if he catches me jumping the fence by the field one more time he's benching me. He's caught me like forty times." },
          { s: 'niki', f: 'happy-2', t: "I'm still not benched. Because I'm that good. That's the lesson, kouhai. Be so good they can't bench you." },
          { s: 'ken', f: 'serious', t: "That's a terrible lesson." }
        ], else: [
          { ifHeading: 'R', then: [
            { s: 'niki', f: 'neutral', t: "I don't know where you're going. Somewhere with fences, probably. Everywhere has fences." },
            { s: 'niki', f: 'happy', t: "So now you know how to go over one. That's just life advice. Free. From your senpai." },
            { s: 'ken', f: 'serious', t: "He's not your senpai either, Solar-san." }
          ], else: [
            { ifHeading: 'true', then: [
              { s: 'niki', f: 'neutral', t: "You're gonna be everywhere. All your places. So you need to know how to get over stuff fast. Every place has stuff." },
              { s: 'niki', f: 'happy', t: "Ken. Teach her the spear. Then she's got everything." }
            ], else: [
              { s: 'niki', f: 'neutral', t: "When I'm gone, he's gonna need someone to stand on the other side. Not Junpei. Junpei will be filming." },
              { s: 'niki', f: 'neutral', t: "Ken. She's your catcher now. Okay? After." },
              { s: 'ken', f: 'neutral', t: "...Okay." }
            ] }
          ] }
        ] }
      ] },
      { n: "Koromaru went back up to the top step when it was time, and sat facing the dark house, and Niki went and sat beside him again without a word for exactly as long as the dog sat, which was a long time, in the cold, with his hands out of his pockets, resting on his knees, where he could see them." }
    ] },

    { after: '12/18', title: '6: the claw', place: 'Paulownia Mall · Game Panic', time: 'Evening', music: 'mystery', scene: [
      { n: "There was one machine in Game Panic he couldn't beat." },
      { n: "It was a crane game by the door, a glass box full of soft brown bears and white bears and a yellow chick, piled in a heap under a claw that came down like a hand that had given up on life, and closed, and lifted, and opened again on nothing. Niki stood in front of it with his forehead almost on the glass and a stack of hundred-yen coins on the ledge, and he wasn't talking, which was how she knew it was serious." },
      { s: 'niki', f: 'serious', t: "It's rigged." },
      { s: 'niki', f: 'serious', t: "Everything else in here is skill. Reflexes. Timing. This one's just luck. It decides. You can do everything right and it decides you don't get one." },
      { s: 'niki', f: 'neutral', t: "I hate it so much. I've put in two thousand yen." },
      { ifEvent: 'a5-call-hoax', then: [
        { n: "The guy at the counter put down his manga long enough to say something to Niki in a low voice, nodding at the other crane by the wall, the big one, and Niki's eyebrows went up and stayed up." },
        { s: 'niki', f: 'surprised', t: "He says a guy spent like a day's pay on that one the other night. For a dog with a dumb face. He says he thought the guy was going to cry." },
        { s: 'niki', f: 'neutral', t: "...Jihoon. Right? That was Jihoon." },
        { s: 'solar', f: 'neutral', t: "I pushed the button." },
        { s: 'niki', f: 'neutral', t: "Of course you did. Of course it was you. That's so annoying." },
        { n: "He shook his head at the glass, slowly, like a man who had just been told the ending of a film he'd paid to see, and fed the claw another coin out of spite." }
      ] },
      { choose: [
        { t: "(Try it yourself.)", notes: 2, then: [
          { n: "She put a coin in. The claw went down, and closed on a white bear's ear, and lifted it a centimeter, and let go with what looked like real contempt." },
          { s: 'niki', f: 'happy', t: "SEE. Rigged. It doesn't even care that it's you." }
        ] },
        { t: "It's just luck, Niki. You can't beat luck.", notes: 3, then: [
          { s: 'niki', f: 'serious', t: "Watch me." },
          { n: "He fed it a coin with the ceremony of a man lighting a candle in a church." }
        ] },
        { t: "(Put a coin on his stack.)", notes: 2, then: [
          { n: "She put a hundred yen on top of his stack. He looked at it, and at her, and said *sponsor*, with real gravity, and fed it in." }
        ] }
      ] },
      { n: "The claw went down. It closed on nothing much, a tangle of key chains at the very edge of the pile, and lifted, and swung, and somewhere over the chute something small and brown slipped out of the tangle and fell, and bounced, and dropped through the flap with a soft little thump." },
      { n: "Niki crouched and took it out. It was a key chain. A tiny brown bear, flat-faced and sleepy, lying on its stomach with its arms out, on a short silver chain." },
      { n: "He didn't cheer. That was the first strange thing. He crouched there on the bruise-colored carpet with the bear in his palm and looked at it, and the arcade went on shouting all round him, and he didn't say anything at all." },
      { choose: [
        { t: "Who's it for?", notes: 3, then: [
          { s: 'niki', f: 'neutral', t: "My grandma sends me these. Not these. Shirts. With him on. Every birthday." },
          { s: 'niki', f: 'neutral', t: "I have eleven. I'm not allowed to wear them." },
          { s: 'solar', f: 'neutral', t: "Not allowed?" },
          { s: 'niki', f: 'neutral', t: "In front of people. Certain people. You can't be a guy who goes over gates in a shirt with a bear on it. They'd never let it go." }
        ] },
        { t: "It's cute.", notes: 2, then: [
          { s: 'niki', f: 'serious', t: "He's not cute. He's a lifestyle. He lies down all day and nobody makes him do anything. He's my hero." },
          { n: "He said it with his whole chest, and closed his fingers over the bear, carefully, like you'd close your hand over a moth." }
        ] },
        { t: "(Crouch down next to him.)", notes: 2, then: [
          { n: "She crouched beside him. He held the bear out on his palm so she could see it, not to give it to her, just so somebody else had seen it, and then took it back." }
        ] }
      ] },
      { n: "He clipped it to the old folding phone. Not the new one that buzzed. The old one, the scuffed one, the one nobody texted on, so that the little bear hung off the bottom of it on its chain and swung when he moved, a ridiculous soft thing on the hardest object he owned." },
      { s: 'niki', f: 'happy', t: "There. Now if it rings, he comes too." },
      { n: "They sat on the bench outside Game Panic afterwards with two cans from the machine, and the mall was full of December, tinsel on the escalators and a song about bells going round on a loop, and she asked him, because it had been sitting in her since Yeobo's, how he'd known. That night. The green door. Which way to go." },
      { ifHeading: 'S', then: [
        { s: 'niki', f: 'neutral', t: "Over there you learn to feel a door before it opens. Who's on the other side. If it's gonna be bad. You don't think about it. You just feel it in your back." },
        { s: 'niki', f: 'neutral', t: "I felt that one, and it wasn't bad. It was him. Jungwon-hyung. And then it was you. Behind him. Like a second knock." },
        { s: 'niki', f: 'happy', t: "So I went. Everyone else followed me. They think I'm brave. I'm not brave. I'm just fast at knowing stuff." }
      ], else: [
        { ifHeading: 'H', then: [
          { s: 'niki', f: 'neutral', t: "We were at Yeobo's at closing. Sunoo-hyung was mopping. Exams were at eight. Everybody was texting Jungwon and he wasn't answering, and that's not him. He always answers. He answers with a full stop, but he answers." },
          { s: 'niki', f: 'happy', t: "And the door went green, and I just knew. I didn't even put my croissant down. I walked through with the croissant." },
          { s: 'niki', f: 'happy-2', t: "Jake-hyung still talks about the croissant. He says it was the bravest thing he ever saw. It was a croissant." }
        ], else: [
          { ifHeading: 'R', then: [
            { s: 'niki', f: 'neutral', t: "I don't know how I knew. I just did. Like knowing which way a ball's gonna bounce off the rim." },
            { s: 'niki', f: 'happy', t: "Maybe I'm lucky. Maybe that's all it is. Jay-hyung says I'm lucky. I say same thing." }
          ], else: [
            { ifHeading: 'true', then: [
              { s: 'niki', f: 'neutral', t: "I felt it both ways at once. Like two doors in one door. One at Yeobo's and one at— the other place." },
              { s: 'niki', f: 'happy', t: "I picked the one with the most people I like behind it. It was both. Weird night. I didn't even put my croissant down." }
            ], else: [
              { s: 'niki', f: 'neutral', t: "I felt it. I'm gonna feel the one back, too, when it's time. Before everyone." },
              { s: 'niki', f: 'neutral', t: "You won't. That's okay. You don't need to. You're not going through it." },
              { n: "He drank from the can and looked at the escalators, going up and down, up and down, carrying people who all knew where they were going." }
            ] }
          ] }
        ] }
      ] },
      { n: "Down the atrium, past the fountain, three figures came out of the bookshop together in a loose, unhurried triangle: Jay with his jacket collar up, Sunghoon with a paper bag held like a scepter, and Jungwon in the middle with a stack of workbooks. Jay saw them on the bench and lifted his chin, once. Sunghoon raised the paper bag an inch. Jungwon looked at the little bear swinging off the old phone in Niki's hand, and looked at it for a moment longer than a key chain deserved, and said nothing, and nodded." },
      { n: "Behind them, catching up, Jake was waving with both arms and Sunoo was calling out that they'd bought too many workbooks again and what was wrong with all of them, and Jay and Sunghoon and Jungwon turned round to answer at exactly the same time, three faces closing over something at once like hands over a card, and Solar watched it happen, and didn't know what she'd seen." },
      { s: 'niki', f: 'happy', t: "Ignore them. They're being old." }
    ] },

    { after: '12/27', title: '7: osaka', place: 'Iwatodai Station · Platform', time: 'Evening', music: 'tender', scene: [
      { n: "Winter break, the twenty-seventh, and Iwatodai Station was full of people going home for the New Year with suitcases and paper bags of gifts and the specific tired brightness of people who had a train to catch, and Niki was standing in front of the fare chart on the wall by the ticket machines with his hands in his puffer pockets, reading it." },
      { n: "He wasn't reading all of it. She watched him for a minute before he noticed her. His eyes went to one place on the big map of lines and prices and stayed there, and then went away, and came back, the way your tongue goes back to a loose tooth." },
      { s: 'niki', f: 'neutral', t: "Oh. Hi. I'm not doing anything." },
      { s: 'solar', f: 'neutral', t: "You're reading the fares." },
      { s: 'niki', f: 'neutral', t: "I read everything. I told you. I read the vending machines." },
      { n: "She looked where he'd been looking. A long way down the chart, past Tokyo, past places she'd never heard of, in small neat characters. Shin-Osaka. And a price beside it that would have taken most of a month of Game Panic." },
      { s: 'niki', f: 'neutral', t: "Fourteen thousand and something. One way. I've got it. Mitsuru gave everyone an allowance and I didn't spend any of mine because the counter guy at Game Panic lets me play for free now. Out of fear." },
      { s: 'niki', f: 'neutral', t: "My grandma lives in Osaka. In the— in one of mine. She's eighty-one. She has a hat with fake cherries on it. She bows at everybody, even the bus." },
      { s: 'niki', f: 'neutral', t: "I know her address. I know the shopping street. I know which way her door faces." },
      { n: "They went out onto the platform because it was there. It was cold enough that the air hurt the inside of her nose, and the lights of the city across the tracks were going on one by one, and he started whistling, very quietly, the tune she almost knew, and stopped, and started again." },
      { s: 'niki', f: 'neutral', t: "In this Osaka maybe there's a her. Maybe there isn't. I could go and look." },
      { s: 'niki', f: 'sad', t: "But if she's not there, I'd know. And if she is there, and she doesn't know me—" },
      { n: "He didn't finish it. He didn't have to. Solar stood on the platform beside him, a girl who had looked at a booth full of boys at Yeobo's and seen strangers, and every one of them had had to stand there and let her, and her face went hot in the cold, all at once, from the neck up." },
      { s: 'niki', f: 'neutral', t: "...Yeah. You get it. You're the only one who'd get it. Isn't that funny." },
      { ifFlag: 'niki-lilongwe', then: [
        { s: 'niki', f: 'neutral', t: "You got Lilongwe, though. At the shrine. You didn't know you knew it and you knew it." },
        { s: 'niki', f: 'happy', t: "So maybe she'd know me in her mouth. Like that. Without knowing why. That'd be enough. Probably. I don't know." }
      ] },
      { choose: [
        { t: "Let's go. Tomorrow. I'll come with you.", notes: 3, flag: { 'niki-osaka': true }, then: [
          { s: 'niki', f: 'surprised', t: "...You'd come?" },
          { n: "He looked at her as if she'd just gone over a fence he'd have walked round, coat caught and all, and he couldn't decide whether to laugh." },
          { s: 'niki', f: 'neutral', t: "No. Not yet. Not tomorrow." },
          { s: 'niki', f: 'happy', t: "But you'd come. Okay. Okay. That's like, most of it. That's most of going." }
        ] },
        { t: "What would you say to her?", notes: 2, then: [
          { s: 'niki', f: 'neutral', t: "Nothing. I'd buy something in her shop. Like a normal guy. I'd say *thank you* in her accent and see if her face did anything." },
          { s: 'niki', f: 'neutral', t: "That's how you check. You don't ask. You just see if their face does anything." }
        ] },
        { t: "(Stand with him. Don't say anything.)", notes: 3, then: [
          { n: "She didn't say anything. A train came in, not theirs, not going anywhere near Osaka, and the doors opened, and people got off with their gifts and their suitcases, and the doors closed, and it pulled away, and he watched it go with his chin in the collar of the puffer, and she stood next to him the whole time with her shoulder almost touching his, and it was, she thought, the most either of them had said all day." }
        ] }
      ] },
      { ifHeading: 'S', then: [
        { s: 'niki', f: 'neutral', t: "Over there she's the one who sends me stuff. Every birthday. Never misses. And Jungwon-hyung's mom with the tangerines." },
        { s: 'niki', f: 'neutral', t: "That's my people. That's the list. It's not a long list. I keep it really clean." }
      ], else: [
        { ifHeading: 'H', then: [
          { s: 'niki', f: 'neutral', t: "The guys at home don't even know she exists. Sunoo-hyung would cry. He'd make her something. Jake-hyung would try to call her *grandma* on the first day. Heeseung-hyung would bow too low and pull something." },
          { s: 'niki', f: 'neutral', t: "Only Jungwon knows. And Jay-hyung and Sunghoon-hyung. We don't talk about it at the table. It's like a table inside the table." }
        ], else: [
          { ifHeading: 'R', then: [
            { s: 'niki', f: 'neutral', t: "You're going somewhere really far, huh. Further than Osaka. I can tell. You've got that look, like the people with the suitcases." },
            { s: 'niki', f: 'happy', t: "Send a postcard. Kidding. You can't. None of us can. That's the joke. It's a good joke. I'm gonna keep telling it." }
          ], else: [
            { ifHeading: 'true', then: [
              { s: 'niki', f: 'neutral', t: "You're gonna get all yours back. All of them. Every single person. At once." },
              { s: 'niki', f: 'happy', t: "That's so greedy. I love it. That's the most greedy thing anyone's ever done. Take me with you. I mean. You will. Both of me." }
            ], else: [
              { s: 'niki', f: 'neutral', t: "You're staying here. Where nobody knows you. On purpose." },
              { s: 'niki', f: 'sad', t: "...I don't get it. I don't. But you'd know about that more than me. You're the one who's done it." }
            ] }
          ] }
        ] }
      ] },
      { choose: [
        { t: "(Unwind your scarf and put it round his neck.)", notes: 3, stat: { kindness: 1 }, then: [
          { n: "She took her scarf off and put it round his neck and tucked the ends into the puffer, the way you'd do it for a little kid, and he let her, standing very still, and then looked down at it, and up, and didn't make a single joke, which was so unlike him that she nearly took it back." },
          { s: 'niki', f: 'neutral', t: "...It's not even that cold." },
          { n: "He kept it. He was still wearing it two weeks later." }
        ] },
        { t: "You whistle when you're cold.", notes: 2, then: [
          { s: 'niki', f: 'neutral', t: "I whistle when I'm cold." },
          { s: 'niki', f: 'happy', t: "She says it's so she can find me. In the shop. She just listens. Then she yells my name. Then she gives me something to eat." }
        ] },
        { t: "Come on. Let's get something hot.", notes: 2, then: [
          { s: 'niki', f: 'happy', t: "Something hot and something sweet. And something with meat in it. And a milk roll, even though it's the wrong one." },
          { n: "He was already walking, already lighter, already reading the station shop's signs aloud to her, every one, as if to remind the city that he could." }
        ] }
      ] },
      { n: "On the way down the stairs he looked back once, over his shoulder, at the fare chart on the wall, the way you'd look back at a window you'd decided not to knock on, and then he didn't look again." }
    ] },

    { after: '1/8', title: '8: eleven shirts', place: 'Iwatodai Dorm · Lounge', time: 'Evening', music: 'dorm', scene: [
      { n: "Featherman, on the lounge TV, at full volume. Ken on the floor in front of it with his knees drawn up and his face lit blue and red and gold by five people in helmets exploding something, and Koromaru across Ken's feet, and on the sofa behind them, with his long legs folded under him like a deck chair, Niki, with his puffer open." },
      { n: "Under the puffer he was wearing a T-shirt. It was pale yellow, and in the middle of it, large, flat-faced, sleepy, lying on its stomach with its arms out, was a brown bear." },
      { n: "It was the first time she'd ever seen him without the puffer zipped to the chin. She stood in the lounge doorway and looked at the bear, and the bear looked back, unbothered, and Niki saw her look and went perfectly still, like a cat on a counter caught in a kitchen light." },
      { s: 'niki', f: 'neutral', t: "Don't." },
      { s: 'ken', f: 'neutral', t: "I already said something. I said it was unserious." },
      { s: 'niki', f: 'neutral', t: "He said it was unserious." },
      { s: 'ken', f: 'serious', t: "It is unserious. But the colors are coordinated." },
      { ifFlag: 'niki-vaulted', then: [
        { s: 'ken', f: 'neutral', t: "Also, Solar-san vaulted a shrine fence in December. I wrote it down. It's in my notebook. We're all unserious now." }
      ] },
      { choose: [
        { t: "It suits you.", notes: 3, then: [
          { s: 'niki', f: 'neutral', t: "It doesn't suit me. Nothing suits me. I'm a guy in a puffer." },
          { n: "But he didn't zip the puffer up. He sat there with it open and the bear on his chest and his ears going slowly, steadily red, all the way to the orange ends of his hair." }
        ] },
        { t: "Ken, tell him it's nice.", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "...It's nice." },
          { s: 'niki', f: 'happy-2', t: "He said it's NICE. Kouhai. Write that down. In the notebook. Next to the fence." }
        ] },
        { t: "(Sit down. Don't mention the shirt.)", notes: 2, then: [
          { n: "She sat on the other end of the sofa and watched Featherman and said nothing about the bear at all. After a minute, out of the corner of her eye, she saw his shoulders come down from round his ears." }
        ] }
      ] },
      { s: 'niki', f: 'neutral', t: "Number four. It's from when I was nine. It still fits because she buys them big. She says I'll grow. I always grow." },
      { s: 'niki', f: 'neutral', t: "I've never worn one outside my room. Not once." },
      { ifHeading: 'S', then: [
        { s: 'niki', f: 'neutral', t: "Over there I can't. The other guys would never let it go. I'm supposed to be— you know. A guy who goes over gates. Not a guy with a bear." },
        { s: 'niki', f: 'neutral', t: "Here nobody from there can see. Except hyung. And Jungwon-hyung. And they won't say. They're good at not saying. It's like their main thing." }
      ], else: [
        { ifHeading: 'H', then: [
          { s: 'niki', f: 'neutral', t: "At home I could wear it. Nobody'd care. The guys would roast me for a day. Jay-hyung would roast me for a month. Sunoo-hyung would say it's cute and mean it, which is worse." },
          { s: 'niki', f: 'neutral', t: "I still don't. I don't know why. Habit. From the other one, I guess. Habits leak." }
        ], else: [
          { ifHeading: 'R', then: [
            { s: 'niki', f: 'neutral', t: "Wherever you're going, wear the dumb shirt. That's all I'm saying. Whatever your dumb shirt is." },
            { s: 'niki', f: 'happy', t: "That's my whole advice for your entire life. You're welcome. It cost me a lot to figure that out. Like, eleven shirts." }
          ], else: [
            { ifHeading: 'true', then: [
              { s: 'niki', f: 'neutral', t: "You'll see me in both. All the time. In a puffer. In a uniform. Never in this." },
              { s: 'niki', f: 'happy', t: "So you're the only one who's ever gonna see this. Ken doesn't count. Ken, you don't count." },
              { s: 'ken', f: 'serious', t: "I count." }
            ], else: [
              { s: 'niki', f: 'neutral', t: "When we go home I'm leaving one here. With him. Don't tell him. Number seven. It's the one with the strawberry." },
              { s: 'niki', f: 'neutral', t: "Somebody has to have one who's allowed to wear it." }
            ] }
          ] }
        ] }
      ] },
      { ifFlag: 'arrived-haechan', then: [
        { n: "Footsteps from the kitchen. Haechan, in a hoodie, with a mug in each hand, coming through the lounge toward the stairs, and Niki saw him and was up on his knees on the sofa before anyone could stop him." },
        { s: 'niki', f: 'happy-2', t: "Hyung! HYUNG. Look. Featherman. Sit. Ken's explaining the lore. There's a LOT of lore." },
        { n: "Haechan stopped. He looked at Niki, at the bear, at the long arms and the elbows and the orange ends and the open, loud, delighted face. He looked for about as long as it takes to read a short sign. Then he looked away, at the window, at the dark glass with the lounge reflected in it, and stayed looking at that." },
        { s: 'haechan', f: 'neutral', t: "Nice shirt." },
        { n: "That was all. He went up the stairs with his two mugs. Niki sat back down on his heels with his mouth open on the next thing, and closed it, and for a second looked about nine." },
        { s: 'niki', f: 'neutral', t: "...He does that. He's always like that with me. I don't know what I did." },
        { n: "Later, going up to bed, she found Haechan sitting halfway up the stairs in the dark with both mugs on the step beside him, gone cold. He didn't explain. He looked at her, and then down the stairwell at the light from the lounge, where Featherman was still going and somebody was laughing too loud at it." },
        { s: 'haechan', f: 'sad', t: "He's sixteen." },
        { n: "He said it as though that were a whole sentence, a complete thing, with nothing missing from it. Then he picked up the mugs and went up." }
      ] },
      { choose: [
        { t: "Featherman Red is the best one.", notes: 2, then: [
          { n: "Ken and Niki turned round at exactly the same moment with exactly the same look of profound injury, and spent the next ten minutes, together, as a united front, explaining to her why that was wrong, and Koromaru sighed on Ken's feet like a dog who had heard all of this before." }
        ] },
        { t: "(Watch the rest of the episode with them.)", notes: 3, then: [
          { n: "She sat down on the floor beside Ken. Niki slid off the sofa and sat on her other side, so the three of them were in a row in the blue light, and Koromaru rearranged himself across all six of their feet, and nobody said anything until the credits." }
        ] },
        { t: "Visitors are out by eight, you know.", notes: 2, then: [
          { s: 'ken', f: 'serious', t: "It's seven twenty-two. He has thirty-eight minutes. I'm counting." },
          { s: 'niki', f: 'happy', t: "He's counting. He counts for me. That's love, Solar." }
        ] }
      ] },
      { n: "He zipped the puffer up at seven fifty-eight, at the door, all the way to the chin, so the bear was gone, and stood on the step for a second as if he'd been somewhere warm and was putting it away carefully for later, and then went off down the street at a run, because he was always going to run, and the cold took his whistle and carried it back to the dorm like something he'd dropped." }
    ] },

    { after: '1/16', title: '9: jungwon is mean 5G', place: 'Kirijo Guesthouse', time: 'Evening', music: 'joy', scene: [
      { n: "The guesthouse lobby after dinner was a council meeting with no agenda, the sofas full and the heater ticking and the smell of somebody's instant noodles, Heeseung with a book he wasn't reading, Jake on the floor with his back against the sofa, Sunoo at the little front-desk counter doing a crossword in pen, Jay in the armchair by the window with his eyes shut, Sunghoon standing at the glass door watching the street as if it owed him something." },
      { n: "And Niki on the arm of Jake's sofa with his phone held up over his head in both hands, grinning at the ceiling." },
      { s: 'heeseung', f: 'serious', t: "Niki. Change it back." },
      { s: 'niki', f: 'happy', t: "Change what back, hyung." },
      { s: 'heeseung', f: 'serious', t: "The wifi. The guesthouse wifi. Mitsuru's wifi. The Kirijo Group's wifi, Niki. The desk man asked me about it. He asked me what it meant. I had to translate it for him." },
      { n: "Jake turned his phone round so Solar could see. The network list. Second from the top, between the guesthouse's own and somebody's printer, a new one." },
      { phone: [
        { from: 'lockscreen', t: "JUNGWON IS MEAN 5G" }
      ], contact: 'Wi-Fi' },
      { s: 'jake', f: 'happy-2', t: "It's faster than the real one. That's the worst part. I'm on it right now." },
      { s: 'heeseung', f: 'neutral', t: "You're on your last straw, Niki." },
      { s: 'niki', f: 'happy-2', t: "How many straws do I have left, hyung. Total. Like, numerically." },
      { s: 'heeseung', f: 'neutral', t: "None. You've had none since you learned to walk." },
      { ifFlag: 'arrived-cherry', then: [
        { n: "Cherry, from the stairs, with her hair in a towel and her phone already out, leaned over the banister." },
        { s: 'cherry', f: 'surprised', t: "Wait. Heeseung. When did he learn to walk. How long ago was that. Is he a freshman? Niki. Are you a freshman." },
        { s: 'niki', f: 'happy', t: "Heeseung-hyung was speaking metaphorically, Cherry." },
        { s: 'cherry', f: 'serious', t: "I'm going to find out. I'm going to find out before we go home. I'll look at your ID while you sleep." },
        { s: 'niki', f: 'happy-2', t: "I don't have an ID. I'm a free spirit." }
      ] },
      { choose: [
        { t: "What's the password?", notes: 2, then: [
          { s: 'niki', f: 'happy', t: "It's *ironssocks*. All one word. No caps. Because he does. Because he irons his socks." },
          { s: 'jake', f: 'happy', t: "He does, though." }
        ] },
        { t: "(Side with Heeseung.)", notes: 2, then: [
          { s: 'solar', f: 'neutral', t: "Change it back, Niki." },
          { s: 'niki', f: 'sad', t: "Not you too. Everyone's ganging up on the youngest. This is a hate crime against babies." },
          { s: 'heeseung', f: 'happy', t: "Thank you, Solar. Finally. A reasonable person in this building." }
        ] },
        { t: "(Take his phone and rename it RKI.)", notes: 3, then: [
          { n: "She took the phone out of his hands, over his head, while he was busy defending himself, and found the settings, and changed it, and handed it back. The network list refreshed. JUNGWON IS MEAN 5G was gone. In its place, three letters." },
          { s: 'niki', f: 'surprised', t: "...Oh, that's so much worse. That's so much worse for ME. Everyone's gonna know it's me." },
          { s: 'jake', f: 'happy-2', t: "Everyone already knew it was you!" }
        ] }
      ] },
      { n: "The door to the stairs opened, and Jungwon came down into the lobby in a cardigan with a stack of ironed shirts over one arm, the way other people carried a cat, and stopped at the bottom step, and looked at the room, and at Niki, and at his own phone, on which, Solar could see from here, the network list was open." },
      { ifHeading: 'S', then: [
        { s: 'niki', f: 'happy', t: "Jungwon-hyung, I can explain—" },
        { n: "It came out of him before he heard it. *Hyung.* Not the way he said it to Heeseung or to Jake, light, automatic, a word you tossed at someone older across a table. The other way. Lower. Like a word from a different room." },
        { n: "The lobby went quiet in a strange way. Jay, in the armchair, didn't open his eyes, but his hand stopped on the arm of the chair. At the glass door, Sunghoon turned a page of nothing. Sunoo looked up from his crossword with a small puzzled frown, as though he'd heard a song he knew played in the wrong key." },
        { s: 'sunoo', f: 'neutral', t: "...Since when do you call him hyung?" },
        { s: 'jungwon', f: 'neutral', t: "Riki." },
        { n: "That was all Jungwon said. Just the name. Quietly, the way you'd put a hand flat on a table. And Niki, who had an answer for everything, who had never once in her presence let a silence go unfilled, closed his mouth, and nodded, and looked at the floor." },
        { s: 'niki', f: 'happy', t: "It's a bit. I'm doing a bit. It's a new bit. It's about respect. I'm trying it out." },
        { s: 'sunoo', f: 'happy', t: "Oh! Okay. It's a weird bit." },
        { n: "Sunoo went back to his crossword. Jake went back to his phone. Heeseung went back to not reading. And four people in that room didn't go back to anything at all, and Solar, standing in the middle of it, felt it go past her like a draft from a door she couldn't see." }
      ], else: [
        { ifHeading: 'H', then: [
          { s: 'niki', f: 'happy-2', t: "JUNGWON. You're just in time. We're having a vote. On the wifi. Democracy. You love democracy." },
          { s: 'jungwon', f: 'neutral', t: "Good evening, Niki." },
          { n: "He said it with such perfect courtesy that Jake slid an inch lower down the sofa. Then he took his phone out, and typed something, and put the phone away, and every phone in the lobby buzzed at once." },
          { phone: [
            { from: 'jungwon', t: "jungwongarden: i'm standing right here." },
            { from: 'niki', t: "rikiniki: LMAOOO" },
            { from: 'niki', t: "rikiniki: hes being POLITE at me. -skull-" },
            { from: 'jake', t: "jakeyy: ur so dead bro" }
          ], contact: 'jungwon is POLITE (concerning)' },
          { s: 'niki', f: 'happy', t: "That's how you know he's mad. He gets polite. The madder he gets the more polite he gets. At the end he's just gonna bow at me forever." }
        ], else: [
          { ifHeading: 'R', then: [
            { s: 'niki', f: 'neutral', t: "Jungwon. Tell her the dog story. The first day of school. The real one." },
            { s: 'jungwon', f: 'flustered', t: "Absolutely not." },
            { s: 'niki', f: 'neutral', t: "Tell it now. She's not gonna be there for the next one. Somebody should tell it to her right. Not Sunoo-hyung, he tells it nice. Tell it mean. Tell it like it happened." },
            { n: "Jungwon looked at him. Then, after a long moment, he put the shirts down on the arm of the sofa, very neatly, and sat, and told it. Badly. With his ears going red. And Niki sat on the arm of the sofa and corrected every detail, and laughed at all of it, and didn't look at Solar once while he did, not even when it ended." }
          ], else: [
            { ifHeading: 'true', then: [
              { s: 'niki', f: 'happy', t: "Jungwon— hyung— Jungwon-hyung—" },
              { n: "It came out tangled, both ways at once, and he heard it, and burst out laughing at himself, and couldn't stop, doubled over on the arm of the sofa." },
              { s: 'jungwon', f: 'happy', t: "Both are fine, Niki. Riki. Both are fine. I answer to all of them." },
              { n: "Sunoo looked from one of them to the other with a small puzzled frown and went back to his crossword, and Jay, in the armchair, smiled without opening his eyes." }
            ], else: [
              { s: 'niki', f: 'neutral', t: "Jungwon. When we go home. Somebody has to tell everybody. That she's not coming. Her parents. The school. Everyone who keeps texting you." },
              { s: 'niki', f: 'neutral', t: "I'm not doing it. I'm the youngest. You do it." },
              { s: 'jungwon', f: 'neutral', t: "I'll do it." },
              { n: "He said it at once, quietly, with the shirts over his arm, and the lobby was very still for a moment, and then Jake started talking about something else, very loudly, and everyone let him." }
            ] }
          ] }
        ] }
      ] },
      { n: "When she left, Niki walked her to the guesthouse door, because Jungwon had been sent back upstairs by Heeseung for his own safety, and stood on the step in the cold in his socks, with the light behind him and the noise of the lobby coming through the glass." },
      { ifEvent: 'a5-call-hoax', then: [
        { s: 'niki', f: 'neutral', t: "He's so happy you're here. Jungwon. You can't tell, 'cause his face is like that. But I can tell. I've been watching him not be happy for years." },
        { s: 'niki', f: 'happy', t: "Rule one's dead anyway. Jihoon killed it. So I can say that. I've been waiting so long to say anything." }
      ], else: [
        { s: 'niki', f: 'neutral', t: "He's really glad you're here. Jungwon. You can't tell, because of his face. But I can. That's all I'm allowed to say. That's like, rule one and a half." }
      ] },
      { choose: [
        { t: "Look after him.", notes: 3, then: [
          { s: 'niki', f: 'neutral', t: "I always do. He thinks he looks after me." },
          { s: 'niki', f: 'happy', t: "Let him. It's good for him. He needs a hobby that isn't ironing." }
        ] },
        { t: "You're a good friend, Niki.", notes: 2, then: [
          { s: 'niki', f: 'serious', t: "Ew." },
          { n: "But he stood on the step in his socks and watched her all the way to the corner, and when she looked back, he was still there, and lifted one hand, and went in." }
        ] },
        { t: "(Mess up his hair.)", notes: 2, then: [
          { n: "She reached up and messed up the orange ends of his hair, which took reaching, and he ducked too late and stood there with it sticking up like a bird's crest, outraged, delighted, and told her she'd pay for this, in mikan, at an exchange rate to be determined." }
        ] }
      ] }
    ] },

    { after: '1/25', title: '10: same thing', place: 'Paulownia Mall · Game Panic', time: 'Evening', music: 'tender', scene: [
      { n: "Late January, and the mall had put away December and not yet found anything to replace it with, so it was just the mall, bare and bright and a little tired, and Game Panic was what it always was, a cave of noise with a carpet the color of a bruise, and every high-score table in it still said RKI." },
      { n: "Almost every table." },
      { ifFlag: 'niki-sol', then: [
        { n: "On the drum game, at the top, where she'd put it in November, it still said SOL. Two months. In a column of RKI. Unbeaten." },
        { s: 'niki', f: 'neutral', t: "I could've. Beaten it. Like a hundred times. I just didn't." },
        { s: 'niki', f: 'happy', t: "Some stuff you just leave up. You know? So people can see it was there." }
      ], else: [
        { n: "On the drum game, at the top, it said three question marks. Not letters. Just ???, blinking, in first place, above nine RKI." },
        { s: 'niki', f: 'neutral', t: "I left one. For you. I made the counter guy show me how. You have to beat it to put your name in. That's the rule. I don't make the rules." },
        { s: 'niki', f: 'happy', t: "I did make that rule. It's a good rule." }
      ] },
      { n: "He was wearing the puffer zipped to the chin again, the tape on the right sleeve worn pale now at the corners, and a scarf he'd taken to wearing wound twice round his neck, and he had the old phone in his hand, the bear swinging off it, turning it over and over the way he did when he wasn't thinking about it, and he hadn't eaten a banana in twenty minutes, which for him was practically a fast." },
      { s: 'niki', f: 'neutral', t: "Okay. One more. Then the table. Then I have to say something and you have to not make it weird." },
      { n: "They played the shooter. Two guns. Her hands knew it, still, from somewhere neither of them came from, and his knew it from two months of owning it, and they went through the stages side by side without speaking, shoulder to shoulder, and she could feel him stop showing off somewhere around the third stage and just play, properly, with her, the way you only play with someone you trust to cover the left side of the screen." },
      { n: "They came out on top together. Two scores, one above the other. The table opened its three blinking letters and waited." },
      { s: 'niki', f: 'neutral', t: "You do it. The top one. It's yours this time. I'm serious. I'll take second. Look at me. I'm taking second. Write it down." },
      { choose: [
        { t: "(Enter RKI. For him.)", notes: 3, then: [
          { s: 'niki', f: 'surprised', t: "...Hey. That's mine. I said it was yours." },
          { s: 'solar', f: 'neutral', t: "It's yours." },
          { n: "He looked at the three letters at the top of the table for a long time, and then he typed SOL in second place himself, with one finger, slowly, as if he were signing something." }
        ] },
        { t: "(Enter SOL.)", notes: 3, then: [
          { n: "S. O. L. The fanfare. And underneath it, without being asked, with one finger, he typed RKI in second, and stepped back and looked at the two of them together like a photograph somebody had finally gotten right." },
          { s: 'niki', f: 'happy', t: "Good. That's good. That's the right order." }
        ] },
        { t: "(Enter LOL.)", notes: 2, then: [
          { s: 'niki', f: 'happy-2', t: "NO. LOL is MINE. LOL is my legacy. You can't—" },
          { n: "He was laughing too hard to finish. He leaned on the cabinet and laughed until the counter guy looked up from his manga, and then he typed RKI underneath it, wiping his eyes, and said it was the best thing anyone had ever done to him." }
        ] }
      ] },
      { n: "They sat on the step of the dance cabinet, where he wasn't allowed to sit, with their backs against it, and the arcade shouted around them in forty keys." },
      { s: 'niki', f: 'neutral', t: "Okay. The thing." },
      { s: 'niki', f: 'neutral', t: "That night. At Yeobo's. The green door. I said I could feel where Jungwon went. And I could. And everybody thinks that's why I went through first. For him." },
      { s: 'niki', f: 'neutral', t: "It was for him. But I could feel you, too. Behind him. Further in. Like when you know there's someone in the next room because the floor's warm." },
      { s: 'niki', f: 'neutral', t: "I didn't tell anyone that. I'm telling you. Because you don't remember me and I came anyway. That's all. That's the thing. Don't make it weird." },
      { ifHeading: 'S', then: [
        { s: 'niki', f: 'neutral', t: "When we go back, I'm gonna be fast again. Just fast. Over gates. Nobody's gonna know I had the high score on every machine in a whole city in Japan." },
        { s: 'niki', f: 'happy', t: "That's okay. I'll know. You'll know. Jungwon-hyung'll know, and he'll never say it, and he'll look at me like that sometimes, in the kitchen. That's enough. That's a lot." }
      ], else: [
        { ifHeading: 'H', then: [
          { s: 'niki', f: 'happy', t: "When we go home I'm adding you to the chat. Our chat. The mean one. I'm admin. Jungwon can't stop me. I made myself admin the day I made it and he's been trying to fix it ever since." },
          { s: 'niki', f: 'happy-2', t: "You're gonna get four hundred comments from me in one night. Every draft. You're gonna have to read all of them. That's the price." }
        ], else: [
          { ifHeading: 'R', then: [
            { s: 'niki', f: 'neutral', t: "You're going where we aren't. That's okay. I said it was okay and it's still okay. I checked." },
            { s: 'niki', f: 'happy', t: "But you're on the board. Here. Forever. Until they unplug it. And they're never gonna unplug it, because the counter guy's scared of me." }
          ], else: [
            { ifHeading: 'true', then: [
              { s: 'niki', f: 'happy', t: "You're gonna be in both of mine. And I'm gonna be in both of yours. And we'll both know about the arcade. Nobody else." },
              { s: 'niki', f: 'happy-2', t: "That's the best secret I have. And I have a LOT. I have so many. This one's the best." }
            ], else: [
              { s: 'niki', f: 'neutral', t: "You're staying. So you get the board. When I'm gone, you guard it. Junpei's gonna try to take it back." },
              { s: 'niki', f: 'happy', t: "Don't let him. Okay. Let him take one. One. He cried, Solar. On the racing game." }
            ] }
          ] }
        ] }
      ] },
      { s: 'niki', f: 'neutral', t: "Anyway. I was right. That night. About the door." },
      { choose: [
        { t: "You were lucky.", notes: 3, then: [
          { n: "He turned his head and looked at her, and his whole face went bright from the inside, the slot machine paying out, all of it at once." },
          { s: 'niki', f: 'happy-2', t: "Same thing." }
        ] },
        { t: "You were right.", notes: 3, then: [
          { s: 'niki', f: 'surprised', t: "...Nobody ever says that. Nobody. Not once. Not in either one." },
          { s: 'niki', f: 'happy', t: "Say it again. No. Don't. I'll cry on the dance machine and the counter guy will see. Say it again later. Say it in a text. I'll screenshot it." }
        ] },
        { t: "(Bump his shoulder.)", notes: 2, then: [
          { n: "She bumped his shoulder. He bumped hers back. Neither of them said anything for a while, which for him was a kind of speech." }
        ] }
      ] },
      { n: "He walked her out through the atrium, past the fountain, and at the low rail round its edge, where everyone else walked round, he put one hand on it and went over sideways, as he always did, like water over a stone, and then stopped on the other side, and turned, and held his hand out to her across the rail, palm up." },
      { s: 'niki', f: 'neutral', t: "Come on. You know how. You've watched me do it like a hundred times." },
      { n: "She took his hand and went over. It wasn't graceful. Her coat caught and she came down like a dropped bag. But she landed, and he didn't let go of her hand until she had her feet, and then he did, and put his in his pocket, and started whistling, though it wasn't cold, and they went up the escalator together, and he took the steps two at a time against nobody, and waited for her at the top." }
    ] }
  ],
  afterMax: [
    { title: 'the table', place: 'Paulownia Mall · Game Panic', time: 'Evening', scene: [
      { n: "Every week now, on a day he wouldn't name in advance, he checked the tables. All of them. Clipboard energy, a long walk down the rows of cabinets with his hands behind his back like a general inspecting troops, reading every name aloud." },
      { s: 'niki', f: 'neutral', t: "RKI. RKI. RKI. JUN. Hm. JUN's been practicing. RKI. RKI." },
      { ifFlag: 'niki-sol', then: [
        { s: 'niki', f: 'happy', t: "SOL. Still there. Good. Nobody's touched it. Nobody would dare." }
      ], else: [
        { s: 'niki', f: 'happy', t: "And ours. Still on top. Good. Nobody's touched it. Nobody would dare." }
      ] },
      { choose: [
        { t: "Let Junpei have one back.", notes: 3, then: [
          { s: 'niki', f: 'sad', t: "...One. The racing one. Third place. Not first. I'm not a saint." },
          { n: "He lost to the racing game's third-place time on purpose, very convincingly, while Solar watched, and stepped back from the machine like a man laying a wreath." }
        ] },
        { t: "(Inspect the troops with him.)", notes: 2, then: [
          { n: "She put her hands behind her back too and walked the rows a pace behind him, and he narrated each table for her like a tour guide at a castle, and the middle-schoolers got out of their way." }
        ] }
      ] }
    ] },
    { title: 'tangerines', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
      { n: "A bag of mikan on the lounge table, Ken cross-legged on one side of it with a pencil and a tally, Niki on the other side with his chin on the table at eye level with the fruit, and the capitals game well under way, and Niki, for once, losing." },
      { s: 'ken', f: 'neutral', t: "Mongolia." },
      { s: 'niki', f: 'sad', t: "...Ulaan... something. Ulaan something. Kouhai, that's not fair, you study." },
      { s: 'ken', f: 'serious', t: "Ulaanbaatar. You owe me four." },
      { ifFlag: 'niki-lilongwe', then: [
        { s: 'niki', f: 'happy-2', t: "Solar. Help me. Malawi. Say it. Say the thing." },
        { n: "She said it. *Lilongwe.* It came out the same way it always did, easily, from somewhere under her tongue, and Niki pointed at her in triumph as if he'd taught it to her himself, which, she was increasingly sure, somebody had." }
      ] },
      { choose: [
        { t: "(Take Ken's side.)", notes: 2, then: [
          { s: 'ken', f: 'happy', t: "Two against one, Niki-san. You owe me five now." },
          { s: 'niki', f: 'happy', t: "This is a hate crime against the oldest." }
        ] },
        { t: "(Feed Niki the answers under the table.)", notes: 3, then: [
          { n: "She texted him the answers under the table. Ken caught them on the fourth one, and looked at her, and said nothing, and peeled a mikan, and ate the whole thing in silence while looking at her, which was the most frightening thing she'd ever seen a ten-year-old do." }
        ] }
      ] }
    ] },
    { title: 'the fence', place: 'Naganaki Shrine', time: 'Evening', scene: [
      { n: "Ken went over the shrine fence now as if he'd been born doing it, clean, unhurried, and every single time he went over it he said *for the record, I disapprove*, and Niki stood on the far side and spotted him with his arms folded, enormously proud, like a coach at a meet." },
      { s: 'niki', f: 'happy', t: "Look at him. That's my kouhai. I made that." },
      { s: 'ken', f: 'serious', t: "You didn't make me. You made me worse." },
      { ifHeading: ['S', 'H', 'true'], then: [
        { s: 'niki', f: 'neutral', t: "When I'm back, I'm gonna go over a fence and think, Ken's doing this right now. Somewhere. Disapproving." }
      ], else: [
        { s: 'niki', f: 'neutral', t: "When I'm gone, he's gonna keep doing it. That's how you know you taught somebody something. They keep doing it when you're not there to see." }
      ] },
      { choose: [
        { t: "(Go over it too.)", notes: 3, then: [
          { n: "She went over. Not like a cat. But she landed, on both feet, and stayed there. Ken nodded at her the way he nodded at good form. Niki clapped once, loudly, and Koromaru barked at the clap." }
        ] },
        { t: "(Sit with Koromaru on the top step.)", notes: 2, then: [
          { n: "She sat with the dog at the top of the steps, facing the dark house, the way Niki did. Behind her she could hear the two of them arguing about technique, and Koromaru leaned his whole warm weight against her side and waited, and she waited with him." }
        ] }
      ] }
    ] },
    { title: 'the platform', place: 'Iwatodai Station · Platform', time: 'Evening', scene: [
      { n: "He was on the platform again, not by the fare chart this time. On the bench, eating a milk roll, the wrong one, with a scarf wound twice round his neck, and the trains going by toward places he could read the names of." },
      { ifFlag: 'niki-osaka', then: [
        { s: 'niki', f: 'neutral', t: "I bought a ticket. Last week. You said you'd come, so I bought one." },
        { s: 'niki', f: 'neutral', t: "I didn't use it. It's in my phone case. I just like knowing it's there. Like a door you could open." },
        { s: 'niki', f: 'happy', t: "Don't be sad. It's not sad. It's like, the opposite. It's a ticket." }
      ], else: [
        { s: 'niki', f: 'neutral', t: "I stopped reading the fare chart. I still know the number. You don't un-know a number." },
        { s: 'niki', f: 'happy', t: "It's fine. She's fine. In mine she's fine. I'm keeping her in mine. That's where she is." }
      ] },
      { choose: [
        { t: "(Sit with him until the next train.)", notes: 3, then: [
          { n: "She sat. The next train came, and went, and he didn't watch it go, for once. He watched her finish the half of the milk roll he'd given her, and asked if it was the right one, and she said she didn't know what the right one was, and he said *that's the right answer*, and was quiet." }
        ] },
        { t: "Tell me about her shop.", notes: 2, then: [
          { s: 'niki', f: 'happy', t: "It sells everything. Brooms. Umbrellas. Candy that's older than me. She sits at the back and yells at the TV. If you buy something she gives you something else for free, and it's always worse, and you always take it." }
        ] }
      ] }
    ] },
    { title: 'last straw', place: 'Kirijo Guesthouse', time: 'Evening', scene: [
      { n: "Something had happened to the guesthouse's breakfast menu. The laminated card on the front desk, in Japanese and in English, had grown a third language overnight in black marker in the margins, and the third language was Niki." },
      { n: "*Rice (Jake has had four (4) today).* *Miso soup (Sunoo-hyung says it's not as good as his) (it is).* *Grilled fish (Sunghoon-hyung will make a speech about it).* *Eggs (Jungwon will eat zero (0) of these) (EAT SOMETHING).*" },
      { s: 'heeseung', f: 'serious', t: "Niki." },
      { s: 'niki', f: 'happy', t: "I'm helping, hyung. It's accessibility." },
      { s: 'heeseung', f: 'neutral', t: "How many straws, Niki." },
      { s: 'niki', f: 'happy-2', t: "Negative. I'm in the negatives. I'm in straw debt. I'm gonna be paying off straws till I'm forty." },
      { choose: [
        { t: "(Add a line to the menu yourself.)", notes: 3, then: [
          { n: "She took the marker. At the bottom of the card, in lowercase, she wrote *bananas (niki takes all of them)*, and Niki read it upside down and made a sound like a kettle, and Heeseung, behind him, very quietly, laughed." }
        ] },
        { t: "Heeseung, he's right about Jungwon and the eggs.", notes: 2, then: [
          { s: 'heeseung', f: 'sad', t: "...He is. That's the problem. He's always right about the stuff that matters and wrong about everything else." },
          { s: 'niki', f: 'happy-2', t: "That's a compliment. Solar, he complimented me. Write it on the menu." }
        ] }
      ] }
    ] }
  ]
});
