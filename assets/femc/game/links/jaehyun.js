/* Jaehyun · ? Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Searcher (Runners), friendship: her brother. Junior, quarterback and team captain, measured, calibrated, already finished
   thinking by the time he speaks. He reads the field and calls the audible without asking anyone what the play is, which is
   the one thing she can't stand in any life (plot doc §7: "he quietly puts himself between her and everything, which she
   recognizes and hates before she knows why"). His crossing (10/24→25, the dorm's front door, "You weren't hard to find.
   You were hard to reach.") is a story event; rank 1 is the first afternoon after. No Persona (Kat's ruling).
   Canon echoes: "Very funny, Solar." / "Do not be hostile." / "Call if you need anything. You won't. But the offer
   stands." / "Jae" / the head pat nobody sees / "Thanks for doing this, sister." / he kept eSports from their father.
   Never used: "You gave them an order. You never asked me anything" (dead line per the Runners skill). Nothing here moves
   Runners' plot: what he knows and doesn't about the boys stays where the book has it. Texts with capitals and periods.
   Fragment: runners-stadium (rank 3, plot doc §8 R6). Arcana: '?' (open question, plot doc §16.6). */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'jaehyun', name: 'Jaehyun Lee', short: 'Jaehyun', arcana: '?', numeral: '', from: 'Runners',
  kind: 'searcher', world: 'R', romance: null,
  starts: '10/24', gate: { R: 5 },
  home: { area: 'shrine', spot: 'The Steps', slot: 'after', days: [1, 2, 4, 5, 6],
          hint: 'Afternoons at Naganaki Shrine, running the hundred and twelve steps until the light goes.' },
  approach: "Someone is running the steps at Naganaki Shrine, all hundred and twelve of them, up and down, at a pace that makes the old man by the offering box stop sweeping to watch, and when he reaches the bottom he sees you and stops, not out of breath, like he'd been expecting you to arrive at exactly this minute.",
  cast: {},
  invite: {
    ask: ["Are you free this afternoon?", "I'm at the shrine. Come if you want. I'll be here regardless.", "Have you eaten. Don't answer that. Come to the Strip.", "I need someone to time me. You're the only one who doesn't round.", "Fuuka says you went to Tartarus last night. Come here. I want to look at your shoulder.", "Come walk with me. I'm not going to lecture you. Probably."],
    ok: ["Good.", "Good. Bring water.", "I'll wait at the bottom of the steps."],
    no: ["Understood.", "Fine. Call if you need anything. You won't. But the offer stands.", "Tomorrow, then."]
  },
  hangouts: [
    [
      { n: "He was running the steps. He was always running the steps. A hundred and twelve, up, a hundred and twelve, down, and at the bottom he checked his watch and didn't look pleased and started again." },
      { s: 'jaehyun', f: 'neutral', t: "Time me. From the bottom. Don't round." },
      { choose: [
        { t: "(Time him exactly.)", notes: 3, then: [
          { n: "Two minutes, forty-one seconds, and three tenths. She read it out with the tenths. He nodded once, like a stock price had gone the way he'd expected." },
          { s: 'jaehyun', f: 'neutral', t: "Thank you. Nobody ever gives me the tenths." }
        ] },
        { t: "(Tell him he was slower than he was.)", notes: 2, then: [
          { s: 'jaehyun', f: 'serious', t: "I wasn't. I know I wasn't. You do that to make me go again." },
          { n: "He went again." }
        ] },
        { t: "(Run it with him.)", notes: 3, then: [
          { n: "She ran it with him. She lost by about forty steps. At the top he was waiting, not out of breath, holding out a bottle of water without looking, and she took it without looking, and they both pretended that wasn't a thing they'd done a thousand times." }
        ] }
      ] }
    ],
    [
      { n: "He'd taken over a corner of the dorm's dining table with a notebook and a pencil and a diagram of the first floor of Tartarus that Fuuka had drawn for him, and he was marking it with small neat x's and arrows, frowning, like a coach the night before a game." },
      { s: 'jaehyun', f: 'neutral', t: "Your rotation is good. Your second-floor approach leaves the stairs open for eleven seconds. I'd close that." },
      { choose: [
        { t: "Thank you, coach.", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "Very funny, Solar." }
        ] },
        { t: "You've never been in there.", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "No. I watch film. I listen to the radio. It's the same thing." },
          { s: 'jaehyun', f: 'serious', t: "...It isn't the same thing. I know that. I'm doing the only part I can do." }
        ] }
      ] }
    ],
    [
      { n: "He cooked. That was the strange thing nobody had expected. Not well. With total commitment. He'd make the same thing every Sunday at the dorm, rice and eggs and some kind of grilled meat, enormous portions, carefully measured, and put a plate in front of everyone in S.E.E.S. without asking what they wanted, and stand there until they ate it." },
      { s: 'jaehyun', f: 'neutral', t: "Protein. Carbohydrates. You're all underfed. Iori, eat the egg." },
      { choose: [
        { t: "(Eat all of it. Pointedly.)", notes: 3, then: [
          { n: "She ate all of it. He watched her do it with no expression at all and then, when the plate was clean, put his hand on top of her head for half a second, so quick no one at the table saw, and went back to the stove." }
        ] },
        { t: "You didn't ask what I wanted.", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "...No. I didn't." },
          { s: 'jaehyun', f: 'neutral', t: "What do you want?" },
          { n: "She told him. He made it. It took him twenty minutes and it was worse, and she ate all of it, and neither of them said anything about why." }
        ] }
      ] }
    ]
  ],
  ranks: [
    { after: '10/26', title: '1: the offer stands', place: 'Naganaki Shrine', time: 'After School', scene: [
      { n: "He'd knocked. That was the part S.E.E.S. couldn't get over. Every other person who'd come through had come through somewhere strange, a mall, a lamppost, a harbor at low tide, crying or shouting or filming. He had walked up to the front door of the dorm at midnight, in the green, in a dark quarter-zip with a small orange letter on the chest, and knocked, twice, like a man arriving for an appointment, and when Solar opened the door he'd looked at her, once, up and down, and said, *You weren't hard to find. You were hard to reach.*" },
      { n: "And then she'd said she didn't know him. And he'd nodded. Once. Like a man hearing a weather report he'd already read." },
      { n: "*You don't remember me. Fine. I remember enough for both of us.*" },
      { n: "It was two days later and he was running the steps at Naganaki. Solar had followed the sound of footsteps on stone up from the street, and stood at the bottom and watched him go up and down, up and down, broad through the shoulders in a way that made the shrine gate look small, his black hair cleanly parted even after an hour of it, and he reached the bottom and saw her and stopped, not out of breath, and didn't look surprised." },
      { register: 'jaehyun' },
      { s: 'jaehyun', f: 'neutral', t: "Solar." },
      { n: "Not a question. He said her name like he was confirming a reservation." },
      { s: 'jaehyun', f: 'neutral', t: "Sit down. I want to tell you what I've worked out. Then you can tell me where I'm wrong." },
      { choose: [
        { t: "(Sit on the step.)", notes: 2, then: [
          { n: "She sat. He didn't. He stood at the bottom of the steps with his hands loose at his sides like a man about to address a room, and she had the strangest feeling that she'd sat on a lot of steps while he stood in front of her and explained things." }
        ] },
        { t: "You could ask how I am first.", notes: 3, then: [
          { s: 'jaehyun', f: 'surprised', t: "..." },
          { s: 'jaehyun', f: 'neutral', t: "...How are you." },
          { s: 'solar', f: 'neutral', t: "Fine." },
          { s: 'jaehyun', f: 'neutral', t: "Uh huh." },
          { n: "He set the *fine* to one side without contesting it, which she understood, somehow, was not at all the same thing as believing it." }
        ] },
        { t: "Do not lecture me.", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "I'm not lecturing. I'm briefing." },
          { s: 'jaehyun', f: 'serious', t: "...You said that to me too. The not-lecturing thing. Usually right before I lecture you." }
        ] }
      ] },
      { s: 'jaehyun', f: 'neutral', t: "You live in a dormitory with eight other people and a dog. You fight something at midnight, with a gun that isn't a gun, and you lead them. The redhead runs it. The man in the glasses who makes puns pays for it, or his company does. You're good at it. Better than good. Fuuka played me a recording." },
      { s: 'jaehyun', f: 'neutral', t: "You eat badly. You sleep badly. You run at five in the morning with a boxer who thinks protein is a personality. You are, as far as I can tell, happier than I've seen you in two years." },
      { s: 'jaehyun', f: 'serious', t: "Where am I wrong." },
      { choose: [
        { t: "Nowhere. That's what's annoying.", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "Yes. I'm told it's my worst quality." }
        ] },
        { t: "You're wrong about the happy part.", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "No, I'm not." },
          { n: "He said it simply. He didn't argue. He'd arrived at it, and that was where it lived now, and she could push on it as hard as she liked." }
        ] },
        { t: "Who are you? To me. Say it.", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "Your brother. Older. By two years. You'd tell me it feels like ten." },
          { s: 'jaehyun', f: 'neutral', t: "Jaehyun. You call me Jae when you want something or when you're furious. You don't call me anything when you're furious enough." }
        ] }
      ] },
      { n: "He took a folded square of paper out of the pocket of his quarter-zip and held it out. A phone number, in neat, impatient pen. The guesthouse. A room number. And under it, *J.*" },
      { s: 'jaehyun', f: 'neutral', t: "Call if you need anything." },
      { s: 'jaehyun', f: 'neutral', t: "You won't. But the offer stands." },
      { n: "It went through her like cold water. Not the words. The rhythm of them. The exact shape. As if she'd heard it so many times it had worn a groove somewhere in her that she'd been walking around with all year without knowing what it was for." },
      { n: "He turned and went back up the steps at a run before she could say anything, which she suspected was the point." }
    ] },

    { after: '11/2', title: '2: the radio', place: 'Iwatodai Dorm · Command Room', time: 'Night', music: 'mystery', scene: [
      { n: "He'd asked Fuuka if he could listen. That was how it had started. He'd gone to her, politely, with his hands behind his back like a man applying for a job, and asked if there was any way, at all, that he could hear what happened in the tower at night, and Fuuka had looked at him and then at Mitsuru, and Mitsuru had looked at him for a long time with her teacup halfway to her mouth, and then said, *Let him. I'd do the same.*" },
      { n: "So now when S.E.E.S. went up, Jaehyun sat in the command room on the fourth floor behind Fuuka's chair, very still, with his forearms on his knees and his hands clasped, and listened to every word that came over the radio, and said nothing, and wrote things down." },
      { n: "It was after. They'd come back at one in the morning bruised and tired and Junpei limping. Solar had come up to return the radio, and he was still sitting there, alone, with the notebook in his lap, and the monitors dark." },
      { s: 'jaehyun', f: 'neutral', t: "You called a retreat on the fourteenth floor." },
      { s: 'solar', f: 'neutral', t: "Junpei was hurt." },
      { s: 'jaehyun', f: 'neutral', t: "I know. It was the right call. You made it four seconds late." },
      { n: "He said it without heat. A line item. Solar felt it land on her anyway, hot, behind her eyes, the way an old bruise hurts when someone presses it who doesn't know it's there." },
      { choose: [
        { t: "You weren't there. You don't get to grade my calls.", notes: 3, then: [
          { s: 'jaehyun', f: 'surprised', t: "..." },
          { s: 'jaehyun', f: 'neutral', t: "...No. I don't." },
          { n: "He closed the notebook. He looked at it in his lap for a moment, like a man who'd been told the film he'd been studying was of a different game." },
          { s: 'jaehyun', f: 'neutral', t: "It's habit. I watch everyone. I tell them where they were late. I've never once been in the tower. You're right." }
        ] },
        { t: "Four seconds?", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "You waited to see if he'd get up on his own. You always do that. You give people the chance to not need you." },
          { s: 'jaehyun', f: 'serious', t: "It's a generous instinct. It's a dangerous one. I've never been able to train it out of you." }
        ] },
        { t: "What would you have done?", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "Called it on the first hit. Pulled everyone. Decided for him." },
          { s: 'jaehyun', f: 'neutral', t: "...Which is why they listen to you and not to me." }
        ] }
      ] },
      { s: 'jaehyun', f: 'neutral', t: "I'm a quarterback. At home. I read the field before the snap and I change the play if I don't like it. Everybody else runs what I call. That's the job. I'm good at it." },
      { s: 'jaehyun', f: 'serious', t: "And I sat here for three hours tonight listening to you get hit, and I couldn't call anything. I couldn't change a single assignment. I've never been so useless in my life." },
      { n: "He said it to the dark monitors, flat, calm, the way he said everything, and his clasped hands were white at the knuckles, and Solar saw it and didn't say anything, which was, she was beginning to learn, the only way to say anything to him at all." },
      { choose: [
        { t: "You can listen. That's not useless.", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "It's the most useless thing I've ever done." },
          { s: 'jaehyun', f: 'neutral', t: "I'm going to keep doing it. Every night you go up." }
        ] },
        { t: "(Sit down next to him. Say nothing.)", notes: 3, then: [
          { n: "She sat on the floor next to his chair with her back against the console. He looked down at her. After a while he put the notebook on the floor between them, open, and she read it. Every call she'd made that night, in his neat print, with a tick next to almost all of them." }
        ] }
      ] }
    ] },

    { after: '11/9', title: '3: stadium lights', place: 'Gekkoukan High · Front Gate', time: 'Evening', music: 'night', scene: [
      { n: "Gekkoukan had floodlights over the sports field, four tall gray masts at the corners that nobody used except on the nights before a tournament, and somebody had left them on. Solar found him there after school had emptied out, standing on the cinder track in the white light with a football under his arm that he'd bought, he said, at a sporting goods shop on the Strip that had exactly one, and had been very surprised to sell it." },
      { s: 'jaehyun', f: 'neutral', t: "Stand at the thirty. That cone. Run a slant." },
      { s: 'solar', f: 'neutral', t: "I don't know what that means." },
      { s: 'jaehyun', f: 'neutral', t: "Run diagonally toward the middle. I'll put it where you'll be." },
      { choose: [
        { t: "(Run the slant.)", notes: 3, then: [
          { n: "She ran. She had no idea where she was going. Three strides in she looked back over her shoulder and the ball was already in the air, spinning, tight, coming down out of the floodlights exactly where her hands were going to be, and she caught it against her chest so hard it knocked the breath out of her." },
          { s: 'jaehyun', f: 'happy', t: "Good." },
          { n: "One word. From him, she understood, a parade." }
        ] },
        { t: "(Stand still and make him come to you.)", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "...That's not a route." },
          { n: "He threw it anyway, short, soft, right into her hands where she stood. He'd adjusted. It took him half a second. She saw him do it and file it." }
        ] }
      ] },
      { n: "And then it happened, standing on the cinder track with the football against her chest and the floodlights coming down white and hard over everything, the hum of them, the cold, the smell of cut grass going stale under the lights." },
      { n: "A roar. Not this empty field. A stadium, enormous, a bowl of noise in orange and navy, forty thousand people on their feet at once, and a stand full of girls with signs and faces painted, and a man in a suit beside her who didn't stand up, and down on the field, under lights exactly like these, a number on a jersey she knew better than her own birthday. And one voice in all that roar. Hers. Screaming his name. She'd never once screamed his name where he could hear it." },
      { fragment: 'runners-stadium' },
      { n: "The bell on Haenim's sash rang once, clear, and she turned her head to look for it in the empty stands." },
      { s: 'jaehyun', f: 'neutral', t: "Solar?" },
      { s: 'solar', f: 'neutral', t: "...I yelled for you. In the stands. You couldn't hear me." },
      { s: 'jaehyun', f: 'surprised', t: "..." },
      { n: "He'd been walking toward her to get the ball. He stopped on the track, ten meters off, under the white lights, and stood there with his hands at his sides, and for the first time since he'd knocked on the door at midnight his face did something he hadn't decided it would do." },
      { s: 'jaehyun', f: 'neutral', t: "I heard you." },
      { s: 'jaehyun', f: 'neutral', t: "Once. The home game. Third quarter. I heard you over forty thousand people. I don't know how. You were sitting next to Father, and you weren't supposed to yell, and you did." },
      { s: 'jaehyun', f: 'serious', t: "I threw a touchdown on the next play. I never told you why." },
      { choose: [
        { t: "Why didn't you tell me?", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "Because you'd have stopped yelling." },
          { s: 'jaehyun', f: 'neutral', t: "You stop doing things the second anyone notices you like doing them. You've done it since you were six." }
        ] },
        { t: "(Throw the ball back. Badly.)", notes: 3, then: [
          { n: "She threw it back. It wobbled the whole way like it was embarrassed for both of them. He caught it without moving his feet." },
          { s: 'jaehyun', f: 'serious', t: "Your elbow's low." },
          { n: "He came and moved it, two fingers on the back of her arm, an inch higher, the most impersonal correction in the world, and it was so exactly the way an older brother would do it that something in her chest went tight and stupid." }
        ] }
      ] },
      { n: "They threw the ball until the floodlights clicked off on their timer at eight, all four at once, and the field went dark around them, and in the dark she heard him laugh, once, short, surprised at himself." }
    ] },

    { after: '11/16', title: '4: fine', place: 'Naganaki Shrine', time: 'After School', scene: [
      { n: "He wasn't running. That was how she knew. He was sitting on the bottom step of Naganaki with his right arm across his knees and his left hand holding his right shoulder, not hard, just resting there, the way you'd rest a hand on a dog you didn't want to wake." },
      { n: "He took the hand away when he saw her. Fast. And smiled, a small, closed smile, the measured one, the one he used for photographers." },
      { s: 'jaehyun', f: 'neutral', t: "Solar. You're early." },
      { s: 'solar', f: 'neutral', t: "What's wrong with your shoulder?" },
      { s: 'jaehyun', f: 'neutral', t: "Fine." },
      { n: "It was the whole answer. She'd been handed enough whole answers to know the shape of one, a door being closed politely, all the way, from the other side. She'd never been handed one by him that she could remember, which was none of them, and still she knew this exact door, the paint on it, the sound it made." },
      { choose: [
        { t: "Don't do that. Don't give me *fine.*", notes: 3, then: [
          { s: 'jaehyun', f: 'surprised', t: "..." },
          { s: 'jaehyun', f: 'neutral', t: "...That's your word. *Fine.* You use it on me. I got it from you." },
          { s: 'solar', f: 'neutral', t: "Then give it back." },
          { n: "He looked at her for a long moment. Then he let out a breath through his nose and moved his right arm, carefully, the first movement of it careful in a way that told her everything, and rolled the shoulder twice." },
          { s: 'jaehyun', f: 'neutral', t: "It's old. Throwing shoulder. It gets loud in the cold. I've been hit a lot. It's the job. It's nothing." }
        ] },
        { t: "(Sit down beside him. Put your hand on his shoulder.)", notes: 3, then: [
          { n: "She sat beside him and put her hand flat on his right shoulder without asking. He went rigid for a second. Then he didn't. The muscle under her palm was hot and knotted, and she pressed, the way she'd seen Akihiko press on his own, and he made a very small sound and closed his eyes." },
          { s: 'jaehyun', f: 'neutral', t: "...Nobody does that. At home. Nobody's allowed to see it." }
        ] },
        { t: "Okay. Fine.", notes: 1, then: [
          { s: 'jaehyun', f: 'neutral', t: "Thank you." },
          { n: "He meant it. That was the worst part. He was grateful to be left alone with it." }
        ] }
      ] },
      { s: 'jaehyun', f: 'neutral', t: "There's a game. At home. I'm supposed to be at it. I don't know if I'm missing it. I don't know which Saturday it is. My phone says it's the same night it's always said." },
      { s: 'jaehyun', f: 'serious', t: "I've never missed a game. Not in three years. Not with a fever. Not with this." },
      { n: "He moved the shoulder again. It clicked, audibly, and he didn't wince, which was its own kind of wince." },
      { s: 'jaehyun', f: 'neutral', t: "I'd miss every game for the rest of my life to bring you home. I want you to know that I know that about myself. I didn't, before." },
      { choose: [
        { t: "Don't say *bring.* I'm not a ball.", notes: 3, then: [
          { s: 'jaehyun', f: 'surprised', t: "..." },
          { s: 'jaehyun', f: 'neutral', t: "...To come home with you. If you come. That's what I meant." },
          { s: 'jaehyun', f: 'neutral', t: "I'm going to have to learn to say it like that. It's going to take me a while." }
        ] },
        { t: "That's the nicest thing you've ever said to me. Probably.", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "Probably. You'd know. I don't keep track of nice things. You do. You keep a list." },
          { s: 'jaehyun', f: 'happy', t: "...Don't put that one on it. I'll deny it." }
        ] }
      ] }
    ] },

    { after: '11/23', title: '5: the audible', place: 'Iwatodai Dorm · Front', time: 'Evening', music: 'mystery', scene: [
      { n: "Junpei told her. Junpei didn't mean to. He said it in the lounge the way he said everything, with his mouth full, as a funny thing that had happened, that Jaehyun had gone out to the front steps this morning where the guy in the black hoodie was sitting with his headphones, and said something to him, quietly, for about ten seconds, and then come back in, and the guy in the hoodie hadn't come to breakfast." },
      { s: 'junpei', f: 'happy', t: "It was like a movie! He didn't even raise his voice! Your brother's terrifying, Solar. Like, cool terrifying. Like a— " },
      { n: "She was already going to the door." },
      { n: "Jaehyun was on the front steps with a cup of coffee, looking at the street, completely at ease, and he looked up when the door banged open behind him and saw her face and set the coffee down very carefully on the step, like a man putting down something he expected to need both hands for." },
      { s: 'solar', f: 'serious', t: "What did you say to him?" },
      { s: 'jaehyun', f: 'neutral', t: "I asked him to keep his distance from you." },
      { s: 'solar', f: 'serious', t: "You *asked?*" },
      { s: 'jaehyun', f: 'neutral', t: "...I told him. There's history. Things you don't remember. I've already had this conversation with him at home. I'm not having it a— " },
      { n: "He stopped himself. She watched him do it, watched him hear where the sentence was going and pull it back like a pass he'd decided not to throw." },
      { n: "And she knew this. Not him, not the boy on the steps, not whatever the history was, she didn't know any of that and wasn't going to let him hand it to her. She knew *this.* The calm. The decision already made. A field read and a play changed and everyone else expected to run it. Her whole body knew it, hated it, like a burn knows a stove." },
      { choose: [
        { t: "You don't get to decide who sits next to me.", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "Solar—" },
          { s: 'solar', f: 'serious', t: "Not here. Not anywhere. Not because of something I can't even remember. You read the field and you call the play and you never once ask me what I'm running." },
          { n: "It came out of her hot and fast and whole, like it had been written a long time ago and kept in a drawer. He stood very still on the steps. Nothing on his face moved. Everything behind it did." }
        ] },
        { t: "Tell me what the history is, then.", notes: 2, then: [
          { s: 'jaehyun', f: 'serious', t: "No." },
          { s: 'jaehyun', f: 'neutral', t: "Not here. You'd have no way to check it. You'd have to take my word, and you've never once taken my word in your life, and you shouldn't start here because you can't remember why not." },
          { n: "It was, she realized, furious, the first fair thing he'd said all morning." }
        ] },
        { t: "(Say nothing. Walk past him down the steps.)", notes: 2, then: [
          { n: "She walked past him. Down the steps, onto the street. She didn't look back. She heard him not follow her, and she knew, the way you know which stair creaks, that he was standing there with his hands at his sides watching her go, and that it was costing him everything he had not to call her back." }
        ] }
      ] },
      { s: 'jaehyun', f: 'neutral', t: "I'm trying to keep you safe." },
      { s: 'solar', f: 'neutral', t: "I know. That's the worst part. I know you are." },
      { n: "She went to find the boy in the black hoodie. She didn't know what she was going to say to him. She only knew that if she didn't go, she'd have let someone else decide, and some part of her, older than April, older than any of it, would never forgive her." }
    ] },

    { after: '11/30', title: "6: father doesn't know", place: 'Naganaki Shrine', time: 'After School', scene: [
      { n: "He'd been waiting at the bottom of the shrine steps every afternoon for a week. Not running. Waiting. Solar knew because Kiriko told her, at the top of the steps, with a broom in her hand and a look of deep disapproval, that there was a very large man at the bottom who had been standing there for an hour a day like a statue somebody had donated." },
      { n: "She went down. He straightened when he saw her, the way you'd straighten for a coach." },
      { s: 'jaehyun', f: 'neutral', t: "I'm going to say something and you're going to let me finish." },
      { s: 'jaehyun', f: 'neutral', t: "...Will you let me finish?" },
      { n: "He'd asked. He'd added it on, after, like a tag on a gift, and she could see it had cost him. She nodded." },
      { s: 'jaehyun', f: 'neutral', t: "You were right. On the steps. I called it without asking you. I do that. I'm told it every Thanksgiving. Usually by you. Usually at the table. Usually in front of Father." },
      { s: 'jaehyun', f: 'serious', t: "I'm not going to tell you I was wrong about him. I'm going to tell you I was wrong to decide for you. Those are two different things. I'm not going to pretend they're the same so you'll forgive me faster." },
      { choose: [
        { t: "That's the most annoying apology I've ever heard.", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "Yes. It's the only honest one I have." }
        ] },
        { t: "Thank you, Jae.", notes: 3, then: [
          { n: "The name came out of her short and worn-in, like it had been rubbed smooth by years of use. She had never said it before in her life, here. He looked at her a beat longer than the sentence deserved." },
          { s: 'jaehyun', f: 'neutral', t: "...Mm." }
        ] }
      ] },
      { s: 'jaehyun', f: 'neutral', t: "And I'm going to tell you something you don't remember, because it's yours and you should have it." },
      { s: 'jaehyun', f: 'neutral', t: "You play a game. On a team. Competitively. You're very good. You won something this fall, in front of a lot of people. Father doesn't know." },
      { s: 'jaehyun', f: 'serious', t: "I found out. I didn't tell him. I'm not going to tell him. It's the only thing I've ever kept from him, and I kept it for you." },
      { n: "He said it to the shrine gate, flat, the way you'd confess to something you'd done with your hands. And it went into her like a bell. Not the game. Not the team. *I didn't tell him.* She'd waited her whole life, some part of her knew, for her brother to keep one thing on her side of the table." },
      { choose: [
        { t: "Why?", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "Because you found something you love outside the route they drew for you. I found mine inside it. That's not fair. I've always known that's not fair." },
          { s: 'jaehyun', f: 'neutral', t: "It's the only play I've ever called that wasn't for me or for him." }
        ] },
        { t: "(Hug him.)", notes: 3, then: [
          { n: "She hugged him. He was enormous and went completely stiff, arms out, like a man who'd been handed a baby, and then, very slowly, the way you'd lower something fragile onto a shelf, he put his arms around her, and his chin on top of her head, and stood there at the bottom of the shrine steps not saying anything at all while Kiriko watched from the top with her broom, and sniffed, and went back to sweeping." }
        ] }
      ] }
    ] },

    { after: '12/7', title: "7: it's winter", place: 'Iwatodai · Riverside', time: 'After School', music: 'night', scene: [
      { n: "The riverbank in December was the color of an old photograph, the grass gone straw-pale and stiff with frost, the water slow and pewter and steaming a little where the drain came out under the bridge, and the light at a quarter past four was already giving up." },
      { n: "On the flat stretch below the embankment a handful of middle-school boys were playing soccer with backpacks for goalposts and no referee. Solar had stopped on the path to watch for no reason except that it was nicer than homework, and she noticed the man beside her the way you notice weather, all at once, already there." },
      { s: 'jaehyun', f: 'serious', t: "The keeper's cheating left." },
      { n: "He said it to no one, quietly, like a man reading a line item. Down on the field the boy with the ball looked left, and the keeper went left, and the ball went right, between a backpack and a rolled-up jacket, and half the field screamed." },
      { s: 'jaehyun', f: 'neutral', t: "He's been doing it all game. He thinks if he guesses first, he's in charge." },
      { s: 'jaehyun', f: 'neutral', t: "...I know someone like that." },
      { choose: [
        { t: "So do I. He's standing next to me.", notes: 3, then: [
          { s: 'jaehyun', f: 'happy', t: "Mm. Very funny, Solar." },
          { n: "But he was smiling. Not the photographer one. A small crooked one, at the corner of his mouth, that she'd have bet nobody at home ever saw." }
        ] },
        { t: "What do you see? On the field.", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "The kid in red. He's the best one out there and he passes too early. He doesn't trust anyone to get open, so he gets rid of it before he has to find out." },
          { s: 'jaehyun', f: 'serious', t: "...He'll figure it out. Or he won't, and he'll be very good at a game nobody else is playing." }
        ] }
      ] },
      { s: 'jaehyun', f: 'serious', t: "You're not wearing enough layers." },
      { s: 'solar', f: 'neutral', t: "I know. It's winter." },
      { n: "His brows went up, very slightly, which on a face like his was practically a shout." },
      { s: 'jaehyun', f: 'surprised', t: "...Yes. It is." },
      { s: 'jaehyun', f: 'neutral', t: "You're agreeing with me. Did you sleep?" },
      { n: "The light went orange, then gray. He checked his watch, and she watched him decide something, the whole process taking about four seconds, and he pulled off his gloves, thick black running gloves with a small orange letter on the cuff, and held them out, and didn't lower his hand until she took them." },
      { s: 'jaehyun', f: 'neutral', t: "I have four more miles. I'll be warm. You won't." },
      { choose: [
        { t: "You don't even know if I'm cold.", notes: 2, then: [
          { s: 'jaehyun', f: 'serious', t: "I know you didn't bring gloves." },
          { n: "It wasn't an answer to what she'd said. It was an answer to what she'd meant, and he'd arrived at it without asking her, and this time she let him." }
        ] },
        { t: "(Take them. Put them on.)", notes: 3, then: [
          { n: "They were too big. Her fingers swam in them. They were warm all the way through, and he watched her put them on and nodded once, satisfied, like a play had run the way he'd drawn it." }
        ] }
      ] },
      { n: "He went off down the river path at a pace that would have been a sprint for anyone else, and she watched until the dusk had him." },
      { n: "Folded small inside the left glove was a printed sheet with a table on it, times down one side and places down the other, lift and run and film and dorm dinner and Tartarus, the radio, a whole week of someone's life arranged in the order it would happen in, his and hers side by side, and at the bottom, in neat, impatient pen, *Read it this time. J.*" },
      { n: "She read it twice on the walk home. When Junpei asked where she'd gotten the gloves, she said *my brother,* and then stood in the lounge with her coat half off for a long moment, wondering why it had been so easy to say." }
    ] },

    { after: '12/13', title: '8: choir', place: 'Paulownia Mall · Central Atrium', time: 'Evening', music: 'tender', scene: [
      { n: "There was a choir in the atrium. A school choir, twenty kids in navy blazers and red scarves standing in three rows on the steps by the fountain under the enormous Christmas tree, singing carols in careful four-part harmony while the mall went by around them with its bags and its strollers and didn't stop." },
      { n: "Solar stopped. She didn't decide to. Her feet stopped and the rest of her came along, and she stood at the edge of the crowd with her bag on her shoulder, and her mouth was moving. She noticed that after a while. She was singing the alto line. Under her breath, very quietly, every word, in a language she didn't know she knew the carols in." },
      { n: "Jaehyun had been walking beside her. He'd stopped too. He was looking at her, not at the choir." },
      { s: 'jaehyun', f: 'neutral', t: "...Alto. You always took the alto line. You said the melody was for people who wanted to be looked at." },
      { s: 'solar', f: 'surprised', t: "I sang?" },
      { s: 'jaehyun', f: 'neutral', t: "In school. For years. You loved it. You'd come home and keep singing in the shower and Mother would tell you to stop because the neighbors could hear." },
      { s: 'jaehyun', f: 'serious', t: "And then Father decided it was a hobby. Not a direction. And you stopped. Not all at once. You just. Stopped coming home singing." },
      { n: "The choir finished the carol. The mall clapped, briefly, the way malls clap. Solar stood at the edge of the crowd with her mouth closed and her chest full of something she couldn't name, like a breath taken for a note that had never come." },
      { choose: [
        { t: "Did you ever say anything? When I stopped?", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "No." },
          { s: 'jaehyun', f: 'serious', t: "I didn't notice for a year. And then I noticed, and I thought it wasn't my business, because it was the route. Everyone takes the route." },
          { s: 'jaehyun', f: 'sad', t: "...It was my business. I was the only one in the house who could have said something he'd have listened to." }
        ] },
        { t: "(Sing the next one. Out loud.)", notes: 3, then: [
          { n: "The choir started the next carol and she sang it, out loud, the alto line, at the edge of the crowd, not loud but not hiding, and a woman in front of her turned around and smiled, and Jaehyun stood beside her with his hands in his pockets and didn't sing, he couldn't, he'd never been able to, and his jaw was working the whole time." }
        ] }
      ] },
      { s: 'jaehyun', f: 'neutral', t: "You should keep doing it. Wherever you are. Whatever Father thinks. I'll tell him myself, if I have to. I'll call it." },
      { s: 'jaehyun', f: 'serious', t: "...If you want me to. I'm asking. I'm practicing asking." },
      { choose: [
        { t: "I want you to.", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "Then I will." },
          { n: "He said it like a man signing something. She believed him. She didn't know if she'd ever believed him before, about anything that mattered, and the feeling of it was strange and new and warm, like stepping into a heated room in your coat." }
        ] },
        { t: "I'll tell him myself.", notes: 3, then: [
          { s: 'jaehyun', f: 'surprised', t: "..." },
          { s: 'jaehyun', f: 'happy', t: "...Yes. Of course you will. That's better. That's a much better play." },
          { s: 'jaehyun', f: 'neutral', t: "I'll be in the room. Not saying anything. Just in the room." }
        ] }
      ] }
    ] },

    { after: '1/9', title: '9: what are you running', place: 'Naganaki Shrine', time: 'Afternoon', scene: [
      { n: "It was the first week of January and the shrine still had its New Year's ropes up, thick and white and twisted, and the paper streamers stirring in the cold, and the steps were dusted with a thin snow that nobody had swept because the old man was off for the week, and Jaehyun wasn't running." },
      { n: "He was sitting at the top, on the last step, with his elbows on his knees, looking down all hundred and twelve of them at the street, and when she came up he moved over to make room without being asked." },
      { s: 'jaehyun', f: 'neutral', t: "Everyone's asked you. To come home." },
      { s: 'jaehyun', f: 'neutral', t: "The girls asked you on the roof. I heard. The whole dorm heard. Hyein doesn't know how to ask quietly." },
      { s: 'jaehyun', f: 'serious', t: "I haven't asked. You've noticed." },
      { s: 'solar', f: 'neutral', t: "I noticed." },
      { s: 'jaehyun', f: 'neutral', t: "It's the hardest thing I've ever done. I want you to know that. It's harder than the shoulder. It's harder than anything Father's ever put in front of me." },
      { s: 'jaehyun', f: 'neutral', t: "I read the field. I see where it's going. Everything in me wants to call it. And I'm not going to." },
      { n: "He turned his head and looked at her, all the way, the way he looked at defenses, at film, at anything he needed to understand before he moved, and for once it wasn't a reading. It was a question." },
      { s: 'jaehyun', f: 'serious', t: "So I'm going to ask you a different thing. For the first time in your life. What are you running, Solar?" },
      { choose: [
        { t: "I don't know yet.", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "Okay." },
          { s: 'jaehyun', f: 'neutral', t: "That's an answer. That's a real answer. I'll wait at the line until you do." }
        ] },
        { t: "Something nobody drew for me.", notes: 3, then: [
          { s: 'jaehyun', f: 'surprised', t: "..." },
          { s: 'jaehyun', f: 'happy', t: "...Good. That's the hardest route there is. Nobody covers it. Nobody expects it." },
          { s: 'jaehyun', f: 'neutral', t: "Run it." }
        ] },
        { t: "Why do you want to know?", notes: 2, then: [
          { s: 'jaehyun', f: 'neutral', t: "So I can block for it. Whatever it is. That's all I'm good for. Let me be good for it." }
        ] }
      ] },
      { s: 'jaehyun', f: 'neutral', t: "Whatever happens. Wherever you go. I'm going home either way. Someone has to be at the table when you call. Even if you don't." },
      { s: 'jaehyun', f: 'neutral', t: "...But the offer stands." },
      { n: "They sat on the top step until the snow started again, thin, coming down past the shrine lanterns, and neither of them said anything, which was, she had finally learned, the only way the two of them had ever known how to say anything at all." }
    ] },

    { after: '1/24', title: '10: jae', place: 'Iwatodai Dorm · Front', time: 'Night', music: 'tender', scene: [
      { n: "Midnight. The Dark Hour came up green over the street, the streetlamps going dark one after another down the hill like someone walking ahead of the night switching them off, and he was standing on the dorm's front step, exactly where he'd stood the night he came through, with his hand raised to knock." },
      { n: "She opened the door before he could." },
      { s: 'jaehyun', f: 'surprised', t: "...Solar." },
      { s: 'jaehyun', f: 'neutral', t: "I was going to knock. Twice. I don't know why. I wanted to see if you'd answer it differently." },
      { n: "And she knew him." },
      { n: "All at once, standing in the doorway in the green. Not in pieces, the gloves, the alto line, the stadium, one at a time. All of it, everything, a whole childhood coming up through her like the floor of a house when you come home after years: a tall boy who was always somewhere else, at practice, at a dinner, at a table with Father, who never once came to her room and always, every single time she'd ever been somewhere frightening, a party, a gala, a camera, turned up at the edge of it, at the back, saying nothing, already there. A text at the start of a school year. *Are you settling in alright?* A hand on top of her head for half a second in front of a crowd, so fast nobody saw. *Thanks for doing this, sister.*" },
      { s: 'solar', f: 'neutral', t: "...Jae." },
      { n: "His hand was still raised to knock. He didn't put it down. He stood there in the green with his fist in the air like a man who'd forgotten what he'd lifted it for." },
      { s: 'solar', f: 'neutral', t: "You're not wearing enough layers." },
      { s: 'jaehyun', f: 'surprised', t: "..." },
      { s: 'jaehyun', f: 'neutral', t: "...Very funny, Solar." },
      { n: "His voice cracked down the middle of her name. She'd never once heard it crack. Not here, not there, not anywhere in a whole life of being his little sister. He heard it too, and put his raised hand down slowly, very carefully, on top of her head, and left it there." },
      { choose: [
        { t: "Do not be hostile.", notes: 3, then: [
          { n: "He laughed. Out loud, on the dorm step, in the Dark Hour, his hand still on her head, a real laugh, surprised out of him, and it went out over the green silent street where nobody else was awake to hear it, and she thought it might be the first time she'd ever made her brother laugh on purpose." },
          { s: 'jaehyun', f: 'happy', t: "That's mine. That's my line. You stole my line." }
        ] },
        { t: "(Hug him. Make him stay for it.)", notes: 3, then: [
          { n: "She hugged him. He didn't go stiff this time. He put both arms around her and held on, hard, in the doorway, the way you'd hold onto someone at an airport, and over her head she heard him breathe out, long and slow, like a man who'd been holding his breath since October." }
        ] }
      ] },
      { s: 'jaehyun', f: 'neutral', t: "You don't have to tell me what you're running. I meant that. I still mean it." },
      { s: 'jaehyun', f: 'neutral', t: "Call if you need anything." },
      { s: 'solar', f: 'neutral', t: "I won't." },
      { s: 'jaehyun', f: 'happy', t: "...But the offer stands." }
    ] }
  ],

  afterMax: [
    { title: 'the tenths', place: 'Naganaki Shrine', time: 'After School', scene: [
      { n: "A hundred and twelve steps. Up and down. She timed him from the bottom with Akihiko's old stopwatch on its red cord, and read it out with the tenths." },
      { s: 'jaehyun', f: 'neutral', t: "Again. And then you're running it and I'm timing you." },
      { choose: [
        { t: "(Run it.)", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "Three minutes four and six tenths. Better than last week." },
          { s: 'jaehyun', f: 'happy', t: "...Good." }
        ] },
        { t: "(Make Akihiko-senpai race him instead.)", notes: 3, then: [
          { n: "Akihiko was there in eleven minutes, stretching. They raced the steps four times. Jaehyun won three. Akihiko demanded a fifth. Solar timed all of it, with the tenths, and didn't round once." }
        ] }
      ] }
    ] },
    { title: 'sunday dinner', place: 'Iwatodai Dorm · Dining Room', time: 'Evening', scene: [
      { n: "Rice, eggs, grilled meat, enormous portions. A plate in front of everyone. He stood at the end of the table until they ate." },
      { s: 'jaehyun', f: 'neutral', t: "Solar. What do you want. I'm asking." },
      { choose: [
        { t: "Exactly this.", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "...Good." },
          { n: "He sat down, finally, and ate, and put his hand on top of her head for half a second when he passed the salt, and nobody at the table saw, except everyone." }
        ] },
        { t: "Something you've never made.", notes: 3, then: [
          { s: 'jaehyun', f: 'serious', t: "That's a big ask." },
          { s: 'jaehyun', f: 'neutral', t: "Fine. Next Sunday. I'll study film." }
        ] }
      ] }
    ] }
  ]
});
