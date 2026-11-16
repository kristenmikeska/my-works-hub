/* Persona 3: Equinox · Jay, Niki & Sunghoon · X Wheel of Fortune (a group link: two lives each). Link data
   (femc-equinox-game.html). Format: link fields in assets/femc/game/core.js ("Links" header), scene lines in
   assets/femc/game/scene.js.
   Written: rank 1 (after 7/19: they came through on 7/17 at the guesthouse gate, arrival scene story-act2 'eqx-two-lives',
   7/18 after school, so the day after that; their home is Hagakure's long counter on Monday, Wednesday and Saturday
   evenings, so 7/19 itself). Ranks 2–10 still to write. Shape: the stub fields from assets/femc/equinox/data/links.js
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
   Flags this file sets: eqx-trio-phone (Solar tells Niki to keep the phone charged). Nothing reads it yet. */
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
    ] }
  ]
});
