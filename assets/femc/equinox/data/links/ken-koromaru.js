/* Persona 3: Equinox · Ken & Koromaru · XI Strength (a duo link). Link data (femc-equinox-game.html). Format: link fields
   in assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1–3 (from 4/13; their home is the shrine playground on Sunday, Tuesday, Thursday and Saturday after
   school, so 4/13 itself). Ranks 4–10 still to write. Shape: the stub fields from assets/femc/equinox/data/links.js
   (members / cast kept; this file wins over the stub). Both members are in every rank: Koromaru doesn't talk, but he's a
   full presence (his lines are barks and what he does).
   Solstice's Ken and Koromaru links are shared memory (Ken: the composition, the Featherman strap, "allowed both"; Koromaru:
   Solar's feeding note, the plum end, facing the door, two sets of tracks in the snow). Nothing reads Solstice link standing.
   Flags this file sets: eqx-ken-hospital (rank 1: Solar offers to go with Ken to see Shinjiro). Nothing reads it yet.
   Rank 2 (after 4/24): reads eqx-ken-hospital and ifEvent eqx-knock; cast adds the desk nurse. Sets nothing.
   Rank 3 (after 6/5, the shrine playground; branches on eqx-last-grain, ifBefore 9/1, eqx-hunted) records the duo's ask: tally
   asks.ken-koromaru (+ cakes / choose). Sets nothing else. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'ken-koromaru', name: 'Ken & Koromaru', short: 'Ken & Koromaru', arcana: 'Strength', numeral: 'XI', from: 'Persona 3', kind: 'group',
  romance: null, starts: '4/8', lodging: 'dorm', members: ['ken', 'koromaru'], cast: { ken: 'Ken', koromaru: 'Koromaru', nurse: 'Nurse' },
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
    ] }
  ]
});
