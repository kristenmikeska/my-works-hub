/* Persona 3: Equinox · Mitsuru Kirijo · III The Empress. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: rank 1 only (from 4/13; her home is Tuesday and Thursday evenings, so 4/13 itself). Ranks 2–10 still to write.
   Shape: the stub fields from assets/femc/equinox/data/links.js (this file wins over the stub, core.js indexLinks).
   Solstice's ranks are shared memory here (the list, the spare helmet, the PENDING stamp); nothing reads Solstice link standing.
   Flags this file sets: eqx-mitsuru-pending (rank 1: Solar stamps the blank form PENDING). Nothing reads it yet. */
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
    ] }
  ]
});
