/* Mercy (Dr. Angela Ziegler) · XIV Temperance. Revamp social link data (femc-game.html). Format: link fields in
   assets/femc/game/core.js, scene lines in scene.js.
   Visitor (Overwatch), first wave (6/8). Mentor and older sister. The ending she runs from: the recall, choosing sides
   again, people dying anyway. She does rounds at Tatsumi Memorial that nobody hired her for.
   Rank 3: Solar's hands already know how to tie a surgeon's knot (strangers, uncanny for Solar).
   Rank 5: Solar sets up Mercy and Genji; holding the light triggers a strangers flashback; fragment strangers-needle.
   Rank 7: Mercy and Aphrodite do Solar's hair and makeup (the "big sisters" CG idea; no CG file yet).
   Cast-only speakers: nurse.
   Link-local flags (2026-10-21 depth pass), read back later in this file and in data/living-visitors.js:
     mercy-lessons (rank 3: she asks to be taught properly) → ranks 8 and 10, hangout 5, afterMax "her own stitches".
     mercy-told-parents (rank 6: she says she can't remember her parents) → rank 9.
     mercy-sister / mercy-three-am / mercy-doctor (rank 9: what Angela is to her) → rank 10, afterMax "handover", and
       mercy-three-am opens the late-night call in living-visitors.js.
   Living world (texts after ranks 2/3/5/7/9, holidays 7/20 and 9/21, two late-night calls): data/living-visitors.js.
   afterMax: five scenes after rank 10 (she stays until the doors open on 3/6). */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'mercy', name: 'Mercy', short: 'Mercy', arcana: 'Temperance', numeral: 'XIV', from: 'Overwatch',
  kind: 'visitor',
  romance: null,
  starts: '6/10',
  home: { area: 'hospital', spot: '3F Ward', slot: 'after', days: [0, 2, 4],
          hint: 'After school on Tuesdays and Thursdays, and in the daytime on Sundays, on the third floor of Tatsumi Memorial Hospital.' },
  approach: "A blonde woman in a white coat with no hospital badge is doing rounds on a ward she very clearly doesn't work on, and none of the nurses have had the nerve to ask her about it.",
  cast: { nurse: 'Night Nurse' },
  invite: {
    ask: [
      "Are you free? I am on my break and I would like company that is not a vending machine.",
      "Solar. The coffee here is a crime. Come and commit it with me.",
      "I have twenty minutes and a rooftop. Bring nothing. Especially not more coffee.",
      "Have you eaten today? Don't lie. Come up and tell me in person.",
      "Liebling, the ward is quiet. Come and keep me from reorganizing the supply cupboard again.",
      "Rooftop. The sun is out and I am told I should look at it."
    ],
    ok: ["Wunderbar. Third floor, then up.", "Good. I'll pretend I'm not waiting.", "Thank you. Truly. Hurry a little."],
    no: ["Of course. Get some rest. That is a medical opinion.", "Another time, then. Eat something.", "Understood. I'll talk to the vending machine. It's a good listener."]
  },
  hangouts: [
    [
      { n: "The hospital roof on a weekday afternoon belonged to three night-shift nurses smoking by the vent and to Angela, who did not smoke, and who stood at the far rail with a paper cup of vending-machine coffee held in both hands like a small warm animal she'd rescued." },
      { s: 'mercy', f: 'happy', t: "Ah. Company. Thank God. I've been talking to the pigeons. They have no bedside manner." },
      { choose: [
        { t: "How many coffees is that?", notes: 3, then: [
          { s: 'mercy', f: 'neutral', t: "Define \"coffee.\" If you mean this, it is a brown liquid with a temperature. I would not insult the word." },
          { s: 'mercy', f: 'blushing', t: "...Four. It's four. Don't look at me like that. You look at me exactly like Ana used to." }
        ] },
        { t: "(Stand at the rail with her and say nothing.)", notes: 2, then: [
          { n: "They said nothing for a while. Down in the car park a man was trying to fit a very large bunch of balloons into a very small car, and Angela watched him with professional concern, and when the balloons finally went in she let out a breath as though she'd been holding a scalpel." }
        ] },
        { t: "You should sleep.", notes: 1, then: [
          { s: 'mercy', f: 'neutral', t: "Everyone should sleep. It's the most widely ignored prescription in medicine." }
        ] }
      ] },
      { n: "She finished the coffee and crushed the cup and looked at it, and then at Solar, and smiled with only half her mouth, tired and real, the way you smile at someone you've stopped trying to impress." }
    ],
    [
      { n: "Angela was teaching Solar to read a chart. Not because Solar needed to, she said, but because a chart was a story, and everyone should know how to read the story of a body, in case one day they had to tell it to somebody who could help." },
      { s: 'mercy', f: 'neutral', t: "Here. Heart rate, blood pressure, temperature, written every four hours. Look at this column. What do you see?" },
      { choose: [
        { t: "It goes up at night. Every night. Around three.", notes: 3, then: [
          { s: 'mercy', f: 'surprised', t: "...Yes. Exactly. Most of my residents miss that." },
          { s: 'mercy', f: 'neutral', t: "Three in the morning is when the body is most honest. I don't know why. I've never liked it." }
        ] },
        { t: "Numbers.", notes: 1, then: [
          { s: 'mercy', f: 'happy', t: "Correct, and useless. Look again. Numbers are just a person who can't talk yet." }
        ] },
        { t: "That someone wrote it very neatly.", notes: 2, then: [
          { s: 'mercy', f: 'blushing', t: "That is my handwriting. Thank you. My parents had terrible handwriting. I practiced for years out of spite." }
        ] }
      ] },
      { n: "She took the chart back and clipped it to the foot of the bed and patted the blanket over the sleeping patient's feet, absently, the way you'd pat a dog, and Solar thought that she had probably done that ten thousand times in her life and that she'd never once stopped meaning it." }
    ],
    // Rounds on the visitors: the faint before the bridge, the kept after it (8/6).
    [
      { ifAfter: '8/7', then: [
        { n: "Since the night on the bridge Angela had started doing rounds on people who weren't patients. She had a list folded into her coat pocket on the back of a discharge form, every visitor she'd met or been told about, and on her afternoons off she went down it with a penlight and a clipboard, the Kirijo flats by the station, the back of the arcade, the bottom of the shrine steps, knocking on doors and asking people to hold their hands up to the light." },
        { s: 'mercy', f: 'sad', t: "The woman on the train. With the viola case. I never met her. I've asked everyone I know. Nobody ever stopped her long enough to learn her name." },
        { s: 'mercy', f: 'serious', t: "That's the whole diagnosis, Solar. I've been looking for a mechanism for two months and it's that. Nobody stopping." },
        { ifRank: { kiriko: 6 }, then: [
          { n: "Kiriko had given Angela her list, the one on the backs of fortune slips, and Angela had copied it out in her neat, typed-looking hand and given it back, and now there were two lists that matched, and the two of them compared them on Sundays on the shrine steps like generals over a map, arguing about spelling." }
        ] }
      ], else: [
        { n: "Kirijo's paper had said the faint could be found by light. Hold a hand up to it and see what came through. Angela had taken this as a clinical protocol, and on her afternoons off she went looking for people who'd fallen through with a penlight and a clipboard, and today she'd brought Solar along to hold the light." },
        { s: 'mercy', f: 'neutral', t: "The boy in the hoodie, under the awning. I diagnosed him with a concussion in June. In the rain he's still a little see-through at the edges. I told him to call someone. He said he doesn't call people. I told him that was the symptom." }
      ] },
      { s: 'mercy', f: 'neutral', t: "Now you. Hold out your hand. I know you're from here. Humor me. I check the ones I'm fond of last." },
      { choose: [
        { t: "(Hold your hand up to the light.)", notes: 2, then: [
          { n: "Solar held it up. Angela put the penlight behind it and looked, and kept looking, and her thumb found the pulse at the wrist and stayed there a good deal longer than it needed to." },
          { s: 'mercy', f: 'happy', t: "Solid. Disgustingly solid. You're the healthiest patient I have and you don't sleep. It's very unfair to medicine." }
        ] },
        { t: "Who checks you?", notes: 3, then: [
          { s: 'mercy', f: 'surprised', t: "...Nobody. That's rather the point of being the one with the penlight." },
          { n: "Solar took the penlight out of her hand. Angela let her, which Solar was beginning to understand was rare, and held up her own palm, and the light came through her fingers pink at the edges and stopped there, the way it did with anybody's, and Angela looked at her own hand in the beam for a long time like it belonged to a patient she hadn't expected to see recover." }
        ] },
        { t: "Can I come with you next time? On the rounds.", notes: 2, then: [
          { s: 'mercy', f: 'happy', t: "You're hired. The pay is terrible and so is the coffee. Bring the steady hand." }
        ] }
      ] },
      { n: "She wrote something on the clipboard. Solar read it upside down on the way to the lift. It was her own name, at the bottom of the list, with a tick beside it and the word *solid*, underlined twice." }
    ],
    // Thursdays: the lessons she asked for (rank 3), or the first one, if she never asked.
    [
      { ifFlag: 'mercy-lessons', then: [
        { n: "Thursday, the staff lounge, an orange on a paper towel between them like a patient on a table. Angela had run out of stitches Solar didn't already know somewhere around August and had started going through a surgical textbook from the hospital library chapter by chapter, looking for one that Solar's hands would stumble on, with the dedication of a woman doing a crossword." },
        { s: 'mercy', f: 'neutral', t: "Vertical mattress. Far-far, near-near. Watch me once. Then you." },
        { n: "Solar watched. She took the clamps. And her hands, for the first time all year, did nothing at all. They waited. They didn't know this one." },
        { choose: [
          { t: "My hands don't know this one.", notes: 3, then: [
            { s: 'mercy', f: 'surprised', t: "...Really?" },
            { s: 'mercy', f: 'happy', t: "Wunderbar. Finally. Something I get to teach you from the start. Give me your hands. Far. Far. Now near. Good. Again." },
            { n: "She did it four times, badly, and then a fifth time well, and the fifth one was hers. She knew it the way you know a word you've just learned: not as well as the old ones, but all your own. Angela looked at it for a long time and didn't say anything, which was how Solar knew she was pleased." }
          ] },
          { t: "(Try anyway. Let it go wrong.)", notes: 2, then: [
            { n: "It went wrong. The needle came out in the wrong place and the orange wept juice onto the paper towel, and Solar sat back and laughed, startled, at a mistake, her first one with a needle all year, and Angela laughed too, delighted, as though Solar had brought her a present." }
          ] }
        ] }
      ], else: [
        { n: "The hospital roof, a cold bright afternoon, the vending-machine coffee going lukewarm between them on the railing. Angela had looked at Solar for a while and decided, out loud, that if she was going to keep coming up here she should be able to take a pulse properly, in case it was ever Angela's." },
        { s: 'mercy', f: 'neutral', t: "Two fingers. Not the thumb. The thumb has its own pulse and it will lie to you. Here, at my wrist. Count to fifteen and multiply by four." },
        { choose: [
          { t: "(Count carefully. Out loud.)", notes: 3, then: [
            { n: "Solar counted, out loud, to the beat under her two fingers, and got to seventeen in fifteen seconds and said sixty-eight, and Angela said yes, and then said, without looking at her, that it had been eighty when Solar came up the stairs, and that she wasn't going to explain that." }
          ] },
          { t: "Your pulse is fast.", notes: 2, then: [
            { s: 'mercy', f: 'blushing', t: "It is not. It's the coffee. It's very good coffee. That's a lie. It's the stairs. You'll learn not to say things like that to patients." }
          ] }
        ] }
      ] },
      { n: "When Solar left, Angela was still on the bench with her own fingers on her own wrist, counting, frowning at it, as though it had just told her something she'd need to look up." }
    ]
  ],
  ranks: [
    { after: '6/10', title: '1: rounds', place: 'Tatsumi Memorial Hospital · 3F Ward', scene: [
      { place: 'Tatsumi Memorial Hospital · 3F Ward', time: 'Daytime', bg: 'hospital-room' },
      { music: 'tender' },
      { n: "Tatsumi Memorial smelled the way every hospital smelled, floor wax and boiled rice and antiseptic, and something under all three that never had a name. Solar was there because Junpei had sprained his wrist doing something he refused to explain, and somebody had to take his forms to the front desk, and he'd looked at her with such enormous wounded eyes that she'd taken them before she'd agreed to." },
      { n: "The front desk sent her to the second floor. The second floor sent her to the third. The third floor was where they kept the Apathy patients, and she didn't know that until she was standing in it." },
      { n: "Eight beds and eight chairs, and in every chair by every window somebody sitting very still, looking out. Awake. Breathing. Somebody's grandmother. Somebody's office manager with his tie still on. A girl about Solar's age with her hair in two clips, holding a stuffed rabbit somebody had put in her lap, not holding it, exactly, just not letting it fall." },
      { n: "And at the bed nearest the window, kneeling on the lino with a penlight, there was a woman who wasn't a nurse." },
      { n: "Solar knew she wasn't a nurse the way you know a word is misspelled before you can say which letter. The white coat had no hospital name on it. The blonde hair was pinned up in a hurry and coming down. And the way she knelt, one knee down and her weight forward, ready to stand, wasn't the way you knelt at a bedside. It was the way you knelt in a street with things going on around you." },
      { n: "Two nights ago, in the green, Solar had seen a woman in white in a street near the station, helping someone up off the wet ground. She'd been too far away to see a face. She'd seen the white, and the hands." },
      { s: 'mercy', f: 'surprised', t: "...Oh. You can see me properly. Good. Half the staff here have decided I'm a visiting specialist and the other half are afraid to ask." },
      { s: 'mercy', f: 'neutral', t: "Dr. Angela Ziegler. Though I suspect my license isn't valid in whatever this place is." },
      { choose: [
        { t: "You're not from here.", notes: 2, then: [
          { s: 'mercy', f: 'neutral', t: "No. I had gathered that. Your hospital has no idea who I am and your telephones fold in half." }
        ] },
        { t: "I saw you. The other night, in the green. You were helping someone up.", notes: 3, then: [
          { s: 'mercy', f: 'surprised', t: "You were awake? Then I wasn't imagining it. Everyone else was... boxes. Coffins. I had my hand on a pulse that wasn't there." },
          { s: 'mercy', f: 'neutral', t: "The young man I was helping had fallen through just after me. Black hoodie. Sitting in a puddle refusing help, which I gather is his natural state. I told him he'd concussed himself. He told me he'd had worse, which nobody ever has." }
        ] },
        { t: "Do they know you're not real staff?", notes: 1, then: [
          { s: 'mercy', f: 'happy', t: "If I walk quickly enough and carry a clipboard, nobody knows anything. That's true in every hospital in every world." }
        ] }
      ] },
      { register: 'mercy' },
      { s: 'mercy', f: 'neutral', t: "When it went green, I was standing in a street with my staff in my hand and no idea where I was. And there was a girl. Small. In a porter's coat far too big for her. The only other thing awake in the street." },
      { s: 'mercy', f: 'neutral', t: "She pointed down the road and said, \"The hospital's that way. They need somebody.\" And then she apologized to me. I have no idea for what. Then she was gone." },
      { s: 'mercy', f: 'happy', t: "So I came here. They needed somebody. That part, at least, she was right about." },
      { ifMet: ['wren'], then: [
        { n: "A coat far too big for her. Solar thought of the bench at the station and a girl who apologized for things that weren't her fault, and she opened her mouth, and closed it, because it was a city of a million people and coats came in sizes." }
      ] },
      { n: "Angela looked back down at the old man in the chair. At his quiet, empty, peaceful eyes. Something in her face went tired then, in a way that had nothing to do with the hour." },
      { s: 'mercy', f: 'sad', t: "Every vital sign is normal. Heart, lungs, brain activity. Normal. And nobody is home." },
      { s: 'mercy', f: 'sad', t: "I have rebuilt people from almost nothing. I've brought soldiers back from a place no one comes back from. And I can't find what's wrong with a man who is sitting in a chair, looking at a car park." },
      { choose: [
        { t: "It's not something medicine can fix.", notes: 3, then: [
          { n: "Angela looked at her for a long, steady moment. The look of someone who reads charts for a living, reading one." },
          { s: 'mercy', f: 'neutral', t: "You say that like you know what can." },
          { n: "Solar didn't answer. Somewhere behind her ribs the Evoker in her bag felt very heavy. Angela watched her not answer, and nodded, slowly, as if not answering were an answer, and filed it." }
        ] },
        { t: "You're still here. Doing rounds. That's something.", notes: 2, then: [
          { s: 'mercy', f: 'happy', t: "Ha. You sound like an old commanding officer of mine." },
          { s: 'mercy', f: 'neutral', t: "...No. That isn't fair. He'd have said it with more shouting." }
        ] },
        { t: "When did you last sleep?", notes: 2, then: [
          { s: 'mercy', f: 'neutral', t: "Which world are we counting?" }
        ] }
      ] },
      { n: "Solar left Junpei's forms at the nurses' station. On the way to the lift she looked back, and Angela had pulled a chair over beside the old man's chair and was sitting in it with a clipboard on her knee, not writing, just sitting, the two of them looking out at the car park together, as though the view might be different if you had somebody to share it with." },
      { n: "It was raining when Solar got outside. Her umbrella was upstairs, leaning against the end of bed four. She stood under the hospital awning for a minute deciding whether to go back up for it, and found that she wanted an excuse to, and found that she didn't need one, and went home in the rain." }
    ] },

    { after: '6/23', title: '2: the caduceus', place: 'Tatsumi Memorial Hospital · Rooftop', scene: [
      { place: 'Tatsumi Memorial Hospital · Rooftop', time: 'Daytime', bg: 'rooftop-day' },
      { music: 'day' },
      { n: "The hospital had a roof where the staff went to smoke, and on Tuesday afternoons, Solar had learned, where Dr. Ziegler went to drink terrible coffee and stand very still, with her face turned up to whatever weather there was, like someone who had read somewhere that this was what people did on breaks and was trying it out." },
      { n: "She had something leaning on the railing beside her. A staff, white and gold, a little set of wings at the top, humming faintly, like a refrigerator in another room. And Solar's umbrella." },
      { s: 'mercy', f: 'happy', t: "Ah. My umbrella thief returns. Except I am the thief. I've been keeping it hostage." },
      { n: "She held it out. Solar took it. Neither of them moved toward the door." },
      { s: 'mercy', f: 'neutral', t: "Your friend with the red hair and the terrifying posture came to see me last week. Kirijo. She brought me a telephone that folds and a sheet of paper explaining that I am, apparently, faint." },
      { s: 'mercy', f: 'neutral', t: "As a medical description it leaves something to be desired." },
      { choose: [
        { t: "You don't look faint.", notes: 3, then: [
          { s: 'mercy', f: 'neutral', t: "No. I noticed. I was, for the first few days. I could see the lino through my own hands at the end of a shift. Very unprofessional." },
          { s: 'mercy', f: 'happy', t: "And then a girl came back up three flights of stairs for an umbrella she didn't need, and I stopped being able to see the floor. Medicine is a very strange field." }
        ] },
        { t: "Elizabeth says it's a pull. Like water going down a drain.", notes: 2, then: [
          { s: 'mercy', f: 'serious', t: "And it catches people who are running from something. Yes. Kirijo's paper said that too. I didn't like that sentence either." }
        ] },
        { t: "What's that?", notes: 1, then: [
          { s: 'mercy', f: 'neutral', t: "That's my staff. I'll tell you in a moment. I'm still deciding whether I like you." }
        ] }
      ] },
      { s: 'mercy', f: 'neutral', t: "The Caduceus. It heals, mostly. It can lend someone strength if they need it more than I do. And it can bring people back, if I'm fast enough, and close enough, and the damage isn't too great." },
      { s: 'mercy', f: 'neutral', t: "People think bringing someone back is a miracle. It isn't. It's a decision. Every time, I choose who. And every time, I'm choosing who I won't." },
      { n: "She said it plainly, the way soldiers say things, the way people do once they've said something to themselves so many times that it's worn smooth, like a step." },
      { s: 'mercy', f: 'sad', t: "I've done the arithmetic. I'm very good at it. You go to the one you can reach. You go to the one who'll make it. It saves the most people. It's correct." },
      { s: 'mercy', f: 'sad', t: "The arithmetic doesn't help at three in the morning." },
      { choose: [
        { t: "That sounds lonely.", notes: 3, then: [
          { s: 'mercy', f: 'surprised', t: "..." },
          { s: 'mercy', f: 'neutral', t: "It is. Thank you for saying so. Most people tell me it sounds heroic." }
        ] },
        { t: "Who did you choose last?", notes: 1, then: [
          { s: 'mercy', f: 'serious', t: "That's not a question you get to ask yet." },
          { s: 'mercy', f: 'neutral', t: "...Ask me again in a month." }
        ] },
        { t: "So what were you running from?", notes: 2, then: [
          { n: "Angela was quiet for a long time. A helicopter went over somewhere toward the bay, and she watched it the whole way across the sky with her coffee halfway to her mouth, the way you'd watch something you'd once been inside." },
          { s: 'mercy', f: 'neutral', t: "A letter. From an old friend. It said, come back, all of you, we need you again." },
          { s: 'mercy', f: 'sad', t: "The last time I answered a letter like that, I spent years choosing who to save on both sides of a war, and people died anyway. I was standing in my office with the letter in my hand, deciding. And then I was here." }
        ] }
      ] },
      { n: "They stood there until her coffee went cold and she drank it anyway, wincing. Below them the city went about its afternoon, monorails and taxis and a schoolgirl running for a bus, and none of it knew there was a doctor on the roof with a staff that could pull people back from the edge, and Solar thought that Angela had probably liked that about it, here. That none of it was asking." },
      { s: 'mercy', f: 'happy', t: "Come back on Thursday. I'll have better coffee. That's a lie. I'll have the same coffee. Come anyway." }
    ] },

    { after: '7/9', title: '3: steady hands', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
      { music: 'dorm' },
      { n: "Mitsuru had asked Dr. Ziegler, very formally, by letter, delivered by hand, whether she would consider instructing the members of a certain after-school club in field first aid. Angela had written back, by hand, that she would consider it an honor, and also that she had seen the condition of their senior's ribs and it was frankly a disgrace." },
      { n: "So on Thursday evening the dorm lounge had been turned into a classroom. The coffee table was covered in a sheet. On the sheet were rolls of gauze and tape and a box of gloves and a bowl of oranges, and Angela stood at the head of it with her sleeves rolled up like a woman about to perform surgery on a fruit bowl, which she was." },
      { s: 'mercy', f: 'neutral', t: "The orange is your patient. The peel is skin. It behaves almost exactly like skin, which you will find upsetting. Junpei, stop eating your patient." },
      { s: 'junpei', f: 'flustered', t: "It's a really good patient, though." },
      { n: "She showed them how to clean a wound, and how to pack one, and how to hold pressure and for how long, and Akihiko asked a great many questions about ribs that were clearly about his own, and Yukari wrapped a bandage so neatly that Angela said wunderbar out loud and Yukari pretended not to be pleased and failed." },
      { n: "Then Angela took out a curved needle in a sterile packet, threaded with black, and held it up in a pair of narrow steel clamps, and everyone in the lounge leaned away from it at once like grass from a wind." },
      { s: 'mercy', f: 'neutral', t: "You won't need this. I hope. But if you're somewhere you can't get help, and someone you love is bleeding, it helps to have done it once on an orange. This is a simple interrupted stitch and a surgeon's knot. Watch my hands." },
      { n: "Solar watched her hands. She didn't need to. That was the thing. Somewhere around the second loop of thread around the clamps, her own hands, in her lap, had started to move, small, twitching, ahead of Angela's, the way your foot taps along to a song before you've placed it." },
      { n: "When it was her turn she took the clamps and the needle and the orange, and something happened that she would think about for a long time afterward. Her hands went quiet. Not steady. Quiet, the way a room goes quiet when someone who's done this before walks into it. The needle went in at the right angle and came out where it should and she wrapped the thread twice around the clamp and once back, and pulled, and laid the knot down flat to one side, and cut the ends, and did it again. Four times. Four little black knots in a row on the orange peel, evenly spaced, like a sentence." },
      { n: "The lounge had gone silent. Solar looked up. Everybody was looking at the orange." },
      { s: 'mercy', f: 'serious', t: "...Where did you learn that?" },
      { choose: [
        { t: "I don't know.", notes: 3, then: [
          { s: 'mercy', f: 'neutral', t: "You don't know." },
          { s: 'solar', f: 'neutral', t: "I don't remember learning it. I don't remember a lot of things." },
          { n: "Angela looked at her. Not at the orange now. At her face. The look went on long enough that Junpei opened his mouth to make a joke and Mitsuru, from the armchair, very quietly put a hand on his arm, and he closed it again." },
          { s: 'mercy', f: 'neutral', t: "Then whoever taught you was patient, and you practiced for a long time, alone. Those are not beginner's knots. Those are the knots of someone who has done it in bad light with someone hurting." }
        ] },
        { t: "I watched you. That's all.", notes: 1, then: [
          { s: 'mercy', f: 'neutral', t: "No. I watched you. You were ahead of me on the second throw." },
          { n: "She said it gently. That made it worse. Solar put the clamps down very carefully on the sheet, and her hands, now that she wasn't using them, had started, very slightly, to shake." }
        ] },
        { t: "Is it wrong?", notes: 2, then: [
          { s: 'mercy', f: 'happy', t: "Wrong? It's better than my second-year residents. It's better than me at your age." },
          { s: 'mercy', f: 'serious', t: "That's what worries me." }
        ] }
      ] },
      { n: "Afterward, when the others had gone up and the oranges had been eaten, all of them, stitches and all, Angela stayed in the kitchen doorway while Solar washed the bowls. She dried. Neither of them talked for a while." },
      { s: 'mercy', f: 'neutral', t: "I won't ask you anything else. You'd tell me if you knew. I can see that much." },
      { s: 'mercy', f: 'neutral', t: "But I'll say this, as a doctor, and as someone who has had to learn things she didn't want to know at hours she didn't choose. Somebody, somewhere, needed you to be good at that. And you were." },
      { choose: [
        { t: "That's a strange thing to be proud of.", notes: 2, then: [
          { s: 'mercy', f: 'neutral', t: "Most of the things worth being proud of are." }
        ] },
        { t: "Will you teach me the rest? Properly?", notes: 3, flag: 'mercy-lessons', then: [
          { s: 'mercy', f: 'happy', t: "Liebling. I don't think there's much left to teach." },
          { s: 'mercy', f: 'neutral', t: "...Yes. Of course. Thursdays. Bring oranges. I'll teach you everything I know, and you can tell me which bits you knew already, and we'll both pretend that's normal." }
        ] }
      ] },
      { n: "That night Solar lay in bed with her hands on the blanket and looked at them in the light from the street, turning them over. Ordinary hands. A little chipped nail polish. And she could feel it in them still, the shape of the knot, the twice-around and once-back, and somewhere far underneath it, so faint she thought she might be making it up, the cold smell of iodine on her thumb." }
    ] },

    { after: '7/23', title: '4: genji', place: 'Tatsumi Memorial Hospital', scene: [
      { place: 'Tatsumi Memorial Hospital · Courtyard', time: 'Daytime', bg: 'hospital-outside' },
      { music: 'tender' },
      { n: "There was a cyborg in the hospital courtyard, sitting cross-legged under the ginkgo tree, meditating." },
      { n: "Nobody else seemed to find this strange, which Solar had stopped being surprised by. The same thing that made people walk past the coffins at midnight without breaking stride seemed to make them walk past a man in green-lit armor sitting under a tree as if he were a bench, or a statue, or a man with a cold." },
      { n: "He had been there, the nurses said, every day for two weeks. Since the full moon. He arrived at seven in the morning and left when visiting hours ended. He didn't ask for anyone. He never went in." },
      { n: "Angela was standing at the third-floor window, directly above him, with her coffee, not looking down. Solar could see her from the courtyard. Not looking down so hard it was a kind of looking." },
      { s: 'genji', f: 'neutral', t: "You are the girl who keeps bringing her lunch." },
      { n: "He hadn't opened his eyes. Or his visor. Or whatever he had now. His voice was calm and a little metallic at the edges and very warm underneath, like a radiator in a cold building." },
      { s: 'genji', f: 'neutral', t: "Genji. Shimada. I came through on the night of the full moon. A girl in a porter's coat met me on the bridge and said, \"She's at the hospital.\" She didn't say who. She didn't have to." },
      { s: 'genji', f: 'happy', t: "She apologized as well. I told her she had nothing to apologize for. She didn't seem to believe me. Few people do." },
      { choose: [
        { t: "Why don't you go up?", notes: 3, then: [
          { s: 'genji', f: 'neutral', t: "Because she hasn't come down." },
          { s: 'genji', f: 'neutral', t: "I have waited longer than two weeks for her before. I can wait. Waiting is one of the few things I've become good at. My master would be very proud. He's a very patient robot." }
        ] },
        { t: "How do you know her?", notes: 2, then: [
          { s: 'genji', f: 'neutral', t: "She put me back together. A long time ago. When I had asked very clearly not to be." },
          { s: 'genji', f: 'neutral', t: "I hated her for years for it. And then, much later, I didn't. That is the short version. The long version has more shouting." }
        ] },
        { t: "She's watching you. From the window.", notes: 2, then: [
          { s: 'genji', f: 'happy', t: "I know. Third floor, fourth window. She has been there since ten. Her coffee went cold an hour ago." },
          { s: 'genji', f: 'neutral', t: "I don't look up. If I look up, she will step away from the glass." }
        ] }
      ] },
      { place: 'Tatsumi Memorial Hospital · Rooftop', time: 'Daytime', bg: 'rooftop-day' },
      { n: "On the roof, Angela didn't let her get a word out." },
      { s: 'mercy', f: 'serious', t: "I know he's there. I'm not blind. I'm a doctor." },
      { s: 'mercy', f: 'sad', t: "He answered the letter. The recall. Of course he did. He always answers. He came here because he answered it and then went looking for whoever hadn't, and he found me, and now he's sitting under a tree in a hospital car park in a world that isn't ours, waiting for me to say something I don't have." },
      { s: 'mercy', f: 'sad', t: "If I go down there, Solar, he'll ask me to come home. And I'll have to tell him I'm not sure I can. And then I'll have to watch his face, and I know exactly what it will do, because I built half of it." },
      { choose: [
        { t: "Maybe he isn't going to ask you anything.", notes: 3, then: [
          { s: 'mercy', f: 'neutral', t: "...What do you mean?" },
          { s: 'solar', f: 'neutral', t: "He hasn't asked the nurses for anything in two weeks. He's just there. Maybe that's all he came to do." },
          { n: "Angela turned the coffee cup a slow full circle in her hands. Then she went to the rail and looked down, for the first time, all the way, at the green lights under the ginkgo, and the green lights didn't move, and her face did something Solar had only ever seen on people standing on the platform when a train they've been waiting for is finally pulling in." }
        ] },
        { t: "You're allowed to not know yet.", notes: 2, then: [
          { s: 'mercy', f: 'neutral', t: "Am I? Nobody has told me that since medical school." },
          { s: 'mercy', f: 'sad', t: "...I'm not sure anyone told me then, either." }
        ] },
        { t: "Then don't go down. Let him wait.", notes: 1, then: [
          { s: 'mercy', f: 'sad', t: "That's what I've been doing. It's very effective. I feel terrible." }
        ] }
      ] },
      { s: 'mercy', f: 'neutral', t: "I'll go down. Not today. Soon. When I have something to say that isn't an apology." },
      { n: "She didn't go down. But at the end of visiting hours, when Solar was leaving through the courtyard, Genji was standing up under the ginkgo to go, and there was a paper cup of coffee on the bench beside where he'd been sitting, from the third-floor machine, still warm, with a lid on it, and nobody had seen it arrive. He picked it up with enormous care. He couldn't drink it, Solar realized. Not with the mask. He carried it out of the courtyard anyway, in both hands, the way you'd carry something alive." }
    ] },

    { after: '8/4', title: '5: needle and thread', place: 'Tatsumi Memorial Hospital', scene: [
      { place: 'Tatsumi Memorial Hospital · Treatment Room', time: '3:00 AM', bg: 'hospital-hallway-night' },
      { music: 'night' },
      { n: "Solar had arranged it, in the end, the way you arrange anything with two stubborn people: badly, and by accident on purpose." },
      { n: "Genji had come back from the green on Saturday with a tear down the inside of his forearm, where the armor met the synthetic skin underneath, three inches long and leaking something that wasn't quite blood, from a Shadow on the Port Island side that had been bigger than it looked. He'd said it was nothing. He'd been planning to tape it." },
      { n: "Solar had said, in a voice she hadn't known she had, that he was not going to tape it. That she knew a doctor. That it was three in the morning and the doctor was on a night shift she wasn't being paid for, and was certainly awake, and would be furious, and would do it perfectly." },
      { place: 'Tatsumi Memorial Hospital · Treatment Room', time: '3:00 AM', bg: 'hospital-room', soft: true },
      { n: "Angela took one look at the arm and said a word in German that Solar didn't know and could translate perfectly. Then she took his wrist in one hand, the way you take a child's, without asking, and turned it to the light, and her face went still and professional and completely calm, and her other hand was shaking very slightly, and only Solar was standing close enough to see it." },
      { s: 'mercy', f: 'serious', t: "You were going to tape this." },
      { s: 'genji', f: 'neutral', t: "It was a very good tape." },
      { s: 'mercy', f: 'serious', t: "Sit. Don't talk. Solar, the overhead light is broken in here. There's a penlight in the drawer. Hold it for me. Here. And here. Don't move it." },
      { n: "Solar held the light. She stood at Angela's shoulder with the little beam steady on Genji's arm, on the torn place where metal met skin, and Angela threaded the curved needle by touch without looking at it and began." },
      { n: "And somewhere around the third stitch, the room went away." },
      { bg: 'flashback-lee-house' },
      { dark: true },
      { music: 'mystery' },
      { n: "A different light. A flashlight, heavy, the old metal kind, held in somebody's teeth, and then in her own hand, and then propped on a stack of folded towels. A laundry room at three in the morning. The drum of a washing machine at her back, cold through her shirt. The smell of detergent and iodine and wet concrete." },
      { n: "A needle in her fingers. Curved. Black thread. Her own hands, so steady they felt borrowed, putting stitches into a long ugly cut along somebody's side, and the somebody talking. Talking the whole time. Jokes, bad ones, in a low dry voice, about her technique, about her nail polish, about how he'd been stitched better by a fisherman with a hangover, and then, at the seventh stitch, the deepest one, nothing. Silence. He went completely quiet. She'd learned that that was how you knew it actually hurt." },
      { n: "Agasshi, he'd said after. Just that. The one word, in a voice with no joke left in it at all." },
      { n: "And a different kind of fitting. A dinner, a private room built out over black water, a navy silk dress with long sleeves and her grandmother's pearls, her hair in a low chignon her mother had pinned herself, one pin at a time, saying *hold still*, saying *closer*. Solar sitting very straight with her best smile held on her face like a plate. A big man raising a white porcelain bottle and naming a date she hadn't picked, and everybody clapping, and the date coming closer one pin at a time." },
      { fragment: 'strangers-needle' },
      { bg: null },
      { dark: false },
      { music: 'night' },
      { n: "The penlight hadn't moved. She came back and the beam was exactly where it had been, steady on the arm, steady on Angela's hands, and Solar didn't know how long she'd been gone and her own hand hadn't so much as trembled the whole time, as if it had done this before, as if holding the light for someone was the thing it was for." },
      { n: "Angela was tying off. She hadn't noticed. Genji had. He was looking at Solar, not at his arm, the visor tilted, and he didn't say anything, and Solar was grateful in a way that made her throat hurt." },
      { s: 'genji', f: 'neutral', t: "You've never let anyone stitch you, Angela. Not once. In all those years. You do it yourself, in the mirror, badly, at night." },
      { s: 'mercy', f: 'blushing', t: "I do it very well, thank you, and that is none of your business." },
      { s: 'genji', f: 'neutral', t: "I'd let you. Stitch me. Anytime. Every time. I just wanted you to know that I'd let you, and I'd hold still." },
      { n: "Angela's hands stopped on the last knot. They stayed stopped. Solar watched the back of her neck go pink from the collar up." },
      { choose: [
        { t: "(Turn the penlight off. Quietly leave the room.)", notes: 3, then: [
          { n: "Solar clicked the penlight off and set it on the counter by the sink and went out into the corridor and pulled the door almost shut behind her, almost, not all the way, and stood in the green-lit hush of the night ward with her back against the wall and her heart going." },
          { n: "Through the gap she heard nothing for a long time. Then Angela's voice, very low, in German. Then his, answering in Japanese, then in something halting that might have been German, badly, which made Angela laugh, a startled wet laugh, the kind that comes out of a person sideways." },
          { n: "When Solar looked back through the gap, Angela's hand was flat on the new stitches, over the bandage, and Genji's hand was over hers, and neither of them was moving, and Solar went and sat in the chair by the nurses' station and let them have it, and the night nurse looked up from her crossword, and looked at the door, and looked at Solar, and went back to her crossword with a small, satisfied smile, as though it was about time." }
        ] },
        { t: "He's been waiting under that tree for a month, Angela.", notes: 2, then: [
          { s: 'mercy', f: 'sad', t: "I know. I know how long he's been waiting. I've been counting too." },
          { n: "She finished the knot. Cut the ends. And then she put her hand flat on the bandage, over the stitches, and left it there, and Genji put his hand over hers, and Solar looked very hard at a poster about handwashing for a long time." }
        ] },
        { t: "(Keep holding the light. Don't say anything.)", notes: 2, then: [
          { n: "Solar kept holding the light. It seemed like the job. Angela finished the knot, and cut the ends, and then didn't let go of his wrist, and Genji didn't take it back, and the little beam sat on their two hands in the dark like a spotlight on a very small stage, and Solar held it there, steady, for as long as they needed." }
        ] }
      ] },
      { place: 'Tatsumi Memorial Hospital · Rooftop', time: 'Dawn', bg: 'rooftop-evening' },
      { n: "On the roof at five, with the sky going gray over the bay and two coffees between them that neither of them wanted, Angela finally said it." },
      { s: 'mercy', f: 'neutral', t: "You did that on purpose." },
      { s: 'solar', f: 'neutral', t: "He was going to tape it." },
      { s: 'mercy', f: 'happy', t: "He was going to tape it. Mein Gott. A man made of the most advanced prosthetics in the world and he was going to tape it." },
      { s: 'mercy', f: 'neutral', t: "...You went somewhere. While you held the light. Your eyes went somewhere very far away and your hand didn't move a millimeter. I've seen soldiers do that. Not many." },
      { choose: [
        { t: "I remembered holding a needle. In a laundry room. For someone.", notes: 3, then: [
          { s: 'mercy', f: 'neutral', t: "Someone you loved?" },
          { n: "Solar opened her mouth to say no, and couldn't, and couldn't say yes either. Something in her chest had gone hot and furious and tender all at once, an argument with no one, and she didn't know who it was for." },
          { s: 'solar', f: 'neutral', t: "...Someone I wasn't supposed to." },
          { s: 'mercy', f: 'neutral', t: "Ah. Those are the ones you stitch best. You're terrified the whole time." }
        ] },
        { t: "I don't want to talk about it.", notes: 2, then: [
          { s: 'mercy', f: 'neutral', t: "Then we won't. Drink your coffee. It's terrible. It'll help." }
        ] }
      ] },
      { n: "The sun came up over the bay all at once, the way it did, and Angela turned her face into it and shut her eyes, and for the first time since Solar had known her, she looked like someone who might, eventually, today, go home and sleep." }
    ] },

    { after: '8/20', title: '6: bento', place: 'Tatsumi Memorial Hospital', scene: [
      { place: 'Tatsumi Memorial Hospital · Staff Lounge', time: 'Daytime', bg: 'hospital-hallway-day' },
      { music: 'day' },
      { n: "The hottest week of the year, the kind of heat that made the asphalt in the car park soft enough to keep footprints, and Angela had worked six days straight. Solar knew because the night nurse had started texting her. The night nurse had gotten Solar's number from Angela's folding phone while Angela was asleep sitting up in a chair in the staff lounge. It had been, the night nurse said, the only way." },
      { s: 'nurse', t: "She has not eaten since Tuesday. I have seen her eat one rice cracker. She says coffee has calories. Please help." },
      { n: "So Solar had learned to make tamagoyaki. Shinjiro had taught her, grumbling, at the dorm stove at six in the morning, roll it, don't fold it, you're folding it, stop folding it, and she'd burned four and gotten the fifth right and he'd looked at it in the pan for a while and said \"fine\" in a way that meant it was very good. She'd added rice. Pickled plum. A little salad that was mostly an excuse for a tomato. She'd put it all in a box and walked it across the bridge in the heat." },
      { n: "Angela looked at the box on the staff lounge table, and then up at Solar, and then at the box again, like it might contain a subpoena." },
      { s: 'mercy', f: 'surprised', t: "Is this an intervention?" },
      { choose: [
        { t: "Yes. Eat.", notes: 3, then: [
          { s: 'mercy', f: 'neutral', t: "...That's extortion. I respect it." },
          { n: "Solar sat down across from her and did not leave, and did not look away, and after a short silent struggle in which Angela clearly considered three separate escape routes, she picked up the chopsticks." }
        ] },
        { t: "The night nurse sends her regards.", notes: 2, then: [
          { s: 'mercy', f: 'serious', t: "The night nurse is a traitor and I'm going to put her up for a commendation." }
        ] },
        { t: "It's just lunch.", notes: 1, then: [
          { s: 'mercy', f: 'neutral', t: "Nothing is ever just lunch when someone has crossed a bridge in this heat to bring it." }
        ] }
      ] },
      { n: "Angela ate everything. She ate it the way people eat when they've forgotten they were hungry, slowly at first, politely, and then not politely at all, and she didn't talk until the box was empty and she'd chased the last grain of rice into the corner of it with the chopstick." },
      { s: 'mercy', f: 'sad', t: "Nobody's made me lunch since I was a little girl in Switzerland. My mother used to. Bread and cheese and an apple cut into eight, every day, exactly eight, wrapped in a cloth." },
      { s: 'mercy', f: 'sad', t: "My parents were doctors too. They went to help in a war when I was very young. They didn't come back. I think I've been trying to finish their shift ever since." },
      { n: "Solar didn't say anything for a moment. There was a tightness in her throat that she knew the shape of. Not grief. The place where grief would be, if she had anything to put there. She thought, very clearly, I have parents. She must. Everyone does. And she couldn't see a single face." },
      { choose: [
        { t: "I don't know if mine are alive. I don't remember them.", notes: 3, flag: 'mercy-told-parents', then: [
          { n: "Angela reached across the table and put her hand on top of Solar's. Warm and steady. A doctor's hand. She didn't say anything for a while. She didn't pat. She just left it there, the weight of it, the way you leave a hand on a patient so they know someone is in the room." },
          { s: 'mercy', f: 'neutral', t: "Then somewhere, someone is sitting up waiting for you. I'd put money on it. Good parents always do. It's the main symptom." },
          { s: 'mercy', f: 'neutral', t: "And until you find them, Liebling, you can borrow some of my nagging. I have a great deal of it and no one to spend it on." }
        ] },
        { t: "They'd be proud of you.", notes: 2, then: [
          { s: 'mercy', f: 'sad', t: "I hope so. I've never been sure. I think they'd be furious that I don't sleep." },
          { s: 'mercy', f: 'happy', t: "My mother would have taken one look at me this week and confiscated every coffee machine in the building." }
        ] },
        { t: "Your shift's allowed to end, you know.", notes: 2, then: [
          { s: 'mercy', f: 'neutral', t: "That's the thing about a shift you inherited. Nobody ever tells you when it's over." },
          { s: 'mercy', f: 'neutral', t: "...Perhaps you just did." }
        ] }
      ] },
      { n: "She went home after. Actually home, to the little Kirijo-owned flat by the station she'd been given in June and had slept in perhaps nine times. She slept for fourteen hours. The night nurse texted Solar a single thumbs-up emoji at midnight, and then, at two, a second one, and then, at four, as if she couldn't help herself, a third." }
    ] },

    { after: '9/6', title: '7: big sisters', place: 'Iwatodai Dorm', scene: [
      { place: "Iwatodai Dorm · Solar's Room", time: 'Daytime', bg: 'solar-dormroom-day' },
      { music: 'joy' },
      { n: "It had started as a haircut. Solar's ends were split, Angela had observed at lunch on Tuesday, with the same tone she used for a sprained ankle, and she happened to have very sharp scissors and a steady hand and an afternoon off, and it was frankly a public health matter." },
      { ifRank: { aphrodite: 1 }, then: [
        { n: "Then Aphrodite had heard. Solar never found out how. Aphrodite heard things the way other people breathed, without trying, and she had arrived at the dorm door at two o'clock in white and gold with a bag of cosmetics the size of a suitcase and announced that she would be supervising, and also doing everything else." }
      ], else: [
        { n: "Then there had been a knock at the dorm door at two o'clock, and a woman Solar had seen once on the Port Island concourse, a woman in white and gold with a whole crowd going quiet around her, had been standing on the step with a bag of cosmetics the size of a suitcase, explaining to Yukari that Angela had mentioned a haircut, and that she would be supervising, and also doing everything else." }
      ] },
      { n: "So now Solar was sitting on her own desk chair in the middle of her own room with a towel around her shoulders, and Angela was behind her with the scissors and a comb, and Aphrodite was in front of her kneeling on the floor with a palette of colors open on her lap like a painter in a park, and Solar had stopped being consulted about twenty minutes ago." },
      { s: 'aphrodite', f: 'happy', t: "Look up. No, up. At the ceiling, little sun, not at me. Mortals always look at the goddess. It ruins the line." },
      { s: 'mercy', f: 'neutral', t: "Stop calling her that. She has a name." },
      { s: 'aphrodite', f: 'happy', t: "Everyone has a name. Not everyone has a nickname from a goddess. I'm being generous." },
      { n: "Angela combed Solar's hair out straight down her back, all of it, long and black and heavier than Solar ever thought about, and as the comb went through it Solar felt her own hands come up off her lap. By themselves. Gathering. Twisting. Reaching for a pin that wasn't there, to put it up, the way her hands did every morning in the mirror without asking her, quick and practiced, as if a lot depended on it." },
      { n: "Angela caught her wrists. Gently. The way you'd catch the wrists of someone reaching for a stitch they shouldn't touch." },
      { s: 'mercy', f: 'neutral', t: "Leave it down. Just for today." },
      { s: 'solar', f: 'neutral', t: "I always put it up." },
      { s: 'aphrodite', f: 'neutral', t: "Mm. I noticed. Every time I see you. Up, and pinned, and not one hair out of place. Like a girl who's been told a hundred times that she mustn't ever look undone." },
      { s: 'aphrodite', f: 'serious', t: "Who told you that, little sun?" },
      { choose: [
        { t: "I don't know. Someone. My hands know.", notes: 3, then: [
          { n: "Aphrodite looked at her for a long moment with her brush held still, and something went across her face that wasn't vanity at all, something old and quick and sad, the face of someone who has watched a great many girls be told what they mustn't ever look like." },
          { s: 'aphrodite', f: 'neutral', t: "Well. They're not here. And I am. And I say down." }
        ] },
        { t: "Nobody. I just like it neat.", notes: 1, then: [
          { s: 'aphrodite', f: 'neutral', t: "Nobody likes it that neat. That's a lie, and a pretty one, and I collect pretty lies, so I'll keep it." }
        ] },
        { t: "Is it so bad? Looking done?", notes: 2, then: [
          { s: 'mercy', f: 'neutral', t: "Not bad. Tiring. You can look done for a whole life and never once get to be finished." }
        ] }
      ] },
      { n: "So they left it down. Angela cut two centimeters off the ends and nothing else, very slowly, with the same total concentration she'd given Genji's arm, and Aphrodite did Solar's face with soft brushes and her fingertips, humming, and none of it was the face Solar would have done. It was softer. Warmer at the cheeks. Less armor. When Aphrodite was done she didn't hand Solar a mirror. She held it up herself, and stood behind her, next to Angela, so there were three of them in it." },
      { n: "A girl with her hair down. And two women behind her, one in white with scissors, one in gold with a brush, both looking at the girl in the mirror the way older sisters look at the little one on the first day of something." },
      { n: "Solar didn't recognize her. That was the strange part. She'd spent months not recognizing things, but this was the first time it didn't frighten her. The girl in the mirror looked like somebody who didn't have anywhere to be. Somebody nobody needed anything from, this afternoon. She looked, Solar thought, tired in a way she'd been too busy to notice, and younger than she felt, and fine. Just fine." },
      { s: 'aphrodite', f: 'happy', t: "There she is. I knew she was in there. The pins were holding her down." },
      { s: 'mercy', f: 'happy', t: "Medically speaking, I approve." },
      { choose: [
        { t: "(Don't say anything. Just look.)", notes: 3, then: [
          { n: "She didn't say anything. She looked for a long time. Behind her in the mirror Angela put one hand on her shoulder and Aphrodite put one hand on the other, and none of them said anything, and down the hall Junpei was singing in the shower, badly, and it was the best afternoon Solar could remember, which wasn't saying much, and was saying everything." }
        ] },
        { t: "Is this what it's like to have sisters?", notes: 3, then: [
          { s: 'aphrodite', f: 'surprised', t: "..." },
          { s: 'mercy', f: 'neutral', t: "It's what it's like to have very bossy ones. I'm told that's the only kind." },
          { s: 'aphrodite', f: 'happy', t: "Yes. Exactly this. Except with more stolen clothes. We'll get to that." }
        ] },
        { t: "Thank you. Both of you.", notes: 2, then: [
          { s: 'aphrodite', f: 'happy', t: "Don't thank a goddess. It makes her suspicious. Just wear it down to dinner and let everyone stare." }
        ] }
      ] },
      { n: "She wore it down to dinner. Everyone stared. Akihiko dropped a fork. And when she went to bed she lay with it spread out on the pillow, not braided, not pinned, and slept, for once, without waking at three to check whether the door was locked." }
    ] },

    { after: '9/24', title: '8: apathy', place: 'Tatsumi Memorial Hospital · 3F Ward', scene: [
      { place: 'Tatsumi Memorial Hospital · 3F Ward', time: 'Daytime', bg: 'hospital-room' },
      { music: 'mystery' },
      { ifFlag: 'mercy-lessons', then: [
        { n: "It was a Thursday, so there was a bag of oranges in Solar's school bag, the way there had been every Thursday since July. Eleven weeks of oranges. She'd stopped needing them somewhere around the fourth and kept bringing them anyway, because Angela kept pretending she still had something to teach, and Solar kept pretending to learn it, and both of them knew, and neither of them was going to be the one to stop." }
      ] },
      { n: "Angela had figured it out. Solar could tell from the doorway by the way she was standing in the middle of the third-floor ward, very still, arms crossed, looking at the beds the way you look at a crossword you've finally solved and don't like the answer to." },
      { n: "There were more of them now. Eleven beds where there had been eight. They'd brought in cots. The girl with the hair clips and the stuffed rabbit was still by her window. The rabbit had fallen into her lap at some point and someone had put it back." },
      { s: 'mercy', f: 'serious', t: "It's them. Isn't it. The things in the green hour. They're not making these people sick. They're feeding on them." },
      { n: "Solar had never told her. She'd never told anyone outside the dorm. But Angela had been out in the green every night since June, and Angela read charts for a living, and the chart of this whole ward went up after every full moon like a fever." },
      { choose: [
        { t: "Yes.", notes: 3, then: [
          { s: 'mercy', f: 'neutral', t: "Thank you. For not lying. I'd have known, and then I'd have had to pretend I didn't, and I'm very tired of pretending things in this building." }
        ] },
        { t: "I'm not supposed to tell anyone.", notes: 2, then: [
          { s: 'mercy', f: 'neutral', t: "You didn't tell me. I worked it out. There's a difference, and I'll defend it to Kirijo personally if she asks." }
        ] }
      ] },
      { s: 'mercy', f: 'sad', t: "Then I can't cure them. Not with anything I have. Only you can. Your team. In that hour. With those terrible guns you point at your own heads." },
      { s: 'mercy', f: 'sad', t: "Do you know what that's like? To be the very best at the thing you do, and realize it's the wrong thing?" },
      { n: "She looked at the beds. All those people. All those vital signs, normal, normal, normal, and nobody home." },
      { s: 'mercy', f: 'sad', t: "This is what I ran from, Solar. This exact feeling. Standing in a room full of people I can't save, knowing someone else is out there with the thing that could. Back home, it was a war. Choosing a side and patching up whoever was left, and people dying anyway, on both sides, whatever I did." },
      { s: 'mercy', f: 'sad', t: "And the letter came, and it said, come back, we need you, and all I could think was, I'll be standing in this room again. I'll always be standing in this room." },
      { choose: [
        { t: "Then stand in it with someone.", notes: 3, then: [
          { s: 'mercy', f: 'surprised', t: "..." },
          { s: 'mercy', f: 'neutral', t: "That's very nearly what Genji said. I told him it was a fortune cookie. I'm not going to tell you that, because you'd be insulted, and you'd be right." }
        ] },
        { t: "You can't save them. But you can keep them here until we can.", notes: 3, then: [
          { n: "Angela uncrossed her arms. She looked at the girl with the rabbit for a long time. Something in her shoulders came down, and then went back up, but differently, squarer, the way a soldier's do when she's been given an order she can actually follow." }
        ] },
        { t: "It's not your fault.", notes: 1, then: [
          { s: 'mercy', f: 'neutral', t: "I know it isn't. That's never once helped anybody." }
        ] }
      ] },
      { s: 'mercy', f: 'serious', t: "No. I refuse. I refuse to stand here. If I can't cure them, I'll keep them alive until you can. Fluids. Nutrition. Turning them every two hours so their skin doesn't break down. Talking to them. Someone told me hearing is the last thing to go. I'll make sure they hear someone." },
      { s: 'mercy', f: 'neutral', t: "That's my job. That's what I can do. The rest is yours. And I'll be here when you come back from the green, every time, and you'll tell me how it went, and I'll check you for cracked ribs whether you like it or not." },
      { n: "She held out her hand. Not to be held. To be shaken. Solar shook it, firm, like a contract, like two people agreeing on terms in a world neither of them had made." },
      { s: 'mercy', f: 'neutral', t: "Together, then. You in the hour. Me in the morning." },
      { choose: [
        { t: "You're the bravest person I know.", notes: 3, then: [
          { s: 'mercy', f: 'neutral', t: "I'm not. I'm just very, very stubborn. From a distance it looks the same." },
          { s: 'mercy', f: 'happy', t: "So are you, Liebling. I've seen you at an orange. Don't think I didn't notice." }
        ] },
        { t: "Deal.", notes: 2, then: [
          { s: 'mercy', f: 'happy', t: "Deal. I'll draw up the paperwork. I won't, but I'll want to." }
        ] }
      ] },
      { n: "When Solar left, Angela had pulled a chair over beside the girl with the rabbit, and was reading to her out of a paperback someone had left in the waiting room, a detective novel with its cover missing, doing all the voices, very badly, in her careful accented Japanese, and three nurses had stopped in the doorway to listen, and none of them were pretending they weren't." }
    ] },

    { after: '10/20', title: '9: the recall', place: 'Tatsumi Memorial Hospital · Rooftop', scene: [
      { place: 'Tatsumi Memorial Hospital · Rooftop', time: 'Daytime', bg: 'rooftop-evening' },
      { music: 'tender' },
      { n: "October, and the hospital roof was cold now. Angela had a scarf. It was very long and very ugly, mustard and brown and an unexpected stripe of purple, and a patient on the fourth floor had knitted it for her over six weeks of physical therapy, and she wore it every single day, with her white coat, with total dignity, as though it were a medal." },
      { n: "She'd been different, the last month. Lighter. She slept. She ate the bentos without being bullied into it, mostly. She'd been seen, by the night nurse, laughing in the courtyard under the ginkgo with a man made of metal who was trying to teach her to meditate and failing, because she kept opening one eye to check he was still there." },
      { s: 'mercy', f: 'neutral', t: "I've decided something. You're the first person I'm telling, which you should take as a compliment, or as a warning." },
      { s: 'mercy', f: 'neutral', t: "When the doors open at the end of the year, I'm going home. And I'm going to answer the letter." },
      { choose: [
        { t: "What changed?", notes: 3, then: [
          { s: 'mercy', f: 'neutral', t: "Nothing changed. That's the thing. The war will still be there. People will still die on both sides. I'll still be choosing." },
          { s: 'mercy', f: 'neutral', t: "But I'll be choosing as a doctor. Not as a soldier who happens to carry a staff. I'll go back and I'll say, I'll answer your letter, but these are my terms. I treat whoever is in front of me. I sleep. I eat lunch. And I don't do it alone." },
          { s: 'mercy', f: 'happy', t: "I learned that last one from an eighteen-year-old with a penlight. Don't tell anyone." }
        ] },
        { t: "Because of Genji?", notes: 2, then: [
          { s: 'mercy', f: 'blushing', t: "Not because of Genji. Genji is... adjacent. To the decision. Genji is a factor." },
          { s: 'mercy', f: 'neutral', t: "...Partly because of Genji. He answered the letter knowing exactly what it would cost him, and then he came all this way and sat under a tree, and he never once asked me to come. He just made it clear the door was open. That's the bravest thing anyone's ever done near me." }
        ] },
        { t: "I'm proud of you.", notes: 2, then: [
          { s: 'mercy', f: 'surprised', t: "..." },
          { s: 'mercy', f: 'neutral', t: "That's my line. You've stolen my line. I'm going to have to think of a new one now." }
        ] }
      ] },
      { s: 'mercy', f: 'neutral', t: "I need to ask you something now, and I'd like you to answer like a patient. Which is to say honestly, because I'll know if you don't." },
      { s: 'mercy', f: 'neutral', t: "I've been your doctor, and your teacher, and your unpaid hairdresser, and the person who checks your ribs after every full moon whether you like it or not. And somewhere in there I stopped knowing what to call it." },
      { ifFlag: 'mercy-told-parents', then: [
        { s: 'mercy', f: 'sad', t: "You told me once, over a bento, that you couldn't see your parents' faces. I've thought about that every single day since August. I'm not trying to be them. I couldn't. I'd only like to know what I'm allowed to be instead." }
      ] },
      { s: 'mercy', f: 'neutral', t: "What am I to you, Solar?" },
      { choose: [
        { t: "My big sister. If that's allowed.", notes: 3, flag: 'mercy-sister', then: [
          { n: "Angela didn't say anything. She took one end of the ugly scarf and looped it around Solar's neck, too, so they were stuck together, ridiculous, two people sharing six feet of mustard wool on a hospital roof in the cold." },
          { s: 'mercy', f: 'happy', t: "There. Now we match. Medically speaking, this is very important." },
          { s: 'mercy', f: 'neutral', t: "It's allowed, Liebling. I'd have been offended by anything else. I was an only child. I've wanted a little sister to boss around my whole life." }
        ] },
        { t: "The person I'd call at three in the morning.", notes: 3, flag: 'mercy-three-am', then: [
          { s: 'mercy', f: 'neutral', t: "...Yes. That's a very good answer. That's the most honest diagnosis anyone's ever given me." },
          { s: 'mercy', f: 'happy', t: "Call me. At three. Any night. In any world where that's possible. I'll be awake. I'm always awake. That part I can't fix." }
        ] },
        { t: "My doctor.", notes: 1, flag: 'mercy-doctor', then: [
          { s: 'mercy', f: 'neutral', t: "...That's true. It isn't all of it. But it's true. I'll take true." }
        ] }
      ] },
      { s: 'mercy', f: 'neutral', t: "And you are, to me, the girl who held the light. I'll tell everyone about you when I'm home. Ana will want to meet you and she'll be very disappointed she can't. She'll say you're too thin." },
      { n: "The wind came over the roof off the bay, cold, smelling of salt and diesel and the first of the winter, and Solar turned her face into it and found, to her surprise, that she wasn't counting anything. Not the exits. Not the days. She was just standing on a roof in a stupid scarf next to someone who'd decided to go home and be brave about it, and it was enough to stand next to that, for now, and feel it go into her like warmth." }
    ] },

    { after: '11/19', title: '10: heroes never die', place: 'Tatsumi Memorial Hospital · Rooftop', scene: [
      { place: 'Tatsumi Memorial Hospital · Rooftop', time: 'Daytime', bg: 'rooftop-evening' },
      { music: 'tender' },
      { n: "November, and the first snow wouldn't come for weeks yet but you could smell it already, that clean metal edge in the air. Angela was waiting on the roof in her white coat and the ugly scarf, and the Caduceus was leaning on the rail beside her, humming, and Genji was sitting on the ledge at the far end with his back to them, very carefully not listening, the way only someone who could hear everything could not listen." },
      { s: 'mercy', f: 'neutral', t: "I have something for you. Hold out your hand. No, the other one. The one that holds the light." },
      { n: "She put something in Solar's palm. A feather. Not a real one. A single segment of the gold and white wings, a long thin blade of light metal, warm, and when Solar's fingers closed around it, it hummed, very faintly, the same note as the staff." },
      { s: 'mercy', f: 'neutral', t: "It's tuned to the Caduceus. So I always know where you are. And so you always know where I am. In this world or any of the others. I can't promise it'll work across the gap. I've never tried. But I've never done anything this year I'd tried before." },
      { s: 'mercy', f: 'sad', t: "I've spent my whole life choosing who to save. Every day, every patient, every battlefield. I'm very good at it." },
      { s: 'mercy', f: 'neutral', t: "And this year, for the first time, someone chose me. Not because I was hurt. Not because I could do something. She just came back up three flights of stairs for an umbrella, and kept coming." },
      { choose: [
        { t: "You'd have done the same for me.", notes: 2, then: [
          { s: 'mercy', f: 'happy', t: "I'd have done it worse. I can't make tamagoyaki. I tried. Junpei saw it and asked if it was an omelette or a crime." }
        ] },
        { t: "Heroes never die, right?", notes: 3, then: [
          { n: "Angela laughed, surprised, a short helpless sound, like Solar had said a password she wasn't supposed to know." },
          { s: 'mercy', f: 'neutral', t: "That's what I say on the battlefield. Do you know what it means? It doesn't mean we don't die. We do. It means nobody gets left where they fell. Someone always comes back for them." },
          { s: 'mercy', f: 'happy', t: "Someone came back for me this year. So. Yes. Heroes never die. Not while we're watching each other." }
        ] },
        { t: "Will you remember me? After?", notes: 3, then: [
          { s: 'mercy', f: 'serious', t: "I have a medical-grade memory and a very ugly scarf. I'll remember you every single day." },
          { ifFlag: 'mercy-lessons', then: [
            { s: 'mercy', f: 'neutral', t: "And if anyone ever tells me you weren't real, I'll show them my knots. They've gotten better since July. Someone kept correcting my second throw on Thursdays." }
          ], else: [
            { s: 'mercy', f: 'neutral', t: "And if anyone ever tells me you weren't real, I'll show them an orange. Four knots in a row. I'll draw it from memory. I won't get it wrong." }
          ] }
        ] }
      ] },
      { s: 'genji', f: 'neutral', t: "She also wants you to know that she will be sleeping eight hours a night. I will be personally enforcing it. It's in the terms." },
      { s: 'mercy', f: 'blushing', t: "You said you weren't listening." },
      { s: 'genji', f: 'happy', t: "I said I would sit at the far end. I am at the far end. I have very good hearing. You built it." },
      { n: "Angela made an exasperated noise and turned her back on him and looked at Solar, and her eyes were wet, and she was smiling, both at once, the face of someone who has been very tired for a very long time and has just, this minute, been told she can sit down." },
      { ifFlag: 'mercy-doctor', then: [
        { s: 'mercy', f: 'neutral', t: "You said doctor, on the roof. I said I'd take true. I've had a month with it and I've changed my mind. I'm taking more. You can object in writing." }
      ] },
      { ifFlag: 'mercy-three-am', then: [
        { s: 'mercy', f: 'neutral', t: "And the three a.m. offer stands. In this world, and the feather for the others. I've checked. It hums at three. I don't know who tuned it to that. I'm choosing to believe it was me." }
      ] },
      { s: 'mercy', f: 'neutral', t: "Look after yourself, little sister. Eat lunch. Sleep. Let someone hold the light for you sometimes. That's an order. I outrank you. I've decided." },
      { choose: [
        { t: "Yes, Doctor.", notes: 3, then: [
          { s: 'mercy', f: 'happy', t: "Good. Excellent. Finally, a compliant patient. I'm going to frame this moment." }
        ] },
        { t: "Only if you do too.", notes: 3, then: [
          { s: 'mercy', f: 'neutral', t: "...That's a negotiation. You're negotiating with your doctor." },
          { s: 'genji', f: 'happy', t: "She will. I have it in writing. She signed it on the back of a discharge form." }
        ] },
        { t: "I'll try.", notes: 1, then: [
          { s: 'mercy', f: 'neutral', t: "Try is a word patients use right before they don't. I'll take it anyway." }
        ] }
      ] },
      { n: "Her pager went off. It was a real pager now, a hospital one, with her name on it. The hospital had finally, quietly, given up and made her a badge. She looked at it, and looked at Solar, and ignored it for exactly eleven seconds, which for Dr. Angela Ziegler was a declaration of something, and then she hugged Solar hard, ugly scarf and all, and ran for the stairs two at a time, and the feather in Solar's fist hummed after her the whole way down." }
    ] }
  ],
  afterMax: [
    { title: 'night shift', place: 'Tatsumi Memorial Hospital', scene: [
      { place: 'Tatsumi Memorial Hospital · 3F Ward', time: 'Night', bg: 'hospital-hallway-night' },
      { music: 'night' },
      { n: "Solar couldn't sleep, so she went to the hospital at eleven at night with two cans of hot corn soup from the vending machine, and found Angela at the nurses' station on the third floor doing paperwork by the light of a desk lamp, in the ugly scarf, with her reading glasses pushed up into her hair and forgotten there." },
      { s: 'mercy', f: 'surprised', t: "It's eleven. You have school. I'm going to call your dormitory leader. She frightens me but I'll do it." },
      { choose: [
        { t: "(Hand her the corn soup.)", notes: 3, then: [
          { s: 'mercy', f: 'neutral', t: "...Corn soup. In a can. Hot. From a machine." },
          { s: 'mercy', f: 'happy', t: "This country is a miracle and nobody here appreciates it. Sit down. Don't tell anyone." }
        ] },
        { t: "I couldn't sleep.", notes: 2, then: [
          { s: 'mercy', f: 'neutral', t: "Then you've come to the right place. Nobody here sleeps. It's practically a support group." }
        ] }
      ] },
      { n: "They sat at the nurses' station until two, with the ward breathing around them, and Angela did her charts and Solar did nothing, and now and then a patient's monitor beeped and Angela looked up and listened and went back to her pen, and the night nurse brought them a blanket at one without being asked and put it over both their knees." },
      { s: 'mercy', f: 'neutral', t: "When I was a resident I used to think the night was the loneliest shift. And it is. But it's also the only time anyone tells you the truth. Everybody's honest at three in the morning. Even the patients. Even the doctors." },
      { s: 'mercy', f: 'neutral', t: "So. It's nearly three. Tell me something true." },
      { n: "Solar thought about it. She told her she was afraid, not of the green or the Shadows, but of remembering, and of not remembering, both, all the time, and that she didn't know which one was worse. Angela listened the whole way through without writing anything down, which was how Solar knew she was really listening." }
    ] },
    { title: 'the ginkgo', place: 'Tatsumi Memorial Hospital', scene: [
      { place: 'Tatsumi Memorial Hospital · Courtyard', time: 'Daytime', bg: 'hospital-outside' },
      { music: 'tender' },
      { n: "The ginkgo in the hospital courtyard had gone completely gold and then dropped all its leaves in one night, the way ginkgoes do, all at once, as if somebody had given an order, and the courtyard was ankle-deep in yellow fans, and Genji was sitting in the middle of them meditating, and Angela was sitting beside him not meditating, and they had clearly been arguing about it." },
      { s: 'genji', f: 'neutral', t: "You are thinking about your charts." },
      { s: 'mercy', f: 'serious', t: "I am thinking about nothing. I am a lake. A calm lake." },
      { s: 'genji', f: 'happy', t: "You are a lake that is thinking about bed six." },
      { choose: [
        { t: "(Sit down with them. Try it.)", notes: 3, then: [
          { n: "Solar sat down in the leaves on Angela's other side and closed her eyes. She lasted about forty seconds. Then she opened one eye, and found Angela had opened one eye too, and was looking at her, and they both burst out laughing at the same time, and Genji sighed with the deep, comfortable patience of a man who has been very happy for a while now and has decided not to mention it." }
        ] },
        { t: "She's always thinking about bed six.", notes: 2, then: [
          { s: 'mercy', f: 'blushing', t: "Bed six is recovering very nicely, thank you, BECAUSE I think about it." }
        ] }
      ] },
      { s: 'genji', f: 'neutral', t: "My master says the leaves fall all at once because the tree trusts the spring. It doesn't need to hold on to anything. It knows they'll come back." },
      { s: 'mercy', f: 'neutral', t: "Your master is a very wise robot who has never once had to fill out a discharge form." },
      { n: "But she leaned her shoulder against his when she said it, and stayed leaning, and the leaves came down on all three of them, the last few stragglers, gold, slow, unhurried, as if there were all the time in the world." }
    ] },
    { title: 'her own stitches', place: 'Tatsumi Memorial Hospital', scene: [
      { place: 'Tatsumi Memorial Hospital · Treatment Room', time: 'Evening', bg: 'hospital-room' },
      { music: 'tender' },
      { n: "Genji had texted her at a quarter to seven, which he had never once done, three words and a room number. *She is stitching.* Then, a minute later, *her own hand.* Then, *in the mirror.*" },
      { n: "Treatment room two. Angela was standing at the sink in front of the little steel mirror with her left hand flat on the counter and a curved needle in her right, and there was a long clean cut across the heel of her left palm from a vial that had broken in her grip, and she had very clearly been about to do exactly what Genji had said she always did. Genji was in the corner, sitting on the examination bed, not interfering, with the air of a man who had sent for reinforcements and was now innocent of everything." },
      { s: 'mercy', f: 'serious', t: "I'm fine. It's three stitches. I've done this in a field with a torch in my teeth. He shouldn't have called you." },
      { s: 'genji', f: 'neutral', t: "I did not call. I texted. There is a difference. The monks were very clear about it." },
      { ifFlag: 'mercy-lessons', then: [
        { n: "Solar didn't say anything. She washed her hands at the other sink, the way she'd been taught on Thursdays, all the way to the elbow, and dried them, and held one out for the needle." },
        { s: 'mercy', f: 'neutral', t: "...You've been coming on Thursdays since July. I suppose I can't pretend you don't know how." }
      ], else: [
        { n: "Solar didn't say anything. She'd sat in that dorm lounge in July and put four knots in an orange with hands that knew how, and she'd never done it since, and her hands, washing at the other sink, all the way to the elbow, knew that too." },
        { s: 'mercy', f: 'neutral', t: "...Four knots in an orange. In July. You think I've forgotten. I haven't." }
      ] },
      { choose: [
        { t: "(Take the needle. \"Hold still.\")", notes: 3, then: [
          { n: "Angela looked at her for a long moment over the needle, the look she gave charts, and then she turned it round and put it in Solar's palm handle first, and sat down on the stool, and laid her hand flat on the steel tray, palm up, and held still. Genji got up off the bed without a word and took the penlight from the drawer and held it over them, steady, in the place where Solar had once held it for him." }
        ] },
        { t: "Talk me through it. You're the doctor.", notes: 2, then: [
          { s: 'mercy', f: 'neutral', t: "...Yes. All right. I'll talk. You do it. That's a fair division of labor." },
          { n: "She talked her through it, every step, in a low clinical voice, though Solar's hands were a half-second ahead of every word, and they both knew it, and Angela kept talking anyway, because it was easier than holding still in silence, and Genji held the light." }
        ] }
      ] },
      { n: "Three stitches. Three small black knots across the heel of a surgeon's hand, laid down flat to one side, evenly spaced. Angela looked at them for a long time under the penlight." },
      { s: 'mercy', f: 'sad', t: "I've never let anyone do that. Not once. In all those years." },
      { s: 'genji', f: 'happy', t: "I know. I told her. I said I'd let you, and I'd hold still. I did not expect to be the one holding the light when you finally did." },
      { s: 'mercy', f: 'blushing', t: "...Both of you. Out. No. Stay. Both of you stay a minute. I'm going to sit here and look at my hand." },
      { n: "So they stayed, the three of them, in the little room with the broken overhead light, and Angela sat with her stitched hand open on her knee like something she'd been given, and didn't say anything else, and didn't need to." }
    ] },
    { title: 'handover', place: 'Tatsumi Memorial Hospital · 3F Ward', scene: [
      { place: 'Tatsumi Memorial Hospital · 3F Ward', time: 'Evening', bg: 'hospital-hallway-night' },
      { music: 'night' },
      { n: "Angela was at the nurses' station with a fat ring binder open in front of her, writing, and she'd been writing for a while, because the binder was half full, and the label on its spine said HANDOVER · 3F in her handwriting and then the same thing again underneath in German, as though she didn't trust either language to manage alone." },
      { ifAfter: '12/22', then: [
        { n: "Elizabeth had come up to the roof in December with her book and told her, very kindly, the date the doors would open. Angela had written it on the inside cover of the binder and drawn a box round it and had not looked at it since, except all the time." }
      ] },
      { s: 'mercy', f: 'neutral', t: "When I go home, somebody has to turn them every two hours. Somebody has to read to bed eight, and do the voices, badly. I'm writing all of it down. Which window, which pillow, who likes the radio on. The nurses say I'm being dramatic." },
      { s: 'mercy', f: 'neutral', t: "The nurses are going to need this." },
      { choose: [
        { t: "(Help. Tell her what you've noticed on the ward.)", notes: 3, then: [
          { n: "Solar pulled the other chair round and told her. That bed four's window had to be open a crack or her breathing went short. That the old man at bed five turned his head toward the door at two, every day, a little, when his wife was due. That the girl with the clips held the rabbit better if it was the left hand." },
          { n: "Angela wrote every one down, in her neat, typed-looking hand, and after each one, in brackets, she wrote *observed by S.*, and Solar watched her do it and didn't say anything, and her face went warm anyway." }
        ] },
        { t: "Who's going to look after you, over there?", notes: 3, then: [
          { s: 'mercy', f: 'neutral', t: "Genji. Ana, if she's speaking to me. A great many people who will be very surprised that I now eat lunch." },
          { s: 'mercy', f: 'happy', t: "And me. That's the new part. I'm putting myself on the handover. Patient: Ziegler, A. Sleeps. Eats. Does not do it alone. See attached." }
        ] },
        { t: "You could leave it unfinished. So you have to come back.", notes: 2, then: [
          { s: 'mercy', f: 'sad', t: "I've thought about that. Every night. Leaving one page blank so I'd have an excuse." },
          { s: 'mercy', f: 'neutral', t: "But that's what an inherited shift is, isn't it. Somebody leaving a page blank. I won't do that to these nurses. I'll come back some other way. In a dream, or whatever this is." }
        ] }
      ] },
      { n: "On the last page, under EMERGENCY CONTACT, Angela had written a name. Solar saw it upside down." },
      { ifFlag: 'mercy-sister', then: [
        { n: "It was hers. And next to it, under RELATIONSHIP, in the same neat hand, where it could have said anything at all: *little sister.*" }
      ], else: [
        { ifFlag: 'mercy-three-am', then: [
          { n: "It was hers. And next to it, under WHEN TO CALL, where it could have said anything at all: *three in the morning. Any night.*" }
        ], else: [
          { n: "It was hers. Next to it, under RELATIONSHIP, Angela had started a word, and crossed it out, and started another, and crossed that out too, and left the box blank, as if she'd decided it was the kind of thing you didn't write down. You just knew." }
        ] }
      ] },
      { s: 'mercy', f: 'neutral', t: "Don't look at that page. It's not finished. Go home, Liebling. It's late. That's an order. I outrank you. I've decided." }
    ] }
  ]
});
