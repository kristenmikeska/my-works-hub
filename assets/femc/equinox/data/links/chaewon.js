/* Persona 3: Equinox · Kim Chaewon · VII The Chariot. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: rank 1 (after 6/27: she came through on 6/26 in the red, story-act2 'eqx-stage'; her home is Club Escapade on
   Wednesday, Friday and Saturday evenings, so 6/30 at the earliest). Ranks 2–10 still to write. Shape: the stub fields from
   assets/femc/equinox/data/links.js (this file wins over the stub).
   Shared memory: the strangers epilogue (Yunjin's Songdo studio friends, the Daeboreum committee, "for margin"); the 6/26
   atrium and the boarding house at five in the morning. She carries all three of her lives at once; the link never says what
   she is at home in the Runners or HOAX worlds beyond "a stranger to the others" (keep it that way).
   The hook: she's the one who counts. Here all five of them are under one roof for the first time in any life.
   Reads: ifEvent eqx-hunted (7/27 night: the girls moved into one room with the light on) for one line.
   Flags this file sets: eqx-chaewon-count (Solar counts the room with her). Nothing reads it yet. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'chaewon', name: 'Kim Chaewon', short: 'Chaewon', arcana: 'Chariot', numeral: 'VII', from: 'Runners · strangers · Hoax', kind: 'arrival',
  world: 'RSH', romance: null, arrives: '6/26', starts: '6/27', lodging: 'boarding',
  home: { area: 'mall', spot: 'Club Escapade', slot: 'evening', days: [3, 5, 6],
          hint: 'Wednesday, Friday and Saturday evenings, at Club Escapade, counting everybody in.' },
  approach: "At the velvet rope outside Club Escapade a girl in a borrowed staff lanyard is standing very straight with a metal hand counter in her fist, clicking once for every person who goes in, her lips moving, and she doesn't look up until the number comes out right.",
  ranks: [
    { after: '6/27', title: '1: headcount', place: 'Paulownia Mall · Club Escapade', time: 'Evening', music: 'city', scene: [
      { bg: 'clubescapade-outside' },
      // BG: clubescapade-door-summer — the side entrance of a nightclub inside a shopping mall on a humid summer evening, a velvet rope on brass posts, a bored doorman on a stool, purple light spilling from the doorway onto tiled floor.
      { n: "Club Escapade didn't open its doors until eight, and even then it opened them the way a cat opens its eyes, slowly, without interest, a slice of purple light and a bass line you felt in your back teeth before you heard it. By half past, on a Friday in summer, the line ran past the shuttered flower shop and round the corner toward the fountain, office workers with their ties in their pockets and girls from the university with their heels in their hands, all of them sticky with the kind of heat that came off the bay at night and sat on the mall like a lid." },
      { n: "At the rope, beside the doorman, there was a girl Solar had last seen sitting in a pile on the atrium floor in the red." },
      { n: "Chaewon had a staff lanyard round her neck that said TEMP in marker and a metal hand counter in her right fist, the old kind, chrome, with a little wheel of numbers in a window, and every time somebody stepped past the rope she pressed it, *click*, and her lips moved, and her eyes went to the doorway and back as if she were checking the person had really gone through it. The doorman, a huge man with a tiny ponytail, was eating a rice ball and letting her do it. He looked like he'd tried to stop her once and decided against it." },
      { s: 'chaewon', f: 'neutral', t: "Three hundred and twelve. Hi. Hold on. Three thirteen." },
      { s: 'chaewon', f: 'neutral', t: "...Okay. Hi. Solar. Solar-ssi? Solar. I don't know what I call you. In one of them I call you *unnie* and you're younger than me. It's a whole thing." },
      { choose: [
        { t: "Solar's fine. In all of them.", notes: 3, then: [
          { s: 'chaewon', f: 'happy', t: "Solar. Good. One rule for all three. I like a rule that works three times." }
        ] },
        { t: "You got a job already.", notes: 2, then: [
          { s: 'chaewon', f: 'flustered', t: "I didn't get a job. I asked on Sunday if I could stand here. They said no. I stood here anyway. On Monday he gave me the lanyard." },
          { n: "The doorman, hearing the word *Monday* in the middle of Korean, lifted his rice ball at Solar in a small, defeated salute." }
        ] },
        { t: "(Watch her count the next three.)", notes: 3, then: [
          { n: "Three more. A man in a linen shirt. Two girls holding hands. *Click. Click, click.* Each time her eyes followed them all the way into the purple, past the cloakroom, to the corner where the light swallowed them, and only then came back. It wasn't a job. It was something she needed to see done properly." }
        ] }
      ] },
      { n: "She explained it between clicks, the way someone explains a thing they've already explained to themselves many times in the dark." },
      { s: 'chaewon', f: 'neutral', t: "It's the in and out. I like knowing how many people are in a room. Exactly. Not about. You know when you get to a place and you don't know who's already inside? I hate that. I can't breathe right until I know." },
      { s: 'chaewon', f: 'neutral', t: "In the studio in Songdo I take the register even though nobody asked me to. I write everybody's name on the whiteboard when they come in and rub it off when they go. Yunjin draws faces on hers." },
      { s: 'chaewon', f: 'neutral', t: "And in the other two... I count other things. Chairs. Bus stops. People at a table. I didn't know it was the same habit until the night we came. Until I had all three at once and they were all doing it." },
      { n: "She held up her other hand. In it, folded back on itself, there was a small notebook with a pencil shoved through its spiral, and she opened it to show Solar the night's tally: neat columns of strokes in fives, the time at the top of every column." },
      { n: "The first column was in a round, careful hand, the kind you'd learn copying out characters for a teacher. The second leaned forward in a hurry and looped its sevens. The third was small and square and pressed hard enough to dent the page underneath. All three were hers. You could see it in the way every one of them crossed its fives, the same little hook at the end of the stroke." },
      { s: 'chaewon', f: 'neutral', t: "I don't pick. I just write, and whichever one of me is holding the pencil, that's the hand. It changes in the middle of a number sometimes." },
      // CG: eqx-headcount — a young woman in a temporary staff lanyard at a nightclub's velvet rope at night, a chrome hand counter in one fist and a small open notebook in the other, its page ruled with tally marks in three visibly different handwritings, purple light from the doorway behind her.
      { choose: [
        { t: "Mine does that too. Since April.", notes: 3, then: [
          { n: "Chaewon looked up from the page. For a second she didn't say anything at all, and the counter hung still in her fist, and somebody stepped past the rope without being counted." },
          { s: 'chaewon', f: 'sad', t: "...Oh. Good. Not good. Good that it's not only us." },
          { n: "Then she noticed the person she'd missed, and her whole face changed, and she leaned through the doorway and counted them from behind, *click*, as they went into the purple, and let out a breath." }
        ] },
        { t: "Does it scare you?", notes: 2, then: [
          { s: 'chaewon', f: 'serious', t: "No. Yes. It scares me that it doesn't scare me. It feels normal. It feels like I always had three and somebody only just turned the light on." }
        ] },
        { t: "(Take the pencil. Write a five, the way you write it.)", notes: 3, then: [
          { n: "Solar took the pencil and made a gate of five strokes at the bottom of the third column, without thinking, the way she'd made them in three different classrooms in three different years. Her fifth stroke had a hook at the end. They both looked at it. Chaewon didn't say anything. She shut the notebook very gently, as if it might wake up." }
        ] }
      ] },
      { place: 'Paulownia Mall · Fountain', time: 'Night', bg: 'paulownia-mall-night', music: 'tender', soft: true },
      { n: "At ten the doorman took over and Chaewon gave him back the counter, reluctantly, the way you hand over a baby, and the two of them walked down to the fountain and sat on its rim with two cans of peach soda from the vending machine. The water had been turned off for the night. It sat in the basin flat and black and full of coins." },
      { s: 'chaewon', f: 'neutral', t: "Five. That's the number I like." },
      { s: 'chaewon', f: 'neutral', t: "Kazuha, Sakura, Eunchae, me. And Yunjin. Five. In the boarding house, at breakfast, there are five of us at the end of the table. Every morning. I count it every morning and it's five every time." },
      { s: 'chaewon', f: 'happy', t: "Do you know how many times in my whole life that's happened? Counting all three? It's happened since we came. That's it. That's all the times." },
      { n: "She said it brightly. She was holding the can in both hands, her thumbs running round and round its rim, and Solar knew that brightness, knew it from the inside, the face you put on over a thing so heavy that if you let it show on your face you'd have to sit down." },
      { s: 'chaewon', f: 'neutral', t: "At home, in two of them, I walk past Sakura and don't know her. In one I've never seen Kazuha at all. In one, Eunchae's a girl from a different school. It's only in Songdo we're all in a room. And Songdo isn't..." },
      { n: "She stopped. She didn't finish it. She didn't have to; Solar had been in Songdo, in the winter, and knew what was on the other side of the studio's window at night, and what Yunjin carried home from it, and that Chaewon, as far as anyone in that city ever let her know, knew nothing about any of it at all." },
      { s: 'chaewon', f: 'neutral', t: "Here we're all in one house. All five. No missing. I can count to five without anybody missing." },
      { choose: [
        { t: "It's a good number.", notes: 2, then: [
          { s: 'chaewon', f: 'happy', t: "It's the best number. I'm going to put it on a T-shirt." }
        ] },
        { t: "Even here, people go missing, Chaewon.", notes: 3, then: [
          { n: "She looked at Solar. It wasn't a hurt look. It was a captain's look, the look of someone being told the weather by the only person on deck who could read it." },
          { s: 'chaewon', f: 'serious', t: "...I know. Mitsuru-ssi told us. Doors. The red. Don't open for voices. I wrote it on the inside of all five doors in the house. In marker. Mrs. Oka said she didn't mind." }
        ] },
        { t: "(Clink your can against hers.)", notes: 3, then: [
          { n: "Solar clinked her can against Chaewon's. Chaewon looked surprised, and then clinked back, harder, and then made her clink it again so they'd done it an odd number of times, which she said was better luck, and which she'd clearly just made up." }
        ] }
      ] },
      { n: "They sat. The mall emptied round them. A cleaner went by with a floor machine, humming, and nodded to them, and Chaewon counted him without seeming to know she was doing it, a small movement of her thumb against the side of the can, *one*." },
      { s: 'chaewon', f: 'neutral', t: "Can I tell you a stupid thing? It's stupid. I haven't told the others." },
      { s: 'chaewon', f: 'neutral', t: "At the club. When it closes. At two. Everybody goes out the front and I count them out, backward, from whatever it was, down to nothing, the way you're supposed to. Zero. Everyone's gone. Then the doorman locks up." },
      { s: 'chaewon', f: 'serious', t: "It's never zero. Every night since Monday, I get down to the end and the counter says one. One person still inside." },
      { s: 'chaewon', f: 'neutral', t: "So I go back in. I've gone back in three times. The lights are up, the floor's sticky, it's just a room. The toilets, the cloakroom, the little office. Nobody. One time the cloakroom girl had left a coat on a hanger and I stood and looked at it for a long time because it was the only thing in there and it was something." },
      { s: 'chaewon', f: 'neutral', t: "The doorman thinks I miscount. I don't miscount. I've never miscounted in my life. In any of them." },
      { n: "The water in the fountain lay flat and black. Nothing moved in it. The coins at the bottom lay where they'd been thrown, hundreds of them, the small change of everybody's wishes, and for a moment Solar had the absurd feeling that if she counted them they'd come out one wrong too." },
      { choose: [
        { t: "Next time, I'll come at two. We'll count it together.", notes: 3, flag: 'eqx-chaewon-count', then: [
          { s: 'chaewon', f: 'surprised', t: "...You'd come at two? In the morning?" },
          { s: 'solar', f: 'neutral', t: "Two counters. If we both get one, it's not you." },
          { s: 'chaewon', f: 'happy', t: "And if we both get one?" },
          { s: 'solar', f: 'neutral', t: "Then we leave. Fast. Together." },
          { n: "Chaewon laughed, a short startled laugh, and then stopped laughing and nodded, seriously, as if Solar had told her the procedure for a fire, which was more or less what she'd done." }
        ] },
        { t: "Maybe the counter's broken.", notes: 2, then: [
          { s: 'chaewon', f: 'neutral', t: "I swapped it. He's got two. The other one does it too." },
          { s: 'chaewon', f: 'neutral', t: "...That's not better, is it. I wanted you to say it was broken. You said it. Thank you. It's not broken." }
        ] },
        { t: "Don't go back in. Next time, just leave it at one.", notes: 2, then: [
          { s: 'chaewon', f: 'sad', t: "Leave somebody in a room? Even if there's nobody?" },
          { s: 'solar', f: 'neutral', t: "Especially if there's nobody." },
          { n: "Chaewon thought about it for a long time, frowning, and then wrote it in her notebook, on the back page, under a heading that just said RULES, in the square hard hand. Solar couldn't read the rules above it. There were a lot of them." }
        ] }
      ] },
      { place: 'Iwatodai · River Street', time: 'Night', bg: 'eqx-oka-gate', music: 'eerie' },
      { n: "She walked Chaewon home, because the rule was twos after dark, and because Chaewon, without asking, had already started walking in step with her. Down off the island, over the bridge with every lamp lit, through the quiet streets of Iwatodai where the summer insects were going in the hedges like something being wound up, and down the river street to the boarding house gate." },
      { n: "The lamp in the hall was lit. It was always lit. A tin of rice cakes sat on the step inside the door with its lid off, the way Mrs. Oka left it for anyone coming in late, and the kitchen window was a square of warm yellow with the shape of the landlady moving behind the glass, back and forth, back and forth, in no hurry, as if she'd been doing it for hours." },
      { n: "Chaewon stopped at the gate with her hand on the latch. She looked up at the house. At the four upstairs windows. Solar watched her count them, her lips moving, and then the one at the end where the light was on." },
      { ifEvent: 'eqx-hunted', then: [
        { n: "One window, now. Since the twenty-seventh they slept in one room, all four, futons edge to edge, with the light on and a chair under the door handle, and Yunjin came down from the dorm some nights to make five on the floor. Chaewon looked at the one lit window for a long time. Her thumb moved against her fist, where the counter wasn't." },
        { s: 'chaewon', f: 'neutral', t: "...Four in. Four's the right number. For tonight. I checked." }
      ], else: [
        { s: 'chaewon', f: 'happy', t: "Three in. Plus me. Four. Plus Yunjin up the hill. Five." },
        { s: 'chaewon', f: 'neutral', t: "...She left the gate open again. She always leaves it open for us. Isn't that nice. Like we're always expected." }
      ] },
      { n: "She went in. She shut the gate behind her and dropped the latch, which Mrs. Oka never did, and stood on the far side of it for a second with her hand flat on the wood." },
      { n: "Then the kitchen door opened, and the landlady's voice came out into the hall, warm, glad, calling her *child*, asking had she eaten, and Chaewon called back *yes, Oka-san, I'm home*, the way you'd answer your own mother, and went up the path toward the light, and Solar, standing in the dark on the other side of the gate, heard the spare hand counter in her pocket, the second one, the one she'd forgotten to give back, go *click*, once, all on its own." }
    ] }
  ]
});
