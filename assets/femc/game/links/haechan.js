/* Haechan · ∞ The Universe. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Searcher, canon romance (Runners + strangers). One boy carrying two lives, the way Solar carries three: the flat, dry
   Recruitment Chair who hears rooms (Runners) and the loud, warm, reckless dog of the Lee house who goes quiet when he's
   afraid (strangers). Both registers surface; neither world's plot moves. Every rank lets Solar lean one way or the other
   (tally haechan.R / haechan.S, plot doc §9, §12). His crossing (11/4, the laundry room, "...There you are.") is a story
   event; rank 1 is the first night after it. He awakens on 12/5 (story); ranks 6+ come after.
   Fragments awarded here: strangers-discman (rank 3, plot doc §8 S7), runners-rooftop (rank 7, ★ new card, §8 R9).
   Romance turn at rank 8 (route romance/friend), before Christmas. Arcana Universe is v1's; searcher arcana are an open
   question for Kat (plot doc §16.6). afterMax and christmas use v1's field shapes; the revamp engine doesn't play them yet.
   Housing (Kat's ruling 2026-10-20): he lives in the dorm, in a room he barely uses, and keeps his distance from the lounge
   at first; the laundry room at three is where he lets himself be found. He already knows Hanni and Hyein and Mark (Runners;
   Mark is the childhood best friend, the friendship is grief with muscle memory) and Yunjin and Jungwon (strangers; he and
   Jungwon are never friends). He doesn't know the Hoax crew. Arrivals before his (Hanni/Hyein 9/12, Yunjin 10/10, Jungwon
   10/14) are fixed story dates; Mark's crossing is optional, so Mark lines read ifEvent 'a4-mark'.
   Settling into one world (Kat's idea, 2026-10-20). He keeps both lives' memories throughout; what changes is his register.
     - before 12/12: both registers, swapping (flat Runners dry / loud strangers warm).
     - 12/12 crossroad (story-act5 'a5-crossroad-3' sets xroad3-R / xroad3-S): ranks 7-8 and some hangouts tilt that way.
     - rank 9 (after 1/9, post-solstice) is the sure scene: route-R → Runners, route-S → strangers, route-true → both at
       once, any other route (H / stay) → he stays both and lets her go. It sets this link's own flags haechan-sure-R /
       haechan-sure-S / haechan-sure-both (none on H/stay), which rank 10 reads. christmas (12/24, before rank 9) reads route-R /
       route-S directly. Other files may read the haechan-sure-* flags. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'haechan', name: 'Haechan', short: 'Haechan', arcana: 'Universe', numeral: '∞', from: 'Runners · strangers',
  kind: 'searcher', world: 'RS', romance: 'canon',
  starts: '11/4', gate: { R: 5, S: 4 },
  home: { area: 'dorm', spot: 'Laundry Room', slot: 'evening', days: [0, 1, 2, 3, 4, 5, 6],
          hint: 'Late, any night. The laundry room, usually on top of the dryer, at an hour nobody does laundry.' },
  approach: "There's someone in the dorm's laundry room at an hour nobody does laundry, sitting on top of the dryer with headphones around his neck, and he looks up a second before you reach the door, like he heard you thinking about it.",
  cast: {},
  invite: {
    ask: ["you up", "laundry room. i'm not asking", "roof. bring a coat. you won't", "can't sleep. you can't either. i can tell from here", "dryer's warm. come sit", "agasshi. you awake", "found the pinkest thing in the machine. it's wrong. come drink it anyway", "come here. i want you to hear something. it's a room"],
    ok: ["k. door's open", "knew you would", "mm. hurry up"],
    no: ["ok. lock your door", "fine. i'll talk to the dryer", "ok. sleep. actually sleep this time"]
  },
  hangouts: [
    [
      { n: "Half past two, and the laundry room light was doing its long sick flicker, the one that made the white walls look like the inside of a tooth. Haechan was sitting cross-legged on the folding table with a basket of somebody else's towels, squaring them one after another into identical bricks, fast and exact, like the corners were going to be inspected by someone with a ruler and no mercy." },
      { s: 'haechan', f: 'neutral', t: "Junpei's. Don't tell him. He'll start leaving them down here on purpose." },
      { choose: [
        { t: "(Fold one badly. On purpose.)", notes: 3, tally: { 'haechan.R': 1 }, then: [
          { n: "She folded a towel into something that was technically a shape and set it on top of his stack. He looked at it for a long second with nothing at all on his face." },
          { s: 'haechan', f: 'neutral', t: "Wow. You did that to hurt me." },
          { n: "He didn't refold it. He moved it to the top of the pile, crooked, and left it there like it had won something." }
        ] },
        { t: "Who taught you to fold like that?", notes: 2, tally: { 'haechan.S': 1 }, then: [
          { s: 'haechan', f: 'happy', t: "A housekeeper who hits rugs when she's upset. You'd know her. You'd hate that you know her." },
          { n: "He said it loud and easy, the way you'd tell a joke at a table full of old men, and then he heard himself, and the next towel came out flatter than the others." }
        ] },
        { t: "You could just go to sleep.", notes: 1, then: [
          { s: 'haechan', f: 'neutral', t: "Could I?" },
          { n: "He asked it like a real question, and kept folding." }
        ] }
      ] },
      { n: "When the basket was empty he started on hers. She let him. It was faster than arguing and he was better at it, and there was something about watching a boy take that much care with her socks at half past two in the morning that made the room stop being a laundry room for a while." }
    ],
    [
      { n: "The vending machine by the dorm's back stairs had a bottom row that jammed, and Haechan had been standing in front of it for long enough that the hum of it had become part of him. When she came down he fed it another coin, kicked it once at the base, exactly where it apparently liked to be kicked, and a can dropped." },
      { n: "Pink. A peach soda with a cartoon fruit on it that was trying very hard. He looked at it with open contempt and held it out to her anyway." },
      { s: 'haechan', f: 'serious', t: "It's wrong. It's the closest thing this whole city has. I checked every machine between here and the station." },
      { choose: [
        { t: "(Drink it, and don't ask what it's the closest to.)", notes: 3, tally: { 'haechan.R': 1 }, then: [
          { n: "She drank it. It was too sweet and not fizzy enough, and somewhere at the back of her tongue a different can was waiting to be compared to it, colder, sharper, with a pull tab her thumb already knew the shape of." },
          { s: 'haechan', f: 'neutral', t: "...Yeah. That face. That's the one you make." }
        ] },
        { t: "You checked every machine?", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "Thirty-one. Two of them sell soup. In a can. Hot." },
          { s: 'haechan', f: 'serious', t: "This country is incredible and I'm not going to elaborate." }
        ] },
        { t: "I could've bought my own.", notes: 1, then: [
          { s: 'haechan', f: 'neutral', t: "You could've." },
          { n: "He didn't explain why that wasn't the point. He opened his own can, coffee, black, burnt-smelling even from here, and leaned against the machine like it was a wall he paid rent on." }
        ] }
      ] },
      { n: "Later, going up, she passed the machine again. The little light under the peach can had gone red. Sold out. He'd bought the row." }
    ],
    [
      { n: "He was humming when she came in. Not a song she knew, or a song she knew too well, a bright old ballad with a big swooping chorus, the kind of thing taxi drivers sang along to with their whole chests, and he was doing it well, on purpose, loudly, to the dryer." },
      { n: "Then he saw her in the doorway and stopped halfway through a note, and his face went flat as a closed lid." },
      { s: 'haechan', f: 'neutral', t: "That's not mine." },
      { s: 'solar', f: 'neutral', t: "You were singing it." },
      { s: 'haechan', f: 'serious', t: "Somebody sings it in a car. Every Tuesday. Badly in the verses and perfectly in the chorus. I just ride with them." },
      { choose: [
        { t: "Sing the rest.", notes: 3, tally: { 'haechan.S': 1 }, then: [
          { n: "He looked at her like she'd asked him to take off a cast. Then he sang the rest, to the folding table, the whole chorus, swooping, shameless, and the dryer thumped along under it like a drum somebody had found in a skip." },
          { n: "Her hands knew where to clap. She didn't let them." }
        ] },
        { t: "You've got two voices. Did you know that?", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "Yeah." },
          { s: 'haechan', f: 'neutral', t: "One of them's loud. The other one's me. Don't ask which is which. I don't always know." }
        ] },
        { t: "(Turn the light off so he can't see your face.)", notes: 1, then: [
          { n: "She switched the light off. In the dark he laughed, flat, a sound with an edge scraped down it, and didn't sing again, and didn't leave either." }
        ] }
      ] }
    ],
    [
      { n: "Some nights there was nothing to say and that was fine too. The light flickered. A pipe somewhere in the walls knocked twice and gave up. She sat on the cold dryer and he sat on the warm one, and every so often he pulled one side of his headphones away from his ear and tipped his head, listening to the room the way other people listened to the radio." },
      { s: 'haechan', f: 'neutral', t: "Your lounge fridge is flat. Half a step under. It's been driving me insane for a week." },
      { choose: [
        { t: "Talk to me about something boring. Fridges. Anything.", notes: 3, tally: { 'haechan.R': 1 }, then: [
          { s: 'haechan', f: 'serious', t: "Okay. Compressors." },
          { n: "He talked about compressors for fifteen minutes in that flat unhurried voice, and about the ceiling fan in the lounge, and about why Mitsuru's heels sounded different on the stairs than Yukari's, and somewhere around the heels she laughed, and something in her chest that had been knotted all day came loose like a bad stitch." }
        ] },
        { t: "How do you hear that?", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "Same way you count exits. It doesn't turn off." },
          { n: "She hadn't told him she counted exits. She'd been doing it since she walked in. Four. Five, if you counted the little window over the sink, and she did." }
        ] },
        { t: "(Close your eyes.)", notes: 2, then: [
          { n: "She closed her eyes. He didn't say anything. She could hear him not saying anything, which was different from silence, and a little warmer." }
        ] }
      ] },
      { n: "When the dryer buzzed she was almost asleep sitting up. He didn't wake her. He took her laundry out and folded it piece by piece and set the pile beside her where she'd find it, corners squared, the sleeves tucked in like hands." }
    ],
    [
      { place: 'Iwatodai Dorm · Kitchen', time: 'Late Night' },
      { n: "One in the morning, and the kitchen smelled of sesame oil and the burnt-sugar edge of something that had nearly gone too far. He was at the stove in a T-shirt with a pan going and an egg in one hand, and the other hand already reaching for a second bowl before she'd come all the way through the door." },
      { s: 'haechan', f: 'neutral', t: "Sit. You didn't eat. Don't argue, I watched you not eat." },
      { n: "Footsteps on the stairs. Bare feet, heavy, even, a man coming down for water the way he came down for water every night at one, and Akihiko walked into the kitchen in track pants with his hair flat on one side and stopped in the doorway, and looked at the stove, and at the two bowls, and at Haechan." },
      { s: 'akihiko', f: 'neutral', t: "...Hey." },
      { s: 'haechan', f: 'neutral', t: "Protein." },
      { s: 'akihiko', f: 'surprised', t: "What?" },
      { s: 'haechan', f: 'neutral', t: "That's you. I don't do names. Glass is on the left." },
      { ifFlag: 'awake-haechan', then: [
        { n: "Akihiko got the glass from the left. He filled it at the sink and drank it standing up, looking at Haechan over the rim the way he looked at a sparring partner across a ring, and Haechan turned the egg without looking back at him at all." },
        { s: 'akihiko', f: 'neutral', t: "You hit that thing in the tower like you've been doing it your whole life." },
        { s: 'haechan', f: 'neutral', t: "Couple of lives." },
        { s: 'akihiko', f: 'happy', t: "Ha. Yeah. Spar me sometime." },
        { s: 'haechan', f: 'neutral', t: "No." }
      ], else: [
        { n: "Akihiko got the glass from the left. He filled it at the sink and drank it standing up, looking at Haechan over the rim the way he looked at a new member of the boxing club, working out where his weight went, and Haechan turned the egg without looking back at him at all." },
        { s: 'akihiko', f: 'neutral', t: "You're up late." },
        { s: 'haechan', f: 'neutral', t: "You're up early. You run at five. Who runs at five. Sit down, you're making the room nervous." }
      ] },
      { choose: [
        { t: "(Pull out the third chair for Akihiko.)", notes: 3, then: [
          { n: "She pulled out the third chair with her foot. Akihiko looked at it, and at her, and sat, and Haechan looked at the chair and at her for one flat second and then cracked a third egg into the pan without a word, because apparently that was how this was going to go." },
          { n: "They ate at one in the morning at the kitchen table, the three of them, not talking much. Akihiko said it was good. Haechan said he knew. Akihiko put his egg in Solar's bowl without looking, the way he did at Hagakure, and Haechan watched him do it and didn't say anything about it, and didn't say anything about it so loudly that Akihiko went red to the ears." }
        ] },
        { t: "He's making me eat. Back me up.", notes: 2, then: [
          { s: 'akihiko', f: 'happy', t: "Eat. He's right. You skipped lunch, I saw." },
          { s: 'haechan', f: 'neutral', t: "...Great. There's two of us." },
          { n: "He said it like it was the worst news he'd had all week. He gave her the bigger half of the egg anyway." }
        ] },
        { t: "(Say nothing. Eat.)", notes: 2, then: [
          { n: "She ate. Akihiko finished his water and rinsed the glass and put it upside down on the rack, which nobody did, and said goodnight to her, and then, after a second, to Haechan too, and went up the stairs two at a time." },
          { s: 'haechan', f: 'neutral', t: "He's going to run past your door at five. On purpose. You know that." }
        ] }
      ] }
    ],
    [
      { place: 'Iwatodai Dorm · Hallway', time: 'Late Night' },
      { n: "Half past two, and the front door opened very quietly, the way a door opens when the person opening it believes, wrongly, that it's being quiet. Yunjin came in from the cold in her puffer with her hair wind-wrecked and her sneakers in her hand, and stopped in the hall, and looked up the stairs at the two of them sitting on the third step from the bottom with a bag of convenience-store chips between them." },
      { s: 'yunjin', f: 'happy', t: "Oh, good. The problem's awake." },
      { s: 'haechan', f: 'neutral', t: "Jin." },
      { s: 'yunjin', f: 'neutral', t: "Don't *Jin* me. I've been at the harbor. I couldn't sleep. The tide went out and I couldn't sleep, and I thought, who else in this building can't sleep at low tide, and then I thought, oh, right, she doesn't know she can't." },
      { n: "She sat down two steps below them without being asked and took a handful of chips without being offered, and looked at Haechan, and then at Solar, and then said something to Solar, fast and low, in English, with her eyebrows doing most of the work." },
      { s: 'haechan', f: 'neutral', t: "I heard that." },
      { s: 'yunjin', f: 'surprised', t: "You don't speak English." },
      { s: 'haechan', f: 'neutral', t: "In one of them I don't. In the other one I sit through three lectures a week in it. Don't ask me which one of me is translating. I don't know either." },
      { s: 'yunjin', f: 'flustered', t: "...That's so unfair. That was a good insult. That was a really specific insult." },
      { choose: [
        { t: "What did she say?", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "That I've got cheekbones you could open mail with." },
          { s: 'yunjin', f: 'flustered', t: "That's not an insult. That's a fact. The insult was the second part." },
          { s: 'haechan', f: 'neutral', t: "I know. I'm not repeating the second part. Your mother might hear it." }
        ] },
        { t: "(Hand Yunjin the whole bag.)", notes: 3, then: [
          { n: "She handed Yunjin the bag. Yunjin took it the way she took everything Solar gave her, without a thank-you, as if it had always been half hers anyway, and leaned back against Solar's shins, and stayed there." },
          { s: 'yunjin', f: 'neutral', t: "...See, this is what I mean. Look at her. She doesn't even know she does that." }
        ] },
        { t: "You two know each other well.", notes: 3, then: [
          { s: 'yunjin', f: 'neutral', t: "Babe, I've known this man since he was carrying my shopping bags with the wrong hand so he could keep his right one free. I know him like I know a parking ticket." },
          { s: 'haechan', f: 'neutral', t: "Fondly." },
          { s: 'yunjin', f: 'neutral', t: "Not fondly. Thoroughly." }
        ] }
      ] },
      { ifFlag: 'year-goes-on', then: [
        { n: "When the chips were gone Yunjin stood up and stretched and looked down at the two of them on the step, and for a second the joke went out of her face, the way it did now, sometimes, since the station." },
        { s: 'yunjin', f: 'neutral', t: "Don't keep her up. She's got a lot of mornings left and I want her awake for all of them." }
      ], else: [
        { n: "When the chips were gone Yunjin stood up and stretched and pointed at Haechan with the empty bag." },
        { s: 'yunjin', f: 'neutral', t: "Don't keep her up. And don't let her sit on the cold step, she gets sick and then she won't admit it and then I have to make soup." }
      ] },
      { n: "She went up. Haechan watched her go with no expression at all, and then took his hoodie off and folded it once and put it on the step under Solar without a word, because the step was cold." }
    ],
    [
      { place: 'Iwatodai Dorm · Lounge', time: 'Late Night' },
      { n: "Two in the morning, and the lounge lamp was still on because nobody had been awake enough to turn it off. Hanni and Hyein were asleep on the sofa, Hanni sitting up with her head tipped back and her mouth open, Hyein curled into her side with a sketchbook sliding off her knee and a pencil still in her fist, both of them under one blanket that wasn't big enough." },
      { n: "Haechan stood in the doorway with his hands in his hoodie pocket and looked at them for a while. Then he went to the hall cupboard and came back with the big blanket off the top shelf, the one Mitsuru kept for guests, and shook it out, and laid it over both of them, carefully, from the feet up, the way you'd cover a piano." },
      { n: "Hanni opened one eye." },
      { s: 'hanni', f: 'neutral', t: "...Haechan." },
      { s: 'haechan', f: 'neutral', t: "Go back to sleep." },
      { s: 'hanni', f: 'serious', t: "You said it wasn't a game." },
      { n: "She said it very quietly, half asleep, like the end of a conversation she'd been having with him somewhere else, in a hallway, in a costume, a long time ago. Solar didn't know what it meant. She could see from the way he went still that he did." },
      { s: 'haechan', f: 'neutral', t: "It isn't." },
      { s: 'hanni', f: 'neutral', t: "Good." },
      { n: "She closed her eye. She pulled the corner of the big blanket up under Hyein's chin without waking her, and was asleep again before her hand had finished doing it." },
      { choose: [
        { t: "What wasn't a game?", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "Something I told her once. Somewhere you'd have been, if you'd been there." },
          { s: 'haechan', f: 'serious', t: "She's the only one of them who'd ask me twice. I like that about her. Don't tell her." }
        ] },
        { t: "(Take the pencil out of Hyein's hand before it marks the sofa.)", notes: 3, then: [
          { n: "She eased the pencil out of Hyein's fist. Hyein frowned in her sleep and said something about a hem. Haechan picked up the sketchbook before it hit the floor and closed it without looking at the page, which she noticed, and which she decided was the most polite thing she'd ever seen a boy do." }
        ] },
        { t: "(Turn off the lamp.)", notes: 2, then: [
          { n: "She turned off the lamp. In the dark the two of them stood in the doorway listening to the girls breathe, and he said, very low, that they breathed in the same key, both of them, a little flat, and that he'd tell them so one day when they were awake enough to hit him for it." }
        ] }
      ] }
    ],
    [
      { place: 'Iwatodai Dorm · Front', time: 'Late Night' },
      { ifEvent: 'a4-mark', then: [
        { n: "He was on the front steps at midnight with his hood up and his elbows on his knees, looking down the path at the gate, at nothing, at the place under the streetlight where somebody had stood and then stopped standing." },
        { s: 'haechan', f: 'neutral', t: "Mark came by." },
        { s: 'haechan', f: 'neutral', t: "Stood at the bottom of the path for ten minutes. Didn't come up. Went back to the guesthouse. He's good at that. We both are. We've had a lot of practice." },
        { n: "He said it flat, every word set down like a coin on a counter, and didn't look at her. She sat down on the step beside him. The concrete was cold through her pajamas." },
        { choose: [
          { t: "You two were friends.", notes: 2, then: [
            { s: 'haechan', f: 'neutral', t: "Since we were kids. Don't." },
            { n: "He didn't say it unkindly. He said it like a man putting his hand over a cup so nobody could pour anything else into it." }
          ] },
          { t: "Do you want me to go and get him?", notes: 2, then: [
            { s: 'haechan', f: 'neutral', t: "No." },
            { s: 'haechan', f: 'neutral', t: "...Ask me again in a year. Ask me somewhere I can walk out of." }
          ] },
          { t: "(Sit with him. Watch the gate too.)", notes: 3, then: [
            { n: "She watched the gate with him. Nobody came back to it. After a while he took a stick of cinnamon gum out of his pocket and broke it in half without looking and gave her the bigger half, and they sat there chewing in the cold like two people waiting for a bus that had stopped running years ago." }
          ] }
        ] }
      ], else: [
        { n: "He was on the front steps at midnight with his hood up and Koromaru sitting on his feet, the two of them looking down the path at the gate with the same expression, patient and unimpressed, like a pair of night guards who'd seen everything twice." },
        { s: 'haechan', f: 'neutral', t: "Boss won't let me go in. I tried. He leaned." },
        { n: "Koromaru, hearing himself discussed, leaned harder. Haechan put one hand on the dog's head without looking, the way you'd rest your hand on a railing, and left it there." },
        { choose: [
          { t: "Boss?", notes: 2, then: [
            { s: 'haechan', f: 'neutral', t: "He runs the building. Everybody else just lives here. You can tell by who eats first." }
          ] },
          { t: "(Sit down on his other side.)", notes: 3, then: [
            { n: "She sat down on his other side. Koromaru looked at her, and at Haechan, and then, very deliberately, moved so his back half was on her feet and his front half was on his, and sighed, and closed his eyes, like a dog who had arranged things correctly at last." },
            { s: 'haechan', f: 'neutral', t: "...Well. Now none of us can go in." }
          ] }
        ] }
      ] }
    ]
  ],
  ranks: [
    { after: '11/5', title: '1: the dryer', place: 'Iwatodai Dorm · Laundry Room', time: 'Late Night', music: 'night', scene: [
      { n: "The laundry room door was open. Solar stopped outside it with one hand on the frame, listening to the empty dryer turn. She knew who was in there before she looked, which was different from remembering him and still, somehow, enough to bring her downstairs." },
      { n: "It was a quarter to three, and she was back, because her legs had brought her here and she'd stopped arguing with her legs sometime around April." },
      { n: "He was on the dryer again. A black hoodie, sleeves shoved past the elbow, choppy dark hair in his eyes like he'd decided nobody was worth the effort of moving it, a pair of heavy black headphones around his neck with the cord coiled in his lap. The dryer was running with nothing in it. He'd decided, apparently, that it was the only warm thing in the building after midnight." },
      { n: "He lived here now, technically. Mitsuru had given him the empty room at the end of the top floor, the one with the radiator that knocked, and as far as Solar could tell he'd put his bag on the bed and not touched either of them since. He didn't come into the lounge. He ate standing up in the kitchen at hours when nobody else was in it. Hyein had already shouted his name across the breakfast table once and been stopped by Hanni's hand, and since then she'd taken to going very quiet and very pink whenever he walked past, which for Hyein was its own kind of shouting. Yunjin had met him on the stairs, stopped dead, said something under her breath in English that made Hanni snort, and kept going, and looked back twice. He'd nodded at all of them the way you nod at people across a party you've come to and have no intention of staying at." },
      { n: "He didn't say *there you are* this time. He didn't say anything. He looked at her for exactly as long as it took her to stop in the doorway, and then he looked at the other dryer, the cold one, and back at her, which was apparently an invitation." },
      { register: 'haechan' },
      { choose: [
        { t: "(Sit on the cold dryer.)", notes: 3, then: [
          { n: "She sat. The cold came straight through her pajamas and she didn't flinch, out of pride, and he watched her not flinch, and the corner of his mouth moved a quarter of an inch, like a smile that hadn't been given permission." }
        ] },
        { t: "You're still here.", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "Where else would I be." },
          { n: "It wasn't a question. Nothing about the way he said it left room for one." }
        ] },
        { t: "I don't know you. I'm sorry. I don't.", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "I know." },
          { n: "He said it so flat that it was almost nothing, and his jaw moved once, a small sideways shift, like a man biting down on the inside of his cheek where nobody could see it." },
          { s: 'haechan', f: 'neutral', t: "You don't have to keep saying it. I heard you the first time." }
        ] }
      ] },
      { n: "He reached into the front pocket of the hoodie and took out a can and set it on the dryer between them without looking at her, the way you'd put down a coffee for someone at a desk you'd sat across from for years." },
      { n: "It was pink. Not the peach soda from the machine upstairs. Something else, black and pink, a sharp ugly logo like claw marks, a can she had never seen in any shop in Iwatodai, and her hand was on it before she'd decided to reach, thumb settling under the tab like it had a groove there." },
      { s: 'haechan', f: 'neutral', t: "Only one. It was in my pocket. I don't know if you can buy them here. I don't think you can buy them anywhere here." },
      { s: 'haechan', f: 'serious', t: "So don't waste it." },
      { choose: [
        { t: "(Open it.)", notes: 3, tally: { 'haechan.R': 1 }, then: [
          { n: "The tab cracked. The smell came up, candy and something chemical and bright, and it went into her so fast she had to put a hand flat on the dryer. A ledge. Concrete under her legs. Wind. A boy's profile against a lot of sky, and smoke, and a voice she couldn't hear the words of, only the shape, flat and dry and pleased with itself." },
          { n: "It was gone before she could hold it. She drank, because she had to do something with her mouth, and it tasted exactly the way she'd known it would." },
          { s: 'haechan', f: 'neutral', t: "...Yeah. That face." }
        ] },
        { t: "(Don't open it. Hold it.)", notes: 2, then: [
          { n: "She didn't open it. She held it against her knee and let the cold go into her hand, and he looked at the can and then at the wall, and she had the strangest certainty that he was relieved, like he'd been afraid of what would happen if she drank it in front of him." },
          { s: 'haechan', f: 'neutral', t: "Fair. Save it for a worse night." }
        ] },
        { t: "How do you know I like these?", notes: 2, then: [
          { n: "He didn't answer. He didn't even pretend he was going to. He just reached over and turned the can a little on the dryer so the tab faced her, and sat back, and let the question go on sitting there between them until it stopped being one." }
        ] }
      ] },
      { s: 'haechan', f: 'neutral', t: "Here's the deal." },
      { s: 'haechan', f: 'neutral', t: "I'm not going to ask you to remember anything. Not a name. Not a place. Not me. Everybody else who came through that door is going to look at you like you owe them something, and you don't." },
      { s: 'haechan', f: 'neutral', t: "Your girls already know me. The loud one nearly said so over breakfast. The other one's going to make her wait until you ask. Yunjin's going to say it to my face, probably at dinner, probably with her mouth full." },
      { s: 'haechan', f: 'serious', t: "Let them. I'm not going to." },
      { s: 'haechan', f: 'serious', t: "I'm just going to be in here. Most nights. You can come down or not." },
      { choose: [
        { t: "Why?", notes: 3, then: [
          { s: 'haechan', f: 'neutral', t: "Because you can't sleep." },
          { s: 'haechan', f: 'neutral', t: "You never can. Not there, not here. I'd rather you couldn't sleep somewhere I can see you." },
          { n: "He said it to the dryer door, to the round window and the empty drum turning behind it. It wasn't a romantic line. It was delivered like a weather report. That made it worse." }
        ] },
        { t: "What do I call you?", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "Haechan." },
          { s: 'haechan', f: 'neutral', t: "That's what everyone calls me. You can pick something else if you want." },
          { n: "There was something under the *if you want* she couldn't see the bottom of, like a step in the dark that turned out to be one more step down than you'd counted." }
        ] }
      ] },
      { n: "They sat there until the dryer finished its empty cycle and buzzed, loud enough to make her jump, and he didn't laugh at her for jumping. He slid down, set it going again, and got back up." },
      { s: 'haechan', f: 'neutral', t: "Go to bed, princess." },
      { n: "Nothing happened in her. She waited for it, the way you wait for a sneeze that doesn't come, and nothing did, and he saw nothing happen, and he filed it somewhere behind his eyes, and his face didn't change." },
      { s: 'haechan', f: 'neutral', t: "...Agasshi. Go to bed." },
      { n: "Her right hand moved. Her thumb went to the base of her ring finger and turned something that wasn't there, a slow quarter-turn, the kind of thing you do when you're counting and don't want anyone to see you count. She looked down at her own hand like it belonged to someone at the next table." },
      { n: "He saw that too. He looked at it for one long second, and then away, at the flickering tube, and pulled his headphones up over his ears with both hands like he was closing a door on something very bright." },
      { n: "She went up. She didn't sleep. She lay with the can on the desk, whatever was left of it, and listened to the building, and for the first time since she'd woken up on a checkerboard floor in the dark, she had the feeling that somebody downstairs was listening to it too." }
    ] },

    { after: '11/11', title: '2: two names', place: 'Iwatodai Dorm · Rooftop', time: 'Night', music: 'night', scene: [
      { n: "November had gotten into everything. The roof was all wind, the kind that came in off the bay with salt on it and found the gap between her collar and her neck no matter which way she turned, and the city below was the color of an old bruise, orange where the streetlights were and black where they weren't." },
      { n: "He was at the railing with his hood up and his forearms on the rail, looking out at Port Island like it was a song he'd heard once and was trying to get back. He didn't turn around when the door complained behind her. He never did. She was starting to understand he knew her footsteps the way she knew the sound of the dorm's front door." },
      { s: 'haechan', f: 'neutral', t: "You're going to tell me you're not cold." },
      { s: 'solar', f: 'neutral', t: "I'm not cold." },
      { s: 'haechan', f: 'neutral', t: "Mm. Proud of you for that one." },
      { n: "She came and stood beside him. Not close. There was an inch of cold air between their sleeves on the railing that felt less like an accident than a decision, and she wasn't sure whose." },
      { s: 'haechan', f: 'serious', t: "Fuuka asked me where I'm from. In the lounge. In front of everybody." },
      { s: 'haechan', f: 'neutral', t: "I told her two places. She wrote it down like it was one." },
      { n: "Below them, through the lounge's lit window, she could see the top of Junpei's head and the back of the sofa and Koromaru's tail going like a metronome, and someone, probably Yukari, laughing at the television. The dorm had gotten louder since September. It had more people in it, and more of them were from somewhere else, and none of them knew what to do with their hands at dinner." },
      { s: 'haechan', f: 'neutral', t: "Your lounge is very loud. I like it. I'm not going to go in." },
      { s: 'solar', f: 'neutral', t: "You could. Nobody would mind." },
      { s: 'haechan', f: 'neutral', t: "Junpei would ask me what my deal is. Hanni would look at me like a list she's checking twice. I don't have a deal. I have two." },
      { choose: [
        { t: "Two?", notes: 3, then: [
          { s: 'haechan', f: 'neutral', t: "Two." },
          { n: "He held up two fingers, then put one down, then looked at the one that was left like it had disappointed him." },
          { s: 'haechan', f: 'serious', t: "You've got three. I've got two. Same deal, smaller. I wake up in one and I'm in the other one by lunch and nobody ever notices, because in both of them nobody's looking that hard at me." }
        ] },
        { t: "Which one are you from tonight?", notes: 3, then: [
          { s: 'haechan', f: 'surprised', t: "..." },
          { n: "He turned his head and actually looked at her, and for a second something in his face went loose, like a fist uncurling under a table." },
          { s: 'haechan', f: 'neutral', t: "Nobody's ever asked it like that." },
          { s: 'haechan', f: 'neutral', t: "Both. Neither. Ask me again later. It changes." }
        ] },
        { t: "That's not possible.", notes: 1, then: [
          { s: 'haechan', f: 'neutral', t: "You're standing on a roof in a city that turns green at midnight, sweetheart." },
          { s: 'haechan', f: 'neutral', t: "Pick your battles." }
        ] }
      ] },
      { s: 'haechan', f: 'neutral', t: "In one of them there's a campus. Brick. Cold. A building with a ladder round the back of it that nobody uses but me." },
      { s: 'haechan', f: 'neutral', t: "In the other one there's a harbor. A house up the hill with too many stairs. Containers stacked like somebody's toy blocks, and the sea goes out so far in the mornings you could walk to China if you didn't mind the mud." },
      { n: "He said them both in the same flat voice, but they weren't the same. The campus came out dry, every word handed over like it cost money. The harbor came out warmer and louder, like it was a place that had shouted at him and fed him in equal amounts, and she found she was holding the railing harder than she needed to." },
      { s: 'haechan', f: 'serious', t: "You're in both. That's the only reason I know they're both real." },
      { n: "He took a stick of gum out of his pocket without looking and unwrapped it with one hand and put it in his mouth, and the smell of it came over to her on the wind, cinnamon, sharp and sweet and cheap, and her stomach did something strange and low, a little drop, like missing a stair." },
      { s: 'haechan', f: 'neutral', t: "I'm quitting smoking. In one of them. I've been quitting for about three years. The gum is how you can tell I'm serious." },
      { s: 'haechan', f: 'neutral', t: "In the other one I never started. Same lungs. Different bad habits. Don't ask me how that works. I just live here." },
      { choose: [
        { t: "(Ask about the campus.)", notes: 2, tally: { 'haechan.R': 1 }, then: [
          { s: 'solar', f: 'neutral', t: "The ladder. Where does it go?" },
          { s: 'haechan', f: 'neutral', t: "Up." },
          { n: "He let that sit for a second, deadpan, and then, because he always told you when he'd aimed something, he added," },
          { s: 'haechan', f: 'neutral', t: "Somewhere you can see the whole campus and nobody can see you. You thought it was the nerdiest thing about me. It's not. I've got worse." }
        ] },
        { t: "(Ask about the harbor.)", notes: 2, tally: { 'haechan.S': 1 }, then: [
          { s: 'solar', f: 'neutral', t: "The house on the hill. Do you live there?" },
          { s: 'haechan', f: 'happy', t: "I live outside your door. There. Ten meters. It's a rule. Somebody's mother made it." },
          { n: "He said it like the funniest joke in the world, and laughed, loud and easy, the way you'd laugh with men you'd fought beside, and then he stopped laughing all at once, like a radio switched off mid-song." }
        ] },
        { t: "(Don't ask. Just listen to the wind.)", notes: 3, then: [
          { n: "She didn't ask. The wind came off the bay and slapped the rooftop door against its frame, once, twice. He waited for her question and it didn't come, and she felt him notice it not coming, and something in his shoulders came down half an inch." }
        ] }
      ] },
      { s: 'haechan', f: 'neutral', t: "I've got two names for you, by the way. One from each." },
      { s: 'haechan', f: 'serious', t: "I tried them both on you the other night. You heard me." },
      { s: 'solar', f: 'neutral', t: "Princess." },
      { s: 'haechan', f: 'neutral', t: "And?" },
      { s: 'solar', f: 'neutral', t: "And nothing. It's a word. It sounds like something a boy says to make a girl roll her eyes." },
      { s: 'haechan', f: 'happy', t: "That's exactly what it is." },
      { s: 'haechan', f: 'neutral', t: "And the other one." },
      { n: "She didn't say it. She looked down at her right hand on the railing, at the ring finger with nothing on it, and he looked at the same place, and neither of them said anything for long enough that the wind filled the gap and moved on." },
      { choose: [
        { t: "Which one is right?", notes: 3, then: [
          { s: 'haechan', f: 'neutral', t: "Both. Neither." },
          { s: 'haechan', f: 'serious', t: "You decide what you answer to. You always have. I just say them and watch what your hands do." }
        ] },
        { t: "Don't call me either. Not yet.", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "Okay." },
          { n: "That was all. Okay. He didn't try a third one. He didn't sulk. He just put the word down where she'd asked him to, carefully, like a glass on the edge of a table, and she found she was more afraid of how easy he'd made it than she'd have been if he'd argued." }
        ] }
      ] },
      { n: "When she went in he stayed. From the stairwell she looked back once, through the little square of wired glass in the door, and saw him take something out of his pocket, a stick of gum, and unwrap it without looking, and fold the silver paper very small, and put it back in his pocket instead of on the ground." },
      { n: "It smelled of cinnamon on the stairs. She had no idea why that made her want to sit down." }
    ] },

    { after: '11/19', title: '3: the discman', place: 'Iwatodai Dorm · Laundry Room', time: 'Late Night', music: 'tender', scene: [
      { n: "It was raining, the thin cold November kind that didn't so much fall as hang around in the light from the streetlamps, and the laundry room's one high window had gone black and wet. The dryer was running with her clothes in it, for once, a load of uniforms going around in the little round window like a slow gray tide." },
      { n: "He had something in his lap she'd never seen him with. Not the headphones. A Discman, an old silver one, the lid cracked across in a long white line someone had taped over and over until the tape had more layers than the plastic. A pair of cheap earbuds, the foam covers gone, wound around it." },
      { s: 'haechan', f: 'neutral', t: "Since I was fifteen. Don't look at it like that. It works." },
      { n: "The door banged. Hyein came in sideways in a pink fleece and fluffy slippers with an armful of something on hangers held up over her head like the train of a dress, already talking, about a seam, about the only plug in this building that didn't trip the fuse, and then she turned around and saw them, two people sitting on two dryers in the middle of the night, and stopped." },
      { s: 'hyein', f: 'surprised', t: "Oh my God." },
      { s: 'hyein', f: 'surprised', t: "Oh my GOD. At three in the morning? On the DRYERS? Sol, is this the— are you two—" },
      { s: 'haechan', f: 'neutral', t: "Hyein." },
      { n: "Just her name. Flat, quiet, the way you'd say the name of a dog standing on the edge of a pool. Hyein's mouth closed so fast her teeth clicked." },
      { s: 'hyein', f: 'flustered', t: "Nope. Nothing. Hanni says I'm not allowed to say anything until you remember it yourself, and I promised, on my sewing machine. I'm just a girl steaming a skirt at three in the morning, which is normal, and I didn't see anything, and I don't even know who you are." },
      { s: 'hyein', f: 'flustered', t: "...Hi, Haechan." },
      { n: "She steamed nothing. She backed out of the room the way she'd come in, hangers first, and the door swung shut, and through it, fading down the hall, they heard her say *oh my God* twice more, very quietly, to the skirt. Haechan looked at the door for a second with no expression at all and then looked at her." },
      { s: 'haechan', f: 'neutral', t: "She's going to tell Hanni." },
      { s: 'solar', f: 'neutral', t: "Tell her what?" },
      { s: 'haechan', f: 'neutral', t: "That's the thing. She knows exactly what. She's known it longer than you have." },
      { s: 'haechan', f: 'serious', t: "Mostly." },
      { n: "He opened the lid. There was no disc in it. He closed it again, carefully, the way you'd close the eyes of something, and handed her one of the earbuds anyway." },
      { choose: [
        { t: "(Put it in.)", notes: 3, then: [
          { n: "She put it in. He put in the other. The cord between them was short, so short she had to lean in until her shoulder was against his, warm through the hoodie, and he pressed play on nothing." },
          { n: "The motor whirred. Something inside it spun up and clicked and spun and clicked, the sound of a laser looking for a song that wasn't there, and it was the stupidest thing in the world, and her eyes stung." }
        ] },
        { t: "There's nothing in it.", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "Yeah." },
          { s: 'haechan', f: 'neutral', t: "Put it in anyway." },
          { n: "She did. He pressed play on nothing, and the motor whirred and clicked, looking." }
        ] }
      ] },
      { n: "One earbud for her, one for someone else. She knew this. Not the Discman, not the cracked lid. The cord. The exact length of it. How close you had to sit. A car, maybe, at night, the heater roaring, a song with a skip in it, the same skip at the same place every time, two minutes and something in, and both of them going quiet right before it like a breath before a stair." },
      { fragment: 'strangers-discman' },
      { n: "The jade ring on Haenim's sash clicked. She heard it inside her own head, small and green, like a stone dropped into a bowl." },
      { s: 'haechan', f: 'surprised', t: "..." },
      { s: 'haechan', f: 'serious', t: "You heard that." },
      { s: 'solar', f: 'neutral', t: "It skips. The song. Two minutes in." },
      { n: "His hand closed around the Discman so hard the cracked lid creaked. He didn't say yes. He didn't have to. His face did nothing at all, and she was learning that nothing was the loudest thing his face knew how to do." },
      { choose: [
        { t: "Why didn't you ever fix it?", notes: 3, tally: { 'haechan.S': 1 }, then: [
          { s: 'haechan', f: 'neutral', t: "Because then it'd be a different song." },
          { s: 'haechan', f: 'sad', t: "I like knowing where it breaks. You can get ready for it. Most things don't tell you." }
        ] },
        { t: "Play it for me. The real one. When we're home.", notes: 3, then: [
          { n: "He went very still at *home*. At *we*. She heard both words leave her and couldn't call either of them back." },
          { s: 'haechan', f: 'neutral', t: "...Yeah. Okay." },
          { s: 'haechan', f: 'neutral', t: "Don't make promises in the laundry room, agasshi. Things get washed." }
        ] },
        { t: "(Don't say anything. Keep the earbud in.)", notes: 2, then: [
          { n: "She kept it in. The laser kept looking. They listened to the empty disc tray for a long time, shoulder to shoulder, and it was the best song she'd heard all year." }
        ] }
      ] },
      { n: "The dryer buzzed. Neither of them moved for it. When she finally went to take the earbud out he caught her wrist, not hard, just quick, his fingers rough and split across the knuckles in a way that had healed and split and healed again, and then let go almost before she'd noticed he'd done it." },
      { s: 'haechan', f: 'neutral', t: "Sorry." },
      { s: 'haechan', f: 'neutral', t: "Habit. Somebody used to try to run off with it." },
      { s: 'haechan', f: 'neutral', t: "In the other place I've got headphones that cost more than that dryer. Good ones. Closed-back. I don't listen to anything on them half the time. I just want the room to stop." },
      { s: 'haechan', f: 'neutral', t: "In this one I've got a Discman with no disc in it. Both of them do the same thing. That's the joke. I'm the same idiot in two outfits." },
      { choose: [
        { t: "Which one do you like better?", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "The one you're holding." },
          { n: "He said it before he'd thought about it, and heard it, and looked away at the dryer window like it had said it instead of him." }
        ] },
        { t: "You're not an idiot.", notes: 2, then: [
          { s: 'haechan', f: 'happy', t: "Mm. You'd be the first person in either place to say that out loud." },
          { s: 'haechan', f: 'neutral', t: "You'd also be wrong. But it's nice. Say it again sometime when I've done something stupid." }
        ] }
      ] },
      { n: "She folded her own uniforms that night, badly, while he watched and said nothing, and when she was done he refolded exactly one, the top one, so it would sit flat in her drawer, and handed the pile back to her with the Discman on top of it." },
      { s: 'haechan', f: 'neutral', t: "Hold onto it tonight. I can't sleep with it in the room." },
      { n: "She didn't ask what that meant. It sat on her desk all night next to a can she still hadn't finished, and she lay in bed looking at it, and at some point she heard herself humming two minutes of a song and stopping, exactly where it broke." }
    ] },

    { after: '11/25', title: '4: duo queue', place: 'Paulownia Mall · Game Panic', time: 'Evening', music: 'city', scene: [
      { n: "Game Panic at eight on a weeknight was all noise and no air, every cabinet shouting its own song over every other cabinet's song, the carpet printed with planets that had been walked flat years ago, and Haechan was standing in front of the old two-player shooter in the back corner with his hands in his hoodie pocket like it had personally called him here." },
      { s: 'haechan', f: 'neutral', t: "Play with me." },
      { n: "It wasn't a question. He picked up the gun on the left without looking, the one with the long plastic scope taped onto the barrel, and she picked up the other one, the stubby one with the green button on the side that dropped health packs, and her hands went completely still on it for a second, the way your hands go still on a doorknob in a house you grew up in." },
      { s: 'haechan', f: 'neutral', t: "...You picked support." },
      { choose: [
        { t: "I always pick support.", notes: 3, tally: { 'haechan.R': 1 }, then: [
          { s: 'haechan', f: 'neutral', t: "Yeah. I know." },
          { n: "He fed the machine two coins without taking his eyes off her." },
          { s: 'haechan', f: 'serious', t: "I'm the one who's supposed to forget things. Not you." }
        ] },
        { t: "Someone has to keep you alive.", notes: 3, then: [
          { s: 'haechan', f: 'surprised', t: "..." },
          { s: 'haechan', f: 'neutral', t: "That's a line, you know. You say that. Before every game. Like it's a joke." }
        ] },
        { t: "It was closer.", notes: 1, then: [
          { s: 'haechan', f: 'neutral', t: "Sure, sweetheart." }
        ] }
      ] },
      { n: "They didn't talk once it started. They didn't need to. He took the long shots, patient, picking things off the far end of the screen before she'd seen them move, the way you'd pick a lock with your eyes shut. She dropped the health where he was going to be a half second before he got there. When the boss came lumbering out of the fog he was already lined up on its weak spot, and she was already standing in the one place on the screen it couldn't reach him, and she couldn't have told anyone how she knew." },
      { n: "They beat it first try. Three middle schoolers who'd gathered behind them actually clapped, and one of them asked if they were professionals, and Haechan said yes without looking around." },
      { s: 'haechan', f: 'neutral', t: "Didn't miss a single heal." },
      { s: 'haechan', f: 'serious', t: "Nobody plays support like that unless they know exactly where their sniper's going to be." },
      { choose: [
        { t: "Maybe I do.", notes: 3, then: [
          { s: 'haechan', f: 'neutral', t: "...Yeah." },
          { s: 'haechan', f: 'neutral', t: "Maybe you do." }
        ] },
        { t: "You were easy to read.", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "Nobody's ever said that to me in my life." },
          { s: 'haechan', f: 'neutral', t: "...Except you. You say it constantly. It's very annoying." }
        ] },
        { t: "Again.", notes: 2, then: [
          { s: 'haechan', f: 'happy', t: "Again. Until they throw us out." }
        ] }
      ] },
      { n: "They played until the shutter started coming down at closing. In the walk to the station a scooter came round the corner too fast, and his hand was on the back of her neck for half a second, pulling her back onto the curb, and then gone like it had touched a stove." },
      { n: "She stood there on the curb with the place on her neck still warm. He was already three steps ahead, hands back in his pocket, looking at the traffic like he'd never in his life put a hand on anyone." },
      { s: 'solar', f: 'neutral', t: "You did that like you'd done it before." },
      { s: 'haechan', f: 'neutral', t: "I've done it about four hundred times. You never look." },
      { n: "At the crossing they waited for the light with the whole of Paulownia's neon at their backs, and he stood with his shoulder an inch from hers, and said, to the traffic, apropos of nothing, that there was a woman who'd started turning up around the dorm with blue skin and a French accent, and that she looked at him across the lounge like she was lining up a shot." },
      { s: 'haechan', f: 'neutral', t: "I play her. At home. I've played her for years. Sniper. Hook. She's the best in the game if you're patient and the worst if you're not." },
      { s: 'haechan', f: 'serious', t: "I'm not telling her that. I'm not telling her I've spent four hundred hours as her. She'd kill me. She'd be right." },
      { choose: [
        { t: "And I play the fox girl with the bells.", notes: 3, tally: { 'haechan.R': 1 }, then: [
          { s: 'haechan', f: 'surprised', t: "..." },
          { s: 'haechan', f: 'neutral', t: "Yeah. You do. You throw a bell at whoever's about to die. You always wait until they're sure they're going to." },
          { s: 'haechan', f: 'neutral', t: "It's the cruelest heal in the game. You love it." }
        ] },
        { t: "Does she know you're from somewhere else?", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "Everybody around here is from somewhere else lately. That dorm's a hotel for people who fell through the floor. I'm the guest who won't come out of his room." },
          { s: 'haechan', f: 'happy', t: "The breakfast is good, though. I eat it at four, cold, out of the pot. Somebody keeps making rice for twelve." }
        ] }
      ] },
      { choose: [
        { t: "I hate you.", notes: 3, tally: { 'haechan.S': 1 }, then: [
          { n: "It came out of her with no warning at all, hot and quick and certain, and she heard it and didn't recognize it as hers, and he turned around on the pavement and looked at her like she'd said a line in a play he'd forgotten he'd been cast in." },
          { s: 'haechan', f: 'happy', t: "Good. Great. That makes two of us, agasshi." },
          { n: "He said it so easily, so exactly, like a key going into a lock, that she laughed out loud in the middle of the street, and so did he, and neither of them could have said what was funny." }
        ] },
        { t: "I'll look next time.", notes: 2, tally: { 'haechan.R': 1 }, then: [
          { s: 'haechan', f: 'neutral', t: "No, you won't." },
          { s: 'haechan', f: 'neutral', t: "That's fine. That's my whole job." }
        ] }
      ] },
      { n: "On the monorail home he sat with his knee an inch from hers and his headphones on and nothing playing in them. She could tell because his thumb wasn't moving on the cord. He just wanted the weight of them over his ears. She knew that about him too, she realized. She knew it the way she knew the stubby gun had a green button." }
    ] },

    { after: '12/1', title: '5: it fits you better', place: 'Iwatodai Station · Platform', time: 'Evening', music: 'night', scene: [
      { n: "It rained on the way back from Port Island, the cold sideways December kind that came off the bay in sheets and got under every umbrella in the city, and she had left hers in the dorm, because she always left hers in the dorm, and by the time they came up the steps onto the platform her blazer was soaked through to the shirt and her hair was stuck to her neck in black ropes." },
      { n: "He didn't say anything. He didn't sigh, or roll his eyes, or tell her she should have brought one. He just pulled the black hoodie off over his head in one movement, the T-shirt underneath riding up and coming back down, and held it out to her." },
      { s: 'haechan', f: 'neutral', t: "Here." },
      { choose: [
        { t: "You'll freeze.", notes: 2, then: [
          { s: 'haechan', f: 'serious', t: "I'm not going to be the reason you freeze to death." },
          { n: "He said it flat, final, the way you'd read out a rule that had been on a wall a long time." }
        ] },
        { t: "(Take it.)", notes: 3, then: [
          { n: "She took it. It was warm all the way through and it smelled of him, of laundry soap and cold air and, underneath, something sweet she couldn't name, like a candle in another room." }
        ] }
      ] },
      { n: "She pulled it on over the wet blazer. It was enormous on her. The sleeves came down past her fingers, and the hood fell over her eyes, and she pushed it back, and he was looking at her." },
      { n: "Not the way he usually looked at her, flat and measuring, like a man reading a room. He was looking at her the way you look at something you've seen a hundred times and only just noticed you missed." },
      { s: 'haechan', f: 'flustered', t: "...It fits you better." },
      { n: "He heard it come out of his own mouth. She watched him hear it. His jaw shifted, once, and he looked away at the departure board like it had said something rude." },
      { s: 'haechan', f: 'neutral', t: "Forget it. I say that too much. It's a bad habit." },
      { s: 'solar', f: 'neutral', t: "I always forget my umbrella." },
      { s: 'haechan', f: 'neutral', t: "You always forget your coat. In both of them. You'll stand on a pier in November in a blouse to make a point." },
      { s: 'haechan', f: 'neutral', t: "It's the one thing you're the same about everywhere. The face changes. The name changes. You forget your coat." },
      { n: "She laughed, because it was absurd, and then didn't, because he wasn't joking, and because some part of her that wasn't standing on this platform was nodding, tired and exasperated, like someone who'd been told the same thing by a hundred people and had decided a long time ago that being cold was cheaper than listening." },
      { choose: [
        { t: "There's a jacket. At the back of a closet.", notes: 3, tally: { 'haechan.R': 1 }, then: [
          { n: "It wasn't a decision to say it. It came up the way the four notes of a song come up when someone hums the first three. A closet. A dark jacket shoved at the very back of it behind things she wore every day, hidden from somebody, kept from somebody, and the smell of it every time she opened the door." },
          { s: 'haechan', f: 'surprised', t: "..." },
          { s: 'haechan', f: 'serious', t: "Yeah." },
          { s: 'haechan', f: 'serious', t: "It's still there. Nobody's touched it. I'd know." }
        ] },
        { t: "Why do you keep giving me things?", notes: 3, tally: { 'haechan.S': 1 }, then: [
          { s: 'haechan', f: 'neutral', t: "Because you won't ask for them." },
          { s: 'haechan', f: 'neutral', t: "You'd freeze on a pier in November before you'd ask a man for his coat. I've watched you do it. It's not brave. It's stupid." },
          { n: "He said *stupid* the way other people said *sweetheart*, and she understood it was the same word." }
        ] },
        { t: "You're not getting it back.", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "I wasn't going to ask for it back." }
        ] }
      ] },
      { n: "The monorail was late. They stood under the platform roof with the rain coming down past the edge of it in a gray curtain, and the platform lights were doing their hesitant thing, and somewhere down at the far end a girl in a porter's coat was sitting on the last bench with her collar up, watching the tracks." },
      { n: "Haechan looked at her for a long time. Solar watched him do it. He didn't say anything. He looked at the girl on the bench, and then at Solar standing beside him in his hoodie, and then back at the girl, and his face did nothing at all, very carefully, for much too long." },
      { s: 'solar', f: 'neutral', t: "That's Wren. She's always there." },
      { s: 'haechan', f: 'neutral', t: "Mm." },
      { n: "That was all he said. When the train came in she glanced back down the platform and the bench was empty, and Haechan was still looking at it." },
      { n: "On the train, he stood close enough that their arms touched through the wet, and she let him, and when the doors opened at their stop neither of them moved to step away first. She wore the hoodie up the dorm steps and into the lounge, where Junpei took one look at her and opened his mouth, and Yukari elbowed him so hard he closed it again." }
    ] },

    { after: '12/7', title: '6: eat, you didn\'t eat', place: 'Iwatodai Dorm · Kitchen', time: 'Late Night', music: 'tender', scene: [
      { n: "In the nights after the tower she found him most often in the laundry room, but on the third one she found him in the kitchen at three in the morning with every light off but the one over the stove, standing at the counter in a T-shirt with his back to her, very still, the way people stand when they've walked into a room and forgotten why." },
      { n: "He'd come out of Tartarus on Saturday walking, which was the only thing anyone in S.E.E.S. had been able to agree on afterward. Fuuka had cried. Akihiko had clapped him on the shoulder hard enough to make a lesser man sit down. Mitsuru had looked at him for a long, flat moment and said, *Well,* the way she said it about things she'd decided to stop being surprised by. Haechan had said nothing to any of them. He'd gone and sat on the dryer until dawn." },
      { n: "He hadn't told Solar what it had been like. She hadn't asked. She'd been there. She'd seen the thing that came up behind him in the green light and the way he'd put a hand back without looking, like he was steadying himself on a wall, and the wall had been the color of noon." },
      { s: 'haechan', f: 'neutral', t: "Don't turn the light on." },
      { s: 'solar', f: 'neutral', t: "I wasn't going to." },
      { n: "He had a pot on the stove. Water, not yet boiling, and two packets of the cheap instant ramen Junpei bought in bulk lined up beside it, and an egg he was holding in his hand and not doing anything with." },
      { s: 'haechan', f: 'neutral', t: "Sit. Eat. You didn't eat." },
      { s: 'solar', f: 'neutral', t: "How do you know I didn't eat?" },
      { n: "He didn't answer. He never answered that one. He cracked the egg against the edge of the counter one-handed, the yolk dropping clean into a bowl, and she watched his hand while he did it, and it was shaking." },
      { choose: [
        { t: "(Take the bowl out of his hands.)", notes: 3, then: [
          { n: "She took it. He let her. He stood there with his empty hands at his sides like he didn't know where else to put them, and she put them on the edge of the counter for him, one and then the other, and held them there until the shaking was only in his fingertips." }
        ] },
        { t: "Your hands are shaking.", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "I know." },
          { s: 'haechan', f: 'serious', t: "They do that after. They always have. Don't make it a thing." }
        ] },
        { t: "(Say nothing. Make the ramen yourself.)", notes: 2, then: [
          { n: "She took the packet out of his hand and made it, badly, too much water, the egg broken up too early so it went to rags, and he watched her ruin it with a kind of exhausted tenderness, and didn't correct her once." }
        ] }
      ] },
      { n: "They ate at the counter standing up, out of the pot, because neither of them wanted to wash two bowls. It was terrible. It was the best thing she'd eaten in weeks. Halfway through he put his chopsticks down and looked at the dark window over the sink, where the two of them were reflected faint and doubled against the night." },
      { n: "Koromaru came in on silent paws halfway through and sat at Haechan's feet and looked up at him with the deep professional patience of a dog who knew exactly what ramen was. Haechan looked down at him. Koromaru looked up. Neither of them blinked." },
      { s: 'haechan', f: 'neutral', t: "No." },
      { s: 'haechan', f: 'neutral', t: "...Fine. One noodle. Don't tell Ken. He's got a whole chart about what you're allowed." },
      { n: "He held a single noodle down at arm's length like a man defusing something, and Koromaru took it with enormous delicacy and then lay down across both of Haechan's feet and stayed there, pinning him to the kitchen floor, a warm white weight, and Haechan let him, and the shaking in his hands went the rest of the way out." },
      { s: 'haechan', f: 'serious', t: "It tried to take you." },
      { s: 'haechan', f: 'neutral', t: "In there. Not you, you. My you. The one in my head. It was taking you out of me a piece at a time, the way you take a song apart in a mix. The rooftop. The harbor. The way you say my name when you're furious." },
      { s: 'haechan', f: 'neutral', t: "It said I'd sleep better. It said I'd finally be able to sleep." },
      { n: "He laughed, flat, the scraping kind, and wiped his mouth on the back of his wrist." },
      { s: 'haechan', f: 'neutral', t: "I told it I'd rather not sleep. I'm used to it." },
      { choose: [
        { t: "Thank you. For keeping me.", notes: 3, then: [
          { s: 'haechan', f: 'surprised', t: "..." },
          { s: 'haechan', f: 'neutral', t: "Don't thank me for that. That's like thanking me for having a heartbeat." },
          { n: "He picked his chopsticks back up. His hands weren't shaking anymore. She noticed that and didn't say so, which was, she was learning, how you said it back." }
        ] },
        { t: "I don't know what my name sounds like when I'm furious at you.", notes: 2, tally: { 'haechan.S': 1 }, then: [
          { s: 'haechan', f: 'happy', t: "Stick around. You'll find out. Takes about a week, usually." }
        ] },
        { t: "Are you okay?", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "No." },
          { s: 'haechan', f: 'neutral', t: "Eat your ramen." }
        ] }
      ] },
      { n: "He washed the pot. He made her dry it. He walked her to the foot of the stairs and stopped there, at the bottom step, the way he'd stopped at the foot of something before, a ladder, a tree line, a gate, she couldn't remember which, only that he never came further than that." },
      { s: 'haechan', f: 'neutral', t: "Go to bed." },
      { s: 'haechan', f: 'neutral', t: "...Solar." },
      { n: "It was the first time he'd said it. Not princess, not agasshi. Just her name, flat and plain at the bottom of the stairs in the dark, and it went through her like stepping off a curb you'd forgotten was there." },
      { n: "He'd already turned back toward the laundry room. She stood on the third step for a long time, holding the rail, waiting for her heart to come back down from wherever it had gone." }
    ] },

    { after: '12/12', title: '7: full sun', place: 'Iwatodai Dorm · Rooftop', time: 'Night', music: 'sun', scene: [
      { n: "December had come in clear and hard. The sky over the bay was the deep cold blue of something that had been scrubbed, and every light in Port Island sat sharp on the water instead of blurring, and the rooftop door had frozen a little in its frame so she had to shoulder it." },
      { ifFlag: 'xroad3-R', then: [
        { n: "The brick was there again. The second time this week. The first time, the night the city put its lights up, a bell had sent her up here alone, and she'd found a can on the railing and a whole other roof inside her head, and heard somebody climb the stairs behind her and stop outside this door for a long moment and go away again without opening it." },
        { n: "Tonight he was on her side of the door. He'd put the brick there himself, and he was at the railing with his hood down, and he didn't turn around." },
        { s: 'haechan', f: 'neutral', t: "That was me. The other night. On the stairs." },
        { s: 'haechan', f: 'serious', t: "You were remembering something. You don't walk in on somebody remembering. You'd have thrown the can at me." },
        { choose: [
          { t: "You talked about rooms. The bass and the kick.", notes: 3, tally: { 'haechan.R': 1 }, then: [
            { s: 'haechan', f: 'surprised', t: "..." },
            { s: 'haechan', f: 'flustered', t: "You told me that was the nerdiest thing I'd ever said." },
            { s: 'solar', f: 'neutral', t: "It is." },
            { s: 'haechan', f: 'neutral', t: "Yeah. You said you should've recorded it. Pipe down." }
          ] },
          { t: "Keep it on the rooftop.", notes: 3, then: [
            { n: "It came out in her own voice and in his cadence, a line with the shape of an old agreement, and he went so still that the wind moved his hair and nothing else on him moved at all." },
            { s: 'haechan', f: 'serious', t: "...What happens on the rooftop." },
            { s: 'solar', f: 'neutral', t: "Stays on the rooftop." },
            { s: 'haechan', f: 'neutral', t: "God. You're such a nerd." }
          ] }
        ] }
      ], else: [
        { n: "He'd propped it open behind her with a brick. That was new. She looked at the brick and at him and at the gap the brick held, a hand's width of warm stairwell air leaking out into the cold, and something went through her that had nothing to do with the cold at all." },
        { n: "A different door. Heavier. A different roof, the ledge under her legs, wind in her face that smelled of leaves instead of salt, and a boy's voice somewhere to her left, saying a thing about rooms, about hearing them, about how the bass eats the kick, the vocal's too dry, all the things that make people feel without knowing why. And under it, the clink of a can against concrete." },
        { fragment: 'runners-rooftop' },
        { n: "The bell on Haenim's sash rang once, so clear she turned her head to look for it." },
        { s: 'haechan', f: 'neutral', t: "...That's the door." },
        { s: 'haechan', f: 'serious', t: "You remembered the door. Of all the things." },
        { choose: [
          { t: "You talked about rooms. The bass and the kick.", notes: 3, tally: { 'haechan.R': 1 }, then: [
            { s: 'haechan', f: 'surprised', t: "..." },
            { s: 'haechan', f: 'flustered', t: "You told me that was the nerdiest thing I'd ever said." },
            { s: 'solar', f: 'neutral', t: "It is." },
            { s: 'haechan', f: 'neutral', t: "Yeah. You said you should've recorded it. Pipe down." }
          ] },
          { t: "Keep it on the rooftop.", notes: 3, then: [
            { n: "She didn't know where it came from. It came out in her own voice and in his cadence, a line with the shape of an old agreement, and he went so still that the wind moved his hair and nothing else on him moved at all." },
            { s: 'haechan', f: 'serious', t: "...What happens on the rooftop." },
            { s: 'solar', f: 'neutral', t: "Stays on the rooftop." },
            { s: 'haechan', f: 'neutral', t: "God. You're such a nerd." }
          ] }
        ] }
      ] },
      { n: "She'd brought two cans of hot coffee from the machine downstairs. He took one without saying thank you, which she had come to understand was how he said thank you, and cracked it, and grimaced at the first sip like it had betrayed him, and kept drinking it." },
      { s: 'haechan', f: 'neutral', t: "This is so bad. Somebody brewed this in a factory in a different decade and it's been waiting for me." },
      { s: 'solar', f: 'neutral', t: "You're a coffee person." },
      { s: 'haechan', f: 'serious', t: "Drop it." },
      { n: "She didn't drop it. She smiled into her own can and he saw her do it and looked away at the water with the expression of a man who has been caught at something extremely minor and would rather have been caught at something worse." },
      { ifFlag: 'xroad3-S', then: [
        { s: 'haechan', f: 'neutral', t: "You went down. The other night. When the lights went up. You went down instead of up." },
        { s: 'haechan', f: 'happy', t: "Somebody made sea bream for two at midnight and then didn't sit down to eat it. I know who. I'm not going to say his name on a nice roof. It'd make him too happy." },
        { n: "He said it loud and cheerful, the way he'd say something rude to an old man at a restaurant to make him laugh, and then the cheer ran out of it all at once, and he drank his terrible coffee, and didn't say anything else about the kitchen at all." }
      ] },
      { s: 'haechan', f: 'neutral', t: "You know what Haechan means?" },
      { s: 'haechan', f: 'neutral', t: "Full sun. Somebody gave it to me. I came in on a boat at dawn and a man was standing on the dock with his hands in his coat, and the sun came up behind me, and he looked at me like I was a problem he'd decided to keep." },
      { s: 'haechan', f: 'serious', t: "Very bright. Hurts to look at. That's what I tell people. They think it's a joke." },
      { s: 'haechan', f: 'neutral', t: "And you're Solar. The sun, again. No wonder it's so bright when you're around. Two of us in one place. Somebody should've checked the weather." },
      { choose: [
        { t: "Hurts to look at?", notes: 3, tally: { 'haechan.S': 1 }, then: [
          { s: 'haechan', f: 'flustered', t: "..." },
          { s: 'haechan', f: 'flustered', t: "In the worst good way. Don't make me say anything else. I've said so much tonight. I'm going to need a week." }
        ] },
        { t: "That's unbearably cheesy.", notes: 2, then: [
          { s: 'haechan', f: 'happy', t: "I know. Don't tell anyone. I've got a reputation in two places." }
        ] }
      ] },
      { n: "He drank the coffee down to the bottom like a man getting through a form, and set the empty can on the rail, and turned it a little so the tab faced the water. Then he spoke to the bay, not to her." },
      { s: 'haechan', f: 'serious', t: "I'm not the good one. In either place. There are things over there you don't know yet, and when you do, you're going to look at me different, and you'd be right to." },
      { s: 'haechan', f: 'neutral', t: "I'm not going to tell you here. It's not mine to tell you somewhere you can't walk out of. So don't decide anything about me because I fold your socks." },
      { n: "He said it like he was waiting to be told to leave." },
      { choose: [
        { t: "Then I'll decide when I'm home.", notes: 3, then: [
          { s: 'haechan', f: 'neutral', t: "...Yeah." },
          { s: 'haechan', f: 'neutral', t: "That's fair. That's the most fair thing anyone's said to me in a year." },
          { n: "He didn't sound relieved. He sounded like a man who'd been handed exactly the sentence he deserved and found it lighter than he'd braced for, and didn't trust that." }
        ] },
        { t: "I'm not going to be the first one to stop looking.", notes: 3, then: [
          { s: 'haechan', f: 'surprised', t: "..." },
          { n: "He turned, slowly, and looked at her like the sun had come up at midnight. Then he looked away fast, at the bay, his jaw working, both hands tight around an empty can." }
        ] },
        { t: "(Don't answer. Stand closer.)", notes: 2, then: [
          { n: "She didn't answer. She moved along the railing until the inch of cold air between their sleeves was gone, and stood there, and let him decide what that meant. He didn't decide. He just stood there and let it be true." }
        ] }
      ] },
      { n: "They stayed until their fingers went stupid. Going down, he took the brick out of the door and the door swung shut on the roof with a long iron sigh, and he stood looking at it with the brick in his hand like he'd closed something he'd meant to keep open." }
    ] },

    { after: '12/18', title: '8: say it again', place: 'Iwatodai Dorm · Laundry Room', time: 'Late Night', music: 'tender', scene: [
      { n: "Exams were over. The dorm had gone to bed at ten like a building that had been holding its breath for a week and finally let it out, and the laundry room at three in the morning was so quiet she could hear the tube light humming its one flat note." },
      { s: 'haechan', f: 'neutral', t: "That's an E. Bit flat. Like your fridge." },
      { n: "He was on the dryer, but he wasn't waiting for anything tonight. He was just there, because she was going to be there. She'd stopped needing to be invited sometime in the last few weeks and so had he, and neither of them had mentioned when it happened." },
      { ifFlag: 'xroad3-R', then: [
        { n: "He'd been quieter since the twelfth. Flatter, if that was possible, drier, the trot songs gone out of him as if someone had turned a station off. Twice this week she'd done something stupid in front of him, missed a step, dropped a whole carton of eggs, and he'd said *pretty girl* under his breath, and then looked surprised at himself, as if the words had come up out of a floor he hadn't known the building had." }
      ], else: [
        { ifFlag: 'xroad3-S', then: [
          { n: "He'd been louder since the twelfth. He'd sung in the kitchen two nights running, the whole chorus of something old and swooping, badly in the verses and perfectly in the chorus, and Junpei had come down the stairs to join in and been told to go away in a way that made him laugh. He'd started calling Mitsuru *Hoejangnim* to her face, with a perfect little bow, and Mitsuru, after two days of looking at him, had started answering to it." }
        ] }
      ] },
      { n: "She sat on the other dryer. Their knees almost touched across the gap. Somewhere far off, a long way out over the water, a ship's horn sounded, low and long, and she felt the jade ring on Haenim's sash turn over once in her chest like a fish." },
      { ifBefore: '12/21', then: [
        { s: 'haechan', f: 'neutral', t: "Monday. Everybody keeps saying it like a countdown. Fuuka says it in her sleep." },
        { s: 'haechan', f: 'serious', t: "I'm not going to ask you what you're going to say. On Monday. I want you to know that." },
        { s: 'haechan', f: 'neutral', t: "Everyone else is going to ask. Let them. I'd rather be the one who didn't." }
      ], else: [
        { s: 'haechan', f: 'neutral', t: "You said something. At the station. Everybody heard the bells. Nobody heard you." },
        { s: 'haechan', f: 'serious', t: "I'm not going to ask what it was. I want you to know that." },
        { s: 'haechan', f: 'neutral', t: "Everyone else is going to ask. Let them. I'd rather be the one who didn't." }
      ] },
      { n: "The door opened. Mitsuru, in a dressing gown the color of claret with a flashlight in one hand, doing her three a.m. check of the locks, which nobody had known she did until this exact second. She shone the flashlight at the dryers. At Solar. At Haechan. Back at Solar." },
      { s: 'mitsuru', f: 'neutral', t: "...Carry on." },
      { n: "She turned the flashlight off and closed the door behind her with the faint, precise click of a woman who had decided to have seen nothing, and they listened to her slippers go away down the hall, and Haechan let out a breath through his nose that in anyone else would have been a laugh." },
      { s: 'haechan', f: 'neutral', t: "I like her. She's terrifying. In the other place I'd want her on my side of the table." },
      { choose: [
        { t: "Why not ask? Everyone else does.", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "Because you hate it. You hate it more than anything. Your brother does it and you don't speak to him for a month." },
          { s: 'haechan', f: 'neutral', t: "I'd rather you hate me for something I actually did." }
        ] },
        { t: "(Reach across the gap and hold onto his sleeve.)", notes: 3, then: [
          { n: "She reached across the gap and took a fistful of his sleeve, the way you'd hold onto a railing on a boat, and he looked down at her hand on the black cotton and didn't move his arm, and didn't move it, and didn't move it." }
        ] }
      ] },
      { n: "They sat. The dryer turned. And then, without any decision she could find afterward, without anything rising up first to warn her, a word came up out of her the way her hand had reached for the can that first night, already shaped, already worn smooth." },
      { s: 'solar', f: 'neutral', t: "Donghyuck." },
      { n: "The dryer kept turning. The light kept humming its flat E. Nothing else in the room moved. He didn't breathe. She watched him not breathe for so long she started to count it, one, two, and at five he let it out all at once, slow, like he'd been holding it since November." },
      { s: 'haechan', f: 'serious', t: "...Who told you that." },
      { s: 'solar', f: 'neutral', t: "Nobody." },
      { s: 'haechan', f: 'neutral', t: "Nobody calls me that." },
      { n: "His voice cracked down the middle of *nobody*, very small, so small it could have been the light flickering, and he heard it and his jaw locked." },
      { s: 'haechan', f: 'neutral', t: "In one of them it's what the people who hate me call me. In the other one it's what I gave you. Same name. You're the only one who ever said it like it was a present." },
      { s: 'haechan', f: 'serious', t: "I didn't give it to you here. I didn't. I was waiting to see if it'd come back on its own." },
      { s: 'haechan', f: 'flustered', t: "...Say it again." },
      { route: [
        { t: "(Say it again. Then kiss him.)", route: 'romance', notes: 3, then: [
          { s: 'solar', f: 'neutral', t: "Donghyuck." },
          { n: "He closed his eyes when she said it, like he was trying to keep it somewhere it couldn't leak out. She slid off the dryer and stood in front of him, between his knees, the warm machine humming against her legs, and put her hand flat on his chest, and felt his heart going under the cotton like something trying to get out of a room." },
          { n: "She kissed him. It wasn't careful. It wasn't anything she'd planned, or anything she could have planned, because her body had done it before, somewhere, more than once, in more than one way, and her body was done waiting for the rest of her to catch up. He made a small sound against her mouth, like something being set down after it had been carried a long way, and his hands came up and held her face, and they were shaking again, both of them, and he didn't try to stop them." },
          { s: 'haechan', f: 'flustered', t: "...There you are." },
          { n: "He said it against her forehead. It was the same three words as the first night. They were not the same three words at all." }
        ] },
        { t: "(Say it again. Then stay where you are.)", route: 'friend', notes: 3, then: [
          { s: 'solar', f: 'neutral', t: "Donghyuck." },
          { n: "He closed his eyes when she said it. She didn't move off her dryer. She stayed where she was, with her hand still fisted in his sleeve, and let the name do all the work, and it did." },
          { s: 'haechan', f: 'neutral', t: "Yeah. That's the one." },
          { s: 'haechan', f: 'neutral', t: "That's enough. That's so much. You don't have to do anything else with it." },
          { n: "He rested his forehead against hers for one second across the gap, the cold one and the warm one, and then sat back, and she let go of his sleeve, and the room went on humming its flat E around them like nothing had happened, which was a lie they both let it tell." }
        ] }
      ] },
      { n: "She went up at four. On the stairs she stopped and said it once more, to nobody, very quietly, to see if it was still there. It was. It sat in her mouth like it had always had a place to sit." }
    ] },

    { after: '1/9', title: '9: one place', place: 'Iwatodai Dorm · Rooftop', time: 'Night', music: 'night', scene: [
      { n: "January, and the coldest night of the year so far. The new year had come and gone at the shrine with everyone she'd somehow collected crammed onto the steps in borrowed scarves, and now the calendar on the lounge wall had a red ring around the last weekend of the month that nobody had drawn and nobody would admit to." },
      { n: "He was on the roof. He'd been there since dinner. She brought two blankets this time, because she'd learned, and he took one without saying thank you, and they stood wrapped up at the railing with the city glittering below them like something spilled." },
      { n: "Something about him was different, and she saw it from the door before she could have said what it was. He was standing the way he always stood, forearms on the rail, hood up, but all the weight had gone out of it. Like a man who'd been carrying two bags up a long flight of stairs since November and had, somewhere between dinner and now, set one of them down on a landing. Not thrown it away. Set it down, where he'd know where it was." },
      { s: 'haechan', f: 'neutral', t: "I dreamed one place last night." },
      { s: 'haechan', f: 'neutral', t: "First time since I got here. Every other night it's both. I fall asleep in one and wake up in the other and spend breakfast working out which I'm in. Last night it was one place, start to finish. I woke up knowing which." },
      { ifFlag: 'route-R', then: [
        { flag: { 'haechan-sure-R': true } },
        { s: 'haechan', f: 'neutral', t: "Snow. On a quad nobody had walked across yet. A pink house with one light on at three in the morning, because you're always up at three." },
        { s: 'haechan', f: 'neutral', t: "I was under the window. I didn't throw anything at the glass. I just stood there and knew you were in there, being awake, being annoyed about something. That was the whole dream. It was a very good dream." },
        { n: "He said it flat, every word handed over like it cost money, the campus voice, the one from the ladder and the lab glass. The other one, the loud one that sang to dryers and called old men names to make them laugh, wasn't anywhere in it. She waited for it to come back the way it always came back, mid-sentence, warm and sideways. It didn't. It wasn't gone. She could tell it wasn't gone. It was just sitting down." },
        { s: 'haechan', f: 'neutral', t: "That's the one. That's where we live. I knew it when I woke up. It wasn't even a feeling. It was more like weather." },
        { s: 'haechan', f: 'serious', t: "I've still got the other one. Every stair on that hill. The man on the dock. Don't look at me like I lost something. I didn't lose anything. I just know which door's mine now." },
        { s: 'haechan', f: 'neutral', t: "...Pretty girl." },
        { n: "It came out of him like he'd been holding it in his mouth since November and had only just decided he was allowed to let it go. Not under his breath. To her face. Her whole body had heard it a hundred times." },
        { choose: [
          { t: "Hyuck.", notes: 3, then: [
            { n: "It was out before she'd asked herself for it. A short name, worn smooth. Somebody else's, once; she knew that the way she knew where the light switches were in a house she'd lived in." },
            { s: 'haechan', f: 'surprised', t: "..." },
            { s: 'haechan', f: 'flustered', t: "...That one's yours now. Somebody else had it first. He doesn't get it back." }
          ] },
          { t: "(Roll your eyes. Let him see you want to.)", notes: 3, then: [
            { n: "She didn't roll her eyes. She wanted to. She let him see her want to, and that was the whole conversation, and he read it the way he read every room, accurately, and was pleased with himself about it for the rest of the night." },
            { s: 'haechan', f: 'neutral', t: "Yeah. That one." }
          ] },
          { t: "(Find his hand inside the blanket.)", notes: 3, then: [
            { n: "She found his hand under the blanket. It was cold and split across the knuckles and he turned it over and held on, and didn't look at her, and the corner of his mouth went up a quarter of an inch, which was as close to a smile as the campus voice ever let him get." }
          ] }
        ] },
        { s: 'haechan', f: 'neutral', t: "It's going to be cold over there. You're going to forget your coat. I'm going to be the guy who has one. That's the plan. It's not a good plan. It's the only one I've ever had." }
      ], else: [
        { ifFlag: 'route-S', then: [
          { flag: { 'haechan-sure-S': true } },
          { s: 'haechan', f: 'happy', t: "The harbor. Low tide, the mud all the way out to China. The house on the hill with too many stairs. Mrs. Bang beating a rug off the balcony at six in the morning like it owed her money." },
          { s: 'haechan', f: 'happy', t: "And Hoejangnim in the car singing the wrong words to a song older than both of us, and me singing the right ones louder to make him mad. And you on the pier in November in a blouse, to make a point." },
          { n: "He said it loud. He said it like it was the funniest thing in the world, and then, for once, he didn't stop all at once the way he always had, radio switched off mid-song. He just kept going, warm and easy and much too loud for a rooftop at midnight, until somewhere below them a window went up and Junpei yelled something about people trying to sleep, and Haechan yelled back an apology so cheerful it was clearly an insult." },
          { s: 'haechan', f: 'neutral', t: "That's the one. That's where we live. I knew it when I woke up. Ten meters outside your door. It's a rule. Somebody's mother made it." },
          { s: 'haechan', f: 'serious', t: "I've still got the other one. Every brick of it. The ladder. The lab window. Don't look at me like I lost something. I didn't lose anything. I just know which door's mine now." },
          { n: "He reached into the blanket and came out with a can of coffee, the cheap sweet kind from the machine downstairs, still hot, and put it in her hands and closed her fingers round it with his own." },
          { s: 'haechan', f: 'happy', t: "Your kind. The bad kind. I bought the row." },
          { s: 'haechan', f: 'neutral', t: "...Solar." },
          { n: "Not agasshi. Not anything with a fight in it. He'd said her name before, once, at the bottom of a staircase, like something that had slipped. This didn't slip. He said it on purpose, first, and let her watch him do it, the one tell he'd never let her catch him using." },
          { choose: [
            { t: "Ten meters is too far.", notes: 3, then: [
              { s: 'haechan', f: 'surprised', t: "..." },
              { n: "He went quiet. Not the frightened quiet. The other one, the one she'd only heard a few times, when something had gone into him so fast there hadn't been time to make a joke out of it first." },
              { s: 'haechan', f: 'flustered', t: "...Five. I'll take it up with the mother." }
            ] },
            { t: "(Drink the bad coffee. Make the face.)", notes: 3, then: [
              { n: "She drank it. It was too sweet and not hot enough, and her whole face did something it had clearly done a thousand times in a thousand cars." },
              { s: 'haechan', f: 'happy', t: "Yeah. That face. I'd know it from a boat." }
            ] },
            { t: "(Lean into him, blanket and all.)", notes: 3, then: [
              { n: "She leaned. He took the weight like he'd been braced for it, and put his chin on the top of her head, and hummed something under his breath, the swooping old ballad from the car, very quietly, perfectly, all the way through the chorus." }
            ] }
          ] }
        ], else: [
          { ifFlag: 'route-true', then: [
            { flag: { 'haechan-sure-both': true } },
            { s: 'haechan', f: 'neutral', t: "Both. In the same dream. Not one and then the other. Snow on the quad and the tide out underneath it, like somebody had laid one picture on top of the other and held them up to a window and the light came through both." },
            { s: 'haechan', f: 'neutral', t: "You were in all of it. You were in a pink house and a house on a hill at the same time and you were annoyed with me in both of them about a coat." },
            { n: "He said it in both voices at once. She hadn't known that was possible. The flat one and the loud one, the dry and the warm, a single sentence with two registers stacked inside it like a chord, and she understood with her whole body that he had stopped switching." },
            { s: 'haechan', f: 'happy', t: "So that's where we live. All of it. Whatever you did on that platform, you did it to everything. I'm not picking a door. You took the doors off." },
            { s: 'haechan', f: 'neutral', t: "Princess. Agasshi. Solar. Pick one. Pick all of them. I'm not fussy anymore." },
            { choose: [
              { t: "All of them.", notes: 3, then: [
                { s: 'haechan', f: 'flustered', t: "...Greedy." },
                { s: 'haechan', f: 'happy', t: "Good. Fine. All of them. I'll rotate." }
              ] },
              { t: "Donghyuck.", notes: 3, then: [
                { s: 'haechan', f: 'surprised', t: "..." },
                { s: 'haechan', f: 'flustered', t: "That's cheating. That's so much cheating. You can't answer a question with my name. Who taught you that." }
              ] },
              { t: "(Laugh. It sounds like both of you.)", notes: 3, then: [
                { n: "She laughed, and it came out in two voices too, a girl on a ledge and a girl on a pier, and he heard it, and laughed back, and for a while the roof had four people on it and was not crowded at all." }
              ] }
            ] }
          ], else: [
            { s: 'haechan', f: 'neutral', t: "Both. Still both. I keep waiting for one of them to go quiet, and neither of them will." },
            { s: 'haechan', f: 'serious', t: "Neither of them is where you're going. I worked that out on the platform. I'm not going to make that your problem." },
            { s: 'haechan', f: 'neutral', t: "I'll go home to whichever one wakes me up first. And I'll be up somewhere high, a roof, a hill, whichever, and you'll be somewhere I'm not." },
            { n: "He stopped. He looked at the city for a while, at the lights, and she watched him put the next sentence together the way he folded towels, one corner and then the other, until it was square." },
            { s: 'haechan', f: 'neutral', t: "That's allowed. You're allowed to go somewhere I'm not. I'm saying it out loud on a roof so it counts." },
            { choose: [
              { t: "I'm sorry.", notes: 2, then: [
                { s: 'haechan', f: 'neutral', t: "Don't be. I'd have hated it if you'd picked a door because I was standing next to it." }
              ] },
              { t: "(Find his hand inside the blanket.)", notes: 3, then: [
                { n: "She found his hand. He held on so hard it hurt, and then less, and then just right, and didn't let go, and didn't say anything else, which was, she'd learned, how he said the rest of it." }
              ] },
              { t: "Bring two cans anyway.", notes: 3, then: [
                { s: 'haechan', f: 'happy', t: "Yeah. I'll drink yours. It's fine. I'll be on a budget." }
              ] }
            ] }
          ] }
        ] }
      ] },
      { n: "They stood with their shoulders together in the blankets and watched a plane go over, very high, blinking red, going somewhere that wasn't here. He followed it with his eyes all the way across the sky the way she'd seen him follow a sound, like it might be carrying something of his." },
      { ifRoute: 'romance', then: [
        { s: 'haechan', f: 'neutral', t: "I'm going to ask you something else, though. Since you went and kissed me in a laundry room like it was nothing." },
        { s: 'haechan', f: 'serious', t: "What is this?" },
        { choose: [
          { t: "I don't know. I know it's been every time.", notes: 3, then: [
            { s: 'haechan', f: 'surprised', t: "..." },
            { n: "For a second he didn't do anything. Then he laughed, and it wasn't flat, and it wasn't scraping. It came all the way up from somewhere he'd kept locked so long the key had rusted, and it fogged the air between them white." },
            { s: 'haechan', f: 'happy', t: "Yeah. Okay. Same. Obviously. Every single time." },
            { n: "He kissed her on the cold roof with both blankets falling off, slow this time, deliberate, like a man who'd decided he was allowed, and she held onto his jacket with both fists and let the city go on glittering without them." }
          ] },
          { t: "Ask me again somewhere ugly.", notes: 3, then: [
            { s: 'haechan', f: 'neutral', t: "Okay." },
            { s: 'haechan', f: 'neutral', t: "I'll ask you in a laundry room. A car. A bus stop in the rain. I'll make it really unromantic so you know I mean it." },
            { n: "He put his forehead against her temple and left it there, and she felt him smile, which she had never once seen him do with his whole face, and still didn't, because she had her eyes shut." }
          ] }
        ] }
      ], else: [
        { s: 'haechan', f: 'neutral', t: "I'll ask you something easier. Since we're friends. Since that's what you picked, and it's a good word, it's a real one." },
        { s: 'haechan', f: 'neutral', t: "Wherever you wake up. Will you come find me sometimes? I'll be up somewhere high anyway. I just want to know if I should bring two cans." },
        { choose: [
          { t: "Bring two.", notes: 3, then: [
            { s: 'haechan', f: 'neutral', t: "Okay." },
            { s: 'haechan', f: 'happy', t: "The wrong ones, probably. I'll be on a budget." }
          ] },
          { t: "Bring the right ones.", notes: 3, then: [
            { s: 'haechan', f: 'serious', t: "Done. That's a promise. I don't make a lot of those. You can check." }
          ] }
        ] }
      ] },
      { n: "On the way down he stopped on the landing and looked at the red ring on the calendar through the lounge door, and then at her, and didn't say anything about it, and neither did she. Some things were for later. He'd taught her that without saying it, the way he'd taught her everything." }
    ] },

    { after: '1/23', title: '10: the universe', place: 'Iwatodai Dorm · Laundry Room', time: 'Late Night', music: 'tender', scene: [
      { n: "A week left. The dorm knew it. Junpei had started taking photos of things that didn't need photographing, the lounge sofa, the rice cooker, Koromaru asleep with one ear inside out. Yukari had cried at a commercial. Mitsuru had read the same page of a report four times, and Solar had watched her do it, and said nothing, and loved her for it." },
      { n: "The laundry room light had stopped flickering. That was the first strange thing. Somebody had fixed it, or the building had, sometime in the last week, and now it was just a light, flat and white and ordinary, and the room looked smaller under it, the way rooms do when you've already started leaving them." },
      { n: "He was on the dryer with a laptop on his knees. She didn't know where the laptop had come from. He refused, every time she asked, to explain it, and she'd stopped asking because the refusal had started to sound like a joke they both liked." },
      { n: "On the way down she'd passed the lounge. Hanni and Hyein were asleep on the sofa under one blanket with a fashion magazine open over both their faces. Jihoon was teaching Ken pilates on the carpet in an extremely loud whisper, which was not why he'd walked over from the guesthouse and was now apparently why he was staying. Jungwon was at the dining table alone with a cup of tea and his watch off, lying face up beside the cup, and he looked up when she passed the doorway, and inclined his head, polite, and looked back down. Half of them didn't live here. None of them had gone home. The whole impossible household, awake at one in the morning and pretending not to be, because there were seven days left and nobody wanted to sleep through any of them." },
      { n: "She'd stood in the lounge doorway too long. She'd counted them. She did that now. Every night, a little before she went down, she counted everyone, the way you count the things in a bag before you leave a hotel." },
      { s: 'haechan', f: 'neutral', t: "Sit. Don't say anything for four minutes. I'll know." },
      { n: "He handed her one side of the headphones. The heavy black ones. They were warm from his neck." },
      { n: "It was a song. She'd known it would be. She hadn't known it would be this song." },
      { n: "The gate chime at Iwatodai Station. The hiss of the monorail doors. The laundry room's light, flat, an E, humming under everything like a floor. Rain on the platform roof. Her own laugh, once, on the street outside Game Panic, the real one, the one that had come out of her like something knocked off a shelf. A dryer turning. And over all of it, laid in so carefully she almost didn't hear the seam, the four minutes of the song she'd been humming since April without knowing where she'd first heard it, the one that had always felt like it belonged to some other version of her life." },
      { n: "It was his. It had always been his. In one place it was a track on a laptop in a room with a ladder outside. In the other it was a skip on a disc in a cracked silver case, two minutes in, the same place every time. Here, it was finished." },
      { s: 'haechan', f: 'flustered', t: "I've been making it a long time. In both of them. It always ends up being about the same person." },
      { s: 'haechan', f: 'neutral', t: "I guess it found you before I did. That tracks." },
      { choose: [
        { t: "I've been listening to you this whole time.", notes: 3, then: [
          { s: 'haechan', f: 'sad', t: "..." },
          { s: 'haechan', f: 'neutral', t: "Yeah. I know. I could hear it from the other side. That's how I found the door." }
        ] },
        { t: "(Hold his hand.)", notes: 3, then: [
          { n: "She took his hand. His fingers were cold and split across the knuckles and she held them anyway, and he held on so hard it almost hurt, and didn't let go, and the song ran out and went back to the start on its own." }
        ] }
      ] },
      { ifFlag: 'haechan-sure-R', then: [
        { s: 'haechan', f: 'neutral', t: "When the hour ends I know where I'm going to be. Cold. A pink house with a light on. I'll find you, and you'll have no idea who I am for about five minutes, and then you'll tell me to go to hell." }
      ], else: [
        { ifFlag: 'haechan-sure-S', then: [
          { s: 'haechan', f: 'neutral', t: "When the hour ends I know where I'm going to be. Ten meters outside your door, low tide, too early. You'll have no idea who I am for about five minutes, and then you'll tell me to go to hell." }
        ], else: [
          { ifFlag: 'haechan-sure-both', then: [
            { s: 'haechan', f: 'neutral', t: "When the hour ends I'm going to be in two places at once, and so are you, and for once that's the whole plan. I'll find you in both. You'll tell me to go to hell in both. In two accents." }
          ], else: [
            { s: 'haechan', f: 'neutral', t: "When the hour ends I don't know where I'm going to be." },
            { s: 'haechan', f: 'serious', t: "But I'll find you. I always do. Some laundry room. Some roof. Some hallway at a party that goes on too long. I'll find you, and you'll have no idea who I am for about five minutes, and then you'll tell me to go to hell." }
          ] }
        ] }
      ] },
      { ifFlag: 'haechan-sure-S', then: [
        { s: 'haechan', f: 'happy', t: "It's not the end of the world, agasshi. We'll figure it out." },
        { n: "Agasshi. He said it on purpose this time, and smiled when he said it, the whole loud warm house of a smile, and something in her answered it like a name, finally, the way it had been waiting to all winter." }
      ], else: [
        { s: 'haechan', f: 'happy', t: "It's not the end of the world, princess. We'll figure it out." },
        { n: "Princess. He said it on purpose this time, and smiled when he said it, and something in her answered it like a name, finally, the way it had been waiting to all winter." }
      ] },
      { choose: [
        { t: "I hate you.", notes: 3, tally: { 'haechan.S': 1 }, then: [
          { s: 'haechan', f: 'happy', t: "I know, agasshi." },
          { n: "And then, after a while, when the song had gone round again and the dryer had finished and neither of them had moved," },
          { s: 'haechan', f: 'neutral', t: "...Solar." }
        ] },
        { t: "Don't call me that.", notes: 3, tally: { 'haechan.R': 1 }, then: [
          { s: 'haechan', f: 'neutral', t: "Mm. Proud of you for that one, sweetheart." },
          { n: "And then, after a while, when the song had gone round again and the dryer had finished and neither of them had moved," },
          { s: 'haechan', f: 'neutral', t: "...Solar." }
        ] },
        { t: "(Laugh. Cry. Both.)", notes: 3, then: [
          { n: "She laughed so hard she cried, or cried so hard she laughed, she was never afterward sure which. He didn't do anything about it. He just sat there and let her, holding her hand on top of a dryer in a room with an ordinary light, and when it was over he said her name, plain, like a man reading the only word on a page." },
          { s: 'haechan', f: 'neutral', t: "Solar." }
        ] }
      ] },
      { n: "She went to bed at five with the headphones still around her neck, his, warm, and lay in the dark listening to the building, and for once in her life she wasn't waiting for anything. Up the stairs, at the end of the top floor, in a room he'd finally started sleeping in, somebody was awake, listening to it too." }
    ] }
  ],

  afterMax: [
    { title: 'one more load', place: 'Iwatodai Dorm · Laundry Room', time: 'Late Night', scene: [
      { n: "Three in the morning, because some things didn't change just because the month was running out of days. The dryer was rumbling and Haechan was sitting on top of it with a basket of her clothes in his lap that she had definitely, specifically, left upstairs." },
      { s: 'haechan', f: 'neutral', t: "It was making noise. Across the building. I could hear it being dirty." },
      { s: 'solar', f: 'neutral', t: "You can't hear laundry." },
      { s: 'haechan', f: 'neutral', t: "I can hear everything over there. You know that. It's a condition." },
      { n: "He folded the way he always did, fast and exact, and somewhere in the middle of it he stopped, holding one of her shirts, and held it out." },
      { s: 'haechan', f: 'serious', t: "Come here. You're learning this. I'm not going to be—" },
      { s: 'haechan', f: 'neutral', t: "...You're learning this. Sleeves first." },
      { choose: [
        { t: "(Learn it properly.)", notes: 3, then: [
          { n: "Sleeves back, fold in thirds, half again. He stood at her shoulder with his arms crossed and didn't touch her hands once, just watched them, and said no, and no, and then, after the fourth shirt, nothing at all, which from him was a standing ovation." }
        ] },
        { t: "(Fold one badly so he'll keep it.)", notes: 3, then: [
          { s: 'haechan', f: 'flustered', t: "You're doing that so I'll keep it." },
          { n: "He kept it. Crooked, on top of his own pile, unrefolded." }
        ] }
      ] },
      { ifRomance: 'haechan', then: [
        { n: "At the bottom of the basket was his hoodie. It had stopped smelling like him sometime in December and started smelling like both of them. He held it out. Not to himself. To her." },
        { s: 'haechan', f: 'neutral', t: "Yours. Take it with you. Whichever door. They can argue about it on the other side." }
      ], else: [
        { n: "At the bottom of the basket was his hoodie. He looked at it for a long moment, and then put it on top of her pile instead of his." },
        { s: 'haechan', f: 'neutral', t: "Keep it. Friends can keep things. That's in the rules. I checked." }
      ] }
    ] },
    { title: 'room tone', place: 'Iwatodai Station', time: 'Afternoon', scene: [
      { n: "He had a small silver recorder with a foam cover over the microphone like a tiny hat, and when she asked where it had come from he said *Paulownia Mall* in the voice he used for things that were obviously not true." },
      { s: 'haechan', f: 'neutral', t: "I need sounds. From here. Before." },
      { n: "He didn't finish it. Before was a whole sentence, that month." },
      { n: "So they went and got sounds. The gate chime. The turnstiles. The soft recorded woman announcing the monorail, the voice everyone in Iwatodai could recite in their sleep. He stood in the middle of the concourse with the recorder up at his shoulder and his eyes shut, completely still, while the four o'clock crowd broke around him like he was a post somebody had put there on purpose." },
      { s: 'haechan', f: 'serious', t: "Room tone. The sound a place makes when nobody's doing anything." },
      { choose: [
        { t: "(Hum the song, very quietly, to ruin the take.)", notes: 3, then: [
          { s: 'haechan', f: 'flustered', t: "You ruined it." },
          { n: "He didn't stop recording." }
        ] },
        { t: "What's it for?", notes: 2, then: [
          { s: 'haechan', f: 'sad', t: "Something to take with me. Sound doesn't weigh anything. I checked that too." }
        ] }
      ] },
      { n: "On the monorail home he gave her one side of the headphones and played her the whole afternoon squeezed into four minutes. Under all of it, like a floor, very quiet, was the bench at the far end of the platform, the one nobody else ever sat on. You could hear the wind go over it. You couldn't hear anyone sitting there." },
      { s: 'haechan', f: 'neutral', t: "That's what it sounded like. With you in it." }
    ] },
    { title: 'first light', place: 'Iwatodai Dorm · Rooftop', time: 'Morning', scene: [
      { n: "At ten past six he knocked on her door, twice, flat, and when she opened it he was holding two blankets and two cans, one coffee and one the pinkest thing the machine sold." },
      { s: 'haechan', f: 'neutral', t: "Roof. Sun's up in forty minutes. There's a little box in the newspaper. I've never once in my life looked at that box." },
      { n: "The roof was so cold it hurt to breathe. They sat against the water tank in both blankets while the city went from black to blue to pewter, and then the bay caught, and then the buildings across the water one by one, like someone walking through a house switching on lamps." },
      { s: 'haechan', f: 'neutral', t: "I've seen a lot of these. From the wrong side. Still up from the night before. Never watched one on purpose." },
      { ifRomance: 'haechan', then: [
        { n: "The light came over the far shore and the whole roof went gold, and he wasn't looking at it. He was looking at her, with the expression from the laundry room the very first night." },
        { s: 'haechan', f: 'flustered', t: "...Yeah. Hurts to look at." },
        { choose: [
          { t: "(Kiss him. The sun can manage.)", notes: 3, then: [
            { n: "His mouth was cold and tasted of terrible canned coffee, and behind them the sun came up all on its own, unwatched." }
          ] },
          { t: "You're supposed to be watching the sunrise.", notes: 3, then: [
            { s: 'haechan', f: 'neutral', t: "I am." }
          ] }
        ] }
      ], else: [
        { n: "The light came over the far shore and the whole roof went gold, and he watched it all the way up without blinking, like a man reading the last page of something." },
        { s: 'haechan', f: 'neutral', t: "Okay. I get it now. The fuss." },
        { choose: [
          { t: "(Lean your shoulder on his.)", notes: 3, then: [
            { n: "She leaned. He let her. They watched the rest of it like that, two names for the sun, freezing, extremely pleased with themselves." }
          ] },
          { t: "Same time tomorrow?", notes: 3, then: [
            { s: 'haechan', f: 'happy', t: "Absolutely not. Yes." }
          ] }
        ] }
      ] }
    ] }
  ],

  // Christmas Eve (plot doc §12: the route partner's evening). v1 shape; the revamp engine doesn't schedule it yet.
  christmas: { place: 'Iwatodai Dorm · Laundry Room', time: 'Night', scene: [
    { n: "The lounge was having a party, which meant Junpei had a Santa hat and a great many opinions, Fuuka had made a cake that had slumped gently to one side, and someone had put on a Christmas CD that skipped on the third track every single time. It was warm and loud and full of people she loved. She stayed exactly an hour." },
    { n: "The laundry room light was off. It wasn't dark. Somebody had found a string of fairy lights, the cheap kind, half the bulbs blue and the other half dead, and wound them over the top of the dryer, and the whole room glowed an uneven blue like the inside of a fish tank." },
    { s: 'haechan', f: 'neutral', t: "It's warmer when it's on. Don't tell Mitsuru. She has a speech about electricity." },
    { s: 'haechan', f: 'neutral', t: "Got you something. Lower your expectations." },
    { n: "A lump, wrapped in the lounge newspaper's weather page. Inside was one can, black and pink, a logo like claw marks. The real one, again, in a world that didn't make them yet. She'd have bet anything there wasn't another one in this city, and she'd have lost." },
    { s: 'haechan', f: 'serious', t: "The machine at the station. Bottom row. It had one more in it, after the girls cleaned it out. I checked it every day for a week. Don't ask me how it got there. It's yours." },
    { choose: [
      { t: "(Give him the gift you brought: a pad of blank staff paper.)", notes: 3, then: [
        { s: 'haechan', f: 'surprised', t: "..." },
        { s: 'haechan', f: 'sad', t: "I don't write it down. It's all in here." },
        { n: "He opened it anyway, to the first page, and looked at all those empty lines for a long time, like a lot of rooms he hadn't been in yet." }
      ] },
      { t: "(Give him the gift you brought: a cheap new Discman case.)", notes: 3, then: [
        { s: 'haechan', f: 'neutral', t: "..." },
        { s: 'haechan', f: 'flustered', t: "I'm not moving it. It lives in the cracked one. It's used to the cracked one." },
        { n: "He put the new case in his pocket anyway, and kept his hand on it." }
      ] }
    ] },
    { ifFlag: 'route-S', then: [
      { n: "He'd been loud all day. He'd sung carols in the kitchen with the wrong words on purpose, and called Mitsuru *Hoejangnim* to her face over the cake, and she'd let him. Since the solstice the harbor had been coming up in him more and more, warm and rude and much too cheerful, the way a tide comes in, a little further every night." }
    ], else: [
      { ifFlag: 'route-R', then: [
        { n: "He'd been quiet all day. The good quiet, the dry one, the one that read the whole party from the stairs and said three words about it, all of them accurate. Since the solstice the campus had been coming up in him more and more, flat and certain, like snow settling on something until you could see its shape." }
      ] }
    ] },
    { s: 'haechan', f: 'sad', t: "Christmas was always somebody else's party. In both places. I just remember being cold." },
    { choose: [
      { t: "You're not cold now.", notes: 3, then: [
        { s: 'haechan', f: 'flustered', t: "Dryer's on. That's why." },
        { n: "It was not why. They both knew it was not why." }
      ] },
      { t: "(Put your head on his shoulder.)", notes: 3, then: [
        { n: "He went still for the first second, the way he always did, and then tipped his head down until his cheek was on her hair, and stayed." }
      ] }
    ] },
    { s: 'haechan', f: 'happy', t: "Merry Christmas, Solar." },
    { n: "In the morning it turned out he'd left the dryer running all night, and Mitsuru gave the speech." }
  ] }
});
