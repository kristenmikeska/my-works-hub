/* Danielle, living world (2026-10-22, Kat's new links). Data only; formats in core.js (deliverTexts / afterRank, holidayInvites,
   dailyLife / dailyFits, runInDue). Load after daily-life.js and living-runins.js (they assign their arrays; this file pushes).
   Her link: links/danielle.js (Devil, searcher, Runners; arrival a4-light-on, 11/10 late, by 12/13; flag arrived-danielle).
   - afterRank (ranks 1-10): texts a day or two after each rank. They react to the scene, never to a choice in it, so every
     path reads right. Danielle texts with capitals and periods; Solar texts lowercase (Kat's ruling). Replies name the link.
   - holidays: '1/11' Coming of Age Day (rank 5; furisode, photographs) and '2/14' Valentine's Day (rank 7; a ledger of who gave
     whom chocolate). Both after the solstice, so both carry flag year-goes-on; ♪ come from the choices' notes (finishHoliday). Jaemin / Chenle lines are gated ifEvent a4-twelve.
   - routines (FEMC_GAME_DAILY_LIFE), every one gated events ['a4-light-on'], windows 28-35 days, none past 12/20:
       danielle-ledger     11/12-12/16 early, school days (the arrival-aware one): the dorm's VISITORS whiteboard grows a
                           column in a hand nobody knows; Mitsuru, Junpei.
       danielle-sisters    11/14-12/18 evening: Danielle at the dorm door before eight; Hanni and Hyein (they won't say why
                           in front of Solar).
       danielle-signature  11/19-12/20 after school: the guesthouse front step, Jaehyun ("Danielle."), Solar watching.
       danielle-two-cameras 11/21-12/20 after school: the riverside, Minji (two cameras, one that asks first).
   - run-ins (FEMC_GAME_RUNINS), never at Gekkoukan or a club, each ends { bond: { danielle: 1 } }:
       ri-danielle-greengrocer   the Strip (any Strip activity), 11/12-1/31: her bargaining for the guesthouse.
       ri-danielle-lost-property Paulownia Mall (any mall activity), 11/12-1/31: the police box's lost-property book (Officer
                                 Kurosawa, cast id from core.js CAST; no portrait, so no face).
   Canon guard (Runners, Ch 66): Hanni, Hyein and Minji know she runs the accounts and will not say so in front of Solar;
   Jaehyun, Jaemin and Chenle don't know. Nothing here states the thing she knows about Solar, or anything about Solar and
   Haechan, the recording, Mark's arrangement or the doorstep. Faces for danielle (no portrait yet): neutral, happy, sad,
   serious, surprised, flustered. Mitsuru: neutral, sad, surprised. */
(() => {
  const W = window;
  const X = (W.FEMC_GAME_LINK_EXTRAS ||= {});
  const D = (X.danielle ||= {});

  /* ── Texts after each rank ── */
  D.afterRank = { ...(D.afterRank || {}),
    1: { delay: 1, slot: 'evening', msgs: [{ from: 'danielle', t: 'You went through the north exit at 4:41.' }, { from: 'danielle', t: "I didn't write it down. I just remembered it. That's worse, isn't it." }],
      reply: [{ t: 'were u watching', link: 'danielle', notes: 2, then: [{ from: 'danielle', t: 'Everyone was watching. I was just the only one who knew it.' }] },
        { t: 'stop timing me', link: 'danielle', notes: 1, then: [{ from: 'danielle', t: "I don't time you. I time the gates. You keep walking through them." }] }] },
    2: { delay: 1, slot: 'evening', msgs: [{ from: 'danielle', t: 'Nineteen left on the first one.' }, { from: 'danielle', t: "I'm being selective. Minji would approve. Don't tell her I said that." }],
      reply: [{ t: 'what did u use the other 8 on', link: 'danielle', notes: 2, then: [{ from: 'danielle', t: 'The escalator. Mitsuru\'s car. A pigeon with a limp. All news.' }] },
        { t: 'dont take any of me', link: 'danielle', notes: 1, then: [{ from: 'danielle', t: "I can't promise that. It's a small city." }] }] },
    3: { delay: 1, slot: 'evening', msgs: [{ from: 'danielle', t: 'The egg column balances.' }, { from: 'danielle', t: "Somebody underlined a word in my heading. I've decided to take it as a compliment." }],
      reply: [{ t: 'it wasnt one', link: 'danielle', notes: 2, then: [{ from: 'danielle', t: "I know. That's what makes it fun." }] },
        { t: 'acting is still something', link: 'danielle', notes: 2, then: [{ from: 'danielle', t: "That's exactly what I said. Out loud. To nobody. It was very satisfying." }] }] },
    4: { delay: 1, slot: 'evening', msgs: [{ from: 'danielle', t: 'The board is down again.' }, { from: 'danielle', t: "It'll be up by breakfast. Tell Hyein. She'll want to be awake for it." }],
      reply: [{ t: 'leave hyein alone', link: 'danielle', notes: 2, then: [{ from: 'danielle', t: "I have never once gone near Hyein. Hyein comes near me. Loudly." }] },
        { t: 'mitsuru reads every card u know', link: 'danielle', notes: 3, then: [{ from: 'danielle', t: 'I know.' }, { from: 'danielle', t: 'I write the last one for her.' }] }] },
    5: { delay: 1, slot: 'evening', msgs: [{ from: 'danielle', t: "Your brother's faster on the way down." }, { from: 'danielle', t: "Most people are. Nobody wants to be seen taking stairs slowly." }],
      reply: [{ t: 'why were u really there', link: 'danielle', notes: 2, then: [{ from: 'danielle', t: 'The grocery fund, Solar. You saw the form.' }, { from: 'danielle', t: 'It had a line for a signature and everything.' }] },
        { t: 'u could just say hi to him like a person', link: 'danielle', notes: 3, then: [{ from: 'danielle', t: 'I did say hi. I said it about the grocery fund.' }] }] },
    6: { delay: 1, slot: 'late', msgs: [{ from: 'danielle', t: "Don't mention it to anyone." }, { from: 'danielle', t: "I'm fine." }],
      reply: [{ t: 'ok', link: 'danielle', notes: 2, then: [{ from: 'danielle', t: 'Good.' }] },
        { t: 'u said that already', link: 'danielle', notes: 3, then: [{ from: 'danielle', t: "Then it's true twice." }, { from: 'danielle', t: 'Goodnight, Solar.' }] }] },
    7: { delay: 2, slot: 'evening', msgs: [{ from: 'danielle', t: "I'm not in the habit of repeating an offer." }, { from: 'danielle', t: "I'm only reminding you one was made. In writing, this time. People forget the ones that weren't." }],
      reply: [{ t: 'noted', link: 'danielle', notes: 2, then: [{ from: 'danielle', t: "Good. You're learning the vocabulary." }] },
        { t: 'my answer doesnt change', link: 'danielle', notes: 2, then: [{ from: 'danielle', t: "Answers don't. Prices do." }] }] },
    8: { delay: 1, slot: 'evening', msgs: [{ from: 'danielle', t: "Three prints didn't go on the board." }, { from: 'danielle', t: "You don't need to know which. You won't ask. That's what I like about you this month." }],
      reply: [{ t: 'i wasnt going to ask', link: 'danielle', notes: 3, then: [{ from: 'danielle', t: 'I know. I wrote that down too.' }] },
        { t: 'u kept one of me didnt u', link: 'danielle', notes: 1, then: [{ from: 'danielle', t: "I keep one of everyone. Don't flatter yourself." }] }] },
    9: { delay: 1, slot: 'evening', msgs: [{ from: 'danielle', t: 'Mitsuru has asked for her column back.' }, { from: 'danielle', t: "I said I'd think about it. I'm still thinking. It's a very good column." }],
      reply: [{ t: 'give it back', link: 'danielle', notes: 2, then: [{ from: 'danielle', t: "Eventually. Everything goes back eventually. That's what a ledger is for." }] },
        { t: 'u like having it', link: 'danielle', notes: 2, then: [{ from: 'danielle', t: "I like having things. It isn't a character flaw, Solar. It's a hobby." }] }] },
    10: { delay: 2, slot: 'evening', msgs: [{ from: 'danielle', t: 'The overpass bench is yours on Tuesdays and Fridays. I decided.' }, { from: 'danielle', t: "Don't thank me. It's a terrible seat on Fridays. The 4:20 is always late on Fridays." }],
      reply: [{ t: 'thank u', link: 'danielle', notes: 2, then: [{ from: 'danielle', t: 'I said not to.' }] },
        { t: 'and the other days', link: 'danielle', notes: 3, then: [{ from: 'danielle', t: "The other days I'm using it." }] }] }
  };

  /* ── Holidays ── */
  D.holidays = { ...(D.holidays || {}),
    '1/11': { rank: 5, flag: 'year-goes-on', title: 'coming of age day', place: 'Naganaki Shrine', time: 'Daytime', bg: 'outside-shrine-day', music: 'day',
      ask: "Coming of Age Day. Every twenty-year-old in this city is at the shrine in silk they'll never wear again. I have a full roll. Come and hold my coffee.",
      yes: 'ok. ill hold the coffee', ok: "Eleven o'clock. The torii. I'll be the one already there.", sorry: 'cant today, sorry', no: 'Of course. I\'ll caption them myself. I always do.',
      scene: [
        { n: "Naganaki Shrine on Coming of Age Day was a garden that had decided to walk around. Furisode everywhere, long swinging sleeves in red and peony pink and a blue so deep it went black in the shade of the trees, white fur stoles round every neck, hair piled up and pinned with silk flowers, and under all of it the same nervous, delighted, slightly frozen twenty-year-old faces, being photographed by their mothers on the steps every three feet." },
        { n: "Danielle stood at the bottom of the steps with the disposable camera and her coffee and her back very straight, and handed Solar the coffee without looking at her, and began." },
        { s: 'danielle', f: 'neutral', t: "Eleven red so far. Four rented. You can tell from the obi, the rented ones are always tied the same way, by the same tired woman at the same shop at six in the morning." },
        { s: 'danielle', f: 'neutral', t: "That one's the eldest daughter. That one's wearing her mother's and hates it. That one's going to cry before noon and it's going to be about a boy who isn't here." },
        { s: 'danielle', f: 'happy', t: "At home they'd make a whole thing of this. Turning twenty in public, with everybody looking. They'd love it." },
        { n: "She said *they*. Solar noticed she said *they*, and held the coffee, and didn't ask." },
        { n: "A family stopped them halfway up, a father with a small silver camera and a daughter in pale green, all four of them in a row on the steps, and the father held the camera out to Danielle with a little bow and a question, and Danielle took it, and took their photograph, and it took her a long time, because she moved them, gently, one step up, one to the left, the mother's hand off the daughter's shoulder and onto her arm, the light behind them, until it was right." },
        { n: "It was, Solar could tell from where she stood, the best photograph that family was ever going to have of that day. They thanked her four times. They would never know her name." },
        { choose: [
          { t: "You did that for free.", notes: 2, stat: { charm: 1 }, then: [
            { s: 'danielle', f: 'neutral', t: "I did it properly. That's different from free." },
            { s: 'danielle', f: 'happy', t: "And now somewhere in this city there's a photograph with my framing on it that I'll never have to sign. That's not free, Solar. That's distribution." }
          ] },
          { t: "Which one would you have worn?", notes: 3, then: [
            { n: "Danielle looked over the whole garden of them, slowly, the way she looked at a page." },
            { s: 'danielle', f: 'neutral', t: "The navy. The plain one, by the water basin. Nobody's photographed her once all morning." },
            { s: 'danielle', f: 'neutral', t: "She'll have the whole day to herself. Imagine." },
            { n: "She lifted the disposable, and aimed it at the girl in navy, and held it there, and didn't press anything, and lowered it again, and Solar watched her do it and didn't understand it at all, and suspected Danielle didn't either." }
          ] },
          { t: "(Hold the coffee. Watch her work.)", notes: 3, stat: { kindness: 1 }, then: [
            { n: "She held the coffee. It went cold. Danielle took nineteen photographs in an hour, and threw none of them away because she couldn't, and every one of them, Solar was sure, was going to be true, and arranged, and on time." },
            { s: 'danielle', f: 'neutral', t: "You're a good assistant. You don't talk. Nobody at home ever lets me have a good assistant." }
          ] }
        ] },
        { n: "On the way down she stopped on the bottom step, and looked back up the whole long stair of silk and fur and mothers, and said, to nobody, that it had been a good roll, and then she took her coffee back out of Solar's hands and drank it cold without complaint, which was the most surprising thing she'd done all day." }
      ] },
    '2/14': { rank: 7, flag: 'year-goes-on', title: "valentine's day", place: 'Kirijo Guesthouse', time: 'Daytime', bg: 'kirijo-guesthouse-day', music: 'joy',
      ask: "Valentine's Day. I'm keeping the ledger. Somebody has to. Come and witness it, it doesn't count unless there's a witness.",
      yes: 'ok. ill witness', ok: 'Common room. Bring nothing. Especially not chocolate, it complicates the columns.', sorry: 'cant today sorry', no: "That's fine. You're still in the ledger. Everybody's in the ledger.",
      scene: [
        { n: "The guesthouse common room on the fourteenth smelled of oranges and the heater and, faintly, under it, of the cheap chocolate that had been arriving in the building all morning in small bright boxes, and at the long table under the window Danielle had a fresh sheet of paper ruled into columns. GIVEN. RECEIVED. RETURNED. NOTES." },
        { s: 'danielle', f: 'happy', t: "Valentine's here runs one way. Girls give, boys receive. Next month the boys pay it back. It's the most honest holiday I've ever encountered. It's just invoicing." },
        { n: "The ledger was already half full. Jihoon had received four boxes and claimed six. Junpei had received one, from the desk lady, and had cried. Under J. LEE (1F), the figure was fourteen, which Danielle had circled once, and beside it, in NOTES, *shrine steps*." },
        { ifEvent: 'a4-twelve', then: [
          { n: "N. JAEMIN had given thirty-one, to everybody, from a single enormous bag, and had told Danielle to write *it's a brand* in the notes, and she had. ZHONG C. had received two and had returned both on the spot with a protein bar each and the words *wrong person*, which Danielle had also written down, verbatim, and underlined." }
        ] },
        { n: "And at the very bottom of GIVEN, in the same small upright hand as everything else, one line. *Anonymous. 1. Recipient, J. Lee.*" },
        { n: "Solar looked at it. Danielle saw her look at it. Danielle's face did nothing at all." },
        { s: 'danielle', f: 'neutral', t: "It's a ledger. Somebody gave something. It goes in." },
        { n: "From the doorway Hyein, who had come over from the dorm with a box of friend chocolate for Minji and absolutely no intention of being in this room, stopped, and pointed at the sheet without coming one step closer." },
        { s: 'hyein', f: 'serious', t: "Put me down for zero. To her. Underline it." },
        { s: 'danielle', f: 'happy', t: "Already underlined, Hyein. I did it this morning. I know my readers." },
        { n: "Hyein left. The door didn't slam, which was worse, and somewhere down the hall Hanni's voice said something low and reasonable, and Hyein's said something that wasn't." },
        { s: 'danielle', f: 'neutral', t: "And you? For the ledger. Who are you giving to?" },
        { choose: [
          { t: "Everyone at the dorm. Obligation chocolate.", notes: 3, stat: { kindness: 1 }, then: [
            { s: 'danielle', f: 'happy', t: "Giri. Oh, I approve of giri. A whole category of chocolate for people you owe. This country understands money in a way nobody at home ever has." },
            { n: "She wrote *Solar (dorm). Giri. All.* in GIVEN, and drew a neat bracket round the whole dorm, as if it were a single account." }
          ] },
          { t: "Nobody.", notes: 2, then: [
            { s: 'danielle', f: 'neutral', t: "Nobody." },
            { s: 'danielle', f: 'happy', t: "Interesting. Nobody's been very popular this year." },
            { n: "She wrote it down. Solar couldn't see what she wrote. It was longer than *nobody.*" }
          ] },
          { t: "That's not going in your ledger.", notes: 3, stat: { courage: 1 }, then: [
            { s: 'danielle', f: 'neutral', t: "Everything goes in the ledger, Solar. You just don't get to see the line." },
            { s: 'danielle', f: 'happy', t: "But fine. I'll leave yours blank. A blank is information too. Ask anyone." }
          ] }
        ] },
        { n: "When Solar stood to go, Danielle reached into the folder without looking and slid something across the table. A single small square of chocolate in gold foil, the cheapest kind from the konbini by the station, with a receipt folded once and taped to the back of it." },
        { s: 'danielle', f: 'neutral', t: "Giri. I owe you a coffee. By your count, not mine." },
        { s: 'danielle', f: 'neutral', t: "Don't make it anything. It's in the ledger. It's paid." },
        { n: "Solar took it. On the walk home she unfolded the receipt. Forty yen. On the back, in pencil, *Owed to S. Settled. D.M.* She stood on the corner by the station reading it twice, and couldn't decide whether she'd been given something or had something taken, and ate the chocolate anyway, and it was terrible, and she finished it." }
      ] }
  };

  /* ── Routines (daily-life format) ── */
  (W.FEMC_GAME_DAILY_LIFE ||= []).push(
    // The arrival-aware one: a few days after the girl from the gate got her key, the VISITORS whiteboard grows a column.
    { id: 'danielle-ledger', after: '11/12', until: '12/16', slot: 'early', schoolOnly: true, events: ['a4-light-on'],
      place: 'Iwatodai Dorm · Kitchen', time: 'Early Morning', bg: 'iwatodaidorm-kitchen', scene: [
        { n: "The VISITORS whiteboard by the fridge had a new column." },
        { n: "Mitsuru's was there, in her briefing hand, who was coming over from the guesthouse and when, and *out by eight on school days* underlined twice. Jihoon's RATINGS was there, for the fourth time that month, because nothing could kill it. And between them, ruled perfectly straight in pencil, as if with the edge of a folder, a third heading in a small, upright, cheerful hand that nobody in the building wrote in. BALANCE." },
        { n: "Under it, beside every visitor's name, a figure in yen. Breakfasts, it seemed. Rice, eggs, the good jam. *Jihoon, 1,240. Jungwon, 0 (brought his own). Minji, 380.* And at the bottom, under a line, *Dorm residents: see me.*" },
        { s: 'mitsuru', f: 'neutral', t: "Whose handwriting is this." },
        { n: "It wasn't a question. Mitsuru stood in front of the board in her uniform with her bag on her shoulder and the eraser in one hand, and read the column top to bottom, the way she read anything, entirely, and Junpei, at the table, put his toast down very slowly." },
        { s: 'junpei', f: 'surprised', t: "Dude. It wasn't there last night. I was the last one up. It was NOT there." },
        { s: 'junpei', f: 'neutral', t: "...Was it? It was so neat I think my eyes skipped it. It looks like it came with the board." },
        { choose: [
          { t: "(Say nothing. Eat your breakfast.)", then: [
            { n: "She said nothing. She knew. She didn't know how she knew. Something about the straightness of the line, a girl at a gate with a folder under her arm at midnight asking whether there was a ledger. Mitsuru looked at her over the board for exactly one second, and Solar had the feeling her silence had been entered in a column of its own." }
          ] },
          { t: "It's Danielle's.", stat: { courage: 1 }, then: [
            { s: 'mitsuru', f: 'neutral', t: "...Yes. I thought so. I wanted to see if you would say it." },
            { s: 'mitsuru', f: 'neutral', t: "She was here for twenty minutes last night, before eight. She asked for a glass of water. I watched her drink it in the hall." },
            { n: "Mitsuru looked at the board again, with something in her face that was very nearly professional respect, and very much not approval." }
          ] },
          { t: "(Check your own line.)", stat: { charm: 1 }, then: [
            { n: "There was no line for her. Dorm residents, see me. She looked for a long time. Then, very small, at the bottom edge of the board, almost in the frame, in pencil, *S. (dorm). Pending.*" },
            { s: 'junpei', f: 'surprised', t: "Pending WHAT? Leader. What are you pending?" }
          ] }
        ] },
        { n: "Mitsuru erased BALANCE, top to bottom, in one long stroke, and RATINGS too while she was there, and put the eraser back on its little ledge, and left for school. The next morning RATINGS was back. So was BALANCE. BALANCE had been updated." },
        { bond: { danielle: 1 } }
      ] },

    // Hanni and Hyein: open hostility, and they won't tell Solar why in front of her.
    { id: 'danielle-sisters', after: '11/14', until: '12/18', slot: 'evening', events: ['a4-light-on'],
      place: 'Iwatodai Dorm · Front', time: 'Evening', bg: 'iwotodaidorm-outside', scene: [
        { n: "At twenty to eight there was a knock on the front door, the visitor's knock, three precise taps, and by the time Solar came down the stairs Hanni had already opened it, and was standing in the doorway with one hand on the frame, not stepping back, and Hyein was behind her in the hall with a pincushion on her wrist like a bracer." },
        { n: "Danielle was on the step with a paper bag of receipts held in both hands." },
        { s: 'danielle', f: 'happy', t: "Hanni. The dorm's share of the guesthouse groceries, for Mitsuru. Itemized. I've highlighted the ones Junpei will argue with." },
        { s: 'hanni', f: 'neutral', t: "Mitsuru's out. I'll give it to her." },
        { s: 'danielle', f: 'neutral', t: "I'd rather hand them to her myself. Receipts are personal." },
        { s: 'hyein', f: 'serious', t: "Receipts are NOT personal." },
        { s: 'danielle', f: 'happy', t: "Hyein. You've done something to your hair. Brave." },
        { n: "Hyein's hand went to her hair. Then it came down again, hard, and made a fist round the pincushion, and Solar watched a pin go into her own palm and Hyein not notice." },
        { s: 'hanni', f: 'serious', t: "I'll give them to her, Danielle. Goodnight." },
        { n: "She held her hand out. Not for the bag, at first. Just out, flat, palm up, in the doorway, until Danielle put the bag in it, and Hanni's fingers closed, and Danielle looked past her shoulder up the stairs at Solar and smiled, all of it, every corner." },
        { s: 'danielle', f: 'neutral', t: "Solar. You look tired. You always looked tired in November." },
        { n: "Hanni shut the door. Not hard. She didn't need to. Then she stood with her forehead nearly on it, the bag of receipts in one hand, and breathed out through her nose, long and slow, the way you let air out of something so it won't burst." },
        { choose: [
          { t: "What did she do to you?", then: [
            { n: "Hanni and Hyein looked at each other. The long look, the practiced one. Then Hanni turned round, and put the bag on the hall table, and squared it, carefully, with both hands." },
            { s: 'hanni', f: 'neutral', t: "Ask me again at home, Sol." },
            { s: 'hyein', f: 'sad', t: "Ask ME again at home. I'll do a presentation. With slides." },
            { n: "Neither of them was joking, and both of them were trying to make it sound like they were, and Solar stood on the bottom stair and let them, because they so badly wanted her to." }
          ] },
          { t: "(Help Hanni put the chain on the door.)", stat: { kindness: 1 }, then: [
            { n: "There was a chain on the dorm's front door that nobody ever used. Solar slid it into its track without saying anything. Hanni looked at it, and then at her, and laughed, once, short and wet, and didn't take it off." },
            { s: 'hanni', f: 'neutral', t: "...Yeah. Okay. Thank you." }
          ] },
          { t: "Hyein, your hand's bleeding.", then: [
            { s: 'hyein', f: 'surprised', t: "What? Oh my God. Oh my God, I didn't even— she did that. She did that with her MOUTH." },
            { s: 'hanni', f: 'neutral', t: "Kitchen. Plaster. Come on." },
            { n: "They went to the kitchen. Solar picked the bag of receipts up off the hall table to take it to Mitsuru's desk and found, folded once on the top, a small note in pencil. *For Mitsuru. Junpei's are highlighted. Thank you for the water.* She hadn't been given any water. Solar stood in the hall and couldn't work out who the note was a joke on." }
          ] }
        ] },
        { bond: { danielle: 1 } }
      ] },

    // Jaehyun: polite to her, unaware. Solar watching, and the back of her neck.
    { id: 'danielle-signature', after: '11/19', until: '12/20', slot: 'after', events: ['a4-light-on'],
      place: 'Kirijo Guesthouse · Front', time: 'After School', bg: 'elegant-buildingentrance', scene: [
        { n: "She'd come to the guesthouse to drop off a phone charger Minji had left at the dorm, and was still at the curb when she saw them. Danielle on the front step with a clipboard. Jaehyun coming up the street from the direction of the shrine, sleeves shoved to the elbow, steam coming off him in the cold." },
        { n: "Danielle had been there, Solar was fairly sure, for some time. She had the look of someone who'd been sitting very still for exactly as long as was needed." },
        { s: 'danielle', f: 'happy', t: "Jaehyun. Perfect timing. I've reorganized the shoe rack. By floor. You're top left, first floor. I just need your initials so nobody argues." },
        { s: 'jaehyun', f: 'neutral', t: "...Danielle." },
        { n: "He took the clipboard. He read it, the whole sheet, which Solar was beginning to understand he would do with a menu, and then initialed it beside his own name, which she'd printed in capitals, J. LEE (1F), and handed it back." },
        { s: 'jaehyun', f: 'neutral', t: "Thank you. That's very organized." },
        { s: 'danielle', f: 'happy', t: "Somebody has to." },
        { n: "The back of Solar's neck went hot and tight in one thin line. She didn't know why. She was standing at a curb in a city she lived in, watching her brother initial a sheet about shoes, and some part of her body was standing somewhere else entirely, very still, with its back to a wall, watching a girl watch him." },
        { choose: [
          { t: "(Go and stand on the step next to Jaehyun.)", then: [
            { n: "She went up the path and stood on the step beside him without a word. He looked down at her. Danielle looked at the two of them, side by side, and her smile went up by a single degree, as if a figure had come out exactly where she'd projected it." },
            { s: 'danielle', f: 'neutral', t: "Solar. You're in a column too, you know. Dorm. Guest privileges. Very generous ones." }
          ] },
          { t: "Jae, you don't have to sign things for her.", stat: { courage: 1 }, then: [
            { s: 'jaehyun', f: 'neutral', t: "It's a shoe rack, Solar." },
            { s: 'danielle', f: 'happy', t: "It's a shoe rack, Solar." },
            { n: "They said it at the same time. Jaehyun looked faintly surprised. Danielle didn't." }
          ] },
          { t: "(Stay at the curb. Watch.)", then: [
            { n: "She stayed at the curb. Jaehyun went in. Danielle didn't watch him go, very carefully, and then, when the door had shut behind him, she looked straight down the path at Solar, as if she'd known she was there the whole time, and lifted the clipboard an inch, in a sort of salute." }
          ] }
        ] },
        { n: "Inside, by the door, the shoe rack had a label on every cubby in the small upright hand. Top left said *J. LEE (1F)*. The cubby beside it, which had been empty, now said *D. MARSH*." },
        { bond: { danielle: 1 } }
      ] },

    // Minji: two cameras, one that asks first.
    { id: 'danielle-two-cameras', after: '11/21', until: '12/20', slot: 'after', events: ['a4-light-on'],
      place: 'Iwatodai · Riverside', time: 'After School', bg: 'park-2', scene: [
        { n: "Minji was filming the river. Low light, the water gone the color of a knife, a heron standing in the shallows on one leg doing absolutely nothing with total commitment, and she'd asked Solar, before she'd even said hello, whether she minded being in the edge of the frame. Solar didn't mind." },
        { n: "Then a small dry click from behind them, no flash, and Solar didn't have to turn round." },
        { s: 'danielle', f: 'happy', t: "Don't stop on my account. I'm just documenting the documentarian." },
        { s: 'minji', f: 'neutral', t: "You didn't ask." },
        { s: 'danielle', f: 'neutral', t: "If I'd asked, it wouldn't have been true." },
        { s: 'minji', f: 'neutral', t: "It'd have been more true. It'd be true and they'd know." },
        { s: 'danielle', f: 'happy', t: "Minji. Nobody knows. That's the whole job." },
        { n: "Minji didn't lower the camera. She didn't turn it on Danielle, either. She kept it on the heron, steady, and Solar watched her jaw do something small, the way it did in the lab when someone on the other team got a kill they hadn't earned, and then go still again, on purpose, the way a captain makes it go still." },
        { choose: [
          { t: "Minji. Ask her.", stat: { courage: 1 }, then: [
            { n: "Minji understood at once. She turned, and brought the camera round, slowly, and held it at her chest, not raised, and looked at Danielle over it." },
            { s: 'minji', f: 'neutral', t: "Can I film you, Danielle?" },
            { s: 'danielle', f: 'surprised', t: "..." },
            { s: 'danielle', f: 'neutral', t: "No." },
            { s: 'minji', f: 'neutral', t: "Okay." },
            { n: "She lowered it. That was all. Danielle stood on the riverbank with the disposable in her hand and an expression Solar had never seen on her, and it took Solar a second to understand what she was looking at. It was, as far as she knew, the first time anyone had asked Danielle Marsh for anything and then simply taken her at her word." }
          ] },
          { t: "(Step behind Minji, out of Danielle's frame.)", then: [
            { n: "She stepped behind Minji. Minji, without looking, shifted half a pace to her left, so that she was squarely between them, and went on filming the heron." },
            { s: 'danielle', f: 'happy', t: "Oh, that's lovely. Two of you in one frame and neither of you in it. I'll caption it later." }
          ] },
          { t: "(Stay where you are. Let both of them have their shot.)", then: [
            { n: "She stayed. Minji's camera on the river with Solar in the edge of it, asked for. Danielle's behind, not asked for at all. Two cameras. She stood between them and found that she could feel the difference on her skin, one like sun, one like a draft from a door somebody had left open." }
          ] }
        ] },
        { n: "Danielle left first. She always left first. Minji filmed the heron until it gave up and flew, low and slow over the water, and then she lowered the camera and looked at Solar." },
        { s: 'minji', f: 'neutral', t: "You're always the same in my frame, Sol. I don't know what you are in hers. I don't think she does either." },
        { bond: { danielle: 1 } }
      ] }
  );

  /* ── Run-ins (living-runins.js format) ── */
  (W.FEMC_GAME_RUNINS ||= []).push(
    { id: 'ri-danielle-greengrocer', who: 'danielle', where: { areas: ['strip'] }, after: '11/12', until: '1/31', events: ['a4-light-on'], scene: [
      { n: "On her way back down the Strip, outside the greengrocer's with its striped awning and its stacked crates of mandarins, there was a negotiation in progress, which was remarkable, because the greengrocer had been selling vegetables at the prices written on little cardboard flags since before the war and had never once in his life been negotiated with." },
      { n: "Danielle was negotiating with him. Pleasantly. Itemized. A list in one hand, a pen in the other, a guesthouse's worth of daikon and cabbage and eggs at her feet in two string bags, and an expression of such unwavering warmth that the old man had started to look, very slightly, like someone who was being held hostage by a sunbeam." },
      { s: 'danielle', f: 'happy', t: "It's a standing order. Every Thursday. The Kirijo guesthouse. Think of it as a relationship. Relationships come with a discount." },
      { choose: [
        { t: "(Back her up. It is a lot of cabbage.)", stat: { charm: 1 }, then: [
          { n: "Solar said, politely, that it was a great deal of cabbage. The old man looked at the cabbage, and at the two girls, and at the cabbage again, and took twenty yen off the eggs with the air of a man signing a treaty under protest. He threw in a mandarin. Danielle wrote down the mandarin." }
        ] },
        { t: "(Slip him the difference when she isn't looking.)", stat: { kindness: 1 }, then: [
          { n: "She pressed the coins into the old man's hand behind the crate of mandarins while Danielle was writing. He looked at them, and at her, and gave the smallest nod. Danielle, without looking up from her list, said, *I saw that,* and wrote something down, and didn't say what." }
        ] },
        { t: "(Just watch.)", then: [
          { n: "She watched. It took eleven minutes. At the end of it Danielle had thirty yen off and a free bag of mandarins *for the receipt*, which the old man had written out by hand in shaky pencil because she'd asked, and she folded it once and put it in the folder." }
        ] }
      ] },
      { s: 'danielle', f: 'neutral', t: "Solar. Carry the eggs. You've always been better with eggs than with people." },
      { bond: { danielle: 1 } }
    ] },
    { id: 'ri-danielle-lost-property', who: 'danielle', where: { areas: ['mall'] }, after: '11/12', until: '1/31', events: ['a4-light-on'], scene: [
      { n: "On her way out through the mall, past the police box with its little lit sign and its counter, she saw a long coat and a straight back and a folder, and slowed, and then stopped, because Danielle was leaning on the counter with one elbow, chatting with Officer Kurosawa as if they were old colleagues, and Officer Kurosawa was looking at her the way a man looks at weather coming in over the hills." },
      { s: 'kurosawa', t: "...Can I help you." },
      { s: 'danielle', f: 'happy', t: "You can. The lost-property book. I'd just like to read it. Nothing more. Who lost what, and where, and whether they came back for it." },
      { s: 'kurosawa', f: 'serious', t: "That's private." },
      { s: 'danielle', f: 'happy', t: "Of course it is. That's why it's interesting." },
      { n: "The book was open on the counter in front of him, upside down to her. Solar watched Danielle read it upside down, line by line, without once looking down at it, while she smiled at him about the weather." },
      { choose: [
        { t: "What are you looking for?", then: [
          { s: 'danielle', f: 'neutral', t: "Nothing. Everything in that book is something somebody wants back. I just like to know what people want back." },
          { s: 'danielle', f: 'happy', t: "A red umbrella, a child's left glove, and a set of keys on a frog. Three days unclaimed. Somebody's having a very bad week." }
        ] },
        { t: "(Close the book. Politely. For him.)", stat: { courage: 1 }, then: [
          { n: "She reached over the counter and closed the book, gently, with one hand. Officer Kurosawa looked at her with something close to gratitude. Danielle looked at her with something much more interesting than that." },
          { s: 'kurosawa', f: 'happy', t: "...Thank you." },
          { s: 'danielle', f: 'neutral', t: "*Solar.* That's not how we speak to our sorority sisters." }
        ] },
        { t: "(Pull her away by the sleeve.)", then: [
          { n: "She took Danielle by the coat sleeve and walked her away from the counter. Danielle let her, the way you'd let a dog walk you, for the novelty, and said goodbye to Officer Kurosawa over her shoulder by name, which he hadn't told her." }
        ] }
      ] },
      { bond: { danielle: 1 } }
    ] }
  );
})();
