/* Noctis Lucis Caelum · IV The Emperor. Arrives on the 8/6 full moon. Format notes are at the top of akihiko.js.
   Luna and his fate are handled gently, without spelling out FFXV's ending. */
FemcSocial.define({
  id: 'noctis', name: 'Noctis Lucis Caelum', short: 'Noctis', arcana: 'Emperor', numeral: 'IV', from: 'Final Fantasy XV',
  arrives: '8/6',
  home: { place: 'Port Island · Pier', slot: 0, days: [0, 2, 3, 6], hint: 'Daytime on Sundays, Tuesdays, Wednesdays and Saturdays, at the end of the Port Island pier with a fishing rod.' },
  approach: "At the very end of the pier, someone in an expensive black jacket is asleep with a fishing rod between his knees. The line is twitching.",
  invite: {
    ask: ["fishing?", "u free. pier", "bored. come fish", "im awake. this is rare. come fish", "u bring snacks i bring rods", "fish are biting. probably", "pier. the good spot. hurry before an old guy takes it", "need someone to hold the rod while i nap"],
    ok: ["nice", "cool. end of the pier", "ok. no vegetables in the snacks pls"],
    no: ["ok. more fish for me", "ok. nap instead", "fine. the fish will miss u"]
  },
  hangouts: [
    [
      { n: "She'd brought sandwiches from the convenience store by the monorail, the egg salad ones, because she'd learned that much about him. What she hadn't checked was the second packet, which turned out to have lettuce in it. Noctis looked at the lettuce like it had insulted his family." },
      { s: 'noctis', f: 'neutral', t: "...Why is it green." },
      { choose: [
        { t: "(Pick the lettuce out for him.)", notes: 3, then: [
          { n: "She picked out every leaf and ate them herself, one at a time, while he watched with the solemn gratitude of a man whose life had just been saved." },
          { s: 'noctis', f: 'happy', t: "You're a hero. Nobody will ever know." }
        ] },
        { t: "It's lettuce. It barely counts.", notes: 2, then: [{ s: 'noctis', f: 'neutral', t: "That's what they want you to think." }] },
        { t: "Eat it. It's good for you.", notes: 1, then: [
          { s: 'noctis', f: 'sad', t: "...You sound like someone I know." },
          { n: "He ate it. He chewed for a very long time, staring out at the water, like a man composing his will." }
        ] }
      ] },
      { n: "A gull landed on the railing and watched them eat. He gave it his crust, and said gulls were the only reasonable creatures in this world, and was asleep against the post twenty minutes later." }
    ],
    [
      { n: "He was asleep when she got there. Of course he was. Rod between his knees, chin on his chest, jacket collar turned up against the wind off the bay, breathing slow and even, like the pier had been built for exactly this." },
      { n: "A gull had landed two feet away and was eyeing the open bag of chips beside him with real criminal intent." },
      { choose: [
        { t: "(Sit down and guard the chips.)", notes: 3, then: [
          { n: "She sat down between the gull and the chips and stared it out. It took four minutes. The gull left in disgrace, and Noctis, who apparently hadn't been as asleep as he looked, smiled without opening his eyes." },
          { s: 'noctis', f: 'happy', t: "...My hero." }
        ] },
        { t: "(Wake him up.)", notes: 2, then: [
          { s: 'noctis', f: 'neutral', t: "...Five more minutes." },
          { n: "He ate a chip without opening his eyes, which she would have said was impossible, and held the bag out to her." }
        ] },
        { t: "(Let the gull have them.)", notes: 1, then: [
          { n: "The gull took the whole bag and flapped off with it, crinkling, triumphant. Noctis woke at the sound." },
          { s: 'noctis', f: 'surprised', t: "...Were those mine?" }
        ] }
      ] },
      { n: "She fished with his spare rod while he slept. She caught nothing. When he woke up an hour later he asked if she'd caught anything, and she said no, and he said great, so it's not just me, and went back to sleep." }
    ],
    [
      { n: "Noctis, it turned out, had a teaching style, and the teaching style was to hand her the rod, say \"just kind of flick it,\" and lie back down." },
      { s: 'noctis', f: 'neutral', t: "You're overthinking it. Don't think. Be the line." },
      { choose: [
        { t: "(Flick it.)", notes: 3, then: [
          { n: "She flicked it. The lure sailed out over the water in a long clean arc and landed with a tiny plop, perfectly, beautifully, by complete accident." },
          { s: 'noctis', f: 'surprised', t: "...Okay. Show-off." }
        ] },
        { t: "Can you show me properly?", notes: 2, then: [
          { n: "He sighed like he'd been asked to carry a piano, got up, and fixed her grip with two fingers. Then he cast once, slowly, so she could see, and it was the most awake she had ever seen him." },
          { s: 'noctis', f: 'happy', t: "Like that. See? Easy." }
        ] },
        { t: "(Overthink it.)", notes: 1, then: [
          { n: "She overthought it. The hook caught the back of his jacket. He didn't move. He just lay there, hooked, looking at the sky." },
          { s: 'noctis', f: 'neutral', t: "...I'll allow it." }
        ] }
      ] },
      { n: "They didn't catch anything. That didn't seem to be the point, and she was starting to suspect it never had been." }
    ],
    [
      { n: "It was drizzling, a fine gray mist that beaded on everything, and the old men who usually fished the pier had all gone home. Noctis had not. He'd wedged a cheap convenience-store umbrella between two boards so it leaned over him like a tiny roof." },
      { s: 'noctis', f: 'happy', t: "Fish bite more in the rain. That's a fact. I read it somewhere. Probably." },
      { choose: [
        { t: "(Squeeze in under the umbrella.)", notes: 3, then: [
          { n: "There was not room under the umbrella for two people. They made room anyway, his rod and her knees and the bag of snacks all crammed under one circle of clear plastic while the rain ticked on it." },
          { s: 'noctis', f: 'neutral', t: "...Cozy." }
        ] },
        { t: "Is that actually true?", notes: 2, then: [{ s: 'noctis', f: 'neutral', t: "If we catch something, it's true." }] },
        { t: "We should go inside.", notes: 1, then: [{ s: 'noctis', f: 'sad', t: "Inside doesn't have fish." }] }
      ] },
      { n: "They caught nothing. It rained harder. He said, very seriously, that this was data, and wrote nothing down." }
    ],
    [
      { n: "Prompto was on the pier when she arrived, crouched at the very edge with his camera pointed at the water, trying to photograph a jellyfish that refused to hold still. Noctis sat behind him, fishing, pointedly not posing." },
      { s: 'prompto', f: 'happy', t: "Sol! Perfect! Sit next to Noct! Do a fishing face!" },
      { s: 'noctis', f: 'neutral', t: "There's no such thing as a fishing face." },
      { choose: [
        { t: "(Do Noctis's fishing face.)", notes: 3, then: [
          { n: "She leaned back against the post, let her mouth fall open, and closed her eyes." },
          { s: 'prompto', f: 'happy', t: "OH my god. That's it. That's him exactly." },
          { s: 'noctis', f: 'flustered', t: "...I don't look like that." },
          { s: 'prompto', f: 'happy', t: "You look EXACTLY like that, buddy." }
        ] },
        { t: "(Do a fishing face.)", notes: 2, then: [{ n: "She did a fishing face. She hadn't known what one was until she did it, and then she knew, and Prompto laughed so hard he nearly went in after the jellyfish." }] },
        { t: "No pictures, please.", notes: 1, then: [{ s: 'prompto', f: 'sad', t: "Aw. Okay. Just one. Of the back of your head. For mystery." }] }
      ] },
      { n: "Prompto took thirty photographs anyway. In every single one Noctis was looking at the water like a man who had absolutely not posed, and in every single one, if you looked closely, he was very slightly smiling." }
    ]
  ],
  // After rank MAX on the romance route, each visit plays the next date in order (then they rotate).
  dates: [
    { title: 'the big one', place: 'Paulownia Mall · Arcade', music: 'joy', scene: [
      { n: "Noctis had been unbearable since the twenty-sixth. Not loudly. Noctis didn't do anything loudly. He was unbearable the way a cat is unbearable after it's caught something, sleepily and completely, with a kind of private glow, and every time fish came up in conversation, which with Noctis was always, he went quiet and looked down at his hands like the line was still in them." },
      { n: "So when Prompto texted that the arcade in Paulownia Mall had a fishing game, a real cabinet with a plastic rod and a reel you had to crank, Solar did the only reasonable thing, which was to say nothing at all until they were standing in front of it." },
      { s: 'noctis', f: 'surprised', t: "...There's a rod." },
      { s: 'noctis', f: 'neutral', t: "Why is there a rod. Who made this. I need to meet them." },
      { n: "He put in a hundred yen with the gravity of a man laying a wreath. The screen showed a lake, very blue, very fake, full of bass with enormous cartoon mouths. Noctis cast with one smooth, beautiful flick of the wrist, the most awake she'd seen him since the pier, and then waited, patiently, the way he'd taught her, the way you were supposed to." },
      { n: "The game did not want patience. The game wanted violence. The bass got bored and left, and the screen said TIME UP in red letters, and Noctis stood there holding the plastic rod with the expression of someone who has been personally lied to by a lake." },
      { s: 'noctis', f: 'serious', t: "That's not how fish work." },
      { s: 'noctis', f: 'neutral', t: "...You try." },
      { choose: [
        { t: "(Play it the way he taught you. Flick it. Be the line.)", notes: 3, then: [
          { n: "She flicked it. She was the line. The game, for reasons known only to itself, gave her a bass the size of a car, and the cabinet played a fanfare loud enough that two middle schoolers came over to look, and the high score board asked for her initials." },
          { s: 'noctis', f: 'neutral', t: "...Okay. Show-off." },
          { s: 'noctis', f: 'happy', t: "Put mine next to yours. I taught you. That's basically my fish." }
        ] },
        { t: "(Crank the reel like your life depends on it.)", notes: 2, then: [
          { n: "She cranked like her life depended on it, and the game loved her for it, and pulled up a bass the size of a sofa while Noctis watched with deep, wounded betrayal." },
          { s: 'noctis', f: 'serious', t: "That's not fishing. That's violence. ...Do it again." }
        ] },
        { t: "(Hand him another hundred yen.)", notes: 2, then: [
          { n: "He lost three more times, each time more outraged, and on the fourth he gave up on patience and cranked with his whole arm, and caught something enormous, and then looked at it on the screen with no joy at all." },
          { s: 'noctis', f: 'sad', t: "...It's not the same. You weren't holding the rod." }
        ] }
      ] },
      { place: 'Paulownia Mall · Photo Booth', time: 'Afternoon', music: 'joy' },
      { n: "There was a photo booth by the arcade's back wall, the kind with a curtain and a stool and a voice that counted down in a cheerful, threatening falsetto. Noctis had never been inside one. He looked at it the way he looked at lettuce." },
      { s: 'noctis', f: 'neutral', t: "Prompto would die if he knew I did this without him." },
      { s: 'solar', t: "So we won't tell him." },
      { s: 'noctis', f: 'happy', t: "We're definitely going to tell him." },
      { n: "The stool was built for one person. They made it work anyway, his shoulder pressed against hers, the curtain swinging shut behind them. In the first picture he was stiff as a prince on a stamp. In the second he was looking at her instead of the camera. In the third she was laughing at him for it, and he was smiling, small and caught, at nothing in particular." },
      { choose: [
        { t: "(Kiss his cheek on the last countdown.)", notes: 3, then: [
          { n: "Three, two, one, and she turned and kissed his cheek, and the flash went off, and when the strip slid out of the slot the fourth picture was Noctis Lucis Caelum with his eyes squeezed shut and his ears scarlet, looking like a man who had just been hit by something wonderful and heavy." },
          { s: 'noctis', f: 'flustered', t: "...I blinked. That's a blink." },
          { s: 'solar', t: "Sure." },
          { s: 'noctis', f: 'flustered', t: "It's a really long blink." }
        ] },
        { t: "(Do his fishing face for the last one.)", notes: 2, then: [
          { n: "She leaned back, let her mouth fall open, and closed her eyes. After a second of silent suffering, he did it too. The fourth picture was the two of them asleep on a stool, mouths open, perfectly matched, like a pair of very tired statues." },
          { s: 'noctis', f: 'happy', t: "...Okay. I get why Prompto likes that one now." }
        ] }
      ] },
      { n: "The machine gave them two strips. He tore his carefully along the perforation and tucked it into his wallet, behind the photo of the four of them on the road that Prompto had printed for him, where he kept the things he couldn't afford to lose. Prompto found out by eight o'clock. Prompto demanded a copy by eight-oh-one." }
    ] },
    { title: 'the carrot', place: 'Iwatodai Dorm · Kitchen', music: 'joy', scene: [
      { n: "Ignis had asked to see her alone, which was how Solar came to be standing in the dorm kitchen at four in the afternoon in a borrowed apron, holding a peeler, being briefed like a soldier before a landing." },
      { s: 'ignis', f: 'serious', t: "Noct will eat things you make him. I've observed it. He has eaten things in your company that he has refused from me for twenty years. I keep a list." },
      { s: 'ignis', f: 'neutral', t: "I'm not proud. I'm a strategist. Tonight, we use it." },
      { n: "The target was carrots. Glazed, Ignis said, with butter and a little honey, the way Noct's father's cook used to make them in the palace, a dish Noct had pushed to the edge of his plate every night of his childhood with the quiet, total commitment of a hunger strike." },
      { choose: [
        { t: "(Cut the carrots into little fish.)", notes: 3, then: [
          { n: "She cut them into little fish, with tails and a notch for an eye. It took forty minutes. Ignis watched the first one come off the knife, and then took off his glasses, and cleaned them, slowly." },
          { s: 'ignis', f: 'happy', t: "...Diabolical. I'm genuinely proud of you." }
        ] },
        { t: "(Hide them under the meat.)", notes: 2, then: [
          { s: 'ignis', f: 'sad', t: "He'll find them. He always finds them. He found one inside a meatball when he was nine." },
          { s: 'ignis', f: 'neutral', t: "But it's tradition. We do it anyway." }
        ] },
        { t: "(Put them on the plate in plain sight. Honesty.)", notes: 2, then: [
          { s: 'ignis', f: 'neutral', t: "...Bold. Reckless. I've never once had the nerve." }
        ] }
      ] },
      { n: "Noctis came in at six, sniffing the air like a hound, and stopped in the kitchen doorway. He looked at the plate. He looked at Solar, in the apron. He looked at Ignis, standing with his hands folded behind his back and his face arranged into an expression of perfect neutrality." },
      { s: 'noctis', f: 'serious', t: "...This is a setup." },
      { s: 'ignis', f: 'neutral', t: "I have no idea what you mean. Sit down. It's getting cold." },
      { n: "He sat down. He ate the meat first, slowly, the way a man reads a contract. Then, while the kitchen went completely silent, he picked up one piece of carrot with his chopsticks, looked at it for a long time, glanced up at Solar, and ate it." },
      { n: "Then he ate the next one. Then all of them. Ignis took his glasses off again and cleaned them again, slowly, for a very long time, and Solar realized that he was not cleaning his glasses." },
      { place: 'Iwatodai Dorm · Front', time: 'Evening', music: 'tender' },
      { n: "They sat on the dorm's front step afterward, in the cold, with the door shut behind them and the street dark and quiet, the windows of the houses opposite glowing yellow. He had his hands jammed in his jacket pockets. He'd eaten every carrot. He seemed, for once, to be thinking about it." },
      { s: 'noctis', f: 'neutral', t: "I ate them because you made them. Don't tell Specs. He already knows." },
      { s: 'noctis', f: 'sad', t: "When I was a kid I was sick for a long time. Couldn't eat much. Specs was like, ten. He learned to cook so I'd eat something. He used to cut stuff into shapes." },
      { s: 'noctis', f: 'sad', t: "I never said thanks. Not once. Twenty years of vegetables." },
      { choose: [
        { t: "Tell him. Tonight.", notes: 3, then: [
          { s: 'noctis', f: 'neutral', t: "...Yeah. Maybe." },
          { s: 'noctis', f: 'happy', t: "Tomorrow. Tonight he's busy pretending he didn't cry." }
        ] },
        { t: "(Lean on his shoulder.)", notes: 3, then: [
          { n: "She leaned on his shoulder. He let out a long breath that went white in the air, and leaned back, the way he leaned against the pier post when he fell asleep, except that he didn't fall asleep. He just stayed." }
        ] }
      ] },
      { n: "He kissed her on the front step, a little shy about it, and he tasted, faintly but undeniably, of honey and carrot. She told him so. He said that was slander. Through the lounge window behind them, Ignis was very visibly not watching, polishing a perfectly clean glass." }
    ] },
    { title: 'fortune', place: 'Naganaki Shrine', scene: [
      { n: "The shrine was quiet in the cold, the gravel frozen into ridges and the big tree by the gate bare and black against a white sky. Noctis had never seen a shrine. He stood at the bottom of the stone steps with his hands in his pockets and looked up at the gate like it was a door he was not sure he was allowed through." },
      { s: 'noctis', f: 'neutral', t: "So you just... walk in. Anyone can." },
      { s: 'solar', t: "Anyone can." },
      { s: 'noctis', f: 'happy', t: "Huh. Nice." },
      { n: "She showed him the wooden box of fortunes by the offering hall. A hundred yen in the slot, a shake of the hexagonal box until a stick came out of the hole in the bottom, and a number on the stick, and a drawer with that number, and a slip of paper inside. He shook it like a dice cup, very seriously, with both hands." },
      { n: "Hers said great blessing. His, he read, and didn't say anything at all. He folded it in half, and then in half again, and stood looking at the bare tree with the paper held between two fingers like something that might go off." },
      { s: 'noctis', f: 'sad', t: "...Not great." },
      { choose: [
        { t: "Trade with me.", notes: 3, then: [
          { s: 'noctis', f: 'surprised', t: "That's not how it works." },
          { s: 'solar', t: "It is now." },
          { n: "She took his folded paper out of his fingers and put hers in its place. He looked down at it, great blessing, sitting in his palm where the bad one had been, and his mouth did something complicated." }
        ] },
        { t: "The bad ones you tie to the tree. You leave them here.", notes: 3, then: [
          { s: 'noctis', f: 'neutral', t: "You just... leave it?" },
          { n: "They tied it together, on a low branch, his clumsy cold fingers and her quick ones, until it hung there like a small white bird. He stood back and looked at it for a while." },
          { s: 'noctis', f: 'happy', t: "...I like that. Leaving something somewhere and walking away." }
        ] },
        { t: "What does it actually say?", notes: 2, then: [
          { s: 'noctis', f: 'neutral', t: "Travel, delayed. Lost things, found late. The person you're waiting for will come." },
          { s: 'noctis', f: 'happy', t: "...That last one's fine, actually." }
        ] }
      ] },
      { n: "They sat on the shrine steps afterward with two cans of hot tea from the machine by the gate. It started to snow, the dry, light kind, the flakes sitting on his dark hair without melting." },
      { s: 'noctis', f: 'neutral', t: "Back home, everybody's got a fate. The gods pick it. Then you spend your whole life walking toward it." },
      { s: 'noctis', f: 'happy', t: "Here you just get a new one for a hundred yen. That's a way better system." },
      { choose: [
        { t: "(Put in another hundred yen.)", notes: 2, then: [
          { n: "She put in another hundred yen and handed him the box. He shook it, and drew, and read it, and burst out laughing, real and loud enough to startle a crow off the roof." },
          { s: 'noctis', f: 'happy', t: "Small blessing. Ha. I'll take it. I'll take a small one." }
        ] },
        { t: "(Brush the snow out of his hair.)", notes: 3, then: [
          { n: "She brushed the snow out of his hair, slowly, and he held still for it with his eyes half shut, the way he held still in the sun at the end of the pier, and when she was done he caught her hand and kept it, and put both of them, hers and his, in his lap, out of the snow." }
        ] }
      ] },
      { n: "Going down the steps, he took her hand and said, without looking at her, that the paper had said the person you're waiting for will come. He said he figured that one had already happened. He said it to the steps, quickly, like it had to be said before it could be stopped, and then didn't say anything else until the bottom, and didn't let go there either." }
    ] },
    { title: 'the city awake', place: 'Iwatodai · Rooftops', music: 'night', scene: [
      { n: "He took her up on a Tuesday, at nine at night, with the lights on." },
      { n: "They'd been walking home along the strip, and he'd stopped at the mouth of the alley beside the station, where nobody was, and looked up at the rooftops, and held out his hand, palm up, the way he had in November on the roof of the station with the green sky over them." },
      { s: 'noctis', f: 'neutral', t: "I've only ever seen it from up there green. Everything stopped. Coffins." },
      { s: 'noctis', f: 'happy', t: "I wanted to see it with the lights on. With you." },
      { n: "She took his hand. A sword appeared in his other one, glowing blue, and he threw it, and then they were wherever the sword was, a flash and a lurch and her stomach somewhere back on the pavement, the cold air hitting her face all at once." },
      { n: "It was different with the lights on. The city wasn't frozen. It moved. Trains slid along their tracks underneath them like strings of beads, cars poured over Moonlight Bridge in two bright rivers, a thousand windows were lit, and in every one somebody was eating dinner or arguing or asleep in front of the television, alive, all of it, alive." },
      { n: "They went roof to roof to roof, up and up, blue flash after blue flash, until they were standing on the water tower on top of the tallest building in Iwatodai, eleven stories and a ladder above the street, the wind pulling at their coats." },
      { s: 'noctis', f: 'surprised', t: "...You're still holding on." },
      { choose: [
        { t: "(Let go of his jacket. Take his hand instead.)", notes: 3, then: [
          { s: 'noctis', f: 'surprised', t: "You let go." },
          { s: 'solar', t: "I'm still holding on. Different way." },
          { n: "He looked down at their hands for a long moment, the way he'd looked at the big fish in the gray water in December, like something he'd waited a very long time for and still could not quite believe had come up out of the dark." }
        ] },
        { t: "Again. Do it again.", notes: 3, then: [
          { s: 'noctis', f: 'happy', t: "Ha. Okay. Hold on." },
          { n: "He threw the sword out over the street to the roof of the department store, and they went, and came back, and went again, laughing, both of them, so hard that on the fourth landing he nearly put them in a satellite dish." }
        ] }
      ] },
      { n: "They sat on the edge of the water tower with their legs hanging over the city. It was so cold their breath froze on their scarves. He was quiet for a long while." },
      { s: 'noctis', f: 'sad', t: "Elizabeth says end of January. Then I'm back in the car, I guess. With the guys. Everything's waiting." },
      { s: 'noctis', f: 'serious', t: "There's a lot I'm going to have to do. I'm going to have to be awake for all of it." },
      { s: 'noctis', f: 'neutral', t: "So I'm going to remember this. Being up here. Awake, on purpose. Because I wanted to be." },
      { choose: [
        { t: "I'll remember it too. The whole city, awake.", notes: 3, then: [
          { s: 'noctis', f: 'happy', t: "...Yeah. Good. Then it's in two places. Harder to lose." }
        ] },
        { t: "(Say nothing. Hold his hand tighter.)", notes: 3, then: [
          { n: "She held on tighter. He squeezed back, once, the way you'd answer a question you'd been asked in a language without words for it." }
        ] }
      ] },
      { n: "He kissed her on the water tower with the whole of Iwatodai lit up underneath them, his nose cold against her cheek, slow and unhurried, like there was nowhere in any world he was supposed to be next." },
      { n: "And then, about four minutes after announcing that he was going to stay awake for the rest of his life, Noctis Lucis Caelum fell asleep on her shoulder, eleven stories up, in the wind." },
      { n: "It occurred to Solar, somewhere around the twentieth minute, that she was sitting on a water tower on top of the tallest building in Iwatodai, that there was no staircase, and that the only way down was snoring gently into her scarf. She let him sleep anyway. The trains went by below. The city stayed awake for both of them." }
    ] }
  ],
  // P3's Christmas Eve: on 12/24 evening, if Solar is romancing several people (rank 9+), she picks one; this plays.
  christmas: { place: 'Paulownia Mall', scene: [
    { n: "Christmas Eve, and Paulownia Mall had lost its mind. There were lights strung from every railing and a tree in the atrium three floors tall, and every couple in Port Island seemed to have decided to walk around the fountain at exactly the same slow speed, holding hands, in matching scarves, like a parade nobody had organized." },
    { n: "Noctis was standing by the fountain in a dark coat she hadn't seen before, with a long flat package under his arm wrapped in newspaper, looking at the couples with the polite, faintly horrified expression of a man who has been dropped into a foreign festival and told to participate." },
    { s: 'noctis', f: 'neutral', t: "Prompto explained it. Christmas Eve. It's like... a date day? The whole country agrees to go on a date at the same time?" },
    { s: 'solar', t: "Pretty much." },
    { s: 'noctis', f: 'flustered', t: "That's a lot of pressure to put on one day." },
    { n: "He'd also, it turned out, been briefed by Ignis, who had discovered the Japanese Christmas cake two weeks earlier and had made one every night since, perfecting it, so that there were currently four strawberry shortcakes in the dorm fridge and a fifth on the way, and Junpei had begun to refer to Ignis, with real reverence, as Santa." },
    { s: 'noctis', f: 'happy', t: "He wanted me to bring you one. I said it'd get crushed. He said then I'd better not crush it." },
    { s: 'noctis', f: 'neutral', t: "...I crushed it. It's in my pocket. It's fine. It's mostly fine." },
    { place: 'Port Island · Pier', time: 'Night', music: 'tender' },
    { n: "The end of the pier, where everything had started. The old men had all gone home to their families. The water was black and still, and it had begun, quietly, to snow, the flakes vanishing the moment they touched the surface, and one lamp at the end of the boards made a small gold room in the dark for the two of them." },
    { n: "He sat down on the boards with his back against the post, his post, and patted the wood beside him, and she sat, and he handed her the long flat package without ceremony, the way he handed her the spare rod every time she came." },
    { n: "It was a fishing rod. Not a spare. Hers. Light and dark blue, the reel still with the shop's sticker on it, and on the handle, scratched carefully into the cork with something sharp, a small, lopsided crown." },
    { s: 'noctis', f: 'flustered', t: "I worked for it. Don't tell anyone. Two weeks, carrying crates at the harbor for the fishing guys. Five in the morning." },
    { s: 'noctis', f: 'neutral', t: "Prompto has pictures. He says they're proof I can be awake before noon. He's going to use them against me forever." },
    { choose: [
      { t: "(Give him a pillow for the pier post. There's a fish on it.)", notes: 3, then: [
        { n: "It was small and square and blue, with a stitched fish on the front, and she'd gotten the fish slightly wrong, so it looked surprised. He held it like it was made of glass. Then he wedged it between his head and the post, and closed his eyes, and sighed the sigh of a man who had found his purpose." },
        { s: 'noctis', f: 'happy', t: "...This is the best thing anyone has ever given me. I'm not even kidding. Don't tell Specs." }
      ] },
      { t: "(Give him a bento. Every vegetable in it is cut into a fish.)", notes: 3, then: [
        { s: 'noctis', f: 'surprised', t: "...There are carrots in here." },
        { s: 'solar', t: "They're fish." },
        { s: 'noctis', f: 'flustered', t: "...I can't not eat fish. That's evil. You're evil. Thank you." }
      ] },
      { t: "(Give him a thermos of his own, so he stops borrowing Ignis's.)", notes: 2, then: [
        { s: 'noctis', f: 'happy', t: "Specs is going to be so relieved. He's lost like, four thermoses to me. One's at the bottom of this bay." }
      ] }
    ] },
    { n: "They sat with their shoulders together and the new rod across both their laps and watched the snow fall into the water. He ate the crushed cake out of its box with his fingers. It was, he said, mostly fine." },
    { s: 'noctis', f: 'sad', t: "Sometimes I wake up and think I'm still in the back of the car. With the guys. Gladio's elbow in my face. And then I'm not. I'm here." },
    { s: 'noctis', f: 'neutral', t: "And I'm not sad about it. And then I feel bad that I'm not sad about it." },
    { choose: [
      { t: "You're allowed to like it here.", notes: 3, then: [
        { s: 'noctis', f: 'sad', t: "...Am I?" },
        { s: 'solar', t: "You're allowed to like it here and miss them. Both. At the same time." },
        { s: 'noctis', f: 'happy', t: "Both. Okay. I can do both. I'm good at doing two things. Fishing and sleeping. Both at once." }
      ] },
      { t: "I'm glad you fell asleep in the wrong world.", notes: 3, then: [
        { s: 'noctis', f: 'flustered', t: "...That's my line. I said that." },
        { s: 'solar', t: "I know. I kept it." }
      ] }
    ] },
    { n: "He turned to look at her, very close, the snow in his eyelashes, and she watched him start to lean in, and then stop, and think about it, something careful and serious moving behind his face, and decide it differently." },
    { s: 'noctis', f: 'flustered', t: "Not in the dark. I'd fall asleep after. I want to do it right. With the sun coming up. On a good day." },
    { n: "So instead he kissed her hair, just at the temple, quick and warm through the cold, and then went red to the collar and looked out at the water like it had done it." },
    { s: 'noctis', f: 'neutral', t: "...The big one's out there. I can feel it. It's been circling since August." },
    { s: 'noctis', f: 'happy', t: "When it bites, I'm calling you. Whatever time it is. Even if it's five in the morning." },
    { s: 'solar', t: "You've never been awake at five in the morning in your life." },
    { s: 'noctis', f: 'happy', t: "For that fish? I'd be awake. For that fish and you." },
    { n: "They stayed on the pier until the snow had covered the boards around them in a thin white sheet, everywhere except the small dry patch where they sat. Walking back, he carried both rods, and she carried the pillow with the surprised fish on it, and at the end of the pier he turned around once and said goodnight, very seriously, to the water. She didn't ask. She had a feeling it had said goodnight back." }
  ] },
  romance: true,
  cast: { prompto: 'Prompto', ignis: 'Ignis', shinjiro: 'Shinjiro', haru: 'Haru', cloud: 'Cloud' },
  threads: { chocobros: { name: 'chocobros + sol', members: ['noctis', 'prompto', 'ignis'] } },
  texts: [
    { id: 'noct-1a', rank: 1, days: 1, slot: 1, msgs: [
      { from: 'noctis', t: 'caught nothing again' },
      { from: 'noctis', t: 'same time next time?' }
    ], reply: [
      { t: "I'll bring snacks.", notes: 3, then: [{ from: 'noctis', t: 'perfect. no vegetables' }] },
      { t: "Maybe the fish don't like you.", notes: 2, then: [{ from: 'noctis', t: 'impossible. fish love me' }, { from: 'noctis', t: 'they just love me from a distance' }] }
    ] },
    { id: 'choco-2', thread: 'chocobros', rank: 2, days: 1, msgs: [
      { sys: 'prompto created "chocobros + sol"' },
      { from: 'prompto', t: 'SOL! welcome to the group!!' },
      { from: 'prompto', t: 'i got like 400 pictures today, which ones do u want' },
      { from: 'noctis', t: 'delete the one where im asleep' },
      { from: 'prompto', t: 'which one' },
      { from: 'noctis', t: 'fair' }
    ], reply: [
      { t: 'All 400, obviously.', then: [{ from: 'prompto', t: 'A WOMAN OF CULTURE' }] },
      { t: 'The one of Noctis asleep.', then: [{ from: 'noctis', t: 'betrayed' }, { from: 'prompto', t: 'sending all 37 of them' }] }
    ] },
    { id: 'choco-3', thread: 'chocobros', rank: 3, days: 1, msgs: [
      { from: 'ignis', t: 'Good evening. I have been added to this channel against my will.' },
      { from: 'ignis', t: 'Solar, please inform Shinjiro that his broth technique is exceptional.' },
      { from: 'prompto', t: 'iggy is in LOVE with the dorm kitchen' },
      { from: 'ignis', t: 'I am appreciating it professionally.' }
    ], reply: [
      { t: "I'll tell him. He'll pretend not to care.", then: [{ from: 'ignis', t: 'A man of taste. Naturally.' }] },
      { t: 'You three were amazing.', then: [{ from: 'ignis', t: 'I believe I have come up with a new recipe. Inspired by your dorm.' }, { from: 'noctis', t: 'here we go' }] }
    ] },
    { id: 'noct-5a', rank: 5, days: 1, slot: 1, msgs: [
      { from: 'noctis', t: 'thanks for listening today. about my dad' },
      { from: 'noctis', t: "i don't really talk about him" }
    ], reply: [
      { t: "You can, with me.", notes: 3, then: [{ from: 'noctis', t: 'yeah. i think i can' }] },
      { t: "He sounds like he loved you.", notes: 3, then: [{ from: 'noctis', t: 'he did. i didnt always see it' }] }
    ] },
    { id: 'choco-5long', thread: 'chocobros', rank: 5, before: 8, days: 2, rename: 'chocobros + sol (+ gladio in spirit)', msgs: [
      { from: 'prompto', t: 'ok emergency' },
      { from: 'prompto', t: 'noct is asleep on the pier and a gull is standing on his chest' },
      { from: 'ignis', t: 'Is he injured?' },
      { from: 'prompto', t: 'no hes snoring' },
      { from: 'prompto', t: 'the gull looks very comfortable' },
      { ask: [
        { t: 'Leave them. They look happy.', notes: 3, then: [{ from: 'ignis', t: 'A generous view. I share it, reluctantly.' }] },
        { t: 'Take a picture. For the album.', notes: 2, then: [{ from: 'prompto', t: 'already took 9' }, { from: 'prompto', t: 'its called "the king and his subject"' }] },
        { t: 'Wake him before it steals his lunch.', notes: 1, then: [{ from: 'prompto', t: 'too late' }, { from: 'prompto', t: 'rip sandwich' }] }
      ] },
      { from: 'noctis', t: 'im awake' },
      { from: 'noctis', t: 'the bird is my friend now' },
      { from: 'ignis', t: 'Speaking of lunch. The sandwich I packed you contained spinach.' },
      { from: 'ignis', t: 'The gull did not eat the spinach. Who ate the spinach?' },
      { from: 'noctis', t: 'the ocean' },
      { from: 'prompto', t: 'he threw it in the ocean' },
      { from: 'noctis', t: 'snitch' },
      { ask: [
        { t: "I'll eat his vegetables next time. Problem solved.", notes: 3, then: [{ from: 'noctis', t: 'sol. hero of the people' }, { from: 'ignis', t: 'That is not solving the problem. That is relocating it.' }] },
        { t: 'Ignis, hide it in something he likes.', notes: 2, then: [{ from: 'ignis', t: 'I have been hiding it for years.' }, { from: 'ignis', t: 'He finds it every time.' }, { from: 'noctis', t: 'its a gift' }] },
        { t: 'Spinach is good for you, Noctis.', notes: 0, then: [{ from: 'noctis', t: 'et tu' }] }
      ] },
      { from: 'prompto', t: 'gladio would make him do 100 pushups for that' },
      { from: 'prompto', t: 'one per leaf' },
      { from: 'noctis', t: 'good thing gladio isnt here' },
      { from: 'noctis', t: '...' },
      { from: 'noctis', t: 'its weird that hes not here' },
      { from: 'ignis', t: 'He would despise this world. There is nowhere to camp.' },
      { ask: [
        { t: 'Tell me about Gladio.', notes: 3, then: [
          { from: 'prompto', t: 'big. loud. reads novels and thinks we dont know' },
          { from: 'noctis', t: 'my shield. hes supposed to be right next to me' },
          { from: 'noctis', t: 'hes gonna be so mad he missed this' }
        ] },
        { t: "Maybe he'll fall through too.", notes: 2, then: [
          { from: 'noctis', t: 'maybe' },
          { from: 'ignis', t: 'If he does, I imagine he will land somewhere dramatic.' },
          { from: 'prompto', t: 'shirtless. he will land shirtless' }
        ] }
      ] },
      { sys: 'prompto renamed the group "chocobros + sol (+ gladio in spirit)"' },
      { from: 'ignis', t: 'Noct. Dinner is at seven. There will be carrots.' },
      { from: 'noctis', t: 'going back to sleep' }
    ] },
    { id: 'noct-7a', rank: 7, days: 1, slot: 1, msgs: [
      { from: 'noctis', t: 'you held on the whole time' },
      { from: 'noctis', t: 'warping with a passenger is hard btw. you were good' }
    ], reply: [
      { t: 'Can we do it again?', notes: 3, then: [{ from: 'noctis', t: 'obviously' }] },
      { t: 'I think I left my stomach on a rooftop.', notes: 2, then: [{ from: 'noctis', t: 'ill go get it' }] }
    ] },
    { id: 'noct-9r', rank: 9, route: 'romance', days: 1, slot: 1, msgs: [
      { from: 'noctis', t: "i'm not good at words" },
      { from: 'noctis', t: "but i'm glad i fell asleep in the wrong world" }
    ], reply: [
      { t: "I'm glad too.", notes: 3, then: [{ from: 'noctis', t: '...' }, { from: 'noctis', t: 'good' }] },
      { t: 'Best nap of your life.', notes: 3, then: [{ from: 'noctis', t: 'by far' }] }
    ] },
    { id: 'noct-9f', rank: 9, route: 'friend', days: 1, slot: 1, msgs: [
      { from: 'noctis', t: "you're one of the bros now. official" },
      { from: 'noctis', t: 'prompto made a badge' }
    ], reply: [
      { t: "I'm honored.", notes: 3, then: [{ from: 'noctis', t: 'you should be. gladio had to earn his' }] },
      { t: 'Does it have a chocobo on it?', notes: 2, then: [{ from: 'noctis', t: 'obviously' }] }
    ] }
  ],
  ranks: [
    { after: '8/8', title: '1: the pier', music: 'sun', place: 'Port Island · Pier', scene: [
      { n: "At the very end of the Port Island pier, where the old men usually fished, there was a boy asleep." },
      { n: "He was sitting with his back against a post and a fishing rod propped between his knees, line in the water, head tipped back, completely unconscious. Spiky black hair. A black jacket with silver at the collar, too expensive and too formal for a pier. A faint, regal stillness to him, even asleep, like somebody had painted him into the scene." },
      { n: "The line jerked. Something had bitten. He didn't wake up." },
      { choose: [
        { t: "(Grab the rod.)", notes: 3, then: [
          { n: "Solar grabbed the rod and pulled. There was a brief, wild struggle, and then the line went slack and whatever it was got away. The boy opened one eye." },
          { s: 'noctis', f: 'neutral', t: "...Did you just lose my fish?" },
          { s: 'solar', t: "You were asleep." },
          { s: 'noctis', f: 'happy', t: "That's part of the technique." }
        ] },
        { t: "(Wake him up.)", notes: 2, then: [
          { s: 'noctis', f: 'neutral', t: "...Five more minutes." },
          { s: 'solar', t: "Your fish is getting away." },
          { s: 'noctis', f: 'surprised', t: "...WHAT?" },
          { n: "He was on his feet instantly, wide awake, reeling, swearing, and lost it anyway." }
        ] }
      ] },
      { s: 'noctis', f: 'neutral', t: "Noctis. I'm, uh. A prince. Of Lucis. Which doesn't exist here, apparently. I've checked." },
      { s: 'noctis', f: 'neutral', t: "I fell asleep in the back of the car. Woke up on this pier in the middle of the night. Everything was green. There were coffins." },
      { s: 'noctis', f: 'happy', t: "So I figured, while I'm here, I might as well fish." },
      { choose: [
        { t: "That's a very calm reaction.", notes: 3, then: [{ s: 'noctis', f: 'neutral', t: "Panicking doesn't catch fish." }] },
        { t: "A prince?", notes: 2, then: [{ s: 'noctis', f: 'happy', t: "Yeah. Don't make it weird. Nobody here knows who I am. It's kind of great." }] }
      ] },
      { n: "She sat down next to him on the end of the pier. He handed her the spare rod without asking. They fished until sunset and caught nothing, and he didn't seem to mind at all, and she found she didn't either." }
    ] },

    { after: '8/22', title: '2: prompto', music: 'sun', place: 'Port Island · Pier', scene: [
      { n: "There was a second boy on the pier now. Blond hair swept up, freckles, a camera on a strap around his neck, taking photographs of absolutely everything with the joy of someone who had never seen a seagull before." },
      { register: 'prompto' },
      { s: 'prompto', f: 'surprised', t: "Noct! Noct, look at that bird! Look at it! It's HUGE!" },
      { s: 'noctis', f: 'neutral', t: "It's a gull, Prompto." },
      { s: 'prompto', f: 'happy', t: "It's a MAJESTIC gull." },
      { n: "Prompto Argentum had come through two nights ago, landing in Paulownia Mall's fountain, camera held above his head to keep it dry. He'd found Noctis by asking everyone in Iwatodai if they'd seen 'a sleepy guy who looks like royalty.' Several people had." },
      { s: 'prompto', f: 'happy', t: "And YOU must be Sol! Noct talks about you! Well, he said 'there's a girl who lost my fish,' but in Noct, that's basically a sonnet." },
      { choose: [
        { t: "I'm the fish thief.", notes: 3, then: [{ s: 'prompto', f: 'happy', t: "LEGENDARY. Can I take your picture? For the album? I'm calling it 'Noct's Weird Vacation.'" }] },
        { t: "Nice to meet you, Prompto.", notes: 2, then: [{ s: 'prompto', f: 'happy', t: "Nice to meet YOU! Smile! Oh, wait, you're already smiling. Perfect." }] }
      ] },
      { n: "He took four hundred photos that afternoon. Of the pier, the water, the gulls, the boats, the fishing line, Noctis asleep, Noctis asleep from a different angle, Solar laughing at Noctis asleep. He showed her every single one on the little camera screen, narrating each with total sincerity." },
      { s: 'prompto', f: 'sad', t: "Back home, I take pictures of our trip. The four of us. So we remember it. So that if anything happens... we still have it, you know?" },
      { n: "He said it lightly. Noctis, half-asleep against his post, opened his eyes and looked at Prompto for a second with an expression that wasn't sleepy at all." }
    ] },

    { after: '9/5', title: '3: ignis', place: 'Iwatodai Dorm · Kitchen', scene: [
      { n: "Ignis Scientia came through and immediately reorganized the dorm kitchen." },
      { register: 'ignis' },
      { n: "He'd arrived the night before in an immaculate black shirt and glasses, found Noctis by following the smell of a convenience-store onigiri he'd judged inadequate, and was now standing in the dorm kitchen at seven a.m. with his sleeves rolled up and an expression of profound, professional disappointment." },
      { s: 'ignis', f: 'serious', t: "The spices are alphabetized. Incorrectly. And someone has been storing rice next to the oven." },
      { n: "Shinjiro came downstairs, saw a stranger in his kitchen, and stopped dead. Haru, behind him with her coffee setup, peered around his shoulder." },
      { s: 'shinjiro', f: 'neutral', t: "...Who the hell are you." },
      { s: 'ignis', f: 'neutral', t: "Ignis Scientia. Advisor to the prince, and his cook. I see this is your kitchen. My apologies. It's a very good kitchen. Your broth is exceptional." },
      { s: 'shinjiro', f: 'surprised', t: '...' },
      { s: 'shinjiro', f: 'neutral', t: "...Yeah. It is." },
      { choose: [
        { t: "You three should cook together.", notes: 3, then: [
          { s: 'haru', f: 'happy', t: "Oh! Yes! A collaboration!" },
          { s: 'shinjiro', f: 'neutral', t: "...Fine. But I'm on the broth." },
          { s: 'ignis', f: 'happy', t: "I wouldn't dream of touching your broth." }
        ] },
        { t: "Noctis, you never said you had a personal chef.", notes: 2, then: [{ s: 'noctis', f: 'happy', t: "He's not a chef. He's Specs. He just cooks better than chefs." }] }
      ] },
      { n: "It was the greatest breakfast in the history of Iwatodai Dorm. Ignis made something with eggs and herbs that made Junpei weep. Shinjiro made rice that Ignis praised for a full minute. Haru made coffee that made Ignis take his glasses off and clean them very slowly." },
      { s: 'ignis', f: 'happy', t: "...I believe I've come up with a new recipe." },
      { s: 'noctis', f: 'neutral', t: "Here we go." },
      { n: "Noctis ate three helpings and pushed every vegetable to the edge of his plate. Ignis noticed. Ignis always noticed. He said nothing, and put the vegetables back on the plate, and Noctis sighed like a man condemned." }
    ] },

    { after: '9/19', title: '4: the crown', place: 'Port Island · Pier', scene: [
      { n: "There was a second sword on the pier today. Cloud Strife was standing next to Noctis at the end of the dock, and both of them were looking at each other's weapons with the deep, wordless suspicion of two men who each thought the other one was showing off." },
      { s: 'cloud', f: 'neutral', t: "...That's a lot of swords." },
      { s: 'noctis', f: 'neutral', t: "That's a big one." },
      { s: 'cloud', f: 'serious', t: "It's the right size." },
      { s: 'noctis', f: 'happy', t: "Sure it is." },
      { n: "They compared swords for twenty minutes. It ended in a draw, and in mutual respect, and in Cloud catching a fish within five minutes of borrowing Noctis's rod, which Noctis took extremely personally." },
      { n: "When Cloud left, Noctis sat back down at the edge of the pier and didn't fish. He just held the rod across his knees and looked at the water." },
      { s: 'noctis', f: 'sad', t: "Back home, I'm supposed to be king. Someday. Soon, maybe." },
      { s: 'noctis', f: 'sad', t: "Everybody looks at me like I'm supposed to know what I'm doing. Like I'm supposed to want it." },
      { s: 'noctis', f: 'sad', t: "I just want to fish. Is that stupid?" },
      { choose: [
        { t: "It's not stupid to want a quiet life.", notes: 3, then: [{ s: 'noctis', f: 'sad', t: "...Tell that to my dad. And the whole kingdom." }] },
        { t: "Maybe a king who likes quiet is a good king.", notes: 3, then: [
          { s: 'noctis', f: 'surprised', t: '...' },
          { s: 'noctis', f: 'happy', t: "Huh. Never thought about it like that." }
        ] }
      ] }
    ] },

    { after: '10/3', title: '5: dad', music: 'tender', place: 'Port Island · Pier', scene: [
      { n: "October, and the pier was cold in the mornings now. Noctis had brought a thermos of something Ignis made and was sharing it with Solar, the steam rising off the cups into the gray air." },
      { s: 'noctis', f: 'sad', t: "My dad's the king. Regis. He's... tired. All the time. He's been holding up a wall around our city for years. With magic. It's killing him." },
      { s: 'noctis', f: 'sad', t: "When I was a kid I thought he just didn't want to spend time with me. He was always busy. Always somewhere else." },
      { s: 'noctis', f: 'sad', t: "Turns out he was keeping everyone alive. Including me." },
      { n: "He said it plainly, the way people say things that took them years to understand. Solar knew that kind of understanding. The kind that came too late to do anything with." },
      { choose: [
        { t: "He sounds like he loved you very much.", notes: 3, then: [{ s: 'noctis', f: 'sad', t: "...Yeah. He did. I didn't always see it." }] },
        { t: "Did you get to tell him?", notes: 2, then: [{ s: 'noctis', f: 'sad', t: "...Not really. Not properly. I keep thinking I'll have time." }] }
      ] },
      { n: "They drank the rest of the thermos in silence. A gull landed on the railing next to them and stared at Noctis's sandwich. He gave it half. Then the other half. He said his dad used to feed the birds in the palace gardens, when he thought nobody was watching." }
    ] },

    { after: '10/17', title: '6: luna', music: 'tender', place: 'Paulownia Mall · Rooftop Garden', scene: [
      { n: "Haru's garden on the Gekkoukan roof had a sister now, a tiny one on top of Paulownia Mall, and Noctis had found it and liked it because nobody else was ever there." },
      { n: "There was a single white flower growing in one of the planters, a delicate thing with long petals. He'd been staring at it for a while." },
      { s: 'noctis', f: 'happy', t: "Sylleblossoms. Or something like them. There's a girl back home who loves these. Luna." },
      { s: 'noctis', f: 'neutral', t: "We've known each other since we were kids. We write to each other, in a notebook. A dog carries it back and forth. That's... a long story." },
      { s: 'noctis', f: 'neutral', t: "We're supposed to get married. It's arranged. It's important, for both our countries." },
      { n: "He didn't say it unhappily. He said it the way you'd describe weather. Solar heard something under it, though, something careful and worried, a hand held over something that might break." },
      { choose: [
        { t: "Do you love her?", notes: 3, then: [
          { s: 'noctis', f: 'flustered', t: "...Yeah. I do. Maybe not the way the stories say. But I do." },
          { s: 'noctis', f: 'sad', t: "She's carrying so much. More than me, even. I'm always scared I won't get there in time." }
        ] },
        { t: "That sounds like a lot to carry.", notes: 3, then: [{ s: 'noctis', f: 'sad', t: "She carries more. That's what scares me." }] }
      ] },
      { n: "He picked the flower, carefully, and pressed it between two pages of a paperback he was carrying. Then he gave the book to Solar." },
      { s: 'noctis', f: 'sad', t: "...Hold onto it. I'd lose it." }
    ] },

    { after: '11/7', title: '7: warp', place: 'Iwatodai · Rooftops · The Dark Hour', scene: [
      { n: "The green hour, and a shadow was crossing the rooftops of Iwatodai, huge and many-legged, heading for the dorm." },
      { n: "Noctis was standing on the roof of the station next to her. He held out his hand, and swords appeared around him, glowing blue, hovering in the air like a crown of blades." },
      { s: 'noctis', f: 'serious', t: "Hold on to me. Don't let go." },
      { choose: [
        { t: "(Hold on.)", notes: 3, then: [{ n: "She held on. He threw a sword, and then they were wherever the sword was, a flash of blue light and a lurch, the city spinning, landing on the next roof before her stomach caught up." }] },
        { t: "What are you going to do?", notes: 2, then: [{ s: 'noctis', f: 'serious', t: "Warp. Hold on or you'll get left behind." }] }
      ] },
      { n: "They crossed the whole city that way. Roof to roof to roof, in bursts of blue light, the frozen streets far below. He fought the shadow in midair, warping around it, swords flashing, and every time he landed, he checked that she was still holding on." },
      { n: "When it was over, they were on top of the tallest building in Iwatodai, breathing hard, the green fading out of the sky around them." },
      { s: 'noctis', f: 'surprised', t: "...You didn't let go. Not once." },
      { s: 'noctis', f: 'sad', t: "Most people let go. It's a lot, warping. You just held on." },
      { n: "He sounded surprised. Like he'd expected, all his life, to be let go of eventually." }
    ] },

    { after: '11/21', title: '8: what\'s coming', music: 'tender', place: 'Port Island · Pier', scene: [
      { n: "Late November. The pier was almost empty, the water gray and choppy, the wind cold. Noctis had stopped fishing. He was just sitting at the end with his knees pulled up, looking at the horizon." },
      { s: 'noctis', f: 'sad', t: "Elizabeth told me something. About what's waiting for me. Back home." },
      { s: 'noctis', f: 'sad', t: "She didn't say all of it. She didn't have to. I sort of already knew. There's a reason my dad looks at me like that." },
      { n: "He didn't say what it was. He didn't need to. Solar saw it in his face, the shape of something very big and very far away and getting closer, something a king would have to do that a boy who just wanted to fish would never choose." },
      { choose: [
        { t: "Whatever it is, you won't face it alone.", notes: 3, then: [
          { s: 'noctis', f: 'serious', t: "...My friends'll be there. Specs. Prompto. Gladio." },
          { s: 'noctis', f: 'happy', t: "And now I'll have this. This year. This pier. You. I'll have that too." }
        ] },
        { t: "(Sit down beside him and say nothing.)", notes: 3, then: [{ n: "She sat beside him and said nothing. After a while he leaned against her shoulder, the way he leaned against the post when he fell asleep, and closed his eyes, and didn't sleep." }] }
      ] },
      { n: "A fish jumped, out on the gray water, silver and huge. The one he'd been trying to catch since August. He didn't move to grab the rod. He just watched it and smiled, small and tired and real." },
      { s: 'noctis', f: 'happy', t: "...Next time." }
    ] },

    { after: '12/5', title: '9: what are we', place: 'Port Island · Pier', scene: [
      { n: "December. The first snow, light and wet, falling on the water and vanishing. The pier, the end of it, the post. He was there with two rods and a thermos and a bag of the snacks she always brought him." },
      { s: 'noctis', f: 'flustered', t: "Okay. I'm bad at this. Words. Ignis is good at words. I'm good at naps." },
      { s: 'noctis', f: 'happy', t: "But I came to this world, and the best thing in it wasn't the fishing. It was who was fishing with me." },
      { s: 'noctis', f: 'flustered', t: "So. What are we?" },
      { route: [
        { t: "I love you, Noctis.", route: 'romance', notes: 3, then: [
          { s: 'noctis', f: 'surprised', t: '...' },
          { s: 'noctis', f: 'flustered', t: "...Okay. Okay. That's good. That's really good." },
          { n: "He took her hand, cold, in the snow, and held it, and didn't say anything else, and the snow kept falling on the water, and it was the most romantic thing she had ever seen anybody be terrible at." }
        ] },
        { t: "You're my best friend. My fishing partner, forever.", route: 'friend', notes: 3, then: [
          { s: 'noctis', f: 'neutral', t: "...Fishing partner. Forever. Yeah." },
          { s: 'noctis', f: 'happy', t: "That's a serious title. Prompto's going to be so jealous." }
        ] }
      ] }
    ] },

    { after: '12/26', title: '10: the catch', place: 'Port Island · Pier', scene: [
      { n: "The day after Christmas, early, freezing. The sun barely up. He'd texted her at five, which for Noctis was a miracle on the level of a resurrection: it's here. the big one. come NOW." },
      { n: "She ran the whole way. When she got to the end of the pier, he was standing at the edge with the rod bent nearly double, line screaming off the reel, every muscle braced, wide awake for once in his life." },
      { s: 'noctis', f: 'surprised', t: "Help me. Help me, Sol, it's huge, it's HUGE." },
      { n: "She grabbed the rod with him. They fought it together for twenty minutes, hands frozen, laughing, swearing, slipping on the icy boards. And then it came up out of the gray water, enormous and silver and furious, the fish he'd been chasing since August." },
      { n: "He held it up for a single second, triumphant, shaking. Prompto, who had appeared from nowhere, took eleven photos. Then Noctis lowered it gently back into the water, and let it go." },
      { s: 'noctis', f: 'happy', t: "...I didn't want to keep it. I just wanted to catch it once. With you." },
      { n: "He held something out. A fishing lure, hand-painted, a little silver fish with a crown on its head. He'd made it, he said. Ignis had helped with the paint." },
      { ifRoute: 'friend', then: [
        { choose: [
          { t: "I'll keep it on my keychain.", notes: 3, then: [{ s: 'noctis', f: 'happy', t: "Good. Then you'll always have a reason to go fishing. And think of me. Mostly the fishing." }] },
          { t: "Next year, the even bigger one.", notes: 3, then: [{ s: 'noctis', f: 'serious', t: "Deal. Wherever I am. Wherever you are. We'll find a pier." }] }
        ] },
        { n: "They sat at the end of the pier until the sun came up all the way, sharing the thermos, and he didn't fall asleep once." }
      ] },
      { ifRoute: 'romance', then: [
        { s: 'noctis', f: 'sad', t: "Whatever happens back home. Whatever's coming. I'll remember this pier. And you." },
        { choose: [
          { t: "And I'll remember you.", notes: 3, then: [
            { s: 'noctis', f: 'flustered', t: '...' },
            { n: "He kissed her at the end of the pier with the sun coming up behind him, gold on the gray water, and Prompto, somewhere behind them, very quietly took one more picture, and later gave it to her without a word." }
          ] },
          { t: "(Kiss him.)", notes: 3, then: [
            { s: 'noctis', f: 'surprised', t: '...!' },
            { s: 'noctis', f: 'flustered', t: "...Better than the fish. Don't tell the fish." }
          ] }
        ] }
      ] }
    ] }
  ]
});
