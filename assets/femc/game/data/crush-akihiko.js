/* Akihiko's crush track (2026-10-23): the moments. Track, world lines and texts are in crush.js; the format is core.js
   "Crushes". April through August is the build-up (the opt-in on or after 4/21, then noticed → crush → puppy → almost),
   at school (they're both third-years, his classroom next door), in the dorm, and on Tartarus nights. From September the
   flow is lighter and follows where it went: dating (his romance route), still unresolved, or a friendship (faded / out).
   Shared moments (gate ASKED) play for everyone who's been asked and branch inside with ifCrush, so a player who said no
   still lives alongside him. Nothing here changes his link: the rank scenes stay where they are and the romance still
   starts at rank 7 or 9. */
(() => {
  const C = window.FEMC_GAME_CRUSH, P = C.phases;
  const A = ph => ({ akihiko: ph });
  const CLASS = { maki: 'Maki', sonoda: 'Sonoda' }, FC = { ota: 'Ōta', hiyori: 'Hiyori' };
  const WARM = n => ({ akihiko: n });

  C.moments.push(
    /* ── April: the opt-in. PE with the class next door. (A save that missed April gets it later, any term day to 8/20.) ── */
    { id: 'cr-aki-optin', who: 'akihiko', optIn: 'akihiko', slot: 'afternoon', after: '4/21', until: '8/20', schoolOnly: true,
      place: 'Gekkoukan High · Gym', time: 'Afternoon', bg: 'gekkoukan-gym', cast: CLASS, scene: [
        { n: "Fifth period was PE with the class next door, which at Gekkoukan meant two classrooms of third-years standing around the gym in tracksuits while a teacher with a whistle explained the shuttle run in the voice of a man reading out a sentence. Twenty meters. A beep. Another beep, a little sooner. Keep going until you can't." },
        { ifBefore: '4/30', then: [
          { n: "Akihiko was sitting on the edge of the stage at the far end with his tracksuit zipped to the chin over the tape on his ribs, excused, which he was taking about as well as a dog takes a bath. He had the face of somebody who had personally invented the shuttle run and then been told he wasn't allowed to play it." }
        ], else: [
          { n: "Akihiko was two lanes down from her, bouncing on his toes before the first beep like it was a title fight, and his own class had already started a quiet betting pool on how long he'd go, in the practiced voices of people who had done this every spring for three years and lost money every time." }
        ] },
        { n: "She ran. The first levels were nothing, a jog and a turn and a jog. By level eight most of the girls had peeled off to the wall with their hands on their knees. By ten Maki was lying flat on the floorboards announcing that she was dead and wanted it on the record. By eleven it was Solar and a handful of boys from the baseball team, and the beeps were coming faster than felt fair, and her lungs had begun to make their case." },
        { ifBefore: '4/30', then: [
          { n: "And every time she turned at the line at his end of the gym, she heard him. Low, under the beeps, from the edge of the stage, counting her level out loud like a corner man between rounds, *eleven*, *twelve*, as though she might forget which one she was on, as though it mattered to anybody in the room but her. It seemed to matter to him quite a lot." }
        ], else: [
          { n: "And he was still there, two lanes down, turn for turn with her. Every time they hit the line together he said the level out loud, *eleven*, *twelve*, not to the room and not to his class but sideways to her, short, between breaths, like a man calling out the round to the only other person in the ring." }
        ] },
        { n: "At thirteen her legs filed a formal complaint. She was the last girl standing, which she noticed the way you notice the weather, and then one of three, and the baseball boys were dropping out on either side of her like leaves, and somewhere in the noise she realized she had stopped counting for herself a while ago and was running on his count instead." },
        { choose: [
          { t: "(Look over at him. Let him catch you looking.)", crush: A('in'), then: [
            { n: "She looked. He was already looking back, of course he was, with that bright total attention he usually saved for a heavy bag, and when he caught her at it he didn't look away, didn't even pretend to, just grinned like she'd landed something, and she turned at the line half a beat late and ran the next two levels on nothing but the fact of it." }
          ] },
          { t: "(Run the next level for him. He'll never know.)", crush: A('in'), then: [
            { n: "She ran it for him. It was a stupid thing to decide in the middle of a shuttle run, and she decided it anyway, between one beep and the next, without looking at him, and her legs found something they hadn't had a second ago and carried her two levels further than they had any right to." }
          ] },
          { t: "(Keep your eyes on the line. It's PE. He's a classmate who counts things.)", crush: A('out'), then: [
            { n: "She kept her eyes on the line. It was a line. It was twenty meters away and then it was under her shoes and then it was twenty meters away again, and the count from the other end of the gym was just a count, and she let it be one." }
          ] }
        ] },
        { n: "She went out at fifteen. The teacher wrote it on his clipboard without comment, the way you'd write down the temperature. She lay on the floor next to Maki with the ceiling going round and the varnish cool against her back." },
        { s: 'maki', t: "You're insane. Also, I'm just saying. Sanada-kun counted every single one of your levels. Out loud. I don't think he knows he did it." },
        { ifCrush: A(P.BUILD), then: [
          { n: "Her heart was still going at level fifteen speed. It went on going at level fifteen speed long after her legs had stopped, down the corridor and up the stairs and into the classroom and all the way through sixth period, and she told herself it was the shuttle run, and knew, in the specific way you know you've left something switched on at home, that it wasn't." }
        ], else: [
          { n: "She drank half a bottle of water lying down, which was a skill, and didn't look at the stage, which was a decision, and by sixth period she'd mostly forgotten the count. Mostly. He did count everything. So did she. It was a thing they had in common, and that was all it was." }
        ] }
      ] },

    /* ── Noticed (late April): she knows things about him she didn't ask to. ── */
    { id: 'cr-aki-ribs-ice', who: 'akihiko', crush: A(P.BUILD), slot: 'late', when: 'quiet', after: '4/21', until: '5/9',
      place: 'Iwatodai Dorm · Lounge', time: 'Late Night', bg: 'iwatodaidorm-livingroom-night', scene: [
        { n: "At one in the morning the lounge had one lamp on, and under the lamp Akihiko was doing his history homework with a bag of frozen edamame pressed to his ribs, holding the textbook open with one elbow and writing with the other hand and visibly losing to all three." },
        { s: 'akihiko', f: 'surprised', t: "...You're up." },
        { s: 'akihiko', f: 'neutral', t: "I was at the club till nine. Watching. Watching takes longer than doing. Nobody tells you that." },
        { n: "The edamame slid. He caught it against his side with his elbow, and the textbook shut, and he looked at the closed book with the wounded dignity of a man who had been betrayed by stationery." },
        { choose: [
          { t: "(Sit down. Hold the ice for him so he can write.)", crush: WARM(1), then: [
            { n: "She sat on the arm of the sofa and held the bag of edamame flat against his ribs through his T-shirt, which was a completely practical thing to do and made her hand feel like it belonged to somebody braver, and he wrote very fast and very badly about the Tokugawa shogunate and did not look up once, and his ears did something she decided not to have seen." },
            { s: 'akihiko', f: 'blushing', t: "...Thanks. That's. Yeah. Lower. No, that's good. That's fine." }
          ] },
          { t: "(Open the book again and read him the questions.)", crush: WARM(1), then: [
            { n: "She read him the questions in a flat, even voice, and he answered them out loud while he wrote, and got the third one wrong with total confidence, and she told him so, and he looked at her as though nobody had ever told him he was wrong in a voice that quiet before and he wasn't sure how to feel about it." }
          ] },
          { t: "(Get him a better ice pack and go back to bed.)", then: [
            { n: "She swapped the edamame for the real ice pack from the back of the freezer, which he had apparently not known existed, and he looked at it like a gift, and she said goodnight from the stairs, and heard him say it back to the textbook." }
          ] }
        ] },
        { n: "Upstairs, in bed, she found she knew which page he'd been on. Two hundred and twelve. She didn't know why she'd looked, or why it had stayed, and lay there with the number in her head like a stone in a shoe until she fell asleep." }
      ] },

    { id: 'cr-aki-bread', who: 'akihiko', crush: A(P.ASKED), slot: 'lunch', after: '4/24', until: '5/22', schoolOnly: true,
      place: 'Gekkoukan High · 2F Hallway', time: 'Lunch', bg: 'school-hallwaysecondfloor', scene: [
        { n: "The school store at lunch was a war fought with coins. The bell went and the whole building came down the stairs at once, and by the time Solar reached the counter there was nothing left on the bread shelf but a single sad melon pan with a dent in it and a price sticker that had been put on twice." },
        { n: "Somebody reached over her shoulder and put two yakisoba breads on the counter, still warm, the ones that were always gone first, and paid for both, and held one out to her without turning his head, the way he threw water bottles." },
        { s: 'akihiko', f: 'neutral', t: "I run the stairs. I'm always first. Take it." },
        { s: 'solar', f: 'neutral', t: "You bought two." },
        { s: 'akihiko', f: 'neutral', t: "I always buy two. One's usually for Junpei. He can have the melon pan. It builds character." },
        { ifCrush: A(P.BUILD), then: [
          { n: "She took it. It was warm through the paper, and she held it a second longer than you hold a piece of bread, and he'd already turned to go, and she ate it on the stairs and it was the best yakisoba bread she'd had in her life, which, given the life, was not a high bar, and which was also not the point at all." },
          { choose: [
            { t: "(Buy the melon pan anyway. Give it to Junpei yourself.)", crush: WARM(1), then: [
              { n: "Junpei took it with both hands like a holy relic and asked why she was smiling like that, and she said what, and he said *that*, and pointed at her face with the melon pan, and she took the long way back to class." }
            ] },
            { t: "(Tomorrow, run the stairs. Get there first. Buy two.)", crush: WARM(2), then: [
              { n: "The next day she ran the stairs. She got there first, with the whole building still on the landing behind her, and bought two, and when he came round the corner at a dead sprint and saw her standing at the counter holding one out to him without turning her head, he stopped so fast his indoor shoes squeaked." },
              { s: 'akihiko', f: 'surprised', t: "...You ran the stairs." },
              { s: 'akihiko', f: 'happy', t: "Okay. Okay! Tomorrow it's a race." }
            ] }
          ] }
        ], else: [
          { n: "She took it, and thanked him, and he said it was nothing, and it was nothing, it was bread. It was very good bread. She ate it on the stairs with Junpei, who had got the melon pan after all and was holding forth about character, and the yakisoba was gone in about four bites." }
        ] }
      ] },

    { id: 'cr-aki-hallway-steps', who: 'akihiko', crush: A(P.BUILD), slot: 'morning', after: '4/27', until: '5/22', schoolOnly: true,
      place: 'Gekkoukan High · Classroom', time: 'Morning', bg: 'gekkoukan-classroom-day', cast: CLASS, scene: [
        { n: "There was a sound the third-year corridor made every morning at eight twenty-six, two minutes before the bell, which was the sound of Akihiko Sanada coming up the stairs from roadwork two at a time and down the corridor past her door to his own, the classroom next to hers, at a speed you weren't technically allowed to move indoors." },
        { n: "She had no idea when she'd learned it. Some morning in April. Now she heard it every day through the open door before she saw him, the quick hard rhythm of it under the noise of everybody else's morning, the way you hear your own name in a crowded room." },
        { n: "This morning she looked up at it. She didn't decide to. Her head just came up, and he went past the door, a blur of uniform and damp hair, and his head turned too, quick, and then he was gone, and Maki behind her was leaning forward over her desk with her chin on her fists." },
        { s: 'maki', t: "Okay. Wait. You looked up before he got to the door." },
        { s: 'maki', t: "Before. Not when. Before. I want that noted. Sonoda, are you noting it?" },
        { choose: [
          { t: "I was looking at the clock.", then: [
            { s: 'maki', t: "The clock's on the other wall." },
            { n: "The clock was on the other wall. It had always been on the other wall. Solar looked at it now, very hard, until the bell went." }
          ] },
          { t: "(Shrug. Smile. Say nothing at all.)", crush: WARM(1), then: [
            { n: "She shrugged and smiled and said nothing, and Maki sat back and said *oh my god* very quietly to Sonoda, and Sonoda, who never said anything, wrote something in the margin of his English notebook and turned it so Maki could read it, and they both nodded, like a committee." }
          ] }
        ] }
      ] },

    { id: 'cr-aki-hoodie', who: 'akihiko', crush: A(P.BUILD), slot: 'evening', after: '4/29', until: '5/12', offOnly: true,
      place: 'Iwatodai Dorm · Laundry Room', time: 'Evening', bg: 'iwatodaidorm-laundryroom', scene: [
        { n: "The dorm had two washing machines and a rota for them that Mitsuru had drawn up in April and nobody followed, and somewhere in the gap between the rota and the truth, Solar's basket had come back from the dryer with one thing in it that wasn't hers." },
        { n: "A gray hoodie, enormous, worn thin at the cuffs, with GEKKOUKAN BOXING on the back in letters that had been through so many washes they'd gone soft and cracked like old paint. It smelled of the dorm's terrible detergent and, underneath, faintly, of tape and rubber mats and cold air at five in the morning." },
        { n: "She knew whose it was. She'd known before she'd unfolded it, which was its own problem." },
        { choose: [
          { t: "(Fold it neatly and leave it outside his door.)", then: [
            { n: "She folded it into a careful square, sleeves tucked under, the way the clothes came in shops, and left it outside his door on the boys' side and went back down quickly. In the morning there was a note under her own door in square blunt capitals. *THANKS. NOBODY'S FOLDED THAT SINCE I GOT IT.*" }
          ] },
          { t: "(Put it on. Just to see. Then go down to the lounge in it without thinking.)", crush: WARM(2), then: [
            { n: "She put it on just to see, and it came down to the middle of her thighs and over her hands, and it was very warm, and she went down to the lounge for a glass of water in it without thinking anything about it at all, which was how she found out that Junpei and Yukari were on the sofa." },
            { s: 'yukari', f: 'surprised', t: "Is that—" },
            { s: 'junpei', f: 'happy', t: "That's senpai's. That's senpai's club hoodie. Leader. LEADER. Is that senpai's—" },
            { n: "Akihiko came in the front door from a run at exactly that moment, as if the building had arranged it, and stopped on the mat with his hands on his knees and his breath going, and looked at his hoodie, on her, for a long moment, and then said *it's warmer on you* to nobody in particular and went straight upstairs, and Junpei lay down on the floor." }
          ] },
          { t: "(Give it back to him in person. Look him in the eye.)", crush: WARM(1), then: [
            { n: "She found him on the roof doing pull-ups on the edge of the water tank, which he was absolutely not cleared for, and held the hoodie up, and he dropped down and took it and said *thanks* and then, after a second, *it was in your basket?* in a voice that wanted to know a great deal more than it was asking, and she said yes, and he said *huh*, and put it on, and went red, which might have been the pull-ups." }
          ] }
        ] }
      ] },

    /* ── Crush (May into June): her days have started to arrange themselves around him. ── */
    { id: 'cr-aki-tartarus-stairs', who: 'akihiko', crush: A(P.UP), slot: 'late', when: 'tartarus', after: '5/12', until: '7/16',
      place: 'Iwatodai Dorm · Stairs', time: 'Late Night', bg: 'iwatodaidorm-hallway', scene: [
        { n: "Back from the tower at a quarter to one with the green gone out of the sky and every floor they'd climbed sitting in her calves. The others went up the stairs ahead of her in a slow tired line, Junpei complaining, Yukari telling him to complain quieter." },
        { n: "Akihiko came last, one step behind her, the whole way. Not beside. Behind. When she slowed on the landing he slowed. When she put her hand on the rail he put his on it too, a little lower down, as if the rail might need it." },
        { s: 'solar', f: 'neutral', t: "You can go ahead." },
        { s: 'akihiko', f: 'neutral', t: "I'm fine back here. In case." },
        { s: 'solar', f: 'neutral', t: "In case of what?" },
        { s: 'akihiko', f: 'serious', t: "...In case." },
        { choose: [
          { t: "(Stop on the landing. Turn round, so you're the same height.)", crush: WARM(2), then: [
            { n: "She stopped on the landing and turned, and because he was a step below her their faces were level for once, close enough that she could see a scratch on his cheekbone from the eighth floor that he hadn't mentioned and wouldn't, and for one second neither of them said anything at all, and the dorm creaked around them like a ship." },
            { s: 'akihiko', f: 'blushing', t: "...Good work tonight. You called the third one right. Go to bed." },
            { n: "He went past her up the rest of the stairs two at a time, to his own floor, without looking back, and she stood on the landing with her hand on the rail where his had been." }
          ] },
          { t: "(Pretend to fall asleep on your feet against the wall.)", crush: WARM(1), then: [
            { n: "She leaned her shoulder against the wall and shut her eyes and made a small snoring noise, and heard him laugh, the real one, surprised out of him, and then felt him take her by the elbow, very carefully, and walk her the last four steps to her floor like an old man helping another old man across a road." }
          ] },
          { t: "(Go on up. Let him walk behind you.)", then: [
            { n: "She went on up. He followed her to her landing, a step behind, and stopped there as though it were a line on the floor, and said goodnight, and she heard him wait until her door had shut before he went on up himself." }
          ] }
        ] }
      ] },

    { id: 'cr-aki-umbrella', who: 'akihiko', crush: A(P.UP), slot: 'after', weather: ['rain'], after: '5/14', until: '6/30', schoolOnly: true,
      place: 'Gekkoukan High · Shoe Lockers', time: 'After School', bg: 'school-entryhallway', cast: CLASS, scene: [
        { n: "It came down at the last bell like somebody had been holding a bucket over the school all day and finally let go, and the entrance hall filled up with people standing at the glass doors in their outdoor shoes saying *no* to the sky." },
        { n: "Akihiko was at the third-year lockers in his running shoes, looking out at it with the respectful interest of a man looking at an opponent he intended to beat, and he did not have an umbrella. He never had an umbrella. As far as she could tell he didn't believe in them." },
        { s: 'akihiko', f: 'neutral', t: "It's just water. I'll run it. Station's six minutes." },
        { s: 'akihiko', f: 'neutral', t: "Five, running." },
        { n: "She had an umbrella. It was a cheap clear one from the station kiosk with one bent rib and it was about big enough for one and a half people if both of them were thin and neither of them breathed, and she was standing there holding it, and he was standing there not looking at it, and behind her somewhere she could feel Maki and Sonoda not leaving." },
        { choose: [
          { t: "(Open it. Hold it up between you. Don't say anything.)", crush: WARM(2), then: [
            { cg: 'crush-akihiko-umbrella' },
            { n: "She opened it and held it up and stood there, and after a second he ducked under it, and took it out of her hand without asking, because he was taller and it made sense, and they walked to the station under one umbrella with the rain drumming on it like fingers, his shoulder getting soaked on the outside, hers dry, all six minutes." },
            { n: "Behind them, from the overhang, she distinctly heard Maki say *SONODA* in a strangled whisper, and Sonoda say *I see it, I see it*." },
            { s: 'akihiko', f: 'neutral', t: "Your side dry?" },
            { s: 'solar', f: 'neutral', t: "Yes." },
            { s: 'akihiko', f: 'happy', t: "Good. That's the only side that matters." },
            { cg: null }
          ] },
          { t: "Five, running. Bet I'm faster.", crush: WARM(1), then: [
            { s: 'akihiko', f: 'surprised', t: "...You're on." },
            { n: "They ran it, both of them, out of the glass doors into the downpour with her umbrella shut under her arm like a baton, and she was soaked before the gate and laughing before the corner, and he beat her by two lamp posts and stood at the station entrance with water pouring off him, grinning, holding the door, as if the whole thing had been his plan from the start." }
          ] },
          { t: "(Give him the umbrella. You'll wait it out.)", then: [
            { s: 'akihiko', f: 'neutral', t: "Then what are you going to do?" },
            { s: 'solar', f: 'neutral', t: "Wait it out." },
            { n: "He looked at the umbrella. He looked at the rain. He put the umbrella back in her hand and sat down on the step beside her and said he'd wait it out too, and they waited it out, forty minutes, talking about nothing, while the hall emptied and the lights came on, and he never once looked like he'd have rather been running." }
          ] }
        ] }
      ] },

    { id: 'cr-aki-roof-lunch', who: 'akihiko', crush: A(P.ASKED), slot: 'lunch', after: '5/18', until: '6/16', schoolOnly: true, weather: ['clear', 'cloudy'],
      place: 'Gekkoukan High · Rooftop', time: 'Lunch', bg: 'rooftop-day', scene: [
        { n: "Junpei had decided, in his capacity as a second-year with no particular authority, that S.E.E.S. ate lunch together on the roof on Fridays. Nobody had agreed. Everybody came. Yukari came with a bento and the face of somebody who'd been dragged, and sat on the bench by the fence, and opened it, and kept looking at the stairwell door." },
        { n: "Akihiko came out at twenty past with three plastic containers of plain chicken breast, nothing else, stacked in his hands like gym weights, and sat down on the bench between Solar and the end of it, because that was where there was room." },
        { s: 'yukari', f: 'serious', t: "Senpai. That's just chicken. That's three boxes of just chicken." },
        { s: 'akihiko', f: 'neutral', t: "It's lunch." },
        { s: 'yukari', f: 'serious', t: "It's a cry for help." },
        { ifCrush: A(P.BUILD), then: [
          { n: "His knee was about a centimeter from hers. Not touching. She was aware of the centimeter in the way you're aware of a step in the dark, without looking at it, the whole of her attention gone down into one side of her body like water into a low corner, and she ate her rice ball and listened to Yukari say *cry for help* and laughed in the right place, she thought, roughly." },
          { choose: [
            { t: "(Steal a piece of his chicken. Eat it looking straight at Yukari.)", crush: WARM(1), then: [
              { n: "She took a piece of chicken out of the second box with her chopsticks and ate it looking straight at Yukari, very calmly, and Yukari's mouth fell open, and Akihiko looked down at his box and up at her, and then pushed the box a little toward her without a word, and Junpei, at the other end of the bench, said *oh no* very softly to the sky." },
              { s: 'yukari', f: 'serious', t: "I'm going to be sick. On the roof. You'll have to carry me down." }
            ] },
            { t: "(Offer him half your rice ball. It's only fair.)", crush: WARM(1), then: [
              { s: 'akihiko', f: 'surprised', t: "...Carbohydrates." },
              { s: 'solar', f: 'happy', t: "Live a little." },
              { n: "He took it. He ate it in two bites, looking at the bay, and said it was good, and she said she knew, and Yukari said she was going to throw her phone off the roof if this kept happening, and it kept happening." }
            ] },
            { t: "(Move that centimeter away. Just to breathe.)", crush: WARM(-1), then: [
              { n: "She shifted along the bench, a centimeter, two, until there was air between them, and breathed it, and ate, and the conversation went on, and nobody noticed, and she noticed for the whole rest of lunch." }
            ] }
          ] }
        ], else: [
          { n: "He ate his chicken. Junpei asked if he could have a piece and was told no, and asked why, and was told *because you'll put ketchup on it*, which was true. Solar ate her rice ball and watched the two of them argue about baseball, which neither of them knew much about, with total conviction, and Yukari caught her eye over their heads and rolled hers, and it was, somehow, the best lunch of the week." }
        ] }
      ] },

    { id: 'cr-aki-boxing-tv', who: 'akihiko', crush: A(P.ASKED), slot: 'evening', after: '5/20', until: '6/20',
      place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
        { n: "There was a title fight on the lounge TV, somebody from Osaka against somebody from Mexico City, and Akihiko had been sitting in front of it since the walk-outs with his elbows on his knees and his fists closed, slipping punches from the sofa, and she sat down at the other end to watch it with him because there was nothing else on, she told herself, and because the sofa was there." },
        { s: 'akihiko', f: 'serious', t: "Watch his left foot. Watch it. He's going to step out on the next one." },
        { n: "The man on the TV stepped out on the next one. Akihiko made a noise like a kettle." },
        { ifCrush: A(P.BUILD), then: [
          { n: "By the sixth round he had stopped watching the fight and started explaining it to her, every exchange, with his hands, and by the eighth he'd moved along the sofa to do it without noticing he'd moved, and in the ninth, when the man from Osaka went down out of nowhere, Akihiko grabbed her arm, hard, above the elbow, and held on, and the whole lounge went quiet except for the referee counting." },
          { n: "Eight. Nine. The man got up. Akihiko let out his breath. He did not let go of her arm. Then he looked down and saw that he hadn't, and both of them looked at his hand, and he took it back like it had touched something hot." },
          { s: 'akihiko', f: 'blushing', t: "...Sorry. Habit. Corner habit. I grab whoever's next to me." },
          { choose: [
            { t: "Who's usually next to you?", crush: WARM(2), then: [
              { s: 'akihiko', f: 'blushing', t: "...Nobody. Usually." },
              { n: "He looked at the TV. She looked at the TV. Neither of them saw the tenth round at all, and when it was over and somebody had won, she couldn't have said who." }
            ] },
            { t: "(Say nothing. Leave your arm where it was.)", crush: WARM(1), then: [
              { n: "She left her arm where it was, on the sofa between them, and didn't say anything, and in the eleventh, on a body shot, his hand came back, lightly this time, and stayed, and he watched the fight as though his hand were somebody else's business." }
            ] },
            { t: "It's fine. Who are we rooting for?", then: [
              { s: 'akihiko', f: 'happy', t: "Osaka. Obviously. Look at his feet." },
              { n: "They rooted for Osaka. Osaka lost on points. Akihiko took it personally for most of the evening and she let him." }
            ] }
          ] }
        ], else: [
          { n: "By the sixth round he'd stopped watching the fight and started explaining it to her, every exchange, with his hands, and by the end of it she knew what a jab was for and why the left foot mattered and that you never, ever, dropped your hands after you hit, and he looked so happy to have somebody to say it all to that she stayed for the post-fight interviews, which were in Spanish." }
        ] }
      ] },

    { id: 'cr-aki-library', who: 'akihiko', crush: A(P.UP), slot: 'after', after: '5/22', until: '6/24', schoolOnly: true,
      place: 'Gekkoukan High · Library', time: 'After School', bg: 'school-library', scene: [
        { n: "The library after school was the quietest room in Gekkoukan, which was saying something, all dust and radiators and the soft continuous rasp of pages, and Solar had a table by the window and a novel she'd picked up because the girl on the cover looked like she was running from something." },
        { n: "Then Akihiko came in to return a book four weeks late, which she knew because the librarian told him so, at length, in a whisper so sharp it could have cut paper, and he stood at the desk taking it like a man taking a body shot. The book was called *Sports Nutrition for the Competitive Athlete.* It had about forty sticky notes in it." },
        { n: "He saw her on the way out. He came over. He sat down across from her without asking and leaned in and whispered, at what he obviously believed was a whisper and was in fact a normal speaking voice," },
        { s: 'akihiko', f: 'neutral', t: "What are you reading?" },
        { n: "Four people looked up. The librarian looked up. Solar put her hand flat on the cover of the novel, on the running girl, without deciding to." },
        { choose: [
          { t: "(Slide it across to him. Let him see.)", crush: WARM(2), then: [
            { n: "He picked it up and read the back with a frown of total concentration, his lips moving very slightly, and then opened it at her bookmark and read the page she was on, the whole page, while she sat there feeling like he was reading her diary, and then closed it and slid it back." },
            { s: 'akihiko', f: 'neutral', t: "She should've gone left at the river. She'd have lost them at the bridge." },
            { s: 'solar', f: 'surprised', t: "That's not the point of the book." },
            { s: 'akihiko', f: 'happy', t: "It's the point of the chapter." },
            { n: "The librarian said *Sanada-kun* in a voice like a dropped tray, and he went, and she read the rest of the chapter with her face hot and couldn't remember any of it." }
          ] },
          { t: "Nothing you'd like. It's got no protein in it.", crush: WARM(1), then: [
            { s: 'akihiko', f: 'happy', t: "Ha—" },
            { n: "He clapped a hand over his own mouth, too late, and the librarian rose behind her desk like a weather front, and he was escorted to the door, still laughing behind his hand, looking back at her the whole way like it had been completely worth it." }
          ] },
          { t: "(Whisper back, properly: *you're too loud.*)", then: [
            { n: "He looked shocked, then guilty, then got up and left on tiptoe, which on someone his size was one of the funniest things she'd ever seen, and four people in the library watched him go and then all looked at her, and she read her book very carefully until they stopped." }
          ] }
        ] }
      ] },

    /* ── Puppy love (June into July): everybody can see it except, officially, her. ── */
    { id: 'cr-aki-desk-note', who: 'akihiko', crush: A(P.PUP), slot: 'morning', after: '6/1', until: '6/30', schoolOnly: true,
      place: 'Gekkoukan High · Classroom', time: 'Morning', bg: 'gekkoukan-classroom-day', cast: CLASS, scene: [
        { n: "When she came into homeroom there was a folded piece of paper on her desk, squared off and creased hard, the way you'd fold something you wanted to stay folded, and the whole class was looking at it. Not at her. At it. With the strained casual faces of thirty people who had all just watched something happen." },
        { s: 'maki', t: "He came in. Sanada-kun. Ten minutes ago. In OUR classroom. He walked straight to your desk and put it there and walked out and didn't look at anybody. Sonoda nearly died." },
        { n: "Sonoda, behind Maki, nodded slowly, like a witness." },
        { n: "She unfolded it. Square blunt capitals, pressed hard into the paper with a ballpoint. *RIVER 5. RAIN OR NOT. BRING WATER. YOU FORGOT YESTERDAY.* And under it, smaller, in the same hand but clearly added after a pause, as though he'd stood there with the pen deciding: *(IF YOU WANT.)*" },
        { choose: [
          { t: "(Fold it back up. Put it in your handbook, between the pages.)", crush: WARM(1), then: [
            { n: "She folded it back along his creases and put it in her student handbook, between the school song and the dress code, where nobody would look, and felt Maki watch her do it with an intensity that could have lit a stove." },
            { s: 'maki', t: "...You're keeping it." },
            { s: 'solar', f: 'neutral', t: "It's a training schedule." },
            { s: 'maki', t: "It's a LETTER." }
          ] },
          { t: "(Write under it, *I didn't forget, you drank it.* Send it back by Sonoda.)", crush: WARM(2), then: [
            { n: "She wrote it under his line and folded it and held it over her shoulder without turning round, and Sonoda took it like he'd been handed classified papers, and at the break he walked it next door with tremendous gravity, and came back, and sat down, and said, to nobody, the first full sentence anybody had heard from him that term." },
            { s: 'sonoda', t: "He read it and went red and put it in his pocket and said *she's right* to the window." }
          ] },
          { t: "It's for running. He does this.", then: [
            { s: 'maki', t: "He does this. He does this to who? Who else does he do this to?" },
            { n: "Solar didn't know. She found, slightly to her alarm, that she wanted to." }
          ] }
        ] }
      ] },

    { id: 'cr-aki-monorail-strap', who: 'akihiko', crush: A(P.PUP), slot: 'early', weather: ['rain'], after: '6/9', until: '7/10', schoolOnly: true,
      place: 'Iwatodai Station · Monorail', time: 'Morning', bg: 'train-car-inside', scene: [
        { n: "When it poured like this the river was a no, even for him, and the rule was the monorail together at seven forty, the crowded one, everybody's umbrellas dripping on everybody's shoes and the windows fogged so thick the bay was just a gray idea outside." },
        { n: "The carriage lurched at the first curve. Somebody's backpack hit her between the shoulders, and she went forward a step, and then there was an arm on the strap over her head, a wall between her and the whole carriage, his sleeve damp against her ear, and he was looking out of the window at nothing, talking very fast about the weather." },
        { s: 'akihiko', f: 'neutral', t: "Rainy season ends in July. Usually. Mid-July. The fifteenth, the eighteenth. Some years it doesn't, it just turns into summer without telling anybody, which I think is worse. I like to know when things end." },
        { n: "She could hear his heart. Not really. She could feel it, almost, through the arm, or she thought she could, and she counted it the way she counted everything, and it was going fast, much too fast for a man standing on a train talking about the weather." },
        { choose: [
          { t: "(Tell him his heart rate. Exactly.)", crush: WARM(2), then: [
            { s: 'solar', f: 'neutral', t: "A hundred and four." },
            { s: 'akihiko', f: 'surprised', t: "What?" },
            { s: 'solar', f: 'happy', t: "Your heart. A hundred and four. You're standing still." },
            { n: "He looked down at her. He went red from the collar up, all at once, like something poured, and opened his mouth, and the doors opened at Gekkoukan, and he said *it's the stairs* very loudly, though there had been no stairs, and got off first." }
          ] },
          { t: "(Hold his sleeve so you don't fall again.)", crush: WARM(1), then: [
            { n: "She took a fold of his sleeve between her finger and thumb, the way you'd hold a page, and he stopped talking about the weather in the middle of a sentence about August and didn't start again, and they rode three stops like that, and when the doors opened he waited for her to let go before he moved, and she waited a second longer than she needed to before she did." }
          ] },
          { t: "(Duck out from under his arm. Stand by the door.)", crush: WARM(-1), then: [
            { n: "She ducked out under his arm and stood by the doors, where there was a pole and a little air, and he went on talking about the rainy season to the space she'd left, and then stopped, and looked at the window for the rest of the ride with his hand still on the strap." }
          ] }
        ] }
      ] },

    { id: 'cr-aki-dodgeball', who: 'akihiko', crush: A(P.ASKED), slot: 'afternoon', after: '6/10', until: '7/10', schoolOnly: true,
      place: 'Gekkoukan High · Gym', time: 'Afternoon', bg: 'gekkoukan-gym', cast: CLASS, scene: [
        { n: "PE with the class next door again, and the teacher had given up on teaching and rolled out a bag of dodgeballs, which on a wet June afternoon in a gym full of third-years who had been told for two years that they were adults now was very close to declaring war." },
        { n: "It came down, the way it always did, to the last three. Two of them were on his side. One of them was her." },
        { n: "Akihiko had the ball. He'd had it for nearly ten seconds, which in dodgeball was a geological age. He stood at the line with it held at his shoulder and his arm cocked and his whole body set to throw it, and he did not throw it, and both classes slowly began to notice that he was not throwing it." },
        { s: 'maki', t: "THROW IT, SANADA." },
        { ifCrush: A(P.BUILD), then: [
          { n: "He didn't throw it. He looked at her across the line, and she looked back, and something went across his face that was exactly what she suspected was going across hers, and the whole gym caught it at once, two classrooms full of people who'd been waiting since April for something to point at, and a sound went up from the benches like a stadium seeing a home run." },
          { choose: [
            { t: "(Walk up to the line. Take the ball out of his hands. Throw it at him.)", crush: WARM(2), then: [
              { n: "She walked up to the line and took the ball out of his hands, which he let her do, and stepped back, and threw it at him from a meter away, and it bounced off his chest, and he caught it on the rebound out of pure reflex, which meant, technically, she was out, and he'd won, and he stood there holding the ball looking like a man who had lost everything." },
              { s: 'akihiko', f: 'blushing', t: "...I didn't mean to catch it." },
              { n: "The gym had lost its mind. The teacher blew his whistle for a long time and nobody heard it." }
            ] },
            { t: "(Wave at him. Make him do it.)", crush: WARM(1), then: [
              { n: "She waved, both hands, *go on*, and he threw it, finally, at the softest speed a ball had ever traveled across that gym, a lob a child could have caught, and she caught it, and he was out, and he went to the wall with his hands up like he'd been arrested, grinning, and both classes booed him all the way." }
            ] }
          ] }
        ], else: [
          { n: "He threw it, in the end, a clean hard flat throw that she'd watched him wind up for so long she was already moving, and it went past her hip by a hand's width, and she caught the rebound off the wall and threw it back and got him in the knee, and he went off grinning and pointing at her like she'd stolen something from him fair and square." },
          { s: 'maki', t: "You two are terrifying. Nobody should take PE that seriously." }
        ] }
      ] },

    { id: 'cr-aki-birthday-after', who: 'akihiko', crush: A(P.BUILD), slot: 'early', after: '6/25', until: '7/10', events: ['lw-birthday'],
      place: 'Iwatodai · Riverside', time: 'Early Morning', bg: 'park-2', scene: [
        { n: "The morning after her birthday the rain had gone through and left the riverside rinsed and steaming, and she came down at five to find him already stretching against the railing, and he looked up and saw what she had on before she'd said good morning." },
        { ifRank: { akihiko: 1 }, then: [
          { n: "The stopwatch on its new cord. Red, braided, round her neck where the frayed one used to be. She'd put it on before she'd even put on her shoes. He looked at it for a long moment, and then at the river, and then back at it." },
          { s: 'akihiko', f: 'blushing', t: "...It fits." },
          { s: 'solar', f: 'happy', t: "It's a cord. Cords fit." },
          { s: 'akihiko', f: 'blushing', t: "Yeah. No. I know. I mean it looks. It's fine. Bridge and back." }
        ], else: [
          { n: "The socks. Gray, with a red stripe, the good kind, pulled up over her ankles. She'd put them on before she'd thought about it. He looked down at them for a long moment as though they were a time on a stopwatch that he couldn't quite believe." },
          { s: 'akihiko', f: 'blushing', t: "...Those are good socks." },
          { s: 'solar', f: 'happy', t: "Somebody told me I'd get blisters." },
          { s: 'akihiko', f: 'blushing', t: "You would have. Bridge and back." }
        ] },
        { choose: [
          { t: "Thank you. I didn't say it properly last night.", crush: WARM(1), then: [
            { s: 'akihiko', f: 'neutral', t: "You said it. You said it eleven times. To everybody." },
            { s: 'solar', f: 'neutral', t: "I'm saying it to you." },
            { n: "He looked at her, and then at the river, and nodded at the river, hard, as if it were the one who'd spoken, and set off at a pace much too fast for the first kilometer, and she let him, and caught him at the bridge." }
          ] },
          { t: "(Race him to the bridge before he can say anything else.)", crush: WARM(1), then: [
            { n: "She went before he'd finished stretching and he swore, once, delighted, and came after her, and the whole path went by in a wet green blur, and at the bridge she beat him by a stride for the first time in her life and turned round and he was laughing too hard to argue." }
          ] }
        ] }
      ] },

    { id: 'cr-aki-girls-talk', who: 'akihiko', crush: A(P.PUP), slot: 'evening', after: '6/15', until: '7/12',
      place: "Iwatodai Dorm · Solar's Room", time: 'Evening', bg: 'solar-dormroom-day', scene: [
        { n: "Yukari came in without knocking, which she'd started doing in May, with Fuuka behind her carrying three cans of melon soda, and sat on the end of Solar's bed, and folded her arms, and looked at her the way Mitsuru looked at a Tartarus report she didn't like." },
        { s: 'yukari', f: 'serious', t: "So. We need to talk. As your friends. As women who live in this building." },
        { s: 'fuuka', f: 'happy', t: "I brought soda!" },
        { s: 'yukari', f: 'serious', t: "You like him." },
        { s: 'solar', f: 'surprised', t: "Who?" },
        { s: 'yukari', f: 'serious', t: "Solar. I have watched you look at a door. A door. Because he was going to come through it. You looked at it for four minutes." },
        { choose: [
          { t: "I don't like him. He's my running partner.", crush: WARM(-1), then: [
            { s: 'yukari', f: 'neutral', t: "Okay." },
            { s: 'fuuka', f: 'neutral', t: "Okay!" },
            { n: "They both said okay in the exact voice people use for a child who has said they didn't eat the cookies with crumbs on their face, and drank their sodas, and changed the subject to Junpei's hair, and every few minutes Yukari looked at her over the can, and every few minutes Solar looked at the wall." }
          ] },
          { t: "(Put a pillow over your face. Say something into it.)", crush: WARM(2), then: [
            { n: "She put the pillow over her face and said something into it, and they both leaned in, and Yukari said *what*, and she took the pillow off her face just long enough to say *I don't know what to do with my hands when he's in the room* and put it back." },
            { s: 'fuuka', f: 'happy', t: "Oh, Solar-senpai." },
            { s: 'yukari', f: 'blushing', t: "Oh no. Oh no, it's real. Fuuka, it's real, I was joking, I was ninety percent joking." },
            { n: "Yukari lay down across the foot of the bed and stared at the ceiling and said this was the worst thing that had ever happened to her personally and she lived with Junpei, and then, after a long pause, without moving, said *he looks at the door too, you know*, and Solar kept the pillow on her face for a long time after that." }
          ] },
          { t: "...Is it that obvious?", crush: WARM(1), then: [
            { s: 'yukari', f: 'serious', t: "Junpei noticed. JUNPEI." },
            { s: 'fuuka', f: 'happy', t: "I think it's sweet. I think he likes you back. He asked me last week if you'd eaten. He doesn't ask anybody that." },
            { s: 'yukari', f: 'serious', t: "He asks everybody that. He asks the dog that." },
            { s: 'fuuka', f: 'neutral', t: "...Not in that voice, though." }
          ] }
        ] }
      ] },

    { id: 'cr-aki-midnight-shake', who: 'akihiko', crush: A(P.PUP), slot: 'late', when: 'quiet', after: '6/16', until: '7/16',
      place: 'Iwatodai Dorm · Kitchen', time: 'Late Night', bg: 'iwatodaidorm-kitchen', scene: [
        { n: "She couldn't sleep, so she came down for water, and the kitchen light was on, and he was at the counter in a T-shirt with the blender jug in one hand and a banana in the other, looking at both of them like they'd asked him a question." },
        { s: 'akihiko', f: 'neutral', t: "Shh. Junpei says the blender's a jet engine. I'm doing it by hand." },
        { n: "He was doing it by hand. He was mashing a banana into milk and protein powder with a fork, with enormous concentration, and the powder was winning, and there was a fine white dust on the counter and on his forearms and somehow on one eyebrow." },
        { s: 'akihiko', f: 'neutral', t: "...You want one? I can make one that doesn't taste like chalk. I've been working on it. The banana's the secret. And honey. Don't tell the club." },
        { choose: [
          { t: "(Say yes. Sit on the counter and watch him make it.)", crush: WARM(2), then: [
            { n: "She sat on the counter by the rice cooker and watched him make it, which took ten minutes and both of his hands and a level of care he'd normally have saved for taping somebody's wrist, and he handed it to her and watched her drink it with the unblinking attention of a man watching the judges' cards." },
            { s: 'solar', f: 'happy', t: "...It doesn't taste like chalk." },
            { s: 'akihiko', f: 'happy', t: "It doesn't taste like chalk! It doesn't, right?" },
            { n: "He looked so pleased that she drank the whole thing, which was a lot of shake at one in the morning, and they sat there in the humming kitchen with the powder dust going gold in the light and talked in whispers until nearly two, about nothing, about the river, and when she went up she could still taste banana and honey and didn't brush her teeth for a while on purpose." }
          ] },
          { t: "(Brush the powder off his eyebrow.)", crush: WARM(2), then: [
            { n: "She reached up and brushed it off with her thumb before she'd decided to, and he went completely still, fork in one hand and banana in the other, and looked at her, and the kitchen hummed, and she took her hand back and said *powder* in a voice that didn't sound like hers." },
            { s: 'akihiko', f: 'blushing', t: "...Thanks. There's. Yeah. It gets everywhere." },
            { n: "He made her a shake. She didn't remember drinking it. She remembered the thumb." }
          ] },
          { t: "(Water's fine. Leave him to it.)", then: [
            { s: 'akihiko', f: 'neutral', t: "Next time, then. I'll have it perfect next time." },
            { n: "She filled her glass and left him to it, and halfway up the stairs she heard the blender go anyway, one short guilty burst, and then silence, and Junpei's door open, and Junpei's voice say *SENPAI*, and the kitchen light go off very fast." }
          ] }
        ] }
      ] },

    /* ── July: the tournament, the fan club, finals, the first days of summer. ── */
    { id: 'cr-aki-fanclub-towel', who: 'akihiko', crush: A(P.UP), slot: 'morning', after: '7/1', until: '7/10', schoolOnly: true,
      place: 'Gekkoukan High · Shoe Lockers', time: 'Morning', bg: 'school-entryhallway', cast: FC, scene: [
        { n: "In her shoe locker, on top of her indoor shoes, there was a towel. A white sports towel, folded into a perfect square and wrapped in cellophane with a pink ribbon, and SANADA-SENPAI FIGHTING!! embroidered across one corner in pink thread by somebody who had clearly stayed up very late." },
        { n: "Taped to the cellophane was a note in careful round handwriting. *Solar-senpai. You live with him. Please give him this before the 11th. It's from all of us. Please don't say it's from you. (Please say it's from the club.) — Ōta, Hiyori and the others.*" },
        { n: "Ōta and Hiyori were at the far end of the entrance hall, by the umbrella stand, pretending to read the noticeboard with the total absorption of two people who had never read a noticeboard in their lives." },
        { choose: [
          { t: "(Give it to him at the club after school. Say exactly who it's from.)", crush: WARM(1), then: [
            { n: "She gave it to him at the club and said *from the fan club, all of them, they stayed up*, very clearly, and he looked at the embroidery for a long time, and then folded it carefully back along its creases, and said *tell them thanks*, and then, *tell them it's going in the corner*, and on the eleventh it was in the corner, over the rope, and the second-years in the bleachers made a sound like birds." },
            { n: "The next morning there was a second note in her locker. *THANK YOU SOLAR-SENPAI. YOU ARE OKAY.* It was, she thought, a significant concession." }
          ] },
          { t: "(Walk down the hall and give it back to them. Tell them to do it themselves.)", crush: WARM(1), then: [
            { n: "She walked down the hall and held it out to Ōta, who went white, and said *he'd want it from you*, and Ōta said they couldn't, and Solar said *he's not scary, he's just loud*, and in the end the three of them went to the boxing club together at lunch, Solar in front, and Ōta held it out at arm's length with her eyes shut, and Akihiko said *oh, thanks, that's great*, and the fan club talked about it until September." },
            { s: 'ota', t: "...You're nicer than the newsletter said." }
          ] },
          { t: "(Keep it in your bag a day too long, for no reason you can name.)", crush: WARM(2), then: [
            { n: "She meant to give it to him that afternoon and didn't, and meant to give it to him the next morning and didn't, and on the evening of the second day she found it in her bag and stood there in her room holding it and understood, with a lurch, exactly why she hadn't, and gave it to him that night at the dinner table in front of everybody with her ears burning, and said *from the fan club* so loudly that Junpei choked on his rice." }
          ] }
        ] }
      ] },

    { id: 'cr-aki-tournament-eve', who: 'akihiko', crush: A(P.UP), slot: 'evening', after: '7/8', until: '7/10',
      place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
        { n: "The night before the tournament he was the calmest anybody had ever seen him, which was how everybody knew he wasn't. He sat on the lounge floor with his back to the sofa rolling hand wraps, the same two rolls, over and over, unrolling them and rolling them again, very neatly, very slowly, like a man saying a rosary." },
        { s: 'akihiko', f: 'neutral', t: "I'm not nervous. I've won it twice. I don't get nervous." },
        { s: 'akihiko', f: 'neutral', t: "I'm just checking the wraps." },
        { ifRank: { akihiko: 4 }, then: [
          { s: 'akihiko', f: 'neutral', t: "...You're still coming. Tomorrow. You said." }
        ], else: [
          { s: 'akihiko', f: 'neutral', t: "...Are you coming? Tomorrow. You don't have to. It's loud. There's a banner. It's a bad banner." }
        ] },
        { choose: [
          { t: "(Sit down on the floor next to him. Roll the other one.)", crush: WARM(2), then: [
            { n: "She sat down on the floor beside him and took the other roll out of his hands and rolled it, slowly, the way he was doing it, and he watched her do it and then went back to his, and they sat there rolling and unrolling the same two strips of cloth in the lamplight for half an hour without saying anything, and at some point she realized his shoulders had come down, and at some point he realized it too." },
            { s: 'akihiko', f: 'neutral', t: "...I'll look for you. In the crowd. Between rounds. Is that weird?" },
            { s: 'solar', f: 'neutral', t: "Second row. One in from the aisle." },
            { s: 'akihiko', f: 'blushing', t: "...Okay. Second row. Okay." }
          ] },
          { t: "I'll be there. I'll be counting.", crush: WARM(1), then: [
            { s: 'akihiko', f: 'happy', t: "Counting what?" },
            { s: 'solar', f: 'neutral', t: "Everything." },
            { s: 'akihiko', f: 'happy', t: "...Yeah. You would. Okay. Good. Count everything." }
          ] },
          { t: "Go to bed. You're going to unravel them.", then: [
            { s: 'akihiko', f: 'neutral', t: "...Yeah. Okay. Bed." },
            { n: "He went to bed. At midnight she heard him come back down. At one the lounge light was still on, and she didn't go and look, because he'd have hated that, and she lay awake anyway until it went off." }
          ] }
        ] }
      ] },

    { id: 'cr-aki-finals-study', who: 'akihiko', crush: A(P.ASKED), slot: 'evening', after: '7/11', until: '7/17',
      place: 'Iwatodai Dorm · Dining Room', time: 'Evening', bg: 'iwatodaidorm-diningroom', scene: [
        { n: "Finals week, and the dining-room table was buried under everybody's notes, and by ten it had emptied out to just the two of them and classical Japanese, which Akihiko approached the way he approached most things he couldn't hit, with total grim commitment and no technique at all." },
        { s: 'akihiko', f: 'serious', t: "Why does every poem in this book end with somebody looking at the moon and being sad. That's not a poem. That's a Thursday." },
        { n: "She explained the particle. He wrote it down. She explained it again. He wrote it down again, in different words, which were wrong, and then at some point between the second explanation and the third, mid-sentence, his head went down on his arms on top of the textbook, and he was asleep, all at once, like a light switched off." },
        { ifCrush: A(P.BUILD), then: [
          { n: "She looked at him for a long time. Longer than she should have. His hair had fallen over his eyes and there was a crease in his cheek already from the edge of the book, and he slept the way he did everything else, completely, and the house was quiet, and nobody was coming, and there was nobody to see her looking, which was exactly the problem." },
          { choose: [
            { t: "(Put your cardigan over his shoulders. Leave the lamp on. Go up.)", crush: WARM(2), then: [
              { n: "She put her cardigan over his shoulders, which was much too small for them and sat there like a napkin on a piano, and left the lamp on low, and went up. In the morning the cardigan was folded on the end of her bed, and on top of it was his exam-prep sheet, with every particle she'd explained written out correctly in his square capitals, and at the bottom, *I WOKE UP AT 3. THANKS.*" }
            ] },
            { t: "(Stay. Finish your own notes. Don't wake him.)", crush: WARM(1), then: [
              { n: "She stayed and did her own notes by the lamp while he slept, and the clock ticked, and once he said something in his sleep that sounded like *elbow*, and she laughed into her sleeve, and at half past twelve he woke with a jolt and looked at her across the table, still there, and didn't say anything, and neither did she, and they went up together, and on the stairs he said *you stayed*, and she said *I had notes*, and he said *okay* in a voice that knew." }
            ] }
          ] }
        ], else: [
          { n: "She poked him in the shoulder with her pen. He woke up saying *I'm awake*, and wasn't, and she made him do the particle one more time, and he got it right, and looked so surprised that she laughed, and he said it was the moon's fault, and they both went to bed, and on the twelfth he passed by four marks and told the whole dorm she'd coached him." }
        ] }
      ] },

    { id: 'cr-aki-summer-schedule', who: 'akihiko', crush: A(P.ASKED), slot: 'early', after: '7/18', until: '8/2', offOnly: true,
      place: 'Iwatodai Dorm · Kitchen', time: 'Early Morning', bg: 'iwatodaidorm-kitchen', scene: [
        { n: "On the first morning of summer break there was a new piece of paper on the fridge, held up by four magnets, ruled into a grid in ballpoint with a ruler: SUMMER ROADWORK in capitals across the top, every day of the break down the side, and a column for each week, and a row headed RIVER, a row headed STAIRS, a row headed BAG." },
        { n: "Junpei was standing in front of it in his pajamas with a carton of milk, reading it with a deepening frown, like a man reading a contract." },
        { s: 'junpei', f: 'serious', t: "Leader. Leader, come here. Look at this." },
        { s: 'junpei', f: 'surprised', t: "Your name's on every day. Every single day. Five a.m. *Solar.* *Solar.* *Solar.* Where's MY name? I'm not on here once. I live here. I'm athletic." },
        { ifCrush: A(P.BUILD), then: [
          { n: "Her name was on every day. In his square blunt capitals, in the same place in every box, and on the seventh of August, the day after the full moon, the box said *REST DAY* and then, underneath, smaller, crossed out but not very hard, *(BRIDGE? IF YOU WANT)*." },
          { choose: [
            { t: "(Take a pen. Write *Junpei* under your name on one day. Just one.)", crush: WARM(1), then: [
              { n: "She wrote *JUNPEI* under her name on the fourteenth, in capitals, and Junpei looked at it and said *one day* in a hollow voice, and then *I'll take it*, and when Akihiko came in from the river he stopped in front of the fridge and read it and looked at her and looked at Junpei and said *fine, but you're not slowing her down*, and that was how everybody found out what the schedule was actually for." }
            ] },
            { t: "(Initial every box. Every one. Like a contract.)", crush: WARM(2), then: [
              { n: "She initialed every box. It took a while. Junpei watched the whole thing with mounting horror. When Akihiko came in he went to the fridge for water and stopped and looked at a column of small *S*'s running down beside his capitals, one for every day of the summer, and didn't say anything, and drank his water looking at it, and his ears went a color Junpei later described to the group chat as *a crime*." }
            ] }
          ] }
        ], else: [
          { n: "Her name was on every day, and so, she noticed when she looked closer, was Ken's on Sundays, and Junpei's was on none of them because, Akihiko said, coming in from his run, Junpei had told him in April that he'd rather die. Junpei said he'd been joking. Akihiko wrote JUNPEI on every Wednesday in capitals, right there, and Junpei said he hadn't been joking that much, and it stayed up all summer." }
        ] }
      ] },

    /* ── Almost (late July into August): summer, and everybody waiting for one of them to say it. ── */
    { id: 'cr-aki-ice-pops', who: 'akihiko', crush: A(P.PUP), slot: 'evening', after: '7/25', until: '8/14', offOnly: true,
      place: 'Iwatodai Dorm · Rooftop', time: 'Evening', bg: 'iwatodaidorm-roof-evening', scene: [
        { n: "The roof at six on a summer evening, the concrete still giving back the whole day's heat through the soles of her sandals, and he'd come up with the double kind of ice pop, the kind with two sticks that you were supposed to snap in half and share, held up in one hand like a trophy." },
        { s: 'akihiko', f: 'happy', t: "They only had the double ones. That's what I'm going to say if anybody asks. They only had the double ones." },
        { n: "He snapped it. It broke unevenly, the way they always do, one half bigger than the other, and he looked at the two halves, and looked at her, and held out the bigger one without a word." },
        { choose: [
          { t: "(Take the smaller one instead. Watch his face.)", crush: WARM(2), then: [
            { n: "She took the smaller one out of his other hand. He looked at the big half, left in his fist, and then at her, and his face did something complicated and helpless, like a man who had been out-fought at his own game, and he said *that's not how it works*, and she said *it is now*, and they sat on the warm concrete with their backs to the water tank and ate them before they could melt, and the soda-blue ran down both their wrists." }
          ] },
          { t: "(Take the bigger one. Say *protein* very seriously.)", crush: WARM(1), then: [
            { s: 'solar', f: 'serious', t: "Protein." },
            { s: 'akihiko', f: 'happy', t: "...Ha! That's not. Okay. Okay, that's fair." },
            { n: "He laughed so hard he had to put a hand on the water tank, and the ice pop dripped on his shoe, and he didn't notice, because he was looking at her." }
          ] }
        ] },
        { n: "The roof door banged open. Junpei came out with a bag of six single ice pops, saw them sitting side by side with the two halves of one, went slowly red, and said *nope* and turned round and went back down the stairs with the whole bag, and they heard him say *NOPE* again, louder, on the landing below, to someone, probably Yukari." }
      ] },

    { id: 'cr-aki-dawn', who: 'akihiko', crush: A(P.PUP), slot: 'early', after: '7/26', until: '8/20', offOnly: true,
      place: 'Iwatodai · Riverside', time: 'Early Morning', bg: 'park-2', scene: [
        { n: "Four thirty in August, because the sun cheated after five, and the river was the only cool thing in the whole prefecture, gray and slow and smoking faintly where the night still sat on it, and the sky over the bay was going from ink to the color of a bruise healing." },
        { n: "They ran the bridge and back and then didn't stop at the steps, the way they usually did. They walked. He'd slung his towel round her neck at the bridge without asking because she'd forgotten hers, and it smelled like him, and she'd decided to stop noticing that about a week ago and was still working on it." },
        { s: 'akihiko', f: 'neutral', t: "This is my favorite part. Of the day. Right now. Before anybody else is up." },
        { n: "He said it to the river. He wasn't talking about the day. She knew it, and he knew she knew it, and the not-saying sat between them on the path like a third person who'd come out running with them and was very politely staying quiet." },
        { choose: [
          { t: "Mine too.", crush: WARM(2), then: [
            { n: "She said it to the river too. That was the only way it could be said, that week, sideways, to water. He didn't look at her. He nodded at the river, twice, hard, and walked a little closer, and their hands bumped once, knuckles, at the next lamp post, and neither of them moved them away, and neither of them did anything else either, and the sun came up." }
          ] },
          { t: "(Stop walking. Make him stop too. Watch the sun come up.)", crush: WARM(1), then: [
            { n: "She stopped at the rail. He came back for her, frowning, and saw what she was looking at, and stopped frowning. The sun came up over the bay the way it only ever does over water, gray to silver to gold, all at once, and he stood next to her in it, close enough that she could feel the heat of the run still coming off him, and said nothing, and that was the most anybody had said to her all summer." }
          ] },
          { t: "It's too early for anybody to have a favorite anything.", then: [
            { s: 'akihiko', f: 'happy', t: "Ha. Fair." },
            { n: "He let it go. He always let it go when she asked him to, which was, she was starting to understand, the most dangerous thing about him." }
          ] }
        ] }
      ] },

    { id: 'cr-aki-burger', who: 'akihiko', crush: A(P.ASKED), slot: 'evening', after: '7/27', until: '8/24', offOnly: true,
      place: 'Iwatodai Strip · Wild-Duck Burger', time: 'Evening', bg: 'wilduckburger', scene: [
        { n: "Wild-Duck Burger at eight, because Junpei had said the words *summer special* in the lounge and Akihiko had heard *protein*, and the three of them were in a booth by the window with the neon duck outside flickering over their trays like a slow pink pulse." },
        { s: 'junpei', f: 'happy', t: "Okay. So. Observation. Scientific. I've been watching you two for like a month and you're like an old married couple. You finish each other's—" },
        { s: 'akihiko', f: 'neutral', t: "Fries." },
        { s: 'junpei', f: 'surprised', t: "SENTENCES. I was going to say sentences." },
        { ifCrush: A(P.BUILD), then: [
          { n: "Akihiko had said *fries* because she'd just taken one of his, without asking, without looking, the way she'd been doing for weeks, and he'd moved the tray an inch toward her without looking either, and Junpei had watched the whole thing happen with the face of a man who has seen a ghost and then been asked to pay for its dinner." },
          { choose: [
            { t: "(Take another fry. Slowly. Looking at Junpei.)", crush: WARM(1), then: [
              { n: "She took another. Slowly. Looking straight at Junpei. Akihiko pushed the tray the rest of the way over without a word. Junpei put his face in his hands and said into them that he was going to have to start eating somewhere else, somewhere with a booth for one, and neither of them helped." }
            ] },
            { t: "We're not married, Junpei.", crush: WARM(1), then: [
              { s: 'junpei', f: 'happy', t: "Not YET." },
              { n: "Akihiko choked on his burger. She hit him on the back, twice, flat, the way he'd shown her you hit a heavy bag, and Junpei sat back in his seat and spread his hands like a lawyer resting his case." }
            ] }
          ] }
        ], else: [
          { n: "Akihiko had said *fries* because Junpei had just taken one of his. Junpei took another. Akihiko moved the tray. Solar moved it back, toward Junpei, out of pure spite, and the two of them argued about it until the duck outside went off at ten, and she laughed so hard at one point that she had to put her head down on the table, and it was the best evening of the summer so far." }
        ] }
      ] },

    { id: 'cr-aki-festival-ask', who: 'akihiko', crush: A(P.PUP), slot: 'after', after: '8/8', until: '8/15', offOnly: true, ranks: { akihiko: 4 },
      place: 'Iwatodai Dorm · Lounge', time: 'Daytime', bg: 'iwatodaidorm-livingroom', scene: [
        { n: "Akihiko had been standing in the lounge doorway for some time. She was on the sofa with a book and he was in the doorway with his hands in his pockets and then out of his pockets and then in them again, and Junpei, at the table behind him, was mouthing something at her very slowly and pointing at Akihiko's back." },
        { s: 'akihiko', f: 'neutral', t: "The sixteenth. There's a thing. At the shrine. The festival. With the. Lanterns. And the food." },
        { s: 'akihiko', f: 'neutral', t: "People go. To it." },
        { n: "Behind him, Junpei put both hands over his face." },
        { choose: [
          { t: "People do go to it.", crush: WARM(1), then: [
            { s: 'akihiko', f: 'blushing', t: "They do. Yeah. They go." },
            { s: 'akihiko', f: 'blushing', t: "...I'm going to text you. About it. On the day. That's a. I'm telling you now so you know a text is coming. So you're not surprised by it." },
            { n: "He left. She heard him take the stairs two at a time and then stop on the landing and say something to himself, short and furious, and Junpei came round the doorway and looked at her with deep compassion and said *he practiced that, leader, in the bathroom mirror, for an hour*." }
          ] },
          { t: "(Close the book. Wait. Make him finish.)", crush: WARM(2), then: [
            { n: "She closed the book and put it in her lap and looked at him and waited, the way he'd taught her to wait at the line for the beep, and he looked at her waiting and went redder and redder, and opened his mouth, and Koromaru came round his legs into the lounge and barked once, and he said *I'll text you* very fast and fled, and she sat there with her heart going like the end of the shuttle run." }
          ] }
        ] }
      ] },

    { id: 'cr-aki-sees-whiteboard', who: 'akihiko', crush: A(P.PUP), slot: 'evening', after: '8/10', until: '8/30',
      place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
        { n: "Somebody had taken the whiteboard down from the command room and propped it against the lounge television, and on it, in Junpei's handwriting, it said WHEN?? and underneath that a list of dates with names next to them, and a column of yen amounts, and at the bottom, in Yukari's handwriting, smaller, *I was FORCED*." },
        { n: "Fuuka had written *when they're ready :)* next to her name instead of a date. Ken, who was ten, had written *I don't understand what this is* and then, under it, *the 20th*. Koromaru's paw print was next to the twenty-fourth in what looked like soy sauce." },
        { n: "Mitsuru came in, stopped, and read the whiteboard from top to bottom with the expression she wore for Tartarus floor plans." },
        { s: 'mitsuru', f: 'neutral', t: "Iori. What is this." },
        { s: 'junpei', f: 'flustered', t: "It's. A calendar. For. The. Weather." },
        { n: "Mitsuru took the whiteboard under one arm, said she was confiscating it, and carried it toward the stairs. At the foot of the stairs she stopped, took the cap off the marker with her teeth, wrote something at the bottom without looking at anybody, and went up. When Junpei crept over to look, it said *Kirijo: end of August. 10,000.*" },
        { choose: [
          { t: "(Wipe your own name off it. Leave his.)", crush: WARM(1), then: [
            { n: "She wiped her name off every line with the side of her hand, and left his, and Junpei said *that's not how it works, leader*, and Yukari said *that's exactly how it works, Junpei, that's how ALL of it works*, and she went upstairs with marker on the side of her hand and didn't wash it until morning." }
          ] },
          { t: "(Pick up the marker. Write a date at the bottom. Cover it with your hand.)", crush: WARM(2), then: [
            { n: "She wrote a date and covered it with her hand and walked away, and the whole lounge descended on the board, and it said *ask him*, and nobody could agree on whether that was a date or a dare, and the argument went on until midnight, and nobody did ask him, because he was on the roof, where he'd been all evening, very carefully not in the lounge." }
          ] }
        ] }
      ] },

    { id: 'cr-aki-tartarus-august', who: 'akihiko', crush: A(P.PUP), slot: 'late', when: 'tartarus', after: '7/24', until: '8/31',
      place: 'Iwatodai Dorm · Command Room', time: 'Late Night', bg: 'iwatodaidorm-commandroom', scene: [
        { n: "Debrief in the command room, one in the morning, everybody sitting where they'd fallen. Mitsuru read the night back off Fuuka's notes in her flat clear voice: floors cleared, Shadows, injuries, items, and then, at the end, as if it were an item, without looking up," },
        { s: 'mitsuru', f: 'neutral', t: "And on the twenty-third floor Akihiko stepped into a hit that was going to Solar. Again. That's the fourth time this month. I've started counting." },
        { n: "Nobody said anything. Junpei said nothing so loudly that Yukari elbowed him. Akihiko, on the arm of the sofa with an ice pack on his shoulder, looked at the ceiling with great interest." },
        { s: 'akihiko', f: 'neutral', t: "I was closer." },
        { s: 'mitsuru', f: 'neutral', t: "You were four meters further away. Fuuka has it on record." },
        { s: 'fuuka', f: 'surprised', t: "I'm sorry, senpai! It's just what the readings say!" },
        { choose: [
          { t: "Don't do that again. I had it.", crush: WARM(1), then: [
            { s: 'akihiko', f: 'serious', t: "I know you had it." },
            { s: 'akihiko', f: 'blushing', t: "...I know. I'm working on it. It's a reflex. I'll fix it." },
            { n: "He said it to the ceiling, and Mitsuru made a small note on her pad that Solar was almost certain said *he will not fix it*." }
          ] },
          { t: "(Take the ice pack off his shoulder. Hold it there yourself.)", crush: WARM(2), then: [
            { n: "She got up and took the ice pack off his shoulder and held it there herself, standing beside the arm of the sofa, which was a completely medical thing to do in a room full of people, and the room full of people went silent, and Mitsuru looked down at her notes and turned the page, which was the closest Solar had ever seen her come to leaving a room on somebody else's behalf." }
          ] }
        ] }
      ] },

    { id: 'cr-aki-stairs-almost', who: 'akihiko', crush: A(['almost']), slot: 'late', when: 'quiet', after: '8/11', until: '8/31',
      place: 'Iwatodai Dorm · 2F Hallway', time: 'Late Night', bg: 'iwatodaidorm-hallway', scene: [
        { n: "One in the morning after a night of nothing, the day's heat still in the walls, and she'd come down for water and he'd come down for water, which kept happening, and he'd walked her back up, which also kept happening, and now they were on the landing outside the girls' corridor where he always stopped, as if there were a line painted on the floor." },
        { n: "The hall light was off. The window at the end let in the orange from the street. He was standing very close, closer than the line, and he didn't seem to know it, and she didn't seem to be able to tell him." },
        { s: 'akihiko', f: 'neutral', t: "Goodnight." },
        { s: 'solar', f: 'neutral', t: "Goodnight." },
        { n: "Neither of them moved. She could hear the fridge downstairs. She could hear a clock. She could hear, she was almost certain, both their hearts, which wasn't possible, and she counted anyway, and lost count, and he lifted one hand a little at his side, toward her, as if it had a question, and she felt her own chin come up to meet it—" },
        { n: "Koromaru came up the stairs. Click, click, click, very slowly, at one in the morning, and sat down on the landing between them, and looked up at both of their faces in turn with his red eyes, with the deep patient interest of a dog who would like to know what everybody was doing." },
        { choose: [
          { t: "(Laugh. Into your hands. You can't stop.)", crush: WARM(1), then: [
            { n: "She laughed into her hands and couldn't stop, and he laughed too, helplessly, bent over with one hand on the banister, and Koromaru wagged, pleased to have been part of something, and somewhere down the hall a door opened and Yukari's voice said *SOME of us have SUMMER HOMEWORK* and shut again." },
            { s: 'akihiko', f: 'blushing', t: "...Goodnight. For real. Before he brings the others." }
          ] },
          { t: "(Crouch down. Thank the dog for his service.)", crush: WARM(1), then: [
            { n: "She crouched and took Koromaru's face in both hands and said *thank you for your service* very seriously, and Akihiko made a sound she'd never heard come out of him, a sort of strangled wheeze, and when she stood up he'd gone red to the hairline and was halfway up the next flight, and from there, without turning round, he said *five*, and she said *five*, and that was all, and it was a great deal." }
          ] }
        ] }
      ] }
  );
})();

/* ── After the arrivals (September on): lighter, and true to where it went. Each moment plays for anyone who was asked and
   branches: dating (his romance route) · still building (no route yet) · a friendship (faded, or said no in April). ── */
(() => {
  const C = window.FEMC_GAME_CRUSH, P = C.phases;
  const A = ph => ({ akihiko: ph });
  const CLASS = { maki: 'Maki', sonoda: 'Sonoda' }, FC = { ota: 'Ōta', hiyori: 'Hiyori' };
  // then / middle / else by phase: dating, still building, friendship.
  const by = (dating, building, friend) => ({ ifCrush: A('dating'), then: dating, else: [{ ifCrush: A(P.FRIEND), then: friend, else: building }] });

  C.moments.push(
    { id: 'cr-aki-term-two', who: 'akihiko', crush: A(P.ASKED), slot: 'early', after: '9/1', until: '9/14', schoolOnly: true,
      place: 'Iwatodai Station · Monorail', time: 'Morning', bg: 'train-car-inside', scene: [
        { n: "The first morning of the second term, and the monorail was full of tans and new haircuts and people telling each other about their summers at a volume the summer hadn't earned, and he was by the door, where he always was, with his bag over one shoulder and a strip of tape on two of his knuckles from the bag the night before." },
        by([
          { n: "He saw her get on and moved over so there was room by the door, and then, when the carriage swung into the curve over the bay, his hand found hers on the pole, his under hers, and stayed there the whole way across, and two first-years by the window looked at the hands and then very hard at the sea." },
          { s: 'akihiko', f: 'blushing', t: "...The whole school's going to know by lunch." },
          { s: 'solar', f: 'happy', t: "The whole school knew in July." },
          { s: 'akihiko', f: 'happy', t: "Ha. Yeah. Okay. Then it doesn't matter." },
          { n: "At Gekkoukan he let go to get off, and on the platform he took her hand again, and at the gate he didn't let go, and the gate was the third-years and the second-years and the fan club in a row by the bicycle racks, and he walked through all of it holding on as if it were the river at five." }
        ], [
          { n: "He saw her get on and moved over so there was room by the door, and the carriage swung into the curve, and their hands landed on the pole at the same moment, his just above hers, not touching, a finger's width apart, and both of them looked at the finger's width all the way across the bay, and neither of them closed it." },
          { s: 'akihiko', f: 'neutral', t: "...Good summer?" },
          { s: 'solar', f: 'neutral', t: "You were there for all of it." },
          { s: 'akihiko', f: 'blushing', t: "Yeah. I know. I'm asking anyway." }
        ], [
          { n: "He saw her get on and lifted his chin, *morning*, and spent the whole ride telling her about the club's new first-years, every one of them, by name and by flaw, with the grim relish of a man who'd been handed a summer's worth of material, and she laughed at the right places, and the ride went by in about a minute." },
          { s: 'akihiko', f: 'happy', t: "One of them can't make a fist. A fist. Third week. I've started dreaming about it." }
        ])
      ] },

    { id: 'cr-aki-roof-seat', who: 'akihiko', crush: A(P.ASKED), slot: 'lunch', after: '9/15', until: '10/10', schoolOnly: true, weather: ['clear', 'cloudy'],
      place: 'Gekkoukan High · Rooftop', time: 'Lunch', bg: 'rooftop-day', cast: FC, scene: [
        { n: "September lunch on the roof, the heat finally thinking about leaving, the sky high and pale and full of dragonflies. The dorm had got so full lately, so many voices on the stairs and shoes by the door, that the roof had become the only place in her day with any air in it." },
        by([
          { n: "His bag was on the bench beside him, holding her place like a dog told to stay, and two second-years asked him if the seat was free and he said *no* without looking up from his onigiri, and then she came through the door, and he moved the bag, and the two second-years looked at each other and then at the bag and then went and sat by the fence and wrote something down." },
          { s: 'ota', t: "...The newsletter's going to have to do a special issue." },
          { s: 'akihiko', f: 'neutral', t: "Tell them I said hi." },
          { n: "He said it to his onigiri. She ate her lunch with her shoulder against his and the dragonflies going over, and it was the least anybody had asked of her all week." }
        ], [
          { n: "His bag was on the bench beside him. He moved it when she came through the door, quickly, as if he'd only just noticed it was there, which he hadn't, and she sat, and the second-years by the fence had stopped pretending not to look a long time ago and just looked, openly, like people at an aquarium." },
          { s: 'akihiko', f: 'neutral', t: "...You okay? You look tired. The house is loud." },
          { s: 'solar', f: 'neutral', t: "The house is loud." },
          { s: 'akihiko', f: 'neutral', t: "Up here's not." },
          { n: "He said it like an offer. It was one. She took it every day that week." }
        ], [
          { n: "Junpei had claimed the bench and Akihiko was sitting on the ground in front of it with his back against it, because he said benches made you soft, and she sat on the end next to Junpei's bento, which was mostly fried things, and the three of them talked about nothing while the dragonflies went over, and two second-years by the fence watched with the slightly deflated air of people whose favorite show had turned out to be about friendship." }
        ])
      ] },

    { id: 'cr-aki-hospital-walk', who: 'akihiko', crush: A(P.ASKED), slot: 'after', after: '10/6', until: '10/31', events: ['a4-fortune'],
      place: 'Tatsumi Memorial Hospital · Front Steps', time: 'After School', bg: 'hospital-outside', scene: [
        { n: "Visiting hours ended at six, and he always stayed until the nurse said so, and then a few minutes after, and then came down the front steps with his hands in his jacket pockets and his face shut like a shop. Koromaru got up off the bottom step when he saw them, the way he did every day, and walked between them all the way to the monorail." },
        by([
          { n: "Halfway to the station he took her hand without looking at her and put it in his jacket pocket with his own, and kept it there, and didn't say anything, and his thumb went back and forth across her knuckles the whole way, slow, like he was counting something he'd lost track of and was starting again from one." },
          { s: 'akihiko', f: 'sad-2', t: "I told him about you today. Again. I tell him every day. I figure if he can hear anything he's sick of it by now." },
          { s: 'solar', f: 'sad', t: "What do you tell him?" },
          { s: 'akihiko', f: 'sad-3', t: "...That I'm not running off anywhere stupid. That somebody's got hold of my sleeve." }
        ], [
          { n: "Halfway to the station their hands bumped, knuckles, and he looked down at them as if they belonged to two other people, and then, very carefully, the way you'd pick up something you'd been told not to touch, he took hold of her sleeve. Just the sleeve. Between finger and thumb. And held it the rest of the way, and didn't say why, and she didn't ask." }
        ], [
          { n: "Halfway to the station he started talking about the club, and the first-years, and a combination he wanted to show Kondo, in the bright fast voice of a man filling a silence before it could fill itself, and she let him, and walked close enough that their shoulders bumped on the corners, and at the station he said *thanks for coming* the way he said it every day, and meant it every day." }
        ])
      ] },

    { id: 'cr-aki-frost', who: 'akihiko', crush: A(P.ASKED), slot: 'early', after: '10/26', until: '11/22',
      place: 'Iwatodai · Riverside', time: 'Early Morning', bg: 'park-2', scene: [
        { n: "The first morning the river had frost on the benches, a skin of it that glittered under the streetlights like somebody had gone along the path with a sieve of sugar, and her breath went up white, and her fingers had stopped being fingers by the first bridge." },
        by([
          { n: "At the bridge he took off one glove and gave it to her, the left, and kept the right, and took her bare right hand in his bare left one and put both of them in his coat pocket, and they ran the way back like that, badly, out of step, one glove each, laughing at how stupid it was, and didn't stop." },
          { s: 'akihiko', f: 'happy', t: "This is terrible form. This is the worst roadwork I've ever done." },
          { s: 'solar', f: 'happy', t: "Do you want your glove back?" },
          { s: 'akihiko', f: 'happy', t: "No." }
        ], [
          { n: "At the bridge he took off both gloves and held them out without a word, and when she said she was fine he took her hands, one and then the other, and put the gloves on them himself, quick and businesslike, the way he'd wrap them, and then put his own bare hands in his armpits and ran the way back like a penguin, and wouldn't hear a word about it." },
          { n: "The gloves were warm from him all the way to the dorm. She knew exactly how long they stayed warm. She didn't want to know that about herself." }
        ], [
          { n: "At the bridge he stopped and threw her a pair of gloves out of his pocket, spare ones, still in the shop's plastic tag, and said he'd bought them in the summer because he knew she'd forget, and she put them on, and they raced the last kilometer, and she won, and he said it was the gloves, and she said they were his gloves, and he said that was what made it so humiliating." }
        ])
      ] },

    { id: 'cr-aki-laundry-hideout', who: 'akihiko', crush: A(P.ASKED), slot: 'evening', after: '11/6', until: '12/6', events: ['a4-household-introductions'],
      place: 'Iwatodai Dorm · Laundry Room', time: 'Evening', bg: 'iwatodaidorm-laundryroom', scene: [
        { n: "The dorm had got so full that there was nowhere in it to be quiet. The lounge was voices, the kitchen was voices, the stairs were somebody coming down while somebody went up, and the only room in the building where nobody ever wanted to be was the laundry room, which was where she found him, sitting on top of the dryer with his knees up, reading a boxing magazine he'd clearly read before." },
        { s: 'akihiko', f: 'neutral', t: "It's taken. ...It's not taken. Come in. Shut the door." },
        by([
          { n: "She shut the door and climbed up onto the washing machine next to him, and the dryer under him was going, warm and rumbling, and he moved over a little so their shoulders touched, and they sat there in the hum with the whole full loud house on the other side of a door, and he read her the results from a fight in Osaka out loud, all of them, in order, and she put her head on his shoulder somewhere around the bantamweights and he lost his place and didn't find it again." },
          { s: 'akihiko', f: 'blushing', t: "...We should hide in here more. It's the only door in the building that locks from the inside." },
          { s: 'solar', f: 'happy', t: "It doesn't lock." },
          { s: 'akihiko', f: 'blushing', t: "It doesn't. I know. I was trying something." }
        ], [
          { n: "She shut the door and sat on the washing machine. He offered her half the magazine. She took the half with the pictures. They sat there for an hour in the warm hum of the dryer reading the same fight from two different pages, and once she looked up and he was looking at her instead of at the magazine, and he looked down so fast he turned two pages at once." }
        ], [
          { n: "She shut the door and sat on the washing machine, and he told her he was hiding from Junpei, who wanted to know *everything* about everybody who'd come through the door this month, and she said she was hiding from everybody, and he said that was fair, and gave her half the magazine, and they hid together for an hour like two people in a bunker, comfortable, and when Junpei finally found them he said *oh, it's just you two*, and went away disappointed, and that was a kind of compliment." }
        ])
      ] },

    { id: 'cr-aki-two-am', who: 'akihiko', crush: A(P.ASKED), slot: 'late', when: 'quiet', after: '11/10', until: '12/12',
      place: 'Iwatodai Dorm · Kitchen', time: 'Late Night', bg: 'iwatodaidorm-kitchen', scene: [
        { n: "Two in the morning and the full dorm finally asleep, every room breathing, and she came down for water and the kitchen light was on and there were two mugs on the counter, steaming, and Akihiko was standing between them looking at them as though he'd been caught with them." },
        by([
          { s: 'akihiko', f: 'blushing', t: "I heard your door. It's your door. It's got a squeak at the end. I put the kettle on when I heard it." },
          { n: "She took the mug. He'd put honey in it, the way she liked, which she'd never told him. They stood at the counter in the hum of the fridge and drank them in silence, his arm round her waist, her head on his chest, and the house slept on above them, and nobody needed her for anything until the morning." }
        ], [
          { s: 'akihiko', f: 'neutral', t: "I heard a door. I didn't know it was yours. I made two in case." },
          { s: 'solar', f: 'neutral', t: "In case of what?" },
          { s: 'akihiko', f: 'blushing', t: "...In case it was yours." },
          { n: "She took the mug. Honey in it. She'd never told him she liked it with honey. She didn't ask how he knew. They drank them standing a careful foot apart at the counter, and talked about the weather at two in the morning, and both of them knew they weren't talking about the weather." }
        ], [
          { s: 'akihiko', f: 'neutral', t: "Made two out of habit. Shinji used to come down about now. You want it? It's got honey in it. I don't know why I put honey in it." },
          { n: "She took it. They drank them at the counter, and he talked a little about the hospital, and a little about nothing, and she listened, and it was warm, and at the end he rinsed both mugs and set them upside down on the rack, handles out, the way somebody had taught him." }
        ])
      ] },

    { id: 'cr-aki-finals-dec', who: 'akihiko', crush: A(P.ASKED), slot: 'evening', after: '12/7', until: '12/18',
      place: 'Iwatodai Dorm · Dining Room', time: 'Evening', bg: 'iwatodaidorm-diningroom', scene: [
        { n: "December finals, the dining-room table buried again, and she looked up from her notes at ten and saw him across from her with classical Japanese open in front of him and thought of July, the same table, the same book, the moon poems, and he looked up at the same moment and she could tell he was thinking it too." },
        { s: 'akihiko', f: 'neutral', t: "Every poem's still somebody looking at the moon and being sad." },
        by([
          { s: 'akihiko', f: 'blushing', t: "...I get it now, though. A little. Not the sad part. The looking part." },
          { n: "He went back to his book very fast. She sat there for a long time with her pen not moving, and when she reached across the table and put her hand flat on his page so he couldn't read it, he looked up at her and didn't pretend he'd been reading at all." }
        ], [
          { s: 'akihiko', f: 'neutral', t: "...I think I get the looking part now. Don't ask." },
          { n: "She didn't ask. She went back to her notes, which were about something, and did not take in a single word of them for the rest of the night." }
        ], [
          { n: "She explained the particle again. He got it first time, which he announced to the whole dining room, which was empty, and then wrote it in the margin in capitals with a circle round it and *SOLAR SAYS* next to it, and she said it was a particle, not a commandment, and he said for him it was a commandment, and passed by twelve marks, and told everybody she'd coached him again." }
        ])
      ] },

    { id: 'cr-aki-first-snow', who: 'akihiko', crush: A(P.ASKED), slot: 'after', after: '12/3', until: '12/19', schoolOnly: true,
      place: 'Gekkoukan High · Front Gate', time: 'After School', bg: 'gekkoukanhigh', cast: CLASS, scene: [
        { n: "It snowed at the last bell, the first real snow of the year, big slow wet flakes coming down over the grounds as if somebody had cut a pillow open over the school, and the whole of Gekkoukan came out of the doors at once and stopped on the steps to look up, like a crowd watching fireworks." },
        by([
          { n: "He was waiting at the gate. He had snow in his hair and on his shoulders and he'd clearly been standing there a while, and when she reached him he brushed the snow off her hair with his hand, carefully, a flake at a time, while about forty people walked past and pretended not to see, and Maki, passing, said *oh my GOD* and kept walking, and Sonoda raised one hand in silent salute." },
          { s: 'akihiko', f: 'blushing', t: "...You had some. In your hair. It was going to melt." }
        ], [
          { n: "He was at the gate, looking up at it with his mouth a little open like a kid, and when she reached him a flake landed on his eyelashes and he blinked it off, and then saw one on hers, and lifted his hand, and stopped, and put it back in his pocket, and said *it's snowing* as though she might not have noticed, and walked her to the station a careful half step closer than usual." }
        ], [
          { n: "He was at the gate with a snowball. She saw it a second too late. It got her in the shoulder, and the first-years from his club cheered, and she made one of her own in about four seconds and got him in the back of the head as he turned to take a bow, and the whole front gate went to war, and he was laughing too hard to defend himself, and the snow came down on all of it." }
        ])
      ] },

    { id: 'cr-aki-shrine-steps', who: 'akihiko', crush: A(P.ASKED), slot: 'early', after: '1/4', until: '1/20', flags: ['year-goes-on'],
      place: 'Naganaki Shrine', time: 'Early Morning', bg: 'outside-shrine-day', scene: [
        { n: "The first roadwork of the new year was the shrine steps, because he'd decided the river was too flat for January, and the steps were steep and frosted and there were a great many of them, and the sky was still dark when they reached the top for the fifth time and stood there in front of the offering box with their breath going up like smoke." },
        by([
          { s: 'akihiko', f: 'neutral', t: "I made a wish at New Year. I'm not supposed to tell you. You're not supposed to tell people or it doesn't count." },
          { s: 'akihiko', f: 'blushing', t: "...It's about you. That's all I'm saying. It's a good one." },
          { n: "He went back down the steps at a run before she could say anything, and she stood at the top in the cold with her heart going much faster than five sets of steps could account for, and then went after him." }
        ], [
          { s: 'akihiko', f: 'neutral', t: "Did you make a wish? At New Year?" },
          { s: 'solar', f: 'neutral', t: "Did you?" },
          { s: 'akihiko', f: 'blushing', t: "...Yeah. Can't tell you. It won't count." },
          { n: "He looked at her as he said it. Then he looked away at the city, and she looked at the city too, and they stood there side by side with their wishes and didn't trade them." }
        ], [
          { s: 'akihiko', f: 'happy', t: "I wished for a faster time on these steps. That's allowed. It's not a secret if it's a time." },
          { n: "She told him hers wasn't a time, and he said that was a waste of a wish, and they did the steps three more times while the sun came up, and his time got faster, and he said that proved it, and she didn't argue." }
        ])
      ] },

    { id: 'cr-aki-classroom-door', who: 'akihiko', crush: A(P.ASKED), slot: 'lunch', after: '1/12', until: '1/30', flags: ['year-goes-on'], schoolOnly: true,
      place: 'Gekkoukan High · Classroom', time: 'Lunch', bg: 'gekkoukan-classroom-day', cast: CLASS, scene: [
        { n: "January, and the third-year floor had gone strange and quiet with entrance exams, everybody hunched over flashcards on rings, and the classroom next door had started emptying out at lunch for cram sessions, and at twelve fifteen Akihiko appeared in her doorway, filling it, holding two cans of hot tea from the machine downstairs." },
        by([
          { n: "Thirty heads came up. He didn't seem to notice them. He walked down the aisle between the desks like it was a boxing club, and put one can on her desk, and sat on the edge of Maki's, which Maki allowed in total silence, and drank the other." },
          { s: 'akihiko', f: 'neutral', t: "Our room's empty. It's depressing. Everybody's at cram school. Your room has people." },
          { s: 'maki', t: "...Sanada-kun. You're sitting on my English." },
          { s: 'akihiko', f: 'neutral', t: "Sorry." },
          { n: "He didn't move. Maki didn't make him. She looked at Solar over his back with an expression of such deep and complicated satisfaction that Solar had to look at her tea." }
        ], [
          { n: "Thirty heads came up. He stood in the doorway holding the two cans, looking for a second as though he'd forgotten why he'd come, and then held one out across three desks, and she got up and went and took it, and he said *your room has people, ours is empty*, and went back next door, and Maki said *he crossed the THRESHOLD* to nobody, in a voice like a sports commentator." }
        ], [
          { n: "Thirty heads came up. He held out a can to her and another to Sonoda, who'd lent him notes in November and hadn't been allowed to forget it, and asked whether either of them had the physics from Tuesday, and Sonoda said yes, and Akihiko said *you're a hero*, and Sonoda went pink, and Maki said this classroom was turning into a boxing club and she wanted it stopped." }
        ])
      ] },

    { id: 'cr-aki-you-look-happy', who: 'akihiko', crush: A(P.FRIEND), slot: 'late', when: 'quiet', after: '11/15', until: '12/20',
      place: 'Iwatodai Dorm · Rooftop', time: 'Late Night', bg: 'iwatodaidorm-roof-night', scene: [
        { n: "She went up to the roof to be alone and he was already there, because of course he was, in his running jacket with the hood down, looking at the city, and he moved over on the ledge without looking to make room, the way he'd been doing since April." },
        { s: 'akihiko', f: 'neutral', t: "You look happy. Lately." },
        { s: 'akihiko', f: 'neutral', t: "That's all. I just noticed. I notice when your times change. It's the same thing." },
        { choose: [
          { t: "I think I am.", then: [
            { s: 'akihiko', f: 'happy', t: "Good." },
            { n: "He said it plainly, without anything underneath it, or with something underneath it that he'd decided to leave there, and bumped her shoulder with his, hard enough that she had to put a hand on the ledge, and they looked at the city for a while, and it was easy, and she was grateful to him for the easy more than she could have said." }
          ] },
          { t: "Are you?", then: [
            { s: 'akihiko', f: 'neutral', t: "...Yeah. Mostly. I've got a hospital to go to and a club to yell at and a best runner in the dorm. That's a lot." },
            { s: 'akihiko', f: 'happy', t: "Whatever's making you look like that, it'd better be fast. Tell it I said so." }
          ] }
        ] }
      ] }
  );
})();
