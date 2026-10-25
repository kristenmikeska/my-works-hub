/* The spice batch: the dorm reacts (2026-10-24). Junpei's betting pool (his spiral notebook with the baseball on the cover,
   crush-triangle.js), Yukari's knowing looks, and Mitsuru announcing a curfew talk at breakfast with no explanation. The
   day-after ones are crush moments with a `glow` gate (core.js glowIs): they only play the day after a scene's { glow },
   go before the crush gap and before a routine. Group texts at the bottom (sees = the no-seniors chat; sisters). */
(() => {
  const W = window, C = W.FEMC_GAME_CRUSH, P = C.phases;
  const A = ph => ({ akihiko: ph }), H = ph => ({ haechan: ph });
  const BREAKFAST = { place: 'Iwatodai Dorm · Dining Room', time: 'Early Morning', bg: 'iwatodaidorm-diningroom' };

  C.moments.push(
    /* ── The morning after Akihiko nearly got caught: a curfew talk, no explanation. ── */
    { id: 'sp-dorm-curfew-aki', who: 'mitsuru', crush: A('dating'), glow: 'akihiko:caught', slot: 'early', after: '9/6', until: '3/4', ...BREAKFAST, scene: [
      { n: "Breakfast, and Mitsuru was already at the head of the table when Solar came down, with her tea and her newspaper and her posture, which was the posture of a woman who had been awake since five composing something." },
      { n: "Akihiko came in from his run. He saw Mitsuru. He saw the newspaper. He sat down at the far end of the table from Solar, the very far end, which he had never done in his life, and began eating rice with tremendous concentration." },
      { n: "Mitsuru folded her newspaper. Everyone at the table watched her do it." },
      { s: 'mitsuru', f: 'neutral', t: "There will be a curfew talk. This evening. Eight o'clock. The lounge. Attendance is mandatory." },
      { n: "She unfolded the newspaper again. That was all. No reason. No names. Not a single glance in any particular direction, which was somehow louder than any glance could have been." },
      { s: 'junpei', f: 'surprised', t: "...Wait. What did I do? I didn't do anything. Senpai, I've been in bed by eleven every night this week, I swear on my hat—" },
      { s: 'mitsuru', f: 'neutral', t: "Nobody has said that anyone has done anything, Iori." },
      { s: 'fuuka', f: 'surprised', t: "Did something happen?" },
      { s: 'mitsuru', f: 'neutral', t: "Nothing happened. That's the purpose of the talk. To make sure that nothing continues to happen." },
      { n: "Yukari, across the table, put her coffee down very slowly and looked at Solar. Then at Akihiko, at the far end, eating rice as if the rice owed him money. Then back at Solar. Her eyebrows went up a millimeter, and then another millimeter, and stayed, and she picked her coffee up again and said nothing at all, and it was the loudest thing anyone said all morning." },
      { choose: [
        { t: "(Eat your breakfast. Look at nobody.)", then: [
          { n: "She ate her breakfast and looked at nobody. Akihiko ate his and looked at nobody. Koromaru, under the table, looked at both of them in turn, and then lay down across Solar's feet with a sigh like a dog who has been through this before in another household and knows exactly how it ends." }
        ] },
        { t: "Mitsuru-senpai, will there be diagrams?", then: [
          { n: "At the far end of the table Akihiko inhaled a grain of rice and coughed until Junpei hit him on the back." },
          { s: 'mitsuru', f: 'neutral', t: "...There will be a floor plan. Yes. With the stairs marked." },
          { s: 'mitsuru', f: 'neutral', t: "All twenty-two of them." },
          { n: "She went back to her newspaper. Akihiko put his forehead down on the table beside his bowl and left it there. Yukari said *oh my god* into her coffee, very quietly, with enormous satisfaction, and Fuuka asked why twenty-two, and nobody answered her." }
        ] }
      ] }
    ] },

    /* ── The morning after Haechan and the laundry room: the house meeting, with a whiteboard. ── */
    { id: 'sp-dorm-curfew-hc', who: 'mitsuru', crush: H('dating'), glow: 'haechan:caught', slot: 'early', after: '12/27', until: '3/4', ...BREAKFAST, scene: [
      { n: "There was a whiteboard in the dining room. There had never been a whiteboard in the dining room. It had been wheeled in from the command room some time before six, and on it, in Mitsuru's handwriting, very neat, was a floor plan of the dorm, all four floors, with the laundry room shaded in red and an arrow pointing to it and the words *112 yen / cycle* beside the arrow." },
      { n: "Nobody mentioned it. Everybody ate breakfast facing it. Haechan came down last, in a hoodie zipped to his chin, and stopped in the doorway, and looked at the whiteboard for a long, long moment." },
      { ifHeading: 'S', then: [
        { s: 'haechan', f: 'happy', t: "Hoejangnim. Beautiful work. The stairs are very accurate." },
        { n: "He bowed to the whiteboard. Then to Mitsuru. Then he sat down beside Solar with a perfectly straight face and stole her pickled radish, and Yunjin at the end of the table put her face in her hands." }
      ], else: [
        { s: 'haechan', f: 'neutral', t: "...That's a good floor plan." },
        { s: 'mitsuru', f: 'neutral', t: "Thank you. It's going to be the subject of a curfew talk. This evening. Attendance is mandatory." },
        { s: 'haechan', f: 'neutral', t: "Should I bring anything." },
        { s: 'mitsuru', f: 'neutral', t: "Yen." }
      ] },
      { s: 'junpei', f: 'flustered', t: "Why is the laundry room red? What happened in the laundry room? Is it the dryer? Is the dryer haunted? I KNEW it was haunted, I heard it going at three in the morning like eleven times—" },
      { n: "Hyein made a sound like a balloon losing air and Hanni pinched her under the table. Fuuka studied the floor plan with genuine scholarly interest. Aigis said *the dryer is not haunted, Junpei* in a tone of deep and private amusement, and Solar ate her rice with her face on fire and Haechan's knee pressed against hers under the table, deliberately, the whole time." },
      { choose: [
        { t: "(Ask, very innocently, what happens at the talk.)", then: [
          { s: 'mitsuru', f: 'neutral', t: "We'll be discussing the household's electricity budget. And the stairs. And what time the building goes to sleep, and who it goes to sleep with—" },
          { n: "She stopped. She had heard it come out of her own mouth. For the first time in the history of the Iwatodai dormitory, Mitsuru Kirijo turned faintly pink at her own breakfast table, and put her newspaper up in front of her face, and from behind it said *in which rooms. Who goes to sleep in which rooms*, and Junpei laughed so hard he had to leave." }
        ] },
        { t: "(Don't. Say. Anything.)", then: [
          { n: "She said nothing. It was the most strategic silence of her life. Haechan said nothing either, beside her, with his hood up, eating, and only once, when Mitsuru turned the page of her newspaper, did his shoulders shake, and only once did Solar have to stand on his foot." }
        ] }
      ] }
    ] },

    /* ── Junpei's betting pool: the curfew book. ── */
    { id: 'sp-dorm-pool', who: 'junpei', crush: A('dating'), slot: 'evening', after: '9/8', until: '12/12',
      place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
        { n: "Junpei was on the sofa with the notebook. The small spiral one with the baseball on the cover. He was writing in it very fast with his tongue sticking out of the corner of his mouth, and Yukari was beside him reading over his shoulder with the expression of a woman watching a dog do taxes, and when Solar came in he snapped it shut so hard a page tore." },
        { s: 'junpei', f: 'happy', t: "Leader! Hey! Nothing. Hi. This is nothing. This is a notebook about baseball." },
        { s: 'yukari', f: 'neutral', t: "It's a new pool. He opened a new pool. The old one paid out so he opened a new one. Like a casino." },
        { s: 'junpei', f: 'flustered', t: "It's not a POOL, it's a— okay it's a pool. It's a very respectful pool. It's called *Who Gets Caught First*. On the wrong floor. After curfew. By Mitsuru-senpai." },
        { s: 'junpei', f: 'happy', t: "Odds are good. Fuuka's got *this month*. Yukari's got *never, they're too careful*, which is a coward's bet. I've got *before the culture festival*. Aigis put down a hundred yen on *already happened* and wouldn't say why." },
        { ifFlag: 'sp-aki-caught', then: [
          { n: "Already happened. Solar's face did something she couldn't stop. She felt it go. Junpei saw it go, and his mouth fell open, and Yukari saw Junpei see it, and turned slowly, all the way round on the sofa, to look at her." },
          { s: 'junpei', f: 'surprised', t: "...No. Wait. Leader. Did she? Did Mitsuru-senpai— AIGIS. AIGIS, GET IN HERE. HOW DID YOU KNOW—" },
          { s: 'yukari', f: 'neutral', t: "Aigis lives here, Junpei. Aigis sees everything. Aigis is the house." }
        ] },
        { choose: [
          { t: "(Take the notebook. Write your own bet in it. Hand it back.)", then: [
            { n: "She took the notebook out of his hands, and the pen out of his other hand, and wrote, in the next empty line, very neatly, *Solar: nobody ever finds out anything, ¥500*, and handed it back, and he read it, and looked up at her with the face of a man who has just been told the house always wins." },
            { s: 'junpei', f: 'surprised', t: "That's not a— you can't bet on your OWN— Yukari, can she do that?" },
            { s: 'yukari', f: 'blushing', t: "She can do whatever she wants. She's the leader. Also it's a losing bet. I'm putting a thousand against it." }
          ] },
          { t: "Put me down for tonight.", then: [
            { n: "There was a silence on the sofa like a room after a door slams." },
            { s: 'yukari', f: 'surprised', t: "...She's kidding. You're kidding. She's kidding, Junpei, don't write that down. JUNPEI—" },
            { n: "He was already writing it down. In capitals. With the date. And when Akihiko came in from the kitchen at that exact moment with a protein shake and said *what are you all looking at*, Junpei closed the notebook and said *baseball* and Yukari said *baseball* and Fuuka, who had just walked in behind him, said *baseball?* uncertainly, to be part of things, and Akihiko looked at the three of them and went straight back into the kitchen." }
          ] }
        ] }
      ] },

    /* ── Yukari's knowing looks: the day after Akihiko's night, at lunch. ── */
    { id: 'sp-dorm-yukari', who: 'yukari', crush: A('dating'), glow: 'akihiko', slot: 'lunch', schoolOnly: true, after: '9/3', until: '3/4',
      place: 'Gekkoukan High · Rooftop', time: 'Lunch', bg: 'rooftop-day', scene: [
        { n: "Yukari found her on the roof at lunch, sat down on the bench beside her with her bento, opened it, and did not eat it. She looked at Solar instead. Sideways. With her chopsticks in her hand. For a long time." },
        { s: 'solar', f: 'neutral', t: "What." },
        { s: 'yukari', f: 'neutral', t: "Nothing." },
        { n: "She ate a piece of tamagoyaki. She looked at Solar again. She ate another piece. She looked again, and this time her mouth did something at the corner that she pushed down, firmly, like closing a drawer that wouldn't stay shut." },
        { s: 'yukari', f: 'blushing', t: "I'm not saying anything. I want that on the record. I'm the only person in that building who isn't saying anything. Junpei's said about four hundred things. Fuuka asked me if senpai's sick because he was whistling. I said he might be. I lied to Fuuka for you." },
        { s: 'yukari', f: 'neutral', t: "...You've got a— no, other side. Your collar. Fix your collar. God." },
        { choose: [
          { t: "(Fix your collar. Thank her. Mean it.)", then: [
            { n: "She fixed her collar. She said *thank you, Yukari*, and meant it, and Yukari said *don't* and *I hate this* and *I'm so happy for you I want to throw up*, all in one breath, and then ate her whole bento very fast looking out over the fence, and when the bell went she bumped Solar with her shoulder on the way to the stairs, hard, the way you'd bump someone you'd decided to keep." }
          ] },
          { t: "Are you going to look at me like that all day?", then: [
            { s: 'yukari', f: 'neutral', t: "Yes. All day. Possibly all week. You owe me this. I live on that floor." },
            { s: 'yukari', f: 'blushing', t: "...Was it nice? Don't answer that. Don't you dare answer that. I can see the answer on your face, it's disgusting, eat your lunch." }
          ] }
        ] }
      ] }
  );

  /* ── Group texts. ── */
  const T = W.FEMC_GAME_TEXTS;
  if (T) {
    const J = t => ({ from: 'junpei', t }), Y = t => ({ from: 'yukari', t }), F = t => ({ from: 'fuuka', t });
    (T.ambient ||= []).push(
      { id: 'sp-tx-sees-curfew', thread: 'sees', from: '9/9', to: '12/14', crush: A('dating'), msgs: [
        J('reminder the pool is OPEN'), J('who gets caught first. wrong floor. after curfew. by u know who'),
        Y('he made a spreadsheet'), J('i made a SPREADSHEET'), F("is it the stairs one? i put this month :)")
      ], reply: [
        { t: 'nobody is getting caught', then: [J('thats exactly what someone who is getting caught would say'), Y('she has a point though. they are SO careful')] },
        { t: 'what are the odds on tonight', then: [J('...'), J('WHAT'), Y('LEADER'), F('oh!')] },
        { t: '(Leave it on read.)', silent: true, then: [J('ON READ. thats a confession in some countries')] }
      ] },
      { id: 'sp-tx-sisters-hc', thread: 'sisters', from: '12/27', to: '2/24', flag: 'arrived-haechan', crush: H('dating'), msgs: [
        { from: 'hyein', t: 'hyein: sol the turtleneck' }, { from: 'hyein', t: "hyein: he's wearing a TURTLENECK. inside. at DINNER" },
        { from: 'hanni', t: 'hanni: hyein' }, { from: 'hyein', t: "hyein: i'm just saying the evidence is overwhelming" }
      ], reply: [
        { t: "it's cold", then: [{ from: 'hyein', t: "hyein: it's NOT that cold" }, { from: 'hanni', t: 'hanni: it is a little cold. leave her alone' }] },
        { t: 'u should see under it', then: [{ from: 'hyein', t: 'hyein: SOLAR' }, { from: 'hanni', t: 'hanni: ...' }, { from: 'hanni', t: "hanni: i'm putting my phone in the freezer" }] },
        { t: '(Leave it on read.)', silent: true, then: [{ from: 'hanni', t: 'hanni: good. ignore her' }, { from: 'hyein', t: 'hyein: she is NOT ignoring me she is BLUSHING i can feel it through the floor' }] }
      ] }
    );
  }
})();
