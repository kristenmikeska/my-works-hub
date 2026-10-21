/* Act I story events. Revamp story data (femc-game.html). Each event: id, date (M/D), slot, title, place, time, scene lines.
   Scene lines use the link format, plus the event-only lines: { battle }, { dark }, { join }, { unlock }, { flag }, { act }, { cg }.
   `cast` names speakers who have no portrait. */
(window.FEMC_GAME_EVENTS ||= []).push(
  { id: 'a1-magician', date: '4/9', slot: 'evening', title: 'the magician', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
    { music: 'night' },
    { n: "The moon that night came up over the station fat and low and nearly round, the color of a yolk, and the dorm had the particular quiet of a Thursday in a building with too few people in it. The television was murmuring a weather report nobody was watching. The wind kept trying the front door and giving up." },
    { n: "Akihiko had gone out after dinner for a run, with his gloves in his bag, and Mitsuru had stood at the bottom of the stairs looking at the door for a long time after it closed, and then gone up to the fourth floor without a word. Yukari had her homework open on the coffee table. She had not turned a page in forty minutes." },
    { s: 'yukari', f: 'neutral', t: "He's not running. You know that, right? Nobody takes an Evoker on a run." },
    { choose: [
      { t: "Where's he going?", notes: 0, then: [
        { s: 'yukari', f: 'serious', t: "Where he always goes. Somewhere Mitsuru-senpai told him not to." }
      ] },
      { t: "(Look at the clock.)", notes: 0, then: [
        { n: "Eleven fifty-one. Solar looked at it, and Yukari watched her look at it, and went back to not turning her page." }
      ] }
    ] },
    { place: 'Iwatodai Dorm · Lounge', time: 'The Dark Hour' },
    { dark: true },
    { music: 'badfeeling' },
    { n: "Midnight came the way it came every night now, all at once and without asking. The television died mid-word. The lamps went out. The green came up out of nowhere and settled over the couches and the counter and Yukari's untouched homework like dust on furniture in a house nobody lived in anymore." },
    { n: "Then the front door banged open hard enough to bounce off the wall, and Akihiko came through it backwards, one arm clamped tight across his ribs and blood running in a thin bright line from his hairline to his jaw, and he was grinning, which was the worst part." },
    { s: 'akihiko', f: 'happy', t: "You two are going to want to see this. Actually, no. You're really not going to want to see this." },
    { s: 'akihiko', f: 'serious', t: "It's big, and it followed me. It's at the gate." },
    { n: "Mitsuru came down the stairs fast and silent, her Evoker at her hip and her face shut like a ledger, and took in the blood and the door and the green in one look, and didn't waste a second of it on anger." },
    { s: 'mitsuru', f: 'neutral', t: "Takeba. Take Solar out the back. Akihiko and I will draw it to the front." },
    { s: 'akihiko', f: 'surprised', t: "...You're not going to yell at me?" },
    { s: 'mitsuru', f: 'neutral', t: "Later. At length." },
    { n: "Yukari grabbed her wrist and ran. The back hall, the kitchen, the door to the yard, and on the other side of the frosted glass something was pressing, a great many somethings, hands, flat and dark and spread like starfish, and the glass creaked. They went up instead. Second floor, third, the fourth with its heavy door and Mitsuru's empty chair, the narrow last flight, and Yukari shoved the roof door open with her shoulder and slammed it behind them and stood with her back against it, breathing like she'd been pulled out of water." },
    { place: 'Iwatodai Dorm · Rooftop', time: 'The Dark Hour' },
    { dark: true },
    { n: "The roof was all wind and green and laundry, somebody's sheets still pegged to the line and snapping, the bay spread out below like a sheet of dark glass, and above it all the moon, swollen and enormous and the wrong color, close enough to make her want to duck." },
    { s: 'yukari', f: 'serious', t: "Okay. Okay. We're fine. It can't get up here, it's four floors, it would have to..." },
    { n: "A hand came over the railing at the far end of the roof. Then another, and another, and then something hauled itself up after them like a swimmer climbing out of a pool, a body made of dark and arms, far too many arms, some of them ending in blades, and at the center of it all a single blue mask with a smile painted on it that did not move when the rest of it did." },
    { n: "Yukari had her Evoker at her temple before Solar saw her draw it. Her hand was shaking so hard the barrel tapped against her hair." },
    { s: 'yukari', f: 'sad', t: "I can do this. I can do this, I've practiced, I've done this a hundred times, I..." },
    { n: "Her finger didn't move. The thing on the railing turned its smile toward the sound of her voice." },
    { choose: [
      { t: "(Step in front of her.)", notes: 0, then: [] },
      { t: "Yukari. Behind me.", notes: 0, then: [
        { s: 'yukari', f: 'surprised', t: "What? You can't just..." }
      ] }
    ] },
    { n: "Her body had opinions about this. Not in front, it said, very clearly, the way it had said it on the tiles. Never in front. A little behind and to the side, where the first hit goes to something else." },
    { n: "She stepped in front." },
    { n: "The Evoker was cold against her temple, and her arm was steady, and this time, unlike the first time, nobody else's hand was doing it. She felt the decision go down her arm like a current. She chose it." },
    { battle: { id: 'magician', op: 'magician', desc: 'The Magician on the dorm roof', forced: true } },
    { music: 'night' },
    { n: "Afterward the roof was very quiet. The Shadow had come apart the way they all did, not into blood but into black ash, soft as burnt paper, and the wind took it off the edge of the building in long slow ribbons that drifted out over the bay and were gone. The sheets on the line kept snapping. Somewhere below, a door banged, and banged again." },
    { n: "Solar stood with the Evoker hanging at her side and looked at her hand. It had been hers the whole way through. She didn't know yet whether that made it better." },
    { s: 'yukari', f: 'surprised', t: "Your Persona. When it came out, the name. Did you see it?" },
    { n: "She had. When a Persona answered, its name hung in the air for a second, bright as a card turned face up, and Yukari had watched her own hang there clean and steady a hundred times in practice. Haenim's hadn't held still. It had jumped and slid and flickered between shapes, half in one alphabet and half in another, like a channel that wouldn't come in." },
    { s: 'yukari', f: 'serious', t: "It was glitching. Like a TV between stations. Is it supposed to do that?" },
    { choose: [
      { t: "It does that.", notes: 0, then: [
        { s: 'yukari', f: 'neutral', t: "...Okay. Sure. That's normal. Everything's normal." }
      ] },
      { t: "I don't know.", notes: 0, then: [
        { s: 'yukari', f: 'neutral', t: "Yeah. No. Me neither. I just thought, you know. Somebody should." }
      ] },
      { t: "(Say nothing.)", notes: 0, then: [
        { n: "Solar didn't answer, and Yukari looked at her a moment longer, and then, kindly, didn't ask again." }
      ] }
    ] },
    { s: 'yukari', f: 'sad', t: "I froze. I'm sorry. I've been doing this for a year, and you've been here three days, and I froze." },
    { n: "Before Solar could say anything to that, the roof door crashed open behind them, and Akihiko came through it with his fists up and blood on his collar, and stopped, and looked at the ash still lifting off the railing, and then at her, and his whole face lit up like a match." },
    { s: 'akihiko', f: 'happy', t: "You did. Ha! You did it on purpose this time, didn't you. I can tell." },
    { n: "Mitsuru came up behind him, a little out of breath, which Solar suspected was rare. She looked at the railing, and the ash, and Yukari's white face, and Solar's steady hand, for a long time, and filed every bit of it." },
    { s: 'mitsuru', f: 'neutral', t: "Tomorrow, after school. The fourth floor. The Chairman would like to speak with you." },
    { s: 'mitsuru', f: 'neutral', t: "So would I." },
    { n: "The green held for another forty minutes. They spent it on the roof, the four of them, not talking much, Akihiko with a folded towel pressed to his head and Yukari with her knees pulled up, until the light drained out of the sky and the streetlights came back on, orange and ordinary, one by one, all the way down to the water." },
    { dark: false }
  ] },

  { id: 'a1-armband', date: '4/10', slot: 'after', title: 'the armband', place: 'Iwatodai Dorm · Command Room', time: 'After School', cast: { ikutsuki: 'Ikutsuki' }, scene: [
    { music: 'sees' },
    { n: "The fourth floor had a heavy door with a keypad, and behind it a long table and a wall of monitors, all dark, and the smell of new electronics and old carpet, and a window with the blinds half drawn so the afternoon came in striped. A spring wind was rattling the glass in its frame. Solar counted the exits without meaning to. One. The door she'd come in by. She didn't love that." },
    { n: "Akihiko was in a chair by the wall with a bandage taped across his hairline and the wounded dignity of a man who'd been yelled at, at length. Yukari sat beside him with her hands in her lap. Mitsuru stood at the head of the table. And in the middle of it all sat the Chairman, beaming, like he'd organized the whole thing as a surprise party." },
    { s: 'ikutsuki', t: "Ah! Our heroine of the hour. The Dark Hour, I should say. Ha ha." },
    { s: 'mitsuru', f: 'neutral', t: "Chairman." },
    { s: 'ikutsuki', t: "Yes, yes, to business. Last night you summoned your Persona of your own accord, before you've been with us a week, against a Shadow most of our members would have preferred not to meet on their third year." },
    { s: 'ikutsuki', t: "So I'll put it plainly. We'd like you to join the Specialized Extracurricular Execution Squad. Officially. Tartarus, the Dark Hour, all of it." },
    { n: "Mitsuru took something from the table and held it out across the wood. A red armband, plain, with S.E.E.S. stitched into it in neat black letters, the kind of thing you'd wear for hall monitor duty if hall monitors fought monsters." },
    { s: 'mitsuru', f: 'neutral', t: "It's yours if you want it." },
    { s: 'ikutsuki', t: "And of course, you're under no obligation at all. It must be your own decision, entirely of your own free will." },
    { n: "Free will. The words caught on something in her. She had read them before, on a sheet of heavy cream paper in a blue room, written in an old hand by someone who had believed very much in the idea, and she had stopped there then, too, with her jaw set and something in her chest gone hard and still, at the idea of anyone writing down for her what she had chosen." },
    { n: "Then she looked at the armband. Nobody had written anything down. Mitsuru was simply holding it out, and waiting, and her arm was very steady, and she would, Solar understood, have waited like that all afternoon." },
    { choose: [
      { t: "(Take the armband.)", notes: 0, then: [] },
      { t: "What happens if I say no?", notes: 0, then: [
        { s: 'mitsuru', f: 'neutral', t: "Then you'll still live here, and still go to Gekkoukan, and still have a room at the end of the girls' hall. Nothing about that changes." },
        { n: "That was the answer she'd needed, it turned out. She took it." }
      ] },
      { t: "Is there a form?", notes: 0, then: [
        { s: 'ikutsuki', t: "Ha! No, no. Well. There's one. It's very short. It's mostly a waiver." },
        { s: 'mitsuru', f: 'neutral', t: "There's no form." },
        { n: "She took it." }
      ] }
    ] },
    { n: "She pinned it to her left sleeve, where the petal had landed at the school gate on the first morning. It sat there, red and certain. It didn't feel like hers yet. It felt like something she'd be able to grow into, which was more than she could say for the uniform." },
    { flag: { armband: true } },
    { s: 'mitsuru', f: 'neutral', t: "There's one more thing. In Tartarus, and on nights like last night, someone has to make the calls in the field while I'm on the radio. I'd like that to be you." },
    { s: 'solar', f: 'surprised', t: "Me. I've been here four days." },
    { s: 'mitsuru', f: 'neutral', t: "You've been in Tartarus more recently than I have." },
    { s: 'mitsuru', f: 'neutral', t: "And Akihiko fights as though he's alone, even when he isn't." },
    { s: 'akihiko', f: 'neutral', t: "...That's fair. I was going to say her anyway." },
    { s: 'yukari', f: 'sad', t: "Yeah. I froze last night. I know. It's fine." },
    { s: 'yukari', f: 'neutral', t: "...It's her. It should be her." },
    { choose: [
      { t: "All right.", notes: 0, then: [] },
      { t: "I'll try.", notes: 0, then: [
        { s: 'mitsuru', f: 'neutral', t: "That's all anyone in this room has ever done." }
      ] },
      { t: "(Nod.)", notes: 0, then: [] }
    ] },
    { s: 'ikutsuki', t: "Wonderful! Well. I must say, it looks like we've found a leader who really shines." },
    { s: 'ikutsuki', t: "Solar? Shines? ...No? I'll workshop it." },
    { n: "Nobody laughed. Akihiko made a small noise into his fist that might have been a cough. Through the striped window the wind kept worrying at the glass, and the afternoon went on outside, ordinary, all the way to the water." }
  ] },

  { id: 'a1-junpei-joins', date: '4/18', slot: 'evening', title: 'reporting for duty', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
    { music: 'joy' },
    { n: "It was a warm Saturday, the first properly warm evening of the spring, and somebody had propped the front door open with a shoe to let the air in, so that the lounge smelled of cut grass and exhaust and the cherry trees down the street going over. Then Junpei came through it backwards, dragging a duffel bag that was very clearly holding everything he owned and losing." },
    { s: 'junpei', f: 'happy', t: "Junpei Iori! Reporting for... whatever this is! Duty! Reporting for duty!" },
    { s: 'yukari', f: 'surprised', t: "Oh no. Is he living here? Is that what's happening?" },
    { s: 'akihiko', f: 'happy', t: "He's living here." },
    { n: "He dropped the bag at the foot of the stairs and stood in the middle of the lounge in his cap and a jersey for a team that had lost on Thursday, bouncing a little on his toes, grinning at everyone, and his hands kept going into his pockets and coming out again like they didn't know where they were supposed to live yet." },
    { n: "Mitsuru came down with a slim black case and opened it on the coffee table. Inside, in the foam, was an Evoker, silver, with the crest on the grip. Junpei went quiet for the first time since he'd arrived." },
    { s: 'mitsuru', f: 'neutral', t: "This is yours, Iori." },
    { n: "He picked it up the way you'd pick up a sleeping animal you weren't sure about. He turned it over. He looked down the barrel, and Yukari and Akihiko both said his name at once, sharply, and he stopped." },
    { s: 'junpei', f: 'surprised', t: "Whoa. It's heavier than it looks. It's not loaded. Right? It's not, like, actually a..." },
    { s: 'mitsuru', f: 'neutral', t: "It isn't a gun, Iori. It's a key." },
    { n: "He looked at himself in the dark glass of the television, the Evoker held up beside his face, and struck a pose, and held it, and then his face changed in the reflection when he thought nobody was watching, and he lowered it slowly." },
    { s: 'junpei', f: 'neutral', t: "So I just. Point it at my head. And pull. And that's, like. Normal. For you guys." },
    { choose: [
      { t: "(Show him how you hold it.)", notes: 0, then: [
        { n: "Solar took out her own and lifted it to her temple, slowly, so he could see, the grip loose and the arm relaxed and the breath out first. He copied her. His arm was shaking a little. Hers wasn't, and she wished, briefly, that it were, so he wouldn't feel alone in it." }
      ] },
      { t: "It gets easier.", notes: 0, then: [
        { s: 'junpei', f: 'neutral', t: "Yeah? Does it, though? Or do you guys just get better at faces?" },
        { n: "She didn't have a good answer to that one." }
      ] },
      { t: "Don't think about it.", notes: 0, then: [
        { s: 'junpei', f: 'happy', t: "Oh, easy. Yeah. Not thinking is like, my whole thing." }
      ] }
    ] },
    { join: 'junpei' },
    { s: 'mitsuru', f: 'neutral', t: "Which brings me to Tartarus. With four of you in the field, we can start climbing in earnest." },
    { s: 'mitsuru', f: 'neutral', t: "From tonight, the tower is open to you whenever you judge the team ready. That's your call, Solar. Not mine. As long as everyone is fit." },
    { s: 'mitsuru', f: 'neutral', t: "But understand that it takes something out of you. You won't feel it in there. You'll feel it the next morning, and all day after. Go when you're rested. Rest when you've been." },
    { unlock: 'tartarus' },
    { s: 'junpei', f: 'surprised', t: "Wait. She picks? Like, she's the boss boss?" },
    { s: 'akihiko', f: 'neutral', t: "She's field leader. Mitsuru made it official last week." },
    { s: 'junpei', f: 'happy', t: "Oh. Cool! Cool cool cool. Leader. Nice. Makes sense." },
    { n: "He said it with a grin, and the grin was fine, mostly. Then he picked up his duffel bag and started up the stairs with it, and got about four steps before the strap broke and everything he owned came back down them, socks and manga and a baseball glove and an alarming quantity of chips, and the whole lounge, Mitsuru included, watched it go." },
    { s: 'junpei', f: 'flustered', t: "...I'll unpack tomorrow." }
  ] },

  { id: 'a1-movie-night', date: '5/3', slot: 'evening', title: 'movie night', place: 'Iwatodai Dorm · Lounge', time: 'Evening', cast: { ikutsuki: 'Ikutsuki' }, scene: [
    { music: 'tender' },
    { n: "Golden Week had emptied the city of everyone with somewhere to go, and by the third night of it the dorm was the only building on the street with its lights on. Everyone else had gone home to their families, or to the beach, or to a grandmother in the countryside. S.E.E.S. had either nowhere to go or somewhere they'd decided not to, and nobody asked anybody which." },
    { n: "It had been Junpei's idea. He came back from the rental place on the strip with a plastic bag and four DVDs and the look of a man who had been thinking about this all day, and announced, to the lounge in general, that it was movie night, and that attendance was mandatory, and that this came from the leader, which it did not." },
    { n: "The Chairman put his head round the front door on his way past, smelling of the night air and somebody's office, and looked at the five of them arranged around the coffee table." },
    { s: 'ikutsuki', t: "Movie night? How wonderful. I'd stay, but I'd hate to reel you in. Reel! Like a film reel. Ha ha." },
    { s: 'mitsuru', f: 'neutral', t: "Goodnight, Chairman." },
    { s: 'ikutsuki', t: "Goodnight, goodnight." },
    { n: "There were three candidates. Junpei had a horror movie with a girl on the cover screaming into a well. Yukari had a romance with a couple on the cover not quite kissing in the rain. Akihiko had a boxing movie, obviously, and was holding it like a man holding a winning lottery ticket. Mitsuru hadn't brought one. She had asked, quietly, whether the store let you take them home, and when Junpei said yes, that was the whole point, she'd looked faintly scandalized and said nothing more." },
    { s: 'junpei', f: 'happy', t: "Okay, it's a tie, everybody's being stubborn, so the leader decides. That's how it works. Leader. Decide." },
    { choose: [
      { t: "(The horror movie.)", notes: 0, then: [
        { n: "Yukari watched the entire thing from behind a cushion and said it wasn't even scary. Junpei screamed louder than the girl on the cover, twice, and claimed both times that it was a joke. Mitsuru watched without blinking, and at the end said that the well was structurally implausible." }
      ] },
      { t: "(The romance.)", notes: 0, then: [
        { n: "Akihiko fell asleep twenty minutes in, upright, like a horse. Junpei said it was boring and then went very quiet during the rain scene and said afterward that he had allergies. Mitsuru watched with total seriousness and at the end asked why they hadn't simply talked to each other in the first place." }
      ] },
      { t: "(The boxing movie.)", notes: 0, then: [
        { n: "Akihiko narrated the footwork through the whole thing, quietly, like a sports commentator who'd been asked to keep it down. Yukari said she didn't get it. Mitsuru, unexpectedly, leaned forward in the final round and said, under her breath, that he should have led with his left, and Akihiko turned and looked at her like he was seeing her for the first time." }
      ] }
    ] },
    { n: "Akihiko burned the popcorn. He'd put it in for eight minutes because the bag said three and he'd decided that was a suggestion, and the whole kitchen smelled like a small forest fire for the rest of the night, and they ate it anyway, the black bits included, because Junpei said that was where the flavor lived." },
    { s: 'akihiko', f: 'neutral', t: "It's not burnt. It's well done. There's a difference." },
    { s: 'yukari', f: 'neutral', t: "There is literally no difference, Senpai." },
    { s: 'junpei', f: 'happy', t: "Leave him alone, he's grieving. Pass the black ones, I'm serious, they're the best part." },
    { s: 'mitsuru', f: 'neutral', t: "...They are, actually. I'm not sure what that says about me." },
    { n: "Somewhere in the second hour, Solar noticed that Mitsuru had taken her shoes off. They were side by side under the armchair, neat as a pair of commas, and Mitsuru had her feet tucked up under her on the cushion like a girl at a sleepover. Solar had never once seen her without shoes. She didn't say anything. It felt like something you'd scare off if you looked at it directly." },
    { n: "She was wedged on the couch between Yukari and Junpei, which had happened gradually and without anyone discussing it, Yukari's shoulder warm against her left side and Junpei taking up far more than his share of the right, and Akihiko was on the floor with his back against the couch, close enough that she could feel him laugh through her shins. Outside, a warm rain had started, soft, ticking against the windows. The lamp was low. The room smelled like burnt butter and somebody's shampoo." },
    { n: "She didn't decide to fall asleep. Her body did it for her, somewhere between one scene and the next, the way it did most things, except that this time it wasn't bracing for anything." },
    { n: "When she woke, the credits were rolling, and there was a blanket over her that hadn't been there before, tucked in at the shoulder by somebody careful. Yukari was asleep against her arm. Junpei was asleep with his mouth open. Akihiko had his head tipped back against the cushion beside her knee, eyes closed, not quite asleep. And Mitsuru was standing by the television with the remote in her hand, turning the volume down, one notch at a time, very slowly, so as not to wake anyone." },
    { n: "Their eyes met across the dark lounge. Mitsuru put one finger to her lips. Solar shut her eyes again, and stayed exactly where she was." }
  ] },

  { id: 'a1-priestess', date: '5/9', slot: 'evening', title: 'the priestess', place: 'Iwatodai Dorm · Command Room', time: 'Evening', scene: [
    { music: 'badfeeling' },
    { n: "The moon was full that night, and the whole dorm knew it before anyone said so, the way you know a storm is coming by the way the air sits on your skin. Nobody ate much at dinner. Junpei talked twice as much as usual, which was a lot. Akihiko still wasn't cleared to fight, which he had taken as a personal insult, and tonight he sat at the command room table taping his knuckles anyway, for nothing, with the focus of a surgeon, and didn't say a word." },
    { place: 'Iwatodai Dorm · Command Room', time: 'The Dark Hour' },
    { dark: true },
    { n: "At two minutes past midnight, with the green already lying in the windows, Mitsuru had every monitor lit, and her face in their glow was calm and pale and very far away." },
    { s: 'mitsuru', f: 'neutral', t: "The readings are on the monorail line. A train stopped between stations when the hour began, the way they all do. Now it's moving." },
    { s: 'mitsuru', f: 'neutral', t: "Something is driving it. If it reaches the end of the line at speed, the people on board won't wake up for anything." },
    { s: 'junpei', f: 'surprised', t: "A ghost train. A GHOST TRAIN. Dude. I called this. I said ghosts, like, a month ago." },
    { s: 'yukari', f: 'serious', t: "You did not call this. Nobody called this." },
    { s: 'mitsuru', f: 'neutral', t: "I'll be on the radio. Solar, the field is yours. However you go in, go in together." },
    { place: 'Iwatodai Station · Platform', time: 'The Dark Hour' },
    { dark: true },
    { n: "The station at midnight was a picture of a station, the departure board frozen mid-flip, the turnstiles dead, a coffin at the top of the stairs with a commuter's umbrella still hooked over where its arm would have been. And at the far end of the platform, where no train should have been moving at all, the monorail was sliding past, slowly, gathering speed, every carriage lit that sick green from inside and full of upright black shapes standing in the aisles, swaying a little on the turns." },
    { n: "The last door was open. They ran for it." },
    { battle: { id: 'priestess', op: 'priestess', desc: 'The Priestess on the monorail', forced: true } },
    { music: 'night' },
    { n: "The brakes screamed for a long time. Long enough that she had time to think, very clearly, with her cheek against the cold glass of the front window and her whole body braced, that she didn't know what she'd do if they didn't hold, and that it was a strange thing to not know at the end of your life, and then they held, and the train shuddered and groaned and stopped, its nose a few meters from the buffers at the end of the line, alongside an empty platform, with a long, exhausted sigh of air." },
    { n: "The Priestess was ash. Soft drifts of it lay in the aisle and on the seats and on the shoulders of the coffins, who would never know, and the doors slid open on their own, and the three of them stepped out onto the platform like people stepping off a ride they had not enjoyed." },
    { s: 'junpei', f: 'happy', t: "Did you SEE that? Did you see me? I was like, bam, and it was like, gahh, and then I was all..." },
    { s: 'yukari', f: 'neutral', t: "We were there, Junpei." },
    { s: 'junpei', f: 'happy', t: "Then you SAW me." },
    { n: "The radio in her ear crackled, and it wasn't Mitsuru. It was Akihiko, too close to the mic, from wherever she'd made him sit." },
    { s: 'akihiko', f: 'happy', t: "Not bad. Not bad at all. Leader." },
    { s: 'mitsuru', f: 'neutral', t: "Well done. All of you. The train is stopped and the readings are clear. Come home." },
    { n: "Solar's hands had started shaking somewhere between the brakes and the doors, a fine hard tremor that went up into her wrists. She put them in her pockets so nobody would see. The others turned toward the stairs, still talking over each other, Junpei doing the sound effects again, and she fell in a step behind them, like she always did, and looked back once along the platform, out of habit, to count it." },
    { music: 'mystery' },
    { n: "There was a girl at the far end." },
    { n: "Not a coffin. A girl, standing on the platform in the green light with her weight on one hip, blonde hair in two high tails that moved when she turned her head, which they shouldn't have, because nothing moved in the hour. She was holding a phone up in front of her face, frowning at it, the way people do when they're looking for a signal." },
    { n: "The phone was wrong. Everyone's phone in this city folded in half, Yukari's, Junpei's, the clunky silver one Mitsuru had given her. This one didn't fold. It was a flat bright pane, too thin, nearly all screen, lit up like a little window into somewhere else. Solar's stomach dropped, the way it had on the tiles the first night, when she'd reached into her pockets for something and found nothing." },
    { s: 'solar', f: 'surprised', t: "Yukari..." },
    { n: "Yukari turned. So did the others. They were looking at the train, at the ash still sifting down off its roof in the green, Junpei squinting at a dent in the front car and then miming a swing at it. When Solar looked back, the end of the platform was empty." },
    { s: 'yukari', f: 'neutral', t: "What? Did you see something?" },
    { choose: [
      { t: "No. Nothing.", notes: 0, then: [
        { s: 'yukari', f: 'neutral', t: "Okay. Come on. I want to sleep for a week." }
      ] },
      { t: "(Keep looking at the end of the platform.)", notes: 0, then: [
        { n: "She kept looking. Green light. Ash. The yellow line along the edge. Nothing else. Yukari waited, and then touched her elbow, gently, and Solar let herself be steered toward the stairs." }
      ] }
    ] },
    { n: "On the stairs the green drained out of everything at once, and the station lights came back on, white and buzzing, and the departure board finished its flip. Somewhere below, a train announcement started halfway through a sentence. Solar didn't look back again. She didn't need to. She'd counted. Every way off that platform went past her." },
    { dark: false },
    { act: { numeral: 'II', title: 'déjà vu' } }
  ] }
);
