/* The strangers epilogue, story-end.js (writer D): 3/10-3/16/2013, the pull and the final. Batch 7.
   Calendar from 34 days to the wedding down to 28. A good Sunday on purpose, the dinner where the whole house sees her go,
   the three route beats on 3/13, fight 4 on the mudflats, the last ordinary day, and the bottom of the tide.

   Events (R.events)
     epi-s-sunday       3/10 after (consumes)                  thirty-four: Auntie Song's Sunday dumplings, the real Molihua, the crossword, Yunjin's nature documentary
     epi-s-dinner       3/11 evening (consumes)                dinner: the whole house at the table; she flickers for a full second; the house decides not to say so
     epi-s-hc-count     3/13 evening (consumes; route haechan) count: the annex; her father comes down the garden ("Go to bed, son."); the count, and her bigger one
     epi-s-jw-window    3/13 evening (consumes; route jungwon) across the water: his room, her window from it, the question again; "I don't know."
     epi-s-fam-staying  3/13 evening (consumes; route family)  are you staying: the seventh stair; the one question; he nods as if she'd answered
     epi-s-contact      3/14 late                              one second: fight 4 (epi-strangers-4) on the mudflats at midnight; Akihiko says her name back; the garden, both boys
     epi-s-last         3/15 after (consumes)                  the last ordinary day: the koi, Pyo, Auntie Song, Appa and the tide she was born on, Mr. Oh, the girls' call, Eomma's pins
     epi-s-held         3/16 early (consumes; ends: true)      hold on: before light at the bottom of the tide; both boys hold on, one hand each; the tide stops; it ends mid-pull

   Flags set
     epi-s-flickered (dinner) · epi-s-contact (contact) · epi-s-held (held)
     local: epi-s-sun-fold / epi-s-sun-tide / epi-s-sun-plate (sunday's choice; unread) · epi-s-ask-hold / epi-s-ask-letgo /
     epi-s-ask-tide (held: what she asks the boys before the bottom of the tide; read later in the same scene)
   Flags read
     epi-route-haechan / -jungwon / -family (event gates on 3/13; ifEpiRoute in sunday, dinner, contact, last, held) ·
     epi-s-molihua, epi-s-clocks (sunday) · epi-s-appa-lie, epi-s-appa-quiet (fam-staying) · epi-s-alliance, epi-s-tables
     (contact) · epi-s-fever (last) · epi-s-ask-* (held)
   ifYear read: none.
   Glitches used
     inline: epi-s-g-dinner (dinner), epi-s-g-contact (contact, fight 4), epi-s-g-evoke (held, right before her one choice),
     epi-s-g-pull (held), epi-s-g-stop (held: the tide stops and doesn't start); each once.
     { glitch: { stage: 4 } } in dinner (sets it a day early, per glitches.js), contact and held; { glitch: { strain: 1 } } after
     the fever lie holds on the girls' call (last); { glitch: { near: true } } at dinner (the boys standing, silent) and in the
     garden after fight 4.
   Bonds: haechan +1 (hc-count), jungwon +1 (jw-window), appa +1 (fam-staying), eomma +1 (last).
   Fight: epi-strangers-4 'One Second' (the brief's battle line, verbatim).
   Music: epi-s-house (sunday), epi-s-family (dinner, fam-staying), epi-s-haechan, epi-s-jungwon, epi-s-half (contact),
     epi-s-last (last), world-strangers (held).

   Inventions for Kat to confirm (structural, small)
     - The whole house eats together at the long dining-room table on 3/11 because her father said so after the clocks stopped;
       Mr. Oh wears a tie to it.
     - On Sunday Jungwon has come over "for the baduk" with her father (nobody believes it); he doesn't fold dumplings, he counts
       Haechan's pleats.
     - Her father has never once come down the garden to the annex in Haechan's seven years there (3/13, Haechan's route).
     - Haechan counted the times she stitched him by the empty suture packets in the make-up bag; no numbers are ever said.
     - She sees her own window from Jungwon's room: second from the left; Yunjin's is the one that's never off.
     - Low water on 3/16 is 4:12 a.m.; her father tells her on 3/15 that she was born at four in the morning at the bottom of a
       spring tide and he'd never seen the mud go out so far. In the final she turns the kitchen calendar herself (28), the first
       time she has got there first.
     - At the end Jungwon takes her right hand the way you shake on a contract (right in right); Haechan has her left.
*/
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).strangers ||= {});
  (R.events ||= []).push(

  // ───────────────────────────────── 3/10, Sunday ─────────────────────────────────
  { id: 'epi-s-sunday', date: '3/10', slot: 'after', consumes: true, title: 'thirty-four', place: 'Incheon · The Lee House · Kitchen', time: 'Daytime', scene: [
    { music: 'epi-s-house' },
    { n: "Somebody had turned the calendar again before she got down. Somebody always did now. The number in the box under the wedding said thirty-four, in Mrs. Bang's red pen, circled twice, as if it might try to get away in the night if nobody held it down." },
    { n: "She'd decided on the stairs, somewhere around the seventh one, that today was going to be good on purpose. Not by accident, not in the gap between two bad things, but on purpose, the way you decide to carry a full cup of tea across a room without looking at it, and she came into the kitchen with her hair still down and her sleeves pushed up past the elbow, and the kitchen, as if somebody had told it, was already loud." },
    { n: "Steam on every window. Flour on the long table like a light snow. Auntie Song at the head of it in her rubber boots with a steel bowl of filling the size of a washtub, pork and chive and ginger and something she never told anyone about, and a stack of wrappers under a damp cloth, and her sleeves tied back with two of Mrs. Bang's clothes pegs. The koi bucket had been brought in off the back step because of the frost and set under the radiator, and Mr. and Mrs. Kim went round in it, slowly, like two old people walking after lunch." },
    { n: "Her father was at the far end of the table with the Sunday crossword folded into quarters and his reading glasses on their cord, a pencil behind his ear, an Esse Light behind the other one, unlit, because Mrs. Bang had a rule about her kitchen and he was the only man in Incheon who obeyed it." },
    { n: "Then Auntie Song started to sing." },
    { n: "*Molihua.* Jasmine flower. Off-key, the way she always sang it, a little flat on the high note and a little sharp coming down, rolling a wrapper on the board with the heel of her hand in time." },
    { ifFlag: 'epi-s-molihua', then: [
      { n: "Every head in the kitchen came up at once. Pyo dropped a wrapper. Minseok's hand went to the back door before the rest of him had decided anything. Mrs. Bang stood very still at the sink with the tap running. Two nights ago the old radio on the annex sill had sung this song by itself at two in the morning in exactly this voice, and in this house, loud, it had only ever meant one thing." }
    ], else: [
      { n: "Every head in the kitchen came up at once. Pyo dropped a wrapper. Minseok's hand went to the back door before the rest of him had decided anything. Mrs. Bang stood very still at the sink with the tap running. In this house that song, loud, had only ever meant one thing, and everybody under this roof had learned to listen for it." }
    ] },
    { n: "Auntie Song stopped. She looked round at them all, at the hand on the door and the dropped wrapper and the running tap, with the face of a woman who'd been cooking for this family for nineteen years and had had about enough." },
    { s: 'auntie', t: "*It's Sunday.*" },
    { s: 'auntie', t: "*On Sundays it's a song.*" },
    { n: "Mrs. Bang laughed first. One bark of it, surprised out of her, and then she turned the tap off and leaned on the sink and laughed properly. Then her father's shoulders went, behind the newspaper. Then Pyo, high and frightened and helpless, and Minseok took his hand off the door and looked at it as if it belonged to somebody else, and Auntie Song picked up the song exactly where she'd left it, louder, worse, on purpose." },
    { s: 'auntie', t: "*Xiao yueliang. Sit. Fold. Your hands have forgotten everything.*" },
    { n: "She sat." },
    { n: "Haechan was already at the table, press-ganged, by the look of it, in a gray sweatshirt with flour to the elbows and his silver ring on the board beside him, folding dumplings with the deep concentration of a man defusing something. Every one he made looked like a small animal that had been in an accident." },
    { n: "Jungwon was at the other end, by her father, with a cup of tea in his right hand and nothing at all in front of him. He'd come over at eleven *for the baduk*, he'd told Mrs. Bang at the door, in his good gray sweater, and nobody in the house believed that, least of all her father, who had nodded and said the board was in the study and then not gone anywhere near the study." },
    { s: 'jungwon', f: 'neutral', t: "That one has eleven pleats." },
    { s: 'haechan', f: 'neutral', t: "Thanks. Nobody asked." },
    { s: 'jungwon', f: 'neutral', t: "The last four had nine. I thought you'd want to know you were improving." },
    { s: 'haechan', f: 'serious', t: "Young master. Come down this end and fold one. Go on. Show the class." },
    { n: "Jungwon smiled at him. Both dimples, deep, the full set, the smile he gave customs officers and aunties and men he was about to ruin." },
    { s: 'jungwon', f: 'happy', t: "I wouldn't dream of taking it from you, Donghyuck." },
    { n: "Yunjin came in from next door in her yellow puffer and a pair of Solar's socks, took one look at the table, and stopped in the doorway with her hands up, framing it like a shot." },
    { s: 'yunjin', f: 'happy', t: "Here, in the warm shallows of the Lee family kitchen, we find the delivery boy in his natural habitat." },
    { s: 'haechan', f: 'serious', t: "Don't." },
    { s: 'yunjin', f: 'happy', t: "Observe the plumage. Observe the hands. He has never folded anything in his life, but he must fold, or he will not be fed." },
    { s: 'haechan', f: 'neutral', t: "I will put you in the bucket with the fish." },
    { s: 'yunjin', f: 'happy', t: "The delivery boy becomes aggressive when observed. This is normal. Across the watering hole, the young heir has not moved in forty minutes. He is conserving his energy. He may be dead." },
    { s: 'jungwon', f: 'neutral', t: "I'm listening, Yunjin-ssi." },
    { s: 'yunjin', f: 'surprised', t: "He lives." },
    { n: "Her mother passed through on the way to the sunroom with a tray, in a cream cardigan, her hair perfect, and on her way past she let her fingers trail down Solar's right arm to her hand, and touched the jade ring on it, once, the way she'd touched it every time she passed her for three weeks, as if checking it was still on the right hand and the right hand was still on the girl. She looked at Solar's hair, down, in the daytime, in a kitchen full of men, and opened her mouth, and then closed it, and that was a gift. Solar knew a gift when she got one." },
    { s: 'eomma', t: "Too much ginger." },
    { s: 'auntie', t: "*I don't understand Korean.*" },
    { n: "She had understood Korean for nineteen years. Her mother went on into the sunroom. Auntie Song put in more ginger." },
    { s: 'appa', t: "Sol-ah. Seven down." },
    { n: "He didn't look up from the paper. He never did, for the crossword. He just held the pencil out in her general direction like a man offering a cigarette across a table." },
    { s: 'appa', t: "What goes out twice a day and comes back without being asked." },
    { choose: [
      { t: "(Fold beside Auntie Song. Nine pleats. See if your hands remember.)", stat: { kindness: 1 }, flag: 'epi-s-sun-fold', then: [
        { n: "She took a wrapper off the stack and wet the edge with her finger and filled it and folded it, nine pleats, small and tight and even, without looking, the way the aunties had taught her when she was smaller than the table, and set it down on the board in front of Auntie Song." },
        { n: "Auntie Song looked at it for a long time. She picked it up and turned it over, and turned it back, and put it down at the very front of the tray, where the good ones went, where the ones that went to the Chairman's bowl went." },
        { s: 'auntie', t: "*There. Not forgotten.*" },
        { n: "Then she went on singing, and didn't look at Solar again for a while, and blew her nose once into a tea towel and blamed the onions, though there weren't any." }
      ] },
      { t: "It's the tide, Appa. It's always the tide.", stat: { knowledge: 1 }, flag: 'epi-s-sun-tide', then: [
        { s: 'appa', t: "It's never the tide." },
        { s: 'solar', t: "Try it." },
        { n: "He tried it. He counted the boxes with the end of the pencil, his lips moving the way they did when he counted money, and stopped, and looked at the paper over the top of his glasses for a long time." },
        { s: 'appa', t: "...It fits." },
        { s: 'solar', t: "It always fits. You put it in every week." },
        { s: 'appa', t: "I like to be asked." },
        { n: "He wrote it in, in his small square blue capitals, and didn't hand her the pencil back, and didn't need to." }
      ] },
      { t: "(When the first batch comes out of the pot, put one of Haechan's on Jungwon's plate.)", stat: { charm: 1 }, flag: 'epi-s-sun-plate', then: [
        { n: "Minseok carried the big pot over from the stove, because it was the size of a small boat and Mrs. Bang wouldn't let anyone else touch it, and the first batch came out steaming in the bamboo, and she reached past everybody with her chopsticks and picked out the worst one on the tray, the one with eleven pleats and a split down the side, and put it on Jungwon's plate." },
        { n: "He looked down at it. He looked at Haechan. Haechan looked back with enormous innocence and his cheeks full." },
        { s: 'jungwon', f: 'neutral', t: "Thank you, Solar-ssi. It's very generous of you." },
        { n: "He ate it. In two neat bites, chewing carefully, and set his chopsticks down square to the plate." },
        { s: 'jungwon', f: 'neutral', t: "It tastes like it was made by a man who'd been told about dumplings once, in a bar." },
        { s: 'haechan', f: 'happy', t: "Best one you've ever had." },
        { s: 'jungwon', f: 'neutral', t: "Yes. Unfortunately." }
      ] }
    ] },
    { ifEpiRoute: 'haechan', then: [
      { n: "Under the table his knee found hers and stayed there, warm through the cotton, the whole of the second batch, and he didn't look at her once, which was how she knew he'd meant it." }
    ] },
    { ifEpiRoute: 'jungwon', then: [
      { n: "Down the table, Jungwon wasn't smiling. His face had gone still, completely still, over his teacup, watching her fold, and she'd learned to read him backwards by now, so she knew exactly how pleased he was, and had to look at the dumplings for a while." }
    ] },
    { ifEpiRoute: 'family', then: [
      { n: "Later her father pushed the crossword across the flour to her, the pencil on top of it, and went to stand at the back door with the Esse Light still unlit, looking at the garden. He had never once let anybody else finish his crossword. She finished it. He didn't check it." }
    ] },
    { ifFlag: 'epi-s-clocks', then: [
      { n: "Somebody had set the kitchen clock going again on Friday. It said ten past one. She checked it twice anyway, and caught Mrs. Bang checking it too, and they both looked away at the same time." }
    ] },
    { n: "The windows ran. The koi went round under the radiator. Haechan's dumplings came out of the pot looking worse than they'd gone in, which nobody had thought possible, and Yunjin narrated their deaths one by one in a hushed voice, and Pyo laughed so hard he had to go and stand in the yard." },
    { n: "Let the good parts be good. She didn't know where she'd heard it. It didn't matter. She sat in the middle of the loudest kitchen in Incheon with flour on her wrists and thirty-four days on the wall and Auntie Song singing the warning song like it was only a song, and she let it be good, all afternoon, on purpose, and didn't look at the clock again until it was nearly dark." }
  ] },

  // ───────────────────────────────── 3/11, dinner ─────────────────────────────────
  { id: 'epi-s-dinner', date: '3/11', slot: 'evening', consumes: true, title: 'dinner', place: 'Incheon · The Lee House · Dining Room', time: 'Evening', scene: [
    { music: 'epi-s-family' },
    { n: "The long table had all its leaves in. It only got all its leaves at Chuseok and at funerals, and it wasn't Chuseok, and the week after the clocks stopped her father had come into the kitchen and said, to nobody, that this house would eat together on Monday, all of it, at the table, and gone back out again, and Mrs. Bang had stood there with a dishcloth for a full minute before she started counting chairs." },
    { n: "So here they were. Monday. All of it." },
    { n: "She counted. She always counted. Her father at the head with his glasses on the cord. Her mother on his right in dark green, her hair up, her back not touching the chair. Solar on his left. Jungwon beside her, because he was the fiancé and the house had started setting a place for him without being told. Haechan across from her, because he was Haechan, and her father had pointed at the chair. Yunjin, and her mother beside her at the far end, small and quiet in a gray cardigan, eating very slowly. Mr. Oh in a jacket and a tie he so clearly hated that he kept touching the knot as if it might go off. Minseok. Pyo at the very end, terrified of the good plates. Auntie Song on the edge of a chair by the kitchen door, refusing to sit back in it, ready to get up. Mrs. Bang on her feet with the ladle, serving, because nobody on earth could have made her sit." },
    { n: "Ten people at the table, and the eleventh standing, and two fish in a bucket in the kitchen. Eleven cups. She counted them twice." },
    { n: "It was loud, after a while. That surprised her. The first ten minutes were like a funeral, everybody passing things very carefully, and then Mr. Oh said something about the car, and Haechan said the car was a disgrace, and Mr. Oh said that the car had been driven for fourteen years by a man who never once braked hard and it was the only car in the house that had never been in a ditch, and looked at Haechan, and Haechan put both hands up, and Minseok laughed into his rice." },
    { s: 'yunjin', f: 'happy', t: "Mr. Oh. Mr. Oh. Tell them about the ditch. Tell them which ditch." },
    { s: 'mroh', t: "I don't discuss other men's ditches at dinner." },
    { s: 'haechan', f: 'happy', t: "It was ONE ditch. It was ice. The ditch came out of nowhere." },
    { s: 'jungwon', f: 'neutral', t: "Ditches are famously stationary." },
    { s: 'haechan', f: 'serious', t: "Eat your soup, young master." },
    { n: "At the far end Pyo was eating plain rice, nothing on it, because the fish was in the middle of the table in front of the Chairman and he would rather have starved than reach across the Chairman for it. Haechan saw. He didn't say anything about it. He just picked the cheek out of the grilled croaker with his chopsticks, the best piece, the piece that went to her father every time, and leaned all the way down the table and put it on top of Pyo's rice." },
    { s: 'pyo', t: "I— that's— that's the—" },
    { s: 'haechan', f: 'neutral', t: "Eat. You're nineteen. You're still growing." },
    { s: 'pyo', t: "I'm not still growing." },
    { s: 'haechan', f: 'neutral', t: "Grow anyway." },
    { n: "Her father watched the cheek go down the table, and said nothing, and picked the other one out for himself, and that was the end of that." },
    { n: "Her mother asked Jungwon whether his mother was well, across the table, in the voice she used for other men's wives at weddings, and Jungwon put his chopsticks down square to his bowl to answer her, and said that she was very well, thank you, and sent her regards, and Yunjin kicked Solar under the table at *regards*, hard, and Solar kicked her back, and neither of them looked up from their soup." },
    { n: "Her father lifted his cup. Barley tea, not soju; there was no soju on the table tonight, which nobody mentioned either. He held it up for a second over the table, over all of them, and everybody stopped." },
    { s: 'appa', t: "Eat." },
    { n: "That was the whole toast. He drank. Everybody ate. Mr. Oh nodded slowly, as if it had been a very good speech." },
    { n: "Her father didn't say much. He ate, and he watched them, all of them, down the table, the way he watched the harbor from the car, and once she saw him look at her mother and her mother look back, a whole conversation in it, and then they both looked down at their bowls." },
    { n: "Mrs. Bang came round with the seaweed soup. She ladled it for Solar first, the way she always had, since Solar was small enough to need the bowl held, and Solar put her hand flat on the tablecloth beside the bowl to make room." },
    { glitch: { stage: 4 } },
    { n: "She saw the grain of the table through her hand." },
    { glitch: 'epi-s-g-dinner' },
    { n: "Not the cloth. The table, underneath the cloth, the dark old wood her grandfather had bought, the long grain of it running straight through her fingers as if her fingers were water in a glass. Then her wrist. Then the sleeve of her sweater, and the light of the lamp over the table going through her like light through paper, and the sound of the room went out from under her the way the tide goes out from under a boat, all at once, all the voices and the spoons and the radiator, gone, and for a full second she wasn't sitting at the table at all." },
    { n: "Then she was." },
    { n: "The ladle hit the floor. Mrs. Bang hadn't dropped it so much as let go of it, and it rang on the boards and went under the sideboard and seaweed soup went across the floor in a long green fan, and nobody moved to get it." },
    { n: "Her mother's hand had gone to her mouth." },
    { n: "Both boys were already standing. She hadn't seen them get up. Haechan's chair was on its back on the floor behind him. Jungwon's was exactly where it had been, pushed back without a sound, and he was standing beside it with his right hand flat on the table, very straight, the way a man stands when a glass breaks in a room and he's already counting the doors." },
    { n: "Yunjin had both fists in the tablecloth. Pyo was making a small high sound and didn't seem to know it. Auntie Song had stood up off the edge of her chair and stayed there. Mr. Oh's hands were on the cloth in front of him, ten and two, very still, as if the table were a car and he were waiting for the lights." },
    { n: "Her father took his glasses off." },
    { n: "Slowly. He folded them, one arm and then the other, and set them down on the cloth beside his bowl, very slowly, very carefully, square to the edge of the table, the way he did when he was so angry the room went quiet. He wasn't angry. She'd never seen this before. She didn't know what it was." },
    { s: 'appa', t: "Frightened people pay attention." },
    { n: "He said it to the glasses. It was her mother's line. She'd heard her mother say it to him once, years ago, through a door, and she had never in her life heard him use it about himself." },
    { n: "He looked up at her. Just her. Down the long table, past everybody, with his naked tired eyes." },
    { choose: [
      { t: "(Pick up your spoon. Eat the soup.)", stat: { courage: 1 }, then: [
        { n: "She picked up her spoon. Her hand was a hand. She put it in the soup and lifted it and ate it, and it was too hot and too salty and exactly the same as every bowl Mrs. Bang had ever put in front of her, and she swallowed it and took another." },
        { n: "Down the table, very slowly, Yunjin let go of the tablecloth and picked up her spoon too." }
      ] },
      { t: "I'm fine. I'm— Appa, I'm fine.", then: [
        { n: "Nobody at the table believed her. She could see every one of them not believe her, ten different ways, all at once." },
        { s: 'appa', t: "Eat your soup, Sol-ah." },
        { n: "He said it so gently that she had to look down at it." }
      ] },
      { t: "(Look back at him. Don't look away.)", stat: { kindness: 1 }, then: [
        { n: "She looked back. Down the table, past the candles and the bowls and Haechan's chair on its back, she held her father's eyes and didn't look away, and neither did he, for long enough that her mother put her hand on his sleeve." },
        { n: "Then he picked his glasses up and put them on again. That was all. It was enough to start the room again." }
      ] }
    ] },
    { n: "Mrs. Bang went down on her knees and fished the ladle out from under the sideboard and took it into the kitchen and rinsed it. They all heard the tap. She came back with it dripping and filled Solar's bowl to the brim, first, before anybody else's, and then went round the table filling every single bowl that didn't need filling, and nobody stopped her." },
    { s: 'auntie', t: "*Eat. Ghosts don't eat. Eat and they'll know you're not one.*" },
    { n: "Auntie Song said it in Mandarin, to the room, to nobody, and sat back down on the edge of her chair. Solar was the only one at the table who understood it except Jungwon, and Jungwon didn't look at her, and she didn't look at him." },
    { n: "Haechan picked up his chair. He set it on its legs and sat down on it and picked up his chopsticks, and Jungwon sat, and neither of them said a word, to her or to each other or to anybody, for the rest of dinner. They didn't need to. She could feel them, one on each side of the table, watching the hand she ate with." },
    { glitch: { near: true } },
    { n: "Nobody said anything about it. Not at the table. Not when the plates went out. Not in the hall, putting coats on. She watched them decide it, one by one, round the table, without anybody saying a word, the same way the house had decided about the fever: Mr. Oh telling the ditch story again, properly this time, with the ice and the farmer; Pyo laughing in the wrong place; her mother asking Mrs. Park about her piano pupils in a perfectly level voice; Minseok taking the pot out to the kitchen without being asked." },
    { n: "Ten people and a bucket of fish. Not one of them was going to say it. She'd never loved anything so much in her life as that table, that night, being quiet about her." },
    { flag: 'epi-s-flickered' },
    { ifEpiRoute: 'haechan', then: [
      { n: "Later, on the back step, he didn't say anything at all. He just took her right hand out of her sleeve and turned it over in both of his, palm up, palm down, in the light from the kitchen window, pressing the fingers one by one as if he were checking a net for holes. Then he gave it back to her and went down the garden without a word, and she knew exactly what that meant from a man who talked more when he was lying." }
    ] },
    { ifEpiRoute: 'jungwon', then: [
      { n: "In the hall he bowed to her father and to her mother, correctly, and thanked them for dinner, and then bowed to her, and when he straightened his face was very white and very calm, and he said, in Mandarin, so quietly only she could hear it, *I'll be at the gate until your light goes off.* Then he went out, and was." }
    ] },
    { ifEpiRoute: 'family', then: [
      { n: "Her father's study light stayed on until four. She knew because she didn't sleep either. At half past four she heard his slippers go down to the kitchen, to the paper, the same as every morning, and she heard him stop at the bottom of the stairs, and stand there, for a long time, and then come back up as far as the seventh stair, and sit down on it." }
    ] }
  ] },

  // ───────────────────────────────── 3/13, Haechan's route ─────────────────────────────────
  { id: 'epi-s-hc-count', date: '3/13', slot: 'evening', consumes: true, flag: 'epi-route-haechan', title: 'count', place: 'Incheon · The Lee House · Annex', time: 'Evening', scene: [
    { music: 'epi-s-haechan' },
    { n: "The annex smelled of the paraffin heater and cinnamon gum and the cold that came in under the steel door no matter what anybody did about it. He'd propped the door with a brick so she wouldn't have to knock. He always did now. She'd never asked him to." },
    { n: "He was on the iron bed with his back against the wall and Mrs. Bang's crane quilt over his knees, all those faded white birds going nowhere on a blue ground, and the old silver radio on the sill behind his head, switched off, and the Discman on his knee." },
    { n: "The cracked one. Silver, the lid split across one corner and mended with tape, the earbuds in his ears, the wire running down to it. Nothing playing. She knew nothing was playing. The batteries had been dead since before she'd ever heard his name, and there was somebody else's old disc still in it, and he sat there with the earbuds in anyway, some nights, with his eyes shut and his thumb on the lid, and she had never once asked him why, and she wasn't going to start now." },
    { s: 'haechan', f: 'neutral', t: "Agasshi. You're letting the heat out." },
    { s: 'solar', t: "You haven't got any heat. You've got a heater that smells like the inside of a bus." },
    { s: 'haechan', f: 'happy', t: "It's a very good bus." },
    { n: "She shut the door behind her and kicked the brick away from it and sat down on the end of the bed, on the quilt, on his feet, on purpose, and he made a noise like she'd sat on a cat and didn't move them." },
    { n: "Two days since dinner. Nobody had said a word about it. He hadn't either. He'd just been everywhere she was, for two days, at the edge of every room, eating an apple, reading a paper upside down, leaning on the hall table, like a man who'd been told to wait for a delivery and didn't know which door it would come to." },
    { n: "Footsteps on the garden path." },
    { n: "Slippers. Slow. On the frozen gravel, coming down from the house, past the onggi jars, past the bare persimmon tree, and Haechan's face changed. Not much. It just stopped performing, all at once, the way it did when he was really afraid, and he took the earbuds out of his ears and sat up." },
    { n: "Her father stood in the doorway." },
    { n: "In his brown cardigan and his house slippers, with his reading glasses hanging on their cord against his chest and his hands in his pockets, looking into the annex. At the heater. At the quilt with the cranes on it, which Mrs. Bang had given away out of his own linen cupboard without asking him. At the radio. At the Discman on Haechan's knee. At his daughter, sitting on the end of a bed with her hair down, at ten o'clock at night, at the bottom of the garden." },
    { n: "In seven years he'd never come down the garden. Not once. When he wanted Haechan he sent someone, or stood on the back step and said his name, and Haechan came. He had never once stood in this door." },
    { n: "He looked at all of it for a long time. Nobody said anything. The heater ticked." },
    { s: 'appa', t: "Go to bed, son." },
    { n: "Then, after a while, as if it had only just occurred to him, as if it were the same sentence." },
    { s: 'appa', t: "It's cold. Shut the door after her." },
    { n: "He turned round and went back up the garden. They listened to his slippers on the gravel all the way to the back step, and the back door, and the kitchen light going off." },
    { n: "Haechan didn't move for a full minute. He sat there against the wall with the earbuds in his hand and stared at the door." },
    { s: 'haechan', f: 'surprised', t: "...He's never come down here." },
    { s: 'solar', t: "I know." },
    { s: 'haechan', f: 'surprised', t: "Seven years. Not once. He doesn't come down here. I go up there." },
    { s: 'solar', t: "I know, Donghyuck-ah." },
    { n: "He looked at her. Then down at the Discman. He turned it over in his hands, once, and put the earbuds back in his ears, slowly, one and then the other, and shut his eyes, and she thought that was the end of it." },
    { s: 'haechan', f: 'neutral', t: "I've been counting." },
    { s: 'solar', t: "Counting what." },
    { s: 'haechan', f: 'neutral', t: "You. Your little bag. The times you've sewn me up." },
    { n: "He said it with his eyes shut, in the same voice he used for the price of diesel." },
    { s: 'haechan', f: 'neutral', t: "The ones I was awake for, I counted at the time. The ones I wasn't, I counted after. You keep the empty packets in the bottom of the make-up bag. The paper ones. You fold them in four. You don't throw them out, because you think somebody'll find them in the bin." },
    { n: "She hadn't known he knew that. She hadn't known anybody knew that." },
    { choose: [
      { t: "Why are you counting?", then: [
        { n: "He opened his eyes. He didn't look at her. He looked at the ceiling, at the water stain shaped like Jeju that he said was Jeju and she said was a kidney." },
        { s: 'haechan', f: 'serious', t: "Because if you go, somebody in this world should have the number right." },
        { n: "He'd aimed that. He never said anything like that by accident. He'd been sitting on it for two days, since the soup went across the floor, waiting for the right door to come in by." }
      ] },
      { t: "(Take one earbud out of his ear and put it in yours.)", stat: { kindness: 1 }, then: [
        { n: "She reached over and took the left earbud out of his ear, gently, and put it in her own, and leaned back against the wall beside him with the wire between them." },
        { n: "Nothing. A small dead plastic hiss, and under it, very faint, the sea. That was all. She sat there and listened to it with him, the nothing, the hiss, the sea, for a long time, and he didn't say anything, and his shoulder came to rest against hers." }
      ] },
      { t: "You've got it wrong. Tell me the number.", stat: { courage: 1 }, then: [
        { n: "He opened one eye." },
        { s: 'haechan', f: 'neutral', t: "I've never had a number wrong in my life, agasshi." },
        { s: 'solar', t: "You've had every number wrong in your life. You owe half the old men on the quay for baduk. Tell me." }
      ] }
    ] },
    { n: "He said a number." },
    { n: "He said it flat, like a tally at the end of a shift, and opened his eyes to see what she'd do with it." },
    { n: "She said a bigger one." },
    { n: "He went very still. She watched it go through him, the gap between the two, every one of them a night he'd been somewhere else, under, out, away, and she'd been there with the lamp and the bag and her hands steady, and he'd never known, and she'd never said." },
    { s: 'haechan', f: 'sad', t: "...When." },
    { s: 'solar', t: "You were asleep." },
    { s: 'haechan', f: 'sad', t: "All of them?" },
    { s: 'solar', t: "Asleep. Or near enough. You snore when you're near enough. You told me once it was the sea." },
    { n: "He was quiet for so long she thought she'd broken something. Then his mouth went, at one corner." },
    { s: 'haechan', f: 'happy', t: "You sewed me up in my sleep. Like a shoe." },
    { s: 'solar', t: "Like a very ugly shoe." },
    { s: 'haechan', f: 'happy', t: "Like a shoe you'd never let anybody see you wear." },
    { bond: { haechan: 1 } },
    { n: "He put the Discman down on the sill, beside the radio, very carefully, the way you put down something that's asleep. Then he reached for her, and pulled her down onto the quilt and the cranes and the cold side of the bed, and kissed her, slow, cinnamon and the heater and his thumb on the jade ring on her right hand, turning it, the way she turned it when she was counting, as if he'd learned it off her." },
    { n: "The heater ticked. The radio on the sill didn't make a sound. Up at the house, in the room next to hers, Yunjin's light was on, the way it always was, and the garden between here and there was white and very quiet." },
    { s: 'solar', t: "My father told you to go to bed." },
    { s: 'haechan', f: 'neutral', t: "This is my bed." },
    { s: 'solar', t: "He told you to shut the door after me." },
    { n: "He didn't let go of her hand. He didn't get up to shut anything." },
    { s: 'haechan', f: 'flustered', t: "...After, agasshi. He said after." }
  ] },

  // ───────────────────────────────── 3/13, Jungwon's route ─────────────────────────────────
  { id: 'epi-s-jw-window', date: '3/13', slot: 'evening', consumes: true, flag: 'epi-route-jungwon', title: 'across the water', place: "Incheon · The Yang House · Jungwon's Room", time: 'Evening', scene: [
    { music: 'epi-s-jungwon' },
    { n: "Her father had sent her across with a crossword dictionary. That was the reason. It was an old one with a broken spine and his name inside the cover in blue ballpoint, and Jungwon had asked on Sunday, very politely, whether he might borrow it, and her father had looked at him over his glasses for a long time and then said Solar would bring it round, and that was how she knew her father knew exactly what the dictionary was for." },
    { n: "Sunghoon let her in. He was at the door when Mr. Oh pulled up, as if he'd been there since lunch, in a black coat, facing the door, and he looked at her for exactly one second longer than he needed to and then said Jungwon was upstairs, and stepped aside, and didn't follow her up." },
    { n: "His room was at the end of the west wing. She'd been in it before. It never changed. A narrow bed made so tight you could have bounced a coin on it. A kaya board on a low stand by the window with a game half played on it, black and white, against himself, the way he played. No pictures. Nothing on the walls at all. A room like a held breath." },
    { n: "And the window." },
    { n: "He was standing at it when she came in, with his back to the door and his right hand in his trouser pocket, looking out, and he didn't turn round. Out past the dark garden and the wall and the black water, all the way across, the lights of the other shore, small and yellow and steady, and among them, she realized slowly, the Lee house. Her house. The long roof. The garden going down to the annex. The windows." },
    { s: 'jungwon', f: 'neutral', t: "Thank you for the dictionary. Please thank your father." },
    { s: 'solar', t: "You don't need a crossword dictionary." },
    { s: 'jungwon', f: 'neutral', t: "No. I don't." },
    { n: "She came and stood beside him at the glass. Their breath fogged it in two separate patches." },
    { s: 'jungwon', f: 'neutral', t: "Second from the left, on the upper floor. That one is yours." },
    { n: "It was. She could see it. The lamp she'd left on, small and gold, in a house across the water, like a coin at the bottom of a glass." },
    { s: 'jungwon', f: 'neutral', t: "The one beside it is Yunjin-ssi's. It's never off. And the small one, at the bottom of the garden, is Donghyuck's, and it goes off at two and comes on again at four." },
    { s: 'solar', t: "How long have you been able to see my window from here?" },
    { n: "He touched the watch on his wrist. Turned it a little, on the bone, with his thumb. She'd learned that meant he was choosing which true thing to say." },
    { s: 'jungwon', f: 'neutral', t: "Always." },
    { n: "That was all he said. Always. She looked at the little gold window across the water and thought about every night of her life she'd stood at it, not sleeping, watching the tide go out, and somebody on this side of the water standing at this one, watching the light." },
    { n: "He switched to Mandarin. He did that when things were going to be said that weren't for the walls." },
    { s: 'jungwon', f: 'serious', t: "*May I ask you again?*" },
    { s: 'solar', t: "*You're going to anyway.*" },
    { s: 'jungwon', f: 'serious', t: "*Thirty-one days. The thirteenth. Do you want it?*" },
    { n: "He didn't look at her when he asked it. He looked at her window." },
    { n: "She thought about lying. She was very good at it. She'd lied to her aunt and to a policewoman and to her own mother in the last three weeks, smoothly, beautifully, and every lie had held, and she could have done it now, here, at this window, and he'd have known, and been polite about it." },
    { s: 'solar', t: "*I don't know.*" },
    { n: "His face went still." },
    { n: "Completely still. No dimples. Nothing. Not one muscle of it moving, in the light from his own window, and if she hadn't known him she'd have thought she'd hurt him, and because she did know him she had to put her hand on the cold sill to stand up." },
    { s: 'jungwon', f: 'neutral', t: "*Thank you.*" },
    { s: 'solar', t: "*For what?*" },
    { s: 'jungwon', f: 'neutral', t: "*Everybody else has told me yes. My father. Your father, in his way. My mother's florist. The man at the hall who measures the chairs.*" },
    { s: 'jungwon', f: 'neutral', t: "*You're the first person who has told me the truth about it. I'm going to keep it.*" },
    { n: "She opened her mouth. Something else was there, behind *I don't know*, something that had been sitting at the back of her teeth for three weeks, in a language she'd learned from old women in a fish market, and it came all the way up to her mouth and stopped there." },
    { choose: [
      { t: "(Write it on the glass in the fog of your breath. Wipe it out before he can read it.)", stat: { charm: 1 }, then: [
        { n: "She breathed on the window. A small gray cloud on the glass, over her own little gold light across the water. She wrote in it with one finger, fast, one character, and wiped it out with the side of her hand before it had finished being a word." },
        { n: "He'd seen. She knew he'd seen. He'd seen her finger move, and he could read a stroke order upside down across a table at forty paces, and he didn't say what it was. He didn't ask." },
        { s: 'jungwon', f: 'flustered', t: "That was unfair." },
        { s: 'solar', t: "Yes." }
      ] },
      { t: "*Do you?*", then: [
        { n: "He turned his head and looked at her for the first time since she'd come in. And there they were. The dimples. Deep and sweet and completely false, the polite ones, the ones for customs officers." },
        { s: 'jungwon', f: 'happy', t: "*I asked first, Solar-ssi.*" },
        { n: "She could have hit him. She didn't. She looked back at her window and so did he, and the thing behind her teeth went back down where it lived." }
      ] },
      { t: "(Say nothing. Stand at the window with him.)", stat: { kindness: 1 }, then: [
        { n: "She didn't say it. She stood there beside him with her shoulder an inch from his and looked at her own window across the water, and after a while he took his right hand out of his pocket and put it, very lightly, flat on the small of her back, and left it there, and neither of them said anything at all for as long as it took the lamp across the water to stop looking like a coin and start looking like a house." }
      ] }
    ] },
    { bond: { jungwon: 1 } },
    { n: "He turned her round by the waist with one hand. Slowly, as if asking permission and being very sure of the answer. The window was cold against her back through her coat and he wasn't, and he kissed her the way he did everything, carefully, precisely, without hurrying, as if he'd read about it and then improved on what he'd read, and his watch ticked against her hip, and she put her hand flat on his chest, over his heart, and felt it going hard and fast under the good gray wool, nothing like his face." },
    { n: "Somebody knocked on the door. Twice." },
    { s: 'sunghoon', f: 'neutral', t: "Mr. Oh is at the gate." },
    { n: "Sunghoon's voice, flat, through the wood. He didn't open the door. She could tell from the voice that he was standing with his back to it." },
    { s: 'sunghoon', f: 'neutral', t: "He says the car is getting cold. He hasn't said please." },
    { n: "Jungwon put his forehead against hers, for one second, and shut his eyes." },
    { s: 'jungwon', f: 'neutral', t: "He never does." },
    { n: "He walked her down. Through the west wing and the long dark hall and out to the gate, his hand at her back the whole way, and bowed to Mr. Oh, correctly, and opened the car door for her, and shut it. When the car pulled away she turned round in the back seat, and he was still at the gate, and then, by the time they reached the corner, he wasn't. He was upstairs. She knew where. She knew which window." }
  ] },

  // ───────────────────────────────── 3/13, the family route ─────────────────────────────────
  { id: 'epi-s-fam-staying', date: '3/13', slot: 'evening', consumes: true, flag: 'epi-route-family', title: 'are you staying', place: 'Incheon · The Lee House · Stairs', time: 'Evening', scene: [
    { music: 'epi-s-family' },
    { n: "Ten o'clock. The house had gone quiet early, the way it had every night since dinner on Monday, as if everybody had agreed to go to bed before anything else could happen. Down in the kitchen the tap dripped. Out on the back step the koi went round. Yunjin's light was on next door, under the door, a thin gold line on the hall floor." },
    { n: "He was on the seventh stair." },
    { n: "Sitting on it, in his brown cardigan, with his slippers on the sixth and his glasses on their cord and two cups of barley tea beside him on the stair, steaming. Waiting. He didn't look up when she came out of her room. He knew which board in the hall she'd step on. He'd been listening to that board for twenty-one years." },
    { n: "Down in the hall Mrs. Bang came round the corner from the laundry with a stack of folded towels to her chin, and looked up the stairs, and saw the two of them, and stopped. Then she turned round and went straight back the way she'd come, towels and all, treading much louder than she needed to on every board so they'd know exactly how far away she'd gone." },
    { n: "Next door, Yunjin's door opened an inch. The line of gold on the hall floor got wider, and stayed wide for a moment, and then very quietly got thin again." },
    { ifFlag: 'epi-s-appa-lie', then: [
      { n: "Three weeks ago, on this stair, she'd told him about the fever, and he'd let her. They'd both known. He'd let her anyway, because that was what he'd decided to do, and she'd carried it around for three weeks like a stone in her shoe." }
    ] },
    { ifFlag: 'epi-s-appa-quiet', then: [
      { n: "Three weeks ago, on this stair, she'd said nothing at all, and he'd let that be an answer. She'd thought about it every night since. What it must have cost him, to let it." }
    ] },
    { n: "She sat down beside him. On the seventh stair, which creaked, which had always creaked, which he'd never once let anyone fix." },
    { n: "He handed her a cup. It was hot. She held it in both hands and checked it, without meaning to, the heat of it against her palms, and he saw her do it, and didn't say anything." },
    { n: "They sat there. The hall clock ticked downstairs. Somebody had set it going again." },
    { n: "He didn't ask about the fever. He didn't ask where. He'd stopped asking that before he'd ever started; she knew him well enough to know it had never been his question. He sat there with his tea going cold and his glasses in his hand, and he polished them on the hem of his cardigan, slowly, not because he was angry but because his hands needed somewhere to be." },
    { s: 'appa', t: "Sol-ah." },
    { s: 'solar', t: "Appa." },
    { n: "He put the glasses back on. He looked at the wall across the stairwell, at the old photograph of the harbor in 1971 that had hung there her whole life, all the boats with their names painted on, and he asked it." },
    { s: 'appa', t: "Are you staying." },
    { n: "Not a question, quite. He said it the way he asked Mr. Oh whether the car was ready, the way he asked the sky over the quay whether it would rain. Three words, and the whole house under them, holding its breath." },
    { choose: [
      { t: "Appa, I—", then: [
        { n: "That was as far as it went. She heard it stop. She heard it hit something at the back of her throat and stop there, like a car at a gate." },
        { n: "She tried again, and nothing came at all." }
      ] },
      { t: "(Try to tell him the truth. Any of it.)", needs: { courage: 2 }, then: [
        { n: "She opened her mouth to tell him. All of it, or the beginning of it, the dormitory by the bay and the green and the boy at the door, and she found she didn't know what language it was in. Not Korean. Not English, not Mandarin. She went through all three and there was nothing in any of them that would carry it as far as the next stair." },
        { n: "She shut her mouth." }
      ] },
      { t: "(Hold the cup. Count the stairs to the bottom instead.)", stat: { knowledge: 1 }, then: [
        { n: "She held the cup and counted. Six below them. Seven above. Thirteen. There had always been thirteen. She counted them again, and again, and the number stayed the same, which was the only thing tonight that did." }
      ] }
    ] },
    { n: "Her father nodded." },
    { n: "Slowly. Once. As if she'd answered him. As if she'd said a whole sentence and he'd heard every word of it and it was the one he'd expected, and he'd already made his peace with it somewhere, on some other stair, on some other night, in the study with the light off." },
    { bond: { appa: 1 } },
    { s: 'appa', t: "Drink your tea while it's hot." },
    { n: "She drank it. It was hot. She drank all of it, and he watched her drink it, and when she'd finished he took the cup off her and stacked it in his, and stood up, one hand on the banister, slowly, the way he'd started standing up this winter." },
    { n: "He put his hand on top of her head. Just for a second. The way he had when she was small enough to come up only as far as the newel post." },
    { n: "Then he went up. Humming. Something old and flat and full of harbors, a trot song from before she was born, under his breath, all the way up the stairs and along the hall to his own door, and she sat on the seventh stair with her hands round nothing and listened to him hum it until the door shut and the song went on, faintly, behind it." },
    { n: "She stayed there a long time. The seventh stair creaked whenever she moved. She didn't move much." }
  ] },

  // ───────────────────────────────── 3/14, fight 4 ─────────────────────────────────
  { id: 'epi-s-contact', date: '3/14', slot: 'late', title: 'one second', place: 'Incheon · The Lee House · Garden', time: 'Late Night', scene: [
    { music: 'epi-s-half' },
    { ifFlag: 'epi-s-alliance', then: [
      { n: "They'd agreed on shifts, two weeks ago, on the annex step, two men who would never be friends dividing the night between them like a bill. Midnight to four, one night each, turn and turn about. They'd kept to it, more or less, every night since, the way men keep to a truce, which was to say that whoever's night it wasn't turned up anyway and pretended he'd been passing." }
    ], else: [
      { n: "They took turns at night now, under her window, two men who would never be friends dividing the dark between them like a bill, and neither of them ever left when his turn was over." }
    ] },
    { n: "Tonight neither of them had gone off at all." },
    { n: "She found them at the bottom of the garden at a quarter to twelve, in the frost, Haechan on the annex step in his black work jacket with his gum going and Jungwon at the other end of the step, a careful distance off, in his dark coat with the collar up. They weren't talking. They'd clearly been not talking for some time, with real commitment." },
    { n: "She'd brought three cans of coffee from the machine at the corner, the cheap sweet ones, hot. She gave one to each of them and sat down on the step between them with the third." },
    { s: 'haechan', f: 'neutral', t: "Go to bed, agasshi." },
    { s: 'solar', t: "You go to bed." },
    { s: 'haechan', f: 'neutral', t: "I'm working." },
    { s: 'jungwon', f: 'neutral', t: "He's supposed to be working until two. It's been his shift until two for thirteen nights. He hasn't once left at two." },
    { s: 'haechan', f: 'serious', t: "Neither have you." },
    { s: 'jungwon', f: 'neutral', t: "I'm a guest. It would be rude to leave before the host." },
    { s: 'haechan', f: 'serious', t: "I'm not the host. I live in a shed." },
    { s: 'jungwon', f: 'happy', t: "It's a very nice shed, Donghyuck." },
    { n: "Haechan looked at her as if to say, *you see what I have to put up with*, and she drank her coffee and didn't take sides, which they both understood was taking a side." },
    { s: 'jungwon', f: 'neutral', t: "He's also eaten an entire packet of gum since nine. I counted the wrappers." },
    { s: 'haechan', f: 'serious', t: "Why are you counting my wrappers." },
    { s: 'jungwon', f: 'neutral', t: "It's eleven fifty-eight." },
    { n: "That shut both of them up. They sat there, the three of them, on the cold step, with the hot cans in their hands, and looked up at her window, which was dark, because she wasn't in it." },
    { n: "Eleven fifty-nine." },
    { n: "Out past the wall, past the road and the seawall, she could feel the sea going. Not see it, feel it, the way she always had, in her back teeth, in the soles of her feet, the whole bay pulling out and out across the flats toward China, further than it had gone all winter, a spring tide at the bottom of the month, emptying everything." },
    { glitch: { stage: 4 } },
    { glitch: 'epi-s-g-contact' },
    { place: 'Incheon · The Mudflats at Midnight', time: 'Midnight' },
    { dark: true },
    { n: "Mud." },
    { n: "Under her feet, cold, to the ankle, gray and shining, and the sea gone. Not out. Gone. All the way to the horizon and over it, the flats running on and on in the green light, ribbed and wet and glittering, every channel empty, every fishing stake standing up out of the mud in its long row like a fence round nothing, and every one of them, when she looked again, a coffin, upright, lidded, dark." },
    { n: "The moon was too big. It sat on the edge of the world where the sea should have been, green, and enormous, and close, like a face pressed against a window." },
    { n: "And out in the middle of the flats, where the deep channel ran at low water, Tartarus was standing up out of the mud." },
    { n: "Not all of it. The way a wreck stands up out of a low tide, the top of it, a black tower leaning and climbing, stair over stair, out of the gray, with the mud running off it in sheets, with lights in it, green ones, going up and up into the moon. She knew those stairs. She'd climbed them every week for a year." },
    { n: "And voices. Close. Closer than they'd ever been. Running feet on the mud and somebody shouting an order, and a dog, barking and barking, and Fuuka's voice somewhere over all of it, not a crackle this time, not a ghost on a dead line, clear, like a bell across water." },
    { n: "Akihiko was in front of her. Ten meters away. His back to her, his fists up, his feet planted in the mud, facing something big that was coming up out of the channel." },
    { n: "The naginata was in her hand. She didn't remember picking it up. She never did." },
    { battle: { id: 'epi-strangers-4', kind: 'scripted', script: 'epi-strangers-4', title: 'One Second', forced: true, desc: 'The mudflats at midnight, the sea gone out. For one round, they can hear her.', notes: 'Half-present fight 4 (FEMC-EPILOGUE-PLAN 2.4): one second of contact. For exactly one round allies obey Direct and she can use the Bond or an All-Out. Then she is pulled away.' } },
    { dark: false },
    { n: "One second." },
    { n: "That was all it was, and it was everything. For one second they heard her. She said *move* and they moved, all of them, at once, the way they used to, the way they always had, Junpei's yell and Yukari's bowstring and Mitsuru's voice cutting across both, and Koromaru going in low, and the whole of S.E.E.S. turning on her word like a door on its hinge." },
    { n: "And Akihiko turned round." },
    { n: "Turned all the way round, in the mud, in the green, with his fists still up, and looked straight at her. Not through her. Not at the place beside her. At her. His face did something she'd never seen it do, not once in a whole year, and his mouth opened." },
    { n: "*Solar.*" },
    { n: "Her name. Back. Out loud. Across ten meters of mud under a moon the wrong color, in the voice she'd have known at the bottom of the sea, like a man answering a door he'd stopped expecting anyone to knock on." },
    { n: "Then the second was over." },
    { n: "It took her the way the tide takes sand off a step. From underneath. All at once. She felt the mud let go of her feet and the naginata go out of her hand like a held breath and his voice saying it again, her name, and losing it halfway, and the green going white, going gray, going—" },
    { place: 'Incheon · The Lee House · Garden', time: 'Late Night', soft: true },
    { n: "Frost." },
    { n: "She was on her knees in the garden, at the bottom of the annex step, in the white grass, with the can of coffee rolling away from her across the frost, still hot, steaming." },
    { n: "Both of them were on their feet. Haechan had her by the collar of her coat, both fists in it, the way he'd caught her on the harbor steps when the tide came up the wrong way, as if she were about to go over an edge that wasn't there. Jungwon was standing over her with his right hand out, open, a little in front of him, very still, like a man who'd reached for something and found his hand closing on air." },
    { n: "She looked down. She had mud on her feet. Gray, cold, sea mud, to the ankle, glistening, on her socks and the hem of her trousers, in a garden two kilometers from the sea." },
    { s: 'jungwon', f: 'serious', t: "One second." },
    { n: "He was looking at his watch. His face was the color of the frost." },
    { s: 'jungwon', f: 'serious', t: "You went out like a lamp. Then you were back. By my watch, it was one second." },
    { n: "Haechan didn't say anything. He didn't let go of her collar. He was very, very quiet, and she knew what that meant from him, and she put her hand over one of his fists and held it, and he still didn't say anything." },
    { glitch: { near: true } },
    { choose: [
      { t: "He heard me. Akihiko. He said my name.", then: [
        { n: "It came out of her in a rush, in a whisper, too fast. Haechan's fists went tight in her collar." },
        { s: 'haechan', f: 'serious', t: "The boxer." },
        { n: "He said it with no expression at all. He remembered the year. He remembered all of it. He just didn't have a face for it, tonight, at the bottom of a garden, with mud on her feet." },
        { n: "Jungwon closed his open hand, slowly, and put it in his coat pocket." },
        { s: 'jungwon', f: 'neutral', t: "Then they know where you are." },
        { n: "Nobody said what that meant. All three of them knew." }
      ] },
      { t: "(Don't tell them yet. Let them hold on.)", stat: { kindness: 1 }, then: [
        { n: "She didn't say anything. She stayed on her knees in the frost, with Haechan's fists in her collar and her hand over one of them, and after a moment Jungwon went down on one knee in the grass beside her, in his good coat, and put his right hand flat on her back between her shoulders, and left it there." },
        { n: "The three of them stayed like that a long time. It was the closest the two of them had ever been to each other without anybody bleeding." }
      ] },
      { t: "Was I gone long?", then: [
        { s: 'jungwon', f: 'serious', t: "One second." },
        { s: 'solar', t: "It was longer. It was so much longer. It was—" },
        { s: 'haechan', f: 'sad', t: "It was one second, agasshi." },
        { n: "His voice cracked on it. Just once, on the last word. He pretended it hadn't." },
        { s: 'haechan', f: 'sad', t: "I counted it too." }
      ] }
    ] },
    { flag: 'epi-s-contact' },
    { ifEpiRoute: 'haechan', then: [
      { n: "Later he got a bowl of warm water from the annex and washed the mud off her feet himself, on the step, kneeling in the frost, slowly, between the toes, without a joke, without a word, and dried them on his own sweatshirt." }
    ] },
    { ifEpiRoute: 'jungwon', then: [
      { n: "Later he sat down on the step against her and opened his coat and put the side of it round her shoulders, and it smelled of nothing at all, the way he always smelled of nothing, and it was the warmest thing she'd ever worn." }
    ] },
    { ifEpiRoute: 'family', then: [
      { n: "Up at the house, the kitchen light came on. Then the back door. Her father stood in it in his cardigan, looking down the garden at the three of them in the frost, for a long time. Then he went back in and left the light on, and the door open a crack, the way you leave a door for somebody who's out late." }
    ] },
    { n: "Neither of them went to bed. They sat on the annex step on either side of her until the sky over the harbor went gray, two men who would never be friends, not looking at each other, not talking, each with one hand somewhere on her coat, as if they'd agreed it without having to say so. The tide came back in, eventually, at five. She felt it come. She'd never been so glad of anything." }
  ] },

  // ───────────────────────────────── 3/15, the last ordinary day ─────────────────────────────────
  { id: 'epi-s-last', date: '3/15', slot: 'after', consumes: true, title: 'the last ordinary day', place: 'Incheon · The Lee House · Kitchen', time: 'Daytime', scene: [
    { music: 'epi-s-last' },
    { n: "Twenty-nine." },
    { n: "She got down to the kitchen at seven and somebody had already turned it. Somebody always got there first. She stood in front of the calendar in her socks and looked at the number in the red pen for a long time, and she didn't know who'd turned it, and she didn't want to know, and she thought she'd never in her life wanted so badly to be the one who got there first." },
    { n: "Nobody said it was the last ordinary day. Nobody knew that. She didn't, really, either. She just had the feeling you get at the bottom of a tide, standing on the seawall, when the water's gone as far as it can go and everything goes still for a minute before it turns." },
    { place: 'Incheon · The Lee House', time: 'Daytime', soft: true },
    { n: "Mrs. Bang was on the back step in her quilted vest with the koi bucket between her feet and the tin of fish food in her hand, breaking the skin of ice on the water with two fingers, the way she did every morning, talking to them." },
    { s: 'mrsbang', t: "There. There, Mrs. Kim. Don't push. Your husband has manners even if you don't." },
    { n: "She held out the tin without looking round. Solar took a pinch and dropped it in. Mr. and Mrs. Kim came up for it, slow and orange and gold, the two oldest fish in Incheon, round and round in a bucket on a back step in the cold, and didn't seem to mind." },
    { s: 'mrsbang', t: "Aigoo. Not so much. They'll get fat and lazy like the men." },
    { s: 'solar', t: "They're already fat and lazy." },
    { s: 'mrsbang', t: "They're allowed. They've been through a lot." },
    { n: "She said it to the fish. She didn't look at Solar. Then she put her hand, rough and cold and smelling of lemon oil, flat on Solar's cheek for one second, the way she'd done when Solar was small and had a temperature, checking. Then she took it away and went in to beat a rug, though it wasn't a rug day." },
    { place: 'Incheon · The Lee House · Kitchen', time: 'Daytime', soft: true },
    { n: "Pyo was in the doorway to the storeroom with a sack of rice in his arms, not going down." },
    { s: 'pyo', t: "I'm not going down there." },
    { s: 'solar', t: "There's no ghost in the storeroom, Pyo." },
    { s: 'pyo', t: "There's one upstairs now, too." },
    { n: "Then he heard himself. All the color went out of his face, and then all of it came back at once, up to his ears, and he nearly dropped the rice." },
    { s: 'pyo', t: "Not— I didn't mean— Not you. I didn't mean you." },
    { s: 'solar', t: "I know, Pyo." },
    { s: 'pyo', t: "You're not a ghost. You eat. I've seen you eat. Auntie said." },
    { n: "Auntie Song came past behind him and hit him gently on the back of the head with a wooden spoon, and he went down the storeroom stairs out of pure surprise, and she turned round and put something warm in Solar's hand, wrapped in a square of greaseproof paper, and closed Solar's fingers round it with her own." },
    { n: "A dumpling. From Sunday. Steamed again. Nine pleats." },
    { s: 'auntie', t: "*Eat it here. Don't tell Mrs. Bang. She counts them.*" },
    { s: 'solar', t: "*Everybody in this house counts them.*" },
    { s: 'auntie', t: "*Then eat it quickly, xiao yueliang.*" },
    { n: "She ate it standing up, by the stove, in two bites, and it was the best thing she'd ever eaten in her life, and she didn't say so, and Auntie Song didn't look at her, and went on rolling, and didn't sing." },
    { n: "Her father was at the kitchen table, which he never was in the daytime, with the paper open at the tide tables and his glasses on, running his finger down the column the way he did with a ledger." },
    { s: 'appa', t: "Low water tomorrow's after four." },
    { s: 'solar', t: "Four twelve." },
    { n: "He didn't check it. He'd stopped checking her tides when she was nine." },
    { s: 'appa', t: "You were born at four in the morning. Did you know that?" },
    { s: 'solar', t: "You've told me." },
    { s: 'appa', t: "Bottom of a spring tide. I went out on the seawall while your mother slept, and the mud was out further than I'd ever seen it. All the way to the islands. I thought I could have walked to China." },
    { n: "He turned a page. He didn't look up." },
    { s: 'appa', t: "I'm telling you again." },
    { n: "She stood there with the greaseproof paper in her hand and couldn't say anything at all, and he went on reading, and after a while she went and stood behind his chair and put her chin on top of his head, which she hadn't done since she was twelve, and he let her, and kept reading, and didn't turn the page for a long time." },
    { place: 'Incheon · The Car', time: 'Daytime', soft: true },
    { n: "In the afternoon she asked Mr. Oh to drive. Not anywhere. Just drive." },
    { n: "He didn't ask where. He drove the coast road, out past the harbor and the cranes and the fish market and back, the whole long loop of it, menthol and the heater and his hands at ten and two, never once braking hard, the way he'd driven her to school when she was seven and asleep in the back with her face against the window. She sat in the back. She always sat in the back. She watched the back of his head and the gray in it and his ears, which had got bigger, the way old men's ears did, and the white edge of his collar, and thought about how many thousands of hours of her life she'd spent looking at exactly this." },
    { n: "He didn't say anything the whole way. Neither did she. At the end, when he pulled up at the gate and set the handbrake, he looked at her in the mirror." },
    { s: 'mroh', t: "Home now." },
    { n: "Not please. He never said please. She got out, and stood at the gate, and didn't go in for a minute, and he didn't drive round to the garage until she had." },
    { place: "Incheon · The Lee House · Yunjin's Room", time: 'Daytime', soft: true },
    { n: "Yunjin had the girls on speaker. All four of them, on a group call, Yunjin's phone face up on the duvet between the two of them with the volume all the way up, and Chaewon trying to run it like a meeting while the other three talked over her." },
    { s: 'chaewon', t: "Okay. OKAY. Agenda. Cherry blossoms. Next month. All of us. Wolmido or Jayu Park, we vote." },
    { s: 'eunchae', t: "Is Solar there? Solar, are you there? Are you doing the clock thing?" },
    { s: 'solar', t: "I'm not doing a clock thing." },
    { s: 'eunchae', t: "You're doing the clock thing. I can hear you doing it." },
    { s: 'sakura', t: "You can't hear somebody look at a clock, Eunchae." },
    { s: 'kazuha', t: "*Ano ne.* I can. Some people, when they look at a clock, they get quiet the way rooms get quiet." },
    { s: 'sakura', t: "Kazuha, please don't make it spooky." },
    { s: 'kazuha', t: "I'm not making it spooky. I'm making it accurate." },
    { s: 'chaewon', t: "Solar. Yunjin said you were sick over Seollal. Are you better? Because if you're coming I need to know for the kimbap." },
    { n: "Yunjin went still beside her on the bed." },
    { choose: [
      { t: "Much better. It was just a fever. Put me down for the kimbap.", stat: { charm: 1 }, then: [
        { s: 'solar', t: "Much better. It was just a fever. Thirty-nine point something, very boring, I slept through all of Seollal. Put me down for the kimbap. Tuna. Not the plain one." },
        { s: 'chaewon', t: "Tuna. Done. You're on the list." },
        { glitch: { strain: 1 } },
        { n: "It held. It always held. She'd got so good at it she could feel it hold, like a knot pulling tight, and every time it did something in her went a little thinner." }
      ] },
      { t: "(Let Yunjin answer for you.)", then: [
        { s: 'yunjin', f: 'neutral', t: "She's fine. She's better. She was disgusting, there was vomit, you don't want to know. Put her down for tuna." },
        { s: 'chaewon', t: "Tuna. Done." },
        { glitch: { strain: 1 } },
        { n: "Yunjin's hand found hers on the duvet and held it, hard, and didn't let go, and kept talking about vomit, in great detail, until Sakura begged her to stop." }
      ] }
    ] },
    { ifFlag: 'epi-s-fever', then: [
      { n: "Thirty-nine point four. Her father's number, given to her on the stairs a month ago, before light, like a coat held out. She'd worn it every day since. It fit her better than anything she owned." }
    ] },
    { s: 'chaewon', t: "Okay. Cherry blossoms. Next month. All of us. I'm putting it in the calendar. Nobody's allowed to be sick." },
    { s: 'solar', t: "Put it in." },
    { n: "She said it lightly. She said it like it was nothing. Beside her, Yunjin turned her face into the pillow for a second, and then came back up out of it with a joke about Kazuha's ghosts already in her mouth." },
    { place: 'Incheon · The Lee House · Her Room', time: 'Daytime', soft: true },
    { n: "Her mother came at five, with the long black pins." },
    { n: "She didn't knock. She never had. She came in and stood behind the chair at the dressing table and waited, and Solar sat down in it, the way she'd sat down in it every morning of her life before school, before church, before every dinner in a private room where men talked in front of her as if she were furniture." },
    { n: "Her mother brushed it out first. Slowly. A hundred strokes. She'd always done a hundred. Then she gathered it up off Solar's neck in both hands and twisted it and began to pin it, high, one long black pin at a time, the way a Lee daughter wore it in public, the way a Lee daughter was going to wear it in twenty-nine days in a hall full of chairs a man had measured." },
    { choose: [
      { t: "(Sit still for her.)", then: [
        { n: "She sat still. She watched her mother in the mirror, the small frown, the pins held in her mouth, the ring on her own right hand catching the lamp, and didn't move, not once, the way she'd learned to sit at six, and her mother's hands were so careful she hardly felt the pins go in." }
      ] },
      { t: "(Reach back and hold her wrist while she works.)", stat: { kindness: 1 }, then: [
        { n: "She reached back over her shoulder and put her hand on her mother's wrist, lightly, and left it there while her mother worked, and her mother's hands stopped for a moment, and then went on, with Solar's hand riding on her wrist, pin by pin, as if it had always been there." }
      ] },
      { t: "Eomma—", then: [
        { n: "Her mother met her eyes in the mirror. Waited. A pin in her fingers, held." },
        { n: "Solar didn't have the rest of it. She'd thought she did. It had been right there, and it wasn't, and her mother waited a little longer, kindly, and then put the pin in." }
      ] }
    ] },
    { n: "When it was done her mother stood back and looked at it in the mirror. At the high dark knot of it, perfect, and the pale long neck under it, and her daughter's face, very still, looking back." },
    { n: "Then, for once, she began to take the pins out again." },
    { n: "One at a time. Laying each one down on the dressing table in a row, square to the edge, the way her father laid down his glasses. Every pin. Until the whole of it came down round Solar's shoulders in the lamplight, heavy and dark, and her mother put both hands in it, and held it for a second, like something she was weighing, and let it fall." },
    { s: 'eomma', t: "Leave it down tonight." },
    { n: "That was all she said. She'd never once said it in twenty-one years. She touched the jade ring on Solar's right hand, once, on her way out, and shut the door behind her, very quietly, the way you shut a door in a house where somebody's asleep." },
    { bond: { eomma: 1 } },
    { n: "Solar sat at the dressing table with her hair down and the pins in a row in front of her and the window going dark over the water, and she thought about going downstairs and saying it. To all of them. In the kitchen, with the calendar and the fish and the barley tea. Goodbye, or something like it, something that would carry." },
    { n: "She didn't. She couldn't have, and they couldn't have heard it, and she'd stopped saying things she didn't know were true a long time ago. She counted the pins instead. Eleven. She counted them again." },
    { ifEpiRoute: 'haechan', then: [
      { n: "Down at the bottom of the garden the annex light came on, and stayed on, and the old radio on the sill was a small silver shape against it, not playing anything, waiting." }
    ] },
    { ifEpiRoute: 'jungwon', then: [
      { n: "Across the water, on the other shore, one light in the west wing of a big dark house came on, and stayed on, and she stood up and went to her own window and turned her lamp on too, and left it." }
    ] },
    { ifEpiRoute: 'family', then: [
      { n: "Downstairs she heard her father come in from the study and stop at the bottom of the stairs, and go no further, and stand there. Then the seventh stair creaked, and didn't creak again, which meant he'd sat down on it." }
    ] }
  ] },

  // ───────────────────────────────── 3/16, the final ─────────────────────────────────
  { id: 'epi-s-held', date: '3/16', slot: 'early', consumes: true, ends: true, title: 'hold on', place: 'Incheon · The Lee House · Garden', time: 'Before Light', scene: [
    { music: 'world-strangers' },
    { glitch: { stage: 4 } },
    { place: 'Incheon · The Lee House · Kitchen', time: 'Before Light' },
    { n: "She woke at twenty to four knowing. Not dreaming it, not afraid of it, just knowing, the way she'd always known when the tide had gone out under the house, in her back teeth, in the soles of her feet; it was tonight, and it was the bottom of the tide, and it was soon." },
    { n: "She didn't put her hair up. She went down in her socks, in her coat over the boat pajamas, past Yunjin's door with the light under it, down the stairs, and the seventh one creaked under her the way it always had, and she stood on it for a second and let it." },
    { n: "The kitchen was dark. The stove was cold. Barley tea in the pot from last night, stone cold, and the koi bucket out on the back step under its skin of new ice, and the calendar on the wall." },
    { n: "Nobody had turned it yet. It still said twenty-nine." },
    { n: "She stood in front of it in the dark for a long time. Then she reached up and turned it herself. Twenty-eight. In somebody else's red pen, circled twice. The first time in a month she'd got there first." },
    { place: 'Incheon · The Lee House · Garden', time: 'Before Light', soft: true },
    { bg: 'epi-s-garden-night' },
    { n: "The garden was white. Frost on every blade, on the onggi jars, on the bare persimmon, on the gravel path going down between the dead beds to the annex at the bottom, and the sky over the harbor still black, no gray in it yet, the stars hard and small and too many." },
    { n: "They were both there." },
    { n: "Of course they were. Haechan on the annex step with his elbows on his knees and no gum, for once, his jaw still. Jungwon standing at the far end of the step in his dark coat, a careful distance off, with his right hand in his pocket, looking at the sky toward the sea. Neither of them had gone off. She didn't think either of them had gone off in three nights." },
    { n: "They both looked up when she came down the path. Neither of them asked how she'd known. Neither of them asked anything at all." },
    { ifEpiRoute: 'family', then: [
      { n: "Up at the house the kitchen light came on behind her. She didn't turn round. She didn't have to. Her father came down at half past four every morning of his life, and it was ten to four, and the light was on, and she knew he was standing at the window over the sink in his cardigan with his glasses on their cord and his hands flat on the counter, the way Mr. Oh held a wheel, watching the bottom of his garden." },
      { n: "And the back door opened, and somebody came out onto the back step and stopped there, beside the koi bucket, in the frost. Barefoot. Yellow puffer over pajamas. Yunjin. She didn't come down the garden. She just stood on the step with her arms round herself, barefoot on the frozen stone, and stayed." }
    ] },
    { n: "Solar sat down on the step between the two of them. The stone was so cold it hurt through her pajamas." },
    { s: 'solar', t: "Low water's at four twelve." },
    { s: 'haechan', f: 'neutral', t: "I know, agasshi. You told everybody. Your father told the fish." },
    { n: "Out past the wall, past the road and the seawall, the sea was gone. She could feel it. All the way out, further than it had gone all year, a spring tide at the bottom of itself, the mud running out flat and shining to the islands, and the whole bay holding still for the long minute at the bottom before it turned. She'd been born at the bottom of one of these. At four in the morning. Her father had stood on the seawall and thought he could walk to China." },
    { n: "Four oh six." },
    { choose: [
      { t: "Don't let go. Whatever it does. Don't let go of me.", flag: 'epi-s-ask-hold', then: [
        { s: 'haechan', f: 'neutral', t: "Wasn't going to." },
        { s: 'jungwon', f: 'neutral', t: "We'd assumed that was understood." },
        { n: "They said it at the same time, almost, and then looked at each other over her head, appalled, and looked away." }
      ] },
      { t: "If it takes you too— let go. Both of you. Promise me.", stat: { kindness: 1 }, flag: 'epi-s-ask-letgo', then: [
        { s: 'haechan', f: 'serious', t: "No." },
        { n: "Flat. Instant. Like a door shutting." },
        { s: 'jungwon', f: 'neutral', t: "That's a very reasonable request, Solar-ssi." },
        { n: "The dimples. Both of them. Deep and polite and perfectly, perfectly false." },
        { s: 'jungwon', f: 'neutral', t: "No." }
      ] },
      { t: "(Tell them the tide. Out loud, to the minute, the way you used to tell yourself to sleep.)", stat: { knowledge: 1 }, flag: 'epi-s-ask-tide', then: [
        { n: "So she told them. Low water four twelve, the height of it, the stand, the turn, the flood coming up across the flats at a walking pace and then faster than a man can run, high water at ten past ten, all of it, in the voice she used to use in bed at eleven years old with the light off, saying the tide over and over like other girls said prayers." },
        { n: "They let her. Neither of them interrupted. When she'd finished, Jungwon looked at his watch." },
        { s: 'jungwon', f: 'neutral', t: "Four oh nine." },
        { s: 'haechan', f: 'neutral', t: "Three minutes, then." }
      ] }
    ] },
    { n: "Four twelve." },
    { n: "She felt it in her hands first." },
    { n: "The way you feel the cold before you see the snow. A lightness in the fingers. She looked down and the green was coming off them like steam off a cup, fine and pale, rising, and through her own palm she could see the frost on the stone step, every crystal of it, sharp, and the thin white scar across her left hand was the last thing to go clear." },
    { glitch: 'epi-s-g-evoke' },
    { choose: [
      { t: "(Give them your hands.)", then: [
        { n: "She held out her hands. Both of them. One to each side. The way you'd hold your hands out to two people at the edge of deep water, which she'd never in her life gone near, which she'd stood back from at every pier and every quay and every seawall since she was old enough to stand, and here it was, at the bottom of a garden, coming up to meet her anyway." }
      ] }
    ] },
    { glitch: 'epi-s-g-pull' },
    { cg: 'epi-s-held' },
    { dark: true },
    { n: "And then the pull." },
    { n: "It wasn't a door. It was a tide, going out, and she was the water. She felt the whole of herself start to go the way the sea went off the flats, all at once and slowly, from underneath, every part of her loosening toward something very far off, green and gold and patient, a tower and a moon the wrong color and a dormitory by a bay with a room made up in it, a light coming on in that room at midnight, wanting her back. It wasn't cruel. It had never been cruel. It was only the tide, and she had always known the tide." },
    { n: "Haechan took her left hand." },
    { n: "Hard. All of it, in his, his split knuckles and the one silver ring, the way he'd grab a line going over the side. He just reached and took it and closed his hand round hers and braced his boots on the frozen step and leaned back against the whole sky." },
    { n: "Jungwon took her right." },
    { n: "In his right. Palm to palm, his fingers closing round the back of her hand and the jade ring under them, the way you take a man's hand across a table when you've agreed on something and you mean to keep it. The way you shake on a contract. He didn't hurry. He never hurried. He took it and held it and the watch on his wrist ticked against her wrist, and he didn't let go." },
    { n: "One hand each. Two men who would never be friends, on either side of her, at the bottom of a garden, at the bottom of the tide, holding on." },
    { ifEpiRoute: 'haechan', then: [
      { n: "She gripped Haechan's harder. She didn't decide to. Her hand did it on its own, closed on his like a fist on a rope, and she felt him feel it, felt his whole arm go hard and steady and answer it, and he didn't look at her, because if he'd looked at her he'd have had to have a face, and he didn't have one, tonight, for this." }
    ] },
    { ifEpiRoute: 'jungwon', then: [
      { n: "She gripped Jungwon's harder. She didn't decide to. Her hand did it on its own, and she felt his fingers answer, tighten, precise, exactly as hard as hers and not one ounce more, the way he matched everything, and his face beside her went perfectly, completely still." }
    ] },
    { ifEpiRoute: 'family', then: [
      { n: "She held them both the same. Up at the house the kitchen light was on and a man was standing in the window, very still, with his hands flat on the counter, and on the back step a girl in a yellow puffer was standing barefoot on the frost with her hand over her mouth, and neither of them came down the garden, and neither of them went in. They were holding on too. She could feel it. From that far away. It counted." }
    ] },
    { n: "Over her head, the two of them looked at each other. For one second. She felt it go across her like a wire." },
    { s: 'haechan', f: 'serious', t: "Don't let go, Yang." },
    { s: 'jungwon', f: 'serious', t: "After you, Donghyuck." },
    { ifFlag: 'epi-s-ask-letgo', then: [
      { n: "She'd asked them to let go if it took them too. She felt it trying. She felt the pull go up their arms like cold up a mooring line, and neither of them so much as moved their feet." }
    ] },
    { ifFlag: 'epi-s-ask-hold', then: [
      { n: "*Don't let go,* she'd said. They'd assumed it was understood. It was." }
    ] },
    { ifFlag: 'epi-s-ask-tide', then: [
      { n: "Four twelve. Exactly. She'd told them to the minute, and the tide had come out to the minute, and Jungwon, holding her hand, was still counting the seconds under his breath, in Mandarin, because she'd taught him that the tide was a thing you could count." }
    ] },
    { n: "The light was coming off her shoulders now. Off her hair, which was down, which was the last thing her mother had said to her, the green going up through it in the frost like breath. She could barely feel the step. She could feel their hands. That was all she could feel. Two hands, and the stone going, and the sea gone out to the end of the world." },
    { s: 'haechan', f: 'serious', t: "Solar." },
    { n: "Her name. Not agasshi. Spent, at last, the one time he'd been keeping it for, and it came out of him quiet, so quiet, the way he only ever got when he was more frightened than he'd ever been in his life." },
    { s: 'haechan', f: 'serious', t: "I'll find you." },
    { n: "She felt his hand shake once, round hers. Once. Then not again." },
    { s: 'haechan', f: 'serious', t: "Every world." },
    { n: "And on her other side, Jungwon leaned down, close, with her right hand still held in his like a promise across a table, and said the shortest thing he could say, in the language nobody in either house could listen to. The thing she'd written over his heart." },
    { s: 'jungwon', f: 'serious', t: "近." },
    { n: "*Jìn.* Near." },
    { glitch: 'epi-s-g-stop' },
    { n: "Four thirteen." },
    { n: "The tide should have turned." },
    { n: "She knew it should have. She'd known it all her life, the way she knew her own name: at the bottom of a spring tide the sea stands, for a minute, two, and then it turns, and the flood comes back across the flats, and it always comes, it has always come, every time, twice a day, since before there were houses on this shore to listen for it." },
    { n: "It didn't turn." },
    { n: "Out past the seawall, the sea stopped. All of it, all the way out to the islands, at the bottom of itself. The mud lay out under the stars and didn't shine. On the back step the two fish in the bucket stopped going round, and hung there in the dark water under the ice, side by side, as if listening. The frost on the grass stopped glittering. Jungwon's watch, against her wrist, stopped ticking." },
    { flag: 'epi-s-held' },
    { n: "And everything waited at the bottom of the tide, the house and the garden and the sea gone out to the end of the world, and the green went up off her like breath on a cold morning, and two men who would never be friends, who had never once agreed on anything in their lives, held on to the same girl, one hand each, and leaned back against the whole of the sky, and didn't let go, and didn't let go, and the pull went on, and—" }
  ] }

  );
})();
