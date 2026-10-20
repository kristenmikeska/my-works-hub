/* Small, once-per-playthrough routines. Arrival events, not optional link ranks, establish who is here.
   These replace a normal morning/lunch beat, play before the evening menu, or close a late night; they never spend free time.
   Housing (FEMC-REVAMP-LORE.md): Hanni, Hyein, Yunjin and Haechan live in the dorm. Jihoon, Jungwon, Minji, Mark, Jaehyun,
   Cherry and both crews live at the Kirijo guesthouse by the station; at the dorm they are visitors (meals, the lounge).
   The engine plays the first eligible entry in this list, so entries stay roughly in date order. */
window.FEMC_GAME_DAILY_LIFE = [
  { id: 'girls-school-gate', after: '9/14', slot: 'early', schoolOnly: true, events: ['a4-names'],
    place: 'Gekkoukan High · Gate', time: 'Morning', bg: 'outside-school', scene: [
      { n: "Hanni carried Solar's bag all the way from the monorail, despite being asked twice to give it back, and Hyein walked on the other side picking a loose thread out of her cuff. At the school gate Hanni handed it over. Neither girl followed her through." },
      { s: 'hanni', f: 'happy', t: "Okay! You go learn things. We're going to the bakery. I found one that sells the soft rolls." },
      { s: 'hyein', f: 'neutral', t: "And then the fabric shop. Hanni's coming to supervise my budget. She's very strict. She let me buy one button yesterday." },
      { choose: [
        { t: "Meet me here after school?", then: [{ s: 'hanni', f: 'happy', t: "Yes! What time? Write it down. We have nothing but time and I still don't trust us." }] },
        { t: "You know the way back?", then: [{ s: 'hyein', f: 'serious', t: "Three turns and the vending machine that ate my money. I've got landmarks." }] }
      ] },
      { n: "Hanni waved until Solar went inside. From the shoe lockers she could still see them at the gate, bent over the same scrap of paper, Hyein pointing one way and Hanni gently turning the paper around." }
    ] },
  { id: 'hanni-packed-lunch', after: '9/16', slot: 'lunch', schoolOnly: true, events: ['a4-names'],
    place: 'Gekkoukan High · Classroom', time: 'Lunch', bg: 'gekkoukan-classroom-day', scene: [
      { n: "There was a container in Solar's bag that hadn't been there when she'd packed it. Hanni's handwriting on a strip of tape said *lunch, not a snack,* and underneath, in different handwriting, *i checked. there's no weird fruit strings. ur welcome.*" },
      { s: 'yukari', f: 'neutral', t: "You have a whole catering service now." },
      { choose: [
        { t: "Apparently I need supervision.", then: [{ s: 'yukari', f: 'serious', t: "You'd call a canned coffee lunch if we let you. I'm taking their side." }] },
        { t: "Want some?", then: [{ s: 'yukari', f: 'surprised', t: "If there's enough. Oh. There's enough for six people. Yeah, okay." }] }
      ] },
      { n: "There was a folded shopping list under the lid too, bread and eggs and something crossed out so thoroughly she couldn't read it. Hanni must have put it in by mistake. Solar tucked it into her pencil case to take home." }
    ] },
  { id: 'hyein-dorm-offcuts', after: '9/18', slot: 'evening', events: ['a4-names'],
    place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
      { n: "Hyein had come back from the shops with a paper bag full of offcuts and was spreading them across yesterday's newspaper on the lounge table. Upstairs, her room had acquired a row of little bags hanging from the wardrobe handles. Hanni's door, beside it, had a shopping list taped to it. Solar had started checking that list before she went out." },
      { s: 'hyein', f: 'serious', t: "The small pieces are cheaper. You just have to know what they're going to be. This one's a pocket." },
      { s: 'solar', f: 'neutral', t: "For what?" },
      { s: 'hyein', f: 'neutral', t: "Haven't decided. But it's going to have an excellent pocket." },
      { n: "Hanni came down with a basket of clean towels and asked which pile was for keeping. Hyein looked at every pile, then at Hanni. Hanni sighed and set the towels on the stairs. Solar moved the television remote out from under the newspaper and sat down." }
    ] },
  { id: 'jihoon-morning-route', after: '9/21', slot: 'early', schoolOnly: true, events: ['a4-ice-cream'],
    place: 'Iwatodai Station', time: 'Morning', bg: '0d489c888283c69d5c7848eb84174bc6', scene: [
      { n: "Jihoon was leaning on the dorm gate when Solar came out, as if he'd been there an hour, which he hadn't, because his hair was still wet. He'd walked over from the guesthouse with a folded street map in his pocket and two different socks on, and his guesthouse key on a ring Mitsuru had found in a drawer. It made a small noise against his coins all the way to the station." },
      { s: 'jihoon', f: 'happy', t: "I'm learning the city today. Very independent of me. You're welcome." },
      { s: 'solar', f: 'neutral', t: "Where are you going?" },
      { s: 'jihoon', f: 'neutral', t: "Arcade. Then I'm finding somewhere that sells normal ice cream in a normal-sized tub. These are both essential errands for a man of my importance." },
      { choose: [
        { t: "Try not to get lost.", then: [{ s: 'jihoon', f: 'happy', t: "I got to a different universe in slides, Sol. I can find a shop." }] },
        { t: "Bring something back for everyone.", then: [{ s: 'jihoon', f: 'serious', t: "Everyone? That's a household budget, not an errand. Fine. If Junpei complains about the flavor, he's out." }] }
      ] },
      { n: "He stopped outside the ticket gates and stepped aside to let her through. By the time Solar looked back he had the map open with both hands, held very close to his face, and was pretending not to hear the station attendant offering to help." }
    ] },
  { id: 'jihoon-dorm-errands', after: '9/23', slot: 'evening', events: ['a4-names', 'a4-ice-cream'],
    place: 'Iwatodai Dorm · Kitchen', time: 'Evening', bg: 'iwatodaidorm-kitchen', scene: [
      { n: "Jihoon was unpacking a grocery bag on the dorm's kitchen counter when Solar got home, his shoes in the hall and his name on the visitors' list by the fridge. Two cartons of milk, eggs, a bag of chips. He set a receipt on the fridge under a magnet, then took it down and flattened it against his leg before putting it back." },
      { s: 'jihoon', f: 'neutral', t: "Mitsuru gave me a list on my way over. I did the list. I'm contributing to a society I don't even live in." },
      { s: 'hanni', f: 'happy', t: "You got everything! Thank you!" },
      { s: 'jihoon', f: 'serious', t: "Don't sound so surprised. I can read. I read beautifully." },
      { n: "Hyein looked up from the table to point out that chips weren't on the list. Jihoon pointed at Junpei, who had arrived in the doorway at exactly the sound of the bag opening, and informed her that he'd anticipated demand. Solar put the milk away while they argued. His map was on the table beside Hyein's fabric, with the route from the guesthouse to the dorm drawn over in pen, twice, as if he'd been worried it might wear off." }
    ] },

  { id: 'three-on-the-way', after: '9/24', slot: 'early', schoolOnly: true, events: ['a4-names', 'a4-ice-cream'],
    place: 'Iwatodai · Riverside', time: 'Morning', bg: 'park-2', scene: [
      { n: "There were three of them at the gate this morning. Hanni with Solar's bag, Hyein with a coffee she claimed was for Solar and was drinking, and Jihoon, who had walked over from the guesthouse and was standing slightly apart from them with his hands in his pockets, the way you stand with people you've decided not to like yet and keep accidentally liking." },
      { s: 'jihoon', f: 'neutral', t: "I'm walking her. You two can come. Behind us. At a respectful distance." },
      { s: 'hyein', f: 'serious', t: "We LIVE with her." },
      { s: 'jihoon', f: 'neutral', t: "And I've known her since preschool. Seniority. Look it up." },
      { n: "They walked her along the river in a clump that kept rearranging itself, Jihoon on her left because he'd decided that was his side, Hanni on her right because she hadn't asked, Hyein drifting between them telling Jihoon his sweatshirt was a crime. Every so often one of them would say a thing about her to the other, *she does that*, *she always does that*, and the other would say *she does that at ours too*, and then they'd both look at her like she'd done a trick." },
      { choose: [
        { t: "I can hear you, you know.", then: [
          { s: 'jihoon', f: 'happy', t: "Good. You should know you're being discussed. It's a privilege." }
        ] },
        { t: "(Walk in the middle and let them argue.)", then: [
          { n: "She walked in the middle. It was, she was starting to realize, where she always ended up, and the three of them closed in around her without discussing it, like a coat buttoning." }
        ] }
      ] },
      { n: "At the gate the three of them stopped dead, as if there were a line painted on the pavement only they could see. Hanni gave her the bag. Hyein gave her what was left of the coffee. Jihoon gave her nothing and walked off backwards toward the station, announcing that he was going to reclaim his honor at the arcade, and walked into a bicycle." }
    ] },

  { id: 'sunews-tonight', after: '9/25', slot: 'evening', events: ['a4-names'],
    place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
      { n: "The three phones went off at once. Solar's on the arm of the sofa, Hanni's in her lap, Hyein's face down on the table under a fabric swatch. Not a text. A different sound, a bright little chime Solar had never heard her phone make, from an app she didn't have, that her thumb went straight to anyway." },
      { phone: [
        { from: 'sunews', t: "SUnews posted a photo." },
        { from: 'sunews', t: "early night, solar? 💕 alpha phi's social chair and her little sidekick went out looking for you hours ago and now nobody can find THEM either! some girls really know how to make a night all about themselves ✨" },
        { from: 'sunews', t: "Couldn't load photo. Tap to retry." }
      ], contact: 'SUnews · Instagram' },
      { n: "She tapped. It didn't load. She tapped again. A gray square, and a little circle going round, and the caption sitting under it in the cold blue light like a hand on her shoulder from someone she didn't want to turn around for." },
      { s: 'hyein', f: 'surprised', t: "Oh my God. Oh, I'm going to kill her. I'm actually going to kill her." },
      { s: 'hanni', f: 'serious', t: "Social chair. That's me. I'm the social chair. I'm missing. Apparently." },
      { n: "None of the three of them could open it. Hanni tried. Hyein tried four times and then held her phone over her head as if it might get a better signal from the ceiling. The photo stayed a gray square. Underneath it, the comments came in, one line at a time, the way rain starts." },
      { phone: [
        { from: 'sunews', t: "chenle commented: has anyone actually heard from her" },
        { from: 'sunews', t: "jaemin commented: this isn't funny. take it down" },
        { from: 'sunews', t: "chenle commented: i've called her nine times" }
      ], contact: 'SUnews · Instagram' },
      { n: "Solar didn't know either name. Her chest knew one of them anyway. Someone who didn't say much, and counted things, and had called nine times and said so, precisely, because he'd want somebody to know it had been nine." },
      { choose: [
        { t: "Who's chenle?", then: [
          { s: 'hanni', f: 'sad', t: "Your teammate. He's quiet. He doesn't comment on anything. Ever." },
          { s: 'hyein', f: 'sad', t: "He commented, Hanni." },
          { s: 'hanni', f: 'sad', t: "I know." }
        ] },
        { t: "Who runs this account?", then: [
          { n: "Hanni and Hyein looked at each other. It was a long look, and a practiced one, and it had a whole history in it that she wasn't in." },
          { s: 'hanni', f: 'neutral', t: "Somebody who's very happy you're gone. Don't read the captions, Sol. They're written to be read." }
        ] },
        { t: "(Put the phone face down.)", then: [
          { n: "She put it face down on the arm of the sofa. After a second, Hanni did the same. Hyein held out for a whole minute, and then put hers face down too, on top of the swatch, harder than she needed to." }
        ] }
      ] },
      { n: "Nobody mentioned it at dinner. But that night Solar woke at two and found she'd been holding the phone in her sleep, the gray square still on the screen, as if somebody somewhere were still looking for her and she'd needed to keep the light on." }
    ] },

  { id: 'guesthouse-breakfast', after: '10/1', slot: 'early', events: ['a4-names', 'a4-ice-cream', 'a4-lamppost'],
    place: 'Iwatodai Dorm · Dining Room', time: 'Early Morning', bg: 'iwatodaidorm-diningroom', scene: [
      { n: "Breakfast at the dorm had acquired a guest list. Mitsuru had written it on the whiteboard by the fridge, under VISITORS, in the same handwriting she used for operation briefings: who was coming over from the guesthouse, what time, and, underlined, *out by eight on school days.* Jihoon had added a column titled RATINGS. Mitsuru had erased it. It had come back." },
      { n: "This morning it was Jihoon and Minji. They came up the front path together at seven, not talking, Jihoon complaining about the walk and Minji filming the light on the hedge, and knocked, because Mitsuru had a rule about guests knocking, and waited to be let in, and took their shoes off in the hall like visitors in somebody else's house." },
      { s: 'minji', f: 'neutral', t: "Morning. Can I film breakfast? Not you. Just the table. The light's good on the rice." },
      { s: 'jihoon', f: 'neutral', t: "She asks every day. It's exhausting. Say yes so she stops." },
      { choose: [
        { t: "Film the table.", then: [
          { n: "Minji filmed the table. The rice, the steam off it, Junpei's elbow, Fuuka passing the pickles. Then, at the very end, so fast Solar almost missed it, one second of Solar's hand reaching for the soy sauce. She didn't apologize. She just looked at the screen afterward, and smiled at it, and put the camera away." }
        ] },
        { t: "Film me. I don't mind.", then: [
          { n: "Minji went pink to the ears and lifted the camera, and then didn't press record, and lowered it again, and said maybe tomorrow, and ate her rice very quickly, looking at it." },
          { s: 'jihoon', f: 'neutral', t: "You broke her. Great. Now who's going to film my good side." }
        ] }
      ] },
      { n: "At five to eight Mitsuru looked at the clock, and Jihoon groaned, and Minji was already standing, and the two of them put their bowls in the sink, rinsed, the way you did in a house that wasn't yours, and walked back down the path toward the station side by side, still not talking, which seemed to suit them both." }
    ] },

  { id: 'akihiko-noticed', after: '10/6', slot: 'evening', events: ['a4-names'],
    place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
      { n: "Akihiko came in from a run at nine with his hood up and his face red from the cold and said good evening to the lounge in general, and then, a half second later and slightly differently, to Solar. He went upstairs. Hanni and Hyein, on the sofa, watched him go all the way up, in total silence, like two people watching the last minute of a game." },
      { s: 'hyein', f: 'neutral', t: "So. The boxer." },
      { s: 'solar', f: 'neutral', t: "What about him?" },
      { s: 'hyein', f: 'happy', t: "Nothing. Nothing at all. He just says good evening to you like it's a whole different word. That's all. I'm a fashion major. I notice fit." },
      { choose: [
        { t: "He's my senpai. He trains me.", then: [
          { s: 'hyein', f: 'happy', t: "He TRAINS you. Hanni. He trains her." },
          { s: 'hanni', f: 'neutral', t: "I heard." }
        ] },
        { t: "(Throw a cushion at her.)", then: [
          { n: "The cushion hit Hyein square in the face. Hyein let it slide off slowly, with enormous dignity, and said that was a yes, that was a textbook yes, and Hanni said nothing at all." }
        ] }
      ] },
      { ifEvent: 'a4-there-you-are', then: [
        { n: "Then Hyein's eyes went, without her meaning them to, to the ceiling. To the top floor. To the door at the end of it that was usually shut. She opened her mouth." },
        { s: 'hyein', f: 'neutral', t: "Does he know about..." },
        { s: 'hanni', f: 'serious', t: "Hyein." },
        { n: "Hyein shut her mouth. Hanni changed the channel, which nobody had been watching, and the subject, which everybody had." }
      ], else: [
        { n: "Then Hyein went quiet, and looked at the cushion in her lap, and said in a much smaller voice that it was weird, wasn't it, that she was even allowed to think about it, because back home Sol had a..." },
        { s: 'hanni', f: 'serious', t: "Hyein." },
        { s: 'hyein', f: 'sad', t: "I KNOW. I know. I wasn't going to." },
        { n: "Hanni changed the channel, which nobody had been watching, and the subject, which everybody had. Solar sat between them and felt the shape of a sentence nobody would finish, like a step on a staircase in the dark that turns out not to be there." }
      ] }
    ] },

  { id: 'yunjin-meets-jungwon', after: '10/15', slot: 'evening', events: ['a4-low-tide', 'a4-council-room'],
    place: 'Iwatodai Dorm · Front', time: 'Evening', bg: 'iwotodaidorm-outside', scene: [
      { n: "Jungwon came to the dorm at seven with four math workbooks and a visitor's manner, and Yunjin opened the door. She looked at him. He looked at her. Neither of them moved out of the doorway, and the cold came in around both of them." },
      { s: 'yunjin', f: 'surprised', t: "Oh. Oh, it's YOU." },
      { s: 'jungwon', f: 'neutral', t: "Good evening, Yunjin." },
      { s: 'yunjin', f: 'serious', t: "Don't good evening me in that voice. I know that voice. That's the voice you used at the hospital." },
      { n: "Something crossed his face and was put away, very neatly, and he bowed, a small one, exactly correct." },
      { s: 'jungwon', f: 'neutral', t: "Then you'll know I mean it." },
      { s: 'yunjin', f: 'neutral', t: "Are you here to marry her? Because she's in a cult now, babe, I don't think they allow it. There's a curfew." },
      { s: 'jungwon', f: 'neutral', t: "I'm here to tutor her in calculus." },
      { s: 'yunjin', f: 'serious', t: "With you that's the same thing." },
      { choose: [
        { t: "Jin. Let him in. It's cold.", then: [
          { n: "Yunjin let him in. She didn't move far, so he had to turn sideways to get past her, workbooks and all, and as he did she said, low, *I'm watching you*, and he answered her, just as low, *I know*, and kept walking." }
        ] },
        { t: "You two know each other?", then: [
          { s: 'yunjin', f: 'neutral', t: "Babe. Everybody at home knows him. He's the Yang boy. He's the..." },
          { n: "She stopped. She looked at Solar, and then at Jungwon, and something in her face decided, the way Hanni's had once at a kitchen table, that it wasn't hers to say." },
          { s: 'yunjin', f: 'neutral', t: "He's very good at math. That's what he is. Come in, Math." }
        ] }
      ] },
      { n: "He tutored Solar at the dining table for an hour and a half. Yunjin sat at the other end of it the whole time doing nothing, very loudly, and when he left at nine on the dot she walked him to the gate, and Solar, from the window, saw them stand there a moment longer than a goodbye took, his head bent, hers up, two people from the same city talking about something neither of them would repeat." }
    ] },

  { id: 'crew-breakfast', after: '11/1', slot: 'early', events: ['a4-crew'],
    place: 'Iwatodai Dorm · Dining Room', time: 'Early Morning', bg: 'iwatodaidorm-diningroom', scene: [
      { ifBefore: '11/4', then: [
        { n: "Mitsuru invited the guesthouse to breakfast the morning after the arcade, because, she said, four new guests who had crossed a world in the night deserved rice before they deserved rules. They came up the front path in a clump at seven, in the same navy blazers they'd crossed in, and knocked, and stood in the hall taking their shoes off very carefully, the way boys do in a house where they've been warned to behave." }
      ], else: [
        { n: "The guesthouse came to breakfast on Sunday. All of it, it felt like: four boys in navy blazers coming up the front path in a clump at seven, knocking, taking their shoes off in the hall very carefully, the way boys do in a house where they've been warned to behave." }
      ] },
      { n: "Jihoon came in last, behind them, like a sheepdog. He sat at the end of the table nearest the four of them, and Solar watched him, under the table, kick each of them in turn before they'd finished sitting down." },
      { s: 'junkyu', f: 'flustered', t: "Ow! Jihoon, what..." },
      { s: 'jihoon', f: 'serious', t: "Rules. Listen. I'm only saying them once, and then I'm kicking. Don't crowd her. Don't make her remember. Don't hug her without asking. Junkyu, I'm looking at you. Asahi, I'm not looking at you, you'd never." },
      { s: 'asahi', f: 'neutral', t: "Wow. Thank you. Finally, respect." },
      { s: 'jaehyuk', f: 'neutral', t: "Those are actually very sensible rules. I'm a little worried about where you got them." },
      { s: 'jihoon', f: 'neutral', t: "I'm very sensible. I've always been very sensible. Eat your rice." },
      { n: "They ate. Junkyu looked up every time Solar moved, like a dog listening for its name, and didn't say anything, and every time he opened his mouth there was a small thud under the table and he shut it again. Hyunsuk ate three bowls and complimented Fuuka on every one. Mitsuru watched the clock." },
      { choose: [
        { t: "Junkyu. It's okay. Ask.", then: [
          { n: "His whole face lit up like a sign. Under the table there was a thud, and an *ow*, and then, very quietly, from Jihoon, *fine. FINE.*" },
          { s: 'junkyu', f: 'happy', t: "Later! I'll ask later! I'm saving it!" }
        ] },
        { t: "(Pass Junkyu the pickles. Say nothing.)", then: [
          { n: "She passed him the pickles. He took them in both hands, like a present, and said thank you three times, and Jihoon, across the table, looked at her with an expression she couldn't read and then looked away, as if she'd done something he'd been waiting years to see somebody do for them." }
        ] }
      ] },
      { n: "At five to eight they rinsed their bowls, stacked them, bowed to Fuuka in a row like a very badly rehearsed band, and walked back down the path toward the station together, arguing already, the way they'd presumably been arguing since middle school, a sound that went down the street behind them like a radio someone forgot to turn off." }
    ] },

  { id: 'haechan-stairs', after: '11/6', slot: 'late', events: ['a4-household-introductions'],
    place: 'Iwatodai Dorm · Stairs', time: 'Night · 3 AM', bg: 'iwatodaidorm-hallway', scene: [
      { ifBefore: '11/25', then: [
        { n: "He kept his distance. That was the first thing the dorm learned about the boy at the end of the top floor. His shoes were gone from the hall before six and back after midnight. His door was shut. His bowl was washed and upside down on the rack before anybody else had finished eating, and nobody saw him wash it. Junpei said living with him was like living with a very polite ghost. Hyein said that wasn't a ghost, that was a cat." },
        { n: "And still, somehow, he was always there. On the stairs when she went down for water. On the roof when she went up for air, at the far end of it, by the water tank, not looking at her. In the laundry room at three in the morning, twice. As if the building had a current running through it and they were both caught in the same one, and neither of them was swimming against it very hard." }
      ], else: [
        { n: "He'd stopped pretending to keep his distance, mostly. His door was open in the evenings now. He ate sitting down. But three in the morning still belonged to him, and to the stairs, and she still found him there, the way you find the moon in the same window every night and stop being surprised by it." }
      ] },
      { n: "Tonight it was the stairs. She came down at three in her socks and he was sitting halfway, on the landing, with his headphones round his neck and his elbows on his knees, and he moved over without looking up, to the wall side, to make room, as if she'd asked." },
      { choose: [
        { t: "(Sit down next to him.)", then: [
          { n: "She sat. A hand's width away. Not touching. The stairwell light ticked. Somewhere above them Junpei snored through a door, and Haechan's mouth moved at the corner, and he took one side of the headphones off his neck and held it out to her without a word." },
          { n: "It was the song. Hers. With no words. It went past the place where it always stopped and four bars further, and stopped there, and she sat on the stairs with half of it in her ear and the other half in his, and neither of them said anything until the song had played three times." }
        ] },
        { t: "Can't sleep?", then: [
          { s: 'haechan', f: 'neutral', t: "Never could. Not in either place." },
          { n: "He said it to his hands. Then, after a while, flatter, as if it cost nothing, which was how she knew it cost something:" },
          { s: 'haechan', f: 'neutral', t: "You can't either. Go back to bed, princess. I'll be here." }
        ] },
        { t: "You're everywhere I go, you know.", then: [
          { s: 'haechan', f: 'neutral', t: "Other way round." },
          { n: "He didn't explain it. He didn't look at her. He just sat there on the landing being exactly where she was going to be, and let her think about which of them that made the problem." }
        ] }
      ] },
      { n: "She went back up at four. At the top of the stairs she looked back, and he was still there, and he lifted one hand without turning around, the way you'd tell somebody across a station that you'd seen them, and that was all, and she slept until seven like someone who'd been told it was safe to." }
    ] },

  { id: 'haechan-yunjin-english', after: '11/7', slot: 'evening', events: ['a4-household-introductions', 'a4-low-tide'],
    place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
      { n: "Yunjin waited until the lounge was nearly empty. Then she sat down very close to Solar on the sofa, with the air of a woman about to discuss a crime, and switched, without warning, into English." },
      { s: 'yunjin', f: 'neutral', t: "Okay. Babe. Real talk. We're doing this in English so the dog can't follow. At home he doesn't speak a word of it. I've said things about him in English right in front of him and he just laughed." },
      { s: 'yunjin', f: 'serious', t: "So. You and him. On the stairs. At three in the morning. Twice that I KNOW of." },
      { s: 'haechan', f: 'neutral', t: "Three times." },
      { n: "He was in the kitchen doorway with a glass of water. He'd said it in English. Flat, unbothered, with an accent that was not the accent of a boy who didn't speak a word of it, an accent that sounded like snow on a quad and a university somewhere very cold." },
      { n: "Yunjin stared at him. Then she took her round gold sunglasses off her head and put them on, slowly, indoors, at night." },
      { s: 'yunjin', f: 'surprised', t: "Oh my God. You speak ENGLISH here?" },
      { s: 'haechan', f: 'neutral', t: "One of me does." },
      { choose: [
        { t: "Which one?", then: [
          { s: 'haechan', f: 'neutral', t: "The one who's not your father's dog, agasshi." },
          { n: "He drank his water. He went upstairs. Yunjin watched him go, and then turned to Solar with her sunglasses still on and said, very quietly, in Korean, that she needed to lie down." }
        ] },
        { t: "(Laugh. You can't help it.)", then: [
          { n: "She laughed. She couldn't help it. It came out of her all at once, the real one, and Yunjin turned on her, outraged, and Haechan, in the doorway, looked at her laughing for one second too long and then looked away, and his ears had gone red, and he went upstairs without his water." }
        ] }
      ] },
      { s: 'yunjin', f: 'neutral', t: "He LAUGHED, at home. When I said things. I thought he was laughing at my accent." },
      { s: 'yunjin', f: 'serious', t: "He was NOT laughing at my accent, babe. Nothing about that boy is a coincidence." }
    ] },

  { id: 'sunews-chairs', after: '11/9', slot: 'evening', events: ['a4-household-introductions', 'a4-names'],
    place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
      { n: "It happened again one night, the bright little chime from an app none of them had, and this time there were four phones. Solar's. Hanni's. Hyein's. And one more, at the far end of the lounge, in the pocket of the boy sitting on the arm of the chair nearest the stairs, which chimed exactly when theirs did." },
      { phone: [
        { from: 'sunews', t: "SUnews posted a photo." },
        { from: 'sunews', t: "sigma's recruitment chair AND alpha phi's social chair, both MIA on the same night as solar lee? 👀 we're not saying anything. we're just saying. some people really can't stand to be left out ✨" },
        { from: 'sunews', t: "Couldn't load photo. Tap to retry." }
      ], contact: 'SUnews · Instagram' },
      { n: "Nobody could open it. Hyein didn't even try this time. She read the caption and then looked straight down the lounge at Haechan, who had taken his phone out and was looking at it with no expression at all." },
      { s: 'hyein', f: 'serious', t: "She put you in it." },
      { s: 'haechan', f: 'neutral', t: "She puts everybody in it." },
      { n: "His phone chimed again, and again. Not SUnews. Calls. Missed ones, coming in from that night, one after another, the screen lighting up and going dark in his hand. He didn't turn it face down. He let it ring. Solar, leaning, saw the name on it once before it went dark, and then again, and again." },
      { phone: [
        { from: 'lockscreen', t: "chenle · missed call" },
        { from: 'lockscreen', t: "chenle · missed call" },
        { from: 'sunews', t: "jen0l33 commented: hyuck pick up ur phone" },
        { from: 'lockscreen', t: "chenle · 11 missed calls" }
      ], contact: "Haechan's lock screen" },
      { s: 'hanni', f: 'sad', t: "Eleven." },
      { s: 'haechan', f: 'neutral', t: "He counts." },
      { n: "He said it flat, to the phone, the way you'd say a fact about weather. But he didn't put it away. He held it in his lap with the screen up and let it light, and go dark, and light again, until it stopped, like somebody standing at a window watching a friend walk away down a street and not calling out." },
      { choose: [
        { t: "He sounds like a good friend.", then: [
          { n: "Haechan looked up at her. For a second his face didn't do the flat thing. Then it did." },
          { s: 'haechan', f: 'neutral', t: "Better than I deserve." },
          { n: "He went upstairs. Hanni and Hyein looked at each other, and didn't say anything, and Hanni reached over and turned Solar's phone face down for her, gently, the way you'd close a door on a sleeping room." }
        ] },
        { t: "(Say nothing. Watch the screen with him.)", then: [
          { n: "She didn't say anything. She watched it with him, from across the lounge, eleven, twelve, until it stopped. When it did, he looked up, and found her watching, and didn't look away first, for once. Neither did she." }
        ] }
      ] }
    ] },

  { id: 'haechan-canned-coffee', after: '11/11', slot: 'early', schoolOnly: true, events: ['a4-household-introductions'],
    place: 'Iwatodai Dorm · Lounge', time: 'Early Morning', bg: 'iwatodaidorm-livingroom', scene: [
      { n: "There was a can of iced coffee on top of her school bag by the door. The cheap sweet kind from the machine at the station, cold, the condensation already soaking a ring into the canvas. Nobody in the dorm drank that kind. Nobody in the dorm knew she drank coffee in the mornings and never after dark." },
      { n: "His shoes were already gone from the hall." },
      { n: "Hyein, coming down the stairs behind her with her hair in a towel, saw the can, and saw Solar's face, and stopped." },
      { s: 'hyein', f: 'surprised', t: "Did he just..." },
      { s: 'hanni', f: 'neutral', t: "Don't." },
      { s: 'hyein', f: 'surprised', t: "He didn't even ASK anybody what she..." },
      { s: 'hanni', f: 'serious', t: "Hyein. Don't." },
      { choose: [
        { t: "(Drink it on the way to school.)", then: [
          { n: "She drank it on the monorail with her forehead against the cold window. It was too sweet and exactly right, the way the right song in the wrong room is right, and she didn't think about who'd known, and thought about nothing else all the way to Gekkoukan." }
        ] },
        { t: "(Put it in your bag for later.)", then: [
          { n: "She put it in her bag, unopened. It sat there all morning, cold through the canvas against her hip, and she didn't drink it, and she didn't forget it was there for a single minute of first period." }
        ] }
      ] },
      { n: "He didn't mention it that night. She didn't either. It was, she understood, the kind of thing that only worked if nobody said it out loud, and they were both very, very good at that." }
    ] },

  { id: 'jaehyun-meets-haechan', after: '11/12', slot: 'evening', events: ['a4-knock', 'a4-household-introductions'],
    place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
      { n: "Jaehyun came to the dorm some evenings, as a visitor, the way he did everything, on a schedule only he knew. He brought fruit in a paper bag for Fuuka, who didn't know what to do with it, and sat with Solar in the lounge for exactly an hour, and asked her about school the way you'd go over a game film. Tonight he was ten minutes into it when somebody came down the stairs." },
      { n: "Jaehyun looked up. Haechan stopped on the third step. Neither of them moved, and the whole lounge felt it, the way a room feels a door opening onto weather." },
      { s: 'jaehyun', f: 'neutral', t: "You live here." },
      { s: 'haechan', f: 'neutral', t: "Top floor." },
      { s: 'jaehyun', f: 'serious', t: "We've had this conversation." },
      { s: 'haechan', f: 'neutral', t: "Twice." },
      { s: 'jaehyun', f: 'serious', t: "Then you know how the third one goes." },
      { s: 'haechan', f: 'neutral', t: "I told you I wasn't having it a third time." },
      { n: "It was all very quiet. Jaehyun's voice was low and even and perfectly controlled, and Haechan's was flat, and neither of them had raised a single thing, and Solar, sitting between them on the sofa with a mug in her hands, felt the back of her neck go hot with a fury she had no reason for. She knew this. She knew it bodily. Two men deciding something about her, across her, over her head, as if she were the field." },
      { choose: [
        { t: "I live here too. If you're having it, have it with me.", then: [
          { n: "Both of them looked at her. Jaehyun's face did the thing it did, the play read and the conclusion arrived at, and then, for once, it didn't arrive. It stopped halfway, and stayed there, uncertain, which she suspected she had never once seen on it in her life." },
          { s: 'jaehyun', f: 'neutral', t: "...Fine. That's fair." },
          { s: 'haechan', f: 'neutral', t: "She's always been the one you should've been talking to." },
          { s: 'jaehyun', f: 'serious', t: "Don't." },
          { n: "But he didn't say anything else, and Haechan came down the rest of the stairs and went into the kitchen and got his water and went back up, and Jaehyun sat back down, and asked her about her chemistry grade, and his hand on his own knee didn't unclench for the rest of the hour." }
        ] },
        { t: "(Get up and stand on the stairs between them.)", then: [
          { n: "She got up and went and stood on the bottom step, between them, with her mug, and didn't say anything at all. Haechan looked down at her, and the corner of his mouth moved. Jaehyun looked at her back, and she felt him read it, all of it, and arrive somewhere he hadn't planned to go." },
          { s: 'jaehyun', f: 'neutral', t: "...You used to do that. When we were kids. Stand between me and whoever I was angry at. You couldn't reach either of us." },
          { s: 'haechan', f: 'neutral', t: "She can now." },
          { n: "Then he went back upstairs without his water, and Jaehyun sat down, and the hour went on, and neither of them mentioned it, and Solar's hands were shaking on the mug the whole time and she didn't know whose fault that was." }
        ] }
      ] }
    ] },

  { id: 'minji-meets-haechan', after: '11/14', slot: 'evening', events: ['a4-lamppost', 'a4-household-introductions'],
    place: 'Iwatodai Dorm · Rooftop', time: 'Evening', bg: 'iwatodaidorm-roof-night', scene: [
      { n: "Minji had come over to film the roof at sunset, with Mitsuru's permission and her name on the whiteboard, and Solar had come up to keep her company, and Haechan was already up there, at the far end, by the water tank, with his hood up. He'd been there first. He always seemed to have been there first." },
      { n: "Minji saw him and lowered the camera at once, all the way down, to her side." },
      { s: 'minji', f: 'neutral', t: "I won't film you." },
      { s: 'haechan', f: 'neutral', t: "Didn't ask." },
      { s: 'minji', f: 'neutral', t: "I know. You never ask for anything. That's how I knew." },
      { n: "He turned his head. Not all the way." },
      { s: 'haechan', f: 'neutral', t: "Knew what." },
      { s: 'minji', f: 'neutral', t: "Halloween. A hallway. Four seconds. I had the camera up and I didn't film it." },
      { n: "Something went across his face so fast Solar almost missed it, and was put away. Minji didn't look at Solar. She looked at him, steady, the way she looked down a lens, with nothing between them, and he looked back, and for a long second the two of them were having a conversation Solar wasn't in, about her, in a language made entirely of what neither of them was going to say." },
      { choose: [
        { t: "What hallway?", then: [
          { s: 'minji', f: 'neutral', t: "Nothing. A party. I was being dramatic. It's a film-major thing." },
          { s: 'haechan', f: 'neutral', t: "She was being kind." },
          { n: "He said it to Minji, not to Solar, and it sounded, from him, like the highest thing he knew how to say about anyone. Minji's ears went red under the backwards cap. She lifted the camera, pointed it at the sunset, and pressed record, and didn't turn it toward either of them once." }
        ] },
        { t: "(Leave them to it. Watch the sunset.)", then: [
          { n: "She watched the sunset. Behind her she heard him say, very low, *thanks*, and Minji say *don't*, and then nothing, the two of them standing at either end of a roof not talking about her, which, she was beginning to understand, was the most anyone from her old lives ever did for her, and the hardest." }
        ] }
      ] }
    ] },

  { id: 'mark-meets-haechan', after: '11/19', slot: 'early', events: ['a4-mark', 'a4-household-introductions'],
    place: 'Iwatodai Dorm · Dining Room', time: 'Early Morning', bg: 'iwatodaidorm-diningroom', scene: [
      { n: "Mark came to breakfast as a guest, with his name on the whiteboard in Mitsuru's handwriting and a bag of pastries from the station bakery, which he put in the middle of the table and pushed toward Solar first, and then toward everyone else, so it looked like an accident. Hanni watched him do it. Hyein watched Hanni watch him." },
      { n: "Then Haechan came down the stairs." },
      { n: "Mark saw him and something happened to his whole body, very quickly, and then he was smiling. Bigger than the morning needed. Easy, warm, casual, so casual it was almost loud." },
      { s: 'mark', f: 'surprised', t: "Hyuck! Man. Hey. Of course you're here. Of course you are." },
      { s: 'haechan', f: 'neutral', t: "Mark." },
      { s: 'mark', f: 'neutral', t: "You good? You look good. You're living here? Here, in the dorm? With..." },
      { n: "His eyes went to Solar, and back, so fast it was almost nothing. Haechan's didn't move at all." },
      { s: 'haechan', f: 'neutral', t: "Yeah." },
      { s: 'mark', f: 'neutral', t: "Cool. No, that's cool. That's really cool, man." },
      { n: "Haechan took a bowl from the rack and filled it and ate at the counter, standing, with his back to the table. Mark talked to Solar about the station piano. He was warm. He was easy to listen to. He laughed at the right places and asked her nothing she couldn't answer, and every time Haechan moved behind him he talked a little faster." },
      { s: 'mark', f: 'neutral', t: "He's... look, Sol, he's my oldest friend. I love the guy. But there's a lot you don't..." },
      { s: 'hanni', f: 'neutral', t: "Mark. Pastry?" },
      { n: "She held out the bag. She was smiling. It was the nicest smile Solar had ever seen on her, and it didn't reach anywhere near her eyes, and Mark looked at it, and at her, and took a pastry, and didn't finish the sentence." },
      { choose: [
        { t: "There's a lot I don't what?", then: [
          { s: 'mark', f: 'flustered', t: "Nothing. Remember. There's a lot you don't remember. That's all I meant. Ha. Obviously." },
          { n: "Behind him, at the counter, Haechan rinsed his bowl and put it upside down on the rack and went upstairs without a word, and didn't look at any of them, and his jaw, as he passed the table, was doing something Solar would think about all day." }
        ] },
        { t: "(Take a pastry. Don't ask.)", then: [
          { n: "She took a pastry. She didn't ask. Hyein, across the table, kicked her ankle under it, very gently, once, which meant *good*, and Hanni went on smiling at Mark until he looked at his plate." }
        ] }
      ] },
      { n: "Mark left at eight, with a wave for everyone and a hand on Solar's shoulder at the door, light, like a period at the end of a sentence. When he'd gone, Hyein said, to the table, to nobody, that she didn't love that. Hanni said nobody did. Then they both looked at the ceiling, at the top floor, and then at each other, and didn't say anything else." }
    ] }
];
