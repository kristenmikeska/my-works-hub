/* The Stay epilogue, the days pass: four story scenes between the existing events (Nov 5 2026, Kat's "lengthen them and do
   the same improvements we did to the Runners epilogue"; DO-NOT-OPEN-stay-epilogue-expansion.md gaps 1-5). Data only;
   loaded with the world after phone (epilogue.js WORLDS.stay.files). Pushes onto R.events like story.js, so load order
   never matters.
   Events (R.events):
     epi-st-thirtieth     3/30 evening  the full moon with no operation: Mitsuru orders dinner, nobody says why, the habits
                                        (gloves, headphones, the window, the clock), everyone stays in the lounge (consumes)
     epi-st-rota          4/4 early     Sunday. Told: the whiteboard, MIDNIGHT, Mitsuru's rota (tonight Yukari, Fuuka,
                                        Koromaru; Akihiko in the hall anyway). Kept: pancakes, Junpei's "movie marathon until
                                        one", she says she'll sleep early (one strain)
     epi-st-blue          4/5 early     the blue paint. Told: Yukari scrubbing it off her hand at the kitchen sink, Fuuka's
                                        count. Kept: alone at six, Ken comes down early with the nail brush, Aigis names it
     epi-st-last-evening  4/6 evening   the last dinner at the dorm; per route what she asks for at midnight (not consuming:
                                        the evening's goodbyes in people-days.js follow it)
   Flags set: none. Flags read: epi-st-told / epi-st-kept (rota, blue; set in story.js epi-st-clocks; one of them is always
     set by 4/4), epi-st-rooms-box (thirtieth: the storeroom boxes). Route: ifEpiRoute akihiko / shinjiro / sees (locked by
     then). ifYear { anyFlag: ['shinji-awake', 'ending-shinjiro'] } wherever Shinjiro is spoken to.
   Glitches: none scheduled (no new ids). One bare strain in the rota's kept branch ("I'm sleeping early").
   Stays true to story.js: the told rota is why someone is in her room at the 4/4 midnight (story.js epi-st-unheard's told
     lines, added the same night) and why Akihiko is already at the door on 4/5; the last evening sets up the final's
     "the others downstairs, because she'd asked them to be" (sees), "he'd come up first" (akihiko) and the ward at eleven
     (shinjiro) without changing a word of the final.
   Inventions (Kat may change any): Mitsuru orders from "the place on the Strip that does the good tonkatsu" and something
     without salt for Koromaru; Junpei's notebook page "DAY SEVEN: FULL MOON (NOTHING)"; the rota on the command room's
     whiteboard in Mitsuru's marker, with Akihiko's name written on every night by Akihiko; the girls' watch is Yukari,
     Fuuka and Koromaru; Junpei's kept-path movie is a Featherman Rangers box set; Aigis identifies the paint as acrylic;
     Ken practises waking up at six for school; the last dinner is Junpei's curry with Yukari supervising, and the table is
     set for exactly the people at it. No new cast, places or art. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).stay ||= {});
  const awake = { anyFlag: ['shinji-awake', 'ending-shinjiro'] };

  (R.events ||= []).push(

  // ───────────────────────────── 3/30, evening: the thirtieth ─────────────────────────────
  { id: 'epi-st-thirtieth', date: '3/30', slot: 'evening', consumes: true, title: 'the thirtieth', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
    { music: 'epi-st-home' },
    { n: "Nobody said it was a full moon. Nobody had to. It was on every calendar in the dorm in somebody's handwriting, circled once in March of last year and never uncircled, and at breakfast Mitsuru had announced, to her newspaper, that she'd be ordering dinner tonight for everyone from the place on the Strip that did the good tonkatsu, and something without salt for Koromaru, and that attendance was optional, in the voice she used when it wasn't." },
    { n: "So they were all in the lounge by seven. Of course they were. Eight people and a dog around two low tables pushed together, paper boxes open everywhere, the TV on with the sound down to a variety show nobody was watching, and the windows going from blue to black with the moon coming up over the bay behind them, huge and pale and perfectly ordinary, like a coin somebody had left on the sill." },
    { s: 'junpei', f: 'happy', t: "Okay. Okay. For the record. I wrote it in the notebook. Look." },
    { n: "He held the notebook up. DAY SEVEN, it said, in the house capitals, and under it, FULL MOON, and under that, in brackets, smaller, (NOTHING). He'd underlined NOTHING twice." },
    { s: 'yukari', f: 'neutral', t: "You underlined it." },
    { s: 'junpei', f: 'flustered', t: "It's a big nothing! It deserves a line!" },
    { n: "It was a nice dinner. That was the strange part, how nice it was, how much it looked like any other dinner if you didn't know where to look. And she knew exactly where to look. She'd sat at the head of those operations for a year." },
    { n: "Akihiko had his gloves in his lap. Not on. Just there, under the table, his thumb going back and forth over the stitching on the left one the way you'd worry a coin in your pocket. Fuuka had her headphones round her neck, and every few minutes her hand went up to them and stopped halfway and came back down to her chopsticks. Aigis wasn't eating, because Aigis didn't, but she'd taken the chair nearest the window, and she'd turned it a quarter turn toward the glass when she thought nobody saw." },
    { n: "Ken had finished first and was doing his workbook on the floor, very fast, very neat, glancing up at the wall clock between every question. Koromaru lay across the doorway to the hall with his chin on his paws and his eyes open. And Mitsuru sat very straight with her tea, and talked about the housing office, and the weather in Kyoto, and a restaurant in Ginza that had lost a star, and didn't once look at the window, which was how Solar knew she'd been looking at it all evening." },
    { ifEpiRoute: 'shinjiro', then: [
      { s: 'akihiko', f: 'neutral', t: "I called the ward. He's fine. The nurse says he's watching a baseball game and complaining about it." },
      { ifYear: awake, then: [
        { n: "Solar's phone buzzed under the table. *aki called the ward. tell him to stop calling the ward.* She showed Akihiko. He read it twice and put his gloves back in his pocket." }
      ], else: [
        { n: "He said it to the table, lightly, as if he called the ward every full moon for no reason, which, she realized, he probably had, all year, from wherever the operation had left him, and never told anyone." }
      ] }
    ] },
    { s: 'fuuka', f: 'sad', t: "...Is it strange that I keep wanting to check? There's nothing to check. I know there's nothing. My hand just keeps going." },
    { s: 'mitsuru', f: 'neutral', t: "It isn't strange. I've looked at the window eleven times since we sat down." },
    { s: 'yukari', f: 'surprised', t: "You counted?" },
    { s: 'mitsuru', f: 'sad', t: "I'm afraid I always count." },
    { n: "Nobody laughed, exactly. Something went round the tables that was nearly a laugh, the sound of eight people being caught at the same thing at the same time, and Junpei put the notebook down and stopped pretending to write in it, and Akihiko put the gloves on the table where everybody could see them, and nobody said anything about those either." },
    { choose: [
      { t: "We should stay up. All of us. Just to watch it be nothing.", then: [
        { s: 'junpei', f: 'happy', t: "YES. Nothing party. I'll get the cards." },
        { s: 'ken', f: 'serious', t: "I'm allowed? It's a school night. ...It's not a school night. I'm allowed." },
        { n: "So they stayed. Junpei found a deck of cards with the seven of clubs missing, and Mitsuru learned a game called Old Maid and played it like a hostile takeover, and Koromaru fell asleep against Solar's back and snored, and somewhere around ten Fuuka took her headphones off her neck and put them in her bag and zipped it, and didn't say why, and didn't have to." }
      ] },
      { t: "(Don't say anything. Turn the TV up.)", then: [
        { n: "She reached for the remote and turned the variety show up, all the way, a man in a wig falling into a pool of slime to a laugh track, and Junpei snorted so hard he choked on a cutlet, and Yukari hit him on the back, and the room came loose. Nobody went to bed. They watched three more terrible shows in a row, all of them, on the floor and the sofa and the arms of the sofa, and Koromaru climbed into Ken's lap, which he was much too big for, and Ken let him." }
      ] }
    ] },
    { n: "At eleven they started going up, one at a time, the way they used to go up before a dark night, with a word at the stairs and a look back. Ken asleep on his feet, steered by Aigis. Fuuka and Yukari together. Junpei, yawning, with the notebook. Mitsuru, last but one, who stopped at the bottom step and put her hand on the banister and said, without turning round, that there was tea in the kitchen if anybody wanted any at an odd hour, and went up." },
    { ifEpiRoute: 'akihiko', then: [
      { n: "Akihiko stayed until it was just them, and then he stayed a little longer, standing by the window with his back to the moon and his hands in his pockets, and when she finally said goodnight he said it back and didn't move, and she knew he'd be there a while yet. Somebody had to see it be nothing. He'd decided it was him." }
    ], else: [
      { n: "Akihiko stayed until it was just them. He picked his gloves up off the table, looked at them, and put them in his pocket, and said goodnight from the stairs with the moon behind him in the window, and went up two at a time the way he always had, and she sat in the lounge on her own for a while after with the TV off and the boxes everywhere and listened to the house go quiet one door at a time." }
    ] },
    { n: "Then she went up too. Her room, and the window, and the moon in it, very big, very white, doing nothing at all." }
  ] },

  // ───────────────────────────── 4/4, morning: sunday ─────────────────────────────
  { id: 'epi-st-rota', date: '4/4', slot: 'early', title: 'sunday', place: 'Iwatodai Dorm · Dining Room', time: 'Morning', scene: [
    { music: 'epi-st-residue' },
    { ifFlag: 'epi-st-told', then: [
      { place: 'Iwatodai Dorm · Command Room', time: 'Morning' },
      { n: "Somebody had cleaned the whiteboard in the command room. For a year it had held the floors of a tower and the dates of eight full moons in Mitsuru's marker, and the ghost of every one of them was still in it if you tilted your head, and now across the top in fresh red capitals it said MIDNIGHT, and under that, seven days in a column, and under each day a little row of names." },
      { n: "Mitsuru stood beside it with the marker capped in her hand like a pointer. Everyone else was in their pajamas. She was dressed. Of course she was dressed." },
      { s: 'mitsuru', f: 'serious', t: "Two people and Koromaru in her room, every night, from a quarter to twelve until she says it's over. In shifts. I've accounted for school." },
      { s: 'junpei', f: 'flustered', t: "Senpai, there's a name on every single night in the hall column. Every night. In a different marker." },
      { n: "There was. SANADA, seven times, in blue, in block letters pressed so hard the marker had squeaked. Akihiko was leaning on the wall by the door with his arms folded and didn't look at the board or at anybody." },
      { s: 'akihiko', f: 'neutral', t: "I'm not going in her room. I'm sitting in the hall. That's not a shift. That's a hall." },
      { s: 'mitsuru', f: 'neutral', t: "...I'll allow it. I was going to write it in myself." },
      { s: 'ken', f: 'serious', t: "I'm not on it. I can stay up. I stayed up on the thirtieth." },
      { s: 'mitsuru', f: 'sad', t: "You start school on Wednesday, Amada. You're on the weekend." },
      { n: "Tonight, the board said, under SUNDAY: TAKEBA. YAMAGISHI. KOROMARU. Fuuka because she would know before anyone, Mitsuru said, and Yukari because she'd asked first, at six that morning, outside Mitsuru's door, and Mitsuru had found it very difficult to say no to her in a hallway at six in the morning." },
      { s: 'yukari', f: 'neutral', t: "I'm bringing a blanket. And snacks. Don't look at me like that. If I'm watching you vanish I'm doing it with snacks." },
      { s: 'fuuka', f: 'happy', t: "I'll bring tea. The calming one." },
      { choose: [
        { t: "You don't all have to do this.", then: [
          { s: 'mitsuru', f: 'neutral', t: "No. We want to. It's very different, and I'd like you to notice the difference." },
          { n: "She uncapped the marker and wrote something small in the corner of the board, under everything, and capped it again. Solar didn't read it until they'd all gone down to breakfast. It said *She's ours*, in the neat small hand Mitsuru used for the things she'd only say on paper." }
        ] },
        { t: "(Take the marker. Write your name on the hall column too.)", then: [
          { n: "She wrote SOLAR at the bottom of the hall column, under seven SANADAs, which made no sense at all, since she'd be the one in the room. Akihiko looked at it and then at her and something in his face gave way, just slightly, at the corner of the mouth." },
          { s: 'akihiko', f: 'happy', t: "...That's not how a hall works." },
          { s: 'solar', f: 'happy', t: "I'm keeping you company out there. In spirit." },
          { n: "Junpei said that was the creepiest thing anyone had ever said in that room, and that room had had a lot of things said in it, and Mitsuru didn't rub it out." }
        ] }
      ] }
    ], else: [
      { n: "Sunday, and somebody was making pancakes, which in that dorm was a sign that something was wrong. Junpei, at the stove, in Fuuka's apron, flipping them too early with a spatula that had melted at one corner, and the whole kitchen full of the smell of sugar going brown and a little bit of smoke." },
      { s: 'junpei', f: 'happy', t: "Morning! Big news. Tonight, lounge, Featherman Rangers box set, all of it, starting at ten. Probably goes till one. Two. Coincidence." },
      { s: 'yukari', f: 'neutral', t: "Since when do you own the Featherman box set?" },
      { s: 'junpei', f: 'flustered', t: "Since yesterday at four. I mean. Since forever. I love Featherman. Everybody loves Featherman." },
      { n: "Nobody had said anything about the clocks since yesterday. They'd all been very busy not saying it. Akihiko had announced at dinner that he was thinking of running at midnight from now on instead of at five, for the cooler air, which nobody had believed, and Fuuka had started carrying her headphones again, and Aigis had moved her charging station from the second floor to the landing outside Solar's room and claimed it was a better outlet." },
      { s: 'mitsuru', f: 'neutral', t: "I'll be up late with the housing paperwork. In the lounge. Where the outlets are." },
      { n: "They were all looking at her, very casually. It was the worst-coordinated surprise party she'd ever seen, and every single one of them had planned it alone." },
      { s: 'solar', f: 'happy', t: "I'm going to sleep early tonight. I'm wiped. Don't wait up for me." },
      { glitch: { strain: 1 } },
      { n: "Junpei put a pancake on her plate, burnt side down so she wouldn't see it, the way he'd been doing all year, and said *sure, Sol*, and went back to the stove, and nobody waited up for her in the way she'd asked, and all of them, she found out later, did." }
    ] },
    { n: "Outside the window the cherry trees along the street were at their fullest, that one weekend when they didn't look real, and the first petals were coming down onto the cars, and it was such a beautiful morning that it was hard to look at it for very long." }
  ] },

  // ───────────────────────────── 4/5, morning: blue ─────────────────────────────
  { id: 'epi-st-blue', date: '4/5', slot: 'early', title: 'blue', place: 'Iwatodai Dorm · Kitchen', time: 'Morning', scene: [
    { music: 'epi-st-home' },
    { ifFlag: 'epi-st-told', then: [
      { n: "Yukari hadn't slept. You could see it in the way she held the dish soap, like a weapon. Six in the morning, the kitchen gray, the tap running hot, and Solar's hand held palm-down under it in both of Yukari's while she scrubbed at the blue on the side of it with the rough side of a sponge, much harder than she needed to, saying nothing at all." },
      { n: "Fuuka sat at the table with a cup of tea she hadn't touched, still in yesterday's cardigan, the blanket from Solar's floor round her shoulders like a cape. Koromaru lay under her chair. He hadn't left the kitchen. He hadn't left Solar's feet since she'd come back, and she had come back on her knees on her own rug with her hands flat, gasping, and found three faces a foot from hers." },
      { s: 'fuuka', f: 'sad', t: "Eleven minutes. You were gone eleven minutes. I counted. I didn't mean to, I just. I had to count something." },
      { s: 'yukari', f: 'serious', t: "It's not coming off." },
      { s: 'solar', f: 'neutral', t: "It's paint. It's fine." },
      { s: 'yukari', f: 'serious', t: "It's not fine. You went see-through, Solar. You went see-through on your own floor and I had your sleeve, I had it in my hand, and then I had nothing, and Koromaru was howling, and Fuuka was saying it's all right, it's all right, she's still there, in this voice. And then you came back with paint on you. From where." },
      { n: "She'd turned the tap off. She was still holding Solar's hand, wet, over the sink, blue still in the creases of the knuckles." },
      { choose: [
        { t: "A school. A gym. Somebody's banner they never finished.", then: [
          { s: 'yukari', f: 'sad', t: "...And you helped?" },
          { s: 'solar', f: 'sad', t: "I pointed. Somebody said he'd finish it." },
          { n: "Yukari looked at the blue for a long moment. Then she let go of the hand, and dried it with a tea towel, very carefully, between each finger, the way you'd dry a child's, and handed it back." },
          { s: 'yukari', f: 'neutral', t: "Then leave it. If someone's finishing it. Leave it on." }
        ] },
        { t: "(Take the sponge from her. Scrub it yourself.)", then: [
          { n: "She took the sponge. Yukari let her. She scrubbed until her skin was pink and the blue was gone from everywhere but the crease under her littlest finger, where it had gone in deep, and she stopped there, and Yukari didn't say anything about her stopping." },
          { s: 'yukari', f: 'sad', t: "...You don't have to be fine at six in the morning. Nobody's even awake." }
        ] }
      ] },
      { s: 'fuuka', f: 'neutral', t: "I'll tell Mitsuru-senpai. You don't have to. She's going to make a face." },
      { n: "Mitsuru made the face. It happened at seven, at the bottom of the stairs, and lasted about a second, and then she went and changed the name under MONDAY on the whiteboard from SANADA to SANADA AND EVERYONE, and nobody argued with that either." }
    ], else: [
      { n: "Six in the morning and she was at the kitchen sink with the tap running hot, scrubbing at the side of her hand with the rough side of a sponge. The blue had dried overnight in the creases of her knuckles and under one nail. Dish soap didn't touch it. Neither did the sponge. She was going at it with the scourer from under the sink when the kitchen light came on." },
      { n: "Ken. In his school uniform. On the fifth of April, two days before school, with his hair combed wet and his bag on his back." },
      { s: 'ken', f: 'neutral', t: "...I'm practicing waking up. For Wednesday. I'm getting used to the time." },
      { n: "He looked at her hand under the tap. At the scourer. At the blue. He didn't say anything about it, which in a ten-year-old was a kind of genius. He went to the drawer by the stove and came back with the nail brush, the hard one Shinjiro had used on pans, and held it out handle first." },
      { s: 'ken', f: 'serious', t: "This works better. For the creases." },
      { s: 'aigis', f: 'neutral', t: "It is acrylic. Water-based, school grade. It will come off with patience. It was not there at eleven forty-five last night. I checked your hands at dinner." },
      { n: "Aigis was in the doorway. She'd been in the doorway, Solar understood, for a while. She didn't come in. She didn't ask. She stood there with her hands folded and simply put the fact on the counter, where Solar could pick it up or not." },
      { choose: [
        { t: "Thanks, Ken.", then: [
          { s: 'ken', f: 'neutral', t: "You're welcome." },
          { s: 'ken', f: 'sad', t: "...I'm not allowed to tell anyone what I see. Right? That's how it works?" },
          { s: 'solar', f: 'sad', t: "You're allowed to tell anyone you want." },
          { s: 'ken', f: 'serious', t: "Then I'm choosing not to. For now. That's different." }
        ] },
        { t: "Aigis. Don't log this.", then: [
          { s: 'aigis', f: 'sad', t: "I have already logged it. I am sorry. I can log that you asked me not to. I will put it directly underneath." },
          { n: "She said it so sincerely that Solar laughed, a small cracked laugh over the sink, and Ken looked between them both and decided to laugh too, a beat late, to be on the safe side." }
        ] }
      ] },
      { n: "The brush worked. Not all the way. A thread of blue stayed in the crease under her littlest finger and wouldn't come out, and by the time the others came down for breakfast she'd stopped trying, and kept that hand in her lap." }
    ] }
  ] },

  // ───────────────────────────── 4/6, evening: the last evening ─────────────────────────────
  { id: 'epi-st-last-evening', date: '4/6', slot: 'evening', title: 'the last evening', place: 'Iwatodai Dorm · Dining Room', time: 'Evening', scene: [
    { music: 'epi-st-last' },
    { n: "Junpei made curry. This was announced at four and argued about until five, and in the end it was decided that Junpei would make curry and Yukari would stand next to him the whole time and say *no* at the right moments, and the dorm smelled of it by six, onions and something sweet and something burnt at the bottom of the pot that everyone agreed not to scrape." },
    { n: "Fuuka set the table. Solar watched her do it from the doorway. She went round once with the plates and once with the spoons, and when she got to the end she stopped, and counted with her lips, and looked at the table, and it was right. Eight places and a bowl on the floor. Exactly the people who were there. She looked up and saw Solar watching and went pink and didn't say anything, and neither did Solar." },
    { s: 'junpei', f: 'happy', t: "Ladies and gentlemen. The Iori Curry. Spring Break Edition. Last of its kind." },
    { s: 'yukari', f: 'neutral', t: "It's fine. I tasted it. It's genuinely fine. I'm as surprised as you are." },
    { s: 'mitsuru', f: 'happy', t: "It's very good, Iori. ...Is there more?" },
    { n: "Junpei looked at her like she'd handed him a medal. Mitsuru took seconds. Akihiko took thirds and then went back for the burnt bit at the bottom of the pot on purpose, because protein, he said, which wasn't what that word meant. Ken ate fast and properly and kept looking at the clock, because he'd been told bed at nine for school, and it was already eight. Aigis sat with an empty plate, the way she did, so nobody would be the only one not eating." },
    { n: "Nobody said what tonight was. They'd all decided that separately, again." },
    { ifEpiRoute: 'sees', then: [
      { n: "So she said it, in the end, with the dishes. Junpei washing, Solar drying, the others still at the table, and she put a plate in the rack and kept her hand on it." },
      { s: 'solar', f: 'serious', t: "Tonight. At midnight. I want to be on the roof. And I want everyone downstairs." },
      { n: "The dining room went quiet behind her the way a room does when everyone in it has stopped moving at once." },
      { s: 'yukari', f: 'surprised', t: "What? No. Solar, no—" },
      { s: 'solar', f: 'sad', t: "I can't have all of you watching. If it happens. I can't do it with everyone's faces." },
      { s: 'mitsuru', f: 'serious', t: "...Then not everyone. Iori and I. On the roof. Koromaru, because I can't stop him. Everyone else downstairs, awake, on the stairs if they like. That's the most I can give you. I'm sorry. It's not a negotiation." },
      { s: 'junpei', f: 'serious', t: "Yeah. What she said. I'm coming. You can't make me not." },
      { n: "He said it to the sink, with his hands in the water. She looked at the back of his neck, at the cap, at how hard he was scrubbing a pot that was already clean, and said okay, and he said okay, and kept scrubbing." }
    ] },
    { ifEpiRoute: 'akihiko', then: [
      { n: "Akihiko dried while she washed. Neither of them talked. The window over the sink went from orange to blue, and when the last plate was in the rack he folded the towel in half and in half again and put it on the counter very squarely." },
      { s: 'akihiko', f: 'neutral', t: "I'll go up first. Tonight. Before twelve." },
      { s: 'solar', f: 'neutral', t: "Why first?" },
      { s: 'akihiko', f: 'serious-3', t: "So you don't come up to nobody." },
      { n: "That was the whole reason. He'd clearly thought about it for a long time and that was what he'd arrived at, and he didn't dress it up, and she put a wet hand on his arm and left it there until it had made a dark print on his sleeve." }
    ] },
    { ifEpiRoute: 'shinjiro', then: [
      { s: 'solar', f: 'neutral', t: "I'm taking the eleven o'clock bus. To Tatsumi." },
      { n: "Nobody argued. They'd known. Akihiko put his chopsticks down and said he'd walk her to the stop, and she said he didn't have to, and he said it was on the way to nothing, which was his way of saying he'd stand there until the bus turned the corner." },
      { s: 'akihiko', f: 'sad', t: "Tell him... I don't know. Tell him I'm on the stairs. He'll know what it means." },
      { ifYear: awake, then: [
        { n: "Under the table her phone buzzed. *bus at 11?* Then, a minute later, because typing took him that long, *nurse says fine. dont tell her i asked*." }
      ] }
    ] },
    { n: "Ken went up at nine, as told, and stopped on the third stair, and came back down, and hugged her round the middle very hard and fast without saying anything, and went up again before anyone could look at him. Koromaru followed him as far as the landing, and sat, and looked back down at her, and didn't go any further." },
    { n: "The dorm settled. Dishes in the rack. The TV off. Somebody's music through a ceiling, turned low, and the clock in the hall, the new one Mitsuru had bought, going round like nothing in the world was due." }
  ] }

  );
})();
