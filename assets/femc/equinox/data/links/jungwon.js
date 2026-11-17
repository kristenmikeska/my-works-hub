/* Persona 3: Equinox · Yang Jungwon · V The Hierophant. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1–8 (rank 1 from 4/13, rank 2 from 4/30 so it always follows Mr. Tanabe, both the student council room
   after school). Ranks 9–15 still to write.
   Ranks 7–8 (Nov 16, round 3): rank 7 '7: one' from 10/27, council room, then the dorm steps / dining room / Solar's room
   (Mr. Kim lives at the dorm since 10/26). Reads dead.shinjiro, dead.aigis, asks.jungwon (ifChoice), eqx-culture-stage,
   eqx-seams (+ ifBefore 12/1), the kiss flags (ifCount). Sets eqx-jw-page-torn | -three | -held (a numeral 1 pressed into
   his blank 4/13 diary page in the heavy hand), eqx-jw-stairs (yes-path: Solar gives back Hanlim's stair count, 44),
   eqx-jw-key-his | -again (Room 6 key offered to Mr. Ueda, who refuses), eqx-jw-own-yes (Solar lets him answer Mr. Kim's
   "stay for dinner" himself), eqx-jw-last-train (kiss: he misses the last train, wakes in her room, Taejoon on the stairs).
   Rank 8 '8: what I am here' from 11/25, council room, then Mrs. Kim (Tatsumi ward before 12/1, dorm lounge after; her
   "bring her home" ask to Jungwon, who answers "it's hers to come"; no tally: the HOAX parents' ask lives in their link),
   the river street (Mr. Ueda asleep and smiling on the bench in the frost: a 1/20 kept clue), the guesthouse roof. THE ROUTE
   CHOICE: { route } with 'romance' (flag eqx-jw-chosen; Room 4, waking up together; Jihoon at the end of the hall if
   ifRomance jihoon, else Sunghoon) or 'friend' (flag eqx-jw-friend; nothing at home moves). Also sets eqx-jw-ueda-called.
   Reads eqx-home-H3 / eqx-away-H3, ifRomance jihoon / haechan (+ their kiss flags). New kiss flags: eqx-jw-last-train,
   eqx-jw-chosen (act files' KISS lists don't know them).
   Ranks 4–6 (Nov 16): rank 4 '4: the summer item' from 7/2, council room after school (reads asks.jungwon via ifChoice,
   eqx-second-hill, eqx-two-lives, eqx-last-grain; sets eqx-jw-cake-taken, eqx-jw-summer-open | -walk, eqx-jw-summer-kiss).
   Rank 5 '5: two lists' from 8/18, Kirijo Guesthouse (Room 4, then the roof), daytime, in summer break: summerHome below
   (reads asks.jungwon, eqx-incheon, eqx-table-op, eqx-three-dads; sets eqx-jw-tested | eqx-jw-third-list,
   eqx-jw-room-four (spends the night, cut away; Jay in the hall at five)). Rank 6 '6: room four' from 10/4, council room
   (after eqx-timetables 10/2; reads asks.jungwon, ifBefore 10/22, eqx-1023; sets eqx-floor-jungwon (his ask floor: a
   guesthouse door marked Room 4 on the Third Hill), eqx-jw-sorry, eqx-jw-floor-together | -behind | -written,
   eqx-jw-both-names). Kiss flags new in 4–6 (the acts' KISS lists only know eqx-jw-council-kiss): eqx-jw-summer-kiss,
   eqx-jw-room-four, eqx-jw-both-names. No route set yet (Solstice set it at rank 8). Mr. Ueda (gate guard) says yes all
   year: by rank 6 he lives at the boarding house (a townsperson for 1/20; not killed here). Rank 3 (from 6/7, same room; branches on the rank 2 form flags,
   eqx-two-lives, eqx-last-grain) records his ask: tally asks.jungwon (+ cakes / choose), flag eqx-jw-locked-door. Rank 2 flags (nothing reads them yet): eqx-jw-form-both | -blank | -kept,
   eqx-jw-council-kiss.
   Shape: the stub fields from assets/femc/equinox/data/links.js (this file wins over the stub, core.js indexLinks).
   Two lives (HOAX + strangers): in private with Solar he talks about both openly. Rank 1 opens one way on 4/13 itself
   (ifBefore '4/14') and another on any later day. Solstice's ranks are shared memory. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'jungwon', name: 'Yang Jungwon', short: 'Jungwon', arcana: 'Hierophant', numeral: 'V', from: 'Hoax · strangers', kind: 'searcher',
  world: 'HS', romance: 'canon', maxRank: 15, starts: '4/8', lodging: 'guesthouse',
  home: { area: 'gekkoukan', spot: 'Student Council Room', slot: 'after', days: [1, 2, 3, 4, 5],
          hint: 'After school on weekdays, in the student council room, long after the meeting ends.' },
  // Summer break (7/21-8/31): Gekkoukan is shut, so he's at the guesthouse by the station (rank 5 plays there).
  summerHome: { area: 'station', spot: 'Kirijo Guesthouse', slot: 'after', days: [0, 1, 2, 3, 4, 5, 6],
          hint: 'Summer break: afternoons at the Kirijo Guesthouse by the station, in Room 4 with the door shut.' },
  cast: { jay: 'Jay', 'kim-dad': 'Mr. Kim', 'kim-mom': 'Mrs. Kim' },
  ranks: [
    { after: '4/13', title: '1: the thirteenth', place: 'Gekkoukan High · Student Council Room', time: 'After School', music: 'tender', scene: [
      { bg: 'gekkoukan-student-council' },
      { n: "He had the same key. That was the first thing. Mitsuru had given him a key to this room last October so he'd have a desk to be polite at, and he'd given it back to her in March, on the last day, on a ribbon, because he didn't know how to hand a person a key without ceremony. On the eighth of April it had been in his blazer pocket. He hadn't put it there. He'd checked every pocket twice, and then a third time, and then he'd come and tried it in the lock, and it had turned." },
      { n: "Gekkoukan's student council had a new president this year, a second-year with a nervous laugh who had looked at a Kirijo exchange student with a red pen and an opinion on the athletics budget and nearly wept with relief. The meeting had ended at four. It was a quarter to five. Jungwon was still at the long table, alone, with his back very straight and his sleeves pushed exactly to the elbow and a black diary open in front of him, writing." },
      { n: "He stood up when she came in. Correctly, the way he'd stand for a teacher. Then, because it was her and they were alone, not correctly at all: he came round the end of the table and stopped a foot from her, and looked at her face as if he were checking a sum, and let out a breath he'd been holding since about lunchtime." },
      { s: 'jungwon', f: 'happy', t: "You came. Good afternoon. Sit down, please. I'll stop pretending to work." },
      { ifBefore: '4/14', then: [
        { n: "The diary was open at today. At the top of the page, in his small exact hand, the date. The thirteenth of April. Under it there was nothing at all. A whole page, ruled, empty, and the pen lying across it, capped." },
        { n: "She knew the date. She knew it in the life with the harbor and the house on the hill and the seventh stair; she knew it the way you know the date of an exam you haven't studied for. So did he. He saw her see the page and didn't close it." },
        { s: 'jungwon', f: 'neutral', t: "I wrote it this morning. At six. Then I sat and waited for something to happen." },
        { s: 'jungwon', f: 'neutral', t: "Nothing has. I've checked. It's quarter to five on the thirteenth of April, here, and the minute hand has been going round all day like an ordinary minute hand, and nothing has happened at all." }
      ], else: [
        { n: "The diary was open, and he turned it back a page when he saw her looking, and then another, until he found the one he wanted, and turned it round so she could see. The thirteenth of April. In his small exact hand at the top. And under it, nothing at all. A whole page, ruled, empty." },
        { n: "She knew the date. She knew it in the life with the harbor and the house on the hill and the seventh stair; she knew it the way you know the date of an exam you haven't studied for. So did he. He'd known she'd know." },
        { s: 'jungwon', f: 'neutral', t: "I wrote it at six that morning. Then I sat here all day and waited for something to happen." },
        { s: 'jungwon', f: 'neutral', t: "Nothing did. I checked. It was the thirteenth of April, here, and the minute hand went round all day like an ordinary minute hand, and nothing happened at all, and then it was the fourteenth." }
      ] },
      { s: 'jungwon', f: 'serious', t: "I don't know if I'm relieved. I've been trying all day to work out which of me is relieved and which of me feels robbed. I think it's the same one. I think that's the problem." },
      { choose: [
        { t: "It's a different year here. It's not that thirteenth.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "I know. Two thousand and ten. I've done the subtraction many times." },
          { s: 'jungwon', f: 'sad', t: "...It's still the thirteenth. A date doesn't know what year it's in. It just comes round." }
        ] },
        { t: "(Sit down across from him. Close the diary.)", notes: 3, then: [
          { n: "She sat down across from him and reached over and closed the diary, gently, the way you'd close a door on a room where somebody was sleeping. He watched her hand do it. He didn't stop her. He laid his own hand flat on the cover afterward, over hers for a second, and then over nothing." },
          { s: 'jungwon', f: 'neutral', t: "...Thank you. I wasn't able to." }
        ] },
        { t: "Have you eaten today?", notes: 3, then: [
          { s: 'jungwon', f: 'happy', t: "Yes." },
          { s: 'solar', f: 'neutral', t: "Jungwon." },
          { s: 'jungwon', f: 'neutral', t: "...I had a coffee. From the machine by the gym. It was very hot, which I think counts as nutrition in some countries." },
          { n: "She took the onigiri out of her bag that she'd bought at the konbini by the station for exactly this, because in one of her lives she had been doing exactly this for two years, and put it in front of him. He looked at it with the face of a man being handed his own homework back with a good grade on it." }
        ] }
      ] },
      { n: "He didn't ask her which of her was in the room. He never had. He'd said it plainly a year ago, at this table: he was one person from two places, and he knew she was more than that, and he wasn't going to make her count herself for him. He just looked at her the way he looked at a sheet of figures he already trusted, and went on." },
      { s: 'jungwon', f: 'neutral', t: "At home, the other home, the one with the council room, it's exam week. Or it was. I was in the middle of a sentence to you about the vice president's duties. I'm fairly sure I didn't finish it." },
      { s: 'jungwon', f: 'neutral', t: "And at the other one, it's... nearly the thirteenth. My mother's lists. The flowers. Donghyuck being very loud in a hallway about nothing." },
      { s: 'jungwon', f: 'serious', t: "I'm sorry. I'm doing it again. Counting both. You don't have to hold either of them for me." },
      { choose: [
        { t: "I'm holding both anyway. I've got three. Two of yours is easy.", notes: 3, then: [
          { s: 'jungwon', f: 'surprised', t: "..." },
          { n: "His face went still. Not the polite stillness. The other one, the one she'd learned meant something had landed exactly where he kept the things that mattered, and he didn't trust himself to move in case it fell off." },
          { s: 'jungwon', f: 'happy', t: "...That isn't how arithmetic works." },
          { s: 'solar', f: 'neutral', t: "It's how I'm doing it." }
        ] },
        { t: "You can say his name like that here, you know. Nobody's listening.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "He's in your dorm. Everybody's listening. It's a very small town and he's a very loud man." },
          { s: 'jungwon', f: 'serious', t: "...He went down the rope. I was at the guesthouse gate with my watch running, looking the wrong way. I've been very polite to him all week about it. I'm going to be polite to him all year." }
        ] },
        { t: "(Reach across the table for his hand.)", notes: 3, then: [
          { n: "She put her hand out across the table, palm up, on top of the athletics budget. He looked at it for a moment. Then he capped his pen, and laid it parallel to the edge of the diary, because he was who he was, and put his hand in hers." },
          { n: "At home he'd done this under desks, under café tables, in the back of a council meeting with the whole room watching the projector. Here there was nobody to hide it from. He didn't seem to know what to do with that, and held on anyway." }
        ] }
      ] },
      { n: "There was a form under the diary. She saw it when he moved: a Kirijo Group enrollment sheet, the same cream paper as hers, in Japanese and English, with his name at the top in his own handwriting. Family name. Given name. Nationality. Date of birth. Home address." },
      { n: "One line for the address. He'd filled it in in pencil, and rubbed it out, and filled it in again, and rubbed that out too, and the paper had gone thin and gray and furred there, like a sleeve worn through at the elbow." },
      { s: 'jungwon', f: 'neutral', t: "It wants one address. It has to go back to the office by Friday. One line." },
      { s: 'jungwon', f: 'neutral', t: "I've written the apartment four times. The one by Hanlim. With my mother's plants on the balcony. And I've written the house on the hill four times, the Yangs' house, with the gate. And every time I look at it I'm lying." },
      { s: 'jungwon', f: 'serious', t: "It isn't that I can't choose. I could choose. I'm very good at choosing. I picked my vice president in about four seconds. She said no. I'd pick her again. It's that the form thinks there's one of me, and there isn't, and if I write one line I'll have agreed with it." },
      { n: "He turned the sheet a little to the light from the window. On the worn line, in the place where neither address would stay, there was something else. Not pencil. An impression, pressed into the paper from a sheet that had been on top of it once: the ghost of handwriting, heavy, dented in so deep it had nearly gone through, the letters too faint to read." },
      { s: 'jungwon', f: 'neutral', t: "That was there when they gave it to me. I asked the clerk. She said it must have been the sheet above it in the pile. She said it very quickly." },
      { n: "Solar thought of her own form, the one in the register. The date of birth in June, in a hand that pressed hard enough to dent the page. She didn't say it. She watched him watch her not say it, and knew he'd count it anyway, later, in the diary." },
      { choose: [
        { t: "Leave it blank.", notes: 3, then: [
          { s: 'jungwon', f: 'surprised', t: "...Blank." },
          { s: 'solar', f: 'neutral', t: "Mine has a blank. Nobody's arrested me." },
          { s: 'jungwon', f: 'happy', t: "That is genuinely the worst advice anyone has ever given a president. I'm going to take it." }
        ] },
        { t: "Write both. Squeeze them in.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "In that space? I'd have to write very small." },
          { s: 'solar', f: 'neutral', t: "You write very small." },
          { s: 'jungwon', f: 'happy', t: "...I do. I'll do it at the guesthouse. With the good pen. And then I'll take it to the office myself and watch her read it." }
        ] },
        { t: "Write here.", notes: 1, then: [
          { s: 'jungwon', f: 'neutral', t: "Here." },
          { n: "He said the word back to her as if he'd been handed something hot. He looked at the line for a long time, and didn't write anything, and then he folded the form in half, carefully, and put it in the diary, and closed the diary on it." },
          { s: 'jungwon', f: 'serious', t: "...I'll think about it. That's a real answer. It isn't a polite one." }
        ] }
      ] },
      { n: "From the council room window you could see down into the courtyard. The cherry trees, nearly over. A first-year club handing out flyers by the gate. And, in the middle of the paving where nothing had stood a week ago, a ring of old dark stone with a plank lid on it now and a sawhorse in front and a laminated sign that said MAINTENANCE. DO NOT LEAN." },
      { s: 'jungwon', f: 'neutral', t: "Three hundred and eighteen." },
      { s: 'solar', f: 'neutral', t: "Three hundred and eighteen what?" },
      { s: 'jungwon', f: 'neutral', t: "Students. Who walked past it between the last bell and four o'clock. I was meant to be reading the budget. I counted them instead." },
      { s: 'jungwon', f: 'serious', t: "None of them looked at it. Not one. Not the way you don't look at a hole in a road. The way you don't look at a stranger on a train. They went round it like water." },
      { n: "He said it in the even voice he used when he was frightened, the one that got politer the more it meant. She looked down at the ring of stone and a girl went round it with her flyers held to her chest, round and on, chatting, her eyes sliding off the sawhorse as if it were a little too bright to look at." },
      { s: 'jungwon', f: 'neutral', t: "There's a man at the guesthouse. Mr. Tanabe. The night manager. He's very kind. He gives Jihoon extra rice, which nobody should." },
      { s: 'jungwon', f: 'neutral', t: "He's a widower. He told me so on the first night, when he gave me my key, because I asked about the ring on his other hand. And this morning, at the desk, he told me he keeps dreaming his wife is at the door. Every night now. Knocking. Calling him by a name nobody else ever used." },
      { s: 'jungwon', f: 'serious', t: "He said it smiling. He said he never gets up in time. He said one of these nights he's going to get up in time." },
      { choose: [
        { t: "Tell him about Hanni's rule.", notes: 3, then: [
          { s: 'jungwon', f: 'neutral', t: "I did. I translated it for him. *In the red, nobody opens a door.* I wrote it on the back of a guesthouse card." },
          { s: 'jungwon', f: 'sad', t: "He thanked me very much and put it in his pocket. He was very polite about it. I know exactly what that means. I do it." }
        ] },
        { t: "He's grieving. People dream.", notes: 1, then: [
          { s: 'jungwon', f: 'neutral', t: "Yes. They do. I know they do." },
          { s: 'jungwon', f: 'serious', t: "...We all heard the knock on Monday. Even at the guesthouse. I'd just like to know which of us is dreaming." }
        ] },
        { t: "(Say nothing. Hold on to his hand.)", notes: 2, then: [
          { n: "She didn't say anything. She held on to his hand on the table, the budget crumpling under their wrists, and he looked down at the courtyard and the ring of stone and the girls going round it, and let her." }
        ] }
      ] },
      { n: "At five the chime went for the end of club hours, the long four-note chime she'd heard every afternoon of a year, and he stood, because it was time, because he always stood when it was time, and packed the diary and the pen and the budget into his bag in the order he'd taken them out." },
      { n: "At the door he stopped. He turned round. There was nobody in the hallway; she could hear the whole empty length of it behind him, the hum of the vending machine at the far end, a window somewhere left open on the wind." },
      { s: 'jungwon', f: 'neutral', t: "Here there's only one of me in the room. Have you noticed? Nobody at the guesthouse knows which house I come from. Nobody here needs me to be either of them. I keep catching myself liking it." },
      { s: 'jungwon', f: 'serious', t: "I don't think I'm supposed to like it. I'm going to think about why I do. In the diary. At length." },
      { s: 'jungwon', f: 'flustered', t: "...I would like to kiss you, though. That isn't a question. It's an item on the agenda. You can table it." },
      { choose: [
        { t: "(Kiss him. Motion carried.)", notes: 3, then: [
          { n: "She kissed him in the doorway of somebody else's council room with the chime still dying in the speakers. He kissed her back the way he did everything at home, very carefully and then, all at once, not carefully at all, one hand coming up to the side of her face as if he were making sure it was the one he remembered, and it was." },
          { n: "When he stepped back his ears were red and his face was doing the still thing, the pleased thing, so hard it was almost a frown." },
          { s: 'jungwon', f: 'happy', t: "...Carried. Unanimously. I'll put it in the minutes." },
          { s: 'solar', f: 'neutral', t: "Don't you dare." },
          { s: 'jungwon', f: 'happy', t: "In code. Nobody will know. *Item one. Approved.*" }
        ] },
        { t: "Tabled. Till Friday. Bring the form.", notes: 2, then: [
          { s: 'jungwon', f: 'happy', t: "Friday. With the form. Understood." },
          { n: "He bowed, the precise short bow from the waist, absolutely seriously, and then ruined it by smiling all the way through it, both dimples, the real kind, the kind with something behind them." }
        ] },
        { t: "(Kiss his cheek. Leave the rest on the agenda.)", notes: 3, then: [
          { n: "She went up on her toes and kissed his cheek, once, by the corner of his mouth, close enough that it was a decision. He stood very still and let her, and when she stepped back he put two fingers to the place as if to check it was still there, and it was." },
          { s: 'jungwon', f: 'flustered', t: "...Partially carried. I'll note the amendment." }
        ] }
      ] },
      { n: "They walked down the stairs together and out through the courtyard, and he walked on the side nearest the well, between her and it, the whole way across, without seeming to have decided to." },
      { n: "At the gate she looked back. She couldn't help it. The sign, the sawhorse, the plank lid, the old dark ring of stone, and every student in the yard going round it like water round a rock. And the plank on top had shifted. Only a little. A few centimeters off true, at one edge, as if something had pushed it from underneath, very gently, just to see whether anyone was still holding it down." },
      { n: "Jungwon was looking at it too. He took his brother's watch off his wrist, and looked at the time, and wrote it in the diary standing up, in the gateway, before they walked on." }
    ] },
    { after: '4/30', title: '2: minutes', place: 'Gekkoukan High · Student Council Room', time: 'After School', music: 'tender', scene: [
      { bg: 'gekkoukan-student-council' },
      { n: "The meeting had ended at four. She knew because she'd passed the nervous second-year president on the stairs, hugging a binder to his chest and looking as if he'd survived something, and he'd bowed to her very fast and said *Yang-senpai is still inside, he's doing the minutes*, in the tone of somebody reporting a natural disaster that had been politely contained." },
      { n: "He wasn't doing the minutes. The council's minutes book was shut on the end of the table, squared to the edge, with the pen laid across it. He was sitting at the far end with his blazer still on and buttoned and the black diary open in front of him, writing, in the small upright hand she knew from two lives, and he'd filled the page and turned it and was filling the next one, and there were a lot of pages before it that had the same hand all the way to the margins." },
      { n: "He looked up when she came in. He'd been waiting; she could see it in how fast his face arranged itself. It arranged itself very well. It always had. But there was something under his eyes that hadn't been there on the thirteenth, gray and fine, like pencil that had been rubbed out." },
      { s: 'jungwon', f: 'neutral', t: "You're early. I'm nearly done. Sit. Please." },
      { choose: [
        { t: "(Sit beside him, not across.)", notes: 3, then: [
          { n: "She took the chair beside his instead of the one across the table, and he noticed, and his pen stopped for exactly one stroke, and went on." }
        ] },
        { t: "When did you last sleep?", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "Properly? The full moon. After the red. Before six." },
          { n: "She worked it out. A few hours on the night of the knocking, after he'd said *everyone accounted for* into a radio, and then six o'clock, and a newspaper that wasn't on the counter. Everything since had been the other kind of sleep, the kind you do sitting up with your shoes on." }
        ] },
        { t: "Jungwon. Stop writing.", notes: 2, then: [
          { s: 'jungwon', f: 'serious', t: "One minute. If I stop in the middle of a sentence I'll have to start it again, and I can't start it again." },
          { n: "He finished the sentence. He put a full stop on it so firmly the nib went through to the next page. Then he put the pen down and laid both his hands flat on either side of the diary, as if it might get up." }
        ] }
      ] },
      { s: 'jungwon', f: 'neutral', t: "I'm writing it down. All of it. Thursday morning. In order. The way you'd take minutes of a meeting nobody wanted to have." },
      { s: 'jungwon', f: 'neutral', t: "At home, when something went wrong at a council meeting, I wrote it down that night, every word, who said it, what time. Then it was in a book. Then it wasn't in me." },
      { s: 'jungwon', f: 'sad', t: "...It isn't working. I've written it four times. It's still in me." },
      { choose: [
        { t: "Read me some of it.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "You were there for the part after." },
          { s: 'solar', f: 'neutral', t: "Not for the part before." },
          { n: "He looked at her a long time. Then he turned the diary a little toward himself, not toward her, and read one line from it in a perfectly level voice, the voice he used for the minutes, for motions and seconds and the time the meeting closed." },
          { s: 'jungwon', f: 'serious', t: "Six-oh-two. The chain is off. It has been taken off from the inside. The slide is at the open end of its track. There is a white powder on the brass." },
          { n: "He closed the diary on his finger. He didn't read any more. She didn't ask him to." }
        ] },
        { t: "You don't have to tell me.", notes: 3, then: [
          { s: 'jungwon', f: 'neutral', t: "I know. That's why I can." },
          { n: "But he didn't, not straight away. He sat with his hands flat on the table and looked at the window, where the afternoon was going on, students in the courtyard, someone's laughter coming up thin through the glass." }
        ] },
        { t: "(Close the diary. Put your hand on top of it.)", notes: 3, then: [
          { n: "She reached over and closed it, gently, and laid her hand flat on the cover. He let her. He looked at her hand on the black cover for a while, and then he put his own on top of hers, and pressed, very slightly, as if the two of them were holding a lid down on something." }
        ] }
      ] },
      { s: 'jungwon', f: 'serious', t: "The card was in his breast pocket." },
      { n: "He said it the way you'd say the last item on an agenda, the one everybody had been dreading." },
      { s: 'jungwon', f: 'serious', t: "Hanni's rule. *Nobody opens a door in the red.* I wrote it out for him on a guesthouse card, in Japanese, my best handwriting. He folded it in four and put it in his breast pocket and said *thank you, young man*, and I checked his chain at eleven every night, and it was on." },
      { s: 'jungwon', f: 'sad', t: "It was in his pocket. When he opened the door. I saw the corner of it. It was right there over his heart and he opened the door anyway." },
      { s: 'jungwon', f: 'neutral', t: "A rule isn't a lock. I knew that. I've known that since I was twelve. I gave him a rule because a rule is what I know how to give people." },
      { choose: [
        { t: "It wasn't your rule that failed. It was what knocked.", notes: 3, then: [
          { s: 'jungwon', f: 'neutral', t: "I know." },
          { s: 'jungwon', f: 'serious', t: "I know that the way I know the date. I can write it down. It doesn't make it light out." }
        ] },
        { t: "You checked his chain every night. Nobody asked you to.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "Somebody should have asked me to. Then it would've been a job. Then I could've failed at a job. This is just something I didn't do well enough." }
        ] },
        { t: "(Don't argue. Just stay close.)", notes: 3, then: [
          { n: "She didn't argue. Arguing with Jungwon about whose fault something was had never once in either life gone anywhere but round in a very precise circle. She moved her chair until her shoulder touched his and left it there, and after a while she felt him lean, a few degrees, the way a building leans and nobody notices for years." }
        ] }
      ] },
      { s: 'jungwon', f: 'neutral', t: "I didn't look in. You should know that. I told Mitsuru-sunbae I didn't look in, at the back, at the opening. I didn't." },
      { s: 'jungwon', f: 'sad', t: "...I keep going back over it to make sure I didn't. And every time I go back I'm less sure. I think if I go back enough times I'll have looked." },
      { n: "She didn't have anything to say to that. Nobody would have. She thought of Minji at the foot of the stairs, and Aigis in the doorway for an hour, and Jihoon at the counter with a cold rice ball in his two hands, and of the flour on the inside of the dorm's door handle, and found she'd taken hold of his sleeve, the blazer cuff, and was holding it tight between her finger and thumb." },

      { n: "After a while he took a folded sheet out from under the diary. She knew it before he'd opened it out. The Kirijo enrollment form, the guesthouse one, with its single line for a home address. Rubbed through in two places now. The paper gone soft and furred where the eraser had been at it, back and forth, back and forth, until you could see the table through it." },
      { s: 'jungwon', f: 'neutral', t: "The office wants it back today. One address. They were very polite about it. They said *the system* needs one." },
      { s: 'jungwon', f: 'neutral', t: "I've written the flat by Hanlim four times. My mother's plants on the balcony. I've written the house in Incheon four times. The gate, the camellias. Every time I write one I rub it out, because the other one's true too." },
      { s: 'jungwon', f: 'serious', t: "And here's the thing I haven't said to anyone. Here, nobody asks me which. Nobody at breakfast wants the strangers one or the Hanlim one. Nobody needs me to be the right one for the room. I can just be one boy at a table, eating an egg." },
      { s: 'jungwon', f: 'sad', t: "...I caught myself liking it. On Tuesday. I was walking back from the station and I thought, I could just be this. And I stopped in the street like someone had called my name." },
      { choose: [
        { t: "Write both. Make them fit on one line.", notes: 3, flag: 'eqx-jw-form-both', then: [
          { s: 'jungwon', f: 'surprised', t: "...Both." },
          { n: "He looked at the line, the one line, the width of a finger. Then he picked up the pen and wrote, very small, smaller than she'd ever seen him write, the flat by Hanlim, and a slash, and the house in Incheon, and the two of them sat on the line squeezed together like people on a crowded bench, and fit, just, with a millimeter to spare at the end." },
          { s: 'jungwon', f: 'happy', t: "The system won't like it." },
          { s: 'solar', f: 'neutral', t: "The system's not the one who has to live there." }
        ] },
        { t: "Leave it blank. Like my surname box.", notes: 3, flag: 'eqx-jw-form-blank', then: [
          { s: 'jungwon', f: 'neutral', t: "...Pending." },
          { s: 'jungwon', f: 'happy', t: "Mitsuru-sunbae has a stamp for that. I've seen it. I'll borrow it." },
          { n: "He folded the form back up along its soft lines with the line empty, and she watched something in his shoulders put itself down, the way you'd put a bag down after carrying it the length of a platform." }
        ] },
        { t: "Liking it here doesn't make you less of either.", notes: 2, flag: 'eqx-jw-form-kept', then: [
          { s: 'jungwon', f: 'neutral', t: "It feels like it does. It feels like a door I'm not supposed to go through." },
          { s: 'jungwon', f: 'neutral', t: "...I'll keep it for now. The form. I'll tell them Monday. The system can wait for one boy over a weekend." }
        ] }
      ] },
      { n: "Down in the courtyard the clock over the main doors said half past four. Jungwon looked at it, then at his own watch, out of habit, and then got up and went to the window and stood there with his hands behind his back, the way he stood at the window in the council room at home, looking down." },
      { s: 'jungwon', f: 'neutral', t: "Three hundred and eighteen. Monday. Three hundred and seventeen yesterday. I've been counting them past the well." },
      { s: 'jungwon', f: 'serious', t: "The one I missed yesterday was a first-year. He stopped. He was the first one in two weeks to stop. He put his hands on the plank and leaned over and put his ear to the gap." },
      { s: 'jungwon', f: 'neutral', t: "I went down two flights of stairs faster than I've ever gone down stairs. I took him by the collar. I wasn't gentle. He said he was sorry. He said he heard his grandmother." },
      { s: 'jungwon', f: 'serious', t: "His grandmother died when he was in elementary school. He told me that afterward, on the bench, very calmly. Then he went home. He went *round* the well, like everybody else, as if he'd never stopped at all." },
      // CG: eqx-council-window — a boy in a buttoned school blazer standing at a council-room window with his hands behind his back, looking down at a stone well in a school courtyard ringed by a sawhorse and a sign, students walking round it in a wide curve.
      { choose: [
        { t: "(Stand at the window with him. Count the next ones together.)", notes: 3, then: [
          { n: "She went and stood beside him at the glass, and they counted, under their breath, out of step, his in Korean and then, catching himself, in Japanese for her, the students coming out of the shoe lockers and going round the well in a long curve like water round a stone. Forty-one. Forty-two. Nobody stopped. Nobody looked. At fifty she put her hand in the small of his back, and his counting went wrong, and he started again from forty-eight, and didn't seem to mind." }
        ] },
        { t: "Tell Mitsuru about the boy.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "I told Mitsuru-sunbae. She's put a man on the gate at four. In a security jacket. He stands about ten meters from the well and doesn't look at it either." }
        ] }
      ] },
      { n: "When she looked back from the window he had his eyes closed. Standing up. Just for a second, the way you close them in a lift, and then he opened them again very fast, as if he'd been caught at something, and she saw how tired he was all at once, all the way down, the way you see the bottom of a pool when the light changes." },
      { s: 'solar', f: 'neutral', t: "Put your head down." },
      { s: 'jungwon', f: 'flustered', t: "It's a council room." },
      { s: 'solar', f: 'neutral', t: "It's not your council. You said so yourself." },
      { choose: [
        { t: "(Sit him down at the table. Put your blazer under his head.)", notes: 3, then: [
          { n: "She took him by the sleeve back to the table and sat him down in front of the closed diary and folded her blazer into a square and put it on the wood, and after one long look at her he put his head down on it, his cheek on her blazer and his face toward her, and his hand found hers on the table by itself, palm to palm, and held on." },
          { n: "He was asleep in four minutes. She knew because his hand stopped holding on and just lay in hers, warm and heavy, the fingers loose. She didn't move. She sat in somebody else's council room with the light going long across the table and watched him sleep with his mouth a little open and the gray under his eyes, and didn't think about a lobby, or a chair facing a window, or what it was to sit very upright at a little table and not be there." }
        ] },
        { t: "(Kiss him first. Then make him put his head down.)", notes: 3, flag: 'eqx-jw-council-kiss', then: [
          { n: "She took his face in her hands and kissed him, in the middle of somebody else's council room, slowly, the way you'd tell someone *I'm here* in a language that didn't need a grammar for it. He made a sound in his throat, and kissed her back the way he did, careful first and then not careful at all, his hand coming up to her wrist and closing, as if to make sure she was the one he remembered, and she was." },
          { n: "When it was over he stood with his forehead against hers and his eyes shut. She felt him sway. She steered him down into the chair by the shoulders and put her blazer under his head, and he went down onto it like someone stepping off a ledge they'd been standing on for two days, and was asleep before she'd sat down beside him, her hand still in his." }
        ] }
      ] },
      { n: "The chime woke him at five, the long soft four-note chime that told the last club to go home. He sat up all at once with the print of her blazer's buttonhole on his cheek, and looked at her, and at their hands, and at the window, and said, in Korean, the old careful form, the one he used with her in the other house when somebody else might be listening, that he was sorry to have troubled her." },
      { n: "Then, in Japanese, with his ears red," },
      { s: 'jungwon', f: 'flustered', t: "...That was forty minutes. I'll put it in the minutes." },
      { s: 'solar', f: 'happy', t: "Which minutes?" },
      { s: 'jungwon', f: 'happy', t: "The good ones. I'm starting a second book." },
      { n: "On the way out, at the gate, he didn't look at the well. He walked on the side of her nearest it, between her and it, the whole way across the courtyard, the way he had a week ago. But at the gate he stopped, and took out the diary, and wrote the time, and under it, in smaller letters, she saw before he shut it, *slept*." }
    ] },
    { after: '6/7', title: '3: one line', place: 'Gekkoukan High · Student Council Room', time: 'After School', music: 'tender', scene: [
      { bg: 'gekkoukan-student-council' },
      { n: "The rainy season had got into the council room. Not the rain itself; the windows were shut and the radiator under them was off for the summer. Just the damp, the particular soft damp of an old building in June, which got into the paper and made every page in every binder curl at the corner, and got into the wood of the long table so that it smelled faintly, when you put your face near it, like a forest after rain." },
      { n: "He was at the end of the table, in the chair that wasn't the president's, with the black diary closed at his elbow and a form in front of him, and he wasn't writing anything. He had the pen. He was holding it the way you'd hold a pen at an exam you'd studied for and still didn't understand the question on." },
      { s: 'jungwon', f: 'happy', t: "You came. Good afternoon. It's raining, you didn't have to." },
      { s: 'solar', f: 'neutral', t: "It's been raining for a week." },
      { s: 'jungwon', f: 'neutral', t: "Then you didn't have to for a week. Thank you for a week." },
      { n: "She knew the form before she was close enough to read it. The cream paper, the Kirijo crest, the boxes in Japanese with the English under them in smaller type. The line for a home address. She'd seen it rubbed through to the table in April. She'd hoped, without saying so, never to see it again." },
      { ifFlag: 'eqx-jw-form-both', then: [
        { n: "Both addresses were still on it, squeezed onto the one line in his smallest hand like two people on a bench, the flat by Hanlim and a slash and the house in Incheon. Under them, in red, someone at the Kirijo office had drawn a neat straight line through both, and written in the margin, in careful English for his benefit: *One line, one address, please. Thank you for your understanding.*" },
        { s: 'jungwon', f: 'neutral', t: "They were very polite. They're always very polite. They sent it back with a sweet bean bun clipped to it. I think it was an apology. For the system." }
      ] },
      { ifFlag: 'eqx-jw-form-blank', then: [
        { n: "The line was still empty. Across the top of the sheet, in red ink gone a little pink with the damp, was Mitsuru's stamp, PENDING, in Japanese and English, the one she used on the dorm's maintenance requests, and beside it, in her elegant hand, a date: the last day of June." },
        { s: 'jungwon', f: 'neutral', t: "Mitsuru-sunbae held them off for two months. She says she can't hold them past the end of term. The first-term records close. She was very apologetic. She doesn't apologize. It was frightening." }
      ] },
      { ifFlag: 'eqx-jw-form-kept', then: [
        { n: "It was the same sheet. She could tell from the soft furred patch where the eraser had been, and from the way it had been folded and unfolded so many times that the creases had gone white and the paper hung from them like cloth. He hadn't told them Monday. He hadn't told them any Monday since." },
        { s: 'jungwon', f: 'flustered', t: "...I know. I said Monday. It's been a lot of Mondays. The office has started sending me notes. Nice ones. That's worse." }
      ] },
      { ifCount: { of: ['eqx-jw-form-both', 'eqx-jw-form-blank', 'eqx-jw-form-kept'], max: 0 }, then: [
        { n: "It had been rubbed through in two places in April. Someone at the office had taped the holes from the back, neatly, with clear tape, and sent it back to him with a sweet bean bun clipped to the corner and a note in careful English: *One line, one address, please. Thank you for your understanding.*" }
      ] },
      { s: 'jungwon', f: 'neutral', t: "End of June. One address. Or they can't put me in the first-term records, and if I'm not in the records, technically I'm not a student, and if I'm not a student I can't be in this room, and if I can't be in this room I have nowhere to sit after school that isn't the guesthouse." },
      { s: 'jungwon', f: 'serious', t: "And I'm not ready to sit in the guesthouse after school. Mr. Tanabe's desk is still there. They've put a new man at it. He's very nice. He doesn't do the crossword." },
      { choose: [
        { t: "(Sit down next to him. Not across.)", notes: 3, then: [
          { n: "She sat down beside him, not across the table but next to him, close enough that her shoulder was against his, and looked at the form with him, the way you'd look at a hard problem with someone, side by side, so neither of you had to see the other one's face while you thought." }
        ] },
        { t: "I'll stand guard at the door. Nobody gets in till it's filled in.", notes: 2, then: [
          { s: 'jungwon', f: 'happy', t: "Then we'll be here till graduation. Bring snacks. I'll put you in the minutes as security." }
        ] }
      ] },
      { n: "Out of the window, across the courtyard, in the rain, the man from the Kirijo Group stood at the gate in his gray security jacket under a black umbrella, about ten meters from the well, not looking at it. He'd been there every afternoon since April, from four to six. He had a thermos now, and a folding stool he never sat on." },
      { s: 'jungwon', f: 'neutral', t: "I take him tea. Every day at half past four. His name is Mr. Ueda. He has two daughters, both married, and he doesn't like the well either. He says the rain doesn't sound right on the cap. He says it's too quiet. Like rain on a drum with a hand on it." },
      { s: 'jungwon', f: 'neutral', t: "He's started bringing a lunch box. A lady by the river makes it for him. He says she knocks on the guard hut on her way to the market and won't take no for an answer." },
      { n: "He said it lightly, the way he'd have said anything about the weather. She looked at the man at the gate. The umbrella, the thermos, the stool. On the stool, wrapped in a cloth printed all over with white cranes, a lunch box, tied at the top in a neat knot, waiting." },
      { choose: [
        { t: "Tell him to bring his own lunch.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "...I did. Yesterday. He laughed. He said, *you young people, you think kindness is a trap.*" },
          { s: 'jungwon', f: 'serious', t: "I didn't know what to say to that. I went back to my tea." }
        ] },
        { t: "(Say nothing. Watch the box on the stool.)", notes: 3, then: [
          { n: "She said nothing. She watched the cloth with the cranes on it, very white against the gray stool in the rain, and the man beside it not looking at the well, and after a while Jungwon put his hand over hers on the table without looking either, and they watched it together, and neither of them said what they were both thinking, which was that it was the same cloth." }
        ] }
      ] },
      { ifEvent: 'eqx-two-lives', then: [
        { s: 'jungwon', f: 'happy', t: "Jay says I'm the happiest he's seen me since middle school. He said it at breakfast like an accusation. Niki asked which middle school. Nobody answered him." },
        { s: 'jungwon', f: 'neutral', t: "Sunghoon just looked at me over his rice. He knows. He's the one who carries both too. He looked at me the way you'd look at someone standing too close to the edge of a platform. Kindly. Ready to grab." }
      ] },
      { ifEvent: 'eqx-last-grain', then: [
        { s: 'jungwon', f: 'sad', t: "The council sent flowers. For Suemitsu-sunbae. The new president asked me to write the card because my handwriting's the neatest. I sat here for an hour. I didn't know what language to be sorry in." }
      ] },
      { n: "He looked at the form again. At the one line. Then he put the pen down on it, very precisely, parallel to the line, the way he'd lay a pen on the minutes at the end of a meeting, and turned in his chair to face her." },
      { s: 'jungwon', f: 'serious', t: "I want to tell you what I'd write. If I could write anything. And then I want you to tell me whether I can." },
      { s: 'jungwon', f: 'neutral', t: "Not the flat. Not the house. *Kirijo Guesthouse, Room Four, Iwatodai.* Here. Neither of them. Just the room I sleep in, in a town that doesn't exist, with a dent in the pillow that's only mine." },
      { s: 'jungwon', f: 'neutral', t: "Here I'm not anyone's boyfriend that they have to explain to their mother. I'm not anyone's— I'm not on anyone's list of flowers. I'm not the president. I'm not the son. I'm a boy who takes a security guard his tea and likes the egg sandwiches at the konbini and sleeps on a table when you make him." },
      { s: 'jungwon', f: 'sad', t: "I'm one boy. For the first time in two years. And it's so quiet, Solar. It's so quiet in my head, here. I didn't know it could be." },
      { s: 'jungwon', f: 'serious', t: "...Tell me I can write it. Just for the records. Just for here. You're the only one who knows both of them. If you say it's all right, it's all right." },
      { n: "The rain had picked up. It came down the windows in sheets now, so that the courtyard outside went soft and gray and far away, and the man at the gate was a black umbrella and nothing else, and the room was very small and very warm and smelled of damp wood and the clean soap smell of him, and he was looking at her the way he'd looked at the diary on the thirteenth of April, waiting for something to be written on it." },
      // CG: eqx-one-line — a student council room in heavy rain, the windows running gray, a boy in a school blazer turned in his chair toward a girl beside him, a cream enrollment form with one empty address line and a pen laid parallel to it on the long table between them.
      { choose: [
        { t: "Write it. Be one boy here. You've earned it.", notes: 3, tally: { cakes: 1, 'asks.jungwon': 'yes' }, then: [
          { n: "His whole face changed. She'd never seen it do that, not in either house: everything in it that was holding something up just put it down, all at once, and what was left looked about fifteen." },
          { s: 'jungwon', f: 'happy', t: "...Thank you. Thank you. I'm. Thank you." },
          { n: "He picked up the pen and wrote it in his neatest hand, *Kirijo Guesthouse, Room 4, Iwatodai*, one line, one address, the first time since April the line hadn't had to hold two of anything, and he blew on the ink, and looked at it, and laughed out loud, softly, at a form." },
          { n: "He didn't open the diary. He didn't write the time, or the date, or *signed*. The diary stayed shut at his elbow for the rest of the afternoon, and she noticed, much later, that it was the first afternoon since April it had." }
        ] },
        { t: "You're both. You don't get to put either of them down. Write both again.", notes: 2, tally: { 'asks.jungwon': 'no' }, then: [
          { s: 'jungwon', f: 'sad', t: "...I know I'm both. I've never not known. I wanted one afternoon." },
          { n: "He wrote both. The flat, the slash, the house. Squeezed onto the line again, smaller than before, and he didn't laugh this time, and his hand was steady, and his mouth was a straight line, the president's mouth, the son's mouth, and she'd put it there." },
          { s: 'jungwon', f: 'neutral', t: "They'll send it back. I'll write it again. I'm good at writing things again." }
        ] },
        { t: "It's your form. I'm not telling you who to be. Whatever you write, it's yours.", notes: 2, tally: { choose: 1, 'asks.jungwon': 'choose' }, then: [
          { n: "He looked at her for a long moment. Then he laughed, not happily, and put his hand over his eyes." },
          { s: 'jungwon', f: 'flustered', t: "...You were supposed to make it easy. That's the one thing I asked. You were supposed to say yes or no, and then whatever happened it would be your fault and I could love you for it." },
          { s: 'solar', f: 'neutral', t: "I know." },
          { n: "He sat with his hand over his eyes for a while. Then he took it away and picked up the pen and turned slightly in his chair, his shoulder toward her, his arm curled round the form the way you'd curl it round an exam paper so the person next to you couldn't copy, and wrote something, not quickly, and folded the form in half before she could see, and put it in the envelope for the office, and sealed it." },
          { s: 'jungwon', f: 'neutral', t: "...There. Mine. I don't feel better. I feel like I've carried something up a hill." },
          { s: 'jungwon', f: 'neutral', t: "That's probably what it's supposed to feel like." }
        ] }
      ] },
      { n: "The long soft chime went at five, the one that told the last club to go home, and the corridor outside filled with the noise of it, lockers and shoes and somebody's umbrella catching on a doorframe, and went quiet again. The light in the windows had gone from gray to a deeper gray." },
      { n: "He got up and went to the door and stood with his hand on the lock, the little brass catch on the inside that the old president had used when the budget meetings got loud, and he looked at her over his shoulder." },
      { s: 'jungwon', f: 'flustered', t: "...It's an item on the agenda. I'm not sure what number." },
      { choose: [
        { t: "(Nod.)", notes: 3, flag: 'eqx-jw-locked-door', then: [
          { n: "He turned the catch. It went with a small click that sounded much louder than it was, and he came back across the room to her, and didn't sit down, and she stood up to meet him, and they met somewhere near the end of the long table, where the damp had got into the wood and it smelled like a forest." },
          { n: "He kissed her the way he did everything, carefully, properly, as if there were minutes being taken, and then not carefully at all, and her back met the edge of the table and his hands went to her waist and lifted her onto it, easily, as if she weighed nothing, and the binders slid, and one went off the far end onto the floor with a slap like applause, and neither of them looked." },
          { n: "His tie came loose in her hands. Her blazer was somewhere. He said her name against her throat in Korean and then in Japanese and then in nothing, just breath, and her hands were in his hair and his were warm and spread at the small of her back under her shirt, and the rain came down the windows so heavily that the whole room was underwater, and nobody in the world could see in." },
          { n: "Someone tried the door." },
          { n: "The handle went down, and caught on the lock, and went back up. A pause. Then a small polite knock, and a voice, young, nervous, unmistakable: the new president, the second-year, who was terrified of Jungwon and had been since April." },
          { s: 'jungwon', f: 'flustered', t: "...One moment, please." },
          { n: "He said it in the calmest voice she had ever heard come out of a human being, with his tie round his neck like a scarf and his shirt half out and her lipstick on his jaw. He fixed none of it. He went to the door and opened it six inches, exactly, and stood in the gap so that the new president could see nothing at all but the most composed face in Gekkoukan, and asked if he could help." },
          { n: "The new president had left his umbrella. Jungwon reached behind the door without looking, found it in the stand, and handed it through the gap. The boy thanked him three times and bowed twice and fled down the corridor so fast his shoes squeaked." },
          { n: "Jungwon shut the door, and turned the catch again, and leaned his back against it, and slid down it, slowly, until he was sitting on the floor, and put his face in his hands, and laughed until he couldn't breathe." },
          { s: 'jungwon', f: 'happy', t: "He saw. He definitely saw. He's going to think about that for the rest of his life. I've ruined a second-year." },
          { s: 'solar', f: 'happy', t: "You handed him his umbrella." },
          { s: 'jungwon', f: 'flustered', t: "I'm very well brought up. Both times." }
        ] },
        { t: "Item tabled. Walk me home.", notes: 2, then: [
          { s: 'jungwon', f: 'happy', t: "Tabled. Noted. I'll carry it forward to the next meeting with great seriousness." },
          { n: "He didn't turn the lock. He held the door for her instead, and on the stairs, where nobody was, he took her hand and held it all the way down to the shoe lockers, and let go at the bottom, at the exact moment someone came round the corner, as smoothly as if it had been on the agenda." }
        ] }
      ] },
      { n: "They walked out across the courtyard under one umbrella, his, because he'd brought one and she'd forgotten hers, which was a thing that happened in every world. He walked on the side nearest the well, the way he always did now, between her and it, without making anything of it." },
      { n: "At the gate Mr. Ueda nodded to them from under his umbrella and wished them good evening. The lunch box was gone from the stool. Jungwon wished him good evening back, and asked if he'd eaten, the way you asked anyone here, and the old man smiled and patted his stomach and said he had, very well, he always did, and it was a pity about the weather, and he'd stay a bit longer." }
    ] },
    { after: '7/2', title: '4: the summer item', place: 'Gekkoukan High · Student Council Room', time: 'After School', music: 'tender', scene: [
      { bg: 'gekkoukan-student-council' },
      // BG: gekkoukan-student-council-summer — the student council room on a hot July afternoon, every window propped open, a standing fan turning on the long table, cardboard archive boxes stacked by the door, cicadas in the trees outside.
      { n: "The rainy season had gone out of the council room all at once, the way a fever goes, and left the heat behind it. Somebody had propped every window open with a binder. The standing fan in the corner turned its face slowly from one end of the long table to the other and back, and every time it reached the far end the loose papers there lifted and settled like something breathing, and outside, in the cherry trees along the courtyard, the cicadas had started, all of them at once, a wall of sound so thick you could have leaned on it." },
      { n: "Jungwon had taken his blazer off. That was the first thing. It was over the back of the chair that wasn't the president's, folded once lengthwise so it wouldn't crease, and he was in his shirtsleeves with his tie still knotted all the way up, packing the year's minutes into an archive box, Gekkoukan's minutes, not his, binder by binder, in date order, with a label for the spine of each one written out in his small upright hand." },
      { s: 'jungwon', f: 'happy', t: "You came. Good afternoon. Don't look at me, I'm not wearing a jacket. I feel like I've come to school in pajamas." },
      { s: 'solar', f: 'neutral', t: "It's thirty-four degrees." },
      { s: 'jungwon', f: 'neutral', t: "It was thirty-four degrees last July at home too, and I wore it. Both homes. I've worn a jacket through every summer I've ever had. I don't know what my arms are for." },
      { choose: [
        { t: "(Take the next binder off the pile and hand it to him.)", notes: 3, then: [
          { n: "She took the next binder off the pile and handed it to him, and he took it without looking and slid it into the box beside the last one, spine out, and held his hand out again, and she gave him the next, and they did eleven like that, the fan going back and forth over them, before either of them said anything, which was the most peaceful she'd felt in a week." }
        ] },
        { t: "Your arms look fine.", notes: 3, then: [
          { s: 'jungwon', f: 'flustered', t: "...Thank you. I'll pass that on to them." },
          { n: "He went back to the labels with his ears gone pink, and wrote the next one so carefully that she could tell he was thinking about something else entirely." }
        ] },
        { t: "These aren't even your minutes.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "No. The new president asked me to. He said I'd know the system." },
          { s: 'jungwon', f: 'neutral', t: "There isn't a system. There's a cupboard. I'm inventing the system as I go. He's very grateful for it." }
        ] }
      ] },
      { n: "The form was gone. She looked for it without meaning to, the way you look for a scar on someone you know, and it wasn't on the table, and it wasn't under the diary. The end of June had come and gone. The first-term records had closed on Wednesday at five." },
      { ifChoice: { 'asks.jungwon': 'yes' }, then: [
        { s: 'jungwon', f: 'happy', t: "It went through, if you're wondering. *Kirijo Guesthouse, Room 4, Iwatodai.* One line. They stamped it in front of me. The lady at the office said *thank you very much for your cooperation*, and I said *thank you for yours*, and we both bowed, and that was the end of it." },
        { s: 'jungwon', f: 'happy', t: "I'm in the records. One boy, one room. It's the most official I've ever been about anything." },
        { n: "He said it lightly. He was lighter; it was all over him, in the shirtsleeves, in the way he'd left one window propped with the president's own binder, in the fact that the black diary was lying at the far end of the table where he couldn't reach it without getting up. She'd never once, in either life, seen it out of arm's length." },
        { s: 'jungwon', f: 'neutral', t: "I haven't written in it since. Did you notice? Not a line. I keep meaning to. I pick it up and I can't think what goes in it. Everything's just... happening once. It doesn't need writing down twice." },
        { n: "He laughed, and picked up the next binder, and then stopped with it in his hands, halfway to the box, and looked at the spine as if it had asked him something." },
        { s: 'jungwon', f: 'neutral', t: "...What day is it, at home? The council one. Do you know?" },
        { s: 'solar', f: 'neutral', t: "Here or there?" },
        { s: 'jungwon', f: 'neutral', t: "There. I used to know. I used to know without counting, the way you know which foot you're standing on. I had a sort of clock. I don't have it anymore. I noticed on Monday. It didn't hurt. That's the part I keep coming back to. It just wasn't there, like a tooth that came out in the night." },
        { s: 'jungwon', f: 'happy', t: "Anyway. It's very restful. I'm told." }
      ], else: [
        { ifChoice: { 'asks.jungwon': 'no' }, then: [
          { s: 'jungwon', f: 'neutral', t: "They sent it back twice. Both addresses. The second time somebody had drawn a little sad face in the margin next to the red line, very small, I think by accident." },
          { s: 'jungwon', f: 'neutral', t: "In the end Mitsuru-sunbae went down herself. I don't know what she said. I'm in the records under both, on two lines, with a note that says *exceptional circumstances*. I've been an exceptional circumstance before. It's a lot of paperwork for one boy. For two." },
          { n: "He didn't look at her when he said it. He slid the binder in, spine out, and wrote the next label, and the black diary was open at his elbow, close, the way it always was, the pages since June filled to the margins in both scripts, Korean on the left page and Korean on the right, the two hands of the same boy, one a little rounder and one a little sharper, and she knew which life was which without having to read a word." },
          { s: 'jungwon', f: 'serious', t: "You were right. I know you were. I'm both. I wanted one afternoon off, and you didn't give it to me, and I've been angry about it for three weeks, very politely." },
          { s: 'jungwon', f: 'neutral', t: "...I'm nearly done being angry. I'll let you know when the motion's carried." }
        ], else: [
          { s: 'jungwon', f: 'neutral', t: "It went through. Sealed. The lady at the office opened the envelope with a letter knife in front of me and read the line, and looked at me over her glasses, and stamped it, and said *thank you, Yang-kun*, and that was all." },
          { s: 'jungwon', f: 'neutral', t: "You're not going to ask what I wrote." },
          { s: 'solar', f: 'neutral', t: "No." },
          { s: 'jungwon', f: 'happy', t: "...Good. I like that you're not going to ask. I like it more than I thought I would. I keep waiting for you to ask so I can not tell you, and you don't, and then it's just mine, and it sits there, and it's very heavy, and it's mine." },
          { n: "The diary was open at his elbow. He'd written in it every day since June; she could see that much from where she stood, both scripts, the round one and the sharp one, sometimes on the same line. He saw her see it, and didn't close it." }
        ] }
      ] },
      { n: "Out of the window, across the courtyard, in the white heat, Mr. Ueda was at the gate. He'd stopped bothering with the umbrella. He sat now, on the folding stool he never used to sit on, in his gray security jacket with the sleeves pushed up, ten meters from the well, not looking at it, with a lunch box open on his knees." },
      { n: "He looked well. That was what struck her. In April he'd been a thin, gray, uncomfortable man who stood at a gate. Now there was color in his face, and he'd filled out a little under the jacket, and he was eating slowly, with pleasure, the way you eat something somebody made for you, and the cloth the box had come in lay folded on the paving beside the stool, white, printed all over with cranes." },
      { s: 'jungwon', f: 'neutral', t: "I still take him tea. He doesn't need it now. He's got a flask of something from her. Barley. Very good, he says. He made me try some." },
      { s: 'jungwon', f: 'neutral', t: "He gave me this on Tuesday. He said she'd put in two because she knew I'd be at the window." },
      { n: "He opened the drawer at his end of the table, the one where the old president had kept the stapler and the good scissors, and took out a handkerchief, folded into a square, and opened it on the wood. A rice cake. White, round, a little flattened on one side where it had been packed against another. Dusted with something fine and pale that had come off on the cotton in a soft gray ghost of itself." },
      { s: 'jungwon', f: 'serious', t: "I didn't eat it. I couldn't tell you why. Shinjiro-sunbae said something about the flour once, at the dorm, when I was there for dinner, and I wasn't even sure I'd heard him properly, and I've thought about it every time I opened this drawer." },
      { s: 'jungwon', f: 'neutral', t: "I can't throw it away either. Mr. Ueda would see it in the bin. He'd be hurt. He's been so happy." },
      // CG: eqx-handkerchief — a long council-room table in summer light, a white rice cake on an unfolded handkerchief, fine pale powder on the cotton around it; through the open window behind, far off, a man on a folding stool by a stone well, eating from a lunch box.
      { choose: [
        { t: "(Fold the handkerchief over it. Put it in your own bag.)", notes: 3, flag: 'eqx-jw-cake-taken', then: [
          { n: "She folded the corners of the handkerchief over it, one, two, three, four, the way you'd wrap something to post, and put it in the inside pocket of her bag and zipped the pocket shut. It weighed nothing. She could feel exactly where it was anyway, against her hip, for the rest of the afternoon." },
          { s: 'jungwon', f: 'neutral', t: "...What are you going to do with it?" },
          { s: 'solar', f: 'neutral', t: "Something that isn't eating it." },
          { n: "He let out a breath, and nodded, and looked at the empty drawer for a moment longer than an empty drawer deserved." }
        ] },
        { t: "Give it back to him. Tell him you're not hungry.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "I tried. Yesterday. He laughed and said I was too thin and that she'd be offended. Then he ate it himself, so it wouldn't go to waste. He said she makes them every morning. He said the house smells of them all day long." },
          { n: "He folded the handkerchief back over the one on the table and put it back in the drawer, and shut the drawer, carefully, with two fingers, the way you'd shut a door on a sleeping room." }
        ] },
        { t: "(Leave it where it is. Don't touch it.)", notes: 2, then: [
          { n: "She didn't touch it. Neither did he. It sat on the handkerchief between them on the long table with the fan going back and forth over it, and every time the fan reached it a little of the pale dust lifted off and drifted and settled on the wood, fine as smoke, and after a while he folded the cloth over it without looking and put it back in the drawer." }
        ] }
      ] },
      { ifEvent: 'eqx-second-hill', then: [
        { n: "He sat down on the edge of the table, which he never did, and looked at his watch. The one he'd turned face down at the gate on the Doorstep in June, in the red, when it stopped. It was running now. He'd started wearing it with the face on the inside of his wrist, against the pulse, so that to read it he had to turn his hand over, palm up, like a man asking for something." },
        { s: 'jungwon', f: 'neutral', t: "The calendar. On the Second Hill. In the kitchen on the mud. You saw it." },
        { s: 'solar', f: 'neutral', t: "I saw it." },
        { s: 'jungwon', f: 'neutral', t: "The square with the circle round it. Donghyuck saw it. I watched him see it. Neither of us said the number. I don't think either of us could have read it if we'd tried, and I don't think it mattered, because we both knew which one it was." },
        { s: 'jungwon', f: 'serious', t: "I'm not going to say it either. Here. I just wanted to tell somebody that I know which square it was. That I didn't forget it. That's all. That's the whole item." },
        { choose: [
          { t: "I know. I didn't forget it either.", notes: 3, then: [
            { n: "He nodded, once, and turned his wrist over and looked at the watch, and turned it back, and they left the square where it was, circled, on a calendar at the bottom of a well, in a kitchen with nobody in it." }
          ] },
          { t: "(Put your hand on his wrist, over the watch.)", notes: 3, then: [
            { n: "She put her hand on his wrist, over the watch face against his pulse, and felt both of them going under her palm, the tick and the beat, out of step, and he looked down at her hand and didn't move for a long moment, and then put his other hand over hers and held it there, so that neither of them could check the time." }
          ] }
        ] }
      ] },
      { ifEvent: 'eqx-two-lives', then: [
        { s: 'jungwon', f: 'happy', t: "Jay has started asking me what time council finishes, every morning, at breakfast, as if it's any of his business. Then he's at the gate at five with Niki, pretending to wait for somebody else. Sunghoon doesn't pretend. He just waits." },
        { s: 'jungwon', f: 'neutral', t: "I don't know who asked them to. Nobody, I think. That's the worst kind of kindness. You can't send it back to the office." }
      ] },
      { ifEvent: 'eqx-last-grain', then: [
        { s: 'jungwon', f: 'sad', t: "Mr. Ueda went to the wake. For Suemitsu-sunbae. He sat in the second row. He said the lady who makes his lunches was there too, at the back, crying into her glove, and she gave everyone a little parcel to take home." },
        { s: 'jungwon', f: 'serious', t: "He said it was the saddest thing he'd ever seen, a boy that age. Then he said he had to get back. She'd kept his supper warm." }
      ] },
      { n: "The last binder went into the box. He put the lid on, and wrote the year on it, and the word *archive* in Japanese and, underneath, for no reason anybody would ever find out, in Korean, and then pushed it to the end of the table with the others and stood looking at the empty wood where they'd been." },
      { s: 'jungwon', f: 'neutral', t: "There's an item I haven't been able to put on any agenda. I'd like to raise it with you, if the floor permits." },
      { s: 'solar', f: 'neutral', t: "The floor permits." },
      { s: 'jungwon', f: 'flustered', t: "The summer." },
      { n: "He said it the way somebody else would have said *the budget deficit*, and then sat down on the edge of the table again and put his hands on his knees and looked at them." },
      { s: 'jungwon', f: 'neutral', t: "At home, both homes, summer is arranged. One of them, there's cram school in the mornings and council in the afternoons and my mother has a calendar on the fridge with every week colored in. The other one, there's the house, and there's always somebody coming up the steps, and you know where you're supposed to stand when they come." },
      { s: 'jungwon', f: 'neutral', t: "Here there's six weeks and nobody's colored any of it in. Mitsuru-sunbae said *enjoy the break*. I asked her what that meant. She looked at me as if I were the only person in the building who'd ever asked her a question she couldn't answer, and I think she was a little bit grateful." },
      { s: 'jungwon', f: 'serious', t: "I don't know what to do with a summer nobody arranged. I'd like to do it with you. That's the item. I've been trying to word it better since Monday. That was the best draft." },
      { choose: [
        { t: "Then we don't arrange it. We just see what happens.", notes: 3, flag: 'eqx-jw-summer-open', then: [
          { s: 'jungwon', f: 'surprised', t: "...See what happens." },
          { s: 'solar', f: 'neutral', t: "People do it all the time." },
          { s: 'jungwon', f: 'happy', t: "I've heard. I've never met one. I'll try. I'll be very bad at it. I'll probably make a list of things I'm not going to plan." }
        ] },
        { t: "Walk me home every day. That's the whole plan.", notes: 3, flag: 'eqx-jw-summer-walk', then: [
          { s: 'jungwon', f: 'happy', t: "Every day. The long way or the short way?" },
          { s: 'solar', f: 'neutral', t: "Whichever one you'd pick." },
          { s: 'jungwon', f: 'neutral', t: "The long way. Past the shrine. Not the river." },
          { n: "He said *not the river* the way you'd mention a step that was loose, and she heard it, and didn't ask, because she didn't take the river either anymore, not since the spring, and neither of them had ever said so." }
        ] },
        { t: "Color it in. All of it. I'll be in every square.", notes: 2, then: [
          { s: 'jungwon', f: 'flustered', t: "...You can't say things like that to a person in a council room. There are standards." },
          { s: 'jungwon', f: 'happy', t: "I'll get a calendar. I'll buy the markers today. You're going to regret this enormously." }
        ] }
      ] },
      { n: "The chime went for the end of club hours, the long four-note one, and he didn't stand. That was the second thing, after the jacket. He always stood when it was time. He sat on the edge of the long table in his shirtsleeves with the fan turning its face toward him and away, and looked at her standing in front of him, and didn't stand." },
      { s: 'jungwon', f: 'neutral', t: "...Come here. Please. It's not on the agenda. I've stopped keeping one for the afternoon." },
      { choose: [
        { t: "(Step in between his knees. Undo his tie.)", notes: 3, flag: 'eqx-jw-summer-kiss', then: [
          { n: "She stepped in close, between his knees, close enough that the edge of the table was against her hips, and reached up and took hold of the knot of his tie, the knot he'd done all the way up to the collar in thirty-four degrees because he was who he was, and loosened it, slowly, and pulled it free, and he watched her face the whole time she did it and didn't breathe." },
          { n: "Then he did. He took her face in both hands and kissed her, carefully, the way he always started, and then not carefully at all, and she had both hands in the open collar of his shirt and his were in her hair, and the fan came round and blew the loose papers off the far end of the table onto the floor, and neither of them looked." },
          { n: "The heat was in everything. In his skin under her palms, in the wood under her hands when she put them back on the table to keep her balance, in the breath he let out against her mouth when she did. The cicadas outside went on and on, one solid unbroken note, so that it felt as if the whole school had been sealed in a jar of sound with the two of them inside it and nobody else anywhere." },
          { n: "When they stopped, he didn't let go. He stayed with his forehead against hers and his eyes closed, his tie in her fist, and laughed, very softly, the laugh he only did when nobody could see it." },
          { s: 'jungwon', f: 'flustered', t: "...I'm not putting that in the minutes. I want that on the record. I'm keeping that one off the record." },
          { s: 'solar', f: 'happy', t: "Which record?" },
          { s: 'jungwon', f: 'happy', t: "Every one I've got." }
        ] },
        { t: "(Sit on the table beside him. Shoulder to shoulder.)", notes: 3, then: [
          { n: "She hopped up onto the table beside him, which she'd never done in this room either, and sat with her shoulder against his and her feet swinging, and they sat there in the heat with the fan going over them and the cicadas outside and the empty courtyard going gold, and didn't say anything, and it was enough, and he seemed surprised that it was enough." },
          { s: 'jungwon', f: 'neutral', t: "...This is nice. Is this what people do? Just sit?" },
          { s: 'solar', f: 'neutral', t: "Mostly." },
          { s: 'jungwon', f: 'happy', t: "I'm going to be so bad at the summer." }
        ] }
      ] },
      { n: "They went down at half past five. The corridor was empty and hot and smelled of floor wax; somewhere a radio was playing in the staff room, a baseball game, the crowd going up and down like surf. At the shoe lockers he put his blazer on again, out of habit, and then stood there with it on and looked at himself in the glass of the trophy case and took it off again, and carried it over his arm, and looked so pleased with himself about it that she nearly laughed." },
      { n: "He walked on the side nearest the well across the courtyard. He always did now. The plank lid lay on the ring of dark stone, the sawhorse in front of it, the sign, and the heat came up off the paving all round it in a shimmer, except over the well itself, where the air was perfectly still and clear, as if it were colder there, as if something under the boards were breathing out." },
      { n: "Mr. Ueda was folding up his stool. He bowed to them, smiling, and Jungwon bowed back, and asked him if he'd eaten, and the old man laughed and patted his stomach." },
      { n: "*Every day*, he said. *She's asked me to keep an eye on the place all through the holidays. School empty, nobody about. Somebody ought to watch, she says. I said I'd stay on.* He put the cloth with the cranes on it into his jacket pocket, carefully, over his heart, and wished them a good summer." },
      { n: "At the gate Jungwon stopped and took out the diary. He held it a moment without opening it. Then he opened it, and wrote the time, and under it, after a second, in the smaller hand, *he said he'd stay on*, and closed it, and they walked the long way home, past the shrine, not the river." }
    ] },
    { after: '8/18', title: '5: two lists', place: 'Kirijo Guesthouse · Room 4', time: 'Daytime', music: 'tender', scene: [
      { bg: 'kirijo-guesthouse-day' },
      { n: "The guesthouse in August was a house of open doors. Eleven rooms on two floors, and in the heat everyone had given up on privacy and propped their doors with whatever was nearest, a shoe, a bag of rice, a dictionary, so that walking down the upstairs hall was like walking through a row of other people's afternoons: Jihoon's music, low, through a door left a hand's width open; Jaemin asleep face down on his bed with a fan on him; the trio's room, two doors down, empty, three pairs of sandals gone from the mat." },
      { n: "Room 4's door was shut. Of course it was. A paper sign hung on the handle on a loop of string, in Japanese and Korean, in the small upright hand: *Studying. Knock. (Not twice.)*" },
      { n: "She knocked three times." },
      { s: 'jungwon', f: 'happy', t: "...Three. Good. Come in. Mind the floor." },
      { n: "The floor was paper. Not all of it. Two long strips of it, laid out side by side from the window to the door like two runners in a hall, sheets of the cheap squared exam paper you could buy at any konbini taped end to end, and both strips were covered in writing. Lists. Numbered. One strip in the round hand. One in the sharp one." },
      { n: "He was sitting cross-legged between them in a T-shirt and his old Hanlim gym shorts, gone soft with washing, his hair damp at the nape, a pen in his teeth and another behind his ear, and he looked up at her with the expression of a man who knew perfectly well how this looked and had decided, some hours ago, that he didn't care." },
      { s: 'jungwon', f: 'neutral', t: "Don't step on Hanlim. It's the one on the left." },
      { choose: [
        { t: "(Step carefully over both. Sit down between them with him.)", notes: 3, then: [
          { n: "She stepped over the left one, and then the right one, very carefully, the way you'd step over a sleeping dog, and sat down between them, facing him, knee to knee, and he took the pen out of his teeth and looked at her as if she'd done something brave." }
        ] },
        { t: "What is all this?", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "Inventory." },
          { n: "He said it as if that explained it. Then, seeing it didn't, he put the pen down and spread his hands over the two strips of paper like a man presenting the year's accounts." }
        ] },
        { t: "You said studying.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "I am studying. I'm the subject." }
        ] }
      ] },
      { s: 'jungwon', f: 'neutral', t: "Since Incheon I've been doing a test. Every night. Before I sleep. I write down everything I know about home. One list for each. What's on the walls. Who sits where. How many steps from the gate to the door. The name of every plant on my mother's balcony. Which drawer the spoons are in. Which floorboard." },
      { s: 'jungwon', f: 'neutral', t: "Then in the morning I read them back and check if I still know them." },
      { n: "He picked up the end of the right-hand strip, the sharp hand, and turned it so she could see. She could read it. That was the thing. She could read all of it, the house on the hill in his writing, the gate, the camellias, the pond, the long table, the order people came down the stairs in the morning, and she knew every line was right, because she'd been there." },
      { ifEvent: 'eqx-incheon', then: [
        { s: 'jungwon', f: 'sad', t: "In the gondola I said I didn't feel terrible. On the hill where the house wasn't. Do you remember? I said that was the problem." },
        { s: 'jungwon', f: 'neutral', t: "I came back and I thought, if I don't feel terrible about losing it, maybe it's because I'm losing it. Maybe that's what it feels like. Not like a wound. Like a room you stop going into." }
      ] },
      { ifChoice: { 'asks.jungwon': 'yes' }, then: [
        { n: "The left-hand strip, the round hand, Hanlim, the flat with the plants, was shorter. Much shorter. It stopped halfway down the room. And near the bottom of it, where it stopped, there was a line he'd written and crossed out, and written again and crossed out, three times, and then left, with a question mark after it, alone." },
        { s: 'jungwon', f: 'serious', t: "The plant by the balcony door. The big one. My mother waters it on Sundays with the water from washing the rice. I've walked past it every day of my life." },
        { s: 'jungwon', f: 'serious', t: "I don't know what it is. I don't know what it's called. I don't know if it has flowers. I wrote the form, and I was one boy, and I was so happy, Solar, I was so happy for a month. And now there's a plant in my mother's flat with no name." },
        { n: "He said it evenly. He said it in the minutes voice. His hand on the paper, though, flat on the crossed-out line, was pressing down so hard the tips of his fingers had gone white." }
      ], else: [
        { ifChoice: { 'asks.jungwon': 'no' }, then: [
          { n: "Both strips ran the length of the room, right to the door, and then turned at the door and went on up the wall a little way, taped, because he'd run out of floor. Nothing crossed out. Nothing missing. Every line in both." },
          { s: 'jungwon', f: 'neutral', t: "All there. Every night. I haven't lost a thing. I check, and it's all there, both of them, every spoon." },
          { s: 'jungwon', f: 'sad', t: "...I'm so tired. I hadn't said that to anybody. Carrying both, here, where nobody needs me to, where I could put one down any time I wanted. It's like holding two full buckets on a street where everyone else has set theirs on the ground." },
          { s: 'jungwon', f: 'neutral', t: "I'm not putting them down. You were right. I just wanted you to know they're heavy." }
        ], else: [
          { n: "Both strips ran the length of the room. The right one, the sharp hand, the house, was whole. The left one, Hanlim, had one gap in it, halfway down, where a line had been written and rubbed out and written again so many times the paper had gone thin; and the line he'd finally written there was in a third hand, slower than either, careful, the hand of somebody copying out a word in a language they were still learning." },
          { s: 'jungwon', f: 'neutral', t: "The plant by the balcony door. In the flat. I lost the name of it for a night. Last Tuesday. I lay here and couldn't get it back, and I was so frightened I didn't sleep." },
          { s: 'jungwon', f: 'neutral', t: "Then at five in the morning I got it. I didn't remember it. I went and got it. Like going down into a cellar for something. It's mine, I decided. I'm keeping it. It's on the list now in the hand I had to use to get it back." },
          { s: 'jungwon', f: 'serious', t: "Nobody else is going to keep it for me. That's what you meant, in June. I didn't like it. I'm starting to understand it." }
        ] }
      ] },
      { choose: [
        { t: "Test me. I know both of them too.", notes: 3, flag: 'eqx-jw-tested', then: [
          { s: 'jungwon', f: 'surprised', t: "...You'd do that?" },
          { s: 'solar', f: 'neutral', t: "Ask me anything." },
          { n: "He asked her. He asked her how many steps from the gate to the door of the house on the hill, and she said nineteen, and he wrote a little tick beside his own *19*. He asked her what Jay always ordered at the café across from Hanlim's back gate, and she said the thing with too much whipped cream that he pretended was for Niki, and he laughed out loud, the first real one of the afternoon." },
          { n: "He asked her which stair creaked. She told him. He asked her where his mother kept the good scissors, in the flat, and she didn't know, she'd never been in that drawer, and he looked at her for a second as if she'd let him down, and then, slowly, as if he'd found something, he wrote it on the list himself: *the drawer under the rice cooker, at the back, in the box from the cake shop.*" },
          { s: 'jungwon', f: 'happy', t: "...I knew that. I knew it. You not knowing it made me know it." }
        ] },
        { t: "(Pick up a pen. Write a third list. Here.)", notes: 3, flag: 'eqx-jw-third-list', then: [
          { n: "She took the pen from behind his ear and tore a fresh sheet off the pad by his knee and wrote at the top of it, in Japanese, *here*, and under it, *1. Room 4. The sign on the door says don't knock twice.*" },
          { n: "He watched her. He didn't say anything. He took the pen out of her hand, after a while, and wrote *2.* and under it, in the round hand and then, catching himself, in the sharp one, and then giving up and writing it in Japanese, *the egg sandwich at the konbini by the station is the best one*, and then *3. she knocks three times*." },
          { s: 'jungwon', f: 'neutral', t: "...That's not the same thing. A third list isn't the same thing as keeping the other two." },
          { s: 'solar', f: 'neutral', t: "I know. It's just so you've got somewhere to put this." }
        ] },
        { t: "You don't have to test yourself every night.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "No. I don't have to. That's exactly the problem with this whole town. Nobody here has to do anything." },
          { s: 'jungwon', f: 'serious', t: "I'm going to keep doing it. If I stop, I won't notice what goes." }
        ] }
      ] },
      { n: "Jihoon was in the doorway. Nobody had heard him come down the hall; nobody ever did. He had his hood down for once, in the heat, and two ice lollies in a konbini bag, the cheap soda kind that went white in the middle, and he looked at the two strips of paper on the floor and at the two of them sitting between them, and his face did nothing at all, which on Jihoon was a great deal." },
      { s: 'jihoon', f: 'neutral', t: "...Door was open. It's never open." },
      { s: 'jungwon', f: 'neutral', t: "It was shut. She came in. It's been open since." },
      { n: "Jihoon took one lolly out of the bag and held it out across Hanlim, the left-hand strip, at arm's length, to Jungwon, who took it, and said thank you, very formally, in the voice he used for the vice principal. Then Jihoon looked at the second one in the bag for a moment, and held that out too, to Solar, without coming any further in." },
      { s: 'jihoon', f: 'neutral', t: "Was mine. It's too hot to walk back down for another. You have it." },
      { choose: [
        { t: "(Take it. Say thank you.)", notes: 3, then: [
          { n: "She took it. Their fingers didn't touch; he made sure of that, the way he'd made sure of it in a hundred hallways in one of her lives, a careful centimeter of air. *Thanks*, she said, and he nodded at the floor, at the lists, at the one in the round hand that ran down past his feet, and read a line of it upside down, she saw him do it, and his mouth went a little crooked." },
          { s: 'jihoon', f: 'neutral', t: "...You forgot the vending machine on the third floor. By the music room. The one that eats coins. Everybody at Hanlim knows that one." },
          { n: "Jungwon looked at him. Then he picked up his pen and wrote it on the list, *the machine by the music room eats coins*, and said thank you again, less formally. Jihoon was already gone down the hall. His door shut, softly, for once." }
        ] },
        { t: "Keep it. It's yours.", notes: 2, then: [
          { s: 'jihoon', f: 'neutral', t: "...Yeah. Okay. Mine." },
          { n: "He put it back in the bag and stood a second longer in the doorway, looking at the two of them on the floor between the lists, and then said, to Jungwon, not to her, *your door was open*, as if it were the most surprising thing he'd seen all summer, and went away down the hall, and left it open behind him." }
        ] }
      ] },
      { ifEvent: 'eqx-table-op', then: [
        { n: "Somebody knocked. Twice. They both went still, the way everyone in this town went still now at two knocks, a reflex, the whole body listening; and then a voice through the door, cheerful, in Korean, loud: *Jungwon-ah! Are you in there? You've got that sign on!*" },
        { n: "Jungwon closed his eyes." },
        { s: 'jungwon', f: 'flustered', t: "...Your dad. The one with the TV remote. He comes by the guesthouse every afternoon to ask if I've eaten. He calls me Jungwon-ah in front of Jihoon. He knocks twice because he doesn't know." },
        { ifEvent: 'eqx-three-dads', then: [
          { s: 'jungwon', f: 'neutral', t: "Since the konbini he and Taejoon-abeonim have an arrangement. About me. I wasn't consulted. Mr. Kim says I'm *ours* at breakfast and Taejoon-abeonim says *mine* at dinner and they shake hands on the bench about it like two men dividing a fishing spot." }
        ] },
        { n: "Through the door Mr. Kim said something about watermelon, and that there was some downstairs, and that Jungwon should come down and eat some before Jihoon finished it, and that he looked thin, and that he'd looked thin at breakfast, and went away down the hall still talking, to nobody, happily, the way a man talks when he's been given a whole new house of young people to feed." },
        { s: 'jungwon', f: 'neutral', t: "...He doesn't know you're in here." },
        { s: 'solar', f: 'neutral', t: "No." },
        { s: 'jungwon', f: 'flustered', t: "We're going to keep it that way. For the good of the treaty." }
      ] },
      { n: "By six the sun had come round to the window and the room was a kiln. He opened the door onto the roof, a fire door at the end of the hall that wasn't supposed to be used, propped with the guesthouse's own fire extinguisher, and they went up and sat on the warm concrete in the shade of the water tank with their backs against it and their legs out in the sun, and the whole town was spread out below them, gold and hazy, the river, the bridge, the station, the bay." },
      // BG: kirijo-guesthouse-roof-summer — the flat concrete roof of a small two-storey guesthouse on a late-August evening, a water tank throwing a long shadow, a propped fire door, a low parapet, the town and a river below in gold haze.
      { place: 'Kirijo Guesthouse · Roof', time: 'Evening', bg: 'kirijo-guesthouse-roof-night', soft: true },
      { n: "From up here you could see the river street. The boarding house, small at this distance, the persimmon tree over its wall, the garden; and from the garden, even at this distance, a thin line of steam going straight up into the windless evening, as if somebody had a pot on the boil out of doors. You could smell it if the air moved. It didn't. You could almost smell it anyway. Something sweet." },
      { s: 'jungwon', f: 'neutral', t: "Mr. Ueda isn't at the school anymore. Did you know? There's nobody to watch at the gate in the holidays, so the Group stood him down." },
      { s: 'jungwon', f: 'neutral', t: "He goes to her house instead. Every afternoon at four. He helps in the garden. He was digging round the persimmon on Monday when I went past, in his vest, and he waved at me with the trowel. He said he'd never been so happy in his life. He said she's asked him to stay to supper so many times now that she's stopped asking. He just stays." },
      { n: "He didn't say anything after that, and she didn't either. They watched the line of steam go up from the garden on the river street until the light went off it and it was just a gray thread against a gray sky, and then the first lamps came on along the river, and then the ones on the bridge." },
      { s: 'jungwon', f: 'neutral', t: "...It's very quiet in my head. Still. Even with both lists. That's what I can't stop noticing. At home it's never quiet in there. At home I'm always listening for which one of me the room wants." },
      { s: 'jungwon', f: 'serious', t: "And here I've got all this quiet, and I've started to wonder what it's for. Who it's for. Whether somebody's making room." },
      { choose: [
        { t: "(Take his hand. Don't answer.)", notes: 3, then: [
          { n: "She took his hand on the warm concrete between them and didn't answer, because there wasn't one, and he turned his hand over under hers so they were palm to palm and held on, and they sat with the town going dark under them, and somewhere on the floor below someone, Jay, laughed at something, and the sound came up through the roof like warmth through a floor." }
        ] },
        { t: "Then make some noise. Here. With me.", notes: 3, then: [
          { s: 'jungwon', f: 'flustered', t: "...What kind of noise?" },
          { s: 'solar', f: 'neutral', t: "Any kind. Sing something." },
          { s: 'jungwon', f: 'flustered', t: "Absolutely not. There are standards. There are people on the floor below." },
          { n: "He sang anyway, after a while, very quietly, a few lines of something she knew from a karaoke booth across the road from Hanlim, badly, off the beat, and then a few lines of something she knew from the house on the hill, the radio in the kitchen at four in the morning, and his voice went from one to the other without stopping, and nobody downstairs said anything, and she didn't either, and the quiet in his head, she thought, had at least a song in it now." }
        ] },
        { t: "Nobody's making room in you, Jungwon. You're not empty.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "I know. I know I'm not." },
          { s: 'jungwon', f: 'sad', t: "I just keep feeling the edges of where I'm not, lately. Like a tongue on a gap." }
        ] }
      ] },
      { n: "When it was properly dark he stood, and held his hand down to her, and pulled her up off the concrete, and didn't let go of the hand. He looked at the fire door. He looked back at her. In the light from the stairwell his face was doing the still thing, the careful one, the one he did before a vote." },
      { s: 'jungwon', f: 'flustered', t: "...The guesthouse has a curfew. Eleven. Mr. Tanabe used to enforce it by doing the crossword in the lobby very loudly. The new man goes to bed at ten." },
      { s: 'jungwon', f: 'neutral', t: "I'm not proposing anything. I'm just reading the regulations into the record." },
      { choose: [
        { t: "(Go back down the hall with him. Into Room 4. Shut the door.)", notes: 3, flag: 'eqx-jw-room-four', then: [
          { n: "They went back down the hall with the doors all open on either side and other people's lamps on and other people's radios going, past Jihoon's door, a hand's width open, the music on and the room dark, and she didn't look in, and Jungwon didn't either, and both of them knew exactly which door it was." },
          { n: "Room 4. He shut the door behind them and stood with his back to it, the way he had in the council room in June, and then, unlike in June, there was nobody to come back for an umbrella, and he seemed to understand that all at once, and laughed under his breath, and stepped over Hanlim and over the house on the hill to get to her." },
          { n: "The window was open. The lists on the floor lifted at the corners in the night air. He kissed her standing in the middle of the room between the two strips of paper, and then not standing, on the narrow guesthouse bed with its one dent in the pillow, the springs complaining, her hands under his T-shirt on the long warm line of his back and his mouth at her throat saying her name, the Korean way and then the Japanese way and then the way nobody else said it, in either of his lives, which was just a breath." },
          { n: "The light went off. It might have been either of them. Down the hall Jihoon's music stopped, and after a moment, very quietly, it started again, a little louder." },
          { place: 'Kirijo Guesthouse · Room 4', time: 'Early Morning', bg: 'kirijo-guesthouse-night', soft: true },
          { n: "She woke at five with the window gray and the birds starting and his arm across her waist, heavy, asleep, his face in her shoulder; and she lay and looked at the ceiling of a room in a guesthouse in a town that didn't exist, with a boy who was two boys, and the lists on the floor stirring in the early air, and she didn't think about anything at all for a long time, which was rare enough to notice." },
          { n: "She got out without waking him. She stepped over both lists in the dark and opened the door and Jay was in the hall." },
          { n: "He was in a towel with a toothbrush in his mouth, coming back from the bathroom at the end, and he stopped, and looked at her, and at the sign on the door behind her, *Studying. Knock. (Not twice.)*, and took the toothbrush out." },
          { s: 'jay', f: 'neutral', t: "...Morning." },
          { s: 'solar', f: 'neutral', t: "Morning." },
          { n: "He put the toothbrush back in and walked past her to his own door and went in and shut it, without a word, without a look, with the perfect manners of someone from a house on a hill where you learned very young not to see who came down which stairs. Then, through the door, very faintly, she heard him start laughing, and Niki say *what*, and Jay say *nothing, go back to sleep, nothing, I saw nothing*." }
        ] },
        { t: "Walk me home. Before curfew.", notes: 2, then: [
          { s: 'jungwon', f: 'happy', t: "Before curfew. Noted. Carried." },
          { n: "He walked her home the long way, past the shrine, not the river, and at the dorm gate he kissed her once, quickly, under the light, and then stood there with his hands in his pockets after she'd gone in, she knew, because she looked out of the lounge window, and he was still at the gate, looking up at the lit windows of the dorm, counting them, she thought, the way he counted everything, until hers came on." }
        ] }
      ] },
      { ifFlag: 'eqx-jw-room-four', then: [
        { n: "At seven her phone went." },
        { phone: [
          { from: 'jungwon', t: "Item one: you left." },
          { from: 'jungwon', t: "Item two: Jay has been smiling at his rice for twenty minutes. Niki doesn't know why. I'm not going to tell him." },
          { from: 'jungwon', t: "Item three: I did the lists before you woke. Nothing new missing. I checked twice." }
        ], contact: 'jungwon' }
      ], else: [
        { n: "At eleven her phone went." },
        { phone: [
          { from: 'jungwon', t: "Home. Lists done." },
          { from: 'jungwon', t: "Everything still there. I checked twice." },
          { from: 'jungwon', t: "Thank you for the summer so far. It's going very badly. I'm enjoying it." }
        ], contact: 'jungwon' }
      ] }
    ] },
    { after: '10/4', title: '6: room four', place: 'Gekkoukan High · Student Council Room', time: 'After School', music: 'tender', scene: [
      { bg: 'gekkoukan-student-council' },
      { n: "October had come in cold and sideways. The wind off the bay had found the council room's one loose window and got into it, so that every few minutes the pane gave a small dry knock in its frame, and every time it did, Jungwon's pen stopped, and waited, and went on. Outside the cherry trees along the courtyard had started to turn, red at the edges first, as if something had been at them." },
      { n: "The long table was covered in timetables. Not the way the floor of Room 4 had been covered in lists, in two neat runners; this was a flood. Eleven of them, opened out and weighted at the corners with whatever had come to hand, a stapler, the president's mug, a box of chalk, Jungwon's own watch, and over every one of them, in pencil, in his smallest hand, Korean, the translation, line by line, station by station, between the printed lines where there was no room at all." },
      { n: "He'd got his blazer back on. Buttoned. Tie to the collar. He didn't look up when she came in, which he had never once not done, and then he did, too late, and arranged his face, and she watched him do it and wished she hadn't." },
      { s: 'jungwon', f: 'neutral', t: "You came. Good afternoon. I'm on number eight. The monorail. It's very simple. I'm making it difficult." },
      { choose: [
        { t: "(Sit down next to him. Take a pencil.)", notes: 3, then: [
          { n: "She sat down beside him and took a pencil out of the president's mug and pulled the ninth timetable toward her, the river bus, and found the first station and started, under it, in her own Korean, which was a different Korean from his, a house-on-the-hill Korean, and he looked over at what she'd written and corrected one word without a sound and slid the pencil back to her." }
        ] },
        { t: "How many has he done? The stations.", notes: 2, then: [
          { ifBefore: '10/22', then: [
            { s: 'jungwon', f: 'neutral', t: "Nineteen. He goes every morning. He stands under the clock at the exit and waits for one train each way, and then he comes back and tells her about it." },
            { s: 'jungwon', f: 'neutral', t: "Mrs. Oka, I mean. He tells Mrs. Oka. At supper. She keeps a map for him, on the kitchen wall. She puts a little pin in each one." }
          ], else: [
            { s: 'jungwon', f: 'neutral', t: "He stopped. After the steps. He doesn't go to the stations anymore. He knows where she is now. He'd rather not have known." },
            { s: 'jungwon', f: 'neutral', t: "I keep translating them anyway. I don't know who for. It's something to put in order." }
          ] }
        ] },
        { t: "Jungwon. You haven't slept.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "I've slept. On the train. Twice. Between stations. It counts." }
        ] }
      ] },
      { n: "He hadn't told Mr. Kim. She knew without asking. He'd said on the corner by the post office that he wouldn't, and he hadn't, and every afternoon since he'd sat in the boarding house's front room with his back to the garden, translating, while a man drew circles round clocks." },
      { s: 'jungwon', f: 'serious', t: "I went past the garden this morning. On the way here. I go past it every morning. I don't have to; it's the long way. I go so I'll know." },
      { s: 'jungwon', f: 'neutral', t: "There was nothing on the line. Just the sheets. Mrs. Oka waved." },
      { n: "He said *Mrs. Oka waved* in the minutes voice, the even one, the one that got politer the more it meant, and drew a box round the next station on the monorail, very small, very exact." },
      { n: "Out of the window, at the gate, there was a man in a gray security jacket. Not Mr. Ueda. A younger one, broad, bored, with a phone, standing with his back to the well because he'd been told to stand near it and nobody had told him which way to face." },
      { s: 'jungwon', f: 'neutral', t: "Mr. Ueda's taken a room. At her house. He told me at the start of term, when I took the tea out to the gate and he wasn't there. I found him in her garden in the afternoon raking leaves round the well. He said she'd asked him to stay over one night when it was raining and he'd just... stayed." },
      { s: 'jungwon', f: 'neutral', t: "He's very happy. He's put on four kilos. He wanted me to know he's never been happier. He held my hand when he said it, like a grandfather. His hand was warm." },
      { s: 'jungwon', f: 'sad', t: "I still take the tea out to the gate. At half past four. The new man doesn't drink it. I leave it on the post. I don't know why. I think I'm waiting for somebody to tell me to stop." },
      { choose: [
        { t: "Don't stop.", notes: 3, then: [
          { s: 'jungwon', f: 'neutral', t: "...All right. I won't." },
          { n: "He said it as if she'd granted a motion he'd been afraid to table. Then he looked down at the monorail and didn't write anything for a while." }
        ] },
        { t: "(Put your hand on the back of his neck. Leave it there.)", notes: 3, then: [
          { n: "She put her hand on the back of his neck, under his collar, where the skin was warm and the hair was short, and left it there. He stopped writing. He didn't turn round. He bent his head a little, forward, into her palm, the way you'd lean into a hand on a train when the carriage swung, and stayed like that, and the loose window knocked once in its frame, and he didn't flinch." }
        ] }
      ] },
      { n: "He put the pencil down. Parallel to the line of the timetable, exactly, the way he laid a pen on the minutes when a meeting was over. Then he turned in his chair to face her." },
      { s: 'jungwon', f: 'serious', t: "I want to read something into the record. I've drafted it eleven times. I'm going to read the twelfth, and if it's wrong I'd like you to let me finish it anyway." },
      { s: 'solar', f: 'neutral', t: "I'll let you finish." },
      { s: 'jungwon', f: 'neutral', t: "Since April something has been asking me to be one boy." },
      { n: "He said it plainly, and then sat with it, the way you'd sit with a glass of water you'd just put down too hard, waiting to see if it would crack." },
      { s: 'jungwon', f: 'neutral', t: "Not a person. Not anybody I could point at. The form, with one line. The quiet. Nobody at the guesthouse asking which house I'm from. The feeling of walking back from the station and thinking, I could just be this. Every time I've felt lighter this year, Solar, something was there, very politely, holding the door." },
      { s: 'jungwon', f: 'serious', t: "I thought it was peace. I thought I'd finally been let off. And then I watched a woman whose kitchen I've eaten in, in one of my lives, take sheets off a line with her back open, and I understood that nothing in this town lets anybody off anything. It just asks very nicely. And keeps what you give it." },
      { ifChoice: { 'asks.jungwon': 'yes' }, then: [
        { s: 'jungwon', f: 'sad', t: "I gave it something. In June. I wrote one line, and you said I could, and I've never been so happy as I was walking out of that office. It was the first thing it ever asked me that I said yes to." },
        { s: 'jungwon', f: 'sad', t: "I still don't know the name of my mother's plant. It hasn't come back. I've stopped trying in the night. I think it's on that form. I think I signed it over." },
        { n: "He didn't say *you said I could*. He'd said it already, once, in passing, and he didn't say it again, and he wasn't going to; she could see him not saying it, holding it behind his teeth, the way you'd hold a stone in your mouth to keep from shouting. That was worse." },
        { choose: [
          { t: "I shouldn't have told you yes.", notes: 2, flag: 'eqx-jw-sorry', then: [
            { s: 'jungwon', f: 'neutral', t: "...You told me what I asked you to tell me. That's what I'd have done for you." },
            { s: 'jungwon', f: 'serious', t: "I'm not going to let you have it. The blame. I wrote the line. My hand. I've been very careful all my life about whose hand things are in." }
          ] },
          { t: "(Take his hand. Don't apologize. Hold on.)", notes: 3, then: [
            { n: "She didn't apologize. Apologizing would have made it hers, and he'd have let her take it, and been grateful, and that would have been a yes too, of a kind. She took his hand off the timetable and held it, hard, both of hers round it, and he looked at their hands and let out a breath that shook, once, all the way down." }
          ] }
        ] }
      ], else: [
        { ifChoice: { 'asks.jungwon': 'no' }, then: [
          { s: 'jungwon', f: 'neutral', t: "You said no for me, in June. You made me write both. I was angry for a month." },
          { s: 'jungwon', f: 'serious', t: "It didn't matter to it. That's what I've worked out. It just kept asking. Every quiet morning, every time I walked back from the station. It doesn't need you to say yes. It just needs you to get tired." },
          { s: 'jungwon', f: 'neutral', t: "...I'm very tired. I wanted you to know I've noticed that's the plan." }
        ], else: [
          { s: 'jungwon', f: 'neutral', t: "In June you wouldn't tell me. You gave me the form back and said it was mine. I wrote something you've never asked about." },
          { s: 'jungwon', f: 'serious', t: "I've been afraid since the garden that what I wrote counted. That I gave it something without knowing. I've lain awake going over the line." },
          { s: 'jungwon', f: 'neutral', t: "I don't think I did. I think it's still asking. I can feel it waiting in the quiet like a man outside a door who hasn't been answered yet. It's very patient. So am I. I'm going to find out which of us was raised better." }
        ] }
      ] },
      { s: 'jungwon', f: 'neutral', t: "Chenle told me on Saturday. After the Well. He took me aside on the stairs, very serious, with his headset round his neck." },
      { s: 'jungwon', f: 'neutral', t: "He said there's a door that comes up on his screen down there now that wasn't there before. On the Third Hill. Where Hanlim's corridor runs out and goes into mud. He says it only shows when I'm with the party. He says he checked eleven times." },
      { s: 'jungwon', f: 'serious', t: "Fuuka-sunbae looked at it as closely as she could reach, from the top of the stairs. She said there's a plate on it. Brass. Like the ones on the guesthouse doors. In that heavy hand, pressed in so deep it's nearly through the metal." },
      { s: 'jungwon', f: 'serious', t: "*Room 4.*" },
      // CG: eqx-room-four-door — a dim school corridor in red light running out into dark mud, and at the very end, alone, a plain guesthouse door with a brass number plate pressed deep with the figure 4, a single paper sign hanging on its handle.
      { n: "The window knocked in its frame. Once. The wind. He didn't flinch, and she didn't, and they both heard how close the room came to holding its breath." },
      { s: 'jungwon', f: 'neutral', t: "It's mine. Whatever's behind it. It's the room I asked for. Fuuka-sunbae says the Shadow behind a door like that is what somebody's been asked for. She says if I go in with it, it might be something I can answer myself." },
      { s: 'jungwon', f: 'flustered', t: "...I'd like you to come. That's not on any agenda either. I'm just asking." },
      { choose: [
        { t: "We go down together. Both of you and me.", notes: 3, flag: 'eqx-jw-floor-together', then: [
          { s: 'jungwon', f: 'surprised', t: "...Both of me." },
          { s: 'solar', f: 'neutral', t: "I'm not leaving either of them at the top of the stairs." },
          { n: "His face went still, the other stillness, the one she'd first seen in April when she'd told him two of his was easy; the one that meant something had landed exactly where he kept the things that mattered, and he didn't trust himself to move." },
          { s: 'jungwon', f: 'happy', t: "...That still isn't how arithmetic works." }
        ] },
        { t: "It's your door. I'll be right behind you.", notes: 3, flag: 'eqx-jw-floor-behind', then: [
          { s: 'jungwon', f: 'neutral', t: "Behind me." },
          { s: 'jungwon', f: 'neutral', t: "...Yes. That's right. That's the right place. If you go first I'll let you, and then it'll be you who opened it. I need it to be my hand on the handle." }
        ] },
        { t: "(Pick up his pencil. Write it in the diary for him: Room 4. Together.)", notes: 3, flag: 'eqx-jw-floor-written', then: [
          { n: "She reached past him and opened the black diary at today and picked up his pencil and wrote, in her house-on-the-hill Korean, under the date, *Room 4*, and under that, after a second, the word for *together*, the plain one, the one you'd use for two people walking home." },
          { n: "He looked at it for a long time. Then he took the pencil out of her hand and wrote the same two words under hers, in the round hand. And under that, in the sharp one. Three times, one under the other, like a motion seconded, and thirded." },
          { s: 'jungwon', f: 'neutral', t: "...Carried." }
        ] }
      ] },
      { s: 'jungwon', f: 'neutral', t: "...May I ask you one? An item. Out of order." },
      { s: 'solar', f: 'neutral', t: "Go on." },
      { s: 'jungwon', f: 'serious', t: "What's it been asking you?" },
      { n: "He didn't let her look away. He'd turned in his chair so their knees touched, and he was watching her face the way he'd watched it in April across this same table, as if he were checking a sum; and she understood that he'd been watching it all year, in two lives' worth of patience, and had waited until he'd said his own before he asked." },
      { s: 'jungwon', f: 'neutral', t: "You don't have to say. I'll tell you what I've seen, and you can strike it from the record if it's wrong. You were Hanni's at breakfast and Akihiko-sunbae's at the pier and the girls' at the boarding house and your three fathers' at the konbini, all in one day, all of them correctly. I watched you do it at the long table. You were everybody's. It was the most beautiful thing I've ever seen anybody do and I wanted to take you outside and make you sit down." },
      { s: 'jungwon', f: 'serious', t: "I think it asks you to be exactly who everybody needs. Here. All at once. Because you can be, here. Nobody's in another country." },
      { choose: [
        { t: "...Yes. That's it. Word for word.", notes: 3, then: [
          { s: 'jungwon', f: 'neutral', t: "I know. I'm very good at minutes." },
          { s: 'jungwon', f: 'sad', t: "...We're the same, aren't we. You and me and Donghyuck. It's asking all of us to put somebody down. It's just asking you to put down you." },
          { n: "He took her hand off the timetable and held it in both of his, flat, between his palms, the way you'd hold a bird that had flown into a window, and looked at it, and didn't say anything else for a while." }
        ] },
        { t: "(Don't answer. Look at the timetables.)", notes: 2, then: [
          { n: "She didn't answer. She looked down at the timetables, at the boxes he'd drawn round the clocks, and felt him not push, the whole weight of him not pushing, the way you'd feel somebody hold a door and not walk through it." },
          { s: 'jungwon', f: 'neutral', t: "...Struck from the record. For now. I've written it down somewhere else." }
        ] },
        { t: "And you'd still want me to be who you need?", notes: 3, then: [
          { s: 'jungwon', f: 'neutral', t: "No." },
          { n: "He said it at once, without a beat, in the voice he used to close a vote." },
          { s: 'jungwon', f: 'neutral', t: "I'd want you to be late. And annoyed with me. And tired, and rude about my handwriting, and somewhere I can't see you for a whole afternoon because you wanted to be. I'd want you to be the one who doesn't come when I text *you don't have to come*. I'd want to have to wait." },
          { s: 'jungwon', f: 'flustered', t: "...That's a terrible thing to want. I'm aware. It's the truest thing I've drafted all year." }
        ] }
      ] },
      { flag: 'eqx-floor-jungwon' },
      { n: "The chime went at five. The long four-note one. He didn't move to pack the timetables. He sat looking at them, eleven of them, a whole prefecture of small stations opened out over the table, and then he folded the monorail along its creases, carefully, and put it on top of the others, and then took his hands off them and turned and put his face in her shoulder." },
      { n: "He didn't make a sound. She had never once, in either life, heard him make one. He held on to the back of her blazer with both hands and breathed into her shoulder, slow and careful and counted, in and out, like somebody doing it on purpose, and she put her arms round him in the council room with the wind knocking at the loose pane and held on, and didn't say anything, and didn't count." },
      { ifEvent: 'eqx-1023', then: [
        { n: "After a long time, into her shoulder, so quietly she nearly didn't hear it, he said that Mr. Kim had come back up from the steps on Saturday and hadn't said the word *station* since, not once, and that the timetables on the table were for nobody now. He said it as an item. He said nothing else after it." }
      ] },
      { s: 'jungwon', f: 'neutral', t: "...Say my name. Please. Both ways. I'd like to hear somebody say both." },
      { choose: [
        { t: "(Say it the Hanlim way. Then the house way. Then kiss him.)", notes: 3, flag: 'eqx-jw-both-names', then: [
          { n: "She said it the way she'd said it across a council table at Hanlim with the whole room watching the projector, quick and a little annoyed, the way you say the name of someone who's late. Then she said it the way she'd said it on the stairs of a house on a hill at four in the morning, low, the way you say a name in a house where people are sleeping." },
          { n: "He lifted his head. His eyes were red at the rims and perfectly dry. She kissed him before he could arrange his face, and he let her catch it unarranged, which was the most he'd ever let anyone see, she thought, and kissed her back slowly, holding on to her blazer, as if the room might tilt." },
          { s: 'jungwon', f: 'flustered', t: "...Both. Good. They both heard." }
        ] },
        { t: "(Say it once. Just his name. No house.)", notes: 2, then: [
          { n: "She said it once. Just his name. Not the Hanlim way and not the house way; the way you'd say it if you'd only ever met him here, in a council room in a town that wasn't anywhere, with the wind at the window." },
          { n: "He went very still against her. Then he lifted his head and looked at her, and something went over his face that she couldn't read, gratitude and fear at once, the way you'd look at a door you'd asked for." },
          { s: 'jungwon', f: 'serious', t: "...That one's the one it wants. I know. I liked it anyway. That's the whole problem, isn't it." }
        ] }
      ] },
      { n: "They went down together into the courtyard at half past five. The light was going early; the cherry trees were black against a sky the color of a bruise, red at the edges, and the wind had dropped, and the courtyard was empty but for the new guard at the gate with his phone and a paper cup of tea on the post beside him, untouched, going cold." },
      { n: "Jungwon walked on the side nearest the well. He always did. And at the ring of dark stone he slowed, for the first time, and stopped, and looked at the plank lid; and it had moved again. A few centimeters. The way it had in April. As if something under it had pushed, very gently, to see if anyone was still holding it down." },
      { n: "He didn't put it back. He took out the diary and wrote the time, standing, in the gateway, and under it two words in two hands, and closed it, and put his hand out without looking, palm up, and she put hers in it, and they walked home the long way, past the shrine, not the river." }
    ] },
    { after: '10/27', title: '7: one', place: 'Gekkoukan High · Student Council Room', time: 'After School', music: 'tender', scene: [
      // BG: gekkoukan-student-council-autumn — the student council room on a cold November afternoon, the old radiator under the windows ticking, a box of rolled festival posters by the door, the courtyard's cherry trees bare and black outside the glass.
      { bg: 'gekkoukan-student-council' },
      { n: "The radiator under the council room windows had come on for the first time that week, and it ticked. It ticked the way old iron ticks when it warms, irregular, a knuckle here and a knuckle there along the length of it, so that every so often the room sounded as if somebody were tapping on it from the inside, very politely, to be let out. Outside, the cherry trees along the courtyard had dropped everything in two days of wind and stood black and bare over the paving, and the light that came in through them was thin and white and had no heat in it at all." },
      { n: "Jungwon wasn't writing. That was the first thing, and she'd learned this year to read the first thing the way you'd read the first line of a letter. He was sitting in the chair that wasn't the president's with the black diary open in front of him and the pen capped beside it, laid parallel, and both his hands flat on the table on either side of the book, the way he'd held them in April when he'd thought it might get up." },
      { s: 'jungwon', f: 'neutral', t: "You came. Good afternoon. Shut the door, please. Not because of anything. It's cold." },
      { ifFlag: 'dead.shinjiro', then: [
        { n: "He was still wearing the black tie. Not the suit; the guesthouse had lent them suits for Tuesday, and he'd given his back folded, with a note, because he was who he was. But the tie he'd kept, and he'd worn it every day since under his blazer instead of the school one, knotted to the collar, and nobody at Gekkoukan had said a word about it, because nobody at Gekkoukan said words to him." },
        { s: 'jungwon', f: 'sad', t: "He was the one who told me about the flour. In July, at the dorm, at dinner, without looking up from his rice. I wasn't sure I'd heard him. I never asked him to say it again. I never thanked him for it either. I've been trying to work out how you'd thank somebody for a thing like that." },
        { s: 'jungwon', f: 'serious', t: "The council asked me to write the card again. My handwriting. I sat here for an hour with his name at the top, and in the end I wrote *he fed people*, and nothing else, and the new president read it and cried in the corridor. I don't know if it was the right thing to write. It was the true one." },
        { choose: [
          { t: "He'd have hated a long card.", notes: 2, then: [
            { s: 'jungwon', f: 'neutral', t: "I know. That's why it's three words. I had eleven drafts. They were all too long. He'd have read the first line and put it in the stove." }
          ] },
          { t: "(Reach over. Straighten the knot of his tie.)", notes: 3, then: [
            { n: "She reached over and straightened it. It didn't need straightening; nothing he wore ever did. He let her anyway, his chin lifted a little, his eyes on the window, and when she took her hands away he put his own over the knot for a second, flat, as if to keep it exactly where she'd left it." }
          ] }
        ] }
      ], else: [
        { s: 'jungwon', f: 'neutral', t: "Shinjiro-sunbae made me eat twice at the dorm the Sunday after. He said I looked like a coat somebody had left on a hanger. I said thank you. He said *don't*. I've decided that was the warmest conversation I've had in this country." },
        { n: "He said it lightly, and then didn't go on, and she knew he was thinking about the steps going down, and the shoes on them, and who had come back up on his own feet, and how close it had been, because she was thinking about it too, and had been since, every time she passed the dorm kitchen and heard a lid on a pot." }
      ] },
      { ifFlag: 'dead.aigis', then: [
        { s: 'jungwon', f: 'sad', t: "I went past your classroom on Monday. Her desk's still there. Somebody's put a little vase on it. Nobody sits within two desks of it. They all go round it, like the well." }
      ] },
      { s: 'jungwon', f: 'serious', t: "Something's been written in my diary. I'd like you to look at it before I say anything else, so I know whether I'm the only one who can see it." },
      { n: "He turned the book round on the table and slid it across to her with two fingers, the way you'd slide a document across to somebody who had to sign it." },
      { n: "April. The thirteenth. She knew the page. She'd watched him leave it empty, at this table, in the spring, the date at the top in his small exact hand and nothing under it at all, a whole ruled page kept blank on purpose, the way you'd keep a chair at a table for somebody you weren't sure was coming." },
      { n: "Nothing had been written on it. Something had been pressed into it. A single stroke near the top, under the date, in the heavy hand, dented so deep into the paper that it had nearly gone through, the sides of the groove gone shiny and pale, like the impression on his enrollment form in April. Not a word. Not Korean or Japanese or English. A numeral. *1.*" },
      { n: "She turned the page over without thinking. On the back of it the stroke stood up out of the paper in relief, a long raised ridge, like a scar." },
      { s: 'jungwon', f: 'neutral', t: "The twelfth is clean. I checked. The fourteenth is clean. There's no page missing; I counted the stitching. Nobody's had this book but me. It sleeps under my pillow. I'm aware how that sounds." },
      { s: 'jungwon', f: 'serious', t: "It's a one. On the page I left empty for the day I didn't— for that day." },
      { s: 'jungwon', f: 'neutral', t: "One line. One address. One boy. It's been asking me all year, in sentences, very nicely. This is the first time it's written the answer down for me. Like a teacher who's run out of patience and filled in the exam herself." },
      { n: "The radiator ticked. Three knocks along the iron, quick, and then nothing. Neither of them looked at it. The dent under her eyes was the color of a fingernail, and the longer she looked at it, the more it seemed to have been made by something pressing down very slowly, for a very long time, with the whole of its weight." },
      { choose: [
        { t: "(Tear the page out along the stitching.)", notes: 2, flag: 'eqx-jw-page-torn', then: [
          { n: "She took hold of it at the top and tore it out, slowly, along the stitching, the way you'd take out a splinter, and he flinched once at the sound and then didn't. The page came away clean. The binding didn't even look as if it had lost anything." },
          { n: "She held it out to him. He looked at it for a long time, the April page with the ridge standing up on its back, and then took it and folded it in four and put it inside the back cover of the diary, under the elastic." },
          { s: 'jungwon', f: 'neutral', t: "If I throw it away, it's somewhere else. I'd rather know where it is. Out of the year. Still in the book." }
        ] },
        { t: "(Uncap his pen. Write a 3 beside it.)", notes: 3, flag: 'eqx-jw-page-three', then: [
          { n: "She uncapped his pen and wrote beside the dent, in ordinary blue ink, an ordinary three, the way she'd have written a page number, and then capped the pen and laid it back down parallel to the edge of the book, because that was where it lived." },
          { n: "He looked at it. The one, pressed so hard it had nearly gone through, and beside it her three, sitting on the paper as lightly as anything, as if it had every right to be there." },
          { s: 'jungwon', f: 'happy', t: "...Three. You're still doing your arithmetic." },
          { s: 'solar', f: 'neutral', t: "It's still how I'm doing it." },
          { s: 'jungwon', f: 'happy', t: "It's still not how it works. I've stopped minding. I'd like that on the record. I've stopped minding entirely." }
        ] },
        { t: "(Lay your hand flat over it.)", notes: 3, flag: 'eqx-jw-page-held', then: [
          { n: "She laid her hand flat over the page. The dent was under her palm, a long cold groove, colder than paper had any business being, the way the stone lip of the well was cold on a hot day; and she kept her hand there anyway, and after a moment he put his own on top of hers, and they held the page shut between them, the way they'd held the diary shut in April, as if the two of them were keeping a lid on something." },
          { s: 'jungwon', f: 'neutral', t: "...It's warmer now. Under there. Is it? Or is that you." },
          { s: 'solar', f: 'neutral', t: "That's me." },
          { s: 'jungwon', f: 'neutral', t: "Good. Keep doing that." }
        ] }
      ] },
      { ifChoice: { 'asks.jungwon': 'yes' }, then: [
        { s: 'jungwon', f: 'sad', t: "It's taken another thing. Since the plant. I noticed on Thursday." },
        { s: 'jungwon', f: 'neutral', t: "The stairs at Hanlim. Up to the council room. I used to know the count without counting, the way you know your own phone number. I lay awake and climbed them in my head. I got forty-one. I know that's wrong. It's wrong in the knees. I can't find the right one." },
        { n: "She knew it. She'd climbed them in the other life, late to every meeting, two at a time with her bag banging her hip and his voice coming down the stairwell already reading the first item without her." },
        { choose: [
          { t: "Forty-four. The landing makes it feel like forty.", notes: 3, flag: 'eqx-jw-stairs', then: [
            { n: "He shut his eyes. She watched him climb them in his head, his lips moving, and stop at the landing, and go on." },
            { s: 'jungwon', f: 'happy', t: "...Forty-four. Yes. The landing. You had it. You were keeping it for me." },
            { s: 'solar', f: 'neutral', t: "Somebody had to." },
            { s: 'jungwon', f: 'serious', t: "Don't keep too much of me for me. Please. You've got three of everything already. I don't want to be one more thing you're carrying up a hill." }
          ] },
          { t: "(Don't tell him. Wait while he finds it.)", notes: 2, then: [
            { n: "She didn't tell him. She sat across the table and watched him climb them with his eyes shut, his lips moving, losing it at the landing and starting again from the bottom, three times, four, and on the fifth he stopped, and opened his eyes, and his hands were shaking on the table." },
            { s: 'jungwon', f: 'neutral', t: "...Forty-four. I went down and got it. It was further down than the plant was. It cost more." },
            { s: 'jungwon', f: 'neutral', t: "Thank you for not handing it to me. I think I'd have lost it again by Friday." }
          ] }
        ] }
      ], else: [
        { ifChoice: { 'asks.jungwon': 'no' }, then: [
          { s: 'jungwon', f: 'neutral', t: "Both lists. Every spoon. Still there. I'm sleeping about three hours. Jay's started leaving rice balls outside my door at night, the way you'd leave milk out for a cat." },
          { s: 'jungwon', f: 'serious', t: "I'm not putting either of them down. I wanted you to know I'm still not. That it's November, and they've got heavier, and I'm still carrying both like a fool, and I'd do it again. I'd do it again with you telling me to." }
        ], else: [
          { s: 'jungwon', f: 'neutral', t: "In June I wrote something on that form you've never asked about." },
          { s: 'solar', f: 'neutral', t: "I'm still not going to." },
          { s: 'jungwon', f: 'neutral', t: "I know. I've started to think that's the only reason it's still mine. If you asked, I'd tell you, and then it'd be ours, and it would know where to look for it." },
          { s: 'jungwon', f: 'serious', t: "I'll tell you on the day I find out whether it was true. That's a promise. It isn't a polite one." }
        ] }
      ] },
      { ifEvent: 'eqx-culture-stage', then: [
        { s: 'jungwon', f: 'happy', t: "Your father cried. The one with the remote. At the festival. He filmed the whole five minutes on that pawnshop camera and cried into his collar and said *encore* in Korean to the vice principal, who bowed to him. I've never been prouder of a proposal." },
        { s: 'jungwon', f: 'neutral', t: "Yunjin reached for somebody on her left. Three times. I counted. I sat in the fourth row and I wanted to stand up and tell her who it was." },
        { s: 'solar', f: 'neutral', t: "Who was it?" },
        { s: 'jungwon', f: 'neutral', t: "...I'm not that good at minutes. I only know where she looked afterward, when the lights came up. You were in the third row." }
      ], else: [
        { n: "There was a single sheet at the far end of the table, typed, squared to the edge, with a timetable stapled to the back. *Proposal: International Exchange Dance Unit. Fifteen minutes. Main Stage.* He was getting the girls the gym. She hadn't known he was doing it. Nobody had." },
        { s: 'jungwon', f: 'neutral', t: "I've made them sound like a trade delegation. The committee will love it. Don't tell Yunjin. She'll make it a thing." }
      ] },
      { n: "Out of the window, at the gate, the young guard in the gray jacket stood with his back to the well and his phone in his hand. There was a paper cup of tea on the gatepost beside him with steam coming off it. Jungwon had already been out, then. He always had, by half past four." },
      { s: 'jungwon', f: 'neutral', t: "I went to see Mr. Ueda on Sunday. At her house. At the gate. I didn't go in." },
      { s: 'jungwon', f: 'neutral', t: "I took him a key. To the guesthouse. Room Six. It's been empty since September. I asked the new man for it and he gave it to me without a form, which tells you how much he wants to be in bed by ten." },
      { s: 'jungwon', f: 'serious', t: "I said, Mr. Ueda, there's a room. It's warm. It's by the station. You could come back. Just for the winter." },
      { n: "He'd said it, she could tell, first in the minutes voice and then in the other one, the son's one, the one for old men at the top of a hill who had to be talked round to something for their own good." },
      { s: 'jungwon', f: 'sad', t: "He laughed at me. He put the key back in my hand and closed my fingers over it. Like this. He said, *young man, I've never been so warm in my life.*" },
      { s: 'jungwon', f: 'neutral', t: "He sleeps in the afternoons now. On the bench in her garden, by the well, in the sun. She puts a blanket over him. He said he wakes up and doesn't know how long he's been asleep, and he doesn't mind. He said that twice. *I don't mind.*" },
      { s: 'jungwon', f: 'serious', t: "He's put on six kilos. He was smiling the whole time. And when he closed my fingers, his hand was so warm. Like an oven door you've touched by accident." },
      { s: 'jungwon', f: 'neutral', t: "She waved at me from the kitchen window. With her glove on." },
      { n: "He didn't say anything about the window after that, and she didn't ask. She thought of three men carrying their own suitcases out of that gate on a Tuesday evening, past a small kind woman with wet eyes, not looking back; and of a bench by a capped well in a garden in the sun, and somebody tucking a blanket in round an old man's shoulders the way you'd tuck in a child, very gently, so as not to wake him." },
      { choose: [
        { t: "You can't make him leave, Jungwon.", notes: 3, flag: 'eqx-jw-key-his', then: [
          { s: 'jungwon', f: 'neutral', t: "I know. I'm learning that this year. It's the worst subject I've ever taken. I'm failing it very neatly." },
          { s: 'jungwon', f: 'serious', t: "I gave him the choice. He chose. I don't have to like it. I wrote it down when I got back. *He chose.* It looked very small on the page." }
        ] },
        { t: "Then go back every Sunday. Keep holding out the key.", notes: 2, flag: 'eqx-jw-key-again', then: [
          { s: 'jungwon', f: 'neutral', t: "Every Sunday. Yes. I'll hold it out every Sunday, and he'll close my fingers on it every Sunday." },
          { s: 'jungwon', f: 'serious', t: "...It's a kind of asking too. Isn't it. I'm aware. I'm going to do it anyway. Somebody ought to be standing on the other side of that gate with a key." }
        ] },
        { t: "(Take the key off the table. Put it on his own key ring.)", notes: 3, then: [
          { n: "It was on the table by the diary, with a cardboard tag on it in the guesthouse's printing, *6*. She picked it up and took his key ring out of his blazer pocket, where it always was, and threaded it on beside his own Room 4 and the brass one for this room, and gave the ring back to him." },
          { s: 'jungwon', f: 'neutral', t: "...In case." },
          { s: 'solar', f: 'neutral', t: "In case." },
          { n: "He put the keys back in his pocket and kept his hand on them there, through the cloth, for the rest of the afternoon." }
        ] }
      ] },
      { n: "The chime went at five, the long four-note one, and this time he stood when it went, the way he always had before the summer, and packed the diary and the pen and the timetable into his bag in the order he'd taken them out. At the door he waited for her and held it, and on the stairs, where nobody was, he took her hand and didn't let go of it at the shoe lockers." },
      { n: "In the courtyard the frost hadn't lifted all day from the north side of anything. It lay in a gray fur along the bottoms of the walls and on the bench by the gate. On the well's plank lid it lay thick and white and even, all the way across, except for a circle in the middle the size of a dinner plate where there was no frost at all, only bare wet wood, dark, as if something under it had been breathing on that one place since morning." },
      { n: "Jungwon walked between her and it. He didn't slow down." },
      { place: 'Iwatodai Dorm · Front Steps', time: 'Evening', bg: 'iwotodaidorm-outside' },
      { n: "Mr. Kim was on the dorm steps. He'd taken to it since the fathers moved in, the way he'd taken to the stations in October: an hour at dusk, every day, in his fleece, on the second step from the top, with a mug of barley tea going cold beside him, looking down the road toward the river the way you'd look down a platform for a train that was late." },
      { ifEvent: 'eqx-seams', then: [
        { ifBefore: '12/1', then: [
          { n: "He'd just come back from the ward in Tatsumi. She could tell from his coat, still buttoned, and the plastic bag from the hospital shop with the empty juice cartons in it, and the look on his face, which was the look of a man who'd been called an idiot for six hours by somebody he'd been afraid he'd never be called anything by again." },
          { s: 'kim-dad', f: 'happy', t: "She called me an idiot four times today. Four! She's getting better. Yesterday it was twice." }
        ], else: [
          { n: "Mrs. Kim was upstairs, in Mitsuru's room, in the armchair, sitting up; she'd sent him out for air the way she used to send him out to the car. He'd come out and sat on the step and got his air, obediently, and looked up at her window every few minutes to make sure it was still lit." }
        ] }
      ], else: [
        { n: "He didn't go to the stations anymore. He'd said so, on the steps, to anyone who passed. *If she comes, she'll come up these. I'll be here.* Nobody had told him not to sit there. Nobody had the heart." }
      ] },
      { s: 'kim-dad', f: 'happy', t: "Jungwon-ah! There he is. Look at him, he's gray, he's a little gray boy. You're staying for dinner. Stay. Stay and help me eat it." },
      { ifFlag: 'dead.shinjiro', then: [
        { s: 'kim-dad', f: 'neutral', t: "The boxer's cooking. Since. He burns everything and won't let anybody help, so we eat it. We eat all of it. Stay." }
      ], else: [
        { s: 'kim-dad', f: 'neutral', t: "The quiet one's making curry. The one with the coat. He made me taste it three times and said *it's not ready* three times. Stay." }
      ] },
      { n: "Solar watched the word go into him. *Stay.* Three times in a breath, from a kind man on a cold step with a mug in his hands, who meant nothing by it but supper. Jungwon didn't flinch. He went still instead, the polite stillness, for exactly as long as it took a person to hear something and decide not to show they'd heard it." },
      { choose: [
        { t: "(Don't answer for him. Wait.)", notes: 3, flag: 'eqx-jw-own-yes', then: [
          { n: "She didn't say anything. She stood a step below him with her hands in her coat pockets and waited, and felt him feel her waiting, the whole weight of her not answering for him, the way you'd feel somebody hold a door and not walk through it." },
          { s: 'jungwon', f: 'neutral', t: "...I'd like to. Not because you asked, abeonim. Because I'd like to." },
          { s: 'kim-dad', f: 'surprised', t: "What's the difference?" },
          { s: 'jungwon', f: 'happy', t: "I'm working on it. It's a very important difference. I'll explain it at dinner." },
          { s: 'kim-dad', f: 'neutral', t: "Fine, fine, come in, you're letting all the heat out, you're as bad as she is. Exactly as bad. I'm surrounded." }
        ] },
        { t: "He's staying. I'll make sure he eats.", notes: 2, then: [
          { s: 'jungwon', f: 'flustered', t: "...Overruled by the chair, apparently." },
          { n: "He went up the steps. At the top he stopped beside her, close, and said it very low, in the old careful Korean, so that Mr. Kim wouldn't follow." },
          { s: 'jungwon', f: 'neutral', t: "That's twice in one minute somebody's told me to stay. I'm staying anyway. I'd like it noted that I chose to." }
        ] }
      ] },
      { place: 'Iwatodai Dorm · Dining Room', time: 'Evening', bg: 'iwatodaidorm-diningroom-night', soft: true },
      { n: "Dinner was loud. It was always loud now, with three fathers in the house, the way a house is loud when it's been quiet too long and doesn't trust it. Mr. Kim sat Jungwon at his right hand and put food on his plate without asking and interrogated him in Korean, through the food, about his mock exams, at a school in another world where none of them would sit a mock exam again, and Jungwon answered every question exactly, with his scores, to the decimal, and Mr. Kim nodded at each one as if it were very important news." },
      { n: "Across the table Taejoon ate without speaking and watched them both. At the end, when Mr. Kim had got up for more rice, Taejoon put a piece of the good fish on Jungwon's plate. Just put it there. And went on eating. Jungwon looked down at it, and then at the man who'd put it there, and bowed his head a little, over the table, the way you'd bow to somebody at the top of a hill, and ate it, and neither of them said a word." },
      { ifCount: { of: ['eqx-jw-council-kiss', 'eqx-jw-locked-door', 'eqx-jw-summer-kiss', 'eqx-jw-room-four', 'eqx-jw-both-names'], min: 1 }, then: [
        { place: 'Iwatodai Dorm · Solar\'s Room', time: 'Night', bg: 'solar-dormroom-night', soft: true },
        { n: "He came up afterward to look at her radiator. That was what he said on the stairs, in front of Junpei, in his council voice. *Solar-san's radiator is making a noise. I said I'd look at it.* Junpei said *sure, man, the radiator*, and went into his room and shut the door and laughed through it." },
        { n: "He did look at it. He knelt down in front of it in her room and put his hand on the pipe and listened, seriously, for nearly a minute, and then stood up and said *it's fine, it's just old*, and turned round, and she was right there, and he stopped talking." },
        { n: "The dorm was full of fathers. One of them, two floors up, had known him since he was a boy in a school blazer at a gate in another life, and called him *ours* at breakfast. It was in both their faces, the knowledge of it, the whole length of the kiss, and it made them careful at first, and then it made them not careful at all, because nothing in this year had ever been made safer by being careful, and they both knew that too." },
        { n: "Her back met the door. His hands were cold from the pipe and then they weren't. He said her name into the side of her neck in the old Korean and then the Hanlim Korean, and she laughed, because he was still doing it, both, even now, and he said *what* against her skin, and she said *nothing, nothing, don't stop*, and he didn't. The radiator ticked. Neither of them looked at it." },
        { n: "At twenty to twelve there were feet on the stairs. Slippers. A man's voice, cheerful, in Korean, through the door, going past along the hall toward the bathroom. *Jungwon-ah! You still here? The last train's at eight minutes past, don't miss it, it's cold!* And the slippers going on, a tap running, a man humming." },
        { n: "Jungwon put his forehead against her shoulder and shook with silent laughter for a long time." },
        { s: 'jungwon', f: 'flustered', t: "...He's going to stand at the top of the stairs till I leave. I know him. He's a very thorough man. He once waited for my bus at Hanlim for forty minutes because it was raining." },
        { choose: [
          { t: "(Pull him back down. Let the train go.)", notes: 3, flag: 'eqx-jw-last-train', then: [
            { n: "She took him by the loosened tie and pulled him back down onto the bed, and he went, and the slippers went back past the door the other way and up the stairs, slowly, and stopped at the top, and after a long while went on up, and a door closed, very gently, two floors above them." },
            { n: "The last train went at eight minutes past twelve. They heard it, far off, across the river, the long falling note of it on the bridge, and he lifted his head and listened to it go, and then looked down at her, and laughed again, under his breath, the way he only laughed when there was nobody to see it." },
            { place: 'Iwatodai Dorm · Solar\'s Room', time: 'Early Morning', bg: 'solar-dormroom-day', soft: true },
            { n: "She woke at six with the window gray and the radiator ticking and his blazer on the back of her desk chair, folded once lengthwise so it wouldn't crease, which he must have done at some point in the night without her noticing. He was awake. He was lying on his side looking at her with the gray light on his face, and he didn't look away when she caught him." },
            { s: 'jungwon', f: 'neutral', t: "I've been planning my route out. There are three fathers in this building. I've accounted for two." },
            { n: "He didn't account for the third. Taejoon was on the stairs. He always was, at night; the seventh stair, here as there, sitting with his forearms on his knees in the dark. At six in the morning he was still there, or there again, and he looked up at the boy coming down past him with his blazer over his arm and his tie in his hand." },
            { n: "He didn't say anything. He said it very loudly. Then he moved his knees aside, a little, to let him by." },
            { n: "At breakfast Mr. Kim asked Jungwon if he'd caught his train. Jungwon said he'd caught a later one. Mr. Kim said *good, good, there's a later one?* and Taejoon, at the end of the table, behind his newspaper, turned a page." }
          ] },
          { t: "(Walk him to the station. Make the train.)", notes: 2, then: [
            { n: "They made it. They ran the last two hundred meters down the hill with his bag banging against his back and her coat open and the frost loud under their shoes, and the train was in, and the doors were open, and he got on and turned round in the doorway and kissed her once across the gap, quickly, with the bell going, and the doors closed between them." },
            { n: "He stood with his hand flat on the glass as it pulled out. She saw his mouth say something. She didn't know which language. It didn't matter, she thought, walking back up the hill with her coat still open; it wasn't the kind of thing you needed to hear to know." }
          ] }
        ] }
      ], else: [
        { n: "Afterward he played cards with Mr. Kim and Junpei in the lounge until half past eleven, a Korean game Mr. Kim taught Junpei very loudly and Junpei lost very loudly, and Jungwon kept the score on the back of a gas bill in his small upright hand and was scrupulously fair to all parties, including himself, which meant he won." },
        { n: "She walked him to the station. The frost was loud under their shoes. On the platform, under the clock, with the train coming in, he turned to her with his hands in his coat pockets." },
        { s: 'jungwon', f: 'neutral', t: "Thank you. For not answering for me. On the steps. I noticed. I'll notice it for a long time." },
        { n: "The doors opened. He got on, and turned round in the doorway, and bowed, the short precise one, very seriously, and then ruined it by smiling all the way through it, and the doors closed." }
      ] },
      { place: 'Iwatodai Dorm', time: 'Late Night', bg: 'solar-dormroom-night', soft: true },
      { phone: [
        { from: 'jungwon', t: "Item one: dinner. Very good. Please tell whoever cooked." },
        { from: 'jungwon', t: "Item two: I looked at the diary again before bed. The page is where we left it." },
        { from: 'jungwon', t: "Item three: I wrote under today. *Chose.* In my own hand. It's very small. It's there." }
      ], contact: 'jungwon' }
    ] },
    { after: '11/25', title: '8: what I am here', place: 'Gekkoukan High · Student Council Room', time: 'After School', music: 'tender', scene: [
      { bg: 'gekkoukan-student-council' },
      { n: "The first real frost had come in the night and stayed. It was on everything when she crossed the courtyard, the bench, the bare black branches of the cherry trees, every blade of the strip of grass by the gym, white and stiff and squeaking underfoot, and the sky over the school was the hard pale blue of a sky with nothing in it, and her breath went up in front of her face and hung there, as if it weren't sure it was allowed to leave." },
      { n: "The well's lid was white with it. All the way across, this time. No circle. She looked, and was relieved, and then wasn't, because she couldn't think of a single reason why that should be better." },
      { n: "Jungwon was at the council room window with his hands behind his back. Not writing. Not reading. Standing, the way he stood at the window of the other council room at home, in his blazer and his scarf, which he'd forgotten to take off, looking down at the courtyard; and when she came in he didn't turn round straight away. He finished something first, in his head. Then he turned." },
      { s: 'jungwon', f: 'neutral', t: "You came. Good afternoon. Keep your coat on. I'm taking you somewhere, and then I'm taking you somewhere else, and then I'd like to read something into the record. It's a full agenda. I apologize." },
      { ifFlag: 'dead.aigis', then: [
        { s: 'jungwon', f: 'sad', t: "Before that. In May, Aigis-san asked me what the council minutes were for. I said, so that nobody has to remember things on their own. She asked for a copy. Of all of them. She said she'd like something to remember with." },
        { s: 'jungwon', f: 'sad', t: "I finished it on Sunday. Every meeting since April. I took it to the chapel in Tatsumi and stood there with it and didn't know where to put it. Mitsuru-sunbae took it out of my hands. She held it against her chest like it weighed something." },
        { n: "He said it in the minutes voice, perfectly level, and looked at the window afterward for a while, and she let him." }
      ] },
      { ifFlag: 'dead.shinjiro', then: [
        { n: "He still wore the black tie. It was a month now. Nobody at Gekkoukan had said anything." }
      ] },
      { ifBefore: '12/1', then: [
        { place: 'Kirijo Group · Tatsumi Ward', time: 'After School', bg: 'hospital-room' },
        { n: "The Kirijo ward in Tatsumi smelled of the same thing every hospital in every one of her lives smelled of, under the disinfectant, under the flowers somebody had brought and somebody else had arranged too neatly: of radiators, and of waiting. Three beds in a row by the window. Two of them had their curtains drawn. In the third, sitting up against a stack of pillows she'd clearly built herself and wouldn't let anybody touch, Mrs. Kim was doing a crossword in pen." }
      ], else: [
        { place: 'Iwatodai Dorm · Lounge', time: 'After School', bg: 'iwatodaidorm-livingroom-night-winter' },
        { n: "The dorm lounge in the afternoons had become a ward without anybody deciding it should. Blankets on the arms of the couches. Three mugs on the low table that weren't anybody's in particular. A heater nobody had owned in October, ticking in the corner. And in the armchair by the window, sitting bolt upright against a stack of cushions she'd built herself and wouldn't let anybody touch, Mrs. Kim, with a crossword, in pen." }
      ] },
      { n: "She looked up when they came in. At Solar first, the long once-over, the one that took in her coat and her face and whether she'd eaten and whether she was lying about it, all at once, the way it had in a kitchen at home over a plate of something she was supposed to finish. Then past her. At him." },
      { s: 'kim-mom', f: 'neutral', t: "You. Yang Jungwon." },
      { s: 'jungwon', f: 'neutral', t: "Eommeoni. You look well." },
      { s: 'kim-mom', f: 'neutral', t: "I look like something that was left out in the rain. Don't lie to me in my own— in whatever this is. Sit. Not there. There, where I can see you." },
      { n: "He sat where she could see him. On the edge of the chair, back straight, hands on his knees, exactly the way he'd sat at her kitchen table in the flat by Hanlim the first time, a year and a lifetime ago, with his shoes paired by the door and his school bag at his feet and his ears red to the tips." },
      { s: 'kim-mom', f: 'neutral', t: "He told me. My husband. That you kept his list. Every station. A hundred and twelve. That you wrote them out for him in two languages and sat with him every night with the timetables like a clerk." },
      { s: 'jungwon', f: 'neutral', t: "He needed somewhere to put them." },
      { s: 'kim-mom', f: 'neutral', t: "He needed a keeper. He's always needed a keeper. I've been his keeper for twenty-three years, and I go away for two months and he finds a boy to do it." },
      { n: "She looked at him a long time. Her face did something Solar had seen it do perhaps twice in her life: it softened, all at once, at the corners, and then caught itself, and became her mother's face again, the one that didn't buy cover stories." },
      { s: 'kim-mom', f: 'neutral', t: "So I'll ask you. Since you're the one who keeps things." },
      { s: 'kim-mom', f: 'serious', t: "Bring her home. When it's time. Whatever this place is, whatever's down there, when it's over, you bring her home to me. She listens to you. She's never listened to me in her life." },
      { n: "Solar felt it come into the room. Not the words. The shape of them, which she'd learned this year to hear under any voice, kind or not, the way you learn to hear a step on a stair that's one too many. *Bring her home.* A mother asking. Of course a mother was asking. And the boy on the edge of the chair, who'd been asked for things all his life by people he loved, in two houses, and had always, always given them." },
      { choose: [
        { t: "(Say nothing. Let him answer for himself.)", notes: 3, then: [
          { n: "She didn't say anything. She stood by the window with her coat on and let it be his." }
        ] },
        { t: "Mom. Don't ask him that.", notes: 2, then: [
          { s: 'kim-mom', f: 'neutral', t: "I'll ask who I like. I've been in a field. I'll ask the Pope." },
          { n: "But she didn't take her eyes off him, and he didn't take his off her, and Solar understood that it had never been hers to stop." }
        ] }
      ] },
      { n: "Jungwon looked down at his hands on his knees. Then up." },
      { s: 'jungwon', f: 'neutral', t: "With respect, eommeoni. It isn't mine to bring." },
      { s: 'jungwon', f: 'serious', t: "It's hers to come. If she comes. I'll be standing wherever she can see me when she decides. I'll carry her bags. I'll carry her, if she wants carrying. But I won't bring her. Nobody's going to bring her anywhere, this time. Not even me. Not even for you." },
      { n: "The heater ticked. Somewhere a cart went by in a corridor, or a door shut on a floor above. Mrs. Kim looked at him for so long that Solar started counting, the way you count after lightning." },
      { s: 'kim-mom', f: 'neutral', t: "...You've got worse. You used to agree with me about everything. It was the only thing I liked about you." },
      { s: 'jungwon', f: 'flustered', t: "I still agree with you about most things. I'll put it in writing." },
      { s: 'kim-mom', f: 'neutral', t: "Smart-mouthed boy." },
      { n: "She reached out from under the blanket, slowly, with the stiff careful reach of a woman whose back wouldn't let her lean, and patted his hand on his knee, twice, the way you'd pat a dog that had done something you hadn't asked it to and had been right. Then she picked up her pen and looked at her crossword." },
      { s: 'kim-mom', f: 'neutral', t: "Seven letters. *Something kept.* Go away, both of you. I'm tired. Come back tomorrow. Bring oranges." },
      { n: "In the corridor Jungwon walked very fast for about twenty meters and then stopped by a window and put his hand flat on the cold glass and stood there, breathing, and Solar stood beside him and didn't say anything, and after a while he laughed, once, at the glass." },
      { s: 'jungwon', f: 'neutral', t: "I've never said no to her. In my life. I said no to your mother. I'm going to have to move countries." },
      { s: 'solar', f: 'neutral', t: "You didn't say no." },
      { s: 'jungwon', f: 'neutral', t: "...No. I didn't. I said something else. I've been practicing it all year. I didn't know I was practicing it for her." },
      { place: 'Iwatodai · River Street', time: 'Evening', bg: 'iwatodai-riverside-night' },
      { n: "He walked her the long way. It wasn't the way to anywhere; it went along the river street past the boarding house, the way he'd gone every morning since October so that he'd know. The frost had come back down with the dark and the lamps had halos round them, and the river beside the road was black and very still and steamed a little in the cold, as if it were warmer than the air above it." },
      { n: "The persimmon tree over Mrs. Oka's wall was bare. A few last fruit still hung on it, high up, gone dark and soft and wrinkled, the size of fists. Every window in the house was lit. In the garden, on the bench by the capped well, under a blanket, in the frost, an old man was asleep." },
      { n: "Mr. Ueda. On his back, with his hands folded on his chest on top of the blanket and his face turned up to the sky, and he was smiling. There was frost on the blanket. There was frost on the bench all round him and on the stones under it and on the lid of the well. There was no frost on him at all. His face was pink and warm-looking and perfectly peaceful, the way a face looks when someone has been asleep for a very long time and is dreaming about somewhere he likes." },
      // CG: eqx-garden-bench — an old man asleep and smiling on a garden bench under a blanket on a frosty night, frost white on the blanket, the bench and the stones of a capped stone well beside him but none on his face; a bare persimmon tree overhead with a few dark fruit, every window of the wooden house behind him lit.
      { n: "Jungwon had stopped at the gate. He didn't touch it. He stood with his hands in his coat pockets, and she could see his right hand closed round something in there, through the cloth. The keys." },
      { choose: [
        { t: "(Call his name from the gate. Don't go in.)", notes: 3, flag: 'eqx-jw-ueda-called', then: [
          { s: 'solar', f: 'neutral', t: "Mr. Ueda." },
          { n: "He stirred. He didn't open his eyes. His hand came up off his chest, slow, warm, unhurried, and lifted, and waved at the sky, at nobody, at the two of them at the gate, and settled again. He smiled wider. He said something. They couldn't hear it. His lips made a shape that might have been *one more*." },
          { n: "In the kitchen window a gloved hand moved the curtain aside a few centimeters, and let it fall." }
        ] },
        { t: "(Don't call. Stand with Jungwon and watch him breathe.)", notes: 2, then: [
          { n: "She didn't call. She stood beside him at the gate and they watched the blanket rise and fall, rise and fall, slow, even, the deep breathing of a man who wasn't going to wake for anything as small as a voice from the street; and after a while Jungwon took out the diary and wrote the time, and under it, in the smaller hand, *breathing*." }
        ] }
      ] },
      { n: "They walked on. Neither of them looked back until the corner. At the corner she did, and the bench was there, and the blanket, and the lit windows, and the bare tree, and she thought she'd remember it exactly like that for the rest of the year, and she was right." },
      // BG: kirijo-guesthouse-roof-winter — the flat concrete roof of a small guesthouse on a frosty late-November night, the water tank rimed white, a propped fire door spilling yellow light, the town's lamps and a black river below, stars hard and close.
      { place: 'Kirijo Guesthouse · Roof', time: 'Night', bg: 'kirijo-guesthouse-roof-night' },
      { n: "The fire door at the end of the hall was still propped with the guesthouse's own extinguisher. Nobody had ever moved it back. The roof was white with frost and the water tank was furred with it, and the cold came up through the soles of her shoes the moment she stepped out, and the town lay below them in the dark the way it had in August, the river, the bridge, the station, the bay, except that now every light in it was sharp, and every star over it was sharp, and there wasn't any haze to soften anything at all." },
      { n: "He'd brought two cans of hot coffee from the machine in the lobby. He gave her one. He held his between both hands and didn't drink it, and stood at the low parapet with his back to the town, facing her, the way he'd faced her in the council room in October, and she saw him take a breath, and let it out, white, and take another." },
      { s: 'jungwon', f: 'neutral', t: "The last item. I've been drafting it since April. I've drafted it more times than the form. This is the version where I stop drafting." },
      { s: 'jungwon', f: 'neutral', t: "At home I'm two things to you. At Hanlim I'm your boyfriend. Your mother knows my shoe size and doesn't approve of my handwriting. A whole school has opinions about it. In the house on the hill I'm the other thing. The one with a date on a calendar, that both of us know, that neither of us is going to say on a roof." },
      { s: 'jungwon', f: 'serious', t: "And neither of those, Solar, did either of us get to choose all the way. One of them we chose, and then everybody else got a vote. The other one was decided at a table we weren't sitting at." },
      { s: 'jungwon', f: 'neutral', t: "Here I don't have to be either. And it's been asking me all year to be one boy. And I've worked out that it's right about exactly one thing, and I hate that it's right, and I'm going to say it anyway, in my own voice, not in its." },
      { s: 'jungwon', f: 'serious', t: "I'd like there to be one thing, here, that's chosen. Not by either house. Not by anyone's mother. Not by it. By you. Whatever it is. I'll write down whatever you say in the good book, and I'll never cross it out." },
      { ifFlag: 'eqx-home-H3', then: [
        { s: 'jungwon', f: 'neutral', t: "On the Third Hill you got into the car. In the gym. I watched you cross the court. I didn't stop you. It's the thing I'm proudest of this year, and I'd like never to have to do it again." }
      ] },
      { ifFlag: 'eqx-away-H3', then: [
        { s: 'jungwon', f: 'neutral', t: "On the Third Hill you stood in the doorway between us. I'm aware whose shoulder was on your other side. I'm not pretending I didn't notice. I noticed very precisely." }
      ] },
      { ifRomance: 'jihoon', then: [
        { s: 'jungwon', f: 'serious', t: "I know about Jihoon. Here. He knows I know. I'm not asking you to take anything away from him. I'm asking what I am. Not what he isn't. Those are two different motions." }
      ], else: [
        { ifCount: { of: ['eqx-jihoon-roof', 'eqx-jihoon-booth-kiss', 'eqx-jihoon-canal-kiss', 'eqx-jihoon-dark-kiss', 'eqx-jihoon-room'], min: 1 }, then: [
          { s: 'jungwon', f: 'serious', t: "I know about Jihoon. Here. He knows I know. I'm not asking you to take anything away from him. I'm asking what I am. Not what he isn't. Those are two different motions." }
        ] }
      ] },
      { ifRomance: 'haechan', then: [
        { s: 'jungwon', f: 'neutral', t: "And Donghyuck. I know. We're very polite to each other about it. We'll be polite about it until one of us dies of it." }
      ], else: [
        { ifCount: { of: ['eqx-hc-roof-kiss', 'eqx-hc-stayed-night'], min: 1 }, then: [
          { s: 'jungwon', f: 'neutral', t: "And Donghyuck. I know. We're very polite to each other about it. We'll be polite about it until one of us dies of it." }
        ] }
      ] },
      { s: 'jungwon', f: 'flustered', t: "So. What am I to you. Here. Now. You're allowed to say it's complicated. I'll minute that too." },
      { n: "The cold was in everything. In the can between her hands, which had stopped being hot and was only warm, in the concrete under her feet, in his breath going up white between them and hanging there with hers. Below them the town was perfectly still. Somewhere a train went over the bridge, far off, the long falling note of it, and stopped, and she realized she'd been waiting for it to stop so she could answer, and that he'd been waiting too." },
      // CG: eqx-roof-frost — a boy in a school blazer and scarf at the low parapet of a frosted guesthouse roof at night, a can of coffee steaming between his hands, facing a girl across a few meters of white concrete; behind him a sharp clear town, a black river, hard stars.
      { route: [
        { t: "You're mine. Here too. Chosen.", route: 'romance', notes: 3, flag: 'eqx-jw-chosen', then: [
          { s: 'jungwon', f: 'surprised', t: "..." },
          { n: "His face went still. Not the polite stillness, and not the other one, the one she'd learned meant something had landed where he kept the things that mattered. A third one. She'd never seen it in either house. It was the face of somebody who'd been holding a door shut against a wind all year and had just been told, very quietly, that he could let go of the handle." },
          { s: 'jungwon', f: 'happy', t: "...Chosen." },
          { s: 'solar', f: 'neutral', t: "By me. Not by anybody's table." },
          { s: 'jungwon', f: 'happy', t: "Carried. I'm not putting it to a vote. I'm the chair. It's carried." },
          { n: "He put the can down on the parapet. He crossed the frost to her in three steps and took her face in his cold hands and kissed her, not carefully, not at first and not after, the way you'd do a thing you'd just been told for the first time in your life you were allowed to do, and her can went somewhere, rolling, across the concrete, and neither of them looked for it." },
          { place: 'Kirijo Guesthouse · Room 4', time: 'Night', bg: 'kirijo-guesthouse-night', soft: true },
          { n: "The sign was still on the door. *Studying. Knock. (Not twice.)* He didn't knock. He opened it and drew her in by the hand and shut it, and the room was dark and cold, the window open a crack as it always was, and the lists were gone from the floor; he'd taken them up in October and put them in a box under the bed, and the bare boards shone faintly in the light from the street." },
          { n: "He didn't turn the light on. He undid her coat, button by button, from the top, the way he did everything, properly, as if there were minutes being taken and he wanted them to be accurate, and she let him, and then she lost patience and did the rest herself, and he laughed into her hair and said *point of order*, and she said *overruled*, and the narrow guesthouse bed complained about both of them, and the dent in the pillow that had only ever been his wasn't anymore." },
          { n: "Down the hall somebody's music was playing low. Out on the river a boat went by with its engine thudding, slow, and its wake slapped the embankment, once, twice, and was quiet. He said her name. Only once, tonight. Not the Hanlim way and not the house way. Just hers." },
          { place: 'Kirijo Guesthouse · Room 4', time: 'Early Morning', bg: 'kirijo-guesthouse-day', soft: true },
          { n: "She woke because he was writing. The sound of it, a nib on paper, small and steady in the gray, and the cold of the room on her shoulder where the blanket had slipped. He was sitting up against the wall beside her with the good book on his knees, the second one, the one he'd started in April for the minutes worth keeping, and he was writing a single line at the top of a fresh page, very slowly, in his neatest hand, and he didn't hide it when she looked." },
          { n: "The date. And under it, one word. *Chosen.* And a full stop, pressed so lightly it barely marked the paper." },
          { s: 'jungwon', f: 'neutral', t: "That's the minutes. That's all of them. The rest is off the record. All of it. Forever." },
          { ifRomance: 'jihoon', then: [
            { n: "Jihoon was at the end of the hall when she came out. At the window by the fire door, in his coat, with a cigarette he wasn't lighting turning over and over in his fingers. He'd been up all night or he'd got up very early; on Jihoon it came to the same thing. He looked at her. At the sign on the door behind her. At her coat, buttoned wrong." },
            { s: 'jihoon', f: 'neutral', t: "...Door was shut." },
            { s: 'solar', f: 'neutral', t: "Yeah." },
            { n: "He looked at the cigarette. He put it back in the packet. He didn't say anything cruel, which she'd half braced for and was ashamed of having braced for, and he didn't say anything kind either. He did her top button up properly, with two fingers, as he went past her to the stairs, the way you'd straighten a picture in a house you used to live in, and went down." }
          ], else: [
            { n: "Sunghoon was in the hall when she came out, in a towel, with his hair wet. He looked at her, and at Room 4's door, and at her coat, buttoned wrong, and then he did a thing nobody else in either of his lives would have known to do. He went and held the stairwell door for her, the heavy fire door, and didn't say anything, and didn't smile, and nodded, once, as she went past, the way you nod to somebody who's made it across something." }
          ] }
        ] },
        { t: "My best friend. Here. The rest is at home, where we left it.", route: 'friend', notes: 3, flag: 'eqx-jw-friend', then: [
          { s: 'jungwon', f: 'neutral', t: "..." },
          { n: "He took it the way he took everything, standing, all the way in, without letting it move his face until he'd decided what his face was going to do. She watched him decide. It took a long time. The train on the bridge had gone. Nothing else came." },
          { s: 'jungwon', f: 'neutral', t: "...Friend. Here." },
          { s: 'solar', f: 'neutral', t: "Here. Nothing at home moves. Nobody's deciding that on a roof." },
          { s: 'jungwon', f: 'serious', t: "No. Nobody is. I wouldn't let them. I wouldn't let you, actually. Not here. That's what this place does. It gets you to sign things on its paper." },
          { ifCount: { of: ['eqx-jw-council-kiss', 'eqx-jw-locked-door', 'eqx-jw-summer-kiss', 'eqx-jw-room-four', 'eqx-jw-both-names'], min: 1 }, then: [
            { s: 'jungwon', f: 'sad', t: "I'll remember the council room. And the summer. I'm not going to pretend I don't. I'll just keep them in the other book. The one I don't read out." }
          ] },
          { s: 'jungwon', f: 'happy', t: "I'll be very good at it. I'd like you to know that now, so you can prepare. I'll be the best friend you've got. I'll be insufferable. I'll remember your mother's oranges." },
          { n: "He smiled, the real one, both dimples, the kind with something behind them; and the something behind it was so plainly what it was that she had to look at the town for a moment instead of at him. He let her. He was good at that. He'd always been good at that." },
          { s: 'jungwon', f: 'neutral', t: "...May I still walk you home? The long way. Past the shrine. Not the river." },
          { s: 'solar', f: 'neutral', t: "Every day." },
          { n: "He walked her home. At the dorm gate he stopped, and bowed, the short precise one, and she went in, and from the lounge window she looked out, the way she had in August; and he was still at the gate under the lamp with his hands in his coat pockets, looking up at the lit windows, counting them, until hers came on." }
        ] }
      ] },
      { place: 'Iwatodai Dorm', time: 'Late Night', bg: 'solar-dormroom-night', soft: true },
      { ifFlag: 'eqx-jw-chosen', then: [
        { phone: [
          { from: 'jungwon', t: "Item one: you left your can on the roof. I've kept it. It's on the windowsill. It's an empty can. I'm aware." },
          { from: 'jungwon', t: "Item two: I've read the minutes back four times today. They're very short. They're the best I've ever taken." },
          { from: 'jungwon', t: "Item three: the April page is still where we left it. I looked. I didn't mind it, today. That's new." }
        ], contact: 'jungwon' }
      ], else: [
        { phone: [
          { from: 'jungwon', t: "Home. Lists done. Everything still there." },
          { from: 'jungwon', t: "I've written it down. Friend. In the good book. Underlined once. Not twice. Twice would be a lot." },
          { from: 'jungwon', t: "Tomorrow at four. Your mother wants oranges. I'm buying the expensive ones. Don't argue, it's my job now." }
        ], contact: 'jungwon' }
      ] }
    ] }
  ]
});
