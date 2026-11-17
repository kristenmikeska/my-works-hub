/* Persona 3: Equinox · Yang Jungwon · V The Hierophant. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1–6 (rank 1 from 4/13, rank 2 from 4/30 so it always follows Mr. Tanabe, both the student council room
   after school). Ranks 7–15 still to write.
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
  cast: { jay: 'Jay' },
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
    ] }
  ]
});
