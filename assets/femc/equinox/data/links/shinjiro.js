/* Persona 3: Equinox · Shinjiro Aragaki · XVIII The Moon. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1–2 (rank 1 from 4/13, rank 2 from 4/18, both Tatsumi Memorial Hospital after school; rank 2 branches
   on eqx-knock and Mrs. Oka's rank). Ranks 3–15 still to write. Rank 2 flag (nothing reads it yet): eqx-shinji-egg.
   Shape: the stub fields from assets/femc/equinox/data/links.js (this file wins over the stub, core.js indexLinks).
   Picks up the 4/11 visiting-hours event (story-opening.js eqx-shinjiro). Speakers without portraits: nurse, therapist.
   Solstice's ranks are shared memory (he woke on 2/27; the year before that is what he remembers, and the coma isn't). */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'shinjiro', name: 'Shinjiro Aragaki', short: 'Shinjiro', arcana: 'Moon', numeral: 'XVIII', from: 'Persona 3', kind: 'sees',
  romance: 'canon', maxRank: 15, starts: '4/11', lodging: 'dorm',
  cast: { nurse: 'Nurse', therapist: 'Therapist' },
  home: { area: 'hospital', spot: 'Ward', slot: 'after', days: [0, 1, 2, 3, 4, 5, 6],
          hint: 'Afternoons at Tatsumi Memorial Hospital, on the ward. For now.' },
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
    ] }
  ]
});
