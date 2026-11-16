/* Persona 3: Equinox · Act I story events, 4/16 to 5/28 (format: assets/femc/game/scene.js; events: core.js dueEvent).
   Loads after story-opening.js. Ten dated events; the two full moons are operations: each has a { battle: { kind: 'operation' } }
   line whose op is listed in calendar.js `ops` (so the engine's plain full-moon fallback never plays on top of it), and the
   battle side plays it from battle.js SCRIPTS ('eqx-knock', 'eqx-first-hill').
   Bookkeeping (data/flags.js): counters `cakes`, `choose`, `asked`, `doors.R`; choices `asks.solar.supper`,
   `asks.solar.smile`; flags listed in flags.js `hooks` / `cosmetic`. Nothing in this file reads them yet.
   Art still to make: `// CG: eqx-*` and `// BG: *` comments mark it; stand-in backgrounds are used until then. */
(window.FEMC_GAME_EVENTS ||= []).push(

  { id: 'eqx-supper', date: '4/16', slot: 'after', consumes: true, title: 'stay for supper', place: 'Iwatodai · The Oka Boarding House', time: 'After School',
    cast: { solar: 'Solar', hyein: 'Hyein', hanni: 'Hanni', mrsoka: 'Mrs. Oka' },
    scene: [
    { bg: 'outside-daytime-neighborhood', music: 'tender' },
    // BG: oka-boarding-house-gate — an old two-storey wooden Japanese house behind a low gate on a quiet riverside street in late afternoon, a persimmon tree, an old stone well with a heavy round cap beside it.
    { n: "Mrs. Oka had telephoned the dorm on Thursday night and asked for *the girl with the tea*, and Fuuka, who'd answered, had stood in the hall with the receiver against her chest for a long moment trying to work out which girl that was, and then had come and found Solar, and hadn't been able to say why she was so sure." },
    { n: "The message was that there was a box. Spare bedding, a whole cupboard of it, futons and covers and a quilted thing nobody had slept under in years, and wouldn't the young people at the guesthouse want some of it, with the nights still cold. Somebody would need to come and fetch it. Somebody strong, she'd said, and then, laughing, *or two somebodies*." },
    { n: "Hyein came. Hyein had heard the word *door* somewhere in the sentence, Solar suspected, and couldn't have stayed home if she'd tried. She walked the river street beside her in a borrowed cardigan with the sleeves over her hands, talking the whole way about nothing, the price of strawberries, a dog she'd seen on the monorail wearing shoes, and went quiet at the gate without seeming to notice she'd done it." },
    { s: 'hyein', f: 'neutral', t: "...The latch is on the outside. Did you know the latch is on the outside?" },
    { s: 'solar', f: 'neutral', t: "I know." },
    { s: 'hyein', f: 'neutral', t: "That's so polite. That's the politest gate I've ever seen. It's like it's saying *you first*." },
    { n: "She said it like a compliment. She lifted the hook herself, before Solar could, and went in, and the gate swung shut behind them both with the small wooden knock it always made, and in the persimmon tree, which had a full head of new leaves now and should have been loud with sparrows at four in the afternoon, nothing moved at all." },
    { place: 'The Oka Boarding House · Kitchen', time: 'After School', bg: 'iwatodaidorm-kitchen', soft: true },
    // BG: oka-boarding-house-kitchen — a warm old-fashioned Japanese kitchen with a long worn wooden counter, steam from pots, a tin painted with cranes on the counter, a window onto a garden and a persimmon tree.
    { n: "The box was in the hall already, tied with string, waiting. That should have been the whole visit. It was never the whole visit, here; Solar had worked that out the first time, the way you work out a current by stepping into it." },
    { n: "The kitchen was hot and close and smelled of soy and ginger and rice just off the boil, and something slow in a heavy pot that had been going since morning, and Mrs. Oka was at the stove in her pine-tree apron with her white gloves on, stirring, and she turned round when they came to the doorway and lit up the way she always did, from the mouth upward, as if somebody had walked in carrying good news." },
    { s: 'mrsoka', f: 'neutral', t: "There they are. Two of you. Oh, and this one I haven't met. Come here, child, let me look at you. No, no, you come here, I won't come out there, I've got my hands in everything." },
    { n: "Her hands weren't in anything. They were folded on her apron, clean, gloved, a dust of flour at the cuffs. Hyein went to her anyway, the way Hyein went toward anything that called her, and Mrs. Oka took her face between both gloved palms, gently, the way a grandmother does, and looked at it for a long time." },
    { s: 'mrsoka', f: 'neutral', t: "Oh, you're tired. Look at those eyes. You're not sleeping." },
    { s: 'hyein', f: 'surprised', t: "I— no. Not really. I sleep. It's just in bits." },
    { s: 'mrsoka', f: 'neutral', t: "Somebody across your door every night, and you lying there listening to them breathe so you'll know they're still there. I know. I know." },
    { n: "Hyein's mouth opened, and closed. She hadn't told anyone that. Solar knew she hadn't, because Hanni hadn't either; Hanni slept across that door and said *my room's cold*, and everyone in the dorm let her, and nobody had ever once said out loud why. Mrs. Oka let go of her face and patted her cheek, twice, and turned back to the stove, and Hyein stood where she'd been left with both hands up at her cheeks, touching the place, as if the gloves had left something behind." },
    { n: "On the table at the far end of the kitchen, by the window, the low lacquered table nobody had used either time Solar had been here, there were two places set." },
    { n: "Two bowls for rice. Two for soup. Two pairs of chopsticks on two little ceramic rests shaped like fish, and a cushion at each, and between them a dish of pickles and a dish of something green and glossy, already served, already covered, and steam coming out from under the covers." },
    { n: "Not three. Two. One for Mrs. Oka, Solar thought, and one for whoever, and then Mrs. Oka put the lid back on the pot and turned and looked at her, only at her, and smiled, and she understood that neither of those places was Mrs. Oka's." },
    { s: 'mrsoka', f: 'neutral', t: "Hyein-chan has to be home by six, haven't you, child? It's your turn in the kitchen at the big house tonight. Curry, isn't it? The tall girl with the apron makes you all take turns." },
    { s: 'hyein', f: 'neutral', t: "...Yeah. Hanni's rota. How did you—" },
    { s: 'mrsoka', f: 'neutral', t: "So that leaves the one of you." },
    { n: "She came round the end of the counter and stopped at the edge of the pale boards, the way she always stopped, with her hands folded on her apron, and looked at Solar from across that invisible line with an expression so kind it was almost hard to stand in front of." },
    { s: 'mrsoka', f: 'neutral', t: "Stay for supper." },
    { n: "Not a question. Not quite an order either. It was the voice a mother uses at a door when a child has one shoe on, and it went into Solar somewhere under the ribs and sat there, warm, and heavy, and for a moment she couldn't remember any reason in the world to say anything else." },
    { s: 'mrsoka', f: 'neutral', t: "You've been eating standing up all week. Don't tell me you haven't. Somebody's been putting a plate in front of you and you've been eating it like it's an errand. Sit down. Eat something somebody made just for you. Just tonight." },
    { n: "It smelled so good. That was the stupid thing. The kitchen smelled like every kitchen she'd ever been a child in, all three of them at once, the rice and the ginger and the slow pot, and there was a cushion by the window with her name on it in every way but the writing, and Hyein was looking at her, waiting, and the light outside had gone long and gold across the garden, and the well sat under the tree with its heavy cap in the shadow, and nothing in the tree was singing." },
    { choose: [
      { t: "(Stay.)", tally: { cakes: 1, 'asks.solar.supper': 'yes' }, flag: 'eqx-supper-stayed', then: [
        { n: "She sat down. It was the easiest thing she'd done in a week. The cushion was the right height and the bowl was the right weight in her hand and Mrs. Oka came round the counter, now that she'd been answered, and knelt across from her and lifted the covers off the dishes one after another like someone opening presents, and the steam came up between them, and she ate." },
        { n: "Hyein went home at a quarter to six with the box of bedding in her arms and a look back over her shoulder at the gate that Solar didn't see, because she was being given more rice." },
        { n: "Later she wouldn't be able to say what they'd talked about. The garden, she thought. Mrs. Oka's mother. Persimmons, how you had to wait for them to go soft before they stopped being cruel to your mouth. Solar talked too, more than she meant to, about breakfasts, the noise at the dorm, Hanni's rota, how strange it was to be looked after by so many people at once that you couldn't find a quiet minute to miss anyone, and Mrs. Oka listened to all of it with her chin on her gloved hand and nodded as if she'd heard it before and liked it better every time." },
        { n: "There was no clock in the kitchen. She noticed that, once, and forgot it." },
        { place: 'Iwatodai Dorm · Front Steps', time: 'Late Night', bg: 'iwatodaidorm-front-night' },
        { n: "Hanni was sitting on the dorm steps when she came up the hill. In her socks, no shoes, with her phone in both hands and her knees up, and she stood when she saw her, and didn't come down the steps, and didn't say anything at all until Solar was close enough to see her face." },
        { s: 'hanni', f: 'serious', t: "It's eleven forty." },
        { s: 'solar', f: 'surprised', t: "...It isn't." },
        { s: 'hanni', f: 'serious', t: "It's eleven forty-one. I called you nine times. Hyein said you were having supper. *Supper*, Solar. Supper is at seven. Supper is not until twenty minutes before the—" },
        { n: "She stopped. Her voice had gone up on the last word and she brought it back down by force, the way you put a lid on a pot, and took Solar's wrist, not gently, and turned it over and looked at the watch on it as if she might catch it lying." },
        { n: "Eleven forty-one. Solar looked at it too. She'd sat down at a quarter to six. She'd eaten one bowl of rice, she would have sworn to it, one bowl and some soup and the green thing, and it had been dusk out of the window the last time she'd looked, and she had no idea, none, where the rest of the evening had gone." },
        { s: 'hanni', f: 'sad', t: "Your phone didn't ring?" },
        { s: 'solar', f: 'neutral', t: "...No." },
        { n: "She took it out. Nine missed calls, and a tenth while she was looking at it, from Hanni's own phone, in Hanni's own hand, which buzzed against her palm a second after she'd seen it on the screen. Hanni looked down at the phone in her hand, at the call she hadn't meant to make, and put it away very slowly." },
        { s: 'hanni', f: 'serious', t: "Inside. Now. You're on the roof with me tonight and you're sitting where I can see you." }
      ] },
      { t: "I can't tonight.", tally: { 'asks.solar.supper': 'no' }, then: [
        { n: "It came out easily enough. It was true, more or less; there was homework, and the rota, and Hanni would want her home before dark on principle. She said it with a smile so Mrs. Oka would know it wasn't personal." },
        { n: "Something went across Mrs. Oka's face. Not much. A flicker, the way a candle flinches when a door opens somewhere else in the house, and then the smile was back exactly where it had been, as if it had never moved. But for that one moment the whole kitchen seemed to go a degree colder, and the pot stopped ticking, and Solar was suddenly, sharply aware that it was a very quiet house and she was standing in the middle of it." },
        { s: 'mrsoka', f: 'neutral', t: "Of course. Of course you can't. You've got all those people waiting for you. Another night." },
        { s: 'mrsoka', f: 'neutral', t: "There's always another night. I'll keep your place." },
        { n: "She didn't clear the second setting. When they went out with the box of bedding between them, Solar looked back down the hall, and the little table by the window was still laid for one, the covers still on the dishes, the steam still coming out from under them, waiting." },
        { s: 'hyein', f: 'sad', t: "...I feel bad. Is it weird that I feel bad? She made all that." },
        { s: 'solar', f: 'neutral', t: "She made it before we got here." },
        { s: 'hyein', f: 'neutral', t: "Yeah. That's what I mean." }
      ] },
      { t: "That's up to me, isn't it?", tally: { choose: 1, 'asks.solar.supper': 'choose' }, flag: 'eqx-supper-mine', then: [
        { n: "She said it kindly. She meant it kindly; there was nothing in her voice but warmth, and a small smile, and the honest wish not to be rude to a woman who'd cooked. She heard herself say it, and was a little surprised by it, the way you're surprised by your own handwriting on an old envelope." },
        { n: "Mrs. Oka went very still." },
        { n: "Not frozen. Still, the way a cat goes still at a window, every part of it suddenly paying attention. Her gloved hands stayed folded on her apron and her face stayed exactly as it was, kind and round and smiling, and her eyes rested on Solar for one beat too long, and then another, and the pot on the stove ticked, and ticked, and Hyein, without knowing why, took one small step backward into the hall." },
        { s: 'mrsoka', f: 'neutral', t: "...Isn't it, though." },
        { n: "She laughed then, all at once, warm and easy, and the stillness went out of her like water out of a basin." },
        { s: 'mrsoka', f: 'neutral', t: "Isn't that a lovely thing to be able to say. Up to me. I don't think I've ever once been able to say that. You hold on to it, child." },
        { n: "She wrapped two rice cakes in a paper napkin anyway, and held them out across the line in her floured glove, and Solar took them, because there was no way not to, and they were warm, and they were very soft, and she carried them home in her pocket and didn't eat them and didn't throw them away, and in the morning there was a fine pale dust in the seam of the pocket that wouldn't brush out." }
      ] }
    ] }
  ] },

  { id: 'eqx-records', date: '4/20', slot: 'late', consumes: true, title: 'her end of the rope', place: 'Iwatodai Dorm · Command Room', time: 'Late Night',
    cast: { solar: 'Solar', fuuka: 'Fuuka', mitsuru: 'Mitsuru', akihiko: 'Akihiko', aigis: 'Aigis', elizabeth: 'Elizabeth' },
    scene: [
    { bg: 'iwatodaidorm-commandroom', music: 'mystery' },
    { n: "The command room on the fourth floor hadn't been used since March of last year. Somebody had kept it dusted. Somebody had kept the monitors plugged in, all of them, with their little standby lights glowing in a row like a ward at night, and the chairs pushed in square, and the radio headsets hung on their hooks in a line, and Solar knew without asking that it was Mitsuru, and that she'd done it every week of the year Solar was gone, for no reason she'd have been able to give." },
    { n: "At eleven on Tuesday night it was full. Fuuka at the main desk in a cardigan with her knees up on the chair, three screens lit in front of her. Mitsuru standing behind her with her arms folded. Akihiko on the arm of the couch with a roll of white tape in his hand, turning it over and over. Aigis by the door. And Solar, because Fuuka had knocked on her door at ten forty-five and said *I need to show you something*, and then, *I'm sorry*, and hadn't said what for." },
    { s: 'fuuka', f: 'neutral', t: "These are the logs from this winter. After you'd gone." },
    { n: "On the screen there was a graph, the old familiar green trace of the Dark Hour's readings that Fuuka had watched every night for a year, flat. Flat for weeks. A dead line running along the bottom of the screen from the seventh of March onward, which was what it was supposed to do, because the Dark Hour was over and they'd ended it." },
    { n: "Except in four places. Four spikes, thin and sudden as a heartbeat on a flat monitor, scattered across the dead line. Four nights." },
    { s: 'fuuka', f: 'neutral', t: "The green came back four times. Just for a few minutes. I felt it and I woke up and I came in here in my pajamas, and the readings were real, and then they were gone. Every time." },
    { s: 'akihiko', f: 'serious', t: "We fought. All four nights. Something was there and we fought it, in the street, in the green, and then it went out like somebody pulled a plug, and we were standing in the road in our sleep clothes holding Evokers, and nothing was there." },
    { s: 'mitsuru', f: 'neutral', t: "We never identified what it was. It didn't match anything in my father's records. It didn't match anything we'd fought." },
    { s: 'aigis', f: 'neutral', t: "It reached. That is the most accurate word I have. It did not approach. It reached, from a direction I could not locate, and we struck at the parts of it that came through." },
    { n: "Solar was looking at the dates under the four spikes. She was looking at them the way you look at your own phone number written somewhere you didn't write it." },
    { n: "She knew those nights. She'd been at home, all four of them, in one life or another, and the dark had come where no dark should be, and she'd fought something in it with nothing in her hand, and she had felt them. Beside her. Not there, not properly, a weight at her shoulder like someone standing just out of sight, a voice she couldn't quite hear calling her name across a long way. She'd thought she was dreaming them. She'd thought it was grief." },
    { choose: [
      { t: "I was there. Those nights.", then: [
        { n: "Nobody said anything. Akihiko stopped turning the tape. Mitsuru unfolded her arms, slowly, and put one hand flat on the back of Fuuka's chair, as if the floor had moved." },
        { s: 'akihiko', f: 'sad', t: "...I knew it. I *knew* it. I told them. The second night. I said she's here, I can feel her, and Junpei said I was—" },
        { n: "He didn't finish. He put the tape down on the arm of the couch, very carefully, and looked at his hands." }
      ] },
      { t: "(Touch the screen where the first spike is.)", then: [
        { n: "She put her finger on the glass. It was warm from the monitor. The spike went up under her fingertip like a needle, thin, sharp, the shape of a single cry in a quiet room." },
        { s: 'fuuka', f: 'sad', t: "You know what that is. Don't you." },
        { s: 'solar', f: 'neutral', t: "That's me." }
      ] }
    ] },
    { s: 'fuuka', f: 'sad', t: "I've been going over and over them. Since you came back. Trying to work out what I was looking for, those nights. Because I was looking. I reached out further than I've ever reached for anything, and I didn't know what for." },
    { n: "She took her glasses off and pressed the heels of her hands against her eyes, and when she took them away her face was very young and very tired." },
    { s: 'fuuka', f: 'neutral', t: "I wasn't looking for Shadows. I was looking for her end of the rope." },
    { n: "She said it to the screen. Then she seemed to hear it, and turned in the chair and looked at Solar, and her eyes filled, all at once, the way Fuuka's eyes did, without any fuss about it." },
    { s: 'fuuka', f: 'sad', t: "I don't even know why I said rope. I don't know where that came from." },
    { n: "Solar did. She didn't say. She stood in the command room with the four spikes glowing on the screen, and felt, under her ribs, very faintly, like the pull of a kite string in a wind you can't feel on the ground, all of them." },
    { place: 'The Velvet Room', time: 'Late Night', bg: 'velvetroom-1', music: 'velvet' },
    { n: "She fell asleep in her clothes again, after the red, and woke on the velvet." },
    { n: "The Room was the same. Blue, brass, the numbers climbing over the doors toward nothing, and the line of gold light under the one door where Elizabeth stood with the hem of her dress across it. But the floor in front of her was covered in paper." },
    { n: "Sheets of it, laid out in two long rows across the blue carpet the way you'd lay out a hand of solitaire, edge to edge, neat. Elizabeth was on her knees between the rows with her book open on the floor beside her, and she looked up when Solar sat up, and her face was alight with the particular delight of somebody who's been doing a jigsaw alone for hours and has just found the corner." },
    { s: 'elizabeth', f: 'happy', t: "Don't step on anything. It's taken me all night. Well, it's taken me what you'd call all night. Come and look. Come round that side. No, the *other* side, you'll scuff the left-hand row." },
    // CG: eqx-records — a woman in a blue dress kneeling on blue carpet between two long rows of paper sheets laid out like a game of solitaire, a heavy blue book open beside her, a thin line of gold light under a door behind her.
    { n: "The left-hand row was hers. She knew it before she bent to read it, the way you know your own coat on a crowded rack. Four sheets, each one written in a hand she half recognised, small and careful, describing a fight. A kitchen in the dark. A street with snow on it. Something in a corner that wasn't a shadow. A girl alone with nothing in her hands, and the sense, written in at the bottom of each sheet in fainter ink, *not alone*." },
    { n: "The right-hand row was theirs. Four sheets in four different hands, Fuuka's tidy one and Mitsuru's sloping one and Akihiko's, which looked like it had been written while running, and one in a perfectly even type that could only have been Aigis. A street in the green. Something reaching. Hit it. Hit the part that comes through. And at the bottom of each one, fainter, *she's here*." },
    { n: "Side by side, sheet against sheet, they matched. The same nights. Where her sheet said *something took my wrist*, theirs said *it pulled back*. Where hers said *I heard Junpei*, Akihiko's said, in scrawl, *Junpei yelling her name like an idiot, it went quiet after that*. Four nights, two rows, one fight, from both ends of something long." },
    { s: 'elizabeth', f: 'neutral', t: "You see it. Good. I wanted to be sure it wasn't only me. I'm told I see patterns in things. I'm told it's a character flaw." },
    { s: 'elizabeth', f: 'neutral', t: "When you were home, and the dark came where it shouldn't, you were fighting at your end. And at this end, here, in their pajamas, they were fighting at theirs. The same thing. Reaching both ways at once." },
    { s: 'solar', f: 'neutral', t: "What was it?" },
    { s: 'elizabeth', f: 'serious', t: "Hands, I think. I don't know whose. Hands coming through a gap, feeling for something, the way you feel for a light switch in a room you don't know." },
    { s: 'elizabeth', f: 'neutral', t: "And they hit them. Every time. They didn't know there was a rope, Solar. They didn't know there was anything to hold. They just stood in the road in the green and held on to their end of it, without knowing it was an end, because the other one was you." },
    { choose: [
      { t: "They held on before they even knew.", then: [
        { s: 'elizabeth', f: 'happy', t: "Isn't it ridiculous? Isn't it the most ridiculous thing? I've been sitting here grinning at it for an hour like a fool." },
        { n: "She was. She looked down at the rows and her smile went soft at the edges, and for a moment she looked less like an attendant in a room outside time than like a girl looking at a photograph of somebody else's family." }
      ] },
      { t: "Whatever was reaching, it's still reaching.", then: [
        { s: 'elizabeth', f: 'serious', t: "Yes." },
        { n: "She didn't add anything. She didn't make it lighter. She smoothed the corner of one of the sheets flat with a gloved fingertip, and Solar noticed, then, that she was kneeling with her back very straight and her dress spread wide behind her, across the gold line under the door, the whole time." }
      ] },
      { t: "(Kneel down between the rows with her.)", then: [
        { n: "She knelt. The carpet was cold through her knees. Elizabeth moved over, a little, to make room, which Solar had never once seen her do for anyone, and they knelt there side by side and looked at it together, two rows of paper and the shape of a fight that had happened in two places at once." }
      ] }
    ] },
    { n: "She looked at her own sheets again. Her own hand on them, smaller than she wrote now. And at the bottom of the last one, under *not alone*, in the margin, where nobody had any business writing anything, there was a fifth word she hadn't noticed." },
    { n: "Heavy. Upright. Pressed so hard into the paper that it had come through to the carpet underneath, and when Elizabeth lifted the sheet to look, the word was there too, in the pile of the blue velvet, a shallow dent in the shape of four letters." },
    { n: "*stay*" },
    { s: 'elizabeth', f: 'neutral', t: "...That wasn't there when I laid them out." },
    { n: "Somewhere behind her, very far off, so faint it might have been the Room settling, something knocked twice on a door." }
  ] },

  { id: 'eqx-night-manager', date: '4/24', slot: 'evening', consumes: true, title: 'the night manager', place: 'Kirijo Guesthouse · Lobby', time: 'Evening',
    cast: { solar: 'Solar', jihoon: 'Jihoon', jungwon: 'Jungwon', minji: 'Minji', cherry: 'Cherry', akihiko: 'Akihiko' },
    scene: [
    { bg: 'kirijo-guesthouse-lobby', music: 'night' },
    { n: "The guesthouse at night belonged to Mr. Tanabe. Everybody understood that within a week, the way you understand which chair in a house is the father's." },
    { n: "He came on at six and went off at six, and in between he sat at the little desk behind the lobby counter in a gray uniform jacket with the guesthouse's name stitched over the pocket, doing the newspaper crossword in pencil, very slowly, with his reading glasses on the end of his nose and a cup of tea going cold at his elbow. He was sixty-something. He had a wedding ring on the wrong hand, the right one, which Jungwon had explained to her quietly was what some men did after, and a voice so soft you leaned toward it without meaning to, and a door behind the desk that led to a narrow room with a cot in it, where he slept between rounds with the chain on." },
    { n: "And he fed Jihoon. That was the thing everybody talked about. Nobody had asked him to. Nobody could work out how it had started. But every evening at about eight Jihoon would wander down to the lobby in socks with his hands in his pockets, as if by accident, and Mr. Tanabe would look up from the crossword without a word and reach under the counter and bring out a rice ball wrapped in cling film, still warm, a big one, made with his own hands in the staff kitchen, and Jihoon would take it, and bow, an actual bow, a real one, and go and eat it on the lobby couch with the expression of a man in church." },
    { s: 'cherry', f: 'neutral', t: "He's adopted you. You know that, right? You've been adopted by a night manager." },
    { s: 'jihoon', f: 'neutral', t: "I'm aware. I'm leaning into it. I've never been adopted by anybody, I'm going to be good at it." },
    { n: "He said it lightly and ate his rice ball and didn't look at anybody, and Cherry, who'd known him since before either of them could ride a bike, looked at the back of his head for a moment and let it go." },
    { n: "Solar was there because it was Saturday and the dorm was loud and Minji had texted *come see something*. Minji was on the lobby floor with her back against the couch and her silver camera in her lap, scrubbing through footage with her thumb, and she patted the carpet beside her without looking up." },
    { s: 'minji', f: 'neutral', t: "Okay. So you know the thing. The coffins." },
    { n: "Solar knew the thing. Every night in the red, from the window over the guesthouse door, Minji filmed the street, because she couldn't not, and every night every coffin in every bed in every building she could see through a window had turned, the way flowers turn, toward the water and the island and the school. All of them. The same way." },
    { s: 'minji', f: 'neutral', t: "Not that one. Look." },
    { n: "She held the little screen up. Red, grainy, the lobby at midnight from the top of the stairs, the counter, the crossword left on the desk, the door behind it standing a crack open. Through the crack, the end of the cot. And on the cot, the long dark box that Mr. Tanabe became every night at twelve, like everyone else in the town who didn't remember." },
    { n: "It wasn't facing the island. It was turned on its side on the narrow mattress, all the way round, toward the door of his little room. Toward the chain." },
    { s: 'minji', f: 'serious', t: "Every night this week. It used to point the same way as all the others. Now it's facing the door." },
    { choose: [
      { t: "Like Mr. Hata's.", then: [
        { n: "Minji looked at her. She didn't know who Mr. Hata was. Solar told her, low, the old man in the next bed at the hospital, the coffin turned to the window, and the bed made up and empty in the morning, and Minji listened to the whole of it without blinking, and then looked back down at her screen, and didn't scrub forward." },
        { s: 'minji', f: 'neutral', t: "...Okay. I'm showing Mitsuru. Tonight." }
      ] },
      { t: "Have you shown him?", then: [
        { s: 'minji', f: 'sad', t: "What would I say? Hi, I film you while you sleep, you've been turning round?" },
        { s: 'minji', f: 'neutral', t: "...I'm showing Mitsuru. She can say it. She's good at saying things to adults." }
      ] }
    ] },
    { n: "Mr. Tanabe came round the counter at nine with a tray of tea for the lobby, which he did every night and which nobody had asked for either, and set a cup down in front of each of them, and when he got to Solar he paused, and looked at her over his glasses with a kind of mild interest, as if she reminded him of someone." },
    { n: "\"You're the one with the empty box,\" he said, gently. \"On the school forms. Yang-kun told me. No surname.\" He set her cup down. \"My wife was like that. Not on the forms. In the house. She never answered to Tanabe in her life. Forty years. Said it was my name and she was only borrowing it.\"" },
    { n: "Jungwon had come down the stairs. He stood at the bottom of them with one hand on the rail and watched Mr. Tanabe the way he watched anything he'd decided was his to keep track of." },
    { n: "\"She knocks, you know,\" Mr. Tanabe said, to Solar, as if continuing a conversation they'd been having for years. He straightened up with the tray. \"In my sleep. Every night now. I'm lying there and I can't move, it's like being in a narrow bed, very narrow, and there's a knock on the door, and it's her. She calls me what she used to call me. Nobody else ever called me that. Nobody's alive who knows it.\" He smiled. It was the sweetest smile Solar had seen on an old man's face. \"One of these nights I'm going to get up in time.\"" },
    { choose: [
      { t: "Don't get up.", then: [
        { n: "It came out too fast and too flat. Mr. Tanabe looked at her, surprised, and then kind, the way you're kind to a child who's said something odd at a funeral." },
        { n: "\"It's a dream, miss.\" He patted the breast pocket of his uniform jacket. \"Anyway, I've got my instructions. Yang-kun wrote them out.\"" }
      ] },
      { t: "What did she call you?", then: [
        { n: "He laughed, softly, and shook his head, and for a moment he was somewhere else, and much younger." },
        { n: "\"Oh, no. No, I couldn't. It's very silly. It was only ever for her.\" He patted the breast pocket of his uniform jacket. \"Anyway. I've got my instructions. Yang-kun wrote them out.\"" }
      ] },
      { t: "(Hold the warm cup and say nothing.)", then: [
        { n: "She held the cup. It was very hot and she held it anyway, and said nothing, and he nodded at her as if she'd said something wise, and patted the breast pocket of his jacket." },
        { n: "\"Got my instructions, anyway. Yang-kun wrote them out.\"" }
      ] }
    ] },
    { n: "He took a card out of the pocket to show her. One of the guesthouse's printed cards, the one about the kitchen locking at nine, and on the back of it, in Jungwon's handwriting, in careful Japanese, Hanni's rule. *Between twelve and one, don't open the door. Not for anyone. Not for any voice.*" },
    { n: "He'd kept it. He'd folded it once, neatly, down the middle, and kept it over his heart, which was, Solar thought, exactly the kind of thing a man does with a note he's too polite to throw away and has no intention of obeying." },
    { n: "\"Very kind boy,\" Mr. Tanabe said, and put it back, and buttoned the pocket, and went back behind his counter to his crossword." },
    { s: 'jungwon', f: 'neutral', t: "I checked his chain at eleven last night. And the night before." },
    { n: "He said it to her quietly, when she went to the stairs. Not as a report. As a confession, almost, of something he didn't think was enough." },
    { s: 'jungwon', f: 'sad', t: "I can't sit in his room all night. He's not ours. He'd be embarrassed." },
    { choose: [
      { t: "Check it anyway. Every night.", then: [
        { s: 'jungwon', f: 'neutral', t: "I was going to." },
        { n: "He looked at the door behind the counter, at the thin line of light under it, and she watched him write it down somewhere inside himself, in the diary he kept in his head, in ink." }
      ] },
      { t: "(Take his hand on the rail.)", then: [
        { n: "She put her hand over his on the banister. It was cold; he'd been holding the rail for a long time without noticing. He turned his hand over under hers so their palms met, and held on, briefly, hard, and let go before anybody in the lobby could look up." },
        { s: 'jungwon', f: 'flustered', t: "...Your tea's getting cold." },
        { s: 'solar', f: 'neutral', t: "So's your hand." }
      ] },
      { t: "You can't keep everyone, Jungwon.", then: [
        { s: 'jungwon', f: 'serious', t: "I know. I know that. I keep being told." },
        { s: 'jungwon', f: 'neutral', t: "...It's never stopped me counting." }
      ] }
    ] },
    { n: "At ten Akihiko came to walk her home, as he'd informed her by text he would, three times. On the step outside he stopped and took the roll of white tape out of his jacket and showed her the newest strip, torn off last night, written on in marker in his square fast hand." },
    { n: "*60:16.*" },
    { s: 'akihiko', f: 'serious', t: "A second a night. Every night. It hasn't missed once." },
    { s: 'akihiko', f: 'neutral', t: "Wednesday's a full moon. Mitsuru wants everybody in by eleven. Every building. Every door." },
    { n: "Behind them, through the guesthouse's glass front door, Mr. Tanabe was bent over his crossword with the pencil in his teeth, and as they watched he looked up, at nothing, at the door behind his counter, the way you look up when you think somebody's called your name from another room. Then he smiled to himself, a little sheepish, and went back to the paper." }
  ] },

  { id: 'eqx-knock', date: '4/28', slot: 'evening', consumes: true, title: 'the knock', place: 'Iwatodai Dorm · Lounge', time: 'Evening',
    cast: { solar: 'Solar', mitsuru: 'Mitsuru', fuuka: 'Fuuka', akihiko: 'Akihiko', yukari: 'Yukari', haechan: 'Haechan', hanni: 'Hanni', hyein: 'Hyein', yunjin: 'Yunjin', ken: 'Ken', koromaru: 'Koromaru', junpei: 'Junpei', jungwon: 'Jungwon' },
    scene: [
    { bg: 'iwatodaidorm-livingroom-night-spring', music: 'badfeeling' },
    { n: "The moon came up over the bay at seven, enormous, the color of a peach, and sat on the edge of the water looking in at the windows, and the whole dorm knew it was there without anyone having to say so, the way you know there's someone standing behind you." },
    { n: "Mitsuru had a plan. Mitsuru had written the plan on the whiteboard over the ARRIVALS column in red marker, which nobody had ever seen her use, and it was very simple, and it was mostly about doors." },
    { n: "Everyone inside every building by eleven. The dorm in the lounge, all of them, together, on the floor if they had to. The guesthouse in its lobby, the same, with Junpei and Aigis sent over at ten to sit with them, because the guesthouse had nobody who'd done a full moon before and Junpei had done eleven. Every door locked. Every chain on. Every window shut. And underneath, in Hanni's smaller handwriting, underlined twice, the rule that had been the rule since the twelfth: *In the red, nobody opens a door. Not for anybody.*" },
    { s: 'mitsuru', f: 'neutral', t: "Fuuka will be upstairs with the monitors. When it comes, and something will, she'll find it. Then we decide who goes out, and how, and it will not be through the front door." },
    { s: 'yukari', f: 'neutral', t: "How else are we supposed to go out?" },
    { s: 'akihiko', f: 'neutral', t: "The roof. The fire stairs come down the back of the building to the yard." },
    { s: 'yukari', f: 'serious', t: "The fire stairs are rusted shut, senpai." },
    { s: 'akihiko', f: 'neutral', t: "They were. I spent Sunday on them." },
    { n: "He held up his hands. The knuckles were orange with rust and scraped raw across the backs. Mitsuru looked at them for a long second, and didn't say anything, and Solar watched her decide that it was, in its way, the most sensible thing anyone in the dorm had done all week." },
    { n: "By eleven forty the lounge was a camp. Futons dragged down from upstairs, the couch cushions on the floor, every lamp on. Ken in a sleeping bag with only his face showing. Yunjin on the end of the couch with her knees up and her jaw set, watching the front door. Hyein beside Solar in the borrowed cardigan, sleeves over her hands, and Hanni on Hyein's other side, close, the way she'd been close to Hyein for two weeks now, never quite touching her, never more than an arm away. Haechan on the floor at Solar's feet with his back against her shins and Minji's little silver recorder in his hand, its red light on." },
    { n: "And Koromaru across the front door. Not by it. Across it, lying flat along the bottom with the whole length of his body pressed to the gap, the way he'd lain every night since the twelfth, with his eyes open." },
    { s: 'hyein', f: 'neutral', t: "...Can I say something weird?" },
    { s: 'hanni', f: 'neutral', t: "No." },
    { s: 'hyein', f: 'neutral', t: "I'm saying it anyway. I hope it doesn't knock. But if it does, I hope it's not *sad*. I couldn't stand it if it was sad." },
    { n: "Nobody answered her. Hanni put her hand flat on the floor between them, not on Hyein, just near, a hand's width away, palm down on the boards like she was holding them still." },
    { choose: [
      { t: "It won't be sad. It'll be lying.", then: [
        { n: "Hyein nodded, and kept nodding a little too long, and Solar saw her not believe it." }
      ] },
      { t: "(Take Hyein's hand.)", then: [
        { n: "She took it. Hyein's fingers were cold through the cardigan sleeve and closed on hers at once, hard, the grip of somebody who'd been waiting to be asked." }
      ] },
      { t: "Haechan. Is that thing recording?", then: [
        { s: 'haechan', f: 'neutral', t: "Every night." },
        { s: 'haechan', f: 'serious', t: "If it says anything, I want it on tape. I want to play it back in daylight and hear how fake it is." }
      ] }
    ] },
    { dark: true },
    { music: 'darkhour' },
    { place: 'Iwatodai Dorm · Lounge', time: 'The Dark Hour' },
    { n: "The lamps went out all at once, every one, and the red came up through the windows like water through a floor, slow, thick, rust-dark, and settled. The moon in the glass was swollen and enormous and the color of something that had been left too long in the sun. The hum started, the low note under the note. Ken pulled the sleeping bag over his face." },
    { n: "For a long minute nothing happened at all." },
    { n: "Then, upstairs, somewhere on the second floor, somebody knocked on a door." },
    { n: "Two knocks. Polite. Then, on the third floor, another door. Then the kitchen door, behind them, the one to the yard. Then a window. Then the front door, right behind Koromaru's back, so close the wood shivered against his fur, *knock, knock*, and he didn't move, and he didn't make a sound, and every hair along his spine stood up straight." },
    { n: "And then every door in the building was knocking at once." },
    { n: "Not loud. That was the horror of it. Not hammering, not battering, nothing that wanted to break in. Just knocking, polite and patient and terribly gentle, on every door in the dorm, upstairs and down, the closets, the bathroom, the laundry room, the little cupboard under the stairs where the vacuum lived, as if the whole house had become doors and every one of them had someone standing outside it, waiting, who'd been raised to knock." },
    { n: "Then the voices." },
    // CG: eqx-the-knock — a dark dormitory lounge washed in deep red light, a dozen young people huddled on futons and cushions on the floor, a white dog lying flat across the bottom of the front door, every door in the room faintly outlined as if light is leaking around it.
    { n: "Ken sat straight up out of the sleeping bag. He didn't say anything. He was looking at the kitchen door, and his face had gone the color of paper, and his mouth was open, and Solar knew, without hearing a word of it, whose voice was on the other side. A woman's. Calling a little boy in for dinner. Calling him by the name only one person had ever called him. Aigis wasn't there; Aigis was at the guesthouse. Yukari reached him first, and put both arms round him from behind, and held his face against her shoulder with her hand over his ear, and her own face was wet, and Solar didn't ask who was calling Yukari." },
    { n: "Akihiko had stood up. He stood with his back flat against the wall by the stairs and his hands in fists at his sides and his eyes shut, and his lips were moving, very slightly, and she didn't need to hear it to know he was saying a girl's name, over and over, *not real, not real, Miki, not real*." },
    { n: "Solar heard hers." },
    { n: "From the front door. *Sol-ah*, low, the way it was said in a house by the sea with the lights off. And at the same time, from the same door, *sweetheart*, in English, bright, the voice that had read to her with the Korean names left in. And at the same time a third, warmer, laughing, a woman sitting on the edge of a bed with a picture book doing all the voices. All three. At once. From one door. Overlapping, out of step, each of them saying it was her, and asking her to come and open up, it was cold out here, it had come such a long way." },
    { n: "It was the three of them together that saved her. Any one of them, she thought afterwards, any one alone in the dark, and she didn't know. But no door in any world had ever had all three of her mothers standing behind it at once, and whatever was out there didn't know that, or didn't care, and the not caring was the tell." },
    { s: 'haechan', f: 'serious', t: "...Don't. Sol. Whatever you're hearing. Don't." },
    { n: "His voice was very steady and his back against her shins was rigid, and she didn't ask him what he was hearing either, and he didn't say. The red light on the recorder in his fist burned on." },
    { n: "Then she realized the space beside her was empty." },
    { n: "Hyein's cardigan was on the cushion. Hyein was halfway across the lounge in her socks, walking, not fast, the way you walk across a dark room toward a phone that's ringing, with her head a little on one side, listening, and her face was the most open and the most hopeful Solar had ever seen it, and she was going to the front door." },
    { n: "*Hyein-ah.* Through the wood. A woman's voice, tired, a little hoarse, the voice off an eleven-second voicemail played every night to fall asleep to. *It's Mom. Open the door. Why do you never pick up. It's Mom, Hyein-ah, I came all this way, I'm right here, why don't you ever—*" },
    { n: "Koromaru was on his feet. He'd come up off the floor with every tooth showing and he was standing with his shoulder jammed against the door, snarling, a sound Solar had never heard him make, low and continuous and ripping, and Hyein stepped round him. Gently. Like stepping round a sleeping dog. Her hand went out to the latch." },
    { n: "Her fingers were on it. Solar saw them close. Saw the latch start to turn." },
    { n: "Hanni hit her from the side. Not a grab, a tackle, both arms round Hyein's waist and her whole weight behind it, and they went down together on the boards in a tangle of socks and hair, and Hyein fought her. She *fought* her, twisting, crying, reaching back toward the door with one arm, *it's my mom, let go, it's my mom, she came, she came all this way*, and Hanni didn't let go. Hanni wrapped round her from behind like a seatbelt and locked her hands together over Hyein's stomach and put her face in the back of Hyein's neck and held on, and held on, and said into her hair in Vietnamese and then in English and then in nothing, just breathing, *no, no, no, no*." },
    { s: 'yunjin', f: 'serious', t: "The latch. Sol. The latch." },
    { n: "It was a quarter turned. Solar was at the door before she'd decided to move, and put her hand flat over it and turned it back, and the metal was warm, warm as skin, and behind the wood, very close, at the height of her own mouth, the voice stopped mid-word." },
    { n: "Silence. All the doors at once. Every knock in the building stopped together, like a held breath." },
    { n: "Then, through the front door, an inch from her face, something sighed. Long and soft and fond, the way a mother sighs over a child who won't go to sleep." },
    { n: "Then it knocked again, twice, politely, as if it had all the time in the world." },
    { s: 'fuuka', f: 'surprised', t: "*It's outside. It's one thing. It's—* It's on every street, it's everywhere at once, it's at every door in the ward, it's one *thing*, Mitsuru-senpai, I can see the shape of it—" },
    { n: "Fuuka's voice came down the stairwell from the fourth floor, through the open command room door, high and quick and shaking, and Mitsuru was already on the stairs with a radio in her hand." },
    { s: 'mitsuru', f: 'serious', t: "Solar. Take who you need. The roof. Nobody touches a door." },
    { choose: [
      { t: "Haechan. Akihiko. Yukari. With me.", then: [
        { n: "Haechan was up before she'd finished his name. Akihiko came off the wall with his eyes open and red at the rims and his jaw locked, and said nothing, and went for the stairs. Yukari kissed the top of Ken's head and gave him to Yunjin, who took him without a word, and came." }
      ] },
      { t: "(Look at Hanni and Hyein on the floor first.)", then: [
        { n: "She looked. Hyein had stopped fighting. She was lying on her side on the boards with Hanni wrapped round her back, crying in the open, helpless way of somebody very small, and Hanni was looking up at Solar over her shoulder with her face set like a stone." },
        { s: 'hanni', f: 'serious', t: "Go. I've got her. I've got her. *Go.*" },
        { n: "Haechan, Akihiko and Yukari were already at the stairs, waiting for her." }
      ] }
    ] },
    { place: 'Iwatodai · Street', time: 'The Dark Hour', bg: 'darkhour-iwatodai-street', music: 'fullmoon' },
    { n: "The fire stairs held. They went down the back of the dorm in a rattling iron zigzag and let them out into the yard behind the laundry, and from the yard through the hedge into the street, and in the street, Solar understood what Fuuka had seen." },
    { n: "Every door was knocking. Every house on the hill, every apartment block, every shop shutter, every car door of every dead car standing in the road. The whole street, the whole ward, the whole town, a vast soft drumming under the hum of the red, *knock knock, knock knock*, rolling down the hill and back up it in waves, polite and patient and endless, like rain on a roof the size of the world. And in every window, through every curtain, the black upright coffins in their beds had turned. Every one. Toward their own front doors." },
    { n: "And down the middle of the road, from door to door, walking, it came." },
    // CG: eqx-knock-shadow — a deep red night street lined with dark houses, every front door faintly lit at its edges, and walking down the middle of the road toward the viewer a tall thin shape made entirely of pale hands, raised and curled as if to knock, hundreds of them, knuckles forward.
    { n: "It was made of hands. That was all she could see at first, and then it was all she could think. A tall thin shape, taller than a doorway, and every part of it was hands, pale ones, old ones, small ones, a child's, a woman's in a wedding ring, all of them with the fingers curled loose and the knuckles forward, the shape a hand makes just before it knocks. It went from door to door down the hill on no feet at all, and at every door it stopped, and leaned, and a dozen of the hands lifted and knocked, twice, very gently, and the voice that came out of it at every door was a different one." },
    { n: "It reached their gate, and stopped, and turned. All its knuckles turned toward them at once." },
    { n: "*Open the door,* it said, in every voice she'd heard in the lounge, at once, kindly. *It's only me.*" },
    { s: 'akihiko', f: 'serious', t: "Not tonight." },
    { n: "Solar put two fingers to her temple. She still didn't carry an Evoker. Mitsuru had offered her one on Monday, out of the case, cleaned and oiled, and she'd held it, and given it back. She didn't need it. She hadn't needed it since the bottom of the Well." },
    { summon: 'haenim', name: 'Haenim', sub: 'Not for any voice.' },
    { battle: { id: 'eqx-knock', op: 'eqx-knock', kind: 'operation', title: 'Full Moon · The Knock', desc: 'Something made of knocking is walking the town, and every door it stops at answers in a voice somebody loves.', forced: true } },
    { music: 'night' },
    { n: "It came apart the way they all came apart, into ash, black and soft, except that this ash was pale. Gray-white, fine as dust, and it didn't drift off the way Shadow ash drifted. It fell. It came down over the road and the hedges and the roofs of the dead cars like the first light snow of a winter, and settled, and lay there, and Solar stood in it up to her ankles and breathed it in before she could stop herself, and it was dry, and faintly sweet, and it caught in her throat." },
    { n: "The knocking stopped. All of it. All at once, all over the town, so suddenly the silence rang." },
    { s: 'yukari', f: 'sad', t: "...Is it over?" },
    { s: 'haechan', f: 'neutral', t: "It stopped. That's not the same thing." },
    { n: "Akihiko had the stopwatch out. He was looking at it, and not at them, with his thumb over the button and his face doing nothing at all." },
    { n: "The hour went on. They walked back up the hill through the pale dust in silence and climbed the fire stairs and came in through the roof and down through the dark building, past every door, none of them knocking now, and it went on. They sat in the lounge in the red with the others, all of them on the floor in one heap, Ken asleep in Yunjin's lap, Hyein asleep against Hanni with her face swollen and her hand still closed round a fistful of Hanni's sleeve, and it went on. Koromaru lay back down across the front door and put his chin on his paws and kept his eyes open, and it went on." },
    { n: "At sixty-two minutes and ten seconds, the lamps came back on." },
    { s: 'akihiko', f: 'serious', t: "...Two minutes. It jumped two whole minutes." },
    { n: "Mitsuru came down the stairs with the radio in her hand. She'd been on it all night with the guesthouse, Junpei's voice crackling in and out, cheerful and too loud the way Junpei got when he was frightened, Jungwon's under it, counting heads." },
    { s: 'mitsuru', f: 'neutral', t: "Everyone at the guesthouse is accounted for. Eleven rooms. Iori says the knocking was on every door and nobody answered. Yang checked every chain himself, twice." },
    { s: 'jungwon', f: 'neutral', t: "*...Everyone's here.*" },
    { n: "His voice came small and tinny out of the radio in Mitsuru's hand. He sounded very tired, and very careful, the way he sounded when he'd counted something more times than he needed to and was going to count it again." },
    { s: 'jungwon', f: 'neutral', t: "*Everyone on the list. Mr. Tanabe's door was shut. His chain was on at eleven. I'll check it again in the morning.*" },
    { n: "Nobody in the lounge said anything. Hanni had her eyes shut and her cheek on top of Hyein's head. Haechan had rewound the little recorder and was listening to it with one earbud in, his face turned away from the room, and whatever was on it, he listened to it all the way to the end, and then took the earbud out, and pressed record again, and put the recorder face down on the floor, and didn't play it to anyone." }
  ] },

  { id: 'eqx-tanabe', date: '4/29', slot: 'early', consumes: true, title: 'six in the morning', place: 'Kirijo Guesthouse · Lobby', time: 'Early Morning',
    cast: { solar: 'Solar', jungwon: 'Jungwon', minji: 'Minji', jihoon: 'Jihoon', cherry: 'Cherry', jaehyun: 'Jaehyun', mitsuru: 'Mitsuru', junpei: 'Junpei', aigis: 'Aigis' },
    scene: [
    { bg: 'kirijo-guesthouse-lobby', music: 'eerie' },
    { away: true },
    { n: "Jungwon came down at six because Mr. Tanabe always had the morning paper on the counter at six, squared off to the edge, with his reading glasses folded on top of it, and Jungwon had decided some time in the night, lying awake with his watch on, that if the paper was there, everything was fine." },
    { n: "The paper wasn't there." },
    { n: "The lobby was gray with early light and very quiet. The crossword from last night was on the desk where it had been left, the pencil laid across it, a cup of tea beside it with a skin on top. The chair was pushed in. And the door behind the counter, the narrow door to the little room with the cot in it, was standing open about the width of a hand." },
    { n: "Minji was behind him on the stairs. He hadn't heard her come down. She never slept, in the mornings; she sat at the window over the door and filmed the light coming up, every day, and she'd seen him go past, and followed, barefoot, with the silver camera in her hand out of habit, the way other people carry their phones." },
    { s: 'minji', f: 'neutral', t: "...Is he up already?" },
    { n: "Jungwon didn't answer. He went round the end of the counter. He noticed, the way he noticed everything, the way he'd always notice everything and would have given a great deal, later, not to, that the chain on the inside of the little room's door was off. Not broken. Not forced. Unhooked from its runner and hanging straight down against the wood, swinging very slightly in the draft from the lobby." },
    { n: "And on the latch, on the small brass latch on the inside of the door, there was a dust of something pale. Fine. Dry. Like flour from a kitchen, where someone had touched it with a floured hand." },
    { n: "He pushed the door with two fingers." },
    // CG: eqx-tanabe-room — a narrow staff room at dawn seen from its doorway: a cot, a small table under a window with gray morning light, an old man in a gray uniform jacket sitting upright at the table with his back to the door, a chain hanging loose on the inside of the open door. No wounds shown.
    { n: "Mr. Tanabe was sitting at his little table under the window, with his back to the door, in his uniform." },
    { n: "Upright. That was what Jungwon would remember first, always, before anything else. How upright he was. His jacket on and buttoned, his hands in his lap, his head up and a little to one side, as if he'd sat down to look out of the window at something in the yard and was waiting for it to come back. The cot behind him was unmade. The blanket was on the floor, thrown off, the way you throw off a blanket when you get up quickly in the night because someone you love is at the door." },
    { s: 'jungwon', f: 'neutral', t: "...Tanabe-san?" },
    { n: "He didn't turn. Jungwon went round the table to see his face, because you do, because there's always one more second where it might be nothing, and then he saw his face." },
    { n: "It was his face. It was still Mr. Tanabe's face. That was the worst of it. Every line of it was there, the kind eyes and the soft mouth and the glasses on the end of the nose, only nothing was holding any of it up. It hung. It hung off the front of his head the way a sleeve hangs off a chair when there's no arm in it, slack, folded at the cheeks, the mouth drawn long and open by its own weight, and the eyes in it were open, and looking at the window, and there was nothing behind them pushing them out into the world at all." },
    { n: "Jungwon took a step back. His shoulder hit the window frame. And from there, from beside the window, he could see the back of the chair, and the back of the gray uniform jacket in it." },
    { n: "The jacket was open down the back. Not torn. Opened, along the seam, from the collar to the belt, as neatly as if somebody had unpicked the stitches, and the man inside it was opened too, along the same line, the same way. Nape to belt. The edges lay apart a finger's width, clean and pale and perfectly dry. There was no blood. There wasn't any blood anywhere in the room. There was only the long straight parting down the middle of his back, like the opening in a coat that someone has stepped out of, and in the parting, a fine pale dust." },
    { n: "He did not look into it. Later he'd be glad of that. Later still he'd lie awake and not be sure he hadn't." },
    { n: "Behind him, in the doorway, there was a small electronic sound. A beep. A camera starting to record." },
    { n: "Minji was standing in the door with the silver camera up at her eye and her whole body perfectly still, filming, the way she filmed everything, because her hands had done it before the rest of her could tell them not to. She filmed the chain. She filmed the table. She filmed the back of the chair. She filmed for eight seconds, nine, ten, steady as a tripod, and then the camera dropped to her side on its strap and swung there, still recording, filming the floor, and she turned round and walked very quickly out into the lobby and was sick on the carpet at the bottom of the stairs, on her hands and knees, again and again, until there was nothing, and kept on." },
    { n: "Jungwon took his phone out. His hands did it. He looked at the screen and couldn't remember, for a long, long moment, a single number in the world." },
    { n: "Then he remembered the only one that mattered." },
    { away: false },
    { place: 'Kirijo Guesthouse · Lobby', time: 'Early Morning', bg: 'kirijo-guesthouse-lobby', soft: true },
    { n: "Solar got there at six twenty-two. She'd run. She didn't remember deciding to; she remembered her phone buzzing on the floor of the lounge and Jungwon's voice saying her name very quietly, once, and then *the guesthouse*, and then nothing, the line open, his breathing, and then she was on the street in her socks with her shoes in her hand." },
    { n: "Mitsuru was already there. Mitsuru had a car, apparently, and a driver, at six in the morning on a national holiday, and was standing in the middle of the lobby on her phone in a voice so low and level it was frightening, saying words like *contain* and *coroner* and *nobody else*, and Aigis was at the door of the little room behind the counter, standing in it with her back to the room, filling it, so that nobody else could see in." },
    { n: "Junpei was on the bottom stair with his cap in both hands. He looked up when Solar came in and opened his mouth to say something, something light, she could see him reaching for it, and it wasn't there, and he shut his mouth and looked down at the cap." },
    { n: "Jungwon was sitting on the lobby couch with his elbows on his knees, perfectly upright, perfectly composed, in his school shirt with the sleeves buttoned at the wrists. He looked up at her. His face was completely calm and completely white." },
    { s: 'jungwon', f: 'neutral', t: "His chain was off. From the inside." },
    { s: 'jungwon', f: 'neutral', t: "I checked it at eleven. It was on. He took it off himself." },
    { n: "He said it like a report. Like it mattered which side. Like if he could just get the facts in the right order, the order would be the thing that hadn't happened." },
    { choose: [
      { t: "(Sit down next to him.)", then: [
        { n: "She sat down next to him on the couch. Close. Their shoulders touching. He didn't move away and he didn't lean in, and after a while she felt him start to shake, very finely, from somewhere deep in the middle of him, the way a glass on a table shakes when a train goes by underground, and he didn't stop, and she didn't ask him to." }
      ] },
      { t: "You did everything right.", then: [
        { s: 'jungwon', f: 'sad', t: "I gave him a card." },
        { n: "He said it very quietly. He was looking at the door behind the counter, at Aigis in it." },
        { s: 'jungwon', f: 'sad', t: "It's in his pocket. I saw it. Folded in half. I gave him a *card*." }
      ] },
      { t: "Don't go back in there.", then: [
        { s: 'jungwon', f: 'neutral', t: "I'm not going to." },
        { s: 'jungwon', f: 'sad', t: "...I keep seeing it anyway. I'm not in there and I'm looking at it." }
      ] }
    ] },
    { n: "Minji was sitting on the floor by the stairs with her back against the wall and Jaehyun crouched in front of her holding a glass of water she wasn't drinking. Her camera was in her lap. Her hands were locked round it. Cherry was on the stairs above her with a towel and a bucket and a face like a closed door, cleaning the carpet, on her knees, scrubbing, because somebody had to and she'd decided it was going to be her." },
    { s: 'minji', f: 'sad', t: "I filmed it. Sol. I *filmed* it." },
    { s: 'jaehyun', f: 'neutral', t: "You didn't mean to." },
    { s: 'minji', f: 'serious', t: "That's worse. That's so much worse. My hands did it. My hands just—" },
    { n: "She stopped. She looked down at the camera. Jaehyun put his hand over hers on it, both of hers, and kept it there, and didn't say anything else, and Solar thought she had never seen her brother so gentle with anyone in either of their lives." },
    { s: 'minji', f: 'neutral', t: "...I'm not deleting it. I want to. I'm not going to. Somebody's going to need to see it." },
    { n: "And Jihoon was at the counter." },
    { n: "Nobody had noticed him come down. He was standing at the lobby counter in his socks, at the place where every night at eight he'd stood with his hands in his pockets, and he'd reached under it, the way Mr. Tanabe had reached under it, and found the shelf, and on the shelf, in cling film, there was a rice ball. Made last night. Waiting for the morning, for someone who came down hungry. It was cold." },
    { n: "Jihoon held it in both hands and looked at it. He didn't say anything. He didn't make a joke. He stood at the counter for a long time looking at a cold rice ball, and then he put it in the pocket of his hoodie, carefully, the way you'd put away something that might break, and went and sat on the bottom stair beside Junpei, and put his face in his hands." },
    { choose: [
      { t: "(Go and sit with Jihoon.)", then: [
        { n: "She sat on the stair below him. She didn't touch him. After a minute his knee came against her shoulder, and stayed there, the weight of it, and that was all, and it was enough to be going on with." },
        { s: 'jihoon', f: 'sad', t: "...He never asked me anything. You know? Not one thing. He just handed it over." }
      ] },
      { t: "(Stay with Jungwon.)", then: [
        { n: "She stayed where she was. Across the lobby Cherry saw Jihoon sit down, and put her bucket down, and went and sat on his other side without a word, and leaned her whole weight into him, the way she must have leaned into him on a hundred stairs when they were small." }
      ] }
    ] },
    { n: "At seven Mitsuru got off the phone. She stood for a moment in the middle of the lobby with her phone against her chest, and closed her eyes, and opened them, and Solar watched her put herself back together piece by piece, like someone dressing in a hurry in the dark." },
    { s: 'mitsuru', f: 'neutral', t: "The Group's doctor is on his way. He'll write it as a heart attack. In his sleep. Peacefully." },
    { s: 'junpei', f: 'surprised', t: "*Peacefully?*" },
    { s: 'mitsuru', f: 'serious', t: "I know, Iori." },
    { s: 'mitsuru', f: 'sad', t: "I know. I said it to them. I said it twice. They thanked me for my concern and said it would be a heart attack." },
    { n: "She looked at the door behind the counter, and at Aigis, still standing in it, still filling it, who hadn't moved in an hour and would not, Solar understood, move until the people with the stretcher came and she'd seen him carried out." },
    { s: 'aigis', f: 'neutral', t: "There is flour in the wound." },
    { n: "Aigis said it without turning round. Flat, precise, the way she said everything, to the empty lobby. Nobody answered her. Nobody in the room baked." }
  ] },

  { id: 'eqx-flour', date: '4/29', slot: 'late', consumes: true, title: 'nobody here bakes', place: 'Iwatodai Dorm · Lounge', time: 'Late Night',
    cast: { solar: 'Solar', hanni: 'Hanni', hyein: 'Hyein', haechan: 'Haechan', yunjin: 'Yunjin', akihiko: 'Akihiko', ken: 'Ken', koromaru: 'Koromaru', yukari: 'Yukari' },
    scene: [
    { bg: 'iwatodaidorm-livingroom-night-spring', music: 'night' },
    { n: "It was a holiday. That was the thing nobody could get over, all day. The first day of Golden Week, Showa Day, the shops shut and the families out, and the whole town went to the park and the shrine and the beach in the sunshine with their children on their shoulders, and nobody knew. Nobody would ever know. A man had been found in a little room behind a counter at six in the morning, and by nine the room had been cleaned, and by noon the counter had someone else behind it, a young man from the agency who didn't know anyone's names, and the crossword was gone." },
    { n: "Nobody at the dorm went out. Nobody said they weren't going to; it just didn't happen. The day passed in the lounge, in the kitchen, on the stairs, people moving from room to room carrying cups of tea they didn't drink. Junpei came back from the guesthouse at noon and went straight up to his room and shut the door, and didn't come down for dinner, and didn't make a single joke through the wall all evening, and that was louder than anything." },
    { n: "Ken didn't eat. He sat at the table and moved his rice around and said he wasn't hungry, and Yukari didn't argue with him, and at eight o'clock Koromaru came and put his head in Ken's lap under the table and left it there, and Ken put his hand on it and kept it there, and after a while ate three mouthfuls with the other hand, without looking." },
    { n: "By eleven the lounge had only a few of them left. Hanni, on the couch, with Hyein lying along it with her head in Hanni's lap, awake, staring at nothing. Haechan on the floor. Yunjin in the armchair with her feet under her. Solar, by the window, looking at the street, which was ordinary, and orange under the streetlights, and empty." },
    { s: 'hyein', f: 'sad', t: "...It was her voice." },
    { n: "Nobody had asked. She said it to the ceiling. Hanni's hand was in her hair, stroking, slow, and didn't stop." },
    { s: 'hyein', f: 'sad', t: "Not like her. *Her.* The thing at the end of the voicemail, the bit I can never catch, she said it. Through the door. I finally heard what it was." },
    { n: "She didn't say what. Her mouth went tight and her eyes filled and she turned her face into Hanni's stomach, and Hanni bent over her, curled right down over her like something closing, and said in a voice so low it was barely a sound," },
    { s: 'hanni', f: 'serious', t: "It wasn't her. It was never her. It took the voice off your phone. It's a *thief*, Hyein. That's all it is. It's a thief who knocks." },
    { s: 'hyein', f: 'sad', t: "Then how did it know the end?" },
    { n: "Hanni didn't answer that. Nobody in the room could." },
    { choose: [
      { t: "If you'd opened it, you'd be him.", then: [
        { n: "It came out of her quietly and terribly, and she was sorry the moment it was out, and also she wasn't, because it was true, and somebody had to put it in the room. Hyein went very still. Hanni looked up at Solar with something blazing in her face, and then, slowly, it went out, and she bent back over Hyein." },
        { s: 'hanni', f: 'sad', t: "...Yeah. She's right. That's what it was for." },
        { s: 'hyein', f: 'sad', t: "I know. I know. I know. I know." }
      ] },
      { t: "Hanni was faster than it.", then: [
        { s: 'hanni', f: 'flustered', t: "I was *so* much faster than it. I want that on the whiteboard. In red." },
        { n: "Hyein laughed. It was a horrible wet little laugh and it was the first one all day and everybody in the room heard it and nobody looked at her, so she'd be allowed to have it." }
      ] },
      { t: "(Come and sit on the floor by the couch.)", then: [
        { n: "She came and sat on the floor with her back to the couch, by Hyein's hand where it hung off the edge, and Hyein's fingers found her hair and held on to a piece of it, not pulling, just holding, the way a child holds the edge of a blanket." }
      ] }
    ] },
    { s: 'haechan', f: 'neutral', t: "I listened to the tape." },
    { n: "Everybody looked at him. He was sitting on the floor with his back to the wall and the recorder in his hands, turning it over and over the way Akihiko turned his tape." },
    { s: 'haechan', f: 'serious', t: "It's all on there. All the knocking. All the doors. All the voices, all at once, it sounds like a, like a crowd. But under all of it there's one more thing." },
    { s: 'haechan', f: 'serious', t: "The whole time it's knocking, there's somebody humming." },
    { n: "He didn't play it. He didn't offer. He put the recorder down on the floor beside him, face down, very gently, as if it might wake." },
    { s: 'yunjin', f: 'neutral', t: "...What song?" },
    { s: 'haechan', f: 'neutral', t: "I don't know. Something old. Something you'd sing to a kid." },
    { s: 'haechan', f: 'sad', t: "...It sounds happy. That's the part I can't get out of my head. Whatever it was doing out there, it was really happy doing it." },
    { n: "At eleven forty-five Akihiko came down the stairs with his roll of tape and his stopwatch and stood in the doorway, and said it was time, and they went up to the roof for the rota the way they did every night, four chairs and two blankets, because the rule was the rule, and nobody was alone at midnight, not tonight of all nights." },
    { n: "Solar went last. She always went last. She checked the windows, every one, and the kitchen door, and the laundry door, and came to the front door, where Koromaru was already lying across the bottom of it with his chin on his paws, and she bent to check the lock the way she checked it every night, and put her hand on the handle." },
    { n: "Her palm came away pale." },
    { n: "She looked at it under the hall light. A fine white dust in the creases of her hand, in the lines of it, soft and dry and faintly sweet." },
    // CG: eqx-flour-handle — close on a girl's open palm under a dim hall light, a fine white powder caught in the lines of her hand, a brass door handle out of focus behind it.
    { n: "She looked at the handle. Not the outside of the door; nobody had opened the door; she'd turned the latch back herself last night with her own hand and nobody had touched it since. The inside. The handle on the inside of the dorm's front door, where you'd put your hand to let someone in. It was dusted with it. Lightly. Evenly. The way a handle gets when someone with flour on their hands has held it, from this side, and stood there, holding it, for a long time." },
    { n: "Koromaru was looking at her. He didn't lift his head. He just looked at her hand, and then at the door, and then at her, and his tail didn't move at all." },
    { choose: [
      { t: "(Wipe it off before anyone sees.)", flag: 'eqx-flour-wiped', then: [
        { n: "She took the sleeve of her cardigan and wiped the handle clean, all of it, every trace, and wiped her palm on her skirt until it was red, and stood in the hall for a while breathing, and then went up to the roof and sat down in the end chair, and when Hanni looked at her she smiled, the good smile, the one she'd had in three lives, and Hanni didn't believe a word of it." }
      ] },
      { t: "Akihiko. Come down here.", flag: 'eqx-flour-shown', then: [
        { n: "He came down two stairs at a time and stopped dead at the sight of her hand. He looked at the handle. He looked at it for a long time without touching it, his whole body gone very still, the way it went before a fight." },
        { s: 'akihiko', f: 'serious', t: "...Did anybody in this house bake today?" },
        { s: 'solar', f: 'neutral', t: "Nobody in this house bakes." },
        { n: "He took the roll of white tape out of his jacket, tore off a strip, and laid it carefully over the inside handle, sealing the dust under it, and wrote on it in marker, *4/29. Don't touch. —A.S.*, and stood back, and looked at it, and put his arm round her shoulders, hard, and walked her up to the roof without a word." }
      ] }
    ] },
    { dark: true },
    { music: 'darkhour' },
    { n: "That night the red ran sixty minutes and thirty-three seconds." },
    { n: "Akihiko wrote it on a strip of tape, and stuck it under the twenty-seventh's, and skipped the full moon's, which didn't count, which was its own kind of wrong, and looked at the strips together for a long time. The twelfth, the twentieth, the twenty-fourth. A second, a second, a second, every night, all the way down. The twenty-seventh, sixty minutes and twenty seconds." },
    { n: "Two nights. It should have been two seconds. It was thirteen." },
    { n: "Something was fed. Nobody on the roof said it. All four of them thought it at once, and sat with their hands knotted in a row on the laundry chairs, holding on, and nobody let go, and down in the town, very far off, nothing knocked at all." }
  ] },

  { id: 'eqx-golden-week', date: '5/3', slot: 'after', consumes: true, title: 'the whole impossible household', place: 'Port Island · Seaside Park Beach', time: 'Daytime',
    cast: { solar: 'Solar', mitsuru: 'Mitsuru', junpei: 'Junpei', yukari: 'Yukari', fuuka: 'Fuuka', aigis: 'Aigis', ken: 'Ken', koromaru: 'Koromaru', akihiko: 'Akihiko', haechan: 'Haechan', hanni: 'Hanni', hyein: 'Hyein', yunjin: 'Yunjin', jungwon: 'Jungwon', jihoon: 'Jihoon', cherry: 'Cherry', minji: 'Minji', jaehyun: 'Jaehyun', mrsoka: 'Mrs. Oka' },
    scene: [
    { bg: 'seaside-park-beach-cleanup', music: 'joy' },
    // BG: port-island-beach-golden-week — the little sand beach below Port Island's seaside park on a bright May afternoon, families and picnic blankets, the monorail bridge in the distance, gray clouds building over the bay.
    { n: "Mitsuru decided on the Saturday that they were going to the beach on Monday, all of them, and said it at breakfast in the voice she used for board meetings, and when Junpei asked if that was an order she said yes." },
    { n: "She didn't explain. She didn't have to. Five days in, the dorm had gone gray at the edges, the way rooms do when nobody's opened the windows, and the guesthouse was worse; the guesthouse had a new night manager who didn't know where the spare towels were, and nobody went down to the lobby at eight anymore, and Jihoon had been eating his dinners in his room. Mitsuru looked at all of it for five days with her arms folded and then booked a picnic." },
    { n: "So on Constitution Day the whole impossible household went to the beach." },
    { n: "Eighteen of them, counting the dog, and nobody counted Koromaru out loud anymore because he was obviously a person. They took over a whole corner of the little sand beach below the seaside park with four picnic blankets and Fuuka's cooler and a beach umbrella Jaehyun had bought that morning without asking anyone, an enormous striped thing, absurdly expensive, which he put up himself with great seriousness and which fell over twice." },
    { s: 'jaehyun', f: 'neutral', t: "It's wind-rated. It says on the bag. It's rated for wind." },
    { s: 'cherry', f: 'happy', t: "Which wind? Whose wind? Not this one, apparently." },
    { n: "It was warm. Not summer warm, the first warm of May, the sun hot on the backs of their necks and the sea still far too cold, which didn't stop Junpei, who was in it up to his knees within six minutes yelling about how it wasn't that bad, while the color went out of his legs. It didn't stop Yunjin either, who went in after him to prove a point, all the way up to her waist in her shorts, and came back out blue-lipped and furious and triumphant." },
    { s: 'yunjin', f: 'happy', t: "Incheon's colder. In March. *This* is a bath." },
    { n: "She said it and caught herself, a flicker across her face, the way they all caught themselves now when home came out of their mouths sideways. Then she shook her wet hair over Hanni on purpose, and Hanni screamed, and the moment went where moments went." },
    { n: "Solar lay on her back on the blanket with her eyes shut and the sun red through her eyelids, and listened to all of it. The sea. Junpei. Ken and Aigis arguing gently over the correct way to build a sandcastle, Aigis having strong views on load-bearing walls. Fuuka and Mitsuru talking quietly about something on the far blanket. Minji, who hadn't filmed anything for five days, who'd left the silver camera in a drawer at the guesthouse, lying beside her with her arm over her eyes, breathing." },
    { n: "Someone sat down on her left. Someone else sat down on her right. She didn't have to open her eyes. She knew them by how they sat." },
    { s: 'jungwon', f: 'neutral', t: "You're going to burn." },
    { s: 'jihoon', f: 'happy', t: "Let her burn. She looks good red." },
    { s: 'jungwon', f: 'neutral', t: "She looks good in shade, Jihoon. It's the same face." },
    { choose: [
      { t: "(Keep your eyes shut and let them argue.)", then: [
        { n: "She kept her eyes shut. They argued over her, low, about sunscreen, then about whether this beach was better than the one in Busan, which neither of them had been to in this life, then about nothing, and she lay between them in the sun and found that she was smiling, and didn't stop it." }
      ] },
      { t: "Jihoon. Did you eat today?", then: [
        { n: "There was a pause on her right. She opened one eye. He was looking at the sea with his jaw tight." },
        { s: 'jihoon', f: 'neutral', t: "...Not rice." },
        { n: "On her left, without a word, Jungwon reached into the cooler and took out a sandwich, egg, in its plastic triangle, and passed it across her, over her stomach, to Jihoon. Jihoon looked at it. Then he took it. Neither of them looked at the other. It was, Solar thought, the kindest thing she had ever seen two boys do while pretending nothing was happening." }
      ] },
      { t: "(Hold out a hand to each of them.)", then: [
        { n: "She held one hand out on each side, palm up, without opening her eyes. There was a pause. Then one hand settled into her left, cool, careful, fingers lacing through hers like something filed in order. And one into her right, warm, loose, a thumb that immediately started drawing slow circles on the inside of her wrist, which was cheating." },
        { s: 'jungwon', f: 'flustered', t: "...This is a very public beach." },
        { s: 'jihoon', f: 'happy', t: "He's right. Somebody might see. Better make it worth it." }
      ] }
    ] },
    { n: "Down by the water, Haechan and Akihiko had found a frisbee." },
    { n: "Nobody knew where from. It was the kind of frisbee that lives in a car boot for ten years. And somehow, in the space of four throws, a game of catch between two boys on a beach had become something else, something that involved running, a great deal of running, diving into the sand, Akihiko throwing the frisbee as if it had personally insulted him and Haechan catching it one-handed behind his back and throwing it straight back harder, both of them sweating, both of them grinning like dogs, neither of them having said one single word to the other the entire time." },
    { s: 'yukari', f: 'neutral', t: "Are they okay? Is that a game? It doesn't look like a game." },
    { s: 'hanni', f: 'serious', t: "It's a game. It's the worst game. They're doing the thing." },
    { s: 'yukari', f: 'neutral', t: "What thing?" },
    { s: 'hanni', f: 'neutral', t: "The thing where they both want to be the one she watches." },
    { n: "Solar, who'd been watching, stopped watching, which only made Hanni laugh." },
    { n: "At three the sky went gray in the west. At three-fifteen the first drop hit the striped umbrella with a sound like a finger flicking it. At three-twenty it was pouring, a cold heavy May downpour sweeping in off the bay in sheets, and the whole beach was running, families with their blankets over their heads, and Jaehyun's umbrella went over a third time and he let it go, and stood in the rain watching it cartwheel down the sand toward the sea with the expression of a man watching a career end." },
    { s: 'junpei', f: 'surprised', t: "Where do we go?! The monorail's like twenty minutes!" },
    { n: "Fuuka had her phone out under the cooler lid, reading something with her eyebrows drawn together." },
    { s: 'fuuka', f: 'neutral', t: "...Mrs. Oka texted the dorm this morning. At six." },
    { s: 'fuuka', f: 'neutral', t: "She said, *when the rain comes, bring them all to me. I'll have the kettle on.*" },
    { n: "The forecast had said sunshine all day. Solar had checked it. Everyone had." },
    { place: 'The Oka Boarding House · Front Room', time: 'Daytime', bg: 'iwatodaidorm-livingroom-night-rain', music: 'rain' },
    // BG: oka-boarding-house-front-room — a big old tatami room in a wooden Japanese house on a rainy afternoon, a long low table crowded with teacups and playing cards, sliding doors open onto a garden veranda and a persimmon tree in the rain.
    { n: "They went anyway. There was nowhere else to go, and it was close, and it was pouring, and when they came through the gate in a soaked dripping crowd of seventeen and a dog, Mrs. Oka was standing in the open front door with an armful of towels, beaming, as if she'd been standing there since morning." },
    { s: 'mrsoka', f: 'neutral', t: "Oh, look at you all. Look at you. Like drowned cats. In, in, shoes off, towels for everybody, I've got the big room ready." },
    { n: "Koromaru wouldn't come in. Nobody was surprised anymore. He lay down on the step under the eaves, outside the open door, out of the rain but not one inch further, with his nose on the sill and his eyes on the hall, and Ken sat down on the step beside him with a towel round his shoulders and said he'd stay out here too, he liked the rain, and Aigis sat down on Ken's other side and said nothing at all and didn't take her eyes off the kitchen door." },
    { n: "The big room was the front room, a long tatami room with the sliding doors open onto the veranda and the garden beyond it, the persimmon tree black with rain and the cap of the well shining wet. There was a long low table. There were cushions for seventeen. Solar counted them while she dried her hair. Seventeen exactly, though two of them would sit on the step all afternoon and never use theirs, and nobody had told Mrs. Oka how many were coming." },
    { n: "And there was tea, and it was hot, and it was already poured, and everyone's was right." },
    { s: 'junpei', f: 'happy', t: "Okay, okay. Nobody's going anywhere for an hour. You know what this means." },
    { s: 'yukari', f: 'neutral', t: "Please don't." },
    { s: 'junpei', f: 'happy', t: "*Daifugo.* Rich man, poor man. Loser washes the cups. Ken's not allowed to—" },
    { s: 'ken', f: 'serious', t: "I'm on the step!" },
    { s: 'junpei', f: 'happy', t: "—Ken's on the step, so Ken's safe. Everybody in." },
    { n: "It was, somehow, the best afternoon in weeks. Solar would think that later and hate that she thought it, and it would still be true. The rain roaring on the veranda roof and the room warm and steamy with wet clothes drying and everybody round one low table playing a card game half of them didn't know the rules to, Junpei explaining it, wrongly, in three languages, and Jaehyun, who had never played a card game in his life that didn't involve money, sitting very upright and winning every hand with a face like a closed bank." },
    { s: 'cherry', f: 'serious', t: "He's cheating. How is he cheating." },
    { s: 'jaehyun', f: 'neutral', t: "I'm counting cards. It's different. It's math." },
    { s: 'jihoon', f: 'happy', t: "It's a crime in Busan." },
    { s: 'jaehyun', f: 'neutral', t: "We're not in Busan." },
    { n: "Haechan ended up across from Akihiko again. Of course he did. And it turned out there was a way to play daifugo as a blood sport, which was to stare at the other person over your cards without blinking while slapping down pairs, and they found it, and the whole table found it too, and by the fourth hand people were standing up to watch." },
    { choose: [
      { t: "(Play your whole hand to beat both of them.)", then: [
        { n: "She waited. She let them burn their best cards on each other, slap, slap, staring, until there was nothing left between them but threes and fours, and then she laid down her hand, all of it, one revolution, and went out first, and sat back, and drank her tea." },
        { s: 'haechan', f: 'surprised', t: "...You've been sitting on that the whole time." },
        { s: 'akihiko', f: 'surprised', t: "*Since the first deal?*" },
        { s: 'solar', f: 'happy', t: "You were busy." },
        { n: "For one second they looked at each other across the table with the identical expression of two men who've just been robbed by the same pickpocket, and then Haechan started laughing, and then Akihiko did, and it was the first time she'd heard them laugh at the same thing, and they both seemed a bit shocked by it." }
      ] },
      { t: "(Lose on purpose and go wash the cups.)", then: [
        { n: "She lost, carefully and convincingly, and gathered the cups on a tray, and Hanni watched her do it with narrowed eyes and didn't say anything, because Hanni knew exactly what she was doing and why: the room had gotten loud, and loud was good, and somebody had to stand up and leave it alone to be loud." }
      ] }
    ] },
    { n: "Mrs. Oka came in with the rice cakes." },
    { n: "The tin with the cranes on it, full to the brim, packed in rows, white and soft and dusted, and she set it in the middle of the table among the cards and the teacups and took the lid off, and the smell came up, sweet and plain and warm, and everybody reached." },
    { n: "Everybody. Even Jihoon, who hadn't eaten rice in five days. He reached without thinking, the way you reach for something on a table when you're laughing, and ate it in two bites, and then sat very still with his hand halfway back to the tin, looking at nothing." },
    { s: 'yunjin', f: 'surprised', t: "Oh my god. Oh my *god*. These are better than last time. How are these better than last time? Last time was already the best thing I've ever eaten in my life." },
    { s: 'mrsoka', f: 'neutral', t: "Are they? Oh, I'm so glad. It's the new flour." },
    { n: "She said it simply, kneeling at the end of the table with her gloved hands in her lap, smiling at all of them with enormous fondness." },
    { s: 'mrsoka', f: 'neutral', t: "I got some new flour in this week. Very fine. You can always tell. It makes all the difference, good flour." },
    { n: "Solar was holding one. She hadn't eaten it yet. She looked at it in her fingers, white and soft and dusted, the powder coming off on her skin, fine as talc, faintly sweet, the same weight and texture and color as the dust she'd washed out of the lines of her palm four nights ago, standing in the hall in the dark." },
    { choose: [
      { t: "(Eat it.)", flag: 'eqx-gw-ate', then: [
        { n: "She ate it. It was the best thing she'd ever tasted. That was the worst part, for a long time afterward. Not anything she suspected. Only that it was so good, and she was so hungry, and her body wanted another one before she'd swallowed the first." }
      ] },
      { t: "(Put it down on the saucer.)", flag: 'eqx-gw-left', then: [
        { n: "She put it down on the edge of her saucer, carefully, and left it there. Nobody noticed. Mrs. Oka noticed. Across the length of the table, through the steam and the cards and the laughing, her eyes rested on the saucer for one long moment, and then on Solar, and then she smiled, wider, and said there were plenty more where that came from." }
      ] },
      { t: "(Take it out to Koromaru on the step.)", flag: 'eqx-gw-dog', then: [
        { n: "She got up and took it out to the step. Ken and Aigis looked up at her. Koromaru looked at the rice cake in her hand, and lifted his lip from his teeth, very slowly, without a sound, and looked away out at the rain, and didn't look back until she'd taken it inside again." },
        { s: 'aigis', f: 'neutral', t: "He has refused all food from this house. Four times. I am keeping count." }
      ] }
    ] },
    { n: "The rain stopped at six as suddenly as it had started. They walked home in a long straggling line in the wet gold evening light, seventeen people and a dog, the gutters running, and everyone was quiet and full and warm, and Junpei did one impression of Jaehyun counting cards that made even Mitsuru laugh, and it had been, by any measure anyone could have made, a good day." },
    { n: "At the corner Solar looked back. The boarding house sat behind its low gate in the last of the light with every window lit, and Mrs. Oka was standing in the doorway, watching them go, waving, with her gloves on." }
  ] },

  { id: 'eqx-tale', date: '5/5', slot: 'evening', consumes: true, title: "it isn't that sort of night", place: 'The Oka Boarding House · Veranda', time: 'Evening',
    cast: { solar: 'Solar', ken: 'Ken', koromaru: 'Koromaru', yunjin: 'Yunjin', mrsoka: 'Mrs. Oka' },
    scene: [
    { bg: 'outside-daytime-neighborhood', music: 'tender' },
    // BG: oka-boarding-house-veranda-evening — the wooden veranda of an old Japanese house at dusk, paper lanterns lit along the eaves, a persimmon tree and a capped stone well in the garden beyond, carp streamers hanging limp on a pole.
    { n: "It was Children's Day, and Mrs. Oka had made kashiwa-mochi, and she had telephoned the dorm specially to ask for Ken." },
    { n: "Ken had wanted to go. That was the trouble. Ken was eleven and grieving and polite, and an old lady had made the special Children's Day rice cakes, the ones wrapped in oak leaves, just for him, and was going to put up carp streamers on her pole because she had no children of her own to put them up for, and nothing in Ken knew how to say no to that. So he went, and Koromaru went because Ken went, and Solar went because she couldn't not, and Yunjin went because Solar did." },
    { n: "The carp streamers were up when they got there. Three of them, black and red and blue, on a bamboo pole by the gate, and there was no wind at all that evening, not a breath, so they hung straight down the pole like fish on a line." },
    { n: "Koromaru lay down in the gateway, across it, the way he'd lain on the step. Ken crouched and rubbed his ears and told him he'd bring him something, and Koromaru licked his wrist once, slowly, and held it a moment in his mouth, very gently, with his teeth, not hard, the way a dog holds something it doesn't want to let go of, and then let it go." },
    { place: 'The Oka Boarding House · Veranda', time: 'Evening', bg: 'iwatodai-riverside-night', soft: true },
    { n: "They sat on the veranda in the dusk with the lanterns lit along the eaves, Ken on a cushion with a plate of oak-leaf mochi in his lap, Solar and Yunjin on the step below, and Mrs. Oka on her knees beside him on the boards, with her gloved hands in her lap, and it was very quiet. The river was thirty steps away and you couldn't hear it. The town was all round them and you couldn't hear it either. Only the lanterns ticking as they warmed, and Ken eating, slowly, carefully, peeling each oak leaf off the way he'd been taught by someone once." },
    { s: 'mrsoka', f: 'neutral', t: "Do you know a story about the sun and the moon, Ken-chan?" },
    { s: 'ken', f: 'neutral', t: "...Which one? There's a lot." },
    { s: 'mrsoka', f: 'neutral', t: "Oh, this is an old one. Older than this house. Older than the hills. Shall I tell it to you?" },
    { n: "Ken nodded. Solar, on the step, had gone completely still." },
    { n: "She knew which one. She knew before Mrs. Oka had said another word, the way you know a song from its first two notes in a shop. She'd heard it three times in her life, from three women, at three bedsides, and every one of them had told it differently and every one of them had told it all the way through." },
    { s: 'mrsoka', f: 'neutral', t: "Once upon a time, a long way away, there was a mother who lived in a little house in the hills with her two children, a girl and a boy." },
    { s: 'mrsoka', f: 'neutral', t: "And every day she went to work over the hills, to a big house where they were having a party, and every evening she walked home over the hills again with rice cakes in a basket on her head, for her children, because she loved them, and they were waiting up for her." },
    { n: "Her voice was low and slow and warm, the voice of a woman who'd told a story so many times she could walk through it in the dark. Ken had put his plate down. He was listening with his whole face, the way small children listen, though he'd have hated to be told he looked small." },
    { s: 'mrsoka', f: 'neutral', t: "And one night she was a little late. And the children waited and waited, and the house was dark, and they'd been told, they'd been told so many times, never to open the door to anyone but their mother." },
    { n: "Then she stopped." },
    { n: "Not a pause. A stop. A gap in the story, smooth, the way a road goes on past the place where a bridge used to be. Solar heard it go by. Her whole body heard it, a lurch in the stomach like missing a stair in the dark. The hills. The basket. The first rice cake. The tiger." },
    { s: 'mrsoka', f: 'neutral', t: "And in the end the children climbed up a golden rope into the sky. And the girl became the sun, and the boy became the moon. And they're up there still. Look." },
    { n: "She pointed with one gloved finger. Over the persimmon tree, over the black roof of the house next door, the moon was coming up, a week off full, lopsided and pale and ordinary, and Ken looked up at it, and his face did something complicated." },
    { s: 'ken', f: 'neutral', t: "...That's not how it goes." },
    { s: 'mrsoka', f: 'neutral', t: "Isn't it?" },
    { s: 'ken', f: 'serious', t: "There's a part in the middle. I'm sure there's a part in the middle. Why did they have to climb? What were they climbing away from?" },
    { s: 'mrsoka', f: 'neutral', t: "Oh, that part." },
    { n: "She smiled down at him, and reached out, and smoothed his hair off his forehead with her gloved hand, slowly, the way you'd smooth it for a child who's already half asleep." },
    { s: 'mrsoka', f: 'neutral', t: "It isn't that sort of night." },
    { choose: [
      { t: "You skipped the tiger.", flag: 'eqx-tale-tiger', then: [
        { n: "It was out before she could stop it. Ken turned and looked at her. Yunjin, beside her on the step, went rigid." },
        { n: "Mrs. Oka didn't turn. She was still looking at Ken, still smoothing his hair, slow, slow, and for a long moment she didn't say anything at all, and the lanterns ticked." },
        { s: 'mrsoka', f: 'neutral', t: "Did I? Silly of me. I'm getting old." },
        { s: 'mrsoka', f: 'neutral', t: "...Some other night, then. When he's bigger. It's not a story for little boys, the tiger. It's a story for big girls who know better." },
        { n: "She said it fondly. She said it to Ken. And then, very slowly, she turned her head and looked down at Solar on the step below her, and smiled, and it was the warmest smile in the world, and there was nothing in her eyes at all." }
      ] },
      { t: "(Say nothing. Watch her hand in Ken's hair.)", then: [
        { n: "She said nothing. She watched the gloved hand move in Ken's hair, back and forth, back and forth, and the fine white dust it left there, the faintest powdering along his parting, like the first frost on a lawn. Ken didn't notice. Ken had his eyes on the moon." }
      ] },
      { t: "Ken. Time to go home.", then: [
        { s: 'ken', f: 'neutral', t: "...Already?" },
        { s: 'mrsoka', f: 'neutral', t: "Already? Oh, but you've only just come. Stay a bit. Just till the moon's over the tree." },
        { n: "Ken looked at Solar. Ken looked at Mrs. Oka. He was eleven and polite and grieving, and an old lady had made him rice cakes, and Solar watched the yes come up into his face like color, easy, warm, so easy, and got up off the step and took his wrist, gently, the way Koromaru had." },
        { s: 'solar', f: 'neutral', t: "Hanni's rota. He's on the early shift." },
        { s: 'mrsoka', f: 'neutral', t: "Oh, the rota. Of course. The rota." }
      ] }
    ] },
    { n: "Mrs. Oka got up, then, to clear the plates. She gathered them on a tray and carried it in through the open screen to the kitchen, and as she went, she began to hum." },
    { n: "Low. With her mouth closed. An old tune, slow, rocking, the kind you'd sing over a cot, three notes up and two down and a long one at the end like someone breathing out." },
    { n: "Solar knew it." },
    { n: "Not from her mothers. From the bottom of the Well, on the night of the sixth, in the black water up to her shins with the sky under her feet and something big breathing far below her in the dark; it had come up out of the depths then, faint, like a radio in another house, and she'd thought it was her own head. And from the floor of the lounge on the twenty-ninth, Haechan's face turned away, saying *something old, something you'd sing to a kid*. *It sounds happy.*" },
    { n: "Beside her on the step, Yunjin's hand found hers in the dark, and gripped it so hard the bones ground." },
    { s: 'yunjin', f: 'serious', t: "...Sol. We're going. Now." },
    { n: "They went. Ken between them, holding a plate of leftover mochi wrapped in a napkin for the dorm, which Yunjin took off him at the gate without a word and put down very carefully on the gatepost, and left there." },
    { n: "Koromaru got up out of the gateway as they came through it and walked tight against Ken's legs the whole way home, so tight Ken kept stumbling, and every few steps he looked back over his shoulder at the house, and his hackles didn't go down until the shrine." },
    { n: "Behind them the carp streamers hung on their pole in the windless dusk. Ken looked back once, at the corner. He said that one of them was moving. Only one. Swimming, slowly, all on its own, in no wind at all." }
  ] },

  { id: 'eqx-read', date: '5/8', slot: 'evening', consumes: true, title: 'read, no reply', place: 'Iwatodai Dorm · Lounge', time: 'Evening',
    cast: { solar: 'Solar', minji: 'Minji', jaehyun: 'Jaehyun', hanni: 'Hanni', hyein: 'Hyein', haechan: 'Haechan', jungwon: 'Jungwon', jihoon: 'Jihoon', cherry: 'Cherry', yunjin: 'Yunjin', junpei: 'Junpei' },
    scene: [
    { bg: 'iwatodaidorm-livingroom-night-spring', music: 'night' },
    { n: "The phones came back on a Saturday." },
    { n: "Not the town's. Theirs. The ones they'd come through with in their pockets, from home, which had sat in drawers and on bedside tables for a month showing no service, no service, no service, little dead slabs of glass with the wrong time on them, kept charged out of habit or superstition or because putting one away for good felt like a door closing. On Saturday evening, at about seven, all of them lit up at once." },
    { n: "Hanni's buzzed on the kitchen counter. Jaehyun's went in his coat pocket in the hall. Jungwon's, which he kept in his blazer with his diary, made a sound like a small bird. Across the dorm, on every floor, in every room where someone from somewhere else had left one, a phone that hadn't made a sound since April woke up and said one bar, and the room went dead quiet." },
    { n: "By eight they were all in the lounge. The guesthouse people too; Jihoon had run the whole way, Cherry behind him swearing. Everybody holding a phone. Everybody looking at the one bar, flickering, there and not there, like a candle in a draft." },
    { s: 'hanni', f: 'neutral', t: "Okay. Okay. Nobody panic. Nobody do anything stupid. Let's just— let's just see what it does." },
    { n: "Minji had already done something. Minji had done it at seven-oh-four, in the guesthouse, before anyone could stop her, sitting on her bed with her thumb moving faster than her brain: posted. One photo. To her account at home." },
    { n: "The dorm roof at sunset. That was all. The last real thing she'd filmed before she put the camera in the drawer, a still pulled from the footage, the sky over the bay going pink and gold and the monorail crossing the water like a line of light, and in the foreground, out of focus, four folding chairs from the laundry room in a row by the railing. No people in it. No caption. Just the picture, sent home, the way you'd throw a bottle into the sea." },
    { s: 'minji', f: 'neutral', t: "...It went." },
    { n: "She held her phone up. The post was there, on her grid, between a blurry photo of a frat party and a selfie from a December that had happened to a different girl. And under it, in the time it had taken her to run to the dorm, the numbers had started." },
    // CG: eqx-viral — a phone screen held up in a dark room, a social media post showing a pink-gold sunset over a bay and a monorail bridge with four empty folding chairs in the foreground, the like count enormous, a long thread of comments below.
    { n: "Then they hadn't stopped." },
    { n: "Four hundred. Nine hundred. Two thousand. Every time she refreshed it, more, and the comments under it scrolling too fast to read, and Solar leaned over her shoulder and read them anyway, in snatches, the names she knew going past. Syracuse handles. People from class. People from parties. People from Sigma's porch." },
    { n: "*this is ai right. obviously ai the monorail doesnt even make sense*" },
    { n: "*minji where are u. ur not answering anyone*" },
    { n: "*lmaooo the chairs. who did the prompt for this*" },
    { n: "*minji's account is hacked report it*" },
    { n: "*wait isnt that the place in the game. the persona game. someone made an ai pic of the persona dorm*" },
    { n: "*this is weird. this is genuinely so weird. why does it make me feel like crying*" },
    { s: 'minji', f: 'sad', t: "...They think it's fake." },
    { s: 'minji', f: 'neutral', t: "Every single one. Eleven thousand. They think I made it up." },
    { n: "She said it flatly, and put the phone face down on her knee, and then picked it up again and refreshed it, and Solar watched her do it three more times without saying anything, because she knew the face Minji was making, she'd made it herself, in front of mirrors, in three lives: the face of a girl finding out how easily the world goes on." },
    { n: "Then everyone else tried." },
    { n: "It was Jaehyun first, of course. He'd been holding his phone in the hall with Dad's name on the screen for an hour without pressing it, and finally, in the corner of the lounge with his back to the room, he typed. Short. Jaehyun-short. *I'm fine. Sol's with me. Don't worry.* And sent it, and stood looking at it." },
    { n: "It went. Delivered. Then, under it, in tiny gray letters, after only a few seconds, faster than anyone at home had ever read anything Jaehyun sent: *Read.*" },
    { n: "Nothing came back." },
    { n: "He waited. They all watched him wait. A minute. Five. The little gray word sat under his message and nothing came, no dots, no typing, nothing, and Jaehyun's jaw did a thing Solar had seen it do at the foot of a long dinner table when someone at the far end had said his name in the wrong voice." },
    { s: 'jaehyun', f: 'neutral', t: "...He read it." },
    { s: 'jaehyun', f: 'neutral', t: "He always takes a day to read things. A day at least. It's a thing he does. He *read* it." },
    { n: "Then it was everybody. Hanni, to the girls' group chat at home, *are u guys ok*, and *Read by 4*, and nothing. Jungwon, very carefully, to his mother, in formal Korean, two lines, the kind of message you'd write on a card, and *Read*, and nothing. Jihoon typed something to someone and deleted it and typed it again and deleted it and put the phone in his pocket. Cherry sent one word to her own mother, *hi*, and got *Read*, and laughed out loud, a short hard laugh, and said that was the most attention her mother had paid her in two years." },
    { n: "Yunjin didn't send anything. She sat in the armchair with her phone in her lap and her thumb hovering over a name, for a long time, and then turned the screen off, and put her hand flat over it, and looked at the window." },
    { n: "The read receipts were wrong. That was what Jungwon noticed, because Jungwon noticed things. He held his phone out and showed her. His message had gone at eight-twelve. It had been read at *3:40 AM*. His mother's phone said it was nearly four in the morning, wherever it was, whenever it was. Hanni's chat said *Read 11:15*. Jaehyun's said *Read Thursday*." },
    { s: 'jungwon', f: 'neutral', t: "They're all different times. Every one of them." },
    { s: 'haechan', f: 'neutral', t: "Because it's not one place. It's three. Four. Whatever." },
    { s: 'haechan', f: 'serious', t: "...It's going on. That's what this is. Back home. It's all just going on. They get it, they read it, they look at it, and then somebody calls them for dinner." },
    { n: "Nobody said anything after that for a while." },
    { n: "Hyein had her phone in both hands. She'd been holding it since seven. She hadn't opened the voicemail tonight, Solar realized; for the first time since April she hadn't played it to fall asleep, not last night or the night before; she'd been sleeping with the phone face down under the futon and Hanni across her door. Now she opened her messages. Scrolled up to a name. Typed, very slowly, with one thumb." },
    { n: "*mom its me. im ok. i miss you. call me back*" },
    { n: "She sent it. It went. They all watched the little gray word come." },
    { n: "*Read.*" },
    { n: "Hyein looked at it. She looked at it for a full minute without moving, and the room stayed quiet around her, and nothing came, and nothing came. Then she put the phone down on the cushion beside her, screen up, very gently, and said in a small reasonable voice, to nobody," },
    { s: 'hyein', f: 'sad', t: "...If there was a door. A real one. Just to go and look. Just to see her face and come back. I'd go." },
    { n: "Hanni turned her head. Everyone turned their heads. And Solar, who was nearest, who had her hand on the arm of the couch an inch from Hyein's, felt the words come up into her mouth all by themselves, warm and easy and right, the most natural thing in the world to say to a girl you loved who was talking about leaving." },
    { choose: [
      { t: "Stay. Please.", tally: { asked: 1, cakes: 1 }, flag: 'eqx-asked-hyein', then: [
        { n: "Hyein looked at her. Her face crumpled, slowly, from the chin up, and she nodded, and nodded, and leaned sideways until her head was on Solar's shoulder, and stayed there." },
        { s: 'hyein', f: 'sad', t: "...Okay. Okay. I'm staying. I wasn't going anywhere. I just said it." },
        { n: "It felt good. It felt like the right thing. Solar held her and felt it settle in her chest, warm, like a rice cake going down, and didn't know why, under it, very faintly, so faint it might have been the house, something seemed to hum." }
      ] },
      { t: "If there's ever a door, it's yours to walk through.", tally: { choose: 1 }, flag: 'eqx-choose-hyein', then: [
        { n: "Hyein looked at her. Hanni looked at her too, sharply, and opened her mouth, and closed it." },
        { s: 'hyein', f: 'surprised', t: "...You wouldn't stop me?" },
        { s: 'solar', f: 'neutral', t: "I'd hate it. I'd walk you to it. I wouldn't stop you." },
        { n: "It cost something to say. She felt it go out of her, a small hard coin of it, and leave a gap. Hyein stared at her for a long time, and then her eyes filled, and she laughed, wetly, and wiped her face with the back of her wrist." },
        { s: 'hyein', f: 'happy', t: "That's so mean. That's the nicest mean thing anyone's ever said to me." }
      ] },
      { t: "(Take her hand and say nothing.)", then: [
        { n: "She took Hyein's hand and said nothing at all. Hyein's fingers closed on hers. On her other side, Hanni took the other hand. And they sat like that, the three of them, on the couch, with Hyein's phone face up on the cushion showing the little gray word, and nobody turned it over." }
      ] }
    ] },
    { n: "At eleven-thirty all the phones lost their bar at once, together, the way they'd found it. One moment there, then *no service*, every screen in the room, and a sound went round the lounge that wasn't quite anybody's voice." },
    { n: "Junpei, who had no phone from anywhere else and had sat on the stairs all evening watching, came down and stood in the doorway with his hands in his pockets." },
    { s: 'junpei', f: 'neutral', t: "...For what it's worth. I'd have replied." },
    { n: "Nobody laughed. But Jihoon got up, and went over, and put his arm round Junpei's neck and pulled his head down onto his shoulder, roughly, for about two seconds, and let go, and nobody said anything about that either." },
    { n: "Minji's post was still up, when she checked it the next morning on a phone with no bar. Frozen at the moment the signal went. Eleven thousand four hundred and two. And the last comment under it, from an account she didn't know, a gray circle with no picture, posted at a time that didn't exist." },
    { n: "*so pretty. stay there.*" }
  ] },

  { id: 'eqx-first-hill', date: '5/28', slot: 'evening', consumes: true, title: 'the first hill', place: 'Iwatodai Dorm · Lounge', time: 'Evening',
    cast: { solar: 'Solar', haechan: 'Haechan', minji: 'Minji', akihiko: 'Akihiko', fuuka: 'Fuuka', mitsuru: 'Mitsuru', hanni: 'Hanni', hyein: 'Hyein' },
    scene: [
    { bg: 'iwatodaidorm-livingroom-night-spring', music: 'badfeeling' },
    { n: "The red ran sixty-one minutes and four seconds on the twenty-seventh. A whole minute over, in a month, a second a night and then the night after the guesthouse, thirteen, and after that never quite only one again. Akihiko's first roll of tape had run out on the twentieth and he'd started a new one, and the strips on the wall of his room went halfway down it now in a white column, like a ladder, like something keeping count of a fall." },
    { n: "And on the morning of the twenty-eighth, a Friday, the day of the full moon, Fuuka came down to breakfast with her face the color of milk and said, very quietly, before anyone had sat down, that the well in the courtyard had changed." },
    { s: 'fuuka', f: 'neutral', t: "I've been listening to it every night. Since April. It's always the same. Down, and down, and down, and the rope, and then nothing I can reach." },
    { s: 'fuuka', f: 'sad', t: "Last night there was something new. Further down. Like a door opening in a house when you're upstairs. And the air coming up out of it is cold, and it smells of—" },
    { n: "She stopped, and looked at Solar, and then at Haechan, and then at Minji, who'd come over from the guesthouse for breakfast for the first time in weeks, and back at Solar." },
    { s: 'fuuka', f: 'neutral', t: "...It smells of snow." },
    { n: "Nobody at the table said the word Syracuse. Three of them thought it so loudly that Junpei, who'd never been there in any life, looked up from his rice." },
    { n: "Hanni said it at dinner instead, standing in the kitchen doorway with a dish towel over her shoulder, to nobody in particular, in the voice of someone stating a fact about the weather." },
    { s: 'hanni', f: 'serious', t: "If you see the house. Our house. You don't go in." },
    { s: 'hyein', f: 'neutral', t: "...Hanni." },
    { s: 'hanni', f: 'serious', t: "I'm just saying. If there's a door in the bottom of a well and it's got the porch on the other side of it. With the swing. You don't go in. You come home." },
    { n: "She went back to the dishes. Hyein looked at the back of her for a long time, and then at Solar, and Solar didn't know what her own face did, but Hyein saw it, whatever it was, and looked away." },
    { place: 'Gekkoukan High · Courtyard', time: 'The Dark Hour', bg: 'darkhour-gekkoukan-gate', music: 'fullmoon' },
    { dark: true },
    { n: "At twelve the school went red, and the courtyard was a stage." },
    { n: "That was how it looked. The moon full and swollen and the color of an old bruise, sitting directly over the courtyard like a light hung on a rig, and the red pouring down from it onto the paving, and the well in the middle of it, the low ring of mossy stone, lit from above as if somebody had trained a spot on it and was waiting for a performance to begin." },
    { n: "Four of them went down. Solar, because it was always going to be her. Haechan, because nobody could have stopped him and nobody tried. Minji, with the silver camera back on its strap round her neck for the first time since April, because Fuuka had said *snow* and Minji had gone very quiet and then gone to the drawer. And Akihiko, because Mitsuru said four, and he was the fourth, and he'd been taping the hour for two months and wanted, he said, to meet whatever was making it longer." },
    { s: 'mitsuru', f: 'neutral', t: "Fuuka will hold the line for as long as she can hear you. When she can't, you come up. Not later. Then." },
    { s: 'fuuka', f: 'neutral', t: "*I'll hear you. I'll try. I'll try really hard.*" },
    { n: "The rope was there, coiled on the lip of the well, gold in the red light, frayed in places, with its one clumsy knot that was always warm. Haechan put his hand on it and looked at her." },
    { s: 'haechan', f: 'neutral', t: "Same as last time. You first. I'm right above you." },
    { s: 'solar', f: 'neutral', t: "Last time you were first." },
    { s: 'haechan', f: 'happy', t: "Last time you were at the bottom. Different rules." },
    { place: 'The Well · The Doorstep', time: 'The Dark Hour', bg: 'eq-well-1', soft: true },
    { n: "Down. Hand under hand. The red going dim above them and the wet stone close on every side, the shaft turning slow and spiral round the rope like the inside of a shell, and the only sound their breath and the creak of the rope and, far below, water." },
    { n: "Then the shaft opened out, and they were in the town." },
    { place: 'The Well · The Doorstep', time: 'The Dark Hour', bg: 'eq-well-2', soft: true },
    { n: "Iwatodai, upside down. The streets on the ceiling, hanging overhead, the houses hanging off them by their roofs with their lit windows looking down, and below their feet black water, flat as glass, holding the whole town again the right way up so that they walked between two Iwatodais, one hanging and one drowned. And doors everywhere. In the walls, in the ceiling, set into the black water like trapdoors. All of them shut. Some of them, as they passed, knocking softly, from the other side, in no voice at all." },
    { n: "They didn't stop for any of them." },
    { n: "Minji filmed. She filmed the whole way down, the camera steady, her other hand on the back of Solar's jacket, and when they passed a door in the ceiling that had swung open on its own, on a little room where someone was sitting at a table with their back to the door, she kept the camera on it until it was behind them, and didn't say anything, and Solar felt her fingers twist into her jacket and hold." },
    { s: 'akihiko', f: 'serious', t: "...Don't look in the open ones." },
    { s: 'minji', f: 'neutral', t: "I'm not looking. The camera's looking. It's different." },
    { n: "Then the water turned white." },
    { place: 'The Well · The First Hill', time: 'The Dark Hour', bg: 'eq-well-3', music: 'mystery' },
    { n: "Snow. Snow on the black water, a thin skin of it, and snow falling, very slowly, from nowhere, onto their hair and their shoulders, and the cold coming up through their shoes, and ahead of them, across a still lake of black ice, a campus." },
    { n: "Solar knew it the way you know your own handwriting. The domed building on the hill. The long stone face of the hall with its rows of windows. The quad. The walks. All of it in snow, at night, the way she'd seen it a hundred times walking home late from somewhere she shouldn't have been, and all of it reflected perfectly in the black ice under her feet, upside down, so that there were two of everything, and the snow fell up in one and down in the other." },
    // CG: eqx-first-hill — a snowy university campus at night mirrored perfectly in a lake of black ice, a domed hall and a long stone building with every window blazing white like a stage light, four small figures standing at the edge of the ice, snow falling.
    { n: "And every window was a stage light." },
    { n: "Every single one. Blazing, hard white, the flat merciless glare of the lights at the front of a stage or the flash going off in your face at a party, hundreds of them, in every building, all of them turned to face the ice. All of them turned to face her. She felt them land on her skin like heat. She felt her face, without her asking it to, start to arrange itself." },
    { s: 'haechan', f: 'serious', t: "...Hey. Hey. Sol. You're doing the thing." },
    { s: 'solar', f: 'neutral', t: "What thing." },
    { s: 'haechan', f: 'serious', t: "The SUnews thing. The face. You're doing the face." },
    { n: "She was. She could feel it. Chin up, shoulders back, the smile half-loaded, the face she wore in a doorway when she knew someone was about to take a photo of her coming through it. Her body had done it on its own the moment the light hit, the way it had always done it, the way she'd trained it to in a city where every party had a camera and every camera had a feed." },
    { n: "Minji had lowered the camera. She was looking at the windows with her face perfectly blank, the way a person looks at an old photograph of a house they used to live in, and she said, quietly," },
    { s: 'minji', f: 'sad', t: "There's no one in the audience." },
    { n: "There wasn't. All across the snowy quad, in rows, facing the stage-light windows, there were seats. Not chairs. Coffins. Rows and rows of them, standing upright in the snow the way the town's coffins stood in their beds at night, an audience, packed in tight. And every one of them had its lid off. Open. Standing open in the snow, row after row, facing the light. And every one of them was empty." },
    { n: "Akihiko had stopped walking. His hand went out without looking and found her wrist, and closed on it, the way it closed every night now on nothing." },
    { s: 'fuuka', f: 'surprised', t: "*Solar— something's coming up. Out of the light. It's— it's big, it's the biggest thing I've felt down there, it's coming toward—*" },
    { n: "Fuuka's voice broke up into static. Then nothing. Then the hum of the red, and the soft fall of snow, and the lights." },
    { n: "And something stepped out of the brightest window, onto the ice." },
    { n: "It was made of light. Or it wore light, the way a performer wears a costume, a tall thin shape with no face at all where a face should be, only a lens, a round dark glass eye in a ring of white bulbs like a mirror in a dressing room. It walked across the black ice toward her on its long stalk legs with a sound like a shutter clicking at every step, and the snow lit up around it, and it stopped in front of her, close, very close, so close she could see herself in the lens. Small. Smiling. Lit." },
    { n: "It didn't attack. It held out one long hand, palm up, the way the Shadows in the Well always held out a hand, open, asking. And it spoke, very softly, in a voice like a crowd talking at a party in the next room." },
    { n: "*Smile.*" },
    { n: "That was all. One word. Not a threat. A request. The voice of every person who had ever pointed a phone at her from across a room. The voice of a father at the head of a table. The voice of the whole bright, watching, beautiful life that had been planned for her, held out to her across the snow on one open palm. Just once. Just for this one. Just give it what it wants, and it would be so easy, and it would be so pleased." },
    { choose: [
      { t: "(Smile for it.)", tally: { cakes: 1, 'asks.solar.smile': 'yes' }, flag: 'eqx-hill1-smiled', then: [
        { n: "She smiled. It was easy. It was the easiest thing in the world; her face had been halfway there the whole time. The best one. The one for the photo in the doorway. She felt it go out of her and into the lens like breath into cold air, and the lens drank it." },
        { n: "The lights blazed brighter, all of them at once, a roar of white, and the thing in front of her shivered from top to toe with what looked, horribly, like pleasure. And down in her chest, somewhere under her ribs, something small and warm went out of her, and didn't come back, and she couldn't have said what it was. Only that she was, very slightly, less." },
        { n: "It didn't leave. It never had been going to leave. It lifted its other hand." }
      ] },
      { t: "(Don't.)", tally: { 'asks.solar.smile': 'no' }, then: [
        { n: "She didn't. She stood in the snow and the light with her face doing nothing at all, nothing, the flattest face she owned, and held it, and it was the hardest thing she'd done in weeks. Every muscle in her face wanted to move. Every light on the hill was waiting for it to." },
        { n: "The thing in front of her tilted its lens, slowly, to one side. The bulbs round it flickered. And the voice came again, smaller, almost hurt, the voice of someone at a party who's been snubbed in front of everyone." },
        { n: "*...Smile.*" },
        { n: "Then it lifted its other hand." }
      ] },
      { t: "I'll smile when I want to.", tally: { choose: 1, 'asks.solar.smile': 'choose' }, flag: 'eqx-hill1-mine', then: [
        { n: "She said it to the lens, quietly. Not angry. Not anything. Just true, the way it had been true in a warm kitchen in April, the way it was going to have to keep being true." },
        { n: "And then, because it was hers, because it belonged to her and nobody else on any hill in any world, she did. Not at it. At Haechan, beside her, who was looking at her with his whole face wide open. A small one. A real one. The one nobody had ever been able to photograph, because it only came when she wasn't being looked at." },
        { n: "The lens tracked it, and couldn't catch it, and every light on the hill flickered at once like a held breath, and the thing in front of her made a sound, a long thin electronic whine, like feedback, like a crowd turning on someone." },
        { n: "Then it lifted its other hand." }
      ] }
    ] },
    { s: 'haechan', f: 'serious', t: "Okay. That's enough of that. *Dalnim.*" },
    { s: 'minji', f: 'serious', t: "I've got its weak side. I've been filming it the whole time. I've got *every* side." },
    { n: "Akihiko let go of her wrist, one finger at a time." },
    { s: 'akihiko', f: 'serious', t: "Whatever it is. It's not getting another one off you." },
    { summon: 'haenim', name: 'Haenim', sub: 'The First Hill.' },
    { battle: { id: 'eqx-first-hill', op: 'eqx-first-hill', kind: 'operation', title: 'Full Moon · The First Hill', desc: 'A campus in snow, every window a stage light, an audience of empty seats, and something made of light that only wants one thing from her.', forced: true } },
    { music: 'night' },
    { n: "The lights went out one at a time." },
    { n: "Building by building, window by window, all across the snowy hill, the way the town went out at midnight, until there was only the moon, and the snow, and the black ice holding the dark campus upside down, and the thing on the ice in front of her coming apart into fine pale dust that fell, and fell, and lay on the snow, and was the same color as the snow, so that in a moment you couldn't tell where it had been." },
    { n: "The coffins in the quad closed. All of them, all at once, every lid swinging shut together with one soft wooden sound like an audience settling back into its seats." },
    { n: "Minji was sitting in the snow with the camera in her lap, not filming. Akihiko was on one knee, breathing hard, his scraped knuckles bleeding again. Haechan was standing beside her with his hand already out, open, as if he hadn't noticed he'd put it there." },
    { n: "And across the ice, at the edge of the quad, where the campus walk went up the hill between the dark trees, there was a door." },
    { n: "Not a door in a building. A door on its own. Standing up in the snow at the end of the path, an ordinary house door, white painted, with a brass number and a little square of glass at the top, and through the glass, warm yellow light." },
    { n: "She knew that door. She'd come in through it drunk and sober, laughing and crying, at three in the morning and at noon, a hundred times. She knew the porch it should be on and the swing on the porch and the way the second step creaked. She knew what was on the other side of it: the stairs, the hall, the smell of somebody's vanilla candle and somebody else's burnt popcorn, the sound of girls' voices upstairs, the door at the top of the stairs on the left that was hers." },
    // CG: eqx-door-r1 — a single white-painted house door standing alone in the snow at the top of a dark campus path, warm yellow light glowing through the little window in it, footprints in the snow leading toward it and stopping.
    { n: "The light was on. Somebody had left the light on for her." },
    { n: "Nobody said anything. Minji had lifted her head. Haechan's hand was still out, and she watched him look at the door, and look at her, and then, very slowly, deliberately, as if it cost him something, lower his hand, and put it in his pocket, and look away, out over the ice, so that whatever she did, she'd be doing it without him holding on." },
    { flag: 'eqx-door-R1' },
    { choose: [
      { t: "(Go toward it.)", tally: { 'doors.R': 1 }, flag: 'eqx-home-R1', then: [
        { n: "She went toward it. Across the ice. Her shoes slipping. Up the path between the dark trees, the snow squeaking, the light in the little window getting warmer and closer and more yellow, and she could hear them now, she was sure she could, faintly, through the wood, somebody laughing upstairs, somebody's music, somebody yelling at somebody else to shut the fridge." },
        { n: "She put her hand up. Her fingers were an inch from the handle." },
        { n: "The light went out. Not off. *Out*, like a match. And the door wasn't there, and the path ended in snow, and in the snow, where the door had been, there were footprints. Hers, coming up the path. And another set, going the other way. Small. Close together. A girl's, in boots, walking away from the door down the far side of the hill, toward nothing, as if someone had come out just as she arrived and gone on without her." },
        { n: "She stood there a long time with her hand still up." },
        { n: "When she came back across the ice Haechan had taken his hand out of his pocket. He didn't say anything. He didn't ask. He just held it out, and she took it, and it was very warm, and he squeezed once, and that was all the conversation either of them could have managed." }
      ] },
      { t: "(Look away.)", flag: 'eqx-away-R1', then: [
        { n: "She looked away. Out over the black ice, the way Haechan was looking, at nothing, at the dark. She heard the door the whole time. Not a sound, exactly. A kind of warmth, at the side of her face, like standing near a stove." },
        { n: "When she looked back it was gone. Only snow, and the end of the path, and the trees." },
        { n: "Haechan took his hand out of his pocket. He didn't look at her. He held it out sideways, toward her, without turning his head, and she took it." },
        { s: 'haechan', f: 'neutral', t: "...It'll come back. Those things always come back." },
        { s: 'solar', f: 'neutral', t: "I know." },
        { s: 'haechan', f: 'sad', t: "I'm not asking which way you'll walk when it does. I said I wouldn't. I meant it." }
      ] },
      { t: "(Stay where you are and watch it.)", flag: 'eqx-watch-R1', then: [
        { n: "She stayed where she was, on the ice, and watched it. She didn't go toward it. She didn't look away. She let it be there, the door and the light and everything behind it, and let it hurt, and kept watching." },
        { n: "After a while the light in the little window dimmed, slowly, like a lamp being turned down in an upstairs room by someone going to bed, until it was a glow, and then not even that. And the door was just a door in the snow, dark, and then not even that." },
        { n: "Minji had the camera up. She'd filmed the whole thing. She lowered it and looked at the screen and frowned, and showed Solar." },
        { n: "On the screen the path ended in snow. There'd never been a door in any frame." }
      ] }
    ] },
    { s: 'fuuka', f: 'surprised', t: "*—lar? Solar? Can you hear me? I lost you, I lost all four of you, I couldn't— please say something—*" },
    { s: 'solar', f: 'neutral', t: "We're here. We're coming up." },
    { n: "They climbed. It took a long time. Hand under hand up the gold rope, Akihiko first this time, then Minji, then Solar, then Haechan last, right below her, so close his hand on the rope kept brushing her heel, on purpose, she thought, so she'd know he was there in the dark without having to say so." },
    { place: 'Gekkoukan High · Courtyard', time: 'The Dark Hour', bg: 'darkhour-gekkoukan-gate', soft: true },
    { n: "Hanni was at the top. Hanni wasn't supposed to be at the top; Hanni was supposed to be in the dorm lounge with the others, and she was kneeling on the lip of the well in the red with both hands down the shaft, reaching, and when Solar's hand came up out of the dark she grabbed it by the wrist with both of hers and pulled, hard, harder than she needed to, and didn't let go even when Solar was out and sitting on the paving." },
    { s: 'hanni', f: 'serious', t: "...Did you see it?" },
    { n: "Solar didn't ask what. Hanni didn't say. They sat on the stone in the red with Hanni's hands locked round her wrist and Hyein coming across the courtyard toward them at a run in her socks, and Haechan coming up out of the well behind them, and the moon hanging over all of it like a spotlight with nobody left to light." },
    { choose: [
      { t: "I saw it.", then: [
        { n: "Hanni's hands tightened. Then, slowly, deliberately, the way Haechan had put his hand in his pocket, she let go. One hand. Then the other. And put them in her own lap, and looked at them there." },
        { s: 'hanni', f: 'sad', t: "...Okay. Okay." }
      ] },
      { t: "It's gone now.", then: [
        { s: 'hanni', f: 'neutral', t: "That's not what I asked." },
        { s: 'solar', f: 'neutral', t: "I know." },
        { n: "Hanni held on to her wrist the whole way home." }
      ] }
    ] },
    { n: "Akihiko stopped his stopwatch when the lights came on." },
    { n: "Sixty-four minutes. Four over, on a full moon, the way the last one had been two. He looked at it, and then at her, and then, for the first time since April, he didn't write it down." }
  ] }
);
