/* Haechan · ∞ The Universe. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Searcher, canon romance (Runners + strangers). One boy carrying two lives, the way Solar carries three: the flat, dry
   Recruitment Chair who hears rooms (Runners) and the loud, warm, reckless man the city calls the Lee house's dog (the house calls him son) who goes quiet when he's
   afraid (strangers). Both registers surface; neither world's plot moves. Every rank lets Solar lean one way or the other
   (tally haechan.R / haechan.S, plot doc §9, §12). His crossing (11/4, the laundry room, "...There you are.") is a story
   event; rank 1 is the first night after it. He awakens on 12/5 (story); ranks 6+ come after.
   Story ranks (Kat's ruling 2026-10-21): all ten are `forced`, like Wren's. Each plays on its date as story, in the late
   slot (storySlot; ranks 4 and 5 are evening scenes, rank `slot`), once his arrival has played (storyEvents). No meter:
   time with him between ranks is a hangout. Choices still decide romance or friendship (rank 8) and his lean.
   More of him lives in data/living-haechan-*.js (late nights, routines, run-ins, texts, holidays).
   The secret road (Hoax, "the unfated life"): the one world without him. Rank 7 has a variant for a player who let both
   charms ring on 12/12 (pull-no-xroad3: no memory taken); ranks 9 and 10 and the Christmas scene have route-H branches
   where he is the one who lets her choose (a6-unfated, story-act6.js, is that conversation).
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
       route-S directly. Other files may read the haechan-sure-* flags.
   Current canon: the Runners side assumes the state at about 11/22 (Kat's ruling 2026-10-27; FEMC-RUNNERS-SYNC-AUDIT.md):
   after camping, after he told her everything himself on 11/19 (she believes him; they aren't reconciled), heading home for
   Thanksgiving. His one unspoken thing is the track: her voice is in it (a stem she didn't know he kept). In the game the
   song stays untitled (Kat: he names it in canon, later), and the beats where it's finished owe her the truth. The jacket
   is in her bag, packed and never worn. strangers leaves off at Ch 65 (early February). strangers side: the Discman holds an old disc and its batteries have been dead for
   years (he never plays it; somebody gave it to him); he lives in the annex, ten meters from her door on paper; the
   Chairman calls him son now; he smokes Reds and is always quitting (Runners Haechan smokes too and isn't pretending to).
   Ranks 11-15 (Kat's ruling 2026-10-21: rank 15, "spread 15 story beats"): maxRank 15, all forced, late slot except 12
   (evening). 11 → 2/2 the hem (laundry room; Hyein, Hanni), 12 → 2/9 go long (riverside, evening; Jaehyun, Koromaru),
   13 → 2/16 seollal (kitchen; Jungwon, Yunjin), 14 → 2/23 the cut (lounge; Minji, Mark if a4-mark), 15 → 3/1 untitled
   (her door, then the roof; the capstone: he names nothing, she says what she'd call the song and he keeps it off the file, so it stays untitled). Every one branches on the locked route
   (ifHeading R / S / H / true, else stay) and on romance / friend (ifRoute). Each path's best answers come to 9 notes.
   Between ranks and after 15, time with him plays afterMax (one entry, 'silver papers', added for February). More of
   February lives in data/living-r15-haechan.js (afterRank 11-15, a late night, the 2/14 holiday). */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'haechan', name: 'Haechan', short: 'Haechan', arcana: 'Universe', numeral: '∞', from: 'Runners · strangers',
  kind: 'searcher', world: 'RS', romance: 'canon', maxRank: 15,
  starts: '11/4',
  forced: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], storySlot: 'late', storyEvents: ['a4-there-you-are'],
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
          { s: 'haechan', f: 'happy', t: "Wow. You did that to hurt me." },
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
      { s: 'haechan', f: 'flustered', t: "That's not mine." },
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
      // Yunjin finds out once (the routine haechan-yunjin-english, here, or her rank 8); each writes its own flag.
      { ifFlag: 'hc-english-day', then: [
        { s: 'yunjin', f: 'flustered', t: "I keep forgetting you do that. I'm going to keep forgetting. It's a choice." }
      ], else: [{ ifFlag: 'hc-english-r8', then: [
        { s: 'yunjin', f: 'flustered', t: "I keep forgetting you do that. I'm going to keep forgetting. It's a choice." }
      ], else: [
        { s: 'yunjin', f: 'surprised', t: "You don't speak English." },
        { s: 'haechan', f: 'neutral', t: "In one of them I don't. In the other one I sit through three lectures a week in it. Don't ask me which one of me is translating. I don't know either." },
        { flag: { 'hc-english-stairs': true } }
      ] }] },
      { s: 'yunjin', f: 'flustered', t: "...That's so unfair. That was a good insult. That was a really specific insult." },
      { choose: [
        { t: "What did she say?", notes: 2, then: [
          { s: 'haechan', f: 'happy', t: "That I've got cheekbones you could open mail with." },
          { s: 'yunjin', f: 'flustered', t: "That's not an insult. That's a fact. The insult was the second part." },
          { s: 'haechan', f: 'happy', t: "I know. I'm not repeating the second part. Your mother might hear it." }
        ] },
        { t: "(Hand Yunjin the whole bag.)", notes: 3, then: [
          { n: "She handed Yunjin the bag. Yunjin took it the way she took everything Solar gave her, without a thank-you, as if it had always been half hers anyway, and leaned back against Solar's shins, and stayed there." },
          { s: 'yunjin', f: 'neutral', t: "...See, this is what I mean. Look at her. She doesn't even know she does that." }
        ] },
        { t: "You two know each other well.", notes: 3, then: [
          { s: 'yunjin', f: 'neutral', t: "Babe, I've known this man since he was carrying my shopping bags with the wrong hand so he could keep his right one free. I know him like I know a parking ticket." },
          { s: 'haechan', f: 'happy', t: "Fondly." },
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
        { s: 'haechan', f: 'sad', t: "Stood at the bottom of the path for ten minutes. Didn't come up. Went back to the guesthouse. He's good at that. We both are. We've had a lot of practice." },
        { n: "He said it flat, every word set down like a coin on a counter, and didn't look at her. She sat down on the step beside him. The concrete was cold through her pajamas." },
        { choose: [
          { t: "You two were friends.", notes: 2, then: [
            { s: 'haechan', f: 'neutral', t: "Since we were kids. Don't." },
            { n: "He didn't say it unkindly. He said it like a man putting his hand over a cup so nobody could pour anything else into it." },
            { s: 'haechan', f: 'serious', t: "He kept something he should've burned. I found out a few days before I came here. That's all you get tonight." }
          ] },
          { t: "Do you want me to go and get him?", notes: 2, then: [
            { s: 'haechan', f: 'neutral', t: "No." },
            { s: 'haechan', f: 'sad', t: "...Ask me again in a year. Ask me somewhere I can walk out of." }
          ] },
          { t: "(Sit with him. Watch the gate too.)", notes: 3, then: [
            { n: "She watched the gate with him. Nobody came back to it. After a while he took a stick of cinnamon gum out of his pocket and broke it in half without looking and gave her the bigger half, and they sat there chewing in the cold like two people waiting for a bus that had stopped running years ago." }
          ] }
        ] }
      ], else: [
        { n: "He was on the front steps at midnight with his hood up and Koromaru sitting on his feet, the two of them looking down the path at the gate with the same expression, patient and unimpressed, like a pair of night guards who'd seen everything twice." },
        { s: 'haechan', f: 'happy', t: "Boss won't let me go in. I tried. He leaned." },
        { n: "Koromaru, hearing himself discussed, leaned harder. Haechan put one hand on the dog's head without looking, the way you'd rest your hand on a railing, and left it there." },
        { choose: [
          { t: "Boss?", notes: 2, then: [
            { s: 'haechan', f: 'neutral', t: "He runs the building. Everybody else just lives here. You can tell by who eats first." }
          ] },
          { t: "(Sit down on his other side.)", notes: 3, then: [
            { n: "She sat down on his other side. Koromaru looked at her, and at Haechan, and then, very deliberately, moved so his back half was on her feet and his front half was on his, and sighed, and closed his eyes, like a dog who had arranged things correctly at last." },
            { s: 'haechan', f: 'happy', t: "...Well. Now none of us can go in." }
          ] }
        ] }
      ] }
    ]
  ],
  ranks: [
    { after: '11/5', title: '1: the dryer', place: 'Iwatodai Dorm · Laundry Room', time: 'Late Night', music: 'night', scene: [
      { n: "The laundry room door was open. Solar stopped outside it with one hand on the frame, listening to the empty dryer turn. She knew who was in there before she looked, which was different from remembering him and still, somehow, enough to bring her downstairs." },
      { n: "It was a quarter to three, and she was back, because her legs had brought her here and she'd stopped arguing with her legs sometime around April." },
      { cg: 'romance-haechan-laundry' },
      { n: "He was on the dryer again. A black hoodie, sleeves shoved past the elbow, choppy dark hair in his eyes like he'd decided nobody was worth the effort of moving it, a pair of heavy black headphones around his neck with the cord coiled in his lap. The dryer was running with nothing in it. He'd decided, apparently, that it was the only warm thing in the building after midnight." },
      { n: "He lived here now, technically. Mitsuru had given him the empty room at the end of the top floor, the one with the radiator that knocked, and as far as Solar could tell he'd put his bag on the bed and not touched either of them since. He didn't come into the lounge. He ate standing up in the kitchen at hours when nobody else was in it. Hyein had already shouted his name across the breakfast table once and been stopped by Hanni's hand, and since then she'd taken to going very quiet and very pink whenever he walked past, which for Hyein was its own kind of shouting. Yunjin had met him on the stairs, stopped dead, said something under her breath in English that made Hanni snort, and kept going, and looked back twice. He'd nodded at all of them the way you nod at people across a party you've come to and have no intention of staying at." },
      { n: "He didn't say *there you are* this time. He didn't say anything. He looked at her for exactly as long as it took her to stop in the doorway, and then he looked at the other dryer, the cold one, and back at her, which was apparently an invitation." },
      { cg: null },
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
          { s: 'haechan', f: 'sad', t: "I know." },
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
      { s: 'haechan', f: 'neutral', t: "You saw them. Half that lounge said my name before I'd put my bag down. Your girls are going to keep saying it, at breakfast, at dinner, Yunjin probably with her mouth full, until something in you says it back." },
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
          { s: 'haechan', f: 'sad', t: "That's what everyone calls me. You can pick something else if you want." },
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
      { s: 'haechan', f: 'happy', t: "You're going to tell me you're not cold." },
      { s: 'solar', f: 'neutral', t: "I'm not cold." },
      { s: 'haechan', f: 'happy', t: "Mm. Proud of you for that one." },
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
      { s: 'haechan', f: 'neutral', t: "In the other one I'm not even pretending to quit. Same lungs. Different bad habits. Don't ask me how that works. I just live here." },
      { choose: [
        { t: "(Ask about the campus.)", notes: 2, tally: { 'haechan.R': 1 }, then: [
          { s: 'solar', f: 'neutral', t: "The ladder. Where does it go?" },
          { s: 'haechan', f: 'neutral', t: "Up." },
          { n: "He let that sit for a second, deadpan, and then, because he always told you when he'd aimed something, he added," },
          { s: 'haechan', f: 'happy', t: "Somewhere you can see the whole campus and nobody can see you. You thought it was the nerdiest thing about me. It's not. I've got worse." }
        ] },
        { t: "(Ask about the harbor.)", notes: 2, tally: { 'haechan.S': 1 }, then: [
          { s: 'solar', f: 'neutral', t: "The house on the hill. Do you live there?" },
          { s: 'haechan', f: 'happy', t: "I live in a shed at the bottom of your garden. Ten meters from your door. It's a rule. Somebody's mother made it." },
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
      { s: 'haechan', f: 'flustered', t: "Since I was fifteen. Don't look at it like that. It works." },
      { n: "The door banged. Hyein came in sideways in a pink fleece and fluffy slippers with an armful of something on hangers held up over her head like the train of a dress, already talking, about a seam, about the only plug in this building that didn't trip the fuse, and then she turned around and saw them, two people sitting on two dryers in the middle of the night, and stopped." },
      { s: 'hyein', f: 'surprised', t: "Oh my God." },
      { s: 'hyein', f: 'surprised', t: "Oh my GOD. At three in the morning? On the DRYERS? Sol, is this the— are you two—" },
      { s: 'haechan', f: 'neutral', t: "Hyein." },
      { n: "Just her name. Flat, quiet, the way you'd say the name of a dog standing on the edge of a pool. Hyein's mouth closed so fast her teeth clicked." },
      { s: 'hyein', f: 'flustered', t: "Nope. Nothing. Hanni says I'm not allowed to say anything until you remember it yourself, and I promised, on my sewing machine. I'm just a girl steaming a skirt at three in the morning, which is normal, and I didn't see anything, and I don't even know who you are." },
      { s: 'hyein', f: 'flustered', t: "...Hi, Haechan." },
      { n: "She steamed nothing. She backed out of the room the way she'd come in, hangers first, and the door swung shut, and through it, fading down the hall, they heard her say *oh my God* twice more, very quietly, to the skirt. Haechan looked at the door for a second with no expression at all and then looked at her." },
      { s: 'haechan', f: 'neutral', t: "She's going to tell Hanni." },
      { s: 'solar', f: 'flustered', t: "Tell her what?" },
      { s: 'haechan', f: 'neutral', t: "That's the thing. She knows exactly what. She's known it longer than you have." },
      { s: 'haechan', f: 'serious', t: "Mostly." },
      { n: "He opened the lid with his thumb. There was a disc in it, old, scratched pale at the edges, with a band's name on it she couldn't read upside down. He closed it again, carefully, the way you'd close the eyes of something, and handed her one of the earbuds anyway." },
      { choose: [
        { t: "(Put it in.)", notes: 3, then: [
          { n: "She put it in. He put in the other. The cord between them was short, so short she had to lean in until her shoulder was against his, warm through the hoodie, and he pressed play." },
          { n: "Nothing happened. Not a whir, not a click, not the little hiss of a laser looking. The batteries were dead. They'd been dead a long time; she could tell from the way he hadn't expected anything. They sat there with an earbud each, listening to a song that wasn't going to start, and it was the stupidest thing in the world, and her eyes stung." }
        ] },
        { t: "There's nothing in it.", notes: 2, then: [
          { s: 'haechan', f: 'sad', t: "There's something in it. There's nothing to play it with." },
          { s: 'haechan', f: 'neutral', t: "Put it in anyway." },
          { n: "She did. He pressed play, and nothing happened at all, and neither of them took the earbud out." }
        ] }
      ] },
      { n: "She knew this. Not the song. The Discman. A narrow room under a sloping roof, the eaves so low he had to duck to get into bed, three shirts on a rail, a carton of cigarettes on a shelf, and this, on the shelf beside them, and his thumb opening the cracked lid to show her the disc inside, as if it were the only thing in the room worth showing anyone. A band from before either of them could read. The batteries dead since a winter years ago. He'd never replaced them. He'd never thrown it away." },
      { fragment: 'strangers-discman' },
      { n: "The jade ring on Haenim's sash clicked. She heard it inside her own head, small and green, like a stone dropped into a bowl." },
      { s: 'haechan', f: 'surprised', t: "..." },
      { s: 'haechan', f: 'serious', t: "You heard that." },
      { s: 'solar', f: 'sad', t: "The batteries are dead. They've been dead for years. You never changed them." },
      { n: "His hand closed around the Discman so hard the cracked lid creaked. He didn't say yes. He didn't have to. His face did nothing at all, and she was learning that nothing was the loudest thing his face knew how to do." },
      { choose: [
        { t: "Why didn't you ever fix it?", notes: 3, tally: { 'haechan.S': 1 }, then: [
          { s: 'haechan', f: 'sad', t: "Because then I'd have to listen to it." },
          { s: 'haechan', f: 'sad', t: "Somebody gave it to me. It stays quiet till he's sitting next to me. Not before." }
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
      { s: 'haechan', f: 'flustered', t: "Sorry." },
      { s: 'haechan', f: 'neutral', t: "Habit. Nobody touches it. Nobody's ever asked." },
      { s: 'haechan', f: 'neutral', t: "In the other place I've got headphones that cost more than that dryer. Good ones. Closed-back. I don't listen to anything on them half the time. I just want the room to stop." },
      { s: 'haechan', f: 'neutral', t: "In this one I've got a Discman with dead batteries. Both of them do the same thing. That's the joke. I'm the same idiot in two outfits." },
      { choose: [
        { t: "Which one do you like better?", notes: 2, then: [
          { s: 'haechan', f: 'flustered', t: "The one you're holding." },
          { n: "He said it before he'd thought about it, and heard it, and looked away at the dryer window like it had said it instead of him." }
        ] },
        { t: "You're not an idiot.", notes: 2, then: [
          { s: 'haechan', f: 'happy', t: "Mm. You'd be the first person in either place to say that out loud." },
          { s: 'haechan', f: 'neutral', t: "You'd also be wrong. But it's nice. Say it again sometime when I've done something stupid." }
        ] }
      ] },
      { n: "She folded her own uniforms that night, badly, while he watched and said nothing, and when she was done he refolded exactly one, the top one, so it would sit flat in her drawer, and handed the pile back to her with the Discman on top of it." },
      { s: 'haechan', f: 'neutral', t: "Hold onto it tonight. I can't sleep with it in the room." },
      { n: "She didn't ask what that meant. It sat on her desk all night next to a can she still hadn't finished, and she lay in bed looking at it, and at some point she heard herself humming something she had never once heard come out of it." }
    ] },

    { after: '11/25', slot: 'evening', title: '4: duo queue', place: 'Paulownia Mall · Game Panic', time: 'Evening', music: 'city', scene: [
      { n: "Game Panic at eight on a weeknight was all noise and no air, every cabinet shouting its own song over every other cabinet's song, the carpet printed with planets that had been walked flat years ago, and Haechan was standing in front of the old two-player shooter in the back corner with his hands in his hoodie pocket like it had personally called him here." },
      { s: 'haechan', f: 'neutral', t: "Play with me." },
      { n: "It wasn't a question. He picked up the gun on the left without looking, the one with the long plastic scope taped onto the barrel, and she picked up the other one, the stubby one with the green button on the side that dropped health packs, and her hands went completely still on it for a second, the way your hands go still on a doorknob in a house you grew up in." },
      { s: 'haechan', f: 'surprised', t: "...You picked support." },
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
          { s: 'haechan', f: 'happy', t: "Sure, sweetheart." }
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
      { s: 'solar', f: 'surprised', t: "You did that like you'd done it before." },
      { s: 'haechan', f: 'neutral', t: "I've done it about four hundred times. You never look." },
      { n: "At the crossing they waited for the light with the whole of Paulownia's neon at their backs, and he stood with his shoulder an inch from hers, and said, to the traffic, apropos of nothing, that there was a woman who'd started turning up around the dorm with blue skin and a French accent, and that she looked at him across the lounge like she was lining up a shot." },
      { s: 'haechan', f: 'neutral', t: "I play her. At home. I've played her for years. Sniper. Hook. She's the best in the game if you're patient and the worst if you're not." },
      { s: 'haechan', f: 'flustered', t: "I'm not telling her that. I'm not telling her I've spent four hundred hours as her. She'd kill me. She'd be right." },
      { choose: [
        { t: "And I play the fox girl with the bells.", notes: 3, tally: { 'haechan.R': 1 }, then: [
          { s: 'haechan', f: 'surprised', t: "..." },
          { s: 'haechan', f: 'neutral', t: "Yeah. You do. You throw a bell at whoever's about to die. You always wait until they're sure they're going to." },
          { s: 'haechan', f: 'happy', t: "It's the cruelest heal in the game. You love it." }
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

    { after: '12/1', slot: 'evening', title: '5: it fits you better', place: 'Iwatodai Station · Platform', time: 'Evening', music: 'night', scene: [
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
      { s: 'haechan', f: 'flustered', t: "Forget it. I say that too much. It's a bad habit." },
      { s: 'solar', f: 'flustered', t: "I always forget my umbrella." },
      { s: 'haechan', f: 'neutral', t: "You always forget your coat. In both of them. You'll stand on a pier in November in a blouse to make a point." },
      { s: 'haechan', f: 'neutral', t: "It's the one thing you're the same about everywhere. The face changes. The name changes. You forget your coat." },
      { n: "She laughed, because it was absurd, and then didn't, because he wasn't joking, and because some part of her that wasn't standing on this platform was nodding, tired and exasperated, like someone who'd been told the same thing by a hundred people and had decided a long time ago that being cold was cheaper than listening." },
      { choose: [
        { t: "There's a jacket. At the bottom of a bag.", notes: 3, tally: { 'haechan.R': 1 }, then: [
          { n: "It wasn't a decision to say it. It came up the way the four notes of a song come up when someone hums the first three. A bag. A dark jacket folded at the very bottom of it, under everything, packed and carried somewhere and carried back and never once worn, kept from somebody, and the smell of it every time she unzipped it." },
          { s: 'haechan', f: 'surprised', t: "..." },
          { s: 'haechan', f: 'serious', t: "Yeah." },
          { s: 'haechan', f: 'serious', t: "...In a bag. You packed it. Of course you packed it." },
          { s: 'haechan', f: 'neutral', t: "I said I'd bring you a better one. Next time. I haven't. That's still owed." },
          { n: "She didn't know a better what. He didn't explain. He looked at the rain coming off the platform roof like he was checking how far off the next time was." }
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

    { after: '12/8', title: '6: eat, you didn\'t eat', place: 'Iwatodai Dorm · Kitchen', time: 'Late Night', music: 'tender', scene: [
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
      { s: 'haechan', f: 'happy', t: "...Fine. One noodle. Don't tell Ken. He's got a whole chart about what you're allowed." },
      { n: "He held a single noodle down at arm's length like a man defusing something, and Koromaru took it with enormous delicacy and then lay down across both of Haechan's feet and stayed there, pinning him to the kitchen floor, a warm white weight, and Haechan let him, and the shaking in his hands went the rest of the way out." },
      { s: 'haechan', f: 'serious', t: "It tried to take you." },
      { s: 'haechan', f: 'sad', t: "In there. Not you, you. My you. The one in my head. It was taking you out of me a piece at a time, the way you take a song apart in a mix. The rooftop. The harbor. The way you say my name when you're furious." },
      { s: 'haechan', f: 'neutral', t: "It said I'd sleep better. It said I'd finally be able to sleep." },
      { n: "He laughed, flat, the scraping kind, and wiped his mouth on the back of his wrist." },
      { s: 'haechan', f: 'sad', t: "I told it I'd rather not sleep. I'm used to it." },
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

    { after: '12/13', title: '7: full sun', place: 'Iwatodai Dorm · Rooftop', time: 'Night', music: 'sun', scene: [
      { n: "December had come in clear and hard. The sky over the bay was the deep cold blue of something that had been scrubbed, and every light in Port Island sat sharp on the water instead of blurring, and the rooftop door had frozen a little in its frame so she had to shoulder it." },
      { ifFlag: 'xroad3-R', then: [
        { n: "The brick was there again. Two nights running. The first time, last night, when the city put its lights up, a bell had sent her up here alone, and she'd found a can on the railing and a whole other roof inside her head, and heard somebody climb the stairs behind her and stop outside this door for a long moment and go away again without opening it." },
        { n: "Tonight he was on her side of the door. He'd put the brick there himself, and he was at the railing with his hood down, and he didn't turn around." },
        { s: 'haechan', f: 'neutral', t: "That was me. Last night. On the stairs." },
        { s: 'haechan', f: 'serious', t: "You were remembering something. You don't walk in on somebody remembering. You'd have thrown the can at me." },
        { choose: [
          { t: "You talked about rooms. The bass and the kick.", notes: 3, tally: { 'haechan.R': 1 }, then: [
            { s: 'haechan', f: 'surprised', t: "..." },
            { s: 'haechan', f: 'flustered', t: "You told me that was the nerdiest thing I'd ever said." },
            { s: 'solar', f: 'happy', t: "It is." },
            { s: 'haechan', f: 'neutral', t: "Yeah. You said you should've recorded it. Pipe down." }
          ] },
          { t: "Keep it on the rooftop.", notes: 3, then: [
            { n: "It came out in her own voice and in his cadence, a line with the shape of an old agreement, and he went so still that the wind moved his hair and nothing else on him moved at all." },
            { s: 'haechan', f: 'serious', t: "...It's not worth mentioning." },
            { s: 'solar', f: 'neutral', t: "That's what you said." },
            { s: 'haechan', f: 'happy', t: "God. You're such a nerd." }
          ] }
        ] }
      ], else: [
        { ifFlag: 'pull-no-xroad3', then: [
          { n: "He'd propped it open behind her with a brick. That was new. She looked at the brick, and at the hand's width of warm stairwell air it held open into the cold, and felt the thing start in her that always started now, the floor of her going soft, a ladder, cold rungs, a different roof." },
          { n: "She let it go by. She'd done it last night too, when both charms rang at once in the lounge and she'd put on her shoes and gone out the front door instead of up or down, into the ordinary lights of the street. It was like letting a train pass at a station you knew wasn't yours. The memory slowed, and waited, and went on without her." },
          { s: 'haechan', f: 'neutral', t: "...You didn't take it." },
          { n: "He wasn't looking at her. He was looking at the brick, the way he'd look at a mixing desk with one fader pulled all the way down, interested, not offended." },
          { s: 'haechan', f: 'neutral', t: "Last night too. Both of them rang and you went out the front. I heard the door. I thought you'd forgotten something at the konbini." },
          { s: 'haechan', f: 'serious', t: "You hadn't forgotten anything." },
          { choose: [
            { t: "I wanted to see where I'd go if nothing was pulling.", notes: 3, then: [
              { s: 'haechan', f: 'surprised', t: "..." },
              { s: 'haechan', f: 'neutral', t: "And?" },
              { s: 'solar', f: 'neutral', t: "Toward the station. Somebody was yelling about ice cream." },
              { n: "He laughed through his nose, once, flat, and it didn't sound hurt. It sounded like a man who'd been told a song he'd written had been covered by a band he couldn't stand, and that it was good." }
            ] },
            { t: "(Don't explain. Hand him the coffee.)", notes: 2, then: [
              { n: "She held out a can. He took it. Neither of them said anything about the brick, and he didn't kick it out of the door, either, and she understood he was leaving it there for her the way you leave a light on, not to make anybody come home, just so they can see the step." }
            ] }
          ] }
        ], else: [
        { n: "He'd propped it open behind her with a brick. That was new. She looked at the brick and at him and at the gap the brick held, a hand's width of warm stairwell air leaking out into the cold, and something went through her that had nothing to do with the cold at all." },
        { n: "A different way up. A ladder bolted to brick, cold metal biting her palms rung after rung. A different roof, the ledge under her legs, wind in her face that smelled of leaves instead of salt, and a boy's voice somewhere to her left, saying a thing about rooms, about hearing them, about how the bass eats the kick, the vocal's too dry, all the things that make people feel without knowing why. And under it, the clink of a can against concrete." },
        { fragment: 'runners-rooftop' },
        { n: "The bell on Haenim's sash rang once, so clear she turned her head to look for it." },
        { s: 'haechan', f: 'neutral', t: "...That's the ladder." },
        { s: 'haechan', f: 'serious', t: "You remembered the ladder. Of all the things." },
        { choose: [
          { t: "You talked about rooms. The bass and the kick.", notes: 3, tally: { 'haechan.R': 1 }, then: [
            { s: 'haechan', f: 'surprised', t: "..." },
            { s: 'haechan', f: 'flustered', t: "You told me that was the nerdiest thing I'd ever said." },
            { s: 'solar', f: 'happy', t: "It is." },
            { s: 'haechan', f: 'neutral', t: "Yeah. You said you should've recorded it. Pipe down." }
          ] },
          { t: "Keep it on the rooftop.", notes: 3, then: [
            { n: "She didn't know where it came from. It came out in her own voice and in his cadence, a line with the shape of an old agreement, and he went so still that the wind moved his hair and nothing else on him moved at all." },
            { s: 'haechan', f: 'serious', t: "...It's not worth mentioning." },
            { s: 'solar', f: 'neutral', t: "That's what you said." },
            { s: 'haechan', f: 'happy', t: "God. You're such a nerd." }
          ] }
        ] }
      ] }
      ] },
      { n: "She'd brought two cans of hot coffee from the machine downstairs. He took one without saying thank you, which she had come to understand was how he said thank you, and cracked it, and grimaced at the first sip like it had betrayed him, and kept drinking it." },
      { s: 'haechan', f: 'neutral', t: "This is so bad. Somebody brewed this in a factory in a different decade and it's been waiting for me." },
      { s: 'solar', f: 'neutral', t: "You're a coffee person." },
      { s: 'haechan', f: 'flustered', t: "Drop it." },
      { n: "She didn't drop it. She smiled into her own can and he saw her do it and looked away at the water with the expression of a man who has been caught at something extremely minor and would rather have been caught at something worse." },
      { ifFlag: 'xroad3-S', then: [
        { s: 'haechan', f: 'neutral', t: "You went down. Last night. When the lights went up. You went down instead of up." },
        { s: 'haechan', f: 'happy', t: "Somebody made sea bream for two at midnight and then didn't sit down to eat it. I know who. I'm not going to say his name on a nice roof. It'd make him too happy." },
        { n: "He said it loud and cheerful, the way he'd say something rude to an old man at a restaurant to make him laugh, and then the cheer ran out of it all at once, and he drank his terrible coffee, and didn't say anything else about the kitchen at all." }
      ] },
      { s: 'haechan', f: 'neutral', t: "You know what Haechan means?" },
      { s: 'haechan', f: 'neutral', t: "Full sun. Somebody gave it to me. I came in on a boat at dawn and a man was standing on the dock with his hands in his coat, and the sun came up behind me, and he looked at me like I was a problem he'd decided to keep." },
      { s: 'haechan', f: 'serious', t: "Very bright. Hurts to look at. That's what I tell people. They think it's a joke." },
      { s: 'haechan', f: 'happy', t: "And you're Solar. The sun, again. No wonder it's so bright when you're around. Two of us in one place. Somebody should've checked the weather." },
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
      { ifFlag: 'xroad3-S', then: [
        { s: 'haechan', f: 'serious', t: "I'm not the good one. In either place. Over there you know all of it. You heard it in order, from me, and you stayed." },
        { s: 'haechan', f: 'serious', t: "I'm not handing it back to you on a roof where you can't walk out. So don't decide anything about me because I fold your socks." }
      ], else: [
        { s: 'haechan', f: 'serious', t: "I'm not the good one. In either place. In the one with the snow you already know why. I told you myself, all of it, in order, a few days before you fell through. You believed me. That's not the same as being done, and we weren't." },
        { s: 'haechan', f: 'serious', t: "I'm not making you hear it twice. Not here, where you can't walk out of it. There's one thing I didn't tell you, though. It's not about anybody else. It's mine, and it's yours, and I owe it to you over there. So don't decide anything about me because I fold your socks." }
      ] },
      { n: "He said it like he was waiting to be told to leave." },
      { choose: [
        { t: "Then I'll decide when I'm home.", notes: 3, then: [
          { s: 'haechan', f: 'neutral', t: "...Yeah." },
          { s: 'haechan', f: 'sad', t: "That's fair. That's the most fair thing anyone's said to me in a year." },
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
      { s: 'mitsuru', f: 'surprised', t: "...Carry on." },
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
      { s: 'solar', f: 'surprised', t: "Donghyuck." },
      { n: "The dryer kept turning. The light kept humming its flat E. Nothing else in the room moved. He didn't breathe. She watched him not breathe for so long she started to count it, one, two, and at five he let it out all at once, slow, like he'd been holding it since November." },
      { s: 'haechan', f: 'serious', t: "...Who told you that." },
      { s: 'solar', f: 'neutral', t: "Nobody." },
      { s: 'haechan', f: 'sad', t: "Nobody here calls me that." },
      { n: "His voice cracked down the middle of *nobody*, very small, so small it could have been the light flickering, and he heard it and his jaw locked." },
      { s: 'haechan', f: 'sad', t: "In one of them hyung called me that. Then for a while the people who wanted me dead did. Then you took it back off them, all on your own. In the other one it's what I gave you, and then you went and took a shorter one off somebody. Same name. You're the only one who ever said either like it was a present." },
      { s: 'haechan', f: 'serious', t: "I didn't give it to you here. I didn't. I was waiting to see if it'd come back on its own." },
      { s: 'haechan', f: 'flustered', t: "...Say it again." },
      // Honest and torn (crush batch, 2026-10-23): she's with someone else. The choice stays hers; the scene doesn't pretend.
      { ifTaken: 'haechan', then: [
        { ifCrush: { akihiko: 'dating' }, then: [
          { n: "Two floors up Akihiko was asleep, with his alarm set for half past four and his running shoes lined up by the door, and she loved him. That had never once been the question, not on the roof, not on the stairs, not here. She knew exactly what she was holding, and whose, and that whatever she did with this next, he would hear it from her own mouth, in daylight, before he heard it anywhere else." }
        ], else: [
          { n: "Somewhere in this city someone she had chosen was asleep, and she loved them, and that had never been the question. Whatever she did with this next, they would hear it from her, in daylight, with her face." }
        ] },
        { n: "Haechan knew. He didn't say so. He waited, the way he'd waited since November, and didn't make it any easier, because making it easier would have been deciding for her." }
      ] },
      { route: [
        { t: "(Say it again. Then kiss him.)", route: 'romance', notes: 3, then: [
          { s: 'solar', f: 'flustered', t: "Donghyuck." },
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
      { n: "January, and the coldest night of the year so far. The new year had come and gone at the shrine with everyone she'd somehow collected crammed onto the steps in borrowed scarves, and now the year planner on the lounge wall, the big school one with April to March on a single sheet, had a red ring around the first weekend of March that nobody had drawn and nobody would admit to." },
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
        { s: 'haechan', f: 'flustered', t: "...Pretty girl." },
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
          { s: 'haechan', f: 'happy', t: "And Hoejangnim in the car singing the wrong words to a song older than both of us, and me singing the right ones louder to make him mad. He calls me son now. Out loud, in front of people, like it's nothing. I still don't know what to do with my hands when he does it. And you on the pier in November in a blouse, to make a point." },
          { n: "He said it loud. He said it like it was the funniest thing in the world, and then, for once, he didn't stop all at once the way he always had, radio switched off mid-song. He just kept going, warm and easy and much too loud for a rooftop at midnight, until somewhere below them a window went up and Junpei yelled something about people trying to sleep, and Haechan yelled back an apology so cheerful it was clearly an insult." },
          { s: 'haechan', f: 'neutral', t: "That's the one. That's where we live. I knew it when I woke up. Ten meters from your door, on paper. It's a rule. Somebody's mother made it. Nobody's measured in a while." },
          { s: 'haechan', f: 'serious', t: "I've still got the other one. Every brick of it. The ladder. The lab window. Don't look at me like I lost something. I didn't lose anything. I just know which door's mine now." },
          { n: "He reached into the blanket and came out with a can of coffee, the cheap sweet kind from the machine downstairs, still hot, and put it in her hands and closed her fingers round it with his own." },
          { s: 'haechan', f: 'happy', t: "Your kind. The bad kind. I bought the row." },
          { s: 'haechan', f: 'neutral', t: "...Solar." },
          { n: "Not agasshi. Not anything with a fight in it. He'd said her name before, once, at the bottom of a staircase, like something that had slipped. This didn't slip. He said it on purpose, first, and let her watch him do it, the name he'd kept for emergencies for seven years, until one winter he'd stopped keeping it." },
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
            { ifFlag: 'route-H', then: [
              { s: 'haechan', f: 'neutral', t: "Neither. That's the funny part. Both of mine went quiet at the same time, like two radios in two rooms somebody switched off from the hall." },
              { s: 'haechan', f: 'neutral', t: "I dreamed a gym. Plastic chairs. Balloons nobody finished blowing up. A dog barking at a door, delighted, and a girl in a blazer with an armband on it laughing at something somebody short said. I wasn't in it. I was the one watching from the window, and I didn't mind. That's how I knew it wasn't mine." },
              { n: "He said it in neither voice. Not the dry one, not the loud one. Something in between that she'd never heard him use, quiet and level, the voice you'd use to read somebody their own name off a list to make sure you'd spelled it right." },
              { s: 'haechan', f: 'serious', t: "I told you on the roof. After the station. I'll say it once more and then I'm done, because if I say it three times it turns into a speech." },
              { s: 'haechan', f: 'neutral', t: "I've been pulled at you my whole life. Twice. Two lives, both of them bent toward the same girl like a plant on a windowsill. Nobody asked me. Nobody asked you. Being pulled at somebody isn't the same as being tied to them. You're the first person I've ever watched work that out." },
              { s: 'haechan', f: 'neutral', t: "So go somewhere nobody arranged. I mean it. I'm the only one here who knows exactly what it costs to say that, so it counts double." },
              { choose: [
                { t: "You're not angry.", notes: 2, then: [
                  { s: 'haechan', f: 'neutral', t: "I'm furious. Not at you. At the weather. At whoever decided two suns was a good idea." },
                  { s: 'haechan', f: 'happy', t: "...It's fine. I'll get over it in about forty years. I'm fast." }
                ] },
                { t: "(Find his hand inside the blanket.)", notes: 3, then: [
                  { n: "She found his hand. He held on, and didn't pull, which on him was the whole sentence. After a while his thumb moved once over her knuckles, the way you'd smooth a page flat before you closed the book on it." }
                ] },
                { t: "Bring two cans anyway. If you ever end up at a gym.", notes: 3, then: [
                  { s: 'haechan', f: 'happy', t: "I'll bring the wrong ones. Peach. Your president can have the second." },
                  { s: 'haechan', f: 'neutral', t: "...I'm joking. I'd never give him a can." }
                ] }
              ] }
            ], else: [
            { s: 'haechan', f: 'neutral', t: "Both. Still both. I keep waiting for one of them to go quiet, and neither of them will." },
            { s: 'haechan', f: 'serious', t: "Neither of them is where you're going. I worked that out on the platform. I'm not going to make that your problem." },
            { s: 'haechan', f: 'sad', t: "I'll go home to whichever one wakes me up first. And I'll be up somewhere high, a roof, a hill, whichever, and you'll be somewhere I'm not." },
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
      { n: "On the way down he stopped on the landing and looked at the red ring on the planner through the lounge door, and then at her, and didn't say anything about it, and neither did she. Some things were for later. He'd taught her that without saying it, the way he'd taught her everything." }
    ] },

    { after: '1/23', title: '10: the universe', place: 'Iwatodai Dorm · Laundry Room', time: 'Late Night', music: 'tender', scene: [
      { n: "Six weeks left. The dorm knew it. Junpei had started taking photos of things that didn't need photographing, the lounge sofa, the rice cooker, Koromaru asleep with one ear inside out. Yukari had cried at a commercial. Mitsuru had read the same page of a report four times, and Solar had watched her do it, and said nothing, and loved her for it." },
      { n: "The laundry room light had stopped flickering. That was the first strange thing. Somebody had fixed it, or the building had, sometime in the last week, and now it was just a light, flat and white and ordinary, and the room looked smaller under it, the way rooms do when you've already started leaving them." },
      { n: "He was on the dryer with a laptop on his knees. She didn't know where the laptop had come from. He refused, every time she asked, to explain it, and she'd stopped asking because the refusal had started to sound like a joke they both liked." },
      { n: "On the way down she'd passed the lounge. Hanni and Hyein were asleep on the sofa under one blanket with a fashion magazine open over both their faces. Jihoon was teaching Ken pilates on the carpet in an extremely loud whisper, which was not why he'd walked over from the guesthouse and was now apparently why he was staying. Jungwon was at the dining table alone with a cup of tea and his watch off, lying face up beside the cup, and he looked up when she passed the doorway, and inclined his head, polite, and looked back down. Half of them didn't live here. None of them had gone home. The whole impossible household, awake at one in the morning and pretending not to be, because there were six weeks left and nobody wanted to sleep through any of them." },
      { n: "She'd stood in the lounge doorway too long. She'd counted them. She did that now. Every night, a little before she went down, she counted everyone, the way you count the things in a bag before you leave a hotel." },
      { s: 'haechan', f: 'neutral', t: "Sit. Don't say anything for four minutes. I'll know." },
      { n: "He handed her one side of the headphones. The heavy black ones. They were warm from his neck." },
      { n: "It was a song. She'd known it would be. She hadn't known it would be this song." },
      { n: "The gate chime at Iwatodai Station. The hiss of the monorail doors. The laundry room's light, flat, an E, humming under everything like a floor. Rain on the platform roof. The rooftop door's long iron sigh, and the scrape of the brick that held it open. A dryer turning. And over all of it, laid in so carefully she almost didn't hear the seam, the four minutes of the song she'd been humming since April without knowing where she'd first heard it, the one that had always felt like it belonged to some other version of her life." },
      { n: "It was his. It had always been his. In one place it was a track on a laptop, unfinished, in a room at the top of a very loud house. In the other there was no track at all, only a cracked silver Discman with somebody else's songs in it, and a boy who sang trot badly so he wouldn't have to think. Here, it was finished." },
      { s: 'haechan', f: 'flustered', t: "I've been making it a long time. In both of them. It always ends up being about the same person." },
      { s: 'haechan', f: 'neutral', t: "I guess it found you before I did. That tracks." },
      { n: "Somewhere under the middle of it, so far down in the mix it might have been a synth or a room or somebody breathing, there was something she couldn't name, and she felt him watch her not name it." },
      { s: 'haechan', f: 'serious', t: "There's one thing in it that isn't mine. I owe you the truth about that one. I'm going to pay it. Not tonight. Not on a dryer, where you can't throw anything." },
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
        { s: 'haechan', f: 'neutral', t: "When the hour ends I know where I'm going to be. Cold. A pink house with a light on. I'll find you, and you'll have no idea who I am for about five minutes, and then you'll tell me to go to hell." },
        { s: 'haechan', f: 'serious', t: "You believed me, last time. Over there. We weren't done. We're still not." }
      ], else: [
        { ifFlag: 'haechan-sure-S', then: [
          { s: 'haechan', f: 'neutral', t: "When the hour ends I know where I'm going to be. The bottom of your garden, low tide, too early. You'll have no idea who I am for about five minutes, and then you'll call me something you're not supposed to call me in company." }
        ], else: [
          { ifFlag: 'haechan-sure-both', then: [
            { s: 'haechan', f: 'neutral', t: "When the hour ends I'm going to be in two places at once, and so are you, and for once that's the whole plan. I'll find you in both. You'll tell me to go to hell in both. In two accents." }
          ], else: [
            { ifFlag: 'route-H', then: [
              { s: 'haechan', f: 'sad', t: "When the hour ends I'll wake up in one of mine. I don't know which yet. Doesn't matter. You'll be somewhere neither of them goes." },
              { s: 'haechan', f: 'serious', t: "I'm not going to come looking. That's the deal. That was always going to be the deal. It's a good one. I checked it twice, like the vending machine." }
            ], else: [
            { s: 'haechan', f: 'neutral', t: "When the hour ends I don't know where I'm going to be." },
            { s: 'haechan', f: 'serious', t: "But I'll find you. I always do. Some laundry room. Some roof. Some hallway at a party that goes on too long. I'll find you, and you'll have no idea who I am for about five minutes, and then you'll tell me to go to hell." }
            ] }
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
          { s: 'haechan', f: 'happy', t: "Mm. Proud of you for that one, sweetheart." },
          { n: "And then, after a while, when the song had gone round again and the dryer had finished and neither of them had moved," },
          { s: 'haechan', f: 'neutral', t: "...Solar." }
        ] },
        { t: "(Laugh. Cry. Both.)", notes: 3, then: [
          { n: "She laughed so hard she cried, or cried so hard she laughed, she was never afterward sure which. He didn't do anything about it. He just sat there and let her, holding her hand on top of a dryer in a room with an ordinary light, and when it was over he said her name, plain, like a man reading the only word on a page." },
          { s: 'haechan', f: 'neutral', t: "Solar." }
        ] }
      ] },
      { n: "She went to bed at five with the headphones still around her neck, his, warm, and lay in the dark listening to the building, and for once in her life she wasn't waiting for anything. Up the stairs, at the end of the top floor, in a room he'd finally started sleeping in, somebody was awake, listening to it too." }
    ] },

    { after: '2/2', title: '11: the hem', place: 'Iwatodai Dorm · Laundry Room', time: 'Late Night', music: 'tender', scene: [
      { n: "February had come in like a door somebody had left open. The cold got into the dorm through every gap the building had been hiding since April, under the doors and round the window frames and up through the laundry room tiles so they bit through her slippers, and at two in the morning, coming down the last flight with her hands pulled up into her sleeves, she heard the sewing machine before she heard anything else." },
      { n: "Hyein was at the folding table in her pink fleece with the hood up, hunched over a machine Solar had never seen before, plugged into the one socket in the building that didn't trip the fuse, feeding something dark and heavy under the needle in short furious bursts. And on top of the dryer, sitting very straight, both arms held out in front of him with a great fall of charcoal wool draped across them like the train of a dress, was Haechan." },
      { s: 'haechan', f: 'neutral', t: "Don't laugh. If it touches the floor she says she'll kill me. I believe her." },
      { s: 'hyein', f: 'serious', t: "I WILL kill him. That's Italian wool. That's the end of a bolt from the fabric place by the river, and the man there nearly cried when I bought it. Sol. SOL. Perfect. You're perfect. Stand there. Arms out." },
      { n: "She stood there with her arms out. Hyein came round the table with pins in her mouth and a tape measure round her neck and threw the wool over Solar's shoulders, and it wasn't a bolt of fabric at all, it was a coat, nearly, long and dark and sleeveless, its seams still basted in loose white thread, and the weight of it settled on her like somebody's hands." },
      { s: 'hyein', f: 'neutral', t: "He said it at dinner on Sunday. To Junpei, about the weather. *She forgets her coat. In every place. It's the one thing she's the same about everywhere.*" },
      { s: 'hyein', f: 'serious', t: "So I thought, fine. Then I'll make one that's the same everywhere. That's just physics." },
      { s: 'haechan', f: 'neutral', t: "That isn't physics." },
      { s: 'hyein', f: 'serious', t: "It's FASHION physics. Hold the sleeve up. Not like that. Like it owes you money." },
      { choose: [
        { t: "(Hold still. Let Hyein pin it.)", notes: 3, then: [
          { n: "She held still. Hyein worked round her with her lips full of pins, tugging, folding, muttering numbers under her breath, and every so often she stepped back and looked at Solar in the coat with her head on one side and her eyes going bright, and then said *no* to something only she could see and went back in." },
          { n: "Haechan watched the whole thing from the dryer with the sleeve across his arms and nothing on his face, and when Hyein turned the collar up under Solar's jaw and pinned it there, he looked away at the wall, quickly, as if it had said his name." }
        ] },
        { t: "Hyein. It's two in the morning.", notes: 2, then: [
          { s: 'hyein', f: 'serious', t: "It's two in the morning for YOU. For me it's a deadline." },
          { s: 'haechan', f: 'neutral', t: "She's been down here since ten. I came to put the dryer on and got drafted." },
          { s: 'hyein', f: 'happy', t: "Volunteered." },
          { s: 'haechan', f: 'neutral', t: "Drafted." }
        ] },
        { t: "(Look at Haechan, who is very carefully not looking at you.)", notes: 3, then: [
          { n: "He was looking at the sleeve on his arms, at its white basting stitches, as if he'd been handed it to proofread. He felt her looking. She watched him feel it. His jaw shifted once, the small sideways move, and he went on proofreading a sleeve." },
          { s: 'haechan', f: 'flustered', t: "Eyes front. You'll make her pin you crooked." }
        ] }
      ] },
      { ifHeading: 'R', then: [
        { s: 'hyein', f: 'happy', t: "It's for Syracuse. Obviously. I looked it up, it gets to minus twelve on the quad in February, and in November you walked to the house in a blazer and told me it was *a look*." },
        { s: 'hyein', f: 'serious', t: "It was not a look. It was hypothermia with a belt." },
        { n: "Something went through her at the word, quad, a brick path under snow nobody had walked on yet and the cold of it at the back of her throat, and under that, sharper, a bag. A dark jacket folded at the very bottom of it, under everything, packed and never worn, and the smell of it every time she unzipped it." },
        { s: 'haechan', f: 'neutral', t: "She'll pack it and never wear it." },
        { s: 'hyein', f: 'surprised', t: "She will NOT. Why would she, what's she packing and not—" },
        { s: 'hyein', f: 'flustered', t: "...Nope. Hanni rule. I'm not asking. I'm not asking about the bag." },
        { s: 'haechan', f: 'neutral', t: "Good. It's a very boring bag." },
        { choose: [
          { t: "Make the pockets deep. Deep enough for a can.", notes: 3, then: [
            { s: 'hyein', f: 'surprised', t: "A CAN?" },
            { s: 'haechan', f: 'neutral', t: "Pink one. Tall. They don't fit in normal pockets. I ruined a lot of pockets finding that out." },
            { n: "Hyein looked from him to Solar and back, slowly, and then, without a word, took the pocket pattern off the table and drew it again, two inches longer, and pressed so hard the pencil went through the paper." }
          ] },
          { t: "I'll wear it. I promise. Even indoors.", notes: 3, then: [
            { s: 'hyein', f: 'happy', t: "Indoors is a crime. But I accept." },
            { s: 'haechan', f: 'sad', t: "She'll wear it twice, princess or not, and then it'll live on a chair. I'll walk past the chair. I'll know." }
          ] }
        ] }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'hyein', f: 'sad', t: "It's not for Syracuse." },
        { n: "She said it to the pins. She'd been saying it to herself all night, Solar thought, from the way it came out, worn down at the corners like something handled too often." },
        { s: 'hyein', f: 'neutral', t: "It's for the other one. The pier. He says you stand on a pier in November in a blouse to make a point, and I'm not going to be there to yell at you, so the coat has to do the yelling." },
        { s: 'haechan', f: 'happy', t: "Wool's right. The wind off the water goes straight through anything thinner. Make the collar higher. Higher. She tucks her chin when she's angry, it needs somewhere to go." },
        { n: "He said it loud and warm, leaning off the dryer with the sleeve still held up off the floor like a man who'd been holding things up off floors his whole life, and Hyein looked up at him with her mouth full of pins." },
        { s: 'hyein', f: 'surprised', t: "Since when do you know anything about collars?" },
        { s: 'haechan', f: 'happy', t: "A woman in a shop at the bottom of the hill measured me for a suit once. She hit me with the tape twice. I listened." },
        { choose: [
          { t: "Higher collar. He's right.", notes: 3, then: [
            { s: 'hyein', f: 'serious', t: "Ugh. Fine. He IS right. Don't tell him." },
            { s: 'haechan', f: 'happy', t: "I'm right here." },
            { s: 'hyein', f: 'serious', t: "Then don't tell him LOUDER." }
          ] },
          { t: "Hyein. Come and see me wear it.", notes: 2, then: [
            { s: 'hyein', f: 'sad', t: "Through what door, Sol?" },
            { n: "Nobody had an answer to that. Hyein pinned the collar two fingers higher, exactly where he'd said, and didn't look up again for a while, and Haechan, on the dryer, held the sleeve very still." }
          ] }
        ] }
      ], else: [{ ifHeading: 'H', then: [
        { s: 'hyein', f: 'neutral', t: "It's for the third one. The star one. I asked the tall one what they wear over there and he said *a blazer and an attitude*, so it's a coat that goes over a blazer. With room for the attitude." },
        { n: "She'd sewn the lining in already, a pale silver-gray, and in the corner of it by the inside pocket, small, stitched in white, a single five-pointed star. Solar's fingers found it without looking, the way they kept finding the shape of a pin in her blazer pocket that wasn't there." },
        { s: 'haechan', f: 'neutral', t: "That was me. The star. She asked what to put there. I said a star." },
        { s: 'hyein', f: 'serious', t: "He said it like he was paying a bill." },
        { s: 'haechan', f: 'sad', t: "I was. It's fine. It's paid." },
        { n: "He said it in the in-between voice he'd had since the station, not flat and not loud, the voice of somebody who'd worked out exactly what a thing cost and paid it, and wanted her to see the receipt so she'd know it was handled. He'd meant every word of it. He'd aimed it at the sleeve so she wouldn't have to catch it." },
        { choose: [
          { t: "(Touch the star. Leave your hand on it.)", notes: 3, then: [
            { n: "She left her hand on it. Hyein went quiet. Haechan looked at her hand on the lining for one long second and then nodded once, small, the way you'd nod at a mixing desk when a level finally sat where it should." }
          ] },
          { t: "You didn't have to.", notes: 2, then: [
            { s: 'haechan', f: 'neutral', t: "I know. That's why it counts. Things you have to do don't count. Ask Mitsuru. She has a chart." }
          ] }
        ] }
      ], else: [{ ifHeading: 'true', then: [
        { s: 'hyein', f: 'happy', t: "It's reversible. One side's wool for the snow and the other side's waxed for the sea, and there's a pocket inside for whatever the third one needs. I don't know what the third one needs. I made it big." },
        { s: 'haechan', f: 'happy', t: "Big's good. She carries a lot." },
        { n: "He said it in both voices at once, the flat one and the loud one stacked in one sentence like a chord, and Hyein, who'd heard him do it a dozen times since December, still stopped with a pin halfway to the wool and looked at him like he'd done a card trick at a party." },
        { choose: [
          { t: "(Turn it inside out. Then back. Then inside out.)", notes: 3, then: [
            { n: "She turned it inside out, and back, and inside out again, snow and sea and snow, and Hyein laughed so hard she nearly swallowed a pin, and Haechan said *don't swallow the pins* in two voices at once, which made it worse." }
          ] },
          { t: "What goes in the big pocket?", notes: 3, then: [
            { s: 'haechan', f: 'neutral', t: "Everything. You'll put your whole life in it and then complain it's heavy." },
            { s: 'hyein', f: 'happy', t: "He's right. You will. That's why it's lined." }
          ] }
        ] }
      ], else: [
        { s: 'hyein', f: 'sad', t: "It's for here. For next winter. The wind comes off the bay in January like you wouldn't believe, Fuuka told me, and I won't be here next winter, so." },
        { n: "She didn't finish. She pulled a basting thread out too hard and it snapped, and she looked at the two ends of it in her fingers as if they'd done it on purpose." },
        { s: 'haechan', f: 'neutral', t: "Somebody in this building has to plan for next winter. Good that it's you. You plan like a general." },
        { s: 'hyein', f: 'sad', t: "I plan like somebody who's going to miss her." },
        { s: 'haechan', f: 'neutral', t: "Same thing. Different uniform." },
        { choose: [
          { t: "(Hug Hyein. Coat, pins and all.)", notes: 3, then: [
            { n: "She hugged her, coat and pins and all, and three of the pins found her somewhere and she didn't care, and Hyein said *ow, the PINS, Sol* into her shoulder and didn't let go either. On the dryer Haechan held the sleeve up off the floor and looked at the ceiling, very hard, as if there were something written up there in very small print." }
          ] },
          { t: "I'll wear it every winter.", notes: 3, then: [
            { s: 'hyein', f: 'serious', t: "Every winter. Every single one. Swear on my sewing machine." },
            { n: "Solar put her hand flat on the sewing machine and swore. Hyein made her do it twice, and the second time Haechan said *witnessed*, flat, from the dryer, like a man stamping a form." }
          ] }
        ] }
      ] }] }] }] },
      { n: "At half past two the door opened and Hanni came in wrapped in the big blanket off the top shelf with her hair in a clip and her face set, the face of a woman collecting somebody from a party that had gone on too long." },
      { s: 'hanni', f: 'neutral', t: "Machine off. You said eleven. It's half past two, Hyein." },
      { s: 'hyein', f: 'serious', t: "The hem—" },
      { s: 'hanni', f: 'happy', t: "Hem tomorrow." },
      { s: 'hyein', f: 'serious', t: "HEM. TOMORROW. Nobody touches it. Nobody breathes on it. Haechan, you can put the sleeve down now. You've been very brave." },
      { n: "Hanni steered her out by the shoulders, and at the door she looked back once, at Solar standing in the middle of the laundry room in a coat with no sleeves and at Haechan getting down off the dryer with the sleeve laid over his arm like a waiter's towel, and her face did something small and private, and she pulled the door to behind them, not quite shut." },
      { ifRoute: 'romance', then: [
        { n: "He laid the sleeve on the table. Then he came and stood in front of her and did up the buttons, the three that were sewn on, from the top down, the way he folded towels, one and then the next and then the next, not hurrying, and she stood there and let him, her heart going so hard she was sure he could hear it, because he could hear everything." },
        { s: 'solar', f: 'neutral', t: "Say it." },
        { s: 'haechan', f: 'neutral', t: "Say what." },
        { s: 'solar', f: 'neutral', t: "The line. You've been not saying it for ten minutes." },
        { s: 'haechan', f: 'flustered', t: "...I retired that line. It works too well. It's unfair to other men." },
        { choose: [
          { t: "(Stand very still and let him look.)", notes: 3, then: [
            { n: "She stood very still, and he looked. Not flat and measuring, not reading a room. He looked at her the way he had on a wet platform in December, as if he'd seen it a hundred times and only just noticed he'd missed it, and then he put his forehead against hers, in the cold, in somebody's half-made coat, and said it anyway, very low, so only she'd hear." },
            { s: 'haechan', f: 'flustered', t: "...It fits you better." }
          ] },
          { t: "Unretire it.", notes: 3, then: [
            { s: 'haechan', f: 'flustered', t: "No." },
            { n: "He held out for about four seconds. Then he said it into her hair, against the side of her head, like a man owning up to something in a confessional." },
            { s: 'haechan', f: 'flustered', t: "...Fine. It fits you better. It fits you better than anything's ever fit anybody. Happy?" }
          ] }
        ] }
      ], else: [
        { n: "He laid the sleeve on the table. Then he went and leaned on the wall with his arms folded and looked at her in the coat the way he'd look down a staircase deciding who got in, all the way down and all the way back up." },
        { s: 'haechan', f: 'neutral', t: "It's good." },
        { s: 'solar', f: 'neutral', t: "That's it?" },
        { s: 'haechan', f: 'neutral', t: "Friends tell each other when a coat's good. It's good. The other thing I'd say is for people who kiss in laundry rooms, which we don't, as established, at length, by you." },
        { choose: [
          { t: "Say the other thing anyway.", notes: 3, then: [
            { s: 'haechan', f: 'neutral', t: "Absolutely not. I've got a code." },
            { n: "But he came off the wall and turned the collar up under her chin, exactly as high as Hyein had pinned it, and stepped back again and said nothing so loudly that she laughed, and then so did he, the flat one, the scraping one, with something warm underneath it for once." }
          ] },
          { t: "(Do a slow turn. Make him rate it.)", notes: 3, then: [
            { n: "She turned, slowly, arms out, like a girl at the end of a runway, and he watched her go all the way round with no expression whatsoever." },
            { s: 'haechan', f: 'neutral', t: "Nine." },
            { s: 'solar', f: 'surprised', t: "Nine?" },
            { s: 'haechan', f: 'happy', t: "It hasn't got sleeves. Ten with sleeves. I'm a professional. I don't round up for friends." }
          ] }
        ] }
      ] },
      { n: "She took it off very carefully, the way you'd take off something that hadn't finished being made yet, and he folded it over the pins without one of them catching him and laid it on the table under the light, the sleeve on top and the hem pinned all the way round in a long row of small silver heads, like a promise somebody had every intention of keeping tomorrow." },
      { n: "On the stairs, going up, it occurred to her that she'd been warm the whole time she'd had it on, and hadn't noticed. That was, she supposed, the point." }
    ] },

    { after: '2/9', slot: 'evening', title: '12: go long', place: 'Iwatodai · Riverside', time: 'Evening', music: 'sun', scene: [
      { n: "The light was going by half past five, the sky over the river the thin clean orange of a February evening that had been cold all day and was about to get colder, and Jaehyun was standing on the flat stretch of grass by the bank in a guesthouse sweatshirt and running gloves, throwing a football to nobody." },
      { n: "He'd found it in the back of the sporting goods shop by the station, the only one on the island, under a bin of rugby balls, and he'd paid for it, Hanni said, like a man rescuing a dog from a shelter. He threw it high and tight, a perfect spiral against the orange, and walked after it, and picked it up, and walked back, and threw it again. Solar had been watching him do it from the bench for twenty minutes. She'd caught one. Her fingers still hurt." },
      { s: 'jaehyun', f: 'happy', t: "Your hands are fine, Sol. You flinch. Everybody flinches. You've flinched for the last nineteen." },
      { n: "Then, down the path, Koromaru at the end of a lead, and at the other end of the lead, with his hood up and his free hand in his pocket and the expression of a man who'd been promised the walk would be short, Haechan." },
      { n: "Jaehyun watched him come. Solar watched Jaehyun watch him, the long level look that read a whole field before the snap and had already decided what the play was, and felt her stomach go somewhere low and careful, the way it always did when the two of them were inside the same thirty meters." },
      { s: 'jaehyun', f: 'neutral', t: "Lee." },
      { s: 'haechan', f: 'neutral', t: "Jaehyun." },
      { s: 'jaehyun', f: 'neutral', t: "Can you catch?" },
      { n: "Koromaru sat down on Haechan's foot, which seemed to be his answer for both of them." },
      { choose: [
        { t: "(Hold out your hand for the lead. Free his hands.)", notes: 3, then: [
          { n: "She held out her hand. Haechan looked at it, and at her, and gave her the lead slowly, the way you'd hand somebody the last thing standing between you and a bad decision. Koromaru moved, with great dignity, from his foot to hers." }
        ] },
        { t: "He can't. Leave him alone.", notes: 2, then: [
          { s: 'haechan', f: 'happy', t: "She's protecting me. That's new. Go on. Throw it. I want to see her face." }
        ] },
        { t: "(Say nothing. This is between them.)", notes: 3, then: [
          { n: "She said nothing. It was the most dangerous thing she could have done, and all three of them knew it, and the corner of Jaehyun's mouth moved, which on him was a laugh." }
        ] }
      ] },
      { n: "Jaehyun threw it. Not hard, and not soft either. A clean spiral at chest height, the kind of pass you'd throw a man you wanted to find something out about." },
      { ifHeading: 'R', then: [
        { n: "Haechan didn't take his hands out of his pocket. The ball hit him square in the chest, bounced off, and rolled to a stop against Koromaru, who looked at it, and then up at him, deeply disappointed." },
        { s: 'haechan', f: 'neutral', t: "I'm a sound guy." },
        { s: 'jaehyun', f: 'neutral', t: "You're my recruitment chair." },
        { s: 'haechan', f: 'neutral', t: "Recruitment chair isn't a catching position. I stand at a door and decide who comes in. Nobody throws anything at me. That's the whole job." },
        { s: 'jaehyun', f: 'serious', t: "When we're back. Rush starts again in the fall. You'll stand at that door and I'll be upstairs, and I'll read every name you let in." },
        { s: 'haechan', f: 'neutral', t: "I know you will." },
        { n: "Something passed between them that Solar couldn't read and could feel anyway, a house, a staircase, a hallway in a building she didn't remember and her body did, and Jaehyun bent for the ball and stayed bent a second longer than it took to pick it up." },
        { s: 'jaehyun', f: 'serious', t: "Whatever this is. Whatever it's been all winter. Don't tell me." },
        { s: 'jaehyun', f: 'sad', t: "If you tell me, I have to do something about it. I'm tired. I'd like to get home first." },
        { s: 'haechan', f: 'neutral', t: "...Okay." },
        { choose: [
          { t: "Jaehyun.", notes: 3, then: [
            { s: 'jaehyun', f: 'neutral', t: "I know, Sol. I'm not asking you either. That's the present. Take it." },
            { n: "He threw again, to Haechan, gently, a pass you could have caught with your eyes shut, and Haechan caught it, flat-faced, against his chest, with both arms, like a man catching a baby somebody had dropped off a balcony. They all looked at him. He said, to the ball, *don't*." }
          ] },
          { t: "(Pick up the ball. Throw it to your brother. Badly.)", notes: 3, then: [
            { n: "She threw it. It went sideways, end over end, and landed in the river with a small sad plop, and Jaehyun stared at it, and Haechan stared at it, and then Jaehyun laughed, all the way, the real one, which she'd heard maybe four times in her life, and waded in up to his ankles in February to get it back, still laughing." },
            { s: 'haechan', f: 'happy', t: "Pretty girl. That's the best throw I've ever seen." }
          ] }
        ] }
      ], else: [{ ifHeading: 'S', then: [
        { n: "Haechan's hand came out of his pocket and caught it. One hand, not looking at the ball, looking at Jaehyun. It stopped in his palm as if it had been told to, and he held it out from his body by the nose and turned it over and frowned at it." },
        { s: 'haechan', f: 'happy', t: "Why is it pointy? Who decided that? Who looked at a ball and thought, no, worse?" },
        { s: 'jaehyun', f: 'surprised', t: "...Where did you learn to catch like that?" },
        { s: 'haechan', f: 'happy', t: "Things get thrown at my head for a living. Bottles, mostly. A chair once. A man once, but he was small." },
        { n: "He threw it back. It went up wobbling like a shot bird and came down three meters to Jaehyun's left, and Jaehyun caught it anyway without moving his feet, and looked at it, and at Haechan, with the face of a quarterback watching a walk-on do something illegal and brilliant." },
        { s: 'jaehyun', f: 'neutral', t: "You'd start at safety. You've got the hands. You'd have to learn to throw from scratch. From before scratch." },
        { s: 'haechan', f: 'happy', t: "I don't know what any of those words mean. One of me does. He's not taking calls." },
        { s: 'jaehyun', f: 'flustered', t: "...Sol. Is he doing this on purpose?" },
        { n: "He was. She could see it. He'd heard the English and answered it in Korean, loud and cheerful, with the other language sitting right there behind his teeth, unused, the way you'd leave a coat on a hook in a house you'd decided not to go back to." },
        { s: 'jaehyun', f: 'serious', t: "Over there, I'm told, I'm not in it. Her house. Different family." },
        { s: 'haechan', f: 'neutral', t: "Same girl. Very spoiled. Terrible at asking for anything." },
        { s: 'jaehyun', f: 'neutral', t: "Then somebody over there has to be the one who yells at her about the coat." },
        { s: 'haechan', f: 'happy', t: "Oh, I yell. Across a whole garden. Ten meters. The neighbors hate me." },
        { choose: [
          { t: "He does yell. I can hear it from here.", notes: 3, then: [
            { s: 'jaehyun', f: 'happy', t: "Good." },
            { n: "He said it to Haechan, not to her, and held out his hand, and Haechan looked at it for a second as if he'd been offered something with a catch in it, and then shook it, once, hard, a handshake between two men who'd just signed something nobody had written down." }
          ] },
          { t: "(Throw it to Haechan. Make him do it again.)", notes: 3, then: [
            { n: "She threw it, badly. He caught it one-handed above his head without taking his eyes off her and grinned, the whole loud house of a grin, and Jaehyun said *unbelievable* under his breath in two languages." }
          ] }
        ] }
      ], else: [{ ifHeading: 'H', then: [
        { n: "Haechan caught it against his chest with both hands, without fuss, the way you'd catch a bag somebody tossed you off a boat. Then he didn't throw it back. He held it out to Solar." },
        { s: 'haechan', f: 'neutral', t: "You throw it. Your arm." },
        { s: 'solar', f: 'neutral', t: "I can't throw." },
        { s: 'haechan', f: 'neutral', t: "Nobody where you're going is going to throw it for you. That's the whole point of where you're going. Throw it." },
        { n: "She threw it. It went about four meters and died on the grass. Jaehyun walked over and picked it up and looked at it, and then at Haechan, with something in his face that took a second to read as respect and another second to read as grief." },
        { s: 'jaehyun', f: 'happy', t: "Two of us on the sideline, then. You and me." },
        { s: 'haechan', f: 'neutral', t: "Not the sideline. The stands. Different thing. Better seats." },
        { s: 'jaehyun', f: 'happy', t: "You've gotten wise, Lee." },
        { s: 'haechan', f: 'happy', t: "I've had a long winter. Don't spread it around. I've got a reputation." },
        { choose: [
          { t: "Jaehyun. Throw me another one.", notes: 3, then: [
            { s: 'jaehyun', f: 'neutral', t: "Eyes on the ball. Don't flinch." },
            { n: "She didn't flinch. She caught it against her chest, badly, with both arms and her chin, and it hurt, and she held on, and Jaehyun clapped twice, the way he must have clapped on a sideline a thousand times, and Haechan beside him didn't clap and didn't need to. His face did it for him." }
          ] },
          { t: "You two should get a drink sometime.", notes: 2, then: [
            { s: 'haechan', f: 'neutral', t: "No." },
            { s: 'jaehyun', f: 'neutral', t: "No." },
            { n: "In step, like something they'd rehearsed. Koromaru sneezed." }
          ] }
        ] }
      ], else: [{ ifHeading: 'true', then: [
        { n: "Haechan caught it one-handed without looking, the way a man catches a bottle thrown at his head in a car park at four in the morning, and then stood there holding it and said, flat and dry, that he was a sound guy and did not catch things, as if he hadn't just caught it." },
        { s: 'jaehyun', f: 'surprised', t: "You just caught it." },
        { s: 'haechan', f: 'neutral', t: "One of me did. The other one's very embarrassed about it." },
        { n: "He threw it back. It wobbled like a shot bird. Jaehyun caught it without moving his feet and looked at it as if it had personally let him down." },
        { s: 'haechan', f: 'happy', t: "Both of me showed up. One of me can catch. Neither of me can throw. That's the deal. You get the whole set or nothing." },
        { s: 'jaehyun', f: 'happy', t: "...I'll take the set. I'll work on the throwing." },
        { choose: [
          { t: "He's all yours. Both of him.", notes: 3, then: [
            { s: 'jaehyun', f: 'happy', t: "Wonderful. I've always wanted two of them." },
            { n: "But he threw again, and Haechan caught it again, one-handed, and threw it back worse, and Jaehyun laughed, the real one, and kept throwing until the light went, as if he'd decided to start the coaching early." }
          ] },
          { t: "(Clap for the catch. Loudly.)", notes: 3, then: [
            { n: "She clapped, loudly. Koromaru barked once, to be included. Haechan bowed from the waist, a short deep harbor bow, and then said, dry as a cracker, that he'd be here all week, and Jaehyun had to go and sit down on the bench." }
          ] }
        ] }
      ], else: [
        { n: "Haechan caught it against his chest with both hands and threw it back, not well, and Jaehyun caught it and threw it again, harder. And again, harder than that. Solar watched her brother's arm go back and come through and the ball go out flat and fast at Haechan's chest, and Haechan caught every one, and threw every one back, and didn't say anything, and didn't step back, and let them land." },
        { n: "It went on like that for a while. Neither of them said why. She was staying, and her brother was going home without her, and the only other person on this riverbank who knew exactly what that cost was standing there letting a quarterback put the whole of it into his chest one throw at a time." },
        { s: 'haechan', f: 'neutral', t: "Better?" },
        { s: 'jaehyun', f: 'sad', t: "No." },
        { s: 'haechan', f: 'neutral', t: "Again, then." },
        { choose: [
          { t: "(Go and stand next to your brother.)", notes: 3, then: [
            { n: "She went and stood next to him. He didn't look at her. He threw one more, softer, and Haechan caught it and didn't throw it back, just held it, and Jaehyun put his hand on the top of her head, once, heavy, the way you'd steady something on a high shelf, and left it there until the light was gone." }
          ] },
          { t: "Throw one to me.", notes: 3, then: [
            { n: "He threw her one, gently, the gentlest pass of his life, and she caught it, actually caught it, against her chest, and he looked at her holding it, and his face did something she'd never seen it do, and then he turned round and walked down to the water and stood there with his back to them for a while." }
          ] }
        ] }
      ] }] }] }] },
      { n: "When the light had gone, Jaehyun tucked the ball under his arm and said Mitsuru had asked the guesthouse to dinner and he'd been told seven, by Mitsuru, which meant five to, and went off up the path toward the dorm at a jog, steady and even, a man who ran the way other people breathed." },
      { ifRoute: 'romance', then: [
        { n: "Haechan watched him go. Then he reached to take the lead back from her, and she didn't let go of it, and for a second they stood there both holding a dog's lead on a riverbank in the dark, which was the stupidest kind of holding hands there was, and neither of them let go first." },
        { s: 'haechan', f: 'neutral', t: "He knows." },
        { s: 'solar', f: 'neutral', t: "He doesn't know." },
        { s: 'haechan', f: 'neutral', t: "He knows the shape. He's waiting for somebody to hand him the rest so he can be angry about it with a clear conscience. I'm not handing it to him. Neither are you. We're going to let him be tired." },
        { choose: [
          { t: "(Let go of the lead. Hold his hand instead.)", notes: 3, then: [
            { n: "She let go of the lead. Koromaru, sensing a change in management, sat down. She found Haechan's hand in the dark, cold and split across the knuckles, and he turned it over and held on, and they walked back up the path like that with the dog going on ahead, looking back every few steps to check they were still coming, the way he had all year." }
          ] },
          { t: "Was it hard? Letting him throw at you like that?", notes: 3, then: [
            { s: 'haechan', f: 'neutral', t: "No. He throws like he talks. Clean. You always know where it's going." },
            { s: 'haechan', f: 'serious', t: "It's the ones who throw like they're being nice you watch." },
            { n: "He said it to the river, and she knew he wasn't talking about football, and he knew she knew, and he took her hand in the dark anyway, like a man putting down a bag he'd decided not to carry up the hill." }
          ] }
        ] }
      ], else: [
        { s: 'haechan', f: 'neutral', t: "Your brother asked me what my intentions are." },
        { s: 'solar', f: 'surprised', t: "When?" },
        { s: 'haechan', f: 'happy', t: "With his eyes. Every throw. I said friendship. With my chest." },
        { s: 'haechan', f: 'happy', t: "He said nobody catches a ball like that out of friendship. I said I'm a pioneer." },
        { choose: [
          { t: "You are a pioneer.", notes: 3, then: [
            { s: 'haechan', f: 'neutral', t: "Thank you. Somebody had to go first. It's lonely out here. Bring snacks." },
            { n: "He took the lead back, and Koromaru, with the air of a dog who'd been waiting all evening for somebody sensible to be put in charge, walked them both home." }
          ] },
          { t: "(Bump him with your shoulder.)", notes: 3, then: [
            { n: "She bumped him. He bumped her back, exactly as hard and not one gram harder, a man keeping meticulous accounts, and they went back up the path bumping shoulders like two kids who'd been told to stop, with the dog going on ahead in disgust." }
          ] }
        ] }
      ] },
      { n: "At the dorm gate he stopped, the way he stopped at the bottom of every staircase, and let her go in first. Through the lounge window she could see Jaehyun already at the table, sitting very straight with the football on the chair beside him like a guest, and Mitsuru laying a place for it without comment, because apparently that was how this was going to go." }
    ] },

    { after: '2/16', title: '13: seollal', place: 'Iwatodai Dorm · Kitchen', time: 'Late Night', music: 'dorm', scene: [
      { n: "Sunday had been the new year again. The real one, Yunjin said, the lunar one, because the first one *didn't count, babe, it was a Japanese one*, and she'd made the whole household eat rice-cake soup at lunch out of the guesthouse's big steel stockpot, the only pot on the island big enough, ladled into every bowl Mitsuru owned and several she didn't. You were a year older once you'd finished your bowl. Those were the rules. Junpei had had three, to be safe." },
      { n: "Two days on, at one in the morning, the stockpot was still in the dorm sink and Haechan was washing it. Sleeves pushed past the elbow, the tap running hot enough to fog the black window over the sink, scrubbing the bottom of a pot you could have bathed a child in with the slow, thorough, faintly furious care of a man raised somewhere you returned things cleaner than you got them or you heard about it." },
      { s: 'haechan', f: 'neutral', t: "It's the guesthouse's. It goes back clean or it doesn't go back. Hand me the towel." },
      { n: "She handed him the towel. Somebody knocked on the back door. Three knocks, evenly spaced, at a considerate volume, at one in the morning, which narrowed it down to one person on earth." },
      { n: "Haechan stopped drying. He didn't turn round. He looked at the black window over the sink, where the back door was reflected behind them, and the shape standing on the far side of its frosted glass, very straight, in a long coat." },
      { s: 'haechan', f: 'neutral', t: "...He's come for the pot." },
      { n: "Jungwon, on the back step in the cold in a long navy coat buttoned to the throat, his hands at his sides and his watch on, his face arranged into the expression of a young man who'd been awake since eleven thinking about a stockpot and had decided, at a quarter to one, that this was reasonable." },
      { s: 'jungwon', f: 'neutral', t: "Good evening. I apologize for the hour. The guesthouse kitchen opens at six, and the cook will ask where it is, and I would prefer to have an answer." },
      { s: 'jungwon', f: 'neutral', t: "Donghyuck." },
      { s: 'haechan', f: 'neutral', t: "Yang Jungwon." },
      { n: "*Donghyuck.* It went into her like a splinter. Not the way she said it, the name handed over in a laundry room like a present. The other way. Plain and level, the way a man says a name he's been angry at and grateful to and afraid for, all in the same winter, and refuses to say kindly. He'd told her in December who used to call him that. She didn't know why it should feel like watching somebody pick up something of hers with gloves on." },
      { s: 'haechan', f: 'neutral', t: "It's wet." },
      { s: 'jungwon', f: 'neutral', t: "I can carry a wet pot." },
      { s: 'haechan', f: 'neutral', t: "It goes back dry." },
      { cg: 'link-haechan-r13' },
      { n: "They stood on either side of the threshold with the stockpot between them, each with a hand on a handle, neither of them pulling, two men raised in two different houses on the same rule about returning things, and it was the most dangerous thing Solar had seen since the tower." },
      { cg: null },
      { n: "Then feet on the stairs, fast and bare, and Yunjin in the kitchen doorway in a sleep shirt and a cardigan and one sock, her hair up in a towel and her voice gone even lower than usual, gravel at the bottom of a bucket." },
      { s: 'yunjin', f: 'serious', t: "I can hear you two from the second floor. Through a FLOOR. Being polite at each other. Babe, it's a POT." },
      { choose: [
        { t: "(Take the pot out of both their hands.)", notes: 3, then: [
          { n: "She took it, a handle from each of them, and neither of them let go for one second, and then both of them did at exactly the same moment, and she was standing in the middle of the kitchen holding an enormous steel stockpot against her chest like a trophy nobody had won." },
          { s: 'yunjin', f: 'happy', t: "Iconic. Sit DOWN, both of you." }
        ] },
        { t: "Come in, Jungwon. It's cold.", notes: 3, then: [
          { s: 'jungwon', f: 'neutral', t: "Thank you. I won't stay." },
          { n: "He came in. He stayed. Haechan watched him wipe his shoes on the mat twice, precisely, and said nothing, and went on drying the pot, and the temperature in the kitchen went down two degrees and up three at the same time." }
        ] },
        { t: "(Leave them to it. Put the kettle on.)", notes: 2, then: [
          { n: "She put the kettle on. It was the only neutral country in the room. Yunjin came and stood by it with her, the two of them watching the boys over it like a pair of referees who'd privately agreed not to blow the whistle unless somebody bled." }
        ] }
      ] },
      { n: "There was soup left. Of course there was. Haechan had put it in the fridge on Sunday in one of the guesthouse's containers, and now, without asking anybody, he took it out and tipped it into a pan and lit the ring, and stood over it with his back to all of them." },
      { ifHeading: 'R', then: [
        { s: 'haechan', f: 'neutral', t: "Sit. You didn't have a second bowl." },
        { n: "He said it to the pan. It took Jungwon a moment to understand who it had been said to, and Solar watched him understand it, and watched his face do absolutely nothing, which on Jungwon was a landslide." },
        { s: 'jungwon', f: 'neutral', t: "I wasn't aware you were counting." },
        { s: 'haechan', f: 'neutral', t: "I count everybody's bowls. It's a condition." },
        { s: 'haechan', f: 'sad', t: "Strangest thing. I keep going to look for the part of me that hates you. I know where I left it. It isn't there. It's all snow over there now. I'm going somewhere you don't exist. It's very relaxing." },
        { s: 'jungwon', f: 'happy', t: "I can find mine. It's smaller than it was. Don't tell anyone. Thank you for the soup, Donghyuck." },
        { s: 'yunjin', f: 'surprised', t: "...Did the Yang boy just make a JOKE?" },
        { choose: [
          { t: "(Sit next to Jungwon. Eat with him.)", notes: 3, then: [
            { n: "She sat down next to him with a bowl of her own. He ate the way he did everything, upright and exact, every rice cake cut in half with the edge of his spoon, and halfway down the bowl he said to the soup, very quietly, that it tasted the way it did at home, at a long table, which he said as if he were reporting a finding. Haechan, at the stove, didn't turn round. His ears went red." }
          ] },
          { t: "Jungwon. Is it good?", notes: 3, then: [
            { s: 'jungwon', f: 'neutral', t: "It's correct." },
            { s: 'jungwon', f: 'flustered', t: "...It's very good. I'd prefer that not be repeated outside this kitchen." },
            { s: 'haechan', f: 'happy', t: "Too late. I heard it. I hear everything." }
          ] }
        ] }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'haechan', f: 'happy', t: "Sit. You didn't have a second bowl on Sunday. I count bowls. In my house nobody leaves the table on one bowl at new year. Not even a Yang." },
        { n: "He said it loud and warm and outrageous, ladling with his back to a man he'd once sat across a baduk board from until dawn and never, until now, across a table, and slid the bowl across the table at Jungwon so hard it nearly went off the edge. Jungwon stopped it with two fingers. He looked at it for a long moment." },
        { s: 'jungwon', f: 'neutral', t: "...Thank you." },
        { n: "It was the politest she had ever heard him be. She knew what that meant, on him. So did Haechan, who laughed once, short, and didn't turn round." },
        { s: 'haechan', f: 'neutral', t: "There's a calendar in the kitchen at home. You know the one. It says sixty-six." },
        { s: 'jungwon', f: 'neutral', t: "It will say sixty-six when we get back. I suspect it will say sixty-six for some time. It's been saying it all year." },
        { n: "Neither of them looked at her. Neither of them needed to. The number sat in the warm kitchen between the three of them like a fourth bowl nobody was going to touch, and Yunjin, in the doorway, folded her arms very tight over her cardigan and looked at the floor." },
        { s: 'yunjin', f: 'sad', t: "...Eat your soup, both of you. You're making me old." },
        { choose: [
          { t: "(Sit down between them. Eat.)", notes: 3, then: [
            { n: "She sat between them. Nobody said anything for the length of a bowl of soup. It was the most peaceful silence she'd ever heard two people make on purpose, and it cost both of them something, and both of them paid, and at the end of it Jungwon laid his spoon down exactly parallel to the edge of the table, and Haechan, without looking, took the bowl and filled it again." }
          ] },
          { t: "(Turn the ring that isn't there.)", notes: 3, then: [
            { n: "Her thumb went to the base of her ring finger and turned it, a quarter turn, the old way, nothing on her hand at all. Both of them saw. Jungwon's spoon stopped. Haechan's back at the stove went still. Then both of them, at exactly the same moment, as if they'd agreed it, looked away and went on with what they'd been doing, and let her have it, the ring and the turn and whatever it meant, because it was hers." }
          ] }
        ] }
      ], else: [{ ifHeading: 'H', then: [
        { s: 'haechan', f: 'neutral', t: "Sit. You didn't have a second bowl." },
        { s: 'jungwon', f: 'neutral', t: "I had one bowl. One is the correct number." },
        { s: 'haechan', f: 'neutral', t: "Not at new year. Sit." },
        { n: "Jungwon sat. Haechan put the bowl in front of him and then, after a moment, pulled out the chair across from him and sat too, and the two of them faced each other over a kitchen table at one in the morning like two heads of state at a summit neither of them had asked for." },
        { s: 'haechan', f: 'neutral', t: "Over there she's yours." },
        { s: 'jungwon', f: 'neutral', t: "Over there she's her own. She ran against me. She lost, and I asked her anyway, and she said yes because she wanted to, not because anybody arranged it." },
        { s: 'haechan', f: 'neutral', t: "...Yeah. Good answer. I hate that it's a good answer." },
        { s: 'haechan', f: 'serious', t: "Bring her two cans sometimes. The wrong ones. She likes the wrong ones. She'll tell you she doesn't." },
        { n: "Jungwon looked at him for a long time. Then he took a small notebook out of the inside pocket of his coat, and a pen, and wrote something down, and underlined it." },
        { s: 'yunjin', f: 'surprised', t: "Babe. Is he giving him DATING advice? At ONE in the MORNING? Am I dreaming? Am I dead?" },
        { choose: [
          { t: "(Read the notebook over Jungwon's shoulder.)", notes: 3, then: [
            { n: "*Two cans. The wrong ones. She will say she doesn't.* Underlined twice. Underneath, smaller, in the same perfect hand, *Donghyuck*, and after it, smaller still, *hyung*, crossed out, and then, after a pause she could see in the ink, written back in." }
          ] },
          { t: "Thank you. Both of you.", notes: 3, then: [
            { s: 'haechan', f: 'neutral', t: "Don't thank me. I'm doing it for the cans." },
            { s: 'jungwon', f: 'flustered', t: "I'm doing it for the notebook." },
            { n: "They said it at the same time, and then both looked appalled, and Yunjin put her face in a tea towel." }
          ] }
        ] }
      ], else: [{ ifHeading: 'true', then: [
        { s: 'haechan', f: 'happy', t: "Sit. You didn't have a second bowl. I count bowls. In both places. You're in one of them. I'm sorry about it. It's a big house." },
        { s: 'jungwon', f: 'neutral', t: "I'm in two. You may have miscounted." },
        { s: 'haechan', f: 'neutral', t: "We overlap in one. Exactly one. I've measured." },
        { s: 'jungwon', f: 'happy', t: "Ten meters." },
        { n: "Haechan stopped with the ladle in his hand. Then he laughed, both laughs at once, the flat one and the loud one, and turned round and pointed the ladle at Jungwon like a lawyer accusing a witness." },
        { s: 'haechan', f: 'happy', t: "That's a joke. You made a joke. Jin. Jin, write it down." },
        { s: 'yunjin', f: 'happy', t: "I'm writing it on the WALL." },
        { choose: [
          { t: "(Sit everybody down. Make all three of them eat.)", notes: 3, then: [
            { n: "She sat them down, one, two, three, Yunjin last, and put a bowl in front of each, and stood over them with the ladle until they ate. Nobody argued. Jungwon cut every rice cake in half. Haechan ate his in four mouthfuls. Yunjin ate hers with her sunglasses on, which she'd put on at some point for reasons she declined to explain, and said it was the best new year she'd had in either year." }
          ] },
          { t: "You two are going to be neighbors forever.", notes: 3, then: [
            { s: 'jungwon', f: 'neutral', t: "Yes." },
            { s: 'haechan', f: 'neutral', t: "Yes." },
            { n: "Both of them sounded like men receiving a diagnosis. Both of them, she noticed, ate a second bowl anyway." }
          ] }
        ] }
      ], else: [
        { s: 'haechan', f: 'neutral', t: "Sit. You didn't have a second bowl." },
        { s: 'jungwon', f: 'neutral', t: "...Thank you." },
        { n: "He sat. Haechan put the soup in front of him and sat down across the table, and Yunjin sat at the end, and Solar stood by the kettle and looked at the three people in this kitchen who had come for her from the same city and were going back to it without her, on the same train, in less than three weeks." },
        { s: 'jungwon', f: 'neutral', t: "We'll be on the same train, Donghyuck." },
        { s: 'haechan', f: 'neutral', t: "Sit at the other end." },
        { s: 'jungwon', f: 'neutral', t: "I intend to." },
        { s: 'yunjin', f: 'sad', t: "I'm in the middle, then. God help me. I'm going to be the middle the whole way." },
        { choose: [
          { t: "(Sit down at the table with them. While there's a table.)", notes: 3, then: [
            { n: "She sat down with them. Four people at a dorm kitchen table at one in the morning over leftover soup, three of them going somewhere the fourth wasn't, and nobody said so. Yunjin talked, the whole time, about nothing, about a koi in a bucket and a horn that played a song, and the boys let her, and once, when she ran out, Jungwon asked her a question so she'd keep going." }
          ] },
          { t: "Look after each other.", notes: 3, then: [
            { s: 'haechan', f: 'neutral', t: "No." },
            { s: 'jungwon', f: 'neutral', t: "No." },
            { n: "Then both of them looked at Yunjin, and Yunjin looked at the ceiling and said she'd look after both of them, obviously, somebody had to, and the three of them sat at the table not looking at each other, and Solar understood that was a yes, in a language she'd been learning all year." }
          ] }
        ] }
      ] }] }] }] },
      { n: "Jungwon left at half past one with the stockpot, dry, carried in both arms, and at the back door he bowed to the kitchen in general, and Haechan at the sink, without turning round, bowed back exactly as deep, and neither of them would have admitted to it under oath. Yunjin went up yawning, and pointed at the two of them from the stairs, and said *bed*, and was obeyed by nobody." },
      { ifRoute: 'romance', then: [
        { n: "When the kitchen was empty she stood at the sink beside him while he rinsed the last bowl and dried it, and the name was still in the room. She could feel it the way you feel a draft from a door somebody's left open." },
        { s: 'solar', f: 'neutral', t: "Donghyuck." },
        { n: "He stopped with the bowl in his hands." },
        { s: 'haechan', f: 'neutral', t: "...You're putting yours back on it." },
        { s: 'solar', f: 'neutral', t: "Is it working?" },
        { choose: [
          { t: "(Say it again. Slower.)", notes: 3, then: [
            { s: 'solar', f: 'neutral', t: "Donghyuck." },
            { n: "He put the bowl down. He put both hands flat on the edge of the sink and his head down between his shoulders, like a man getting his breath back at the top of a long climb, and then turned and kissed her, once, briefly, against the fogged window, like somebody signing something." },
            { s: 'haechan', f: 'flustered', t: "...Yeah. It's working. It's clean. Don't stop." }
          ] },
          { t: "(Put your head on his shoulder.)", notes: 3, then: [
            { n: "She put her head on his shoulder. He stood very still with the tea towel in his hands. After a while he put his cheek down against her hair, and the tap dripped, and the window cleared slowly from the edges in, and he said her name back to her, plain, into her hair, the way you'd answer somebody across a dark room so they'd know where you were." }
          ] }
        ] }
      ], else: [
        { s: 'haechan', f: 'neutral', t: "You're going to say my name now. To put yours back on it." },
        { s: 'solar', f: 'neutral', t: "I wasn't going to." },
        { s: 'haechan', f: 'neutral', t: "You were. Don't. It's fine. Say Haechan. That one's clean. Everybody uses it. It's practically a towel." },
        { choose: [
          { t: "Haechan.", notes: 3, then: [
            { s: 'haechan', f: 'neutral', t: "Thank you." },
            { n: "Then, without looking at her, very quietly, drying a bowl that was already dry," },
            { s: 'haechan', f: 'flustered', t: "...The other one's still yours. You know that. Friends can keep things. I checked." }
          ] },
          { t: "(Hand him the last bowl to dry. Stay till it's done.)", notes: 3, then: [
            { n: "She handed him the last bowl and stayed while he dried it, and put it away, and wiped the counter, and wiped it again. He didn't say anything about the name. Neither did she. When he turned the light off over the stove he said goodnight, Solar, plain, in the dark, and she heard what he'd done, and that he'd done it on purpose." }
          ] }
        ] }
      ] },
      { n: "She went up at two. From the landing she could hear him downstairs putting the pan away, and then the back door, opening and closing, very quietly, and his feet on the step outside, and a lighter that clicked once and then, after a long moment, didn't click again." }
    ] },

    { after: '2/23', title: '14: the cut', place: 'Iwatodai Dorm · Lounge', time: 'Late Night', music: 'tender', scene: [
      { n: "The lounge at midnight had one lamp on and a laptop's blue glow on the carpet beside it, and Minji, cross-legged on the floor in her coat with her camera bag open beside her like a doctor's kit, wearing one side of Haechan's headphones. He was on the floor next to her with the other side, his back against the sofa and a cable running from the laptop to the little silver recorder in his lap, and both of them were watching the screen with the same expression, intent and unhappy, like two people defusing something they'd built themselves." },
      { s: 'minji', f: 'serious', t: "Don't come in." },
      { s: 'minji', f: 'serious', t: "Don't look. It isn't done. It's the worst it'll ever be right now, and if you see it now, that's the version you'll remember." },
      { n: "She'd already seen it. You couldn't come down those stairs without seeing the screen. Herself, months ago by the light, under a lamppost by the river at night, in the frame, turning to look at whoever was holding the camera with an expression she had never once caught in a mirror." },
      { s: 'haechan', f: 'neutral', t: "Sit. She's been saying don't look for an hour. She means look." },
      { s: 'minji', f: 'neutral', t: "I mean don't look." },
      { s: 'haechan', f: 'neutral', t: "She means look. I hear rooms. Sit." },
      { ifEvent: 'a4-mark', then: [
        { n: "Mark was on the sofa above them with a guitar across his knees, a cheap one with a school sticker on it that he'd borrowed from the music room and would return, he said, before anybody noticed, which meant after. He looked up when she came in and his smile came half a second late, the way it did now, and then came properly." },
        { s: 'mark', f: 'neutral', t: "Hey, Sol. She needed music. I said I'd try. He said I'd get it wrong." },
        { s: 'haechan', f: 'neutral', t: "You'll get it flat." },
        { s: 'mark', f: 'serious', t: "It's not flat." },
        { s: 'haechan', f: 'neutral', t: "Your G's flat, Marky." },
        { n: "It came out of him the old way, from eighth grade, and Solar watched him hear it a second after it was out, and watched his jaw shut on it like a door." },
        { s: 'haechan', f: 'neutral', t: "...Mark. It's been flat since eighth grade. I've been not telling you for six years." },
        { n: "Mark tuned the G without a word. Haechan, without looking up from the screen, nodded once. It was, Solar thought, watching the two of them not look at each other over a laptop and a borrowed guitar at midnight, the most they'd said to each other in one breath since November, and it had cost them both something, and neither of them was going to mention it, and both of them were going to remember it." }
      ], else: [
        { n: "There was no music on it yet. Minji said she'd tried four songs and every one of them turned it into a music video, and she didn't want a music video, she wanted it to sound like what it had sounded like, and Haechan had said, flat, that he'd been recording what it sounded like since January, and she'd looked at him as if he'd handed her a key." }
      ] },
      { choose: [
        { t: "(Sit down between them. Watch it.)", notes: 3, then: [
          { n: "She sat between them on the carpet. Minji took her earbud out and gave Solar the headphones, the whole pair, and Haechan lifted his side off his neck and put it over her other ear, and the two of them sat on either side of her and didn't watch the screen at all. They watched her watch it." }
        ] },
        { t: "Minji. How much of me have you got?", notes: 2, then: [
          { s: 'minji', f: 'neutral', t: "Forty-one hours." },
          { s: 'minji', f: 'sad', t: "Don't make that face. Some days I put the camera down. Those aren't in it. Those ones are mine." }
        ] },
        { t: "(Turn off the lamp, so the screen's the only light.)", notes: 3, then: [
          { n: "She turned off the lamp. The screen lit the three of them blue from underneath, and Minji glanced up at her, surprised, and then nodded, slowly, the way you'd nod at someone who'd just told you the right way to hang a picture." },
          { s: 'minji', f: 'neutral', t: "Yeah. That's how it should be seen. In the dark. With nobody talking." }
        ] }
      ] },
      { n: "It ran eleven minutes. September and the lamppost, and everything after. The dorm roof, Junpei falling off a deck chair. The household round the long table at the end of the year, with more people at it than chairs. Koromaru asleep under the kotatsu, a tail and nothing else. Mitsuru at the head of the long table, laughing at something with her hand over her mouth. Solar at the top of the stairs, mid-laugh, turning round to see who'd called her. And under all of it, so low she felt it before she heard it, the building. The dryer turning. The fridge half a step flat. A door on the second floor shut a little too hard. The stairs at three in the morning, somebody coming down them." },
      { ifHeading: 'R', then: [
        { s: 'minji', f: 'neutral', t: "It's for over there. For when I'm editing at four in the morning in the honors dorm and I need to remember what you looked like when you were actually happy, instead of when you were doing it for somebody." },
        { s: 'minji', f: 'serious', t: "I know you'll be happy over there. I'm going to need proof." },
        { n: "Haechan didn't say anything. He was watching the screen, where she was turning round at the top of the stairs mid-laugh, and his face did nothing at all, for a long time, very carefully." },
        { s: 'haechan', f: 'neutral', t: "Leave the long shots long." },
        { s: 'minji', f: 'neutral', t: "They're too long. Nobody'll sit through them." },
        { s: 'haechan', f: 'neutral', t: "Everybody'll sit through them. That's the whole thing. You got there first, Kim. You've been looking at her right longer than anybody. Don't cut it short because I'm in the room." },
        { n: "Minji turned her head and looked at him for a long moment in the blue light. Something went across her face that Solar couldn't name and didn't try to. Then she left the long shots long." },
        { choose: [
          { t: "(Take Minji's hand on the carpet.)", notes: 3, then: [
            { n: "She found Minji's hand on the carpet between them and held it. Minji didn't look at her. She held on, and with her other hand nudged a slider one frame to the left, and then one frame back, and left it exactly where it had been." }
          ] },
          { t: "Can I have a copy? For over there?", notes: 3, then: [
            { s: 'minji', f: 'happy', t: "You get the first one. Obviously. You're the only person in it who doesn't know she's beautiful. It's for educational purposes." }
          ] }
        ] }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'minji', f: 'neutral', t: "It's for me. You're going somewhere I'm not, so I'm keeping this one. The you who lived here. I'm allowed one." },
        { s: 'haechan', f: 'happy', t: "Burn two. One for you, and one for a drawer at the bottom of a garden I know. She won't watch hers. She'll just know it's there. That's how she likes things." },
        { s: 'minji', f: 'surprised', t: "...You've gotten very loud lately." },
        { s: 'haechan', f: 'happy', t: "It's the sea air. There isn't any here. I'm making up for it." },
        { choose: [
          { t: "Make me a copy too.", notes: 3, then: [
            { s: 'minji', f: 'neutral', t: "...Okay." },
            { n: "She said it to the laptop. Then she put her head on Solar's shoulder for one second, hard, like a stamp, and took it away again and went back to work." }
          ] },
          { t: "(Watch Minji instead of the screen.)", notes: 3, then: [
            { n: "She watched Minji. Minji felt it, the way people with cameras always know they're being looked at, and didn't look up, and her mouth went tight at one corner, and she nudged a slider one frame to the left, and then one frame back." }
          ] }
        ] }
      ], else: [{ ifHeading: 'H', then: [
        { s: 'minji', f: 'neutral', t: "It's for us. The ones who aren't going where you're going. Which is everybody in this room. He told me how to end it." },
        { s: 'haechan', f: 'neutral', t: "End on her leaving. Back to the camera. Not looking round." },
        { s: 'minji', f: 'sad', t: "That's so sad." },
        { s: 'haechan', f: 'neutral', t: "It isn't. It's the good ending. Somebody walking toward a thing nobody picked for her. I've scored a lot of endings. The ones where she looks back are worse. Trust me." },
        { n: "He'd aimed that one. She could tell from how still he held the recorder while he said it, the way you hold something you don't want to spill." },
        { choose: [
          { t: "(Let Minji film you, right now, walking to the door.)", notes: 3, then: [
            { n: "Minji picked up the camera without being asked. Solar got up and walked to the lounge door and didn't look back, though every part of her wanted to. Behind her she heard the small electronic chirp of the record button, and then nothing, and then, very quietly, Haechan saying *yeah. that one.*" }
          ] },
          { t: "I'm going to look back. Once. Off camera.", notes: 3, then: [
            { s: 'haechan', f: 'neutral', t: "Deal. Off camera's yours." },
            { s: 'minji', f: 'sad', t: "Everything's off camera eventually. That's the problem with cameras." }
          ] }
        ] }
      ], else: [{ ifHeading: 'true', then: [
        { s: 'minji', f: 'happy', t: "It's for everywhere. I'm putting it on a disc and a phone and a laptop, and I'm going to show it to you in three places on the same morning, and you're going to cry in all of them." },
        { s: 'haechan', f: 'happy', t: "She cries at the fridge part. Every time. Watch." },
        { n: "She did. She hadn't known a fridge could do that to a person. Haechan said, in both voices at once, that it was the mix, and Minji said it was the shot, and they argued about it for ten minutes in a whisper, in perfect agreement, while she cried." },
        { choose: [
          { t: "It's both. The shot and the mix.", notes: 3, then: [
            { s: 'minji', f: 'serious', t: "Ugh." },
            { s: 'haechan', f: 'neutral', t: "Ugh." },
            { n: "They said it at the same moment, and then looked at each other over her head, and then both looked away, and Minji typed *both* into the file name, and didn't tell him she had." }
          ] },
          { t: "(Play it again.)", notes: 3, then: [
            { n: "She played it again. All three of them watched it this time, nobody watching anybody else, and when it got to the fridge Minji reached past her and turned the sound up one notch, and Haechan, without looking, reached past her and turned it back down half of one." }
          ] }
        ] }
      ], else: [
        { s: 'minji', f: 'neutral', t: "It's for you. To keep here. So that when we're gone you've got proof we were in the building." },
        { s: 'haechan', f: 'neutral', t: "Put the dryer under the last shot. Low. Barely there. She'll know." },
        { s: 'minji', f: 'sad', t: "...Okay." },
        { choose: [
          { t: "Put yourselves in it. Both of you.", notes: 3, then: [
            { s: 'minji', f: 'neutral', t: "We're not in it. We're behind it." },
            { s: 'haechan', f: 'neutral', t: "That's how she'll know we were there. Nobody holds a camera by accident." }
          ] },
          { t: "(Promise to watch it every winter.)", notes: 3, then: [
            { n: "She promised. Minji made her say which day. Haechan said the first cold night, the one where the wind comes off the bay and finds your collar, and Minji said that was a stupid day, and wrote it on the disc sleeve in pencil anyway." }
          ] }
        ] }
      ] }] }] }] },
      { ifEvent: 'a4-mark', then: [
        { n: "Mark went at one, with the guitar, and on his way past he put a hand on Haechan's shoulder, light, a full stop at the end of a sentence neither of them had finished. Haechan didn't move under it. He didn't shrug it off either." }
      ] },
      { ifRoute: 'romance', then: [
        { n: "At half past one Minji packed the camera bag the way she did everything, precisely, every lens in its own slot. At the lounge door she stopped and looked back at Haechan on the floor, and he looked up at her, and something went between them that wasn't friendship and wasn't the opposite of it, the look of two people who'd been watching the same window from different streets." },
        { s: 'minji', f: 'neutral', t: "Be good to her." },
        { s: 'haechan', f: 'neutral', t: "I'm trying a new thing where I am. It's going badly. It's going fine." },
        { n: "Then she was gone, and the lounge was dark except for the laptop, and he didn't get up off the floor." },
        { choose: [
          { t: "(Stay on the carpet with him.)", notes: 3, then: [
            { n: "She stayed. After a while he put his head down on her shoulder, which he had never once done, the weight of it heavier than she'd have guessed, and closed his eyes, and the laptop went to sleep on its own and took the last of the light with it, and neither of them moved to wake it." }
          ] },
          { t: "You really recorded the whole building?", notes: 3, then: [
            { s: 'haechan', f: 'neutral', t: "Every room in it. The stairs at three. Your door when you shut it too hard. The rice cooker clicking off." },
            { s: 'haechan', f: 'serious', t: "I asked first. Everybody. Mitsuru signed something. Koromaru said yes. I'm doing that now. Asking." },
            { n: "He said it to the laptop, and she understood it was the most important thing he'd said all night, and that he'd said it where it would look like nothing, so she could leave it there if she wanted. She didn't leave it there. She put her hand over his on the recorder and kept it there." }
          ] }
        ] }
      ], else: [
        { n: "At half past one Minji packed the camera bag, every lens in its own slot, and at the lounge door she stopped and looked back at Haechan on the floor." },
        { s: 'minji', f: 'neutral', t: "Friends, huh." },
        { s: 'haechan', f: 'neutral', t: "Friends." },
        { ifRomance: 'minji', then: [
          { s: 'minji', f: 'sad', t: "...Sorry." },
          { s: 'haechan', f: 'sad', t: "Don't be. You got there first. You always did. I'm the second-best thing that happened to her this year. It's a very competitive position." }
        ], else: [
          { s: 'minji', f: 'happy', t: "Me too." },
          { s: 'haechan', f: 'happy', t: "Club's getting big. We should get jackets." },
          { s: 'minji', f: 'happy', t: "We should NOT get jackets." }
        ] },
        { choose: [
          { t: "There's no club.", notes: 3, then: [
            { s: 'haechan', f: 'neutral', t: "There's a club. You're not allowed in. You're the reason it exists." },
            { n: "Minji laughed, really laughed, in the doorway with her bag on her shoulder, and said she was going to design the jacket on the walk home, and did, apparently, because a sketch of it was in the group chat by two, with a small embroidered dryer on the back." }
          ] },
          { t: "(Walk Minji to the gate. Both of you.)", notes: 3, then: [
            { n: "They walked her down to the gate, the two of them, one on each side, in the cold, and Minji said it was like being escorted by two very short bodyguards, and Haechan said he was average height in both countries, and at the gate she turned round and took one picture of them, without warning, and wouldn't show anybody, ever." }
          ] }
        ] }
      ] },
      { n: "Before she went up, she saw the name of the file on the laptop's sleeping screen, where Minji had left it. Not *final*. Not a date. Just her name, and after it, in lowercase, *as she was*." }
    ] },

    { after: '3/1', title: '15: untitled', place: 'Iwatodai Dorm · Hallway', time: 'Late Night', music: 'tender', scene: [
      { n: "It had turned warm. Not spring, nothing so committed. Just a night in the first week of March when the wind came off the bay without any teeth in it for the first time since November, and the radiator under her window had clicked off on its own at midnight and not come back on, and she'd lain on top of the covers instead of under them, awake, like always, listening to the building." },
      { n: "At ten to three there was a knock on her door. Two knocks. Flat." },
      { n: "Nobody knocked on her door at ten to three. He never had. All year, every night, he'd been the one who waited at the bottom, of the stairs, of a ladder, of a gate, wherever there was a bottom to wait at, and let her be the one who came down. It was, she'd understood sometime around December, the whole of his manners." },
      { ifRoute: 'romance', then: [
        { n: "She opened the door. He was standing in the hallway in a white shirt and a black tie with his jacket open over them, like a man who'd come back from somewhere or never gone to bed, with his laptop under one arm and his other hand empty, a step back from the threshold, exactly far enough that she'd have to come out to reach him. She was still in her uniform herself, bow and armband and all. She'd lain down in it after the last class and never got round to anything else." }
      ], else: [
        { n: "She opened the door. He was standing in the hallway in a T-shirt and bare feet, like a man who'd come straight from bed or never gone to it, with his laptop under one arm and his other hand empty, a step back from the threshold, exactly far enough that she'd have to come out to reach him." }
      ] },
      { s: 'haechan', f: 'neutral', t: "I know. I don't come up here. I'm making an exception. It's March." },
      { s: 'haechan', f: 'neutral', t: "Bring the headphones. Don't bring a coat." },
      { s: 'solar', f: 'neutral', t: "I always bring a coat." },
      { s: 'haechan', f: 'happy', t: "You never bring a coat. Tonight you won't need one. First time all year. I want to see what your face does." },
      { choose: [
        { t: "(Leave the coat on the hook. On purpose.)", notes: 3, then: [
          { ifRoute: 'romance', then: [
            { n: "Hyein's coat hung on the back of her door, finished, hemmed, the sleeves on. She looked at it, and left it there, on purpose, and stepped out into the hallway in her uniform with his headphones round her neck, and he looked past her at the coat on its hook, and then at her, and the corner of his mouth went up a quarter of an inch." }
          ], else: [
            { n: "Hyein's coat hung on the back of her door, finished, hemmed, the sleeves on. She looked at it, and left it there, on purpose, and stepped out into the hallway in her pajamas with his headphones round her neck, and he looked past her at the coat on its hook, and then at her, and the corner of his mouth went up a quarter of an inch." }
          ] }
        ] },
        { t: "You came up the stairs.", notes: 3, then: [
          { s: 'haechan', f: 'neutral', t: "I came up the stairs." },
          { s: 'haechan', f: 'happy', t: "Took me all year. They're very steep. Somebody should complain." }
        ] },
        { t: "Is something wrong?", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "No. That's the thing. Nothing is. I wanted to see what that feels like with you in it." }
        ] }
      ] },
      { ifRoute: 'romance', then: [
        { n: "The hallway had gone to its night setting, every other ceiling light off and the rest turned down to a low amber that made the carpet look warmer than it was, and she leaned back against the wall beside her own door with her hands behind her, and he came the one step in, finally, and put his hand flat on the wall above her head, and stayed there, looking down at her, in no hurry to be anywhere, as if he'd decided that for one night he was done being the one who waited at the bottom of things." },
        { cg: 'link-haechan-r15' },
        { s: 'haechan', f: 'neutral', t: "Give me a second. I'm keeping this one. The light. The wall. You, standing still for once." },
        { n: "She laughed at him, quietly, because of the hour and the doors on either side, and he let her, and didn't move his hand. Then he did, and said the roof was waiting, as if the roof had ever waited for anybody in its life." },
        { cg: null }
      ] },
      { place: 'Iwatodai Dorm · Rooftop', time: 'Late Night' },
      { n: "The roof had kept some of the day. The concrete gave it back slowly, still there under her bare feet, faint, like a hand that had only just left a table. The city lay out below in its lights with the bay black beyond it, and over Port Island a plane was coming in low, blinking red, the way one had in January, and she watched it all the way down to somewhere she couldn't see." },
      { n: "He sat with his back against the water tank and opened the laptop on his knees, and took one side of the headphones off her neck and put it to his own ear and left her the other, the way he had in January, and played it. Four minutes. The gate chime, the rain, the dryer, the brick in the rooftop door. Finished. She'd heard it a dozen times since January, and it still went into her like the first time, like something walking into a room she hadn't known was empty." },
      { n: "When it ended there was one file on his screen and nothing else. She leaned to read it. *track_final_FINAL_3am*." },
      { s: 'haechan', f: 'neutral', t: "It's finished. I'm not touching it. That's not why I knocked." },
      { s: 'haechan', f: 'neutral', t: "It hasn't got a name. Nothing I make has a name. I don't name things. Names are yours. You decide what you answer to. I said that on this roof in November and I meant it." },
      { s: 'haechan', f: 'serious', t: "So I'm asking. I don't do that. Write it down somewhere. I'm asking you what you'd name it." },
      { n: "He said it plainly, to the screen, every word set down exactly where he wanted it, and she knew this one had been aimed. He'd carried it up two flights of stairs. He'd knocked." },
      { s: 'haechan', f: 'serious', t: "I'm not putting it on the file, though. Not yet. There's still the thing in it I owe you. You don't name something before you know everything that's in it. Tell me anyway. I'll keep it till you do." },
      { ifHeading: 'R', then: [
        { n: "He'd said it in the campus voice, dry, every word handed over like it cost money, the voice from the ladder and the lab glass, and it had settled in him all the way down since January, the way snow settles on a thing until you can see its shape. She knew the room it would be in next. A roof with a ladder up the side of it, and cold, and a quad below that nobody had walked across yet." },
        { s: 'haechan', f: 'happy', t: "Over there I'm going to play it for you on a roof. You'll pretend you've never heard it. You'll be very bad at pretending, princess. I'm looking forward to it." },
        { choose: [
          { t: 'Call it "pretty girl".', notes: 3, then: [
            { s: 'haechan', f: 'flustered', t: "...That's mine. That's my line. You can't name my song after my line." },
            { s: 'solar', f: 'happy', t: "Watch me." },
            { n: "He didn't type it. He said it once under his breath, slowly, lowercase, the way you'd try a key in a lock, and his ears went red all the way to the top, and he didn't take it back." }
          ] },
          { t: 'Call it "three a.m."', notes: 3, then: [
            { s: 'haechan', f: 'neutral', t: "Because that's when you're up." },
            { s: 'solar', f: 'happy', t: "Because that's when you are." },
            { n: "He didn't type it. He said it was a stupid name and that it was perfect, in the same flat breath, and she watched him put it away somewhere behind his eyes, twice, to be sure." }
          ] },
          { t: 'Call it "the ladder".', notes: 3, then: [
            { s: 'haechan', f: 'neutral', t: "...Of all the things." },
            { n: "He said it quietly, like a man recognizing his own handwriting on something he didn't remember writing. His hand went to the keys and stayed there, over them, not pressing anything, and he didn't say anything else about it, which on him was everything." }
          ] }
        ] }
      ], else: [{ ifHeading: 'S', then: [
        { n: "He was loud tonight. Not the roof-at-midnight loud that made Junpei throw windows open. The other one, the warm one, the harbor in him all the way up at the surface now, the house on the hill with too many stairs and a man in an armchair who called him son. He'd settled into it the way a tide settles, all at once and then for good." },
        { n: "And there was a disc drive in the side of the laptop she'd never noticed, and a blank disc on the concrete beside him, and a marker." },
        { s: 'haechan', f: 'happy', t: "I'm burning it. Don't laugh. Where we're going, songs live on discs. I'm not having it live on a laptop in a house that hasn't got one." },
        { s: 'haechan', f: 'neutral', t: "You name it. I write it on in marker, badly, later, once you know what's in it. Then it goes in a drawer in the annex, and I don't tell you which drawer, and one day you find it, under the Discman." },
        { choose: [
          { t: 'Call it "agasshi".', notes: 3, then: [
            { s: 'haechan', f: 'happy', t: "Ha. No. Yes. No." },
            { n: "He uncapped the marker, and held it over the disc, and capped it again. *Later,* he said, and wrote it on the back of his hand instead, big and crooked, the way you'd write a name on a lunchbox for a kid starting school, and held the hand up to the light, and laughed so loud a window went up somewhere below, and for once nobody yelled, because it was March, and everybody was awake anyway." }
          ] },
          { t: 'Call it "ten meters".', notes: 3, then: [
            { s: 'haechan', f: 'neutral', t: "On paper." },
            { n: "He wrote *ten meters* on his palm, not the disc, and then crossed out the ten, and wrote five, and looked at that, and crossed it out too, and left it like that, the number gone, just *meters*, a measurement with nothing in it. More honest, he said. Nobody's measured in a while." }
          ] },
          { t: 'Call it "the chorus".', notes: 3, then: [
            { s: 'haechan', f: 'happy', t: "He'd cry. In the car. He'd say it was the air conditioning." },
            { n: "He wrote it on the inside of the case, not the disc, where it could still come off. Then, under it, so small she had to lean in, *for the one who only gets the chorus right*, and didn't explain it, and didn't need to." }
          ] }
        ] }
      ], else: [{ ifHeading: 'H', then: [
        { n: "He said it in the in-between voice, the one he'd found after the station, not dry and not loud. He wasn't settling into anything. He was the only one in the building who'd known from the start that he wouldn't get to, and he'd done his grieving about it somewhere she hadn't been allowed to watch, on purpose, so she wouldn't have to carry it." },
        { s: 'haechan', f: 'neutral', t: "It goes with you. Not with me. I've got the original. In here. I'll hum it on a ladder somewhere. You take the file to the place I'm not, and play it in a gym with the chairs out, and somebody short asks what it is, and you don't tell them." },
        { s: 'haechan', f: 'serious', t: "I want it played in a room I'll never hear. That's the best kind of room. I'd know. I've listened to rooms my whole life." },
        { ifRoute: 'friend', then: [
          { s: 'haechan', f: 'neutral', t: "I've got a working title if you're stuck. It's long. It has clauses. It's mostly about laundry rooms and what doesn't happen in them." }
        ] },
        { choose: [
          { t: 'Call it "two cans".', notes: 3, then: [
            { s: 'haechan', f: 'neutral', t: "...Yeah." },
            { n: "He didn't type it. He said it was a good name for a song about a girl who never once drank the right thing, and he said it flat, and then smiled, the whole of his face this time, at the screen, where she could see it." }
          ] },
          { t: 'Call it "star".', notes: 3, then: [
            { s: 'haechan', f: 'happy', t: "Ha. Of course. Of course you would." },
            { n: "He didn't type it. He said it once, one word, lowercase, and looked at the screen the way he'd looked at the star in Hyein's lining, like a level finally sitting where it should." }
          ] },
          { t: 'Call it "princess, agasshi". Both.', notes: 3, then: [
            { s: 'haechan', f: 'surprised', t: "That's two names." },
            { s: 'solar', f: 'serious', t: "There's two of you. I'm not picking. I didn't pick either of them for anything else." },
            { n: "He looked at her for a long time. Then he said both, with a comma between them, and typed neither, and didn't say anything else, and his jaw did the small sideways thing, and he let it." }
          ] }
        ] }
      ], else: [{ ifHeading: 'true', then: [
        { n: "Both voices, the flat and the loud, one sentence with two registers stacked inside it like a chord. She'd stopped hearing the seam sometime in January. Tonight she listened for it on purpose and couldn't find it, and that was its own kind of answer." },
        { s: 'haechan', f: 'happy', t: "It's going to play in two places at once. Three, with you. A laptop and a disc and whatever they've got in the third one, probably a phone with a sticker on it. Name it something that works in all of them. No pressure. All the pressure." },
        { choose: [
          { t: 'Call it "every universe".', notes: 3, then: [
            { s: 'haechan', f: 'surprised', t: "..." },
            { s: 'haechan', f: 'happy', t: "That's so cheesy. That's the cheesiest thing I've ever heard. In two languages." },
            { n: "He didn't type it. He said that when he did, he wasn't changing a letter." }
          ] },
          { t: 'Call it "solstice".', notes: 3, then: [
            { s: 'haechan', f: 'neutral', t: "The longest night. Then it turns." },
            { n: "He didn't type it. He said, in both voices, that it was the right name for a song about a girl who'd stood still all year and then hadn't, and she said it was a song about him, and he said *same thing*, and didn't explain, and didn't need to." }
          ] },
          { t: 'Call it "both".', notes: 3, then: [
            { s: 'haechan', f: 'happy', t: "Both. Neither. Ask me later. It changes." },
            { n: "It was what he'd said since November whenever anybody asked him anything with two answers. He didn't type it. He laughed, and it was both laughs, and she'd have known it from a boat." }
          ] }
        ] }
      ], else: [
        { n: "He said it in his own voice, which was the strangest thing about him lately. Not the campus and not the harbor. Just a boy on a roof in a T-shirt in March, talking, as if he'd taken both his lives off like coats and hung them on hooks by a door he'd be going out of soon, without her." },
        { s: 'haechan', f: 'neutral', t: "The file stays here. With you. I've got the original. In here. I'll take that one. You keep the one that's finished." },
        { choose: [
          { t: 'Call it "the laundry room".', notes: 3, then: [
            { s: 'haechan', f: 'neutral', t: "Very romantic. Very glamorous. A dryer." },
            { n: "He didn't type it. He looked at the screen, and said, quieter, that it was where he'd let himself be found, and that it was right, and that he was going to miss that room more than any room in either of his houses, and that if she told anyone he'd deny it in two languages." }
          ] },
          { t: 'Call it "here has a dog".', notes: 3, then: [
            { s: 'haechan', f: 'happy', t: "Ha. It does. It's the best thing about it." },
            { n: "He didn't type it. He said every word of it back to her, and said Koromaru was going to be insufferable about it, and that Koromaru would be right to be, and that the dog had been the one thing in this building he'd never once had to win over." }
          ] },
          { t: 'Call it "room tone".', notes: 3, then: [
            { s: 'haechan', f: 'neutral', t: "The sound a place makes when nobody's doing anything." },
            { n: "He didn't type it. He said it was the right name for a song about a building she was going to stay in, and that when it was quiet in here, next year, at three, that's what she'd be hearing, and it would be the song, and it would be fine." }
          ] }
        ] }
      ] }] }] }] },
      { n: "He closed the laptop. The file still said *track_final_FINAL_3am*, and it was going to, for now. Then the roof was dark again, just the city and the bay and the warm wind going over them both without any teeth, and she realized she'd been out here twenty minutes in her pajamas and hadn't once been cold, and that he'd noticed, and hadn't said, and was going to let her notice it for herself." },
      { s: 'haechan', f: 'neutral', t: "There it is. That face. No coat, not cold. I wanted to see it once." },
      { ifRoute: 'romance', then: [
        { n: "She turned on the concrete to look at him. He was already looking at her, of course, the way he had the first night in the laundry room, a second before she reached the door, as if he'd heard her thinking about it. All year he'd been the one who found her. Every staircase, every roof. *There you are.* He'd said it at the start, and again in December, and he'd been saying it, she understood now, every night in between, in towels and cans and a sleeve held up off a floor." },
        { s: 'solar', f: 'neutral', t: "There you are." },
        { n: "His face did nothing. Very loudly. For a long time." },
        { s: 'haechan', f: 'flustered', t: "...That's mine." },
        { s: 'solar', f: 'happy', t: "Not anymore." },
        { choose: [
          { t: "(Kiss him. Briefly. Like signing something.)", notes: 3, then: [
            { n: "She kissed him, briefly, in the warm dark, the way you'd sign your name at the bottom of a page you'd read all the way through, and he made the small sound he'd made in the laundry room in December, something set down after being carried a long way, and put his forehead against hers and kept it there." },
            { s: 'haechan', f: 'flustered', t: "Here I am. Obviously. Where else would I be." }
          ] },
          { t: "(Put your forehead against his. Stay there.)", notes: 3, then: [
            { n: "She put her forehead against his. He closed his eyes. His hand found the back of her neck, the way it had on a curb outside Paulownia in November, pulling her out of the road, except this time he didn't take it away like it had touched a stove. He left it there." },
            { s: 'haechan', f: 'flustered', t: "Yeah. Here. Took you long enough." }
          ] }
        ] }
      ], else: [
        { s: 'haechan', f: 'neutral', t: "Friends name things for each other. I've added it to the list. Top. Above the tangerines. Above collars." },
        { s: 'solar', f: 'neutral', t: "How long is the list now?" },
        { s: 'haechan', f: 'neutral', t: "Long. It's got clauses. There's a whole section on laundry rooms. It's the only section I'm proud of." },
        { s: 'haechan', f: 'neutral', t: "Last clause. Then I'll stop." },
        { n: "He turned his head and looked at her, plain, no rating in it, no room being read. Just looking." },
        { s: 'haechan', f: 'neutral', t: "Solar." },
        { choose: [
          { t: "Donghyuck.", notes: 3, then: [
            { n: "He closed his eyes. Not for long. Just long enough." },
            { s: 'haechan', f: 'neutral', t: "That's the clause. Two names. Signed. Witnessed by a water tank. You can't get out of it now." }
          ] },
          { t: "(Bump his shoulder. Leave yours there.)", notes: 3, then: [
            { n: "She bumped his shoulder, and didn't take hers back. He looked down at the place where they touched the way he'd look at a fader on a desk he hadn't made his mind up about, and then he leaned, too, exactly as much, not one gram more, and they sat there propped against each other like two halves of an argument that had been settled." },
            { s: 'haechan', f: 'neutral', t: "That's the clause. Shoulders. Very platonic shoulders. I'll have it notarized." }
          ] }
        ] }
      ] },
      { n: "They stayed until the sky over the far shore started thinking about going gray, and the first train went across Moonlight Bridge with its lights on and nobody in it, and somewhere below, at the end of the top floor, the radiator in his room knocked once, four to the bar, and stopped." },
      { n: "The first night, in November, she'd lain awake with the feeling that somebody downstairs was listening to the building too. Tonight nobody was downstairs. They were both at the top of it, listening to it together, on the first warm night of the year, and for once she didn't have to wonder who else was awake. She knew." }
    ] }
  ],

  afterMax: [
    { title: 'one more load', place: 'Iwatodai Dorm · Laundry Room', time: 'Late Night', scene: [
      { n: "Three in the morning, because some things didn't change just because the calendar was running out of days. The dryer was rumbling and Haechan was sitting on top of it with a basket of her clothes in his lap that she had definitely, specifically, left upstairs." },
      { s: 'haechan', f: 'neutral', t: "It was making noise. Across the building. I could hear it being dirty." },
      { s: 'solar', f: 'neutral', t: "You can't hear laundry." },
      { s: 'haechan', f: 'neutral', t: "I can hear everything over there. You know that. It's a condition." },
      { n: "He folded the way he always did, fast and exact, and somewhere in the middle of it he stopped, holding one of her shirts, and held it out." },
      { s: 'haechan', f: 'serious', t: "Come here. You're learning this. I'm not going to be—" },
      { s: 'haechan', f: 'sad', t: "...You're learning this. Sleeves first." },
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
      { n: "He didn't finish it. Before was a whole sentence, that winter." },
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
    ] },
    // February (ranks 11-15 batch): plays between his late ranks and after 15. Route-safe on every heading.
    { title: 'silver papers', place: 'Iwatodai Dorm · Laundry Room', time: 'Late Night', scene: [
      { n: "There was a jar on the shelf above the dryers, an old jam jar with the label soaked off, between the bleach and the box of lost socks, and she'd walked past it fifty times without looking. Tonight he took it down and set it on the dryer between them and didn't explain it, which meant he wanted her to ask." },
      { n: "It was full of silver. Gum wrappers, every one folded into the same tight little square, hundreds of them, catching the tube light like a jar of fish scales." },
      { s: 'haechan', f: 'neutral', t: "One a night. Since the roof in November. I don't throw them on the ground. I never have. Don't ask me which one of me started that." },
      { s: 'haechan', f: 'neutral', t: "This country hides its bins. I carried them round in my pocket till Christmas like a raccoon. Then I got a jar." },
      { ifHeading: 'R', then: [
        { s: 'haechan', f: 'neutral', t: "The gum's the other one's habit. Over there I don't even pretend to quit. I kept it up here anyway. It seemed rude to stop halfway through a jar." }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'haechan', f: 'happy', t: "Every one's a cigarette I didn't smoke. I'm taking the jar home. Mrs. Bang's going to count them and want to give me a medal, and then hit me with it for the other three years." }
      ], else: [
        { s: 'haechan', f: 'neutral', t: "Every one's a night. That's all it is. I don't know what else you do with nights. You keep them or you lose them." }
      ] }] },
      { choose: [
        { t: "(Fold one yourself. Add it to the jar.)", notes: 3, then: [
          { n: "She took a stick out of the packet on the dryer and unwrapped it and folded the paper, badly, into something that was technically a square. He looked at it with nothing on his face. Then he dropped it in the jar exactly as it was, crooked, on top, where it would be the top for one night, and put the lid on before she could take it back." }
        ] },
        { t: "Why are you showing me?", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "Because somebody should know what a winter weighs. It's this. It isn't much. Pick it up." },
          { n: "She picked it up. It weighed almost nothing. It weighed exactly as much as he'd said." }
        ] }
      ] },
      { ifRomance: 'haechan', then: [
        { n: "When she went up he caught her hand at the door and pressed one into her palm, folded small, still warm from his pocket." },
        { s: 'haechan', f: 'flustered', t: "Tonight's. You have it. I'll start again tomorrow." }
      ], else: [
        { s: 'haechan', f: 'neutral', t: "You can have one. Friends can have one. Not two. Two is something else. I've drafted it. It's in committee." }
      ] }
    ] }
  ],

  // Christmas Eve (plot doc §12: the route partner's evening). v1 shape; the revamp engine doesn't schedule it yet.
  christmas: { place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
    { n: "The lounge was having a party, which meant Junpei had a Santa hat and a great many opinions, Fuuka had made a cake that had slumped gently to one side, and someone had put on a Christmas CD that skipped on the third track every single time. It was warm and loud and full of people she loved. She stayed exactly an hour." },
    { place: 'Port Island Station', time: 'Night', bg: 'portisland-christmas' },
    { n: "Port Island had done Christmas properly. The plaza in front of the station was strung with warm white lights, wreaths with red bows on every pillar, blue snowflake banners down the stone steps, a tree as tall as the second floor with a star on top, and it was snowing on all of it, slow and fat, settling on the steps and the planters and the shoulders of his long black coat. He was waiting at the bottom of the steps with his hands in his pockets and a white shirt and a black tie under the coat, as if he'd dressed for something and wasn't going to say what. She'd come in her coat over her uniform with a scarf wound twice round her neck, and his eyes went to the scarf first, quick, checking it for something, navy, gold, and found it grey and plain and let it go, and then he looked at her the way he looked at a room before he decided where to stand in it." },
    { s: 'haechan', f: 'neutral', t: "Last train before the crowd. Don't tell Mitsuru. She has a speech about curfew." },
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
      { ifFlag: 'route-H', then: [
        { n: "He'd been easy all day, which was the strangest thing about him lately. Not loud, not flat. Since the station he'd stopped switching, the way a man stops checking his pockets once he's decided he hasn't lost anything after all. He'd even let Jihoon explain pilates to him over the cake, for eleven minutes, and only said *no* twice." }
      ], else: [{ ifFlag: 'route-R', then: [
        { n: "He'd been quiet all day. The good quiet, the dry one, the one that read the whole party from the stairs and said three words about it, all of them accurate. Since the solstice the campus had been coming up in him more and more, flat and certain, like snow settling on something until you could see its shape." }
      ] }] }
    ] },
    { s: 'haechan', f: 'sad', t: "Christmas was always somebody else's party. In both places. I just remember being cold." },
    { choose: [
      { t: "You're not cold now.", notes: 3, then: [
        { s: 'haechan', f: 'flustered', t: "Coat's new. That's why." },
        { n: "It was not why. They both knew it was not why." }
      ] },
      { t: "(Put your head on his shoulder.)", notes: 3, then: [
        { n: "He went still for the first second, the way he always did, and then tipped his head down until his cheek was on her hair, and stayed." }
      ] }
    ] },
    { cg: 'romance-haechan-christmas' },
    { n: "He took her hands out of her coat sleeves, both of them, without asking, and held them between his in the middle of the plaza with the snow coming down on them, and looked down at her, and for once didn't look anywhere else." },
    { s: 'haechan', f: 'happy', t: "Merry Christmas, Solar." },
    { cg: null },
    { n: "They caught the last train back with snow melting in their hair, and in the morning Mitsuru, who knew exactly what time the last train got in, gave the speech anyway." }
  ] }
});
