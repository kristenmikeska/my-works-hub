/* Persona 3: Equinox · Jay, Niki & Sunghoon · X Wheel of Fortune (a group link: two lives each). Link data
   (femc-equinox-game.html). Format: link fields in assets/femc/game/core.js ("Links" header), scene lines in
   assets/femc/game/scene.js.
   Written: rank 1 (after 7/19: they came through on 7/17 at the guesthouse gate, arrival scene story-act2 'eqx-two-lives',
   7/18 after school, so the day after that; their home is Hagakure's long counter on Monday, Wednesday and Saturday
   evenings, so 7/19 itself). Written: ranks 1–3. Rank 2 '2: the back kitchen' (after 8/18, a Wednesday in summer break, after
   the Incheon trip and the 8/16 lanterns; Hagakure's back kitchen after closing, the hill home): the old cook lends Jay the
   back after close [INVENTED]; Jay makes stock for the guesthouse; asked where he learned, he answers with one life (his mom,
   a chair at the stove) and feels how easy it was ("be one boy" widening); Sunghoon watched no door in Incheon; Jay's flour
   round: nobody in town has ever sold Mrs. Oka flour, and he can't tell what hers is milled from (agrees with Shinjiro 5/29)
   [INVENTED]; Niki's phone is warm, as if held. Reads eqx-trio-phone. Rank 3 '3: if it rings' (after 9/15, Wednesday;
   Hagakure, the river street, the boarding-house gate, the embankment, the dorm gate): the old cook goes to supper by the river
   on Wednesdays now, at a lady's ask [INVENTED; he is alive in December, story-act4 12/21's karaoke line]; the dads at
   Hagakure (ifEvent eqx-equinox: the fathers in a row since the bridge; else all three separately), Sunghoon stands for
   Taejoon without deciding to (habit only); Niki's phone rings for the first time (call log: 집, home, a contact he never
   saved) and he runs straight to Mrs. Oka's gate, where it stops; the kettle. The group's ask ("stay where it never rings" =
   be one boy + stay where nobody dies) recorded: tally asks.trio yes / no / choose (+ cakes / choose), hidden "Stay. Please."
   (asked +1, cakes +1, flag eqx-asked-trio). Yes: the phone goes in the river (its screen lights under the water); asked:
   Solar keeps it; choose: three hands on it, undecided; no: zipped and charged. Reads eqx-trio-phone, eqx-equinox.
   Sunghoon "keeps" the night (the time-matters hint). Fences: no Miseon, war, guns, injuries, or anything after Feb 7;
   Jay's strangers cooking stays "a kitchen nobody's mom came into". Ranks 4–10 still to write. Shape: the stub fields from assets/femc/equinox/data/links.js
   (members / cast kept). All three speak in every rank.
   Shared memory: Solstice's Jay / Niki / Sunghoon links. HOAX: Jay the blunt football star ("bro"), Niki the youngest chaos
   agent, Sunghoon the third-person prince who skates in secret and hasn't looked at anyone but Cherry. strangers, kept
   oblique (plan §0 rule 5): Jay cooks for a house and keeps an unlit cigarette behind his ear; Niki runs errands with an old
   folding phone ("If it rings, I run"); Sunghoon stands behind a chair and watches a door. Never named: the war, the houses,
   what the errands are, anyone in danger, anything after deep winter. In private with Solar they talk about both lives
   openly (Kat, Nov 11); Sunoo (one life) is never told.
   The hook: three boys who can be both at once at one counter. The two-world ask ("be one boy") and the strangers ask
   ("stay where nobody dies") are both seeded, unspent. Jay went back to the garden at noon (7/18's missing shadow).
   Reads: ifEvent eqx-last-grain (7/27 morning).
   Flags this file sets: eqx-trio-phone (rank 1: Solar tells Niki to keep the phone charged; ranks 2–3 read it),
   eqx-trio-flour (rank 2: Jay will tell Mitsuru about the flour; nothing reads it yet), eqx-asked-trio (rank 3, hidden ask;
   not yet in story-act4.js's ASKED list). Tallies: asks.trio, cakes, choose, asked (rank 3). */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'trio', name: 'Jay, Niki & Sunghoon', short: 'The Trio', arcana: 'Fortune', numeral: 'X', from: 'Hoax · strangers', kind: 'group',
  world: 'HS', romance: null, arrives: '7/17', starts: '7/18', lodging: 'guesthouse',
  members: ['jay', 'niki', 'sunghoon'], cast: { jay: 'Jay', niki: 'Niki', sunghoon: 'Sunghoon' },
  home: { area: 'strip', spot: 'Hagakure Ramen', slot: 'evening', days: [1, 3, 6],
          hint: 'Monday, Wednesday and Saturday evenings, at the long counter in Hagakure, three bowls and one argument.' },
  approach: "At the long counter in Hagakure three boys are sitting in a row in front of three bowls, the tallest one translating the menu for the other two in an Osaka accent the old cook clearly adores, the middle one tasting the broth with the frown of a professional, and the third one sitting sideways on his stool so he can see the door.",
  ranks: [
    { after: '7/19', title: '1: three bowls', place: 'Iwatodai Strip · Hagakure Ramen', time: 'Evening', music: 'city', scene: [
      { bg: 'hagakure-ramen' },
      { n: "Hagakure in summer was a furnace with a counter in it. The big pots at the back had been rolling since five in the morning, and the steam came off them in a wall, and the little air conditioner over the door fought it and lost, and everyone at the counter sat with a towel round their neck and sweat running into their eyebrows and ate anyway, because it was Hagakure, and the broth was the broth." },
      { n: "They had the three stools at the end. They'd had them since the first night they came in, the old cook told Solar later, as if they'd been born on them." },
      { n: "Niki was translating. Not the menu; the menu had pictures. The cook. The old cook was talking to him over the counter in a broad, cheerful Kansai Japanese, and Niki was talking back in the same accent, and the cook was delighted, roaring with laughter, slapping the counter, sliding him an extra egg he hadn't asked for. Niki was translating all of it, a beat behind, for the other two, with enormous relish." },
      { s: 'niki', f: 'happy', t: "He says I sound like his grandmother. He says it's the first time anyone's sounded like his grandmother since she died. He says I can have a free egg forever. He says Jay looks like he's going to cry about the broth." },
      { s: 'jay', f: 'neutral', t: "I'm not going to cry about the broth." },
      { n: "Jay was tasting the broth. He'd tasted it four times. He had the little spoon up to his mouth and his eyes half shut and his other hand flat on the counter, and the face he was making was not the face of a high school football star eating ramen. It was the face of a man who'd stood over a stove at four in the morning in a different country, in a different year of his life, and knew exactly what a pot like that had cost." },
      { s: 'jay', f: 'serious', t: "...Pork bone. Sixteen hours. Minimum. He's not skimming it. On purpose. That's the fat. That's the whole point. That's insane. That's beautiful." },
      { s: 'sunghoon', f: 'neutral', t: "He's going to cry about the broth." },
      { n: "Sunghoon was on the end stool, sideways, one elbow on the counter and his back to the wall, eating with his left hand so his right was free, and every time the door slid open his eyes went to it and came back, quick, without his head moving. He didn't seem to know he did it. Jay and Niki definitely knew. Neither of them said anything about it." },
      { s: 'sunghoon', f: 'neutral', t: "Solar. Sit. Sunghoon has saved you a stool. Sunghoon put his bag on it and glared at three salarymen." },
      { choose: [
        { t: "Sunghoon is very generous.", notes: 3, then: [
          { s: 'sunghoon', f: 'neutral', t: "Sunghoon is famously generous. It's in the biographies." },
          { s: 'niki', f: 'happy', t: "There are no biographies, hyung." },
          { s: 'sunghoon', f: 'neutral', t: "There will be. Posthumously. Sit, Solar." }
        ] },
        { t: "Jay. Are you okay?", notes: 3, then: [
          { s: 'jay', f: 'neutral', t: "I'm fine. I'm fine. I just. I haven't tasted anything that somebody else cooked properly since. A while." },
          { s: 'jay', f: 'neutral', t: "...It's nice when it's not you, is all. When you can just sit there and somebody else gets up at five." }
        ] },
        { t: "(Sit, and ask the cook for whatever Niki's having.)", notes: 2, then: [
          { n: "She sat, and pointed at Niki's bowl, and the old cook looked at Niki, and Niki said something in his grandmother's accent that made the cook laugh so hard he had to hold on to the counter, and a bowl appeared in front of Solar with two eggs in it." },
          { s: 'niki', f: 'happy', t: "I told him you're my noona. You get the family egg now. You're welcome." }
        ] }
      ] },
      { n: "They ate. They argued. It was, she understood by the second bowl, the only way the three of them knew how to be in a room together, the way some people hum. They argued about whether the egg was better at six minutes or six and a half; about whether Jungwon had eaten today (no, unanimously, and then a separate argument about whose turn it was to make him); about whether Sunghoon could, in fact, skate, which Sunghoon refused to discuss, in the third person, at length." },
      { n: "And in the middle of it, without anything changing in their voices at all, they slid from one life into the other and back, the way you'd step off one stone and onto the next." },
      { s: 'niki', f: 'neutral', t: "In the Hanlim one the cafeteria does a ramen on Thursdays and it's a war crime. In the other one, Jay-hyung's the only reason I've ever eaten anything hot at two in the morning." },
      { s: 'jay', f: 'neutral', t: "Because you were always back at two in the morning. Because somebody had you running all over the—" },
      { n: "He stopped. Glanced at the salarymen. Picked his sentence up and put it down somewhere else." },
      { s: 'jay', f: 'neutral', t: "—all over town. With your bananas. Folding your peels like a psycho." },
      { s: 'niki', f: 'happy', t: "I fold them so they don't make a mess. It's *considerate*." },
      // CG: eqx-three-bowls — three young men in a row at a steaming ramen counter in summer, towels round their necks, one tasting broth from a little spoon with his eyes closed, one laughing with the old cook across the counter, one sitting sideways on his stool with his back to the wall watching the door.
      { n: "Solar watched them do it, step off and step on, and thought of Jungwon on the guesthouse step on Sunday with his watch in his hand. *Nobody needed me to be one or the other.* Here were three more. Two ages each, two kinds of trouble each, at a counter, eating ramen in two lives at once, and nobody looking." },
      { choose: [
        { t: "Is it strange? Being both here?", notes: 3, then: [
          { s: 'sunghoon', f: 'neutral', t: "It's the least strange thing that's ever happened to me." },
          { s: 'sunghoon', f: 'neutral', t: "At home, in either one, I'm one of me and I'm hiding the other. All day. Every room. Here I sit down and I'm just... both. At a counter. Eating noodles." },
          { s: 'jay', f: 'neutral', t: "He sat with his back to the door for nine whole minutes the other night. I timed it. It was the most relaxed I've seen him in two lives." },
          { s: 'sunghoon', f: 'neutral', t: "Sunghoon was not relaxed. Sunghoon was testing a theory." }
        ] },
        { t: "Which one of you is talking to me right now?", notes: 3, then: [
          { n: "They all three stopped. Looked at each other. It was clearly a question none of them had been asked, and Niki, after a moment, started laughing so hard he had to put his chopsticks down." },
          { s: 'niki', f: 'happy', t: "Both! Both. Jay-hyung, which one are you? Are you the football one or the—" },
          { s: 'jay', f: 'neutral', t: "I'm the one who's paying. Eat your egg." }
        ] },
        { t: "(Just eat. Let them talk.)", notes: 2, then: [
          { n: "She ate, and let them talk, and the broth was so rich it coated the back of her throat like a hand, and the steam rolled down the counter, and for a whole bowl nobody asked her to be anything, which was its own kind of meal." }
        ] }
      ] },
      { place: 'Iwatodai Strip', time: 'Night', bg: 'iwatodai-strip-night', music: 'eerie', soft: true },
      { n: "Outside, the Strip was lit up and steaming after the day, the pavement still giving back heat, the neon over the arcade buzzing pink. Sunghoon went back in for his bag. Niki went to the vending machine and stood in front of it for a long time with his hand in his pocket, not choosing anything." },
      { n: "Jay stood beside Solar at the curb and took a cigarette from behind his ear, and didn't light it, and turned it over in his fingers." },
      { s: 'jay', f: 'neutral', t: "I went back. To the garden. Your landlady's. Yesterday. At noon." },
      { s: 'jay', f: 'neutral', t: "I'm not saying anything. Okay? I want that on the record. I'm not saying anything about anybody. I took a stick. A straight one. I stood it up in the street outside her wall and I measured the shadow, and I did the math on my phone, and it's right. For the latitude. For the date. For the time. It's exactly right." },
      { s: 'jay', f: 'neutral', t: "Then I did it at the corner. Right. The shrine. Right. The street's right. The whole town's right." },
      { n: "He put the cigarette back behind his ear. His hand wasn't quite steady doing it." },
      { s: 'jay', f: 'serious', t: "She wasn't in the garden yesterday. I didn't get to measure her. I stood there with my stick for twenty minutes like an idiot. The well had a shadow. The tree had a shadow. And the gate was open, and the lamp was on in the hall in the middle of the day, and I stood there, and I didn't go in." },
      { s: 'jay', f: 'neutral', t: "I don't know why I didn't go in. I go in places. I'm not a guy who doesn't go in places." },
      { choose: [
        { t: "Don't go back alone. Not with a stick. Not with anything.", notes: 3, then: [
          { s: 'jay', f: 'neutral', t: "...Yeah. I know. Yeah." },
          { s: 'jay', f: 'neutral', t: "You say it like Jungwon says things. Like you've already seen how it goes." }
        ] },
        { t: "You were right not to.", notes: 2, then: [
          { s: 'jay', f: 'neutral', t: "Was I? Or was I just scared of an old lady with a basket? That's not a good look, bro. That's not a good look in either life." }
        ] },
        { t: "Does Jungwon know you went?", notes: 2, then: [
          { s: 'jay', f: 'neutral', t: "No. And he's not going to. He's got enough on the agenda." },
          { s: 'jay', f: 'neutral', t: "...You're going to tell him. Aren't you. Fine. Tell him. Tell him I used math." }
        ] }
      ] },
      { n: "At the vending machine, Niki had taken his hand out of his pocket. In it was a phone. Not his own. An old one, a folding one, scuffed silver, the kind nobody had carried for years, with a strap on it, and he was standing in the pink light opening and shutting it, opening and shutting it, looking at the little black outer screen." },
      { s: 'niki', f: 'neutral', t: "...It came with me. In my pocket. The old one. The one from the other house." },
      { s: 'niki', f: 'neutral', t: "Nobody texts on this one. It rings. That's the whole thing about this one. If it rings, I run. I've always run. I don't even think. I've run out of a shower." },
      { s: 'niki', f: 'neutral', t: "It hasn't rung. Not once. Since I got here. It's got full battery. It never goes down. And it never rings." },
      { ifEvent: 'eqx-last-grain', then: [
        { n: "He shut it. He stood with it shut in his hand for a long moment." },
        { s: 'niki', f: 'neutral', t: "I was going to say. Before. I was going to say, at least here nobody—" },
        { n: "He stopped. He didn't finish it. He'd been on the river street on the morning of the twenty-seventh when the doctor's car came, and he'd seen Ken's face at the dorm that night, and he didn't finish it." },
        { s: 'niki', f: 'sad', t: "...Never mind." }
      ], else: [
        { s: 'niki', f: 'happy', t: "So here nobody needs me to run anywhere. Nobody's waiting for me. Nobody needs anything fetched, nobody's... it's just quiet. Here nobody's ever going to need me to run because something's—" },
        { n: "He stopped. Looked at the phone. Looked at Solar, and grinned, the cheeky one, the sixteen-year-old pretending to be a hard man." },
        { s: 'niki', f: 'happy', t: "Here nobody dies. Right? It's a nice town. Old ladies. Free eggs. Nobody dies here." }
      ] },
      { choose: [
        { t: "Keep it charged anyway. Keep it on you.", notes: 3, flag: 'eqx-trio-phone', then: [
          { s: 'niki', f: 'neutral', t: "...Why? It's never going to ring here." },
          { s: 'solar', f: 'neutral', t: "Then it won't matter that it's on you." },
          { n: "He looked at her for a long moment. Then he opened his hand and looked at the phone in it, and closed his hand, and put it back in his pocket, the inside one, and zipped it. Sunghoon, coming out of Hagakure with his bag, saw him do it, and saw her face, and didn't ask." }
        ] },
        { t: "You could put it in a drawer. Here. If you wanted.", notes: 2, then: [
          { s: 'niki', f: 'neutral', t: "A drawer. Yeah. I could. I could just. Put it down." },
          { n: "He didn't. He stood there holding it, and the pink light buzzed over him, and he didn't put it anywhere. It looked, Solar thought, like the hardest thing he'd ever been offered." }
        ] },
        { t: "(Put your hand over his, over the phone.)", notes: 3, then: [
          { n: "She put her hand over his, over the phone, and held it there. His hand was cold, in that heat. He let her. He looked very young suddenly, and very tall, and very far from either of his grandmothers." },
          { s: 'niki', f: 'neutral', t: "...Noona's hand is warm. That's not fair. It's a hundred degrees and noona's hand is warm and mine's cold." }
        ] }
      ] },
      { n: "Sunghoon came out and stood on her other side, and the three of them, without discussing it, arranged themselves round her on the pavement the way they'd arranged themselves at the guesthouse gate in the red: Jay with his arms folded, Niki behind, ducking a little under a sky that wasn't low, and Sunghoon at the edge, a half step out, facing the street, watching the way the street came." },
      { s: 'sunghoon', f: 'neutral', t: "We'll walk you. All three. Twos is for amateurs." },
      { s: 'jay', f: 'neutral', t: "Threes is for people with no plans." },
      { s: 'niki', f: 'happy', t: "Fours is a party. Noona makes four. It's a party." },
      { n: "They walked her home up the hill in the hot dark, arguing about whether it was a party, and at every corner, without breaking the argument, Sunghoon looked left and right, and Jay touched the cigarette behind his ear, and Niki put his hand flat on the zipped pocket where the phone was, as if checking it was still there, as if checking it was still not ringing." }
    ] },
    { after: '8/18', title: '2: the back kitchen', place: 'Iwatodai Strip · Hagakure Ramen', time: 'Night', music: 'city', scene: [
      { bg: 'iwatodai-strip-night' },
      { n: "August had gone on so long that it had stopped being a month and turned into a place you lived. At nine at night the Strip was still as hot as the inside of a hand, the pavement giving the day back up through the soles of her shoes, the neon over the arcade buzzing pink in air so thick it seemed to hold the light a moment before letting it go. Hagakure had its shutter half down and the lights off at the front. The old cook was sitting outside it on an upturned beer crate in his undershirt, smoking, with his knees apart and a towel on his head, and when he saw Solar coming up the pavement he didn't get up. He lifted his chin at the gap under the shutter, the way you'd show a guest which door was theirs." },
      { n: "Behind the dark counter, through the cloth curtain, the back kitchen was lit." },
      { place: 'Iwatodai Strip · Hagakure, the Back Kitchen', time: 'Night', bg: 'hagakure-kitchen', music: 'tender', soft: true },
      { n: "It was small and white-tiled and hotter than the street, the kind of hot that sat on your chest, and it smelled so strongly of pork bone and ginger and scorched onion that the smell was nearly a sound. The big pot was on the back ring at a low roll. Jay stood over it in a borrowed apron with a towel over one shoulder and the unlit cigarette behind his ear, skimming, not the fat, never the fat, just the gray scum that came up at the edges, in long patient strokes, the ladle tapped twice on the rim after each one. Niki was sitting on the steel prep counter with his legs dangling, eating a banana, folding the peel into a neat square on his knee. Sunghoon was on a crate by the back door, which was propped open onto the alley with a mop bucket, and he was sitting facing it." },
      { s: 'niki', f: 'happy', t: "Noona! You found it. He lets Jay-hyung have the back after closing now. Since Sunday. Jay-hyung cleaned his whole stove without asking and he cried. Ojisan, not Jay-hyung. Jay-hyung doesn't cry. He says nobody's cleaned that stove since his wife." },
      { s: 'jay', f: 'neutral', t: "I didn't clean it to make him cry. I cleaned it because it was disgusting. I couldn't think with it looking like that." },
      { s: 'sunghoon', f: 'neutral', t: "He's been here since four. Sunghoon has also been here since four. Sunghoon has watched a pot for five hours. It's exactly like watching a door, except at the end you get soup." },
      { s: 'jay', f: 'neutral', t: "Stock. Not soup. You get stock. If you call it soup again you get nothing." },
      { choose: [
        { t: "Who's it for?", notes: 3, then: [
          { s: 'jay', f: 'neutral', t: "The house. The guesthouse. Everybody's been living on konbini sandwiches and toast since. Since July." },
          { n: "He didn't say since what. He didn't need to. Since a man had been found at a long table with his napkin folded. Since the funeral hall and the one more bowl. Since Junkyu, who ate everything, had started eating only plain toast, a slice at a time, like medicine." },
          { s: 'jay', f: 'neutral', t: "You can't make people eat. I know that. I've tried it in two lives. But you can make the hall smell like this at seven in the morning, and then they come down the stairs on their own, and they're holding a bowl before they've decided anything." },
          { s: 'jay', f: 'serious', t: "...Jungwon came down on Monday. First one. In his socks. Didn't say a word. Ate two. That's the whole plan. That's all the plan is." }
        ] },
        { t: "(Look in the pot.)", notes: 2, then: [
          { n: "She went and looked. The stock was nearly clear, gold at the top and cloudy-white underneath where it rolled, bones knocking softly against each other on the bottom, a whole knob of ginger going round like a slow boat. Jay watched her lean over it with the face of a man watching someone pick up his baby." },
          { s: 'jay', f: 'neutral', t: "Don't breathe on it. ...Okay. You can breathe on it a little. It's done the hard part. It's just thinking now." }
        ] },
        { t: "Niki, how many bananas is that?", notes: 2, then: [
          { s: 'niki', f: 'happy', t: "Five. I'm growing. Jay-hyung says I'm going to be the tallest man in Japan who's never eaten a vegetable on purpose." },
          { s: 'sunghoon', f: 'neutral', t: "He folds them. Look. Five little squares. In a row. Like a serial killer with good manners." },
          { s: 'niki', f: 'neutral', t: "It's *considerate*. Nobody slips." }
        ] }
      ] },
      { n: "The old cook came in at half past nine, wiping his neck with the towel off his head, and stood at Jay's elbow, and looked into the pot for a long time without saying anything. Then he dipped the little tasting spoon, and blew on it, and tasted, and shut his eyes, the way Jay had shut his on the first night at the counter. He said something. It went on a while. Niki translated, a beat behind, more quietly than usual." },
      { s: 'niki', f: 'neutral', t: "He says, where did a boy learn to do this. He says boys your age can't boil an egg. He says somebody taught you right." },
      { n: "Jay didn't answer straight away. He tapped the ladle twice on the rim. Solar watched something cross his face and go, the way you'd see a car go past the end of a street, there and then not." },
      { s: 'jay', f: 'neutral', t: "My mom. Tell him my mom. Sunday mornings. She made me stand on a chair at the stove so I could see in. Tell him that." },
      { n: "Niki told him. The old cook nodded, satisfied, as if that were the only right answer, and patted Jay twice on the cheek with a hand like a warm bun, and said something that made Niki laugh, and went back out under the shutter to his crate and his cigarette." },
      { s: 'niki', f: 'happy', t: "He says your mom should open a shop. He says he'd go out of business." },
      { n: "Jay didn't laugh. He stood at the pot with the ladle, skimming nothing; the stock was clean. After a while he said it to the pot, not to any of them." },
      { s: 'jay', f: 'neutral', t: "...That's true. That's a true answer. In one of me." },
      { s: 'jay', f: 'neutral', t: "The rest I learned standing up at four in the morning in a kitchen nobody's mom ever came into. Where you didn't get it wrong. Where getting it wrong wasn't a thing that happened." },
      { s: 'jay', f: 'serious', t: "And he asked, and for a second I had to pick. Which one of me he was talking to. And it was easy. That's what got me. I just picked the guy on the chair, and put the other one down, like a pan off the heat. It was so easy I didn't notice I'd done it till he was gone." },
      { n: "Sunghoon, by the door, had turned round on his crate. He was sitting with his back to the alley. Solar wasn't sure he knew." },
      { s: 'sunghoon', f: 'neutral', t: "In Incheon Sunghoon didn't watch a single door. Not one. Four days." },
      { s: 'sunghoon', f: 'neutral', t: "There was nothing to watch for. The house wasn't there. Nobody was coming up the stairs. I slept with my back to the door both nights and I woke up on the second morning and for about a minute I didn't know who I was. Just a guy. In a hotel. Who needed to brush his teeth." },
      { s: 'niki', f: 'neutral', t: "I went on the Viking four times so I'd be screaming. If you're screaming you don't have to look at the hill." },
      { s: 'jay', f: 'neutral', t: "You went on the Viking four times because you're twelve." },
      { s: 'niki', f: 'neutral', t: "Both. Both things." },
      // CG: eqx-back-kitchen — a tiny white-tiled ramen-shop kitchen at night, steam rising off a huge stockpot, a young man with a towel on his shoulder and an unlit cigarette behind his ear skimming it, a tall boy sitting on the steel counter folding a banana peel, a third sitting on a crate by a propped-open back door onto a dark alley.
      { choose: [
        { t: "You don't have to pick. Not here.", notes: 2, then: [
          { s: 'jay', f: 'neutral', t: "Yeah. That's what everybody keeps saying. *Here, here.* Like here's a coat. Like you just put it on." },
          { s: 'jay', f: 'neutral', t: "...It fits, though. That's the thing nobody says. It fits really well. I keep checking the pockets for something and there's nothing in them." }
        ] },
        { t: "What did it feel like? Putting the other one down?", notes: 3, then: [
          { n: "He thought about it properly. He did that, she'd noticed, in both lives: he thought about the questions people didn't expect him to think about, and answered them like recipes." },
          { s: 'jay', f: 'neutral', t: "...You know when you've been holding a pan so long your arm doesn't feel it any more? And you put it down, and your arm goes up on its own, like it's floating? Like that." },
          { s: 'jay', f: 'serious', t: "And then you look at your arm floating there, and you think, wait. Whose arm is that." }
        ] },
        { t: "(Take the towel off his shoulder and wipe his face.)", notes: 3, then: [
          { n: "She took the towel off his shoulder and wiped the sweat off his forehead and his temples and the back of his neck, the way you'd do it for someone whose hands were busy, and he stood and let her with the ladle in his fist and his eyes on the pot, not moving at all." },
          { s: 'niki', f: 'happy', t: "Noona's mothering him. Hyung. You're being mothered." },
          { s: 'sunghoon', f: 'neutral', t: "Let her. Sunghoon would like to be next." }
        ] }
      ] },
      { n: "Jay turned the heat down under the pot to the faintest blue, and put the lid on half, and leaned back against the sink with his arms folded. The fan in the high window turned over slowly and did nothing. Outside in the alley a cat knocked something off a bin and Sunghoon's head went round to the door and came back." },
      { s: 'jay', f: 'neutral', t: "I'm going to tell you something and I need you to not do the face." },
      { s: 'jay', f: 'neutral', t: "The cakes. The rice cakes. The tin with the cranes that goes up the hill to your dorm on Mondays. The guy with the coat at your place, the one who cooks, he said the flour was wrong. In May. Jungwon told me. Too fine. Sweet at the back." },
      { s: 'jay', f: 'serious', t: "I put my finger in one. In July. At the guesthouse. I didn't eat it. I just put my finger in the broken end and rubbed it, like you'd check anything. I know flour, Solar. Rice flour, the sticky one, wheat, cake flour, the cheap stuff they cut with chalk at the market. I could tell you what it's milled from with my eyes shut. I couldn't tell you what that was." },
      { s: 'jay', f: 'neutral', t: "So since the funeral I've been going round. Every place in this town that sells flour. The rice shop by the shrine. The supermarket. The wholesale place behind the station that does the restaurants. I asked them all. A little lady in gloves, by the river, buys a lot of flour. Nobody. Not once. The rice shop man's been there thirty years. Never." },
      { s: 'jay', f: 'neutral', t: "The wholesale guy laughed at me. He said, maybe she grows her own." },
      { s: 'jay', f: 'serious', t: "Nobody grows flour, bro. Somebody has to grind it." },
      { n: "The fan turned over. The stock ticked under its lid. Niki had stopped folding his peel. Solar felt the back of her neck go cold in the heat, all at once, the way a window goes cold when the sun drops behind a building, and she didn't know why that was the word that did it. *Grind.*" },
      { choose: [
        { t: "Tell Mitsuru. Tomorrow. All of it, the way you told me.", notes: 3, flag: 'eqx-trio-flour', then: [
          { s: 'jay', f: 'neutral', t: "...The red-haired lady with the clipboard. Okay." },
          { s: 'jay', f: 'neutral', t: "She's scarier than anyone in either of my lives, and I mean that with real respect. Okay. Tomorrow. I'll bring her stock. You don't go in empty-handed to a lady like that." }
        ] },
        { t: "Shinjiro said almost the same words.", notes: 2, then: [
          { s: 'jay', f: 'neutral', t: "Yeah? The coat guy?" },
          { n: "Something in his shoulders let go." },
          { s: 'jay', f: 'neutral', t: "Good. Then I'm not crazy. Then there's two cooks in this town not crazy. That's a quorum. Jungwon would say that's a quorum." }
        ] },
        { t: "Stop asking around. Not because you're wrong.", notes: 3, then: [
          { s: 'jay', f: 'neutral', t: "...Because I'm right. Yeah. I got there too. Around the wholesale place." },
          { s: 'sunghoon', f: 'neutral', t: "He never goes alone. Sunghoon makes sure. Sunghoon stood outside the rice shop for twenty minutes pretending to read a poster about a dog." },
          { s: 'jay', f: 'neutral', t: "Okay. I'll stop. I'll stop asking. I'm not going to stop knowing." }
        ] }
      ] },
      { n: "They ate at ten, at the long counter in the dark shop, with only the kitchen light coming through the curtain, four bowls and the old cook's, plain stock with a little salt and spring onion and nothing else, because Jay said that was how you found out whether you'd done it right: nothing to hide behind. The old cook drank his standing up, both hands round the bowl, and said one word, and put the bowl down, and went out to lock the alley door." },
      { s: 'niki', f: 'happy', t: "He said *better*. Just *better*. He means better than his. He'll never say it twice. He says come back Wednesday." },
      { place: 'Iwatodai · The Hill to the Dorm', time: 'Night', bg: 'iwatodai-strip-night', music: 'night', soft: true },
      { n: "They walked her up the hill in threes, which Mitsuru had agreed counted, after a short and very formal meeting with Jay, as an acceptable form of twos. The heat hadn't broken. It wasn't going to. Somewhere a wind chime on a balcony turned over once, and stopped, though there was no wind." },
      { ifFlag: 'eqx-trio-phone', then: [
        { n: "At the corner by the post office Niki stopped and unzipped his inside pocket, the way he did at every corner now, and took out the old silver phone, and opened it. Full battery. He'd kept it charged, every night, since she'd told him to; Jay said he plugged it in before he plugged in his own." }
      ], else: [
        { n: "At the corner by the post office Niki stopped and took the old silver phone out of his back pocket, the way he did at every corner now, and opened it. Full battery. It was always full. He'd never once charged it." }
      ] },
      { n: "He stood there with it open in his hand under the streetlamp, and didn't shut it, and didn't put it away. His thumb moved on the scuffed silver, slowly, back and forth." },
      { s: 'niki', f: 'neutral', t: "...It's warm." },
      { s: 'niki', f: 'neutral', t: "I haven't touched it all night. It was in my pocket on the other side from my leg. And it's warm. Like somebody's been holding it. In their hand. For a while." },
      { s: 'sunghoon', f: 'neutral', t: "It's ninety degrees, Niki. Everything's warm." },
      { s: 'niki', f: 'neutral', t: "Yeah. Yeah, hyung, I know." },
      { n: "He shut it and put it away, and Jay put an arm round his neck from behind and hauled him into a walk, talking loudly about Wednesday's broth, and Sunghoon fell in on Solar's other side, a half step out, facing the street. At the dorm gate they stood in a row and watched her all the way to the door, and when she looked back from the step Niki had his hand flat on his pocket again, over the phone, the way you'd keep your hand on a sleeping animal to feel it breathe." }
    ] },
    { after: '9/15', title: '3: if it rings', place: 'Iwatodai Strip · Hagakure Ramen', time: 'Evening', music: 'tender', scene: [
      { bg: 'iwatodai-strip-rain' },
      { n: "It rained in the afternoon for the first time in weeks, a hard short rain that came down so straight it bounced, and when it stopped at six the heat had gone out of the air as if somebody had opened a door at the end of a long corridor. The Strip steamed. The gutters ran. Solar came up the pavement with her blazer on for the first time since June, and it felt like a costume, and she was glad of it." },
      { n: "The old cook was coming out of Hagakure as she got there. Not in his undershirt. In a jacket, a good one, dark, a little tight across the back, and a tie, and his gray hair combed flat with water so the comb marks showed. He was carrying a paper bag with a bottle in it. He looked, she thought, like a man going to a wedding in a photograph from before she was born." },
      { n: "Niki was in the doorway behind him with the key in his hand, and he wasn't smiling." },
      { s: 'niki', f: 'neutral', t: "He's closing early. Wednesdays now. He's going to supper." },
      { s: 'niki', f: 'neutral', t: "A lady by the river asked him. Last week. He says she does rice the way his wife did, with the barley in. He says she asked him to stay a while after, and he did, and he slept better than he has in eleven years. He said that. Eleven years." },
      { n: "The cook said something to Niki, cheerful, and put his hand on the back of Niki's neck and shook him gently, the way you'd shake a puppy, and said something else to Jay, who had come up behind with Sunghoon, and bowed to Solar, a real bow, from the waist, with his bag held against his chest. Then he went off down the wet Strip toward the hill, toward the turning for the river street, walking carefully round the puddles in his good shoes." },
      { n: "Solar's body knew before she did. It went still, the way it went still in the red, every part of it at once, listening for a knock." },
      { choose: [
        { t: "(Go to the corner and watch which way he turns.)", notes: 2, then: [
          { n: "She went to the corner. He was a dark jacket going down the hill between the wet bright windows, smaller and smaller, and at the bottom, where the road forked, he turned left, without hesitating, toward the river, the way you turn toward your own house." }
        ] },
        { t: "Niki. Tell him to be careful. In his grandmother's voice.", notes: 3, then: [
          { n: "Niki looked at her. Then he cupped his hands round his mouth and shouted it down the Strip, in the broad warm accent the old man loved, *ojisan, ki-tsuketē na*, mind how you go, and the cook, halfway down the hill, turned round and lifted the paper bag over his head like a trophy, laughing, and went on." },
          { s: 'niki', f: 'sad', t: "...He thinks I'm being cute. I'm being cute. That's all I'm allowed to be." }
        ] },
        { t: "(Don't say anything. Let him go.)", notes: 2, then: [
          { n: "She didn't say anything. None of them did. They stood under the dripping awning in a row and watched a lonely man walk down a hill in his best jacket, and none of them had anything to stop him with that he would have understood, and they all knew it." }
        ] }
      ] },
      { place: 'Iwatodai Strip · Hagakure Ramen', time: 'Evening', bg: 'hagakure-ramen', music: 'tender', soft: true },
      { n: "He'd left Jay the key, so they had the shop. Jay pulled the shutter down to knee height and put the counter lights on and the front lights off and went into the back without a word, and twenty minutes later there were four bowls on the long counter, and it wasn't the old cook's ramen. It was something Jay had made from what was in the cold room, rice and egg and a little of Sunday's stock and the last of the spring onion, a thing you'd make at midnight for somebody who'd come in cold. They ate it on the three end stools and one more pulled up, in the half dark, with the rain dripping off the shutter onto the step." },
      { ifEvent: 'eqx-equinox', then: [
        { s: 'jay', f: 'neutral', t: "Your dads come in. On Saturdays. The three of them. Since the bridge." },
        { s: 'jay', f: 'neutral', t: "They sit in a row. They don't talk. They order and they don't eat it, and Ojisan doesn't charge them, and they leave money anyway, under the bowls, too much, and he puts it in a jar by the register and doesn't spend it. There's a jar now." },
        { s: 'sunghoon', f: 'neutral', t: "The quiet one came in first. Your— the one from the house on the hill. I was on this stool. I stood up. I didn't decide to stand up. I was just standing." },
        { n: "He said it to his bowl. Jay looked at him sideways and didn't say anything, and Niki, who was sitting between them, put his elbow on the counter very slowly so that it was touching Sunghoon's." }
      ], else: [
        { s: 'jay', f: 'neutral', t: "Your dads came in on Saturday. All three. Separately. They each sat at a different end of the counter and pretended the other two weren't there. It was the best night of Ojisan's life." },
        { s: 'niki', f: 'happy', t: "The American one tipped like it was a crime. The Hanlim one asked for extra spring onion in very careful Japanese and said thank you four times." },
        { s: 'sunghoon', f: 'neutral', t: "The quiet one came in last. Your— the one from the house on the hill. I was on this stool. I stood up. I didn't decide to stand up. I was just standing, with my hands down, like I was at a door." },
        { s: 'sunghoon', f: 'neutral', t: "He nodded at me. Like he knew me. I sat down again and I couldn't taste anything for ten minutes." }
      ] },
      { n: "Solar had her spoon halfway to her mouth when the phone rang." },
      { n: "Not loud. A cheap tinny ringtone, the old kind, a little electronic tune that went up and up and stopped and started again, the sound phones had made in shop windows when she was small. It came from Niki." },
      { n: "He was already gone." },
      { ifFlag: 'eqx-trio-phone', then: [
        { n: "He didn't stop to get it out of his zipped pocket. He didn't stop to do anything. His stool went over behind him and he was under the shutter and out, one hand flat on the ringing pocket, before the tune had gone round twice, and his bowl was still turning on the counter where his elbow had hit it." }
      ], else: [
        { n: "He didn't stop to look at it. He didn't stop to do anything. His stool went over behind him and he was under the shutter and out with the ringing thing in his fist before the tune had gone round twice, and his bowl was still turning on the counter where his elbow had hit it." }
      ] },
      { s: 'jay', f: 'surprised', t: "NIKI—" },
      { place: 'Iwatodai · River Street', time: 'Night', bg: 'iwatodai-riverside-night', music: 'badfeeling', soft: true },
      { n: "He was fast. She'd known he'd be fast; she hadn't known what it would look like. He ran the way water runs downhill, without choosing anything, straight through the puddles and down the middle of the wet road and over the low barrier at the bottom of the Strip with one hand on it, not even looking, and down the hill, and left at the fork, and she ran after him with Jay beside her swearing in two languages and Sunghoon ahead of both of them, not swearing, not saying anything, running like somebody who'd done it before in the dark." },
      { ifEvent: 'eqx-equinox', then: [
        { n: "Since the bridge, nobody in the household went down the river street after dark. Not in twos, not in fours. Mitsuru had drawn it on the whiteboard in red and nobody had argued. Niki went down it at a dead run, under the dripping trees, with the phone ringing in his hand like something he'd been sent to fetch." }
      ], else: [
        { n: "The river street was dark under the dripping trees, the water loud beside it after the rain, every gate shut, every window lit and curtained. Niki went down it at a dead run with the phone ringing in his hand, like something he'd been sent to fetch." }
      ] },
      { place: 'The Oka Boarding House · Gate', time: 'Night', bg: 'eqx-oka-gate', music: 'eerie', soft: true },
      { n: "He stopped at the boarding house." },
      { n: "He didn't slow down for it. He stopped, all at once, the way you stop at the edge of a platform, with his arm already out in front of him, and his fingers touched the wet wood of the gate, and the phone stopped ringing." },
      { n: "Just like that. In the middle of the tune. The silence came down on the street so suddenly that Solar heard the river, and her own breath, and the rain dripping off the persimmon tree over the wall, one drop at a time, onto something hollow." },
      { n: "The gate was open. A hand's width. The path went up between the wet stones to the house, and the front door was open too, and the lamp in the hall was on, yellow, warm, the kind of light you'd leave on for somebody coming home late. Nobody in the doorway. Nobody on the path. Somewhere inside, at the back, where the kitchen was, a kettle was just beginning to sing." },
      { ifEvent: 'eqx-equinox', then: [
        { n: "Upstairs, one window was lit behind its paper screen, and a shape sat against it, very still, a man's shape, with his head bowed, the way a man sits on the edge of a bed when he hasn't decided to lie down. He didn't look out. Nobody in that house looked out at night any more." }
      ] },
      { n: "Sunghoon got there first. He didn't touch the gate. He took a fistful of the back of Niki's collar and held it, not pulling, just holding, the way you'd hold a dog's lead at a curb, and Niki didn't move, and his arm stayed out, his fingertips on the wood." },
      { n: "Then he opened the phone. His hand was shaking so badly it took him two goes. The little screen lit his face from underneath, bluish, and Solar, at his shoulder, saw it." },
      { n: "*1 received call. 21:41.* And under it, where a number should have been, or a name, a contact he'd saved, there was one word, in Korean, in the phone's blocky little font." },
      { n: "*집.* Home." },
      { s: 'niki', f: 'serious', t: "...I never saved anything as home. You don't save that. In that phone you don't save anything as anything. You don't write home down anywhere." },
      { s: 'jay', f: 'neutral', t: "Niki. Shut it. Shut the phone." },
      { n: "Inside the house the kettle went on rising, softly, patiently, a long thin note climbing toward the place where a kettle screams, and not getting there, and not getting there." },
      { choose: [
        { t: "(Shut the gate.)", notes: 3, then: [
          { n: "She reached past Niki's arm and took the wet gate in both hands and pushed it shut. It was heavier than it looked. The latch dropped with a clean iron click." },
          { n: "Inside the house, the kettle stopped. Not off the boil; stopped, mid-note, all at once, the way a held breath stops. The hall lamp stayed on. Nobody came to the door." }
        ] },
        { t: "(Take Niki's hand off the wood.)", notes: 3, then: [
          { n: "She took his wrist and lifted his hand off the gate, finger by finger, the way you'd lift a child's hand off something hot, and he let her, and when his last fingertip came off the wood he took a breath like a swimmer coming up, loud, ragged, as if he hadn't taken one since Hagakure." }
        ] },
        { t: "Niki. Look at me. Not at the house.", notes: 2, then: [
          { n: "He looked at her. It took a long time. His eyes came off the lit doorway slowly, as if they were being pulled the other way, and found her face, and stayed, and she watched him remember who she was." },
          { s: 'niki', f: 'sad', t: "...Noona. Hi. Sorry. Hi." }
        ] }
      ] },
      { n: "They walked him back up the river street between them, Jay on one side and Sunghoon on the other with his hand still in Niki's collar, and nobody looked back at the gate, and they didn't stop until the river street was behind them and the embankment opened out, wide and dark and empty, with the lights of the bridge far off over the water." },
      { place: 'Iwatodai · The Embankment', time: 'Night', bg: 'iwatodai-riverside-night', music: 'night', soft: true },
      { n: "Niki sat down on the wet concrete steps that went down to the water as if his legs had been cut. Jay sat beside him. Sunghoon stood for a while, facing up the bank, the way they'd come, and then, slowly, as if it cost him, turned round and sat down too, on Niki's other side, with his back to the street." },
      { n: "The phone was open in Niki's hands between his knees. The little screen had gone dark again. He held it anyway." },
      { s: 'niki', f: 'neutral', t: "It never rang. Two months. Not once. I took it out at every corner. I'd started thinking it was broken. I'd started being *glad*." },
      { s: 'niki', f: 'serious', t: "And tonight it rang, and I ran, and I didn't think, I didn't decide anything, my legs just went. That's what it's like there. Every time. You don't think. It rings, you're already out the door. And it felt— noona, it felt like coming home. My whole body was so happy to be doing something it knew." },
      { s: 'niki', f: 'sad', t: "And it brought me *there*." },
      { n: "Nobody said anything. The river went by below them, high and fast and brown after the rain, carrying bits of things down to the bay." },
      { s: 'jay', f: 'neutral', t: "Here I'm a guy who makes stock. That's it. That's the whole guy. An old man pats my face and says my mom should open a shop. One guy. I've never been one guy in my life." },
      { s: 'sunghoon', f: 'neutral', t: "Last Saturday Sunghoon sat with his back to the door at Hagakure for a whole hour. One hour. Jay timed it. Nobody came in. Nothing happened. It was the best hour Sunghoon has ever had." },
      { s: 'sunghoon', f: 'neutral', t: "That's what we'd be. If we stayed. That's all. A guy who makes stock and a guy with his back to a door and Niki." },
      { s: 'niki', f: 'neutral', t: "And Niki. With no phone." },
      { s: 'niki', f: 'serious', t: "Here nobody needs me to run anywhere. Here nobody's going to ring me at two in the morning because somebody's— because something's—" },
      { n: "He stopped where he always stopped now. He'd stood on the river street on the morning of the twenty-seventh of July. He knew what happened in this town to people who sat down at long tables. He didn't finish." },
      { s: 'jay', f: 'neutral', t: "We're not asking you to decide for us. I want that on the record. We're grown men. In one of us." },
      { s: 'niki', f: 'neutral', t: "I am. I'm asking. I'm the youngest. I'm allowed." },
      { s: 'niki', f: 'serious', t: "Tell me I can put it down, noona. Tell me we can stay here, the three of us, where it never rings. Where I never have to answer it again. If you say it, I'll do it. I'll do it right now. Look. I'm holding it over the water." },
      // CG: eqx-if-it-rings — three young men sitting on wet concrete steps going down to a dark swollen river at night, the youngest in the middle holding an old silver folding phone open over the water, its tiny screen lit, the other two either side of him, the far bridge's lamps red-blurred in the rain behind them.
      { n: "He was. His arm was out straight over the step below, over the brown water, the phone open in his fingers, its little screen gone dark, and he was looking at her and not at it, and his hand was perfectly steady now, which was worse." },
      { choose: [
        { t: "That's yours to decide. Each of you. Even if it's three different answers.", notes: 2, tally: { choose: 1, 'asks.trio': 'choose' }, then: [
          { n: "Niki stared at her. Then his face crumpled up, not into crying, into outrage, the pure outrage of the youngest at a table." },
          { s: 'niki', f: 'sad', t: "That's so *mean*. Noona. That's the meanest thing anybody's ever said to me and I've been yelled at by— I've been yelled at a lot." },
          { n: "Jay started laughing. He couldn't help it; it came out of him in a long helpless wheeze, and he put his forehead down on his knees and laughed into them, and Sunghoon, on Niki's other side, put his hand over his own eyes." },
          { s: 'sunghoon', f: 'neutral', t: "Three different answers. Sunghoon will need a weekend. Sunghoon will decide on Sunday, after lunch, alone, with his back to a wall." },
          { s: 'jay', f: 'neutral', t: "She's right, though. That's the worst part. You hear it? She's right. It's ours. Each of ours. Nobody's ever said that to me in either life. In either life somebody tells me." },
          { n: "Niki pulled his arm back in off the water, slowly. He looked at the phone. Then he held it out, flat on his palm, between Jay and Sunghoon, and after a second Jay put his hand over it, and after a longer second Sunghoon put his hand over Jay's, and the three of them sat there on the wet step with their hands stacked on an old silver phone like boys making a pact in a film, too embarrassed to look at each other." },
          { s: 'niki', f: 'neutral', t: "...Three votes. Not tonight. I'll decide when I decide. In my pocket till then. Not zipped." }
        ] },
        { t: "Put it down, Niki. Stay. Nobody here needs you to run.", notes: 3, tally: { cakes: 1, 'asks.trio': 'yes' }, then: [
          { n: "He let out a breath that went all the way down. She watched it go out of his shoulders, his back, his arm, and his fingers opened." },
          { n: "The phone fell. It turned over once in the air, silver, and hit the brown water and went in without a splash, the way a stone goes in, and was gone." },
          { n: "And for a second, under the water, a little way down, the outer screen lit up. A small square of bluish light, going down and away into the dark, turning slowly, like something looking back. Then the river closed over it, and there was nothing." },
          { s: 'jay', f: 'neutral', t: "...Okay. Okay. That's done. Good. Good." },
          { n: "He was laughing, shakily, with his arm round Niki's neck. Niki was laughing too, and crying a bit, and wiping his face with his sleeve. Sunghoon wasn't looking at the water. He'd turned his face very deliberately away from it, up the bank, to the street, and he kept it there." },
          { n: "Solar felt it go as she said it. The way it always went, when she gave somebody exactly the thing they needed. Something small and warm under her ribs, given, that didn't come back. The boys didn't see it go. They were too busy being lighter." }
        ] },
        { t: "Stay. Please. I need the three of you here.", notes: 3, tally: { asked: 1, cakes: 1, 'asks.trio': 'yes' }, flag: 'eqx-asked-trio', then: [
          { n: "It came out of her warm and certain, exactly right, the voice she had for doorways, and she saw it land on all three of them at once." },
          { n: "Niki pulled his arm in off the water. He shut the phone, and held it out to her, and put it in her hand, and folded her fingers over it with both of his." },
          { s: 'niki', f: 'neutral', t: "Then you hold it. You keep it. And if it rings, you don't run. Because you asked us to stay. So we stay." },
          { n: "Jay was looking at her. He looked at her for a long time, with the cigarette behind his ear and his arms on his knees, and she couldn't read his face, and then she could." },
          { s: 'jay', f: 'neutral', t: "...You say it like Jungwon says things. Like you've already seen how it goes. Okay. For you. Okay." },
          { n: "Sunghoon didn't say anything at all. He looked at the phone in her hand. She felt it go as she'd said it, the small warm thing under her ribs, given, gone; and the phone in her fist was warm too, warmer than her hand, as if somebody had been holding it for a long time." }
        ] },
        { t: "You'll go home someday, Niki. And it'll ring. You know it will.", notes: 2, tally: { 'asks.trio': 'no' }, then: [
          { n: "He didn't say anything for a long time. His arm stayed out over the water. Then it came back in, slowly, the way you'd draw your hand back from a dog you'd decided not to pet." },
          { s: 'niki', f: 'sad', t: "...Yeah. I know. I know it will." },
          { n: "He opened the phone and looked at the battery. Full. It would always be full. He shut it and put it in his inside pocket and zipped the pocket, all the way, and kept his hand flat on it." },
          { s: 'sunghoon', f: 'neutral', t: "Sunghoon would have said that. If Sunghoon were braver. Sunghoon hates that you said it." },
          { s: 'jay', f: 'neutral', t: "She's not wrong. That's what makes it so bad, bro. She's not wrong at all." }
        ] }
      ] },
      { place: 'Iwatodai Dorm · Front Gate', time: 'Night', bg: 'iwotodaidorm-outside', music: 'night', soft: true },
      { n: "They walked her home in threes. Nobody argued about whether it was a party. At the dorm gate, under the lamp, Jay stood with the unlit cigarette behind his ear and his hands in his pockets and his shoulders up against the new cold, and Niki stood behind him, ducking a little under a sky that wasn't low." },
      { n: "Sunghoon stood a half step out from the other two, facing the street. Then, before she went in, he turned his back on it, all the way, and looked at her." },
      { s: 'sunghoon', f: 'neutral', t: "Sunghoon is going to remember tonight. On purpose. All of it. The rain and the egg rice and your face at the gate. Sunghoon doesn't usually. Sunghoon has decided to keep this one." },
      { s: 'jay', f: 'neutral', t: "Weirdo." },
      { s: 'sunghoon', f: 'neutral', t: "You should keep it too. Both of you. Keep the whole thing. You never know which ones you'll need." },
      { n: "Nobody laughed at that. Niki looked at the ground. Jay looked at the lamp. Then Jay said *bro, it's cold, go inside*, and pushed her lightly toward the door by the shoulder, and she went." },
      { n: "On the stairs she found she was listening. For a ring, thin and tinny, an old tune going up and up and starting again, somewhere out in the dark. It didn't come. She listened all the way to her landing, and stood at the top with her hand on the rail, and couldn't have said, if anyone had asked, whether she'd wanted it to." }
    ] }
  ]
});
