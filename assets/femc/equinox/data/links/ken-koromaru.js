/* Persona 3: Equinox · Ken & Koromaru · XI Strength (a duo link). Link data (femc-equinox-game.html). Format: link fields
   in assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: rank 1 only (from 4/13; their home is the shrine playground on Sunday, Tuesday, Thursday and Saturday after
   school, so 4/13 itself). Ranks 2–10 still to write. Shape: the stub fields from assets/femc/equinox/data/links.js
   (members / cast kept; this file wins over the stub). Both members are in every rank: Koromaru doesn't talk, but he's a
   full presence (his lines are barks and what he does).
   Solstice's Ken and Koromaru links are shared memory (Ken: the composition, the Featherman strap, "allowed both"; Koromaru:
   Solar's feeding note, the plum end, facing the door, two sets of tracks in the snow). Nothing reads Solstice link standing.
   Flags this file sets: eqx-ken-hospital (rank 1: Solar offers to go with Ken to see Shinjiro). Nothing reads it yet. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'ken-koromaru', name: 'Ken & Koromaru', short: 'Ken & Koromaru', arcana: 'Strength', numeral: 'XI', from: 'Persona 3', kind: 'group',
  romance: null, starts: '4/8', lodging: 'dorm', members: ['ken', 'koromaru'], cast: { ken: 'Ken', koromaru: 'Koromaru' },
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
    ] }
  ]
});
