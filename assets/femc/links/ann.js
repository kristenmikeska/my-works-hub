/* Ann Takamaki · VI The Lovers. Arrives on the 5/9 full moon and goes home at the end of October (her link closes 11/3).
   Format notes are at the top of akihiko.js. */
FemcSocial.define({
  id: 'ann', name: 'Ann Takamaki', short: 'Ann', arcana: 'Lovers', numeral: 'VI', from: 'Persona 5',
  arrives: '5/9',
  closes: '11/3',
  home: { place: 'Paulownia Mall', slot: 0, days: [1, 3, 5, 6], hint: 'After school on Mondays, Wednesdays, Fridays and Saturdays, somewhere in Paulownia Mall.' },
  approach: "A blonde girl in a red jacket is standing by the fountain, glaring at a man with a camera and very visibly deciding whether to throw her crepe at him.",
  invite: {
    ask: [
      "SOLAR. crepes. now??",
      "free?? i need a second opinion on an outfit 🙏",
      "come hang!!! i'm so bored",
      "sunflare!!! the crepe lady has a new flavor and i can't face it alone",
      "r u busy?? i'm at the fountain doing nothing and it's way more fun with u",
      "emergency (not a real emergency) (there's a sale)",
      "the photo booth has cat ear frames now. this is not a drill 🐱",
      "i'm at the mall. u should also be at the mall. just saying 👀"
    ],
    ok: ["YAY see u soon ❤️", "omg yes!! fountain, 10 min!!", "ur the best. hurry 🐆"],
    no: ["noooo ok next time!!", "ok but u owe me a crepe 😤", "boo. ok!! go do ur thing ❤️"]
  },
  hangouts: [
    [
      { n: "Ann had steered Solar into the accessory shop on the second floor, the one with the mirrored pillars and the music turned up a little too loud, and was now holding earrings up to Solar's ears two pairs at a time, with the grave concentration of an eye doctor." },
      { s: 'ann', f: 'serious', t: "Left or right. Don't think. Thinking ruins it." },
      { choose: [
        { t: "Left.", notes: 2, then: [{ s: 'ann', f: 'happy', t: "Wrong, but confidently wrong. I respect it." }] },
        { t: "Which ones would you wear?", notes: 3, then: [
          { s: 'ann', f: 'surprised', t: "...Me? Oh. The red ones. Obviously the red ones." },
          { n: "She held them up to her own ears in the mirror for a second, and her face went quiet and pleased, like she'd forgotten she was allowed to want things too." }
        ] },
        { t: "(Point at a pair of enormous plastic strawberries.)", notes: 1, then: [{ s: 'ann', f: 'flustered', t: "Sunflare. No. I'm revoking your accessory privileges." }] }
      ] },
      { n: "They left with nothing, which Ann said was the whole point of window shopping. Then she went back for the red ones while Solar pretended to be very interested in a rack of socks." }
    ],
    [
      { n: "The fountain was Ann's favorite place to do nothing. She sat on the rim with her knees pulled up and narrated the mall in a hushed voice, like a nature documentary, while people went past with shopping bags and no idea they were being studied." },
      { s: 'ann', f: 'happy', t: "Okay. Him. Briefcase, cake box, walking way too fast. Go." },
      { choose: [
        { t: "He forgot his anniversary. That's an apology cake.", notes: 3, then: [{ s: 'ann', f: 'happy', t: "Oh, that is SO an apology cake. Look at his walk. That's a man who's sleeping on the couch tonight." }] },
        { t: "The cake is a decoy. He's a Phantom Thief.", notes: 2, then: [{ s: 'ann', f: 'surprised', t: "...Okay, now I'm actually worried about him." }] },
        { t: "He's just a guy with a cake.", notes: 1, then: [{ s: 'ann', f: 'neutral', t: "Boo. Nobody is just a guy with a cake, Sunflare." }] }
      ] },
      { n: "They kept it up for forty minutes. By the end Ann had given the cake man a wife, two kids, a dog called Butter and a tragic secret involving a karaoke bar, and Solar was invested in every one of them." }
    ],
    [
      { n: "There was a photo sticker booth by the arcade with a curtain covered in cartoon rabbits, and Ann went into it the way other people went into church." },
      { n: "She knew every setting. She knew which frame made your eyes huge and which one made you look like a ghost, and she fed in the coins without looking, and the countdown started, and Solar realized far too late that she had no idea what to do with her face." },
      { s: 'ann', f: 'happy', t: "Three seconds! Do something! Anything!" },
      { choose: [
        { t: "(Make the worst face you can.)", notes: 3, then: [{ n: "Solar crossed her eyes and stuck out her tongue. Ann looked over, shrieked, and the camera caught them both mid-collapse, which was, Ann announced afterward, the best photo she had ever been in, and she had been in magazines." }] },
        { t: "(Copy whatever Ann does.)", notes: 2, then: [{ n: "Ann threw up a peace sign. Solar threw up a peace sign half a second later, so that in every single frame she looked like a very polite echo." }] },
        { t: "(Stand very still and hope.)", notes: 1, then: [{ s: 'ann', f: 'flustered', t: "You look like a hostage! Sunflare! Smile!" }] }
      ] },
      { n: "Ann cut the sticker sheet in half with the little scissors on a chain and stuck her half on the back of her phone right away, like it was urgent." }
    ],
    [
      { n: "The crepe lady had started on Ann's usual the moment she saw her coming up the escalator, which Ann found deeply moving and Solar found a little concerning." },
      { s: 'ann', f: 'serious', t: "Today I'm trying something new. I've decided. I'm a new woman." },
      { n: "She stared at the menu for a long time. The crepe lady waited, ladle in hand, batter going cold." },
      { choose: [
        { t: "Get two. One new, one usual.", notes: 3, then: [{ s: 'ann', f: 'happy', t: "That's genius. That's actually genius. Why is nobody else saying this?" }] },
        { t: "Get your usual. You'll be happier.", notes: 2, then: [
          { s: 'ann', f: 'sad', t: "...I would be happier." },
          { n: "She got her usual. She was happier." }
        ] },
        { t: "(Order for her. Banana and red bean.)", notes: 1, then: [{ n: "Ann ate it with an expression of polite, wounded betrayal, and finished every bite, and said nothing, which was somehow worse." }] }
      ] },
      { n: "They ate on the bench by the escalator, hip to hip, and Ann reviewed every mouthful out loud as though it was going to print." }
    ],
    [
      { n: "The claw machine by the arcade entrance had a black cat plush wedged in the back corner, just out of reach, and Ann had already fed it six hundred yen with the calm of someone who did not intend to lose." },
      { s: 'ann', f: 'serious', t: "It's looking at me. It wants to come home with me. You can see it in its little face." },
      { choose: [
        { t: "One more try. I'll call it from the side.", notes: 3, then: [
          { n: "Solar crouched at the side of the glass and called the angle, left, left, stop, and Ann dropped the claw on her word, and the cat came up by its tail, swinging, triumphant." },
          { s: 'ann', f: 'happy', t: "TEAMWORK! Sunflare! We're unstoppable!" }
        ] },
        { t: "(Take over the controls.)", notes: 2, then: [{ n: "Solar dropped the claw dead center. It closed on the cat's ear, lifted it a heroic two centimeters, and let go. Ann screamed quietly into her own sleeve." }] },
        { t: "It's rigged, Ann.", notes: 1, then: [{ s: 'ann', f: 'serious', t: "I know it's rigged. That's what makes it personal." }] }
      ] },
      { n: "On the way out Ann told the machine, very sincerely, that she would be back. Solar believed her. So, she suspected, did the machine." }
    ]
  ],
  // After rank MAX on the romance route, each visit plays the next date in order (then they rotate).
  // Ann goes home at the station at the end of October (rank 10) and her link closes 11/3, so every date is set in
  // her last week in Iwatodai, between the fountain (rank 9) and the platform, with the station still ahead.
  dates: [
    { title: 'every crepe', place: 'Iwatodai Station · Crepe Stand', music: 'sun', scene: [
      { n: "Ann had a map. It was a free tourist map of Iwatodai and Port Island from the rack at the station, folded so many times since May that the creases had gone soft and white, and on it, in red pen, she had circled every crepe stand she'd found in five and a half months. There were eleven. Some of the circles had little notes beside them. One of them just said NO, underlined twice." },
      { s: 'ann', f: 'happy', t: "Okay. Here's the plan. We do all of them. Today. In order. I've worked out a route." },
      { s: 'ann', f: 'serious', t: "I know what you're going to say. We don't count crepes. Counting crepes is how they win. But this is different. This is a farewell tour. You're allowed to count on a farewell tour." },
      { n: "She said farewell tour like it was a band thing, a fun thing, something with T-shirts. Solar heard the other word underneath it anyway, the way you hear a train coming before you see it, and decided, like she always did, to let it go past." },
      { choose: [
        { t: "Eleven crepes. In one afternoon. Ann.", notes: 2, then: [
          { s: 'ann', f: 'flustered', t: "Eleven and a HALF. Number seven is very small. It's basically a pancake with ambitions." }
        ] },
        { t: "(Take the map. Plot a faster route.)", notes: 3, then: [
          { n: "Solar took the map, turned it the right way up, which was not the way Ann had been holding it, and redrew the route so it didn't cross the monorail tracks three times. Ann leaned over her shoulder to watch, chin almost on Solar's collarbone, smelling faintly of vanilla and the cold air off the platform." },
          { s: 'ann', f: 'happy', t: "Oh my god, you're so smart. This is why I'm in love with you. Partly. Also the eyebrow." }
        ] }
      ] },
      { n: "The matcha one by the station was first, and good, and gone in about a minute. Number two was a cart outside the bookstore on the Strip that Ann had rated four strawberries out of five. Number three, in the basement of the department store on Port Island, was where they learned that Ann's capacity for crepes was, in practical terms, unlimited, and Solar's was not." },
      { place: 'Port Island · Seaside Park', time: 'Late Afternoon' },
      { n: "By number six Solar was sitting on a bench by the water with her head tipped back, breathing very carefully through her nose, and Ann was standing over her holding number six in one hand and number six-and-a-half, which had been a mistake, in the other." },
      { s: 'ann', f: 'sad', t: "You're dying. I killed you. I've killed my girlfriend with crepes." },
      { choose: [
        { t: "Keep going. I'm fine. I can see God.", notes: 3, then: [
          { s: 'ann', f: 'happy', t: "Is it a custard God? Tell me it's a custard God." },
          { n: "Solar said it was. Ann laughed so hard she nearly dropped six-and-a-half, and a seagull on the railing took a very serious interest in the situation." }
        ] },
        { t: "You called me your girlfriend.", notes: 3, then: [
          { s: 'ann', f: 'surprised', t: "...I did." },
          { s: 'ann', f: 'blushing', t: "Is that okay? I didn't ask. I was going to ask properly, I had a whole speech, it had a beginning and a middle." },
          { s: 'solar', t: "It's okay." },
          { s: 'ann', f: 'blushing', t: "...Okay. Okay. Girlfriend. Wow. Don't look at me, I'm making a face." }
        ] }
      ] },
      { n: "They skipped seven through ten. Ann struck them off the map with one heroic line of red pen and announced that some things were bigger than crepes, and then looked so shocked at herself that she had to sit down." },
      { place: 'Paulownia Mall · Crepe Stand', time: 'Evening' },
      { n: "Which left eleven, which was the first one. The stand between the phone repair place and the sock shop, the butter and the burnt sugar, and the crepe lady, who looked up from her griddle as they came off the escalator and, without a word, without being asked, started on two custard." },
      { n: "Ann stopped walking. Solar watched it happen to her, the brightness going still on her face, her hand finding Solar's sleeve and holding on." },
      { s: 'ann', f: 'sad', t: "She remembered. Since May. She remembered what you got the first time." },
      { choose: [
        { t: "(Tell the crepe lady you'll keep coming. Even after.)", notes: 3, then: [
          { n: "Solar said it plainly, while the crepe lady folded the paper around the custard, that she'd keep coming after, every Friday, and that she'd probably still order two, out of habit. The crepe lady nodded once, the way you nod at something you already knew, and put an extra strawberry on Ann's that wasn't in any recipe." },
          { s: 'ann', f: 'sad', t: "...Every Friday?" },
          { s: 'solar', t: "Every Friday." },
          { s: 'ann', f: 'happy', t: "Okay. Okay, I'm going to cry in a mall. Last time. Farewell tour." }
        ] },
        { t: "(Eat it. Don't say anything.)", notes: 2, then: [
          { n: "They ate standing at the railing over the lower floor, exactly where they had stood in May, watching people go in and out of the arcade, and didn't say anything, and Ann leaned into her shoulder a little more with every bite, until by the end she was mostly leaning." }
        ] }
      ] },
      { n: "On the escalator down, Ann took the map out of her pocket and looked at it for a while, and then, instead of throwing it away, folded it very small and tucked it into the inside pocket of Solar's coat, over her heart, and patted it twice, like closing a door." },
      { s: 'ann', f: 'happy', t: "Eleven crepes. Counted. You hold on to the evidence." }
    ] },
    { title: 'behind the camera', place: 'Paulownia Mall · Rooftop Garden', music: 'joy', scene: [
      { n: "Ann had borrowed a camera. A real one, black and heavy, with a lens that came off, from the photography club at Gekkoukan, by walking into their clubroom on a Wednesday afternoon and asking, which Solar suspected was how Ann got most things, and which the photography club would still be talking about when they graduated." },
      { s: 'ann', f: 'serious', t: "Okay. Today I'm the photographer and you're the model. Don't argue. It's a professional arrangement." },
      { s: 'ann', f: 'happy', t: "I've been shot by like a hundred photographers. I know every single thing they do wrong. Today I get to do all of it right." },
      { n: "She did it right. She did it with a fierce, careful kind of generosity Solar hadn't expected, steering her around the rooftop garden by the shoulders, out of the flat noon light and into the shade of the bare wisteria, telling her where to put her hands and then, the second Solar's hands went stiff, telling her to forget she had hands at all." },
      { s: 'ann', f: 'neutral', t: "Don't smile. You're doing the polite one. I know the polite one, I invented the polite one. Just look at the city like it owes you money." },
      { choose: [
        { t: "(Look at the city like it owes you money.)", notes: 2, then: [
          { n: "The shutter went, quick and dry, three times. Ann checked the little screen on the back and made a low, impressed sound." },
          { s: 'ann', f: 'happy', t: "Oh, that's good. That's scary. I'd buy a magazine with that on the cover." }
        ] },
        { t: "(Look at Ann instead.)", notes: 3, then: [
          { n: "The shutter went once, and then didn't go again, because Ann had lowered the camera and was looking at the screen with her mouth slightly open." },
          { s: 'ann', f: 'blushing', t: "...Okay, that's not fair. That's not the assignment. You can't look at the photographer like that, she has a job to do." }
        ] }
      ] },
      { n: "There was a moment, maybe an hour in, when Ann knelt on the wet gravel to get the angle, camera up, one eye shut, completely absorbed, and Solar understood that she had never once seen Ann on this side of anything. Always in front. Always the one being looked at, the double take, the man with the business card. Behind the lens her face did something Solar didn't have a word for. It went private." },
      { n: "Then Solar held out her hand for the camera." },
      { s: 'ann', f: 'surprised', t: "...Me? No. No no no. I'm off duty. I'm wearing a hoodie. I haven't even done my face." },
      { s: 'ann', f: 'sad', t: "...Okay. But don't tell me what to do. Everybody always tells me what to do with my face." },
      { choose: [
        { t: "I won't say anything. Do whatever you want.", notes: 3, then: [
          { n: "So Solar didn't say anything. She held the camera and waited, and Ann stood on the rooftop with her hands in the front pocket of her hoodie, waiting to be told, and nobody told her, and after a long time, slowly, she stopped waiting. She looked at the sky. She scratched her nose. She laughed at something that wasn't there, and the shutter went, and she didn't even hear it." }
        ] },
        { t: "Tell me about Shiho. Don't look at the camera.", notes: 3, then: [
          { n: "Ann told her. The ponytail, the Friday crepes, the time they'd both cried at the same dog movie and blamed it on allergies. Somewhere in the middle of it she forgot the camera. Solar watched her forget it, and took the picture right there, at the place where Ann's voice went soft." }
        ] }
      ] },
      { n: "They went through them afterward on a bench, hunched over the tiny screen with their heads together. Forty-two of Solar. Eleven of Ann. Ann skipped through her own fast at first, the way you'd hurry past your reflection in a shop window, and then slower, and then she stopped on one and didn't move." },
      { n: "It wasn't a good photo, technically. The light was wrong and her hair was in her face. She was looking off the edge of the roof at nothing, not smiling, not posing, not anything. She just looked like a girl on a roof." },
      { s: 'ann', f: 'neutral', t: "...Huh. I don't think anybody's ever taken one of me where I wasn't working." },
      { s: 'ann', f: 'blushing', t: "I look kind of ugly. I look kind of like me. Can I have this one? Can they print it? Is that how it works here?" },
      { n: "The photography club printed it for her the next day, for free, because Ann asked. She put it in her wallet behind her Shujin student card, facing in, where nobody would see it but her." }
    ] },
    { title: 'two black cats', place: 'Paulownia Mall · Central Atrium', music: 'joy', scene: [
      { n: "Paulownia's Halloween week had arrived at its natural conclusion, which was a children's costume parade in the central atrium on a Saturday morning, forty small witches and pumpkins and one extremely determined robot walking laps of the fountain while their parents filmed them. Ann had been asked to judge it. She had been asked by the mall's events manager, a nervous man in an orange tie, because, he said, she looked like somebody who'd been on television." },
      { s: 'ann', f: 'happy', t: "And I said yes, obviously, but only if I got an assistant. You're my assistant. Here. You have to wear these. It's the uniform." },
      { n: "The uniform was a headband with black cat ears, from the rack by the photo booth. Ann was already wearing a matching one. She had also drawn whiskers on her own face in eyeliner, three on each cheek, very neat, and she was holding the eyeliner out toward Solar with an expression that did not invite discussion." },
      { choose: [
        { t: "(Hold still and let her draw them.)", notes: 3, then: [
          { n: "Ann's hand was steady and her face was very close and very serious, the tip of her tongue at the corner of her mouth, and she did the left cheek and then the right and then, because she had apparently lost her mind, a tiny black nose on the end of Solar's nose, and stepped back to look at it, and burst out laughing." },
          { s: 'ann', f: 'happy', t: "Two black cats. Oh my god. We're a set. Ryuji would actually die." }
        ] },
        { t: "Only if I get to draw yours next year.", notes: 2, then: [
          { s: 'ann', f: 'sad', t: "..." },
          { n: "It came out before Solar thought about it, next year, and it landed between them on the atrium floor and lay there. Ann looked at it. Then she drew the whiskers on anyway, very carefully, without saying anything, and when she was done she pressed her thumb against Solar's cheek, once, gently, to smudge one, like a signature." },
          { s: 'ann', f: 'blushing', t: "There. Now you're mine. Next year, the year after. That's how whiskers work." }
        ] }
      ] },
      { n: "The parade went three times around the fountain because the robot fell over and everyone agreed he deserved a restart. Ann took the judging extremely seriously. She had a clipboard. She gave every child a category they could win, Best Witch and Best Pumpkin and Bravest Robot, until the man in the orange tie came over, sweating, to remind her there were only three prizes." },
      { n: "There was a girl at the very back. Five, maybe, in a black cat costume her mother had clearly made by hand, the ears lopsided and the tail sewn on a little crooked, so that it dragged. She was blonde, a pale, foreign kind of blonde, and the other kids had been walking around her in a careful circle all morning, the way kids do with things that are different. Not cruel. Not anything. Just never quite next to her." },
      { n: "Ann saw it. Solar watched her see it. Her face didn't change at all, but her knuckles went white on the clipboard." },
      { s: 'ann', f: 'neutral', t: "When I was little I looked like that. Everybody in my class had black hair and then there was me. Nobody hit me or anything. They just didn't sit next to me. For years." },
      { s: 'ann', f: 'sad', t: "Then Shiho sat next to me. That was the whole thing. She just sat down." },
      { choose: [
        { t: "(Go and walk next to the girl.)", notes: 3, then: [
          { n: "Solar went and fell in beside her at the back of the parade, in her cat ears and her whiskers and her drawn-on nose, and walked the last lap at a five-year-old's pace with the crooked tail dragging between them. The girl looked up at the nose with deep suspicion. Then she took Solar's hand for the rest of the lap and didn't let go of it even when the lap was over." }
        ] },
        { t: "Who wins Best Cat, Judge?", notes: 3, then: [
          { s: 'ann', f: 'serious', t: "Her. Obviously her. That's not even a question. Look at that tail. Somebody sewed that tail at two in the morning." }
        ] }
      ] },
      { n: "Best Cat was not one of the three prizes. Ann made it one. She knelt on the atrium floor in front of the girl with the crooked tail, at her height, and took off her own cat ears and set them on the girl's head over the lopsided ones, so that she had four ears, which the girl appeared to regard as the greatest honor of her life." },
      { s: 'ann', f: 'happy', t: "Best Cat. Two black cats said so. That's the official ruling." },
      { n: "The girl's mother bowed about eleven times. The girl roared at Ann, as a cat, and Ann roared back. And on the walk to the escalator Ann was quiet, bareheaded, whiskers smudging, and she took Solar's hand and swung it once, the way you'd swing a little kid's, and said, without looking at her, that someday she was going to sew a tail for somebody, and she was going to sew it straight. Then she laughed, and said never mind, and didn't let go." }
    ] },
    { title: 'one bag', place: "Ann's Hotel · Lobby", music: 'tender', scene: [
      { n: "Futaba had said one bag. She had said it in the group chat in capital letters, and again on the phone, and again in a text at three in the morning that just said ONE (1) BAG. PHYSICS. So Ann had bought a bag, a red duffel from the sports shop on Port Island, and brought it down to the hotel lobby, and emptied her whole room out across the coffee table and three of the leather chairs, because, she said, the room felt like a waiting room now and she couldn't think in it." },
      { n: "The lobby was as cold as it always was. The night clerk had brought them two cups of green tea without being asked and was now behind the desk reading a magazine with enormous concentration, like a man who had heard about the station and had decided not to have feelings about it in front of the guests." },
      { s: 'ann', f: 'neutral', t: "Okay. Rules. Clothes I can get at home. Shoes I can get at home. If I can buy it in Shibuya it doesn't go in. Only stuff that only exists here." },
      { n: "It should have made things easy. It made them impossible. The only-here pile kept growing. The sweater from June. The red earrings. A crepe stand receipt from May that she'd kept in her wallet the whole time and swore she hadn't. The cake man's entire family, which wasn't an object, which she tried to pack anyway. A plastic maple leaf off the autumn decorations." },
      { s: 'ann', f: 'flustered', t: "Don't look at the maple leaf. I didn't steal it. It fell. It fell into my bag. Legally it's mine." },
      { choose: [
        { t: "(Pack the maple leaf for her. Very carefully.)", notes: 3, then: [
          { n: "Solar wrapped it in one of the hotel's paper napkins like it was glass and laid it in the bottom of the duffel, and Ann watched her do it with her knees pulled up to her chin." },
          { s: 'ann', f: 'sad', t: "...You're making this so much worse. I love you. You're making it so much worse." }
        ] },
        { t: "The sweater won't fit.", notes: 2, then: [
          { s: 'ann', f: 'serious', t: "Then the shoes come out. I'll go home barefoot. I'll walk through Shibuya barefoot in a sweater and it'll be a look, it'll be in a magazine." },
          { n: "The shoes came out. The sweater went in." }
        ] }
      ] },
      { n: "It went on like that for an hour. By the end the bag was full, actually full, the zip straining at the corners, and almost nothing in it was clothes. Ann sat back in the leather chair and looked at it, and at the ordinary things heaped on the other chairs that had lost, the jeans and the hairdryer and the hotel slippers, and pulled her sleeves down over her hands." },
      { s: 'ann', f: 'sad', t: "It's so stupid. It's a bag of garbage. It's a maple leaf and a receipt." },
      { s: 'ann', f: 'sad', t: "I just keep thinking, when I'm home and I open it, I want it to smell like here." },
      { n: "Solar didn't have anything to say to that. She'd packed a lot of bags. She had never once packed one she wanted to open at the other end. She sat down on the arm of Ann's chair, the way she had in August, in this same cold lobby, the night Futaba came crackling through her phone, and Ann leaned into her, and her hair smelled like hotel shampoo and, faintly, like burnt sugar." },
      { choose: [
        { t: "(Unwind your scarf and put it in the bag.)", notes: 3, then: [
          { n: "It was a gray scarf, nothing special. She'd had it three winters. It smelled like her shampoo and the dorm's laundry soap and the monorail. She folded it and pressed it in on top of everything, and pulled the zip closed over it before Ann could say anything, and the zip, for the first time all night, went all the way." },
          { s: 'ann', f: 'surprised', t: "..." },
          { s: 'ann', f: 'blushing', t: "...Okay. Now it smells like here." }
        ] },
        { t: "(Take the maple leaf back out. Put it in your own pocket.)", notes: 2, then: [
          { s: 'ann', f: 'surprised', t: "Hey! That's evidence!" },
          { s: 'solar', t: "You've got the rest. I keep one." },
          { s: 'ann', f: 'sad', t: "...One for each of us." },
          { n: "Ann looked at Solar's pocket for a long time after that, where the leaf was, like she was memorizing where she'd left it." }
        ] }
      ] },
      { n: "The night clerk turned a page. Outside the revolving door the street was empty and the wind had picked up, pushing dead leaves along the pavement, and Ann reached over without looking and turned Solar's face toward her with two fingers under her chin, and kissed her, slowly, in the cold lobby, the way you'd say something you only meant to say once and wanted to get right." },
      { s: 'ann', f: 'blushing', t: "...Don't tell Futaba I tried to pack you. Physics would be so mad." }
    ] }
  ],
  // P3's Christmas Eve: on 12/24 evening, if Solar is romancing several people (rank 9+), she picks one; this plays.
  // Ann has been home for weeks by then, so it's Futaba's four-minute call.
  christmas: { place: 'Paulownia Mall · Fountain', scene: [
    { n: "Ann had been gone eight weeks. Solar did not count them. She simply knew it, the way you know how many stairs there are up to your own room in the dark." },
    { phone: [
      { from: 'futaba', t: 'ok solar. are you there' },
      { from: 'futaba', t: 'go somewhere with good signal. no tunnels. no basements. no lasagna' },
      { from: 'futaba', t: "9:00. i have four minutes. five if the tide likes me" },
      { from: 'futaba', t: "don't tell her i told you. she's been doing her hair for an hour" }
    ], contact: 'phantom thieves · 8:12 PM', handle: 'futaba', me: 'solar' },
    { n: "So she went to the fountain. It was the obvious place and she went anyway. Paulownia was all lights and couples and a recording of sleigh bells on a loop that had been playing since November, and the fountain had been switched off for winter and filled with fake poinsettias, and she sat on the rim of it in her coat with the phone in both hands, holding it up at different angles, the way you do when you're trying to get a signal from somewhere that doesn't have one." },
    { n: "It occurred to her, at about 8:58, who she looked like." },
    { n: "At 9:01 the screen jumped, and fuzzed, and went green, and then there was a face on it, small and blocky and lagging half a second behind itself. Blonde pigtails. A red Santa hat. Blue eyes, very blue even in a few hundred pixels, very wide." },
    { s: 'ann', f: 'surprised', t: "SUNFLARE. Oh my god. Oh my god, it's working. Can you see me? You're all squares. You're beautiful, you're all squares." },
    { s: 'ann', f: 'happy', t: "Are you at the fountain? You're at the fountain. Of course you're at the fountain." },
    { n: "Behind her, out of focus, there was a warm little room with a counter and too many people in it, a smell Solar could almost see, coffee and curry, and then a blond boy in a yellow shirt leaned into the frame so suddenly that the picture tore." },
    { s: 'ryuji', f: 'happy', t: "SUNFLARE!!! MERRY CHRISTMAS!!! STRONG GALE FOREVER!!!" },
    { s: 'ann', f: 'flustered', t: "RYUJI. Four minutes. You're using my minutes." },
    { choose: [
      { t: "Hi, Ryuji. Merry Christmas.", notes: 2, then: [
        { s: 'ryuji', f: 'happy', t: "SHE SAID HI. Okay. Okay, I'm going. I'm gone." },
        { n: "He was not gone. He could be heard, somewhere off screen, telling somebody that she'd said hi." }
      ] },
      { t: "You're wearing the earrings.", notes: 3, then: [
        { s: 'ann', f: 'blushing', t: "...You can see them? Through all the squares?" },
        { n: "She touched the left one, the red one, and turned her head so it caught the light, and the picture smeared and came back. She'd worn them for the camera. Solar could tell. She'd worn them so there would be something red." }
      ] }
    ] },
    { ifRank: { ann: 10 }, then: [
      { n: "Solar took the mask out of her coat pocket. She'd brought it without deciding to, the way you bring your keys. Red, with the little cat ears, scuffed a little at one edge from eight weeks of being held." },
      { s: 'ann', f: 'sad', t: "...You brought it. You actually carry it around?" },
      { s: 'solar', t: "Every day." },
      { s: 'ann', f: 'sad', t: "Okay. That's. Okay. I'm not crying. The connection makes my face do that." }
    ], else: [
      { n: "Solar hadn't been at the station, at the end. She had meant to be. Some nights she still lay awake running it back, the way she ran everything back, looking for the place she should have looked up." },
      { s: 'ann', f: 'sad', t: "Hey. You're doing the thing. With the station. I can see it through the squares." },
      { s: 'ann', f: 'serious', t: "You don't get to feel bad about that. You were my whole summer. You don't get to feel bad about one night." }
    ] },
    { s: 'futaba', f: 'serious', t: "Two minutes. Say the important stuff. I'm not listening. I'm extremely listening." },
    { s: 'ann', f: 'blushing', t: "Okay. Okay. Important stuff." },
    { n: "She took a breath. Solar watched it happen in squares, the breath, the chin coming up, the girl on the roof with the whip, deciding." },
    { s: 'ann', f: 'blushing', t: "I love you. I didn't get to say it enough. I said it like twice, which is so stupid, because I thought it about ten thousand times." },
    { choose: [
      { t: "I love you too. Ten thousand and one.", notes: 3, then: [
        { s: 'ann', f: 'happy', t: "...You can't just round up on me. That's cheating." },
        { s: 'ann', f: 'blushing', t: "Ten thousand and two. Ha. Beat you." }
      ] },
      { t: "Merry Christmas, Panther.", notes: 3, then: [
        { s: 'ann', f: 'sad', t: "...Merry Christmas, Sunflare." },
        { n: "She said it the way you'd say it to somebody across a room at a party, somebody you'd come with and would be leaving with, when there was no hurry at all." }
      ] }
    ] },
    { n: "The picture froze. Not all at once. The edges went first, then the counter behind her, then a corner of yellow shirt, and Ann's face last, caught halfway through laughing at something, mouth open, one pigtail mid-swing, a red square at her ear. Then the screen went black and showed Solar her own reflection, a girl on a fountain with a phone." },
    { phone: [
      { from: 'futaba', t: 'sorry. tide went out' },
      { from: 'futaba', t: "she says same time next year. she says that's a contract" },
      { from: 'futaba', t: 'merry christmas solar' }
    ], contact: 'phantom thieves · 9:06 PM', handle: 'futaba', me: 'solar' },
    { n: "The crepe lady was closing up when Solar came past, halfway through pulling down the shutter, and she stopped, and looked at Solar, and pushed it back up. She made one crepe. Strawberries and cream and chocolate and the brownie crumble, all of it, the whole ridiculous combination, Ann's, and handed it across the counter in its paper and waved the coins away." },
    { n: "It was much too sweet. It had always been much too sweet. Solar ate the whole thing anyway on the rim of the dry fountain, slowly, every bite, and reviewed it under her breath as though it was going to print." }
  ] },
  romance: true,
  cast: { ryuji: 'Ryuji', shiho: 'Shiho', futaba: 'Futaba', makoto: 'Makoto', mitsuru: 'Mitsuru', haru: 'Haru' },
  threads: {
    elizabeth: { name: 'Elizabeth', members: ['elizabeth'] },
    thieves: { name: 'phantom thieves (temp)', members: ['ann', 'futaba'] }
  },
  texts: [
    { id: 'eliz-5-9', thread: 'elizabeth', rank: 0, before: 99, days: 0, date: '5/9', slot: 1, msgs: [
      { from: 'elizabeth', t: 'Good evening, Solar. The moon is full tonight.' },
      { from: 'elizabeth', t: 'Someone new has slipped through into your city. A girl dressed in red, and very far from home.' },
      { from: 'elizabeth', t: 'She will not stay lost for long, I think. Not with you nearby.' }
    ] },
    { id: 'ann-2a', rank: 2, days: 1, slot: 1, msgs: [
      { from: 'ann', t: 'sunflare!!!' },
      { from: 'ann', t: 'ok so i found ANOTHER crepe place' },
      { from: 'ann', t: "it's by the station and it has a matcha one 😭" }
    ], reply: [
      { t: 'We are going tomorrow.', notes: 3, then: [{ from: 'ann', t: 'YES' }, { from: 'ann', t: 'this is why ur my favorite' }] },
      { t: 'How many crepes is that this week?', notes: 2, then: [{ from: 'ann', t: "we don't count crepes" }, { from: 'ann', t: "counting crepes is how they win" }] }
    ] },
    { id: 'ann-3a', rank: 3, days: 1, slot: 1, msgs: [
      { from: 'ann', t: 'hey' },
      { from: 'ann', t: 'sorry about today' },
      { from: 'ann', t: "i don't usually snap like that" }
    ], reply: [
      { t: 'He deserved it.', notes: 3, then: [{ from: 'ann', t: '...yeah' }, { from: 'ann', t: 'he really did' }, { from: 'ann', t: 'thanks sunflare' }] },
      { t: "You don't have to apologize to me.", notes: 3, then: [{ from: 'ann', t: 'ok' }, { from: 'ann', t: 'ok 🥺' }] }
    ] },
    { id: 'ann-4a', rank: 4, days: 1, slot: 0, msgs: [
      { from: 'ann', t: "he's gone" },
      { from: 'ann', t: 'ryuji' },
      { from: 'ann', t: 'i woke up and he was just. gone' }
    ], reply: [
      { t: "I'm coming over. Where are you?", notes: 3, then: [{ from: 'ann', t: 'the hotel lobby' }, { from: 'ann', t: 'bring crepes' }, { from: 'ann', t: "jk. just come" }] },
      { t: "He went home, Ann. That's good.", notes: 2, then: [{ from: 'ann', t: 'i know' }, { from: 'ann', t: 'i know it is' }] }
    ] },
    { id: 'ann-5a', rank: 5, days: 2, slot: 1, msgs: [
      { from: 'ann', t: "i've never told anyone that much about shiho" },
      { from: 'ann', t: 'not even the guys' },
      { from: 'ann', t: 'weird that it was easy with you' }
    ], reply: [
      { t: "It's not weird.", notes: 3, then: [{ from: 'ann', t: 'ok it\'s a little weird' }, { from: 'ann', t: 'good weird' }] },
      { t: 'Thank you for telling me.', notes: 3, then: [{ from: 'ann', t: '💛' }] }
    ] },
    { id: 'thieves-6', thread: 'thieves', rank: 6, days: 1, msgs: [
      { sys: 'futaba created "phantom thieves (temp)"' },
      { from: 'futaba', t: 'ok it works' },
      { from: 'futaba', t: 'hi solar. this is futaba. i am in your phone now' },
      { from: 'ann', t: 'FUTABA' },
      { from: 'futaba', t: 'signal from your world is SO weird btw. like trying to wifi through a lasagna' },
      { from: 'ann', t: 'can you get me home' },
      { from: 'futaba', t: 'working on it. give me time. and snacks. mostly time' }
    ], reply: [
      { t: 'Hi, Futaba. Please get out of my phone.', then: [{ from: 'futaba', t: 'no' }, { from: 'futaba', t: 'ur group chat with the cup ramen guy is very funny though' }] },
      { t: "Welcome to Iwatodai. Sort of.", then: [{ from: 'futaba', t: 'thank u. 3/10 so far. needs more curry' }] }
    ] },
    { id: 'ann-7a', rank: 7, days: 1, slot: 1, msgs: [
      { from: 'ann', t: 'makoto and mitsuru-san exchanged numbers' },
      { from: 'ann', t: 'before makoto faded' },
      { from: 'ann', t: "i'm a little scared of what they'll do with them" }
    ], reply: [
      { t: 'Run the world, probably.', notes: 3, then: [{ from: 'ann', t: 'LOL' }, { from: 'ann', t: 'we would all be so well organized' }] },
      { t: 'Can they even text between worlds?', notes: 2, then: [{ from: 'ann', t: 'futaba says no' }, { from: 'ann', t: 'futaba also says "not yet"' }] }
    ] },
    // Longer Phantom Thieves group chats: Futaba patches people through for a few minutes at a time.
    { id: 'thieves-7-long', thread: 'thieves', rank: 7, before: 10, days: 3, slot: 1, msgs: [
      { from: 'futaba', t: 'ok. remember when i said "not yet"' },
      { from: 'futaba', t: 'it is now yet. for like ten minutes' },
      { sys: 'futaba added Ryuji Sakamoto' },
      { from: 'ryuji', t: 'YO' },
      { from: 'ryuji', t: 'IS THIS WORKING. ANN. SUNFLARE. CAN U SEE THIS' },
      { from: 'ann', t: 'RYUJI' },
      { from: 'ann', t: 'why are you yelling' },
      { from: 'ryuji', t: 'CAPS LOCK IS STUCK' },
      { from: 'futaba', t: 'it is not stuck. i can see his keyboard' },
      { ask: [
        { t: 'Strong gale says hello.', notes: 3, then: [{ from: 'ryuji', t: "DON'T" }, { from: 'ryuji', t: 'i told EVERYONE about that' }, { from: 'futaba', t: 'he made a slideshow. it had transitions' }] },
        { t: 'Hi, Skull.', notes: 2, then: [{ from: 'ryuji', t: 'SHE REMEMBERED' }, { from: 'ann', t: 'it is literally a skull ryuji. it is not hard to remember' }] },
        { t: 'Futaba, how can you see his keyboard?', notes: 1, then: [{ from: 'futaba', t: "don't worry about it" }, { from: 'ryuji', t: 'wait' }, { from: 'ryuji', t: 'FUTABA HOW CAN U SEE MY KEYBOARD' }] }
      ] },
      { from: 'ryuji', t: 'ok ok real talk. how is she' },
      { from: 'ann', t: "i'm RIGHT HERE" },
      { from: 'ryuji', t: 'ya but ur gonna say "fine." sunflare tell me the truth' },
      { ask: [
        { t: 'She ate three crepes yesterday. She is thriving.', notes: 3, then: [{ from: 'ryuji', t: 'LMAO ok she good' }, { from: 'ann', t: 'it was TWO AND A HALF' }, { from: 'futaba', t: 'two and a half crepes is three crepes in the eyes of the law' }] },
        { t: 'She misses you guys. A lot.', notes: 2, then: [{ from: 'ann', t: 'sunflare 😭' }, { from: 'ryuji', t: '...' }, { from: 'ryuji', t: 'we miss her too. like a LOT a lot' }] },
        { t: 'Fine.', notes: 1, then: [{ from: 'ryuji', t: 'NOT U TOO' }] }
      ] },
      { sys: 'Ryuji Sakamoto renamed the group "SKULL AND FRIENDS"' },
      { sys: 'futaba renamed the group "phantom thieves (temp)"' },
      { from: 'ryuji', t: 'aw c\'mon' },
      { from: 'futaba', t: 'connection is wobbling. say bye before you get turned into lasagna' },
      { ask: [
        { t: 'Bye, Ryuji. Come back sometime.', notes: 3, then: [{ from: 'ryuji', t: 'count on it' }, { from: 'ryuji', t: 'and next time I BEAT THAT PUNCHING MACHINE' }, { from: 'ann', t: 'you will not' }] },
        { t: 'Look after Futaba for us.', notes: 2, then: [{ from: 'ryuji', t: 'bro she looks after ME' }, { from: 'futaba', t: 'correct' }] }
      ] },
      { sys: 'Ryuji Sakamoto lost connection' },
      { from: 'ann', t: 'futaba' },
      { from: 'ann', t: 'thank you' },
      { from: 'futaba', t: '👍' }
    ] },
    { id: 'ann-8a', rank: 8, days: 1, slot: 1, msgs: [
      { from: 'ann', t: 'can i say something dumb' },
      { from: 'ann', t: "part of me hopes futaba doesn't figure it out too fast" }
    ], reply: [
      { t: "That's not dumb.", notes: 3, then: [{ from: 'ann', t: '...ok' }, { from: 'ann', t: 'goodnight sunflare' }] },
      { t: 'Part of me hopes that too.', notes: 3, then: [{ from: 'ann', t: '😳' }, { from: 'ann', t: 'ok goodnight' }, { from: 'ann', t: 'GOODNIGHT' }] }
    ] },
    { id: 'thieves-8-long', thread: 'thieves', rank: 8, before: 10, days: 3, slot: 1, msgs: [
      { sys: 'futaba added Makoto Niijima and Ryuji Sakamoto' },
      { from: 'makoto', t: 'Thank you, Futaba. Is everyone here?' },
      { from: 'ryuji', t: 'PRESENT' },
      { from: 'ann', t: 'here!!' },
      { from: 'futaba', t: 'i am the here' },
      { from: 'makoto', t: 'Good. I have an agenda.' },
      { from: 'ryuji', t: 'oh no' },
      { from: 'makoto', t: "1. Status of the crossing. 2. Ann's wellbeing. 3. Any other business." },
      { from: 'futaba', t: "item 1: it's complicated. i made a graph" },
      { from: 'futaba', t: '📈🍝' },
      { from: 'futaba', t: 'the pasta is load bearing' },
      { from: 'makoto', t: "Thank you, Futaba. Item 2. Sunflare, you're the closest thing we have to a field report." },
      { ask: [
        { t: 'Ann, do you want to answer this one?', notes: 3, then: [{ from: 'ann', t: '...' }, { from: 'ann', t: "i'm good. i promise. i have a crepe lady and a sunflare" }, { from: 'makoto', t: 'Noted.' }, { from: 'futaba', t: 'minutes: ann has a crepe lady and a sunflare' }] },
        { t: "She's okay. Better than okay, most days.", notes: 2, then: [{ from: 'makoto', t: 'That is very good to hear.' }, { from: 'ryuji', t: 'MOST days??' }, { from: 'ann', t: 'ryuji.' }] },
        { t: 'Is this a real meeting?', notes: 1, then: [{ from: 'makoto', t: 'Every meeting is a real meeting.' }, { from: 'futaba', t: 'she means it. she owns a gavel. i have seen the gavel' }] }
      ] },
      { from: 'makoto', t: 'Item 3. Ryuji, you said you had business.' },
      { from: 'ryuji', t: 'ok so makoto said the scary student council lady there has a MOTORCYCLE' },
      { from: 'makoto', t: 'I said "Kirijo-san," Ryuji.' },
      { from: 'ryuji', t: 'and she ALSO said the lady talks about EXECUTING people' },
      { from: 'makoto', t: 'Executing a plan. She executes plans.' },
      { from: 'futaba', t: 'two student council presidents. two motorcycles. this is a crossover event' },
      { ask: [
        { t: 'Makoto, do you miss her?', notes: 3, then: [{ from: 'makoto', t: '...' }, { from: 'makoto', t: 'It is rare to meet someone who understands the job.' }, { from: 'makoto', t: 'Please tell her the rotation she suggested worked. She will know what that means.' }, { from: 'ryuji', t: 'aww' }, { from: 'makoto', t: 'Do not "aww," Ryuji.' }] },
        { t: "I'll tell Mitsuru-senpai you said hi, Ryuji.", notes: 2, then: [{ from: 'ryuji', t: 'NO' }, { from: 'ryuji', t: "DON'T" }, { from: 'ryuji', t: 'SUNFLARE I HAVE A FAMILY' }] },
        { t: 'Nobody is riding her motorcycle, Ryuji.', notes: 1, then: [{ from: 'ryuji', t: "i didn't even ASK yet" }, { from: 'ann', t: 'you were going to' }] }
      ] },
      { from: 'futaba', t: 'lasagna is cooling. wrap it up' },
      { from: 'makoto', t: 'Meeting adjourned. Ann, eat a vegetable.' },
      { from: 'ann', t: 'crepes have strawberries in them' },
      { from: 'makoto', t: 'Ann.' },
      { ask: [
        { t: "I'll make sure she eats one.", notes: 3, then: [{ from: 'ann', t: 'TRAITOR' }, { from: 'makoto', t: 'Thank you, Sunflare. I knew I could count on you.' }] },
        { t: 'Strawberries count.', notes: 2, then: [{ from: 'makoto', t: 'They do not.' }, { from: 'ann', t: 'they DO' }, { from: 'futaba', t: 'technically strawberries are not even berries. bananas are berries. goodnight' }] }
      ] },
      { from: 'ryuji', t: 'BYE SUNFLARE. STRONG GALE FOREVER' },
      { sys: 'Makoto Niijima and Ryuji Sakamoto lost connection' }
    ] },
    { id: 'ann-9r', rank: 9, route: 'romance', days: 1, slot: 1, msgs: [
      { from: 'ann', t: 'i keep smiling at my phone' },
      { from: 'ann', t: 'like an idiot' },
      { from: 'ann', t: 'this is ur fault' }
    ], reply: [
      { t: "I'm doing the same thing.", notes: 3, then: [{ from: 'ann', t: 'GOOD' }, { from: 'ann', t: 'suffer with me' }] },
      { t: 'Worth it.', notes: 3, then: [{ from: 'ann', t: '💗' }] }
    ] },
    { id: 'ann-9f', rank: 9, route: 'friend', days: 1, slot: 1, msgs: [
      { from: 'ann', t: 'best friend sleepover. this weekend. non negotiable' },
      { from: 'ann', t: 'i bought face masks' }
    ], reply: [
      { t: "I'll bring the crepes.", notes: 3, then: [{ from: 'ann', t: 'this is why ur my best friend' }] },
      { t: 'Non-negotiable accepted.', notes: 3, then: [{ from: 'ann', t: 'phantom thief best friends 🫶' }] }
    ] },
    { id: 'thieves-9-long', thread: 'thieves', rank: 9, before: 10, days: 2, rename: 'phantom thieves', unlock: { links: { haru: 5 } }, msgs: [
      { sys: 'futaba renamed the group "phantom thieves"' },
      { from: 'ann', t: 'wait. where did the (temp) go' },
      { from: 'futaba', t: "deleted it. this chat stays. even after. i'll keep the lasagna open" },
      { from: 'ann', t: 'futaba 😭' },
      { sys: 'futaba added Haru Okumura, Makoto Niijima and Ryuji Sakamoto' },
      { from: 'haru', t: 'Hello, everyone! 🌸 Thank you for adding me, Futa-chan.' },
      { from: 'ryuji', t: 'HARU??' },
      { from: 'ryuji', t: "UR THERE TOO??? SINCE WHEN" },
      { from: 'makoto', t: 'Futaba told me, Ryuji. I told you. Twice.' },
      { ask: [
        { t: 'Haru grew a whole garden on my school roof.', notes: 3, then: [{ from: 'ryuji', t: 'SHE WHAT' }, { from: 'haru', t: 'Fufu. The tomatoes are very good this year.' }, { from: 'makoto', t: 'Of course she did.' }] },
        { t: 'Welcome to the chat, Haru.', notes: 2, then: [{ from: 'haru', t: 'Thank you, Solar-chan! It is very lively. 🌷' }, { from: 'futaba', t: 'it is never this lively. ryuji is a weather event' }] }
      ] },
      { from: 'makoto', t: 'All right. The crossing. Futaba?' },
      { from: 'futaba', t: 'end of the month. the station. green hour. that\'s when the tide is out' },
      { from: 'futaba', t: 'ann you can bring one bag. ONE. physics is very strict about this' },
      { from: 'ann', t: 'can i bring sunflare' },
      { from: 'futaba', t: 'no' },
      { from: 'futaba', t: 'i checked. i actually checked' },
      { ask: [
        { t: 'I would fit in a bag.', notes: 3, then: [{ from: 'futaba', t: 'you would not. i ran the numbers' }, { from: 'ann', t: 'she would if i folded her' }, { from: 'makoto', t: 'Nobody is folding anybody.' }] },
        { t: 'Pack as many crepes as physics allows.', notes: 2, then: [{ from: 'ann', t: 'physics allows SO many crepes' }, { from: 'futaba', t: 'crepes are exempt from physics. this is known' }] },
        { t: '😭', notes: 1, then: [{ from: 'haru', t: 'Oh, Solar-chan. 🌸' }, { from: 'ryuji', t: 'dude same' }] }
      ] },
      { from: 'ryuji', t: 'OK BUT. party. when ann gets back. leblanc. boss already said yes' },
      { from: 'haru', t: "I'll bake for it! ...Oh. I won't be home yet." },
      { from: 'ann', t: "then we throw u one too haru. you're next" },
      { from: 'ryuji', t: 'sunflare u gotta be there' },
      { from: 'futaba', t: 'i can MAYBE do a video call. four minutes. very pixelated' },
      { ask: [
        { t: "I'll be there. Pixelated.", notes: 3, then: [{ from: 'ryuji', t: "FOUR MINUTES IS PLENTY" }, { from: 'ann', t: "i'm going to cry the whole four minutes" }, { from: 'makoto', t: 'We will schedule them carefully.' }] },
        { t: 'Save me a plate of curry.', notes: 2, then: [{ from: 'ryuji', t: "boss's curry. i'll guard it with my LIFE" }, { from: 'futaba', t: 'he will eat it' }, { from: 'ryuji', t: 'i will not EAT it' }] }
      ] },
      { from: 'ann', t: 'ok everyone stop making me cry in a hotel lobby' },
      { from: 'haru', t: 'Goodnight, everyone. 🌙' }
    ] }
  ],
  ranks: [
    { after: '5/11', title: '1: panther', place: 'Paulownia Mall · Fountain', scene: [
      { n: "Two nights ago, during the hour that didn't exist, Solar had seen a girl in red on the roof of the monorail station." },
      { n: "She'd only seen her for a second. A figure in a glossy red suit with a whip in one hand, cracking it at something black and shapeless that came apart under the green moon like smoke, and then she was gone, and the rest of the night had been too loud and too frightening for Solar to think about it again until now." },
      { n: "Now was a Monday afternoon at Paulownia Mall, and the girl was sitting on the edge of the fountain in a school uniform Solar had never seen before, a dark blazer over a white hoodie, red tights, blonde hair up in two pigtails, staring at her phone like it had betrayed her." },
      { n: "People walked past her. Some of them looked. She was the kind of pretty people looked at twice, the second time to check if they'd seen right. She didn't notice any of them. She was holding the phone up at different angles, the way you do when you're trying to get a signal from somewhere that doesn't have one." },
      { n: "Solar should have kept walking. She had a whole philosophy about keeping walking. She stopped anyway." },
      { s: 'ann', f: 'surprised', t: "...Wait. Wait, you!" },
      { n: "The girl was on her feet before Solar could decide to leave, phone clutched in both hands, eyes wide and very blue." },
      { s: 'ann', f: 'serious', t: "You were there. The other night. The green night. You were on the bridge with the others. I saw you." },
      { choose: [
        { t: "And you were on the roof. With a whip.", notes: 3, then: [
          { s: 'ann', f: 'flustered', t: "Okay, yes, but in my defense, that thing was HUGE." },
          { n: "She said it so earnestly that Solar almost laughed, and caught it, and the girl saw her catch it and grinned anyway." }
        ] },
        { t: "I don't know what you mean.", notes: 0, then: [
          { s: 'ann', f: 'serious', t: "Yes you do. You're a terrible liar, by the way. Your eyebrow does a thing." },
          { n: "Solar did not know her eyebrow did a thing. She was going to have to think about that." }
        ] },
        { t: "Are you okay? You look lost.", notes: 2, then: [
          { s: 'ann', f: 'sad', t: '...Is it that obvious?' },
          { n: "The brightness went out of her face for just a second, and underneath it she looked very young and very tired." }
        ] }
      ] },
      { s: 'ann', f: 'neutral', t: "Okay. I need to ask you something and you have to promise not to think I'm crazy." },
      { s: 'ann', f: 'serious', t: "Is this a Palace? Whose heart is this? Because it is way too normal to be anybody's Palace, and that's actually what's freaking me out the most." },
      { n: "Solar understood about one word in four of that. She understood the look on the girl's face completely. It was the look she'd seen in the mirror the morning after the roof, when the world had turned out to be bigger and stranger than she'd been told." },
      { choose: [
        { t: "It's not a Palace. It's Iwatodai. It's real.", notes: 3, then: [
          { s: 'ann', f: 'surprised', t: '...Real.' },
          { s: 'ann', f: 'sad', t: "Okay. Real. That's... worse, actually. That's so much worse." }
        ] },
        { t: "I don't know what a Palace is.", notes: 2, then: [
          { s: 'ann', f: 'flustered', t: "Right. Of course you don't. Okay. Ignore the Palace thing." },
          { s: 'ann', f: 'sad', t: "Ignore all of it. I'm fine. Totally fine." },
          { n: "She was not totally fine. She smiled anyway, bright and practiced, the smile of someone used to being looked at, and Solar recognized it so completely it gave her a small, unpleasant chill." }
        ] }
      ] },
      { n: "They sat on the edge of the fountain. The girl's name was Ann. Ann Takamaki. She went to a school called Shujin in a city called Tokyo, in a neighborhood that, according to every map on her phone, didn't exist." },
      { s: 'ann', f: 'sad', t: "My friends. My whole team. They're not here. I can't call them. I can't even find Shibuya." },
      { s: 'ann', f: 'neutral', t: "There's a hotel by the station that has a room in my name. I don't know who's paying for it. I'm not asking." },
      { n: "Solar thought of Elizabeth, and her book, and her golden, curious eyes. She decided not to mention her yet." },
      { choose: [
        { t: "You're not alone here. Not anymore.", notes: 3, then: [
          { s: 'ann', f: 'surprised', t: '...' },
          { s: 'ann', f: 'happy', t: "Okay. You can't just say stuff like that to a stranger. I'm going to cry in a mall." },
          { n: "She did not cry in the mall. She pressed the heels of her hands against her eyes for exactly three seconds and then dropped them and was fine, or performing fine, which Solar knew from long experience was a very similar thing." }
        ] },
        { t: "I'll help you look for a way home.", notes: 2, then: [{ s: 'ann', f: 'happy', t: "You'd do that? You don't even know me." }] }
      ] },
      { s: 'ann', f: 'happy', t: "Okay. You fought like a Phantom Thief on that bridge. You need a codename." },
      { n: "She looked Solar up and down with the narrowed, serious eyes of someone choosing an outfit." },
      { s: 'ann', f: 'happy', t: '...Sunflare. Your codename is Sunflare. It suits you. Bright, and a little bit dangerous.' },
      { choose: [
        { t: "I'll take it.", notes: 3, then: [{ s: 'ann', f: 'happy', t: "Good, because I wasn't going to give you a choice." }] },
        { t: "What's yours?", notes: 2, then: [
          { s: 'ann', f: 'serious', t: 'Panther.' },
          { n: "She said it with a little lift of her chin, and for a second Solar could see her on that roof again, the red suit, the whip, the green moon behind her." }
        ] }
      ] },
      { n: "When Solar finally left, Ann was still sitting on the fountain, but she wasn't staring at her phone anymore. She was watching people go by, a little less like a ghost, a little more like someone deciding where to start." }
    ] },

    { after: '5/23', title: '2: crepes', music: 'sun', place: 'Paulownia Mall · Crepe Stand', scene: [
      { n: "Ann had found the only crepe stand in Paulownia Mall within forty-eight hours of arriving, which Solar was beginning to understand was simply a law of nature, like gravity, or Akihiko waking up at five." },
      { n: "It was tucked between a phone repair place and a shop that sold nothing but socks, and it smelled like butter and burnt sugar, and Ann ordered without looking at the menu, rattling off a combination of strawberries and cream and chocolate and something called a brownie crumble with the confidence of a professional." },
      { s: 'ann', f: 'happy', t: "You have to get the custard one. Trust me. I would never lie to you about custard." },
      { choose: [
        { t: 'Custard it is.', notes: 3, then: [
          { n: 'It was, unfortunately, the best thing Solar had eaten in weeks. Ann watched her take the first bite with the smug satisfaction of a prophet.' },
          { s: 'ann', f: 'happy', t: 'See? See?' }
        ] },
        { t: "I'll just have what you're having.", notes: 2, then: [{ s: 'ann', f: 'happy', t: "Bold. Respect. You might die, but respect." }] }
      ] },
      { n: "They ate standing up, leaning on the railing over the lower floor, watching people go in and out of the arcade. Ann was out of her uniform today, in a pink cardigan and jeans someone had clearly bought for her very recently, the tags snipped off with what looked like nail scissors." },
      { s: 'ann', f: 'neutral', t: "My best friend Shiho loves these. We used to get them every Friday after volleyball practice." },
      { s: 'ann', f: 'sad', t: "...Well. Her practice. I just went to watch." },
      { n: "Solar heard the small catch in it, the place where the sentence went somewhere and came back. She didn't ask. She'd always hated being asked." },
      { s: 'ann', f: 'neutral', t: "I model, back home. Magazines, mostly. It's how I pay for stuff. My parents work overseas. Designers. They're never home." },
      { n: "She said it brightly, the way you say a thing you've said so many times it's worn smooth. Solar knew that smoothness. She'd sanded her own story down the same way." },
      { choose: [
        { t: "So you live alone too.", notes: 3, then: [
          { s: 'ann', f: 'surprised', t: '...Too?' },
          { n: "Solar shrugged, the way she always did. Ann looked at her for a long moment, and something in her face softened, like she'd recognized someone across a crowded room." },
          { s: 'ann', f: 'sad', t: "...Yeah. Me too." }
        ] },
        { t: 'A model? That makes sense.', notes: 1, then: [
          { s: 'ann', f: 'flustered', t: "Okay, I don't know if that's a compliment or not, so I'm going to decide it's a compliment." }
        ] }
      ] },
      { n: "A pair of boys from Gekkoukan walked past and did the double take. Ann didn't notice. Solar watched Ann not notice, and realized it wasn't that she didn't see it. It was that she'd decided, at some point, that seeing it wasn't worth the energy." },
      { s: 'ann', f: 'happy', t: "Okay, give me your phone. I'm putting my number in. Phantom Thief protocol." },
      { n: "She typed it in fast, with two thumbs, and saved herself as Ann 🐆 with a heart after it, and handed the phone back like she'd just done something official." },
      { s: 'ann', f: 'happy', t: "Text me if you find another crepe place. Or if the green hour gets weird again. Mostly crepes, though." },
      { n: "On the way out, Ann bought a third crepe for the walk home. Solar didn't comment. Ann said, out of nowhere, \"I can feel you judging me,\" and Solar said, \"I'm not,\" and Ann said, \"Your eyebrow,\" and they both laughed so hard the sock-shop lady looked out to check on them." }
    ] },

    { after: '6/6', title: '3: the photographer', place: 'Paulownia Mall · Central Atrium', scene: [
      { n: "June, and the rainy season had turned the mall into the only dry place in Iwatodai. It was crowded and humid and smelled like wet umbrellas and the cinnamon pretzel place by the escalators." },
      { n: "They were standing outside a clothing store, Ann holding a sweater up against Solar to see if the color worked, when the man came over." },
      { n: "He was older, maybe forty, with an expensive camera around his neck and the kind of smile that arrived before he did. He had a business card already out. He was already talking." },
      { n: "Modeling agency. Ann's look. Very marketable. A test shoot, very private, his studio, this weekend. He put a hand on her shoulder while he said very private, and left it there." },
      { n: "Solar watched it happen. She watched Ann's whole body change, not flinching, nothing so obvious, just going still in a way that Solar had only ever seen in people who had learned to go still very young." },
      { n: "And then she watched it change back." },
      { s: 'ann', f: 'serious', t: "Take your hand off me." },
      { n: "She didn't raise her voice. She didn't have to. It was the voice of the girl on the roof, the one with the whip, and the man felt it, Solar could see him feel it. His hand came off her shoulder like it had been burned." },
      { s: 'ann', f: 'serious', t: "I'm not interested. And if I see you talking to any other girl in this mall, I'm going to find out exactly which agency you work for and call them myself." },
      { n: "He went. He laughed, a little, the way men like that always laugh when they leave, like it had been a joke the whole time. But he went." },
      { n: "Ann stood there with the sweater still in her hands. Her knuckles were white." },
      { choose: [
        { t: "(Stand beside her until she's ready.)", notes: 3, then: [
          { n: "Solar didn't say anything. She just moved closer, until their shoulders touched, and stayed there. After a while, Ann's hands loosened on the sweater." }
        ] },
        { t: "That was incredible.", notes: 2, then: [
          { s: 'ann', f: 'sad', t: "...It didn't feel incredible." },
          { s: 'ann', f: 'sad', t: "It felt like I'd been practicing for it." }
        ] },
        { t: 'Are you okay?', notes: 2, then: [{ s: 'ann', f: 'sad', t: "Yeah. No. Give me a second." }] }
      ] },
      { place: 'Paulownia Mall · Rooftop Garden', time: 'After School' },
      { n: "There was a small rooftop garden above the mall that nobody used when it rained. The rain had stopped. Everything was dripping. They sat on a bench that was mostly dry and looked at the gray city." },
      { s: 'ann', f: 'sad', t: "There was a teacher at my school. A gym teacher. Everybody loved him. Olympic medalist." },
      { s: 'ann', f: 'sad', t: "He wasn't who everybody thought he was. He hurt people. He hurt my friend." },
      { n: "She didn't say more than that. She didn't need to. Solar understood the shape of the thing by the way Ann was holding herself, arms crossed, small, like she was keeping something from spilling." },
      { s: 'ann', f: 'serious', t: "I swore I'd never let anyone like that get close to me again. Or anyone I care about." },
      { choose: [
        { t: "You didn't today.", notes: 3, then: [
          { s: 'ann', f: 'surprised', t: '...' },
          { s: 'ann', f: 'happy', t: "...No. I didn't." },
          { n: "She said it like she was hearing it for the first time. Like she'd needed somebody else to say it before it counted." }
        ] },
        { t: "I'm sorry. About your friend.", notes: 2, then: [{ s: 'ann', f: 'sad', t: "Me too. Every day." }] }
      ] },
      { n: "On the way down, Ann put the sweater back on its shelf. Then she went back and bought it anyway, and handed it to Solar in the bag." },
      { s: 'ann', f: 'happy', t: "The color worked. I'm not letting some creep ruin a good sweater." }
    ] },

    { after: '6/27', title: '4: ryuji', place: 'Paulownia Mall · Arcade', scene: [
      { n: "The text came in at four in the afternoon, all caps, four exclamation points: SUNFLARE. ARCADE. NOW. EMERGENCY. Solar went, expecting a crisis, and found instead a blond boy in a yellow T-shirt and a Shujin blazer losing very loudly at a punching machine." },
      { register: 'ryuji' },
      { s: 'ryuji', f: 'happy', t: "Dude! DUDE. This thing is rigged. I hit it SO hard." },
      { s: 'ann', f: 'flustered', t: "Ryuji, it says you hit it at a 'gentle breeze.' The scale goes up to 'typhoon.'" },
      { s: 'ryuji', f: 'neutral', t: "That's a lie and you know it." },
      { n: "Ryuji Sakamoto, it turned out, had fallen asleep on a train in Tokyo the night before and woken up during the green hour on the Iwatodai monorail, surrounded by coffins, screaming. He'd found Ann's hotel by, as he put it, \"following the vibes.\" Ann had found him in the lobby at seven a.m. eating every free breakfast muffin." },
      { s: 'ann', f: 'happy', t: "Sunflare, Ryuji. Ryuji, Sunflare. Be nice." },
      { s: 'ryuji', f: 'happy', t: "Sunflare? Oh, sick codename. Wait. Did you give her a codename before you gave ME a good one?" },
      { s: 'ann', f: 'neutral', t: "Yours is Skull, Ryuji. It's fine. It's a good codename." },
      { s: 'ryuji', f: 'sad', t: "It's a skull, Ann." },
      { choose: [
        { t: "Skull is a great codename.", notes: 2, then: [
          { s: 'ryuji', f: 'happy', t: "SEE? She gets it. I like her." }
        ] },
        { t: 'Want me to win you a prize, Skull?', notes: 3, then: [
          { s: 'ryuji', f: 'neutral', t: "...You think you can beat 'gentle breeze'?" },
          { n: "Solar had held a heavy bag for Akihiko Sanada. She hit the machine once, carefully, from the hips, the way he'd shown her. It said 'strong gale.'" },
          { s: 'ryuji', f: 'happy', t: "NO WAY." },
          { s: 'ann', f: 'happy', t: "Oh, I love her." }
        ] }
      ] },
      { n: "They spent the whole afternoon at the arcade. Ryuji was loud, and terrible at every game, and so happy to see Ann that it came off him like heat. They bickered constantly, about the claw machine and the rhythm game and whose fault it was that they'd gotten lost on the way to the food court, and Solar watched them and understood that this was what Ann had lost. Not a city. This." },
      { place: 'Iwatodai Station', time: 'Evening' },
      { n: "At the station, Ryuji went quiet. He kept looking at his hands, and Solar saw why. In the low gold light, they were a little too easy to see through." },
      { s: 'ryuji', f: 'sad', t: "...Huh. That's freaky." },
      { s: 'ann', f: 'sad', t: "Ryuji." },
      { s: 'ryuji', f: 'neutral', t: "I'm okay. I think it's just... the green hour wants me back. Or home does. Something's pulling." },
      { n: "He grinned at her, lopsided, the kind of grin people use to carry something heavy for someone else." },
      { s: 'ryuji', f: 'happy', t: "Hey. Sunflare. Look after her for me, yeah? She acts tough but she cries at dog commercials." },
      { s: 'ann', f: 'flustered', t: "RYUJI." },
      { choose: [
        { t: "I'll look after her. Promise.", notes: 3, then: [{ s: 'ryuji', f: 'happy', t: "Knew I liked you." }] },
        { t: "She cries at cat commercials too.", notes: 2, then: [
          { s: 'ryuji', f: 'happy', t: "HA! You've seen it!" },
          { s: 'ann', f: 'flustered', t: "I'm leaving. I'm leaving both of you." }
        ] }
      ] },
      { n: "He was gone in the morning. Ann texted Solar at six a.m. Solar was already awake. She'd learned to be." }
    ] },

    { after: '7/11', title: '5: shiho', music: 'tender', place: 'Port Island · Seaside Park', scene: [
      { n: "July, and the heat was back for good. The seaside park on Port Island had a long promenade along the water, and in the evenings it filled up with joggers and couples and old men fishing off the rail, and the breeze off the bay was the only thing in the whole city that felt cool." },
      { n: "Ann had been quiet since Ryuji left. Still bright, still funny, still ordering three crepes. But there were gaps now. Moments where she'd stop mid-sentence and look at the water like she was waiting for someone to come walking up out of it." },
      { s: 'ann', f: 'neutral', t: "Can I show you something?" },
      { n: "She held out her phone. On the screen was a photo of two girls in volleyball uniforms, sweaty and grinning and flashing peace signs at the camera. One of them was Ann. The other girl had dark hair in a ponytail and a smile that took up her whole face." },
      { register: 'shiho' },
      { s: 'ann', f: 'happy', t: "That's Shiho. My best friend since middle school." },
      { s: 'ann', f: 'sad', t: "The teacher I told you about. He hurt her. Badly enough that she..." },
      { n: "Ann stopped. The breeze came off the water and lifted her hair and set it down again." },
      { s: 'ann', f: 'sad', t: "She's okay now. She's getting better. She moved away. But I didn't see it. I was right there and I didn't see it until it was almost too late." },
      { n: "Solar knew this sentence. She had her own version of it. Every version of it ended the same way, with you, alone, at night, running the whole thing back to find the moment you should have looked up." },
      { choose: [
        { t: "You saw it in the end. You fought for her.", notes: 3, then: [
          { s: 'ann', f: 'sad', t: "...Yeah. I did. We all did." },
          { s: 'ann', f: 'neutral', t: "That's how I got my Persona, actually. I got so angry I couldn't be scared anymore." },
          { n: "She said it simply, and Solar thought of the roof, the moon, the cold weight against her own temple, and thought they might have more in common than either of them was ready to say." }
        ] },
        { t: "It's not your fault.", notes: 2, then: [
          { s: 'ann', f: 'sad', t: "Everyone says that." },
          { s: 'ann', f: 'neutral', t: "...I'm working on believing it." }
        ] },
        { t: "(Take her hand.)", notes: 3, then: [
          { s: 'ann', f: 'surprised', t: '...' },
          { n: "Ann's hand was cold, even in the heat. She held on hard. She didn't say anything. She didn't need to." }
        ] }
      ] },
      { s: 'ann', f: 'neutral', t: "Being here, it's weird. Nobody knows me. Nobody knows what happened. I don't have to be the girl from the rumors." },
      { s: 'ann', f: 'sad', t: "I don't know if that makes me want to go home more, or less." },
      { n: "The sun was going down across the bay, and the water was turning the color of the inside of a peach, and a jogger went past with headphones in, singing badly. Ann laughed, startled, and wiped her eyes with the back of her wrist." },
      { s: 'ann', f: 'happy', t: "Okay. I'm done being sad for today. Crepes?" },
      { n: "Solar said yes. She always said yes. She was beginning to suspect that was the point." }
    ] },

    { after: '8/1', title: '6: the nav', place: 'Ann\'s Hotel · Lobby', scene: [
      { n: "The hotel lobby was cold enough to keep milk in, and Ann was sitting cross-legged on one of the leather chairs with her phone in both hands, frowning at it so hard Solar could hear it from the door." },
      { s: 'ann', f: 'surprised', t: "Sunflare! Come here. Come here come here come here. My Nav is doing something." },
      { n: "The app was the strange one, the red one with the eye on it that Ann had said used to take her into the hearts of bad people. It had been dead since she arrived. Now it was flickering, the screen jumping with static, the eye opening and closing like it couldn't decide if it was awake." },
      { n: "Then Solar's phone buzzed in her pocket. And kept buzzing. And then, very clearly, started talking." },
      { phone: [
        { from: 'futaba', t: 'hello' },
        { from: 'futaba', t: 'is this the right phone' },
        { from: 'futaba', t: 'ann is this you. if this is a random guy pls ignore and also block me' },
        { from: 'solar', t: "who is this" },
        { from: 'futaba', t: 'oh no it is a random guy' },
        { from: 'solar', t: "I'm Solar. Ann's with me." },
        { from: 'futaba', t: 'OH' },
        { from: 'futaba', t: 'ok hi solar. i am futaba. i am in your phone now. sorry. it was the only signal that worked' }
      ], contact: 'Unknown Number', handle: 'futaba', me: 'solar' },
      { register: 'futaba' },
      { s: 'ann', f: 'happy', t: "FUTABA." },
      { s: 'futaba', f: 'happy', t: "Ann! Okay, okay, don't yell, the connection is held together with spit and tape and a lot of genius." },
      { n: "Futaba's voice came out of Solar's phone speaker, crackly and fast and delighted, and somehow her face was there too, on Solar's lock screen, a girl with huge glasses and a tangle of orange hair and headphones around her neck, squinting at them like they were a puzzle she'd been working on for weeks." },
      { s: 'futaba', f: 'neutral', t: "Your world's signal is SO weird. It's like trying to get wifi through a lasagna. Something keeps eating the packets at midnight." },
      { choose: [
        { t: "That's the Dark Hour.", notes: 3, then: [
          { s: 'futaba', f: 'surprised', t: "...The what. Okay, that's terrifying and I need to know everything about it immediately." }
        ] },
        { t: "Can you get her home?", notes: 2, then: [
          { s: 'futaba', f: 'serious', t: "I'm working on it. It's not a door. It's more like... a tide. I need to figure out when it goes out." }
        ] }
      ] },
      { s: 'futaba', f: 'sad', t: "Everybody misses you, Ann. Ryuji came back and wouldn't shut up about a girl called Sunflare who punched a machine to 'strong gale.'" },
      { s: 'ann', f: 'happy', t: "She did! It was amazing!" },
      { s: 'futaba', f: 'happy', t: "Anyway. I'm going to make a group chat. Don't freak out when it appears. It's me. It's always me." },
      { n: "The connection crackled and dropped. The phone went quiet. Ann sat very still for a moment, and then put her face in her hands and laughed and cried at the same time, the specific, helpless sound of someone who had been holding her breath for three months." },
      { choose: [
        { t: "(Sit with her.)", notes: 3, then: [{ n: "Solar sat on the arm of the chair and let Ann lean against her. It was cold in the lobby. Ann was warm. Neither of them said anything for a long time." }] },
        { t: "They haven't forgotten you.", notes: 3, then: [{ s: 'ann', f: 'sad', t: "...I was so scared they would." }] }
      ] },
      { s: 'ann', f: 'neutral', t: "...Sunflare. When she figures it out. When I can go home." },
      { s: 'ann', f: 'sad', t: "I don't know what I'm going to do about you." },
      { n: "She said it like a joke. It wasn't a joke. Solar felt it land somewhere under her ribs and stay there." }
    ] },

    { after: '8/22', title: '7: queen', place: 'Iwatodai Dorm · Lounge', scene: [
      { n: "The second one fell through on a Saturday, during the Dark Hour, onto the roof of the dorm, in a black-and-studded biker suit with a mask, swinging her fists at the coffins like they had personally offended her." },
      { n: "By the time the green light faded, she had been talked down by Mitsuru, given a towel by Yukari, and introduced to the dorm's coffee table, at which she was now sitting with perfect posture and a cup of tea, opposite Mitsuru, in the specific silence of two people who had immediately recognized one another." },
      { register: 'makoto' },
      { s: 'makoto', f: 'neutral', t: "Makoto Niijima. Student council president, Shujin Academy." },
      { s: 'mitsuru', f: 'neutral', t: "Mitsuru Kirijo. Student council president, Gekkoukan High." },
      { n: "They looked at each other over the teacups like two generals across a map." },
      { s: 'ann', f: 'flustered', t: "Oh no. Oh no, there's two of them." },
      { n: "Ann had arrived ten minutes after the green hour ended, running the whole way from the hotel in her pajamas, and was now sitting next to Solar on the couch, watching the summit unfold with the horror and delight of someone watching a nature documentary." },
      { s: 'makoto', f: 'serious', t: "You've been operating in this 'Dark Hour' with how many members? And what's your chain of command?" },
      { s: 'mitsuru', f: 'neutral', t: "Seven, at present. And I would be happy to show you our tactical reports, if you'll show me yours." },
      { s: 'makoto', f: 'happy', t: "...I would love that." },
      { choose: [
        { t: "Should we leave them alone?", notes: 3, then: [
          { s: 'ann', f: 'happy', t: "Absolutely not. This is the best thing that's ever happened." }
        ] },
        { t: 'Makoto, are you okay? You just fell out of the sky.', notes: 2, then: [
          { s: 'makoto', f: 'neutral', t: "I'm fine. I've had worse days. I was in a casino once." },
          { n: "Solar decided not to ask." }
        ] }
      ] },
      { n: "They talked until two in the morning. Strategy, formation, how to make a group of reckless teenagers follow a plan, how to stop the reckless ones from punching things before the plan started. At one point Makoto said Ryuji's name and Mitsuru said Akihiko's at the exact same moment, with the exact same weary expression, and both of them almost smiled." },
      { place: 'Iwatodai Dorm · Front Steps', time: 'Evening' },
      { n: "Makoto started to fade a little before dawn, on the front steps, the way Ryuji had. She looked at her hands and sighed, practical even about this." },
      { s: 'makoto', f: 'neutral', t: "Ann. Futaba says she's close. Weeks, maybe. Not months." },
      { s: 'ann', f: 'surprised', t: "...Weeks." },
      { s: 'makoto', f: 'happy', t: "Sunflare. Thank you for looking after our Panther. She's important to us." },
      { s: 'makoto', f: 'neutral', t: "...She seems important to you, too." },
      { n: "Makoto said it the way student council presidents say everything, plainly, like reading the minutes. Solar felt her face go hot. Ann, beside her, made a small noise and became extremely interested in the sky." },
      { n: "When Makoto was gone, Ann didn't say anything for a long time. Then she said, \"Weeks,\" again, quietly, to nobody." }
    ] },

    { after: '9/19', title: '8: carmen', place: 'Paulownia Mall · Rooftop Garden', scene: [
      { n: "September, and the first cool evening of the year. The rooftop garden above the mall had gone a little wild over the summer, the planters spilling over, a few late flowers hanging on, the city below starting to light up one window at a time." },
      { n: "Ann had brought crepes. She hadn't eaten hers. It sat in her lap, slowly collapsing." },
      { s: 'ann', f: 'neutral', t: "Can I tell you about Carmen?" },
      { n: "Solar knew the name. Ann had said it in the green hour, once, when the shadow on the monorail had come too close. She'd said it like a command, and something had answered." },
      { s: 'ann', f: 'neutral', t: "When she woke up inside me, it felt like someone kicking a door open. Like, all my life I'd been smiling for cameras and being polite to men I hated and pretending I didn't hear what people said about me." },
      { s: 'ann', f: 'serious', t: "And Carmen was just... no. No more. I'm done being what you want. I'm going to be what I want." },
      { s: 'ann', f: 'sad', t: "...And then I came here, and nobody wanted anything from me at all, and I didn't know what I wanted either." },
      { choose: [
        { t: "What do you want now?", notes: 3, then: [
          { s: 'ann', f: 'sad', t: "That's the problem." },
          { s: 'ann', f: 'flustered', t: "I want to go home. I want to see my friends. I want to sleep in my own bed." },
          { s: 'ann', f: 'blushing', t: "And I want to stay. Because of you. And those two things don't fit in the same body, Sunflare." }
        ] },
        { t: "You don't have to decide tonight.", notes: 2, then: [
          { s: 'ann', f: 'sad', t: "Futaba might decide for me. She's so close." },
          { s: 'ann', f: 'blushing', t: "...And I'm scared of the part of me that's hoping she fails." }
        ] }
      ] },
      { n: "There it was, said out loud. It hung in the cool air between them, too big for the bench, too big for the roof. Solar's heart was doing something specific and unhelpful. Her hands were cold. Her face was not." },
      { choose: [
        { t: "I'm scared too.", notes: 3, then: [
          { s: 'ann', f: 'surprised', t: '...' },
          { s: 'ann', f: 'sad', t: "...Okay. Okay, good. I mean, not good. But good that it's not just me." }
        ] },
        { t: "Whatever happens, I'm glad you fell into my world.", notes: 3, then: [
          { s: 'ann', f: 'blushing', t: "...You have got to stop saying stuff like that. I can't handle it." },
          { n: "She didn't look like she wanted Solar to stop. She looked like she wanted to hear it again." }
        ] }
      ] },
      { n: "Ann finally ate her crepe, all of it, in about four bites, like she was angry at it. Then she leaned her head on Solar's shoulder and they watched the city light up, and neither of them mentioned the word weeks." }
    ] },

    { after: '10/24', title: '9: what are we, sunflare', place: 'Paulownia Mall · Fountain', scene: [
      { n: "October, cold and clear. Paulownia had put up its autumn decorations, plastic maple leaves strung over the walkways, a pumpkin display by the arcade that Ann had taken nineteen photos of." },
      { n: "They were back at the fountain. The same one. Ann had picked it. Solar noticed that she'd picked it." },
      { n: "Futaba had texted the night before. Not a joke this time, not a meme, just three words: i found it. And then: end of the month. the green hour will be thinnest at the station. And then, a minute later: i'm sorry, ann. i know it's complicated." },
      { s: 'ann', f: 'neutral', t: "So. I'm going home in a couple of weeks." },
      { n: "She said it to the water. Her voice was very steady. It was the steadiness of something being held still with both hands." },
      { s: 'ann', f: 'serious', t: "And before I go, I need to know. Because I'm not going home and spending the rest of my life wondering." },
      { s: 'ann', f: 'blushing', t: "What are we, Sunflare?" },
      { route: [
        { t: "I'm in love with you, Ann.", route: 'romance', notes: 3, then: [
          { s: 'ann', f: 'surprised', t: '...' },
          { n: "For a second she didn't move at all. Then her whole face crumpled and brightened at the same time, which Solar had not known a face could do." },
          { s: 'ann', f: 'blushing', t: "Oh my god. Okay. Me too. Obviously me too. Since the custard crepe, probably. Since the stupid eyebrow." },
          { n: "She grabbed Solar's hands, both of them, and held on like the fountain might wash her away. Some kids by the arcade were staring. Ann didn't notice. Ann had decided, a long time ago, that seeing it wasn't worth the energy, and she was not going to start now." }
        ] },
        { t: "You're my best friend. The best I've ever had.", route: 'friend', notes: 3, then: [
          { s: 'ann', f: 'surprised', t: '...' },
          { s: 'ann', f: 'happy', t: "...Yeah. Yeah, you are too. Oh my god, I'm going to cry in a mall again." },
          { n: "She did, a little, this time. She hugged Solar so hard both of them nearly went into the fountain, and when she let go she was laughing." },
          { s: 'ann', f: 'happy', t: "Phantom Thief best friends. That's forever. That's a contract." }
        ] }
      ] }
    ] },

    { after: '10/30', title: '10: red', place: 'Iwatodai Station · Platform', scene: [
      { n: "The end of October, close to midnight. The station platform was nearly empty, the last train gone, the lights humming. Ann was wearing the white hoodie and the red tights and her Shujin blazer again, the way she'd arrived, like she was putting herself back together piece by piece." },
      { n: "Futaba said it would happen during the green hour, at the station, where the line was thinnest. They had an hour, maybe less. Ann had spent most of it pacing." },
      { s: 'ann', f: 'neutral', t: "Okay. I have something for you. Don't make it weird." },
      { n: "She held it out. It was her mask. Panther's mask, red, with the little cat ears, the one she'd worn on the roof the night Solar first saw her." },
      { s: 'ann', f: 'sad', t: "I'll get a new one. Morgana can make anything. But I want you to have this one." },
      { s: 'ann', f: 'happy', t: "So you remember you're a Phantom Thief too. You stole something, Sunflare." },
      { ifRoute: 'friend', then: [
        { s: 'ann', f: 'happy', t: "You stole my whole sad, lonely summer and made it the best one I've ever had." },
        { choose: [
          { t: "I'll wear it every Halloween.", notes: 3, then: [{ s: 'ann', f: 'happy', t: "You'd better. Send pictures. Futaba will find a way." }] },
          { t: "I'll miss you, Panther.", notes: 3, then: [{ s: 'ann', f: 'sad', t: "...Don't. If you say it I'll say it and then neither of us is going to make it through this." }] }
        ] },
        { n: "When the green came down over the station, Ann hugged her one last time, hard, and then stepped back onto the empty tracks where the light was strangest. She was laughing when she went. Solar was too, mostly." },
        { n: "The mask was still warm in her hands." }
      ] },
      { ifRoute: 'romance', then: [
        { s: 'ann', f: 'blushing', t: "You stole my heart, okay? That's the stupid, cheesy truth. You're the only person who's ever stolen anything from me that I didn't want back." },
        { choose: [
          { t: "Then come back for it.", notes: 3, then: [
            { s: 'ann', f: 'sad', t: "...Futaba says the tide goes out. Which means it comes back in." },
            { s: 'ann', f: 'blushing', t: "So I'm coming back. I don't know when. But I'm coming back, Sunflare." }
          ] },
          { t: "(Kiss her.)", notes: 3, then: [
            { s: 'ann', f: 'surprised', t: '...!' },
            { s: 'ann', f: 'blushing', t: "...Okay. Okay, wow. Okay, I'm definitely coming back." }
          ] }
        ] },
        { n: "When the green came down over the station, she held onto Solar's hand until the very last second, until her fingers went thin and cool and translucent, until there was nothing left to hold but the shape of where she'd been." },
        { n: "The mask was still warm. Solar held it all the way home." }
      ] }
    ] }
  ]
});
