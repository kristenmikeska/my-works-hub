/* Persona 3: Equinox · Jaemin & Sunoo · XIX The Sun (a duo link). Link data (femc-equinox-game.html). Format: link fields
   in assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Rank 1 (after 7/19: the link opens once both are here; Sunoo came through on 7/17 and his arrival scene is
   story-act2 'eqx-two-lives', 7/18 after school, so the day after that; their home is Mandragora karaoke on Sunday,
   Wednesday, Friday and Saturday evenings, so 7/21 at the earliest). Shape: the stub fields from
   assets/femc/equinox/data/links.js (members / cast kept). Both speak in every rank.
   Shared memory: Solstice's Jaemin link (Mandragora's biggest booth as his "office hours", "my lady", the Social Chair who
   sells everything, himself included; the spine is learning to say one thing without a pitch) and Sunoo's (Yeobo's Cafe,
   his grandmother's, run alone and perfectly; sunshine to everyone; the one who worries whether Jungwon has eaten;
   sunooshine). Runners and HOAX: at home they've never met and never will. Both are one-life people in a house of two-life
   people; on 7/18 Sunoo saw something go past him that he wasn't in ("What house?"), and Jaemin took the spatula.
   Two-lives rule: Sunoo is never told about the strangers life; Solar can decline to lie without explaining.
   The hook: the only two Suns, who could only ever be friends here. The duo's shared ask, unspent: stay together.
   Reads: ifEvent eqx-hunted (7/27 night: the rule of twos) for the walk home.
   Flags this file sets: eqx-js-house (Solar tells Sunoo it isn't hers to tell). Read by rank 2.
   Written: ranks 1–3 (Nov 16 round 2). Ranks 4–10 still to write.
   Rank 2 (after 8/20, Fri, '2: five a.m.': Mandragora's booth in the evening, then the guesthouse gate at 4:45 the next
   morning, the walk to the boarding house gate, the guesthouse kitchen). The booth's log says the room was empty after
   10:40 on the lullaby night; Jaemin's sticky note on the remote, NO UNTITLED SONGS. Since Nozomi's funeral (7/31) Sunoo
   has gone down to Mrs. Oka's kitchen at five every morning in his grandmother's café apron to help her ("it's light at
   five; the rule's after dark"); Jaemin has tried to tell him four times, always as a bit. Mrs. Oka, unseen, waves a
   floured gloved hand over her shoulder without turning round. Reads ifEvent eqx-table-op (Jaesang asked Jaemin his GPA),
   ifFlag eqx-js-house (Sunoo asks if this is the door). Sets eqx-js-five (Sunoo stops going; "Yeobo's (temporary)" opens
   5–7 in the guesthouse kitchen, Jaemin its first customer) and eqx-js-plain (Jaemin says it himself, without the bit:
   only when Solar waits and lets him). Third option: Sunoo goes in; a box of three rice cakes Jaemin neither eats nor bins.
   Rank 3 (after 9/29, Wed, '3: places where we're friends': the booth, under its table, then the monorail). After the
   bridge: Sunoo packs lunch boxes for Mr. Kim, who doesn't eat; Mrs. Kim made Sunoo eggs the day after the parents came
   (ifFlag eqx-js-five: at his sign). Their napkin chart: Solar Lee (Jaemin's) and Solar Kim (Sunoo's) side by side, a third
   column with a question mark (strangers never told to Sunoo; Solar declines or folds it under, or denies it). Under the
   table, J + S / here (marker, from August) and *stay* pressed into the wood in the heavy hand (the Tanabata / enrolment
   form hand), "turned up on Monday". The duo's ask, "stay together": records tally asks.jaemin-sunoo (yes +cakes: the front
   desk extends the room free, "a lady... said we'd want to stay" / choose +choose: two charts, J — mine, S — unfinished /
   no). Each sings the first song he's chosen for himself. Reads ifEvent eqx-1023. Sets nothing else. */
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
    ] },
    { after: '8/20', title: '2: five a.m.', place: 'Paulownia Mall · Karaoke', time: 'Evening', music: 'joy', scene: [
      { bg: 'paulownia-karaoke' },
      { n: "The biggest booth at Mandragora had its door shut for once, and through the little window in it Solar could see the table already covered, the way it always was, fried chicken and edamame and a tower of fries and two pitchers of melon soda going flat, enough for ten people, and one person on the couch." },
      { n: "Jaemin was sitting in the middle of it with the microphone in his lap, not singing. The screen behind him was on the menu, a looping clip of a girl in a sailor uniform waving at a train, and the karaoke machine was playing its own idle music, a cheerful electric jingle that went round every forty seconds. He'd heard it, from the look of him, a great many times." },
      { n: "He saw her through the window and his whole face switched on, the way a sign switches on. By the time she'd opened the door he was on his feet with his arms out." },
      { s: 'jaemin', f: 'happy', t: "My lady. Thank god. Office hours have been dire. I've been holding court for an empty room. I gave a whole speech to the edamame." },
      { s: 'solar', f: 'neutral', t: "Where's Sunoo?" },
      { s: 'jaemin', f: 'neutral', t: "In bed. It's nine. He goes to bed at nine now. Like a farmer. Like a very cheerful farmer with a skincare routine." },
      { n: "There was a sticky note on the remote. Yellow, in Jaemin's big loopy hand. *NO UNTITLED SONGS. THIS MEANS YOU.* Underlined three times." },
      { choose: [
        { t: "(Tap the sticky note.)", notes: 3, then: [
          { s: 'jaemin', f: 'neutral', t: "I asked. At the desk. The night after. I said, hey, what was that song, the one with no name and the little bouncing ball, very haunting, five stars. And the girl looked it up." },
          { s: 'jaemin', f: 'neutral', t: "No song. Nothing played after ten-forty in this room. The log says the room was empty from ten-forty till close. We were in here till eleven. We paid. I've got the receipt." },
          { s: 'jaemin', f: 'neutral', t: "So now there's a note. If it comes on again, it has to read the note first. That's just manners." }
        ] },
        { t: "You ordered for ten. On your own.", notes: 2, then: [
          { s: 'jaemin', f: 'neutral', t: "I ordered for eleven. One for the room. I'm a man of my word." },
          { s: 'jaemin', f: 'neutral', t: "...And I kept thinking somebody'd come. Somebody always comes. In Syracuse if you order wings, people just appear. Like seagulls." }
        ] },
        { t: "(Sit down. Pick up the other microphone.)", notes: 3, then: [
          { n: "She sat beside him and picked up the second microphone and held it, and didn't choose a song, and he looked at it in her hand, and something in his shoulders let go a little, the way a host's shoulders let go when the first guest finally arrives and the party is, technically, a party." },
          { s: 'jaemin', f: 'happy', t: "A duet. Bold. I respect a woman who walks into a room and immediately raises the stakes." }
        ] }
      ] },
      { ifEvent: 'eqx-table-op', then: [
        { s: 'jaemin', f: 'neutral', t: "Also, your dad's here. Your actual dad. Jaesang Lee bought me a coffee at the konbini this week and asked me what my GPA was. I said it was a rebuilding year. He wrote something down. I don't know what. I think about it a lot." }
      ] },
      { n: "They sang one song, badly, a pop song from home that neither of them knew all the words to, and he was very funny through all of it, and did the dance, and pointed at her on every *you*, and she laughed and meant it. And then the song finished and the jingle came back and he sat down, and didn't pick a second one, and didn't say anything, which on Jaemin was the loudest sound in the room." },
      { s: 'jaemin', f: 'neutral', t: "Okay. Okay. So. I've got a pitch." },
      { s: 'jaemin', f: 'neutral', t: "Picture this. A boy. Sunshine personality. Nice skin. Runs a café back home, his grandmother's, very sweet, very small, every cup perfect. And here, no café. So every morning he wakes up at five on the dot, because his body thinks it has to open, and there's nothing to open." },
      { s: 'jaemin', f: 'neutral', t: "So since the— since the funeral, the Suemitsu kid. Since then. He gets up at five, and he puts on his apron, which he brought, he had it on when he came through, he came through the red in an apron, and he walks down the hill." },
      { s: 'jaemin', f: 'neutral', t: "To the boarding house. Because the lady's up at five too. Mrs. Oka. And she lets him help. Rice, the steamer, the rolling. He comes back at seven smelling of flour, with a box. Really happy. The happiest I've seen him." },
      { n: "He'd said it all in the pitch voice, the Social Chair voice, quick and bright with his hands going, like a man selling a timeshare, and somewhere in the middle of it his hands had stopped and the voice had gone on without them." },
      { s: 'jaemin', f: 'neutral', t: "I've told him. Four times. Every time, it came out as a bit. *Sunoo, babe, as your manager, I have concerns about the brand.* And he laughs. Because it's funny. Because I made it funny. I don't know how to make it not funny." },
      { s: 'jaemin', f: 'sad', t: "And he says it's light at five. And the rule's after dark. Twos after dark. He's got me there. He's become a lawyer." },
      { s: 'jaemin', f: 'neutral', t: "The Suemitsu kid said yes to every supper. That's what Junpei said. Every one. All summer." },
      { choose: [
        { t: "Then tell him without the bit.", notes: 3, then: [
          { s: 'jaemin', f: 'neutral', t: "Without the bit." },
          { s: 'solar', f: 'neutral', t: "Just the sentence." },
          { n: "He looked at her as if she'd suggested he go out in the street without his skin on. Then he laughed, short, and stopped laughing, and picked at the label on the soda pitcher with his thumbnail." },
          { s: 'jaemin', f: 'neutral', t: "...I don't know if I've got one. A sentence. Without the bit. I've been looking. I think I left it in Syracuse. With my good jacket." }
        ] },
        { t: "Why haven't you just gone with him?", notes: 2, then: [
          { s: 'jaemin', f: 'neutral', t: "Because I'm asleep at five. Because I'm a frat boy and five a.m. is a rumor." },
          { s: 'jaemin', f: 'sad', t: "...And because if I go, and she's nice to me too, and the rice is good, then what? Then I'm the guy who went too. Then there's two of us saying yes." }
        ] },
        { t: "(Take the remote. Turn the jingle off.)", notes: 3, then: [
          { n: "She took the remote out of his hand and pressed mute, and the jingle stopped mid-loop, and the room was quiet for the first time since she'd come in, only the hum of the projector and, through the walls, somebody in the next booth murdering a ballad. Jaemin looked at the silent screen, the girl in the uniform waving at the train with no sound." },
          { s: 'jaemin', f: 'neutral', t: "...Wow. Okay. It's very honest in here now. I hate it." }
        ] }
      ] },
      { s: 'jaemin', f: 'neutral', t: "...Would you come? Tomorrow. Five. I'll set an alarm. I'll set four alarms. I just— if you're there, I'll say it. I won't do the bit in front of you. You'd look at me." },
      { s: 'solar', f: 'neutral', t: "Quarter to five. The guesthouse gate." },
      { s: 'jaemin', f: 'happy', t: "Quarter to five. Iconic. Nobody has ever said that sentence to me and meant it." },
      { place: 'Kirijo Guesthouse · Gate', time: 'Early Morning', bg: 'kirijo-guesthouse-day', music: 'tender' },
      // BG: kirijo-guesthouse-dawn — the Kirijo guesthouse gate at first light in late summer: a low stone wall and an iron gate under a pale grey-pink sky, a streetlamp still on, the road running down a hill toward a river mist.
      { n: "At a quarter to five the sky over the bay was the colour of the inside of a shell, grey going pink at the bottom, and the streetlamps were still on, burning for nobody, and the air was the only cool it would be all day, wet and soft, smelling of cut grass and the sea. The cicadas hadn't started. Somewhere a crow was saying one thing over and over." },
      { n: "Jaemin was already at the gate. He was in a Syracuse sweatshirt with the hood up and sweatpants and slides with socks, holding two cans of coffee from the machine, one of them out toward her before she'd reached him. His eyes were puffy. His hair was flat on one side. He looked, for once, like nobody had ever told him which angle the camera wanted." },
      { s: 'jaemin', f: 'neutral', t: "Four alarms. I needed all four. The third one I argued with. I won." },
      { n: "At four fifty-eight the guesthouse door opened and Sunoo came out, in a cardigan over his pajama shirt and, over that, a café apron, dark green, worn soft, with a name stitched small on the pocket in Korean that wasn't his own, and his hair brushed, and his face, when he saw them at the gate, doing something so bright and so surprised it was like a light being switched on in a room." },
      { s: 'sunoo', f: 'happy', t: "You're up! You're both up! Jaemin, you're *up*. It's five! Are you coming? Are you coming down? She'll be so happy, she loves company, she says the kitchen's too big for one—" },
      { ifFlag: 'eqx-js-house', then: [
        { n: "He stopped. Not all the way. He looked from Jaemin to Solar and back, at the two cans of coffee, at the hour, at their faces, and the light in his face stayed on, but something behind it went careful." },
        { s: 'sunoo', f: 'neutral', t: "...Is this part of it? The thing I'm not in? You can just say. You said there's a door. You don't have to open it. I just want to know if this is a reason." }
      ], else: [
        { n: "He didn't ask why they were there. He looked from one to the other with his cheerful open face and seemed to decide, as he decided most things, that it was a nice surprise, and his smile didn't move, and something just behind it did." }
      ] },
      { n: "They walked down with him. Nobody discussed it. Down the hill in the grey light, past the dorm's dark windows, past the konbini with its one bored night man reading a manga at the counter, past the post office with its shutters down, the three of them in a row with Jaemin on the outside by the road the way he always walked, and Sunoo in the middle talking, about the steamer, about the way she rolled rice with her palms, about how she never measured anything and it always came out right, *like my grandmother*, and Jaemin saying nothing at all, which Sunoo didn't seem to notice, and which Solar noticed on every step." },
      { n: "Past the post office corner the morning got colder. She felt it on her arms. A degree, two. The mist came up off the river and lay along the street at knee height, white, and their feet went into it, and the sound of their steps changed, the way sound changes in a room with a carpet." },
      { n: "The boarding house stood at the end of the street with its persimmon tree and its old wooden gate, and the kitchen window was lit. Yellow. The only lit window on the whole river street. Through the steam on the glass there was a shape at the counter, a woman's back, an apron string, the elbows going, steady, push and fold and turn, kneading." },
      { n: "She didn't turn round. But as they came to the gate, one hand came up off the board, gloved, white with flour to the wrist, and lifted, and waved, slowly, twice, over her shoulder. Without looking. As if she'd known exactly how many of them there were, and exactly where they were standing." },
      { s: 'sunoo', f: 'happy', t: "See? She knew I was coming. She always knows. She's like my grandmother. She hears the gate before you touch it." },
      { n: "He put his hand on the gate. And Jaemin, beside Solar, made a sound in his throat, very small, a breath with the start of a word on it, and stopped, and looked at her." },
      // CG: eqx-five-am — the wooden gate of an old house at dawn, mist lying along the street at knee height, a lit kitchen window with a woman's back and floured gloved hand raised in a wave behind the steamed glass; a boy in a green café apron with his hand on the gate, another boy in a hooded sweatshirt beside him reaching for his sleeve.
      { choose: [
        { t: "(Look at Jaemin. Wait.)", notes: 3, flag: ['eqx-js-five', 'eqx-js-plain'], then: [
          { n: "She looked at him. She didn't say anything. She watched him reach, the way you'd watch someone at the end of a diving board, for the pitch, the joke, the bit, the hand going up to gesture, and find nothing there, and his hand came down instead on Sunoo's sleeve, on the cardigan, and held it." },
          { s: 'jaemin', f: 'neutral', t: "Don't go in." },
          { n: "Sunoo turned round. Jaemin's voice hadn't been loud. It had been the plainest thing Solar had ever heard come out of him, flat as a table, with nothing on it at all." },
          { s: 'jaemin', f: 'sad', t: "Please. I'm not doing a bit. I don't have a bit. I'm asking you not to go in there. I can't tell you why in a way that'll sound like anything. I just— the Suemitsu kid said yes to every supper. And you say yes to everything. You're the nicest person I've ever met and you say yes to everything, and I'm— I'm asking." },
          { n: "Sunoo looked at him for a long time. At the hand on his sleeve. At his face, hood up, puffy-eyed, nobody's Social Chair. And then, slowly, he took his hand off the gate." },
          { s: 'sunoo', f: 'neutral', t: "...Okay." },
          { s: 'sunoo', f: 'sad', t: "But then where do I go at five? I wake up and there's nothing to open, Jaemin. Every morning. My hands don't know what to do." },
          { s: 'jaemin', f: 'neutral', t: "Open at the guesthouse. The kitchen. It's got a stove. It's got a counter. Open at five. I'll be your first customer." },
          { s: 'jaemin', f: 'neutral', t: "Every day. Five. I'll be there. I'll set four alarms. I'll order for ten." },
          { n: "Sunoo's face did something complicated. Then it did something simple. He laughed, wet, and wiped his eyes with the heel of his hand, and said *you'd order for ten at five in the morning*, and Jaemin said *eleven, one for the room*, and Sunoo laughed again and hit him on the arm, and in the lit window the kneading had stopped. Just stopped. The shape at the counter stood very still with its back to them and its floured hands flat on the board." }
        ] },
        { t: "Sunoo. Don't go in today.", notes: 2, flag: 'eqx-js-five', then: [
          { s: 'sunoo', f: 'surprised', t: "...Today? Oh. Okay! Okay, if you say so." },
          { n: "He said it at once. Easily. The way he said yes to everyone, to the eggs and the extra hour and the dishes nobody else would do, the same open cheerful yes, and he took his hand off the gate, and Solar felt it land, and felt how little it had cost him, and how little that meant. He'd have said yes to anybody who asked nicely enough. That was the whole problem." },
          { n: "Jaemin let out a breath beside her. He didn't say anything. He'd been one second from it, she thought, and she'd said it first, and now he never would, and he put his hands in the pocket of his sweatshirt." },
          { s: 'jaemin', f: 'neutral', t: "...Hey. So. Hypothetically. The guesthouse has a kitchen. Five a.m. One customer. Very loyal. Tips well. Just a pitch. Just putting it out there. Think about it." },
          { s: 'sunoo', f: 'happy', t: "A pitch at five in the morning. You're unbelievable." },
          { n: "In the lit window, the kneading went on. Push, fold, turn. It hadn't stopped at all." }
        ] },
        { t: "(Let him go in. Wait at the gate.)", notes: 2, then: [
          { n: "She didn't say anything. Jaemin didn't either. Sunoo smiled at them, *two minutes, I'll bring you something*, and opened the gate, and went up the path through the mist, and the kitchen door opened before he reached it, and he went in, and it shut." },
          { n: "They stood at the gate for twenty-two minutes. Jaemin timed it on his phone. The mist sat round their knees. The kneading went on in the window, and after a while two shapes in it, a big one and a small one, side by side at the counter, the small one laughing at something, the big one's hand on the small one's back." },
          { n: "He came out with a white box tied with string and gave it to them at the gate, warm, three rice cakes in it, round and pale and dusted with flour so fine it was like powder. Jaemin took it and said thank you in the pitch voice and carried it all the way back up the hill without opening it, and at the top, when Sunoo had gone in to shower, he walked to the corner bin and stood over it for a long time, and then didn't throw it away, and didn't eat it, and took it inside." },
          { s: 'jaemin', f: 'neutral', t: "...I'll do it tomorrow. I'll say it tomorrow. Without the bit. Tomorrow." }
        ] }
      ] },
      { place: 'Kirijo Guesthouse · Kitchen', time: 'Early Morning', bg: 'kirijo-guesthouse-lobby', soft: true },
      { ifFlag: 'eqx-js-five', then: [
        { n: "At five past six the guesthouse kitchen had a sign on its door. A sheet of printer paper, felt-tip, Sunoo's round handwriting with little stars round it: *YEOBO'S (TEMPORARY). OPEN 5–7. NO RESERVATIONS.* and under it in Jaemin's loops *ask about our loyalty program*." },
        { n: "The eggs were terrible. Sunoo's eggs were always terrible; he made them with enormous seriousness, the way his grandmother had taught him to make coffee, and they came out like something left in the rain. Jaemin ate them anyway, at the counter, on a stool, with his hood still up, and asked for seconds, and Sunoo stood on the other side of the counter in his green apron with his hands on the edge of it, the way you stand behind a counter that's yours, and watched him eat with an expression Solar had never seen on his face in either life she'd known him in." },
        { s: 'sunoo', f: 'happy', t: "First customer. You're my first customer here. That's a big deal. In my grandmother's café the first customer gets their name on the wall." },
        { s: 'jaemin', f: 'neutral', t: "Put it on the wall. Put it in big letters. I've never been anybody's customer. I've always been the one behind the bar." }
      ], else: [
        { n: "In the guesthouse kitchen Jaemin put the box on the counter, unopened, and sat in front of it, and Sunoo came down at seven with wet hair and saw it there and said *you didn't eat them? they're so good*, and Jaemin said *saving them*, in the pitch voice, and Sunoo believed him, because Sunoo believed everybody, and made eggs, and they were terrible, and Jaemin ate all of them." }
      ] },
      { n: "Outside the window the sun had come up over the bay all at once, the way it did in August, and the cicadas had started, and the day was already hot. Solar sat at the end of the counter with her coffee going cold and watched the two of them, a boy behind a counter and a boy in front of it, each of them, for once, the other one." }
    ] },
    { after: '9/29', title: '3: places where we’re friends', place: 'Paulownia Mall · Karaoke', time: 'Evening', music: 'tender', scene: [
      { bg: 'paulownia-karaoke' },
      { n: "Paulownia Mall didn't know. That was the thing Solar couldn't get used to. Six days since the bridge and the mall still had its autumn sale banners up, red maple leaves and fifty percent off, and the fountain still ran, and a girl outside the shoe shop was handing out tissues with an ad on the packet, bowing to everyone, smiling. The town had slept through the red, the way it slept through every red. The town had woken up and gone to work. Only the household knew that three women had walked onto Moonlight Bridge and not come off it." },
      { ifEvent: 'eqx-1023', then: [
        { n: "And since the Fathers' Hill the household knew more than that, and the mall still didn't, and its sale banners went on fluttering over the escalators, and the girl with the tissues went on bowing." }
      ] },
      { n: "The biggest booth had its door shut and its light low. Through the little window she could see the screen showing its rain, the lonely platform from July, the actor in his coat, all of it on mute. The table was covered. Enough for ten people. None of it touched." },
      { n: "Jaemin was in the corner of the couch with his feet up and his phone face down on his chest, not looking at it. Sunoo was at the table with his sleeves rolled up and a row of plastic lunch boxes open in front of him, five of them, filling them from the plates, carefully, with chopsticks, the way you'd lay out a hand of cards. A piece of chicken. A spoon of rice. Three slices of pickled radish, arranged in a fan." },
      { s: 'sunoo', f: 'neutral', t: "Solar. Hi. Sit. Sorry, I'm using the food. Jaemin ordered it anyway, so I'm using it." },
      { s: 'jaemin', f: 'neutral', t: "I ordered for eleven. Habit. My body orders. I've stopped fighting it." },
      { n: "It wasn't the office-hours voice. It wasn't any voice she'd heard him use in either life. He sounded like a radio left on low in an empty room." },
      { choose: [
        { t: "Who are the boxes for?", notes: 3, then: [
          { s: 'sunoo', f: 'neutral', t: "Mr. Kim. Your— Mrs. Kim's husband. He doesn't eat. He sits at supper and people put food in front of him and he looks at it. He's been looking at it since the bridge." },
          { s: 'sunoo', f: 'neutral', t: "He'll eat mine. I asked him. I said, *Abeonim, will you eat it if I make it?* and he said yes. He doesn't say no to anybody either. It's going round." },
          { n: "He fanned the radish. He didn't look up. It was the only food anybody in the household was making, Solar realized, that nobody had checked." }
        ] },
        { t: "(Sit beside Jaemin. Take your shoes off.)", notes: 2, then: [
          { n: "She took her shoes off and put her feet up on the couch next to his, the way they'd been in July on the table. He looked at her feet. He moved his over, a few centimeters, so they were touching, ankle to ankle, and left them there, and went back to looking at the ceiling, where the disco ball nobody had ever fixed hung, not turning." }
        ] },
        { t: "You're both here. That's enough.", notes: 2, then: [
          { s: 'jaemin', f: 'neutral', t: "That's the bar now. Both here. I used to need a theme." }
        ] }
      ] },
      { n: "Sunoo closed the first lid and pressed it down at the corners with his thumbs, one, two, three, four, the way you'd close something you wanted to stay shut." },
      { ifFlag: 'eqx-js-five', then: [
        { s: 'sunoo', f: 'sad', t: "She made me eat. Mrs. Kim. The day after they came. She found me in the guesthouse kitchen at five, at the counter, with the sign up, and she read the sign, and she made me sit down on my own customer's stool. And she made me eggs." }
      ], else: [
        { s: 'sunoo', f: 'sad', t: "She made me eat. Mrs. Kim. The day after they came. She found me in the guesthouse kitchen at five, at the counter with my apron on and nothing to open, and she didn't ask why, and she made me sit down. And she made me eggs." }
      ] },
      { s: 'sunoo', f: 'sad', t: "They were better than mine. Everybody's are. But she didn't say that. She said, *you're Jungwon's friend. The one who worries.* I didn't know she knew that. At home I've only ever said hello to her." },
      { s: 'sunoo', f: 'neutral', t: "And then on the bridge she was at the back. With the others. Laughing. And I was in the middle and Jaemin had my hand." },
      { s: 'jaemin', f: 'neutral', t: "I had his hand. I didn't let go. I ran. I didn't look back once. I want that on the record. I'm not proud of it. I'd do it again." },
      { n: "Nobody said anything. The rain on the screen ran down the platform without a sound. Somewhere through the wall someone was singing a birthday song, the whole booth joining in on the name." },
      { s: 'sunoo', f: 'neutral', t: "...There were three of them. At the back. Mrs. Kim. And two others. And all three of them, at breakfast, the first day, Jungwon told me, all three called you their daughter. And you let them. You answered all three." },
      { s: 'jaemin', f: 'neutral', t: "We made a chart." },
      { n: "He took it out of his back pocket. A napkin from this booth, folded in four, soft from being folded and unfolded. In his loopy hand down one side: *SOLAR LEE. Jaehyun's sister. Sigma parties. Mr. + Mrs. Lee (Upper East Side).* Down the other, in Sunoo's round hand: *SOLAR KIM. Our VP. Hanlim. Mr. + Mrs. Kim.* And in the middle, between them, a third column, with a question mark at the top and nothing under it, and a soft woman's name Solar knew written there and then crossed out, very gently, as if they'd decided it wasn't theirs to write." },
      { s: 'jaemin', f: 'neutral', t: "I know one of you. He knows one of you. We put them side by side. It's the same girl. Same laugh. Same thing with the hair when you're lying." },
      { s: 'sunoo', f: 'neutral', t: "And there's a third one. And the third one's the one everybody else is in. Jungwon. Haechan. Jay. Sunghoon. Niki. The house." },
      { s: 'sunoo', f: 'neutral', t: "...You don't have to tell me. I'm not asking you to tell me. I just wanted you to know we know there's a column." },
      { choose: [
        { t: "That column's not mine to fill in. I'm sorry.", notes: 3, then: [
          { s: 'sunoo', f: 'neutral', t: "...Okay. That's what you said in July. About the house. It's still the same answer." },
          { s: 'sunoo', f: 'happy', t: "I like that it's the same answer. It means it's true. Jay's answers change every time." },
          { n: "He folded the napkin back along its old creases and gave it to Jaemin, and Jaemin put it in his back pocket without looking at it, the way you'd put away a photograph." }
        ] },
        { t: "(Take the napkin. Fold the middle column under.)", notes: 3, then: [
          { n: "She took it, and folded it, carefully, so the middle column went underneath and the two outer ones met, Lee against Kim, and there was no gap between them at all. Then she gave it back." },
          { s: 'jaemin', f: 'neutral', t: "...That's a very elegant way of telling us to mind our business." },
          { s: 'sunoo', f: 'neutral', t: "No. It's a very elegant way of saying we've got enough. Two's enough. Isn't it." }
        ] },
        { t: "There's no third column. There's just the two of you got right.", notes: 2, then: [
          { s: 'sunoo', f: 'neutral', t: "...Okay." },
          { n: "He smiled the sunshine smile, every tooth, and Jaemin, beside him, didn't smile at all, and looked at Solar for a second the way he'd looked at the lit window in August, with his hand halfway to somebody's sleeve." }
        ] }
      ] },
      { n: "Jaemin swung his feet off the couch. He got down on the floor, on his knees on the sticky carpet, and ducked under the table, between the legs of it, among the dropped napkins and a stray chopstick, and lay on his back, and held up his phone with the light on." },
      { s: 'jaemin', f: 'neutral', t: "Come here. Under here. I want to show you something. It's very romantic. It's under a table in a karaoke bar, so, the most romantic place in Japan." },
      { n: "She got down. It was dark under there and smelled of melon soda and old gum and floor cleaner. Sunoo came too, folding himself in on her other side, so the three of them were lying on their backs under the table like children under a bed, looking up at the underside of it, the raw wood, the staples, the dried gum like little grey moons." },
      { n: "And in the middle of it, in black marker, in two hands: *J + S.* And a date in August. And under that, in Sunoo's round letters, *here.*" },
      { s: 'sunoo', f: 'neutral', t: "We did it the night after the gate. When I didn't go in. We said, this is the only place we're friends. So we should mark it. Like the first customer's name on the wall." },
      { n: "And under *here*, there was another word." },
      { n: "Not marker. Pencil, maybe, or something like it, pressed so hard into the wood the grain had split along it. A heavy hand. Slow, careful, upright letters, like a grown-up writing on a child's lunch box. One word." },
      { n: "*stay*" },
      { n: "Solar knew the hand. She'd seen it on the back of every Tanabata strip at the shrine in July. On the guardian line of her own enrolment form. Her body knew it before she did; the cold went down her back from the nape, the old line, nape to spine, and her hands, flat on the carpet on either side of her, closed." },
      { s: 'jaemin', f: 'neutral', t: "That wasn't us. That turned up on Monday. We don't know who. Some kid, probably. Somebody in this booth on a Sunday thought it was cute." },
      { s: 'sunoo', f: 'neutral', t: "We thought about rubbing it out. And then we didn't. Because it's what we were going to write anyway." },
      // CG: eqx-under-the-table — three young people lying on their backs under a karaoke table in the dark, a phone torch lighting the raw wood above them, black marker letters J + S and 'here', and below them one word pressed deep into the grain in a heavy pencil hand; the edge of a mute screen of falling rain behind.
      { n: "They lay there. The phone torch shone up at the word. Through the floor came the bass from the next booth, a slow thump, like something very large walking a long way off." },
      { s: 'sunoo', f: 'neutral', t: "Here's the thing. Here's what we decided. On the bridge, people went. From right beside us. From the back of the line. One second there and then just their shoes." },
      { s: 'sunoo', f: 'neutral', t: "Mitsuru-senpai says one day there might be doors. Home. And everybody's talking about who'll go and who won't. And at home, Jaemin's in America, and I'm in Seoul, and we'd never even have been in the same country. There's no door that goes to a place where we're both." },
      { s: 'jaemin', f: 'neutral', t: "So we stay. Both of us. That's the plan. If a door comes, we don't go through it. Either of us. We stay together. Here. Where we're friends. Where I can keep him at arm's length forever like a very small, very nice bodyguard situation." },
      { s: 'sunoo', f: 'neutral', t: "Tell us it's okay. Tell us we're allowed. You're the only one who's in both our columns." },
      { n: "Jaemin turned his head on the carpet and looked at her. Not the pitch. Not the bit. The plain face from the gate, with the hood down." },
      { s: 'jaemin', f: 'neutral', t: "Just say it. Or don't. I'll take either. I just want to hear it from you." },
      { choose: [
        { t: "Whether you go is yours, Sunoo. And yours, Jaemin. Each of yours. Not each other's. Nobody gets to stay for somebody else.", notes: 2, tally: { choose: 1, 'asks.jaemin-sunoo': 'choose' }, then: [
          { n: "Neither of them said anything. Sunoo's face, lit from underneath by the phone, went through several things in a row and didn't settle on any of them." },
          { s: 'sunoo', f: 'sad', t: "...That's not what we asked." },
          { s: 'solar', f: 'neutral', t: "I know." },
          { n: "Jaemin was looking at the word in the wood. For a long time. Then he reached up, with the marker he'd clearly brought, uncapped it with his teeth, and under the heavy pencil, between it and the edge of the table, he wrote, smaller, in his loops: *J — mine.* And held the marker out sideways, without looking, to Sunoo." },
          { s: 'jaemin', f: 'neutral', t: "...Two charts. It's two charts. I've been doing one chart. That's the problem with the chart." },
          { n: "Sunoo took the marker. He held it over the wood for a long time, and the phone torch shook a little in Jaemin's other hand, and then he wrote, very small, *S —*, and stopped, with the marker on the wood, and the ink spreading into the grain in a little black star, and didn't finish it, and didn't take it away." },
          { s: 'sunoo', f: 'neutral', t: "...I'll finish it later. I don't know what it says yet. That's okay, right? That I don't know yet?" }
        ] },
        { t: "Stay together. Here's where you're friends.", notes: 3, tally: { cakes: 1, 'asks.jaemin-sunoo': 'yes' }, then: [
          { n: "Sunoo let out a breath like he'd been holding it since July. He laughed, wet, and put his arm over his eyes, and his other hand found Jaemin's sleeve in the dark under the table and held it." },
          { s: 'sunoo', f: 'happy', t: "Okay. Okay. Okay. That's settled. That's the agenda settled." },
          { s: 'jaemin', f: 'happy', t: "Minuted. Seconded. Carried. I'm getting it framed." },
          { n: "They lay there. Above them, the phone light on the three words, theirs and theirs and the other one, all in a column, like a list that had been agreed." },
          { n: "The phone on the wall rang. The booth phone, the front desk. Jaemin crawled out and answered it, and listened, and said *oh*, and *okay*, and *thanks*, and hung up, and stood with his hand still on it." },
          { s: 'jaemin', f: 'neutral', t: "...The room's extended. Till close. No charge. Somebody paid for the whole night." },
          { s: 'sunoo', f: 'surprised', t: "Who?" },
          { s: 'jaemin', f: 'neutral', t: "She said a lady. She said the lady said we'd want to stay." }
        ] },
        { t: "You'd go home. Both of you. You'd have to.", notes: 2, tally: { 'asks.jaemin-sunoo': 'no' }, then: [
          { s: 'sunoo', f: 'sad', t: "...I know. I know. I know that." },
          { n: "He turned onto his side, away from her, toward Jaemin, and put his forehead on Jaemin's shoulder, the way Jungwon had put his on Jay's at the gate in July, and stayed like that, and Jaemin didn't move, and didn't say anything, and after a while reached up with his free hand and turned off the phone, so it was dark under the table except for the screen's blue rain coming in round the edge." },
          { s: 'jaemin', f: 'neutral', t: "...We'll make a chart for that, then. A really sad one. With a line on it where we both go off the edge in different directions." },
          { s: 'jaemin', f: 'neutral', t: "And then we'll have this. The bit before the line. That's still a good bit. That's still the best bit I've ever been in." }
        ] }
      ] },
      { place: 'Paulownia Mall · Karaoke', time: 'Night', bg: 'paulownia-karaoke', music: 'joy', soft: true },
      { n: "They crawled out. Sunoo's knees had carpet marks on them. Jaemin's hair was full of static. He stood in the middle of the booth and looked at the table for ten, and the screen, and the remote with its yellow sticky note still on it from August, *NO UNTITLED SONGS*, and picked the remote up." },
      { s: 'jaemin', f: 'neutral', t: "Okay. I'm going to do something. Nobody laugh." },
      { n: "He scrolled. Not fast, not the way he usually scrolled, for the funniest thing, the thing that would get the room. Slowly. He went past all of the funny ones. He went past the ballad from July. He stopped on a song she didn't know, something old, a man and a guitar, and the title came up on the screen, and he stood there with the microphone in one hand and the remote in the other, and didn't pitch it." },
      { s: 'jaemin', f: 'neutral', t: "...This is the one I actually like. Not for anybody. I've never put it on at a party. It'd kill a party. It's my car song. When I drive home for break. It's very boring." },
      { n: "He sang it. Not well. Not badly. Not funny at all. He sang it the way people sing alone in a car, quietly, looking at nothing, slightly flat on the high note, and Sunoo sat on the table in his socks among the lunch boxes with his chin on his knees and listened without singing along, which on Sunoo was the loudest sound Solar had ever heard him make." },
      { n: "When it ended nobody clapped. Sunoo picked up the remote. He held it a long time. Then he chose one, too, the first song he'd chosen for himself in either life, a children's song, a silly one, about a bear family, and stood on the table and sang it, all three verses, with the actions, and halfway through Jaemin was laughing so hard he had to sit on the floor, and Solar was laughing, and Sunoo was crying a little and laughing too and kept doing the actions, *daddy bear, mommy bear*, and didn't stop on the mommy bear, and didn't stop." },
      { n: "They walked her to the monorail at eleven, one on each side, Jaemin on the outside by the road. Sunoo carried the five lunch boxes in a plastic bag, stacked, and held them against his chest the whole way, both arms, as if they were warm." },
      { s: 'sunoo', f: 'neutral', t: "I'll leave them for him at breakfast. One for each day. He'll eat them. He said yes." },
      { n: "At the gate Sunoo turned round, walking backward, and didn't wave this time. He just looked at her, the cheerful open face quiet, and held up the bag of lunch boxes a little, like a toast, and turned and went, and Jaemin went with him, close, shoulder to shoulder, at arm's length exactly, and she watched them down the platform until the doors closed, and she couldn't have said, if anyone had asked, which of the two of them was walking the other one home." }
    ] }
  ]
});
