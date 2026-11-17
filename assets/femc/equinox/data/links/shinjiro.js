/* Persona 3: Equinox · Shinjiro Aragaki · XVIII The Moon. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1–8. Ranks 9–15 still to write (ranks 7–8 fit before 10/23: story-act4.js reads ifRank shinjiro 8; deadLink
   blocks every rank after a death, so 9+ only ever play on eqx-shinji-lived).
   Rank 1 from 4/13, rank 2 from 4/18, both Tatsumi Memorial Hospital after school; rank 2 branches on eqx-knock and Mrs.
   Oka's rank. Rank 3 (from 6/2, outpatient therapy at the hospital, then the dorm kitchen; branches on eqx-second-hill,
   eqx-last-grain, eqx-shinji-egg) records his ask: tally asks.shinjiro (+ cakes / choose), flags eqx-shinji-pan,
   eqx-shinji-sink-kiss. Rank 2 flag (nothing reads it yet): eqx-shinji-egg.
   Home: the hospital ward until 5/29, then `homes` → the dorm kitchen, evenings (Nov 16).
   Rank 4 (from 6/16, '4: nineteen'): dorm kitchen → the supermarket on the strip → an ironmonger's window → a bakery
     awning in the rain → the dorm kitchen (curry for nineteen) → Solar's room, 1 a.m. Branches on asks.shinjiro (ifChoice),
     eqx-second-hill, eqx-shinji-sink-kiss, eqx-last-grain, its own eqx-shinji-iron-pan. Speaker kuroda (Mr. Kuroda, the
     old man from the ward corridor in rank 2, no portrait) now eats at the boarding house every night [INVENTED].
     Flags: eqx-shinji-kuroda-warned (Solar told him to eat at home), eqx-shinji-iron-pan (she bought him the cast pan),
     eqx-shinji-awning-kiss (kiss flag).
   Rank 5 (from 7/14, '5: what grows'): the dorm roof garden (tomato, shiso, onions he planted the week he got out), the
     red hour on the roof (his right hand works perfectly in the red and goes back at one: "lent" [INVENTED]; a low light
     at the river bend in the red), then dawn on the roof if she stays. Branches on eqx-tanabata, eqx-last-grain.
     Flag: eqx-shinji-roof-dawn (they fall asleep on the roof; Akihiko finds them at 5:30; romance beat, no kiss flag).
   Rank 6 (from 8/17, '6: by summer'): the dorm kitchen at night: he reads the first goal sheet (*hold a pan*) and holds a
     full pan ten seconds with the right hand while Solar counts (the iron pan if eqx-shinji-iron-pan), cooks the "something
     real" he promised on the prologue phone, then names what the hour asks of him: not *stay* but *want nothing, let
     somebody else want it for you* (his ask, landed). Sets eqx-floor-shinjiro (his ask floor, plan §8). Branches on
     ifBefore 9/1 (still summer / late), eqx-equinox (the mothers gone; his pot to the fathers comes back full),
     eqx-shinji-iron-pan, eqx-shinji-roof-dawn, eqx-lanterns, asks.shinjiro (yes: he's living off her sheet; no / choose).
     Flag: eqx-shinji-stayed-night (a night in his room, cut away; Junpei's betting-book page under the door). The first
     sheet now lives in his left pocket; the winter sheet (choose path) is still unread: ranks 7–8 can spend it.
   Rank 7 (from 9/12, '7: one in thirty'): dorm kitchen → the roof garden at dusk (the last tomatoes) → kitchen, night.
     The therapist signed him off to monthly and gave him a pink rubber ball (catch it ten times running with the right before
     winter); he catches one in thirty, with Koromaru fetching (never hurt). In the red the night before he caught thirty of
     thirty with the lent hand and a mother's voice by the stairs said "You could keep it, child" [INVENTED]. He saves seed
     from the best tomato in a glass on the sill: *DON'T TOUCH. SEED.* / *next year*. Branches on eqx-equinox (before: parents
     in town, Mr. Hata; after: the bridge, Ken's head in his coat), asks.shinjiro yes (homework for her plan: the wrong note).
     Flags: eqx-shinji-lent-no / eqx-shinji-lent-his / eqx-shinji-slow-hand (Solar's answer about the lent hand),
     eqx-shinji-seed-kiss (kiss flag). Text at one: "stayed in bed".
   Rank 8 (from 10/2, '8: be awake for it'): the pot comes back washed with one floured rice cake on a napkin ("thank you for
     the stew, dear"); he bins it with tongs and stops sending the pot to her step [INVENTED]. Greengrocer persimmons (from up
     north, not her tree) peeled and hung in the kitchen window, twelve on two strings, ready "first snow, give or take".
     His right hand catches a falling persimmon: the first thing it ever caught in the light (plants the 10/23 catch of
     Jaesang's collar). The winter sheet read at last: choose = his June sheet, no = a new one he wrote himself; both say
     *be awake for it* (he slept through last winter) and he asks, for himself: "First snow. Wake me up for it." yes = he
     reads her *Be here next summer* again and can't write his own (dread; the death still follows the yes). THE ROUTE TURN:
     `{ route }` romance ("I'm in love with you…": his room, cut away, morning; he checks the window for snow every day now)
     / friend ("You're family…": he claims New Year soba from scratch). Reads eqx-shinji-lent-*, eqx-shinji-slow-hand,
     eqx-shinji-stayed-night. Flag: eqx-shinji-first-snow (Solar promised / wrote FIRST SNOW: WAKE SHINJI in the dorm
     calendar's first December box). Calendar's first snow is 12/19 (calendar.js): Act IV / rank 9 may pay it off.
   Romance: the route is set at rank 8 (route: 'romance' | 'friend'); ranks 1–7 set none. Kiss flags: eqx-shinji-sink-kiss (rank 3), eqx-shinji-awning-kiss (rank 4),
     eqx-shinji-stayed-night (rank 6), eqx-shinji-seed-kiss (rank 7). story-act3.js KISS only lists eqx-shinji-sink-kiss;
     story-act4.js KISS lists ranks 3, 4, 6 (not eqx-shinji-seed-kiss).
   Shape: the stub fields from assets/femc/equinox/data/links.js (this file wins over the stub, core.js indexLinks).
   Picks up the 4/11 visiting-hours event (story-opening.js eqx-shinjiro). Speakers without portraits: nurse, therapist, kuroda.
   Solstice's ranks are shared memory (he woke on 2/27; the year before that is what he remembers, and the coma isn't). */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'shinjiro', name: 'Shinjiro Aragaki', short: 'Shinjiro', arcana: 'Moon', numeral: 'XVIII', from: 'Persona 3', kind: 'sees',
  romance: 'canon', maxRank: 15, starts: '4/11', lodging: 'dorm',
  cast: { nurse: 'Nurse', therapist: 'Therapist', kuroda: 'Mr. Kuroda' },
  home: { area: 'hospital', spot: 'Ward', slot: 'after', days: [0, 1, 2, 3, 4, 5, 6],
          hint: 'Afternoons at Tatsumi Memorial Hospital, on the ward. For now.' },
  // Out of hospital on 5/29 (story-act2.js eqx-discharge): the dorm kitchen, evenings. Rank 3 (outpatient therapy) and every
  // rank after it are met here; their scenes move where they need to.
  homes: [{ from: '5/29', home: { area: 'dorm', spot: 'Kitchen', slot: 'evening', days: [0, 1, 2, 3, 4, 5, 6],
          hint: 'Evenings in the dorm kitchen, at the stove or in the chair by the door. Late on hot nights, the roof.' } }],
  ranks: [
    { after: '4/13', title: '1: the next bed', place: 'Tatsumi Memorial Hospital · Ward', time: 'After School', music: 'tender', scene: [
      { bg: 'hospital-room' },
      { n: "The ward smelled the way it had smelled all last winter, when she'd come here after school with Akihiko and sat in the chair and talked to a boy who couldn't hear her: disinfectant and warm plastic and the rice the trolley brought round at five, and under it the flat, patient smell of a room where people lay still for a long time. She'd thought she'd forgotten it. Her body hadn't. It walked her to the last bed by the window without asking her." },
      { n: "He was sitting up. That was still the thing that stopped her every time, for a whole second, in the doorway. Sitting up, in a gray hospital shirt with the sleeves pushed past the elbow, his hair falling in his face, a tray table across his lap, and on the tray table a lump of pale green therapy putty that he was squeezing in his right hand, slowly, his whole forearm working, with the expression of a man strangling something he'd been told was his friend." },
      { n: "The bed next to his was made up. Fresh sheets, tight corners, a folded blanket at the foot, the pillow plumped and square. Nobody in it. Nobody's things on the locker. It had been made up like that on Sunday, when she'd come with Akihiko, and it was made up like that now, as if the ward were keeping it for someone, or as if nobody wanted to be the one to put a person in it." },
      { choose: [
        { t: "You eat yet?", notes: 3, then: [
          { n: "She said it before he could. He looked up from the putty with an expression of profound personal betrayal, as if she'd walked into his kitchen and used his good pot." },
          { s: 'shinjiro', f: 'neutral', t: "...That's mine." },
          { s: 'solar', f: 'happy', t: "I know. Did you?" },
          { s: 'shinjiro', f: 'neutral', t: "Fish. Rice. Something they said was spinach. It was green and it'd given up. ...Ate all of it. Don't make a thing of it." }
        ] },
        { t: "(Sit in the chair. Akihiko's chair.)", notes: 2, then: [
          { n: "She sat in the chair by the bed. It was Akihiko's chair, the way the corner booth at Hagakure had been Junpei's, by right of having been sat in every day of a winter. Shinjiro watched her sit in it and didn't say anything about it, and that was its own sentence." },
          { s: 'shinjiro', f: 'neutral', t: "...You eat yet?" },
          { s: 'solar', f: 'neutral', t: "Lunch." },
          { s: 'shinjiro', f: 'neutral', t: "What lunch." },
          { s: 'solar', f: 'neutral', t: "Hyein's lunch. She made two. She didn't know which one I'd be." },
          { s: 'shinjiro', f: 'neutral', t: "...Tch. Good kid. Wrong kid to be feeding you, but." }
        ] },
        { t: "(Hold your hand out for the putty.)", notes: 2, then: [
          { n: "She held her hand out. He looked at it, and at the putty, and then put the putty in her palm with the air of a man handing over evidence of his own crime. It was warm, and there were deep marks in it from his fingers, four of them, and a shallow one from the thumb that hadn't been able to press as hard." },
          { s: 'shinjiro', f: 'neutral', t: "Don't. It's disgusting. I've been at it since lunch. ...You eat?" }
        ] }
      ] },
      { n: "The physical therapist came at half past three, a tall cheerful woman with a clipboard and a lanyard covered in cartoon cats, and Shinjiro's whole face shut like a shop at closing time." },
      { s: 'therapist', t: "Aragaki-kun! And you've brought someone. Wonderful. She can help. Hold your arm out for him, would you? Wrist up. Just there." },
      { n: "Solar held her arm out over the tray table, wrist up, the way she was told. The therapist took Shinjiro's right hand in both of hers and put it round Solar's wrist and folded his fingers down." },
      { s: 'therapist', t: "Now squeeze. As hard as you can. Don't be polite about it. She's tougher than she looks, aren't you?" },
      { n: "He didn't want to. She could see it in his jaw. Then the therapist said *come on* in the bright voice that meant she'd say it until he did, and he looked at Solar's face, once, quick, as if checking for permission, and closed his hand." },
      { n: "It was a bad hand. It shook. The fingers didn't close all at once but one by one, the first two strong and the others lagging, trembling with the effort of it, his whole arm in on the job, the tendons standing out in his wrist. And it closed. All the way. Round her wrist on the white tray table, tight, warm, the thumb pressing into the soft place where the pulse is." },
      { ifFlag: 'eqx-from-stay-shinjiro', then: [
        { n: "She'd felt that hand before. Not here. In another hour, at the very end of another year, on a hospital blanket: a hand that couldn't hold a spoon closing on her wrist anyway, and not opening, while she went out of it like water." }
      ], else: [
        { n: "She'd held this hand all winter, in this ward, while it couldn't hold anything back. She'd talked to it. She'd told it about exams and the weather and what Koromaru had eaten off the counter. It had never once closed. It was closing now." }
      ] },
      { s: 'therapist', t: "Look at that! Look at that grip. That's a real improvement. Hold it. Five more seconds. Four." },
      { choose: [
        { t: "(Don't flinch. Hold still for him.)", notes: 3, then: [
          { n: "She held still. It hurt a little, the way a good grip does, and she didn't let her face say so. He was watching her face. He'd have let go the instant it did. She knew that the way she knew where the stove was in the dorm kitchen, in the dark, by heart." }
        ] },
        { t: "Good grip. For a bad hand.", notes: 3, then: [
          { s: 'shinjiro', f: 'neutral', t: "...It's not bad. It's slow. There's a difference." },
          { s: 'solar', f: 'neutral', t: "It's holding on fine." },
          { n: "He didn't answer that. His hand didn't loosen either. The therapist said *three* and then *two* and then *one* and he didn't let go on one, he let go on a count of his own, a good second after, slowly, like he'd decided to." }
        ] },
        { t: "(Put your other hand over his.)", notes: 3, then: [
          { n: "She put her free hand over his, over the shaking knuckles, and held it there. His fingers jumped once under her palm and then steadied, the whole hand, as if it had been waiting for something to brace against." },
          { s: 'therapist', t: "Oh, *that* helped. Did you feel that? Aragaki-kun, your hand stopped shaking." },
          { s: 'shinjiro', f: 'neutral', t: "...Didn't feel anything." },
          { n: "His ears had gone red. The therapist looked at his ears, and at Solar, and wrote something on her clipboard with a little smile that Solar decided she'd rather not know about." }
        ] }
      ] },
      { n: "When he let go there were four marks on the inside of her wrist, pink, fading, and a fainter one from the thumb. He looked at them. He looked away out of the window. His jaw did something complicated." },
      { s: 'therapist', t: "Now. Goal sheet. I asked you on Friday, and you said you'd think about it, which is what everybody says when they mean no." },
      { n: "She unclipped a sheet from her clipboard and put it on the tray table. A printed form, the hospital's crest at the top. Most of it filled in by the therapist in neat blue biro: name, date, the right side, grip, gait, fine motor. And at the bottom, a box, with a question printed over it in big friendly type." },
      { n: "*What do you want to be able to do by summer?*" },
      { n: "The box was empty." },
      { s: 'therapist', t: "Anything. It doesn't have to be big. Walk to the shop. Do up a button. Most people write *go home*. It helps to have something to aim at, Aragaki-kun. I've done this a long time. The ones who write something get further." },
      { s: 'shinjiro', f: 'neutral', t: "...I'll think about it." },
      { s: 'therapist', t: "That's what you said on Friday." },
      { s: 'shinjiro', f: 'neutral', t: "And I thought about it." },
      { n: "She left the sheet anyway, and a pen on top of it, and went off down the ward to torment somebody else, and he didn't look at the sheet once after she'd gone, the way you don't look at a dog that's been told to stay in case it takes that as permission." },
      { choose: [
        { t: "Write something. Anything.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "Like what." },
          { s: 'solar', f: 'neutral', t: "Like *go home*." },
          { s: 'shinjiro', f: 'neutral', t: "...Which home. The dorm? The alley? This bed? I've been in this bed longer than I was anywhere." },
          { s: 'shinjiro', f: 'sad', t: "Don't. I know. I'm not being sad. I'm counting." }
        ] },
        { t: "You never think past next week. You never did.", notes: 3, then: [
          { s: 'shinjiro', f: 'neutral', t: "No. Didn't have to. Didn't figure I'd get a next week. I was right for a while." },
          { s: 'shinjiro', f: 'neutral', t: "...Now I got a whole year somebody handed me. Like a bowl you didn't order. You don't know if you're supposed to eat it or send it back." }
        ] },
        { t: "(Leave the pen where it is. Say nothing.)", notes: 3, then: [
          { n: "She didn't say anything. She looked at the empty box and then out of the window, where he was looking, at the sky over the bay, and let the sheet sit there between them on the tray table with the pen on it, not pushing, the way he'd once left a bowl in front of her and gone to wash a pan so she wouldn't have to eat it with him watching." },
          { s: 'shinjiro', f: 'neutral', t: "...You learned that from me." },
          { s: 'solar', f: 'neutral', t: "I learned a lot from you." }
        ] }
      ] },
      { n: "For a while they sat. The ward did its afternoon things around them. A trolley. Someone's radio, low. The old woman in the bed by the door telling the nurse the same thing about her son twice. Shinjiro's eyes kept going to the bed beside his, the made-up one, and away again, the way your tongue goes to a missing tooth." },
      { s: 'shinjiro', f: 'neutral', t: "I told Aki the coffin turned. That's not all of it." },
      { s: 'shinjiro', f: 'neutral', t: "...Somebody came to the door. In the red. Saturday night. I was awake. I'm always awake in it now." },
      { s: 'shinjiro', f: 'neutral', t: "Didn't see anybody. Heard 'em. At the ward door, there, where the light switch is. A woman. Talking soft. Like you'd talk to a kid who was sleeping. She said a name. Not his name. Something he must've got called once. Something nobody'd called him in years." },
      { s: 'shinjiro', f: 'neutral', t: "And the coffin next to me turned over on the bed. Toward the door. Slow. Like a guy rolling over 'cause he heard his wife." },
      { n: "He said it all to the window. He didn't look at the bed. His right hand had closed on the blanket while he talked, slowly, all the way, and she didn't think he knew." },
      { s: 'shinjiro', f: 'sad', t: "I didn't look. That's the thing. I lay there and I didn't look at the door. I could've said something. I could've thrown my water jug at it. I lay there with my eyes shut like a kid and I listened to it be nice to him." },
      { s: 'shinjiro', f: 'neutral', t: "In the morning he was in his bed. Buttoned up in his pajamas. They pulled the curtain round quick, but I saw his face. It was..." },
      { n: "He stopped. He looked for the word and didn't like any of the ones he found." },
      { s: 'shinjiro', f: 'neutral', t: "...Like somebody'd taken him off. Like a glove." },
      { choose: [
        { t: "You couldn't have done anything. You can barely stand.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "Yeah. Doc says that too. Doc doesn't know I climbed six floors of stairs in the dark on the first night." },
          { s: 'shinjiro', f: 'neutral', t: "...I could've done something. I just didn't want to see who was at the door. That's different. Don't let me off for it." }
        ] },
        { t: "(Put your hand over his on the blanket.)", notes: 3, then: [
          { n: "She put her hand over his fist on the blanket. He looked down at it, and then, slowly, the fist came open under her palm, finger by finger, the slow ones last, as if it had only been waiting for someone to tell it the thing it was holding wasn't there anymore." },
          { s: 'shinjiro', f: 'neutral', t: "...Tch. Don't." },
          { n: "He didn't move his hand." }
        ] },
        { t: "Don't sleep in it. Text me. At twelve, and at one.", notes: 3, then: [
          { s: 'shinjiro', f: 'neutral', t: "And say what." },
          { s: 'solar', f: 'neutral', t: "A dot. Anything. So I know you're up." },
          { s: 'shinjiro', f: 'neutral', t: "...Hanni already put me on her rota. By phone. I'm in a box on a whiteboard I can't even see. Aki checks." },
          { s: 'shinjiro', f: 'neutral', t: "Fine. A dot. Twelve and one. You don't answer it. It's not a conversation. It's a dot." }
        ] }
      ] },
      { place: 'Tatsumi Memorial Hospital · Hallway', time: 'After School', bg: 'hospital-hallway-day', soft: true },
      { n: "At five the nurse came round to say visiting hours were over, the small brisk one with her hair in a net, and Solar went out to the desk to sign herself out, because the ward had a book for it, a fat blue ledger by the nurses' station with a pen on a chain, the kind of book nobody reads." },
      { n: "It lay open. She signed under her own name from when she'd come in. And her eye went up the page the way your eye goes up any list, without meaning to, through the afternoon's names, and over onto the facing page, which was Saturday, the tenth." },
      { n: "Visitors. Times in, times out. A daughter. A son. The man who came every day for the old lady by the door. And at the bottom of Saturday, after the last line, below where visiting hours ended, one more entry." },
      { n: "No time in. No time out. In the column for the patient, *Hata*. And beside it, in the column for the visitor's name, one short word, written so hard the pen had gone through the paper in two places and dented the pages under it, so deep she could see the ghost of it on the next three sheets." },
      { n: "She knew that hand. She'd seen it on a cream enrollment form, in a register, on a line for a date of birth: heavy, pressed, a hand that wrote like it was carving. She leaned to read the name. She got the first letter. A round one, an O, pressed so deep it was a little pit in the paper." },
      { s: 'nurse', t: "That's not for visitors, dear." },
      { n: "The nurse closed the book. Not unkindly. She put her hand flat on the cover and left it there, and smiled, and the smile didn't go up to her eyes, and Solar saw that her hand on the blue cloth wasn't quite steady." },
      { s: 'nurse', t: "Somebody signed in to see Mr. Hata on Saturday night. After we'd locked the ward. Nobody let them in. Nobody saw them. The book was in the drawer, and in the morning it was out on the desk, open at that page." },
      { s: 'nurse', t: "He didn't have anyone, you know. No family. Nobody'd been to see him in the eight months he was here. And then somebody came." },
      { n: "She said it the way people say things they've already said to the police and to the doctor and to their own husband in the kitchen at night, the edges worn off from saying. Then she remembered who she was saying it to, a schoolgirl at the desk, and straightened up, and smiled properly." },
      { s: 'nurse', t: "Get home safe. Before dark. They say that on the radio now, don't they? It's good advice." },
      { place: 'Tatsumi Memorial Hospital · Ward', time: 'After School', bg: 'hospital-room', soft: true },
      { n: "She went back to the doorway of the ward before she left. She didn't know why. To say goodbye properly, she told herself, which was a thing she'd failed to do in this building once and had been paying for since." },
      { n: "He hadn't seen her come back. He was sitting with the tray table pulled close and the goal sheet on it and the pen in his right hand, the bad one, held wrong, in a fist, the way a little kid holds a crayon, and he was writing in the box. Slowly. One stroke at a time, his whole arm in it, his tongue at the corner of his mouth." },
      { n: "She couldn't see what. It was one word, maybe two. Short." },
      { n: "He finished. He looked at it for a long moment. Then he turned the sheet face down on the tray table and put his hand flat on top of it, the way the nurse had put her hand on the book, and looked out of the window at the bay with his jaw set, as if daring anyone to ask." },
      { choose: [
        { t: "(Leave without letting him know you saw.)", notes: 3, then: [
          { n: "She left. Quietly, backward out of the doorway, the way you leave a room where somebody is praying. Whatever was on the sheet was his. He'd show her when he could hold it up, or he wouldn't, and either way he'd written it, and that was the part that mattered, and she wasn't going to take it off him by having seen." }
        ] },
        { t: "See you tomorrow.", notes: 2, then: [
          { n: "He jumped. Actually jumped, a whole-body flinch, and his hand pressed down flat on the sheet as if it might blow away." },
          { s: 'shinjiro', f: 'surprised', t: "...How long you been there." },
          { s: 'solar', f: 'neutral', t: "Just now." },
          { s: 'shinjiro', f: 'neutral', t: "...Yeah. Tomorrow. Bring something real. Not Hyein's. Hyein puts sugar in things that don't want it." }
        ] }
      ] },
      { n: "At midnight, in her room at the dorm, with the red coming up through the window like something rising through water, her phone buzzed once on her chest." },
      { n: "A dot." },
      { n: "At one, when the lights came back, it buzzed again. Another dot. And then, a minute later, a third message, which wasn't a dot, which he'd had to type with the slow hand, one letter at a time, she could tell from the minute it took." },
      { phone: [
        { from: 'shinjiro', t: "nobody at the door" }
      ], contact: 'Shinjiro Aragaki' },
      { n: "She looked at it for a long time in the dark. Then she put the phone face down on her chest, and her hand flat on top of it, and lay awake until it was light." }
    ] },
    { after: '4/18', title: '2: one egg', place: 'Tatsumi Memorial Hospital · Ward', time: 'After School', music: 'tender', scene: [
      { bg: 'hospital-room' },
      { n: "He was out of bed. That was the first thing, and it went through her like a bell before she'd even got her shoes off at the ward door: the bed by the window empty, the blanket thrown back, and for one second her whole body knew exactly what an empty bed on this ward meant now, and then she saw him." },
      { n: "He was standing at the window in the gap between his bed and the next one, the made-up one, Mr. Hata's, with one hand on the sill and the other, the bad one, held out in front of him at the height of his chest, palm up, and in the palm of it, wobbling, a plastic cup of water filled to the brim." },
      { n: "He wasn't drinking it. He was holding it. His whole arm was shaking with it, from the shoulder down, a long fine tremor like a wire in wind, and his jaw was set, and the water was going over the lip in a slow drip onto the floor, and he was watching it go over with an expression of absolute hatred." },
      { s: 'shinjiro', f: 'neutral', t: "...Don't say anything. Forty seconds. She wants forty." },
      { choose: [
        { t: "(Count it out loud for him.)", notes: 3, then: [
          { n: "She counted. Out loud, not fast, from where he'd got to, which she guessed was about twenty-two, and he didn't tell her she was wrong, so she wasn't. On thirty the cup tipped and he caught it with the other hand without looking. On thirty-six he put it back in the bad one. On forty he set it down on the sill so hard half of what was left jumped out, and stood with both hands flat on the sill and his head down, breathing like he'd carried something up a hill." },
          { s: 'shinjiro', f: 'neutral', t: "...Forty. Nobody tell her I cheated at thirty." }
        ] },
        { t: "(Stay at the door. Let him do it without an audience.)", notes: 2, then: [
          { n: "She stayed where she was, half behind the curtain, and looked at the floor, and listened to the drip of the water and his breathing and nothing else, until she heard the cup go down on the sill." },
          { s: 'shinjiro', f: 'neutral', t: "...You can come in. I know you're there. You breathe like you're trying not to." }
        ] }
      ] },
      { n: "The therapist came by at the end of it, the woman with the cat lanyard, and wrote something on her clipboard, and looked at the wet floor and then at him and then at Solar, and said he'd held it for forty and it had been forty-one with the catch, and she'd count the catch, this once, because he had a visitor." },
      { s: 'therapist', t: "Next week it's a bowl. Week after, something with a handle. You set the goal. I'm just the one with the clipboard." },
      { s: 'therapist', t: "And I'll want that sheet turned over by Friday. I don't need to read it. You need to have said it." },
      { n: "When she'd gone he sat down on the edge of his bed with his good hand round the wrist of his bad one, the way you'd hold the collar of a dog that wanted to go somewhere, and didn't look at the tray table, where the goal sheet was still lying face down under his water jug, exactly where it had been the week before, with a ring of water dried on the back of it." },
      { choose: [
        { t: "You haven't turned it over.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "It's turned over. It's just turned over the wrong way." },
          { s: 'shinjiro', f: 'sad', t: "...I wrote it. That was the deal. Nobody said I had to look at it after." }
        ] },
        { t: "(Don't look at the sheet. Look at his hand.)", notes: 3, then: [
          { n: "She didn't look at the sheet. She sat down on the chair by the bed and looked at his hand instead, the one he was holding, and he saw her not looking at the sheet, and something in his shoulders unlocked about a quarter of an inch." },
          { s: 'shinjiro', f: 'neutral', t: "...It's better. It doesn't look better. It's better. Last week I couldn't do twenty." }
        ] },
        { t: "Did you eat today?", notes: 3, then: [
          { n: "He looked up at her so fast she thought he'd hurt his neck. Then something went across his face that she'd never seen on it, not in a whole year of him, and it took her a second to place it: he'd been about to ask her the same thing, and she'd got there first." },
          { s: 'shinjiro', f: 'surprised', t: "...That's my line." },
          { s: 'solar', f: 'neutral', t: "Did you?" },
          { s: 'shinjiro', f: 'neutral', t: "Half the rice. All the soup. The fish here's a crime. Did *you*." }
        ] }
      ] },
      { n: "The made-up bed was between them and the window. She couldn't not look at it. White sheet, tight corners, the pillow plumped, the call button looped neatly over the rail. Nobody in it. The nurses had told her last week it would go to whoever came next. Nobody had come next." },
      { s: 'shinjiro', f: 'neutral', t: "They tried. Tuesday. Old guy with a hip. They wheeled him in, he looked at the bed, he said he wanted the corridor. Sat in the corridor for six hours in a wheelchair till they found him somewhere else." },
      { s: 'shinjiro', f: 'neutral', t: "He didn't say why. He didn't have to. Nobody on this ward sleeps before it anymore. You can feel them, at half eleven, lying there with their eyes open, waiting for twelve. Then they're coffins, all of them, and it's just me." },
      { n: "He reached over with the good hand and took hold of the corner of the made-up bed's blanket, and folded it back, and she saw what he wanted her to see." },
      { n: "Under the pillow, tucked in under the edge of it where the nurses wouldn't have looked when they made it up, there was a small tray. A hospital tray, the plastic kind. And on the tray a hospital teacup, the thick white kind with the green line round it, upside down. Waiting." },
      { s: 'shinjiro', f: 'neutral', t: "Wasn't there Friday. Was there Saturday morning. I asked. The nurses didn't do it. Night staff didn't do it. Nobody came on the ward after ten." },
      { s: 'shinjiro', f: 'neutral', t: "I left it. Felt like if I moved it, it'd be like moving a plate somebody set for a guest." },
      { ifRank: { mrsoka: 1 }, then: [
        { n: "Something in the back of Solar's neck went tight and stayed tight. A cup upside down on a tray by a pillow. She'd seen eight of them, in a row, in a house with no dust, in a corridor of beds made up for people nobody had named yet. She didn't say so. She didn't know how she'd have said it. She looked at the cup, and the cup sat there being a cup." }
      ], else: [
        { n: "Something in the back of Solar's neck went tight and stayed tight. It was only a cup. It was a cup on a tray, the way you'd leave one for someone who'd want tea when they woke up. It sat there being a cup, and she didn't want to touch it, and didn't, and couldn't have told anyone why." }
      ] },
      { choose: [
        { t: "(Put the blanket back over it.)", notes: 2, then: [
          { n: "She folded the blanket back over it, carefully, the corner tucked in the way it had been, so the bed looked made and empty again. He watched her do it and nodded, once, as if that were the right answer." }
        ] },
        { t: "Tell Mitsuru.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "Told Aki. Aki'll tell Mitsuru. Mitsuru'll write it on that board of hers in red and nobody'll know what it means. Same as everything else." }
        ] }
      ] },
      { ifEvent: 'eqx-knock', then: [
        { s: 'shinjiro', f: 'neutral', t: "On the full moon. Here too. Every door on this floor. One after another down the corridor, like somebody doing rounds." },
        { s: 'shinjiro', f: 'sad', t: "Mine said Shinji." },
        { n: "He said it to his hand. Nobody on the ward called him that. Nobody but one person in the world called him that, and that person had been across town on the floor of a dorm with his eyes red at the rims saying a dead girl's name back at a door." },
        { s: 'shinjiro', f: 'neutral', t: "Wasn't him. I knew it wasn't him. It was a good impression, though. Right down to the way he says it like he's about to tell me off." },
        { s: 'shinjiro', f: 'neutral', t: "...Didn't tell him. Don't you tell him either." }
      ], else: [
        { s: 'shinjiro', f: 'neutral', t: "I stay up for it. The red. Every night. Sit up in the bed with the light off and watch the door." },
        { s: 'shinjiro', f: 'neutral', t: "Don't look at me like that. Somebody on this ward should be awake when it comes. Last time nobody was, except me with my eyes shut. I'm not doing that twice." }
      ] },

      { place: 'Tatsumi Memorial Hospital · Roof', time: 'After School', bg: 'hospital-rooftop', soft: true },
      { n: "He took her up to the roof after. He wasn't supposed to. He walked the corridor to the fire stairs with his good hand on the rail and his bad one in his pocket, slow, not leaning on her, and she didn't offer, and he was glad she didn't, she could tell. The door at the top had a padlock on it and a sign about authorized personnel. The padlock was open. He said it had been open since the sixth. He said nobody had noticed. He said he'd been up here every afternoon since he could do the stairs." },
      { n: "It was windy on the roof. The bay laid out below them, gray-blue and wrinkled, and the monorail going over it, and far off, on its island, the school. The wind got into her blazer and his hospital shirt and flattened his hair back off his face, which he hated; she watched him push it out of his eyes with the bad hand and not quite manage." },
      { s: 'shinjiro', f: 'neutral', t: "Woke up there. Over by the vents. Six floors. Didn't climb. Didn't walk. Just there, on my back, in the red, with my hand shut, and it was hot, like a stove. Like I'd been holding something that burned." },
      { s: 'shinjiro', f: 'neutral', t: "Told her I'd come get her. That's the last thing I said, before. At home. In the other place." },
      { s: 'shinjiro', f: 'sad', t: "...And then you came up out of a hole on the other side of the bay and two other guys had you by the wrists. I was up here. Couldn't even get down the stairs." },
      { choose: [
        { t: "You got here. That's the coming to get me.", notes: 3, then: [
          { s: 'shinjiro', f: 'neutral', t: "That's a stretch." },
          { s: 'solar', f: 'neutral', t: "You held on. You came through on it. You're the only one who came all the way up the outside of a building." },
          { n: "He looked at her for a long moment with the wind in his face. Then he snorted, quietly, and looked away at the bay, and his ears had gone red, which could have been the wind." }
        ] },
        { t: "(Take his bad hand out of his pocket and hold it.)", notes: 3, then: [
          { n: "She took his hand out of his pocket. He let her, after a second in which she felt him decide to. It was warm, warmer than it should have been out here, and it didn't close on hers the way it would have last year; it lay in her palm with the fingers half curled, trying, and she felt them try, all four, a small stubborn pressure that came and went like a pulse." },
          { s: 'shinjiro', f: 'neutral', t: "...That's all it's got. That's the whole grip." },
          { s: 'solar', f: 'neutral', t: "It's enough." },
          { s: 'shinjiro', f: 'sad', t: "It's not. But thanks." }
        ] },
        { t: "Next time I'm pulled, you can be first in line.", notes: 1, then: [
          { s: 'shinjiro', f: 'neutral', t: "Don't get pulled." },
          { n: "He said it flat and fast, like slamming a drawer, and then didn't add anything, and didn't look at her, and she understood that it was the closest he was going to get to asking her for anything today." }
        ] }
      ] },
      { n: "They stood by the rail and didn't say anything for a while. The wind went round them. Down on the street someone's radio was playing something old, and a bus pulled in at the stop, and pulled out, and the whole ordinary afternoon went on under them as if nothing had ever knocked on anything." },
      { n: "Then he said, without looking at her, to the bay," },
      { s: 'shinjiro', f: 'neutral', t: "The kitchen downstairs. The staff one. There's a gas ring. The cook on lates is from Osaka, she lets me sit in there. Says I look like a man who's been away from a stove." },
      { s: 'shinjiro', f: 'neutral', t: "...Bring an egg. Next time. One egg." },
      { n: "He said it like it cost him money. Like it was the first thing he'd asked anybody for since February, and maybe since a long time before February, and she understood, standing on the roof in the wind, that it was. Not *come back*. Not *stay*. Not anything about her at all. One egg, for him, so he could find out what his hand could do with it." },
      { choose: [
        { t: "One egg. I'll bring it.", notes: 3, flag: 'eqx-shinji-egg', then: [
          { s: 'shinjiro', f: 'neutral', t: "...Yeah. Good. Brown, if they've got it. Don't tell Aki. He'll bring a dozen and stand there watching." },
          { n: "The corner of his mouth went, very slightly, the way it went about four times a year, and he turned and went back to the stairs before she could see it finish." }
        ] },
        { t: "Two eggs. One for you, one for when you drop the first.", notes: 3, flag: 'eqx-shinji-egg', then: [
          { s: 'shinjiro', f: 'happy', t: "...Hah." },
          { n: "It was barely a sound. It was the first time she'd heard him laugh since he woke, and it came out of him short and rusty and surprised, like a door nobody had used in a long time, and he looked as if it had surprised him too." },
          { s: 'shinjiro', f: 'neutral', t: "Fine. Two. If I drop the first one you don't say anything." }
        ] }
      ] },

      { place: 'Iwatodai Dorm', time: 'Late Night', bg: 'solar-dormroom-night', soft: true },
      { n: "At twelve her phone buzzed on her chest. A dot. She lay in the dark with the red coming up through the window and her hand flat on the phone and waited for the hour to be over, the way she waited every night now." },
      { n: "At one it buzzed again. Not a dot." },
      { phone: [
        { from: 'shinjiro', t: "you eat" }
      ], contact: 'Shinjiro Aragaki' },
      { n: "No question mark. He'd never in his life used one. She typed back *yes* and then, after a second, *did you*, and lay there with the phone on her chest until it buzzed again, a whole minute later, the slow hand." },
      { phone: [
        { from: 'shinjiro', t: "cup's still there" }
      ], contact: 'Shinjiro Aragaki' },
      { n: "She didn't ask which cup. She didn't need to. She lay awake until the window went gray, thinking about a tray under a pillow on a bed nobody would sleep in, and somebody who'd come onto a locked ward in the night just to make it up nicely, and leave a cup turned down by the pillow, the way you'd leave one for a guest you were sure was coming." }
    ] },
    { after: '6/2', title: '3: by winter', place: 'Tatsumi Memorial Hospital · Treatment Room', time: 'After School', music: 'tender', scene: [
      { bg: 'hospital-treatment-room' },
      // BG: hospital-treatment-room stands in for the outpatient therapy room (parallel bars, a window onto the car park in rain).
      { n: "They'd let him out, but they hadn't let him go. Twice a week he went back up the hill to Tatsumi Memorial for what the leaflet called outpatient therapy and he called *the putty*, and twice a week somebody from the dorm went with him, which he said was ridiculous, and which he had stopped saying after the second week, when it had turned out the walk back down the hill was harder than the walk up." },
      { n: "Today it was her. Akihiko had asked, at the sink again, with his back to her again, and she'd said yes before he finished, and he'd looked so relieved she'd pretended not to see it." },
      { n: "The therapy room was on the ground floor at the back, a long bright room that smelled of rubber mats and the lemon stuff they cleaned them with, with parallel bars down the middle and a window onto the car park, where the rain was coming down on the cars in a fine steady sheet. The therapist with the cat lanyard had him at a table by the window with a bowl of dried beans and a pair of chopsticks." },
      { n: "Beans from the bowl to the cup. One at a time. With the right hand." },
      { s: 'shinjiro', f: 'neutral', t: "Don't say anything. This is the worst thing that's ever been done to me, and I've been in a coma." },
      { choose: [
        { t: "(Sit across from him. Count the beans going in.)", notes: 3, then: [
          { n: "She sat down across the table and counted. Not out loud this time. Just with her eyes, every bean that made it, and he could see her doing it, and every time one dropped and skittered off across the table his jaw went tight and his eyes flicked up at her and down again, and she didn't move her face at all, which was, she understood, the only kind of help he'd take." }
        ] },
        { t: "You're holding them like a pen.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "I'm holding them like a man who's got three fingers that listen and one that's on strike. You want to try?" },
          { s: 'solar', f: 'neutral', t: "No." },
          { s: 'shinjiro', f: 'happy', t: "...Smart." }
        ] }
      ] },
      { n: "Eleven beans in five minutes. The therapist wrote it down and said it was three more than last week, and he said it was three beans, and she said three beans was three beans, in the tone of a woman who'd had this exact conversation with a great many large angry men and had never once lost it." },
      { n: "Then she took a sheet out of her folder and put it on the table in front of him, face up, with a pen on top." },
      { s: 'therapist', t: "New one. Summer's nearly done as far as your hand's concerned, so we look further. Same as before. You set the goal. I'm just the one with the clipboard." },
      { n: "*What do you want to be able to do by winter?*" },
      { s: 'therapist', t: "Friday. I don't need to read it. You need to have said it. Same deal as the first one." },
      { n: "She went to see to an old woman on the parallel bars. Shinjiro looked at the sheet. He didn't touch it. He looked at it the way he'd looked at Mrs. Oka's rice cakes on the counter in the dorm kitchen, close, and still, as if it might be made of something it shouldn't be." },
      { s: 'solar', f: 'neutral', t: "Did you ever turn the first one over?" },
      { s: 'shinjiro', f: 'neutral', t: "It's in my coat. I know what it says. I wrote it." },
      { s: 'shinjiro', f: 'neutral', t: "...Doesn't mean I've read it." },
      { n: "He folded the new one in half without writing anything on it and put it in the other pocket. Not the one with the first one in it. The other one. As if they shouldn't be kept together. As if they might talk." },

      { place: 'Tatsumi Memorial Hospital · Hill Road', time: 'Afternoon', bg: 'hospital-outside', soft: true },
      { n: "The walk down the hill was the hard part. The rain had eased to a drizzle and the pavement was slick with it, and he went down it the way he'd gone down the stairs on the day he left, carefully, all his weight on the left, his right hand in his coat pocket closed round the folded sheet as if it might try to get out." },
      { n: "She didn't take his arm. She'd done that once in the first week and he'd gone so still and so polite that she'd let go at once and never tried again. She walked on his right side instead, close, and slow, and every so often their shoulders touched, and he didn't move away, and she understood that that was the arm." },
      { ifEvent: 'eqx-second-hill', then: [
        { s: 'shinjiro', f: 'neutral', t: "My hand went twice. On the rope. On the full moon." },
        { s: 'shinjiro', f: 'neutral', t: "First time I didn't say anything and nearly took the kid under me down with me. Second time I said it. *Hand's going.* Out loud. Like a radio." },
        { s: 'shinjiro', f: 'sad', t: "...Never said that kind of thing before. Never had to. Turns out it's not hard. It's just embarrassing. And it works." }
      ], else: [
        { s: 'shinjiro', f: 'neutral', t: "Mitsuru wants me on the rope by the full moon. Aki wants me on the rope yesterday. The doctor wants me on the rope next year." },
        { s: 'shinjiro', f: 'neutral', t: "Nobody's asked the hand." }
      ] },
      { choose: [
        { t: "What does the hand want?", notes: 3, then: [
          { s: 'shinjiro', f: 'neutral', t: "...To be left alone, mostly. And a pan." },
          { n: "He said it before he could stop himself, and heard it, and looked at the rain with the expression of a man who'd just let something out of a box he'd sat on for two months." }
        ] },
        { t: "(Walk a little closer on his right side.)", notes: 3, then: [
          { n: "She walked a little closer. Their shoulders stayed touching now, all the way down, through his coat and her blazer, and he didn't say anything about it, and at the bottom of the hill, at the crossing, when the light was red, he leaned on her, just slightly, just for the length of the light, and then stood up straight again as it went green, as if it hadn't happened." }
        ] }
      ] },
      { ifFlag: 'eqx-shinji-egg', then: [
        { n: "In April she'd brought the egg to the staff kitchen, brown, as ordered, and the first one had gone on the floor, as she'd promised it would, and she'd said nothing, as she'd promised she wouldn't. The second had gone in the pan. It had taken him eleven minutes to crack it. He'd eaten it standing up, out of the pan, with the late cook from Osaka watching from the door with her arms folded and her eyes wet, and nobody had said anything about that either." }
      ] },

      { place: 'Iwatodai Dorm · Kitchen', time: 'Evening', bg: 'iwatodaidorm-kitchen', soft: true },
      { n: "He went straight to the kitchen. He always went straight to the kitchen now, before his room, before his coat was off; it was where he took his coat off, over the back of the chair by the door, the one nearest the hall, which had become his chair the way chairs became people's in a house without anybody deciding." },
      { n: "Ken was at the table doing homework. He looked up when they came in and his whole face lit, and then he looked at Shinjiro's hand in his coat pocket and at the rain on his shoulders and the light in his face went careful, the way a child's does when it has learned too early to read a room." },
      { s: 'ken', f: 'happy', t: "How many beans?" },
      { s: 'shinjiro', f: 'neutral', t: "Eleven." },
      { s: 'ken', f: 'happy', t: "That's three more than last week!" },
      { s: 'shinjiro', f: 'neutral', t: "...Why does everybody know about the beans." },
      { ifEvent: 'eqx-last-grain', then: [
        { n: "There was a plate at Ken's elbow with two slices of toast on it, burnt black at the edges, cut into triangles. Ken hadn't eaten anything soft since the river street. Not rice, not bread unless it had been made hard first, not the omelet Fuuka tried on the second morning, which he'd pushed away so politely it had made her cry. Shinjiro burnt him toast. Every afternoon, every morning, on purpose, black at the edges, and put it down beside him without saying anything, and Ken ate all of it, every time, crusts and all, and that was all either of them had ever said about it." }
      ] },
      { n: "The tin was on the counter by the rice cooker. Cranes. The dent. Shinjiro took the lid off it without looking at it, the way you'd check a smoke alarm, and counted, and put the lid back on." },
      { s: 'shinjiro', f: 'neutral', t: "Twelve. Was fourteen Monday." },
      { s: 'solar', f: 'neutral', t: "You count them?" },
      { s: 'shinjiro', f: 'neutral', t: "Somebody should." },
      { n: "He got the eggs out. Three, brown. The square pan, the one for rolled omelets, which nobody but him had ever known what to do with. The bowl, the chopsticks, the little bottle of mirin from the back of the cupboard where he'd hidden it from Junpei last year and found it again, exactly where he'd left it, a year and a world and a coma later." },
      { s: 'shinjiro', f: 'neutral', t: "Sit. You're eating. Don't argue, you didn't have lunch, I watched you not have it." },
      { choose: [
        { t: "(Sit. Let him cook.)", notes: 2, then: [
          { n: "She sat at the table by Ken and let him cook, and watched him do it, which was its own kind of meal: the slow left hand and the stubborn right, the eggs cracked one-handed on the edge of the bowl with a click and a twist he'd never lost, the chopsticks going round, the hiss of the pan, the long patient business of rolling, folding, pouring again, rolling. The right hand dropped the chopsticks twice. He picked them up twice without looking round." }
        ] },
        { t: "(Get up. Hold the pan handle steady for him.)", notes: 3, flag: 'eqx-shinji-pan', then: [
          { n: "She got up and stood beside him at the stove and put her hand on the pan handle, just over his, where his right hand was holding it with three fingers and the fourth on strike, and he stiffened, and didn't take his hand away, and didn't tell her to sit down." },
          { n: "They rolled it together. His hand under hers on the handle, hers steadying it, his left doing the chopsticks, and the pan tilted when he needed it tilted, because she could feel in the back of his hand when he needed it before he did, and he could feel her feel it, and neither of them looked at the other for the whole length of the omelet." },
          { s: 'shinjiro', f: 'neutral', t: "...You're not bad at this." },
          { s: 'solar', f: 'neutral', t: "You taught me." },
          { s: 'shinjiro', f: 'sad', t: "I taught you to cut onions. This I never showed anybody." }
        ] }
      ] },
      { n: "He put it in front of her on a plate, cut into thick yellow slices, steaming, sweet with the mirin, the edges just brown. He put the second plate in front of Ken. He didn't make one for himself. He leaned on the counter with his arms folded and watched her eat, and she ate all of it, because she knew she was being watched for exactly that, and when the plate was empty something in his shoulders let go." },
      { s: 'shinjiro', f: 'neutral', t: "Good." },
      { n: "Ken took his plate to the sink and went upstairs with his homework, very loudly, on purpose, closing two doors on the way, which was the most tactful thing Solar had ever seen a child do, and the kitchen was quiet except for the rain on the window and the tick of the gas ring cooling." },
      { n: "Shinjiro took the folded sheet out of his coat pocket. The new one, not the old one. He opened it out flat on the counter between them with his bad hand and smoothed it with the side of his fist and put the pen on it." },
      { n: "*What do you want to be able to do by winter?*" },
      { s: 'shinjiro', f: 'neutral', t: "...You do it." },
      { s: 'solar', f: 'neutral', t: "Do what?" },
      { s: 'shinjiro', f: 'neutral', t: "Fill it in. Write something. Whatever you want. She said I don't have to look at it. I'll hand it in. I'll do whatever it says." },
      { n: "He said it to the sheet. He said it fast and flat, the way he'd said *bring an egg* on the roof in April, as if it were costing him money, and she understood that it was the second thing he'd asked anybody for in a very long time, and that it wasn't for him. It was the opposite. He was asking her to want something for him so he wouldn't have to." },
      { s: 'shinjiro', f: 'sad', t: "I'm no good at that question. I never was. Nobody ever asked it and I never thought there'd be a winter to ask it about. You're good at it. You want things for people all the time. Just do one for me." },
      { n: "The pen lay on the paper between them. The gas ring ticked. Outside, the rain had picked up again and was running down the window in long bent lines, and the lamp over the counter made a warm circle with the two of them inside it and the sheet in the middle, white, empty, waiting, like a plate set for somebody who hadn't come yet." },
      // CG: eqx-by-winter — a dorm kitchen at evening in the rain, a tall young man in a long coat leaning on a counter, a blank form and a pen lying between him and a girl under a single warm lamp, an empty omelet pan on the stove behind them.
      { choose: [
        { t: "(Write it for him. *Be here next summer.*)", notes: 3, tally: { cakes: 1, 'asks.shinjiro': 'yes' }, then: [
          { n: "She picked up the pen and wrote it, in the neat print she used for forms, so the therapist could read it. *Be here next summer.* She turned the sheet round so it faced him." },
          { n: "He looked at it for a long time. He didn't say anything. Then he folded it once, carefully, along the line it already had, and put it back in his pocket, the other pocket, not the one with the first sheet, and kept his hand on it." },
          { s: 'shinjiro', f: 'neutral', t: "...Fine. That's what I'm doing, then." },
          { s: 'shinjiro', f: 'happy', t: "Easy. Somebody else decides. I should've tried that years ago." },
          { n: "He said it lightly. It was the lightest she'd ever heard him sound. He turned round to the sink and ran the water over the pan and stood there with his back to her and his shoulders down, easy, a man with one less thing to carry, and she sat at the table and watched him and felt, for no reason she could name, as if she'd just signed something for somebody who couldn't read." }
        ] },
        { t: "No. I'm not doing your homework.", notes: 2, tally: { 'asks.shinjiro': 'no' }, then: [
          { s: 'shinjiro', f: 'neutral', t: "...Right." },
          { n: "He folded the sheet up again, blank, and put it back in his pocket, and turned to the sink, and ran the water hard over the pan, harder than it needed, and she watched the back of his neck go red." },
          { s: 'shinjiro', f: 'neutral', t: "Forget it. Stupid thing to ask. I'll put *hold a cup*. She'll like that. It's measurable." },
          { n: "He didn't look round for a long time. When he did, he'd put it away, whatever it had been, the way he put everything away, and he asked her if she wanted tea in a perfectly ordinary voice, and it was worse than if he'd shouted." }
        ] },
        { t: "It's yours. Whatever you put, it's yours. I'll stand here while you write it.", notes: 2, tally: { choose: 1, 'asks.shinjiro': 'choose' }, then: [
          { s: 'shinjiro', f: 'neutral', t: "...That's not what I asked." },
          { s: 'solar', f: 'neutral', t: "I know." },
          { n: "He stared at her. For a second she thought he'd walk out. His jaw went, and his good hand closed on the edge of the counter, and he looked at the sheet as if it had insulted him personally, and then, with an enormous slow bad-tempered sigh that seemed to come up from his boots, he picked up the pen. With the right hand." },
          { n: "It took him twenty minutes. He held the pen in his fist like a child and his arm shook from the shoulder and he swore under his breath at every letter and twice threw the pen down and twice picked it up, and she stood at the counter beside him the whole time and didn't help and didn't look, and the omelet pan went cold on the stove, and the rain went on, and Ken came down once and saw them and went back up without a sound." },
          { n: "When he'd finished he turned the sheet face down on the counter without letting her see it, and sat down hard in his chair by the door, and put his face in his good hand." },
          { s: 'shinjiro', f: 'sad', t: "...That was worse than the beans." },
          { s: 'shinjiro', f: 'neutral', t: "Don't look at it. I'm not ready for anybody to have looked at it. Including me." }
        ] }
      ] },
      { n: "She stayed till Junpei came in, loudly, wanting dinner, and Shinjiro got up and started making it without a word, left-handed, and she set the table for him, all the way round, nineteen places, and he watched her do it and said nothing, and when she put the last plate down at the chair by the door, his chair, he reached over and moved it one place in, away from the hall, toward hers." },
      { choose: [
        { t: "(Stop him by the sink. Kiss him, quickly, before Junpei turns round.)", notes: 3, flag: 'eqx-shinji-sink-kiss', then: [
          { n: "She caught his coat sleeve by the sink with Junpei's back to them, rummaging in the fridge and narrating it, and pulled him down the four inches it took and kissed him, quick, at the corner of his mouth, and let go." },
          { n: "He stood there with a ladle in his good hand and looked at her as if she'd done something to his stove. Then his ears went, and his neck, and he turned back to the pot, and stirred it much harder than it needed, and the corner of his mouth went, the way it went about four times a year, and didn't come back down for the whole of dinner." },
          { s: 'shinjiro', f: 'neutral', t: "...You eat. Then go away. Before I burn this." }
        ] },
        { t: "(Sit in the chair beside his. Leave the one by the door empty.)", notes: 2, then: [
          { n: "She sat in the chair beside his, and the one by the door stayed empty all through dinner, and every time somebody went to sit in it he looked up, and they changed their minds, and nobody knew why, and nobody asked." }
        ] }
      ] },
      { n: "At one, after the red had come and gone, her phone buzzed on her chest." },
      { phone: [
        { from: 'shinjiro', t: "you ate" }
      ], contact: 'Shinjiro Aragaki' },
      { n: "No question mark. For once it wasn't a question at all. She'd eaten. He'd watched her do it. He was just telling her, at one in the morning, in case she'd forgotten, the way you'd tell someone the door was locked." }
    ] },
    { after: '6/16', title: '4: nineteen', place: 'Iwatodai Dorm · Kitchen', time: 'Evening', music: 'tender', scene: [
      { bg: 'iwatodaidorm-kitchen' },
      { n: "The rain had been coming down for nine days. Not hard. Just steadily, the way it did in June, a gray fine rain that didn't so much fall as hang, so that the kitchen window was never quite wet and never quite dry and the whole dorm smelled of towels that wouldn't finish drying on the radiators. Somebody's sneakers were stuffed with newspaper by the back door. The rice cooker had fogged up its own lid." },
      { n: "He was at the table by the door, in his chair, with a pencil in his right hand and the back of a takeout menu flat under his left, writing a list. Slowly. She could see the letters from the doorway, big and leaning and gone over twice where the pencil had skidded, a column of them running down the white side of the menu and turning the corner onto the printed side, over the photographs of the set lunches." },
      { s: 'shinjiro', f: 'neutral', t: "Nineteen people. Twenty-one on a Sunday, the guesthouse lot come up. Every one of 'em eats like they've been locked in a cupboard." },
      { s: 'shinjiro', f: 'neutral', t: "...Supermarket closes at ten. Need hands. Two of 'em. Working ones." },
      { n: "He didn't look up when he said it. He said it to the list, the way he'd said *bring an egg* to the bay, and pressed so hard on the last word that the pencil lead snapped, and he looked at the broken end with the expression of a man who'd been personally insulted by graphite." },
      { choose: [
        { t: "I've got two. Let's go.", notes: 3, then: [
          { s: 'shinjiro', f: 'neutral', t: "...Yeah. Get a coat. The good umbrella's Aki's. Take it, he won't notice till Thursday." }
        ] },
        { t: "You asked. Out loud. I want that noted.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "Don't. You sound like Aki." },
          { s: 'shinjiro', f: 'neutral', t: "...It's groceries. It's not asking. It's logistics." }
        ] },
        { t: "(Sharpen the pencil for him while he gets his coat.)", notes: 3, then: [
          { n: "She took the pencil out of his hand and sharpened it over the bin with the little plastic sharpener from the drawer, which had been Fuuka's last year and was everybody's now, and gave it back with a point on it you could have stitched with. He looked at the point. He looked at her." },
          { s: 'shinjiro', f: 'neutral', t: "...You do that for everybody?" },
          { s: 'solar', f: 'neutral', t: "Just people with lists." }
        ] }
      ] },
      { ifChoice: { 'asks.shinjiro': 'yes' }, then: [
        { n: "He got up. On the way past the counter he patted the pocket of his coat, the right one, where the winter sheet lived, folded in four with her handwriting on the inside of it, and he did it without looking, the way you'd pat for your keys." },
        { s: 'shinjiro', f: 'happy', t: "Sheet says I'm here next summer. So I gotta feed you lot till then. Easy." },
        { n: "He said it lightly. He'd said everything lightly since that night. He'd gone up and down the stairs lightly and carried Ken's schoolbag lightly and stood at the stove at six in the morning lightly, and Solar watched him go out into the hall to get his boots on, and thought that she'd never in two years seen him move like a man with nothing in his pockets, and that she didn't like it as much as she'd have guessed." }
      ] },
      { ifChoice: { 'asks.shinjiro': 'no' }, then: [
        { n: "He got up. On the way past the counter he picked up a mug from the drying rack with his right hand, a full one, somebody's cold tea, and held it out level in front of him for three seconds without spilling, and put it down again, and didn't look at her while he did it." },
        { s: 'shinjiro', f: 'neutral', t: "*Hold a cup.* Handed it in Friday. She gave me a gold star. An actual sticker. I'm nineteen." },
        { n: "He said it flat, like a weather report. It had been a week. Neither of them had said anything about the kitchen since, and the mug sat on the counter between them being a mug, and he went out to find his boots." }
      ] },
      { ifChoice: { 'asks.shinjiro': 'choose' }, then: [
        { n: "He got up. On the way past the counter his hand went to the right pocket of his coat, the one with the winter sheet in it, folded small, still face in, the twenty minutes of it, and stopped there for a second, flat, the way you'd put a hand over somebody's mouth who was about to say something in company." },
        { n: "He didn't say anything about it. He hadn't since. She didn't know what was on it, and he didn't know she didn't mind, and they went out to the hall to find their shoes like two people carrying something between them they'd agreed not to look down at." }
      ] },

      { place: 'Iwatodai · Supermarket', time: 'Evening', bg: 'iwatodai-supermarket', soft: true },
      { n: "The supermarket on the strip at eight at night in the rain was a box of white light with the windows steamed, and the doors sighed open for them and let out a breath of cold air and frying oil from the deli counter, and the music overhead was the same song it had been playing last year, a cheerful jingle about tofu that nobody had ever heard all the way through." },
      { n: "He knew it the way he knew a kitchen. He went round it without a basket, she carried the basket, and he took things off the shelves without seeming to look at them and put them in it without asking: onions, a whole net, potatoes, carrots, the cheap pork, the good soy sauce and not the other one. He turned tomatoes over in his bad hand, testing them with the three fingers that listened, and put two back, and she didn't know what he'd felt in them that she couldn't see, and didn't ask." },
      { n: "At the rice he stopped. Ten-kilo sacks, stacked on a pallet. He looked at them the way Akihiko looked at a heavy bag on a day the doctor had said no." },
      { s: 'shinjiro', f: 'neutral', t: "...Used to carry two of those. One each shoulder. From here to the dorm without putting 'em down. Mitsuru timed me once. Don't remember why." },
      { choose: [
        { t: "(Take one off the stack before he can try.)", notes: 2, then: [
          { n: "She hauled one off the top and dropped it into the cart with a thud that made the whole cart roll a foot, and he watched it go, and his jaw did the thing it did, and then he let out a breath through his nose that might, in a better light, have been a laugh." },
          { s: 'shinjiro', f: 'neutral', t: "...Left shoulder on the way back. I'm not having you carry rice up the hill. Ken'll never let me hear the end of it." }
        ] },
        { t: "Try the left. Just the left.", notes: 3, then: [
          { n: "He looked at her. Then he bent and got his left arm under a sack and stood up with it in one movement, onto his shoulder, easy, and held it there, and for one second he was the boy from the alley last year again, big and sure and leaning on nothing, and she saw him feel it, and saw him not let his face say so." },
          { s: 'shinjiro', f: 'neutral', t: "...Yeah. That one still works." }
        ] }
      ] },

      { n: "At the end of the tea aisle there was an old man with a cane." },
      { n: "She didn't know him. Shinjiro did; she felt him know him, a hitch in his stride beside her. A small man in a cardigan buttoned wrong, a hospital bracelet still on his wrist that nobody had cut off, a basket on his arm with a single box of green tea in it. The old man with the hip, from the ward in April, who'd sat in a wheelchair in the corridor for six hours sooner than sleep in the bed by the window. He was standing up now. He looked well. He looked, if anything, a little too well, pink in the cheeks, his cardigan tight over a stomach that she didn't remember." },
      { s: 'shinjiro', f: 'neutral', t: "...Kuroda-san." },
      { n: "The old man looked at him for a moment as if he couldn't place him, and then could, and smiled, wide, the smile of a man who'd been somewhere nice." },
      { s: 'kuroda', t: "The big lad from the window bed! On your feet. Look at that. They said you'd never." },
      { s: 'kuroda', t: "I'm only in for tea. Don't need much else these days. There's a widow on the river side does supper for anybody who turns up, you'll have heard. Lovely house. Old. She took one look at me in the rain on Tuesday and said, *stay till the rain stops, grandfather*. And it's June, isn't it. It hasn't stopped." },
      { n: "He laughed. It was a good laugh, a warm one, the laugh of a man who'd been fed. Shinjiro didn't laugh. He'd gone still beside her, the cart handle in his left hand, the way he'd gone still in the kitchen on the day of the discharge with a rice cake between two fingers." },
      { s: 'kuroda', t: "I've been every night since. Wouldn't miss it. She keeps a cup for me. You know the way they do, for a guest. Upside down by the plate, so the dust won't get in." },
      // CG: eqx-tea-aisle — a brightly lit Japanese supermarket aisle at night in the rain, a small old man in a wrongly buttoned cardigan smiling with a single box of tea in his basket, a tall young man in a long coat gone very still behind a cart with a rice sack in it.
      { choose: [
        { t: "Kuroda-san. Eat at home tonight.", notes: 3, flag: 'eqx-shinji-kuroda-warned', then: [
          { s: 'kuroda', t: "Home? Ha. It's not a home, love, it's a room. A room with a kettle in it and a picture of my wife. She doesn't cook." },
          { s: 'kuroda', t: "...You're a kind girl. Both of you are kind. Don't look like that. I'm only having my supper." },
          { n: "He patted her arm, twice, and went off toward the tills with his tea, leaning on the cane, not hurrying. At the door he stopped and looked out at the rain and smiled at it, as if it were doing him a favor." }
        ] },
        { t: "Is the food good?", notes: 1, then: [
          { s: 'kuroda', t: "Good? It's the best I've had in my life. And I was married forty years to a woman who could cook." },
          { s: 'kuroda', t: "...Funny. I can't say what any of it was. I go home and I couldn't tell you. Just that it was good, and there was more." },
          { n: "He went off toward the tills with his tea, leaning on the cane, humming something under his breath, a slow tune, three notes going down and two coming back, that Solar knew from somewhere and couldn't place, and didn't want to." }
        ] },
        { t: "(Look at Shinjiro.)", notes: 2, then: [
          { n: "She looked at him. He wasn't looking at the old man. He was looking at the box of tea in the basket, at the bracelet on the thin wrist, at the cardigan buttoned wrong, the way he'd looked at the made-up bed on the ward for seven weeks, and he said, very quietly, not to her," },
          { s: 'shinjiro', f: 'neutral', t: "...Eat at home, old man." },
          { s: 'kuroda', t: "Eh? Speak up, lad, I'm deaf on that side." },
          { s: 'shinjiro', f: 'neutral', t: "Nothing. Mind the step out. It's wet." }
        ] }
      ] },
      { n: "When he'd gone Shinjiro stood in the aisle for a long moment with the cart. Then he took a second box of the same tea off the shelf, the same brand, and looked at it, and put it back, very precisely, so the label faced front like the others." },
      { s: 'shinjiro', f: 'neutral', t: "...He wouldn't take the bed. In April. Sat in a corridor six hours sooner than lie down by that window. Smartest man on the ward." },
      { s: 'shinjiro', f: 'sad', t: "And now he's walking to her house every night in the rain. Because she asked nice." },

      { place: 'Iwatodai Strip · Ironmonger', time: 'Evening', bg: 'iwatodai-strip-rain', soft: true },
      { n: "They came out with four bags and the rice. The strip was all wet light, the neon from the ramen place and the pharmacy lying in long smeared colors on the pavement, umbrellas going past at the height of her eyes. Three doors down from the supermarket there was an ironmonger's she'd never once been into, a narrow shop with a shutter half down and the window still lit, pots and kettles and garden shears and a single cast-iron frying pan on a stand at the front, black, heavy, with a wooden handle gone dark from somebody's hand before it was ever on sale." },
      { n: "He stopped in front of it. He had the rice on his left shoulder and two of the bags in his left hand, and the right in his coat pocket, and he stood in the rain in front of the lit window and looked at the pan the way she'd seen people look at a boat, or a car, or a house on a hill, not like they wanted it, exactly. Like they were checking it was still there." },
      { s: 'shinjiro', f: 'neutral', t: "...That's a good pan. Cast. Old stock. You season one of those right, it'll outlive you." },
      { n: "He didn't go in. He didn't move. The price was on a little card at its foot in a careful hand, and it was a lot, more than a week of his clinic money, and the pan was heavier than anything his right hand had lifted since February, and he knew both of those things, and stood there anyway, with the rain running off the edge of the awning onto his shoulder." },
      { choose: [
        { t: "(Go in and buy it. Don't ask.)", notes: 3, flag: 'eqx-shinji-iron-pan', then: [
          { n: "She put her bags down at his feet, in the dry, and went in under the shutter before he could say anything, and he said something anyway, her name, sharp, and she pretended she was deaf on that side. The old woman behind the counter wrapped the pan in newspaper and string with the slowness of somebody who'd been wrapping pans in that shop since before the war, and Solar paid, and came out, and held it out to him in both hands, wrapped, like a baby somebody was handing over at a door." },
          { s: 'shinjiro', f: 'neutral', t: "...That's money. That's a lot of money. That's not yours to spend on—" },
          { s: 'solar', f: 'neutral', t: "It's mine. I spent it." },
          { n: "He looked at the pan for a long time, in its newspaper. He didn't take it. He couldn't have, with the rice and the bags; he had no hand free but the bad one. So she put it in the crook of his left arm on top of the bags, where it lay heavy against his chest, and he stood there holding all of it, and the corner of his mouth went, and came back, and went." },
          { s: 'shinjiro', f: 'neutral', t: "...Can't lift it. You know that. Can't lift it with the right." },
          { s: 'solar', f: 'neutral', t: "Not yet." },
          { n: "He didn't answer that. He just stood with it against his chest in the rain, the way he'd held Ken's head against his coat on the riverbank, as if something might try to take it off him." }
        ] },
        { t: "You want it.", notes: 3, then: [
          { s: 'shinjiro', f: 'neutral', t: "...Wanting's not the same as anything. You can want a lot of stuff. Doesn't mean you get to have it." },
          { s: 'solar', f: 'neutral', t: "That's not what I said. I said you want it." },
          { n: "He looked at her sideways, under the wet edge of his hair. For a second she thought he'd tell her to drop it. Then he looked back at the pan." },
          { s: 'shinjiro', f: 'sad', t: "...Yeah. Okay. I want it. There. Happy." },
          { s: 'shinjiro', f: 'neutral', t: "Felt stupid saying it. Felt stupid all the way down. Don't know how you lot do it every day." }
        ] },
        { t: "(Pretend you didn't see him stop.)", notes: 1, then: [
          { n: "She walked on a few steps, slowly, looking at the rain, and let him stand there, and after a minute she heard his boots behind her on the wet pavement, and he caught her up, and didn't look back at the shop, and didn't say anything about it, and neither did she, and the pan stayed in the window, black and heavy and lit, all the way down the strip behind them." }
        ] }
      ] },

      { place: 'Iwatodai Strip · Under an Awning', time: 'Evening', bg: 'iwatodai-strip-rain', soft: true },
      { n: "Halfway back the rain stopped hanging and came down properly, all at once, the way it did in June when it got bored of being polite, and they ran the last twenty meters to the awning of a shuttered bakery and stood under it with the bags at their feet, the water coming off the edge of the canvas in a sheet a hand's width from their faces, loud as applause." },
      { n: "She knew it before she'd thought it. Not this awning; another one. A year ago, more, the back alley behind the station, a man in a long coat who'd stood under an awning in the rain with her and not said anything for most of an hour, because he didn't know how to say the thing he'd come out to say, which was, it turned out, *thanks*. She looked at him. He was looking at the rain coming off the edge of the canvas, and she watched him find it too, the same afternoon, from the other side." },
      { s: 'shinjiro', f: 'neutral', t: "...Always rains on us. You notice that?" },
      { ifEvent: 'eqx-second-hill', then: [
        { n: "He shifted the rice on his shoulder. His right hand had come out of his pocket and was holding the strap of one of the bags at his feet, and opening, and closing round it, the way he did when he was thinking about something he'd rather not." },
        { s: 'shinjiro', f: 'neutral', t: "On the rope. The full moon. Went twice. I told you. I said it out loud." },
        { s: 'shinjiro', f: 'serious', t: "...What I didn't tell you is what I was thinking, the second time. Hanging there by the left, with the kid under me. I was thinking, *if it goes again I'll let go first*. So I don't take him down with me. Worked it all out. Which way to fall. How to kick off the wall so I'd miss him." },
        { s: 'shinjiro', f: 'neutral', t: "Like it was nothing. Like doing the sums for a recipe." }
      ], else: [
        { n: "He shifted the rice on his shoulder. His right hand had come out of his pocket and was holding the strap of one of the bags at his feet, and opening, and closing round it, the way he did when he was thinking about something he'd rather not." },
        { s: 'shinjiro', f: 'neutral', t: "Mitsuru's got me on the rope next full moon. I practise. Nights. Putty in the dark, two hundred squeezes, then the bed rail, hanging off it by the bad hand till it gives." },
        { s: 'shinjiro', f: 'serious', t: "...Worked out which way I'd fall. If it went. Which wall to kick off so I'd miss whoever's under me. Did the sums in my head lying there. Like it was nothing. Like a recipe." }
      ] },
      { choose: [
        { t: "Don't do the sums for letting go. Do the sums for holding on.", notes: 3, then: [
          { s: 'shinjiro', f: 'neutral', t: "...Those don't add up the same." },
          { s: 'solar', f: 'neutral', t: "Then do them till they do." },
          { n: "He looked at her for a long moment in the noise of the rain. Then he looked down at his right hand on the bag strap, and closed it, and kept it closed, the knuckles going pale, as if trying out the shape of something." }
        ] },
        { t: "(Take his right hand off the strap and hold it.)", notes: 3, then: [
          { n: "She took it. The fingers were cold from the bag and the rain, and they didn't close on hers at once; they lay there, and then, one by one, the slow ones last, they did, the whole hand, round hers, and held on. Not hard. Steady. Steadier than on the roof in April. She could feel the difference in her own bones." },
          { s: 'shinjiro', f: 'neutral', t: "...Better, right? It's better." },
          { s: 'solar', f: 'neutral', t: "It's a lot better." },
          { s: 'shinjiro', f: 'sad', t: "Still not enough to hold a person. Not a whole person. Not yet." }
        ] },
        { t: "You'd have let go to save him. That's the problem. You'd do it without thinking.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "Yeah. Done it before." },
          { n: "He said it simply, the way you'd say you'd been to a place. She knew which place. So did he. Neither of them said the name of the night, or the street, or what he'd stepped in front of, a year and a world ago, with his coat open." },
          { s: 'shinjiro', f: 'neutral', t: "...Didn't think about it then either. Turned out all right. For the kid." }
        ] }
      ] },
      { ifFlag: 'eqx-shinji-sink-kiss', then: [
        { n: "The rain came down. A man ran past with a newspaper over his head and didn't look at them. Shinjiro turned his head and looked at her, close, under the awning, the way he'd looked at her by the sink with the ladle in his hand, as if she'd done something to his stove, and she saw him remember it, and saw his ears start to go." }
      ] },
      { choose: [
        { t: "(Kiss him. Properly this time.)", notes: 3, flag: 'eqx-shinji-awning-kiss', then: [
          { n: "She went up on her toes and kissed him, and it wasn't the corner of his mouth this time, and it wasn't quick. He went absolutely still. Then the rice sack slid off his shoulder and landed on the bags with a thump that must have flattened the bread, and he didn't look down at it, and his left hand came up and held the back of her head, carefully, the way he'd hold an egg, and his right came up too, slower, and found her waist through her wet blazer, and held on there with all four fingers and the thumb, and didn't shake." },
          { n: "It went on for a while. The rain didn't care. When he pulled back his forehead stayed against hers, and he breathed out, long, as if he'd been underwater, and his hair was dripping onto her face." },
          { s: 'shinjiro', f: 'flustered', t: "...Flattened the bread." },
          { s: 'solar', f: 'happy', t: "I'll buy more bread." },
          { s: 'shinjiro', f: 'neutral', t: "Don't spend money on me. I mean it. Don't." },
          { n: "He didn't let go of her waist while he said it. She noticed. He noticed her noticing, and went redder, and bent and picked up the rice with his left arm, and looked out at the rain with the expression of a man who'd lost an argument with himself and wasn't sorry." }
        ] },
        { t: "(Lean on his good side and wait out the rain.)", notes: 2, then: [
          { n: "She leaned on his left side, her shoulder against his arm, and he let her, and after a while he shifted the rice to the other shoulder, the bad one, so she could lean properly, and held it there with his jaw set the whole time, and she knew it hurt, and he didn't let her move, and they stood like that till the rain went back to hanging." }
        ] },
        { t: "(Hold the bag handles up so his bad hand can grip something.)", notes: 2, then: [
          { n: "She picked up the bag he'd been holding and held the handles out to him, and he looked at them, and at her, and took them in his right hand, and they stood there in the noise with him holding the shopping and her holding the other side of the same handles, like two people carrying a stretcher, and neither of them let go of it till the rain eased." }
        ] }
      ] },

      { place: 'Iwatodai Dorm · Kitchen', time: 'Evening', bg: 'iwatodaidorm-kitchen-night', soft: true },
      { n: "He made curry. For nineteen, in the big pot, the one that took two people to lift full, and he let her do the onions, which was the job he'd taught her last year, and stood at her shoulder while she did them, close, not touching, watching her hands." },
      { s: 'shinjiro', f: 'neutral', t: "Thinner. Thinner than that. Long. Let 'em go gold, not brown. Brown's bitter. You want the sweet out of 'em, you have to wait for it. That's the whole trick. Nobody waits." },
      { n: "He told her everything. That was the strange thing. He'd never told anybody anything about how he cooked, he'd stood at a stove for two years with his back to the room like the room had no business knowing. Now he told her when to put the meat in and why, and how much water by the second knuckle, and the apple, grated, a whole one, and the square of dark chocolate at the end that nobody would ever guess, and the spoon of instant coffee, and how long to leave it off the heat before anyone was allowed near it." },
      { s: 'shinjiro', f: 'neutral', t: "Write it down. The chocolate and the coffee. You'll forget the coffee." },
      { s: 'solar', f: 'neutral', t: "Why do I need it written down? You make it." },
      { s: 'shinjiro', f: 'neutral', t: "...If I'm not around. Somebody should know how it goes. Nineteen people. Somebody's got to." },
      { n: "He said it to the pot. He said it the way he'd said *I'm not being sad, I'm counting*, in April, on the ward, and stirred, and didn't look up, and the curry went round and round in the big pot, dark and slow." },
      { choose: [
        { t: "You'll be around.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "Sure. Write it down anyway." },
          { n: "She wrote it down. On the back of his list, under the onions and the pork and the tea he hadn't bought, in her neat print, *coffee*, underlined. He watched her underline it. He didn't say anything else." }
        ] },
        { t: "(Write it down. Then write *ask Shinjiro* under it.)", notes: 3, then: [
          { n: "She wrote it on the back of his list, the whole thing, in her neat print, and at the bottom, under *one spoon instant coffee*, she wrote *if in doubt, ask Shinjiro*, and turned it round so he could read it." },
          { n: "He read it. He read it again. Then he took the pencil out of her hand, the one she'd sharpened, and with his right hand, slowly, leaning, he crossed out *if in doubt* and left the rest." },
          { s: 'shinjiro', f: 'neutral', t: "...There. Ask either way." }
        ] },
        { t: "Then teach me slower. So it takes years.", notes: 3, then: [
          { n: "He stopped stirring. For a second the spoon just stood in the pot. Then the corner of his mouth went, and stayed, and he started stirring again, slower, much slower, so slow it was nearly a joke." },
          { s: 'shinjiro', f: 'happy', t: "...Smart. You're getting smart. I don't like it." }
        ] }
      ] },
      { ifEvent: 'eqx-last-grain', then: [
        { n: "Ken came down at the smell, the way everyone did. He looked in the pot, carefully, and Shinjiro, without turning round, said *it's got chunks, it's not soft, you can have it*, and Ken let out a breath and sat at the table, and Shinjiro put a plate of black toast beside his curry anyway, in case, and Ken ate both, and nobody said anything about that either." }
      ], else: [
        { n: "Ken came down at the smell, the way everyone did, and stood at Shinjiro's elbow looking into the pot with such naked longing that Shinjiro gave him the spoon to taste without being asked, and Ken burned his tongue and said it was the best thing he'd ever had, and Shinjiro said he said that every time, and Ken said it was true every time." }
      ] },
      { n: "The tin was on the counter by the rice cooker. Cranes, the dent in the lid. He took the lid off without looking, the way you'd check the gas, and counted, and put it back." },
      { s: 'shinjiro', f: 'neutral', t: "Nine. Was twelve Friday. Somebody likes 'em." },
      { n: "He didn't say who. He didn't say anything about the old man in the tea aisle, or the cup upside down by the plate. He stood with his hand flat on the lid of the tin a second longer than he needed to, and then took his hand off it and wiped it on his apron, and called up the stairs that it was ready, and nineteen people came down at once like water." },
      { place: 'Iwatodai Dorm', time: 'Late Night', bg: 'solar-dormroom-night', soft: true },
      { n: "At twelve, a dot. At one, after the red, with the rain still going on the window, which it had done all hour without touching the glass, hanging there in the air like beads on threads, the phone buzzed again on her chest." },
      { ifFlag: 'eqx-shinji-iron-pan', then: [
        { phone: [
          { from: 'shinjiro', t: "seasoned it" },
          { from: 'shinjiro', t: "three coats. oil and the oven. dont touch it for a week" },
          { from: 'shinjiro', t: "its heavy" }
        ], contact: 'Shinjiro Aragaki' },
        { n: "She lay in the dark and read it four times. *It's heavy.* No question mark, no anything. Just a fact, sent at one in the morning by a man who'd been standing in a dark kitchen with an oven on, holding something he couldn't lift yet, to find out exactly how far off he was." }
      ], else: [
        { phone: [
          { from: 'shinjiro', t: "you ate" },
          { from: 'shinjiro', t: "old man wasnt at the window bed. he was at hers" }
        ], contact: 'Shinjiro Aragaki' },
        { n: "She read it four times in the dark. She didn't answer. She didn't know what you'd answer to that. She put the phone face down on her chest and lay listening to the rain hang outside the glass, not falling, and thought about a cup by a plate, turned down, so the dust wouldn't get in." }
      ] }
    ] },
    { after: '7/14', title: '5: what grows', place: 'Iwatodai Dorm · Rooftop', time: 'Night', music: 'night', scene: [
      { bg: 'iwatodaidorm-roof-planters' },
      { n: "July came in like someone opening an oven. The rain stopped all at once one Tuesday, as if it had been switched off at the wall, and the next morning the cicadas started up in the trees along the dorm's street at five, every one of them at once, and the heat came up off the pavement before breakfast, and by the middle of the month the dorm had stopped pretending it had air-conditioning on any floor but Mitsuru's." },
      { n: "She found him on the roof. Hanni's rota said ROOF in the box beside his initial, every night that week, in Hanni's small fast hand, and under it, in Akihiko's square capitals, *HE SLEEPS UP THERE NOW. DON'T ASK. — A.*" },
      { n: "The roof garden had been hers, last year, mostly. The long wooden planters along the parapet, the watering can with the cracked rose, the pots someone had abandoned and someone else had filled. She hadn't been up since April. She stopped at the top of the stairs with her hand on the door." },
      { n: "There were things growing in them. In the long planter on the left, a row of something low and frilled and dark purple-green, shiso, she thought, from the smell, which came up warm off the leaves in the evening heat like something being cooked. Spring onions in a pot, gone tall and hollow. And in the corner, staked to a broom handle with strips of what had once been a dish towel, a tomato plant as tall as her shoulder, its stems furred, its leaves curling in the heat, and on it, low down, hanging, three tomatoes the size of walnuts, hard and green." },
      { n: "He was kneeling in front of it with the watering can held in his left hand and his right hand underneath the spout, not holding it, just under it, in case, and he was watering the base of the plant very slowly, the way you'd give water to someone too weak to lift their head, and he hadn't heard the door." },
      { choose: [
        { t: "(Watch him for a minute before you say anything.)", notes: 3, then: [
          { n: "She watched. He finished the tomato and moved on to the shiso, shuffling along the planter on his knees, and pinched off a leaf that had gone yellow with two fingers of the bad hand, carefully, and looked at it, and put it in his pocket instead of over the parapet, as if even that were worth keeping. The sun was going down behind the city in a long red smear. He was talking. Not to her. Under his breath, to the plants, the way Koromaru got talked to, low, gruff, *come on, drink it, don't be stupid*." },
          { n: "When he saw her he stopped talking so fast he nearly bit his tongue." }
        ] },
        { t: "You grew tomatoes.", notes: 2, then: [
          { n: "He jumped. Not much. Enough to slop water over his boot." },
          { s: 'shinjiro', f: 'flustered', t: "...They're not grown. They're growing. There's a difference. Don't jinx it." }
        ] },
        { t: "(Go and kneel beside him in the dirt.)", notes: 3, then: [
          { n: "She went and knelt down beside him on the warm concrete, close, in her school skirt, and didn't say anything, and he looked at her knees in the dust and opened his mouth to tell her she'd ruin them and then didn't, and handed her the can, and moved her hand on it so the water went to the root and not the leaves." },
          { s: 'shinjiro', f: 'neutral', t: "Root. Always the root. Wet leaves in this sun, they burn." }
        ] }
      ] },
      { s: 'shinjiro', f: 'neutral', t: "Put 'em in the week I got out. Seeds from the hundred-yen shop. Tomato, shiso, the onions. Didn't think about it. Had dirt under my nails before I'd thought about it." },
      { s: 'shinjiro', f: 'neutral', t: "...Tomato takes eight weeks. Little over. From seed. I read the packet after." },
      { n: "He looked at the three green walnuts hanging low on the plant. He looked at them the way he'd looked at the pan in the ironmonger's window, in the rain, like he was checking they were still there." },
      { s: 'shinjiro', f: 'sad', t: "Eight weeks. I never planned anything for eight weeks in my life. Never planned anything for next week. And I put these in without thinking, and now every night I come up here and look at 'em and think, *you'd better be around in August, idiot. You started something.*" },
      { choose: [
        { t: "So be around in August.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "...Yeah. Simple, when you say it." },
          { s: 'shinjiro', f: 'neutral', t: "Everything's simple when you say it. That's your trick. Don't think I haven't noticed." }
        ] },
        { t: "You planted something that takes longer than a week. That's the most hopeful thing I've ever seen you do.", notes: 3, then: [
          { n: "He went red. Not his ears. All of him, up from the collar, in the last of the sun." },
          { s: 'shinjiro', f: 'flustered', t: "...It's a tomato." },
          { s: 'solar', f: 'neutral', t: "It's a tomato in August." },
          { s: 'shinjiro', f: 'neutral', t: "Stop. I mean it. I'll throw it off the roof." },
          { n: "He didn't throw it off the roof. He moved the watering can a little further from the edge, in case, and she saw him do it." }
        ] },
        { t: "(Touch one of the green ones. Gently.)", notes: 3, then: [
          { n: "She put one finger under the lowest tomato and felt its weight, hard and warm from the sun, more than it looked. He watched her finger the way he'd watched the surgeon's hands, the one time, through the glass." },
          { s: 'shinjiro', f: 'neutral', t: "Careful. Stem's weak there. Everything's weak there till it isn't." }
        ] }
      ] },
      { ifEvent: 'eqx-tanabata', then: [
        { n: "There was a strip of paper tied to the broom handle, among the dish-towel strips. Green paper, the kind they'd handed out at Naganaki on the seventh, faded now, curling. She knew what was on the back before she turned it over, because every strip in town had had the same thing on the back the morning after; but she turned it over anyway." },
        { n: "The front was blank. He'd hung a blank one. And on the back, in the heavy pressed hand that wasn't his, that wasn't anybody's, one word." },
        { s: 'shinjiro', f: 'neutral', t: "...Didn't write anything. Couldn't think what. Hung it anyway, so the kid would stop looking at me." },
        { s: 'shinjiro', f: 'serious', t: "Didn't matter. It wrote on mine too. Didn't even need me to want something first. Just wrote what it wanted, on the back of nothing." },
        { n: "He'd tied it to the tomato's stake. She didn't ask why. She thought she knew, and didn't like knowing: so he'd see it, every night, while he watered, and remember that something in this town didn't need his permission to write on him." }
      ] },
      { ifEvent: 'eqx-last-grain', then: [
        { n: "He sat back on his heels and wiped his face with the back of his wrist. Below them, through the open window of the kitchen, they could hear Ken at the sink, washing up on his own, the plate and the knife and the toast rack, which he did every night now without being asked, carefully, the way you do a thing so you won't have to think about another one." },
        { s: 'shinjiro', f: 'neutral', t: "Kid's eating burnt toast. Since the river street. I keep burning it. Can't get it black enough for him some mornings." },
        { s: 'shinjiro', f: 'sad', t: "...He found him. You know that. Nobody says it. He was out with the dog at half five and he found him at her table, and he came back up the street with his face like a sheet of paper and asked Aki not to bring Junpei. Eleven. Twelve. Whatever he is. Thinking about Junpei." }
      ] },

      { n: "The light went. The sky over the bay turned that deep thin blue it only turned in July, and then indigo, and the city came on below them window by window, and he unrolled a thin futon from the corner by the water tank, where it had been rolled with his coat and a pillow with no case on it, and sat down on it with his back against the warm concrete of the tank housing, and after a moment, without asking, she sat down beside him." },
      { s: 'shinjiro', f: 'neutral', t: "Too hot inside. And I don't sleep in it. The red. Not since the ward. Up here, at least, if something comes, it comes up the stairs. One door. I can see the one door." },
      { s: 'shinjiro', f: 'neutral', t: "Don't tell Aki I said that. He thinks it's the heat." },
      { s: 'solar', f: 'neutral', t: "Akihiko wrote *don't ask* on the rota." },
      { s: 'shinjiro', f: 'neutral', t: "...Yeah. He knows. He's polite. It's disgusting." },
      { n: "She stayed. Midnight came the way it came now, and she'd come to know the feel of it the way you know a step on a stair in the dark." },
      { dark: true },
      { music: 'darkhour' },
      { n: "It came from the river. The city's lights went out in a wave from the water inland, street by street, block by block, and where they'd been the red came up, slowly, through everything, the way dye comes up through cloth: the sky first, then the roofs, then the dark mass of the trees along the street, until the whole of Iwatodai lay under them the color of the inside of a closed eyelid in the sun. The cicadas stopped mid-note. The wind stopped. The heat didn't; that was the thing she'd never get used to. The red hour in summer was a held breath in a hot room." },
      { n: "Below them, on the street, the bicycle that had been going past was standing up by itself with nobody on it. And in the windows across the way, in the beds, there were coffins." },
      { n: "He didn't look at the city. He was looking at his right hand. He'd held it up in front of his face, in the red, and was opening and closing it, slowly. All five. All at once. The way a hand opens and closes when there's nothing wrong with it." },
      { s: 'shinjiro', f: 'serious', t: "...Watch." },
      { n: "He picked up the watering can, the full one, with his right hand, and held it out straight at arm's length, level, and it didn't shake. Not at all. Not the long fine tremor she'd watched in the ward with the cup, not the drop at thirty seconds. Nothing. It hung there in the red at the end of his arm as steady as the bicycle in the street." },
      { s: 'shinjiro', f: 'serious', t: "Every night. In here. It works. Like it never happened." },
      { s: 'shinjiro', f: 'neutral', t: "...And then one o'clock comes and it goes back. Like somebody lending you something and taking it back at the door." },
      // CG: eqx-steady-hand — a rooftop garden in the red hour, everything lit blood red and black, a tomato plant staked with dish-towel strips, a tall young man sitting on a thin futon holding a full watering can perfectly level at arm's length with his right hand, staring at it, a girl beside him watching his face.
      { choose: [
        { t: "That's a good thing. Isn't it?", notes: 1, then: [
          { s: 'shinjiro', f: 'neutral', t: "That's what it wants me to think." },
          { n: "He put the can down. Carefully. As if it might go off." },
          { s: 'shinjiro', f: 'serious', t: "Nothing in here gives you anything for free. I know what free looks like. I took pills for two years that gave me everything I wanted for free. This feels like that. Like the first one. *Here. Look what you can do. You could stay like this.*" }
        ] },
        { t: "(Put your hand on his arm. Feel it not shake.)", notes: 3, then: [
          { n: "She put her hand on his forearm, below the rolled sleeve, where the tendons were. Under her palm it was still. Dead still. Warm, and still, and it was the stillness that frightened her, not the red, because she'd held that arm in the rain three weeks ago and felt it trying, every muscle in it trying, and there was no trying in it now at all. It wasn't his. It was lent." },
          { s: 'shinjiro', f: 'neutral', t: "...Yeah. You feel it. Wrong, right? Too good. Like the rice cakes." }
        ] },
        { t: "Don't use it. Not for anything.", notes: 3, then: [
          { s: 'shinjiro', f: 'neutral', t: "Don't. I tried once. First week. Cooked an egg up here on the camping stove at quarter past twelve. Perfect. Rolled it in one go. Like I was fifteen." },
          { s: 'shinjiro', f: 'serious', t: "...Couldn't eat it. Threw it off the roof. Something about it. Like eating at somebody's house you don't know." }
        ] }
      ] },
      { n: "They sat. Down on the river, a long way off, where the river bent round behind the old houses, there was a light. Small and low and yellow, by the water, where nothing should have been lit, because nothing was lit in the red, nothing, not a streetlamp, not a phone, not a match. It sat there at the bend like a lamp left on in a window for somebody coming home late." },
      { n: "She looked at it for a long time. It could have been the moon on the water. The moon was the wrong color for that. She didn't say anything, and he didn't, and she knew he'd seen it, because his right hand, the lent one, had closed on the edge of the futon and was holding on." },
      { s: 'shinjiro', f: 'neutral', t: "...Every night. Same place. Don't look at it too long." },
      { dark: false },
      { music: 'night' },
      { n: "The hour went on longer than an hour. It always did now. Akihiko had a number for it, on a roll of tape. And then it was over, all at once, the cicadas starting again mid-note as if they'd never stopped, the wind coming back hot off the bay, the bicycle down in the street finishing its turn at the corner with its rider on it, whistling, and the city's lights coming back in a wave toward the river." },
      { n: "He held his right hand up in front of his face. It was shaking. A long fine tremor, like a wire in wind. He looked at it for a long time, and then let out a breath she hadn't known he was holding, and let the hand drop into his lap, and she understood that he was glad. That he'd rather have it back, shaking, his." },
      { s: 'shinjiro', f: 'neutral', t: "...There it is. Useless thing." },
      { n: "He said it the way you'd say it to a dog that had come home." },
      { choose: [
        { t: "(Don't go down. Sit with him till it's light.)", notes: 3, flag: 'eqx-shinji-roof-dawn', then: [
          { n: "She didn't go down. He didn't tell her to. He didn't tell her anything; he just moved over on the thin futon, a few inches, and held the edge of his coat up off the concrete so she could get under the side of it, though it was much too hot for a coat, and she got under the side of it, and lay with her head on the pillow with no case and her back against his side, and looked at the sky going from black to a kind of bruised navy, and listened to his breathing, which was trying to be even and wasn't." },
          { n: "At some point his right hand came and lay on her hip, over the coat. Shaking. She could feel it shake through the cloth, all the small trying muscles of it. She put her hand over it. It stopped shaking, the way it had stopped in April on the tray table under her palm, and stayed stopped, and was his." },
          { n: "She didn't remember falling asleep. She remembered the cicadas, and his breath on the back of her neck going slow, and the smell of shiso coming warm off the planter, and then light." },
          { place: 'Iwatodai Dorm · Rooftop', time: 'Early Morning', bg: 'iwatodaidorm-roof-planters', soft: true },
          { n: "Dawn. Pink and hot already, the bay flat as a plate. She woke with his coat over her to the chin and his arm under her head where the pillow had been, and his face in her hair, and her own hand still over his on her hip, and for one second she didn't know which life she was in, and then she did, and didn't move." },
          { n: "The roof door opened. Akihiko stood in it, in his running clothes, with a towel round his neck and a bottle of water in his hand, at half past five. He looked at the futon. He looked at the tomato plant. He looked at the futon again." },
          { s: 'akihiko', f: 'neutral', t: "...Morning." },
          { n: "He set the bottle of water down on the top step, very precisely, the way you'd leave something on a doorstep, and closed the door again, quietly, and they heard him go down the stairs two at a time, and then, from the floor below, a long way off, Junpei's voice, sleepy and outraged, *who's running at FIVE THIRTY*, and Akihiko's, flat, *nobody, go back to sleep*." },
          { n: "Shinjiro hadn't opened his eyes. He'd been awake, she knew, the whole time. His arm under her head had gone stiff as a plank." },
          { s: 'shinjiro', f: 'flustered', t: "...He's gonna say something. Not today. In about a month. When I'm not expecting it. He'll just say it over breakfast. *The tomatoes looked good.*" },
          { s: 'solar', f: 'happy', t: "They do look good." },
          { s: 'shinjiro', f: 'flustered', t: "Don't. Go to bed. Your own bed. Before Junpei's up and puts it in the book." },
          { n: "He didn't take his arm out from under her head. She lay there a while longer, and so did he, and the sun came up over the bay and found the three green tomatoes on the plant in the corner, and they looked, she thought, a very little bit less green." }
        ] },
        { t: "(Go down to bed. Leave him the door to watch.)", notes: 2, then: [
          { n: "She got up. He nodded at her, once, from the futon, his back against the tank, his right hand in his lap, shaking, his. At the door she looked back. He'd turned to face it. To face her, in it, and past her, the stairs going down into the dark building; the one door. He'd watch it till it was light. She knew that the way she knew where he kept the mirin." },
          { s: 'shinjiro', f: 'neutral', t: "...Go on. Sleep. You ate?" },
          { s: 'solar', f: 'neutral', t: "Curry. Yours." },
          { s: 'shinjiro', f: 'neutral', t: "Good." },
          { n: "She went down. On the landing below, in the dark, she stopped and listened, and heard, very faint, through the roof door, his voice, low, gruff, talking to the tomatoes again. She couldn't hear what. It sounded like a promise. It sounded like he didn't know how to make one and was practicing on something that couldn't answer back." }
        ] }
      ] }
    ] },
    { after: '8/17', title: '6: by summer', place: 'Iwatodai Dorm · Kitchen', time: 'Evening', music: 'tender', scene: [
      { bg: 'iwatodaidorm-kitchen-night' },
      { ifBefore: '9/1', then: [
        { n: "The end of August came down on Iwatodai like a lid on a pot. The cicadas had changed key: the big loud ones of July had gone and the thin high ones of late summer had come, the ones that sounded like somebody sharpening a knife a long way off, all evening, without stopping. The kitchen window was open as far as it went. Nothing came in through it but heat and the smell of somebody's mosquito coil." }
      ], else: [
        { n: "Summer had gone without anybody seeing it go. The cicadas had stopped one night and not started again, and the heat had stayed on anyway, stubborn, sitting in the kitchen in the evenings like a guest who hadn't noticed the others leaving. The kitchen window was open as far as it went. What came in through it smelled of the river, and of leaves just starting to turn, and of nothing else." }
      ] },
      { ifEvent: 'eqx-equinox', then: [
        { n: "The dorm was quieter than it had ever been. The three fathers ate at the boarding house still, most nights, because they wouldn't leave it, because it was where their wives had last been; and the dorm ate early and quickly and went upstairs, and nobody talked about the empty places at the other table, down by the river. Shinjiro sent a pot down the river road every evening anyway, wrapped in a towel, with Ken or Akihiko, for the three men who wouldn't come up the hill. Every morning it came back. Full. Still warm, somehow, though it had sat all night on Mrs. Oka's step. He scraped it into the bin without a word and washed the pot and filled it again." }
      ] },
      { n: "He was at the stove. Not cooking. Standing in front of it with his hands at his sides, looking at it the way he'd looked at the rope the night before his first operation back, and on the counter beside the stove, unfolded, flattened, weighted at the corners with the salt and the soy sauce and two of the eggs, was a sheet of paper with a hospital's crest at the top." },
      { n: "She knew it before she could read it. The first one. *What do you want to be able to do by summer?* Creased into sixteen squares from four months in a coat pocket, soft as cloth at the folds, a ring on it from a water jug in April. The box at the bottom faced up. He'd turned it face up." },
      { n: "Two words, in the box. Huge and leaning, gone over and over, the pencil pressed so hard that it had torn through at the corner of one letter. A child's crayon hand. His." },
      { n: "*hold a pan*" },
      { s: 'shinjiro', f: 'neutral', t: "...Don't say anything yet." },
      { s: 'shinjiro', f: 'neutral', t: "Read it this morning. First time. Took it out on the roof at six and opened it before I could think about it. Like pulling a tooth." },
      { s: 'shinjiro', f: 'sad', t: "Felt stupid. Four months, carrying it round like it was something. And it's two words. I knew what they were. I wrote 'em." },
      { choose: [
        { t: "It's not stupid.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "It's a bit stupid." },
          { s: 'solar', f: 'neutral', t: "It's the least stupid thing anybody's ever written on a hospital form." }
        ] },
        { t: "You said it to someone. The first night. On the phone.", notes: 3, then: [
          { n: "He looked at her. For a second he didn't know what she meant; then he did, and something went across his face that she'd only seen on it twice." },
          { s: 'shinjiro', f: 'neutral', t: "...On the roof. Six floors up. In the red. Somebody put a phone to my ear and I could hear the lounge, all of you, and I said the first thing I could think of. Didn't even know who I was saying it to." },
          { s: 'shinjiro', f: 'neutral', t: "Then the therapist put a sheet in front of me a week later, and it was the only thing in my head." }
        ] },
        { t: "(Read it twice. Don't say anything.)", notes: 3, then: [
          { n: "She read it twice and didn't say anything, and he watched her not say anything, and something in his shoulders went down about an inch, the way it had in April when she hadn't looked at the sheet on the tray table." }
        ] }
      ] },
      { ifBefore: '9/1', then: [
        { s: 'shinjiro', f: 'neutral', t: "*By summer.* Summer's got till the end of the month. I counted on the calendar in the lounge. Got a few days. Thought I'd better do it before I lost my nerve." }
      ], else: [
        { s: 'shinjiro', f: 'neutral', t: "*By summer.* Missed it. Summer went while I wasn't looking. Doesn't matter. I'm doing it anyway. Late counts. Late's all I've ever been." }
      ] },
      { s: 'shinjiro', f: 'neutral', t: "...Need somebody to count. Somebody who won't cheat at thirty." },
      { n: "He'd asked. She heard it go past. She didn't say so. She came and stood beside him at the stove." },
      { ifFlag: 'eqx-shinji-iron-pan', then: [
        { n: "The pan was on the back burner. The cast one, from the ironmonger's in the rain, black now, properly black, seasoned to a shine like a beetle's back from two months of oil and oven and him standing over it at one in the morning. He'd filled it. Rice, cooked, packed in hard, and on top of the rice, so it wouldn't be cheating, the big stone mortar from the bottom cupboard. It must have weighed as much as a baby." },
        { s: 'shinjiro', f: 'neutral', t: "It's yours. You bought it. So you count." }
      ], else: [
        { n: "The dorm's big pan was on the back burner, the steel one with the long handle that took two hands on a good day, and he'd filled it. Rice, cooked, packed in hard, and on top of the rice, so it wouldn't be cheating, the big stone mortar from the bottom cupboard. It must have weighed as much as a baby." }
      ] },
      { n: "He wiped his right hand on his apron. Twice. Looked at it. Wiped it again. Then he put it on the handle of the pan, and closed it, one finger at a time, the slow ones last, until all four were round the wood and the thumb was over them, and she watched the tendons come up in his wrist one by one, like strings being tightened on an instrument." },
      { s: 'shinjiro', f: 'serious', t: "...Go." },
      { n: "He lifted it." },
      { n: "It came up off the burner an inch, and tipped, and he caught the tip with his wrist, his whole forearm in it, and held it level, and lifted it another inch, and another, until it was clear of the stove and hanging in the air in front of him at the height of his belt, full, with the mortar sitting on the rice in it like a stone in a nest." },
      { n: "His arm began to shake at once. Not the fine tremor. The big one, from the shoulder, the whole limb going like a branch in wind." },
      // CG: eqx-hold-a-pan — a dorm kitchen at night, a tall young man in an apron holding a heavy black frying pan full of rice with a stone mortar on top level at his waist with his right hand, his whole arm shaking, jaw set, a girl beside him counting on her fingers, a creased hospital form weighted flat on the counter.
      { choose: [
        { t: "(Count out loud. Slowly. Don't cheat.)", notes: 3, then: [
          { n: "She counted. *One.* Out loud, and not fast, and not slow either, the honest speed, the speed the therapist used. *Two.* The pan dipped and came back. *Three. Four.* Sweat had come out on his temple and was running down his jaw and he didn't wipe it. *Five.* His lips had gone white. *Six. Seven.* The rice shifted and the mortar slid an inch toward the rim and he tilted his wrist without looking and it slid back. *Eight.* His breath was coming through his teeth. *Nine.*" },
          { n: "*Ten.*" },
          { n: "He didn't put it down on ten. He held it a breath past, two, a count of his own, the way he'd let go of her wrist on the tray table in April, a good second after, on purpose, because he'd decided to. Then he set it back on the burner, slowly, with a clank, and let go of the handle, and stood with both hands flat on the edge of the stove, his head down, breathing like he'd carried it up the hill." }
        ] },
        { t: "(Count, and hold your hand under the pan. Not touching. Just there.)", notes: 3, then: [
          { n: "She put her hand flat under the pan, a finger's width below it, not touching, so the heat of it came down onto her palm, and counted. He saw her do it. His jaw went. He didn't tell her to move. *One. Two. Three.* The pan dipped toward her hand and stopped a hair from it and came back up. *Four. Five. Six.* She didn't move her hand. He didn't let the pan touch it. *Seven. Eight. Nine.* It was the hardest thing she'd ever watched anybody do. *Ten.*" },
          { n: "He held it past ten. A breath. Two. Then he set it down, with a clank, and stood with both hands on the stove and his head down, breathing hard, and said, to the burner," },
          { s: 'shinjiro', f: 'sad', t: "...Didn't need your hand. Knew it was there. Didn't need it." },
          { s: 'shinjiro', f: 'neutral', t: "...Leave it there next time anyway." }
        ] }
      ] },
      { n: "For a long moment neither of them said anything. The thin cicadas went on outside, sharpening their knives. Somewhere upstairs Junpei was laughing at something on the television. Shinjiro straightened up, slowly, and looked at his right hand, which was shaking so hard now he couldn't have held a pencil, and turned it over, and looked at the palm, where the handle had pressed a long red line." },
      { s: 'shinjiro', f: 'neutral', t: "...Done." },
      { s: 'shinjiro', f: 'neutral', t: "That's the first time I ever did a thing I said I'd do by a date. Ever. In my life." },
      { n: "He picked up the sheet off the counter, the salt and the soy sauce and the eggs going over, and folded it, carefully, along the old soft creases, into sixteen, and put it back in his coat on the back of the chair. Not the right pocket. The left. The pocket that was his, without anything in it from anybody else." },
      { s: 'shinjiro', f: 'neutral', t: "Now sit down. I said I'd make you something real when I could hold a pan. So." },

      { n: "He made ginger pork. In the pan, once he'd tipped the rice out of it into the big bowl for tomorrow's breakfast, the thin slices hissing as they went in, the ginger grated so fine it was nearly water, the sauce going dark and sticky at the edges. Rice. Miso, with tofu cut in cubes so small and so square she didn't know how he'd done it with that hand. Pickles he'd made himself, in a jar at the back of the fridge, cucumbers from the roof." },
      { ifFlag: 'eqx-shinji-roof-dawn', then: [
        { n: "And on a small saucer at the edge of her tray, on its own, cut in four, a tomato. Red. Properly red, all the way through, the skin split a little at the top from too much sun. He put it down without a word." },
        { s: 'shinjiro', f: 'neutral', t: "First one. Don't make a thing of it." }
      ], else: [
        { n: "And on a small saucer at the edge of her tray, on its own, cut in four, a tomato. Red. Properly red, the skin split a little at the top from too much sun. He put it down without a word, and she knew where it was from, and that it was the first, and that he'd waited for her to eat it." }
      ] },
      { n: "He watched her eat. He leaned on the counter with his arms folded and his bad hand tucked under his good arm, still shaking, and watched her eat all of it, and when she ate the tomato he looked away at the window, and his jaw did the complicated thing, and when the tray was empty he let out a breath through his nose and said *good*, very quietly, the way he'd said it at the fireworks over a rice ball." },
      { choose: [
        { t: "It's the best thing you've ever made me.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "It's ginger pork. I made it better last year. Pork was cheaper." },
          { s: 'solar', f: 'neutral', t: "Last year you could hold a pan." },
          { s: 'shinjiro', f: 'happy', t: "...Hah. Yeah. Fine. It's the best thing I ever made you. Write it on a form." }
        ] },
        { t: "(Get up and wash the pan for him.)", notes: 3, then: [
          { n: "She got up and took the pan to the sink before he could, and he started forward to stop her and then didn't, and stood at her shoulder while she washed it, and told her not to use soap on it, and she'd known that, and let him tell her anyway. His hand came and rested on the counter by hers while she dried it, not touching. Then touching. The side of his little finger against the side of hers, on the wet counter, shaking, and then not." }
        ] }
      ] },

      { n: "He sat down across from her at last, in his chair, the one by the door that he'd moved a place in, toward hers, in June, and put his elbows on the table and looked at her across it, and it took him a long time to say the next thing. She could see it take him. She didn't help." },
      { s: 'shinjiro', f: 'serious', t: "...You know what I figured out. Up on the roof. In the red, with the hand working." },
      { s: 'shinjiro', f: 'serious', t: "It doesn't want me to stay. Not like the old guy. It doesn't care if I eat at her table. It's not after that." },
      { s: 'shinjiro', f: 'serious', t: "It wants me not to want anything. That's all. Let somebody else want it for me. Hold the pan in the red, where it doesn't cost. Write whatever on the sheet, doesn't matter, somebody'll fill it in. Never ask for a thing. Then nothing can get taken, 'cause you never had it." },
      { s: 'shinjiro', f: 'sad', t: "...And that's me. That's just me. That's how I've lived since I was fifteen. It doesn't even have to ask me for anything. I already said yes to that years ago." },
      { n: "He said it to the table. He said it the way he'd said *like a glove*, in April, looking for the word and not liking any of them. And she understood, sitting across from him with the empty tray between them, that she knew now what it was asking him, the thing in the hour, the thing at the bend in the river: not *stay*. It had never needed to ask him to stay. It was asking him to keep wanting nothing, quietly, the way he always had, until there was nothing left of him to hold on with." },
      { flag: 'eqx-floor-shinjiro' },
      { ifChoice: { 'asks.shinjiro': 'yes' }, then: [
        { n: "His hand went to his coat on the back of the chair. The right pocket. The winter sheet, in her print. *Be here next summer.* He patted it, the way he'd been patting it since June, the way you'd pat for keys, and stopped, and left his hand there." },
        { s: 'shinjiro', f: 'neutral', t: "...That one's yours, though. You wrote it. I'm just doing what it says. Easiest thing I ever did. Somebody else wanted it. I just have to show up." },
        { n: "He said it lightly. He meant it as a kindness. He meant it as thanks. And she sat across from him and felt the kitchen go cold around her in the August heat, because he'd just told her what the thing in the hour wanted, and then, in the same breath, without seeing it, told her that she'd already given it to him." }
      ] },
      { ifChoice: { 'asks.shinjiro': 'no' }, then: [
        { s: 'shinjiro', f: 'neutral', t: "...That's why I was mad. In June. When you wouldn't write it. You were right. Didn't want you to be. It would've been so easy, you writing it." },
        { s: 'shinjiro', f: 'neutral', t: "*Hold a cup* was a cop-out. I know. I'll write a real one. For winter. Myself. Some time." }
      ] },
      { ifChoice: { 'asks.shinjiro': 'choose' }, then: [
        { n: "His hand went to his coat on the back of the chair. The right pocket. The winter sheet, the twenty minutes, still face in. He didn't take it out. He put his hand flat over the pocket, outside the cloth." },
        { s: 'shinjiro', f: 'neutral', t: "...That one's mine. I wrote it. Not reading it to you. Not yet. Not 'cause I don't want to." },
        { s: 'shinjiro', f: 'sad', t: "'Cause if I say it out loud and then I don't get there. That's all. That's the whole reason. Stupid." }
      ] },
      { choose: [
        { t: "You asked me to count tonight. You wanted it, and you asked. That's not nothing.", notes: 3, then: [
          { n: "He looked up. He hadn't noticed. She watched him go back over the evening and find it, *need somebody to count*, and turn it over, the way he'd turned the tomatoes in the supermarket with the three fingers that listened." },
          { s: 'shinjiro', f: 'flustered', t: "...Huh." },
          { s: 'shinjiro', f: 'neutral', t: "Didn't even feel it go. That's worse. That's way worse. Now I'll be thinking about it." }
        ] },
        { t: "Then want something. Right now. Anything. Out loud.", notes: 2, then: [
          { s: 'shinjiro', f: 'neutral', t: "...That's you asking me something." },
          { s: 'solar', f: 'neutral', t: "No. I'm just sitting here. You can say it or not." },
          { n: "He was quiet for a long time. The cicadas sharpened their knives. Then he said, to the table, low, rough, as if it were being pulled out of him on a string," },
          { s: 'shinjiro', f: 'sad', t: "...Next summer. The tomatoes. I want to see 'em come up again. From seed. On that roof." },
          { s: 'shinjiro', f: 'neutral', t: "There. That's mine. Don't touch it." }
        ] },
        { t: "(Reach across the table and put your hand over his right one.)", notes: 3, then: [
          { n: "She reached across and put her hand over his. The right one, on the table, still shaking from the pan, a long tremor running up from the wrist. It didn't stop shaking under her palm this time. It went on, small and stubborn, every muscle in it trying, and she held it while it tried, and he let her, and looked at their two hands on the table for a long time." },
          { s: 'shinjiro', f: 'neutral', t: "...Doesn't stop for you anymore. You notice?" },
          { s: 'solar', f: 'neutral', t: "I noticed." },
          { s: 'shinjiro', f: 'neutral', t: "Good. It shouldn't have to. Should be able to shake. It's mine." }
        ] }
      ] },

      { n: "It was late. The thin cicadas had stopped. Upstairs the television had gone off and Junpei's door had banged and the dorm had gone to the sounds of a dorm going to bed, a tap, a toilet, Yukari telling somebody to turn off the hall light. The red was an hour off. He got up and turned off the kitchen lamp, and they stood in the dark kitchen with the window open and the street light coming in orange across the floor." },
      { ifEvent: 'eqx-lanterns', then: [
        { s: 'shinjiro', f: 'neutral', t: "...Sent Hata home. On the river. Wrote his name with this hand. Took me an hour." },
        { s: 'shinjiro', f: 'serious', t: "And she took him out of the water. Like picking up a fork somebody dropped. Blew him out." },
        { n: "He didn't say anything else about it. He didn't need to. He stood in the dark by the window, looking down the street toward the river, the way he'd looked at the one door from the futon on the roof." }
      ] },
      { choose: [
        { t: "(Go up with him. Not to your room.)", notes: 3, flag: 'eqx-shinji-stayed-night', then: [
          { place: 'Iwatodai Dorm · Shinjiro’s Room', time: 'Late Night', bg: 'green-bedroom', soft: true },
          // BG: eqx-shinjiro-room — a sparse dorm bedroom at night, a futon on the floor, a long coat on a hook, a cast-iron pan on the desk instead of books, a jar of seed packets on the windowsill, streetlight through the blind.
          { n: "His room was the barest room in the dorm. She'd never been in it. A futon on the floor, made, square, the corners tight as a hospital bed. His coat on the hook. A desk with no books on it, only a jar of seed packets from the hundred-yen shop, a sharpened pencil, and, folded small on its own in the middle of the desk, a paper napkin with a grease stain on it from a rice ball, kept." },
          { n: "He stood just inside the door with his back against it, the way he'd stood with his back to the tank on the roof, facing the one door, except that he was the door now, and she was on the inside." },
          { s: 'shinjiro', f: 'flustered', t: "...You sure. I'm not asking. I'm just. You sure." },
          { n: "She didn't answer. She crossed the room and kissed him against the door, and he made a sound into her mouth she'd never heard him make, low, half a laugh and half nothing like a laugh, and his hands came up, both of them, the steady one and the trying one, and took her face, and held on." },
          { n: "He kissed like he cooked. Slowly. Like he'd read the packet after and decided to do it properly anyway. His right hand shook against her jaw and then against her neck and then at the small of her back, under her shirt, flat, warm, every finger trying, and she felt him notice it shaking and decide not to care, and that was the thing that undid her, more than his mouth, more than the door at her back when he turned them round. That he let it shake." },
          { n: "The red came at midnight. Neither of them got up to look at it." },
          { place: 'Iwatodai Dorm · Shinjiro’s Room', time: 'Early Morning', bg: 'green-bedroom', soft: true },
          { n: "She woke on the square futon with the light coming gray through the blind, and the sheet tangled round her knees, and his arm over her, heavy, the right one, lying across her waist with the hand open and still, asleep, the first time she'd ever seen it still that wasn't the red and wasn't her palm. Just asleep. Just a hand." },
          { n: "He was awake. Of course he was. He was lying on his side watching her, his hair all over his face, with an expression she'd have given a great deal to have a word for, and when he saw her see it he didn't put it away." },
          { s: 'shinjiro', f: 'neutral', t: "...You eat yet?" },
          { s: 'solar', f: 'happy', t: "It's five in the morning." },
          { s: 'shinjiro', f: 'neutral', t: "That's not a no." },
          { n: "Somebody walked past in the hall. Stopped. Walked on, very quietly, and then, after a moment, came back, and something slid under the door: a single sheet torn from a small notebook. Shinjiro looked at it from the futon with total dread." },
          { n: "She got up in his shirt and picked it up. It was a page from Junpei's book. It said, in Junpei's big round hand, *WHO GETS CAUGHT FIRST: SEASON TWO*, and under that a column of names with odds, crossed out, rewritten, crossed out again, and at the very bottom, newly added, underlined three times, in pen: *Shinjiro-senpai. NO BET. I'M NOT STUPID. (congrats tho)*" },
          { s: 'shinjiro', f: 'flustered', t: "...I'm gonna kill him." },
          { s: 'solar', f: 'happy', t: "You're going to make him breakfast." },
          { s: 'shinjiro', f: 'flustered', t: "I'm gonna make him breakfast and *then* I'm gonna kill him." },
          { n: "He didn't get up. He lay back on the futon with his arm over his eyes and the right hand, his, lying open on the sheet beside him, and after a while it moved, and found her ankle where she stood, and held on to it, loosely, the way you'd hold a rope at the top of a well just to know it was there." }
        ] },
        { t: "(Kiss him at the foot of the stairs and go up alone.)", notes: 2, then: [
          { n: "She kissed him at the foot of the stairs, in the orange street light from the kitchen door, his back against the banister and his good hand on the rail, and he kissed her back like a man who'd decided something, and then he let go first. That was the thing she took up the stairs with her. That he let go first, gently, on purpose, and stood at the bottom and watched her go up." },
          { s: 'shinjiro', f: 'neutral', t: "...Night. Text you at twelve." },
          { n: "At twelve, a dot. At one, after the red, the phone buzzed on her chest." },
          { phone: [
            { from: 'shinjiro', t: "held it ten" },
            { from: 'shinjiro', t: "twelve. i counted the extra" }
          ], contact: 'Shinjiro Aragaki' },
          { n: "She lay in the dark with the phone on her chest and her hand over it and didn't sleep for a long time, thinking about the left pocket of a coat on the back of a chair downstairs, with one folded sheet in it, and nothing in it from anybody else." }
        ] }
      ] }
    ] },
    { after: '9/12', title: '7: one in thirty', place: 'Iwatodai Dorm · Kitchen', time: 'Evening', music: 'tender', scene: [
      { bg: 'iwatodaidorm-kitchen-night' },
      { ifEvent: 'eqx-equinox', then: [
        { n: "The dorm had learned to be quiet in the evenings without anybody teaching it. Doors shut softly now. The television in the lounge was on with the sound down, for the light, and nobody watched it. Down the hill by the river, three men sat at a long table in a house that wasn't theirs, waiting for three women to come back up the road, and every night a pot went down to them wrapped in a towel and every morning it came back, and the dorm ate early and went upstairs as if eating late might be the thing that was noticed." },
        { n: "Shinjiro wasn't at the stove. That was what she saw first, coming down for water, and it stopped her in the doorway the way an empty bed used to stop her on the ward." }
      ], else: [
        { n: "September had come in hot and stayed hot, and then, the second week, the wind had turned round and started coming off the bay in long wet shoves that rattled the kitchen window in its frame and smelled of somewhere far out at sea; typhoon weather, the radio said, nothing to worry about yet. Down the hill the boarding house was full of parents, and the dorm was full of the noise of people being visited, Junpei's voice on the stairs doing an impression of somebody's father, Yukari telling him not to, laughing while she said it." },
        { n: "Shinjiro wasn't at the stove. That was what she saw first, coming down for water, and it stopped her in the doorway for a second, out of habit, before she saw the rest." }
      ] },
      { n: "He was at the table, in his chair by the door, with his long legs out under it and his back against the wall, and he was throwing a ball at the fridge." },
      { n: "A rubber ball, the cheap kind from a hundred-yen shop, bright pink, the size of a plum. He threw it with his left hand, underarm, not hard, so it hit the fridge door just below the magnets and bounced back to him in a short low arc across the kitchen, and as it came back he put up his right hand for it, open, and the ball went into his palm and straight back out of it as if his palm were a wall, and hit the floor, and rolled under the table, and he bent down for it with the patience of a man who'd been doing this for an hour." },
      { s: 'shinjiro', f: 'neutral', t: "...Homework. Don't." },
      { s: 'shinjiro', f: 'neutral', t: "Last appointment Friday. She signed me off. Monthly now. Said the hand's done all the getting better it's going to do on its own and the rest is up to me. Gave me this. Said catch it ten times running with the right before winter and she'd buy me lunch." },
      { s: 'shinjiro', f: 'neutral', t: "Haven't caught it once." },
      { n: "He threw it again. It bounced. His right hand came up and opened and the ball hit the heel of it and went sideways into the cupboard under the sink with a hollow knock, and he looked at the cupboard as if it had said something about his mother." },
      { choose: [
        { t: "(Sit down across from him. Watch.)", notes: 2, then: [
          { n: "She took her water to the table and sat across from him and watched, and didn't say anything, and he threw it four more times and dropped it four more times, and every time it went under the table she moved her feet out of the way for him without being asked, and on the fifth time he caught her doing it and the corner of his mouth went." }
        ] },
        { t: "You're catching it like it's going to bite you.", notes: 3, then: [
          { s: 'shinjiro', f: 'neutral', t: "It might. Everything bites this hand. Doorknobs. Chopsticks. That ball's got it in for me, I can tell." },
          { s: 'solar', f: 'neutral', t: "You close too late. You wait till it's in." },
          { s: 'shinjiro', f: 'neutral', t: "...Yeah. 'Cause if I close early I close on nothing and then I look stupid." },
          { s: 'solar', f: 'neutral', t: "You already look stupid. You've been throwing a pink ball at a fridge for an hour." },
          { s: 'shinjiro', f: 'happy', t: "...Hah. Fair." }
        ] },
        { t: "(Hold your hands out. Let him throw it to you instead.)", notes: 3, then: [
          { n: "She put her water down and held her hands out, open, across the table. He looked at them. Then he tossed the ball to her, left-handed, gently, the way you'd toss something to a child, and she caught it and threw it back at his right hand, not gently at all, and he flinched and dropped it and swore and was, she could see, very slightly delighted." }
        ] }
      ] },
      { n: "It was too small, the kitchen. The ball kept going under things. After the third time it went behind the fridge and he had to lie on the floor with a broom handle to get it out, he stood up and put his coat on without a word and jerked his head at the ceiling, and she followed him up." },

      { place: 'Iwatodai Dorm · Rooftop', time: 'Evening', bg: 'iwatodaidorm-roof-evening', soft: true },
      { n: "The roof garden was finishing. She hadn't been up since the summer, and it had gone on without her the way gardens did: the shiso gone to seed in tall purple spikes, the onions fallen over in their row like soldiers who'd been told they could lie down now, and the tomatoes, his tomatoes, the ones he'd planted the week he got out, grown up past their canes and over them and down the other side in a great sprawl of yellowing leaves, with the last fruit hanging in it small and split and dark, more than anybody could eat, the smell of them green and sharp in the wind." },
      { ifEvent: 'eqx-equinox', then: [
        { n: "From up here you could see down the hill to the river, and the old houses along it, and one roof among them with a light under it, and a garden behind it with a tree. Shinjiro didn't look at it. She watched him not look at it. He'd stood on the bridge with Ken's face pressed into his coat and his hand over the back of the boy's head, holding it there so he wouldn't see, and she didn't think he'd looked straight at anything since." }
      ], else: [
        { n: "From up here you could see down the hill to the river, and the old houses along it, and the boarding house among them with every window lit, full of parents. The wind brought up a scrap of somebody laughing down there, a woman, and lost it again." }
      ] },
      { n: "There was a water tank at the far end, a big square concrete one on legs, and he went and stood ten paces off it, and she understood the plan: the tank was a wall that didn't care where the ball went, and the roof had a chain-link fence round it high enough that nothing went over." },
      { n: "He threw. It came back. He dropped it." },
      { n: "He threw. It came back. He dropped it." },
      { n: "On the fifth throw the stairwell door banged open behind them and Koromaru came out onto the roof at a dead run, ears flat, tongue out, having heard a ball from three floors down the way he always heard a ball, and after that it was a different game. Shinjiro threw; the tank sent it back; his right hand dropped it; and Koromaru had it before it had finished bouncing and brought it back, not to Shinjiro, to her, and dropped it at her feet, wet, and sat, and looked at her with total faith." },
      { s: 'shinjiro', f: 'neutral', t: "...Traitor." },
      { n: "So she threw it. Underarm, not hard, at his right hand. And he dropped it. And Koromaru brought it back. She lost count somewhere in the teens and then found it again, because he was counting, under his breath, the number of the throw and then *no* after it, every time, as if he were keeping a ledger." },
      { choose: [
        { t: "(Keep throwing. Same speed. Same place. Every time.)", notes: 3, then: [
          { n: "She threw it the same every time. The same arc, the same height, to the same place a hand's width in front of his chest, so that the only thing that changed was him; and she saw him notice that she was doing it, about the twentieth throw, and saw it go into him, and he stopped saying *no* after the drops and just said the numbers." }
        ] },
        { t: "(Throw one wild. Make him reach.)", notes: 2, then: [
          { n: "On the twentieth she threw it wide, high, to his right, and he went for it, and his whole right side went for it without asking him, the shoulder and the arm and the long reach, and his fingers closed on the air a hand's length behind the ball, and he stood there with his arm out looking at his empty fist in amazement." },
          { s: 'shinjiro', f: 'surprised', t: "...It closed. On its own. Didn't even tell it to." },
          { s: 'solar', f: 'neutral', t: "It closed on nothing." },
          { s: 'shinjiro', f: 'neutral', t: "Yeah. But fast. You see how fast? Do that again." }
        ] }
      ] },
      { n: "The light was going. The sky over the bay went the color of the inside of a shell and then the color of weak tea, and the tank turned gray, and the pink ball turned gray with it, so that it came at him out of the dusk like a little ghost; and on the thirtieth throw his hand came up, and opened, and the ball went into it, and the fingers closed. Slowly. One at a time, the slow ones last. Round it. And held." },
      { n: "He didn't move. Koromaru, who'd been crouched to spring, sat down, confused." },
      { s: 'shinjiro', f: 'neutral', t: "...Thirty." },
      { s: 'shinjiro', f: 'neutral', t: "One in thirty." },
      { n: "He opened his hand and looked at the ball in it as if it had been put there by somebody else. Then he tossed it, left-handed, out over the garden for Koromaru, who went after it through the tomatoes in a crash of leaves, and he sat down on the edge of the big planter with his elbows on his knees and his right hand hanging between them, open, shaking from the wrist, the way it always shook after." },
      { ifChoice: { 'asks.shinjiro': 'yes' }, then: [
        { s: 'shinjiro', f: 'neutral', t: "She'll like that. The therapist. One's a start. Your sheet says be here next summer, so I figure I'd better have a hand that works by then. Somebody else's plan. I'm just doing the reps." },
        { n: "He said it easily. It was the easy that was wrong, and she couldn't have told anyone why: a man doing his homework for a teacher, cheerfully, because it was set." }
      ] },
      { n: "She sat down beside him on the planter. The concrete was still warm from the day. The tomato leaves smelled green and bitter on her hands where she'd brushed them. He didn't say anything for a long time. The wind went over the roof, and the fence sang a little in it, one high wire note." },
      { s: 'shinjiro', f: 'serious', t: "...I came up here last night. In the red." },
      { s: 'shinjiro', f: 'serious', t: "Don't. I know. Hanni's rule. I know. I couldn't sleep, and I had the ball, and I thought. I just thought I'd see." },
      { s: 'shinjiro', f: 'serious', t: "Thirty out of thirty." },
      { n: "She'd known it was coming from the way he'd sat down. She still felt it go into her stomach like cold water." },
      { s: 'shinjiro', f: 'neutral', t: "Every one. Didn't even have to look. It's not my hand up here in the red, it's a hand. Somebody's good hand. Comes on at twelve like the street lights and goes off at one. I stood there by that tank and caught it thirty times like a pro and I felt like a kid at a fair who won the big bear." },
      { s: 'shinjiro', f: 'serious', t: "...And then somebody said, from over by the stairs, you could keep it." },
      { s: 'shinjiro', f: 'serious', t: "Not loud. Nice. Like somebody's mother in the next room. *You could keep it, child. Just stay up here in it a while. Nobody'll mind.*" },
      { n: "He'd turned the ball over in his left hand while he said it. He put it down on the planter beside him now, very carefully, as if it might go off." },
      { ifEvent: 'eqx-equinox', then: [
        { s: 'shinjiro', f: 'sad', t: "And I wanted it. That's what I came up to tell you. I stood on that bridge. Three of 'em. I had the kid's head in my coat so he wouldn't look, and I had one hand to do it with, and the other one was hanging off me like a bag of sand. If I'd had a hand. If I'd had two." },
        { s: 'shinjiro', f: 'sad', t: "...So when the nice voice said keep it, I wanted it so bad I could taste it. First thing I've wanted that bad since I woke up. And it's the one thing on the menu I can't have." }
      ], else: [
        { s: 'shinjiro', f: 'sad', t: "And I wanted it. That's what I came up to tell you. Old guy in the next bed. Somebody at the door in the night being nice to him. I had a water jug right there and a hand that couldn't throw it. If I'd had a hand." },
        { s: 'shinjiro', f: 'sad', t: "...So when the nice voice said keep it, I wanted it so bad I could taste it. First thing I've wanted that bad since I woke up. And it's the one thing on the menu I can't have." }
      ] },
      { s: 'shinjiro', f: 'neutral', t: "It's lent. I know it's lent. I'm not stupid. Nothing nice comes up out of that hour for free. I know what it'd cost. I just don't know what it'd cost yet." },
      // CG: eqx-one-in-thirty — a dorm rooftop garden at dusk, overgrown tomato plants on their canes, a tall young man in a long coat sitting on the edge of a planter with his right hand hanging open between his knees, a pink rubber ball on the concrete beside him, a girl sitting close at his side, a white dog crashing through the leaves behind them.
      { choose: [
        { t: "Then don't take it. It's lent. Let it go back.", notes: 3, flag: 'eqx-shinji-lent-no', then: [
          { s: 'shinjiro', f: 'neutral', t: "...Yeah." },
          { s: 'shinjiro', f: 'neutral', t: "Yeah. That's what I'd tell the kid. That's what I'd tell anybody. Just needed it said by somebody who's not me, so I'd know it wasn't just me being scared of a nice voice." },
          { n: "He picked the ball up again, with the right hand, slowly, the fingers closing on it one by one, and held it, his own bad grip, the one that dropped twenty-nine in thirty." },
          { s: 'shinjiro', f: 'neutral', t: "This one's mine. It's crap. It's mine." }
        ] },
        { t: "It's your hand. Whatever you decide about it, I'll be right here.", notes: 3, flag: 'eqx-shinji-lent-his', then: [
          { n: "He looked at her sideways, a long look, the look he gave a pan he didn't trust, and she didn't add anything to it and didn't take anything back." },
          { s: 'shinjiro', f: 'neutral', t: "...Not gonna tell me." },
          { s: 'solar', f: 'neutral', t: "No." },
          { s: 'shinjiro', f: 'sad', t: "Hate that. You know I hate that." },
          { n: "He was quiet. The fence sang its one note. Then he picked the ball up again, with the right hand, slowly, and closed his own bad fingers on it, and held it up between them in the dusk, as if showing it to somebody who'd asked." },
          { s: 'shinjiro', f: 'neutral', t: "...This one. I decide this one. It's crap and it drops things and it's mine." }
        ] },
        { t: "(Don't say anything. Take his right hand. The slow one. Hold it.)", notes: 3, flag: 'eqx-shinji-slow-hand', then: [
          { n: "She took his right hand where it hung between his knees and held it. It was cold from the evening and shaking, and it lay in hers the way it had on the hospital roof in April, fingers half curled, trying; and then, slowly, the slow ones last, it closed. On her hand. Not hard. All four fingers and the thumb. The grip that couldn't hold a ball." },
          { s: 'shinjiro', f: 'neutral', t: "...Huh." },
          { s: 'shinjiro', f: 'neutral', t: "That one I can catch." },
          { n: "He didn't say anything about the other hand, the lent one, the good one that came on at midnight. He sat on the planter holding on with the bad one, and didn't let go, and she understood that that was the answer, and that he'd given it to himself." }
        ] }
      ] },
      { n: "Koromaru came back out of the tomatoes with the ball in his mouth and leaves in his ears and a split tomato squashed red down one side of his white coat, delighted with himself, and dropped the ball at Shinjiro's feet this time, not hers, and sat, and waited." },
      { s: 'shinjiro', f: 'neutral', t: "...Yeah, yeah. You're a good dog. You're the only one up here who can catch." },
      { n: "He threw it for him, left-handed, out over the garden. Then he got up and went to the tomatoes and began picking the last of them, the small split dark ones, with his right hand, slowly, dropping one in four, and put them in the front of his coat, held up like an apron." },
      { s: 'shinjiro', f: 'neutral', t: "Going over. The plants. Last week of 'em. Gonna save seed off the best one." },
      { s: 'solar', f: 'neutral', t: "For next year." },
      { s: 'shinjiro', f: 'neutral', t: "...Don't make it a thing." },
      { n: "He picked the best one last, the biggest, a deep lopsided red, and didn't put it in his coat with the others. He held it in his right hand all the way down the stairs." },

      { place: 'Iwatodai Dorm · Kitchen', time: 'Night', bg: 'iwatodaidorm-kitchen-night', soft: true },
      { n: "In the kitchen he cut it open on the board and scraped the seeds out with the back of a teaspoon, into a glass of water, the way his grandmother had done it, he said, the only thing anybody in his family had ever taught him that he'd kept. They'd sit in the water three days and go off and stink, and the good ones would sink, and then you dried them." },
      { n: "He set the glass on the windowsill over the sink, behind the dish soap, where nobody would knock it, and tore a strip off the edge of a newspaper and wrote on it with the pencil from the shopping list and propped it against the glass." },
      { n: "*DON'T TOUCH. SEED.*" },
      { n: "And under it, smaller, after a second, as if it had got out of him before he could stop it." },
      { n: "*next year*" },
      { choose: [
        { t: "(Kiss him by the sink, with the seed glass on the sill behind him.)", notes: 3, flag: 'eqx-shinji-seed-kiss', then: [
          { n: "She kissed him by the sink, with the window black behind him and the seed glass on the sill at his shoulder, and he made a small surprised sound and then didn't make any sound at all; his good hand went flat on the counter behind her, and the bad one came up to her face, slowly, and she felt it shake against her cheek and then find where it wanted to be and stay." },
          { n: "He tasted of tomato. His coat still smelled of the roof, of leaves and wind and the bitter green of the plants, and she held on to the front of it with both hands as if it might blow away." },
          { s: 'shinjiro', f: 'flustered', t: "...Your hands smell like the plants." },
          { s: 'solar', f: 'happy', t: "So do yours." },
          { s: 'shinjiro', f: 'flustered', t: "Yeah. Well. Don't knock the glass over." }
        ] },
        { t: "(Wash the knife and the board for him. Stand close.)", notes: 2, then: [
          { n: "She washed the knife and the board, and he dried them, standing close enough that his elbow touched hers every time he reached for the next thing, and neither of them moved away, and the tap ran, and the seed glass sat on the sill with its strip of newspaper, and that was all, and it was a great deal." }
        ] }
      ] },
      { n: "At midnight her phone buzzed on her chest. A dot. The red came up through the window, and she lay in it and listened to the dorm, and didn't hear the stairwell door to the roof, and didn't hear it, and didn't hear it, all hour." },
      { n: "At one, the lights came back, and the phone buzzed again." },
      { phone: [
        { from: 'shinjiro', t: "stayed in bed" },
        { from: 'shinjiro', t: "ball's on the sill. by the seed" }
      ], contact: 'Shinjiro Aragaki' },
      { n: "She held the phone on her chest for a long time. Then she typed *one in thirty*, and deleted it, and typed *good*, which was his word, and sent that, and lay awake till the window went gray, thinking about a glass of water behind the dish soap with a lopsided summer's worth of seed sinking slowly to the bottom of it, waiting for a year that nobody in the house could promise anybody." }
    ] },
    { after: '10/2', title: '8: be awake for it', place: 'Iwatodai Dorm · Kitchen', time: 'Evening', music: 'tender', scene: [
      { bg: 'iwatodaidorm-kitchen-night' },
      { n: "October came in cold overnight, the way it sometimes did, as if somebody had opened a door at the far end of the year. The first morning of it there was condensation on the inside of the dorm's windows, and Ken drew a face in it, and then wiped it off with his sleeve before anybody could see, because Ken drew faces in things now and then wiped them off." },
      { n: "The hour was getting longer. Nobody said so at breakfast. Fuuka said so at night, in the command room, with Chenle beside her and a stopwatch on the console between them like a third person: a minute more than last week, then three, then six. The clock in the lounge stopped at twelve and started again at one, the way it always had, but one came later now; you could feel it in your body, the hour stretched out like a held breath that had gone on a little longer than a breath should." },
      { n: "Shinjiro was at the table. Not the stove. On the table in front of him there was the pot." },
      { n: "His pot. The big one with the dented lid, the one that went down the river road every evening wrapped in a towel for the three men at the long table, and came back every morning, full, still warm, untouched, and was scraped into the bin. It had come back this morning. It wasn't full. It had been washed. Dried. Polished, nearly. And in the bottom of it, on a folded paper napkin, the way you'd set it on a plate for a guest, there was one rice cake." },
      { n: "White. Round. Dusted with flour so fine it lay on the napkin like the first breath of frost on a window." },
      { s: 'shinjiro', f: 'neutral', t: "...Ken brought it up. Said it was on the step like this. Said the lady said *thank you for the stew, dear, tell him he's very kind.*" },
      { s: 'shinjiro', f: 'serious', t: "Haven't touched it. Didn't let Ken touch it. Been sitting here an hour trying to figure out how to throw it out without touching it." },
      { choose: [
        { t: "(Get the tongs.)", notes: 3, then: [
          { n: "She got the tongs out of the drawer, the long steel ones he used for tempura, and handed them to him, and he looked at them, and at her, and something in his face eased by about the width of a grain of rice." },
          { s: 'shinjiro', f: 'neutral', t: "...Yeah. That's it. That's the answer. Two hours I've been sitting here." },
          { n: "He took it out with the tongs, napkin and all, at arm's length, and dropped it in a plastic bag, and knotted the bag, and put the bag in another bag, and knotted that, and took it out to the bins himself and was gone a long time." }
        ] },
        { t: "It's a rice cake. It's just a rice cake.", notes: 1, then: [
          { s: 'shinjiro', f: 'neutral', t: "Yeah? Then you eat it." },
          { n: "She didn't move. He watched her not move, and nodded, as if she'd said something." },
          { s: 'shinjiro', f: 'neutral', t: "...Yeah. That's what I thought." },
          { n: "He took it out with the tongs, at arm's length, and knotted it in two bags, and took it out to the bins himself and was gone a long time." }
        ] }
      ] },
      { n: "When he came back he washed the pot. Twice. Then he filled the sink with hot water and soaked it and went at it a third time with the steel wool, hard, the way you'd scrub something that had had something dead in it, and dried it, and put it away at the back of the cupboard, not at the front where it lived. He didn't fill it again. She noticed. She didn't say anything." },
      { s: 'shinjiro', f: 'neutral', t: "...Not sending it down there anymore. Not to her step. If the dads want stew they can come up the hill and get it. I'll tell 'em. I'll tell 'em myself." },
      { s: 'shinjiro', f: 'neutral', t: "Taejoon'll come. The quiet one. He came up Wednesday and sat in the lounge and ate two bowls standing up and went back down without saying anything. Your other dad, the American one, he won't. He's waiting by the door in case she comes up the road and nobody's there." },

      { n: "There was a box on the counter by the rice cooker. A cardboard box from the greengrocer on the strip, and in it, packed in shredded paper, persimmons. Big ones, the long pointed kind, orange as traffic cones, so hard you could have knocked on them." },
      { n: "She looked at them and her body did a thing before she did. She didn't want to look at persimmons. She knew a tree. She knew whose garden it stood in." },
      { s: 'shinjiro', f: 'neutral', t: "Greengrocer's. Not hers. I asked where they were grown. He showed me the box. Some place up north. Don't look at 'em like that." },
      { s: 'shinjiro', f: 'neutral', t: "They're the bitter kind. Can't eat 'em now, they'd turn your whole mouth inside out. You peel 'em and hang 'em up on strings in a window where the air moves and leave 'em. Six weeks. Seven. They go dark and soft and sweet all on their own. Sugar comes up out of 'em like frost." },
      { s: 'shinjiro', f: 'neutral', t: "...Ready about December. First snow, give or take." },
      { n: "He didn't say anything about what that meant. He didn't have to. A man who didn't think past next week had gone to the greengrocer's and bought a box of fruit that wouldn't be any good for two months." },
      { n: "He picked one up in his left hand and the peeler in his right, and began." },
      { n: "It was slow. The right hand held the peeler wrong and the persimmon was hard and slippery, and he took the skin off in short ragged strips instead of one long curl, and swore at every third one, and twice the peeler skidded off and he stopped and looked at his thumb to make sure it was still there. She took the second persimmon and a knife and sat across from him. They peeled. The kitchen filled up with the smell of them, a cold sweet green smell like the inside of an autumn morning." },
      { n: "On the fourth one it got away from him. Wet, peeled, slick as soap, it shot out of his left hand and off the edge of the table, and his right hand, which had been holding the peeler a second before, wasn't holding the peeler anymore; it had let go of it, she never saw it let go, and gone down, fast, and caught the persimmon a foot above the floor." },
      { n: "Caught it. Closed on it. All four fingers and the thumb, round the cold wet fruit, and held." },
      { n: "He didn't move. Neither did she. The peeler, which had dropped, finished rolling across the table and fell off the other side with a small clatter." },
      { s: 'shinjiro', f: 'surprised', t: "..." },
      { s: 'shinjiro', f: 'surprised', t: "...That's the first thing it ever caught. In the light. The first thing it ever caught that it wasn't trying to." },
      { ifFlag: 'eqx-shinji-lent-no', then: [
        { s: 'shinjiro', f: 'neutral', t: "Haven't been up on the roof in the red. Not since that night. Didn't need to. Look. Didn't need it." }
      ] },
      { ifFlag: 'eqx-shinji-lent-his', then: [
        { s: 'shinjiro', f: 'neutral', t: "Haven't been up on the roof in the red. Not since that night. Decided. Didn't tell you. Didn't have to tell you. It was mine." }
      ] },
      { ifFlag: 'eqx-shinji-slow-hand', then: [
        { s: 'shinjiro', f: 'neutral', t: "Thought about you. That night on the roof. Caught your hand. Figured if it could do that it could do a ball. Didn't figure it'd do a persimmon." }
      ] },
      { choose: [
        { t: "(Don't say anything. Hold your hand out for the persimmon, the way you held it out for the putty in April.)", notes: 3, then: [
          { n: "She held her hand out across the table. He looked at it, and at the persimmon in his fist, and then put it in her palm, cold and wet and slick, with five dents in its flesh where his fingers had closed, four deep, one shallower, from the thumb. The same marks. The same hand. April's putty, in October, in a piece of fruit." },
          { s: 'shinjiro', f: 'neutral', t: "...Don't. It's disgusting. You can see where I grabbed it." },
          { s: 'solar', f: 'neutral', t: "I'm hanging this one in the middle." }
        ] },
        { t: "Again.", notes: 3, then: [
          { n: "He looked at her as if she were insane. Then he picked up a fresh one, a hard unpeeled one, and tossed it straight up off his left hand, not high, and it came down, and his right hand went for it, and it hit his fingertips and bounced off them onto the table and rolled into the box." },
          { s: 'shinjiro', f: 'happy', t: "...Hah. No. Once. Once is what I got. Once is plenty. I'm not greedy." }
        ] }
      ] },

      { n: "They peeled the rest. Twelve. He tied each one by its stalk to a length of kitchen string with a knot she didn't know, right hand and left together, and when they were done he stood on a chair and hung the strings across the kitchen window, from the curtain hook on one side to the hook on the other, two rows of six, bright orange against the black glass, turning very slowly in the draft from the gap under the sash." },
      { n: "They looked like lanterns. She didn't say that. They'd both had enough of lanterns." },
      { n: "He got down off the chair and stood back and looked at them, with his arms folded, the way he looked at a pan he'd just seasoned, and she saw his hand go to his coat, on the back of the chair by the door. To a pocket." },
      { ifChoice: { 'asks.shinjiro': 'choose' }, then: [
        { n: "The right pocket. The winter sheet. The one he'd written in June with his fist round the pen and his arm shaking from the shoulder, twenty minutes, face down on the counter, that she'd never seen." },
        { n: "He took it out. He didn't unfold it straight away. He stood there with it in his hand, folded, and looked at the persimmons, and not at her." },
        { s: 'shinjiro', f: 'neutral', t: "...Said I'd read it when I knew I'd get there. Don't know that. Nobody knows that. Figured I'd read it anyway. While there's still time to be wrong." },
        { n: "He unfolded it. The hospital's crest. *What do you want to be able to do by winter?* And in the box, in a hand that leaned and lurched and had gone over every line twice, the pencil dug into the paper so deep she could have read it from the back:" },
        { n: "*be awake for it*" }
      ] },
      { ifChoice: { 'asks.shinjiro': 'no' }, then: [
        { n: "The left pocket. The one that was his. He took out a sheet she hadn't seen, crisp, folded only once, with the hospital's crest at the top." },
        { s: 'shinjiro', f: 'neutral', t: "Asked her for a new one. At the last appointment. She looked at me like I'd asked her out. Wrote it there. In the waiting room. Nine minutes. Getting faster." },
        { s: 'shinjiro', f: 'neutral', t: "...Said I'd write a real one. Myself. So." },
        { n: "He unfolded it. *What do you want to be able to do by winter?* And in the box, in a hand that leaned and lurched and had gone over every line twice:" },
        { n: "*be awake for it*" }
      ] },
      { ifChoice: { 'asks.shinjiro': 'yes' }, then: [
        { n: "The right pocket. Her sheet. He took it out and unfolded it and looked at it, her neat print, the print she used for forms, *Be here next summer*, and smiled at it, a little, the way you'd smile at a bus timetable that had turned out to be right." },
        { s: 'shinjiro', f: 'neutral', t: "...Still doing what it says. Easiest thing I ever did. Somebody else wanted it." },
        { choose: [
          { t: "Write your own. Please. Under it. Anything.", notes: 3, then: [
            { n: "He looked at the space under her line. He picked up the pencil from the shopping list. He held it over the paper in his fist, the way he'd held it in April, and his arm shook, and nothing came out of the end of it, not a letter, not a mark; he held it there so long the tip touched down and left one small gray dot, and he looked at the dot, and put the pencil down." },
            { s: 'shinjiro', f: 'sad', t: "...Can't think of anything. Isn't that funny. Had a whole thing. Now I go to look and there's nothing in there. Like a cupboard somebody cleaned out." },
            { s: 'shinjiro', f: 'neutral', t: "Yours is fine. Yours is good. Later. I'll do one later." }
          ] },
          { t: "(Say nothing. Watch him fold it up again.)", notes: 2, then: [
            { n: "He folded it along its soft creases and put it back in the right pocket and patted it, the way you'd pat for keys, and went back to looking at the persimmons, easy, a man with a plan somebody else had made him, and she sat at the table and felt the cold come in under the sash and go all the way through her." }
          ] }
        ] },
        { n: "He tied off the last string and didn't say anything else about it, and neither did she, and the twelve persimmons turned in the window in the draft." }
      ] },
      { ifChoice: { 'asks.shinjiro': 'yes' }, then: [], else: [
        { s: 'shinjiro', f: 'sad', t: "...Slept through the last one. All of it. December, January, the snow, New Year. Lay in that bed by the window with my eyes shut while it snowed on the bay, and you came every day and sat in the chair and told me about it, and I didn't hear a word." },
        { s: 'shinjiro', f: 'neutral', t: "Want to see it. That's all. Want to be up for it. Want to be standing in a kitchen when it starts, with something in the oven, and look out the window, and go, huh, there it is." },
        { n: "He folded the sheet and put it in the left pocket. Then he looked at her, straight at her, for the first time since he'd taken it out, and she watched it take him, the whole length of him, a man who had never once in his life asked anybody for anything he could have done without." },
        { s: 'shinjiro', f: 'serious', t: "...First snow. When it comes. Wake me up for it. Bang on the door. I don't care what time it is." },
        { s: 'shinjiro', f: 'serious', t: "That's me asking. For me. Not for anybody else. Don't make it a thing." },
        { choose: [
          { t: "I'll wake you up. Whatever time it is.", notes: 3, flag: 'eqx-shinji-first-snow', then: [
            { s: 'shinjiro', f: 'neutral', t: "...Good." },
            { n: "He said it the way he said it over an empty plate. Like something had been eaten that he'd been worried about." }
          ] },
          { t: "(Get up. Write it on the calendar by the fridge. FIRST SNOW: WAKE SHINJI.)", notes: 3, flag: 'eqx-shinji-first-snow', then: [
            { n: "She got up and took the pen off its string and wrote it on the dorm's calendar, the big one by the fridge with Mitsuru's operations in red and Fuuka's library returns in green, in the first box of December, because nobody knew which day it would be: *FIRST SNOW: WAKE SHINJI.* He watched her do it with his arms folded." },
            { s: 'shinjiro', f: 'flustered', t: "...Everybody's gonna see that." },
            { s: 'solar', f: 'neutral', t: "Yes." },
            { s: 'shinjiro', f: 'flustered', t: "Aki's gonna see that." },
            { s: 'solar', f: 'happy', t: "Then he'll wake you up too." }
          ] }
        ] }
      ] },

      { n: "It was late. The persimmons turned in the window. Upstairs a door banged, and Junpei called down the stairs to ask if anyone had seen his charger, and nobody answered, and he went away again. The red was two hours off and getting nearer every night." },
      { n: "Shinjiro sat down in his chair by the door. The chair he'd moved a place in, in June, toward hers. He put his elbows on the table and looked at her across it, and his right hand lay on the wood between them, open, still, the hand that had caught one ball in thirty and one persimmon in twelve." },
      { s: 'shinjiro', f: 'neutral', t: "...Everybody in this house wants something off you. You notice? You walk in a room and they all turn round. Your three dads. Aki. The girls. The lady down the hill, God knows." },
      { s: 'shinjiro', f: 'neutral', t: "I don't. Never did. Thought that was the one good thing about me." },
      { s: 'shinjiro', f: 'serious', t: "...So I'm just gonna ask what I am to you. Once. And then whatever it is, it's fine. I mean that. I'll still burn Ken his toast. I'll still text you at twelve." },
      // CG: eqx-be-awake — a dorm kitchen at night, two strings of peeled orange persimmons hanging across a black window, a tall young man in a long coat sitting at the table with his right hand open on the wood, looking up at a girl across from him, a calendar by the fridge with something written in its December box.
      { route: [
        { t: "I'm in love with you. I have been since a kitchen at one in the morning.", route: 'romance', notes: 3, then: [
          { n: "He didn't say anything. His hand on the table closed, slowly, the slow ones last, on nothing, and opened again, as if checking it still worked." },
          { s: 'shinjiro', f: 'flustered', t: "...Which kitchen. There's been a lot of kitchens." },
          { s: 'solar', f: 'neutral', t: "All of them." },
          { n: "He got up. He came round the table, not fast, the way he did everything now, his weight on the left; and she stood up to meet him, and he stopped in front of her with the persimmons turning behind him in the black window, and looked at her as if he were reading a recipe he'd been told was too hard for him." },
          { s: 'shinjiro', f: 'flustered', t: "...Don't say that kind of thing to a guy who can't feel half his hand. He's gonna drop something." },
          { n: "Then he kissed her. Not slowly, this time. Not like he'd read the packet. Like something he'd held at the back of a cupboard for a long time, behind the good pot, and had finally decided to take down and use, and to hell with saving it; his good hand in her hair and the other at her waist, shaking, holding on, pulling her in against him until the edge of the counter was at her back and the whole cold kitchen had gone warm." },
          { n: "She heard the persimmon strings creak on their hooks. She heard her own breath, and his, and a sound he made against her throat that she was going to keep for the rest of her life, whichever life that was." },
          { ifFlag: 'eqx-shinji-stayed-night', then: [
            { s: 'shinjiro', f: 'flustered', t: "...Upstairs. Before Junpei finds his charger." },
            { n: "They went up the back stairs in the dark with her hand in his, his right one, his own, the grip that dropped twenty-nine in thirty and didn't drop her once, and the last thing she saw before his door shut behind them was the strip of light under it from the hall, and his coat, falling off the hook." }
          ], else: [
            { s: 'shinjiro', f: 'flustered', t: "...Not here. Junpei's looking for his charger. He'll come down. He'll write it in the book." },
            { s: 'solar', f: 'happy', t: "So take me somewhere he won't." },
            { n: "He looked at her for a long second, his hair in his eyes, breathing as if he'd carried something up a hill. Then he took her hand, the right one, his own, the grip that dropped twenty-nine in thirty and didn't drop her once, and took her up the back stairs in the dark, and the last thing she saw before his door shut behind them was his coat, falling off the hook." }
          ] },
          { place: 'Iwatodai Dorm · Shinjiro’s Room', time: 'Early Morning', bg: 'green-bedroom', soft: true },
          { n: "She woke because it was cold. The window was open a crack, the way he kept it, and the October air had come in over them in the night and found every place the blanket didn't, and she lay with her nose in his shoulder and her feet against his shins and didn't want to move ever again." },
          { n: "He was awake. Of course he was. He'd been watching the window. The sky in it was going from black to the dark blue that comes before anything else, and he was looking at it with an expression she hadn't seen on him before, careful, patient, like a man watching a pot he'd been told not to lift the lid off." },
          { s: 'shinjiro', f: 'neutral', t: "...Not yet. Too warm. Checked." },
          { s: 'solar', f: 'neutral', t: "Checked what?" },
          { s: 'shinjiro', f: 'neutral', t: "Snow." },
          { s: 'shinjiro', f: 'happy', t: "...It's October. I know. I just looked. Gonna look every morning now. You did that. Don't make it a thing." }
        ] },
        { t: "You're family. You were family before any of this. You're stuck with it.", route: 'friend', notes: 3, then: [
          { n: "He looked at her for a long moment. And then something in his shoulders went down, not the inch she'd seen before but further, all the way, the way a man's shoulders go when he takes off a bag he's carried so long he'd stopped knowing it was there; and something else went across his face behind it, quick, and was put away, carefully, at the back of the cupboard. She saw it go. She let him put it there. It was his." },
          { s: 'shinjiro', f: 'neutral', t: "...Family." },
          { s: 'shinjiro', f: 'happy', t: "Hah. Never had one I'd pick. Yeah. Okay. Stuck with it." },
          { s: 'shinjiro', f: 'neutral', t: "Then New Year's mine. Soba. For the whole house. The dads too. Nobody else touches the pot. I'll make it from scratch. The noodles. With this hand." },
          { s: 'solar', f: 'neutral', t: "That's four hours of noodles." },
          { s: 'shinjiro', f: 'neutral', t: "Yeah. So you're cutting. Family cuts." },
          { n: "He reached across the table and put his right hand over hers, briefly, the way you'd tap a counter to say *done*, and took it back. It was shaking. It didn't stop for her. It didn't have to." }
        ] }
      ] },
      { place: 'Iwatodai Dorm · Kitchen', time: 'Late Night', bg: 'iwatodaidorm-kitchen-night', soft: true },
      { n: "Later, she went down for water. She didn't know why she went down; she wasn't thirsty. The kitchen was dark. The red was coming in at the window round the edges of the persimmons, turning their orange to something darker, the color of the inside of a mouth, and they turned slowly on their strings, twelve of them, and she stood in the doorway and counted them twice." },
      { n: "His coat was on the back of his chair by the door. Somebody had hung it there. The long one, the only one he had, the one he'd worn on the hospital roof and on the bridge and down the Well every time; its hem was frayed where he caught it on the rope, and its pockets were full of folded paper, and she'd seen it a thousand times. She looked at it now as if she'd been told to remember it." },
      { n: "At one, upstairs, her phone buzzed." },
      { phone: [
        { from: 'shinjiro', t: "you eat" },
        { from: 'shinjiro', t: "dont answer that. i watched you" },
        { from: 'shinjiro', t: "theyre turning. the persimmons. 7 weeks" }
      ], contact: 'Shinjiro Aragaki' },
      { n: "Seven weeks. She lay in the dark and counted forward on her fingers, under the blanket, the way you'd count the days to something, the way you'd count to the snow, and got to the end of November, and the beginning of December, and stopped there, with her hand closed on the number, and didn't count any further, and didn't know why." }
    ] }
  ]
});
