/* Persona 3: Equinox · Aigis · Aeon. Link data (femc-equinox-game.html). Format: link fields in assets/femc/game/core.js
   ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1–2 (from 4/13; her home is the dorm roof on Sunday, Tuesday, Thursday and Saturday evenings). Ranks 3–10
   still to write. Shape: the stub fields from assets/femc/equinox/data/links.js (this file wins over the stub).
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
    ] }
  ]
});
