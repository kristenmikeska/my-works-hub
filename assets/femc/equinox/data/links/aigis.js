/* Persona 3: Equinox · Aigis · Aeon. Link data (femc-equinox-game.html). Format: link fields in assets/femc/game/core.js
   ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: rank 1 only (from 4/13; her home is the dorm roof on Sunday, Tuesday, Thursday and Saturday evenings). Ranks 2–10
   still to write. Shape: the stub fields from assets/femc/equinox/data/links.js (this file wins over the stub).
   Solstice's ranks are shared memory here (the roof at sunset, "I have been looking for someone", the butterfly, the third
   item on her list, "Solar" without the honorific); nothing reads Solstice link standing.
   Writers: her readings are a clue source. Rank 1 logs one reading from the 4/12 knocks, unassigned on purpose; keep it
   unassigned until her first scan of the person it belongs to matches it.
   Flags this file sets: eqx-aigis-log (rank 1: Solar asks to be told every reading). Nothing reads it yet. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'aigis', name: 'Aigis', short: 'Aigis', arcana: 'Aeon', numeral: '', from: 'Persona 3', kind: 'sees',
  romance: null, starts: '4/8', lodging: 'dorm',
  home: { area: 'dorm', spot: 'Rooftop', slot: 'evening', days: [0, 2, 4, 6],
          hint: 'Evenings on Sunday, Tuesday, Thursday and Saturday, on the dorm roof.' },
  approach: "Up on the dorm roof, against the last of the light, a girl in a school uniform is standing perfectly still at the rail with her back very straight, and she has been standing exactly like that, you suspect, since four.",
  cast: {},
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
    ] }
  ]
});
