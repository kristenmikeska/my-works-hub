/* Persona 3: Equinox · Kim Chaewon · VII The Chariot. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1–3. Rank 1 (after 6/27: she came through on 6/26 in the red, story-act2 'eqx-stage'; her home is Club
   Escapade on Wednesday, Friday and Saturday evenings, so 6/30 at the earliest). Rank 2 'closing time' (after 8/7, summer
   break: Club Escapade from ten, the DJ booth through the red hour (the coffins counted: one fewer than went in), the 2 a.m.
   count out, the konbini step by Port Island Station till the first train, the boarding house gate at five; reads
   eqx-chaewon-count for its opening and the leave-fast beat). Rank 3 'zero' (after 10/1, always after the equinox: the empty
   club at six before opening, the three, the four footsteps in the kitchen, the sixth-place tape, her ask, the first ten
   counted in, Hanni at the escalator; reads dead.shinjiro, eqx-persimmon (past tense: the girls have left the house),
   eqx-fathers-moved, eqx-culture-stage). Ranks 4–10 still to write. Shape: the stub fields from
   assets/femc/equinox/data/links.js (this file wins over the stub).
   Shared memory: the strangers epilogue (Yunjin's Songdo studio friends, the Daeboreum committee, "for margin"); the 6/26
   atrium and the boarding house at five in the morning. She carries all three of her lives at once; the link never says what
   she is at home in the Runners or HOAX worlds beyond "a stranger to the others" (keep it that way).
   The hook: she's the one who counts. Here all five of them are under one roof for the first time in any life.
   Reads: ifEvent eqx-hunted (7/27 night: the girls moved into one room with the light on) for one line.
   Flags this file sets: eqx-chaewon-count (rank 1: Solar counts the room with her; read by rank 2).
   Rank 2: eqx-chaewon-rule-wait | eqx-chaewon-rule-twos | eqx-chaewon-rule-counted (the rule Solar writes in RULES; cosmetic).
   Rank 3 records her ask ("stay together", her version: rule one at the top of RULES): tally asks.chaewon yes / no / choose
   (+ cakes / choose / asked), flag eqx-asked-chaewon (hidden "Stay. Please.", asked +1). Nothing reads the new ones yet.
   For later ranks: the one always still inside (rank 2: one fewer in the red than went in, every night); the rest-stop day
   at nine, the same in all three lives; RULES and rule one (yes: written; choose: the top left empty, pencil behind her ear);
   the bag she packs and unpacks; the four footsteps; "you're one I always get right" (the keep-her-alive hint). */
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
    ] },
    { after: '8/7', title: '2: closing time', place: 'Paulownia Mall · Club Escapade', time: 'Evening', music: 'city', scene: [
      { bg: 'clubescapade-outside' },
      { ifFlag: 'eqx-chaewon-count', then: [
        { n: "She'd said two, so she came at ten, because you didn't turn up at the end of somebody's count without having seen the start of it, and because Hanni had needed four hours of warning and a signed note on the rota before she'd let *S* go out after dark with nobody's initial beside it but a girl from the boarding house." },
        { n: "Chaewon was at the rope. She saw Solar coming up from the fountain and her thumb stopped on the counter, and her whole face went very still and very bright, the face of somebody who'd been told a thing would happen and hadn't let herself write it down in case it didn't." },
        { s: 'chaewon', f: 'happy', t: "You came. You said two and you came at ten. That's— okay. That's eight hundred percent more than I asked." }
      ], else: [
        { phone: [
          { from: 'chaewon', t: "this is chaewon. i got your number off hanni-ssi's rota. sorry. it's on the corkboard. that's practically public" },
          { from: 'chaewon', t: "you don't have to. it's stupid. but if you're up at two any night this week i'm still getting one" },
          { from: 'chaewon', t: "every night. one. i wrote it down every night. it's still one" }
        ], contact: 'chaewon' },
        { n: "So she came at ten, because you didn't turn up at the end of somebody's count without having seen the start of it, and because Hanni had needed four hours of warning and a signed note on the rota before she'd let *S* go out after dark with nobody's initial beside it but a girl from the boarding house." },
        { s: 'chaewon', f: 'surprised', t: "...You came. I said it was stupid. I said it twice." }
      ] },
      { n: "A night in August, and the heat hadn't gone down with the sun. It lay on the mall like a wet towel. The line ran past the fountain tonight, and everybody in it was fanning themselves with whatever they had, flyers, tickets, a paper menu from the ramen place, and the purple light from the doorway came out over all of them and made their skin look like something seen through water." },
      { n: "The doorman with the tiny ponytail looked at Solar, and then at Chaewon, and then reached into the pocket of his black jacket without a word and took out the second counter and held it out, the way you'd hand a kid a flashlight on a camping trip, already resigned to the batteries." },
      { s: 'chaewon', f: 'serious', t: "Okay. Rules. You click on the sill, not on the step. The step's a lie. People stop on the step and go back for their friend. The sill is when they're in." },
      { s: 'chaewon', f: 'neutral', t: "Groups, you click as they go, not after. Don't try and count a group from behind. You'll get the tall one twice. Couples who hold hands are two. Obviously. People always want to count them as one. They're two." },
      { choose: [
        { t: "(Click on the sill. Exactly on the sill.)", notes: 3, then: [
          { n: "She clicked on the sill. A boy in a soaked T-shirt, then his friend, then a girl with a paper fan. *Click. Click. Click.* The metal was warm from the doorman's pocket and the little wheel turned over under her thumb with a feeling like a lock giving. Chaewon watched her do three and then stopped watching, which Solar understood, after a second, was the highest thing she had to give." }
        ] },
        { t: "Couples who hold hands are two. Got it.", notes: 2, then: [
          { s: 'chaewon', f: 'neutral', t: "Say it like you mean it. Everybody says *got it*. Then a couple comes and they count it as one because it's cute." },
          { n: "A couple came. They were holding hands. They were, honestly, very cute. Solar clicked twice, carefully, and Chaewon nodded once without looking round, like a coach on a sideline." }
        ] },
        { t: "Who taught you all this?", notes: 2, then: [
          { s: 'chaewon', f: 'neutral', t: "Nobody. I made it up. Three times. And they all came out the same." }
        ] }
      ] },
      { n: "They counted the whole line in. It took until half past eleven. Two hundred and six by Solar's counter. Two hundred and six by Chaewon's. Chaewon held hers up next to Solar's in the purple light so the little windows were side by side, the same number in both, and let out a breath that seemed to come up from her shoes, and wrote it in the notebook in the round careful hand, *206*, and boxed it." },
      { s: 'chaewon', f: 'happy', t: "Same number. You see? You see what that's like? Two people. Same number. I've never had that." },
      { n: "Then she looked at her watch, and the brightness went out of her the way a tide goes out, not all at once, but so you notice it's already gone." },
      { s: 'chaewon', f: 'neutral', t: "...Okay. It's twenty to. Come inside. I'm going to show you the part I didn't tell you." },

      { place: 'Paulownia Mall · Club Escapade', time: 'The Red Hour', bg: 'clubescapade', music: 'eerie' },
      // BG: clubescapade-red — the inside of a small nightclub frozen in the Dark Hour, the dance floor full of upright black coffins all turned the same way, a DJ booth above it, every light dead and the room lit only by a deep red glow through the high windows.
      { n: "The DJ booth was up a short iron ladder at the back, a box of black-painted plywood with stickers all over the front of it and a little window onto the floor. The DJ had gone for a cigarette and left a long track playing. Chaewon climbed up like she owned it and sat on an upturned crate in the corner with her knees up and her notebook on them, and Solar climbed up after her and sat on the floor, and below them two hundred and six people danced in a fog of dry ice and sweat to a song with no words in it, and the bass came up through the plywood into the bones of Solar's legs." },
      { s: 'chaewon', f: 'neutral', t: "I do this every night. I come up here at quarter to. He lets me. He thinks I'm checking the fire exits." },
      { n: "At twelve the music stopped." },
      { dark: true },
      { n: "Not faded. Stopped. In the middle of a bar, with the bass halfway down, and the lights went at the same time, every one, the strobes and the purple and the little green exit signs over the doors, and for one second there was nothing at all, no sound, no light, only the heat and the smell of two hundred people; and then the red came up through the high windows along the back wall like something filling a glass." },
      { n: "On the dance floor there were no people." },
      { n: "There were coffins. Tall and black and close-packed, standing on their ends where the dancers had stood, two hundred of them and more, packed shoulder to shoulder the way the bodies had been, filling the floor from the bar to the stage. Not one of them moved. And every one of them, Solar saw, after a second, with the hair lifting on her arms, was turned the same way. Not toward the stage. Not toward the doors. Toward the back wall of the club, a few degrees off true, the way a crowd turns toward a sound none of the rest of the room has heard yet. Downstream." },
      { s: 'chaewon', f: 'neutral', t: "Don't talk yet. I lose my place." },
      { n: "She was counting. Her lips moving, her pencil moving, little gates of five going down the page, her eyes going row by row across the red floor, steady, unhurried, the way you'd count sheep in a field if the sheep had been made out of the dark. Solar counted too. She didn't decide to. Her eyes just went where Chaewon's went, and the number came up in her, row by row, one, two, three, the way her body had known Yunjin's bridge part." },
      { n: "It took a long time. It took so long the red seemed to get thicker. When Chaewon finally put the pencil down, the page was full." },
      { s: 'chaewon', f: 'neutral', t: "...Two hundred and five." },
      { s: 'solar', f: 'neutral', t: "Two hundred and five." },
      { n: "Two hundred and six had gone in. Two hundred and five were standing on the floor, in their coffins, facing the wall. Solar looked at the counter in her own hand, dead now, its little window black in the red. She didn't need it. She knew what it said." },
      // CG: eqx-coffin-count — two girls in a cramped sticker-covered DJ booth looking down through its small window at a nightclub floor packed with upright black coffins all turned the same way, a notebook full of tally marks on one girl's knees, the whole room lit deep red.
      { s: 'chaewon', f: 'neutral', t: "Every night. One less in the red than went in. And then at two, when they all go out, one less than that. Always the same one missing. I think it's the same one. I don't know how I'd know." },
      { s: 'chaewon', f: 'serious', t: "Somebody goes in, and doesn't turn into one of those, and doesn't come out." },
      { choose: [
        { t: "People like us don't turn into those.", notes: 3, then: [
          { n: "Chaewon looked at her. She'd thought of it, Solar could see; she'd thought of it a long time ago, in the first week, and put it away somewhere and not taken it out again, the way you don't take out a letter you already know says the wrong thing." },
          { s: 'chaewon', f: 'sad', t: "...I know. I looked. Every night. I look at the floor in the red for somebody standing up. Somebody like us. There's nobody standing up." },
          { s: 'chaewon', f: 'neutral', t: "Just them. Facing that way." }
        ] },
        { t: "Maybe someone leaves by the back before twelve.", notes: 2, then: [
          { s: 'chaewon', f: 'neutral', t: "The back's chained. Fire code says it shouldn't be. It is. He's got the key on his belt and he never opens it. I asked." },
          { s: 'chaewon', f: 'neutral', t: "I asked a lot of things. I'm very annoying. You can tell everybody." }
        ] },
        { t: "(Put your hand on hers, on the notebook.)", notes: 3, then: [
          { n: "Solar put her hand on top of Chaewon's, on the page, over the full columns. Chaewon's hand was ice cold. In the heat. In August. She didn't move it, and she didn't turn it over, but she stopped counting under her breath, which Solar hadn't realised she was still doing until it stopped." },
          { s: 'chaewon', f: 'sad', t: "...You're warm. Okay. One warm thing. Count that." }
        ] }
      ] },
      { n: "They sat in the red for more than an hour. Neither of them looked at the floor more than they had to. Chaewon told her about the studio in Songdo instead, quietly, in a voice for a library, the radiator that knocked, the sticker over the pipe that said DO NOT TOUCH in three languages and had been touched by everyone, Yunjin lying on her back in the middle of the floor after class with her arms out saying *I'm dead, leave me here, tell my mother*. She talked like somebody keeping a fire going with whatever was to hand." },
      { n: "A few minutes past one, the red went." },
      { dark: false },
      { n: "It went the way it came, all at once, and the music came back in the exact middle of the bar it had stopped in, the bass finishing its fall, the lights slamming on, and two hundred and five people went on dancing as if nothing had happened, because for them nothing had, and the DJ came back up the ladder with his cigarette behind his ear and looked at the two girls on his floor and decided, visibly, not to ask." },

      { place: 'Paulownia Mall · Club Escapade', time: 'Late Night', bg: 'clubescapade-outside', music: 'tension', soft: true },
      { n: "At two the lights came up, ugly and white, and the floor was suddenly a floor, sticky and scattered with cups, and the crowd went out past the rope blinking like people coming up out of a cinema in the afternoon." },
      { n: "They counted them out. Backward. Chaewon on one side of the door, Solar on the other, two counters going down together, *click*, *click*, the numbers falling in the little windows in step, a hundred, fifty, twenty, the last stragglers, a girl carrying her shoes, a man looking for his phone, the bartender with a bin bag, ten, three, the DJ, the cloakroom girl. One." },
      { n: "Both windows said one." },
      { n: "The doorman, coming up behind them with the shutter key, leaned over Chaewon's shoulder and looked at her counter, and then at Solar's, and then made a small noise through his nose that wasn't quite a laugh." },
      { s: 'chaewon', f: 'neutral', t: "He says we're both wrong the same way. He says it's very impressive." },
      { n: "Solar looked through the door into the bright empty club. The tables. The stage. The ladder up to the DJ booth. The little office with its door half open and its light on. Nothing moved anywhere. It was a room. It was just a room with the lights on." },
      { ifFlag: 'eqx-chaewon-count', then: [
        { s: 'chaewon', f: 'serious', t: "...Both of us. Both one. You said. If we both get one, then we—" },
        { s: 'solar', f: 'neutral', t: "We leave. Fast. Together." }
      ], else: [
        { s: 'chaewon', f: 'serious', t: "...It's not me. It's not me. You got one too." },
        { s: 'solar', f: 'neutral', t: "Then we leave. Now. Together." }
      ] },
      { n: "They didn't go back in. That was the thing Chaewon would say later, more than once, as if it were the surprising part: that for the first time since she'd come, she didn't go back in. She gave the doorman his counter, and Solar gave him hers, and the shutter came down with a long iron rattle between them and the empty room, and the doorman turned the key, and Chaewon took Solar's wrist and walked, fast, the way you walk in a dream when you're not allowed to run, all the way down the mall and out of the doors and into the hot night, and only at the bottom of the steps did she stop, and breathe, and let go." },

      { place: 'Port Island Station · Konbini', time: 'Late Night', bg: 'port-island-konbini-night', music: 'tender' },
      { n: "There were no trains until five, so they bought two cartons of strawberry milk and a bag of rice crackers from the all-night konbini by the station and sat on the step outside under the buzzing white sign, with the moths going round it and the moon low and yellow over the bay." },
      { n: "Chaewon drank her milk in one go, like medicine, and crushed the carton flat and set it on the step beside her very neatly." },
      { s: 'chaewon', f: 'neutral', t: "Can I tell you the reason? For all of it? I never told anyone the reason. In any of them." },
      { s: 'chaewon', f: 'neutral', t: "When I was nine, there was a school trip. A bus. We stopped at a rest stop on the motorway so everybody could pee. I went to the toilet and there was a queue and I was the last one, and when I came out, the bus was going. Pulling out. I saw the back of it. I saw my friend's head in the back window." },
      { s: 'chaewon', f: 'neutral', t: "The teacher counted. She stood at the front and counted us. She got the right number. She'd counted the driver. Or a bag. Or she counted somebody twice. She got the right number, and I wasn't on the bus." },
      { s: 'chaewon', f: 'sad', t: "I waited two hours. On a bench outside a rest stop, by the vending machines. Nobody noticed I was gone until they counted again at the hotel. Two hours. I didn't cry. I sat very straight so I'd look like somebody who was meant to be there." },
      { n: "She turned the crushed carton round on the step with one finger, a quarter turn, another quarter." },
      { s: 'chaewon', f: 'neutral', t: "And here's the thing. Here's the thing that made me sit down on the floor in the atrium, in June, the night we came." },
      { s: 'chaewon', f: 'serious', t: "It happened in all three. Everything else is different. Different schools, different cities, different mothers, practically. But that day is the same in all three of me. The same rest stop. The same bench. The same can of grape soda I bought with the coins in my pocket and didn't drink. It's the one day I've got three of, and they're exactly the same." },
      { s: 'chaewon', f: 'neutral', t: "...Isn't that a weird day to get to keep. Out of all of them." },
      { choose: [
        { t: "Somebody should have counted again.", notes: 3, then: [
          { s: 'chaewon', f: 'neutral', t: "Yeah." },
          { n: "She said it very simply. Then she put her face down on her knees, just for a second, not crying, just resting it there, the way you'd lean your head against a cool window." },
          { s: 'chaewon', f: 'neutral', t: "...Somebody should've. So now I do. For everybody. Forever. That's fair, right? That's a fair trade." }
        ] },
        { t: "You sat very straight. You still do.", notes: 3, then: [
          { n: "Chaewon looked down at herself, sitting on a konbini step at three in the morning with her back as straight as a ruler, her knees together, her hands folded on them. She laughed, startled, and didn't uncurl." },
          { s: 'chaewon', f: 'flustered', t: "...Oh my God. I do. I'm doing it now. I've done it my whole life. Nobody ever said." }
        ] },
        { t: "(Don't say anything. Open the rice crackers and give her the first one.)", notes: 2, then: [
          { n: "Solar tore the bag open and held it out. Chaewon took one, and ate it, and took another, and they sat crunching in the buzzing light for a long time, which seemed to be what she'd wanted, someone who heard it and didn't make it into anything." }
        ] }
      ] },
      { n: "After a while she took the notebook out of her back pocket and turned it over, to the back page, to the heading in the small hard hand. RULES. There were a lot of them now. Solar could read some, upside down. *Don't open for voices.* *Twos.* *Light on.* *Count the stairs going down as well as up.* *If Kazu's saucer is upside down don't touch it, let her.*" },
      { s: 'chaewon', f: 'neutral', t: "You write one. You've been here longer than us. You know things. Write one rule." },
      { choose: [
        { t: "(Write: *If somebody's missing, wait for them. However long.*)", notes: 3, flag: 'eqx-chaewon-rule-wait', then: [
          { n: "Solar wrote it, in a hand that came out leaning forward in a hurry, looping its *g*, and gave the pencil back. Chaewon read it, and read it again, and didn't say anything for so long that Solar thought she'd got it wrong." },
          { s: 'chaewon', f: 'sad', t: "...However long. Okay. Okay. That's the one I needed at the rest stop." },
          { n: "She drew a box round it. Then a second box round the first." }
        ] },
        { t: "(Write: *Never count alone.*)", notes: 3, flag: 'eqx-chaewon-rule-twos', then: [
          { n: "Solar wrote it, and underlined *alone*, and gave the pencil back. Chaewon looked at it and nodded, the way you nod at a doctor's instructions you know you'll follow." },
          { s: 'chaewon', f: 'neutral', t: "Never count alone. Okay. Then you'll have to come back. That's how rules work. You wrote it. You're in it now." }
        ] },
        { t: "(Write: *Somebody counts Chaewon.* Then underneath, small, your initial.)", notes: 3, flag: 'eqx-chaewon-rule-counted', then: [
          { n: "Chaewon read it upside down while Solar was still writing it, which was cheating, and by the time Solar got to the *S* her hand had come up over her own mouth." },
          { s: 'chaewon', f: 'flustered', t: "That's not— that's not a rule. That's a— you can't— that's not how the rules page works." },
          { n: "She didn't cross it out. She tucked the notebook back in her pocket very quickly and sat on it, and looked at the moon, and her ears were red all the way to the top." }
        ] }
      ] },

      { place: 'Iwatodai · River Street', time: 'Early Morning', bg: 'eqx-oka-gate', music: 'mystery' },
      { n: "They took the first train over the bridge at five, the only two people in the carriage, the bay going from black to gray to a long flat silver under the window, and walked the river street in the first light with the cicadas already starting in the trees, one, then a dozen, then all of them, the whole street suddenly screaming as if somebody had flipped a switch." },
      { n: "Mrs. Oka was at the gate." },
      { n: "Of course she was. In her gray summer kimono with the sleeves tied back and her white cotton gloves already on, at five in the morning, with the gate standing open behind her and the smell of rice and miso coming out of the house past her like a held door." },
      { s: 'mrsoka', f: 'happy', t: "There she is. There's my girl. Out all night, and with a friend, too. I knew you'd be back about now. I had a feeling. Come in, come in, both of you, I'll do you eggs." },
      { n: "Chaewon stopped on the step. Not the sill. The step, the one that was a lie. Solar watched her look at the open gate, at the landlady in it, at the lit kitchen window behind, and her lips moved, very slightly, and Solar knew she was counting the house. The upstairs windows. The doors. The one woman in the gate, in her gloves, smiling." },
      { s: 'chaewon', f: 'neutral', t: "...She doesn't sleep, I think. I've never once come in and found her asleep. I count her too. Every time. She's always one." },
      { s: 'chaewon', f: 'neutral', t: "Go home in the light, Solar. It's light now. That's the rule." },
      { n: "She stepped over the sill. Into the garden, past Mrs. Oka, who touched her hair as she went by with one gloved hand, lightly, the way you'd straighten a picture; and Chaewon, on the path, without turning round, held up one finger over her shoulder at Solar in the gate, the way the doorman had lifted his rice ball. One in." },
      { n: "Mrs. Oka smiled at Solar across the threshold. She didn't ask her in again. She only stood there with the open gate beside her and the steam coming out past her, warm and kind and patient, as if she had all the mornings in the world to wait, and after a moment she knocked, lightly, twice, on the gatepost, the way you'd tell a child supper was on the table." }
    ] },
    { after: '10/1', title: '3: zero', place: 'Paulownia Mall · Club Escapade', time: 'Evening', music: 'tender', scene: [
      { bg: 'clubescapade' },
      { n: "At six o'clock, before it opened, Club Escapade was the saddest room on Port Island, and Chaewon loved it." },
      { n: "The doorman let her in at a quarter to with the shutter halfway up, so you had to duck under it, and then pulled it down again behind you, and inside there was only the work light, one bare bulb in a cage hanging over the bar, and everything else was gray: the floor mopped and drying in long swirls, the chairs upside down on the tables with their legs in the air like dead beetles, the stage with nothing on it but a coil of cable and a broom. It smelled of bleach and old beer and the cold breath of the air conditioning, which they ran for an hour before the doors to get the room down from the heat of the day. October had turned, but the afternoons hadn't heard." },
      { n: "Chaewon stood in the middle of the empty floor with the counter in her hand and pressed the little reset button on its side with her thumb, and the numbers in the window rolled back, *click-click-click-click*, all the way down." },
      { s: 'chaewon', f: 'neutral', t: "Zero." },
      { n: "She held it up so Solar could see it in the work light. Four zeros in a row, white on black." },
      { s: 'chaewon', f: 'neutral', t: "I've started coming at six. He thinks I'm keen. It's the only time it's right. Before anyone comes in, it's zero, and it's zero, and I look round and there's nobody, and it's true. It's the only number I get every day that I know is true." },
      { s: 'chaewon', f: 'sad', t: "...After that it's never true again till tomorrow." },
      { n: "She looked different. Solar had seen her at the culture-festival rehearsals, at the boarding house gate, across the dorm lounge on the nights the girls came up to eat, and hadn't seen it until now, in the gray light with nobody else in the room: the way her shoulders sat a little higher than they had in August, as if the straight back she'd learned on a bench at nine years old had started taking more work. There were two lines in the corners of her mouth that hadn't been there. She'd cut her nails very short." },
      { choose: [
        { t: "Show me how you count an empty room.", notes: 3, then: [
          { n: "Chaewon looked at her as if nobody had ever asked her a better question. Then she turned slowly on the spot in the middle of the floor, the counter held out in front of her, her eyes going to every corner, the bar, the stage, the ladder, the office, the black mouth of the cloakroom, and her thumb didn't move once." },
          { s: 'chaewon', f: 'neutral', t: "Like that. You look everywhere and you don't press it. It's harder than it sounds. Your thumb wants to." }
        ] },
        { t: "You look tired, Chaewon.", notes: 2, then: [
          { s: 'chaewon', f: 'neutral', t: "I'm fine. I'm a hundred percent. I'm— okay. I'm ninety. I'm sixty-ish." },
          { s: 'chaewon', f: 'neutral', t: "Don't tell the others. They'll make me tea. Kazu makes tea like it's an apology." }
        ] },
        { t: "(Take the second counter off the bar and reset it too.)", notes: 3, then: [
          { n: "The second counter was on the bar where the doorman had left it. Solar picked it up and pressed the button on its side and watched its numbers roll down to nothing too, and held it up beside Chaewon's in the work light. Two zeros. Chaewon made a sound that was nearly a laugh and didn't quite get there." },
          { s: 'chaewon', f: 'happy', t: "...Same number. Look at that. Two people, same number." }
        ] }
      ] },
      { n: "They set the chairs down together, because there was nothing else to do until eight and because Chaewon couldn't stand still in a room for long anymore. Every chair came down off a table with a little wooden knock, and she counted them under her breath as they landed, and Solar let her." },
      { ifFlag: 'dead.shinjiro', then: [
        { s: 'chaewon', f: 'sad', t: "At the funeral I counted. I didn't want to. I stood at the back with the girls and I counted everyone in the hall, and then I counted again, and I kept getting one less than the chairs." },
        { s: 'chaewon', f: 'sad', t: "...That one was right, though. That's the worst one I ever got right." }
      ] },
      { s: 'chaewon', f: 'neutral', t: "I counted the shoes. On the bridge. In the morning. Did you know that? I didn't mean to. I just did. Three pairs. And then I counted the men, the night before, the men who— I counted three. And then on the way home I counted the mothers who weren't walking with us, and it was three." },
      { s: 'chaewon', f: 'serious', t: "I keep getting three. Ever since. I count the stairs at the house and there's a three in it that wasn't there. That's not a thing. I know that's not a thing. I know." },
      { ifEvent: 'eqx-persimmon', then: [
        { s: 'chaewon', f: 'neutral', t: "And the kitchen. At the house. Before we left it. I never told anyone, not even the girls." },
        { s: 'chaewon', f: 'neutral', t: "We slept upstairs, right over it. All of September, all of October. And at night, after the red, you could hear her down there. Walking. Back and forth, back and forth, the way she does, the counter to the sink. And I lay on the futon and counted the steps. You can count steps through a floor. You can tell how many people." },
        { s: 'chaewon', f: 'serious', t: "Some nights there were four. Four people walking in that kitchen. Four of them, going back and forth. And in the morning I'd go down and there'd only ever be her." }
      ], else: [
        { s: 'chaewon', f: 'neutral', t: "And the kitchen. At the house. I haven't told anyone, not even the girls." },
        { s: 'chaewon', f: 'neutral', t: "We sleep upstairs, right over it. And at night, after the red, you can hear her down there. Walking. Back and forth, back and forth, the way she does, the counter to the sink. And I lie on the futon and count the steps. You can count steps through a floor. You can tell how many people." },
        { s: 'chaewon', f: 'serious', t: "Some nights there are four. Four people walking in that kitchen. Four of them, going back and forth. And in the morning I go down and there's only ever her." },
        { ifEvent: 'eqx-fathers-moved', then: [
          { s: 'chaewon', f: 'neutral', t: "It's just us and her now, since the fathers went. The house is so quiet you can hear the persimmons fall. You can hear everything." }
        ], else: [
          { s: 'chaewon', f: 'neutral', t: "The fathers sleep through it. Their rooms are at the front. Mr. Kim snores. I count his snores too, sometimes, just to have a number that's only one man." }
        ] }
      ] },
      { n: "She'd set down the last chair. She stood with both hands on its back, looking at the empty floor, at the gray swirls of the mop drying on it, and Solar watched her hold the thought and not let it go anywhere, the way you hold a glass of something too hot to put down and too hot to drink." },
      { choose: [
        { t: "Chaewon. Why are you still in that house?", notes: 3, then: [
          { s: 'chaewon', f: 'neutral', t: "I don't know." },
          { s: 'chaewon', f: 'sad', t: "That's the truth. I don't know. I packed a bag. Twice. Kazu's things and mine, in the big one. And both times I sat on the futon with it zipped up and then I unpacked it again and put everything back in the drawers. Folded. Very neatly. I don't know why." },
          { s: 'chaewon', f: 'neutral', t: "She asked us to stay together. In July. And we said we will. And I think every time I zip the bag, I hear us saying it." }
        ] },
        { t: "Four people. You're sure?", notes: 2, then: [
          { s: 'chaewon', f: 'serious', t: "I've never miscounted in my life. In any of them. You know that. You wrote it in my rules." },
          { s: 'chaewon', f: 'neutral', t: "...I'm sure. I'm so sure I wish I wasn't. That's how sure." }
        ] },
        { t: "(Stand beside her. Count the empty floor with her, out loud.)", notes: 3, then: [
          { n: "Solar came and stood at the next chair and put her hands on its back too, and looked out at the empty floor, and said it out loud, the way you'd say it for a child afraid of the dark. *Nobody. Nobody. Nobody.* Bar, stage, office. Chaewon said it with her on the third. Then on the fourth. Then the room was counted, and it was zero, and it was true, and Chaewon let go of the chair." }
        ] }
      ] },
      { n: "She took a roll of white tape out of the pocket of her jacket. Stage tape, the kind they used on the gym floor for marks. She turned it over in her hands." },
      { ifEvent: 'eqx-culture-stage', then: [
        { s: 'chaewon', f: 'flustered', t: "You saw it. At the festival. The tape. On the stage, at the end of the line. I know you saw it. You looked at it on the way out. I counted you looking." },
        { s: 'chaewon', f: 'neutral', t: "It's for a sixth place. I don't know whose. Yunjin's left, or you, or— I don't know. I just needed it to be there. I needed there to be a place for one more, in case." }
      ], else: [
        { s: 'chaewon', f: 'neutral', t: "For the festival. Jungwon-ssi got us the gym. I'm going to put a mark on the stage, at the end of the line, past Yunjin. A sixth place." },
        { s: 'chaewon', f: 'flustered', t: "I don't know whose. Yunjin's left, or you, or— I don't know. Don't ask. I just need it to be there. I need there to be a place for one more, in case." }
      ] },

      { place: 'Paulownia Mall · Club Escapade', time: 'Evening', bg: 'clubescapade', music: 'eerie', soft: true },
      { n: "They sat on the edge of the stage with their legs hanging over, in the cold air, in the one light. Seven o'clock. Out beyond the shutter the mall was filling up for the evening; you could hear it faintly, a muffled sea of voices and the music from the shoe shop, as if the whole world were happening in another room." },
      { n: "Chaewon had the notebook open on her knees to the back page. RULES. It had gone onto a second page. Solar could see her own handwriting near the top of the first one, in among all of Chaewon's, leaning forward, looping." },
      { s: 'chaewon', f: 'neutral', t: "In two of them I go home and walk past Sakura in the street and don't know her. I've seen it. I remember it. I remember not saying hello. In one I've never once seen Kazuha's face. It's only in Songdo we're all in a room, and Songdo's... Songdo's one out of three. That's not good odds. I know odds." },
      { s: 'chaewon', f: 'sad', t: "Here's the only place I can count to five. I said that to you. In June. On the fountain. I said it like it was a joke." },
      { s: 'chaewon', f: 'neutral', t: "It's not a joke. It's the only thing I've got that's true every morning. Five at the end of the table. Five of us at breakfast, and I count it, and it's five." },
      { n: "She turned to look at Solar. Her face in the work light was very young and very tired and set, the face of a girl on a bench at a rest stop with her back straight and her hands folded, waiting to look like someone who was meant to be there." },
      { s: 'chaewon', f: 'serious', t: "So say it. Please. Tell me we stay together. The five of us. Here, where I can count us. You're the one who knows how this place works. If you say it, I'll write it at the top. Above everything. Rule one. And I'll stop unpacking the bag and I'll stop lying awake. I'll just. Stop counting. For once." },
      { choose: [
        { t: "You stay together. Here. All five of you. Write it at the top.", notes: 3, tally: { cakes: 1, 'asks.chaewon': 'yes' }, then: [
          { n: "She said it. It was easy. It was what Chaewon had asked for, word for word, and she watched it go in: Chaewon's shoulders came down, both of them, all the way, for the first time all evening, and she bent over the notebook and wrote it at the top of the first page, above everything, in the round careful hand, and boxed it, twice." },
          { s: 'chaewon', f: 'happy', t: "...Rule one. Okay. Okay. Five. We stay." },
          { n: "She shut the notebook. She put the counter down on the stage beside her, and took her thumb off it, and left it there, and leaned back on her hands and looked up at the dark ceiling like somebody lying on a beach. And Solar, beside her, felt something settle in her own chest, warm and heavy and sweet, like the last bite of something you hadn't been hungry for, and didn't know what it was, and didn't like how much she liked it." }
        ] },
        { t: "Stay. Please. All of you. I need to know where you are.", notes: 3, tally: { asked: 1, cakes: 1, 'asks.chaewon': 'yes' }, flag: 'eqx-asked-chaewon', then: [
          { n: "It came out of her before she'd decided anything. It wasn't what Chaewon had asked for. It was bigger than that. It was Solar's own, and Chaewon heard that it was, and stared at her." },
          { s: 'chaewon', f: 'surprised', t: "...You need to know? You?" },
          { s: 'chaewon', f: 'happy', t: "Okay. Then that's— okay. Then we're staying because you need it. That's a better rule than mine. That's rule one." },
          { n: "She wrote it at the top and boxed it twice and laughed while she did it, a little wet, and then took Solar's hand without looking and held it on the stage between them, hard, the way you'd hold the rail on a bus; and Solar felt the grip close, and something small and warm go out of her into it, out of her chest and down her arm and into Chaewon's cold fingers, and not come back." }
        ] },
        { t: "We all go home, Chaewon. That's the only way anyone's ever counted right.", notes: 2, tally: { 'asks.chaewon': 'no' }, then: [
          { n: "Chaewon looked at her for a long moment. Then she nodded, once, the way she'd nodded at the procedure for a fire." },
          { s: 'chaewon', f: 'sad', t: "...Home. Two out of three where I don't know anyone. Okay. I know. I know that's the answer. I knew it before I asked." },
          { s: 'chaewon', f: 'neutral', t: "I just wanted to hear what it sounded like if somebody said the other one." },
          { n: "She didn't write anything. She closed the notebook and put her thumb back on the counter and kept it there, and didn't take it off again all night." }
        ] },
        { t: "That rule's yours to write. Not mine. You get to say where you stay.", notes: 2, tally: { choose: 1, 'asks.chaewon': 'choose' }, then: [
          { n: "Chaewon didn't say anything. She looked at the notebook, at the empty space at the top of the page above all the other rules, and held the pencil over it, and Solar watched her not write in it, the way you watch someone not step off a ledge." },
          { s: 'chaewon', f: 'neutral', t: "...That's so much worse. You know that? That's so much harder than if you'd just told me." },
          { s: 'chaewon', f: 'sad', t: "I've never written one of those. Where I stay. I write what everybody else does. Who's in, who's out. I've never once written down where I go." },
          { s: 'solar', f: 'neutral', t: "I know." },
          { n: "She left the top of the page empty. But she didn't put the pencil away either. She put it behind her ear, the way you'd keep a thing for later, and sat with it there, and once, near eight, Solar saw her reach up and touch it, the way you'd touch a key in your pocket to check it's still there." }
        ] }
      ] },

      { place: 'Paulownia Mall · Club Escapade', time: 'Evening', bg: 'clubescapade-outside', music: 'city', soft: true },
      { n: "At eight the shutter went up and the purple came on and the bass came up through the floor, and the doorman took his place on his stool with his rice ball, and the line was already there, out past the shuttered flower shop, fanning itself with flyers in the last of the warm weather." },
      { n: "Solar counted the first ten in with her. *Click.* On the sill, not the step. Couples were two. Chaewon didn't watch her doing it this time, only stood beside her with her own counter going, and once, between people, without looking round, leaned over very slightly so their shoulders touched, and leaned back." },
      { s: 'chaewon', f: 'neutral', t: "You're one I always get right. Did you know that? Every time you come, I count you in and I count you out and it's right. Every single time." },
      { s: 'chaewon', f: 'neutral', t: "So come. That's all. Just come. I like having one I get right." },
      { n: "Hanni was at the bottom of the escalator at nine, as the rota said, with her arms folded and a cardigan over them, waving from the shoulder. Solar went down to her. Halfway down, on the moving steps, she looked back." },
      { n: "Chaewon was at the rope, small under the purple light, in her lanyard, between the doorman and the line. She was looking at Solar. She held the counter up where Solar could see it, and pressed it, once, with her thumb, very deliberately, the way you'd sign your name." },
      { n: "One out." },
      { n: "Then she turned back to the door and went on counting people in, and the escalator carried Solar down into the bright crowded mall, and she didn't see her again until the bottom, where she couldn't see her at all." }
    ] }
  ]
});
