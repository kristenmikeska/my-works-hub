/* Jaemin, living world (2026-10-22). Everything around his link (links/jaemin.js) that isn't a rank:
   A) FEMC_GAME_LINK_EXTRAS.jaemin.afterRank: texts a day or two after ranks 1, 2, 3, 4, 5, 6, 8 and 10 (format: core.js
      deliverTexts; examples in living-texts.js). They react to the scene, never to a choice in it. His texting voice:
      lowercase, warm, emoji, nicknames ("solar lee", "my lady"); never caps-lock. Solar answers like herself (lowercase, "u").
   B) FEMC_GAME_LINK_EXTRAS.jaemin.holidays (format: core.js holidayInvites / living-holidays.js):
      '11/23' Labor Thanksgiving: his Friendsgiving in the guesthouse lobby (rank 1, evening).
      '12/31' New Year's Eve: a countdown to nine on the guesthouse roof, because midnight belongs to the Dark Hour
              (rank 5, evening, flag year-goes-on).
   C) Four routines pushed onto FEMC_GAME_DAILY_LIFE (format: daily-life.js / core.js dailyFits), every one gated on his
      arrival (events: 'a4-twelve'); pre-solstice windows end 12/20, the post-solstice one needs flag 'year-goes-on':
      jaemin-rota            early, 11/17–12/20, school days: the arrival-aware one. A rota appears beside Mitsuru's
                             VISITORS whiteboard by the dorm fridge (Jihoon's RATINGS column is still there).
      jaemin-deposit         evening, 11/19–12/20: Hyein's December commission, the deposit, no friend discount.
      jaemin-president-kitchen  evening, 11/20–12/20: Jaehyun cooking in the guesthouse kitchen; the president off duty.
      jaemin-steps           after school, 12/22–1/25 (year-goes-on): Jaemin and Haechan on the dorm's front steps.
   D) Two run-ins pushed onto FEMC_GAME_RUNINS (format: living-runins.js header), never at Gekkoukan or a club:
      ri-jaemin-loyalty      after karaoke, 11/17–12/20.
      ri-jaemin-flyers       after the Strip (Hagakure, Wild-Duck, Bookworms), 12/22–2/20 (year-goes-on).
   Interactions here: Mitsuru, Jihoon's column (rota); Hyein and Hanni (deposit); Jaehyun (kitchen, Friendsgiving); Haechan
   and Chenle (steps); Minji, Chenle, Jaehyun, Hyein, Mark (gated on a4-mark) at Friendsgiving; Hanni, Hyein, Minji,
   Chenle, Junpei on New Year's Eve; Chenle in the flyers run-in. No flags are set here; nothing reads a choice from
   the link, so every scene reads right on every path. Housing: guesthouse; dorm visits end by eight on school days. */
(() => {
  const X = (window.FEMC_GAME_LINK_EXTRAS ||= {});
  const J = (X.jaemin ||= {});

  /* ── A) Texts after ranks ── */
  J.afterRank = { ...(J.afterRank || {}),
    1: { slot: 'evening', delay: 1, msgs: [{ from: 'jaemin', t: 'office hours were a SUCCESS 🎤✨' }, { from: 'jaemin', t: "chenle says the melon soda was 'adequate'. from him thats a standing ovation" }],
      reply: [{ t: 'same booth next time?', link: 'jaemin', notes: 2, then: [{ from: 'jaemin', t: 'same booth. its mine now. the clerk doesnt know yet 🤫' }] },
        { t: 'u sang the same song like four times', link: 'jaemin', notes: 1, then: [{ from: 'jaemin', t: 'it was a different song every time in my heart 💔' }, { from: 'jaemin', t: 'chenle says it was five. hes wrong. hes never wrong. it was five' }] }] },
    2: { slot: 'late', delay: 1, msgs: [{ from: 'jaemin', t: 'update: i have been lying on the lobby floor for 40 minutes' }, { from: 'jaemin', t: 'he said the music was fine. solar lee. THE MUSIC WAS FINE' }],
      reply: [{ t: 'get off the floor lol', link: 'jaemin', notes: 1, then: [{ from: 'jaemin', t: 'the desk lady put a blanket on me. im living here now. this is my floor' }] },
        { t: 'it was a good party', link: 'jaemin', notes: 3, then: [{ from: 'jaemin', t: '🥹' }, { from: 'jaemin', t: 'it was a good party' }] }] },
    3: { slot: 'late', msgs: [{ from: 'jaemin', t: 'hi. its late. doesnt matter what time' }, { from: 'jaemin', t: 'text me when ur back 🌙' }],
      reply: [{ t: 'back. im ok', link: 'jaemin', notes: 3, then: [{ from: 'jaemin', t: 'ok' }, { from: 'jaemin', t: 'ok good. sleep. headcount complete ✨' }] },
        { t: 'r u seriously still up', link: 'jaemin', notes: 2, then: [{ from: 'jaemin', t: 'occupational hazard. the social chair goes to bed last' }, { from: 'jaemin', t: 'goodnight solar lee' }] }] },
    4: { slot: 'evening', delay: 1, msgs: [{ from: 'jaemin', t: 'hey. thanks for not doing the face' }, { from: 'jaemin', t: "im not saying anything. im just saying thanks. those are different" }],
      reply: [{ t: 'which face', link: 'jaemin', notes: 2, then: [{ from: 'jaemin', t: 'the jaehyun-at-dinner one. u know the one' }, { from: 'jaemin', t: 'u did it just now. i can tell from here' }] },
        { t: 'anytime', link: 'jaemin', notes: 3, then: [{ from: 'jaemin', t: 'careful. ill hold u to that' }] }] },
    5: { slot: 'evening', delay: 2, msgs: [{ from: 'jaemin', t: 'the clerk gave me a NOD today' }, { from: 'jaemin', t: 'a nod!!! after the cups. hes never nodded. we are bonded for life now 🤝' }],
      reply: [{ t: 'he nods at everyone', link: 'jaemin', notes: 1, then: [{ from: 'jaemin', t: 'dont do this to me' }] },
        { t: 'u earned it', link: 'jaemin', notes: 3, then: [{ from: 'jaemin', t: 'we earned it' }, { from: 'jaemin', t: 'same time next week. bring nobody' }] }] },
    6: { slot: 'evening', delay: 1, msgs: [{ from: 'jaemin', t: 'he said please' }, { from: 'jaemin', t: 'i need u to know i will be thinking about this until i die' }, { from: 'jaemin', t: 'also my legs dont work. stairs are a hate crime' }],
      reply: [{ t: 'ur gonna throw him a party', link: 'jaemin', notes: 3, then: [{ from: 'jaemin', t: 'the quietest party in history. i have a NOTEBOOK' }] },
        { t: 'stretch ur calves', link: 'jaemin', notes: 1, then: [{ from: 'jaemin', t: 'i dont know where they are' }] }] },
    8: { slot: 'late', delay: 1, msgs: [{ from: 'jaemin', t: 'minji sent me take eleven' }, { from: 'jaemin', t: 'i watched it six times. i sound like a person. weird' }],
      reply: [{ t: 'u sound like u', link: 'jaemin', notes: 3, then: [{ from: 'jaemin', t: 'yeah' }, { from: 'jaemin', t: 'weird' }] },
        { t: 'chenle counted didnt he', link: 'jaemin', notes: 2, then: [{ from: 'jaemin', t: 'he sent me a spreadsheet. of my takes. with a column for "angle" 🙃' }] }] },
    10: { slot: 'evening', delay: 1, msgs: [{ from: 'jaemin', t: 'the list is final. no edits. no refunds 🎟️' }, { from: 'jaemin', t: 'ok that was a little bit of a pitch. sorry. old habits' }],
      reply: [{ t: 'its in my phone case', link: 'jaemin', notes: 3, then: [{ from: 'jaemin', t: 'good' }, { from: 'jaemin', t: 'good good good' }] },
        { t: 'expires: no', link: 'jaemin', notes: 3, then: [{ from: 'jaemin', t: 'expires: no ☀️' }] }] }
  };

  /* ── B) Holidays ── */
  J.holidays = { ...(J.holidays || {}),
    '11/23': { rank: 1, slot: 'evening', title: 'friendsgiving', place: 'Kirijo Guesthouse', time: 'Evening', bg: 'kirijo-guesthouse-lobby', music: 'joy',
      ask: "solar lee. its labor thanksgiving day. i dont know what that is. ive decided its thanksgiving. FRIENDSGIVING. guesthouse lobby. 6. bring a dish or ur heart",
      yes: 'im bringing rice. its the only dish i trust', ok: 'perfect. rice is a love language 🍗', sorry: 'cant tonight, sorry!!', no: 'ok 💔 ill save u a plate. a big one',
      scene: [
        { n: "There was no turkey. There had never been any possibility of a turkey. Jaemin had gone to the food hall under the department store at Paulownia Mall at four o'clock with his hands in his pockets and his whole heart, and come back with two rotisserie chickens in plastic domes, a bag of sweet potatoes, a cake with a strawberry on it, and the clear, haunted face of a man who had tried to explain cranberry sauce to a stranger with gestures." },
        { n: "The low glass tables in the guesthouse lobby had been pushed together into one long one and covered with the paper tablecloth from the hundred-yen shop. There were place cards. Handwritten, in capitals, a little crooked. The desk lady had her own, at the head of the table, by the palm, and had put on lipstick for it." },
        { s: 'jaemin', f: 'happy', t: "Welcome to Friendsgiving! Where we are thankful! Where we are together! Where the turkey is a chicken and we're not going to talk about it!" },
        { n: "Minji had asked to film the table before anybody sat down, and had done it slowly, end to end, the steam coming off the potatoes in the overhead light, and then put the camera away and not taken it out again. Chenle had been there since five-fifteen, because Chenle was always early, and had set every place with chopsticks and a fork both, because he'd done the math on who'd want which. Jaehyun had been handed the knife by four separate people and was carving the first chicken in silence with the focus of a surgeon, and it was, everyone agreed, beautifully carved." },
        { ifEvent: 'a4-mark', then: [
          { n: "Mark had brought a bag of mandarins and a joke about pilgrims that nobody laughed at but Jaemin, who laughed for the whole table, generously, and slapped him on the shoulder, and announced him to the room as *a man who has never once in his life been the turkey,* and Mark said thanks, man, and rubbed the back of his neck, and ate a mandarin very fast, at the end of the table furthest from Solar, where he'd sat down without anybody telling him to." }
        ] },
        { n: "Hyein had come over from the dorm with a sweet-potato dish of her own invention that she described as *a concept,* and sat down next to Jaemin, and opened her phone's notepad, and said, in a businesslike voice, that while they were all here she'd like to discuss the December piece." },
        { s: 'jaemin', f: 'neutral', t: "At the table, Hyein? On Friendsgiving?" },
        { s: 'hyein', f: 'serious', t: "You owe me money in two universes. I'll discuss it at a funeral." },
        { n: "Then Jaemin stood up on his chair, because of course he did, and tapped his paper cup with a chopstick, and said that at home there was a thing you did at this dinner, where everybody went round the table and said one thing they were thankful for, and that nobody was allowed to be funny, and that he was going first, and then he was funny, at length, for about a minute, and then wasn't." },
        { s: 'jaemin', f: 'neutral', t: "I'm thankful that everybody I was looking for is at this table. Or upstairs. Or at the dorm. Or in a tower, apparently. That's it. That's mine. Next." },
        { n: "It went round. Chenle was thankful the chickens had been on sale. Minji was thankful for the light in the lobby at night, and meant it. Hyein was thankful for deposits, pointedly. The desk lady said something long and warm that nobody understood and everybody clapped. Jaehyun, when it came to him, put down the knife, and looked at the table, and at Solar, and said, levelly, that he was thankful she was eating, and picked the knife back up, and Jaemin had to look at the ceiling for a while." },
        { s: 'jaemin', f: 'happy', t: "Solar Lee. You're up. One thing. No pressure. Some pressure. Everybody's looking at you, but in a nice way." },
        { choose: [
          { t: "The place cards. Someone wrote my name on one.", notes: 3, then: [
            { n: "She said it plainly and too fast and then wanted it back, because it was such a small thing, a folded card with *SOLAR* on it in crooked capitals by a paper plate, and the table went quiet for a second in the way a table does when somebody has accidentally said the true thing instead of the polite one." },
            { s: 'jaemin', f: 'neutral', t: "...You can keep it. The card. That's what they're for." },
            { n: "She put it in her pocket. On the walk home she found she had her hand round it, in the cold, like a ticket." }
          ] },
          { t: "That Jaehyun didn't let anyone else carve.", notes: 2, stat: { charm: 1 }, then: [
            { s: 'jaehyun', f: 'happy', t: "Nobody else could be trusted with it." },
            { s: 'jaemin', f: 'happy', t: "He's not wrong. I tried. They took it off me. Chenle took it off me. *Chenle.*" },
            { s: 'chenle', f: 'neutral', t: "You were holding it like a microphone." }
          ] },
          { t: "(Pass. Hand the turn to the desk lady again.)", notes: 2, then: [
            { n: "She bowed her head toward the end of the table and the desk lady, delighted, went again, longer this time, and touched Solar's hand at the end of it, and the whole table applauded a speech none of them had understood, and Jaemin leaned over and said *that's cheating,* and she said *that's hosting,* and he looked at her for a second like she'd stolen his best line, and let her keep it." }
          ] }
        ] },
        { n: "They ate until the chickens were bones and the cake was a strawberry and a smear. The desk lady fell asleep upright in her chair of honor. And at nine, while everybody else carried plates to the little kitchen behind the desk, Jaemin went round the long table with a garbage bag, by himself, picking up the paper cups one at a time, and looking at each one, before it went in." }
      ] },

    '12/31': { rank: 5, flag: 'year-goes-on', slot: 'evening', title: "new year's eve", place: 'Kirijo Guesthouse · Roof', time: 'Evening', bg: 'kirijo-guesthouse-roof-night', music: 'joy',
      ask: "solar lee. new years eve. guesthouse roof. 8:45 sharp. we're counting down to NINE. dont ask questions. ask questions on the roof ✨",
      yes: 'why nine', ok: 'on the roof. bring a scarf. bring two. 🎉', sorry: 'cant tonight. happy new year jaemin', no: 'happy new year solar lee. ill count one for u',
      scene: [
        { n: "The guesthouse roof wasn't meant for people. It had a water tank and a railing and a door that said something in red that Jaemin had decided meant *welcome,* and he'd carried up every folding chair in the building, and a speaker, and a plastic bag of convenience-store sparklers that Junpei had bought, which Mitsuru, informed of them in advance by Chenle, had permitted *on the condition that someone responsible holds the matches,* and that someone was Hanni." },
        { n: "The city lay all round them in the cold, lit up and humming toward the end of its year, the station below, the monorail sliding over the bay with its windows full, the long dark line of the water. Hyein had wrapped herself in two scarves and a blanket and was still complaining. Minji had her camera on the railing, not rolling, just there, like a person who'd been invited. Chenle had the stopwatch open." },
        { s: 'jaemin', f: 'neutral', t: "Okay. Okay okay okay. Gather round. Here's the thing. I'm the Social Chair. I've done a countdown every year since I was fifteen. And this city has a problem with its midnight." },
        { s: 'jaemin', f: 'serious', t: "Midnight's taken. Midnight belongs to the green and the coffins and the monster tower. Nobody's counting down to *that.* So we're counting to nine." },
        { s: 'hyein', f: 'neutral', t: "Why nine?" },
        { s: 'jaemin', f: 'happy', t: "Because at home that's when the party actually starts. Nobody good shows up before nine. Nine's the real midnight. Ask anybody." },
        { s: 'chenle', f: 'serious', t: "That's not how time works." },
        { s: 'jaemin', f: 'happy', t: "It's how *parties* work, Le. Time can take it up with me." },
        { s: 'hanni', f: 'happy', t: "And at home it's still that night anyway! So technically we're early for everything! We're early for a whole year!" },
        { n: "Jaemin pointed at Hanni with both hands like she'd scored a goal, and Hanni held up the matches like a torch, and somewhere below them in the street a man on a bicycle looked up at six people on a roof cheering about nothing at a quarter to nine and kept going." },
        { choose: [
          { t: "(Stand next to Jaemin. Count with him.)", notes: 3, then: [
            { n: "She went and stood by him at the railing, and he looked at her and grinned and didn't say anything, which she was learning was the rarest thing he did, and when Chenle called *thirty seconds* he took a breath like a man about to go underwater." }
          ] },
          { t: "Jaemin. Did you ever get your midnight? The real one?", notes: 2, then: [
            { s: 'jaemin', f: 'neutral', t: "Every year. Standing on something. Holding a mic. Counting for three hundred people." },
            { s: 'jaemin', f: 'neutral', t: "...I don't think I ever looked up. You're too busy looking at everybody's faces. Making sure they're having it." },
            { s: 'jaemin', f: 'happy', t: "So this year I'm looking up. At nine. At the sky. Hold me to it." }
          ] },
          { t: "(Take a sparkler. Hold it out to Hanni to light.)", notes: 2, then: [
            { n: "Hanni lit it with enormous care and a face like a nurse, and it caught and spat white light all at once, and Hyein screamed, and Minji's hand went to her camera and stopped, and asked, with her eyes, and Solar nodded, and somewhere in Minji's camera now there was a second of a girl on a roof holding a little fizzing star." }
          ] }
        ] },
        { s: 'chenle', f: 'neutral', t: "Ten." },
        { n: "They counted. All of them, loud, in English, on a roof in a city that was three hours off its own new year and didn't care, ten, nine, Hyein shrieking every number like it was a personal victory, Hanni counting on her fingers with the matches tucked in her fist, Chenle not counting at all, just watching the stopwatch, his lips moving very slightly with the numbers anyway, three, two." },
        { n: "At nine o'clock exactly nothing happened. No fireworks. No bells. The monorail went across the bay the same as before. And Jaemin, who had said he would, didn't look at a single face on that roof. He put his head back, and looked up, at the cold flat ordinary sky over Iwatodai with a few stars in it and a plane blinking toward somewhere, and kept looking, for a long time, with his mouth a little open, like a boy at a planetarium." },
        { s: 'jaemin', f: 'neutral', t: "Huh." },
        { s: 'jaemin', f: 'neutral', t: "...It's just sky." },
        { s: 'jaemin', f: 'happy', t: "Happy New Year. Nine o'clock. Best one I ever counted." },
        { n: "Then Junpei's sparklers went, all of them at once, Hanni lighting them as fast as people could hold them out, and for about a minute the roof was full of small white stars, fizzing and crackling and going out, and nobody had to make sure anybody was having it, because everybody was." }
      ] }
  };

  /* ── C) Routines ── */
  (window.FEMC_GAME_DAILY_LIFE ||= []).push(

    { id: 'jaemin-rota', after: '11/17', until: '12/20', slot: 'early', schoolOnly: true, events: ['a4-twelve'],
      place: 'Iwatodai Dorm · Kitchen', time: 'Early Morning', bg: 'iwatodaidorm-kitchen', scene: [
        { n: "There was a new piece of paper by the fridge. It was taped to the wall right beside Mitsuru's whiteboard, where VISITORS was written across the top in her operation-briefing hand, under which Jihoon's RATINGS column had been erased and had come back so many times that the ghost of it was permanent now, a gray smear of old scores." },
        { n: "The paper said ROTA. It had a grid. Down the side were the names of everyone at the guesthouse who came over for breakfast, in neat capitals with a ruler line under each, and across the top were the days of the week, and in each square was a time, and a job, and the jobs were *DISHES, NAPKINS, MUSIC (QUIET), VIBES,* and *TELL KOROMARU HE'S A GOOD BOY.*" },
        { n: "Mitsuru was standing in front of it in her uniform with her coffee, reading it the way she read reports from the field, all of it, top to bottom, twice, without any expression at all." },
        { s: 'mitsuru', f: 'neutral', t: "Solar. Did you put this here?" },
        { s: 'solar', f: 'neutral', t: "No." },
        { s: 'mitsuru', f: 'neutral', t: "No. It was here when I came down. At six. Which means somebody knocked on the front door before six, and somebody let them in." },
        { n: "From the lounge there was a guilty silence of the kind only Junpei could produce. Mitsuru didn't look round. She went back to the rota, and read it a third time, and then, slowly, frowned at one square in particular, the way you'd frown at a single wrong figure in a column." },
        { s: 'mitsuru', f: 'neutral', t: "He's put Jaehyun on *vibes.*" },
        { choose: [
          { t: "Is it a bad rota?", then: [
            { s: 'mitsuru', f: 'neutral', t: "No. That's what's irritating about it. It's an excellent rota. It's better than mine. Nobody is ever here on the same morning as anyone they argue with." },
            { n: "She took the pen off its string by the whiteboard, crossed out *vibes* in Jaehyun's square, wrote *DISHES* in her own hand, and capped the pen, and left the rota where it was." }
          ] },
          { t: "(Find your own name on it.)", stat: { charm: 1 }, then: [
            { n: "She wasn't a visitor, so she wasn't in the grid. But at the very bottom, under the last ruled line, in smaller capitals, as if added afterward and thought about first, there was a row by itself. *SOLAR: GUEST OF HONOR. NO JOBS. EVER.* And then, smaller still, *(she'll do them anyway).*" },
            { s: 'mitsuru', f: 'surprised', t: "...He's right. You will." }
          ] },
          { t: "(Write RATINGS back in, very small, next to Jihoon's ghost.)", then: [
            { n: "She did it with the whiteboard pen, tiny, at the edge. Mitsuru watched her do it. Mitsuru said nothing for long enough that Solar began to worry, and then turned back to her coffee, and said *I'll be erasing that,* in exactly the voice of somebody who wasn't going to, today." }
          ] }
        ] },
        { n: "When she left for school the rota was still up. By the evening someone had added a column at the end headed *NOTES,* and in it, beside Koromaru's job, in Ken's careful printing, *he knows.*" },
        { bond: { jaemin: 1 } }
      ] },

    { id: 'jaemin-deposit', after: '11/19', until: '12/20', slot: 'evening', events: ['a4-twelve'],
      place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
        { n: "Hyein had cleared the lounge table. Not tidied, cleared, everything off it, the remote and the magazines and Junpei's comic and somebody's cup, so that there was nothing on it but a sheet of notebook paper, a pen, and Hyein, sitting behind it with her hands folded like a loan officer, and across from her, at seven-fifteen on a visiting night, Jaemin, with an envelope." },
        { s: 'hyein', f: 'serious', t: "Deposit. Up front. Fifty percent. No friend discount." },
        { s: 'jaemin', f: 'neutral', t: "We're friends now? I didn't know we were friends. When did that happen? Hanni, did you know we were friends?" },
        { s: 'hanni', f: 'happy', t: "I'm not part of this! I'm a witness! I'm just witnessing!" },
        { s: 'hyein', f: 'serious', t: "We are *not* friends. That's why there's no discount. You called my wings a hazard." },
        { s: 'jaemin', f: 'neutral', t: "They were a hazard. You took out a lamp." },
        { s: 'hyein', f: 'serious', t: "The lamp was in the WAY." },
        { n: "He put the envelope on the table. It was the one Mitsuru's people gave every searcher, with the Kirijo crest on the flap, and Hyein opened it and counted the yen out in front of everybody, note by note, licking her thumb, slowly, the way she'd evidently seen someone do in a film, and when she'd finished she counted it again." },
        { s: 'hyein', f: 'neutral', t: "I don't know what this is in real money." },
        { s: 'jaemin', f: 'happy', t: "Nobody does, my lady. That's what makes it exciting." },
        { choose: [
          { t: "(Sign the paper as a witness.)", stat: { charm: 1 }, then: [
            { n: "Hyein turned the notebook paper round. It said, in her handwriting, *CONTRACT,* and under it, *one (1) December piece, festive, NOT ugly festive, NOT a department store,* and under that a line for each of them. Solar signed hers small and spiky at the bottom, *witness,* and Hanni signed beside it in round letters and drew a heart, and Hyein looked at the four signatures for a long moment like a girl looking at her own name on a shop sign." },
            { s: 'hyein', f: 'happy', t: "It's binding. It's so binding. I'm framing it." }
          ] },
          { t: "Hyein, you're good at this.", then: [
            { s: 'hyein', f: 'surprised', t: "...At what?" },
            { s: 'solar', f: 'neutral', t: "Being paid." },
            { n: "Hyein went pink from the collar up, and said she'd been practicing on Hanni, and Hanni said that was true and that she still owed for a scrunchie, and Jaemin laughed so hard he had to put his head down on the cleared table." }
          ] },
          { t: "(Ask Jaemin why he still wants it. Here.)", then: [
            { s: 'jaemin', f: 'neutral', t: "Because I ordered it. You finish what you order. You don't stop a commission because the world ended a little." },
            { s: 'jaemin', f: 'happy', t: "Also I refuse to look like a department store in two universes. One I could live with." }
          ] }
        ] },
        { n: "He left at seven fifty-eight, envelope lighter, and Hyein sat at the empty table after he'd gone, holding the counted yen in both hands, and didn't say anything for a while, which for Hyein was a lot, and then said, to nobody, *my first deposit,* very quietly, like a girl saying the name of a place she'd always wanted to go." },
        { bond: { jaemin: 1 } }
      ] },

    { id: 'jaemin-president-kitchen', after: '11/20', until: '12/20', slot: 'evening', events: ['a4-twelve'],
      place: 'Kirijo Guesthouse', time: 'Evening', bg: 'kirijo-guesthouse-night', scene: [
        { n: "There was a small kitchen behind the guesthouse front desk, meant for the desk lady's tea and nothing more, two burners and a rice cooker and a window onto the alley, and tonight Jaehyun Lee was standing in it with his sleeves rolled to the elbow, making fried rice for nine people, and Jaemin was standing in its doorway watching him do it, the way you'd watch a bear ride a bicycle." },
        { s: 'jaemin', f: 'surprised', t: "Solar. Solar, come here. Come look at this. Don't make any sudden movements." },
        { s: 'jaehyun', f: 'happy', t: "I can hear you, Na." },
        { s: 'jaemin', f: 'surprised', t: "He *cooks.* He has a *technique.* He did a thing with the pan, a flip thing, I thought he was going to throw it at me." },
        { n: "Jaehyun didn't turn round. He moved between the two burners and the cutting board with the economy of a man running a play he'd drawn up himself, egg, rice, a handful of something green, the pan tipped and turned, and there was nothing wasted in any of it, not a step, not a word." },
        { s: 'jaehyun', f: 'neutral', t: "Mitsuru's people left a cookbook in the lobby. I read it. Someone has to feed the second floor." },
        { s: 'jaehyun', f: 'neutral', t: "Na. Green onions. On the board. Thinner than that." },
        { s: 'jaemin', f: 'neutral', t: "Yes, sir." },
        { n: "He said it before he could stop it, and heard himself, and went faintly pink, and picked up the knife, and chopped green onions under the eye of his president like a boy at the world's strictest summer camp, tongue between his teeth." },
        { choose: [
          { t: "(Take over the onions. Show him.)", stat: { proficiency: 1 }, then: [
            { n: "She took the knife and did it thin and fast, the way her hands apparently knew how, and Jaehyun glanced over once, at the board, and back at the pan, and said *good,* the way he said everything, like a stock price, and Jaemin looked between the two of them like a man realizing he was the only one in the room who hadn't been raised by the same terrifying people." }
          ] },
          { t: "Jae. Is this what you're like at home?", then: [
            { s: 'jaehyun', f: 'neutral', t: "At home there's a dining hall. Nobody needs me to make rice." },
            { s: 'jaehyun', f: 'happy', t: "Here they do." },
            { n: "He tipped the rice onto the first plate, and the second, and handed the first one to her without looking, and the second to Jaemin, and Jaemin held it like it was an award." }
          ] },
          { t: "(Stand in the doorway with Jaemin. Watch.)", then: [
            { n: "She stood in the doorway beside him, shoulder to shoulder, and they watched the president of Sigma Chi cook dinner for nine people in a kitchen built for one, in socks, humming something under his breath that neither of them knew he knew, and neither of them said a word, in case he heard them and stopped." }
          ] }
        ] },
        { s: 'jaemin', f: 'neutral', t: "I'm never going to be able to look at him in a meeting again. He's going to say *sit down, Jeno,* and all I'm going to see is the flip thing." },
        { s: 'jaehyun', f: 'neutral', t: "Good. Eat." },
        { bond: { jaemin: 1 } }
      ] },

    { id: 'jaemin-steps', after: '12/22', until: '1/25', slot: 'after', events: ['a4-twelve', 'a4-household-introductions'], flags: ['year-goes-on'],
      place: 'Iwatodai Dorm · Front', time: 'After School', bg: 'iwotodaidorm-outside', scene: [
        { n: "There were two people on the dorm's front steps when she got home, sitting at opposite ends of the same step, as far apart as a step allowed. One of them was talking. The other one was Haechan." },
        { n: "Jaemin had a plastic bag of rice balls from the guesthouse desk lady between his feet, and was eating one, and narrating something with his free hand, the long story of somebody's car and a parking ticket and a goat, and Haechan was sitting with his hood up and his elbows on his knees and a rice ball in his hand he hadn't started, looking at the street, saying nothing, in the way that was its own kind of answer." },
        { s: 'jaemin', f: 'happy', t: "Solar Lee! Sit. Sit, there's a whole middle of this step nobody's using. The desk lady sent rice balls. Well. She sent them for me. I'm sending them for her. It's a chain." },
        { s: 'jaemin', f: 'neutral', t: "Chenle says eat, too. To him. He told me to say *eat* and nothing else and then leave. I'm on step two. I'm not great at step two." },
        { n: "Haechan looked at the rice ball in his hand, as if it had arrived there on its own. Then, without any comment at all, he took a bite of it." },
        { s: 'jaemin', f: 'surprised', t: "He ATE it. Haech— Haechan. Just Haechan. Haechan ate it. I'm telling Chenle. He's going to put it in a spreadsheet." },
        { s: 'haechan', f: 'neutral', t: "You talk like you're paid by the word." },
        { s: 'jaemin', f: 'happy', t: "I'm paid in *attention.*" },
        { s: 'haechan', f: 'neutral', t: "Then you're broke. Nobody here's listening." },
        { n: "He said it flat, to the street, and Jaemin laughed so loud a woman walking her dog on the other side of the road looked over, and Haechan's mouth moved at one corner, about a millimeter, and went back, and Solar was almost sure she was the only one who saw it." },
        { choose: [
          { t: "(Sit in the middle of the step.)", stat: { kindness: 1 }, then: [
            { n: "She sat in the middle, between them, and took a rice ball, and Jaemin went back to the goat, and Haechan didn't move any further away, which, for the end of a step, was moving closer." }
          ] },
          { t: "What's the goat's name?", then: [
            { s: 'jaemin', f: 'happy', t: "THANK you. Finally. Somebody who appreciates narrative. His name is *Professor.*" },
            { s: 'haechan', f: 'neutral', t: "There's no goat." },
            { s: 'jaemin', f: 'neutral', t: "There's always a goat, Haechan. You just never stay for the end of the story." }
          ] }
        ] },
        { n: "Jaemin went at four, back toward the station and the guesthouse, swinging the empty bag, walking backward for the first ten meters so he could keep talking, and then turned round, and his voice went down the street ahead of him, to the bus stop, the moon, nobody." },
        { n: "Haechan finished the rice ball. He folded the plastic wrapper into a small neat square, the way someone does when they've been raised not to leave things lying around, and put it in his pocket." },
        { s: 'haechan', f: 'neutral', t: "He counts too. Just not out loud." },
        { n: "He didn't say what. He went inside. She sat on the step a while longer in the cold with the half-eaten rice ball, looking down the street where the loud one had gone, and didn't follow either of them." },
        { bond: { jaemin: 1 } }
      ] }
  );

  /* ── D) Run-ins ── */
  (window.FEMC_GAME_RUNINS ||= []).push(

    { id: 'ri-jaemin-loyalty', who: 'jaemin', where: { acts: ['karaoke'] }, events: ['a4-twelve'],
      after: '11/17', until: '12/20', scene: [
        { n: "On her way out past the front desk she found Jaemin leaning on it on both elbows, deep in negotiation with the tired clerk, by way of a pen, a napkin, a great deal of pointing, and drawings of stars." },
        { s: 'jaemin', f: 'happy', t: "Solar Lee! Perfect. You speak human. Tell him I want a loyalty card. Ten booths, the eleventh is free. Every civilization has the loyalty card." },
        { s: 'jaemin', f: 'neutral', t: "I've drawn it for him. I've drawn him a whole card. He keeps looking at the drawing like it owes him money." },
        { n: "The clerk looked at Solar with the specific exhaustion of a man who had been shown a hand-drawn loyalty card nine times this week, and then at Jaemin, and then, slowly, reached under the counter." },
        { choose: [
          { t: "(Translate it, as best you can.)", stat: { knowledge: 1 }, then: [
            { n: "She managed most of it. The clerk listened, and nodded, and took out a little card from under the counter that already existed, and always had, with ten boxes on it, and stamped it eleven times in a row without a word, and slid it across." },
            { s: 'jaemin', f: 'surprised', t: "...He had one. The whole time. He had one the whole time and he let me draw." },
            { s: 'jaemin', f: 'happy', t: "I respect him so much. I respect him more than anyone in this country." }
          ] },
          { t: "(Draw a twelfth star on his napkin. Leave it at that.)", then: [
            { n: "She took the pen and drew one more star, slightly bigger than his, and the clerk looked at it, and at her, and, very slightly, smiled, and put the napkin under the counter with what Jaemin swore was tenderness." },
            { s: 'jaemin', f: 'happy', t: "He kept it. He's keeping it. We're getting somewhere. We're building a relationship." }
          ] }
        ] },
        { bond: { jaemin: 1 } }
      ] },

    { id: 'ri-jaemin-flyers', who: 'jaemin', where: { acts: ['hagakure', 'wildduck', 'books'] }, events: ['a4-twelve'], flags: ['year-goes-on'],
      after: '12/22', until: '2/20', scene: [
        { n: "When she came back out onto the Strip there was a boy by the lamppost on the corner handing out flyers to strangers, which in itself was not unusual, except that the flyers were handwritten, and in English, and the boy was Jaemin, bowing to each person who took one with tremendous grace and no idea at all of what the bow meant." },
        { s: 'jaemin', f: 'happy', t: "Solar Lee! Have a flyer. Have six. I made forty. Chenle photocopied them. He said *this is a waste of paper* and then did it in color." },
        { n: "The flyer said, in his capitals, *A DINNER. WITH MUSIC. (NOT TOO LOUD.)* and a place, the guesthouse, and no date, only *SOON,* underlined, and at the bottom, smaller, *by request of the president,* and a small drawing of a man in an apron that was clearly, unmistakably, Jaehyun." },
        { s: 'jaemin', f: 'neutral', t: "I know nobody here can read it. That's fine. It's not for them. It's so the street knows something's happening. You put the word out. The word goes where it goes." },
        { choose: [
          { t: "(Take half the stack. Hand them out with him.)", stat: { courage: 1 }, then: [
            { n: "They did the whole corner. She bowed the right way, and he copied her, a beat late, and by the time the stack was gone an old man from the bookshop had taped one to his window, upside down, and a schoolgirl had asked Solar in careful English whether *not too loud* was a band." },
            { s: 'jaemin', f: 'happy', t: "It's a band now. It's a band. I'm the manager." }
          ] },
          { t: "Does Jaehyun know you drew him in an apron?", then: [
            { s: 'jaemin', f: 'neutral', t: "He's going to find out the way everybody finds out things. Slowly, and then all at once, from a flyer on a lamppost." },
            { s: 'jaemin', f: 'happy', t: "He'll say *Na.* Just *Na.* It'll be the best moment of my life." }
          ] }
        ] },
        { bond: { jaemin: 1 } }
      ] }
  );
})();
