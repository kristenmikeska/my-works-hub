/* Cherry · ? Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Searcher (Hoax), friendship. Kat's ruling: Cherry Kim is Solar's best friend in Hoax and a key Hoax person (she's the one
   who runs to her in the Hoax ending, story-endings.js). She crosses in the story on 11/13 (story-act4.js 'a4-cherry', the
   karaoke place, yelling Jihoon's name; there is mascara all down her face by the end of it in every branch). Rank 1 is
   the first afternoon after. The story reads her rank 7 (anchor 'anc7-H' / 'd7-hN' at the 12/21 solstice) and rank 10
   ('d10-hN'), so rank 7 lands before the solstice.
   Hoax canon used (on the page): deadpan and mean to everyone by nature, "i love u bitch"; she said "i need u to run for pres"
   in the chat after the president was rude to Solar and never apologized (and "it would make ur parents happy"); the back row
   of class, where Solar always sat with her; "I just care about you, and I don't want you to get hurt by some fucking idiots";
   she skips class, doesn't care about school, Solar "can barely add"; ice skating is her new hobby; she did Solar's hair and
   makeup for homecoming; Hyunsuk, her childhood friend, and Sunghoon, whom she claims to hate ("he's a fan"); she once did
   something behind Solar's back to protect her, felt sick with guilt, apologized, and Solar forgave her. Kept vague here.
   Game-world inventions: "knockoff" (Cherry coins it here, rank 2), the winter rink in Seaside Park, the poster's handwriting.
   Flags this link sets and reads: cherry-said-you (r1 → r9), cherry-poster (r3 → afterMax), cherry-fan (r4 → r8),
   cherry-skated (r5 → afterMax), cherry-forgave (r7 → r10). Reads story flags route-H / route-true / route-stay (r8, r10),
   call-H (r8), xmas-jihoon (r9), and ifMet wren (r7). Nothing here decides Hoax's election, homecoming or romances.
   Curses kept sparing (Kat's ruling) but in her voice. Texting voice: lowercase, "ur", "fking", "ltrly", "abt".
   Arcana: '?' (open question, plot doc §16.6). */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'cherry', name: 'Cherry', short: 'Cherry', arcana: '?', numeral: '', from: 'Hoax',
  kind: 'searcher', world: 'H', romance: null,
  starts: '11/14', gate: { H: 7 },
  home: { area: 'strip', spot: 'Wild-Duck Burger', slot: 'after', days: [0, 1, 3, 5, 6],
          hint: 'Afternoons at Wild-Duck Burger on the Strip, in the corner booth, eating other people\'s fries.' },
  approach: "There's a girl in the corner booth at Wild-Duck Burger with her arms folded so tightly it looks structural, glaring at a menu like it owes her money, and when she sees you through the window she doesn't wave. She points at the seat across from her.",
  cast: { sunghoon: 'Sunghoon', asahi: 'Asahi' },
  invite: {
    ask: [
      "wild duck. now",
      "sol. food. im starving and jihoon isnt answering bc hes doing PILATES",
      "r u busy or r u being mysterious again",
      "come here i need to complain abt something and ur the only one who listens",
      "i found a better burger place. its worse. come",
      "if u dont come out i'll come in. ur choice",
      "junkyu is crying abt a dog he saw. not even a sad dog. come help",
      "theres a guy on the strip w a sandwich board and i need a witness for what im abt to do",
      "the guesthouse has one tv channel and its golf. save me",
      "bored. bored. bored. bored. ur fault somehow"
    ],
    ok: ["good. ordering u fries. ur not getting them", "ok. corner booth. dont be weird", "finally", "took u long enough", "ok ok. wear a scarf ur always forgetting"],
    no: ["ok but ur dead to me", "fine. ill eat ur fries", "ok. tmrw. dont make me come get u", "wow ok. noted. its in the book", "fine but i love u bitch. go"]
  },
  hangouts: [
    [
      { n: "Cherry had ordered two large fries and pushed one toward Solar and then immediately started eating from Solar's instead of her own, without comment, the way you'd breathe." },
      { s: 'cherry', f: 'neutral', t: "Yours always taste better. It's a scientific fact. Don't fight me." },
      { choose: [
        { t: "(Eat from hers.)", notes: 3, then: [
          { s: 'cherry', f: 'surprised', t: "Oh, you're doing THAT now? Okay. Okay. Game on, knockoff." },
          { n: "They ate each other's fries in grim silence until both trays were empty and nobody had technically eaten their own, which Cherry declared a draw, and then, after some thought, a win for her, on a technicality she wouldn't explain." }
        ] },
        { t: "(Move your tray out of reach.)", notes: 2, then: [
          { s: 'cherry', f: 'serious', t: "Wow. Wow. After everything we've been through. In two different universes." },
          { n: "She reached across anyway. She had longer arms than she looked." }
        ] },
        { t: "(Push both trays toward her.)", notes: 1, then: [
          { s: 'cherry', f: 'neutral', t: "No. That's no fun. If you give them to me they're not stolen." },
          { n: "She pushed one back. Then, while Solar was looking out the window, she stole from it." }
        ] }
      ] }
    ],
    [
      { place: 'Iwatodai Dorm · Lounge', time: 'Afternoon', soft: true },
      { n: "Cherry had decided the dorm's television was hers on the afternoons she came over, and on those afternoons she sat on the lounge sofa with her boots on the table and watched a variety show she didn't understand a word of, and laughed at it, loudly, at the wrong moments." },
      { s: 'cherry', f: 'happy', t: "I don't know what he said. I know it was stupid. You can tell. Look at his face." },
      { choose: [
        { t: "(Laugh at the wrong moments with her.)", notes: 3, then: [
          { n: "They laughed at the wrong moments together for an hour. Junpei, who understood every word, sat on the floor between them and got more and more confused, and at the end Cherry patted him on the head like a dog and told him he'd done great." }
        ] },
        { t: "(Translate. Badly. On purpose.)", notes: 3, then: [
          { s: 'cherry', f: 'happy', t: "He did NOT say that. He did not say his mother was a pigeon. ...Did he? Junpei, did he?" },
          { s: 'junpei', f: 'flustered', t: "I mean. Kind of? Not a pigeon. A bird, though." }
        ] },
        { t: "(Ask her to take her boots off the table.)", notes: 1, then: [
          { s: 'cherry', f: 'neutral', t: "Mitsuru said that. Mitsuru said that in a way where I could tell she was imagining my funeral." },
          { n: "She took them off the table. She put them on Junpei instead. Junpei allowed it." }
        ] }
      ] }
    ],
    [
      { place: 'Iwatodai Dorm · Front', time: 'Afternoon', soft: true },
      { n: "Cherry was doing Solar's nails. Not well. She'd found a bottle of black polish in a convenience store and declared that Solar's hands looked naked, and she was painting them on the dorm steps with the focus of a surgeon and the skill of a child." },
      { s: 'cherry', f: 'serious', t: "Don't move. I'm in the zone. If you move I'll paint your whole finger." },
      { choose: [
        { t: "(Hold perfectly still.)", notes: 3, then: [
          { n: "She held still. Cherry painted her whole finger anyway, on the pinky, and looked at it, and then painted her own pinky the same way, so they'd match, and said that was the style now." }
        ] },
        { t: "(Sneeze.)", notes: 2, then: [
          { s: 'cherry', f: 'serious', t: "You did that on PURPOSE." }
        ] },
        { t: "You're better at eyeliner than this.", notes: 2, then: [
          { s: 'cherry', f: 'surprised', t: "...I am. I'm SO much better at eyeliner. How do you know that?" },
          { n: "Solar didn't. Her mouth did. Cherry looked at her for a second with the brush dripping and then went back to the nails, harder, and painted three fingers in a row perfectly, as if to make a point to someone who wasn't there." }
        ] }
      ] }
    ],
    [
      { place: 'Paulownia Mall · Be Blue V', time: 'After School', soft: true },
      { n: "Be Blue V was having a sale, which meant the glass cases near the door were full of things that sparkled for less, and Cherry was going down them one at a time with her hands behind her back like a general inspecting troops she didn't think much of." },
      { s: 'cherry', f: 'neutral', t: "Ugly. Ugly. Ugly, but expensive. Ugly and cheap, which is honest at least. That one's for a girl who says *live, laugh, love* out loud." },
      { s: 'cherry', f: 'serious', t: "Who buys this. Who walks in here and goes, yes, a necklace that's a tiny fork." },
      { choose: [
        { t: "(Point at the tiny fork necklace.) I want it.", notes: 3, then: [
          { s: 'cherry', f: 'surprised', t: "...You're doing a bit. You're doing a bit at me. In public." },
          { n: "She bought it. She made Solar wear it out of the shop, and then for the rest of the afternoon, every time Solar said anything, she pointed at the fork and said *okay, fork girl,* until Solar laughed so hard the girl at the counter came out to check on them." }
        ] },
        { t: "(Agree with everything she says.)", notes: 2, then: [
          { n: "Solar agreed with everything she said. Cherry looked increasingly suspicious about it and finally said that it wasn't fun if nobody fought her, and that Solar used to fight her, and that she was going to fight herself, then, and did, out loud, about a pair of earrings, and lost." }
        ] },
        { t: "These are kind of pretty.", notes: 1, then: [
          { s: 'cherry', f: 'neutral', t: "They're not. You're tired. Go home. Drink water. Look at them again tomorrow and be ashamed." }
        ] }
      ] }
    ],
    [
      { place: 'Paulownia Mall · Karaoke', time: 'After School', soft: true },
      { n: "Cherry refused to go back to the karaoke place on principle. The principle being that the last time she'd been in it every booth had been full of coffins holding microphones, and she'd seen enough, and she was never going back, and she was going back today, apparently, because the girl at the counter had a punch card and Cherry could not walk past a punch card." },
      { n: "She took booth seven. She took booth seven without looking at it, the way you'd take the same seat in a classroom out of habit, and sat with her arms folded until the screen came on, and then picked a song, a loud one, all guitars and a boy screaming about a girl in a voice that broke in the middle on purpose." },
      { s: 'cherry', f: 'neutral', t: "You used to love this guy. Obsessed. You had a whole phase. I'm making you suffer through it as revenge." },
      { choose: [
        { t: "(Sing the whole thing without looking at the screen.)", notes: 3, then: [
          { n: "She knew every word. She didn't know the song. She had never heard it in her life. Her mouth knew where the voice broke and broke with it, and Cherry stopped singing halfway through the second verse and just watched her with the microphone hanging at her side." },
          { s: 'cherry', f: 'sad', t: "...Yeah. Yeah, okay. Still in there. Good." }
        ] },
        { t: "(Take the other microphone. Scream badly.)", notes: 3, then: [
          { n: "They screamed badly together. It was the worst duet in the history of the building. Someone in the next booth banged on the wall and Cherry banged back, twice as hard, without missing a word." }
        ] },
        { t: "I'll just listen.", notes: 1, then: [
          { s: 'cherry', f: 'neutral', t: "Nobody just listens at karaoke. That's a crime. There's a sign." },
          { n: "There was no sign. She sang the whole thing anyway, at Solar, pointing, flat and furious and completely on key." }
        ] }
      ] }
    ],
    [
      { place: 'Iwatodai Dorm · Front', time: 'Afternoon', soft: true },
      { n: "There was gum. Cherry always had gum, the cheap kind from the convenience store that lost its flavor in four minutes, and she was sitting on the low wall outside the dorm blowing bubbles in the cold, big pink ones, popping them with a sound like a slap and peeling them off her lip without any embarrassment at all." },
      { s: 'cherry', f: 'neutral', t: "You can't do it. You never could. You just spit it. It's tragic. Watch." },
      { choose: [
        { t: "(Try anyway.)", notes: 3, then: [
          { n: "Solar tried. She spat it, in a small sad arc, onto the pavement, exactly as predicted, and Cherry laughed so hard she had to hold the wall, and then gave her another piece, and another, until on the fifth piece a small lopsided bubble came out and stayed out for almost a full second." },
          { s: 'cherry', f: 'happy', t: "OH. Oh my God. Historic. I'm telling the chat. They won't believe me. Nobody will ever believe me." }
        ] },
        { t: "(Pop hers with a finger.)", notes: 2, then: [
          { s: 'cherry', f: 'serious', t: "Okay. You're going to regret that every day for the rest of your life." },
          { n: "She peeled it off her chin with great dignity and immediately blew another, bigger, out of spite." }
        ] },
        { t: "That's disgusting.", notes: 1, then: [
          { s: 'cherry', f: 'neutral', t: "You say that every time. Every time. And then you ask for a piece." },
          { n: "Solar did not ask for a piece. Five minutes later she asked for a piece." }
        ] }
      ] }
    ]
  ],
  ranks: [
    { after: '11/15', title: "1: who's really in first", place: 'Iwatodai Strip · Wild-Duck Burger', time: 'Afternoon', music: 'city', scene: [
      { n: "It was raining on the Strip, the thin November kind that didn't fall so much as hang in the air and wait for you to walk into it, and the windows of Wild-Duck Burger had fogged from the inside so that the whole place glowed like a fish tank somebody had left the light on in." },
      { n: "Two nights ago a girl had come out of booth seven at the karaoke place in the middle of the Dark Hour with one arm already pointing, yelling Jihoon's name into the green. Since then she had eaten Jihoon's emergency ramen, fallen asleep face down on the dorm kitchen table in his hoodie, been driven to the Kirijo guesthouse by the station by a Mitsuru who had not said one word the entire way, and, according to Junkyu, who had followed her around most of Saturday like a duckling, insulted every single thing on the Strip except Wild-Duck, which she had walked into, looked around, and declared the only honest business in Japan." },
      { n: "She maintained, to anyone who asked, that she had not cried at the karaoke place. There had been mascara all the way down her face. She maintained that it was the smoke machine. There had not been a smoke machine." },
      { n: "She was in the corner booth now with two large fries and a cola and her arms folded so tightly it looked structural, and when Solar came in out of the rain, shaking it off her sleeves, she didn't wave. She pointed at the seat." },
      { register: 'cherry' },
      { s: 'cherry', f: 'neutral', t: "Sit." },
      { n: "Solar sat. Cherry looked at her across the table the way she had looked at her in the green hall, slowly, from the top down, the wet hair and the Gekkoukan blazer and the red armband with its letters she'd never once asked about, the way a customs officer looks at a suitcase that's started making a ticking noise." },
      { s: 'cherry', f: 'serious', t: "Okay. Quiz. Who's your best friend?" },
      { choose: [
        { t: "I don't know.", notes: 2, then: [
          { s: 'cherry', f: 'neutral', t: "Wrong." },
          { s: 'cherry', f: 'neutral', t: "The correct answer is me. Jihoon's going to tell you it's him. He's going to say it really loud, like volume makes it true. He's lying. Write that down." }
        ] },
        { t: "Jihoon says it's him.", notes: 2, then: [
          { s: 'cherry', f: 'serious', t: "Of course he does. Of course he got to you first. He's got a car. He lives ten minutes from your house. He always gets there first." },
          { s: 'cherry', f: 'neutral', t: "Getting there first isn't the same as being first. Remember who's really in first. That's me. I'm the answer." }
        ] },
        { t: "You.", notes: 3, flag: { 'cherry-said-you': true }, then: [
          { s: 'cherry', f: 'surprised', t: "..." },
          { n: "Cherry stared at her. Her arms came unfolded for the first time since she'd come through, and her hands lay on the table on either side of her tray like she'd forgotten what they were for. Then she folded them again, faster, tighter, and looked out the window at the rain." },
          { s: 'cherry', f: 'neutral', t: "...Good. Correct. Lucky guess." }
        ] }
      ] },
      { n: "She pushed one of the trays of fries across the table toward Solar. Then she reached over and started eating from it." },
      { s: 'cherry', f: 'neutral', t: "Yours always taste better. Don't ask me why. It's science." },
      { n: "They ate. The Strip went by outside the fogged glass in smears of color, umbrellas and school bags and a man with a sandwich board advertising a massage parlor whom Cherry glared at through the window until he walked faster. She didn't ask Solar anything. She didn't look at her much. She just ate her fries and stole Solar's and sat with her arms in a way that looked, Solar slowly realized, less like a girl being rude and more like a girl holding herself together with both hands." },
      { s: 'cherry', f: 'neutral', t: "Three weeks. That's how long it's been. Jihoon says one night, because his phone stopped at midnight, but Jihoon can't count. He does pilates instead of math." },
      { s: 'cherry', f: 'serious', t: "Three weeks of nobody answering the chat. Junkyu sending crying faces at four in the morning. Me in the back row with an empty seat next to me like an idiot." },
      { s: 'solar', f: 'neutral', t: "I've been here since April." },
      { s: 'cherry', f: 'surprised', t: "..." },
      { s: 'cherry', f: 'neutral', t: "Okay. Don't tell me things like that. I'll deal with that one later. I'm putting it in a drawer." },
      { choose: [
        { t: "You can cry, you know. Everyone else did.", notes: 3, then: [
          { s: 'cherry', f: 'neutral', t: "I didn't cry. That was the smoke machine." },
          { s: 'cherry', f: 'serious', t: "I'm going to find whatever did this to you and break off both its legs. Then I'll cry. In that order. I've got a list." }
        ] },
        { t: "Why aren't you angry at me?", notes: 3, then: [
          { s: 'cherry', f: 'neutral', t: "I am angry. Look at me. This is my angry face. It's also my normal face. You used to be able to tell the difference." },
          { s: 'cherry', f: 'sad', t: "...I'm not angry at YOU. I'm angry at whatever made you look at me like a teacher. I'm going to hit it. I just haven't found it yet." }
        ] },
        { t: "(Steal one of her fries back.)", notes: 2, then: [
          { s: 'cherry', f: 'surprised', t: "..." },
          { s: 'cherry', f: 'happy', t: "Oh. Okay. There you are. There's a little bit of you in there. Thief." }
        ] }
      ] },
      { s: 'cherry', f: 'serious', t: "Here's how this goes. I'm not going to make you remember. That's stupid. You can't make people remember things. Teachers have been trying it on me my whole life and I still don't know a single date." },
      { s: 'cherry', f: 'neutral', t: "I'm just going to be here. Being annoying. Being right. And one day you'll go, oh, it's her, the one who's always right. And then we're back." },
      { n: "When they left she paid for both of them without asking and didn't let Solar see the receipt, and on the pavement outside she stood for a second under the awning with her hands in her coat pockets and the rain coming down in a curtain in front of her, looking at Solar in the Strip's wet neon, and her face did one small thing, very fast, and then didn't." },
      { s: 'cherry', f: 'neutral', t: "Your hair's different. I hate it." },
      { s: 'cherry', f: 'happy', t: "...It's growing on me. Don't tell anyone. Go home. You don't have an umbrella, you never have an umbrella, take mine, I'll get wet, it's fine, I'm used to suffering." }
    ] },

    { after: '11/19', title: '2: knockoff', place: 'Paulownia Mall · Arcade', time: 'Evening', music: 'city', scene: [
      { n: "The arcade at Paulownia Mall was louder than it had any right to be again, which by now meant Jihoon was in it, and Cherry was walking through the doors toward the noise with the face of a woman walking toward a fight she'd been looking forward to all day." },
      { n: "He was at the air hockey table with Junkyu and Asahi, losing to Junkyu, which was a thing nobody had known was possible until it happened, and he looked up and saw her and his whole body changed, the way a cat's does when another cat walks into the room." },
      { s: 'cherry', f: 'serious', t: "Park Jihoon." },
      { s: 'jihoon', f: 'neutral', t: "Oh no. Oh, no. Who let her in?" },
      { s: 'cherry', f: 'neutral', t: "The universe. Move. You're blocking the table, and you're ugly." },
      { s: 'asahi', f: 'neutral', t: "Oh, goodie. Just what I needed." },
      { s: 'junkyu', f: 'happy', t: "It's so good to have everyone back together!" },
      { s: 'cherry', f: 'neutral', t: "Junkyu, I love you, shut up." },
      { n: "She took the paddle out of Junkyu's hand without asking. Junkyu let her, the way you let weather happen. Across the table Jihoon rolled his shoulders like a boxer and said that he did pilates and his core was a weapon, and Asahi said that if he heard the word pilates one more time he was going to walk into the bay, and Cherry put a coin in, and the puck dropped." },
      { s: 'jihoon', f: 'serious', t: "Sol. Pick a side. You have to pick a side. It's the law." },
      { choose: [
        { t: "(Stand next to Cherry.)", notes: 3, then: [
          { s: 'cherry', f: 'happy', t: "HA. Correct. See? The body remembers. The body knows who's in first." },
          { s: 'jihoon', f: 'sad', t: "The body has AMNESIA." }
        ] },
        { t: "(Stand next to Jihoon.)", notes: 2, then: [
          { s: 'cherry', f: 'serious', t: "Traitor. Fine. I'll beat you both. It'll be more satisfying." },
          { s: 'jihoon', f: 'happy', t: "Light of her disgusting life. Never forget." }
        ] },
        { t: "(Stand at the end of the table. Referee.)", notes: 2, then: [
          { s: 'asahi', f: 'neutral', t: "Smart. That's the only position in this friend group where nobody hits you." },
          { s: 'cherry', f: 'neutral', t: "Referees get hit. I'll hit the referee." }
        ] }
      ] },
      { n: "It was not a game. It was a war with a scoreboard. Cherry played the way she apparently did everything, low and vicious and talking the whole time, and Jihoon played the way he apparently did everything, loudly, with commentary, and the puck went back and forth between them so fast it stopped looking like a puck, and at seven all it jumped the rail and hit Asahi in the shin, and Asahi said nothing at all, which was worse." },
      { n: "Cherry won by one. She didn't celebrate. She put the paddle down very gently and looked at Jihoon, and Jihoon looked at her, with the deep, settled hatred of two people who had been fighting over the same thing since they were small enough to fight over crayons." },
      { n: "And Solar, who had been watching all of it with her arms folded and something warm going on under her ribs, put her hand out across the table to Jihoon and said, perfectly pleasantly, *good game.*" },
      { s: 'cherry', f: 'surprised', t: "..." },
      { s: 'jihoon', f: 'surprised', t: "..." },
      { s: 'cherry', f: 'serious', t: "Good game? GOOD GAME? Who are you? Since when do you say good game? You say *rigged*, and then you go buy ice cream with his money." },
      { s: 'cherry', f: 'neutral', t: "You're a knockoff. That's what you are. You're a bag from a street market. Right logo, wrong stitching." },
      { choose: [
        { t: "Rigged.", notes: 3, then: [
          { s: 'cherry', f: 'surprised', t: "..." },
          { s: 'jihoon', f: 'happy', t: "HA. There she is. That's her. Somebody write down the time." },
          { s: 'cherry', f: 'happy', t: "...Okay. That was a little bit real. A little bit." }
        ] },
        { t: "What's wrong with good game?", notes: 2, then: [
          { s: 'asahi', f: 'neutral', t: "It's polite. You've never been polite to him in your life. It's frankly disturbing." },
          { s: 'junkyu', f: 'sad', t: "I think it's nice! ...It's a little scary, though." }
        ] },
        { t: "(Shake Jihoon's hand anyway, very firmly.)", notes: 2, then: [
          { n: "Jihoon shook it. He looked down at their hands like somebody had handed him a live fish. Then he squeezed, once, too hard, and let go, and turned away to put another coin in a machine he wasn't going to play." }
        ] }
      ] },
      { n: "Later, when Jihoon had gone back to losing to Junkyu and Asahi had gone to find a bench where nobody would talk to him, Cherry leaned on the rail by the prize counter with her arms folded and watched Solar watch the boys, and said, quietly, without looking at her, that she was going to keep calling her that." },
      { s: 'cherry', f: 'neutral', t: "Knockoff. Until the real one comes back. It's a placeholder. Like Jihoon." },
      { s: 'cherry', f: 'sad', t: "It's not mean. Okay, it's a little mean. It's so I don't forget there's a real one. I need a word for it. Otherwise I'll start thinking this is just you now." },
      { choose: [
        { t: "Say it, then. As much as you want.", notes: 3, then: [
          { s: 'cherry', f: 'neutral', t: "...Knockoff." },
          { s: 'cherry', f: 'happy', t: "God. That felt good. Okay. I'm going to say it a lot. You're going to hate it. That's the point." }
        ] },
        { t: "Am I a fake version?", notes: 2, then: [
          { s: 'cherry', f: 'serious', t: "No. You're a version with the stupid parts turned down. I like the stupid parts. I want them back." }
        ] },
        { t: "What if the real one doesn't come back?", notes: 2, then: [
          { s: 'cherry', f: 'neutral', t: "Then I'll make do with the knockoff. People carry fake bags all the time. Nobody can tell from across the street." },
          { n: "She said it flat, to the claw machines, and then didn't say anything else for a while, and the arcade went on being loud around them like a sea around a rock." }
        ] }
      ] }
    ] },

    { after: '11/24', title: '3: i need u to run', place: 'Gekkoukan High · Student Council Room', time: 'After School', music: 'school', scene: [
      { n: "Cherry had come to the school. Not in. She'd stood at the gate in her own navy blazer for twenty minutes, chewing gum, until a teacher asked if she was lost, and then she'd told the teacher, in English, that she was very lost, extremely lost, the most lost anybody had ever been, and the teacher had been so alarmed he'd let her in." },
      { n: "Mitsuru had found her in the second-floor hallway reading the notices on the bulletin board out loud in a voice of total contempt, and had looked at her for a long moment the way she looked at most problems, and then, instead of throwing her out, had taken her to the student council room. Solar got there five minutes later and found them both inside, and Jungwon at the far end of the long table with a stack of minutes squared to the edge, writing something in very small handwriting and not looking up." },
      { s: 'cherry', f: 'neutral', t: "Preppy freak." },
      { s: 'jungwon', f: 'neutral', t: "Cherry. How are your grades?" },
      { s: 'cherry', f: 'serious', t: "As good as they'll get, freak." },
      { n: "He wrote one more word, and capped his pen, and stood, and told Mitsuru with perfect courtesy that he'd finish the minutes in the library, and on his way past he set something on the table in front of Cherry without comment. Then he was gone, and the door closed behind him with a click so polite it was almost an insult." },
      { n: "It was the poster. Mitsuru had kept it in the cabinet by the window since October and had, apparently, gone and gotten it out. VOTE SOLAR KIM. A yellow sun with a little smiling face. Glitter that came off on everything. The photograph in the middle, glued on crooked, and the practiced smile in it, and under it TEAM SOLAR!!! in a round hand with a sticker of a dog, and under that, smaller, meaner, *(she wont)*." },
      { s: 'mitsuru', f: 'neutral', t: "I'll be in the hall. Take whatever time you need." },
      { n: "Then she went too. Cherry stood over the poster with her arms folded and her chin down and her gum gone still in her cheek, and she didn't turn around." },
      { s: 'cherry', f: 'neutral', t: "TEAM SOLAR is Junkyu. Obviously. The dog sticker. He bought a whole sheet of them for this." },
      { s: 'cherry', f: 'neutral', t: "*She won't* is Asahi. He thinks it's funny. It is a little funny. The glue's me and Jihoon. We fought over the glue stick and it went on crooked and then neither of us would fix it because that would mean the other one was right." },
      { s: 'cherry', f: 'serious', t: "And the whole thing's my fault." },
      { s: 'solar', f: 'neutral', t: "The poster?" },
      { s: 'cherry', f: 'serious', t: "The running. Your parents said it first. Everybody knows that. But you said no, you said you'd never win, and that was going to be it." },
      { s: 'cherry', f: 'serious', t: "And then the president was a prick to you in the hallway and never said sorry, and I was so mad I couldn't see, and I wanted to watch him lose. So I said it too. In the chat. Like it was a mission. *I need you to run for pres.* I said you could fix this garbage school. I said it would make your parents happy." },
      { s: 'cherry', f: 'sad', t: "I didn't even say it for you. I said it to win a fight you weren't even having." },
      { choose: [
        { t: "Did I want to run?", notes: 3, then: [
          { s: 'cherry', f: 'neutral', t: "I don't know." },
          { s: 'cherry', f: 'serious', t: "That's the problem. I never asked. Nobody asked. Everybody just told you what you'd be good at, and I was just the loudest one." }
        ] },
        { t: "It's a good poster.", notes: 2, then: [
          { s: 'cherry', f: 'happy', t: "It's a terrible poster. It's the best terrible poster I've ever seen. The sun has CHEEKS." },
          { s: 'cherry', f: 'sad', t: "...You stayed up all weekend on the cheeks. I fell asleep on your floor at one and woke up at five and you were still doing the cheeks." }
        ] },
        { t: "You were trying to help.", notes: 3, then: [
          { s: 'cherry', f: 'serious', t: "Don't do that. Don't do the nice thing. You always do the nice thing when I deserve to be yelled at." },
          { s: 'cherry', f: 'neutral', t: "Just once I want you to yell at me. It'd be so much easier. I'd know where to put it." }
        ] }
      ] },
      { n: "The sun on the poster smiled up at them both. Somewhere inside Solar, under her ribs, where she couldn't have pointed to it, something small ticked once, like a pin dropped on a desk in a room down the hall, and she touched the glitter in the corner of the card and it came off on her fingertip, gold, the way it had apparently been coming off on everything for months, in another school, on another girl's hands." },
      { s: 'cherry', f: 'neutral', t: "I'm going to say something and then we're never talking about it again." },
      { s: 'cherry', f: 'serious', t: "I don't care if you win. That's not true. I care a lot. I want you to destroy him. But if you lose I'm not going to love you any less, and if you quit I'm not going to love you any less, and if you drop out of school and become a Wild-Duck manager I'm going to eat there every day and complain about the service." },
      { s: 'cherry', f: 'neutral', t: "You're not a poster. That's all. Okay. Done. Never again." },
      { choose: [
        { t: "(Roll up the poster. Give it to her.)", notes: 3, flag: { 'cherry-poster': true }, then: [
          { n: "She rolled it carefully, glitter side in, and held it out. Cherry looked at it for a long time and then took it and put it under her arm like a baguette." },
          { s: 'cherry', f: 'neutral', t: "I'm keeping this. It's going on my wall. I'm going to throw darts at it. Lovingly." },
          { s: 'cherry', f: 'serious', t: "Tell Mitsuru I stole it. I want the credit." }
        ] },
        { t: "(Put it back in Mitsuru's cabinet. It's safe there.)", notes: 3, then: [
          { n: "She put it back on the shelf in the cabinet by the window, where it had been since October, and closed the glass door on it, gently. Cherry watched her do it with her arms folded." },
          { s: 'cherry', f: 'neutral', t: "...Yeah. Okay. That's good. Somebody who isn't me should be in charge of it." }
        ] },
        { t: "Never talking about it again.", notes: 2, then: [
          { s: 'cherry', f: 'neutral', t: "Never." },
          { s: 'cherry', f: 'happy', t: "...Okay, we can talk about the cheeks. The cheeks are fair game forever." }
        ] }
      ] },
      { n: "In the hallway Mitsuru was standing exactly where she'd said she'd be, reading nothing on the bulletin board, and as Cherry passed she said, without turning her head, that visitors were supposed to sign in at the office, and Cherry said, without turning hers, that she'd sign in next time, and both of them knew there was going to be a next time and neither of them was going to sign anything." }
    ] },

    { after: '11/27', title: '4: the popular kids', place: "Iwatodai Strip · Yeobo's Cafe", time: 'After School', music: 'day', scene: [
      { n: "Yeobo's had turned up on the Strip one week in November like it had always been there, wedged between the ramen shop and a shuttered pachinko place, with its windows fogged gold and its hand-lettered sign and the smell of butter coming out under the door, and Sunoo behind the counter in an apron, beaming at everyone who came in like they were his favorite customer, because they were." },
      { n: "Cherry had refused to go in for two weeks on principle. The principle being that it belonged to Jungwon's friends, and Jungwon's friends were, she said, the popular kids, the preppy freaks, the flower boys, and she had a policy, and the policy was older than this universe." },
      { n: "She was in it now. Solar had dragged her by the wrist the way, apparently, Cherry used to drag her. She was at a table by the window with her coat still on and her arms folded, glaring at the menu, while Sunoo approached with his order pad like a man approaching a nervous horse." },
      { s: 'sunoo', f: 'happy', t: "Cherry! Hi! You're not going to threaten me again, are you?" },
      { s: 'cherry', f: 'neutral', t: "Depends on the croissants." },
      { s: 'sunoo', f: 'happy', t: "Oh, they're good today. I made them myself this morning. At five! It's very relaxing. Two? On the house. Any friend of Solar's." },
      { s: 'cherry', f: 'serious', t: "I'm not a friend of Solar's. I'm her best friend. There's a difference." },
      { s: 'sunoo', f: 'happy', t: "Of course! Then three. On the house." },
      { n: "He went away humming. Cherry watched him go with the face of a woman who had come prepared for a war and been handed a croissant." },
      { s: 'cherry', f: 'neutral', t: "I hate that he's nice. I didn't think any of them were actually decent human beings, and then there's him, being decent, at five in the morning, on purpose." },
      { n: "The bell over the door went. A boy came in out of the cold with his collar up and his hair falling into his eyes on purpose, and a fake flower, a silk rose, pinned to his jacket where nobody would have put a flower unless they wanted to be asked about it. He saw their table. He changed direction without seeming to." },
      { s: 'sunghoon', f: 'neutral', t: "Cherry Kim. You crossed a whole dimension to see me. I'm flattered." },
      { s: 'cherry', f: 'serious', t: "I crossed a dimension to see HER. You're a coincidence. You're mold. You grow wherever." },
      { s: 'sunghoon', f: 'neutral', t: "I do like them feisty." },
      { s: 'cherry', f: 'serious', t: "Take that fake flower and..." },
      { s: 'sunoo', f: 'serious', t: "SUNGHOON. Counter. Now. You're scaring my customers." },
      { n: "He went, unhurried, and leaned on the counter with his back to them, and said something to Sunoo that made Sunoo put his face in his hands. And Solar, who had been watching all of it with her chin in her palm, watched Cherry, which was more interesting. Cherry had touched her hair. When the bell went. Before she'd even seen who it was. One quick hand to the back of her head, smoothing, the way you'd check your reflection in a dark window." },
      { choose: [
        { t: "You fixed your hair when he came in.", notes: 3, flag: { 'cherry-fan': true }, then: [
          { s: 'cherry', f: 'surprised', t: "..." },
          { s: 'cherry', f: 'serious', t: "I did NOT. There's a draft. There's a massive draft in here. Sunoo should get it looked at. It's a health code thing." },
          { n: "Her ears had gone red. It was warm in Yeobo's. It wasn't that warm." }
        ] },
        { t: "Who is he?", notes: 2, then: [
          { s: 'cherry', f: 'neutral', t: "Nobody. A fan. He's a fan. I have several." },
          { s: 'cherry', f: 'serious', t: "He flirts with everything that moves. He'd flirt with that coat rack. Don't ever take a flower from him." }
        ] },
        { t: "(Say nothing. Eat your croissant.)", notes: 2, then: [
          { n: "Solar ate her croissant and said nothing, and Cherry watched her say nothing with growing suspicion, and finally said *what,* and Solar said *nothing,* and Cherry said *that's a loud nothing,* and they left it there, on the table between them, like a bill neither of them was going to pick up." }
        ] }
      ] },
      { n: "The croissants came, three of them, warm and flaking onto the plate, and Cherry ate hers in four bites without looking up, and then ate half of Solar's, and then, when Sunoo came back to ask how they were, looked him dead in the eye and said they were fine, and asked for two more, to go." },
      { s: 'cherry', f: 'neutral', t: "Don't look at me like that. They're for Junkyu. He's been sad." },
      { s: 'cherry', f: 'serious', t: "And don't start. Don't you start with *maybe the popular kids aren't so bad.* You said that at home once and then you ran against their president." },
      { choose: [
        { t: "You can like the croissant and still hate them.", notes: 3, then: [
          { s: 'cherry', f: 'happy', t: "...Yeah. Yeah, okay. That's legal. That's a legal position." }
        ] },
        { t: "You're protecting me.", notes: 3, then: [
          { s: 'cherry', f: 'neutral', t: "I'm always protecting you. You never notice. You think I'm just mean." },
          { s: 'cherry', f: 'sad', t: "I am mean. I'm also protecting you. It's both. It's always both." }
        ] },
        { t: "Maybe they aren't so bad.", notes: 1, then: [
          { s: 'cherry', f: 'serious', t: "I'm going to pretend you didn't say that so I don't have to tell Jihoon. He'd have a stroke. It'd be fun to watch, but still." }
        ] }
      ] },
      { n: "Her phone buzzed on the table, face down. She turned it over, looked at it, and turned it face down again in one motion, too fast, and put her hand flat on top of it like it might get up and leave." },
      { n: "When they left, Sunoo waved at them from the counter with both hands, and Sunghoon lifted two fingers off the counter without turning around, and Cherry, at the door, without turning around either, lifted one hand over her shoulder in what might, generously, have been a wave back. At somebody." },
      { s: 'cherry', f: 'neutral', t: "Don't tell anyone I did that. That was for Sunoo. Specifically Sunoo." }
    ] },

    { after: '12/1', title: '5: the rink', place: 'Port Island · Seaside Park', time: 'After School', music: 'joy', scene: [
      { n: "Somebody had built a rink in Seaside Park for December, a long white oval on the grass by the water with a plywood barrier painted with snowmen and a booth that rented skates in every size except yours, and the speakers on poles played Christmas songs a little too fast, and the air coming in off the bay was cold enough that it hurt to breathe through your nose." },
      { n: "Cherry had found it the day it opened. She had come back and announced it at dinner in the dorm like a war correspondent, and then, when Junpei asked if she could skate, had looked at him for so long that Junpei had apologized." },
      { n: "She could skate. That was the first thing. Solar sat on the bench lacing rented skates that smelled of other people's feet and watched her go out onto the ice, and Cherry went out the way she walked into a room she intended to win, without looking down, without holding anything, and took the first long curve so cleanly that a family by the barrier stopped to watch." },
      { s: 'cherry', f: 'happy', t: "Don't clap. Don't you dare clap. I can hear you thinking about clapping." },
      { n: "The second thing was that Solar couldn't. Her body had known how to hold an Evoker before anyone had shown her. It had known the shape of a dark stairwell and where to put her feet on a roof in the green and how to stand on a stage when someone said her name. It had no idea at all what to do on the ice. She stood up off the bench and her ankles folded inward like wet paper and she grabbed the barrier with both hands, and she held it, and her body, for the first time all year, had nothing to tell her." },
      { s: 'cherry', f: 'neutral', t: "Oh, this is the best day of my life. You're a baby giraffe. You're a baby giraffe on a frozen lake." },
      { s: 'cherry', f: 'serious', t: "Okay. Okay. I'm not going to laugh. I'm going to laugh a little. Give me your hand." },
      { choose: [
        { t: "(Let go of the barrier.)", notes: 3, needs: { courage: 3 }, flag: { 'cherry-skated': true }, then: [
          { n: "She let go. It was, for one long second, like stepping off a roof. Then Cherry had both her hands, skating backward in front of her, slow, talking the whole time, *knees, bend your knees, you're not a plank, stop being a plank,* and the ice went by under them, white and scored with other people's circles, and they were moving, actually moving, and Solar laughed out loud from sheer terror and Cherry laughed back from sheer joy." },
          { s: 'cherry', f: 'happy', t: "Look at you. Look at you go. You're terrible. You're doing it." }
        ] },
        { t: "(Hold the barrier. Let her tow you along it.)", notes: 3, then: [
          { n: "Cherry took her by the sleeve and towed her the whole length of the rink along the barrier, hand over hand, past the painted snowmen, like a tugboat with a barge, narrating the whole way in the voice of a nature documentary about a very stupid animal." },
          { s: 'cherry', f: 'neutral', t: "And here we see the knockoff in her natural habitat. Clinging. Afraid. Yet weirdly determined." }
        ] },
        { t: "(Sit back down. Watch her instead.)", notes: 2, then: [
          { n: "Solar sat back down on the bench and unlaced one skate and watched, and Cherry, after a show of disgust, skated for her, circles and a turn and a long backward glide on one foot that looked as if it were costing her nothing, and came back and leaned on the barrier, pink in the face, pretending not to be pleased." }
        ] }
      ] },
      { n: "Later they sat on the barrier with paper cups of cocoa from a cart that charged too much, their breath and the steam going up together, and the bay beyond the rink going dark blue and then darker, and the lights of the Port Island towers coming on one at a time on the far side of the water." },
      { s: 'solar', f: 'neutral', t: "When did you learn to do that?" },
      { s: 'cherry', f: 'neutral', t: "This year. It's a recent hobby. Don't ask why. There's a why." },
      { s: 'cherry', f: 'serious', t: "The first time I went, somebody stood me up. Don't ask who. And then somebody turned up who wasn't supposed to. Don't ask who that was either. And I was already there, and I'd paid for the skates, so." },
      { n: "She drank her cocoa. Her face was doing something it had clearly been told not to do. She looked out at the dark water instead of at Solar, the way you look out of a train window when the person across from you is crying, except the person was her." },
      { choose: [
        { t: "(Don't ask.)", notes: 3, then: [
          { s: 'cherry', f: 'neutral', t: "See. This is why it's you. You never ask the thing. You just sit there and wait, and then I tell you anyway, like an idiot." },
          { s: 'cherry', f: 'sad', t: "He's annoying. He's so annoying. That's all you're getting. That's all there is to get." }
        ] },
        { t: "Do you like the one who turned up?", notes: 2, then: [
          { s: 'cherry', f: 'serious', t: "I'm not answering that on ice. I could die. People die on ice all the time. It's in the news." },
          { s: 'cherry', f: 'neutral', t: "...Ask me on dry land sometime. Not soon. Sometime." }
        ] },
        { t: "Whoever stood you up is an idiot.", notes: 3, then: [
          { s: 'cherry', f: 'happy', t: "He is. He's the sweetest idiot alive. That's the worst part. You can't even hate him properly." },
          { n: "She said it fondly, and then frowned at her cocoa as if it had said it." }
        ] }
      ] },
      { n: "On the walk back to the monorail she took a picture of Solar without asking, under a streetlight, red-nosed, with her scarf coming undone, and looked at it on the platform and made a sound like she'd been punched, and wouldn't show her." },
      { phone: [
        { from: 'cherry', t: "sent u the pic" },
        { from: 'cherry', t: "u look like a baby giraffe that just learned about death" },
        { from: 'cherry', t: "its my lockscreen now. dont talk to me abt it" },
        { from: 'solar', t: "delete it" },
        { from: 'cherry', t: "absolutely not. its going in the wedding slideshow. urs. or mine. whoever goes first" }
      ], contact: 'Cherry' }
    ] },

    { after: '12/5', title: '6: back row', place: 'Iwatodai Dorm · Lounge', time: 'Evening', music: 'dorm', scene: [
      { n: "Finals were the week after next, and the dorm had gone quiet in the particular way it went quiet before exams, everybody at a different table with their own lamp and their own sighing, Yukari with highlighters in four colors, Junpei with one textbook open to a page he'd been on for an hour, Fuuka somewhere upstairs with headphones on, and the radiator under the window ticking like something counting down." },
      { n: "Solar had math. She had a sheet of practice problems and a set of notes in very small, very neat handwriting that was not hers, with little corrections in the margins in a different color, and she had been on the third problem for twenty minutes, and the third problem had been winning." },
      { n: "Cherry had come over at seven to help. Her definition of helping was lying upside down on the sofa beside her with her boots over the back of it and her head hanging off the cushion, reading Solar's notes the wrong way up and chewing gum." },
      { s: 'cherry', f: 'neutral', t: "Is that his handwriting? Is he still doing your calculus? Of course he is. He'd do your calculus in a burning building." },
      { s: 'cherry', f: 'serious', t: "You know you can barely add, right? You're the worst at math of anyone I've ever met, and I'm including me, and I don't go to class." },
      { choose: [
        { t: "You could help, you know.", notes: 2, then: [
          { s: 'cherry', f: 'neutral', t: "I am helping. I'm emotionally present. That's the hardest part of studying. Everyone knows that." }
        ] },
        { t: "Why don't you go to class?", notes: 3, then: [
          { s: 'cherry', f: 'neutral', t: "Because it's boring, and because my parents pay a fortune for that school, so nobody's ever going to kick me out. It's the one good thing about being rich and stupid." },
          { s: 'cherry', f: 'serious', t: "I'm not stupid. I'm uninterested. There's a difference. Jaehyuk keeps telling me I won't graduate. Jaehyuk can graduate for both of us." }
        ] },
        { t: "(Throw a highlighter at her.)", notes: 2, then: [
          { n: "It bounced off her forehead. She didn't flinch. She put it in her mouth like a cigarette and kept reading the notes upside down, and Yukari, across the room, made a small involuntary sound and looked back at her own work very fast." }
        ] }
      ] },
      { n: "She turned the right way up eventually, with a lot of complaining, and sat beside Solar with her knees pulled up, and looked at the third problem for a while like it was a person who'd insulted her mother. Then she said, not about the problem at all, that Solar always used to sit in the back row." },
      { s: 'cherry', f: 'neutral', t: "In the one class we've got together. With me and Hyunsuk and Asahi. Last row, by the window. You could've sat at the front with Jaehyuk and the people who take notes. You never did. You sat with us, and we never let you hear a single thing the teacher said." },
      { s: 'cherry', f: 'neutral', t: "And there was this one time. You'd done something we didn't like. I don't even remember what. It doesn't matter. We weren't talking to you for a few days." },
      { s: 'cherry', f: 'sad', t: "And you came in that morning and stood at the front of the room with your books against your chest like a little kid on the first day of school, because you didn't know if you were allowed to sit with us anymore. You just stood there. Like you were waiting to be told." },
      { n: "Solar's hand, on the sheet of problems, had gone very still. She could feel something on the inside of her wrist that wasn't there. A grip. Somebody's fingers closing around it, hard, and a pull, across a room, between desks, toward a seat by a window that was already hers." },
      { s: 'cherry', f: 'neutral', t: "So I got up. And I grabbed you. And I dragged you to the back and put your books down on your desk for you and sat you in your seat, and you asked if I was mad, and I said no." },
      { s: 'cherry', f: 'serious', t: "I said, I just care about you, and I don't want you to get hurt by some fucking idiots." },
      { choose: [
        { t: "(Look at your wrist.)", notes: 3, then: [
          { n: "She looked at her wrist. There was nothing on it. Cherry saw her look, and went quiet, and then reached over without a word and closed her hand around it, exactly there, exactly as hard, and held it for a second, and let go, and went back to glaring at the third problem as if she hadn't done anything at all." }
        ] },
        { t: "I'd sit in the back again.", notes: 3, then: [
          { s: 'cherry', f: 'neutral', t: "You'd better. I'm saving it. The seat. It's got your name scratched under the desk. I did that. With a compass. In like second year." },
          { s: 'cherry', f: 'sad', t: "...Nobody's sat in it. I won't let them." }
        ] },
        { t: "Were you the idiots, in that sentence?", notes: 2, then: [
          { s: 'cherry', f: 'surprised', t: "..." },
          { s: 'cherry', f: 'happy', t: "Okay, rude. Fair. A little bit. We were some of the idiots. I'm working on it." }
        ] }
      ] },
      { n: "They looked at the third problem together. Cherry read it out loud twice, slowly, in the voice of someone reading a ransom note, and then said she didn't understand a single word of it and that it was probably written in a curse." },
      { choose: [
        { t: "(Explain it to her until she gets it.)", notes: 3, needs: { academics: 3 }, then: [
          { n: "Solar explained it. Slowly, the way the neat handwriting in the margins had explained it to her, one step and then the next, and somewhere around the fourth step she realized she understood it herself, all at once, the way you suddenly see the second picture in an optical illusion, and she kept going, and Cherry's face went from bored to suspicious to something like horror." },
          { s: 'cherry', f: 'surprised', t: "...I understood that. Why did I understand that. Take it back. I don't want it. Put it back in your head." },
          { s: 'cherry', f: 'serious', t: "He's turning you into one of them. This is how it starts. First it's calculus. Then you're carrying a planner." }
        ] },
        { t: "(Give up. Make tea.)", notes: 2, then: [
          { n: "They gave up. Solar made tea in the kitchen and Cherry followed her in and sat on the counter, which you weren't supposed to do, and told her everything that was wrong with every teacher she'd ever had, in order, by grade, and when they came back to the lounge the third problem was still there, waiting, and somehow it didn't matter as much." }
        ] },
        { t: "(Ask Yukari.)", notes: 2, then: [
          { s: 'yukari', f: 'neutral', t: "...Oh. Oh, sure. Give me that. Wait. You're both looking at this upside down." },
          { n: "They were. Cherry had turned the sheet when she sat up, and Solar had followed it, and Yukari looked from one of them to the other with an expression of great patience that was close to breaking." }
        ] }
      ] },
      { n: "Cherry went home at ten, to the guesthouse, in the cold, refusing to be walked to the station, and Solar did the rest of the sheet alone at the lounge table with the lamp on and the radiator counting down. When she went upstairs she found a piece of gum stuck to the corner of her notes, carefully, still in its wrapper, and on the wrapper in black pen, very small, *for the exam. chew it at the hard ones. u got this, knockoff.*" }
    ] },

    { after: '12/11', title: '7: come home', place: 'Iwatodai Strip', time: 'Night', music: 'night', scene: [
      { n: "It was the first night cold enough for frost, and the Strip had that hard, scrubbed look it got in December, every edge too sharp, every light too bright, the pavement already glittering where the puddles had been, and the ramen shop's steam going straight up into the dark like a column holding up the sky." },
      { n: "They'd eaten at Wild-Duck. Cherry had been quiet all through it, not angry quiet, the other kind, turning a fry over and over in her fingers without eating it, which Solar had never once seen her do. And now they were walking toward the station with their hands in their pockets and their breath going up white, and halfway down the Strip, outside the shuttered pachinko place, Cherry stopped walking." },
      { s: 'cherry', f: 'serious', t: "COME HOME." },
      { n: "She yelled it. Not at Solar, exactly. At the street. At the frost and the neon and the sky, at the top of her voice, so that a man coming out of the bathhouse with a towel around his neck stopped dead, and a cat went over a wall, and somewhere above them a window slid open and a woman's voice asked what on earth was going on." },
      { s: 'cherry', f: 'serious', t: "Come HOME, Solar. Come home. I'm done being cool about it. I've been cool about it for a month. It's killing me. I'm not a cool person. I never have been. I'm a yelling person. Come HOME." },
      { n: "The window slid shut. The man with the towel moved on. Cherry stood in the middle of the pavement breathing hard, her breath going up in clouds, and her hands had come out of her pockets and were fists at her sides, and her eyes were wet and furious, and Solar stood in front of her and let it land on her the way you let a wave hit you when you've decided not to run from it." },
      { choose: [
        { t: "Okay.", notes: 2, then: [
          { s: 'cherry', f: 'surprised', t: "...Okay? Okay what? Okay you'll come, or okay you heard me?" },
          { s: 'solar', f: 'neutral', t: "Okay, I heard you." },
          { s: 'cherry', f: 'sad', t: "...Yeah. That's fair. That's the honest one. I hate it." }
        ] },
        { t: "Yell it again. I'm listening.", notes: 3, then: [
          { s: 'cherry', f: 'neutral', t: "...Come home." },
          { n: "She didn't yell it the second time. She said it like a fact, to the frost on the pavement, and then she pressed the heels of both hands into her eyes, hard, as though she could push it all back in." }
        ] },
        { t: "(Put your arm through hers. Keep walking.)", notes: 3, then: [
          { n: "Solar put her arm through Cherry's, the way Cherry kept doing to her, and started walking again, and after one stiff step Cherry walked too, and they went on toward the station like that, linked, saying nothing, and Cherry's arm was shaking, and it wasn't the cold." }
        ] }
      ] },
      { n: "They sat on the low wall outside the station, under the clock. The trains came and went behind them in long lit boxes full of tired people. Cherry got her gum out and didn't open it. She turned it over in her fingers the way she'd turned the fry." },
      { s: 'cherry', f: 'neutral', t: "I'm going to tell you something. You don't remember it. That's sort of why I have to tell you. If I don't do it now I'll have to carry it through a door." },
      { s: 'cherry', f: 'serious', t: "I did something, once. Back home. Behind your back. I decided somebody was going to hurt you, and I was so sure, I was so sure, and I did a shitty thing to stop it. With Jihoon, of all the people in the world." },
      { s: 'cherry', f: 'sad', t: "I was wrong. You found out. You cried. In front of everybody. And then about a day later you sat on your bed with me and told me it was okay, and that you loved me, and that it was okay, about forty times, until I believed you." },
      { s: 'cherry', f: 'sad', t: "You forgave me in a day. I still haven't." },
      { choose: [
        { t: "I forgive you. Again.", notes: 3, flag: { 'cherry-forgave': true }, then: [
          { s: 'cherry', f: 'serious', t: "Don't. You don't even know what it was." },
          { s: 'solar', f: 'neutral', t: "I know you." },
          { n: "Cherry looked at her. Then she looked up at the station clock for a long time, very hard, the way you look at something bright when you're trying to make your eyes do something else." }
        ] },
        { t: "Tell me what you did.", notes: 2, then: [
          { s: 'cherry', f: 'neutral', t: "No. That's the point. I'm not doing your remembering for you. I'm not deciding what you get to know." },
          { s: 'cherry', f: 'serious', t: "I'm just telling you I did it. So that when it comes back you know I told you first. That's all I get. That's all I want." }
        ] },
        { t: "(Take her hand. The one with the gum in it.)", notes: 3, flag: { 'cherry-forgave': true }, then: [
          { n: "Solar took it, gum and all. Cherry's hand was freezing, and it held on hard for a second, the way it had held her wrist in a story about a classroom, and then let go and shoved itself back in her pocket, gum and all." },
          { s: 'cherry', f: 'neutral', t: "Okay. Okay. Don't be nice. I'll cry in a train station. That's worse than a karaoke place. There's lighting." }
        ] }
      ] },
      { s: 'cherry', f: 'neutral', t: "So here's the thing. Everybody's asking you. Jihoon's going to do it at the arcade, I can feel it. Junkyu's going to cry at you. Jungwon's going to do some polite thing where it doesn't sound like asking." },
      { s: 'cherry', f: 'serious', t: "And I yelled. On a street. I'm keeping it. I'm not taking it back. Come home." },
      { s: 'cherry', f: 'sad', t: "But I'm not deciding for you. I did that once. I'm never doing it again. So it's *come home,* and then the other half, which is: only if you want to. Only if it's yours." },
      { s: 'cherry', f: 'neutral', t: "I've never said that to you in my life. It tastes disgusting." },
      { ifMet: 'wren', then: [
        { n: "Behind them, inside the station, there was a bench by the platform stairs, and on it, under the strip lights, a girl in a porter's coat too big for her and a cap pulled low, sitting very still with a ticket in her lap, waiting for something. Cherry looked at her through the glass doors for a while. Then she looked away, quickly, the way you look away from a mirror in a restaurant bathroom when you weren't expecting one." },
        { s: 'cherry', f: 'neutral', t: "Yunjin said a thing at the oden place. About that girl. Everybody laughed. I'm not saying it." },
        { s: 'cherry', f: 'serious', t: "She looks at you like she's scared you're going to leave. I know that look. I've been doing it in mirrors for a month." }
      ] },
      { n: "Her train came. She stood, and stamped her boots against the cold, and wound Solar's scarf twice around her neck, which had been hanging loose, and tucked the ends in with two hard jabs of her fingers, like you'd tuck in a child, or a knife." },
      { s: 'cherry', f: 'neutral', t: "You always forget to do that. You'll die of a cold and I'll have to give the eulogy and I'll say mean things in it. True things. Mean and true." }
    ] },

    { after: '12/27', title: '8: two scared idiots', place: "Iwatodai Dorm · Solar's Room", time: 'Late Night', music: 'night', scene: [
      { n: "Cherry had decided, somewhere between Christmas and the end of the year, that she was sleeping over. Not at the guesthouse. At the dorm. In Solar's room. On the floor. Mitsuru had been informed, rather than asked, and had taken it, Yukari said, like a woman informed of the weather." },
      { n: "So now it was one in the morning and the light was off and the radiator was ticking, and Cherry was lying on a borrowed futon on the floor with her hands behind her head, staring at the ceiling, and Solar was lying on the bed staring at the same ceiling, and neither of them had said anything for a while, and outside the window it had started, very lightly, to snow." },
      { s: 'cherry', f: 'neutral', t: "We used to do this all the time. Your room. Your bed. Nana in the way, snoring like a man. You'd talk and talk and then fall asleep in the middle of a word." },
      { s: 'cherry', f: 'neutral', t: "And I'd lie there and finish the word for you. Out loud. To nobody." },
      { choose: [
        { t: "What words?", notes: 3, then: [
          { s: 'cherry', f: 'neutral', t: "Stupid ones. *Tomorrow.* *Probably.* Once you fell asleep in the middle of *president* and I lay there for an hour thinking about how you'd never once finished saying it in your life." }
        ] },
        { t: "(Talk until four.)", notes: 3, then: [
          { n: "They talked until four. About nothing. The variety show and the rink and the man with the sandwich board and Junpei's theory about the vending machine on the second floor. Cherry did most of the talking. Solar did most of the laughing. At midnight the Dark Hour came and went over them, green, and Cherry didn't even pause, just kept talking through it like it was a commercial break." }
        ] },
        { t: "Did you finish them right?", notes: 2, then: [
          { s: 'cherry', f: 'neutral', t: "Always. I always finished them right. You'd have woken up and argued with me if I hadn't." }
        ] }
      ] },
      { ifFlag: 'call-H', then: [
        { s: 'cherry', f: 'neutral', t: "Jihoon sleeps with that dog. The crane game dog. I saw it in his room at the guesthouse. Face on the pillow. Tucked in." },
        { s: 'cherry', f: 'happy', t: "Don't tell him I told you. Tell everyone else." }
      ] },
      { n: "Her phone lit up on the floor beside the futon, face down, a white line of light around its edges on the tatami, and buzzed once. She didn't look at it. It buzzed again." },
      { ifFlag: 'cherry-fan', then: [
        { s: 'solar', f: 'neutral', t: "Is that the draft?" },
        { s: 'cherry', f: 'surprised', t: "..." },
        { s: 'cherry', f: 'serious', t: "I hate you. I hate that you remembered that. You don't remember your own birthday and you remember that." },
        { n: "The phone buzzed a third time. Cherry put her arm over her eyes. In the dark it was easier to say things. It was why people had invented the dark." },
        { s: 'cherry', f: 'neutral', t: "It's not Hyunsuk. Hyunsuk is... Hyunsuk is Hyunsuk. I've known him since forever. He's easy. He's like a sofa. That's not an insult. I love sofas." },
        { s: 'cherry', f: 'sad', t: "And the other one is a nightmare. He's a flower boy. He's everything I hate. He calls me every night. Called. At home. And here he just texts, because he's in the room next to Jungwon's and the walls are thin." },
        { s: 'cherry', f: 'sad', t: "I don't know what I'm doing, Sol. I always know what I'm doing. That's my whole thing." },
        { choose: [
          { t: "Let yourself have fun. Give it time. You don't have to know yet.", notes: 3, then: [
            { s: 'cherry', f: 'surprised', t: "..." },
            { s: 'cherry', f: 'neutral', t: "...You said that. You said that exactly. At home. In a hallway. Word for word." },
            { s: 'cherry', f: 'happy', t: "Wow. Since when are you a philosopher. Even with amnesia. Even in another universe. Unbelievable." }
          ] },
          { t: "You don't have to pick anyone tonight.", notes: 3, then: [
            { s: 'cherry', f: 'neutral', t: "No. Tonight I'm on your floor. That's the only thing I picked." }
          ] },
          { t: "(Throw a pillow at the phone.)", notes: 2, then: [
            { n: "The pillow landed on the phone and smothered it, and the light went out, and Cherry laughed into her arm, and the phone buzzed once more, muffled, under the pillow, and they both ignored it so hard it was almost a sport." }
          ] }
        ] }
      ], else: [
        { s: 'cherry', f: 'neutral', t: "Nobody. It's nobody. It's a fan. Go to sleep." },
        { n: "She turned the phone over and looked at it, and her face in the white light did something private and annoyed and soft all at once." },
        { choose: [
          { t: "A fan who texts at one in the morning.", notes: 3, then: [
            { s: 'cherry', f: 'serious', t: "Fans are very dedicated. That's what makes them fans. Look it up." },
            { s: 'cherry', f: 'neutral', t: "...I'll tell you about it on dry land. I said that. I'm keeping to it. Not tonight. Tonight's yours." }
          ] },
          { t: "(Say nothing. Let her have it.)", notes: 3, then: [
            { n: "Solar said nothing. Cherry typed something short, one-handed, and turned the phone off, actually off, and put it under the futon, which Solar had a feeling was the nicest thing she'd done for anyone all week." }
          ] },
          { t: "Turn it off.", notes: 2, then: [
            { s: 'cherry', f: 'neutral', t: "I was going to. I was already going to. Don't take credit." },
            { n: "She turned it off, and put it under the futon, and lay back down with her arm over her eyes." }
          ] }
        ] }
      ] },
      { n: "The snow went on outside, so light it was barely there, catching the streetlight on the way down. The radiator ticked. And then, because it was dark, and because it was late, and because nothing had changed since the last time they'd talked about it and everything had, Cherry said what she'd come over to say." },
      { ifFlag: 'route-H', then: [
        { s: 'cherry', f: 'neutral', t: "I heard it. On the twenty-first. At midnight. Everybody from home heard it. The star thing, going off like a bell in your chest. Junkyu cried so hard he got hiccups. Jihoon pretended he had something in his eye for an hour." },
        { s: 'cherry', f: 'sad', t: "You're coming home." },
        { s: 'cherry', f: 'neutral', t: "I'm not going to be weird about it. I'm going to be SO weird about it. I'm going to be the weirdest anybody's ever been." }
      ], else: [
        { ifFlag: 'route-true', then: [
          { s: 'cherry', f: 'neutral', t: "Something rang on the twenty-first. At midnight. Everybody heard it. Ours, and not only ours. Jihoon said it sounded like a bell and a ring and a star all at once, which is a stupid sentence, and he was right." },
          { s: 'cherry', f: 'serious', t: "You've been different since that night. You look like you're going everywhere at once. I don't understand it. I don't need to. I just want to be on the list." }
        ], else: [
          { ifFlag: 'route-stay', then: [
            { s: 'cherry', f: 'neutral', t: "Nothing rang. On the twenty-first. Everybody from home was listening and nothing rang, and then Jihoon looked at the dorm across the street for a really long time, and I knew." },
            { s: 'cherry', f: 'sad', t: "You're staying. Here. Aren't you." },
            { s: 'cherry', f: 'neutral', t: "...Okay. I said wherever. In November. I said if it's here I'll hate it and I'll be okay. I meant it. Give me a minute. Give me like a year." }
          ], else: [
            { s: 'cherry', f: 'neutral', t: "Something rang on the twenty-first. At midnight. It wasn't ours. Jihoon pretended he didn't hear it. Junkyu didn't stop asking what it meant until I put my hand over his mouth." },
            { s: 'cherry', f: 'serious', t: "I said wherever. I meant wherever. That's all. I'm not going to say anything else about it. I'm going to say so much about it in about a week." }
          ] }
        ] }
      ] },
      { s: 'cherry', f: 'serious', t: "Can I tell you something in the dark? You're not allowed to look at me." },
      { s: 'cherry', f: 'sad', t: "I'm scared. All the time. Here. I'm scared you'll go and I'm scared you'll stay and I'm scared I'll go home and sit in the back row next to your empty chair and nobody will steal my fries ever again." },
      { s: 'cherry', f: 'neutral', t: "I'm never scared. You know that. I'm the one who's never scared. So this is a big deal. This is a historic event." },
      { choose: [
        { t: "(Reach down off the bed and find her hand.)", notes: 3, then: [
          { n: "She reached down off the side of the bed in the dark and found Cherry's hand on the futon, and Cherry held on, hard, and didn't say anything, and didn't let go, and they lay like that, one on the bed and one on the floor, arms stretched across the gap, until Solar's arm went numb and she didn't move it." }
        ] },
        { t: "I'm scared too.", notes: 3, then: [
          { s: 'cherry', f: 'neutral', t: "I know. You're always scared. You just do it quieter." },
          { s: 'cherry', f: 'happy', t: "Okay. Two scared idiots on a floor. That's fine. That's how all the best sleepovers go." }
        ] },
        { t: "You can come up here. There's room.", notes: 3, then: [
          { s: 'cherry', f: 'neutral', t: "There's not room. You sleep like a starfish. I've got bruises from years of it." },
          { n: "She came up anyway, dragging the blanket, and lay on the edge of the bed with her back to Solar's back, and complained about the elbow for about four minutes, and then her breathing went slow, and she was asleep, mid-complaint, in the middle of a word." }
        ] }
      ] },
      { n: "In the morning neither of them could remember who had fallen asleep first. Cherry said it was Solar, in the middle of a word, and that she'd finished it for her, out loud, to nobody, and wouldn't say what it was. She said it was hers now. She said Solar could have it back when she came to get it." }
    ] },

    { after: '1/9', title: '9: first', place: 'Iwatodai Dorm · Lounge', time: 'Evening', music: 'joy', scene: [
      { n: "It came to a head, finally, in the lounge, one evening in January, during Cherry's variety show. Jihoon came in out of the cold with snow on his shoulders and sat on the arm of the sofa and said something about the way Solar held her chopsticks that only somebody who'd watched her eat since preschool could have known, and Cherry picked up the remote and turned off the television." },
      { s: 'cherry', f: 'serious', t: "Okay. We're doing this. Right now. In front of witnesses." },
      { s: 'jihoon', f: 'serious', t: "Fine. FINE. Let's do it. I've been ready since we were four." },
      { n: "Junpei, who had been eating chips on the floor, looked from one to the other and slowly slid backward out of the blast radius. Yukari put down her magazine. Koromaru lifted his head off his paws and looked at them both with the deep, wise patience of a dog who had seen a lot of humans shout." },
      { s: 'cherry', f: 'serious', t: "Who sat her down in the back row when she thought everybody hated her." },
      { s: 'jihoon', f: 'serious', t: "Who's known her since preschool. Since PRESCHOOL. Since glue." },
      { s: 'cherry', f: 'serious', t: "Who did her hair for her first ever dance. Curled it. Every piece. With enough hairspray to hold up a building." },
      { s: 'jihoon', f: 'serious', t: "Who brings the ice cream. Every time. Every time she's sad. Large tub. Before she even says why." },
      { s: 'cherry', f: 'neutral', t: "Because you've got a CAR. That's not loyalty, that's transportation." },
      { s: 'jihoon', f: 'serious', t: "Who's the light of her disgusting life." },
      { s: 'cherry', f: 'neutral', t: "That's not a fact. That's a symptom." },
      { ifFlag: 'cherry-said-you', then: [
        { s: 'cherry', f: 'happy', t: "And anyway it doesn't matter, because she already answered. In November. In a Wild-Duck. First day. I asked who her best friend was and she said me. Before she knew anything. Before she knew my NAME, basically." },
        { s: 'jihoon', f: 'surprised', t: "That's inadmissible. She had amnesia. You took advantage of a sick woman." },
        { s: 'cherry', f: 'neutral', t: "The body knows, Jihoon. The body knows who's first." }
      ] },
      { ifFlag: 'xmas-jihoon', then: [
        { s: 'cherry', f: 'serious', t: "And don't bring up Christmas. Christmas is a different list. I'm not on that list. I don't WANT to be on that list. It's a disgusting list." },
        { s: 'jihoon', f: 'surprised', t: "Nobody said anything about Christmas! Why are you bringing up Christmas!" },
        { n: "He had gone red to the ears. Junpei, on the floor, made a sound like a tire going down." }
      ] },
      { n: "They both turned to look at her. The whole lounge turned to look at her. Even Koromaru." },
      { s: 'cherry', f: 'serious', t: "Well? Who's first?" },
      { choose: [
        { t: "Cherry.", notes: 3, then: [
          { s: 'cherry', f: 'happy', t: "HA. HA. Remember who's really in first, Park Jihoon. Write it down. Write it on your pilates mat." },
          { s: 'jihoon', f: 'sad', t: "...This is a dark day. This is the darkest day of my life." },
          { n: "But Cherry, behind his back, where he couldn't see, held up her hand to Solar with two fingers crossed, and then pointed at him, and mouthed *tie,* and put a finger to her lips." }
        ] },
        { t: "Jihoon.", notes: 3, then: [
          { s: 'jihoon', f: 'happy', t: "HA. HA. NUMBER ONE. LIGHT OF HER DISGUSTING LIFE." },
          { s: 'cherry', f: 'serious', t: "..." },
          { n: "Cherry didn't say anything. She turned the TV back on. Then, without looking away from it, she reached over and took Solar's hand on the sofa cushion, and squeezed it, once, hard, which Solar understood meant *good answer, he needed that one.*" }
        ] },
        { t: "You're both in first. It's a tie. It was always a tie.", notes: 3, then: [
          { s: 'cherry', f: 'serious', t: "That's a cop-out." },
          { s: 'jihoon', f: 'serious', t: "That's a political answer." },
          { s: 'cherry', f: 'neutral', t: "...It's a good political answer." },
          { s: 'jihoon', f: 'neutral', t: "She'd have won the election with that." },
          { n: "They looked at each other over her head with the grudging respect of two generals who'd just been told the war was a draw, and Cherry turned the TV back on, and Jihoon slid down off the arm onto the sofa next to Solar, and the three of them watched the variety show without understanding a word, laughing at all the wrong moments." }
        ] },
        { t: "Koromaru.", notes: 2, then: [
          { s: 'koromaru', f: 'happy', t: "Woof." },
          { s: 'cherry', f: 'surprised', t: "..." },
          { s: 'jihoon', f: 'surprised', t: "..." },
          { n: "There was a silence. Then Cherry said the dog was valid, actually, and Jihoon said the dog had been there for her, honestly, and the two of them got down on the floor on either side of Koromaru and argued about which of them he liked better instead, which, Solar thought, watching from the sofa, was the whole point. It had always been the whole point." }
        ] }
      ] },
      { n: "Later, when Jihoon had gone back to the guesthouse through the snow, still talking, and the lounge had emptied out, Cherry stayed on the sofa with her boots on the table and the television murmuring, and said, without looking away from it, that she'd never actually wanted to win." },
      { s: 'cherry', f: 'neutral', t: "The first thing. I mean I do. I want to win everything. But I don't need it. Him and me fighting about it, that's the thing. That's how we say it. You know that, right? Everybody knows that." },
      { s: 'cherry', f: 'sad', t: "If we ever stop fighting about who's first, that's when you should worry. That means one of us isn't there anymore." },
      { choose: [
        { t: "Then keep fighting him. Forever.", notes: 3, then: [
          { s: 'cherry', f: 'happy', t: "Oh, I will. I've got material for decades. I've got a folder." },
          { s: 'cherry', f: 'neutral', t: "...And you'll be there to not pick. That's the deal. You never pick. That's your whole job." }
        ] },
        { t: "You'd miss him.", notes: 2, then: [
          { s: 'cherry', f: 'serious', t: "I'd miss having someone to hate. That's different. That's a hobby." },
          { n: "She said it to the television. It took her a long time to say it, for a short sentence, and she didn't look at Solar while she did." }
        ] },
        { t: "(Turn the TV up. Laugh at the wrong moment with her.)", notes: 3, then: [
          { n: "Solar turned it up. A man on the screen fell into a pool of something, and nobody in the room understood why, and they both laughed at exactly the wrong moment, together, like they'd rehearsed it, and Cherry put her boots back on the table and didn't say anything else for the rest of the show." }
        ] }
      ] }
    ] },

    { after: '1/24', title: "10: i'd run", place: 'Iwatodai Dorm · Front', time: 'Night', music: 'tender', scene: [
      { n: "Cherry was waiting at the bottom of the dorm steps in the cold, the way she'd waited at the school gate and the Wild-Duck door and the rink and the station, with her arms folded and her coat buttoned to the throat and snow in her hair, and she didn't wave when Solar came out. She pointed at the step." },
      { n: "Solar sat. Cherry sat next to her. The street was empty and the streetlight buzzed and the bay was black beyond the buildings, and Cherry took something out of her pocket and put it on the step between them." },
      { n: "Her phone. Its screen lit up the steps, white against the snow, and it showed a group chat, PARK JIHOON HATE CLUB, and at the very top of it, pinned, a message from a long time ago." },
      { phone: [
        { from: 'cherry', t: "cherryblossoms: remember who's really in 1st mf" }
      ], contact: 'PARK JIHOON HATE CLUB' },
      { s: 'cherry', f: 'neutral', t: "I pinned it. Ages ago. So he'd see it every time he opened the chat. Every single time. For the rest of his life." },
      { s: 'cherry', f: 'neutral', t: "That's all. I just wanted you to see it. I don't know why. It's dumb." },
      { n: "And it came up through Solar like a tide coming in over flat sand, all at once and from every direction." },
      { n: "A classroom, the last row by the window, and a hand around her wrist, pulling her between the desks to a seat that was already hers. A bedroom mirror and a curling iron and enough hairspray to hold up a building, and a girl stepping back to admire her work, *you're still you, idiot.* A gym full of plastic chairs and a principal talking into a microphone and, across all of it, a girl making a heart with both hands at her, in front of everyone, without any shame at all. A voice over an intercom, *Cherry Kim, please report to the cafeteria,* and a row of cardboard signs, and a face she had never once seen before or since, the face of a girl who'd just realized she was happy. A phone at midnight. *i dont. but i love u bitch.* A chat at two in the morning. *i need u to run for pres.*" },
      { ifFlag: 'cherry-forgave', then: [
        { n: "And a bed. Two girls cross-legged on it, one of them more frightened than Solar had ever seen her, and Solar's own voice saying *it's okay, it's okay, I love you, it's okay,* as many times as it took. More times than it took. Just to be sure." }
      ] },
      { s: 'solar', f: 'neutral', t: "...You're in first." },
      { n: "She said it in the voice. The real one. Bored, flat, like she was reading it off a receipt. Cherry's whole body went still on the step." },
      { s: 'solar', f: 'neutral', t: "You were always in first. Cherry fucking Kim." },
      { s: 'cherry', f: 'surprised', t: "..." },
      { s: 'cherry', f: 'sad', t: "Don't. Don't you dare do it like that. Don't come back in the middle of a sentence. That's not fair. I already cried in front of you once this year. In a karaoke bar. Full of coffins. That was the allowance." },
      { choose: [
        { t: "You can cry. I won't look.", notes: 3, then: [
          { n: "She looked at the streetlight. Cherry cried, beside her, hard and quick and furious, with her arms still folded, into her own coat collar, the way you'd cry if you'd been saving it since November and had decided to do it all at once to get it over with. It took about a minute. Then she wiped her face on her sleeve and said, thickly, that that hadn't happened, and that if Solar told anyone she'd deny it, and that she had a reputation, and that her eyeliner had cost a lot." }
        ] },
        { t: "(Put your arm around her.)", notes: 3, then: [
          { n: "She put her arm around her. Cherry let her for about one second, stiff as a fence post, and then all at once didn't, and turned and put her face in Solar's shoulder and her fists in Solar's coat and held on like the step was tilting." }
        ] },
        { t: "Your left wing is lower than your right.", notes: 3, then: [
          { s: 'cherry', f: 'surprised', t: "..." },
          { n: "Cherry laughed. It came out of her like something breaking, wet and loud and ugly, in the empty street, and she grabbed Solar by the collar with both hands and put her forehead against Solar's shoulder and laughed and cried into it at the same time, and said *you bitch, you bitch, thank you,* over and over, until it stopped being words." }
        ] }
      ] },
      { s: 'cherry', f: 'neutral', t: "Okay. You're not a knockoff anymore. I'm retiring it. It's going on the wall with the poster. Next to the darts." },
      { s: 'cherry', f: 'neutral', t: "Listen. Whatever door you go through. Whatever happens. Here's the only thing I know." },
      { s: 'cherry', f: 'serious', t: "If I see you, anywhere, I'm going to run at you. I don't run. Running is for Jihoon and people who do pilates. I'll run. Across a gym. Across a parking lot. Across a whole fucking universe." },
      { ifFlag: 'route-H', then: [
        { s: 'cherry', f: 'neutral', t: "It'll be the gym, probably. That's where the door goes, Jihoon thinks. The whole school. Balloons. Everybody. You'll be standing in the middle of it in that armband looking like an idiot." },
        { s: 'cherry', f: 'happy', t: "So don't move. When you see me. Just stand there and let me hit you." }
      ], else: [
        { ifFlag: 'route-stay', then: [
          { s: 'cherry', f: 'sad', t: "And if you stay. If you stay, then one day I'm going to be standing in a gym, and I'm going to run at nothing. At the place where you'd be. In front of everybody. And it'll be the stupidest thing anybody's ever seen." },
          { s: 'cherry', f: 'neutral', t: "And I'll do it anyway. Every year. So you know." }
        ], else: [
          { s: 'cherry', f: 'happy', t: "So don't be weird about it when I do. Wherever it is. Just stand there and let me hit you." }
        ] }
      ] },
      { n: "She picked up her phone off the step and put it back in her pocket, and stood, and brushed the snow off the back of her coat, and held out her hand to pull Solar up, and Solar took it, and Cherry pulled, too hard, the way she always did, and didn't let go once Solar was standing." },
      { choose: [
        { t: "I'll stand there. I'll let you hit me.", notes: 3, then: [
          { s: 'cherry', f: 'happy', t: "Good. It's going to hurt. I've been saving it." },
          { s: 'cherry', f: 'neutral', t: "...And then I'm going to hold on for a really long time, and you're not allowed to say anything about it. That's the other half. Nobody ever hears about the other half." }
        ] },
        { t: "Remember who's really in first.", notes: 3, then: [
          { s: 'cherry', f: 'surprised', t: "..." },
          { s: 'cherry', f: 'happy', t: "Say it again. Say it slower. I want to pin it." },
          { n: "She didn't get her phone out. She just stood there holding Solar's hand in the street and looked at her, and for once in her life didn't say anything mean at all, which was, Solar thought, the meanest thing she could possibly have done." }
        ] },
        { t: "(Squeeze her hand. Don't say anything.)", notes: 2, then: [
          { n: "She squeezed. Cherry squeezed back, hard enough to hurt, the way she did everything." }
        ] }
      ] },
      { n: "They stood there in the street for a while with their hands still caught, saying nothing, while the streetlight buzzed and the snow came down between them, slow, like it had nowhere else to be." }
    ] }
  ],

  afterMax: [
    { title: 'corner booth', place: 'Iwatodai Strip · Wild-Duck Burger', time: 'After School', music: 'city', scene: [
      { n: "Two large fries. One cola. Two straws. Cherry's arms, for once, unfolded on the table, and the windows fogged against the January cold so the whole Strip outside was only a smear of red and gold." },
      { s: 'cherry', f: 'neutral', t: "Okay. Complain to me. About anything. I've complained to you for an hour. It's your turn. It's only fair. I'm a fair person." },
      { choose: [
        { t: "Jihoon keeps doing pilates in the lounge.", notes: 3, then: [
          { s: 'cherry', f: 'happy', t: "YES. Finally. Someone else sees it. Someone else understands my pain." },
          { s: 'cherry', f: 'serious', t: "He does it on Koromaru's mat. Koromaru looks betrayed. I've seen it. A dog shouldn't have to feel that." }
        ] },
        { t: "You keep eating my fries.", notes: 3, then: [
          { s: 'cherry', f: 'neutral', t: "That's not a complaint. That's a fact of nature. That's like complaining about the tide. Next." }
        ] },
        { t: "I don't have anything to complain about.", notes: 2, then: [
          { s: 'cherry', f: 'surprised', t: "...That's the most disturbing thing you've ever said to me. Are you okay? Blink twice." },
          { n: "Solar blinked twice. Cherry stared at her, and then, slowly, grudgingly, smiled, the real one, the one that went crooked on the left, and stole a fry, and said that was fine, then, that was allowed, just this once." }
        ] }
      ] },
      { n: "They sat there until the light went. Somebody's little brother at the next table was trying to build a tower out of creamer cups and Cherry gave him three of hers without being asked, and when it fell over she said *tragic* in a voice so grave that the boy laughed until he got the hiccups." }
    ] },
    { title: 'second skate', place: 'Port Island · Seaside Park', time: 'After School', music: 'joy', scene: [
      { n: "The rink was still up, the painted snowmen on the barrier gone a little gray with weather, and the speakers had given up on Christmas and moved on to the kind of pop songs that played in every shop in the country, and the bay behind it all was the hard flat blue it only got on the coldest days." },
      { ifFlag: 'cherry-skated', then: [
        { n: "Solar went out onto the ice first. It wasn't good. But it was hers, a little, now, the knees bent and the weight forward the way she'd been yelled at to do it, and she got all the way around the long curve without grabbing anything, and when she came round to the bench Cherry was standing there with her phone up, filming, with a face like a mother at a recital." },
        { s: 'cherry', f: 'happy', t: "Look at that. Look at that. You're still terrible. But you're terrible at full speed now. That's growth." }
      ], else: [
        { n: "Solar held the barrier. She held it for one full lap of Cherry's, and then half of another, and then, without deciding to, the way you let go of a rope swing, she let go, and stood on her own in the middle of the ice with her arms out and her ankles shaking, and didn't fall." },
        { s: 'cherry', f: 'surprised', t: "...Oh. Oh, she's standing. Nobody move. Nobody breathe. She's a statue now. She lives here." }
      ] },
      { choose: [
        { t: "Race you.", notes: 3, then: [
          { s: 'cherry', f: 'happy', t: "You're going to lose so badly. I'm going to lap you. I'm going to lap you twice and then wait at the finish and eat a snack." },
          { n: "She lapped her twice. She waited at the finish and ate a snack. Solar came in last by a distance that made the rental booth man clap, slowly, and Cherry took a bow on his behalf." }
        ] },
        { t: "(Skate next to her. Just skate.)", notes: 3, then: [
          { n: "They went around together, slowly, not talking, the blades hissing and the cold making their eyes water, and on the third lap Cherry's gloved hand found Solar's and held it, not to steady her, just held it, and they went around like that until the speakers changed songs twice." }
        ] }
      ] },
      { s: 'cherry', f: 'neutral', t: "I'm going to keep doing this. At home. When we're back. Wherever. You're going to come with me. You're going to be bad at it in front of everyone I know." },
      { s: 'cherry', f: 'happy', t: "That's not a question. I'm not asking. That's the plan." }
    ] },
    { title: 'the poster', place: 'Iwatodai Station · Kirijo Guesthouse', time: 'Evening', music: 'evening', scene: [
      { bg: 'green-bedroom' },
      { n: "The guesthouse by the station was all pale wood and paper screens and a smell of new tatami, the kind of place that looked as though nobody had ever raised their voice in it, and Cherry's room looked as if somebody had raised their voice in it every day since November and was proud of it." },
      { ifFlag: 'cherry-poster', then: [
        { n: "The poster was on the wall over the futon, held up with four pieces of tape and a thumbtack she had definitely not been allowed to use. VOTE SOLAR KIM. The sun with its cheeks. And all around it, in a careful ring that didn't touch the paper, a constellation of tiny holes in the plaster where darts had gone in, and not one in the poster itself. Not one." },
        { s: 'cherry', f: 'neutral', t: "I said I'd throw darts at it. I didn't say I'd hit it. I'm a lovely person." },
        { s: 'cherry', f: 'serious', t: "Mitsuru's going to charge me for the wall. I don't care. Mitsuru can invoice me in another universe." }
      ], else: [
        { n: "The poster was on the wall over the futon, held up with four pieces of tape, the sun with its cheeks smiling down at the room, and it took Solar a second to understand what it was doing there, because the last time she'd seen it, it had been behind glass in a cabinet in the student council room." },
        { s: 'cherry', f: 'neutral', t: "I asked Mitsuru for it. She looked at me for a really long time. Then she opened the cabinet and turned around and pretended to read a file while I took it." },
        { s: 'cherry', f: 'happy', t: "I think she likes me. I think she's terrified of me and also likes me. It's a good combination. It's my favorite combination." }
      ] },
      { s: 'cherry', f: 'neutral', t: "Whoever goes home first takes it. That's the rule. I just made it up. It's still the rule." },
      { choose: [
        { t: "You take it. Whatever happens.", notes: 3, then: [
          { s: 'cherry', f: 'neutral', t: "...Okay. Yeah. I'll take it. It'll go on my real wall. Next to the window. Where I can see it from bed." },
          { s: 'cherry', f: 'sad', t: "Don't make me sad about a poster. It's a poster. It has cheeks." }
        ] },
        { t: "(Take a dart. Throw it. Miss on purpose.)", notes: 3, then: [
          { n: "She took a dart off the desk and threw it, and it went into the plaster a hand's width from the sun's left cheek, quivering, and Cherry looked at it, and then at her, with something on her face that was about as close to pride as Cherry's face was ever going to let itself get." },
          { s: 'cherry', f: 'happy', t: "Good. Close. Not too close. That's exactly how you do it. That's how you do everything with people you love. Close. Not too close." }
        ] }
      ] }
    ] },
    { title: 'left wing', place: "Iwatodai Dorm · Solar's Room", time: 'Evening', music: 'tender', scene: [
      { n: "Cherry had brought her whole makeup bag, which was not a bag so much as a small suitcase with a broken zip, and tipped it out across Solar's desk in a landslide of pencils and palettes and lipsticks with the labels rubbed off, and turned the desk lamp round to face the mirror, and pointed at the chair." },
      { s: 'cherry', f: 'neutral', t: "Sit. You've been doing your own eyeliner for nine months. I've seen it. I've said nothing. I've been so brave." },
      { n: "Solar sat. Cherry tipped her chin up with two fingers, cool and certain, and leaned in close enough that Solar could smell the gum on her breath and the hairspray she apparently traveled with across dimensions, and drew. One wing. Then the other. Slow, with her tongue between her teeth, the same face she'd had over the air hockey table and the third math problem and the rink, the face of somebody doing the one thing they knew they were the best in the world at." },
      { s: 'cherry', f: 'neutral', t: "Okay. Look." },
      { n: "Solar looked. In the mirror under the desk lamp there was a girl in a Gekkoukan blazer with an armband on her sleeve, and her eyes, done properly, were somebody else's eyes, sharper, older, a girl in a navy blazer with a different crest who had stood in front of a mirror and practiced a smile. And they were also her own. Both at once. The mirror didn't seem bothered by it. She found, looking, that she wasn't either." },
      { choose: [
        { t: "Your turn. Sit.", notes: 3, then: [
          { s: 'cherry', f: 'surprised', t: "...You want to do mine? You've never been allowed to do mine. Nobody's allowed to do mine." },
          { n: "She sat anyway. Solar did her eyeliner, slowly, with Cherry's eyes shut and her whole face braced like someone waiting for an injection, and when she was done Cherry opened her eyes and looked in the mirror for a long time without saying anything." },
          { s: 'cherry', f: 'neutral', t: "...Your left wing is lower than your right." },
          { s: 'cherry', f: 'happy', t: "I'm keeping it. I'm not fixing it. Don't touch it. I'm going to wear it to dinner and tell everyone you did it so they know whose fault it is." }
        ] },
        { t: "I look like her.", notes: 3, then: [
          { s: 'cherry', f: 'neutral', t: "You are her. You always were. You just didn't have anybody to do your eyeliner." },
          { s: 'cherry', f: 'serious', t: "Now you do. Wherever. I'll come do it. I'll cross a dimension for a good wing. I've already done it once for worse reasons." }
        ] },
        { t: "(Take a picture of both of you in the mirror.)", notes: 2, then: [
          { n: "Cherry posed before the phone was even up, chin out, one eyebrow, the face of a girl who had been photographed in a lot of mirrors, and then at the last second, as the shutter went, she turned and pressed her cheek against Solar's, and in the picture neither of them was looking at the camera. They were both laughing at something out of frame. Neither of them could remember what." }
        ] }
      ] }
    ] }
  ]
});
