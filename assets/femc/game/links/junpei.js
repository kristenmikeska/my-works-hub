/* Junpei Iori · I The Magician. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'junpei', name: 'Junpei Iori', short: 'Junpei', arcana: 'Magician', numeral: 'I', from: 'Persona 3',
  kind: 'sees',
  romance: null,
  starts: '4/22',
  home: { area: 'Iwatodai Dorm', spot: 'Lounge', slot: 'evening', days: [0, 2, 4, 6],
          hint: 'Evenings on Sunday, Tuesday, Thursday and Saturday, on the lounge couch nearest the TV.' },
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
    { todo: 'Rank 4: to be written.' },
    { todo: 'Rank 5: to be written.' },
    { todo: 'Rank 6: to be written.' },
    { todo: 'Rank 7: to be written.' },
    { todo: 'Rank 8: to be written.' },
    { todo: 'Rank 9: to be written.' },
    { todo: 'Rank 10: to be written.' }
  ]
});
