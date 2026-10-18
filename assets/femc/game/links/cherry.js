/* Cherry · ? Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Searcher (Hoax), friendship. Kat's ruling: Cherry is Solar's best friend in Hoax and a key Hoax person (she's the one
   who runs to her in the Hoax ending). Deadpan, profane, arms folded, loves with her fists up; the one who talked Solar
   into running for president in the first place; at war with Jihoon over who's really in first. Her crossing (≈11/14,
   "wherever the gossip is loudest", star 7+, plot doc §7) is a story event; rank 1 is the first afternoon after.
   Canon echoes: "remember who's really in 1st mf", "i need u to run for pres", "I just care about you, and I don't want
   you to get hurt by some fucking idiots". Curses kept sparing (Kat's ruling) but in her voice. Nothing here decides
   Hoax's election, homecoming or romances. Texting voice: cherryblossoms, caps when furious, "ur", "fking".
   Arcana: '?' (open question, plot doc §16.6). afterMax uses v1's field shape. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'cherry', name: 'Cherry', short: 'Cherry', arcana: '?', numeral: '', from: 'Hoax',
  kind: 'searcher', world: 'H', romance: null,
  starts: '11/14', gate: { H: 7 },
  home: { area: 'strip', spot: 'Wild-Duck Burger', slot: 'after', days: [0, 1, 3, 5, 6],
          hint: 'Afternoons at Wild-Duck Burger on the Strip, in the corner booth, eating other people\'s fries.' },
  approach: "There's a girl in the corner booth at Wild-Duck Burger with her arms folded so tightly it looks structural, glaring at a menu like it owes her money, and when she sees you through the window she doesn't wave. She points at the seat across from her.",
  cast: {},
  invite: {
    ask: ["wild duck. now", "sol. food. im starving and jihoon isnt answering bc hes doing PILATES", "r u busy or r u being mysterious again", "come here i need to complain abt something and ur the only one who listens", "i found a better burger place. its worse. come", "if u dont come out i'll come in. ur choice"],
    ok: ["good. ordering u fries. ur not getting them", "ok. corner booth. dont be weird", "finally"],
    no: ["ok but ur dead to me", "fine. ill eat ur fries", "ok. tmrw. dont make me come get u"]
  },
  hangouts: [
    [
      { n: "Cherry had ordered two large fries and pushed one toward Solar and then immediately started eating from Solar's instead of her own, without comment, the way you'd breathe." },
      { s: 'cherry', f: 'neutral', t: "Yours always taste better. It's a scientific fact. Don't fight me." },
      { choose: [
        { t: "(Eat from hers.)", notes: 3, then: [
          { s: 'cherry', f: 'surprised', t: "Oh, you're doing THAT now? Okay. Okay. Game on, knockoff." },
          { n: "They ate each other's fries in grim silence until both trays were empty and nobody had technically eaten their own, which Cherry declared a draw." }
        ] },
        { t: "(Move your tray out of reach.)", notes: 2, then: [
          { s: 'cherry', f: 'serious', t: "Wow. Wow. Fourteen years and this is how you treat me." },
          { n: "She reached across anyway. She had longer arms than she looked." }
        ] }
      ] }
    ],
    [
      { n: "Cherry had decided the dorm's television was hers on Thursdays, and on Thursdays she sat on the lounge sofa with her feet on the table and watched a variety show she didn't understand a word of, and laughed at it, loudly, at the wrong moments." },
      { s: 'cherry', f: 'happy', t: "I don't know what he said. I know it was stupid. You can tell. Look at his face." },
      { choose: [
        { t: "(Laugh at the wrong moments with her.)", notes: 3, then: [
          { n: "They laughed at the wrong moments together for an hour. Junpei, who understood every word, sat on the floor between them and got more and more confused, and at the end Cherry patted him on the head like a dog and told him he'd done great." }
        ] },
        { t: "(Translate. Badly. On purpose.)", notes: 3, then: [
          { s: 'cherry', f: 'happy', t: "He did NOT say that. He did not say his mother was a pigeon. ...Did he? Junpei, did he?" }
        ] }
      ] }
    ],
    [
      { n: "Cherry was doing Solar's nails. Not well. She'd found a bottle of black polish in a convenience store and declared that Solar's hands looked naked, and she was painting them on the dorm steps with the focus of a surgeon and the skill of a child." },
      { s: 'cherry', f: 'serious', t: "Don't move. I'm in the zone. If you move I'll paint your whole finger." },
      { choose: [
        { t: "(Hold perfectly still.)", notes: 3, then: [
          { n: "She held still. Cherry painted her whole finger anyway, on the pinky, and looked at it, and then painted her own pinky the same way, so they'd match, and said that was the style now." }
        ] },
        { t: "(Sneeze.)", notes: 2, then: [
          { s: 'cherry', f: 'serious', t: "You did that on PURPOSE." }
        ] }
      ] }
    ]
  ],
  ranks: [
    { after: '11/15', title: "1: who's really in first", place: 'Iwatodai Strip · Wild-Duck Burger', time: 'After School', music: 'city', scene: [
      { n: "She hadn't cried. That was the thing everyone kept saying about her, in the lounge, in lowered voices, the way you'd talk about a storm that had passed over without breaking. Cherry had come through on the Strip in the middle of the Dark Hour with her arms folded, in front of the karaoke box, where Fuuka said the noise had been loudest, and when Solar had come round the corner with S.E.E.S. behind her, Cherry had looked her up and down once, slowly, the way a customs officer looks at a suitcase that's making a ticking noise, and said, *what the fuck are you wearing.*" },
      { n: "And then Solar had said she was sorry, she didn't know her, and Cherry had kept her arms folded, and nodded once, like she'd been told a train was delayed, and gone very quiet, and stayed quiet, and had not, as far as anyone could tell, cried at all." },
      { n: "She'd found Wild-Duck by the second morning. She'd claimed the corner booth by the third. She was sitting in it now with two large fries and a cola and her arms still folded, and when Solar came in she didn't wave. She pointed at the seat." },
      { register: 'cherry' },
      { s: 'cherry', f: 'neutral', t: "Sit." },
      { s: 'cherry', f: 'serious', t: "Okay. Quiz. Who's your best friend?" },
      { choose: [
        { t: "I don't know.", notes: 2, then: [
          { s: 'cherry', f: 'neutral', t: "Wrong." },
          { s: 'cherry', f: 'neutral', t: "The correct answer is me. Jihoon's going to tell you it's him. He's going to say it really loud, like that makes it true. He's lying. Remember that." }
        ] },
        { t: "Jihoon says it's him.", notes: 2, then: [
          { s: 'cherry', f: 'serious', t: "Of course he does. Of course he got to you first. He's got a car at home. He always gets there first. That's not the same as being first." },
          { s: 'cherry', f: 'neutral', t: "Remember who's really in first. That's me. Write it down." }
        ] },
        { t: "You.", notes: 3, then: [
          { s: 'cherry', f: 'surprised', t: "..." },
          { n: "Cherry stared at her. Her arms came unfolded for the first time since she'd come through. Then she folded them again, faster, tighter, and looked out the window at the Strip." },
          { s: 'cherry', f: 'neutral', t: "...Good. Correct. Lucky guess." }
        ] }
      ] },
      { n: "She pushed one of the trays of fries across the table toward Solar. Then she reached over and started eating from it." },
      { s: 'cherry', f: 'neutral', t: "Yours always taste better. Don't ask me why. It's science." },
      { n: "They ate. The Strip went by outside the window, salarymen and schoolgirls and a man with a sandwich board advertising a massage parlor that Cherry glared at until he walked faster. She didn't ask Solar anything. She didn't look at her much. She just ate her fries and stole Solar's and kept her arms in a way that looked, Solar slowly realized, like a person holding herself together with both hands." },
      { choose: [
        { t: "You can cry, you know. Everyone else did.", notes: 3, then: [
          { s: 'cherry', f: 'serious', t: "I'm not going to cry in a Wild-Duck." },
          { s: 'cherry', f: 'neutral', t: "I'm going to find whoever did this and break both their legs. Then I'll cry. In that order. I've got a list." }
        ] },
        { t: "Why aren't you angry at me?", notes: 3, then: [
          { s: 'cherry', f: 'neutral', t: "I am angry. Look at me. This is my angry face. It's also my normal face. You used to be able to tell the difference." },
          { s: 'cherry', f: 'sad', t: "...I'm not angry at YOU. I'm angry at whatever made you look at me like a stranger. I'm going to hit it. I just haven't found it yet." }
        ] },
        { t: "(Steal one of her fries back.)", notes: 2, then: [
          { s: 'cherry', f: 'surprised', t: "..." },
          { s: 'cherry', f: 'happy', t: "Oh, okay. There you are. There's a little bit of you in there. Thief." }
        ] }
      ] },
      { s: 'cherry', f: 'serious', t: "Here's how this goes. I'm not going to make you remember. That's stupid. You can't make people remember things, I tried it on Asahi once and he still doesn't remember he owes me six thousand won." },
      { s: 'cherry', f: 'neutral', t: "I'm just going to be here. Being annoying. Being right. Eventually you'll go, oh, it's her, the one who's always right. And then we're back." },
      { n: "When they left she paid for both of them without asking and didn't let Solar see the receipt, and on the pavement outside she stood for a second with her hands in her coat pockets, looking at Solar in the Strip's neon, and her face did one small thing, very fast, and then didn't." },
      { s: 'cherry', f: 'neutral', t: "Your hair's different. I hate it. Grow it back." }
    ] },

    { after: '11/21', title: '2: knockoff', place: 'Paulownia Mall · Arcade', time: 'Evening', music: 'city', scene: [
      { n: "The arcade at Paulownia Mall was louder than it should have been again, which by now meant Jihoon was in it, and Cherry was walking through the doors toward the noise with the face of a woman walking toward a fight she'd been looking forward to all day." },
      { s: 'cherry', f: 'serious', t: "Park Jihoon." },
      { s: 'jihoon', f: 'neutral', t: "Oh no. Oh, no. Who let her in?" },
      { s: 'cherry', f: 'neutral', t: "The universe. Move. You're blocking the crane game, and you're ugly." },
      { n: "They looked at each other across the crane game with the deep, settled hatred of two people who had been fighting over the same thing since they were small enough to fight about crayons. Junkyu, between them, looked from one to the other like a child watching his parents argue in a car." },
      { s: 'junkyu', f: 'happy', t: "It's so good to have everyone back together!" },
      { s: 'cherry', f: 'neutral', t: "Junkyu, I love you, shut up." },
      { s: 'jihoon', f: 'serious', t: "She told you she's your best friend, didn't she. Sol. She told you that. In the first five minutes." },
      { s: 'cherry', f: 'neutral', t: "Because it's true. Unlike everything that comes out of your mouth." },
      { choose: [
        { t: "You both told me that.", notes: 3, then: [
          { s: 'cherry', f: 'surprised', t: "..." },
          { s: 'jihoon', f: 'surprised', t: "..." },
          { n: "They looked at each other. Then at her. Then back at each other, and something passed between them that was nearly, very nearly, an alliance." },
          { s: 'cherry', f: 'neutral', t: "We'll settle this later. Outside. Like adults." },
          { s: 'jihoon', f: 'neutral', t: "With pilates." }
        ] },
        { t: "I don't have a best friend. I have a knockoff.", notes: 3, then: [
          { s: 'cherry', f: 'surprised', t: "Did you just— did you just call ME the knockoff?" },
          { s: 'jihoon', f: 'happy', t: "HA. HA. She called you the knockoff. She's back. She's so back." },
          { s: 'cherry', f: 'serious', t: "I'm going to kill you both. I'm going to do it slowly. In the arcade. Everyone will watch." }
        ] }
      ] },
      { n: "Later, when Jihoon had gone back to losing to the crane game and Junkyu had gone to buy everyone ice cream with money nobody had given him, Cherry leaned against the air hockey table with her arms folded and watched Solar watch the boys, and said, quietly, that it was the knockoff thing that had gotten her." },
      { s: 'cherry', f: 'neutral', t: "That's what I call you. When you're being weird. *Knockoff.* Like you're a fake version of yourself somebody sold on a street corner." },
      { s: 'cherry', f: 'sad', t: "You've been a knockoff for two months, apparently. And I wasn't even here to say it." },
      { choose: [
        { t: "You're here now. Say it.", notes: 3, then: [
          { s: 'cherry', f: 'neutral', t: "...Knockoff." },
          { s: 'cherry', f: 'happy', t: "God. That felt good. Okay. I'm going to say it a lot. You're going to hate it." }
        ] },
        { t: "Am I a fake version?", notes: 2, then: [
          { s: 'cherry', f: 'serious', t: "No. You're a version with the stupid parts turned down. I like the stupid parts. I want them back." }
        ] }
      ] }
    ] },

    { after: '11/29', title: '3: i need u to run', place: 'Gekkoukan High · 2F Hallway', time: 'After School', scene: [
      { n: "Cherry had come to the school. Not in. She'd stood at the gate in her own navy blazer for twenty minutes until a teacher asked if she was lost, and then she'd told the teacher, in English, that she was very lost, extremely lost, the most lost anybody had ever been, and the teacher had been so alarmed he'd let her in." },
      { n: "Solar found her in the second-floor hallway, standing in front of the bulletin board, where, still pinned in the corner from October because Mitsuru had refused to let anyone take it down, was a campaign poster. VOTE SOLAR KIM. A sun with a face. Glitter, coming off onto the cork." },
      { n: "Cherry was looking at it with her arms folded and her chin down, and she didn't turn around." },
      { s: 'cherry', f: 'neutral', t: "That's my fault." },
      { s: 'solar', f: 'neutral', t: "The poster?" },
      { s: 'cherry', f: 'serious', t: "All of it. The running. I told you to. In the chat. Before your parents even said anything. I said, I need you to run for president. I said you could fix the school. I said it like a joke." },
      { s: 'cherry', f: 'sad', t: "And then your parents said it too, and it stopped being a joke, and you looked so tired all the time. And I kept going, *you've got this, you've got this.* Like an idiot. Like a fucking cheerleader." },
      { choose: [
        { t: "Did I want to run?", notes: 3, then: [
          { s: 'cherry', f: 'neutral', t: "I don't know." },
          { s: 'cherry', f: 'serious', t: "That's the problem. I never asked. Nobody asked. Everybody just told you what you'd be good at." }
        ] },
        { t: "It's a good poster.", notes: 2, then: [
          { s: 'cherry', f: 'happy', t: "It's a terrible poster. It's the best terrible poster I've ever seen. The sun has CHEEKS." },
          { s: 'cherry', f: 'sad', t: "...You stayed up all night on the cheeks." }
        ] },
        { t: "You were trying to help.", notes: 3, then: [
          { s: 'cherry', f: 'serious', t: "Don't do that. Don't do the nice thing. You always do the nice thing when I deserve to be yelled at." }
        ] }
      ] },
      { n: "The poster's sun smiled at them both. The star on Haenim's sash ticked, very faintly, a pin dropped on a desk in a room down the hall. Solar touched the glitter on the corner of the poster and it came off on her finger, gold, the way it had apparently been coming off on everything for months, in another school, on another girl's hands." },
      { s: 'cherry', f: 'neutral', t: "I'm going to say something and then we're never talking about it again." },
      { s: 'cherry', f: 'serious', t: "I don't care if you win. I don't care if you lose. I don't care if you drop out and run away and become a Wild-Duck manager. You're not a poster. You're my best friend. That's the only election I care about, and you already won it, when we were six, and I didn't even vote for you, you just took it." },
      { choose: [
        { t: "(Take the poster down. Give it to her.)", notes: 3, then: [
          { n: "She unpinned it, carefully, four pins, and rolled it up, and held it out. Cherry looked at it for a long time and then took it and put it under her arm like a baguette." },
          { s: 'cherry', f: 'neutral', t: "I'm keeping this. It's going on my wall. I'm going to throw darts at it. Lovingly." }
        ] },
        { t: "Never talking about it again.", notes: 3, then: [
          { s: 'cherry', f: 'neutral', t: "Never." },
          { s: 'cherry', f: 'happy', t: "...Okay, we can talk about the cheeks. The cheeks are fair game forever." }
        ] }
      ] }
    ] },

    { after: '12/6', title: '4: the popular kids', place: "Iwatodai Strip · Yeobo's Cafe", time: 'After School', scene: [
      { n: "Yeobo's had turned up on the Strip one Thursday in November like it had always been there, wedged between the ramen shop and a shuttered pachinko place, with its windows fogged gold and its hand-lettered sign, and Sunoo behind the counter in an apron, beaming at everyone who came in like they were his favorite customer, because they were." },
      { n: "Cherry had refused to go in for three weeks on principle. The principle being that it belonged to Jungwon's friends, and Jungwon's friends were, she said, the popular kids, and she had a policy." },
      { n: "She was in it now. Solar had dragged her. She was sitting at a table by the window with her arms folded and her coat still on, glaring at the menu, while Sunoo hovered nearby with his order pad like a man approaching a nervous horse." },
      { s: 'sunoo', f: 'happy', t: "Hi! Cherry, right? Can I get you anything? The croissants are really good today. I made them myself this morning." },
      { s: 'cherry', f: 'neutral', t: "...You made them." },
      { s: 'sunoo', f: 'happy', t: "At five! It's very relaxing. Do you want one? It's on the house. Any friend of Solar's." },
      { s: 'cherry', f: 'serious', t: "I'm not a friend of Solar's. I'm her best friend. There's a difference." },
      { s: 'sunoo', f: 'happy', t: "Oh, of course! Then two. On the house." },
      { n: "He went away. Cherry watched him go with the face of a woman who had come prepared for a war and been handed a croissant." },
      { s: 'cherry', f: 'neutral', t: "...He's nice." },
      { s: 'cherry', f: 'serious', t: "I hate it. I hate that he's nice. I've hated them for three years and he's NICE." },
      { choose: [
        { t: "Maybe the popular kids aren't so bad.", notes: 2, then: [
          { s: 'cherry', f: 'serious', t: "Don't. Don't you start. You said that in September and look what happened. You ran against their president." }
        ] },
        { t: "You can like the croissant and still hate them.", notes: 3, then: [
          { s: 'cherry', f: 'happy', t: "...Yeah. Yeah, okay. That's legal. That's a legal position." },
          { n: "The croissants came. Cherry ate hers in three bites without looking up, and then ate half of Solar's, and then, when Sunoo came back to ask how they were, looked him dead in the eye and said they were fine, and asked for two more, to go." }
        ] },
        { t: "You're protecting me.", notes: 3, then: [
          { s: 'cherry', f: 'neutral', t: "I'm always protecting you. You never notice. You think I'm just mean." },
          { s: 'cherry', f: 'sad', t: "I am mean. I'm also protecting you. Both." }
        ] }
      ] },
      { n: "When they left, Sunoo waved at them from the counter with both hands, and Cherry, at the door, without turning around, lifted one hand over her shoulder in what might, generously, have been a wave back." },
      { s: 'cherry', f: 'neutral', t: "Don't tell anyone I did that." }
    ] },

    { after: '12/12', title: '5: the bear', place: 'Paulownia Mall · Game Panic', time: 'Evening', scene: [
      { n: "There was a bear in the crane game. A small pink one with a cloud on its tummy and a stitched smile, wedged in the back corner under a pile of penguins, and Cherry had stopped in front of the machine so suddenly that Solar walked into her." },
      { s: 'cherry', f: 'neutral', t: "Don't." },
      { s: 'solar', f: 'neutral', t: "I didn't say anything." },
      { s: 'cherry', f: 'serious', t: "You were going to. You were going to say *you like that bear.* And I don't. I don't like that bear. I'm looking at it ironically." },
      { n: "She put a coin in. She did not look at it ironically. She worked the joystick with her tongue between her teeth and her whole body leaning, and the claw came down and missed the bear by a mile and picked up a penguin, and she said a word that made a nearby father cover his son's ears." },
      { choose: [
        { t: "You collect them.", notes: 3, then: [
          { s: 'cherry', f: 'surprised', t: "..." },
          { s: 'cherry', f: 'serious', t: "Who told you that. Did Jihoon tell you that. I'll kill him." },
          { s: 'solar', f: 'neutral', t: "Nobody told me. There's a shelf. In your room. Above the bed. You won't let anyone touch it." },
          { n: "Cherry let go of the joystick. She stood very still in the arcade noise with her face doing something she would never in her life have let it do at home." },
          { s: 'cherry', f: 'sad', t: "...You remember the shelf." }
        ] },
        { t: "Let me try.", notes: 2, then: [
          { n: "Solar tried. She missed too. Cherry looked deeply satisfied about it." },
          { s: 'cherry', f: 'happy', t: "Ha. See? Rigged. Everything's rigged. That's why I don't care about the bear." }
        ] },
        { t: "(Get Jihoon. He's an expert.)", notes: 2, then: [
          { s: 'cherry', f: 'serious', t: "If you get Jihoon I'll never speak to you again. He'll get it on the first try and he'll never let me forget it." },
          { s: 'cherry', f: 'neutral', t: "...He'd get it on the first try though. ...No. No. I have dignity." }
        ] }
      ] },
      { n: "It took eleven tries. On the eleventh the claw caught the bear by one ear and carried it, swinging, over the chute, and let go, and it dropped, and Cherry made a sound Solar had never heard a human make, high and short like a dog's toy, and then looked around to see if anyone had heard it." },
      { n: "She held the bear for a long time. Then she held it out to Solar." },
      { s: 'cherry', f: 'neutral', t: "Here." },
      { s: 'solar', f: 'neutral', t: "It's yours. You won it." },
      { s: 'cherry', f: 'serious', t: "I know I won it. I'm giving it to you. That's how it works. You keep it till we're home and then you give it back and I put it on the shelf. With the others. Where it goes." },
      { s: 'cherry', f: 'sad', t: "...So you have to come home and give it back. Okay? That's the deal. I'm not saying it's a trick. It's a little bit of a trick." }
    ] },

    { after: '12/19', title: '6: results', place: 'Gekkoukan High · Front Gate', time: 'After School', scene: [
      { n: "The exam rankings went up on the board in the front hall on the nineteenth, the way they always did, a long white sheet of names and numbers that every third-year at Gekkoukan crowded around with the frozen faces of people reading a list of survivors, and Cherry was waiting outside the gate when Solar came out, leaning on the wall with her arms folded, because she wasn't allowed in and had been told so twice." },
      { s: 'cherry', f: 'neutral', t: "Well? What'd you get?" },
      { choose: [
        { t: "Better than I expected.", notes: 3, then: [
          { s: 'cherry', f: 'happy', t: "Obviously. You always do better than you expect. You expect to fail every single time. It's exhausting. I love you." }
        ] },
        { t: "Worse than I wanted.", notes: 3, then: [
          { s: 'cherry', f: 'neutral', t: "That's because you wanted first. You always want first. Nobody's ever first. Except me. At being your friend." }
        ] },
        { t: "I don't want to talk about it.", notes: 2, then: [
          { s: 'cherry', f: 'neutral', t: "Okay. Wild-Duck. We'll eat and not talk about it. I'm great at not talking about things." }
        ] }
      ] },
      { s: 'cherry', f: 'neutral', t: "You know I never study, right? At home. I've never studied once. I sit next to you in class and copy your notes and draw on the corners." },
      { s: 'cherry', f: 'serious', t: "And you let me. Every time. You pretend you don't see. And then the night before the test you call me and go through everything and make me say it back to you until I know it, and then you go to sleep at four and I go to sleep at nine." },
      { n: "She said it to the gate. It came out not like a joke but like a confession, flat, the way Cherry said the things she actually meant." },
      { s: 'cherry', f: 'sad', t: "I passed everything because of you. Every single year. And I never said thank you. Because if I said thank you you'd know I knew." },
      { choose: [
        { t: "I knew you knew.", notes: 3, then: [
          { s: 'cherry', f: 'surprised', t: "..." },
          { s: 'cherry', f: 'happy', t: "...Okay. Okay, good. Then we never have to say it. That's perfect. That's the best kind of thank you. The kind nobody says." }
        ] },
        { t: "Thank you for sitting next to me.", notes: 3, then: [
          { s: 'cherry', f: 'serious', t: "Don't make it a thing." },
          { n: "She took Solar's arm, hard, and marched her toward the Strip, and didn't look at her the whole way, and her ears were red, and it wasn't the cold." }
        ] }
      ] }
    ] },

    { after: '12/27', title: '7: not the candidate', place: 'Iwatodai Strip · Wild-Duck Burger', time: 'Afternoon', scene: [
      { n: "The Strip between Christmas and New Year was half shut, the bookstore dark, the ramen shop running a skeleton menu, a single wilted string of tinsel blowing around outside the karaoke box like it had been fired and had nowhere to go. Wild-Duck was open. Wild-Duck was always open. Cherry said it was the only honest business in Japan." },
      { n: "She'd been quiet all afternoon. Not angry quiet. The other kind. She was turning a fry over and over on the tray without eating it, which Solar had never once seen her do." },
      { s: 'cherry', f: 'neutral', t: "Everyone's going to ask you. To come home. You know that, right? Jihoon already did. In his way. Junkyu cried at you about it. Jungwon's going to do it in some polite way where it doesn't sound like asking." },
      { s: 'cherry', f: 'serious', t: "And they're going to say we need you. And they're going to mean it. And you're going to hear *we need the candidate.* Because that's what everyone at home always means." },
      { s: 'cherry', f: 'serious', t: "I don't. I want you to know that before anyone else says anything. I don't need the candidate. I don't need the poster. I don't even need you to come home." },
      { n: "She put the fry down. She looked at Solar across the table, straight, for the first time all afternoon." },
      { s: 'cherry', f: 'sad', t: "I just need you to be okay. Wherever. If that's here, I'll hate it, and I'll be okay. I'll come visit. I'll find a way. I'll break something." },
      { choose: [
        { t: "Would you really come visit?", notes: 3, then: [
          { s: 'cherry', f: 'neutral', t: "I came through a hole in the sky in the middle of the night because Fuuka said the gossip was loud. I'd come visit." },
          { s: 'cherry', f: 'happy', t: "I'd bring Junkyu. He'd cry the whole way. It'd be great." }
        ] },
        { t: "I don't know what I want, Cherry.", notes: 3, then: [
          { s: 'cherry', f: 'neutral', t: "I know." },
          { s: 'cherry', f: 'neutral', t: "That's fine. You never do. You figure it out right at the end, at the last possible second, and then you do it like you knew all along. It's so annoying." },
          { s: 'cherry', f: 'happy', t: "You'll do that. I'll be there when you do. Glaring." }
        ] },
        { t: "(Steal her fry.)", notes: 2, then: [
          { s: 'cherry', f: 'surprised', t: "..." },
          { s: 'cherry', f: 'happy', t: "Okay. That's an answer. That's a good answer. Thief." }
        ] }
      ] },
      { n: "When the light went, she paid for both of them again without letting Solar see, and on the pavement she took Solar's scarf, which was hanging loose, and wound it twice around Solar's neck and tucked the ends in with two hard jabs of her fingers, like you'd tuck in a child, or a knife." },
      { s: 'cherry', f: 'neutral', t: "You always forget to do that. You'll die of a cold and I'll have to give a eulogy and I'll say mean things in it." }
    ] },

    { after: '1/5', title: '8: sleepover', place: "Iwatodai Dorm · Solar's Room", time: 'Late Night', music: 'night', scene: [
      { n: "Cherry had decided, on New Year's Day, standing on the shrine steps in the snow with her arms folded, that she was sleeping over. Not at the guesthouse. At the dorm. In Solar's room. On the floor. Mitsuru had been informed, rather than asked, and had taken it, Yukari said, like a woman informed of the weather." },
      { n: "So now it was one in the morning and the light was off and Cherry was lying on a futon on Solar's floor with her hands behind her head, staring at the ceiling, and Solar was lying on the bed staring at the same ceiling, and neither of them had said anything for a while." },
      { s: 'cherry', f: 'neutral', t: "We used to do this every Friday. Your house. Your floor. Nana on my feet. You'd talk until four and then fall asleep in the middle of a word." },
      { s: 'cherry', f: 'neutral', t: "And I'd lie there and finish the word for you. Out loud. To nobody." },
      { choose: [
        { t: "What words?", notes: 3, then: [
          { s: 'cherry', f: 'neutral', t: "Stupid ones. *Tomorrow.* *Probably.* Once you fell asleep in the middle of *president* and I lay there for an hour thinking about how you'd never once finished saying it in your life." }
        ] },
        { t: "(Talk until four.)", notes: 3, then: [
          { n: "They talked until four. About nothing. About the variety show and the ramen shop and Jihoon's pilates and the tinsel outside the karaoke box. Cherry did most of the talking. Solar did most of the laughing. At some point the Dark Hour came and went over them, green, and Cherry didn't even pause, just kept talking through it like it was a commercial break." }
        ] }
      ] },
      { s: 'cherry', f: 'serious', t: "Can I tell you something in the dark? You're not allowed to look at me." },
      { s: 'cherry', f: 'sad', t: "I'm scared. All the time. Here. I'm scared you'll stay and I'm scared you'll come home and be sad, and I'm scared I'll go home and you won't be there and I'll have to sit in class next to your empty chair and copy nobody's notes." },
      { s: 'cherry', f: 'neutral', t: "I'm never scared. You know that. I'm the one who's never scared. So this is a big deal. This is a historic event." },
      { choose: [
        { t: "(Reach down off the bed and find her hand.)", notes: 3, then: [
          { n: "She reached down off the side of the bed in the dark and found Cherry's hand on the futon, and Cherry held on, hard, and didn't say anything, and didn't let go, and they lay like that, one on the bed and one on the floor, arms stretched across the gap, until Solar's arm went numb and she didn't move it." }
        ] },
        { t: "I'm scared too.", notes: 3, then: [
          { s: 'cherry', f: 'neutral', t: "I know. You're always scared. You just do it quieter." },
          { s: 'cherry', f: 'happy', t: "Okay. Two scared idiots on a floor. That's fine. That's how all the best sleepovers go." }
        ] }
      ] },
      { n: "Solar fell asleep first, in the middle of a word. In the morning she couldn't remember which word. Cherry said she'd finished it for her, out loud, to nobody, and wouldn't say what it was." }
    ] },

    { after: '1/14', title: '9: first', place: 'Iwatodai Dorm · Lounge', time: 'Evening', music: 'joy', scene: [
      { n: "It had come to a head, finally, in the lounge, on a Thursday, during Cherry's variety show. Jihoon had come in and sat on the arm of the sofa and said something about Solar's handwriting that only someone who'd known her since preschool could know, and Cherry had turned off the television." },
      { s: 'cherry', f: 'serious', t: "Okay. We're doing this. Right now. In front of witnesses." },
      { s: 'jihoon', f: 'serious', t: "Fine. FINE. Let's do it." },
      { n: "Junpei, who had been eating chips on the floor, looked from one to the other and slowly slid backward out of the blast radius. Yukari put down her book. Koromaru lifted his head." },
      { s: 'cherry', f: 'serious', t: "Who held her hair back at the second-year field trip when she threw up on the bus." },
      { s: 'jihoon', f: 'serious', t: "Who drove her to the vet at two in the morning when Nana ate a sock." },
      { s: 'cherry', f: 'serious', t: "Who knows her shoe size." },
      { s: 'jihoon', f: 'serious', t: "Who knows her PIN." },
      { s: 'cherry', f: 'surprised', t: "...You know her PIN?" },
      { s: 'jihoon', f: 'neutral', t: "Everyone knows her PIN. It's her dog's birthday. She's not subtle." },
      { n: "They both turned to look at her. The whole lounge turned to look at her. Even Koromaru." },
      { s: 'cherry', f: 'serious', t: "Well? Who's first?" },
      { choose: [
        { t: "Cherry.", notes: 3, then: [
          { s: 'cherry', f: 'happy', t: "HA. HA. Remember who's really in first, Park Jihoon. Write it down. Write it on your pilates mat." },
          { s: 'jihoon', f: 'sad', t: "...This is a dark day. This is the darkest day of my life." },
          { n: "But Cherry, behind his back, where he couldn't see, held up her hand to Solar with two fingers crossed, and then pointed at him, and mouthed *tie,* and put her finger to her lips." }
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
        ] }
      ] }
    ] },

    { after: '1/24', title: "10: i'd run", place: 'Iwatodai Dorm · Front', time: 'Night', music: 'tender', scene: [
      { n: "Cherry was waiting at the bottom of the dorm steps in the cold, the way she'd waited at the school gate and the Wild-Duck door and the arcade, with her arms folded and her coat buttoned to the throat, and she didn't wave when Solar came out. She pointed at the step." },
      { n: "Solar sat. Cherry sat next to her. The street was empty and the streetlight buzzed and the bay was black beyond the buildings, and Cherry took something out of her pocket and put it on the step between them." },
      { n: "A phone. Her own. Its screen lit up the steps, white, and it showed a group chat, PARK JIHOON HATE CLUB, and at the very top of it, pinned, the first message Cherry had ever sent in it." },
      { phone: [
        { from: 'cherry', t: "cherryblossoms: remember who's really in 1st mf" }
      ], contact: 'PARK JIHOON HATE CLUB' },
      { s: 'cherry', f: 'neutral', t: "I pinned it. Years ago. So he'd see it every time he opened the chat. Every single time." },
      { n: "And it came up through Solar like a tide coming in over flat sand, all at once and from every direction. A classroom on the first day of first grade and a girl with her arms folded at the next desk who'd said, *you're sitting in my seat,* and hadn't been, and had sat there anyway, next to her, every year after. A shelf of bears above a bed. Notes with drawings in the corners. A voice on the phone at midnight going *stfu omg* and *i love u bitch* in the same breath. The chat at two in the morning. And a girl standing in a school hallway in front of a poster with a sun on it, saying, flat, that she didn't care who won." },
      { s: 'solar', f: 'neutral', t: "...You're in first." },
      { n: "She said it in the voice. The real one. Bored, flat, like she was reading it off a receipt. Cherry's whole body went still on the step." },
      { s: 'solar', f: 'neutral', t: "You were always in first, knockoff." },
      { s: 'cherry', f: 'surprised', t: "..." },
      { s: 'cherry', f: 'sad', t: "Don't. Don't do it like that. I said I wasn't going to cry in front of you. I said it in November. I have a reputation." },
      { choose: [
        { t: "You can cry. I won't look.", notes: 3, then: [
          { n: "She looked at the streetlight. Cherry cried, beside her, hard and quick and furious, with her arms still folded, into her own coat collar, the way you'd cry if you'd been saving it since November and had decided to do it all at once to get it over with. It took about a minute. Then she wiped her face on her sleeve and said, thick, that that hadn't happened." }
        ] },
        { t: "(Put your arm around her.)", notes: 3, then: [
          { n: "She put her arm around her. Cherry let her for about one second, stiff as a fence post, and then all at once didn't, and turned and put her face in Solar's shoulder and her fists in Solar's coat and held on like the step was tilting." }
        ] }
      ] },
      { s: 'cherry', f: 'neutral', t: "Listen. Whatever door you go through. Whatever happens. Here's the only thing I know." },
      { s: 'cherry', f: 'serious', t: "If I see you, anywhere, I'm going to run at you. I don't run. You know I don't run. I'll run. Across a gym. Across a parking lot. Across a whole fucking universe." },
      { s: 'cherry', f: 'happy', t: "So don't be weird about it when I do. Just stand there and let me hit you." }
    ] }
  ],

  afterMax: [
    { title: 'corner booth', place: 'Iwatodai Strip · Wild-Duck Burger', time: 'After School', scene: [
      { n: "Two large fries. One cola. Two straws. Cherry's arms, for once, unfolded on the table." },
      { s: 'cherry', f: 'neutral', t: "Okay. Complain to me. About anything. I've complained to you for an hour. It's your turn. It's only fair." },
      { choose: [
        { t: "Jihoon keeps doing pilates in the lounge.", notes: 3, then: [
          { s: 'cherry', f: 'happy', t: "YES. Finally. Someone else sees it. Someone else understands my pain." }
        ] },
        { t: "You keep eating my fries.", notes: 3, then: [
          { s: 'cherry', f: 'neutral', t: "That's not a complaint. That's a fact of nature. Next." }
        ] }
      ] }
    ] },
    { title: 'the bear', place: "Iwatodai Dorm · Solar's Room", time: 'Night', scene: [
      { n: "The pink bear with the cloud on its tummy sat on Solar's windowsill, where she'd put it in December, facing out at the bay like it was keeping watch. Cherry came in without knocking and stopped and looked at it." },
      { s: 'cherry', f: 'neutral', t: "You put it in the window." },
      { s: 'solar', f: 'neutral', t: "So it can see." },
      { choose: [
        { t: "It's yours. I'm just holding it.", notes: 3, then: [
          { s: 'cherry', f: 'sad', t: "...Yeah. You're holding it. That's the deal. You remember the deal." }
        ] },
        { t: "(Turn it around to face her.)", notes: 3, then: [
          { s: 'cherry', f: 'happy', t: "Don't make it look at me. I'll cry. I'm done crying. I did it once. That was the allowance." }
        ] }
      ] }
    ] }
  ]
});
