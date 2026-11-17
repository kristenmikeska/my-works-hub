/* Persona 3: Equinox · Ken & Koromaru · XI Strength (a duo link). Link data (femc-equinox-game.html). Format: link fields
   in assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1–8 (from 4/13; their home is the shrine playground on Sunday, Tuesday, Thursday and Saturday after
   school, so 4/13 itself). Ranks 4–10 still to write. Shape: the stub fields from assets/femc/equinox/data/links.js
   (members / cast kept; this file wins over the stub). Both members are in every rank: Koromaru doesn't talk, but he's a
   full presence (his lines are barks and what he does).
   Solstice's Ken and Koromaru links are shared memory (Ken: the composition, the Featherman strap, "allowed both"; Koromaru:
   Solar's feeding note, the plum end, facing the door, two sets of tracks in the snow). Nothing reads Solstice link standing.
   Flags this file sets: eqx-ken-hospital (rank 1: Solar offers to go with Ken to see Shinjiro). Nothing reads it yet.
   Rank 2 (after 4/24): reads eqx-ken-hospital and ifEvent eqx-knock; cast adds the desk nurse. Sets nothing.
   Rank 3 (after 6/5, the shrine playground; branches on eqx-last-grain, ifBefore 9/1, eqx-hunted) records the duo's ask: tally
   asks.ken-koromaru (+ cakes / choose). Sets nothing else.
   Ranks 4–6 written (Nov 16): rank 4 (after 6/29: the playground, the shrine's river-side steps at dusk, the front hall;
   branches on ifChoice asks.ken-koromaru) sets eqx-ken-come (Solar suggests teaching "come" instead of "stay").
   Rank 5 (after 8/17: the playground, the beach below Seaside Park, the dorm stairs; reads eqx-ken-come) sets
   eqx-ken-asks-shinji (Solar tells Ken to ask Shinjiro for cooking lessons).
   Rank 6 (after 10/3, the eve of 10/4: the playground, the corner lot behind the Strip, the playground, the front hall;
   reads eqx-ken-asks-shinji) sets eqx-ken-for-now (Solar writes "for now" under her mothers' names in Ken's list) and
   eqx-floor-ken-koromaru (their ask floor). Koromaru is never hurt or in danger (Kat). Nothing reads the new flags yet.
   Ranks 7–8 written (Nov 16, round 3): rank 7 (after 11/4, Thursday: the playground with Taejoon throwing the ball, the
   river steps at dusk, the kitchen at six, the stairs; branches hard on dead.shinjiro; reads eqx-ken-come, ifEvent
   eqx-1122) sets eqx-ken-list-solar (Solar writes in Ken's list) or eqx-ken-list-ken (she holds it, he writes). Taejoon is
   narration only (two words of Korean; fence kept). Rank 8 (after 12/5, Sunday: the playground in frost, the same count
   two nights running, their ask floor in the Well in the red: a corridor of doors with a futon across each and everyone
   asleep and smiling, Ken's mother among them, the fourteenth futon empty for Ken with Koromaru lying across it; reads
   eqx-ken-for-now, eqx-ken-come, ifChoice asks.ken-koromaru, dead.*, ifEvent eqx-persimmon) sets one of eqx-ken-real-count,
   eqx-ken-stopped-count (choose +1) or eqx-ken-come-used (only with eqx-ken-come), then eqx-floor-ken-koromaru-seen.
   Koromaru is in no danger on the floor: nothing there attacks him. Cast adds shinjiro (rank 7, alive branch).
   Ranks 9–10 still to write. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'ken-koromaru', name: 'Ken & Koromaru', short: 'Ken & Koromaru', arcana: 'Strength', numeral: 'XI', from: 'Persona 3', kind: 'group',
  romance: null, starts: '4/8', lodging: 'dorm', members: ['ken', 'koromaru'], cast: { ken: 'Ken', koromaru: 'Koromaru', nurse: 'Nurse', shinjiro: 'Shinjiro' },
  home: { area: 'shrine', spot: 'Playground', slot: 'after', days: [0, 2, 4, 6],
          hint: 'After school, or in the daytime on Sundays, at the Naganaki Shrine playground: one boy, one dog, one ball.' },
  approach: "In the little playground below Naganaki Shrine a boy in a sixth-grade uniform is throwing a tennis ball as far as he can, and a white dog is bringing it back faster than he can throw it, and neither of them has noticed yet that this isn't a fair fight.",
  ranks: [
    { after: '4/13', title: '1: the long way home', place: 'Naganaki Shrine · Playground', time: 'After School', music: 'tender', scene: [
      { bg: 'naganaki-shrine-spring' },
      // BG: naganaki-shrine-playground — the small playground below Naganaki Shrine on a spring afternoon: a bench under a ginkgo in new leaf, a sandpit, a little climbing frame, the shrine steps going up behind the trees.
      { n: "The playground below Naganaki Shrine was small enough to cross in twenty steps: a sandpit, a climbing frame with the paint coming off it in curls, two swings, and the bench under the ginkgo where Ken had sat every afternoon of last October with his backpack on his knees, waiting to be brave. The ginkgo was in new leaf now, small and folded and absurdly green, like a tree that had been told about spring and believed every word." },
      { n: "Ken was throwing a tennis ball. Koromaru was bringing it back. It was not a contest either of them was winning, because Ken threw it as hard as a sixth-grader could, all arm, his whole body going after it, and Koromaru simply went and got it and came back before Ken had finished being pleased with the throw, and dropped it at his feet, and looked up at him with enormous patience." },
      { s: 'ken', f: 'happy', t: "Solar-san! You came. I didn't ask, so I didn't know if you would. Koromaru knew. He's been looking at the gate since four." },
      { s: 'koromaru', f: 'happy', t: "Wuff!" },
      { n: "Koromaru came across the playground to her in a straight white line, not running, a brisk purposeful trot, the way he'd come to her across the shrine grounds all last winter, and stopped in front of her and leaned. His whole weight. Against her shins, his head pressed flat to her knee, his eyes shut, the way he'd leaned against her on the cold step under the ema rack in January, as if she were a wall he'd decided would hold." },
      { choose: [
        { t: "(Kneel down. Forehead against his.)", notes: 3, then: [
          { n: "She knelt in the gravel and put her forehead against his, the warm fur and the hard skull under it, and he held still for her, which he didn't do for anyone, and breathed slowly against her face, smelling of grass and the dorm's laundry soap and dog." },
          { s: 'ken', f: 'neutral', t: "...He doesn't do that with me. I'm not jealous. I'm just noting it." }
        ] },
        { t: "Hi, Koromaru. Hi.", notes: 2, then: [
          { s: 'koromaru', f: 'happy', t: "Wuff." },
          { n: "His tail went, once, slow and heavy, side to side. He didn't move his head off her knee." }
        ] },
        { t: "(Throw the ball for him.)", notes: 2, then: [
          { n: "She picked up the ball and threw it, badly, underhand, the way she threw everything, and he looked at it go and then looked back at her, and didn't move, as if to say he could get it any time and this was more important." },
          { s: 'ken', f: 'happy', t: "He does that. He decides which things are important. I think he's usually right." }
        ] }
      ] },
      { n: "Ken had grown. Not a lot. But she'd measured him properly last year, against the doorframe in the dorm with the book flat on his head and the pencil held level, and she could see it from here, the extra centimeter and the one after it, in the way his uniform cuffs had stopped at his wrists. He'd seen her see it. He stood up a little straighter, as if by accident." },
      { s: 'ken', f: 'neutral', t: "One point six. Since you measured. I did it myself, with the book, properly. I know you're not supposed to do it yourself. I did it carefully." },
      { s: 'ken', f: 'neutral', t: "I wanted to have a number for you. When you came back. I didn't know if you would. I measured anyway." },
      { n: "He said it the way he said everything, very correctly, like a report to a teacher he respected, and then he looked at the ball in the gravel and not at her." },
      { choose: [
        { t: "I'll measure you again. Tonight. Properly.", notes: 3, then: [
          { s: 'ken', f: 'happy', t: "Okay. Yes. Please. The doorframe's still got your line on it. Mitsuru-san had the hallway repainted in March and I asked the painters to go round it." },
          { s: 'ken', f: 'neutral', t: "They thought I was very strange. It's fine. I'm used to that." }
        ] },
        { t: "You're going to be taller than me.", notes: 2, then: [
          { s: 'ken', f: 'happy', t: "Statistically, yes. Akihiko-san says by high school. I'm going to try not to be smug about it. I'm going to be a little smug about it." }
        ] },
        { t: "(Ruffle his hair.)", notes: 2, then: [
          { n: "She ruffled his hair. He let her, which he didn't used to, and then fixed it at once with both hands, very carefully, which he did used to, and some things were exactly where she'd left them." }
        ] }
      ] },
      { n: "They sat on the bench under the ginkgo. Ken on one end with his backpack on his knees, the way he always had. Solar in the middle. Koromaru on the ground in front of them, lying not quite at their feet but a body's length further out, facing the playground gate, his chin on his paws, his ears turning, one and then the other, at every sound from the road." },
      { s: 'ken', f: 'neutral', t: "He doesn't sleep in my room anymore." },
      { s: 'ken', f: 'neutral', t: "Since the night of the knocks. He sleeps across the front door. All of him, pressed against it, along the bottom, like a draft stopper. I called him and he looked at me and didn't come. He's never not come." },
      { s: 'ken', f: 'neutral', t: "So I moved my futon into the front hall. Mitsuru-san said that was a fire hazard. I said I'd be very fireproof. She let me." },
      { choose: [
        { t: "That's very brave, Ken.", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "It's not brave. It's just the hall. It's quite cold. Aigis-san comes down at midnight and stands there and counts, and I pretend to be asleep so she doesn't feel she has to say good evening." }
        ] },
        { t: "Hanni does the same thing. Outside Hyein's door.", notes: 3, then: [
          { s: 'ken', f: 'neutral', t: "...Oh. I didn't know that. I thought it was just me." },
          { s: 'ken', f: 'happy', t: "That's good. Not good. I mean it's good it's not just me. It makes it a thing people do, and not a thing I'm doing because I'm a child." }
        ] },
        { t: "Does he know something we don't?", notes: 3, then: [
          { s: 'ken', f: 'serious', t: "He always knows something we don't. He's a dog. He knew Shinjiro-san was going to wake up before the doctors did. He sat in the hospital parking lot for two days." },
          { s: 'ken', f: 'neutral', t: "I'm not saying that's scientific. I'm saying I've stopped arguing with him." }
        ] }
      ] },
      { n: "*Shinjiro-san.* He'd said it, and then heard himself say it, and Solar watched the name go through him like a ball through a window, a small clean hole and then the crack spreading out from it." },
      { s: 'ken', f: 'sad', t: "...I haven't been. To the hospital. Since he woke up." },
      { s: 'ken', f: 'sad', t: "I went every day. All winter. I sat on the bench outside his room and then I went in and read him my composition and told him I was still angry and to please wake up anyway. And he did. He woke up in February. And I said thank you to him through the door, and I went home, and I haven't been back." },
      { s: 'ken', f: 'serious', t: "I got what I asked for. I don't know what you do after that. Nobody tells you that part. In Featherman when somebody wakes up from a coma it's the end of the episode." },
      { choose: [
        { t: "I'll go with you. Whenever you want.", notes: 3, flag: 'eqx-ken-hospital', then: [
          { s: 'ken', f: 'neutral', t: "...Not yet. But when it's yet. Okay?" },
          { s: 'solar', f: 'neutral', t: "Okay." },
          { s: 'ken', f: 'happy', t: "Okay. Thank you. I'll tell you when it's yet. I'll give you a day's notice. That's polite." }
        ] },
        { t: "You're allowed both. Still.", notes: 3, then: [
          { s: 'ken', f: 'sad', t: "I know. I wrote it down. It's in my composition. It's just harder when he's awake, because then he can hear both." }
        ] },
        { t: "He asks about you. Akihiko says.", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "...He does?" },
          { n: "He looked at his backpack for a long time. Then he took a small notebook out of the front pocket and wrote something in it, one line, and put it back, and zipped the pocket shut, and didn't say what." }
        ] }
      ] },
      { s: 'ken', f: 'neutral', t: "The strap. The Red one. I gave it to you. For protecting people, in case you went somewhere you'd need it." },
      { s: 'ken', f: 'neutral', t: "...Did it work? Wherever you went?" },
      { choose: [
        { t: "It worked. I'm here, aren't I?", notes: 3, then: [
          { s: 'ken', f: 'happy', t: "Yes. You are. Then it worked. I'm putting that in the notebook too." }
        ] },
        { t: "I don't know where it is now.", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "That's all right. Red's very good at being where he's needed. If he's not here, he's needed somewhere else." },
          { s: 'ken', f: 'sad', t: "...That's what I tell myself about a lot of things." }
        ] },
        { t: "I held onto it really hard.", notes: 3, then: [
          { s: 'ken', f: 'neutral', t: "Everybody held onto something. Junpei-san says that's how you all got here. Holding on." },
          { s: 'ken', f: 'serious', t: "I didn't hold on to anything. I was asleep. I just woke up in my pajamas on the stairs and everyone was there. I'm a little embarrassed about that." }
        ] }
      ] },
      { place: 'Naganaki Shrine · Playground', time: 'Evening', bg: 'outside-shrine-day', soft: true },
      { n: "They walked home when the light started to go. Down the shrine hill, past the little shops pulling their shutters down, Ken with the lead in his hand and the ball in his pocket, Koromaru half a body ahead on the flat, the way he always walked, and Solar a step behind, watching the two of them, the boy and the dog, the way you'd watch a road you'd driven a hundred times for a turn you knew was coming." },
      { n: "At the corner by the post office the road split. Left was the way they'd always gone, up the hill, the long way round to the dorm, ten minutes. Right went down along the river. It was shorter. Everybody went that way now; it went past the old wooden houses with their gardens, and the one with the persimmon tree." },
      { n: "Koromaru stopped." },
      { n: "Not the way a dog stops to smell something. He stopped square in the middle of the pavement, at the exact place where the road bent toward the river, and set his legs, all four of them, wide, and lowered his head, and didn't move. Ken tugged the lead, gently. Koromaru leaned back against it like a mule." },
      { s: 'koromaru', f: 'serious', t: "...Grr." },
      { n: "Not loud. Barely a sound at all. A low steady note down in his chest, going on and on, under the evening and the bicycle bells and the river, the sound a refrigerator makes in another room, and his eyes were fixed down the river road on nothing at all." },
      // CG: eqx-koromaru-corner — a white Shiba-like dog planted square on a pavement at dusk, legs set wide, head low, growling down a narrow road toward a river lined with old wooden houses; a boy in a school uniform beside him holding a taut lead, looking down at him.
      { s: 'ken', f: 'serious', t: "He's done this every day since Saturday. Every single time. He won't go down there. I tried carrying him on Saturday and he went all heavy, like a sack of rice, and then he bit my sleeve. Not me. Just the sleeve." },
      { s: 'ken', f: 'neutral', t: "I'm not scared of a road. I want to be clear. But I'm not going to make him." },
      { choose: [
        { t: "Then we go the long way.", notes: 3, then: [
          { n: "She turned left, up the hill. The second she did Koromaru stopped growling, mid-note, as if a switch had gone, and came after her at once, brisk, tail up, half a body ahead again, as if nothing had happened at all and he'd always meant to go this way." },
          { s: 'ken', f: 'happy', t: "The long way. That's what Mitsuru-san calls it too. When she's on her motorcycle and she doesn't want to go somewhere." }
        ] },
        { t: "(Crouch down beside him. Look where he's looking.)", notes: 3, then: [
          { n: "She crouched beside him on the pavement and looked down the river road where he was looking. Old houses. A wall. Over the wall, a tree with small new leaves, very still, though the evening wind was moving every other tree on the street. Nobody on the road. Nothing at all." },
          { n: "Koromaru looked at her, and then down the road again, and then at her, the way he'd looked at her from the boarding-house gate on Friday, as if he were waiting for her to understand something he had no way of saying." },
          { n: "They went the long way." }
        ] },
        { t: "Come on, Koromaru. It's just a road.", notes: 1, then: [
          { n: "She took a step toward the river. Koromaru moved for the first time. He got in front of her. Not fast. He simply walked round her legs and stood across them, sideways, his whole body across her shins, the way he lay across the dorm door at night, and looked up at her." },
          { s: 'koromaru', f: 'serious', t: "Wuff." },
          { n: "It was not a request. They went the long way." }
        ] }
      ] },
      { n: "Halfway up the hill, Ken said the other thing. Casually. Kicking a stone. The way you'd mention the weather, if the weather had been bothering you for days." },
      { s: 'ken', f: 'neutral', t: "The lady at the river house was at her gate, the first Saturday. When he did this. She waved. She had a box of rice cakes and she held one out and said I must be hungry, growing like that." },
      { s: 'ken', f: 'neutral', t: "She was very nice. She said, Ken-kun, you're getting so tall." },
      { s: 'ken', f: 'serious', t: "I hadn't told her my name. I'd never met her, then. I thought about it the whole way home. I thought Mitsuru-san must have said, at the house, when you all went." },
      { s: 'ken', f: 'neutral', t: "That's probably it. That's the sensible answer. Koromaru pulled so hard the lead burned my hand. Look. It's nearly gone." },
      { n: "He held up his hand. Across the palm there was a faint pink stripe, nearly healed, where a lead had been pulled through a fist too fast. He looked at it like it was evidence for a theory he wasn't ready to hold." },
      { choose: [
        { t: "Mitsuru probably told her. Ask her tonight.", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "I will. I'll ask very politely. It's probably that. I'd just like it to be that out loud." }
        ] },
        { t: "Don't take anything from her. Not yet.", notes: 3, then: [
          { s: 'ken', f: 'neutral', t: "I didn't. He wouldn't let me get close enough." },
          { s: 'ken', f: 'serious', t: "...You said not yet. Like there's a yet. Okay. I heard that. I'm not asking. I'm just saying I heard it." }
        ] },
        { t: "(Take his hand. The burned one.)", notes: 3, then: [
          { n: "She took his hand, the burned one, and held it the rest of the way up the hill, and he let her, the whole way, a sixth-grader who would have died before letting anyone see, and didn't look round once to check if anyone could." }
        ] }
      ] },
      { n: "At the dorm Ken took off Koromaru's lead in the hall and hung it on its hook, and Koromaru went, without being told, without stopping for water, straight to the front door, and turned round twice, and lay down along the bottom of it, pressed close, his nose to the gap where the evening air came in." },
      { n: "In the kitchen, taped inside the cupboard door above the rice cooker, Solar saw a piece of paper she knew. Her own handwriting, from a cold night last winter, the corners curled and the tape gone yellow. *KOROMARU. Rice + egg, a little broth, in the small pan. NOT the bag. He eats it facing the door. Let him.* And under it, in a sixth-grader's careful pencil, a column of small ticks, one for every day, going down the page and onto a second sheet taped under the first." },
      { s: 'ken', f: 'neutral', t: "You wrote it down. So I did it. Every day. In case you checked." },
      { n: "He didn't wait to see what her face did. He took the small pan off the back burner, the one that was Koromaru's, and started the rice, and in the hall the dog lay across the door with his eyes open, facing it, and let them." }
    ] },
    { after: '4/24', title: '2: yet', place: 'Naganaki Shrine · Playground', time: 'After School', music: 'tender', scene: [
      { bg: 'naganaki-shrine-spring' },
      { n: "Ken was already on the bench under the ginkgo when she came down the shrine path, sitting very straight with his backpack on his knees and both hands flat on top of it, the way you'd sit outside an office waiting to be called in. He wasn't throwing the ball. The ball was in Koromaru's mouth, and Koromaru was lying in front of the bench with it, not chewing it, just holding it, the way he'd hold something he'd been asked to keep." },
      { n: "Ken stood up when he saw her. He actually stood, like a boy in a classroom when a teacher comes in, and then seemed to realize he'd done it, and didn't sit back down, out of what looked like principle." },
      { ifFlag: 'eqx-ken-hospital', then: [
        { s: 'ken', f: 'neutral', t: "Solar-san. It's yet." },
        { s: 'ken', f: 'neutral', t: "I said I'd give you a day's notice. I wrote it yesterday. On a card. I had it in my pocket all day and I didn't give it to you because I thought, if I give it to her, then it's real, and it has to be tomorrow." },
        { n: "He took the card out of his blazer pocket and held it out. It was a library index card, folded once. In his careful pencil it said *NOTICE: Tomorrow (Saturday) after school, Tatsumi Memorial. If convenient. — Amada K.*, and under it, smaller, crossed out and then uncrossed, *please*." },
        { s: 'ken', f: 'neutral', t: "So it's late notice. It's zero days' notice. I'm sorry. That's not polite. I'd understand if you said no." }
      ], else: [
        { s: 'ken', f: 'neutral', t: "Solar-san. Would you come somewhere with me? Today? I'll explain on the way. It's not far. It's a bus." },
        { s: 'ken', f: 'serious', t: "I'd like to go to the hospital. I haven't been since February. I don't want to go on my own and I don't want to go with anybody who'll talk about it the whole way." }
      ] },
      { choose: [
        { t: "Yes. Right now.", notes: 3, then: [
          { s: 'ken', f: 'happy', t: "...Okay. Okay. Good. I have bus fare for three. Koromaru doesn't pay, but I counted him anyway, in case." }
        ] },
        { t: "(Take the card. Put it in your pocket.)", notes: 3, then: [
          { n: "She took the card and put it in the inside pocket of her blazer, carefully, the way you'd put away a ticket you'd need later, and Ken watched it go in, and something in his shoulders came down about a centimeter." },
          { s: 'ken', f: 'neutral', t: "You kept it. You don't have to keep it. It's just a notice." },
          { s: 'ken', f: 'happy', t: "...Thank you for keeping it." }
        ] },
        { t: "What changed, Ken?", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "I'll tell you on the bus. I've got it worked out. It's in order. If I tell you here it'll come out in the wrong order." }
        ] }
      ] },
      { place: 'Tatsumi · Bus', time: 'After School', bg: 'train-car-inside', soft: true },
      // BG: tatsumi-bus — the inside of a half-empty city bus in the late afternoon, sun through the windows, a boy and a white dog on the floor by the seats.
      { n: "The bus to Tatsumi was half empty and smelled of hot seats and somebody's lunch, and the driver had looked at Koromaru for a long moment at the door, and at Ken holding the lead in both hands like a contract, and at Solar, and decided it wasn't worth it. Koromaru sat on the floor between their knees with his chin on Ken's shoe and watched the doors every time they opened." },
      { ifEvent: 'eqx-knock', then: [
        { s: 'ken', f: 'neutral', t: "On the twenty-eighth. In the lounge. When everything knocked." },
        { s: 'ken', f: 'neutral', t: "The kitchen door said my name. My name the way she said it. The short way. Nobody's said it that way since. I didn't think anybody knew it." },
        { n: "He said it in his report voice, to the window, very correctly, and his hand on the lead had gone white at the knuckles, and Koromaru lifted his chin off Ken's shoe and put it on his knee instead." },
        { s: 'ken', f: 'serious', t: "It was very good. That's the part I keep thinking about. It was better than her. She was always tired when she called me in. She never sounded that sure I'd come." },
        { s: 'ken', f: 'sad', t: "I wanted to go so much. I wasn't even scared. I was in the sleeping bag and Yukari-san was holding me so tight it hurt and I wanted to get out of it and open the door more than I've ever wanted anything." },
        { s: 'ken', f: 'neutral', t: "And afterward, when it was over, I thought, there's one other person who was there. The night she died. One other person in the whole world who knows what her voice was really like. Not the good version." },
        { s: 'ken', f: 'serious', t: "I'm still angry at him. I'm allowed both. I'd just like to be angry at somebody who knows what she sounded like." }
      ], else: [
        { s: 'ken', f: 'neutral', t: "I counted. Since February. Seventy-one days I haven't been. That's more than I went, in the winter. I went sixty-four times. I'm now in deficit." },
        { s: 'ken', f: 'serious', t: "And Koromaru sat in that parking lot for two days before Shinjiro-san woke up. Two days. He didn't eat. He knew." },
        { s: 'ken', f: 'neutral', t: "Since the knocks started he's been looking at the front door like he's waiting for something again. The same way. So I thought, if he's waiting for something, I'd like to have done the things I should have done before it comes. Whatever it is. In order." }
      ] },
      { choose: [
        { t: "(Put your arm round him. Just for the bus.)", notes: 3, then: [
          { n: "She put her arm round his shoulders. He stiffened, and then didn't, and leaned, a sixth-grader on a public bus who'd have died before letting anyone from school see it, and they rode like that, past the canal and the warehouses, with Koromaru's chin on his knee and nobody saying anything." }
        ] },
        { t: "You don't have to go in, Ken. We can just go there.", notes: 3, then: [
          { s: 'ken', f: 'neutral', t: "...Just there?" },
          { s: 'solar', f: 'neutral', t: "Just there. Then you decide." },
          { s: 'ken', f: 'neutral', t: "That's a good plan. That's a very good plan. I hadn't thought of the plan where I don't have to finish." }
        ] },
        { t: "He'll be glad you came.", notes: 2, then: [
          { s: 'ken', f: 'serious', t: "You don't know that. He might not be. He might think I came to say something. I don't know what I came to say." },
          { s: 'ken', f: 'neutral', t: "...I'm going to find out on the way, I think. I hope it's before the doors." }
        ] }
      ] },
      { place: 'Tatsumi Memorial Hospital · Front', time: 'After School', bg: 'hospital-outside', soft: true },
      { n: "Tatsumi Memorial was white and square and too big for the street it was on, with a ramp and a row of benches and a long low concrete planter full of azaleas going pink along the front. Koromaru went straight to the planter. He didn't sniff it. He walked to one particular place at the end of it, by the drain, and sat down there, in the sun, facing the doors, as if he'd sat there before and the place had kept his shape." },
      { s: 'ken', f: 'neutral', t: "That's where he sat. Two days. The nurses brought him water in a kidney dish. One of them still says hello to him." },
      { n: "Dogs weren't allowed past the doors. Koromaru didn't try. He sat at his place by the planter and looked at the glass, and Ken stood beside him with the lead slack in his hand and looked at the glass too, and for a while neither of them moved, the boy and the dog, side by side, facing the same door." },
      { s: 'ken', f: 'neutral', t: "I'll go to the desk. Only the desk. I'll leave a note. Will you come to the desk?" },
      { place: 'Tatsumi Memorial Hospital · Lobby', time: 'After School', bg: 'hospital-hallway-day', soft: true },
      // BG: tatsumi-hospital-lobby — a hospital's ground-floor lobby in the afternoon: a long front desk, a row of plastic chairs, a potted rubber plant, automatic glass doors onto a sunny forecourt, a tin painted with cranes on the counter.
      { n: "The lobby smelled of floor polish and hand gel and the faint sweetish smell every hospital had, under everything, that nobody ever named. The nurse at the desk was young and round-faced and tired, and she knew Ken. Her whole face changed when she saw him, softened, the way people's faces softened when they saw a child they'd watched sit on a bench for a winter." },
      { s: 'nurse', t: "Amada-kun! Oh, look at you. You've grown. He's on the fourth floor still, you know that. Do you want me to call up?" },
      { s: 'ken', f: 'neutral', t: "No. Thank you. Not today. I'd like to leave a note. If that's within regulations." },
      { s: 'nurse', t: "It's within regulations. Here, have a card. And take one of these. Go on. Everybody does." },
      { n: "She pushed a tin across the counter. Round, painted, a little dented. Cranes on the lid, flying in a ring." },
      { n: "Solar knew the tin before she knew she knew it, the way you know a voice before the words. Her body knew it. Her stomach went to stone and her hands went cold, and the lid came off in the nurse's hand, and inside, in rows, on paper, were rice cakes. White. Round. Dusted." },
      { s: 'nurse', t: "A lady brings them for the night staff. Every Saturday. Isn't that sweet? She never comes up. She leaves them at the desk at the end of the evening and she knows all our names, every one of us, I don't know how. Mr. Hata used to love them. The old man on four." },
      { n: "Outside, through the glass doors, Koromaru had stood up." },
      { n: "He hadn't barked. He was standing at his place by the planter with all four legs set, square, his head low, looking through the glass straight at the counter, straight at the tin, and even from here, even through the doors and the lobby's soft piped music, Solar could see his lips had come back off his teeth." },
      { choose: [
        { t: "No, thank you. We just ate.", notes: 3, then: [
          { s: 'nurse', t: "Oh, you young people. Never hungry. Amada-kun?" },
          { s: 'ken', f: 'neutral', t: "No, thank you very much. He wouldn't like it." },
          { n: "He tipped his head at the glass, at Koromaru, and the nurse laughed and said what a funny dog, and put the lid back on the tin, and Ken's hand, Solar noticed, had gone very carefully into his pocket, as if to make sure it wouldn't go anywhere else." }
        ] },
        { t: "(Take one, to be polite. Close your hand on it.)", notes: 1, then: [
          { n: "She took one. It was cool and soft and heavier than it looked, and it left a fine white dust on her fingers that she could feel, on the pads, like chalk. Through the glass Koromaru made a sound she heard through the doors, one bark, short and hard and flat, like a door slammed." },
          { n: "On the way out she dropped it in the bin by the automatic doors without looking at it. Koromaru watched her hand the whole way to the bin and didn't sit down again until it was empty." }
        ] },
        { t: "Who is she? The lady.", notes: 2, then: [
          { s: 'nurse', t: "Oh, I don't know her name. Isn't that awful? She's from the river side, I think. Wears gloves. Very old-fashioned. She always asks how we're sleeping." },
          { n: "She said it fondly. She put the lid back on the tin and patted it, twice, with the flat of her hand, the way you'd pat a dog that had been good." }
        ] }
      ] },
      { n: "Ken wrote his note at the end of the counter, standing, bent over the card with his tongue in the corner of his mouth the way he'd written his composition. Solar didn't read it. She saw how short it was. One line, and then a long time looking at the line, and then a second line, smaller, and he folded it twice and gave it to the nurse with both hands and a small stiff bow." },
      { place: 'Tatsumi Memorial Hospital · Front', time: 'Evening', bg: 'hospital-outside', soft: true },
      { n: "Outside the sun had gone round behind the building and the forecourt was in shade. Koromaru came to Ken at once and leaned, his whole weight, against Ken's legs, and Ken knelt and put his face in the dog's neck for a moment and stayed there." },
      { n: "Then Solar looked up, because something made her, and on the fourth floor, in one of the long row of identical windows, there was somebody standing." },
      { n: "Tall, in a gray hospital shirt, one shoulder lower than the other. He didn't wave. Shinjiro didn't wave at things. He lifted his right hand, slowly, the bad one, up into the window where they could see it, and it wasn't open. It was a fist. It was held there, shaking a little, the knuckles toward them." },
      // CG: eqx-ken-window — a boy in a school uniform kneeling by a white dog in a hospital forecourt at dusk, looking up; far above, in one window of a long white building, a tall figure holding a closed fist up against the glass.
      { n: "Ken saw. Ken stood up. He looked at the window for a long time with his face doing nothing at all. Then he lifted his own right hand, and made a fist of it, and held it up at the window, and they stood like that, the boy and the man four floors apart, two fists, until the man's arm couldn't hold it any longer and came down, slowly, out of sight." },
      { choose: [
        { t: "(Say nothing. Let him have it.)", notes: 3, then: [
          { n: "She said nothing. Ken lowered his hand. He looked at it, the fist, and opened it, and closed it again, as if checking it still did both." }
        ] },
        { t: "Want to go up?", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "No. Not today. That was enough. That was the right amount." },
          { s: 'ken', f: 'happy', t: "...That was yet. Next time can be the rest of it." }
        ] },
        { t: "What did you write, Ken?", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "The first line was *I heard her voice. It wasn't her.*" },
          { s: 'ken', f: 'sad', t: "The second line was *I'll come back.* I wrote it small so it wouldn't be a promise yet. I think it's a promise anyway. I think small ones count." }
        ] }
      ] },
      { place: 'Iwatodai Dorm · Front Hall', time: 'Night', bg: 'iwatodaidorm-livingroom-night-spring', soft: true },
      { n: "On the bus home Ken fell asleep against her shoulder with his mouth open, which he'd have denied to his grave, and woke at the Iwatodai stop and said he hadn't been asleep, he'd been resting his eyes for efficiency." },
      { s: 'ken', f: 'neutral', t: "Solar-san. The dorm. Mitsuru-san said one more year. Last year. And then this year she said one more year again." },
      { s: 'ken', f: 'neutral', t: "I counted. If it's one more year, it's three hundred and thirty-one days from today. I'd like it to be more. I'm not asking anybody. I'm just saying the number." },
      { n: "He said it to the window, very correctly. Koromaru, on the floor between their knees, had lifted his head at the word *more*, and looked up at Ken, and kept looking." },
      { n: "At the dorm Koromaru went to the front door without stopping for water and turned round twice and lay down along the bottom of it. Ken's futon was already there in the hall, made up, the corners square. He lay down on it in his uniform and was asleep almost at once, one arm flung out across the boards, his hand resting on the dog's back." },
      { n: "Koromaru didn't sleep. He lay with his nose to the gap under the door and his eyes open, and every time a car went by on the hill outside his ears turned, and every time it didn't stop they turned back, and under Ken's hand, slow, steady, he breathed, and waited, and kept the door." }
    ] },
    { after: '6/5', title: '3: request', place: 'Naganaki Shrine · Playground', time: 'After School', music: 'tender', scene: [
      { bg: 'naganaki-shrine-summer' },
      // BG: naganaki-shrine-playground-summer — the small playground below Naganaki Shrine in early summer: wet sand, a swing set, a bench under a heavy green ginkgo, puddles, the stone path up to the torii.
      { n: "It had rained all morning and stopped at noon, and the playground below the shrine hadn't dried. The sand under the swings was dark and packed and printed all over with paw marks, the slide had a puddle at the bottom of it like a full stop, and the ginkgo over the bench dripped every time the wind moved, big slow drops that landed on the back of your neck exactly when you'd stopped expecting them." },
      { n: "Ken was throwing the ball. Koromaru was bringing it back. That was the same. What was different took Solar a minute, standing at the top of the path, to see." },
      { n: "Ken threw it toward the swings, and Koromaru went after it like a shot and brought it back. Ken threw it toward the shrine steps, and Koromaru brought it back. Ken threw it, hard, a good throw, a throw he'd clearly been practising, out over the low fence at the bottom of the playground, toward the road that ran down to the river." },
      { n: "Koromaru ran to the fence. Stopped at it. Sat down, exactly at the line of it, his tail flat on the wet ground, and looked at the ball lying in the road, and looked back at Ken, and didn't move." },
      { s: 'ken', f: 'neutral', t: "...He does that now. Every time. Any ball that goes that way, he won't go. I have to go and get it myself." },
      { s: 'koromaru', f: 'neutral', t: "Wuff." },
      { s: 'ken', f: 'serious', t: "I'm not angry with you. I'm stating a fact. It's a very consistent fact. I've tested it nineteen times." },
      { choose: [
        { t: "(Go and get the ball for him.)", notes: 2, then: [
          { n: "She went over the fence and picked it up out of the road. It was wet and gritty and cold, much colder than a ball should be on a warm afternoon, cold the way the road was cold, and she looked down the hill toward the river and the old houses with their gardens, and then didn't, and came back." },
          { n: "Koromaru met her at the fence and took the ball out of her hand very gently and carried it to Ken, and dropped it at his feet, and sat on it." }
        ] },
        { t: "Nineteen times?", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "I write them down. If you're going to say something about a dog, you should have data. Otherwise it's just a feeling, and people can argue with feelings." }
        ] },
        { t: "(Crouch down at the fence beside Koromaru.)", notes: 3, then: [
          { n: "She crouched down beside him. He leaned his whole side against her shoulder, warm and heavy and damp, and pressed, as if he were trying to move her back from the fence an inch at a time, and she let him." }
        ] }
      ] },
      { n: "They sat on the bench under the ginkgo, Ken at one end with his backpack on his knees, Solar at the other, Koromaru in the middle on the wet ground with his chin on Ken's shoe. The ginkgo dripped. Ken flinched every time, a small exact flinch, and pretended he hadn't." },
      { ifEvent: 'eqx-last-grain', then: [
        { ifBefore: '9/1', then: [
          { n: "He had a napkin in his lap with something wrapped in it. He unfolded it. It was toast, two slices, burnt black at the edges and dark brown all over, and he broke off a corner and ate it, and the crack of it was loud in the wet quiet." },
          { s: 'ken', f: 'neutral', t: "Shinjiro-san makes it for me. Every morning. He burns it on purpose. He says he's not good enough with his hand yet to burn it by accident, so he has to do it on purpose." },
          { s: 'ken', f: 'neutral', t: "I can't eat soft things. Since. It's fine. It's temporary. Rice is going to be very difficult for a while but toast is very reliable." },
          { n: "He ate the corner. He didn't say since what. He didn't have to. He'd been the one at the boarding house gate at half past five that morning, and Koromaru had been the one pulling him there, at a run, down the river road, the road the dog had refused every day since April and took that morning like he'd known the way all along." }
        ], else: [
          { n: "He had a napkin in his lap with a rice ball in it. Soft rice. Shinjiro's, lopsided where the bad hand had shaped one side. He ate it slowly, in small, organized bites, the way you'd take a test you'd studied for and still didn't trust." },
          { s: 'ken', f: 'neutral', t: "I'm eating rice again. Since the first. Shinjiro-san put it in front of me at breakfast and didn't say anything and I ate it. He still makes the toast as well. In case. He says the toast isn't going anywhere." }
        ] },
        { s: 'ken', f: 'sad', t: "His plate was clean, Solar-san. He'd wiped it. That's the only thing I keep thinking. Who wipes their plate." },
        { n: "Koromaru lifted his chin off Ken's shoe and put it on Ken's knee instead, on the napkin, and Ken let him, and didn't say anything else about it, and neither did she." }
      ], else: [
        { n: "He had a napkin in his lap with a rice ball in it, from the dorm kitchen, Shinjiro's, a little lopsided where the bad hand had shaped one side. He ate it in small, organized bites, rotating it, the way he did everything." },
        { s: 'ken', f: 'happy', t: "Shinjiro-san made this. With both hands. The left side's better. Don't tell him I said that. Actually, you can tell him. He'd like that I noticed." }
      ] },
      { n: "He wiped his fingers on the napkin, one at a time, and folded it in four, and put it in his backpack, and took out his pencil case, and from the pencil case, from under the pencils, a small square of folded card. An index card. Library stock, the same as the notice in April." },
      { n: "He didn't give it to her. He held it in both hands on top of the backpack and looked at it." },
      { s: 'ken', f: 'neutral', t: "Solar-san. Do you remember in April. I said three hundred and thirty-one days. I said I'd like it to be more, and that I wasn't asking anybody." },
      { s: 'ken', f: 'neutral', t: "I've been counting down. In the back of my maths book. It's not good for my maths book." },
      { n: "He opened the maths book and showed her. The inside back cover was a grid of tiny pencil numbers, three hundred and thirty-one at the top left, and every day since crossed through with one neat diagonal line, and the uncrossed ones going on and on down the cover and onto the facing page, very small, very even, like stitches." },
      { s: 'ken', f: 'serious', t: "Mitsuru-san hasn't written anything on the renewal. I know because I asked Aigis-san and Aigis-san doesn't lie. She said the box was blank. She said Mitsuru-san wrote one year and then crossed it out and hasn't written anything since." },
      { s: 'ken', f: 'neutral', t: "So I thought, if the box is blank. Then it's not decided. And if it's not decided, then I'm allowed to have an opinion. Formally." },
      { n: "He held out the card." },
      { n: "She took it. It was folded once. Inside, in his careful pencil, with the edges of the letters gone over twice so they were darker than the rest, it said: *REQUEST. That Solar-san stay. Not one more year. All of them. — Amada K.* And under that, small, not crossed out this time, not crossed out and restored, just written, plainly, and left: *please.*" },
      // CG: eqx-request-card — a wet playground under a ginkgo; a boy on a bench holding out a folded index card with both hands, very formally; a white dog sitting upright on the ground between him and a girl, watching the card.
      { s: 'ken', f: 'serious', t: "I know what I said. I said I wasn't asking anybody. I've changed my mind. I'm allowed to change my mind. I'm twelve." },
      { s: 'ken', f: 'sad', t: "People keep going, Solar-san. My mom went. Shinjiro-san nearly went. You went. Tanabe-san went, and I only ever saw him once, through the guesthouse window, doing a crossword." },
      { ifEvent: 'eqx-last-grain', then: [
        { s: 'ken', f: 'sad', t: "And Suemitsu-san. And I was the one who found— I was the one who was there first. So I think I've earned it. I think I've earned one request." }
      ], else: [
        { s: 'ken', f: 'sad', t: "So I think I've earned it. I think one request is a reasonable amount. For a year like that." }
      ] },
      { s: 'ken', f: 'neutral', t: "If you say yes, I'll stop counting. I'll rub the whole thing out. My maths book will be very grateful." },
      { n: "He didn't look at her. He looked at the dog. Koromaru sat between them with his ears up and his eyes going from the card in Solar's hand to Ken's face and back, steady, alert, the way he watched a door; he didn't growl, and he didn't wag, and he didn't lie down. He waited, the way he waited for everything, to see what the people would do." },
      { n: "The ginkgo dripped. A drop landed on the card in her hand and spread, one soft gray circle, across the word *stay*." },
      { choose: [
        { t: "Where I go is mine, Ken. What you hope is yours. I'm not going to answer it for either of us.", notes: 2, tally: { choose: 1, 'asks.ken-koromaru': 'choose' }, then: [
          { n: "He went very still. For a second she thought he was going to cry, and then she saw that he wasn't, that he was doing the other thing, the thing he did instead, which was think, hard, with his whole face." },
          { s: 'ken', f: 'sad', t: "...That isn't a yes." },
          { s: 'solar', f: 'neutral', t: "No." },
          { s: 'ken', f: 'neutral', t: "It isn't a no either." },
          { s: 'solar', f: 'neutral', t: "No." },
          { s: 'ken', f: 'serious', t: "...You're allowed both. That's what you mean. Hoping and not knowing. I'm allowed both." },
          { n: "He held his hand out for the card. She gave it back. He folded it once more, smaller, and put it in his breast pocket and buttoned the pocket, and sat with his hand over it, and his chin was doing something difficult, and he didn't let it." },
          { s: 'ken', f: 'neutral', t: "I'll keep it, then. For my records. In case I need it later." },
          { n: "Koromaru got up, and put his front paws on the bench, and his chin on Ken's shoulder, heavily, the whole weight of his head, and Ken put his arm round the dog's neck and his face in the white fur and stayed there for a while, and Solar looked at the swings, and let him." }
        ] },
        { t: "(Fold the card and put it in your pocket.) Okay, Ken. I'll stay.", notes: 3, tally: { cakes: 1, 'asks.ken-koromaru': 'yes' }, then: [
          { n: "She folded it along his fold and put it in her pocket, and he watched it go in, and then his face did the thing it had done at the hospital in April when the nurse said Shinjiro was awake: it opened all at once, completely, and then he got hold of it and closed it again, fast, because he was twelve and in public." },
          { s: 'ken', f: 'happy', t: "...Thank you. Thank you very much. I'll— I'll inform Mitsuru-san. Not inform. Mention. I'll mention it." },
          { n: "He took the maths book out of his backpack again and opened it to the back cover, and took out his eraser, and started rubbing out the numbers, three hundred and thirty-one and all the ones after it, very thoroughly, in small hard circles, the eraser crumbs gathering in his lap in a gray drift, and he didn't stop till the whole cover was smudged and blank." },
          { n: "Koromaru watched him do it. When Ken had finished, the dog picked the ball up off the wet ground and dropped it in his lap, on the eraser crumbs, and Ken threw it, toward the swings, a good throw, and it was an ordinary afternoon again for exactly as long as it took to bring it back." }
        ] },
        { t: "I can't promise you that, Ken. I don't know where I'll be.", notes: 2, tally: { 'asks.ken-koromaru': 'no' }, then: [
          { s: 'ken', f: 'sad', t: "...Yes. That's very honest. I appreciate honesty." },
          { n: "He took the card back. He didn't fold it. He held it open on his knee and looked at the wet circle on it, and then he took out his pencil and wrote something small under *please*, and she didn't see what, and he put it back in his pencil case, under the pencils, where it had been." },
          { s: 'ken', f: 'neutral', t: "Then I'll keep counting. Somebody should know how many there are." },
          { n: "Koromaru put his head on Ken's knee. Ken put his hand on the dog's head and left it there, and opened the maths book to the back, and crossed out today, very neatly, with one diagonal line." }
        ] }
      ] },
      { place: 'Iwatodai · The Post Office Corner', time: 'Evening', bg: 'outside-shrine-day', soft: true },
      { n: "They walked home the long way, because there wasn't another way. At the corner by the post office the road split, left up the hill to the dorm, right down to the river, and Ken slowed without seeming to know he was doing it, and Koromaru stopped altogether." },
      { n: "He stood in the middle of the pavement with his legs set and the lead tight and his head turned toward the river road, toward the dark gardens and the old tiled roofs and the persimmon tree you could just see over them, heavy with green fruit, and he didn't growl. That was the new thing. In April he'd growled. Now he just stood and looked, very still, the way you look at something you've decided to remember." },
      { ifEvent: 'eqx-hunted', then: [
        { s: 'ken', f: 'neutral', t: "Twos. Mitsuru-san said twos. He counts as one. I asked. She said he counts as one and a half." }
      ] },
      { s: 'ken', f: 'neutral', t: "In April a lady at that gate down there said my name before I'd told her. Ken-kun, you're getting so tall. I've been thinking about it. I filed it under Mitsuru-san must have said. I've been thinking I filed it wrong." },
      { s: 'ken', f: 'neutral', t: "Mitsuru-san tells everybody everything. It's very likely she told her. It's the most likely thing. I just haven't been able to make it the only thing." },
      { n: "Koromaru turned his back on the river road, all at once, and leaned on the lead toward the hill, toward the dorm, pulling, hard, and Ken let himself be pulled, and Solar went with them." },
      { n: "At the dorm the dog went straight to the front door and turned twice and lay down along the bottom of it, nose to the gap, and Ken's futon was there in the hall already, and Ken sat on it and unlaced his shoes and lined them up, toes to the wall, and took the maths book out of his bag and put it under his pillow, and lay down with his hand on the dog's back." },
      { n: "In the red, at the bottom of the door, Koromaru's ears turned toward the river, and stayed there, the whole hour, and he didn't sleep, and he didn't move, and under Ken's open hand he breathed, slow, steady, keeping the door." }
    ] },
    { after: '6/29', title: '4: stay', place: 'Naganaki Shrine · Playground', time: 'After School', music: 'joy', scene: [
      { bg: 'naganaki-shrine-summer' },
      // BG: naganaki-shrine-playground-summer (as rank 3) — the same small playground on a muggy break in the rainy season, puddles drying in the sand, the swings still wet, steam coming off the stone path.
      { n: "The rain had stopped for an afternoon, the way it did sometimes in the last week of June, not because it was finished but because it needed to catch its breath, and the whole of the shrine hill was steaming. The stone path smoked. The sand under the swings was drying in pale patches round the puddles like a map of somewhere, and the ginkgo over the bench had stopped dripping and started to smell green, the heavy wet green of something growing too fast to be polite about it." },
      { n: "Ken had a book. A library book, in a plastic cover, open on the bench beside him with a stone on each page to keep it flat: *Your Dog and You: A Complete Course in Obedience*, with a photograph on the cover of a golden retriever looking at its owner with the expression of a creature that had never once had an independent thought." },
      { n: "Koromaru was sitting in the sand in front of him. Very upright. Ears forward. Tail still. He looked, Solar thought, coming down the path, like a dog who'd been given an exam he'd already read the answers to and was being patient about it." },
      { s: 'ken', f: 'neutral', t: "Solar-san. Good. You can be a witness. Sit." },
      { n: "Solar sat down on the bench. So did Koromaru, harder, in the sand, though he was already sitting." },
      { s: 'ken', f: 'neutral', t: "Not you. Him. I mean, you as well, thank you. He already knows sit. I'm checking the basics. You always check the basics before you do anything advanced. Chapter two." },
      { ifChoice: { 'asks.ken-koromaru': 'yes' }, then: [
        { n: "He was lighter. That was the first thing Solar saw, before the book or the dog. Not taller, though he was that too; lighter, the way a kid is lighter on the first day of the holidays, his shoulders loose under his shirt and his voice a half-tone higher than it had been in the rain under the ginkgo." },
        { s: 'ken', f: 'happy', t: "I bought a calendar. For next year. It's got a different Featherman on every month. I've put everybody's birthday on it. Yours is in June. I asked Hanni-san. She checked me twice." },
        { s: 'ken', f: 'neutral', t: "I've put all of them. Everyone's. Next year's. It took a whole evening. I've never had a calendar with that many people on it." }
      ], else: [ { ifChoice: { 'asks.ken-koromaru': 'choose' }, then: [
        { n: "The card was in his breast pocket. Solar could see the corner of it, through the white cotton, the folded edge of a library index card, buttoned in. He saw her see it, and put his hand over the pocket, flat, briefly, and then took it away and turned a page." },
        { s: 'ken', f: 'neutral', t: "I take it out on bad days. Not to read it. I know what it says. Just to have it out. It's for my records." }
      ], else: [
        { n: "The maths book was in his backpack. He didn't take it out. He didn't need to. Solar could see it in the way he looked at her, quick and counting." },
        { s: 'ken', f: 'neutral', t: "Two hundred and sixty-five. If you were wondering. You weren't. I'm just saying the number." }
      ] } ] },
      { s: 'ken', f: 'neutral', t: "Koromaru. Paw." },
      { n: "Koromaru held up a paw. Gravely. The left one. He held it there in the air until Ken took it and shook it, and then took it back and put it down exactly where it had been." },
      { s: 'ken', f: 'neutral', t: "Down." },
      { n: "He lay down. All of him, flat, chin on his paws, the way he lay along the bottom of the dorm door at night, and looked up at Ken from under his white eyebrows." },
      { s: 'ken', f: 'neutral', t: "Wait." },
      { n: "Ken took the ball out of his pocket and put it on the sand, a meter in front of the dog's nose, and walked away from it, backward, four steps. Koromaru looked at the ball. He looked at Ken. He didn't move. Not a whisker. He waited the way he waited for everything, entirely, with his whole body, until Ken said *okay*, and then he was up and the ball was in his mouth and he'd dropped it on Ken's shoe before Ken had finished saying the word." },
      { s: 'ken', f: 'happy', t: "Perfect. He's perfect. He's always perfect at *wait*. Now. Chapter four." },
      { s: 'ken', f: 'serious', t: "*Stay.* The book says it's the most important one. It says a dog who'll stay will never run into a road." },
      { n: "He put Koromaru back in a sit, and held up his flat hand, palm out, the way the book's photograph showed, and said *stay* very firmly, the way you'd say it to a much bigger dog, and walked away. Backward. One step. Two." },
      { n: "Koromaru got up and walked after him." },
      { n: "Not fast. Not like a dog who'd misunderstood. He got up deliberately, the way you'd get up from a table, and followed Ken across the sand at exactly the speed Ken was going, and when Ken stopped, he stopped, a body's length off, and sat down again, and looked up at him." },
      { s: 'ken', f: 'neutral', t: "...Every time. Sixty-one times. He does *wait*. He does *down*. He doesn't do *stay*. If I say *stay* and walk away, he comes with me. If I say it and stand still, he stays, but that's not staying, that's just being where I am." },
      { s: 'ken', f: 'serious', t: "I don't understand it. He stays at the door all night. Nobody tells him to. He's the best at staying of anyone I've ever met." },
      { choose: [
        { t: "Maybe he only stays when it's his idea.", notes: 3, then: [
          { n: "Ken looked at the dog. The dog looked back. Something went across Ken's face, slowly, the expression of somebody being handed a sum with the answer already written in at the bottom." },
          { s: 'ken', f: 'neutral', t: "...That's not in the book." },
          { s: 'ken', f: 'neutral', t: "That's not in the book at all. The book thinks he's a golden retriever." }
        ] },
        { t: "(Try it yourself. Hand up. Stay.)", notes: 2, then: [
          { n: "She stood up and held her hand up, palm out, the way Ken had, and said *stay*, and walked backward across the sand, one step, two." },
          { n: "Koromaru got up and walked after her. Then, halfway, he stopped, and looked back at Ken on the bench, and then at her, and sat down in the middle of the sand exactly between the two of them, at the same distance from both, and looked very pleased with himself." },
          { s: 'ken', f: 'surprised', t: "...Oh. He's being fair. He's never been fair before. He usually just picks you." }
        ] },
        { t: "He's not a road-running dog, Ken.", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "No. He's not. He's never run into a road in his life. He stops at every curb by himself. He stops at the river road. He stops at things that aren't even there." },
          { s: 'ken', f: 'neutral', t: "...So maybe he doesn't need chapter four. Maybe I'm the one who wanted chapter four." }
        ] }
      ] },
      { n: "Ken closed the book, carefully, and took the stones off the pages and put them back where he'd found them, under the climbing frame, in a neat row. He sat down on the bench with the book on his knees. Koromaru came and lay down across his shoes, the whole warm weight of him, the way he lay across the door." },
      { s: 'ken', f: 'neutral', t: "I wanted him to learn it so I could use it on people. That's the truth. I wanted to know how you do it. How you make somebody stay." },
      { s: 'ken', f: 'neutral', t: "It's not a very nice thing to want. I know that. I thought if I could do it with him first, it'd be practice." },
      { choose: [
        { t: "Teach him *come* instead. He's very good at coming back.", notes: 3, flag: 'eqx-ken-come', then: [
          { n: "Ken looked at her. Then down at the dog on his shoes. Then he opened the book again, to the contents page, and ran his finger down it, and stopped, and read, and looked up." },
          { s: 'ken', f: 'neutral', t: "...Chapter three. *The recall.* I skipped it. I thought he already knew it." },
          { s: 'ken', f: 'happy', t: "He does already know it. He's the best at it of anybody. But I'd like to practise it anyway. I'd like to have a word for it." },
          { n: "He stood up, and walked to the far side of the playground, past the swings, right to the fence, and turned round, and crouched, and held his arms out, and said *Koromaru, come* in a voice that wasn't firm at all, that was just a boy calling his dog, and Koromaru was off his shoes and across the sand like something fired, and hit him in the chest, and knocked him flat on his back in the wet sand, and stood on him, and Ken lay there laughing so hard he couldn't get up." }
        ] },
        { t: "It's not a bad thing to want. It's just not a thing you can make.", notes: 3, then: [
          { s: 'ken', f: 'neutral', t: "...No. I've noticed. Sixty-one times." },
          { s: 'ken', f: 'neutral', t: "I'm going to write that down. *You can't make it.* I'll put it under the other thing. The allowed-both thing. It's getting to be quite a long list." }
        ] },
        { t: "(Ruffle his hair. Then the dog's.)", notes: 2, then: [
          { n: "She ruffled his hair, and he fixed it at once with both hands, and then she ruffled Koromaru's ears, and Koromaru, after a moment's thought, shook his whole head, hard, ears flapping, the way you'd fix your hair if you didn't have hands, and Ken laughed out loud, a sudden real laugh, and couldn't stop." }
        ] }
      ] },

      { place: 'Naganaki Shrine · Steps', time: 'Evening', bg: 'naganaki-shrine-summer', soft: true },
      { n: "They stayed till the light started to go. Ken threw the ball. Koromaru brought it back. Solar sat on the bench and watched the steam come off the path and the sky over the bay go from white to yellow to a long low pink, and listened to the frogs start up in the shrine's little pond behind the trees, and for an hour nothing in the world was wrong at all." },
      { n: "Then Koromaru dropped the ball at Ken's feet, and didn't wait for it to be thrown. He turned and trotted off, across the playground, up the stone path toward the shrine, steady, purposeful, not looking back, and Ken stood up." },
      { s: 'ken', f: 'neutral', t: "...He does this. Since May. Every evening, when the light goes. Come on." },
      { n: "They followed him up. The stone steps, wet and green at the edges, the torii at the top black against the pink sky, the shrine's little hall shut up for the night with its paper lanterns unlit. Koromaru went past all of it. He went to the top of the far steps, the old ones on the river side of the hill that nobody used, that went down steep through the trees toward the town below, and sat down at the very top of them, square, his front paws together, and looked down." },
      { n: "Not at anything. Down the steps, and through the trees, and down the hill, toward the river and the old tiled roofs along it, very still, the way he lay at the door. His ears forward. His tail flat on the stone. Waiting." },
      // CG: eqx-koromaru-steps — a white dog sitting alone at the top of steep old stone steps at a hilltop shrine at dusk, his back to the viewer, looking down through dark trees toward the roofs of a riverside town and a river catching the last pink light; a torii gate behind him.
      { s: 'ken', f: 'neutral', t: "He used to do this before. Before I knew him properly. Before any of us." },
      { s: 'ken', f: 'neutral', t: "He belonged to the priest here. The old one. He's gone; he died before I came to the dorm, there was an accident. And Koromaru stayed here. At the shrine. Every day. On his own. Waiting for him to come back up the steps. Months. Everybody in Iwatodai knew about the white dog at the shrine who waited." },
      { s: 'ken', f: 'neutral', t: "Then he stopped, and came to live with us. Mitsuru-san says it's because he understood. That the priest wasn't coming." },
      { s: 'ken', f: 'serious', t: "He started again in May. Here. Every evening. Same steps. Same way he sits." },
      { s: 'ken', f: 'serious', t: "Before, he was waiting for somebody who wasn't coming back. I didn't like it, but I understood it. Now it's like he's waiting for something that *is* coming." },
      { s: 'ken', f: 'neutral', t: "I like that less. I'm not scared. I'd just like to be clear that I like it less." },
      { choose: [
        { t: "(Sit down on the top step beside him.)", notes: 3, then: [
          { n: "She sat down on the wet stone beside the dog, at the top of the old steps, and looked down where he was looking. The trees. The roofs. The river, catching the last of the pink. Over one wall, a dark round shape of a tree she knew. Koromaru didn't look at her. He leaned. His whole side, warm and damp, against her arm, and kept his eyes on the town." }
        ] },
        { t: "Koromaru. Come on. Home.", notes: 2, then: [
          { ifFlag: 'eqx-ken-come', then: [
            { n: "He didn't move. Then Ken, behind her, said *Koromaru, come*, very quietly, in the voice from the playground, not firm at all. The dog's ears turned. He looked once more down the steps toward the river, a long look, the way you'd look at something to be sure of where you'd left it. Then he got up and came, and sat on Ken's foot." },
            { s: 'ken', f: 'neutral', t: "...Chapter three. It works. I'm putting that in the notebook." }
          ], else: [
            { n: "He didn't move. Not for her and not for Ken. He sat until the last of the pink had gone off the river and the streetlamps had come on along it, one by one, and then he got up on his own, all at once, and turned his back on the steps and came past them both down the other side of the hill toward the dorm, as if a shift had ended." }
          ] }
        ] },
        { t: "What do you think he's waiting for, Ken?", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "I don't know. I asked Aigis-san to scan down there once. She said there was nothing on the steps." },
          { s: 'ken', f: 'serious', t: "She said there was nothing on the steps very carefully. Like there was something somewhere else and she'd been asked not to say where." }
        ] }
      ] },
      { place: 'Iwatodai Dorm · Front Hall', time: 'Night', bg: 'iwatodaidorm-livingroom-night-spring', soft: true },
      { n: "At the dorm Koromaru went to the front door and turned round twice and lay down along the bottom of it, nose to the gap. Ken's futon was there in the hall, made, square. Ken put the library book on the shoe shelf, face down, where the golden retriever couldn't see anything." },
      { n: "Then he crouched down by the dog, and put his hand flat on the white back, and said something very low that Solar, on the stairs, almost didn't catch." },
      { n: "Not *stay*. She'd thought it would be *stay*." },
      { s: 'ken', f: 'neutral', t: "...Good boy. You can go when you want. I'm just saying." },
      { n: "Koromaru didn't go. He lay with his nose to the gap and his eyes open and Ken's hand on his back, and at midnight, in the red, when everything in the house went still and the coffins came up in the beds upstairs, he was the only thing on the ground floor still breathing, slow, steady, keeping the door, because it was his idea." }
    ] },
    { after: '8/17', title: '5: after obon', place: 'Naganaki Shrine · Playground', time: 'Daytime', music: 'tender', scene: [
      { bg: 'naganaki-shrine-summer' },
      { n: "Ken was waiting at the bottom of the shrine steps at nine in the morning with a beach towel round his neck and a plastic bucket in one hand and Koromaru's lead in the other, and the look of a boy who'd been waiting since seven and had decided to pretend he'd just arrived." },
      { s: 'ken', f: 'neutral', t: "Solar-san. Good morning. You said the beach. On Tuesday. Twos." },
      { s: 'ken', f: 'neutral', t: "We were going to go on the twenty-eighth of July. Then we didn't, because of the whiteboard. Then we didn't because of Suemitsu-san. I've had this bucket on my desk for three weeks. It's become symbolic." },
      { n: "Koromaru, at the end of the lead, was already facing the station. He had been, Ken said, since half past seven. He knew the word. Nobody had said it in front of him for three weeks, and he'd known anyway, the way he knew things." },
      { choose: [
        { t: "Then let's go before it gets any more symbolic.", notes: 3, then: [
          { s: 'ken', f: 'happy', t: "Yes. Thank you. That's exactly right. Koromaru, beach." },
          { n: "At the word Koromaru's whole back end went, side to side, so hard his front feet came off the ground, and he hauled them both down the street toward the station like a sled dog." }
        ] },
        { t: "(Take the bucket from him.)", notes: 2, then: [
          { n: "She took the bucket, and he let her, and then looked at his empty hand for a moment as if he'd forgotten what you did with one, and put it on the dog's head instead." }
        ] }
      ] },

      { place: 'Port Island · Seaside Park Beach', time: 'Daytime', bg: 'port-island-seaside-park', soft: true },
      // BG: eqx-seaside-beach-august — the small sandy beach below Seaside Park on Port Island in late August, almost empty, a few umbrellas, the bay flat and glittering, a long concrete seawall behind, the bridge far off in haze.
      { n: "The beach below Seaside Park was a short curve of yellow sand between the seawall and the bay, and it should have been full. It was the middle of August and thirty-three degrees. There were four umbrellas on it. A family with a cool box. Two old men fishing off the end of the breakwater. A girl in a sun hat reading under a tree. The sea was flat and blue and glittering all the way to the haze where the bridge was, and nobody was in it." },
      { s: 'ken', f: 'neutral', t: "It's after Obon. Nobody swims after Obon. My mom used to say." },
      { s: 'ken', f: 'neutral', t: "There's jellyfish. That's the real reason. But my mom said it's because the dead go back on the sixteenth, and some of them don't want to, and they hang about in the water, and if you swim out too far they take hold of your ankles. Because they'd like company. On the way." },
      { s: 'ken', f: 'neutral', t: "It's a story for children. So they don't drown. I know that. I'm not swimming anyway. I'm going to make a structure." },
      { n: "He made a structure. He knelt in the wet sand at the edge of the tide with the symbolic bucket and built something that wasn't a castle, he said, it was a fortification, with a moat and three walls and a gate he made very carefully out of a flat shell, and Solar dug the moat, as instructed, and Koromaru ran." },
      { n: "He ran the length of the beach and back, flat out, white against the yellow sand, ears inside out, for the pure joy of it, and stopped to bark at a gull, and ran again. He dug up a crab, a tiny gray one, and stood over it with enormous seriousness while it walked sideways away from him, and let it go, and looked at Ken as if to ask whether that had been correct. He waded in up to his knees at the edge and bit the small flat waves as they came in, one after another, and came out shaking himself all over the fortification." },
      { s: 'ken', f: 'surprised', t: "Koromaru! The *east wall*." },
      { n: "But every time a wave came in further than the last one, every single time, he stopped whatever he was doing and came back. Not to Ken. To the water's edge, in front of Ken. He stood with his paws in the wash between the boy and the sea, facing out, and waited till it went back, and then went off again." },
      { n: "Solar watched him do it twelve times before she was sure. He was standing between them and the water. Every wave. Like a door." },
      { ifFlag: 'eqx-ken-come', then: [
        { n: "Once, when he'd gone further than usual, up to his chest, chasing a bit of driftwood, Ken looked up from his gate and said *Koromaru, come* in the playground voice, not loud, and the dog turned in the water at once, with the driftwood in his mouth, and came straight up the sand and laid it on the east wall as if it had been the plan all along." },
        { s: 'ken', f: 'happy', t: "Chapter three. I practise every day. He's practising too. He's practising letting me think I'm teaching him." }
      ] },
      { choose: [
        { t: "He's guarding you from the sea.", notes: 3, then: [
          { s: 'ken', f: 'neutral', t: "I know. I saw. He's never done that before. He swam in the river all last summer. He swam after Junpei-san's sandal." },
          { n: "He looked at the dog, at the edge, facing out at the flat bright water with his paws in the wash." },
          { s: 'ken', f: 'neutral', t: "...Maybe he knows the story. It's a very old story. Maybe dogs heard it first." }
        ] },
        { t: "(Get up. Stand at the edge beside him.)", notes: 2, then: [
          { n: "She stood up and went down to the edge and stood beside him with the warm wash going over her feet and sucking the sand out from under her heels. Koromaru glanced up at her. Then he moved, a little, so that he was in front of her as well, and faced the sea again, and she felt a small cold thing go down the back of her neck in thirty-three degrees, and stayed anyway, till the wave went out." }
        ] }
      ] },
      { n: "At noon they ate on the seawall in the shade of the one tree. Ken unwrapped his lunch from a napkin. Toast. Four slices, cut into triangles, burnt black at every edge and dark brown all over, cold, and stacked very neatly." },
      { s: 'ken', f: 'neutral', t: "Shinjiro-san. He gets up at six and makes it before he goes to physio. He does the edges on purpose. He says you can't get soft toast wrong." },
      { n: "There was something else in the napkin. A rice ball, wrapped separately in plastic, white, soft, lopsided where the bad hand had shaped one side. Ken looked at it, and didn't unwrap it, and put it on the wall between them." },
      { s: 'ken', f: 'neutral', t: "He puts one in every day. In case. He doesn't say anything. I don't eat it. Every night it's still in my bag and every morning there's a new one and the old one's gone and nobody says anything about where." },
      { s: 'ken', f: 'neutral', t: "It's been three weeks. I'm going to eat one. I can tell. Not today. But the toast's getting easier to look at things past." },
      { choose: [
        { t: "(Break it in half. Eat your half. Leave his on the wall.)", notes: 3, then: [
          { n: "She unwrapped it and broke it in two, the soft rice giving under her fingers, and ate her half, slowly, and it was good, salted plum in the middle, a little lopsided, a little too much salt the way Shinjiro always did it. She put Ken's half back on the plastic on the wall, between them, and didn't say anything, and didn't look at it." },
          { n: "Ken looked at it for a long time. He didn't eat it. But when they got up to go, he wrapped it up again, very carefully, and put it in his bag, in the front pocket, where he kept the notebook." }
        ] },
        { t: "You don't have to. Not till you want to.", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "I know. That's what Shinjiro-san said. Not in those words. He said *it'll keep*. It won't keep. It's rice. It's thirty-three degrees. But I knew what he meant." }
        ] },
        { t: "(Give it to Koromaru.)", notes: 1, then: [
          { n: "She held it out to the dog. Koromaru looked at it, and at her, and at Ken, and didn't take it. He put his nose against it, once, very gently, and then lay down on the hot seawall with his chin on Ken's shoe and left it exactly where it was." },
          { s: 'ken', f: 'neutral', t: "...He won't eat them either. Since. He knows they're mine." }
        ] }
      ] },
      { n: "He ate the toast. All four triangles, slowly, the crack of each one loud in the hot still air. Then he folded the napkin in four and sat with it on his knee, looking out at the flat sea where nobody was swimming, and said, without turning his head:" },
      { s: 'ken', f: 'neutral', t: "I found the middle part. Of the story. The sun and the moon. The one the lady at the river house told me on Children's Day, and skipped." },
      { s: 'ken', f: 'neutral', t: "It's in the library. In a book of Korean folk tales for children. It has pictures. I read it at the table by the window in July, on my own, and then I read it again." },
      { s: 'ken', f: 'serious', t: "There's a tiger. It meets the mother on the hills, on the way home. It asks her for a rice cake. Just one. And she gives it one. And then on the next hill it asks again, and she gives it another one. And on every hill." },
      { s: 'ken', f: 'serious', t: "And when she hasn't got any left, it eats her. And it puts on her clothes. And it goes to the children's house, and knocks, and says, *open the door, it's only me*." },
      { n: "He said it in the voice for reports. Very correctly. Every word in its place, the way he'd have read it out in class. Only his hands moved, folding the napkin smaller, eighths, sixteenths, until it wouldn't fold any more." },
      { s: 'ken', f: 'neutral', t: "You knew that part. On the veranda. Your face did a thing. I saw." },
      { choose: [
        { t: "I knew it. All three of my mothers told it to me. All the way through.", notes: 3, then: [
          { s: 'ken', f: 'neutral', t: "...All the way through. Even the tiger." },
          { s: 'solar', f: 'neutral', t: "Especially the tiger. One of them did the voice. It made her cry." },
          { n: "Ken thought about that for a long time, looking at the water." },
          { s: 'ken', f: 'neutral', t: "Then she skipped it on purpose. The river lady. Because everybody's mother tells that part. That's the part that's for." }
        ] },
        { t: "It's a story for children. So they don't open doors.", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "Like the jellyfish. Yes. I know." },
          { s: 'ken', f: 'serious', t: "Only she told it to a child and took that part out. So it's a story for children with the part that keeps them safe taken out. I've been thinking about what you'd call that." }
        ] },
        { t: "(Don't answer. Watch his hands on the napkin.)", notes: 2, then: [
          { n: "She didn't answer. She watched his hands fold the napkin until it wouldn't fold, and then hold it, a small hard square, and squeeze it, and he didn't ask again, and she understood that he hadn't needed her to say anything. He'd just needed somebody beside him while he said it out loud." }
        ] }
      ] },
      { s: 'ken', f: 'neutral', t: "I didn't eat her rice cakes before. Koromaru wouldn't let me close enough. Now I've got a reason of my own. I like having a reason of my own better." },
      { s: 'ken', f: 'neutral', t: "That's all. It's a story. I'm not saying anything. I'm just saying I read it." },
      { s: 'ken', f: 'neutral', t: "Suemitsu-san's mother wrote to me. To the dorm. A real letter, with a stamp." },
      { s: 'ken', f: 'neutral', t: "She thanked me for lighting the incense. She said Nozomi talked about the dorm kids. She said he called me *the little one with the dog who's always so polite*. She said he liked me." },
      { s: 'ken', f: 'sad', t: "I only ever said good morning to him. On the walk. He'd be on his way to the boarding house for breakfast and I'd say good morning and he'd say *are you going there too?* And I'd say no. Every morning. *Are you going there too.* And I'd say no, and he'd look sorry for me." },
      { n: "The sea glittered. Out on the breakwater one of the old men caught something small and silver and held it up to the other one, and they both looked at it for a long time, and then threw it back." },
      { s: 'ken', f: 'neutral', t: "I count everybody now. At night. Before bed. I sit on the stairs where the landing is, where you can see all the doors on the second floor and half the third, and I count. Mitsuru-san does it too. She does the fourth floor. We pass each other. We don't say anything about it." },
      { s: 'ken', f: 'neutral', t: "Thirteen, if nobody from the guesthouse stayed over. Nineteen last Thursday. Twenty-two the night after Suemitsu-san. Fourteen with Koromaru. I've never once got a number I liked." },
      { choose: [
        { t: "What number would you like?", notes: 3, then: [
          { s: 'ken', f: 'neutral', t: "...The same one every night. That's all. I don't mind what it is. I'd just like it to be the same one twice." }
        ] },
        { t: "You and Mitsuru should count together. Halve it.", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "We'd have to talk about it, then. Then it'd be a thing we did. Right now it's a thing we both happen to be awake for." },
          { s: 'ken', f: 'neutral', t: "...But I'll mention it. Not mention. Suggest. In writing, maybe. She likes things in writing." }
        ] },
        { t: "(Put your arm round him.)", notes: 3, then: [
          { n: "She put her arm round him on the hot seawall, and he stiffened, the way twelve-year-olds stiffen when somebody might see, and then he looked up and down the empty beach, at the four umbrellas and the two old men and the girl in the sun hat, and decided nobody would, and leaned in, and stayed there." }
        ] }
      ] },
      { s: 'ken', f: 'neutral', t: "Solar-san. Can I ask you something? It's about asking. That's why I'm asking you whether I can." },
      { s: 'ken', f: 'neutral', t: "I'd like to learn to cook. From Shinjiro-san. Properly. Not toast. Curry. The rice. The thing he does with the pot where he doesn't measure. I'd like to know all of it." },
      { s: 'ken', f: 'serious', t: "But that's asking him for something. And everybody's asking everybody for things this year, and Haechan-san says you can hear it under everything now, and I don't want to be one more person asking. Is it different if it's a lesson? Is it allowed?" },
      { choose: [
        { t: "Ask him. That kind of asking is fine. You're not asking him to stay. You're asking him to teach.", notes: 3, flag: 'eqx-ken-asks-shinji', then: [
          { n: "Ken thought about it. Seriously, with his whole face, the way he thought about everything, looking at the sea." },
          { s: 'ken', f: 'neutral', t: "...Asking him to give me something. Not asking him to keep something. That's the difference." },
          { s: 'ken', f: 'happy', t: "Okay. Tonight. In the kitchen. I'll ask while he's washing up, so he has something to do with his hands. People say yes more easily when they've got something to do with their hands. I read that." }
        ] },
        { t: "He'd say yes. The question is whether you want it.", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "I want it. I want to know everything he knows. Before—" },
          { n: "He stopped. He looked at the toast in the napkin, the black edges, very neat." },
          { s: 'ken', f: 'neutral', t: "Before I'm in junior high. That's what I meant. Junior high is very busy. I've been told." }
        ] },
        { t: "That's yours to work out, Ken. But I don't think he'd mind being asked that.", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "...You never just say. You know that? You always give it back." },
          { s: 'ken', f: 'neutral', t: "It's fine. I'm getting used to it. I'm getting quite good at working things out. I've had a lot of things handed back to me this year." }
        ] }
      ] },

      { place: 'Iwatodai Dorm · Stairs', time: 'Night', bg: 'iwatodaidorm-hallway', soft: true },
      { n: "They walked home over the bridge in the late afternoon, sunburnt, sandy, Ken with the bucket full of shells he'd decided at the last minute were evidence, Koromaru salt-stiff and enormously pleased with himself. The bridge was long and hot and ordinary and full of trucks, and Koromaru trotted the whole length of it at heel without once looking at the water, and nobody on it was anything but tired." },
      { n: "That night Solar came out of her room at eleven for water and found Ken on the stairs. On the landing between the second floor and the third, sitting in his pajamas with his knees up and the notebook open on them and a pencil in his hand, looking along the corridor at the doors." },
      { n: "He didn't look up. He was moving his lips. She stood still on the step below and let him finish. At the top of the next flight, on the fourth-floor landing, through the banisters, she saw a pair of slippers, and the hem of a red dressing gown, and a pen moving in a small black notebook, and then the slippers went away down the fourth-floor hall without a word." },
      { s: 'ken', f: 'neutral', t: "...Thirteen. Nobody from the guesthouse stayed. Fourteen with Koromaru." },
      { ifFlag: 'eqx-ken-asks-shinji', then: [
        { s: 'ken', f: 'happy', t: "He said yes. He was washing the big pot. He didn't turn round. He said *Tuesdays and Fridays, six o'clock, don't be late, and you're doing the onions*. I'm doing the onions. I cried. He said that's the onions, and that's allowed." }
      ] },
      { n: "He wrote the number down. Under it there was the one from last night, and the night before, and the night before that, a whole column, and none of them were the same twice. Then he closed the notebook and went down the stairs to the front hall, to the futon in front of the door, and the dog lying along the bottom of it, and got in, and put his hand on the white back." },
      { n: "In the front pocket of his bag, on the shoe shelf, wrapped in plastic, there was half a rice ball. Solar saw it when she went past for her water. In the morning it was gone, and the plastic was folded very small and put in the kitchen bin, and nobody said anything about where." }
    ] },
    { after: '10/3', title: '6: the fourth', place: 'Naganaki Shrine · Playground', time: 'Daytime', music: 'tender', scene: [
      { bg: 'naganaki-shrine-autumn' },
      // BG: naganaki-shrine-playground-autumn — the small playground below Naganaki Shrine on a clear cold October morning, the ginkgo over the bench gone bright yellow and dropping its fan-shaped leaves in a gold carpet over the sand and the bench.
      { n: "The ginkgo had turned. It did it every year in a week, all at once, and this year it had done it in the week after the bridge, as if it hadn't noticed anything, so that on the first Sunday in October the little playground below the shrine was gold. Gold overhead, gold on the bench, gold on the sand in a thick soft carpet of small fan-shaped leaves that smelled, when you walked through them, faintly and unmistakably of something rotten and sweet, the way ginkgo always did." },
      { n: "Ken was sitting on the bench in his school blazer on a Sunday, with a white shirt with a collar under it, and his hair combed flat with water, and a bunch of white chrysanthemums from the florist by the station on his knees in their cellophane, and Koromaru lying on his feet." },
      { n: "He didn't throw the ball. There wasn't a ball. He looked at Solar coming down the path the way he'd looked at her in April with the index card in his pocket, before he'd decided whether to give it to her." },
      { s: 'ken', f: 'neutral', t: "Solar-san. Thank you for coming on a Sunday. I'd like to go somewhere. It's not far. I'd like to go today, and I'd like you to come, and Koromaru." },
      { s: 'ken', f: 'neutral', t: "Tomorrow's the fourth. Of October. It's three years tomorrow. My mom." },
      { n: "He said it the way he said everything. Very correctly. A report to a teacher he respected. Only his thumb moved, on the cellophane, round and round over the same small crackle." },
      { s: 'ken', f: 'neutral', t: "I'm going tomorrow. After school. Properly. But I'd like to go today first. For practice. So tomorrow can be— so I'll know where to stand." },
      { choose: [
        { t: "Of course. Let's go.", notes: 3, then: [
          { s: 'ken', f: 'neutral', t: "Thank you. Thank you very much." },
          { n: "He stood up. Koromaru got off his feet and stood too, at once, without being told, and looked up at Ken's face, and then at the flowers, and then fell in at his left side, close, his shoulder against Ken's knee, the way he walked when the town was crowded." }
        ] },
        { t: "(Stand up. Hold out your hand for the flowers. He can carry them later.)", notes: 2, then: [
          { n: "She held out her hand. He looked at it. Then he shook his head, very slightly, and held the flowers closer, against his chest, and stood." },
          { s: 'ken', f: 'neutral', t: "...I'd like to carry them. Thank you. It's the only part I know how to do." }
        ] }
      ] },

      { place: 'Iwatodai · Behind the Strip', time: 'Daytime', bg: 'portisland-back-streets', soft: true },
      // BG: eqx-iwatodai-corner-lot — a quiet back corner of a Japanese town on a bright autumn morning: a small fenced car park where a building used to stand, a utility pole, a vending machine, a few faded bunches of flowers tied to the fence, newer apartment blocks behind.
      { n: "It wasn't far. Behind the Strip, two streets back, where the shops gave out and the town turned into apartment blocks and vending machines and laundry on balconies. A corner. A small car park with a chain-link fence round it and six spaces and two cars, and a utility pole, and a vending machine humming to itself in the sun." },
      { n: "There'd been a building here. Solar could see where. The car park was too new for the street, the asphalt too black, and the apartment blocks on either side had blank walls where they'd once joined something." },
      { n: "On the fence, tied with string and rubber bands and wire, there were flowers. Not many. Three bunches, gone brown, from other years, other people. And one bunch of white chrysanthemums tied very neatly with a bow that had faded to pink, that had been there a year, Solar thought, exactly a year, and had been tied by a boy who'd stood here on his own." },
      { n: "Ken stood at the fence and looked at the car park. Koromaru sat down beside him on the hot pavement, not facing the car park. Facing Ken." },
      { s: 'ken', f: 'neutral', t: "It was a building. Four floors. We lived on the second. She was coming home from the shops. It was the Dark Hour, but nobody knew that. Nobody knows about it, when it happens to them. You just go on walking." },
      { s: 'ken', f: 'neutral', t: "I know whose Persona it was. You know I know. I've known since the year before last. I wrote it in my composition. I wrote that I'm allowed both." },
      { s: 'ken', f: 'neutral', t: "Last year I came on my own. I stood here for an hour and I said everything I'd been saving. To the car park. Out loud. A lady with a stroller crossed the road." },
      { choose: [
        { t: "What do you want to say this year?", notes: 3, then: [
          { s: 'ken', f: 'neutral', t: "I don't know yet. That's why I wanted to practise. Last year I had everything. This year I've got something and I don't know what it is." }
        ] },
        { t: "(Stand beside him at the fence. Don't say anything.)", notes: 3, then: [
          { n: "She stood beside him at the fence. The vending machine hummed. A woman on a balcony across the street shook out a futon, three hard slaps, and went in. Ken didn't look at Solar. After a long time his free hand came up and took hold of the chain-link, his fingers through it, and held on." }
        ] },
        { t: "(Help him tie the flowers on.)", notes: 2, then: [
          { n: "She held the cellophane while he tied them on, beside last year's, with a piece of string from his blazer pocket that he'd brought for exactly this and measured, she was sure, at home, on the kitchen table. He tied a bow. He undid it and tied it again, tighter. He stood back." }
        ] }
      ] },
      { s: 'ken', f: 'neutral', t: "I'm going to ask Shinjiro-san to come with me tomorrow." },
      { ifFlag: 'eqx-ken-asks-shinji', then: [
        { s: 'ken', f: 'neutral', t: "I asked already. Actually. On Friday. We were doing the roux. You have to keep stirring the roux the whole time or it catches, so he couldn't turn round. I said it to the back of his head." },
        { s: 'ken', f: 'neutral', t: "He stopped stirring. It caught. He didn't say anything about the roux. He said, *if you want me there, I'm there.* And then he started stirring again and we had to start the roux over and neither of us said anything for the whole second roux." }
      ], else: [
        { s: 'ken', f: 'neutral', t: "Tonight. In the kitchen. I've practised what to say. I'm not going to say any of it. I'm just going to ask." },
        { s: 'ken', f: 'neutral', t: "He'll say yes. I know he'll say yes. I'm frightened anyway. I'm frightened he'll say sorry. I don't want him to say sorry. Not here. Here's hers." }
      ] },
      { s: 'ken', f: 'neutral', t: "Not so he'll say anything. Just so he'll stand here. With me. Where it was. And then we'll go home and he'll make dinner and I'll do the onions." },
      { s: 'ken', f: 'serious', t: "And next year. And the year after. I'd like it to be a thing we do. Every fourth. I've written it in next year's calendar already. In pen." },
      { n: "He said it to the car park. Very firmly. The way you'd write a thing in pen." },
      { n: "Solar heard it go into her the way the ball had gone into the road in June, cold, colder than it should have been on a warm morning. She didn't know why. Shinjiro was at home. Shinjiro was in the kitchen right now, probably, with his bad hand on the counter, burning toast for a boy on purpose. She stood at the fence in the sun and looked at the flowers and felt it anyway, under her ribs, small and exact: the shape of a calendar with a date written on it in pen, a year from now, and nobody standing at the fence." },
      { choose: [
        { t: "Then make sure he's free on the fourth. Every year. Don't let him get out of it.", notes: 3, then: [
          { s: 'ken', f: 'neutral', t: "I won't. I'm going to remind him every September. In writing. And verbally. And I'm going to tell Akihiko-san, so he's got two people reminding him." },
          { n: "He turned from the fence and looked at her, properly, for the first time since the bench." },
          { s: 'ken', f: 'neutral', t: "You'd remind him too. If I wasn't here. You'd make sure." },
          { s: 'solar', f: 'neutral', t: "I'd make sure." }
        ] },
        { t: "He'll come. He'll keep coming. It's the kind of thing he keeps.", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "...Yes. He keeps things. He kept my composition. I found it in his coat. It's all soft at the folds. He's read it a lot." }
        ] },
        { t: "(Look at Koromaru.)", notes: 2, then: [
          { n: "She looked down at the dog. Koromaru was still sitting, still facing Ken, and as she looked he got up, and walked once round the boy's legs, slowly, all the way round, the way he'd walked round Solar's legs in April on the corner by the river road, and sat down again on the other side, against the other knee, as if he'd been closing a circle." },
          { s: 'ken', f: 'neutral', t: "...He does that. When people are going to be sad. I think it's a kind of counting." }
        ] }
      ] },

      { place: 'Naganaki Shrine · Playground', time: 'Afternoon', bg: 'naganaki-shrine-autumn', soft: true },
      { n: "They went back to the playground. Ken wanted to. He sat on the bench in the gold leaves with his blazer still buttoned and took the notebook out of his inside pocket, the small one from April, its cover gone soft and dark with handling, and opened it on his knee, and Solar saw that it had a page now that was all lists." },
      { n: "He didn't hide it. He turned it toward her." },
      { n: "At the top, in his careful pencil, a heading. *PEOPLE WHO WENT.* Under it, the first name, written a long time ago, in a younger hand, gone gray. *Mom.* Then *Shinjiro-san*, and a line through it, and next to the line, small, *came back*. Then *Solar-san*, a line through it, *came back*. Then *Hata-san. Tanabe-san. Suemitsu-san.* Then three names together, close, in very straight letters. *Ishida-san. Kubo-san. Sakai-san.*" },
      { n: "And under those, a second heading, newer, the pencil pressed hard. *PEOPLE WHO WERE TAKEN (NOT WENT).* And three names, in katakana, carefully, the way you'd write the names of people whose own letters you didn't have." },
      { n: "Solar's mothers." },
      { s: 'ken', f: 'neutral', t: "I had to make a new list. They didn't go. Going is when you walk somewhere. They were walking home. Somebody took them." },
      { s: 'ken', f: 'neutral', t: "Taken people are different. In Featherman, taken people can be got back. They're always in a base somewhere. Underground, usually. There's always an episode." },
      { s: 'ken', f: 'sad', t: "I know it's not Featherman. I'm not stupid. But I didn't put them on the other list. I wanted you to know I didn't put them on the other list." },
      { n: "Solar looked at the three names in a twelve-year-old's careful katakana, and her body went first, the way it did now: the long drop under the ribs, the hands going cold, and under that, behind her eyes, a face on a bridge under the last lamp, turning, and the edge at the jaw. She'd been carrying it for ten days. She hadn't told Ken. She wouldn't. He'd made a list where they could still be got back, and he'd shown it to her on purpose, and she wasn't going to take it off him." },
      { choose: [
        { t: "(Take the pencil. Under the three names, write: *for now.*)", notes: 3, flag: 'eqx-ken-for-now', then: [
          { n: "She held out her hand for the pencil. He gave it to her. She wrote, under her mothers' names, small, in her own hand, which was nothing like his, *for now*. And gave it back." },
          { n: "Ken looked at the two words for a long time. Then he took the pencil and went over them, once, carefully, his letters on top of hers, so they were darker than everything else on the page." },
          { s: 'ken', f: 'neutral', t: "...For now. Yes. That's correct. That's the correct heading. I should have put that." }
        ] },
        { t: "Thank you, Ken. For not putting them on the other list.", notes: 3, then: [
          { s: 'ken', f: 'neutral', t: "You're welcome. It's not a favor. It's accuracy." },
          { n: "He closed the notebook. Then opened it again and looked at the page. Then closed it, and put his hand flat on top of it, the way Mitsuru put her hand on things, and kept it there." }
        ] },
        { t: "(Close the notebook gently. Leave your hand on it.)", notes: 2, then: [
          { n: "She closed it, gently, on his knee, and left her hand on it, and he put his on top of hers, and they sat like that on the bench in the ginkgo leaves, and Koromaru put his chin on top of both their hands, heavy and warm, so that it was a stack, a small ridiculous tower of hands and dog, and nobody moved it." }
        ] }
      ] },
      { s: 'ken', f: 'neutral', t: "On the bridge. Shinjiro-san held my head. Into his coat. The whole time. I didn't see anything. I heard all of it. I heard Mitsuru-san say their names." },
      { s: 'ken', f: 'neutral', t: "And I thought, I'm not going to make one more list. Not one. I don't want any more people on any list. I want everybody to stay where they are. In the dorm. On the stairs where I can count them. Nobody going out of any door, ever again, unless I've seen them come back in." },
      { s: 'ken', f: 'serious', t: "I know that's what the card said. In June. I know I said I'd changed my mind about asking. It's not the same as the card. The card was about you. This is about everybody. I want everybody. I want all of them, all the time, behind the door, with Koromaru on it." },
      { s: 'ken', f: 'sad', t: "That's a very big thing to want. I know. I'm twelve. I'm allowed to want very big things. I've checked." },
      { n: "And Solar understood it, the way you understand a word you've been reading for a year without looking up. The card with *please* on it, and the maths book counting down, and the boy on the stairs at eleven at night with a pencil. Not one more year. Not even her. Everyone, kept, behind one door, with a dog across it, so that the lists would stop. A boy who'd lost his mother at a corner on her way home from the shops, asking the whole world to stop walking home." },
      { n: "And the dog across the door, who'd waited at the top of the shrine steps for a man who never came up them, keeping it, every night, because it was his idea." },
      { flag: 'eqx-floor-ken-koromaru' },
      { s: 'ken', f: 'neutral', t: "Fuuka-san found a floor. In the Well. She told me because I asked her directly, and she doesn't lie to people who ask directly. It's a hallway. A very long one. All front doors, on both sides, all shut. And in front of every door there's a futon." },
      { s: 'ken', f: 'neutral', t: "And somebody's counting. In my voice. She said it's my voice. She played it for me. It counts to fourteen and starts again." },
      { s: 'ken', f: 'neutral', t: "I'd like to go down there. With Koromaru. When I'm ready. I'd like to see what happens if I stop counting." },
      // CG: eqx-ken-ginkgo — a small playground carpeted in bright yellow ginkgo leaves, a boy in a school blazer on a bench with a small worn notebook open on his knee, a girl beside him, a white dog resting his chin on their stacked hands, a bunch of white chrysanthemums' empty cellophane folded on the bench.
      { choose: [
        { t: "I'll be there. And so will he. He'll go wherever you go.", notes: 3, then: [
          { n: "Koromaru, at his name, lifted his head off their hands and looked at Ken, and then at her, and then, without any fuss at all, got up and put his front paws on the bench and his head on Ken's shoulder, heavily, the whole weight, the way he had in June when the card went back in a pocket." },
          { s: 'ken', f: 'neutral', t: "...He will. He always does. He just doesn't like being told." }
        ] },
        { t: "Ken. Everyone you count is choosing to be there. That's why the number's never the same.", notes: 3, then: [
          { s: 'ken', f: 'neutral', t: "..." },
          { s: 'ken', f: 'neutral', t: "That's a terrible thing to say to a person who's trying to get the same number twice." },
          { s: 'ken', f: 'neutral', t: "I'm going to think about it. For a very long time. I'm going to be annoyed about it the whole time I'm thinking." }
        ] },
        { t: "(Don't say anything. Just let him want it.)", notes: 2, then: [
          { n: "She didn't say anything. She sat beside him in the gold leaves and let him want it, the whole enormous impossible thing, out loud, on a bench, without telling him it was too big or too small or anything at all, and after a while he took a long breath, all the way down, and let it go, the way you'd put a heavy bag down at the end of a long walk." }
        ] }
      ] },

      { place: 'Iwatodai Dorm · Front Hall', time: 'Night', bg: 'iwatodaidorm-livingroom-night-spring', soft: true },
      { n: "At the dorm Koromaru went to the door and turned twice and lay down along the bottom of it. Ken's futon was there. Ken took his blazer off and hung it up and put the notebook in the inside pocket and lay down on the futon in his good shirt, on top of the covers, with his hand on the dog's back." },
      { n: "At eleven Solar heard him on the stairs, the landing between the second and third floors, counting under his breath. She heard him get to thirteen. Then stop. Then, after a long pause, go on." },
      { n: "*Fourteen.*" },
      { n: "And then, so quietly that she wasn't sure, afterward, that she'd heard it at all, three more. Not numbers. Three names, said slowly and carefully, the way you'd say the names of people whose own letters you didn't have, and then, after them, very firmly, the way you'd write a thing in pen:" },
      { n: "*For now.*" },
      { n: "Then the creak of the stairs going down, and the futon, and at midnight the red came up through the glass of the front door and lay across the boy asleep on the floor and the white dog awake beside him, and the dog didn't move, and didn't sleep, and in the morning, when Shinjiro came down at six to burn the toast, he found the two of them like that, and stood in the hall a long time with the bread in his good hand, and didn't wake either of them." }
    ] },
    // Rank 7 (Nov 16, round 3): after 11/4 (Thursday). The playground in November with Taejoon (the fathers have lived in the
    // dorm since 10/26), the shrine's river-side steps at dusk, the dorm kitchen at six (Ken's cooking lesson night). Branches
    // hard on dead.shinjiro (Ken cooks alone / Shinjiro teaches lying down). Reads eqx-ken-asks-shinji, eqx-ken-come,
    // eqx-ken-for-now, ifEvent eqx-1122, dead.aigis. Sets eqx-ken-list-solar (Solar writes in Ken's list for him),
    // eqx-ken-list-ken (she holds the notebook and he writes it himself) or neither (she closes it: not today).
    // Taejoon speaks in narration only, a word of Korean or two (no war, no numbers: fence). Koromaru is never in danger.
    { after: '11/4', title: '7: the onions', place: 'Naganaki Shrine · Playground', time: 'After School', music: 'tender', scene: [
      { bg: 'naganaki-shrine-autumn' },
      // BG: naganaki-shrine-playground-november — the small playground below Naganaki Shrine in early November, the ginkgo over the bench nearly bare, a last few yellow leaves on it and a thick rotting gold carpet under it, the sand gray, a cold pale sky.
      { n: "The ginkgo had let go. It had done it the way it did everything, all at once, in one night of wind at the end of October, so that the tree over the bench stood nearly bare now with a few last yellow fans hanging on at the very top like people who'd missed the announcement, and the gold was all on the ground, a thick soft carpet over the sand and the bench and the bottom of the slide, gone brown at the edges and sweet with rot. It squelched. It smelled. Koromaru loved it. He was rolling in it when Solar came down the path, on his back with all four legs in the air, twisting, the whole white length of him gone yellow-brown." },
      { n: "And there was a man throwing the ball." },
      { n: "Not Ken. Ken was sitting on the bench with his backpack on his knees, very upright, watching. A man in a dark gray coat that had been bought for a different winter, standing in the middle of the playground with his hands in his pockets, and then taking one out, and throwing a tennis ball the length of the shrine hill without any visible effort at all, a long flat throw that went over the swings and the climbing frame and the little fence at the bottom and landed somewhere in the trees, and putting his hand back in his pocket." },
      { n: "Taejoon. Solar's father. One of them." },
      { n: "Koromaru came up out of the leaves like a shot and went after it, and was gone into the trees, and came back with it, and didn't take it to Ken. He took it to Taejoon, and dropped it on his shoe, and sat, and looked up at him with enormous approval." },
      { n: "Taejoon looked down at the dog. He looked at him for a long moment, the way he looked at most things, with his whole attention and no expression at all. Then he said, low, in Korean, *잘했다*. Good job. And took the ball, and threw it again, over everything, into the trees." },
      { s: 'ken', f: 'neutral', t: "Solar-san. Good afternoon. Your father's here. Lee-san. The quiet one. Not your other father. He's not quiet." },
      { s: 'ken', f: 'neutral', t: "He came on Tuesday. He walks the river path at four, and then he came up the hill instead, on Tuesday, and stood at the fence, and Koromaru took him the ball. He's been every day since. I don't know how he knows which days. I've never told him. We don't share a language." },
      { s: 'ken', f: 'serious', t: "I've learned one word. *Jal-haet-da.* I think it means good. He says it to Koromaru. He said it to me once, on Wednesday, when I caught the ball. I've written it down phonetically." },
      { choose: [
        { t: "It means *well done*. He doesn't say it to many people.", notes: 3, then: [
          { n: "Ken looked at the man in the gray coat for a long time. Then he took out his notebook and found the page and corrected something, very small, with his pencil." },
          { s: 'ken', f: 'neutral', t: "...Well done. Not good. Well done. That's different. That's past tense. That means you did a thing." }
        ] },
        { t: "(Go and stand next to him. Don't say anything.)", notes: 2, then: [
          { n: "She went and stood next to her father in the wet leaves. He didn't look at her. He took his hand out of his pocket and, without turning his head, put it on the top of her head, briefly, heavily, the whole palm, the way you'd check a child for fever, and put it back in his pocket, and threw the ball." }
        ] },
        { t: "Has he talked to you?", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "No. He doesn't talk to anybody. I don't mind. I find it very restful. He throws, and Koromaru gets it, and I sit here, and nobody asks anybody anything." },
          { s: 'ken', f: 'neutral', t: "...He brought me a can of coffee milk on Wednesday. From the machine at the bathhouse. He just put it on the bench next to me and went back to throwing. I've kept the can. It's on my shelf." }
        ] }
      ] },
      { n: "Koromaru brought the ball back, and dropped it, and Taejoon looked down at it, and then, for the first time, at Ken on the bench. He didn't say anything. He bent down, and picked the ball up, and held it out, sideways, without moving his feet. To Ken." },
      { n: "Ken stood up. He put his backpack down very carefully on the bench and walked across the leaves and took the ball out of the big hand and went back to the middle of the playground and threw it, all arm, his whole body going after it, the way he'd thrown in April, and it went about half as far as Taejoon's, over the swings and into the sand, and Koromaru went and got it anyway with exactly the same joy, and brought it back to Ken." },
      { n: "Taejoon watched the whole thing. Then he nodded, once, the way men nodded in a house Solar had lived in once, at the bottom of the seventh stair. *잘했다.*" },
      { ifFlag: 'dead.shinjiro', then: [
        { n: "Ken's face did something. Solar saw it go across him and saw him catch it and put it somewhere, fast, with both hands, the way you'd catch a glass going over. He went back to the bench and sat down and picked up his backpack and held it on his knees very tight." },
        { s: 'ken', f: 'neutral', t: "...He nods like Shinjiro-san did. Exactly like that. Once. Down and up. He didn't know. He couldn't know. I just— it's the same nod." },
        { s: 'ken', f: 'sad', t: "I think that's why I keep coming on the days he comes. I've only just worked it out. I'm going to have to think about whether that's fair to him." }
      ], else: [
        { s: 'ken', f: 'neutral', t: "...He nods like Shinjiro-san. Exactly the same. Once. I told Shinjiro-san. He said *great, now there's two of us*, and then he went out to the step where Lee-san sits at night and sat there with him for an hour and neither of them said anything." }
      ] },

      { ifFlag: 'dead.shinjiro', then: [
        { n: "The man in the gray coat went home at five, down the hill, the way he'd come, with his hands in his pockets and the dog walking with him to the fence and no further. Ken and Solar sat on the bench in the brown leaves. Koromaru came back and lay on Ken's shoes." },
        { s: 'ken', f: 'neutral', t: "It's Thursday. Not a lesson day. Lessons were Tuesdays and Fridays at six." },
        { s: 'ken', f: 'neutral', t: "I still do them. Tuesdays and Fridays. Six o'clock. I go into the kitchen and I put on the apron, the black one, his, Junpei-san moved it to the back of the door so nobody would have to look at it on the hook, but I take it off the back of the door, and I do the onions." },
        { s: 'ken', f: 'neutral', t: "I've made curry three times. It was all right the first time. It was worse the second time. The third time Akihiko-senpai ate two bowls standing up in the doorway and didn't say anything and went running." },
        { s: 'ken', f: 'sad', t: "I don't know the thing with the pot. Where he didn't measure. I watched him do it twenty times and I didn't write it down, because I thought I'd have it, I thought I'd just *have* it, by doing it. I only did the onions. I was only on the onions." },
        { n: "He took the notebook out. The small one from April, gone soft. He opened it to the page with the lists. *PEOPLE WHO WENT.* *Mom.* *Shinjiro-san*, a line through it, and next to the line, small, in the old pencil, *came back*." },
        { n: "Nothing after it. The line, and *came back*, and then the white of the page." },
        { s: 'ken', f: 'neutral', t: "I can't write it. I've tried every night since the twenty-fourth. I get the pencil on the paper and I can't write it under *came back*. It looks like a lie either way. It looks like a lie with it and without it." },
        { s: 'ken', f: 'neutral', t: "He didn't *go*. Going's when you walk somewhere. He stepped in front of your father. That's not going. I don't have a heading for it. I've tried six headings. They're all on the next page, crossed out." },
        { n: "He held the notebook out. Not to give it to her. Open, on his flat palms, across the space between them on the bench, the way he'd held the index card in June." },
        { s: 'ken', f: 'neutral', t: "Solar-san. Would you. I'm not asking you to. I'm asking if you'd be willing to be asked." }
      ], else: [
        { n: "The man in the gray coat went home at five, down the hill, the way he'd come. Ken looked at his watch." },
        { s: 'ken', f: 'neutral', t: "It's Thursday. Shinjiro-san moved the lesson. From Fridays. Because of physio. Because of the chest. It's at six. You can come. He said you could come if you did something useful. I said you could peel. He said *she can't peel*. I said you could hold things." },
        { n: "He took the notebook out on the walk down. The small one from April, gone soft, open to the lists. *PEOPLE WHO WENT.* *Shinjiro-san*, a line through it, *came back*. And under that, newer, in the same careful pencil, a second line for him, and next to it: *nearly. 10/23.* And under that: *Lee-san (Solar-san's other father). Nearly. 10/23.*" },
        { s: 'ken', f: 'neutral', t: "I had to make a column for nearly. It's getting quite long. I don't like that column. I like it better than the other one." },
        { s: 'ken', f: 'neutral', t: "He's got three lines on his chest. I saw them by accident, in the bathroom, he had his shirt off and the door wasn't locked. He said if I told Yukari-san he'd put me in the curry." },
        { n: "He held the notebook out to her, open, on his flat palms, the way he'd held the index card in June." },
        { s: 'ken', f: 'neutral', t: "Would you write the date by Lee-san's. In your hand. It should be in a family hand. I'm not family. I'm asking if you'd be willing." }
      ] },
      { choose: [
        { t: "(Take the pencil. Write it for him.)", notes: 3, flag: 'eqx-ken-list-solar', then: [
          { ifFlag: 'dead.shinjiro', then: [
            { n: "She took the pencil. She looked at the page for a long time, at the line through his name and the two small words beside it, *came back*, in a twelve-year-old's April hand. She didn't rub them out. She wrote under them, in her own writing, which was nothing like Ken's, small: *stayed. 10/23. In front of my father.*" },
            { n: "Ken read it. He read it again. He didn't go over it in his own pencil, the way he'd gone over *for now* in October. He left it in hers." },
            { s: 'ken', f: 'sad', t: "...Stayed. That's the heading. That's the one I couldn't find. He didn't go. He stayed. Exactly where he was. He didn't move." },
            { s: 'ken', f: 'sad', t: "That's the opposite of the list. That's— I'll have to make a new list for that. With one person on it." },
            { n: "He closed the notebook. He held it on his knees with both hands flat on the cover, the way Mitsuru did, and his chin did something difficult, and this time he let it, for a while, in the brown leaves, with the dog on his shoes and nobody else in the playground at all, and Solar put her arm round him, and he let that too." }
          ], else: [
            { n: "She took the pencil and wrote, next to *Lee-san (Solar-san's other father)*, in her own hand: *my father. Caught. By Shinjiro.*" },
            { n: "Ken read it. He looked at the word *caught* for a long time." },
            { s: 'ken', f: 'neutral', t: "...Caught. That's better than nearly. That's what happened. Nearly is what didn't." },
            { s: 'ken', f: 'happy', t: "I'm going to move it. Into a new column. *Caught.* I like that column. I'm going to put him at the top of it, Shinjiro-san I mean, as the catcher, and everybody else under." }
          ] }
        ] },
        { t: "(Hold the notebook flat for him. Give him back the pencil.)", notes: 3, flag: 'eqx-ken-list-ken', then: [
          { n: "She took the notebook by its edges and held it flat on her knees, and turned it toward him, and held the pencil out, point toward herself, the way you hand somebody scissors." },
          { s: 'ken', f: 'neutral', t: "...You're doing the thing. Where you give it back." },
          { s: 'solar', f: 'neutral', t: "I'm holding it still. You write." },
          { ifFlag: 'dead.shinjiro', then: [
            { n: "He took the pencil. His hand shook, once, and he waited until it stopped, the way he'd waited for Koromaru to stop at the curb in April, and then he wrote, very slowly, every stroke finished, under *came back*, one word. Not a heading. A name, again. *Shinjiro-san.* And next to it, after a long time, small: *10/23. Here.*" },
            { s: 'ken', f: 'sad', t: "Here. That's where. It's not a heading. It's a place. He's here. They said. He stays here. In this town." },
            { n: "He gave Solar the pencil back, and she put it in his pencil case for him, and he didn't move for a long time, and neither did the dog." }
          ], else: [
            { n: "He took the pencil and wrote the date beside Lee-san, *10/23*, and then, after a moment, under it, small: *Ate breakfast. 10/24. Shinjiro-san made it.* And then he gave her back the pencil." },
            { s: 'ken', f: 'neutral', t: "That's the important part. Not the steps. That he ate breakfast the next morning, at the table, with everybody. I'd like that recorded." }
          ] }
        ] },
        { t: "(Close the notebook gently. Not today.)", notes: 2, then: [
          { n: "She closed it, gently, on his palms, and put her own hand flat on top of the cover, and left it there." },
          { s: 'ken', f: 'neutral', t: "...Not today. Yes. That's allowed. I'll put it in the calendar. *Not today.* It's a very useful entry. I've used it four times this week." }
        ] }
      ] },

      { place: 'Naganaki Shrine · River Steps', time: 'Evening', bg: 'naganaki-shrine-night', soft: true },
      { n: "At dusk Koromaru got up off Ken's shoes and went. The way he'd gone every evening since May: across the playground, up the stone path, past the torii and the shut hall and its unlit lanterns, to the top of the old steps on the river side of the hill, steep and green-edged, going down through the trees toward the town. He sat at the very top, square, front paws together, and looked down." },
      { n: "They followed him up, the way they always did. The sky over the bay was the color of a bruise healing, yellow at the bottom and dark at the top, and the lamps were coming on along the river below, one by one, and the old tiled roofs had gone black, and over one wall the persimmon tree you could always find from here was heavy now, the fruit gone orange, dozens of them, small lit lanterns hanging in the bare branches, with not one bird in it." },
      { n: "Koromaru looked down at it. And then, which he'd never done, he turned his head and looked back. Over his shoulder. At Ken. For a long second. Then down at the river again. Then back at Ken." },
      { s: 'ken', f: 'neutral', t: "...He does that now. Since the twenty-sixth. Since the vans. Every minute or so. Down there, and then me. Down there, and then me." },
      { s: 'ken', f: 'neutral', t: "I was at the gate when the vans went. Mitsuru-san's. With the dads' suitcases. And the lady came out and stood at her gate and watched them go, and when the van pulled away she knocked on her own gatepost. Twice. With one knuckle. Like it was a door." },
      { s: 'ken', f: 'serious', t: "Who knocks on their own gate? From the inside? When they're already home?" },
      { choose: [
        { t: "Somebody who wants you to know she's still there.", notes: 3, then: [
          { s: 'ken', f: 'neutral', t: "...Yes. That's what it sounded like. Like a doorbell. The other way round." },
          { n: "Koromaru looked back at Ken again. Ken put his hand on the dog's back, flat, and kept it there, and Koromaru didn't look back again after that; he didn't need to. He could feel where Ken was." }
        ] },
        { t: "(Sit down on the step beside Koromaru. Put your arm round him.)", notes: 3, then: [
          { n: "She sat down on the cold stone beside him and put her arm round his warm neck, and he leaned, the whole weight, the way he'd leaned in April, and kept looking down at the persimmons, and every minute he still turned his head and looked back at Ken, and Ken said, every time, very quietly, *I'm here*, and the dog turned back." }
        ] },
        { t: "Ken. Do you want to go home?", notes: 2, then: [
          { s: 'ken', f: 'neutral', t: "Not yet. He hasn't finished. You don't make him come in the middle of a shift." },
          { ifFlag: 'eqx-ken-come', then: [
            { s: 'ken', f: 'neutral', t: "I could say *come*. He'd come. He always does, now. I don't want to use it for this. I want to save it. For something that matters." }
          ] }
        ] }
      ] },

      { place: 'Iwatodai Dorm · Kitchen', time: 'Evening', bg: 'iwatodaidorm-kitchen-night', soft: true },
      { ifFlag: 'dead.shinjiro', then: [
        { n: "At six Ken went into the kitchen and took the black apron off the back of the door. It came down to his shins. He tied it twice round his waist, the way you'd tie it on a child, and stood at the counter with the onions in front of him, three, and the knife, and Solar stood in the doorway because she didn't know what else to do." },
        { n: "Taejoon came in at five past six. He didn't say anything. He stood beside Ken at the counter, too big for it, his coat off and his sleeves rolled to the elbow, and took the second onion, and the second knife, and began to cut it, without asking, very fast, very evenly, the way somebody cuts who has cut ten thousand onions in a kitchen a long way from here with the window over the garden." },
        { n: "Ken stopped. He looked at the man's hands. Then he looked up at him. Taejoon didn't look down. He went on cutting." },
        { n: "Ken picked up his own knife again, and went on with his onion, slower, his eyes going sideways every few seconds to watch the big hands, how they held it, how they curled the fingers under; and his own hands, after a while, changed, and curled their fingers under too, and went faster." },
        { n: "Neither of them said anything for the whole three onions. The kitchen filled up with the smell, sharp and sweet, and both of them were crying, steadily, without any expression at all, the boy and the man side by side at the counter with their eyes streaming, and Solar in the doorway, and Koromaru on the folded blanket by the chair at the kitchen door, on the floor, where he slept half the night now, watching all three of them." },
        { n: "At the end Taejoon put his knife down, and wiped his face with the back of his wrist, once, and said, to the onions, in Korean, quietly, *양파 때문이야*. It's the onions." },
        { s: 'ken', f: 'sad', t: "...What did he say?" },
        { s: 'solar', f: 'neutral', t: "He said it's the onions." },
        { n: "Ken looked at the onions for a long time. Then he wiped his own face with the back of his wrist, once, exactly the same, and said *I know*, to the man, in Japanese, and the man nodded once, down and up, and went to wash his hands." }
      ], else: [
        { n: "Shinjiro was lying on the kitchen floor." },
        { n: "On a folded futon, flat on his back, in front of the stove, with his head on a rolled-up dish towel and his arms crossed on his chest, the way Yukari had ordered, and his eyes on the ceiling, giving instructions to it." },
        { s: 'shinjiro', f: 'neutral', t: "Fingers under. Under, Ken. You want to keep them. I'm not explaining to Takeba why you've got eight." },
        { s: 'ken', f: 'neutral', t: "They're under." },
        { s: 'shinjiro', f: 'neutral', t: "I can hear they're not." },
        { n: "Ken was at the counter in the black apron, which came down to his shins, tied twice. He had three onions. He was crying steadily, with no expression at all. Taejoon was standing beside him at the counter, too big for it, sleeves rolled, cutting the second onion very fast and very evenly without having been asked, and Shinjiro, from the floor, had apparently decided not to have a problem with that." },
        { s: 'shinjiro', f: 'neutral', t: "You. In the door. If you're standing there you're holding something. Get the pot. The big one. Second shelf. Don't hand it to me, I'm not allowed to lift it, I've been told. Put it on the stove and stand back." },
        { n: "She got the pot. Shinjiro watched her put it on the stove from the floor, upside down, with a look of great suffering." },
        { s: 'shinjiro', f: 'neutral', t: "...Upside down. Two years in this kitchen. Ken, write that down. Evidence." },
        { s: 'ken', f: 'happy', t: "I'm writing it down." },
        { n: "He didn't write it down. He was crying too hard at the onions to see the page, and laughing, both at once, which you're allowed, and Taejoon beside him finished the second onion and took the third without a word, and Shinjiro, on the floor, closed his eyes and said *don't let it catch*, to nobody, and smiled at the ceiling, very slightly, the way you'd smile at a thing you'd decided to keep." },
        { n: "Later, when the curry was on and Ken was stirring it, standing on a stool to see in, Shinjiro said, still on his back, without opening his eyes:" },
        { s: 'shinjiro', f: 'neutral', t: "The thing with the pot. Where I don't measure. You've been asking with your face for a month." },
        { s: 'shinjiro', f: 'neutral', t: "I don't know how I do it. I'll write down what I think I do. You'll have it by Christmas. It'll be wrong. You'll fix it." },
        { n: "Ken stopped stirring. It caught. Nobody said anything about it." }
      ] },

      { place: 'Iwatodai Dorm · Stairs', time: 'Late Night', bg: 'iwatodaidorm-stairs-night', soft: true },
      { n: "At eleven he was on the landing with his notebook, the way he always was. Solar came out for water and stopped on the step below him, the way she always did. Up on the fourth floor, through the banisters, a pair of slippers and the hem of a red dressing gown, and a voice, quiet, giving a number down the stairwell, and Ken saying it back." },
      { s: 'ken', f: 'neutral', t: "...It's what I wanted. Did you notice? In October. On the bench. I said I want everybody behind the door. All of them, all the time, with Koromaru on it." },
      { s: 'ken', f: 'neutral', t: "And Mitsuru-san brought the dads. And now everybody I can count is behind the door. More than ever. It's the biggest number I've ever had." },
      { s: 'ken', f: 'serious', t: "It doesn't help. I want you to know I've checked. It's bigger, and it's still not the same twice, and I still can't sleep until I've done it, and I still lie there afterward and think, but what about the morning, what about when they go out." },
      { ifEvent: 'eqx-1122', then: [
        { s: 'ken', f: 'neutral', t: "And your moms are back. I moved them. In the notebook. Out of TAKEN and into a new column, under *for now*. I'll show you when I've finished the heading. And it's bigger again, and it still doesn't help." }
      ] },
      { s: 'ken', f: 'neutral', t: "My floor. The hallway. The one with the futons, that counts to fourteen." },
      { s: 'ken', f: 'neutral', t: "It still says fourteen. Fuuka-san checked for me. The dorm's got more than that now. Lots more. And down there it's still counting fourteen, every night, and starting again." },
      { s: 'ken', f: 'serious', t: "It's the old number. It doesn't know. Or it doesn't care. I'd like to find out which. Not yet. When I've got a number I like." },
      { choose: [
        { t: "I'll come down with you. Whatever number you've got.", notes: 3, then: [
          { s: 'ken', f: 'neutral', t: "...Whatever number. Yes. That might be the point. I'll think about that. I'm going to be annoyed while I'm thinking." }
        ] },
        { t: "(Sit down on the step. Count with him. Out loud.)", notes: 2, then: [
          { n: "She sat down on the step below him and counted with him, out loud, quietly, door by door, the way you'd say a times table, and their voices went along the corridor together and came to the end of it, and Ken wrote the number down, and it was a different number from last night, and he looked at it, and for once didn't seem to mind." }
        ] }
      ] },
      { n: "He went down to the front hall. Solar heard him take his shoes off and line them up, toes to the wall, and get onto the futon. She heard the soft thump of the dog, wherever the dog was tonight, by the door or by the kitchen chair, thumping its tail twice on the boards when the boy lay down. And then, very quietly, the boy's voice, not counting." },
      { n: "*Well done.* In Japanese, and then, carefully, phonetically, wrong, the other one. *Jal-haet-da.*" }
    ] },
    // Rank 8 (Nov 16, round 3): after 12/5 (Sunday, daytime; the mothers have been at the dorm since 12/1). The playground in
    // the frost (Ken's list: the mothers move to CAME BACK (FOR NOW); the same number two nights running, rank 5's wish), then
    // their ask floor in the Well in the red (eqx-floor-ken-koromaru: a hallway of front doors with a futon before each and
    // Ken's voice counting to fourteen; the fourteenth futon is turned down, empty, for Ken), then the front hall.
    // Reads eqx-ken-for-now, eqx-ken-come, eqx-ken-list-solar / -ken, dead.shinjiro, dead.aigis, ifEvent eqx-persimmon,
    // ifChoice asks.ken-koromaru. Choice sets eqx-ken-real-count (Ken counts the real dorm out loud over the floor),
    // eqx-ken-stopped-count (+choose: he tells the hallway "you can go when you want") or eqx-ken-come-used (needs
    // eqx-ken-come: he spends "come" on Koromaru, who is lying across the empty futon so Ken can't). Koromaru is never in
    // danger on the floor: nothing there attacks; he only keeps the futon. Rank 9-10 left for "stop asking the world to stay".
    { after: '12/5', title: '8: the same one twice', place: 'Naganaki Shrine · Playground', time: 'Daytime', music: 'tender', scene: [
      { bg: 'naganaki-shrine-winter' },
      // BG: naganaki-shrine-playground-frost — the small playground below Naganaki Shrine on a bright frozen December morning, white frost on the bench, the swings and the bare ginkgo, the sand gone hard and pale, long blue shadows, the torii at the top of the stone path.
      { n: "The first hard frost came on the first Sunday of December, and the playground below the shrine had gone white overnight, every surface, the bench and the swings and the bars of the climbing frame and the bare black ginkgo, all of it furred with a fine pale fur of ice that caught the low sun and threw it back in small hard sparks. The sand had set like concrete. Every step on it crunched. The air smelled of nothing at all, the way very cold air does, clean and empty, and your breath went up in front of you and hung there like a word you hadn't finished saying." },
      { n: "Ken was sitting on the bench in his school coat and a scarf wound three times, on a folded newspaper he'd brought to keep the frost off, with his notebook on his knee and his mittens off, writing. Koromaru was lying on his feet, the whole warm white weight of him across both shoes, which was, Ken said when Solar came down the path, a very sensible arrangement, scientifically." },
      { s: 'ken', f: 'neutral', t: "Solar-san. Good morning. Sit on the newspaper, there's a second section. The business section. It's very dry." },
      { s: 'ken', f: 'happy', t: "I've got something to tell you. I've been waiting since Friday. I wanted to tell you here, not on the stairs. The stairs are for counting. This is for telling." },
      { n: "He turned the notebook round. The page with the lists. The old headings, *PEOPLE WHO WENT*, *PEOPLE WHO WERE TAKEN (NOT WENT)*, the three names in careful katakana and under them, gone over twice, in two hands, *for now*." },
      { n: "There was a line through the three names. One neat line each, with a ruler. And a new heading beside them, to the right, in fresh pencil, the letters pressed hard and very straight." },
      { n: "*CAME BACK (FOR NOW).*" },
      { n: "And the three names again, under it, in the same careful katakana, the way you'd copy a name you'd learned to spell." },
      { s: 'ken', f: 'happy', t: "I moved them. On the twenty-third. In the morning. I did it at the kitchen table at six while they were still in the ward in Tatsumi. I'd had the ruler ready since October." },
      { ifFlag: 'eqx-ken-for-now', then: [
        { s: 'ken', f: 'neutral', t: "You wrote *for now*. In October. Under their names. I went over it in my pencil so it'd be darker. I've been looking at it every night." },
        { s: 'ken', f: 'happy', t: "It was correct. It was the correct heading. It was the most correct thing anybody's written in this notebook, and it wasn't even me." }
      ], else: [
        { s: 'ken', f: 'neutral', t: "In October I didn't put them on the other list. I told you. I wanted you to know I hadn't. I've been looking at that page every night since." },
        { s: 'ken', f: 'happy', t: "In Featherman, taken people can be got back. There's always an episode. I said I knew it wasn't Featherman. It was a little bit Featherman." }
      ] },
      { choose: [
        { t: "Ken. Thank you. For keeping the ruler ready.", notes: 3, then: [
          { s: 'ken', f: 'neutral', t: "You're welcome. It's a good ruler. It's metal. I bought it specially." },
          { n: "He said it very correctly. Then his chin did the thing, the difficult thing, and he let it, for a second, in the frost, and then he got hold of it and put the notebook down on his knee and looked very hard at the swings." }
        ] },
        { t: "(Run your finger along the new heading.)", notes: 2, then: [
          { n: "She ran her fingertip along the new heading, across the pressed letters, and felt them under her skin like braille, *CAME BACK*, and Ken watched her finger go along it and didn't say anything, and Koromaru lifted his head off Ken's shoes and put his nose against her hand, cold, on the page, and breathed on it, and the warm breath fogged the paper for a second." }
        ] }
      ] },
      { n: "He took the notebook back and turned the page. Another list, on the facing page. Shorter. Newer." },
      { s: 'ken', f: 'neutral', t: "Mrs. Kim sleeps sitting up. In the lounge chair, by the window. She won't lie down. Mr. Kim sleeps on the floor at her feet on a cushion. I bring her tea at six. She says *thank you, Ken-ah* in Korean and something in English I don't understand and holds the cup in both hands until it's cold." },
      { s: 'ken', f: 'neutral', t: "Your Korean mother flinches at gloves. Your American mother can't have anyone behind her. I've written them down. Not to count. So I don't make a mistake. So I never walk up behind anyone wearing gloves." },
      { s: 'ken', f: 'sad', t: "They don't remember the story. Did you know? The sun and the moon. Mrs. Kim asked me what it was about. I told her it was about a girl who was scared of being looked at. I didn't tell her the rest. I didn't tell her the tiger." },
      { ifFlag: 'dead.aigis', then: [
        { n: "There was one more name on the facing page. At the bottom. Alone, with a lot of white round it, as if he'd left room for a heading and hadn't found one." },
        { n: "*Aigis-san.*" },
        { s: 'ken', f: 'sad', t: "She went in. After Hyein-san. Into the water. That's not *went*. Went is walking somewhere. She didn't walk. And it's not *stayed*." },
        { ifFlag: 'dead.shinjiro', then: [
          { s: 'ken', f: 'sad', t: "Stayed is Shinjiro-san's. Stayed is standing still in front of something. She didn't stand still. She went *in*. I don't have a heading for in." }
        ], else: [
          { s: 'ken', f: 'sad', t: "She went *in*. Toward it. On purpose. To throw somebody else out. I don't have a heading for in. I've left the space." }
        ] },
        { s: 'ken', f: 'neutral', t: "Hyein-san wears the ribbon on her wrist. I've seen her touch it. Every time she goes through a door. Every single door." }
      ] },
      { ifEvent: 'eqx-persimmon', then: [
        { s: 'ken', f: 'sad', t: "And Edogawa-sensei. I didn't know him. Kazuha-san found him. In the garden. Under the tree with the persimmons in. I didn't put him on any list. I didn't know him well enough to know which list." },
        { s: 'ken', f: 'neutral', t: "Koromaru won't go past the end of the river road at all now. Not even to the corner. He sits down at the post office and that's the end of the walk." }
      ] },
      { s: 'ken', f: 'neutral', t: "That wasn't the thing. That was the lists. The thing is this." },
      { n: "He turned to the back of the notebook. The counting pages. Columns of numbers in pencil, one a night, from August, down page after page, every one different from the one above it: thirteen, nineteen, twenty-two, fourteen, thirteen, sixteen, seventeen, eighteen, twenty, all the way down, not one the same twice. And then, at the bottom of the last page, two numbers, one under the other." },
      { n: "The same number. Written twice. One under the other, in the same careful hand, as if he'd been afraid the second one would come out different if he didn't hold the pencil exactly the same way." },
      { n: "And next to them, very small, in the most careful pencil in the whole notebook, two dates. *12/3. 12/4.*" },
      { s: 'ken', f: 'happy', t: "The same one. Twice. Friday and Saturday. Nobody from the guesthouse stayed over and nobody went to the guesthouse and nobody was in the ward and nobody— and it was the same." },
      { s: 'ken', f: 'happy', t: "And one more with Koromaru. Both nights. I counted three times on Saturday to be sure. Mitsuru-san counted the fourth floor twice. She said *confirmed* down the stairwell. Like a memo." },
      { s: 'ken', f: 'neutral', t: "In August I said I didn't mind what the number was. I'd just like it to be the same one twice. I wanted you to know it happened. I wanted to tell you in a place that wasn't for counting." },
      { choose: [
        { t: "(Hold up your hand. High five.)", notes: 3, then: [
          { n: "She held up her hand. Ken looked at it, as if it were a form he hadn't been told he'd have to fill in; and then hit it, hard, with his bare cold palm, a real slap that rang off the frozen playground, and Koromaru sat up on his feet and barked, once, at the noise, delighted." },
          { s: 'ken', f: 'happy', t: "...That was undignified. I'd like to do it again." }
        ] },
        { t: "Twice. Well done, Ken. Jal-haet-da.", notes: 3, then: [
          { n: "His face opened. All at once, completely, the way it had at the hospital in April, and he didn't close it this time, or not fast; he let it stay open a while in the frost, a twelve-year-old being told well done in two languages on a bench in the cold." },
          { s: 'ken', f: 'happy', t: "...You said it wrong. The way I say it. Lee-san laughs when I say it like that. He doesn't laugh at anything else." }
        ] }
      ] },
      { s: 'ken', f: 'serious', t: "So I've got a number I like. In October I said I'd go down to the floor when I had one. The hallway. With the futons. That counts to fourteen." },
      { s: 'ken', f: 'serious', t: "Tonight. Before it changes. Because it'll change. Somebody'll stay over at the guesthouse, or the girls will come for dinner, and it'll go up, and I'll never have the same one twice again. I want to take it down there while I've got it." },
      { s: 'ken', f: 'neutral', t: "I asked Mitsuru-san. Directly. She said yes before I'd finished. She said *take Solar*. She said it like you're equipment." },
      { choose: [
        { t: "I'll bring all of them with me. Every one you counted.", notes: 3, then: [
          { s: 'ken', f: 'neutral', t: "...You can't bring that many people down a well, Solar-san." },
          { s: 'solar', f: 'neutral', t: "In my head. I'll count them on the way down." },
          { s: 'ken', f: 'neutral', t: "Oh. Yes. That's allowed. I'll count them on the way down as well. We'll check each other." }
        ] },
        { t: "I'll be there. So will Koromaru. Wherever you go.", notes: 2, then: [
          { n: "Koromaru, at his name, got off Ken's shoes and sat up in front of them both on the frozen sand, square, front paws together, ears up, the way he sat at the top of the river steps, and looked from one to the other with great patience, as if he'd been waiting for them to get to this part for some time." }
        ] }
      ] },

      { place: 'The Well · A Hallway of Doors', time: 'The Red Hour', bg: 'eq-well-6', music: 'eerie' },
      // BG: eqx-well-hallway-futons — an endless narrow apartment-building corridor deep underground in a red half-light, plain front doors in a row down both sides, all shut, and in front of every door a neatly made futon laid on the floor across the threshold, going away into darkness.
      { n: "*It's this one,* Fuuka said in their ears, very softly. *Ken-kun. It's still counting. I'm right here. I'll turn it down if you want.* And Ken said, very correctly, *no thank you, Fuuka-san, I'd like to hear it*, and they went down the last of the steps into the red." },
      { n: "A corridor. The plain narrow kind, in a building where people lived in apartments: a strip of worn linoleum down the middle, a skirting board, a ceiling light every few meters giving nothing, and down both sides, as far as the red went, front doors. Ordinary doors. Shut. A number on each, a little mat in front of each, a shoe-rack beside some of them with shoes in it, small, large, a pair of rain boots." },
      { n: "And across the threshold of every door, laid neatly on the linoleum, a futon. Made. The quilt turned down at one corner, the pillow plumped, square to the door, the way Ken laid his own in the front hall every night, the way you'd lay a futon across a door if you meant nobody to come out of it without you knowing." },
      { n: "There was somebody in each one." },
      { n: "Solar saw it as they came level with the first door, and stopped, and Ken stopped beside her, and Koromaru stopped against Ken's leg with his head low. A shape under the quilt. Asleep. On its back, the way people lie who've been put to bed by somebody else, the quilt drawn up to the chin and folded down neatly over the edge. A face on the pillow." },
      { n: "Junpei's. Asleep. Smiling." },
      { n: "Not his real smile, the big stupid one with his whole face in it. Smaller. Pleased. The smile of somebody who's been told there's nothing to get up for." },
      { n: "The next door: Fuuka, with her headphones on, on the pillow, asleep, smiling. The next: Hanni, curled on her side for once, both hands under her cheek, smiling. Then Akihiko, flat on his back with his arms at his sides, his knuckles taped, his face slack and pleased. Mitsuru. Yukari. Haechan. Aigis, her eyes shut, which they never were. Hyein. Yunjin." },
      { n: "And Ken's voice, from everywhere, from nowhere, from the ceiling lights that gave no light, in the tone he used for reports. Very correct. Counting." },
      { n: "*One. Two. Three. Four.*" },
      { n: "It counted as they walked. A number for each door, as they passed it, as if it were walking with them. *Eight. Nine. Ten.* Solar heard the real Ken beside her stop breathing on *nine*, on Hyein, and start again." },
      { ifFlag: 'dead.aigis', then: [
        { s: 'ken', f: 'sad', t: "...Aigis-san's here. On eight. Asleep. She never sleeps. She's smiling like she's been told she can stop." }
      ] },
      { n: "*Eleven.*" },
      { n: "A woman Solar had never seen. Thirty, maybe, with a tired kind face and her hair in a clip, asleep on her side with one hand under her cheek and a shopping bag folded neatly on the floor beside the pillow. Smiling." },
      { n: "Ken's knees went. Not all the way. Solar caught his arm, and he stood, and looked, and didn't say anything for a long time, and when he did it was in the report voice, every word in its place." },
      { s: 'ken', f: 'neutral', t: "...That's my mom. That's the clip. She had it on. She was coming home from the shops." },
      { s: 'ken', f: 'sad', t: "It's got her as well. It's kept her. Behind a door. With a futon on it. She looks so— she looks like it never happened." },
      { ifFlag: 'dead.shinjiro', then: [
        { n: "*Twelve.* Shinjiro. On his back, in his coat, the long one, whole, not a mark on it, his right hand open on the quilt. Smiling. Ken stopped dead in front of the door. Koromaru went very still against his leg and didn't make a sound." },
        { s: 'ken', f: 'sad', t: "...It doesn't know. It's the old number. It's the summer number. It doesn't know anything's happened." },
        { s: 'ken', f: 'serious', t: "Or it knows. And it doesn't care. It's got him anyway. It's kept him. Down here. Asleep. He looks so—" },
        { n: "He didn't finish. He looked at the face on the pillow for a long time, the smile on it that Shinjiro had never once worn in his life, and his own face went very hard, and very old, and he walked on." }
      ], else: [
        { n: "*Twelve.* Shinjiro. On his back, his arms crossed on his chest, the way Yukari made him lie in the kitchen. Smiling. Ken looked at the face and his mouth went tight." },
        { s: 'ken', f: 'neutral', t: "...He doesn't smile like that. Ever. He smiles like he's annoyed about it. This one's not annoyed about anything." }
      ] },
      { n: "*Thirteen.* Solar. Her own face on the pillow. Asleep. Smiling. She looked at it and felt nothing at all for a second, a perfect blank, and then her whole body went cold from the inside, the way it hadn't since the bridge." },
      { n: "*Fourteen.*" },
      { n: "The last door. At the end of the corridor, where the red got thicker. The futon in front of it was smaller than the others. Shorter. The quilt turned down at the corner, the pillow plumped, square to the door. Empty." },
      { n: "Waiting." },
      { n: "And lying across it, sideways, the whole white length of him over the turned-down quilt from one edge to the other, his chin on his paws on the pillow, his eyes open and fixed on Ken, was Koromaru." },
      { n: "He'd gone ahead. Solar hadn't seen him go. One moment he'd been against Ken's leg, and now he was there, at the end, across the fourteenth futon, the way he lay across the dorm door every night, keeping it. He didn't growl. He didn't move. He looked at Ken, and his tail moved once on the quilt, slowly, and stopped." },
      // CG: eqx-fourteen — a long red-lit underground apartment corridor lined with shut front doors, a made futon across each threshold with a sleeping smiling figure in it, and at the far end a small empty futon with its quilt turned down, a white dog lying across it sideways with his chin on the pillow, watching a boy in a school coat who stands a few steps away with a small notebook in his hand.
      { n: "*Fourteen,* said the voice again, Ken's voice, gently, the way you'd say it to somebody who'd lost their place. And then, as if it had always been part of the count: *Fourteen. Lie down, Ken. Then it'll be the same every night. Forever. Isn't that what you wanted? Everybody, all the time, behind the door. You'd never have to count again.*" },
      { n: "Ken stood there with the notebook in his hand. Solar saw his shoulders. She saw them want it. She saw the whole small body lean, a centimeter, toward the empty futon with the turned-down quilt, the way you lean toward a warm room when you've been out in the cold all day, and she saw the dog across it, not moving, not looking away, keeping it." },
      { s: 'ken', f: 'sad', t: "...It's right. That's the worst part. It's what I said. On the bench. I said it out loud. *Everybody, all the time, behind the door, with Koromaru on it.*" },
      { s: 'ken', f: 'sad', t: "And here it is. Everybody. Asleep. Smiling. Nobody going out. Nobody on any list. And Koromaru on the door." },
      { s: 'ken', f: 'serious', t: "He's not on the door, though. Look. He's on mine. He's not keeping it for me. He's keeping me *out* of it." },
      { choose: [
        { t: "(Take his hand. Count the real house. Out loud. Over it.)", notes: 3, flag: 'eqx-ken-real-count', then: [
          { n: "She took his hand. Cold, bare, the pencil still in it. And she started to count. Out loud. Not the doors in front of them; the other ones. The ones at home. The second floor first, the way he did it, door by door, every name." },
          { n: "Ken's head came round. He looked at her. Then, after a beat, his voice came in with hers, small and then less small, the report voice, very correct, and the two of them counted the dorm out loud in a corridor at the bottom of a well, the real one, the full one, the fathers on the third floor and the Kims in Mitsuru's room and Solji and Jaesang in Yukari's and Mitsuru on the couch under the terminal; every one; and the voice from the ceiling went on counting the old way under them, *five, six*, and they went on over it, *fourteen, fifteen, sixteen*, past where it stopped, past where it knew how to go, to the last door at home and the last name." },
          { n: "They said the number together, the real one, the one that was higher than fourteen. And the voice from the ceiling said *fourteen*, and then nothing, as if it had come to the end of a page and found the next one blank." },
          { s: 'ken', f: 'neutral', t: "...And one more. With Koromaru." },
          { n: "And he didn't look at the futons. He looked at the dog. And the dog got up, unhurried, off the fourteenth futon, and shook himself, ears flapping, the way you'd fix your hair if you didn't have hands, and came, and sat on Ken's foot." }
        ] },
        { t: "You can stop, Ken. You don't have to count anyone. Whichever you choose.", notes: 3, flag: 'eqx-ken-stopped-count', tally: { choose: 1 }, then: [
          { n: "He looked at her. Then at the corridor. All the doors, all the futons, all the smiling faces of everyone he'd ever counted, kept, asleep." },
          { n: "He closed the notebook. He put it in his inside pocket, and buttoned the pocket, and stood for a moment with his hand flat on the outside of his coat over it." },
          { n: "And then he said it. Not to her. To the corridor. To the doors, and the futons, and the voice in the ceiling that was his own. Quietly, the way he'd said it to the dog in the front hall in June, on his knees, with his hand on the white back." },
          { s: 'ken', f: 'neutral', t: "...You can go when you want. I'm just saying." },
          { n: "The voice stopped counting." },
          { n: "Solar didn't see what happened to the futons. She was looking at Ken. When she looked back down the corridor they were empty, all of them, the quilts thrown back, the pillows dented, the way beds look in the morning when people have got up and gone to school; and the doors were still shut; and nobody was asleep in front of any of them." },
          { n: "Koromaru got up off the fourteenth futon on his own, when he was ready, and shook himself, and came, and leaned on Ken's legs, the whole weight." }
        ] },
        { t: "(Don't say anything. Look at Ken. Look at the dog. Let him use the word he saved.)", ifFlag: 'eqx-ken-come', notes: 3, flag: 'eqx-ken-come-used', then: [
          { n: "She didn't say anything. She looked at Ken, and then at the dog across the empty futon, and then back at Ken, and saw him see what she'd seen." },
          { n: "He crouched down. In the middle of the corridor, on the worn linoleum, in his school coat, the way he'd crouched at the far fence of the playground in June. He put the notebook down beside him on the floor. He held his arms out." },
          { s: 'ken', f: 'neutral', t: "...Koromaru. Come." },
          { n: "Not firm. Not a command at all. Just a boy calling his dog, in a corridor full of everyone he loved asleep, the one word he'd been saving for something that mattered." },
          { n: "And Koromaru came. Up off the fourteenth futon all at once and down the corridor like something fired, white against the red, past every door, past every sleeping face without a glance, and hit Ken in the chest and knocked him flat on his back on the linoleum, and stood on him, and Ken lay there with his arms round the dog's neck laughing so hard he couldn't get up." },
          { n: "The voice in the ceiling had stopped. Nobody had heard it stop. When Solar looked down the corridor, the futons were empty, every one, quilts thrown back, pillows dented, the way beds look when everybody's got up and gone out; and at the end, the fourteenth, small, was still made, still turned down, still waiting, and nobody was going to lie in it." },
          { s: 'ken', f: 'happy', t: "...Chapter three. I knew it. I knew I was saving it for something." }
        ] }
      ] },
      { flag: 'eqx-floor-ken-koromaru-seen' },
      { n: "On the way back up the stairs Ken counted. Solar heard him. Under his breath, the way he always did. But not the doors. Not the people. The steps. *Forty-one, forty-two.* And at the top, where the red was going thin, he said the last number out loud and then, very firmly, the way you'd write a thing in pen: *That's the stairs. That's all. Stairs are allowed.*" },

      { place: 'Iwatodai Dorm · Front Hall', time: 'Late Night', bg: 'iwatodaidorm-livingroom-night-winter', soft: true },
      { n: "At the dorm Koromaru went to the front door and turned round twice and lay down along the bottom of it, nose to the gap, the way he did every night. Ken's futon was there, square, the quilt turned down at the corner. He looked at it for a long time." },
      { n: "Then he took the quilt and turned the corner back up. Flat. Unturned. And then he turned it down again himself, the other corner, the left one, which nobody had ever done for him, and got in, in his coat, and put his hand on the dog's back." },
      { ifChoice: { 'asks.ken-koromaru': 'yes' }, then: [
        { s: 'ken', f: 'neutral', t: "...Solar-san. The card. In June. You said you'd stay. I rubbed the numbers out." },
        { s: 'ken', f: 'neutral', t: "I'm not taking it back. I'd like to say that. I'm not asking for it back. I'm just saying I've been thinking that you should be able to change your mind as well. If you want. Like I did. You're allowed both. I'd like you to have that. I'm saying it now so it's on record." }
      ], else: [ { ifChoice: { 'asks.ken-koromaru': 'choose' }, then: [
        { s: 'ken', f: 'neutral', t: "...The card's still in my pocket. From June. I took it out tonight, down there, before the corridor, and I didn't read it. I just held it." },
        { s: 'ken', f: 'neutral', t: "I think I'm going to keep it forever. Not because it's a request. Because it's the first thing I ever asked for out loud. It should be somewhere." }
      ], else: [
        { s: 'ken', f: 'neutral', t: "...The maths book. The back cover. I've been counting down since June. I'm going to stop. Not because I know. Because I'd like to find out what it's like not to know a number." }
      ] } ] },
      { n: "At eleven Solar came out for water, and stopped on the stairs out of habit, on the step below the landing. Nobody was on it. The notebook wasn't on it. The landing between the second floor and the third was empty, a square of worn boards in the dark with the line of light under three doors along the corridor and the radio on the third floor playing something soft in English." },
      { n: "Then, from above, slippers. Mitsuru, on the fourth-floor landing, in her red dressing gown, looking down through the banisters at the empty step where a boy usually sat. She stood there a long time. Solar, below, in the dark, saw her open her mouth to give the number down the stairwell, and stop, and look at the empty landing." },
      { n: "And close her mouth, and not give it. And stand there anyway, a little while longer, the way you'd stand on a platform after a train has gone that you were only there to see off." },
      { n: "Then she went back to the command room. And downstairs, in the front hall, Solar heard the boy turn over in his sleep, and the dog's tail thump twice on the boards, and nobody counting anything at all, for the first time since August, in the whole full house." }
    ] }
  ]
});
