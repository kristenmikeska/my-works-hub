/* Persona 3: Equinox · Yang Jungwon · V The Hierophant. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1–3 (rank 1 from 4/13, rank 2 from 4/30 so it always follows Mr. Tanabe, both the student council room
   after school). Ranks 4–15 still to write. Rank 3 (from 6/7, same room; branches on the rank 2 form flags,
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
    ] }
  ]
});
