/* Haru Okumura · III The Empress. Arrives on the 6/8 full moon. Format notes are at the top of akihiko.js.
   Strangers echo: Haru's arranged engagement, and the Solar in another world who was promised to someone she didn't choose. */
FemcSocial.define({
  id: 'haru', name: 'Haru Okumura', short: 'Haru', arcana: 'Empress', numeral: 'III', from: 'Persona 5',
  arrives: '6/8',
  home: { place: 'Gekkoukan High · Rooftop Garden', slot: 0, days: [1, 2, 4, 5], hint: 'After school on Mondays, Tuesdays, Thursdays and Fridays, on the Gekkoukan roof.' },
  approach: "A girl with soft brown hair is kneeling among the rooftop planters, speaking to a tomato plant very seriously and very kindly.",
  invite: {
    ask: [
      "Are you free? I baked far too much! 🌸",
      "Would you like to help in the garden today?",
      "I just roasted a new blend. Come taste it?",
      "Solar-chan! The basil would like a second opinion. Are you free? 🌱",
      "I'm on the roof with a thermos and two cups. One of them is yours, if you'd like it.",
      "Are you busy? I bought a new trowel and I would very much like someone to admire it. Fufu.",
      "There is a shop in Paulownia that sells beans by weight. Would you come and smell all of them with me?",
      "It's such a lovely afternoon. It seems a waste to spend it alone. Are you free? 🌷"
    ],
    ok: ["Wonderful! I'll put the kettle on.", "Oh, I'm so glad! I'll save you the good cup. 🌸", "Lovely! Come up whenever you're ready."],
    no: ["Next time, then! 🌸", "That's quite all right! The plants and I will miss you. 🌱", "Of course! Another day. Fufu."]
  },
  hangouts: [
    [
      { n: "Haru had a rule about weeds, which was that most of them weren't. She knelt at the end of the south planters with her sleeves pushed up and a trowel in one hand and explained, very gently, which of the small green arrivals were thieves and which were only guests who had come without an invitation." },
      { s: 'haru', f: 'happy', t: "This one is clover. It feeds the soil. It may stay." },
      { s: 'haru', f: 'serious', t: "This one is a thief. It drinks everything and gives nothing back. Out, please." },
      { choose: [
        { t: "(Ease the thief out by the root, the way she showed you.)", notes: 3, then: [
          { n: "It came up whole, a long pale root curled like a question mark, and Haru clapped once, softly, the way you'd applaud at a piano recital." },
          { s: 'haru', f: 'happy', t: "The whole root! Solar-chan, you're a natural." }
        ] },
        { t: "How do you tell them apart?", notes: 2, then: [{ s: 'haru', f: 'happy', t: "You sit with them long enough. Like people, I suppose. Fufu." }] },
        { t: "They all look the same to me.", notes: 1, then: [{ s: 'haru', f: 'neutral', t: "That's all right. They looked the same to me once, too." }] }
      ] },
      { n: "By the time the bell rang below them the planter was tidy, and the clover was still there, and Haru told it quietly that it had done very well." }
    ],
    [
      { n: "Haru had carried a thermos up to the roof, and two small porcelain cups wrapped in a tea towel, because she did not believe in drinking coffee out of a thermos lid and had said so, firmly, the one time Solar suggested it." },
      { s: 'haru', f: 'happy', t: "Taste it first. Then tell me what you taste. There are no wrong answers. Well. There are a few." },
      { choose: [
        { t: "Chocolate. And something like cherries?", notes: 3, then: [{ s: 'haru', f: 'surprised', t: "...Cherries! Yes! Solar-chan, that's exactly right. I think I might cry a little." }] },
        { t: "(Drink it too fast and burn your tongue.)", notes: 2, then: [{ n: "Haru was so apologetic that she held the second cup for a full minute, blowing across the top of it, before she would let Solar have it back." }] },
        { t: "It tastes like coffee.", notes: 1, then: [{ s: 'haru', f: 'happy', t: "Fufu. That is technically correct. We'll keep practicing." }] }
      ] },
      { n: "They drank the rest sitting with their backs against the stairwell wall, the concrete warm through their uniforms, the city laid out below them. The coffee was very good. So was not talking." }
    ],
    [
      { n: "Haru found an earthworm in the east planter and reacted the way other girls reacted to puppies." },
      { s: 'haru', f: 'happy', t: "Oh! Oh, look at him. Solar-chan, do you know what this means? The soil is alive. He chose us." },
      { n: "She held him in her cupped palm, pink and indignant and coiling, and looked up at Solar with shining eyes, clearly waiting for the correct response." },
      { choose: [
        { t: "Welcome to the garden, worm.", notes: 3, then: [
          { s: 'haru', f: 'happy', t: "He says thank you. He's going to work very hard." },
          { n: "She lowered him back into the dark soil like she was tucking him into bed." }
        ] },
        { t: "He should have a name.", notes: 2, then: [{ s: 'haru', f: 'happy', t: "Then he is the Professor. He looks very wise. Don't you think he looks wise?" }] },
        { t: "(Take one small step back.)", notes: 1, then: [
          { s: 'haru', f: 'surprised', t: "Oh! I'm sorry. Not everyone loves worms. I always forget." },
          { n: "She put him back. She still looked delighted about it. She waved at the soil." }
        ] }
      ] },
      { n: "For the rest of the afternoon Haru checked on that corner of the planter every few minutes, the way you'd look in on someone sleeping." }
    ],
    [
      { n: "The rain came in fast off the bay the way it sometimes did, a gray wall walking across the water, and by the time it reached the roof Haru was already running between the planters with a stack of saucers, sliding them under the pots so the soil wouldn't wash away." },
      { s: 'haru', f: 'serious', t: "Solar-chan! The little ones! On the end! Quickly, please!" },
      { choose: [
        { t: "(Grab a stack of saucers and run.)", notes: 3, then: [{ n: "Solar ran. She got the little ones on the end. She also got completely soaked, and so did Haru, and they ended up under the overhang by the stairwell door, dripping and out of breath and laughing at nothing at all." }] },
        { t: "Haru, we should go inside!", notes: 1, then: [
          { s: 'haru', f: 'serious', t: "In a minute! They need us!" },
          { n: "It was a good deal more than a minute. Solar helped anyway." }
        ] }
      ] },
      { s: 'haru', f: 'happy', t: "They'll be so happy. Rain is the best thing in the world for them. ...Not for us. But for them." },
      { n: "She wrung the water out of the end of her scarf over the nearest planter, so as not to waste it." }
    ],
    [
      { n: "Haru had bought a packet of wooden plant markers from the hardware store by the station, and a paint pen, and had decided that today was the day every planter on the roof would finally learn its own name." },
      { s: 'haru', f: 'happy', t: "Would you write them? My handwriting is too round. It looks like it's apologizing." },
      { choose: [
        { t: "(Draw a little face on each one.)", notes: 3, then: [
          { s: 'haru', f: 'surprised', t: "...Solar-chan. They have faces." },
          { s: 'haru', f: 'happy', t: "Oh, they're perfect. Now they'll know we see them." }
        ] },
        { t: "(Print them neatly, in your best block capitals.)", notes: 2, then: [{ n: "Solar wrote BASIL and SHISO and MINT in careful capitals. Haru held each one up to the light like a diploma." }] },
        { t: "Your handwriting is nice, Haru.", notes: 2, then: [{ s: 'haru', f: 'flustered', t: "...Do you think so? Then we'll take turns. One each." }] }
      ] },
      { n: "When they were finished the markers stood in the soil in a crooked little row, like students lined up for a class photo, and Haru photographed every single one." }
    ]
  ],
  // After rank MAX on the romance route, each visit plays the next date in order (then they rotate).
  dates: [
    { title: 'reservations', place: 'Port Island Station · Hotel Restaurant', music: 'joy', scene: [
      { n: "Haru planned their first real date with the quiet, ruthless competence of a girl who had been raised to seat ambassadors. She told Solar to wear something warm, and to be at Port Island Station at six, and not, under any circumstances, to eat lunch." },
      { n: "The restaurant was on the top floor of the hotel across from the station, the kind of place with a doorman and a name in gold script and a menu in a glass case by the elevator that had no prices on it, which Solar had always understood to be the most frightening thing a menu could do." },
      { s: 'haru', f: 'happy', t: "I telephoned yesterday. I said Okumura, table for two, by the window. They were very polite." },
      { n: "It was only once they were seated, the city glittering below and a waiter laying a napkin across Solar's lap like a blessing, that Haru opened the menu to its right-hand side and went very, very still." },
      { s: 'haru', f: 'surprised', t: "...Solar-chan. I have made an error." },
      { s: 'haru', f: 'surprised', t: "At home I simply signed for things. I've never once looked at this side of a menu. I have four thousand two hundred yen. I earned it selling cucumbers to the man at Hagakure." },
      { choose: [
        { t: "(Look at the prices. Try very hard not to laugh.)", notes: 2, then: [
          { n: "The soup alone was four thousand five hundred. She tried not to laugh. She failed so completely that the couple at the next table turned around, and then Haru failed too, behind her napkin, shoulders shaking, eyes streaming, a girl who had sat through a hundred dinners exactly like this one and never once laughed at any of them." }
        ] },
        { t: "We could split one bread roll. Slowly.", notes: 3, then: [
          { s: 'haru', f: 'happy', t: "Fufu... One roll. Very slowly. With enormous ceremony." },
          { n: "She said it with such dignity that the waiter, passing, very nearly brought them one." }
        ] },
        { t: "Haru. I know a place.", notes: 3, then: [
          { s: 'haru', f: 'surprised', t: "...Do you mean what I think you mean?" },
          { s: 'solar', t: "For research." }
        ] }
      ] },
      { place: 'Port Island Station · Wild-Duck Burger', time: 'Evening', music: 'joy' },
      { n: "Wild-Duck Burger was loud and bright and smelled of fryer oil and was full of students in damp coats, and Haru Okumura walked through the door in her good dress and her pearl earrings like she was arriving at the opera." },
      { s: 'haru', f: 'happy', t: "Two Mallard Mountains, please. And two of the large fries. And... Solar-chan, what is the very biggest drink?" },
      { n: "It came to two thousand eight hundred yen. Haru paid for it herself, counting the coins out one at a time onto the little tray with enormous care, and when the girl behind the counter gave her the change Haru thanked her so sincerely that the girl blushed." },
      { s: 'haru', f: 'blushing', t: "I paid for our date. With money I grew. Do you understand? Nobody signed anything." },
      { n: "She started on her burger with a knife and fork. Solar ate hers with her hands. Halfway through, Haru put her cutlery down, looked at Solar's hands, looked at her own, and picked the whole thing up, and took a bite so big she had to cover her mouth, and her eyes over her fingers were enormous and delighted and a little shocked at herself." },
      { choose: [
        { t: "(Wipe the sauce off her chin with your thumb.)", notes: 3, then: [
          { n: "There was sauce on her chin. Solar reached across the table and wiped it away with her thumb without thinking about it, and then thought about it a great deal, all at once, because Haru had gone completely pink and was looking at her mouth." },
          { s: 'haru', f: 'blushing', t: "...That was much better than the restaurant would have been." }
        ] },
        { t: "Sugimura would be horrified.", notes: 3, then: [
          { s: 'haru', f: 'happy', t: "Fufu. Wouldn't he?" },
          { n: "She took another enormous bite, looking Solar right in the eye while she did it, like a toast." }
        ] }
      ] },
      { n: "They shared the fries. They shared the enormous drink, two straws, their foreheads nearly touching over the lid. On the way out Haru stopped at the counter and asked, very seriously, for a copy of the menu to keep, and the manager, bewildered, gave her one, and she carried it home against her chest like a diploma." }
    ] },
    { title: 'bulbs', place: 'Gekkoukan High · Rooftop Garden', scene: [
      { n: "The garden on the roof was asleep. Haru had tucked every bed under straw in November, and now there was a skin of old snow over the straw, and the planters sat in a row along the fence like children who had been put to bed and were pretending very hard not to be awake." },
      { n: "Haru was kneeling at the end of the last bed with a paper bag and a trowel and her pink scarf wound up to her nose. She'd cleared one small square of straw down to the dark earth. Her breath went up in little clouds while she worked." },
      { s: 'haru', f: 'happy', t: "Tulips. They go in now, in the cold. They have to sleep through the winter or they won't come up at all. Isn't that strange? They need the cold." },
      { n: "She tipped the bag into her palm. The bulbs were papery and brown and unpromising, like small onions that had given up, and she held them out to Solar in her cupped gloves as if they were eggs." },
      { choose: [
        { t: "(Kneel down and plant them with her.)", notes: 3, then: [
          { n: "Solar knelt in the cold beside her. The ground was so cold it hurt through her tights. Haru showed her, pointed end up, twice as deep as the bulb is tall, and their hands kept meeting in the little hole, gloved and clumsy, and neither of them made any effort at all to stop that from happening." }
        ] },
        { t: "What color will they be?", notes: 2, then: [
          { s: 'haru', f: 'blushing', t: "The shop said mixed. I asked for red. The man said mixed. I'm hoping. Fufu." }
        ] }
      ] },
      { n: "They planted twelve. Haru pressed the earth down over each one with the flat of her palm, gently, and said something to every single one, too quietly for Solar to hear. Then she sat back on her heels and looked at the little square of dirt for a long time." },
      { s: 'haru', f: 'sad', t: "They'll come up in April." },
      { n: "She didn't say the rest of it. She didn't have to. The green hour would close at the end of winter, and the way home with it, and Haru would go through, and in April the tulips would come up on a roof in a world she wasn't in." },
      { s: 'solar', t: "Haru. Why plant something you won't see?" },
      { s: 'haru', f: 'neutral', t: "Because you'll see it." },
      { s: 'haru', f: 'blushing', t: "I wanted to leave you something that keeps coming back. Every spring. Without my having to be here to make it." },
      { choose: [
        { t: "(Take her cold hands and hold them against your face.)", notes: 3, then: [
          { n: "Her gloves were wet with earth. Solar took her hands anyway and held them against her own cheeks, cold and gritty, and Haru's eyes filled, and she laughed, and didn't pull away." },
          { s: 'haru', f: 'blushing', t: "You'll have dirt on your face, Solar-chan." },
          { s: 'solar', t: "Good." }
        ] },
        { t: "I'll talk to them. Every day. The way you do.", notes: 3, then: [
          { s: 'haru', f: 'surprised', t: "...You will?" },
          { s: 'solar', t: "Mostly encouragement. And a little bit about you." },
          { n: "It was what Haru had texted her in June, the very first night, about the tomatoes. Haru recognized it. Her face crumpled and then cleared, like weather passing over the bay." }
        ] }
      ] },
      { n: "Haru took the thermos out of her bag after that, and the two porcelain cups wrapped in their tea towel, and they sat with their backs against the stairwell wall under a blanket she had also, somehow, fit in the bag, and drank coffee and watched the sky go pink over the water." },
      { n: "When the cups were empty Haru tucked the blanket in around Solar's knees, carefully, all the way along, the way she'd tucked the straw over the beds. Then she tucked herself in beside her. Then she put her head on Solar's shoulder and announced, very seriously, that she was keeping Solar warm, the way the straw kept the soil warm, so that something would come up in spring." },
      { s: 'haru', f: 'blushing', t: "Fufu. That was a little forward. I've been practicing being forward." },
      { s: 'solar', t: "How's it going?" },
      { s: 'haru', f: 'happy', t: "Very well, I think." }
    ] },
    { title: 'high score', place: 'Paulownia Mall · Game Panic', music: 'joy', scene: [
      { n: "Haru had never been inside an arcade. She stood just inside the doors of Game Panic in her coat and her pink scarf with her hands clasped under her chin while the noise rolled over her, a hundred machines singing a hundred different songs, lights strobing, somebody shrieking at the racing game, and her face did the thing it had done at the burger counter in June, wide-eyed, reverent, like a pilgrim." },
      { s: 'haru', f: 'happy', t: "Oh, it's so loud! Solar-chan, it's wonderful. Everything is trying so hard." },
      { n: "She lost four hundred yen to the claw machine with perfect serenity. She lost at the rhythm game, badly, apologizing to the screen every time she missed a note. She was not, Solar thought fondly, built for this." },
      { n: "Then she saw the punching machine." },
      { n: "It stood in the back corner, a tall red cabinet with a padded bag that swung down on a hinge and a scoreboard at the top, where one high score had been sitting for so long the digits were burned into the screen. 978. Under it, in blinking letters, a set of initials. AKI." },
      { s: 'haru', f: 'serious', t: "...Is that Akihiko-senpai?" },
      { choose: [
        { t: "It's been up there since summer. Nobody can touch it.", notes: 3, then: [
          { s: 'haru', f: 'serious', t: "I see." },
          { n: "She took off her coat. She folded it, neatly, and handed it to Solar. She took off her scarf and folded that too. She rolled the sleeves of her sweater up two turns each, exactly even, and fed a hundred-yen coin into the machine with the face of a woman about to settle an old and very personal grievance." }
        ] },
        { t: "Haru. Please don't.", notes: 2, then: [
          { s: 'haru', f: 'happy', t: "Don't what, Solar-chan? I'm only looking." },
          { n: "She was not only looking. She was already taking off her coat." }
        ] }
      ] },
      { n: "She didn't punch it, exactly. She swung. Two-handed, from the hip, the way she'd swung the axe on the roof in September, as if the bag were a shadow that wanted her garden. The sound it made was not a sound an arcade machine should make. The whole cabinet rocked back on its feet. The screen went white, and then it said 1140, and then it started playing a fanfare." },
      { n: "Every head in Game Panic turned. A boy at the racing game took his hands off the wheel and crashed and didn't notice. The attendant came out from behind the prize counter, looked at the machine, looked at Haru, standing there flushed and pleased in her sweater with her hair in her eyes, and very slowly went back behind the prize counter." },
      { s: 'haru', f: 'blushing', t: "Was that too much? I think that was too much." },
      { choose: [
        { t: "You're terrifying. I love it.", notes: 3, then: [
          { s: 'haru', f: 'blushing', t: "Both at once. Fufu. You keep saying that, and I keep believing you." },
          { n: "She came and took her coat back and then didn't put it on, just stood very close with it over her arm, still breathing a little fast, looking at Solar's mouth like she was considering a second high score." }
        ] },
        { t: "(Enter her initials. Change the middle one.)", notes: 3, then: [
          { n: "The machine wanted three letters. Solar put in an H. Then she scrolled past every letter of the alphabet to the little heart at the very end. Then an S. Haru looked at the screen, and worked it out, and went pink all the way down into her collar." },
          { s: 'haru', f: 'blushing', t: "...Is that allowed? Two people?" },
          { s: 'solar', t: "It is now." }
        ] }
      ] },
      { n: "Akihiko found out on Monday. Someone from the boxing club had seen it. He went to Game Panic after practice and stood in front of the machine for a long time, and then texted Solar a photograph of the scoreboard with no caption, and then, four minutes later, rematch." },
      { n: "Haru, when Solar showed her the text, smiled the sweet, gentle, pleasant smile of a girl from a very good family, and said Fufu, of course, whenever he likes, and the hair on Solar's arms stood up, and she was so in love with her she could barely see." }
    ] },
    { title: 'the letter', place: 'Iwatodai Dorm · Lounge', scene: [
      { n: "Haru stayed after dinner on Thursdays now. Everyone had drifted upstairs one by one, Junpei last, with a plate of leftovers and a look over his shoulder that Solar pretended not to see, and the lounge had gone quiet and warm, the lamps low, the radiator ticking, the window black with cold." },
      { n: "Haru had a letter. She'd had it all evening, folded small in the pocket of her cardigan, and she kept touching it through the wool the way you'd touch a bruise to see if it still hurt." },
      { s: 'haru', f: 'sad', t: "When I go home, the first thing I have to do is end my engagement." },
      { s: 'haru', f: 'sad', t: "I've written down what I'm going to say. To Sugimura, and his father, and the board. I've written it eleven times. It still sounds like an apology." },
      { choose: [
        { t: "Read it to me.", notes: 3, then: [
          { n: "She unfolded it. Her hands weren't steady. She read it in her soft, careful voice, and it was polite and gracious and thanked everyone for their consideration, and regretted any inconvenience, and hoped the two families would remain on good terms, and Solar listened to every word of it and felt something in her chest go tight and hot." }
        ] },
        { t: "You don't owe him an apology. Not one word of one.", notes: 3, then: [
          { s: 'haru', f: 'surprised', t: "...Not one word?" },
          { s: 'solar', t: "Not one." },
          { n: "Haru looked down at the letter in her lap, eleven drafts' worth of courtesy, as though it belonged to someone else." }
        ] }
      ] },
      { s: 'haru', f: 'sad', t: "I don't know how to say it any other way. I was raised to be pleasant. I was raised to smile while they decided things. It's in my mouth, Solar-chan. I can't get it out." },
      { s: 'solar', t: "You got it out on the roof. In September. With an axe." },
      { s: 'haru', f: 'sad', t: "That was a shadow. This is a room full of people in suits who've known me since I was six." },
      { n: "She folded the letter again, and again, smaller and smaller, until it couldn't be folded anymore, and sat holding it in her fist. Solar took the pen off the coffee table and tore a page from the back of Junpei's abandoned math workbook and set both in front of her." },
      { s: 'solar', t: "Write it again. The real one. Not for them. For you." },
      { n: "It took a long time. Haru wrote and crossed out and wrote again, her round, apologetic handwriting going harder and straighter as she went, while the kitchen clock ticked toward eleven. At the end there were four lines. She read them out loud without looking up." },
      { s: 'haru', f: 'serious', t: "I will not marry Sugimura. I did not choose him, and I never will. I have chosen someone else, in another world, and I am not sorry. That is all." },
      { n: "The radiator ticked. Haru stared at the page like it had been written by a stranger she admired." },
      { choose: [
        { t: "That's the one.", notes: 3, then: [
          { s: 'haru', f: 'blushing', t: "...It is, isn't it. It doesn't apologize once." },
          { s: 'haru', f: 'happy', t: "I want to read it to them. I want to see their faces. Oh, Solar-chan, I think I'm going to enjoy it." }
        ] },
        { t: "(Kiss the back of her ink-stained hand.)", notes: 3, then: [
          { n: "There was ink along the side of her hand from dragging it through the wet lines. Solar lifted it and kissed it there, on the smudge, and Haru made a very small sound and put her other hand over her mouth." },
          { s: 'haru', f: 'blushing', t: "...I'm going to think about that in the boardroom. That's going to help enormously." }
        ] }
      ] },
      { n: "She threw the old letter, all eleven drafts of it folded into one hard little square, into the wastebasket by the couch without looking. It went in clean. The new one went into her cardigan pocket, over her heart." },
      { n: "Then she leaned into Solar's side and let her head drop onto her shoulder and stayed there, warm and heavy, her breathing slowing by degrees, until the lamps in the lounge clicked off on their timer and neither of them got up to turn them back on." }
    ] }
  ],
  // P3's Christmas Eve: on 12/24 evening, if Solar is romancing several people (rank 9+), she picks one; this plays.
  christmas: { place: 'Paulownia Mall · Rooftop Garden', scene: [
    { n: "Paulownia Mall had put lights in its rooftop garden for the holidays, white ones, thousands of them, wound through the bare trees and along the railings and over the empty planters, so that the whole roof looked dusted with something that glowed. Couples everywhere. Christmas Eve here was for couples. Haru had read about this in a magazine, she said, very seriously, in preparation." },
    { n: "She was waiting by the biggest tree in a cream coat with her pink scarf and a small fur hat, holding a paper shopping bag in both hands in front of her knees, and when she saw Solar coming across the roof she lit up so completely that the couple next to her turned to see who it was for." },
    { s: 'haru', f: 'happy', t: "Solar-chan! You came! I mean. Of course you came. I've been here for forty minutes. Fufu." },
    { n: "It had started to snow on the walk over, the small dry kind that didn't settle, only drifted through the lights and caught in Haru's hair and the fur of her hat like sugar." },
    { s: 'haru', f: 'blushing', t: "I've been to a great many Christmas parties. My father gave one every year. Two hundred people. A string quartet. Sugimura always stood beside me, so the photographers could get us both." },
    { s: 'haru', f: 'neutral', t: "This is my first Christmas Eve that's a date. The first one that's mine." },
    { n: "She held out the bag. Inside, wrapped in tissue and tied with garden twine, was a pair of gardening gloves, good leather, already soft, as if someone had worn them in for her. On the cuff of the right one, in pink thread, in careful and slightly crooked stitches, it said SOLAR." },
    { s: 'haru', f: 'blushing', t: "I embroidered them myself. I'm not very good. I unpicked the R four times. Look inside the left one." },
    { n: "Inside the left cuff, much smaller, so small that only the person wearing the glove would ever see it, it said, my own choice." },
    { s: 'haru', f: 'neutral', t: "So you can keep the garden. After. And every time you put them on, you'll know." },
    { choose: [
      { t: "(Give her a packet of tomato seeds. You labeled it yourself.)", notes: 3, then: [
        { n: "It was the cheap kind from the hardware store by the station, but Solar had written on the back of the packet in her best block capitals. HARU. PLANT IN SPRING. ANY WORLD." },
        { s: 'haru', f: 'surprised', t: "...Any world." },
        { n: "Haru held the little packet in both hands like a ring box, and her eyes filled, and she laughed, and said the seeds would be very confused about which world was theirs, and that she would explain it to them, gently, as many times as it took." }
      ] },
      { t: "(Give her a new trowel. Red handle. A very good edge.)", notes: 3, then: [
        { s: 'haru', f: 'happy', t: "Oh! Oh, it's beautiful. Look at the edge on it, Solar-chan." },
        { n: "She ran a gloved thumb along it with the same expert, alarming tenderness she had once shown a battle axe, and then hugged the trowel to her chest, and then hugged Solar, trowel and all, carefully, from slightly to one side." }
      ] },
      { t: "(Give her a Wild-Duck Burger gift card. Ten thousand yen.)", notes: 2, then: [
        { s: 'haru', f: 'happy', t: "Ten thousand! That's so much research! Fufu. I'll need a research partner." },
        { s: 'solar', t: "I'm available." }
      ] }
    ] },
    { n: "They found a bench at the far end of the roof, away from the tree and the couples and the speakers playing carols, where the lights gave out into the dark and you could see the whole bay, black and glittering, and the bridge strung across it like a necklace." },
    { s: 'haru', f: 'neutral', t: "When I woke up on that roof in June, I thought I'd been punished. Thrown away somewhere. I thought, well, at least there are plants." },
    { s: 'haru', f: 'blushing', t: "And then a girl came through the door and knelt down in the dirt with me without asking why. And I've been choosing things ever since. Burgers. Coffee. Axes. You." },
    { choose: [
      { t: "You saved me too, you know. I just hadn't noticed I needed it.", notes: 3, then: [
        { s: 'haru', f: 'surprised', t: "...I did?" },
        { s: 'solar', t: "I hadn't had dirt under my nails or a reason to smile in years. You gave me both on the first day." },
        { s: 'haru', f: 'blushing', t: "Fufu... I'll take credit for the dirt." }
      ] },
      { t: "(Don't say anything. Just take her hand.)", notes: 3, then: [
        { n: "Solar took her hand. Haru looked down at it, and then at Solar, and then out at the bay, and held on with a grip much, much stronger than anyone who had only ever seen her smile would have guessed." }
      ] }
    ] },
    { s: 'haru', f: 'serious', t: "Solar-chan. I'm going home when the green hour closes. I can't change that. But I want to promise you something, and I want you to hold me to it." },
    { s: 'haru', f: 'blushing', t: "In every world, I'll choose you. Every time. Even in the ones where we haven't met yet. Especially those." },
    { s: 'solar', t: "Every time?" },
    { s: 'haru', f: 'happy', t: "Every time. It's the only decision I've never had to think about." },
    { n: "She took Solar's face in her gloved hands, the way she had on the roof in November, carefully, like something rare from the garden, and kissed her under the last of the lights with the snow coming down around them, soft and slow and so sure of itself that Solar forgot, for a long time, that there was any such thing as a world that ended." },
    { n: "When they drew apart there was snow on Haru's eyelashes and her hat had gone crooked and she was smiling, not the pleasant, practiced smile from the dinner parties but the other one, the real one, a little wild." },
    { s: 'haru', f: 'happy', t: "Merry Christmas, Solar-chan. That's the first time I've ever meant it." }
  ] },
  romance: true,
  cast: { ann: 'Ann', makoto: 'Makoto', shinjiro: 'Shinjiro', akihiko: 'Akihiko' },
  texts: [
    { id: 'haru-1a', rank: 1, days: 1, slot: 1, msgs: [
      { from: 'haru', t: 'Good evening, Solar-chan! This is Haru. 🌱' },
      { from: 'haru', t: 'The tomatoes are doing much better already. I talked to them for an hour. Fufu.' }
    ], reply: [
      { t: 'What did you talk about?', notes: 3, then: [{ from: 'haru', t: 'Mostly encouragement. And a little bit about you.' }] },
      { t: "I'll bring water tomorrow.", notes: 2, then: [{ from: 'haru', t: 'Thank you! They will be so pleased. 🍅' }] }
    ] },
    { id: 'haru-2a', rank: 2, days: 1, slot: 1, msgs: [
      { from: 'haru', t: 'I have completed my market research on Wild-Duck Burger.' },
      { from: 'haru', t: 'Conclusion: I would like to go again. For further research.' }
    ], reply: [
      { t: "Strictly for research.", notes: 3, then: [{ from: 'haru', t: 'Strictly! Fufu. Saturday?' }] },
      { t: 'You just like the fries.', notes: 2, then: [{ from: 'haru', t: '...I will neither confirm nor deny.' }] }
    ] },
    { id: 'haru-4a', rank: 4, days: 1, slot: 1, msgs: [
      { from: 'haru', t: 'Thank you for listening today. About the engagement.' },
      { from: 'haru', t: "I've never said those things out loud to anyone who understood." }
    ], reply: [
      { t: 'You never have to marry someone you didn\'t choose.', notes: 3, then: [{ from: 'haru', t: '...I am going to write that down and keep it in my wallet.' }] },
      { t: "I'm always here, Haru.", notes: 3, then: [{ from: 'haru', t: '🌷' }] }
    ] },
    { id: 'haru-6a', rank: 6, days: 1, slot: 1, msgs: [
      { from: 'haru', t: "I keep thinking about what you said. That it's all right to love him and be angry at him at the same time." },
      { from: 'haru', t: 'I think I needed permission. Isn\'t that silly?' }
    ], reply: [
      { t: "It's not silly. You have it.", notes: 3, then: [{ from: 'haru', t: 'Thank you, Solar-chan. Truly.' }] },
      { t: 'I needed it too, once.', notes: 3, then: [{ from: 'haru', t: 'Then we will give it to each other. As many times as we need.' }] }
    ] },
    { id: 'haru-7a', rank: 7, days: 1, slot: 1, msgs: [
      { from: 'haru', t: 'Was I too much last night? With the axe?' },
      { from: 'haru', t: 'Makoto always says I get a little "enthusiastic."' }
    ], reply: [
      { t: 'You were incredible.', notes: 3, then: [{ from: 'haru', t: 'Oh! Fufu. Thank you. I was rather incredible, wasn\'t I.' }] },
      { t: 'You were terrifying. I loved it.', notes: 3, then: [{ from: 'haru', t: 'Both can be true! 💐' }] }
    ] },
    { id: 'haru-8a', rank: 8, days: 1, slot: 1, msgs: [
      { from: 'haru', t: 'Akihiko-senpai says Shinjiro-senpai\'s nurse let him smell the soup.' },
      { from: 'haru', t: 'She said his heart rate went up a little. I choose to believe he liked it.' }
    ], reply: [
      { t: 'He did. I know he did.', notes: 3, then: [{ from: 'haru', t: 'Then I will make it every week until he can taste it.' }] },
      { t: 'You\'re so kind, Haru.', notes: 2, then: [{ from: 'haru', t: 'I learned it from people like you.' }] }
    ] },
    { id: 'haru-9r', rank: 9, route: 'romance', days: 1, slot: 1, msgs: [
      { from: 'haru', t: 'I have never chosen anyone before.' },
      { from: 'haru', t: 'I chose you. It feels like the first real decision I have ever made.' }
    ], reply: [
      { t: 'I choose you too, Haru.', notes: 3, then: [{ from: 'haru', t: '🌹' }, { from: 'haru', t: 'Goodnight, Solar.' }] },
      { t: "It was a good decision.", notes: 3, then: [{ from: 'haru', t: 'The best one. Fufu.' }] }
    ] },
    { id: 'haru-9f', rank: 9, route: 'friend', days: 1, slot: 1, msgs: [
      { from: 'haru', t: 'Best friends! I have only had one before. I will try very hard to be a good one.' }
    ], reply: [
      { t: 'You already are.', notes: 3, then: [{ from: 'haru', t: 'Oh! Then I will try to be even better. Watch out. 🌻' }] },
      { t: 'Bring coffee and you\'re perfect.', notes: 3, then: [{ from: 'haru', t: 'That is a very easy standard. Fufu.' }] }
    ] }
  ],
  ranks: [
    { after: '6/10', title: '1: the planters', place: 'Gekkoukan High · Rooftop', scene: [
      { n: "Gekkoukan's roof had planters along the south fence that nobody had touched in years. Cracked terracotta, dry soil, a few brown stalks that might once have been something. Solar had never thought about them. Nobody had." },
      { n: "On Wednesday afternoon, somebody was watering them." },
      { n: "A girl in a uniform from some other school, a dark blazer with a red plaid skirt, kneeling on the concrete in the June heat with a plastic watering can she'd clearly found in a supply closet, talking to the soil in a soft, encouraging voice, like a nurse with a patient." },
      { n: "Short, fluffy hair, a little curled at the ends. A pink scarf, somehow, in this heat. She looked up when the door clanged and smiled at Solar so warmly and so immediately that Solar almost looked behind herself to check who it was for." },
      { s: 'haru', f: 'happy', t: 'Oh! Hello! I hope I\'m not intruding. They looked so thirsty.' },
      { choose: [
        { t: "Who are you talking to?", notes: 2, then: [{ s: 'haru', f: 'happy', t: 'The tomatoes. Or, the tomatoes they will be, if I can convince them. Plants respond to kindness, you know. People think that\'s silly, but it\'s true.' }] },
        { t: "You're not from Gekkoukan.", notes: 3, then: [
          { s: 'haru', f: 'surprised', t: '...No. I\'m not. I woke up on this roof two days ago in the middle of the night. Everything was green. There were coffins.' },
          { s: 'haru', f: 'sad', t: 'I didn\'t know what else to do, so I started gardening. Isn\'t that strange?' }
        ] }
      ] },
      { s: 'haru', f: 'happy', t: "I'm Haru Okumura. I go to Shujin Academy, in Tokyo. Which does not appear to exist here." },
      { n: "She said it pleasantly, the way you'd mention a slight change in the weather. Her hands, Solar noticed, were trembling very slightly on the watering can." },
      { choose: [
        { t: "(Kneel down and help her.)", notes: 3, then: [
          { n: "Solar knelt on the hot concrete and took a handful of the dry soil and broke it up with her fingers, the way she'd seen people do on television. Haru watched her for a moment, and then her shoulders came down, all at once, like a held breath let go." },
          { s: 'haru', f: 'happy', t: '...Thank you. Gently, like that. Yes.' }
        ] },
        { t: "Are you all right?", notes: 2, then: [
          { s: 'haru', f: 'sad', t: "I'm frightened, if I'm honest. But the plants need me. It helps to be needed." }
        ] }
      ] },
      { n: "They worked until the bell rang below them. Haru knew the names of everything, the soil and the roots and the little green weeds that weren't really weeds. She explained it all in her soft, delighted voice, and Solar didn't understand half of it, and found she didn't care." },
      { s: 'haru', f: 'happy', t: "Will you come back? Tomorrow? I would like the tomatoes to meet you properly." },
      { n: "Solar said yes. On the stairs she realized she had dirt under her nails and a smile on her face, and that she couldn't remember the last time she'd had either." }
    ] },

    { after: '6/24', title: '2: big bang burger', place: 'Port Island Station · Wild-Duck Burger', scene: [
      { n: "Haru had never eaten fast food in her life. She'd announced this on the roof on Monday with the gravity of a confession, and Solar had immediately decided that this was a problem that needed fixing." },
      { n: "Wild-Duck Burger by Port Island Station was loud and bright and smelled like fryer oil, and Haru stood in front of the menu board with her hands clasped and her eyes very wide, like a child at a museum." },
      { s: 'haru', f: 'happy', t: "My father's company owns a burger chain, you know. Big Bang Burger. I've never been allowed to eat there." },
      { s: 'haru', f: 'serious', t: "So this is research. Competitive analysis. I'm taking notes." },
      { n: "She had, in fact, brought a notebook. She took notes on the fries." },
      { choose: [
        { t: "Get the biggest burger. For science.", notes: 3, then: [
          { s: 'haru', f: 'happy', t: "For science! Yes!" },
          { n: "The biggest burger was called the Mallard Mountain. It had four patties. Haru ate the entire thing with a knife and fork, delicately, and then asked if she could have another." }
        ] },
        { t: "Your father owns a burger chain?", notes: 2, then: [{ s: 'haru', f: 'sad', t: "He owns many things. He's very busy. I don't see him much." }] }
      ] },
      { n: "She talked about Big Bang Burger's menu in enormous detail. The Big Bang Challenge. The galactic theme. The mascot. She clearly knew everything about a place she'd never been allowed to set foot in, the way you know everything about a house you can see from the street." },
      { s: 'haru', f: 'sad', t: "I used to walk past them on the way home from school and look in the windows. All the students eating together, laughing. I wanted that so badly." },
      { n: "Solar knew that window. She'd stood outside it in a dozen cities. She didn't say so. She just slid her fries across the table." },
      { s: 'haru', f: 'surprised', t: "...You're giving me your fries?" },
      { choose: [
        { t: "That's what friends do here.", notes: 3, then: [
          { s: 'haru', f: 'blushing', t: '...Friends.' },
          { n: "She said the word carefully, like she was holding something delicate she'd been given without asking." }
        ] },
        { t: "You need more data.", notes: 2, then: [{ s: 'haru', f: 'happy', t: "Ah! Of course! For research. Thank you, Solar-chan." }] }
      ] },
      { n: "Solar-chan. It came out of her naturally, like she'd been saying it for years. Solar didn't correct her. She decided she liked it." }
    ] },

    { after: '7/8', title: '3: coffee', place: 'Iwatodai Dorm · Kitchen', scene: [
      { n: "Haru had discovered the dorm kitchen, and the dorm kitchen would never be the same." },
      { n: "She'd arrived on Saturday morning with a paper bag of coffee beans from a shop in Paulownia she'd spent an hour interrogating, a hand grinder she'd bought on the spot, and a glass pour-over contraption that looked like a lab experiment. She set them out on the counter with the reverence of someone setting up an altar." },
      { s: 'haru', f: 'happy', t: "There's a café in my neighborhood back home. The owner taught me. It's very calming, if you do it properly." },
      { n: "She ground the beans slowly. The whole kitchen filled with the smell of it, dark and warm and a little like chocolate, and people started drifting downstairs one by one like cartoon characters following a scent." },
      { s: 'shinjiro', f: 'neutral', t: "...What is that." },
      { n: "Shinjiro stood in the doorway in a gray t-shirt and his beanie, looking at the pour-over setup with the deep suspicion of a man whose kitchen had been invaded." },
      { s: 'haru', f: 'happy', t: "Good morning! I'm Haru. Would you like a cup? I'm told it's quite good." },
      { choose: [
        { t: "Shinji, she's a friend. Be nice.", notes: 2, then: [{ s: 'shinjiro', f: 'neutral', t: "I'm always nice." }] },
        { t: "Try it, Shinjiro-senpai.", notes: 3, then: [{ s: 'shinjiro', f: 'neutral', t: "...Fine. One." }] }
      ] },
      { n: "He tried it. He stood very still. He tried it again." },
      { s: 'shinjiro', f: 'surprised', t: "...Where'd you learn to do this?" },
      { s: 'haru', f: 'happy', t: "A café. And practice. And a lot of patience." },
      { s: 'shinjiro', f: 'neutral', t: "Patience. Yeah. That's the trick with everything." },
      { n: "They talked for an hour. Him about broth, her about roast profiles, both of them nodding very seriously at each other like diplomats from two neighboring countries. Solar sat at the table with her coffee and watched two of the gentlest, most guarded people she knew discover they spoke the same language." },
      { s: 'haru', f: 'happy', t: "Solar-chan. How is it? Your cup?" },
      { choose: [
        { t: "Best coffee I've ever had.", notes: 3, then: [{ s: 'haru', f: 'blushing', t: "Oh! Fufu. That's very kind." }] },
        { t: "I usually drink canned coffee from the vending machine.", notes: 2, then: [
          { s: 'haru', f: 'surprised', t: "...Oh, Solar-chan. Oh no. We have so much work to do." },
          { s: 'shinjiro', f: 'neutral', t: "Same with her cooking. She's a project." }
        ] }
      ] }
    ] },

    { after: '7/22', title: '4: the engagement', music: 'tender', place: 'Gekkoukan High · Rooftop', scene: [
      { n: "The tomatoes had come in. Small and hard and green, but there, a dozen of them, hanging off vines that had been dead brown sticks a month ago. Haru was sitting on the concrete next to them with her knees drawn up, not looking at them." },
      { n: "She'd been quiet all week. Not her normal quiet, the soft, contented hum of someone happy to be busy. A different one. Heavy." },
      { s: 'haru', f: 'sad', t: "Solar-chan. May I tell you something unpleasant?" },
      { s: 'haru', f: 'sad', t: "At home, I'm engaged. To a man named Sugimura. My father arranged it. For the company. I've met him four times. He's very rude to waiters." },
      { s: 'haru', f: 'serious', t: "I didn't choose him. Nobody asked me. My father signed something, and now my whole life is decided, and I'm expected to smile about it." },
      { n: "She smiled while she said it. A perfect, pleasant, practiced smile, the kind you'd wear to a dinner party where you hated everyone. Solar watched it and felt something cold go down her back, because she knew that smile, and she didn't know how she knew it." },
      { n: "A cream dress. A smile her mother chose. A man she was promised to. The sea. Someone sleeping across the hall. None of it was hers, and all of it was, the way Elizabeth had said, in the elevator, in the blue." },
      { choose: [
        { t: "I think I know what that feels like.", notes: 3, then: [
          { s: 'haru', f: 'surprised', t: '...You do?' },
          { n: "Solar told her what she could. Not much. A feeling, mostly. A version of herself somewhere else, in a cream dress, with her whole life decided. Haru listened like it was the most important thing anyone had ever told her." },
          { s: 'haru', f: 'sad', t: "...Then you understand. Oh, Solar-chan. You actually understand." }
        ] },
        { t: "You don't have to smile about it. Not here.", notes: 3, then: [
          { s: 'haru', f: 'sad', t: '...' },
          { n: "The smile stayed for a second longer. Then it went, all at once, and underneath it her face was tired and young and angry, and she let it be that way, for once, in front of someone." },
          { s: 'haru', f: 'serious', t: "...I hate him. I hate all of it. I've never said that out loud." }
        ] }
      ] },
      { s: 'haru', f: 'neutral', t: "Up here, nobody's decided anything for me. Not the tomatoes. Not you." },
      { s: 'haru', f: 'blushing', t: "It's the first time in my life I've felt like my choices were my own." },
      { n: "She picked one of the small green tomatoes, too early, and held it in her palm, and laughed at herself for picking it. Then she gave it to Solar, solemnly, like a ring." }
    ] },

    { after: '8/12', title: '5: crepes with ann', music: 'sun', place: 'Paulownia Mall · Crepe Stand', scene: [
      { n: "Ann had insisted. Ann, upon learning that there was another Phantom Thief in Iwatodai, a whole other girl from home, had made a sound like a kettle and demanded an immediate summit at the crepe stand." },
      { s: 'ann', f: 'happy', t: "HARU! Oh my god! You're here too!" },
      { s: 'haru', f: 'happy', t: "Ann-chan! Oh, I'm so glad! I thought I was the only one!" },
      { n: "They hugged in the middle of the mall, two girls in two different uniforms from a school that didn't exist, and the sock-shop lady looked out to check on them again, and Solar bought three crepes and stood back and let them have it." },
      { s: 'ann', f: 'happy', t: "Sunflare, you didn't tell me you knew Haru!" },
      { s: 'haru', f: 'surprised', t: "Sunflare? Is that your codename? Solar-chan, you have a codename?" },
      { choose: [
        { t: "Ann gave it to me.", notes: 2, then: [{ s: 'haru', f: 'happy', t: "It's perfect. Ann always has the best taste." }] },
        { t: "Apparently I'm a Phantom Thief now.", notes: 3, then: [{ s: 'haru', f: 'happy', t: "Of course you are. You stole my whole rooftop garden. Fufu." }] }
      ] },
      { n: "They talked about home for an hour. About a café with good curry, and a cat called Morgana who was not, apparently, a cat, and a boy with glasses they both clearly adored in a way Solar decided not to ask about. About Makoto, who had come through for one night and planned the next six months of the dorm's training schedule with Mitsuru before fading at dawn." },
      { s: 'ann', f: 'sad', t: "Futaba says she's getting close. To a way home. For me first, I think. Then Haru." },
      { s: 'haru', f: 'sad', t: '...Oh.' },
      { n: "Haru put her crepe down. She looked at Solar, and then away, and then back at Solar again, the way you look at a door you know you'll have to walk through eventually." },
      { choose: [
        { t: "That's good news. Isn't it?", notes: 2, then: [{ s: 'haru', f: 'sad', t: "It is. It should be. I'm very happy for Ann-chan." }] },
        { t: "(Take Haru's hand under the table.)", notes: 3, then: [
          { n: "Haru's hand was cold. She held on. Ann, across the table, noticed, and said nothing, and smiled into her crepe with an expression of enormous, unbearable delight." }
        ] }
      ] }
    ] },

    { after: '9/2', title: '6: father', music: 'tender', place: 'Gekkoukan High · Rooftop', scene: [
      { n: "September. The tomatoes were red now. Haru picked them one at a time and set them in a basket and didn't say anything for a long while. The wind off the bay was cooler than it had been. Summer was turning." },
      { s: 'haru', f: 'sad', t: "Before I fell through, my father died." },
      { n: "She said it to the basket. Plainly. Like reading it off a card." },
      { s: 'haru', f: 'sad', t: "In the middle of a press conference. In front of everyone. Someone did it to him. It wasn't an accident." },
      { s: 'haru', f: 'serious', t: "He wasn't a good man, Solar-chan. He hurt people for his company. He sold me to Sugimura like a building. And I'm so angry at him. And I miss him so much I can't breathe." },
      { n: "She said it all very evenly, and then she stopped, and her hands stopped, and the basket sat between them full of red tomatoes she'd grown herself." },
      { choose: [
        { t: "You're allowed to love him and be angry at him.", notes: 3, then: [
          { s: 'haru', f: 'surprised', t: '...Both?' },
          { s: 'haru', f: 'sad', t: "Both. At the same time. Is that allowed?" },
          { n: "Solar nodded. Haru looked at her for a long moment, and then put her face in her hands and cried, finally, properly, for the first time since she'd fallen through, and Solar sat next to her and put an arm around her shoulders and let her." }
        ] },
        { t: "My parents died when I was little.", notes: 3, then: [
          { s: 'haru', f: 'surprised', t: '...Oh, Solar-chan.' },
          { n: "Haru reached over and took both of Solar's hands in hers, dirt and all, and held them, and they sat with it together, two girls who'd been left by the people who were supposed to stay." }
        ] }
      ] },
      { s: 'haru', f: 'neutral', t: "Thank you. For letting me be ugly about it." },
      { n: "She wasn't ugly about it. She'd never been ugly about anything. But Solar understood what she meant, and didn't argue, and helped her carry the tomatoes down." }
    ] },

    { after: '9/23', title: '7: milady', place: 'Gekkoukan High · Rooftop · The Dark Hour', scene: [
      { n: "Midnight. The green hour. The school roof washed in that sick, swollen light, and something crawling up the side of the building toward the garden, black and dripping and full of grasping hands." },
      { n: "Haru was standing between it and her tomatoes. She was not wearing her uniform. She was in something black and elegant, a long-coated outfit with a wide-brimmed hat and a mask, and she was holding an axe that was taller than she was, and she was smiling." },
      { s: 'haru', f: 'serious', t: "Solar-chan! Stay behind me, please. It wants my garden." },
      { s: 'haru', f: 'serious', t: "It cannot have my garden." },
      { choose: [
        { t: "I'm right beside you, Haru.", notes: 3, then: [{ s: 'haru', f: 'happy', t: "Fufu. Then let's be rude to it together." }] },
        { t: "Is that an AXE?", notes: 2, then: [{ s: 'haru', f: 'happy', t: "It's a very nice axe!" }] }
      ] },
      { n: "What happened next, Solar would describe later to Akihiko as 'extremely educational.' Haru swung the axe like it weighed nothing, cheerful, precise, terrifying, and something rose behind her, an enormous figure in a red dress and a crown, and the shadow did not get within a meter of a single tomato." },
      { n: "At one point Haru produced a grenade launcher from somewhere. Solar did not ask from where." },
      { n: "When it was over, the shadow was smoke and the roof was quiet, and Haru stood in the middle of her garden, breathing hard, axe resting on her shoulder, hair a mess, face flushed, looking happier than Solar had ever seen her." },
      { s: 'haru', f: 'happy', t: "Was that too much? Makoto says I get a little enthusiastic." },
      { choose: [
        { t: "That was incredible.", notes: 3, then: [{ s: 'haru', f: 'blushing', t: "Oh! Thank you. I think so too, honestly." }] },
        { t: "You're terrifying, and I love it.", notes: 3, then: [{ s: 'haru', f: 'blushing', t: "...Both at once? Fufu. That's what you said I was allowed to be." }] }
      ] },
      { n: "She knelt and checked every tomato plant, one by one, gently, while the green faded out of the sky. Not one had been touched." }
    ] },

    { after: '10/14', title: '8: harvest', place: 'Iwatodai Dorm · Kitchen', scene: [
      { n: "October, and the garden on the roof had done more than anyone expected. Tomatoes and cucumbers and peppers and a squash that Junpei had named Gerald. Haru brought them down to the dorm in three trips." },
      { n: "The dorm had been quiet since the beginning of the month. Shinjiro was at Tatsumi Memorial. He hadn't woken. Nobody cooked anymore. The kitchen had been dark for two weeks, and everyone had been eating convenience store food standing up." },
      { n: "Haru turned the lights on. She put on an apron she'd found on a hook, gray and plain, Shinjiro's, and stood at his stove for a long time without moving." },
      { s: 'haru', f: 'sad', t: "He taught me how he does the broth. Before. He said patience is the trick with everything." },
      { choose: [
        { t: "Let's make it together. For him.", notes: 3, then: [{ s: 'haru', f: 'happy', t: "...Yes. Let's." }] },
        { t: "(Hand her a knife and an onion.)", notes: 3, then: [
          { n: "Haru took them. She cut the onion thin, then thinner, the way he'd shown both of them, and smiled at the cutting board like it had said something kind." }
        ] }
      ] },
      { n: "They made his soup. They made rice, and pickles from the cucumbers, and roasted Gerald, who turned out to be delicious. One by one the dorm came downstairs, drawn by the smell the way they used to be, Junpei and Yukari and Mitsuru and Ken and Koromaru, and finally Akihiko, who stood in the doorway and looked at the stove and had to go back into the hallway for a minute." },
      { s: 'akihiko', f: 'sad-3', t: "...It smells exactly right." },
      { n: "They ate together. It was the first time in two weeks that anyone had laughed at dinner. Haru packed a container of the soup into a bag, and the next day Akihiko took it to the hospital, and the nurse let him hold it near Shinjiro's bed so he could smell it." },
      { s: 'haru', f: 'blushing', t: "Solar-chan. I want to tell you something, and I'm going to say it badly." },
      { s: 'haru', f: 'blushing', t: "I've never belonged anywhere. Not my school. Not my house. Not my father's company. And tonight, in this kitchen, I belonged." },
      { n: "She said it into the steam from the pot, and her face was pink, and Solar didn't know if it was the heat." }
    ] },

    { after: '11/11', title: '9: my own choice', place: 'Gekkoukan High · Rooftop Garden', scene: [
      { n: "November. The garden was going to sleep. Haru had covered the beds with straw, carefully, tucking them in like children, and the roof was cold and gray and full of the smell of turned earth." },
      { n: "Futaba had texted Haru that morning. The way home was open. Ann had gone already. Haru's turn would come at the end of the year, when the green hour closed for good." },
      { s: 'haru', f: 'neutral', t: "My whole life, other people have decided what I am. My father. Sugimura. The company." },
      { s: 'haru', f: 'serious', t: "So I am going to decide something myself. Right now. And I need you to tell me what you want, Solar-chan, not what you think I want to hear." },
      { s: 'haru', f: 'blushing', t: "What are we?" },
      { route: [
        { t: "I'm in love with you, Haru.", route: 'romance', notes: 3, then: [
          { s: 'haru', f: 'surprised', t: '...' },
          { s: 'haru', f: 'blushing', t: "Oh. Oh, good. Me too. I chose you. You're the first thing I have ever chosen." },
          { n: "She took Solar's face in her cold, gloved hands, carefully, like it was something fragile from the garden, and kissed her on the cold roof with the straw-covered beds all around them, sleeping." }
        ] },
        { t: "You're my best friend. I'll choose you every time.", route: 'friend', notes: 3, then: [
          { s: 'haru', f: 'happy', t: "...Best friends. Yes. That's a very good choice. My own choice." },
          { n: "She hugged Solar so hard her hat fell off, and they both laughed, and the wind took the hat halfway across the roof, and they chased it together." }
        ] }
      ] }
    ] },

    { after: '12/9', title: '10: solar roast', place: 'Iwatodai Dorm · Kitchen', scene: [
      { n: "December. The first snow had fallen overnight, and the dorm windows were fogged, and the kitchen smelled like coffee, the good kind, the kind that made people come downstairs in their pajamas without being called." },
      { n: "Haru had a paper bag on the counter. Hand-labeled, in her careful, rounded writing. She slid it across to Solar without a word." },
      { n: "It said: Solar Roast. And underneath, smaller: Dark, a little sweet, warmer than you expect." },
      { s: 'haru', f: 'happy', t: "I asked the shop in Paulownia if I could blend my own. I've been trying for a month. That one is right." },
      { s: 'haru', f: 'blushing', t: "When I go home, I'm going to make it at the café. I'll put it on the menu. People will drink it in Tokyo and not know it's named after a girl from another world." },
      { ifRoute: 'friend', then: [
        { choose: [
          { t: "I'll make it every morning.", notes: 3, then: [{ s: 'haru', f: 'happy', t: "Properly, please. Slowly. With patience." }] },
          { t: "Make sure Sugimura never gets a cup.", notes: 3, then: [{ s: 'haru', f: 'happy', t: "Fufu. He's not getting anything of mine ever again. Not even coffee." }] }
        ] },
        { n: "They drank the first cup of Solar Roast together at the kitchen table with the snow coming down outside, and it was dark and a little sweet and warmer than she expected, and Haru watched her drink it with her chin in her hands like she was watching a garden come up." }
      ] },
      { ifRoute: 'romance', then: [
        { s: 'haru', f: 'blushing', t: "Every morning, I'll make a cup of it. And every morning, I'll think of you. In every world, I'll have a little bit of you." },
        { choose: [
          { t: "Then I'll make you one every morning too.", notes: 3, then: [{ s: 'haru', f: 'happy', t: "Two cups. Two worlds. The same coffee. That's a sort of marriage, isn't it? The kind I'd actually choose." }] },
          { t: '(Kiss her.)', notes: 3, then: [
            { s: 'haru', f: 'surprised', t: '...!' },
            { s: 'haru', f: 'blushing', t: "...That was sweeter than the coffee. Don't tell the coffee." }
          ] }
        ] },
        { n: "The snow kept falling. The coffee went cold. Neither of them noticed until Junpei came down for breakfast and loudly asked why the kitchen smelled so good and why they were both so red." }
      ] }
    ] }
  ]
});
