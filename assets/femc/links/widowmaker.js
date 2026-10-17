/* Widowmaker · XIII Death. Arrives 10/4 (the night after Shinjiro). Friendship only. Format notes are at the top of akihiko.js.
   Rank 1 branches on whether Solar already met her with Kiriko (Kiriko rank 8, Moonlight Bridge).
   Rank 6 is the "princesse" slip: an echo of the boy who mains her in another world. Kept quiet on purpose. */
FemcSocial.define({
  id: 'widowmaker', name: 'Widowmaker', short: 'Widowmaker', arcana: 'Death', numeral: 'XIII', from: 'Overwatch',
  arrives: '10/4',
  home: { place: 'Moonlight Bridge', slot: 1, days: [0, 2, 4, 6], hint: 'Evenings on Sundays, Tuesdays, Thursdays and Saturdays, somewhere up in the cables of Moonlight Bridge.' },
  approach: "High up in the cables of Moonlight Bridge there's a shape that wasn't there yesterday. It's watching you.",
  invite: {
    ask: [
      "Come to the bridge.",
      "Are you free.",
      "The city is quiet tonight. Come.",
      "The bridge. Tonight.",
      "I am bored. Come and fix it.",
      "The wind has dropped. You will complain less. Come.",
      "I am on the north tower. You know the way.",
      "Bring coffee. Black."
    ],
    ok: ["Bien.", "Good. Do not be late.", "I will see you before you see me."],
    no: ["Hm. Another night, then.", "Fine.", "No matter. I will be here. I am always here."]
  },
  hangouts: [
    [
      { n: "From the railing of Moonlight Bridge you could see the whole pedestrian walkway below, a strip of yellow light with people moving along it in ones and twos, and Widowmaker was watching them the way other people watched television, with total attention and no visible enjoyment." },
      { s: 'widowmaker', f: 'neutral', t: "The man in the grey coat. He is late for something. He has checked his watch four times in thirty meters." },
      { s: 'widowmaker', f: 'neutral', t: "The woman with the bag. Her shoes hurt. She will take them off at the end of the bridge." },
      { choose: [
        { t: "The kid with the headphones?", notes: 3, then: [
          { s: 'widowmaker', f: 'neutral', t: "Hm. Sixteen. Avoiding home. Walking the long way on purpose." },
          { s: 'widowmaker', f: 'neutral', t: "...You do the same thing. You think I have not noticed." }
        ] },
        { t: "You could be wrong.", notes: 2, then: [
          { s: 'widowmaker', f: 'neutral', t: "I could. I am not." },
          { n: "At the end of the bridge the woman stopped, leaned on the railing, and took off her shoes. Widowmaker said nothing. She didn't need to." }
        ] },
        { t: "What do you see when you look at me?", notes: 1, then: [{ s: 'widowmaker', f: 'serious', t: "A girl who asks questions she does not want answered. Pick someone else." }] }
      ] },
      { n: "They watched the walkway until the last commuters thinned out, the water black and slow below, the wind steady off the bay. It was a very strange way to spend an evening, and there was nowhere else she wanted to be." }
    ],
    [
      { n: "There was a vending machine at the foot of the bridge tower, lit up white in the dark like a small shrine to caffeine, and Solar came up the access stairs with two hot cans of black coffee pressed to her chest because her fingers had stopped working somewhere around the third flight." },
      { n: "Widowmaker took one, read the label, turned it over, and read the other side." },
      { s: 'widowmaker', f: 'neutral', t: "This country puts coffee in a can and heats it in a machine. On the street. For anyone." },
      { s: 'widowmaker', f: 'serious', t: "In Paris this would be a crime." },
      { choose: [
        { t: "Is it bad?", notes: 2, then: [
          { s: 'widowmaker', f: 'neutral', t: "It is terrible." },
          { n: "She drank the whole thing without stopping and set the empty can on the railing very precisely, label facing out, like a trophy from a minor war." }
        ] },
        { t: "(Hold the can against your cheek and say nothing.)", notes: 3, then: [
          { n: "Widowmaker watched her do it. A long pause. Then she did the same thing, very seriously, the hot can pressed to her cheek, staring out at the city as though the two of them were on a stakeout." },
          { s: 'widowmaker', f: 'neutral', t: "I am told this is warm." }
        ] }
      ] },
      { n: "The two empty cans stood side by side on the railing until a gust took one of them, and Widowmaker caught it without looking, and set it back." }
    ],
    [
      { n: "A seagull had landed on the railing about a meter from Widowmaker, and the two of them were having what could only be called a standoff, the gull with its head cocked and one yellow eye fixed on her, Widowmaker perfectly motionless with her own eyes fixed on it, each of them clearly waiting for the other to blink." },
      { s: 'widowmaker', f: 'serious', t: "Do not move. It thinks it is winning." },
      { choose: [
        { t: "(Don't move.)", notes: 3, then: [
          { n: "Solar didn't move. Thirty seconds. A minute. The wind picked up and the gull's feathers ruffled and Widowmaker's braid lifted and neither of them so much as twitched. Then the gull, with tremendous dignity, turned around and stepped off the railing into the air." },
          { s: 'widowmaker', f: 'happy', t: "Hm. Good. That is how it is done." }
        ] },
        { t: "Are you seriously fighting a bird?", notes: 1, then: [
          { n: "The gull, startled by her voice, flapped off over the water screaming, and Widowmaker turned and gave Solar a long, flat look of professional disappointment." },
          { s: 'widowmaker', f: 'neutral', t: "I had it." }
        ] },
        { t: "Two thousand yen on the bird.", notes: 2, then: [
          { s: 'widowmaker', f: 'neutral', t: "Then you will lose two thousand yen." },
          { n: "The gull blinked first. Widowmaker did not gloat. She didn't need to. Her whole posture gloated for her." }
        ] }
      ] },
      { n: "For the rest of the evening, whenever a gull flew past, her eyes followed it, just slightly, the way you'd keep track of an old rival." }
    ],
    [
      { n: "Solar had brought her physics homework, because it was due tomorrow and the bridge was quieter than the dorm, and she was sitting on the walkway with her back against the railing and the worksheet on her knee, losing a fight with a cannonball." },
      { n: "A shadow fell across the page. Widowmaker was reading over her shoulder from the cable above, upside down, hanging from one hooked foot like a bat with a rifle." },
      { s: 'widowmaker', f: 'neutral', t: "Number four is wrong. You have forgotten the wind." },
      { s: 'solar', t: "There's no wind in the question." },
      { s: 'widowmaker', f: 'serious', t: "There is always wind." },
      { choose: [
        { t: "Okay. Then show me.", notes: 3, then: [
          { n: "She dropped down beside Solar, took the pencil, and solved number four in the margin in about nine seconds, small exact numbers in a hand like a typewriter, then five and six, and then, apparently unable to stop, sketched the arc of the cannonball and where it would have landed in Iwatodai, which was Hagakure." },
          { s: 'widowmaker', f: 'neutral', t: "Show your work. Teachers like that. Do not show them mine." }
        ] },
        { t: "I'm putting no wind. That's the answer they want.", notes: 2, then: [{ s: 'widowmaker', f: 'neutral', t: "Then you will be correct on paper and wrong in the world. Like most people." }] }
      ] },
      { n: "Solar got number four right the next day. She left out the wind. She did, privately, keep thinking about it." }
    ],
    [
      { n: "Widowmaker didn't like to talk much, and she liked being talked at even less, so some evenings they just stood on the bridge and let the city do the talking, the cars on the deck below, the hollow boom of the wind in the cables, the monorail sliding across the dark toward Port Island like a lit-up zipper." },
      { s: 'widowmaker', f: 'neutral', t: "Nine forty-two. Exactly on time. It is always exactly on time." },
      { s: 'widowmaker', f: 'neutral', t: "I do not trust it." },
      { choose: [
        { t: "Trains here are never late.", notes: 2, then: [{ s: 'widowmaker', f: 'serious', t: "Everything is late eventually. It is a question of patience." }] },
        { t: "(Stay quiet and watch it go.)", notes: 3, then: [
          { n: "Solar said nothing. They watched the train out of sight together, the lights shrinking to a thread and then to nothing, and when it was gone Widowmaker let out a breath that might have been approval, or might have been the wind." }
        ] },
        { t: "You'd make a terrible commuter.", notes: 2, then: [{ s: 'widowmaker', f: 'happy', t: "I would make an excellent commuter. No one would sit next to me." }] }
      ] },
      { n: "The next train came at nine fifty-four. Widowmaker checked. It was on time. She seemed to take it personally." }
    ]
  ],
  // After MAX (rank 10 is 1/24 or later, her last week): four friend scenes, then they rotate. Nothing here is a goodbye; rank 10 and the story do that.
  afterMax: [
    { title: 'nine forty-two', place: 'Iwatodai Station · Platform', music: 'night', scene: [
      { n: "Widowmaker had watched the monorail cross the bay every night since October, from forty meters up, and had taken its punctuality as a personal insult every single time, and had never once been on it. Solar found this out by accident and could not let it go." },
      { n: "So at nine thirty-eight on a cold weeknight they were standing on the platform at Iwatodai Station under the fluorescent lights, between a vending machine and a man asleep upright on a bench in his coat, and Widowmaker was holding a ticket between two fingers like a piece of evidence." },
      { s: 'widowmaker', f: 'neutral', t: "Four minutes. It will be late. I can feel it." },
      { n: "It was not late. It came in at nine forty-two exactly, smooth and white and humming, the doors sighing open in front of them, and Widowmaker looked at it for a long second with the expression of a woman who had been proved wrong by a machine in public." },
      { n: "She got on. She sat down. And nobody sat next to her." },
      { n: "Not because of the rifle, which she had left on the bridge in some arrangement Solar didn't want to know about. Not because of her skin, which in the yellow carriage light looked almost gray, almost ordinary. Just because. Something in the way she sat. People got on at the next stop and looked at the empty seat beside her and kept walking, and she watched every one of them do it and looked, Solar thought, very slightly pleased." },
      { s: 'widowmaker', f: 'happy', t: "I told you. An excellent commuter." },
      { choose: [
        { t: "(Sit next to her.)", notes: 3, then: [
          { n: "Solar sat next to her. Widowmaker turned and gave her the long flat sniper look, and then turned back to the window, and her shoulder stayed exactly where it was, which was against Solar's, which was a choice." }
        ] },
        { t: "(Sit across from her, so you can watch her watch.)", notes: 2, then: [
          { n: "Solar sat across from her so she could watch her watch, and it was worth it. Widowmaker studied every person in the carriage the way she studied the walkway from above, cataloguing, late, tired, avoiding home, except that she was doing it from a meter away now, close enough to smell the man's cigarettes and see that the woman's shoes were new." }
        ] }
      ] },
      { n: "The train went out onto the bridge. It ran right past her tower, the one she stood on every night, and Widowmaker turned in her seat and pressed two fingers to the glass and looked up at the cables going by in the dark, at the place where she would have been standing, at nothing." },
      { s: 'widowmaker', f: 'neutral', t: "Hm. So that is what it looks like from in here." },
      { s: 'widowmaker', f: 'sad', t: "It is very small. The place where I stand. I thought it was the whole sky." },
      { choose: [
        { t: "You said watching isn't the same as being in it.", notes: 3, then: [
          { s: 'widowmaker', f: 'neutral', t: "I did. On the tower. With the scope." },
          { s: 'widowmaker', f: 'happy', t: "...I am in it now. On a train. Beside a man who smells of mackerel. It is terrible." },
          { s: 'widowmaker', f: 'happy', t: "I do not want to get off." }
        ] },
        { t: "Want to go round again?", notes: 3, then: [
          { s: 'widowmaker', f: 'surprised', t: "...Again?" },
          { s: 'solar', t: "It's a loop. It just goes round." },
          { n: "Widowmaker looked at her as if she'd suggested something wildly decadent, and then settled back into the seat, and crossed her legs, and folded her hands on her knee, and didn't get off at Port Island, or at Iwatodai, or the time after that." }
        ] }
      ] },
      { n: "They rode until the last train. Widowmaker checked the time at every station. It was on time at every station. She said nothing about it. On the walk back she announced, out of nowhere, that she had been wrong about the trains here and would like it never to be mentioned again, and Solar mentioned it the very next day, and was looked at." }
    ] },
    { title: 'stakeout', place: 'Moonlight Bridge', scene: [
      { n: "The stakeout had been Kiriko's idea, months ago, and Kiriko did not let ideas go. She'd decided that if it didn't happen this week it was never going to happen, and had said so, in capitals, eleven times." },
      { n: "She brought a blanket and a thermos and half a kotatsu, the quilt and the little table without the heater, because she hadn't been able to get the heater up the access stairs and had left it with a very confused security guard. Solar brought strawberry shortcake, not too sweet, which had taken three bakeries. And coffee. Black." },
      { n: "Widowmaker brought nothing, and sat at the far end of the kotatsu with the blanket over knees that couldn't feel it, eating shortcake with a plastic fork in small exact bites, as though dismantling it." },
      { s: 'widowmaker', f: 'neutral', t: "This is not a stakeout. Nobody is being watched." },
      { s: 'kiriko', f: 'happy', t: "We're watching the city! It's a city stakeout!" },
      { s: 'widowmaker', f: 'neutral', t: "That is called looking." },
      { s: 'kiriko', f: 'serious', t: "And the pigeon. We're watching the pigeon." },
      { n: "The pigeon had come. Nobody had invited it. It sat on the railing a careful meter from the shortcake with its head on one side, and Widowmaker had been watching it since it landed, without blinking, in a way that made Solar think of a gull, and an old rivalry, and a widening of the field." },
      { choose: [
        { t: "(Hold your coffee to your cheek and stare the pigeon down too.)", notes: 3, then: [
          { n: "Solar did it. Widowmaker saw her out of the corner of her eye and, without a word, put her own can to her cheek, and then Kiriko did too, and the three of them sat in a row at a kotatsu with no heater, cans pressed to their faces, staring down a pigeon on Moonlight Bridge, until the pigeon, after a long and dignified pause, left." },
          { s: 'widowmaker', f: 'happy', t: "Hm. Good. That is how it is done." }
        ] },
        { t: "(Give the pigeon a crumb.)", notes: 2, then: [
          { s: 'widowmaker', f: 'serious', t: "Do not. It will tell the others." },
          { n: "It told the others. By nine there were four of them in a row on the railing, like a jury, and Widowmaker spent the rest of the evening glaring at them with such concentrated hostility that Kiriko had to put her face in the blanket to laugh." }
        ] }
      ] },
      { s: 'kiriko', f: 'happy', t: "Stakeout fortune! For the sniper. I'm not asking." },
      { s: 'kiriko', f: 'neutral', t: "Kichi. Blessing. \"Those who keep watch are also watched over.\"" },
      { s: 'widowmaker', f: 'flustered', t: "...Your fortunes are very pointed, little fox." },
      { n: "Later, with the cake gone and the thermos empty and the bay black and glittering below, Kiriko fell asleep sitting up against Solar's shoulder with her mouth open, the way she did after a whole day on the roofs, and her fox curled up glowing in her lap like a cat." },
      { n: "Widowmaker looked at her for a long time. Then she took off the red scarf, which she had not taken off since November, not once, and leaned across the kotatsu and wound it around Kiriko's neck, once, twice, carefully, tucking in the ends." },
      { s: 'widowmaker', f: 'neutral', t: "She feels the cold. She complains about it constantly. It is very tiring." },
      { choose: [
        { t: "(Say nothing. Pull the blanket up over Kiriko's knees.)", notes: 3, then: [
          { n: "Solar said nothing and pulled the blanket up over Kiriko's knees, and Widowmaker watched her do it, and something in her face, which by now Solar could almost read, went very quiet and very still, the way it went before a shot, except there wasn't one." }
        ] },
        { t: "That's nice of you.", notes: 2, then: [
          { s: 'widowmaker', f: 'serious', t: "It is practical. If she shivers she will wake up, and talk." }
        ] }
      ] },
      { n: "At eleven Kiriko woke up wearing a red scarf she didn't remember putting on, and looked at it, and looked at Widowmaker, who was studying the horizon with intense professional interest, and opened her mouth, and Solar shook her head, just slightly." },
      { n: "Kiriko closed her mouth. She kept the scarf on to the end of the bridge. Then she took it off and handed it back without a word, and Widowmaker took it without a word and put it on, and it was, Solar thought, the loudest conversation either of them had ever had." }
    ] },
    { title: 'there is always wind', place: 'Moonlight Bridge', scene: [
      { n: "Solar came up the access stairs with her physics test folded in her coat and handed it over without saying anything, and Widowmaker unfolded it on the railing and found question six in about half a second, because it had a large red cross on it and a note in the margin in the teacher's handwriting, which said no wind given in question, see me." },
      { n: "Solar had put in the wind. She had done it on purpose. She had sat in the exam with her pencil over the answer for a full minute, thinking about a woman who had once told her, upside down from a cable, that there is always wind, and then put it in anyway." },
      { s: 'widowmaker', f: 'serious', t: "He has marked you wrong." },
      { s: 'solar', t: "She. And I am wrong. On paper." },
      { s: 'widowmaker', f: 'serious', t: "Give me her name." },
      { choose: [
        { t: "Absolutely not.", notes: 3, then: [
          { s: 'widowmaker', f: 'neutral', t: "I would only talk to her." },
          { s: 'solar', t: "From where?" },
          { s: 'widowmaker', f: 'neutral', t: "...From a reasonable distance." }
        ] },
        { t: "You told me there's always wind. I picked the world over the mark.", notes: 3, then: [
          { s: 'widowmaker', f: 'surprised', t: "...I did not think you would choose the world. Most people want the mark." },
          { n: "She looked at the red cross a while longer, and then folded the test back along its creases and handed it over very carefully, like something worth keeping, which Solar supposed it now was." }
        ] }
      ] },
      { n: "Then she stepped up onto the railing and held out her hand." },
      { s: 'widowmaker', f: 'neutral', t: "Come. If you are going to put in the wind, you should at least know how to read it." },
      { n: "So she taught her. Solar on the walkway, because she wasn't going up the cables in January for anybody, and Widowmaker beside her on the railing, pointing. The flag on the customs building across the water, which way it lay and how hard. The steam from a vent on a roof in Port Island, bending. The way the light on the black water broke into lines when the wind ran over it, and how far apart the lines were, and what that meant. The sound of the monorail, how it reached you early or late depending on which way the air was going." },
      { s: 'widowmaker', f: 'neutral', t: "Now. Close your eyes. Which way." },
      { choose: [
        { t: "(Close your eyes. Feel it on your face.)", notes: 3, then: [
          { n: "Solar closed her eyes. The cold came at her from the left, off the bay, steady, with something underneath it, a lift, like the air was being drawn up the side of the bridge. Her hair went across her mouth. She pointed." },
          { s: 'widowmaker', f: 'happy', t: "...Hm. Yes. And it will turn in a quarter of an hour. Feel the edge of it." },
          { n: "Solar couldn't feel the edge of it. Fifteen minutes later the wind turned and came from the other side, and Widowmaker didn't say anything at all, because she didn't need to." }
        ] },
        { t: "(Lick a finger and hold it up.)", notes: 1, then: [
          { s: 'widowmaker', f: 'serious', t: "That is a children's trick." },
          { s: 'solar', t: "Is it wrong?" },
          { s: 'widowmaker', f: 'neutral', t: "...No. It is a children's trick that works. I hate those." }
        ] }
      ] },
      { s: 'widowmaker', f: 'neutral', t: "There is wind in every question, petite. Every one. Even when they do not write it down. Especially then." },
      { s: 'widowmaker', f: 'sad', t: "When I am gone, and you are on some bridge in some other year, and you feel it come from the left, I would like you to know which way it is going. That is all. That is the whole lesson." },
      { n: "Solar kept the test. She put it at the back of her desk drawer with the red cross facing up. On every bridge she ever stood on after that, she knew which way the wind was going without having to think about it, the way you hear your own name across a crowded room." }
    ] },
    { title: 'four frames', place: 'Paulownia Mall · Photo Booth', music: 'city', scene: [
      { n: "There was a photo booth on the second floor of Paulownia Mall, the purikura kind, pink and white and plastered with pictures of girls with enormous eyes making peace signs, and it played a little song whenever you walked past it, and every time they walked past it Widowmaker looked at it for exactly half a second longer than she looked at anything else." },
      { n: "Solar had noticed. Solar had been noticing for a week. So late one weeknight she stopped in front of it and fed it four hundred yen before Widowmaker could say anything, and the machine said something extremely cheerful in a very high voice, and Widowmaker looked at it like it had pulled a gun." },
      { s: 'widowmaker', f: 'serious', t: "No." },
      { s: 'solar', t: "It's four pictures. You don't have to smile." },
      { s: 'widowmaker', f: 'serious', t: "I am never photographed. In my profession a photograph is a death sentence. For somebody." },
      { s: 'solar', t: "It makes your eyes really big." },
      { s: 'widowmaker', f: 'neutral', t: "...How big." },
      { n: "Inside it was tiny and bright and very hot, the light coming from everywhere at once, flat and white, the kind of light that makes you feel caught at something, and Widowmaker stood in it with her back very straight and her arms folded and the red scarf around her neck, squinting slightly, like a woman being interrogated." },
      { n: "The machine counted down from three in its high cheerful voice. Flash." },
      { choose: [
        { t: "(Make a peace sign. Commit.)", notes: 3, then: [
          { n: "Solar made a peace sign, the full thing, head tilted, the way the girls on the posters did, and in the second frame Widowmaker, very slowly and with an expression of profound reluctance, raised two fingers beside her own face and held them there, perfectly level, perfectly still, like she was sighting along them." }
        ] },
        { t: "(Lean your head on her shoulder.)", notes: 3, then: [
          { n: "In the second frame Solar leaned her head on her shoulder. She felt Widowmaker go still, the shot-stillness, and then, between the second flash and the third, felt her not move away, and in the third frame Widowmaker's head was tipped, very slightly, toward hers." }
        ] }
      ] },
      { n: "By the fourth frame something had gone wrong with her face. It had started doing something at the corners she clearly hadn't authorized, and she was fighting it, and losing, and the flash went off right in the middle of the fight." },
      { n: "Afterward there was a little screen where you were supposed to decorate the pictures with a plastic pen, hearts and sparkles and English words that didn't mean anything. Widowmaker held the pen like a scalpel. She did not draw hearts. She considered the whole menu with complete seriousness and then wrote, very small, in the corner of the last frame, in her neat typewriter numbers, 92." },
      { choose: [
        { t: "That's your heart rate.", notes: 3, then: [
          { s: 'widowmaker', f: 'flustered', t: "It was ninety-two. In the booth. Do not tell the fox." }
        ] },
        { t: "(Say nothing. Let it stay.)", notes: 3, then: [
          { n: "Solar didn't say anything. She just looked at it, the small precise number in the corner of the frame where Widowmaker's face was losing its fight, and felt her own heart do something she didn't bother to count." }
        ] }
      ] },
      { n: "The machine printed two strips. They came out warm. Widowmaker held hers under the mall lights for a long time, the woman with the big eyes and the red scarf and the face that had lost, and then folded it once and put it inside her coat, in the pocket where Kiriko's ofuda was, and did up the button." },
      { s: 'widowmaker', f: 'neutral', t: "It was not in the way." },
      { n: "Solar kept hers in her phone case with the fourth frame facing out. Anyone who looked at her phone after that saw a purple woman losing a fight with her own mouth, and asked who that was, and Solar said a friend, and it was the simplest true thing she had ever said." }
    ] }
  ],
  romance: false,
  cast: { kiriko: 'Kiriko', mercy: 'Mercy' },
  threads: { sniper: { name: 'support & sniper', members: ['widowmaker', 'kiriko'] } },
  texts: [
    { id: 'eliz-10-4', thread: 'elizabeth', rank: 0, before: 99, days: 0, date: '10/4', slot: 1, msgs: [
      { from: 'elizabeth', t: 'I am sorry, Solar. I know what tonight has cost you.' },
      { from: 'elizabeth', t: 'Death has drawn one more guest through. A woman who stands very high on Moonlight Bridge and says she feels nothing.' },
      { from: 'elizabeth', t: 'I do not believe her. I think she simply has not been asked.' }
    ] },
    { id: 'widow-1a', rank: 1, days: 1, slot: 1, msgs: [
      { from: 'widowmaker', t: 'The coffee was acceptable.' },
      { from: 'widowmaker', t: 'Do not bring it every time. I will begin to expect it.' }
    ], reply: [
      { t: "I'm bringing it every time.", notes: 3, then: [{ from: 'widowmaker', t: '...Black. No sugar.' }] },
      { t: 'How did you get my number?', notes: 2, then: [{ from: 'widowmaker', t: 'I find people. It is my profession.' }] }
    ] },
    { id: 'sniper-3', thread: 'sniper', rank: 3, unlock: { links: { kiriko: 8 } }, days: 1, msgs: [
      { sys: 'kiriko created "support & sniper"' },
      { from: 'kiriko', t: 'ok. new group. because apparently we are friends now' },
      { from: 'widowmaker', t: 'We are not friends.' },
      { from: 'kiriko', t: 'you read my fortune out loud to a pigeon yesterday' },
      { from: 'widowmaker', t: 'The pigeon asked.' }
    ], reply: [
      { t: 'Support and sniper. I love it.', then: [{ from: 'kiriko', t: 'opposites cover each others blind spots 🦊' }, { from: 'widowmaker', t: 'I have no blind spots.' }] },
      { t: 'What did the pigeon get?', then: [{ from: 'widowmaker', t: 'Kichi. It seemed satisfied.' }] }
    ] },
    { id: 'sniper-6', thread: 'sniper', rank: 6, before: 9, unlock: { links: { kiriko: 8 } }, days: 2, slot: 1, rename: 'support & sniper & cake', msgs: [
      { from: 'kiriko', t: 'emergency' },
      { from: 'kiriko', t: 'not a real one' },
      { from: 'kiriko', t: 'i saw widowmaker on the ROOF of paulownia mall today' },
      { from: 'kiriko', t: 'just standing there. watching the fountain' },
      { from: 'widowmaker', t: 'I was surveilling.' },
      { from: 'kiriko', t: 'the fountain???' },
      { from: 'widowmaker', t: 'It is a very suspicious fountain.' },
      { from: 'kiriko', t: 'also she had a RED SCARF on. since when does she own colors' },
      { from: 'widowmaker', t: 'It was a gift. I am told it is rude to refuse those.' },
      { ask: [
        { t: 'It looks good on her.', notes: 3, then: [
          { from: 'widowmaker', t: 'It does.' },
          { from: 'kiriko', t: 'humble' },
          { from: 'kiriko', t: 'wait. solar did u give her the scarf' },
          { from: 'widowmaker', t: 'Move on, fox.' }
        ] },
        { t: 'Was it a nice fountain?', notes: 2, then: [
          { from: 'widowmaker', t: 'It was adequate. The pigeons there are very organized. Someone should be told.' },
          { from: 'kiriko', t: 'she LIKED it 🦊' }
        ] },
        { t: 'Kiriko, why were YOU at the mall?', notes: 2, then: [
          { from: 'kiriko', t: 'irrelevant' },
          { from: 'widowmaker', t: 'She was eating crepes. Three. I counted.' },
          { from: 'kiriko', t: 'STOP SURVEILLING ME' }
        ] }
      ] },
      { from: 'widowmaker', t: 'While we are speaking of surveillance.' },
      { from: 'widowmaker', t: 'There is a piece of paper in my coat. It has writing on it and it smells of incense.' },
      { from: 'kiriko', t: 'no there isnt' },
      { from: 'widowmaker', t: 'It has been there since the night you read me a fortune.' },
      { from: 'kiriko', t: 'how long have u known' },
      { from: 'widowmaker', t: 'Since that night.' },
      { ask: [
        { t: 'Why did you keep it?', notes: 3, then: [
          { from: 'widowmaker', t: 'It was not in the way.' },
          { from: 'kiriko', t: 'thats sniper for "i love it"' },
          { from: 'widowmaker', t: 'It is sniper for "it was not in the way."' }
        ] },
        { t: 'She notices everything, Kiriko.', notes: 2, then: [
          { from: 'kiriko', t: 'i KNOW that NOW' },
          { from: 'widowmaker', t: 'You knew it before. You hoped.' }
        ] },
        { t: 'What does it say?', notes: 2, then: [
          { from: 'kiriko', t: 'protection. its a protection one' },
          { from: 'widowmaker', t: 'From what?' },
          { from: 'kiriko', t: 'everything. its a very good one' }
        ] }
      ] },
      { from: 'kiriko', t: 'ok since we are all being honest' },
      { from: 'kiriko', t: 'i want to do a stakeout. the three of us. on the bridge. with snacks' },
      { from: 'widowmaker', t: 'That is not what a stakeout is.' },
      { from: 'kiriko', t: 'there will be cake' },
      { from: 'widowmaker', t: '...What kind of cake.' },
      { sys: 'kiriko renamed the group "support & sniper & cake"' },
      { ask: [
        { t: "I'll bring strawberry shortcake.", notes: 3, then: [
          { from: 'widowmaker', t: 'Fine. Not too sweet.' },
          { from: 'kiriko', t: 'she said FINE' },
          { from: 'kiriko', t: 'screenshotting this' }
        ] },
        { t: 'And coffee. Black.', notes: 3, then: [
          { from: 'widowmaker', t: 'No sugar.' },
          { from: 'widowmaker', t: '...Then I suppose I will be there.' }
        ] },
        { t: 'A bridge at night sounds cold.', notes: 1, then: [
          { from: 'widowmaker', t: 'I do not feel the cold.' },
          { from: 'kiriko', t: 'i DO. im bringing a blanket. and the kotatsu if i can carry it' }
        ] }
      ] },
      { from: 'widowmaker', t: 'Do not bring the pigeon.' },
      { from: 'kiriko', t: 'the pigeon is coming' }
    ] },
    { id: 'widow-4a', rank: 4, days: 1, slot: 1, msgs: [
      { from: 'widowmaker', t: 'You did not ask about him. After I told you.' },
      { from: 'widowmaker', t: 'Most people ask.' }
    ], reply: [
      { t: "You'll tell me if you want to.", notes: 3, then: [{ from: 'widowmaker', t: '...Yes. Perhaps I will.' }] },
      { t: 'I figured you get asked enough.', notes: 3, then: [{ from: 'widowmaker', t: 'I do. You are observant, petite.' }] }
    ] },
    { id: 'widow-5a', rank: 5, days: 1, slot: 1, msgs: [
      { from: 'widowmaker', t: 'I am still wearing the scarf.' },
      { from: 'widowmaker', t: 'It is not for warmth. Do not misunderstand.' }
    ], reply: [
      { t: 'What is it for, then?', notes: 3, then: [{ from: 'widowmaker', t: 'I have not decided.' }] },
      { t: 'It looks good on you.', notes: 2, then: [{ from: 'widowmaker', t: 'Everything looks good on me.' }] }
    ] },
    { id: 'widow-7a', rank: 7, days: 1, slot: 1, msgs: [
      { from: 'widowmaker', t: 'You moved into my line of fire tonight. Twice.' },
      { from: 'widowmaker', t: 'Do not do that.' },
      { from: 'widowmaker', t: 'I would not have missed. But do not do that.' }
    ], reply: [
      { t: 'You were worried about me.', notes: 3, then: [{ from: 'widowmaker', t: 'I was annoyed.' }, { from: 'widowmaker', t: 'It felt similar.' }] },
      { t: "Sorry. I trusted you.", notes: 3, then: [{ from: 'widowmaker', t: '...No one has said that to me in a long time.' }] }
    ] },
    { id: 'widow-9a', rank: 9, days: 1, slot: 1, msgs: [
      { from: 'widowmaker', t: 'Ninety-two.' },
      { from: 'widowmaker', t: 'My heart. Tonight. On the bridge. Ninety-two.' }
    ], reply: [
      { t: "That's a lot for you.", notes: 3, then: [{ from: 'widowmaker', t: 'It is the most it has done in years.' }, { from: 'widowmaker', t: 'Goodnight, chérie.' }] },
      { t: 'Was it a good ninety-two?', notes: 3, then: [{ from: 'widowmaker', t: '...Yes. I believe so.' }] }
    ] }
  ],
  ranks: [
    { after: '10/5', title: '1: the bridge', music: 'tender', place: 'Moonlight Bridge', scene: [
      { n: "The night after, Solar couldn't stay in the dorm. She walked until her legs stopped asking where she was going, and they stopped at Moonlight Bridge, all white cables and lights doubled in the black water, the wind off the bay cold enough to make her eyes sting, which was convenient." },
      { ifRank: { kiriko: 8 }, then: [
        { n: "The woman was up there again, the one from that night with Kiriko, standing on a cable forty meters above the road as if it were a sidewalk. Purple skin. A long braid of dark hair. A rifle as long as a person. She looked down before Solar was halfway across, the way she always seemed to know." },
        { s: 'widowmaker', f: 'neutral', t: "The fox girl's friend. Alone, tonight." }
      ], else: [
        { n: "There was a woman standing on one of the cables forty meters above the road as if it were a sidewalk. Purple skin, faintly blue in the bridge lights. A long braid of dark hair. A rifle as long as a person, held loosely, like an umbrella. She looked down before Solar was halfway across, the way a cat looks at a sound you didn't hear." },
        { s: 'widowmaker', f: 'neutral', t: "A girl. Alone. On a bridge. At night. Hm." }
      ] },
      { n: "She dropped. There was no other word for it. She dropped forty meters on a grappling line and landed on the railing next to Solar so lightly that the railing didn't even ring." },
      { s: 'widowmaker', f: 'neutral', t: "You have been crying. Your face is very loud about it." },
      { choose: [
        { t: "Someone died. In my dorm.", notes: 3, then: [
          { s: 'widowmaker', f: 'sad', t: '...' },
          { s: 'widowmaker', f: 'sad', t: "Ah. Then you are allowed to be loud." }
        ] },
        { t: "It's the wind.", notes: 2, then: [{ s: 'widowmaker', f: 'happy', t: "Of course. The wind. It is very sad tonight, the wind." }] }
      ] },
      { n: "She didn't say anything comforting, because she didn't seem to know how, and she didn't leave, which Solar would realize later was the same thing. She just stood on the railing in the wind and watched the city, and Solar stood beside her and watched it too, and neither of them said anything for an hour." },
      { s: 'widowmaker', f: 'neutral', t: "Widowmaker. That is what they call me. You may call me that." },
      { s: 'widowmaker', f: 'neutral', t: "Come back, if you need a place to be loud. No one will hear you up here except me. And I hear nothing." }
    ] },

    { after: '10/17', title: '2: one shot', place: 'Moonlight Bridge · The Cables', scene: [
      { n: "Solar brought coffee, black, which she'd decided Widowmaker would like, purely on vibes. Widowmaker looked at it for a long moment like it might be poisoned. Then she drank it." },
      { s: 'widowmaker', f: 'neutral', t: "Come up. I will show you something." },
      { n: "The cables went up and up. Widowmaker climbed them like stairs, and Solar climbed them like a person who very much wanted to keep living, and at the top, at the very top of the tower, with the whole of Iwatodai spread out in lights beneath them, Widowmaker handed her the rifle." },
      { s: 'widowmaker', f: 'serious', t: "Look through the scope. Do not touch the trigger. I will know." },
      { n: "Through the scope, the city came close enough to touch. A couple arguing in a window. A cat on a roof. A boy at the station, alone, checking his phone over and over. Junpei, outside the convenience store, eating something. She could see everything. She could see everyone." },
      { s: 'widowmaker', f: 'serious', t: "This is what I do. I see everything. Every person, every heartbeat. I watch their lives from very far away." },
      { s: 'widowmaker', f: 'sad', t: "It is not the same as being in them. You understand?" },
      { choose: [
        { t: "That sounds lonely.", notes: 3, then: [{ s: 'widowmaker', f: 'sad', t: "Loneliness is a feeling. I don't have those. ...That is what I am told." }] },
        { t: "You could come down sometime.", notes: 3, then: [{ s: 'widowmaker', f: 'happy', t: "Down there? With the people? ...We will see." }] }
      ] },
      { s: 'widowmaker', f: 'serious', t: "One shot. One kill. That is what I say. Did you know that?" },
      { s: 'widowmaker', f: 'happy', t: "But tonight. No shots. Just you. Looking." }
    ] },

    { after: '10/31', title: '3: the dancer', place: 'Moonlight Bridge', scene: [
      { n: "Halloween, and Iwatodai was full of kids in costumes, and Solar came up the bridge to find Widowmaker on the railing doing something Solar had never seen her do. She was stretching. Slowly. Her leg extended along the cable, arm curved overhead, every line of her exact and still and lovely." },
      { s: 'widowmaker', f: 'flustered', t: "Don't stare. It is rude." },
      { s: 'solar', t: "Are you a dancer?" },
      { s: 'widowmaker', f: 'sad', t: "...I was. A very long time ago. The Opéra de Paris. I was very good." },
      { n: "She moved, there on the railing, forty meters above the black water. A turn on one foot, a long slow extension, arms like wings. It wasn't for anyone. It was the first time Solar had ever seen her do something for no reason at all, and it was the most beautiful thing she'd seen since she came to this city." },
      { choose: [
        { t: "(Clap.)", notes: 3, then: [
          { s: 'widowmaker', f: 'flustered', t: '...' },
          { s: 'widowmaker', f: 'flustered', t: "No one has clapped for me in a very long time. Merci." }
        ] },
        { t: "Why did you stop?", notes: 2, then: [{ s: 'widowmaker', f: 'sad', t: "I didn't stop. I was stopped. There is a difference, petite." }] }
      ] },
      { n: "Kiriko had told Solar once that in the other world, people dressed up as Widowmaker for Halloween. Solar didn't tell her. She had a feeling Widowmaker would find it either very funny or not funny at all, and she wasn't sure which, and she wanted to keep tonight exactly as it was." }
    ] },

    { after: '11/9', title: '4: amélie', music: 'tender', place: 'Moonlight Bridge', scene: [
      { n: "Cold now. November. Widowmaker didn't feel it, she said. She didn't feel much of anything. But she'd started coming down off the cables when Solar came, to sit on the railing at Solar's height, which Solar noticed and didn't mention." },
      { s: 'widowmaker', f: 'serious', t: "My name was Amélie. Amélie Lacroix. You may know that, but you may not use it." },
      { s: 'widowmaker', f: 'sad', t: "I had a husband. Gérard. I am told that I killed him." },
      { s: 'widowmaker', f: 'sad', t: "I am told it because I don't remember feeling anything about it. They took that from me. They took everything that would have made it hurt." },
      { n: "She said it in the same voice she said everything, flat and cool and precise, like reading a weather report. But her hand, on the railing, was gripping the steel very hard. Solar watched it and said nothing about it." },
      { choose: [
        { t: "That wasn't you. Not really.", notes: 2, then: [{ s: 'widowmaker', f: 'serious', t: "It was my hands. My rifle. My shot. Whose would it be?" }] },
        { t: "(Put your hand next to hers on the railing.)", notes: 3, then: [
          { n: "Solar put her hand on the railing, not touching Widowmaker's, just near it. A few inches away. Widowmaker looked at it for a long time. She didn't move her hand away." },
          { s: 'widowmaker', f: 'flustered', t: "...You are very strange, petite. Very strange." }
        ] }
      ] },
      { n: "There was a reason she'd come through on the night of the fourth, Solar thought on the way home. The Death arcana. The night after a death. Some things in this city didn't happen by accident." }
    ] },

    { after: '11/21', title: '5: cold', place: 'Moonlight Bridge', scene: [
      { n: "Solar had brought a scarf. It was red, and soft, and the kind of thing a person would knit for someone they liked, which was not what had happened, she had bought it at a shop in Paulownia Mall, but she'd thought about it for an embarrassingly long time." },
      { s: 'widowmaker', f: 'neutral', t: "I cannot feel the cold. My heart is slowed. My body is cold always. It is how they made me." },
      { s: 'solar', t: "I know. Wear it anyway." },
      { s: 'widowmaker', f: 'surprised', t: "...Why?" },
      { choose: [
        { t: "So you'll know someone thought about you.", notes: 3, then: [
          { s: 'widowmaker', f: 'flustered', t: '...' },
          { n: "Widowmaker held the scarf in both hands, looking at it. Then she wound it around her neck, once, twice, carefully. It was very red against her skin. It looked ridiculous with the rest of her. She did not take it off." }
        ] },
        { t: "Because it's red. It goes with your visor.", notes: 2, then: [{ s: 'widowmaker', f: 'happy', t: "...That is a correct observation about fashion. Fine." }] }
      ] },
      { n: "They sat on the railing in the wind. Widowmaker's hand came up, every few minutes, to touch the scarf, as though checking it was still there. She didn't seem to notice she was doing it." }
    ] },

    { after: '12/2', title: '6: princesse', music: 'mystery', place: 'Moonlight Bridge · The Cables', scene: [
      { n: "December. The first really cold night, the bay black and glittering, the wind sharp enough to cut. They were up on the cables again, watching the city lights, and Solar was cold and stubborn about it and had refused to go home, and Widowmaker was watching her be stubborn the way you'd watch a kitten fight a shoelace." },
      { s: 'widowmaker', f: 'happy', t: "Go home, princesse. You are shivering." },
      { n: "She said it without thinking. Then she stopped. Her whole body stopped, the way it did before a shot." },
      { s: 'widowmaker', f: 'surprised', t: "...Princesse. Why did I say that? I don't call anyone that. I have never called anyone that." },
      { n: "Something in Solar's chest went very still, and then very warm, the way a room does when someone you didn't hear come in turns on a light." },
      { s: 'widowmaker', f: 'serious', t: "Kiriko said there is another world. A boy who plays as me, beside a girl who plays as her. I felt him, once. Like a voice through a wall." },
      { s: 'widowmaker', f: 'flustered', t: "I think he calls someone that. I think it came through. Mon dieu. How embarrassing for me." },
      { choose: [
        { t: "I don't mind it.", notes: 3, then: [{ s: 'widowmaker', f: 'happy', t: "...No. I don't suppose you do. Your face is being loud again." }] },
        { t: "(Say nothing. Look at the city.)", notes: 3, then: [{ n: "Solar looked at the city and said nothing, and something she could not name ached behind her ribs, and Widowmaker, beside her, very quietly, did not ask about it." }] }
      ] },
      { n: "She went home. She lay awake a long time. She didn't know a boy who called anyone princess. She was sure she'd never met one. She fell asleep with her headphones on, and dreamed about a sniper and a support, under bright lights, in a room very far away." }
    ] },

    { after: '12/12', title: '7: overwatch', place: 'Port Island · Rooftops · The Dark Hour', scene: [
      { n: "The Dark Hour, a full-team operation, a huge shadow loose in the Port Island shopping district that kept splitting into smaller ones, too many, too fast. They'd needed someone on the high ground. Solar had asked. Widowmaker had said, of course, as though she'd been waiting to be asked." },
      { n: "From the rooftops, it looked like chaos. From the ground, it was worse. Solar was in the middle of it with her Persona out, and every time a shadow got too close, there was a crack from somewhere very high up, and the shadow came apart." },
      { n: "One shot. One kill. Every single time. She didn't miss once. And every time Solar moved, without thinking, she moved somewhere Widowmaker could see her." },
      { s: 'widowmaker', f: 'serious', t: "Behind you. Left. I have it." },
      { choose: [
        { t: "(Trust her. Don't turn around.)", notes: 3, then: [{ n: "Solar didn't turn around. She heard the crack, and felt the wind of it past her ear, and the thing behind her stopped existing, and she kept going like it was nothing, because with Widowmaker on the roof, it was." }] },
        { t: "(Turn and fight it yourself.)", notes: 2, then: [{ n: "She turned, and the crack came anyway, a fraction of a second ahead of her, and the shadow fell. Widowmaker, in her ear, sighed with enormous patience." }] }
      ] },
      { n: "Afterward, on the roof, in the fading green, Widowmaker was sitting very still with her rifle across her knees and two fingers pressed to her own throat." },
      { s: 'widowmaker', f: 'surprised', t: "My heart. It went up. When you were surrounded. It doesn't do that. It is not supposed to." },
      { s: 'widowmaker', f: 'flustered', t: "...Do not tell anyone. Especially not the fox." }
    ] },

    { after: '12/23', title: '8: talon', music: 'tender', place: 'Moonlight Bridge', scene: [
      { n: "There was something wrong with her tonight. She was up on the very top of the tower, not watching the city. Watching nothing. Her visor was down. She didn't come down when Solar called her name, so Solar climbed all the way up, freezing, furious, and sat down next to her." },
      { s: 'widowmaker', f: 'sad', t: "When I go back, they will find me. Talon. They always find me." },
      { s: 'widowmaker', f: 'sad', t: "They will put me back in the chair. And they will take out whatever has grown back. The dancing. The scarf. This bridge. You." },
      { s: 'widowmaker', f: 'sad', t: "I will not remember you, petite. I'm sorry. I wanted to say it while I still could." },
      { n: "It was the first time Solar had ever heard her say she was sorry. It was the first time Solar had heard her say she wanted anything at all." },
      { choose: [
        { t: "Then I'll remember for both of us.", notes: 3, then: [
          { s: 'widowmaker', f: 'flustered', t: '...' },
          { s: 'widowmaker', f: 'happy', t: "That is very stupid. It is the nicest stupid thing anyone has said to me." }
        ] },
        { t: "Some things grow back no matter what.", notes: 3, then: [{ s: 'widowmaker', f: 'happy', t: "...Perhaps. Weeds do. Perhaps I am a weed." }] }
      ] },
      { n: "Mercy came to the bridge the next night, Solar heard later. Just stood at the bottom of the tower and looked up. Widowmaker looked down. Neither of them said anything, and then Mercy left, and Widowmaker told Solar she didn't know what that had been about, in a voice that meant she knew exactly." }
    ] },

    { after: '1/8', title: '9: ninety-two', music: 'tender', place: 'Moonlight Bridge', scene: [
      { n: "January, and the snow on the bridge, and the whole bay white and silver under a thin cold moon. Widowmaker was waiting on the railing. She had the scarf on. She always had it on now." },
      { n: "Kiriko had come too. She'd climbed halfway up the tower before deciding she didn't love heights and come down again, and she was sitting on the bridge with her back against a support beam, eating something from a bag, and Widowmaker was pretending to be annoyed by her." },
      { s: 'kiriko', f: 'neutral', t: "Fortune. For you. I'm not asking." },
      { s: 'kiriko', f: 'happy', t: "Dai-kichi. 'The cold heart thaws in the company of fools.'" },
      { s: 'widowmaker', f: 'flustered', t: "...I'm insulted by that. And by how accurate it is." },
      { n: "Later, when Kiriko had gone, Widowmaker stood on the railing with her fingers pressed to her own throat again, and she was very quiet, and then she said something Solar didn't expect." },
      { s: 'widowmaker', f: 'surprised', t: "Ninety-two. My heart. Right now. It is supposed to be thirty." },
      { s: 'widowmaker', f: 'happy', t: "It goes up when I am with you. And the fox. Laughing. On a bridge. With a scarf I cannot feel." },
      { s: 'widowmaker', f: 'happy', t: "I believe this is a feeling. I believe I am... happy. It is unpleasant. I love it." },
      { choose: [
        { t: "Welcome back, Amélie.", notes: 3, then: [
          { s: 'widowmaker', f: 'flustered', t: '...' },
          { s: 'widowmaker', f: 'happy', t: "...You may use it. Just tonight. Just you." }
        ] },
        { t: "You're my friend. You know that, right?", notes: 3, then: [{ s: 'widowmaker', f: 'happy', t: "...Yes. I know. You have been stubborn about it since October." }] }
      ] }
    ] },

    { after: '1/24', title: '10: the last dance', place: 'Moonlight Bridge', scene: [
      { n: "The last week of January, and everyone knew it was ending. The Dark Hour, this city, all of it. The bridge was very cold and very quiet. Widowmaker came down off the cables before Solar even called her, and stood on the bridge at Solar's height, and for once she didn't seem to know what to say." },
      { s: 'widowmaker', f: 'flustered', t: "I wish to give you something. I don't have very much. I came here with a rifle and a grappling hook." },
      { n: "She held out her hand. In it was a ribbon, pale pink satin, frayed at the ends, faded with age. A ribbon from a pointe shoe." },
      { s: 'widowmaker', f: 'sad', t: "From the Opéra. The last performance. I have carried it everywhere. I never knew why. Talon never found it. I hid it very well." },
      { s: 'widowmaker', f: 'sad', t: "If they take everything else, I want this to be somewhere they cannot reach. With someone who will remember." },
      { choose: [
        { t: "Dance with me. One more time.", notes: 3, then: [
          { s: 'widowmaker', f: 'happy', t: "...You can't dance, petite. I've seen you walk." },
          { s: 'solar', t: "So teach me." },
          { n: "She did. There on the bridge, in the snow, under the moon. A slow, patient waltz, Widowmaker counting under her breath in French, Solar stepping on her feet, both of them laughing, Widowmaker's laugh rusty and startled like a door that hadn't been opened in years. Her hand was cold. Solar held it anyway." }
        ] },
        { t: "I'll remember. Every single bit of it.", notes: 3, then: [{ s: 'widowmaker', f: 'happy', t: "...Good. Then it was real. That is all I wanted, I think. For someone to know it was real." }] }
      ] },
      { s: 'widowmaker', f: 'happy', t: "Au revoir is not goodbye, princesse. It means until I see you again. Remember that too." },
      { n: "When Solar looked back from the end of the bridge, Widowmaker was up on the highest cable, a dark shape against the moon, a red scarf snapping in the wind. She didn't wave. She raised her rifle, once, in salute. And Solar, who had cried on this bridge in October, smiled all the way home." }
    ] }
  ]
});
