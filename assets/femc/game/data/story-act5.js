/* Act V story events (solstice, 11/22 → 12/21), plus the door scenes for all three worlds.
   Door scenes: FEMC_GAME_FLAGS.doorScenes['R3'|'R6'|'R9'|'S3'…|'H9'] = { title, place, time, scene }, the slot data/flags.js
   reserves. core.js records a door as due (save.route.doorsDue) when a world's 3rd/6th/9th fragment lands; nothing plays
   them yet (see the report). Each sets flag door-<W><n> when it plays, and home-<W><n> when Solar goes toward it.
   The solstice (12/21, late) reads those flags plus link ranks to decide which answers she's offered. */
(() => {
  const F = window.FEMC_GAME_FLAGS;
  if (!F) return;
  const door = (key, title, place, time, lines, toward, away, quiet) => {
    const w = key[0];
    F.doorScenes[key] = { title, place, time, scene: [
      { flag: { ['door-' + key]: true } },
      ...lines,
      { choose: [
        { t: '(Go toward it.)', flag: { ['home-' + key]: true }, tally: { ['home.' + w]: 1, ['lean.' + w]: 1 }, then: toward },
        { t: '(Look away.)', then: away },
        { t: '(Stay quiet.)', then: quiet }
      ] }
    ] };
  };
  F.doorScenes = F.doorScenes || {};

  door('R3', 'the single on the second floor', 'Iwatodai Dorm · Hallway', 'Night', [
    { music: 'tender' },
    { n: "The bell rang, small and gold, and the dorm hallway went pink." },
    { n: "Pink everything. Pink carpet, pink walls, a pink banner with Greek letters strung over a door, the smell of three different perfumes and hot hair tools and a candle that called itself sugar cookie. Music through a wall. A girl's voice in the bathroom down the hall, singing badly, on purpose, to annoy someone. And a door at the end, half open, with light coming out of it and two voices inside talking over each other the way people talk when they've been doing it every morning for months." },
    { n: "*solar is NEVER polite before noon.* *she's going to say she's fine.* *she's literally going to say it, watch.* *hi Sol, are you fine?*" },
    { n: "It was morning there. A Sunday. Somebody was steaming a dress. Somebody was eating cereal out of the box. The door was open just wide enough for one more person, and there was a dent in the beanbag by the window that was exactly her shape." }
  ], [
    { n: "She went toward it. Three steps down a pink hallway that wasn't there, and the door swung wider for her the way doors do when someone inside sees you coming, and two faces turned toward her from the floor with the cereal box between them, and the taller one said, *finally*, with her mouth full." },
    { n: "Then it was the dorm hallway again, gray carpet, a fire extinguisher, Junpei's snoring through a door. She was standing very close to the wall with her hand flat on it. She could still smell sugar cookie. She knew, now, which door was hers. She'd been given a single, she remembered, because of her name." }
  ], [
    { n: "She looked away, at the window, at the ordinary night. When she looked back the hallway was gray again and the pink was gone, and somewhere very far off a girl said *she's going to say she's fine*, and nobody in the hallway answered, and Solar realized she had said it. Out loud. To nobody. *I'm fine.*" }
  ], [
    { n: "She didn't move. She stood in the hallway and let it be pink around her for as long as it wanted to, the music and the perfume and the two voices, without stepping toward it and without turning away, and after a while it went the way a dream goes when you try to hold it, from the edges in, until only the smell of sugar cookie was left, and then not even that." }
  ]);

  door('R6', 'keep it on the rooftop', 'Iwatodai Dorm · Rooftop', 'Night', [
    { music: 'night' },
    { n: "The bell rang, and the roof of the dorm was a different roof." },
    { n: "Higher. Older. Tar paper and a low concrete ledge and a ladder bolted to the back wall of a brick building she'd tried to walk to once at dusk and found a fence. A campus spread out below, bare trees, bell tower, a few lit windows. A breeze that smelled of leaves and somebody's lighter. And on the ledge, legs over the drop like he'd done it a hundred times, a boy, staring up at the sky, and between them on the concrete a can of something pink and black, cold, already open, held out to her sideways without his looking at her." },
    { n: "*I started coming here freshman year.* A flat voice, monotone, unreachable. *Nobody knows about it.* And later, after she'd told him something she'd never told anybody, about singing, about a choir and a father, after he'd told her something sideways about a name that wasn't his: *keep it on the rooftop.*" },
    { n: "There was room on the ledge. A few feet away from him. Exactly where she'd sat." }
  ], [
    { n: "She went toward it. She sat down on the ledge in her mind with her legs over a drop that wasn't there, and took the can, and it was cold against her knuckles, and the boy didn't look at her, and the corner of his mouth moved, and he said, flat, *starstruck?*" },
    { n: "Then it was the dorm roof, and the water tank, and the bay. She was sitting on the edge of it with her legs over, which she had never done, which Akihiko would have yelled about. Her hand was closed around nothing, cold. She sat there until the cold went out of it. She didn't tell anybody. It was the rooftop's." }
  ], [
    { n: "She looked away, at the bay, at the lights of the monorail. When she looked back the ledge was the dorm's railing and there was nobody on it, and the can was gone, and she felt, absurdly, like she'd stood someone up." }
  ], [
    { n: "She stayed where she was and didn't move, and the boy on the ledge didn't move either, and they sat like that, a few feet apart, not looking at each other, the way you sit with someone when the silence is the conversation, until the roof was the dorm's again and she was alone on it, and it didn't feel like being alone." }
  ]);

  door('R9', 'next time', 'Iwatodai · Riverside', 'Night · 2 AM', [
    { music: 'tender' },
    { n: "The bell rang so loud it hurt, and it was two in the morning in a valley." },
    { n: "A wide shallow bowl of grass in the middle of a campus, trees ringed loose around it, a full moon so bright the grass had shadows. One big tree that leaned too far to the right. Under it, on the side that wasn't wet, an ugly thin plaid blanket, a pair of heavy black headphones, and a plastic convenience-store bag. A turkey sandwich. Hot chips. Donuts. A pink and black can. A banana that was nearly rotten. *Food. It was by the register.*" },
    { n: "His jacket was on her. She was wearing it. It was too big and it smelled like him, sweet and warm and faintly of vanilla, and he'd been here before she came, he'd been coming whether she came or not. *Eat. You didn't eat.* She hadn't told him. He just knew things about her, the way you know where the stairs are in the dark." },
    { n: "And at the edge of the trees, at the end, where he'd walk her and no further: *keep the jacket. It fits you better.* And then, quieter, a promise: *next time.*" }
  ], [
    { n: "She went toward it. Across the grass, under the moon, to the tree that leaned, and sat down on the ugly blanket in a jacket that fit her better, and he opened the can and leaned it against her leg without a word, and she said his name. The real one. It came out of her mid-laugh without her deciding, the way it had once, and he went very still, and she heard it in her own voice and knew it." },
    { n: "Then it was the riverside path in Iwatodai at two in the morning, and the flickering lamp, and her own coat, which was the wrong coat. She stood under the lamp with her arms wrapped around herself, holding the shape of a jacket that wasn't there, and said the name again, quietly, to the river, to see if it was still hers. It was." }
  ], [
    { n: "She looked away. The valley went. The moon was just the moon over Iwatodai, a little short of full, and there was no tree and no blanket and no can, and she stood on the river path for a long time telling herself she hadn't heard the word *next* in a voice she knew better than her own." }
  ], [
    { n: "She stayed very still and let it be, the valley and the blanket and the moon, the boy beside her not saying anything, and didn't reach for any of it, and didn't let any of it go, until it went on its own. She was crying, she noticed afterward. Not a lot. The kind that runs out of you without your face doing anything about it." }
  ]);

  door('S3', 'nineteen stitches', 'Iwatodai Dorm · Laundry Room', 'Night · 3 AM', [
    { music: 'mystery' },
    { n: "The jade ring clicked, and it was seven minutes past three, and somebody was knocking at the back gate. Two. A pause. One." },
    { n: "A laundry room with no light but a flashlight. Soap and warm cotton and the iron smell of blood. A big gentle man in the doorway, built like a refrigerator, holding up a younger one by the arm, saying sorry, agasshi, sorry, it's a bad one. The younger one was laughing. He was bleeding along his left side under the ribs from a long clean cut, and he was laughing, and making jokes, and his face was the color of paper." },
    { n: "Her hands were already moving. A Chanel makeup bag that smelled of iodine. A curved needle. Thread. She'd been doing this for years. Nobody in her mother's world knew. She knelt on the cold floor of a laundry room in a house by the sea and put her hands on a man she couldn't stand, and he went quiet, finally, when it actually hurt, and she counted the stitches out loud to have something to do with her voice. Nineteen." },
    { n: "*Six down, four letters,* the big man said, from the doorway, from a crossword folded in his back pocket. *A debt that cannot be repaid.*" }
  ], [
    { n: "She went toward it. She knelt down on a cold floor that wasn't there, and her hands knew the needle, and her mouth knew the count, and when the bleeding man said the answer to the crossword, *love*, flat and sardonic, she said, before she could stop herself, *that's not funny*, and the big man in the doorway laughed and said, *kidding. It's rent.*" },
    { n: "Then she was kneeling on the floor of the dorm laundry room in her pajamas, at three in the morning, with her hands held out in front of her in a shape like holding something very still. Her thumbs were steady. She looked at them for a long time. Somewhere in a house by the sea, she was very good at something she had never told anyone about." }
  ], [
    { n: "She looked away. When she looked back the laundry room was the dorm's, the light on, a basket of Junpei's socks on the dryer, nobody bleeding. She went back to bed and lay awake until the tide turned somewhere, and she felt it turn, and slept." }
  ], [
    { n: "She stayed where she was and didn't go to them and didn't leave, and the scene went on without her, the way a memory does, the needle going in and out in somebody else's hands that were also hers, nineteen, and the flashlight, and the laughter that stopped, until it was only a laundry room again, and her hands ached as if she'd been holding them very still for a very long time." }
  ]);

  door('S6', 'when the cherry trees bloom', 'Iwatodai Dorm · Dining Room', 'Night', [
    { music: 'mystery' },
    { n: "The jade ring clicked, and the dorm's dining room went long and dark and built out over the water." },
    { n: "A private room on pilings over the sea. A wall of windows onto black water. A table made from a single tree, set for twenty, and a great shining abalone in the middle of it nobody was eating. A navy silk dress with long sleeves, pearls that had been her grandmother's, her hair in a low chignon her mother had pinned herself. Her best smile. The best smile she had ever done in her life, held on her face like a plate she was carrying." },
    { n: "A big man with dyed black hair and a gold watch raising a white porcelain bottle. *My son, and Taejoon's daughter. On the thirteenth of April. When the cherry trees bloom.* Everyone clapping. Except two people. Her father, looking down at the table. And a man standing by the wall in a black suit who didn't clap and didn't look at her at all." },
    { n: "And across the table a slight neat young man with dimples that never reached his eyes, lifting his glass to her: *in a hundred and forty-one days, we'll see.* See what. *Whether either of us is still alive.*" },
    { n: "Her seat at the table was empty. Everyone was looking at it." }
  ], [
    { n: "She went toward it. She sat down in a seat that wasn't there in a dress she wasn't wearing, and smiled the smile, and the room breathed out, all twenty of them, as though they had been waiting for her and only her, and her father lifted his head and looked at her, and his face broke, a little, the way it had, and he looked down again." },
    { n: "Then it was the dorm dining room and Junpei's dirty bowl and the clock on the wall saying eleven. She was sitting very straight. Her smile was on. She took it off slowly, like a pair of earrings, and her face ached where it had been." }
  ], [
    { n: "She looked away, at the window, and the window was a window, and behind it the dorm's yard and the bicycles. She sat in the empty dining room with her hands in her lap and found that her right hand was turning something on its third finger, round and round, a ring that wasn't there." }
  ], [
    { n: "She stayed very still and let them look at her empty seat. All twenty of them. Nobody moved. Nobody sat in it. After a while, one by one, they stopped looking, and the room went, and she sat in the dorm dining room with the feeling of having been very, very late for something that had gone ahead without her anyway." }
  ]);

  door('S9', 'the yellow pot', 'Iwatodai Dorm · Kitchen', 'Night', [
    { music: 'tender' },
    { n: "The jade ring rang like a bell, and the dorm kitchen was a kitchen in a house by the sea, at night, and her father was making ramyun." },
    { n: "In the old yellow pot. The dented one. He made it the way he always made it, too much water, an egg cracked in at the end, and he gave her the egg, he always gave her the egg. Reading glasses on a cord around his neck. Humming an old trot song under his breath, flat, the way only fathers hum. Low tide at one forty-five. She could feel the sea going out under the house." },
    { n: "He put his hand over hers on the table. Over the scar on her palm he had never once asked about." },
    { n: "*Sol-ah. You're my daughter first. Before anything. Before any of it.*" },
    { n: "*I would set this whole city on fire before I let anyone hurt you.*" },
    { n: "Across the kitchen, very small, there was a chair pulled out from the table. Hers. The bowl in front of it was still steaming." }
  ], [
    { n: "She went toward it. She sat down in her chair in a kitchen that wasn't there, and her father pushed the bowl toward her an inch, the way he did, and she ate the egg, and it was the best thing she had eaten in her life, and he watched her eat it with his reading glasses pushed up on his head and didn't say anything at all, and didn't need to." },
    { n: "Then it was the dorm kitchen, and the rice cooker's little orange light, and the hum of the fridge. She was sitting at the table with her hands around nothing. She sat there a long time. She said *Appa* once, out loud, into the dark kitchen, to see what it sounded like. It sounded like hers." }
  ], [
    { n: "She looked away. It was the hardest thing she had done all year. When she looked back the kitchen was the dorm's and the pot was a saucepan and nobody was humming, and she put her face in her hands at the table, and didn't cry, because she didn't know who she would be crying for." }
  ], [
    { n: "She didn't move. She let her father make ramyun in the yellow pot in a kitchen she couldn't reach, and hum, and put his hand over hers, and she didn't go to him and she didn't leave, and he looked up at her once, across all that distance, as though he could see her standing there in a dormitory in another life. Then he went back to the pot. He'd wait. She knew he would. He'd always waited." }
  ]);

  door('H3', 'a large tub', 'Iwatodai Dorm · Front', 'Evening', [
    { music: 'joy' },
    { n: "The star pin ticked, and it was six in the evening, and somebody was at her front door with ice cream." },
    { n: "A house in a quiet street. Her house. The sun going down behind cloud. Her parents at work, again, a meeting or something. A big fluffy dog asleep upstairs on her bed. And on the step, a boy in gray sweatpants with his hair wrecked by the wind, beaming down at her from his ridiculous height, holding up a tub of ice cream like a trophy, already walking in before she'd opened the door all the way." },
    { n: "*I'm going to get the spoons. Are your parents here?* He'd rehearsed a whole speech for them in the car. About her. About not making her do the thing she didn't want to do. He pretended it was for his own sake. *Solar, where is my beloved?*" },
    { n: "The door was still open. The tub was cold against her stomach. Her whole house was waiting for her to close the door and come in." }
  ], [
    { n: "She went toward it. She shut the door behind her with her back, the way she always did, and stood in her own front hall holding a freezing tub against her chest, and upstairs a dog barked twice, delighted, at a voice saying *father Jihoon is HERE*, and she rolled her eyes so hard she felt it in the back of her head, and it was the happiest she had been in her life." },
    { n: "Then she was standing at the dorm's front door with it open onto the cold, holding nothing, smiling at the empty step. Hyein, coming down the stairs, asked who she was waiting for. She said, nobody. She said, an idiot. She said it like it was the best word she knew." }
  ], [
    { n: "She looked away. She closed the dorm door. It shut on the cold and the street and nothing, and she stood with her hand on it for a long time feeling, distinctly, that she'd just shut it in somebody's face." }
  ], [
    { n: "She stayed where she was, half in and half out of a door that was two doors at once, and didn't step in and didn't step back, and the boy on the step went on talking, about spoons, about her parents, about how she owed him, until he faded mid-word, still talking, which was, she somehow knew, the only way he had ever left a room." }
  ]);

  door('H6', 'please come to the stage', 'Gekkoukan High · Classroom', 'Afternoon', [
    { music: 'school' },
    { n: "The star pin ticked, and the classroom was a gym, and she was glued to a plastic chair." },
    { n: "Hundreds of students. Plastic chairs scattered everywhere. The noise of chatter and screaming. A principal at a microphone saying it was a very exciting time on campus. A speech in her hands on a sheet of paper she'd gripped so tight it had gone soft. She was going to be sick. There was no denying it." },
    { n: "*Solar Kim and Yang Jungwon, please come to the stage.*" },
    { n: "She couldn't move. Every head turning. Someone was actually running against the current president, the whispers said, and nobody could believe it. Then an elbow in her side, hard, from the girl beside her. *Stop looking like that, you're making ME feel sick.* And down the row, her friends: a heart made with two hands, a kiss blown, two thumbs up and a mouthed *you got this*." }
  ], [
    { n: "She went toward it. She stood up off a chair that wasn't there and walked toward a stage, her legs shaking, her friends screaming her name, and at the top of the side steps she looked across at the other candidate for the first time and only then realized exactly who he was, and her mouth fell open, and she heard herself say *what?!* in front of the entire school." },
    { n: "Then she was standing in the middle of the classroom between the desks, at the end of lunch, with her hand out as if to shake someone's. Junpei was staring at her. She put her hand down. She sat back at her desk, very straight, and the practiced smile came on by itself, presidential, and stayed there the whole afternoon." }
  ], [
    { n: "She looked away, at the classroom window, at the bay. The gym's noise went. When she looked back the class was eating lunch and nobody was looking at her, and she was so relieved her hands shook, and then she was ashamed of being relieved, and didn't know why." }
  ], [
    { n: "She didn't stand up and she didn't look away. She sat in her chair in both rooms at once while a gym full of people waited for her, and the girl beside her elbowed her again, and the principal said her name a second time, and she let it be said, and let it echo, until the gym faded with her name still in the air, unanswered, like a bell nobody went to." }
  ]);

  door('H9', 'my new student council president', 'Gekkoukan High · Front Gate', 'Afternoon', [
    { music: 'joy' },
    { n: "The star pin rang out like a bell, and she was stepping off a stage." },
    { n: "The last assembly before the vote. Her final speech, given, gone, every word of it, and her knees weak with it. A boy at the other podium, who'd gone first and been so good that she'd felt it in her stomach, coming up behind her afterward and holding out his hand. *May the best candidate win.* And her slapping it down, laughing, *is this a joke?*" },
    { n: "And at the exit doors, all of them waiting. A girl running at her, screaming, throwing both arms around her neck: *there she is, my new student council president!* A boy who didn't care who was watching wrapping an arm around her shoulders and squeezing her into his side, *you definitely got MY vote*, while everyone else made gagging noises. All of them talking at once. All of them hers." },
    { n: "The doors were open. Outside, the afternoon. A whole school year. A whole life, loud and hers, that she'd been told to run for and had started, somewhere along the way, to want." }
  ], [
    { n: "She went toward it. She walked into the arms at the exit doors and let herself be hugged and shoved and squeezed and yelled at, and a girl with perfect eyeliner said *did you tell him he was fucked*, and Solar said *not in so many words*, and everyone screamed, and she laughed, and she was nobody's candidate and nobody's daughter and nobody's anything, just theirs." },
    { n: "Then it was the Gekkoukan front gate at the end of the day and the third years streaming past her and nobody hugging her at all. She stood in the gate with her arms a little open, the way you stand when somebody's just let go of you. Down the road, by the station, she could see Jihoon and Cherry arguing about something on the corner. She could hear them from here. She walked toward them, and didn't stop to think about why it felt like walking home." }
  ], [
    { n: "She looked away from the doors. When she looked back, she was at the Gekkoukan gate, alone, and everybody was going home. She went home too. It wasn't the same word. She didn't know when that had happened." }
  ], [
    { n: "She stood still at the stage steps with all of it in front of her, the doors and the arms and the noise, and let it come and didn't go to it, and it washed around her and through her like a crowd in a corridor, and passed, and the last thing to go was a voice she didn't know she knew, saying *don't give up just yet*, close to her ear, like an arm around her shoulders." }
  ]);
})();

/* The one bad ending ("the last stop"): giving up at the crucial moment, taking the ticket at the solstice.
   It plays in place, inside the solstice scene; story-endings.js closes the year on it on the last night (3/7). */
window.FEMC_STORY_KIT.badEnding = [
  { music: 'night' },
  { n: "The train came in at the far end of the platform, where there were no rails, and there were rails. Black and green and gleaming, unhurried, its lantern windows lit gold, the horn so close now that she felt it in her teeth. It slowed. It stopped exactly in front of the handless clock, as if it had been aiming for them all year." },
  { n: "The lead car had no lights in it. Three dark windows. A door opened in its side without anyone opening it." },
  { s: 'wren', f: 'happy', t: "We could just ride. It never has to arrive anywhere. That's the best part. It never has to arrive." },
  { n: "Wren took her hand. It was cold and light and it held on, and Solar let it, and stood up off the bench, and walked across the platform with the warm blank ticket in her other hand, and stepped up into the train. It was so easy. It was as easy as getting on a bus home." },
  { n: "Inside it was warm. Plush seats, old, the color of wine. The soft gold light. People asleep all down the carriage, their heads against the glass, peaceful. Wren sat down by the window, in the middle one of the three, and patted the seat beside her, and Solar sat." },
  { n: "Through the window she could see the top of the station stairs. They were all there. She knew them. She didn't, and she did. A boy with silver hair and red gloves, one foot on the top step, his hand out. Two girls holding on to each other. A girl in a red puffer jacket with her mouth open on a word. A boy with a tub of something. Two boys standing apart, not looking at each other, both looking at her." },
  { n: "They weren't moving. They had stopped. As she watched, the green settled on them like dust on furniture, and they went dark, one by one, and tall, and smooth, and closed. Coffins. All of them. At the top of the stairs, in a row, like a crowd seeing someone off." },
  { n: "She should have minded. She waited to mind. It didn't come. Nothing came. That was the whole point." },
  { n: "The doors closed. The train pulled out, slow, unhurried, a hand's width above the rails, out past the end of the platform, out past the city, over the black water of the bay, and the hour went with it, the green, all of it, the whole long night, and it never ended. It didn't have to." },
  { cg: 'ending-last-stop' },
  { n: "Wren put her head on Solar's shoulder. The cap pushed crooked. Solar didn't straighten it. Out the window the moon hung full and close and didn't move, and the bells were silent, all three, dark on a sash she couldn't feel anymore, and somewhere very far behind them three worlds and a dormitory went on standing at the tops of their stairs, waiting for a girl who was never going to have to choose." },
  { n: "It was very peaceful. It was the most peaceful thing she had ever felt in her life. Nobody ever had to choose anything again." },
  { cg: null },
  { n: "Somewhere, a page in a blue book went faint, and fainter, and was gone, and the gutter where it had been showed a thin line of light." },
  { n: "ENDING · the last stop" }
];

(window.FEMC_GAME_EVENTS ||= []).push(
  { id: 'a5-margins', date: '11/22', slot: 'after', title: 'the margins', place: 'Iwatodai Strip · Bookworms', time: 'Daytime', scene: [
    { act: { numeral: 'V', title: 'solstice' } },
    { music: 'mystery' },
    { ifMet: 'rohan', then: [
      { n: "Rohan had been waiting in Bookworms since it opened, in the art section, standing, sketching the old couple who ran the shop while they pretended not to notice. He'd sent her a message that said only *come at two, I've thought of something*, which from Rohan was either an invitation or a threat. He saw her come in and shut the sketchbook with a snap." },
      { s: 'rohan', f: 'serious', t: "Good. You came. Sit there. No, there, where the light's better. I've been thinking about your page." },
      { s: 'rohan', f: 'neutral', t: "That blue woman of yours says it's blank. Blank pages don't exist. Every person is a book. I've read hundreds. Even a dog is a pamphlet." },
      { s: 'rohan', f: 'serious', t: "So. May I?" },
      { choose: [
        { t: "Yes.", then: [] },
        { t: "Will it hurt?", then: [
          { s: 'rohan', f: 'neutral', t: "Not you. It might hurt me, if there's nothing worth reading. That would be a great professional disappointment." }
        ] }
      ] },
      { n: "He raised one hand and drew something in the air, fast, a figure, and her face came open. That was the only way to describe it. She felt it like a book being opened on a desk, a crack of the spine, her cheek and her forehead peeling back softly into pages, and Rohan leaned in over her with the absolute focus of a man reading the last chapter of something." },
      { n: "He turned a page. Another. Another. His face changed." },
      { s: 'rohan', f: 'serious', t: "...Blank. Every page. That's... that's not possible. That's not..." },
      { s: 'rohan', f: 'serious', t: "No. Wait. The margins." },
      { n: "He turned the book of her face toward the window and held his breath." },
      { s: 'rohan', f: 'serious', t: "The margins are full. All of them. Every page, top to bottom, in handwriting. Three hands. Three people writing you down from the outside, notes, dates, a song lyric, something about a dog, a list of things you like to eat. They're writing you in the margins because they can't get onto the page." },
      { s: 'rohan', f: 'neutral', t: "It's the most beautiful thing I've ever seen in a book. I'm furious about it. I want to steal it." },
      { n: "He went on turning. Near the end he stopped." },
      { s: 'rohan', f: 'serious', t: "Here. There's a face drawn in the margin. A boy's. Someone drew it very carefully. And someone else, later, pressed a thumb across it and smudged it. On purpose. You can see the print." },
      { s: 'rohan', f: 'neutral', t: "I don't know whose face it is. I don't think the person who smudged it did either. I think they just couldn't stand to look at it." },
      { n: "He closed her. It felt like a cover coming down. She sat in the art section with her heart going and her face her own again and her fingers on her cheek, checking." },
      { s: 'rohan', f: 'serious', t: "One more thing. The girl in the porter's coat. The one at the station who sends everybody in the right direction. I tried her, the night I came. She pointed me down the strip, and I was curious, so I opened her." },
      { s: 'rohan', f: 'sad', t: "Nothing." },
      { s: 'rohan', f: 'serious', t: "Not blank. Nothing. No pages. No margins. No cover. As if she's printed on the back of someone. As if the only way to read her would be to turn somebody else over." },
      { choose: [
        { t: "Turn who over?", then: [
          { s: 'rohan', f: 'neutral', t: "If I knew that, I'd have done it already. I'm not a nice man. You've noticed." }
        ] },
        { t: "Don't do that to her again.", then: [
          { s: 'rohan', f: 'neutral', t: "...No. I won't. Whatever's in there, I don't think it wants an audience." },
          { n: "It was the first time she'd ever heard Rohan Kishibe agree not to look at something." }
        ] }
      ] }
    ], else: [
      { place: 'The Velvet Room', time: '' },
      { music: 'velvet' },
      { n: "Elizabeth had the book open across her knees and a magnifying glass in her hand that Solar had never seen her use, and was going over the edges of Solar's page with it slowly, the way you'd go over a map looking for a town you'd been told was there." },
      { s: 'elizabeth', f: 'serious', t: "The margins. I've been looking at the page. I should have been looking around it." },
      { s: 'elizabeth', f: 'neutral', t: "They're full. Every margin. Top, bottom, the gutter. Tiny writing in three hands. Notes, dates, the name of a dog. A list of things you like to eat. They can't get onto the page, so they're writing you in round the edges, the way you'd write a message on a parcel." },
      { s: 'elizabeth', f: 'serious', t: "And here, near the end, a face. A boy's. Someone drew it carefully, and someone else pressed a thumb across it and smudged it. On purpose. I can see the whorls." },
      { choose: [
        { t: "Whose face?", then: [
          { s: 'elizabeth', f: 'neutral', t: "I don't know. I don't think the person who smudged it knew either. I think they simply couldn't bear to look at it yet." }
        ] },
        { t: "Can you clean it?", then: [
          { s: 'elizabeth', f: 'neutral', t: "I could. I won't. It's not mine to clean, any more than the page is mine to write." }
        ] }
      ] },
      { s: 'elizabeth', f: 'serious', t: "And Solar. I looked for the girl in the porter's coat. Every guest has a page. I've been through the whole book twice. She has none. Not a blank one. None. It is as though she were printed on the back of somebody else's." }
    ] },
    { n: "On the walk home she passed the station and didn't go up. She stood at the bottom of the stairs for a long time looking at the lit platform, and didn't go up, and didn't know why, except that for the first time since April she was afraid of what she'd find on the bench, and more afraid of what she wouldn't." }
  ] },

  { id: 'a5-jungwon-awakens', date: '11/28', slot: 'evening', title: 'a veil and a poster', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
    { music: 'mystery' },
    { n: "Jungwon's watch started at eleven fifty-eight." },
    { n: "Solar didn't see it. She heard about it afterward, in pieces, the way you hear about something that happened in a room you weren't in. That he'd been at his desk at the guesthouse with a stack of somebody else's math homework, correcting it in pencil because there was nothing else here that needed correcting. That the steel watch on his left wrist, the one a little too big for him, with one link taken out so it would fit, the one that had stopped at midnight on the night he came through and hadn't moved a second since, had ticked. Once. And then gone on ticking. Backward." },
    { n: "That he'd put his pencil down, and put his coat on, and walked the whole way to the dorm in the cold, and rung the bell, which nobody ever did, and when Junpei opened the door he'd said good evening, and asked for Mitsuru, very politely, and was shaking so hard that Junpei had stepped aside without a single joke." },
    { place: 'Iwatodai Dorm · Lounge', time: 'Night', music: 'mystery' },
    { s: 'jungwon', f: 'neutral', t: "I apologize for the hour. I'm not here to ask to come. I've seen how that conversation goes, and I don't think there's time for it." },
    { s: 'jungwon', f: 'serious', t: "Whatever's in the tower tonight, I believe it's mine. Both of it. I can hear two of them. I think they're looking for me." },
    { n: "He held up his wrist. Mitsuru looked at the watch, at the second hand going round the wrong way, small and steady and terrible, and didn't say anything for a long moment." },
    { n: "Haechan was on the stairs. He'd come halfway down at the sound of the bell and stopped there, in the dark above the lounge light, with one hand on the banister, the way he stopped everywhere in this building, halfway, as if he hadn't decided yet whether he lived in it. He was looking at the watch too." },
    { s: 'haechan', f: 'neutral', t: "Both of them." },
    { n: "Jungwon turned his head. Not all the way. Just enough." },
    { s: 'jungwon', f: 'surprised', t: "You can hear them." },
    { s: 'haechan', f: 'serious', t: "Every night." },
    { n: "That was all. Neither of them said anything else. But something went between the stairs and the lounge that Solar, standing by the door with her armband half on, felt go past her like a draft. Two boys who couldn't stand each other, who had both crossed twice to get here, looking at each other for one second like the only two people in the building who knew exactly what the other one was carrying." },
    { n: "Then Haechan went back up the stairs. His door closed at the far end of the top floor, very quietly. Mitsuru picked up her Evoker." },
    { s: 'mitsuru', f: 'neutral', t: "Stay beside Solar." },
    { place: 'Tartarus · The Dark Hour', time: 'The Dark Hour', bg: 'tartarus-scene' },
    { dark: true },
    { music: 'tartarus' },
    { s: 'fuuka', f: 'surprised', t: "Two floors. Two at once, one above the other, and they're... pulling at each other. Like they want to be the same floor. And they're both reaching for him. Not for Solar. For Jungwon." },
    { s: 'fuuka', f: 'sad', t: "Solar, you can only reach one tonight before the other closes. I'm sorry. I don't know how I know that." },
    { n: "Both rang at once. The jade ring and the star pin, together, in her chest, two pulls in two directions, and beside her Jungwon put two fingers to his wrist, to the watch going backward, as though he'd heard them too. As though they were ringing in him." },
    { choose: [
      { t: "(Follow the jade ring.)", flag: { 'xroad2-S': true }, tally: { crossroad2: 'S', 'lean.S': 1, 'jungwon.S': 1 }, then: [
        { music: 'world-strangers' },
        { n: "The floor was a pier at low tide. Mud to the horizon under sodium lights, the sea gone out so far it was only a line, boats lying on their sides, the smell of salt and diesel and the cold coming off the flats. And standing out on the mud, waiting, a bride." },
        { n: "That was what it was. A tall shape in white, a veil to the ground, lace and pearl and a long train dragging through the gray mud behind it, and under the veil, where a face should be, nothing. A wedding dress with nobody in it. It turned toward them. It turned toward Jungwon, and the veil lifted, slightly, as if in greeting, as if it knew him. As if it had been waiting for him at the end of an aisle." },
        { fragment: 'strangers-low-tide' },
        { n: "Solar knew the mud. She knew this tide. She could feel it in her teeth, the sea a mile out and the whole long night of the low tide in front of her, the night she never slept. She knew the dress, too, though she'd never worn it. She knew the date it was for." }
      ] },
      { t: "(Follow the star pin.)", flag: { 'xroad2-H': true }, tally: { crossroad2: 'H', 'lean.H': 1, 'jungwon.H': 1 }, then: [
        { music: 'world-hoax' },
        { n: "The floor was a student council room at night. Long table, folders, a whiteboard covered in someone's precise neat handwriting, two names written at the top of it under two titles, and on the table, in a pool of lamplight, a math worksheet. Covered in corrections. Every wrong answer circled in somebody else's neat pencil, and the right way written out beside it, step by step, patient, with a small check mark at the end of each one like a pat on the head." },
        { fragment: 'hoax-math-homework' },
        { n: "And standing by the whiteboard, waiting, a poster. A campaign poster the size of a door, glitter and bubble letters and a smiling face, and it peeled itself off the wall and stood up on paper legs and turned, and the face on it was her face, and the smile was the practiced one, and it was looking at Jungwon the way a vice president looks at a president across a long table: waiting to be told what to do." }
      ] }
    ] },
    { n: "Then the other floor came through. It came up through the one they were standing on like a photograph developing over another photograph, mud under the council table, lamplight on the tide, and the two Shadows folded together, the veil and the poster, the bride and the vice president, into one shape. A girl made of a white dress and a glitter smile, both at once, neither of them her, both of them the person somebody needed her to be." },
    { n: "And the floor split. Right down the middle of him." },
    { n: "She saw it happen. A seam of light opening up the center of the hall, the pier on one side and the council room on the other, and Jungwon standing exactly on it, one foot in each, and both halves pulling. The memories started to come out of him, and they came out in two colors, and they went two ways. A croissant with red icing. A dog on a leash. A worksheet. A hand on a ladder. All of it peeling off one side of him toward the poster. A dinner over the sea. A watch with a link taken out. A girl at a table saying the cutting thing once and letting it sit. All of it peeling off the other side toward the veil." },
    { s: 'fuuka', f: 'surprised', t: "It's making him choose! It wants him to be one or the other! If he picks a side, the other half of him goes, all of it, everything he remembers from there, Solar, everything he remembers of you from there!" },
    { battle: { id: 'memory-jungwon', kind: 'scripted', script: 'memory-jungwon', segment: 1, title: 'Tartarus · Two Floors at Once', desc: 'A bride with no face and a poster with her face, folded into one Shadow. It wants Jungwon to be only one of the boys he is.', notes: 'Memory floor (strangers + Hoax, crossroad 2). Two-phase Shadow (Veil / Poster) that swaps weakness each turn. Segment 1 ends with outcome interrupt; the scene plays Jungwon’s awakening; segment 2 has Jungwon in the party.', forced: true } },
    { n: "He didn't fall to his knees. Of course he didn't. He stood perfectly straight on the seam in the middle of the floor with his hands at his sides while both halves pulled, and his face was very still, and he got more polite. She watched it happen. He bowed to the Shadow. A small, formal bow, exactly to its center, so that neither half of it could claim it." },
    { s: 'jungwon', f: 'neutral', t: "Excuse me. I'm afraid you've misunderstood the assignment." },
    { s: 'jungwon', f: 'serious', t: "In one life, I'm the boy she ran against, who won, and then made her my vice president, because there was nobody else in that school I'd trust to tell me when I was wrong. In the other, I'm the son who's to marry her in April because two families shook hands over a table. I didn't ask for that one either. I've stopped wishing nobody had given it to me." },
    { s: 'jungwon', f: 'serious', t: "I have been both of them every hour since I came through that door. I don't put one down to carry the other. I'm not built like that. Neither is she. Neither, God help me, is he." },
    { s: 'jungwon', f: 'serious', t: "So I won't choose. And I won't let you make her choose. Give them back. Both halves. They were never two." },
    { music: 'awakening' },
    { cg: 'searchers-jungwon-awakening' },
    { n: "Something came up out of him, very quiet. Not loud like Jihoon's, not a light like Minji's. A shape that built itself the way a bridge is built, span by span, very fast, very exact, a figure of command and stillness standing over him with its arms crossed, and where it stood, the seam in the floor closed. Mud and lamplight knitted together under his feet. Every piece that had lifted off him stopped in the air, mid-flight, both colors, and came back, one at a time, each into its exact place, the way you'd put pieces back on a board after someone's knocked it, and when the last one landed, the watch on his wrist stopped going backward, and went still." },
    { cg: null },
    { flag: { 'awake-jungwon': true } },
    { join: 'jungwon' },
    { battle: { id: 'memory-jungwon', kind: 'scripted', script: 'memory-jungwon', segment: 2, title: 'Tartarus · Two Floors at Once', desc: 'Jungwon has a Persona. Finish it.', notes: 'Segment 2: Jungwon joins the party (party id jungwon). His Persona is pending design with Kat; use placeholder skills.', forced: true } },
    { music: 'night' },
    { n: "Afterward the floor faded, mud and lamplight and glitter, and he was standing in the checkerboard hall straightening his cuffs, exactly, one and then the other. His hands were shaking. He saw her see it. He put them behind his back." },
    { s: 'jungwon', f: 'flustered', t: "I apologize. That was very undignified. And I said a great deal more than I meant to, in front of a great many people." },
    { choose: [
      { t: "That was the bravest thing I've ever seen.", then: [
        { n: "He looked at her. The dimples didn't come. His face went completely still instead, which she'd learned by now, slowly, reading him like a language, was what his face did when something meant too much to be polite about." },
        { s: 'jungwon', f: 'neutral', t: "...Thank you." },
        { n: "He didn't say anything else. He walked beside her all the way out of the tower, close, closer than he usually walked, and at the bottom of the stairs his hand brushed hers, once, and didn't apologize." }
      ] },
      { t: "Two lives?", then: [
        { s: 'jungwon', f: 'neutral', t: "Two. I don't know how. I've stopped asking how. I just know I wake up as both of them and go to sleep as both of them." },
        { s: 'jungwon', f: 'neutral', t: "You'd understand, I think. You're the only person who would. You, and one other, and I would sooner walk back into that floor than tell him so." }
      ] },
      { t: "(Take his shaking hand.)", then: [
        { n: "She reached behind him and took it. He let her. His hand was cold and thin and very still once she had it, as if all it had needed was somewhere to go. He didn't look at her. He looked straight ahead at the stairs, perfectly composed, and didn't let go until the bottom." }
      ] }
    ] },
    { n: "When they came in at two, the light was on at the far end of the top floor, a thin line under one door. It went off as they came up the stairs. Jungwon looked at it, and at the watch on his wrist, which said a minute to midnight now and stayed there, and said good night to everyone, separately, and walked back to the guesthouse alone." },
    { dark: false }
  ] },

  { id: 'a5-here-3', date: '12/1', slot: 'late', title: "i'd stay for this", place: 'Iwatodai Dorm · Rooftop', time: 'Night', scene: [
    { music: 'night' },
    { n: "It was the first of December, and cold, really cold, the first night of the year the breath went up white, and the dorm was full to the rafters with people from three other lives. Solar went up to the roof at eleven because the roof was the only place left in the building that was just hers." },
    { n: "It wasn't, tonight. Akihiko was up there, at the railing, in his coat, with his hands in his pockets, looking at the bay. He turned round when the door opened, and didn't look surprised." },
    { ifRank: { akihiko: 10 }, then: [
      { n: "She still had the gloves on. She'd had them on since the afternoon. Red, and new, and a little too big, and she hadn't taken them off once, not at dinner, not doing the dishes, and Yukari had raised an eyebrow at them across the table and Solar had raised one back and that had been the end of that." },
      { n: "He looked at the gloves on her hands and then away, fast, at the bay, and his ears went red in the cold, and he didn't say anything about them, which was how she knew he'd been thinking about nothing else all evening." }
    ], else: [
      { n: "He moved over at the railing without a word, a step, to make room. She stood in it. The bay was black and the monorail slid across it full of light, and the whole city below them was getting ready for winter, windows lit one by one." }
    ] },
    { s: 'akihiko', f: 'neutral', t: "Full house down there." },
    { s: 'akihiko', f: 'neutral', t: "Every one of them came here for you. From somewhere so far away I can't even picture it. They crossed something to get here." },
    { s: 'akihiko', f: 'serious', t: "I keep thinking. One of these days you're going to remember all of it. And then you're going to know what you'd be going back to. And I keep thinking I should be ready for that." },
    { n: "He didn't ask her anything. He didn't ask her to say anything back. He just stood there with his breath going up white, telling the bay." },
    { n: "Below them, through the lounge window, she could hear it. The whole impossible household. Junpei losing at something, loudly. Hyein yelling at the television. Koromaru barking once at nothing. Mitsuru saying someone's name in the voice that meant stop that. Somebody laughing who'd crossed three worlds to laugh in that room, and somebody else laughing back." },
    { choose: [
      { t: "I'd stay for this.", tally: { here: 1 }, flag: { 'here-3': true }, then: [
        { n: "She didn't decide to say it. It came out of her like breath in the cold, white, and went up, and was gone, and was said." },
        { n: "Akihiko didn't move. For a long moment he didn't do anything at all. Then his hand came out of his pocket and found hers on the railing, and held it, not hard, not asking anything, the way you'd hold a rail on a moving train, and stayed." },
        { s: 'akihiko', f: 'blushing', t: "...Yeah. Me too." }
      ] },
      { t: "I don't know what I'll remember.", then: [
        { s: 'akihiko', f: 'neutral', t: "No. Me neither. Nobody ever does, I guess." },
        { n: "They stood there anyway, until the cold drove them down." }
      ] },
      { t: "(Lean against his shoulder.)", then: [
        { n: "She leaned. He went very still, and then, carefully, the way you'd move around a bird that had landed on you, he leaned back. Neither of them said anything. It was enough, for tonight. It wasn't an answer. She knew it wasn't. So did he." }
      ] }
    ] },
    { n: "They went down at midnight. The hour came on the stairs, green and silent, and they walked through it together without remarking on it, the way you walk through rain you've stopped noticing, and he held the door at the bottom for her, the way he always did, and she went through it." }
  ] },

  { id: 'a5-train', date: '12/2', slot: 'evening', title: 'through the tower', place: 'Iwatodai Dorm · Command Room', time: 'Evening', scene: [
    { music: 'badfeeling' },
    { n: "It was supposed to be over. That was the thing nobody said. Twelve full moons, twelve Shadows, and the last one gone on the third of November, and the moon came up full again on the second of December anyway, white and close and indifferent, and the hour came anyway, and Fuuka sat in the command room with her eyes closed and her hands shaking." },
    { s: 'fuuka', f: 'surprised', t: "There's nothing. No Shadow. No big reading. There's just..." },
    { s: 'fuuka', f: 'sad', t: "There's the hole. The hole in the sound. The one from the bridge in August. It's in the tower. It's going up the tower." },
    { place: 'Tartarus · The Dark Hour', time: 'The Dark Hour', bg: 'tartarus-fromadistance' },
    { dark: true },
    { music: 'fullmoon' },
    { n: "Everyone went. S.E.E.S., and the three who could fight now, Jihoon and Minji and Jungwon. And Haechan, who'd come down the stairs at eleven-fifty without a word, dressed, with nothing in his hands, the first time he'd come anywhere near the tower, and Mitsuru had looked at him and decided not to say anything. The others waited in the lounge. Yunjin had argued. Hyein had cried. Hanni had made them both tea." },
    { n: "They heard it on the fortieth floor. The horn. Long and low, coming up through the tower from below, through the stone, into their feet." },
    { n: "Then rails. Rails where there had never been rails, coming up out of the checkerboard floor of the tower like something growing, black iron, gleaming, curving away up the corridor and round the corner and up, spiraling, toward the top of the tower and the moon. And on them, coming up from the dark below, slow, unhurried, its lantern windows lit gold, the train." },
    { battle: { id: 'tartarus-memory', op: 'tartarus-memory', title: 'Full Moon Operation', desc: 'The rails come up through the tower and the train comes with them, and things climb out of its shadow to keep them off the tracks.', notes: 'Scripted full-moon fight in Tartarus (12/2). No arcana Shadow: the train’s shadows (guards of the kept). The train itself cannot be targeted. Win to continue.', forced: true, kind: 'operation' } },
    { music: 'mystery' },
    { n: "It passed them close. Close enough to touch. Close enough that she put her hand out without meaning to and felt the warmth coming off the lantern glass, like a lit window on a cold street. And in the windows, the kept." },
    { n: "People. Asleep. Sitting in the old plush seats with their heads against the glass, peaceful, their faces soft the way faces are only soft when nobody's looking at them. A woman in a blue coat with a long black case in her arms. A man in armor with a cloak drawn over him like a blanket. A girl no older than Ken, still holding a schoolbag. More. Carriage after carriage of them, from worlds she had no words for, all asleep, none of them afraid." },
    { n: "That was what made her want to scream. None of them were afraid." },
    { s: 'akihiko', f: 'serious', t: "Are they... are they alive?" },
    { s: 'fuuka', f: 'sad', t: "Yes. I think so. I can hear them breathing. All of them. Very slowly. Like people who've decided there's no hurry anymore." },
    { n: "Haechan had gone very still beside her. He was looking at one window. A woman in it with her hair pinned up, asleep, her hands folded. He didn't say who. Solar didn't think it was someone he knew. She thought it was someone he'd seen sleep like that once, in a different place, and had never stopped seeing." },
    { n: "The train went on up the tower, slow, carriage after carriage. And then the engine, last, because it was going backward, or they'd been watching it wrong, the lead car coming past at the very end, black and green and gleaming, and in its side, three windows." },
    { n: "Three windows in the lead car, side by side, and they were dark." },
    { n: "Not empty. Dark. Lit from inside by nothing, the glass gone black like a phone screen turned off, and she couldn't see what was behind them, and she knew. She knew the way she knew low tide. There was something behind each of them, waiting, asleep, and it was hers." },
    { choose: [
      { t: "(Put your hand on the glass.)", then: [
        { n: "She put her palm flat on the middle window as it went past. It was warm. Warm like a hand had just been taken away from it. Something on the other side of the black glass shifted, as if in sleep, toward the warmth, toward her, and then the window was past and gone up the tower." }
      ] },
      { t: "(Count them again.)", then: [
        { n: "Three. Three windows. Three. She counted them as they went, and counted them again in her head after they'd gone, three, three, the way you'd count your children on a crowded platform, and every time she came to three something in her chest went tight as a fist." }
      ] },
      { t: "(Look at the others' faces.)", then: [
        { n: "Jihoon was staring at the first window. Haechan at the first and second. Jungwon at the second and third. Minji had the camera up, and was filming, and was crying, and wasn't making a sound. None of them looked at each other. None of them looked at her." }
      ] }
    ] },
    { n: "The horn went once more, far above them now, near the top of the tower, near the moon. Then the rails sank back into the floor like they'd never been there, and the corridor was only the tower's corridor, and it was very quiet." },
    { n: "Nobody spoke all the way down. At the bottom of the tower Minji turned off her camera, and held it in both hands, and looked at Solar for a long time, with the expression of somebody who has just seen something in a frame that she was going to have to decide whether or not to show anyone." },
    { dark: false }
  ] },

  { id: 'a5-haechan-awakens', date: '12/5', slot: 'evening', title: 'full sun', place: 'Iwatodai Dorm · Command Room', time: 'Evening', scene: [
    { music: 'mystery' },
    { n: "Haechan didn't go into the tower. He'd gone once, the night the train came through, with nothing in his hands, and had come back down looking at nobody, and hadn't gone again. That was the one thing about him the whole dorm had learned to rely on. He'd go anywhere else Solar went, half a step behind and to the side, the library, the strip, the station, the roof at three in the morning, as if it were a place he'd been assigned. But at a quarter to twelve, when the armbands came out, he went up to the top floor and shut his door, and Mitsuru had stopped asking him a week ago, and nobody else had ever dared start." },
    { n: "So he wasn't there when Fuuka found the floor." },
    { s: 'fuuka', f: 'surprised', t: "It's two places. It's... it's the same as Jungwon's, two floors at once, but these aren't pulling apart. They're on top of each other. A roof. And under the roof, where the ground should be, water." },
    { s: 'fuuka', f: 'sad', t: "And there's something up there that reads exactly like Solar. Exactly. I keep losing track of which one's her." },
    { place: 'Tartarus · The Dark Hour', time: 'The Dark Hour', bg: 'tartarus-scene' },
    { dark: true },
    { music: 'tartarus' },
    { n: "It was a rooftop. Tar paper underfoot, soft with old rain. A low concrete ledge. A ladder bolted to a brick wall. A campus spread out somewhere below, bare trees and a bell tower and a few lit windows, and a breeze that smelled of leaves and somebody's lighter. Solar knew it the way she knew the ache in her own knees. She'd sat on that ledge. She'd sat on it with her legs over the drop." },
    { n: "Except there was no campus below the ledge. There was the sea. Black, all the way down, high tide, slapping at the bottom of a wall that should have been brick and was harbor stone, green with weed, the smell of salt and diesel coming up it like breath. A rooftop in one life, hung over the water of another." },
    { n: "And on the ledge, waiting, a girl." },
    { n: "Her height. Her hair, pinned up the way her hands pinned it every morning. A fox mask pushed up on her head, and a bell at her throat that didn't ring, and a fan of little blades of light held loose between her fingers the way Solar held her Evoker, easy, practiced, like she'd been doing it all her life. She turned around. She had Solar's face. Not the practiced one. The real one, the one Solar never saw in a mirror, tired and frightened and very polite." },
    { n: "It smiled at her. It moved the way she moved. A beat early." },
    { battle: { id: 'memory-haechan', kind: 'scripted', script: 'memory-haechan', segment: 1, title: 'Tartarus · Mirror Match', desc: 'A Shadow that plays exactly like Solar does, a beat early, on a rooftop hung over the sea.', notes: 'Memory floor (Runners + strangers). The fox Shadow mirrors Solar’s own skills and support timing. Segment 1 ends with outcome interrupt; the scene plays Haechan’s awakening; segment 2 has Haechan in the party.', forced: true } },
    { n: "They couldn't touch it. It knew every heal before she cast it and every guard before she raised it, because it was her, and it was always there first, a beat early, a beat early, until Akihiko was down on one knee and Junpei was down altogether and Mitsuru was shouting orders into a fight that had already read them. And Solar, every time she lifted the Evoker, felt a little more of herself go across the roof to the girl on the ledge, as if it were filling up on her. As if, when it had enough, there wouldn't need to be two of them." },
    { n: "It didn't attack her, at the end. It just stepped off the ledge to meet her, very gently, and took her by the wrist, and leaned back." },
    { n: "And she went over." },
    { n: "Off the ledge. Into the air above the black water, and her stomach went through the floor of her, and the sea came up, and she knew, she knew it in every bone she had, that she couldn't swim. That she'd never been able to. That this was the water that had been waiting for her all her life." },
    { s: 'fuuka', f: 'surprised', t: "SOLAR!" },
    { n: "Her wrist stopped." },
    { n: "Not the girl's hand. Somebody else's. Somebody had her by the wrist from above, the way you catch something you'd never in your life let hit the floor, and her whole weight came down on that one hand and it held, and she hung there over the sea with her shoulder screaming and looked up." },
    { music: 'awakening' },
    { cg: 'searchers-haechan-awakening' },
    { n: "Haechan. Flat on his stomach on the tar paper, half over the ledge, one hand locked round her wrist and the other on the concrete, holding both of them. No Evoker. No armband. No coat. He was breathing like he'd run the whole tower, because he had, Fuuka was saying, somewhere far away in Solar's ear, half sobbing, he came in the door at the bottom alone and he didn't stop, he didn't stop once, two hundred floors, nobody told him, he just came." },
    { s: 'haechan', f: 'serious', t: "Look at me. Not down. Me." },
    { n: "She looked at him. Above him, on the ledge, the girl with her face lifted the little blades of light, all of them, and turned them toward his hand." },
    { s: 'haechan', f: 'neutral', t: "Twice now somebody's told me to keep you alive. Your father, in one life. Nobody, in the other." },
    { s: 'haechan', f: 'serious', t: "I'd have done it anyway. Both times." },
    { n: "He didn't look up at the thing above him. He didn't have to. He looked at Solar, hanging over the water with her wrist in his fist, and the corner of his mouth moved, flat, humorless, scraping against something." },
    { s: 'haechan', f: 'neutral', t: "It's a beat early. You're never early. You throw it exactly when they need it, half a second before they know they're dying. It doesn't know that, because it's never once watched you look at the person you're throwing it to." },
    { s: 'haechan', f: 'serious', t: "I have." },
    { n: "Then the sun came up in the tower." },
    { n: "No warning. One second the dark and the black water and the blades coming down, and the next, light, all of it, gold and enormous and much too hot, pouring up out of him like the sun comes up over water, a shape standing over the ledge so bright she couldn't look at it directly. A figure of fire and gold with a chariot of light at its back, the kind of sun that goes down every night and comes back every morning, without fail, without being asked. Every blade the fox had raised went to light and fell apart in the air like sparks off a fire." },
    { n: "And Haenim answered it." },
    { n: "Solar didn't call her. She came anyway, up out of Solar's chest like breath on a cold morning, veiled and gold and pink, and turned toward the light over the ledge, and the two of them stood in the same sky for one second, two suns, which isn't allowed, which happened anyway. On Haenim's sash the bell and the jade ring rang together, the way they had on the bridge the night he came. And on the summon card that hung in the air in front of Solar's eyes, the name that had glitched and torn between scripts every single time since April held still. Spelled whole. Once." },
    { n: "He hauled her up. One pull, like she weighed nothing, over the ledge and onto the tar paper and into the front of his shirt, and held on with his whole arm around her for exactly as long as it took her to breathe, and then let go, and stood, and turned to the fox on the ledge with her face." },
    { cg: null },
    { flag: { 'awake-haechan': true } },
    { join: 'haechan' },
    { battle: { id: 'memory-haechan', kind: 'scripted', script: 'memory-haechan', segment: 2, title: 'Tartarus · Mirror Match', desc: 'Haechan has a Persona. He doesn’t intend to lose a mirror match.', notes: 'Segment 2: Haechan joins the party (party id haechan). His Persona is pending design with Kat; use placeholder skills. He refuses to lose: give him a guaranteed last hit on the fox.', forced: true } },
    { music: 'night' },
    { n: "He took the last shot. Of course he did. One clean line of light across the roof, and the girl with her face came apart into ash and blew out over the black water, and the water went down, and the roof went thin as paper, and they were standing in the tower's checkerboard hall again, all of them, breathing." },
    { n: "Junpei was saying *DUDE* over and over from the floor. Jihoon was saying his was still bigger, with no conviction at all. Akihiko, with one arm across his ribs, was looking at Haechan with an expression Solar couldn't read and didn't try to, and then he nodded, once, the way you nod at somebody who got there first, and looked away." },
    { n: "Haechan wasn't listening to any of them. He'd put his hands in his pockets as if nothing had happened, and his right hand, she noticed, was shaking in there. He was looking at her." },
    { choose: [
      { t: "Donghyuck.", flag: { 'hc-awaken-R': true }, tally: { 'haechan.R': 1 }, then: [
        { n: "She didn't know where it came from. She'd heard Jungwon say it at breakfast, once, a month ago, like an accusation. It didn't sound like that in her mouth. It came out of her quiet and certain, in the voice she used for the things that mattered, like a door she was opening on purpose." },
        { n: "He went very still. All of him. Then, very carefully, the way you'd put something fragile back on a shelf, he looked away, down the hall." },
        { s: 'haechan', f: 'flustered', t: "...Yeah. You don't get to say that one in front of people, princess." },
        { n: "His ears had gone red. She heard, under the flatness, that he'd been waiting a very long time for her to say it at all." }
      ] },
      { t: "You were supposed to be keeping your distance.", flag: { 'hc-awaken-S': true }, tally: { 'haechan.S': 1 }, then: [
        { s: 'haechan', f: 'neutral', t: "I go where I'm walked, agasshi." },
        { n: "He said it like a joke, flat, the way he said everything, and it landed in her hard and familiar and furious, like a hand caught around a wrist, which it had been, ten minutes ago, over the sea." },
        { s: 'haechan', f: 'neutral', t: "Distance was for the dorm. This isn't the dorm." }
      ] },
      { t: "(Say nothing. Stand next to him.)", then: [
        { n: "She stood next to him. Half a step to the side, the way he always stood next to her. He didn't look at her. After a while his shoulder touched hers, just barely, and stayed, and that was all, and it was the loudest thing he'd said all night." }
      ] },
      // Hidden unless she has gone toward a Hoax door: the second moment that turns the pull down.
      { t: "Thank you. (Then step back, out of the light.)", ifFlag: 'home-H3', flag: { 'pull-no-awaken': true }, then: [
        { n: "She meant it. It came out of her plain and whole, the way you'd thank someone who'd pulled you out of a river, which he had. Then she stepped back. One step, off the edge of the gold he was still giving off without meaning to, into the ordinary checkerboard dark of the hall, where the light didn't reach and her own two feet were holding her up." },
        { n: "The bell and the jade ring were still humming on Haenim's sash, together, the way they'd rung on the bridge. She let them hum. She didn't go back toward the light." },
        { s: 'haechan', f: 'sad', t: "...Yeah. You always did that too. Took the hand and then gave it back." },
        { n: "He didn't sound hurt. He sounded like somebody who'd been watching a door for a long time and had just seen which way it opened, and found, to his own surprise, that he didn't mind." }
      ] }
    ] },
    { n: "Mitsuru gave him an Evoker the next morning, at the breakfast table, without a word. He looked at it for a long time, and then put it in his jacket pocket, on the left side, so his right hand stayed free, and went back upstairs. The door at the end of the top floor stayed open that day for the first time since he'd moved in. Nobody said anything about it. Everybody noticed." },
    { dark: false }
  ] },

  { id: 'a5-footage', date: '12/7', slot: 'late', title: 'in every frame', place: "Iwatodai Dorm · Solar's Room", time: 'Late Night', scene: [
    { music: 'mystery' },
    { n: "Minji knocked at eleven. She'd never knocked at Solar's door before. She came everywhere, filmed everywhere, asked every time, but she'd never once come to Solar's room, and she stood in the doorway with her camera held against her chest in both arms and her cap on frontwards, which Solar had learned meant it wasn't a game day, it was something else." },
    { s: 'minji', f: 'serious', t: "Can I show you something? I haven't shown anyone. I'm not going to show anyone. I just think you should see it. And then I'll delete it, if you want. I'll delete all of it." },
    { n: "They sat on the floor with their backs against the bed and the camera between them, and Minji went through the footage. Two months of it. The lamp by the river. The dorm. The tower. Jihoon being an idiot. Hyein asleep on the couch with her mouth open. And the station." },
    { n: "Minji had filmed the station a lot. From the stairs, from the platform, from the footbridge. The bench. Solar on the bench, in the evenings, talking." },
    { n: "She was alone." },
    { n: "In every clip. Every single one. Solar on the last bench at Iwatodai Station, turned slightly to one side, talking to the empty seat beside her. Laughing at it. Leaning her head on nothing. Holding out a can of hot tea to nobody, and setting it down on the slats, and, ten minutes later in the same clip, picking it up again, unopened, and drinking it herself, as if someone had handed it back." },
    { n: "There was nobody else on the bench. There had never been anybody else on the bench." },
    { s: 'minji', f: 'sad', t: "I thought it was the camera. At first. You remember, it wouldn't focus. I thought, okay, it's a weird light, she's got a weird face, it's fine." },
    { s: 'minji', f: 'sad', t: "Then I started filming with my phone. And then I started just... watching. Without anything. Just looking. Sol, I can see her when I'm looking. I can. I can see her right now, in my head, the coat, the hat. And then I look at the footage and you're..." },
    { n: "She stopped. She skipped forward, to a clip from last week. Night. The platform. A train in. Solar on the bench, facing the train, talking, and in the dark window of the train, the reflection of the bench." },
    { n: "In the reflection Solar was sitting on the bench. And beside her, in the glass, so was Solar." },
    { n: "Another one. Facing her. Same face. Softer. More tired. A cap pulled down over her hair. And when the Solar on the bench said something, too far away for the mic to catch, the Solar in the glass answered her. Her mouth moved. Then the train pulled out, and took the window, and the reflection, and there was only the one girl on the bench, talking to nobody." },
    { choose: [
      { t: "Play it again.", then: [
        { n: "Minji played it again. And again. Solar watched her own reflection answer her six times, and on the sixth time she understood what it had said, by the shape of the mouth, because she'd heard it said to her a hundred times on that bench." },
        { n: "*Next time.*" }
      ] },
      { t: "Turn it off.", then: [
        { n: "Minji turned it off at once, without a word. The screen went black. They sat with it dark between them, and Solar could see the two of them reflected in it, small, side by side on the floor, both real." }
      ] },
      { t: "(Say nothing. Look at your hands.)", then: [
        { n: "She looked at her hands. They looked like her hands. She turned them over. She didn't know what she'd expected to find. A coat sleeve. A ticket. A pink ribbon." }
      ] }
    ] },
    { s: 'minji', f: 'neutral', t: "I'm not going to tell anyone. It's yours. It's always been yours. That's why I asked, every time." },
    { s: 'minji', f: 'sad', t: "But you're always the same in the frame, Sol. You're always the same. And in those, you're not. In those you look like you're talking to the only person who's never once asked you for anything." },
    { n: "Minji left the camera with her. She said Solar could delete whatever she wanted. Solar sat on the floor until three in the morning with it in her lap, and didn't delete anything, and didn't play anything, and at three she put it under her pillow, the way you'd put a letter you couldn't open and couldn't throw away." }
  ] },

  { id: 'a5-hat', date: '12/10', slot: 'evening', title: "you in a hat", place: 'Iwatodai Station', time: 'Evening', scene: [
    { music: 'joy' },
    { n: "It was Yunjin's idea. Of course it was. The oden stall at the top of the station stairs had a bench and a counter and a cauldron of daikon and eggs and fishcakes steaming in the cold, and Yunjin had decided that everybody was eating there, together, tonight, because, she said, Sol's weird bench friend had to eat sometime and nobody had ever once seen her do it, and that was medically concerning." },
    { n: "So they were all there. Hanni and Hyein squashed onto one stool. Jihoon eating three eggs at once for no reason. Minji not filming, holding her camera in her lap with both hands. Yunjin in a new puffer, red this time, because the yellow had died in the sea. And at the far end of the counter, very small inside her coat, with a paper bowl of daikon in front of her that she hadn't touched, Wren." },
    { n: "Wren had come. Solar still couldn't believe it. She'd come along the platform when they called her, slowly, looking at all of them the way you'd look at a large dog you've been told is friendly, and had sat down at the very end of the counter, and was smiling the careful smile, the one she'd given Jungwon, and every so often she laughed at something Jihoon said, a beat late, like someone laughing at a joke in a language she was still learning." },
    { n: "Yunjin had been watching her for twenty minutes. Solar knew. She'd felt it. Yunjin watching Wren, and then Solar, and then Wren, back and forth, with a frown getting deeper every time, the face she made reading a menu in a language she didn't trust." },
    { n: "Then she put her chopsticks down." },
    { s: 'yunjin', f: 'serious', t: "Okay. I'm just going to say it. Somebody has to." },
    { s: 'yunjin', f: 'neutral', t: "Sol, babe. That's you in a hat." },
    { n: "There was a pause about a second long." },
    { n: "Then Jihoon laughed, a huge bark of a laugh, and Hyein laughed because Jihoon had, and Hanni said *Jin, oh my God*, laughing, and covered her mouth. And Wren laughed loudest of all. Bright and easy and pitched just right, leaning back on her stool, one sleeve over her mouth, laughing and laughing like it was the funniest thing anyone had ever said to her." },
    { s: 'wren', f: 'happy', t: "Oh, I wish! Can you imagine? She'd never wear a hat like this. It's terrible. I'm terrible. Look at me." },
    { n: "Everybody looked at her. Everybody laughed again. And under the laughing, Solar watched Yunjin not laugh. Yunjin picked her chopsticks back up and ate a fishcake very slowly with her eyes on Wren the whole time, and didn't smile, and didn't say anything else, and Solar watched Minji, at the other end, not laugh either. Minji was looking at her camera. At the black screen. At the two of them reflected in it." },
    { choose: [
      { t: "(Laugh with everyone.)", then: [
        { n: "She laughed. It was the easiest thing in the world. It came out of her bright and pitched just right, the way Wren's had, exactly the way Wren's had, and she heard it, and stopped." }
      ] },
      { t: "Jin.", then: [
        { n: "That was all she said. Yunjin looked at her. Something passed between them, a whole conversation in a look, the kind you can only have with someone you've had a thousand conversations with, and Solar didn't remember a single one of them, and had this one anyway." },
        { s: 'yunjin', f: 'neutral', t: "...Yeah. I know. Later." }
      ] },
      { t: "(Look at Wren.)", then: [
        { n: "Wren was still laughing. She was laughing so hard there were tears in her eyes. And under the cap, for one second, as the laugh ran out, she looked back at Solar with the laugh still on her mouth and nothing at all behind it, scared, the way you'd look at someone across a platform as the doors are closing." }
      ] }
    ] },
    { n: "Wren left first. She said thank you to every one of them, separately, with her funny old-fashioned porter's bow, and went off down the platform to the last bench and sat on it with her back to them, and the daikon was still on the counter, untouched, going cold." },
    { n: "Walking home, Yunjin linked her arm through Solar's and held it tight and didn't say anything for four blocks. Then she said, very quietly, for Yunjin, which was still quite loud, that she wasn't wrong, and she knew she wasn't wrong, and Solar could hate her for it, that was fine, she'd been hated by better." }
  ] },

  { id: 'a5-crossroad-3', date: '12/12', slot: 'evening', title: 'lights, or rice', place: 'Iwatodai Dorm · Lounge', time: 'Evening', consumes: true, scene: [
    { music: 'mystery' },
    { n: "It was the twelfth of December and the city had put its lights up, strings of them on every street, and the dorm had too many people in it and Christmas music on somebody's phone and somebody else telling them to turn it off, and at eight o'clock, in the middle of the lounge, both of them rang at once again. The bell and the jade ring. Gold and green. Two pulls. And she knew, now, what that meant. She could only follow one." },
    { n: "One went up. Toward the roof, and the cold, and the city lights, and a door propped open with a brick. One went down. Toward the kitchen, and something cooking, low, on a flame turned almost to nothing." },
    { choose: [
      { t: "(Follow the bell, up.)", flag: { 'xroad3-R': true }, tally: { crossroad3: 'R', 'lean.R': 1, 'haechan.R': 1 }, then: [
        { place: 'Iwatodai Dorm · Rooftop', time: 'Night', music: 'night' },
        { n: "The roof door was propped open with a brick. It never was. Somebody always shut it; Mitsuru had a rule. Tonight it stood open onto the cold, and the city lay below in its Christmas lights, red and gold and white, all the way to the bay, and on the railing, where nobody ever left anything, there was a can." },
        { n: "Pink and black. Cold. Already open." },
        { music: 'world-runners' },
        { n: "And for one second the roof was the other roof, the high one, the ledge and the ladder and the campus below and the boy beside her with his legs over the drop. A week of nights like this. More. A secret built out of rooftops and lab windows and duo queues at eleven at night with his voice in her ear for the first time. Lights everywhere, the whole campus lit for something big that was coming, and up here, nobody, just the two of them and a can and a city, and him not saying anything, and her not saying anything, and none of it having a name yet." },
        { n: "*Keep it on the rooftop.*" },
        { fragment: 'runners-rooftop' },
        { n: "Then the roof was the dorm's, and the can was gone, and the door was shut behind her, and she was alone with the lights. Downstairs, through the floor, she heard someone come in from the cold and go up the stairs to the third floor and stop outside the roof door for a long moment, and go away again without opening it. She didn't need to see who. She knew the way he walked." }
      ] },
      { t: "(Follow the jade ring, down.)", flag: { 'xroad3-S': true }, tally: { crossroad3: 'S', 'lean.S': 1, 'haechan.S': 1 }, then: [
        { place: 'Iwatodai Dorm · Kitchen', time: 'Night', music: 'tender' },
        { n: "Somebody was cooking. She smelled it from the stairs. Kombu and soy and sake, and something seared in a dry pan until the skin blistered. The kitchen was empty. The light over the stove was on. On the back burner, on a flame turned very low, sat a black clay pot, round and heavy, the kind nobody in this dormitory had ever owned." },
        { n: "Rice. With a square of kombu and whole fillets of sea bream laid over it, skin up, gold. On the table, two bowls. Two pairs of chopsticks. As if someone had made it for two and then, at the last minute, hadn't been able to sit down." },
        { music: 'world-strangers' },
        { n: "She opened the drawer beside the stove for a spoon. She didn't need a spoon. Her hand went there anyway and found, under the dish towels, at the back, a small soft bag. Quilted. Black. A Chanel makeup bag that had never held makeup. She knew before she unzipped it. Curved needles in a paper packet. A spool of black thread. Gauze. A brown bottle of iodine that had stained the lining yellow, and the same yellow, faintly, at the edge of her own thumbnail, every morning, under dark polish." },
        { fragment: 'strangers-suture-kit' },
        { n: "Then the drawer was the dorm's drawer, dish towels and a broken whisk, and there was no bag. But the pot was still on the stove. She turned the flame off before it burned, the way you would for anyone, and filled the second bowl, and set it at the empty place, carefully, the way you'd lay a place for somebody who was late. In the morning, the bowl was clean and dry and back in the cupboard, and nobody in the dorm would say who'd washed it." }
      ] },
      // Hidden unless she has gone toward a Hoax door: let both ring and follow neither (no fragment tonight). The third
      // moment that turns the pull down; links/haechan.js rank 7 remembers it.
      { t: "(Let them both ring. Put on your shoes and go out the front door.)", ifFlag: 'home-H3', flag: { 'pull-no-xroad3': true }, tally: { crossroad3: 'none' }, then: [
        { place: 'Iwatodai Strip', time: 'Night', music: 'city' },
        { n: "She put on her shoes. Up and down, gold and green, the two pulls went on ringing in her chest like two phones in two rooms, and she let them, and went out the front door into the cold, which was neither." },
        { n: "The Strip had its Christmas lights up too, cheaper ones, half of them blinking out of time with the other half. She walked without deciding where, the way she'd walked onto the bridge on the night of the fourth, and noticed, three streets on, that nothing was pulling. Nothing at all. Her feet were just going where she put them. It was the strangest feeling she'd had all year, and the plainest." },
        { n: "Outside the konbini by the station a very tall boy was explaining to a girl in boots, at volume, why buying three tubs of ice cream in December was a public service. The girl in boots was telling him he was a waste of oxygen. Neither of them had seen her yet." },
        { n: "Somewhere very small, under her ribs, where nobody had rung it, the star pin ticked once. Like a watch. Like somebody's watch, in a council room, at a desk, being checked." },
        { n: "She didn't follow that either. She just went and stood with them, and let Jihoon put a tub in her arms, and let Cherry call her a dumb bitch for going out without gloves, and it was the first thing she'd walked into all year that she was sure she'd chosen." }
      ] }
    ] },
    { n: "That night the other charm was quiet. She lay awake and listened for it, the one she hadn't followed, and it was there, but further. Like the next station down the line. Still running. Still lit. Just not where she was." },
    // Haechan's lean, readable by links/haechan.js: hc-lean-R or hc-lean-S (never both). Majority of the three story moments
    // that ask which register she answers him in (11/4 the names, 12/5 after the awakening, tonight); a tie goes to tonight.
    { flag: { 'hc-lean-R': false, 'hc-lean-S': false } },
    ...window.FEMC_STORY_KIT.anyOf('hc-lean-R', [['hc-there-R', 'hc-awaken-R'], ['hc-there-R', 'xroad3-R'], ['hc-awaken-R', 'xroad3-R']]),
    ...window.FEMC_STORY_KIT.anyOf('hc-lean-S', [['hc-there-S', 'hc-awaken-S'], ['hc-there-S', 'xroad3-S'], ['hc-awaken-S', 'xroad3-S']]),
    { ifFlag: 'hc-lean-R', else: [{ ifFlag: 'hc-lean-S', else: [
      // A tie goes to tonight; if she followed neither tonight, to whichever name she answered first.
      { ifFlag: 'xroad3-R', then: [{ flag: { 'hc-lean-R': true } }], else: [{ ifFlag: 'xroad3-S', then: [{ flag: { 'hc-lean-S': true } }], else: [
        { ifFlag: 'hc-there-S', then: [{ flag: { 'hc-lean-S': true } }], else: [{ ifFlag: 'hc-awaken-S', then: [{ flag: { 'hc-lean-S': true } }], else: [{ flag: { 'hc-lean-R': true } }] }] }
      ] }] }
    ] }] }
  ] },

  { id: 'a5-call-runners', date: '12/14', slot: 'late', title: 'come home, sol', place: 'Iwatodai Dorm · Rooftop', time: 'Night', scene: [
    { music: 'tender' },
    { n: "Exams started that morning, and by eleven at night the whole dorm was asleep or pretending, and Hanni and Hyein knocked on her door together, in coats over their pajamas, and said *roof*, and didn't say anything else." },
    { n: "Up there it was cold enough to hurt. The city lights. The bay. Hyein had a plastic bag, and out of it she took three cans, pink and black, and lined them up on the railing like a little row of soldiers, and Solar stared at them." },
    { s: 'hyein', f: 'neutral', t: "Don't ask. I don't know. I went to the machine at the station for water and these were in it. Three of them. Bottom row. Nobody in this whole country sells these yet, I checked, I asked the guy at the convenience store and he looked at me like I'd asked for a unicorn." },
    { s: 'hanni', f: 'neutral', t: "I think the station wanted us to have them. I think the station's on our side." },
    { n: "They opened them. They drank them in the cold, the three of them, leaning on the railing, too sweet and too fizzy and much too much caffeine for eleven at night, and Hyein made a face, and Hanni laughed at the face, and for about five minutes it was easy. It was the easiest five minutes Solar had had in a month." },
    { n: "Then Hanni put her can down on the railing very carefully, lined up with the others." },
    { music: 'world-runners' },
    { s: 'hanni', f: 'neutral', t: "Sol. We need to say something. And we need you to just let us say it. Don't fix it. Don't say you're fine." },
    { s: 'hyein', f: 'sad', t: "Come home." },
    { s: 'hyein', f: 'sad', t: "Come home, Sol. Please. We'll stop asking you questions. We won't ask you anything. We won't ask where you were or why you didn't call. We won't even ask about you and H..." },
    { n: "Hanni's hand came out and smacked Hyein's arm, hard, through the coat, without looking, the way you'd swat a wasp off a picnic table." },
    { s: 'hyein', f: 'surprised', t: "OW." },
    { s: 'hanni', f: 'serious', t: "We won't ask about anything." },
    { choose: [
      { t: "Me and who?", then: [
        { n: "Hyein opened her mouth. Hanni looked at her. Hyein closed it, and drank a very long sip of her can, looking at the bay with tremendous interest." },
        { s: 'hyein', f: 'neutral', t: "...Homework. You and homework. You have a really toxic relationship with homework." },
        { s: 'hanni', f: 'neutral', t: "It's not ours to tell you, Sol. It isn't. You'd kill us. Old you would actually kill us. You'd do it with your bare hands and then you'd say you were fine." }
      ] },
      { t: "(Let it go.)", then: [
        { n: "She let it go. She was good at that; she suspected she'd always been good at it. Hyein rubbed her arm and glared at Hanni, and Hanni didn't apologize, and something went between the two of them over Solar's head that she couldn't read and didn't try to." }
      ] }
    ] },
    { ifEvent: 'a4-mark', then: [
      { s: 'hanni', f: 'neutral', t: "Mark's here too, you know. He asks us how you are every day. Every single day. Like he's checking on a stock." },
      { s: 'hyein', f: 'serious', t: "We don't love that." },
      { s: 'hanni', f: 'neutral', t: "We don't love that. But it doesn't matter. None of it matters. You're what matters. We just want you back where we can see you." }
    ], else: [
      { s: 'hanni', f: 'neutral', t: "We just want you back where we can see you. That's all. That's the whole speech. Hyein wrote a longer one and I made her cut it." }
    ] },
    { s: 'hanni', f: 'happy', t: "We'll ask so many questions." },
    { s: 'hyein', f: 'sad', t: "We'll ask SO many questions. We'll never stop. You'll hate it. Come home and hate it. Please." },
    { n: "Hanni didn't say anything else. She just looked at Solar, the way she had in the mall, checking each thing against a list, the hands, the face, the way she stood, and finding every single one present, and one missing." },
    { choose: [
      { t: "I want to. I think I want to.", tally: { 'lean.R': 1 }, flag: { 'call-R': true }, then: [
        { n: "It came out before she'd decided. Hyein made a noise like a kettle and grabbed her, and Hanni held on to both of them, and the three cans on the railing sat in a row watching the city, and Solar stood in the middle of it with her face in Hyein's coat collar and didn't know if she'd just told the truth or just been kind. She thought it might be the first time those had been the same thing." }
      ] },
      { t: "I don't know where home is.", then: [
        { s: 'hanni', f: 'neutral', t: "That's okay. We do. We'll hold it for you. That's all we've been doing." }
      ] },
      { t: "(Drink your can. Don't answer.)", then: [
        { n: "She drank. They let her. Nobody made her answer. That, she thought afterward, lying awake, was exactly what they'd promised, and exactly what she'd have done for them, and she didn't know when she'd learned that about herself, except that it had been somewhere pink, a long way away." }
      ] }
    ] },
    { n: "They stayed until Hyein's teeth were chattering. On the way down, Hyein collected all three empty cans and put them in her bag, and when Solar asked why, she said she was keeping them, obviously, they were evidence, and Hanni said evidence of what, and Hyein said, *that she drank one*." },
    { place: 'Iwatodai Dorm · 3F Hallway', time: 'Night', soft: true },
    { n: "The door at the end of the top-floor hall was open a crack, a line of lamplight on the carpet, the way it had been most nights since December. Haechan was sitting on the floor just inside it with his back against the frame and his headphones round his neck, not doing anything, as if the hallway were a place you sat. He'd heard them on the roof. He'd heard every word. Solar could tell from the way he didn't look up." },
    { n: "Hyein stopped. Hanni said her name. Hyein didn't listen." },
    { s: 'hyein', f: 'serious', t: "Tell her." },
    { s: 'hyein', f: 'serious', t: "Tell her to come home. She'd listen to you. You know she'd listen to you. You, of all people, you could just..." },
    { s: 'haechan', f: 'serious', t: "Not my call." },
    { s: 'hyein', f: 'surprised', t: "It's literally your..." },
    { s: 'haechan', f: 'serious', t: "Not my call." },
    { n: "He said it flat, to the carpet, twice, exactly the same, the way you'd shut a door twice to make sure it had caught. Then he looked up. Not at Hyein. At Solar, standing at the top of the stairs behind her with an empty can still in her hand, and held it for one second longer than he usually let himself, and got up, and went into his room, and closed the door, very quietly." },
    { n: "Hyein turned round with her face red and her eyes wet and her mouth open to say something terrible about him, and Hanni put an arm round her shoulders and steered her down the stairs." },
    { s: 'hanni', f: 'sad', t: "He's right. That's the worst part. He's completely right." }
  ] },

  { id: 'a5-call-strangers', date: '12/15', slot: 'late', title: 'sitting up in the dark', place: 'Port Island · Harbor', time: 'Night', consumes: true, scene: [
    { music: 'night' },
    { n: "Yunjin drove her to the harbor. She'd found a car. Solar didn't ask where. It was small and had three doors and was the wrong color, white instead of purple, and the horn didn't play anything, she checked twice, and Yunjin said it wasn't the same car, it was just the same car, and she drove it the way she apparently drove everything, fast and talking, and parked it on the harbor road facing the water with the engine running and the heater on." },
    { n: "Low tide. One-forty. Solar knew it before they got there. The mud out, gray under the sodium lights, going to the horizon. Yunjin reached into the back seat and came up with two cans of coffee from a vending machine, the cheap sweet kind, and pressed one into Solar's hand, hot, and Solar's hands went round it the way they'd gone round a thousand of them in a thousand cars like this one." },
    { s: 'yunjin', f: 'neutral', t: "You can't sleep at low tide. You never could. So we do this. We sit in the car and drink bad coffee until it turns." },
    { music: 'world-strangers' },
    { s: 'yunjin', f: 'neutral', t: "I'm not going to be cute about this, babe. I'm bad at cute when it matters." },
    { s: 'yunjin', f: 'sad', t: "Your appa is sitting up in the dark." },
    { n: "Solar went still. All the way still. The can in her hands. The heater ticking." },
    { s: 'yunjin', f: 'sad', t: "I know because I hear him. I'm in the room next to yours, remember? Me and my mom. He comes up the stairs at night and stops on the seventh one, the way you two always do, and stands there, looking up at your door. Then he goes back down and sits in his study with the light off and his glasses in his hand, polishing them, slow, the way he does. Waiting for you to come in the gate. I don't know how long it's been there. Nobody here can agree. But I know he is." },
    { s: 'yunjin', f: 'serious', t: "He'd set the whole city on fire for you, Sol. You know he would. Right now he can't even find the city you're in." },
    { s: 'yunjin', f: 'sad', t: "I don't have one of those anymore. You do. Don't you dare waste him." },
    { s: 'yunjin', f: 'sad', t: "Come home. Whatever's waiting there. Whatever date's on the calendar. I'll be there. I'll fight them all. I said that once and I meant it. Come home and let me." },
    { n: "She drank some of her coffee. She looked out at the mud. Then, without turning her head, in the voice she used for the true things, the one that was only slightly quieter than her normal one:" },
    { s: 'yunjin', f: 'neutral', t: "And I'm not going to pretend I don't see it, babe. I'm not blind. I'm in Prada, I'm not blind." },
    { s: 'yunjin', f: 'neutral', t: "You've got the Yang boy in a guesthouse by the station correcting people's math homework, and your dad's dog asleep at the top of your stairs with his door open, and you look at both of them like you're trying to remember a word. I know which word. It's not my word to say." },
    { s: 'yunjin', f: 'happy', t: "I'll say this. The Yang boy still smells like nothing. Kind of hot. Like a ghost. I said it once at home and I stand by it." },
    { s: 'yunjin', f: 'serious', t: "And the other one... I've stood outside a door for you before. I'll do it again. Whichever door. That's all I'm saying. That's me being very restrained. Write it down." },
    { choose: [
      { t: "Tell me about him. My father.", tally: { 'lean.S': 1 }, flag: { 'call-S': true }, then: [
        { n: "So Yunjin told her. The reading glasses on a cord. The trot songs in the car. The ramyun in the old yellow pot, and the egg. The way he'd put his hand over hers and never once asked about the scar. Solar listened to all of it with the coffee going cold in her hands and the tide going out, and somewhere around the egg she started crying, and Yunjin didn't stop talking, because Yunjin understood that if she stopped, Solar would have to." }
      ] },
      { t: "I'm frightened of what's waiting there.", then: [
        { s: 'yunjin', f: 'neutral', t: "Yeah. Me too, babe. Of course you are. Frightened people pay attention. Your mom said that once. I thought it was the scariest thing a mom's ever said and now I think she was right." }
      ] },
      { t: "(Drink the coffee. Watch the tide.)", then: [
        { n: "She drank it. Too sweet. Cheap. Perfect. She watched the mud and the lights and didn't answer, and Yunjin didn't make her, and they sat there until the tide turned, and Solar felt it turn, all the way down in her body, the way she always had, and finally, in a borrowed car, with her best friend's head on her shoulder, slept." }
      ] }
    ] }
  ] },

  { id: 'a5-call-hoax', date: '12/16', slot: 'evening', title: 'not the vice president', place: 'Paulownia Mall · Game Panic', time: 'Evening', scene: [
    { music: 'city' },
    { n: "Jihoon was at the crane game. He'd been at the crane game, according to the guy at the counter, for an hour and forty minutes, and had spent, according to the guy at the counter, more on it than the counter guy made in a day, and the claw kept slipping. Every time. It closed on a big stupid plush dog with a crooked felt smile and lifted it and carried it toward the chute and then just let go, a few centimeters short, every single time, and Jihoon fed it another coin." },
    { s: 'jihoon', f: 'neutral', t: "Don't. Don't say anything. I'm in a groove. The almighty Hoon does not miss twice." },
    { s: 'jihoon', f: 'neutral', t: "...Thirteen times is a groove. Look at it. It's got Nana's stupid face. Father Jihoon is getting it for you, and you're going to be grateful, you ungrateful rug." },
    { n: "The claw slipped. He fed it another coin. She stood beside him and watched, and her hands knew this. The sound of the coin going in. The music the machine played, tinny and cheerful. Somebody beside her who wouldn't stop, who kept feeding it coins long after any sensible person would have walked away, because he'd said he'd get it for her, and he had never once in his life said a thing to her he hadn't followed through on." },
    { music: 'world-hoax' },
    { n: "On the fourteenth coin he stopped, with his hand on the joystick, and didn't push the button. He didn't look at her. He looked at the plush dog." },
    { s: 'jihoon', f: 'neutral', t: "Everybody back home wants you, Sol. The school. The council. Your parents, whenever they remember they've got a daughter. Everybody wants the vice president. Solar Kim, loyal vice pres. You sign it on every post. It's a disease." },
    { s: 'jihoon', f: 'neutral', t: "And Yang. Obviously. Your boyfriend. Yeah. Him. The math competition in a blazer. He's here, you know he's here, he lives at the end of my corridor and he irons his socks. Go home to him if that's what it takes. I don't care." },
    { s: 'jihoon', f: 'sad', t: "I care so much it's honestly embarrassing for me. Don't look at me like that." },
    { n: "He fed the machine another coin without looking at it. The claw went down, and closed, and came up empty, and he watched it come up empty like it was the most interesting thing in the room." },
    { s: 'jihoon', f: 'sad', t: "I know I've been a piece of shit, back home. Don't say it. You already said it, like four hundred times, and you were right every time, and that's the worst thing about you, you're always right about me. You kissed me at homecoming, and then I spent the whole rest of the year making you sorry you did. You don't remember any of that. Great. Perfect. That's perfect for me." },
    { s: 'jihoon', f: 'sad', t: "But I don't want the vice president. I never did. I don't care if you run the whole school or burn it to the ground. I'd help with the burning. I'm very good at burning things down. Ask literally anyone." },
    { s: 'jihoon', f: 'sad', t: "I want you. Not the vice president. You. The one who texts me in capital letters at six in the morning to demand I drive her to Starbucks. The one who eats all my ice cream. The one who's mean to me." },
    { s: 'jihoon', f: 'neutral', t: "Come home. Please. It's... it's really quiet without you being mean to me." },
    { choose: [
      { t: "(Push the button for him.)", tally: { 'lean.H': 1 }, flag: { 'call-H': true }, then: [
        { n: "She reached over his hand and pushed it. The claw went down. Closed on the dog's stupid felt ear. Lifted. Swung toward the chute. And didn't let go. It held on, the whole way, and dropped the dog into the chute with a soft thump, and the machine played a little fanfare, and Jihoon stared at it." },
        { s: 'jihoon', f: 'surprised', t: "...You've been doing that the whole time. You've ALWAYS been the one who gets it. I put the coins in and you push the button and it works and I'm SO mad about it." },
        { n: "He gave her the dog. He put it in her arms and then he put his arms around both of them, the dog and her, and held on, in the middle of Game Panic, in front of the counter guy, who looked away very politely at a pinball machine." }
      ] },
      { t: "What if I'm not her anymore?", then: [
        { s: 'jihoon', f: 'neutral', t: "You are. You're exactly her. You're just her with amnesia and a gun. Honestly, it's an upgrade." },
        { s: 'jihoon', f: 'sad', t: "...You are. I'd know. I've known you since before you could spell." }
      ] },
      { t: "(Hand him another coin.)", then: [
        { n: "She took a coin from her pocket and held it out. He looked at it. Then at her. Then he laughed, short and wet, and took it, and fed it in, and the claw slipped, and they both stood there and watched it slip, and neither of them minded at all." }
      ] }
    ] }
  ] },

  { id: 'a5-not-asking', date: '12/20', slot: 'late', title: 'one more person', place: 'Iwatodai Dorm · Rooftop', time: 'Night', scene: [
    { music: 'night' },
    { n: "The night before the solstice, Akihiko knocked on her door. He'd never knocked on her door. He'd thrown pebbles at her window once, in October, to get her up for a five a.m. run, and Mitsuru had made him write an apology to the window. He stood in the hall in his coat and said *roof?* the way Hanni had, and Hyein, and she went." },
    { n: "Everybody had asked her. She knew that. She knew he knew. Every world had come up onto this roof, or down to the harbor, or into the arcade, and asked her, plainly, to come home. The whole dorm knew. The whole dorm had gone very quiet about it this week, in the particular way a house goes quiet around someone who's about to make a decision." },
    { n: "They stood at the railing. The cold. The lights." },
    { s: 'akihiko', f: 'neutral', t: "Tomorrow's the solstice. Fuuka says the hour's going to be long. Longest night of the year. She says something's going to happen at the station." },
    { s: 'akihiko', f: 'serious', t: "I'm not going to ask you." },
    { n: "She turned and looked at him. He was looking at the bay, the way he always did, like a finish line." },
    { s: 'akihiko', f: 'serious', t: "Everyone's asked you. Your sisters. Your best friend. That loud guy. They've all got a right to. They crossed... whatever they crossed, for you. I didn't cross anything. I just found you on a floor." },
    { s: 'akihiko', f: 'sad-2', t: "And I keep thinking about Miki. And Shinji. I keep thinking about every time I've tried to save someone by deciding something for them. It's never once worked." },
    { s: 'akihiko', f: 'serious', t: "So I'm not going to ask you to stay. I'm not going to be one more person deciding for you. You've had enough of those. I can tell. You go hard and quiet every time somebody tries." },
    { s: 'akihiko', f: 'neutral', t: "Whatever you choose tomorrow, choose it. That's all. I'll be here either way. Until I'm not." },
    { n: "Her whole body heard it before she did. Her hands on the railing. Her throat. The backs of her eyes. It went into her like warmth into cold fingers, painful and enormous, because it was the thing, the exact thing, she had wanted from every man in every life she couldn't remember, and here it was, on a dorm roof, in a borrowed world, from a boy who boxed and drank protein shakes and had found her on a floor." },
    { choose: [
      { t: "Thank you.", then: [
        { n: "It was all she could say. He nodded, once, like she'd read him her lap time, and didn't look at her, and his hand found hers on the railing, and didn't hold it, exactly. Just rested there. Just let her know where it was." }
      ] },
      { t: "What if I want you to ask?", then: [
        { n: "He was quiet for a long time." },
        { s: 'akihiko', f: 'sad', t: "Then I want you to know I'd have wanted to. And didn't. That's the whole thing. That's all I've got." }
      ] },
      { t: "(Lean into his shoulder.)", then: [
        { n: "She leaned. He let her. They stood like that for a long time, not deciding anything, which was, she thought, the most anybody had given her all year." }
      ] }
    ] }
  ] },

  { id: 'a5-solstice', date: '12/21', slot: 'late', title: 'the longest night', place: 'Iwatodai Station · Platform', time: 'The Dark Hour', scene: [
    { music: 'badfeeling' },
    // Eligibility (flags). Doors seen stand in for fragment counts: door-W6 means that world reached 6.
    ...window.FEMC_STORY_KIT.anyOf('home2-R', [['home-R3', 'home-R6'], ['home-R3', 'home-R9'], ['home-R6', 'home-R9']]),
    ...window.FEMC_STORY_KIT.anyOf('home2-S', [['home-S3', 'home-S6'], ['home-S3', 'home-S9'], ['home-S6', 'home-S9']]),
    ...window.FEMC_STORY_KIT.anyOf('home2-H', [['home-H3', 'home-H6'], ['home-H3', 'home-H9'], ['home-H6', 'home-H9']]),
    // Haechan's ranks are story ranks now (he always reaches 7 by 12/13), so he anchors only the world he leans toward
    // (hc-lean-R / -S, settled on 12/12): a two-world person counts for one world at a time (plot doc §12).
    ...window.FEMC_STORY_KIT.anyRank('anc7-R', ['minji', 'hanni', 'hyein', 'jaehyun'], 7),
    { ifFlag: 'hc-lean-R', then: window.FEMC_STORY_KIT.anyRank('anc7-R', ['haechan'], 7) },
    ...window.FEMC_STORY_KIT.anyRank('anc7-S', ['yunjin', 'jungwon'], 7),
    { ifFlag: 'hc-lean-S', then: window.FEMC_STORY_KIT.anyRank('anc7-S', ['haechan'], 7) },
    { ifFlag: ['door-R6', 'home2-R', 'anc7-R'], then: [{ flag: { 'elig-R': true } }] },
    { ifFlag: ['door-S6', 'home2-S', 'anc7-S'], then: [{ flag: { 'elig-S': true } }] },
    // The secret road (Hoax, "the unfated life", Kat's ruling 2026-10-21). Never the natural path; it takes intent:
    //   following Hoax memories: the sixth Hoax fragment, two Hoax doors answered "Go toward it", and the star followed at
    //     one crossroad (10/24 or 11/28);
    //   strong Hoax links: two of Jungwon, Jihoon and Cherry at rank 7+;
    //   turning the pull down at two key moments: answering to her own name on 11/4, stepping back after his awakening on
    //     12/5, following neither charm on 12/12 (those three only appear after home-H3), or Haechan as a friend at rank 8.
    ...window.FEMC_STORY_KIT.anyRank('h7-jw', ['jungwon'], 7),
    ...window.FEMC_STORY_KIT.anyRank('h7-jh', ['jihoon'], 7),
    ...window.FEMC_STORY_KIT.anyRank('h7-ch', ['cherry'], 7),
    ...window.FEMC_STORY_KIT.anyOf('anc7-H', [['h7-jw', 'h7-jh'], ['h7-jw', 'h7-ch'], ['h7-jh', 'h7-ch']]),
    ...window.FEMC_STORY_KIT.anyOf('star-followed', [['xroad1-H'], ['xroad2-H']]),
    { ifRank: { haechan: 8 }, then: [{ ifRomance: 'haechan', else: [{ flag: { 'pull-no-friend': true } }] }] },
    ...window.FEMC_STORY_KIT.anyOf('pull-no-2', [['pull-no-there', 'pull-no-awaken'], ['pull-no-there', 'pull-no-xroad3'], ['pull-no-there', 'pull-no-friend'],
      ['pull-no-awaken', 'pull-no-xroad3'], ['pull-no-awaken', 'pull-no-friend'], ['pull-no-xroad3', 'pull-no-friend']]),
    { ifFlag: ['door-H6', 'home2-H', 'star-followed', 'anc7-H', 'pull-no-2'], then: [{ flag: { 'elig-H': true } }] },
    // True path (provisional): three different anchors at 7+, Akihiko 7+, Wren 9, 6 fragments in every world and 9 in one.
    ...window.FEMC_STORY_KIT.anyRank('d7-rN', ['minji', 'hanni', 'hyein', 'jaehyun'], 7),
    ...window.FEMC_STORY_KIT.anyRank('d7-sN', ['yunjin'], 7),
    ...window.FEMC_STORY_KIT.anyRank('d7-hN', ['jihoon', 'cherry'], 7),
    ...window.FEMC_STORY_KIT.anyRank('d7-hc', ['haechan'], 7),
    ...window.FEMC_STORY_KIT.anyRank('d7-jw', ['jungwon'], 7),
    ...window.FEMC_STORY_KIT.anyOf('dist7', [['d7-rN', 'd7-sN', 'd7-hN'], ['d7-rN', 'd7-sN', 'd7-jw'], ['d7-rN', 'd7-hc', 'd7-hN'], ['d7-rN', 'd7-jw', 'd7-hN'], ['d7-rN', 'd7-hc', 'd7-jw'], ['d7-hc', 'd7-sN', 'd7-hN'], ['d7-hc', 'd7-sN', 'd7-jw'], ['d7-hc', 'd7-jw', 'd7-hN']]),
    ...window.FEMC_STORY_KIT.anyOf('nine', [['door-R9'], ['door-S9'], ['door-H9']]),
    { ifRank: { wren: 9, akihiko: 7 }, then: [{ ifFlag: ['door-R6', 'door-S6', 'door-H6', 'nine', 'dist7'], then: [{ flag: { 'elig-true': true } }] }] },
    // Stay variants: Akihiko on his romance route at 8+ with two HERE answers; Shinjiro at 10 (his link closed on 10/4).
    ...window.FEMC_STORY_KIT.anyOf('here2', [['here-1', 'here-2'], ['here-1', 'here-3'], ['here-2', 'here-3']]),
    { ifRomance: 'akihiko', then: [{ ifRank: { akihiko: 8 }, then: [{ ifFlag: 'here2', then: [{ flag: { 'stay-akihiko-ok': true } }] }] }] },
    { ifRank: { shinjiro: 10 }, then: [{ flag: { 'stay-shinjiro-ok': true } }] },
    { ifRank: { wren: 9 }, then: [
      { cg: 'story-wren-clock' },
      { n: "Midnight came while they were sitting under the clock. She felt it coming the way you feel a train in the rails before you hear it, and then the green came up out of nowhere and laid itself over the platform, the plastic holly, the sad little tree by the gate, the frost on the rails, and Wren, beside her, didn't become a coffin. Of course she didn't. She sat up straighter, if anything. She took her head off Solar's shoulder and turned the ticket over in her bare hand, face up." }
    ], else: [
      { n: "She came to the station at a quarter to midnight because she couldn't not. The bench was empty. Wren was at the end of the platform under the big clock on its iron arm, the clock with no hands, standing very straight in the cold with her ticket held in one bare hand, and when Solar came along the platform toward her she didn't look surprised. She looked like someone whose train was late, and who'd known it would be." },
      { n: "Then the green came up out of nowhere and laid itself over everything, and Wren didn't become a coffin. She never had." }
    ] },
    { dark: true },
    { music: 'fullmoon' },
    { n: "And the hour didn't end." },
    { n: "That was the first thing. She'd always been able to feel it, the length of the hour, the way you feel how much is left in a glass by the weight of it. Tonight there was no bottom. It went on, and on, the longest night of the year stretching the hour out like taffy, and the green deepened, and somewhere very far off, past the end of the line, the horn sounded. Closer than it had ever been. Long and low and patient." },
    { n: "Then all three of them rang at once." },
    { n: "The bell. The jade ring. The star pin. All three, together, for the first time, from somewhere inside her, from the sash of a Persona she hadn't called, gold and green and silver, so loud the frost shook off the rails. They went out over the whole city. She felt them go. She felt them heard. In a dormitory on the other side of Iwatodai, people sat up in their beds. In a guesthouse by the station, someone was already putting on his shoes. On a rooftop, someone stopped humming." },
    { n: "Wren didn't flinch at the bells. She looked at Solar, under the handless clock, with the ticket in her bare hand, and her face was very calm, the calmest Solar had ever seen it, the calm of someone who has been frightened for so long that she's come out the other side of it into something quiet and flat and far away." },
    { s: 'wren', f: 'neutral', t: "When it comes. The train. It's coming. You can hear it." },
    { s: 'wren', f: 'serious', t: "When it comes, will you get on with me?" },
    { n: "Everything Solar had went still. The bells were still ringing. She could hear, somewhere behind her, on the stairs, running feet. She didn't turn around. Whatever she said next, she knew, was going to be the thing she'd said. The sun stood still. It couldn't stay that way." },
    { cg: null },
    { choose: [
      { t: "(The bell rings.) I have to go home.", ifFlag: 'elig-R', flag: { 'route-R': true }, tally: { solstice: 'R' }, then: [
        { n: "The bell rang over all the others. Gold and small and clear, like a cat's collar three rooms away, like a bell thrown to someone who's already decided they're going to die, half a second before they know they need it. A pink hallway. A rooftop. A valley at two in the morning. A girls' chat saying *drink water*. She heard herself say it, and it was hers." },
        { s: 'wren', f: 'sad', t: "...Syracuse. Of course. The snow." },
        { n: "The other two charms went quiet. Not gone. Just still, the way a phone goes still when you put it face down. And the bell went on, ringing and ringing, and then stopped ringing, and started, very slowly, to shine." }
      ] },
      { t: "(The jade ring rings.) I have to go home.", ifFlag: 'elig-S', flag: { 'route-S': true }, tally: { solstice: 'S' }, then: [
        { n: "The jade ring rang over all the others, green and cold and clear, jade on jade, like a toast. A laundry room at three in the morning. A dinner over the sea. A yellow pot and an egg and a hand over the scar on her palm. The tide going out. She heard herself say it, and it was hers." },
        { s: 'wren', f: 'sad', t: "...The house by the sea. Of course. The tide." },
        { n: "The other two charms went quiet. And the jade went on, ringing, and then stopped ringing, and started, very slowly, to shine." }
      ] },
      { t: "(The star pin isn't ringing. Choose it anyway.) I want to go home.", ifFlag: 'elig-H', flag: { 'route-H': true }, tally: { solstice: 'H' }, then: [
        { n: "It wasn't the loudest. That was the thing. The bell and the jade ring were ringing over everything, gold and green, two pulls she'd felt in her bones since November, the way you feel the tide. The star pin wasn't pulling at all. It was just there on her sash, small and silver, the way a door is just there when nobody's leaning on it." },
        { n: "She reached for it anyway. A front door and a tub of ice cream. A gym full of plastic chairs. Exit doors, and all of them there, screaming. A life nobody had arranged for her, not a father at a dinner over the sea, not a song somebody had been writing for her since before she could read. One she'd walked into with her own feet, on purpose, swearing the whole way." },
        { s: 'wren', f: 'surprised', t: "...Hanlim? But it isn't even... it isn't calling you." },
        { s: 'solar', f: 'neutral', t: "I know. That's why." },
        { n: "The bell and the jade ring went quiet, slowly, the way two people stop talking when they realize the conversation has gone somewhere without them. And the star, which nobody had rung, began very slowly to shine." },
        { n: "At the top of the station stairs, out of breath, in a hoodie over pajamas, Haechan had stopped. He'd heard all three. He'd heard which one she picked. He stood there with his hand on the rail and didn't come down, and when she looked up at him, his face, for once in his life, did nothing to hide what it was doing, and what it was doing was letting her go." }
      ] },
      { t: "I'm staying. Here.", flag: { 'route-stay': true }, tally: { solstice: 'stay' }, then: [
        { n: "It came out of her low and certain, in the voice she didn't use much. Here. The dorm and the full house and the shoes in the hall. Akihiko at a railing not asking. Koromaru's chin on her knee. A year, this year, the only one she could remember all of." },
        { n: "All three charms rang once more, together, very softly, like three people saying her name in three empty rooms. Then all three went quiet. She waited for them to shine. They didn't. They hung on Haenim's sash, dark and still, and the sash held them, and that was all." },
        { s: 'wren', f: 'neutral', t: "...Here. With me." },
        { s: 'wren', f: 'sad', t: "No. Not with me. Here. That's different. Isn't it. I can tell from your face it's different." },
        { ifFlag: 'stay-akihiko-ok', then: [{ flag: { 'stay-akihiko': true } }] },
        { ifFlag: 'stay-shinjiro-ok', then: [{ flag: { 'stay-shinjiro': true } }] }
      ] },
      { t: "(Reach for her hand.)", ifFlag: 'elig-true', flag: { 'route-true': true }, tally: { solstice: 'true' }, then: [
        { n: "She didn't say anything. She reached across the cold of the bench, and took Wren's bare hand, the one with the ticket in it, ticket and all, and held on." },
        { n: "All three charms rang. Not over each other. Together. A chord. Three notes that had never been played at once, in tune, as if they'd been written to be. Wren looked down at their two hands with the ticket crushed between them and her face did the thing it had done on the sea in July, complicated, frightened, something else." },
        { s: 'wren', f: 'surprised', t: "That's not an answer. That's not one of the answers. You can't..." },
        { s: 'wren', f: 'sad', t: "...You can't, can you. You can't pick one. You never could. Neither can I." },
        { n: "She didn't let go. Neither did Solar. The ticket between their palms was warm, and very slightly, as if someone were pressing on it from the other side, the blank line where the destination should be began to take ink." }
      ] },
      { t: "(Take the ticket.)", flag: { 'route-bad': true, 'bad-ending': true }, tally: { solstice: 'bad' }, then: [
        { n: "She was so tired. She hadn't known how tired until the bells all rang at once, all three of them, all those people sitting up in their beds, all those doors, all of them asking, every world holding out its hand. She couldn't. She couldn't pick. She'd never been able to. She'd only been pretending, all year, all her lives." },
        { n: "She reached out, and took the ticket from Wren's bare fingers. It was warm. It was blank. It didn't need to say anywhere. That was the whole point of it." },
        { n: "Wren looked at her. For a long moment her face did nothing at all. Then it did something Solar had never seen it do. It looked relieved. Completely, totally relieved, all the fear going out of it at once, the way the sea goes out." },
        { s: 'wren', f: 'happy', t: "Oh. Oh, thank you. I didn't think you'd... thank you." },
        { s: 'wren', f: 'neutral', t: "It's all right now. Nobody has to choose anything. Nobody ever has to choose anything ever again." },
        { n: "The bells stopped. All three. Not quiet. Stopped, the way a clock stops. On the stairs behind her the running feet stopped too." }
      ] }
    ] },
    { ifFlag: 'route-bad', then: [
      ...window.FEMC_STORY_KIT.badEnding
    ], else: [
      { n: "Behind her on the platform they were arriving, one after another, out of breath, in coats over pajamas, every one of them who'd heard the bells. S.E.E.S. Her sisters. Her best friends. Two boys who'd each crossed twice. They stopped at the top of the stairs and didn't come any closer, as if they could tell, from the way she was sitting, that whatever it had been, it was already said." },
      { n: "Wren stood up. She looked at all of them, at the top of the stairs, a long look, the way you'd look at a crowd seeing someone off. Then she bowed to them, the funny old porter's bow, and went down the platform to the last bench, and sat on it with her back to everyone, and waited, the way she always waited, for a train that hadn't come yet." },
      { n: "Over the tracks, the clock with no hands said nothing. The horn sounded once more, far off. Then, at last, so late that the sky over the bay had gone gray at the edges, the hour ended, and the longest night of the year was over, and the sun, which had stood still all night, began, very slowly, to go one way." }
    ] },
    { ifFlag: 'route-bad', else: [
      { flag: { 'year-goes-on': true } },
      { dark: false },
      { act: { numeral: 'VI', title: 'end of the line' } }
    ] }
  ] }
);
