/* Yang Jungwon · V The Hierophant. SECRET LINK. Format notes are at the top of akihiko.js.
   From Hoax (readers/hoax.html): student council president of Hamlim High, a third-year, eighteen. Composed, overworked,
   competitive, secretly soft, dry; forgets to eat and sometimes faints; tutors people beautifully and never himself.
   His friends: Sunoo (council secretary, runs Yeobo's for his grandmother), Heeseung (his vice president), Sunghoon
   (flirts with everything), Jay (football scholarship), Jake (dog named Layla), Niki (the youngest, hopes he loses);
   their group chat is "JUNGWON IS MEAN", where he is injangwon. His rival is Park Jihoon. His dog is Maeumi. The girl
   running against him is Solar Kim, whose VOTE SOLAR KIM poster turned up at Gekkoukan on 10/13 (secrets/hoax.js).
   PLOT (spoilers, for Claude): he comes from the night before Hamlim counts the votes, after the final speeches. He left
   Yeobo's for his council room to fetch his notes and opened the door onto Gekkoukan's, where Mitsuru had pinned the
   poster "in case its owner comes looking." He keeps half-recognizing Solar ("Sorry. You look like someone.") because
   every world has a Solar. The ending he runs from is the count: win or lose, the campaign ends, and the campaign is the
   only reason the girl at home has to sit across a table from him. His friends' messages reach his phone later and
   later, all from that same night (ranks 3, 8, 9; the line stretches like the wrong-number chat). In the Dark Hour
   (rank 6) loose pages talk to him in his friends' voices and then his own and offer an hour where the votes are never
   counted: the main story's antagonist, never named here, consistent with what Acts I–II already show. Rank 7: he was
   the voice at the shrine on 9/1 ('hx-maeumi'); he practices the apology he never made. Rank 10: he decides to go home
   for the count when the hour ends (the bond goes with him), takes the poster back to its owner and gives Solar his
   PRESIDENT pin; "You don't look like someone. You look like you." Nothing here decides Hoax's election or romance.
   Romance stays at hands, foreheads and a kiss on the cheek on purpose: in Hoax his first real kiss is still ahead of
   him, at home. Friendship by default; the route choice is at rank 9.
   UNLOCK (keep quiet): seen the Yeobo's Cafe secret place ('hx-yeobos'), the poster stamp ('vote-solar-kim'), and the
   in-game date on or after 10/14 (the night after the poster, when the votes would be counted). Meeting him (rank 1)
   earns 'council-president', whose passport hint is Kat's only clue; MAX earns 'you-look-like-you'.
   Cameos: in person his friends use hx- ids (portraits resolve by name: 'hx-sunoo' uses 'sunoo'); Jihoon in person is
   'jw-jihoon' because 'hx-jihoon' is already his "jihoney" handle in the wrong-number chat. In his group chat the boys
   use jw- ids shown as their handles. */
FemcSocial.define({
  id: 'jungwon', name: 'Yang Jungwon', short: 'Jungwon', arcana: 'Hierophant', numeral: 'V', from: 'Hoax',
  unlock: { seen: ['hx-yeobos'], stamps: ['vote-solar-kim'], after: '10/14' },
  home: { place: 'Gekkoukan High · Student Council Room', slot: 0, days: [1, 2, 3, 4, 5], hint: 'After school on weekdays, in the student council room, long after the meeting ends.' },
  approach: "The light in the student council room is still on long after the meeting ended. Someone in a navy blazer that isn't Gekkoukan's is sitting under the bulletin board with a red pen, and he looks up at the door like he's expecting a vote.",
  invite: {
    ask: ["are you free. the council room has heat and nobody in it", "i need someone to check my math. it's right. i need someone to tell me it's right", "i haven't eaten. sunoo would want me to tell someone. i'm telling you", "are you busy. i'm not. that's concerning", "your president left me the budget. come be a witness", "i made a schedule. there's a gap at 4:00. it's labeled solar", "i'm practicing a speech for nobody. come be nobody", "the vending machine on 3 has melon pan now. i made a formal request. it worked"],
    ok: ["ok. i'll clear your end of the table", "good. 4:00. i wrote it down", "ok. i already got you a drink. it's getting warm"],
    no: ["ok. i'll be here anyway", "that's fine. i have eleven other things", "ok. i'll move you to tomorrow. in pencil"]
  },
  hangouts: [
    [
      { n: "Mitsuru-senpai had, in what Solar suspected was a gesture of either trust or surrender, given him the club binders. All of them. Twenty-two clubs, twenty-two binders, fanned out across the long table in an order that made sense to nobody but him, with color-coded tabs from a pack he had very clearly gone out and bought himself." },
      { s: 'jungwon', f: 'neutral', t: "Read me the totals. Just the totals. I'll tell you when to stop." },
      { choose: [
        { t: "(Read them in a dramatic voice, like election results.)", notes: 3, then: [
          { n: "She read the kendo club's total like it was a winning lottery number. He didn't laugh. His mouth did something at one corner that was much worse than laughing, and by the photography club he'd had to put his pen down." },
          { s: 'jungwon', f: 'happy', t: "...Stop. No. Keep going. I hate it. Keep going." }
        ] },
        { t: "(Read them exactly.)", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "Good. You don't round. I'm going to remember that about you." }
        ] },
        { t: "Isn't this Mitsuru-senpai's job?", notes: 1, then: [
          { s: 'jungwon', f: 'serious', t: "It's everyone's job. That's the part nobody tells you." }
        ] }
      ] },
      { n: "They finished at six. Every binder balanced except the occult club's, which was off by exactly six hundred and sixty-six yen, and he looked at it for a long moment and then wrote, in very small letters in the margin, no." }
    ],
    [
      { n: "She'd started bringing food. It wasn't a decision, per se. It was more that she kept finding herself at the bakery by the station with two melon pans in a paper bag and no memory of deciding on the second one." },
      { n: "He took it without looking up, the way he took every paper anyone handed him, and set it on the corner of the table, where it would sit, she knew from experience, until it was a fossil." },
      { s: 'jungwon', f: 'neutral', t: "Thank you. After this page." },
      { choose: [
        { t: "(Take the pen out of his hand.)", notes: 3, then: [
          { n: "She took the pen. He looked at his empty hand like it had defected, and then at her, and then, with enormous dignity, at the melon pan." },
          { s: 'jungwon', f: 'flustered', t: "...Fine. Fine. You're worse than Sunoo." },
          { n: "He ate it in four bites. She gave him the pen back. He didn't pick it up again for almost a whole minute, which she decided to count." }
        ] },
        { t: "That's what you said three pages ago.", notes: 2, then: [
          { s: 'jungwon', f: 'serious', t: "And I meant it three pages ago." },
          { n: "He ate it on the fourth page, which was a win, technically, if you were generous about it." }
        ] },
        { t: "(Eat yours loudly at him.)", notes: 2, then: [
          { n: "She ate hers as loudly as a person can eat bread, which is not very, and he lasted until her second bite before he set the pen down with the sigh of a man conceding an election." }
        ] }
      ] },
      { n: "Afterward he brushed the crumbs off the budget into his palm and carried them to the bin, very carefully, and she watched him do it and thought that somebody, somewhere, had raised him to leave every room cleaner than he found it, and had never once mentioned that he was allowed to sit down." }
    ],
    [
      { n: "He was rehearsing a speech when she came in, standing at the head of the long table with one hand flat on it, addressing twelve empty chairs and a potted plant on the subject of cafeteria reform." },
      { s: 'jungwon', f: 'serious', t: "Don't stop me. I have four minutes left and I lose the thread if I stop." },
      { choose: [
        { t: "(Sit in the front chair and nod at everything, very seriously.)", notes: 3, then: [
          { n: "She sat. She nodded. She nodded at the part about fair pricing and the part about vegetarian options and, gravely, at the part about the vending machine on the third floor, and somewhere around the vending machine he started trying not to smile and lost." },
          { s: 'jungwon', f: 'happy', t: "...You're a terrible audience. You're the best audience I've ever had. Both." }
        ] },
        { t: "Boo.", notes: 2, then: [
          { s: 'jungwon', f: 'surprised', t: "Did you just boo me?" },
          { n: "He finished the speech anyway, louder, glaring at her over the potted plant like it was a debate, and it was the best she had ever heard him do it." }
        ] },
        { t: "Who's it for? You don't even go here.", notes: 1, then: [
          { s: 'jungwon', f: 'sad', t: "...I know. Habit." },
          { n: "He sat down. He didn't finish it." }
        ] }
      ] },
      { n: "When he was done the windows had gone dark and the room was very quiet, and he stood there for a second with his hand still on the table, like he was listening for applause from somewhere much farther away than the chairs." }
    ],
    [
      { n: "Somebody had to carry the box of old ballots down to the storeroom, and Jungwon, who could not allow anything to be decided by anything less than a fair and transparent process, proposed rock-paper-scissors." },
      { n: "He lost. He proposed best of three. He lost. He proposed best of five, and then, with a face like a closed door, best of eleven." },
      { s: 'jungwon', f: 'serious', t: "You're reading me. Stop reading me." },
      { choose: [
        { t: "(Throw rock. You've thrown rock every single time.)", notes: 3, then: [
          { n: "She threw rock. He threw scissors, again, because he'd been so certain she would switch that he'd switched himself. He stared at his own hand." },
          { s: 'jungwon', f: 'flustered', t: "...I overthought it. I've never once in my life underthought something." }
        ] },
        { t: "Let's just carry it together.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "That's not a process." },
          { s: 'jungwon', f: 'happy', t: "...It's a good process. Fine. Motion carried." }
        ] },
        { t: "You can carry it, Mr. President.", notes: 1, then: [
          { s: 'jungwon', f: 'neutral', t: "Abuse of power. I'm noting it." }
        ] }
      ] },
      { n: "He carried the box. He insisted. Going down the stairs ahead of her with it in his arms, he looked, she thought, like somebody who was quietly glad to have lost at something that didn't matter, for once, in front of someone who wouldn't write it down." }
    ],
    [
      { n: "He'd fallen asleep at the table. She had never seen him do it, and she stood in the doorway for a long moment not quite trusting it, the way you don't trust a cat that has finally let you near it." },
      { n: "Head on his arm, pen still in his fingers, a line of red ink trailing off the edge of a form where sleep had caught him mid-word. Without the composure his face was younger and more tired, and there were shadows under his eyes that had been there, she realized, the whole time." },
      { choose: [
        { t: "(Put your blazer over his shoulders and sit down quietly.)", notes: 3, then: [
          { n: "She put her blazer over him. He didn't wake. She did her homework at the other end of the table in the last of the light, turning the pages slowly so they wouldn't make a sound, and when he woke an hour later he looked at the blazer, and then at her, and said nothing at all, which she had learned was the loudest thing he knew how to say." }
        ] },
        { t: "(Ease the pen out of his hand before he draws on his face.)", notes: 2, then: [
          { n: "She slid it out of his fingers. He made a small offended noise and held on for a second, even asleep, and then let go." }
        ] },
        { t: "(Wake him. He'd want you to.)", notes: 1, then: [
          { s: 'jungwon', f: 'surprised', t: "I wasn't asleep." },
          { n: "There was ink on his cheek. She didn't tell him." }
        ] }
      ] },
      { s: 'jungwon', f: 'flustered', t: "Don't tell Heeseung. He'll make it a policy." }
    ]
  ],
  // After rank MAX on the romance route, each visit plays the next date in order (then they rotate).
  dates: [
    { title: "yeobo's", place: "Iwatodai Strip · Yeobo's Cafe", music: 'joy', scene: [
      { n: "The cafe was back. Solar saw it from the end of the strip, wedged between the shuttered pachinko place and the ramen shop with its windows fogged gold and its hand-lettered sign, and beside her Jungwon stopped walking so suddenly that a man behind them had to step around him." },
      { s: 'jungwon', f: 'surprised', t: "...It's never there on a Thursday." },
      { n: "He didn't move. She understood after a second that he was afraid of the door, of what would be on the other side of it or what wouldn't, so she took his hand, which she'd been doing for a week now and which still made him go briefly and visibly offline, and pushed the door open herself." },
      { n: "The bell dinged. Butter and espresso and somebody's homework, and a warmth so total it was almost rude about it." },
      { s: 'hx-sunoo', f: 'happy', t: "Jungwon! Did you ever eat lunch?" },
      { s: 'jungwon', f: 'happy', t: "...Yeah. I did. I ate lunch, Sunoo." },
      { n: "Sunoo stared at him like he'd announced a moon landing, and then at Solar, and then, slowly, at their hands, and his whole face lit up like a kitchen at six in the morning." },
      { s: 'hx-sunoo', f: 'happy', t: "Croissant girl! Oh my gosh. Oh my gosh. Guys!" },
      { n: "The booth in the back came to life all at once, the way a flock of birds does." },
      { s: 'hx-sunghoon', f: 'happy', t: "Why hello." },
      { n: "He'd already taken a flower out of the vase. Jungwon took it out of his hand without looking at him and put it back." },
      { s: 'hx-jay', f: 'neutral', t: "Dude. Pack it up already." },
      { s: 'hx-heeseung', f: 'surprised', t: "Sit, sit. Jungwon, you look... you actually look rested. What happened? Are you sick?" },
      { s: 'hx-niki', f: 'happy', t: "Hyung has a girlfriend? In this economy?" },
      { s: 'hx-jake', f: 'happy', t: "Niki! Hi, I'm Jake. I have a dog. Do you have a dog? Sorry. Hi." },
      { choose: [
        { t: "Hi, everyone. I've heard a lot about you.", notes: 3, then: [
          { s: 'hx-niki', f: 'happy', t: "All bad, I hope." },
          { s: 'jungwon', f: 'neutral', t: "Mostly about you, Niki. All bad." },
          { n: "Niki looked thrilled. Heeseung looked like a man who had waited two years for somebody to make his president laugh in public and was trying very hard not to cry about it in a cafe." }
        ] },
        { t: "(Let Sunoo sit you down and feed you.)", notes: 3, then: [
          { n: "Sunoo sat her down. A croissant appeared, then a coffee, then a second croissant for Jungwon, which Sunoo set in front of him and stood over with his arms folded until he took a bite, exactly the way she remembered, and Jungwon met her eyes across the table while he chewed, long-suffering and secretly, enormously pleased." }
        ] }
      ] },
      { n: "It was so normal it hurt. They talked over each other. Jay threatened Sunghoon. Jake showed her eleven pictures of a dog named Layla. Nobody asked Jungwon where he'd been, and it took her until the second coffee to understand that nobody asked because nobody knew he'd been gone. For them it was still the night before the count." },
      { n: "The bell dinged again." },
      { s: 'jw-jihoon', f: 'neutral', t: "Sunoo, two pints, the usual, she's having a crisis about calculus and I—" },
      { n: "The boy in the doorway stopped. He had a car key looped on one finger and the look of somebody who had driven out at ten at night for ice cream for one specific person, and he was looking at Solar." },
      { s: 'jw-jihoon', f: 'surprised', t: "Solar? Why are you sitting with—" },
      { n: "He stopped again. His eyes went over her face once, quick and expert, the way you check a word you've spelled a thousand times." },
      { s: 'jw-jihoon', f: 'serious', t: "...You're not her." },
      { s: 'solar', t: "Other one." },
      { s: 'jw-jihoon', f: 'neutral', t: "Huh. Yeah. She'd never sit that still." },
      { s: 'jungwon', f: 'serious', t: "Park." },
      { s: 'jw-jihoon', f: 'serious', t: "Yang." },
      { n: "It was the most hostile single syllable Solar had ever heard two people trade, and both of them looked faintly satisfied by it, like two dogs who had decided to bark at each other forever because it was easier than anything else. Jihoon took his ice cream and went. The bell dinged. Sunghoon said into the silence that he thought that had gone well." },
      { n: "When they left it was late. Sunoo hugged her at the door, and then hugged Jungwon for a long time, and said, muffled, into his shoulder, that he should go home and sleep for once in his life." },
      { s: 'jungwon', f: 'sad', t: "I will. Soon." },
      { n: "The bell dinged behind them. She turned to say goodnight and the strip was just the strip. Jungwon stood looking at the dark gap between the pachinko place and the ramen shop with his hands in his pockets." },
      { s: 'jungwon', f: 'neutral', t: "They didn't know I was gone." },
      { choose: [
        { t: "Does that hurt?", notes: 3, then: [
          { s: 'jungwon', f: 'neutral', t: "No. It means I'm not late." },
          { s: 'jungwon', f: 'happy', t: "...It means I get to come home on time. I've never been on time for anything that wasn't a meeting." }
        ] },
        { t: "(Lean against his arm.)", notes: 3, then: [
          { n: "She leaned against his arm. He let out a long breath that went white in the January air, and then put his arm around her, carefully, like he was following instructions he'd only just been given and wanted very much to get right." }
        ] }
      ] },
      { n: "There was a receipt in her coat pocket when she got home. Two croissants, two coffees, and at the bottom a star in gel pen and a note in round, delighted handwriting: he ate!!! thank u!!!" }
    ] },
    { title: 'twelve-thirty', place: 'Gekkoukan High · Rooftop', music: 'sun', scene: [
      { n: "He had written it in his planner in pen. She saw it when he opened the planner to check the time, which he did twice in the four minutes it took them to climb to the roof: 12:30, LUNCH (SOLAR), underlined, in ink, in the planner of a boy who did not write anything in ink he might have to change." },
      { n: "The bento was wrapped in a navy cloth knotted exactly at the center. Inside, rice with a pickled plum in the middle. Spinach. Three pieces of rolled omelet, one of them visibly burnt along one edge and turned, hopefully, burnt side down." },
      { s: 'jungwon', f: 'flustered', t: "Don't look at the egg." },
      { s: 'jungwon', f: 'neutral', t: "There's a cooking show on the televisions at the electronics store by the station. Forty televisions. I watched it forty times. It's the first thing I've ever made that didn't come with a packet." },
      { s: 'jungwon', f: 'serious', t: "You've been making me eat since October. I'm returning it. That's how this works." },
      { choose: [
        { t: "(Eat the burnt one first.)", notes: 3, then: [
          { n: "She ate the burnt one first, on purpose, while he watched with his chopsticks frozen halfway to his mouth." },
          { s: 'jungwon', f: 'surprised', t: "Why would you— that was the worst one." },
          { s: 'solar', t: "It's the one you tried hardest on." },
          { n: "He looked at her for a long second, and then down at his lunch, and the dimples came out and didn't go away, not for a long time, not even when he tried to press them flat with his mouth." }
        ] },
        { t: "It's perfect. Thank you.", notes: 2, then: [
          { s: 'jungwon', f: 'flustered', t: "It's not perfect. It's... thank you for saying it's perfect." }
        ] }
      ] },
      { n: "They ate in the cold sun with their backs against the fence, the city laid out below in that clean winter way that made everything look closer than it was. He finished every grain of rice. She watched him do it and felt something in her chest come unclenched that she hadn't known was clenched." },
      { s: 'jungwon', f: 'neutral', t: "I used to think lunch was the part of the day you could skip. Like it was optional. Like everybody was just being polite about it." },
      { s: 'jungwon', f: 'happy', t: "It's the best part of the day. It's twelve-thirty. I put it in pen." },
      { choose: [
        { t: "(Kiss his cheek, right on the dimple.)", notes: 3, then: [
          { n: "She kissed his cheek, right where the dimple was, quick, before she could think better of it." },
          { s: 'jungwon', f: 'surprised', t: "..." },
          { n: "He went completely still, the way he did in the council room when somebody said something he hadn't prepared for, and then very red from the collar up, and then he picked up the planner and his pen and wrote something small beside 12:30 and wouldn't let her see what it was." }
        ] },
        { t: "Same time tomorrow?", notes: 3, then: [
          { s: 'jungwon', f: 'happy', t: "It's already in there. It's in there until the end of the month." },
          { n: "He showed her. It was. Every day, 12:30, LUNCH (SOLAR), in pen, all the way down the column to the thirty-first, where the page ran out." }
        ] }
      ] }
    ] },
    { title: 'quiet hours', place: 'Gekkoukan High · Library', music: 'tender', scene: [
      { n: "They'd gone to the library to study, which in Jungwon's case meant three textbooks open at once and a highlighter in each hand, and in Solar's case meant one textbook open to the same page for forty minutes while she watched the snow come down past the tall windows." },
      { n: "It was warm in there, the radiators ticking, the specific hush of a room full of people pretending to work. At some point his highlighting slowed. At some point it stopped." },
      { n: "His head came down onto her shoulder by degrees, like he was negotiating with it, and then all at once, heavy and warm, and he was asleep." },
      { choose: [
        { t: "(Don't move. Not even a little.)", notes: 3, then: [
          { n: "She didn't move. She didn't move when her arm went numb, or when the light outside turned blue, or when the librarian came past and looked at them for a long moment and then switched off the lamp at the next table instead of saying anything." }
        ] },
        { t: "(Carefully take the highlighters out of his hands.)", notes: 2, then: [
          { n: "She eased them out of his fingers one at a time. He made a small noise of protest, even asleep, and held on to the yellow one, so she let him keep it." }
        ] }
      ] },
      { s: 'mitsuru', f: 'surprised', t: "...Is he asleep?" },
      { n: "Mitsuru-senpai had come around the end of the stacks with an armful of her own books. She stood and looked at them for what felt like a long time." },
      { s: 'mitsuru', f: 'neutral', t: "I've watched him do everything else in that room. Correct my minutes. Rewrite my charter. Never this." },
      { s: 'mitsuru', f: 'neutral', t: "Don't wake him. I'll ask the library to stay open." },
      { n: "She could do that, apparently. She did." },
      { n: "He woke an hour and forty minutes later when a radiator clanked, and sat up all at once with the weave of her blazer printed on his cheek and his hair flat on one side, and looked at the window, and at the clock, and at her." },
      { s: 'jungwon', f: 'surprised', t: "How long?" },
      { s: 'solar', t: "Almost two hours." },
      { s: 'jungwon', f: 'sad', t: "...That's the longest I've slept since summer." },
      { s: 'jungwon', f: 'flustered', t: "Your shoulder must be dead. I'm sorry. I'm—" },
      { choose: [
        { t: "It's fine. You can have it again.", notes: 3, then: [
          { s: 'jungwon', f: 'flustered', t: "Don't say that. I'll take you up on it. I'll take you up on it every day." },
          { s: 'solar', t: "Good." }
        ] },
        { t: "You drooled a little.", notes: 2, then: [
          { s: 'jungwon', f: 'surprised', t: "I did not." },
          { n: "He had not. He checked her shoulder anyway, appalled, and she laughed so loudly the librarian shushed them both, and it was worth it." }
        ] }
      ] },
      { n: "On the walk back he was quiet, the good kind of quiet, hands in his pockets, his shoulder bumping hers every few steps like he was checking it was still there. At the dorm gate he said, without looking at her, that he had dreamed about nothing at all. Not the count. Not anyone. Just nothing, warm, for two hours. He said it like he was describing a country he'd heard about and never expected to visit." }
    ] },
    { title: 'best candidate', place: 'Paulownia Mall · Game Panic', music: 'joy', scene: [
      { n: "There was a quiz machine in the back of Game Panic, old and sticky-buttoned, with a cartoon owl in a mortarboard who announced each question with a fanfare, and Jungwon found it the way a heat-seeking missile finds heat." },
      { s: 'jungwon', f: 'serious', t: "Two players. Ten questions. Loser buys the drinks." },
      { s: 'jungwon', f: 'neutral', t: "I'll go easy on you. I won't, but I'll say it." },
      { n: "He went the opposite of easy. He knew the capital of every country the owl could think of, the boiling points of things she had never boiled, the year of every treaty. He hit the buttons before the owl had finished asking. He was, she realized, having the time of his life and trying very hard to look like he wasn't." },
      { n: "Question nine. The owl wanted to know the name of the Sanrio character in the jester's hood who is My Melody's rival." },
      { s: 'jungwon', f: 'surprised', t: "...What?" },
      { choose: [
        { t: "(Slam the button.) Kuromi.", notes: 3, then: [
          { n: "The owl threw confetti. Her score went up. Jungwon stared at the screen like it had insulted his parents." },
          { s: 'jungwon', f: 'serious', t: "How did you know that." },
          { s: 'solar', t: "Everybody knows that." },
          { s: 'jungwon', f: 'serious', t: "Everybody does not know that. That's not general knowledge. That's a connection." }
        ] },
        { t: "(Let him guess.)", notes: 2, then: [
          { s: 'jungwon', f: 'flustered', t: "...Hello Kitty's evil twin?" },
          { n: "The owl buzzed. Something in his face crumbled very slightly, the composure going like a sandcastle in a wave." }
        ] }
      ] },
      { n: "He lost by one point. He demanded a rematch. He lost the rematch on a question about a pop idol and demanded a third, and somewhere in the third, when the owl asked about the boiling point of mercury and he answered before it finished and she slammed her button a half-second later just to make him jump, he started laughing, really laughing, bent over the machine with his forehead on the sticky buttons, in a way she didn't think he'd ever let anyone watch." },
      { s: 'jungwon', f: 'happy', t: "I hate this owl. I'm coming back every day until I beat this owl." },
      { choose: [
        { t: "May the best candidate win.", notes: 3, then: [
          { s: 'jungwon', f: 'surprised', t: "..." },
          { s: 'jungwon', f: 'happy', t: "You sound like me. That's terrible. Say it again." }
        ] },
        { t: "(Buy him a drink anyway.)", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "Loser buys. Those are the rules." },
          { s: 'jungwon', f: 'flustered', t: "...Thank you. I'm buying the next ten." }
        ] }
      ] },
      { n: "He bought the drinks. He'd lost, after all, and rules were rules. On the way out he stopped at the machine one more time and entered three letters into the high score table under her name, very neatly, JWY, second place, and stood back and looked at it like a boy who had never once in his life been glad to come second, and was." }
    ] }
  ],
  // P3's Christmas Eve: on 12/24 evening, if Solar is romancing several people (rank 9+), she picks one; this plays.
  christmas: { place: 'Iwatodai Strip', scene: [
    { n: "Christmas Eve, and the strip had put up lights, strings of warm white bulbs zigzagging from shop to shop over the street, and it had started to snow in the slow, considering way of snow that hasn't decided whether to stay. Every couple in Iwatodai seemed to be out, and every one of them was walking slower than strictly necessary." },
    { n: "Jungwon was waiting outside the ramen shop in a scarf someone had very obviously made him wear, holding a flat package wrapped in brown paper and checking his watch, and when he saw her he stopped checking it and put that hand in his pocket, like he'd decided time could look after itself for one night." },
    { s: 'jungwon', f: 'flustered', t: "You're on time. I'm early. I'm always early. Merry Christmas." },
    { s: 'jungwon', f: 'neutral', t: "I've never had a Christmas that wasn't the week before something. A competition. Exams. My mother's office party, where I give a little speech about my grades to people who don't care." },
    { s: 'jungwon', f: 'serious', t: "I don't know what you're supposed to do." },
    { s: 'solar', t: "You walk around. Slowly." },
    { s: 'jungwon', f: 'neutral', t: "That's it? There's no agenda?" },
    { s: 'solar', t: "No agenda." },
    { s: 'jungwon', f: 'flustered', t: "...That's terrifying. Okay." },
    { n: "They walked. Slowly. He kept speeding up by accident and catching himself, and halfway down the strip she took his hand to help with the pacing, and he forgot about walking altogether." },
    { place: 'Iwatodai · Riverside', time: 'Night', music: 'tender' },
    { n: "Down by the river it was quieter. The snow came down over the black water and vanished into it without a sound. He gave her the package with both hands, formally, the way he had held out his hand to her across a table in October." },
    { s: 'jungwon', f: 'flustered', t: "Open it. Don't say anything until you've read the first page." },
    { n: "A notebook. Navy and plain, the kind councils buy by the box. On the cover, in his small square handwriting, MINUTES. And inside, page after page, dated, every afternoon since October." },
    { n: "Meeting called to order 4:10 PM. Present, Y. Jungwon and Solar. Motion that Y. Jungwon eat a melon pan. Carried, chair abstaining under protest. Motion that Solar stop reading the budget like election results. Defeated. Motion to adjourn. Defeated. Meeting continued until 6:40." },
    { s: 'jungwon', f: 'flustered', t: "I write everything down. It's a problem. I thought you should have them. In case I'm not. In case." },
    { choose: [
      { t: "(Give him a lunchbox. Taped inside the lid is a schedule.)", notes: 3, then: [
        { n: "A plain black lunchbox, two tiers, and inside the lid she had taped a timetable: every day from now until the end of January, 12:30, and her name beside every one." },
        { s: 'jungwon', f: 'surprised', t: "..." },
        { n: "He read the whole schedule. Every line. Then he closed the lid very gently and held the box against his chest with both arms and didn't say anything, because, she understood, he couldn't." }
      ] },
      { t: "(Give him a cheap wristwatch with one alarm set. 12:30. LUNCH.)", notes: 3, then: [
        { s: 'jungwon', f: 'neutral', t: "I have a watch." },
        { s: 'solar', t: "This one only does one thing." },
        { n: "He took his own watch off, there in the snow, and put it in his pocket, and put hers on, and held his wrist up to the streetlight to look at it like it was a medal." }
      ] }
    ] },
    { s: 'jungwon', f: 'neutral', t: "I kept saying you look like someone. For a month. I'm sorry. I said it because it was easier than the other thing." },
    { s: 'jungwon', f: 'flustered', t: "The other thing is that I look forward to four o'clock. Every day. I've never in my life looked forward to a time on a schedule that wasn't the end of it." },
    { choose: [
      { t: "I look forward to it too.", notes: 3, then: [
        { s: 'jungwon', f: 'surprised', t: "...You do?" },
        { s: 'solar', t: "I'm in your minutes, aren't I? Every day." },
        { s: 'jungwon', f: 'happy', t: "Every day. Present. I've never once had to mark you absent." }
      ] },
      { t: "That's the most romantic thing anyone's ever said about a schedule.", notes: 3, then: [
        { s: 'jungwon', f: 'flustered', t: "It's the most romantic thing I've ever said about anything. I don't have a lot of material." }
      ] }
    ] },
    { n: "He stood in front of her in the snow with his scarf coming undone and snowflakes caught in his hair, and looked at her mouth, and then didn't, and she watched him decide something and then decide, carefully, that it wasn't his to take yet." },
    { n: "So he kissed her forehead instead, slow, through the cold, the way you'd sign your name to something you meant. She went up on her toes and kissed his cheek, right on the dimple. It was the first time she had seen him blush in the dark. It turned out you could." },
    { s: 'jungwon', f: 'happy', t: "Merry Christmas, Solar." },
    { s: 'solar', t: "You said my name like it's mine." },
    { s: 'jungwon', f: 'neutral', t: "It is. I checked." },
    { n: "They walked back the long way, under every string of lights the strip had. At the dorm gate he took the notebook out of her hands, wrote one more line on the last page in the light from the door, and gave it back without explaining. She read it upstairs. Motion that this continue. Carried, unanimously." }
  ] },
  romance: true,
  stamps: { 1: ['council-president'], 10: ['you-look-like-you'] },
  cast: {
    elizabeth: 'Elizabeth', mitsuru: 'Mitsuru', koromaru: 'Koromaru', junpei: 'Junpei', yukari: 'Yukari',
    'hx-sunoo': 'Sunoo', 'hx-sunghoon': 'Sunghoon', 'hx-heeseung': 'Heeseung', 'hx-jay': 'Jay', 'hx-jake': 'Jake', 'hx-niki': 'Niki',
    'jw-jihoon': 'Jihoon',
    'jw-sunoo': 'sunooshine', 'jw-heeseung': 'heeheeseung', 'jw-jay': 'jbird', 'jw-jake': 'jakeys', 'jw-niki': 'rikiniki',
    'jw-sunghoon': 'princehoon', 'jw-jungwon': 'injangwon'
  },
  threads: {
    elizabeth: { name: 'Elizabeth', members: ['elizabeth'] },
    sees: { name: 'dorm squad 🔥', members: ['junpei', 'yukari', 'mitsuru', 'akihiko'] },
    'jw-gc': { name: 'JUNGWON IS MEAN', members: ['jw-sunoo', 'jw-heeseung', 'jw-jay', 'jw-jake', 'jw-niki', 'jw-sunghoon', 'jw-jungwon'] }
  },
  texts: [
    { id: 'eliz-jungwon', thread: 'elizabeth', rank: 0, days: 0, slot: 1, msgs: [
      { from: 'elizabeth', t: 'Solar. Another guest has come through, and I confess this one has puzzled me.' },
      { from: 'elizabeth', t: 'He did not come with the moon. He came in through a café that ought not to be on your street, and out through a door at your school, with a stack of papers under his arm.' },
      { from: 'elizabeth', t: 'He has not slept since. I do not believe he has noticed. He keeps looking at a poster.' }
    ] },
    { id: 'jw-1a', rank: 1, days: 1, slot: 1, msgs: [
      { from: 'jungwon', t: 'this is yang jungwon. from the council room' },
      { from: 'jungwon', t: "your president gave me your number. she said you would 'handle it'" },
      { from: 'jungwon', t: "i'd like to know what the it is" }
    ], reply: [
      { t: "You. You're the it.", notes: 3, then: [{ from: 'jungwon', t: 'i assumed' }, { from: 'jungwon', t: "i'm not usually the it. i'm usually the one handling" }] },
      { t: 'Did you eat the melon pan?', notes: 3, then: [{ from: 'jungwon', t: 'yes' }, { from: 'jungwon', t: "in four bites. it was very good. please don't tell sunoo, he'll want to know which bakery" }] }
    ] },
    { id: 'sees-jw', thread: 'sees', rank: 2, days: 1, rename: 'S.E.E.S.', msgs: [
      { from: 'junpei', t: 'ok so why is there a guy doing homework in the council room at 9pm' },
      { from: 'yukari', t: 'he told me my ribbon is out of dress code' },
      { from: 'yukari', t: "AT A SCHOOL HE DOESN'T GO TO" },
      { from: 'mitsuru', t: "He's correct, incidentally." },
      { from: 'akihiko', t: "he asked me for the boxing club's receipts. nobody has ever asked me for receipts" }
    ], reply: [
      { t: "He's with me. Sort of.", then: [{ from: 'junpei', t: 'SORT OF' }, { from: 'yukari', t: "solar that's not an answer" }, { from: 'mitsuru', t: "He's with all of us, as of this week. I've given him a key." }] },
      { t: "He's a student council president. From somewhere else.", then: [{ from: 'mitsuru', t: 'A very good one. Annoyingly.' }, { from: 'junpei', t: "there's TWO of them now?? we're doomed" }] }
    ] },
    { id: 'jw-3a', rank: 3, days: 1, slot: 1, msgs: [
      { from: 'jungwon', t: 'they keep coming in. all from the same night' },
      { from: 'jungwon', t: 'sunoo has asked if i ate eleven times' },
      { from: 'jungwon', t: "i haven't answered. i don't know if it'll send" }
    ], reply: [
      { t: 'Try. Tell him you ate.', notes: 3, then: [{ from: 'jungwon', t: 'i did' }, { from: 'jungwon', t: 'it says sending' }, { from: 'jungwon', t: "it's said sending for an hour. i'm going to watch it until it changes" }] },
      { t: 'Did you eat?', notes: 2, then: [{ from: 'jungwon', t: 'now there are twelve' }] }
    ] },
    // His friends find Solar's number in his phone. Delivered late, like everything from home.
    { id: 'jw-gc-1', thread: 'jw-gc', rank: 4, before: 8, days: 2, slot: 1, msgs: [
      { sys: 'sunooshine added you to "JUNGWON IS MEAN"' },
      { sys: 'Delivered 3 days late' },
      { from: 'jw-sunoo', t: 'hi!!! is this croissant girl' },
      { from: 'jw-sunoo', t: "jungwon didn't give us ur number. it was just in his phone. under solar (not that one)" },
      { from: 'jw-niki', t: 'LMAOOOO not that one' },
      { from: 'jw-jungwon', t: "i didn't name it that" },
      { from: 'jw-jay', t: 'u absolutely did' },
      { ask: [
        { t: "Hi, Sunoo. Yes, it's croissant girl.", notes: 3, then: [{ from: 'jw-sunoo', t: 'YAY!!!' }, { from: 'jw-sunoo', t: 'is he eating. be honest' }] },
        { t: "Why am I saved as 'not that one'?", notes: 2, then: [{ from: 'jw-jake', t: "there's another solar!! she's running against him" }, { from: 'jw-niki', t: 'the scary one' }, { from: 'jw-jungwon', t: "she's not scary" }, { from: 'jw-jay', t: 'she ran against u with GLITTER' }] },
        { t: 'Is this group chat called JUNGWON IS MEAN?', notes: 2, then: [{ from: 'jw-niki', t: 'i felt it was necessary' }, { from: 'jw-jungwon', t: 'the gc name??? rly???' }] }
      ] },
      { from: 'jw-heeseung', t: "solar, i'm heeseung, his vice president. sorry about them" },
      { from: 'jw-heeseung', t: "is he sleeping? he says he's fine. he always says he's fine" },
      { from: 'jw-jungwon', t: 'i am fine' },
      { from: 'jw-jake', t: "that's basically a no" },
      { ask: [
        { t: 'He slept four hours yesterday. In a chair. I counted.', notes: 3, then: [{ from: 'jw-heeseung', t: 'four is a record' }, { from: 'jw-sunoo', t: 'SOLAR WE LOVE U' }, { from: 'jw-jungwon', t: 'traitor' }] },
        { t: 'He ate a whole bowl of ramen. I watched.', notes: 3, then: [{ from: 'jw-sunoo', t: 'A WHOLE BOWL' }, { from: 'jw-jay', t: 'proud of u man' }, { from: 'jw-jungwon', t: 'it was a normal amount of ramen' }] },
        { t: "I'm not telling you anything without his permission.", notes: 2, then: [{ from: 'jw-jungwon', t: 'thank you' }, { from: 'jw-niki', t: 'boring' }, { from: 'jw-heeseung', t: "...that's fair. that's actually really fair" }] }
      ] },
      { from: 'jw-sunghoon', t: 'ok but more importantly' },
      { from: 'jw-sunghoon', t: 'is she cute' },
      { from: 'jw-jay', t: 'dude. pack it up already' },
      { from: 'jw-heeseung', t: 'please leave the girl alone, sunghoon' },
      { from: 'jw-niki', t: "jungwon hyung hasn't said no" },
      { from: 'jw-jungwon', t: "i'm leaving" },
      { ask: [
        { t: '(Say nothing. Let him suffer.)', notes: 2, then: [{ from: 'jw-niki', t: "HE'S TYPING" }, { from: 'jw-niki', t: 'he stopped typing' }, { from: 'jw-jake', t: 'this is the best day of my life' }] },
        { t: 'Hi, Sunghoon.', notes: 1, then: [{ from: 'jw-sunghoon', t: 'why hello' }, { from: 'jw-jay', t: "i'm going to kill him" }] },
        { t: "Jungwon says hi to everyone, by the way. He won't type it.", notes: 3, then: [{ from: 'jw-jungwon', t: "i didn't say that" }, { from: 'jw-sunoo', t: 'he did. i can tell 🥺' }, { from: 'jw-jungwon', t: '...hi' }] }
      ] },
      { from: 'jw-jake', t: 'we miss u won' },
      { from: 'jw-jake', t: "the count's in the morning. we'll save u a seat" },
      { sys: 'Messages to this group may be delayed' }
    ] },
    { id: 'jw-5a', rank: 5, days: 1, slot: 1, msgs: [
      { from: 'jungwon', t: 'ninety-eight' },
      { from: 'jungwon', t: "i don't go to your school. i'm not on your rankings. it doesn't count" },
      { from: 'jungwon', t: "it's ninety-eight" }
    ], reply: [
      { t: "You're going to retake it, aren't you.", notes: 3, then: [{ from: 'jungwon', t: 'i asked mr. edogawa for another copy' }, { from: 'jungwon', t: "he gave me a crystal. i don't know what that means" }] },
      { t: 'Ninety-eight is incredible.', notes: 2, then: [{ from: 'jungwon', t: 'ninety-eight is two points' }] }
    ] },
    { id: 'jw-6a', rank: 6, days: 1, slot: 1, msgs: [
      { from: 'jungwon', t: 'i keep thinking about what it said' },
      { from: 'jungwon', t: "that i'd done enough" },
      { from: 'jungwon', t: "nobody's ever said that to me. it shouldn't have been the first" }
    ], reply: [
      { t: "You have done enough. I'm saying it too. Now it's not the first.", notes: 3, then: [{ from: 'jungwon', t: '...' }, { from: 'jungwon', t: 'ok' }, { from: 'jungwon', t: 'ok. thank you. goodnight solar' }] },
      { t: "Come to the dorm before midnight tomorrow. Don't be out in it alone.", notes: 3, then: [{ from: 'jungwon', t: 'is that an order' }, { from: 'jungwon', t: "...i'll be there at 11:40. i'll bring work" }] }
    ] },
    { id: 'jw-7a', rank: 7, days: 1, slot: 1, msgs: [
      { from: 'jungwon', t: 'i practiced on koromaru again' },
      { from: 'jungwon', t: 'he accepted' },
      { from: 'jungwon', t: "i don't think he understood the terms" }
    ], reply: [
      { t: "He understood. He's a very good judge of character.", notes: 3, then: [{ from: 'jungwon', t: 'he licked my ear during the conclusion' }, { from: 'jungwon', t: "i'm choosing to take that as a yes" }] },
      { t: "Practice on her next. In person.", notes: 2, then: [{ from: 'jungwon', t: "i'd have to go home for that" }, { from: 'jungwon', t: "...i know. i'm working on it" }] }
    ] },
    { id: 'jw-8a', rank: 8, days: 1, slot: 1, msgs: [
      { from: 'jungwon', t: 'the last one took nine days' },
      { from: 'jungwon', t: "it was jake. it just says 'won'" },
      { from: 'jungwon', t: "just my name. i've been looking at it for an hour" }
    ], reply: [
      { t: "Then I'll say yours. So you've got one from here too. Jungwon.", notes: 3, then: [{ from: 'jungwon', t: '...' }, { from: 'jungwon', t: 'that one arrived instantly. huh' }] },
      { t: "They haven't forgotten you. It's just a long line.", notes: 3, then: [{ from: 'jungwon', t: 'a long line' }, { from: 'jungwon', t: "ok. i can wait in a line. i'm good at lines" }] }
    ] },
    { id: 'jw-9r', rank: 9, route: 'romance', days: 1, slot: 1, msgs: [
      { from: 'jungwon', t: 'i drafted a statement about earlier' },
      { from: 'jungwon', t: 'i deleted the statement' },
      { from: 'jungwon', t: "i'm just going to say i'm happy. that's the statement" }
    ], reply: [
      { t: 'Motion to adopt the statement.', notes: 3, then: [{ from: 'jungwon', t: 'seconded' }, { from: 'jungwon', t: "carried. i'm putting it in the minutes" }] },
      { t: "I'm happy too. Go to sleep.", notes: 3, then: [{ from: 'jungwon', t: "i can't. i'm too happy. this is your fault" }] }
    ] },
    { id: 'jw-9f', rank: 9, route: 'friend', days: 1, slot: 1, msgs: [
      { from: 'jungwon', t: 'friend' },
      { from: 'jungwon', t: "i keep typing it and deleting it. it looks strange in lowercase. it's a big word" }
    ], reply: [
      { t: 'Friend.', notes: 3, then: [{ from: 'jungwon', t: "ok. good. i'm putting it in the minutes" }] },
      { t: 'Best friend, actually. Sorry, Heeseung.', notes: 3, then: [{ from: 'jungwon', t: "he'll understand" }, { from: 'jungwon', t: "he won't. don't tell him" }] }
    ] },
    { id: 'jw-10a', rank: 10, days: 1, slot: 1, msgs: [
      { from: 'jungwon', t: 'i ate lunch. 12:30. on time' },
      { from: 'jungwon', t: "i'm telling you so you can tell me i did a good job" },
      { from: 'jungwon', t: "i know that's ridiculous. tell me anyway" }
    ], reply: [
      { t: 'You did a good job, Mr. President.', notes: 3, then: [{ from: 'jungwon', t: '...' }, { from: 'jungwon', t: "thank you. i'm going to think about that all day" }] },
      { t: 'What did you eat? Be specific.', notes: 3, then: [{ from: 'jungwon', t: 'rice. egg. half a melon pan. the good bakery' }, { from: 'jungwon', t: "you're worse than sunoo. i mean that as the highest compliment i have" }] }
    ] }
  ],
  ranks: [
    { title: '1: you look like someone', music: 'mystery', place: 'Gekkoukan High · Student Council Room · After Hours', scene: [
      { n: "The light in the student council room was still on at half past six, which was not, by itself, strange. Mitsuru-senpai kept hours like a lighthouse. What was strange was that Mitsuru-senpai had left at five, Solar had watched her go, red hair and a stack of folders and the car waiting at the gate, and the light had stayed on anyway." },
      { n: "She only stopped because the door was open a hand's width. That was the whole plan. Look in, see the cleaner, go home." },
      { n: "There was no cleaner. There was a boy at the long table, sitting with his back very straight and his sleeves pushed up, working through a stack of papers with a red pen the way people eat when they've stopped tasting it. Dark hair, a little too long at the front. A navy blazer that wasn't Gekkoukan's, with a crest she didn't know. And above him, pinned to the corkboard between the fire drill schedule and September's minutes, a poster she did." },
      { n: "VOTE SOLAR KIM. The sun with the little smiling face. The glitter, which had gotten onto the corkboard, and the wall, and, she noticed, the boy's left cuff." },
      { s: 'jungwon', f: 'neutral', t: "We're closed." },
      { n: "He said it without looking up, the way you'd tell someone the time." },
      { s: 'jungwon', f: 'neutral', t: "Unless you're here about the budget. Then we're very closed. Somebody here has been rounding to the nearest thousand yen, and I'm trying not to take it personally." },
      { choose: [
        { t: "(Knock on the doorframe anyway.)", notes: 3, then: [
          { n: "She knocked, twice, on the open door. He looked up at the sound with the automatic, polite readiness of somebody who had answered a great many knocks, and then his pen stopped." }
        ] },
        { t: "Who are you, and why are you doing Mitsuru-senpai's paperwork?", notes: 2, then: [
          { s: 'jungwon', f: 'serious', t: "It was out of order." },
          { n: "As if that answered both questions. From his face, it did. Then he looked up, and his pen stopped." }
        ] },
        { t: "The budget's not that bad.", notes: 1, then: [
          { s: 'jungwon', f: 'neutral', t: "It's color-coded by vibes." },
          { n: "He turned a page toward her without looking up. It was, a little. Then he did look up, and his pen stopped." }
        ] }
      ] },
      { n: "He looked at her properly. It went on a beat too long, long enough that she felt it on her skin, the specific discomfort of being looked at by someone who is checking you against something." },
      { s: 'jungwon', f: 'surprised', t: "Sorry. You look like someone." },
      { n: "He'd said that before. She had heard him say it in a warm little cafe on the strip that had not been there the next morning, with a croissant somewhere in the middle of it, and her stomach did a small unhappy turn, like a stair in the dark that was one step lower than it should have been." },
      { s: 'solar', t: "You said that at the cafe." },
      { s: 'jungwon', f: 'flustered', t: "...Yeah. I did. Yeobo's. You were there." },
      { s: 'jungwon', f: 'neutral', t: "Sunoo made me eat a croissant. Or you gave me yours. I keep remembering it both ways. Everything from that night is like that." },
      { s: 'jungwon', f: 'neutral', t: "I left to come back to school for my notes. I walked down the hall to the council room and opened the door, and it was this one." },
      { s: 'jungwon', f: 'serious', t: "Three days ago, I think. The clocks here do something at midnight that I'd like to file a complaint about." },
      { choose: [
        { t: "Does anyone know you're here?", notes: 3, then: [
          { s: 'jungwon', f: 'neutral', t: "Your president. She came in the first morning and found me alphabetizing her club requests." },
          { s: 'jungwon', f: 'happy', t: "She said she had decided not to examine how I got here. I said that was a reasonable administrative decision. I think we're friends now." },
          { n: "Something showed in his cheeks for half a second, two deep dimples, there and gone, like he had caught himself enjoying something and put it back where he found it." }
        ] },
        { t: "That poster. Is it yours?", notes: 3, then: [
          { s: 'jungwon', f: 'serious', t: "No." },
          { n: "He glanced up at it and away again, the way you look at the sun." },
          { s: 'jungwon', f: 'neutral', t: "It's the girl running against me. She did that by hand. It took her a whole weekend. The glitter is a war crime." }
        ] },
        { t: "You've been sleeping here?", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "I haven't been sleeping. That's different." },
          { n: "He said it like that settled something." }
        ] }
      ] },
      { s: 'jungwon', f: 'neutral', t: "Yang Jungwon. Student council president, Hamlim High. Third-year." },
      { s: 'jungwon', f: 'serious', t: "Eighteen, before you ask. Old enough to run a school. Not old enough to skip lunch, according to everyone I know." },
      { n: "He stood and held his hand out across the long table, formally, the way candidates do on a stage." },
      { choose: [
        { t: "What are you doing? Is this a joke?", notes: 3, then: [
          { s: 'jungwon', f: 'surprised', t: "..." },
          { n: "His hand stayed out in the air between them. Something crossed his face that she couldn't read, not hurt exactly, more like a door opening onto the wrong room." },
          { s: 'jungwon', f: 'flustered', t: "You really are new to this kind of thing, huh." },
          { s: 'jungwon', f: 'sad', t: "Sorry. Somebody said that to me once. Exactly like that." },
          { n: "He started to put his hand down. She took it anyway, a second too late, and he let her, and neither of them mentioned it." }
        ] },
        { t: "(Shake it.)", notes: 2, then: [
          { n: "She shook it. His hand was cold and dry and very steady, and he shook exactly twice, like somebody had once taught him the number." },
          { s: 'jungwon', f: 'happy', t: "Good grip. You'd do well in a debate." }
        ] }
      ] },
      { n: "She told him her name. He went very still." },
      { s: 'jungwon', f: 'surprised', t: "...Of course it is." },
      { n: "He sat back down. He picked up the red pen. He didn't use it." },
      { s: 'jungwon', f: 'neutral', t: "Have you eaten? You look like you haven't eaten." },
      { s: 'solar', t: "You first." },
      { s: 'jungwon', f: 'neutral', t: "When would I have had time to do that." },
      { n: "She left a melon pan from her bag on the corner of the budget without asking, and when she looked back from the hallway he was holding it in both hands and studying it like a form he didn't know how to fill out. Under the poster. Under the glitter, which was still, very slowly, getting on everything." }
    ] },

    { after: '10/20', title: '2: two presidents', place: 'Gekkoukan High · Student Council Room', scene: [
      { n: "By the next week he had taken over one end of the long table entirely, his end, with his own pens in a row and his own stack of forms and a hand-lettered card that said DO NOT MOVE, and Mitsuru-senpai had the other end, and the two of them sat there in the afternoons like the heads of two warring houses at a very formal dinner." },
      { s: 'mitsuru', f: 'neutral', t: "He corrected my minutes." },
      { s: 'mitsuru', f: 'neutral', t: "In red." },
      { s: 'jungwon', f: 'neutral', t: "There were three errors." },
      { s: 'mitsuru', f: 'surprised', t: "There were two." },
      { s: 'jungwon', f: 'serious', t: "The third was a comma. A comma is an error when it changes the meaning of a motion." },
      { n: "Mitsuru looked at the minutes. Mitsuru looked at the comma. Solar watched something terrible and wonderful happen on her face, which was the face of a person who had been right about everything for two years encountering, for the first time, a peer." },
      { s: 'mitsuru', f: 'sad', t: "...I'm afraid that's true." },
      { choose: [
        { t: "How long have you each been president?", notes: 3, then: [
          { s: 'mitsuru', f: 'neutral', t: "Since my second year." },
          { s: 'jungwon', f: 'happy', t: "Since my first." },
          { n: "Mitsuru turned, very slowly, and looked at him. He looked back. The dimples came out, smug as a cat in a sunbeam, and Solar had to look at the ceiling for a while." }
        ] },
        { t: "Should I leave you two alone?", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "Please don't. If you leave, we'll start on the charter, and neither of us will survive it." }
        ] },
        { t: "Mitsuru-senpai's minutes are perfect.", notes: 1, then: [
          { s: 'jungwon', f: 'neutral', t: "Loyal. Good. Wrong, but good." }
        ] }
      ] },
      { n: "At five Mitsuru packed up her end of the table with the precision of a surgeon, and on her way out she caught Solar's sleeve at the door and spoke low." },
      { s: 'mitsuru', f: 'neutral', t: "He hasn't left this room in a week, as far as I can tell. I have never seen him eat. He's the first of your guests to ask me for a copy of the school charter." },
      { s: 'mitsuru', f: 'sad', t: "Take him somewhere with food. That isn't a request." },
      { n: "So she did." },
      { place: 'Hagakure Ramen', time: 'Evening' },
      { n: "Hagakure was hot and loud and fogged white at the windows, and Jungwon sat at the counter in his navy blazer with his back very straight, reading the menu on the wall like a ballot with far too many candidates." },
      { s: 'jungwon', f: 'neutral', t: "I'm not that hungry." },
      { n: "He ate the whole bowl. He ate it slowly at first, politely, and then less politely, and then with the total concentration of someone who has just remembered what a body is for, and when he surfaced the bowl was empty and he looked faintly betrayed by himself." },
      { s: 'jungwon', f: 'flustered', t: "...I was a little hungry." },
      { choose: [
        { t: "When did you last eat? Honestly.", notes: 3, then: [
          { s: 'jungwon', f: 'neutral', t: "Your melon pan. Before that, a croissant. Before that, I genuinely don't know. A Tuesday." },
          { s: 'jungwon', f: 'serious', t: "I faint sometimes. At home. Not a lot. Enough that my friends have a rotation." }
        ] },
        { t: "(Push your gyoza over to him without a word.)", notes: 3, then: [
          { n: "She pushed the plate over. He looked at it, and at her, and then ate all six, methodically, in order, like an agenda." },
          { s: 'jungwon', f: 'flustered', t: "Don't tell anyone about this. I have a reputation for not having a body." }
        ] },
        { t: "You're going to faint, living like this.", notes: 1, then: [
          { s: 'jungwon', f: 'serious', t: "I've fainted before. It's fine. You wake up and the meeting's still going." }
        ] }
      ] },
      { s: 'jungwon', f: 'neutral', t: "Heeseung brings me dinner. Sunoo asks if I ate, every day, in every message. Everybody reminds me. That's the problem." },
      { s: 'jungwon', f: 'sad', t: "When everybody reminds you, it stops sounding like a person. It starts sounding like weather." },
      { n: "He paid. He insisted. He worked out the tip on a napkin to the yen and then left a little more on top of the calculation, which she suspected was the most reckless thing he had done in years. Outside on the cold street he stood for a second with his hands in his pockets, like he'd forgotten which way he was supposed to go." },
      { s: 'jungwon', f: 'flustered', t: "That was really nice. Thank you. I don't— thank you." }
    ] },

    { after: '10/27', title: '3: delivered late', music: 'mystery', place: 'Gekkoukan High · Student Council Room', scene: [
      { n: "His phone went off in the middle of a Tuesday afternoon, and he jumped like he'd been shot." },
      { n: "It was the first sound it had made since he came. Solar knew that because he'd told her, in the flat voice he saved for things that frightened him, that his phone had full bars and no messages and a date on the lock screen that hadn't changed since he got here. Now it was buzzing on the table in long stuttering bursts, over and over, walking itself toward the edge, and he was just watching it go." },
      { s: 'jungwon', f: 'surprised', t: "...It's them." },
      { place: 'Gekkoukan High · Rooftop', time: 'After School' },
      { n: "He wanted air, he said. They went up to the roof. He sat with his back against the fence and the phone in both hands and read them to her one at a time, as they came in." },
      { phone: [
        { from: 'jw-sunoo', t: 'jungwon did u eat' },
        { from: 'jw-sunoo', t: 'jungwon' },
        { from: 'jw-sunoo', t: 'its 9pm. u said u were just going back for ur notes' },
        { from: 'jw-sunoo', t: 'r u in the council room again' }
      ], contact: 'JUNGWON IS MEAN · Delivered 9 days late', handle: 'sunooshine', me: 'injangwon' },
      { s: 'jungwon', f: 'neutral', t: "Sunoo. Council secretary. He thinks I'm a houseplant. He's not wrong." },
      { phone: [
        { from: 'jw-niki', t: 'hope u lose tmrw' },
        { from: 'jw-niki', t: 'jk' },
        { from: 'jw-niki', t: 'unless' }
      ], contact: 'JUNGWON IS MEAN · Delivered 9 days late', handle: 'rikiniki', me: 'injangwon' },
      { s: 'jungwon', f: 'serious', t: "Niki. He's a child. He wants me to lose so he can say he called it." },
      { phone: [
        { from: 'jw-heeseung', t: 'whatever happens tomorrow im proud of u' },
        { from: 'jw-heeseung', t: 'go home and sleep. please. i mean it' }
      ], contact: 'JUNGWON IS MEAN · Delivered 9 days late', handle: 'heeheeseung', me: 'injangwon' },
      { n: "He didn't say who that one was. He read it twice, and then put his thumb over the screen, like he was keeping it warm." },
      { choose: [
        { t: "(Wait. Let him read it as many times as he needs.)", notes: 3, then: [
          { n: "She waited. He read it again. Up here the wind came off the bay and lifted the hair off his forehead, and for once he looked exactly his age, eighteen and a long way from home and trying not to be." },
          { s: 'jungwon', f: 'sad', t: "...Heeseung. He'll be up all night. He always is, the night before. He sits outside the room where they count, like that helps." }
        ] },
        { t: "They sound like they love you.", notes: 3, then: [
          { s: 'jungwon', f: 'flustered', t: "They're annoying." },
          { s: 'jungwon', f: 'sad', t: "...Yeah. They do." }
        ] },
        { t: "Who's that one?", notes: 2, then: [
          { s: 'jungwon', f: 'sad', t: "Heeseung. My vice president, for as long as I've been president. He's been telling me to sleep for just as long." }
        ] }
      ] },
      { s: 'jungwon', f: 'neutral', t: "It's all from the same night. The night I left. Nine days of messages, and every one of them is from that night." },
      { s: 'jungwon', f: 'serious', t: "Whatever's happening there isn't happening yet. They're still waiting for the morning." },
      { s: 'solar', t: "What happens in the morning?" },
      { s: 'jungwon', f: 'neutral', t: "They count the votes." },
      { n: "He said it the way people say the name of a hospital." },
      { choose: [
        { t: "Try sending something back.", notes: 3, then: [
          { n: "He typed with one thumb, slowly, and she watched him delete it three times before he settled on i'm ok. i ate. He pressed send. The little bar crept a quarter of the way across and stopped there, sending, a thin line reaching for somewhere very far away." },
          { s: 'jungwon', f: 'neutral', t: "...It'll get there. Eventually. Everything does." }
        ] },
        { t: "You don't have to go back to it yet.", notes: 2, then: [
          { s: 'jungwon', f: 'serious', t: "I know. That's what worries me." }
        ] }
      ] },
      { n: "They stayed until the light went orange and then gray. He never put the phone down. On the stairs he admitted, to nobody in particular, that he had technically lied to Sunoo, because the melon pan had been yesterday, and then he looked at her sideways, and she sighed, and they went to Hagakure." }
    ] },

    { after: '11/5', title: '4: the count', music: 'night', place: 'Iwatodai Strip', scene: [
      { n: "She found him on the strip in the late afternoon, standing in front of the gap between the shuttered pachinko place and the ramen shop, where in her memory there had once been a warm window and a bell." },
      { n: "He had his hands in his blazer pockets and the posture of someone waiting outside a classroom for a result, and he didn't turn around when she came up beside him." },
      { s: 'jungwon', f: 'neutral', t: "It was right here. I'd swear to it. I'd swear to it under oath." },
      { s: 'solar', t: "It was. I was there." },
      { s: 'jungwon', f: 'neutral', t: "Okay. Good. Then I'm not losing it. I'm just lost. That's better. That's a logistics problem." },
      { choose: [
        { t: "(Stand with him and look at the wall.)", notes: 3, then: [
          { n: "She stood with him. They looked at the wall together. It was a very ordinary wall, gray, with a gas meter and a peeling sticker for a moving company, and after a while he made a small sound that was nearly a laugh." },
          { s: 'jungwon', f: 'happy', t: "This is the stupidest thing I've ever done. Thank you for doing it with me." }
        ] },
        { t: "Do you want to go home?", notes: 2, then: [
          { s: 'jungwon', f: 'serious', t: "That's a complicated question with a simple answer, and I don't like either of them." }
        ] }
      ] },
      { n: "They walked. Past the ramen shop, past the bookstore, past the drugstore with its little mascot frog. He talked, which he almost never did when it wasn't a speech, about the count." },
      { s: 'jungwon', f: 'neutral', t: "I've won every election I've ever been in. Class rep. Treasurer. President, every time they've let me run. I've never once been nervous about a count. You do the work, the numbers come in, you were right or you weren't." },
      { s: 'jungwon', f: 'sad', t: "I'm scared of this one." },
      { choose: [
        { t: "Why this one?", notes: 3, then: [
          { s: 'jungwon', f: 'sad', t: "Because either way, it's over." }
        ] },
        { t: "Because she might win?", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "No. Because it ends whether she wins or not." },
          { n: "He said it to the pavement. Then he looked, very briefly, like he had surprised himself." }
        ] }
      ] },
      { s: 'jungwon', f: 'sad', t: "If I win, the campaign's over. If I lose, the campaign's over. Either way she doesn't have a reason to sit across a table from me anymore. To argue with me about the cafeteria, or ask me how a rebuttal works, or—" },
      { n: "He stopped. He looked at Solar, and she watched it happen on his face again, the thing from the council room, one person checked against another and found almost, but not quite." },
      { s: 'jungwon', f: 'flustered', t: "She has your name. I noticed at the cafe. I've been noticing for three weeks." },
      { s: 'solar', t: "Solar Kim." },
      { s: 'jungwon', f: 'neutral', t: "Solar Kim. She'd want you to know she's the original. She'd want that on the record." },
      { choose: [
        { t: "Do I really look like her?", notes: 3, then: [
          { s: 'jungwon', f: 'neutral', t: "No. Not really. Not your face." },
          { s: 'jungwon', f: 'flustered', t: "You stand like her. Like you're about to argue with somebody and haven't decided who yet. And you both look at me like I'm the one being ridiculous. Nobody does that. It's new." }
        ] },
        { t: "Is that why you keep talking to me?", notes: 2, then: [
          { s: 'jungwon', f: 'surprised', t: "...No." },
          { s: 'jungwon', f: 'serious', t: "I'd be a very bad president if I couldn't tell two people apart. I talk to you because you bring melon pan and you don't need anything from me. That's a different thing. That's its own thing." }
        ] },
        { t: "You should tell her.", notes: 2, then: [
          { s: 'jungwon', f: 'sad', t: "I'd have to go home to do that." },
          { n: "He didn't say anything else, and she didn't make him." }
        ] }
      ] },
      { n: "At the station he stopped under the departures board, all ordinary times and ordinary places, and read it for a long time, as though somewhere on it there might be a line that said Hamlim, and a platform, and a time." },
      { s: 'jungwon', f: 'neutral', t: "May the best candidate win." },
      { n: "He said it to the board. It sounded like something he'd said on a stage, to a girl who had laughed at him for it, and it sounded like he would give a great deal to be laughed at again." }
    ] },

    { after: '11/12', title: '5: ninety-eight', place: 'Gekkoukan High · Library', scene: [
      { n: "He had found out, somehow, that Gekkoukan's third-years had a practice exam that week, and he had found out, somehow, how to get a copy, and Solar suspected the somehow was Mr. Edogawa, who could be bought with an interesting conversation about ley lines and had probably been given one." },
      { n: "Now he sat at the big table by the library window with the marked paper flat in front of him, very straight and very still, looking at it the way you'd look at a letter from a hospital." },
      { s: 'jungwon', f: 'serious', t: "Ninety-eight." },
      { choose: [
        { t: "Which question?", notes: 3, then: [
          { s: 'jungwon', f: 'surprised', t: "...Thank you. Thank you. Nobody ever asks which question. Fourteen. A sign error. A sign error, Solar." },
          { n: "He showed her. It was, in fact, a sign error. She had never seen anyone so betrayed by a minus." }
        ] },
        { t: "You don't even go here. It doesn't count.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "It counts to me. Everything counts to me. That's sort of the whole problem with me." }
        ] },
        { t: "Ninety-eight is incredible.", notes: 1, then: [
          { s: 'jungwon', f: 'serious', t: "Ninety-eight is two points." }
        ] }
      ] },
      { n: "She'd brought her own calculus, because it was the library and that was the pretext, and once he had stared at the ninety-eight for long enough he pulled her textbook across the table without asking, found the page she was on and the problem she was stuck on, and started to teach." },
      { n: "He was good at it. He was very, very good at it, patient and clear in a way he never was about himself, breaking each step down until it was small enough to hold and then waiting while she held it. He didn't sigh once. He drew little arrows. When she got one right he tapped the page twice with his pen, like a stamp." },
      { s: 'jungwon', f: 'happy', t: "There. See? You knew how. You just didn't trust the second step." },
      { s: 'solar', t: "Who taught you to teach like that?" },
      { s: 'jungwon', f: 'neutral', t: "Nobody. I taught myself to learn things fast, because my parents keep a spreadsheet." },
      { s: 'jungwon', f: 'neutral', t: "Not about me. Of me. Grades, rankings, competitions. There's a column for the math competition and a column for the election, and a column, I think, for whether I've disappointed anyone that week. It's color-coded." },
      { n: "He said it so lightly. He said it like he was telling her about the weather in a city she would never visit." },
      { choose: [
        { t: "What color is this week?", notes: 3, then: [
          { s: 'jungwon', f: 'surprised', t: "..." },
          { s: 'jungwon', f: 'happy', t: "Nobody's ever asked me that either. I don't know. I haven't been home. Maybe it's blank." },
          { n: "He seemed to like that idea more than he wanted to." }
        ] },
        { t: "That's awful.", notes: 2, then: [
          { s: 'jungwon', f: 'serious', t: "It's efficient." },
          { s: 'jungwon', f: 'sad', t: "...It's a little awful." }
        ] }
      ] },
      { s: 'solar', t: "Okay. New problem. You have to do nothing for fifteen minutes." },
      { s: 'jungwon', f: 'surprised', t: "That's not a problem. That's not even math." },
      { s: 'solar', t: "It's the hardest problem in the book." },
      { n: "He lasted four minutes. He spent them sitting with his hands flat on the table, watching the ginkgo outside the window let go of its leaves one at a time, his knee bouncing, his jaw tight, and at four minutes and ten seconds he reached for the ninety-eight, and she slid it away, and he made a sound of such genuine anguish that a first-year two tables over looked up." },
      { s: 'jungwon', f: 'flustered', t: "This is torture. You know that. This is a violation of something." },
      { choose: [
        { t: "(Put your hand on his knee to stop it bouncing.)", notes: 3, then: [
          { n: "She put her hand on his knee under the table. It stopped. Everything about him stopped, in fact, for one full second, and then started again a little differently." },
          { s: 'jungwon', f: 'flustered', t: "...Okay. Okay. Eleven more minutes. I can do eleven." },
          { n: "He did nine. She counted it as a pass." }
        ] },
        { t: "Five more minutes. You can do five.", notes: 2, then: [
          { s: 'jungwon', f: 'serious', t: "I can do anything for five minutes. That's how I got here." },
          { n: "He did five. Then, unasked, three more, watching the leaves come down, and something in his shoulders came down half an inch with them." }
        ] }
      ] }
    ] },

    { after: '11/19', title: "6: the hour that doesn't count", place: 'Moonlight Bridge · The Dark Hour', scene: [
      { n: "Midnight, and the world went green." },
      { n: "Solar had stopped flinching at it months ago, the sick lurch of the light, the moon swollen too big and too yellow, the coffins standing in the street where people had been, but she still felt it in her teeth. She'd come out because he had texted at 11:52 the single word bridge, and nothing after it." },
      { n: "He was halfway across, leaning on the rail above the green river in his blazer and no coat, looking out at the water like it was the first quiet place he had ever found." },
      { s: 'jungwon', f: 'neutral', t: "You're awake too. Good. I was starting to think it was just me." },
      { s: 'jungwon', f: 'neutral', t: "It happens every night. Did you know that? Every night at midnight. Everybody stops. Your clocks stop. My phone stops trying to send. Nobody needs anything. Nobody can." },
      { s: 'jungwon', f: 'happy', t: "It's the only hour I've had off in two years." },
      { choose: [
        { t: "(Lean on the rail beside him.)", notes: 3, then: [
          { n: "She leaned on the rail beside him. The metal was cold and faintly sticky, the way everything was in the hour, and the river below was the color of a bottle, and he moved half a step toward her without seeming to notice he had done it." }
        ] },
        { t: "It's not safe out here.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "I know. Your president told me. Very sternly. With a diagram." },
          { s: 'jungwon', f: 'serious', t: "I came anyway. I wanted one hour that didn't count." }
        ] }
      ] },
      { n: "Something moved along the railing. Paper. Loose sheets, a handful of them, turning over and over in a wind she couldn't feel, catching on the bolts and tearing free and coming on again, like leaves, like something looking for a place to settle." },
      { n: "Solar's whole body went cold before she'd finished seeing it. She knew paper like that. She had seen it on a platform in June and on a platform that went on forever in August, and she had not forgotten for one second what it sounded like when it talked." },
      { s: 'jungwon', f: 'neutral', t: "That was here last night too. It talked to me." },
      { s: 'jungwon', f: 'neutral', t: "It sounded like Heeseung, at first. Then like Sunoo. Then like me, which was the worst one, because I believed it." },
      { s: 'jungwon', f: 'sad', t: "It said I'd done enough. It said I could stay in this hour, where the morning never comes and nobody counts anything. Nobody wins, nobody loses, nobody has to get up from the table. The night before could just keep being the night before." },
      { s: 'jungwon', f: 'sad', t: "Nobody has ever told me I'd done enough. It shouldn't have been the first." },
      { choose: [
        { t: "It takes the endings out of people. Don't let it have yours.", notes: 3, then: [
          { s: 'jungwon', f: 'surprised', t: "...You know what it is." },
          { s: 'solar', t: "I know what it does." },
          { n: "He looked at her for a long moment with the green light on his face, and she watched him file it, the way he filed everything, somewhere he would be able to find it again." }
        ] },
        { t: "(Take his hand. Hold on.)", notes: 3, then: [
          { n: "She took his hand. It was cold, colder than hers, and when she held on he looked down at their hands like a document he hadn't been told to expect, and then held on back, hard, as though the bridge were moving." }
        ] },
        { t: "You have done enough. I'm saying it too.", notes: 3, then: [
          { s: 'jungwon', f: 'sad', t: "..." },
          { s: 'jungwon', f: 'flustered', t: "That's. Okay. That counts more. From you, that counts more." }
        ] }
      ] },
      { n: "The pages lifted off the railing all at once, as if somebody had called them, and blew away over the river toward the tower that stood where the school ought to be, and were gone." },
      { s: 'jungwon', f: 'serious', t: "I told it I'd think about it. I'm very good at thinking about things. I can think about something for years." },
      { s: 'jungwon', f: 'neutral', t: "But I've never not wanted to know the result. Not once. Even when it's bad. I don't think I'd be me if I stopped wanting to know." },
      { n: "The hour ended the way it always did, all at once, the color running out of the sky like water out of a sink, the coffins turning back into people mid-step, a taxi going past with its radio on. He let go of her hand a full minute after he could have." },
      { n: "She walked him to the school gate, where he said he'd be fine, and she said he always said that, and he said, quietly, that this time he was trying to mean it." }
    ] },

    { after: '11/26', title: '7: maeumi', music: 'sun', place: 'Naganaki Shrine', scene: [
      { n: "Cold and bright, the kind of late November afternoon that looked like summer through a window and was nothing like it outside. She'd talked him out of the council room, which had taken twenty minutes and a promise that it would still be there, and they had walked up to the shrine because it was close and he had never seen it." },
      { n: "Koromaru was on the steps with his tennis ball. He saw them coming and stood up and wagged with the entire back half of his body." },
      { s: 'jungwon', f: 'surprised', t: "...Oh." },
      { n: "Jungwon stopped at the bottom of the steps and crouched, slowly, the way you do when you don't want to frighten something, and held out his hand, and Koromaru came straight down to him and pressed his whole head into it." },
      { s: 'koromaru', f: 'happy', t: "Woof!" },
      { s: 'jungwon', f: 'happy', t: "Hi. Hi. Look at you. You're so big." },
      { s: 'jungwon', f: 'sad', t: "I have a dog. Maeumi. He's very small. He'd come up to about here on this one. He thinks he's a wolf." },
      { choose: [
        { t: "What does Maeumi mean?", notes: 3, then: [
          { s: 'jungwon', f: 'flustered', t: "Heart. Sort of. Your heart, your mind, the inside of you." },
          { s: 'jungwon', f: 'neutral', t: "I named him when I was much younger. I'd never pick anything that honest now." }
        ] },
        { t: "(Throw the ball for Koromaru.)", notes: 2, then: [
          { n: "She threw it. It went too far, past the playground and off the path into the hedge, and Jungwon watched it go with a look she couldn't read at all." }
        ] }
      ] },
      { s: 'jungwon', f: 'neutral', t: "He got out once. The first morning of term. He went straight under a fence after somebody else's dog, a girl's dog, and I thought he was going to get hurt, so I yelled." },
      { s: 'jungwon', f: 'flustered', t: "At her. At six in the morning. I told her she should learn how to better control her dog." },
      { n: "Solar's skin went cold and then hot. She knew the shape of that sentence. She knew it in this exact place, with this exact dog at her feet, on the first morning of the new term, a boy's voice past the torii, scared and furious at the same time, the way people sound when they love something small." },
      { s: 'solar', t: "It was you." },
      { s: 'jungwon', f: 'surprised', t: "...What?" },
      { choose: [
        { t: "I heard you. Here, on the first morning of term. A little dog in the hedge, and a voice by the gate.", notes: 3, then: [
          { s: 'jungwon', f: 'surprised', t: "..." },
          { n: "He stared at her, and then at the gate, and then at Koromaru, who gazed back with total innocence." },
          { s: 'jungwon', f: 'flustered', t: "You heard me yell at a stranger. From another world. That's the first thing anybody here ever heard me say." },
          { s: 'jungwon', f: 'sad', t: "That's humiliating. That's exactly right, though. That's the most me thing I could possibly have sent." }
        ] },
        { t: "Did she yell back?", notes: 3, then: [
          { s: 'jungwon', f: 'happy', t: "She didn't know it was me. For weeks. Then she found out on a stage in front of the whole school and looked at me like she was about to climb over the podium." },
          { s: 'jungwon', f: 'flustered', t: "So. Yes. Eventually. Very much yes." }
        ] }
      ] },
      { s: 'solar', t: "Did you ever apologize?" },
      { s: 'jungwon', f: 'serious', t: "Maeumi could have gotten hurt." },
      { s: 'solar', t: "Did he?" },
      { s: 'jungwon', f: 'neutral', t: "...No." },
      { s: 'solar', t: "Exactly." },
      { s: 'jungwon', f: 'flustered', t: "My friend Jake says that to me. Exactly that. In exactly that voice. I hate it from both of you." },
      { choose: [
        { t: "Practice on me.", notes: 3, then: [
          { n: "He looked at her for a long time. Then he stood, and brushed off his knees, and stood in front of her on the shrine path very straight, the way he stood at podiums." },
          { s: 'jungwon', f: 'serious', t: "I'm sorry I yelled at you. About the dog. I was scared, and I'm bad at being scared, so I was rude instead, because it's easier. You didn't deserve it. Your dog didn't deserve it. He's a good dog. He was only playing." },
          { n: "His voice was steady the whole way through. His hands weren't. She watched them at his sides, opening and closing." },
          { s: 'solar', t: "I forgive you." },
          { s: 'jungwon', f: 'sad', t: "...It doesn't count from you." },
          { s: 'solar', t: "It counts a little." },
          { s: 'jungwon', f: 'happy', t: "...Yeah. It counts a little." }
        ] },
        { t: "Practice on Koromaru first.", notes: 2, then: [
          { n: "He crouched in front of Koromaru and apologized to him, gravely and at length, in full sentences, with a conclusion. Koromaru licked his ear in the middle of the conclusion." },
          { s: 'koromaru', f: 'happy', t: "Arf!" },
          { s: 'jungwon', f: 'happy', t: "...He accepted. I don't think he understood the terms." }
        ] }
      ] },
      { n: "They stayed until the sun went low. He threw the ball for Koromaru forty-one times, she counted, and every throw was a little looser than the last, until by the end he was laughing at the dog the way you laugh at something you love, open, all the way up into the dimples, and didn't once try to put it back." }
    ] },

    { after: '12/4', title: '8: nine days late', music: 'tender', place: 'Iwatodai · Riverside', scene: [
      { n: "December came in gray and stayed that way. The river was low and the color of pencil lead, and the wind off it got into everything, and Jungwon, who had begun leaving the council room without being dragged, was on a bench by the water when she found him, very still, holding his phone in both hands like a cup of something hot." },
      { s: 'jungwon', f: 'neutral', t: "Nine days. The last one took nine days to get here." },
      { s: 'jungwon', f: 'neutral', t: "It was Jake. It just says won. My name. I don't know what the rest of the sentence was. I don't think he finished it." },
      { n: "He turned the screen so she could see. One word in a gray bubble, and under it in tiny letters, delivered, and a date nearly two weeks old that was also, somehow, still the same night." },
      { s: 'jungwon', f: 'sad', t: "The gaps are getting longer. In October it was a day. Then three. Now nine." },
      { s: 'jungwon', f: 'sad', t: "And I can't remember Sunoo's coffee order. I've ordered it for him a hundred times. Something with oat milk. Something with a stupid name. It's gone." },
      { choose: [
        { t: "(Sit down close enough that your shoulders touch.)", notes: 3, then: [
          { n: "She sat close enough that their shoulders touched through their coats. He didn't move away. After a while he leaned, slowly, the way a building settles, until most of his weight was on her." }
        ] },
        { t: "That's not your fault.", notes: 2, then: [
          { s: 'jungwon', f: 'serious', t: "Everything's my fault. That's what being president is. You're the one who's responsible when things go missing." }
        ] }
      ] },
      { s: 'jungwon', f: 'sad', t: "What if I forget the way back? A little at a time. The coffee, and then the cafe, and then their faces, and by the end of January I'm just a guy in a council room who doesn't know why he keeps looking at a poster." },
      { n: "It was the worst thing anyone had said to her since August. She knew what happened to people whose pages went faint. She had watched a girl on a bench get lighter and lighter, until she barely cast a shadow, and she had not let it happen then, and she was not going to let it happen now." },
      { choose: [
        { t: "Then tell me. Everything. I'll remember it for you.", notes: 3, then: [
          { s: 'jungwon', f: 'surprised', t: "...Everything?" },
          { s: 'solar', t: "Everything. Start with the coffee." },
          { n: "He started with the coffee. He didn't remember it. He remembered the cup instead, the gel-pen star Sunoo drew on everything, and the way Sunoo's grandmother had taught him to steam milk, and then the booth, and who sat where, and Jay's football scholarship, which Jungwon had once threatened, horribly, as a joke, and Niki's hope-u-lose, and Heeseung outside the counting room every single year, and somewhere in the middle of all of it the coffee came back. Oat milk. Vanilla. Something called a cloud. He laughed out loud." },
          { s: 'jungwon', f: 'happy', t: "A cloud. A vanilla cloud. That's so stupid. That's so Sunoo." }
        ] },
        { t: "You won't forget. I won't let you.", notes: 3, then: [
          { s: 'jungwon', f: 'neutral', t: "You can't promise that." },
          { s: 'solar', t: "I just did. Put it in the minutes." },
          { s: 'jungwon', f: 'happy', t: "...It's in the minutes." }
        ] }
      ] },
      { ifRank: { haechan: 1 }, then: [
        { n: "Later, walking back, he mentioned out of nowhere that there was a boy at her dorm who sat on the dryers at three in the morning. They had passed each other at the vending machine by the stairs." },
        { s: 'jungwon', f: 'serious', t: "He looked at me like he'd met me somewhere. I looked at him like I wanted to fight him. I don't know why. I've never wanted to fight anyone in my life. I write strongly worded memos." },
        { n: "Solar thought about that for longer than she wanted to, and didn't say anything, and he didn't ask." }
      ] },
      { n: "It got dark early. Neither of them moved to go. At some point he took her hand on the bench between them without looking at it, and held it the way you'd hold a railing on a staircase you couldn't see, and that was the first time he had been the one to reach." },
      { s: 'jungwon', f: 'neutral', t: "You're the only person here who doesn't need anything from me." },
      { s: 'solar', t: "I need you to eat." },
      { s: 'jungwon', f: 'happy', t: "...That's fair. That's a fair amendment." }
    ] },

    { after: '12/14', title: '9: what this is', place: 'Gekkoukan High · Student Council Room · After Hours', scene: [
      { n: "Finals ended on a Friday. By Friday evening the school was empty the way schools are only twice a year, every classroom dark, every locker shut, the whole building exhaling, and the only light on the second floor was the council room, which she had known it would be." },
      { n: "He'd taken the poster down. It lay flat on the long table, glitter and all, and he was smoothing a crease out of one corner with his thumb, over and over, though the crease was long gone." },
      { s: 'jungwon', f: 'neutral', t: "They came back. The messages. All at once this morning. Nine days late, but they came." },
      { s: 'jungwon', f: 'happy', t: "Sunoo wants to know if I'm eating. Jay wants his calculator back. Niki hopes I lose. Nothing's changed. It's still the night before." },
      { n: "He seemed lighter than he had in weeks. He seemed, she thought, like somebody who had looked over the edge of something and stepped back and was still a little dizzy with how close it had been." },
      { choose: [
        { t: "I'm glad. I really am.", notes: 3, then: [
          { s: 'jungwon', f: 'happy', t: "I know. You're bad at hiding it. Your whole face does it." }
        ] },
        { t: "Did Jay really lend you a calculator?", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "He thinks he did. I've had my own calculator since I was nine. I let him think it." }
        ] }
      ] },
      { s: 'jungwon', f: 'serious', t: "I need to say something, and I need you not to interrupt, because I've drafted it four times and I'll lose the thread." },
      { s: 'jungwon', f: 'neutral', t: "I said you look like someone. The first night. I've been saying it, one way or another, ever since. I said it because it was easier. Because if you looked like someone, then this was something I already knew how to file." },
      { s: 'jungwon', f: 'flustered', t: "It isn't. You don't. I don't have a folder for you." },
      { s: 'jungwon', f: 'serious', t: "So I need to know what this is. Before the hour ends and I have to decide things. I'm bad at things I can't name." },
      { route: [
        { t: "I don't want to be filed. I want to be yours. For as long as here lasts.", route: 'romance', notes: 3, then: [
          { s: 'jungwon', f: 'surprised', t: "..." },
          { n: "For a second he didn't do anything at all. He stood by the table with his thumb still on the corner of the poster, looking at her like the results had come in early and he was reading them over and over to make sure." },
          { s: 'jungwon', f: 'flustered', t: "That's. You can't just say it. You're supposed to make a speech. There's supposed to be a rebuttal." },
          { s: 'solar', t: "I'm not running for anything." },
          { s: 'jungwon', f: 'happy', t: "...No. No, you're not." },
          { n: "He came around the table and stopped in front of her, very close, and took both her hands in his, cold from the poster and the room and the December he had never once dressed for, and held them flat against his chest, where she could feel his heart going like it had somewhere urgent to be." },
          { s: 'jungwon', f: 'flustered', t: "I've never done any of this. I want to do it right. Can we go slowly? I want to go slowly, so I remember all of it." },
          { n: "She went up on her toes and rested her forehead against his, and he closed his eyes, and they stood like that in the empty council room under the bare corkboard where the poster had been, until a radiator clanked and he laughed, startled, into the small warm space between them, and didn't let go." }
        ] },
        { t: "You're my friend, Jungwon. The best one I made this year. You don't have to file me anywhere.", route: 'friend', notes: 3, then: [
          { s: 'jungwon', f: 'surprised', t: "..." },
          { s: 'jungwon', f: 'happy', t: "Friend." },
          { s: 'jungwon', f: 'flustered', t: "I don't have many of those who aren't also on a committee. You might be the first one I didn't have to vote for." },
          { n: "He held his hand out across the table, formally, the way he had in October. This time she shook it the first time, and he shook exactly twice, and then didn't let go, and then, after a long second, pulled her into a hug so quick and so stiff that it was clearly the first one he had ever started himself, and the poster crinkled between them, and the glitter got on everything." }
        ] }
      ] }
    ] },

    { after: '1/16', title: '10: you look like you', place: 'Gekkoukan High · Rooftop', scene: [
      { n: "January, and the end of something. Everyone who had come through knew it by now. Elizabeth had told them one by one, in her careful way, that when the month ran out the hour would close, and every door with it, and they would each have to be on the right side of their own." },
      { n: "He'd asked her to meet him on the roof after school. It was cold enough that the fence hurt to touch, and the sky over the bay was that hard clean winter blue that made everything look closer than it was, and he had the poster rolled up under his arm, tied with a length of string from the council room." },
      { s: 'jungwon', f: 'neutral', t: "I'm going home. When the hour ends. I've decided." },
      { s: 'jungwon', f: 'neutral', t: "Not because I have to. I could stay. It asked again, the paper thing, last week. It was very polite about it. I said no thank you, like declining a second helping." },
      { s: 'jungwon', f: 'serious', t: "I want to know the result. Win or lose. I want to sit in that auditorium and hear my name or hers and feel whatever I feel about it. I want the morning." },
      { choose: [
        { t: "What changed?", notes: 3, then: [
          { s: 'jungwon', f: 'neutral', t: "You made me do nothing for fifteen minutes. I did nine. Nobody had ever made me stop before. It turns out when you stop, you can hear what you actually want." },
          { s: 'jungwon', f: 'happy', t: "It's very loud. It was there the whole time." }
        ] },
        { t: "I'm proud of you.", notes: 3, then: [
          { s: 'jungwon', f: 'flustered', t: "Don't. If you say that I'll have a whole thing, and I've only scheduled a medium thing." }
        ] }
      ] },
      { n: "He untied the string and unrolled the poster on the cold concrete, holding the corners down with his hands. VOTE SOLAR KIM. The smiling sun. The glitter, fainter now, which had gotten into the council room carpet and her blazer and, she suspected, permanently into him." },
      { s: 'jungwon', f: 'neutral', t: "Your president said she'd keep it in case its owner came looking. I'm the closest thing it's got. I'm taking it back to her." },
      { s: 'jungwon', f: 'flustered', t: "She'll pretend she doesn't want it. Then she'll put it on her wall." },
      { n: "He rolled it up again, carefully, and retied the string. Then he reached into his blazer pocket and held out something small and gold on his palm. A pin, the Hamlim crest in navy enamel, PRESIDENT along the bottom in tiny capitals, the back worn smooth from being put on and taken off every morning for three years." },
      { s: 'jungwon', f: 'neutral', t: "This one's yours." },
      { ifRoute: 'friend', then: [
        { s: 'jungwon', f: 'happy', t: "Honorary vice president of a council you've never seen, at a school you'll never go to. It's the highest office I can give. Don't tell Heeseung." },
        { choose: [
          { t: "(Pin it on your blazer, right now.)", notes: 3, then: [
            { n: "She pinned it on, crooked, and he reached over without thinking and straightened it, exactly level, and then left his hand there a second, flat over the pin, like he was swearing her in." },
            { s: 'jungwon', f: 'happy', t: "There. Now it's official. I put it in the minutes this morning." }
          ] },
          { t: "Won't you need it?", notes: 3, then: [
            { s: 'jungwon', f: 'neutral', t: "I'll get a new one, if I win. If I don't, she'll have one, and this one will be here." },
            { s: 'jungwon', f: 'happy', t: "Either way, a Solar has the pin. That seems right." }
          ] }
        ] },
        { n: "They stayed until the sun went down behind the city and the cold drove them in. At the top of the stairs he stopped and turned and looked at her the way he had in October, across the long table, the long look of someone checking a person against something." },
        { s: 'jungwon', f: 'happy', t: "You don't look like someone, you know. I was wrong. I'm wrong very rarely, so you should write it down." },
        { s: 'jungwon', f: 'happy', t: "You look like you." },
        { n: "He held out his hand. She shook it, exactly twice, and he laughed, and they went down the stairs together into the warm dark building, two presidents of nothing, arguing about the cafeteria." }
      ] },
      { ifRoute: 'romance', then: [
        { n: "He didn't hand it to her. He stepped close and pinned it to her blazer himself, his cold fingers clumsy on the clasp, his face very serious and very near, getting it exactly level." },
        { s: 'jungwon', f: 'flustered', t: "There. Now part of my office is here. That's how it works. I looked it up." },
        { s: 'solar', t: "You didn't look it up." },
        { s: 'jungwon', f: 'happy', t: "I wrote the rule. That's better than looking it up." },
        { choose: [
          { t: "(Kiss his cheek, right on the dimple.)", notes: 3, then: [
            { n: "She went up on her toes and kissed his cheek, right where the dimple was. He closed his eyes. He stood perfectly still, the way he stood when he wanted to remember something word for word, and when she stepped back he was smiling so hard both dimples showed and he had stopped trying to hide either of them." }
          ] },
          { t: "(Hold his hand. Don't say anything.)", notes: 3, then: [
            { n: "She took his hand. He held on so tightly it almost hurt and didn't let go, and the two of them stood at the fence looking out at the bay while the light on the water went from gold to rose to blue." }
          ] }
        ] },
        { s: 'jungwon', f: 'sad', t: "There's a version of this where I don't go. I've thought about it. I'm very good at thinking about things." },
        { s: 'jungwon', f: 'neutral', t: "But you'd know. Every day at twelve-thirty you'd know I picked an hour that doesn't count over a morning that does. And I'd know. And you'd start to look like someone. Someone I was hiding from." },
        { s: 'jungwon', f: 'serious', t: "I don't want you to ever look like that. I want you to look like you." },
        { choose: [
          { t: "Then go home. Find out. And eat lunch.", notes: 3, then: [
            { s: 'jungwon', f: 'happy', t: "Twelve-thirty. In pen." },
            { s: 'jungwon', f: 'flustered', t: "...I'll think about you at twelve-thirty. Every day. That's not a promise. That's a schedule. I always keep my schedule." }
          ] },
          { t: "I'll miss you.", notes: 3, then: [
            { s: 'jungwon', f: 'sad', t: "I know. I'll miss you more. I've already started. I started in December." },
            { s: 'jungwon', f: 'flustered', t: "That's very inefficient of me." }
          ] }
        ] },
        { n: "He bent and kissed her forehead, once, slowly, the way you'd sign your name to something you meant to keep. Then he rested his forehead against hers in the cold, eyes closed, and stayed." },
        { s: 'jungwon', f: 'happy', t: "You don't look like someone. I was wrong. I'm wrong very rarely, so you should write it down." },
        { s: 'jungwon', f: 'happy', t: "You look like you." },
        { n: "The sun went down behind the city. The lights came on along the bay, one by one, and the wind picked up and carried a few flecks of glitter off his sleeve and out over the fence, gold and pink, into the blue, toward whatever came next." }
      ] }
    ] }
  ]
});
