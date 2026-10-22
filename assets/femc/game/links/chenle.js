/* Chenle · IX Hermit. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines
   in scene.js.
   Searcher (Runners), friendship. Zhong Chenle: Sigma general member, CS major, the eSports team's tank (Zarya / Sigma, "held
   the corner"). Short, blonde fringe he pushes out of his eyes, glasses he pushes up with one finger, a grey hoodie with his
   hands lost in the front pocket, a soda can, a mobile game, a protein bar whose label he reads. Reserved until he trusts
   you; talks at length only about games, precise and professorial; dry one-liners; a slightly pitched giggle; always early.
   Excitement in him is data and intensity, never volume (the loud teammate is Olivia, who isn't here).
   Arcana: Hermit (P3's Hermit is the online gamer, P5's the shut-in hacker; "he never comes out of his room, just stays
   holed up all day playing Overwatch"). His link is a Hermit coming out of the room: the arcade's back row, then the
   guesthouse step, then the pier in the cold, which he hates.
   Housing: the Kirijo guesthouse by the station (FEMC-REVAMP-LORE housing ruling). He visits the dorm; he never lives there.
   His home days are the team's practice days (Mon / Tue / Thu / Sat), after school, Game Panic's back row.
   His crossing is the story event 'a4-twelve' (written by the lead; 11/16 late, by 12/13 at the latest): his storyEvents,
   so nothing here plays before it. Rank 1 is the first visit after, and never assumes it's the next day or replays it.
   Canon echoes (Runners Ch 7, 11, 14, 20, 26, 28, 43, 46, 55, 65, 66): always early; "practice Monday, Tuesday, Thursday,
   Saturday"; Doyoung's "bubble needs to feel like a reflex, not a decision"; "true." to his captain; Minji's fist against
   his shoulder; the snack argument with Minji; "Back two steps, don't use anything" (his first-map call, Ch 66, echoed
   once, in rank 5); the arrangement he offers (food, cold air and a number accurate enough that it can't be argued with,
   Ch 65: rank 9 turns it on Solar); "I'll come, Le" (Renjun, Ch 43, rank 7); "you kinda fell off, for a while" /
   "your rotating instincts are back" (the numbers in rank 6); Hyein liking the way he talks. Catchphrases are used once
   at most: "true." goes to Minji in rank 3 (the brief's beat); "why me", "famous last words", "valid distinction" and "you're
   simply a creature I stare at" are never used.
   What he knows and doesn't (runners_state ledger, end of Ch 66): he doesn't know about Solar and Haechan (he suspects; he
   says he isn't asking, quietly, which is the opposite of Jaemin); he doesn't know Danielle runs the accounts. Haechan's
   substance use stays unstated: Chenle's care for him is food and numbers only, never what for. The SUnews counts (nine
   calls to Solar before he crossed, the tenth went through; twelve to Haechan) are his; no home news past the page.
   The frozen night: his phone from home stopped at the minute he crossed and its battery never moves; he'd been looking
   for three hours and eleven minutes. Time back home stays unclear.
   Speakers used: chenle, solar, jaemin, minji, jaehyun, fuuka, akihiko, junpei, mitsuru, haechan, kiriko (ifMet), mark
   (ifEvent 'a4-mark'), danielle (ifEvent 'a4-light-on'). Chenle's faces: neutral, happy, sad, serious, surprised,
   flustered (silhouette until art). Mark never uses 'happy' (no such portrait); Mitsuru only neutral / sad / surprised.
   Flags this link sets (all chenle-*) and where they're read:
     chenle-repair   rank 1, she took the repair class without reading it        → rank 6
     chenle-one      rank 2, she calls his phone here from a meter and a half    → rank 10, afterMax 'the count'
     chenle-calls    rank 3, she tells Minji to let Chenle call it               → rank 5
     chenle-roof     rank 8, she tells him the second thing that works (the roof) → afterMax 'the steps'
     chenle-ask      rank 8, she tells him he can ask her anything               → afterMax 'a question'
     chenle-outside  rank 9, she points out he hates being outside               → afterMax 'cold air'
   Story flags read: route-R / route-true (going home, December still ahead) in rank 6, rank 10 and afterMax 'home'; every
   other route (and none) is the else. Story events read: a4-mark (Mark, hangout 3 and rank 7), a4-light-on (Danielle,
   hangout 6 and rank 7). ifMet kiriko (hangout 2). Rank branches never hold choices, so a rank's ♪ total is the same on
   every path. No ifHeading here (the link test can't vary it).
   Living world (texts after ranks, holidays 12/23 and 1/3, routines, run-ins): data/living-chenle.js.
   He never closes (searchers say goodbye in the story on 3/6), so afterMax plays in person to the end. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'chenle', name: 'Zhong Chenle', short: 'Chenle', arcana: 'Hermit', numeral: 'IX', from: 'Runners',
  kind: 'searcher', world: 'R', romance: null, portraitPending: true,
  starts: '11/16', gate: { R: 5 }, storyEvents: ['a4-twelve'],
  home: { area: 'mall', spot: 'Game Panic', slot: 'after', days: [1, 2, 4, 6],
          hint: "After school on Mondays, Tuesdays, Thursdays and Saturdays, in the back row of Game Panic, by the fire door, at the cabinets that don't lag." },
  approach: "At the very back of Game Panic, past the fighting games and the crane machines, where the carpet is older and nobody under thirty goes, a short blonde boy in a grey hoodie is playing a four-seat cabinet alone, very still, with a soda can set down beside his foot at an angle that looks measured.",
  cast: {},
  invite: {
    ask: [
      "game panic. back row. i'm already here",
      "practice. you get out at 3:20. i checked",
      "the left cabinet was dropping frames every 11 seconds. the guy fixed it. come test it",
      "2 credits. 1 is yours",
      "minji bought shrimp chips again. i need a witness",
      "fuuka says you were in the tower 4 hours last night. come sit somewhere that isn't a tower",
      "there are 6 middle schoolers on the team cabinet. i need a support",
      "new cabinet. 4 seats. i've played it 11 times alone. that's enough data. come",
      "jaemin found the karaoke setting on the lounge tv. i'm leaving the building. come be where i'm going",
      "the vending machine on 2f sells hot cans. HOT. come look at this",
      "practice",
      "i'm early. obviously"
    ],
    ok: ["ok", "ok. left seat", "good. bring coins. i have 9", "ok. i'll start the warmup without you", "ok. 3:20"],
    no: ["ok", "noted", "thursday then", "ok. logging it as a rest day", "ok. eat something. specifically something"]
  },
  hangouts: [
    [
      { n: "He was teaching himself a fighting game, which was not, he wanted her to understand, the same thing as playing one. He had the move list for the cabinet by the door written out on the back of a receipt in tiny careful handwriting, and next to every move a number, and he was putting coins in and doing each one over and over against the computer without trying to win, just watching the screen, the way you'd watch a kettle to find out exactly when it boiled." },
      { s: 'chenle', f: 'serious', t: "This one comes out on frame six. That one's on frame four but you can't cancel it. The guy in the next seat has been doing the six one all day and losing to the four one and he doesn't know why." },
      { s: 'chenle', f: 'neutral', t: "I'm not going to tell him. He's eleven. He'll figure it out in about a year. That's how you learn it properly." },
      { choose: [
        { t: "How do you see frames? It's a screen.", notes: 3, then: [
          { s: 'chenle', f: 'neutral', t: "You count. A second's sixty. You get used to it. Then you can't stop and every movie looks slow." },
          { n: "He said it like a confession and a complaint at the same time, and pushed his glasses up with one finger, and did the frame-four move three times in a row without looking at his hands, and she found she could see it, a little, after he'd said it, the tiny hitch before the punch came out, like a breath before a word." }
        ] },
        { t: "(Sit next to the eleven-year-old and tell him.)", notes: 2, stat: { kindness: 1 }, then: [
          { n: "She leaned over and told the boy, in Japanese, very quietly, to try the other one. He tried it. He won. He turned and looked at her like she'd handed him a car, and behind her Chenle made a small affronted sound." },
          { s: 'chenle', f: 'flustered', t: "You've robbed him of a year. That was his year. He'll never know what it felt like." },
          { s: 'chenle', f: 'happy', t: "...He's very happy though. Look at him. Okay. Fine." }
        ] },
        { t: "(Watch him do the same move fifty times.)", notes: 2, then: [
          { n: "It was more than fifty. She lost count around forty and he didn't, she could tell, because his lips moved very slightly on every one, and at the end he wrote a number on the receipt and underlined it twice, and looked up at her as if he'd only just noticed she was there and was pleased about it." }
        ] }
      ] }
    ],
    [
      { ifMet: 'kiriko', then: [
        { n: "Kiriko had come down from the shrine for melon pan and followed the noise into Game Panic the way she followed most noises, and stopped behind Chenle's chair to watch, and said something about his left hand being lazy, cheerfully, in the tone of a girl who'd been told she was a healer and decided that meant everything." },
        { n: "Chenle turned round in the seat. Solar watched him see her. The ponytail, the fox charm, the way she stood on the balls of her feet like she might be about to go somewhere very fast. He didn't say anything. He went completely, totally still, the way he went still in a game the half-second before he committed, and his ears went pink from the top down." },
        { s: 'chenle', f: 'surprised', t: "...How long's the cooldown on the teleport. In real life." },
        { s: 'kiriko', f: 'surprised', t: "The *what*?" },
        { s: 'chenle', f: 'serious', t: "And do you see through walls, or is that just in— never mind. Do you prefer high ground. Does the fox have a hitbox. Is it you, or is it separate." },
        { choose: [
          { t: "(Let him ask. All of it.)", notes: 3, then: [
            { n: "He asked all of it, very quietly, very fast, without raising his voice once, leaning further forward on every question until his elbows were on his knees, and Kiriko answered every one of them with her whole face, delighted, and made up at least half the answers, and he wrote them all down anyway on the back of a receipt, because a source was a source." },
            { s: 'kiriko', f: 'happy', t: "I like him. He asks better questions than the dog. Can I keep him?" }
          ] },
          { t: "Chenle. Breathe.", notes: 2, then: [
            { s: 'chenle', f: 'flustered', t: "I am breathing. I'm breathing at the normal rate. My heart's a hundred and ten, that's different, that's allowed." },
            { s: 'kiriko', f: 'happy', t: "Oh, he's *nervous.* That's so sweet. Here. Melon pan. It's good for nerves. That's not true. Eat it anyway." }
          ] }
        ] },
        { n: "Walking out, much later, he said to the floor of the mall that she was a support, and Solar said yes, and he said, *she plays the angles you play,* and didn't say anything else all the way to the station, and she could feel him thinking about it like heat off a road." }
      ], else: [
        { n: "There was a girl of about thirteen at the crane machine by the stairs who had won four plushies in a row, which Chenle had stopped playing to watch, which he would deny, and Solar found him at the end of the row with his arms crossed and his head on one side, studying her the way other people studied a painting." },
        { s: 'chenle', f: 'serious', t: "She waits for the claw to stop swinging. Everyone else drops it while it's still swinging. Then she goes a centimeter past where you'd think. Every time. A centimeter." },
        { choose: [
          { t: "Go ask her how she does it.", notes: 2, then: [
            { s: 'chenle', f: 'flustered', t: "I'm not going to *ask* her. You don't ask. You watch till you know." },
            { n: "He watched till he knew. It took eleven minutes. Then he put three hundred yen in the machine, waited for the claw to stop swinging, went a centimeter past, and won a stuffed shark with an expression on its face like it had seen things, and handed it to Solar without looking at her, as if the shark were a receipt." }
          ] },
          { t: "(Put a coin in and try it her way.)", notes: 3, then: [
            { n: "She waited for the swing to stop. She went a centimeter past. The claw closed on a stuffed shark with a stunned expression and carried it, wobbling, all the way to the chute, and dropped it in, and the girl by the stairs looked over and nodded at her once, like a colleague." },
            { s: 'chenle', f: 'happy', t: "One for one. That's a perfect rate. Don't play again. You'll ruin it." }
          ] }
        ] }
      ] }
    ],
    [
      { ifEvent: 'a4-mark', then: [
        { n: "Mark found them on a Saturday, or rather turned up at the end of the back row with two cans of something and the specific ease of a boy who had been invited by nobody anyone could source, and leaned on the cabinet, and said *what are we playing,* very casually, a little too casually, rubbing the back of his neck." },
        { s: 'mark', f: 'neutral', t: "Le. My guy. Need a fourth?" },
        { s: 'chenle', f: 'neutral', t: "We need a third and a fourth. You'd be one of those." },
        { s: 'mark', f: 'flustered', t: "That's... yeah, that's how numbers work, yeah." },
        { choose: [
          { t: "(Give Mark the rifle.)", notes: 2, then: [
            { n: "Mark took the rifle and played it the way he did most things, warmly and with total confidence and slightly wrong, standing up in the open to wave at the enemy like they might be people he knew, and dying, and laughing about it, and Chenle repaired nothing and said nothing and took the objective by himself in the time it took Mark to respawn." },
            { s: 'chenle', f: 'neutral', t: "That was nice, Mark." },
            { n: "He said it in a voice of such perfect neutrality that Mark beamed at him, and Solar, who couldn't for the life of her tell whether it had been an insult, bit the inside of her cheek until it passed." }
          ] },
          { t: "(Let Chenle decide.)", notes: 3, then: [
            { s: 'chenle', f: 'neutral', t: "He can hold the can." },
            { s: 'mark', f: 'surprised', t: "Hold the—" },
            { s: 'chenle', f: 'neutral', t: "It's an important job. The floor's sticky. If it goes down it's gone." },
            { n: "And Mark, to his credit, held the can, for three whole rounds, standing behind them like a cheerful bodyguard nobody had hired, and narrated every play to them in a low excited voice as if they couldn't see it, and Chenle let him, which Solar was beginning to understand was its own kind of mercy." }
          ] }
        ] }
      ], else: [
        { n: "Jaemin found them on a Saturday, because Jaemin found everybody eventually, and stood at the end of the back row with his arms out like a man arriving at his own surprise party, and announced that it was a crime, an actual crime, that two of the most interesting people he knew were sitting in the dark playing a robot game when there was karaoke forty meters away." },
        { s: 'jaemin', f: 'happy', t: "Le. Le. Come sing one song. One. I'll pick it. You'll love it. You'll hate that you love it." },
        { s: 'chenle', f: 'neutral', t: "No." },
        { choose: [
          { t: "(Go with Jaemin. Drag Chenle.)", notes: 2, then: [
            { n: "They dragged him. He came the way a cat comes when you carry it, limp, offended, technically present. He did not sing. He sat in the corner of the biggest booth with his soda and scored every one of Jaemin's songs out of a hundred on the back of the booth's menu, in silence, and at the end held it up, and Jaemin read it and clutched his chest like he'd been shot." },
            { s: 'jaemin', f: 'sad', t: "*Sixty-one?* Le. *Le.* I hit the high note." },
            { s: 'chenle', f: 'neutral', t: "You hit near it. It's a different note." }
          ] },
          { t: "(Stay. Tell Jaemin to take a seat instead.)", notes: 3, then: [
            { n: "Jaemin took a seat. He lasted four rounds, talking the entire time, to them, to the screen, to the enemy team, who were computer-controlled and therefore, he said, a captive audience, and when he got up to go he squeezed Chenle's shoulder on the way past, and Chenle let him, and didn't look up, and didn't shrug the hand off either." },
            { s: 'chenle', f: 'neutral', t: "He's loud. We came together. Somebody had to come with him, he'd have narrated at the coffins all night alone." }
          ] }
        ] }
      ] }
    ],
    [
      { n: "Junpei had discovered that Chenle existed, and that Chenle was good at games, and had taken both facts personally. He'd turned up at the back row with his cap on backwards and a fistful of coins and challenged him, loudly, to the fighting game by the door, best of three, loser buys ramen, and Chenle had looked at him for a long time and said *okay* in the voice of a man agreeing to a duel at dawn." },
      { s: 'junpei', f: 'happy', t: "I'm gonna be honest with you, dude, I've been playing this cabinet since middle school. I'm kind of a legend. Ask around." },
      { s: 'chenle', f: 'neutral', t: "Which character." },
      { s: 'junpei', f: 'happy', t: "The guy with the hat. He's me. Spiritually." },
      { s: 'chenle', f: 'neutral', t: "His fast punch is frame six. Okay." },
      { choose: [
        { t: "(Bet on Chenle.)", notes: 3, then: [
          { n: "It was over in about ninety seconds. Junpei played loudly, with his whole body, leaning into every punch and shouting the names of the moves, and Chenle played without moving anything above the wrist, and won both rounds without being hit more than twice, and Junpei stared at the screen and then at him and then at Solar." },
          { s: 'junpei', f: 'surprised', t: "You BET on him? Leader. LEADER. Where's the loyalty?" },
          { s: 'chenle', f: 'neutral', t: "She bet on data. Ramen's on you." }
        ] },
        { t: "(Bet on Junpei.)", notes: 2, then: [
          { n: "Junpei lost anyway, both rounds, spectacularly, and turned to her with tears of gratitude in his eyes for having believed in him, and insisted on buying all three of them ramen, which Chenle accepted with grave politeness and then ate in eleven minutes flat with his glasses fogged white." },
          { s: 'junpei', f: 'happy', t: "Rematch Thursday. I'm gonna train. I'm gonna live in this cabinet." },
          { s: 'chenle', f: 'neutral', t: "It's frame six, Junpei. It's still going to be frame six." }
        ] }
      ] }
    ],
    [
      { n: "He'd found the vending machines on the second floor of the mall, the ones by the escalator that sold cans of coffee and corn soup and sweet milk tea hot, actually hot, out of the same slot as the cold ones, and he'd bought one of each and lined them up on the ledge by the window and was holding his hand above them in turn like a man testing bathwater." },
      { s: 'chenle', f: 'serious', t: "Same machine. Hot and cold. Same machine. Do you understand how insane that is. The engineering. There's a wall in there. It's a very good wall." },
      { s: 'chenle', f: 'happy', t: "The corn one's about fifty-five degrees. I'm estimating. With my hand. Roughly." },
      { n: "He wasn't loud about it. That was the thing she kept noticing. He was lit up from the inside like a lantern and his voice hadn't gone up at all, it had just gone faster and lower and more exact, and his hands kept moving over the cans like he was conducting them." },
      { choose: [
        { t: "Drink one. Science.", notes: 3, then: [
          { n: "He drank the corn soup in one long go, carefully, the way you'd take a reading, and set the empty can back on the ledge in exactly the place it had stood, and said *fifty-two by the end* and *the corn sinks* and *I need to see the inside of that machine* in that order, with the same face for all three." }
        ] },
        { t: "(Buy a hot milk tea and put it in his hands.)", notes: 3, stat: { kindness: 1 }, then: [
          { s: 'chenle', f: 'surprised', t: "Oh." },
          { n: "He held it with both hands the way you'd hold a small animal, and forgot to say anything about the engineering for almost a minute, and then remembered, and said it was a very good wall, again, quieter, to the can." }
        ] },
        { t: "You're a CS major. Not a vending machine major.", notes: 2, then: [
          { s: 'chenle', f: 'neutral', t: "Everything's a system. This one just happens to give you soup." }
        ] }
      ] }
    ],
    [
      { ifEvent: 'a4-light-on', then: [
        { n: "Danielle came down the back row with a disposable camera from the mall's photo counter held at chest height, the cardboard kind with the wind-on wheel, and without asking she took a picture of Chenle playing, and wound it on with her thumb, a dry little ratchet sound, and took another." },
        { s: 'danielle', f: 'happy', t: "Don't mind me. Just a little record. Everyone's so interesting here." },
        { n: "Chenle didn't look up. He didn't look up for the third photo either, or the fourth. He finished the round, took the objective, logged his time in his phone, and only then turned his head, mildly, like somebody noticing it had started raining." },
        { s: 'chenle', f: 'neutral', t: "You've got twenty-three left. On that one. They're twenty-seven exposures." },
        { s: 'danielle', f: 'neutral', t: "...You counted?" },
        { s: 'chenle', f: 'neutral', t: "It clicks." },
        { choose: [
          { t: "(Watch Danielle's face.)", notes: 2, then: [
            { n: "Danielle smiled at him, pleasantly, with a little tilt of her head, the smile that came with a caption, and waited for him to do something with his face that she could write down, and he didn't, and went back to the game, and after a moment she wound the camera on and walked away without taking another, and Solar had the strange, small, warm feeling of having watched someone try a door that turned out to be painted on a wall." }
          ] },
          { t: "Who was that to you? At home.", notes: 3, then: [
            { s: 'chenle', f: 'neutral', t: "Alpha's treasurer. She comes to our parties. She stands near the stairs." },
            { s: 'chenle', f: 'neutral', t: "That's all I've got on her. I don't have much data. She doesn't play anything." },
            { n: "He said it with total unconcern, like a man reporting the weather in a city he'd never visit, and went back to the game, and Solar felt the back of her neck prickle for no reason she could name, and let it." }
          ] }
        ] }
      ], else: [
        { n: "Minji came down the back row with her camera already up, and then stopped, and lowered it, and asked, the way she always asked, whether she could." },
        { s: 'minji', f: 'neutral', t: "Hands only. Both of you. I want the hands." },
        { s: 'chenle', f: 'neutral', t: "...Not my face." },
        { s: 'minji', f: 'happy', t: "Nobody wants your face, Le." },
        { choose: [
          { t: "(Play for the camera.)", notes: 2, then: [
            { n: "They played for the camera. It made her stiff for the first round and then it didn't, and when Minji showed them the footage after on the little flip-out screen it was just four hands on two sets of controls, moving at the same time, his going forward and hers going after his, half a second behind, like an echo." }
          ] },
          { t: "Why only the hands?", notes: 3, then: [
            { s: 'minji', f: 'neutral', t: "Because they're the same here. Everything else changed. I want proof of one thing that didn't." },
            { n: "Chenle didn't say anything to that. He just shifted his elbow off the edge of the cabinet so it wouldn't be in her frame." }
          ] }
        ] }
      ] }
    ],
    [
      { n: "His phone from home was on the cabinet ledge, lit, the way all their phones from home were always lit. The battery icon in the corner was full. It had been full since the night he came through. The clock beside it said the same minute it had said then." },
      { s: 'chenle', f: 'serious', t: "I've been using it for six hours a day. Mobile game, brightness all the way up. It should be dead four times over. It's at a hundred percent." },
      { s: 'chenle', f: 'neutral', t: "I told Mitsuru it was a genuinely upsetting violation of physics. She said that was a very good description of the whole year." },
      { choose: [
        { t: "Does it bother you?", notes: 3, then: [
          { s: 'chenle', f: 'neutral', t: "Everything I know says it should be dying. It's not. So either everything I know is wrong, or this isn't a place where it applies." },
          { s: 'chenle', f: 'neutral', t: "I'm going with the second one. The first one's worse." }
        ] },
        { t: "What game?", notes: 2, then: [
          { n: "He showed her. It was a puzzle game with small round animals that exploded when you lined up three, and he was on level eleven hundred and something, and he played two levels for her with his thumb without looking, still talking about battery chemistry, and both levels were perfect." }
        ] },
        { t: "(Turn it face down for him.)", notes: 2, then: [
          { n: "She turned it face down. He looked at it for a second, the little rectangle of light leaking out round the edges onto the ledge, and then he nodded, as if she'd done the correct thing in a game whose rules he'd only just found out she knew." }
        ] }
      ] }
    ]
  ],
  ranks: [
    { after: '11/17', title: '1: the back row', place: 'Paulownia Mall · Game Panic', time: 'After School', music: 'city', scene: [
      { n: "The thing about Game Panic was that it never got quiet, it only changed what kind of loud it was. After school it was middle-schoolers in loosened ties feeding coins into the fighting cabinets by the door and shouting at each other in a dialect of insult Solar had stopped trying to follow, and past them the rhythm games thudding, and past those the crane machines singing their little hopeful songs, and right at the back, by the fire door, where the carpet was older and the cabinets were older and nobody under thirty went, a row of team shooters with four seats bolted to the floor in front of each, all of them empty but one." },
      { n: "He'd said almost nothing to her the night he came through, and most of what he had said had been a number or a position. Since then he'd been, as far as she could tell, a rumor. Mitsuru said he had asked for the mall's opening hours. Minji said he was fine, in the tone of somebody who hadn't seen him either. Jaemin, at the guesthouse door, had said *he's in his cave, it's a whole thing, he comes out when there's food,* with the confidence of a man who'd been saying it for years." },
      { n: "Short, blonde, his fringe in his eyes and his glasses pushed up into it, a grey hoodie with his hands lost in the front pocket whenever they weren't on the controls, and a can of grape soda on the floor beside his foot at an angle that looked placed rather than put down. He didn't look round when she came down the row. He'd seen her in the screen's reflection, she realized afterwards, three cabinets back." },
      { register: 'chenle' },
      { s: 'chenle', f: 'neutral', t: "Hi." },
      { s: 'chenle', f: 'neutral', t: "Practice is Monday, Tuesday, Thursday and Saturday." },
      { n: "He said it to the screen, like the end of a sentence he'd started before she got there." },
      { s: 'solar', f: 'neutral', t: "Practice for what?" },
      { s: 'chenle', f: 'neutral', t: "Nothing. There's no lab. There's no coach. There isn't even the game, I asked the guy at the counter and he thought I was making it up." },
      { s: 'chenle', f: 'neutral', t: "I didn't see a reason to stop." },
      { n: "He nodded at the seat beside him. On the screen four roles sat in a row in cheerful red letters, something with a rifle and something with a shield and something fast, and at the end, the one nobody picked, a little wrench, its button so worn the sticker had gone almost white." },
      { choose: [
        { t: "(Take the one with the wrench.)", notes: 3, flag: { 'chenle-repair': true }, then: [
          { n: "She didn't read what it did. Her hand was on it before the rest of her had caught up, the way you'd reach for a light switch in a room you'd lived in, and the select screen chimed, and beside her Chenle took out his phone, the one from home, and typed something into it with one thumb, and put it away again." },
          { s: 'chenle', f: 'neutral', t: "Okay." }
        ] },
        { t: "Which one am I?", notes: 2, then: [
          { s: 'chenle', f: 'neutral', t: "Pick." },
          { n: "She hovered over the rifle, because it looked like the one people picked, and her hand moved one button to the right on its own and pressed the wrench, and Chenle took out his phone and typed something and put it away again without a word, which was somehow louder than a word." }
        ] },
        { t: "(Take the rifle. See what he does.)", notes: 2, then: [
          { n: "She took the rifle. He didn't do anything. He took the big slow one with the shield, and they went in, and somewhere in the second round, at the respawn screen, she watched her own thumb move her over to the wrench without consulting her at all. He had his phone out before the round loaded." },
          { s: 'chenle', f: 'neutral', t: "Ninety-one seconds." }
        ] }
      ] },
      { n: "It was a bad game, the way old arcade games were bad, a stick on a stand instead of a mouse and a screen that smeared when you turned too fast, and none of that mattered, because a minute in she understood something about the boy in the next seat that she had no right to understand. He went forward when she was ready. Not when she said so, she hadn't said anything. He went forward on the exact half second her repair came off cooldown, as if he could hear it, and she was already moving after him before she knew she'd decided to." },
      { n: "They won. Then they won again. On the third a pair of high schoolers in the next cabinet joined on the other side and lost loudly, and one of them came round to see who was beating him and found a short blonde foreigner and a Gekkoukan third-year sitting perfectly still, and said something to his friend about cheating, and Chenle pushed his glasses up with one finger and didn't look at him." },
      { s: 'chenle', f: 'neutral', t: "Sixty." },
      { s: 'solar', f: 'neutral', t: "What?" },
      { s: 'chenle', f: 'neutral', t: "You repair me at sixty percent. Every time. Not fifty. Not when I'm low. Not when I ask. Sixty." },
      { s: 'solar', f: 'neutral', t: "Is that good?" },
      { s: 'chenle', f: 'neutral', t: "It's what you do." },
      { n: "He took the phone out again. She watched him type. A column of numbers, she saw, upside down from where she sat, dates down one side and something else down the other, and it wasn't a long column, and the top of it was today." },
      { choose: [
        { t: "What are you writing down?", notes: 2, then: [
          { s: 'chenle', f: 'neutral', t: "Your hands." },
          { s: 'solar', f: 'neutral', t: "Not me?" },
          { s: 'chenle', f: 'neutral', t: "I don't have any data on you." },
          { n: "He said it flat and true and without any meanness in it, the way he'd have told her a cooldown, and it went in under her ribs anyway, the way the true things did here, and sat there." }
        ] },
        { t: "(Put another coin in.)", notes: 3, stat: { proficiency: 1 }, then: [
          { n: "She put the coin in. He looked at it in the slot, and then at her, and then dug in his hoodie pocket and put one of his own in the slot beside it, and the screen counted them up, two credits, and he said *best of five* in a voice that was trying very hard to be the same voice as before and was, by about a semitone, not." }
        ] },
        { t: "You were testing me.", notes: 2, then: [
          { s: 'chenle', f: 'neutral', t: "Yes." },
          { s: 'solar', f: 'neutral', t: "Did I pass?" },
          { s: 'chenle', f: 'neutral', t: "It's not that kind of test." },
          { n: "He didn't say what kind it was. He finished the soda, and crushed the can very precisely in the middle, and set it back down exactly where it had been." }
        ] }
      ] },
      { n: "When she got up to go, because there was a tower at midnight and a dinner before it that Fuuka would notice her missing, he spoke without turning round, and leaned in a little as he did it, the way people lean in to tell you where something's buried." },
      { s: 'chenle', f: 'serious', t: "The cabinets up front lag. Forty milliseconds. Maybe fifty. These ones don't. That's why the back." },
      { n: "His eyes had gone very bright behind the glasses and his voice hadn't gone up at all. It was the most she'd ever seen anyone want to tell her something, and the something was input lag." },
      { s: 'chenle', f: 'neutral', t: "Monday, Tuesday, Thursday, Saturday. I'm here from one. You get out at three twenty, I asked. You don't have to come." },
      { n: "She didn't say she would. He didn't ask her to. When she looked back from the end of the row he had his phone out again, and she'd have bet the rest of her coins he was typing in the time she left." }
    ] },

    { after: '11/24', title: '2: nine', place: 'Kirijo Guesthouse · Front', time: 'Evening', music: 'night', scene: [
      { n: "The one thing everyone agreed on about Chenle, from Minji to the man behind the Game Panic counter who had started nodding at him like a regular, was that he didn't do outside. So it was strange to find him on the guesthouse's front steps after dark in late November, hood up, knees together, a can beside him, sitting in the cold like a cat that had been put out." },
      { s: 'chenle', f: 'neutral', t: "Jaemin found the karaoke setting on the lounge TV." },
      { s: 'chenle', f: 'neutral', t: "It goes up to thirty. He found that too." },
      { n: "Through the glass door behind him a song she half-knew was coming out of the lounge with Jaemin's voice laid over the top of it, very confident and a quarter tone flat, and under that the murmur of several people who lived in the building deciding whether to be annoyed or join in. Solar sat on the step above him. The stone was so cold it felt wet." },
      { n: "He took the phone from home out of his hoodie pocket. Lit, battery full, the clock in the corner stuck at the minute he'd crossed. He opened the call log and turned the screen so she could see, and didn't say anything, and let her read it." },
      { n: "Her name, in a column. *Solar. Solar. Solar.* The times beside each one going down the screen like the rungs of a ladder, one every twelve minutes, the gaps as even as stitches, nine of them, and then nothing for an hour and a half, and then, alone at the bottom, a minute before midnight, one more." },
      { s: 'chenle', f: 'neutral', t: "Nine. Before." },
      { s: 'chenle', f: 'neutral', t: "The tenth one went through. I don't count the tenth the same." },
      { s: 'solar', f: 'neutral', t: "Why not?" },
      { s: 'chenle', f: 'neutral', t: "Because it worked." },
      { choose: [
        { t: "Why count at all?", notes: 3, then: [
          { s: 'chenle', f: 'neutral', t: "If I say *a lot,* it's a feeling. People argue with feelings. Nine's nine. Nobody argues with nine." },
          { s: 'chenle', f: 'neutral', t: "Jaemin thinks it was six. Jaemin rounds." }
        ] },
        { t: "I'm sorry I didn't pick up.", notes: 2, then: [
          { s: 'chenle', f: 'neutral', t: "You didn't have your phone. You didn't have anything. It's not a sorry thing." },
          { s: 'chenle', f: 'neutral', t: "I just wanted it written down somewhere that isn't me. That it was nine." }
        ] },
        { t: "(Read the times. All of them.)", notes: 3, then: [
          { n: "She read them. Eight forty-seven. Eight fifty-nine. Nine eleven. On and on, regular as a lighthouse, and she found her eyes going down them the way you'd go down a list of names on a wall, and at the gap she stopped." },
          { s: 'chenle', f: 'neutral', t: "I stopped because Jaemin said it was weird to keep calling. Then I started again because it wasn't." }
        ] }
      ] },
      { n: "He scrolled. There was another column under hers, longer, a different name in it, over and over." },
      { s: 'solar', f: 'neutral', t: "Twelve." },
      { s: 'chenle', f: 'neutral', t: "He doesn't pick up. That's not new." },
      { s: 'solar', f: 'neutral', t: "Are you close? You and him." },
      { s: 'chenle', f: 'neutral', t: "We live in the same house." },
      { s: 'solar', f: 'neutral', t: "That's not what I asked." },
      { s: 'chenle', f: 'neutral', t: "It's what I answered." },
      { n: "He put the phone face down on his knee. Behind them Jaemin went for a note and didn't get there and somebody in the lounge cheered anyway, and Chenle closed his eyes very briefly, like a man feeling a draft." },
      { s: 'chenle', f: 'neutral', t: "I'd been looking for you for three hours and eleven minutes when I crossed. That's the only number I'm sure of. The phone stopped at twelve. I don't know what time it is at home. Nobody here agrees. Minji checks her camera like it's going to tell her." },
      { s: 'chenle', f: 'sad', t: "Three eleven. I keep that one." },
      { choose: [
        { t: "(Call him. On the phone Mitsuru gave you.)", notes: 3, flag: { 'chenle-one': true }, then: [
          { n: "She took out the pink folding phone and found his number, which Mitsuru had put in without asking, under a name in katakana she had to sound out, and pressed call. In his other pocket, the phone from here, something buzzed against the stone." },
          { n: "He took it out and looked at the screen for a long second. Her name. Then he opened it and put it to his ear, a meter and a half away from her, with the cold coming up off the street and Jaemin starting a second verse nobody had asked for." },
          { s: 'chenle', f: 'neutral', t: "One." },
          { n: "He closed the phone. He didn't explain. He didn't need to, which she found she liked about him more than anything else so far." }
        ] },
        { t: "Then write tonight down. The time.", notes: 2, then: [
          { s: 'chenle', f: 'neutral', t: "Eight fifty-two." },
          { n: "He hadn't looked at a clock. She checked the pink phone. It was eight fifty-two." }
        ] },
        { t: "(Sit with him till the song's over.)", notes: 2, then: [
          { n: "She sat. The song took four more minutes, and then Jaemin started another, and then a third, and she stayed for all three with her hands in her sleeves and the cold coming through the seat of her skirt, and Chenle didn't say anything and didn't go in, and somewhere in the third song he shifted along the step a few centimeters, so that his shoulder was between her and the wind." }
        ] }
      ] },
      { n: "The door banged open behind them and let the whole song out onto the street at once." },
      { s: 'jaemin', f: 'happy', t: "LE. Is that— is that SOLAR LEE on our STEP? Come in. Come in, come in, I'm doing a duet, I need a—" },
      { s: 'chenle', f: 'neutral', t: "No." },
      { s: 'jaemin', f: 'surprised', t: "I didn't even finish the sentence!" },
      { s: 'chenle', f: 'neutral', t: "I know." },
      { n: "Jaemin looked from one of them to the other, and something in his face did a quick bright calculation, and then he backed into the hall and closed the door very slowly, like a man leaving a nursery. Chenle put the phone from home back in his pocket. Not the way people put away something they were finished with. The way you put away a receipt you meant to keep." }
    ] },

    { after: '12/1', title: '3: secondary calls', place: 'Paulownia Mall · Game Panic', time: 'After School', music: 'joy', scene: [
      { n: "Minji knew exactly where they'd be on a practice day, and chose one, and came down the back row of Game Panic with her cap on frontwards and her camera on its strap and a plastic bag from the konbini swinging from one hand, and dropped the bag on the floor between their seats like a captain dropping a playbook." },
      { s: 'minji', f: 'happy', t: "Three of five. Sixty percent of a team. That's a scrim." },
      { s: 'chenle', f: 'neutral', t: "It's sixty percent of a team. A scrim needs ten people. This is a practice range with opinions." },
      { s: 'minji', f: 'neutral', t: "Captain says it's a scrim." },
      { s: 'chenle', f: 'neutral', t: "...True." },
      { n: "Then he looked in the bag, and his whole face changed, slowly, from neutral to wronged, the way the sky changes before rain." },
      { s: 'chenle', f: 'serious', t: "Shrimp chips." },
      { s: 'minji', f: 'neutral', t: "Shrimp chips." },
      { s: 'chenle', f: 'serious', t: "They leave residue. On the stick. It's a grip issue. That's eleven percent of my grip, gone, every time you touch the bag." },
      { s: 'minji', f: 'happy', t: "You made that number up." },
      { s: 'chenle', f: 'neutral', t: "I estimated it. It's different. Estimating is a skill." },
      { choose: [
        { t: "(Side with Minji. Open the chips.)", notes: 2, then: [
          { n: "She opened the chips. Chenle watched her do it like a man watching his house burn down, and then took one, very carefully, by the edge, and ate it, and wiped his fingers on the inside of his hoodie pocket where it wouldn't touch anything that mattered, and said nothing, and took another." },
          { s: 'minji', f: 'happy', t: "He's eaten half the bag. Every Saturday. He's eaten half the bag every single Saturday for three months." }
        ] },
        { t: "(Side with Chenle. Go buy something dry.)", notes: 2, then: [
          { n: "She went to the konbini by the escalator and came back with a box of the thin chocolate sticks, the kind with a bare end to hold, and set it down between them, and both of them stopped talking at once, the way two people stop when someone finally says the right answer in a quiz." },
          { s: 'chenle', f: 'happy', t: "There's a handle. Built in. That's design." }
        ] },
        { t: "Is this what you two do? At home?", notes: 3, then: [
          { s: 'minji', f: 'neutral', t: "Every Saturday. We've never resolved it." },
          { s: 'chenle', f: 'neutral', t: "We're not going to resolve it." },
          { s: 'minji', f: 'happy', t: "It's tradition. Haerin thinks we're married." },
          { s: 'chenle', f: 'flustered', t: "Haerin doesn't think anything, Haerin's said nine words to me." }
        ] }
      ] },
      { s: 'minji', f: 'neutral', t: "Can I film? Hands. Not faces." },
      { s: 'chenle', f: 'neutral', t: "...Not my face." },
      { s: 'minji', f: 'neutral', t: "Hands, Le. I said hands." },
      { n: "She set the camera on top of the cabinet, angled down, the little red light on, and sat in the third seat, and took the rifle without being told, and the three of them went in." },
      { n: "Minji called it from the start, low and quick, the way captains talked when they'd done it so long it had stopped being talking. *Left. Hold. Hold. Go.* And they went. And it was good, it was clean, it was the kind of clean that made Solar's hands feel like they'd been waiting all week for something to do, and halfway through the second round Minji stopped calling, mid-word, and turned in her seat." },
      { s: 'minji', f: 'neutral', t: "The last practice. Doyoung had Le call first map." },
      { s: 'solar', f: 'neutral', t: "Who's Doyoung?" },
      { s: 'minji', f: 'neutral', t: "Coach. Clipboard. He'd hate it here." },
      { s: 'chenle', f: 'neutral', t: "He'd love it here. He'd hate that he loved it." },
      { s: 'minji', f: 'happy', t: "Every call was right. Every one. I've never been so annoyed in my life." },
      { choose: [
        { t: "Then Chenle calls it.", notes: 3, flag: { 'chenle-calls': true }, then: [
          { n: "Minji grinned and took her hands off the stick and held them up like a surgeon, and Chenle looked at the two of them as though they'd ganged up on him, which they had." },
          { s: 'chenle', f: 'neutral', t: "...Fine. Hold. Nobody move till I say." },
          { n: "Quiet and level, barely above the cabinet noise. It sounded wrong for a second, the way it must have sounded wrong in a room she couldn't remember, because the voice of the team was supposed to be Minji's, and then it didn't, and she held, with her repair kit ready and unused, and waited, and he said *now* very quietly, and they went, all three, at once, and the other side folded like paper." },
          { n: "Minji reached across Solar and knocked her fist against his shoulder. The corner of his mouth moved. That was all." }
        ] },
        { t: "Minji's captain. Minji calls.", notes: 2, then: [
          { s: 'minji', f: 'happy', t: "Hear that? Still mine." },
          { s: 'chenle', f: 'neutral', t: "True." },
          { n: "She called the rest of it. He said *true* once more, under his breath, at a call she made that he'd clearly have made himself, and Minji heard it and didn't say anything and smiled at the screen for a full minute." }
        ] },
        { t: "I'll call it.", notes: 2, stat: { courage: 1 }, then: [
          { n: "She called it. She didn't know where it came from. She said *left, wait, wait* in a voice she'd never heard herself use, flat and fast and sure, and they waited, and she said *go,* and it was right, and both of them turned and looked at her at the same time." },
          { s: 'minji', f: 'surprised', t: "Oh. She's back." },
          { n: "Chenle didn't say anything. He took his phone out and typed, and put it away, and pushed his glasses up, and didn't look at her for the rest of the round." }
        ] }
      ] },
      { n: "Later Minji went off down the row to film the light the crane machines threw on the carpet, which she said was the best light in the building, and Chenle watched her go with his chin on his fist." },
      { s: 'chenle', f: 'neutral', t: "She doesn't sleep. At the guesthouse. I hear her door at three." },
      { s: 'chenle', f: 'neutral', t: "It's not my business. I'm just saying I hear it." },
      { n: "Without looking, he put one of the chocolate sticks, or the last shrimp chip, whichever was nearest, into Solar's hand, and went back to the screen, and she understood she'd just been told something about Minji in the only language he had for it, and that he'd expected her to do something with it, and trusted her to work out what." }
    ] },

    { after: '12/8', title: '4: the corner', place: 'Paulownia Mall · Game Panic', time: 'After School', music: 'city', scene: [
      { n: "There were places her brother didn't fit, and she wouldn't have been able to name any of them until she watched him come down the back row of Game Panic in a long black coat, turned slightly sideways between the cabinets, the way a man walks down the aisle of a small plane. Middle-schoolers got out of his way without looking up. One of the high schoolers at the fighting cabinet stopped mid-combo and lost." },
      { n: "She'd heard it from Jaemin, at the guesthouse, at length, in the voice of a man reporting an injustice, that Jaehyun Lee approved of exactly one member of the house below the officers, and it wasn't Jaemin." },
      { s: 'jaehyun', f: 'neutral', t: "Solar." },
      { s: 'jaehyun', f: 'neutral', t: "Chenle." },
      { n: "He said Chenle's name the way he said hers, a confirmation, except that in Chenle's there was something else, a warmth so slight you'd have needed instruments to find it, and beside her Chenle sat up very straight and moved his soda can a centimeter to the left, as if he'd been caught with it." },
      { s: 'jaehyun', f: 'neutral', t: "Fuuka tells me you've been in the tower three nights running." },
      { s: 'jaehyun', f: 'serious', t: "You're going back to the dorm. You're going to eat a proper dinner and you're going to sleep. I've already told Mitsuru." },
      { n: "He'd already told Mitsuru. Something went up the back of her neck, hot and fast and very old, older than anything she could remember, and settled behind her ears, and she didn't know why, and she hated that she didn't know why almost as much as she hated the thing itself." },
      { choose: [
        { t: "You told Mitsuru. Before me.", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "She's the one who decides who goes up. It was efficient." },
          { n: "Efficient. She looked at the screen so she wouldn't have to look at his face being reasonable." }
        ] },
        { t: "(Don't look up from the screen.)", notes: 2, then: [
          { n: "She didn't look up. She repaired Chenle at sixty percent, the way she always did, and her hands were perfectly steady, and the back of her neck was on fire." }
        ] },
        { t: "I'm in the middle of a game.", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "It's an arcade, Solar. It'll be here tomorrow." }
        ] }
      ] },
      { n: "Chenle didn't stand up. That was what she'd remember. He didn't stand, or raise his voice, or turn round in the seat. He leaned, very slightly, to his left, so that his shoulder was between her and the aisle, and kept his hands on the stick." },
      { s: 'chenle', f: 'neutral', t: "Practice is till five." },
      { s: 'jaehyun', f: 'neutral', t: "This isn't practice." },
      { s: 'chenle', f: 'neutral', t: "It's practice to her. If she wants to go, she can say so. I'm just sitting here." },
      { n: "Jaehyun looked at him. It was the look he gave things on a field, she'd learn later, the look that read eleven people at once and arrived somewhere, and it went from Chenle's shoulder to Chenle's hands to Chenle's face, which was doing absolutely nothing, and then to hers." },
      { n: "It was, she would think afterwards, the nearest thing to a play anyone had ever called against her brother in her hearing, and it had been called by a boy sitting down." },
      { choose: [
        { t: "Five. Then I'll eat. I'll tell Mitsuru myself.", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "...Five." },
          { s: 'jaehyun', f: 'neutral', t: "Then you eat." },
          { n: "He didn't argue. He'd come in with the whole evening already decided, and it was hers now, and he let her have it, the way you'd let somebody take a bag off you that you'd been carrying for them without asking." }
        ] },
        { t: "(Say nothing. Let Chenle hold it.)", notes: 2, then: [
          { n: "She said nothing. Chenle held it. Jaehyun waited, and nothing happened, and nothing went on happening, and he exhaled through his nose in what might have been, in a smaller man, a laugh." },
          { s: 'jaehyun', f: 'neutral', t: "Five. Then she eats." },
          { s: 'chenle', f: 'neutral', t: "She eats." }
        ] },
        { t: "He's right. I'm tired. I'll go at five.", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "Good." },
          { n: "It was the same outcome he'd walked in with, nearly. It wasn't the same at all. He seemed to know that, a little, and to not quite know what to do with it." }
        ] }
      ] },
      { n: "On his way past he put his hand on top of Chenle's head, briefly, flat, the way you'd touch a good dog or a younger brother, and walked back up the row sideways between the cabinets, and Chenle went completely rigid until the coat had gone round the corner by the crane machines." },
      { s: 'chenle', f: 'flustered', t: "He touched my head." },
      { s: 'chenle', f: 'flustered', t: "My heart's at a hundred and ten. I can feel it in my glasses." },
      { s: 'chenle', f: 'serious', t: "Do you know what it's like being the one he doesn't worry about? It's a job. Nobody told me it was a job. I have to be the one he doesn't worry about forever now. I can never do one thing wrong in front of him for the rest of my life." },
      { n: "His voice hadn't gone up at all. It had just gone faster, and lower, and more precise, like someone reading out the terms of a contract he'd signed without reading, and right at the end of it, unexpectedly, there was a giggle, a small high one, that he clearly hadn't authorized." },
      { choose: [
        { t: "You stood in front of me.", notes: 3, then: [
          { s: 'chenle', f: 'neutral', t: "I sat in front of you. Standing would've been a thing." },
          { s: 'chenle', f: 'neutral', t: "It's the job. Tank. You don't thank a tank. You just stay behind it." }
        ] },
        { t: "(Buy him a soda. He's earned it.)", notes: 3, stat: { kindness: 1 }, then: [
          { n: "She bought him a grape soda from the machine by the fire door. He took it and turned it round and read the whole label, ingredients and all, very slowly, until his heart had evidently come down to something he could live with, and then opened it, and said *thanks* to the can." }
        ] },
        { t: "He likes you, you know.", notes: 2, then: [
          { s: 'chenle', f: 'neutral', t: "I know. It's the worst thing that's ever happened to me." }
        ] }
      ] },
      { n: "At four fifty-nine he logged out without being asked. At five he stood up, and picked up his can, and looked at her." },
      { s: 'chenle', f: 'neutral', t: "Go eat." },
      { n: "It wasn't an order. It was the time." }
    ] },

    { after: '12/15', title: '5: readings', place: 'Tartarus', time: 'The Dark Hour', music: 'tartarus', scene: [
      { n: "It had been Fuuka's idea, and Fuuka had asked for it the way she asked for everything, apologizing first. At dinner one night at the dorm she'd been describing what the tower felt like from the outside, the readings, the way a Shadow's turn arrived like a pressure change before it arrived like a Shadow, and Chenle, who'd been eating silently at the visitors' end of the table, had put his chopsticks down and asked her three questions in a row that nobody had ever asked her, and she had gone pink and answered all of them, and asked Mitsuru the next morning whether he could come to the lobby, once, and sit." },
      { n: "Mitsuru had said yes in eleven words, nine of which were conditions. He stayed in the lobby. He never went past the foot of the stairs. He didn't touch anything that glowed." },
      { n: "So tonight, somewhere far above that lobby, in a corridor that wasn't the same corridor twice, Solar stood with Akihiko on her left and Junpei on her right and something large and many-handed turning in the dark at the end of the hall, and Fuuka's voice in her ear, soft and steady, and then, behind it, a second voice." },
      { s: 'fuuka', f: 'neutral', t: "It's gathering something. I can feel it gathering. I can't tell you when it lets go, I'm sorry, it's—" },
      { s: 'chenle', f: 'neutral', t: "Four point two seconds. Every turn. It's been four point two all fight. It charges on the third. That's the next one." },
      { s: 'chenle', f: 'neutral', t: "Back two steps. Don't use anything." },
      { n: "Low and exact. It came into her ear so quietly that for one second her body obeyed it before her head had worked out whose it was, her feet already taking the two steps back, the way they would have in a room full of computers in a building she couldn't remember, and Akihiko, beside her, half-turned, and stared at the air." },
      { s: 'akihiko', f: 'surprised', t: "Who is that?" },
      { s: 'junpei', f: 'flustered', t: "Dude's a metronome. Is he a robot? Fuuka, is he a robot?" },
      { choose: [
        { t: "(Hold. Wait for his call.)", notes: 3, then: [
          { n: "She held. Every part of her wanted to go, and she held, and she counted with him without meaning to, one, two, and the thing at the end of the hall let go of whatever it had been gathering into the empty space where they'd been standing, and the floor where she'd have been went black and smoking." },
          { s: 'chenle', f: 'neutral', t: "Now. Go now." },
          { n: "They went. All three of them, at once, the way you can only go when somebody else is holding the clock for you." }
        ] },
        { t: "(Go on your own read. Half a second early.)", notes: 2, stat: { courage: 1 }, then: [
          { n: "She went half a second before he said to. She couldn't have told anyone why. She saw it, the way you see a glass about to tip, and went, and Akihiko went with her because Akihiko always went with her, and the thing's turn came down a heartbeat too late on the place where they'd been." },
          { s: 'chenle', f: 'neutral', t: "...Or that. That works." },
          { n: "There was a sound in her ear after it, very small, a breath with a laugh at the top of it, quickly put away." }
        ] }
      ] },
      { place: 'Tartarus · Lobby', time: 'The Dark Hour', soft: true },
      { n: "He was sitting on the bottom step when they came down, exactly where Mitsuru had said, next to Fuuka, whose light was going out slowly around her like a lamp somebody had turned down instead of off. His hands were perfectly still on his knees. His voice had been perfectly steady the whole way up and the whole way down. It was only when Solar sat beside him that she saw his left knee going under his still hands, very fast, very small, like a sewing machine." },
      { s: 'chenle', f: 'neutral', t: "You were at eleven percent. On the fourth turn." },
      { s: 'solar', f: 'neutral', t: "I felt fine." },
      { s: 'chenle', f: 'neutral', t: "Eleven." },
      { s: 'fuuka', f: 'happy', t: "He counts the way I listen. I didn't know anybody else did it like that. I always thought I was just being nervous." },
      { ifFlag: 'chenle-calls', then: [
        { s: 'chenle', f: 'neutral', t: "You told Minji I'd call it. At the arcade. So when Fuuka asked, I couldn't really say no. You'd already said yes for me." },
        { n: "He didn't say it like a complaint. He said it like someone pointing out where a thing had started, so it would be on the record." }
      ], else: [
        { s: 'chenle', f: 'neutral', t: "Fuuka asked why I'd be any good at it. I said I don't know. She said because you count. That's what our coach said, too. Word for word, basically." },
        { s: 'chenle', f: 'neutral', t: "I'm starting to think it's just a thing people can see on me." }
      ] },
      { choose: [
        { t: "You sounded like you'd done it a hundred times.", notes: 2, then: [
          { s: 'chenle', f: 'neutral', t: "Once. At home. One map. This is the second." },
          { s: 'chenle', f: 'neutral', t: "The first one was easier. Nobody could die." }
        ] },
        { t: "Thank you for the call.", notes: 3, then: [
          { s: 'chenle', f: 'neutral', t: "Don't. If you thank me I'll think about it, and if I think about it I'll get worse." },
          { n: "But he looked down at his knee, and it had stopped, and he looked at it like it belonged to somebody else who'd finally behaved." }
        ] },
        { t: "(Put your hand on his knee till it stops.)", notes: 3, then: [
          { n: "She put her hand on his knee, lightly, the way you'd put your hand on a washing machine on spin. It went on for a few seconds under her palm, and then slowed, and then stopped, and he didn't look at her and didn't move her hand." },
          { s: 'chenle', f: 'neutral', t: "It does that. It's not scared. It's a lot of data at once. It goes somewhere." }
        ] }
      ] },
      { s: 'chenle', f: 'neutral', t: "I asked Fuuka if I've got one. A Persona. She looked. I don't." },
      { s: 'chenle', f: 'neutral', t: "So I can't stand in front of you up there." },
      { n: "He said it to the stairs, to the dark at the top of them where she'd just been, and then he pushed his glasses up and stood, because Mitsuru was looking at her watch, and the hour wasn't going to wait for anyone to finish a sentence." },
      { s: 'chenle', f: 'neutral', t: "Twenty-two floors tonight. That's a lot. Go to sleep." }
    ] },

    { after: '12/22', title: '6: ninety-eight', place: 'Paulownia Mall · Game Panic', time: 'After School', music: 'tender', scene: [
      { n: "The mall had gone all the way into December. Tinsel on every pillar, a plastic tree in the fountain, the same four carols on a loop so tight you could hear the seam, and even the back row of Game Panic had been reached by somebody with a roll of red ribbon and an optimism nobody back there shared. There was a bow on the fire door. Chenle had moved it, slightly, so it didn't hang over the cabinet's speaker." },
      { n: "He had a sheet of paper on the ledge. Not his phone, paper, the back of a tournament flyer from the counter, folded in half and then in half again and opened out, and on it in his tiny careful handwriting, in columns, everything." },
      { s: 'chenle', f: 'neutral', t: "I have enough now. To mean something. Statistically." },
      { s: 'solar', f: 'neutral', t: "Enough what?" },
      { s: 'chenle', f: 'neutral', t: "You." },
      { n: "He turned the paper round so she could read it, and then, because she couldn't, because it was in a shorthand that only made sense to one person, he read it to her, running his finger down it, in a voice so even she could hear how much work was going into keeping it that way." },
      { s: 'chenle', f: 'serious', t: "Repair at sixty. At home your heal threshold was sixty-two. You hold the second cooldown, you never burn both. You did that at home. You move before the fight starts, not when it starts. You did that at home. You stop babysitting the sniper after the first death. You did that at home too, eventually. It took you a month there. It took you a week here." },
      { s: 'chenle', f: 'neutral', t: "Ninety-eight percent. Inside the margin of error. You fell off for a while at home and came back. Here you never fell off. You just came back." },
      { ifFlag: 'chenle-repair', then: [
        { s: 'chenle', f: 'neutral', t: "And the first day you took the wrench without reading it. I have the time. Three forty-one in the afternoon." }
      ] },
      { s: 'solar', f: 'neutral', t: "That's good. Isn't it?" },
      { s: 'chenle', f: 'neutral', t: "It's ninety-eight percent good." },
      { s: 'solar', f: 'neutral', t: "And the two?" },
      { n: "He folded the paper back up along its creases, very precisely, half and half again, and put it under his soda can on the ledge, and looked at the screen instead of at her." },
      { s: 'chenle', f: 'sad', t: "The two is that your hands know where I'm going to be, and you don't know what I'm like when we lose." },
      { s: 'chenle', f: 'neutral', t: "Nobody here does. I'm terrible. I don't talk for a day and then I make a document." },
      { n: "He didn't say anything else, and he didn't need to. He'd done the only thing he knew how to do with it, which was to put a number on it so it would hold still, and the number was ninety-eight, and the number was unbearable, and he'd said it out loud anyway, in a back row, under a ribbon, to the person it was about." },
      { choose: [
        { t: "Then teach me the two percent.", notes: 3, then: [
          { s: 'chenle', f: 'surprised', t: "...It's not teachable. It's just time." },
          { s: 'solar', f: 'neutral', t: "Then give me the time." },
          { n: "He looked at her for a long second through his glasses, and then took out his phone, and opened the column, and scrolled to the bottom, and added a new line under today's date with no number in it at all, just a dash, as if he were leaving a space for something he'd fill in later." }
        ] },
        { t: "I'm sorry.", notes: 2, then: [
          { s: 'chenle', f: 'neutral', t: "Don't. It's a number. Numbers aren't anybody's fault. That's the whole point of them." }
        ] },
        { t: "(Look at your hands for a long time.)", notes: 3, then: [
          { n: "She looked at her hands. They were just hands, a little chapped from the cold, a callus on one finger she couldn't account for, a faint line across one palm from the Evoker's grip. Ninety-eight percent of a girl she didn't remember lived in them and went out every afternoon to stand behind a boy in a grey hoodie, and they had never once asked her permission." },
          { n: "Beside her, Chenle didn't say anything. He moved his soda can a centimeter closer to her side of the ledge, which she would understand much later was the most he had to offer, and was a lot." }
        ] }
      ] },
      { ifFlag: 'route-R', then: [
        { s: 'chenle', f: 'neutral', t: "You're coming home anyway. So it's fine. It's ninety-eight now and it'll be a hundred later." },
        { s: 'chenle', f: 'neutral', t: "Regionals is in December. At home it's still November. I checked. That's a lot of practice days." }
      ], else: [{ ifFlag: 'route-true', then: [
        { s: 'chenle', f: 'neutral', t: "You're coming home. Fuuka says it's more complicated than that. I don't care how complicated. Home's home." },
        { s: 'chenle', f: 'neutral', t: "Regionals is in December. At home it's still November. That's a lot of practice days." }
      ], else: [
        { s: 'chenle', f: 'neutral', t: "So I'm writing it all down. Properly. Every number." },
        { s: 'solar', f: 'neutral', t: "Why?" },
        { s: 'chenle', f: 'neutral', t: "In case somebody else ever has to play support for this team. They'll need to know where to stand." }
      ] }] },
      { choose: [
        { t: "(Put a coin in. One more.)", notes: 2, then: [
          { n: "She put a coin in. He put one in after it. They played one more, and it was ninety-eight percent perfect, and neither of them said anything about the two." }
        ] },
        { t: "What's in the document? After you lose.", notes: 3, then: [
          { s: 'chenle', f: 'happy', t: "Every fight. Who died first. What it cost. What we should've done instead. It's usually about forty pages." },
          { s: 'chenle', f: 'neutral', t: "Nobody reads it. Minji reads the first page and the last page. You read all of it, at home. You were the only one." },
          { n: "He said the last part to the screen, quickly, the way you'd step over a crack in the pavement, and pressed start before she could answer." }
        ] }
      ] }
    ] },

    { after: '12/29', title: '7: the house', place: 'Kirijo Guesthouse', time: 'Evening', music: 'joy', scene: [
      { n: "The guesthouse lounge in winter break was a lot of people who'd never have shared a room at home sharing a room, and pretending it was normal, and doing it badly, and doing it every night. Jaemin had the television, as he always had the television, and had drawn a karaoke bracket on a sheet of paper taped to its frame, sixteen names, most of whom had not agreed to be on it. Minji was at the window with her camera, filming the frost come in at the corners of the glass. Jaehyun was in the one good armchair with a book on the history of the city that Mitsuru had lent him, reading it like it owed him money." },
      { ifEvent: 'a4-light-on', then: [
        { n: "Danielle had the dining table at the far end. She'd covered half of it with the guesthouse's grocery receipts in neat overlapping rows, like scales, and a ledger open in front of her, and a highlighter laid parallel to the ledger's edge, and she looked up when Solar came in, and smiled, pleasantly, and wrote something down." }
      ] },
      { ifEvent: 'a4-mark', then: [
        { n: "Mark was on the arm of the sofa with a borrowed guitar across his knees, playing something quiet and warm under everyone's conversation, and when Solar came in he waved with the hand on the neck of the guitar and lost the chord and laughed, a bit too easily, and found it again." }
      ] },
      { n: "And in the far corner, in the chair by the radiator that nobody else wanted because it made a ticking noise every ninety seconds, Chenle, with his phone and his feet tucked up under him and the expression of a man sitting very still at the bottom of a lake." },
      { choose: [
        { t: "(Sit in the corner with Chenle.)", notes: 3, then: [
          { n: "She dragged a dining chair over and sat in the corner with him. He didn't look up. He moved his feet slightly so her chair could come in closer to the radiator, which ticked." },
          { s: 'chenle', f: 'neutral', t: "Ninety seconds. Exactly. I've timed it forty times. I'm going to find out why." }
        ] },
        { t: "(Sign up for Jaemin's bracket first.)", notes: 2, then: [
          { s: 'jaemin', f: 'happy', t: "SOLAR LEE. Signing up of her own free will. You see this, Le? Some people have *spirit.*" },
          { n: "She wrote her name in an empty line. Jaemin seeded her against Jaehyun in the first round with the face of a man lighting a fuse, and Jaehyun didn't look up from his book, and turned a page, and said *no,* and Jaemin wrote *forfeit* next to his name with enormous satisfaction. Twenty minutes later she was in the corner beside Chenle anyway." }
        ] },
        { t: "(Stand by Jaehyun's chair a minute.)", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "Did you eat?" },
          { s: 'solar', f: 'neutral', t: "Yes." },
          { n: "He turned a page. His eyes went, once, across the room to the corner where Chenle was sitting, and rested there, and something in his face approved of what it found, and in the corner Chenle felt it from four meters off and went visibly rigid. Twenty minutes later she was in the corner beside him anyway." }
        ] }
      ] },
      { s: 'jaemin', f: 'happy', t: "Le. You're in the bracket." },
      { s: 'chenle', f: 'neutral', t: "I'm not." },
      { s: 'jaemin', f: 'happy', t: "You're seeded first." },
      { s: 'chenle', f: 'neutral', t: "...I'm not, Jaemin." },
      { ifEvent: 'a4-light-on', then: [
        { s: 'danielle', f: 'happy', t: "And what is it you *do,* Chenle? At home. I don't think I've ever heard." },
        { s: 'chenle', f: 'neutral', t: "Tank." },
        { s: 'danielle', f: 'neutral', t: "I'm sorry?" },
        { s: 'chenle', f: 'neutral', t: "In a game. I stand in front of people." },
        { s: 'danielle', f: 'happy', t: "How noble." },
        { s: 'chenle', f: 'neutral', t: "It's a position." },
        { n: "Danielle looked at him a moment longer than the exchange deserved, the way you'd look at a page that had come out of the printer blank, and turned it over to see if it was the other side, and found nothing there either, and went back to her ledger with a small smile that didn't go anywhere. Chenle went back to his phone. He hadn't noticed there'd been a contest." }
      ] },
      { ifEvent: 'a4-mark', then: [
        { n: "Mark finished his song with a flourish nobody had asked for, and looked round the room with a hopeful openness, rubbing the back of his neck, and Chenle, from the corner, without looking up from his phone, said it." },
        { s: 'chenle', f: 'neutral', t: "That was nice, Mark." },
        { s: 'mark', f: 'flustered', t: "Yeah? Thanks, man. Thanks." },
        { n: "It was said in a voice so precisely neutral that it could only have been one of two things, and Mark took it as the good one, and beamed, and Solar couldn't have said which it was if her life depended on it." }
      ] },
      { n: "At some point, quietly, in the middle of the second round of the bracket, he got up. He didn't announce it. He put his phone in his pocket and went out through the front door into the cold, and the door sighed shut behind him." },
      { choose: [
        { t: "(Follow him out.)", notes: 3, then: [
          { n: "She followed him out. Nobody looked up except Minji, who lowered her camera for a second and then raised it again, pointing it at the window instead of at the door, on purpose." }
        ] },
        { t: "(Give him five minutes. Then follow.)", notes: 2, then: [
          { n: "She gave him five minutes, which she spent losing to Jaemin in a song she didn't know, and then she went out, and found he'd been timing it, because the first thing he said was *five ten.*" }
        ] }
      ] },
      { place: 'Kirijo Guesthouse · Front', time: 'Night', soft: true },
      { n: "He was on the step. It was well below zero. The street was empty and the sky had that hard winter clearness to it that made every streetlight look like it had been cut out with scissors, and he was sitting in it with his hood up and his hands in his sleeves, a boy who hated being outside, outside." },
      { s: 'chenle', f: 'neutral', t: "At home I'd go upstairs. My room. Door shut. Nobody comes in except to tell me there's food." },
      { s: 'chenle', f: 'neutral', t: "Here upstairs is a room with a number on the door. It's fine. It's not upstairs." },
      { s: 'chenle', f: 'neutral', t: "Renjun would've come out. If he was here. He'd have brought a cigarette and not smoked it because I hate the smell, and complained the whole time about how cold it was. He'd have said *I'll come, Le.* And then he'd have come." },
      { s: 'solar', f: 'neutral', t: "Who's Renjun?" },
      { s: 'chenle', f: 'neutral', t: "The one I'd invite." },
      { n: "He didn't say anything about why Renjun wasn't here. He didn't say anything about how far away the house was where Renjun was, or what time it was there, or whether anyone had told him to stay. He just said the one true thing and let it sit on the step between them in the cold, the way he'd let the call log sit." },
      { choose: [
        { t: "(Sit. Don't talk.)", notes: 3, then: [
          { n: "She sat. She didn't talk. The cold came up through the stone and into her legs and she let it. After a while he took one hand out of his sleeve and set it flat on the step between them, not touching her, just there, the way you'd set a cup down where someone could reach it." }
        ] },
        { t: "Tell me about him.", notes: 2, then: [
          { s: 'chenle', f: 'neutral', t: "He's the secretary. He writes everything down. He watches things happen from the kitchen window and doesn't say anything until it's over, and then he says one sentence, and it's right." },
          { s: 'chenle', f: 'happy', t: "He'd have hated Jaemin's bracket. He'd have been on it anyway. Seeded last." }
        ] },
        { t: "Do you want to go home?", notes: 3, then: [
          { s: 'chenle', f: 'neutral', t: "Yes." },
          { n: "No pause in front of it. No softening after it. It was the plainest thing she'd heard anyone from home say out loud, and he didn't take it back, and he didn't add anything to make it easier for her to hear." },
          { s: 'chenle', f: 'neutral', t: "Not by myself, though. That's not a condition I'd agree to." }
        ] }
      ] },
      { n: "Inside, faintly through the door, Jaemin announced a winner, and a cheer went up that sounded like it was mostly Jaemin, and Chenle closed his eyes for a second and let out a breath that smoked white in the air in front of him and hung there, and went." }
    ] },

    { after: '1/7', title: "8: what you don't ask", place: 'Iwatodai Dorm · Front', time: 'Evening', music: 'night', scene: [
      { n: "He came up the dorm path at a quarter to eight with a plastic bag from the konbini by the station, and didn't knock, because he wasn't coming in, and sat down on the front step with the bag beside him like a man waiting for a bus he knew would be late. Solar saw him from the lounge window, and went out, and sat down one step up, which was becoming, she noticed, their arrangement." },
      { n: "Visitors were out by eight. He had fifteen minutes. He'd known that, she could tell, before he left the guesthouse." },
      { s: 'chenle', f: 'neutral', t: "I'm not going to ask you about Haechan." },
      { s: 'solar', f: 'neutral', t: "...Okay." },
      { s: 'chenle', f: 'neutral', t: "Jaemin is. He's building up to it. He's been practicing a face in the bathroom mirror at the guesthouse. It's a concerned face. It's very bad. I wanted you to have some warning." },
      { s: 'solar', f: 'neutral', t: "Ask me what?" },
      { s: 'chenle', f: 'neutral', t: "I don't know. That's why I'm not asking." },
      { n: "He said it so plainly that she almost laughed, and then didn't, because he wasn't joking, he was just being exact, and the exactness had something behind it that he wasn't putting into words and wasn't going to. He looked at the bag. Rice balls, she could see through the plastic, two of them, and a carton of something, and a box of the thin chocolate sticks with the bare ends, which he evidently considered a food group." },
      { s: 'chenle', f: 'neutral', t: "He eats if I hand it to him. Not if I leave it outside his door. Not if I tell him there's food downstairs. If I put it in his hand. That's the only version that works." },
      { s: 'chenle', f: 'neutral', t: "At home it's the same. I don't know what else works. I've only got the one thing." },
      { choose: [
        { t: "Cold air. He goes up to the roof when it's cold.", notes: 3, flag: { 'chenle-roof': true }, then: [
          { s: 'chenle', f: 'surprised', t: "...Cold air." },
          { n: "He took out his phone and typed it in, two words, under something else she couldn't see, and looked at the screen for a moment as though the list had just doubled in length and he wasn't sure yet if that was good news." },
          { s: 'chenle', f: 'neutral', t: "That's two things. Okay. Two's better than one." }
        ] },
        { t: "I don't know either.", notes: 2, then: [
          { s: 'chenle', f: 'neutral', t: "Okay. That's useful too. It means it's not just me." }
        ] },
        { t: "You could ask him.", notes: 2, then: [
          { s: 'chenle', f: 'neutral', t: "He'd say *drop it.* He says it about everything. He'd say it about the weather." }
        ] }
      ] },
      { n: "He held the bag out to her. Not to set down. To her, at arm's length, the handles looped over two fingers." },
      { s: 'chenle', f: 'neutral', t: "Hand it to him. It counts if it's handed. I've got eleven minutes and Mitsuru's already looked out of the window twice." },
      { choose: [
        { t: "(Take the bag. Promise you'll hand it to him.)", notes: 3, then: [
          { n: "She took the bag. It weighed almost nothing. He watched it go from his hand into hers as though he'd just passed something heavier, and nodded once, the way he did when a call worked." }
        ] },
        { t: "Why me?", notes: 2, then: [
          { s: 'chenle', f: 'neutral', t: "Because he'll take it from you." },
          { n: "He said it to the gate, not to her, and didn't follow it up with anything, and after a second she understood that that was the whole sentence, and that he'd chosen it very carefully, and that it was as close as he was ever going to come." },
          { s: 'chenle', f: 'neutral', t: "I'm also not saying anything. Just so you know. Quietly. Jaemin's going to say nothing very loudly. I'm doing the other one." }
        ] }
      ] },
      { s: 'chenle', f: 'neutral', t: "That's all. I'm not asking. I just wanted somebody else to have the bag." },
      { choose: [
        { t: "You can ask me things, you know. Anything. I'll tell you if I can't.", notes: 3, flag: { 'chenle-ask': true }, then: [
          { s: 'chenle', f: 'surprised', t: "Anything?" },
          { s: 'solar', f: 'neutral', t: "Anything." },
          { s: 'chenle', f: 'neutral', t: "...Okay. Not today. I'll save it." },
          { n: "He said it like a man putting a coin in his pocket instead of a machine. She had a feeling he'd know exactly where it was when he wanted it." }
        ] },
        { t: "(Don't say anything. Watch him go.)", notes: 2, then: [
          { n: "She watched him go down the path with his hands in his hoodie pocket and his hood up, and at the gate he looked at his phone, and walked faster, because it was seven fifty-six and he would have hated, she knew, to be the one who made Mitsuru come out." }
        ] }
      ] },
      { n: "She found Haechan where she'd thought she would, an hour later, on the stairs between the second floor and the third, in the dark, with his headphones round his neck and nothing playing in them. She held the bag out. He looked at it, and at her, for a long second, with no expression at all. Then he took it, and she went up, and didn't look back to see whether he ate, and found out the next morning from the empty carton in the kitchen bin, which had been rinsed." }
    ] },

    { after: '1/14', title: '9: cold air', place: 'Port Island · Pier', time: 'Night', music: 'night', scene: [
      { n: "The text had come at six. *pier. 7.* No question mark. No explanation. She'd had a bad night in the tower the night before, the kind where nothing goes badly enough to talk about and everything goes slightly wrong in a row, and she'd come down to breakfast and been asked by four people how she was and said fine to all four of them, and one of the four had been a visitor at the end of the table eating rice without looking up." },
      { n: "The pier at night in January was a long black tongue out into a black sea, with the lights of the port at the end of it and the wind coming in off the water so hard and so steady it felt like a hand on your chest, and he was halfway down it, on a bench, in a coat that was too thin for it, with his hood up and the hood's drawstrings pulled so tight there was only a small circle of face left, and his glasses in the middle of it, misted." },
      { n: "There was a konbini bag on the bench beside him. He held it out before she'd sat down." },
      { s: 'chenle', f: 'neutral', t: "Eat." },
      { n: "Two rice balls, salmon and tuna. A can of corn soup, still hot, wrapped in a napkin so it wouldn't burn her. A bottle of water. He'd lined them up in the bag in the order she should have them in, she realized, when she looked." },
      { s: 'chenle', f: 'neutral', t: "You said *fine* four times at breakfast. Nobody else at the table said it at all." },
      { choose: [
        { t: "(Eat.)", notes: 3, then: [
          { n: "She ate. The salmon first, because it was on top, and then the soup, which was so hot it hurt in the good way, all the way down, and he didn't watch her do it. He watched the port. He watched a ship's lights move along the horizon so slowly you could only see they'd moved if you looked away and back." }
        ] },
        { t: "You hate being outside.", notes: 3, flag: { 'chenle-outside': true }, then: [
          { s: 'chenle', f: 'neutral', t: "I do. It's minus two. The wind's nine meters a second. I checked twice. I didn't believe it the first time." },
          { s: 'chenle', f: 'neutral', t: "Eat the salmon one. It's on top. It's on top on purpose." }
        ] },
        { t: "I'm fine.", notes: 2, then: [
          { s: 'chenle', f: 'neutral', t: "Five." },
          { n: "She opened her mouth, and shut it, and took the salmon one out of the bag, and ate it, and he nodded at the sea as though the sea had made a reasonable point." }
        ] }
      ] },
      { n: "Nobody said anything for a while. The wind did all of it. It came in off the water and went through her coat and her sweater and her shirt and out the other side, and it was so cold it was clean, and somewhere around the end of the soup she noticed that her shoulders had come down from around her ears for the first time since the tower, and that she hadn't been the one who put them down." },
      { n: "It wasn't comfort. That was what was strange about it. He hadn't said anything comforting, and he wasn't going to. He'd brought food, and cold air, and one number nobody could argue with, and set the three of them down next to her on a bench, and left them there, and the arrangement did the rest, as if it had been tested somewhere, on somebody, a lot." },
      { n: "A gull came down out of the dark onto the rail in front of them and looked at the rice ball in her hand with an expression of total entitlement, and Chenle looked back at it, without moving, for a long time, and the gull, eventually, left. She would have sworn it had lost a staring contest." },
      { s: 'solar', f: 'neutral', t: "Do you do this for everyone?" },
      { s: 'chenle', f: 'neutral', t: "No." },
      { s: 'chenle', f: 'neutral', t: "The team. You're the team." },
      { n: "He said it the way he'd have said the name of a map, and she thought of the call log, her name going down the screen every twelve minutes like the rungs of a ladder, and the longer ladder under it, and understood that she wasn't the first person he'd sat beside in a cold place with a bag of food, and that he was never going to tell her who the others had been, and that this was, in its way, a kind of manners." },
      { s: 'chenle', f: 'neutral', t: "I asked Mitsuru again. If I could go in. Further than the lobby. She said no in four words." },
      { s: 'chenle', f: 'neutral', t: "So it's this. This is what I've got." },
      { choose: [
        { t: "It's enough.", notes: 3, then: [
          { s: 'chenle', f: 'neutral', t: "It's not. But it's what I've got. Those are different numbers." }
        ] },
        { t: "(Lean your shoulder against his.)", notes: 3, then: [
          { n: "She leaned her shoulder against his. He went still, the way he went still before a fight, and then he didn't move away, and they sat there shoulder to shoulder with the wind going through both of them like they were one obstacle instead of two." }
        ] },
        { t: "Who taught you to do this?", notes: 2, then: [
          { s: 'chenle', f: 'neutral', t: "Nobody. I figured it out. It took about a year." },
          { s: 'chenle', f: 'neutral', t: "It works about sixty percent of the time. That's a good rate. You'd know." }
        ] }
      ] },
      { n: "They walked back along the pier to the station with the wind behind them now, pushing, and at the turnstiles he stopped and looked at her through his misted glasses, and she thought he was going to say goodnight." },
      { s: 'chenle', f: 'neutral', t: "Zero." },
      { s: 'solar', f: 'neutral', t: "What?" },
      { s: 'chenle', f: 'neutral', t: "Since the rice balls. Times you said *fine.* Zero." }
    ] },

    { after: '1/21', title: '10: tank', place: 'Paulownia Mall · Game Panic', time: 'After School', music: 'tender', scene: [
      { n: "The back row was the back row. The carpet was older, the cabinets were older, the fire door had lost its red bow sometime after New Year and nobody had missed it. On the four-seat cabinet the wrench button's sticker had worn the rest of the way through to plastic, and the boy in the left seat had been there since one, because it was a practice day, and because he was always early, and because she'd known exactly where to find him for long enough now that it had stopped feeling like finding." },
      { n: "His phone column had stopped being a column. It was a document, with headings. He didn't show it to her. He'd told her once that it was eleven pages, and then later that it was fourteen, and then stopped telling her the number, which for him was like closing a door." },
      { s: 'chenle', f: 'neutral', t: "Left seat's yours." },
      { choose: [
        { t: "(Sit in the left seat. Take the wrench.)", notes: 3, then: [
          { n: "She took the wrench. Of course she took the wrench. He watched her hand go to it without looking, and didn't reach for his phone this time, and she noticed him not reaching, which was louder than any time he had." }
        ] },
        { t: "(Take the shield this time. Stand in front of him.)", notes: 3, stat: { courage: 1 }, then: [
          { s: 'chenle', f: 'surprised', t: "...You'll be bad at it." },
          { s: 'solar', f: 'neutral', t: "Probably." },
          { s: 'chenle', f: 'neutral', t: "Okay." },
          { n: "She was bad at it. She was terrible at it, she stood in all the wrong places with the shield up at all the wrong angles, and he played the wrench behind her and kept her alive through every one of her mistakes, at sixty percent, every time, as though he'd learned it off somebody, and on the third round she turned in the seat and looked at him and he was smiling at the screen with his whole face, without making a sound." }
        ] }
      ] },
      { n: "Between rounds, with the countdown going on the screen and the next match loading, he took both hands off the stick and put them in his hoodie pocket, which he never did between rounds, and looked at the cabinet instead of at her." },
      { s: 'chenle', f: 'neutral', t: "I'm going to say a thing. Once. Don't make it weird." },
      { s: 'solar', f: 'neutral', t: "Okay." },
      { s: 'chenle', f: 'neutral', t: "I'm your tank." },
      { s: 'solar', f: 'neutral', t: "I know." },
      { s: 'chenle', f: 'serious', t: "No. You know it in here. On the screen. I mean everywhere. If something comes at you, I'm in front. I can't fight, I checked, I asked twice, I don't have one. I'll be in front anyway. That's the whole job. It doesn't stop because you forgot the game." },
      { s: 'chenle', f: 'neutral', t: "That's it. That's the thing." },
      { n: "He'd said it at the same volume he said everything, to the screen, with his hands in his pocket, and it had cost him, she could see that, it had cost him exactly as much as it would have cost anyone else to shout it from a roof, and he'd paid it in full and wasn't going to ask for change." },
      { ifFlag: 'chenle-one', then: [
        { n: "He took the pink phone out of his pocket, the one from here, and opened it, and showed her the call log without comment. Her name, once, near the bottom, from a step outside the guesthouse in November. One." },
        { s: 'chenle', f: 'neutral', t: "I never needed a second one. Just so you know. One was the number." }
      ] },
      { choose: [
        { t: "(Say nothing. Put a coin in.)", notes: 3, then: [
          { n: "She didn't say anything. She put a coin in, and then another one, for him, before he could, and he looked at the two credits on the screen and made a small sound in his throat that might, in somebody louder, have been a laugh, or might have been something else, and she didn't look at him to find out which, because he'd have hated that." }
        ] },
        { t: "Then I'm your support. Everywhere.", notes: 3, then: [
          { s: 'chenle', f: 'neutral', t: "You already were. I have the data." },
          { s: 'chenle', f: 'sad', t: "...But thanks for saying it out loud. Nobody on this team says anything out loud except Olivia, and she only says it at a volume where it stops meaning anything." }
        ] },
        { t: "That was very plain.", notes: 2, then: [
          { s: 'chenle', f: 'flustered', t: "I know. I hated it. I'm not doing it again. That was the only one." }
        ] }
      ] },
      { ifFlag: 'route-R', then: [
        { s: 'chenle', f: 'neutral', t: "Practice is Monday. At home. The lab's going to smell like Olivia's cereal and Doyoung's going to have a clipboard full of things about you and I'm going to have fourteen pages." },
        { s: 'chenle', f: 'neutral', t: "Regionals is in December." }
      ], else: [{ ifFlag: 'route-true', then: [
        { s: 'chenle', f: 'neutral', t: "Practice is Monday. At home. Fuuka says your way back is more complicated than ours. I don't care how complicated. I'll be there first. I'll have the pages." },
        { s: 'chenle', f: 'neutral', t: "Regionals is in December." }
      ], else: [
        { s: 'chenle', f: 'neutral', t: "If you're not coming back with us, I'll leave the support slot open. Doyoung's going to hate it. I'll make him." },
        { s: 'chenle', f: 'neutral', t: "I'll call first map like you're on comms. Nobody'll know but me." }
      ] }] },
      { n: "He pressed start. The cabinet counted down from ten in big red numbers, and he said each one under his breath along with it, like a man who couldn't have stopped if he'd tried, and at one he went forward, and she was already behind him." }
    ] }
  ],
  afterMax: [
    { title: "one o'clock", place: 'Paulownia Mall · Game Panic', time: 'After School', scene: [
      { n: "She came on a Saturday at five to one, on purpose, to beat him there, just once. He was already in the left seat. He'd been there, the man at the counter told her without being asked, since twelve thirty-eight." },
      { s: 'chenle', f: 'neutral', t: "You're early." },
      { s: 'solar', f: 'neutral', t: "You're earlier." },
      { s: 'chenle', f: 'neutral', t: "I'm always earlier. It's not a competition. If it was a competition I'd have already won it." },
      { choose: [
        { t: "Tomorrow I'll come at noon.", notes: 3, then: [
          { s: 'chenle', f: 'neutral', t: "The mall opens at ten." },
          { n: "He said it like a warning, and like a promise, and went back to the screen, and she knew with total certainty that tomorrow he'd be outside the mall doors at nine fifty, and that he'd say he just happened to be passing." }
        ] },
        { t: "(Sit down. Don't make it a thing.)", notes: 2, then: [
          { n: "She sat down. He moved the soda can a centimeter toward her side of the ledge, and then moved it back, and then, after a moment's thought, left it exactly in the middle." }
        ] }
      ] }
    ] },
    { title: 'the count', place: 'Paulownia Mall · Game Panic', time: 'After School', scene: [
      { ifFlag: 'chenle-one', then: [
        { n: "Her phone rang in the middle of a round. She looked at the screen and then down the row, and he was at the crane machines with the pink phone at his ear, not looking at her, looking at a stuffed shark." },
        { choose: [
          { t: "(Answer. Say: Two.)", notes: 3, then: [
            { s: 'solar', f: 'neutral', t: "Two." },
            { n: "He hung up. He didn't come back for a minute. When he did his ears were red and he didn't mention it and neither did she, and he'd won the shark, and he put it on the ledge between them like a scoreboard." }
          ] },
          { t: "(Let it ring. Watch him count.)", notes: 2, then: [
            { n: "She let it ring. Down the row his lips moved with each ring, and at the fourth he hung up and looked over at her, and she held up four fingers, and he held up four back, and that was a whole conversation." }
          ] }
        ] }
      ], else: [
        { n: "He slid a receipt across the ledge. On the back, in his tiny careful handwriting, a phone number. His here one. Under it, underlined, *1x.*" },
        { s: 'chenle', f: 'neutral', t: "Call it once. Just once. Then I'll have a number." },
        { choose: [
          { t: "(Call it now. From right here.)", notes: 3, then: [
            { n: "She called it from half a meter away. His pocket buzzed. He took the phone out, looked at her name, and answered." },
            { s: 'chenle', f: 'neutral', t: "One." }
          ] },
          { t: "(Fold it into your wallet.)", notes: 2, then: [
            { n: "She folded the receipt once and put it in her wallet, the way you'd put away money. He watched her do it. He seemed to find that acceptable as a provisional answer." }
          ] }
        ] }
      ] }
    ] },
    { title: 'cold air', place: 'Port Island · Pier', time: 'Evening', scene: [
      { n: "This time she texted him. *pier. 7.* No question mark. He came at six fifty-one in the same too-thin coat with the hood pulled down to a small circle, and found her on the bench with a bag beside her, and stopped." },
      { ifFlag: 'chenle-outside', then: [
        { s: 'chenle', f: 'neutral', t: "I hate being outside." },
        { s: 'solar', f: 'neutral', t: "I know. It's minus one. The wind's eight meters a second. I checked." },
        { n: "He sat down. He looked at her for a long second through the small circle of his hood, and then he laughed, actually laughed, the high quick one he never let anybody hear, and the wind took it out over the water before it could embarrass him." }
      ], else: [
        { s: 'chenle', f: 'neutral', t: "...Is this the thing? Are you doing the thing at me?" },
        { s: 'solar', f: 'neutral', t: "Eat." },
        { n: "He sat down. He looked in the bag. He said *you put the soup on top, the soup's supposed to be second,* and then ate it first anyway, and didn't say anything else for a long time." }
      ] },
      { choose: [
        { t: "(Give him a number.)", notes: 3, then: [
          { s: 'solar', f: 'neutral', t: "You checked your phone eleven times at lunch." },
          { s: 'chenle', f: 'surprised', t: "...Twelve. You missed one." },
          { s: 'chenle', f: 'neutral', t: "But that's close. That's very close. Okay." }
        ] },
        { t: "(Just sit. Let the wind do it.)", notes: 2, then: [
          { n: "They sat. The wind did it. A ship moved along the horizon so slowly you could only tell if you looked away and back, and they both kept looking away and back, and neither of them said what they were checking." }
        ] }
      ] }
    ] },
    { title: 'the steps', place: 'Iwatodai Dorm · Front', time: 'Evening', scene: [
      { n: "There were three of them on the dorm steps at twenty to eight, which had never happened before. Chenle on the bottom one with the bag. Solar on the one above. And Haechan in the doorway behind them both, hood up, who'd come out for no reason he gave and was now, for no reason he gave, not going back in." },
      { n: "Chenle didn't look round. He took a rice ball out of the bag and held it up over his shoulder without turning, and after a second it was taken out of his hand. Then he took another one out and held it out sideways, to Solar, also without turning, and she took it." },
      { s: 'haechan', f: 'neutral', t: "You're doing the thing to both of us now." },
      { s: 'chenle', f: 'neutral', t: "It's more efficient. Same trip." },
      { ifFlag: 'chenle-roof', then: [
        { n: "Haechan finished the rice ball. Then he went back inside, and up, and she heard the roof door at the top of the building open, and close, and Chenle tilted his head at the sound like a man hearing a theory confirmed in a lab two floors away." },
        { s: 'chenle', f: 'neutral', t: "Two things. Both of them worked. Same night." }
      ], else: [
        { n: "Haechan sat down on the top step, which he never did, and finished the rice ball, and sat there for the rest of the fifteen minutes with his elbows on his knees, saying nothing, while Chenle said nothing and Solar said nothing and the streetlight at the gate buzzed." }
      ] },
      { choose: [
        { t: "(Say nothing. That's the arrangement.)", notes: 3, then: [
          { n: "She said nothing. At seven fifty-seven Chenle stood, folded the empty bag into a small precise square, and went down the path, and behind her Haechan breathed out through his nose, once, which from him was a paragraph." }
        ] },
        { t: "Same time next week?", notes: 2, then: [
          { s: 'chenle', f: 'neutral', t: "It's not a schedule." },
          { s: 'haechan', f: 'neutral', t: "It's a schedule." },
          { s: 'chenle', f: 'neutral', t: "...It's a schedule." }
        ] }
      ] }
    ] },
    { title: 'a question', place: 'Paulownia Mall · Game Panic', time: 'After School', scene: [
      { ifFlag: 'chenle-ask', then: [
        { s: 'chenle', f: 'neutral', t: "I'm using it. The anything." },
        { s: 'solar', f: 'neutral', t: "Okay." },
        { s: 'chenle', f: 'serious', t: "What's your favorite map. Not here. In your head. The one your hands like. You don't have to know why." },
        { n: "She'd been braced for something else. She'd been braced, she realized, for a long time, for a different question from somebody, and it had never once occurred to her that the question would be this one, and that it would be the hardest one anyone had asked her in weeks." }
      ], else: [
        { n: "He didn't ask her anything. He never did. But today he'd drawn something on the back of a receipt while he waited, a map, a city street with an archway and a clock tower and a little cross where he'd stood, and he slid it across to her without a word and watched what her face did." }
      ] },
      { choose: [
        { t: "(Close your eyes. Say the first one that comes.)", notes: 3, then: [
          { n: "She closed her eyes. Something came. Narrow streets, a canal, light on water, and a high place on the left she wanted to be standing on before anyone else knew they needed her there. She said it out loud, a word she didn't know she knew." },
          { s: 'chenle', f: 'surprised', t: "...That's right. That's the one. You picked it every time." },
          { n: "He didn't write it down. He just sat there, very still, looking at the screen, as though writing it down would have made it smaller." }
        ] },
        { t: "I don't know. Tell me which one.", notes: 2, then: [
          { s: 'chenle', f: 'neutral', t: "No. It doesn't count if I tell you." },
          { s: 'chenle', f: 'neutral', t: "It'll come. Your hands'll get there first. They always do. I'll wait." }
        ] }
      ] }
    ] },
    { title: 'home', place: 'Paulownia Mall · Game Panic', time: 'After School', scene: [
      { ifFlag: 'route-R', then: [
        { n: "He was making a list. A real one, on the back of a flyer, under the heading *WHEN WE GET BACK,* and when she sat down he turned it so she could read it. *Practice Monday. Tell Doyoung about the wrench. Olivia, explain nothing. Haerin, one sentence. Renjun, everything.*" },
        { s: 'chenle', f: 'neutral', t: "It's still November there. If the math's right we walk out of one night and into the next morning. I've done the math. Don't make me show you the math." },
        { s: 'chenle', f: 'neutral', t: "I'm going to be so tired. I don't care." }
      ], else: [{ ifFlag: 'route-true', then: [
        { n: "He was making a list. A real one, on the back of a flyer, under the heading *WHEN WE GET BACK.* At the bottom, last item, underlined twice, *left seat. hers.*" },
        { s: 'chenle', f: 'neutral', t: "Fuuka says it's more complicated for you. Going home. More than one door." },
        { s: 'chenle', f: 'neutral', t: "That's fine. I'll be on the other side of ours. I'm early. You know that." }
      ], else: [
        { n: "There was a middle-schooler in the third seat. Eleven, maybe, in a too-big jacket, with a cold and a sniff and the stubborn face of a kid who'd lost to the computer forty times in a row and had decided to keep losing until it stopped. Chenle was teaching him the wrench." },
        { s: 'chenle', f: 'neutral', t: "Somebody's going to need to know it. After." },
        { s: 'chenle', f: 'neutral', t: "He's bad. He's very bad. He repairs at thirty. I'm getting him to sixty. It's going to take till March." }
      ] }] },
      { choose: [
        { t: "(Sit down and help.)", notes: 3, then: [
          { n: "She sat down. Between them, the three of them, the old cabinet and the loud room and the cold coming in round the fire door, they played until the mall's closing music started, and nobody counted anything out loud, and at the end Chenle wrote one number down and didn't show anyone what it was." }
        ] },
        { t: "You're going to miss this place.", notes: 2, then: [
          { s: 'chenle', f: 'neutral', t: "The back row doesn't lag. Nowhere else I've ever been has a back row that doesn't lag." },
          { s: 'chenle', f: 'neutral', t: "So. Yes. That's what I'm saying. That's the whole sentence." }
        ] }
      ] }
    ] }
  ]
});
