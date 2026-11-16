/* Persona 3: Equinox · Mitsuru Kirijo · III The Empress. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1–2 (from 4/13; her home is Tuesday and Thursday evenings, so 4/13 itself). Ranks 3–10 still to write.
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
    ] }
  ]
});
