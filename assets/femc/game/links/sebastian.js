/* Sebastian · 0 Fool. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Visitor (Stardew Valley), first wave (6/8): the boy in the black hoodie under an awning in the green rain. Friendship only.
   The ending he runs from: staying in Pelican Town forever, or leaving it (the ticket to Zuzu City in his pocket).
   Abigail and Sam come through on the 7/7 full moon looking for him (rank 3). Rank 5 is Kat's matchmaking: a game night
   that's secretly a date for Sebastian and Abigail, which sets off a Runners flashback (a duo queue); fragment runners-hoodie.
   Cast-only speakers: none (abigail and sam have portraits).
   Link-local flags (2026-10-21 depth pass), read back later in this file and in data/living-visitors.js:
     seb-dragon-friend / seb-dragon-slain (rank 3: what Solarion does to the dragon) → rank 7's text adventure, hangout 4,
       afterMax "the rogue", the late-night call.
     seb-sam-pact (rank 3: the eyebrows across the table) → rank 5 (why Sam's plan comes to her).
     seb-three-basements (rank 4: "none of them are mine") → rank 9.
     seb-turn-around (rank 6: "turn around and ride it back") → rank 9 (she only quotes him if he said it to her).
     seb-sister (rank 10: "his sister, the annoying kind") → afterMax "frogs in winter".
   Living world (texts after ranks 2/3/4/6/8/9, holidays 10/12 and 1/11, a rainy visit and a call): data/living-visitors.js.
   afterMax: four scenes after rank 10 (he stays until the doors open on 1/30). */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'sebastian', name: 'Sebastian', short: 'Sebastian', arcana: 'Fool', numeral: '0', from: 'Stardew Valley',
  kind: 'visitor',
  romance: null,
  starts: '6/10',
  home: { area: 'mall', spot: 'Game Panic', slot: 'evening', days: [2, 4, 6],
          hint: 'Evenings on Tuesdays, Thursdays and Saturdays, under the Game Panic awning at Paulownia Mall. Especially if it is raining.' },
  approach: "A tall guy in a black hoodie is leaning under the Game Panic awning watching the rain with the air of someone who would rather be in a basement.",
  cast: {},
  invite: {
    ask: [
      "hey. you free?",
      "its raining. awning?",
      "got a new campaign idea. want to hear it",
      "game panic. the cabinet in the back is free for once",
      "found a frog. unrelated. you around?",
      "arcade? i have like 40 coins and nobody to lose them to"
    ],
    ok: ["cool. see you soon", "ok. ill be under the awning", "nice. ill save you the good stool"],
    no: ["no worries", "ok. another time", "thats fine. the rain will still be here"]
  },
  hangouts: [
    [
      { n: "Rain again, steady and warm, the awning ticking like a clock. Sebastian was leaning on the wall with his hood half up, watching it come down the way other people watched television." },
      { s: 'sebastian', f: 'neutral', t: "Rain smells different here. Like metal. And fried food. And bus." },
      { choose: [
        { t: "What does it smell like at home?", notes: 3, then: [
          { s: 'sebastian', f: 'neutral', t: "Mud. Pine trees. The lake. The mountain, if the wind's coming down off it." },
          { s: 'sebastian', f: 'surprised', t: "...I didn't know I knew that until just now." }
        ] },
        { t: "Bus is a smell?", notes: 2, then: [
          { s: 'sebastian', f: 'neutral', t: "Bus is the strongest smell. Bus is winning." }
        ] },
        { t: "I hadn't noticed.", notes: 1, then: [
          { s: 'sebastian', f: 'neutral', t: "Yeah. You live here. You stop noticing." }
        ] }
      ] },
      { n: "They stood there until the gutters stopped running. Across the street a takoyaki stall pulled its shutter halfway up, testing, and the smell came over in a warm wave of batter and sauce, and Sebastian said \"bus is losing,\" very quietly, like a sports commentator, and Solar laughed out loud under the awning by herself, because he didn't." }
    ],
    [
      { n: "The rain had stopped and Sebastian wasn't under the awning. He was crouched by the gutter at the edge of the car park with his elbows on his knees, very still, the way you'd crouch to look into a rock pool." },
      { s: 'sebastian', f: 'neutral', t: "Don't step there. There's one by your shoe." },
      { n: "There was. A tiny brown frog no bigger than a coin, sitting in a puddle like it had paid for it." },
      { choose: [
        { t: "(Crouch down and look.)", notes: 3, then: [
          { n: "She crouched beside him. The frog looked at both of them and did absolutely nothing, magnificently, for almost a full minute, and then went plop into the drain, and Sebastian let out a breath like they'd watched a rocket launch." }
        ] },
        { t: "How many so far?", notes: 2, then: [
          { s: 'sebastian', f: 'neutral', t: "Five. Maybe four. One of them might be the same guy twice. He moves around a lot." }
        ] },
        { t: "Do frogs bite?", notes: 1, then: [
          { s: 'sebastian', f: 'neutral', t: "No. They're the most polite animal there is. Unlike geese." }
        ] }
      ] },
      { s: 'sebastian', f: 'neutral', t: "...You're the first person who hasn't asked me why." },
      { n: "It hadn't occurred to her that there was anything to ask. That, apparently, had been the right answer." }
    ],
    [
      { n: "He had a notebook open on his knee under the awning and was filling a page with small cramped handwriting and a drawing of something with too many teeth." },
      { s: 'sebastian', f: 'neutral', t: "I need a name for this guy. He's a lich. Undead wizard. Very old, very evil. Everything I come up with sounds like a metal band." },
      { choose: [
        { t: "Gerald.", notes: 3, then: [
          { s: 'sebastian', f: 'surprised', t: "...Gerald." },
          { s: 'sebastian', f: 'happy', t: "A lich called Gerald. That's horrifying. That's the most horrifying thing I've ever heard. He's Gerald now." }
        ] },
        { t: "Something with a lot of Xs.", notes: 1, then: [
          { s: 'sebastian', f: 'neutral', t: "Xaxxoth. Yeah. See, that's a metal band. Thanks, though." }
        ] },
        { t: "Lord Frog.", notes: 2, then: [
          { s: 'sebastian', f: 'serious', t: "No. Frogs are never the villain. That's a rule." }
        ] }
      ] },
      { n: "He wrote something down. Then he drew a tiny cardigan on the thing with too many teeth, and looked at it, and seemed, for a second, extremely pleased with himself." }
    ],
    // A one-room session under the awning.
    [
      { n: "No rain, for once, and he was under the awning anyway, with three dice lined up on top of the ticket machine like chess pieces and his notebook open on his forearm." },
      { s: 'sebastian', f: 'neutral', t: "One room. Ten minutes. I wrote it on the bus. Solarion only. You in?" },
      { ifFlag: 'seb-dragon-friend', then: [
        { s: 'sebastian', f: 'neutral', t: "\"Solarion and her dragon stand at the door of an abandoned arcade. The dragon is too big to fit through the door. It is sulking about this.\"" }
      ], else: [
        { ifFlag: 'seb-dragon-slain', then: [
          { s: 'sebastian', f: 'neutral', t: "\"Solarion stands at the door of an abandoned arcade. Inside, something is waiting. It is the dragon's younger sister. She has heard what happened. She is very upset.\"" }
        ], else: [
          { s: 'sebastian', f: 'neutral', t: "\"Solarion stands at the door of an abandoned arcade. Inside, a goblin is guarding the last working cabinet. He has goblin energy.\"" }
        ] }
      ] },
      { choose: [
        { t: "(Roll. Let the dice decide.)", notes: 2, then: [
          { n: "She rolled on the ticket machine. A two. Sebastian looked at it, and at her, with the horror of a man watching a friend trip on stage." },
          { s: 'sebastian', f: 'surprised', t: "...You rolled a two. You never roll low. Okay. Okay. Solarion trips over the threshold. Everyone in the arcade sees. It's the most humiliating moment of her life. She gets up anyway. That's still a hero thing. I'm deciding that." }
        ] },
        { t: "Solarion asks what it wants.", notes: 3, then: [
          { s: 'sebastian', f: 'neutral', t: "...What it wants." },
          { n: "He looked down at his notebook. There was nothing written there for that. He thought about it, under the awning, for long enough that a bus came and went, and then he said, very quietly, in the narrator voice, that it wanted someone to play the cabinet with. That it had been alone in there with the high score for a long time." },
          { s: 'sebastian', f: 'neutral', t: "That's not what I wrote. That's just what it wants. You keep doing that to my monsters." }
        ] },
        { t: "(Get Solarion to sneak past it.)", notes: 2, then: [
          { s: 'sebastian', f: 'neutral', t: "Roll stealth. ...Eighteen. Of course. She sneaks past. She gets to the cabinet. It's a frog game. It's always a frog game." }
        ] }
      ] },
      { n: "The session took fourteen minutes, not ten, and when it was over he wrote her result in his cramped handwriting in the notebook, under SOLARION, beside a long column of other results, all dated, all from this summer, and she realized he'd kept every one." }
    ],
    // The crane game with his friends, or without them.
    [
      { ifAfter: '8/9', then: [
        { n: "Abigail had decided there was a sword in the crane machine. There was not a sword in the crane machine. There was a plush sword, purple, wedged at the back behind a pile of cartoon bears, and Abigail had put eleven hundred yen into it and was on her twelfth try, and Sebastian was standing behind her with his hood up holding her bag and saying nothing in a way that was very loudly saying something." },
        { s: 'abigail', f: 'serious', t: "Don't. Don't say it. I can hear you not saying it." },
        { s: 'sebastian', f: 'neutral', t: "I didn't say anything." },
        { s: 'abigail', f: 'happy', t: "You were thinking it at me. Solar, tell him to stop thinking at me." },
        { choose: [
          { t: "(Take the controls. Steady hand.)", notes: 3, stat: { proficiency: 1 }, then: [
            { n: "Solar put in a coin. She moved the claw once, then a hair to the left, then waited, and dropped it, and it went down past the bears and closed on the sword's hilt and came up shaking, and the whole arcade seemed to hold its breath, and the sword dropped into the chute." },
            { s: 'abigail', f: 'surprised', t: "SOLAR. You got my SWORD." },
            { n: "Abigail held it over her head with both hands like a knight in a painting. Sebastian looked at Solar over the top of it and mouthed *thank you*, with enormous feeling, because it meant he could go home." }
          ] },
          { t: "(Tell Sebastian to try. He's been watching it for an hour.)", notes: 2, then: [
            { s: 'sebastian', f: 'neutral', t: "...Fine. One try. If I get it I'm never hearing the end of it. If I don't I'm never hearing the end of it." },
            { n: "He didn't get it. He got a bear instead, a small brown one, by accident, and Abigail took it off him and named it after him on the spot and refused to give it back, and he pretended to be annoyed about it all the way to the station." }
          ] }
        ] }
      ], else: [
        { ifAfter: '7/8', then: [
          { n: "Abigail was here, which was the strange thing, after a month of only hearing about her, purple-haired and real, standing at the crane machine with Sam and arguing with it, and Sebastian was a step behind them both, hood up, watching her and not the machine." },
          { s: 'abigail', f: 'happy', t: "So what's he like here? Seb. Be honest. Does he talk to anybody? Does he eat? Does he still say \"I'm going to go\" and then stay for four hours?" },
          { choose: [
            { t: "He talks about you. Not a lot. But he does.", notes: 3, then: [
              { s: 'abigail', f: 'surprised', t: "...He does?" },
              { n: "Abigail turned round and looked at Sebastian, who had heard every word and was now looking at the ceiling of the arcade as though it contained the answer to something, with his ears going red under the hood." }
            ] },
            { t: "He saves frogs.", notes: 2, then: [
              { s: 'abigail', f: 'happy', t: "Oh, he's FINE, then. If he's saving frogs he's fine. That's the whole test." }
            ] }
          ] }
        ], else: [
          { n: "He was standing in front of a crane machine in the back of Game Panic with a handful of hundred-yen coins, not putting any in, just looking at it, at a purple plush something wedged at the back behind a heap of bears." },
          { s: 'sebastian', f: 'neutral', t: "My friend Abby would've already spent a thousand yen on this. She'd think that was a sword. She'd be wrong, and she'd get it anyway." },
          { choose: [
            { t: "Tell me about her.", notes: 3, then: [
              { s: 'sebastian', f: 'neutral', t: "...She wants to go in the mines and find a sword. She plays the flute. Badly. On purpose, I think. She dyes her hair purple and her dad hates it." },
              { s: 'sebastian', f: 'neutral', t: "That's. Yeah. That's Abby. I don't know why I told you all that." },
              { n: "He knew exactly why. Solar did too. Neither of them said so, and he put one coin into the machine, just one, for her, like lighting a candle somewhere, and missed." }
            ] },
            { t: "(Win it for him. For when she gets here.)", notes: 2, then: [
              { n: "Solar won it on her third try. He held the purple sword for a while like it might break. Then he put it in the front pocket of his hoodie, where it stuck out, all the way back to the canal." }
            ] }
          ] }
        ] }
      ] }
    ]
  ],
  ranks: [
    { after: '6/10', title: '1: frog', place: 'Paulownia Mall · Game Panic', time: 'Evening', scene: [
      { music: 'city' },
      { n: "It was pouring. Warm, heavy June rain that came straight down like somebody had turned on a faucet over the whole of Port Island, and Solar ducked under the Game Panic awning with her bag over her head and her socks already soaked through, because the forecast had said cloudy and she had, for once in her life, believed someone." },
      { n: "There was already somebody under it." },
      { n: "A tall guy in a black hoodie with the hood half up, shaggy black hair falling over one eye, leaning against the wall beside the ticket machine with his hands in his front pocket and the expression of someone who would rather be in a basement, any basement, than here. He glanced at her when she came in. He glanced away." },
      { n: "Two nights ago, in the green, walking home with the others, Solar had seen a boy in a black hoodie under an awning on the Strip, sitting in a puddle with his back against a shutter, looking up at the green sky like it had personally disappointed him. She'd been too tired to stop. She thought it might be the same boy. She thought he might have been sitting in that puddle a while." },
      { n: "They stood there for a few minutes not talking, which suited both of them. Then he crouched down, suddenly, and picked something up off the wet pavement at the edge of the awning with enormous care, both hands cupped, the way you'd pick up a dropped egg." },
      { n: "A frog. A small, extremely surprised green frog, which had apparently been sitting in a puddle at the edge of the awning, directly in the path of anybody running in out of the rain." },
      { s: 'sebastian', f: 'neutral', t: "...He was going to get stepped on." },
      { choose: [
        { t: "He's cute.", notes: 3, then: [
          { s: 'sebastian', f: 'surprised', t: "...Yeah. He is." },
          { n: "He said it like it surprised him that someone else agreed. Like he was used to people thinking frogs were a strange thing to have an opinion about, and had decided long ago to have the opinion anyway, quietly, by himself." }
        ] },
        { t: "Where are you going to put him?", notes: 2, then: [
          { s: 'sebastian', f: 'neutral', t: "There's a canal behind the mall. Frogs like canals. I think. I'm assuming. I'm not from here." }
        ] },
        { t: "You're going to carry a frog around a mall?", notes: 1, then: [
          { s: 'sebastian', f: 'neutral', t: "I'm going to carry a frog to a canal. The mall is incidental." }
        ] }
      ] },
      { s: 'sebastian', f: 'neutral', t: "I'm Sebastian. I'm, uh. Not from here. You probably figured that." },
      { register: 'sebastian' },
      { s: 'sebastian', f: 'neutral', t: "I was in my room. Basement. In Pelican Town. Writing code. Then the monitor went green and the whole house went quiet and I was sitting in a puddle in a street I've never seen, surrounded by coffins, in the rain." },
      { s: 'sebastian', f: 'neutral', t: "A blonde lady in a white coat came out of nowhere and told me I had a concussion. I told her I'd had worse. She didn't believe me. She was right not to." },
      { s: 'sebastian', f: 'neutral', t: "And there was a girl. Kid, maybe. Hard to tell, she had this coat on that was way too big, collar up. She was standing on the corner like she was waiting for a bus that wasn't coming. She pointed down the street at this place and said, \"There's somewhere with machines. You'll like it.\" Then she said sorry. Weird thing to say. Then she wasn't there." },
      { s: 'sebastian', f: 'neutral', t: "So I walked here. And it was closed, because everything was a coffin. So I stood under the awning. And then it was morning, and it opened, and it was an arcade." },
      { s: 'sebastian', f: 'happy', t: "She wasn't wrong. I do like it." },
      { ifMet: ['wren'], then: [
        { n: "Solar thought of the bench at the station. Of a girl who looked at trains the way you'd look at a bus that wasn't coming. She almost said so. The frog shifted in his hands, and she didn't." }
      ] },
      { n: "He said all of it flatly, like reading out the steps of a bad day, the way you'd read a bus timetable, and somewhere around coffins Solar started laughing before she could stop herself. He looked at her, startled. She put a hand over her mouth." },
      { choose: [
        { t: "Sorry. That's the most normal story I've heard all month.", notes: 3, then: [
          { s: 'sebastian', f: 'neutral', t: "...Yeah. I've been getting that impression. This place is weird." },
          { s: 'sebastian', f: 'happy', t: "Weird's fine, though. Pelican Town's weird. There's a wizard. Nobody talks about it." }
        ] },
        { t: "Pelican Town?", notes: 2, then: [
          { s: 'sebastian', f: 'neutral', t: "Small town. Very small. Everybody knows everybody. I stay in my room mostly, so I don't have to know them back." }
        ] },
        { t: "Are you okay?", notes: 2, then: [
          { s: 'sebastian', f: 'neutral', t: "...Nobody's asked me that. Since. Mostly people ask if I'm lost." },
          { s: 'sebastian', f: 'neutral', t: "I'm fine. I'm a lot of things. Fine's one of them." }
        ] }
      ] },
      { n: "When the rain thinned out they walked to the canal behind the mall together, and he crouched on the concrete edge and let the frog go with enormous ceremony, and the frog sat on the edge for a long time looking at the water as if reconsidering its whole life, and then went in with a small decisive plop, and Sebastian stood up and put his hands back in the pocket of his hoodie." },
      { s: 'sebastian', f: 'neutral', t: "...You didn't tell me your name." },
      { s: 'solar', f: 'neutral', t: "Next time." },
      { n: "He looked at her sideways from under the hood. Something happened to the corner of his mouth, small and lopsided, like a door being opened an inch to see who was outside." },
      { s: 'sebastian', f: 'neutral', t: "Cool. Next time." }
    ] },

    { after: '6/23', title: '2: solarion', place: 'Paulownia Mall · Game Panic', time: 'Evening', scene: [
      { music: 'city' },
      { n: "Rain again. He was under the awning again. He nodded at her when she came in, a small, quiet nod, like someone acknowledging a regular at a bar, which, Solar supposed, she was now." },
      { n: "He had a cheap folding phone in one hand and was turning it over and over, opening it and closing it, the way some people play with a lighter." },
      { s: 'sebastian', f: 'neutral', t: "A redhead in a really expensive coat gave me this. She said I'm faint. And that I should have somebody's number in it." },
      { s: 'sebastian', f: 'neutral', t: "I told her I've been faint my whole life. Socially. She didn't laugh. I think she might be the scariest person I've ever met. I'd follow her into a war." },
      { s: 'sebastian', f: 'neutral', t: "So. Um. You're supposed to be the somebody. Apparently. If you want. You never told me your name." },
      { s: 'solar', f: 'neutral', t: "Solar." },
      { n: "He went very still. Not dramatic. Just stopped, the phone half open in his hand, like a program that's hit an error and is waiting to be told what to do." },
      { s: 'sebastian', f: 'surprised', t: "...Solar. Like. Solar." },
      { s: 'sebastian', f: 'neutral', t: "Okay, this is going to sound insane. Back home, I run a game. A tabletop thing, with my friends. Dice, character sheets, a lot of yelling. It's called Solarion Chronicles." },
      { s: 'sebastian', f: 'neutral', t: "Solarion's the main character. I wrote her three years ago. A wanderer from another world who wakes up somewhere she doesn't know and has to work out who she is from the outside in." },
      { choose: [
        { t: "That's a little on the nose.", notes: 2, then: [
          { s: 'sebastian', f: 'serious', t: "It's SO on the nose. It's offensively on the nose. I'm offended. I wrote it and I'm offended." }
        ] },
        { t: "What happens to her?", notes: 3, then: [
          { s: 'sebastian', f: 'neutral', t: "She saves everyone. Mostly by being too stubborn to leave. That's her whole thing." },
          { s: 'sebastian', f: 'neutral', t: "I never wrote the ending. My friends keep asking. I keep saying it's not ready. It's not that it isn't ready. It's that I don't know if she goes home." },
          { n: "He looked at her sideways, frowning, like she was a bug in a program he couldn't track down. Solar looked at the rain. She had the strangest feeling she'd just been told her own future by a stranger with a frog habit, and she didn't like it, and she didn't want him to stop." }
        ] },
        { t: "Is she any good?", notes: 2, then: [
          { s: 'sebastian', f: 'happy', t: "She's the best character I've ever written. Don't tell Abby. Abby thinks it's her rogue." }
        ] }
      ] },
      { s: 'sebastian', f: 'neutral', t: "You want to play? Sometime? I've got the rules in my head. I could run a session. Just us. Or with whoever." },
      { n: "He said it fast, like he'd talked himself into it on the walk over and wanted to get it out before he could talk himself back." },
      { choose: [
        { t: "Only if I can play Solarion.", notes: 3, then: [
          { s: 'sebastian', f: 'neutral', t: "Obviously you're playing Solarion. Who else would play Solarion." },
          { s: 'sebastian', f: 'happy', t: "...Cool. Cool. Okay. I'll write something." }
        ] },
        { t: "I'd love to.", notes: 2, then: [
          { s: 'sebastian', f: 'happy', t: "...Cool. Okay. Yeah. I'll write something." },
          { n: "He looked away immediately, at the rain, but she could see him smiling at it." }
        ] },
        { t: "I don't know the rules.", notes: 1, then: [
          { s: 'sebastian', f: 'neutral', t: "Nobody knows the rules. That's the rule. You roll a die and argue." }
        ] }
      ] },
      { n: "He put her number in the folding phone with one finger, slowly, getting it wrong twice, and then held the phone up to show her, and the contact said only SOLAR, in capitals, and under it, in the little field for notes, where he must have typed it while she was looking at the rain: (like the game)." }
    ] },

    { after: '7/11', title: '3: game night', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
      { music: 'dorm' },
      { n: "They came through on the full moon, he told her afterward. Abigail and Sam. In the green, on the Port Island side, in the middle of a street of coffins, looking for him." },
      { n: "Abigail had told the girl in the porter's coat his name, and the girl had pointed straight at the Game Panic awning, as if she'd known exactly where he'd be. Sam had asked her if she was lost. She'd said she was always a little lost. Sam had said, \"Same, dude,\" and she'd laughed, and said sorry, and gone." },
      { n: "Sebastian had been under the awning when they found him. He said he'd heard Abigail yelling SEB from two streets away. He said it in his flattest voice, which was how Solar knew it had been one of the best moments of his life." },
      { n: "So game night happened in the dorm lounge, because Sebastian said the arcade was too loud and the canal was too wet and Mitsuru, informed of the plan, had looked at the three of them for a long time and then said the coffee table could be used for games, as long as nobody set fire to anything, in a voice that implied she had specific people in mind." },
      { s: 'abigail', f: 'happy', t: "So YOU'RE Solar. Seb won't shut up about you. Well. He said your name twice. For Seb that's a speech." },
      { s: 'sam', f: 'happy', t: "Dude, he made you a character sheet. He doesn't make anyone character sheets. He made mine on a napkin." },
      { s: 'sebastian', f: 'neutral', t: "You spilled soda on the first one." },
      { s: 'sam', f: 'neutral', t: "That was a sacrifice to the dice gods." },
      { n: "Abigail had purple hair and a lot of opinions and a laugh that went up at the end like she'd surprised herself with it. Sam had blond hair that stood straight up and a skateboard he wouldn't let go of indoors. And Sebastian, at the head of the coffee table with his notebook and a box of dice, was a different person. Not louder. Just there, all the way, the way a light is there when someone finally finds the switch." },
      { n: "Junpei had wandered in for a snack and been conscripted. Sebastian made him a goblin." },
      { s: 'junpei', f: 'serious', t: "Why am I a goblin?" },
      { s: 'sebastian', f: 'neutral', t: "You have goblin energy." },
      { n: "They played for three hours. Solar didn't know the rules and found she didn't need to. Solarion, Sebastian narrated, in a voice like an old radio drama, stood at the mouth of the cave and heard something enormous breathing in the dark." },
      { choose: [
        { t: "(Roll to attack the dragon.)", notes: 2, flag: 'seb-dragon-slain', then: [
          { n: "She rolled a twenty. Sam screamed. Abigail screamed. Junpei screamed because everyone else was screaming. Sebastian sat back in his chair and stared at the die like it had betrayed him personally." },
          { s: 'sebastian', f: 'surprised', t: "...Solarion slays the dragon. In one hit. On her first session. That's never happened. That's never happened in three years." }
        ] },
        { t: "(Roll to befriend the dragon.)", notes: 3, flag: 'seb-dragon-friend', then: [
          { n: "She rolled a nineteen. There was a long pause. Sebastian looked at his notes, and then at her, and then at his notes, and then very slowly crossed something out." },
          { s: 'sebastian', f: 'neutral', t: "...The dragon becomes Solarion's companion. It's been alone in that cave a long time. It didn't know anybody could just ask." },
          { s: 'abigail', f: 'surprised', t: "SEB. You've never let ANYONE befriend the dragon." },
          { s: 'sebastian', f: 'neutral', t: "Nobody's ever tried." }
        ] }
      ] },
      { n: "But it wasn't the dragon Solar remembered later. It was the way, every time Abigail's rogue did something reckless, which was constantly, Sebastian's eyes went to her before they went to the dice. Every time. And the way Abigail, when Sebastian did the old lich's voice, low and slow and awful, watched his mouth instead of her character sheet, and pressed her knuckles against her own smile so he wouldn't see it." },
      { n: "And the way Sam, who saw both of these things, caught Solar's eye across the coffee table over a bag of chips and raised his eyebrows all the way up, and mouthed, with enormous weary affection, every single time." },
      { choose: [
        { t: "(Raise your eyebrows back at Sam.)", notes: 3, flag: 'seb-sam-pact', then: [
          { n: "Solar raised her eyebrows back. Sam nearly choked on a chip. And an alliance was formed, there, over the coffee table, wordless and complete, between two people who had known each other for three hours and had already agreed on the single most important thing in the room." }
        ] },
        { t: "(Pretend you didn't see.)", notes: 1, then: [
          { n: "Solar looked at her dice. It seemed polite. Sam looked faintly betrayed, and ate another chip about it." }
        ] }
      ] },
      { n: "They played until one in the morning. When Abigail and Sam left for the little Kirijo flat by the station they'd been given, still arguing about the rules for grappling, Sebastian stayed on the floor of the lounge picking up dice from under the couch, slowly, one at a time." },
      { s: 'sebastian', f: 'neutral', t: "...They've never liked a new player before. Ever. You're the first." },
      { s: 'sebastian', f: 'neutral', t: "I'm glad they came. I didn't think I'd be glad. I left without telling them anything, and they came anyway. That's. Yeah." }
    ] },

    { after: '7/25', title: '4: the basement', place: 'Iwatodai · Riverside', time: 'Evening', scene: [
      { music: 'night' },
      { n: "He'd asked to walk. Not the arcade. Somewhere quiet. They ended up by the river in the evening with the cicadas going in the trees and the water slow and brown and the bridge lights coming on one by one downstream, and he walked with his hands in his front pocket and his hood down, which Solar had learned to read as a sign that he had something to say and hadn't decided whether to say it." },
      { s: 'sebastian', f: 'neutral', t: "Back home I live in my mom's basement. She's a carpenter. She built the whole house. Built half the town, actually." },
      { s: 'sebastian', f: 'neutral', t: "My stepdad's a scientist. He's fine. He's just fine. My half-sister Maru's a genius. She builds robots. Everyone loves her. She deserves it, she's great. That's the annoying part." },
      { s: 'sebastian', f: 'neutral', t: "And I'm the guy in the basement. The one nobody quite knows what to do with. They'll be talking at dinner and laugh at something and then they'll go, oh, Sebastian, did you want to say something? And I didn't." },
      { n: "He said it without self-pity. Just a fact, laid down like a card on a table. Solar knew the shape of it. Not the basement. The shape. A family that loved you in a language you didn't speak, and a place set for you at a table you sat at like a guest." },
      { choose: [
        { t: "I've never had a house that felt like mine either.", notes: 3, flag: 'seb-three-basements', then: [
          { s: 'sebastian', f: 'neutral', t: "Yeah? Where's yours?" },
          { s: 'solar', f: 'neutral', t: "I don't know. I think I have more than one. I think none of them are mine." },
          { n: "She hadn't meant to say it. It came out like it had been waiting at the back of her mouth for somebody slow and quiet enough to say it to. He didn't say anything for a while. He kicked a pebble into the river and watched it go." },
          { s: 'sebastian', f: 'neutral', t: "...That's worse than a basement. That's like three basements." }
        ] },
        { t: "Do they know you feel like that?", notes: 2, then: [
          { s: 'sebastian', f: 'neutral', t: "No. I don't tell people things. It's kind of my whole deal." }
        ] },
        { t: "Maybe they'd like it if you said something.", notes: 1, then: [
          { s: 'sebastian', f: 'neutral', t: "Maybe. Or maybe it'd be weird for everybody and then I'd have to live with it. In the basement. Forever." }
        ] }
      ] },
      { s: 'sebastian', f: 'neutral', t: "I keep saying I'm going to leave. Get on my bike and go to the city. Zuzu City. Get a real job, a real apartment, somewhere nobody knows me as Robin's weird kid." },
      { n: "He reached into the back pocket of his jeans and took out a piece of paper, folded small and soft at the creases, and unfolded it and held it out, and Solar took it. A bus ticket. One way. Pelican Town to Zuzu City. The date had been circled in pen." },
      { s: 'sebastian', f: 'neutral', t: "I bought it. For real this time. I was packing. My stuff was in a duffel bag on the floor. And I was sitting there at three in the morning looking at the bag, thinking, if I go, that's it, that's who I am, the guy who left. And if I stay, that's it, that's who I am, the guy in the basement. Forever." },
      { s: 'sebastian', f: 'sad', t: "And I just wanted there to be a third thing. That's all. And then the monitor went green." },
      { s: 'sebastian', f: 'neutral', t: "So I fell through a hole in the universe and ended up in a city anyway. And I'm not even happy about it. I'm under an awning." },
      { choose: [
        { t: "Maybe this is the third thing.", notes: 3, then: [
          { s: 'sebastian', f: 'neutral', t: "...Huh." },
          { s: 'sebastian', f: 'neutral', t: "A dorm with a goblin in it and a bunch of people who shoot themselves in the head at midnight. That's my third thing." },
          { s: 'sebastian', f: 'happy', t: "...Honestly? Could be worse." }
        ] },
        { t: "(Hand the ticket back without saying anything.)", notes: 2, then: [
          { n: "She handed it back. He folded it up along its old creases without looking at it, and put it away, and his hand stayed in the pocket over it, the way you'd keep a hand over something you were afraid of losing and afraid of keeping." }
        ] },
        { t: "You could still go. When you get back.", notes: 2, then: [
          { s: 'sebastian', f: 'neutral', t: "Yeah. I could. That's the problem. I always could." }
        ] }
      ] },
      { n: "He laughed at himself, quietly, and they walked to the end of the riverside path where it went under the bridge, and stood there in the cool concrete smell of it, and he didn't say anything else, and neither did she, and it was the most comfortable silence Solar had sat in since April." }
    ] },

    { after: '8/8', title: '5: two player', place: 'Paulownia Mall · Game Panic', time: 'Evening', scene: [
      { music: 'city' },
      { n: "The plan was Sam's. Sam had texted Solar at two in the morning two days after the train came across Moonlight Bridge, a long message with no punctuation and a lot of feeling, and the feeling was this: Abigail had been scared, really scared, since the bridge. She'd watched the woman with the viola case get on. She'd said to Sam, at the flat, in the dark, \"what if nobody notices if it's us,\" and Sam had said he'd notice, dude, obviously, and she'd said, \"you're not the one I meant.\"" },
      { ifFlag: 'seb-sam-pact', then: [
        { n: "He'd texted her, he wrote, because of the eyebrows. Across the coffee table, at game night. That had been a pact. Pacts had obligations. Pacts had plans." }
      ], else: [
        { n: "He'd gotten her number off Sebastian's phone while Sebastian was in the bathroom, he wrote, because there was nobody else in two worlds who'd seen both of them in one room and might actually help, and he was sorry, and he wasn't sorry." }
      ] },
      { n: "And Sebastian, Sam wrote, was never going to say anything, ever, in his life, unless somebody locked him in a room with her and a game he couldn't leave. so. we lock him in a room. figuratively. with a game." },
      { n: "So it was game night. A game night at Game Panic, at the two-player cabinet in the back that Sebastian loved, the one with the knights and the long dungeon you could only finish in co-op. Four of them were meant to come. Two of them, at the last minute, by an extraordinary coincidence, could not." },
      { s: 'sam', f: 'happy', t: "Oh no! My skateboard! It's broken! I have to go fix my skateboard. Now. Urgently. Solar's going to help me. With the board. Bye!" },
      { s: 'abigail', f: 'surprised', t: "Sam. Sam, your skateboard is under your arm. It's fine. It's right there." },
      { s: 'sam', f: 'serious', t: "It's broken on the INSIDE, Abby." },
      { n: "Sebastian looked at Sam, and then at Solar, and then at the cabinet, and then at Abigail, and his face did a slow, flat, complete, damning sequence of comprehension that Solar would think about for days." },
      { s: 'sebastian', f: 'neutral', t: "...Wow." },
      { choose: [
        { t: "Have fun, you two. (Leave before he can argue.)", notes: 3, then: [
          { n: "Solar left before he could argue. She went three rows over and stood behind the claw machine with Sam, where they could see the back cabinet through the glass case full of plush, and Sam whispered \"we are SO good at this,\" and Solar, who was not sure that they were, did not disagree." }
        ] },
        { t: "The cabinet's free. It's never free. It'd be a waste.", notes: 2, then: [
          { s: 'sebastian', f: 'neutral', t: "It's always free. Nobody else can beat the third boss." },
          { s: 'abigail', f: 'happy', t: "Then let's beat it. Come on, Seb. You're player one. I'll carry you." }
        ] }
      ] },
      { n: "They played. Solar watched from behind the claw machine, through a pane of glass and a pile of cartoon bears. At first they sat a careful foot apart on the double stool, like two people at a bus stop. Abigail did all the talking. Sebastian did all the dying. Then, somewhere around the second boss, Abigail grabbed his sleeve to point at something, and didn't let go, and Sebastian stopped dying." },
      { n: "They were good together. That was the thing Solar hadn't expected. She'd expected them to be sweet. They were good. He covered her when she ran in too fast. She went in too fast so he'd have something to cover. Neither of them seemed to know they were doing it." },
      { n: "And Solar, watching, felt the arcade go very quiet around her, and very dark." },
      { bg: 'haechan-bedroom' },
      { dark: true },
      { music: 'mystery' },
      { n: "A room that wasn't hers. Low light. The glow of a screen on her face and a blanket over her knees and the sleeves of a hoodie pulled down over both her hands, a big one, too big, the cuffs swallowing her fingers, so she had to push them back to reach the keys. It smelled of somebody else. It wasn't hers. She was wearing it anyway." },
      { n: "A headset. A match loading. A voice in her ear, not in the room, saying something she couldn't catch the words of, only the tone, flat and dry and close, and her own voice answering it, and laughing. Two little figures on the screen running into a fight together, one in front and one behind, and the one behind always exactly where the one in front would need her." },
      { n: "Queue again? Somebody had asked that. Somebody always asked that. It was three in the morning and they had class and she'd said yes. She always said yes. It hadn't felt like a game. It had felt like the only conversation she was ever allowed to have." },
      { fragment: 'runners-hoodie' },
      { bg: null },
      { dark: false },
      { music: 'city' },
      { n: "The claw machine came back. Its music was playing, a tinny looping waltz. Sam was looking at her." },
      { s: 'sam', f: 'serious', t: "Dude. You okay? You went somewhere." },
      { n: "Solar realized she had pulled the sleeves of her blazer down over her hands, both of them, all the way to the fingertips. She pushed them back up. It didn't feel like the right thing to do. It felt like taking something off." },
      { s: 'solar', f: 'neutral', t: "I'm fine. Look." },
      { n: "Through the glass, the screen at the back cabinet had gone gold. They'd beaten the third boss. Abigail was on her feet with both fists up, yelling, and Sebastian was still sitting on the stool, looking up at her, and his hood was down, and his face was doing something Solar had never seen it do, open all the way, unguarded, like a window in summer." },
      { n: "Abigail stopped yelling. She looked down at him. Neither of them said anything. Then she sat back down on the stool, close, not a foot apart now, nothing apart, and put her head on his shoulder, and said something Solar couldn't hear, and Sebastian said something back, very short, and Abigail laughed into his hoodie, and hit him on the arm, and didn't move her head." },
      { s: 'sam', f: 'happy', t: "FINALLY. Three YEARS. Three years of watching that. I'm going to cry. I'm actually going to cry in an arcade." },
      { choose: [
        { t: "(Fist bump Sam.)", notes: 3, then: [
          { n: "She held out her fist. Sam bumped it so hard it hurt, and then pretended to fall over backwards into the claw machine from the force of it, and the man at the prize counter told them both to leave, and they left, giggling, two co-conspirators running out into the warm August night, and behind them through the glass the back cabinet kept glowing gold." }
        ] },
        { t: "We should leave them alone.", notes: 2, then: [
          { s: 'sam', f: 'neutral', t: "Yeah. Yeah, you're right. Let's go get takoyaki and not talk about our feelings like normal people." }
        ] }
      ] },
      { n: "Sebastian texted her at midnight. It took him a while. you set us up. Then, eleven minutes later: thanks. Then, four minutes after that, as if it had taken all four minutes to type: she asked me what took me so long. i said i was waiting for a third thing. she said she was the third thing. shes right. dont tell sam i said any of this." }
    ] },

    { after: '8/22', title: '6: motorcycle', place: 'Port Island · Harbor', time: 'Evening', scene: [
      { music: 'night' },
      { n: "He'd found a motorcycle. Or he'd found the bones of one, rusting behind a repair shop near the harbor, and had spent two weeks of evenings and most of Abigail's patience bringing it back to life with parts he bought from the old man who ran the shop, who had at first refused to sell him anything and had ended up, by the second week, handing him tools without being asked and calling him kid." },
      { s: 'sebastian', f: 'neutral', t: "Get on. I've got a spare helmet. It's terrible. It's the only one." },
      { choose: [
        { t: "Is this safe?", notes: 1, then: [
          { s: 'sebastian', f: 'neutral', t: "No. Get on." }
        ] },
        { t: "(Get on.)", notes: 3, then: [
          { n: "She got on. She put her arms around his middle, because there was nothing else to hold, and he went very still for a second, the way he did whenever anyone touched him, and then he kicked the engine over and it caught with a cough and a roar and the whole harbor seemed to jump." }
        ] },
        { t: "Shouldn't Abigail be on the back of this?", notes: 2, then: [
          { s: 'sebastian', f: 'neutral', t: "She's been on it twice. She screamed the whole way. In a good way. She said it's your turn. She said you'd get it." },
          { n: "Solar didn't know what that meant. She got on anyway." }
        ] }
      ] },
      { n: "They rode out along the coast road past the harbor, the city lights on one side and the black water on the other, and the wind came at them hard and wet and smelling of salt and engine, and the road unspooled in the headlight, and Solar held on and stopped thinking, for the first time in weeks, about anything at all. Not the green. Not the train. Not the voice in a headset she couldn't place. Only the road, and the cold, and the hum through her ribs." },
      { n: "He pulled over at the end of the coast road, where it ran out at a guardrail over the water and there was nothing past it but the dark and the lights of the far shore. He cut the engine. The silence came down like a lid. Somewhere a bell buoy was ringing out in the bay, slow, off and on." },
      { s: 'sebastian', f: 'neutral', t: "...This is the thing I wanted. Back home. Just. Riding until the road ends. With somebody. And then not having to decide anything." },
      { s: 'sebastian', f: 'neutral', t: "In Pelican Town the road ends at the bus stop. Every time. You ride and ride and then there's the bus stop, and the ticket in your pocket." },
      { choose: [
        { t: "So you got it. The road ending.", notes: 2, then: [
          { s: 'sebastian', f: 'neutral', t: "Yeah. I guess I did. In the wrong universe. Figures." }
        ] },
        { t: "(Stay holding on, even with the engine off.)", notes: 3, then: [
          { n: "She didn't let go. The engine was off and they weren't moving and she didn't let go, and he noticed, and didn't say anything, and after a while he put one hand over hers on his stomach, briefly, the way you'd check your wallet was still in your pocket, and took it away again." },
          { s: 'sebastian', f: 'neutral', t: "...You're a good passenger. You don't talk. You lean the right way." }
        ] },
        { t: "What if the road doesn't have to end anywhere?", notes: 3, flag: 'seb-turn-around', then: [
          { s: 'sebastian', f: 'neutral', t: "Every road ends somewhere." },
          { s: 'solar', f: 'neutral', t: "Then you turn around and ride it back." },
          { n: "He looked over his shoulder at her, in the dark, for a long time." },
          { s: 'sebastian', f: 'neutral', t: "...Huh. I never thought about turning around. I thought turning around was losing." }
        ] }
      ] },
      { s: 'sebastian', f: 'neutral', t: "Abby wants to go to the mines when we get back. The deep ones. She says she's going to find a sword. She's been saying it since she was eleven." },
      { s: 'sebastian', f: 'happy', t: "I told her I'd go. I never go. I always say she's being stupid. I told her I'd go." },
      { n: "They rode back the long way, slowly, and when he dropped her at the dorm he didn't say goodnight, he just lifted one hand off the handlebar and held it up, flat, a sort of wave, a sort of salute, and rode off down the hill, and she stood on the step and listened to the engine all the way to the bottom and around the corner and out of hearing, and found that she was smiling at an empty street." }
    ] },

    { after: '9/12', title: '7: text adventure', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
      { music: 'dorm' },
      { n: "He'd been coding on Junpei's old laptop for two weeks. He wouldn't say what. He'd shoo everyone away from the screen with one hand while typing with the other, and Junpei, who had loaned him the laptop under the impression that he'd get it back, had stopped asking." },
      { n: "Then one evening he set the laptop down in front of her on the lounge table and stepped back, hands in his pocket, hood up, all the way up, so only the end of his nose showed." },
      { s: 'sebastian', f: 'neutral', t: "It's not done. It's probably buggy. Don't judge me. Don't look at me while you play it. I'm going to be over here. Not looking." },
      { n: "The screen was black, with a single line of green text and a blinking cursor." },
      { n: "SOLARION CHRONICLES: THE CITY OF COFFINS. You are SOLAR. You wake up in a tower full of monsters with no memory and a gun that doesn't shoot bullets. You live in a dorm with very strange people. It is raining. What do you do?" },
      { choose: [
        { t: "(Type: PICK UP FROG.)", notes: 3, then: [
          { n: "YOU PICK UP THE FROG. The frog looks at you with great respect. A tall boy in a hoodie, standing nearby, decides you are trustworthy. This is very rare. He does not tell you this. +1 FRIEND." },
          { s: 'sebastian', f: 'flustered', t: "...Okay, that last line was a joke. Mostly. Keep going." }
        ] },
        { t: "(Type: TALK TO BOY IN HOODIE.)", notes: 3, then: [
          { n: "THE BOY IN THE HOODIE DOES NOT LIKE TALKING. He talks to you anyway. This surprises him more than it surprises you." },
          { s: 'sebastian', f: 'flustered', t: "...I should not have written that one. Close the laptop. Just close it." }
        ] },
        { t: "(Type: GO HOME.)", notes: 2, then: [
          { n: "WHICH ONE? There is a long pause. The cursor blinks. YOU DO NOT HAVE ENOUGH INFORMATION TO GO HOME YET. TRY TALKING TO PEOPLE." },
          { n: "Solar sat back in her chair. From across the room, Sebastian, who had said he wasn't looking, said, very quietly, \"Yeah. That one was harder to write.\"" }
        ] }
      ] },
      { ifFlag: 'seb-dragon-friend', then: [
        { n: "Somewhere in the second room a DRAGON started following her. The text said it had been alone in a cave a long time and now it wasn't, and every few rooms afterward, no matter what she typed, a line came up at the bottom of the screen that said THE DRAGON IS STILL HERE." }
      ] },
      { ifFlag: 'seb-dragon-slain', then: [
        { n: "On the wall of the dorm in the game there was a DRAGON'S TOOTH. If you looked at it the text said YOU DID THIS IN ONE HIT. ON YOUR FIRST SESSION. SAM IS STILL TALKING ABOUT IT. SAM WILL NOT STOP TALKING ABOUT IT." }
      ] },
      { n: "She played the whole thing. It took an hour. It was full of small jokes about the dorm, a goblin named JUNPEI who stole all the pudding, a terrifying RED QUEEN who was secretly very kind and kept a list of everyone's birthdays, a SILVER BOXER who would only answer questions about protein. There was a shrine with a FOX GIRL who gave you a fortune every time you passed, and a DOCTOR on a roof who confiscated your coffee." },
      { n: "And there was a girl in a big coat on a bench at the station who said, if you talked to her, LOOK AT ALL THE TRAINS, and nothing else, every time, no matter what you typed." },
      { n: "Solar stopped on that one. She typed ASK HER NAME. The girl said LOOK AT ALL THE TRAINS. She typed SIT DOWN. The girl said LOOK AT ALL THE TRAINS. She looked across the room at Sebastian." },
      { s: 'sebastian', f: 'neutral', t: "I didn't know what to write for her. I only met her once. The night I got here. She seemed like she was waiting for something and didn't want to say what." },
      { s: 'sebastian', f: 'neutral', t: "Abby says she's seen her too. On the night they came through. Sam says she looked sad. I don't know. I couldn't think of a single thing she'd say." },
      { n: "The ending was a train station. You stood on the platform and a train came in, and the text said YOU CAN GET ON. YOU CAN STAY. THE GOBLIN HAS STOLEN YOUR TICKET. WHAT DO YOU DO? And whatever you typed, the screen said THAT'S NOT IN THE GAME YET. CHECK BACK LATER. And then, under it, smaller, (sorry. i don't know the ending yet. neither do you.)" },
      { n: "When she looked up, he was sitting on the floor against the couch with his hood up, not looking, very obviously looking." },
      { choose: [
        { t: "It's the best thing anyone's ever made me.", notes: 3, then: [
          { s: 'sebastian', f: 'flustered', t: "It's a text adventure on a laptop with a sticky N key." },
          { s: 'solar', f: 'neutral', t: "Still." },
          { s: 'sebastian', f: 'neutral', t: "...Yeah. Okay. Still. I'll take still." }
        ] },
        { t: "You should write the ending.", notes: 2, then: [
          { s: 'sebastian', f: 'neutral', t: "I will. When I know it. I'm not going to make it up. That's the one rule." }
        ] }
      ] },
      { n: "He saved the file to a disk and gave it to her in a paper sleeve he'd drawn a frog on, and she put it in her desk drawer, and she didn't own a computer that could read it, and it didn't matter in the slightest." }
    ] },

    { after: '9/26', title: '8: moonlight jellies', place: 'Port Island · Pier', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "There was one night every year in Pelican Town, he told her, when the moonlight jellies came. The whole town went down to the beach in the dark and stood at the edge of the water and waited, and the jellies came up out of the deep on their way somewhere else, glowing, hundreds of them, and passed by, and went on." },
      { s: 'sebastian', f: 'neutral', t: "I've gone every year. I never told anyone I like it. I just stand at the back. Behind everybody. Where nobody can see my face." },
      { n: "They were at the end of the Port Island pier, late September, the water black and the air still warm with the last of the summer. Abigail was there, in a borrowed jacket, and Sam, with his skateboard, and Solar, and Sebastian, at the back, leaning on a bollard, the way he'd said. Abigail had found a page in an old almanac at Bookworms that said the jellies sometimes went through this bay too, in a different world, on a different night. Sebastian had said that was stupid. He'd come anyway." },
      { n: "For a long time there was nothing. Then something. A pale blue glow, deep down, like a lamp at the bottom of a well." },
      { n: "Then a dozen. Then a hundred, rising up out of the dark water around the pier, soft blue lights and soft green ones, pulsing slowly, like slow breathing, like hearts, drifting past the pilings on their way out to sea, and the water was lit from underneath, and the four of them were lit from underneath, and everything was blue and silent and enormous." },
      { s: 'abigail', f: 'surprised', t: "Seb. Seb. They're here. They actually came. They followed us." },
      { s: 'sebastian', f: 'surprised', t: "...No way. No way." },
      { n: "Abigail had run to the very end of the pier, to the edge, to the front. Sam had gone with her. And Sebastian was still at the back, by the bollard, with his hood up, looking at the jellies over everyone's heads the way he had every year of his life, from behind." },
      { choose: [
        { t: "Go stand with her.", notes: 3, then: [
          { s: 'sebastian', f: 'neutral', t: "...I always stand at the back." },
          { s: 'solar', f: 'neutral', t: "I know. Go stand at the front." },
          { n: "He looked at her for a long moment in the blue light. Then he pushed his hood down. Then he walked, very slowly, the whole length of the pier, past Sam, who stepped aside without being asked, to the very end, and stood next to Abigail at the edge of the lit water. She didn't look at him. She just reached over without looking and took his hand, like she'd been holding a place for it." }
        ] },
        { t: "(Go and stand at the back with him.)", notes: 2, then: [
          { n: "She went and stood at the back with him. He glanced at her, and something in his shoulders let go. After a minute he said, very quietly, \"Come on,\" and walked up the pier, and she went with him, and he stood next to Abigail at the front, and Solar stood next to Sam, a step behind, which was, she thought, exactly the right place." }
        ] },
        { t: "Maybe they came to see you.", notes: 2, then: [
          { s: 'sebastian', f: 'neutral', t: "...That's the dumbest, nicest thing anyone's ever said to me." },
          { n: "He went up to the front anyway. Slowly. As if the dumbest, nicest thing had been a push between the shoulder blades." }
        ] }
      ] },
      { n: "The jellies kept coming. Blue and green, lighting up the underside of the pier, lighting up the four faces at the end of it, and they didn't talk. Sam had gone quiet, which Solar had never seen. Abigail was leaning on Sebastian's arm. And Sebastian, at the front, for the first time in his life, was crying, a little, silently, with the light on his face, and not hiding it, because there was nobody behind him to hide it from." },
      { n: "Solar stood a step back and watched them, and thought about the jellies, going on their way somewhere, passing through, and how they didn't stop for anyone and everyone came down to the water anyway, every year, just to stand there while they went." },
      { n: "When the last one had gone out into the bay and the water was black again, Sebastian walked back down the pier to where she was, and stopped, and didn't say anything for a while." },
      { s: 'sebastian', f: 'neutral', t: "I'd sit at the front with you. Here. I wouldn't mind. I just want you to know that. You don't have to do anything with it." },
      { choose: [
        { t: "I know.", notes: 3, then: [
          { s: 'sebastian', f: 'neutral', t: "...Yeah. You always know. It's kind of annoying." }
        ] },
        { t: "You sat at the front with her. That's the one that counts.", notes: 3, then: [
          { s: 'sebastian', f: 'neutral', t: "...Yeah. It is." },
          { s: 'sebastian', f: 'happy', t: "You're still Solarion's best friend, though. That's canon. I wrote it down." }
        ] }
      ] }
    ] },

    { after: '10/24', title: '9: wanting to stay', place: 'Paulownia Mall · Game Panic', time: 'Evening', scene: [
      { music: 'night' },
      { n: "October rain, cold this time, the first rain of the year that meant it. The awning. The arcade lights flickering on the wet pavement like a broken television. Sebastian was already there, soaked, without an umbrella, the way he always was. He didn't say hello. He started talking before she'd stopped walking." },
      { s: 'sebastian', f: 'neutral', t: "Elizabeth came by the flat. The lady with the book. She said the doors open at the end of January. Everybody who came through can go home." },
      { s: 'sebastian', f: 'sad', t: "I spent my whole life wanting to leave home. And now I get to go back, and the only thing I can think is, I don't want to leave here." },
      { s: 'sebastian', f: 'sad', t: "That's the worst possible thing that could happen to a person like me. Wanting to stay somewhere." },
      { choose: [
        { t: "Why is that the worst thing?", notes: 3, then: [
          { s: 'sebastian', f: 'neutral', t: "Because then you have to admit you need something. Somebody. A place. And they can leave. Or you can. And then you're just a guy standing at a bus stop with a ticket." },
          { ifFlag: 'seb-three-basements', then: [
            { s: 'sebastian', f: 'neutral', t: "You've got three basements, you said. I've got one. I keep thinking that makes you the expert. How do you stand it. Wanting all three." }
          ] },
          { n: "He said it to the puddles. He said it like he'd been carrying it for years and had only just now noticed how heavy it was." }
        ] },
        { t: "I don't want you to leave either.", notes: 2, then: [
          { s: 'sebastian', f: 'neutral', t: "Don't. You can't just say that. I can't do anything with that." },
          { n: "He didn't sound angry. He sounded like someone holding something too hot to put down." }
        ] }
      ] },
      { s: 'sebastian', f: 'neutral', t: "Abby wants to go home. She's made up her mind. She wants to go back and go to the mines and get her sword and tell her dad she's not taking over the store. She's been practicing the speech on Sam." },
      { s: 'sebastian', f: 'neutral', t: "And I'm thinking, what if I just... didn't. What if I stayed. Here's a city. Here's a third thing. I wouldn't be the guy who left. I wouldn't be the guy in the basement. I'd just be... gone." },
      { n: "Solar felt it go into her like cold water. Not his words. The shape of them. A place where nothing has to end because nothing has to be chosen. A dark, quiet, green place where you could stay and stay. She knew it. She had no idea how she knew it, and it frightened her more than anything in Tartarus ever had, how much she knew it." },
      { choose: [
        { t: "That's not a third thing, Sebastian. That's just hiding with better lighting.", notes: 3, then: [
          { s: 'sebastian', f: 'surprised', t: "..." },
          { s: 'sebastian', f: 'neutral', t: "...That's rude. That's really rude. That's really, really accurate." }
        ] },
        { t: "Maybe leaving isn't the ending. Maybe you get to choose it again every day.", notes: 3, then: [
          { s: 'sebastian', f: 'neutral', t: "Every day? That sounds exhausting." },
          { ifFlag: 'seb-turn-around', then: [
            { s: 'solar', f: 'neutral', t: "You turn around and ride it back. You said you never thought about it." },
            { s: 'sebastian', f: 'neutral', t: "...You remember that." },
            { s: 'solar', f: 'neutral', t: "I remember everything that happened this year. It's the only year I've got." }
          ], else: [
            { s: 'solar', f: 'neutral', t: "Like the coast road. When it runs out, you turn around and ride it back. Nobody makes you stay at the guardrail." },
            { s: 'sebastian', f: 'neutral', t: "...I always thought turning around was losing." },
            { s: 'solar', f: 'neutral', t: "Only if you were racing somebody." }
          ] }
        ] },
        { t: "Then stay.", notes: 1, then: [
          { n: "He looked at her like she'd slapped him. And then, slowly, like she'd done him a favor. He laughed, short." },
          { s: 'sebastian', f: 'neutral', t: "Yeah. See. When somebody says it out loud, it sounds really stupid." }
        ] }
      ] },
      { n: "A frog hopped out of the puddle at the edge of the awning. It sat there. They both looked at it. It was very small and very wet and appeared to have no plans whatsoever." },
      { s: 'sebastian', f: 'neutral', t: "...Okay. Okay. I'm going home." },
      { s: 'sebastian', f: 'neutral', t: "I'm going to go home and tell my mom I'm moving to the city in the spring. Not leaving. Moving. And I'm coming back for the moonlight jellies. Every year. And I'm going to stand at the front." },
      { s: 'sebastian', f: 'neutral', t: "And I'm taking Abby to the mines first. Because I said I would. And because if she gets a sword without me there, I'll never hear the end of it." },
      { n: "He crouched down and picked up the frog and held it in his cupped hands and looked at it for a long time, very seriously, as if asking its opinion." },
      { s: 'sebastian', f: 'happy', t: "He agrees. He says it's the third thing. He's very wise. He lives in a puddle." }
    ] },

    { after: '12/5', title: '10: the frog sketch', place: 'Paulownia Mall · Game Panic', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "December, and it was raining, of course. Cold winter rain on the arcade awning, the kind that was trying very hard to become snow and kept losing its nerve at the last second. He was waiting under the awning, and he had something under his hoodie, held flat against his stomach with one hand, protecting it from the wet like a man smuggling a cat." },
      { s: 'sebastian', f: 'neutral', t: "Don't make a thing of this." },
      { n: "It was a drawing. A pencil sketch on heavy paper, a little damp at one corner. A frog, sitting on a rainy pavement under an arcade awning, looking up at the viewer with an expression of enormous dignity. And beside it, a pair of school shoes, just the shoes and the hem of a skirt, standing very still so as not to step on him." },
      { s: 'sebastian', f: 'neutral', t: "I don't draw much. It's not great. It's the first frog. The one from the beginning. And your shoes. I remembered your shoes. That's weird. I know it's weird." },
      { choose: [
        { t: "I'll hang it on my wall.", notes: 3, then: [
          { s: 'sebastian', f: 'neutral', t: "...Cool. I mean. Good. That's where it should go." },
          { n: "He looked away at the rain. His ears had gone red." }
        ] },
        { t: "You remembered my shoes.", notes: 2, then: [
          { s: 'sebastian', f: 'flustered', t: "You were standing really still. You didn't step on him. It's the first thing I liked about you. The second thing was you didn't ask why." }
        ] }
      ] },
      { s: 'sebastian', f: 'neutral', t: "I'm bad at saying things. You know that. So I'm going to do this the only way I know how." },
      { n: "He took a single twenty-sided die out of his pocket. Dark green, worn at the corners, the numbers half rubbed off. He held it out on his palm." },
      { s: 'sebastian', f: 'neutral', t: "Solarion, a wanderer from another world, finds a quiet guy in a hoodie who likes frogs and doesn't talk. She makes him talk. She gets his friends to come. She makes him stand at the front. She gets him to go home. He doesn't know how to thank her." },
      { s: 'sebastian', f: 'neutral', t: "What are they? In the campaign. Roll for it, if you want. Or don't. Whatever you say, I'm writing it down." },
      { choose: [
        { t: "Best friends. No roll needed.", notes: 3, then: [
          { s: 'sebastian', f: 'neutral', t: "...No roll needed." },
          { n: "He took out the notebook, and wrote it, right there, very seriously, in his small cramped handwriting, under SOLARION, in a box: BEST FRIEND: THE GUY IN THE HOODIE. PERMANENT. NOT AFFECTED BY DICE." }
        ] },
        { t: "(Roll it.)", notes: 3, then: [
          { n: "She rolled it on the ticket machine. It went round and round and settled. Twenty. A natural twenty, the numbers so worn you could barely read them, but you could read that one." },
          { s: 'sebastian', f: 'surprised', t: "...Critical success. Of course. Of course you did." },
          { s: 'sebastian', f: 'happy', t: "Best friends. Every campaign. That's canon now. The dice said." }
        ] },
        { t: "His sister. The annoying kind.", notes: 2, flag: 'seb-sister', then: [
          { s: 'sebastian', f: 'neutral', t: "I already have a sister who's better than me at everything." },
          { s: 'sebastian', f: 'happy', t: "...Fine. Two. I'll allow two. You're the one who doesn't build robots." }
        ] }
      ] },
      { s: 'sebastian', f: 'neutral', t: "Keep the die. I have like forty. That one's the lucky one, though. That one's the one I rolled when Abby's rogue almost died in the first session and didn't." },
      { n: "They stood under the awning until the rain stopped, the way they always did. When it did, finally, the street smelled of wet concrete and fried food and bus, and he pulled his hood down, and stepped out from under the awning into the clean cold air, and looked up, and held out his hand, palm up, the way you do to see if it's still raining." },
      { s: 'sebastian', f: 'neutral', t: "In the ending of the text adventure, I finally wrote it. Solarion goes home. Wherever that is. And her friends stand on the platform. And somebody's holding up a sign with her name on it, really badly drawn, with a frog on it." },
      { s: 'sebastian', f: 'neutral', t: "That's the ending. That's the only one I could write that I believed. I don't know which home. Neither do you, I guess. But somebody's holding the sign." },
      { n: "Solar didn't say anything. She held the drawing against her chest, under her blazer, out of the wet, the way he'd held it, and the die in her other fist, and walked home in the clearing dark with both of them, and didn't look back at the awning, and knew he was standing under it anyway, watching her go, from the back, the way he always would, and that this time it was a choice." }
    ] }
  ],
  afterMax: [
    { title: 'the rogue', place: 'Iwatodai Dorm · Lounge', scene: [
      { music: 'dorm' },
      { n: "Abigail had demanded a one-shot. A short campaign, one night only, where her rogue got to be the main character for once, because, she said, Solarion had been hogging the spotlight since the summer and some of them had been waiting three years." },
      { s: 'abigail', f: 'happy', t: "Solar. You're playing the villain. Seb says you're too good at being the hero, and it's making the rest of us look bad." },
      { s: 'sebastian', f: 'neutral', t: "I didn't say that. I said she rolls too high. It's statistically offensive." },
      { ifFlag: 'seb-dragon-friend', then: [
        { s: 'sebastian', f: 'neutral', t: "Also the villain has a dragon. Obviously. It followed her over from the last campaign. I'm not allowed to write it out. I tried. It came back." }
      ] },
      { ifFlag: 'seb-dragon-slain', then: [
        { s: 'sam', f: 'happy', t: "One HIT, dude. First session. I'm going to be talking about it at your funeral." }
      ] },
      { choose: [
        { t: "(Play the most charming villain they've ever seen.)", notes: 3, then: [
          { n: "Solar played the villain as a polite, tired woman who ran a tea shop and only wanted everybody to stop fighting in it, and by the third hour Abigail's rogue had agreed to work for her, and Sam's bard had written her a song, and Junpei's goblin had proposed, and Sebastian was sitting at the head of the coffee table with his face in his hands saying \"this is not how the campaign was supposed to go\" in a voice of total, delighted despair." }
        ] },
        { t: "(Play a terrible villain on purpose so Abigail wins.)", notes: 2, then: [
          { s: 'abigail', f: 'serious', t: "You're throwing. I can tell you're throwing. Seb, she's throwing." },
          { s: 'sebastian', f: 'neutral', t: "She's being kind. It's worse. Roll to forgive her." }
        ] }
      ] },
      { n: "Abigail won in the end, with a natural twenty and a speech, and she stood on the couch to give the speech, and Sebastian didn't look at his notes once, the whole time she was talking. He just looked at her." }
    ] },
    { title: 'hibernation', place: 'Paulownia Mall · Game Panic', scene: [
      { music: 'city' },
      { n: "It was the coldest night of the winter so far, and Sebastian had declared hibernation. Hibernation meant the back corner of Game Panic, on the floor, against the warm side of the racing cabinet, with two cans of hot cocoa from the vending machine and a coat each and no talking unless strictly necessary." },
      { s: 'sebastian', f: 'neutral', t: "Frogs do this. Bury themselves in the mud and just wait for spring. Their hearts nearly stop. It's very efficient." },
      { choose: [
        { t: "(Sit down next to him and hibernate.)", notes: 3, then: [
          { n: "She sat down next to him on the floor. The cabinet hummed against her back, warm as an animal. They hibernated for an hour, in total silence, while the arcade roared around them, and it was the most restful hour Solar had spent all winter." }
        ] },
        { t: "Wake me up in spring.", notes: 2, then: [
          { s: 'sebastian', f: 'happy', t: "Spring's when we go home. So. No. I'm going to wake you up next Tuesday." }
        ] }
      ] },
      { s: 'sebastian', f: 'neutral', t: "...When I get home I'm going to do this in the basement with Abby. Except with the door open. That's the new rule. Door open." }
    ] },
    { title: 'packing', place: 'Kirijo Flat · By the Station', scene: [
      { place: 'Kirijo Flat · By the Station', time: 'Evening', bg: 'hotel-lobby' },
      { music: 'dorm' },
      { n: "The little Kirijo flat by the station had been Abigail and Sam's since July and Sebastian's, unofficially, since about a week after that, and it had the look now of a place three people had been very happy in without ever once tidying it. Dice on every surface. A skateboard deck propped against the fridge. A purple plush sword in the window like a flag." },
      { ifAfter: '12/22', then: [
        { n: "Elizabeth had been to see them in December. She'd sat on the floor because all the chairs had laundry on them and told them the night the doors would open, and Abigail had written it on the fridge in marker and drawn a sword through it, which nobody had asked about." }
      ] },
      { s: 'sam', f: 'neutral', t: "Okay. Packing meeting. Rule is, one thing each. One thing from here that comes home. Abby's is the sword, obviously." },
      { s: 'abigail', f: 'happy', t: "Obviously. It's a real sword. Spiritually." },
      { s: 'sam', f: 'happy', t: "Mine's the deck. The guy at the shop on the Strip drew a fox on it for me. Seb won't say what his is." },
      { s: 'sebastian', f: 'neutral', t: "...Because it's stupid." },
      { choose: [
        { t: "Then it's definitely the right one. What is it?", notes: 3, then: [
          { n: "He took it out of the front pocket of his hoodie, where it had evidently been for some time. A folded piece of paper, soft at the creases. Solar knew it before he opened it. A one-way bus ticket, Pelican Town to Zuzu City, the date circled in pen. Under the circle, in new ink, he'd written something else." },
          { s: 'sebastian', f: 'neutral', t: "I'm taking it home to give it back to the bus company. With a note. \"Not this one. I'll buy my own in spring. Round trip.\"" },
          { s: 'abigail', f: 'surprised', t: "...Round trip. Seb. You wrote round trip." },
          { s: 'sebastian', f: 'neutral', t: "For the moonlight jellies. I said I'd come back for them. I keep my promises. Mostly. Recently." }
        ] },
        { t: "I'll go first. Mine would be the die.", notes: 2, then: [
          { s: 'sebastian', f: 'neutral', t: "You're not going anywhere you can't bring a die to. That's the one thing I know about you." },
          { s: 'sebastian', f: 'neutral', t: "...Mine's a ticket. I'll show you sometime. It's not interesting. It's the most interesting thing I own." }
        ] }
      ] },
      { n: "They didn't pack, in the end. They played a one-shot instead, on the floor, because Sam said a packing meeting that ended in packing was a waste of a meeting, and the one-shot was about three adventurers trying to leave a city that kept being too good to leave, and none of them pointed out what it was about, and none of them needed to." }
    ] },
    { title: 'frogs in winter', place: 'Paulownia Mall', scene: [
      { place: 'Paulownia Mall · Behind the Canal', time: 'Daytime', bg: 'park-2' },
      { music: 'tender' },
      { n: "There was frost on the concrete edge of the canal behind the mall, a thin white rind on everything, and the water was low and black and very still, and Sebastian was crouched at the edge of it in a borrowed scarf with his elbows on his knees, looking down, the way he had in June, at nothing." },
      { s: 'sebastian', f: 'neutral', t: "He's down there. The first frog. Not him specifically. Probably. In the mud at the bottom. Heart nearly stopped. Waiting for spring." },
      { s: 'sebastian', f: 'neutral', t: "I won't be here when he comes up. That's the bit I keep getting stuck on. I'll be in Pelican Town and he'll come up in a canal in a world I can't get to and nobody'll be crouched here to see it." },
      { choose: [
        { t: "I'll come and check. In spring. For you.", notes: 3, then: [
          { s: 'sebastian', f: 'neutral', t: "...You'll be home too. Wherever home is. You won't be here either." },
          { s: 'solar', f: 'neutral', t: "Then somebody will. Fuuka. Ken. Somebody who likes frogs." },
          { s: 'sebastian', f: 'neutral', t: "...I'll write it on the fridge at the dorm. FROG CHECK, SPRING. The red-haired lady will enforce it. I believe that about her." }
        ] },
        { t: "He doesn't need anybody to see it. He'll come up anyway.", notes: 3, then: [
          { s: 'sebastian', f: 'neutral', t: "...Yeah. That's the most frog thing about him. He just comes up." },
          { n: "He picked up a pebble and turned it over in his fingers and didn't throw it, because it might hit somebody sleeping down there, and put it in his pocket instead." }
        ] }
      ] },
      { ifFlag: 'seb-sister', then: [
        { s: 'sebastian', f: 'neutral', t: "When I tell Maru about this year I'm going to tell her she has competition. Another sister. The annoying kind. Who doesn't build robots, and rolls too high, and made me run a relay." },
        { s: 'sebastian', f: 'happy', t: "She's going to be so jealous. She's never once made me run anything." }
      ], else: [
        { s: 'sebastian', f: 'neutral', t: "When I tell Maru about this year she won't believe half of it. She'll ask for data. I'll give her the frog sketch. She'll say that's not data. It's the best data I have." }
      ] },
      { n: "They stayed by the canal until their hands went numb, and then he walked her back round to the front of the mall and stopped under the Game Panic awning, out of habit, though the sky was a hard clear blue with nothing in it, and stood there anyway, with her, as if it might start raining any minute and he wanted to be ready." }
    ] }
  ]
});
