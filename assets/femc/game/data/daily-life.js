/* Small, once-per-playthrough routines. Arrival events, not optional link ranks, establish who is here.
   These replace a normal morning/lunch beat, play before the evening menu, or close a late night; they never spend free time.
   Housing (FEMC-REVAMP-LORE.md): Hanni, Hyein, Yunjin and Haechan live in the dorm. Jihoon, Jungwon, Minji, Mark, Jaehyun,
   Cherry and both crews live at the Kirijo guesthouse by the station; at the dorm they are visitors (meals, the lounge).
   Fields and rules: core.js dailyLife (after / until, slot early | morning | lunch | afternoon | after | evening | late,
   schoolOnly / offOnly, days, weather, events, flags, noFlags, met, ranks; cast names speakers with no portrait). Of the
   routines that fit a slot, the one that goes stale soonest plays first, then file order, so keep entries roughly in date
   order. A choice may give a small `stat`; routines give no ♪ and cost no time (After School and the evening still follow). */
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
        { from: 'sunews', t: "jen0l33 commented: HAECHAN PICK UP UR PHONE" },
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
      { s: 'jaehyun', f: 'serious', t: "I told you I wasn't having it a third time." },
      { s: 'haechan', f: 'neutral', t: "Then don't." },
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
    ] },

  /* ── The living world (2026-10-21): the rest of the year. Teachers and students at Gekkoukan, S.E.E.S. at home, and the
     searchers living their days once they've come. Same rules as above; a choice may carry a small `stat`. ── */

  // April · the year begins
  { id: 'ekoda-heian', after: '4/13', until: '5/8', slot: 'morning', schoolOnly: true, events: ['a1-armband'],
    place: 'Gekkoukan High · Classroom', time: 'Morning', bg: 'gekkoukan-classroom-day', cast: { ekoda: 'Mr. Ekoda' }, scene: [
      { n: "Mr. Ekoda read the Heian classics the way other men read out parking fines, in one flat unbroken drone that dared anybody to find it beautiful, and the whole of Solar's homeroom sat under it with their chins in their hands and the April light coming sideways through the windows onto the dust." },
      { s: 'ekoda', t: "*In spring, the dawn.* Sei Shonagon. A woman who had opinions about everything and was right about most of them. Which of you can tell me why she starts with the dawn and not the blossoms?" },
      { n: "Nobody could. A boy two rows over had fallen asleep upright, which was a skill. Solar's hand went up before she'd agreed to it, the way it did lately, as if her body had been sitting in classrooms a long time and remembered the rules better than she did." },
      { choose: [
        { t: "Because everyone else starts with the blossoms.", stat: { knowledge: 1 }, then: [
          { s: 'ekoda', t: "...Yes. Contrarianism, the oldest literary virtue. Sit down before it goes to your head." },
          { n: "It went to her head anyway, a little. He didn't call on her again all period, which in Mr. Ekoda's classroom was a kind of medal." }
        ] },
        { t: "(Put your hand down. Let someone else try.)", then: [
          { n: "She put it down. Ekoda's eyes passed over her like a lighthouse beam and settled on the sleeping boy, who was woken, and questioned, and did not recover for the rest of the morning." }
        ] }
      ] }
    ] },

  { id: 'yukari-roof-melonpan', after: '4/15', until: '5/12', slot: 'lunch', schoolOnly: true, events: ['a1-armband'],
    place: 'Gekkoukan High · Rooftop', time: 'Lunch', bg: 'rooftop-day', scene: [
      { n: "The roof at lunch was wind and cherry petals and other people's conversations, and Solar had found the one bench by the fence that nobody wanted because it caught the full force of the wind off the bay, and she was eating a convenience-store sandwich there like it was a job." },
      { s: 'yukari', f: 'neutral', t: "You know there's a cafeteria. With walls. And chairs that don't rattle." },
      { n: "Yukari sat down on the other end of the bench with her skirt held down in one fist and a paper bag in the other, and took a melon pan out of it, and broke it in half without asking, and held out the bigger half." },
      { choose: [
        { t: "I like it up here. Nobody looks at you.", then: [
          { s: 'yukari', f: 'serious', t: "Yeah. I know. That's why I come up here too." },
          { n: "They ate in the wind without saying much. It was the first lunch since April that hadn't felt like a test." }
        ] },
        { t: "(Take the bigger half. Say thank you properly.)", stat: { kindness: 1 }, then: [
          { s: 'yukari', f: 'blushing', t: "It's a melon pan. It's not a kidney. You don't have to look at me like that." },
          { n: "But she sat a little closer for the rest of lunch, close enough that the wind had to go around both of them." }
        ] }
      ] }
    ] },

  { id: 'akihiko-five-am-walk', after: '4/21', until: '5/9', slot: 'early', events: ['a1-armband'],
    place: 'Iwatodai · Riverside', time: 'Early Morning', bg: 'park-2', scene: [
      { n: "Five in the morning, and somebody was walking along the river under her window very upright and very carefully, like a man carrying a full glass of water on his head. Solar knew the walk before she knew the face. She was dressed and outside before she'd decided to be." },
      { s: 'akihiko', f: 'neutral', t: "Doctor says walking. So I'm walking. Very fast walking. That's allowed." },
      { s: 'akihiko', f: 'serious', t: "Don't tell Mitsuru." },
      { choose: [
        { t: "(Walk with him. Very fast.)", stat: { proficiency: 1 }, then: [
          { n: "They walked the whole river path and back at a speed that was not technically running, his breath tight on the left side where the tape was, hers easy, and at the bridge he looked sideways at her and said she didn't get tired, did she, and she said she didn't know yet." }
        ] },
        { t: "I'm telling Mitsuru.", then: [
          { s: 'akihiko', f: 'happy', t: "No you're not. You're out here at five too." },
          { n: "He had her there. She didn't tell Mitsuru." }
        ] }
      ] }
    ] },

  { id: 'junpei-apathy-news', after: '4/24', until: '5/20', slot: 'evening', events: ['a1-junpei-joins'],
    place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
      { n: "The news was doing a segment on Apathy Syndrome again, a reporter outside a hospital in the drizzle saying *no known cause* in the voice reporters use when they want you to stay through the commercials, and Junpei was sitting on the floor with his cap pushed back watching it like it was a horror movie with a twist he'd already guessed." },
      { s: 'junpei', f: 'serious', t: "It's them, right? The Shadows. Every time there's more of these, it's after a full moon. I'm not crazy. I counted." },
      { s: 'junpei', f: 'neutral', t: "A guy in my building growing up got it. Just sat by the window. For like a year. His mom kept bringing him tea." },
      { choose: [
        { t: "Then we're doing something about it. That's what this is.", stat: { courage: 1 }, then: [
          { s: 'junpei', f: 'happy', t: "...Yeah. Yeah, okay. Field leader says so." },
          { n: "He turned the TV off himself, which nobody had ever seen him do, and went to get chips." }
        ] },
        { t: "(Sit down on the floor next to him.)", stat: { kindness: 1 }, then: [
          { n: "She sat. They watched the rest of the segment together, a doctor with nothing to say saying it carefully, and when the weather came on Junpei let out a breath like he'd been holding it since the convenience store, and said, to the forecast, thanks." }
        ] }
      ] }
    ] },

  { id: 'ono-naginata', after: '4/27', until: '5/26', slot: 'afternoon', schoolOnly: true, events: ['a1-armband'],
    place: 'Gekkoukan High · Classroom', time: 'Afternoon', bg: 'gekkoukan-classroom-day', cast: { ono: 'Mr. Ono' }, scene: [
      { n: "Mr. Ono had his kabuto on, which meant there would be no World History today, only war. He'd got from the Meiji constitution to Tomoe Gozen in under two minutes, a personal best, and now he was miming a naginata with a meter stick in front of the blackboard while the front row leaned back out of range." },
      { s: 'ono', t: "The grip! Everybody gets the grip wrong in the movies. They hold it like a broom. Like a *broom*. Who here thinks they know how you hold a naginata?" },
      { n: "Solar's hands knew. That was the problem. They were already turning on the desk, the left one forward and loose, the right one back and closed, the weight of something long and curved settling into them out of nowhere, and she looked down at them and stopped them, and it was too late, because Ono had seen." },
      { choose: [
        { t: "(Show him the grip.)", stat: { knowledge: 1 }, then: [
          { s: 'ono', t: "...Well! Well, well! A student of history! The left hand *guides*, class, the right hand *decides*. Write that down. She knows. How does she know?" },
          { n: "She didn't know how she knew. She wrote it down anyway, *the left hand guides, the right hand decides,* and looked at it for the rest of the period like it was somebody else's handwriting." }
        ] },
        { t: "(Fold your hands. Look at the board.)", then: [
          { n: "She folded her hands on the desk until they were only hands. Ono moved on to Benkei and seven weapons and a bridge, delighted, and didn't call on her, and her palms itched under the desk the whole way to the bell." }
        ] }
      ] }
    ] },

  { id: 'ikutsuki-golden-week', after: '5/1', until: '5/8', slot: 'evening', events: ['a1-armband'],
    place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
      { n: "The Chairman dropped by after dinner with a box of manju from a department store and his glasses steamed up from the rain, and stood in the lounge beaming at all of them as if they were a garden he'd planted himself." },
      { s: 'ikutsuki', f: 'happy', t: "Golden Week! Do try to rest. A week this golden shouldn't be spent... *tarnishing* yourselves. Ha ha! No? Tarnishing? Golden?" },
      { s: 'junpei', f: 'neutral', t: "...I got it. I just didn't, like, *get* it." },
      { choose: [
        { t: "(Laugh. It was a little funny.)", stat: { charm: 1 }, then: [
          { s: 'ikutsuki', f: 'happy', t: "There! Someone with taste. Solar, you'll go far. Have two manju." },
          { n: "Yukari mouthed *traitor* at her across the coffee table. Solar ate both manju with great dignity." }
        ] },
        { t: "(Take a manju. Say nothing.)", then: [
          { n: "She took a manju. Mitsuru took one too, without looking up from her papers, and said thank you, Chairman, in the voice she used to end conversations, and the Chairman, who had heard that voice before, went home cheerful anyway." }
        ] }
      ] }
    ] },

  // May
  { id: 'akihiko-first-run-back', after: '5/11', until: '6/5', slot: 'early', events: ['a1-priestess'],
    place: 'Iwatodai · Riverside', time: 'Early Morning', bg: 'park-2', scene: [
      { n: "At four fifty-five there was a knock on her door, two short ones, the knock of a man who had been awake since four and was trying to be polite about it." },
      { s: 'akihiko', f: 'happy', t: "Cleared. Doctor signed it yesterday. I'm running. You're running. Shoes." },
      { n: "He didn't wait to see if she'd come. He went down the stairs two at a time, the way he hadn't been allowed to for a month, and she heard him take the last four in one jump, and Mitsuru's door open on the third floor, and close again, very quietly, the way you close a door on something you've decided not to see." },
      { choose: [
        { t: "(Get your shoes.)", stat: { courage: 1 }, then: [
          { n: "He ran like a dog let off a leash, the whole river path and the bridge and back, and she kept up for most of it, and when she didn't he slowed without saying so and pretended he'd been looking at a bird. At the end he put both hands on his knees and laughed, out of breath, at nothing, for a long time." }
        ] },
        { t: "It's five in the morning, senpai.", then: [
          { s: 'akihiko', f: 'neutral', t: "...Right. Yeah. Tomorrow, then." },
          { n: "He went alone. She lay in bed and listened to his feet go down the street, fast and even, and couldn't get back to sleep, and decided that was his fault." }
        ] }
      ] }
    ] },

  { id: 'edogawa-nurse', after: '5/12', until: '6/10', slot: 'lunch', schoolOnly: true, events: ['a1-priestess'],
    place: "Gekkoukan High · Nurse's Office", time: 'Lunch', bg: 'gekkoukan-nurse-office', cast: { edogawa: 'Mr. Edogawa' }, scene: [
      { n: "She'd only come in for a plaster. Tartarus had left a thin cut across the back of her hand that wouldn't stop reopening, and the nurse's office smelled of antiseptic and something burnt and herbal in a beaker on the windowsill that Mr. Edogawa insisted was tea." },
      { s: 'edogawa', t: "A cut like a sickle moon. Hee hee. How did we get this one? Climbing something very tall in the middle of the night?" },
      { n: "He said it in the same voice he said everything, the cheerful creaking voice of a man who'd been reading about alchemy instead of sleeping, and he was looking at her over his glasses with an interest that was much too precise for a plaster." },
      { choose: [
        { t: "Paper cut.", stat: { charm: 1 }, then: [
          { s: 'edogawa', t: "Paper. Of course. Paper is very dangerous. The ancients wrote curses on it, you know. Hee hee. Next!" },
          { n: "There was no next. There was nobody else in the room. He put the plaster on very neatly, and patted it, and told her to drink more water, and she left feeling, absurdly, that she'd passed something." }
        ] },
        { t: "What's in the beaker?", stat: { knowledge: 1 }, then: [
          { s: 'edogawa', t: "Mugwort, willow bark, and a little patience. Good for sleep. You look like a girl who doesn't sleep. Hee hee. Take some." },
          { n: "She didn't drink it. She kept the little paper twist of leaves he gave her in her blazer pocket anyway, and that night her room smelled faintly of it, green and bitter, and she slept straight through until the alarm." }
        ] }
      ] }
    ] },

  { id: 'mitsuru-flyers', after: '5/14', until: '6/12', slot: 'evening', events: ['a1-priestess'],
    place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
      { n: "Mitsuru had taken over the long table in the lounge with three hundred flyers for the student council's spring cleanup and a teapot she'd brought down from the fourth floor, and she was folding them in thirds with a ruler, one at a time, as if each one would be inspected." },
      { s: 'mitsuru', f: 'neutral', t: "You're welcome to sit. You're not obliged to help. The council has members for this. They've all developed prior engagements." },
      { choose: [
        { t: "(Sit down and start folding.)", stat: { kindness: 1 }, then: [
          { n: "Mitsuru poured her a cup of tea without asking and slid it across. They folded in silence for forty minutes, the ruler going *tick* against the table, and when Solar's pile was crooked Mitsuru straightened it with one finger and didn't say anything, and when it stopped being crooked she didn't say anything about that either, which was how Solar knew she'd noticed." }
        ] },
        { t: "You could just fold them in half.", then: [
          { s: 'mitsuru', f: 'surprised', t: "...In half." },
          { n: "She looked at the flyer in her hands as if it had betrayed her. Then she folded the next one in half, very slowly, and looked at it, and set it on the pile, and her mouth did something at one corner that on anyone else would have been a laugh." }
        ] }
      ] }
    ] },

  { id: 'midterm-hallway', after: '5/22', until: '6/2', slot: 'afternoon', schoolOnly: true, events: ['a1-priestess'],
    place: 'Gekkoukan High · 2F Hallway', time: 'Afternoon', bg: 'school-hallwaysecondfloor', cast: { classmate: 'A Classmate' }, scene: [
      { n: "The week after midterms the hallways were full of people comparing answers, which never made anybody feel better and which nobody could stop doing, and a girl from Solar's class she'd never spoken to caught her by the sleeve outside the chemistry lab." },
      { s: 'classmate', t: "Sorry. Sorry, it's just, your notes. Everybody says your notes are really neat. Could I copy the ones from the day I was out? I'll give them back tomorrow. I swear." },
      { choose: [
        { t: "(Hand her the notebook.)", stat: { kindness: 1 }, then: [
          { n: "The girl held it like it was something fragile and said thank you four times, and the next morning it was back on Solar's desk with a sticky note on the cover. *you write like a typewriter. it's so pretty. thank you!!* Solar didn't remember learning to write like a typewriter. She kept the note." }
        ] },
        { t: "Copy them here. I need them tonight.", stat: { charm: 1 }, then: [
          { n: "They sat on the hallway floor by the lab while the girl copied, and talked about nothing, a teacher's tie and a cat on the monorail, and by the bell Solar knew her name and her favorite convenience-store pudding, which was more than she knew about most people in this building." }
        ] }
      ] }
    ] },

  { id: 'rain-humming', after: '5/24', until: '6/22', slot: 'late', weather: ['rain'], events: ['a2-login'],
    place: "Iwatodai Dorm · Solar's Room", time: 'Late Night', bg: 'solar-dormroom-night', scene: [
      { n: "Rain on the window, the soft steady kind, and she was humming. She didn't notice she was doing it until the knock, two small ones, and Yukari's voice through the door, low, careful, the way you'd talk to somebody you weren't sure was awake." },
      { s: 'yukari', f: 'neutral', t: "Hey. Is that you? Singing?" },
      { s: 'yukari', f: 'neutral', t: "It's not a complaint. It's really nice. What is it?" },
      { choose: [
        { t: "I don't know. I keep humming it.", then: [
          { s: 'yukari', f: 'sad', t: "...Huh. Okay. Keep doing it, then. It's better than the rain." },
          { n: "Her feet went away down the hall. Solar lay there and tried to hum it again on purpose, and couldn't find the start, and found it again half an hour later when she'd stopped trying, right at the edge of sleep." }
        ] },
        { t: "(Open the door. Hum it for her.)", stat: { charm: 1 }, then: [
          { n: "Yukari stood in the hallway in her pajamas with her arms crossed and listened to the whole thing, as much of it as there was, which ended in the same place it always ended, four bars short of something." },
          { s: 'yukari', f: 'blushing', t: "It stops." },
          { s: 'solar', f: 'neutral', t: "It always stops there." }
        ] }
      ] }
    ] },

  // June
  { id: 'empty-desk-rumor', after: '6/4', until: '6/7', slot: 'early', schoolOnly: true, events: ['a2-fuuka'],
    place: 'Gekkoukan High · Shoe Lockers', time: 'Morning', bg: 'school-entryhallway', scene: [
      { n: "The shoe lockers had a rumor in them. It went from mouth to mouth over the slippers, low, the way rumors go in June when the air is too wet to carry anything loud: a second-year girl who hadn't been home in days, whose shoes were still in her locker, whose teacher had called it a family matter in homeroom and then looked at the floor." },
      { n: "Solar looked at the shoes. Small, neat, the backs not trodden down. Somebody had put them away carefully on a day they meant to come back for them." },
      { choose: [
        { t: "(Tell Mitsuru tonight.)", then: [
          { n: "She told Mitsuru that night. Mitsuru listened with her whole face going still, and said thank you, and went upstairs to the command room, and the light under that door stayed on until well after midnight." }
        ] },
        { t: "(Close the locker door for her.)", then: [
          { n: "She closed it. The little metal door clicked. A boy next to her said, to nobody, that she'd probably just run away, people did, and Solar thought about a bed made up in April by nobody, and didn't answer him." }
        ] }
      ] }
    ] },

  { id: 'fuuka-laptop-roof', after: '6/15', until: '7/12', slot: 'lunch', schoolOnly: true, events: ['a3-radios'],
    place: 'Gekkoukan High · Rooftop', time: 'Lunch', bg: 'rooftop-day', scene: [
      { n: "Fuuka ate lunch on the roof now, in the corner by the water tank where the wifi from the computer room just barely reached, with her bento untouched beside her and her laptop open on her knees and her face lit blue by a screen full of numbers." },
      { s: 'fuuka', f: 'surprised', t: "Oh! Senpai. Sorry. I'm not being antisocial. I'm graphing." },
      { s: 'fuuka', f: 'neutral', t: "Every reading Lucia took in the tower this month. If I can see the shape of it, maybe I can see it coming. Like weather." },
      { choose: [
        { t: "Show me how it works.", stat: { knowledge: 1 }, then: [
          { n: "She showed her. It took the whole lunch. Columns, and a curve that climbed toward the full moon like a tide coming in, and a little red dot every night Solar had been inside, which Fuuka scrolled past very quickly and then, when she saw Solar see it, scrolled back to and didn't explain." },
          { s: 'fuuka', f: 'neutral', t: "You're... very loud. On the readings. Not bad loud. Just there. It's nice. I always know where you are." }
        ] },
        { t: "(Push her bento closer.)", stat: { kindness: 1 }, then: [
          { n: "She pushed it closer. Fuuka looked at it like she'd forgotten what it was for, and then ate it, all of it, typing one-handed, and at the bell she said thank you in a small surprised voice, as if nobody had ever reminded her about lunch before." }
        ] }
      ] }
    ] },

  { id: 'rainy-season-laundry', after: '6/16', until: '7/10', slot: 'evening', weather: ['rain', 'cloudy'], events: ['a3-radios'],
    place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
      { n: "It had rained for so long that nothing in the dorm would dry. The roof was useless, the dryer was a liar, and somebody had strung a line across the lounge from the curtain rail to the coat hooks, and on it, in no order anyone would admit to, hung the laundry of the entire building." },
      { s: 'yukari', f: 'surprised', t: "Whose is THAT?" },
      { n: "A gray T-shirt the size of a flag, with a hole at the collar and BOXING CLUB on the back in letters worn almost white. Akihiko, on the sofa with a shake, looked at it with no shame at all." },
      { s: 'akihiko', f: 'neutral', t: "Mine. It's lucky." },
      { s: 'junpei', f: 'happy', t: "It's got a hole in it, senpai. Luck's escaping." },
      { choose: [
        { t: "I could fix the hole.", stat: { proficiency: 1 }, then: [
          { n: "She fixed it that night with a sewing kit from the hall cupboard, in small even stitches her fingers did by themselves, and hung it back on the line. In the morning Akihiko found it, and turned the collar over, and looked at the stitches for a long time, and wore it to breakfast without saying anything, collar out, like a medal." }
        ] },
        { t: "(Move Junpei's socks off the lampshade.)", then: [
          { n: "She moved them. They were damp, and the lamp underneath them had been slowly steaming them for an hour, which Junpei called a dryer and Mitsuru, arriving, called a fire hazard, in that order." }
        ] }
      ] }
    ] },

  { id: 'junpei-asleep-2f', after: '6/22', until: '7/12', slot: 'afternoon', schoolOnly: true, events: ['a1-junpei-joins'],
    place: 'Gekkoukan High · 2F Hallway', time: 'Afternoon', bg: 'school-hallwaysecondfloor', cast: { toriumi: 'Ms. Toriumi' }, scene: [
      { n: "Solar's class went down to the second floor for chemistry on Thursdays, past the second-years' rooms, and on Thursdays, through the little window in the door of 2-F, Junpei was always asleep." },
      { n: "Not secretly. Not head-propped-on-a-hand asleep. Fully, gloriously asleep, face down on his textbook with his cap over the back of his head like a lid, while Ms. Toriumi went on talking at the board in a voice that had long ago stopped expecting anything from anyone." },
      { n: "Today, as Solar passed, Ms. Toriumi walked down the aisle without stopping her sentence and set a dictionary on his desk, beside his ear, from about a foot up." },
      { choose: [
        { t: "(Knock on the glass. Wave.)", stat: { charm: 1 }, then: [
          { n: "Junpei shot upright, saw her through the window, and saluted, cap askew, with a crease across his cheek from the page. Half of 2-F turned to look. Ms. Toriumi looked too, at Solar, the long flat look of a teacher who had a third-year's name on a list somewhere and would find it." },
          { n: "At dinner Junpei told everybody she'd saved his life. Yukari said she'd ruined his reputation. Solar said those were the same thing, and Junpei pointed at her with his chopsticks and said *exactly*." }
        ] },
        { t: "(Keep walking. Pretend you didn't see.)", then: [
          { n: "She kept walking. Behind her a dictionary landed, and a chair scraped, and a voice she knew said *I'm awake, I'm awake, I was reading with my face*, and the class laughed, and she had to bite the inside of her cheek all the way down the stairs." }
        ] }
      ] }
    ] },

  { id: 'akihiko-rain-run', after: '6/23', until: '7/18', slot: 'early', weather: ['rain'], events: ['a1-priestess'],
    place: 'Iwatodai Dorm · Front', time: 'Early Morning', bg: 'iwotodaidorm-outside', scene: [
      { n: "It was pouring. It was the kind of rain that made the whole street sound like frying, and Akihiko was standing in it at the bottom of the dorm steps at five past five, soaked to the bone, stretching his calves as if the weather were a rumor he'd heard and decided not to believe." },
      { s: 'akihiko', f: 'neutral', t: "It's just water." },
      { choose: [
        { t: "(Hand him a towel when he gets back.)", stat: { kindness: 1 }, then: [
          { n: "He came back at six steaming like a horse. She was on the step with a towel from the hall cupboard, and he stopped, dripping, and looked at it, and at her, and took it, and put it over his head and stood there a second longer than he needed to under it, where she couldn't see his face." },
          { s: 'akihiko', f: 'blushing', t: "...Thanks. You're up early." }
        ] },
        { t: "(Run in it too.)", stat: { courage: 1 }, then: [
          { n: "She went in. The first ten seconds were horrible and the next ten were funny and then it was just running, rain in her mouth, her socks gone, Akihiko laughing out loud beside her for the whole length of the river like a boy, and at breakfast Mitsuru looked at the two wet pairs of shoes in the hall and said nothing at all, with tremendous force." }
        ] }
      ] }
    ] },

  { id: 'ekoda-tanka', after: '6/29', until: '7/11', slot: 'morning', schoolOnly: true, events: ['a1-armband'],
    place: 'Gekkoukan High · Classroom', time: 'Morning', bg: 'gekkoukan-classroom-day', cast: { ekoda: 'Mr. Ekoda' }, scene: [
      { n: "Mr. Ekoda wanted a tanka from each of them by the end of the period, five-seven-five-seven-seven, on the theme of *the rainy season*, which he wrote on the board and underlined as if it might try to escape." },
      { n: "Solar's came out all at once. She looked at it afterward and didn't know where it had come from. It was about a window and a phone that kept lighting up in the dark, and someone on the other end of it who wouldn't stop, and it wasn't about the rain at all." },
      { choose: [
        { t: "(Hand it in as it is.)", stat: { charm: 1 }, then: [
          { n: "He read it at his desk with his pen hovering. He didn't mark it. He read it again, and looked up at her over the top of the page, and said, in the flattest voice he owned, that it did not scan, and that he would be keeping it, and he put it in his inside pocket instead of the pile." }
        ] },
        { t: "(Cross it out. Write one about frogs.)", stat: { knowledge: 1 }, then: [
          { n: "The frog one scanned perfectly. He gave it a neat red circle and the comment *competent*, which from Mr. Ekoda was practically a sonnet, and the first one stayed in her notebook under a thick black line she could still read through." }
        ] }
      ] }
    ] },

  // July
  { id: 'tanabata-bamboo', after: '7/1', until: '7/6', slot: 'lunch', schoolOnly: true, events: ['a3-radios'],
    place: 'Gekkoukan High · Shoe Lockers', time: 'Lunch', bg: 'school-entryhallway', scene: [
      { n: "The student council had put a bamboo branch in a bucket by the shoe lockers for Tanabata, with a box of paper slips and a sign in Mitsuru's handwriting, *ONE WISH PER STUDENT. PLEASE BE REASONABLE.* By Wednesday it was so heavy with paper it bent." },
      { n: "Junpei's said *a girlfriend (reasonable)*. Somebody had written *MITSURU-SENPAI PLEASE NOTICE ME* in very small letters and hung it at the back. A first-year had wished for her grandmother to come home from the hospital, and someone else had added, under it, in different ink, *me too*." },
      { s: 'junpei', f: 'happy', t: "C'mon, leader. One wish. What's the harm?" },
      { choose: [
        { t: "(Take a slip. Leave it blank. Hang it anyway.)", then: [
          { n: "She hung it blank, at the very top, where you'd have to stand on a chair to see that there was nothing on it. Junpei squinted at it and said that was either really deep or really lazy, and she said yes." }
        ] },
        { t: "(Add *me too* under the first-year's.)", stat: { kindness: 1 }, then: [
          { n: "She added it. Under hers, by the end of the day, three more people had too, in three more inks, and the slip turned slowly on its thread every time the doors opened, heavy with everyone who wanted the same thing." }
        ] }
      ] }
    ] },

  { id: 'finals-fridge-schedule', after: '7/8', until: '7/12', slot: 'early', schoolOnly: true, events: ['a3-hierophant'],
    place: 'Iwatodai Dorm · Dining Room', time: 'Early Morning', bg: 'iwatodaidorm-diningroom', scene: [
      { n: "There was a study schedule on the fridge. Mitsuru had made it. It was color-coded, it had a legend, and every member of the household had a column, and Junpei's column had been highlighted in a shade of yellow that Yukari said meant *concern* and Mitsuru said meant nothing of the kind." },
      { s: 'mitsuru', f: 'neutral', t: "Finals are on Monday. Nobody goes to Tartarus until they're over. I'm aware of how that sounds coming from me." },
      { s: 'junpei', f: 'flustered', t: "Senpai, why is my column longer than everybody's?" },
      { s: 'mitsuru', f: 'neutral', t: "Because I care about you, Iori." },
      { choose: [
        { t: "(Follow the schedule. All of it.)", stat: { knowledge: 1 }, then: [
          { n: "She followed it. At eleven that night Mitsuru passed her door and saw the light on and the textbook open at exactly the page the schedule said, and stopped, and knocked once, and said goodnight, which was the most approving thing Solar had ever heard a person say through a door." }
        ] },
        { t: "(Quiz Junpei over breakfast.)", stat: { kindness: 1 }, then: [
          { n: "She quizzed him over rice. He got four out of ten, then six, then, on the third round, when she'd started doing the voices of the historical figures, nine, and he slammed his hand on the table and said he'd be fine, he'd be totally fine, if she could just come and sit next to him in the exam and do the voices." }
        ] }
      ] }
    ] },

  { id: 'closing-ceremony', after: '7/17', until: '7/17', slot: 'lunch', schoolOnly: true, events: ['a3-hierophant'],
    place: 'Gekkoukan High · Rooftop', time: 'Lunch', bg: 'rooftop-day', scene: [
      { n: "The closing ceremony let out at noon and the whole school went home sunburned and loud, and Solar ended up on the roof with Yukari and Fuuka and a carton of iced tea each, looking out over the bay like it was a calendar with nothing written on it." },
      { s: 'yukari', f: 'neutral', t: "Mitsuru-senpai says there's a trip. Some island. The Kirijo Group has a villa." },
      { s: 'fuuka', f: 'happy', t: "A villa! With the sea! I've never... I've only seen the sea from the bridge." },
      { s: 'yukari', f: 'serious', t: "I'm bringing three swimsuits and I'm not discussing it." },
      { choose: [
        { t: "I don't think I own a swimsuit.", then: [
          { s: 'yukari', f: 'surprised', t: "...Okay. Mall. Tomorrow. This is an emergency." },
          { s: 'fuuka', f: 'happy', t: "Can I come? I don't own one either. I own a school one. It has my name on it." }
        ] },
        { t: "Summer. Huh.", then: [
          { n: "She said it like a word in another language. The other two looked at her, and then at each other, and Fuuka shifted along the bench until their shoulders touched, and nobody said anything about it, and the bay went on being blue and enormous in front of all three of them." }
        ] }
      ] }
    ] },

  { id: 'aigis-learns-to-sit', after: '7/25', until: '8/20', slot: 'evening', events: ['a3-yakushima'],
    place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
      { n: "Aigis was standing in the lounge again. Not doing anything. Standing, beside the sofa, very straight, watching the television over everyone's heads with polite interest, like a museum guard who had been told the exhibit might move." },
      { s: 'junpei', f: 'neutral', t: "Aigis. You can sit, you know. That's what the sofa's for." },
      { s: 'aigis', f: 'neutral', t: "I am aware of the sofa's function. I do not require rest. I am standing by." },
      { s: 'yukari', f: 'neutral', t: "Standing by for WHAT? It's a game show." },
      { choose: [
        { t: "(Move over. Pat the cushion beside you.)", stat: { kindness: 1 }, then: [
          { n: "Aigis looked at the cushion. Then at Solar. Then she sat, with the careful total attention of somebody performing a delicate operation, knees together, hands on knees, back not touching anything." },
          { s: 'aigis', f: 'neutral', t: "...This is acceptable. Is this correct?" },
          { s: 'solar', f: 'neutral', t: "You can lean back." },
          { n: "She leaned back. It took her a full minute. By the end of the game show she was leaning on Solar's shoulder, very lightly, the way a bird lands on a wire, and nobody in the lounge said a single word about it in case she noticed and stopped." }
        ] },
        { t: "Standing by is fine too.", then: [
          { s: 'aigis', f: 'happy', t: "Thank you, Solar-san. I will stand by the sofa. Near you." },
          { n: "She stood by the sofa, near Solar, for the rest of the evening, and at the end of the game show, when the winner screamed, Aigis said *congratulations* to the television very sincerely, and Junpei had to leave the room." }
        ] }
      ] }
    ] },

  { id: 'summer-roof-sheets', after: '7/27', until: '8/24', slot: 'early', offOnly: true, events: ['a3-yakushima'],
    place: 'Iwatodai Dorm · Rooftop', time: 'Early Morning', bg: 'iwatodaidorm-roof-evening', scene: [
      { n: "Summer mornings on the dorm roof were the only cool hour of the day, and Fuuka had claimed it for the laundry, every sheet in the building pegged out on lines between the water tank and the fence and filling with wind like sails on a ship going nowhere." },
      { s: 'fuuka', f: 'sad', t: "The middle line keeps sagging. I've tied it four times. I think the knot hates me personally." },
      { choose: [
        { t: "(Retie it. Your hands seem to know a knot.)", stat: { proficiency: 1 }, then: [
          { n: "Her hands knew a knot. Over, under, a twist back on itself, pulled tight, the kind of knot people tie on boats, and the line went taut and hummed in the wind. Fuuka looked at it, and at Solar's hands, and wrote something in the little notebook she kept in her apron pocket, and wouldn't say what." }
        ] },
        { t: "(Hold the line while she ties it.)", stat: { kindness: 1 }, then: [
          { n: "She held it. Fuuka tied it with her tongue between her teeth, a fifth time, worse, and it held, and they both stood back and watched the sheets fill and snap and dry in the sun, and called it a success, because it was." }
        ] }
      ] }
    ] },

  // August
  { id: 'ice-expedition', after: '8/1', until: '8/30', slot: 'after', offOnly: true, events: ['a3-yakushima'],
    place: 'Iwatodai Dorm · Lounge', time: 'Daytime', bg: 'iwatodaidorm-livingroom', scene: [
      { n: "The air conditioning in the lounge died at noon with a long rattling sigh like a man lying down, and by one the dorm had the climate of the inside of a rice cooker, and Junpei was lying face down on the floor with his cheek on the tiles announcing that this was it, this was how it ended." },
      { s: 'junpei', f: 'serious', t: "Expedition. Convenience store. Ice. Who's with me. I need a team. I need a leader." },
      { s: 'akihiko', f: 'happy', t: "It's two kilometers. I'll run there and back before you've found your shoes." },
      { choose: [
        { t: "(Race Akihiko there.)", stat: { courage: 1 }, then: [
          { n: "She raced him. She lost, by a whole parking lot, and he was standing outside the automatic doors in the blast of cold air when she arrived with a bag of ice already in one hand and her favorite popsicle in the other, which she had never told him was her favorite. He didn't explain. She didn't ask." }
        ] },
        { t: "(Lead Junpei's expedition. Slowly. In the shade.)", stat: { charm: 1 }, then: [
          { n: "They went the long way, from shadow to shadow, Junpei narrating it like a documentary about a doomed polar mission, Yukari behind them pretending she wasn't with them, and came back with ice cream for the whole house, and ate it in front of the open fridge door, all of them, until Mitsuru found them and, after a long moment, asked for a spoon." }
        ] }
      ] }
    ] },

  { id: 'koromaru-first-night', after: '8/8', until: '8/31', slot: 'evening', events: ['a3-full-house'],
    place: 'Iwatodai Dorm · Front', time: 'Evening', bg: 'iwotodaidorm-outside', scene: [
      { n: "The dorm had a dog now, and nobody had agreed on how. Ken had drawn up a walking rota on a sheet of lined paper with a ruler, very small and very formal, and taped it by the front door, and Koromaru was lying under it with his chin on his paws, looking at the rota as if he'd also like to see the minutes of the meeting." },
      { s: 'ken', f: 'serious', t: "Solar-san. I've put you on Thursdays. If that's not acceptable, I can move you. I've left gaps for flexibility." },
      { s: 'koromaru', f: 'happy', t: "Woof." },
      { choose: [
        { t: "Thursdays are perfect.", stat: { kindness: 1 }, then: [
          { s: 'ken', f: 'happy', t: "Thank you. He likes the river. And the shrine. And he doesn't like the man at the corner with the bicycle. Neither do I." },
          { n: "Koromaru stood, and stretched, and walked over to Solar and sat on her foot, which Ken looked at, and wrote down." }
        ] },
        { t: "Who's on tonight?", then: [
          { s: 'ken', f: 'neutral', t: "...Aragaki-san. He put himself down. Every night. I didn't ask him to." },
          { n: "He said it carefully, to the rota, and something in the way he said the name made Solar look at him. But Shinjiro was already coming down the steps with the lead looped over his wrist and his coat on in August, and Koromaru was already up, tail going, and the moment went out the door with them." }
        ] }
      ] }
    ] },

  { id: 'shinjiro-breakfast-six', after: '8/9', until: '9/6', slot: 'early', events: ['a3-full-house'],
    place: 'Iwatodai Dorm · Kitchen', time: 'Early Morning', bg: 'iwatodaidorm-kitchen', scene: [
      { n: "Somebody was making breakfast at six. Real breakfast. Miso and grilled fish and rice, the smell of it coming up the stairwell like a hand on her shoulder, and when Solar came down in her socks the kitchen was empty and the pot was on low and there were nine bowls set out on the counter in a row." },
      { n: "Shinjiro was in the doorway to the back steps with his coat on, halfway out, like a man caught leaving a crime scene." },
      { s: 'shinjiro', f: 'neutral', t: "...It was there when I got up." },
      { choose: [
        { t: "Thank you for breakfast, Shinjiro.", stat: { kindness: 1 }, then: [
          { s: 'shinjiro', f: 'neutral', t: "Didn't make it." },
          { s: 'shinjiro', f: 'neutral', t: "Fish needs another minute. Don't let Iori take the big one, he always takes the big one." },
          { n: "He left. She gave the fish another minute. She gave Junpei the small one, and when he complained she said the cook had left instructions, and Junpei said what cook, and nobody at the table answered him, and Akihiko smiled into his bowl." }
        ] },
        { t: "(Get a tenth bowl down. Hold it out to him.)", then: [
          { n: "He looked at the bowl. He looked at it long enough that she thought he'd go anyway. Then he took it, and filled it, and ate standing at the back door with the morning coming in gray behind him, not looking at her, and rinsed the bowl and set it upside down on the rack before anybody else came down." }
        ] }
      ] }
    ] },

  { id: 'aki-shinji-protein', after: '8/12', until: '9/20', slot: 'late', events: ['a3-full-house'],
    place: 'Iwatodai Dorm · Kitchen', time: 'Late Night', bg: 'iwatodaidorm-kitchen', scene: [
      { n: "One in the morning, and two grown men were having an argument in the kitchen in whispers, which was somehow louder than shouting. Solar stopped on the stairs. Akihiko had a blender jug in one hand. Shinjiro had the lid." },
      { s: 'shinjiro', f: 'neutral', t: "You're not putting that in the blender at one in the morning. It sounds like a jet engine. Ken's got school." },
      { s: 'akihiko', f: 'serious', t: "It's protein, Shinji. It doesn't dissolve if you stir it. It just sits there. Like a threat." },
      { s: 'shinjiro', f: 'neutral', t: "Then drink the threat." },
      { choose: [
        { t: "(Come down. Shake it in a jar with the lid on.)", stat: { proficiency: 1 }, then: [
          { n: "She took the jug from Akihiko and poured it into a jam jar from the cupboard and screwed the lid on tight and shook it, hard, for thirty seconds, and handed it back to him smooth. Both of them stared at the jar. Then at each other. Then Shinjiro made a noise in his chest that was very nearly a laugh." },
          { s: 'shinjiro', f: 'happy', t: "...Twelve years. Twelve years I've listened to that blender." }
        ] },
        { t: "(Go back upstairs. Let them have it.)", then: [
          { n: "She went back up. Behind her, quieter now, one of them said *remember the orphanage kitchen, the one with the broken lid*, and the other one said *don't*, and then they both laughed, low, the same laugh, the way people laugh who learned it in the same room." }
        ] }
      ] }
    ] },

  { id: 'phone-on-a-frequency', after: '8/26', until: '9/4', slot: 'evening', events: ['a4-first-text'],
    place: 'Iwatodai Dorm · Command Room', time: 'Evening', bg: 'iwatodaidorm-commandroom', scene: [
      { n: "Fuuka asked to borrow her phone. She asked the way Fuuka asked for everything, apologizing first, and then she took it up to the command room and plugged it into three different machines with cables Solar didn't know the names of and sat looking at the screen for a long time with her hand over her mouth." },
      { s: 'fuuka', f: 'neutral', t: "It's receiving. On a band that... doesn't exist. Not a real band. It's like the phone is listening for somewhere a long way away, and every so often somewhere answers." },
      { s: 'fuuka', f: 'sad', t: "I'm sorry. I know that doesn't help. I just didn't want you to think you were imagining it." },
      { choose: [
        { t: "Can you tell where it's coming from?", stat: { knowledge: 1 }, then: [
          { s: 'fuuka', f: 'neutral', t: "No. But it's not one place. It's three. Three directions at once. Like a radio that's tuned between stations and getting a little of all of them." },
          { n: "She unplugged it very gently and gave it back, warm from the machines, and Solar held it in both hands all the way down the stairs." }
        ] },
        { t: "Thank you for checking.", stat: { kindness: 1 }, then: [
          { n: "Fuuka went pink. She wound the cables up neatly and said it was nothing, it was what she was for, and then said that wasn't what she meant, and then gave up and just smiled at the phone in Solar's hands, as if it were a small animal they'd found together." }
        ] }
      ] }
    ] },
  // September · the second term, and the first searchers
  { id: 'aigis-lunch-crowd', after: '9/2', until: '9/30', slot: 'lunch', schoolOnly: true, events: ['a3-yakushima'],
    place: 'Gekkoukan High · Classroom', time: 'Lunch', bg: 'gekkoukan-classroom-day', cast: { classmate: 'A Classmate' }, scene: [
      { n: "Aigis's desk at lunch had become a tourist attraction. Six people around it, then eight, second-years leaning in the door, and Aigis in the middle of it eating nothing with perfect posture and answering every question she was asked with the complete, terrible honesty of a girl who had never been taught that you weren't supposed to." },
      { s: 'classmate', t: "Aigis-san, do you have a boyfriend?" },
      { s: 'aigis', f: 'neutral', t: "No. I have Solar-san. I have been assigned to her. In my own estimation." },
      { n: "Eight heads turned to Solar at once, like sunflowers." },
      { choose: [
        { t: "She means we're friends.", stat: { charm: 1 }, then: [
          { s: 'aigis', f: 'happy', t: "Yes. Friends. That is the correct word. I am still calibrating." },
          { n: "The crowd decided this was adorable, which it was, and dispersed with the satisfied murmur of people who had a new thing to repeat, and by the afternoon the whole third year knew that the transfer student was calibrating, and said it about everything." }
        ] },
        { t: "(Sit down next to her and eat your lunch.)", stat: { kindness: 1 }, then: [
          { n: "She sat down with her lunch on Aigis's desk. Aigis moved her own empty hands off it to make room, precisely, and the crowd, seeing that the attraction now had a keeper, drifted away a few at a time, and by the bell it was just the two of them, and Aigis said, quietly, that that had been a great deal of attention, and thank you." }
        ] }
      ] }
    ] },

  { id: 'ono-tsukimi', after: '9/8', until: '9/30', slot: 'afternoon', schoolOnly: true, events: ['a4-hermit'],
    place: 'Gekkoukan High · Classroom', time: 'Afternoon', bg: 'gekkoukan-classroom-day', cast: { ono: 'Mr. Ono' }, scene: [
      { n: "Mr. Ono had swapped the kabuto for a paper moon pinned to the blackboard, for tsukimi, and was explaining how the samurai of Edo used to sit up all night on the fifteenth day of the eighth month drinking and writing poems to it, which he made sound like the most reasonable thing a person could do with a night." },
      { s: 'ono', t: "They believed the full moon showed you the truth! Lovers, enemies, the face you hid at court. All of it, under the moon. Wonderful, wonderful. Of course, they were drunk." },
      { n: "Half the class laughed. Solar didn't. She was looking at the paper moon, which someone had cut a little crooked, and thinking about what the full moon had shown her this year, which was none of the things Mr. Ono meant, and all of them." },
      { choose: [
        { t: "Did anybody ever not want to see it?", stat: { knowledge: 1 }, then: [
          { s: 'ono', t: "Ha! An excellent question. Yes. There's a poem. A courtier who closed his shutters on the full moon so he wouldn't have to see the face of the one who left. Very sad. Very Heian. Write it down!" },
          { n: "She wrote it down. *Closed the shutters.* She looked at it a long time after the bell." }
        ] },
        { t: "(Laugh with everyone else.)", then: [
          { n: "She laughed, a beat late. Mr. Ono beamed at the room like a man whose joke had finally landed after twenty years of trying, and drew a rabbit on the paper moon, pounding rice, and didn't teach any actual history at all." }
        ] }
      ] }
    ] },

  { id: 'girls-meet-koromaru', after: '9/14', until: '10/13', slot: 'evening', events: ['a4-names'],
    place: 'Iwatodai Dorm · Front', time: 'Evening', bg: 'iwotodaidorm-outside', scene: [
      { n: "Koromaru had decided, on no evidence, that the two new girls were his. He followed Hanni from room to room like a small white bodyguard and slept across Hyein's door at night so that she had to climb over him in the morning, and tonight, when Solar came home, all three of them were sitting on the front step, Koromaru in the middle, getting his ears done from both sides at once." },
      { s: 'hanni', f: 'happy', t: "He's the best boy. He's the best boy in Japan. I asked him." },
      { s: 'hyein', f: 'neutral', t: "He has eyebrows. Did you know dogs had eyebrows? He uses them on me. He's judging my outfit. He's right, it's a rough outfit, I've only got four." },
      { choose: [
        { t: "(Sit down. Take the paw he offers you.)", stat: { kindness: 1 }, then: [
          { n: "He offered it the moment she sat down, as if they'd agreed on it earlier. She took it. Hanni made a small sound, and Hyein said *oh, come on*, and the four of them sat there in the last of the light, the dog holding hands with the girl who didn't remember anyone, very seriously, while the two girls who did watched them do it." }
        ] },
        { t: "He's on Ken's rota. You have to sign up.", then: [
          { s: 'hanni', f: 'surprised', t: "There's a ROTA? Who do I talk to? I want Tuesdays. I'll do Tuesdays and Saturdays. Hyein will do mornings." },
          { s: 'hyein', f: 'serious', t: "Hyein will not do mornings." },
          { n: "By the next day there were two new names on the rota by the door, in English, in round handwriting, and Ken had underlined them with his ruler, which meant they were official." }
        ] }
      ] }
    ] },

  { id: 'hyein-laundry-schedule', after: '9/17', until: '10/16', slot: 'evening', events: ['a4-names'],
    place: 'Iwatodai Dorm · Laundry Room', time: 'Evening', bg: 'iwatodaidorm-laundryroom', scene: [
      { n: "The laundry room had a schedule on the door now. Hyein's. It was drawn by hand on a sheet of sketch paper with a ruler and color-coded by fabric, and under it, in smaller writing, *DELICATES BY APPOINTMENT ONLY*, and under that, in Junpei's writing, *who made u queen*, and under that, in Hyein's again, *the dryer did.*" },
      { s: 'hyein', f: 'serious', t: "Your sweater was in on hot. On HOT, Solar. With towels. Like an animal. I saved it. I'm not going to talk about what I saw." },
      { choose: [
        { t: "Teach me the schedule.", stat: { proficiency: 1 }, then: [
          { n: "She taught her the schedule. It took twenty minutes and a lot of pointing, and at the end of it Solar could sort a load by fabric and temperature without thinking about it, which she suspected was a thing she'd once known and been taught out of, by Hyein, in a different laundry room, for exactly this reason." },
          { s: 'hyein', f: 'happy', t: "Okay, that's eerie. You did the face. You did the exact same face last time. Last time I taught you this." }
        ] },
        { t: "(Hold the sweater up. It's two sizes smaller.)", then: [
          { n: "Hyein looked at it. Solar looked at it. It was a sweater for a very ambitious cat. Hyein took it out of her hands without a word and put it in a bag marked *PROJECTS* and said it would be a hat by Friday, and on Friday it was a hat, and it was a good hat." }
        ] }
      ] }
    ] },

  { id: 'jihoon-gate-bento', after: '9/28', until: '10/23', slot: 'lunch', schoolOnly: true, events: ['a4-ice-cream'],
    place: 'Gekkoukan High · Front Gate', time: 'Lunch', bg: 'gekkoukanhigh', cast: { guard: 'The Security Guard' }, scene: [
      { n: "There was a tall boy in a navy blazer that was not a Gekkoukan blazer at the school gate at lunch, holding a convenience-store bento up over the bars like an offering at a shrine, and the security guard was standing beside him with the face of a man who'd been told *I'm her emergency contact* four times in a row." },
      { s: 'jihoon', f: 'happy', t: "SOL. Lunch. You forgot it. I know you forgot it because I watched you leave without it, which I wasn't doing, I was coincidentally at the dorm at seven." },
      { s: 'guard', t: "Young man, I've said it nicely." },
      { s: 'jihoon', f: 'neutral', t: "And I've heard it nicely. I'm a guest of this nation. Treat me with dignity." },
      { choose: [
        { t: "(Take the bento through the bars. Thank the guard.)", stat: { charm: 1 }, then: [
          { n: "She took it, and bowed to the guard, and the guard, who had clearly expected to have to physically remove someone today, bowed back, relieved. Jihoon watched her take the lid off. It was the cheapest one in the shop and he'd taken all the pickles out, because she didn't like the pickles, which nobody here knew." },
          { s: 'jihoon', f: 'neutral', t: "You're welcome. I'm leaving. This is me leaving. I'm extremely busy." }
        ] },
        { t: "Jihoon, you can't be here.", then: [
          { s: 'jihoon', f: 'serious', t: "I can be anywhere. I'm the almighty Hoon. Doors open for me. Gates..." },
          { n: "The guard closed the gate the rest of the way with a definitive clang. Jihoon looked at it, and at her through it, and passed the bento between the bars sideways, with dignity, and walked off backwards toward the station saying something about tyranny." }
        ] }
      ] }
    ] },

  { id: 'minji-films-junpei', after: '9/30', until: '10/28', slot: 'evening', events: ['a4-lamppost'],
    place: 'Iwatodai Dorm · Rooftop', time: 'Evening', bg: 'iwatodaidorm-roof-evening', scene: [
      { n: "Minji had come over from the guesthouse to film the roof at dusk, her name on Mitsuru's whiteboard with the time, and Junpei, who had been up there with his bat, had discovered within thirty seconds that there was a camera, and had not stopped performing since." },
      { s: 'junpei', f: 'happy', t: "Okay, okay, get this one. This is the swing. This is the swing that's gonna be in the documentary. Slow-mo. Do slow-mo." },
      { s: 'minji', f: 'neutral', t: "I can't do slow-mo on this. It's a little camera. It just does... regular." },
      { s: 'junpei', f: 'flustered', t: "Then I'll swing slow!" },
      { choose: [
        { t: "(Pitch for him. Make it a real one.)", stat: { courage: 1 }, then: [
          { n: "She pitched. A tennis ball, underhand, hard, and he hit it clean off the roof and over the street and into somebody's garden, and stood there with his mouth open, and Minji, behind the camera, whispered *got it*, the way you'd say a prayer had been answered." },
          { s: 'minji', f: 'happy', t: "That was real. That's the one. You both looked real." }
        ] },
        { t: "(Stand beside Minji and watch through her screen.)", stat: { charm: 1 }, then: [
          { n: "She stood at Minji's shoulder and watched Junpei on the little screen, smaller and brighter and somehow more himself, swinging slow-motion with his whole heart for an audience of two. Minji didn't say anything. She tilted the screen toward Solar a few degrees so she could see better, and kept it there." }
        ] }
      ] }
    ] },

  // October
  { id: 'quiet-breakfast', after: '10/6', until: '10/12', slot: 'early', events: ['a4-visiting-hours'],
    place: 'Iwatodai Dorm · Dining Room', time: 'Early Morning', bg: 'iwatodaidorm-diningroom', scene: [
      { n: "Breakfast had gone quiet that week in a way nobody mentioned. The nine bowls on the counter at six had stopped. Somebody kept setting out a tenth place at the table anyway, out of habit, and somebody else kept quietly putting it back." },
      { n: "Hanni had taken over the rice. She'd only known him a few weeks, across a dinner table, but she knew what a house sounded like when it had lost someone at the table, and she made far too much, every morning, and pressed it into rice balls and lined them up on a plate by the door so that everyone who went past on the way out took one without having to sit down and be looked at." },
      { s: 'hanni', f: 'neutral', t: "Take two. One for later. You'll forget lunch." },
      { choose: [
        { t: "(Take two.)", then: [
          { n: "She took two. Akihiko's shoes were already gone from the hall; he'd run before light again. She put the second rice ball in her pocket for him, without deciding to, and at school she found him on the stairs and gave it to him and he looked at it in his hand like he didn't know what it was for, and then ate it in three bites, and said thanks, to the wall." }
        ] },
        { t: "Hanni. Thank you. For the rice.", stat: { kindness: 1 }, then: [
          { s: 'hanni', f: 'sad', t: "It's just rice." },
          { s: 'hanni', f: 'neutral', t: "It's what you do. When a house is sad. My mom does it. You did it once, at home. You don't remember. You made so much rice." }
        ] }
      ] }
    ] },

  { id: 'yunjin-feeds-the-cult', after: '10/12', until: '11/8', slot: 'evening', events: ['a4-low-tide'],
    place: 'Iwatodai Dorm · Dining Room', time: 'Evening', bg: 'iwatodaidorm-diningroom', scene: [
      { n: "Yunjin had bought onigiri for the entire household, every flavor the konbini made, and laid them out on the dining table in a grid like evidence, and was now standing at the head of it explaining the fillings to S.E.E.S. in a mix of English, Korean and pointing that only she understood and everyone obeyed." },
      { s: 'yunjin', f: 'happy', t: "Salmon. Tuna mayo. The pickled plum one is a war crime, don't eat it. Babe, you, the tall serious one. You look like you'd eat the war crime." },
      { s: 'mitsuru', f: 'surprised', t: "...Are you addressing me?" },
      { s: 'yunjin', f: 'neutral', t: "I'm addressing your energy. Here. Plum. It's yours. It's a compliment." },
      { choose: [
        { t: "Jin. She's in charge of the whole house.", then: [
          { s: 'yunjin', f: 'neutral', t: "Oh, I know, babe. That's why she gets first pick." },
          { n: "Mitsuru looked at the plum onigiri in her hand for a long moment. Then she unwrapped it, correctly, in the three-tab way that Junpei had never once managed, and ate it, and said it was very good, and Yunjin pointed at her and said *I KNEW it* so loudly that Koromaru barked." }
        ] },
        { t: "(Take the war crime yourself.)", stat: { courage: 1 }, then: [
          { n: "She took it. She ate it. It was so sour her whole face folded in on itself, and Yunjin shrieked, delighted, and Junpei applauded, and across the table Mitsuru quietly took a second one and ate that too, with no expression whatsoever, as a matter of principle." }
        ] }
      ] }
    ] },

  { id: 'exam-week-lamp', after: '10/19', until: '10/22', slot: 'late', events: ['a4-council-room'],
    place: "Iwatodai Dorm · Solar's Room", time: 'Late Night', bg: 'solar-dormroom-night', scene: [
      { n: "Exam week, and it was a quarter to midnight, and her desk lamp was the only light on the second floor. Calculus. She'd been on the same problem for forty minutes and it had started to look at her." },
      { phone: [
        { from: 'jungwon', t: "the light's on in your window. i can see it from the road." },
        { from: 'jungwon', t: "i'm not outside your window. i walked past. on the way back. it's on the way back." },
        { from: 'jungwon', t: "go to sleep. you've done enough. you'll do better tired than you will if you finish that page." }
      ], contact: 'Jungwon' },
      { choose: [
        { t: "(Turn off the lamp.)", then: [
          { n: "She turned it off. Somewhere down the road a figure in a navy blazer who wasn't standing outside her window started walking again toward the station, and she lay in the dark with the problem still unsolved in her head, and fell asleep in the middle of it." }
        ] },
        { t: "(Do one more problem. Then turn it off.)", stat: { knowledge: 1 }, then: [
          { n: "She did one more. She got it. It was so obvious once she saw it that she laughed out loud in the empty room, and turned off the lamp, and her phone lit up one more time in the dark." },
          { phone: [{ from: 'jungwon', t: "thank you." }], contact: 'Jungwon' }
        ] }
      ] }
    ] },

  { id: 'festival-aprons', after: '10/26', until: '10/29', slot: 'evening', events: ['a4-names'],
    place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
      { n: "Solar's class was doing a café for the culture festival, and somebody had volunteered her to make the aprons, and she had come home with a bag of cheap cotton and a sketch and an expression, and Hyein had taken one look at the expression and cleared the lounge table with her forearm." },
      { s: 'hyein', f: 'serious', t: "Who designed this? This is a bib. You're serving coffee, not feeding a baby." },
      { s: 'hyein', f: 'happy', t: "Okay. Pockets. A tie at the back, not a hook. A little ruffle, or I'll die. Give me three hours and the machine and I'll make your whole class look like a shop people want to go into." },
      { choose: [
        { t: "(Cut while she sews.)", stat: { proficiency: 1 }, then: [
          { n: "They worked till one. Solar cut, Hyein sewed, Hanni ironed and kept the tea coming, and by the end there were twelve aprons on the back of the sofa with pockets and ruffles and ties, and Hyein, very tired, lying on the floor, said it was her first international commission and that she'd be sending Gekkoukan an invoice." }
        ] },
        { t: "Hyein, you're not even a student here.", then: [
          { s: 'hyein', f: 'neutral', t: "I'm not a student ANYWHERE right now. I have so much time. Let me be useful. Let me be useful with a ruffle." },
          { n: "So Solar let her. On the day, a girl from her class turned the apron over in her hands and asked where on earth she'd bought them, and Solar said a friend made them, and the word *friend* didn't feel big enough, and she didn't have another one." }
        ] }
      ] }
    ] },

  // November · the house fills up
  { id: 'crew-at-the-fence', after: '11/2', until: '11/27', slot: 'lunch', schoolOnly: true, events: ['a4-crew'],
    place: 'Gekkoukan High · Front Gate', time: 'Lunch', bg: 'gekkoukanhigh', scene: [
      { n: "Four boys in navy blazers were standing along the fence at the edge of the sports field at lunch, the way boys stand outside a zoo enclosure, and the second-years playing volleyball on the other side of it had stopped playing volleyball." },
      { s: 'junkyu', f: 'happy', t: "SOL! Hi! We're not here! We're just looking at your school! It's so big! You have a POOL?" },
      { s: 'asahi', f: 'neutral', t: "He made us come. I'd like that on the record." },
      { s: 'hyunsuk', f: 'neutral', t: "I'm assessing the academic environment. For myself. For when I come back. As a teacher. Possibly." },
      { s: 'jaehyuk', f: 'neutral', t: "We'll go. We're going. I've apologized to the gentleman with the whistle twice. He was very understanding." },
      { choose: [
        { t: "(Wave at all of them. Even Asahi.)", stat: { charm: 1 }, then: [
          { n: "She waved. Junkyu waved back with both arms, Hyunsuk with one, Jaehyuk with a little polite bow, and Asahi, after a long moment of visible struggle, lifted two fingers from the fence, which Junkyu immediately told everyone about, all the way back to the station, as the greatest victory of his life." }
        ] },
        { t: "(Come over to the fence. Talk to them.)", stat: { kindness: 1 }, then: [
          { n: "She went over. They crowded the fence on their side, all talking at once, about the guesthouse bath and the monorail and a vending machine that sold hot corn soup, and she stood on her side and listened, and the bell went, and Junkyu said *already?* in a voice like somebody had taken his ice cream, and she found she'd been laughing the whole time and hadn't noticed." }
        ] }
      ] }
    ] },

  { id: 'sunoo-croissant-delivery', after: '11/10', until: '12/9', slot: 'early', schoolOnly: true, events: ['a4-yeobos'],
    place: 'Iwatodai Dorm · Front', time: 'Early Morning', bg: 'iwotodaidorm-outside', scene: [
      { n: "At ten to seven a bicycle came up the road with a paper bag in the basket and a boy in a flowered apron under his coat pedaling it, very upright, ringing the bell at every cat." },
      { s: 'sunoo', f: 'happy', t: "Delivery! I made too many! I always make too many, it's a sickness, my grandmother says so. For the house. For everyone. For you first." },
      { n: "The bag was warm. It steamed in the cold. Inside there were a dozen croissants packed so close they'd fused into one long golden loaf of croissant, and on top, in a separate little bag of its own, one with red icing in a careful heart." },
      { choose: [
        { t: "Sunoo, you're going to be late for your own café.", then: [
          { s: 'sunoo', f: 'happy', t: "It's MY café. It opens when I get there. That's the best thing about it." },
          { n: "He rang the bell twice, for goodbye, and pedaled off down the hill with his apron flapping, and the croissants were gone from the dining table in six minutes, and the one with the heart stayed in her bag all day, and she didn't let herself wonder who'd told him she liked the red icing." }
        ] },
        { t: "(Give him a rice ball for the road. Hanni made too many too.)", stat: { kindness: 1 }, then: [
          { n: "He took it like a medal. He held it up and looked at it in the gray light and said it was the first thing anyone had made *him* since he got here, and his eyes went a bit wet, and he blamed the cold, and ate it one-handed all the way down the hill." }
        ] }
      ] }
    ] },

  { id: 'cards-in-the-lounge', after: '11/14', until: '12/13', slot: 'evening', events: ['a4-household-introductions', 'a4-low-tide'],
    place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
      { n: "There was a card game in the lounge with no agreed rules. Yunjin had brought it from the konbini. Junpei claimed to know it. Haechan had been passing through to the kitchen and had been made to sit down by Yunjin's foot, which was now on his knee, keeping him there." },
      { s: 'yunjin', f: 'serious', t: "He's counting. Babe, he's counting the cards. Look at his face. That's his counting face." },
      { s: 'haechan', f: 'neutral', t: "That's my face." },
      { s: 'junpei', f: 'flustered', t: "How is he winning? He doesn't even know what game it is! I don't know what game it is!" },
      { choose: [
        { t: "(Sit down. Deal yourself in.)", stat: { charm: 1 }, then: [
          { n: "She dealt herself in. She won the next hand without trying, and the one after, and Haechan watched her lay down the last card with his chin on his fist and said, flat, *there she is*, and Yunjin threw the whole deck in the air." }
        ] },
        { t: "(Watch Haechan's face instead of the cards.)", then: [
          { n: "She watched him. He didn't look at her once the whole game. He lost the last hand on purpose, so obviously that Junpei celebrated for a full minute before he realized, and then Haechan got up, and took his water, and on the way past the back of the sofa his knuckles brushed her shoulder, once, so lightly it might have been the sleeve of his hoodie, and might not." }
        ] }
      ] }
    ] },

  { id: 'house-at-three', after: '11/22', until: '12/20', slot: 'late', events: ['a4-sisters'],
    place: "Iwatodai Dorm · Solar's Room", time: 'Night · 3 AM', bg: 'solar-dormroom-night', scene: [
      { n: "She couldn't sleep, so she counted the house instead. It was a fuller house than April's. Every sound in it belonged to somebody now, and she could name them all from her bed in the dark." },
      { n: "Hyein's hairdryer, through the wall, at three, because Hyein dried her hair at three. Junpei snoring on the floor below, like a small engine. Mitsuru's door opening and closing, once, on the fourth floor, the way it did every night when she checked the hallway and pretended she hadn't. Koromaru's tags. The radiator at the far end of the top floor that knocked, and the boy in that room who never slept, not turning it off. Akihiko's alarm, which wasn't an alarm, which was his own feet hitting the floor at four fifty-nine, a minute before it would have gone off." },
      { n: "In April she'd lain in this bed and listened to an empty building and counted the exits." },
      { choose: [
        { t: "(Count the people instead.)", then: [
          { n: "She counted the people. She got to fourteen before she lost track, and started again, and fell asleep somewhere around the dog, which she'd counted twice, because he deserved it." }
        ] },
        { t: "(Get up. Check the hallway, the way Mitsuru does.)", stat: { kindness: 1 }, then: [
          { n: "She went out in her socks and stood in the hallway. Every door shut. Every door with someone behind it. On the fourth floor, Mitsuru's door opened, and Mitsuru looked down the stairwell at her, and Solar looked up, and neither of them said anything, and then Mitsuru nodded, once, the way you'd nod to a colleague on the night shift, and closed it." }
        ] }
      ] }
    ] },

  // December
  { id: 'jungwon-council-lunch', after: '12/1', until: '12/12', slot: 'lunch', schoolOnly: true, events: ['a4-council-room'],
    place: 'Gekkoukan High · Student Council Room', time: 'Lunch', bg: 'gekkoukan-student-council', scene: [
      { n: "The council room at lunch, and Jungwon was at the long table with the athletic budget and a red pen and no lunch at all, which she could tell, because there was a single wrapped rice cracker by his elbow that he'd been not eating since nine." },
      { s: 'jungwon', f: 'neutral', t: "I've eaten." },
      { s: 'solar', f: 'neutral', t: "What did you eat?" },
      { s: 'jungwon', f: 'neutral', t: "...Breakfast. Conceptually." },
      { choose: [
        { t: "(Put half your lunch in front of him. Sit. Wait.)", stat: { kindness: 1 }, then: [
          { n: "She sat across from him and waited, with her chopsticks, the way you'd wait for a cat to come to a dish. He looked at the food and then at her and then capped his pen, very precisely, and ate, not quickly, with a small furrow between his eyebrows like it was a problem she'd set him, and when it was gone he said thank you to the table in the voice he used for formal correspondence." },
          { s: 'jungwon', f: 'flustered', t: "You did this at home too. Every week. I always pretended I'd already eaten. You always knew." }
        ] },
        { t: "The budget can wait twenty minutes.", then: [
          { s: 'jungwon', f: 'neutral', t: "The budget has been waiting since 2007. It's very patient. I'm less so." },
          { n: "But he moved it to one side. Not far. An exact forty-five degrees, out of the way, where it could still see him. Then he unwrapped the rice cracker, finally, and broke it in two, and gave her the bigger half, which was the most he'd ever conceded to anything in her presence." }
        ] }
      ] }
    ] },

  { id: 'evoker-etiquette', after: '12/7', until: '12/20', slot: 'evening', events: ['a5-haechan-awakens'],
    place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
      { n: "Junpei had called a meeting. He had a whiteboard. On the whiteboard he had written EVOKER ETIQUETTE in capitals and underlined it twice, and in front of it, on the sofa, in a row, sat the four newest members of S.E.E.S., with the faces of people who had been told there would be snacks." },
      { s: 'junpei', f: 'serious', t: "Rule one. You don't point it at anybody. Ever. Not as a joke. Rule two. You don't twirl it. Jihoon." },
      { s: 'jihoon', f: 'neutral', t: "I twirled it ONCE. It was an expression of joy." },
      { s: 'minji', f: 'neutral', t: "Can I film the meeting? For history?" },
      { s: 'jungwon', f: 'neutral', t: "I've taken notes. Is there a handout? There should be a handout." },
      { s: 'haechan', f: 'neutral', t: "Rule three. Nobody talks about how it feels." },
      { n: "The lounge went quiet. Junpei looked at the whiteboard, and then at Haechan, and then put the marker down." },
      { s: 'junpei', f: 'neutral', t: "...Yeah. That one's real, actually. Nobody makes you talk about it. That's the rule." },
      { choose: [
        { t: "Rule four. You come home.", stat: { courage: 1 }, then: [
          { n: "Junpei wrote it on the whiteboard, under the others, and underlined it three times. Nobody erased it. It was still there in January." }
        ] },
        { t: "(Bring out the snacks.)", stat: { charm: 1 }, then: [
          { n: "She brought out the snacks. The meeting immediately disintegrated into a fight about whether the chips were a Hoax flavor or a Runners flavor, which was a fight only people from somewhere else could have, and the boy who belonged to two of the somewheres sat on the end of the sofa eating the chips in question and refusing, flatly, to say." }
        ] }
      ] }
    ] },

  { id: 'finals-december', after: '12/9', until: '12/13', slot: 'early', schoolOnly: true, events: ['a5-train'],
    place: 'Iwatodai Dorm · Dining Room', time: 'Early Morning', bg: 'iwatodaidorm-diningroom', scene: [
      { n: "Mitsuru's study schedule was back on the fridge, and it had grown. It had a column for every person in the household, including four who did not go to Gekkoukan and one dog, and the searchers had studied it with the expressions of people who had moved into a house with a constitution." },
      { s: 'hyein', f: 'surprised', t: "I'm on it. Why am I on it. I don't have exams. I don't have a school." },
      { s: 'mitsuru', f: 'neutral', t: "You've been assigned quiet hours, Hyein. Between eight and eleven. For the benefit of those who do." },
      { s: 'hyein', f: 'serious', t: "The HAIRDRYER is not LOUD." },
      { choose: [
        { t: "(Follow the schedule. All of it, again.)", stat: { knowledge: 1 }, then: [
          { n: "She followed it. It was eerily easy. Somewhere at the back of her, a girl who had followed a great many schedules made by other people stood up and did this one too, and was good at it, and didn't ask whether she wanted to." }
        ] },
        { t: "(Defend the hairdryer.)", stat: { charm: 1 }, then: [
          { n: "She defended it. Mitsuru listened to the defense, all of it, with her chin on her hand, and then moved Hyein's quiet hours to between nine and eleven, which Hyein called a landmark ruling and Hanni called a miracle and Mitsuru called nothing at all, because she'd already gone back to her tea." }
        ] }
      ] }
    ] },

  { id: 'post-finals-roof', after: '12/17', until: '12/20', slot: 'lunch', schoolOnly: true, events: ['a5-crossroad-3'],
    place: 'Gekkoukan High · Rooftop', time: 'Lunch', bg: 'rooftop-day', scene: [
      { n: "The last exam let out at noon, and the third years came up onto the roof in their coats like people let out of a building after a fire drill, blinking. The sky was white and very high. Somebody had brought a ball. Nobody was playing with it." },
      { n: "Akihiko was at the fence with a shake. Yukari was on the bench with her scarf over her mouth. Aigis was standing, as always, but she was standing next to the bench now, which was progress." },
      { s: 'akihiko', f: 'neutral', t: "That's the last exam we'll ever take here. Third years. Did you think about that?" },
      { choose: [
        { t: "I didn't. I'm thinking about it now.", then: [
          { s: 'akihiko', f: 'sad', t: "Yeah. Me too. Just now." },
          { n: "They stood at the fence and looked at the school laid out below them, the field and the gate and the long roof of the gym, as if they were memorizing it, which they were, and neither of them said that either." }
        ] },
        { t: "(Throw the ball at him.)", stat: { courage: 1 }, then: [
          { n: "She threw the ball. He caught it one-handed without spilling the shake and threw it back, harder, and then Yukari was up, and Aigis, and some second-years from the stairs, and for twenty minutes the third years of Gekkoukan played a game with no rules in their winter coats on the roof, shouting, like children, like people who knew exactly what they were doing." }
        ] }
      ] }
    ] },

  // January (only on a year that goes on)
  { id: 'new-year-leftovers', after: '1/3', until: '1/7', slot: 'early', offOnly: true, flags: ['year-goes-on'],
    place: 'Iwatodai Dorm · Kitchen', time: 'Early Morning', bg: 'iwatodaidorm-kitchen', scene: [
      { n: "The dorm on the third of January smelled of osechi and burnt mochi and too many people sleeping in. Fuuka and Hanni were at the stove in matching aprons toasting the last of the mochi on a wire rack, arguing very politely about whether you were allowed to put cheese on it." },
      { s: 'hanni', f: 'happy', t: "You're allowed. It's the law at home. Sol, tell her. You put cheese on everything. Cheese and honey. You called it a crime against tradition and ate four." },
      { s: 'fuuka', f: 'surprised', t: "Cheese and HONEY?" },
      { choose: [
        { t: "(Try it. Cheese and honey.)", stat: { courage: 1 }, then: [
          { n: "It was a crime against tradition. She ate four. Fuuka watched her eat the fourth with an expression of horrified scientific interest, and then wrote *cheese & honey (Solar)* in her recipe notebook under New Year's, and underlined it, and tried one, and ate three." }
        ] },
        { t: "(Help with the dishes instead.)", stat: { kindness: 1 }, then: [
          { n: "She washed. Hanni dried. Fuuka put away, in the wrong cupboards, which they both let her do, and the kitchen window steamed up gray and white, and outside the snow on the rail didn't move, and for an hour nobody in the building had anywhere to be." }
        ] }
      ] }
    ] },

  { id: 'third-term-gate', after: '1/8', until: '1/16', slot: 'early', schoolOnly: true, flags: ['year-goes-on'],
    place: 'Gekkoukan High · Front Gate', time: 'Morning', bg: 'gekkoukanhigh', scene: [
      { n: "There was frost on the gate on the first day of the third term, and the cherry trees along the path were black and bare, and Solar stood at the bottom of the steps with her bag over her shoulder and looked at it all the way she'd looked at it in April, as if she'd woken up inside it." },
      { n: "In April she'd known the building and not her own name. It was a strange thing to stand in the same place and know them both a little better and still not be sure which one she'd be taking home." },
      { s: 'aigis', f: 'neutral', t: "Solar-san. You have stopped. Is something wrong with the gate?" },
      { choose: [
        { t: "Nothing's wrong. I'm just looking at it.", then: [
          { s: 'aigis', f: 'neutral', t: "Then I will look at it too." },
          { n: "She stood beside Solar and looked at the gate, gravely, as if it might do something, until the bell went, and then said it had been a very good gate, and they went in." }
        ] },
        { t: "(Take her arm. Go in together.)", stat: { kindness: 1 }, then: [
          { n: "Aigis looked down at the arm through hers with great interest, and adjusted her stride, exactly, to match, and they went up the steps in step, and a first-year coming the other way stopped and stared, and Aigis said good morning to him, very kindly, and he fled." }
        ] }
      ] }
    ] },

  { id: 'after-graduation-talk', after: '1/12', until: '3/2', slot: 'lunch', schoolOnly: true, flags: ['year-goes-on'],
    place: 'Gekkoukan High · Classroom', time: 'Lunch', bg: 'gekkoukan-classroom-day', cast: { classmate: 'A Classmate' }, scene: [
      { n: "Everybody in the third year had started talking about after. Universities, and entrance exams, and somebody's cousin's company, and a boy at the back who was going to be a chef in Osaka and said it like a dare. It came around the lunch table like a bowl being passed, and it got to Solar." },
      { s: 'classmate', t: "What about you? Where are you going after graduation?" },
      { choose: [
        { t: "I haven't decided yet.", then: [
          { s: 'classmate', f: 'neutral', t: "Lucky. My parents decided mine when I was six." },
          { n: "Everybody laughed. Solar laughed too. It was true, and it was also the truest thing she'd said all week, and the bowl moved on to the next person, and she was grateful to it." }
        ] },
        { t: "Home. I think. Somewhere I'm from.", then: [
          { n: "The girl nodded as if that were a normal answer, which, to everyone else at the table, it was. Solar ate the rest of her lunch looking out the window at the frost on the field, and the word sat in her mouth all afternoon like a stone she was keeping warm." }
        ] }
      ] }
    ] },

  { id: 'household-photo', after: '1/17', until: '3/4', slot: 'evening', flags: ['year-goes-on'], events: ['a4-lamppost'],
    place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
      { n: "Minji had brought a tripod from the guesthouse and set it up in the middle of the lounge, and was walking around the room moving people like furniture, very gently, with two fingers on a shoulder or an elbow, and nobody argued with her, which had never happened to anyone in this building before." },
      { s: 'minji', f: 'neutral', t: "Everybody. All of you. I want one where everybody's in it. I'm asking properly. It's just for us. Nobody's ever going to see it but us." },
      { n: "S.E.E.S. on the sofa and the floor and the arms of chairs. The searchers behind them, standing on the cushions, which Mitsuru allowed, once. Koromaru in the middle with Ken's arm around him. Somebody holding up a peace sign behind somebody else's head. It was too many people for one frame, and Minji made them fit anyway." },
      { choose: [
        { t: "(Stand in the middle.)", stat: { charm: 1 }, then: [
          { n: "She stood in the middle. Minji set the timer and ran, and slid in at the end beside her, and the flash went, and for a tenth of a second all of them were exactly where they were and nowhere else, in one place, on purpose, together." }
        ] },
        { t: "(Make Minji get in it too.)", stat: { kindness: 1 }, then: [
          { s: 'minji', f: 'flustered', t: "I don't... I'm not usually in them. I'm the one who takes them." },
          { s: 'solar', f: 'neutral', t: "Not this one." },
          { n: "So she got in it. Front and center, because that was the space everybody left for her without being asked, and the flash went, and afterward, looking at the little screen, she went very quiet, and said she'd never been in one of her own before, and that it was a good one, and that she was going to keep it forever, whatever forever was." }
        ] }
      ] }
    ] },

  { id: 'last-quiet-walk', after: '2/28', until: '3/5', slot: 'late', flags: ['year-goes-on'],
    place: 'Iwatodai Dorm · Hallway', time: 'Late Night', bg: 'iwatodaidorm-hallway', scene: [
      { n: "She walked the dorm at night, the whole of it, top to bottom, the way she'd walked it the first week to learn where the doors were. The fourth floor and the command room, dark. The third, Mitsuru's light still on. Her own floor, and the girls' doors with the shopping list still taped to one of them, curling at the corners now. The top floor and the radiator that knocked." },
      { n: "The lounge, the long table, the whiteboard by the fridge with VISITORS on it and the names rubbed out and rewritten so many times the board had gone gray. The front door. The rota for the dog, which had grown three new columns since August." },
      { n: "She stood in the hall and put her hand flat on the wall, for no reason, the way you'd put your hand on the side of a horse." },
      { choose: [
        { t: "(Go back up to bed.)", then: [
          { n: "She went back up. The building made all its small night noises around her, the way it had every night for eleven months, and none of them were strange anymore, and she fell asleep counting them." }
        ] },
        { t: "(Add your name to the whiteboard. Under RESIDENTS.)", then: [
          { n: "There was no RESIDENTS column. She made one. She wrote her name in it, *Solar*, and nothing after it, and looked at it, and left it there, and in the morning someone had drawn a small sun next to it, and someone else had drawn a smaller one, and nobody ever said who." }
        ] }
      ] }
    ] },
  // More of the year: after school, Golden Week, June, August, the winter break
  { id: 'yukari-crepe-after', after: '4/16', until: '5/15', slot: 'after', schoolOnly: true, events: ['a1-armband'],
    place: 'Gekkoukan High · Shoe Lockers', time: 'After School', bg: 'school-entryhallway', scene: [
      { n: "Yukari was leaning on Solar's shoe locker after the last bell with her bag over her shoulder and the expression of a person who had already decided something on your behalf." },
      { s: 'yukari', f: 'neutral', t: "There's a crepe stand by the station. Strawberry custard. It's a crime that you haven't had one. I'm fixing the crime. Ten minutes, then you're free to go do whatever you do." },
      { choose: [
        { t: "(Go. Get the strawberry custard.)", stat: { charm: 1 }, then: [
          { n: "It was very good. Yukari watched her eat it with the satisfaction of somebody whose recommendation had landed, and stole the last strawberry off the top, and said that was the fee, and walked her back to the station, and left her there, free to go, with powdered sugar on her blazer she wouldn't notice until the evening." }
        ] },
        { t: "(Go, but order something different. Make her try it.)", then: [
          { n: "She ordered chocolate banana. Yukari looked betrayed. Then she tried it, and looked more betrayed, because it was better, and said so through a mouthful, and they agreed never to tell anyone, and ten minutes became twenty, and then Yukari looked at her phone and swore and ran for her archery practice with crepe in her hand." }
        ] }
      ] }
    ] },

  { id: 'golden-week-breakfast', after: '5/2', until: '5/6', slot: 'early', offOnly: true, events: ['a1-armband'],
    place: 'Iwatodai Dorm · Kitchen', time: 'Early Morning', bg: 'iwatodaidorm-kitchen', scene: [
      { n: "Golden Week, and the whole dorm was asleep except two people. Akihiko, who never slept in and couldn't run yet and was going out of his mind about it, and Solar, who didn't know why she was up and had stopped asking. They found each other in the kitchen at six like two dogs who'd both heard the same noise." },
      { s: 'akihiko', f: 'neutral', t: "Protein pancakes. I've never made them. The packet says it's easy. The packet is a liar, probably. Help me." },
      { choose: [
        { t: "(Take over the pan.)", stat: { proficiency: 1 }, then: [
          { n: "She took over the pan. Her hands knew the flip. He watched them do it with frank, competitive interest and tried it himself on the next one, and it landed on the stove, and he ate it off the stove anyway, and said it was the best one, and it was not." }
        ] },
        { t: "(Let him do it. Eat whatever comes out.)", stat: { kindness: 1 }, then: [
          { n: "What came out was a stack of gray discs with the texture of a gym mat. She ate two. He watched her eat them with growing hope, and then with suspicion, and then tried one himself, and put it down, and said *you're a liar*, and she said *a kind one*, and he laughed so hard his taped ribs made him stop." }
        ] }
      ] }
    ] },

  { id: 'akihiko-club-window', after: '5/25', until: '6/30', slot: 'after', schoolOnly: true, events: ['a1-priestess'],
    place: 'Gekkoukan High · Boxing Club', time: 'After School', bg: 'gekkoukan-boxing-club', cast: { firstyear: 'A First-Year' }, scene: [
      { n: "The boxing club's door was propped open for the heat, and on her way out Solar passed it and heard her own name, and stopped. Akihiko was in the ring in front of a row of first-years with their gloves on and their faces terrified, and he was pointing at her through the doorway with one taped hand." },
      { s: 'akihiko', f: 'neutral', t: "That. Look at how she's standing. Weight on the back foot, chin down, hands where she can use them. She doesn't even know she's doing it. That's a guard." },
      { s: 'firstyear', t: "...Senpai, is she in the club?" },
      { s: 'akihiko', f: 'neutral', t: "No. She's better than the club." },
      { choose: [
        { t: "(Raise your hands. Give them the guard properly.)", stat: { courage: 1 }, then: [
          { n: "She lifted her hands, left forward, chin down, and the first-years copied her all at once, a row of small nervous guards in the doorway's light, and Akihiko looked from them to her with an expression she'd never seen on him, something between pride and alarm, and told her to get out before she took his job." }
        ] },
        { t: "(Wave. Keep walking. Let him have his moment.)", stat: { charm: 1 }, then: [
          { n: "She waved and walked on. Behind her she heard him say *see, that's also good, that's knowing when to leave the ring*, and the first-years say *yes, senpai* in chorus, and she was nearly at the gate before she stopped smiling." }
        ] }
      ] }
    ] },

  { id: 'get-well-card', after: '6/9', until: '6/13', slot: 'lunch', schoolOnly: true, events: ['a2-empress'],
    place: 'Gekkoukan High · 2F Hallway', time: 'Lunch', bg: 'school-hallwaysecondfloor', scene: [
      { n: "The desk across the courtyard was empty again, but differently now. Somebody had cleared the pencil case away. Yukari came down the hall at lunch with a big folded card from the stationery shop, the kind with a cartoon bear on the front, already half full of handwriting." },
      { s: 'yukari', f: 'neutral', t: "For the hospital. From the dorm. Junpei's written a whole paragraph. Don't read it. It's mostly about his batting average." },
      { choose: [
        { t: "(Write something short and true.)", stat: { kindness: 1 }, then: [
          { n: "She wrote *you held on. we're glad you did.* and signed it, and looked at it, and it was the kind of thing she'd have wanted someone to write to her in April, and she hadn't known that until she wrote it. Yukari read it over her shoulder and didn't say anything and closed the card very gently." }
        ] },
        { t: "(Draw a small sun next to your name.)", then: [
          { n: "She drew a little sun, eight rays, next to her name. She didn't know why. It looked right there, the way her handwriting looked right on the enrollment form, and Yukari said it was cute, and the next person to sign the card, Mitsuru, after a long moment of visible consideration, drew a very small snowflake next to hers." }
        ] }
      ] }
    ] },

  { id: 'ken-summer-homework', after: '8/12', until: '8/30', slot: 'evening', events: ['a3-full-house'],
    place: 'Iwatodai Dorm · Dining Room', time: 'Evening', bg: 'iwatodaidorm-diningroom', scene: [
      { n: "Ken was at the dining table with his summer homework spread out in a perfect grid, every workbook squared to the edge of the table, and he'd been looking at the same math problem for twenty minutes with the stillness of a boy who would rather die than ask for help." },
      { s: 'ken', f: 'neutral', t: "I'm fine. I'm just checking my work. It's correct. I'm checking it very thoroughly." },
      { choose: [
        { t: "(Sit down. Do your own homework next to him. Wait.)", stat: { knowledge: 1 }, then: [
          { n: "She sat and opened a book and didn't look at him. It took eleven minutes. Then he slid the workbook two inches toward her, without a word, and she leaned over and looked at it and asked him a question instead of telling him the answer, and he got it, and wrote it down, and said *I knew that*, and she said *I know*, and he did the next six without stopping." }
        ] },
        { t: "That one's hard. It took me ages too.", stat: { kindness: 1 }, then: [
          { s: 'ken', f: 'neutral', t: "...It did?" },
          { s: 'ken', f: 'neutral', t: "Then could you show me how you did it. Not the answer. The how. For future reference." },
          { n: "She showed him the how. He took notes on it in the margin in small careful handwriting, and underlined the important part, and thanked her formally when he'd finished, as if she'd delivered a lecture, and the next night he was at the table again, and saved her a seat." }
        ] }
      ] }
    ] },

  { id: 'koromaru-morning-lead', after: '8/14', until: '9/12', slot: 'early', days: [4], events: ['a3-full-house'],
    place: "Iwatodai Dorm · Solar's Room", time: 'Early Morning', bg: 'solar-dormroom-day', scene: [
      { n: "Thursday. She knew it was Thursday before she opened her eyes, because there was a weight on the end of her bed and a lead lying across her ankles, and Koromaru was sitting at her door with the expression of a dog who had read the rota and was holding her to it." },
      { s: 'koromaru', f: 'happy', t: "Woof." },
      { choose: [
        { t: "(Get up. River route. It's Thursday.)", stat: { kindness: 1 }, then: [
          { n: "They took the river route, which Ken's rota said he preferred and which he did, pulling toward it from the front door like a small white sled dog. At the bridge he stopped, and sat, and looked out at the water for a full minute, as if checking that it was still there, and then they went home, and he ate his breakfast in four bites and went to sleep on her feet under the table." }
        ] },
        { t: "Five more minutes.", then: [
          { n: "He lay down across her legs with a long sigh that was very clearly a negotiation. Five minutes later, exactly, he stood up and licked her face. It was, she had to admit, a fair system." }
        ] }
      ] }
    ] },

  { id: 'gate-after-school', after: '9/29', until: '10/28', slot: 'after', schoolOnly: true, events: ['a4-ice-cream'],
    place: 'Gekkoukan High · Front Gate', time: 'After School', bg: 'gekkoukanhigh', scene: [
      { n: "There was a committee at the school gate after the last bell. Hanni and Hyein on one side of it, Jihoon on the other, arguing about her, in front of her, while the whole third year filed past and looked." },
      { s: 'hyein', f: 'serious', t: "She's coming shopping. She needs a coat. It's going to be cold and she has a blazer and a dream." },
      { s: 'jihoon', f: 'neutral', t: "She's coming to the arcade. The crane game has disrespected me for the last time. I need a witness." },
      { s: 'hanni', f: 'happy', t: "Or! Or she could choose! Because she's a person! Sol, what do you want to do?" },
      { choose: [
        { t: "I'm going to go wherever I was going anyway.", stat: { courage: 1 }, then: [
          { n: "All three of them looked at her. Then Hanni clapped, delighted, and Hyein said *rude* with deep approval, and Jihoon said *Independence. Disgusting. I respect it*, and they let her through the gate, and then, she noticed, followed her at a respectful distance anyway, still arguing, for two blocks." }
        ] },
        { t: "(Point at Hanni. She asked.)", stat: { charm: 1 }, then: [
          { s: 'hanni', f: 'happy', t: "Me? Oh! Okay! Then... we all go for crêpes! And then the coat. And then the arcade. Everybody wins!" },
          { n: "Nobody had time for all of that. They did it anyway, in a hurry, and she got home with powdered sugar on her sleeve and a coat she hadn't asked for and a plush penguin Jihoon swore he'd won on purpose." }
        ] }
      ] }
    ] },

  { id: 'winter-break-heater', after: '12/25', until: '12/30', slot: 'evening', flags: ['year-goes-on'],
    place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
      { n: "The heater in the lounge was the warmest place in the building, and so, over the winter break, the whole household had slowly migrated to within three meters of it, like animals at a watering hole. Junpei had a box of tangerines. Hanni had a blanket big enough for four and four people under it. Koromaru was lying so close to the heater that he smelled faintly toasted and refused to move." },
      { n: "Somebody had put a game show on. Nobody was watching it. Everybody was peeling tangerines and passing the peels down the sofa to Fuuka, who was arranging them on a plate in a spiral for reasons she wouldn't explain." },
      { choose: [
        { t: "(Squeeze under the blanket.)", stat: { kindness: 1 }, then: [
          { n: "There wasn't room. They made room. She ended up wedged between Hanni and Yunjin with a tangerine in each hand and somebody's cold feet on her shins, and the game show went on, and somebody laughed at the wrong part, and she thought, without meaning to, that she'd never be able to explain this room to anybody who hadn't been in it." }
        ] },
        { t: "(Peel a tangerine in one long spiral. Hand it to Fuuka.)", stat: { proficiency: 1 }, then: [
          { n: "It came off in one long unbroken curl. Fuuka took it like a museum piece and put it at the very center of her spiral, and the whole lounge applauded, for some reason, and Junpei tried to do it and got four pieces and a tangerine in the eye." }
        ] }
      ] }
    ] },

  { id: 'year-end-cleaning', after: '12/27', until: '12/30', slot: 'after', offOnly: true, flags: ['year-goes-on'],
    place: 'Iwatodai Dorm · Lounge', time: 'Daytime', bg: 'iwatodaidorm-livingroom', scene: [
      { n: "Mitsuru had declared the year-end cleaning, the big one, with a chart. Every room, every person, every window. The searchers who lived at the guesthouse had come over anyway, because Mitsuru's chart had their names on it, and nobody had ever successfully argued with the chart." },
      { s: 'mitsuru', f: 'neutral', t: "Solar. You have the lounge windows. With Jihoon." },
      { s: 'jihoon', f: 'neutral', t: "I'm a guest. Guests don't do windows. It's in the Geneva Convention." },
      { choose: [
        { t: "(Hand him a rag. Start on the top panes.)", stat: { proficiency: 1 }, then: [
          { n: "He took the rag. He complained through every pane, at length, with citations, and did them all perfectly, because Park Jihoon could not stand to do anything badly in front of her, and at the end he stood back and looked at the windows, which were the cleanest in the building, and said *you're welcome, nation*." }
        ] },
        { t: "(Do them yourself. Let him supervise.)", stat: { kindness: 1 }, then: [
          { n: "She did them herself while he supervised from the sofa, pointing out smears. After four windows he couldn't stand it, got up, took the rag out of her hand, and said *you're doing it wrong, you've always done it wrong*, and did the rest, and only noticed she'd tricked him when he was finished and she was eating his tangerine." }
        ] }
      ] }
    ] }
];
