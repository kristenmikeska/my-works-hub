/* Junpei Iori · I The Magician. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'junpei', name: 'Junpei Iori', short: 'Junpei', arcana: 'Magician', numeral: 'I', from: 'Persona 3',
  kind: 'sees',
  romance: null,
  starts: '4/22',
  home: { area: 'Iwatodai Dorm', spot: 'Lounge', slot: 'evening', days: [0, 2, 4, 6],
          hint: 'Evenings on Sunday, Tuesday, Thursday and Saturday, on the lounge couch nearest the TV.' },
  cast: { coach: 'Coach', dad: 'Mr. Iori' },
  approach: "Junpei is sprawled across the end of the lounge couch with his cap tipped over his eyes and a handheld game beeping on his chest, and he lifts the brim an inch when you come down the stairs, like he's been waiting for an audience.",
  invite: {
    ask: ["yo leader. wild duck. i'm buying. (you're buying)", "dude i'm STARVING. hagakure?? pls", "need a second player. the cpu is cheating i swear on my life", "r u busy. like actually busy or mitsuru-senpai busy", "lounge. now. i have consommé chips and zero self control", "found a manga that's basically about us. kinda. ok not really. come look anyway"],
    ok: ["LET'S GOOO", "sweet. couch in 10. don't sit in my spot", "my man. my woman. my leader. whatever. come down"],
    no: ["aw man. ok. rain check", "cool cool cool. i'll just. be here. alone. with the chips", "next time then. holding u to it"]
  },
  hangouts: [
    [
      { n: "The dorm's television was old enough to have opinions, and the game console plugged into it was older, and Junpei handled both with the reverence of a man tending a shrine. He handed her the second controller. The cord was about a meter too short, so they sat on the floor with their backs against the couch and their knees nearly touching the screen, like kids at a sleepover." },
      { s: 'junpei', f: 'happy', t: "Okay, so, I'm gonna go easy on you. Like, real easy. Like, this is a tutorial." },
      { n: "She won the first round in eleven seconds. She didn't know how. Her thumbs seemed to have made some decisions without consulting her." },
      { s: 'junpei', f: 'surprised', t: "...That was lag. The TV lagged. Everybody saw that." },
      { choose: [
        { t: "Best of three?", notes: 3, then: [
          { s: 'junpei', f: 'happy', t: "Best of three. Best of FIVE. You're going down, leader." },
          { n: "He won the next one by mashing every button at once and screaming, which she had to admit was a strategy, and he did a lap of the lounge with both arms up, and Yukari shouted from the kitchen that some people had homework." }
        ] },
        { t: "It was definitely lag.", notes: 2, then: [
          { s: 'junpei', f: 'happy', t: "THANK you. See, this is why you're the leader. You see the truth." },
          { n: "He lost the next round too. He blamed the controller. She let him." }
        ] },
        { t: "(Hand him the better controller.)", notes: 1, then: [
          { s: 'junpei', f: 'serious', t: "Wait. Are you pitying me right now? Is this pity?" },
          { n: "It was a little bit pity. He took the controller anyway." }
        ] }
      ] },
      { n: "They played until the rain outside stopped and started again, and by the end she couldn't have said who was winning, and from the sound of it, neither could he, and neither of them wanted to be the one to check." }
    ],
    [
      { n: "There was a ballgame on, the Giants down two in the seventh, and Junpei watched it the way other people prayed, leaning so far forward on the couch that his cap was the only part of him still technically sitting down. Rain ran in long crooked lines down the front windows. The lounge smelled like instant noodles and the radiator." },
      { s: 'junpei', f: 'serious', t: "Okay. Okay okay okay. Bases loaded. If this guy doesn't swing at the first pitch I'm gonna lose my mind." },
      { choose: [
        { t: "(Lean forward too.)", notes: 3, then: [
          { n: "She leaned forward too, elbows on her knees, and he noticed, and for the length of one pitch they were both holding their breath over a game she didn't understand the rules of." },
          { s: 'junpei', f: 'happy', t: "YES! See? SEE? You felt that, right? You felt it." }
        ] },
        { t: "Which one's the pitcher?", notes: 2, then: [
          { s: 'junpei', f: 'surprised', t: "Which one's... dude. DUDE. Okay. Okay. Sit down. Class is in session." },
          { n: "He explained the whole sport from the beginning with his hands, and the batter struck out while he was doing it, and he didn't notice for two full minutes." }
        ] },
        { t: "(Read a magazine.)", notes: 1, then: [
          { s: 'junpei', f: 'sad', t: "You're reading during a bases-loaded situation. I don't even know you." }
        ] }
      ] },
      { n: "The Giants lost by one. Junpei lay back across the couch with his cap over his face and said that baseball was a cruel and beautiful sport, and that he'd be fine, and that he just needed a minute, and she sat on the arm of the couch and gave him one." }
    ],
    [
      { n: "It was half past eleven and the dorm had gone to bed, or pretended to, and the kitchen was dark except for the light inside the open fridge, which was where Solar found Junpei, crouched in front of it in a T-shirt and basketball shorts, lit blue from below like a man about to tell a ghost story." },
      { s: 'junpei', f: 'surprised', t: "Whoa. Don't sneak. Why are you sneaking? Were you also coming down for a secret ramen? Is that what this is?" },
      { n: "It was. She hadn't known it until he said it. He had two cups of instant noodles already lined up on the counter, the cheap kind with the dried shrimp that looked like fingernail clippings, and the kettle was ticking as it heated, and he held up one finger in the dim, solemn as a priest." },
      { s: 'junpei', f: 'serious', t: "Okay. Now. The lid says three minutes. The lid is lying. The lid has always been lying. Three minutes and ten seconds. Not nine. Not eleven. Ten. I worked it out in middle school. It's science." },
      { n: "He poured the water with enormous care, the steam going up into his face, and set the timer on his phone, and then they stood side by side in the dark kitchen with their hips against the counter, staring at two paper cups like they were waiting for a baby to be born." },
      { choose: [
        { t: "(Count the seconds out loud with him.)", notes: 3, then: [
          { n: "At a hundred and eighty she started counting under her breath, and he heard her, and joined in, and they whispered the last ten together, very seriously, eight, nine, ten, and he ripped the lid off his cup like a man opening a treasure chest." },
          { s: 'junpei', f: 'happy', t: "PERFECT. Dude. Perfect. Taste that. That's the ten seconds. You can taste the ten seconds." },
          { n: "She could not taste the ten seconds. She told him she could. His whole face lit up like the fridge." }
        ] },
        { t: "Three minutes is fine.", notes: 2, then: [
          { s: 'junpei', f: 'surprised', t: "Is it? Is it fine? Or is it just what they want you to think?" },
          { n: "She opened hers at three. He opened his at three-ten and made her taste both, and she had to admit, in the dark, at midnight, that she couldn't tell the difference, and he looked at her with deep pity, like a man looking at the colorblind." }
        ] },
        { t: "(Eat it at two minutes, hard noodles and all.)", notes: 1, then: [
          { s: 'junpei', f: 'sad', t: "No. Nope. What are you... that's crunchy. You're eating it crunchy. In front of me." },
          { n: "He didn't speak to her again until his own timer went off, out of principle, and then he forgot he was angry, because the noodles were ready." }
        ] }
      ] },
      { n: "They ate standing up, because sitting down would have made it a meal and a meal at midnight was a decision, and nobody wanted to have made a decision. Upstairs a door opened and closed. Junpei froze with his chopsticks halfway to his mouth until the footsteps went the other way. Then he grinned at her over the cup, broth on his chin, like they'd gotten away with something, which, she supposed, they had." }
    ]
  ],
  ranks: [
    { after: '4/22', title: '1: consommé', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
      { music: 'joy' },
      { n: "Junpei had lived at the dorm for less than a week and had already claimed the end of the couch nearest the television, which he defended the way some people defended a border, with his whole body and a great deal of noise. It was raining, the soft undecided kind of April rain that couldn't commit to being weather, a fine gray hiss against the front windows that made the lounge feel smaller and warmer than it was. His duffel bag was still at the foot of the stairs, half unpacked, like it was waiting to find out whether he'd be asked to leave." },
      { n: "When Solar came down, he sat up so fast his cap fell off, and he caught it, and put it back on, and pretended that had been the plan." },
      { s: 'junpei', f: 'happy', t: "Yo! Perfect timing. Sit, sit. I got you something." },
      { n: "It was a bag of consommé chips, family size. He held it out with both hands, the way you'd present a sword to a knight, or a diploma, or, she thought, a shield, which was what he'd been using the last one for." },
      { s: 'junpei', f: 'neutral', t: "I owe you a bag. Technically you only ate one chip, but it's, like, the principle. You were there for my worst moment, man. That's sacred." },
      { s: 'solar', f: 'neutral', t: "You told me you knew karate." },
      { s: 'junpei', f: 'flustered', t: "I was bluffing! It's a strategy! You bluff, the monster gets confused, you run." },
      { n: "He opened the bag with his teeth and offered it to her first, which she noticed, and sat back against the cushions with the air of someone settling in to tell a story he had already told a great many times to people who had not appreciated it." },
      { s: 'junpei', f: 'happy', t: "You know I told the guys in class? The next morning. Green sky, everybody's a coffin, Sanada-senpai with his fists up, some girl with a gun. Kenji laughed so hard he got milk out his nose. Strawberry milk. It was a whole thing." },
      { s: 'junpei', f: 'neutral', t: "And then Mitsuru-senpai made me sign this, like, form, saying I wouldn't tell anybody anything ever. So now I can't even tell them I wasn't lying." },
      { s: 'junpei', f: 'sad', t: "That's the worst part. I was right, and I gotta let them think I'm an idiot forever." },
      { choose: [
        { t: "I would've believed you.", notes: 3, then: [
          { s: 'junpei', f: 'surprised', t: "...Yeah?" },
          { n: "He looked at her for a second like he was checking for the joke, the way people do when they're used to being it, and when he didn't find one he didn't seem to know what to do with his hands, so he ate a chip." },
          { s: 'junpei', f: 'happy', t: "Okay. Cool. That's, uh. Cool. You're cool." }
        ] },
        { t: "(Take a chip.)", notes: 2, then: [
          { n: "She took a chip. He watched her eat it with enormous satisfaction, like a man watching a ceremony he had organized go off without a hitch." },
          { s: 'junpei', f: 'happy', t: "See? Sacred." }
        ] },
        { t: "In fairness, it does sound made up.", notes: 1, then: [
          { s: 'junpei', f: 'sad', t: "Wow. Wow. Et tu, Solar?" },
          { n: "He clutched his chest and slid down the cushions until he was mostly horizontal, and stayed there, wounded, until she held the bag out to him again." }
        ] }
      ] },
      { n: "They ate. The rain kept on. Somewhere upstairs Akihiko was doing push-ups loud enough to count through the ceiling, and Junpei's eyes kept going to her left sleeve, to the red armband pinned there, and coming away, and going back, the way your tongue goes back to a chipped tooth." },
      { s: 'junpei', f: 'neutral', t: "So you're the leader. Mitsuru-senpai said. Field leader. You call the shots and everything." },
      { s: 'junpei', f: 'happy', t: "Which is cool! Totally cool. You woke up in the tower, dude. That's a hero origin. That's chapter one." },
      { s: 'junpei', f: 'neutral', t: "Mine's a convenience store. I'm the guy in chapter one who gets saved so the hero has somebody to save." },
      { n: "He said it like a joke, with a grin on the end, and the grin was a beat late. Solar, whose own face seemed to know a great deal about arriving a beat late, didn't laugh." },
      { s: 'junpei', f: 'surprised', t: "Wait. You're a third-year. Do I gotta call you senpai? You don't really feel like a senpai." },
      { choose: [
        { t: "Please don't.", notes: 3, then: [
          { s: 'junpei', f: 'happy', t: "Oh, thank god. Solar it is." },
          { n: "He seemed lighter for it, like senpai would have made something official that he wasn't ready to sign yet." }
        ] },
        { t: "Call me whatever you want.", notes: 2, then: [
          { s: 'junpei', f: 'happy', t: "Dangerous thing to say to me, dude." },
          { s: 'junpei', f: 'neutral', t: "...Solar. Just Solar. Leader on special occasions." }
        ] },
        { t: "Senpai is fine.", notes: 1, then: [
          { s: 'junpei', f: 'flustered', t: "Solar-senpai. Solar-sen... nope. Nah. It sounds like I'm about to ask you for lunch money." }
        ] }
      ] },
      { n: "When she got up to go, he called after her with his mouth full that she could take the rest of the bag, and then, after a pause long enough for her to reach the landing, that actually he'd hold on to it for her, for safekeeping. She heard it crinkle before she got to her door." }
    ] },
    { after: '4/30', title: '2: batting practice', place: 'Iwatodai Dorm · Rooftop', time: 'Evening', scene: [
      { music: 'sun' },
      { n: "The roof was the only place in the dorm where you could swing a bat without hitting a lamp, which Junpei had learned, he told her, through what he called trial and what everyone else called the lamp. The evening had gone soft and orange over the bay, the kind of last light that made the railings warm to touch and the laundry somebody had left on the line glow like paper lanterns, and he was in a T-shirt with his cap on backwards, taking slow, careful swings at nothing." },
      { n: "There was a scuff on the concrete by the door that might have been from the night of the full moon, and neither of them looked at it." },
      { s: 'junpei', f: 'happy', t: "Yo. Leader. Come to watch a legend at work?" },
      { s: 'junpei', f: 'neutral', t: "I'm working on my follow-through. In there, the big guys, you gotta commit, you know? Half a swing and they just laugh at you. Well. They don't laugh. They don't have mouths. Some of them. You know what I mean." },
      { n: "He swung again, harder, and his cap came off, and he left it where it fell. For a while she watched him do it, and he talked the way he always talked, in a steady bright stream, about the Giants and his old team in middle school and a coach who used to throw his clipboard, and then the stream ran into something and stopped." },
      { s: 'junpei', f: 'neutral', t: "When you summon, everybody kind of stops. Did you know that? Yuka-tan stops. Akihiko-senpai stops. It's like a movie." },
      { s: 'junpei', f: 'sad', t: "When I do it, Yuka-tan goes 'nice, Junpei.' Like I tied my shoes." },
      { choose: [
        { t: "Hermes is fast. I watch him.", notes: 3, then: [
          { s: 'junpei', f: 'surprised', t: "...You watch Hermes?" },
          { n: "She did. It was the first thing she looked for when a fight went bad, the flash of those winged heels coming in from the left, and she hadn't known until she said it out loud that she was relying on it." },
          { s: 'junpei', f: 'happy', t: "Huh. Okay. Okay, I'm gonna think about that for like a week." }
        ] },
        { t: "(Pick up the ball and pitch to him.)", notes: 3, then: [
          { n: "There was a scuffed tennis ball by the door. She picked it up and walked to the other end of the roof and threw it underhand, badly, and he looked at it coming like it was a gift, and swung." },
          { n: "It went off the side of the building. They both stood very still and listened for a car alarm. None came." },
          { s: 'junpei', f: 'happy', t: "HOME RUN. Did you see that? You saw that." }
        ] },
        { t: "It isn't a competition.", notes: 1, then: [
          { s: 'junpei', f: 'neutral', t: "Says the winner." },
          { n: "He said it lightly and went back to swinging, and the next swing was a little too hard, and the one after that was a little too hard too." }
        ] }
      ] },
      { n: "The light went from orange to the blue that came before the lamps. He sat down on the edge of a planter with the bat across his knees and turned it slowly in his hands, like he was reading something written on it." },
      { s: 'junpei', f: 'neutral', t: "My old man used to pitch to me. In the park by our place. Every Sunday. He was actually pretty good." },
      { s: 'junpei', f: 'neutral', t: "Before." },
      { n: "The word sat there, round and finished, with nothing after it. He didn't look at her. He was looking at the bat." },
      { choose: [
        { t: "(Don't ask. Sit down next to him.)", notes: 3, then: [
          { n: "She sat on the planter beside him. It was still warm from the day. He didn't say anything else, and she didn't make him, and after a while he bumped her shoulder with his, once, like a thank-you he couldn't get his mouth around." }
        ] },
        { t: "Before what?", notes: 1, then: [
          { s: 'junpei', f: 'happy', t: "Before I got too good, obviously. Guy couldn't handle it. Retired from shame." },
          { n: "He grinned at her, fast and wide, and it was a very good grin. It fit him the way a borrowed jacket fits, fine from across a room." }
        ] },
        { t: "He taught you well.", notes: 2, then: [
          { s: 'junpei', f: 'neutral', t: "...Yeah. He did." },
          { n: "He said it to the bat, quietly, like it was the bat's business and not hers. She let it be." }
        ] }
      ] },
      { s: 'junpei', f: 'happy', t: "Anyway! Same time next week. You're my pitcher now. That's a lifetime appointment. No take-backs." }
    ] },
    { after: '5/12', title: '3: highlight reel', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
      { music: 'school' },
      { n: "Midterms were close enough now that the whole dorm had started to smell like them, that particular mix of highlighter and instant coffee and the slow sour panic of people who had been meaning to start studying in April. Outside it had been raining since lunch, warm and steady, the windows fogged at the bottom where the radiator couldn't reach. Junpei had his textbooks spread across the coffee table in what he called a system and what was, from any angle, a landslide." },
      { s: 'junpei', f: 'sad', t: "Solar. Solar. You did second-year already, right? You were a second-year once? Tell me you were a second-year once." },
      { n: "She had no idea. She sat down next to him anyway, because he looked like a man going down with his ship, and pulled the history book toward her, and found, somewhat to her own surprise, that the page made sense." },
      { s: 'junpei', f: 'serious', t: "It's the dates. I can't do dates. They're just numbers. Why do they need to be in order? Who decided that?" },
      { choose: [
        { t: "(Explain it like a batting order.)", notes: 3, then: [
          { n: "She put the shoguns in a batting order. The Kamakura lineup, the Muromachi lineup, who led off, who was a power hitter, who got traded. It was the stupidest thing she had ever said out loud, and he stared at her with his mouth slightly open, and then grabbed a pen." },
          { s: 'junpei', f: 'happy', t: "Oh my god. Oh my GOD. He's the cleanup guy. That's why he's important. Dude. DUDE." }
        ] },
        { t: "(Make him flashcards.)", notes: 2, then: [
          { n: "She made him flashcards out of a notebook he wasn't using, neat and fast, and he held the stack in both hands like she'd given him something valuable." },
          { s: 'junpei', f: 'neutral', t: "Your handwriting's like a printer. That's actually kind of scary." }
        ] },
        { t: "Just memorize them.", notes: 1, then: [
          { s: 'junpei', f: 'sad', t: "Oh, just memorize them. Why didn't I think of that. Thank you, leader. Very cool. Very helpful." }
        ] }
      ] },
      { n: "They worked for an hour, which was fifty minutes longer than he usually managed, and then he put his pen down and looked at her sideways, the look of somebody working up to a question he'd been carrying around a while." },
      { s: 'junpei', f: 'neutral', t: "Okay, real question. Is there anything you're bad at? Like, anything?" },
      { s: 'junpei', f: 'flustered', t: "Because you summon like it's nothing, and Mitsuru-senpai picked you, and you're good at school, and Akihiko-senpai says you can actually keep up with him running, which, nobody can, and I'm just trying to figure out if there's, like, a catch." },
      { choose: [
        { t: "Remembering.", notes: 3, then: [
          { n: "It came out before she'd decided to say it, flat and plain, and she watched it land on him." },
          { s: 'junpei', f: 'surprised', t: "Oh. Oh, man. Dude. I didn't mean... I'm an idiot. Sorry." },
          { n: "He was quiet for a second, which for Junpei was a long time. Then he sat up straighter, the way he did when he'd decided something." },
          { s: 'junpei', f: 'serious', t: "Okay. Then I'll do it. The remembering. Like, everything that happens this year, I'll keep it. Highlight reel. Director's cut. You forget anything, you just ask me." },
          { s: 'junpei', f: 'happy', t: "I'm gonna make myself look way cooler in it, though. That's the deal." }
        ] },
        { t: "Cooking, according to Yukari.", notes: 2, then: [
          { s: 'junpei', f: 'happy', t: "Ha! The curry thing! I heard about the curry thing." },
          { s: 'junpei', f: 'neutral', t: "Okay. Okay, that makes me feel better. That's a real flaw. I can work with that." }
        ] },
        { t: "(Shrug.)", notes: 1, then: [
          { n: "She shrugged, like she always did when a question came too close to a wall she couldn't see past, and he looked at her a second longer than he usually looked at anything, and let it go." },
          { s: 'junpei', f: 'neutral', t: "Yeah. Okay. Mysterious. Very leader of you." }
        ] }
      ] },
      { n: "Yukari came in from the kitchen with two mugs of tea and stopped dead at the sight of Junpei with a pen in his hand, and asked if he was sick, and he told her that he was a scholar now and to show some respect, and she put one of the mugs down in front of Solar and drank the other one herself, pointedly, at him." },
      { n: "He kept studying. Every so often he muttered something about cleanup hitters under his breath. When she went up to bed he was still at it, cap pushed back, tongue between his teeth, and he lifted his pen at her without looking up, like a salute." },
      { s: 'junpei', f: 'happy', t: "Night, leader." },
      { n: "It didn't have the beat in it anymore, the late one. She noticed on the stairs." }
    ] },
    { after: '5/26', title: '4: exact change', place: 'Iwatodai Strip · Hagakure', time: 'Evening', scene: [
      { music: 'evening' },
      { n: "The midterm rankings had gone up on the board outside the staff room, and Junpei had come in a hundred and twelfth out of a hundred and forty, which was the highest he had ever placed in anything that wasn't a hot dog contest, and he had not stopped talking about it since. He'd told Yukari, who said congratulations in a voice like she was checking him for a fever. He'd told Akihiko, who said good, and then told him his time on the river loop was still bad. He'd told the Chairman, who made a pun about making the grade that nobody understood. Tonight he had told Solar he was taking her to Hagakure, his treat, the full works, because a man paid his debts, and the shoguns were her debt, technically, so." },
      { n: "It was warm out, the first evening that leaned toward summer, and the strip smelled of frying oil and somebody's cigarette and hot pavement giving the day back. Inside Hagakure the air was thick enough to chew. Steam hung under the lamps and fogged the bottoms of the windows, and the old man behind the counter nodded at Junpei like he'd seen him often enough to stop deciding whether he liked him." },
      { s: 'junpei', f: 'happy', t: "Two specials. Large. Extra egg. Extra everything. She's a genius, she needs the fuel." },
      { n: "He slapped his wallet on the counter like a man laying down a winning hand, and then opened it, and then went still in a very particular way, the stillness of somebody doing arithmetic he already knew the answer to. A thousand-yen note. Some coins. A ticket stub. A photo of a ballplayer cut out of a magazine, soft at the folds." },
      { s: 'junpei', f: 'flustered', t: "...Uh. Make that one large. And one, uh. Regular. Small. What's the smallest one you got." },
      { choose: [
        { t: "(Put your own money on the counter without a word.)", notes: 3, then: [
          { n: "She took out her purse and set a note down next to his, edges lined up, and didn't look at him while she did it, because looking at him would have made it a thing. He looked at the note. He looked at her not looking at him." },
          { s: 'junpei', f: 'neutral', t: "...Okay. Halves. But next time I'm buying. I'm writing it down." },
          { n: "He didn't write it down. She suspected he'd remember it anyway, longer than she would, which, given her track record, was a low bar." }
        ] },
        { t: "I'll have the small one.", notes: 2, then: [
          { s: 'junpei', f: 'surprised', t: "No. No way. You're getting the big one. I'm getting the small one. I'm on a diet." },
          { n: "He was not on a diet. He finished his small bowl in four minutes and then watched hers with the eyes of a stray, and she pushed it toward him halfway through, and he took it without arguing, which told her more than the wallet had." }
        ] },
        { t: "You're broke?", notes: 1, then: [
          { s: 'junpei', f: 'flustered', t: "I'm not broke. I'm... differently liquid. It's a cash flow thing. It's very complicated. It's economics." },
          { n: "The old man, who had heard every excuse there was, put two large bowls down in front of them without a word and wrote something on the pad by the register, and Junpei went red all the way to the back of his neck." }
        ] }
      ] },
      { n: "The ramen was very good. It was always very good, which was the trouble with Hagakure, you couldn't come here to be miserable, the broth wouldn't let you. Junpei ate with his elbows out and his cap pushed back, making the noises of a man having a religious experience, and talked about the board, his name on the board, he'd taken a picture of it with his phone, did she want to see the picture, and she did." },
      { n: "Then the phone buzzed on the counter between them, and he looked at the screen and turned it face down. It buzzed again. He let it ring out. A minute later it gave the short double buzz of a text, and he read it under the edge of the counter, where she couldn't see, and put it in his pocket." },
      { s: 'junpei', f: 'neutral', t: "My mom. She wanted to know if I'm eating." },
      { s: 'junpei', f: 'happy', t: "Which, look at me. Look at this. I'm eating so hard right now." },
      { n: "He held his bowl up toward his pocket, like a toast, like proof. The grin came on a beat late again. She'd thought he'd gotten rid of that. It turned out he'd only put it somewhere for a while." },
      { choose: [
        { t: "(Keep eating. Let him get there.)", notes: 3, then: [
          { n: "She kept eating. The old man scraped the grill. A salaryman two stools down paid and left with his tie thrown over his shoulder, and the door let in a breath of warm night and shut again, and Junpei turned his glass of water around on the counter a quarter turn at a time, like a combination lock he was trying to remember." }
        ] },
        { t: "Is everything okay at home?", notes: 2, then: [
          { s: 'junpei', f: 'neutral', t: "Define okay." },
          { n: "He said it like the start of a joke and then didn't finish it, and the joke sat there between them undone, like a shoelace." }
        ] },
        { t: "She sounds nice.", notes: 1, then: [
          { s: 'junpei', f: 'happy', t: "She is! She's great. She's the best." },
          { n: "He said it too fast, all three things, and went back to his noodles, and for a while he didn't say anything at all, which for Junpei was its own sentence." }
        ] }
      ] },
      { s: 'junpei', f: 'neutral', t: "My old man's having a bad week. That's what she calls it. A bad week. Like it's weather." },
      { s: 'junpei', f: 'neutral', t: "He drinks. Not, like, fun drinks. The kind where you count the cans in the recycling, and then you stop counting, because the counting's worse." },
      { n: "He said it to the noodles. His voice had gone flat and ordinary, with none of the bounce in it, and it was the first time she had heard him talk without performing for somebody, and it sounded younger than she'd expected, and tireder." },
      { s: 'junpei', f: 'neutral', t: "He lost his job a couple years back. Company went under. He was gonna find another one, and then he was gonna find another one next month, and then it just stopped being a thing anybody said out loud." },
      { s: 'junpei', f: 'serious', t: "So when the Chairman goes, hey, free room, free meals, all you gotta do is fight monsters at midnight? Dude. I didn't even read the form. You know what a free room means at my house? One less thing to yell about." },
      { s: 'junpei', f: 'neutral', t: "That's the real reason I'm in the dorm. Not the hero stuff. I mean, also the hero stuff. But." },
      { n: "But. He left it there the way he'd left it on the roof, a word with a door on it, and she understood that she was being shown the door and not the room." },
      { choose: [
        { t: "Thank you for telling me.", notes: 3, then: [
          { n: "He looked at her like nobody had ever said those words to him in that order, and wasn't sure what to do with them now that he had them, and put them away carefully somewhere behind his face." },
          { s: 'junpei', f: 'neutral', t: "...Yeah. Don't, uh. Don't tell Yuka-tan. She'd be nice about it. I couldn't take that." }
        ] },
        { t: "You'd have come anyway. For the hero stuff.", notes: 2, then: [
          { s: 'junpei', f: 'happy', t: "Obviously. Have you seen me? I'm built for it." },
          { s: 'junpei', f: 'neutral', t: "...Maybe. Yeah. I think maybe I would've." }
        ] },
        { t: "You don't have to be funny about it.", notes: 1, then: [
          { s: 'junpei', f: 'serious', t: "Yeah, I kinda do, though." },
          { n: "Not angry. Just a fact, set down on the counter beside the wallet, and he picked his chopsticks back up." }
        ] }
      ] },
      { n: "Outside, the strip had gone blue and loud, the bathhouse sign humming pink over the street. Junpei stopped at the vending machine on the corner and fed it every coin he had left, counting them in with his tongue between his teeth, and it gave him back one can of warm milk tea, the cheapest thing it sold." },
      { s: 'junpei', f: 'happy', t: "Interest. On the loan. Told you I'd pay you back." },
      { n: "She drank all of it on the walk home. He watched her do it out of the corner of his eye the whole way, the way he'd watched her eat the chip in April, like a man watching a ceremony he'd organized go off without a hitch." }
    ] },
    { after: '6/20', title: '5: mvp', place: 'Iwatodai Dorm · Lounge', time: 'Night', scene: [
      { music: 'night' },
      { n: "They got back from the tower at ten past one, which was early, because Solar had called it early, because Junpei had gone left when she'd said right and taken a hit meant for a wall. Yukari had patched him up in the lobby with her mouth pressed into a line that said they would be discussing this later, and Mitsuru had said nothing at all, which was worse. Now the others had gone up, and it was the two of them in the lounge with the lamps low and a bag of frozen edamame balanced on Junpei's shoulder, because the dorm had run out of ice." },
      { n: "It was June, wet and heavy, the rainy season settled over the city like a lid. The windows sweated. Somewhere in the walls a pipe knocked twice and gave up. Fuuka's voice was still in Solar's ears a little, the way a song stays after you switch off the radio. Since she'd come to them she had been their navigator, a soft careful voice in the dark, Solar-san, left, Solar-san, there's one behind you, Solar-san, that was amazing, and every time she'd said it, Solar had felt Junpei hear it." },
      { s: 'junpei', f: 'neutral', t: "You didn't have to pull everybody out. I was fine." },
      { s: 'solar', f: 'serious', t: "You were bleeding." },
      { s: 'junpei', f: 'flustered', t: "A little! A regular amount! People bleed! It's like, eighty percent of what blood's for!" },
      { n: "He shifted the edamame and winced and pretended he hadn't." },
      { s: 'junpei', f: 'serious', t: "I had it. One more floor. If you'd just let me go one more floor." },
      { choose: [
        { t: "I'm not losing anyone over one floor.", notes: 3, then: [
          { n: "He opened his mouth to argue and found there was nothing in it, and closed it again." },
          { s: 'junpei', f: 'neutral', t: "...Yeah. Okay. Yeah." },
          { n: "But his jaw stayed tight, like the word anyone was a size he didn't fit." }
        ] },
        { t: "You went left.", notes: 2, then: [
          { s: 'junpei', f: 'flustered', t: "Because left was where the Shadow was! I was being proactive! That's a leadership quality! I read it in a magazine!" }
        ] },
        { t: "Next time, then.", notes: 1, then: [
          { n: "He looked at her like he couldn't tell if she was humoring him, and then like he could, and that was worse." }
        ] }
      ] },
      { s: 'junpei', f: 'happy', t: "Fuuka's really something, huh. In there. Solar-san this. Solar-san that." },
      { s: 'junpei', f: 'neutral', t: "And now there's people walking around in the Dark Hour who don't turn into coffins, and Mitsuru-senpai goes, bring them here, and who're they gonna come to? You. Obviously. Everything comes to you." },
      { s: 'junpei', f: 'serious', t: "Must be nice. Waking up in the tower like that. No memory, no nothing, and the whole world just goes, oh, there she is. Here's a Persona with a crown on. Here's an armband. Here's a team." },
      { s: 'junpei', f: 'serious', t: "Some of us had to get found behind a magazine rack." },
      { n: "It was out before he could stop it. She saw him hear it in the air and want it back, the way you see somebody drop a glass and still reach for it after it's already hit the floor. Her shoulders came up in the shrug before she'd agreed to it, like they always did, and inside her something small and cold sat down in a chair and folded its hands." },
      { n: "No memory, no nothing. He'd said it like it was a prize." },
      { choose: [
        { t: "It isn't nice. I don't know my own surname.", notes: 3, then: [
          { n: "She said it evenly, the way you'd read out a temperature, and that was what did it, she thought later, the evenness. He went white under the lamp." },
          { s: 'junpei', f: 'sad', t: "...Oh. Oh, man." }
        ] },
        { t: "(Say nothing. Let him hear it.)", notes: 2, then: [
          { n: "She didn't say anything. The pipe knocked in the wall. The edamame dripped onto the cushion. He heard it, all of it, again, in the quiet, in his own voice, and she watched it arrive." },
          { s: 'junpei', f: 'sad', t: "...Yeah. Okay. I heard it." }
        ] },
        { t: "Then lead. See how you like it.", notes: 1, then: [
          { s: 'junpei', f: 'serious', t: "Maybe I would." },
          { n: "They both knew he didn't mean it, and neither of them took it back, and that sat there too." }
        ] }
      ] },
      { s: 'junpei', f: 'sad', t: "That was messed up. I didn't. That came out wrong." },
      { s: 'junpei', f: 'neutral', t: "No. It came out right, is the problem. That's the stuff that's in there. I just usually don't let it out the front door." },
      { n: "He took the edamame off his shoulder and looked at it in his hand, a sweating green brick, like it might have some advice for him. It didn't. He stood up." },
      { s: 'junpei', f: 'neutral', t: "I'm gonna go to bed. Before anything else in there gets out." },
      { choose: [
        { t: "Junpei. Hermes was fast tonight. Before the left.", notes: 3, then: [
          { n: "He stopped on the third stair with his back to her. His hand closed on the rail." },
          { s: 'junpei', f: 'neutral', t: "...Yeah?" },
          { s: 'solar', f: 'neutral', t: "Yeah." },
          { n: "He nodded at the stairs, once, and went up without turning around, and she heard him stop again on the landing, for no reason, for a second, before his door." }
        ] },
        { t: "Goodnight.", notes: 2, then: [
          { s: 'junpei', f: 'neutral', t: "Night, leader." },
          { n: "He'd never made the word sound heavy before. He carried it up the stairs with him like a bag with a broken strap." }
        ] },
        { t: "(Let him go.)", notes: 1, then: [
          { n: "She let him go. His door shut. It was a perfectly ordinary sound and it went on for a long time." }
        ] }
      ] },
      { n: "She sat in the lounge a while longer with the lamp. He'd left the edamame on the stairs, and it thawed there into a small sad puddle, and she thought about magazine racks, and green light, and a boy pressed flat behind the comics with his cap in both hands, and how she'd walked past him that night without even being scared, because she hadn't known yet what there was to be scared of. Maybe that did look like a prize, from behind a rack." },
      { n: "At breakfast he talked loudly about everything except that, the weather, the Giants, a dream he'd had about a vending machine, and she let him. But there were six seats at the table, and he'd taken the one beside her anyway." }
    ] },
    { after: '7/11', title: '6: the riverside', place: 'Iwatodai · Riverside', time: 'Evening', scene: [
      { music: 'sun' },
      { n: "Junpei texted her at four, which he never did, because Junpei didn't text so much as broadcast, and this one was just *river. the field by the bridge. pls*, no caps, no emoji, nothing about chips. She found him on the bottom step of the concrete bank above the ball field with a plastic bag beside him and his cap in his hands, turning it around and around by the brim, the way he'd turned the bat on the roof." },
      { n: "July had come in all at once, the way it did here, the rainy season gone overnight and the heat moving in behind it like it had its own key. The river was low and brown and smelled of warm mud and cut grass. Down on the field a kids' team in mismatched T-shirts was running drills, a dozen eight-year-olds in gloves too big for them, and a man with a whistle was shouting the kind of encouragement that was mostly despair." },
      { s: 'junpei', f: 'neutral', t: "Hey. You came. Sit. I got you, uh." },
      { n: "The bag was consommé chips. Of course it was." },
      { s: 'junpei', f: 'neutral', t: "Okay, so. I've been trying to do this for like three weeks, and every time I start, my mouth goes, hey, what if you said something funny instead, and I go, great idea, mouth. So I'm just gonna go. Don't say anything till I'm done or I'll chicken out." },
      { s: 'junpei', f: 'serious', t: "That thing I said. In the lounge. About the magazine rack, and you waking up and everybody handing you stuff. That was the worst thing I ever said to anybody, and I've said some stuff, dude." },
      { s: 'junpei', f: 'serious', t: "You don't remember your own name, and I was jealous of it. Like. What kind of guy does that." },
      { s: 'junpei', f: 'sad', t: "I'm sorry. That's it. That's the whole thing." },
      { choose: [
        { t: "I know. I knew the next morning.", notes: 3, then: [
          { s: 'junpei', f: 'surprised', t: "...You did?" },
          { s: 'solar', f: 'neutral', t: "You sat next to me at breakfast." },
          { s: 'junpei', f: 'flustered', t: "That was a coincidence. It was the closest seat to the rice." },
          { n: "It hadn't been. It was the farthest seat from the rice. They both knew exactly where the rice had been." }
        ] },
        { t: "Thank you.", notes: 2, then: [
          { n: "He let out a breath that sounded like it had been in there for three weeks, and slumped back against the step above, and put his cap over his face." },
          { s: 'junpei', f: 'neutral', t: "Okay. Okay. Cool. I'm gonna lie here and be relieved for a sec." }
        ] },
        { t: "It's fine. Really.", notes: 1, then: [
          { s: 'junpei', f: 'serious', t: "It's not, though. Don't do that. Don't let me off easy, I'll just do it again." },
          { n: "He was right, which was annoying, and she ate a chip so she wouldn't have to say so." }
        ] }
      ] },
      { n: "A ball got away from the kids. It came hopping up the grass and smacked against the bottom step and lay there at Junpei's feet, and a small boy in a shirt that came down to his knees stood at the edge of the field with his glove held up, waiting, the way kids wait, with his whole body." },
      { n: "Junpei picked it up without thinking. He didn't stand. He just turned his wrist from where he sat, a flick, nothing, and the ball went down the bank and across forty meters of grass in a straight flat line, like it had been drawn there with a ruler, and slapped into the boy's glove so hard he sat down." },
      { s: 'coach', t: "Hey! You! Cap! You play?" },
      { s: 'junpei', f: 'flustered', t: "Uh. Used to!" },
      { s: 'coach', t: "I could use somebody to hit grounders! Sundays! These kids field like they're scared of the ball!" },
      { s: 'junpei', f: 'happy', t: "Maybe some other time!" },
      { n: "The coach waved a hand at him in disgust and went back to his whistle. Junpei sat looking at his own wrist like it belonged to somebody else, somebody he used to know, and hadn't called." },
      { choose: [
        { t: "Why did you stop?", notes: 3, then: [
          { n: "He didn't answer right away. He watched the kids for a while. A girl at second base was picking a dandelion." }
        ] },
        { t: "That was a good throw.", notes: 2, then: [
          { s: 'junpei', f: 'neutral', t: "Yeah. It was, huh." },
          { n: "He said it with no swagger in it at all, which was how she knew he meant it, and then, after a while, without her asking, he kept going." }
        ] },
        { t: "(Eat a chip and watch the kids.)", notes: 1, then: [
          { n: "She ate a chip. A girl at second base was picking a dandelion. After a long time, Junpei started talking, and she had the feeling he'd have gotten there faster if she'd asked." }
        ] }
      ] },
      { s: 'junpei', f: 'neutral', t: "Middle school. I was good. Like, actually good, not Junpei good. Coach had me batting fourth. Cleanup guy. Remember the cleanup guy?" },
      { s: 'junpei', f: 'neutral', t: "And my old man stopped coming to games. Which, fine. And then he came to one. Semifinal. And he came, like. You know. He'd had a bad week." },
      { s: 'junpei', f: 'sad', t: "He was yelling at the ump from the bleachers. Everybody's parents turned around. The other team's parents turned around. And I'm up, two outs, and I can hear him, and I just. Swung at three bad pitches so it'd be over faster." },
      { s: 'junpei', f: 'neutral', t: "Quit the next week. Told everybody baseball was for dorks. Got real funny instead. If you're the class clown, nobody's looking at the bleachers, you know? They're looking at you. And you're making them laugh. So you get to pick what they see." },
      { n: "That last part he said very quietly, to the river, and it went into her and kept going, all the way down to some floor she hadn't known she had, and settled there. You get to pick what they see. Her face did something she didn't authorize. She turned it toward the water until it stopped." },
      { choose: [
        { t: "I think I do that too. The picking.", notes: 3, then: [
          { n: "He turned and looked at her properly, the way he had in the lounge in May when she'd said remembering, like he was checking for the joke and finding a person instead." },
          { s: 'junpei', f: 'neutral', t: "...Yeah. Yeah, I kinda figured. You're way better at it, though. I'm like, a big flashing sign. You're like. Wallpaper. Real nice wallpaper." },
          { s: 'junpei', f: 'happy', t: "That's a compliment. I'm realizing as I say it that it doesn't sound like one." }
        ] },
        { t: "You should hit grounders for them.", notes: 3, then: [
          { s: 'junpei', f: 'surprised', t: "What? No. Come on. They don't want some random guy." },
          { n: "Down on the field, the boy he'd thrown to was still looking up at the bank, his glove pressed against his chest, waiting to see if the ball would come back." },
          { s: 'junpei', f: 'neutral', t: "...Sundays. Maybe. If they're desperate." }
        ] },
        { t: "Your dad missed out.", notes: 1, then: [
          { s: 'junpei', f: 'neutral', t: "Yeah, well. He misses a lot." },
          { n: "He said it lightly. It didn't land lightly. It went into the river and sank." }
        ] }
      ] },
      { n: "They stayed until the kids went home, small figures straggling up the bank in twos and threes with their gloves on their heads like hats, and the light went long and gold across the water and then went out of it altogether. The coach shouted up at them as he dragged his bag of bats past." },
      { s: 'coach', t: "Cap! Sunday! Nine o'clock! Bring your own glove!" },
      { s: 'junpei', f: 'happy', t: "Maybe!" },
      { n: "Then he leaned over to Solar, his shoulder bumping hers, and said, low, so the coach wouldn't hear it, that that was a yes, and not to tell him." }
    ] },
    { after: '8/22', title: '7: it isn\'t for you', place: 'Iwatodai Strip · Wild-Duck Burger', time: 'Evening', scene: [
      { music: 'joy' },
      { n: "Summer vacation had turned the dorm into something closer to a youth hostel run by people who'd never met. There were so many of them now, counting the dog, and the dog counted, and the bathroom schedule Mitsuru had taped to the door had been annotated in four different handwritings, and Junpei had taken to eating dinner out, he said, because he couldn't think with Ken looking at him like that, like a disappointed tax inspector, every time he put his feet on the table." },
      { n: "Wild-Duck smelled like fryer oil and the air conditioning was set to arctic, so the windows had beaded on the outside and the strip beyond them looked like it was underwater. Junpei had ordered two Mystery Burgers and sat across the booth from her with his straw in his mouth and the look of a man about to ask a question he had rehearsed in the mirror." },
      { s: 'junpei', f: 'neutral', t: "Okay. Hypothetically. If a guy. Met a girl." },
      { s: 'junpei', f: 'flustered', t: "At a hospital." },
      { s: 'solar', f: 'surprised', t: "Are you sick?" },
      { s: 'junpei', f: 'flustered', t: "No! The checkup! After the bridge thing, Mitsuru-senpai made everybody go get looked at, remember? And there's this girl. She sits in the courtyard. Same bench. She draws. Like, all day. With these colored pencils down to like, little stubs." },
      { s: 'junpei', f: 'happy', t: "And I go over, real smooth, and I go, hey, nice drawing. And she goes, it isn't for you. And just keeps drawing." },
      { s: 'junpei', f: 'happy', t: "Dude. Dude. Nobody's ever said that to me. People go, ha ha, Junpei, or they go, ugh, Junpei. She just went, it isn't for you. Like I was weather." },
      { s: 'junpei', f: 'neutral', t: "I've been back four times." },
      { choose: [
        { t: "What's her name?", notes: 2, then: [
          { s: 'junpei', f: 'neutral', t: "She hasn't told me yet. I'm working on it. I'm on day four of working on it." },
          { s: 'junpei', f: 'happy', t: "It's a process. You can't rush art. She told me that, actually. Well. She told me to go away and I kinda heard that." }
        ] },
        { t: "Four times?", notes: 3, then: [
          { s: 'junpei', f: 'flustered', t: "I had... follow-up appointments. Self-assigned. My shoulder. It's very complicated, medically." },
          { n: "He rolled the shoulder to show her. It rolled perfectly. He stopped rolling it." }
        ] },
        { t: "Maybe she wants to be left alone.", notes: 1, then: [
          { s: 'junpei', f: 'sad', t: "...Yeah. Maybe." },
          { s: 'junpei', f: 'neutral', t: "But she didn't say leave. She said it isn't for you. That's different. Right? That's different." }
        ] }
      ] },
      { n: "The burgers came. Junpei didn't touch his. He turned the paper wrapper in his fingers and folded the corner over and over until it was a little fan, and it was the most nervous she had ever seen him, including the time in the tower when a Shadow had sat on him." },
      { s: 'junpei', f: 'neutral', t: "She's not like, sick-sick. I don't think. She's just there. She's always there. Like she doesn't have anywhere else to be." },
      { s: 'junpei', f: 'neutral', t: "And she draws these things. Not like flowers. Like, faces with no faces. Doors. The ocean but it's red. It's kinda creepy. It's kinda the best thing I ever saw." },
      { s: 'junpei', f: 'serious', t: "So how do I talk to her? Like for real. You're a girl. You're the smartest girl I know. Teach me." },
      { choose: [
        { t: "Stop being funny at her. Ask about the drawings.", notes: 3, then: [
          { s: 'junpei', f: 'surprised', t: "Stop being... but being funny is my whole thing. If I'm not funny, what am I? I'm just a guy. In a hat. Standing there." },
          { s: 'solar', f: 'neutral', t: "Yes." },
          { n: "He stared at her for a long moment, and she could see it go in, slowly, the way water goes into dry ground, and then he picked up his burger and bit into it like a man who had been given a mission." }
        ] },
        { t: "Bring her something.", notes: 2, then: [
          { s: 'junpei', f: 'happy', t: "Like what? Chips?" },
          { s: 'solar', f: 'neutral', t: "Not chips." },
          { s: 'junpei', f: 'surprised', t: "...Pencils. Her pencils are all stubs. Dude. DUDE. I'm a genius. You're a genius. We're both geniuses." }
        ] },
        { t: "I don't know if I'm the right person to ask.", notes: 1, then: [
          { s: 'junpei', f: 'neutral', t: "You're the only person to ask. Yuka-tan would laugh at me for a year. Akihiko-senpai would tell me to do push-ups." },
          { n: "That was, she had to admit, exactly what Akihiko would say." }
        ] }
      ] },
      { s: 'junpei', f: 'neutral', t: "What about you, though? Like. Is there anybody? Back wherever?" },
      { n: "She didn't know. That was the honest answer and it was the only one she had. But her hand had gone to her other hand under the table while he asked, her thumb to the base of her ring finger, and found nothing there, and stayed anyway, pressing at the empty place like a tongue at a gap, and somewhere under her ribs something turned over in its sleep, warm and sore, and didn't wake up." },
      { choose: [
        { t: "I don't know. Something in me thinks yes.", notes: 3, then: [
          { n: "He didn't laugh. He put the burger down." },
          { s: 'junpei', f: 'serious', t: "Then somebody's out there looking for you. Bet you anything. Bet you a whole bag." },
          { n: "He said it like it was obvious, like it was a law of physics, and she didn't know what to do with how badly she wanted him to be right, so she ate a fry." }
        ] },
        { t: "Not that I remember.", notes: 2, then: [
          { s: 'junpei', f: 'happy', t: "Ha. Good one." },
          { s: 'junpei', f: 'surprised', t: "...Wait. Was that a joke? Was that a memory joke? Are we allowed to do those now?" },
          { s: 'solar', f: 'neutral', t: "Only me." }
        ] },
        { t: "Focus, Junpei. This is about you.", notes: 1, then: [
          { s: 'junpei', f: 'happy', t: "Right. Right. Yes. Me. My favorite subject." },
          { n: "He let her change it. He looked at her hand under the table for a second first, though, and then away." }
        ] }
      ] },
      { n: "He bought the pencils the next morning, a tin of forty-eight with a mountain on the lid, and spent so long choosing it at the stationery counter that the lady offered him a stool. He showed it to Solar in the front hall before he left, both hands, like the consommé in April. Then he tucked it under his arm, and fixed his cap in the dark glass of the door, and fixed it again, and went." }
    ] },
    { after: '9/26', title: '8: field leader', place: 'Iwatodai Dorm · Rooftop', time: 'Night', scene: [
      { music: 'tender' },
      { n: "September had cooled at the edges. The roof still held the day's warmth in its concrete, but the air above it had a thin clean bite in it now, like an apple, and the city lights across the bay were sharper than they'd been all summer, every window a pinprick. Somebody's laundry was still on the line, forgotten, a row of white shirts lifting and settling in the dark like they were breathing." },
      { n: "Junpei was sitting on the edge of the old planter with the bat across his knees. It was the first time she'd seen him up here since the spring. He had a school notebook open on his lap and a pen in his teeth, and when he saw her he shut the notebook fast and sat on it, which was not, as hiding places went, very good." },
      { s: 'junpei', f: 'flustered', t: "Yo! Leader! Nothing. That's nothing. That's math." },
      { s: 'solar', f: 'neutral', t: "You don't do math." },
      { s: 'junpei', f: 'happy', t: "I've grown. People grow. Sit." },
      { n: "She sat. The planter was warm through her skirt. For a while neither of them said anything, which with Junpei usually meant something was coming, the way the air goes still before rain." },
      { s: 'junpei', f: 'neutral', t: "So. People keep showing up for you, huh." },
      { n: "They did. It had been a strange month, a month of messages from numbers she didn't know, of the city full of strangers who didn't turn into coffins, of people looking at her across rooms with a kind of grief she couldn't return. She'd been polite to them. Politeness was the only thing she had that fit. It sat on her like a uniform two sizes wrong." },
      { s: 'junpei', f: 'neutral', t: "They know stuff about you. Like, actual stuff. What you drink. How you laugh when something's not funny. One of them told me you hate when people stand behind you while you're reading. And I was like, she does! She totally does! And then I felt kinda weird that I knew that and she knew that and you didn't know her." },
      { choose: [
        { t: "How are you doing with all of it?", notes: 3, then: [
          { s: 'junpei', f: 'surprised', t: "Me? You're asking how I'm doing? Dude, you're the one with people crossing, like, dimensions to come get you." },
          { s: 'solar', f: 'happy', t: "And you're the one sitting on a notebook." },
          { n: "He laughed, a real one, short, surprised out of him." }
        ] },
        { t: "It's a lot.", notes: 2, then: [
          { s: 'junpei', f: 'neutral', t: "Yeah. Yeah, I bet. It's a lot from over here and I'm just, like, watching." }
        ] },
        { t: "I'm fine.", notes: 1, then: [
          { s: 'junpei', f: 'neutral', t: "Wallpaper." },
          { n: "He said it gently, the word from the river, and she had nothing to say back to it, so she didn't." }
        ] }
      ] },
      { s: 'junpei', f: 'neutral', t: "You know, in April I'd have been so jealous of that I'd have exploded. People crossing worlds for you? Come on. That's the most hero thing that's ever happened to anybody." },
      { s: 'junpei', f: 'serious', t: "But I watched you at dinner last week. When one of the girls from the mall started crying and you didn't know why. You handed her a napkin and you kept your face real still, so she wouldn't feel bad that you didn't know her. And I thought, oh. Oh, that's not a prize. That's like, the worst thing. She's doing the worst thing in front of everybody and being nice about it." },
      { n: "He'd seen that. She had thought nobody had seen that. Her throat did something complicated and she let it." },
      { s: 'junpei', f: 'neutral', t: "Plus, the girl at the hospital drew me. Kinda. She drew a guy in a cap with no face. She said she can't do faces on people who talk that much. So I'm working on talking less. It's going terrible." },
      { s: 'junpei', f: 'happy', t: "She used the pencils, though. All forty-eight. She said the blue was wrong. She used it anyway." },
      { s: 'junpei', f: 'serious', t: "Okay. Real talk. Real, real talk. I'm gonna say a thing and you're gonna let me say it." },
      { s: 'junpei', f: 'serious', t: "You're a good leader. Like, actually. The monorail, you went for the front car before anybody told you to. In June you pulled us out one floor early and you were right, I'd have gotten somebody hurt. At the bridge you put Yuka-tan behind me instead of behind you, and I've been thinking about that for like a month. You trusted me to hold. Nobody ever trusted me to hold anything." },
      { s: 'junpei', f: 'neutral', t: "I was mad about it for like four months. And you just kept being good at it. Didn't rub it in. Didn't even notice I was mad, or you noticed and you let me be. I don't know which one's worse." },
      { choose: [
        { t: "I noticed. I let you be.", notes: 3, then: [
          { s: 'junpei', f: 'flustered', t: "That one. That one's worse. Oh man." },
          { n: "He put his face in his hands and laughed into them, and his ears went red, and he stayed like that for a while, shoulders shaking, and when he came up his eyes were wet and he blamed the wind." }
        ] },
        { t: "You held. Every time.", notes: 3, then: [
          { n: "He looked at her. Then he looked at his hands, at the bat across his knees, like he was checking that they were really his." },
          { s: 'junpei', f: 'neutral', t: "...Yeah. I did, huh." }
        ] },
        { t: "You could lead too, you know.", notes: 1, then: [
          { s: 'junpei', f: 'happy', t: "Nah. Nah, I figured it out. I don't wanna lead. I wanna be the guy the leader doesn't have to look at. 'Cause she knows he's there." },
          { n: "It was the nicest thing anyone had said to her in a month and he said it like it was about himself." }
        ] }
      ] },
      { n: "The shirts on the line lifted and settled. Below them a train went by on the monorail, a bright lit tube full of tired people sliding across the dark, and they both watched it go the whole way, the way you do from roofs." },
      { s: 'junpei', f: 'neutral', t: "When you remember. All of it. You gonna go with them?" },
      { choose: [
        { t: "I don't know.", notes: 3, then: [
          { s: 'junpei', f: 'neutral', t: "Yeah. That's fair. That's the real answer, huh." },
          { s: 'junpei', f: 'neutral', t: "I'd miss you, man. Is that weird? That's not weird. People miss people." }
        ] },
        { t: "I live here.", notes: 2, then: [
          { s: 'junpei', f: 'happy', t: "Yeah you do. Room's got your name on it. Well. It's got nothing on it. But it's yours." },
          { n: "He didn't ask again. She could tell he wanted to, and that he'd decided he didn't get to." }
        ] },
        { t: "Would you want me to?", notes: 2, then: [
          { s: 'junpei', f: 'serious', t: "I want you to want to. Whichever. That's like, my official position." },
          { s: 'junpei', f: 'neutral', t: "...Also I'd miss you. That's my unofficial position. Don't put that in the minutes." }
        ] }
      ] },
      { n: "When she got up to go in, he got up too, and the notebook slid off the planter and fell open on the concrete, and she saw, before he snatched it up, a page of his big careless capitals with a date at the top and HIGHLIGHT REEL underlined twice." },
      { s: 'junpei', f: 'flustered', t: "That's math!" },
      { n: "It wasn't math. She went inside and didn't say anything, and smiled all the way down the stairs, in the dark, where it didn't have to be for anyone." }
    ] },
    { after: '10/27', title: '9: sunday pitcher', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "The dorm had been quieter since the beginning of October. Not silent. Just careful, the way a house is careful when one of its rooms is empty and everybody walks around the door. Shinjiro was still at Tatsumi Memorial, still asleep, and Junpei was there so often now, between visiting hours on the third floor and the courtyard bench downstairs, that the nurses at the front desk had started saying his name before he said it." },
      { n: "He'd come down to the lounge that evening with his jacket already on and his old glove under his arm, a brown leather thing gone soft and dark at the pocket, and asked her if she was busy, and then, before she could answer, asked if she'd come with him somewhere, and then said it was fine if she didn't, and then stood there in the doorway waiting for her to come anyway." },
      { place: 'Iwatodai · Riverside', time: 'Evening' },
      { n: "The park at the end of the river path was small and scrubby, a backstop and a patch of worn dirt and one tall light on a pole that buzzed when it came on. It was the park by his family's building, he told her on the way, the one from the roof in April, the Sunday park. The air had gone properly cold now, October cold, leaves in the gutters and that smell of somebody somewhere burning something, and her breath showed under the light." },
      { s: 'junpei', f: 'neutral', t: "My old man called. Like, him, not my mom. First time in forever." },
      { s: 'junpei', f: 'neutral', t: "He said he's been to some meetings. Like, the meetings. Forty days, he said. He sounded like he'd counted every one with his teeth." },
      { s: 'junpei', f: 'serious', t: "He asked if I wanted to throw. Like before. And I almost said no, 'cause, you know. But Shinjiro-senpai's lying up there, and I keep thinking, what if you don't get a later? What if you think you've got all the time in the world to fix stuff and you just. Don't." },
      { s: 'junpei', f: 'flustered', t: "So I said yes. And then I panicked and asked you. Sorry. You don't have to stay. You can just, like, be on the bench. Be a bench guy." },
      { choose: [
        { t: "I'll be on the bench.", notes: 3, then: [
          { s: 'junpei', f: 'neutral', t: "Okay. Cool. Bench guy. You're bench guy." },
          { n: "He said it twice more under his breath on the way across the dirt, bench guy, bench guy, like a charm against something." }
        ] },
        { t: "What if he's been drinking?", notes: 2, then: [
          { s: 'junpei', f: 'neutral', t: "Then we leave. You and me. That's why you're here. I didn't wanna have to decide that by myself." },
          { n: "It was the most honest thing he'd ever asked of her, and he asked it looking at the backstop." }
        ] },
        { t: "You don't have to do this.", notes: 1, then: [
          { s: 'junpei', f: 'serious', t: "Yeah, I do. I mean, I don't. But I do." },
          { n: "He tugged his cap down, and she shut up, and sat where he pointed." }
        ] }
      ] },
      { n: "His father was already there. He was standing under the light with his hands in the pockets of a windbreaker that had been washed too many times, a thin man going soft in the middle with Junpei's chin and none of Junpei's noise, and he had a glove of his own tucked under one arm, and when he saw them coming he took his hands out of his pockets like he'd been caught at something and didn't know where to put them." },
      { s: 'dad', t: "Junpei." },
      { s: 'junpei', f: 'neutral', t: "Hey, Dad." },
      { s: 'dad', t: "And, ah. This is." },
      { s: 'junpei', f: 'happy', t: "This is my leader. Solar. From the dorm. She's, uh, she's the boss of me, basically." },
      { n: "His father looked at her, and bowed, a little too deep, the way people bow when they're sober and very aware of it, and she bowed back, and sat on the bench by the backstop, which was cold enough to feel through her coat, and became furniture as hard as she could." },
      { n: "They didn't talk much. His father walked out to the bare patch that served as a mound and Junpei stood in the batter's box with the bat he'd brought from the roof, and his father wound up, slowly, his whole body remembering something halfway, and threw." },
      { n: "It was a bad pitch. It went wide and bounced off the backstop and rolled toward the bench, and Solar picked it up and held it, the leather cold and scuffed under her fingers, and both of them looked at her, and she understood that it was her job to throw it back, and that it mattered how." },
      { choose: [
        { t: "(Walk it out to his father and put it in his glove.)", notes: 3, then: [
          { n: "She walked it out to him across the dirt and put it in his glove, and he looked down at it there, and she saw his hand shake once, and then stop, like he'd told it to." },
          { s: 'dad', t: "...Thank you. Out of practice." },
          { s: 'solar', f: 'neutral', t: "He said you used to be pretty good." },
          { n: "His father looked over at Junpei in the box. Junpei was very busy adjusting his grip on the bat." }
        ] },
        { t: "(Throw it to Junpei.)", notes: 2, then: [
          { n: "She threw it to Junpei, underhand, badly, the way she'd thrown on the roof in April, and he caught it barehanded and grinned at her, and then turned and tossed it out to his father, easy, and that was something too." }
        ] },
        { t: "(Toss it back to his father from the bench.)", notes: 1, then: [
          { n: "She tossed it from where she sat. It fell short, rolling to a stop halfway between them, and for a second nobody moved, and then his father walked in to get it, slowly, and Junpei watched him come all the way." }
        ] }
      ] },
      { n: "The second pitch was better. The third was a strike, low and outside, and Junpei let it go by. The fourth he hit, a clean flat crack that went out past the light into the dark over the river, and they all three stood and listened to it land somewhere in the long grass, and nobody went to look for it." },
      { s: 'dad', t: "...Still got it." },
      { s: 'junpei', f: 'neutral', t: "Yeah. You too. Kinda." },
      { n: "They threw for maybe twenty minutes. Then his father checked his watch and said he had a meeting, and said it plainly, like a man who had decided not to be ashamed of where he was going. He shook Junpei's hand. Then he stood there with it, like he didn't know how to give it back, and then he pulled Junpei in by the back of the neck for one second, hard, and let go, and walked off up the river path with his glove under his arm, and didn't look back, and Junpei watched him the whole way to the streetlight at the top." },
      { n: "Then he came and sat down on the cold bench next to her and took his cap off and put it over his face." },
      { s: 'junpei', f: 'neutral', t: "Forty-one days. He'll go home and it'll be forty-one." },
      { s: 'junpei', f: 'sad', t: "It's not fixed. I know it's not fixed. It's like. One pitch. You don't win anything on one pitch." },
      { choose: [
        { t: "You hit it, though.", notes: 3, then: [
          { n: "He laughed into the cap, a cracked wet sound, and didn't take it off his face." },
          { s: 'junpei', f: 'neutral', t: "Yeah. Yeah, I did. Out of the park. Kinda. There's no park. Out of the light." }
        ] },
        { t: "(Sit with him until he takes the cap off.)", notes: 3, then: [
          { n: "She sat. The light buzzed overhead. A dog barked somewhere across the river and another answered it. It was a long time before he took the cap off, and when he did his face was blotchy and he didn't explain it and she didn't need him to." }
        ] },
        { t: "He looked like he's trying.", notes: 2, then: [
          { s: 'junpei', f: 'neutral', t: "Yeah. He did. That's the scary part. If he's trying, I gotta try too." }
        ] }
      ] },
      { s: 'junpei', f: 'neutral', t: "Thanks for being bench guy." },
      { s: 'junpei', f: 'happy', t: "You were a real good bench guy. Very still. Very wallpaper. I'm gonna put that in the highlight reel." },
      { n: "On the walk back he held the glove against his chest with both arms, the way the little boy at the river had held his, and didn't talk at all, and for once neither of them needed him to." }
    ] },
    { after: '11/28', title: '10: director\'s cut', place: 'Iwatodai Dorm · Rooftop', time: 'Night', scene: [
      { music: 'tender' },
      { n: "Something had happened to Junpei in November, and he didn't talk about it." },
      { n: "He'd come home one night later than all of them, and walked straight past the lounge without saying anything, and gone up to his room, and the next morning he'd come down for breakfast and eaten it, all of it, very carefully, like eating was a test he was afraid of failing, and then gone to school. He still made jokes. He made them on time now, no late beat, which was somehow worse. He still sat at the end of the couch nearest the TV. But the TV was mostly off. There was a square of folded drawing paper tucked into the band of his cap that hadn't been there before, and he touched it sometimes without noticing, the way she touched the base of her ring finger." },
      { n: "Nobody asked. The dorm had learned this year how to walk around a closed door." },
      { n: "She found him on the roof. It was the coldest night yet, the first that really meant winter, the concrete hard as iron under her shoes and the stars over the bay small and white and much too many. The laundry line was empty. He was sitting on the planter in his school jacket with the bat across his knees and the notebook beside him, and he didn't startle when she came out. He'd been waiting for her. She could tell from how he'd left her room on the planter." },
      { choose: [
        { t: "(Sit down next to him.)", notes: 3, then: [
          { cg: 'link-junpei-r10' },
          { n: "She sat down next to him on the cold planter. He didn't say anything, and she didn't make him, and after a while he bumped her shoulder with his, once, the way he had in April, a thank-you he still couldn't get his mouth around, so he smiled it at her instead, small and crooked, and she smiled back." },
          { cg: null }
        ] },
        { t: "It's freezing. Come inside.", notes: 2, then: [
          { s: 'junpei', f: 'neutral', t: "In a minute. Sit for a minute. Please." },
          { n: "He'd never said please to her before. She sat." }
        ] },
        { t: "Junpei. What happened?", notes: 1, then: [
          { s: 'junpei', f: 'sad', t: "I can't. Not yet. I'm sorry. I will, I think. Not yet." },
          { n: "He said it so plainly that she was ashamed she'd asked, and sat down, and didn't ask again." }
        ] }
      ] },
      { s: 'junpei', f: 'neutral', t: "I'm not gonna talk about it. I'm sorry. I know everybody's being real cool about not asking. I know you're being the coolest. I just can't put it in words yet. If I put it in words it's like, a thing that happened. Right now it's still just weather." },
      { s: 'junpei', f: 'sad', t: "I didn't get a later. That's all. That's the whole thing I can say." },
      { n: "His voice didn't shake. That was what scared her. Junpei's voice shook when he talked about the Giants. It had gone somewhere very far down and come back flat and steady, like a stone skipped all the way across a river and sinking on the far side, out of sight." },
      { s: 'junpei', f: 'neutral', t: "So I wanted to give you this. Before I chicken out. Or before. You know. Whatever happens with you." },
      { n: "He handed her the notebook. It was the one from the roof in September, an ordinary school notebook with a blue cover gone soft at the corners, and on the front, in his big careless capitals, it said HIGHLIGHT REEL, and under that, smaller, DIRECTOR'S CUT, and under that, smaller still, (J. IORI LOOKS COOLER IN THIS VERSION)." },
      { choose: [
        { t: "(Open it right now.)", notes: 3, then: [
          { n: "She opened it right there on the roof, by the light from the stairwell door, and he made a strangled noise and put his cap over his face, and didn't stop her." }
        ] },
        { t: "Are you sure?", notes: 2, then: [
          { s: 'junpei', f: 'neutral', t: "I'm sure. Open it. No, don't. Yes. Open it. I'm gonna look at the sky." },
          { n: "He looked at the sky. She opened it." }
        ] },
        { t: "Why are you giving me this?", notes: 2, then: [
          { s: 'junpei', f: 'serious', t: "'Cause I said I would. In May. I said I'd do the remembering." },
          { s: 'junpei', f: 'neutral', t: "I keep my promises now. I'm trying to. It's a new thing. Open it." }
        ] }
      ] },
      { n: "*April 6. Convenience store. A girl walked out of the tower like she owned it and found me behind the magazines. I was not scared. I was strategizing.*" },
      { n: "*April 22. Bought her consommé. She ate one chip. Sacred.*" },
      { n: "*April 30. Roof. She threw like a little kid. Home run. Somebody find that ball.*" },
      { n: "*May 9. GHOST TRAIN. I called it. She stopped it. Fine. She stopped it. I CALLED it.*" },
      { n: "*May 12. Shoguns are a batting order. She's a genius. Don't tell her, she'll get weird.*" },
      { n: "*June. I said a bad thing. Not writing it. — Okay, writing it. It happened, it goes in. That's the rule. Director's cut has the bad takes too.*" },
      { n: "There were dozens. The ramen. The river. The kid's glove. The tin of forty-eight. Dinner, the night one of the girls from the mall cried, *she handed her a napkin, and kept her face still, and I think that's the bravest thing I've seen anybody do, and I've seen Akihiko-senpai punch a Shadow in the eye.* The park, and the light, and *bench guy was MVP.* Every page in his capitals, pressed so hard they'd come through to the back, so that the whole year was there twice, once the right way round and once in mirror writing on the other side of the paper." },
      { n: "Her eyes stung, and it was the cold, and it wasn't." },
      { s: 'junpei', f: 'neutral', t: "You forget anything, it's in there. Anything. Even if you go home. Especially if you go home. Take it with you. Read it on the train or whatever. Read it when you're old." },
      { s: 'junpei', f: 'serious', t: "And if you stay, I'm still gonna keep writing in it. You don't get out of the highlight reel that easy." },
      { choose: [
        { t: "I'll read it every time I forget something.", notes: 3, then: [
          { s: 'junpei', f: 'neutral', t: "Good. That's what it's for." },
          { s: 'junpei', f: 'happy', t: "I mean, you're gonna forget way less stuff than me. But still." }
        ] },
        { t: "You're in it more than I am.", notes: 2, then: [
          { s: 'junpei', f: 'happy', t: "Yeah, that's the director's cut, baby. Star of the show. You're like, a strong supporting role." },
          { n: "It wasn't true. She had read it. Every page was about her, and every page had him in the corner of the frame, watching her do something, and writing it down." }
        ] },
        { t: "I'll bring it back. Whatever happens.", notes: 2, then: [
          { s: 'junpei', f: 'neutral', t: "Don't. Don't bring it back. That's the whole point. It's yours. It's the one thing that's yours that nobody had to cross anything to bring you." },
          { n: "She held it to her chest and didn't argue." }
        ] }
      ] },
      { n: "He stood up and took the bat in both hands, and then patted his jacket pocket and took out something round and gray and fuzzy and very old, and held it up between his thumb and finger in the light from the door." },
      { s: 'junpei', f: 'happy', t: "Found it. The April ball. It was in the gutter the whole time. Some hero, huh, leaving a ball in a gutter for seven months." },
      { s: 'junpei', f: 'neutral', t: "One pitch. Then we go in. Your pitcher's arm is a lifetime appointment, you said yes, you can't take it back." },
      { choose: [
        { t: "(Pitch.)", notes: 3, then: [
          { n: "She walked to the other end of the roof with the notebook under her arm and the ball cold in her hand, and turned, and threw it underhand, badly, exactly the way she'd thrown it in April, and he looked at it coming like it was a gift." }
        ] },
        { t: "(Pitch, properly this time.)", notes: 3, then: [
          { n: "She threw it properly, overhand, the way she'd watched his father throw in the park, and it went straight and true and surprised them both, and he looked at it coming like it was a gift." }
        ] },
        { t: "You pitch. I'll hit.", notes: 1, then: [
          { s: 'junpei', f: 'surprised', t: "What? No. No, it's gotta be this way. That's the rule. That's the whole... okay. Okay, fine. No. You pitch." },
          { n: "She pitched. He looked at it coming like it was a gift." }
        ] }
      ] },
      { n: "He swung. It was a good swing, a full one, the follow-through he'd been working on since spring, and the ball went off the side of the building into the dark, and they both stood very still and listened." },
      { n: "No car alarm. Nothing. Just the wind off the bay and the hum of the city and, very far off, a train." },
      { s: 'junpei', f: 'happy', t: "Home run." },
      { n: "He laughed, and the laugh went wrong in the middle, the way a bat cracks, and he stood there with it on the cold roof with his cap in his hand and the folded paper in the band, and she didn't do anything about it, and he let her not. Then he wiped his face on his sleeve and put the cap back on, and fixed it, and fixed it again." },
      { s: 'junpei', f: 'neutral', t: "Okay. Okay. Inside. I got chips. The good ones. I've been saving them since April. For safekeeping." }
    ] }
  ],
  afterMax: [
    { place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
      { music: 'dorm' },
      { n: "By winter the lounge had stopped being big enough for anyone. There were people on the couch and people on the arms of the couch and people on the floor with their backs against the couch, people from the dorm and people from much farther away than the dorm, eating mandarins out of a box somebody's aunt had apparently mailed from a prefecture none of them had heard of, and the heater was turned up so high that the windows had gone white, and Junpei was in his corner of the couch, nearest the TV, defending it." },
      { n: "There was a ballgame on. Not a live one. A tape, a famous one, from before any of them had been born, which Junpei had bought from the bargain bin at the electronics shop and was now showing to anyone who would sit still, narrating it like a nature documentary. One of the new boys had made the mistake of saying that baseball was slow. Junpei had taken it personally. They had been arguing for forty minutes. They were both, Solar thought, having the time of their lives." },
      { s: 'junpei', f: 'serious', t: "Slow. SLOW. Watch this. Watch the infield. You see that? That's a decision. Every pitch is like nine guys making a decision at once. It's chess, man. It's chess with dirt." },
      { n: "He saw her in the doorway and moved his legs off the cushion beside him, without looking, without stopping talking, the way you'd move a bag off a seat on a train for someone you'd been expecting. She sat. He passed her the mandarin he'd been peeling, and started another one, and didn't miss a pitch." },
      { n: "There was a second notebook on the coffee table now, under the mandarin peel. Blue cover. VOLUME TWO, it said. Under that, smaller, (STILL COOL)." },
      { choose: [
        { t: "(Pick it up and read the last page.)", notes: 3, then: [
          { n: "*December. Lounge's too small. Nobody minds. She came down in the middle of the fifth inning and sat in her spot. She has a spot now. Didn't notice when that happened. Highlight.*" },
          { n: "She put it back exactly where it had been, under the peel. He'd seen her do it. He kept narrating the game a little louder than before." }
        ] },
        { t: "Who's winning?", notes: 2, then: [
          { s: 'junpei', f: 'happy', t: "Everybody. Nobody. It's from 1985, it's been over for twenty-four years. That's not the point. Sit down, you're blocking the infield." },
          { n: "She was already sitting down. He hadn't noticed. He was having a wonderful time." }
        ] },
        { t: "Baseball is a little slow.", notes: 1, then: [
          { s: 'junpei', f: 'surprised', t: "Et tu, leader?" },
          { n: "He clutched his chest and slid down the cushions until he was mostly horizontal, exactly as he had in April, and the new boy cheered, and Junpei threw a mandarin at him from the floor without looking and hit him square in the chest." }
        ] }
      ] },
      { n: "At some point Yukari came in and told them all that some people had homework, which was true, and nobody moved, which was also true. At some point Ken fell asleep sitting up against Koromaru, and Koromaru let him. At some point Junpei stopped narrating, and the tape ran on in the warm room with nobody watching it, the crowd in it roaring for a play that had happened a long time ago, to people who didn't know yet how it would end." },
      { n: "She looked around the lounge, at all of them, at the mandarin peel and the white windows and the second notebook, and Junpei caught her looking, and didn't say anything, and wrote something down." }
    ] },
    { place: 'Iwatodai · Riverside', time: 'Daytime', scene: [
      { music: 'sun' },
      { n: "Winter turned the ball field into a sheet of frozen mud with frost on it like sugar, and the kids' team practiced anyway, because the coach didn't believe in weather. They came in puffy jackets and mittens and two hats, and threw like penguins, and the coach shouted, and next to him on the bottom of the bank, with a fungo bat over his shoulder and a whistle of his own he'd bought specially, was Junpei." },
      { n: "He'd been coming every Sunday since July. The kids called him Cap. The small boy from the summer, the one who'd sat down when the ball hit his glove, was taller now, a whole centimeter, he'd told Solar, and played second base, and followed Junpei around between drills like a duckling." },
      { s: 'junpei', f: 'happy', t: "Leader! You came! Everybody, this is my pitcher. She has the worst arm in Iwatodai and a lifetime contract. Show some respect." },
      { n: "Twelve small faces in twelve hats turned and looked at her with total, unblinking skepticism. She was given a glove that smelled of somebody's dog, and put on the mound, and told by an eight-year-old that she was holding the ball wrong, which she was." },
      { choose: [
        { t: "(Pitch to the kids, badly, with total commitment.)", notes: 3, then: [
          { n: "She pitched badly, with total commitment, for half an hour, and the kids hit everything she threw and ran the bases screaming in their two hats, and the boy at second base hit one off her so hard it went into the river, and Junpei lifted him up by the armpits and spun him around and the whole team piled on, and she stood on the frozen mound with the dog-smelling glove and her hands numb, laughing so hard she couldn't breathe." }
        ] },
        { t: "(Ask the eight-year-old to show you the grip.)", notes: 2, then: [
          { n: "The eight-year-old showed her, very seriously, with his mitten off and his small cold fingers arranging hers on the seams, and when she got it right he nodded once, like a man closing a deal, and went back to second base without a word." },
          { s: 'junpei', f: 'happy', t: "Kid's a better coach than me. I'm getting fired." }
        ] },
        { t: "(Watch from the bank instead.)", notes: 1, then: [
          { n: "She sat on the bank with her hands in her sleeves and watched. Junpei kept looking back up at her between pitches, like a kid checking his parent was still in the stands. She waved, every time. It seemed to matter." }
        ] }
      ] },
      { n: "Afterward the kids went home in a straggling line with their gloves on their heads like hats, the way they had in the summer, and the coach shook Junpei's hand and said next week, and Junpei said next week like it was a promise, and the field was empty and white and the river went by under its skin of ice, very slowly, almost not moving at all." },
      { s: 'junpei', f: 'neutral', t: "It's almost over, huh. The year." },
      { n: "It wasn't a question, so she didn't answer it. He didn't know what was coming at the end of it, not really, none of them did, and all of them did. He picked up a ball from the frost and turned it in his fingers." },
      { s: 'junpei', f: 'neutral', t: "Whatever it is. Whatever you do. You did good, leader. I've got it all written down. Two volumes. That's, like, a whole series." },
      { s: 'junpei', f: 'happy', t: "Now pitch me one. One more. Then hot chocolate. I'm buying. I'm actually buying, I've got exact change, I checked." },
      { n: "He'd checked. She pitched him one more. It went into the river, and they stood and listened to it go through the ice, and neither of them went to look for it." }
    ] }
  ]
});
