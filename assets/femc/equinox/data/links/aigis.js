/* Persona 3: Equinox · Aigis · Aeon. Link data (femc-equinox-game.html). Format: link fields in assets/femc/game/core.js
   ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1–2 (from 4/13; her home is the dorm roof on Sunday, Tuesday, Thursday and Saturday evenings). Rank 3 (from 6/5: the roof, then the census through
   the red from the roof; branches on eqx-aigis-exception, eqx-last-grain, Hyein's rank 3) keeps the forty unassigned (Act III's
   9/22 songpyeon owns that reading) and records her ask: tally asks.aigis (+ cakes / choose).
   Written: ranks 1–8. Rank 4 (from 6/29, the roof; reads asks.aigis via ifChoice, eqx-stage, eqx-last-grain, Hyein's rank 3):
   her left wrist has started making the old hand's page-turning sound (wear; nobody here has her files); the boarding-house
   girls are a column she can't count; the fifth thing on her list; Hyein needs someone who isn't "the third check". Sets
   eqx-aigis-wrist (held it to her ear), eqx-aigis-float / eqx-aigis-useless / eqx-aigis-space (the fifth thing).
   Rank 5 (from 8/19, the roof, then Seaside Park beach at sunset; reads eqx-aigis-float / -useless, eqx-wake,
   eqx-three-breakfasts, eqx-lanterns, Hyein's rank 3): floating (she sinks; held up, "it counts"), "anywhere without air",
   Nozomi died in the room she can't hear (a year to the day from her lost hand), the dates things stop, "how long is a very
   long time"; she counts herself by mistake. Sets nothing.
   Rank 6 (from 9/28, the roof, the river street, the boarding-house gate at dusk, the roof; reads eqx-aigis-forty, asks.aigis,
   eqx-empty-chair, eqx-lease): reading #1 (or #5 after 10/9) at Mrs. Oka's gate, seventy-two, "exactly right"; Mrs. Oka:
   "mind you're standing in the right doorway"; Aigis says "can't" for the first time; her ask lands (she wants to already be
   in the doorway, before). Sets eqx-floor-aigis (her ask floor), and one of eqx-aigis-hyein (stand where Hyein is on full
   moons) / eqx-aigis-own-door ("yours to choose") / eqx-asked-aigis ("Stay with me. Please.": tally asked +1, cakes +1).
   Fair 11/22 groundwork throughout (water, density, doorways, Hyein's door, the left hand, the ribbon); nothing marked.
   Rank 7 (from 10/19, the roof, then her room under the desk lamp, the landing at 23:58; reads eqx-1023 / dead.shinjiro /
   eqx-shinji-lived, eqx-aigis-float / -useless / -space, eqx-aigis-wrist, Hyein's ranks 3 and 5, Hanni's 5, eqx-fathers-moved,
   eqx-1122): "Today, nothing stopped"; she opens the wrist with the kind man's screwdriver: a brass leaf wearing a bright line
   in the joint, 409 days to wear through ("during, not after"); the STARTED / STOPPED columns, the wrist's line ruled with no
   date (it falls in a year that isn't this one); Hyein still tells only the latch ("soon"); "Solar read this. 23:59." written
   ahead. Sets eqx-aigis-wear (let it wear) or eqx-aigis-mend (asked her to have it mended).
   Rank 8 (from 11/9, the roof with cocoa (Shinjiro's if he lived, an empty chipped mug if not), then the census door by door
   and the red hour on the top step; reads the same plus eqx-aigis-lived, ifBefore 11/22): every fifth thing is put off to the
   spring; Solar writes one night of the file in her own hand; at Hyein's door "ask you first, or let me?" (flags
   eqx-aigis-asked-first / eqx-aigis-let-her / eqx-aigis-with-me); Solar adds "Aigis" to the count with no number, or "here"
   (cosmetic eqx-aigis-counted). Nothing reads the new flags. Ranks 9–10 still to write (only if she lives past 11/22). Shape: the stub fields from assets/femc/equinox/data/links.js (this file wins over the stub).
   Solstice's ranks are shared memory here (the roof at sunset, "I have been looking for someone", the butterfly, the third
   item on her list, "Solar" without the honorific); nothing reads Solstice link standing.
   Writers: her readings are a clue source. Rank 1 logs one reading from the 4/12 knocks, unassigned on purpose; keep it
   unassigned until her first scan of the person it belongs to matches it.
   Flags this file sets: eqx-aigis-log (rank 1: Solar asks to be told every reading). Nothing reads it yet.
   Rank 2 (after 4/22): reads eqx-aigis-log, ifAfter 4/29, ifEvent eqx-golden-week / eqx-knock; sets eqx-aigis-arai (Solar warns
   Mrs. Arai, cast). The forty reading stays unassigned: rank 2 defers her first scan of the boarding house on purpose. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'aigis', name: 'Aigis', short: 'Aigis', arcana: 'Aeon', numeral: '', from: 'Persona 3', kind: 'sees',
  romance: null, starts: '4/8', lodging: 'dorm',
  home: { area: 'dorm', spot: 'Rooftop', slot: 'evening', days: [0, 2, 4, 6],
          hint: 'Evenings on Sunday, Tuesday, Thursday and Saturday, on the dorm roof.' },
  approach: "Up on the dorm roof, against the last of the light, a girl in a school uniform is standing perfectly still at the rail with her back very straight, and she has been standing exactly like that, you suspect, since four.",
  cast: { arai: 'Mrs. Arai' },
  ranks: [
    { after: '4/13', title: '1: on file', place: 'Iwatodai Dorm · Rooftop', time: 'Evening', music: 'tender', scene: [
      { bg: 'iwatodaidorm-roof-evening' },
      { n: "The roof in April smelled of Fuuka's planters, wet soil and something green coming up that nobody could identify yet, and the laundry line was full, more full than it had ever been, shirts and blouses and somebody's sequined New Year's top and somebody else's enormous yellow puffer jacket pegged up by the hood like a hanged canary, all of it lifting and dropping together in the wind off the bay." },
      { n: "Aigis was at the rail. Of course she was. The sun was going down behind the island in long bands of apricot and gray, and she stood against it with her hands folded in front of her and the wind moving her hair, perfectly still, the way a lighthouse is still." },
      { s: 'aigis', f: 'neutral', t: "Good evening, Solar. Sunset is at eighteen twenty-two. You are seven minutes early." },
      { n: "*Solar.* No honorific. She'd taken it off in January, on this roof, in the snow, slowly, like trying a step on new ice. She'd kept it off. She said it now as if it had been on file the whole time, which, Solar supposed, it had." },
      { choose: [
        { t: "Since sixteen hundred?", notes: 3, then: [
          { s: 'aigis', f: 'happy', t: "Since sixteen hundred. The sightlines are optimal." },
          { s: 'aigis', f: 'neutral', t: "That was a callback. I have retained Junpei-san's lecture on callbacks. All forty minutes. I find I am glad to have somewhere to put it." }
        ] },
        { t: "You kept it off. My name.", notes: 3, then: [
          { s: 'aigis', f: 'neutral', t: "Yes. I said I would not ask next time. I have not asked once since." },
          { ifFlag: 'eqx-from-true', then: [
            { s: 'aigis', f: 'sad', t: "There was a period of thirty days in which I did not know there was anyone to not ask. My log for those days has a space in it. I did not leave the space. I have checked who did." }
          ], else: [ { ifFlag: 'eqx-from-stay', then: [
            { s: 'aigis', f: 'neutral', t: "You were gone for one minute. I counted it. It was the longest minute in my log." }
          ], else: [
            { s: 'aigis', f: 'neutral', t: "There was a period of thirty days in which there was no one to not ask. I continued not asking. It is a difficult thing to practice alone." }
          ] } ] }
        ] },
        { t: "(Stand at the rail beside her, close.)", notes: 2, then: [
          { n: "She came and stood beside her, close, so their sleeves touched. Up close Aigis made her sound, very faint under the wind, the hum like a refrigerator in another room, and when she turned her head her eyes refocused with the small soft click of a camera." },
          { s: 'aigis', f: 'neutral', t: "...Thank you. That is the correct distance." }
        ] }
      ] },
      { n: "They watched the sun go a little further down. Below them the town was doing its evening things: a bus, the monorail crossing the bay in its slow silver line, a woman on a balcony taking in her washing, the shrine bell somewhere up the hill. Aigis watched all of it. Not the way people watch a view. The way you'd watch a room you'd been asked to guard." },
      { s: 'aigis', f: 'neutral', t: "I conduct a census. Every night. Mitsuru-san did not order it. I ordered it." },
      { s: 'aigis', f: 'neutral', t: "At twenty-three fifty-nine I count heartbeats in this building. When the hour ends I count them again. I compare the figures." },
      { s: 'solar', f: 'neutral', t: "How many?" },
      { ifBefore: '4/29', then: [
        { s: 'aigis', f: 'neutral', t: "Eleven, in this building. Twelve, including Koromaru-san, who is at the front door. Hanni-san is in the hallway outside Hyein-san's room and not in her own bed, which I have stopped entering as an error. Six at the guesthouse, at the edge of my range: five of ours, and the night manager, who sleeps sitting up. One at the hospital, beyond it, who sends a text message at midnight and so is counted by another method." },
        { s: 'aigis', f: 'neutral', t: "The figures have matched every night. I would like you to know that. It is the most important thing I have to report." }
      ], else: [
        { s: 'aigis', f: 'neutral', t: "Eleven, in this building. Twelve, including Koromaru-san, who is at the front door. Hanni-san is in the hallway outside Hyein-san's room and not in her own bed, which I have stopped entering as an error. Five at the guesthouse, at the edge of my range. One at the hospital, beyond it, who sends a text message at midnight and so is counted by another method." },
        { s: 'aigis', f: 'sad', t: "It was six at the guesthouse until the twenty-eighth. I have not corrected the column. I write five, and leave the space where the sixth was. I do not know whether that is correct. I have not been able to make myself close it." },
        { s: 'aigis', f: 'neutral', t: "Ours have matched every night. I would like you to know that. It is the most important thing I have to report." }
      ] },
      { choose: [
        { t: "Thank you for counting.", notes: 3, then: [
          { s: 'aigis', f: 'neutral', t: "It is not a burden. It is a very good number. I like saying it." },
          { s: 'aigis', f: 'happy', t: "Eleven. Twelve. Six. One. I say it twice, at the beginning and the end. It is the first thing I have ever said twice on purpose." }
        ] },
        { t: "Do you count mine?", notes: 3, then: [
          { s: 'aigis', f: 'neutral', t: "Yours first." },
          { s: 'aigis', f: 'neutral', t: "Sixty-one at rest. Seventy-eight when Haechan-san speaks to you in the corridor. I have not reported this second figure to anyone. I am reporting it to you now because it is yours." },
          { s: 'solar', f: 'flustered', t: "Aigis." },
          { s: 'aigis', f: 'neutral', t: "...I see. That one is not for reporting. I will adjust." }
        ] },
        { t: "When the hour ends. It's ending later, isn't it.", notes: 2, then: [
          { s: 'aigis', f: 'serious', t: "Yes. Akihiko-san has a roll of tape. I have a log. Our figures agree to the second." },
          { s: 'aigis', f: 'neutral', t: "It is the only thing in this town I am currently able to measure that is not behaving." }
        ] }
      ] },
      { n: "The sun went under the island. The light went out of the sky from the top down, apricot to gray to the blue that came before the dark, and the streetlamps came on along the hill below them in a row, one after another, from the station upward." },
      { s: 'aigis', f: 'neutral', t: "Last year, Mitsuru-san told me your room was prepared before you arrived. Sheets. A lamp. A towel folded on the end of the bed. She was troubled. I was not." },
      { s: 'solar', f: 'neutral', t: "You said it was correct." },
      { s: 'aigis', f: 'neutral', t: "I did. I still do not know why it was correct. But I knew it in the way I know my own weight." },
      { s: 'aigis', f: 'serious', t: "This year somebody wrote your name on a form. Mitsuru-san showed me. I held it to the light. I measured the pressure of the strokes. I compared it to every hand in this building and at the guesthouse and every hand I have on record." },
      { s: 'aigis', f: 'serious', t: "It is not correct." },
      { n: "She said it in exactly the same voice she'd said *it was correct*, a year ago, and Solar felt it the same way, cold water into a cut, except that this time the water went somewhere else, further down, into a place under the ribs that hadn't been cold before." },
      { s: 'aigis', f: 'serious', t: "I have you on file. Your name, the right one. Somebody else has you on file now. It is not me. I find that I do not like it." },
      { s: 'aigis', f: 'neutral', t: "...I have checked whether that is a feeling. I believe it is a feeling. It is not one I have been issued." },
      { choose: [
        { t: "It's called being jealous, Aigis.", notes: 2, then: [
          { s: 'aigis', f: 'surprised', t: "...Is that so?" },
          { s: 'aigis', f: 'neutral', t: "I will look it up. I suspect Junpei-san will have a lecture. I will allow him forty minutes again. It seems only fair." }
        ] },
        { t: "It's called being scared.", notes: 3, then: [
          { n: "Aigis turned her head and looked at her, all the way, the soft click, and for a long moment didn't say anything at all." },
          { s: 'aigis', f: 'sad', t: "...Then I have been scared since the eighth. I did not have the word. Thank you. It is easier to carry with a name on it." }
        ] },
        { t: "(Don't name it. Just stay.)", notes: 3, then: [
          { n: "She didn't name it. She stayed where she was, sleeve against sleeve, and let the lamps finish coming on down the hill, and after a while Aigis's hand moved on the rail, very slightly, until the side of it rested against the side of Solar's, the seam at her wrist cool and exact." }
        ] }
      ] },
      { n: "It was nearly dark. The laundry line creaked behind them. The yellow puffer turned slowly on its peg, and back, like somebody looking round to see who'd come in." },
      { s: 'aigis', f: 'serious', t: "There is one more figure. I have not entered it in the census, because I do not know which census it belongs to." },
      { s: 'aigis', f: 'serious', t: "On the night of the twelfth, at midnight, I was in the front hall with Koromaru-san. The knock came from the river side first. I could not reach it. Then it came from the bottom of this street." },
      { s: 'aigis', f: 'serious', t: "Every person on this street was in a coffin. I counted them. Then, at the bottom of the street, at the door of the third house, for eleven seconds, there was a heartbeat that was not in a coffin." },
      { s: 'solar', f: 'neutral', t: "Someone else awake." },
      { s: 'aigis', f: 'serious', t: "Something. Large. Warm-blooded. Standing still at a door, knocking, twice, politely." },
      { s: 'aigis', f: 'serious', t: "Resting heart rate, forty." },
      // CG: eqx-aigis-reading — Aigis on the dorm roof at dusk seen from behind, the lit hillside street below her running down toward the river, her eyes reflected faintly in the glass of a window, one small readout of numbers ghosted in the air beside her head.
      { n: "She let that sit. She didn't explain it. She didn't have to. Solar had been in the red hour enough nights, last year and this, to know what it was like to stand at a door and knock and wait, and what her own heart did, and nobody's did that. Nobody's sat at forty, knocking. Not a person who wanted in. Something that was in no hurry at all." },
      { s: 'aigis', f: 'neutral', t: "Then it was not there. It did not walk away. My sensors register walking. It stopped being at the door, the way a light is switched off." },
      { s: 'aigis', f: 'neutral', t: "I have not told Mitsuru-san. I wanted to tell you first. I did not know why. I have decided it is because you were the one I was looking for, and so I report to you first. That is a reason I made. Nobody issued it." },
      { choose: [
        { t: "Tell me every one. Every reading you can't place.", notes: 3, flag: 'eqx-aigis-log', then: [
          { s: 'aigis', f: 'neutral', t: "Affirmative." },
          { s: 'aigis', f: 'neutral', t: "...I will keep a separate file. I will call it yours. I have never had a file with a person's name on it that was not a person." }
        ] },
        { t: "Tell Mitsuru too. Tonight.", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "Understood. I will tell her at twenty-one hundred. She will write it down. She writes everything down. I think it is how she is frightened." }
        ] },
        { t: "Maybe it was an animal. A big dog.", notes: 1, then: [
          { s: 'aigis', f: 'neutral', t: "Koromaru-san was beside me. He is the only dog awake in this town at midnight." },
          { s: 'aigis', f: 'serious', t: "He stood up when the knocking came. He has not lain anywhere but across that door since." }
        ] }
      ] },
      { n: "The first stars came out over the bay, two and then a dozen, sharp in the cold, and down the hill the station's lit windows ran together into a long gold smear. Aigis looked at the stars the way she'd looked at the butterfly at the shrine, with her whole attention, as if it might go if she moved." },
      { s: 'aigis', f: 'neutral', t: "I have a list. You will remember. Two things in July, and then a third that nobody ordered." },
      { s: 'aigis', f: 'neutral', t: "This year I have added a fourth. I do not require air. Mitsuru-san noted in March that this makes me the logical choice for anywhere without any. I have entered it. I find I am pleased to be the logical choice for something." },
      { s: 'aigis', f: 'happy', t: "So. If anyone falls into anything. I would like to be asked first. That is the fourth thing." },
      { choose: [
        { t: "Nobody's falling into anything.", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "Is that so?" },
          { s: 'aigis', f: 'neutral', t: "...I will keep it on the list anyway. Lists are for things that have not happened. That is what makes them restful." }
        ] },
        { t: "What's the fifth thing?", notes: 3, then: [
          { s: 'aigis', f: 'neutral', t: "There is no fifth thing yet. I am leaving a space." },
          { s: 'aigis', f: 'happy', t: "Mitsuru-san would call it pending. I have learned that from you, also." }
        ] },
        { t: "(Lean your head on her shoulder. She can take it.)", notes: 3, then: [
          { n: "She leaned her head on Aigis's shoulder. It was hard and cool and absolutely steady, like leaning on a wall that had decided to be fond of you, and Aigis went still under it, stiller than she always was, which Solar hadn't known was possible." },
          { s: 'aigis', f: 'flustered', t: "...Load capacity is not a concern. I want to say that clearly. You may stay there as long as is required." }
        ] }
      ] },
      { place: 'Iwatodai Dorm · Rooftop', time: 'Night', bg: 'iwatodaidorm-roof-night', soft: true },
      { n: "When Solar went in, Aigis stayed. At the roof door Solar looked back, and she was at the rail in the dark with her back very straight, facing not the bay and not the stars but down the hill, toward the bottom of the street, toward the river, the way a dog faces a door." },
      { n: "Later, lying in bed, Solar heard her come down. Precisely at twenty-three fifty-eight, by the clock on her phone. Light steps on the stairs, even, exactly the same distance apart, down past the second floor, all the way to the front hall, where Koromaru thumped his tail once on the floorboards for her and didn't get up." },
      { n: "Then the red came up through the window like something rising through water. And somewhere below her, in the dark, in the stopped house with its eleven beating hearts, a level voice began, very softly, to count." }
    ] },
    { after: '4/22', title: '2: the third house', place: 'Iwatodai Dorm · Rooftop', time: 'Evening', music: 'tender', scene: [
      { bg: 'iwatodaidorm-roof-evening' },
      { n: "There was no sunset that Thursday. The sky had been a lid of flat white since noon and it went gray from the edges inward without any color at all, and the wind off the bay had dropped to nothing, so the laundry on the line hung straight down and didn't move, the yellow puffer and the sequined top and somebody's school shirts, all still, like clothes on people who were holding their breath." },
      { n: "Aigis was at the rail. She turned before Solar reached her, which she'd never done before; she'd always let you arrive. She had a small notebook in one hand, the kind with a spiral at the top that detectives used on television, and Solar recognized Junpei's handwriting on the cover, *for Aigis, for her FILES*, and a drawing of a magnifying glass." },
      { s: 'aigis', f: 'neutral', t: "Good evening, Solar. There is no sunset today. I am reporting it so that you do not wait for one." },
      { s: 'aigis', f: 'neutral', t: "Junpei-san gave me a notebook. He said a file should be a thing you can hold. I do not need to hold it. I find that I like holding it." },
      { ifFlag: 'eqx-aigis-log', then: [
        { s: 'aigis', f: 'neutral', t: "This is yours. The file. I have kept it as you asked. Every reading I cannot place." },
        { n: "She opened it and held it so Solar could see. Aigis's handwriting was perfectly even, every letter the same height, as if typed. Four entries. Four dates, four times to the second, and a line each." },
        { s: 'aigis', f: 'neutral', t: "The twelfth, midnight. The third house. Forty. You know this one." },
        { s: 'aigis', f: 'neutral', t: "The courtyard well at school. Every evening I pass it, it is three point one degrees warmer than the air around it. At the gap in the boards. Always three point one. Stone does not do that. Stone takes the temperature of the evening." },
        { s: 'aigis', f: 'serious', t: "The nineteenth, twenty-three fifty-nine. My census of this building was eleven, and Koromaru-san. Then, for zero point four seconds, it was twelve, and Koromaru-san. The twelfth was on the front step. On the other side of the door from him." },
        { s: 'solar', f: 'neutral', t: "Inside?" },
        { s: 'aigis', f: 'serious', t: "Outside. Directly outside. Where you would stand if you were about to knock." },
        { s: 'aigis', f: 'neutral', t: "It did not knock. Koromaru-san lifted his head. Then it was eleven again. I have not told anyone but you. It is your file." }
      ], else: [
        { s: 'aigis', f: 'neutral', t: "I told Mitsuru-san about the twelfth, as you advised. She wrote it down. Then she asked me to keep a list of anything else I cannot place. I have one more." },
        { s: 'aigis', f: 'neutral', t: "The courtyard well at school. Every evening I pass it, it is three point one degrees warmer than the air around it, at the gap in the boards. Always three point one. Stone does not do that. Stone takes the temperature of the evening." },
        { s: 'aigis', f: 'neutral', t: "Mitsuru-san wrote that down too. She writes very quickly when she is frightened. I have begun to be able to tell from the sound of the pen." }
      ] },
      { choose: [
        { t: "What's the fourth entry?", notes: 3, then: [
          { s: 'aigis', f: 'neutral', t: "There is a space. I leave a space at the end of every file now. Mitsuru-san would say pending." },
          { s: 'aigis', f: 'serious', t: "I would like the space to stay empty. I have noticed that I want things in this town to stay empty. Beds. Spaces. Doorsteps. It is not how I was made to want." }
        ] },
        { t: "Thank you. For keeping it.", notes: 3, then: [
          { s: 'aigis', f: 'happy', t: "It is not difficult. It is a list. I am very good at lists. It is the first thing anyone ever trusted me with." }
        ] },
        { t: "Is the dorm safe, Aigis?", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "The dorm is eleven heartbeats and a dog across the door. Nothing has come in. Nothing has asked to." },
          { s: 'aigis', f: 'serious', t: "I would like to say yes. I am not able to say yes about any building that has a door in it. I am sorry. I could say yes about the roof." }
        ] }
      ] },
      { ifAfter: '4/29', then: [
        { n: "She turned a page. On the next one, the census, the guesthouse column. *5*, every night, and beside it the empty space where she'd been writing *6*, and in the space, now, very small, in that typed-looking hand, a single dash." },
        { s: 'aigis', f: 'sad', t: "I stood in his doorway for one hour and four minutes. Mitsuru-san asked me to come away. Jungwon-san asked me. I did not move until he had been carried out." },
        { s: 'aigis', f: 'sad', t: "I have been asked why. I said it was procedure. It was not procedure. I stood there because when it happened, nobody had been standing there. It seemed incorrect for that to go on being true." },
        { n: "She closed the notebook. Very gently. The way Saori closed old books." }
      ] },
      { s: 'aigis', f: 'neutral', t: "I would like to see the door. The third house. In daylight. I have only ever heard it." },
      { s: 'aigis', f: 'neutral', t: "I do not wish to go alone. I am able to. I have checked whether I wish to. I do not." },
      { place: 'Iwatodai · The Dorm Street', time: 'Evening', bg: 'outside-night', soft: true },
      // BG: iwatodai-dorm-street-dusk — the steep residential street below the dorm at dusk under a flat white sky, old two-storey houses with small gardens and potted plants on the steps, lamps not yet on, the street running downhill toward the river.
      { n: "The street ran down from the dorm toward the river, steep enough that the houses on it sat at a slant to each other, each one a step lower than the last, old two-storey places with sliding doors and little front gardens that were mostly pots: geraniums, a dwarf maple, herbs in polystyrene boxes. The lamps weren't on yet. The light was the white nothing of the sky, coming down evenly on everything, so that there were no shadows at all, which Solar noticed, and didn't like noticing." },
      { n: "Aigis walked a half step ahead and slightly to the left, the side the river was on. She counted the houses under her breath. One. Two." },
      { n: "The third house had a blue tiled roof and a nameplate by the gate, *ARAI*, in old-fashioned characters, and a woman in the front garden, small and very old, in a cardigan and an apron, with a watering can held in both hands. She was watering the pots on the step, slowly, one at a time, and in the middle of the step, between a pot of chives and a pot of something purple, there was a saucer." },
      { n: "On the saucer was a rice cake." },
      { n: "Not the one from the napkin. A fresh one, white, round, dusted. Somebody had set it squarely in the middle, the way you'd set a place." },
      { s: 'arai', t: "Oh. Good evening. Are you girls from the big house at the top? With all the young people?" },
      { s: 'aigis', f: 'neutral', t: "Good evening. Yes. We are from the big house. I am Aigis. This is Solar. We are walking. That is all we are doing." },
      { n: "Mrs. Arai smiled at that, a soft, puzzled, delighted smile, the way old women smiled at polite children, and put the watering can down on the step beside the saucer, carefully, so as not to knock it." },
      { s: 'arai', t: "It's nice, having young people on the street again. My son used to run up that hill to school. Up and down, up and down. The noise of him." },
      { n: "Aigis's eyes refocused with their small soft click. She was looking at Mrs. Arai. Not at her face. At the middle of her, the cardigan, the way a doctor looks at a chest through a stethoscope." },
      { s: 'aigis', f: 'neutral', t: "Seventy-four. At rest. A little fast." },
      { s: 'arai', t: "I beg your pardon, dear?" },
      { s: 'aigis', f: 'neutral', t: "It is a nice evening. That is what I said." },
      { choose: [
        { t: "Is the rice cake for your son?", notes: 3, then: [
          { s: 'arai', t: "Isn't that silly? He comes home late. He always came home late. I've started dreaming he's at the door, knocking, and I can't get up in time, and by the time I get to it he's gone." },
          { s: 'arai', t: "A lady down by the river gave me the idea. Such a kind woman. She said, leave something on the step, so he knows he's expected. She gave me the first ones. Wasn't that kind?" },
          { n: "She said it with her whole face, the way you'd show someone a photograph of a grandchild. Beside Solar, Aigis didn't move at all, which on Aigis was a kind of flinch." }
        ] },
        { t: "Your pots are beautiful.", notes: 2, then: [
          { s: 'arai', t: "Oh, they're nothing. They keep me busy. My son bought me the maple. Thirty years ago. It's never grown an inch. It's a stubborn little thing, like him." },
          { n: "She touched the maple's leaves with one finger, fondly, and then moved the saucer a centimeter to the left, to the exact middle of the step, and smiled at it." }
        ] },
        { t: "(Help her lift the watering can.)", notes: 3, then: [
          { n: "She picked up the watering can for her and did the last two pots. Mrs. Arai let her, and watched, and patted her arm when she was done, a small dry pat, the hand light as paper." },
          { s: 'arai', t: "Such a good girl. Is your mother nearby? She must miss you." }
        ] }
      ] },
      { s: 'arai', t: "He'll come home one of these nights. The lady said so. She said, when he asks, you'll know what to say." },
      { n: "She said it lightly. She said it the way you'd repeat something a fortune-teller had told you at a festival, half a joke, the other half kept somewhere safe. Then she picked up her watering can and said goodnight, girls, and went in, and slid the door shut behind her, and they heard the latch go." },
      { n: "The saucer sat on the step. The rice cake sat on the saucer. The white sky went a shade grayer over all of it, and still there were no shadows, anywhere, not under the pots and not under the gate and not under the two of them standing in the street." },
      { choose: [
        { t: "(Knock. Tell her: never open the door in the night.)", notes: 3, flag: 'eqx-aigis-arai', then: [
          { n: "She went up the step and knocked, three times, the way Jaehyun knocked, and Mrs. Arai slid the door open a crack and peered out, surprised, and Solar said it as gently as she could. Whatever you hear. Whoever it sounds like. Don't open the door at night." },
          { s: 'arai', t: "Oh, I'd never. I'm old, dear, I'm not a fool. I'd only like him to know he's expected." },
          { n: "She patted Solar's hand through the gap and slid the door shut again. Aigis wrote something in the notebook. It was a short line. Solar saw the word *warned*, and the time, to the second." }
        ] },
        { t: "(Take the rice cake off the step.)", notes: 2, then: [
          { n: "She took it. She didn't know why. She picked it up off the saucer, cold and soft and powdery in her fingers, and stood there in the street with it, and it left a fine white dust on her fingertips that wouldn't brush off on her skirt." },
          { s: 'aigis', f: 'neutral', t: "Give it to me." },
          { n: "Aigis held out her hand. Solar gave it to her. Aigis closed her fist on it, slowly, and opened it again over the drain in the gutter, and what came out of her hand wasn't a rice cake anymore, just white crumbs and dust, and the dust went down through the grate like flour through a sieve." },
          { s: 'aigis', f: 'serious', t: "She will put out another one. I know. I wanted there to be one night when there was not one." }
        ] },
        { t: "(Leave it. Walk back up the hill.)", notes: 2, then: [
          { n: "They left it. They walked back up the hill side by side, and at the top Solar looked back, and the saucer was a small pale circle on a dark step at the bottom of the street, and Aigis didn't look back at all, which on Aigis meant she already knew exactly where it was." }
        ] }
      ] },
      { place: 'Iwatodai · The Dorm Street', time: 'Night', bg: 'outside-night', soft: true },
      { n: "The lamps came on as they climbed, all the way up the street in a row, from the river to the dorm. Aigis walked on the river side." },
      { s: 'aigis', f: 'neutral', t: "The lady by the river. Everyone has met her. Ken-san. Mitsuru-san. Hyein-san. You, many times. Everyone has had her tea." },
      { ifEvent: 'eqx-golden-week', then: [
        { s: 'aigis', f: 'neutral', t: "I sat on her step for three hours in the rain on the third, with Ken-san and Koromaru-san. I did not go in. I was not asked in, and Koromaru-san was not going in, and I find I go where he goes." },
        { s: 'aigis', f: 'serious', t: "I did not scan the house. Mitsuru-san's protocol: no readings of civilians in their own homes without cause. I have cause. I have not yet been able to make my cause sound like a reason. When I can, I will ask her for an exception." }
      ], else: [
        { s: 'aigis', f: 'neutral', t: "I have not met her. I have not had the tea. I am the only one." },
        { s: 'aigis', f: 'serious', t: "Mitsuru-san's protocol: no readings of civilians in their own homes without cause. I have cause. I have not yet been able to make my cause sound like a reason. When I can, I would like to be introduced." }
      ] },
      { choose: [
        { t: "When you do. I'll come with you.", notes: 3, then: [
          { s: 'aigis', f: 'neutral', t: "Yes. I would like that. I will put it in the file. Pending." }
        ] },
        { t: "What do you think she is, Aigis?", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "A woman who keeps a boarding house, and is kind, and is liked by everyone, and is not liked by the only dog in this town." },
          { s: 'aigis', f: 'serious', t: "I do not think anything yet. Thinking without figures is guessing. I would like the figures first. I would like them very much." }
        ] },
        { t: "Maybe you don't need to scan her.", notes: 1, then: [
          { s: 'aigis', f: 'neutral', t: "Maybe." },
          { s: 'aigis', f: 'neutral', t: "...I have noticed that everyone she gives something to says that about her. Maybe I don't need to. I will keep a note that you said it, too." }
        ] }
      ] },
      { s: 'aigis', f: 'neutral', t: "One more thing. For the file that is not a file." },
      { s: 'aigis', f: 'serious', t: "Hyein-san checks the dorm latch twice every night before she goes up. I have begun checking it a third time, after her, when she has gone." },
      { ifEvent: 'eqx-knock', then: [
        { s: 'aigis', f: 'sad', t: "On the twenty-eighth I was at the guesthouse, by order. Hanni-san was at the latch. If Hanni-san had been one second slower, I would have been two kilometers away." },
        { s: 'aigis', f: 'neutral', t: "I have asked Mitsuru-san that on every full moon from now, I am in the building where Hyein-san is. She said yes before I had finished the sentence. I believe she had been waiting for me to ask." }
      ], else: [
        { s: 'aigis', f: 'neutral', t: "She does not know. I would prefer she did not know. It is not a thing she needs to carry. I can carry it. I am heavy. It is one of the things I am for." }
      ] },
      { place: 'Iwatodai Dorm · Rooftop', time: 'Late Night', bg: 'iwatodaidorm-roof-night', soft: true },
      { n: "At eleven fifty-eight Solar heard her go down the stairs, light, even, exactly the same distance apart, and stop in the front hall, and Koromaru's tail thump once on the boards. Then the house was quiet." },
      { n: "She went to the window instead of to bed. She didn't know why. From her room you could just see the bottom of the street, if you leaned, the lamp at the third house and the dark step under it." },
      { n: "The saucer was still there. She could see it, a small pale circle. And on it, a small pale shape." },
      { n: "Then the red came up, through the glass, over the street, the lamps going out all the way down the hill in a single breath, and she lost it, and she stood at the window in the red with her hand flat on the sill and couldn't see the bottom of the street at all, and somewhere below her, level and soft, a voice began to count, and got to eleven, and stopped, and started again." }
    ] },
    { after: '6/5', title: '3: standing orders', place: 'Iwatodai Dorm · Rooftop', time: 'Evening', music: 'tender', scene: [
      { bg: 'iwatodaidorm-roof-evening' },
      { n: "June evenings on the roof smelled of wet concrete drying, and of Fuuka's planters, which had finally decided what they were and turned out to be tomatoes, a whole row of them staked up on chopsticks and string, small and green and furred, and the laundry line was full of things that would never be dry before the next rain and had been left out anyway, out of a kind of collective optimism." },
      { n: "Aigis was at the rail. She turned when the door opened, the way she'd started turning now instead of letting you arrive, and Solar saw the notebook in her hand, Junpei's, *for her FILES*, held against her chest in both hands." },
      { ifRank: { hyein: 3 }, then: [
        { n: "The white ribbon. Hyein's. Tied at the back of her hair in a bow so exact it might have been pinned, plain cotton, the edges hemmed so fine you couldn't see the stitches, lifting a little in the wind off the bay. Aigis touched it when she saw Solar look, with two fingers, very lightly, the way you'd check that something was still where you'd put it." },
        { s: 'aigis', f: 'happy', t: "Hyein-san says it is so she can find me in a crowd. I have told her that I will always be the one standing still. She says that is not the point." }
      ] },
      { s: 'aigis', f: 'neutral', t: "Good evening, Solar. Sunset is at eighteen fifty-seven. There will be one today. I checked." },
      { s: 'aigis', f: 'neutral', t: "I have brought the file. I would like to report that it is the same, and that the same is not good news." },
      { n: "She opened it to the first page. The twelfth of April, midnight, the third house: *Large. Warm-blooded. Standing still at a door, knocking. Resting heart rate, forty.* The line under it was still empty. She'd ruled it, very faintly, in pencil, so that whatever went there would go in straight." },
      { ifEvent: 'eqx-aigis-exception', then: [
        { s: 'aigis', f: 'neutral', t: "Mitsuru-san gave me my exception. Outside the funeral hall. Any reading of anyone, anywhere. I said I would be careful." },
        { s: 'aigis', f: 'sad', t: "I have been to the boarding house four times since, with my exception in my pocket. It is always full. The girls, the old men from the pier, the long table, the kettle. Forty hearts and a kettle. I stand in the door and I cannot find hers among them. It is like listening for one violin in an orchestra that is all violins." }
      ], else: [ { ifEvent: 'eqx-last-grain', then: [
        { s: 'aigis', f: 'neutral', t: "I was interrupted. You were there. I had a cup put in my hands and I held it, because that is what you do with a cup somebody puts in your hands, and I lost my count." },
        { s: 'aigis', f: 'serious', t: "I have not yet asked Mitsuru-san for my exception. I am waiting until my cause sounds like a reason. It is beginning to. I can hear it beginning to." }
      ], else: [
        { s: 'aigis', f: 'neutral', t: "Pending. I have still not found the words for my cause. I have drafted them nine times. Every draft sounds like a girl who does not like somebody's tea." }
      ] } ] },
      { n: "She turned the page. On the next one there was a column, long, in her typed-looking hand, small, running all the way down and onto the back and onto the page after that: numbers. Just numbers. Seventy-one. Sixty-eight. Eighty-four. Ninety, with a note, *running*. Fifty-five, with a note, *asleep, Ken-san*." },
      { s: 'aigis', f: 'neutral', t: "Every person in this town I have stood near since April. At rest, where I could. Two thousand and eleven." },
      { s: 'aigis', f: 'serious', t: "Not one of them is forty. Not one of them is large. I have been looking for a second forty for two months the way you look for a second shoe. I would like it to be an athlete. I would like it to be an old man who swims." },
      { choose: [
        { t: "You'll find it. And then we'll know.", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "Yes. And then we will know. I have noticed that I would prefer to keep not knowing for a little longer. That is a new preference. I have put it in the file, at the back, under *new*." }
        ] },
        { t: "(Run your finger down the column. All of them alive.)", notes: 3, then: [
          { n: "She ran her finger down the column. Two thousand and eleven people in this town, standing still long enough for Aigis to count them. A whole town of hearts going, in a notebook a boy had given her with a magnifying glass drawn on the cover." },
          { s: 'aigis', f: 'happy', t: "Yes. That is the right way to read it. I had been reading it the other way. Looking for the one that is wrong. You read it for the ones that are right." }
        ] },
        { t: "Maybe there isn't a second one.", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "Then there is only one. Somewhere in this town. Standing still at a door." },
          { s: 'aigis', f: 'serious', t: "...I find I do not like that sentence either. I have stopped writing sentences in the file. I only write numbers now. Numbers do not have endings." }
        ] }
      ] },
      { s: 'aigis', f: 'neutral', t: "It is my night tonight. On the rota. The roof, through the red. I take the census from here; you can hear the whole hill from the roof if you are me." },
      { s: 'aigis', f: 'neutral', t: "Hanni-san wrote your initial beside mine. I did not ask her to. I believe she did it because I did not ask her to." },

      { place: 'Iwatodai Dorm · Rooftop', time: 'Late Night', bg: 'iwatodaidorm-roof-night', soft: true },
      { n: "They sat on the low wall at the edge of the roof with a blanket Aigis didn't need and Solar did, and the town below them clean from the rain, every light sharp, the bridge strung across the black water, the shrine on its hill. The tomatoes rustled on their chopsticks. Somewhere down the hill, the river." },
      { n: "At eleven fifty-nine Aigis began to count. Out loud, under her breath, the dorm first. Room by room, the way she must have done it every night since April, and Solar had never heard it, and found she was holding her own breath so as not to be counted wrong." },
      { s: 'aigis', f: 'neutral', t: "Mitsuru-san, sixty. Akihiko-san, fifty-two; he is asleep, he will deny it. Junpei-san, seventy, the radio is on. Hanni-san, on the floor, in the hall, sixty-eight. Hyein-san…" },
      { n: "She stopped. Not the stop at the top of a stair. A smaller one. Listening." },
      { s: 'aigis', f: 'happy', t: "Hyein-san, sixty-one. Asleep. Properly asleep. Not pretending." },
      { s: 'aigis', f: 'neutral', t: "Eleven. And Koromaru-san, across the door, ninety. He is always ninety. Dogs are faster than people. I find it very reassuring to have one thing in the building that is faster than everything else." },
      { n: "Then the town went red." },
      { n: "From the roof you could see it come. Up from the river first, the lights going out street by street up the hill in a single long breath, the bridge going dark lamp by lamp from the far end, the hum coming up through the soles of Solar's feet and the wall and the blanket, and the coffins standing up in every lit window and then every dark one, and the wind stopping mid-gust so that the laundry on the line hung where it was, lifted, like a held breath." },
      { n: "Aigis didn't move. She was looking down the hill now, the dorm's own street, and she began again, lower, going down it house by house the way you'd go down a flight of stairs in the dark, one hand on the wall." },
      { s: 'aigis', f: 'neutral', t: "First house. Two. Sixty-six, seventy. Second house, one. Fifty-eight. The cat on the wall, I do not count cats, Junpei-san says I should." },
      { s: 'aigis', f: 'neutral', t: "Third house. One. Seventy-four. A little fast. She is dreaming." },
      { n: "Mrs. Arai. In her coffin in the red, in her own bed, at the bottom of the street, dreaming, a little fast. And on her step, Solar knew without being able to see it, a saucer." },
      { s: 'aigis', f: 'neutral', t: "Fourth. Fifth, three, a family, the baby is very fast. The shrine. Nobody. The post office. The man who sleeps behind the counter, sixty." },
      { n: "She stopped." },
      { n: "Solar waited. The red lay over everything, the hum went on, the town stood in its coffins. Aigis's head had tipped a little to one side, the way it did, listening, and stayed there, and her eyes didn't move." },
      { s: 'aigis', f: 'neutral', t: "…I cannot hear past the corner." },
      { s: 'aigis', f: 'serious', t: "The river side. From the post office to the water. I can hear the post office and I can hear the other side of the river, the warehouses, the men asleep in the guard hut. In between there is nothing. Not quiet. Nothing." },
      { s: 'aigis', f: 'neutral', t: "It is not distance. The warehouses are further. It is the way Fuuka-san says the bridge is. A room where somebody has put a hand over your mouth." },
      { n: "She said it in the voice for sunset times. Then she went back to the top of the street and began again, from one, from the dorm, Mitsuru-san sixty, Akihiko-san fifty-two, and Solar sat beside her on the wall in the red with the blanket round her and listened to her count the whole hill down to the corner, and stop, and go back up to the top, and begin again, all hour, the way you'd walk a perimeter, the way you'd check a latch three times, and didn't ask her to stop." },
      // CG: eqx-census — a dormitory rooftop in the red Dark Hour, the town below drained of light, a straight-backed blonde girl with a ribbon in her hair sitting on the low wall with her head tilted, listening, another girl beside her wrapped in a blanket, the laundry on the line hanging lifted and motionless.
      { n: "At the end of the hour the lights came back, street by street, from the river outward, and the wind finished its gust, and the laundry fell, and Aigis stopped counting in the middle of a number and turned to Solar on the wall as if she'd only just noticed she was there." },
      { s: 'aigis', f: 'neutral', t: "May I ask you something that is not for the file." },
      { s: 'aigis', f: 'neutral', t: "Last year I had a purpose. It was given to me. I was made for a thing and then I was given a thing to do and the two were the same, and that was very restful, Solar. I did not know until it was gone how restful it was." },
      { s: 'aigis', f: 'sad', t: "This year nobody has given me anything. I keep a census. I check a latch. I stand in doorways. I have given myself small purposes, like Junpei-san gives himself small jobs in the kitchen so that no one will ask him how he is." },
      { s: 'aigis', f: 'neutral', t: "I would like an order. From you. I would like you to tell me to stay beside you. This year. Wherever you go in it. Then I will know what I am for, and I will not have to keep deciding it every night at twenty-three fifty-nine." },
      { n: "She said it the way she said a sunset time. Perfectly level. And she stood very straight at the rail with her hands folded in front of her and her hair lifting at the back in the wind off the bay, and waited to be told." },
      { choose: [
        { t: "Stay beside me, Aigis. That's an order.", notes: 3, tally: { cakes: 1, 'asks.aigis': 'yes' }, then: [
          { n: "Something in Aigis went still in a new way. Not the waiting stillness. The other one: the stillness of something that has been set down in the place it was made to fit, and fits." },
          { s: 'aigis', f: 'happy', t: "Yes. Understood. Thank you." },
          { s: 'aigis', f: 'happy', t: "...That was very restful. I am going to remember the exact time you said it. Zero one oh six and nine seconds. You will notice it was after the red. I would like to note that I did not need the red to be over. I only wanted it to be." },
          { n: "She moved, a step, so that she was standing at Solar's left shoulder instead of in front of her, and stayed there, looking out at the town, at exactly the distance Solar would have stood from someone she was guarding, and Solar felt the order settle on both of them like a coat, warm, heavy, a little too big, and wished, without knowing why, that she could take it back off one of them." }
        ] },
        { t: "I'm not giving you orders, Aigis. Not this year. Not ever again.", notes: 2, tally: { 'asks.aigis': 'no' }, then: [
          { s: 'aigis', f: 'sad', t: "...I see." },
          { s: 'aigis', f: 'neutral', t: "That is kind. I can tell it is meant kindly. I find it is very difficult to hold, kindness with no instructions in it. It has no handle." },
          { n: "She went back to looking at the town. She didn't move closer and she didn't move away. After a while Solar heard her start the census again, quietly, under her breath, though the red was over and there was nothing to count for: the whole dorm, eleven and the dog, and then again from one, as if she'd lost her place." }
        ] },
        { t: "You don't need an order. Where you stand is yours to choose. If it's next to me, I'd like that. But it's yours.", notes: 2, tally: { choose: 1, 'asks.aigis': 'choose' }, then: [
          { n: "Aigis didn't say anything for a long time. Long enough that the last train's lights went over the bridge and were gone, and the tomatoes rustled, and down in the street someone's door slid shut." },
          { s: 'aigis', f: 'neutral', t: "...Mine." },
          { s: 'aigis', f: 'neutral', t: "That is much less restful. I want to be very clear that it is much less restful. Nobody has ever given me a thing that was mine before. Not a purpose. Not a place to stand." },
          { s: 'aigis', f: 'neutral', t: "I will have to choose it. Every time. I do not know how often a person has to choose where to stand. I would like a figure." },
          { s: 'solar', f: 'neutral', t: "As often as you want." },
          { n: "Aigis thought about that. Then she took one step, deliberately, the way you'd step onto ice to test it, and stood at Solar's left shoulder, and looked at her sideways." },
          { s: 'aigis', f: 'happy', t: "Here. I choose here. Tonight. I will choose again tomorrow. It is very inefficient. I find I do not mind." }
        ] }
      ] },
      { n: "They went down at half past one. On the landing Aigis stopped at the window, the one that looked down the hill, and Solar stopped behind her." },
      { n: "You couldn't see the river from there. Only the street going down in its row of lamps to the post office, and the corner, and past the corner the dark, where the lamps were on and lit nothing, as if the light stopped at the edge of something and wouldn't go in." },
      { n: "Aigis looked at it for a long moment, the way you'd look at a door you'd just heard something behind. Then she put her hand up, with two fingers, very lightly, to the back of her head, the way you'd check that something was still where you'd put it, and left it there, and went on down the stairs to the front hall, where she checked the latch, once, after everybody, and Koromaru thumped his tail on the boards, and she nodded to him as if he'd signed something." }
    ] },
    { after: '6/29', title: '4: wear', place: 'Iwatodai Dorm · Rooftop', time: 'Evening', music: 'tender', scene: [
      { bg: 'iwatodaidorm-roof-evening' },
      { n: "The rainy season had gone quiet for a day, not finished, only resting, the way a person rests between one bout of crying and the next, and the roof that Tuesday evening was steaming. Everything on it gave the afternoon's rain back as a warm breath, the concrete and the low wall and the planters, and the shirts on the line had been damp so long they'd started to smell faintly of the river. In the middle of Fuuka's row of tomatoes, on its chopstick, one of them had gone red. Just the one. The rest were still green and furred and hard as knuckles." },
      { ifChoice: { 'asks.aigis': 'yes' }, then: [
        { n: "Aigis wasn't at the rail. She was inside the roof door, at the top of the stairs, standing exactly where Solar would have to pass her; and when Solar came up she stepped back one pace and to the left and fell in at her shoulder, and walked her to the rail, and stopped where she'd stopped every evening for three weeks, at the distance a person stands from someone they're guarding." },
        { n: "She'd stood at that distance at the school gate. At the konbini, by the magazines. Outside the second-floor bathroom, once, for eleven minutes, until Yukari had come out of the next stall and said *Aigis, honey, no*, and Aigis had said it was an order, and Yukari had looked at Solar over Aigis's shoulder with an expression Solar was still trying not to think about." },
        { s: 'aigis', f: 'happy', t: "Good evening, Solar. Sunset is at nineteen oh two. I have been beside you for twenty-four days. It has been very restful." },
        { s: 'aigis', f: 'neutral', t: "For me. I have begun to notice that it is a different number for you. Your shoulders are two centimeters higher when I am behind them. I am reporting it because it is yours." },
        { choose: [
          { t: "It's fine. I gave the order.", notes: 2, then: [
            { s: 'aigis', f: 'neutral', t: "Yes. You did." },
            { s: 'aigis', f: 'neutral', t: "...I will stand one centimeter further back. That is not disobeying. That is a correction. I am allowed corrections." }
          ] },
          { t: "(Let your shoulders down. On purpose.)", notes: 3, then: [
            { n: "She let them down. It took longer than it should have; they'd been up, she realized, for a lot longer than three weeks, and they came down in stages, the way a held breath comes out when you're trying not to let anyone hear it go." },
            { s: 'aigis', f: 'happy', t: "There. Thank you. I have recorded both numbers. I prefer the second one." }
          ] },
          { t: "Maybe not the bathroom, though.", notes: 2, then: [
            { s: 'aigis', f: 'flustered', t: "...Understood. The bathroom is outside the order. I will write it in the margin." },
            { s: 'aigis', f: 'neutral', t: "Yukari-san has asked for it to be in large letters." }
          ] }
        ] }
      ], else: [ { ifChoice: { 'asks.aigis': 'no' }, then: [
        { n: "Aigis was at the rail with a sheet of paper in her hand. Junpei had typed it on the lounge computer at her dictation and printed it and taken it to the konbini and had it laminated with his own money, and it said, in the dorm printer's tired gray capitals, AIGIS: THINGS TO DO (SELF-ISSUED). Water Fuuka's tomatoes, 18:00. Check the latch after Hyein-san. Walk Koromaru-san with Ken-san, Tuesdays and Thursdays. Census, 23:59. Census, end of the hour." },
        { s: 'aigis', f: 'neutral', t: "Good evening, Solar. Sunset is at nineteen oh two. I have issued myself five purposes. Junpei-san laminated them. He says lamination makes anything official." },
        { s: 'aigis', f: 'sad', t: "They are very small. They fit on one side. I have been trying to decide whether a person needs the other side." },
        { n: "She turned it over. The back was white and shiny and empty, and it caught the last of the light and gave it back in a square." },
        { choose: [
          { t: "Leave it blank. That's allowed.", notes: 3, then: [
            { s: 'aigis', f: 'neutral', t: "...Blank. Yes. That is what the other side is for, until it is not." }
          ] },
          { t: "Add one. Talk to me on the roof.", notes: 3, then: [
            { n: "Aigis took a pen out of her blazer and wrote it, carefully, on the shiny back, and the ink beaded on the plastic and wouldn't take; and she pressed harder, and the letters came out pale and skating and already smearing under her thumb." },
            { s: 'aigis', f: 'happy', t: "It will not stay on. I will remember it instead. I am very good at remembering. It is the thing I am best at, after lists." }
          ] },
          { t: "It's a good list.", notes: 2, then: [
            { s: 'aigis', f: 'neutral', t: "Thank you. It is a good list. It has no handle either. But it has a corner I can hold." }
          ] }
        ] }
      ], else: [
        { n: "Aigis was at the rail. She turned when the door opened, and Solar watched her do the thing she'd done every evening for three weeks: stop, with one foot lifted, and look at the rail and at Solar and at the space between them, and decide, and put the foot down at Solar's left shoulder." },
        { s: 'aigis', f: 'neutral', t: "Here. I choose here." },
        { s: 'aigis', f: 'neutral', t: "Good evening, Solar. Sunset is at nineteen oh two. That was the twenty-fourth time I have chosen it. I keep a tally. It is the back page of your file." },
        { s: 'aigis', f: 'neutral', t: "I expected it to become easier. It has not become easier. It has become mine, which I am told is a different thing." },
        { choose: [
          { t: "Does it ever change? Where you pick?", notes: 2, then: [
            { s: 'aigis', f: 'neutral', t: "Twice. Both times I chose the front hall, at the latch, after Hyein-san had gone up. I chose it over here." },
            { s: 'aigis', f: 'serious', t: "I am telling you so that you know it was a choice. Not a malfunction. I would not like you to think it was a malfunction." }
          ] },
          { t: "(Move along the rail. See if she follows.)", notes: 3, then: [
            { n: "She moved a meter along the rail, toward the planters. Aigis watched her go, and stood where she was for a long second, and Solar could see her deciding it all over again, from the beginning, as if the first twenty-four times didn't count toward this one. Then she took one step, deliberately, and stood at Solar's left shoulder." },
            { s: 'aigis', f: 'happy', t: "I see. You have chosen also. Now we are both choosing. That is twice as inefficient." }
          ] },
          { t: "Twenty-four's a lot.", notes: 2, then: [
            { s: 'aigis', f: 'neutral', t: "It is not a lot. It is twenty-four." },
            { s: 'aigis', f: 'sad', t: "I would like it to become a very large number. I have a feeling about that I cannot place. I have put it at the back, under *new*." }
          ] }
        ] }
      ] } ] },
      { ifRank: { hyein: 3 }, then: [
        { n: "Hyein's ribbon was at the back of her hair, a little damp from the air, the bow still exact. Somebody had pressed it. Solar was fairly sure it had been Aigis, with the iron, at an angle, the way she did everything." }
      ] },
      { s: 'aigis', f: 'neutral', t: "I have news for the census. It is not good news, and it is not bad. It is a new column." },
      { ifEvent: 'eqx-stage', then: [
        { s: 'aigis', f: 'neutral', t: "Four new hearts came through on the twenty-sixth. At the mall, in the red. Dancing. They live at the boarding house now." },
        { s: 'aigis', f: 'serious', t: "On the river side." },
        { s: 'aigis', f: 'neutral', t: "I have tried to count them every night since. Four girls. I believe their hearts would be fast; I believe they dance in their sleep. From the roof I cannot hear past the post office. They live inside the part of the town that is nothing." },
        { s: 'aigis', f: 'sad', t: "There are now four people in this town who are ours and whom I cannot count. I have written their names at the top of a column and left the column empty. It is the first column I have ever left empty on purpose. I do not like how it looks. It looks like a form nobody has signed." }
      ], else: [
        { s: 'aigis', f: 'neutral', t: "The river side is still nothing. From the post office to the water. I count to the corner and I stop. I have stopped being surprised by it. I have not stopped minding." }
      ] },
      { ifEvent: 'eqx-last-grain', then: [
        { s: 'aigis', f: 'sad', t: "...Nozomi-san was on the river side. I could not count him either. I would like you to know that I tried, every night, and that the column for him was empty before it was empty." }
      ] },
      { s: 'aigis', f: 'neutral', t: "Mrs. Arai is seventy-four. The saucer on her step is empty every morning. Junpei-san says it is a cat. I have counted the cats on that street. Junpei-san says I am not supposed to count cats." },
      { n: "She lifted her left hand to tuck a strand of hair behind her ear, a gesture she'd taken from Hyein sometime in May and never given back, and as her fingers closed there was a sound." },
      { n: "Very small. Under the wind, under the faint refrigerator hum she always made, under the monorail crossing the bay. A dry little whisper. Like a page being turned in another room." },
      { n: "Solar knew it. It took her a second, and then she knew it the way you know a song from its first two notes, and the skin on her arms went tight all the way up. The old hand. The hand that had held the rail on the twenty-seventh of July, last year, that was in a drawer in a building on the other side of the bay in a year that wasn't this one; it had made that sound every time it closed, and she'd never once noticed it until it was gone." },
      { s: 'aigis', f: 'neutral', t: "You heard it." },
      { s: 'aigis', f: 'neutral', t: "It began on the ninth of June. The left wrist. When I close the hand. It is not the old hand; the old hand is in a drawer. This one has learned the old one's sound. I do not know how. I did not teach it." },
      { s: 'aigis', f: 'neutral', t: "I believe it is wear. Nobody has looked inside me since March. The Group has a laboratory here. It has the building and the doors and the coffee machine. It does not have my files. Mitsuru-san asked. My files were in the other year too." },
      // CG: eqx-aigis-wrist — on a damp dormitory rooftop at dusk, a girl holding a straight-backed blonde girl's left hand cupped against her own ear like a shell, both of them very still, one red tomato among green ones on a stake behind them.
      { choose: [
        { t: "Let Mitsuru find someone. Please.", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "She has found someone. He is very kind and he has a screwdriver, and he has never seen anything like me. He told me so, twice. I did not let him open the wrist." },
          { s: 'aigis', f: 'neutral', t: "...I would like to keep it closed a little while. I will tell you why when I know why." }
        ] },
        { t: "Does it hurt?", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "I do not have pain. I have a reading that says something is wearing." },
          { s: 'aigis', f: 'neutral', t: "I have decided to file it under pain. It is the nearest drawer." }
        ] },
        { t: "(Take her hand. Hold it up to your ear.)", notes: 3, flag: 'eqx-aigis-wrist', then: [
          { n: "She took Aigis's left hand in both of hers. It was cool and heavy and absolutely still, and she lifted it to her ear the way you'd lift a shell at the beach, and held it there, and Aigis let her, and then, very slowly, closed her fingers." },
          { n: "The page turned. And turned. And turned again, a book being read by somebody in no hurry at all, in a room down a long hall." },
          { s: 'aigis', f: 'flustered', t: "...That is the closest anyone has been to it. I can hear your pulse through it. Sixty-four." },
          { s: 'aigis', f: 'neutral', t: "I find I do not want it repaired. Everything else in me was made to last a very long time. I would like one thing that is wearing out the way a person's things do. So that I know what it is like." }
        ] }
      ] },
      { n: "The red tomato moved on its chopstick in a breath of wind off the bay. Down the hill the streetlamps hadn't come on yet. The sky over the island was the color of the inside of a shell." },
      { s: 'aigis', f: 'neutral', t: "There is a space on my list. The fifth thing. I left it in April. I said I would wait." },
      { s: 'aigis', f: 'neutral', t: "I have stopped wanting to wait. I do not know why. It is not a date. Nothing is due. I only find that I would like the space filled before it rains again." },
      { ifChoice: { 'asks.aigis': 'yes' }, then: [
        { s: 'aigis', f: 'neutral', t: "You could order it. I would like that best." }
      ], else: [ { ifChoice: { 'asks.aigis': 'no' }, then: [
        { s: 'aigis', f: 'neutral', t: "I know you will not order it. I am asking you to suggest it. A suggestion has a small handle. I have checked." }
      ], else: [
        { s: 'aigis', f: 'neutral', t: "I will choose it myself. I would like you to say some things out loud first, so that I have something to choose from." }
      ] } ] },
      { choose: [
        { t: "Learn to float.", notes: 3, flag: 'eqx-aigis-float', then: [
          { s: 'aigis', f: 'surprised', t: "...My density is three point four times that of water." },
          { s: 'solar', f: 'neutral', t: "I know." },
          { s: 'aigis', f: 'neutral', t: "I would sink. I have sunk. At Yakushima I stood on the bottom in a meter and a half of water and observed Junpei-san drowning, and he told me afterward that he had been doing the butterfly." },
          { s: 'aigis', f: 'happy', t: "It is a very bad fifth thing. It is impossible. I will put it on the list." },
          { s: 'aigis', f: 'neutral', t: "In August. When the sea is warm. You will have to be there. I cannot float alone. That is part of how it is impossible." }
        ] },
        { t: "Something useless. Just for you.", notes: 3, flag: 'eqx-aigis-useless', then: [
          { n: "Aigis thought about it for so long that the light changed. Then she turned her head, with the small soft click, and looked at the planters." },
          { s: 'aigis', f: 'neutral', t: "...Then I would like to watch one of Fuuka-san's tomatoes go red. From green. All of the way. I have never watched a thing change that slowly on purpose." },
          { n: "She pointed. Not at the red one. At the next one along, which was green with the faintest wash of orange coming up from the bottom, like a blush somebody was trying not to have." },
          { s: 'aigis', f: 'happy', t: "That one. I have named it. I will not tell you its name. That is also useless." }
        ] },
        { t: "Leave it empty a while longer.", notes: 2, flag: 'eqx-aigis-space', then: [
          { s: 'aigis', f: 'neutral', t: "...Yes. A space is also a thing to have." },
          { s: 'aigis', f: 'neutral', t: "I will leave it. I would like you to know that I asked you before the rain. In case it matters, later, when I asked." }
        ] }
      ] },
      { n: "Down in the house a door shut, and a voice called up the stairwell, Hanni's, about the bathroom, and another answered, softer, Hyein's; and Aigis's head turned toward the stairwell the way it always turned toward Hyein's voice, a small adjustment, the way a plant on a sill turns toward the window." },
      { s: 'aigis', f: 'neutral', t: "Hyein-san checks the latch twice. I check it a third time. She does not know." },
      { s: 'aigis', f: 'serious', t: "I have started to think a third check is not enough. A third check is a thing that happens after. I would like her to have somebody she tells about the latch. Before. Somebody she would say it to out loud." },
      { s: 'aigis', f: 'sad', t: "It cannot be me. People do not tell things to the third check. They tell things to people." },
      { choose: [
        { t: "I'll make time for her.", notes: 3, then: [
          { s: 'aigis', f: 'happy', t: "Thank you. She likes the long way round the shrine. She will not say so. I am saying it for her, which I believe is cheating." }
        ] },
        { t: "Hanni's there for her.", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "Yes. Hanni-san sleeps across her door. A door has two sides. I would like someone on the inside of it also." }
        ] },
        { t: "You could tell her you check it.", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "...I could. I have drafted it. It sounds like one girl telling another girl that she is being watched." },
          { s: 'aigis', f: 'neutral', t: "I will draft it again. I have a great deal of paper." }
        ] }
      ] },
      { place: 'Iwatodai Dorm · Front Hall', time: 'Late Night', bg: 'iwatodaidorm-hallway', soft: true },
      { n: "The rain came back after eleven, the way Aigis had said it would without saying it, soft at first and then all at once, loud on the roof and in the gutters and in the planters, where the red tomato was still on its stake because nobody had wanted to be the one to pick it." },
      { n: "Solar was awake for it. She was awake at eleven fifty-eight, too, when the steps came down the stairs, light, even, exactly the same distance apart, and stopped in the front hall. Koromaru's tail thumped once on the boards." },
      { n: "Then, through the floor, through the rain, so faint she'd never have heard it if she hadn't been listening for it, a page turned. Once, at the latch. Once more, as the hand let go." }
    ] },
    { after: '8/19', title: '5: density', place: 'Iwatodai Dorm · Rooftop', time: 'Evening', music: 'tender', scene: [
      { bg: 'iwatodaidorm-roof-evening' },
      { n: "August had gotten into everything. The roof was too hot to touch at six in the evening, the rail too hot to lean on, the air over the concrete wobbling like the air over a stove; the cicadas on the hill behind the dorm were so loud they'd stopped being a sound and become a kind of pressure, a weight on the inside of the ears. Fuuka's tomatoes were all picked. The stakes stood in their planters with nothing on them, and the chopsticks had gone gray in the sun." },
      { n: "Aigis was standing in the one patch of shade, by the water tank, in her school blazer, which she wore in August because nobody had ordered her not to, perfectly cool, perfectly dry, the only thing on the whole hill that wasn't sweating." },
      { s: 'aigis', f: 'neutral', t: "Good evening, Solar. Sunset is at eighteen thirty-four. That is two minutes earlier than Sunday. I have started writing down how much earlier. I did not used to. I used to write down the time." },
      { ifFlag: 'eqx-aigis-useless', then: [
        { s: 'aigis', f: 'happy', t: "My tomato went red on the eleventh of July, at about four in the afternoon. I was there for all of it. It took nineteen days." },
        { s: 'aigis', f: 'neutral', t: "Fuuka-san picked it on the twelfth and gave it to me, and I did not know what to do with it, and Junpei-san ate it. I have decided I do not mind. It was useless all of the way to the end. That is the correct way to be useless." }
      ] },
      { ifFlag: 'eqx-aigis-float', then: [
        { s: 'aigis', f: 'neutral', t: "It is August. The sea is warm. I measured it on Sunday from the pier with Akihiko-san's thermometer, which he uses for his bath. You said you would be there." }
      ], else: [
        { s: 'aigis', f: 'neutral', t: "I would like to go and look at the sea. I have not looked at anything only to look at it since last July." }
      ] },
      { s: 'aigis', f: 'neutral', t: "Two of us is twos. I checked with the whiteboard." },

      { place: 'Port Island · Seaside Park Beach', time: 'Evening', bg: 'port-island-seaside-park-sunset', soft: true },
      // BG: eqx-seaside-beach-dusk — a small city beach on a man-made island at summer sunset, warm flat pink water, an empty lifeguard chair, the long bridge and the lit mainland across the bay, the sand nearly empty.
      { n: "The beach at Seaside Park was emptying out by the time they got there, families folding parasols and shaking out towels and calling children up from the water, and a man with a megaphone on the lifeguard chair saying something about jellyfish to nobody in particular. After Obon you didn't swim, Solar's grandmother would have said in one life and Miseon in another. The dead came back on the tide and the jellyfish came with them." },
      { n: "The sea didn't look like it had heard. It lay flat and pink and warm under the last of the light, barely breathing, and across the bay the mainland was coming on window by window, and the bridge was a long dark line over the water with its lamps not yet lit." },
      { ifRank: { hyein: 3 }, then: [
        { n: "Aigis untied the ribbon before anything else, with two fingers, and wound it round them, and held it out." },
        { s: 'aigis', f: 'neutral', t: "Please hold this. It must not get wet. Hyein-san hemmed it. Salt is bad for hems." },
        { n: "Solar put it in her pocket and kept her hand in the pocket on top of it, and Aigis watched her do that, and seemed satisfied." }
      ] },
      { ifFlag: 'eqx-aigis-float', then: [
        { n: "She had come in a navy swimsuit Mitsuru had ordered from a catalogue in July, under the blazer, which she now took off and folded into a square on the sand with such precision that a family passing with a cooler stopped to watch. Then she walked into the sea in a straight line, the way she walked down a corridor, until it was at her waist, and turned round, and waited." },
        { n: "Solar went in after her. The water was warm as a bath at the edges and cooler in the middle, and soft, and it smelled of salt and sunscreen and something green; and when she reached Aigis it was up to her own ribs." },
        { s: 'aigis', f: 'neutral', t: "I will lie back. I will sink. Please do not be alarmed. I have done it before." },
        { n: "She lay back. She went under the way a stone goes under, without any fuss at all, straight down, and Solar had her hands under Aigis's shoulders before she'd decided to, and it was like trying to hold up a sleeping person made of wet stone; it was a weight with no give in it anywhere. For one second Aigis's face was under the surface, a hand's width down, calm, eyes open, looking up at her through the pink water with complete interest, and her hair drifting out round her head like weed." },
        { n: "Solar hauled. She got her up. She stood braced with her feet dug into the sand and her arms shaking and Aigis's head on the water against her chest, and Aigis blinked the sea out of her eyes, slowly, one at a time." },
        { s: 'aigis', f: 'neutral', t: "That was sinking. Again, please." },
        { n: "The second time Solar was ready. Feet wide, knees bent, hands spread flat under the cool blades of Aigis's back, and when the weight came she took it and held it at the surface, just, and her arms burned, and the water lapped at Aigis's ears and chin and the corners of her mouth and didn't go over." },
        // CG: eqx-aigis-float — a blonde girl lying back on warm pink evening sea, held at the surface by another girl standing chest-deep with her arms braced under her shoulders, both looking up, the bridge a long dark line behind them.
        { s: 'aigis', f: 'happy', t: "...This. This is floating." },
        { s: 'aigis', f: 'neutral', t: "I have decided that if somebody is holding you up, it counts. I have decided it just now. I am entering it on the list as done." },
        { n: "She looked at the sky. Solar looked at her looking at it. The first star came out over the island, and Aigis's eyes refocused on it with their small soft click, under the water's edge, the sound coming up through Solar's hands." },
        { s: 'aigis', f: 'neutral', t: "I could walk out from here. Along the bottom. I do not need air. I could walk to the island and back and nobody would have to come with me. Nobody else here could." },
        { s: 'aigis', f: 'neutral', t: "It is the one place I am certain what I am for. Anywhere without air. I said so in April. I have been thinking about it more than I said I would." },
        { choose: [
          { t: "Not tonight.", notes: 3, then: [
            { s: 'aigis', f: 'neutral', t: "Not tonight. Understood." },
            { s: 'aigis', f: 'happy', t: "...That was nearly an order. I liked it anyway." }
          ] },
          { t: "(Don't answer. Keep holding her up.)", notes: 3, then: [
            { n: "She didn't answer. She held her. Her arms had stopped burning and gone past it into a deep shaking ache she knew she'd feel for two days, and she held her anyway, and the sea held some of her, and between them it was enough, and Aigis didn't say anything else for a long time." }
          ] },
          { t: "Then you'd better always come back up.", notes: 2, then: [
            { s: 'aigis', f: 'neutral', t: "I always come back up. I am very heavy and very patient." },
            { s: 'aigis', f: 'neutral', t: "...I would like to be the kind of thing people wait for at the edge. I think that is a different thing from coming back up. I will look into it." }
          ] }
        ] },
        { n: "When they came out she stood on the sand and ran. Not her. The sea, out of her: from her elbows and her knees and the joints of her fingers, in thin steady trickles, as if she were a house after a storm, and she stood there patiently and let it, and the family with the cooler, who had stayed to watch, applauded." }
      ], else: [
        { n: "Aigis didn't go in. She sat down at the tide line with her blazer on and her shoes side by side next to her and her knees together, and the last thin edges of the waves came up and touched her toes and went back, and came up again, and she watched them do it the way she watched everything, with her whole attention, as if they might stop." },
        { n: "Solar waded in to her ankles, and then her shins, and then came back and sat down beside her with her wet feet in the sand." },
        { s: 'aigis', f: 'neutral', t: "Four hundred and eleven. Waves. Since we sat down." },
        { s: 'aigis', f: 'neutral', t: "If I went in I would go to the bottom and stay there until somebody asked me to come up. I do not need air. I said so in April. It is the one place I am certain what I am for. Anywhere without any." },
        { s: 'aigis', f: 'neutral', t: "I have been thinking about it more than I said I would." },
        { choose: [
          { t: "Then don't go in without asking me.", notes: 2, then: [
            { s: 'aigis', f: 'neutral', t: "That is the fourth thing on my list, the other way round. I asked to be asked first. Now you would like to be asked first." },
            { s: 'aigis', f: 'happy', t: "...Then we will both be asking. I will write it in the margin. The margin is getting very full." }
          ] },
          { t: "(Bury her feet in the sand.)", notes: 3, then: [
            { n: "She scooped warm sand over Aigis's feet, and then over her ankles, and patted it flat, and Aigis looked down at it, and then at her, and then kept very still, as if the sand might mind if she moved." },
            { s: 'aigis', f: 'happy', t: "There. Now I am anchored. That is the opposite of floating. I think it is also on the list." }
          ] },
          { t: "The sea's not going anywhere.", notes: 2, then: [
            { s: 'aigis', f: 'neutral', t: "No. It is very reliable. I find that restful about it." }
          ] }
        ] }
      ] },
      { n: "The sun went down behind the mainland. The lamps on the bridge came on, one after another, from the near end to the far, and stopped, the way they'd stopped in the lantern rows on the river, at a line. Aigis looked at the bridge for a while. Then she looked at her own left hand, open on her knee." },
      { s: 'aigis', f: 'neutral', t: "A year ago, on the twenty-seventh of July, I lost my hand on a rail. You were there." },
      { s: 'aigis', f: 'sad', t: "This year, on the twenty-seventh of July, Nozomi-san." },
      { s: 'aigis', f: 'sad', t: "I did not hear it. He was on the river side. He died in the only room in Iwatodai I cannot hear, and I counted the dorm that night, and the guesthouse, and the street down to the corner, twice, and it was a very good number, and I said it out loud to myself, and he was already sitting at the table." },
      { s: 'aigis', f: 'serious', t: "I was made to protect. That is the second thing on the list. It is the oldest thing on the list. I cannot protect a room I cannot hear." },
      { ifEvent: 'eqx-wake', then: [
        { s: 'aigis', f: 'neutral', t: "Mitsuru-san gave me my exception, at his wake. I have it in my pocket. I keep checking that it is there, the way Hyein-san checks a latch." },
        { ifEvent: 'eqx-three-breakfasts', then: [
          { s: 'aigis', f: 'sad', t: "At breakfast with the parents there were forty-three hearts in that room. Everyone's was fast. I could not find hers. It was like listening for one violin in an orchestra that is all violins, and the violins are all very glad to see each other." }
        ], else: [
          { s: 'aigis', f: 'neutral', t: "There are never fewer than twelve people near her. I would like there to be fewer. I would like to stand close to her when nobody else is." },
          { s: 'aigis', f: 'serious', t: "I do not know how to want that safely. I am trying to learn." }
        ] }
      ] },
      { ifEvent: 'eqx-lanterns', then: [
        { s: 'aigis', f: 'neutral', t: "On the sixteenth the lanterns came back up the river. Forty-one. I counted them going into her apron, one at a time. In the morning the woman at the konbini did not remember the lanterns at all. I read her my count. She said it sounded very pretty." }
      ] },
      { s: 'aigis', f: 'neutral', t: "The cicadas on the hill began on the ninth of July. They stop at the end of August. I have the date. I write down the dates things stop, now. I did not used to. I used to only write down the dates things start." },
      { s: 'aigis', f: 'neutral', t: "Solar. How long is a very long time?" },
      { choose: [
        { t: "Longer than people.", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "That is what Mitsuru-san said. About my arcana. *Aeon*. Last year I found it restful." },
          { s: 'aigis', f: 'sad', t: "I do not find it restful this year. It means I would be here after. I would like to find out whether there is a way to be here during, instead." }
        ] },
        { t: "Until you stop counting.", notes: 3, then: [
          { s: 'aigis', f: 'neutral', t: "...Then I will count slowly." },
          { s: 'aigis', f: 'happy', t: "That is a joke. I made it myself. Junpei-san will be very proud and also unbearable." }
        ] },
        { t: "(Count the waves with her instead of answering.)", notes: 3, then: [
          { n: "She didn't answer. She started counting the waves, under her breath, from where Aigis had got to, four hundred and twelve, four hundred and thirteen, and after a few, Aigis's voice came in beside hers, level, exactly on the beat, and they counted the sea coming in together in the dark until neither of them could see the waves any more, only hear them, and kept counting by ear." }
        ] }
      ] },

      { place: 'Iwatodai Dorm · Rooftop', time: 'Late Night', bg: 'iwatodaidorm-roof-night', soft: true },
      { ifRank: { hyein: 3 }, then: [
        { n: "On the monorail home Solar tied the ribbon back on for her, standing in the swaying car with Aigis sitting very straight on the bench and a small pool of seawater collecting slowly under her seat. It took three tries. The bow came out lopsided." },
        { s: 'aigis', f: 'neutral', t: "Hyein-san's knot is better. Do not tell her I said so." },
        { s: 'aigis', f: 'happy', t: "Do tell her that you tied it. She will like that you were trusted with it. She will pretend not to." }
      ] },
      { n: "Solar didn't go to bed. She went up to the roof at half past eleven with a can of something cold, and Aigis was already at the rail, dry now, salt drying white in the seams of her blazer, facing down the hill." },
      { n: "At eleven fifty-nine she began. The dorm by name and rate, the way she had in June. Mitsuru-san. Akihiko-san. Junpei-san, the radio on. Hanni-san on the floor in the hall. Hyein-san. Koromaru-san, ninety, always ninety. Eleven, and the dog." },
      { n: "Then she stopped, and her left hand closed on the rail, and the page turned in her wrist, very soft, and she said, under her breath, a number Solar had never once heard her use for this building." },
      { s: 'aigis', f: 'neutral', t: "...Twelve." },
      { n: "A pause. The red came up through the town, from the river, all at once, and the cicadas stopped mid-scream, and the hum came up through the soles of their feet." },
      { s: 'aigis', f: 'neutral', t: "No. Eleven. I am sorry. I counted myself." },
      { n: "She didn't explain. Solar didn't ask her to. She stood beside her at the rail in the red, at whatever distance it was now, and thought about it anyway, the whole hour: that there was nothing in Aigis to count, no heartbeat, no number; and that she'd counted it anyway, for one second, by mistake, the way you'd put out one more cup than there are people at a table because you'd like there to be one more." }
    ] },
    { after: '9/28', title: '6: what she looks like', place: 'Iwatodai Dorm · Rooftop', time: 'Evening', music: 'tender', scene: [
      { bg: 'iwatodaidorm-roof-evening' },
      { n: "The first cold evening came in on the last Tuesday of September without any warning, the way the first cold evening always did, and the roof smelled of it, of iron and dry leaves and somebody's woodsmoke a long way off. Fuuka had pulled the planters. The tomato stakes were tied in a bundle against the water tank with garden string. The laundry line was empty except for one gray sock, which had been there since August and which nobody would claim." },
      { n: "Aigis was at the rail, facing down the hill, toward the river, and she didn't turn when the door opened. She'd been quiet since the bridge. Quiet in a particular way that Solar had started to recognize, the way a person is quiet when they're running the same sum again and again and getting the same wrong answer, and not stopping, because the answer isn't allowed to be wrong." },
      { s: 'aigis', f: 'neutral', t: "Good evening, Solar. Sunset is at seventeen forty." },
      { s: 'aigis', f: 'sad', t: "...I am sorry. I have been reporting sunsets to you as if they were news. They are not news. They are a little earlier every day and you know that already. I will think of something better to start with. I will start tomorrow." },
      { ifFlag: 'eqx-aigis-forty', then: [
        { s: 'aigis', f: 'serious', t: "On the twenty-second I had it. Forty. In her kitchen, among four women with their hands in one bowl. I said I could not tell you which. I still cannot." },
        { s: 'aigis', f: 'sad', t: "On the twenty-fourth, at dawn, on the bridge, there was nothing. Not her. Not anyone. Since then I have taken her reading wherever I can, and she is exactly what she looks like." }
      ], else: [
        { s: 'aigis', f: 'sad', t: "On the twenty-fourth, at dawn, on the bridge, I read nothing. Not her. Not anyone. Since then I have taken her reading wherever I can, and she is exactly what she looks like." }
      ] },
      { s: 'aigis', f: 'neutral', t: "I would like to take it again. At the gate. Tonight, before the light goes. It is twos after dark." },
      { s: 'aigis', f: 'neutral', t: "I would like the other one of the two to be you." },

      { place: 'Iwatodai · The River Street', time: 'Evening', bg: 'outside-night', soft: true },
      { n: "They walked down the hill in the last of the light. Past the first house and the second, and the third, with its blue roof and its nameplate and its pots on the step going leggy and brown at the ends of the summer, and the saucer in the middle of the step, empty, clean, set squarely." },
      { s: 'aigis', f: 'neutral', t: "Mrs. Arai. Seventy-six. A little fast. She is at the window." },
      { n: "She was. The curtain moved. Solar lifted a hand, and after a second a small old hand came up behind the glass and waved, slowly, and went away." },
      { n: "At the post office corner, where the census stopped, Aigis didn't stop. She turned onto the river road with her head tipped a fraction to one side, listening into the nothing, and walked on into it, and Solar walked beside her and felt it the way you feel a change of pressure in a plane, a fullness in the ears, the river's hush on the left gone flat as if somebody had laid a cloth over it." },

      { place: 'Iwatodai · The Oka Boarding House', time: 'Evening', bg: 'eqx-oka-gate', soft: true },
      { n: "The persimmon tree had gone orange. Every fruit on it, heavy, glossy, bright as lamps in the gray, so many that the boughs bent down over the wall into the street; and on the grass under it the ones that had fallen lay split open in the dusk, soft and dark and sweet-smelling, and nothing was touching them. Not a wasp. Not an ant. Not a bird in the whole tree, still." },
      { n: "Under the eaves of the house, along the whole front of the veranda, somebody had hung strings of peeled persimmons to dry. Dozens of them, tied by their stems, one under another in long rows, pale orange and glistening, turning very slightly on their strings, all together, though there wasn't any wind." },
      { ifEvent: 'eqx-empty-chair', then: [
        { n: "The house was dark. The fathers had gone up the hill to the dorm with their suitcases a few days before, and the front room behind the screens was unlit; only the kitchen, at the side, showed yellow." }
      ], else: [
        { n: "Behind the paper screens of the front room the long table was lit, and at the end of it three shapes sat close together, not moving, the way men sit in a hospital corridor; and the radio was on, low, the news in a language none of them spoke." }
      ] },
      { n: "Aigis stopped at the gate. She didn't lift the latch. She stood with her hands folded in front of her and her head tipped, and Solar stood at her shoulder, and the door of the house opened before either of them had made a sound." },
      { n: "Mrs. Oka on the threshold. Not past it. A dish towel over her shoulder and a persimmon in one gloved hand and a small knife in the other, and a long curl of orange peel hanging from the blade, unbroken." },
      { s: 'mrsoka', f: 'happy', t: "Well, look at that. Two of my favorite girls at my gate, and neither of them hungry, I can see it on you. Come in, come in. I've done a hundred of these today and there's a hundred more." },
      { s: 'aigis', f: 'neutral', t: "Good evening, Mrs. Oka. Thank you. I will stand here." },
      { n: "Mrs. Oka looked at her. Not long. Kindly, with her head a little on one side, the same angle as Aigis's, so that for a second they were two women at either end of a garden path with their heads tipped the same way, listening to each other." },
      { s: 'mrsoka', f: 'neutral', t: "You're the one who counts, aren't you. The girl at the big house. Hyein-chan told me. Counting everybody's heart, every night, so you know they're all still there." },
      { s: 'mrsoka', f: 'happy', t: "Well, go on, then, dear. Count me. I don't mind. I've nothing to hide but my age." },
      // CG: eqx-aigis-gate — dusk at a low wooden gate, a persimmon tree heavy with orange fruit bending over the wall, rows of peeled persimmons hanging on strings under the eaves of an old house, a small woman in white gloves on the lit threshold with a paring knife and a curl of peel, a straight-backed blonde girl outside the gate with her head tipped, listening.
      { n: "Aigis's eyes refocused with their small soft click. Solar heard it from where she stood. She heard, too, the other sound, under it, from Aigis's left wrist, as her folded hands tightened on each other: a page turning, once." },
      { s: 'aigis', f: 'neutral', t: "...Seventy-two." },
      { s: 'mrsoka', f: 'neutral', t: "Is that good?" },
      { s: 'aigis', f: 'neutral', t: "It is exactly right." },
      { s: 'mrsoka', f: 'happy', t: "Well. That's all any of us can hope for, isn't it." },
      { n: "She laughed, the short warm embarrassed laugh, and drew the knife round the persimmon the last time, and the peel came away whole and fell coiled onto the step like a sleeping thing." },
      { s: 'mrsoka', f: 'neutral', t: "You're a good girl. Standing guard. Somebody has to, in a town like this." },
      { s: 'mrsoka', f: 'neutral', t: "Only mind you're standing in the right doorway, dear, when it matters. They're so easy to mix up, doorways. They all look the same from the outside." },
      { n: "She said it fondly, the way you'd tell a child to mind the step. Then she lifted the peeled fruit to the light to look at it, and tied it by its stem to the end of a string with two quick turns of her gloved fingers, and hung it with the others under the eaves; and knocked twice, softly, with one knuckle, on her own doorframe, and went in, and the door slid shut." },
      { choose: [
        { t: "(Take Aigis's arm. Walk her away from the gate.)", notes: 3, then: [
          { n: "She took Aigis's arm, the way you'd take a friend's arm leaving a party, and turned her, and walked; and Aigis let herself be turned, which she'd never done, not once, in two years." }
        ] },
        { t: "Aigis. Let's go.", notes: 2, then: [
          { n: "Aigis didn't move for a second. Then she did, all at once, as if somebody had reached in and set her going again, and walked up the road at Solar's side without looking back at the house." }
        ] },
        { t: "(Look at the persimmons hanging under the eaves. Count them.)", notes: 1, then: [
          { n: "She counted them. She didn't know why. Eleven on the first string. Eleven on the second. Eleven on the third, all of them turning, very slowly, on their stems, together, in no wind, so that it looked from the gate like a row of small orange faces all turning to watch the two of them go." },
          { n: "Aigis touched her elbow. Solar stopped counting." }
        ] }
      ] },

      { place: 'Iwatodai · The River Street', time: 'Night', bg: 'outside-night', soft: true },
      { n: "Halfway up the hill, under the lamp at the second house, Aigis stopped walking." },
      { s: 'aigis', f: 'sad', t: "I can't—" },
      { n: "She stopped. She stood quite still on the slope with the lamp on her face, and Solar watched her hear herself." },
      { s: 'aigis', f: 'neutral', t: "...I said can't. I have never said can't. I say *I am not able*. I have said it to you a hundred and six times. I have the count." },
      { s: 'aigis', f: 'neutral', t: "I believe it was a sound I took from someone else. I believe I have been around people for a very long time now. I believe I am frightened, Solar, and frightened people say can't. I have heard them. Hyein-san says it in her sleep." },
      { s: 'aigis', f: 'serious', t: "Seventy-two. A small woman in her fifties, a little tired, a little sad. I have never once taken the reading of a living person who was exactly what they looked like. People are never exactly what they look like. Their hearts are always doing something their faces are not." },
      { s: 'aigis', f: 'serious', t: "Hers does exactly what her face does. To the beat. As if somebody had read what a small sad woman's heart should do, and was doing it." },
      { ifEvent: 'eqx-lease', then: [
        { s: 'aigis', f: 'neutral', t: "Mitsuru-san has my four readings. That was the fifth. It is the same as the other four. I will bring it to her first, as she asked. She will write it down. She writes very slowly now. I can no longer tell from the pen." }
      ], else: [
        { s: 'aigis', f: 'neutral', t: "That was the first. I will take three more. At her window. At the shrine. In the shop where she buys her rice. Then I will have four, and I will take them to Mitsuru-san, and she will ask me what they mean, and I will have to say I don't know." },
        { s: 'aigis', f: 'sad', t: "...Do not know. I will have to say I do not know." }
      ] },

      { place: 'Iwatodai Dorm · Rooftop', time: 'Night', bg: 'iwatodaidorm-roof-night', soft: true },
      { n: "They went up to the roof instead of in. Neither of them suggested it. The town below was clean and sharp in the cold, every light distinct, the bridge strung across the black water, and down past the post office corner the lamps on the river road lit nothing, the way they always had." },
      { n: "Aigis stood at the rail. Then, after a while, she didn't; she sat down on the low wall, which she never did, with her hands in her lap, and looked at them." },
      { s: 'aigis', f: 'neutral', t: "In June I asked you for an order. I told you it was because orders are restful. That was true. It was not the reason." },
      { s: 'aigis', f: 'neutral', t: "On the twenty-ninth of April I stood in a doorway for one hour and four minutes. I told you it was because nobody had been standing in it when it happened. I did not tell you the rest." },
      { s: 'aigis', f: 'serious', t: "The rest is that on the twenty-eighth I was in the guesthouse, by order, in the right building, and it happened in that building anyway, at a door I was not standing at. And on the twenty-third I was where I had chosen to be, and it was the wrong place, and it happened anyway, somewhere else." },
      { s: 'aigis', f: 'sad', t: "I would like to already be standing in the doorway. Before. That is the whole of it. An order puts me somewhere. If I choose, I can choose the wrong one. She said so tonight. She said it very kindly. I think she meant me to hear it." },
      { n: "There it was. Under the order and the census and the latch and the third check and the space at the end of every file; the thing Aigis had been carrying since April, folded small, the way she folded everything. She didn't want to be told where to stand. She wanted to be sure. And there was nobody in the world who could make her sure, and she knew it, and she'd asked anyway." },
      { flag: 'eqx-floor-aigis' },
      { ifChoice: { 'asks.aigis': 'yes' }, then: [
        { s: 'aigis', f: 'neutral', t: "You gave me the order. Beside you. I have kept it every hour since June, except the bathroom, which is in the margin." },
        { s: 'aigis', f: 'serious', t: "On the full moons, Mitsuru-san has me in Hyein-san's building. When you and Hyein-san are in the same building, that is one order. When you are not, it is two. I do not know which of them is the doorway." }
      ], else: [ { ifChoice: { 'asks.aigis': 'no' }, then: [
        { s: 'aigis', f: 'neutral', t: "You gave me no order. I have been choosing nothing, every night, very carefully, and keeping my five small purposes, and they are still laminated." },
        { s: 'aigis', f: 'serious', t: "I would like to tell you that when it matters, I am going to choose Hyein-san's door. I am telling you so that somebody has heard me say it. Things that have been heard are harder to get wrong." }
      ], else: [
        { s: 'aigis', f: 'neutral', t: "I have chosen here a hundred and two times. It is still the back page of your file. It needed a second page." },
        { s: 'aigis', f: 'serious', t: "There is going to be a night when I choose there instead. Hyein-san's door. I would like you to know, now, before it, that it will not be because I stopped choosing here." }
      ] } ] },
      { choose: [
        { t: "Wherever Hyein is, on the full moons. That's where you stand.", notes: 3, flag: 'eqx-aigis-hyein', then: [
          { n: "Aigis went still. The good stillness, the one from June: something set down in the place it was made to fit." },
          { s: 'aigis', f: 'neutral', t: "...Yes. Thank you. That is a doorway. I can see it." },
          { s: 'aigis', f: 'happy', t: "I will tell her. Not the reason. Only that I will be there. She will say I do not need to be. I will say I know. That is how we talk." }
        ] },
        { t: "That's yours to choose. You'll choose right.", notes: 3, flag: 'eqx-aigis-own-door', then: [
          { s: 'aigis', f: 'neutral', t: "You do not know that." },
          { s: 'solar', f: 'neutral', t: "No." },
          { s: 'aigis', f: 'neutral', t: "...Nobody has ever said that to me without knowing it. Everything anyone has ever told me about myself, they knew first. They had the files." },
          { s: 'aigis', f: 'happy', t: "I will try to deserve it. I believe that is what people do with a thing like that. I will look into it." }
        ] },
        { t: "Stay with me. Please.", notes: 2, tally: { asked: 1, cakes: 1 }, flag: 'eqx-asked-aigis', then: [
          { n: "Aigis looked up at her from the wall. For a long moment she didn't say anything at all, and her face did nothing, and then it did something Solar had never seen it do, a small loosening around the eyes, like somebody who's been holding a heavy door open for a long time being told they can let it go." },
          { s: 'aigis', f: 'happy', t: "...Yes. Of course. That is the easiest thing anyone has ever asked me." },
          { n: "She stood and came to Solar's shoulder and stayed there, at exactly the distance; and after a moment her head turned, the small adjustment, the plant toward the window, down toward the stairwell and the second floor and Hyein's door, and stayed turned, and Solar felt the weight of what she'd said settle across the two of them like a coat, warm, a little too heavy, and wished she knew which of them it was meant to keep warm." }
        ] }
      ] },
      { s: 'aigis', f: 'neutral', t: "Hyein-san has not been asleep since the bridge. Fifty-nine. Sixty-eight. Seventy, at three in the morning. She lies awake on one side of her door and Hanni-san lies awake on the other, and neither of them says so." },
      { s: 'aigis', f: 'sad', t: "Two people awake on either side of one door, and nobody saying anything. I would like somebody to say something. I would like it very much to be somebody who is not the third check." },
      { s: 'aigis', f: 'neutral', t: "One more thing. For the file." },
      { s: 'aigis', f: 'neutral', t: "I would like you to read it. The file. Every night, after the census. Not to do anything. Only so that it is in two places." },
      { s: 'aigis', f: 'neutral', t: "Things that are in two places last longer. I read that somewhere. I have decided to believe it, which I am told is also allowed." },
      { choose: [
        { t: "Every night. I promise.", notes: 3, then: [
          { s: 'aigis', f: 'happy', t: "Thank you. I will leave it on the landing windowsill, at twenty-three fifty-eight, and pick it up at the end of the hour. It will be like passing a note in class. Junpei-san says that is the highest form of trust." }
        ] },
        { t: "Why does it need to last?", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "Everything I have put in it is a person. I would like them to be written down somewhere that is not only me." },
          { s: 'aigis', f: 'neutral', t: "...That is the answer. I have checked it twice. It is the whole answer. I would prefer you did not check it a third time." }
        ] },
        { t: "(Hold out your hand for it now.)", notes: 3, then: [
          { n: "She held out her hand. Aigis looked at it, and then took the notebook out of her blazer, Junpei's, *for her FILES*, the cover soft and curled at the corners now from six months of her pocket, and put it in Solar's palm, and kept two fingers on it a second longer than she needed to." },
          { s: 'aigis', f: 'neutral', t: "Tonight only. Tomorrow I would like it back. I find I sleep better with it. I do not sleep. I find it anyway." }
        ] }
      ] },
      { place: 'Iwatodai Dorm · Rooftop', time: 'Late Night', bg: 'iwatodaidorm-roof-night', soft: true },
      { n: "At eleven fifty-nine she counted. She didn't go down to the front hall first, the way she always had. She counted from the roof, out loud, with Solar beside her, and her left hand closed and opened on the rail between the names, and the page turned in her wrist every time, plainly, audibly, and she didn't hide it any more." },
      { ifEvent: 'eqx-empty-chair', then: [
        { s: 'aigis', f: 'neutral', t: "Mitsuru-san. Akihiko-san. Junpei-san. Hanni-san, in the hall. Hyein-san, seventy, awake. Three fathers on the second floor, very fast, all three, all night. Koromaru-san, ninety." }
      ], else: [
        { s: 'aigis', f: 'neutral', t: "Mitsuru-san. Akihiko-san. Junpei-san. Hanni-san, in the hall. Hyein-san, seventy, awake. Koromaru-san, ninety. He is always ninety. I am so glad that he is always ninety." }
      ] },
      { n: "Then the town went red, from the river up, the whole hill going out in one long breath; and the hum came up through the wall and the soles of their feet; and somewhere below them on the second floor, behind a door with a girl lying awake on either side of it, nothing happened at all." },
      { n: "Aigis counted it anyway. Every minute of the hour. Solar stood at her shoulder and listened to her say the same names over and over in the red, level, patient, as if the saying were the thing holding them there; and at the end, when the lights came back and the river came back and the cold came back into the air, Aigis turned to her and said, very quietly, that the figures had matched, and that it was the most important thing she had to report, and that she would like to report it again tomorrow." }
    ] },
    // Rank 7 (Nov 16): the wrist opened. Plays from 10/19, before or after 10/23 (branches on eqx-1023 / dead.shinjiro /
    // eqx-shinji-lived, eqx-fathers-moved, eqx-1122 for a late play). Pays off rank 4's "I will tell you why when I know why",
    // rank 5's dates things stop, rank 6's file on the landing sill. 11/22 groundwork, unmarked: the left hand, a date she won't
    // write, Hyein's latch still told to nobody (a nudge toward Hyein's link, which is what decides 11/22).
    { after: '10/19', title: '7: four hundred and nine', place: 'Iwatodai Dorm · Rooftop', time: 'Evening', music: 'tender', scene: [
      { bg: 'iwatodaidorm-roof-evening' },
      { n: "October had stopped pretending. The wind came off the bay in the evenings now with nothing soft left in it, straight across the roof and through Solar's blazer and her shirt and whatever she thought she had on under them, and the town below had gone the clean hard colors of the cold, every roof and wire distinct, the bridge a black line ruled across water the color of a knife. The gray sock was still on the laundry line. It had frozen stiff overnight on Sunday, Junpei said, and thawed, and frozen, and nobody had taken it in, because by now taking it in would have meant something." },
      { n: "Aigis was at the rail. She turned before the door had finished opening." },
      { s: 'aigis', f: 'neutral', t: "Good evening, Solar. I said I would find a better thing to start with than the sunset. I have found one." },
      { s: 'aigis', f: 'neutral', t: "Today, nothing stopped." },
      { n: "She said it the way she'd said the sunset times all spring, flatly, a report, and then she waited, and Solar understood that it was the best news she had, and that she'd been holding it since the morning so it would still be fresh." },
      { ifEvent: 'eqx-1023', then: [
        { ifFlag: 'dead.shinjiro', then: [
          { n: "Except that it wasn't the whole truth, and they both knew it, and the wind went across the roof between them for a while without either of them saying so." },
          { s: 'aigis', f: 'sad', t: "...Today. I meant today. I have been starting with today because the other column is very short and I do not want to read it out loud." },
          { s: 'aigis', f: 'sad', t: "On the twenty-third I counted the road home. Every step. I counted the fathers and the party, and the thing wearing her, which had no heart, and which I counted anyway, as a space. I counted Shinjiro-san. Fifty-eight, going down. He was always slow. He did not like to hurry for anybody." },
          { s: 'aigis', f: 'sad', t: "Then he was a hundred and eighty, and then he was in Akihiko-san's arms, and then I was counting a space where he had been, and I went on counting it for some time before I understood that I was doing it. I counted it all the way up the rope." },
          { n: "She lifted her left hand off the rail and looked at it. Then she put it back." },
          { s: 'aigis', f: 'neutral', t: "Akihiko-san's hands do not close any more. I have checked them. He lets me. He sits on the stairs and holds them out, and I hold them, and they stay open. It is the opposite of what was wrong with them. It is worse." },
          { choose: [
            { t: "(Stand at the rail beside her. Don't say anything.)", notes: 3, then: [
              { n: "She stood beside her. Close, so their sleeves touched, the way she had in April. The wind pushed at both of them and they let it, and Aigis made her faint refrigerator hum under it, and after a long time she said, to the bridge, *thank you, that is the correct distance*, very quietly, as if the distance had been in question." }
            ] },
            { t: "You couldn't have heard it coming.", notes: 2, then: [
              { s: 'aigis', f: 'neutral', t: "No. I heard it coming. That is the part I cannot file." },
              { s: 'aigis', f: 'sad', t: "I heard it the whole way down the steps. I had the number. I did not know what it meant until it was a space. Knowing a number is not the same as being in the right doorway. I am learning the difference at a rate I do not like." }
            ] },
            { t: "He'd hate us standing up here being sad about him.", notes: 2, then: [
              { s: 'aigis', f: 'neutral', t: "Yes. He would tell us to go and eat something." },
              { s: 'aigis', f: 'sad', t: "...I do not eat. I have been going to the kitchen at seven anyway. I stand by the stove. Nobody has asked me why. I think they know why." }
            ] }
          ] }
        ], else: [
          { s: 'aigis', f: 'neutral', t: "On the twenty-third I counted the road home. Every step. Shinjiro-san went to a hundred and ninety-one on the steps, when he went in front of Jaesang-san. Then he came back down. Slowly. Ninety, eighty, sixty. He did not like to hurry for anybody." },
          { s: 'aigis', f: 'happy', t: "I have entered it in a new column. It is the first entry I have ever made for a thing not stopping. I did not have a column for that. I have made one. It has one line in it. I read it most nights." },
          { s: 'aigis', f: 'neutral', t: "He has three lines across his chest, under the bandage. Shallow. He will not let anyone see them but Akihiko-san and me. He says I do not count. I have told him I do. He says that is what he is afraid of." }
        ] }
      ], else: [
        { s: 'aigis', f: 'neutral', t: "The full moon is on the twenty-third. The fathers' hearts have been very fast for four nights. I cannot count them where they sleep. They are on the river side. But I hear them when they come up the hill to the dorm in the evenings, and they are fast in a way I have only heard once before, in men who have decided something and not told anyone." },
        { s: 'aigis', f: 'serious', t: "I have told Mitsuru-san. She wrote it down. She did not say anything. I think she has heard it too." }
      ] },
      { s: 'aigis', f: 'neutral', t: "I would like to show you something. Not here. In my room. It is warmer there, for you. I am told my room is cold. I have put a heater in it. I have never switched on a heater for anyone before." },
      { s: 'aigis', f: 'neutral', t: "In June I said I would tell you why when I knew why. I know why." },

      { place: 'Iwatodai Dorm · Aigis’s Room', time: 'Evening', bg: 'solar-dormroom-night', soft: true },
      // BG: aigis-dorm-room — a bare dormitory bedroom at night, a neatly made bed nobody sleeps in, a desk with a single lamp, a small electric heater glowing orange on the floor, a laminated list propped on the windowsill beside a jar of sand and a dried tomato stem.
      { n: "Solar had never been in it. Nobody had, as far as she knew, except Mitsuru, and the man with the screwdriver, once, for twenty minutes in July, with the door open. It was the corner room at the end of the third floor, and it was so tidy it looked unoccupied, like a room in a showroom, or a hotel at ten in the morning: the bed made with its corners folded square, the desk clear, the chair pushed in exactly." },
      { n: "But there were things. That was what surprised her. There were things in it, very few, set out along the windowsill in a row with a hand's width between each, the way a museum sets things out: the laminated list from the summer, propped against the glass, its back still shiny and almost blank; Junpei's frog notebook, squared to the edge; and between them, the rest." },
      { ifFlag: 'eqx-aigis-float', then: [
        { n: "A jam jar of sand from the beach at Seaside Park, the lid screwed on tight. A label in her square hand: *FLOATED. 8/19. HELD UP.*" }
      ] },
      { ifFlag: 'eqx-aigis-useless', then: [
        { n: "A tomato stem, dried, a little green star of sepals gone brittle and gray, on a folded square of paper. A label: *RED. 7/11. 16:04 approx. EATEN BY JUNPEI-SAN.*" }
      ] },
      { ifFlag: 'eqx-aigis-space', then: [
        { n: "A space. An actual space, between the notebook and the list, a hand's width of bare sill with nothing on it, which she had clearly measured, and which she had clearly dusted." }
      ] },
      { n: "The heater glowed on the floor by the bed, ticking as it warmed, and the room smelled of hot dust and of the cold coming in round the window frame, and Aigis stood in the middle of it with her hands folded and watched Solar look, and didn't say anything, and Solar had the feeling, very strongly, of having been let in somewhere." },
      { s: 'aigis', f: 'neutral', t: "Sit at the desk, please. I will need you to hold the light." },
      { n: "She sat on the edge of the bed, facing the desk, and laid her left arm out along it, palm up, under the lamp; and took out of her blazer pocket a small jeweller's screwdriver with a yellow handle, the kind that comes six to a plastic case at the hardware shop by the station." },
      { s: 'aigis', f: 'neutral', t: "The kind man gave it to me. In July. He said, if you ever change your mind, you'll know where it goes better than I would. He was right. I have taken it out every night since and put it back without using it." },
      { ifFlag: 'eqx-aigis-wrist', then: [
        { s: 'aigis', f: 'neutral', t: "You held it to your ear, in June. You are the only person who has heard it from that close. I would like you to be the only person who has seen it, also." }
      ], else: [
        { s: 'aigis', f: 'neutral', t: "You heard it on the roof, in June. You did not ask to hear it closer. I noticed that. I have decided it means you will not mind seeing it." }
      ] },
      { n: "There were four screws, so small Solar could barely see the heads, in a plate on the inside of the wrist, where on anybody else the veins would be. Aigis took them out one at a time, without hurrying, and laid them on the desk in a row a finger's width apart; and lifted the plate off with her thumbnail; and turned her arm a little, toward the lamp, toward Solar, the way you'd turn a book round so somebody else could read the page." },
      // CG: eqx-aigis-wrist-open — a girl holding a desk lamp low over the open inner wrist of a straight-backed blonde girl sitting on a neat dorm bed, a tiny yellow-handled screwdriver and four screws in a row on the desk, an orange heater glowing on the floor, deep red-black shadows round the lamplight.
      { n: "Solar didn't know what she'd expected. Wires. Something like the inside of a watch. It was more like the inside of a watch than anything, and less: small and close and absolutely clean, layer under layer of fine pale metal fitted so exactly she couldn't see where one part ended, and somewhere in the middle of it, where the hand met the arm, a thin bright leaf of something like brass, no wider than a fingernail, lying against the curve of a joint." },
      { s: 'aigis', f: 'neutral', t: "Watch." },
      { n: "She closed her fingers. The joint turned under the leaf, and the leaf bent, and lifted, and dragged across its edge, and there it was. The page. Turned, in a room down a long hall. She opened her hand, and it turned back." },
      { n: "And Solar could see now what it had done. Where the brass leaf lay, the edge of the joint was bright. A fine bright line, newer than anything round it, the way the edge of a stair goes bright where everybody puts their foot." },
      { s: 'aigis', f: 'neutral', t: "It is wearing. I measure it with the kind man's gauge on the first of every month. I took the average. At that rate it wears through the leaf in four hundred and nine days. Then it will stop making the sound. Some time after that, the hand will stop." },
      { s: 'aigis', f: 'neutral', t: "Four hundred and nine. I checked whether that is a good number. It is longer than the year." },
      { n: "She said it quite calmly, looking at her own open wrist under the lamp with the same interest she gave the waves and the tomatoes and the sunsets, and Solar held the lamp very still, and the heater ticked, and something went cold and fixed under her ribs without telling her what it was for." },
      { s: 'aigis', f: 'neutral', t: "This is why. You asked, in June. I said I would tell you." },
      { s: 'aigis', f: 'neutral', t: "Everything else in me was made to last. A very long time. Longer than people, you said, on the beach. I would be here after. I told you I did not want to be after. I wanted to find a way to be during." },
      { s: 'aigis', f: 'happy', t: "This is during. One thing in me has a date. People have dates. Now I do. I have a number of days, and they are going by, the way everybody's are, and I can hear them going by every time I close my hand." },
      { s: 'aigis', f: 'neutral', t: "If it were repaired I would only be after again." },
      { choose: [
        { t: "(Hold the lamp still. Let her close it herself.)", notes: 3, flag: 'eqx-aigis-wear', then: [
          { n: "She didn't say anything. She held the lamp. Aigis looked at her for a moment over the open wrist, and then fitted the plate back with her thumb and put the four screws in, one by one, in the order she'd taken them out, and turned each of them the same small amount and no further." },
          { s: 'aigis', f: 'neutral', t: "...Thank you. Everyone else who has seen inside me wanted to do something to it." }
        ] },
        { t: "Let them mend it. I'd rather you were after.", notes: 2, flag: 'eqx-aigis-mend', then: [
          { n: "Aigis went still. Not the good stillness. The other one, from the bottom of the hill under the lamp, when she'd heard herself say *can't*." },
          { s: 'aigis', f: 'neutral', t: "...You would rather I was after." },
          { s: 'aigis', f: 'neutral', t: "That is the first time anyone has said it to me as if it were a kindness. I believe it was one. I will think about it. I will think about it for at least four hundred and nine days." },
          { n: "She put the plate back. She didn't use the screwdriver for the last screw; she turned it with her thumbnail, very carefully, and then sat looking at the closed wrist, and closed her hand, and the page turned, and she listened to it all the way to the end." }
        ] },
        { t: "Four hundred and nine's a lot of days.", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "It is not a lot. It is four hundred and nine." },
          { s: 'aigis', f: 'happy', t: "That was a callback. To myself. I have started doing it. Junpei-san says it is the first sign." },
          { n: "She closed the plate and put the screws back in, and Solar watched her do it, and didn't ask the first sign of what." }
        ] }
      ] },
      { n: "She put the screwdriver away. Then she opened the frog notebook on the desk under the lamp, to a page near the back, and turned it round for Solar." },
      { n: "Two columns. She'd ruled them with the edge of something straight. On the left, in her square hand, under STARTED: *Tomatoes, 6/9. Cicadas, 7/9. The wrist, 6/9. The lanterns, 8/16. The cold, 10/3.* On the right, under STOPPED, a shorter list. *The rain, 7/18. Cicadas, 8/31. Nozomi-san, 7/27.*" },
      { ifFlag: 'dead.shinjiro', then: [
        { n: "*Shinjiro-san, 10/23.* The letters were the same size as all the others. Exactly the same. Solar could see how hard she'd worked at that." }
      ] },
      { n: "And at the bottom of the right-hand column, a line on its own, ruled ahead of time, with the date left blank: *The wrist (409).*" },
      { s: 'aigis', f: 'neutral', t: "I did not write the date. I worked it out. It falls in a year that is not this one. I did not want to write a date in a year that is not this one. It seemed like asking for something." },
      { n: "She closed the notebook." },
      { s: 'aigis', f: 'neutral', t: "Hyein-san." },
      { n: "It was how she changed the subject now, Solar had noticed. Not *I have news for the census*. Just the name, set down on the table between them, like a cup." },
      { ifRank: { hyein: 5 }, then: [
        { s: 'aigis', f: 'happy', t: "She went the long way round the shrine with you. I counted. Her heart is slower on the way back than on the way there. Every time. That is the only road in this town that does that to anyone." },
        { s: 'aigis', f: 'neutral', t: "Thank you. I asked you for that in June as if it were a small thing. It was not a small thing. I am still the third check. I find I do not mind being the third check, now that there is a first." }
      ], else: [
        { s: 'aigis', f: 'neutral', t: "She still checks the latch twice. I still check it a third time. She has still not told anyone about it out loud. I have listened. She tells the latch." },
        { s: 'aigis', f: 'serious', t: "I would like it to be you she tells. Soon. I do not know why I want it to be soon. I have looked for the reason and there is no reading for it. It is only that I keep thinking *soon*, every time I pass her door, and I have never thought a word like that about a door before." },
        { ifRank: { hanni: 5 }, then: [
          { s: 'aigis', f: 'neutral', t: "Hanni-san sleeps across it on the outside. She has started actually sleeping. She tells me it is because of you. I believe her. That is one side of the door." }
        ] }
      ] },
      { ifRank: { hyein: 3 }, then: [
        { n: "The ribbon was in her hair. Hyein's, the white one, pressed. Solar looked at the bow, and Aigis saw her look, and put her left hand up to it without thinking, the gesture she'd taken from Hyein in May, and the page turned in her wrist as her fingers closed on it, quietly, once." }
      ] },
      { ifEvent: 'eqx-fathers-moved', then: [
        { s: 'aigis', f: 'neutral', t: "The fathers are on the third floor now. I can count them. I am very glad that I can count them. Mr. Kim's heart is the slowest of the three and he is the one who does not sleep. I have not told anyone that. I have decided some numbers belong to the person." }
      ] },
      { ifEvent: 'eqx-1122', then: [
        { s: 'aigis', f: 'neutral', t: "And the mothers. Three new hearts in the building, uneven, weak, getting stronger. I count them first now. Before Mitsuru-san. Before the dog. I have been told that is not the correct order. I have decided it is." }
      ] },
      { place: 'Iwatodai Dorm · Landing', time: 'Late Night', bg: 'iwatodaidorm-stairs-night', soft: true },
      { n: "At eleven fifty-eight the notebook was on the landing windowsill, where she'd said it would be, squared to the edge, under the cold glass. Solar picked it up and opened it, as she'd promised to, and read the night's page by the light from the stairwell: the names, the numbers, the house going round its numbers like a clock." },
      { n: "At the bottom, under the last name, in the square hand, there was a line she hadn't seen there before. Small. Not a reading." },
      { n: "*Solar read this. 23:59.*" },
      { n: "Written already. Ahead of time, the way the blank line for the wrist had been ruled ahead of time, by somebody who'd been very sure she would come. Solar stood on the landing with the notebook open in her hands and the red coming up the stairwell from the river, the hum starting in the soles of her feet, and couldn't think why it should make her want to sit down on the stairs and not get up; and on the roof above her, through the ceiling, faint and level, she heard Aigis begin to count." }
    ] },
    // Rank 8 (Nov 16): in two places. Plays from 11/9 (always after 10/23 and 11/6; before 11/22 on a save where she can die,
    // after it only if she lived: eqx-1122 / eqx-aigis-lived branches). Solar keeps the census with her, in her own hand.
    // Hints, unmarked: every version of the fifth thing is put off to the spring; "asked first" (her 11/22 line to Hyein); the
    // ribbon; Solar counts her. Choice flags eqx-aigis-asked-first / eqx-aigis-let-her / eqx-aigis-with-me; cosmetic
    // eqx-aigis-counted. Nothing reads them.
    { after: '11/9', title: '8: in two places', place: 'Iwatodai Dorm · Rooftop', time: 'Evening', music: 'tender', scene: [
      { bg: 'iwatodaidorm-roof-night' },
      { n: "The first frost had come on a Sunday, and come again on the Monday, and again, and by the second week of November it had stopped being news. The roof in the evenings was white at the edges where the low wall kept the sun off, a fine dry fur of white along the foot of the concrete that crunched when you stepped in it and didn't melt. It was dark by five. By six the town below was all lights, and the cold had a smell, iron and smoke and the sea, and Solar's breath went out in front of her and hung there like something she'd said and couldn't take back." },
      { n: "Aigis was by the water tank, out of the wind, with a folded blanket over one arm and a thermos in her other hand." },
      { s: 'aigis', f: 'neutral', t: "Good evening, Solar. I am told you feel the cold. I do not. I have been told that is not a reason not to bring a blanket. I have brought a blanket." },
      { n: "It was the yellow one off the lounge couch, the one that smelled of everybody. Solar put it round her shoulders and sat on the low wall, and Aigis sat beside her, which she did now, and unscrewed the thermos with great care, and poured, the steam going up off the cup into the dark." },
      { ifFlag: 'dead.shinjiro', then: [
        { s: 'aigis', f: 'neutral', t: "Cocoa. Yukari-san made it. She stood over me while I carried it up. She said if it was cold when you got it she would know." },
        { n: "There were two cups. Aigis filled one and gave it to Solar and then sat holding the other, empty, in her lap, both hands round it, and didn't say why, and Solar didn't ask. It was the mug from the dorm kitchen with the chip in the rim. It had hung on the hook by the stove all year. Nobody had used it since October." }
      ], else: [
        { s: 'aigis', f: 'neutral', t: "Cocoa. I have been asked to say Yukari-san made it." },
        { n: "It was very good. Too good for Yukari, who burned milk on principle. Aigis watched her taste it." },
        { s: 'aigis', f: 'neutral', t: "Shinjiro-san made it. I am telling you because it is yours. He stood at the stove with his chest taped and stirred it for nine minutes. His heart was sixty the whole time. That is the slowest I have heard it all year." }
      ] },
      { s: 'aigis', f: 'neutral', t: "I have a list for tonight. It is short. Two things. I wrote it on the back of the laminated one, in pencil, which comes off. I have learned that pencil comes off. I like that about it." },
      { s: 'aigis', f: 'neutral', t: "The first thing is the fifth thing." },
      { ifFlag: 'eqx-aigis-float', then: [
        { s: 'aigis', f: 'neutral', t: "I would like to float again. I measured the sea on Sunday with Akihiko-san's thermometer. Fourteen degrees. You would be cold. I would not be, but you would, and I cannot float alone. That is part of how it is impossible." },
        { s: 'aigis', f: 'happy', t: "So I have put it in the spring. When the sea is warm. I have written it on the list. *Float. In the spring.* I have never written anything on the list that was so far away. It feels like holding something out at arm's length to look at it." }
      ] },
      { ifFlag: 'eqx-aigis-useless', then: [
        { s: 'aigis', f: 'neutral', t: "Fuuka-san has given me a pot. In it there is a bulb. She says it is a tulip. It looks like an onion. She says it will sleep under the soil all winter and come up in March, and I am not to dig it up to check on it, and I am not to count it." },
        { s: 'aigis', f: 'happy', t: "It is a very good useless thing. It is changing where I cannot see. I only have to wait. I have put it on the list. *Tulip. March.* I have never written anything on the list that was so far away." }
      ] },
      { ifFlag: 'eqx-aigis-space', then: [
        { s: 'aigis', f: 'neutral', t: "The space. I have decided what goes in it. I decided on the beach in August, I think, and then I did not tell anyone, including myself." },
        { s: 'aigis', f: 'neutral', t: "I would like to be the kind of thing people wait for at the edge. Not the thing that comes back up. The thing somebody stands at the water and waits for, and knows they are waiting for." },
        { s: 'aigis', f: 'happy', t: "I do not know how to do it. I have put it on the list anyway, with no date. *Be waited for.* I am told there are things on people's lists that never get a date. I did not believe it. I believe it now." }
      ] },
      { ifCount: { of: ['eqx-aigis-float', 'eqx-aigis-useless', 'eqx-aigis-space'], max: 0 }, then: [
        { s: 'aigis', f: 'neutral', t: "I never filled it. I asked you before the rain, in June, and then the summer happened, and the space stayed a space. I have decided to leave it until the spring. I have written that on the list. *The fifth thing: spring.* It is the first time I have put something off on purpose." }
      ] },
      { choose: [
        { t: "I'll be there. In the spring.", notes: 3, then: [
          { s: 'aigis', f: 'neutral', t: "Yes. I have already written that you will be. I wrote it in pencil, so that you could rub it out." },
          { s: 'aigis', f: 'happy', t: "You have not rubbed it out. I checked." }
        ] },
        { t: "Spring's a long way off.", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "Four months. Something over a hundred days, depending on which day you count as spring. I am told there is disagreement." },
          { s: 'aigis', f: 'neutral', t: "...It is not a long way off. It is a number. I am trying to learn to say that things are a long way off. Junpei-san says it is how people ask for something without asking." }
        ] },
        { t: "(Drink the cocoa. Let her keep it on the list.)", notes: 2, then: [
          { n: "She drank. It was hot enough to hurt the roof of her mouth and she let it. Aigis watched the steam go up between them for a while and didn't say anything, which was its own sort of approval." }
        ] }
      ] },
      { s: 'aigis', f: 'neutral', t: "The second thing." },
      { n: "She took the frog notebook out of her blazer. The cover was soft as cloth now, curled at the corners from seven months in her pocket, and there was a pencil clipped to the spine that hadn't been there before, a short yellow one, sharpened with a knife." },
      { s: 'aigis', f: 'neutral', t: "You have read the file every night for six weeks. I check the sill at the end of every hour. It has been moved every time. One night you put it back upside down. I did not mention it. I am mentioning it now because it is the only time." },
      { s: 'aigis', f: 'neutral', t: "Reading it is in two places. Half. I would like the other half. I would like you to count, tonight, with me. And write it down. In your hand, not mine." },
      { s: 'aigis', f: 'neutral', t: "So that one page of it is in a hand that is not mine. So that if anybody ever needed to find it, there would be a page they could read without having to learn how I make my sevens." },
      { n: "She held the notebook out with her left hand, the plain way, flat, and the page turned in her wrist as her fingers took the weight, and she didn't hide it." },
      { choose: [
        { t: "(Take the notebook and the pencil.)", notes: 3, then: [
          { n: "Solar took it. It was warm, which surprised her, until she remembered the heater in the corner room and understood that it had been lying beside the heater, deliberately, so it would be warm when she took it." }
        ] },
        { t: "I can't hear hearts, Aigis.", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "No. You will hear doors. I will tell you the numbers. You will know which doors they belong to. That is the part I was never sure I was doing right." },
          { n: "She put the notebook in Solar's hands, and closed Solar's fingers round it with her own, cool and heavy, and let go." }
        ] }
      ] },

      { place: 'Iwatodai Dorm · Stairs', time: 'Late Night', bg: 'iwatodaidorm-stairs-night', soft: true },
      { n: "At eleven fifty-seven they went down. Aigis first, the way she always went first, and Solar behind her with the notebook open on her forearm and the yellow pencil, and the dorm asleep round them, or pretending, the radiators ticking and somebody's alarm clock glowing green through the gap under a door and the smell of the cocoa still on the landing." },
      { n: "They started at the top. They stopped at every door. Aigis tipped her head, the small soft click, and said a number under her breath, and Solar wrote it beside the name in her own round hand, and it took a long time, much longer than it ever took Aigis alone, and Aigis didn't once try to hurry it." },
      { ifEvent: 'eqx-1122', then: [
        { n: "Six parents on the third floor now. Three doors. Aigis stopped longest outside the mothers' rooms, and the numbers she gave there were uneven, fast and then slow and then fast again, and she gave them very gently, as though the numbers might hear." }
      ], else: [
        { n: "Three fathers on the third floor. Three doors, three numbers, all of them fast. Mr. Kim's door was open an inch and his light was on. Aigis gave his number, and waited, and gave it again, slower, as if she'd been mistaken the first time and wanted to be fair to him." }
      ] },
      { ifFlag: 'dead.shinjiro', then: [
        { n: "On the second floor there was a door they didn't stop at. Aigis walked past it at exactly the same pace as all the others. Then, three steps on, she stopped, and stood with her back to it; and Solar wrote nothing, and then, after a moment, drew a line in the notebook, a short straight one, the width of a name. Aigis looked at it over her shoulder and nodded, once." }
      ], else: [
        { n: "On the second floor Shinjiro's door was shut and a radio was going behind it, very low, a ball game from somewhere it was still afternoon. *Fifty-six. Asleep with it on.* Solar wrote it down and underlined it, and didn't know why, and Aigis didn't ask." }
      ] },
      { n: "Junpei, his radio on too, a different station. Akihiko, fast even in his sleep. Mitsuru, slow and exact, a metronome. Koromaru, at the foot of the stairs, across the front door, ninety, who lifted his head when they came down and looked at the two of them and put it back on his paws." },
      { n: "And Hyein's door." },
      { n: "Aigis stopped there. Hanni was asleep across the outside of it, in the hall, on her side in a nest of two blankets with one arm over her eyes. There was a strip of light under the door." },
      { s: 'aigis', f: 'neutral', t: "Hanni-san, fifty-four, asleep. Hyein-san, sixty-eight. Awake." },
      { n: "She said it under her breath. Solar wrote it down. Then Aigis didn't move on. She stood looking at the strip of light, hands folded, head tipped, and Solar could see the bow at the back of her hair, lit from under the door." },
      { ifRank: { hyein: 3 }, then: [
        { n: "Hyein's ribbon. White. Retied that morning, Solar could tell; the loops were even and exact the way only Hyein made them. She'd taken to retying it every morning at breakfast, Aigis standing perfectly still by the table while she did it, both of them pretending it was nothing." }
      ] },
      { s: 'aigis', f: 'neutral', t: "Solar. A question. It is not on the list. It came up here." },
      { s: 'aigis', f: 'neutral', t: "If I ever go into something. A door. Water. Somewhere without air, somewhere only I could go. Would you like me to ask you first? Or would you like to be the one who lets me?" },
      { n: "She asked it very quietly, to the strip of light under the door, not to Solar; and in the room behind it someone turned over, and then was still." },
      { choose: [
        { t: "Ask me first. The way you wanted to be asked.", notes: 3, flag: 'eqx-aigis-asked-first', then: [
          { s: 'aigis', f: 'neutral', t: "...Yes. That is fair. That is the fourth thing on my list, the other way round, again. The margin is full. I will write it on the inside of the cover." },
          { s: 'aigis', f: 'neutral', t: "I will ask first. If there is time to ask. I would like you to know that I would like there to be time." }
        ] },
        { t: "If it's yours to go into, it's yours. I'll let you.", notes: 3, flag: 'eqx-aigis-let-her', then: [
          { n: "Aigis turned her head. Away from the door, to Solar. The click, very soft." },
          { s: 'aigis', f: 'neutral', t: "...Thank you. Everyone else who has ever let me go somewhere was sending me." },
          { s: 'aigis', f: 'happy', t: "I would still come back up. I would like that on file. I am very heavy and very patient." }
        ] },
        { t: "Don't go anywhere I can't come.", notes: 2, flag: 'eqx-aigis-with-me', then: [
          { s: 'aigis', f: 'neutral', t: "You can come almost anywhere. You have shown me that. You came to the bottom of a well." },
          { s: 'aigis', f: 'sad', t: "There are a few places you cannot. Places without air. I will try not to go to those. I am telling you that I will try. I am not telling you that I can. I have learned the difference this autumn." }
        ] }
      ] },
      { ifFlag: 'eqx-aigis-lived', then: [
        { s: 'aigis', f: 'happy', t: "...I have been asked once already. At the Tree, after. Whether I would like to be there. I said yes. It is on the inside cover. I read it most nights, after the census." }
      ] },
      { n: "They went down. The front hall. The latch. Hyein had checked it twice before bed, and Aigis checked it a third time, and this time, for the first time, Solar watched her do it: the bare left hand on the cold brass, the page turning once as it closed, once as it let go." },

      { place: 'Iwatodai Dorm · Stairs', time: 'The Red Hour', bg: 'iwatodaidorm-stairs-night', soft: true },
      { n: "At midnight the town went red." },
      { n: "It came up the stairwell from the front door like water coming up a pipe, the whole house going out in one long breath; the clocks stopped and the radiators stopped and Junpei's radio stopped mid-word; and the hum came up through the boards, and the people in their beds were in their coffins, and the red light lay down the stairs like something spilled." },
      { n: "They sat on the top step, the two of them, with the notebook between them, and counted it again. Every name. In the red. Aigis said the numbers and Solar said the names and wrote them, and the pencil scratched in the silence, the only sound in the house besides the hum; and at the end she had a page in her own round hand, the dorm door by door, the whole house written down, and her fingers were stiff with the cold and the red." },
      { n: "She looked at it. Then, at the bottom, under *Koromaru, 90*, she wrote one more line. Without asking. Without deciding to." },
      { n: "*Aigis.*" },
      { s: 'aigis', f: 'surprised', t: "...I have no number." },
      { s: 'solar', f: 'neutral', t: "You're on the list." },
      // CG: eqx-aigis-count — two girls sitting close on the top step of a dormitory staircase in deep red light, one writing in a small soft-covered notebook with a short yellow pencil, the other, blonde and straight-backed with a white ribbon in her hair, looking down at the page.
      { n: "Aigis looked at the name for a long time. In the red her face did nothing at all, and her eyes refocused on it, once, the small soft click, and refocused again, as if it were very small print." },
      { choose: [
        { t: "(Leave the space beside her name empty.)", notes: 3, flag: 'eqx-aigis-counted', then: [
          { n: "She didn't write anything beside it. She left the place where the number would go, empty, and Aigis looked at the space, and then at her." },
          { s: 'aigis', f: 'happy', t: "...A column I cannot fill, that somebody else started. That is a different thing from the space I left in June. I like this one." }
        ] },
        { t: "(Write: here.)", notes: 3, flag: 'eqx-aigis-counted', then: [
          { n: "Beside the name, where the number would go, she wrote *here*." },
          { s: 'aigis', f: 'neutral', t: "That is not a reading." },
          { s: 'solar', f: 'neutral', t: "It's mine." },
          { s: 'aigis', f: 'happy', t: "...Then it is in two places." }
        ] }
      ] },
      { ifBefore: '11/22', then: [
        { s: 'aigis', f: 'neutral', t: "The moon is full on the twenty-second. I will be in Hyein-san's building that night. I am always in Hyein-san's building. I am telling you so that it is in two places as well." }
      ] },
      { n: "The red went out of the house at the end of the hour the way it always went, all at once, the clocks starting mid-tick, the radiators knocking, Junpei's radio coming back halfway through a song, the cold back in the stairwell, someone turning over behind Hyein's door. Aigis stood. She held out her hand for the notebook, and Solar gave it to her, and she closed it on the pencil and put it in her blazer pocket, on the left side, where on anyone else the heart would be, and pressed it flat there, once." },
      { s: 'aigis', f: 'neutral', t: "The figures matched. All of them, and the dog. And one that is not a figure." },
      { s: 'aigis', f: 'neutral', t: "I would like to report it again tomorrow. I would like to report it again for a very long time. I am told that is a thing people say to each other on stairs. I have never had anyone to say it to." },
      { n: "She went up. Solar sat on the step a while longer in the ticking dark with her cold fingers in the yellow blanket and the shape of the pencil still pressed into them, and listened to the footsteps go up to the corner room at the end of the third floor, light, even, exactly the same distance apart; and stop; and, faint through the ceiling, the page turn, once, as a hand closed on a door handle, and once more as it let go." }
    ] }
  ]
});
