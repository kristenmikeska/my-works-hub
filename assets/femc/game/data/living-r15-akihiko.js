/* Ranks 11-15 batch (2026-10-21): the living world around Akihiko's last five ranks, and "the Gekkoukan buzz" (Kat): his
   fan club, the rumors, Yukari's disgust (fake), Junpei's "you love me more, though. Right?", all year, changing with how far
   into his link Solar is. Formats: core.js link-format header, data/daily-life.js header (routines), living-runins.js
   (run-ins), living-texts.js (texts), living-nights.js (late nights). Loaded after living-march.js, before the link files.
   - Routines `r15-akihiko-buzz-*` (FEMC_GAME_DAILY_LIFE), gated with ranks / ranksBelow / route ('romance' | 'friend' |
     'none' = no route yet) on akihiko: spring (the fan club notices her; a note in her shoe locker), July (the tournament
     rumor in class), September (the roof: a couple confirmed, or friends denying), November-December (the newsletter for
     a couple; the best-friend belt in the lounge), January (the Valentine's countdown), February (the chocolate logistics;
     the buzz from outside for someone who never got close; the fan club's last newsletter). The fan club is four
     second-years (rank 5's "Fan Club Girl"); their president is Ōta. Solar's classmates Maki and Sonoda sit behind her.
     living-march.js's 'second-button' (3/1-3/4) and the 2/14 holiday follow on from these and are not touched.
   - Run-in `r15-akihiko-ri-birthday` (the mall, 9/14-9/21: the fan club shopping for his birthday, 9/22).
   - Ambient texts `r15-am-akihiko-*` (Yukari, Junpei, the S.E.E.S. group) for the same beats.
   - afterRank 11-15: his texts at five (lowercase). 15 has heading variants.
   - Late night `r15-aki-ln-button` (February, kind 'dorm'): the second button, sewn on tighter.
   Romance stays non-explicit. Shinjiro is in a coma at Tatsumi Memorial until 2/27 ('shinji-awake'); nothing here says
   either way except under that flag. February content gates on 'year-goes-on'. */
(() => {
  const W = window;
  const FC = { ota: 'Ōta', hiyori: 'Hiyori' };
  const CLASS = { maki: 'Maki', sonoda: 'Sonoda' };

  /* ── Routines: the Gekkoukan buzz ── */
  (W.FEMC_GAME_DAILY_LIFE ||= []).push(
    // Spring: he nodded at the transfer student. The fan club has noticed.
    { id: 'r15-akihiko-buzz-nod', after: '4/22', until: '5/16', slot: 'lunch', schoolOnly: true, ranks: { akihiko: 1 }, ranksBelow: { akihiko: 4 },
      place: 'Gekkoukan High · 2F Hallway', time: 'Lunch', bg: 'school-hallwaysecondfloor', cast: FC, scene: [
        { n: "Yukari caught her on the second-floor landing on the way back from the vending machines, to give her back a borrowed pen, which was the official reason, and kept her there by the stairs to give her the real one, in a low voice, with her back to the wall, like somebody passing on news of a war." },
        { s: 'yukari', f: 'serious', t: "You've been noticed. I'm sorry. I should've warned you. It's not your fault. It's the nodding." },
        { n: "On the landing below, two second-years in matching hair clips had stopped dead and were looking up at Solar the way you look at a car that has parked in your space. One of them was writing something down." },
        { s: 'ota', t: "That's her. The transfer student. He nodded at her at the gate. Twice. On Monday and on Thursday." },
        { s: 'hiyori', t: "Somebody's brother says she goes running with him. At five in the morning. Nobody goes running with him. He runs alone. It's in the newsletter." },
        { s: 'yukari', f: 'serious', t: "Sanada-senpai has a fan club. It has a newsletter. It has a president. I'm not joking. I wish I was joking. I'm so embarrassed to live in the same building as him I could die." },
        { choose: [
          { t: "(Nod at them. Twice.)", stat: { courage: 1 }, then: [
            { n: "She nodded at them. Twice. The two girls went white and then pink and then fled down the stairs in a clatter of indoor shoes, and Yukari put her face in her hands and said *Solar, no, you've started a war*, and was laughing too hard to say anything else for most of lunch." }
          ] },
          { t: "(Smile at them. The nice one.)", stat: { charm: 1 }, then: [
            { n: "She smiled down at them, the good one, warm and easy and well-made, and they didn't know what to do with it and went away confused. Yukari watched them go, and then looked at Solar sideways for a second longer than the moment needed, the way you look at something you're going to think about later." }
          ] }
        ] }
      ] },

    // Late spring: a note in her shoe locker.
    { id: 'r15-akihiko-buzz-locker-note', after: '5/12', until: '6/27', slot: 'morning', schoolOnly: true, ranks: { akihiko: 3 }, ranksBelow: { akihiko: 5 },
      place: 'Gekkoukan High · Shoe Lockers', time: 'Morning', bg: 'school-entryhallway', scene: [
        { n: "There was a note in her shoe locker, folded into a small tight triangle the way girls folded notes to pass in class, written in pink pen in careful round handwriting that had pressed so hard it came through the other side." },
        { n: "*Sanada-senpai trains ALONE. It's in the newsletter. For his FOCUS.* Under that, smaller, in a different pink, *sorry.* Under that, crossed out but not very hard, *(not sorry)*." },
        { s: 'junpei', f: 'surprised', t: "Whoa. Hate mail? Already? Leader, it took me a whole year to get hate mail, and it was from a teacher." },
        { choose: [
          { t: "(Write back underneath. *He runs with me. Sorry.*)", stat: { courage: 1 }, then: [
            { n: "She wrote it under the crossed-out line, in pencil, and folded the note back into its triangle and left it in her own locker, where whoever had left it would look. The next morning it was gone. The morning after that there was another one. It said *ok fine.* and nothing else, and she kept it, for no reason she could have explained, in the back of her handbook." }
          ] },
          { t: "(Give it to Junpei. Let him handle it.)", stat: { charm: 1 }, then: [
            { n: "Junpei read it aloud in the voice of a newsreader, twice, then folded it into a paper plane and flew it the length of the entrance hall, where it landed at the feet of Akihiko, who had just come in from his run. He picked it up. He read it. He looked confused for a long time and then put it in his pocket, and nobody ever found out what he did with it." }
          ] }
        ] }
      ] },

    // July, finals week (exam days have a lunch slot; days off don't): the tournament, second row.
    { id: 'r15-akihiko-buzz-second-row', after: '7/13', until: '7/16', slot: 'lunch', ranks: { akihiko: 5 },
      place: 'Gekkoukan High · Classroom', time: 'Lunch', bg: 'gekkoukan-classroom-day', cast: CLASS, scene: [
        { n: "Finals week, the long empty hour after the morning paper, and the classroom smelled of erasers and nerves and somebody's cold noodles. Maki, who sat behind her, turned round in her chair with her flashcards forgotten in her hand." },
        { s: 'maki', t: "You were at the tournament. Second row. Don't say you weren't, my cousin was in the third row, under the banner. She says he looked at you. After. Before he looked at anybody." },
        { s: 'sonoda', t: "He looked at the scoreboard. I was there too. Nobody ever believes me, because I'm a boy and I care about boxing." },
        { choose: [
          { t: "He looked at the scoreboard.", stat: { charm: 1 }, then: [
            { n: "Sonoda was so grateful he gave her the last of his onigiri. Maki didn't believe a word of it and said so, and then said, quieter, that it was nice, whatever it was, and turned back to her flashcards, and didn't turn round again until the bell." }
          ] },
          { t: "(Change the subject to the afternoon paper.)", stat: { knowledge: 1 }, then: [
            { n: "They spent the rest of the gap going through chemistry instead, which Maki said was a cowardly move, and was right. Solar got eleven out of twelve on it the next morning and couldn't have told you which of the three of them that was a win for." }
          ] }
        ] }
      ] },

    // September, a couple since the roof (rank 7's turn): the whole school knows by Thursday.
    { id: 'r15-akihiko-buzz-roof-couple', after: '9/2', until: '10/2', slot: 'lunch', schoolOnly: true, ranks: { akihiko: 7 }, route: { akihiko: 'romance' },
      place: 'Gekkoukan High · Rooftop', time: 'Lunch', bg: 'rooftop-day', scene: [
        { n: "By Thursday the whole school knew. Nobody could say how. A first-year had been on the stairs, or a teacher at a window, or the typhoon had carried it. The version going round the second floor had them out in the rain, which was wrong, and kissing, which was wronger, and Yukari had heard it four times before lunch and came up to the roof with her bento looking like a woman who'd been personally betrayed." },
        { s: 'yukari', f: 'serious', t: "Is it true? Don't answer. I can see your face. Oh my god. I live with both of you. I share a bathroom with one of you." },
        { s: 'yukari', f: 'blushing', t: "I'm so happy for you. I'm so disgusted. I don't know which. I'm going to be sick and then I want details." },
        { n: "Junpei arrived with three melon breads and a look of deep theatrical grief. Then the roof door banged and Akihiko came out with a protein shake, saw who was there, and stopped like a man walking into a glass door." },
        { s: 'junpei', f: 'sad', t: "Senpai. I heard. Everybody heard. I just have one question. As a man. As your kohai. As the guy who carried your bag that one time." },
        { s: 'junpei', f: 'happy', t: "You love me more, though. Right?" },
        { s: 'akihiko', f: 'blushing', t: "...I'm going to eat over there." },
        { choose: [
          { t: "(Pat the concrete next to you. Make him sit here.)", stat: { courage: 1 }, then: [
            { n: "He sat. Right there, next to her, in front of both of them, red to the ears, drinking his shake with tremendous concentration, and Yukari made a long, sincere retching noise into her lunch, and Junpei said *that's not a no, senpai, I noticed that's not a no*, and the wind came over the fence with the last of the summer in it." }
          ] },
          { t: "Tell him, senpai. He deserves to know.", stat: { charm: 1 }, then: [
            { s: 'akihiko', f: 'neutral', t: "Junpei. I love you a normal amount." },
            { s: 'junpei', f: 'surprised', t: "A NORMAL amount?" },
            { n: "Yukari laughed so hard she had to lie down on the concrete. Akihiko ate his lunch over by the fence after all, with his back to them, and his ears gave him away the whole time." }
          ] }
        ] }
      ] },

    // September, rank 7 but no route yet: the same rumor, denied.
    { id: 'r15-akihiko-buzz-roof-denial', after: '9/2', until: '10/2', slot: 'lunch', schoolOnly: true, ranks: { akihiko: 7 }, route: { akihiko: 'none' },
      place: 'Gekkoukan High · Rooftop', time: 'Lunch', bg: 'rooftop-day', scene: [
        { n: "The version going round the second floor by Thursday had the two of them on the roof in the typhoon, which was wrong, and his hand on her face, which was nearly right, and Yukari had heard it four times before lunch, and came up to the roof with her bento and sat down and looked at Solar over the lid like a detective." },
        { s: 'yukari', f: 'serious', t: "Somebody saw you on the roof the other day. With Sanada-senpai. And he touched your HAIR. Is that true? Don't make the face. You're making the face." },
        { s: 'junpei', f: 'happy', t: "It's not true. Senpai doesn't touch hair. Senpai touches protein. And me, on the shoulder, really hard, because he loves me more. Right? I'm his favorite. Everybody knows." },
        { choose: [
          { t: "It was windy. He was being helpful.", stat: { charm: 1 }, then: [
            { s: 'yukari', f: 'serious', t: "He was being HELPFUL." },
            { s: 'junpei', f: 'happy', t: "See? Helpful. That's a senpai thing. He's helpful at me all the time." },
            { n: "Yukari looked at her a long time over the top of her bento, the way you look at a puzzle that's missing a piece you know perfectly well is under the sofa, and said *okay*, in the voice that meant she'd be back for it." }
          ] },
          { t: "(Eat your lunch. Say nothing. Go a little pink.)", stat: { courage: 1 }, then: [
            { n: "She ate her lunch and said nothing and went, she could feel it, a little pink. Yukari made a noise like a kettle. Junpei looked from one of them to the other and slowly, visibly, worked something out, and put down his melon bread, and said *wait*, and then *WAIT*, and then nothing at all, for once, for nearly a minute." }
          ] }
        ] }
      ] },

    // November-December, the best-friend route: Junpei and the belt.
    { id: 'r15-akihiko-buzz-best-friends', after: '11/6', until: '11/30', slot: 'evening', ranks: { akihiko: 9 }, route: { akihiko: 'friend' }, events: ['a4-household-introductions'],
      place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
        { n: "Junpei had been sulking since dinner. It was a big, elaborate, public sulk, conducted from the armchair with his cap pulled down over his eyes and his arms folded, and it was aimed with total precision at Akihiko, who was on the lounge floor doing push-ups and hadn't noticed." },
        { s: 'junpei', f: 'sad', t: "Best friend. He told Ken. Ken told me. *Best friend.* Like it's a title. Like there's a belt." },
        { s: 'junpei', f: 'sad', t: "Senpai. I've been working that angle since APRIL. I let you wake me up at five. Twice." },
        { s: 'akihiko', f: 'neutral', t: "You went back to bed. Twice." },
        { s: 'junpei', f: 'happy', t: "But you love me more, though. Right? Say it. In front of the dog." },
        { choose: [
          { t: "Junpei can have best kohai. That's a separate belt.", stat: { charm: 1 }, then: [
            { s: 'junpei', f: 'surprised', t: "...There's a separate belt?" },
            { s: 'akihiko', f: 'neutral', t: "There's a separate belt." },
            { n: "Junpei took his cap off and held it over his heart and was unbearable about it for a week. Yukari, from the stairs, said she had never been so disgusted by three people at once, and came down and sat on the arm of the sofa to watch." }
          ] },
          { t: "(Get down and do push-ups next to Akihiko. Out-count him.)", stat: { courage: 1 }, then: [
            { n: "She got down next to him. He saw, and grinned at the carpet, and sped up, and so did she, and they counted out loud together, faster and faster, until he lost count laughing at forty-one. Junpei, abandoned in the armchair, said this was exactly what he meant, that it was a cult, and then got down on the floor beside them and did four." }
          ] }
        ] }
      ] },

    // November-December, a couple: the fan club newsletter makes a statement.
    { id: 'r15-akihiko-buzz-newsletter', after: '11/6', until: '12/19', slot: 'lunch', schoolOnly: true, ranks: { akihiko: 9 }, route: { akihiko: 'romance' },
      place: 'Gekkoukan High · Classroom', time: 'Lunch', bg: 'gekkoukan-classroom-day', cast: CLASS, scene: [
        { n: "The fan club's newsletter came out on Mondays, photocopied, folded in three, left on desks on the second floor by people nobody ever saw. This Monday a copy had made it up to the third floor, and Maki had it open on her desk like a broadsheet, reading aloud to the room." },
        { s: 'maki', t: "*The Club has received confirmation from a reliable source.* That's you, by the way. You're the reliable source. *The Club respects the senpai's choices. The Club wishes them well.*" },
        { s: 'maki', t: "And then, underlined twice. *The Club does not wish them TOO well.*" },
        { s: 'sonoda', t: "There's a crossword on the back. One down is your name. It's the only clue they didn't make hard." },
        { choose: [
          { t: "(Do the crossword.)", stat: { knowledge: 1 }, then: [
            { n: "She did it in four minutes. Twelve across was SHAKE. Seven down was FIVE AM. Her own name went in at one down, in a pencil she borrowed from Sonoda, and Maki watched her write it with enormous satisfaction and pinned the finished thing to the board at the back of the classroom, where it stayed until a teacher noticed it in January." }
          ] },
          { t: "Tell them I wish them well too.", stat: { charm: 1 }, then: [
            { s: 'maki', t: "...Not TOO well?" },
            { s: 'solar', f: 'neutral', t: "Exactly the right amount." },
            { n: "Maki wrote it down word for word, and said she had a cousin on the committee, and it would be in next week's issue, and it was, on the front, in a box, with a border of small hearts that had been drawn on and then, on reflection, colored in black." }
          ] }
        ] }
      ] },

    // Third term: the Valentine's countdown on the second floor.
    { id: 'r15-akihiko-buzz-countdown', after: '1/8', until: '1/29', slot: 'lunch', schoolOnly: true, ranks: { akihiko: 10 }, flags: ['year-goes-on'],
      place: 'Gekkoukan High · 2F Hallway', time: 'Lunch', bg: 'school-hallwaysecondfloor', scene: [
        { n: "Third term, and the noticeboard outside 2-F had a calendar pinned to it with February the fourteenth circled in red, and under the circle, in pink, a number. A countdown. Somebody changed it every morning before homeroom. Nobody had ever seen who." },
        { s: 'junpei', f: 'happy', t: "It's for Valentine's. The fan club's going big. It's his last one here. It's like the World Cup. And I'm going in. I've decided." },
        { s: 'yukari', f: 'serious', t: "Going in WHERE." },
        { s: 'junpei', f: 'happy', t: "I'm giving senpai chocolate. Homemade. To win. He loves me more, he just doesn't know it yet. I'm going to make him know it." },
        { s: 'yukari', f: 'serious', t: "I'm going to transfer schools. I'm going to transfer countries." },
        { ifRomance: 'akihiko', then: [
          { s: 'yukari', f: 'neutral', t: "You'd have to get past his girlfriend, you know. She's standing right there." },
          { n: "Junpei looked at Solar. Solar looked back. He swallowed. *We can share*, he said, very quietly, and Yukari put her forehead against the noticeboard and left it there." }
        ], else: [
          { s: 'yukari', f: 'neutral', t: "You'd have to get past his best friend. She's standing right there. She has a stopwatch." },
          { n: "Junpei looked at Solar. Solar looked back. *Co-best*, he said, hopefully, and Yukari put her forehead against the noticeboard and left it there." }
        ] },
        { choose: [
          { t: "I'll help you temper the chocolate.", stat: { proficiency: 1 }, then: [
            { s: 'junpei', f: 'happy', t: "LEADER." },
            { n: "Yukari said she wanted it on the record that she was against this, and that she was against it in writing, and then, quietly, as they were going back to class, asked what time." }
          ] },
          { t: "(Change the countdown yourself. One less.)", stat: { courage: 1 }, then: [
            { n: "She took the pen off its string and crossed out the number and wrote the next one down, a day early, and walked off. The next morning somebody had corrected it back, very neatly, and added a small, wounded *?!*." }
          ] }
        ] }
      ] },

    // February, close to him: the chocolate logistics at his shoe locker.
    { id: 'r15-akihiko-buzz-chocolate-prep', after: '2/8', until: '2/13', slot: 'morning', schoolOnly: true, ranks: { akihiko: 10 }, flags: ['year-goes-on'],
      place: 'Gekkoukan High · Shoe Lockers', time: 'Morning', bg: 'school-entryhallway', cast: FC, scene: [
        { n: "Ōta was at the third-year shoe lockers before eight with a tape measure. She was measuring Akihiko's locker. Inside and out. Hiyori stood behind her writing the numbers on a clipboard, and neither of them seemed to feel any of this needed explaining." },
        { s: 'ota', t: "Capacity. Last year it was thirty-one boxes and the door wouldn't shut and three of them were crushed. We're coordinating this year. It's his last one here. It has to be right." },
        { ifRomance: 'akihiko', then: [
          { s: 'ota', t: "...Solar-senpai. Is it all right? With you? We'd like your permission. As a courtesy. The Club voted on it." }
        ], else: [
          { s: 'ota', t: "...Solar-senpai. You'd know. What does he actually like? Not protein. Every single person gives him protein." }
        ] },
        { choose: [
          { t: "(Hold the other end of the tape measure.)", stat: { kindness: 1 }, then: [
            { n: "She held the end of the tape against the back of his locker while Ōta read off the depth, and the height, and the diagonal, which Hiyori said was important, and when they were done Ōta bowed to her, very slightly, the way you'd bow to a colleague, and the next week's newsletter thanked *a reliable source* for *technical assistance*." }
          ] },
          { t: "Dark. Plain. He'll say he can't eat it in season, and then he'll eat it.", stat: { charm: 1 }, then: [
            { s: 'hiyori', t: "...She knows he eats it." },
            { n: "Ōta wrote it down. She underlined *then he'll eat it*. She looked at Solar for a moment over the clipboard with an expression that had a great deal going on in it, envy and relief and a sort of grudging professional respect, and then went back to measuring." }
          ] }
        ] }
      ] },

    // February, never close to him (rank 4 or under): the buzz from the outside.
    { id: 'r15-akihiko-buzz-outsider', after: '2/8', until: '2/13', slot: 'lunch', schoolOnly: true, met: ['akihiko'], ranksBelow: { akihiko: 5 }, flags: ['year-goes-on'],
      place: 'Gekkoukan High · 2F Hallway', time: 'Lunch', bg: 'school-hallwaysecondfloor', scene: [
        { n: "The second floor at lunch in the week before Valentine's was a war zone, and Solar, who had only ever been at the edge of this particular war, watched it from the edge, from the window by the stairs, with Yukari." },
        { n: "Akihiko came down the corridor with his bag over his shoulder and his eyes on the far stairs, like a man crossing a field he knew to be mined. Three second-years drifted after him at a distance. A fourth stepped out of a classroom door in front of him with a box held out in both hands and her eyes shut. And Junpei came out of nowhere and got there first." },
        { s: 'junpei', f: 'happy', t: "Senpai! Senpai. It's your last Valentine's here. I just need to know before I spend my money. You love me more, though. Right?" },
        { s: 'akihiko', f: 'neutral', t: "Junpei. I have a test." },
        { s: 'yukari', f: 'serious', t: "I'm so disgusted. I'm so disgusted by all of it. Look at them. Look at HIM. He doesn't even know what's happening to him." },
        { n: "She didn't stop watching, though. Neither did Solar. She knew him. She'd known him since a floor in April, and she lived two floors under him, and she'd run with him at five more mornings than she'd ever admit to Yukari. But this had never been hers, the corridor and the boxes and the noise, and she watched him go down it in a cloud of second-years like a man wading out of the sea, and found she couldn't have said what she felt about that, exactly, or why." },
        { choose: [
          { t: "(Watch it all from the window like a nature documentary.)", stat: { charm: 1 }, then: [
            { n: "She narrated it under her breath, for Yukari, in a low hushed voice, *and here the male, sensing danger, makes for the stairwell*, and Yukari laughed so hard she had to hold on to the window frame, and three second-years turned to glare at them, and it was the best lunch either of them had had all term." }
          ] },
          { t: "(Rescue him. Ask him something about running.)", stat: { courage: 1 }, then: [
            { n: "She stepped into the corridor and asked him, loudly, how far it was to the bridge and back. He looked at her with enormous relief and told her, at length, with splits, while the second-years waited and then gave up and went, and the girl with the box glared at Solar like it was April. At the stairs he said *thanks*, low, a little surprised, and looked at her a second longer than a thanks needed. She found she didn't mind the glaring as much as she'd have guessed." }
          ] }
        ] }
      ] },

    // February, after the banner (rank 14): the fan club's final issue.
    { id: 'r15-akihiko-buzz-final-issue', after: '2/20', until: '2/26', slot: 'lunch', schoolOnly: true, ranks: { akihiko: 14 }, flags: ['year-goes-on'],
      place: 'Gekkoukan High · Rooftop', time: 'Lunch', bg: 'rooftop-day', scene: [
        { n: "Yukari came up to the roof with the fan club's newsletter held out in front of her at arm's length, between two fingers, like something the cat had brought in. ISSUE 47, it said across the top, in pink. FINAL ISSUE. A FOND FAREWELL." },
        { s: 'yukari', f: 'serious', t: "Somebody left it on my desk. On purpose. I've never been so disgusted in my life. I've read it four times." },
        { ifRomance: 'akihiko', then: [
          { s: 'yukari', f: 'neutral', t: "*The Club wishes the senpai and Solar-senpai every happiness.* And then in brackets. *(Within reason.)*" },
          { s: 'yukari', f: 'blushing', t: "There's a drawing of you two. On the back. It's not good. It's not good at all. I'm keeping it forever." }
        ], else: [
          { s: 'yukari', f: 'neutral', t: "*Honorary President: Solar-senpai (confirmed).* There's a photo of you. It's from the side. You look like you're about to tell somebody off." },
          { s: 'yukari', f: 'blushing', t: "It's the best picture anyone's ever taken of you. I'm keeping it forever." }
        ] },
        { s: 'junpei', f: 'sad', t: "There's a page about me. Page four. It's called *Iori-kun: A Cautionary Tale.*" },
        { choose: [
          { t: "(Ask for a copy. For the shelf.)", stat: { charm: 1 }, then: [
            { n: "Yukari gave her the copy without a word, which from Yukari was a speech, and Solar folded it in three and took it home and put it on the shelf above her desk, between the red gloves and the wraps, where it didn't fit at all and stayed anyway." }
          ] },
          { t: "(Read page four out loud. Slowly.)", stat: { courage: 1 }, then: [
            { n: "She read page four out loud, slowly, with feeling, the whole thing, including the footnotes, while Junpei lay on the concrete with his cap over his face saying *libel, it's libel*, and Yukari ate her lunch in tiny, ecstatic bites and didn't interrupt once." }
          ] }
        ] }
      ] }
  );

  /* ── Run-in: the fan club, shopping for his birthday (9/22) ── */
  (W.FEMC_GAME_RUNINS ||= []).push(
    { id: 'r15-akihiko-ri-birthday', who: 'akihiko', where: { areas: ['mall'] }, slot: 'after', after: '9/14', until: '9/21', ranks: { akihiko: 5 }, cast: FC, scene: [
      { n: "On her way out, by the fountain, there was a committee in session. Ōta and Hiyori and two of the others, on the edge of the fountain in their uniforms with a catalogue open across their four laps, arguing in low urgent voices about protein." },
      { s: 'ota', t: "Solar-senpai. Oh. Oh, thank god. It's his birthday on Tuesday. The twenty-second. We've got four thousand yen and no consensus." },
      { s: 'hiyori', t: "I said a towel. With his name on it. Embroidered." },
      { s: 'ota', t: "Everybody gives him a towel. He has eleven towels. You'd know. Wouldn't you. What does he actually want?" },
      { ifRomance: 'akihiko', then: [
        { n: "They were asking his girlfriend what to get him. They all knew it, and were asking anyway, with total seriousness and great courage, and Solar felt something in her chest go warm and slightly ridiculous." }
      ] },
      { choose: [
        { t: "New hand wraps. Red. He'll pretend he doesn't need them.", stat: { kindness: 1 }, then: [
          { s: 'ota', t: "...Red. Why red?" },
          { s: 'solar', f: 'neutral', t: "He just likes red." },
          { n: "Ōta looked at her for a long moment the way you look at somebody who knows the answer to a question you didn't think had one, and wrote *RED* in the catalogue margin and underlined it, and the committee rose as one and went off toward the sports shop, and Hiyori turned round halfway there and waved." }
        ] },
        { t: "Honestly? A quiet afternoon. You can't buy that.", stat: { charm: 1 }, then: [
          { s: 'hiyori', t: "...That's so sad. That's the saddest thing I've ever heard." },
          { s: 'ota', t: "We could not go to the shoe lockers. On the day. As a gift." },
          { n: "They looked at each other. It was clearly the hardest thing the committee had ever proposed. They voted on it there by the fountain, a show of hands, three to one, and Hiyori was the one, and cried about it a bit, and they bought him a towel anyway, as a backup." }
        ] }
      ] },
      { later: { delay: 2, slot: 'evening', msgs: [{ from: 'akihiko', t: 'the fan club got me red hand wraps. or nothing. or a towel. i lost track' }, { from: 'akihiko', t: 'somebody told them something. was it you' }] } },
      { bond: { akihiko: 1 } }
    ] }
  );

  /* ── Texts ── */
  const X = (W.FEMC_GAME_LINK_EXTRAS ||= {});
  const A = (t) => ({ from: 'akihiko', t });
  const R = (t, notes, then) => ({ t, link: 'akihiko', notes, then: then.map(A) });
  X.akihiko ||= {};
  X.akihiko.afterRank = { ...(X.akihiko.afterRank || {}),
    // 2/1 the shoe lockers, the bench, the gate.
    11: { slot: 'early', msgs: [A('5.'), A("kondo dropped his elbow in my dream. i yelled. i woke up junpei")],
      reply: [R('5.', 3, ['good.']), R('u dream about kondos elbow??', 2, ['every night. it follows me', "don't tell him. he'll get ideas"])] },
    // 2/6 the whole team on the river, dinner.
    12: { slot: 'early', msgs: [A('5.'), A("junpei texted me from the stairs. he says his legs don't work"), A("they work. he's coming")],
      reply: [R('ill bring koro', 3, ["koro's already at the door. he's been there since 4", "he heard us. he's very proud"]), R('hes NOT coming', 2, ["he is. i'm carrying him", 'like a bag. to the right floor this time'])] },
    // 2/12 her classroom, the roof.
    13: { slot: 'early', msgs: [A('5.'), A('your desk has a dent where you put your elbow'), A("i noticed. i'm not apologizing")],
      reply: [R('creep', 2, ["it's a good dent", 'a hard-working dent']), R('u can have the chair. im not using it', 3, ['i graduate soon', "i'll take the dent"])] },
    // 2/19 the banner, Hagakure.
    14: { slot: 'early', msgs: [A('5.'), A('four second-years said good morning to me at the gate. in a line. like a drill'), A("i don't know what's happening")],
      reply: [R('ur in good hands', 3, ['...yeah', 'i know']), R('theyre MY club now', 2, ["i know. that's what's scaring me"])] },
    // 2/26 the record board, the river.
    15: { slot: 'early', msgs: [A('5.'), A("last week of this as a student. it's the same river. i checked")],
      reply: [R('5.', 3, ['good.']), R('itll still be the same river after', 2, ["i know. that's why i'm still texting"])],
      variants: {
        stay: { msgs: [A('5.'), A("and tomorrow. and the day after. i'm not checking anymore. i know")],
          reply: [R('5.', 3, ['good.', "i'm out front"]), R('u can sleep in once. after graduation', 2, ['no', "i'll sleep in when you do"])] },
        R: { msgs: [A('5.'), A("i'm out front. you don't have to come down")],
          reply: [R('5.', 3, ['good.']), R('im already up', 2, ['i know. i heard your door', 'the whole floor heard your door'])] },
        S: { msgs: [A('5.'), A("i'm out front. you don't have to come down")],
          reply: [R('5.', 3, ['good.']), R('im already up', 2, ['i know. i heard your door', 'the whole floor heard your door'])] },
        H: { msgs: [A('5.'), A("i'm out front. you don't have to come down")],
          reply: [R('5.', 3, ['good.']), R('im already up', 2, ['i know. i heard your door', 'the whole floor heard your door'])] },
        true: { msgs: [A('5.'), A("it's warmer. you can feel it. the river smells different")],
          reply: [R('5.', 3, ['good.']), R('what does it smell like', 2, ['mud. something green', "spring, probably. i'm not good at smells"])] }
      } }
  };

  // Ambient: the buzz by text.
  const T = W.FEMC_GAME_TEXTS;
  if (T) (T.ambient ||= []).push(
    { id: 'r15-am-akihiko-tournament', thread: 'yukari', from: '7/12', to: '7/19', rank: { akihiko: 5 }, msgs: [
      { from: 'yukari', t: "so. the entire second floor is saying you're dating akihiko-senpai" },
      { from: 'yukari', t: 'i told them absolutely not. she has taste' }, { from: 'yukari', t: '...you have taste, right?' }
    ], reply: [{ t: 'we run. thats it', then: [{ from: 'yukari', t: "at FIVE. that's not running. that's a cult" }] },
      { t: 'would it be so bad', then: [{ from: 'yukari', t: "i'm throwing my phone in the river" }, { from: 'yukari', t: "ok i'm back. YES it would be so bad. for ME. i live there" }] }] },
    { id: 'r15-am-akihiko-roof', thread: 'sees', from: '9/3', to: '9/20', rank: { akihiko: 7 }, route: { akihiko: 'romance' }, msgs: [
      { from: 'junpei', t: 'BREAKING NEWS. a first year saw senpai and our leader on the roof. HOLDING HANDS' },
      { from: 'yukari', t: "junpei that's not news. that's a crime scene" }, { from: 'fuuka', t: "i think it's sweet :)" },
      { from: 'junpei', t: 'somebody forward this to senpai. ask him who he loves more. ask him for me' }
    ], reply: [{ t: 'who was the first year', then: [{ from: 'junpei', t: 'SOURCES ARE PROTECTED' }, { from: 'yukari', t: "it was the whole school, junpei. the source is the whole school" }] },
      { t: '(Leave it on read.)', silent: true, then: [{ from: 'yukari', t: "she left it on read. that's a yes" }, { from: 'junpei', t: 'NOOOOO' }] }] },
    { id: 'r15-am-akihiko-belt', thread: 'junpei', from: '11/6', to: '12/12', rank: { akihiko: 9 }, route: { akihiko: 'friend' }, msgs: [
      { from: 'junpei', t: "so senpai says you're his BEST FRIEND now" }, { from: 'junpei', t: 'like with a capital B' },
      { from: 'junpei', t: "i've been working that angle since april. i'm not mad. i'm devastated" }
    ], reply: [{ t: 'ur his favorite junior tho', then: [{ from: 'junpei', t: 'favorite JUNIOR' }, { from: 'junpei', t: "i'll take it. i'm getting it engraved" }] },
      { t: 'shared custody?', then: [{ from: 'junpei', t: 'every other weekend. i get him on protein days' }, { from: 'junpei', t: "...wait that's every day" }] }] },
    { id: 'r15-am-akihiko-final-issue', thread: 'yukari', from: '2/22', to: '3/1', rank: { akihiko: 14 }, flag: 'year-goes-on', msgs: [
      { from: 'yukari', t: 'the fan club put out a final issue. somebody left one on my desk' },
      { from: 'yukari', t: "there's a whole page about you. i've never been so disgusted. i read it four times" }
    ], reply: [{ t: 'frame it', then: [{ from: 'yukari', t: "already did. it's on the fridge" }, { from: 'yukari', t: 'junpei put a sticker on it. a dog' }] },
      { t: 'is there a page about junpei', then: [{ from: 'yukari', t: 'page four' }, { from: 'yukari', t: "it's called a cautionary tale" }] }] }
  );

  /* ── A February late night (kind 'dorm'): the second button ── */
  X.akihiko.lateNights = [...(X.akihiko.lateNights || []),
    { id: 'r15-aki-ln-button', kind: 'dorm', rank: 11, after: '2/2', until: '3/3', flag: 'year-goes-on', when: 'quiet', place: 'Iwatodai Dorm · Kitchen', time: 'Late Night', music: 'night', scene: [
      { n: "One in the morning, and the kitchen light was on, and he was at the table in a T-shirt with his uniform jacket spread out in front of him like a patient on a table, and a needle, and a reel of black thread, and the face of a man defusing something." },
      { s: 'akihiko', f: 'neutral', t: "Second button's loose. I'm fixing it. Don't look." },
      { n: "It was the one over the heart. Somebody had been at it, maybe, in a corridor, in a crowd, or it was just three years old, the way everything on that jacket was three years old, the cuffs gone shiny and the elbows thin. He'd threaded the needle on what was clearly the eleventh attempt. The sewing kit was open beside him, a tin with a cat on the lid." },
      { s: 'akihiko', f: 'neutral', t: "Shinji's. He keeps it in the drawer with the spoons. He'd kill me. He'd do it in about four seconds, too. I've been here twenty minutes." },
      { choose: [
        { t: "(Take the needle. Do it for him.)", notes: 2, then: [
          { n: "She took the needle out of his fingers, gently, the way you'd take something sharp off a child, and sat down and sewed the button on, through and through and round the shank, the way her hands apparently knew how, and bit the thread off at the end. He watched every stitch the way he watched a combination." },
          { ifRoute: 'romance', then: [
            { s: 'akihiko', f: 'blushing', t: "...That's on there forever now. Nobody's getting that off. Not with scissors." },
            { s: 'solar', f: 'neutral', t: "That was the idea." },
            { n: "He looked at the button. He looked at her. He went red from the collar up, slowly, as the idea arrived, and put the jacket on right there over his T-shirt, at one in the morning, and buttoned it, just that one, and sat there in it, and didn't take it off until she'd gone up." }
          ], else: [
            { s: 'akihiko', f: 'happy', t: "...That's better than Shinji's. Don't tell him I said that. Don't tell anybody." },
            { n: "He tugged the button, hard, twice, to test it, the way he tested tape on a wrap, and it held, and he looked so pleased about it that she didn't tell him that before she'd taken over he'd stitched the lining to the pocket, which she could see from there, and which she'd fix tomorrow." }
          ] }
        ] },
        { t: "(Sit across from him. Thread the next needle when he drops this one.)", notes: 2, then: [
          { n: "She sat across the table and held the reel, and when he dropped the needle, which he did twice, she found it, and threaded it, and handed it back, and he did the whole button himself, badly and very thoroughly, with the tip of his tongue between his teeth, and it took forty minutes and it would never, ever come off." },
          { s: 'akihiko', f: 'happy', t: "There. That's not going anywhere. Spreadsheet or no spreadsheet." },
          { s: 'solar', f: 'neutral', t: "What spreadsheet?" },
          { s: 'akihiko', f: 'neutral', t: "...Forget I said that." }
        ] }
      ] }
    ] }
  ];
})();
