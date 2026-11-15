/* Persona 3: Equinox · Yang Jungwon · V The Hierophant. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: rank 1 only (from 4/13, the Gekkoukan student council room, after school). Ranks 2–15 still to write.
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
    ] }
  ]
});
