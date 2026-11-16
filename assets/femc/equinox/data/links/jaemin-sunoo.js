/* Persona 3: Equinox · Jaemin & Sunoo · XIX The Sun (a duo link). Link data (femc-equinox-game.html). Format: link fields
   in assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: rank 1 (after 7/19: the link opens once both are here; Sunoo came through on 7/17 and his arrival scene is
   story-act2 'eqx-two-lives', 7/18 after school, so the day after that; their home is Mandragora karaoke on Sunday,
   Wednesday, Friday and Saturday evenings, so 7/21 at the earliest). Ranks 2–10 still to write. Shape: the stub fields from
   assets/femc/equinox/data/links.js (members / cast kept). Both speak in every rank.
   Shared memory: Solstice's Jaemin link (Mandragora's biggest booth as his "office hours", "my lady", the Social Chair who
   sells everything, himself included; the spine is learning to say one thing without a pitch) and Sunoo's (Yeobo's Cafe,
   his grandmother's, run alone and perfectly; sunshine to everyone; the one who worries whether Jungwon has eaten;
   sunooshine). Runners and HOAX: at home they've never met and never will. Both are one-life people in a house of two-life
   people; on 7/18 Sunoo saw something go past him that he wasn't in ("What house?"), and Jaemin took the spatula.
   Two-lives rule: Sunoo is never told about the strangers life; Solar can decline to lie without explaining.
   The hook: the only two Suns, who could only ever be friends here. The duo's shared ask, unspent: stay together.
   Reads: ifEvent eqx-hunted (7/27 night: the rule of twos) for the walk home.
   Flags this file sets: eqx-js-house (Solar tells Sunoo it isn't hers to tell). Nothing reads it yet. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'jaemin-sunoo', name: 'Jaemin & Sunoo', short: 'Jaemin & Sunoo', arcana: 'Sun', numeral: 'XIX', from: 'Runners · Hoax', kind: 'group',
  world: 'RH', romance: null, starts: '7/18', lodging: 'guesthouse', members: ['jaemin', 'sunoo'], cast: { jaemin: 'Jaemin', sunoo: 'Sunoo' },
  home: { area: 'mall', spot: 'Karaoke', slot: 'evening', days: [0, 3, 5, 6],
          hint: 'Evenings at Mandragora karaoke in Paulownia Mall, in the biggest booth, which the two of them have somehow made theirs.' },
  approach: "Through the little window in the door of Mandragora's biggest booth you can see two boys on the couch with a tambourine each, singing a ballad at each other with enormous seriousness, one of them crying a little from laughing, and the room's whole table covered in plates they've clearly ordered for a party of ten.",
  ranks: [
    { after: '7/19', title: '1: two suns', place: 'Paulownia Mall · Karaoke', time: 'Evening', music: 'joy', scene: [
      { bg: 'paulownia-karaoke' },
      { n: "Mandragora's biggest booth was at the very end of the corridor, past the drinks bar and the sticky carpet and the row of doors with little windows in them, each one a different song leaking out round the edges. It had a long couch on three sides and a disco ball nobody had ever fixed and a screen as wide as a car, and on a Wednesday night in July it smelled of fried chicken and melon soda and the particular hot-dust smell of a projector that had been running since noon." },
      { n: "The door was open. Somebody had propped it with a tambourine. From inside, two voices were singing a very sad ballad about a train station in Korean, at full volume, with total commitment, and very slightly in different keys." },
      { n: "Jaemin was standing on the couch. Sunoo was standing on the table, in socks, between the plates. They were singing to each other across the room like two men on opposite banks of a river. The screen behind them showed rain falling on a platform, and a lonely actor in a coat, and the lyrics going by in bouncing pink." },
      { n: "They hit the last note. They held it. They held it far too long. Sunoo ran out first and collapsed onto the couch laughing, and Jaemin kept going, alone, arms out, until his voice cracked in half, and then he bowed to the screen, and turned, and saw Solar in the doorway." },
      { s: 'jaemin', f: 'happy', t: "My lady. Welcome to office hours. You're late. You've missed the emotional climax of the evening." },
      { s: 'sunoo', f: 'happy', t: "Solar! Come in, come in, sit, we ordered too much, we always order too much. Jaemin orders for ten people because he says the room feels empty otherwise." },
      { s: 'jaemin', f: 'neutral', t: "The room *does* feel empty otherwise. I'm not going to apologize for having a sense of occasion." },
      { choose: [
        { t: "Office hours?", notes: 2, then: [
          { s: 'jaemin', f: 'neutral', t: "Last year this was my office. I held court. People came to me with their problems and I solved them with a song and a basket of fries." },
          { s: 'sunoo', f: 'happy', t: "He told me this on the first night. He had a whole presentation. He said I could be his intern." },
          { s: 'jaemin', f: 'neutral', t: "And then he was better at it than me in one week. So now he's co-chair. It's a hostile takeover. I'm handling it with grace." }
        ] },
        { t: "You two know each other?", notes: 3, then: [
          { n: "They looked at each other. A very short look. Two people checking something they'd already checked many times." },
          { s: 'sunoo', f: 'neutral', t: "Since Sunday. He took my spatula." },
          { s: 'jaemin', f: 'neutral', t: "I saved your eggs. Your eggs were a crime." },
          { s: 'sunoo', f: 'happy', t: "My eggs were *experimental*. Anyway. Since Sunday. It feels like longer. Doesn't it feel like longer?" }
        ] },
        { t: "(Get up on the table with Sunoo.)", notes: 3, then: [
          { n: "She took her shoes off and climbed onto the table, carefully, between a basket of chicken and a pitcher of something blue. Sunoo shrieked with delight and grabbed her hand and held it up like a referee announcing a winner. Jaemin, from the couch, applauded with a tambourine." },
          { s: 'jaemin', f: 'happy', t: "She's one of us. I knew it. I said it in November. I said, that one has table energy." }
        ] }
      ] },
      { n: "She stayed for three songs and a half, and in that time she understood several things. That Jaemin chose every song by how much it would make other people laugh, and Sunoo chose every song by how much it would make other people sing along, and that neither of them had once chosen a song for himself. That they'd learned each other's harmonies in four days. That Sunoo kept the plates moving round the table toward whoever had the least, without seeming to notice he was doing it, and Jaemin kept refilling everyone's glass, and that both of them were hosting the same party at each other, in a booth with three people in it, and that neither of them had ever, in either of their lives, been a guest." },
      { s: 'sunoo', f: 'neutral', t: "At home I've got the café. My grandmother's. Yeobo's. I run it alone, because it's my duty, because it has to be perfect, because she trusted me." },
      { s: 'sunoo', f: 'happy', t: "Here there's no café. I keep waking up at five to open and there's nothing to open. So I make terrible eggs for whoever's awake. And then *he's* awake." },
      { s: 'jaemin', f: 'neutral', t: "At home I'm Social Chair. Everyone needs me to be fun. It's my whole job. If I walk into a room and I'm not fun, people ask if somebody died." },
      { s: 'jaemin', f: 'neutral', t: "Here nobody needs me to be anything. Turns out I'm still fun. That's been a relief, honestly. I was worried for a minute it was just the job." },
      // CG: eqx-two-suns — two young men in a karaoke booth lit by a broken disco ball and a huge screen of falling rain, one standing on the couch and one on the table among plates, both with tambourines, singing at each other across the room, both laughing.
      { s: 'sunoo', f: 'neutral', t: "You know what we worked out? On Monday? We'd never have met. At home. Never. He's in America. I'm in Seoul. Different lives. We'd never have even been in the same country at the same time." },
      { s: 'jaemin', f: 'neutral', t: "We did the math. I made a chart. It's a very sad chart." },
      { s: 'sunoo', f: 'happy', t: "So this is the only place in the whole world where we're friends." },
      { n: "He said it happily. He meant it happily. And Jaemin, beside him, laughed, the big Social Chair laugh, and said *then don't go home, simple*, as a joke, the way you'd say it about a good party, and threw a fry at him, and Sunoo caught it in his mouth, and they both cheered." },
      { n: "Nobody heard it but Solar. *Then don't go home.* She heard it the way you hear your own name said in a crowded room, sharp, over everything." },
      { choose: [
        { t: "You'd find each other. Somehow.", notes: 2, then: [
          { s: 'jaemin', f: 'neutral', t: "That's very optimistic. I respect it. I'm the optimist here, usually. You're stealing my thing." },
          { s: 'sunoo', f: 'neutral', t: "...Would we, though? Really? You can say it. I like hearing it even if it's not true." }
        ] },
        { t: "Then make this count. While it's yours.", notes: 3, then: [
          { n: "They both looked at her. Sunoo's face did something soft and surprised. Jaemin's did nothing at all for a second, which on Jaemin was rare enough to be startling, and then he picked up the remote and scrolled, and scrolled, and didn't choose anything." },
          { s: 'jaemin', f: 'neutral', t: "...Okay. Okay. Noted. Minuted. That's going in the record." }
        ] },
        { t: "(Don't answer. Throw a fry at Jaemin.)", notes: 2, then: [
          { n: "She threw a fry at Jaemin. It hit him on the forehead. He looked at her with the wounded betrayal of a man shot by his own officer, and then picked it off his face and ate it, and the moment went past, and she let it go past, and was not sure she should have." }
        ] }
      ] },
      { n: "Jaemin went to the bar for more soda. And in the space he left, Sunoo shifted down the couch toward her, his knees up, his voice dropped, the cheerful open face still cheerful, but quieter round the edges." },
      { s: 'sunoo', f: 'neutral', t: "Can I ask you something? You can say no. You can just say no, it's fine." },
      { s: 'sunoo', f: 'neutral', t: "On Sunday. In the kitchen. Sunghoon said a house. And everybody looked at each other. And Jay said it was Jungwon's grandma's. And I laughed, because Jay wanted me to laugh." },
      { s: 'sunoo', f: 'sad', t: "Jungwon doesn't have a grandma with a big house. I've been to his grandma's. It's a flat. It has a cat." },
      { s: 'sunoo', f: 'neutral', t: "There's something they're all in. All of them. You too. And I'm not in it. That's okay. I'm just. I'd like to know if I'm not in it on purpose. Or if I'm just not in it." },
      { choose: [
        { t: "It's not mine to tell, Sunoo. I'm sorry.", notes: 3, flag: 'eqx-js-house', then: [
          { n: "He looked at her for a long moment. Then he nodded, slowly. Not hurt. Something closer to relief, the relief of being told there was a door, even a shut one." },
          { s: 'sunoo', f: 'neutral', t: "...Okay. Okay. That's an answer. It's not *nothing*. Thank you for not saying it was nothing." },
          { s: 'sunoo', f: 'happy', t: "Jay said it was nothing. Jay's a terrible liar. He's a very kind terrible liar." }
        ] },
        { t: "It's nothing. Jay was right.", notes: 2, then: [
          { s: 'sunoo', f: 'neutral', t: "...Okay." },
          { n: "He smiled. It was the same smile as always, the sunshine one, every tooth. It didn't move at all, the whole rest of the evening. Solar watched it not move, and felt it like a stone in her shoe." }
        ] },
        { t: "Ask Jungwon. He'd want you to ask.", notes: 2, then: [
          { s: 'sunoo', f: 'neutral', t: "Would he? He'd get the face. The council face. Where he's deciding how much to put on the agenda." },
          { s: 'sunoo', f: 'sad', t: "...I'll ask him when he's eaten. He's nicer when he's eaten. He never eats." }
        ] }
      ] },
      { n: "Jaemin came back with the drinks. He looked at the two of them on the couch, at Sunoo's face, and didn't ask, and set Sunoo's soda down closest to him, and sat down on Sunoo's other side, close, shoulder to shoulder, the way you'd sit beside somebody at a bus stop in the rain. He didn't say anything. He'd been on the outside of a lot of kitchens, Solar thought. He knew what the outside looked like." },
      { place: 'Paulownia Mall · Karaoke', time: 'Night', bg: 'paulownia-karaoke', music: 'eerie', soft: true },
      { n: "At a quarter to eleven, with the time on the room nearly up, the screen changed by itself." },
      { n: "Nobody had touched the remote. It was on the table, under a napkin. The rain on the platform faded out and the screen went dark blue, and a song began. No title on the screen. No artist. Only the little bar at the bottom that said NOW PLAYING with nothing after it, and an instrumental, slow, a piano and something like a music box, playing a tune so simple a child could have hummed it." },
      { n: "The lyrics came up. Or the space for them. A pink bouncing ball, hopping along the bottom of the screen, word to word, over nothing. Over a line of blank. Keeping perfect time with a song that had no words." },
      { s: 'sunoo', f: 'surprised', t: "...Oh. I know this. My grandmother sang this. When I was little. When I was sick. I don't know what it's called. Nobody ever told me what it's called." },
      { s: 'jaemin', f: 'neutral', t: "My mom sang it. In the car. When I couldn't sleep." },
      { n: "They looked at each other. A boy from Seoul and a boy from a frat house in Syracuse, whose lives had never once crossed and never would, who'd have needed a chart to explain how they'd ever met, and both of them knew the tune. Both of them had been sung to sleep with it." },
      { n: "Solar knew it too. She'd known it since the bottom of the Well in April, where she'd woken with it already in her ears. She'd heard it since, hummed, absently, through a kitchen door, and hadn't let herself think about which door." },
      { choose: [
        { t: "(Pick up the remote. Stop it.)", notes: 3, then: [
          { n: "She took the remote out from under the napkin and pressed stop. Nothing happened. She pressed it again, and again, and the ball went on bouncing over the blank, word to word, and the music box went on, and finally she reached behind the screen and pulled the plug out of the wall, and the room went dark except for the disco ball, turning, throwing its broken light over the three of them like snow." },
          { s: 'jaemin', f: 'neutral', t: "...Okay. Great. Love that. Great vibes. Great end to office hours." }
        ] },
        { t: "(Don't move. Let it finish.)", notes: 2, then: [
          { n: "Nobody moved. The tune went round once, and round again, and the ball bounced over the blank, and at the end of the second time round it stopped, mid-phrase, at exactly the place where a mother would stop because the child was asleep. The screen went back to the menu. The remote was still under its napkin." },
          { s: 'sunoo', f: 'neutral', t: "...That's where my grandmother always stopped. That exact place." }
        ] }
      ] },
      { n: "They paid. Jaemin insisted, and Sunoo insisted harder, and in the end they split it to the yen, which took ten minutes and a napkin and a great deal of arithmetic, and which both of them clearly enjoyed more than anything else that evening." },
      { ifEvent: 'eqx-hunted', then: [
        { n: "Outside, under the mall's last lights, they stood together without discussing it. Mitsuru's rule had been on the dorm's whiteboard since the twenty-seventh: nobody alone after dark. Twos. Jaemin was Chenle's two most nights, and somehow also Sunoo's, and he'd worked out a route that did both, which he'd drawn on a napkin and which made no sense at all." },
        { s: 'jaemin', f: 'neutral', t: "We're each other's two. Tonight. He's mine. I'm his. It's very official. There's a napkin." },
        { s: 'sunoo', f: 'happy', t: "He walks on the outside. By the road. He says it's a Sigma thing. I think he just likes being the one on the outside." }
      ], else: [
        { n: "Outside, under the mall's last lights, they walked her to the monorail together, one on each side, and argued all the way about whose eggs had been worse, and both of them, she noticed, kept glancing back over their shoulders at the mall, at the dark row of booth windows on the second floor, and neither of them said why." }
      ] },
      { n: "At the corner Sunoo turned round, walking backward, and waved at her with his whole arm, the way you'd wave at someone on a departing train." },
      { s: 'sunoo', f: 'happy', t: "Same time next week! We'll order for ten!" },
      { s: 'jaemin', f: 'neutral', t: "We'll order for eleven. One for the room." }
    ] }
  ]
});
