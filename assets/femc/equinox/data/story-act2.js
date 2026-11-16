/* Persona 3: Equinox · Act II story events, 5/29 to 7/27 (format: assets/femc/game/scene.js; events: core.js dueEvent).
   Loads after story-act1.js. Seventeen dated events. The two full moons are operations, as in Act I: each has a
   { battle: { kind: 'operation' } } line whose op is listed in calendar.js `ops`, and the battle side plays it from
   battle.js SCRIPTS ('eqx-second-hill', 'eqx-third-hill'). Two events on 7/27 close the act's last night.
   Also here: the two route-door scenes Act I still owed (6/5, 6/12), and Act II's own three (6/26, 7/10, 7/26).
   Arrivals each get their own scene; their speakers are listed in each event's `cast` (portraits borrow a link's `face`
   where one is set in data/links.js).
   Bookkeeping (data/flags.js): counters `cakes`, `choose`, `asked`, `doors.R|S|H`; choices `asks.solar.tide`,
   `asks.solar.vp`; flags listed in flags.js `hooks` / `cosmetic`. Nothing in this file reads them.
   Art still to make: `// CG: eqx-*` and `// BG: *` comments mark it; stand-in backgrounds are used until then. */
(window.FEMC_GAME_EVENTS ||= []).push(

  { id: 'eqx-discharge', date: '5/29', slot: 'after', consumes: true, title: 'a pan', place: 'Tatsumi Memorial Hospital · Ward', time: 'Daytime',
    cast: { solar: 'Solar', shinjiro: 'Shinjiro', akihiko: 'Akihiko', ken: 'Ken', mitsuru: 'Mitsuru', haechan: 'Haechan' },
    scene: [
    { bg: 'hospital-room', music: 'tender' },
    { n: "They let him out on a Saturday, which Akihiko said was the hospital's idea of a joke, because Saturdays were when the ward was short-staffed and the doctor who signed things was the one who signed things fastest, and it had taken eleven weeks of physical therapy and one standing argument with a woman in a cat lanyard to get there, and in the end it took four minutes and a pen." },
    { n: "Solar came because Akihiko had asked her to on Thursday, offhand, at the sink, with his back to her, as if he were asking her to pass the salt. Ken came because nobody could have stopped him. He'd been up since five. He was wearing a shirt with a collar." },
    { n: "Shinjiro was sitting on the edge of the bed in his own clothes for the first time since February, the long coat over the back of the chair, a paper bag of his things between his boots, and he looked smaller in them than he'd looked in the hospital shirt, which made no sense, and which Solar didn't say. His right hand was in his lap. He was opening and closing it, slowly, the way he'd been doing every day since April, a lump of green putty that wasn't there anymore." },
    { s: 'shinjiro', f: 'neutral', t: "...Three of you. For a bag." },
    { s: 'ken', f: 'happy', t: "It's a big bag." },
    { s: 'shinjiro', f: 'neutral', t: "It's a small bag, Ken." },
    { n: "The bed next to his was made up. It had been made up every day for seven weeks, tight corners, the blanket folded at the foot, and nobody had been put in it, and nobody had taken it down, and when Solar looked at it Shinjiro looked at her looking and didn't say anything, and then reached over, with his bad hand, on purpose, and pulled the folded blanket at the foot of it straight, one inch, the way you'd straighten a picture on somebody's wall on your way out of their house." },
    { n: "The goal sheet was still taped to the wall over his locker. *What do you want to be able to do by summer?* The bottom half was turned under and taped down, so you couldn't see what he'd written. He peeled it off the wall, folded it in four without looking at it, and put it in his coat pocket." },
    { choose: [
      { t: "What did you put?", then: [
        { s: 'shinjiro', f: 'neutral', t: "Something I can do with one hand and a half." },
        { s: 'solar', f: 'neutral', t: "That's not an answer." },
        { s: 'shinjiro', f: 'neutral', t: "Wasn't a question I liked." }
      ] },
      { t: "(Pick up the paper bag before he can.)", then: [
        { n: "She picked up the bag. He looked at it in her hand for a long moment with the expression of a man watching someone else carry his groceries, which was to say, with something that was nearly pain, and then let her, and stood, and that was harder to watch than she'd expected. He stood the way old men stood. Then he stood the way he used to, all at once, as if he'd remembered he could." }
      ] }
    ] },
    { n: "Akihiko held the door. He held it a beat too long, so that Shinjiro had to look at him on the way through, and the two of them stood in the doorway of the ward for one second, shoulder to shoulder, the way they must have stood in a hundred doorways before any of the rest of them were born, and Akihiko said nothing, and Shinjiro said nothing, and then Akihiko took the coat off the back of the chair and held that out too, and Shinjiro put his arms in it." },
    { s: 'akihiko', f: 'happy', t: "Sixty-four minutes last night. If you were wondering what you missed." },
    { s: 'shinjiro', f: 'neutral', t: "I wasn't." },
    { s: 'akihiko', f: 'serious', t: "You were. You've been texting her a dot at twelve every night for seven weeks. You were wondering." },
    { place: 'Iwatodai Dorm · Kitchen', time: 'Evening', bg: 'iwatodaidorm-kitchen-night', music: 'dorm' },
    { n: "He went straight to the kitchen. Before his room, before the lounge, before Junpei had finished the banner he'd made out of printer paper and tape that said WELCOME HOME SENP and then ran out of wall. He walked in, and stood in the middle of it, and looked at it the way she'd seen him look at a ring before a fight, and opened the cupboard under the sink and took out the heavy pot, the good one, which nobody had used since the winter before last, and set it on the stove with his left hand." },
    { n: "Then he saw the tin." },
    { n: "It was on the counter by the rice cooker where it had been all week. Painted cranes, a dent in the lid. Mrs. Oka sent one up every Monday now, full, with whoever had been at the boarding house that day, and every Monday somebody brought the empty one back, and somebody always ate the last one." },
    { n: "Shinjiro took the lid off and looked in. He picked one up between two fingers, turned it over, and smelled it, the way he'd smelled things at the market last year before he paid for them, close, eyes half shut." },
    { s: 'shinjiro', f: 'neutral', t: "...Who made these." },
    { s: 'ken', f: 'neutral', t: "Mrs. Oka. At the boarding house. She's really nice. Koromaru doesn't like her but Koromaru doesn't like the mailman either." },
    { s: 'shinjiro', f: 'neutral', t: "The flour's wrong." },
    { n: "He said it the way he'd have said *the oven's not hot enough*. Flatly. A cook's opinion. Ken laughed, and Akihiko laughed, and Solar didn't, and Shinjiro didn't either. He stood with the rice cake between his fingers, looking at it, and something in his face had gone very still, the way it went still on the ward on the nights he kept his eyes shut." },
    { s: 'solar', f: 'neutral', t: "Wrong how?" },
    { s: 'shinjiro', f: 'neutral', t: "Too fine. And it's— I dunno. It's sweet in the wrong place. At the back." },
    { choose: [
      { t: "(Take the tin and put the lid on it.)", flag: 'eqx-shin-tin', then: [
        { n: "She took it out of his hands and put the lid on. He watched her do it. He didn't ask why. He put the one he was holding back in first, carefully, as if it might break, and then wiped his fingers on his jeans, twice, and looked at them, and wiped them again." },
        { s: 'shinjiro', f: 'neutral', t: "...I'll make something. Something that isn't that." }
      ] },
      { t: "It's probably rice flour. They do it different here.", then: [
        { s: 'shinjiro', f: 'neutral', t: "I'm from here." },
        { n: "He put it back in the tin. He put the lid on. He didn't eat one, and later, when the tin went back to the boarding house on Monday, there were the same number in it as there had been on Saturday, which had never happened before, and nobody but Solar counted." }
      ] }
    ] },
    { n: "He cooked. Left-handed, mostly, with the right one doing what it could, holding the pot handle with three fingers while the left stirred. It took him twice as long as it should have. Nobody offered to help; Akihiko stood in the doorway with his arms folded and made sure nobody offered to help. Haechan came down at seven, looked into the kitchen, looked at Shinjiro, looked at Akihiko in the doorway, and went and set the table without being asked, for nineteen, all the way round." },
    { s: 'haechan', f: 'neutral', t: "Smells like the winter before last in here." },
    { s: 'shinjiro', f: 'neutral', t: "You weren't here the winter before last." },
    { s: 'haechan', f: 'happy', t: "No. But she talks about it." },
    { n: "Shinjiro looked at her over the pot. She looked at the table. It was a stew, in the end, something he'd made before, and it was too salty because his right hand had shaken on the salt, and every person at the table ate all of it, and Junpei had thirds and cried a little bit at the second one and blamed the onions, and there hadn't been any onions." },
    { place: 'Iwatodai Dorm · Command Room', time: 'Late Night', bg: 'iwatodaidorm-commandroom', music: 'night' },
    { n: "At eleven Mitsuru called him up to the fourth floor and put a case on the desk and opened it, and inside, in its foam, was his Evoker. Not a new one. His. She'd kept it. Of course she had." },
    { s: 'mitsuru', f: 'neutral', t: "You'll be weak on that side for a long time. The doctors say a year. I'd like you on the rope by the next full moon anyway. If you'd like that." },
    { s: 'shinjiro', f: 'neutral', t: "...You asking?" },
    { s: 'mitsuru', f: 'neutral', t: "I'm telling you it's here." },
    { n: "He picked it up with his left hand. He looked at it for a long time. Then he put it in his coat pocket, the same pocket as the folded goal sheet, and Solar, in the doorway, realised she'd been holding her breath, and that Akihiko beside her had been holding his, and that neither of them had noticed the other doing it." },
    { flag: 'eqx-shinjiro-back' }
  ] },

  { id: 'eqx-violinist', date: '6/3', slot: 'lunch', consumes: true, title: 'the violinist on the bridge', place: 'Gekkoukan High · Classroom 3-F', time: 'Lunchtime',
    cast: { solar: 'Solar', junpei: 'Junpei', yukari: 'Yukari', fuuka: 'Fuuka', aigis: 'Aigis' },
    scene: [
    { bg: 'gekkoukan-classroom-day', music: 'school' },
    { n: "June came in wet. Not raining yet, not properly, but the air had gone thick and warm and close, the kind of air that sat on the back of your neck in a classroom with all the windows open and no wind coming through any of them, and everybody's hair had given up, and Junpei had pushed two desks together by the window so the four of them and Solar could eat in the one place in 3-F where the air moved at all, which it didn't." },
    { n: "Solar had been at Gekkoukan eight weeks. Officially. Her name on the register with the surname box still empty, the homeroom teacher with the glasses on a cord still saying *and, ah,* every morning when he got to it, still looking at the box as if it might have filled in overnight. Nobody else noticed it anymore. That was the strangest part of anything. People got used to things." },
    { s: 'junpei', f: 'happy', t: "Okay. Okay okay okay. Did you guys hear about the bridge?" },
    { s: 'yukari', f: 'neutral', t: "No, and I don't want to, and you're going to tell us anyway." },
    { s: 'junpei', f: 'happy', t: "So you know Kenji's cousin, the one who drives the night bus out to Port Island? He was coming back over Moonlight Bridge last week, real late, like one in the morning, and he says halfway across there's this lady. Standing at the rail. In a coat. In June, dude. A big blue coat buttoned all the way up." },
    { s: 'junpei', f: 'neutral', t: "And she's playing a violin. At one in the morning. On a bridge. With nobody there." },
    { n: "He did the violin, under his chin, with a chopstick for the bow. Yukari threw a pickle at him. Aigis watched the pickle's arc with interest." },
    { s: 'yukari', f: 'neutral', t: "That's a ghost story Kenji's cousin made up so people would ride his bus." },
    { s: 'junpei', f: 'serious', t: "No, see, that's the thing. It's not just him. My little cousin's friend's sister heard it too. And the lady at the convenience store by the ramp. And this is the creepy part. Everybody says the same thing. She doesn't stop. You drive past, she's playing. You look back, she's playing. And nobody ever sees her face. She's always got her back to the road, looking out at the water." },
    { s: 'aigis', f: 'neutral', t: "There is no record of a person on Moonlight Bridge after midnight in the traffic camera logs for May. I checked them for an unrelated reason." },
    { s: 'yukari', f: 'surprised', t: "...What unrelated reason?" },
    { s: 'aigis', f: 'neutral', t: "It is unrelated." },
    { n: "Solar was holding her chopsticks over her rice and not eating it." },
    { n: "A blue coat, buttoned to the throat. She knew a coat like that. She'd walked past it twice on the station steps the year before last, in March and in April, a woman with a black instrument case and a face like a held breath, and hadn't stopped either time, because nobody did, because that was the whole point of that woman, and then she'd stood on a platform at the end of everything and said her name, and the woman had gone home through a door. Solar had watched it close." },
    { n: "Viola, she'd have said, if anybody had asked. It was never a violin. It was always a viola." },
    { n: "Nobody asked." },
    { s: 'fuuka', f: 'neutral', t: "...I don't hear anything on the bridge." },
    { n: "She said it softly, into her lunchbox. Junpei looked at her, delighted, waiting for the rest, and Fuuka looked up, and her face wasn't playing." },
    { s: 'fuuka', f: 'sad', t: "In the red. I hear the whole town. Everyone in their coffins, the hospital, the dorm, the guesthouse, all of you breathing. And the bridge is just... quiet. Not empty. Quiet. Like a room where somebody's put their hand over your mouth." },
    { s: 'junpei', f: 'surprised', t: "...Okay, that's way creepier than my version, I don't like that you did that." },
    { choose: [
      { t: "It's a viola.", then: [
        { s: 'junpei', f: 'neutral', t: "Huh?" },
        { s: 'solar', f: 'neutral', t: "...Nothing. Violin, viola. People always get it wrong." },
        { n: "Yukari looked at her for a second longer than Junpei did. Then Junpei started explaining the difference between a violin and a viola, wrongly, with the chopstick, and the second passed." }
      ] },
      { t: "Did anyone say what she plays?", then: [
        { s: 'junpei', f: 'neutral', t: "Uh. Music? Sad music, I guess? The convenience store lady said it sounded like it was going the long way round. Whatever that means." },
        { n: "Solar put her chopsticks down." }
      ] },
      { t: "(Say nothing. Eat your rice.)", then: [
        { n: "She ate her rice. It was cold and she didn't taste it. Across the desk Aigis was watching her chew, the way Aigis watched things now, with a small notebook open under the table on her knee, and when Solar caught her at it she closed the notebook without hurrying." }
      ] }
    ] },
    { flag: 'eqx-ghost-junpei' },
    { n: "The bell went. Junpei put the chopstick back in its case and did one last stroke of the invisible bow, slow, with his eyes shut, and in the window behind him, very far off, the long white line of Moonlight Bridge lay over the bay in the haze, and the air didn't move at all." }
  ] },

  { id: 'eqx-door-strangers', date: '6/5', slot: 'late', consumes: true, title: 'the gate at low tide', place: 'Gekkoukan High · Courtyard', time: 'The Dark Hour',
    cast: { solar: 'Solar', haechan: 'Haechan', jungwon: 'Jungwon', aigis: 'Aigis', fuuka: 'Fuuka', yunjin: 'Yunjin' },
    scene: [
    { bg: 'eqx-courtyard-well-night', music: 'darkhour' },
    { dark: true },
    { n: "Mitsuru had started sending them down on Saturdays. Not to the bottom. To the Doorstep only, the town upside down at the top of the Well, a night at a time, four at a time, for the reason she gave at breakfast, which was practice, and the reason she didn't, which was that the hour was sixty-one minutes and fifteen seconds now and nobody in the dorm could sit through it anymore without something to do with their hands." },
    { n: "This Saturday it was Haechan, Jungwon, Aigis, and her. Yunjin had come to the lip of the well to see them off in her pajamas and a cardigan, against Hanni's rule, which only said doors, and sat on the stone with her knees up and her arms round them and watched them climb in." },
    { s: 'yunjin', f: 'neutral', t: "Low tide's at twelve-forty. At home, I mean. I worked it out." },
    { s: 'solar', f: 'neutral', t: "Why does that matter?" },
    { s: 'yunjin', f: 'neutral', t: "I don't know. It's just what I'd want to know. If I was going down." },
    { place: 'The Well · The Doorstep', time: 'The Dark Hour', bg: 'eq-well-2', music: 'mystery' },
    { n: "The Doorstep was the same as it had been every Saturday since the full moon: the streets of Iwatodai hanging overhead, the houses hanging off them by their roofs, the black water underfoot holding the town again the right way up, and doors. Doors in the walls, doors in the ceiling, doors in the water like trapdoors under a skin of ice. Most of them shut. Some of them knocking, softly, when you passed, from the other side." },
    { n: "The Shadows here had learned them. That was new, this month. They'd stopped coming at the party out of the dark the way Shadows used to and started coming out of the doors instead, one at a time, the way guests come in, a white mask with a painted mother's face on it, a hand held out, palm up, and a voice from behind the mask, not unkind, saying *give me one*. Aigis had stopped answering them. Aigis had answered the first one, on the first Saturday, with *one what*, and gone down on one knee in the black water with her hands over her ears for a whole minute after, and wouldn't say what she'd heard, and nobody answered them now." },
    { n: "They broke four of them on the way in. The masks came apart into pale dust that floated on the water like a skin of flour and didn't sink." },
    { n: "Then Jungwon stopped walking." },
    { n: "It was the smell first. Solar got it a second after he did, and Haechan a second after her, and the three of them stood in a line in the black water with their heads up like dogs. Salt. Mud. Cold iron and diesel and something green rotting sweetly on a stone. Low tide." },
    { s: 'aigis', f: 'neutral', t: "The air composition has changed. Saline. There is no sea at this depth." },
    { n: "Between two Iwatodai doors, a laundromat's and the back door of a ramen shop, there was a wall that wasn't Iwatodai's. Gray stone, old, uneven, the kind you build on a hill above a harbor to keep the wind out, with moss in the joins and a tiled cap along the top. And in the wall, a gate. Two wooden leaves under a little tiled roof of their own, painted dark once and gone gray, with a ring for a handle." },
    { n: "Over the gate, a light was on." },
    // CG: eqx-door-s1 — an old gray stone wall with a wooden double gate under a small tiled roof, standing between two ordinary shop doors in a flooded upside-down street, a single light burning above the gate, black water underfoot.
    { n: "She knew it. She'd come through it in a car with the windows down and her heart in her mouth, and on foot at four in the morning carrying her shoes, and once at the back of a line of men in dark coats she hadn't been allowed to look at. She knew the weight of the ring in her hand. She knew there were nineteen steps up from the gate to the house, and a koi pond in the courtyard, and a kitchen at the back where the lamp by the rice cooker was always the last one off." },
    { n: "Somebody had left it on. Somebody was waiting up." },
    { n: "Haechan said something in Korean, very low, that she didn't think he meant to say out loud. Jungwon didn't say anything. Jungwon had gone completely still, and when she looked at him he had his left wrist in his right hand and was looking at his watch, which had stopped, which never stopped, which had run every night of the red since April at the guesthouse gate without missing a second, and the second hand was trembling on the twelve like a needle trying to point somewhere." },
    { flag: 'eqx-door-S1' },
    { n: "Neither of them moved toward it. Neither of them moved away. Haechan put his hands in his pockets, the way he had on the ice, and turned his face a little away. Jungwon unbuckled his watch, slowly, and put it face down in his palm, and closed his hand over it." },
    { s: 'jungwon', f: 'neutral', t: "...It's yours. Whatever you do. I'm not going to look at the time." },
    { choose: [
      { t: "(Go to the gate.)", tally: { 'doors.S': 1 }, flag: 'eqx-home-S1', then: [
        { n: "She went. Through the black water, the cold up to her ankles, the salt smell thickening until it was in her mouth, until she could hear it, the hiss of the tide a long way out on the flats, the clank of a boat against a mooring, a dog barking twice, very far off, the way it barked at the fish trucks." },
        { n: "She put her hand on the ring. It was cold, and wet, the way it was always wet at night." },
        { n: "The light over the gate went out. Not off. Out, the way the porch light had gone out in the snow. And the gate was only a wall, and the wall was only the back of a ramen shop in an upside-down town, and her hand was flat on wet plaster with nothing in it." },
        { n: "When she turned round, Haechan had taken his hands out of his pockets. Jungwon had put his watch back on. It was running." },
        { s: 'haechan', f: 'sad', t: "...You were going to knock." },
        { s: 'solar', f: 'neutral', t: "I don't know what I was going to do." },
        { s: 'haechan', f: 'neutral', t: "You were going to knock. You always knock. Nobody in that house ever knocks, it's the only house in the world where nobody knocks, and you still knock." }
      ] },
      { t: "(Turn your back on it.)", flag: 'eqx-away-S1', then: [
        { n: "She turned round. She stood with her back to the gate and the light on the back of her neck like a hand and looked at the two of them instead, Haechan with his hands in his pockets and Jungwon with his watch in his fist, both of them very carefully not looking at her, and she thought, for one stupid second, that this was the most anybody had ever loved her, two boys standing in black water not looking." },
        { n: "The light went out behind her. She felt it go. When she looked, it was a wall." },
        { s: 'jungwon', f: 'neutral', t: "...Twelve forty-one." },
        { n: "He'd opened his hand. The watch was running again. Low tide, Yunjin had said. At home." }
      ] },
      { t: "(Stand where you are. Let it be there.)", flag: 'eqx-watch-S1', then: [
        { n: "She stood where she was. She didn't go and she didn't turn. She let the salt get into her mouth and the light get into her eyes and the sound of the tide get into her chest and do what it did there, which was hurt, the particular hurt of a house you know is still standing without you in it." },
        { n: "It dimmed after a while. Not out. Dimmed, like the lamp by the rice cooker being turned down by someone going up to bed, and then it was a wall." },
        { n: "Aigis, who had been standing a little way back the whole time with her arms at her sides, came forward and put one hand flat on the wet plaster where the gate had been, and held it there." },
        { s: 'aigis', f: 'neutral', t: "It is warm. It was a door. It was warm the way a door is warm when the room behind it is lived in." }
      ] }
    ] },
    { n: "They went up early. Nobody said why. Yunjin was still on the lip of the well when they came out into the red, sitting exactly where they'd left her, and she looked at the three of them coming up the rope one after another, and at their faces, and she didn't ask anything either. She took Solar's wrist when she came up, the way Hanni did, and held it, and turned it over, and looked at the inside of it as if checking for salt." },
    { s: 'yunjin', f: 'sad', t: "...Was it low tide?" },
    { s: 'solar', f: 'neutral', t: "Yeah." },
    { n: "Yunjin nodded, slowly, as if that settled something. She didn't let go of her wrist all the way back across the courtyard, and in the morning, Solar found her asleep on the lounge couch with the lights off and the tide table from the ferry office open on her chest." }
  ] },

  { id: 'eqx-long-table', date: '6/9', slot: 'evening', consumes: true, title: 'till the rain stops', place: 'The Oka Boarding House · Kitchen', time: 'Evening',
    cast: { solar: 'Solar', mrsoka: 'Mrs. Oka', jaehyun: 'Jaehyun', jihoon: 'Jihoon', cherry: 'Cherry', minji: 'Minji', yunjin: 'Yunjin' },
    scene: [
    { bg: 'eqx-oka-kitchen', music: 'tender' },
    // BG: oka-dining-room — a long low wooden dining table in an old Japanese house, set for many with mismatched bowls and floor cushions, paper screens, a lamp hanging low over it, rain on a garden window at the end.
    { n: "By June the boarding house had a long table." },
    { n: "Nobody could say when it had happened. In April there'd been the little lacquered one by the kitchen window, and the cushions, and Mrs. Oka's two places laid for whoever. Then the front room had opened up, the screens slid back, and there was a table in there, low and long and dark with age, the kind of table you'd have to take a house apart to get in or out, and every evening at six there were bowls laid down the length of it, mismatched, a dozen, more, and every evening somebody came." },
    { n: "The guesthouse came, mostly. It was closer than the dorm, and the guesthouse kitchen had been a strange place since April, the night manager's room shut up and a new young man behind the desk who did his crossword in pen. Jaehyun came. Jaehyun came most nights now. Cherry came and sat by the door. Minji came with her camera in her lap and didn't film. Jihoon came, and ate everything but the rice, and Mrs. Oka never once remarked on it, and always gave him more of everything else." },
    { n: "And Nozomi Suemitsu came. Every night. He'd been the first, apparently, before any of them: a third-year from Gekkoukan with his uniform shirt untucked and a belly he was proud of and a reputation, a year ago, for selling bottled water out of his bag that he swore cured things. He'd walked past the gate in April and smelled the rice and stopped, and Mrs. Oka had been at the gate, and that was that. He sat at the end nearest the kitchen, always, with his elbows on the table and his chopsticks already up, and ate like it was a vocation." },
    { n: "Solar had come because Yunjin had asked her to. Yunjin had walked past the gate four times that week, Solar was nearly sure, and had stopped at it once, and then had come and found her in the dorm and said, not looking at her, *come with me, I don't want to go on my own*, and Solar had heard the rest of that sentence even though Yunjin didn't say it." },
    { n: "It started raining at a quarter to seven. Properly, all at once, the rainy season arriving the way it always did, like someone emptying a bath on the roof, loud on the tiles and loud on the leaves of the persimmon tree and loud on the cap of the old well in the garden, and Mrs. Oka came in from the kitchen with another pot in her gloved hands and looked out at it through the glass and smiled." },
    { s: 'mrsoka', f: 'neutral', t: "Well. Nobody's going anywhere in that. You'll all stay till it stops." },
    { n: "It wasn't a question. Nobody answered it. Nozomi said something with his mouth full that sounded like *best news I've had all week*, and everybody laughed, and the rain came down, and the lamp over the table swung a little in some draft nobody could feel." },
    { n: "It was easy to be there. That was the thing Solar would remember. The rice was perfect and the soup was perfect and the lamp made a warm gold room in the middle of all that rain, and the talk went up and down the table the way talk did at the end of a long day, and somewhere in it, without anybody deciding to, they started talking about what they'd do." },
    { s: 'cherry', f: 'neutral', t: "If we stayed? Like, if it turned out you just couldn't go back?" },
    { s: 'jihoon', f: 'neutral', t: "Hypothetically. In a hypothetical rainstorm." },
    { s: 'cherry', f: 'happy', t: "I'd get a job. A real one. Like, at the bakery by the station, the one with the cream bread. I'd wear an apron. Nobody would need me to stand in a doorway at two in the morning looking scary. I'd be the bread girl." },
    { s: 'jihoon', f: 'happy', t: "You'd eat all the bread." },
    { s: 'cherry', f: 'happy', t: "I'd eat all the bread and they'd fire me and I'd be the girl who got fired from the bread place. It would be the best day of my life." },
    { s: 'jaehyun', f: 'neutral', t: "I'd run. In the morning. With nobody timing it." },
    { n: "He said it to his bowl. Solar looked at him. He didn't look back. He'd set an alarm for seven sixteen every morning since April, she knew, for the call that never came, and turned it off every morning at seven sixteen and lay there, and she'd never once asked him what he did in that minute." },
    { s: 'minji', f: 'neutral', t: "...I'd stop filming." },
    { n: "Everybody looked at her. She was looking at the camera in her lap." },
    { s: 'minji', f: 'neutral', t: "Not like, forever. I'd just. Stop. One day. I'd put it down on a table and walk out of the room and not go back for it. Just to see what that felt like." },
    { n: "Nobody laughed at that. Nozomi, at the end of the table, put his chopsticks down for the first time all evening, and looked at her with his round, open, greedy face gone suddenly gentle, and said, *you should. You should do it here. Here's the best place to do anything.*" },
    { n: "Then he picked his chopsticks up again, and Mrs. Oka put more rice in his bowl without his asking, and he said *thank you, Mother*, as a joke, and she laughed and patted his head, and nobody else at the table thought anything of it." },
    { place: 'The Oka Boarding House · Hall', time: 'Evening', bg: 'eqx-oka-kitchen', soft: true },
    { n: "Solar went to find the bathroom at half past nine and came back the long way, down the hall past the kitchen, because the house was like that; there was never a short way back to anywhere." },
    { n: "The kitchen door was open a hand's width. Through it she could see the long counter and the tin with the cranes, and Mrs. Oka at the sink with her gloved hands in the water, and Jaehyun, who'd carried the empty pot in for her, standing a careful distance off, on the far side of the pale boards, with a dish towel he didn't seem to know what to do with." },
    { s: 'mrsoka', f: 'neutral', t: "You're her brother." },
    { s: 'jaehyun', f: 'neutral', t: "...In one of them. Yes." },
    { s: 'mrsoka', f: 'neutral', t: "In one of them. Isn't that something. And she's so far from you, isn't she, even sitting next to you. I see it at the table. You keep looking at her like she's a train you've already missed." },
    { n: "Jaehyun didn't say anything. Solar, in the hall, had stopped with one hand flat on the wall." },
    { s: 'mrsoka', f: 'neutral', t: "Ask her to stay. That's all. She'd listen to you. You're her family. She'd listen to you, if you asked her." },
    { s: 'jaehyun', f: 'neutral', t: "She's never listened to me in her life." },
    { s: 'mrsoka', f: 'neutral', t: "She will to this." },
    { n: "She said it softly. She didn't turn round from the sink. And Jaehyun, who had never in Solar's whole memory of him agreed to anything anyone told him on the first try, who argued with waiters, who argued with their father, who had argued with Solar about whether the stairs on a shrine had one hundred and twelve or one hundred and thirteen steps for nine years running, stood with the dish towel in his hands and didn't argue." },
    { n: "He looked at the back of the landlady's head for a long moment. Then, very slightly, so slightly she wasn't sure afterward that she'd seen it, he nodded." },
    { choose: [
      { t: "(Go in.)", then: [
        { n: "She pushed the door open. Mrs. Oka turned from the sink, delighted, the way she was always delighted, and said *there she is*, and Jaehyun put the dish towel down on the counter very fast, as if it had been caught doing something, and walked out past Solar into the hall without looking at her, and the whole way home through the rain he walked half a step ahead, and didn't say anything, and at the dorm gate he stopped under the light for a second, as if he might, and then didn't." }
      ] },
      { t: "(Go back to the table. Don't let them see you.)", then: [
        { n: "She went back to the table. She sat down next to Yunjin. Yunjin looked at her face and slid her own cup of barley tea across to her without a word, and Solar drank it, and it was warm, and her hands were cold all the way home." },
        { n: "Jaehyun walked half a step ahead of her through the rain. At the dorm gate he stopped under the light, the way he stopped there every night, three knocks and her name and his name, and stood a second longer than he needed to, as if there were something else he had to say, and she waited, and he didn't." }
      ] }
    ] },
    { n: "It stopped raining at eleven forty. Exactly. As if a tap had been turned off. They looked at the window, all of them, at the same moment, at the garden suddenly silent and dripping in the lamp light, and at the well under the persimmon tree with water standing in a ring on its heavy cap." },
    { n: "Nozomi was still eating when they left. Mrs. Oka stood in the doorway in her apron to see them off, not on the step, never on the step, just inside, the light behind her, and she waved her floured glove, and called after them down the wet street, *come back tomorrow*, and every one of them, every single one, Solar too, called *we will* without thinking about it at all." }
  ] },

  { id: 'eqx-door-hoax', date: '6/12', slot: 'late', consumes: true, title: 'rice in the cooker', place: 'The Well · The Doorstep', time: 'The Dark Hour',
    cast: { solar: 'Solar', jungwon: 'Jungwon', jihoon: 'Jihoon', junpei: 'Junpei', fuuka: 'Fuuka' },
    scene: [
    { bg: 'eq-well-2', music: 'mystery' },
    { dark: true },
    { n: "The next Saturday it was Jungwon again, and Jihoon, and Junpei, who'd volunteered so loudly at breakfast that Mitsuru had agreed just to make it stop, and who'd then spent the climb down telling Jihoon about a manga he was sure Jihoon would like, and Jihoon had let him, the whole way, in a voice of perfect patience, which was how Solar knew Jihoon was nervous." },
    { n: "Jungwon walked next to her. Jihoon walked behind her. Nobody had arranged it. That was how they'd always walked, somehow, in every hallway either of them had ever walked her down: one at her side and one at her back, so that she was always between them, and neither of them ever once mentioned it, and both of them always knew exactly where the other was." },
    { s: 'fuuka', f: 'neutral', t: "*Something's different on your left. The doors on that side have stopped knocking. All of them, all at once. Like when a classroom goes quiet because the teacher walked in.*" },
    { s: 'junpei', f: 'surprised', t: "Cool. Cool cool cool. I love that. That's a great thing to say to people." },
    { n: "On their left, between a florist's shutter and the side door of a karaoke box, there was a door that didn't belong in Iwatodai. It belonged in an apartment building. A heavy gray steel door, the kind with a peephole at the top and a number in brass, the kind every apartment door in a certain kind of building in a certain city had, and beside it a little plastic doorbell with a light in it, and under the doorbell, stuck to the steel with tape, a yellow note." },
    // CG: eqx-door-h1 — a heavy gray apartment front door with a brass number and a peephole, a small lit doorbell beside it and a yellow sticky note taped to it, standing in the wall of a flooded, upside-down Japanese shopping street at night.
    { n: "Solar had to go close to read it. She didn't have to. She knew the handwriting from fridge doors and lunchbox lids and the inside of a textbook a mother had once written her name in, too big, so nobody at a new school could miss it." },
    { n: "*Rice in the cooker. Don't wait up. — Mom*" },
    { flag: 'eqx-door-H1' },
    { n: "Behind her, very quietly, Jihoon said *oh*. Just that. The sound a person makes when they put their hand on a stove they didn't know was on." },
    { n: "He'd been in that apartment. Of course he had. He'd been in that apartment since before either of them had all their teeth, eating that rice out of that cooker, sleeping on that floor under a blanket with a cartoon dog on it, and he'd stopped being allowed in it, at some point, for reasons nobody in it had ever said out loud. Solar didn't turn round. She didn't have to. She knew exactly where he was standing, the way she always had." },
    { n: "Jungwon was at her side. He was looking at the door too, the steel and the number and the note, and his face was doing the thing it did in the council room when somebody said something he was going to have to deal with later: nothing. Nothing at all. He lived a block from that door. He'd walked her to it a hundred times and kissed her goodnight in front of it and never once gone in past the shoe cabinet." },
    { s: 'jungwon', f: 'neutral', t: "...Your mother's going to have kept the rice warm the whole time. However long it's been. She'd keep it warm out of spite." },
    { s: 'jihoon', f: 'neutral', t: "She'd keep it warm and then she'd throw it out in front of you so you knew." },
    { n: "They'd both said it at the same time, almost. They looked at each other over her head, for one second, the boyfriend and the other thing, two boys who'd known the same woman's kitchen from opposite sides of a door, and something went between them that wasn't anything Solar had a name for, and then they both looked away, at the same time, in opposite directions." },
    { s: 'junpei', f: 'neutral', t: "...Uh. I'm gonna go stand over there. Way over there. Like, a respectful distance. By the karaoke." },
    { choose: [
      { t: "(Ring the bell.)", tally: { 'doors.H': 1 }, flag: 'eqx-home-H1', then: [
        { n: "She put her finger on the little lit button. It was warm. She could hear it already, the way you hear a song before it starts: two notes, ding, dong, cheap and cheerful, and then her mother's slippers on the hall floor, and the chain, and her mother's voice already halfway through a sentence about the time." },
        { n: "She pressed it." },
        { n: "No sound. The light in the bell went out under her finger. The note fell off the door, face down, onto the black water, and floated, and the ink ran, and the door was the side door of a karaoke box with a sticker on it advertising a two-hour special, and her finger was on a dead plastic button that had never been wired to anything." },
        { n: "She picked the note up out of the water anyway. It was blank. It was a wet yellow square with nothing on it at all. She put it in her pocket." },
        { s: 'jihoon', f: 'sad', t: "...Hey. Hey, Sol. Come here a sec." },
        { n: "He didn't touch her. He stood where he was, behind her, and she went back and stood in front of him, and he looked at her face for a while, the way he did, as if checking it for damage after a fall, and then Jungwon came and stood at her side, and that was where they stood, the three of them, the way they always stood, for longer than they needed to." }
      ] },
      { t: "(Don't touch it.)", flag: 'eqx-away-H1', then: [
        { n: "She put her hands in her pockets. She didn't trust them. She stood in front of her mother's door with her hands in her pockets and read the note again, and again, *rice in the cooker, don't wait up*, until it stopped being words." },
        { n: "Jungwon's hand came and found her elbow, through her jacket. Not her hand. Her elbow, the way he'd steer her through a crowded hallway at school without anyone seeing him do it. And behind her, very lightly, so lightly she could have pretended it was the draft, Jihoon put two fingers on the back of her collar, and left them there." },
        { n: "When the light in the doorbell went out, all three of them felt it." }
      ] },
      { t: "(Read it one more time. Then go.)", flag: 'eqx-watch-H1', then: [
        { n: "She read it one more time. Then she turned and walked away from it, down the flooded street, past Junpei by the karaoke, who fell in beside her without a word, and she didn't look back." },
        { n: "Jungwon looked back. She knew he did. And Jihoon, behind her, didn't, and she knew that too, and she didn't know which of them it was that made her want to cry." }
      ] }
    ] },
    { n: "On the way up the rope Junpei went first, and talked the whole way, about nothing, about the manga, about whether Koromaru would eat a whole melon if you let him, and none of them told him to stop, and when they came out into the red at the top Jihoon put both hands on the lip of the well and stood there with his head down for a long moment, breathing, as if he'd run there, and then straightened up and said, brightly, to nobody, *well. I could use a cigarette*, and didn't have one, and didn't go looking for one either." }
  ] },

  { id: 'eqx-bridge', date: '6/19', slot: 'late', consumes: true, title: 'the long way round', place: 'Kirijo Guesthouse · Lobby', time: 'Late Night',
    cast: { solar: 'Solar', minji: 'Minji', akihiko: 'Akihiko', fuuka: 'Fuuka' },
    scene: [
    { bg: 'kirijo-guesthouse-lobby', music: 'rain' },
    { n: "It had rained for six days. The guesthouse lobby smelled of wet umbrellas and the new night manager's instant coffee, and Minji was on the floor against the couch again with the silver camera in her lap and her knees up, the way she'd been sitting in May when she showed Solar the coffin that had turned to face its door, and Solar sat down next to her without being asked, because she'd learned what that particular way of sitting meant." },
    { s: 'minji', f: 'neutral', t: "I wasn't going to show anybody. I want that on record. I was going to delete it." },
    { s: 'solar', f: 'neutral', t: "But you didn't." },
    { s: 'minji', f: 'neutral', t: "I don't delete things. That's my whole problem." },
    { n: "She held up the little screen. The red hour, two nights ago, from the guesthouse roof, where Minji had taken to filming now that the sill had got too predictable: the whole bay laid out under the swollen moon, the town dark, the island dark, the school and its courtyard and the long white curve of Moonlight Bridge going out over the black water toward Port Island, every streetlamp along it dead." },
    { n: "Minji zoomed. The picture went soft and grainy and red. The rail of the bridge, a third of the way across. And at the rail, small, a shape. A person, standing, in a long coat that might have been any color in that light and was, Solar knew, blue. Their back to the road. Their face to the water. One arm up and bent, the elbow out, the other moving, slowly, back and forth, back and forth." },
    // CG: eqx-violinist-footage — a small grainy red video frame on a camera screen: a long empty bridge at night under a huge full moon, and far out on it a tiny figure in a long coat at the rail, one arm raised as if playing a stringed instrument, back turned.
    { s: 'minji', f: 'serious', t: "She's in every night. Since the first of June. Every single night I've had the camera on that side, she's there. And she's not in a coffin. She's standing up. In the red. Like us." },
    { s: 'minji', f: 'neutral', t: "And there's no sound. The mic's good, I can hear the water against the pylons from the roof, I can hear Jihoon snoring through the floor. And there's nothing coming off that bridge at all." },
    { flag: 'eqx-ghost-minji' },
    { choose: [
      { t: "I'm going out there.", then: [
        { s: 'minji', f: 'serious', t: "I knew you'd say that. That's why I wasn't going to show anybody." },
        { s: 'minji', f: 'neutral', t: "...Take Akihiko. He's the only one Mitsuru lets break the rule." }
      ] },
      { t: "Does Mitsuru know?", then: [
        { s: 'minji', f: 'neutral', t: "Mitsuru knows. Mitsuru said nobody goes near the bridge in the red, and then she went and stood at her window at midnight with binoculars. I saw her. From the roof. We waved." },
        { n: "Solar looked at the screen. At the small shape at the rail, with its back to everybody, moving its arm. She had already decided. Minji saw her decide, and sighed, and went to text Akihiko." }
      ] }
    ] },
    { place: 'Moonlight Bridge', time: 'The Dark Hour', bg: 'darkhour-moonlight-bridge', music: 'darkhour' },
    { n: "Akihiko ran it with her. That was the deal he made with Mitsuru by phone at eleven fifty, standing in the guesthouse lobby with his back to them: not to go to the woman. To run the bridge. Gate to gate, the way he ran the pier, the way he'd run it in the green every night the winter before last, and time it, because the hour was sixty-one minutes forty now and he'd been wanting to know, he said, whether it ran the same on the water." },
    { n: "The rain stopped at twelve. Of course it did. The red came down over everything like a lid, and the puddles on the bridge went to blood and then to glass, and every lamp on the long white span was dead, and the coffins in the stalled cars sat facing the same way, all of them, the way Minji had filmed them in the street, toward the island and the school, like passengers on a ferry looking at the shore." },
    { n: "They ran. The cold wet air in her chest, Akihiko a stride ahead and holding it back, the yellow stopwatch in his fist. A third of the way across she heard it." },
    { n: "Not loud. Not even clear. The way you hear a radio in another apartment through a wall, the tune but not the words. Low, and slow, and sad in a way that had nothing to do with being sad, the way the sea is sad. A viola. She'd have known it anywhere. It didn't play a song. It played the long way round a song, going up toward something and turning away from it just before the top, and going up again." },
    { n: "Akihiko stopped dead beside her. He'd heard it too. He looked at the stopwatch, and then at her, and his face in the red had gone the color of the bridge." },
    { s: 'akihiko', f: 'serious', t: "...It's getting longer. While she plays. Look at it. It's not counting wrong. It's counting more." },
    { n: "And there she was." },
    { n: "At the rail. Thirty meters ahead. Her back to them, her face to the black water, a long blue coat buttoned to the throat, and a black case open at her feet like a mouth. Her bow arm moving, slow. Her hair down her back, dark, wet. She didn't turn round. She didn't stop. She stood in the red hour on Moonlight Bridge, where in another year a train had run that took people nobody held, and she played toward the island with her whole body, the way you'd lean into a wind." },
    // CG: eqx-violinist — a woman in a long blue coat buttoned to the throat, seen from behind at the rail of a long dark bridge under a huge red full moon, playing a viola toward the water, an open black instrument case at her feet, puddles shining red on the road.
    { n: "Solar knew the coat. She knew the shoulders in it. She'd walked past them on a set of station steps, twice, and not stopped." },
    { n: "It couldn't be. That woman had gone home. Solar had said her name on a platform at the end of everything and watched her walk through a door that Elizabeth held, into her own life, in her own world, and the door had shut." },
    { choose: [
      { t: "Hanne?", flag: 'eqx-bridge-name', then: [
        { n: "She said it. Not loud. The way you'd say a name across a room to someone you weren't sure you knew." },
        { n: "The music stopped." },
        { n: "Not tailed off. Stopped, on the way up, a note cut in half. The bow stayed on the string. The woman at the rail didn't turn round. She stood absolutely still with her back to them, her bow arm frozen, her head a little bent, the way someone stands who has heard their name in a street for the first time in a very long time and doesn't dare look in case it was meant for somebody else." },
        { n: "Then Akihiko's hand closed on Solar's wrist, hard, by itself, the way it closed every night round nothing, and pulled, and she looked down at it for half a second." },
        { n: "When she looked up, the rail was empty. No coat. No case. Only a single wet black mark on the road where the case had been, drying as she watched, and the water going on below." }
      ] },
      { t: "Excuse me—", then: [
        { n: "She called it the way you'd call to a stranger who'd dropped something. The woman didn't turn. The music didn't stop. It went on up toward whatever it was going up toward, and turned away again at the top, and Solar took one step toward her, and Akihiko's hand closed on her wrist by itself, hard, and she looked down at it." },
        { n: "When she looked up, the rail was empty. The music went on for another three seconds, from nowhere, from the water, and then it was the sea against the pylons." }
      ] },
      { t: "(Don't say anything. Just watch her.)", then: [
        { n: "She didn't say anything. She stood on the bridge in the red with Akihiko's breath going fast beside her and watched a woman play with her back to the world, and she thought that this was what it must have looked like, the whole year that nobody stopped. A person doing something with everything they had, in the middle of a road, and everyone going by." },
        { n: "Something in the music changed. Not the tune. The weight of it. As if the woman had felt, through her back, through her coat, through thirty meters of red air, that somebody had stopped." },
        { n: "Then Akihiko's hand closed on Solar's wrist, by itself, and she looked down at it, and when she looked up the rail was empty." }
      ] }
    ] },
    { n: "They didn't run back. They walked, fast, not talking, with his hand still on her wrist because he couldn't, he said afterward, get it to open, and at the island end he stopped the watch when the lights came on and looked at it for a long time." },
    { s: 'akihiko', f: 'serious', t: "Sixty-one fifty-eight. It was sixty-one forty-one last night." },
    { s: 'akihiko', f: 'neutral', t: "Seventeen seconds. In one night. While she played." },
    { n: "He took a strip of white tape off the roll and wrote it on, and then, under it, smaller, in the handwriting that looked like it had been written running, a word Solar didn't see, and stuck it in the inside of his jacket instead of on the wall." },
    { s: 'fuuka', f: 'neutral', t: "*...Solar? Akihiko-senpai? I lost you on the bridge. You just went quiet. Both of you. Like somebody put their hand over—*" },
    { s: 'solar', f: 'neutral', t: "We're here. We're coming back." },
    { n: "She didn't tell Fuuka what she'd seen. She didn't tell anybody, that night. She lay in her bed in the dorm with her wrist aching where Akihiko's hand had been and listened to the rain start again, and somewhere very far off, so far she couldn't have sworn to it, so faint it might have been the pipes, something went up toward the top of a tune, and turned away." }
  ] },

  { id: 'eqx-second-hill', date: '6/26', slot: 'evening', consumes: true, title: 'the second hill', place: 'Iwatodai Dorm · Lounge', time: 'Evening',
    cast: { solar: 'Solar', haechan: 'Haechan', jungwon: 'Jungwon', shinjiro: 'Shinjiro', yunjin: 'Yunjin', fuuka: 'Fuuka', mitsuru: 'Mitsuru', akihiko: 'Akihiko' },
    scene: [
    { bg: 'iwatodaidorm-livingroom-night-summer', music: 'badfeeling' },
    { n: "The moon came up red." },
    { n: "Not in the red hour. At eight in the evening, over the bay, an ordinary Saturday in June with the rain cleared off for once and the whole sky washed and soft, and the full moon came up out of the sea the color of a bitten lip, and a bite was out of the bottom of it. Fuuka had the newspaper. A partial eclipse, it said. Visible across Japan, weather permitting. Nothing to be concerned about." },
    { n: "Everybody on the dorm roof was concerned about it. They stood along the rail in a row, nineteen people and a dog, and watched the shadow of the earth eat into the bottom of the moon, slowly, the way the tide comes in over the flats, and Yunjin, at the end of the row, had the tide table from the ferry office in her hands and wasn't looking at it." },
    { s: 'yunjin', f: 'neutral', t: "Low tide's at twelve-oh-six. Here. I checked twice." },
    { s: 'yunjin', f: 'serious', t: "Fuuka says the well smells like the sea. Since Wednesday. Mud and salt and diesel. So if it's what I think it is. If it's home." },
    { n: "She didn't finish. She folded the tide table in half, and in half again, and held it out to Solar, small and square, without looking at her." },
    { s: 'yunjin', f: 'neutral', t: "It stops halfway. The water. In the red. I've watched it from the laundry window. It stops halfway down the mud for the whole hour like a wall of glass. If you see it stop, you don't stand in front of it. You don't stand where it would have been." },
    { choose: [
      { t: "(Take the tide table.)", then: [
        { n: "She took it. It was warm from Yunjin's hands. She put it in the inside pocket of her jacket, over her heart, and Yunjin watched her do it, and let out a breath she seemed to have been holding since Wednesday." }
      ] },
      { t: "Come to the top of the well. Like you did before.", then: [
        { s: 'yunjin', f: 'neutral', t: "I was going to anyway. I was going to whether you asked or not." },
        { n: "She put the tide table in Solar's hand and closed Solar's fingers over it, one at a time, with her own." }
      ] }
    ] },
    { place: 'Gekkoukan High · Courtyard', time: 'The Dark Hour', bg: 'eqx-courtyard-well-night', music: 'fullmoon' },
    { dark: true },
    { n: "At twelve the bitten moon went red all the way through, and the courtyard went red under it, and the well stood in the middle of the paving with its rope coiled on the lip, and the air coming up out of it was cold and wet and smelled exactly, exactly, of a harbor at low tide." },
    { n: "Four went down. Solar. Haechan. Jungwon, who'd asked Mitsuru at breakfast in the formal voice he used for council motions, and been told yes before he finished. And Shinjiro." },
    { n: "It was his first time on the rope. He stood at the lip of the well with his Evoker in his left hand and his right hand opening and closing at his side, and Akihiko stood next to him, not helping, so carefully not helping that it was louder than if he'd shouted." },
    { s: 'akihiko', f: 'serious', t: "If your hand goes on the rope, you say so. You don't be clever about it." },
    { s: 'shinjiro', f: 'neutral', t: "When have I ever been clever about anything." },
    { s: 'akihiko', f: 'neutral', t: "Every time it mattered." },
    { n: "Shinjiro looked at him. Then he looked at Solar, and the look said *don't*, and she didn't, and Haechan, who was already on the rope with one hand, looked up at the three of them with an expression of enormous patience and said, *I'll go under him. I'll catch him if he falls. Everybody calm down.*" },
    { s: 'shinjiro', f: 'neutral', t: "...Nobody's catching anybody." },
    { s: 'haechan', f: 'happy', t: "Sure. Sure. Nobody's catching anybody. I'll be underneath, though. Not catching." },
    { place: 'The Well · The Doorstep', time: 'The Dark Hour', bg: 'eq-well-1', soft: true },
    { n: "Down through the shaft, the stone turning round them like the inside of a shell. Down through the Doorstep, the town hanging overhead, the doors all shut tonight and none of them knocking, which was worse. Down past the black ice of the First Hill, the dark campus, the coffins in the quad closed tight in their rows. Down further than any of them had been." },
    { s: 'fuuka', f: 'neutral', t: "*I can hear you. I can still hear you. There's... there's a lot of water below you. A lot. Standing water. It's not moving. Nothing in it is moving.*" },
    { s: 'fuuka', f: 'surprised', t: "*Something in it is breathing.*" },
    { place: 'The Well · The Second Hill', time: 'The Dark Hour', bg: 'eq-well-4', music: 'mystery' },
    { n: "Mud." },
    { n: "Their feet went into it at the bottom of the rope, cold and soft to the ankle, and the smell came up all round them, salt and rot and iron, and they were standing on the flats. A harbor at low tide, at night, the mud running out wide and black and shining under the red moon toward a sea that wasn't there, little boats tipped over on their sides in it, mooring ropes slack, and the lights of a waterfront along the edge, a crane, a row of sheds, a stone stair going up from the mud into the dark." },
    { n: "And on both sides of them, the tide." },
    { n: "It hadn't gone out. It had stopped. The sea stood up out of the mud on either side of them like walls, two walls of black glass taller than any building in Iwatodai, the water standing straight up and perfectly still, with the red moon going through it so that the whole of it glowed, faintly, like a stained window in a church. And it ran on, down the flats, in front of them, a corridor of standing sea a hundred meters wide, and at the far end, where the walls met, the moon sat in the water like a red coin." },
    // CG: eqx-second-hill — a black harbor mudflat at night with small boats tipped on their sides, the sea standing up on both sides like two enormous glowing walls of dark red glass, a partial-eclipsed red moon reflected far ahead where the walls meet, four tiny figures on the mud.
    { n: "Jungwon looked at his watch. It had stopped. He didn't say anything." },
    { n: "The walls weren't empty. That was the second thing Solar saw, and after she'd seen it she couldn't stop seeing it. Things hung in the water. All through it, at every height, suspended in the black glass like insects in amber. Shapes. Pale, soft, long, the size of people, curled, the way you curl to sleep, and nothing she could put a face to, nothing she could name, the water's own things. And every one of them, very slowly, every few seconds, swelled a little, and went down. Swelled, and went down." },
    { n: "Breathing." },
    { s: 'haechan', f: 'serious', t: "...Don't look at the walls. Sol. Look at me. Don't look at the walls." },
    { s: 'shinjiro', f: 'neutral', t: "Too late for that." },
    { n: "Shinjiro had his Evoker up already, in his left hand, against his temple, not pulling the trigger, just holding it there the way you'd hold something cold to a bruise. His right hand was shaking. He let it." },
    { n: "Halfway down the corridor, in the mud, there was a kitchen." },
    { n: "Not a whole one. The pieces of one, standing on the flats in the red light as if they'd been set down there by a tide that hadn't come back for them. A counter, with a rice cooker on it, the little orange light glowing. A low table with nobody at it. A lamp on a cord hanging from nothing. And on the wall that wasn't there, hanging from a nail in the air, a calendar." },
    { n: "A kitchen calendar, the cheap kind a shop gives away at New Year, a photograph of a mountain at the top and the month in a grid beneath it, the page turned to a spring month. One square on it was circled in red. Hard, round and round, the pen gone through the paper in places. Solar couldn't read the number in it. Every time she looked, the number was a little different, the ink running, as if the calendar were underwater and someone were holding it up to her through the glass." },
    { n: "Haechan knew that calendar. She saw him know it. He didn't say anything. Jungwon knew it too; his face did the nothing it did, and his hand went to his wrist, to the stopped watch, and closed round it." },
    { n: "Nobody said the date. Nobody at all." },
    { n: "Then the tide spoke." },
    { n: "It came out of the walls on both sides at once, from inside the standing water, low, through the glass, the voice of a sea that had been holding its breath a very long time and was tired of it. It wasn't any one voice. It was everyone in a house, at night, through a wall, talking low so the children wouldn't hear." },
    { n: "*Sit down.*" },
    { n: "*Sit down here, in the mud, where it's still. Stay where nobody dies. It won't come in while you're sitting. It'll stand where it is forever. Nothing has to happen. Nothing ever has to happen. All you have to do is stay.*" },
    { n: "And the thing was, Solar could feel it. The stillness. She could feel what it would be like, to sit down in the soft cold mud with her back against the table that nobody sat at and the rice cooker light glowing orange and the walls of the sea standing up on either side of her forever, breathing, and nothing coming in. Nothing coming. Ever. The relief of it was so big it hurt her teeth." },
    { choose: [
      { t: "(Sit down.)", tally: { cakes: 1, 'asks.solar.tide': 'yes' }, flag: 'eqx-hill2-sat', then: [
        { n: "She sat down. The mud took her, cold, through her jeans, and she leaned her back against the leg of the low table and let her head go back, and the orange light of the rice cooker was on her face, and it was quiet. It was so quiet." },
        { n: "The walls of the sea shivered, both of them, all the way up, a long slow ripple going through the black glass like a shiver going down a back, and every pale shape hanging in the water swelled at once, together, and held it, and something in Solar's chest went out of her, into the mud, warm, and didn't come back." },
        { n: "Haechan had her by the arm before she knew he'd moved. Not asking. Lifting. He'd said he'd never ask her for anything, and he didn't. He just pulled her up out of the mud the way he'd pulled her up out of the bottom of the Well, by the wrist, and held on, and his face was white." },
        { s: 'haechan', f: 'serious', t: "...Nope. No. Up. You can be mad at me after." }
      ] },
      { t: "(Stay on your feet.)", tally: { 'asks.solar.tide': 'no' }, then: [
        { n: "She stayed on her feet. It took everything. Her knees wanted to go. Her whole body wanted to go, the way a body wants to lie down in snow, and she locked them, and stood in the mud with her fists shut and the tide table pressing square against her chest through her jacket." },
        { n: "The walls of the sea shuddered. A long slow ripple, all the way up both of them. And the voice came again, from inside the glass, smaller, the voice of someone at a kitchen table who's been told no at the end of a long day." },
        { n: "*...Sit down.*" }
      ] },
      { t: "The tide isn't mine to stop.", tally: { choose: 1, 'asks.solar.tide': 'choose' }, flag: 'eqx-hill2-mine', then: [
        { n: "She said it to the walls. Quietly. Not angry. The way you'd say something true to someone you love who's asking you for the one thing you can't give." },
        { n: "The tide isn't mine to stop. It never was. It comes in whether I sit down or not. It's not mine and it's not yours. It's just the tide." },
        { n: "Nothing happened for a moment. Then, very faintly, so faintly she thought she'd imagined it, the water in the walls moved. Not a ripple. A movement, the smallest, a millimeter of standing sea leaning in, the way a held breath leaks before you let it go. And the pale shapes in the glass, all of them, stopped breathing at once." },
        { n: "Jungwon's watch ticked. Once. He looked down at it. Haechan let out a breath like he'd been punched." }
      ] }
    ] },
    { n: "The calendar tore itself off its nail in the air, and folded, and folded again, and came down onto the mud the way a gull comes down, and stood up." },
    { n: "It stood up out of the flats in the shape of a woman made of water, tall and thin and stooped, the black sea pouring off her and never running out, the tide's own body, with a kitchen calendar for a face. Its arms were too long. It held one hand out, palm up. Asking. It had always only been asking." },
    { s: 'shinjiro', f: 'neutral', t: "...Okay. That's enough of that." },
    { n: "He pulled the trigger. Left-handed. And the sound it made, the glass breaking at his temple in the red, was the first time Solar had heard it in a year and a half, and it went through her like a bell." },
    { s: 'jungwon', f: 'serious', t: "Hyeonmu." },
    { s: 'haechan', f: 'serious', t: "*Dalnim.* Come on. Come on, come on." },
    { summon: 'haenim', name: 'Haenim', sub: 'The Second Hill.' },
    { battle: { id: 'eqx-second-hill', op: 'eqx-second-hill', kind: 'operation', title: 'Full Moon · The Second Hill', desc: 'A harbor at low tide, the sea standing up in walls on either side, a kitchen left on the mud, and a calendar with one day circled that nobody will read aloud.', forced: true } },
    { music: 'night' },
    { n: "It came apart the way the tide goes out. All at once and then slowly. The water woman fell into the mud in a long sheet, and ran away across the flats toward the walls in a hundred little streams, and the calendar lay face down where she'd stood, soaked through, and when Jungwon turned it over with the toe of his shoe there was nothing on it. A mountain. A grid. No circle. No month." },
    { n: "The walls of the sea didn't fall. They leaned. Very slowly, both of them, inward, toward the corridor, a centimeter, two, and the pale things hanging in the water turned in their sleep, all at once, toward the four of them standing on the mud." },
    { s: 'fuuka', f: 'surprised', t: "*It's moving. Solar, the water's moving, both sides, it's— I can hear it start, you need to—*" },
    { n: "And in the mud at the end of the corridor, where the walls met and the red coin of the moon sat in the water, there was a staircase." },
    { n: "Just the stairs. Wooden, dark, polished by years of feet, going up out of the mud into nothing. Seven of them, and a landing. On the landing a light was on, a small one, a lamp somebody had left on low in a hall for someone coming home late." },
    { n: "She knew the stairs. She'd counted them in the dark in socks. She knew which one creaked and she knew it was the seventh, and she knew who sat on it some nights, at the bottom of a house full of people sleeping, and said nothing at all very loudly until she came in." },
    // CG: eqx-door-s2 — seven polished dark wooden stairs and a small landing standing alone on a black mudflat at night, a low lamp lit on the landing, walls of dark red water leaning in on either side, a red moon low in the water beyond.
    { flag: 'eqx-door-S2' },
    { n: "Haechan put his hands in his pockets. Jungwon took his watch off and put it face down in his palm. Shinjiro, who didn't know what either of those meant and didn't need to, looked at the two of them, and at her, and at the stairs, and turned his back on all of it and stood facing the leaning water with his Evoker in his left hand, keeping watch, so whatever she did, she'd do it without anyone seeing." },
    { choose: [
      { t: "(Go up the stairs.)", tally: { 'doors.S': 1 }, flag: 'eqx-home-S2', then: [
        { n: "She went. One. Two. The wood was dry under her muddy feet. Three. Four. She could smell the house now, the soap and the cold stone and the rice from the morning, and hear it, the big quiet of it, the clock in the hall. Five. Six." },
        { n: "Her foot was on the seventh stair. It creaked." },
        { n: "The lamp went out, and the stairs weren't there, and she was standing on nothing in the mud with her foot raised, and nearly fell, and Jungwon caught her elbow from below without a word, and held it until she had her balance, and let go." },
        { n: "She stood there a while. The water was leaning. Nobody hurried her." }
      ] },
      { t: "(Turn round. Go back to them.)", flag: 'eqx-away-S2', then: [
        { n: "She turned round. She walked back up the corridor of standing water to where the three of them were, and stood among them, and Haechan took his hands out of his pockets and didn't touch her, and Jungwon put his watch back on, and behind her the lamp on the landing went out like someone going up to bed." }
      ] },
      { t: "(Count the stairs from here. Leave it.)", flag: 'eqx-watch-S2', then: [
        { n: "She counted them from where she stood. Seven. She counted them twice. Then she let them be, and watched the light on the landing go down slowly, the way it went down when the last person in the house turned it off on their way past, and the stairs went with it." },
        { s: 'haechan', f: 'sad', t: "...He'd have still been sitting there. If you'd gone up. On that one." },
        { s: 'solar', f: 'neutral', t: "I know." }
      ] }
    ] },
    { n: "The walls of the sea came in." },
    { n: "Not fast. Not yet. A long slow roar from both sides at once, the standing water letting go of itself, the corridor narrowing, the pale shapes in the glass turning and turning, and they ran. Back up the flats through the sucking mud, Haechan with her wrist, Jungwon ahead finding the rope, Shinjiro last, his bad hand shaking on the Evoker, not looking back, and the black water closing behind them like a door." },
    { place: 'Gekkoukan High · Courtyard', time: 'The Dark Hour', bg: 'eqx-courtyard-well-night', soft: true },
    { n: "They came up into the red soaked to the knee in mud that smelled of a harbor four countries away, and Yunjin was on the lip of the well where she'd said she'd be, and when she saw the mud she put both hands over her mouth." },
    { n: "Shinjiro came up last. Akihiko was at the top, against orders, again, and reached down for him, and Shinjiro looked at the hand for one second and took it with his left, and came up over the lip, and sat down hard on the paving, and put his back against the stone of the well and his head back and shut his eyes." },
    { s: 'akihiko', f: 'neutral', t: "...Well?" },
    { s: 'shinjiro', f: 'neutral', t: "My hand went. On the way up. Twice." },
    { s: 'akihiko', f: 'neutral', t: "And?" },
    { s: 'shinjiro', f: 'neutral', t: "And I said so. To the kid underneath me. Like you told me." },
    { n: "Haechan, who was sitting on the paving pulling mud out of his shoes, didn't look up, and didn't say anything, and his ears went red." },
    { n: "Akihiko looked at his stopwatch. Sixty-eight minutes. Six over. He didn't write it down either." }
  ] },

  { id: 'eqx-stage', date: '6/26', slot: 'late', consumes: true, title: 'a stage that isn’t there', place: 'Paulownia Mall · Atrium', time: 'The Dark Hour',
    cast: { solar: 'Solar', yunjin: 'Yunjin', haechan: 'Haechan', chaewon: 'Chaewon', sakura: 'Sakura', kazuha: 'Kazuha', eunchae: 'Eunchae', mitsuru: 'Mitsuru', fuuka: 'Fuuka', mrsoka: 'Mrs. Oka' },
    scene: [
    { bg: 'paulownia-mall-night', music: 'darkhour' },
    { dark: true },
    // BG: paulownia-atrium-redhour — the inside of a shopping mall's central atrium at midnight, every shop shuttered, a fountain gone still, the whole space lit red from the glass roof by a huge moon, an empty stretch of polished floor in the middle like a stage.
    { n: "Fuuka heard them while the four of them were still on the rope." },
    { n: "Four heartbeats. New ones. In the middle of town, in the red, where there should have been nothing but coffins, four people standing up and moving, fast, together, all four of them at once, she said, in a pattern, as if they were all one thing with four hearts. And then, in a voice none of them had ever heard her use, small and amazed." },
    { s: 'fuuka', f: 'surprised', t: "*...They're dancing.*" },
    { n: "Mitsuru sent the ones who were already wet. Solar, Haechan, and Yunjin, who wouldn't have stayed behind for anything and who Mitsuru, looking at her face, didn't try to make. They ran down the hill in the red with the mud still on them, past the station, across the plaza, and in through the doors of Paulownia Mall, which were open, which were never open, which stood wide in the red as if somebody had been expected." },
    { n: "The atrium was lit from above. The glass roof full of red moon, the fountain still in its basin, every shop shuttered, the escalators stopped, the coffins of the late cleaners standing upright by their carts. And in the middle of the polished floor, where on Sundays there was sometimes a man with a balloon stall, there was a stage." },
    { n: "There wasn't. There was floor. But four girls were dancing on it as if it were a stage, as if there were lights on it, and a crowd, and a monitor at their feet giving them the count, and there was nothing, no music, nothing at all, only the squeak of their shoes on the tiles and their breath going in and out together and the sound, very faint, of four people counting under their breath in three languages." },
    // CG: eqx-stage — four young women dancing in perfect unison on the empty polished floor of a shuttered shopping mall atrium at midnight, lit red from a glass roof, in mismatched clothes from different places, a still fountain behind them, three small figures watching from the doors.
    { n: "Their clothes didn't match. That was what Solar saw first. One in a tracksuit with a lanyard round her neck, one in a pleated school skirt and a blazer, one in practice clothes with her hair in a knot, one in a winter coat, in June, open over a dress. As if they'd been picked up from four different rooms in the middle of four different evenings and set down on the same floor." },
    { n: "They didn't miss a count. Not one. They moved like a single animal with sixteen limbs, every head turning at once, every arm, and Solar, standing in the doorway with the mud drying on her jeans, felt her own body want to move with them, the way your foot wants to tap, and didn't let it." },
    { n: "Yunjin had stopped beside her. She was white to the lips." },
    { s: 'yunjin', f: 'surprised', t: "...That's ours. That's the routine. From the studio. In Songdo. The one we did in February." },
    { s: 'yunjin', f: 'surprised', t: "That's *mine*. I made the bridge part up. On the floor of the studio. With a broken speaker." },
    { n: "The dance ended. All four of them, on the last count, at once, hit the same pose, chins up, one arm out, toward the doors. Toward the three of them. And held it, breathing hard. And then, slowly, one at a time, the way you wake from something, they let their arms down, and looked round them at the red, and the coffins, and the dead fountain, and each other." },
    { s: 'chaewon', f: 'neutral', t: "...Where's the music." },
    { s: 'eunchae', f: 'neutral', t: "There wasn't any. Was there? There was. I heard it. I heard it the whole time." },
    { s: 'kazuha', f: 'neutral', t: "I was at practice. I was on the barre. I was at the barre and then I was— this." },
    { s: 'sakura', f: 'neutral', t: "I was on a headset. I was casting a match. I was in the booth, there were eleven thousand people on the stream, I was in the middle of a sentence." },
    { n: "Then Sakura stopped. She put her hand flat on her own chest, the way you check for your phone, and her face changed." },
    { s: 'sakura', f: 'surprised', t: "...No. I was in Songdo. I was in the studio with Yunjin. I was— I was at Hanlim, in the music room, I had a— how am I in three—" },
    { n: "And the other three stopped too. All at once. The way they'd moved all night. Chaewon with her hand at her throat. Kazuha with both hands open in front of her, looking at them as if they belonged to someone else. Eunchae, the youngest, sitting down on the floor where she stood, in her winter coat, in the red." },
    { s: 'eunchae', f: 'sad', t: "I was on a campus tour. In the snow. I heard a girl singing in a hallway and I stopped. And I was at Hanlim, at school, in the hall, and I was in a dance studio in Songdo with the heat broken. I was all of those. I was all of those tonight." },
    { s: 'kazuha', f: 'neutral', t: "...So was I." },
    { s: 'chaewon', f: 'neutral', t: "So was I." },
    { n: "Solar went cold all the way down. Not the cold of the red. A different cold, the kind that starts inside and works out. She knew that sentence. She knew it from the inside. *I was all of those.* She'd woken at the bottom of the Well in April with exactly that in her chest, three lives at once, three bedrooms, three mothers, and she'd thought she was the only one who ever would." },
    { n: "These four hadn't crossed. Not in any year. Nobody had pulled them in by the hand. They'd never held on to anything. And they'd come through carrying everything, the way she had, three of each of them, braided." },
    { n: "Haechan had seen it too. He was looking at her, not at them, with his jaw set." },
    { n: "Then Yunjin walked out onto the floor." },
    { n: "Into the middle of the stage that wasn't there, in her mud and her cardigan, and the four of them turned and saw her, and every single one of their faces broke open at once." },
    { s: 'chaewon', f: 'happy', t: "...Yunjin-ah." },
    { s: 'kazuha', f: 'happy', t: "Yunjin." },
    { s: 'sakura', f: 'happy', t: "*Unnie*— no, you're younger than me in that one, wait—" },
    { n: "And then they had her. All four. Not a hug, exactly. A pile. Eunchae up off the floor and Kazuha's arms round her neck and Chaewon's hand on the back of her head and Sakura laughing and crying at the same time with her face in Yunjin's shoulder, and Yunjin in the middle of it with her eyes wide open, looking over the top of all of them at Solar." },
    { n: "She held out her hand. Over Chaewon's shoulder. Toward Solar, in the doorway." },
    { s: 'yunjin', f: 'neutral', t: "...You're on the wrong side." },
    { s: 'solar', f: 'neutral', t: "What?" },
    { s: 'yunjin', f: 'neutral', t: "You're supposed to be on my left. I don't— I don't know why I said that." },
    { n: "She didn't know. Solar could see that she didn't. And for one second, less, the red atrium went bright, white-bright, stage-bright, the flat hard glare of real lights, and there was a sound under everything like a crowd a long way off, and Solar was standing on Yunjin's left in matching clothes, and then she wasn't, and it was the red, and the dead fountain, and her own muddy shoes." },
    { n: "Nobody else saw it. Haechan had his hand on her back, very lightly, between her shoulder blades, as if he'd felt her sway." },
    { choose: [
      { t: "(Go to them.)", then: [
        { n: "She went out onto the floor. Chaewon reached out without letting go of Yunjin and pulled her in too, by the sleeve, as if she'd known her all her life, which in some way that none of them could explain, standing in a pile in the middle of a dead mall at a quarter past one in the red, she had." }
      ] },
      { t: "Welcome to Iwatodai.", then: [
        { s: 'eunchae', f: 'neutral', t: "...Is that where this is?" },
        { s: 'solar', f: 'neutral', t: "It's where it is tonight." },
        { n: "Eunchae laughed. It came out wet. Kazuha put her hand on the top of Eunchae's head, the way you would with a younger sister, and left it there." }
      ] }
    ] },
    { place: 'The Oka Boarding House · Gate', time: 'Early Morning', bg: 'eqx-oka-gate', music: 'eerie' },
    { n: "Mitsuru assigned them by five. The dorm had no beds. The guesthouse had none either, not anymore, not since May. The Group's building in Tatsumi had forty, aired and empty, and Mitsuru had looked at its address on the list for a long time, Solar saw, and then looked at another one, and then picked up the phone." },
    { n: "Mrs. Oka was at the gate when they came down the river street. At five in the morning. In her apron, with her gloves on, and a lamp lit behind her in the hall, and the gate standing open on the street side with the latch up, the way it always stood when she was expecting someone. Steam was coming from the kitchen window." },
    { s: 'mrsoka', f: 'neutral', t: "There you are. Oh, there you are. Four of you. Come in, come in, I've had the rice on since four." },
    { s: 'chaewon', f: 'neutral', t: "...Since four? How did you know we were—" },
    { s: 'mrsoka', f: 'neutral', t: "You always know when there'll be more for breakfast, child. You'll learn. Come in. Mind the step. You'll want to sleep for a week." },
    { n: "Four of the eight rooms upstairs had their doors open. Solar saw it from the hall. Four futons turned down. Four cups on four trays by four pillows, and on those four trays, the cups were the right way up." },
    { n: "On a hook in the hall by the door, where the coats went, there was a cap. A dark, old-fashioned cap with a short stiff brim, the kind a porter would wear on a platform, or a conductor, a long time ago. Nobody's. None of the girls had brought it. Mrs. Oka, when Solar looked at it, looked at it too, with mild surprise, as if she'd never seen it, and said, *well, isn't that funny*, and went back to the rice." },
    // CG: eqx-porter-cap — an old-fashioned dark porter's cap with a short stiff brim hanging alone on a wooden coat hook in the dim front hall of an old Japanese house at dawn, a sliver of light from a kitchen door.
    { n: "Solar stood in the hall and looked at the cap for a long time. Her throat had closed for some reason she couldn't name, a pull under her ribs like a kite string, like a voice calling her a long way off by a name nobody had used in a year." },
    { n: "That afternoon, when Yunjin went back with a bag of the girls' things, there was no cap on the hook. There was no mark where it had hung. Yunjin said there'd never been one; she'd have noticed. She'd been looking at that hall all her life, she said, and then stopped, and frowned, and said that was a strange thing to say about a hall she'd first stood in in April." },
    { flag: 'eqx-lsrfm-here' }
  ] },

  { id: 'eqx-piano', date: '6/30', slot: 'late', consumes: true, title: 'the fifth note', place: 'Iwatodai Dorm · Roof', time: 'Late Night',
    cast: { solar: 'Solar', hanni: 'Hanni', haechan: 'Haechan', mark: 'Mark', fuuka: 'Fuuka' },
    scene: [
    { bg: 'iwatodaidorm-roof-night', music: 'night' },
    { n: "Hanni's rota had been rewritten twice since the girls came. It ran down the whole of the corkboard by the dorm's front door now, a grid in four colors of marker, initials in every box, the boarding house added along the bottom with a new column of its own; and in every single night's box, at the top, small, in Hanni's handwriting, an *H*. In case." },
    { n: "Wednesday was Solar's. She'd taken it off Hanni in April and never given it back, and Hanni had let her, and then come up anyway, every Wednesday, with two cans of barley tea and a blanket, and sat on the roof beside her for the red without saying she was on duty, and Solar had let her too. That was the arrangement. Neither of them had ever said it out loud." },
    { s: 'hanni', f: 'neutral', t: "Sixty-two thirty-one last night. Akihiko put it on the fridge. On a post-it. He's started putting them on the fridge." },
    { s: 'solar', f: 'neutral', t: "It jumped. After Saturday." },
    { s: 'hanni', f: 'neutral', t: "Yeah. Like something got fed." },
    { n: "She said it lightly. She drank her tea. She'd said it on purpose, Solar thought, so it would be said, and then nobody else would have to." },
    { n: "At twelve the town went red." },
    { n: "And a minute into it, from somewhere across the water, very faint, carried on the dead still air the way sound carries over a lake at night, four notes." },
    { n: "Up, and up, and over, and down. And a chord under them, held. And then nothing." },
    { n: "And then again. The same four. The same chord. Stopping in the same place, every time, like a man getting all the way to his own front door and patting his pockets for keys he hasn't got." },
    { n: "Solar was on her feet before she knew she'd stood up." },
    { s: 'hanni', f: 'surprised', t: "...Solar. What. What is it?" },
    { s: 'fuuka', f: 'neutral', t: "*Solar? Hanni-chan? There's somebody at Port Island Station. One heartbeat. Standing up. In the concourse. He's— I think he's playing the piano.*" },
    { s: 'solar', f: 'neutral', t: "I know who it is." },
    { place: 'Port Island Station · Concourse', time: 'The Dark Hour', bg: 'portisland-station-night', music: 'darkhour' },
    { dark: true },
    { n: "Hanni came. Of course she came. And Haechan, who'd come up onto the roof at the first note, barefoot, with his face doing something Solar had never seen it do, and had gone back down the stairs for his shoes without a word, and was waiting at the dorm door with hers in his hand." },
    { n: "They didn't open any doors. They went out by the fire stairs, the way Akihiko had freed them in April, and across the bridge in the red, past the coffins in the stalled taxis, and into the concourse of Port Island Station, the big glass hall with its dead departure board and its ticket gates standing open and its coffins standing upright in the queue for the last train like people who'd fallen asleep waiting." },
    { n: "The piano was at the far end. The public one, upright, painted all over with fat grinning seagulls by some school art club years ago, and chipped. And at it, on the little bench, in a coat, there was a boy." },
    { n: "In a winter coat. In the last night of June. A dark wool coat buttoned up over a sweater, the coat he'd had on the last time she'd seen him, snow still in the creases of the shoulders, not melting." },
    { n: "Mark played the four notes. He stopped on the chord. He sat with his hands on the keys and his head down." },
    { n: "Then he played them again." },
    // CG: eqx-piano — a young man in a dark winter coat with snow on the shoulders sitting at a chipped upright public piano painted with cartoon seagulls in an empty glass station concourse lit red at midnight, his hands on the keys, head bowed.
    { n: "She'd known the fifth note since the first night she'd heard him, the year before last, in this exact station, at this exact piano, when he'd been a stranger and she'd been nobody. She'd known it in her body. She'd never once played it. She'd stood beside him a dozen times and let him stop, and stop, and stop, because it was his song, because it wasn't hers to finish." },
    { n: "She knew him now. That was what was different. She knew who he was and where he was from and what he was to the boy standing barefoot-in-shoes behind her, and what he'd done and hadn't done, and what was in his coat. She knew all of it, and he was sitting at a piano in the red in a winter coat in June, alone, playing four notes into a dead station, because that was what you did, she supposed, when you'd been reeled in by something you'd never held." },
    { choose: [
      { t: "(Sit down next to him. Play the fifth.)", flag: 'eqx-mark-fifth', then: [
        { n: "She sat down beside him on the little bench. He didn't look up. He played the four notes, and stopped on the chord, the way he always stopped, and she reached past his hand and played the fifth." },
        { n: "It was only one note. It sounded very loud in the red." },
        { n: "Mark's hands came off the keys. He sat with them in his lap, and turned his head, slowly, and looked at her, and his face did nothing at all for a long time, and then it did everything." },
        { s: 'mark', f: 'surprised', t: "...It's you. Oh my god. It's you." }
      ] },
      { t: "Mark.", then: [
        { n: "His hands stopped on the chord. He didn't turn round. He sat on the bench in his snowy coat with his back to her and his head down, the way you'd sit if you'd heard your name and weren't ready, and then he played the fifth note himself, very softly, wrong, one key too high, and laughed, a terrible small sound." },
        { s: 'mark', f: 'sad', t: "...Never could get it. You'd know. You always looked like you knew." },
        { n: "Then he turned round." },
        { s: 'mark', f: 'surprised', t: "...Solar." }
      ] }
    ] },
    { n: "He stood up. He didn't seem to know what to do with his hands; they went to her shoulders and stopped an inch off them, and went to his own coat instead, the front of it, the inside pocket on the left, and pressed there, flat, the way you press on a stitch in your side. Something in the pocket, square and stiff, under the wool. He didn't take it out. He didn't seem to know he'd touched it." },
    { s: 'mark', f: 'neutral', t: "I was— okay, I was on the street. It was snowing. I was outside your— I was outside, and then I heard it. This. The piano. These four. From nowhere. From under the snow. And I followed it, I don't know why, I just— and I was here. Where is here? Why is it red? Why is everyone in a—" },
    { s: 'hanni', f: 'neutral', t: "Long story. You're gonna hear it about nine times. Hi, Mark." },
    { n: "He looked at Hanni. He looked past Hanni. At Haechan, a little way back, by the dead departure board, with his hands in his pockets." },
    { n: "Nothing was said. Nothing at all. The two of them looked at each other across the red concourse for maybe three seconds, which was longer than either of them could possibly have wanted to, and Solar, standing between them, felt the whole of a year she hadn't been there for go past in it, and a whole year she had, and she didn't know which year either of them was in." },
    { s: 'mark', f: 'neutral', t: "...Hyuck." },
    { s: 'haechan', f: 'neutral', t: "Hey, man." },
    { n: "That was all. Haechan took one hand out of his pocket and held it out, and Mark looked at it for a second like it was a thing he'd dropped a long time ago and stopped looking for, and shook it, and Haechan pulled him in by it, one arm, one hard thump on the back, the way boys did, and let go fast, and stepped back, and put his hand back in his pocket." },
    { n: "Mark's shoulders were wet. The snow on them had finally started to melt." },
    { place: 'Iwatodai Dorm · Lounge', time: 'Late Night', bg: 'iwatodaidorm-livingroom-night-summer', music: 'night', soft: true },
    { n: "Jungwon walked him to the guesthouse at one, when the lights came back, with a spare key card and Hanni's rule written out on the back of it in Korean and English. He went in his coat. He wouldn't take it off. It was twenty-six degrees out and he walked up the hill in a wool coat with his hand flat on the left side of his chest, and nobody said anything about it, because everybody in that town had something they wouldn't take off." },
    { n: "Hanni wrote an *M* in the guesthouse column on the rota before she went to bed. Then she wrote an *H* above it, small. Then she stood looking at the board in the dark hall for a long time with the marker in her hand." },
    { s: 'hanni', f: 'sad', t: "...He didn't hold on. At the end. He wasn't one of the ones holding on." },
    { s: 'solar', f: 'neutral', t: "No." },
    { s: 'hanni', f: 'neutral', t: "So what pulled him?" },
    { n: "Solar didn't have an answer. Hanni hadn't expected one. She capped the marker and went up the stairs, and stopped on the landing, and came back down, and moved her futon back across Hyein's door, where it had been every night since April, and lay down on it with her eyes open." }
  ] },

  { id: 'eqx-tanabata', date: '7/7', slot: 'evening', consumes: true, title: 'wishes on paper', place: 'Naganaki Shrine', time: 'Evening',
    cast: { solar: 'Solar', danielle: 'Danielle', ken: 'Ken', hanni: 'Hanni', hyein: 'Hyein', minji: 'Minji', mitsuru: 'Mitsuru', yukari: 'Yukari', aigis: 'Aigis' },
    scene: [
    { bg: 'naganaki-shrine-summer', music: 'tender' },
    { n: "Danielle had been in Iwatodai nineteen hours, and she'd already posted." },
    { n: "She'd come through on Tuesday night in the red on the overpass above the station's ticket gates, sitting on the rail with her legs crossed and her phone in her hand, filming the coffins in the concourse below as if they were a crowd at a show, and Aigis had found her there at twelve-oh-four and said *good evening*, and Danielle had looked at Aigis for a long moment and said *okay, no*, and then *okay, yes*, and then *hi, I'm Danielle, is she here?*, and Aigis had known exactly who she meant." },
    { n: "By ten the next morning she knew everyone's name, which floor of the guesthouse had the best light, which konbini had the good onigiri, where the dorm's bathroom scale was and how much everyone in it weighed, and the password for the guesthouse wifi, which nobody had given her. By noon she'd taken two hundred photographs. By the evening of Tanabata she'd put one of them up." },
    { n: "Solar saw it on Danielle's own phone, at the shrine, under the bamboo, because Danielle held it out to her before she'd even said hello. The dorm's front steps at dusk the day before. Everyone on them at once, by accident: Junpei mid-sentence, Hanni with a dish towel, Koromaru, Ken, Hyein with her chin on her knees, Haechan on the rail, Solar on the bottom step with her head turned away, laughing at something out of frame. It was a good photo. It was a very good photo. It looked like a family." },
    { n: "*new friends, who dis.* Two thousand likes. Every comment from home said *AI*. One said *ok but why does it look so warm*. One, from an account with no picture and no name, at a time stamp that didn't exist, said *stay there, all of you*." },
    { s: 'danielle', f: 'happy', t: "They think I've lost it at home. They think I'm in rehab. Somebody started a rumor I joined a cult. I'm not even mad. It's a great rumor." },
    { s: 'solar', f: 'neutral', t: "Can you take it down?" },
    { s: 'danielle', f: 'neutral', t: "I could." },
    { n: "She didn't. She put the phone back in her pocket and looked at Solar with the look Solar had known for a long time, from across a lot of rooms: bright, pleasant, and fully loaded, the look of somebody who had a card in her hand and liked you very much and had no intention, today, of telling you which card it was." },
    { n: "She had something. Danielle always had something. She'd come through a hole in the world with her phone at forty percent and her lip gloss in her pocket and she still had it, whatever it was, folded small, and she didn't spend it. She just let you know it was there." },
    { s: 'danielle', f: 'neutral', t: "It's nice here. You know what's nice? Nobody here knows what anybody did. It's the most relaxing thing that's ever happened to me." },
    { n: "Rain was coming. The air had that metal taste. The bamboo at Naganaki was hung already with a hundred paper strips, pink and yellow and blue, everybody's wish for the year tied on with string, and they turned on their strings in the thick air without any wind, all of them at once, like fish in a tank." },
    { n: "The whole household had come. It was the kind of thing the whole household came to now, without anyone organizing it, a town festival with a sign-up sheet that Hanni hadn't made and somehow everyone was on. But Mark was, in his coat, by the offering box. And Mitsuru, with a paper strip in her hand that she'd been holding blank for twenty minutes." },
    { n: "Ken found Solar by the amulet stall with his strip already written and folded so nobody could read it, and Koromaru on a short lead, close at heel." },
    { s: 'ken', f: 'neutral', t: "Do you know about the violin lady?" },
    { n: "Solar's whole body went still." },
    { s: 'ken', f: 'neutral', t: "Everyone in sixth grade knows. Takeda's brother saw her. She's on the bridge at night and she plays and if you look at her face you have to go with her. That's what they say. I don't think that part's true. I think they added that part." },
    { s: 'solar', f: 'neutral', t: "What's the part you think is true?" },
    { n: "Ken thought about it seriously. Koromaru sat down on his foot." },
    { s: 'ken', f: 'neutral', t: "Hayashi-kun says she plays so the bridge gets longer. Every night it's a little bit longer, and nobody notices, because they only drive on it in the day, and in the day it's the right length." },
    { s: 'ken', f: 'neutral', t: "That's the creepiest one. Because it doesn't make any sense, so you can't stop thinking about it." },
    { flag: 'eqx-ghost-ken' },
    { n: "Solar didn't say anything. She didn't trust her voice. She thought of Akihiko's stopwatch on the island end of the bridge and seventeen seconds and a strip of tape stuck inside his jacket where nobody would see it." },
    { n: "Hyein had a pen. Hyein always had a pen. She held one out, and a blue strip, and Solar took both." },
    { choose: [
      { t: "(Write: *home*.)", flag: 'eqx-wish-home', then: [
        { n: "She wrote it small. She didn't say which one. The pen went through the paper on the *e*. She tied it on high, where nobody but Akihiko could have read it without a stepladder, and when she turned round Hyein was looking at her with an expression she couldn't read, and then Hyein reached up past her and tied her own strip on beside it, touching." }
      ] },
      { t: "(Write: *everyone here*.)", flag: 'eqx-wish-here', then: [
        { n: "She wrote it and looked at it and didn't know if it was a wish that everyone here would stay, or a wish that everyone here would get home, or a wish for the both of those at once, which wasn't how wishes worked, and tied it on anyway. Hanni, behind her, read it over her shoulder, and didn't say anything, and squeezed her arm." }
      ] },
      { t: "(Tie it on blank.)", flag: 'eqx-wish-blank', then: [
        { n: "She tied it on blank. Mitsuru, next to her, looked at it, and at her own blank strip, and something in her face went soft and wry at once, and she tied hers on next to it, and the two blank strips turned together on their strings in the dead air like two people not saying something." }
      ] }
    ] },
    { n: "Danielle took a photograph of the bamboo. Then she walked down the shrine steps to the river street and took one of the boarding house through its front window, where the lamp was lit over the long table and Mrs. Oka was moving about inside, laying bowls." },
    { n: "She looked at it on her screen, and frowned, and showed Solar." },
    { n: "The room was there. The table, the lamp, the bowls. And Mrs. Oka, at the end of the table, in her apron, cut into stripes. Thin dark bars across her, top to bottom, close together, as if she'd been photographed through blinds." },
    { s: 'danielle', f: 'neutral', t: "Blind slats. Weird angle. I'll take it again." },
    { n: "Solar looked at the window. It was a plain window. It was clean glass in an old wooden frame with the lamp light coming through it gold, and there were no blinds on it. There had never been blinds on it. Danielle took it again. Stripes. And again. Stripes. She deleted all three without saying anything, which was the first thing Solar had ever seen her delete." },
    // CG: eqx-striped-photo — a phone screen held up at night showing a photo of a warm lamplit room through an old window, a long table set with bowls, and the figure of a woman in an apron at the end of the table broken into thin dark vertical stripes as if seen through blinds that aren't there.
    { place: 'Naganaki Shrine', time: 'Early Morning', bg: 'naganaki-shrine-summer', music: 'eerie' },
    { n: "It rained in the night. In the morning, Mitsuru went back up to the shrine at six, alone, before her train to the university. She told Solar later she didn't know why. She just wanted to see them in the rain." },
    { n: "Every strip on the bamboo was wet through. Pink and yellow and blue, the ink run on all of them, everybody's wish gone soft and illegible, the way wishes are supposed to go, the shrine priest told her; the rain takes them up." },
    { n: "Mitsuru turned one over. Then another. Then she went down the whole length of the bamboo turning them over, one at a time, every single one, a hundred, more, the townspeople's and the household's and her own blank one and Solar's." },
    { n: "On the back of every one, in the same hand, heavy, pressed hard enough that the wet paper had torn along the strokes, one word." },
    { n: "*stay*" },
    // CG: eqx-tanabata-stay — wet paper wish strips in pink, yellow and blue hanging from shrine bamboo in grey morning rain, one strip turned over in a gloved hand to show a single word pressed so hard into the wet paper that it has torn along the strokes.
    { n: "The ink hadn't run on those. Not one. Mitsuru stood in the rain in her good coat and photographed every strip, front and back, with her phone, methodically, the way she did everything, and then she took her own down, and Solar's, and folded them both into her handkerchief, and put them in her bag, and caught her train." }
  ] },

  { id: 'eqx-snow-again', date: '7/10', slot: 'late', consumes: true, title: 'not one more person', place: 'The Well · The First Hill', time: 'The Dark Hour',
    cast: { solar: 'Solar', haechan: 'Haechan', akihiko: 'Akihiko', yukari: 'Yukari', fuuka: 'Fuuka' },
    scene: [
    { bg: 'eq-well-3', music: 'mystery' },
    { dark: true },
    { n: "Exams started Monday. Mitsuru said a Saturday in the Well the weekend before exams was a terrible idea, and then sent them anyway, because the hour was sixty-two fifty-eight and Fuuka had heard, all week, from the First Hill, something like a phone ringing in an empty house." },
    { n: "Akihiko and Haechan. Mitsuru had put them on the same night on purpose, Solar was almost sure; she'd done it with the expression she used for laboratory work. And Yukari, who'd volunteered to come, she said, *to referee*." },
    { n: "The snow was still falling on the First Hill. It always would be, Solar thought. Slow, from nowhere, onto black ice that held the whole dark campus again upside down. The stage-light windows were dark now, all of them, since May. The coffins in the quad stood in their rows with their lids shut. The ice was scratched in long pale lines where something had been dragged across it, toward the hall, and back, and toward the hall." },
    { n: "The two of them walked on either side of her. Not close. Not a hand's width. They'd worked it out somewhere in the month between full moons without ever saying it to each other, Solar was sure, because neither of them would have survived saying it. Haechan on her left. Akihiko on her right. Matching her stride. Not touching." },
    { s: 'yukari', f: 'neutral', t: "...You know you two look like bodyguards. Like, really bad bodyguards. In a movie." },
    { s: 'akihiko', f: 'neutral', t: "We're not guarding anything." },
    { s: 'haechan', f: 'neutral', t: "We're walking. It's a walk. He walks, I walk." },
    { s: 'yukari', f: 'neutral', t: "Uh huh." },
    { n: "Something in the hall was ringing. A phone. An old one, a landline, the bell kind, from somewhere inside the long stone building with its dark windows, ringing and ringing in an empty house the way a phone rings when everyone who'd answer it has gone out." },
    { n: "The Shadows came out of the windows. Six of them. Down the stone face of the hall, headfirst, like lizards, white masks, painted mothers' faces, hands out, *give me one, give me one*, and Akihiko and Haechan went in on either side of her without a word between them, at exactly the same moment, as if they'd drilled it, and Yukari said *oh my god* and nocked an arrow." },
    { n: "It wasn't a hard fight. It was a strange one. The two of them didn't get in each other's way once. Akihiko went high, Haechan went low. Haechan's Dalnim pulled the moonlight off the ice in a sheet and Akihiko's fist came through the sheet on the beat. When a Shadow got its long white fingers on Solar's sleeve, they both went for it, and both stopped, a foot apart, each of them leaving it for the other, and Yukari shot it in the mask between them while they stood there being polite." },
    { s: 'yukari', f: 'neutral', t: "*Seriously?*" },
    { n: "It was after, with the dust lying on the ice like flour, that the door came." },
    { n: "At the top of the path again, where the white door had stood in May. Not that door. A different one. A dorm room door, plain, with a whiteboard on it, and on the whiteboard in three colors of marker, in three handwritings Solar knew better than her own: *HANNI + HYEIN, KNOCK FIRST, THIS MEANS YOU*, and a cartoon of a cat, and under it, newer, smaller, in Hyein's round hand, *+ sol???*" },
    { n: "And from behind it, through the wood, music. And laughing. Hanni laughing, the real one, the one that went up at the end. Hyein saying something too fast to catch. The two of them. Right there. Behind a door at the top of a hill of snow at the bottom of a well, while both of them were asleep, Solar knew, in a dorm in Iwatodai, two hundred meters straight up, with a futon across a doorway." },
    // CG: eqx-door-r2 — a plain college dorm room door with a whiteboard covered in colorful marker doodles standing alone at the top of a snowy path at night, warm light and shadows moving in the gap under it, a dark stone university hall behind.
    { n: "Yukari had gone white. She'd heard it too." },
    { s: 'yukari', f: 'surprised', t: "...That's Hanni. That's— they're in bed. I saw them go up. That's not—" },
    { s: 'haechan', f: 'serious', t: "No. It's not." },
    { flag: 'eqx-door-R2' },
    { n: "Haechan put his hands in his pockets. Same as always. He looked away, out over the ice." },
    { n: "Akihiko didn't. Akihiko stood at her right shoulder with his eyes on the door and his jaw set, and Solar heard his breath change, and then she felt it. His right hand. Closing on her wrist. By itself. The way it closed every night on nothing, the way it had closed on the bridge, fast and hard and not his. His knuckles white on her arm, the tape on them coming loose." },
    { s: 'akihiko', f: 'serious', t: "...Don't. Don't, don't— that's not mine. That's not me. I'm not doing that." },
    { n: "He was looking at his own hand as if it belonged to somebody else. He put his left hand on it. And he took his own fingers off her wrist, one at a time, with the other hand, prying, the way you'd take a child's fingers off something it shouldn't have, and it hurt him, she could see it hurt him, every finger, and he kept going until the last one came away." },
    { s: 'akihiko', f: 'sad', t: "...Five tomorrow— no. No. I said I wasn't going to be one more person deciding where you're supposed to be. I said it. I'm not going to be one more hand." },
    { n: "He put the hand in his jacket pocket and held it there with the other one." },
    { n: "Haechan had turned round. He was looking at Akihiko. Not at the door, not at her. At Akihiko, holding his own hand shut in his own pocket on the ice, breathing like he'd gone ten rounds." },
    { s: 'haechan', f: 'neutral', t: "...Respect." },
    { s: 'akihiko', f: 'neutral', t: "Don't." },
    { s: 'haechan', f: 'neutral', t: "I mean it. I couldn't have done that. I just put mine away before they get any ideas." },
    { n: "Then both of them looked away. Both of them. The same way, out over the black ice, shoulder to shoulder, two boys standing in snow very carefully not watching a girl at a door, and Yukari, behind them, put her hand over her mouth and looked at the sky." },
    { choose: [
      { t: "(Go to the door. Knock first.)", tally: { 'doors.R': 1 }, flag: 'eqx-home-R2', then: [
        { n: "She went up the path. The laughing got louder. She put her knuckles up to the whiteboard, under *KNOCK FIRST*, and knocked, once, the way you'd knock on your sisters' door at two in the morning to be let in to sleep on their floor." },
        { n: "The laughing stopped." },
        { n: "Behind the door, a long silence. Then, in Hanni's voice, very close to the wood, very soft, so soft she could have been an inch away: *who is it?*" },
        { n: "Solar opened her mouth. And the door was gone, and the path ended in snow, and on the snow where the door had been there was a marker, a green one, with its cap off, drying out." },
        { n: "She picked it up. She put the cap on. She put it in her pocket. When she came back down to the two of them neither of them asked, and in the morning she put it on the corkboard by the rota, and Hanni looked at it for a long time and said it was her green one, she'd lost it in Syracuse in December." }
      ] },
      { t: "(Go and stand with them. Look where they're looking.)", flag: 'eqx-away-R2', then: [
        { n: "She went and stood between them, facing the ice, with the door at her back, and the laughing went on behind her, and she let it. Haechan's shoulder was against hers on one side. Akihiko's on the other. Neither of them moved away, and neither of them leaned in." },
        { n: "When the laughing stopped, they all three felt it stop." }
      ] },
      { t: "(Listen. Just listen.)", flag: 'eqx-watch-R2', then: [
        { n: "She stood where she was and listened. Hanni's real laugh. Hyein's voice too fast. A song she knew from the house speaker, the one everyone in the house hated and played anyway. She let it all go into her and sit there." },
        { n: "It got quieter, after a while, the way a room gets quieter when the people in it are falling asleep, until it was only the snow." },
        { s: 'yukari', f: 'sad', t: "...You can't tell them. About that. Hanni would— you can't tell them." },
        { s: 'solar', f: 'neutral', t: "I know." }
      ] }
    ] },
    { n: "On the climb up, Akihiko went first, then Yukari, then Solar, then Haechan. Halfway, in the dark of the shaft, Akihiko's voice came down the rope, low, not to her." },
    { s: 'akihiko', f: 'neutral', t: "...Lee." },
    { s: 'haechan', f: 'neutral', t: "Yeah." },
    { s: 'akihiko', f: 'neutral', t: "Next time. If it closes again. On her. You take it off. Don't wait for me." },
    { n: "A long silence on the rope. Solar, between them, didn't breathe." },
    { s: 'haechan', f: 'neutral', t: "...Okay. Same goes. If mine ever comes out of my pocket." },
    { s: 'akihiko', f: 'neutral', t: "Deal." },
    { n: "Yukari, above her, made a very small sound that might have been a laugh or might not, and climbed on." }
  ] },

  { id: 'eqx-thirteenth', date: '7/13', slot: 'late', consumes: true, title: 'the thirteenth call', place: 'Iwatodai Dorm · Solar’s Room', time: 'Late Night',
    cast: { solar: 'Solar', chenle: 'Chenle', jaemin: 'Jaemin', fuuka: 'Fuuka', junpei: 'Junpei', mitsuru: 'Mitsuru' },
    scene: [
    { bg: 'solar-dormroom-night', music: 'night' },
    { n: "Exams. The dorm on the second night of exams was the quietest it had been all year: every door shut on somebody with a textbook, Junpei's music turned down to a hum, Ken asleep at nine with his head on his kanji workbook, the red hour waiting at the end of the night like a test nobody had studied for." },
    { n: "Solar was on her bed with her history notes open on her knees and not reading them. Her phone was on the pillow beside her. Not the town phone Mitsuru had given her in April. Her own. The one from home. The one that had sat in her desk drawer showing no service, no service, since the night of the sixth of April, with its battery that never went down and its clock that never said the right time." },
    { n: "It said, tonight, 11:58. Which was right. Which it never was." },
    { n: "At twelve the room went red." },
    { n: "And the phone rang." },
    { n: "Not the town phone. Hers. On the pillow by her hand, the screen lighting up red-on-red, the old ringtone she'd forgotten she'd ever chosen going off in the dead silence of the red hour so loud that she flinched off the bed. The name on the screen. A name from a contact list she hadn't opened in a year." },
    { n: "*Chenle.*" },
    { n: "And under it, in small gray letters, the way the phone counted when somebody wouldn't stop: *(13)*." },
    { n: "Twelve missed calls. She knew that. She'd known it since Solstice. One every twelve minutes, the gaps even as stitches, on the night she went, and then nothing, because his phone had stopped at twelve, he'd told her once, on the pier in the cold, as if it were the only number in the world he was sure of." },
    { n: "This was the thirteenth." },
    { choose: [
      { t: "(Answer it.)", then: [
        { n: "She answered it. Her thumb was shaking." },
        { s: 'solar', f: 'neutral', t: "...Chenle?" }
      ] },
      { t: "(Let it ring once more. Then answer.)", then: [
        { n: "She let it ring once more, because she couldn't make her hand move, and in that ring she heard it, through the speaker, before anyone spoke: breathing. Two people breathing, fast, close to a phone, the way you breathe when you've been running. Then she picked it up." },
        { s: 'solar', f: 'neutral', t: "...Chenle?" }
      ] }
    ] },
    { s: 'chenle', f: 'surprised', t: "*...Oh. Oh, you picked up. You picked up. Jaemin. Jaemin, she picked up.*" },
    { s: 'jaemin', f: 'neutral', t: "*Put her on speaker. Put her on— hi. Hi! Solar! Hi. Okay. Where are we?*" },
    { s: 'chenle', f: 'neutral', t: "*It's red. Everything's red. There are coffins. Like, actual coffins. Standing up. In a— it's an arcade. I know this arcade. I know the back row. I've been in the back row of this arcade. This is Game Panic. Why do I know that? Solar, why do I know the name of this arcade?*" },
    { n: "His voice was the voice she remembered. Precise, a little high when he was rattled, every sentence going in a straight line toward the next fact. And under it, for the first time in all the time she'd known him, something else. Fright. Plain fright, the kind a child has in the dark." },
    { s: 'solar', f: 'neutral', t: "Because you've been there. You've been here before. Stay where you are. Don't open any doors. Don't answer if anyone knocks. Not even if it's someone you know. Especially not then." },
    { s: 'jaemin', f: 'neutral', t: "*Why would someone we know be—*" },
    { s: 'solar', f: 'serious', t: "Jaemin. Please." },
    { s: 'jaemin', f: 'neutral', t: "*...Okay. Okay. Nobody's knocking. Nobody's here but coffins and a claw machine.*" },
    { n: "She was already in the hall. Fuuka was coming out of her door at the same moment in her pajamas, with her headphones on and her hand up to the side of her head, and their eyes met, and Fuuka nodded once." },
    { place: 'Iwatodai Dorm · Command Room', time: 'The Dark Hour', bg: 'iwatodaidorm-commandroom', music: 'darkhour' },
    { dark: true },
    { s: 'fuuka', f: 'neutral', t: "Two. In the Strip. Back of Game Panic, by the machines. They're very close together. One of them is sitting on the floor." },
    { n: "Solar had the phone on speaker on the desk. Fuuka sat in front of it with her eyes shut and her hands flat on the desk on either side of it, the way she sat when she was listening to the whole town at once, and Mitsuru stood behind her in a dressing gown with her arms folded, and Junpei leaned in the doorway in a T-shirt that said EXAM SURVIVOR in letters he'd drawn himself." },
    { s: 'chenle', f: 'neutral', t: "*Who's that. Who just said 'back of Game Panic'. There's somebody else on the line.*" },
    { s: 'fuuka', f: 'surprised', t: "...You can hear me? I'm not on the phone. I'm not near the phone. I'm— I'm just listening." },
    { s: 'chenle', f: 'neutral', t: "*I can hear you. You're kind of in my head. Like a headset with the volume too low. Hi. Are you— did you used to call turns? In a lobby? With me? I feel like you used to call turns.*" },
    { n: "Fuuka opened her eyes. She looked at Solar. Her face had gone pink and then white." },
    { s: 'fuuka', f: 'neutral', t: "...Yes. I did. In the dorm lobby. You'd sit at the foot of the stairs and call the big ones." },
    { s: 'chenle', f: 'neutral', t: "*Okay. Okay. Then call this one. Tell me where to go.*" },
    { n: "And Fuuka did. She brought them home through the red with her eyes shut. Out of the arcade by the front, not the back, *the back door's been knocking*. Left on the Strip. Past the ramen shop, past the coffins at the counter, *don't look at the one with its lid open, just don't, Jaemin-kun, please*. Up the hill. And Chenle, on the phone, in a voice getting steadier with every turn, called back to her what he saw before she said it, three seconds early, then two, then one, then at the same time as her, both of them saying *left at the post office* in the same breath." },
    { n: "Mitsuru, behind her, unfolded her arms." },
    { place: 'Iwatodai Dorm · Front Steps', time: 'The Dark Hour', bg: 'iwatodaidorm-front-night', soft: true },
    { n: "They came up the hill in the red at twelve thirty-one. Jaemin first, in a Syracuse sweatshirt and socks and one shoe, holding Chenle's glasses. Chenle a step behind him, holding Jaemin's other shoe, and his own phone, out in front of him, still lit, still connected, with the call timer running." },
    { n: "Jaemin saw Solar on the steps and stopped, and his whole face went soft, and he said *oh, there you are*, as if she'd been gone ten minutes, and sat down on the bottom step and put his head between his knees." },
    { s: 'jaemin', f: 'neutral', t: "...I was at a party. I was at a party, I'd had one drink, Chenle came and found me on the couch and said he'd heard his phone. His phone. From his pocket. He said it was ringing. It wasn't ringing. I swear to god it wasn't ringing." },
    { s: 'chenle', f: 'neutral', t: "It was ringing. I'd been calling you. In December. Twelve times. It stopped at twelve. And then tonight it just went, by itself, the thirteenth one, and I thought, okay, she's finally going to pick up, and I held it to my ear and I walked into it." },
    { s: 'chenle', f: 'neutral', t: "...I walked into the phone. That's not a sentence. I hate that that's a sentence." },
    { n: "He looked at the screen in his hand. Twenty-nine minutes and something on the timer. He pushed his glasses up, which weren't on his face, because Jaemin had them, and noticed, and his hand stayed up there, by his eyes, for a moment, as if it didn't know what to do." },
    { s: 'chenle', f: 'neutral', t: "Can I hang up? Is it okay to hang up now?" },
    { choose: [
      { t: "You can hang up. I'm here.", then: [
        { n: "He hung up. The screen went dark. And Fuuka, up on the fourth floor, in the command room, said *oh* very softly over the radio, as if something had been pulled out of her ear, and then, after a second, *no, it's fine, he's still there, I can still hear him, it's fine*." }
      ] },
      { t: "(Take the phone out of his hand and end the call for him.)", then: [
        { n: "She took it. He let her. She pressed the red button and put the phone in his hoodie pocket and zipped it, and he looked down at the zipped pocket for a long time, and then up at her, and nodded, once, with his whole face held very still, which for Chenle was the same as crying." }
      ] }
    ] },
    { s: 'junpei', f: 'neutral', t: "...So, uh. Welcome to Iwatodai. We have exams. There's a test tomorrow. On the Meiji Restoration. Do you guys know anything about the Meiji Restoration?" },
    { s: 'jaemin', f: 'neutral', t: "I go to Syracuse." },
    { s: 'junpei', f: 'happy', t: "Great. Great. That's a no, then." },
    { n: "Mitsuru took them to the guesthouse herself, at one, in her dressing gown and a coat over it, one on each side of her like a teacher on a field trip. Akihiko wrote sixty-three fourteen on a post-it and put it on the fridge, and under it, smaller, *+2*." }
  ] },

  { id: 'eqx-two-lives', date: '7/18', slot: 'after', consumes: true, title: 'one boy', place: 'Kirijo Guesthouse · Kitchen', time: 'Daytime',
    cast: { solar: 'Solar', jungwon: 'Jungwon', jay: 'Jay', niki: 'Niki', sunghoon: 'Sunghoon', sunoo: 'Sunoo', jihoon: 'Jihoon', jaemin: 'Jaemin' },
    scene: [
    { bg: 'kirijo-guesthouse-day', music: 'joy' },
    { n: "Jungwon had found them at the guesthouse gate at twelve-oh-two on Saturday night, standing in the red in a row, the way they'd stood at the back of every class photo either of his lives had ever been in. Jay with his arms folded. Sunghoon with his hands in his pockets. Niki, taller than both, behind them, ducking a little, as if the sky were a low door. And Sunoo, a step to the side, in a cardigan, with his phone up, filming the coffins, saying *wow* very quietly, over and over." },
    { n: "He'd said he didn't remember what he'd said to them. Solar didn't believe him. Jaemin had seen it from the guesthouse window, and Jaemin said Jungwon had stood very still in the red for a long time, and then walked up to Jay and put his forehead on Jay's shoulder, and stayed like that, and none of them had said anything at all for most of a minute." },
    { n: "By Sunday afternoon the guesthouse kitchen was theirs. The trio had taken the table by the window, the one in the sun, and Sunoo had taken the counter, and was making something with eggs that he'd described in great detail and that didn't resemble the description at all, and Jaemin was helping him, which meant eating it." },
    { n: "Solar came at two because Jungwon had texted *come meet them properly*, and then, a minute later, *please*, which he never said in a text." },
    { s: 'jay', f: 'neutral', t: "So you're here too. Of course you're here too. Everywhere he goes, you're already there." },
    { s: 'jungwon', f: 'neutral', t: "Be nice." },
    { s: 'jay', f: 'happy', t: "I'm being nice. That was nice. That was me being nice. Ask him." },
    { s: 'niki', f: 'neutral', t: "That was him being nice." },
    { n: "They were looking at her the way the HOAX boys had always looked at her: a little wary, a lot amused, as if she were a weather system Jungwon had walked into on purpose. And then, underneath, the other way. The way people from a house on a hill looked at you when you'd sat at the same long table at four in the morning. She saw it in Sunghoon first. He'd looked at her, and then quickly at Jungwon, and then back at her, and his face had done a thing it would only do for someone who'd been in both." },
    { s: 'sunghoon', f: 'neutral', t: "...You were at the house. At the— the big house. In the winter. Weren't you." },
    { s: 'jungwon', f: 'neutral', t: "Sunghoon." },
    { s: 'sunghoon', f: 'neutral', t: "No, I know. I know. I'm just— she was. I remember her on the stairs." },
    { n: "Sunoo had turned round from the counter with the spatula in his hand, smiling, puzzled, waiting for the joke. He'd only been in one life. He didn't know there was a house. He looked from Sunghoon to Jungwon to Solar with his cheerful open face and saw something go between the other four of them that he wasn't in, and his smile stayed exactly where it was, and something behind it went quiet." },
    { s: 'sunoo', f: 'neutral', t: "...What house?" },
    { s: 'jay', f: 'neutral', t: "Jungwon's grandma's. You don't know it. It's boring. It's mostly stairs." },
    { n: "Jay said it without missing a beat. Smooth, bored, a lie told so well it was nearly a kindness. Sunoo looked at him for a second, and then laughed, and turned back to his eggs. Jaemin, beside him, took the spatula out of his hand gently and said *I'll do it, you sit*, and Sunoo sat." },
    { n: "Later, on the guesthouse step, in the shade, with the trio gone in for cold drinks and the cicadas starting up in the trees across the street, Jungwon sat next to her with his elbows on his knees and his watch in his hand, turning it over and over." },
    { s: 'jungwon', f: 'neutral', t: "...They both know. Jay and Niki and Sunghoon. Both. All of it. Like me. Like Haechan." },
    { s: 'jungwon', f: 'neutral', t: "At home, in either one, I'm careful. I've always been careful. I know which one I am in which room. Here I walked in the kitchen this morning and Niki said something about the harbor and Jay said something about the council in the same breath and I answered both of them and nobody looked at me." },
    { s: 'jungwon', f: 'neutral', t: "Nobody needed me to be one or the other. I was just. Me. Both. At breakfast." },
    { n: "He put the watch on. He did up the strap, slowly, carefully, the way he did everything." },
    { s: 'jungwon', f: 'neutral', t: "It's the best morning I've had in two years. I don't trust it." },
    { choose: [
      { t: "You don't have to trust it. You can just have it.", then: [
        { n: "He looked at her sideways. For a second she thought he was going to argue, the way he argued with motions in the council room, point by point. He didn't. He leaned, very slightly, until his shoulder was against hers, and left it there, in the heat, with the cicadas going." },
        { s: 'jungwon', f: 'neutral', t: "...You say that like it's simple." },
        { s: 'solar', f: 'neutral', t: "It's not. I just say it like it is." }
      ] },
      { t: "Me neither.", then: [
        { s: 'jungwon', f: 'neutral', t: "Good. Then there's two of us not trusting it. That's a quorum." },
        { n: "It was a joke. It was the first joke he'd made since April. She laughed, and he looked so pleased with himself, so briefly, that she had to look away." }
      ] },
      { t: "(Kiss him. On the step. In front of the window.)", then: [
        { n: "She kissed him. On the guesthouse step, in the middle of a Sunday, in full view of the kitchen window, where, she was absolutely certain without looking, four boys had all just stopped pouring drinks." },
        { n: "He made a sound against her mouth that was half a laugh. His hand came up to the side of her jaw, careful, and then less careful. Behind the glass somebody, Jay, said something loud in Korean, and somebody else, Niki, hit him." },
        { s: 'jungwon', f: 'neutral', t: "...That's going to be on the agenda." }
      ] }
    ] },
    { n: "Jihoon came down the street at four with his hood up and a bag from the konbini, and saw the two of them on the step, and didn't slow down, and didn't speed up. He walked past at exactly the same pace. He lifted two fingers off the bag at Jungwon, a salute, and Jungwon lifted two back. And as he passed Solar, without looking at her, his free hand went out sideways and touched the top of her head, once, light, the way you'd touch a doorframe on your way through a house you used to live in." },
    { n: "Then he went in. And Jungwon, beside her, looked at the door Jihoon had gone through for a long time, and said nothing, and didn't take his shoulder away." },
    { place: 'Iwatodai · River Street', time: 'Daytime', bg: 'eqx-oka-gate', music: 'eerie', soft: true },
    { n: "The trio walked her home the long way, because Niki wanted to see the river. They went down the river street at noon the next day, in the white flat heat of the first day of summer that felt like summer, the shadows short and black under everything, under the bikes, under the parked vans, under the four of them, round and small at their feet like puddles." },
    { n: "Mrs. Oka was in her garden. On the stone path between the gate and the well, in her apron and her cotton gloves, with a basket on her arm, bending over the vegetable bed. She straightened when she saw them and lifted one floured glove, and smiled, and called *hello, boys*, as if she'd known them for years." },
    { n: "Niki stopped walking." },
    { s: 'niki', f: 'neutral', t: "...Hyung. Look at the path." },
    { s: 'jay', f: 'neutral', t: "What about it." },
    { s: 'niki', f: 'neutral', t: "Where's her shadow." },
    { n: "They looked. The stone path lay white and empty in the noon glare, every pebble on it with its own tiny black dot of shade beside it, the basket on her arm with its own, the persimmon tree's shadow a dark round pool on the grass behind her. And at her feet, under the hem of her apron, nothing. Just stone. Just light on stone." },
    { s: 'sunghoon', f: 'neutral', t: "It's noon. The sun's straight up. She's standing right under it." },
    { s: 'jay', f: 'neutral', t: "It's July in Japan, nothing's straight up. We're like thirty-five degrees north." },
    { s: 'sunghoon', f: 'neutral', t: "Since when do you know degrees north?" },
    { s: 'jay', f: 'neutral', t: "Since always. Since physics. Since I paid attention, unlike you." },
    { n: "They argued about it all the way to the corner. Solar didn't. She'd looked back at the garden once, at the turn, and Mrs. Oka had still been standing on the path with her hand up, waving, smiling at her, only at her; and the persimmon tree had a shadow, and the basket had a shadow, and the well had a shadow, a round black one, very dark, darker than the others, and the landlady standing in the middle of all of them had none." }
  ] },

  { id: 'eqx-hate-club', date: '7/23', slot: 'evening', consumes: true, title: 'nobody who knows a guy', place: 'Iwatodai Strip · Game Panic', time: 'Evening',
    cast: { solar: 'Solar', jihoon: 'Jihoon', cherry: 'Cherry', junkyu: 'Junkyu', jaehyuk: 'Jaehyuk', asahi: 'Asahi', hyunsuk: 'Hyunsuk' },
    scene: [
    { bg: 'gamepanic-inside', music: 'city' },
    { n: "They'd come through on Thursday night in the back of a car." },
    { n: "That was the story, anyway, the way Junkyu told it, at volume, to everybody at the guesthouse breakfast on Friday, and then again to Mitsuru, and then again to the new night manager, who didn't speak Korean and listened to the whole thing with polite interest. The four of them had been in the back of Hyunsuk's cousin's car at a red light at two in the morning, arguing about something, and the light had gone red in a way lights don't, all over, everywhere, and when it went back to night they'd been sitting on the curb outside a shuttered ramen shop on the Iwatodai Strip with no car, in the clothes they'd been in, with Asahi still holding the bag of chips." },
    { n: "Jihoon had walked out of the guesthouse at twelve-oh-four into the red, in socks, because Fuuka had said four heartbeats on the Strip, all loud. He'd walked down the hill and round the corner and seen them on the curb, and stopped, and they'd looked up at him, and Junkyu had said, with his mouth full, *oh, there he is*, and Jihoon had sat down on the curb with them in the red and laughed until he couldn't breathe, and then stopped, and stayed there, with his hands over his face, for a long time." },
    { n: "That was Thursday. By Friday night they'd found the arcade." },
    { n: "Game Panic at eight on a summer Friday was loud and full of kids and smelled of hot plastic and fried things from the stand next door, and the four of them had taken the back half of it the way a weather front takes a coast. Jaehyuk and Junkyu on the dance machine, badly, competitively. Hyunsuk on the fighting cabinet, beating twelve-year-olds without mercy. Asahi standing very still in front of the crane machine with the white dog plush in it, watching the claw, not playing, the way you'd watch a fish." },
    { n: "Solar was there because Cherry had texted her at seven. *come. please. i'm fine. come.*" },
    { n: "Cherry was by the door. She was by the door the way she'd been by the door at every party Solar had ever seen her at, back to the wall, arms folded, eyes on the room, and it took Solar a second to see what was different. She wasn't watching the room. She was watching one corner of it." },
    { s: 'cherry', f: 'neutral', t: "...A hundred and eight days. He's at a hundred and eight. I count in the shower. I told you that." },
    { s: 'solar', f: 'neutral', t: "You told me." },
    { s: 'cherry', f: 'neutral', t: "And they're great. They're my— they're our idiots, I've known Junkyu since he had a bowl cut, I love them. I love them." },
    { s: 'cherry', f: 'serious', t: "And Hyunsuk's cousin knows a guy. At home. Hyunsuk's cousin always knows a guy. And last night on the guesthouse roof Jaehyuk said, as a joke, so funny, *wonder if there's a guy here*. As a joke. And everybody laughed. And Jihoon laughed." },
    { n: "She didn't say anything else. She didn't need to. Solar looked at the corner." },
    { n: "Jihoon was at the joystick of an old shooting game with Junkyu hanging off his shoulder shouting instructions, laughing, his hood down, his face lit blue and pink by the screen, looking more like himself than he had since April. Looking, Solar thought, like a boy at home." },
    { s: 'junkyu', f: 'happy', t: "Left. LEFT. Your other left. Oh my god, you're so bad at this, you've gotten so bad at this, what happened to you, what did Japan *do* to you—" },
    { s: 'jihoon', f: 'happy', t: "Japan made me a better person. Japan gave me clean living and a night manager who made me rice balls. Get off my arm." },
    { n: "Junkyu didn't know about the night manager. None of them did. He laughed, and Jihoon laughed, and didn't explain, and his hand went, for just a second, to the front pocket of his hoodie, and pressed there, flat, the way Mark pressed his coat; and Solar, who knew what was in that pocket, and had known since April, and knew it had gone hard and dry and gray a long time ago, looked away." },
    { s: 'hyunsuk', f: 'neutral', t: "Hey. Hey, Solar. Right? The girl. Jihoon's—" },
    { s: 'jaehyuk', f: 'neutral', t: "Don't." },
    { s: 'hyunsuk', f: 'neutral', t: "I was going to say *friend*." },
    { s: 'jaehyuk', f: 'neutral', t: "You were not going to say friend, I've known you eleven years." },
    { s: 'asahi', f: 'neutral', t: "...He's been talking about you since Thursday. Without saying your name. It's impressive. It's like a riddle." },
    { n: "Asahi said it to the crane machine. He hadn't turned round. The claw went down, by itself, in the glass, with nobody at the joystick, and came up empty, and he watched it, and nodded, as if it had confirmed something." },
    { choose: [
      { t: "(Go and stand behind Jihoon at the machine.)", then: [
        { n: "She went over. She stood behind him at the joystick, the way he'd stood behind her in April at the crane, close enough that she could feel the heat off his back, not touching. Junkyu looked at her, and at Jihoon, and slid off his shoulder very slowly, like a cat off a table, and went to the dance machine without a word." },
        { n: "Jihoon didn't turn round. His ship died on the screen. He let it." },
        { s: 'jihoon', f: 'neutral', t: "...Cherry texted you." },
        { s: 'solar', f: 'neutral', t: "Cherry texted me." },
        { s: 'jihoon', f: 'neutral', t: "Cherry worries." }
      ] },
      { t: "(Stay by the door with Cherry.)", then: [
        { n: "She stayed. She leaned on the wall beside Cherry with her arms folded the same way, and the two of them stood there and watched the corner, two bouncers at a party nobody was paying them for, and after a while Cherry's shoulder came over and rested against hers, heavy, and stayed." },
        { n: "When Jihoon looked up from the machine and saw the two of them there, watching him, he went still for a second. Then he left the game running and came over." }
      ] }
    ] },
    { place: 'Kirijo Guesthouse · Roof', time: 'Late Night', bg: 'kirijo-guesthouse-roof-night', music: 'romance' },
    { n: "Later. The guesthouse roof, eleven, the town spread out below them warm and humming with summer, the bay black, the bridge a long white line across it with all its lamps lit. The crew downstairs in the kitchen, loud. Cherry asleep on the lounge couch with her shoes on. The two of them on the roof's low wall, a hand's width apart, with their legs hanging over four floors of nothing." },
    { s: 'jihoon', f: 'neutral', t: "I'm not going to. I want to say that before you ask. You weren't going to ask. I'm saying it anyway." },
    { s: 'jihoon', f: 'neutral', t: "There's no guy here. I looked. Okay? I'm telling you I looked. In May. Before any of them came. I walked round Port Island at night for an hour looking at people's faces trying to see who'd know. Nobody knew. Nobody here knows anything. It's like being dead." },
    { s: 'jihoon', f: 'neutral', t: "And then they came. And Junkyu's laugh. And Hyunsuk's cousin. And it's like somebody opened a window in a room I'd got used to." },
    { n: "He was looking at the bridge. Solar looked at it too. The long white line of it over the water, every lamp lit, nobody on it." },
    { s: 'jihoon', f: 'sad', t: "...I could stay here. You know that? Here's the only place I've ever been where nobody's watching me fall. I could fall all I want here and nobody would put it on a forum. I keep thinking that. I keep thinking it like it's good news." },
    { choose: [
      { t: "That's yours to think. Whatever you do with it.", then: [
        { n: "He turned his head and looked at her for a long moment. He'd expected something else. A no. A please. He'd braced for it, she saw; she watched him unbrace, slowly, from the shoulders down." },
        { s: 'jihoon', f: 'neutral', t: "...You're supposed to tell me not to." },
        { s: 'solar', f: 'neutral', t: "Would it work?" },
        { s: 'jihoon', f: 'happy', t: "No. It'd make me want to. Okay. Okay. I hate that you know that." }
      ] },
      { t: "Don't. Not that. Not here either.", then: [
        { n: "He took it. He nodded. He didn't argue, which was how she knew he'd needed someone to say it out loud, and how she knew, too, that it wasn't going to be enough on its own; nothing ever was, with him." },
        { s: 'jihoon', f: 'neutral', t: "...Okay. Okay. A hundred and eight. A hundred and nine tomorrow." }
      ] },
      { t: "(Put your hand over his on the wall.)", then: [
        { n: "She put her hand over his on the warm concrete. He turned his under it, palm up, and held on, and didn't look at her, and they sat like that, over four floors of nothing, for a long time." }
      ] }
    ] },
    { n: "Then he leaned in. Slowly. Giving her the whole width of the roof to say no in. She didn't say anything. His mouth stopped an inch from hers, and stayed there, his breath warm, smelling of the cola from the arcade, his eyes open." },
    { s: 'jihoon', f: 'neutral', t: "...Better lighting. I said ask me again somewhere with better lighting." },
    { n: "Below them the whole town glowed. The bridge, every lamp lit. The bay. The moon three days off full, swelling, low and orange over the water." },
    { s: 'jihoon', f: 'neutral', t: "This is pretty good lighting." },
    { choose: [
      { t: "(Close the inch.)", flag: 'eqx-jihoon-roof', then: [
        { n: "She closed it. He made a sound like he'd been waiting since April, which he had, and his hand came up into her hair, and the town glowed below them, and somewhere downstairs Junkyu dropped something and everybody yelled, and neither of them heard it." },
        { n: "When it ended he put his forehead on hers and kept his eyes shut." },
        { s: 'jihoon', f: 'neutral', t: "...He's going to know. Jungwon. He always knows. He'll look at me at breakfast and he'll just know." },
        { s: 'solar', f: 'neutral', t: "He'll know." },
        { s: 'jihoon', f: 'sad', t: "And he won't say anything. That's the worst part. He'll pass me an egg sandwich." }
      ] },
      { t: "(Put two fingers on his mouth. Not tonight.)", then: [
        { n: "She put two fingers on his mouth. He kissed them, once, lightly, without opening his eyes, and sat back, and laughed under his breath at the bridge." },
        { s: 'jihoon', f: 'happy', t: "...Okay. Okay. I'll find better lighting. I'll find the best lighting in this town if it kills me." }
      ] }
    ] }
  ] },

  { id: 'eqx-third-hill', date: '7/26', slot: 'evening', consumes: true, title: 'the third hill', place: 'Iwatodai · River Street', time: 'Evening',
    cast: { solar: 'Solar', jungwon: 'Jungwon', jihoon: 'Jihoon', aigis: 'Aigis', fuuka: 'Fuuka', chenle: 'Chenle', mitsuru: 'Mitsuru', mrsoka: 'Mrs. Oka', sunoo: 'Sunoo', junkyu: 'Junkyu', jay: 'Jay' },
    scene: [
    { bg: 'eqx-oka-gate', music: 'badfeeling' },
    { n: "She walked past the boarding house at seven because it was on the way back from the station, and because it was always on the way back from everywhere now; that was the kind of street it had become. The lamp was lit over the long table. The window was open for the heat. The smell of rice came out of it into the evening and lay across the street like a hand on your arm." },
    { n: "Mrs. Oka was at the gate. Of course she was." },
    { s: 'mrsoka', f: 'neutral', t: "Solar-chan. Oh, look at you, you're white as rice. You've not eaten. It's a big moon tonight; you shouldn't be out on a big moon with nothing in you. Come in. Stay for supper. Just the one bowl." },
    { s: 'solar', f: 'neutral', t: "I can't tonight." },
    { s: 'mrsoka', f: 'neutral', t: "Another night, then. There's always another night." },
    { n: "Through the window, at the end of the long table nearest the kitchen, Nozomi Suemitsu lifted his chopsticks at her in a salute, his cheeks full, his shirt untucked, a bowl in front of him and two empty ones beside it. He'd been there every night since April. Every single night. He'd told Junpei at the shoe lockers on Friday that he'd put on four kilos since the spring, proudly, slapping his stomach like a drum, and that he'd never in his life been so happy, and Junpei had told it at dinner as a funny story." },
    { n: "Mrs. Oka followed her look, and smiled, fond, the way you'd smile at a good dog." },
    { s: 'mrsoka', f: 'neutral', t: "That one never says no. Bless him. He'll be here till the last grain." },
    { place: 'Gekkoukan High · Courtyard', time: 'The Dark Hour', bg: 'eqx-courtyard-well-night', music: 'fullmoon' },
    { dark: true },
    { n: "At twelve the moon was full and swollen and red and the courtyard was crowded." },
    { n: "Not the party. The party was four: Solar, Jungwon, Jihoon, Aigis, standing at the lip of the well with the rope coiled at their feet. The crowd was everybody else who'd come through from Hanlim, standing round the well in the red in a loose ring because none of them would stay in the guesthouse: the trio, arms folded; Sunoo in his cardigan; the Hate Club in a tight knot by the vending machine, unusually quiet. They hadn't been asked to come. Mitsuru had looked at them all on the guesthouse steps at eleven thirty and not told them to go back in." },
    { s: 'mitsuru', f: 'neutral', t: "Fuuka says the well smells of floor polish and toner. Since Thursday. She says it sounds like a school with nobody in it." },
    { s: 'jay', f: 'neutral', t: "...That's our school. That's Hanlim. It smells like that in the morning before anyone's in." },
    { s: 'junkyu', f: 'neutral', t: "It smells like that at night too. When you're breaking in to get your phone back." },
    { n: "Nobody laughed. Junkyu hadn't meant them to." },
    { n: "Chenle was at the command room desk tonight, beside Fuuka. That was new. Two headsets, two chairs pulled close. He'd sat in the second chair on Friday as if he'd been sitting in it all his life and Fuuka hadn't said anything, only moved her tea." },
    { s: 'fuuka', f: 'neutral', t: "*I can hear the rope. I can't hear the bottom. It's too far. It's like— there's too much noise down there, I can't find the shape of it.*" },
    { s: 'chenle', f: 'neutral', t: "*It's lag. It's just lag. It's a server a long way away. You're trying to hear it in real time, you can't, you hear it late. I'll call it early. I'll call the shape. You call what's in it.*" },
    { s: 'fuuka', f: 'surprised', t: "*...Okay. Okay. We'll do that.*" },
    { n: "Sunoo stepped forward as they went down. Just one step. He held something out to Jihoon: a stick of gum, the kind they'd sold at the store by the school gate at home." },
    { s: 'sunoo', f: 'neutral', t: "For the climb. You always used to chew one before exams. You said it stopped your teeth." },
    { n: "Jihoon took it. He looked at it in his palm for a moment, the green wrapper in the red light, and something went over his face and was gone." },
    { s: 'jihoon', f: 'neutral', t: "...Thanks, Sunoo-yah." },
    { place: 'The Well · The Doorstep', time: 'The Dark Hour', bg: 'eq-well-1', soft: true },
    { n: "Down through the shaft. Down through the Doorstep, the doors in the ceiling, the trapdoors in the black water, all of them open tonight, every one, standing open on little rooms where somebody sat at a table with their back to the door. Nobody looked in. Down past the black ice of the First Hill. Down past the mud of the Second, where the walls of the sea stood again, re-made, as tall as before, and the pale things in them turned in their sleep as the four of them went by on the rope." },
    { s: 'chenle', f: 'neutral', t: "*Floor coming up. It's flat. Long. Long and narrow. It's a corridor. It's a really long corridor with things on both sides at regular intervals. Rooms? No. Smaller. Boxes.*" },
    { s: 'fuuka', f: 'neutral', t: "*Lockers. They're lockers. And... there's something dripping in them.*" },
    { place: 'The Well · The Third Hill', time: 'The Dark Hour', bg: 'eq-well-5', music: 'mystery' },
    { n: "The hall at Hanlim. Solar would have known it with her eyes shut. She knew it with her eyes open, which was worse." },
    { n: "The long corridor, the second floor, the one past the council room, going on and on into red dark far past where it should have ended. Lockers down both sides, gray steel, dented, scratched with names. Desks pushed out into the hall at intervals as if a classroom had been emptied in a hurry, and on every desk, a ballot box. Clear plastic, a slot in the lid. Empty. And the windows. All down the left side, where the windows should have looked out on the yard and the gate and the cherry tree, there was static. White static, hissing, crawling, filling every frame, the way a television screen fills when the channel's gone." },
    { n: "And all over the floor, face up, lit, phones." },
    // CG: eqx-third-hill — a long red-lit high school corridor stretching into darkness, gray lockers on one side and windows full of white television static on the other, clear ballot boxes on desks pushed into the hall, and dozens of lit phones lying face up on the polished floor.
    { n: "Dozens of them. Hundreds. Lying on the polished floor in the red, screens up, every one of them glowing, and on every screen the same thing: a message notification, and the message was one word, and the word was *stay*." },
    { n: "Jihoon bent and picked one up. The lock screen. A photo of a dog. Somebody's dog, somebody's phone, somebody at Hanlim who'd never been here. *stay*. *stay*. *stay*. The notifications stacked down the screen, three, four, ten, and as he held it another came in, and buzzed against his palm." },
    { n: "He put it back down very carefully, face up, exactly where it had been, as if it might go off." },
    { n: "Then the lockers started to drip." },
    { n: "From the vents. The little slatted vents at the top of every door, all down the hall, at once. Something pale. Fine. Pouring, slowly, the way sand pours out of a split bag, in thin white streams, onto the floor, onto the phones, piling soft and pale in little drifts at the foot of every locker. Flour. It smelled sweet. It smelled of the boarding house kitchen. It was coming out of every locker in the hall, as if every locker were full to the top with it, as if every locker had been packed with it by somebody who'd been very patient for a very long time." },
    { n: "Aigis took one step toward the nearest locker. Then she stopped." },
    { s: 'aigis', f: 'neutral', t: "...Please do not open any of them." },
    { s: 'jungwon', f: 'neutral', t: "Why." },
    { s: 'aigis', f: 'neutral', t: "Because I have just taken a reading of the contents, and I would like to be wrong, and I would like nobody to check." },
    { n: "Nobody opened any of them." },
    { n: "The static in the windows began to scroll." },
    { n: "Text. White on gray, crawling up the frames, the way a forum thread scrolls when someone's refreshing it too fast. A username Solar knew, an anonymous one, the one from the winter, the one that had known where she was every night. Posts. Replies. Replies to replies. And her name. Her name all down the windows, the whole length of the corridor, both her names, *Kim Solar* and *VP* and *her*, and the posts saying what posts like that always said, and then, as she watched, every single reply in the thread changing, all at once, the words sliding into the same word, until the whole window was one post repeated down the glass a thousand times." },
    { n: "*stay where you're not the vice president.*" },
    { s: 'jihoon', f: 'neutral', t: "...Oh, that's cute. That's real cute. Who taught it to talk." },
    { n: "Jungwon didn't say anything. Jungwon had his council face on, the nothing face, and he'd stepped half a step in front of her, and Jihoon had stepped half a step behind, and she was between them, where she always was, in a hallway at Hanlim, and for one dizzy second she couldn't remember which hallway this was or which year." },
    { n: "At the end of the corridor, where it should have opened onto the stairwell, there was a hall. A gym, the big one, with the lights on. Every light. And the floor of it full of desks, in rows, hundreds, and at every desk a figure in a school uniform with no face, a white mask with a painted mother's face on it where the face should be, and every one of them with its hand up. Voting. All of them. The same way." },
    { n: "And on the stage at the front of the gym, in front of the drawn curtain, the ballot box." },
    { n: "It had grown up. She'd seen it a year and a half ago at the top of a tower, the size of a car, swallowing every memory anyone had of her. It was bigger now. It filled the stage. It was clear plastic all the way through, and you could see inside it, and inside it, piled to the lid, there were ballots, folded, thousands of them, and every one of them had her handwriting on it." },
    { n: "Its slot opened. Slowly. Like a mouth." },
    { n: "And a single slip of paper came out of it, and floated down off the stage, through the red air, over the hands of the faceless voters, and landed on the floor in front of her, face up." },
    { n: "It was a resignation. Two lines, printed, the council's own form; she'd seen it in a drawer in the council room a hundred times and never once taken one out. *I, the undersigned, withdraw from the office of vice president and from the student body of Hanlim High School, effective immediately.* And under it a line for a signature, and a pen lying across it, uncapped." },
    { n: "And under the line, in pencil, very small, in a hand she'd seen on a Tanabata strip and the back of a lease and a form at the Gekkoukan front office, a note. *you don't have to go back to any of it. sign and stay. it's only a name.*" },
    { n: "The voice came from all the masks at once, all down the rows, soft. Hundreds of mothers saying the same thing in the same kind way. *Sign. Sign it, sweetheart. Nobody's watching here. Nobody's counting. Stay where you're not anybody's anything. Just sign.*" },
    { n: "She wanted to. That was the horrible part. She looked at the line and the pen and thought of the hearing and the forum and her mother's face at the kitchen table, and the hands going up in the gym, and the armband, and how heavy it had been on her arm, every day, a whole year, and she thought how light she'd be. How light. A girl with no office, in a town with no forum, at a table with the lamp lit." },
    { choose: [
      { t: "(Pick up the pen. Sign it.)", tally: { cakes: 1, 'asks.solar.vp': 'yes' }, flag: 'eqx-hill3-signed', then: [
        { n: "She picked it up. She signed. Her own name, the one on the council minutes, in her own hand. It was so easy. It was the easiest thing she'd ever written." },
        { n: "Every hand in the gym went down at once, with a sound like a flock of birds landing. And in her chest, something small went out of her and into the paper, and stayed there, and the slip folded itself, neatly, into four, and went back up into the slot of the box, and the box swallowed it, and shivered all the way through with something like pleasure." },
        { n: "Jungwon had seen. He didn't say anything. Jihoon had seen, and Jihoon said, very quietly, *Sol*, the way you'd say it to someone who'd stepped out into a road." }
      ] },
      { t: "(Tear it in half.)", tally: { 'asks.solar.vp': 'no' }, then: [
        { n: "She tore it in half. It made a very small sound in the enormous gym. She tore the halves in half, and dropped them, and they fell on the phones on the floor and lay there in the flour." },
        { n: "Every masked head in the gym turned toward her at once. Hundreds. And the voice, all of them, smaller now, hurt, the way a room sounds when you've said the wrong thing at a dinner: *...Sign.*" }
      ] },
      { t: "It's mine to sign or not. Not yours.", tally: { choose: 1, 'asks.solar.vp': 'choose' }, flag: 'eqx-hill3-mine', then: [
        { n: "She said it to the box. To the masks. Not angry. Tired, mostly, and certain, the way she'd said it to a lot of people across a lot of tables who'd wanted her to be something for them." },
        { n: "It's my name. I'll decide what to do with it. Maybe I'll resign. Maybe I'll run again. Maybe I'll do something none of you have thought of. But it's mine to sign or not sign. It isn't yours. It was never yours." },
        { n: "Every hand in the gym stayed up. Every one, trembling. And then, one by one, down the rows, from the back to the front, slowly, uncertainly, they came down, the way hands come down when the person at the front of the room has just said *it's not a vote*." },
        { n: "The pen rolled off the slip. The slip lay there blank." }
      ] }
    ] },
    { n: "The ballot box opened its slot all the way, wider than a slot could open, and ballots poured out of it, thousands, a white flood of folded paper with her handwriting on every one, and the faceless voters stood up from their desks all at once and turned, and came." },
    { s: 'jungwon', f: 'serious', t: "...Hyeonmu." },
    { s: 'jihoon', f: 'serious', t: "Okay. Okay. Somebody's getting impeached tonight and it isn't her. *Dokkaebi.*" },
    { s: 'aigis', f: 'neutral', t: "I would like to note for the record that I have been wanting to do this since the lockers." },
    { s: 'chenle', f: 'neutral', t: "*Big one on the stage, small ones in the rows, the small ones go down in two hits, don't waste anything on them, go for the box. Go for the box. It's slow on the turn after it eats.*" },
    { s: 'fuuka', f: 'surprised', t: "*He's right. He's right, it's right there in the—how did you—*" },
    { summon: 'haenim', name: 'Haenim', sub: 'The Third Hill.' },
    { battle: { id: 'eqx-third-hill', op: 'eqx-third-hill', kind: 'operation', title: 'Full Moon · The Third Hill', desc: 'A school corridor that never ends, lockers full of something pale, a thread that writes itself, and a ballot box grown huge that only wants one signature.', forced: true } },
    { music: 'night' },
    { n: "It came apart into paper." },
    { n: "Every ballot, all at once, unfolding in the air over the gym like a flock of white birds and then falling, slowly, thousands of them, onto the empty desks and the stage and the four of them, and when they landed they were blank. All of them. Every last one. As if nobody had ever written anything on any of them." },
    { n: "The masks lay on the gym floor in rows where the voters had stood, face up, painted, smiling, empty. The lights went out, one bank at a time, from the back of the gym to the front." },
    { n: "The phones on the corridor floor went dark. Every one. All at once, the way a town goes out at midnight." },
    { n: "In the dark at the end of the hall, by the stairwell, there was one light left. A door with a narrow window in it, wired glass, and a plaque beside it. STUDENT COUNCIL. The light was on behind the glass. On the handle, looped over it, the way she used to loop it every evening when she went home so she'd remember it in the morning, there was an armband." },
    // CG: eqx-door-h2 — a school student council room door at the dark end of a long empty corridor, light shining through its narrow wired-glass window, a red armband looped over the door handle, blank paper ballots scattered across the floor.
    { flag: 'eqx-door-H2' },
    { n: "Jungwon looked at it. He'd looped his own over that handle a hundred times, beside hers. Jihoon looked at it. He'd sat on the floor outside that door at seven in the morning with two cans of coffee more times than she'd ever let him know she'd noticed." },
    { n: "Jungwon took his watch off. Jihoon took the gum Sunoo had given him out of his pocket and turned it over and over in his fingers. Aigis stepped back, two paces, and turned her head away, politely, the way she'd seen people do." },
    { s: 'jihoon', f: 'neutral', t: "...Go on. I won't look." },
    { s: 'jungwon', f: 'neutral', t: "I'll look. I'll look, and I won't stop you. Whichever way." },
    { choose: [
      { t: "(Take the armband off the handle.)", tally: { 'doors.H': 1 }, flag: 'eqx-home-H2', then: [
        { n: "She went down the corridor through the blank ballots and reached for it. The cloth was warm. Warm the way a sleeve is warm when somebody's only just taken it off." },
        { n: "The light behind the glass went out. The door was a wall. The armband was in her hand anyway. It was real. It was red cotton with the safety pin bent where she'd always bent it, and it smelled faintly of the council room, of toner and the heater and the coffee." },
        { n: "She put it in her pocket. She didn't look back at either of them. She could feel both of them looking anyway." }
      ] },
      { t: "(Leave it on the handle.)", flag: 'eqx-away-H2', then: [
        { n: "She left it. She stood in the dark hall a long moment looking at the armband looped on the handle in the light from the glass, and then she turned round and walked back to them through the paper." },
        { n: "When the light went out behind her, Jungwon put his watch back on. Jihoon put the gum in his mouth. Neither of them said anything, and both of them fell in, one at her side and one at her back, without deciding to." }
      ] },
      { t: "(Look through the glass. Just look.)", flag: 'eqx-watch-H2', then: [
        { n: "She went close enough to look through the narrow window. The council room. The long table. Four chairs, her chair. The whiteboard with half a motion on it in Jungwon's handwriting. The heater ticking. Nobody in it. Everything waiting, the way a room waits on a Sunday." },
        { n: "She looked until the light dimmed and went, like someone in the room had reached over and switched it off on their way out." }
      ] }
    ] },
    { place: 'Gekkoukan High · Courtyard', time: 'The Dark Hour', bg: 'eqx-courtyard-well-night', soft: true },
    { n: "They came up into the red one after another, white with flour to the knees, and the HOAX boys round the well came forward all at once, and then stopped, all at once, not sure what they were allowed to do." },
    { n: "Sunoo was first. He looked at Jihoon, chewing, and laughed, wet and relieved, and Jihoon put an arm round his neck and hauled him in and held on a second too long. Jay took Jungwon's face in both hands, briefly, and looked at it, and let go, and slapped his cheek, lightly, twice. Junkyu stood in front of Solar with his mouth open and then shut it and handed her his water bottle, and she drank it all." },
    { n: "Akihiko's stopwatch, when the lights came on, said seventy-three minutes and ten seconds." },
    { n: "Nine over. On a full moon. Up on the fourth floor, Fuuka took her headset off and put her face in her hands, and Chenle, beside her, without looking at her, pushed her tea back across the desk to her." }
  ] },

  { id: 'eqx-last-grain', date: '7/27', slot: 'early', consumes: true, title: 'till the last grain', place: 'Iwatodai · River Street', time: 'Early Morning',
    cast: { solar: 'Solar', ken: 'Ken', akihiko: 'Akihiko', mitsuru: 'Mitsuru', aigis: 'Aigis', mrsoka: 'Mrs. Oka', junpei: 'Junpei' },
    scene: [
    { bg: 'eqx-oka-gate', music: 'eerie' },
    { away: true },
    { n: "Ken took Koromaru out at five-thirty every morning of the summer holidays, because somebody had to and because he liked the town at that hour, when it was his, gray and cool and empty, the shutters down on the Strip and the crows on the wires and nobody awake but the two of them and the man who delivered the newspapers on a scooter." },
    { n: "They always went the same way. Up the hill, round the shrine, down past the post office, and at the post office, left, never right, because right was the river street, and Koromaru had refused the river street since the first Saturday in April. Every single time. Legs set, low growl, once a bite on Ken's sleeve. Ken had stopped trying in May." },
    { n: "That morning, at the post office, Koromaru turned right." },
    { n: "He didn't ask. He didn't look back. He put his head down and pulled, hard, harder than Ken had ever felt him pull, so hard the lead burned Ken's palm again where it had burned it in April, and Ken ran to keep up, down the river street in the gray, past the closed houses with their closed doors, saying *Koro-chan, Koro-chan, wait, wait*, and the dog didn't wait." },
    { n: "He stopped at the boarding house gate. The latch was up. The gate stood open on the street, the way it stood when she was expecting someone." },
    { n: "The front door was open too. A hand's width. The lamp in the front room was still on, yellow, in the gray morning, which was the first wrong thing Ken saw, because Mrs. Oka never left a lamp on, Mrs. Oka said lamps left on in daylight were sad." },
    { n: "Koromaru stood on the step and didn't go in. He stood with his front feet on the step and his back feet on the path and every hair on his back up in a ridge and his lips off his teeth, and he made a sound Ken had never heard him make, not a growl, lower than a growl, a sound that seemed to come up through the dog from the stone." },
    { n: "Ken looked in through the gap in the door." },
    { place: 'The Oka Boarding House · Front Room', time: 'Early Morning', bg: 'eqx-oka-kitchen', music: 'tension' },
    // BG: oka-dining-room-dawn — the same long low dining table in the old Japanese house in gray dawn light, the lamp still lit and yellow over it, screens half open onto a dewy garden, one place set at the far end.
    { n: "The long table was clear. All the way down. Every bowl gone, every cushion straight, the wood wiped and gleaming, the way Mrs. Oka left it every night before bed. Except for one place. The end nearest the kitchen. Where Nozomi always sat." },
    { n: "He was sitting there." },
    { n: "Upright, on his cushion, with his back to the door. Ken knew the back of his head. Everybody did. The untucked shirt. The broad shoulders. His hands on his knees. He was sitting the way you'd sit at a table waiting for someone to bring the next thing out of the kitchen, very straight, very patient, with his head a little bowed, as if saying grace." },
    { n: "Ken said his name. Ken said *Suemitsu-senpai?* the way you'd say it to wake someone who'd fallen asleep at a table, and went in, round the end of the table, because he was twelve, and because there was a lamp on, and because nobody had told him not to." },
    { n: "His mouth was open. As wide as a mouth goes, and wider, the hinge of the jaw gone somewhere it shouldn't, the corners split. And it was full. Packed. White, smooth, soft, glistening a little in the lamp light, the way rice-cake dough glistens on a board before it's shaped: packed into his mouth to the lips and past the lips, bulging his cheeks, filling the throat, so that the throat stood out under the jaw round and tight and pale as a pillow." },
    { n: "And lower. Down the front of him. The shirt, untucked as it always was, had ridden up, and his stomach under it was swollen, hugely, hard and round and tight as a drum, and the skin over it had split. Down the middle, from the bottom of the ribs, in a long ragged line, the way bread splits in an oven when it rises too far; and out of the split, where there should have been the inside of a person, there was dough. White. Soft. Pressing out of him in a slow pale bulge, the way dough presses out of a bowl left too long under a cloth." },
    // CG: eqx-last-grain — gray dawn light through paper screens onto a long low wooden table, a lamp still lit; seen from behind, a heavy-set boy in an untucked school shirt sitting upright alone at the far end with his head bowed, a clean empty plate and a neatly folded napkin in front of him, a small boy frozen in the doorway with a dog's lead in his hand.
    { n: "There was no blood. Not a drop. Not on the shirt, not on the cushion, not on the table." },
    { n: "In front of him on the table there was a plate. White, clean, empty, wiped. The chopsticks laid across it, together, neat. And beside the plate his napkin, folded in four, a perfect square, and on the top fold, faint, a thumbprint in flour." },
    { n: "His eyes were open. They were looking at the plate. He looked, Ken said afterward, to the police, to Mitsuru, to nobody, for a month, over and over, like he was still hungry." },
    { n: "Ken didn't scream. He told Solar that later, as if it mattered, as if it were something he'd done wrong. He backed out of the room without turning round, the way you're supposed to with a bear, and out of the door, and sat down on the step next to Koromaru, and got his phone out of his shorts, and his hands were steady, and he called the dorm, and when Akihiko answered on the second ring he said, in a perfectly clear voice, *Akihiko-senpai, I need you to come to the boarding house, please. Nozomi-senpai's dead. Please bring Solar-senpai. Please don't bring Junpei-senpai. Please hurry.*" },
    { n: "Then he put his arms round the dog's neck and put his face in his fur, and Koromaru, who had not taken his eyes off the gap in the door, let him." },
    { away: false },
    { place: 'The Oka Boarding House · Gate', time: 'Early Morning', bg: 'eqx-oka-gate', music: 'eerie' },
    { n: "Solar ran it in socks. She'd find out later she'd run it in socks; she never remembered putting anything on her feet. Akihiko beside her, then ahead of her, then beside her again because he'd looked back and seen her face. Down the hill, past the post office, right, the river street, the gray light, the gate standing open." },
    { n: "Ken on the step. Koromaru. The door a hand's width open and the lamp on inside." },
    { s: 'ken', f: 'neutral', t: "...I didn't touch anything. I didn't touch him. I just looked. I'm sorry. I'm sorry, I just looked." },
    { n: "Akihiko went in. Solar went in after him, because she couldn't not, because she'd been the one who'd walked past the window last night and seen him lift his chopsticks at her, and she stood in the doorway of the front room with her hand on the frame and saw it." },
    { n: "She didn't remember the next minute. She remembered the smell, which was rice, and sugar, and steam, the whole room still smelling warm and kind like supper, and under that, faint, sweet in the wrong place, at the back, the thing Shinjiro had smelled in the tin. She remembered Akihiko's back, very still, between her and the table. She remembered that he didn't go any closer and didn't let her past, and that he put his arm out sideways, not looking at her, across the doorway, like a bar, and kept it there." },
    { s: 'akihiko', f: 'serious', t: "...Don't. You've seen it. You don't have to see it again. Go and sit with Ken." },
    { n: "She went and sat with Ken. She sat on the step with her arm round him and his face in the dog, and looked at the garden, at the persimmon tree, at the well under it with its heavy stone cap and the dew standing in beads on the stone, and every bead had flour in it, a little pale cloud in every drop, as if the dew had come down through something on its way." },
    { n: "Mrs. Oka came down the stairs at six." },
    { n: "In a cotton nightgown and a cardigan, her gray hair in a plait over one shoulder, and her gloves on. White cotton gloves, at six in the morning, in her nightgown. She came down the hall slowly, with one hand on the wall, the way an old woman comes down in the morning, saying, *Who's that? Who's there? Is that you, Nozomi-kun, have you been here all night again—*" },
    { n: "And she saw him." },
    { n: "The sound she made was the worst sound Solar had ever heard a person make. It went up and up. It went on far too long, one long note, like a kettle, and Ken put his hands over his ears, and Koromaru on the step stood up and bared his teeth at the hall and didn't make any sound at all." },
    { n: "Mrs. Oka went down on her knees in the doorway of the front room. Akihiko caught her by the arm. She held on to him with both gloved hands and sobbed into his shoulder, *my boy, my boy, I left him eating, I left him one more bowl, he always wanted one more, I said don't stay up, I said*, and Akihiko stood there with a weeping woman hanging off his arm and his face perfectly white and didn't move." },
    { place: 'The Oka Boarding House · Kitchen', time: 'Morning', bg: 'eqx-oka-kitchen', music: 'eerie' },
    { n: "Mitsuru was there by six-twenty, and the Group's doctor by seven, a tired man with a bag who went into the front room and was in there four minutes and came out and went into the garden and was sick into the hydrangeas and came back in wiping his mouth, and did not say heart attack." },
    { s: 'mitsuru', f: 'neutral', t: "Well?" },
    { n: "The doctor looked at the kitchen. At the long counter. At the big wooden bowl at the end of it, the one Mrs. Oka made the dough in every night for the morning's rice cakes, which was standing empty, wiped, with a damp cloth folded over its rim." },
    { n: "He said *asphyxiation*. He said it was consistent with a young man who'd been eating to excess for some months and had a disorder of some kind, a compulsion, it happened, it was very sad, he'd have choked, he'd have panicked, he wouldn't have known what he was doing. He said it to the bowl. He didn't look at Mitsuru once." },
    { s: 'mitsuru', f: 'serious', t: "And the rest of it? The— his stomach. Is that consistent?" },
    { n: "The doctor didn't answer. He signed the form on the kitchen counter without sitting down, and Mitsuru countersigned it, and Solar watched her read every single word of it first, slowly, all of it, the way she hadn't with Mr. Tanabe's; and then sign it anyway, because there was nothing else on earth the form could say." },
    { n: "Mrs. Oka gave a statement. To Mitsuru, at the kitchen table, in her nightgown, with a handkerchief, crying the whole time, quietly now. She'd gone to bed at ten. He'd been having a last bowl. He always had a last bowl; he always wanted one more, bless him, he'd never once in four months said no to anything. She'd left the dough under a cloth on the counter for the morning. She'd heard nothing all night. She was a heavy sleeper. She was so sorry. She was so, so sorry." },
    { n: "Then she wiped her eyes, and got up, and put the kettle on." },
    { n: "She made tea for everyone. For Mitsuru and the doctor and Akihiko and Solar and Ken on the step and the two men from the Group who came at eight with a stretcher. She went round with the tray in her floured gloves, a cup for each of them, saying *drink this, you've had a shock, drink this, child*, and every one of them took a cup, because there was no way not to, and the doctor drank his straight down." },
    { n: "Aigis had come with Mitsuru. She stood in the kitchen doorway with her arms at her sides and her head a little on one side, the way she stood when she was listening to something nobody else could hear, and she was looking at Mrs. Oka." },
    { n: "Not at the front room. Not at the stretcher. At the landlady, at the stove, with the kettle." },
    { s: 'aigis', f: 'neutral', t: "...Mrs. Oka. Your heart rate is very—" },
    { s: 'mrsoka', f: 'neutral', t: "Oh, you're cold, child. Look at your hands. Here. Here, hold this. Hold it till you're warm." },
    { n: "She put a cup of tea into Aigis's hands, both of them, and closed Aigis's fingers round it with her own gloved ones, gently, and held them there a moment, and smiled up into her face, wet-eyed, and patted her hands, twice, and turned back to the stove." },
    { n: "Aigis stood holding the cup. She didn't drink from it. She didn't finish her sentence. She stood in the doorway holding the hot cup in both hands for a long time without moving, the way a machine stands when it's waiting for a process to finish, and then she looked at Solar, across the kitchen, and her face did something Solar had never seen it do." },
    { n: "Later, on the walk back up the hill, behind the others, Aigis said, very quietly, without turning her head, *I would like to take that reading again. I was interrupted.* And then, a few steps later, *I think I was interrupted on purpose.*" },
    { n: "Ken didn't drink his tea. He left it on the step, full, and Koromaru, when nobody was looking, knocked it over with his nose, and stood in the spill, and growled at it." },
    { place: 'Iwatodai Dorm · Dining Room', time: 'Morning', bg: 'iwatodaidorm-diningroom', music: 'tender', soft: true },
    { n: "Breakfast at the dorm was rice, and miso soup, and Shinjiro had made the rice soft that morning because he'd been told by phone at six forty that Ken would be home and he'd thought soft would be easier." },
    { n: "Ken looked at the bowl. He looked at it for a long time. Then he pushed it away, very politely, with both hands, and said *no, thank you*, and asked if there was any toast, very hard toast, the hardest toast there was." },
    { n: "Shinjiro looked at him across the table. Then he got up without a word and took the rice away and made toast, and burned it, on purpose, black at the edges, and put it in front of Ken with a glass of milk, and Ken ate all of it, every crumb, crunching, steadily, with his eyes on the plate." },
    { n: "Junpei came down at nine, yawning, and saw all their faces, and stopped in the doorway, and said *what*, and nobody could tell him, and Solar watched him understand it from their faces before anyone said a word, and watched him go to the drawer under the takeout menus, and take out the roll-call book, and stand there with it, and not open it." },
    { s: 'junpei', f: 'sad', t: "...He wasn't on it. He wasn't ours. I didn't have him on the list." },
    { n: "He opened it to the back. To the grid. He wrote it at the bottom, under all of them, in pen. *Suemitsu.* Then he put a line through it. Then he closed the book and put it back under the menus and went upstairs, and nobody heard a sound from his room until the evening." }
  ] },

  { id: 'eqx-hunted', date: '7/27', slot: 'late', consumes: true, title: 'something is hunting us', place: 'Iwatodai Dorm · Lounge', time: 'Late Night',
    cast: { solar: 'Solar', mitsuru: 'Mitsuru', akihiko: 'Akihiko', haechan: 'Haechan', hanni: 'Hanni', hyein: 'Hyein', yukari: 'Yukari', yunjin: 'Yunjin', eunchae: 'Eunchae', chaewon: 'Chaewon', jaehyun: 'Jaehyun', minji: 'Minji', jungwon: 'Jungwon', fuuka: 'Fuuka' },
    scene: [
    { bg: 'iwatodaidorm-livingroom-night-summer', music: 'tension' },
    { n: "Everybody came. Nobody had been told to. By ten the lounge was the way it had been on the night of the knock, futons and cushions and every lamp lit, except that it was July, and hot, and there were so many more of them now that they spilled out into the hall and up the stairs, the guesthouse and the girls from the boarding house and the boys from the arcade, forty people in a dorm built for twelve, all of them talking in low voices at once and none of them about anything." },
    { n: "Mitsuru stood at the whiteboard. VISITORS on one side, ARRIVALS on the other, both columns long now, every name on them in her handwriting. She'd drawn a line under them. Under the line, in red marker, she'd written one word, and stood back from it, and capped the pen." },
    { n: "*HUNTING*" },
    { s: 'mitsuru', f: 'neutral', t: "Mr. Hata was a stroke. Mr. Tanabe was a heart attack. Both signed by people I pay. I countersigned both. I didn't read one of them." },
    { s: 'mitsuru', f: 'serious', t: "Nobody is going to tell me what happened to Suemitsu last night was his heart. Nobody has tried. The doctor who signed it was sick in a flower bed." },
    { s: 'mitsuru', f: 'neutral', t: "Something in this town is killing people. It isn't killing us. Not yet. It's killing people near us, people who sat at our tables. I don't know what it is, I don't know how, and I can't prove a single thing. But I'm not going to stand here and call it a coincidence three times." },
    { n: "Nobody said anything. Akihiko, on the arm of the couch, had his stopwatch in his hand, and he held it up without being asked, and his voice when he spoke was very flat." },
    { s: 'akihiko', f: 'neutral', t: "Sixty-three twenty-one, the twenty-fifth. Tonight it'll be over sixty-four. I'd bet anything. Forty seconds. In a night that was mostly a full moon." },
    { s: 'akihiko', f: 'serious', t: "It did that in April. Thirteen seconds the night after the guesthouse. I said something got fed. I said it like a joke." },
    { n: "Haechan was on the floor by the stereo with Minji's silver recorder in his hand. He'd taped the red last night, like every night, from the laundry room, a meter from the yard door. He'd listened to it this afternoon. He hadn't said anything about it all day. Now he put it on the coffee table, in the middle, among the cups, and pressed play, and turned it up." },
    { n: "The hum of the red. Nothing else, for a long time. Then, under it, far off, through a wall, the way it had been in April: a woman humming. The lullaby. Three up, two down, a long one. Happy. Unhurried." },
    { n: "And under the humming, keeping time with it, a sound. Soft. Wet. Rhythmic. Over and over, patient, the slap and push of something heavy and pale being worked with both hands on a wooden board." },
    { n: "Kneading." },
    { n: "Hyein got up and went out of the room very fast and they heard her in the downstairs bathroom. Hanni went after her. Haechan pressed stop." },
    { s: 'haechan', f: 'neutral', t: "...That's from the boarding house side. It's always from the boarding house side. I didn't want to say. In April. I thought it was the river." },
    { n: "Nobody in the room looked at the four girls from the boarding house. Everybody in the room was very careful not to." },
    { s: 'mitsuru', f: 'neutral', t: "From tonight, nobody's alone after dark. Anywhere. Not on the street, not in a kitchen, not in a bed. Twos. Hanni will redo the rota." },
    { s: 'mitsuru', f: 'neutral', t: "And I want the four of you out of the boarding house. Tonight. I'll find beds." },
    { n: "The girls looked at each other. Chaewon first, at the others, and then at Mitsuru. And Eunchae, the youngest, in her borrowed T-shirt with her knees up, said it, in a small reasonable voice, before any of the others could stop her." },
    { s: 'eunchae', f: 'sad', t: "...We can't. She's been crying all day. She hasn't eaten. She sat at the table where he— she sat at the other end of it all afternoon and didn't move. We can't leave her alone in that house tonight. She asked us not to." },
    { s: 'eunchae', f: 'neutral', t: "She asked so nicely." },
    { n: "Something went through the room. Not a sound. A chill, the kind that goes through a crowd when somebody says a thing that everyone understands half a second before they understand why." },
    { s: 'chaewon', f: 'neutral', t: "...We'll stay together. All four. Same room. We'll keep the light on." },
    { n: "Mitsuru looked at her for a long time. Then she wrote four names under the line on the whiteboard, under HUNTING, in a column of their own, and drew a box round it, and didn't say anything else." },
    { s: 'yukari', f: 'neutral', t: "...Maybe we should just go. All of us. Home. If there's a way. If any of those doors in the Well are real. Maybe the thing to do is find one and just go." },
    { s: 'jaehyun', f: 'neutral', t: "There isn't a way. You've seen what happens. The light goes out." },
    { s: 'minji', f: 'neutral', t: "There isn't a way *yet*." },
    { n: "And they were all looking at her. Solar. All forty of them. On the couch and on the floor and up the stairs, every face in the room turned toward her in the lamp light, the way faces turned toward the girl at the center of every room she'd ever been in, waiting for her to say the thing that would make it all right, the thing they needed. She could feel it on her skin. She knew exactly what they needed. She'd always known exactly what everybody needed." },
    { n: "Haechan, on the floor, was the only one not looking at her. He was looking at his own hands." },
    { choose: [
      { t: "Nobody's going anywhere. We stay together. Please.", tally: { asked: 1, cakes: 1 }, flag: 'eqx-asked-house', then: [
        { n: "She said it. It came out warm, and steady, and exactly right, the voice she used in a doorway, and she watched it land on every face in the room like a blanket. Shoulders came down. Somebody let out a breath. Yukari nodded, slowly, and looked at her hands, and said *okay*." },
        { n: "It was what they needed. It was exactly what they needed. And she felt it go out of her as she said it, warm, the way it had gone out of her in front of the lens and the tide and the box, a small thing under her ribs that didn't come back, and nobody in the room saw it go." },
        { n: "Haechan, on the floor, shut his eyes." }
      ] },
      { t: "If anyone finds a door, it's theirs to walk through. Nobody here gets to decide that for them. Not even me.", tally: { choose: 1 }, flag: 'eqx-choose-house', then: [
        { n: "She said it. It wasn't what they needed. She saw it not be what they needed, on forty faces, one after another: the small drop, the confusion, the waiting for the rest of it. There wasn't any rest of it. She let the silence sit." },
        { n: "Yukari looked at her for a long time. Then, slowly, something in her face came loose." },
        { s: 'yukari', f: 'sad', t: "...Okay. That's fair. That's— yeah. That's fair." },
        { n: "Haechan, on the floor, looked up at her, and for a second there was something in his face she'd never seen in it in any life, something open and terrified and proud, and then he looked back down at his hands." }
      ] },
      { t: "(Say nothing. Look at Mitsuru.)", then: [
        { n: "She didn't say anything. She looked at Mitsuru, at the whiteboard, at the red word on it, and Mitsuru looked back, and understood, and took the room off her without a word: *bed, all of you, twos, now*, in the voice she'd used on S.E.E.S. for a whole year, and the room moved, and the faces turned away from Solar one by one, and she could breathe." },
        { n: "Haechan got up off the floor last. He passed her on his way to the stairs and his hand brushed hers, and didn't take it." }
      ] }
    ] },
    { place: 'Iwatodai Dorm · Roof', time: 'Late Night', bg: 'iwatodaidorm-roof-night', music: 'night' },
    { n: "The roof, at eleven fifty. Wednesday's box on the rota was hers, but it was Tuesday, and Hanni had put two names in every box tonight, and Tuesday's said *S + H*, in Hanni's handwriting, and Solar didn't know whether the H was Hanni, in case, or the other one, and then Haechan came up the stairs with two cans of barley tea and she knew." },
    { n: "They sat on the low wall with the town below them. The bay. The bridge. The river street, out of sight round the hill, and the boarding house on it, and one light on in it, upstairs, in the room where the four girls were keeping the light on." },
    { s: 'haechan', f: 'neutral', t: "...I'm not going to ask you anything." },
    { s: 'solar', f: 'neutral', t: "I know." },
    { s: 'haechan', f: 'neutral', t: "I'm saying it anyway. Because everybody in this town is asking everybody for something, and I can hear it now, I can hear it under everything, like that humming. Stay for supper. Stay till it stops. Stay where nobody's watching. Stay, stay. It's everywhere. I hear it in my own head. It sounds like a favor." },
    { s: 'haechan', f: 'serious', t: "It wants me to ask you to stay. With me. It keeps saying you would. *She would, if you asked. She'd do it for you.*" },
    { n: "He wasn't looking at her. He was looking at the bridge, every lamp lit along it, and nobody on it." },
    { s: 'haechan', f: 'neutral', t: "...It's probably right. That's the worst part. You probably would." },
    { s: 'haechan', f: 'neutral', t: "So I'm not going to. Not tonight, not ever. I'm going to want it so loud you can hear it from across the room, and I'm never going to say it. And you're going to have to put up with that. Sorry." },
    { choose: [
      { t: "(Lean your head on his shoulder.)", then: [
        { n: "She leaned. He went very still. Then, slowly, as if afraid of startling something, he let his cheek come down on the top of her head, and they sat like that with the barley tea going warm in their hands and the town under them, and he didn't put his arm round her, and she understood that that was on purpose too." }
      ] },
      { t: "You're allowed to want things out loud. Wanting isn't asking.", then: [
        { n: "He turned his head and looked at her. For a long time. In the lamp light from the stairwell door his face did something she'd only seen it do at the bottom of the Well, in April, the first second after he'd found her." },
        { s: 'haechan', f: 'neutral', t: "...Yeah? Okay. Okay. Then I want— I want a lot of things. I'm going to need a minute. I'm going to need, like, a year." },
        { s: 'solar', f: 'neutral', t: "You've got one." }
      ] },
      { t: "(Take his hand. Don't say anything.)", then: [
        { n: "She took it. He let her. His palm was warm, and there was the scar across it from the rope, a straight pink line, and she ran her thumb along it, once, and he made a small sound and didn't look at her and didn't let go." }
      ] }
    ] },
    { n: "At twelve the town went red." },
    { n: "The coffins came up in every bed in Iwatodai, the way they had every night since April, and Solar, on the roof, without meaning to, looked down the hill to where she knew the river street was. She couldn't see it. She didn't need to. Minji would have it on the camera in the morning, from the guesthouse roof, and Solar knew already what it would show." },
    { n: "Every coffin in the town. Every one, in every bed, in every window, that had faced the island and the school every night since spring." },
    { n: "Turned in the night, very slightly, all together, the way a crowd turns when somebody walks into a room. Not toward the island. Not toward their own front doors." },
    { n: "Toward the river." },
    { n: "Far off, down the hill, so faint it might have been the pipes, somebody knocked twice on a door. Politely. And waited to be asked in." }
  ] }
);
