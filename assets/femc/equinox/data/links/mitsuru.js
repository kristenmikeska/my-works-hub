/* Persona 3: Equinox · Mitsuru Kirijo · III The Empress. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1–6 (ranks 1–2 from 4/13; her home is Tuesday and Thursday evenings, so 4/13 itself). Rank 3 (from 6/8: the terrace, the bridge, the
   command room; branches on eqx-mitsuru-watch, eqx-stage, eqx-last-grain) records her ask: tally asks.mitsuru (+ cakes / choose).
   Ranks 4–6 written (Nov 16): rank 4 (after 7/8, Tue/Thu evening: the terrace, then the Group's waterfront lot, then the dorm
   steps; branches on ifEvent eqx-tanabata and ifChoice asks.mitsuru) sets eqx-mitsuru-key (Solar takes the bike's spare key).
   Rank 5 (after 8/27, so 8/31 at the earliest: the terrace with Mr. Ishida, then the bridge home; reads eqx-mitsuru-key,
   ifEvent eqx-incheon, ifChoice asks.mitsuru) sets eqx-mitsuru-bag (Solar carries Ishida's konpeito up to her stair).
   Rank 6 (after 9/28: the terrace five days after the bridge, Moonlight Bridge, the lounge; reads eqx-mitsuru-bag,
   eqx-mitsuru-watch, eqx-hanne-reported, eqx-mitsuru-pending) sets eqx-floor-mitsuru (her ask floor in the Well).
   Ishida speaks in narration only (no portrait), as in story-act3.js. Nothing reads the new flags yet.
   Ranks 7–10 still to write.
   Shape: the stub fields from assets/femc/equinox/data/links.js (this file wins over the stub, core.js indexLinks).
   Solstice's ranks are shared memory here (the list, the spare helmet, the PENDING stamp); nothing reads Solstice link standing.
   Flags this file sets: eqx-mitsuru-pending (rank 1: Solar stamps the blank form PENDING). Nothing reads it yet.
   Rank 2 (after 4/22): reads eqx-supper-stayed / eqx-supper-mine (story-act1 4/16) for Solar's figures; sets eqx-mitsuru-watch
   (Solar wears the loaned watch); ifAfter 4/29 for Mr. Tanabe. Nothing reads the new flag yet. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'mitsuru', name: 'Mitsuru Kirijo', short: 'Mitsuru', arcana: 'Empress', numeral: 'III', from: 'Persona 3', kind: 'sees',
  romance: null, starts: '4/8', lodging: 'dorm',
  home: { area: 'portisland', spot: 'Café Terrace', slot: 'evening', days: [2, 4],
          hint: 'Tuesday and Thursday evenings, on the café terrace by Port Island Station, between lectures and the Group.' },
  approach: "On the café terrace by Port Island Station, under the only patio heater that's on, a woman in a gray suit has two folders open, a cup of black coffee going cold, and a pen held like it's about to sign something important.",
  cast: {},
  ranks: [
    { after: '4/13', title: '1: pending', place: 'Port Island Station · Café Terrace', time: 'Evening', music: 'city', scene: [
      { bg: 'portisland-station-night' },
      // BG: portisland-cafe-terrace-evening — a small café terrace beside a busy station in the blue hour of a spring evening, a few metal tables, one tall patio heater glowing orange, commuters streaming past the railing, the monorail lit up overhead.
      { n: "The café by Port Island Station put its tables out on the terrace in April whether April wanted them or not, and at half past six on a Tuesday there was nobody sitting at them but one woman in a gray suit, under the only patio heater that had been switched on, with two folders open in front of her and a cup of black coffee that had stopped steaming some time ago." },
      { n: "Mitsuru had told everyone at breakfast that she had a seminar until six. Solar had asked, very casually, where she went after. Mitsuru had looked at her over the rim of her cup for exactly as long as it took to decide whether that was a question she wanted asked, and said, the terrace by the station, Tuesdays and Thursdays, in a voice that made it sound like a meeting room number." },
      { n: "The commuters went past the railing in a long gray river, heads down, and the monorail went over all of them with its windows lit, and the heater ticked. Mitsuru didn't look up when Solar pulled out the other chair. She turned one of the folders over, face down, with two fingers, the way you'd turn over a card you didn't want read." },
      { s: 'mitsuru', f: 'neutral', t: "You're early. I said six forty-five." },
      { s: 'solar', f: 'neutral', t: "You said Tuesdays." },
      { s: 'mitsuru', f: 'neutral', t: "...I did. That was imprecise of me." },
      { n: "She raised two fingers at the window without looking, and a waiter who had clearly been warned about her came out at once with a second cup, and Mitsuru said thank you to him in a way that made him stand up straighter, and he went back in looking like he'd been decorated." },
      { choose: [
        { t: "(Look at the folder she turned over.)", notes: 2, then: [
          { n: "She looked at it. Mitsuru watched her look at it, and put her hand flat on top of it, not hurriedly, the way you'd rest your hand on a dog's head to keep it lying down." },
          { s: 'mitsuru', f: 'serious', t: "Group business. Not interesting. Drink your coffee." }
        ] },
        { t: "How's university?", notes: 3, then: [
          { s: 'mitsuru', f: 'neutral', t: "Very orderly. They give you a syllabus on the first day and everything on it happens on the date it says." },
          { s: 'mitsuru', f: 'neutral', t: "I find it restful. I sit in the third row and take notes on corporate governance and nobody in the room has ever been inside a coffin." },
          { n: "She said it so evenly that it took Solar a second to hear it was a joke, and by then Mitsuru was drinking her cold coffee as if she hadn't made one." }
        ] },
        { t: "You missed your seminar again, didn't you.", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "I attended the first forty minutes. Then the Group telephoned." },
          { s: 'mitsuru', f: 'serious', t: "It telephones a great deal this year." }
        ] }
      ] },
      { n: "Up close she looked like she'd been awake since April. Not untidy. Mitsuru didn't know how to be untidy. But there was a ledger at her elbow under the folders, the cloth-bound one from the lounge, and Solar could see the edge of the page it was open at, columns ruled by hand, and the columns had gone on past where the printed lines stopped, down into the margin, in smaller and smaller writing." },
      { s: 'mitsuru', f: 'neutral', t: "Beds." },
      { n: "She said it the way other people said *hello*, and turned the ledger round so Solar could read it." },
      { s: 'mitsuru', f: 'neutral', t: "The dorm has twenty-two, if we use the study room and Hanni stops sleeping in the hall. The guesthouse has eleven rooms. The Group owns a building in Tatsumi with forty more that we'll never need, and I've had it aired anyway." },
      { s: 'mitsuru', f: 'serious', t: "And the boarding house has eight. Upstairs. Made up." },
      { n: "She tapped the last line with her pen. Under the number she'd written, in her small neat hand, *cups (8), upside down, on trays*, and underlined *cups* twice." },
      { s: 'mitsuru', f: 'serious', t: "I didn't order cups. I didn't order anything. I didn't sign the lease. The lease was signed when I arrived, on the Group's paper, with the Group's seal, and the seal is genuine, the same way the school's stamp on your form is genuine." },
      { s: 'mitsuru', f: 'neutral', t: "I've had three offices look for whoever drafted it. Legal. Property. My father's old secretary, who is retired and furious with me. Nobody drafted it. It was in the file." },
      { choose: [
        { t: "Somebody's expecting more people.", notes: 3, then: [
          { s: 'mitsuru', f: 'serious', t: "Yes." },
          { n: "She didn't add anything. She didn't have to. She'd been doing this sum since two in the morning on the seventh, Solar thought, standing in the lounge counting heads, and then counting beds, and finding that the beds came out ahead." }
        ] },
        { t: "Mrs. Oka seemed kind.", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "She was. Extremely. She remembered how I take my coffee and I'd told her once." },
          { s: 'mitsuru', f: 'neutral', t: "I find I can't hold that against anyone. I've tried. It's a very small thing to be suspicious of a woman for." }
        ] },
        { t: "(Count the beds again yourself.)", notes: 2, then: [
          { n: "She ran her finger down the column. Twenty-two, eleven, forty, eight. She added them, and then added the people at breakfast, and the guesthouse, and Shinjiro on the ward, and came out with a number she didn't like, and looked up, and Mitsuru was watching her with the expression of someone who'd come out with the same one." },
          { s: 'mitsuru', f: 'neutral', t: "Yes. I know. I've done it eleven times." }
        ] }
      ] },
      { s: 'mitsuru', f: 'neutral', t: "Did you notice that there's no clock in that house?" },
      { s: 'solar', f: 'neutral', t: "...No." },
      { s: 'mitsuru', f: 'serious', t: "I was there forty minutes on Friday. I checked my watch at the gate on the way in and on the way out. It said I'd been there two hours." },
      { s: 'mitsuru', f: 'neutral', t: "I've had the watch serviced. There's nothing wrong with the watch." },
      { n: "The heater ticked. A train came in below them and let out its people, and they streamed past the railing in their coats, and a child on a woman's hip looked over her shoulder at Mitsuru's table with great seriousness all the way to the stairs." },
      { n: "Mitsuru drew the face-down folder back toward her, and for a while she didn't say anything, and Solar saw her decide something, the way she'd always decided things, all at once, with a small straightening of the spine. She turned it over." },
      { n: "It was a hospital form. Tatsumi Memorial's crest, a typed name, *Hata*, a date, Saturday, and a box marked *cause*, and in the box, in somebody's tidy medical hand, *cerebrovascular accident*. And at the bottom, under *for the Kirijo Group*, a signature Solar knew, because she'd watched it get signed on council papers for a whole year." },
      { s: 'mitsuru', f: 'sad', t: "The Group pays for that ward. When something happens on it, I'm asked to sign that the Group has been informed. That's all it is. It's a formality." },
      { s: 'mitsuru', f: 'serious', t: "I read the attending physician's notes before I signed. I always read everything. It's a failing." },
      { s: 'mitsuru', f: 'serious', t: "He weighed less than his pajamas should have, Solar. That's the sentence in the notes. The doctor crossed it out afterward. I could still read it." },
      { n: "She closed the folder. She did it gently, the way you'd close a door on someone sleeping." },
      { s: 'mitsuru', f: 'sad', t: "I signed it. A stroke. It's what the doctor wrote, and he's a doctor, and I'm a nineteen-year-old in a borrowed office. And Shinjiro won't sleep in the red, and I signed it anyway." },
      { choose: [
        { t: "You didn't do anything wrong.", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "I know. That isn't the same as having done something right. My father taught me the difference. It's the only thing he taught me that I'd like to forget." }
        ] },
        { t: "(Put your hand on the folder. On top of hers.)", notes: 3, then: [
          { n: "She put her hand on the folder, on top of Mitsuru's, which was cold, colder than the evening, as if she'd been holding it flat on that folder since before Solar sat down. Mitsuru looked at their two hands for a long moment and didn't move hers." },
          { s: 'mitsuru', f: 'sad', t: "...Thank you. That's not a thing I'm good at being given." },
          { s: 'solar', f: 'neutral', t: "I know." }
        ] },
        { t: "What did the doctor think it was?", notes: 2, then: [
          { s: 'mitsuru', f: 'serious', t: "He thinks it was a stroke. He thinks so very firmly. He thought so firmly enough to cross out the other sentence." },
          { s: 'mitsuru', f: 'neutral', t: "People are very good at thinking firmly. I'm one of them. It's how I've been sleeping." }
        ] }
      ] },
      { ifAfter: '4/29', then: [
        { s: 'mitsuru', f: 'sad', t: "I signed another one. On the twenty-ninth. Mr. Tanabe. *Cardiac.* I didn't read the notes that time. I want you to know I didn't read them." },
        { s: 'mitsuru', f: 'sad', t: "It's the first thing in my life I've ever signed without reading. I keep thinking it should feel worse than it does. That's what frightens me." }
      ] },
      { n: "She put the hospital folder under the other one. Then she took something out of her jacket pocket and set it on the table between their cups, on the metal, with a small precise click." },
      { n: "A wooden stamp. Small, the handle worn pale. Solar didn't need to turn it over." },
      { s: 'mitsuru', f: 'neutral', t: "You left it in the drawer of your desk. With your handbook and a pen that didn't work." },
      { s: 'mitsuru', f: 'neutral', t: "The helmet's in my closet. I checked on the seventh, at four in the morning, with a torch, like a burglar. The engraving's still there. Your name." },
      { s: 'mitsuru', f: 'neutral', t: "Akihiko lost his stopwatch. Things of ours stayed. Things of yours stayed where you'd left them, as if they'd been told to wait. I don't know what that means. I've written it down." },
      { choose: [
        { t: "You kept them.", notes: 3, then: [
          { s: 'mitsuru', f: 'neutral', t: "I kept the room. The things were in it. That's not sentiment, it's housekeeping." },
          { n: "She said it in exactly the voice she'd used, a year ago, to say *it isn't a kidney* about a helmet, and Solar watched her hear that, and not take it back." }
        ] },
        { t: "(Pick up the stamp. It's lighter than you remember.)", notes: 2, then: [
          { n: "She picked it up. It was lighter than she remembered, or her hand was older. The ink pad was long dry. There was still red in the letters, down in the grooves, where it had never quite washed out." }
        ] },
        { t: "You checked at four in the morning?", notes: 2, then: [
          { s: 'mitsuru', f: 'surprised', t: "...It was a long night. I wanted to know what I was responsible for." },
          { s: 'mitsuru', f: 'neutral', t: "It turned out to be a helmet. I found that very reassuring. I sat on the closet floor for some time." }
        ] }
      ] },
      { n: "Then she opened the thin folder. The one Solar had seen in her hand on the eighth outside the faculty office, or its twin. One sheet. A Kirijo Group form, not the school's, typed and blank, and at the top in English and Japanese, *Residency (Port Island)*, and a row of boxes waiting." },
      { s: 'mitsuru', f: 'neutral', t: "This is a form. It has a box for a surname. It has a line for a signature, and the signature has to be yours." },
      { s: 'mitsuru', f: 'serious', t: "I'm not asking you to fill it in. I want that understood. I had it drawn up because somebody else drew up your enrollment form, and I would very much like the next piece of paper with your name on it to have been drawn up by someone who knows you." },
      { s: 'mitsuru', f: 'neutral', t: "It will sit in my folder. That's all. The offer from last year stands, and the form is where it stands now. That's housekeeping too." },
      { n: "She said it plainly. She said everything plainly. But she had squared the sheet against the edge of the folder three times while she said it, and the third time her thumb had stayed on the surname box, flat, as if it might move." },
      { choose: [
        { t: "(Ink the stamp on the dregs of the coffee. Stamp the form PENDING.)", notes: 3, flag: 'eqx-mitsuru-pending', then: [
          { n: "She tipped her cup, wet the dry pad of the stamp in the last cold mouthful of coffee, and pressed it once, square, in the empty surname box. It came out brown instead of red, faint, but legible. *PENDING.*" },
          { n: "Mitsuru looked at it for a long time." },
          { s: 'mitsuru', f: 'surprised', t: "...That's coffee." },
          { s: 'solar', f: 'happy', t: "It's what we had." },
          { s: 'mitsuru', f: 'happy', t: "It's a legal document, Solar. You've stamped a legal document with a beverage." },
          { n: "She didn't blot it. She slid the form back into the folder very carefully, so the stamp wouldn't smudge, and closed it, and kept her hand on it, and Solar saw the corner of her mouth fail, for a second, to stay where she'd put it." }
        ] },
        { t: "Leave it in your folder. I'll know where it is.", notes: 3, then: [
          { s: 'mitsuru', f: 'neutral', t: "Good. That's where it'll be." },
          { s: 'mitsuru', f: 'neutral', t: "Somewhere you'll know if it moves." }
        ] },
        { t: "What would you put in the box?", notes: 2, then: [
          { s: 'mitsuru', f: 'serious', t: "Nothing. That's the point of it being your form." },
          { n: "She closed the folder. Then, a moment later, as if it had been pulled out of her by a hook, very quietly, to the folder and not to Solar:" },
          { s: 'mitsuru', f: 'sad', t: "...I'd stamp it myself. You know I would. I'm not saying that. I've said it once. Saying it twice would be asking." }
        ] }
      ] },
      { place: 'Port Island Bridge', time: 'Evening', bg: 'rooftop-citynight', soft: true },
      // BG: port-island-bridge-night — the long road bridge from Port Island back across the bay at night, seen from the road, streetlamps in a row, the lit town on the far shore and the dark river mouth below.
      { n: "She had the motorcycle in the station's staff lot, which the station certainly didn't allow, and the spare helmet was strapped to the back of it, and she held it out to Solar at arm's length, the way she always had, as if it might bite. Inside the shell, small and neat, where nobody but the person wearing it would ever see, was a single word." },
      // CG: eqx-mitsuru-helmet — close on a pair of hands in a gray suit sleeve holding out a white motorcycle helmet, its padded inside turned toward the viewer, one small neat word engraved in the shell; a station lamp behind, out of focus.
      { s: 'mitsuru', f: 'neutral', t: "The long way?" },
      { n: "They took the long way. Over the bridge with the bay black on both sides and the town coming toward them in a scatter of lit windows, and then not left, toward the dorm, but right, along the river road, where the houses got older and the streetlamps further apart and the river ran beside them flat and dark. Solar felt Mitsuru choose it. She felt her shoulders do it under her hands, the small hard set of someone driving toward a thing on purpose." },
      { n: "They slowed outside the boarding house. They didn't stop. The persimmon tree stood over the wall with its new leaves black against the sky, and the house was dark, every window, as a house ought to be at nine with an old woman asleep in it." },
      { n: "Then, upstairs, as they passed, a light came on." },
      { n: "One window, at the end of the row of eight. Warm and yellow behind the paper of the screen, the color of a lamp on a desk, the color of a light in a room somebody's kept made up for someone. Nobody moved behind it. Nobody came to the window. It was just on, all at once, as if it had been waiting for them to be close enough to see it." },
      { choose: [
        { t: "(Tighten your arms round her.)", notes: 3, then: [
          { n: "She tightened her arms round Mitsuru's waist without meaning to, and felt Mitsuru feel it, and felt the bike pick up speed, not much, a little, the way you'd walk a little faster past a dog that hadn't decided yet whether to bark." }
        ] },
        { t: "(Look back at it until the road bends.)", notes: 2, then: [
          { n: "She turned her head inside the helmet and watched the light until the road bent and the wall took it. It didn't go out. It was still on when she lost it, a small warm square at the end of a dark house, and for the rest of the way home she could see it when she closed her eyes." }
        ] },
        { t: "Mitsuru. Upstairs.", notes: 2, then: [
          { s: 'mitsuru', f: 'serious', t: "I saw." },
          { n: "That was all she said. She didn't slow. Over her shoulder, through the visor, Solar saw her look once in the mirror, and then not look again, the way you don't look at a window you've heard something tap on." }
        ] }
      ] },
      { n: "At the dorm she took the helmet back and strapped it to the bike and stood for a moment in the lamplight with her own helmet under her arm and her hair flattened on one side, which she would have been mortified to know, and Solar didn't tell her." },
      { s: 'mitsuru', f: 'neutral', t: "Thursday. Six forty-five. I'll be precise this time." },
      { s: 'mitsuru', f: 'neutral', t: "And Solar. If you're ever at that house, and you look at your watch, look at it again when you leave. Write both down. I'd like a second set of figures." },
      { n: "She went in ahead of her. In the lounge, under the whiteboard with its two halves, VISITORS on the left and ARRIVALS on the right with nothing under it but a gray thumb-smudge, Mitsuru stopped, and uncapped a marker, and stood there with it raised for a long moment, as if she'd been about to write something and had decided it wasn't true yet." },
      { n: "Then she capped it and went up to bed. Solar heard her door, and the lock, and then, a minute later, a drawer open and shut, softly, the way you'd check that something was where you'd left it." }
    ] },
    { after: '4/22', title: '2: a second set of figures', place: 'Port Island Station · Café Terrace', time: 'Evening', music: 'city', scene: [
      { bg: 'portisland-station-night' },
      // BG: portisland-cafe-terrace-evening (as rank 1) — the same terrace in a thin spring rain, the awning dripping, one patio heater glowing.
      { n: "It was raining on Thursday, the thin cold rain that came in sideways off the bay in April and didn't seem to fall so much as hang, and the café had pulled its awning out over the terrace and left the tables where they were, wet, and the heater on, because Mitsuru had telephoned ahead. Solar knew she had. Nobody else was sitting out. The waiter brought the second cup before she'd finished sitting down, and didn't meet her eyes, and went back in as if he'd been told the terrace was a meeting room and the meeting had started." },
      { n: "Mitsuru had a notebook open this time instead of the folders. A plain one, black, with a ribbon. She'd ruled two columns down the first page in pencil, and at the top of the left one she'd written *M.K.*, and at the top of the right one *S.*, and the right one was empty." },
      { s: 'mitsuru', f: 'neutral', t: "Six forty-four. You're precise this time. So am I." },
      { s: 'mitsuru', f: 'neutral', t: "I asked you for a second set of figures. You've been to the house since. I'd like them, please. Exactly as you remember them, not as you think they should have been." },
      { n: "She uncapped her pen and held it over the empty column, and waited, and Solar realized she'd been waiting like that since six forty-four, and possibly since Tuesday." },
      { ifFlag: 'eqx-supper-stayed', then: [
        { s: 'solar', f: 'neutral', t: "I got there at ten past four. I looked." },
        { s: 'mitsuru', f: 'neutral', t: "And you left?" },
        { n: "She opened her mouth to say it and there was nothing there to say. A kitchen. The steam. A bowl being filled for her, and then filled again, and Mrs. Oka's voice going on low and warm about something, the river, her mother's mother, how you fold the edge of a dumpling so it holds. And then the dorm steps, and the cold, and Hanni sitting on them in her coat with her phone in both hands, standing up so fast she nearly fell." },
        { s: 'solar', f: 'serious', t: "I don't know. Hanni says I came up the hill at eleven forty-one. I don't remember the hill." },
        { n: "Mitsuru didn't write anything for a moment. Then she wrote *16:10* in the right-hand column, and under it *23:41*, and between them, very small, a dash, and looked at the dash as if it had said something rude to her." },
        { s: 'mitsuru', f: 'serious', t: "Seven and a half hours. And supper." },
        { s: 'mitsuru', f: 'sad', t: "...You don't have to tell me what you ate. I'd rather you didn't. I'd rather not have it in the notebook." }
      ], else: [ { ifFlag: 'eqx-supper-mine', then: [
        { s: 'solar', f: 'neutral', t: "Ten past four in. I left before supper. It was two minutes past five at the gate." },
        { s: 'solar', f: 'neutral', t: "Then I walked home. It's twenty minutes, the long way. The dorm clock said quarter past six." },
        { s: 'mitsuru', f: 'neutral', t: "Did you stop anywhere?" },
        { s: 'solar', f: 'serious', t: "No. I had two rice cakes in a napkin and I didn't stop once. I wanted to get them out of my hands." },
        { n: "Mitsuru wrote it down. *16:10. 17:02. 18:15.* She drew a small careful box round the last two figures, and then, after a moment, round the whole of the walk home." },
        { s: 'mitsuru', f: 'serious', t: "So it isn't only the house. It's the road away from it." }
      ], else: [
        { s: 'solar', f: 'neutral', t: "I said no and I left. My phone said nine minutes." },
        { s: 'mitsuru', f: 'neutral', t: "And it felt like?" },
        { s: 'solar', f: 'serious', t: "Like an hour. Like I'd been standing in that kitchen being looked at for an hour." },
        { n: "Mitsuru wrote *9 min.*, and next to it, after a visible hesitation, in brackets, *(1 hr)*, and Solar watched her dislike putting a feeling in a column, and do it anyway, because it was data." }
      ] } ] },
      { n: "She turned the notebook so Solar could see her own column. *M.K.* Four visits, each one two figures, in and out. Forty minutes that came out as two hours. Twenty that came out as fifty. A quarter of an hour on the doorstep, never past the doorstep, that her watch said was an hour and ten. All of them long. None of them short. Not one, in four, that had come out the right size." },
      { choose: [
        { t: "It's always long. Never short.", notes: 3, then: [
          { s: 'mitsuru', f: 'serious', t: "Yes. Time doesn't go strangely there. It goes one way. It goes missing." },
          { s: 'mitsuru', f: 'neutral', t: "It's being kept. That's the word I keep writing and crossing out. As if the house were keeping it for someone." }
        ] },
        { t: "You've been back four times? Alone?", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "The Group leases it. I'm the Group, in this town. Someone has to inspect the property." },
          { s: 'mitsuru', f: 'sad', t: "...And she makes very good tea, and asks after my lectures, and I find I look forward to it. I've written that down too. Under a separate heading." }
        ] },
        { t: "(Take the pen. Underline your own figures.)", notes: 2, then: [
          { n: "She took the pen out of Mitsuru's fingers, which let it go more easily than she'd expected, and drew a line under her own column, firm, the way Mitsuru underlined the things that mattered on the lounge whiteboard. Mitsuru looked at the line for a moment and then took the pen back and underlined it again, beside hers, so there were two." }
        ] }
      ] },
      { n: "The rain thickened and thinned again. A train came in below them and its doors opened and closed on nobody. Mitsuru reached into her bag and took out a small box, old, leather gone soft at the corners, the kind a jeweler used to give you before jewelers gave you paper, and set it on the table between their cups with the same small precise click she'd used for the stamp." },
      { s: 'mitsuru', f: 'neutral', t: "Your phone is a phone. It updates itself from a tower. Mine is a phone. My watch is a good watch, but it's battery, and I don't trust anything in that house that needs a signal or a battery to tell me the truth." },
      { n: "She opened the box. A man's wristwatch, steel, plain, the face a little yellowed, the strap a dark worn leather that had taken the shape of somebody else's wrist and kept it." },
      { s: 'mitsuru', f: 'neutral', t: "It's mechanical. You wind it. It doesn't take instructions from anything. It doesn't even take them from me." },
      { s: 'mitsuru', f: 'sad', t: "It was my father's." },
      { n: "She said it in exactly the voice she'd used for *beds*. Then she looked at the watch instead of Solar and her hand stayed flat on the table beside the box, near it, not touching it, the way you'd keep your hand near something hot." },
      { s: 'mitsuru', f: 'neutral', t: "When you're at that house, wear it. In, out. Write both. That's all. I want one instrument in this town that nobody can talk to." },
      { choose: [
        { t: "(Hold out your wrist. Let her put it on you.)", notes: 3, flag: 'eqx-mitsuru-watch', then: [
          { n: "She held out her wrist. Mitsuru looked at it for a second as if it were a form she hadn't expected to be handed, and then took the watch out of the box and put it on her, and did the buckle herself, the strap going three holes past where it had been worn, so the old crease sat loose and pale against Solar's skin like a line drawn round a missing thing." },
          { s: 'mitsuru', f: 'neutral', t: "It's too big for you. He had very large hands. He used to rest one on my head when I did something correctly. It covered my whole head." },
          { s: 'mitsuru', f: 'neutral', t: "...Wind it in the morning. Twenty turns. Not more. It doesn't like to be forced." }
        ] },
        { t: "I can't take your father's watch, Mitsuru.", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "You're not taking it. You're carrying it. It's a loan. It goes back in this box at the end of every visit." },
          { s: 'mitsuru', f: 'serious', t: "I'd go myself, every time, with it on. I've tried. I come out and look at it and it's right and I don't believe it, because I'm the one who was in there. I need someone else's wrist." },
          { n: "She pushed the box an inch toward Solar. Solar didn't take it, and didn't push it back, and they left it there between them in the middle of the wet table for the rest of the evening, open, ticking very faintly under the rain." }
        ] },
        { t: "What was he like? With the watch.", notes: 3, then: [
          { s: 'mitsuru', f: 'surprised', t: "...With the watch?" },
          { s: 'mitsuru', f: 'neutral', t: "He'd look at it at the dinner table. Not to check the time. He just looked at it, when he didn't want to say something. He'd wind it instead. I could tell how a board meeting had gone by how many turns." },
          { s: 'mitsuru', f: 'sad', t: "I've been winding it every night since April. Twenty turns. I don't know what I'm not saying." }
        ] }
      ] },
      { ifAfter: '4/29', then: [
        { s: 'mitsuru', f: 'sad', t: "I told you I didn't read the notes. For Mr. Tanabe." },
        { s: 'mitsuru', f: 'serious', t: "I went back on Monday and read them. I sat in the Group's car outside the coroner's office and read every line, because not reading them was worse, and I wanted to know which kind of worse I'd chosen." },
        { s: 'mitsuru', f: 'serious', t: "The attending weighed him. Out of habit, I think. Fourteen kilos, with the uniform. He wrote it and didn't cross it out this time. He wrote it and then he wrote *scale fault?* next to it with a question mark, and signed underneath." },
        { n: "The rain ticked on the awning. Fourteen kilos. A grown man in a gray jacket at a little table with his crossword, and what was left of him in the uniform weighing what a child weighed, what a bag of rice weighed, and the rest of him gone somewhere, carried off, in the night, and somebody's tidy hand writing *scale fault* because it was the only thing in the world it could be." },
        { s: 'mitsuru', f: 'sad', t: "I keep a list of what I'm responsible for. I've added a line. I don't have a word for it yet. It's just a dash." }
      ] },
      { n: "Her phone buzzed on the table. She looked at the name on it, and her face went into its Group shape, the one with no weather in it at all, and she said *excuse me* and answered, and Solar heard the other half of it in pieces: a man's voice, careful, apologetic, procurement, a delivery, an order on the account." },
      { s: 'mitsuru', f: 'neutral', t: "...Eight." },
      { s: 'mitsuru', f: 'neutral', t: "No. I didn't. Read it to me." },
      { n: "She listened. She didn't write it down. That was the thing Solar would remember afterward: that Mitsuru, who wrote everything down, sat with the pen in her hand over the open notebook and didn't move it at all." },
      { s: 'mitsuru', f: 'neutral', t: "Thank you. No. Let it go through. Thank you." },
      { n: "She put the phone face down. She put her hand flat on top of it, the way she'd put it on the hospital folder, the way you'd keep a dog lying down." },
      { s: 'mitsuru', f: 'serious', t: "The Group's supplier delivered eight cups this afternoon. Teacups. Good ones. To the boarding house, on the Kirijo account, signed for at the door." },
      { s: 'mitsuru', f: 'serious', t: "Ordered by telephone on Tuesday. In my name. By a woman who knew my account number, and the delivery instructions, and that I take the cheaper porcelain because the good kind always breaks in the dorm." },
      { s: 'mitsuru', f: 'sad', t: "The clerk wanted me to know she'd been lovely on the phone. He said she sounded so like my mother he'd assumed I'd asked her to call." },
      { n: "She said the last word very carefully, as if it were heavy and she didn't want to drop it on the table." },
      { s: 'mitsuru', f: 'neutral', t: "My mother doesn't telephone anyone. She hasn't for years. She isn't well enough to telephone me." },
      { s: 'mitsuru', f: 'serious', t: "Eight upstairs. Eight cups on trays. And now eight more. Somebody isn't expecting more people, Solar. Somebody's setting the table for them." },
      { choose: [
        { t: "Cancel it. Send them back.", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "I thought of that. And then she has sixteen and I don't know where the second eight went." },
          { s: 'mitsuru', f: 'serious', t: "I let it go through so I'd know where they are. I'd rather know where the cups are than have them nowhere." }
        ] },
        { t: "She used your mother's voice.", notes: 3, then: [
          { n: "Mitsuru looked at her. It was the look she'd given the whiteboard with the marker raised, the look of somebody who'd thought a sentence all the way to the end and decided not to write it because it wasn't true yet." },
          { s: 'mitsuru', f: 'sad', t: "...The clerk said a nice voice. A nice older woman. I'm the one who heard the rest of it. I don't know what I'd be accusing her of. Kindness. Good teacups." }
        ] },
        { t: "(Put your hand on hers. On the phone.)", notes: 3, then: [
          { n: "She put her hand over Mitsuru's on the back of the phone. It was cold again, the way it had been on the folder, and this time it turned over under hers and held on, briefly, hard, the grip of someone checking a rail was there in the dark, and let go." },
          { s: 'mitsuru', f: 'neutral', t: "Thank you. I'm going to say something I won't repeat." },
          { s: 'mitsuru', f: 'sad', t: "I drafted the dorm's renewal this week. One more year, like last time. There's a box for the term. I wrote *one year*. Then I crossed it out. I haven't written anything in it since. It's been on my desk for four days with a line through it." }
        ] }
      ] },
      { place: 'Port Island Station · Café Terrace', time: 'Evening', bg: 'portisland-station-night', soft: true },
      { n: "She paid. She always paid. She stood under the awning buttoning her coat while the rain came down past the edge of it in a gray curtain, and the commuters went by with their umbrellas up, and the monorail went over with its windows lit, and she looked at her own watch, and then at the one Solar was wearing, or the one in the open box, and compared them, and they agreed to the minute, and she didn't look relieved." },
      { s: 'mitsuru', f: 'neutral', t: "You'll tell me if you're asked anything there. Anything at all. Even something small. Especially something small." },
      { s: 'mitsuru', f: 'neutral', t: "I'm not asking you not to go. I'd like to be very clear that I'm not asking that. I'm asking for figures." },
      { n: "She turned up her collar and went down the steps to the staff lot, where the motorcycle stood with the spare helmet strapped to it and beads of rain all over the shell, and she didn't offer the long way, and Solar didn't ask for it, and they went home the short way, over the bridge, up the hill, and didn't look down the river road at all." },
      { ifFlag: 'eqx-mitsuru-watch', then: [
        { place: 'Iwatodai Dorm', time: 'Late Night', bg: 'solar-dormroom-night', soft: true },
        { n: "At eleven fifty-nine she lay on her back in the dark with the watch on, too big, the steel cold on the inside of her wrist, and listened to it. It was loud in a quiet room. It was loud the way a heart is loud when you press your ear to a pillow." },
        { n: "At midnight it stopped. Everything stopped, in the red, the clock on the desk and the phone on her chest and the fridge downstairs. She'd known it would. It was still strange to feel it stop on her own skin, the small steady thing on her wrist simply not there anymore, the way a pulse would feel if it went." },
        { n: "When the red drained out of the window and the house came back, it started again by itself. She checked it against her phone in the gray light. One minute and four seconds behind. The hour had run over. The watch hadn't been told, and hadn't pretended. It had simply stopped for exactly as long as the hour had actually been, and kept the difference, like a receipt." },
        { n: "Down the hall, very faintly, through the wall, she heard a drawer open and shut. And then, so quiet she might have dreamed it, the small dry ratchet of somebody else winding something, twenty turns, and stopping, and not saying anything at all." }
      ], else: [
        { n: "In the lounge Mitsuru stopped at the whiteboard again, under VISITORS and ARRIVALS, with a marker in her hand. This time she wrote something. Small, in the corner of the ARRIVALS side, in pencil-gray marker that would wipe off with a thumb. *Cups (16).*" },
        { n: "Then she capped the marker and went up. Solar stood in the lounge a while looking at it, at the number in the corner of an empty column, and found that she'd started, without meaning to, counting the people asleep upstairs, and that she'd lost her place, and started again." }
      ] }
    ] },
    { after: '6/8', title: '3: the term', place: 'Port Island Station · Café Terrace', time: 'Evening', music: 'city', scene: [
      { bg: 'portisland-station-night' },
      // BG: portisland-cafe-terrace-evening (as rank 1) — the same terrace in June rain, the awning out, puddles on the tiles, one patio heater glowing though it's warm.
      { n: "June made the terrace absurd. It was warm now, close and wet, the air like a towel somebody had just used, and the café had the awning out and the heater on anyway, because the heater was on Tuesdays and Thursdays at six forty-five and nobody at the café had dared ask whether it still needed to be. Mitsuru sat under it in her gray suit with her jacket off for once, folded over the back of the chair with the lining out, and the sleeves of her blouse turned back exactly twice." },
      { n: "There was a third thing on the table now, beside the black notebook and the coffee. A sheet of heavy paper with the Kirijo crest at the top, face up. A form. Solar could read it upside down: *RESIDENTIAL LEASE RENEWAL · IWATODAI DORMITORY (ANNEX)*, and down the side a column of boxes, all filled in, in Mitsuru's small upright hand, all except one." },
      { n: "*TERM:* and a box. And in the box, the words *one year*, and a single neat line through them." },
      { s: 'mitsuru', f: 'neutral', t: "Six forty-five. Sit down. I'm going to show you something and then I'm going to ask you something, and I'd like you to know in advance that I've rehearsed both, so you don't think either of them is impulsive." },
      { ifFlag: 'eqx-mitsuru-watch', then: [
        { s: 'mitsuru', f: 'neutral', t: "First. Figures. You've been to the house since I gave you the watch. In, out. Please." },
        { n: "Solar gave them. She'd written them on the back of her hand each time and then in her phone, because she'd known Mitsuru would ask, and Mitsuru wrote them down in the right-hand column under *S.* without comment, in, out, in, out, and then sat looking at the column with her pen still." },
        { s: 'mitsuru', f: 'serious', t: "Every one long. Yours and mine. Eleven visits between us now. Not one the right size." },
        { s: 'mitsuru', f: 'neutral', t: "And the watch on your wrist agrees with the watch on mine to the second, every time you come out. It doesn't lose the time. It simply doesn't see where it went. I find that more frightening than if it had stopped." }
      ], else: [
        { s: 'mitsuru', f: 'neutral', t: "First. Figures. Mine, since you won't wear the watch. That's not a reproach. It's in the box, at home, being wound. Twenty turns." },
        { s: 'mitsuru', f: 'serious', t: "Eleven visits now. Not one the right size. I've stopped writing the feelings in brackets. They're the same every time. They're always *an hour*." }
      ] },
      { n: "She turned a page. A sketch, careful, ruled, in pencil: the upstairs corridor of the boarding house, eight rooms in a row down one side, numbered, and under each number a small drawn cup, and beside each cup a tiny arrow, up or down." },
      { s: 'mitsuru', f: 'neutral', t: "I inspected the property. Under the lease, which is my right, and which I've never once exercised on any building the Group owns, because I don't inspect things. I sign them." },
      { s: 'mitsuru', f: 'neutral', t: "Sixteen cups. Eight upstairs on the trays, eight more in the kitchen cupboard, the ones I ordered by telephone without ordering them. Every one accounted for. I counted them twice. She watched me count, and offered me tea, in one of them." },
      { ifEvent: 'eqx-stage', then: [
        { s: 'mitsuru', f: 'serious', t: "Four of the upstairs cups are the right way up now. Since the morning the girls came. She'd had the rice on since four, she said, as if she'd known." },
        { s: 'mitsuru', f: 'sad', t: "I asked the girls who turned them over. None of them had. Kazuha said they were like that when they came up. *Like somebody had been expecting us.* She said it as if it were nice." }
      ], else: [
        { s: 'mitsuru', f: 'serious', t: "All eight of the upstairs cups are upside down. Every one. As if every room were somebody's, and nobody had come home yet." }
      ] },
      { s: 'mitsuru', f: 'neutral', t: "I've stopped counting the bowls on that long table. The bowls I can't keep up with. Every week there are more, and I don't know where they come from, and I've decided, as a matter of policy, that the bowls are not my business." },
      { choose: [
        { t: "Who drew the eight rooms, Mitsuru? Who decided eight?", notes: 3, then: [
          { s: 'mitsuru', f: 'neutral', t: "The house did. It has eight rooms. That's the kind of answer I'd have accepted in April." },
          { s: 'mitsuru', f: 'serious', t: "...In April I would have accepted a great many things. I'm keeping a list of them. It's the longest list I've ever kept." }
        ] },
        { t: "(Tap the cup in the end room. The one for you.)", notes: 2, then: [
          { n: "She put her fingertip on the last drawn cup in the row. The end room. Mitsuru looked at the fingertip, and then at her, and didn't ask how she'd known which one, and wrote nothing down, which was its own entry." }
        ] },
        { t: "You went alone again.", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "I went as the Group. The Group is always alone. That's rather the point of it." },
          { s: 'mitsuru', f: 'sad', t: "...That was a sentence my father used to say. I didn't realize until it was out. Excuse me." }
        ] }
      ] },
      { ifEvent: 'eqx-last-grain', then: [
        { n: "She turned the page back. Then, after a moment, she turned it again, past the sketch, to a page that had only one line on it, and the line was a name, and the name was *Suemitsu, N.*, and next to it the date and nothing else." },
        { s: 'mitsuru', f: 'sad', t: "I read every word of that one. You saw me. I stood at her counter and read every word, and the doctor's hand shook so badly I could hardly make out *asphyxiation*, and then I signed it. I signed it knowing." },
        { s: 'mitsuru', f: 'serious', t: "I've written a word on the whiteboard that I'd never have let anyone in this family write. I'm not sorry. I'd write it bigger." }
      ] },

      { place: 'Port Island · Monorail Bridge', time: 'Night', bg: 'portisland', soft: true },
      // BG: port-island-bridge-night — the road bridge from Port Island to Iwatodai at night in light rain, the monorail track running alongside lit up, the bay black below, the town's lights ahead.
      { n: "She paid. She always paid. Then she stood under the awning with her jacket over her arm and looked at the rain and at the staff lot, where the motorcycle stood with the spare helmet strapped to the back, the engraved one that had waited in Mitsuru's closet the whole year Solar was gone, and she said *you'll get wet*, and Solar said *so will you*, and that was the whole negotiation." },
      { n: "They went over the bridge in the rain at nine. The bay was black and the monorail ran beside them on its track, lit, empty, and the wet road threw every light back up at them doubled, so that they seemed to be riding along a seam between two towns, one right way up, one hanging under it. Solar held on round Mitsuru's waist. Mitsuru rode the way she did everything: exactly as fast as it was safe to, and not a kilometer slower." },
      { n: "At the end of the bridge, where the road split, left for the river and the long way round, right for the hill and the dorm, she took the right without slowing. She'd taken the left in April. She'd taken it every time, Solar remembered, the long way past the boarding house, to see." },
      { n: "She didn't take it now. She didn't even look." },

      { place: 'Iwatodai Dorm · Command Room', time: 'Late Night', bg: 'iwatodaidorm-commandroom', soft: true },
      { n: "The command room was the way Mitsuru had kept it all year: dusted. The monitors dark, the long table polished, the chairs pushed in square, the old terminal under its cover like a piano. She turned on one lamp, the green-shaded one at the end of the table, and laid the renewal form under it, and sat, and put the pen beside the form, exactly parallel to its edge." },
      { s: 'mitsuru', f: 'neutral', t: "The Group renews this building by the year. It always has. Last April I signed *one year* without thinking about it, because a year is how long things are. A school year. A fiscal year." },
      { s: 'mitsuru', f: 'sad', t: "And at the end of it you were gone. On the day. As if the form had known." },
      { n: "She looked at the line through *one year*. It was a very neat line. It had been drawn with a ruler." },
      { s: 'mitsuru', f: 'neutral', t: "Legal has given me until the end of the month. They've given me until the end of the month twice. I've never been late with a signature in my life. I've had it on my desk for weeks with a line through the only box that matters." },
      // CG: eqx-the-term — a dim command room with dark monitors, one green-shaded lamp on a long polished table lighting a printed form with one box crossed out, a pen laid exactly parallel to its edge, a woman's hand flat beside it.
      { s: 'mitsuru', f: 'neutral', t: "So. The question. The one I rehearsed." },
      { s: 'mitsuru', f: 'serious', t: "Tell me what to write. I'd like someone else's hand on it. I can't seem to make mine do it. I'd like you to say a term out loud, any term, and I'll write it down, and the legal office will stop phoning, and I'll be able to sleep." },
      { n: "She held the pen out. Not to give it. Just to have it in the air between them, the way you'd hold out a hand to see if somebody would take it." },
      { s: 'mitsuru', f: 'sad', t: "If you said *indefinitely*, I'd write *indefinitely*. I want to be very honest that that's the word I'd like to hear. I've written it on scrap paper. Several times. It looks wonderful." },
      { choose: [
        { t: "Write indefinitely. Keep it. Keep all of us.", notes: 3, tally: { cakes: 1, 'asks.mitsuru': 'yes' }, then: [
          { n: "Mitsuru let out a breath. It went on for a long time. She didn't write it on the form. She opened the black notebook to a clean page and wrote it there first, small and upright and perfect, *indefinitely*, the way you'd copy out a word you meant to learn, and looked at it, and laid the pen down parallel to the edge again." },
          { s: 'mitsuru', f: 'happy', t: "There. There. Thank you. That's what I needed. That's exactly what I needed." },
          { s: 'mitsuru', f: 'neutral', t: "I'll copy it onto the form before the end of the month. I want to look at it for a few days first. I want to be sure it still looks like that in daylight." },
          { n: "She looked at it under the green lamp for a long time, the word on the clean page, and she looked, for the first time since April, like a woman who'd put something heavy down. Solar looked at it too. It was a good word. It was the right word, for her, for tonight. She didn't know why her hands had gone cold on the polished table." }
        ] },
        { t: "Write one year. Like last time. Then we see.", notes: 2, tally: { 'asks.mitsuru': 'no' }, then: [
          { n: "Mitsuru didn't move. Then she nodded, once, the Group nod, and opened the notebook and wrote it on a clean page, *one year*, exactly the same as the struck-out one on the form, and underlined it, and the underline was very slightly less steady than every line Solar had ever seen her draw." },
          { s: 'mitsuru', f: 'neutral', t: "Thank you. You're right. It's the sensible term. It's the term the building's always had. I'll copy it onto the form before the end of the month." },
          { s: 'mitsuru', f: 'sad', t: "...I'll have to sign it again next April, then. With you in the room, if you'd be so kind. I'm not doing it on my own a second time." }
        ] },
        { t: "It's your dorm and your pen. I'm not going to write it for you. Whatever's in that box, I'll still come home tonight.", notes: 2, tally: { choose: 1, 'asks.mitsuru': 'choose' }, then: [
          { n: "Mitsuru looked at her. A long, level look across the polished table, the look she'd given the whiteboard with the marker raised. Then the pen went back to the edge of the form, parallel." },
          { s: 'mitsuru', f: 'serious', t: "...That's not what I asked for." },
          { s: 'solar', f: 'neutral', t: "I know." },
          { s: 'mitsuru', f: 'neutral', t: "No. You're right. It's not what I asked for. It's a great deal heavier." },
          { n: "She sat for a long time. Then she opened the notebook to a clean page and curled her left arm round the top of it, the way girls did in exams, the way Mitsuru Kirijo had certainly never done in her life, and wrote something Solar couldn't see, and tore the page out along the ribbon, and folded it in three, and put it in the inside pocket of her jacket, and didn't say what it was." },
          { s: 'mitsuru', f: 'neutral', t: "When I've decided whether I meant it, it goes on the form. Not before. If you want to know what it says, you'll have to work for the Group for twenty years and get very senior. I'd recommend against it." }
        ] }
      ] },
      { n: "The lamp hummed. Downstairs somebody laughed in the lounge, Junpei, and somebody else told him to shut up, and the old building settled round them, a building with a term, or without one." },
      { ifFlag: 'eqx-mitsuru-watch', then: [
        { n: "Mitsuru held out her hand, palm up, and Solar knew what she wanted, and unbuckled the watch and gave it to her. Mitsuru wound it. Twenty turns, slow, counting under her breath, the small dry ratchet loud in the quiet room, and Solar watched her face while she did it and saw her father in it, at a dinner table, not saying something." },
        { n: "She gave it back. She did the buckle herself again, three holes past the crease." },
        { s: 'mitsuru', f: 'sad', t: "Twenty. Not more. It doesn't like to be forced. Neither, I'm learning, do people." }
      ], else: [
        { n: "Mitsuru took her own watch off, the battery one, and looked at it, and then took a small leather box out of her jacket pocket and opened it, and wound the watch inside, twenty turns, slow, counting under her breath, the small dry ratchet loud in the quiet room. She didn't put it on. She closed the box and sat with her hand flat on top of it." },
        { s: 'mitsuru', f: 'sad', t: "Twenty. Not more. It doesn't like to be forced. Neither, I'm learning, do people." }
      ] },
      { place: 'Iwatodai Dorm · Lounge', time: 'Late Night', bg: 'iwatodaidorm-livingroom-night-summer', soft: true },
      { ifFlag: 'eqx-mitsuru-watch', then: [
        { n: "On the way to bed she stopped at the whiteboard, as she always did, VISITORS and ARRIVALS, and stood in front of the empty corner at the bottom of the ARRIVALS side with the gray marker in her hand, the one that wiped off with a thumb, for a long time." },
        { n: "Then she wrote, small: *Cups (16).* And under it: *Rooms (8).*" }
      ], else: [
        { n: "On the way to bed she stopped at the whiteboard, as she always did, VISITORS and ARRIVALS, and the corner where she'd written *Cups (16)* in gray. She picked up the gray marker. She looked at the number for a long time." },
        { n: "Then she wrote, under it, small, in the same gray, so it would wipe off with a thumb if anybody asked: *Rooms (8).*" }
      ] },
      { n: "She capped the marker and went up the stairs. Solar stood in the lounge looking at the board in the light from the hall, at the two small gray numbers in the corner of a column full of names, and found she'd started counting the rooms in this building instead, the doors down every corridor upstairs with somebody asleep behind each one, and that there were a great many more than eight, and that it didn't help at all." }
    ] },
    { after: '7/8', title: '4: from the back', place: 'Port Island Station · Café Terrace', time: 'Evening', music: 'city', scene: [
      { bg: 'portisland-station-night' },
      // BG: portisland-cafe-terrace-evening (as rank 1) — the same terrace on a hot July evening, the awning rolled back, the patio heater dark for once, the sky still light over the monorail.
      { n: "The café had turned the heater off. It had taken them until the second week of July, and somebody had finally been brave enough, or hot enough, to reach up behind the tall steel column on the terrace and flick the switch, and when Solar came up the steps at six forty-four Mitsuru was sitting under it in a white blouse with her jacket folded on the next chair, looking up at the dark grille where the orange had been as if it had resigned without notice." },
      { s: 'mitsuru', f: 'neutral', t: "They didn't consult me. Which is correct. It's their heater." },
      { s: 'mitsuru', f: 'neutral', t: "I find I miss it. That's absurd. It's twenty-nine degrees." },
      { n: "The evening was thick and gold and smelled of the bay and hot pavement and the coffee nobody out here was drinking, and the commuters went past the railing with their jackets over their arms and their collars open, and the cicadas had started up somewhere in the planters below the station, one, then all of them, a sound like a pan of oil left on too long." },
      { n: "Mitsuru had a handkerchief on the table in front of her. White, ironed, folded into a square. She'd put it exactly in the middle, where the folders usually went, and she had both hands on either side of it, not touching it, the way you'd sit beside something asleep." },
      { ifEvent: 'eqx-tanabata', then: [
        { s: 'mitsuru', f: 'neutral', t: "I went back. The morning after. You know that. I told you I didn't know why." },
        { s: 'mitsuru', f: 'serious', t: "I've had a week to think about why, and I still don't, and I've decided that's information too." },
        { n: "She unfolded the handkerchief, one corner and then the next. Two paper strips inside, still curled from the rain and dried stiff, one pale yellow, one blue. She turned them over with the tip of her pen. On the back of each one, pressed so hard the paper had split along the strokes, the same word in the same heavy hand." },
        { n: "*stay*" },
        { s: 'mitsuru', f: 'neutral', t: "Yours and mine. I took them down so nobody else would turn them over. That isn't protocol. I don't have a protocol for wishes." },
        { s: 'mitsuru', f: 'serious', t: "I know this hand, Solar. I've seen it somewhere. Not on a wish. On something I was meant to read and didn't read carefully enough. I can't think where, and it's keeping me up, and I'm not used to not being able to think where." },
        { choose: [
          { t: "Then stop trying. It'll come when you're not looking.", notes: 2, then: [
            { s: 'mitsuru', f: 'neutral', t: "That's how it works for other people. I've never once found anything by not looking for it." },
            { s: 'mitsuru', f: 'neutral', t: "...But I'll try. I'll stop trying. For one evening. You'll have to tell me if I start again." }
          ] },
          { t: "(Fold the handkerchief back over them.)", notes: 3, then: [
            { n: "She folded the corners back in, one and then the next, until the two strips were a white square again with nothing showing, and Mitsuru watched her do it, and let out a breath through her nose that wasn't quite a laugh." },
            { s: 'mitsuru', f: 'neutral', t: "Thank you. I've been unfolding and folding that since Thursday. It's good to have somebody else close it." }
          ] },
          { t: "Did you photograph all of them?", notes: 2, then: [
            { s: 'mitsuru', f: 'neutral', t: "Two hundred and twelve. Front and back. Fuuka helped me catalogue them by color. She didn't ask why. She's very good at not asking why." },
            { s: 'mitsuru', f: 'serious', t: "Every back says the same thing. Every front says something different. That's what I keep looking at. All those different wishes, and someone answering every one of them the same." }
          ] }
        ] }
      ], else: [
        { n: "She unfolded it. Inside, nothing but a dry pressed leaf of bamboo, the kind they hung the wishes from at the shrine, and she turned it over with the tip of her pen as if she expected something to be written on the back of it, and there wasn't, and she folded it away again." },
        { s: 'mitsuru', f: 'neutral', t: "Never mind. I'm checking things that don't need checking. It's that sort of summer." }
      ] },
      { n: "She put the handkerchief in her jacket. Then she took a sheet of paper out of the same pocket, folded in three, and laid it flat and smoothed it, and Solar knew it before it was open by the crest at the top and the long column of boxes down the side." },
      { ifChoice: { 'asks.mitsuru': 'yes' }, then: [
        { n: "*TERM:* and the box. And in the box, in Mitsuru's small upright hand, one word, written slowly, every letter finished properly, the way you'd write on a certificate. *indefinitely.* And her signature under it. And a stamp from Legal beside that, red, dated the twenty-ninth of June." },
        { s: 'mitsuru', f: 'happy', t: "I copied it on the twenty-ninth. I looked at it in daylight for three days first, as I said I would. It still looked wonderful in daylight." },
        { s: 'mitsuru', f: 'neutral', t: "I've had the roof surveyed. The roof will need replacing in eleven years. I've put it in the schedule. I've never had a schedule for this building that went past March before." },
        { n: "She said it like a woman telling you about a holiday. And she looked better. She did. The gray under her eyes had gone a shade lighter, and she'd laughed at breakfast twice that week, at Junpei, which was unheard of. But her finger kept going back to the word on the form, and resting on it, and going back, the way your tongue goes back to a tooth." },
        { s: 'mitsuru', f: 'neutral', t: "I sleep better. I want to be honest about that. I sleep through. I haven't slept through since I was fourteen." },
        { s: 'mitsuru', f: 'serious', t: "I wake at four anyway. Every night. Exactly four. And I lie there and I'm completely rested, and I can't remember what woke me." }
      ], else: [ { ifChoice: { 'asks.mitsuru': 'no' }, then: [
        { n: "*TERM:* and the box. And in the box, in Mitsuru's small upright hand, *one year*, and her signature under it, and Legal's red stamp beside that, dated the twenty-ninth of June. The struck-out version was gone. She'd had it redrawn on a clean sheet so there'd be no line on it at all." },
        { s: 'mitsuru', f: 'neutral', t: "Filed. On time, or nearly. Legal sent me flowers. I think it was sarcasm. I've kept them anyway; they're on the command room table and Aigis waters them at four-hour intervals." },
        { s: 'mitsuru', f: 'neutral', t: "I've written the next one in my diary. *April. Renewal. With S.* It's the only entry in next year's diary. It looks very lonely." },
        { n: "She tapped the line where it said *one year* and didn't look sad about it, quite. She looked like someone who'd been told the exact size of a thing she was frightened of and found, to her surprise, that it fitted in her hand." }
      ], else: [
        { n: "*TERM:* and the box. Empty. No line through it now, no *one year*, nothing. Clean. She'd had it redrawn." },
        { s: 'mitsuru', f: 'neutral', t: "Legal has stopped telephoning. I think they've decided I've had a breakdown. They're being very kind to me in memos." },
        { s: 'mitsuru', f: 'serious', t: "The page I wrote is still in my jacket. I haven't copied it on. I take it out sometimes and read it. I'm not sure yet whether I meant it." },
        { s: 'mitsuru', f: 'neutral', t: "It's the only blank box I've ever left anywhere. I check it every morning. It's still blank. I find that I'm proud of it, and that frightens me nearly as much as the alternative." }
      ] } ] },
      { n: "She folded the form back into three and put it away. Then she drank the last of her coffee, which was cold, and set the cup down on its saucer exactly in the ring it had left, and looked at Solar across the table with the expression she used for budgets." },
      { s: 'mitsuru', f: 'neutral', t: "You can't drive." },
      { s: 'solar', f: 'neutral', t: "...No?" },
      { s: 'mitsuru', f: 'neutral', t: "It wasn't a question. I checked. You've never held a license in any of your— in any country. I'd like to correct that. Tonight. Now, in fact. I've arranged it." },
      { choose: [
        { t: "You've arranged it.", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "There's an empty lot behind the Group's warehouse on the waterfront. It's floodlit. Nobody uses it after six. I've told the guard we're testing tires." },
          { s: 'solar', f: 'neutral', t: "Are we?" },
          { s: 'mitsuru', f: 'neutral', t: "We'll certainly be testing something." }
        ] },
        { t: "Why now?", notes: 3, then: [
          { s: 'mitsuru', f: 'serious', t: "Because if something happens to me at night, somebody needs to be able to get the bike home. And everyone else I trust with it is either Akihiko, who would crash it on purpose to see what happened, or Aigis, who would carry it." },
          { n: "She said *if something happens to me at night* the way she said everything, with no weather in it at all. Solar waited for her to take it back. She didn't." }
        ] },
        { t: "(Look at the motorcycle in the staff lot. Look back at her.)", notes: 2, then: [
          { n: "She looked down over the railing at the staff lot, at the red bike standing in its usual illegal place with the spare helmet strapped to it, and back at Mitsuru, who had already stood up and was putting her jacket on, one arm and then the other, as if the matter had been settled by a vote she'd held while Solar wasn't looking." }
        ] }
      ] },

      { place: 'Port Island · Waterfront Lot', time: 'Evening', bg: 'port-island-pier', soft: true },
      // BG: port-island-kirijo-lot-evening — a wide empty concrete lot behind a pale warehouse on a bay waterfront at summer dusk, painted parking lines faded nearly to nothing, two tall floodlights coming on, stacked shipping containers at one edge and the water at the other.
      { n: "The lot was a flat gray plain the size of two football pitches, behind a warehouse with KIRIJO in tall pale letters along the top and nothing in its windows, and the floodlights were coming on as they rolled in, one, then the other, buzzing, so that the concrete went from gold to white under them in two stages while the sky over the water was still pink. There were faded parking lines on it that nobody had parked in for years. There were gulls. There was one guard in a hut by the gate, who saluted Mitsuru with two fingers and then went very carefully back to his newspaper." },
      { n: "Mitsuru stopped the bike in the middle of all of it and got off and stood beside it with the engine still ticking, and pointed at the seat." },
      { s: 'mitsuru', f: 'neutral', t: "On. Feet flat. If you can't put both feet flat you're not sitting on it, you're perching. Don't perch." },
      { n: "She taught the way she did everything else: in order, without hurrying, and without one wasted word. Clutch. Throttle. Front brake, back brake, which one you never touch in a corner. She stood at Solar's shoulder and put her hand over Solar's on the left grip to show her the friction point, the exact place in the lever's travel where the engine started to take hold, and held it there, still, until Solar could feel it too, the small live give under her fingers like something waking up." },
      { s: 'mitsuru', f: 'neutral', t: "There. That's the point. Everything in riding is that point. You find it, and you stay on it, and you don't panic." },
      { n: "Solar stalled it four times. The fifth time she let the clutch out too fast and the bike leapt forward a meter like a startled horse and stopped dead, and she sat there with her heart going and her hands locked on the grips, and from behind her came a sound she had never in two years heard Mitsuru Kirijo make. A snort. Short and helpless and entirely undignified." },
      { s: 'mitsuru', f: 'flustered', t: "...I apologize. That was— I apologize. You looked exactly like I did." },
      { s: 'mitsuru', f: 'neutral', t: "I learned here. In this lot. When I was fifteen. A man from my father's night unit taught me. He had very little patience and a great deal of time, which is the right way round. He said I rode like I was signing something." },
      { s: 'mitsuru', f: 'neutral', t: "I stalled it eleven times. You have six to go before you're as bad as I was." },
      { n: "On the seventh try it went. Slowly, at a walking pace, the engine grumbling, the floodlights sliding past overhead, and Solar went in a long wobbling circle round the lot with her elbows locked and her knees clamped to the tank and Mitsuru walking beside her, then jogging, then stopping in the middle of the concrete and turning on the spot to keep her in sight, calling *eyes up, eyes up, look where you want to go, not at the ground, you'll go where you look*." },
      { n: "By the fourth circle she'd unlocked her elbows. By the sixth she'd found second gear and the wind had started to come at her through the open visor, warm and salty and smelling of diesel and the bay, and she'd stopped hearing her own heart. By the eighth she came round past Mitsuru at a speed that actually counted as speed, and Mitsuru, in the middle of the lot with her arms folded, nodded once as she went by, the Group nod, and Solar felt it all the way down her back." },
      { s: 'mitsuru', f: 'neutral', t: "Good. Stop there. Now the difficult part." },
      { n: "She came over and unstrapped the spare helmet, the engraved one, and put it on her own head. Then she stood beside the bike with her hand on the seat behind Solar, and didn't get on, for a long moment, and Solar realized she was looking at the seat the way she'd looked at the form with the empty box." },
      { s: 'mitsuru', f: 'neutral', t: "I've never been a passenger. Not on this. Not on anything with two wheels." },
      { s: 'mitsuru', f: 'serious', t: "He offered, once. The man who taught me. He said I should know what it felt like from the back. I said I didn't see the point. I'd be the one driving." },
      { choose: [
        { t: "Get on. I've got you.", notes: 3, then: [
          { n: "Mitsuru looked at her through the visor. Then she swung her leg over and sat down behind her, very upright, not touching, her hands on her own knees, as far back on the seat as the seat went." },
          { s: 'mitsuru', f: 'neutral', t: "...That was a very confident sentence for someone who stalled six times." }
        ] },
        { t: "You don't have to.", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "I know. That's why I'm going to." },
          { n: "She got on. She sat bolt upright, as far back as the seat allowed, with her hands flat on her own thighs, like a woman on a train who'd been told not to touch anything." }
        ] },
        { t: "(Hold out your hand behind you without looking.)", notes: 3, then: [
          { n: "She held her hand out behind her, palm up, without turning round, the way Mitsuru had held out the spare helmet in April at arm's length. There was a pause. Then a gloved hand took it, briefly, and used it to step up, and let it go, and Mitsuru was sitting behind her, very straight, not touching." }
        ] }
      ] },
      { n: "She went. First gear, second. The lot opened out in front of her under the white lights, and the bike was heavier with two, and slower to answer, and she felt it lean and felt herself lean with it and for one second felt the whole thing start to go and then it didn't, it came up, and behind her there was a sharp intake of breath and two hands landed on her waist." },
      { n: "Not lightly. Not politely. Mitsuru's hands closed on her sides through her shirt and held on, hard, the grip of somebody grabbing a rail in the dark, and stayed there." },
      { s: 'mitsuru', f: 'surprised', t: "*Solar.*" },
      { s: 'solar', f: 'neutral', t: "I've got it." },
      { s: 'mitsuru', f: 'flustered', t: "You've got it. Yes. You've got it. I'm aware that you've got it. I'm simply— I'm holding on. That's what it's for. That's what this part's for." },
      { n: "She went round again, along the water side of the lot where the floodlights ended and the concrete ran out to a low steel rail and then nothing but the bay, black now, the lights of Iwatodai across it in a long low scatter, and the warm wind came off the water and into her face, and Mitsuru's hands stayed where they were. Then, on the long straight, slowly, Solar felt them change. Not let go. Settle. The fingers loosening, and the weight coming forward, and Mitsuru's helmet coming to rest, very lightly, between Solar's shoulder blades, the way a tired person leans their head on a train window." },
      // CG: eqx-mitsuru-passenger — a red motorcycle on a wide floodlit lot by a dark bay at night, a girl driving with her visor up and her eyes on the road, a red-haired woman riding behind her for once, both hands on the girl's waist, her helmet tipped forward against the girl's back, the lights of a town across the water.
      { choose: [
        { t: "(Keep going. Don't say anything.)", notes: 3, then: [
          { n: "She kept going. Round the lot, and round again, along the water and back under the lights, and didn't say anything, and Mitsuru didn't say anything, and the engine said everything there was to say for both of them, steady, low, the only sound for a kilometer." }
        ] },
        { t: "Faster?", notes: 2, then: [
          { n: "There was a pause. A long one. Then, muffled through two helmets, very quietly, against her back:" },
          { s: 'mitsuru', f: 'neutral', t: "...A little." },
          { n: "She went a little faster. Behind her Mitsuru made a sound that might have been a laugh if it had been allowed out, and her hands tightened, once, and then didn't." }
        ] },
        { t: "How's the view from the back?", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "Very poor. I can't see anything. I can see your shoulder. I have no idea where we're going." },
          { s: 'mitsuru', f: 'neutral', t: "...It's extraordinary. I can't imagine why anyone would choose it." },
          { n: "She didn't take her head off Solar's back while she said it." }
        ] }
      ] },
      { n: "When she stopped, finally, back in the middle of the lot, and put her feet down flat the way she'd been told, Mitsuru didn't get off at once. She sat there behind her with her hands still on Solar's waist and the engine ticking and the gulls complaining somewhere over the containers, and then she took her hands back, one and then the other, and put them on her own knees, and sat up straight." },
      { s: 'mitsuru', f: 'neutral', t: "Look at your watch." },
      { n: "Solar looked. Mitsuru, behind her, was already looking at her own. Forty minutes, by both of them, since the gate. The guard's clock in the hut window, when they rolled past it on the way out, said the same, to the minute. The sky had gone from pink to dark blue in exactly the time a sky should take." },
      { s: 'mitsuru', f: 'neutral', t: "The right size. Forty minutes. The first thing all summer that's been the size it says it is." },
      { s: 'mitsuru', f: 'neutral', t: "I'm going to write it down. I'd like one figure in that notebook that isn't a dash." },

      { place: 'Iwatodai Dorm · Front Steps', time: 'Night', bg: 'iwotodaidorm-outside', soft: true },
      { n: "Mitsuru drove them home. The short way, over the bridge, up the hill, and she rode it the way she always did, exactly as fast as it was safe to and not a kilometer slower, and Solar sat behind her and held on, and noticed that it felt different now that she knew what it was like from the front, and didn't say so." },
      { n: "On the steps, under the light, with her helmet under her arm and her hair flattened on one side again, Mitsuru took a key off her ring. A small one, steel, worn bright along the teeth, on a plain red tag." },
      { s: 'mitsuru', f: 'neutral', t: "The spare. For the bike. There's only ever been the one spare. My father had it, and then nobody did." },
      { s: 'mitsuru', f: 'serious', t: "I'd like you to have it. And I'd like you never to need it. I'd like both of those things very much, and I'm aware that I can't arrange the second one." },
      { choose: [
        { t: "(Take it. Put it on your own keys.)", notes: 3, flag: 'eqx-mitsuru-key', then: [
          { n: "She took it, and threaded it onto her own ring right there on the step, between the dorm key and a small plastic bear Hanni had given her, and Mitsuru watched the red tag go round on the ring and settle, and her mouth did the thing at the corner that it did when she'd been handed a figure she liked." },
          { s: 'mitsuru', f: 'neutral', t: "Good. Twenty minutes, twice a week, in the lot. Until you can do it without your knees. Tuesdays after the terrace." },
          { s: 'solar', f: 'neutral', t: "That's a schedule." },
          { s: 'mitsuru', f: 'happy', t: "It's a schedule. You've noticed I like those." }
        ] },
        { t: "Keep it for now. I'll ask for it when I need it.", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "...Yes. That's sensible. I'll keep it on me. Exactly here." },
          { n: "She put it back on her ring, but at the very end, by itself, apart from the others, where she'd be able to find it in the dark by touch, and closed her hand round the ring, and put it in her pocket with her hand still round it." }
        ] },
        { t: "If something happens to you at night, Mitsuru, I'm not getting the bike. I'm getting you.", notes: 3, then: [
          { n: "Mitsuru looked at her for a long time, on the step, under the light, with the key held out between them and the moths going round and round the lamp." },
          { s: 'mitsuru', f: 'sad', t: "...That's not what the key is for." },
          { s: 'solar', f: 'neutral', t: "I know." },
          { n: "She put the key in Solar's hand anyway, and closed Solar's fingers over it with her own, and held them closed a second longer than she needed to, and went in without saying goodnight, which she'd never once done." }
        ] }
      ] },
      { n: "In the lounge the whiteboard said what it had said all month. VISITORS, ARRIVALS, the long columns of names, and in the bottom corner in gray, small, *Cups (16). Rooms (8).* Mitsuru stopped in front of it with her helmet still under her arm and looked at the gray numbers for a while." },
      { n: "Then she took out the black notebook, and opened it to the page with the two columns, *M.K.* and *S.*, all the figures in and out and every one of them long, and at the bottom of it, under all of them, she wrote, small and upright and very firmly: *Lot. 40 min. 40 min.*" },
      { n: "And next to it, after a moment, where she'd always drawn the dash, she drew nothing at all." }
    ] },
    { after: '8/27', title: '5: a paper bag', place: 'Port Island Station · Café Terrace', time: 'Evening', music: 'city', scene: [
      { bg: 'portisland-station-night' },
      // BG: portisland-cafe-terrace-evening (as rank 1) — the same terrace at the very end of August, the light going orange early, a few dry leaves blown in against the railing, the heater dark.
      { n: "The last Tuesday of the summer holidays had the smell of every last day of every summer, hot dust and sunscreen and the first dry leaf that had come down too soon, and the terrace was full for once, students who'd come into the city to buy their stationery and had sat down because the light was nice, so that Mitsuru's table under the dead heater was the only quiet one, and the waiter had put a little RESERVED card on it that Solar was fairly sure the café had never owned before this year." },
      { n: "Mitsuru wasn't alone at it." },
      { n: "A man in a dark suit was sitting in Solar's chair. Older, gray at the temples, with a face like a shut door and very kind eyes, a man who sat the way policemen sat, with his back to the wall and the whole terrace in front of him, and who stood up the moment he saw her come up the steps, before she'd even reached the table, and bowed, and moved to the next chair without being asked, and was suddenly a man waiting for a bus." },
      { n: "Ishida. From the three breakfasts. From the konbini, ten paces behind her father, paying for Kit Kats." },
      { s: 'mitsuru', f: 'neutral', t: "You've met Mr. Ishida. He insisted on reporting in person. I told him the telephone was perfectly adequate. He told me the telephone was for people who didn't want to see your face when they said it." },
      { n: "Ishida, in his next chair, inclined his head about a centimeter, which seemed to be all the agreement he was prepared to put on record." },
      { n: "On the table between the cups were three folders, not two, each with a name on the tab in Mitsuru's hand. *LEE (R).* *LEE (S).* *KIM.* And on top of the middle one, absurd, a small brown paper bag folded over at the top, the kind a corner shop gives you, with a grease spot on one side." },
      { s: 'mitsuru', f: 'neutral', t: "Everyone ate breakfast. Everyone ate lunch. Mr. Lee, the American one, ate lunch for the first time since Thursday, because his son put it in front of him and stood there. Your Korean father has walked the river path twice a day at the same hours, and Mr. Sakai has walked it with him at four meters, and neither of them has said one word to the other in six days, and Mr. Sakai reports that it's going very well." },
      { s: 'mitsuru', f: 'neutral', t: "Mrs. Kim has found the shopping arcade. Mr. Kubo has carried eleven bags. He's asked me to put in writing that he doesn't mind." },
      { n: "She went through it the way she'd once gone through the dorm's power bills, figure after figure, in order, and Solar realized somewhere around Mrs. Kim's eleventh bag that she was being given a report on her own parents, all six of them, every meal, every walk, and that Mitsuru had been doing this for six days for someone nobody had asked her to report to." },
      { choose: [
        { t: "You're keeping a file on my parents.", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "Three files. They're very thick already. Your Korean mother's is the thinnest. She doesn't do anything anyone can see; she simply makes everyone else's day go correctly. Mr. Ishida has described her as *a colleague*." },
          { n: "Ishida, in his chair, looked at the bay. The corner of his mouth went somewhere and came back." }
        ] },
        { t: "Thank you. For all of it.", notes: 3, then: [
          { s: 'mitsuru', f: 'neutral', t: "It's nothing. It's what the Group does. It's what it ought to have done all along." },
          { s: 'mitsuru', f: 'sad', t: "...My father would have had them in a hotel by now with a fence round it. I keep wanting to. I keep not doing it, because they're your parents, and they're not mine to put anywhere." }
        ] },
        { t: "(Look at the paper bag.)", notes: 2, then: [
          { n: "She looked at the bag. Mitsuru saw her look at it, and her ears, of all things, went faintly pink, and she moved it two centimeters to the left with one finger as if that made it less visible." },
          { s: 'mitsuru', f: 'neutral', t: "That's not Group business." }
        ] }
      ] },
      { n: "Ishida reached over and unfolded the top of the bag, with the care of a man defusing something, and tipped it a little toward Solar. Konpeito. The tiny knobbed sugar stars, pink and white and yellow and pale green, a whole bag of them, the cheap kind from the jar on the counter of every old sweet shop in Japan." },
      { n: "He didn't say anything. He spoke the way he'd been described: barely, and only when it was worth the trouble. But he looked at Mitsuru, and then at Solar, and said, in a low dry voice, *Ojou-sama was eight. Her father's dinners went on very late. I was posted in the hall. She sat on the stairs with her shoes off and pretended she wasn't waiting for him. I'd bring her these. She ate the green ones last.*" },
      { s: 'mitsuru', f: 'flustered', t: "Mr. Ishida. Kirijo-san, please. I've asked you every year for eleven years." },
      { n: "*Ojou-sama,* Ishida agreed, peacefully, and took a pink one out of the bag and ate it." },
      { choose: [
        { t: "(Take a green one. Hand it to Mitsuru.)", notes: 3, then: [
          { n: "She found a green one, pale as a mint, and held it out across the table. Mitsuru looked at it. Then at Ishida, who was looking very hard at the bay. Then she took it, and put it in her mouth, and closed her eyes for exactly one second, and opened them again as if nothing had happened, and Solar saw her jaw move as she cracked it." },
          { s: 'mitsuru', f: 'neutral', t: "...They're the same. They're exactly the same. I didn't think they'd still make them the same." }
        ] },
        { t: "She waited on the stairs?", notes: 2, then: [
          { n: "*Every night he had a dinner,* Ishida said. *She'd do her homework on the stairs. She'd correct it twice. Then she'd do the next day's.*" },
          { s: 'mitsuru', f: 'neutral', t: "I was very well prepared for school." },
          { n: "She said it to the coffee. Ishida didn't say anything else. He didn't need to. Solar could see it anyway: a small girl with her shoes off on a cold staircase, waiting for a door to open, and a man in a dark suit in the hall below who'd decided one night that waiting ought to come with something sweet." }
        ] },
        { t: "So you're the one who taught her to ride.", notes: 3, then: [
          { n: "Ishida looked at her properly for the first time. Then at Mitsuru, mildly, the look of a man who's just learned what's been said about him behind his back." },
          { n: "*Eleven stalls,* he said. *And she argued with every one of them.*" },
          { s: 'mitsuru', f: 'flustered', t: "The clutch was badly adjusted." },
          { n: "*It was not,* Ishida said, to the bay, and ate a yellow one." }
        ] }
      ] },
      { n: "Mitsuru's phone went. She looked at the name and her face went into its Group shape, and she stood and said *excuse me* and walked to the far end of the terrace with it against her ear, and stood at the railing with her back to them in the orange light, one hand flat on the rail." },
      { n: "Ishida waited until she was out of earshot. Then he leaned forward a little, his forearms on his knees, his big hands loose between them, and spoke to the table between his shoes, low enough that it was only for Solar." },
      { n: "*She was fourteen the first time she signed something for the Group,* he said. *A form for a building. She read every page. It took her four hours. Her father was proud of that. I wasn't. A girl that age should get to sign things without reading them. Birthday cards.*" },
      { n: "*She'll sign anything now if it keeps you people in one place. I can see it on her. She's started making lists of who's where. Every hour. She doesn't know she's doing it.*" },
      { choose: [
        { t: "I know. I've seen the notebook.", notes: 2, then: [
          { n: "*Then you know,* Ishida said. *Good. Somebody besides me should.*" }
        ] },
        { t: "What should I do?", notes: 3, then: [
          { n: "He thought about it. Seriously, for a long time, the way he seemed to think about everything, as if every answer cost him something and he wanted to be sure it was worth it." },
          { n: "*Make her eat,* he said finally. *She forgets. And go places with her where nobody needs her for an hour. She won't go on her own. She doesn't know there are any.*" }
        ] },
        { t: "Who looks after you, Mr. Ishida?", notes: 3, then: [
          { n: "He looked up, surprised, the first surprise she'd seen on that shut-door face. Then something in it eased, very slightly, the way a door eases when the wind changes." },
          { n: "*My daughters,* he said. *Badly. They telephone on Sundays and tell me to retire.* He turned a sugar star over in his fingers. *I tell them I'll retire when Ojou-sama doesn't need a man in the hall.*" },
          { n: "*That was a joke,* he added, after a moment, in case she hadn't been able to tell, and she hadn't." }
        ] }
      ] },
      { n: "He sat back. He looked down the terrace at Mitsuru, at the railing, with the phone at her ear and the light in her hair, and then he said one more thing, quieter, not really to Solar at all." },
      { n: "*That house where they've put your mothers. I've done nights in this town for twenty years. I know what the hour sounds like in every street.* He turned the sugar star over again. *That house doesn't sound like anything. It's the only house in Iwatodai that's quiet all night. Even the river goes quiet going past it.*" },
      { n: "*I don't like a house that quiet,* he said, *with three women in it I'm paid to mind.* And then Mitsuru was coming back up the terrace with the phone in her hand, and he was a man waiting for a bus again, and had never said anything at all." },
      { s: 'mitsuru', f: 'neutral', t: "Legal. They'd like to know why the Group is paying for a hydrofoil it used once in August and a hotel in Incheon it didn't use at all. I've told them it was a team-building exercise." },
      { ifEvent: 'eqx-incheon', then: [
        { s: 'mitsuru', f: 'serious', t: "...Which it wasn't. You were there. I don't know what it was. I looked at a list of places we have hotels and my pen stopped. I've never in my life let a pen stop on its own." },
        { s: 'mitsuru', f: 'neutral', t: "And at the gangway I didn't call anyone. You saw that too. I wanted to say *come on*. I wanted to say it more than I've ever wanted to say anything. And I thought, if I say it, they'll come because I said it. And I'd have to carry that. Every one of them, on my say-so." },
        { s: 'mitsuru', f: 'sad', t: "I stood there with the passenger list and didn't say it. It was the hardest thing I've done this year, and nobody will ever know I did it. Except you. Now." }
      ] },
      { ifChoice: { 'asks.mitsuru': 'yes' }, then: [
        { s: 'mitsuru', f: 'neutral', t: "The roof's scheduled. I've had the boiler looked at. I've ordered new mattresses for the third floor for next spring, and the spring after. I've made a schedule for the dorm that goes to two thousand and twenty." },
        { n: "She said it brightly. Ishida, beside her, didn't look at her. He looked at the paper bag and didn't eat anything out of it." }
      ] },
      { n: "She sat down. She looked at the three folders, and then at Ishida, who was looking at the bay, and lowered her voice, not much, the way you lower it in a library out of habit rather than need." },
      { s: 'mitsuru', f: 'neutral', t: "I picked them myself. The three of them. Out of the whole Group. Do you know why?" },
      { s: 'mitsuru', f: 'serious', t: "Because they were in my father's night unit. Years ago. Before S.E.E.S., before any of us. Men who were awake in the hour. Who stood in corridors in the green with coffins all round them and didn't scream, and were paid never to talk about it, and never did." },
      { s: 'mitsuru', f: 'serious', t: "Everybody else the Group could send me would be asleep in a box at midnight. I wasn't going to put your mothers next to a man in a box. I wanted men who'd be standing up." },
      { choose: [
        { t: "That's the right reason.", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "I know. I've checked it against every other reason I have, and it's the right one." },
          { s: 'mitsuru', f: 'sad', t: "...It's also true that I wanted someone in that house I'd known since I was eight. I've checked that one too. It's also true." }
        ] },
        { t: "Did they want to come?", notes: 3, then: [
          { n: "Mitsuru looked at Ishida. Ishida, at the edge of the conversation, without turning his head from the bay, said one word, dry as a biscuit. *Yes.*" },
          { s: 'mitsuru', f: 'neutral', t: "I asked each of them. In person. I gave each of them a day to say no. Mr. Kubo said yes before I'd finished the sentence. Mr. Sakai nodded. Mr. Ishida asked me if I'd eaten." },
          { s: 'mitsuru', f: 'neutral', t: "I hadn't. He took me to a noodle stall. That was the whole interview." }
        ] },
        { t: "(Look at Ishida. Then back at her.)", notes: 2, then: [
          { n: "She looked at Ishida, at the shut-door face turned toward the bay and the big hands loose between his knees, and back at Mitsuru, and Mitsuru, watching her, nodded once, very slightly, as if Solar had read a figure off the page correctly without being told where to look." }
        ] }
      ] },
      { n: "They walked down to the staff lot together at nine, the three of them, Ishida ten paces behind. Mitsuru had the bike's keys in her hand. She looked at them, and then at Solar." },
      { ifFlag: 'eqx-mitsuru-key', then: [
        { s: 'mitsuru', f: 'neutral', t: "You have your own. Show him. He'll want to see the stalls are down to two." }
      ], else: [
        { s: 'mitsuru', f: 'neutral', t: "Would you like to take it home? I'll be on the back. He'll be behind us in the car. He'll be very critical." }
      ] },
      { place: 'Port Island · Waterfront Lot', time: 'Night', bg: 'port-island-pier-night', soft: true },
      { n: "She didn't go straight home. Mitsuru said *the lot*, behind her, as they came off the station ramp, the way you'd say *left here*, and so they went down to the waterfront first, to the empty floodlit plain behind the warehouse with KIRIJO along its roof, and the guard in his hut saluted with two fingers, and behind them the Group's black car rolled in through the gate and stopped by the containers with its engine running." },
      { n: "Solar went round the lot. Once, twice, along the water and back under the lights, with Mitsuru on the back holding on, and on the third circle Mitsuru tapped her shoulder twice, which meant *stop*, and got off, and walked over to the car, and stood beside its open window with her arms folded, the way she'd stood in the middle of the lot in July." },
      { n: "So Solar went round on her own. Watched. By two of them now. Mitsuru at the window and, inside the car, a gray head turning slowly to follow her round the whole lot, the way a lighthouse turns. She found second gear without looking for it. She took the corner by the containers without her knees. She came round past the car at a speed that counted as speed, and through the open window she heard, quite clearly, over the engine, a low dry voice say one word." },
      { n: "*Better.*" },
      { n: "And then, as she went on round, Mitsuru's voice, sharper, offended, carrying across the concrete: *Better than what?* And the dry voice, not at all offended: *Than you, Ojou-sama. At fifteen.*" },
      { n: "When she stopped, Mitsuru was standing with her hand on the car roof and her head down, and her shoulders were shaking, and it took Solar a long, stupid moment, sitting on the bike with her feet flat on the concrete, to understand that she was laughing, silently, helplessly, with her forehead nearly on the roof of a company car, and that the man inside it was looking straight ahead through the windscreen with the faint fixed satisfaction of somebody who'd been waiting four years to say that." },
      { n: "Solar drove. Over the bridge in the last of the light with Mitsuru behind her, holding on, less tightly than in July and not at all politely, and the Group's black car behind them at exactly the distance a car should be, its headlights steady in her mirror the whole way across, like a lamp somebody had left on in a hall." },
      { n: "At the dorm Ishida got out of the car and inspected her parking, which was crooked, and said nothing about it, which was worse. Then he bowed to Mitsuru, and to Solar, and got back in, and before he pulled the door shut he held something out through the window. The paper bag. Folded over again at the top. A little lighter." },
      { n: "*The green ones,* he said, *are for the stairs.*" },
      { choose: [
        { t: "(Take it for her.)", notes: 3, flag: 'eqx-mitsuru-bag', then: [
          { n: "She took it, because Mitsuru's hands were full of helmet and keys and she'd gone suddenly, oddly still, and the car pulled away down the hill with its lights steady, and turned toward the river street, toward the quiet house, and was gone." },
          { n: "Upstairs, outside Mitsuru's door, Solar put the bag down on the top stair. Not the floor. The stair. She didn't know why. It seemed to be where it went." }
        ] },
        { t: "(Let Mitsuru take it.)", notes: 2, then: [
          { n: "Mitsuru took it. She held it in both hands with the helmet hooked over one wrist and watched the car go down the hill with its lights steady and turn toward the river street, toward the quiet house, and go, and she stood there holding the bag long after there was nothing to watch." }
        ] }
      ] },
      { n: "At midnight, in the red, Solar lay awake and heard it through the wall: not the drawer, this time, and not the watch. A small dry crinkle of paper. Then nothing. Then, a long time later, very quietly, the crack of something small and sugary between someone's back teeth, the way a girl eats the last one on a staircase, when nobody's going to come up it tonight after all." }
    ] },
    { after: '9/28', title: '6: three names', place: 'Port Island Station · Café Terrace', time: 'Evening', music: 'tender', scene: [
      { bg: 'portisland-station-night' },
      // BG: portisland-cafe-terrace-evening (as rank 1) — the same terrace on the first cold evening of autumn, the tables empty, dry leaves under them, the one patio heater lit orange again.
      { n: "The heater was on." },
      { n: "That was the first thing Solar saw, coming up the station steps on Tuesday at six forty-four, before she'd let herself look for anything else. The first cold evening of the autumn, a thin wind off the bay with an edge on it, the trees round the station dropping their leaves all at once as if they'd had enough, and the tall steel column on the terrace glowing orange again over one table. Somebody had switched it on. Somebody had come out and reached up behind it and flicked the switch, on a Tuesday, at the usual time, for the usual table, five days after the bridge, without knowing whether anyone would come and sit under it." },
      { n: "Mitsuru was there." },
      { n: "She was sitting very straight in her gray suit with nothing on the table at all. No folders. No notebook. A cup of black coffee the waiter had brought without being asked, untouched, and her two hands flat on the metal on either side of it, the way she'd had them on either side of the handkerchief in July. She'd lost weight in five days. It was in her wrists. It was in the way her collar sat." },
      { n: "She didn't look up when Solar sat. The waiter came with the second cup and set it down and stood there a moment longer than he needed to, and then, very quietly, said something Solar didn't catch, and Mitsuru said *thank you* to him in the voice that made waiters stand up straighter, and he went back in with his head down." },
      { s: 'mitsuru', f: 'neutral', t: "He said he was sorry for my loss. He saw it in the paper. *Three Kirijo employees in a bridge accident.* I wrote the statement. *Accident* was the only word Legal would accept." },
      { s: 'mitsuru', f: 'neutral', t: "I nearly didn't come. I came because it's Tuesday. I thought if I stopped coming on Tuesdays I'd stop doing everything else as well, and I can't afford to stop doing everything else." },
      { choose: [
        { t: "I'm glad you came.", notes: 3, then: [
          { s: 'mitsuru', f: 'neutral', t: "...Yes. I am too. I think. Ask me again in an hour." }
        ] },
        { t: "(Turn your chair so you're beside her, not across.)", notes: 3, then: [
          { n: "She stood up and moved her chair round the little table, metal legs scraping on the tiles, and sat down again beside Mitsuru instead of across from her, so that they were both facing the same way, out over the railing at the station and the bay and the bridge, and their shoulders were nearly touching. Mitsuru didn't say anything about it. After a while her shoulder came the last centimeter." }
        ] },
        { t: "Have you eaten?", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "Shinjiro left a plate outside my door this morning with a note that said *eat this or I'm telling Akihiko*. I ate it. It was a threat I found credible." },
          { s: 'mitsuru', f: 'neutral', t: "...Somebody told me once to make sure I ate. I've been trying to do as I was told." }
        ] }
      ] },
      { n: "For a long time she didn't say anything else. The wind came up the steps and pushed a drift of leaves under the table and against Solar's ankles, dry and light, and the heater ticked, and below them the trains came in and let out their people, coats buttoned now, collars up, and none of them looked up at the two girls under the orange light." },
      { s: 'mitsuru', f: 'neutral', t: "I went to Okayama on Sunday." },
      { s: 'mitsuru', f: 'neutral', t: "Mr. Kubo's mother. She runs a small shop that sells school uniforms. She'd closed it. There was a sign in the window in his handwriting, from when he was a boy, that said *back soon*, and she'd put it up." },
      { s: 'mitsuru', f: 'sad', t: "He sent her money on the twenty-fifth. Every month. I knew that. I'd told you that. The twenty-fifth was two days after. So on the twenty-fifth I put it in an envelope myself and I took it to her. The same amount. To the yen. I'd looked it up." },
      { s: 'mitsuru', f: 'sad', t: "She gave it back to me. She was very polite. She said she didn't want the Group's money, she wanted her son's, and they weren't the same, and I was a kind girl to bring it." },
      { n: "She said *kind girl* the way you'd say the name of an illness." },
      { s: 'mitsuru', f: 'neutral', t: "Mr. Ishida's daughters were at his. Both of them. They held each other up. The younger one asked me if he'd been frightened. I said no. I said he was talking to someone the whole time, keeping her calm." },
      { s: 'mitsuru', f: 'neutral', t: "That was true. It's the only true thing I said all day." },
      { s: 'mitsuru', f: 'serious', t: "Nobody came to Mr. Sakai's. Nobody. He didn't have anyone. I stood in the hall by myself for two hours, and the man at the desk kept looking at me, and I didn't know what you do at a funeral when you're the only one, so I just stood there. In case somebody came late." },
      { s: 'mitsuru', f: 'sad', t: "Nobody came late." },
      { choose: [
        { t: "You were there. That's someone.", notes: 3, then: [
          { s: 'mitsuru', f: 'sad', t: "I'm the one who put him on the bridge." },
          { n: "She said it immediately, flatly, the way you'd correct a figure somebody had read out wrong. Then she heard it, out loud, on the terrace, and her hands went flat on the table again, and she didn't take it back, and Solar didn't make her." }
        ] },
        { t: "(Don't say anything. Put your hand over hers.)", notes: 3, then: [
          { n: "She put her hand over Mitsuru's on the table. It was cold, colder than the evening, the way it had been on the hospital folder in April. It didn't turn over this time. It stayed flat under hers. But it didn't move away either, and after a while it stopped being quite so cold." }
        ] },
        { t: "You should have called me. I'd have come.", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "You have three mothers missing. I'm not going to ask you to stand in a hall for a man you met twice." },
          { s: 'mitsuru', f: 'sad', t: "...I thought about it. I had my phone in my hand. That's something, I suppose. In April I wouldn't have thought about it." }
        ] }
      ] },
      { n: "She reached into her jacket. Not for a folder. She took out a small brown paper bag, folded over at the top, softened now and creased all over from being carried, with the grease spot on one side, and put it on the table between the cups, and opened it." },
      { n: "Green ones. Only green ones. About a dozen of them, pale, at the bottom of the bag." },
      { s: 'mitsuru', f: 'neutral', t: "It was in the glovebox of his car. The Group brought me his things on Saturday. His watch, his wallet, his notebook, which was all addresses, and this. The bag had a label on it in his handwriting. One word." },
      { s: 'mitsuru', f: 'sad', t: "*Ojou.*" },
      { n: "She folded the top of the bag over again. Very neatly. Twice. And put her hand on top of it, flat, the way you'd keep a dog lying down." },
      { ifFlag: 'eqx-mitsuru-bag', then: [
        { s: 'mitsuru', f: 'neutral', t: "You put the last one on my stair. In August. I found it at one in the morning. I sat on the stair and ate them. I hadn't sat on a stair since I was nine." },
        { s: 'mitsuru', f: 'sad', t: "I keep thinking I should have gone down and thanked him. It was a twenty-minute drive. I had the key in my hand." }
      ] },
      { ifFlag: 'eqx-mitsuru-watch', then: [
        { s: 'mitsuru', f: 'neutral', t: "Your wrist. May I." },
        { n: "Solar held out her wrist. She'd known Mitsuru would ask. She hadn't reset it. She'd thought about it every morning since the bridge, with her fingers on the crown, and every morning she'd wound it instead, twenty turns, and left the hands where they were." },
        { n: "The watch said ten past eight in the morning. It was six fifty-one in the evening. Mitsuru looked at it for a long time." },
        { s: 'mitsuru', f: 'neutral', t: "It stopped at five forty-two. On the sea wall. I know because mine did as well. And mine started again at four in the morning by itself and put itself right, as if nothing had happened, the way battery things do." },
        { s: 'mitsuru', f: 'serious', t: "Yours didn't put itself right. It started where it stopped. Ten hours and eleven minutes behind. It kept the difference." },
        { n: "She took her pen out. She didn't have the notebook. She wrote it on the paper bag instead, small, on the brown paper above the grease spot, in her neat upright hand. *10 h 11 m.*" },
        { s: 'mitsuru', f: 'sad', t: "I asked for one instrument nobody could talk to. I got it. That's how long it took. That's the real figure. Not *accident*. That." },
        { s: 'mitsuru', f: 'neutral', t: "...Don't reset it. Please. Not yet. I'd like there to be one thing in this town that remembers how long that was." }
      ], else: [
        { s: 'mitsuru', f: 'neutral', t: "My watch stopped at five forty-two. On the sea wall. It started again at four in the morning by itself and put itself right, to the second, as if nothing had happened. As if it had been nine hours of an ordinary night." },
        { s: 'mitsuru', f: 'serious', t: "My father's watch was in its box. At home. I'd left it there, wound, twenty turns. When I opened the box on Friday it said ten past eight in the morning, and it was evening, and it had kept the difference. Ten hours and eleven minutes." },
        { s: 'mitsuru', f: 'sad', t: "I'd asked for one instrument nobody could talk to. It was in a drawer. It remembered anyway." }
      ] },
      { ifFlag: 'eqx-hanne-reported', then: [
        { s: 'mitsuru', f: 'neutral', t: "You told me she's alive. The violist. Not where. I've written *alive* under her name on the board, in pencil. I haven't asked you where. I'm not going to ask you where." },
        { s: 'mitsuru', f: 'serious', t: "I want you to notice that I'm not asking. I'm told it's a skill. I'm practicing it on the hardest thing I can find." }
      ] },
      { n: "The wind dropped. The leaves lay still against the table legs. Across the bay the bridge had its lamps on now, the whole long line of them, and Mitsuru turned her head and looked at it, the way you'd look at a person across a room you'd decided not to speak to." },
      { s: 'mitsuru', f: 'neutral', t: "I'm going to tell you what I want. I've been very careful all year not to. I'm going to say it once, here, and then I'd like it never mentioned again, by either of us, unless I bring it up." },
      { s: 'mitsuru', f: 'serious', t: "I want all of you in that building. Every one. The dorm, the guesthouse, the girls, the fathers, your father in particular, who hasn't slept. I want every door locked at four in the afternoon and every name on that board checked at every hour and nobody, nobody, out of my sight after dark. For the rest of the year. For the rest of— for as long as it takes." },
      { s: 'mitsuru', f: 'serious', t: "I've drawn it up. The plan. It's eleven pages. I could sign it tonight and the Group would do it by Friday. Vans. Locks. Men at the doors, if I could find men I was willing to put at doors again." },
      { s: 'mitsuru', f: 'sad', t: "I'd keep you all. I'd hold on to every one of you and I'd never let go, and I'd call it security, and I'd sleep through, every night, and I'd wake at four." },
      { s: 'mitsuru', f: 'sad', t: "That's the worst thing I know about myself. I asked three men to stay with your mothers, *all three, on the moon night*, and they stayed, because I asked. And I'd do it again to all of you tomorrow. I'd do it to you." },
      { n: "She stopped. She sat with her hand on the paper bag and her eyes on the bridge, and Solar understood, all at once, the way you understand a word you've been reading for a year without looking up: what it was Mitsuru had been asked for, all year, by every cup and every form and every room made up in a house by the river. Not to stay. To keep. To hold on to all of them, so hard, so carefully, so lovingly, that none of them could ever go anywhere again. Mitsuru, of all people, who'd spent a whole year last year learning to let one girl go." },
      { n: "And that she knew. That she'd known since the bridge. That she was sitting on her hands." },
      // CG: eqx-mitsuru-heater — a red-haired young woman in a gray suit alone at a small metal café table under a glowing orange patio heater on a cold autumn evening, one hand flat on top of a creased brown paper bag, dry leaves under the table, a long lit bridge far off across the dark bay behind her.
      { choose: [
        { t: "Don't sign it. Not because I'm asking. Because you already know you won't.", notes: 3, then: [
          { s: 'mitsuru', f: 'neutral', t: "...No. I won't." },
          { s: 'mitsuru', f: 'sad', t: "But I'd like it understood that I want to. Every night. It's in the drawer under the lease. I take it out and I read it and I put it back." },
          { n: "She looked at Solar sideways, under the heater, with a look that was almost wry and almost something else." },
          { s: 'mitsuru', f: 'neutral', t: "You'll have to keep catching me. I'm very well prepared. I'll have it drafted again by spring." }
        ] },
        { t: "Ishida stayed because he wanted to. He told me. He said he'd retire when you didn't need a man in the hall.", notes: 3, then: [
          { n: "Mitsuru turned her head and looked at her. Her face did something Solar had never seen it do, not at the hospital, not on the bridge with the jacket in her lap; it came apart, very quietly, around the eyes, and then she got hold of it, and it didn't come back together quite the way it had been." },
          { s: 'mitsuru', f: 'sad', t: "...He said that?" },
          { s: 'solar', f: 'neutral', t: "In August. While you were on the phone." },
          { s: 'mitsuru', f: 'sad', t: "That was a joke. He told jokes so dryly that nobody ever knew. I knew. I always knew." },
          { n: "She put her other hand over her mouth, briefly, and took it away, and sat very straight, and didn't cry, on the terrace, in front of the waiter, because she was Mitsuru Kirijo and it was Tuesday." }
        ] },
        { t: "Then hold on to me. Just me. Tonight. I'm here. I'm choosing to be.", notes: 2, then: [
          { n: "Mitsuru looked at her for a long time. Then she reached over, without a word, and took hold of Solar's wrist. Not her hand. Her wrist, where the watch would be, the bones of it, in a grip like somebody checking a rail is there in the dark." },
          { s: 'mitsuru', f: 'sad', t: "...Choosing to be. You'd have to keep saying that. Every day. I'm not good at believing things I'm only told once." },
          { s: 'solar', f: 'neutral', t: "Every Tuesday." },
          { n: "She didn't let go of the wrist for a long time. When she did, it was one finger at a time, the way you'd unpick a knot you wanted to be able to tie again." }
        ] }
      ] },
      { flag: 'eqx-floor-mitsuru' },
      { ifFlag: 'eqx-mitsuru-pending', then: [
        { s: 'mitsuru', f: 'neutral', t: "Your form is still in my folder. *PENDING.* In coffee. It's the only thing in that folder that isn't finished." },
        { s: 'mitsuru', f: 'neutral', t: "I'd like it to stay that way. It's the one thing in this town that's waiting for you to decide, instead of the other way round." }
      ] },

      { place: 'Moonlight Bridge', time: 'Night', bg: 'moonlightbridge-night', soft: true },
      { n: "She drove. She didn't offer Solar the front tonight, and Solar didn't ask. They went down to the staff lot and Mitsuru strapped the spare helmet on her and fastened the buckle under her chin herself, carefully, the way you'd do it for a child, and got on, and Solar got on behind, and held on." },
      { n: "She took the bridge. The short way. Not the long way round by the river, which none of them took anymore; the bridge. The road was busy, cars and trucks in both directions with their lights on in the early dark, ordinary, and the lamps were lit along the rail every thirty meters, and the bridge was exactly as long as a bridge should be. Solar counted the lamps without meaning to. They ended where they should." },
      { n: "Halfway over, Mitsuru pulled into the narrow service bay where the maintenance trucks stopped, and put her feet down, and turned the engine off. The traffic went past them. The wind came off the bay, cold now, and smelled of salt and diesel and nothing else at all." },
      { n: "She got off the bike and walked to the rail. Not to any particular place on it. Solar knew which place. Mitsuru didn't go to it. She stood ten meters short of it with her hands on the cold steel and looked down at the black water for a long time, and then up at the lamp above her, and then along the walk at the place where the lamp light lay on clean, washed concrete with nothing on it." },
      { n: "Then she took the paper bag out of her jacket and opened it, and took out one green sugar star, and put it on the flat top of the rail, at the foot of the lamp post, very carefully, where the wind wouldn't take it." },
      { n: "She didn't say anything. She stood there a moment longer. Then she came back to the bike, and got on, and Solar put her arms round her waist again, and felt her breathe out, once, all the way, against her hands." },
      { s: 'mitsuru', f: 'neutral', t: "...There's a floor. In the Well. Fuuka says it's started to have my voice in it. Reading forms. She heard it on the comms on Saturday and didn't tell me for two days." },
      { s: 'mitsuru', f: 'neutral', t: "I'd like you with me when we go down to it. I'm not asking. I'm telling you where I'll be." },

      { place: 'Iwatodai Dorm · Lounge', time: 'Night', bg: 'iwatodaidorm-livingroom-night-summer', soft: true },
      { n: "In the lounge the whiteboard said what it said now. VISITORS, ARRIVALS. HUNTING, in red, and the boxed names under it, and *Hanne?*, and three names in a straight line, and three more under those in three scripts, with nothing written next to them at all." },
      { n: "Mitsuru stood in front of it with the red pen in her hand. She stood there a long time. Solar, at the foot of the stairs, waited for her to write *taken* beside the mothers' names, or *dead* beside the men's, or anything, any word at all, the way she always wrote things down, the way that had always made her able to sleep." },
      { n: "She capped the pen." },
      { n: "Then she took the gray marker instead, the one that wiped off with a thumb, and went down to the very bottom corner of the board, under *Cups (16)* and *Rooms (8)*, and wrote, small, so small that nobody standing at the couch would ever be able to read it, *Tuesday.*" },
      { n: "And went up. And on the fourth-floor landing, as she passed, Solar heard her stop, and the small dry crinkle of a paper bag, and a long silence, and then her door, and the lock, and nothing else, not the drawer, all night." }
    ] }
  ]
});
