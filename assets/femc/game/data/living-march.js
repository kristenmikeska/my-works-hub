/* The last month (2026-10-21): February and early March 2010, the stretch the year gained when it moved to March (P3's
   graduation). Loaded after every job, club, text, daily-life and story file and before the link files. Everything here
   is gated on the flag 'year-goes-on' (set at the solstice on every route but the bad ending), and every word of it is
   ROUTE-NEUTRAL: nobody says who goes where, nothing hints at an ending, no world is named as the one she's leaving for.
   The mood is the cold, the third term, the date everybody knows is coming and nobody says out loud.
   What's in it:
   - Openers for months 2 and 3 on every job / club scene pack that has `openers` (FEMC_GAME_JOB_SCENES, _MORE, CLUBS;
     core.js packPick). A pack's own line for a month always wins (`||=`).
   - Daily-life routines (format: daily-life.js header, core.js dailyLife), late January (Fuuka's planner) and 2/3 to 3/3: Setsubun beans (2/3), the kotatsu,
     free attendance, Yunjin on the roof, Mitsuru's council room, the calendar by the fridge, Akihiko's second button, a
     warm March morning.
   - Ambient texts (FEMC_GAME_TEXTS.ambient, core.js nextAmbient), 2/1 to 3/4.
   - Valentine's Day (2/14, a Sunday) holiday invitations (FEMC_GAME_LINK_EXTRAS[link].holidays, core.js holidayInvites):
     Akihiko, Yukari (tomo-choco, with Fuuka), Hanni (with Hyein), Jihoon, Jungwon. Rank 3+, romance only inside ifRoute.
   - Story events: 'a6-quiet-moon' (1/30, late: a full moon with no operation) and 'a6-graduation' (3/5, morning).
   Dates the story owns, and nothing here touches: 3/2 Wren's rank 10, 3/3 late first snow (so no snow falls in this file's
   February), 3/4 evening the mirror, 3/5 graduation and the playdate, 3/6 the last train, 3/7 the endings.
   Hooks for ranks 11-15: February (2/1-3/4) is where link ranks 11-15 go (link `ranks` entries with `after` dates in
   February). Holidays and routines here keep clear of 3/5-3/7, so the last three days stay the story's. New February
   content should gate on 'year-goes-on' (and on arrival events / flags for who is in it, as these do). */
(() => {
  const W = window;

  /* ── Openers: months 2 and 3 ── */
  const OPENERS = {
    bookworms: {
      2: "In February the Strip had chocolate in every window but Bookworms', where Mitsuko put a single dish of the cheap foil-wrapped kind on the counter for anyone who looked like they needed one, and the paraffin heater ticked, and the light outside went blue by five.",
      3: "In March the door stood propped open for the first time since autumn, with the same dictionary, and the plum tree behind the shop let a few white petals in, and students came in looking for books to take with them somewhere."
    },
    tutor: {
      2: "In February the kotatsu was still out and the mikan bowl had been joined by a bag of chocolate from somebody's classmate, and the river outside the balcony was low and gray and slow, and the windows ran with condensation by six.",
      3: "In March the kotatsu quilt came off and went to the cleaners, and the balcony door stood open a crack for the first time in months, and the river smelled of thawed mud and something green on its way."
    },
    flowers: {
      2: "In February the stall went red, roses in cellophane in buckets three deep for the fourteenth, and Mrs. Okada said the same thing she said every year about men who bought flowers on the thirteenth at closing, and then said it again.",
      3: "In March the stall filled with sweet peas and tulips and graduation bouquets ordered weeks ahead, a name on every tag, and the doors stood open long enough now that the buckets didn't freeze."
    },
    konbini: {
      2: "February at the store meant the Setsubun rolls stacked in a pyramid by the register on the third and gone by the fourth, and then a wall of pink and red boxes for the fourteenth that the clerk restocked twice and regarded as a personal insult.",
      3: "In March the automatic doors stopped letting the cold in all at once, and the shelf by the register turned over to thank-you cards and graduation envelopes, and the oden pot steamed on regardless, as if nobody had told it."
    },
    chagall: {
      2: "February at Chagall: every second table a girl writing a small card and crossing it out, Valentine's tarts lined up in the case under a sign Ms. Kagami had lettered herself and clearly resented, and the coffee steaming in the thin cold light from the roof.",
      3: "In March the light through the mall's roof came in warm for the first time, the fountain switched back on, and Chagall filled with third-years in their uniforms, drinking slowly, as if the cups could make the afternoon last longer."
    },
    hagakure: {
      2: "February was the coldest month on the Strip, the noren stiff with it, the windows streaming from the inside all night, and on the third the master set a dish of roasted soybeans on the counter and said nothing about it, which was his way of saying a great deal.",
      3: "In March the door stayed open on the first mild evening and the steam went out into the Strip without a fight, and the third-years came in their uniforms in fives for a last bowl, and the master gave every one of them an egg and didn't say why."
    },
    amulets: {
      2: "February at the stall: roasted beans in the corners of every step after Setsubun, the plum by the gate putting out its first hard white buds, and the exam charms selling out twice before the entrance tests.",
      3: "March at the stall: the plum in full bloom over the offering box, the first warm wind turning the wish plaques on their rack, and students coming back to tie up thank-you plaques for the charms that had worked, and a few, quietly, for the ones that hadn't."
    },
    respawn: {
      2: "Respawn in February: ice on the top step, a heart-shaped box left on the counter by somebody who wouldn't say who it was for, and the regulars' breath still showing for the first ten minutes after they came down.",
      3: "Respawn in March: the cold gone off the stairwell at last, the spring tournament flyers going up over the winter ones, and graduating seniors from every school on the island coming down for one more ten-hour pack before whatever came next."
    },
    fishmarket: {
      2: "The fish market in February: the coldest auction of the year, the water in the crates skinned with ice at the edges, and Mrs. Fujii selling hot amazake out of a thermos as fast as she could pour it.",
      3: "The fish market in March: the first morning nobody stamped their feet, the light up before the bell, and the sea bream coming in pink and silver, which Mrs. Fujii said was the fish you bought when somebody was celebrating something."
    },
    yeobos: {
      2: "Yeobo's in February: hearts piped in red icing on every croissant in the case, the windows fogged gold, and the bell over the door going all afternoon for people who wanted something sweet to bring to someone.",
      3: "Yeobo's in March: the door propped open on the first warm morning, the smell of butter going out onto the Strip again the way it had in April, and a strawberry thing in the case that Sunoo called the graduation special and refused to rename."
    },
    'club-tennis': {
      2: "February, and the back courts held their frost until noon, and practice was mostly footwork in tracksuits and gloves, and somebody had left a box of chocolate on the bench with no name on it that nobody would claim.",
      3: "March came in mild and windy, the frost gone from the cracks at last, and the team's third-years came down one more time in their uniforms to watch from the fence and pretend they weren't going to miss it."
    },
    'club-library': {
      2: "February, and the returns cart was full of entrance-exam workbooks borrowed in a panic and returned in despair, and the radiator under the big table roared, and the windows went blue by half past four.",
      3: "March, and the tall windows were open a crack for the first time since autumn, and the third-years came in to return everything they owed before graduation, with fines, with apologies, with a book somebody had borrowed in April and never opened."
    },
    'club-band': {
      2: "February, and the music room was cold enough that the strings went flat between songs, and through the wall the wind ensemble rehearsed the graduation march every afternoon, slowly, one wrong note at a time, again.",
      3: "March, and the windows were open on the courtyard again, and through the wall the wind ensemble had finally got the graduation march right, and played it all afternoon, as if they didn't want to stop."
    },
    'club-gaming': {
      2: "February put a paper heart on Game Panic's token machine where the tinsel had been, and the computer room's heater clicked and ticked, and half the club's third-years had stopped coming for exams and left their high scores standing like flags.",
      3: "March light came in warm through the computer room's broken blind, and the club's third-years came back one at a time to sign the high-score book before they went, and Game Panic had a sign up for a spring cup none of them would be here to play in."
    }
  };
  const packSets = [W.FEMC_GAME_JOB_SCENES, W.FEMC_GAME_JOB_SCENES_MORE, W.FEMC_GAME_CLUBS];
  const add = (pack, m, line) => { if (pack && pack.openers) pack.openers[m] ||= line; };
  Object.entries(OPENERS).forEach(([id, months]) => packSets.forEach(set => {
    const pack = set && set[id];
    if (pack) Object.entries(months).forEach(([m, line]) => add(pack, m, line));
  }));

  /* ── Daily life: February to the first days of March ── */
  (W.FEMC_GAME_DAILY_LIFE ||= []).push(
    // The last days of January: the third term goes on, and February is still all there.
    { id: 'pages-left', after: '1/26', until: '1/31', slot: 'evening', flags: ['year-goes-on'], events: ['a4-household-introductions'],
      place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
        { n: "Fuuka's planner lay open on the lounge table under the lamp, the kind with a week across two pages and a ribbon to keep your place, and she had filled January so full of small neat handwriting that the last week ran up the margins. Readings. Test dates. Somebody's birthday with a star. A grocery list that had wandered in from somewhere else." },
        { s: 'junpei', f: 'neutral', t: "Huh. I always forget there's a February. Like, January ends and my brain goes, okay, that's it, see you in spring." },
        { s: 'yukari', f: 'neutral', t: "It's the shortest month, Junpei. It's not hiding." },
        { n: "Fuuka turned the ribbon over to the next page, the way you lift a lid to check, and February was there, clean, every square empty, the paper still stiff from never having been opened." },
        { choose: [
          { t: "(Look at February for a while.)", stat: { kindness: 1 }, then: [
            { n: "She looked at it longer than a planner deserved. A whole month, untouched. It seemed like a lot, suddenly, and also like nothing, and she let Fuuka close the book over it without saying which." }
          ] },
          { t: "Leave it. It'll come on its own.", then: [
            { s: 'fuuka', f: 'happy', t: "It always does. That's the nice thing about months." },
            { n: "Fuuka laid the ribbon back across January and closed the planner, and put her pen on top of it, ready for tomorrow." }
          ] }
        ] }
      ] },
    { id: 'setsubun-beans', after: '2/3', until: '2/3', slot: 'evening', flags: ['year-goes-on'], events: ['a4-household-introductions'],
      place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
        { n: "Junpei had lost the vote for oni six to one, the one being Junpei, and he stood in the lounge doorway in a red paper mask from the convenience store with the elastic cutting into his ears and his arms out like a man who had made peace with his fate. Ken had the beans. Ken had read the instructions twice. Ken was going to do this properly." },
        { s: 'ken', f: 'serious', t: "Oni wa soto. Fuku wa uchi. Demons out, luck in. You throw at the demon, not at the face. Hyein-san. Not at the face." },
        { s: 'hyein', f: 'happy', t: "He's a DEMON, Ken. Demons don't have faces. Morally." },
        { n: "It went the way it was always going to go. Beans in the sofa, beans in Koromaru's water bowl, beans down the back of Junpei's collar, Mitsuru calmly throwing a single bean from her armchair with devastating accuracy, and Haechan on the stairs catching one that went wide without looking up from his phone. Afterward Fuuka handed out the long rolls and turned everybody to face west-southwest, which she'd looked up, and the whole household ate in the silence the custom asked for, which lasted nine seconds, which was Jihoon's record." },
        { n: "Then the last part. You ate one bean for every year of your age, and one more for the year to come. Solar counted eighteen into her palm, and ate them, and then held the last one, small and brown and roasted, and looked at it." },
        { choose: [
          { t: "(Eat it. The year to come.)", stat: { courage: 1 }, then: [
            { n: "She ate it. It tasted like a roasted bean, which was all it was, and Hanni, across the table, who'd been watching without seeming to, smiled into her roll and looked away before Solar could catch her at it." }
          ] },
          { t: "(Put it in your pocket. For later.)", then: [
            { n: "She put it in her blazer pocket, where her hand found it again the next morning, and the morning after that, and kept finding it, a small hard thing she didn't take out and didn't throw away." }
          ] }
        ] }
      ] },

    { id: 'the-kotatsu', after: '2/5', until: '2/13', slot: 'evening', flags: ['year-goes-on'], events: ['a4-household-introductions'],
      place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
        { n: "Hyein had found a kotatsu at the recycle shop by the river for eight hundred yen, and Hanni and Yunjin had carried it home on the monorail between them, the table on one side and the quilt in a bundle on the other, and Mitsuru had said absolutely not, the lounge was not a bedroom, and that had been on Monday." },
        { n: "By Friday it was the center of the building. Fourteen legs under one quilt and a bowl of mikan in the middle going down like sand in an hourglass. People did their homework under it, and ate under it, and had arguments under it, and Koromaru had gone under it entirely on the first night and been seen only as a tail since." },
        { s: 'yunjin', f: 'neutral', t: "Babe. Don't look. Don't make it weird. Look at the armchair end." },
        { n: "Mitsuru was asleep. Upright, more or less, her shoulders under the quilt and her book open face-down on the table in front of her, one hand still resting on a half-peeled mikan, breathing the slow even breath of a woman who had not, in living memory, fallen asleep anywhere but a bed." },
        { choose: [
          { t: "(Pull the quilt up over her shoulders. Let her sleep.)", stat: { kindness: 1 }, then: [
            { n: "She pulled it up, very carefully. Mitsuru didn't wake. Yunjin mouthed *iconic*, and Junpei took out his phone, and four people took it off him without a word, and the lounge went on around her at half volume until ten, and nobody ever told her, and in the morning there was a mikan peeled and waiting on her book." }
          ] },
          { t: "(Get in on the last free side. Lose the evening.)", stat: { charm: 1 }, then: [
            { n: "There wasn't a free side. She made one. It cost her the whole evening, the way it cost everyone, and she didn't mind, wedged between Yunjin's elbow and the dog's warm back with her feet in somebody else's slippers, and outside the wind went past the windows like it was looking for someone and didn't find them here." }
          ] }
        ] }
      ] },

    { id: 'free-attendance', after: '2/8', until: '2/19', slot: 'lunch', schoolOnly: true, flags: ['year-goes-on'],
      place: 'Gekkoukan High · Classroom', time: 'Lunch', bg: 'gekkoukan-classroom-day', cast: { classmate: 'A Classmate' }, scene: [
        { n: "February was free attendance for the third year, which meant the classroom had gone thin. Half the desks empty every day, their owners at cram school or exams or home in bed pretending to be at cram school, and the ones who came in came in tired, with flashcards on rings and the flat gray faces of people sleeping four hours a night." },
        { n: "Aigis came every day. She sat in her seat in perfect posture through every empty period, and when a teacher didn't turn up she read the textbook from the beginning, and at lunch she turned her chair round to face Solar's with the air of someone keeping an appointment." },
        { s: 'classmate', t: "You're here again? You don't have exams? Lucky. I've got three next week. I've stopped dreaming in Japanese. I dream in multiple choice." },
        { s: 'aigis', f: 'neutral', t: "Solar-san attends because the room is here. I attend because Solar-san is here. It is a very simple system." },
        { choose: [
          { t: "(Quiz the classmate on her flashcards.)", stat: { knowledge: 1 }, then: [
            { n: "She took the ring of cards and went through them while the girl ate, and the girl got eleven out of twenty, and then fourteen, and then, on the third pass, nineteen, and stared at Solar like she'd performed a minor miracle, and asked if she could come back tomorrow, and did." }
          ] },
          { t: "Somebody should be here. To keep the room company.", then: [
            { s: 'aigis', f: 'neutral', t: "Yes. That is exactly what I meant. You said it better." },
            { n: "They ate their lunches in the half-empty room with the radiator ticking and the light coming in white off the frost on the field, and the empty desks didn't feel lonely, exactly, more like chairs pulled out at a table for people who'd be back in a minute." }
          ] }
        ] }
      ] },

    { id: 'yunjin-roof', after: '2/10', until: '2/24', slot: 'late', flags: ['year-goes-on'], events: ['a4-low-tide'],
      place: 'Iwatodai Dorm · Rooftop', time: 'Late Night', bg: 'iwatodaidorm-roof-night', scene: [
        { n: "Yunjin was on the roof at one in the morning in her yellow puffer with the hood up and two cans of hot corn soup from the machine at the station, one in each pocket, as if she'd known exactly who would come up the stairs, which she said she had." },
        { s: 'yunjin', f: 'neutral', t: "The walls here are paper, babe. You've been awake since Tuesday. I can hear you turning over. You turn over like you're losing an argument." },
        { n: "She handed over a can. It was hot enough to hurt through Solar's sleeves. The city lay out below them in the cold, the monorail lit up and empty on its last run, the bay black, the wind coming off it with the particular clean sharpness of February, the month that doesn't pretend to be anything else." },
        { s: 'yunjin', f: 'serious', t: "I'm not going to ask what you're thinking about. I'm too good at my job. I'm just going to stand here and be warm at you." },
        { choose: [
          { t: "(Stand next to her. Shoulder to shoulder.)", stat: { kindness: 1 }, then: [
            { n: "She stood next to her. Yunjin leaned, the whole puffer giving with a small dry squeak, and they drank their soup with their shoulders together and didn't say anything for a long time, and it was, Solar thought, the first time all week her head had been quiet." }
          ] },
          { t: "You own more than one of those coats, don't you.", stat: { charm: 1 }, then: [
            { s: 'yunjin', f: 'happy', t: "Four. Yellow's for emergencies. Don't tell anyone. It ruins the mystique." },
            { n: "She unzipped it and held one side open like a wing, and Solar got in, and it was big enough for two people if neither of them breathed, and they stood there zipped halfway into one coat on a roof in the cold, laughing, until the soup was gone." }
          ] }
        ] }
      ] },

    { id: 'council-room-handover', after: '2/15', until: '2/27', slot: 'after', schoolOnly: true, flags: ['year-goes-on'],
      place: 'Gekkoukan High · Student Council Room', time: 'After School', bg: 'gekkoukan-student-council', scene: [
        { n: "The council room had been emptied down to the furniture. Two cardboard boxes on the long table, taped and labeled in Mitsuru's handwriting, *PERSONAL* and *ARCHIVE*, and the president's chair at the head of the table pushed in square, and Mitsuru standing beside it with her coat on, not sitting in it, looking at it." },
        { ifMet: 'jungwon', then: [
          { n: "Somebody had already been through the binders on the shelf and squared every one of them to the edge. Solar knew the hand. So, apparently, did Mitsuru, who said Jungwon had come by at lunch to carry boxes and had stayed to alphabetize the archive, unasked, and that she'd let him, because it seemed to be helping one of them." }
        ] },
        { s: 'mitsuru', f: 'neutral', t: "Two years. I handed it over this afternoon. It took four minutes. I signed a form, and she signed a form, and I gave her the key. I timed it. I don't know why I timed it." },
        { s: 'mitsuru', f: 'sad', t: "She asked me if I had any advice. I told her to eat lunch. I don't know where that came from either." },
        { choose: [
          { t: "(Pull out the president's chair. Sit her in it, one last time.)", stat: { courage: 1 }, then: [
            { s: 'mitsuru', f: 'surprised', t: "Solar. It isn't mine anymore." },
            { n: "But she sat. Coat and all, at the head of an empty table, her hands folded on the wood, and looked down the length of it at the chairs where two years of people had argued about budgets, and for about a minute she didn't say anything, and her face did something it didn't do in public. Then she stood, and pushed the chair in square, and picked up the box that said *PERSONAL*." }
          ] },
          { t: "(Pick up the other box. Walk her out.)", stat: { kindness: 1 }, then: [
            { n: "Solar picked up *ARCHIVE*, which was heavier, and Mitsuru picked up *PERSONAL*, which was not, and they went down the corridor with them, past the noticeboard where somebody had already pinned up the new council's photo, and Mitsuru didn't look at it, and then at the corner she stopped, and went back, and did." }
          ] }
        ] }
      ] },

    { id: 'calendar-by-the-fridge', after: '2/18', until: '2/28', slot: 'evening', flags: ['year-goes-on'], events: ['a4-household-introductions'],
      place: 'Iwatodai Dorm · Kitchen', time: 'Evening', bg: 'iwatodaidorm-kitchen', scene: [
        { n: "The calendar by the fridge was the free one from the convenience store, a different cartoon cat for every month, and it had hung there all year with nothing on it but Mitsuru's study schedule pinned over January. Sometime in the last week somebody had started crossing off the days." },
        { n: "Not one somebody. The crosses were all different. A red pen ruled dead straight, corner to corner. Pink glitter gel, a little wobbly. A pencil so light you had to tilt your head. One day had been done with one of Ken's rubber stamps, a small blue paw. Nobody had said anything about it at dinner. Nobody said anything about it now, at the kettle, with their backs to it, all of them perfectly aware it was there." },
        { n: "Further on, a few squares into March, somebody had drawn a small circle around a date, and somebody else had colored the circle in, solid, so you couldn't tell anymore what it had been around. Solar stood in front of it with a mug in her hand. The cat for February was asleep in a box." },
        { choose: [
          { t: "(Cross off today. Your own pen.)", stat: { courage: 1 }, then: [
            { n: "She found a pen in the drawer and crossed off today, and then, because the cross looked lonely, drew a very small sun in the corner of the square, and put the pen back. Behind her the kettle clicked off. When she turned round, Hanni was in the doorway, and looked at the calendar, and at her, and didn't say anything, and came and stood next to her, and that was all." }
          ] },
          { t: "(Leave it. Let someone else.)", then: [
            { n: "She left it. Somebody else would; somebody always did. At ten, coming down for water, she found today's square crossed off in the straight red pen, and under it, smaller, so faint you had to look for it, someone had written *good day* in English, and she stood there in the dark kitchen for longer than she needed to." }
          ] }
        ] }
      ] },

    { id: 'warm-morning', after: '3/1', until: '3/3', slot: 'early', flags: ['year-goes-on'], events: ['a3-full-house'],
      place: 'Iwatodai · Riverside', time: 'Early Morning', bg: 'park-2', scene: [
        { n: "It was warm. She noticed it on the dorm steps with the lead in her hand and Koromaru already pulling, the way you notice a sound has stopped. No bite in the air. No white breath. The wind off the river smelled of mud and something green, and the plum trees along the bank, which had been black sticks on Friday, had gone white all down the path overnight, as if somebody had been out in the dark tying them on." },
        { s: 'ken', f: 'happy', t: "Solar-san. It's warm. Is it supposed to be warm? It's only the first." },
        { n: "He'd taken his scarf off and was holding it in both hands like he wasn't sure what to do with it now, and Koromaru had stopped under the first plum tree and was looking up into it with his whole body, very still, the way he looked at the bridge on Thursdays." },
        { choose: [
          { t: "(Take the long way. All the way to the bridge.)", stat: { kindness: 1 }, then: [
            { n: "They took the long way. Ken talked the whole time, which he never did, about the class trip in April and a boy in his class who could whistle with two fingers, and Koromaru stopped under every single tree, and they were nearly late, and none of the three of them hurried." }
          ] },
          { t: "(Stop. Just stand under it for a minute.)", then: [
            { n: "She stopped. Ken stopped beside her. They stood under the plum tree with the dog between them and the petals coming down a few at a time, and she breathed in, all the way, the first warm air in months, and held it, the way you'd hold something somebody had handed you to keep." }
          ] }
        ] }
      ] },

    { id: 'second-button', after: '3/1', until: '3/4', slot: 'lunch', schoolOnly: true, flags: ['year-goes-on'],
      place: 'Gekkoukan High · Rooftop', time: 'Lunch', bg: 'rooftop-day', scene: [
        { n: "The rumor had been going round the third floor since Monday, and by Wednesday it had reached the roof. On graduation day a boy gave the second button from his uniform jacket, the one over his heart, to the person he liked best, and the Akihiko Sanada fan club had organized, by all accounts, a spreadsheet." },
        { s: 'yukari', f: 'serious', t: "A spreadsheet. With odds. There's a girl in my class who's offering three thousand yen for it. For a button. I've never been so disgusted in my life. I want to see the spreadsheet." },
        { s: 'junpei', f: 'happy', t: "Senpai. Senpai. Look at me. If that button goes to anybody but me, I won't recover. You love me more, though. Right? Say it on the roof." },
        { s: 'akihiko', f: 'neutral', t: "It's a button. It's sewn on. I'm not cutting it off for a spreadsheet." },
        { ifRomance: 'akihiko', then: [
          { n: "He said it to Junpei. Then his eyes went to Solar, for one second, maybe two, one second longer than a button needed, and went back to his shake, and Yukari made a very small, very sincere retching noise into her lunch and said, to nobody, that she was going to need a bigger spreadsheet." }
        ], else: [
          { s: 'akihiko', f: 'sad', t: "...If it goes anywhere, it goes to Shinji. He can sew it on something. He's better with a needle than any of you." },
          { n: "Nobody said anything for a second. Then Junpei said that was the most beautiful thing he'd ever heard and also he was devastated, and Yukari threw a rice cracker at him, and Akihiko laughed, and the wind came over the fence warm for March." }
        ] },
        { choose: [
          { t: "(Ask Yukari to see the spreadsheet.)", stat: { charm: 1 }, then: [
            { n: "Yukari had a photo of it on her phone. Of course she did. It had columns. It had a column for Mitsuru, at long odds, and a column for Junpei, at longer ones, and it was the funniest thing any of them had ever seen, and Akihiko made them delete it, and Yukari only pretended to." }
          ] },
          { t: "(Eat your lunch. Say nothing at all.)", then: [
            { n: "She ate her lunch and said nothing, which on that roof, in that company, was the loudest thing anyone could have done, and all three of them noticed, and none of them said so, and the conversation went somewhere else with great care, like people stepping round something on a floor." }
          ] }
        ] }
      ] }
  );

  /* ── Ambient texts: February to early March ── */
  const T = W.FEMC_GAME_TEXTS;
  if (T) (T.ambient ||= []).push(
    { id: 'am-sees-oni', thread: 'sees', from: '2/1', to: '2/3', flag: 'year-goes-on', msgs: [
      { from: 'junpei', t: 'setsubun is wednesday. who is being the oni this year' }, { from: 'junpei', t: 'not me. NOT me' },
      { from: 'yukari', t: "it's you" }, { from: 'fuuka', t: "it's you junpei-kun :)" }, { from: 'junpei', t: 'this is a coup' }
    ], reply: [{ t: 'its u', then: [{ from: 'junpei', t: 'et tu, leader' }] },
      { t: 'ill throw the beans soft', then: [{ from: 'junpei', t: "u won't. i've seen ur arm" }, { from: 'yukari', t: "she won't" }] }] },
    { id: 'am-sisters-chocolate', thread: 'sisters', from: '2/8', to: '2/13', flag: 'year-goes-on', msgs: [
      { from: 'hyein', t: 'hyein: hanni bought chocolate in BULK' }, { from: 'hanni', t: 'hanni: it was on sale!!' },
      { from: 'hyein', t: 'hyein: theres a KILO of it in my closet. why is it in MY closet' }, { from: 'hanni', t: "hanni: because you'd never look in mine" }
    ], reply: [{ t: 'is any of it for me', then: [{ from: 'hanni', t: 'hanni: ALL of it is for u. and everyone. but mostly u' }] },
      { t: 'hide it from jihoon lol', then: [{ from: 'hyein', t: 'hyein: too late. he has a nose like a dog' }, { from: 'hanni', t: "hanni: don't say that to koromaru" }] }] },
    { id: 'am-hateclub-windowsill', thread: 'hateclub', from: '2/15', to: '2/20', flag: 'year-goes-on', msgs: [
      { from: 'asahi', t: 'asanoonecares: jihoon has lined up his valentines on the guesthouse windowsill' }, { from: 'asahi', t: 'asanoonecares: for display' },
      { from: 'junkyu', t: 'junkyute: two of them are from me!!!' }, { from: 'jihoon', t: 'jihoney: They Are Separate Gestures And I Value Them Separately' }
    ], reply: [{ t: 'HEHEHEHE kyu ur an angel', then: [{ from: 'junkyu', t: 'junkyute: :D!!!!' }] },
      { t: 'JIHOON THATS SO SAD', then: [{ from: 'jihoon', t: "jihoney: It's Called A Collection" }, { from: 'hyunsuk', t: "geniusuk: it's called a windowsill" }] }] },
    { id: 'am-akihiko-rehearsal', thread: 'akihiko', from: '2/22', to: '3/3', flag: 'year-goes-on', msgs: [
      { from: 'akihiko', t: 'graduation rehearsal. two hours of standing up and sitting down' }, { from: 'akihiko', t: "i'm the best at it. this is not a joke" }],
      reply: [{ t: 'u trained ur whole life for this', link: 'akihiko', notes: 2, then: [{ from: 'akihiko', t: 'i did. squats' }] },
        { t: 'save me a seat', link: 'akihiko', notes: 2, then: [{ from: 'akihiko', t: "you're two rows back. i checked" }, { from: 'akihiko', t: "i'm not turning around. i want you to know i thought about it" }] }] },
    { id: 'am-mitsuru-key', thread: 'mitsuru', from: '2/24', to: '3/2', flag: 'year-goes-on', msgs: [
      { from: 'mitsuru', t: "I've returned the council room key. It's the first time in two years I haven't had it on me." }, { from: 'mitsuru', t: "My pocket feels very light. I don't care for it." }],
      reply: [{ t: 'want mine? i have a dorm key and a gum wrapper', link: 'mitsuru', notes: 2, then: [{ from: 'mitsuru', t: '...I would like the gum wrapper.' }, { from: 'mitsuru', t: "Don't ask me to explain that." }] },
        { t: 'ur allowed to miss it', link: 'mitsuru', notes: 3, then: [{ from: 'mitsuru', t: "Thank you. I'd assumed I needed permission." }, { from: 'mitsuru', t: "From whom, I couldn't tell you." }] }] },
    { id: 'am-sees-banner', thread: 'sees', from: '2/26', to: '3/4', flag: 'year-goes-on', msgs: [
      { from: 'junpei', t: "we're making a banner for the senpais" }, { from: 'yukari', t: 'we are NOT making a banner' },
      { from: 'fuuka', t: 'i already bought the paint :)' }, { from: 'junpei', t: "WE'RE MAKING A BANNER" }
    ], reply: [{ t: 'put my name on it', then: [{ from: 'junpei', t: 'ur literally a senpai. ur ON it' }, { from: 'yukari', t: "fine. it's a small banner" }] },
      { t: 'mitsuru will confiscate it', then: [{ from: 'yukari', t: "that's what i SAID" }, { from: 'junpei', t: "she can't confiscate love" }] }] },
    { id: 'am-searchparty-warm', thread: 'searchparty', from: '3/1', to: '3/4', flag: 'year-goes-on', msgs: [
      { from: 'hanni', t: "hanni: IT'S WARM OUT" }, { from: 'hanni', t: 'hanni: sol go outside right now. the plum trees by the river!!!' },
      { from: 'hyein', t: "hyein: i'm not putting the coat away. i REFUSE. it's been through too much" },
      { from: 'jihoon', t: 'jihoon: It Is Fourteen Degrees. Calm Down. Embarrassing' }, { from: 'hanni', t: 'hanni: jihoon is wearing shorts' }
    ], reply: [{ t: 'HEHEHEHE JIHOON SHORTS', then: [{ from: 'jihoon', t: 'jihoon: My Legs Deserve Sunlight Too' }] },
      { t: 'its so warm omg. going rn', then: [{ from: 'hanni', t: 'hanni: take a picture!!! for us!!!' }, { from: 'hyein', t: 'hyein: wear the coat' }] }] }
  );

  /* ── Valentine's Day (2/14, a Sunday): holiday invitations ── */
  const X = (W.FEMC_GAME_LINK_EXTRAS ||= {});
  const holiday = (id, days) => { (X[id] ||= {}).holidays = { ...((X[id] || {}).holidays || {}), ...days }; };

  holiday('akihiko', {
    '2/14': { rank: 3, flag: 'year-goes-on', title: "valentine's day", place: 'Iwatodai Dorm · Kitchen', time: 'Daytime', bg: 'iwatodaidorm-kitchen', music: 'tender',
      ask: "41 boxes of chocolate. from yesterday. i counted. i can't eat any of it in season. i need a plan", yes: "coming down. dont eat any yet", ok: 'too late. one. it had a letter in it. hurry', sorry: 'cant today, im sorry', no: "ok. i'm giving all of it to junpei. that's the plan",
      scene: [
        { n: "The fan club had found him on Saturday, the way it found him every year, in a wave, at the shoe lockers, and the evidence now covered the whole kitchen table. Forty-one boxes, ribboned and wrapped and hand-lettered, some of them clearly homemade and some of them clearly very expensive, and Akihiko sitting in the middle of them in his running clothes with a notebook, looking like a man defusing something." },
        { s: 'akihiko', f: 'neutral', t: "I write them all back. Every year. Every letter. That's the rule. Shinji used to say I was encouraging them. I'm not encouraging them. I'm being polite." },
        { s: 'akihiko', f: 'surprised', t: "...Some of these have very long letters." },
        { n: "He wasn't going to eat any of it. Season, he said, and then, quieter, that it felt wrong to eat something somebody had made for a version of him they'd seen across a gym. He'd give it to the dorm. He kept the letters. There was a shoebox under his bed, apparently, years of them, which he would deny under oath." },
        { n: "Solar's own was in her coat pocket. A small box. She'd had it since yesterday and had moved it from pocket to pocket like it was ticking." },
        { choose: [
          { t: "(Give him yours. Plain box. You made it.)", notes: 3, then: [
            { ifRoute: 'romance', then: [
              { n: "She put it on the table in front of him, not with the others. A plain brown box, no letter. He looked at it for a long moment, the way he looked at a punch coming, and then picked it up with both hands." },
              { s: 'akihiko', f: 'blushing', t: "You made this." },
              { s: 'solar', f: 'neutral', t: "I made it." },
              { n: "He didn't put it with the others. He put it inside his jacket, against his chest, and zipped the jacket up over it, and went red from the collar to the ears, and went back to his letters, and couldn't write a single word for ten minutes, and didn't pretend he could." }
            ], else: [
              { n: "She put it on the table in front of him. He looked at it, and at her, and his mouth did something at one corner." },
              { s: 'akihiko', f: 'happy', t: "Is this giri? Obligation chocolate? From a teammate?" },
              { s: 'solar', f: 'neutral', t: "Tomo. Friend chocolate. Giri is for your boss." },
              { s: 'akihiko', f: 'happy', t: "Then it doesn't go on the table. Friends don't go on the table." },
              { n: "He put it on the windowsill, by itself, where he could see it, and ate one piece of it right then, in season, against every rule he had, and said it was the best one, and that if she told Junpei he'd deny it." }
            ] }
          ] },
          { t: "(Pull up a chair. Help him with the letters.)", notes: 2, stat: { kindness: 1 }, then: [
            { n: "She pulled up a chair and took half the pile. They wrote back to forty-one girls between them, short and kind and careful, *thank you, I'm sure it was delicious, good luck on your exams*, and by the thirtieth his handwriting had started to look like hers, and he noticed, and kept going." }
          ] },
          { t: "(Open one. Rate it out loud.)", notes: 2, stat: { charm: 1 }, then: [
            { n: "She opened the most expensive-looking box and ate one and rated it, out loud, like a judge on television, texture and finish and sincerity. He laughed so hard he had to put the notebook down, and then made her rate eleven more, and wrote the scores in the margin, for the thank-you letters, he said, and absolutely not for the thank-you letters." }
          ] }
        ] }
      ] }
  });

  holiday('yukari', {
    '2/14': { rank: 3, flag: 'year-goes-on', title: 'tomo-choco', place: 'Paulownia Mall · Central Atrium', time: 'Daytime', bg: 'inside-mall', music: 'joy',
      ask: "tomo-choco. mall. you, me, fuuka if she finishes hers. noon. no boys", yes: 'no boys. noon', ok: "good. junpei asked if he could come. i said it's girls only. he said he identifies as chocolate", sorry: 'cant today, sorry!!', no: "ok. i'm leaving yours on your door. don't let junpei see it",
      scene: [
        { n: "Paulownia Mall on Valentine's Day was pink from the escalators down. Paper hearts strung over the fountain, a line out the door of the chocolate shop, girls in twos and threes comparing boxes on the benches, and a boy by the fountain holding a single rose and the expression of somebody who'd been waiting for an hour and was going to wait for another." },
        { s: 'yukari', f: 'neutral', t: "Every year at school I do giri for the whole archery club. Twelve boxes. Twelve boys who say thanks without looking up. This is the good one. The one for your friends. I've never actually done it right." },
        { n: "Fuuka arrived at a jog with a lunchbox held out in front of her like a cake on fire. She'd made truffles. They were, in places, black." },
        { s: 'fuuka', f: 'happy', t: "They're a little dark on the bottom. It's a flavor! I've decided it's a flavor." },
        { n: "Yukari's own were in a paper bag from the expensive shop. There were three boxes in it. She handed over two, one to each of them, and the third stayed in the bag, and when Solar looked at it Yukari moved the bag to her other side." },
        { choose: [
          { t: "(Trade. Open them right there by the fountain.)", notes: 3, stat: { charm: 1 }, then: [
            { n: "They opened all of them on the edge of the fountain, three girls in coats in the middle of all that pink, swapping pieces and rating them, and Fuuka's black ones turned out to be the best, which nobody could explain, and Yukari laughed until she had to wipe her eyes on her sleeve, and said it was the cold, and it wasn't." }
          ] },
          { t: "(Eat one of Fuuka's first. The darkest one.)", notes: 2, stat: { kindness: 1 }, then: [
            { n: "She ate the blackest one in the box without blinking. Fuuka watched her with her hands pressed together. It was terrible for one second and then, unexpectedly, very good, and she said so, and Fuuka lit up like a lamp, and Yukari looked at Solar over Fuuka's head with something close to love and ate one too, to be fair, and regretted it, loudly." }
          ] },
          { t: "Who's the third one for?", notes: 3, then: [
            { s: 'yukari', f: 'blushing', t: "...My mom. I'm going to mail it. Probably. Maybe. Shut up." },
            { s: 'yukari', f: 'sad', t: "We don't really talk. But it's Valentine's. And I thought, if I don't do it this year, I'll do it next year, and then I thought, what if I don't." },
            { n: "She didn't say anything else. On the way out of the mall she stopped at the post office counter by the station exit, and bought a padded envelope, and stood there with the pen for a long time, and Solar and Fuuka looked at the stamps very hard until she'd written the address." }
          ] }
        ] }
      ] }
  });

  holiday('hanni', {
    '2/14': { rank: 3, flag: 'year-goes-on', title: "valentine's day", place: 'Iwatodai Dorm · Kitchen', time: 'Daytime', bg: 'iwatodaidorm-kitchen', music: 'joy',
      ask: "sol!!! hyein bought too much chocolate to be legal. dorm kitchen. we need hands!!! no pressure!!! a little pressure", yes: 'omw downstairs lol', ok: "yay!!! hyein made u an apron. it has ur name on it. she sewed it last night", sorry: 'cant today im so sorry!!', no: "ok!!! we'll save u some. hyein says we won't. we will",
      scene: [
        { n: "The dorm kitchen smelled like a chocolate factory had exploded in it. Hanni was at the stove with a bowl over a pot, stirring, a thermometer clipped to the side and her bangs pinned back off her face with two of Hyein's clips, and Hyein was at the table surrounded by boxes and ribbon and tissue paper like a surgeon about to operate." },
        { s: 'hanni', f: 'happy', t: "At home we'd have done galentine's yesterday. A whole thing. Brunch. We're a day late. It still counts. Hyein, it still counts." },
        { s: 'hyein', f: 'serious', t: "I'm not arguing that it counts. I'm arguing that the ribbon is wrong. The ribbon is ALWAYS wrong. I'm fixing the ribbon." },
        { n: "The apron had *SOL* on it in pink appliqué letters, slightly crooked, and a pocket. It had an excellent pocket. Solar put it on, and Hyein looked up at her in it with the expression of an artist seeing her work hung in a gallery, and then, without looking away, picked up the tempered chocolate like she was about to say something casual." },
        { s: 'hyein', f: 'neutral', t: "So. Who's yours going to. The serious one. Because there's always a serious one, Sol, you can't fool me, it's the one you make last and wrap yourself. Is it h—" },
        { n: "Hanni put a strawberry in Hyein's mouth. Whole. Without turning round from the stove." },
        { s: 'hanni', f: 'happy', t: "She's making ours. That's who. Stir this for me, Sol? Slow. Figure eights." },
        { choose: [
          { t: "(Make one for each of them. Sign both.)", notes: 3, then: [
            { n: "She made two, last, the way Hyein said the serious ones went, and wrapped them herself in the wrong ribbon on purpose, and wrote *H* on one and *H* on the other, and handed them over, and watched the two of them try to work out whose was whose and then refuse, both of them, to open theirs, because then it would be over." }
          ] },
          { t: "(Make enough for the whole dorm. Every single person.)", notes: 2, stat: { kindness: 1 }, then: [
            { n: "It took all afternoon. Twenty-two boxes, plus one for the dog with no chocolate in it, which Hyein insisted on wrapping anyway, and Hanni wrote every name on every tag in her round careful handwriting, and when they were done the kitchen table was a small city of boxes, and Hyein looked at it and said, in a strange voice, that it was the most people she'd ever made anything for." }
          ] },
          { t: "I'm not telling.", notes: 2, then: [
            { s: 'hyein', f: 'surprised', t: "SHE'S NOT TELLING. Hanni. She's not telling. That means there IS one." },
            { n: "Hanni said nothing, and stirred, and smiled into the chocolate, the smallest smile, the one with only one dimple in it, the one that meant she already knew a great many things and was going to keep every single one of them." }
          ] }
        ] }
      ] }
  });

  holiday('jihoon', {
    '2/14': { rank: 3, flag: 'year-goes-on', title: "valentine's day", place: 'Paulownia Mall · Fountain', time: 'Daytime', bg: 'paulownia-mall', music: 'joy',
      ask: "it is valentines day. As Your Best Friend Since Preschool i am Owed. fountain. 1pm. Bring Tribute", yes: 'HEHEHE OK OK. tribute incoming', ok: 'Good. I Also Accept Cash', sorry: 'CANT TODAY IM SORRYYY', no: "Unbelievable. Fourteen Year Streak. Gone. I'm Telling Nana",
      scene: [
        { n: "Jihoon was sitting on the rim of the fountain under the paper hearts like a king receiving visitors, with a paper bag between his feet that he said contained forty boxes of chocolate from admirers, and that, when the wind lifted the top of it, very clearly contained two." },
        { s: 'jihoon', f: 'happy', t: "Every year since preschool, Solar Kim brings me chocolate. Every year. Fourteen years. It's the most consistent thing in my life. Scientists study it. I'm a phenomenon." },
        { s: 'jihoon', f: 'neutral', t: "The same one, too. Every year. Never once upgraded me. Never once complained. Because I'm gracious." },
        { n: "She'd stopped at the convenience store on the way. She'd meant to get something nice. Her hand had gone past every nice thing on the shelf and picked up a cheap strawberry bar in a pink wrapper, a hundred yen, and put it on the counter, and paid for it, and she was holding it now." },
        { ifRank: { jihoon: 10 }, then: [
          { n: "She knew exactly why. She'd known since the cold step in January. She'd bought it anyway, on purpose, the way you'd keep a promise to someone who'd never once asked you to." }
        ], else: [
          { n: "She didn't know why. Her hand had seemed very sure." }
        ] },
        { choose: [
          { t: "(Hand it over. Don't explain.)", notes: 3, then: [
            { n: "He saw the wrapper and went completely still. All of him. The crown came off whatever he'd been about to say, and for a second he was just a boy on a cold fountain holding a hundred-yen strawberry bar like it was something that could break." },
            { s: 'jihoon', f: 'sad', t: "...That's the one. That's the exact one. You've given me that exact one every year since we were four." },
            { ifRoute: 'romance', then: [
              { n: "He didn't open it. He put it in the inside pocket of his coat, and then, without looking at her, he took her hand off the rim of the fountain and held it on his knee, loudly not saying anything, while the boy with the rose went on waiting across the plaza and the hearts turned over their heads in the warm air off the vents." },
              { s: 'jihoon', f: 'happy-2', t: "I'm having it framed. Don't argue. It's going on a wall. A big wall. Mine." }
            ], else: [
              { s: 'jihoon', f: 'happy', t: "Streak intact. Fifteen years. Write it down. Get it notarized. Nana's going to be so proud of me." },
              { n: "He ate half of it in one bite and handed her the other half without asking, which, she understood, was also part of it, and always had been." }
            ] }
          ] },
          { t: "(Make him share his two boxes first.)", notes: 2, stat: { charm: 1 }, then: [
            { s: 'jihoon', f: 'surprised', t: "Forty boxes." },
            { s: 'solar', f: 'neutral', t: "Two. One's from Junkyu. It says *from junkyu* on it." },
            { n: "He shared them. He complained the whole time, about privacy and royalty and the price of fame, and fed her the best pieces anyway, and then took the strawberry bar out of her pocket himself, because apparently he'd always known which pocket, and held it up to the light like a jeweler." }
          ] },
          { t: "White Day's in March. You owe me triple.", notes: 2, then: [
            { s: 'jihoon', f: 'neutral', t: "Triple. For a hundred yen. That's extortion. That's a crime in two countries." },
            { n: "But he went into the arcade right then, and came out twenty minutes and two thousand yen later with a plush strawberry from the crane game, and shoved it into her arms, and said that was triple, and early, because he didn't believe in waiting for things, and didn't look at her when he said it." }
          ] }
        ] }
      ] }
  });

  holiday('jungwon', {
    '2/14': { rank: 3, flag: 'year-goes-on', title: "valentine's day", place: "Iwatodai Strip · Yeobo's Cafe", time: 'Daytime', bg: 'flashback-yeobos-cafe', music: 'tender',
      ask: "Sunoo has made heart-shaped croissants. He says I'm not allowed to eat one alone. Are you free this afternoon?", yes: 'WON YES. omw!!', ok: "Two o'clock. I've reserved the window table. He laughed at me for reserving it.", sorry: 'CANT TODAY IM SORRY :(', no: "Understood. I'll save you one. He's watching me save it. It's very uncomfortable.",
      scene: [
        { n: "Every croissant in Yeobo's case had a heart piped on it in red icing, and Sunoo was behind the counter piping more with his tongue between his teeth, and at the window table, which had a small folded card on it that said *RESERVED* in Jungwon's handwriting, Jungwon was sitting very straight in front of three boxes of chocolate he clearly didn't know what to do with." },
        { s: 'jungwon', f: 'neutral', t: "They were in the council room. On Friday. From first-years. I don't go to this school. I don't know how they knew I'd be there. I've written thank-you notes. I can't accept them without giving something back. I've drafted a schedule." },
        { s: 'sunoo', f: 'happy', t: "He has a White Day SPREADSHEET, Solar. It has a column for budget." },
        { s: 'jungwon', f: 'flustered', t: "At Hanlim they were in my locker. In the other place they came by courier, with a card from somebody's mother. This is the first year anyone's handed me one and run away. It's very disorienting." },
        { n: "She had hers in her bag. She'd wrapped it herself. It had taken three tries, and it still wasn't square, and she knew before she took it out that he would notice that first." },
        { choose: [
          { t: "(Give him yours. Watch him not know what to do with it.)", notes: 3, then: [
            { n: "He noticed it wasn't square. She watched him notice. He didn't fix it. He held it on the flat of his palm like a document he'd been asked to sign and couldn't find anything wrong with." },
            { ifRoute: 'romance', then: [
              { s: 'jungwon', f: 'flustered', t: "This one doesn't go on the schedule." },
              { n: "He put it in the inside pocket of his blazer, over his heart, where his watch hand usually went, and then reached across the table and moved a crumb off her sleeve, very precisely, and left his fingers on her wrist one second after the crumb was gone, which for Yang Jungwon was a declaration in front of witnesses. Sunoo, behind the counter, piped a heart so hard it burst." }
            ], else: [
              { s: 'jungwon', f: 'neutral', t: "White Day is the fourteenth of March." },
              { n: "He said it the way he said budget lines, and then didn't say anything else for a moment, and looked out at the Strip." },
              { s: 'jungwon', f: 'happy', t: "I'll owe you. I'm writing it down. I'll owe you anyway." }
            ] }
          ] },
          { t: "(Help him finish the White Day schedule.)", notes: 2, stat: { knowledge: 1 }, then: [
            { n: "She took the red pen. They went through it line by line, three first-years and a budget of four thousand yen and a column labeled *appropriate gesture*, which she renamed *cookies*, and he objected, and she underlined it, and he let it stand, which Sunoo said he had never once seen him do for anybody." }
          ] },
          { t: "(Steal Sunoo's icing. Write his name on a croissant.)", notes: 2, stat: { charm: 1 }, then: [
            { n: "Sunoo handed her the icing bag before she'd even asked. She wrote *WON* on the biggest croissant in the case, in red, crooked, with a heart for the O, and put it on his plate, and Jungwon looked at it for a long time with the expression of a man reading his own name on a ballot, and then ate it, slowly, all of it, and wouldn't let anybody else have a bite." }
          ] }
        ] }
      ] }
  });

  /* ── Story events ── */
  (W.FEMC_GAME_EVENTS ||= []).push(
    { id: 'a6-quiet-moon', date: '1/30', slot: 'late', flag: 'year-goes-on', title: 'a quiet moon', place: 'Iwatodai Dorm · Lounge', time: 'Late Night', scene: [
      { music: 'night' },
      { n: "Nobody said they were waiting up. Nobody went to bed either. By half past eleven on the thirtieth of January the whole dorm was in the lounge in its pajamas and its coats, Junpei on the floor with a cushion, Yukari pretending to read, Ken asleep sitting up against Koromaru, who wasn't, and the full moon so bright through the gap in the curtains it laid a white bar across the carpet you could have read by." },
      { n: "Every full moon since April had meant the armbands, the van, something enormous waiting. Tonight Mitsuru had said at dinner, in the voice she used for the weather, that Tartarus would be closed, as it always was on the full moon, and that nothing was scheduled. Then she'd come down at eleven anyway, with a book and her Evoker, and taken the armchair nearest the door." },
      { s: 'akihiko', f: 'neutral', t: "Feels wrong. Sitting down on a full moon." },
      { s: 'junpei', f: 'happy', t: "Feels amazing. I'm sitting down so hard right now. Personal best." },
      { place: 'Iwatodai Dorm · Lounge · The Dark Hour', time: 'The Dark Hour', soft: true, music: 'eerie' },
      { n: "Midnight. The lamps went out and the green came down the way it always did, the clock over the television stopping with its second hand mid-step, the fridge cutting off like a held breath. At the end of the sofa Hanni and Hyein, wrapped in one blanket, stayed exactly as they were, because they always did, and Hyein said *ugh* the way she always did, and Hanni found her hand under the blanket the way she always did." },
      { s: 'fuuka', f: 'neutral', t: "I'm looking. I'm looking everywhere. The tower, the streets, the station..." },
      { s: 'fuuka', f: 'surprised', t: "...Nothing. There's nothing. Not one. The whole city's quiet." },
      { n: "Nobody moved. The moon sat over the bay enormous and white and empty, and the green lay on the city like water standing on a floor, and nothing came up the stairs, and nothing came out of the dark, and the dorm sat in the middle of it, awake, all together, listening to nothing at all." },
      { n: "Then, a long way off, from somewhere over the water or under the city or neither, a train horn. One long low note, the kind that carries for miles on a cold night. It went on, and on, and faded. It didn't come any closer. Nothing arrived." },
      { n: "Aigis turned her head toward the window. Koromaru's ears went up and stayed up. Solar found her hand had closed hard around the arm of the sofa, and that she wasn't afraid, exactly. It was more like hearing your name called in a crowd, and turning round, and nobody being there." },
      { s: 'solar', f: 'neutral', t: "Not yet." },
      { n: "She hadn't known she was going to say it. Nobody asked her what she meant. Mitsuru looked at her across the dark lounge for a long moment and then went back to her book, which she couldn't have been reading, not in the green, and turned a page anyway." },
      { choose: [
        { t: "(Stay on the sofa with everyone until it's over.)", then: [
          { n: "She stayed. They all stayed. When the hour ended the lamps came back on mid-flicker and the fridge started humming as if it had never stopped, and Junpei was asleep on the floor with his mouth open, and nobody woke him, and nobody went up to bed for a long time after that either." }
        ] },
        { t: "(Go to the window. Look at the moon.)", then: [
          { n: "She stood at the window with the curtain in her hand. The moon looked back, full and quiet and in no hurry at all. Somebody came and stood beside her without saying anything. Then somebody else. By the time the green lifted there were six of them at the glass, shoulder to shoulder, watching a sky with nothing in it, as if somebody had asked them to keep an eye on it." }
        ] }
      ] }
    ] },

    { id: 'a6-graduation', date: '3/5', slot: 'morning', flag: 'year-goes-on', title: 'graduation', place: 'Gekkoukan High · Front Gate', time: 'Morning', scene: [
      { music: 'tender' },
      { n: "The cherry trees along the path to the gate weren't out yet. They were close, the buds gone fat and pink at the ends of the black branches, a week off, maybe two, and every third-year coming up the hill in a pressed uniform with a paper flower pinned to their chest looked up at them on the way in and did the same small arithmetic, and came out with the same answer. They'd just miss it." },
      { place: 'Gekkoukan High · Gymnasium', time: 'Morning' },
      { n: "The gym had been turned into somewhere else for the morning. Red and white bunting on every wall, folding chairs in long straight rows, the heaters ticking under the windows and losing. The graduates at the front, the parents behind them in good coats, and at the back, with the rest of the second year, Yukari with a handkerchief already in her fist, Junpei with something rolled up under his chair he'd been told twice he couldn't unroll, and Fuuka, who wasn't graduating, who had nothing to graduate from, crying steadily since the anthem." },
      { n: "Mitsuru gave the graduates' address. She walked to the podium with a folded paper she never once unfolded and spoke for four minutes in the clear carrying voice that had been running this school for two years, about the building and the teachers and the years, and every word was exactly right, the way every word she said in public was." },
      { s: 'mitsuru', f: 'neutral', t: "...And to those of us who came here not knowing whether we belonged. You did. I'm told it's customary to say so. I'm saying it because it's true." },
      { n: "She bowed. For one second at the bottom of the bow, where only the front rows could see, her composure went, completely, and came back, and she walked to her seat with her chin up and sat down beside Akihiko, who didn't look at her, and leaned his shoulder against hers, once, and let her be." },
      { n: "Then the names. Class by class, each graduate standing at their own and answering and sitting down again, a long patient wave going through the rows. Akihiko answered his so loud the microphone squealed. Somebody's grandmother laughed. He went red to the ears and didn't sit down one bit faster." },
      { n: "Her homeroom. Her row. Aigis upright beside her. Their teacher read down the list in the careful voice of someone who'd practiced it in the staff room to be sure, and came to her, and stopped." },
      { s: 'teacher', t: "Solar." },
      { n: "Just that. The teacher looked at the line a moment longer, where something else should have come next, and the gym waited, three hundred people and the ticking heaters, and nothing else came. It had been blank in April. It was blank now. She'd stopped noticing sometime around June. She noticed it now." },
      { choose: [
        { t: '"Here."', then: [
          { n: "She stood and said it clearly, to the whole gym, the way you answer to a name you've decided is enough. Somewhere at the back somebody started clapping, which you were not supposed to do, and Yukari hissed at Junpei, and Junpei kept going, and by the time Solar sat down half the second year was doing it too." }
        ] },
        { t: '(Stand. Let the quiet be what it is.)', then: [
          { n: "She stood and didn't say anything, not right away. She let the gap sit there in front of everyone, where the rest of her name should have been, and found she wasn't ashamed of it. Then she said *here*, quietly, and sat down, and Aigis, without turning her head, put her hand over Solar's on the chair between them and left it there for the rest of the names." }
        ] }
      ] },
      { place: 'Gekkoukan High · Front Gate', time: 'Late Morning', music: 'sun' },
      { n: "They were all outside the gate when the third-years came out. Outside it, not in; they'd never once come through it all year, not even today, as if there were a line painted on the pavement only they could see. Hanni with a bouquet so big Hyein had to help hold it up. Minji with the camera already rolling. Jihoon on the wall with a cardboard sign that said CONGRATULATIONS in letters that got smaller toward the end because he'd run out of room. Koromaru in the middle of all of them, in a bow tie Ken had chosen." },
      { s: 'hanni', f: 'happy', t: "You graduated! Sol! You graduated! Hyein, she graduated!" },
      { s: 'hyein', f: 'sad', t: "I'm standing right next to you. I watched her come out the door. I'm crying, leave me alone." },
      { n: "Behind them, half a step back, the rest. People who'd come a very long way to stand outside a school gate in the cold with flowers and a sign and a dog in a bow tie, and who didn't say a word about tomorrow. Not one of them. Mitsuru came out with her diploma tube under her arm and stopped dead at the sight of them all, and Akihiko walked straight into her back." },
      { n: "Solar stood at the gate with the tube in her hand and the paper flower on her chest. Above her the buds were very close now. A week. Maybe less." }
    ] }
  );
})();
